import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-code-preview",
  templateUrl: "./code-preview.component.html",
  styleUrls: ["./code-preview.component.css"]
})
export class CodePreviewComponent implements OnInit {
  visible = false;

  @Input()
  code = "";

  constructor() { }

  ngOnInit(): void {
  }

}
