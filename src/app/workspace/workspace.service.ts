import { Injectable } from "@angular/core";
import { Block, Events, Lua, Workspace, Xml } from "blockly/core";
import { Item } from "./item";
import { Room } from "./room";

export { Room, Item };

export type TargetTypes = "room" | "item";

@Injectable({
  providedIn: "root"
})
export class WorkspaceService {
  rooms: Room[] = [];
  items: Item[] = [];

  private activeTargetField?: Room | Item;
  public get activeTarget(): Room | Item | undefined {
    return this.activeTargetField;
  }
  public set activeTarget(v: Room | Item | undefined) {
    if (!this.workspace) {
      throw new Error("Not attached to workspace");
    }
    if (this.activeTargetField) {
      this.activeTargetField.blocks = Xml.workspaceToDom(this.workspace);
    }
    this.activeTargetField = v;
    try {
      // TODO: Maybe change this to event and handle
      // changing in the component... However need to figure out how
      // to sync changes back to the workspace.
      Events.disable();
      this.workspace.clear();
      this.workspace.clearUndo();
      if (this.activeTargetField) {
        Xml.domToWorkspace(this.activeTargetField.blocks, this.workspace);
      }
    }
    finally {
      Events.enable();
    }
  }

  private workspace?: Workspace;

  constructor() { }

  attach(workspace: Workspace): void {
    this.workspace = workspace;
  }

  addNewTarget(type: TargetTypes, name: string): void {
    this.activeTarget = this.addNewObject(type, name);
  }

  private blocksToCode(blocks: Block[]): string {
    return blocks.map(block => Lua.blockToCode(block)).
      filter(code => code)
      .map(code => `${Lua.prefixLines(code as string, Lua.INDENT)}`)
      .join(",\n");
  }

  private objectToCode(type: string, name: string, blocks: Element): string {
    const headless = new Workspace();
    try {
      Xml.domToWorkspace(blocks, headless);
      const topBlocks = headless.getTopBlocks(true);
      return `${type} {
${this.blocksToCode(topBlocks)}
}`;
    } finally {
      headless.dispose();
    }
  }

  private objectToXml(item: Room | Item): string {
    let result = `<${item.type} name="${item.name}">`;
    for (let i = 0; i !== item.blocks.children.length; ++i) {
      result += Xml.domToText(item.blocks.children[i]);
    }
    result += `</${item.type}>`;
    return result;
  }

  private syncActiveTarget(): void {
    if (this.activeTargetField && this.workspace) {
      this.activeTargetField.blocks = Xml.workspaceToDom(this.workspace);
    }
  }

  generateCode(): string {
    this.syncActiveTarget();
    const itemsCode = this.items.map(item => this.objectToCode("obj", item.name, item.blocks));
    const roomsCode = this.rooms.map(room => this.objectToCode("room", room.name, room.blocks));
    return itemsCode.join("\n") + "\n" + roomsCode.join("\n");
  }

  serialize(): string {
    this.syncActiveTarget();
    return `<instead>${this.rooms.map(r => this.objectToXml(r)).join("")}${this.items.map(i => this.objectToXml(i)).join("")}</instead>`;
  }

  private addNewObject(type: string, name: string): Room | Item {
    switch (type) {
      case "room":
        const newRoom = new Room(name);
        this.rooms.push(newRoom);
        return newRoom;
      case "item":
        const newItem = new Item(name);
        this.items.push(newItem);
        return newItem;
      default:
        throw new Error(`Unknown type: ${type}`);
    }
  }

  deserialize(data: string): void {
    this.items = [];
    this.rooms = [];
    this.activeTargetField = undefined;
    const dom = Xml.textToDom(data);
    const items = [...dom.children];
    for (const item of items) {
      const type = item.localName;
      const name = item.getAttribute("name");
      if (!name) {
        throw new Error(`Element ${type} doesn't have a name`);
      }
      const newItem = this.addNewObject(type, name);
      newItem.blocks = dom.removeChild(item);
    }
    this.activeTarget = this.rooms[0];
  }
}
