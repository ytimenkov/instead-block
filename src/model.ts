import { WorkspaceSvg } from 'blockly';

export interface GameMetaData {
    name: string;
    version: string;
    author: string;
}

export interface WorkspaceInstead extends WorkspaceSvg {
    insteadMeta: GameMetaData;
}

export interface AppModuel {
    workspace?: WorkspaceInstead;
    generatedCode: string;
};
