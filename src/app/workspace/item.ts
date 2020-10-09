import { Xml } from "blockly/core";

export class Item {
    type: "item" = "item";

    blocks: Element;

    constructor(public name: string) {
        const xml = `<xml><block type="object_header"><field name="NAME">${name}</field></block></xml>`;
        this.blocks = Xml.textToDom(xml);
    }
}
