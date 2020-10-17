import { Component, Inject, LOCALE_ID, OnInit } from "@angular/core";
import { inject, setLocale, Workspace } from "blockly/core";
import { WorkspaceService } from "../workspace/workspace.service";
import { defineFunctionBlocks } from "./functions";
import { attachReferenceBlocks } from "./objects";
import { definePrimitivesBlocks } from "./primitives";
import { attachPropertiesBlocks } from "./properties";
import { defineStdLibBlocks } from "./stdlib";
import { createInsteadTheme, createToolBox } from "./toolbox";

export const localStorageKey = "instead-data";

@Component({
  selector: "app-blocks",
  templateUrl: "./blocks.component.html",
  styleUrls: ["./blocks.component.css"]
})
export class BlocksComponent implements OnInit {

  workspace?: Workspace;

  constructor(
    @Inject(LOCALE_ID) private locale: string,
    private workspaceService: WorkspaceService) { }

  ngOnInit(): void {
    this.initWorkspace();
  }

  private async initWorkspace(): Promise<void> {
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

    attachReferenceBlocks(this.workspaceService);
    attachPropertiesBlocks();
    defineStdLibBlocks();
    defineFunctionBlocks();
    definePrimitivesBlocks();

    this.workspace = inject("blocklyDiv", {
      toolbox: createToolBox(this.workspaceService),
      theme: createInsteadTheme(),
      move: { scrollbars: true, wheel: true },
      zoom: { controls: true, },
    });

    this.workspaceService.attach(this.workspace);

    // TODO: Add filtering for duplicate and orphaned blocks:
    // E.g.: workspace.addChangeListener(Blockly.Events.disableOrphans);


    if (!this.restoreProject()) {
      this.workspaceService.resetToNew();
    }
  }

  backupProject(): void {
    window.localStorage.setItem(localStorageKey, this.workspaceService.serialize());
  }

  restoreProject(): boolean {
    if (window.localStorage[localStorageKey]) {
      this.workspaceService.deserialize(window.localStorage[localStorageKey]);
      return true;
    }
    return false;

  }
}
