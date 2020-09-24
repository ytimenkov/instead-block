import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import type { Elements, Instead } from "../instead";


@Injectable({
  providedIn: "root"
})
export class InsteadService {

  private instead?: Instead;

  text = new BehaviorSubject<Elements[]>([]);
  title = new BehaviorSubject<Elements[]>([]);
  ways = new BehaviorSubject<Elements[]>([]);
  inventory = new BehaviorSubject<Elements[]>([]);

  constructor() { }

  async run(code: string): Promise<void> {
    if (!this.instead) {
      const instead = await import("../instead");
      this.instead = new instead.Instead();
      this.instead.text.subscribe(this.text);
      this.instead.title.subscribe(this.title);
      this.instead.ways.subscribe(this.ways);
      this.instead.inventory.subscribe(this.inventory);
    }
    this.instead.runCode(code);
  }

  cmd(command: string): void {
    if (!this.instead) {
      throw new Error("Attempt to interact before initializing..");
    }
    this.instead.ifaceCmd(command);
  }
}
