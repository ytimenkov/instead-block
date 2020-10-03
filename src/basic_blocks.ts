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

function generateFieldCode(type: string, block: Block, name: string = "TEXT"): string {
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
    (block) => defineFieldBlock($localize`Display name`, block)
        .setStyle("properties_blocks"),

    (block) => generateFieldCode("disp", block)
);

defineBlock("instead_decor",
    (block) => defineFieldBlock($localize`Decoration`, block)
        .setStyle("properties_blocks"),

    (block) => generateFieldCode("decor", block)
);


// TODO: Fine-tune inv that it can be added only to objects, and not to a room.
defineBlock("instead_inv",
    (block) => defineFieldBlock($localize`Inventory \u{1F392}`, block)
        .setStyle("properties_blocks"),

    (block) => generateFieldCode("inv", block)
);

defineBlock("instead_act",
    (block) => defineFieldBlock($localize`On Action \u{1F50D}`, block)
        .setStyle("properties_blocks"),

    (block) => generateFieldCode("act", block)
);


defineBlock("instead_tak",
    (block) => defineFieldBlock($localize`On Pick up \u{1F4E6}`, block)
        .setStyle("properties_blocks"),

    (block) => generateFieldCode("tak", block)
);

// TODO: Need to restrict that this function takes 2 arguments.
defineBlock("instead_used",
    (block) => defineFieldBlock($localize`Used with \u{1F517}`, block)
        .setStyle("properties_blocks"),

    (block) => generateFieldCode("used", block)
);

defineBlock("instead_use",
    (block) => defineFieldBlock($localize`Use self on \u{1F528}`, block)
        .setStyle("properties_blocks"),

    (block) => generateFieldCode("use", block)
);

defineBlock("instead_onenter",
    (block) => defineFieldBlock($localize`On Enter`, block)
        .setStyle("properties_blocks"),

    (block) => generateFieldCode("onenter", block)
);

defineBlock("instead_onexit",
    (block) => defineFieldBlock($localize`On Exit`, block)
        .setStyle("properties_blocks"),

    (block) => generateFieldCode("onexit", block)
);

defineBlock("instead_obj",
    (block) => defineListBlock($localize`Objects`, block)
        .setStyle("rooms_blocks"),

    (block) => generateFieldCode("obj", block, "ITEMS")
);

defineBlock("instead_way",
    (block) => defineListBlock($localize`Exits`, block)
        .setStyle("rooms_blocks"),

    (block) => generateFieldCode("way", block, "ITEMS")
);


defineBlock("instead_return_false",
    (block) => {
        block.appendDummyInput()
            .appendField($localize`Cancel action`);
        block.setPreviousStatement(true);
        block.setStyle("logic_blocks");
    },
    (_) => "return false\n"
);

export const selfParameterName = "self";

defineBlock("instead_self",
    (block) => {
        block.appendDummyInput()
            .appendField($localize`self`);
        block.setOutput(true, ["InsteadObject", "InsteadRoom"]);
        block.setStyle("procedure_blocks");
    },
    (_) => [selfParameterName, Lua.ORDER_ATOMIC]
);

export const whatParameterName = "what";

defineBlock("instead_what",
    (block) => {
        block.appendDummyInput()
            .appendField($localize`what`);
        block.setOutput(true, ["InsteadObject", "InsteadRoom"]);
        block.setStyle("procedure_blocks");
    },
    (_) => [whatParameterName, Lua.ORDER_ATOMIC]
);
