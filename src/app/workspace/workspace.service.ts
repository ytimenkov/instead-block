import { Injectable } from "@angular/core";
import { Events, Workspace, Xml } from "blockly/core";
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

  addNewTarget(type: TargetTypes): void {
    switch (type) {
      case "room":
        const newRoom = new Room("name");
        this.rooms.push(newRoom);
        this.activeTarget = newRoom;
        break;
      case "item":
        const newItem = new Item("name");
        this.items.push(newItem);
        this.activeTarget = newItem;
        break;
    }
  }

}
