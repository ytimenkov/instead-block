import { utils } from "blockly/core";


export class Room {
    type: "room" = "room";

    blocks: Element;

    constructor(public name: string) {
        this.blocks = document.createElementNS(utils.xml.NAME_SPACE, "xml");
    }
}
