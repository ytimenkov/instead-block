import "./blocks";
import { selfParameterName, whatParameterName } from "./basic_blocks";

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

Blocks["instead_what"] = {
    init: function (this: Block) {
        this.appendDummyInput()
            .appendField("оъект");
        this.setOutput(true, ["InsteadObject", "InsteadRoot"])
    }
};

Lua["instead_what"] = function (block: Block) {
    return [whatParameterName, Lua.ORDER_ATOMIC];
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

Blocks["instead_where"] = {
    init: function (this: Block) {
        this.appendValueInput("WHAT")
            .appendField("что")
            .setCheck("InsteadObject");
        this.appendValueInput("WHERE")
            .appendField("где")
            .setCheck(["InsteadRoom", "InsteadObject"]);
        this.setOutput(true, ["Boolean"]);
        this.setInputsInline(true);
    }
};

Lua["instead_where"] = function (block: Block) {
    const what = Lua.valueToCode(block, "WHAT", Lua.ORDER_NONE);
    const where = Lua.valueToCode(block, "WHERE", Lua.ORDER_NONE);
    return ["where(" + what + ") = " + where, Lua.ORDER_ATOMIC];
};

