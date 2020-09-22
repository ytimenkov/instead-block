import { Component } from "@angular/core";
import { backupWorkspace, downloadProject, generateCode, uploadProject } from 'src/files';
import { AppModuel as AppModel } from 'src/model';

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

  convertToLua() {
    this.model.generatedCode = generateCode(this.model.workspace!);
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
}
