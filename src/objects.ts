import "./blocks";

import { Lua, Blocks, Block } from "blockly/core";

function define_object(type: string, block: Block): string {
    let branch = Lua.statementToCode(block, "DEFINITION");
    return type + " {\n" + branch + "}";
}

Blocks["instead_object"] = {
    init: function (this: Block) {
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

Lua["instead_object"] = function (block: Block) {
    return define_object("obj", block);
};

Blocks["instead_room"] = {
    init: function (this: Block) {
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

Lua["instead_room"] = function (block: Block) {
    return define_object("room", block);
};

