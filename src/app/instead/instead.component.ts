import { Component, Input, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { InsteadService } from "../instead.service";

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
      this.insteadService.run(this.code);
    }
  }


  constructor(private insteadService: InsteadService) { }

  ngOnInit(): void {
  }


  public get ui(): Observable<string> {
    return this.insteadService.ui;
  }

}
