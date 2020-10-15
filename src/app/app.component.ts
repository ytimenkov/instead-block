import { HttpClient } from "@angular/common/http";
import { ChangeDetectionStrategy, Component } from "@angular/core";
import { ClrLoadingState } from "@clr/angular";
import { angleIcon, ClarityIcons, detailsIcon, languageIcon, playIcon, plusIcon, refreshIcon } from "@clr/core/icon";
import { Workspace } from "blockly/core";
import { downloadProject, loadWorkspace, localStorageKey, resetWorkspace, uploadProject } from "src/files";
import { AppModuel as AppModel, GameMetaData } from "src/model";
import { InsteadService } from "./instead/instead.service";
import { Item, Room, TargetTypes, WorkspaceService } from "./workspace/workspace.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  reloadingState = ClrLoadingState.DEFAULT;

  model: AppModel = {
    workspace: (undefined as unknown) as Workspace,
    insteadMeta: new GameMetaData()
  };
  code = "";

  constructor(private insteadService: InsteadService, private http: HttpClient, private workspaceService: WorkspaceService) {
    ClarityIcons.addIcons(languageIcon, angleIcon, refreshIcon, playIcon, detailsIcon, plusIcon);
  }

  refreshCode(): void {
    // this.code = generateCode(this.model);
    this.code = this.workspaceService.generateCode();
    console.log(this.workspaceService.serialize());
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
    window.localStorage.setItem(localStorageKey, this.workspaceService.serialize());
  }

  download(): void {
    downloadProject(this.model);
  }

  upload(): void {
    uploadProject(this.model);
  }

  new(): void {
    resetWorkspace(this.model);
  }

  loadDemo(name: string): void {
    const url = `assets/demos/${name}.${$localize`:demo-language|:en`}.xml`;
    // TODO: This is a candidate for a service...
    this.http.get(url, { responseType: "text" })
      .subscribe((data) => {
        // loadWorkspace(data, this.model);
        this.workspaceService.deserialize(data);
      });
  }

  addNewTarget(type: TargetTypes): void {
    // TODO: Maybe do better dialog...
    // See also https://blockly-demo.appspot.com/static/demos/custom-dialogs/custom-dialog.js
    const name = prompt($localize`Name`);
    if (name) {
      this.workspaceService.addNewTarget(type, name);
    }
  }

  setActiveTarget(target: Room | Item): void {
    this.workspaceService.activeTarget = target;
  }

  get items(): Item[] {
    return this.workspaceService.items;
  }

  get rooms(): Room[] {
    return this.workspaceService.rooms;
  }
}
