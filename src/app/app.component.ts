import { Component } from "@angular/core";
import { ClrLoadingState } from "@clr/angular";
import { Workspace } from "blockly/core";
import { backupWorkspace, downloadProject, generateCode, uploadProject } from "src/files";
import { AppModuel as AppModel, GameMetaData } from "src/model";
import { InsteadService } from "./instead.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  reloadingState = ClrLoadingState.DEFAULT;

  model: AppModel = {
    workspace: (undefined as unknown) as Workspace,
    insteadMeta: new GameMetaData()
  };
  code = "";

  constructor(private insteadService: InsteadService) { }

  refreshCode(): void {
    this.code = generateCode(this.model);
  }

  async run(): Promise<void> {
    try {
      this.reloadingState = ClrLoadingState.LOADING;

      this.refreshCode();
      await this.insteadService.run(this.code);

      this.reloadingState = ClrLoadingState.SUCCESS;
    } catch (e) {
      console.error(e);
      this.reloadingState = ClrLoadingState.ERROR;
    }
  }

  save(): void {
    backupWorkspace(this.model);
  }

  download(): void {
    downloadProject(this.model);
  }

  upload(): void {
    uploadProject(this.model);
  }
}
