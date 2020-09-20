import { FieldDropdown, FieldTextInput, Lua } from "blockly/core";
import { defineBlock } from "./blocks";

defineBlock("instead_print",
    (block) => {
        block.appendDummyInput()
            .appendField(new FieldDropdown(
                [
                    ["\u{1D45D}", "p"],
                    ["\u{1D45D}\u{1D45F}", "pr"],
                    ["\u{1D45D}\u{1D45B}", "pn"],
                ]), "FUN")
            .appendField(new FieldTextInput(), "TEXT");
        block.setNextStatement(true);
        block.setPreviousStatement(true);
        block.setStyle("text_blocks");
    },
    (block) => {
        const fun = block.getFieldValue("FUN");
        const msg = Lua.quote_(block.getFieldValue("TEXT"));
        return `${fun}(${msg})\n`;
    }
);

defineBlock("instead_rnd",
    (block) => {
        block.appendValueInput("FROM")
            .appendField("случайное число от")
            .setCheck("Number");
        block.appendValueInput("TO")
            .appendField("до")
            .setCheck("Number");
        block.setStyle("math_blocks");
        block.setInputsInline(true);
        block.setOutput(true, ["Number"]);
    },
    (block) => {
        let from = Lua.valueToCode(block, "FROM", Lua.ORDER_NONE) || "";
        if (from) {
            from = `${from}, `;
        }

        return [`rnd(${from}${Lua.valueToCode(block, "TO", Lua.ORDER_NONE)})`, Lua.ORDER_HIGH];
    }
);
