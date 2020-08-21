import * as Blockly from "blockly/core";
import "blockly/lua";


// Tell typescript that we have Blockly.Lua.
// Also describe used blocks.
declare module "blockly/core" {
    class InsteadGenerator extends Blockly.Generator {
        instead_object(block: Blockly.Block): string | any[];
        instead_room(block: Blockly.Block): string | any[];
        instead_disp(block: Blockly.Block): string | any[];
        instead_method0(block: Blockly.Block): string | any[];
        instead_print(block: Blockly.Block): string | any[];

        ORDER_HIGH: number;
        ORDER_NONE: number;
    }
    export let Lua: InsteadGenerator;
}

Blockly.Blocks["instead_object"] = {
    init: function (this: Blockly.Block) {
        this.jsonInit({
            "message0": "Объект %1",
            "args0": [
                {
                    "type": "input_statement",
                    "name": "DEFINITION"
                }]
        });
    }
};

Blockly.Lua["instead_object"] = function (block: Blockly.Block) {
    return "obj {}";
};

Blockly.Blocks["instead_room"] = {
    init: function (this: Blockly.Block) {
        this.jsonInit({
            "message0": "Комната %1",
            "args0": [
                {
                    "type": "input_statement",
                    "name": "DEFINITION"
                }]
        });
    }
};

Blockly.Lua["instead_room"] = function (block: Blockly.Block) {
    let branch = Blockly.Lua.statementToCode(block, "DEFINITION");
    let code = "room {\n" + branch + "}";
    return code;
};

Blockly.Blocks["instead_disp"] = {
    init: function (this: Blockly.Block) {
        this.jsonInit({
            "message0": "Название %1",
            "args0": [
                {
                    "type": "input_value",
                    "name": "TEXT",
                    "check": ["String"],
                }],
            "nextStatement": null,
            "previousStatement": null,
        });
    }
};

Blockly.Lua["instead_disp"] = function (block: Blockly.Block) {
    let text: String;
    if (block.getField("TEXT")) {
        // Internal number
        // TODO: didn't see that :/
        text = String(block.getFieldValue("TEXT"));
    }
    else {
        text = Blockly.Lua.valueToCode(block, "TEXT", Blockly.Lua.ORDER_NONE);

    }
    let code = "disp = " + text + ";\n";
    return code;
};

Blockly.Blocks["instead_method0"] = {
    init: function (this: Blockly.Block) {
        this.jsonInit({
            "message0": "%1",
            "args0": [
                {
                    "type": "input_statement",
                    "name": "DEFINITION"
                }],
            "output": ["String"],
        });
    }
};

Blockly.Lua["instead_method0"] = function (block: Blockly.Block) {
    let branch = Blockly.Lua.statementToCode(block, "DEFINITION");
    let code = "function(self) {\n" + branch + "}";
    return [code, Blockly.Lua.ORDER_HIGH];
};

Blockly.Blocks["instead_print"] = {
    init: function (this: Blockly.Block) {
        this.jsonInit({
            "message0": "Печатать %1",
            "args0": [
                {
                    "type": "input_value",
                    "name": "TEXT",
                    "check": ["String"],
                }],
            "nextStatement": null,
            "previousStatement": null,
        });
    }
};

Blockly.Lua["instead_print"] = function (block: Blockly.Block) {
    const msg = Blockly.Lua.valueToCode(block, "TEXT", Blockly.Lua.ORDER_NONE) || "''";
    return "p(" + msg + ")\n";
};
