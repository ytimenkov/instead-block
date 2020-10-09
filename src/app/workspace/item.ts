import { utils } from "blockly/core";

export class Item {
    type: "item" = "item";

    blocks: Element;

    constructor(public name: string) {
        this.blocks = document.createElementNS(utils.xml.NAME_SPACE, "xml");
    }
}
