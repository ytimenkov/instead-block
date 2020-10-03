import { Events, Lua, Workspace, Xml } from "blockly/core";
import { saveAs } from "file-saver";
import * as JSZip from "jszip";
import { GameMetaData, AppModuel } from "./model";
import { InsteadObject, InsteadRoom } from "./objects";

function resetWorkspace(workspace: Workspace): void {
    try {
        // Disable events because when reloading workspace
        // all events will be batched up objects removed
        // during clear() call.
        // This this cause removal of references for newly created objects.
        Events.disable();
        workspace.clear();
        workspace.clearUndo();
        InsteadObject.clear();
        InsteadRoom.clear();
    } finally {
        Events.enable();
    }
}

export function generateCode(model: AppModuel): string {
    const insteadMeta = model.insteadMeta;
    const code = `-- $Name: ${insteadMeta.name}$\n-- $Version: ${insteadMeta.version}$\n-- $Author: ${insteadMeta.author}$\n
${Lua.workspaceToCode(model.workspace)}`;
    return code;
}

export const localStorageKey = "instead-data";

export function loadWorkspace(xml: string, model: AppModuel): void {
    try {
        const dom = Xml.textToDom(xml);
        resetWorkspace(model.workspace);
        // Default
        model.insteadMeta = { name: "Playground", version: "0.0", author: "Unknown" };
        // tslint:disable-next-line: no-conditional-assignment
        for (let i = 0, xmlChild; (xmlChild = dom.childNodes[i]); i++) {
            if (xmlChild.nodeName === "instead") {
                const attrs = (xmlChild as Element).attributes;
                const insteadMeta: GameMetaData = {
                    name: attrs.getNamedItem("name")?.textContent || "",
                    version: attrs.getNamedItem("version")?.textContent || "",
                    author: attrs.getNamedItem("author")?.textContent || "",
                };
                model.insteadMeta = insteadMeta;
                break;
            }
        }
        Xml.domToWorkspace(dom, model.workspace);
        console.log("Loaded workspace");
    } catch (error) {
        const msg = "Failed to load workspace: " + error;
        console.log(msg);
        alert(msg);
        resetWorkspace(model.workspace);
    }
}

function saveWorkspace(model: AppModuel): string {
    const xml = Xml.workspaceToDom(model.workspace);
    const insteadMeta = model.insteadMeta;
    const insteadNode = document.createElement("instead");
    insteadNode.setAttribute("name", insteadMeta.name);
    insteadNode.setAttribute("version", insteadMeta.version);
    insteadNode.setAttribute("author", insteadMeta.author);
    xml.append(insteadNode);
    const text = Xml.domToText(xml);
    return text;
}

export function backupWorkspace(model: AppModuel): void {
    const text = saveWorkspace(model);
    console.log("Saving text: " + text);
    window.localStorage.setItem(localStorageKey, text);
}

// Default file name for now...
const mainFileName = "main3";
const blocksFolderName = "blocks";

export async function downloadProject(model: AppModuel): Promise<void> {
    const zip = new JSZip();

    const gameName = model.insteadMeta.name;

    // Add blocks.
    const text = saveWorkspace(model);
    zip.file(`${gameName}/${blocksFolderName}/${mainFileName}.xml`, text);

    // Add files to load by Instead
    const code = generateCode(model);
    zip.file(`${gameName}/${mainFileName}.lua`, code);

    const blob = await zip.generateAsync({ type: "blob" });
    saveAs(blob, `${gameName}.zip`);
}

export async function uploadProject(model: AppModuel): Promise<void> {
    addFileInput(model).click();
}

async function importProject(model: AppModuel, input: ArrayBuffer): Promise<void> {
    const zip = await JSZip.loadAsync(input);

    const mainFile = zip.file(new RegExp(`${blocksFolderName}/${mainFileName}.xml$`))[0];
    if (!mainFile) {
        alert("Can't find blocks definition");
        return;
    }

    const text = await mainFile.async("string");
    loadWorkspace(text, model);
}

function addFileInput(model: AppModuel): HTMLElement {
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
            importProject(model, this.result as ArrayBuffer);
        };
        reader.readAsArrayBuffer(input.files[0]);
    };

    document.body.appendChild(inputElem);
    return inputElem;
}
