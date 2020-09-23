import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

import type { Instead } from "../instead";

@Injectable({
  providedIn: "root"
})
export class InsteadService {

  private instead?: Instead;

  ui = new BehaviorSubject<string>("");

  constructor() { }

  async run(code: string): Promise<void> {
    if (!this.instead) {
      const instead = await import("../instead");
      this.instead = new instead.Instead();
      this.instead.ui.subscribe(this.ui);
    }
    this.instead.runCode(code);
  }
}
