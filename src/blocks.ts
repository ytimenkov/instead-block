import * as Blockly from "blockly/core";
import "blockly/lua";


// Tell typescript that we have Blockly.Lua.
// Also describe used blocks.
declare module "blockly/core" {
    class InsteadGenerator extends Blockly.Generator {
        obj(block: Blockly.Block): string;
    }
    export let Lua: InsteadGenerator;
}

Blockly.Blocks["obj"] = {
    init: function (this: Blockly.Block) {
        this.jsonInit({
            "message0": "Объект %1",
            "args0": [
                {
                    "type": "input_statement",
                    "name": "OBJECT_DEFINITION"
                }]
        });
    }
};

Blockly.Lua["obj"] = function (block: Blockly.Block) {
    return "obj {}";
};
