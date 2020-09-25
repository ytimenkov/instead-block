// import * as Game from "instead-js/app/game";
// import * as i18n from "instead-js/app/i18n";
// import * as InsteadJS from "instead-js/app/instead";
// import * as Menu from "instead-js/app/menu";
// import * as UI from "instead-js/app/ui";
// import * as vfs from "instead-js/app/vfs";
// import * as interpreter from "instead-js/lua/interpreter";

// import * as $ from "jquery";
// require("perfect-scrollbar/jquery")($);

// import "lua.vm.js";
import { Observer } from "rxjs";
import * as pegjs from "./instead.pegjs";
import { lauxlib, lua, lualib, LUA_TBOOLEAN, LUA_TNUMBER, LUA_TSTRING, to_luastring } from "fengari";

// tslint:disable-next-line:no-any
// const Lua = (window as any).Lua;


// tslint:disable:no-console

// const INSTEADjs = {
//     mute: true,     // Выключить все звуки
//     preload: true,  // Кэшировать все изображения в фоновом режиме
//     autosave_on_click: false, // Автосохранение после каждого клика
//     log: true,       // Включить журнал игры
//     fading: false,   // Включить эффект затухания при переходе между сценами
//     translation: {
//         loading: "Загрузка...",
//         preload: "Кэширование картинок",
//         empty: "пусто",
//         menu_back: "Вернуться в игру",
//         menu_save: "Сохранить",
//         menu_load: "Загрузить",
//         menu_reset: "Начать заново",
//         menu_mute: "Выключить звук",
//         menu_unmute: "Включить звук",
//         menu_savegame: "Сохранить игру",
//         menu_loadgame: "Загрузить игру",
//         menu_import: "Импорт",
//         menu_export: "Экспорт сохранения",
//         menu_export_log: "Экспорт журнала игры",
//         menu_autosave: "Автосохранение",
//         menu_cancel: "Отмена",
//         zip: "Запустить игру из ZIP-файла",
//         zip_incorrect: "Это не файл с игрой для INSTEAD, выберите другой."
//     }
// };

// let insteadInitialized = false;

// function initInstead(): void {
//     Game.loadConfig(INSTEADjs);
//     if (INSTEADjs.translation) {
//         i18n.load(INSTEADjs.translation);
//     }

//     InsteadJS.init();

//     Game.path = "/";
//     Game.id = "playground";
//     Game.name = "Playground";
//     Game.ownTheme = false;
//     Game.stead = 3;
// }

// export function bindUI(selector: string): void {
//     if (!insteadInitialized) {
//         initInstead();
//         insteadInitialized = true;
//     }
//     UI.init(selector, InsteadJS.handlers);
//     Menu.init(UI.element, InsteadJS.handlers);
// }

// export function runGame(code: string): void {
//     if (!insteadInitialized) {
//         initInstead();
//         insteadInitialized = true;
//     }
//     vfs.save(Game.mainLua(), code);
//     interpreter.clear();
//     InsteadJS.startGame();
// }

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

type LuaTypes = boolean | number | string;

export class Instead {

    private files: { [key: string]: string; } = {
        "instead_init.lua": require("instead-js/lua/instead_init.lua").default,
        "instead_js.lua": require("instead-js/lua/instead_js.lua").default,
        "instead_fs.lua": require("instead-js/lua/instead_fs.lua").default,
    };

    private luaState: lua.lua_State;

    get parser(): pegjs.Parser {
        return pegjs.default;
    }

    constructor(
        private textObserver: Observer<string>,
        private titleObserver: Observer<string>,
        private waysObserver: Observer<string>,
        private inventoryObserver: Observer<string>) {

        this.loadStead();
        this.luaState = this.initLua();

        // Lua.initialize();
        // TODO: Lua.requires = {};
        // TODO: Lua.inject((path: string) => this.runLuaFromPath(path), "dofile");
        // TODO: Lua.requireContent = (path: string) => this.requireContent(path);
        // TODO: Lua.logWarning = (msg: string) => console.warn(msg);
        // TODO: THis is stderr Lua.set_error_callback((message: string) => console.error(message));
    }

    private initLua(): lua.lua_State {
        const state = lauxlib.luaL_newstate();
        lualib.luaL_openlibs(state);
        return state;
    }

    private loadStead(): void {
        const steadJson = require("instead/stead3.json");
        Object.keys(steadJson).forEach((path: string) => this.files[path] = steadJson[path]);
    }

    runCode(code: string): void {
        // TODO: clear= destroy + init

        // initialize INSTEAD
        this.runLuaFromPath("instead_init.lua");
        // TODO: setTimer(0);            // reset game timers
        // UI.loadTheme();         // load theme
        // this.clickSound(true);  // preload click sound

        // init game
        // Lua.eval(`js_instead_gamepath("/")`);
        // Lua.exec(code, "main3.lua");
        this.lua_exec(code);
        this.lua_eval("game:ini()");

        this.ifaceCmd("look");
    }

    private runLuaFromPath(path: string): void {
        try {
            const code = this.requireContent(path);
            this.lua_exec(code, path);
        } catch (e) {
            console.error(`Error: file ${path} : ${e}`, e);
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
        const result = this.lua_eval(`iface:cmd("${command}")`);
        console.log(`Returned: ${result}`);
        if (refreshUI && result && result[0]) {
            this.updateUI(result[0] as string);
        }
    }

    private updateUI(text: string): void {
        this.textObserver.next(text);

        const title = this.lua_eval(`instead.get_title()`);
        if (title && title[0]) {
            this.titleObserver.next(title[0] as string);
        }
        const ways = this.lua_eval(`instead.get_ways()`);
        if (ways && ways[0]) {
            this.waysObserver.next(ways[0] as string);
        }
        const inventory = this.lua_eval(`instead.get_inv(false)`);
        if (inventory && inventory[0]) {
            this.inventoryObserver.next(inventory[0] as string);
        }
        // TODO: picture
    }

    private lua_exec(code: string, name?: string): LuaTypes[] {
        // 1. parse
        const source = to_luastring(code);
        if (lauxlib.luaL_loadbuffer(this.luaState, source, source.length, name || "<stdin>") === lua.LUA_ERRSYNTAX) {
            const msg = lua.lua_tojsstring(this.luaState, -1);
            lua.lua_pop(this.luaState, 1);
            throw new SyntaxError(msg);
        }

        // 2. exec
        if (lua.lua_pcall(this.luaState, 0, lua.LUA_MULTRET, 0) !== lua.LUA_OK) {
            const msg = lua.lua_tojsstring(this.luaState, -1);
            lua.lua_pop(this.luaState, 1);
            throw new Error(msg);
        }
        // Pop stack
        const result: LuaTypes[] = [];
        const nargs = lua.lua_gettop(this.luaState);
        for (let i = 0; i !== nargs; ++i) {
            const type = lua.lua_type(this.luaState, -1);
            switch (type) {
                case LUA_TBOOLEAN:
                    result.push(lua.lua_toboolean(this.luaState, -1));
                    break;
                case LUA_TSTRING:
                    result.push(lua.lua_tojsstring(this.luaState, -1));
                    break;
                case LUA_TNUMBER:
                    result.push(lua.lua_tonumber(this.luaState, -1));
                    break;
                default:
                    console.warn(`Need to convert ${type}`);
                    break;
            }
            lua.lua_pop(this.luaState, 1);
        }
        console.log(`Returned from lua: `, result);
        return result;
    }

    private lua_eval(code: string): LuaTypes[] {
        return this.lua_exec(`return ${code}`);
    }
}
