import * as Blockly from "blockly/core";
import "blockly/lua";


// Tell typescript that we have Blockly.Lua.
// Also describe used blocks.
declare module "blockly/core" {
    class InsteadGenerator extends Blockly.Generator {
        [key: string]: Object;

        ORDER_HIGH: number;
        ORDER_NONE: number;
        ORDER_ATOMIC: number;

        quote_(src: string): string;
    }
    export let Lua: InsteadGenerator;
}

export function defineBlock(name: string,
                            initFunc: (block: Blockly.Block) => void,
                            generateFunc: (block: Blockly.Block) => string | (string | number)[]) {

    Blockly.Blocks[name] = {
        init(this: Blockly.Block) {
            initFunc(this);
        }
    };

    Blockly.Lua[name] = generateFunc;
}
