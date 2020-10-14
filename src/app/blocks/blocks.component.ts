import { Component, Inject, Input, LOCALE_ID, OnInit } from "@angular/core";
import { inject, setLocale } from "blockly/core";
import { localStorageKey } from "src/files";
import { AppModuel } from "src/model";
import { WorkspaceService } from "../workspace/workspace.service";
import "./functions";
import "./lists";
import "./objects";
import { InsteadObject, InsteadRoom } from "./objects";
import "./primitives";
import "./properties";
import "./stdlib";
import { createInsteadTheme, createToolBox } from "./toolbox";


@Component({
  selector: "app-blocks",
  templateUrl: "./blocks.component.html",
  styleUrls: ["./blocks.component.css"]
})
export class BlocksComponent implements OnInit {
  @Input()
  model?: AppModuel;

  constructor(
    @Inject(LOCALE_ID) private locale: string,
    private workspaceService: WorkspaceService) { }

  ngOnInit(): void {
    this.initWorkspace();
  }

  private async initWorkspace(): Promise<void> {
    if (!this.model) {
      return;
    }

    let messages: { [key: string]: string; };
    switch (this.locale) {
      case "en":
        messages = await import("blockly/msg/en");
        break;
      case "ru":
        messages = await import("blockly/msg/ru");
        break;
      default:
        throw new Error(`Unknown locale: ${this.locale}`);
    }
    setLocale(messages);

    this.model.workspace = inject("blocklyDiv", {
      toolbox: createToolBox(this.workspaceService),
      theme: createInsteadTheme(),
      move: { scrollbars: true, wheel: true },
      zoom: { controls: true, },
    });

    this.workspaceService.attach(this.model.workspace);

    // TODO: Add filtering for duplicate and orphaned blocks:
    // E.g.: workspace.addChangeListener(Blockly.Events.disableOrphans);

    // tslint:disable-next-line: no-any
    this.model.workspace.addChangeListener((e: any) => { InsteadObject.objectLifecycleListener(e); });
    // tslint:disable-next-line: no-any
    this.model.workspace.addChangeListener((e: any) => { InsteadRoom.objectLifecycleListener(e); });

    if (window.localStorage[localStorageKey]) {
      console.log("Loading saved workspace");
      this.workspaceService.deserialize(window.localStorage[localStorageKey]);
    } else {
      this.workspaceService.addNewTarget("room", "main");
    }
  }
}
