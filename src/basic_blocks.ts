import { defineBlock } from "./blocks";

import { Lua, Block } from "blockly/core";

function defineFieldBlock(type: string, block: Block): Block {
    block.appendValueInput("TEXT")
        .appendField(type)
        .setCheck(["String"]);
    block.setNextStatement(true);
    block.setPreviousStatement(true);
    return block;
}

function generateFieldCode(type: string, block: Block, name: string = "TEXT") {
    return `${type} = ${Lua.valueToCode(block, name, Lua.ORDER_NONE)}`;
}

function defineListBlock(type: string, block: Block): Block {
    block.appendValueInput("ITEMS")
        .appendField(type)
        .setCheck(["Array"]);
    block.setNextStatement(true);
    block.setPreviousStatement(true);
    return block;
}

defineBlock("instead_disp",
    (block) => defineFieldBlock("Альт. имя (disp)", block)
        .setStyle("properties_blocks"),

    (block) => generateFieldCode("disp", block)
);

defineBlock("instead_decor",
    (block) => defineFieldBlock("Декорации (decor)", block)
        .setStyle("properties_blocks"),

    (block) => generateFieldCode("decor", block)
);


// TODO: Fine-tune inv that it can be added only to objects, and not to a room.
defineBlock("instead_inv",
    (block) => defineFieldBlock("Инвентарь(inv) \u{1F392}", block)
        .setStyle("properties_blocks"),

    (block) => generateFieldCode("inv", block)
);

defineBlock("instead_act",
    (block) => defineFieldBlock("Действие(act) \u{1F50D}", block)
        .setStyle("properties_blocks"),

    (block) => generateFieldCode("act", block)
);


defineBlock("instead_tak",
    (block) => defineFieldBlock("Взяли(tak) \u{1F4E6}", block)
        .setStyle("properties_blocks"),

    (block) => generateFieldCode("tak", block)
);

// TODO: Need to restrict that this function takes 2 arguments.
defineBlock("instead_used",
    (block) => defineFieldBlock("Использование(used) \u{1F517}", block)
        .setStyle("properties_blocks"),

    (block) => generateFieldCode("used", block)
);

defineBlock("instead_use",
    (block) => defineFieldBlock("Использование(use) \u{1F528}", block)
        .setStyle("properties_blocks"),

    (block) => generateFieldCode("use", block)
);

defineBlock("instead_onenter",
    (block) => defineFieldBlock("При входе (onenter)", block)
        .setStyle("properties_blocks"),

    (block) => generateFieldCode("onenter", block)
);

defineBlock("instead_onexit",
    (block) => defineFieldBlock("При выходе (onexit)", block)
        .setStyle("properties_blocks"),

    (block) => generateFieldCode("onexit", block)
);

defineBlock("instead_obj",
    (block) => defineListBlock("Объекты (obj)", block)
        .setStyle("rooms_blocks"),

    (block) => generateFieldCode("obj", block, "ITEMS")
);

defineBlock("instead_way",
    (block) => defineListBlock("Выходы (way)", block)
        .setStyle("rooms_blocks"),

    (block) => generateFieldCode("way", block, "ITEMS")
);


defineBlock("instead_return_false",
    (block) => {
        block.appendDummyInput()
            .appendField("отменить действие");
        block.setPreviousStatement(true);
        block.setStyle("logic_blocks");
    },
    (_block) => "return false\n"
);

export const selfParameterName = "self";

defineBlock("instead_self",
    (block) => {
        block.appendDummyInput()
            .appendField("себя");
        block.setOutput(true, ["InsteadObject", "InsteadRoom"]);
        block.setStyle("procedure_blocks");
    },
    (_block) => [selfParameterName, Lua.ORDER_ATOMIC]
);

export const whatParameterName = "what";

defineBlock("instead_what",
    (block) => {
        block.appendDummyInput()
            .appendField("объект");
        block.setOutput(true, ["InsteadObject", "InsteadRoom"]);
        block.setStyle("procedure_blocks");
    },
    (_block) => [whatParameterName, Lua.ORDER_ATOMIC]
);
