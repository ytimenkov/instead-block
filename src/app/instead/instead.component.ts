import { ChangeDetectionStrategy, Component, HostBinding, HostListener, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import type { Elements } from "./instead.engine";
import { InsteadService } from "./instead.service";

@Component({
  selector: "app-instead",
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: "./instead.component.html",
  styleUrls: ["./instead.component.css"]
})
export class InsteadComponent implements OnInit {
  @HostBinding("class.object-using")
  useTarget?: string;

  constructor(private insteadService: InsteadService) { }

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

  @HostListener("click")
  use(target?: string): void {
    if (this.useTarget && this.useTarget === target) {
      this.insteadService.cmd(target);
      this.useTarget = undefined;
    } else {
      this.useTarget = target;
    }
  }

  get text$(): Observable<Elements[]> {
    return this.insteadService.text;
  }

  get title$(): Observable<Elements[]> {
    return this.insteadService.title;
  }

  get ways$(): Observable<Elements[]> {
    return this.insteadService.ways;
  }

  get inventory$(): Observable<Elements[]> {
    return this.insteadService.inventory;
  }
}
