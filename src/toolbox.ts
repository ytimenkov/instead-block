import { Theme } from "blockly/core";

const separator = `<sep></sep>`;

function objects(): string {
    return `<category name="${$localize`Objects`}" categorystyle="objects_category">
<block type="instead_object">
  <value name="DSC">
    <shadow type="text">
      <field name="TEXT">${$localize`There is an object`}</field>
    </shadow>
  </value>
</block>
<block type="instead_disp">
  <value name="TEXT">
    <shadow type="text">
      <field name="TEXT">${$localize`Title`}</field>
    </shadow>
  </value>
</block>
<block type="instead_inv">
  <value name="TEXT">
    <shadow type="text">
      <field name="TEXT">${$localize`I have an item`}</field>
    </shadow>
  </value>
</block>
<block type="instead_act">
  <value name="TEXT">
    <shadow type="text">
      <field name="TEXT">${$localize`Action on object`}</field>
    </shadow>
  </value>
</block>
<block type="instead_tak">
  <value name="TEXT">
    <shadow type="text">
      <field name="TEXT">${$localize`You've picked up an object`}</field>
    </shadow>
  </value>
</block>
<block type="instead_used">
  <value name="TEXT">
    <block type="instead_method1">
      <statement name="DEFINITION">
        <shadow type="instead_print">
          <field name="TEXT">${$localize`You've used "what" on "self"`}</field>
        </shadow>
      </statement>
    </block>
  </value>
</block>
<block type="instead_use">
  <value name="TEXT">
    <block type="instead_method1">
      <statement name="DEFINITION">
        <shadow type="instead_print">
          <field name="TEXT">${$localize`You've used "self" on "what"`}</field>
        </shadow>
      </statement>
    </block>
  </value>
</block>
${separator}
<block type="instead_method0"></block>
<block type="instead_method1"></block>
</category>`;
}

function rooms(): string {
    return `<category name="${$localize`Rooms`}" categorystyle="rooms_category">
<block type="instead_room">
  <value name="DSC">
    <shadow type="text">
      <field name="TEXT">${$localize`You're in a big room`}</field>
    </shadow>
  </value>
  <statement name="DEFINITION">
    <block type="instead_obj"></block>
  </statement>
</block>
<block type="instead_disp">
  <value name="TEXT">
    <shadow type="text">
      <field name="TEXT">${$localize`title`}</field>
    </shadow>
  </value>
</block>
<block type="instead_decor">
  <value name="TEXT">
    <shadow type="text">
      <field name="TEXT">${$localize`Detailed room descrption`}</field>
    </shadow>
  </value>
</block>
<block type="instead_obj"></block>
<block type="instead_way"></block>
<block type="instead_onenter">
  <value name="TEXT">
    <block type="instead_method1">
      <statement name="DEFINITION">
        <shadow type="instead_print">
          <field name="TEXT">${$localize`You've entered "what"`}</field>
        </shadow>
      </statement>
    </block>
  </value>
</block>
<block type="instead_onexit">
  <value name="TEXT">
    <block type="instead_method1">
      <statement name="DEFINITION">
        <shadow type="instead_print">
          <field name="TEXT">${$localize`You're about to go to "what"`}</field>
        </shadow>
      </statement>
    </block>
  </value>
</block>
${separator}
<block type="instead_method0"></block>
<block type="instead_method1"></block>
<block type="lists_create_with"></block>
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
<label text="${$localize`Action parameters`}"></label>
<block type="instead_self"></block>
<block type="instead_what"></block>
<!-- TODO: Make a dymanic category with all the objects -->
<block type="instead_object_ref"></block>
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
<block type="instead_self"></block>
<block type="instead_what"></block>
<!-- TODO: Make a dymanic category with all the objects -->
<block type="instead_object_ref"></block>
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

export function createToolBox(): string {
    const toolbox = [
        `<xml style="display: none">`,
        objects(),
        rooms(),
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

