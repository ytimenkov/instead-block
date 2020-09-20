import { Component } from "@angular/core";
import { backupWorkspace, convertOrRun, generateCode } from 'src/files';
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

  run() {
    convertOrRun(true, this.model.workspace!);
  }

  save() {
    backupWorkspace(this.model.workspace!);
  }

  download() {
  }

  upload() {
  }
}
