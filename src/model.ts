import { Workspace } from "blockly/core";

export class GameMetaData {
    name = "";
    version = "";
    author = "";
}

export interface AppModuel {
    workspace: Workspace;
    insteadMeta: GameMetaData;
}
