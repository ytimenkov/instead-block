import "./blocks";

import { Lua, Blocks, Block, FieldTextInput, FieldDropdown, Workspace, Events } from "blockly/core";

function generateObjectCode(type: string, block: Block): string {
    const name = block.getFieldValue("NAME");

    const dsc = Lua.valueToCode(block, "DSC", Lua.ORDER_NONE);

    let code = type + " {\n"
        + Lua.INDENT + "nam = " + Lua.quote_(name) + ",\n";

    if (dsc) {
        code += Lua.prefixLines("dsc = " + dsc, Lua.INDENT);
    }

    // Blocks in definition need to be comma-separated.
    let needNL = false;
    for (let defBlock = block.getInputTargetBlock("DEFINITION"); defBlock; defBlock = defBlock.getNextBlock()) {
        const defCode = Lua.blockToCode(defBlock, true);
        if (typeof defCode !== "string") {
            throw TypeError("Expecting code from statement block: " +
                (defBlock && defBlock.type));
        }
        if (defCode) {
            needNL = true;
            code += ",\n" + Lua.prefixLines(defCode, Lua.INDENT);
        }
    }

    if (needNL) {
        code += "\n";
    }

    code += "}";

    return code;
}

function addStandardFields(type: string, block: Block): Block {
    block.appendDummyInput()
        .appendField(type)
        .appendField(new FieldTextInput(type), "NAME")
    block.appendValueInput("DSC")
        .appendField("Описание(dsc): ")
        .setCheck("String");

    block.appendStatementInput("DEFINITION");
    return block;
}

function addReferenceFields(block: Block, objectsContainer: InsteadObjectBase, outputType: string): Block {
    block.appendDummyInput()
        .appendField(new ObjectReferenceDropDown(objectsContainer), "NAME");
    block.setOutput(true, [outputType]);
    return block;
}

function generateReferenceCode(block: Block, objectsContainer: InsteadObjectBase) {
    let useLookup = true;
    for (let pb = block.parentBlock_; pb; pb = pb.parentBlock_) {
        // If object is inside list render it as a string so it will be resolved
        // by the engine.
        if (pb.type === "lists_create_with") {
            useLookup = false;
        }
    }
    let code = "";
    if (useLookup) {
        code = "_"
    };
    code += Lua.quote_(objectsContainer.getInsteadObjectName(block.getFieldValue("NAME")));
    return [code, Lua.ORDER_ATOMIC]
}

class InsteadObjectBase {
    readonly type: string;

    // There should be an empty element if no objects created
    // to prevent Blockly complaining that dropdown field should
    // have at least one option.
    objectsList: string[][] = [["", ""]];

    constructor(type: string) {
        this.type = type;
    }

    objectLifecycleListener(event: any): void {
        if (!event.recordUndo) {
            // Events not generated by user. Skip handling.
            return;
        }

        const ws = event.getEventWorkspace_() as Workspace;

        if (event.type === Events.BLOCK_CREATE) {
            const block = ws.getBlockById(event.blockId);
            if (block.type !== this.type)
                return;
            this.addInsteadObject(event.blockId, block.getFieldValue("NAME"));
            this.refreshReferences(ws, block.id);
        } else if (event.type === Events.BLOCK_CHANGE) {
            if (event.element !== "field" || event.name !== "NAME")
                return;
            const block = ws.getBlockById(event.blockId);
            if (block.type !== this.type)
                return;

            const idx = this.findInsteadObject(event.blockId, true);
            this.objectsList[idx][0] = block.getFieldValue("NAME");
            this.refreshReferences(ws, block.id);
        } else if (event.type === Events.BLOCK_DELETE) {
            // There is no way to determine which type of block
            // was removed, so rely only on block id being in the list.
            this.removeInsteadObject(event.blockId, ws);
        }
    }

    addInsteadObject(blockId: string, name: string): void {
        const idx = this.findInsteadObject(blockId, false);
        if (idx >= 0) {
            // If object was added during deserialization, name is empty.
            // Fix it after workspace is loaded
            if (!this.objectsList[idx][0])
                this.objectsList[idx][0] = name;
            return;
        }

        if (this.objectsList.length === 1 && !this.objectsList[0][1]) {
            this.objectsList.pop();
        }
        this.objectsList.push([name, blockId]);
    }

    removeInsteadObject(blockId: string, ws: Workspace): void {
        const idx = this.findInsteadObject(blockId, false);

        if (idx < 0)
            return;

        this.objectsList.splice(idx, 1);

        if (this.objectsList.length === 0) {
            this.objectsList.push(["", ""]);
        }

        // Remove dangling references
        const blocks = ws.getBlocksByType(this.type + "_ref", false);
        blocks.forEach((block) => {
            const refName = block.getFieldValue("NAME");
            if (refName === blockId) {
                block.dispose(true);
            }
        });
    }

    findInsteadObject(id: string, required: boolean): number {
        const idx = this.objectsList.findIndex((arr) => { return arr[1] === id });
        if (required && idx < 0)
            throw TypeError("Object " + this.type + " with id " + id + " not found");
        return idx;
    }

    getInsteadObjectName(id: string): string {
        const idx = this.findInsteadObject(id, true);
        return this.objectsList[idx][0];
    }

    refreshReferences(ws: Workspace, id: string): void {
        const blocks = ws.getBlocksByType(this.type + "_ref", false);
        blocks.forEach((block) => {
            const field = block.getField("NAME");
            if (field.getValue() === id) {
                field.forceRerender();
            }
        });
    }
};

export const InsteadObject = new InsteadObjectBase("instead_object");

Blocks["instead_object"] = {
    init: function (this: Block) {
        addStandardFields("Объект", this);
    }
};
Lua["instead_object"] = function (block: Block) {
    return generateObjectCode("obj", block);
};

class ObjectReferenceDropDown extends FieldDropdown {
    objectsContainer: InsteadObjectBase;

    constructor(objectsContainer: InsteadObjectBase) {
        super(objectsContainer.objectsList);
        this.objectsContainer = objectsContainer
    }
    // Override deserialization to temporarily add value into the
    // list so validation passes. Real object should come soon.
    fromXml(fieldElement: Element): void {
        const value = fieldElement.textContent as string;
        this.objectsContainer.addInsteadObject(value, "");
        this.setValue(value);
    }
}

Blocks["instead_object_ref"] = {
    init: function (this: Block) {
        addReferenceFields(this, InsteadObject, "InsteadObject");
    },
};
Lua["instead_object_ref"] = function (block: Block) {
    return generateReferenceCode(block, InsteadObject);
}

export const InsteadRoom = new InsteadObjectBase("instead_room");

Blocks["instead_room"] = {
    init: function (this: Block) {
        addStandardFields("Комната", this);
    }
};
Lua["instead_room"] = function (block: Block) {
    return generateObjectCode("room", block);
};

Blocks["instead_room_ref"] = {
    init: function (this: Block) {
        addReferenceFields(this, InsteadRoom, "InsteadRoom");
    },
};
Lua["instead_room_ref"] = function (block: Block) {
    return generateReferenceCode(block, InsteadRoom);
}


// TODO: Maybe have a separate object "Main room" where nam overridden into "main" and disp used instead.
// Or maybe just provide it as a "default" workspace, since disp is useful for dynamic title.
