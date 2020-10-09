import { Xml } from "blockly/core";


export class Room {
    type: "room" = "room";

    blocks: Element;

    constructor(public name: string) {
        const xml = `<xml><block type="room_header"><field name="NAME">${name}</field></block></xml>`;
        this.blocks = Xml.textToDom(xml);
    }
}
