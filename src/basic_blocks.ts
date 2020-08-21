import "./blocks";

import { Lua, Blocks, Block } from "blockly/core";

function get_obj_property_definition(type: string) {
    return {
        "message0": type + " %1",
        "args0": [
            {
                "type": "input_value",
                "name": "TEXT",
                "check": ["String"],
            }],
        "nextStatement": null,
        "previousStatement": null,
    };
}

function get_obj_propery_code(type: string, block: Block) {
    return type + " = " + Lua.valueToCode(block, "TEXT", Lua.ORDER_NONE) + ";\n";
}

Blocks["instead_disp"] = {
    init: function (this: Block) {
        this.jsonInit(get_obj_property_definition("Название"));
    }
};

Lua["instead_disp"] = function (block: Block) {
    return get_obj_propery_code("disp", block)
};

Blocks["instead_desc"] = {
    init: function (this: Block) {
        this.jsonInit(get_obj_property_definition("Описание"));
    }
};

Lua["instead_desc"] = function (block: Block) {
    return get_obj_propery_code("desc", block)
};

Blocks["instead_print"] = {
    init: function (this: Block) {

        this.jsonInit(
            {
                "message0": "Вывести %1",
                "args0": [
                    {
                        "type": "field_input",
                        "name": "TEXT",
                        "TEXT": "",
                    }],
                "nextStatement": null,
                "previousStatement": null,
            }
        );
    }
};

Lua["instead_print"] = function (block: Block) {
    const msg = Lua.quote_(block.getFieldValue("TEXT"));
    return "p(" + msg + ")\n";
};

Blocks["instead_method0"] = {
    init: function (this: Block) {
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

Lua["instead_method0"] = function (block: Block) {
    let branch = Lua.statementToCode(block, "DEFINITION");
    let code = "function(self) {\n" + branch + "}";
    return [code, Lua.ORDER_HIGH];
};
