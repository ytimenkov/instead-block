import { switchIcon } from "@clr/core/icon";
import { Block, Blocks, BlockSvg, Events, Field, Lua, utils, Xml } from "blockly/core";
import { selfParameterName } from "./primitives";


type PropertyMode = "text" | "function";


class FuncTextToggleField extends Field {
    EDITABLE = false;

    // tslint:disable-next-line: variable-name
    isDirty_ = false;

    constructor(public mode: PropertyMode) {
        super(undefined, undefined, undefined);
        this.size_ = new utils.Size(15, 15 + 1);
    }
    initView(): void {
        this.createBorderRect_();
        this.borderRect_.setAttribute("fill", (this.sourceBlock_ as BlockSvg).style.colourPrimary);
        const icon = Xml.textToDom(switchIcon[1]) as SVGElement;
        icon.setAttribute("height", this.size_.height as unknown as string);
        icon.setAttribute("width", this.size_.width as unknown as string);
        this.fieldGroup_.style.cursor = "pointer";
        this.fieldGroup_.appendChild(icon);
    }

    showEditor_(): void {
        Events.setGroup(true);
        const block = this.getSourceBlock() as FuncTextToggleBlock;
        if (this.mode === "text") {
            block.setModeToFunction();
        } else if (this.mode === "function") {
            block.setModeToText();
        }
        Events.setGroup(false);
    }

    updateSize_(): void { }
}

interface FuncTextToggleBlock extends Block {
    setModeToText(): void;
    setModeToFunction(): void;
    getMode(): PropertyMode | undefined;
}

function createToggleMixin(propertyName: string): object {
    return {
        init(this: FuncTextToggleBlock): void {
            this.setPreviousStatement(false);
            this.setStyle("properties_blocks");
            this.setModeToText();
        },

        domToMutation(this: FuncTextToggleBlock, element: Element): void {
            const mode = element.getAttribute("mode");
            if (mode === "text") {
                this.setModeToText();
            } else if (mode === "function") {
                this.setModeToFunction();
            } else {
                throw new Error(`Unknown mode ${mode}`);
            }
        },

        mutationToDom(this: FuncTextToggleBlock): Element {
            const container = utils.xml.createElement("mutation");
            container.setAttribute("mode", this.getMode() || "");
            return container;
        },

        setModeToText(this: FuncTextToggleBlock): void {
            if (this.getMode() === "text") {
                return;
            }
            this.removeInput("FUNCTION", true);
            this.appendValueInput("TEXT")
                .appendField(new FuncTextToggleField("text"), "MODE")
                .appendField(propertyName)
                .setCheck(["String"]);

        },

        setModeToFunction(this: FuncTextToggleBlock): void {
            if (this.getMode() === "function") {
                return;
            }
            this.removeInput("TEXT", true);
            this.appendStatementInput("FUNCTION")
                .appendField(new FuncTextToggleField("function"), "MODE")
                .appendField(propertyName);
        },

        getMode(this: FuncTextToggleBlock): PropertyMode | undefined {
            const field = this.getField("MODE") as FuncTextToggleField | null;
            return field?.mode;
        }

    };
}

function generatePropertyCode(type: string, block: FuncTextToggleBlock): string {
    const text = Lua.valueToCode(block, "TEXT", Lua.ORDER_NONE);
    if (text) {
        return `${type} = ${text}`;
    }
    const func = Lua.statementToCode(block, "FUNCTION");
    if (func) {
        return `${type} = function(${selfParameterName})\n${func}end`;
    }
    return "";
}


Blocks.prop_disp = createToggleMixin($localize`Display name`);
Lua.prop_disp = (block: FuncTextToggleBlock) => generatePropertyCode("disp", block);

