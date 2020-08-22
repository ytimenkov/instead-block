import * as Blockly from "blockly/core";
import "blockly/lua";


// Tell typescript that we have Blockly.Lua.
// Also describe used blocks.
declare module "blockly/core" {
    class InsteadGenerator extends Blockly.Generator {
        [key: string]: Object;

        quote_(src: string): string;

        ORDER_HIGH: number;
        ORDER_NONE: number;
        ORDER_ATOMIC: number;
    }
    export let Lua: InsteadGenerator;
}

