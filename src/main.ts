
import * as Blockly from "blockly/core";
import "blockly/blocks";

import * as Ru from 'blockly/msg/ru';
Blockly.setLocale(Ru);

import "./basic_blocks";
import "./objects";
import "./functions";

import { InsteadObject, InsteadRoom } from "./objects";

import { initInstead } from "./instead";
import { registerFileCallbacks, loadWorkspace, localStorageKey } from "./files";

const workspace = Blockly.inject("blocklyDiv", {
    toolbox: document.getElementById("toolbox") as HTMLElement,
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
    const file = require("playground_xml").default;
    const client = new XMLHttpRequest();
    client.onreadystatechange = function () {
        if (this.readyState === this.DONE && this.status === 200) {
            loadWorkspace(this.responseText, workspace);
        }
    };
    client.open("GET", file, true);
    client.send();
}

initInstead();
