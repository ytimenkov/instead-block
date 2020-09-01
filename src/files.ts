import { WorkspaceSvg, Xml, Lua, Workspace, FlyoutButton } from "blockly/core";
import { runGame } from "./instead";
import JSZip = require("jszip");
import { saveAs } from "file-saver";


export function registerFileCallbacks(workspace: WorkspaceSvg) {
    workspace.registerButtonCallback("convertToLua", (btn) => { convertOrRun(false, btn.getTargetWorkspace()); });
    workspace.registerButtonCallback("run", (btn) => { convertOrRun(true, btn.getTargetWorkspace()); });
    workspace.registerButtonCallback("save", (btn) => { saveWorkspace(btn.getTargetWorkspace()); });
    workspace.registerButtonCallback("download", (btn) => { exportProject(btn.getTargetWorkspace()); });
    // workspace.registerToolboxCategoryCallback("INSTEAD_GAMES", inteadGamesFlyout);
}

/*
// TODO: Here I wanted to allow saving multipel games into local storage,
// but seems not reasonable
function inteadGamesFlyout(workspace: Workspace): Element[] {
    const xmlList: Element[] = [];

    const createButton = (text: string, key: string, handler: { (_0: FlyoutButton): any }) => {
        const button = document.createElement('button');
        button.setAttribute('text', text);
        button.setAttribute('callbackKey', key);

        (workspace as WorkspaceSvg).registerButtonCallback(key, handler);
        xmlList.push(button);
    };

    createButton("To Lua", "convertToLua", (btn) => { convertOrRun(false, btn.getTargetWorkspace()); });
    createButton("Run", "run", (btn) => { convertOrRun(true, btn.getTargetWorkspace()); });
    createButton("Save", "save", (btn) => { saveWorkspace(btn.getTargetWorkspace()); });
    createButton("Save as", "save_as", (btn) => { saveWorkspaceAs(btn.getTargetWorkspace()); });

    let addSep = () => {
        xmlList.push(document.createElement("sep"));

        const label = document.createElement("label");
        label.setAttribute("text", "Load existing Game:");
        xmlList.push(label);
    }

    const prefix = "instead-game-";

    for (let i = 0, key; (key = window.localStorage.key(i)); i++) {
        if (key.startsWith(prefix)) {
            addSep();
            addSep = () => { };
            const name = key.substr(prefix.length);
            const loadKey = key;
            createButton(name, key, (btn) => { loadWorkspace(loadKey, btn.getTargetWorkspace()); });
        }
    }

    return xmlList;
}
*/
function convertOrRun(run: boolean, workspace: Workspace) {
    const code = Lua.workspaceToCode(workspace);
    const codeElem = document.getElementById("generatedCode") as HTMLElement;
    codeElem.innerText = code;
    if (run) {
        runGame(code);
    } else {
        codeElem.scrollIntoView();
    }
}

export const localStorageKey = "instead-data";

export function loadWorkspace(xml: string, workspace: Workspace) {
    try {
        const dom = Xml.textToDom(xml);
        Xml.domToWorkspace(dom, workspace);
        console.log("Loaded workspace");
    } catch (error) {
        console.log("Failed to load workspace: " + error);
        workspace.clear();
    }
}

function saveWorkspace(workspace: Workspace) {
    const xml = Xml.workspaceToDom(workspace);
    const text = Xml.domToText(xml);
    console.log("Saving text: " + text);
    window.localStorage.setItem(localStorageKey, text);
}

async function exportProject(workspace: Workspace) {
    const zip = new JSZip();

    // Default file name for now...
    const fileName = "main3";


    // Add blocks.
    const xml = Xml.workspaceToDom(workspace);
    const text = Xml.domToText(xml);
    const blocksFolder = zip.folder("blocks") as JSZip;
    blocksFolder.file(fileName + ".xml", text);

    // Add files to load by Instead
    const code = Lua.workspaceToCode(workspace);
    zip.file(fileName + ".lua", code);

    const blob = await zip.generateAsync({ type: "blob" });
    saveAs(blob, "game.zip");
}
