import { WorkspaceSvg, Xml, Lua, Workspace, Events } from "blockly/core";
import { runGame } from "./instead";
import JSZip = require("jszip");
import { saveAs } from "file-saver";
import { InsteadObject, InsteadRoom } from "./objects";


export function registerFileCallbacks(workspace: WorkspaceSvg) {
    workspace.registerButtonCallback("convertToLua", (btn) => { convertOrRun(false, btn.getTargetWorkspace()); });
    workspace.registerButtonCallback("run", (btn) => { convertOrRun(true, btn.getTargetWorkspace()); });
    workspace.registerButtonCallback("save", (btn) => { saveWorkspace(btn.getTargetWorkspace()); });
    workspace.registerButtonCallback("download", (btn) => { exportProject(btn.getTargetWorkspace()); });
    workspace.registerButtonCallback("upload", (btn) => { addFileInput(btn.getTargetWorkspace()).click(); });
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

function resetWorkspace(workspace: Workspace) {
    try {
        // Disable events because when reloading workspace
        // all events will be batched up objects removed
        // during clear() call.
        // This this cause removal of references for newly created objects.
        Events.disable();
        workspace.clear();
        InsteadObject.clear();
        InsteadRoom.clear();
    } finally {
        Events.enable();
    }
}

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
        resetWorkspace(workspace);
        Xml.domToWorkspace(dom, workspace);
        console.log("Loaded workspace");
    } catch (error) {
        const msg = "Failed to load workspace: " + error
        console.log(msg);
        alert(msg);
        resetWorkspace(workspace);
    }
}

function saveWorkspace(workspace: Workspace) {
    const xml = Xml.workspaceToDom(workspace);
    const text = Xml.domToText(xml);
    console.log("Saving text: " + text);
    window.localStorage.setItem(localStorageKey, text);
}

// Default file name for now...
const mainFileName = "main3";
const blocksFolderName = "blocks";

async function exportProject(workspace: Workspace) {
    const zip = new JSZip();

    // Add blocks.
    const xml = Xml.workspaceToDom(workspace);
    const text = Xml.domToText(xml);
    const blocksFolder = zip.folder(blocksFolderName) as JSZip;
    blocksFolder.file(mainFileName + ".xml", text);

    // Add files to load by Instead
    const code = Lua.workspaceToCode(workspace);
    zip.file(mainFileName + ".lua", code);

    const blob = await zip.generateAsync({ type: "blob" });
    saveAs(blob, "game.zip");
}

async function importProject(workspace: Workspace, input: ArrayBuffer) {
    const zip = await JSZip.loadAsync(input);

    const blocksFolder = zip.folder(blocksFolderName) as JSZip;
    const mainFile = blocksFolder.file(mainFileName + ".xml");
    if (!mainFile) {
        alert("Can't find blocks definition");
        return;
    }
    const text = await mainFile.async("string");
    loadWorkspace(text, workspace);
}

function addFileInput(workspace: Workspace) {
    const inputId = "FileUploadInput";
    const element = document.getElementById(inputId);
    if (element)
        return element;

    const inputElem = document.createElement("input");
    inputElem.accept = ".zip";
    inputElem.type = "file";
    inputElem.style.display = "none";
    inputElem.id = inputId;

    inputElem.onchange = (e) => {
        let input = e.target as HTMLInputElement;
        if (!input.files)
            return;

        const reader = new FileReader();
        reader.onload = function () {
            input.value = "";
            importProject(workspace, this.result as ArrayBuffer);
        };
        reader.readAsArrayBuffer(input.files[0]);
    };

    document.body.appendChild(inputElem);
    return inputElem;
}
