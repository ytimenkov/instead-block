import { Component, OnInit } from "@angular/core";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Elements } from "src/instead";
import { InsteadService } from "../instead.service";

@Component({
  selector: "app-instead",
  templateUrl: "./instead.component.html",
  styleUrls: ["./instead.component.css"]
})
export class InsteadComponent implements OnInit {
  constructor(private insteadService: InsteadService, /*private sanitizer: DomSanitizer*/) { }

  ngOnInit(): void {
  }

  act(target: string): void {
    this.insteadService.cmd(target);
  }

  get text(): Observable<Elements[]> {
    return this.insteadService.text; // .pipe(map(t => this.sanitizer.sanitize(t)));
  }

  get title(): Observable<string> {
    return this.insteadService.title;
  }

  get ways(): Observable<string> {
    return this.insteadService.ways;
  }

  get inventory(): Observable<string> {
    return this.insteadService.inventory;
  }
}
