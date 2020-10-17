import { Block, Blocks, FieldDropdown, Lua } from "blockly/core";
import { defineBlock } from "./blocks";

function defineObjectAction1(name: string, desc: string, functName: string): void {
    defineBlock(name,
        (block) => {
            block.appendValueInput("WHAT")
                .appendField(desc)
                .setCheck(["InsteadObject"]);
            block.setNextStatement(true);
            block.setPreviousStatement(true);
            block.setStyle("actions_blocks");
        },
        (block) => `${functName}(${Lua.valueToCode(block, "WHAT", Lua.ORDER_NONE)})\n`
    );
}

function defineObjectAction2(name: string, desc: string, functName: string, whereText: string): void {
    defineBlock(name,
        (block) => {
            block.appendValueInput("WHAT")
                .appendField(desc)
                .setCheck(["InsteadObject"]);
            block.appendValueInput("WHERE")
                .appendField(whereText)
                .setCheck(["InsteadObject", "InsteadRoom"]);
            block.setNextStatement(true);
            block.setPreviousStatement(true);
            block.setStyle("actions_blocks");
            block.setInputsInline(true);
        },
        (block) => {
            let where = Lua.valueToCode(block, "WHERE", Lua.ORDER_NONE);
            if (where) {
                where = `, ${where}`;
            }
            else {
                where = "";
            }
            return `${functName}(${Lua.valueToCode(block, "WHAT", Lua.ORDER_NONE)}${where})\n`;
        }
    );
}

export function defineFunctionBlocks(): void {
    defineObjectAction1("instead_take", $localize`take`, "take");
    defineObjectAction1("instead_disable", $localize`disable`, "disable");
    defineObjectAction1("instead_enable", $localize`enable`, "enable");

    defineObjectAction2("instead_drop", $localize`drop`, "drop", $localize`:where to drop|:into`);
    defineObjectAction2("instead_remove", $localize`remove`, "remove", $localize`:where to remove from|:from`);

    Blocks.instead_where = {
        init(this: Block): void {
            this.appendValueInput("WHAT")
                .appendField($localize`:where function|:(where)`)
                .setCheck("InsteadObject");
            this.appendDummyInput()
                .appendField(new FieldDropdown([
                    ["\u{2208}", "=="],
                    ["\u{2209}", "~="]
                ]), "COND");
            this.appendValueInput("WHERE")
                .setCheck(["InsteadRoom", "InsteadObject"]);
            this.setOutput(true, ["Boolean"]);
            this.setInputsInline(true);
            this.setStyle("logic_blocks");
        }
    };

    Lua.instead_where = (block: Block) => {
        const cond = block.getFieldValue("COND");
        const what = Lua.valueToCode(block, "WHAT", Lua.ORDER_NONE);
        const where = Lua.valueToCode(block, "WHERE", Lua.ORDER_NONE);
        return ["where(" + what + ") " + cond + " " + where, Lua.ORDER_ATOMIC];
    };
}
