
import * as Blockly from "blockly/core";
import "blockly/blocks";

import * as Ru from 'blockly/msg/ru';
Blockly.setLocale(Ru);

import "./basic_blocks";
import "./objects";

const workspace = Blockly.inject("blocklyDiv", {
    toolbox: document.getElementById("toolbox") as HTMLElement,
    move: { scrollbars: false },
});


(document.getElementById('convertButton') as HTMLElement).addEventListener('click', function () {
    const code = Blockly.Lua.workspaceToCode(workspace);
    console.log(code);
});

const localStorageKey = "instead-data";

(document.getElementById('saveButton') as HTMLElement).addEventListener('click', function () {
    const xml = Blockly.Xml.workspaceToDom(workspace);
    const text = Blockly.Xml.domToText(xml);
    console.log("Saving text: " + text)
    window.localStorage.setItem(localStorageKey, text);
});

if (window.localStorage[localStorageKey]) {
    const xml = Blockly.Xml.textToDom(window.localStorage[localStorageKey]);
    try {
        Blockly.Xml.domToWorkspace(xml, workspace);
        console.log("Loaded workspace");
    } catch (error) {
        console.log("Failed to load workspace: " + error);
        workspace.clear();
    }
}
