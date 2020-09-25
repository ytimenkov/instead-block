import { Events, Lua, Workspace, Xml } from "blockly/core";
import { saveAs } from "file-saver";
import * as JSZip from "jszip";
import { GameMetaData, WorkspaceInstead } from "./model";
import { InsteadObject, InsteadRoom } from "./objects";

function resetWorkspace(workspace: Workspace): void {
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

export function generateCode(workspace: Workspace): string {
    const insteadMeta = (workspace as WorkspaceInstead).insteadMeta;
    const code = `-- $Name: ${insteadMeta.name}$\n-- $Version: ${insteadMeta.version}$\n-- $Author: ${insteadMeta.author}$\n
${Lua.workspaceToCode(workspace)}`;
    return code;
}

export const localStorageKey = "instead-data";

export function loadWorkspace(xml: string, workspace: Workspace): void {
    try {
        const dom = Xml.textToDom(xml);
        resetWorkspace(workspace);
        // Default
        (workspace as WorkspaceInstead).insteadMeta = { name: "Playground", version: "0.0", author: "Unknown" };
        for (let i = 0, xmlChild; (xmlChild = dom.childNodes[i]); i++) {
            if (xmlChild.nodeName === "instead") {
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
        const msg = "Failed to load workspace: " + error;
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

export function backupWorkspace(workspace: Workspace): void {
    const text = saveWorkspace(workspace);
    console.log("Saving text: " + text);
    window.localStorage.setItem(localStorageKey, text);
}

// Default file name for now...
const mainFileName = "main3";
const blocksFolderName = "blocks";

export async function downloadProject(workspace: Workspace): Promise<void> {
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

export async function uploadProject(workspace: Workspace): Promise<void> {
    addFileInput(workspace).click();
}

async function importProject(workspace: Workspace, input: ArrayBuffer): Promise<void> {
    const zip = await JSZip.loadAsync(input);

    const mainFile = zip.file(new RegExp(`${blocksFolderName}/${mainFileName}.xml$`))[0];
    if (!mainFile) {
        alert("Can't find blocks definition");
        return;
    }

    const text = await mainFile.async("string");
    loadWorkspace(text, workspace);
}

function addFileInput(workspace: Workspace): HTMLElement {
    const inputId = "FileUploadInput";
    const element = document.getElementById(inputId);
    if (element) {
        return element;
    }

    const inputElem = document.createElement("input");
    inputElem.accept = ".zip";
    inputElem.type = "file";
    inputElem.style.display = "none";
    inputElem.id = inputId;

    inputElem.onchange = (e) => {
        const input = e.target as HTMLInputElement;
        if (!input.files) {
            return;
        }

        const reader = new FileReader();
        reader.onload = function(): void {
            input.value = "";
            importProject(workspace, this.result as ArrayBuffer);
        };
        reader.readAsArrayBuffer(input.files[0]);
    };

    document.body.appendChild(inputElem);
    return inputElem;
}
