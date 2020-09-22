import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-instead",
  templateUrl: "./instead.component.html",
  styleUrls: ["./instead.component.css"]
})
export class InsteadComponent implements OnInit {
  @Input()
  code: string = "";

  private _run: boolean = false;

  @Input()
  public get run(): boolean {
    return this._run;
  }
  public set run(v: boolean) {
    this._run = v;
    if (this._run)
      this._loadInstead();
  }


  constructor() { }

  ngOnInit(): void {
  }

  private async _loadInstead() {
    const instead = await import("../../instead");
    instead.runGame(this.code);
  }


}
