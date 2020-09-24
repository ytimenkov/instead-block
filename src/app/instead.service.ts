import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { distinctUntilChanged } from "rxjs/operators";

import type { Instead } from "../instead";

@Injectable({
  providedIn: "root"
})
export class InsteadService {

  private instead?: Instead;

  text = new BehaviorSubject<string>("");
  title = new BehaviorSubject<string>("");

  constructor() { }

  async run(code: string): Promise<void> {
    if (!this.instead) {
      const instead = await import("../instead");
      this.instead = new instead.Instead();
      this.instead.text.subscribe(this.text);
      this.instead.title.pipe(distinctUntilChanged()).subscribe(this.title);
    }
    this.instead.runCode(code);
  }
}
