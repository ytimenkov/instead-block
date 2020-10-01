import { Component, Inject, Input, LOCALE_ID, OnInit } from "@angular/core";
import * as Blockly from "blockly/core";
import { loadWorkspace, localStorageKey } from "src/files";
import { AppModuel } from "src/model";
import { InsteadObject, InsteadRoom } from "src/objects";
import { createInsteadTheme, createToolBox } from "src/toolbox";
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

  constructor(@Inject(LOCALE_ID) private locale: string) { }

  ngOnInit(): void {
    this.initWorkspace();
  }

  private async initWorkspace(): Promise<void> {
    if (!this.model) {
      return;
    }

    let messages: { [key: string]: string; };
    switch (this.locale) {
      case "en-US":
        messages = await import("blockly/msg/en");
        break;
      case "ru":
        messages = await import("blockly/msg/ru");
        break;
      default:
        throw new Error(`Unknown locale: ${this.locale}`);
    }
    Blockly.setLocale(messages);

    this.model.workspace = Blockly.inject("blocklyDiv", {
      toolbox: createToolBox(),
      theme: createInsteadTheme(),
      move: { scrollbars: true, wheel: true },
      zoom: { controls: true, },
    });

    // tslint:disable-next-line: no-any
    this.model.workspace.addChangeListener((e: any) => { InsteadObject.objectLifecycleListener(e); });
    // tslint:disable-next-line: no-any
    this.model.workspace.addChangeListener((e: any) => { InsteadRoom.objectLifecycleListener(e); });

    if (window.localStorage[localStorageKey]) {
      console.log("Loading saved workspace");
      loadWorkspace(window.localStorage[localStorageKey], this.model);
    } else {
      console.log("Loading default workspace");
      const file = require("data/playground.xml").default;
      const client = new XMLHttpRequest();
      const model = this.model;
      client.onreadystatechange = function(): void {
        if (this.readyState === this.DONE && this.status === 200) {
          loadWorkspace(this.responseText, model);
        }
      };
      client.open("GET", file, true);
      client.send();
    }
  }

}
