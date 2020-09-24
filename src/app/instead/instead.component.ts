import { Component, Input, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { InsteadService } from "../instead.service";

@Component({
  selector: "app-instead",
  templateUrl: "./instead.component.html",
  styleUrls: ["./instead.component.css"]
})
export class InsteadComponent implements OnInit {
  constructor(private insteadService: InsteadService) { }

  ngOnInit(): void {
  }

  get text(): Observable<string> {
    return this.insteadService.text;
  }

  get title(): Observable<string> {
    return this.insteadService.title;
  }
}
