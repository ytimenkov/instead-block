import "./blocks";
import { selfParameterName, whatParameterName } from "./basic_blocks";

import { Lua, Blocks, Block, FieldDropdown, FieldTextInput, } from "blockly/core";

Blocks["instead_method0"] = {
    init: function (this: Block) {
        this.jsonInit({
            "message0": "\u{1D453} %1",
            "args0": [
                {
                    "type": "input_statement",
                    "name": "DEFINITION"
                }],
            "output": ["String"],
        });
        this.setStyle("procedure_blocks");
    }
};


Lua["instead_method0"] = function (block: Block) {
    let branch = Lua.statementToCode(block, "DEFINITION");
    let code = "function(" + selfParameterName + ")\n" + branch + "end";
    return [code, Lua.ORDER_HIGH];
};

Blocks["instead_method1"] = {
    init: function (this: Block) {
        this.jsonInit({
            "message0": "\u{1D453} (w) %1",
            "args0": [
                {
                    "type": "input_statement",
                    "name": "DEFINITION"
                }],
            "output": ["String"],
        });
        this.setStyle("procedure_blocks");
    }
};

Lua["instead_method1"] = function (block: Block) {
    let branch = Lua.statementToCode(block, "DEFINITION");
    let code = "function(" + selfParameterName + ", " + whatParameterName + ")\n" + branch + "end";
    return [code, Lua.ORDER_HIGH];
};

Blocks["instead_print"] = {
    init: function (this: Block) {
        this.appendDummyInput()
            .appendField(new FieldDropdown(
                [
                    ["\u{1D45D}", "p"],
                    ["\u{1D45D}\u{1D45F}", "pr"],
                    ["\u{1D45D}\u{1D45B}", "pn"],
                ]), "FUN")
            .appendField(new FieldTextInput(), "TEXT");
        this.setNextStatement(true);
        this.setPreviousStatement(true);
        this.setStyle("text_blocks");
    }
};

Lua["instead_print"] = function (block: Block) {
    const fun = block.getFieldValue("FUN")
    const msg = Lua.quote_(block.getFieldValue("TEXT"));
    return fun + "(" + msg + ")\n";
};

Blocks["instead_take"] = {
    init: function (this: Block) {
        this.appendValueInput("WHAT")
            .appendField("взять(take): ")
            .setCheck("InsteadObject");
        this.setNextStatement(true);
        this.setPreviousStatement(true);
        this.setStyle("actions_blocks");
    }
};

Lua["instead_take"] = function (block: Block) {
    const what = Lua.valueToCode(block, "WHAT", Lua.ORDER_NONE);
    return "take(" + what + ")\n";
};

Blocks["instead_disable"] = {
    init: function (this: Block) {
        this.appendValueInput("WHAT")
            .appendField("выключить(disable): ")
            .setCheck(["InsteadObject"]);
        this.setNextStatement(true);
        this.setPreviousStatement(true);
        this.setStyle("actions_blocks");
    }
};

Lua["instead_disable"] = function (block: Block) {
    const what = Lua.valueToCode(block, "WHAT", Lua.ORDER_NONE);
    return "disable(" + what + ")\n";
};


Blocks["instead_enable"] = {
    init: function (this: Block) {
        this.appendValueInput("WHAT")
            .appendField("включить(enable): ")
            .setCheck(["InsteadObject"]);
        this.setNextStatement(true);
        this.setPreviousStatement(true);
        this.setStyle("actions_blocks");
    }
};

Lua["instead_enable"] = function (block: Block) {
    const what = Lua.valueToCode(block, "WHAT", Lua.ORDER_NONE);
    return "enable(" + what + ")\n";
};

Blocks["instead_drop"] = {
    init: function (this: Block) {
        this.appendValueInput("WHAT")
            .appendField("бросить(drop): ")
            .setCheck(["InsteadObject"]);
        this.appendValueInput("WHERE")
            .appendField("в")
            .setCheck(["InsteadObject"])
        this.setNextStatement(true);
        this.setPreviousStatement(true);
        this.setInputsInline(true);
        this.setStyle("actions_blocks");
    }
};

Lua["instead_drop"] = function (block: Block) {
    const what = Lua.valueToCode(block, "WHAT", Lua.ORDER_NONE);
    const where = Lua.valueToCode(block, "WHERE", Lua.ORDER_NONE);
    let code = "drop(" + what;
    if (where)
        code += ", " + where;
    code += ")\n";
    return code;
};

Blocks["instead_where"] = {
    init: function (this: Block) {
        this.appendValueInput("WHAT")
            .appendField("(where)")
            .setCheck("InsteadObject");
        this.appendDummyInput()
            .appendField(new FieldDropdown([
                ["\u{2208}", "=="],
                ["\u{2209}", "~="]
            ]), "COND");
        this.appendValueInput("WHERE")
            .setCheck(["InsteadRoom", "InsteadObject"]);
        this.setOutput(true, ["Boolean"]);
        this.setInputsInline(true);
        this.setStyle("logic_blocks");
    }
};

Lua["instead_where"] = function (block: Block) {
    const cond = block.getFieldValue("COND")
    const what = Lua.valueToCode(block, "WHAT", Lua.ORDER_NONE);
    const where = Lua.valueToCode(block, "WHERE", Lua.ORDER_NONE);
    return ["where(" + what + ") " + cond + " " + where, Lua.ORDER_ATOMIC];
};
