import { Component, Inject, Input, LOCALE_ID, OnInit } from "@angular/core";
import * as Blockly from "blockly";
import { loadWorkspace, localStorageKey } from "src/files";
import { AppModuel, WorkspaceInstead } from "src/model";
import { InsteadObject, InsteadRoom } from "src/objects";
import { createInsteadTheme, createToolBox } from "src/toolbox";
import { messages } from "./init-locale";
import "../../basic_blocks";
import "../../functions";
import "../../objects";
import "../../stdlib";


@Component({
  selector: "app-blocks",
  templateUrl: "./blocks.component.html",
  styleUrls: ["./blocks.component.css"]
})
export class BlocksComponent implements OnInit {
  @Input()
  model?: AppModuel;

  constructor() { }

  ngOnInit(): void {
    Blockly.setLocale(messages);

    this.model!.workspace = Blockly.inject("blocklyDiv", {
      toolbox: createToolBox(),
      theme: createInsteadTheme(),
      move: { scrollbars: true, wheel: true },
      zoom: { controls: true, },
    }) as WorkspaceInstead;

    this.model!.workspace.addChangeListener((e: any) => { InsteadObject.objectLifecycleListener(e); });
    this.model!.workspace.addChangeListener((e: any) => { InsteadRoom.objectLifecycleListener(e); });

    if (window.localStorage[localStorageKey]) {
      console.log("Loading saved workspace");
      loadWorkspace(window.localStorage[localStorageKey], this.model!.workspace);
    } else {
      console.log("Loading default workspace");
      const file = require("data/playground.xml").default;
      const client = new XMLHttpRequest();
      const workspace = this.model!.workspace;
      client.onreadystatechange = function() {
        if (this.readyState === this.DONE && this.status === 200) {
          loadWorkspace(this.responseText, workspace);
        }
      };
      client.open("GET", file, true);
      client.send();
    }
  }

}
