
import * as Blockly from "blockly/core";
import "blockly/blocks";

import * as Ru from 'blockly/msg/ru';
Blockly.setLocale(Ru);

import "./blocks";

const workspace = Blockly.inject("blocklyDiv", {
    toolbox: document.getElementById("toolbox") as HTMLElement,
    move: { scrollbars: false },
});


const button = document.getElementById('blocklyButton') as HTMLElement;

button.addEventListener('click', function () {
    const code = Blockly.Lua.workspaceToCode(workspace);
    console.log(code);
});
