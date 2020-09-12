
import * as Blockly from "blockly/core";
import "blockly/blocks";

import * as Ru from 'blockly/msg/ru';
Blockly.setLocale(Ru);

import "./basic_blocks";
import "./objects";
import "./functions";

import { InsteadObject, InsteadRoom } from "./objects";

import { registerFileCallbacks, loadWorkspace, localStorageKey } from "./files";
import { createToolBox, createInsteadTheme } from "./toolbox";

const workspace = Blockly.inject("blocklyDiv", {
    toolbox: createToolBox(),
    theme: createInsteadTheme(),
    move: { scrollbars: true, wheel: true },
    zoom: { controls: true, },
});


registerFileCallbacks(workspace);

workspace.addChangeListener((e: any) => { InsteadObject.objectLifecycleListener(e) });
workspace.addChangeListener((e: any) => { InsteadRoom.objectLifecycleListener(e) });

if (window.localStorage[localStorageKey]) {
    console.log("Loading saved workspace");
    loadWorkspace(window.localStorage[localStorageKey], workspace);
} else {
    console.log("Loading default workspace");
    const file = require("data/playground.xml").default;
    const client = new XMLHttpRequest();
    client.onreadystatechange = function () {
        if (this.readyState === this.DONE && this.status === 200) {
            loadWorkspace(this.responseText, workspace);
        }
    };
    client.open("GET", file, true);
    client.send();
}
