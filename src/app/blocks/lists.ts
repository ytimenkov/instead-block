import { plusIcon, minusIcon } from "@clr/core/icon";
import { Block, Blocks, BlockSvg, Events, Field, Lua, utils, Xml } from "blockly/core";


type PlusMinusMode = "plus" | "minus";

class PlusMinusField extends Field {
    EDITABLE = false;

    // tslint:disable-next-line: variable-name
    isDirty_ = false;

    constructor(public mode: PlusMinusMode) {
        super(undefined, undefined, undefined);
        this.size_ = new utils.Size(15, 15 + 1);
    }
    initView(): void {
        this.createBorderRect_();
        this.borderRect_.setAttribute("fill", (this.sourceBlock_ as BlockSvg).style.colourPrimary);
        let iconData: string;
        switch (this.mode) {
            case "plus":
                iconData = plusIcon[1];
                break;
            case "minus":
                iconData = minusIcon[1];
                break;
            default:
                throw new Error(`Unexpected mode ${this.mode}`);
        }
        const icon = Xml.textToDom(iconData) as SVGElement;
        icon.setAttribute("height", this.size_.height as unknown as string);
        icon.setAttribute("width", this.size_.width as unknown as string);
        this.fieldGroup_.style.cursor = "pointer";
        this.fieldGroup_.appendChild(icon);
    }

    showEditor_(): void {
        Events.setGroup(true);
        const block = this.getSourceBlock() as PlusMinusBlock;
        switch (this.mode) {
            case "plus":
                block.plus();
                break;
            case "minus":
                block.minus();
                break;
            default:
                throw new Error(`Unexpected mode ${this.mode}`);
        }
        // TODO: Example in blockly fired "mutation" event...
        Events.setGroup(false);
    }

    updateSize_(): void { }
}

interface PlusMinusBlock extends Block {
    itemsCount: number;

    plus(): void;
    minus(): void;
    updateShape(newItemsCount: number): void;
}

function createPlusMinusMixin(text: string, check: string[]): object {
    return {
        itemsCount: 0,

        init(this: PlusMinusBlock): void {
            this.setStyle("properties_blocks");
            this.appendDummyInput("EMPTY")
                .appendField(new PlusMinusField("plus"), "PLUS")
                .appendField(text);
        },

        domToMutation(this: PlusMinusBlock, element: Element): void {
            const newItemsCount = parseInt(element.getAttribute("itemsCount") as string, undefined);
            this.updateShape(newItemsCount);
        },

        mutationToDom(this: PlusMinusBlock): Element {
            const container = utils.xml.createElement("mutation");
            container.setAttribute("itemsCount", this.itemsCount as unknown as string);
            return container;
        },

        updateShape(this: PlusMinusBlock, newItemsCount: number): void {
            while (this.itemsCount < newItemsCount) {
                const input = this.appendValueInput(`ADD${this.itemsCount}`)
                    .setCheck(check);

                if (this.itemsCount === 0) {
                    this.removeInput("EMPTY");
                    input.appendField(new PlusMinusField("plus"), "PLUS")
                        .appendField(new PlusMinusField("minus"), "MINUS")
                        .appendField(text);
                }
                ++this.itemsCount;
            }
            while (this.itemsCount > newItemsCount) {
                --this.itemsCount;
                this.removeInput(`ADD${this.itemsCount}`);
                if (this.itemsCount === 0) {
                    this.appendDummyInput("EMPTY")
                        .appendField(new PlusMinusField("plus"), "PLUS")
                        .appendField(text);
                }
            }
        },

        plus(this: PlusMinusBlock): void {
            this.updateShape(this.itemsCount + 1);
        },

        minus(this: PlusMinusBlock): void {
            if (this.itemsCount > 0) {
                this.updateShape(this.itemsCount - 1);
            }
        },
    };
}

function generateListCode(propertyName: string, block: PlusMinusBlock): string {
    const elements = [];
    for (let index = 0; index < block.itemsCount; index++) {
        elements.push(Lua.valueToCode(block, `ADD${index}`, Lua.ORDER_NONE) || "None");
    }

    return `${propertyName} = {${elements.join(", ")}}`;
}

function defineListProperty(text: string, propertyName: string, check: string[]): void {
    Blocks[`prop_${propertyName}`] = createPlusMinusMixin(text, check);
    Lua[`prop_${propertyName}`] = (block: PlusMinusBlock) => generateListCode(propertyName, block);
}

defineListProperty($localize`:rooms objects|:Objects`, "obj", ["InsteadObject"]);
defineListProperty($localize`:rooms objects|:Exits`, "way", ["InsteadRoom"]);
