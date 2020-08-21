
import * as Blockly from "blockly/core";
import "blockly/blocks";
import "blockly/lua";

import * as Ru from 'blockly/msg/ru';
Blockly.setLocale(Ru);

Blockly.inject("blocklyDiv", {
    toolbox: document.getElementById("toolbox") as HTMLElement,
    move: { scrollbars: false },
});
