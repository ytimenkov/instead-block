import { Block, Blocks, FieldDropdown, FieldTextInput, Lua } from "blockly/core";
import { WorkspaceService } from "../workspace/workspace.service";
import { defineBlock } from "./blocks";


function generateReferenceCode(block: Block): (string | number)[] {
    let useLookup = true;
    for (let pb = block.parentBlock_; pb; pb = pb.parentBlock_) {
        // If object is inside list render it as a string so it will be resolved
        // by the engine.
        if (pb.type === "lists_create_with" || "itemsCount" in pb) {
            useLookup = false;
        }
    }
    let code = "";
    if (useLookup) {
        code = "_";
    }
    code += Lua.quote_(block.getFieldValue("NAME"));
    return [code, Lua.ORDER_ATOMIC];
}

function generateHeaderBlock(block: Block, title: string): Block {
    block.appendDummyInput()
        .appendField(title)
        .appendField(new FieldTextInput(), "NAME");
    block.setEditable(false);
    block.setDeletable(false);
    block.setMovable(false);

    return block;
}

function generateHeaderCode(block: Block): string {
    return `nam = ${Lua.quote_(block.getFieldValue("NAME"))}`;
}

export function attachReferenceBlocks(service: WorkspaceService): void {
    Blocks.instead_object_ref = {
        init(this: Block): void {
            this.appendDummyInput()
                .appendField(new FieldDropdown(
                    () => service.items.length && service.items.map(i => [i.name, i.name]) || [["item", "item"]]
                ), "NAME");
            this.setOutput(true, ["InsteadObject"]);

            this.setStyle("objects_blocks");
        },
    };

    Blocks.instead_room_ref = {
        init(this: Block): void {
            this.appendDummyInput()
                .appendField(new FieldDropdown(
                    () => service.rooms.length && service.rooms.map(i => [i.name, i.name]) || ["room"]
                ), "NAME");
            this.setOutput(true, ["InsteadRoom"]);

            this.setStyle("rooms_blocks");
        },
    };

    Lua.instead_object_ref = (block: Block) => generateReferenceCode(block);
    Lua.instead_room_ref = (block: Block) => generateReferenceCode(block);

    // TODO: Add dynamic population of field and make it non-serializable.
    defineBlock("room_header",
        block => generateHeaderBlock(block, $localize`Room`).setStyle("rooms_blocks"),
        block => generateHeaderCode(block)
    );

    defineBlock("object_header",
        block => generateHeaderBlock(block, $localize`Item`).setStyle("objects_blocks"),
        block => generateHeaderCode(block)
    );
}
