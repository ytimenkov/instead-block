import { Component } from "@angular/core";
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
  title = "Instead Blocks";
  gameActive = true;
  codeActive = false;

  model: AppModel = { generatedCode: "", run: false, };

  constructor(private insteadService: InsteadService) { }

  convertToLua(): void {
    this.model.generatedCode = generateCode(this.model.workspace!);
  }

  run(): void {
    this.model.generatedCode = generateCode(this.model.workspace!);
    this.insteadService.run(this.model.generatedCode);
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
