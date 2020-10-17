import { Component, Input, OnInit } from "@angular/core";
import { GameMetaData } from "../workspace/workspace.service";

@Component({
  selector: "app-game-info",
  templateUrl: "./game-info.component.html",
  styleUrls: ["./game-info.component.css"]
})
export class GameInfoComponent implements OnInit {
  visible = false;

  @Input()
  data = new GameMetaData();

  constructor() { }

  ngOnInit(): void {
  }

}
