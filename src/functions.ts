import { selfParameterName, whatParameterName } from "./basic_blocks";

import { Lua, Blocks, Block, FieldDropdown, } from "blockly/core";
import { defineBlock } from "./blocks";

function defineMethod(name: string, text: string, funcArgs: string) {
    defineBlock(name,
        (block) => {
            block.appendDummyInput()
                .appendField(text);
            block.appendStatementInput("DEFINITION");
            block.setOutput(true, ["String"]);
            block.setStyle("procedure_blocks");
        },
        (block) => {
            const body = Lua.statementToCode(block, "DEFINITION");
            const code = `function(${funcArgs})\n${body}end`;
            return [code, Lua.ORDER_HIGH];
        }
    );
}

defineMethod("instead_method0", "\u{1D453}", selfParameterName);
defineMethod("instead_method1", "\u{1D453} (w)", `${selfParameterName}, ${whatParameterName}`);

function defineObjectAction1(name: string, desc: string, functName: string) {
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

defineObjectAction1("instead_take", "взять(take): ", "take");
defineObjectAction1("instead_disable", "выключить(disable): ", "disable");
defineObjectAction1("instead_enable", "включить(enable): ", "enable");

function defineObjectAction2(name: string, desc: string, functName: string, whereText: string) {
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

defineObjectAction2("instead_drop", "бросить(drop): ", "drop", "в");
defineObjectAction2("instead_remove", "убрать(remove): ", "remove", "из");

Blocks.instead_where = {
    init(this: Block) {
        this.appendValueInput("WHAT")
            .appendField("(where)")
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

Lua.instead_where = function(block: Block) {
    const cond = block.getFieldValue("COND");
    const what = Lua.valueToCode(block, "WHAT", Lua.ORDER_NONE);
    const where = Lua.valueToCode(block, "WHERE", Lua.ORDER_NONE);
    return ["where(" + what + ") " + cond + " " + where, Lua.ORDER_ATOMIC];
};
