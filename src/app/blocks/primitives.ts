import { Lua } from "blockly/core";
import { defineBlock } from "./blocks";


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
