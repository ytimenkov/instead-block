import "lua.vm.js";
import { Observer } from "rxjs";
import * as pegjs from "./instead.pegjs";

// tslint:disable:no-console
// tslint:disable-next-line:no-any
const Lua = (window as any).Lua;

export interface Container {
    type: string;
    children?: Elements[];
}

export interface Action extends Container {
    type: "a";
    target: string;
}

export interface Bold extends Container {
    type: "b";
}

export interface Italics extends Container {
    type: "i";
}

export interface Center extends Container {
    type: "c";
}

export interface Text {
    type: "text";
    text: string;
}

export type Elements = Action | Bold | Italics | Center | Text;

export class InsteadEngine {

    private files: { [key: string]: string; } = {
        "instead_init.lua": require("instead/instead_init.lua").default,
        "instead_js.lua": require("instead/instead_js.lua").default,
        "instead_fs.lua": require("instead/instead_fs.lua").default,
    };

    get parser(): pegjs.Parser {
        return pegjs.default;
    }

    constructor(
        private textObserver: Observer<string>,
        private titleObserver: Observer<string>,
        private waysObserver: Observer<string>,
        private inventoryObserver: Observer<string>) {

        const steadJson = require("instead/stead3.json");
        Object.keys(steadJson).forEach((path: string) => this.files[path] = steadJson[path]);
    }

    runCode(code: string): void {
        this.resetLua();

        Lua.exec(code, "main3.lua");
        Lua.eval("game:ini()");

        this.ifaceCmd("look");
    }

    private runLuaFromPath(path: string): [] | null {
        try {
            const code = this.requireContent(path);
            Lua.cache.items = {}; // Clear cache
            return Lua.exec(code, path);
        } catch (e) {
            console.error(`Error: file ${path} : ${e}`, e);
            return null;
        }
    }

    private requireContent(path: string): string {
        // Could be a module or a path ending with .lua
        if (path.substr(-4) === ".lua") {
            path = path.slice(0, -4);
        }
        path = path.replace(/\./g, "/");
        path = `${path}.lua`;
        const code = this.files[path];
        if (!code) {
            throw new Error(`File ${path} not found`);
        }
        return code;
    }

    public ifaceCmd(ifacecmd: string, refreshUI: boolean = true): void {
        // remove part of command before slash
        let command = ifacecmd;
        if (command[0] !== "#") {
            command = ifacecmd.replace(/^([^\/]+\/)/, "");
        }
        if (command !== "user_timer") {
            console.log(`Running: ${command}`);
        }
        const result = Lua.eval(`iface:cmd("${command}")`);
        console.log(`Returned: ${result}`);
        if (refreshUI && result && result[0]) {
            this.updateUI(result[0]);
        }
    }

    private updateUI(text: string): void {
        this.textObserver.next(text);

        const title = Lua.eval(`instead.get_title()`);
        if (title && title[0]) {
            this.titleObserver.next(title[0]);
        }
        const ways = Lua.eval(`instead.get_ways()`);
        if (ways && ways[0]) {
            this.waysObserver.next(ways[0]);
        }
        const inventory = Lua.eval(`instead.get_inv(false)`);
        if (inventory && inventory[0]) {
            this.inventoryObserver.next(inventory[0]);
        }
        // TODO: picture
    }

    private resetLua(): void {
        if (Lua.isInitialized) {
            // Reset scene in the UI.
            this.waysObserver.next("");
            this.inventoryObserver.next("");
            Lua.destroy();
        }
        Lua.initialize();
        Lua.inject((path: string) => this.runLuaFromPath(path), "dofile");
        Lua.requireContent = (path: string) => this.requireContent(path);
        Lua.logWarning = (msg: string) => console.warn(msg);
        Lua.set_error_callback((message: string) => console.error(message));

        this.runLuaFromPath("instead_init.lua");
    }
}
