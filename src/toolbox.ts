import { Theme } from "blockly/core";
import * as rooms_blocks from "data/toolbox/rooms.xml";
import * as objects_blocks from "data/toolbox/objects.xml";
import * as actions_blocks from "data/toolbox/actions.xml";
import * as logic_blocks from "data/toolbox/logic.xml";
import * as math_blocks from "data/toolbox/math.xml";

const end_cat = "</category>";

function category(name: string, style: string) {
    return `<category name="${name}" categorystyle="${style}">`;
}

export function createToolBox(): string {
    const toolbox = [
        "<xml style=\"display: none\">",

        category("Объекты", "objects_category"),
        objects_blocks.default,
        end_cat,

        category("Комнаты", "rooms_category"),
        rooms_blocks.default,
        end_cat,

        category("Действия", "actions_category"),
        actions_blocks.default,
        end_cat,

        category("Условия", "logic_category"),
        logic_blocks.default,
        end_cat,

        category("Математика", "math_category"),
        math_blocks.default,
        end_cat,
    ];

    toolbox.push("</xml>");
    return toolbox.join("");
}

export function createInsteadTheme(): Theme {
    return Theme.defineTheme("instead", {
        base: "classic",
        categoryStyles: {
            rooms_category: {
                colour: "120"
            },
            objects_category: {
                colour: "60"
            },
            actions_category: {
                colour: "120"
            }
        },
        blockStyles: {
            rooms_blocks: {
                colourPrimary: "120"
            },
            objects_blocks: {
                colourPrimary: "60"
            },
            actions_blocks: {
                colourPrimary: "120"
            },
            properties_blocks: {
                colourPrimary: "30"
            }
        }
    });
}

