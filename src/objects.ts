import "./blocks";

import { Lua, Blocks, Block, FieldTextInput, FieldDropdown, Field } from "blockly/core";

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

Blocks["instead_object"] = {
    init: function (this: Block) {
        addStandardFields("Объект", this);
        this.getField("NAME").setValidator(renameObjectReferences);
        // TODO: Add event listener for removal of objects
        // to clean the list.
    }
};

Lua["instead_object"] = function (block: Block) {
    return generateObjectCode("obj", block);
};

Blocks["instead_room"] = {
    init: function (this: Block) {
        addStandardFields("Комната", this);
    }
};

Lua["instead_room"] = function (block: Block) {
    return generateObjectCode("room", block);
};

// TODO: Maybe have a separate object "Main room" where nam overridden into "main" and disp used instead.
// Or maybe just provide it as a "default" workspace, since disp is useful for dynamic title.


function renameObjectReferences(this: Field, newValue: string): string | null {
    const oldValue = this.getValue();
    const oldIdx = ObjectReference.objects.findIndex(
        (arr) => { return arr[0] == oldValue || arr[0] == newValue });

    if (oldIdx >= 0) {
        // ObjectReference.objects.splice(oldIdx, 1);
        ObjectReference.objects[oldIdx] = [newValue, newValue];
    } else {
        ObjectReference.objects.push([newValue, newValue]);
    }

    const blocks = this.getSourceBlock().workspace.getBlocksByType("instead_object_ref", false);
    // console.log("Renaming " + oldValue + " to " + newValue);
    blocks.forEach((block) => {
        const field = block.getField("NAME");
        if (field.getValue() == oldValue) {
            field.setValue(newValue);
        }
    });
    return newValue;
}

class ObjectReferenceDropDown extends FieldDropdown {
    constructor() {
        super(ObjectReference.objects);
    }
    // Override deserialization to temporarily add value into the
    // list so validation passes. Real object should come soon.
    fromXml(fieldElement: Element): void {
        const value = fieldElement.textContent as string;
        const idx = ObjectReference.objects.findIndex((arr) => { return arr[0] == value });
        if (idx < 0) {
            // console.log("Adding " + value);
            ObjectReference.objects.push([value, value]);
        }
        this.setValue(value);

    }
}

const ObjectReference = {
    objects: [] as string[][],
    init: function (this: Block) {
        this.appendDummyInput()
            .appendField(new ObjectReferenceDropDown(), "NAME");
        this.setOutput(true, ["InsteadObject"]);
    },
};

Blocks["instead_object_ref"] = ObjectReference;

Lua["instead_object_ref"] = function (block: Block) {
    return ["_\"" + block.getFieldValue("NAME") + "\"", Lua.ORDER_ATOMIC]
}
