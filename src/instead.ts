// import * as Game from "instead-js/app/game";
// import * as i18n from "instead-js/app/i18n";
// import * as InsteadJS from "instead-js/app/instead";
// import * as Menu from "instead-js/app/menu";
// import * as UI from "instead-js/app/ui";
// import * as vfs from "instead-js/app/vfs";
// import * as interpreter from "instead-js/lua/interpreter";

// import * as $ from "jquery";
// require("perfect-scrollbar/jquery")($);

import "lua.vm.js";
import { Observable, Subject } from "rxjs";
// tslint:disable-next-line:no-any
const Lua = (window as any).Lua;

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



export class Instead {

    private files: { [key: string]: string; } = {
        "instead_init.lua": require("instead-js/lua/instead_init.lua").default,
        "instead_js.lua": require("instead-js/lua/instead_js.lua").default,
        "instead_fs.lua": require("instead-js/lua/instead_fs.lua").default,
    };

    text = new Subject<string>();
    title = new Subject<string>();

    constructor() {
        Lua.initialize();
        Lua.requires = {};
        Lua.inject((path: string) => this.runLuaFromPath(path), "dofile");
        Lua.requireContent = (path: string) => this.requireContent(path);
        // Lua.saveFile = saveFile;
        // Lua.loadFile = loadFile;
        // Lua.openFile = openFile;
        // Lua.gameinfo = gameInfo; // to be used by external handlers
        Lua.logWarning = (msg: string) => console.warn(msg);
        Lua.set_error_callback((message: string) => console.error(message));

        this.loadStead();
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
        Lua.exec(code, "main3.lua");
        Lua.eval("game:ini()");

        this.ifaceCmd("look", true);
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

    private ifaceCmd(ifacecmd: string, refreshUI: boolean): void {
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
        if (refreshUI && result && command.indexOf("save") !== 0) {
            // this.refreshInterface(ifaceOutput, isStart);
            this.updateUI(result[0]);
        }
    }

    private updateUI(text: string): void {
        this.text.next(text);
        const title = Lua.eval(`instead.get_title()`);
        if (title) {
            this.title.next(title[0]);
        }
    }
}
