import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Elements } from "src/instead";
import { InsteadService } from "../instead.service";

@Component({
  selector: "app-instead",
  templateUrl: "./instead.component.html",
  styleUrls: ["./instead.component.css"]
})
export class InsteadComponent implements OnInit {
  useTarget?: string;

  constructor(private insteadService: InsteadService, /*private sanitizer: DomSanitizer*/) { }

  ngOnInit(): void {
  }

  act(target: string): void {
    if (this.useTarget) {
      const [what, id] = target.split(" ", 2);
      // Other objects are unactionable
      if (what === "obj/act") {
        this.insteadService.cmd(`${this.useTarget},${id}`);
      }
      this.useTarget = undefined;
    } else {
      this.insteadService.cmd(target);
    }
  }

  use(target?: string): void {
    if (this.useTarget && this.useTarget === target) {
      this.insteadService.cmd(target);
    } else {
      this.useTarget = target;
    }
  }

  get text(): Observable<Elements[]> {
    return this.insteadService.text; // .pipe(map(t => this.sanitizer.sanitize(t)));
  }

  get title(): Observable<Elements[]> {
    return this.insteadService.title;
  }

  get ways(): Observable<Elements[]> {
    return this.insteadService.ways;
  }

  get inventory(): Observable<Elements[]> {
    return this.insteadService.inventory;
  }
}
