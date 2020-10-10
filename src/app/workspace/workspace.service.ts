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
      console.log(`Saving blocks`);
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
        console.log(`Restoring blocks`);
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
    switch (type) {
      case "room":
        const newRoom = new Room(name);
        this.rooms.push(newRoom);
        this.activeTarget = newRoom;
        break;
      case "item":
        const newItem = new Item(name);
        this.items.push(newItem);
        this.activeTarget = newItem;
        break;
    }
  }

  private blocksToCode(blocks: Block[]): string {
    return blocks.map(block => Lua.blockToCode(block)).
      filter(code => code)
      .map(code => `,\n${Lua.prefixLines(code as string, Lua.INDENT)}`)
      .join("");
  }

  private objectToCode(type: string, name: string, blocks: Element): string {
    const headless = new Workspace();
    try {
      Xml.domToWorkspace(blocks, headless);
      const topBlocks = headless.getTopBlocks(true);
      return `${type} {
${Lua.INDENT}nam = ${Lua.quote_(name)}${this.blocksToCode(topBlocks)}
}`;
    } finally {
      headless.dispose();
    }
  }

  generateCode(): string {
    if (this.activeTargetField && this.workspace) {
      this.activeTargetField.blocks = Xml.workspaceToDom(this.workspace);
    }
    const itemsCode = this.items.map(item => this.objectToCode("obj", item.name, item.blocks));
    const roomsCode = this.rooms.map(room => this.objectToCode("room", room.name, room.blocks));
    return itemsCode.join("\n") + roomsCode.join("\n");
  }

}
