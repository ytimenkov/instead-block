import { Lua } from "blockly/core";
import { defineBlock } from "./blocks";

export const selfParameterName = "self";
export const whatParameterName = "what";

export function definePrimitivesBlocks(): void {
    defineBlock("instead_return_false",
        (block) => {
            block.appendDummyInput()
                .appendField($localize`Cancel action`);
            block.setPreviousStatement(true);
            block.setStyle("logic_blocks");
        },
        (_) => "return false\n"
    );

    defineBlock("instead_self",
        (block) => {
            block.appendDummyInput()
                .appendField($localize`self`);
            block.setOutput(true, ["InsteadObject", "InsteadRoom"]);
            block.setStyle("procedure_blocks");
        },
        (_) => [selfParameterName, Lua.ORDER_ATOMIC]
    );

    defineBlock("instead_what",
        (block) => {
            block.appendDummyInput()
                .appendField($localize`what`);
            block.setOutput(true, ["InsteadObject", "InsteadRoom"]);
            block.setStyle("procedure_blocks");
        },
        (_) => [whatParameterName, Lua.ORDER_ATOMIC]
    );
}
