import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-instead",
  templateUrl: "./instead.component.html",
  styleUrls: ["./instead.component.css"]
})
export class InsteadComponent implements OnInit {
  @Input()
  code = "";

  private runGame = false;

  @Input()
  public get run(): boolean {
    return this.runGame;
  }
  public set run(v: boolean) {
    this.runGame = v;
    if (this.runGame) {
      this._loadInstead();
    }
  }


  constructor() { }

  ngOnInit(): void {
    if (this.runGame) {
      this.bindUI();
    }
  }

  private async _loadInstead(): Promise<void> {
    await this.bindUI();
    const instead = await import("../../instead");
    instead.runGame(this.code);
  }

  private async bindUI(): Promise<void> {
    const instead = await import("../../instead");
    instead.bindUI("#instead");
  }
}
