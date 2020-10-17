import { Injectable } from "@angular/core";
import { Block, Events, Lua, Workspace, WorkspaceSvg, Xml } from "blockly/core";
import { createToolBox } from "../blocks/toolbox";
import { Item } from "./item";
import { Room } from "./room";

export { Room, Item };

export type TargetTypes = "room" | "item";

export class GameMetaData {
  name = "";
  version = "";
  author = "";
}

@Injectable({
  providedIn: "root"
})
export class WorkspaceService {
  rooms: Room[] = [];
  items: Item[] = [];

  metadata = new GameMetaData();

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
      // TODO: And this
      // TODO: New Blockly has also JSON toolboxes and can update only certain categories
      // and not a whole toolbox.
      (this.workspace as WorkspaceSvg).updateToolbox(createToolBox(this));
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

    return `-- $Name: ${this.metadata.name}$
-- $Version: ${this.metadata.version}$
-- $Author: ${this.metadata.author}$

${itemsCode.join("\n")}
${roomsCode.join("\n")}
`;
  }

  serialize(): string {
    this.syncActiveTarget();
    return `<instead name="${this.metadata.name}" version="${this.metadata.version}" author="${this.metadata.author}">
${this.rooms.map(r => this.objectToXml(r)).join("")}
${this.items.map(i => this.objectToXml(i)).join("")}
</instead>`;
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
    this.metadata = {
      name: dom.attributes.getNamedItem("name")?.textContent || "",
      version: dom.attributes.getNamedItem("version")?.textContent || "",
      author: dom.attributes.getNamedItem("author")?.textContent || "",
    };
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

  resetToNew(): void {
    this.deserialize(
      `<instead xmlns="https://developers.google.com/blockly/xml" name="MyFirstGame" version="0.0" author="Unknown">
<room name="main">
<block type="room_header" deletable="false" movable="false" editable="false" x="0" y="-50">
  <field name="NAME">main</field>
</block>
<block type="prop_disp" x="0" y="0">
<mutation mode="text"></mutation>
<value name="TEXT">
    <shadow type="text">
        <field name="TEXT">Welcome to Instead</field>
    </shadow>
</value>
</block>
</room>
</instead>`);
  }
}
