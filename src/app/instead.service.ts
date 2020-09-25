import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Observer, Subject } from "rxjs";
import { distinctUntilChanged, map, tap } from "rxjs/operators";
import type { Elements, Instead } from "../instead";


@Injectable({
  providedIn: "root"
})
export class InsteadService {

  // Lazy-loaded Lua code.
  private insteadEngine?: Instead;

  private textObserver = new Subject<string>();
  text = new BehaviorSubject<Elements[]>([]);

  private titleObserver = new Subject<string>();
  title = new BehaviorSubject<Elements[]>([]);

  private waysObserver = new Subject<string>();
  ways = new BehaviorSubject<Elements[]>([]);

  private inventoryObserver = new Subject<string>();
  inventory = new BehaviorSubject<Elements[]>([]);

  constructor() { }

  async run(code: string): Promise<void> {
    if (!this.insteadEngine) {
      const instead = await import("../instead");
      this.insteadEngine = new instead.Instead(this.textObserver, this.titleObserver,
        this.waysObserver, this.inventoryObserver);
      this.wireUpPipes(this.textObserver, this.text);
      this.wireUpPipes(this.titleObserver, this.title);
      this.wireUpPipes(this.waysObserver, this.ways);
      this.wireUpPipes(this.inventoryObserver, this.inventory);
    }
    this.insteadEngine.runCode(code);
  }

  cmd(command: string): void {
    this.instead.ifaceCmd(command);
  }

  private get instead(): Instead {
    if (!this.insteadEngine) {
      throw new Error("Attempt to interact before initializing..");
    }
    return this.insteadEngine;
  }

  private wireUpPipes(src: Observable<string>, dst: Observer<Elements[]>): void {
    const parser = this.instead.parser;
    // TODO: If unparsed, send as text, for example: ([{ type: "text", _ }]);

    src.pipe(
      distinctUntilChanged(),
      tap(_ => console.log(`Got update from Instead: ${_}`)),
      map(_ => parser.parse(_))
    ).subscribe(dst);
  }
}
