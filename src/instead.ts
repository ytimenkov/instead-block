import * as Game from "instead-js/app/game";
import * as i18n from "instead-js/app/i18n";
import * as Instead from "instead-js/app/instead";
import * as Menu from "instead-js/app/menu";
import * as UI from "instead-js/app/ui";
import * as vfs from "instead-js/app/vfs";
import * as interpreter from "instead-js/lua/interpreter";

import * as $ from "jquery";
require("perfect-scrollbar/jquery")($);


const INSTEADjs = {
    mute: true,     // Выключить все звуки
    preload: true,  // Кэшировать все изображения в фоновом режиме
    autosave_on_click: false, // Автосохранение после каждого клика
    log: true,       // Включить журнал игры
    fading: false,   // Включить эффект затухания при переходе между сценами
    translation: {
        loading: "Загрузка...",
        preload: "Кэширование картинок",
        empty: "пусто",
        menu_back: "Вернуться в игру",
        menu_save: "Сохранить",
        menu_load: "Загрузить",
        menu_reset: "Начать заново",
        menu_mute: "Выключить звук",
        menu_unmute: "Включить звук",
        menu_savegame: "Сохранить игру",
        menu_loadgame: "Загрузить игру",
        menu_import: "Импорт",
        menu_export: "Экспорт сохранения",
        menu_export_log: "Экспорт журнала игры",
        menu_autosave: "Автосохранение",
        menu_cancel: "Отмена",
        zip: "Запустить игру из ZIP-файла",
        zip_incorrect: "Это не файл с игрой для INSTEAD, выберите другой."
    }
};

let insteadInitialized = false;

function initInstead() {
    Game.loadConfig(INSTEADjs);
    if (INSTEADjs.translation) {
        i18n.load(INSTEADjs.translation);
    }

    Instead.init();
    UI.init("#instead", Instead.handlers);
    Menu.init(UI.element, Instead.handlers);

    Game.path = "/";
    Game.id = "playground";
    Game.name = "Playground";
    Game.ownTheme = false;
    Game.stead = 3;
}

export function runGame(code: string) {
    if (!insteadInitialized) {
        initInstead();
        insteadInitialized = true;
    }
    vfs.save(Game.mainLua(), code);
    interpreter.clear();
    Instead.startGame();
}
