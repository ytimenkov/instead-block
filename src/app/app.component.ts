import { Component } from "@angular/core";
import { backupWorkspace, downloadProject, editWorkspaceMetadata, generateCode, uploadProject } from 'src/files';
import { AppModuel } from 'src/model';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Instead Blocks";
  gameActive = true;
  codeActive = false;

  model: AppModuel = { generatedCode: "" };

  convertToLua() {
    this.model.generatedCode = generateCode(this.model.workspace!);
  }

  async run() {
    this.model.generatedCode = generateCode(this.model.workspace!);
    const instead = await import("../instead");
    instead.runGame(this.model.generatedCode);
  }

  save() {
    backupWorkspace(this.model.workspace!);
  }

  download() {
    downloadProject(this.model.workspace!);
  }

  upload() {
    uploadProject(this.model.workspace!);
  }

  editGameMetadata() {
    editWorkspaceMetadata(this.model.workspace!);
  }
}
