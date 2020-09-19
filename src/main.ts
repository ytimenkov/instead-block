import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { AppModule } from "./app/app.module";
import { environment } from "./environments/environment";

if (environment.production) {
    enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.error(err));


import "@clr/ui/clr-ui.min.css";
import "./style.css";

import * as Blockly from "blockly/core";
import "blockly/blocks";

import * as Ru from 'blockly/msg/ru';
Blockly.setLocale(Ru);

import "./basic_blocks";
import "./objects";
import "./functions";
import "./stdlib";

import { InsteadObject, InsteadRoom } from "./objects";

import { registerFileCallbacks, loadWorkspace, localStorageKey } from "./files";
import { createToolBox, createInsteadTheme } from "./toolbox";
import { bindTabs } from "./ugly_js";

const workspace = Blockly.inject("blocklyDiv", {
    toolbox: createToolBox(),
    theme: createInsteadTheme(),
    move: { scrollbars: true, wheel: true },
    zoom: { controls: true, },
});


registerFileCallbacks(workspace);

workspace.addChangeListener((e: any) => { InsteadObject.objectLifecycleListener(e) });
workspace.addChangeListener((e: any) => { InsteadRoom.objectLifecycleListener(e) });

bindTabs();

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
