import "./blocks";

import { Lua, Blocks, Block, FieldDropdown, FieldTextInput } from "blockly/core";

function defineFieldBlock(type: string, block: Block): Block {
    block.appendValueInput("TEXT")
        .appendField(type)
        .setCheck(["String"]);
    block.setNextStatement(true);
    block.setPreviousStatement(true);
    return block;
}

function generateFieldCode(type: string, block: Block, name: string = "TEXT") {
    return type + " = " + Lua.valueToCode(block, name, Lua.ORDER_NONE) + "\n";
}

Blocks["instead_disp"] = {
    init: function (this: Block) {
        defineFieldBlock("Альт. имя (disp)", this);
    }
};

Lua["instead_disp"] = function (block: Block) {
    return generateFieldCode("disp", block)
};

// TODO: Fine-tune inv that it can be added only to objects, and not to a room.
Blocks["instead_inv"] = {
    init: function (this: Block) {
        defineFieldBlock("Инвентарь(inv) \u{1F392}", this);
    }
};

Lua["instead_inv"] = function (block: Block) {
    return generateFieldCode("inv", block);
};

Blocks["instead_act"] = {
    init: function (this: Block) {
        defineFieldBlock("Действие(act) \u{1F50D}", this);
    }
};

Lua["instead_act"] = function (block: Block) {
    return generateFieldCode("act", block);
};


Blocks["instead_used"] = {
    // TODO: Need to restrict that this function takes 2 arguments.
    // TODO: There is also 'use'
    init: function (this: Block) {
        defineFieldBlock("Использование(used) \u{1F517}", this);
    }
};

Lua["instead_used"] = function (block: Block) {
    return generateFieldCode("used", block);
};


Blocks["instead_print"] = {
    init: function (this: Block) {
        this.appendDummyInput()
            .appendField(new FieldDropdown(
                [
                    ["\u{1D45D}", "p"],
                    ["\u{1D45D}r", "pr"],
                    ["\u{1D45D}n", "pn"],
                ]), "FUN")
            .appendField(new FieldTextInput(), "TEXT");
        this.setNextStatement(true);
        this.setPreviousStatement(true);
    }
};

Lua["instead_print"] = function (block: Block) {
    const fun = block.getFieldValue("FUN")
    const msg = Lua.quote_(block.getFieldValue("TEXT"));
    return fun + "(" + msg + ")\n";
};

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
    }
};

export const selfParameterName = "self";

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
    }
};

export const whatParameterName = "what";

Lua["instead_method1"] = function (block: Block) {
    let branch = Lua.statementToCode(block, "DEFINITION");
    let code = "function(" + selfParameterName + ", " + whatParameterName + ")\n" + branch + "end";
    return [code, Lua.ORDER_HIGH];
};
