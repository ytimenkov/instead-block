import { Block, Blocks, Events, FieldImage, Lua, utils } from "blockly/core";

const plusImage =
    "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC" +
    "9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0Ij48cGF0aCBkPSJNMT" +
    "ggMTBoLTR2LTRjMC0xLjEwNC0uODk2LTItMi0ycy0yIC44OTYtMiAybC4wNzEgNGgtNC4wNz" +
    "FjLTEuMTA0IDAtMiAuODk2LTIgMnMuODk2IDIgMiAybDQuMDcxLS4wNzEtLjA3MSA0LjA3MW" +
    "MwIDEuMTA0Ljg5NiAyIDIgMnMyLS44OTYgMi0ydi00LjA3MWw0IC4wNzFjMS4xMDQgMCAyLS" +
    "44OTYgMi0ycy0uODk2LTItMi0yeiIgZmlsbD0id2hpdGUiIC8+PC9zdmc+Cg==";

type PropertyMode = "text" | "function";

class FuncTextToggleField extends FieldImage {
    constructor(public mode: PropertyMode) {
        super(plusImage, 15, 15, undefined, (field) => {
            // TODO: Implement image toggle.
            Events.setGroup(true);
            const block = field.getSourceBlock() as Block & FuncTextToggleMixin;
            if (this.mode === "text") {
                block.setModeToFunction();
            } else if (this.mode === "function") {
                block.setModeToText();
            }
            Events.setGroup(false);
        });
    }
}

interface FuncTextToggleMixin extends Block {
    setModeToText(): void;
    setModeToFunction(): void;
    getMode(): PropertyMode | undefined;
}

function createToggleMixin(propertyName: string): object {
    return {
        init(this: FuncTextToggleMixin): void {
            this.setPreviousStatement(false);
            this.setStyle("properties_blocks");
            this.setModeToText();
        },

        domToMutation(this: FuncTextToggleMixin, element: Element): void {
            const mode = element.getAttribute("mode");
            if (mode === "text") {
                this.setModeToText();
            } else if (mode === "function") {
                this.setModeToFunction();
            } else {
                throw new Error(`Unknown mode ${mode}`);
            }
        },

        mutationToDom(this: FuncTextToggleMixin): Element {
            const container = utils.xml.createElement("mutation");
            container.setAttribute("mode", this.getMode() || "");
            return container;
        },

        setModeToText(this: FuncTextToggleMixin): void {
            if (this.getMode() === "text") {
                return;
            }
            const connection = this.nextConnection?.targetConnection;
            if (connection) {
                connection.getSourceBlock().unplug();
                this.bumpNeighbours();
            }
            this.setNextStatement(false);
            this.removeInput("DUMMY", true);
            this.appendValueInput("TEXT")
                .appendField(new FuncTextToggleField("text"), "MODE")
                .appendField(propertyName)
                .setCheck(["String"]);

        },

        setModeToFunction(this: FuncTextToggleMixin): void {
            if (this.getMode() === "function") {
                return;
            }
            this.setNextStatement(true);
            this.removeInput("TEXT", true);
            this.appendDummyInput("DUMMY")
                .appendField(new FuncTextToggleField("function"), "MODE")
                .appendField(propertyName);
        },

        getMode(this: FuncTextToggleMixin): PropertyMode | undefined {
            const field = this.getField("MODE") as FuncTextToggleField | null;
            return field?.mode;
        }

    };
}

Blocks.prop_disp = createToggleMixin($localize`Display name`);
Lua.prop_disp = (_: Block & FuncTextToggleMixin) => "";

