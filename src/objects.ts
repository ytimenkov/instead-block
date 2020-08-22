import "./blocks";

import { Lua, Blocks, Block, FieldTextInput } from "blockly/core";

function generateObjectCode(type: string, block: Block): string {
    const name = block.getFieldValue("NAME");

    const dsc = Lua.valueToCode(block, "DSC", Lua.ORDER_NONE);
    const definition = Lua.statementToCode(block, "DEFINITION");

    let code = type + " {\n"
        + "   nam = " + Lua.quote_(name) + ";\n";

    if (dsc) {
        code += "   dsc = "
        code += dsc;
        code += ";\n"
    }

    if (definition)
        code += definition;

    code += "}";

    return code;
}

function addStandardFields(type: string, block: Block): Block {
    block.appendDummyInput()
        .appendField(type)
        .appendField(new FieldTextInput(type), "NAME")
    block.appendValueInput("DSC")
        .appendField("Описание(dsc): ")
        .setCheck("String");

    block.appendStatementInput("DEFINITION");
    return block;
}

Blocks["instead_object"] = {
    init: function (this: Block) {
        addStandardFields("Объект", this);
    }
};

Lua["instead_object"] = function (block: Block) {
    return generateObjectCode("obj", block);
};

Blocks["instead_room"] = {
    init: function (this: Block) {
        addStandardFields("Комната", this);
    }
};

Lua["instead_room"] = function (block: Block) {
    return generateObjectCode("room", block);
};

// TODO: Maybe have a separate object "Main room" where nam overridden into "main" and disp used instead.
// Or maybe just provide it as a "default" workspace, since disp is useful for dynamic title.

