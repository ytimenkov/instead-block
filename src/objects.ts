import "./blocks";

import { Lua, Blocks, Block, FieldTextInput } from "blockly/core";

function define_object(type: string, block: Block): string {
    const name = block.getFieldValue("NAME");
    let definition = Lua.statementToCode(block, "DEFINITION");
    return type + " {\n"
        + "   nam = " + Lua.quote_(name) + ";\n"
        + definition
        + "}";
}

function addStandardFields(type: string, block: Block): Block {
    block.appendDummyInput()
        .appendField(type)
        .appendField(new FieldTextInput(type), "NAME")

    block.appendStatementInput("DEFINITION");
    return block;
}

Blocks["instead_object"] = {
    init: function (this: Block) {
        addStandardFields("Объект", this);
    }
};

Lua["instead_object"] = function (block: Block) {
    return define_object("obj", block);
};

Blocks["instead_room"] = {
    init: function (this: Block) {
        addStandardFields("Комната", this);
    }
};

Lua["instead_room"] = function (block: Block) {
    return define_object("room", block);
};

