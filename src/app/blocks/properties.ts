import { switchIcon } from "@clr/core/icon";
import { Block, Blocks, BlockSvg, Events, Field, Lua, utils, Xml } from "blockly/core";
import { defineBlock } from "./blocks";
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
        // TODO: Example in blockly fired "mutation" event...
        Events.setGroup(false);
    }

    updateSize_(): void { }
}

interface FuncTextToggleBlock extends Block {
    setModeToText(): void;
    setModeToFunction(): void;
    getMode(): PropertyMode | undefined;
}

type FieldKind = "property" | "event";

function createToggleMixin(text: string, kind: FieldKind): object {
    return {
        init(this: FuncTextToggleBlock): void {
            switch (kind) {
                case "property":
                    this.setStyle("properties_blocks");
                    this.setModeToText();
                    break;
                case "event":
                    this.setStyle("events_blocks");
                    this.setModeToFunction();
                    break;
            }
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
                .appendField(text)
                .setCheck(["String"]);

        },

        setModeToFunction(this: FuncTextToggleBlock): void {
            if (this.getMode() === "function") {
                return;
            }
            this.removeInput("TEXT", true);
            this.appendStatementInput("FUNCTION")
                .appendField(new FuncTextToggleField("function"), "MODE")
                .appendField(text);
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

function defineProperty(text: string, propertyName: string, kind: FieldKind): void {
    Blocks[`prop_${propertyName}`] = createToggleMixin(text, kind);
    Lua[`prop_${propertyName}`] = (block: FuncTextToggleBlock) => generatePropertyCode(propertyName, block);
}

function defineFunctionProperty(text: string, propertyName: string, extraArgs: string): void {
    defineBlock(`prop_${propertyName}`,
        (block) => {
            block.setStyle("events_blocks");
            block.appendStatementInput("FUNCTION")
                .appendField(text);

        },
        (block) => `${propertyName} = function(${selfParameterName}${extraArgs})\n${Lua.statementToCode(block, "FUNCTION")}end`
    );
}

defineProperty($localize`Display name`, "disp", "property");
defineProperty($localize`Description`, "dsc", "property");
defineProperty($localize`Inventory \u{1F392}`, "inv", "property");
defineProperty($localize`Decoration`, "decor", "property");

defineProperty($localize`On Action \u{1F50D}`, "act", "event");
defineProperty($localize`On Pick up \u{1F4E6}`, "tak", "event");

// TOOD: Those functions accept 2 parameters, maybe do something realted to validation.
defineProperty($localize`Used with \u{1F517}`, "used", "event");
defineProperty($localize`Use self on \u{1F528}`, "use", "event");

defineFunctionProperty($localize`On Enter`, "onenter", ", w");
defineFunctionProperty($localize`On Exit`, "onexit", ", w");
