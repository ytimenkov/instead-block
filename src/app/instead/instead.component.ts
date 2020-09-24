import { Component, OnInit } from "@angular/core";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
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

  get text(): Observable<SafeHtml> {
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
