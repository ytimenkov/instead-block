import "./blocks";

import { Lua, Blocks, Block } from "blockly/core";

function defineFieldBlock(type: string, block: Block): Block {
    block.appendValueInput("TEXT")
        .appendField(type)
        .setCheck(["String"]);
    block.setNextStatement(true);
    block.setPreviousStatement(true);
    return block;
}

function generateFieldCode(type: string, block: Block, name: string = "TEXT") {
    return type + " = " + Lua.valueToCode(block, name, Lua.ORDER_NONE) + ";\n";
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
}

Lua["instead_inv"] = function (block: Block) {
    return generateFieldCode("inv", block);
}

Blocks["instead_act"] = {
    init: function (this: Block) {
        defineFieldBlock("Действие(act) \u{1F50D}", this);
    }
}

Lua["instead_act"] = function (block: Block) {
    return generateFieldCode("act", block);
}

Blocks["instead_print"] = {
    init: function (this: Block) {

        this.jsonInit(
            {
                "message0": "\u{1D45D} %1",
                "args0": [
                    {
                        "type": "field_input",
                        "name": "TEXT",
                        "TEXT": "",
                    }],
                "nextStatement": null,
                "previousStatement": null,
            }
        );
    }
};

Lua["instead_print"] = function (block: Block) {
    const msg = Lua.quote_(block.getFieldValue("TEXT"));
    return "p(" + msg + ")\n";
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

Lua["instead_method0"] = function (block: Block) {
    let branch = Lua.statementToCode(block, "DEFINITION");
    let code = "function(self) {\n" + branch + "}";
    return [code, Lua.ORDER_HIGH];
};
