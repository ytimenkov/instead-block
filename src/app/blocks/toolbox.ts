import { Theme } from "blockly/core";
import { TargetTypes, WorkspaceService } from "../workspace/workspace.service";

const separator = `<sep></sep>`;

function properties(activeTarget?: TargetTypes): string {
  return `<category name="${$localize`:toolbox category|:Properties`}" categorystyle="properties_category">
<block type="prop_disp">
  <mutation mode="text"></mutation>
  <value name="TEXT">
    <shadow type="text">
      <field name="TEXT">${$localize`Title`}</field>
    </shadow>
  </value>
</block>
<block type="prop_dsc">
  <mutation mode="text"></mutation>
  <value name="TEXT">
    <shadow type="text">
      <field name="TEXT">${$localize`Detailed descripiton`}</field>
    </shadow>
  </value>
</block>
${activeTarget === "item" ? `
<block type="prop_inv">
  <mutation mode="text"></mutation>
  <value name="TEXT">
    <shadow type="text">
      <field name="TEXT">${$localize`I have an item`}</field>
    </shadow>
  </value>
</block>
<block type="prop_act">
  <mutation mode="text"></mutation>
  <value name="TEXT">
    <shadow type="text">
      <field name="TEXT">${$localize`Action on object`}</field>
    </shadow>
  </value>
</block>
<block type="prop_tak">
  <mutation mode="text"></mutation>
  <value name="TEXT">
    <shadow type="text">
      <field name="TEXT">${$localize`You've picked up an object`}</field>
    </shadow>
  </value>
</block>
<block type="prop_used">
  <mutation mode="text"></mutation>
  <value name="TEXT">
    <shadow type="text">
      <field name="TEXT">${$localize`You've used "what" on "self"`}</field>
    </shadow>
  </value>
</block>
<block type="prop_use">
  <mutation mode="text"></mutation>
  <value name="TEXT">
    <shadow type="text">
      <field name="TEXT">${$localize`You've used "self" on "what"`}</field>
    </shadow>
  </value>
</block>
` : ""}
${activeTarget === "room" ? `
<block type="prop_decor">
  <mutation mode="text"></mutation>
  <value name="TEXT">
    <shadow type="text">
      <field name="TEXT">${$localize`Detailed room descrption`}</field>
    </shadow>
  </value>
</block>
<block type="prop_onenter"></block>
<block type="prop_onexit"></block>
<block type="prop_obj"></block>
<block type="prop_way"></block>
` : ""}
</category>`;
}

function objects(): string {
  return `<category name="${$localize`:toolbox category|:Objects`}" categorystyle="objects_category">
<!-- TODO: Make a dymanic category with all the objects -->
<block type="instead_item_ref"></block>
</category>`;
}

function rooms(): string {
  return `<category name="${$localize`Rooms`}" categorystyle="rooms_category">
<!-- TODO: Make a dymanic category with all the objects -->
<block type="instead_room_ref"></block>
</category>`;
}

function actions(): string {
  return `<category name="${$localize`Actions`}" categorystyle="actions_category">
<label text="${$localize`Text`}"></label>
<block type="instead_print"></block>
<block type="text"></block>
<block type="text_multiline"></block>
<label text="${$localize`Actions`}"></label>
<block type="instead_take">
  <value name="WHAT">
    <shadow type="instead_self"></shadow>
  </value>
</block>
<block type="instead_drop">
  <value name="WHAT">
    <shadow type="instead_self"></shadow>
  </value>
</block>
<block type="instead_remove">
  <value name="WHAT">
    <shadow type="instead_self"></shadow>
  </value>
</block>
<block type="instead_disable">
  <value name="WHAT">
    <shadow type="instead_self"></shadow>
  </value>
</block>
<block type="instead_enable">
  <value name="WHAT">
    <shadow type="instead_self"></shadow>
  </value>
</block>
<label text="${$localize`Arguments`}"></label>
<block type="instead_self"></block>
<block type="instead_what"></block>
<block type="instead_item_ref"></block>
<block type="instead_room_ref"></block>
</category>`;
}

function logic(): string {
  return `<category name="${$localize`Logic`}" categorystyle="logic_category">
<block type="controls_if"></block>
<block type="logic_compare"></block>
<block type="logic_operation"></block>
<block type="logic_negate"></block>
<block type="logic_boolean"></block>
<block type="instead_where">
  <value name="WHAT">
    <shadow type="instead_self"></shadow>
  </value>
</block>
<block type="instead_return_false"></block>
<label text="${$localize`Arguments`}"></label>
<block type="instead_self"></block>
<block type="instead_what"></block>
<block type="instead_item_ref"></block>
<block type="instead_room_ref"></block>
</category>`;
}

function math(): string {
  return `<category name="${$localize`Math`}" categorystyle="math_category">
<block type="math_number">
  <field name="NUM">42</field>
</block>
<block type="math_arithmetic">
  <value name="A">
    <shadow type="math_number">
      <field name="NUM">1</field>
    </shadow>
  </value>
  <value name="B">
    <shadow type="math_number">
      <field name="NUM">1</field>
    </shadow>
  </value>
</block>
<block type="math_single">
  <value name="NUM">
    <shadow type="math_number">
      <field name="NUM">9</field>
    </shadow>
  </value>
</block>
<block type="math_trig">
  <value name="NUM">
    <shadow type="math_number">
      <field name="NUM">45</field>
    </shadow>
  </value>
</block>
<block type="math_constant"></block>
<block type="math_number_property">
  <value name="NUMBER_TO_CHECK">
    <shadow type="math_number">
      <field name="NUM">0</field>
    </shadow>
  </value>
</block>
<!-- No variables yet <block type="math_change"></block> -->
<block type="math_round">
  <value name="NUM">
    <shadow type="math_number">
      <field name="NUM">3.1</field>
    </shadow>
  </value>
</block>
<!-- <block type="math_on_list"></block> -->
<block type="math_modulo">
  <value name="DIVIDEND">
    <shadow type="math_number">
      <field name="NUM">64</field>
    </shadow>
  </value>
  <value name="DIVISOR">
    <shadow type="math_number">
      <field name="NUM">10</field>
    </shadow>
  </value>
</block>
<block type="math_constrain">
  <value name="VALUE">
    <shadow type="math_number">
      <field name="NUM">50</field>
    </shadow>
  </value>
  <value name="LOW">
    <shadow type="math_number">
      <field name="NUM">1</field>
    </shadow>
  </value>
  <value name="HIGH">
    <shadow type="math_number">
      <field name="NUM">100</field>
    </shadow>
  </value>
</block>

<block type="instead_rnd">
  <value name="TO">
    <shadow type="math_number">
      <field name="NUM">42</field>
    </shadow>
  </value>
</block>
</category>`;
}

export function createToolBox(workspace: WorkspaceService): string {
  const toolbox = [
    `<xml style="display: none">`,
    properties(workspace.activeTarget?.type),
    // Not very useful now unless they're a dynamic category
    // objects(),
    // rooms(),
    actions(),
    logic(),
    math(),
    "</xml>"
  ];

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
      },
      properties_category: {
        colour: "30"
      },
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
      },
      events_blocks: {
        colourPrimary: "60",
        hat: "cap"
      }
    }
  });
}

