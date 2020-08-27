import "./blocks";

import { Lua, Blocks, Block, FieldTextInput, FieldDropdown } from "blockly/core";

function generateObjectCode(type: string, block: Block): string {
    const name = block.getFieldValue("NAME");

    const dsc = Lua.valueToCode(block, "DSC", Lua.ORDER_NONE);

    let code = type + " {\n"
        + Lua.INDENT + "nam = " + Lua.quote_(name) + ",\n";

    if (dsc) {
        code += Lua.prefixLines("dsc = " + dsc, Lua.INDENT);
    }

    // Blocks in definition need to be comma-separated.
    let needNL = false;
    for (let defBlock = block.getInputTargetBlock("DEFINITION"); defBlock; defBlock = defBlock.getNextBlock()) {
        const defCode = Lua.blockToCode(defBlock, true);
        if (typeof defCode !== "string") {
            throw TypeError("Expecting code from statement block: " +
                (defBlock && defBlock.type));
        }
        if (defCode) {
            needNL = true;
            code += ",\n" + Lua.prefixLines(defCode, Lua.INDENT);
        }
    }

    if (needNL) {
        code += "\n";
    }

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

function listObjects(block: Block, type: string) {
    const blocks = block.workspace.getBlocksByType(type, false);
    return blocks.map((block, index, array) => {
        // TODO: Maybe use block id and do resolution to the name later...
        return [block.getFieldValue("NAME"), block.getFieldValue("NAME")];
    });
}

Blocks["instead_object_ref"] = {
    init: function (this: Block) {
        this.appendDummyInput()
            .appendField(new FieldDropdown(() => listObjects(this, "instead_object")), "NAME");
        this.setOutput(true, ["InsteadObject"]);
    }
};

Lua["instead_object_ref"] = function (block: Block) {
    return ["_\"" + block.getFieldValue("NAME") + "\"", Lua.ORDER_ATOMIC]
}
