import { Component } from "@angular/core";
import { ClrLoadingState } from "@clr/angular";
import { backupWorkspace, downloadProject, generateCode, uploadProject } from "src/files";
import { AppModuel as AppModel } from "src/model";
import { InsteadService } from "./instead.service";

// tslint:disable:no-non-null-assertion

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  reloadingState = ClrLoadingState.DEFAULT;

  model: AppModel = {};
  code = "";

  constructor(private insteadService: InsteadService) { }

  refreshCode(): void {
    this.code = generateCode(this.model.workspace!);
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
    backupWorkspace(this.model.workspace!);
  }

  download(): void {
    downloadProject(this.model.workspace!);
  }

  upload(): void {
    uploadProject(this.model.workspace!);
  }
}
