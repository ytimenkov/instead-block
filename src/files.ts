import { saveAs } from "file-saver";
import * as JSZip from "jszip";
import { WorkspaceService } from "./app/workspace/workspace.service";


// Default file name for now...
const mainFileName = "main3";
const blocksFolderName = "blocks";

export async function downloadProject(wsService: WorkspaceService): Promise<void> {
    const zip = new JSZip();

    const gameName = wsService.metadata.name;

    // Add blocks.
    const text = wsService.serialize();
    zip.file(`${gameName}/${blocksFolderName}/${mainFileName}.xml`, text);

    // Add files to load by Instead
    const code = wsService.generateCode();
    zip.file(`${gameName}/${mainFileName}.lua`, code);

    const blob = await zip.generateAsync({ type: "blob" });
    saveAs(blob, `${gameName}.zip`);
}

export async function uploadProject(wsService: WorkspaceService): Promise<void> {
    addFileInput(wsService).click();
}

async function importProject(wsService: WorkspaceService, input: ArrayBuffer): Promise<void> {
    const zip = await JSZip.loadAsync(input);

    const mainFile = zip.file(new RegExp(`${blocksFolderName}/${mainFileName}.xml$`))[0];
    if (!mainFile) {
        alert("Can't find blocks definition");
        return;
    }

    const text = await mainFile.async("string");
    wsService.deserialize(text);
}

function addFileInput(wsService: WorkspaceService): HTMLElement {
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
            importProject(wsService, this.result as ArrayBuffer);
        };
        reader.readAsArrayBuffer(input.files[0]);
    };

    document.body.appendChild(inputElem);
    return inputElem;
}
