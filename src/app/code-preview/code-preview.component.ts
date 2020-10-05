import { Component, Input, OnInit } from "@angular/core";
import { ClarityIcons, timesIcon } from "@clr/core/icon";

@Component({
  selector: "app-code-preview",
  templateUrl: "./code-preview.component.html",
  styleUrls: ["./code-preview.component.css"]
})
export class CodePreviewComponent implements OnInit {
  visible = false;

  @Input()
  code = "";

  constructor() {
    ClarityIcons.addIcons(timesIcon);
  }

  ngOnInit(): void {
  }

}
