import "./blocks";
import { selfParameterName } from "./basic_blocks";

import { Lua, Blocks, Block } from "blockly/core";

Blocks["instead_self"] = {
    init: function (this: Block) {
        this.appendDummyInput()
            .appendField("себя");
        this.setOutput(true, ["InsteadObject", "InsteadRoot"])
    }
};

Lua["instead_self"] = function (block: Block) {
    return [selfParameterName, Lua.ORDER_ATOMIC];
};

Blocks["instead_take"] = {
    init: function (this: Block) {
        this.appendValueInput("WHAT")
            .appendField("взять(take): ")
            .setCheck("InsteadObject");
        this.setNextStatement(true);
        this.setPreviousStatement(true);
    }
};

Lua["instead_take"] = function (block: Block) {
    const what = Lua.valueToCode(block, "WHAT", Lua.ORDER_NONE);
    return "take(" + what + ");\n";
};

