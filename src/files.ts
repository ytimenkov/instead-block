import { WorkspaceSvg, Xml, Lua, Workspace, Events } from "blockly/core";
import { runGame } from "./instead";
import JSZip = require("jszip");
import { saveAs } from "file-saver";
import { InsteadObject, InsteadRoom } from "./objects";
import { GameMetaData, showInfoDialog } from "./game_info";
import { version } from "jszip";


export function registerFileCallbacks(workspace: WorkspaceSvg) {
    workspace.registerButtonCallback("convertToLua", (btn) => { convertOrRun(false, btn.getTargetWorkspace()); });
    workspace.registerButtonCallback("run", (btn) => { convertOrRun(true, btn.getTargetWorkspace()); });
    workspace.registerButtonCallback("save", (btn) => { backupWorkspace(btn.getTargetWorkspace()); });
    workspace.registerButtonCallback("download", (btn) => { exportProject(btn.getTargetWorkspace()); });
    workspace.registerButtonCallback("upload", (btn) => { addFileInput(btn.getTargetWorkspace()).click(); });
    workspace.registerButtonCallback("editMetadata", (btn) => { editWorkspaceMetadata(btn.getTargetWorkspace()); });

    // workspace.registerToolboxCategoryCallback("INSTEAD_GAMES", inteadGamesFlyout);
}

interface WorkspaceInstead extends Workspace {
    insteadMeta: GameMetaData;
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
    const insteadMeta = (workspace as WorkspaceInstead).insteadMeta;
    let code = `-- $Name: ${insteadMeta.name}$\n-- $Version: ${insteadMeta.version}$\n-- $Author: ${insteadMeta.author}$\n`;
    code += Lua.workspaceToCode(workspace);
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
        // Default
        (workspace as WorkspaceInstead).insteadMeta = { name: "Playground", version: "0.0", author: "Unknown" };
        for (let i = 0, xmlChild; (xmlChild = dom.childNodes[i]); i++) {
            if (xmlChild.nodeName == "instead") {
                const attrs = (xmlChild as Element).attributes;
                const insteadMeta: GameMetaData = {
                    name: attrs.getNamedItem("name")?.textContent || "",
                    version: attrs.getNamedItem("version")?.textContent || "",
                    author: attrs.getNamedItem("author")?.textContent || "",
                };
                (workspace as WorkspaceInstead).insteadMeta = insteadMeta;
                break;
            }
        }
        Xml.domToWorkspace(dom, workspace);
        console.log("Loaded workspace");
    } catch (error) {
        const msg = "Failed to load workspace: " + error
        console.log(msg);
        alert(msg);
        resetWorkspace(workspace);
    }
}

function saveWorkspace(workspace: Workspace): string {
    const xml = Xml.workspaceToDom(workspace);
    const insteadMeta = (workspace as WorkspaceInstead).insteadMeta;
    const insteadNode = document.createElement("instead");
    insteadNode.setAttribute("name", insteadMeta.name);
    insteadNode.setAttribute("version", insteadMeta.version);
    insteadNode.setAttribute("author", insteadMeta.author);
    xml.append(insteadNode);
    const text = Xml.domToText(xml);
    return text;
}

function backupWorkspace(workspace: Workspace) {
    const text = saveWorkspace(workspace);
    console.log("Saving text: " + text);
    window.localStorage.setItem(localStorageKey, text);
}

// Default file name for now...
const mainFileName = "main3";
const blocksFolderName = "blocks";

async function exportProject(workspace: Workspace) {
    const zip = new JSZip();

    const gameName = (workspace as WorkspaceInstead).insteadMeta.name;

    // Add blocks.
    const text = saveWorkspace(workspace);
    zip.file(`${gameName}/${blocksFolderName}/${mainFileName}.xml`, text);

    // Add files to load by Instead
    const code = Lua.workspaceToCode(workspace);
    zip.file(`${gameName}/${mainFileName}.lua`, code);

    const blob = await zip.generateAsync({ type: "blob" });
    saveAs(blob, `${gameName}.zip`);
}

async function importProject(workspace: Workspace, input: ArrayBuffer) {
    const zip = await JSZip.loadAsync(input);

    const mainFile = zip.file(new RegExp(`${blocksFolderName}/${mainFileName}.xml$`))[0];
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

async function editWorkspaceMetadata(workspace: Workspace) {
    const insteadMeta = (workspace as WorkspaceInstead).insteadMeta;
    const newData = await showInfoDialog(insteadMeta);
    if (newData) {
        (workspace as WorkspaceInstead).insteadMeta = newData;
    }
}
