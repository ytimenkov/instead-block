/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"instead": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["DDOR","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "0To5":
/*!*************************************!*\
  !*** ./lib/instead-js/app/theme.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Game = __webpack_require__(/*! ./game */ "rvG2");
var themeCSS = __webpack_require__(/*! ./ui/theme_css */ "JkNk");
var interpreter = __webpack_require__(/*! ../lua/interpreter */ "J1w4");
var vfs = __webpack_require__(/*! ./vfs */ "pTW1");

var Theme = {
    themeFile: 'theme.ini',
    theme: {},
    themeUrlGetter: {},
    load: function load(elements, themePath) {
        var defaultTheme = null;
        var customTheme = null;
        var includedThemeName = null;
        var includedTheme = null;

        this.elements = elements;
        // reset styles
        themeCSS.resetStyles();

        // load default theme
        defaultTheme = vfs.readfile(themePath + 'default/' + this.themeFile);
        this.parseTheme(defaultTheme, function themeURL(file) {
            return themePath + 'default/' + file;
        });

        if (Game.ownTheme) {
            // try to load custom theme
            customTheme = vfs.readfile(Game.fileURL(this.themeFile));
            if (customTheme) {
                interpreter.call('js_instead_theme_name(".")');
                includedThemeName = this.parseTheme(customTheme, Game.fileURL);
            }

            // load included theme
            if (includedThemeName) {
                includedTheme = vfs.readfile(themePath + includedThemeName + '/' + this.themeFile);
                this.parseTheme(includedTheme, function fileURL(file) {
                    return themePath + includedThemeName + '/' + file;
                });
                this.parseTheme(customTheme, Game.fileURL);
            }
        }
        // apply theme
        themeCSS.immediate(false); // disable auto-updating stylesheet while theme rules are generated
        this.apply();
        themeCSS.immediate(true);
        themeCSS.update();

        this.setCursor();
    },
    parseTheme: function parseTheme(data, urlGetter) {
        var self = this;
        var isInclude;
        data.split('\n').forEach(function parse(line) {
            var name;
            var value;
            var pair = line.split('=');
            if (pair.length === 2) {
                name = pair[0].trim();
                value = (pair[1].split(';'))[0].trim();
                self.theme[name] = value;
                self.themeUrlGetter[name] = urlGetter;
                if (name === 'include') {
                    isInclude = value;
                }
            }
        });
        return isInclude;
    },
    apply: function applyTheme() {
        var elements = this.elements;
        var theme = this.theme;
        var themeUrlGetter = this.themeUrlGetter;

        if (theme['scr.gfx.mode'] === 'embedded') {
            // ignore gfx size for embedded
            delete theme['scr.gfx.x'];
            delete theme['scr.gfx.y'];
            delete theme['scr.gfx.w'];
            delete theme['scr.gfx.h'];
            delete theme['win.gfx.x'];
            delete theme['win.gfx.y'];
            delete theme['win.gfx.w'];
            delete theme['win.gfx.h'];
        }
        if (!theme['win.fnt.name']) {
            theme['win.fnt.name'] = 'Tahoma';
        }
        if (!theme['inv.fnt.name']) {
            theme['inv.fnt.name'] = 'Tahoma';
        }
        Object.keys(theme).forEach(function parseParam(key) {
            themeCSS.applyParamStyle(key, elements, theme[key], themeUrlGetter[key]);
        });
        if ('snd.click' in theme && theme['snd.click']) {
            Game.clickSound = themeUrlGetter['snd.click'](theme['snd.click']);
        }
    },
    setCursor: function setCursor(isAct) {
        var cursor = this.theme['scr.gfx.cursor.normal'];
        if (isAct) {
            cursor = this.theme['scr.gfx.cursor.use'];
        }
        themeCSS.applyParamStyle('CURSOR', this.elements, cursor, this.themeUrlGetter['scr.gfx.cursor.normal']);
    },
    setStyle: function setStyle(name, value) {
        themeCSS.applyParamStyle(name, this.elements, value, Game.fileURL);
    },
    getStyle: function getStyle(name) {
        return this.theme[name];
    }
};

// configure global handlers for 'theme' module
window.insteadThemeGet = Theme.getStyle.bind(Theme);
window.insteadThemeSet = Theme.setStyle.bind(Theme);

module.exports = Theme;

/*

? scr.gfx.use = путь к картинке-индикатору режима использования (строка)
? scr.gfx.pad = размер отступов к скролл-барам и краям меню (число)
X scr.gfx.icon = пусть к файлу-иконке игры (ОС зависимая опция, может работать некорректно в некоторых случаях)
- scr.gfx.mode = режим расположения (строка fixed, embedded или float). Задает режим изображения.
    embedded - картинка является частью содержимого главного окна,
               параметры scr.gfx.x, scr.gfx.y, scr.gfx.w игнорируются.
    float    - картинка расположена по указанным координатам (scr.gfx.x, scr.gfx.y)
               и масштабируется к размеру scr.gfx.w x scr.gfx.h если превышает его.
    fixed    - картинка является частью сцены как в режиме embedded, но не скроллируется
               вместе с текстом а расположена непосредственно над ним.
    Доступны модификации режима float с модификаторами 'left/right/center/middle/bottom/top',
    указывающими как именно размещать картинку в области scr.gfx. Например: float-top-left;
- win.scroll.mode = [0|1|2|3] режим прокрутки области сцены.
    0 - нет автоматической прокрутки,
    1 - прокрутка на изменение в тексте,
    2 прокрутка на изменение, только если изменение не видно,
    3 - всегда в конец;
- menu.fnt.name = путь к файлу-шрифту меню (строка)
- menu.fnt.size = размер шрифта меню (размер)
- menu.fnt.height = междустрочный интервал как число с плавающей запятой (1.0 по умолчанию)
*/


/***/ }),

/***/ "318K":
/*!***********************************!*\
  !*** ./lib/instead-js/app/log.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! jquery */ "EVdn");
var Game = __webpack_require__(/*! ./game */ "rvG2");

var Logger = {
    log: function saveLog() {
        var message = Array.prototype.join.call(arguments, ', ');
        Game.journal(message);
    },
    show: function showLog() {
        var logContent = '';
        Game.gJournal.forEach(function handleMsg(item) {
            var message = item;
            var style = '';
            if (message.indexOf('>') === 0) {
                style = 'class="command"';
            }
            if (message.indexOf('[') === 0) {
                style = 'class="event"';
            }
            if (message.indexOf('{') === 0) {
                style = 'class="error"';
            }
            message = message.replace(/</g, '&lt;')
                    .replace(/>/g, '&gt;')
                    .replace(/:(title|ways|text|inv|picture):/g, '<span class="block">$1</span>');
            logContent += '<span ' + style + '>' + message + '<br/></span>';
        });
        var el = $('#instead--log');
        el.html(logContent);
        el.scrollTop(function h() { return this.scrollHeight; });
        return;
    }
};

module.exports = Logger;


/***/ }),

/***/ "3TiI":
/*!*****************************************!*\
  !*** ./lib/instead-js/app/ui/sprite.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! jquery */ "EVdn");
var interpreter = __webpack_require__(/*! ../../lua/interpreter */ "J1w4");
var Game = __webpack_require__(/*! ../game */ "rvG2");
var Theme = __webpack_require__(/*! ./theme_css */ "JkNk");

var sprites = {};
var spriteCounter = 0;
var spriteUniqueID = 0;
var fonts = {};
var fontNames = {};
var fontCounter = 0;
var nextCopy = {
    clear: false,
    x: null,
    y: null,
    width: null,
    height: null
};

function getFontSize(font, text) {
    var o = $('<div>' + text + '</div>')
            .css({
                position: 'absolute', float: 'left', 'white-space': 'nowrap',
                visibility: 'hidden', font: font
            })
            .appendTo($('body'));
    var w = o.width();
    var h = o.height();
    o.remove();
    return {width: w, height: h};
}


function luaToNumber(val) {
    if (typeof val === 'undefined' || val === 'nil') {
        return 0;
    }
    return +val;
}

function makeBlankCanvas(sprite) {
    var parsed = sprite.name.match(/(box|blank):(.+)/);
    sprite.replaceCopy = true;
    var d = parsed[2].split(',');
    var imgSize = d[0].match(/(\d+)x(\d+)/);

    var ctx = sprite.ctx;
    sprite.canvas.width = imgSize[1];
    sprite.canvas.height = imgSize[2];
    if (d[2]) {
        ctx.globalAlpha = d[2];
    }
    if (d[1]) {
        ctx.fillStyle = d[1];
        ctx.fillRect(0, 0, imgSize[1], imgSize[2]);
    }
    if (d[2]) {
        ctx.globalAlpha = 1;
    }
}

function copySprite(srcID, fx, fy, fw, fh, dstID, x, y, alpha, mode) {
    var srcSprite = sprites[srcID];
    var dstSprite = sprites[dstID];
    srcSprite.waitOp = true;
    dstSprite.waitOp = true;
    if (srcSprite.unavailable || dstSprite.unavailable) {
        setTimeout(function deferredCopy() {
            copySprite(srcID, fx, fy, fw, fh, dstID, x, y, alpha, mode);
        }, 100);
        return;
    }
    var width = luaToNumber(fw);
    var height = luaToNumber(fh);
    var srcX = luaToNumber(fx);
    var srcY = luaToNumber(fy);
    var trgX = luaToNumber(x);
    var trgY = luaToNumber(y);

    if (width < 0) {
        width = srcSprite.canvas.width;
    }
    if (height < 0) {
        height = srcSprite.canvas.height;
    }
    var ctx = dstSprite.ctx;
    if (mode === 'copy' && srcSprite.replaceCopy) {
        // cut out target canvas area on next copy operation
        nextCopy = {
            clear: true,
            x: trgX,
            y: trgY,
            width: width,
            height: height,
            dstID: dstID
        };
    } else {
        if (nextCopy.clear && nextCopy.dstID === dstID) {
            nextCopy.clear = false;
            ctx.clearRect(nextCopy.x, nextCopy.y, nextCopy.width, nextCopy.height);
        }
        if (alpha && alpha !== 'nil') {
            ctx.globalAlpha = +alpha;
        }
        ctx.drawImage(srcSprite.canvas, srcX, srcY, width, height,
                      trgX, trgY, width, height);
        if (alpha && alpha !== 'nil') {
            ctx.globalAlpha = 1;
        }
    }
    srcSprite.waitOp = false;
    dstSprite.waitOp = false;
}


var Sprite = {
    id: function id(n) {
        return '_INSTEAD_sprite' + n;
    },
    is: function is(name) {
        return name.indexOf('_INSTEAD_sprite') === 0;
    },
    initCanvas: function initCanvas(parentElement, spriteID) {
        parentElement.append(sprites[spriteID].canvas);
    },
    asImage: function spriteAsImage(spriteID) {
        spriteUniqueID++;
        var sprite = spriteID + '__' + spriteUniqueID;
        setTimeout(function populateSprite() {
            var sp = sprites[spriteID].canvas;
            var sc = document.getElementById(sprite);
            sc.width = sp.width;
            sc.height = sp.height;
            var ctx = sc.getContext('2d');
            ctx.drawImage(sp, 0, 0, sp.width, sp.height, 0, 0, sp.width, sp.height);
        }, 50);
        return '<canvas id="' + sprite + '"></canvas>';
    },
    load: function spriteLoad(fileName) {
        spriteCounter++;
        var spriteID = this.id(spriteCounter);
        var sprite = {
            id: spriteID,
            name: fileName,
            canvas: document.createElement('canvas'),
            unavailable: true,
            waitOp: true
        };
        sprite.ctx = sprite.canvas.getContext('2d');

        sprites[spriteID] = sprite;
        interpreter.call('js_instead_sprite_load("' + fileName + '", "' + spriteID + '")');

        if (sprite.name.indexOf('box') === 0 || sprite.name.indexOf('blank') === 0) {
            makeBlankCanvas(sprite);
            sprite.unavailable = false;
        } else {
            var img = new Image();
            img.addEventListener('load', function loadImage() {
                sprite.canvas.width = img.width;
                sprite.canvas.height = img.height;
                sprite.canvas.getContext('2d').drawImage(img, 0, 0);
                sprite.unavailable = false;
            }, false);
            img.src = Game.fileURL(sprite.name);
        }
    },
    copy: function spriteCopy() {
        var args = Array.prototype.slice.call(arguments);
        args[9] = 'copy';
        return copySprite.apply(this, args);
    },
    compose: function spriteCompose() {
        var args = Array.prototype.slice.call(arguments);
        args[9] = 'compose';
        return copySprite.apply(this, args);
    },
    draw: function spriteDraw() {
        var args = Array.prototype.slice.call(arguments);
        args[9] = 'draw';
        return copySprite.apply(this, args);
    },
    free: function spriteFree(spriteID) {
        if (typeof sprites[spriteID] === 'object' && sprites[spriteID].waitOp) {
            setTimeout(function deferredFree() {
                Sprite.free(spriteID);
            }, 511);
            return;
        }
        setTimeout(function delayedFree() {
            delete sprites[spriteID];
        }, 300);
    },
    pixel: function spritePixel(spriteID, x, y, color, alpha) {
        sprites[spriteID].waitOp = true;
        var ctx = sprites[spriteID].ctx;
        if (alpha && alpha !== 'nil') {
            ctx.globalAlpha = alpha;
        }
        ctx.fillStyle = color;
        ctx.fillRect(x, y, 1, 1);
        if (alpha && alpha !== 'nil') {
            ctx.globalAlpha = 1;
        }
        sprites[spriteID].waitOp = false;
    },
    fill: function spriteFill(spriteID, x, y, width, height, color) {
        var sprite = sprites[spriteID];
        sprite.waitOp = true;
        var w = width;
        var h = height;
        if (width < 0) {
            w = sprite.canvas.width;
        }
        if (height < 0) {
            h = sprite.canvas.height;
        }
        sprite.ctx.fillStyle = color;
        sprite.ctx.fillRect(x, y, w, h);
        sprite.waitOp = false;
    },
    font: function spriteFont(fileName, size) {
        fontCounter++;
        var fontID = 'sprite_font_' + fontCounter;
        var font = {
            id: fontID,
            name: fileName,
            size: +size
        };

        fonts[fontID] = font;
        if (!fontNames.hasOwnProperty(fileName)) {
            Theme.applyParamStyle('SPRITE.FNT', fontID, fileName, Game.fileURL);
        }
        fontNames[fileName] = true;
        interpreter.call('js_instead_font_load("' + fileName + size + '", "' + fontID + '")');
    },
    text: function spriteText(fontID, text, color) {
        spriteCounter++;
        var spriteID = this.id(spriteCounter);
        interpreter.call('js_instead_sprite_text("' + fontID + '", "' + spriteID + '")');

        var sprite = {
            id: spriteID,
            canvas: document.createElement('canvas'),
            unavailable: true,
            waitOp: true
        };
        sprite.ctx = sprite.canvas.getContext('2d');
        sprites[spriteID] = sprite;

        var fontName = fonts[fontID].size + 'px ' + fontID;
        var fontSize = getFontSize(fontName, text);
        sprite.canvas.width = fontSize.width;
        sprite.canvas.height = fontSize.height;
        sprite.ctx.font = fontName;
        sprite.ctx.textBaseline = 'top';
        if (color && color !== 'nil') {
            sprite.ctx.fillStyle = color;
        } else {
            sprite.ctx.fillStyle = '#FFFFFF'; // white font by default
        }
        sprite.ctx.fillText(text, 0, 0);
        sprite.unavailable = false;
    }
};

window.Sprite = Sprite;
module.exports = Sprite;


/***/ }),

/***/ "587s":
/*!********************************!*\
  !*** ./lib/instead-js/ajax.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function ajaxGet(sQuery, callback, bSynchronous) {
    var bAsync = true;
    if (bSynchronous) {
        bAsync = false;
    }
    var client = new XMLHttpRequest();
    client.onreadystatechange = function callbackHandler() {
        if (this.readyState === this.DONE) {
            if (this.status === 200) {
                callback(this.responseText);
            } else {
                callback(null, this.status);
            }
        }
    };
    client.open('GET', sQuery, bAsync);
    client.send();
}

function ajaxGetSync(url) {
    var data;
    ajaxGet(url, function loadCallback(response) {
        data = response;
    }, true);
    return data;
}

module.exports = ajaxGetSync;


/***/ }),

/***/ "7LXh":
/*!************************************!*\
  !*** ./lib/instead-js/app/app.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "LboF");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./app.css */ "9uNN");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "9uNN":
/*!**************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./lib/instead-js/app/app.css ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "JPst");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".nowrap {\n    white-space: pre;\n}\n\n.compositeImage {\n    position:relative;\n    display:inline-block;\n    overflow: hidden;\n}\n\n#manager {\n    text-align: center;\n    color: #FFFFFF;\n    width: 760px;\n    margin: 0 auto;\n    padding: 20px;\n}\n\n#manager a {\n    border: 1px solid transparent;\n    width: 400px;\n    margin: auto;\n    text-align: center;\n    text-decoration: none;\n    color: #CCCCCC;\n    display: block;\n    padding: 10px;\n}\n\n#manager a:hover {\n    border: 1px solid #CCCC66;\n    color: #CCCC66;\n}\n\n/* Set font */\n#manager *, #instead--menu *, #stead-toolbar * {\n    font-family: Tahoma,Verdana,Helvetica,Arial,sans-serif;\n}\n\n\n#instead--menu *, #stead-toolbar *, #stead * {\n    /* disallow text selection */\n    -webkit-touch-callout: none;\n      -webkit-user-select: none;\n       -khtml-user-select: none;\n         -moz-user-select: none;\n          -ms-user-select: none;\n              user-select: none;\n}\n\n#stead-container {\n    width: 800px;\n    position: relative;\n    margin: 0 auto;\n}\n\n#stead-container * {\n    font-size: 100%;\n}\n\n#stead-toolbar {\n    margin-top: 10px;\n    padding: 3px;\n    background-color: #333333;\n    border: 1px solid #333333;\n    display: none;\n}\n\n#stead-toolbar-info {\n    margin-left: 5px;\n    display: inline-block;\n    color: #CCCCCC;\n}\n\n#stead-toolbar-buttons {\n    display: inline-block;\n    float: right;\n}\n\n#stead-toolbar-buttons button {\n    border: none;\n    background-color: transparent;\n    position: relative;\n    color: #CCCCCC;\n    cursor: pointer;\n}\n\n#stead-toolbar-buttons button:focus {\n    outline:0;\n}\n\n#stead {\n    width: 800px;\n    position: relative;\n}\n\n#stead a {\n    text-decoration: none;\n    cursor: inherit;\n}\n\n#win, #inventory, #menu_button {\n    position: absolute;\n}\n\n#win, #inventory {\n    overflow: auto;\n    overflow-x: hidden;\n    overflow-y: hidden;\n    z-index: 1000;  /* always above the picture layer */\n}\n\n#title, #picture, #ways-top {\n    text-align: center;\n    margin-bottom: 5px;\n}\n\n#ways-bottom {\n    text-align: center;\n    margin-top: 15px;\n    margin-bottom: 5px;\n}\n\n#instead--text {\n    text-align: justify;\n    word-wrap: normal;\n    white-space: pre-line;      /* CSS3 */\n}\n\n#instead--menu {\n    position: absolute;\n    z-index: 9000;\n    width: 250px;\n    top: 150px;\n    left: 275px;\n    padding: 10px;\n    border-style: solid;\n    display: none;\n    text-align: center;\n}\n\n#instead--menu a {\n    height: 24px;\n    text-decoration: none;\n    width: 100%;\n    padding: 1px;\n    display: block;\n}\n\n#instead--menu h3 {\n    margin-top: 5px;\n}\n\n.slot-selector {\n    height: 24px;\n    text-align: left;\n    font-size: 0.8em;\n}\n\n#instead--menu-saveload {\n    display: none;\n}", "",{"version":3,"sources":["webpack://lib/instead-js/app/app.css"],"names":[],"mappings":"AAAA;IACI,gBAAgB;AACpB;;AAEA;IACI,iBAAiB;IACjB,oBAAoB;IACpB,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;IAClB,cAAc;IACd,YAAY;IACZ,cAAc;IACd,aAAa;AACjB;;AAEA;IACI,6BAA6B;IAC7B,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,qBAAqB;IACrB,cAAc;IACd,cAAc;IACd,aAAa;AACjB;;AAEA;IACI,yBAAyB;IACzB,cAAc;AAClB;;AAEA,aAAa;AACb;IACI,sDAAsD;AAC1D;;;AAGA;IACI,4BAA4B;IAC5B,2BAA2B;MACzB,yBAAyB;OACxB,wBAAwB;SACtB,sBAAsB;UACrB,qBAAqB;cACjB,iBAAiB;AAC/B;;AAEA;IACI,YAAY;IACZ,kBAAkB;IAClB,cAAc;AAClB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,gBAAgB;IAChB,YAAY;IACZ,yBAAyB;IACzB,yBAAyB;IACzB,aAAa;AACjB;;AAEA;IACI,gBAAgB;IAChB,qBAAqB;IACrB,cAAc;AAClB;;AAEA;IACI,qBAAqB;IACrB,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,6BAA6B;IAC7B,kBAAkB;IAClB,cAAc;IACd,eAAe;AACnB;;AAEA;IACI,SAAS;AACb;;AAEA;IACI,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,qBAAqB;IACrB,eAAe;AACnB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,cAAc;IACd,kBAAkB;IAClB,kBAAkB;IAClB,aAAa,GAAG,mCAAmC;AACvD;;AAEA;IACI,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,mBAAmB;IACnB,iBAAiB;IACjB,qBAAqB,OAAO,SAAS;AACzC;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,YAAY;IACZ,UAAU;IACV,WAAW;IACX,aAAa;IACb,mBAAmB;IACnB,aAAa;IACb,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,qBAAqB;IACrB,WAAW;IACX,YAAY;IACZ,cAAc;AAClB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,gBAAgB;IAChB,gBAAgB;AACpB;;AAEA;IACI,aAAa;AACjB","sourcesContent":[".nowrap {\n    white-space: pre;\n}\n\n.compositeImage {\n    position:relative;\n    display:inline-block;\n    overflow: hidden;\n}\n\n#manager {\n    text-align: center;\n    color: #FFFFFF;\n    width: 760px;\n    margin: 0 auto;\n    padding: 20px;\n}\n\n#manager a {\n    border: 1px solid transparent;\n    width: 400px;\n    margin: auto;\n    text-align: center;\n    text-decoration: none;\n    color: #CCCCCC;\n    display: block;\n    padding: 10px;\n}\n\n#manager a:hover {\n    border: 1px solid #CCCC66;\n    color: #CCCC66;\n}\n\n/* Set font */\n#manager *, #instead--menu *, #stead-toolbar * {\n    font-family: Tahoma,Verdana,Helvetica,Arial,sans-serif;\n}\n\n\n#instead--menu *, #stead-toolbar *, #stead * {\n    /* disallow text selection */\n    -webkit-touch-callout: none;\n      -webkit-user-select: none;\n       -khtml-user-select: none;\n         -moz-user-select: none;\n          -ms-user-select: none;\n              user-select: none;\n}\n\n#stead-container {\n    width: 800px;\n    position: relative;\n    margin: 0 auto;\n}\n\n#stead-container * {\n    font-size: 100%;\n}\n\n#stead-toolbar {\n    margin-top: 10px;\n    padding: 3px;\n    background-color: #333333;\n    border: 1px solid #333333;\n    display: none;\n}\n\n#stead-toolbar-info {\n    margin-left: 5px;\n    display: inline-block;\n    color: #CCCCCC;\n}\n\n#stead-toolbar-buttons {\n    display: inline-block;\n    float: right;\n}\n\n#stead-toolbar-buttons button {\n    border: none;\n    background-color: transparent;\n    position: relative;\n    color: #CCCCCC;\n    cursor: pointer;\n}\n\n#stead-toolbar-buttons button:focus {\n    outline:0;\n}\n\n#stead {\n    width: 800px;\n    position: relative;\n}\n\n#stead a {\n    text-decoration: none;\n    cursor: inherit;\n}\n\n#win, #inventory, #menu_button {\n    position: absolute;\n}\n\n#win, #inventory {\n    overflow: auto;\n    overflow-x: hidden;\n    overflow-y: hidden;\n    z-index: 1000;  /* always above the picture layer */\n}\n\n#title, #picture, #ways-top {\n    text-align: center;\n    margin-bottom: 5px;\n}\n\n#ways-bottom {\n    text-align: center;\n    margin-top: 15px;\n    margin-bottom: 5px;\n}\n\n#instead--text {\n    text-align: justify;\n    word-wrap: normal;\n    white-space: pre-line;      /* CSS3 */\n}\n\n#instead--menu {\n    position: absolute;\n    z-index: 9000;\n    width: 250px;\n    top: 150px;\n    left: 275px;\n    padding: 10px;\n    border-style: solid;\n    display: none;\n    text-align: center;\n}\n\n#instead--menu a {\n    height: 24px;\n    text-decoration: none;\n    width: 100%;\n    padding: 1px;\n    display: block;\n}\n\n#instead--menu h3 {\n    margin-top: 5px;\n}\n\n.slot-selector {\n    height: 24px;\n    text-align: left;\n    font-size: 0.8em;\n}\n\n#instead--menu-saveload {\n    display: none;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "C5zL":
/*!********************************************!*\
  !*** ./lib/instead-js/app/ui/preloader.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! jquery */ "EVdn");
var Game = __webpack_require__(/*! ../game */ "rvG2");

var Preloader = {
    progress: 0,
    load: function load(imgArray, callbackProgress, callbackFinished) {
        var self = this;
        imgArray.forEach(function preloadImg(image) {
            $('<img>').attr('src', Game.fileURL(image)).on('load', function complete() {
                self.progress += 1;
            });
        });
        this.calcPercent = setInterval(function updatePercent() {
            callbackProgress(Math.floor(self.progress / imgArray.length * 100));
            if (self.progress === imgArray.length) {
                clearInterval(self.calcPercent);
                callbackFinished();
            }
        }, 10);
    },
    stop: function stop() {
        this.calcPercent = null;
    }
};

module.exports = Preloader;


/***/ }),

/***/ "DDOR":
/*!*********************************!*\
  !*** ./lib/instead-js/index.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// load styles
__webpack_require__(/*! perfect-scrollbar/dist/css/perfect-scrollbar.css */ "+TV0");
__webpack_require__(/*! ./style.css */ "vQlt");

var $ = __webpack_require__(/*! jquery */ "EVdn");
__webpack_require__(/*! perfect-scrollbar/jquery */ "Se41")($);

var Manager = __webpack_require__(/*! ./app/manager */ "mUPN");
var ZipLoader = __webpack_require__(/*! ./app/ziploader */ "Vvag");

var i18n = __webpack_require__(/*! ./app/i18n */ "zSbL");
var Game = __webpack_require__(/*! ./app/game */ "rvG2");
var Instead = __webpack_require__(/*! ./app/instead */ "OLl3");
var UI = __webpack_require__(/*! ./app/ui */ "klLQ");
var Menu = __webpack_require__(/*! ./app/menu */ "t7p3");

document.addEventListener(
    'DOMContentLoaded',
    function onLoad() {
        if ('INSTEADjs' in window) {
            Game.loadConfig(window['INSTEADjs']); // eslint-disable-line dot-notation
            if (window['INSTEADjs']['translation']) { // eslint-disable-line dot-notation
                i18n.load(window['INSTEADjs']['translation']); // eslint-disable-line dot-notation
            }
        }
        Manager.init();
        ZipLoader.init();
        // initialization of INSTEAD components
        Instead.init();
        UI.init('#instead', Instead.handlers);
        Menu.init(UI.element, Instead.handlers);
    }
);


/***/ }),

/***/ "J1w4":
/*!*******************************************!*\
  !*** ./lib/instead-js/lua/interpreter.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* global Lua */
__webpack_require__(/*! lua.vm.js */ "pWi6");
var Game = __webpack_require__(/*! ../app/game */ "rvG2");
var vfs = __webpack_require__(/*! ../app/vfs */ "pTW1");
var Storage = __webpack_require__(/*! ../app/storage */ "bIoZ");
var Logger = __webpack_require__(/*! ../app/log */ "318K");

// synchronous ajax to get file, so code executed before function returns
function runLuaFromPath(path) {
    try {
        var luacode = vfs.readfile(path);
        // check if download worked
        if ((typeof luacode) !== 'string') {
            throw String('RunLuaFromPath failed "' + path + '" :' +
                ' type=' + (typeof luacode) +
                ' val=' + String(luacode));
        }

        Lua.cache.items = {}; // Clear cache;
        return Lua.exec(luacode, path);
    } catch (e) {
        console.error('Error: file ' + path + ' : ' + String(e) + ' :\n', e); // eslint-disable-line no-console
    }
    return null;
}

function requireContent(filepath) {
    var path = filepath;
    // path transformations
    if (path.substr(-4) === '.lua') {
        path = path.slice(0, -4); // require automatically appends .lua to the filepath later, remove it here
    }
    path = path.replace(/\./g, '/');
    if (!vfs.isStead(path + '.lua')) {
        // require unknown core module, assume loading from game files
        path = Game.fileURL(path + '.lua');
    } else {
        path = path + '.lua';
    }
    return vfs.readfile(path);
}

function luaDofile(filepath) {
    return runLuaFromPath(Game.fileURL(filepath));
}


function saveFile(path) {
    var filepath = path;
    if (path.search(/prefs\.tmp/) !== -1) {
        filepath = Game.getPrefsName();
    }
    var data = Lua.eval('instead_file_get_content("' + path + '")');
    Storage.save(filepath, data[1]);
}

function loadFile(path) {
    var filepath = path;
    if (path.search(/prefs/) !== -1) {
        filepath = Game.getPrefsName();
    }
    return Storage.load(filepath);
}

function openFile(path) {
    var filepath = Game.fileURL(path);
    return vfs.readfile(filepath);
}

function gameInfo() {
    return {
        id: Game.id,
        name: Game.name,
        stead: Game.stead
    };
}

var Interpreter = {
    init: function interpreterInit() {
        Lua.initialize();
        Lua.requires = {};
        Lua.inject(luaDofile, 'dofile');
        Lua.requireContent = requireContent
        Lua.saveFile = saveFile;
        Lua.loadFile = loadFile;
        Lua.openFile = openFile;
        Lua.gameinfo = gameInfo; // to be used by external handlers
        Lua.logWarning = function logWarning(msg) {
            Logger.log('{warning} ' + msg);
        };
        Lua.set_error_callback(function errCb(errorMsg) {
            Logger.log('{error} ' + errorMsg);
        });
    },
    loadStead: function loadStead(version) {
        var path = (version === 3) ? './stead3.json' : './stead2.json';
        var stead = JSON.parse(vfs.readfile(path));
        vfs.updateStead(stead);
    },
    call: function interpreterCall(command) {
        var result = Lua.eval(command);
        if (result) {
            return result[0];
        }
        return null;
    },
    load: function interpreterLoad(path) {
        return runLuaFromPath(path);
    },
    clear: function interpreterClear() {
        Lua.destroy();
        this.init();
    }
};

module.exports = Interpreter;


/***/ }),

/***/ "JkNk":
/*!********************************************!*\
  !*** ./lib/instead-js/app/ui/theme_css.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! jquery */ "EVdn");
var Game = __webpack_require__(/*! ../game */ "rvG2");

var dynamicStyles = {};
var scrollerWidth = 15;

var updateCSS = true;

function setCSS() {
    if (!updateCSS) {
        return;
    }
    var css = '';
    for (var property in dynamicStyles) {
        if (dynamicStyles.hasOwnProperty(property)) {
            css = css + dynamicStyles[property];
        }
    }
    $('#theme_css').text(css);
}

function setFontCSS(selector, fontName, v, getURL) {
    var fntCSS = '';

    function setFont(name, file, type) {
        var fnt = '@font-face{font-family:"' + name + '";src:url("' + file + '") format("truetype");';
        switch (type) {
        case 'b':
            fnt += 'font-weight:bold;';
            break;
        case 'i':
            fnt += 'font-style:italic;';
            break;
        case 'bi':
            fnt += 'font-weight:bold;font-style:italic;';
            break;
        default:
            // unknown style/weight, do nothing
        }
        fnt += '}';
        return fnt;
    }

    var fonts = v.match(/(.*?){(.*?)(?:,(.*?)(?:,(.*?)(?:,(.*?))?)?)?}(\.\w+)/);
    if (fonts) {
        if (fonts[2]) {
            fntCSS += setFont(fontName, getURL(fonts[1] + fonts[2] + fonts[6]));
        }
        if (fonts[3]) {
            fntCSS += setFont(fontName, getURL(fonts[1] + fonts[3] + fonts[6]), 'b');
        }
        if (fonts[4]) {
            fntCSS += setFont(fontName, getURL(fonts[1] + fonts[4] + fonts[6]), 'i');
        }
        if (fonts[5]) {
            fntCSS += setFont(fontName, getURL(fonts[1] + fonts[5] + fonts[6]), 'bi');
        }
    }
    fonts = v.match(/(.*?){([\d\w]+)}(\.\w+)/);
    if (fntCSS === '' && fonts && fonts[2]) {
        fntCSS += setFont(fontName, getURL(fonts[1] + fonts[2] + fonts[3]));
    }
    if (fntCSS === '' && v) {
        fntCSS += setFont(fontName, getURL(v)); // one font for all types
    }
    if (selector) {
        fntCSS += selector + ' * {font-family:' + fontName + ',Arial,Helvetica,sans-serif;}';
    }
    return fntCSS;
}

var applyStyle = {
    'scr.gfx.bg': function s(e, v, getURL) {
        e.$stead.css('backgroundImage', 'url("' + getURL(v) + '")');
    },
    'scr.col.bg': function s(e, v) {
        e.$stead.css('background-color', v);
    },
    'scr.w': function s(e, v) {
        e.$stead.css('width', v + 'px');
        e.$container.css('width', v + 'px'); // change width of the INSTEAD container with toolbar
    },
    'scr.h': function s(e, v) { e.$stead.css('height', v + 'px'); },

    'scr.gfx.w': function s(e, v) {
        if (v > 0) {
            dynamicStyles['scr.gfx.w'] = '#picture img {max-width:' + v + 'px}\n#picture {width:' + v + 'px}';
            setCSS();
        }
    },
    'scr.gfx.h': function s(e, v) {
        if (v > 0) {
            dynamicStyles['scr.gfx.h'] = '#picture img {max-height:' + v + 'px}\n#picture {height:' + v + 'px}';
            setCSS();
        }
    },
    'scr.gfx.x': function s(e, v) { e.$picture.css('left', v + 'px'); },
    'scr.gfx.y': function s(e, v) { e.$picture.css('top', v + 'px'); },
    'scr.gfx.mode': function s(e, v) {
        if (v.search('float') !== -1) {
            e.$picture.appendTo('#stead').css('position', 'absolute');
        }
    },

    'win.gfx.w': function s() { this['scr.gfx.w'](arguments); },
    'win.gfx.h': function s() { this['scr.gfx.h'](arguments); },
    'win.gfx.x': function s() { this['scr.gfx.x'](arguments); },
    'win.gfx.y': function s() { this['scr.gfx.w'](arguments); },

    'win.w': function s(e, v) {
        e.$win.css('width', v + 'px');
        e.$win.css('padding-right', scrollerWidth + 'px');
    },
    'win.h': function s(e, v) { e.$win.css('height', v + 'px'); },
    'win.x': function s(e, v) { e.$win.css('left', v + 'px'); },
    'win.y': function s(e, v) { e.$win.css('top', v + 'px'); },
    'win.col.fg': function s(e, v) { e.$win.css('color', v); },
    'win.align': function s(e, v) { e.$win.css('text-align', v); },
    'win.scroll.mode': function s(e, v) {
        if (+v === 3) {
            Game.scroll_mode = 'bottom';
        } else if (+v > 0) {
            Game.scroll_mode = 'change';
        } else {
            Game.scroll_mode = 'top';
        }
    },
    'win.ways.mode': function s(e, v) {
        Game.ways_mode = v;
    },
    'win.fnt.name': function s(e, v, getURL) {
        dynamicStyles['win.fnt.name'] = setFontCSS('#win', 'insteadWin', v, getURL);
        setCSS();
    },
    'win.fnt.size': function s(e, v) {
        e.$win.css('font-size', v + 'px');
    },
    'win.fnt.height': function s(e, v) {
        // default line height for browsers: 1.2
        e.$win.css('line-height', +v * 1.2);
    },

    'inv.w': function s(e, v) {
        e.$inventory.css('width', v + 'px');
        e.$inventory.css('padding-right', scrollerWidth + 'px');
    },
    'inv.h': function s(e, v) { e.$inventory.css('height', v + 'px'); },
    'inv.x': function s(e, v) { e.$inventory.css('left', v + 'px'); },
    'inv.y': function s(e, v) { e.$inventory.css('top', v + 'px'); },
    'inv.col.fg': function s(e, v) { e.$inventory.css('color', v); },
    'inv.mode': function s(e, v) {
        if (v === 'disabled') {
            e.$inventory.hide();
        } else {
            var p = v.split('-');
            Game.inventory_mode = p[0];
            if (p[0] === 'horizontal') {
                // default text align for 'horizontal' mode
                e.$inventory.css('text-align', 'center');
            }
            if (p[1]) {
                e.$inventory.css('text-align', p[1]);
            }
        }
    },
    'inv.fnt.name': function s(e, v, getURL) {
        dynamicStyles['inv.fnt.name'] = setFontCSS('#inventory', 'insteadInv', v, getURL);
        setCSS();
    },
    'inv.fnt.size': function s(e, v) {
        e.$inventory.css('font-size', v + 'px');
    },
    'inv.fnt.height': function s(e, v) {
        // default line height for browsers: 1.2
        e.$inventory.css('line-height', +v * 1.2);
    },

    'menu.col.bg': function s(e, v) { e.$menu.css('background-color', v); },
    'menu.col.fg': function s(e, v) { e.$menu.css('color', v); },
    'menu.col.link': function s(e, v) {
        dynamicStyles['menu.col.link'] = '#instead--menu a {color:' + v + '}';
        setCSS();
    },
    'menu.col.alink': function s(e, v) {
        dynamicStyles['menu.col.alink'] = '#instead--menu a:hover {color:' + v + '}';
        setCSS();
    },
    'menu.col.alpha': function s(e, v) { e.$menu.css('opacity', (v / 255)); },
    'menu.col.border': function s(e, v) { e.$menu.css('border', v + 'px'); },
    'menu.bw': function s(e, v) { e.$menu.css('border-width', v + 'px'); },

    'menu.button.x': function s(e, v) { e.$menuButton.css('left', v + 'px'); },
    'menu.button.y': function s(e, v) { e.$menuButton.css('top', v + 'px'); },

    'menu.gfx.button': function s(e, v, getURL) {
        e.$menuImage.attr('src', getURL(v));
    },
    'win.col.link': function s(e, v) {
        dynamicStyles['win.col.link'] = '#win a {color:' + v + '}';
        setCSS();
    },
    'win.col.alink': function s(e, v) {
        dynamicStyles['win.col.alink'] = '#win a:hover {color:' + v + '}';
        setCSS();
    },
    'inv.col.link': function s(e, v) {
        dynamicStyles['inv.col.link'] = '#inventory a {color:' + v + '}';
        setCSS();
    },
    'inv.col.alink': function s(e, v) {
        dynamicStyles['inv.col.alink'] = '#inventory a:hover {color:' + v + '}';
        setCSS();
    },

    'SPRITE.FNT': function s(fontID, v, getURL) {
        dynamicStyles[fontID] = setFontCSS(null, fontID, v, getURL);
        setCSS();
    },

    'CURSOR': function s(e, v, getURL) {
        e.$stead.css('cursor', 'url(' + getURL(v) + '), auto');
    }
};

var controller = {
    resetStyles: function resetStyles() {
        dynamicStyles = {};
        this.update();
    },
    update: function update() {
        setCSS();
    },
    immediate: function immediate(v) {
        updateCSS = v;
    },
    applyParamStyle: function applyParamStyle(key, elements, value, urlGetter) {
        if (key in applyStyle && value !== 'nil') {
            applyStyle[key](elements, value, urlGetter);
        }
    }
};

module.exports = controller;


/***/ }),

/***/ "OLl3":
/*!***************************************!*\
  !*** ./lib/instead-js/app/instead.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var interpreter = __webpack_require__(/*! ../lua/interpreter */ "J1w4");
var UI = __webpack_require__(/*! ./ui */ "klLQ");
var Game = __webpack_require__(/*! ./game */ "rvG2");
var HTMLAudio = __webpack_require__(/*! ./audio */ "tfHD");
var Keyboard = __webpack_require__(/*! ./ui/keyboard */ "o39M");

var Logger = __webpack_require__(/*! ./log */ "318K");

var Instead = {
    init: function init() {
        this.handlers = {
            click: this.click.bind(this),
            reset: this.resetGame.bind(this),
            save: this.saveGame.bind(this),
            load: this.loadGame.bind(this),
            mute: this.soundMute.bind(this)
        };
        // document.body.addEventListener('keydown', kbdEvent);
        // document.body.addEventListener('keyup', kbdEvent);

        // preloader
        interpreter.init();
        // interpreter.load('instead_js.lua');
    },

    initGame: function initGame(gameData) {
        // Allowed properties: path, id, name, details, ownTheme, stead
        for (var property in gameData) {
            if (gameData.hasOwnProperty(property)) {
                Game[property] = gameData[property];
            }
        }
    },

    startGame: function startGame(savedGameID) {
        // load corresponding STEAD lua files
        interpreter.loadStead(Game.stead);
        // initialize INSTEAD
        interpreter.load('instead_init.lua');
        setTimer(0);            // reset game timers
        UI.loadTheme();         // load theme
        this.clickSound(true);  // preload click sound

        // init game
        interpreter.call('js_instead_gamepath("' + Game.path + '")');
        interpreter.load(Game.mainLua());
        interpreter.call('game:ini()');
        // load game, if required
        if (Game.saveExists(savedGameID)) {
            this.ifaceCmd('load ' + Game.getSaveName(savedGameID), true, true);
        } else {
            // start game
            this.ifaceCmd('look', true, true);
        }
    },

    resetGame: function resetGame() {
        var self = this;
        HTMLAudio.stopMusic();
        interpreter.clear();
        setTimeout(function t() {
            self.startGame();
        }, 100);
    },

    saveGame: function saveGame(id) {
        this.ifaceCmd('save ' + Game.getSaveName(id));
    },

    loadGame: function loadGame(id) {
        var self = this;
        if (Game.saveExists(id)) {
            HTMLAudio.stopMusic();
            interpreter.clear();
            setTimeout(function t() {
                self.startGame(id);
            }, 100);
        }
    },

    click: function click(uiref, field, onStead) {
        var ref = uiref;
        var refID;

        if (uiref !== null && typeof ref === 'object') {
            var text = interpreter.call('instead_click(' + ref.x + ', ' + ref.y + ')');
            if (text !== null) {
                this.clickSound();
                this.refreshInterface(text);
            }
            return;
        }

        if (!onStead && (Game.isAct || field === 'Inv')) {
            refID = ref.match(/([\d]+)/)[0];
            if (ref.search('act') === 0 || ref.search('act') === 1) {
                this.clickSound();
                this.ifaceCmd('use ' + refID, true);
                this.autoSave();
                return;
            }
            if (Game.isAct) {
                if (field !== 'Ways' && field !== 'Title') {
                    this.clickSound();
                    if (refID === Game.actObj) {
                        this.ifaceCmd('use ' + refID, true);
                    } else {
                        this.ifaceCmd('use ' + Game.actObj + ',' + refID, true);
                    }
                    UI.setAct(false, '');
                    this.autoSave();
                }
            } else {
                UI.setAct(true, refID);
            }
        } else {
            if (Game.isAct) {
                UI.setAct(false, '');
            }
            if (ref) {
                this.clickSound();
                this.ifaceCmd(ref, true);
                this.autoSave();
            }
        }
    },

    kbd: function keyboardHandler(ev) {
        if (ev) {
            var kbdHandler = interpreter.call('iface:input("kbd", ' + ev.down + ', "' + ev.key + '")');
            if (kbdHandler && kbdHandler !== 'nil') {
                this.ifaceCmd(kbdHandler, true);
            }
            if (ev.text) {
                var textHandler = interpreter.call('iface:input("text", "' + ev.text + '")');
                if (textHandler && textHandler !== 'nil') {
                    this.ifaceCmd(textHandler, true);
                }
            }
        }
    },

    // do not use fade effect, if the game just started
    refreshInterface: function refreshInterface(text, isStart) {
        var isFading = interpreter.call('instead.get_fading()');
        if (isFading && Game.fading && !isStart) {
            UI.fadeOut(function fadeCallback() {
                Instead.updateUI(text);
                UI.fadeIn();
            });
        } else {
            this.updateUI(text);
        }
        // check if restart required
        var isRestart = interpreter.call('instead.get_restart()');
        if (isRestart) {
            this.resetGame();
        }
    },

    updateUI: function updateUI(text) {
        var inventory;
        var horizontalInventory;
        var musicPath;
        var soundPath;
        // sound
        soundPath = interpreter.call('instead.get_sound()');
        if (soundPath !== null) {
            soundPath.split(';').forEach(function parseSound(item) {
                var soundFile = (item.split('@'))[0];
                if (soundFile !== '') {
                    HTMLAudio.playSound(Game.fileURL(soundFile));
                }
            });
        }
        // music
        musicPath = interpreter.call('instead.get_music()');
        if (musicPath === null) {
            HTMLAudio.stopMusic();
        } else {
            HTMLAudio.playMusic(Game.fileURL(musicPath), 0, function cbOnEnd() {
                // call when music is finished
                interpreter.call('instead.finish_music()');
            });
        }
        // title
        UI.setTitle(interpreter.call('instead.get_title()'));
        // ways
        UI.setWays(interpreter.call('instead.get_ways()'));
        // inventory
        horizontalInventory = (Game.inventory_mode === 'horizontal');
        inventory = interpreter.call('instead.get_inv(' + horizontalInventory + ')');
        if (inventory === null) {
            UI.setInventory('');
        } else {
            UI.setInventory(inventory);
        }
        // picture
        UI.setPicture(interpreter.call('instead.get_picture()'));
        // text
        if (text) {
            UI.setText(text);
        }
        // refresh
        UI.refresh();
    },

    ifaceCmd: function ifaceCmd(ifacecmd, refreshUI, isStart) {
        var ifaceOutput = null;
        // remove part of command before slash
        var command = ifacecmd;
        if (command[0] !== '#') {
            command = ifacecmd.replace(/^([^\/]+\/)/, '');
        }
        var cmd = 'iface:cmd("' + command + '")';
        var text = interpreter.call(cmd);
        if (command !== 'user_timer') {
            Logger.log('> ' + command);
        }
        if (text !== null && command.indexOf('save') !== 0) {
            ifaceOutput = text;
        }
        if (refreshUI) {
            this.refreshInterface(ifaceOutput, isStart);
        }
    },

    timerCmd: function timerCmd() {
        var timerHandler = interpreter.call('stead.timer()');
        if (timerHandler && timerHandler !== 'nil') {
            Instead.ifaceCmd(timerHandler, true); // use direct reference, since context is lost
        }
    },

    soundMute: function soundMute(value) {
        Game.mute = value;
        HTMLAudio.mute(value);
    },

    autoSave: function autoSave(force) {
        if (Game.autosave_on_click || force) {
            interpreter.call('instead.autosave(' + Game.autosaveID + ')'); // enable autosave
            this.saveGame(Game.autosaveID); // autosave
        }
    },

    clickSound: function clickSound(isCache) {
        if (Game.clickSound) {
            HTMLAudio.playSound(Game.clickSound, null, isCache);
        }
    }
};

function kbdEvent(event) {
    if (!Game.id) {
        // do not handle keyboard events
        // if game is not loaded yet
        return;
    }
    Instead.kbd(Keyboard.handler(event));
}


var LuaTimer; // eslint-disable-line no-unused-vars

function setTimer(t) {
    window.clearInterval(LuaTimer); // clear previous timer
    var time = parseInt(t, 10);
    if (time > 0) {
        LuaTimer = window.setInterval(
            Instead.timerCmd,
            time
        );
    }
}

window.instead_settimer = setTimer;

window.onbeforeunload = function autoSaveOnClose() {
    if (Game.id) {
        Instead.autoSave(true); // force autosave
    }
};

document.onblur = function onBlur() {
    // reset Alt modifier
    Instead.kbd({ key: 'alt', down: 'false' });
};

module.exports = Instead;


/***/ }),

/***/ "Q2oC":
/*!*******************************************!*\
  !*** ./lib/instead-js/lib/jszip-utils.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var require;var require;/*!

JSZipUtils - A collection of cross-browser utilities to go along with JSZip.
<http://stuk.github.io/jszip-utils>

(c) 2014 Stuart Knightley, David Duponchel
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip-utils/master/LICENSE.markdown.

*/
!function(e){ true?module.exports=e():undefined}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return require(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var JSZipUtils = {};
// just use the responseText with xhr1, response with xhr2.
// The transformation doesn't throw away high-order byte (with responseText)
// because JSZip handles that case. If not used with JSZip, you may need to
// do it, see https://developer.mozilla.org/En/Using_XMLHttpRequest#Handling_binary_data
JSZipUtils._getBinaryFromXHR = function (xhr) {
    // for xhr.responseText, the 0xFF mask is applied by JSZip
    return xhr.response || xhr.responseText;
};

// taken from jQuery
function createStandardXHR() {
    try {
        return new window.XMLHttpRequest();
    } catch( e ) {}
}

function createActiveXHR() {
    try {
        return new window.ActiveXObject("Microsoft.XMLHTTP");
    } catch( e ) {}
}

// Create the request object
var createXHR = window.ActiveXObject ?
    /* Microsoft failed to properly
     * implement the XMLHttpRequest in IE7 (can't request local files),
     * so we use the ActiveXObject when it is available
     * Additionally XMLHttpRequest can be disabled in IE7/IE8 so
     * we need a fallback.
     */
    function() {
    return createStandardXHR() || createActiveXHR();
} :
    // For all other browsers, use the standard XMLHttpRequest object
    createStandardXHR;



JSZipUtils.getBinaryContent = function(path, callback) {
    /*
     * Here is the tricky part : getting the data.
     * In firefox/chrome/opera/... setting the mimeType to 'text/plain; charset=x-user-defined'
     * is enough, the result is in the standard xhr.responseText.
     * cf https://developer.mozilla.org/En/XMLHttpRequest/Using_XMLHttpRequest#Receiving_binary_data_in_older_browsers
     * In IE <= 9, we must use (the IE only) attribute responseBody
     * (for binary data, its content is different from responseText).
     * In IE 10, the 'charset=x-user-defined' trick doesn't work, only the
     * responseType will work :
     * http://msdn.microsoft.com/en-us/library/ie/hh673569%28v=vs.85%29.aspx#Binary_Object_upload_and_download
     *
     * I'd like to use jQuery to avoid this XHR madness, but it doesn't support
     * the responseType attribute : http://bugs.jquery.com/ticket/11461
     */
    try {

        var xhr = createXHR();

        xhr.open('GET', path, true);

        // recent browsers
        if ("responseType" in xhr) {
            xhr.responseType = "arraybuffer";
        }

        // older browser
        if(xhr.overrideMimeType) {
            xhr.overrideMimeType("text/plain; charset=x-user-defined");
        }

        xhr.onreadystatechange = function(evt) {
            var file, err;
            // use `xhr` and not `this`... thanks IE
            if (xhr.readyState === 4) {
                if (xhr.status === 200 || xhr.status === 0) {
                    file = null;
                    err = null;
                    try {
                        file = JSZipUtils._getBinaryFromXHR(xhr);
                    } catch(e) {
                        err = new Error(e);
                    }
                    callback(err, file);
                } else {
                    callback(new Error("Ajax error for " + path + " : " + this.status + " " + this.statusText), null);
                }
            }
        };

        xhr.send();

    } catch (e) {
        callback(new Error(e), null);
    }
};

// export
module.exports = JSZipUtils;

// enforcing Stuk's coding style
// vim: set shiftwidth=4 softtabstop=4:

},{}]},{},[1])
(1)
});
;

/***/ }),

/***/ "Vvag":
/*!*****************************************!*\
  !*** ./lib/instead-js/app/ziploader.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* global Uint8Array, TextDecoder */
var $ = __webpack_require__(/*! jquery */ "EVdn");

var JSZip = __webpack_require__(/*! jszip */ "xOOu");
var JSZipUtils = __webpack_require__(/*! ../lib/jszip-utils */ "Q2oC");

var Game = __webpack_require__(/*! ./game */ "rvG2");
var Instead = __webpack_require__(/*! ./instead */ "OLl3");
var UI = __webpack_require__(/*! ./ui */ "klLQ");
var i18n = __webpack_require__(/*! ./i18n */ "zSbL");

var decoder = new TextDecoder('utf-8');

var gamepath = './games/';

function matchRe(regexp, string) {
    var isMatching = string.match(regexp);
    if (isMatching) {
        return isMatching[1].trim();
    }
    return '';
}

var ZipLoader = {
    init: function init() {
        this.el = $('#manager');

        $('#ziploader').html(
            '<input type="file" id="zip-game" style="font-size: 0.8em"/>' +
            '<label for="zip-game">&#128194; ' + i18n.t('zip') + '</label>'
        );

        this.el.on('change', '#zip-game',  function fileCtrl() {
            var reader = new FileReader();
            reader.onload = importGame;
            reader.readAsArrayBuffer(this.files[0]);
        });

        var gameHash = window.location.hash;
        if (gameHash.match(/#zip:/)) {
            var gameUrl = window.location.hash.replace('#zip:', '');
            JSZipUtils.getBinaryContent(gameUrl, function zipHandler(err, data) {
                if (err) {
                    $('#manager-gamelist').html('<div id="loading">' + JSON.stringify(err) + '</div>');
                    return;
                }
                importGame({target: {result: data}});
            });
        }
    },
    startGame: function startGame(gameid, gameinfo) {
        Instead.initGame(gameinfo);
        this.hide();
        $('#stead-toolbar-info').html('<b>' + Game.name + '</b>');
        Instead.startGame(Game.autosaveID);
    },
    hide: function hide() {
        this.el.hide();
        UI.show();
        $('#stead-toolbar').show();
    }
};

function importGame(e) {
    var fileBuffer = [];
    var gameinfo = {};

    var filehandler = function zipFileHandler(zipEntry) {
        return zipEntry.async('arraybuffer')
        .then(function success(zcontent) {
            var pathParts = zipEntry.name.split('/');
            var filename = pathParts[pathParts.length - 1];
            var gameid = pathParts[0];
            gameinfo.id = gameid + '.zip';
            gameinfo.path = gamepath + gameid + '/';
            if (filename === 'theme.ini') {
                gameinfo.ownTheme = true;
            }
            if (filename === 'main.lua') {
                gameinfo.stead = 2;
            }
            if (filename === 'main3.lua') {
                gameinfo.stead = 3;
            }
            if ((filename === 'main.lua' || filename === 'main3.lua') && pathParts.length <= 2) {
                var gf = decoder.decode(new Uint8Array(zcontent));
                gameinfo.name = matchRe(/\$Name\(ru\)\s*:\s*([^\$\n]+)/, gf);
                if (gameinfo.name === '') {
                    gameinfo.name = matchRe(/\$Name\s*:\s*([^\$\n]+)/, gf);
                    if (gameinfo.name === '') {
                        gameinfo.name = gameid;
                    }
                }
                gameinfo.details = {};
                gameinfo.details.author = matchRe(/\$Author\s*:\s*([^\$\n]+)/, gf);
                gameinfo.details.version = matchRe(/\$Version\s*:\s*([^\$\n]+)/, gf);
                gameinfo.details.info = matchRe(/\$Info\s*:\s*([^\$\n]+)/, gf);
            }

            var fullpath = gamepath + zipEntry.name;
            var fileContent = new Blob([zcontent]);
            var dataUrl = URL.createObjectURL(fileContent);
            Game.addFile(fullpath, dataUrl);
        });
    };

    $('#manager-gamelist').html('<div id="loading">' + i18n.t('loading') + '</div>');

    JSZip.loadAsync(e.target.result).then(function handleZip(zip) {
        zip.forEach(function handleZipEntry(relativePath, entry) {
            fileBuffer.push(filehandler(entry));
        });
        $.when.apply($, fileBuffer).then(function startgame() {
            if (gameinfo.name) {
                ZipLoader.startGame('provodnik', gameinfo);
            } else {
                $('#manager-gamelist').html('<div id="loading">' + i18n.t('zip_incorrect') + '</div>');
                Game.reset();
            }
        });
    });
}

module.exports = ZipLoader;


/***/ }),

/***/ "YAwB":
/*!*************************************!*\
  !*** ./lib/instead-js/app/app.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div id=\"stead-container\">\n    <div id=\"instead--menu\">\n        <div id=\"instead--menu-content\">\n            <div id=\"instead--game-details\"></div>\n            <a href=\"\" id=\"instead--menu-back\" data-action=\"back\"></a>\n            <a href=\"\" id=\"instead--menu-save\" data-action=\"menu-save\"></a>\n            <a href=\"\" id=\"instead--menu-load\" data-action=\"menu-load\"></a>\n            <a href=\"\" id=\"instead--menu-reset\" data-action=\"reset\"></a>\n            <a href=\"\" id=\"instead--menu-mute\" data-action=\"mute\"></a>\n            <a href=\"\" id=\"instead--menu-export\" data-action=\"menu-export\"></a>\n            <a href=\"\" id=\"instead--menu-export-log\" data-action=\"export-log\"></a>\n        </div>\n        <div id=\"instead--menu-saveload\">\n        </div>\n    </div>\n    <div id=\"stead-toolbar\">\n        <div id=\"stead-toolbar-info\"></div>\n        <div id=\"stead-toolbar-buttons\">\n            <button id=\"toolbar-mute\"></button>\n            <button id=\"toolbar-log\">&#128196;</button>\n            <button id=\"toolbar-menu\">&#9776;</button>\n        </div>\n    </div>\n    <div id=\"stead\">\n        <div id=\"win\">\n            <div id=\"title\"></div>\n            <div id=\"picture\"></div>\n            <div id=\"ways-top\"></div>\n            <div id=\"instead--text\"></div>\n            <div id=\"ways-bottom\"></div>\n        </div>\n        <div id=\"inventory\"></div>\n        <div id=\"menu_button\"><img id=\"menu_image\"></img></div>\n    </div>\n    <div id=\"instead--log\"></div>\n</div>\n";
// Exports
module.exports = code;

/***/ }),

/***/ "bIoZ":
/*!***************************************!*\
  !*** ./lib/instead-js/app/storage.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var mfs = window.localStorage;

var Storage = {
    get: function getSaves(key) {
        var n = mfs.length;
        var saves = [];
        var k;
        var item;
        for (var i = 0; i < n; i++) {
            k = mfs.key(i);
            try {
                item = JSON.parse(mfs.getItem(k));
            } catch (e) {
                item = {timestamp: null};
            }
            item.id = k;
            if (key) {
                if (k.indexOf(key + '-save-') === 0) {
                    saves.push(item);
                }
            } else {
                saves.push(item);
            }
        }
        return saves;
    },
    save: function save(name, value) {
        mfs.setItem(name, JSON.stringify({
            timestamp: Date.now(),
            data: value
        }));
    },
    load: function load(name) {
        var content = JSON.parse(mfs.getItem(name));
        if (content) {
            return content.data;
        }
        return '';
    },
    exists: function exists(name) {
        if (!name) {
            return false;
        }
        return !!mfs.getItem(name);
    },
    clear: function clear() {
        mfs.clear();
    }
};

module.exports = Storage;


/***/ }),

/***/ "fXMT":
/*!**********************************************!*\
  !*** ./lib/instead-js/app/ui/parse_image.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Game = __webpack_require__(/*! ../game */ "rvG2");
var Sprite = __webpack_require__(/*! ./sprite */ "3TiI");

function parseCompositeImage(image, style) {
    var parsedImg = image.split(';');
    var images = parseCompositePart(parsedImg[0], true);
    for (var i = 1; i < parsedImg.length; i++) {
        images += parseCompositePart(parsedImg[i]);
    }

    return '<div class="compositeImage" style="' + style + '">' + images + '</div>';
}

function parseCompositePart(image, isMain) {
    if (!image) {
        return '';
    }
    var pImg = image;
    var imageParts = [];
    var pStyle = isMain ? '' : 'position:absolute;';
    var pMargins;
    if (image.indexOf('@') !== -1 ) {
        imageParts = image.split('@');
        pImg = imageParts[0];
        pMargins = imageParts[1].match(/(\d+),(\d+)/);
        pStyle += 'left:' + pMargins[1] + 'px;top:' + pMargins[2] + 'px;';
    } else {
        pStyle += 'left: 0; top: 0;';
    }
    // Parse pseudo-images (box, blank)
    if (pImg.indexOf('box') === 0 || pImg.indexOf('blank') === 0) {
        return pImg.replace(/(box|blank):(.+)/, function imgReplacer() {
            var args = Array.prototype.slice.call(arguments);
            args.unshift(pStyle);
            return parseEmptyImage.apply(null, args);
        });
    }
    return '<img style="' + pStyle + '" src="' + Game.fileURL(pImg) + '"/>';
}

function parseEmptyImage(style, fullReplaceString, box, params) {
    var d = params.split(',');
    var imgSize = d[0].match(/(\d+)x(\d+)/);
    var eStyle = style + 'width:' + imgSize[1] + 'px;' +
        'height:' + imgSize[2] + 'px;';
    if (d[1]) {
        eStyle += 'background-color:' + d[1] + ';';
    }
    if (d[2]) {
        eStyle += 'opacity:' + (d[2] / 256) + ';';
    }
    eStyle += 'display:inline-block;';
    return '<div style="' + eStyle + '"></div>';
}


function parseImg(fullString, img, style) {
    var image = img;
    var parsedImg = '';
    var imgStyle = style && !Number.isInteger(style) ? style : 'max-width: 100%;';

    if (Sprite.is(img)) {
        return Sprite.asImage(img);
    }

    // parse padded images
    if (image.indexOf('pad') === 0) {
        parsedImg = image.match(/pad:(.+?),(.+)/);
        imgStyle += 'margin:' + parsedImg[1].replace(/(\d+)/g, '$1px') + ';';
        image = parsedImg[2];
    }

    // parse aligned images
    if (image.indexOf('\|') !== -1) {
        parsedImg = image.match(/(.+)\\\|(.+)/);
        image = parsedImg[1];
        imgStyle += 'float:' + parsedImg[2] + ';';
    }

    // composite image
    if (image.indexOf(';') !== -1) {
        return parseCompositeImage(image, imgStyle);
    }

    // Parse pseudo-images (box, blank)
    if (image.indexOf('box') === 0 || image.indexOf('blank') === 0) {
        return image.replace(/(box|blank):(.+)/, function imgReplacer() {
            var args = Array.prototype.slice.call(arguments);
            args.unshift(imgStyle);
            return parseEmptyImage.apply(null, args);
        });
    }

    return '<img ' + (imgStyle ? 'style="' + imgStyle + '" ' : '') + 'src="' + Game.fileURL(image) + '">';
}

module.exports = parseImg;


/***/ }),

/***/ "klLQ":
/*!**********************************!*\
  !*** ./lib/instead-js/app/ui.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! jquery */ "EVdn");

var appHTML = __webpack_require__(/*! ./app.html */ "YAwB");
__webpack_require__(/*! ./app.css */ "7LXh");


var Game = __webpack_require__(/*! ./game */ "rvG2");
var Theme = __webpack_require__(/*! ./theme */ "0To5");
var Logger = __webpack_require__(/*! ./log */ "318K");

var parseImg = __webpack_require__(/*! ./ui/parse_image */ "fXMT");
var Sprite = __webpack_require__(/*! ./ui/sprite */ "3TiI");

function normalizeContent(input, field) {
    var output = input;
    if (!output) {
        // do not process empty outputs
        return '';
    }
    var delim = '#';
    if (Game.stead !== 2) {
        delim = '';
    }
    output = output.replace(
        /<x:([^>]+)>([^<$]+)/g,
        function parseTxttab(fullString, param, text) {
            var s = param.split(',');
            var margin = s[0] + 'px';
            if (margin.search('%') !== -1) {
                margin = s[0];
            }
            var align = s[1] || 'left';
            return '<div style="padding-left:' + margin + '; text-align: ' + align + '">' + text + '</div>';
        }
    ).replace(
        /<a:#>/g,
        '<a name="instead--scroll-anchor"> </a>'
    ).replace(
        /<a(:)([^>]+)>(<i>|)((&#160;)+)/g,
        '$4<a href="" data-ref="' + delim + '$2" data-type="' + field + '">$3'
    ).replace(
        /<a(:)([^>]+)/g,
        '<a href="" data-ref="' + delim + '$2", data-type="' + field + '"'
    ).replace(
        /<w:([^>]+)>/g,
        '<span class="nowrap">$1</span>'
    ).replace(
        /<y:([^>]+)>/g,
        function parseTxty(fullString, tab) {
            var margin = tab + 'px';
            if (tab.search('%') !== -1) {
                margin = tab;
            }
            return '<div style="margin-top: ' + margin + '" />';
        }
    ).replace(
        /<g:([^>]+)>/g,
        parseImg
    );

    return output;
}

function setContent(element, content, field) {
    element.html('<pre>' + normalizeContent(content, field) + '</pre>');
}

var currentUI = {
    title: null,
    ways: null,
    text: null,
    inventory: null,
    picture: null,
    winContent: null,
    updatedTextContent: true
};

function isUnchangedUI(type, content) {
    if (type === 'text') {
        if (content.indexOf(currentUI[type]) !== -1) {
            currentUI.updatedTextContent = true;
        } else {
            currentUI.updatedTextContent = false;
        }
    }
    if (currentUI[type] === content) {
        return true;
    }
    currentUI[type] = content;
    return false;
}

function isUnchangedWin() {
    var winContent = currentUI.title + currentUI.ways + currentUI.text + currentUI.picture;
    if (currentUI.winContent === winContent) {
        return true;
    }
    currentUI.winContent = winContent;
    return false;
}

var UI = {
    init: function init(rootElement, steadHandler) {
        var self = this;
        $(rootElement).html(appHTML);
        // initialize JQuery selectors
        this.element = {
            $container: $('#stead-container'),
            $title: $('#title'),
            $ways: $('#ways-top'),
            $text: $('#instead--text'),
            $picture: $('#picture'),
            $win: $('#win'),
            $stead: $('#stead'),
            $inventory: $('#inventory'),
            $menuButton: $('#menu_button'),
            $menuImage: $('#menu_image'),
            $menu: $('#instead--menu'),
            $menu_saveload: $('#instead--menu-saveload'),
            $menu_content: $('#instead--menu-content'),
            $toolbar_mute: $('#toolbar-mute'),
            $toolbar_log: $('#toolbar-log'),
            $toolbar_menu: $('#toolbar-menu'),
            $menu_mute: $('#instead--menu-mute'),
            $gameDetails: $('#instead--game-details')
        };

        this.element.$stead.on('click', 'a', function handler(e) {
            var obj = $(this);
            self.clickHandlerLink(steadHandler.click, e, obj);
        });
        this.element.$picture.on('click', function handler(e) {
            var obj = $(this);
            self.clickHandler(steadHandler.click, e, obj);
        });
        this.element.$stead.on('click', function handler(e) {
            self.clickHandler(steadHandler.click, e);
        });

        this.element.$win.perfectScrollbar({ wheelSpeed: 1 });
        this.element.$inventory.perfectScrollbar({ wheelSpeed: 1 });
    },

    show: function show() {
        this.element.$stead.show();
    },

    hide: function hide() {
        this.element.$stead.hide();
    },

    loadTheme: function loadTheme() {
        Theme.load(this.element, Game.themePath);
        if (Game.ways_mode === 'bottom') {
            this.element.$ways = $('#ways-bottom');
        }
    },

    setAct: function setAct(act, obj) {
        Game.isAct = act;
        Game.actObj = obj;
        Theme.setCursor(Game.isAct);
    },

    setTitle: function setTitle(content) {
        if (isUnchangedUI('title', content)) {
            return;
        }
        Logger.log(':title: ' + content);
        var title = (!content || content === true) ? '' : content;
        setContent(
            this.element.$title,
            '<a href="" data-ref="#look" data-type="Title">' + title + '</a>',
            'Title'
        );
    },

    setWays: function setWays(content) {
        if (isUnchangedUI('ways', content)) {
            return;
        }
        Logger.log(':ways: ' + content);
        setContent(this.element.$ways, content, 'Ways');
    },

    setText: function setText(content) {
        if (isUnchangedUI('text', content)) {
            return;
        }
        Logger.log(':text: ' + content);
        setContent(this.element.$text, content, 'Text');
    },

    setInventory: function setInventory(content) {
        if (isUnchangedUI('inventory', content)) {
            return;
        }
        Logger.log(':inv: ' + content);
        setContent(this.element.$inventory, content, 'Inv');
        this.element.$inventory.perfectScrollbar('update');
    },

    setPicture: function setPicture(content) {
        if (isUnchangedUI('picture', content)) {
            return;
        }
        Logger.log(':picture: ' + content);
        if (content === null) {
            this.element.$picture.html('');
        } else if (Sprite.is(content)) {
            this.element.$picture.html('');
            Sprite.initCanvas(this.element.$picture, content);
        } else {
            this.element.$picture.html(parseImg(null, content));
        }
    },

    refresh: function refresh() {
        if (isUnchangedWin()) {
            return;
        }
        var scrollTarget = 0;
        if (Game.scroll_mode === 'bottom' ||
            (Game.scroll_mode === 'change' && currentUI.updatedTextContent)
        ) {
            scrollTarget = function h() { return this.scrollHeight; };
        }

        this.element.$win.scrollTop(scrollTarget);
        this.element.$win.perfectScrollbar('update');
    },

    fadeOut: function fadeOut(callback) {
        this.element.$stead.fadeOut('fast', callback);
    },

    fadeIn: function fadeIn() {
        this.element.$stead.fadeIn('fast');
    },

    clickHandlerLink: function clickHandlerLink(clickCallback, e, obj) {
        e.preventDefault();
        e.stopPropagation();
        var ref = obj.attr('data-ref');
        var type = obj.attr('data-type');
        Logger.log('[click] ' + obj.attr('data-ref') + ':' + obj.attr('data-type') + ' "' + obj.text() + '"');
        clickCallback(ref, type);
    },

    clickHandler: function clickHandler(clickCallback, e, obj) {
        e.preventDefault();
        if (Game.isAct) {
            Logger.log('[click] reset onAct');
            clickCallback(null, null, true);
        }
        if (obj) {
            clickCallback({ x: e.offsetX, y: e.offsetY }); // clicked on picture
        }
    }
};

module.exports = UI;


/***/ }),

/***/ "mUPN":
/*!***************************************!*\
  !*** ./lib/instead-js/app/manager.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! jquery */ "EVdn");

var i18n = __webpack_require__(/*! ./i18n */ "zSbL");
var Game = __webpack_require__(/*! ./game */ "rvG2");
var Instead = __webpack_require__(/*! ./instead */ "OLl3");
var UI = __webpack_require__(/*! ./ui */ "klLQ");
var Preloader = __webpack_require__(/*! ./ui/preloader */ "C5zL");

var gamepath = './games/';
var gameList = gamepath + 'games_list.json';
var allGames;

var Manager = {
    init: function init() {
        this.container = $('#manager');
        this.el = $('#manager-gamelist');
        this.el.perfectScrollbar({wheelSpeed: 1});
        this.el.append('<div id="loading">' + i18n.t('loading') + '</div>');

        var self = this;
        this.el.on('click', 'a', function selectGame(e) {
            e.preventDefault();
            var gameid = $(this).attr('data-ref');
            self.startGame(gameid);
        });

        var gameListURL = gameList + '?' + Math.random().toString(36).substring(7); // avoid cached response
        $.get(gameListURL, function listGames(data) {
            allGames = typeof data === 'object' ? data : JSON.parse(data);
            var chosenGame = null;
            var gameIds = Object.keys(allGames);
            if (gameIds.length === 1) {
                // If there is only one game, start it immediately
                chosenGame = gameIds[0];
            } else {
                var gameUrl = window.location.hash.replace('#/', '');
                var gid = gameIds.indexOf(gameUrl);
                if (gid !== -1) {
                    chosenGame = gameIds[gid];
                }
            }

            if (chosenGame) {
                self.startGame(chosenGame);
            } else {
                $('#loading').remove();
                gameIds
                    .sort(function gameListSorter(a, b) {
                        if (allGames[a].name > allGames[b].name) {
                            return 1;
                        }
                        if (allGames[a].name < allGames[b].name) {
                            return -1;
                        }
                        return 0;
                    })
                    .forEach(function listGame(id) {
                        self.el.append('<a href="#/' + id + '" data-ref="' + id + '">' + allGames[id].name + '</a>');
                    });
            }
        });
    },
    startGame: function startGame(gameid) {
        window.location.hash = '#/' + gameid;
        Instead.initGame({
            id: gameid,
            path: allGames[gameid].path || gamepath + gameid + '/',
            name: allGames[gameid].name,
            details: allGames[gameid].details,
            ownTheme: allGames[gameid].theme,
            stead: allGames[gameid].stead
        });
        if (Game.preload) {
            this.preload(gameid);
        } else {
            $('#stead-toolbar-info').html('<b>' + Game.name + '</b>');
        }
        this.hide();
        Instead.startGame(Game.autosaveID);
    },
    /* TODO: return to game selection menu
    show: function show() {
        this.el.show();
        UI.hide();
    },
    */
    preload: function preload(gameid) {
        Preloader.load(
            allGames[gameid].preload,
            function preloadProgress(percent) {
                $('#stead-toolbar-info').html(i18n.t('preload') + ': ' + percent + '%');
            },
            function preloadSuccess() {
                $('#stead-toolbar-info').html('<b>' + Game.name + '</b>');
            }
        );
    },
    hide: function hide() {
        this.container.hide();
        UI.show();
        $('#stead-toolbar').show();
    }
};

module.exports = Manager;


/***/ }),

/***/ "o39M":
/*!*******************************************!*\
  !*** ./lib/instead-js/app/ui/keyboard.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var keycodes = {
    8: 'backspace',
    9: 'tab',
    13: 'return',
    16: 'shift',
    17: 'ctrl',
    18: 'alt',
    27: 'escape',
    32: 'space',
    33: 'page up',
    34: 'page down',
    35: 'end',
    36: 'home',
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down',
    45: 'insert',
    46: 'delete',
    48: '0',
    49: '1',
    50: '2',
    51: '3',
    52: '4',
    53: '5',
    54: '6',
    55: '7',
    56: '8',
    57: '9',
    59: ';',
    61: '=',
    65: 'a',
    66: 'b',
    67: 'c',
    68: 'd',
    69: 'e',
    70: 'f',
    71: 'g',
    72: 'h',
    73: 'i',
    74: 'j',
    75: 'k',
    76: 'l',
    77: 'm',
    78: 'n',
    79: 'o',
    80: 'p',
    81: 'q',
    82: 'r',
    83: 's',
    84: 't',
    85: 'u',
    86: 'v',
    87: 'w',
    88: 'x',
    89: 'y',
    90: 'z',
    96: '[0]',
    97: '[1]',
    98: '[2]',
    99: '[3]',
    100: '[4]',
    101: '[5]',
    102: '[6]',
    103: '[7]',
    104: '[8]',
    105: '[9]',
    106: '[*]',
    107: '[+]',
    109: '[-]',
    110: '[.]',
    111: '[/]',
    112: 'f1',
    113: 'f2',
    114: 'f3',
    115: 'f4',
    116: 'f5',
    117: 'f6',
    118: 'f7',
    119: 'f8',
    120: 'f9',
    121: 'f10',
    122: 'f11',
    123: 'f12',
    144: 'numlock',
    145: 'scroll lock',
    173: '-',
    186: ';',
    187: '=',
    188: ',',
    189: '-',
    190: '.',
    191: '/',
    192: '`',
    219: '[',
    220: '\\\\', // backslash
    221: ']',
    222: "'"
};

var Keyboard = {
    handler: function keyboardHandler(e) {
        e.preventDefault();
        return {
            key: keycodes[e.keyCode],
            down: e.type === 'keydown' ? 'true' : 'false',
            text: e.type === 'keydown' && e.keyCode >= 48 && !(e.keyCode >= 112 && e.keyCode <= 145) ? e.key : null
        };
    }
};

module.exports = Keyboard;


/***/ }),

/***/ "pTW1":
/*!***********************************!*\
  !*** ./lib/instead-js/app/vfs.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// virtual file system
var stead = __webpack_require__(/*! instead/stead.js */ "u2Rq");
var ajaxGetSync = __webpack_require__(/*! ../ajax */ "587s");

var vfsData = {};

var vfs = {
    readfile: function readfile(path) {
        if (stead.hasOwnProperty(path)) {
            return stead[path];
        }
        if (vfsData.hasOwnProperty(path)) {
            return vfsData[path];
        }
        if (path.indexOf('blob') === 0) {
            // normal query when load from ZIP file
            return ajaxGetSync(path);
        }
        var avoidCache = Math.random().toString(36).substring(7);
        return ajaxGetSync(path + '?' + avoidCache);  // avoid cached response
    },
    save: function save(path, content) {
        vfsData[path] = content;
    },
    isStead: function isStead(path) {
        // module is a part of INSTEAD core engine
        return stead.hasOwnProperty(path);
    },
    updateStead: function updateStead(steadJson) {
        Object.keys(steadJson).forEach(function upd(filename) {
            stead[filename] = steadJson[filename];
        });
    },
    dump: function dump() {
        return JSON.stringify(vfsData);
    },
    exportFile: function exportFile(filename, content) {
        var data = new Blob([content], { type: 'octet/stream' });
        var dataUrl = window.URL.createObjectURL(data);
        var ref = document.createElement('a');
        document.body.appendChild(ref);
        ref.style = 'display: none';
        ref.href = dataUrl;
        ref.download = filename;
        ref.click();
        window.URL.revokeObjectURL(dataUrl);
        ref.remove();
    }
};

module.exports = vfs;


/***/ }),

/***/ "pWi6":
/*!******************************!*\
  !*** ./lib/weblua/lua.vm.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

var Module = typeof Module !== "undefined" ? Module : {};

var moduleOverrides = {};

var key;

for (key in Module) {
 if (Module.hasOwnProperty(key)) {
  moduleOverrides[key] = Module[key];
 }
}

Module["arguments"] = [];

Module["thisProgram"] = "./this.program";

Module["quit"] = function(status, toThrow) {
 throw toThrow;
};

Module["preRun"] = [];

Module["postRun"] = [];

var ENVIRONMENT_IS_WEB = true;

var ENVIRONMENT_IS_WORKER = false;

var ENVIRONMENT_IS_NODE = false;

var ENVIRONMENT_IS_SHELL = false;

var scriptDirectory = "";

function locateFile(path) {
 if (Module["locateFile"]) {
  return Module["locateFile"](path, scriptDirectory);
 } else {
  return scriptDirectory + path;
 }
}

if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
 if (ENVIRONMENT_IS_WORKER) {
  scriptDirectory = self.location.href;
 } else if (document.currentScript) {
  scriptDirectory = document.currentScript.src;
 }
 if (scriptDirectory.indexOf("blob:") !== 0) {
  scriptDirectory = scriptDirectory.substr(0, scriptDirectory.lastIndexOf("/") + 1);
 } else {
  scriptDirectory = "";
 }
 Module["read"] = function shell_read(url) {
  try {
   var xhr = new XMLHttpRequest();
   xhr.open("GET", url, false);
   xhr.send(null);
   return xhr.responseText;
  } catch (err) {
   var data = tryParseAsDataURI(url);
   if (data) {
    return intArrayToString(data);
   }
   throw err;
  }
 };
 if (ENVIRONMENT_IS_WORKER) {
  Module["readBinary"] = function readBinary(url) {
   try {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, false);
    xhr.responseType = "arraybuffer";
    xhr.send(null);
    return new Uint8Array(xhr.response);
   } catch (err) {
    var data = tryParseAsDataURI(url);
    if (data) {
     return data;
    }
    throw err;
   }
  };
 }
 Module["readAsync"] = function readAsync(url, onload, onerror) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.responseType = "arraybuffer";
  xhr.onload = function xhr_onload() {
   if (xhr.status == 200 || xhr.status == 0 && xhr.response) {
    onload(xhr.response);
    return;
   }
   var data = tryParseAsDataURI(url);
   if (data) {
    onload(data.buffer);
    return;
   }
   onerror();
  };
  xhr.onerror = onerror;
  xhr.send(null);
 };
 Module["setWindowTitle"] = function(title) {
  document.title = title;
 };
} else {}

var out = Module["print"] || (typeof console !== "undefined" ? console.log.bind(console) : typeof print !== "undefined" ? print : null);

var err = Module["printErr"] || (typeof printErr !== "undefined" ? printErr : typeof console !== "undefined" && console.warn.bind(console) || out);

for (key in moduleOverrides) {
 if (moduleOverrides.hasOwnProperty(key)) {
  Module[key] = moduleOverrides[key];
 }
}

moduleOverrides = undefined;

var STACK_ALIGN = 16;

function dynamicAlloc(size) {
 var ret = HEAP32[DYNAMICTOP_PTR >> 2];
 var end = ret + size + 15 & -16;
 if (end <= _emscripten_get_heap_size()) {
  HEAP32[DYNAMICTOP_PTR >> 2] = end;
 } else {
  var success = _emscripten_resize_heap(end);
  if (!success) return 0;
 }
 return ret;
}

function getNativeTypeSize(type) {
 switch (type) {
 case "i1":
 case "i8":
  return 1;

 case "i16":
  return 2;

 case "i32":
  return 4;

 case "i64":
  return 8;

 case "float":
  return 4;

 case "double":
  return 8;

 default:
  {
   if (type[type.length - 1] === "*") {
    return 4;
   } else if (type[0] === "i") {
    var bits = parseInt(type.substr(1));
    assert(bits % 8 === 0, "getNativeTypeSize invalid bits " + bits + ", type " + type);
    return bits / 8;
   } else {
    return 0;
   }
  }
 }
}

function warnOnce(text) {
 if (!warnOnce.shown) warnOnce.shown = {};
 if (!warnOnce.shown[text]) {
  warnOnce.shown[text] = 1;
  err(text);
 }
}

var jsCallStartIndex = 1;

var functionPointers = new Array(128);

function addFunction(func, sig) {
 var base = 0;
 for (var i = base; i < base + 128; i++) {
  if (!functionPointers[i]) {
   functionPointers[i] = func;
   return jsCallStartIndex + i;
  }
 }
 throw "Finished up all reserved function pointers. Use a higher value for RESERVED_FUNCTION_POINTERS.";
}

var funcWrappers = {};

function dynCall(sig, ptr, args) {
 if (args && args.length) {
  return Module["dynCall_" + sig].apply(null, [ ptr ].concat(args));
 } else {
  return Module["dynCall_" + sig].call(null, ptr);
 }
}

var tempRet0 = 0;

var setTempRet0 = function(value) {
 tempRet0 = value;
};

var getTempRet0 = function() {
 return tempRet0;
};

var GLOBAL_BASE = 8;

var ABORT = false;

var EXITSTATUS = 0;

function assert(condition, text) {
 if (!condition) {
  abort("Assertion failed: " + text);
 }
}

function getCFunc(ident) {
 var func = Module["_" + ident];
 assert(func, "Cannot call unknown function " + ident + ", make sure it is exported");
 return func;
}

function ccall(ident, returnType, argTypes, args, opts) {
 var toC = {
  "string": function(str) {
   var ret = 0;
   if (str !== null && str !== undefined && str !== 0) {
    var len = (str.length << 2) + 1;
    ret = stackAlloc(len);
    stringToUTF8(str, ret, len);
   }
   return ret;
  },
  "array": function(arr) {
   var ret = stackAlloc(arr.length);
   writeArrayToMemory(arr, ret);
   return ret;
  }
 };
 function convertReturnValue(ret) {
  if (returnType === "string") return UTF8ToString(ret);
  if (returnType === "boolean") return Boolean(ret);
  return ret;
 }
 var func = getCFunc(ident);
 var cArgs = [];
 var stack = 0;
 if (args) {
  for (var i = 0; i < args.length; i++) {
   var converter = toC[argTypes[i]];
   if (converter) {
    if (stack === 0) stack = stackSave();
    cArgs[i] = converter(args[i]);
   } else {
    cArgs[i] = args[i];
   }
  }
 }
 var ret = func.apply(null, cArgs);
 ret = convertReturnValue(ret);
 if (stack !== 0) stackRestore(stack);
 return ret;
}

function setValue(ptr, value, type, noSafe) {
 type = type || "i8";
 if (type.charAt(type.length - 1) === "*") type = "i32";
 switch (type) {
 case "i1":
  HEAP8[ptr >> 0] = value;
  break;

 case "i8":
  HEAP8[ptr >> 0] = value;
  break;

 case "i16":
  HEAP16[ptr >> 1] = value;
  break;

 case "i32":
  HEAP32[ptr >> 2] = value;
  break;

 case "i64":
  tempI64 = [ value >>> 0, (tempDouble = value, +Math_abs(tempDouble) >= +1 ? tempDouble > +0 ? (Math_min(+Math_floor(tempDouble / +4294967296), +4294967295) | 0) >>> 0 : ~~+Math_ceil((tempDouble - +(~~tempDouble >>> 0)) / +4294967296) >>> 0 : 0) ], 
  HEAP32[ptr >> 2] = tempI64[0], HEAP32[ptr + 4 >> 2] = tempI64[1];
  break;

 case "float":
  HEAPF32[ptr >> 2] = value;
  break;

 case "double":
  HEAPF64[ptr >> 3] = value;
  break;

 default:
  abort("invalid type for setValue: " + type);
 }
}

var ALLOC_NORMAL = 0;

var ALLOC_NONE = 3;

function allocate(slab, types, allocator, ptr) {
 var zeroinit, size;
 if (typeof slab === "number") {
  zeroinit = true;
  size = slab;
 } else {
  zeroinit = false;
  size = slab.length;
 }
 var singleType = typeof types === "string" ? types : null;
 var ret;
 if (allocator == ALLOC_NONE) {
  ret = ptr;
 } else {
  ret = [ _malloc, stackAlloc, dynamicAlloc ][allocator](Math.max(size, singleType ? 1 : types.length));
 }
 if (zeroinit) {
  var stop;
  ptr = ret;
  assert((ret & 3) == 0);
  stop = ret + (size & ~3);
  for (;ptr < stop; ptr += 4) {
   HEAP32[ptr >> 2] = 0;
  }
  stop = ret + size;
  while (ptr < stop) {
   HEAP8[ptr++ >> 0] = 0;
  }
  return ret;
 }
 if (singleType === "i8") {
  if (slab.subarray || slab.slice) {
   HEAPU8.set(slab, ret);
  } else {
   HEAPU8.set(new Uint8Array(slab), ret);
  }
  return ret;
 }
 var i = 0, type, typeSize, previousType;
 while (i < size) {
  var curr = slab[i];
  type = singleType || types[i];
  if (type === 0) {
   i++;
   continue;
  }
  if (type == "i64") type = "i32";
  setValue(ret + i, curr, type);
  if (previousType !== type) {
   typeSize = getNativeTypeSize(type);
   previousType = type;
  }
  i += typeSize;
 }
 return ret;
}

function getMemory(size) {
 if (!runtimeInitialized) return dynamicAlloc(size);
 return _malloc(size);
}

function Pointer_stringify(ptr, length) {
 abort("this function has been removed - you should use UTF8ToString(ptr, maxBytesToRead) instead!");
}

var UTF8Decoder = typeof TextDecoder !== "undefined" ? new TextDecoder("utf8") : undefined;

function UTF8ArrayToString(u8Array, idx, maxBytesToRead) {
 var endIdx = idx + maxBytesToRead;
 var endPtr = idx;
 while (u8Array[endPtr] && !(endPtr >= endIdx)) ++endPtr;
 if (endPtr - idx > 16 && u8Array.subarray && UTF8Decoder) {
  return UTF8Decoder.decode(u8Array.subarray(idx, endPtr));
 } else {
  var str = "";
  while (idx < endPtr) {
   var u0 = u8Array[idx++];
   if (!(u0 & 128)) {
    str += String.fromCharCode(u0);
    continue;
   }
   var u1 = u8Array[idx++] & 63;
   if ((u0 & 224) == 192) {
    str += String.fromCharCode((u0 & 31) << 6 | u1);
    continue;
   }
   var u2 = u8Array[idx++] & 63;
   if ((u0 & 240) == 224) {
    u0 = (u0 & 15) << 12 | u1 << 6 | u2;
   } else {
    u0 = (u0 & 7) << 18 | u1 << 12 | u2 << 6 | u8Array[idx++] & 63;
   }
   if (u0 < 65536) {
    str += String.fromCharCode(u0);
   } else {
    var ch = u0 - 65536;
    str += String.fromCharCode(55296 | ch >> 10, 56320 | ch & 1023);
   }
  }
 }
 return str;
}

function UTF8ToString(ptr, maxBytesToRead) {
 return ptr ? UTF8ArrayToString(HEAPU8, ptr, maxBytesToRead) : "";
}

function stringToUTF8Array(str, outU8Array, outIdx, maxBytesToWrite) {
 if (!(maxBytesToWrite > 0)) return 0;
 var startIdx = outIdx;
 var endIdx = outIdx + maxBytesToWrite - 1;
 for (var i = 0; i < str.length; ++i) {
  var u = str.charCodeAt(i);
  if (u >= 55296 && u <= 57343) {
   var u1 = str.charCodeAt(++i);
   u = 65536 + ((u & 1023) << 10) | u1 & 1023;
  }
  if (u <= 127) {
   if (outIdx >= endIdx) break;
   outU8Array[outIdx++] = u;
  } else if (u <= 2047) {
   if (outIdx + 1 >= endIdx) break;
   outU8Array[outIdx++] = 192 | u >> 6;
   outU8Array[outIdx++] = 128 | u & 63;
  } else if (u <= 65535) {
   if (outIdx + 2 >= endIdx) break;
   outU8Array[outIdx++] = 224 | u >> 12;
   outU8Array[outIdx++] = 128 | u >> 6 & 63;
   outU8Array[outIdx++] = 128 | u & 63;
  } else {
   if (outIdx + 3 >= endIdx) break;
   outU8Array[outIdx++] = 240 | u >> 18;
   outU8Array[outIdx++] = 128 | u >> 12 & 63;
   outU8Array[outIdx++] = 128 | u >> 6 & 63;
   outU8Array[outIdx++] = 128 | u & 63;
  }
 }
 outU8Array[outIdx] = 0;
 return outIdx - startIdx;
}

function stringToUTF8(str, outPtr, maxBytesToWrite) {
 return stringToUTF8Array(str, HEAPU8, outPtr, maxBytesToWrite);
}

function lengthBytesUTF8(str) {
 var len = 0;
 for (var i = 0; i < str.length; ++i) {
  var u = str.charCodeAt(i);
  if (u >= 55296 && u <= 57343) u = 65536 + ((u & 1023) << 10) | str.charCodeAt(++i) & 1023;
  if (u <= 127) ++len; else if (u <= 2047) len += 2; else if (u <= 65535) len += 3; else len += 4;
 }
 return len;
}

var UTF16Decoder = typeof TextDecoder !== "undefined" ? new TextDecoder("utf-16le") : undefined;

function allocateUTF8(str) {
 var size = lengthBytesUTF8(str) + 1;
 var ret = _malloc(size);
 if (ret) stringToUTF8Array(str, HEAP8, ret, size);
 return ret;
}

function writeArrayToMemory(array, buffer) {
 HEAP8.set(array, buffer);
}

function writeAsciiToMemory(str, buffer, dontAddNull) {
 for (var i = 0; i < str.length; ++i) {
  HEAP8[buffer++ >> 0] = str.charCodeAt(i);
 }
 if (!dontAddNull) HEAP8[buffer >> 0] = 0;
}

function demangle(func) {
 return func;
}

function demangleAll(text) {
 var regex = /__Z[\w\d_]+/g;
 return text.replace(regex, function(x) {
  var y = demangle(x);
  return x === y ? x : y + " [" + x + "]";
 });
}

function jsStackTrace() {
 var err = new Error();
 if (!err.stack) {
  try {
   throw new Error(0);
  } catch (e) {
   err = e;
  }
  if (!err.stack) {
   return "(no stack trace available)";
  }
 }
 return err.stack.toString();
}

function alignUp(x, multiple) {
 if (x % multiple > 0) {
  x += multiple - x % multiple;
 }
 return x;
}

var buffer, HEAP8, HEAPU8, HEAP16, HEAPU16, HEAP32, HEAPU32, HEAPF32, HEAPF64;

function updateGlobalBuffer(buf) {
 Module["buffer"] = buffer = buf;
}

function updateGlobalBufferViews() {
 Module["HEAP8"] = HEAP8 = new Int8Array(buffer);
 Module["HEAP16"] = HEAP16 = new Int16Array(buffer);
 Module["HEAP32"] = HEAP32 = new Int32Array(buffer);
 Module["HEAPU8"] = HEAPU8 = new Uint8Array(buffer);
 Module["HEAPU16"] = HEAPU16 = new Uint16Array(buffer);
 Module["HEAPU32"] = HEAPU32 = new Uint32Array(buffer);
 Module["HEAPF32"] = HEAPF32 = new Float32Array(buffer);
 Module["HEAPF64"] = HEAPF64 = new Float64Array(buffer);
}

var STACK_BASE = 16752, DYNAMIC_BASE = 5259632, DYNAMICTOP_PTR = 16496;

var TOTAL_STACK = 5242880;

var TOTAL_MEMORY = Module["TOTAL_MEMORY"] || 134217728;

if (TOTAL_MEMORY < TOTAL_STACK) err("TOTAL_MEMORY should be larger than TOTAL_STACK, was " + TOTAL_MEMORY + "! (TOTAL_STACK=" + TOTAL_STACK + ")");

if (Module["buffer"]) {
 buffer = Module["buffer"];
} else {
 {
  buffer = new ArrayBuffer(TOTAL_MEMORY);
 }
 Module["buffer"] = buffer;
}

updateGlobalBufferViews();

HEAP32[DYNAMICTOP_PTR >> 2] = DYNAMIC_BASE;

function callRuntimeCallbacks(callbacks) {
 while (callbacks.length > 0) {
  var callback = callbacks.shift();
  if (typeof callback == "function") {
   callback();
   continue;
  }
  var func = callback.func;
  if (typeof func === "number") {
   if (callback.arg === undefined) {
    Module["dynCall_v"](func);
   } else {
    Module["dynCall_vi"](func, callback.arg);
   }
  } else {
   func(callback.arg === undefined ? null : callback.arg);
  }
 }
}

var __ATPRERUN__ = [];

var __ATINIT__ = [];

var __ATMAIN__ = [];

var __ATEXIT__ = [];

var __ATPOSTRUN__ = [];

var runtimeInitialized = false;

var runtimeExited = false;

function preRun() {
 if (Module["preRun"]) {
  if (typeof Module["preRun"] == "function") Module["preRun"] = [ Module["preRun"] ];
  while (Module["preRun"].length) {
   addOnPreRun(Module["preRun"].shift());
  }
 }
 callRuntimeCallbacks(__ATPRERUN__);
}

function ensureInitRuntime() {
 if (runtimeInitialized) return;
 runtimeInitialized = true;
 callRuntimeCallbacks(__ATINIT__);
}

function preMain() {
 callRuntimeCallbacks(__ATMAIN__);
}

function exitRuntime() {
 callRuntimeCallbacks(__ATEXIT__);
 runtimeExited = true;
}

function postRun() {
 if (Module["postRun"]) {
  if (typeof Module["postRun"] == "function") Module["postRun"] = [ Module["postRun"] ];
  while (Module["postRun"].length) {
   addOnPostRun(Module["postRun"].shift());
  }
 }
 callRuntimeCallbacks(__ATPOSTRUN__);
}

function addOnPreRun(cb) {
 __ATPRERUN__.unshift(cb);
}

function addOnPostRun(cb) {
 __ATPOSTRUN__.unshift(cb);
}

var Math_abs = Math.abs;

var Math_ceil = Math.ceil;

var Math_floor = Math.floor;

var Math_min = Math.min;

var runDependencies = 0;

var runDependencyWatcher = null;

var dependenciesFulfilled = null;

function addRunDependency(id) {
 runDependencies++;
 if (Module["monitorRunDependencies"]) {
  Module["monitorRunDependencies"](runDependencies);
 }
}

function removeRunDependency(id) {
 runDependencies--;
 if (Module["monitorRunDependencies"]) {
  Module["monitorRunDependencies"](runDependencies);
 }
 if (runDependencies == 0) {
  if (runDependencyWatcher !== null) {
   clearInterval(runDependencyWatcher);
   runDependencyWatcher = null;
  }
  if (dependenciesFulfilled) {
   var callback = dependenciesFulfilled;
   dependenciesFulfilled = null;
   callback();
  }
 }
}

Module["preloadedImages"] = {};

Module["preloadedAudios"] = {};

var memoryInitializer = null;

var dataURIPrefix = "data:application/octet-stream;base64,";

function isDataURI(filename) {
 return String.prototype.startsWith ? filename.startsWith(dataURIPrefix) : filename.indexOf(dataURIPrefix) === 0;
}

__ATINIT__.push({
 func: function() {
  ___emscripten_environ_constructor();
 }
});

memoryInitializer = "data:application/octet-stream;base64,AAAAAAAAAAAAAQICAwMDAwQEBAQEBAQEBQUFBQUFBQUFBQUFBQUFBQYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIYHFBVFBQXGw8EDxUbHx8fHx8fGBgYGgivLy8hORUVBBiYgRiFFFQFwAAAAAAAAAABgYGBgcHBwcHBwoJBQQDAwMDAwMDAwMDAwMCAgEBAACPLwAAsSIAAOMdAADrHQAA9B0AAP0hAADxIQAAlyIAAOsdAAD7HQAAAh4AAAgeAAASIgAAgQAAABYiAACCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICAgICAAAAAAAAAAAAAAAAAAAAAAAAAwEBAQEBAQEBAQEBAQEBAQWFhYWFhYWFhYWBAQEBAQEBBUVFRUVFQUFBQUFBQUFBQUFBQUFBQUFBQUFBAQEBAUEFRUVFRUVBQUFBQUFBQUFBQUFBQUFBQUFBQUEBAQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAdCIAAHgiAAB+IgAAgSIAAIYiAADMKgAAjSIAAJMiAACXIgAAoCIAAKUiAACoIgAAqyIAALEiAAC1IgAAuSIAALwiAACUKAAAwyIAAMgiAADNIgAA0yIAAOwiAADvIgAA8yIAAPYiAAD5IgAA/CIAAP8iAAACIwAACCMAABEjAAAYIwAAAAAAAAAAAAAAAAAASSQAAIMAAABQJAAAhAAAAF8kAACFAAAAZiQAAIYAAADpJwAAhwAAAGwkAACIAAAAcyQAAIkAAAB8JAAAigAAAIEkAACKAAAAjCQAAIsAAACRJAAAjAAAAJckAACNAAAAnSQAAI4AAACjJAAAjwAAAKwkAACQAAAAsyQAAJEAAAC6JAAAkgAAAMEkAACTAAAANSgAAJQAAADIJAAAlQAAANEkAACWAAAAUCsAAJcAAADaJAAAmAAAAAAAAAAAAAAAAiYAAAcmAAD6JQAAmygAAA8mAAAUJgAAHSYAACgmAAA0JgAAPiYAAEsmAAAAAAAAAAAAAAEAAAACAAAAAwAAAAUAAAAGAAAABwAAAAgAAAAJAAAACgAAAAsAAAAAAAAAaSYAAJkAAABxJgAAmgAAAHYmAACbAAAAeyYAAJwAAAB/JgAAnQAAAIQmAACeAAAAiiYAAJ8AAACSJgAAoAAAAJomAAChAAAAoSYAAKIAAACpJgAAowAAALEmAACkAAAAAAAAAAAAAAAAAAAAAAAAAAsnAAClAAAAEicAAKYAAAAZJwAApwAAACEnAACoAAAAKCcAAKkAAAAtJwAAqgAAAAAAAAAAAAAAAAAAAAAAAACxJwAAqwAAALcnAACsAAAAxCcAAK0AAADMJwAArgAAANQnAACvAAAA3ScAALAAAADpJwAAsQAAAPYnAACyAAAAASgAALMAAAANKAAAtAAAABcoAAC1AAAAJCgAALYAAAAsKAAAtwAAADUoAAC4AAAAQigAALkAAABNKAAAugAAAAAAAAAAAAAAAAAAAAAAAACPKAAAlCgAAKAqAACbKAAAoSgAAAAAAAAAAAAAAAAAACgqAAC7AAAALioAALwAAAAwKwAAvQAAADQqAAC+AAAANisAAL8AAAA7KwAAwAAAAEIrAADBAAAAOioAAMIAAABIKwAAwwAAAFArAADEAAAATCoAAMUAAAAAAAAAAAAAACgqAAC7AAAALioAAMYAAAA0KgAAxwAAADoqAADIAAAAPyoAAMkAAABEKgAAygAAAEwqAADLAAAAiTEAAMwAAABSKgAAzQAAAAAAAAAAAAAAmCoAAJsqAACgKgAAAAAAAMgqAAClKgAAzCoAAAAAAADJKwAAzgAAAM0rAADPAAAA0isAANAAAADXKwAA0QAAAN0rAADSAAAA4isAANMAAADnKwAA1AAAAOwrAADVAAAA8CsAANYAAAD0KwAA1wAAAPgrAADYAAAA/isAANkAAAADLAAA2gAAAAksAADbAAAADywAANwAAAAVLAAA3QAAABksAADeAAAA7iwAAN8AAAAdLAAA4AAAACIsAADhAAAAJiwAAOIAAAAqLAAA4wAAADEsAADkAAAAPCwAAOUAAABBLAAA5gAAAEUsAADnAAAASiwAAOgAAABPLAAA6QAAAAAAAAAAAAAAAAAAAAAAAAB/LAAA6gAAAIUsAADrAAAAiiwAAOwAAACTLAAA7QAAAJssAADuAAAAoCwAAO8AAADEMAAA8AAAAKcsAADxAAAAriwAAPIAAAC4LAAA8wAAAL0sAAD0AAAAAAAAAAAAAAAtLQAAMS0AADktAAA/LQAASC0AALgsAAAAAAAAAAAAAAYAAAADAAAAAAAAAAQAAAABAAAAAgAAAAAAAAAAAAAAmy0AAPUAAACgLQAA9gAAAKUtAAD3AAAAqi0AAPgAAACvLQAA+QAAALYtAAD6AAAAvS0AAPsAAADCLQAA/AAAAMYtAAD9AAAAzC0AAP4AAADSLQAA/wAAANYtAAAAAQAA3i0AAAEBAADiLQAAAgEAAAAAAAAAAAAAAAAAAAAAAACsMAAAAwEAALMwAAAEAQAAuDAAAAUBAAC/MAAABgEAAKUwAAAHAQAAxDAAAAgBAADLMAAACQEAAAAAAAAAAAAAXTQAAAoBAABlNAAACwEAAHA0AAAMAQAAAAAAAAAAAADaMgAADQEAAOEyAAAOAQAAAAAAAAAAAAAAAAAAAAAAAAIAAMADAADABAAAwAUAAMAGAADABwAAwAgAAMAJAADACgAAwAsAAMAMAADADQAAwA4AAMAPAADAEAAAwBEAAMASAADAEwAAwBQAAMAVAADAFgAAwBcAAMAYAADAGQAAwBoAAMAbAADAHAAAwB0AAMAeAADAHwAAwAAAALMBAADDAgAAwwMAAMMEAADDBQAAwwYAAMMHAADDCAAAwwkAAMMKAADDCwAAwwwAAMMNAADTDgAAww8AAMMAAAy7AQAMwwIADMMDAAzDBAAM0wAAAADeEgSVAAAAAP///////////////wAAAAAAAAAAAAAAABEACgAREREAAAAABQAAAAAAAAkAAAAACwAAAAAAAAAAEQAPChEREQMKBwABEwkLCwAACQYLAAALAAYRAAAAERERAAAAAAAAAAAAAAAAAAAAAAsAAAAAAAAAABEACgoREREACgAAAgAJCwAAAAkACwAACwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAAAAAAAAAMAAAAAAwAAAAACQwAAAAAAAwAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAADQAAAAQNAAAAAAkOAAAAAAAOAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAA8AAAAADwAAAAAJEAAAAAAAEAAAEAAAEgAAABISEgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASAAAAEhISAAAAAAAACQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACwAAAAAAAAAAAAAACgAAAAAKAAAAAAkLAAAAAAALAAALAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAAAAAAAAAAAAAwAAAAADAAAAAAJDAAAAAAADAAADAAAMDEyMzQ1Njc4OUFCQ0RFRlQhIhkNAQIDEUscDBAECx0SHidobm9wcWIgBQYPExQVGggWBygkFxgJCg4bHyUjg4J9JiorPD0+P0NHSk1YWVpbXF1eX2BhY2RlZmdpamtscnN0eXp7fAAAAAAAAAAAAElsbGVnYWwgYnl0ZSBzZXF1ZW5jZQBEb21haW4gZXJyb3IAUmVzdWx0IG5vdCByZXByZXNlbnRhYmxlAE5vdCBhIHR0eQBQZXJtaXNzaW9uIGRlbmllZABPcGVyYXRpb24gbm90IHBlcm1pdHRlZABObyBzdWNoIGZpbGUgb3IgZGlyZWN0b3J5AE5vIHN1Y2ggcHJvY2VzcwBGaWxlIGV4aXN0cwBWYWx1ZSB0b28gbGFyZ2UgZm9yIGRhdGEgdHlwZQBObyBzcGFjZSBsZWZ0IG9uIGRldmljZQBPdXQgb2YgbWVtb3J5AFJlc291cmNlIGJ1c3kASW50ZXJydXB0ZWQgc3lzdGVtIGNhbGwAUmVzb3VyY2UgdGVtcG9yYXJpbHkgdW5hdmFpbGFibGUASW52YWxpZCBzZWVrAENyb3NzLWRldmljZSBsaW5rAFJlYWQtb25seSBmaWxlIHN5c3RlbQBEaXJlY3Rvcnkgbm90IGVtcHR5AENvbm5lY3Rpb24gcmVzZXQgYnkgcGVlcgBPcGVyYXRpb24gdGltZWQgb3V0AENvbm5lY3Rpb24gcmVmdXNlZABIb3N0IGlzIGRvd24ASG9zdCBpcyB1bnJlYWNoYWJsZQBBZGRyZXNzIGluIHVzZQBCcm9rZW4gcGlwZQBJL08gZXJyb3IATm8gc3VjaCBkZXZpY2Ugb3IgYWRkcmVzcwBCbG9jayBkZXZpY2UgcmVxdWlyZWQATm8gc3VjaCBkZXZpY2UATm90IGEgZGlyZWN0b3J5AElzIGEgZGlyZWN0b3J5AFRleHQgZmlsZSBidXN5AEV4ZWMgZm9ybWF0IGVycm9yAEludmFsaWQgYXJndW1lbnQAQXJndW1lbnQgbGlzdCB0b28gbG9uZwBTeW1ib2xpYyBsaW5rIGxvb3AARmlsZW5hbWUgdG9vIGxvbmcAVG9vIG1hbnkgb3BlbiBmaWxlcyBpbiBzeXN0ZW0ATm8gZmlsZSBkZXNjcmlwdG9ycyBhdmFpbGFibGUAQmFkIGZpbGUgZGVzY3JpcHRvcgBObyBjaGlsZCBwcm9jZXNzAEJhZCBhZGRyZXNzAEZpbGUgdG9vIGxhcmdlAFRvbyBtYW55IGxpbmtzAE5vIGxvY2tzIGF2YWlsYWJsZQBSZXNvdXJjZSBkZWFkbG9jayB3b3VsZCBvY2N1cgBTdGF0ZSBub3QgcmVjb3ZlcmFibGUAUHJldmlvdXMgb3duZXIgZGllZABPcGVyYXRpb24gY2FuY2VsZWQARnVuY3Rpb24gbm90IGltcGxlbWVudGVkAE5vIG1lc3NhZ2Ugb2YgZGVzaXJlZCB0eXBlAElkZW50aWZpZXIgcmVtb3ZlZABEZXZpY2Ugbm90IGEgc3RyZWFtAE5vIGRhdGEgYXZhaWxhYmxlAERldmljZSB0aW1lb3V0AE91dCBvZiBzdHJlYW1zIHJlc291cmNlcwBMaW5rIGhhcyBiZWVuIHNldmVyZWQAUHJvdG9jb2wgZXJyb3IAQmFkIG1lc3NhZ2UARmlsZSBkZXNjcmlwdG9yIGluIGJhZCBzdGF0ZQBOb3QgYSBzb2NrZXQARGVzdGluYXRpb24gYWRkcmVzcyByZXF1aXJlZABNZXNzYWdlIHRvbyBsYXJnZQBQcm90b2NvbCB3cm9uZyB0eXBlIGZvciBzb2NrZXQAUHJvdG9jb2wgbm90IGF2YWlsYWJsZQBQcm90b2NvbCBub3Qgc3VwcG9ydGVkAFNvY2tldCB0eXBlIG5vdCBzdXBwb3J0ZWQATm90IHN1cHBvcnRlZABQcm90b2NvbCBmYW1pbHkgbm90IHN1cHBvcnRlZABBZGRyZXNzIGZhbWlseSBub3Qgc3VwcG9ydGVkIGJ5IHByb3RvY29sAEFkZHJlc3Mgbm90IGF2YWlsYWJsZQBOZXR3b3JrIGlzIGRvd24ATmV0d29yayB1bnJlYWNoYWJsZQBDb25uZWN0aW9uIHJlc2V0IGJ5IG5ldHdvcmsAQ29ubmVjdGlvbiBhYm9ydGVkAE5vIGJ1ZmZlciBzcGFjZSBhdmFpbGFibGUAU29ja2V0IGlzIGNvbm5lY3RlZABTb2NrZXQgbm90IGNvbm5lY3RlZABDYW5ub3Qgc2VuZCBhZnRlciBzb2NrZXQgc2h1dGRvd24AT3BlcmF0aW9uIGFscmVhZHkgaW4gcHJvZ3Jlc3MAT3BlcmF0aW9uIGluIHByb2dyZXNzAFN0YWxlIGZpbGUgaGFuZGxlAFJlbW90ZSBJL08gZXJyb3IAUXVvdGEgZXhjZWVkZWQATm8gbWVkaXVtIGZvdW5kAFdyb25nIG1lZGl1bSB0eXBlAE5vIGVycm9yIGluZm9ybWF0aW9uAAAAAAAACgAAAGQAAADoAwAAECcAAKCGAQBAQg8AgJaYAADh9QX/////////////////////////////////////////////////////////////////AAECAwQFBgcICf////////8KCwwNDg8QERITFBUWFxgZGhscHR4fICEiI////////woLDA0ODxAREhMUFRYXGBkaGxwdHh8gISIj/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wAAAAAAAAAAAAAAAAAAAC90bXAvdG1wbmFtX1hYWFhYWAAAAAAAAAAAAAAAAAAAL3RtcC90bXBmaWxlX1hYWFhYWAAAAAAAAAAAAAAAAABMQ19DVFlQRQAAAABMQ19OVU1FUklDAABMQ19USU1FAAAAAABMQ19DT0xMQVRFAABMQ19NT05FVEFSWQBMQ19NRVNTQUdFUwAAAAAAAAAAAEMuVVRGLTgAAAAAAAAAAAAAAAAAAGB/QAIAAAAAAAAAAQAAAAAAAAABAAAAAgAAAGQVAAAFAAAAAAAAAAAAAAAPAQAAAAAAAAAAAAAAAAAAAAAAAAAAAACBAAAAggAAABg1AAAABAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAK/////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZBUAAOgVAAAJAAAAAAAAAAAAAAAPAQAAAAAAAAAAAAAAAAAAAAAAAIMAAAAAAAAAggAAACg5AAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAaBYAAAUAAAAAAAAAAAAAAA8BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIQAAACCAAAAXEAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAP//////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACgAAFAAAAEMuVVRGLTgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABfcIkA/wkvD9g0AABcQAAAXEAAAFxAAABcQAAAXEAAAFxAAABcQAAAXEAAAFxAAAB/f39/f39/f39/f39/fwAAKCp0ZW1wb3JhcnkpACgqdmFyYXJnKQA9W0NdAD0/AG1haW4ATHVhAGZvciBpdGVyYXRvcgBtZXRhbWV0aG9kAGdsb2JhbABmaWVsZABjb25zdGFudAB1cHZhbHVlAGF0dGVtcHQgdG8gJXMgJXMgJyVzJyAoYSAlcyB2YWx1ZSkAYXR0ZW1wdCB0byAlcyBhICVzIHZhbHVlAGNvbmNhdGVuYXRlAHBlcmZvcm0gYXJpdGhtZXRpYyBvbgBhdHRlbXB0IHRvIGNvbXBhcmUgdHdvICVzIHZhbHVlcwBhdHRlbXB0IHRvIGNvbXBhcmUgJXMgd2l0aCAlcwBDIHN0YWNrIG92ZXJmbG93AGVycm9yIGluIGVycm9yIGhhbmRsaW5nAGNhbm5vdCByZXN1bWUgbm9uLXN1c3BlbmRlZCBjb3JvdXRpbmUAYXR0ZW1wdCB0byB5aWVsZCBhY3Jvc3MgYSBDLWNhbGwgYm91bmRhcnkAYXR0ZW1wdCB0byB5aWVsZCBmcm9tIG91dHNpZGUgYSBjb3JvdXRpbmUAYXR0ZW1wdCB0byBsb2FkIGEgJXMgY2h1bmsgKG1vZGUgaXMgJyVzJykAYmluYXJ5AHRleHQAbm8gbWVzc2FnZQBlcnJvciBpbiBfX2djIG1ldGFtZXRob2QgKCVzKQB0b28gbWFueSAlcyAobGltaXQgaXMgJWQpAG1lbW9yeSBhbGxvY2F0aW9uIGVycm9yOiBibG9jayB0b28gYmlnAG5OAHhYACVwACUAaW52YWxpZCBvcHRpb24gJyUlJWMnIHRvICdsdWFfcHVzaGZzdHJpbmcnAFtzdHJpbmcgIgAiXQBsYWJlbHMvZ290b3MAbm8gdmlzaWJsZSBsYWJlbCAnJXMnIGZvciA8Z290bz4gYXQgbGluZSAlZAA8JXM+IGF0IGxpbmUgJWQgbm90IGluc2lkZSBhIGxvb3AAPGdvdG8gJXM+IGF0IGxpbmUgJWQganVtcHMgaW50byB0aGUgc2NvcGUgb2YgbG9jYWwgJyVzJwAlcyBleHBlY3RlZABDIGxldmVscwAlcyBleHBlY3RlZCAodG8gY2xvc2UgJXMgYXQgbGluZSAlZCkAKGZvciBpbmRleCkAKGZvciBsaW1pdCkAKGZvciBzdGVwKQAoZm9yIGdlbmVyYXRvcikAKGZvciBzdGF0ZSkAKGZvciBjb250cm9sKQAnPScgb3IgJ2luJyBleHBlY3RlZABsYWJlbCAnJXMnIGFscmVhZHkgZGVmaW5lZCBvbiBsaW5lICVkAHN5bnRheCBlcnJvcgB1bmV4cGVjdGVkIHN5bWJvbABmdW5jdGlvbiBhcmd1bWVudHMgZXhwZWN0ZWQAaXRlbXMgaW4gYSBjb25zdHJ1Y3RvcgBmdW5jdGlvbnMAc2VsZgA8bmFtZT4gb3IgJy4uLicgZXhwZWN0ZWQAbG9jYWwgdmFyaWFibGVzAGNhbm5vdCB1c2UgJy4uLicgb3V0c2lkZSBhIHZhcmFyZyBmdW5jdGlvbgBmdW5jdGlvbiBhdCBsaW5lICVkAG1haW4gZnVuY3Rpb24AdG9vIG1hbnkgJXMgKGxpbWl0IGlzICVkKSBpbiAlcwB1cHZhbHVlcwBub3QgZW5vdWdoIG1lbW9yeQBpbnZhbGlkIGtleSB0byAnbmV4dCcAdGFibGUgb3ZlcmZsb3cAdGFibGUgaW5kZXggaXMgbmlsAHRhYmxlIGluZGV4IGlzIE5hTgBib29sZWFuAHVzZXJkYXRhAG51bWJlcgB0aHJlYWQAcHJvdG8AdXB2YWwAX19uZXdpbmRleABfX2xlbgBfX2VxAF9fYWRkAF9fc3ViAF9fbXVsAF9fZGl2AF9fbW9kAF9fcG93AF9fdW5tAF9fbHQAX19sZQBfX2NvbmNhdABfX2NhbGwAYmluYXJ5IHN0cmluZwAZkw0KGgoAdHJ1bmNhdGVkAG5vdCBhAHZlcnNpb24gbWlzbWF0Y2ggaW4AaW5jb21wYXRpYmxlAGNvcnJ1cHRlZAAlczogJXMgcHJlY29tcGlsZWQgY2h1bmsAaW5kZXgAbG9vcCBpbiBnZXR0YWJsZQBsb29wIGluIHNldHRhYmxlAHN0cmluZyBsZW5ndGggb3ZlcmZsb3cAZ2V0IGxlbmd0aCBvZgAnZm9yJyBpbml0aWFsIHZhbHVlIG11c3QgYmUgYSBudW1iZXIAJ2ZvcicgbGltaXQgbXVzdCBiZSBhIG51bWJlcgAnZm9yJyBzdGVwIG11c3QgYmUgYSBudW1iZXIAc3RhY2sgdHJhY2ViYWNrOgAKCS4uLgBTbG50AAoJJXM6ACVkOgAgaW4gAGZ1bmN0aW9uICclcycAbWFpbiBjaHVuawBmdW5jdGlvbiA8JXM6JWQ+AAoJKC4uLnRhaWwgY2FsbHMuLi4pAGJhZCBhcmd1bWVudCAjJWQgKCVzKQBtZXRob2QAY2FsbGluZyAnJXMnIG9uIGJhZCBzZWxmICglcykAYmFkIGFyZ3VtZW50ICMlZCB0byAnJXMnICglcykAU2wAJXM6JWQ6IAAlczogJXMAJXMgZXhwZWN0ZWQsIGdvdCAlcwBpbnZhbGlkIG9wdGlvbiAnJXMnAHN0YWNrIG92ZXJmbG93ICglcykAYnVmZmVyIHRvbyBsYXJnZQA9c3RkaW4AQCVzAGNhbm5vdCAlcyAlczogJXMAcmIAcmVvcGVuAG9iamVjdCBsZW5ndGggaXMgbm90IGEgbnVtYmVyACVzOiAlcABuYW1lIGNvbmZsaWN0IGZvciBtb2R1bGUgJyVzJwB0b28gbWFueSB1cHZhbHVlcwBtdWx0aXBsZSBMdWEgVk1zIGRldGVjdGVkAHZlcnNpb24gbWlzbWF0Y2g6IGFwcC4gbmVlZHMgJWYsIEx1YSBjb3JlIHByb3ZpZGVzICVmAGJhZCBjb252ZXJzaW9uIG51bWJlci0+aW50OyBtdXN0IHJlY29tcGlsZSBMdWEgd2l0aCBwcm9wZXIgc2V0dGluZ3MAUEFOSUM6IHVucHJvdGVjdGVkIGVycm9yIGluIGNhbGwgdG8gTHVhIEFQSSAoJXMpCgBwYWNrYWdlAGNvcm91dGluZQB0YWJsZQBpbwBvcwBzdHJpbmcAYml0MzIAbWF0aABqcwBydW4AcnVuX3N0cmluZwAtMQBjb250cm9sIHN0cnVjdHVyZSB0b28gbG9uZwBvcGNvZGVzAGZ1bmN0aW9uIG9yIGV4cHJlc3Npb24gdG9vIGNvbXBsZXgAY29uc3RhbnRzAGFuZABicmVhawBkbwBlbHNlAGVsc2VpZgBmYWxzZQBmb3IAZnVuY3Rpb24AZ290bwBpZgBpbgBsb2NhbABuaWwAbm90AG9yAHJlcGVhdAB0aGVuAHRydWUAdW50aWwAd2hpbGUAJyVjJwBjaGFyKCVkKQAnJXMnAC4uAC4uLgA9PQA+PQA8PQB+PQA6OgA8ZW9mPgA8bnVtYmVyPgA8bmFtZT4APHN0cmluZz4AJXM6JWQ6ICVzAGxleGljYWwgZWxlbWVudCB0b28gbG9uZwAlcyBuZWFyICVzAF9FTlYAY2h1bmsgaGFzIHRvbyBtYW55IGxpbmVzAGludmFsaWQgbG9uZyBzdHJpbmcgZGVsaW1pdGVyAHVuZmluaXNoZWQgc3RyaW5nAGhleGFkZWNpbWFsIGRpZ2l0IGV4cGVjdGVkAGludmFsaWQgZXNjYXBlIHNlcXVlbmNlAGRlY2ltYWwgZXNjYXBlIHRvbyBsYXJnZQBYeABFZQBQcAArLQBtYWxmb3JtZWQgbnVtYmVyAHVuZmluaXNoZWQgbG9uZyBjb21tZW50AHVuZmluaXNoZWQgbG9uZyBzdHJpbmcAX0cATHVhIDUuMgBfVkVSU0lPTgBhc3NlcnQAY29sbGVjdGdhcmJhZ2UAZG9maWxlAGVycm9yAGlwYWlycwBsb2FkZmlsZQBsb2FkAGxvYWRzdHJpbmcAbmV4dABwYWlycwBwY2FsbABwcmludAByYXdlcXVhbAByYXdsZW4AcmF3Z2V0AHJhd3NldABzZWxlY3QAdG9udW1iZXIAdG9zdHJpbmcAeHBjYWxsAHZhbHVlIGV4cGVjdGVkAHN0YWNrIG92ZXJmbG93AGJhc2Ugb3V0IG9mIHJhbmdlACAMCg0JCwBfX21ldGF0YWJsZQBjYW5ub3QgY2hhbmdlIGEgcHJvdGVjdGVkIG1ldGF0YWJsZQBpbmRleCBvdXQgb2YgcmFuZ2UAdGFibGUgb3Igc3RyaW5nIGV4cGVjdGVkACd0b3N0cmluZycgbXVzdCByZXR1cm4gYSBzdHJpbmcgdG8gJ3ByaW50JwBfX3BhaXJzAGJ0AD0obG9hZCkAdG9vIG1hbnkgbmVzdGVkIGZ1bmN0aW9ucwByZWFkZXIgZnVuY3Rpb24gbXVzdCByZXR1cm4gYSBzdHJpbmcAX19pcGFpcnMAY29sbGVjdABzdG9wAHJlc3RhcnQAc3RlcABzZXRwYXVzZQBzZXRzdGVwbXVsAHNldG1ham9yaW5jAGlzcnVubmluZwBnZW5lcmF0aW9uYWwAaW5jcmVtZW50YWwAYXNzZXJ0aW9uIGZhaWxlZCEAYXJzaGlmdABiYW5kAGJub3QAYm9yAGJ4b3IAYnRlc3QAZXh0cmFjdABscm90YXRlAGxzaGlmdAByZXBsYWNlAHJyb3RhdGUAcnNoaWZ0AGZpZWxkIGNhbm5vdCBiZSBuZWdhdGl2ZQB3aWR0aCBtdXN0IGJlIHBvc2l0aXZlAHRyeWluZyB0byBhY2Nlc3Mgbm9uLWV4aXN0ZW50IGJpdHMAY3JlYXRlAHJlc3VtZQBydW5uaW5nAHN0YXR1cwB3cmFwAHlpZWxkAHRvbyBtYW55IGFyZ3VtZW50cyB0byByZXN1bWUAY2Fubm90IHJlc3VtZSBkZWFkIGNvcm91dGluZQB0b28gbWFueSByZXN1bHRzIHRvIHJlc3VtZQBjb3JvdXRpbmUgZXhwZWN0ZWQAc3VzcGVuZGVkAG5vcm1hbABkZWFkAGRlYnVnAGdldHVzZXJ2YWx1ZQBnZXRob29rAGdldGluZm8AZ2V0bG9jYWwAZ2V0cmVnaXN0cnkAZ2V0bWV0YXRhYmxlAGdldHVwdmFsdWUAdXB2YWx1ZWpvaW4AdXB2YWx1ZWlkAHNldHVzZXJ2YWx1ZQBzZXRob29rAHNldGxvY2FsAHNldG1ldGF0YWJsZQBzZXR1cHZhbHVlAHRyYWNlYmFjawBuaWwgb3IgdGFibGUgZXhwZWN0ZWQAbGV2ZWwgb3V0IG9mIHJhbmdlAF9IS0VZAGsAX19tb2RlAGNhbGwAcmV0dXJuAGNvdW50AHRhaWwgY2FsbABmdWxsIHVzZXJkYXRhIGV4cGVjdGVkLCBnb3QgbGlnaHQgdXNlcmRhdGEAPnUAaW52YWxpZCB1cHZhbHVlIGluZGV4AEx1YSBmdW5jdGlvbiBleHBlY3RlZABmbG5TdHUAPiVzAGZ1bmN0aW9uIG9yIGxldmVsIGV4cGVjdGVkAHNvdXJjZQBzaG9ydF9zcmMAbGluZWRlZmluZWQAbGFzdGxpbmVkZWZpbmVkAHdoYXQAY3VycmVudGxpbmUAbnVwcwBucGFyYW1zAGlzdmFyYXJnAG5hbWUAbmFtZXdoYXQAaXN0YWlsY2FsbABhY3RpdmVsaW5lcwBmdW5jAGV4dGVybmFsIGhvb2sAbHVhX2RlYnVnPiAAY29udAoAPShkZWJ1ZyBjb21tYW5kKQAlcwoARklMRSoAX0lPX2lucHV0AHN0ZGluAF9JT19vdXRwdXQAc3Rkb3V0AHN0ZGVycgBjYW5ub3QgY2xvc2Ugc3RhbmRhcmQgZmlsZQBjbG9zZQBmbHVzaABsaW5lcwByZWFkAHNlZWsAc2V0dmJ1ZgB3cml0ZQBfX3Rvc3RyaW5nAGZpbGUgKGNsb3NlZCkAZmlsZSAoJXApAGF0dGVtcHQgdG8gdXNlIGEgY2xvc2VkIGZpbGUAJS4xNGcAbm8AZnVsbABsaW5lAGN1cgBub3QgYW4gaW50ZWdlciBpbiBwcm9wZXIgcmFuZ2UAc2V0AGVuZAB0b28gbWFueSBhcmd1bWVudHMAaW52YWxpZCBvcHRpb24AJWxmAGludmFsaWQgZm9ybWF0AHRvbyBtYW55IG9wdGlvbnMAZmlsZSBpcyBhbHJlYWR5IGNsb3NlZAAlcwBpbnB1dABvcGVuAG91dHB1dABwb3BlbgB0bXBmaWxlAHR5cGUAc3RhbmRhcmQgJXMgZmlsZSBpcyBjbG9zZWQAY2xvc2VkIGZpbGUAZmlsZQAncG9wZW4nIG5vdCBzdXBwb3J0ZWQAdwBjYW5ub3Qgb3BlbiBmaWxlICclcycgKCVzKQBpbnZhbGlkIG1vZGUAcGkAaHVnZQBhYnMAYWNvcwBhc2luAGF0YW4yAGF0YW4AY2VpbABjb3NoAGNvcwBkZWcAZXhwAGZsb29yAGZtb2QAZnJleHAAbGRleHAAbG9nMTAAbG9nAG1heABtb2RmAHBvdwByYWQAcmFuZG9tAHJhbmRvbXNlZWQAc2luaABzaW4Ac3FydAB0YW5oAHRhbgBpbnRlcnZhbCBpcyBlbXB0eQB3cm9uZyBudW1iZXIgb2YgYXJndW1lbnRzAGNsb2NrAGRhdGUAZGlmZnRpbWUAZXhlY3V0ZQBleGl0AGdldGVudgByZW5hbWUAc2V0bG9jYWxlAHRpbWUAdG1wbmFtZQB1bmFibGUgdG8gZ2VuZXJhdGUgYSB1bmlxdWUgZmlsZW5hbWUAc2VjAG1pbgBob3VyAGRheQBmaWVsZCAnJXMnIG1pc3NpbmcgaW4gZGF0ZSB0YWJsZQBtb250aAB5ZWFyAGlzZHN0AGFsbABjb2xsYXRlAGN0eXBlAG1vbmV0YXJ5AG51bWVyaWMAJWMAKnQAd2RheQB5ZGF5AGFBYkJjZEhJam1NcFNVd1d4WHlZeiUAaW52YWxpZCBjb252ZXJzaW9uIHNwZWNpZmllciAnJSUlcycAYnl0ZQBjaGFyAGR1bXAAZmluZABmb3JtYXQAZ21hdGNoAGdzdWIAbGVuAGxvd2VyAG1hdGNoAHJlcAByZXZlcnNlAHN1YgB1cHBlcgByZXN1bHRpbmcgc3RyaW5nIHRvbyBsYXJnZQBeJCorPy4oWyUtAHRvbyBtYW55IGNhcHR1cmVzAGludmFsaWQgY2FwdHVyZSBpbmRleAB1bmZpbmlzaGVkIGNhcHR1cmUAcGF0dGVybiB0b28gY29tcGxleABpbnZhbGlkIHBhdHRlcm4gY2FwdHVyZQBtYWxmb3JtZWQgcGF0dGVybiAobWlzc2luZyBhcmd1bWVudHMgdG8gJyUlYicpAG1pc3NpbmcgJ1snIGFmdGVyICclJWYnIGluIHBhdHRlcm4AbWFsZm9ybWVkIHBhdHRlcm4gKGVuZHMgd2l0aCAnJSUnKQBtYWxmb3JtZWQgcGF0dGVybiAobWlzc2luZyAnXScpAGludmFsaWQgY2FwdHVyZSBpbmRleCAlJSVkAHN0cmluZy9mdW5jdGlvbi90YWJsZSBleHBlY3RlZABpbnZhbGlkIHVzZSBvZiAnJWMnIGluIHJlcGxhY2VtZW50IHN0cmluZwBpbnZhbGlkIHJlcGxhY2VtZW50IHZhbHVlIChhICVzKQBubyB2YWx1ZQAtKyAjMABpbnZhbGlkIGZvcm1hdCAocmVwZWF0ZWQgZmxhZ3MpAGludmFsaWQgZm9ybWF0ICh3aWR0aCBvciBwcmVjaXNpb24gdG9vIGxvbmcpAG5vdCBhIG51bWJlciBpbiBwcm9wZXIgcmFuZ2UAbm90IGEgbm9uLW5lZ2F0aXZlIG51bWJlciBpbiBwcm9wZXIgcmFuZ2UAXCVkAFwlMDNkAGludmFsaWQgb3B0aW9uICclJSVjJyB0byAnZm9ybWF0JwB1bmFibGUgdG8gZHVtcCBnaXZlbiBmdW5jdGlvbgB2YWx1ZSBvdXQgb2YgcmFuZ2UAc3RyaW5nIHNsaWNlIHRvbyBsb25nAHVucGFjawBjb25jYXQAbWF4bgBpbnNlcnQAcGFjawByZW1vdmUAc29ydABpbnZhbGlkIG9yZGVyIGZ1bmN0aW9uIGZvciBzb3J0aW5nAHBvc2l0aW9uIG91dCBvZiBib3VuZHMAdG9vIG1hbnkgcmVzdWx0cyB0byB1bnBhY2sAbgB3cm9uZyBudW1iZXIgb2YgYXJndW1lbnRzIHRvICdpbnNlcnQnAGludmFsaWQgdmFsdWUgKCVzKSBhdCBpbmRleCAlZCBpbiB0YWJsZSBmb3IgJ2NvbmNhdCcAX0NMSUJTAF9fZ2MAbG9hZGVycwBzZWFyY2hlcnMAcGF0aABMVUFfUEFUSF81XzIATFVBX1BBVEgAL3Vzci9sb2NhbC9zaGFyZS9sdWEvNS4yLz8ubHVhOy91c3IvbG9jYWwvc2hhcmUvbHVhLzUuMi8/L2luaXQubHVhOy91c3IvbG9jYWwvbGliL2x1YS81LjIvPy5sdWE7L3Vzci9sb2NhbC9saWIvbHVhLzUuMi8/L2luaXQubHVhOy4vPy5sdWEAY3BhdGgATFVBX0NQQVRIXzVfMgBMVUFfQ1BBVEgAL3Vzci9sb2NhbC9saWIvbHVhLzUuMi8/LnNvOy91c3IvbG9jYWwvbGliL2x1YS81LjIvbG9hZGFsbC5zbzsuLz8uc28ALwo7Cj8KIQotCgBjb25maWcAX0xPQURFRABsb2FkZWQAX1BSRUxPQUQAcHJlbG9hZABtb2R1bGUAcmVxdWlyZQAncGFja2FnZS5zZWFyY2hlcnMnIG11c3QgYmUgYSB0YWJsZQBtb2R1bGUgJyVzJyBub3QgZm91bmQ6JXMAX05BTUUAX00AX1BBQ0tBR0UAZgAnbW9kdWxlJyBub3QgY2FsbGVkIGZyb20gYSBMdWEgZnVuY3Rpb24ATFVBX05PRU5WADs7ADsBOwABACdwYWNrYWdlLiVzJyBtdXN0IGJlIGEgc3RyaW5nAC8AZXJyb3IgbG9hZGluZyBtb2R1bGUgJyVzJyBmcm9tIGZpbGUgJyVzJzoKCSVzAAoJbm8gbW9kdWxlICclcycgaW4gZmlsZSAnJXMnAF8AbHVhb3Blbl8lcwBkeW5hbWljIGxpYnJhcmllcyBub3QgZW5hYmxlZDsgY2hlY2sgeW91ciBMdWEgaW5zdGFsbGF0aW9uAD8AcgAKCW5vIGZpbGUgJyVzJwAKCW5vIGZpZWxkIHBhY2thZ2UucHJlbG9hZFsnJXMnXQBsb2FkbGliAHNlYXJjaHBhdGgAc2VlYWxsAF9faW5kZXgAYWJzZW50AGluaXQALSsgICAwWDB4AChudWxsKQAtMFgrMFggMFgtMHgrMHggMHgAaW5mAElORgBOQU4AaW5maW5pdHkAbmFuAAABAgQHAwYFAHJ3YQB3KwAuAExDX0FMTABMQU5HAEMuVVRGLTgAUE9TSVgATVVTTF9MT0NQQVRIAEM=";

var tempDoublePtr = 16736;

var ENV = {};

function ___buildEnvironment(environ) {
 var MAX_ENV_VALUES = 64;
 var TOTAL_ENV_SIZE = 1024;
 var poolPtr;
 var envPtr;
 if (!___buildEnvironment.called) {
  ___buildEnvironment.called = true;
  ENV["USER"] = ENV["LOGNAME"] = "web_user";
  ENV["PATH"] = "/";
  ENV["PWD"] = "/";
  ENV["HOME"] = "/home/web_user";
  ENV["LANG"] = "C.UTF-8";
  ENV["_"] = Module["thisProgram"];
  poolPtr = getMemory(TOTAL_ENV_SIZE);
  envPtr = getMemory(MAX_ENV_VALUES * 4);
  HEAP32[envPtr >> 2] = poolPtr;
  HEAP32[environ >> 2] = envPtr;
 } else {
  envPtr = HEAP32[environ >> 2];
  poolPtr = HEAP32[envPtr >> 2];
 }
 var strings = [];
 var totalSize = 0;
 for (var key in ENV) {
  if (typeof ENV[key] === "string") {
   var line = key + "=" + ENV[key];
   strings.push(line);
   totalSize += line.length;
  }
 }
 if (totalSize > TOTAL_ENV_SIZE) {
  throw new Error("Environment size exceeded TOTAL_ENV_SIZE!");
 }
 var ptrSize = 4;
 for (var i = 0; i < strings.length; i++) {
  var line = strings[i];
  writeAsciiToMemory(line, poolPtr);
  HEAP32[envPtr + i * ptrSize >> 2] = poolPtr;
  poolPtr += line.length + 1;
 }
 HEAP32[envPtr + strings.length * ptrSize >> 2] = 0;
}

function _emscripten_get_now() {
 abort();
}

function _emscripten_get_now_is_monotonic() {
 return ENVIRONMENT_IS_NODE || typeof dateNow !== "undefined" || (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) && self["performance"] && self["performance"]["now"];
}

function ___setErrNo(value) {
 if (Module["___errno_location"]) HEAP32[Module["___errno_location"]() >> 2] = value;
 return value;
}

function _clock_gettime(clk_id, tp) {
 var now;
 if (clk_id === 0) {
  now = Date.now();
 } else if (clk_id === 1 && _emscripten_get_now_is_monotonic()) {
  now = _emscripten_get_now();
 } else {
  ___setErrNo(22);
  return -1;
 }
 HEAP32[tp >> 2] = now / 1e3 | 0;
 HEAP32[tp + 4 >> 2] = now % 1e3 * 1e3 * 1e3 | 0;
 return 0;
}

function ___clock_gettime(a0, a1) {
 return _clock_gettime(a0, a1);
}

function ___lock() {}

function ___map_file(pathname, size) {
 ___setErrNo(1);
 return -1;
}

var SYSCALLS = {
 buffers: [ null, [], [] ],
 printChar: function(stream, curr) {
  var buffer = SYSCALLS.buffers[stream];
  if (curr === 0 || curr === 10) {
   (stream === 1 ? out : err)(UTF8ArrayToString(buffer, 0));
   buffer.length = 0;
  } else {
   buffer.push(curr);
  }
 },
 varargs: 0,
 get: function(varargs) {
  SYSCALLS.varargs += 4;
  var ret = HEAP32[SYSCALLS.varargs - 4 >> 2];
  return ret;
 },
 getStr: function() {
  var ret = UTF8ToString(SYSCALLS.get());
  return ret;
 },
 get64: function() {
  var low = SYSCALLS.get(), high = SYSCALLS.get();
  return low;
 },
 getZero: function() {
  SYSCALLS.get();
 }
};

function ___syscall10(which, varargs) {
 SYSCALLS.varargs = varargs;
 try {
  var path = SYSCALLS.getStr();
  FS.unlink(path);
  return 0;
 } catch (e) {
  if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
  return -e.errno;
 }
}

function ___syscall140(which, varargs) {
 SYSCALLS.varargs = varargs;
 try {
  var stream = SYSCALLS.getStreamFromFD(), offset_high = SYSCALLS.get(), offset_low = SYSCALLS.get(), result = SYSCALLS.get(), whence = SYSCALLS.get();
  var offset = offset_low;
  FS.llseek(stream, offset, whence);
  HEAP32[result >> 2] = stream.position;
  if (stream.getdents && offset === 0 && whence === 0) stream.getdents = null;
  return 0;
 } catch (e) {
  if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
  return -e.errno;
 }
}

function ___syscall145(which, varargs) {
 SYSCALLS.varargs = varargs;
 try {
  var stream = SYSCALLS.getStreamFromFD(), iov = SYSCALLS.get(), iovcnt = SYSCALLS.get();
  return SYSCALLS.doReadv(stream, iov, iovcnt);
 } catch (e) {
  if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
  return -e.errno;
 }
}

function flush_NO_FILESYSTEM() {
 var fflush = Module["_fflush"];
 if (fflush) fflush(0);
 var buffers = SYSCALLS.buffers;
 if (buffers[1].length) SYSCALLS.printChar(1, 10);
 if (buffers[2].length) SYSCALLS.printChar(2, 10);
}

function ___syscall146(which, varargs) {
 SYSCALLS.varargs = varargs;
 try {
  var stream = SYSCALLS.get(), iov = SYSCALLS.get(), iovcnt = SYSCALLS.get();
  var ret = 0;
  for (var i = 0; i < iovcnt; i++) {
   var ptr = HEAP32[iov + i * 8 >> 2];
   var len = HEAP32[iov + (i * 8 + 4) >> 2];
   for (var j = 0; j < len; j++) {
    SYSCALLS.printChar(stream, HEAPU8[ptr + j]);
   }
   ret += len;
  }
  return ret;
 } catch (e) {
  if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
  return -e.errno;
 }
}

function ___syscall196(which, varargs) {
 SYSCALLS.varargs = varargs;
 try {
  var path = SYSCALLS.getStr(), buf = SYSCALLS.get();
  return SYSCALLS.doStat(FS.lstat, path, buf);
 } catch (e) {
  if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
  return -e.errno;
 }
}

function ___syscall221(which, varargs) {
 SYSCALLS.varargs = varargs;
 try {
  return 0;
 } catch (e) {
  if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
  return -e.errno;
 }
}

function ___syscall330(which, varargs) {
 SYSCALLS.varargs = varargs;
 try {
  var old = SYSCALLS.getStreamFromFD(), suggestFD = SYSCALLS.get(), flags = SYSCALLS.get();
  if (old.fd === suggestFD) return -ERRNO_CODES.EINVAL;
  return SYSCALLS.doDup(old.path, old.flags, suggestFD);
 } catch (e) {
  if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
  return -e.errno;
 }
}

function ___syscall38(which, varargs) {
 SYSCALLS.varargs = varargs;
 try {
  var old_path = SYSCALLS.getStr(), new_path = SYSCALLS.getStr();
  FS.rename(old_path, new_path);
  return 0;
 } catch (e) {
  if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
  return -e.errno;
 }
}

function ___syscall40(which, varargs) {
 SYSCALLS.varargs = varargs;
 try {
  var path = SYSCALLS.getStr();
  FS.rmdir(path);
  return 0;
 } catch (e) {
  if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
  return -e.errno;
 }
}

function ___syscall5(which, varargs) {
 SYSCALLS.varargs = varargs;
 try {
  var pathname = SYSCALLS.getStr(), flags = SYSCALLS.get(), mode = SYSCALLS.get();
  var stream = FS.open(pathname, flags, mode);
  return stream.fd;
 } catch (e) {
  if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
  return -e.errno;
 }
}

function ___syscall54(which, varargs) {
 SYSCALLS.varargs = varargs;
 try {
  return 0;
 } catch (e) {
  if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
  return -e.errno;
 }
}

function ___syscall6(which, varargs) {
 SYSCALLS.varargs = varargs;
 try {
  var stream = SYSCALLS.getStreamFromFD();
  FS.close(stream);
  return 0;
 } catch (e) {
  if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
  return -e.errno;
 }
}

function ___syscall63(which, varargs) {
 SYSCALLS.varargs = varargs;
 try {
  var old = SYSCALLS.getStreamFromFD(), suggestFD = SYSCALLS.get();
  if (old.fd === suggestFD) return suggestFD;
  return SYSCALLS.doDup(old.path, old.flags, suggestFD);
 } catch (e) {
  if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
  return -e.errno;
 }
}

function ___syscall91(which, varargs) {
 SYSCALLS.varargs = varargs;
 try {
  var addr = SYSCALLS.get(), len = SYSCALLS.get();
  var info = SYSCALLS.mappings[addr];
  if (!info) return 0;
  if (len === info.len) {
   var stream = FS.getStream(info.fd);
   SYSCALLS.doMsync(addr, stream, len, info.flags);
   FS.munmap(stream);
   SYSCALLS.mappings[addr] = null;
   if (info.allocated) {
    _free(info.malloc);
   }
  }
  return 0;
 } catch (e) {
  if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
  return -e.errno;
 }
}

function ___unlock() {}

function _abort() {
 Module["abort"]();
}

function _clock() {
 if (_clock.start === undefined) _clock.start = Date.now();
 return (Date.now() - _clock.start) * (1e6 / 1e3) | 0;
}

function _difftime(time1, time0) {
 return time1 - time0;
}

function _emscripten_get_heap_size() {
 return TOTAL_MEMORY;
}

function abortOnCannotGrowMemory(requestedSize) {
 abort("Cannot enlarge memory arrays to size " + requestedSize + " bytes. Either (1) compile with  -s TOTAL_MEMORY=X  with X higher than the current value " + TOTAL_MEMORY + ", (2) compile with  -s ALLOW_MEMORY_GROWTH=1  which allows increasing the size at runtime but prevents some optimizations, (3) set Module.TOTAL_MEMORY to a higher value before the program runs, or (4) if you want malloc to return NULL (0) instead of this abort, compile with  -s ABORTING_MALLOC=0 ");
}

function emscripten_realloc_buffer(size) {
 try {
  var newBuffer = new ArrayBuffer(size);
  if (newBuffer.byteLength != size) return false;
  new Int8Array(newBuffer).set(HEAP8);
 } catch (e) {
  return false;
 }
 Module["_emscripten_replace_memory"](newBuffer);
 HEAP8 = new Int8Array(newBuffer);
 HEAP16 = new Int16Array(newBuffer);
 HEAP32 = new Int32Array(newBuffer);
 HEAPU8 = new Uint8Array(newBuffer);
 HEAPU16 = new Uint16Array(newBuffer);
 HEAPU32 = new Uint32Array(newBuffer);
 HEAPF32 = new Float32Array(newBuffer);
 HEAPF64 = new Float64Array(newBuffer);
 buffer = newBuffer;
 return newBuffer;
}

function _emscripten_resize_heap(requestedSize) {
 var oldSize = _emscripten_get_heap_size();
 var PAGE_MULTIPLE = 16777216;
 var LIMIT = 2147483648 - PAGE_MULTIPLE;
 if (requestedSize > LIMIT) {
  return false;
 }
 var MIN_TOTAL_MEMORY = 16777216;
 var newSize = Math.max(oldSize, MIN_TOTAL_MEMORY);
 while (newSize < requestedSize) {
  if (newSize <= 536870912) {
   newSize = alignUp(2 * newSize, PAGE_MULTIPLE);
  } else {
   newSize = Math.min(alignUp((3 * newSize + 2147483648) / 4, PAGE_MULTIPLE), LIMIT);
  }
 }
 var replacement = emscripten_realloc_buffer(newSize);
 if (!replacement || replacement.byteLength != newSize) {
  return false;
 }
 updateGlobalBuffer(replacement);
 updateGlobalBufferViews();
 TOTAL_MEMORY = newSize;
 HEAPU32[DYNAMICTOP_PTR >> 2] = requestedSize;
 return true;
}

function _emscripten_run_script_int(ptr) {
 return eval(UTF8ToString(ptr)) | 0;
}

function _emscripten_run_script_string(ptr) {
 var s = eval(UTF8ToString(ptr)) + "";
 var me = _emscripten_run_script_string;
 var len = lengthBytesUTF8(s);
 if (!me.bufferSize || me.bufferSize < len + 1) {
  if (me.bufferSize) _free(me.buffer);
  me.bufferSize = len + 1;
  me.buffer = _malloc(me.bufferSize);
 }
 stringToUTF8(s, me.buffer, me.bufferSize);
 return me.buffer;
}

function _exit(status) {
 exit(status);
}

function _getenv(name) {
 if (name === 0) return 0;
 name = UTF8ToString(name);
 if (!ENV.hasOwnProperty(name)) return 0;
 if (_getenv.ret) _free(_getenv.ret);
 _getenv.ret = allocateUTF8(ENV[name]);
 return _getenv.ret;
}

var ___tm_current = 16592;

var ___tm_timezone = (stringToUTF8("GMT", 16640, 4), 16640);

function _gmtime_r(time, tmPtr) {
 var date = new Date(HEAP32[time >> 2] * 1e3);
 HEAP32[tmPtr >> 2] = date.getUTCSeconds();
 HEAP32[tmPtr + 4 >> 2] = date.getUTCMinutes();
 HEAP32[tmPtr + 8 >> 2] = date.getUTCHours();
 HEAP32[tmPtr + 12 >> 2] = date.getUTCDate();
 HEAP32[tmPtr + 16 >> 2] = date.getUTCMonth();
 HEAP32[tmPtr + 20 >> 2] = date.getUTCFullYear() - 1900;
 HEAP32[tmPtr + 24 >> 2] = date.getUTCDay();
 HEAP32[tmPtr + 36 >> 2] = 0;
 HEAP32[tmPtr + 32 >> 2] = 0;
 var start = Date.UTC(date.getUTCFullYear(), 0, 1, 0, 0, 0, 0);
 var yday = (date.getTime() - start) / (1e3 * 60 * 60 * 24) | 0;
 HEAP32[tmPtr + 28 >> 2] = yday;
 HEAP32[tmPtr + 40 >> 2] = ___tm_timezone;
 return tmPtr;
}

function _gmtime(time) {
 return _gmtime_r(time, ___tm_current);
}

function _llvm_log10_f32(x) {
 return Math.log(x) / Math.LN10;
}

function _llvm_log10_f64(a0) {
 return _llvm_log10_f32(a0);
}

function _tzset() {
 if (_tzset.called) return;
 _tzset.called = true;
 HEAP32[__get_timezone() >> 2] = new Date().getTimezoneOffset() * 60;
 var winter = new Date(2e3, 0, 1);
 var summer = new Date(2e3, 6, 1);
 HEAP32[__get_daylight() >> 2] = Number(winter.getTimezoneOffset() != summer.getTimezoneOffset());
 function extractZone(date) {
  var match = date.toTimeString().match(/\(([A-Za-z ]+)\)$/);
  return match ? match[1] : "GMT";
 }
 var winterName = extractZone(winter);
 var summerName = extractZone(summer);
 var winterNamePtr = allocate(intArrayFromString(winterName), "i8", ALLOC_NORMAL);
 var summerNamePtr = allocate(intArrayFromString(summerName), "i8", ALLOC_NORMAL);
 if (summer.getTimezoneOffset() < winter.getTimezoneOffset()) {
  HEAP32[__get_tzname() >> 2] = winterNamePtr;
  HEAP32[__get_tzname() + 4 >> 2] = summerNamePtr;
 } else {
  HEAP32[__get_tzname() >> 2] = summerNamePtr;
  HEAP32[__get_tzname() + 4 >> 2] = winterNamePtr;
 }
}

function _localtime_r(time, tmPtr) {
 _tzset();
 var date = new Date(HEAP32[time >> 2] * 1e3);
 HEAP32[tmPtr >> 2] = date.getSeconds();
 HEAP32[tmPtr + 4 >> 2] = date.getMinutes();
 HEAP32[tmPtr + 8 >> 2] = date.getHours();
 HEAP32[tmPtr + 12 >> 2] = date.getDate();
 HEAP32[tmPtr + 16 >> 2] = date.getMonth();
 HEAP32[tmPtr + 20 >> 2] = date.getFullYear() - 1900;
 HEAP32[tmPtr + 24 >> 2] = date.getDay();
 var start = new Date(date.getFullYear(), 0, 1);
 var yday = (date.getTime() - start.getTime()) / (1e3 * 60 * 60 * 24) | 0;
 HEAP32[tmPtr + 28 >> 2] = yday;
 HEAP32[tmPtr + 36 >> 2] = -(date.getTimezoneOffset() * 60);
 var summerOffset = new Date(2e3, 6, 1).getTimezoneOffset();
 var winterOffset = start.getTimezoneOffset();
 var dst = (summerOffset != winterOffset && date.getTimezoneOffset() == Math.min(winterOffset, summerOffset)) | 0;
 HEAP32[tmPtr + 32 >> 2] = dst;
 var zonePtr = HEAP32[__get_tzname() + (dst ? 4 : 0) >> 2];
 HEAP32[tmPtr + 40 >> 2] = zonePtr;
 return tmPtr;
}

function _localtime(time) {
 return _localtime_r(time, ___tm_current);
}

function _longjmp(env, value) {
 _setThrew(env, value || 1);
 throw "longjmp";
}

function _emscripten_memcpy_big(dest, src, num) {
 HEAPU8.set(HEAPU8.subarray(src, src + num), dest);
}

function _mktime(tmPtr) {
 _tzset();
 var date = new Date(HEAP32[tmPtr + 20 >> 2] + 1900, HEAP32[tmPtr + 16 >> 2], HEAP32[tmPtr + 12 >> 2], HEAP32[tmPtr + 8 >> 2], HEAP32[tmPtr + 4 >> 2], HEAP32[tmPtr >> 2], 0);
 var dst = HEAP32[tmPtr + 32 >> 2];
 var guessedOffset = date.getTimezoneOffset();
 var start = new Date(date.getFullYear(), 0, 1);
 var summerOffset = new Date(2e3, 6, 1).getTimezoneOffset();
 var winterOffset = start.getTimezoneOffset();
 var dstOffset = Math.min(winterOffset, summerOffset);
 if (dst < 0) {
  HEAP32[tmPtr + 32 >> 2] = Number(summerOffset != winterOffset && dstOffset == guessedOffset);
 } else if (dst > 0 != (dstOffset == guessedOffset)) {
  var nonDstOffset = Math.max(winterOffset, summerOffset);
  var trueOffset = dst > 0 ? dstOffset : nonDstOffset;
  date.setTime(date.getTime() + (trueOffset - guessedOffset) * 6e4);
 }
 HEAP32[tmPtr + 24 >> 2] = date.getDay();
 var yday = (date.getTime() - start.getTime()) / (1e3 * 60 * 60 * 24) | 0;
 HEAP32[tmPtr + 28 >> 2] = yday;
 return date.getTime() / 1e3 | 0;
}

function __isLeapYear(year) {
 return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}

function __arraySum(array, index) {
 var sum = 0;
 for (var i = 0; i <= index; sum += array[i++]) ;
 return sum;
}

var __MONTH_DAYS_LEAP = [ 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];

var __MONTH_DAYS_REGULAR = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];

function __addDays(date, days) {
 var newDate = new Date(date.getTime());
 while (days > 0) {
  var leap = __isLeapYear(newDate.getFullYear());
  var currentMonth = newDate.getMonth();
  var daysInCurrentMonth = (leap ? __MONTH_DAYS_LEAP : __MONTH_DAYS_REGULAR)[currentMonth];
  if (days > daysInCurrentMonth - newDate.getDate()) {
   days -= daysInCurrentMonth - newDate.getDate() + 1;
   newDate.setDate(1);
   if (currentMonth < 11) {
    newDate.setMonth(currentMonth + 1);
   } else {
    newDate.setMonth(0);
    newDate.setFullYear(newDate.getFullYear() + 1);
   }
  } else {
   newDate.setDate(newDate.getDate() + days);
   return newDate;
  }
 }
 return newDate;
}

function _strftime(s, maxsize, format, tm) {
 var tm_zone = HEAP32[tm + 40 >> 2];
 var date = {
  tm_sec: HEAP32[tm >> 2],
  tm_min: HEAP32[tm + 4 >> 2],
  tm_hour: HEAP32[tm + 8 >> 2],
  tm_mday: HEAP32[tm + 12 >> 2],
  tm_mon: HEAP32[tm + 16 >> 2],
  tm_year: HEAP32[tm + 20 >> 2],
  tm_wday: HEAP32[tm + 24 >> 2],
  tm_yday: HEAP32[tm + 28 >> 2],
  tm_isdst: HEAP32[tm + 32 >> 2],
  tm_gmtoff: HEAP32[tm + 36 >> 2],
  tm_zone: tm_zone ? UTF8ToString(tm_zone) : ""
 };
 var pattern = UTF8ToString(format);
 var EXPANSION_RULES_1 = {
  "%c": "%a %b %d %H:%M:%S %Y",
  "%D": "%m/%d/%y",
  "%F": "%Y-%m-%d",
  "%h": "%b",
  "%r": "%I:%M:%S %p",
  "%R": "%H:%M",
  "%T": "%H:%M:%S",
  "%x": "%m/%d/%y",
  "%X": "%H:%M:%S"
 };
 for (var rule in EXPANSION_RULES_1) {
  pattern = pattern.replace(new RegExp(rule, "g"), EXPANSION_RULES_1[rule]);
 }
 var WEEKDAYS = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];
 var MONTHS = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
 function leadingSomething(value, digits, character) {
  var str = typeof value === "number" ? value.toString() : value || "";
  while (str.length < digits) {
   str = character[0] + str;
  }
  return str;
 }
 function leadingNulls(value, digits) {
  return leadingSomething(value, digits, "0");
 }
 function compareByDay(date1, date2) {
  function sgn(value) {
   return value < 0 ? -1 : value > 0 ? 1 : 0;
  }
  var compare;
  if ((compare = sgn(date1.getFullYear() - date2.getFullYear())) === 0) {
   if ((compare = sgn(date1.getMonth() - date2.getMonth())) === 0) {
    compare = sgn(date1.getDate() - date2.getDate());
   }
  }
  return compare;
 }
 function getFirstWeekStartDate(janFourth) {
  switch (janFourth.getDay()) {
  case 0:
   return new Date(janFourth.getFullYear() - 1, 11, 29);

  case 1:
   return janFourth;

  case 2:
   return new Date(janFourth.getFullYear(), 0, 3);

  case 3:
   return new Date(janFourth.getFullYear(), 0, 2);

  case 4:
   return new Date(janFourth.getFullYear(), 0, 1);

  case 5:
   return new Date(janFourth.getFullYear() - 1, 11, 31);

  case 6:
   return new Date(janFourth.getFullYear() - 1, 11, 30);
  }
 }
 function getWeekBasedYear(date) {
  var thisDate = __addDays(new Date(date.tm_year + 1900, 0, 1), date.tm_yday);
  var janFourthThisYear = new Date(thisDate.getFullYear(), 0, 4);
  var janFourthNextYear = new Date(thisDate.getFullYear() + 1, 0, 4);
  var firstWeekStartThisYear = getFirstWeekStartDate(janFourthThisYear);
  var firstWeekStartNextYear = getFirstWeekStartDate(janFourthNextYear);
  if (compareByDay(firstWeekStartThisYear, thisDate) <= 0) {
   if (compareByDay(firstWeekStartNextYear, thisDate) <= 0) {
    return thisDate.getFullYear() + 1;
   } else {
    return thisDate.getFullYear();
   }
  } else {
   return thisDate.getFullYear() - 1;
  }
 }
 var EXPANSION_RULES_2 = {
  "%a": function(date) {
   return WEEKDAYS[date.tm_wday].substring(0, 3);
  },
  "%A": function(date) {
   return WEEKDAYS[date.tm_wday];
  },
  "%b": function(date) {
   return MONTHS[date.tm_mon].substring(0, 3);
  },
  "%B": function(date) {
   return MONTHS[date.tm_mon];
  },
  "%C": function(date) {
   var year = date.tm_year + 1900;
   return leadingNulls(year / 100 | 0, 2);
  },
  "%d": function(date) {
   return leadingNulls(date.tm_mday, 2);
  },
  "%e": function(date) {
   return leadingSomething(date.tm_mday, 2, " ");
  },
  "%g": function(date) {
   return getWeekBasedYear(date).toString().substring(2);
  },
  "%G": function(date) {
   return getWeekBasedYear(date);
  },
  "%H": function(date) {
   return leadingNulls(date.tm_hour, 2);
  },
  "%I": function(date) {
   var twelveHour = date.tm_hour;
   if (twelveHour == 0) twelveHour = 12; else if (twelveHour > 12) twelveHour -= 12;
   return leadingNulls(twelveHour, 2);
  },
  "%j": function(date) {
   return leadingNulls(date.tm_mday + __arraySum(__isLeapYear(date.tm_year + 1900) ? __MONTH_DAYS_LEAP : __MONTH_DAYS_REGULAR, date.tm_mon - 1), 3);
  },
  "%m": function(date) {
   return leadingNulls(date.tm_mon + 1, 2);
  },
  "%M": function(date) {
   return leadingNulls(date.tm_min, 2);
  },
  "%n": function() {
   return "\n";
  },
  "%p": function(date) {
   if (date.tm_hour >= 0 && date.tm_hour < 12) {
    return "AM";
   } else {
    return "PM";
   }
  },
  "%S": function(date) {
   return leadingNulls(date.tm_sec, 2);
  },
  "%t": function() {
   return "\t";
  },
  "%u": function(date) {
   var day = new Date(date.tm_year + 1900, date.tm_mon + 1, date.tm_mday, 0, 0, 0, 0);
   return day.getDay() || 7;
  },
  "%U": function(date) {
   var janFirst = new Date(date.tm_year + 1900, 0, 1);
   var firstSunday = janFirst.getDay() === 0 ? janFirst : __addDays(janFirst, 7 - janFirst.getDay());
   var endDate = new Date(date.tm_year + 1900, date.tm_mon, date.tm_mday);
   if (compareByDay(firstSunday, endDate) < 0) {
    var februaryFirstUntilEndMonth = __arraySum(__isLeapYear(endDate.getFullYear()) ? __MONTH_DAYS_LEAP : __MONTH_DAYS_REGULAR, endDate.getMonth() - 1) - 31;
    var firstSundayUntilEndJanuary = 31 - firstSunday.getDate();
    var days = firstSundayUntilEndJanuary + februaryFirstUntilEndMonth + endDate.getDate();
    return leadingNulls(Math.ceil(days / 7), 2);
   }
   return compareByDay(firstSunday, janFirst) === 0 ? "01" : "00";
  },
  "%V": function(date) {
   var janFourthThisYear = new Date(date.tm_year + 1900, 0, 4);
   var janFourthNextYear = new Date(date.tm_year + 1901, 0, 4);
   var firstWeekStartThisYear = getFirstWeekStartDate(janFourthThisYear);
   var firstWeekStartNextYear = getFirstWeekStartDate(janFourthNextYear);
   var endDate = __addDays(new Date(date.tm_year + 1900, 0, 1), date.tm_yday);
   if (compareByDay(endDate, firstWeekStartThisYear) < 0) {
    return "53";
   }
   if (compareByDay(firstWeekStartNextYear, endDate) <= 0) {
    return "01";
   }
   var daysDifference;
   if (firstWeekStartThisYear.getFullYear() < date.tm_year + 1900) {
    daysDifference = date.tm_yday + 32 - firstWeekStartThisYear.getDate();
   } else {
    daysDifference = date.tm_yday + 1 - firstWeekStartThisYear.getDate();
   }
   return leadingNulls(Math.ceil(daysDifference / 7), 2);
  },
  "%w": function(date) {
   var day = new Date(date.tm_year + 1900, date.tm_mon + 1, date.tm_mday, 0, 0, 0, 0);
   return day.getDay();
  },
  "%W": function(date) {
   var janFirst = new Date(date.tm_year, 0, 1);
   var firstMonday = janFirst.getDay() === 1 ? janFirst : __addDays(janFirst, janFirst.getDay() === 0 ? 1 : 7 - janFirst.getDay() + 1);
   var endDate = new Date(date.tm_year + 1900, date.tm_mon, date.tm_mday);
   if (compareByDay(firstMonday, endDate) < 0) {
    var februaryFirstUntilEndMonth = __arraySum(__isLeapYear(endDate.getFullYear()) ? __MONTH_DAYS_LEAP : __MONTH_DAYS_REGULAR, endDate.getMonth() - 1) - 31;
    var firstMondayUntilEndJanuary = 31 - firstMonday.getDate();
    var days = firstMondayUntilEndJanuary + februaryFirstUntilEndMonth + endDate.getDate();
    return leadingNulls(Math.ceil(days / 7), 2);
   }
   return compareByDay(firstMonday, janFirst) === 0 ? "01" : "00";
  },
  "%y": function(date) {
   return (date.tm_year + 1900).toString().substring(2);
  },
  "%Y": function(date) {
   return date.tm_year + 1900;
  },
  "%z": function(date) {
   var off = date.tm_gmtoff;
   var ahead = off >= 0;
   off = Math.abs(off) / 60;
   off = off / 60 * 100 + off % 60;
   return (ahead ? "+" : "-") + String("0000" + off).slice(-4);
  },
  "%Z": function(date) {
   return date.tm_zone;
  },
  "%%": function() {
   return "%";
  }
 };
 for (var rule in EXPANSION_RULES_2) {
  if (pattern.indexOf(rule) >= 0) {
   pattern = pattern.replace(new RegExp(rule, "g"), EXPANSION_RULES_2[rule](date));
  }
 }
 var bytes = intArrayFromString(pattern, false);
 if (bytes.length > maxsize) {
  return 0;
 }
 writeArrayToMemory(bytes, s);
 return bytes.length - 1;
}

function _system(command) {
 ___setErrNo(11);
 return -1;
}

function _time(ptr) {
 var ret = Date.now() / 1e3 | 0;
 if (ptr) {
  HEAP32[ptr >> 2] = ret;
 }
 return ret;
}

if (typeof dateNow !== "undefined") {
 _emscripten_get_now = dateNow;
} else if (typeof self === "object" && self["performance"] && typeof self["performance"]["now"] === "function") {
 _emscripten_get_now = function() {
  return self["performance"]["now"]();
 };
} else if (typeof performance === "object" && typeof performance["now"] === "function") {
 _emscripten_get_now = function() {
  return performance["now"]();
 };
} else {
 _emscripten_get_now = Date.now;
}

var ASSERTIONS = false;

function intArrayFromString(stringy, dontAddNull, length) {
 var len = length > 0 ? length : lengthBytesUTF8(stringy) + 1;
 var u8array = new Array(len);
 var numBytesWritten = stringToUTF8Array(stringy, u8array, 0, u8array.length);
 if (dontAddNull) u8array.length = numBytesWritten;
 return u8array;
}

function intArrayToString(array) {
 var ret = [];
 for (var i = 0; i < array.length; i++) {
  var chr = array[i];
  if (chr > 255) {
   if (ASSERTIONS) {
    assert(false, "Character code " + chr + " (" + String.fromCharCode(chr) + ")  at offset " + i + " not in 0x00-0xFF.");
   }
   chr &= 255;
  }
  ret.push(String.fromCharCode(chr));
 }
 return ret.join("");
}

var decodeBase64 = typeof atob === "function" ? atob : function(input) {
 var keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
 var output = "";
 var chr1, chr2, chr3;
 var enc1, enc2, enc3, enc4;
 var i = 0;
 input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
 do {
  enc1 = keyStr.indexOf(input.charAt(i++));
  enc2 = keyStr.indexOf(input.charAt(i++));
  enc3 = keyStr.indexOf(input.charAt(i++));
  enc4 = keyStr.indexOf(input.charAt(i++));
  chr1 = enc1 << 2 | enc2 >> 4;
  chr2 = (enc2 & 15) << 4 | enc3 >> 2;
  chr3 = (enc3 & 3) << 6 | enc4;
  output = output + String.fromCharCode(chr1);
  if (enc3 !== 64) {
   output = output + String.fromCharCode(chr2);
  }
  if (enc4 !== 64) {
   output = output + String.fromCharCode(chr3);
  }
 } while (i < input.length);
 return output;
};

function intArrayFromBase64(s) {
 try {
  var decoded = decodeBase64(s);
  var bytes = new Uint8Array(decoded.length);
  for (var i = 0; i < decoded.length; ++i) {
   bytes[i] = decoded.charCodeAt(i);
  }
  return bytes;
 } catch (_) {
  throw new Error("Converting base64 string to bytes failed.");
 }
}

function tryParseAsDataURI(filename) {
 if (!isDataURI(filename)) {
  return;
 }
 return intArrayFromBase64(filename.slice(dataURIPrefix.length));
}

function invoke_vii(index, a1, a2) {
 var sp = stackSave();
 try {
  dynCall_vii(index, a1, a2);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0 && e !== "longjmp") throw e;
  _setThrew(1, 0);
 }
}

function jsCall_ii(index, a1) {
 return functionPointers[index](a1);
}

function jsCall_iii(index, a1, a2) {
 return functionPointers[index](a1, a2);
}

function jsCall_iiii(index, a1, a2, a3) {
 return functionPointers[index](a1, a2, a3);
}

function jsCall_iiiii(index, a1, a2, a3, a4) {
 return functionPointers[index](a1, a2, a3, a4);
}

function jsCall_vii(index, a1, a2) {
 functionPointers[index](a1, a2);
}

var asmGlobalArg = {
 "Math": Math,
 "Int8Array": Int8Array,
 "Int16Array": Int16Array,
 "Int32Array": Int32Array,
 "Uint8Array": Uint8Array,
 "Uint16Array": Uint16Array,
 "Float32Array": Float32Array,
 "Float64Array": Float64Array,
 "NaN": NaN,
 Infinity: Infinity
};

var asmLibraryArg = {
 "a": abort,
 "b": setTempRet0,
 "c": getTempRet0,
 "d": invoke_vii,
 "e": jsCall_ii,
 "f": jsCall_iii,
 "g": jsCall_iiii,
 "h": jsCall_iiiii,
 "i": jsCall_vii,
 "j": ___buildEnvironment,
 "k": ___clock_gettime,
 "l": ___lock,
 "m": ___map_file,
 "n": ___setErrNo,
 "o": ___syscall10,
 "p": ___syscall140,
 "q": ___syscall145,
 "r": ___syscall146,
 "s": ___syscall196,
 "t": ___syscall221,
 "u": ___syscall330,
 "v": ___syscall38,
 "w": ___syscall40,
 "x": ___syscall5,
 "y": ___syscall54,
 "z": ___syscall6,
 "A": ___syscall63,
 "B": ___syscall91,
 "C": ___unlock,
 "D": __addDays,
 "E": __arraySum,
 "F": __isLeapYear,
 "G": _abort,
 "H": _clock,
 "I": _clock_gettime,
 "J": _difftime,
 "K": _emscripten_get_heap_size,
 "L": _emscripten_get_now,
 "M": _emscripten_get_now_is_monotonic,
 "N": _emscripten_memcpy_big,
 "O": _emscripten_resize_heap,
 "P": _emscripten_run_script_int,
 "Q": _emscripten_run_script_string,
 "R": _exit,
 "S": _getenv,
 "T": _gmtime,
 "U": _gmtime_r,
 "V": _llvm_log10_f32,
 "W": _llvm_log10_f64,
 "X": _localtime,
 "Y": _localtime_r,
 "Z": _longjmp,
 "_": _mktime,
 "$": _strftime,
 "aa": _system,
 "ab": _time,
 "ac": _tzset,
 "ad": abortOnCannotGrowMemory,
 "ae": emscripten_realloc_buffer,
 "af": flush_NO_FILESYSTEM,
 "ag": tempDoublePtr,
 "ah": DYNAMICTOP_PTR
};

// EMSCRIPTEN_START_ASM


var asm = (/** @suppress {uselessCode} */ function(global,env,buffer) {
"almost asm";var a=new global.Int8Array(buffer),b=new global.Int16Array(buffer),c=new global.Int32Array(buffer),d=new global.Uint8Array(buffer),e=new global.Uint16Array(buffer),f=new global.Float32Array(buffer),g=new global.Float64Array(buffer),h=env.ag|0,i=env.ah|0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0.0,r=global.NaN,s=global.Infinity,t=global.Math.floor,u=global.Math.abs,v=global.Math.sqrt,w=global.Math.pow,x=global.Math.cos,y=global.Math.sin,z=global.Math.tan,A=global.Math.acos,B=global.Math.asin,C=global.Math.atan,D=global.Math.atan2,E=global.Math.exp,F=global.Math.log,G=global.Math.ceil,H=global.Math.imul,I=global.Math.clz32,J=env.a,K=env.b,L=env.c,M=env.d,N=env.e,O=env.f,P=env.g,Q=env.h,R=env.i,S=env.j,T=env.k,U=env.l,V=env.m,W=env.n,X=env.o,Y=env.p,Z=env.q,_=env.r,$=env.s,aa=env.t,ba=env.u,ca=env.v,da=env.w,ea=env.x,fa=env.y,ga=env.z,ha=env.A,ia=env.B,ja=env.C,ka=env.D,la=env.E,ma=env.F,na=env.G,oa=env.H,pa=env.I,qa=env.J,ra=env.K,sa=env.L,ta=env.M,ua=env.N,va=env.O,wa=env.P,xa=env.Q,ya=env.R,za=env.S,Aa=env.T,Ba=env.U,Ca=env.V,Da=env.W,Ea=env.X,Fa=env.Y,Ga=env.Z,Ha=env._,Ia=env.$,Ja=env.aa,Ka=env.ab,La=env.ac,Ma=env.ad,Na=env.ae,Oa=env.af,Pa=16752,Qa=5259632,Ra=0.0;function Sa(newBuffer){a=new Int8Array(newBuffer);d=new Uint8Array(newBuffer);b=new Int16Array(newBuffer);e=new Uint16Array(newBuffer);c=new Int32Array(newBuffer);f=new Float32Array(newBuffer);g=new Float64Array(newBuffer);buffer=newBuffer;return true}
// EMSCRIPTEN_START_FUNCS
function Ee(b,e){b=b|0;e=e|0;var f=0,h=0,i=0,j=0,k=0,l=0,m=0;f=Pa;Pa=Pa+16|0;h=f;switch(c[e+8>>2]&63){case 3:{g[h>>3]=+g[e>>3]+1.0;i=(c[h+4>>2]|0)+(c[h>>2]|0)|0;h=0-i|0;j=(c[b+16>>2]|0)+(((((i|0)<0?((i|0)==(h|0)?0:h):i)|0)%((1<<d[b+7>>0])+-1|1|0)|0)<<5)|0;Pa=f;return j|0}case 20:{i=c[e>>2]|0;h=i+6|0;if(!(a[h>>0]|0)){k=i+8|0;l=ye(i+16|0,c[i+12>>2]|0,c[k>>2]|0)|0;c[k>>2]=l;a[h>>0]=1;m=c[e>>2]|0}else m=i;j=(c[b+16>>2]|0)+(((1<<d[b+7>>0])+-1&c[m+8>>2])<<5)|0;Pa=f;return j|0}case 4:{j=(c[b+16>>2]|0)+(((1<<d[b+7>>0])+-1&c[(c[e>>2]|0)+8>>2])<<5)|0;Pa=f;return j|0}case 1:{j=(c[b+16>>2]|0)+(((1<<d[b+7>>0])+-1&c[e>>2])<<5)|0;Pa=f;return j|0}case 2:{j=(c[b+16>>2]|0)+((((c[e>>2]|0)>>>0)%(((1<<d[b+7>>0])+-1|1)>>>0)|0)<<5)|0;Pa=f;return j|0}case 22:{j=(c[b+16>>2]|0)+((((c[e>>2]|0)>>>0)%(((1<<d[b+7>>0])+-1|1)>>>0)|0)<<5)|0;Pa=f;return j|0}default:{j=(c[b+16>>2]|0)+((((c[e>>2]|0)>>>0)%(((1<<d[b+7>>0])+-1|1)>>>0)|0)<<5)|0;Pa=f;return j|0}}return 0}function Fe(b,e,f,h){b=b|0;e=e|0;f=f|0;h=h|0;var i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0,z=0,A=0,B=0.0,C=0,D=0,E=0.0,F=0,G=0,H=0;i=Pa;Pa=Pa+32|0;j=i+16|0;k=i;l=e+28|0;m=c[l>>2]|0;n=e+7|0;o=a[n>>0]|0;p=o&255;q=e+16|0;r=c[q>>2]|0;if((m|0)<(f|0)){if((f+1|0)>>>0>268435455)Gd(b);s=e+12|0;t=Hd(b,c[s>>2]|0,m<<4,f<<4)|0;c[s>>2]=t;s=c[l>>2]|0;if((s|0)<(f|0)){u=s;do{c[t+(u<<4)+8>>2]=0;u=u+1|0}while((u|0)!=(f|0))}c[l>>2]=f}if(!h){c[q>>2]=15808;v=0;w=0;x=15808}else{u=Kd(h)|0;if((u|0)>30)Dc(b,7598,j);j=1<<u;if((j+1|0)>>>0>134217727)Gd(b);h=Hd(b,0,0,j<<5)|0;c[q>>2]=h;t=0;s=h;do{c[s+(t<<5)+28>>2]=0;c[s+(t<<5)+24>>2]=0;c[s+(t<<5)+8>>2]=0;t=t+1|0;s=c[q>>2]|0}while((t|0)<(j|0));v=j;w=u&255;x=s}a[n>>0]=w;c[e+20>>2]=x+(v<<5);do if((m|0)>(f|0)){c[l>>2]=f;v=e+12|0;x=k+8|0;w=k+4|0;s=f;while(1){u=c[v>>2]|0;j=u+(s<<4)+8|0;if(!(c[j>>2]|0))y=s+1|0;else{t=u+(s<<4)|0;u=s+1|0;a:do if(s>>>0<(c[l>>2]|0)>>>0){z=t;A=27}else{B=+(u|0);g[k>>3]=B+1.0;h=(c[w>>2]|0)+(c[k>>2]|0)|0;C=0-h|0;D=(c[q>>2]|0)+(((((h|0)<0?((h|0)==(C|0)?0:C):h)|0)%((1<<(d[n>>0]|0))+-1|1|0)|0)<<5)|0;while(1){if((c[D+24>>2]|0)==3?+g[D+16>>3]==B:0)break;h=c[D+28>>2]|0;if(!h){E=B;A=29;break a}else D=h}z=D;A=27}while(0);if((A|0)==27){A=0;if((z|0)==15792){E=+(u|0);A=29}else F=z}if((A|0)==29){A=0;g[k>>3]=E;c[x>>2]=3;F=Ge(b,e,k)|0}h=t;C=c[h+4>>2]|0;G=F;c[G>>2]=c[h>>2];c[G+4>>2]=C;c[F+8>>2]=c[j>>2];y=u}if((y|0)==(m|0))break;else s=y}if((f+1|0)>>>0>268435455)Gd(b);else{s=Hd(b,c[v>>2]|0,m<<4,f<<4)|0;c[v>>2]=s;break}}while(0);f=1<<p;if(o<<24>>24!=31){o=f;do{p=o;o=o+-1|0;m=r+(o<<5)+8|0;if(c[m>>2]|0){y=r+(o<<5)+16|0;F=He(e,y)|0;if((F|0)==15792)H=Ge(b,e,y)|0;else H=F;F=r+(o<<5)|0;y=c[F+4>>2]|0;k=H;c[k>>2]=c[F>>2];c[k+4>>2]=y;c[H+8>>2]=c[m>>2]}}while((p|0)>1)}if((r|0)==15808){Pa=i;return}Hd(b,r,f<<5,0)|0;Pa=i;return}function Ge(b,e,f){b=b|0;e=e|0;f=f|0;var h=0,i=0,j=0,k=0,l=0,m=0,n=0.0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0,z=0,A=0,B=0,C=0,D=0,E=0,F=0,G=0,H=0,I=0,J=0,K=0,L=0,M=0,N=0,O=0;h=Pa;Pa=Pa+160|0;i=h+144|0;j=h+128|0;k=h;l=f+8|0;switch(c[l>>2]|0){case 0:{Dc(b,7613,h+136|0);break}case 3:{m=3;break}default:{}}if((m|0)==3?(n=+g[f>>3],!(n==n&0.0==0.0)):0)Dc(b,7632,i);i=Ee(e,f)|0;m=i+8|0;a:do if((i|0)==15808|(c[m>>2]|0)!=0){o=e+20|0;p=c[o>>2]|0;q=e+16|0;r=c[q>>2]|0;b:do if(p>>>0>r>>>0){s=p;while(1){t=s+-32|0;c[o>>2]=t;if(!(c[s+-8>>2]|0))break;if(t>>>0>r>>>0)s=t;else break b}u=Ee(e,i+16|0)|0;if((u|0)==(i|0)){v=i+28|0;c[s+-4>>2]=c[v>>2];c[v>>2]=t;w=t;break a}v=u;while(1){u=c[v+28>>2]|0;if((u|0)==(i|0))break;else v=u}c[v+28>>2]=t;c[t>>2]=c[i>>2];c[t+4>>2]=c[i+4>>2];c[t+8>>2]=c[i+8>>2];c[t+12>>2]=c[i+12>>2];c[t+16>>2]=c[i+16>>2];c[t+20>>2]=c[i+20>>2];c[t+24>>2]=c[i+24>>2];c[t+28>>2]=c[i+28>>2];c[i+28>>2]=0;c[m>>2]=0;w=i;break a}while(0);o=k;p=o+124|0;do{c[o>>2]=0;o=o+4|0}while((o|0)<(p|0));o=e+12|0;p=c[e+28>>2]|0;s=1;u=0;x=1;y=0;while(1){if((x|0)>(p|0))if((s|0)>(p|0)){z=u;break}else A=p;else A=x;if((s|0)>(A|0)){B=0;C=s}else{D=c[o>>2]|0;E=0;F=s;while(1){G=E+((c[D+(F+-1<<4)+8>>2]|0)!=0&1)|0;H=F+1|0;if((F|0)<(A|0)){E=G;F=H}else{B=G;C=H;break}}}F=k+(y<<2)|0;c[F>>2]=(c[F>>2]|0)+B;F=B+u|0;y=y+1|0;if(y>>>0>=31){z=F;break}else{s=C;u=F;x=x<<1}}x=0;u=0;s=1<<(d[e+7>>0]|0);y=r;while(1){o=s+-1|0;if(!(c[y+(o<<5)+8>>2]|0)){I=u;J=x}else{if((c[y+(o<<5)+24>>2]|0)==3?(n=+g[y+(o<<5)+16>>3],g[j>>3]=n+6755399441055744.0,p=c[j>>2]|0,n==+(p|0)&(p+-1|0)>>>0<1073741824):0){F=k+((Kd(p)|0)<<2)|0;c[F>>2]=(c[F>>2]|0)+1;K=1}else K=0;I=u+1|0;J=K+x|0}if(!o)break;x=J;u=I;s=o;y=c[q>>2]|0}q=J+z|0;if((c[l>>2]|0)==3?(n=+g[f>>3],g[j>>3]=n+6755399441055744.0,y=c[j>>2]|0,n==+(y|0)&(y+-1|0)>>>0<1073741824):0){s=k+((Kd(y)|0)<<2)|0;c[s>>2]=(c[s>>2]|0)+1;L=1}else L=0;s=q+L|0;c:do if((s|0)>0){q=0;y=0;u=1;x=0;r=0;o=0;while(1){F=c[k+(x<<2)>>2]|0;p=(F|0)>0;E=F+y|0;y=p?E:y;F=p&(E|0)>(o|0);p=F?E:q;E=F?u:r;if((y|0)==(s|0)){M=E;N=p;break c}o=u&2147483647;if((o|0)>=(s|0)){M=E;N=p;break}else{q=p;u=u<<1;x=x+1|0;r=E}}}else{M=0;N=0}while(0);Fe(b,e,M,z+1+I-N|0);s=He(e,f)|0;if((s|0)!=15792){O=s;Pa=h;return O|0}O=Ge(b,e,f)|0;Pa=h;return O|0}else w=i;while(0);i=f;N=c[i+4>>2]|0;I=w+16|0;c[I>>2]=c[i>>2];c[I+4>>2]=N;c[w+24>>2]=c[l>>2];if((c[l>>2]&64|0?a[(c[f>>2]|0)+5>>0]&3:0)?a[e+5>>0]&4:0)ld(b,e);O=w;Pa=h;return O|0}function He(a,b){a=a|0;b=b|0;var e=0,f=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0.0,o=0.0;e=Pa;Pa=Pa+16|0;f=e;h=b+8|0;switch(c[h>>2]&63){case 4:{i=c[b>>2]|0;j=(c[a+16>>2]|0)+(((1<<(d[a+7>>0]|0))+-1&c[i+8>>2])<<5)|0;while(1){if((c[j+24>>2]|0)==68?(c[j+16>>2]|0)==(i|0):0)break;k=c[j+28>>2]|0;if(!k){l=15792;m=20;break}else j=k}if((m|0)==20){Pa=e;return l|0}l=j;Pa=e;return l|0}case 3:{n=+g[b>>3];g[f>>3]=n+6755399441055744.0;j=c[f>>2]|0;o=+(j|0);if(n==o){i=j+-1|0;if(i>>>0<(c[a+28>>2]|0)>>>0){l=(c[a+12>>2]|0)+(i<<4)|0;Pa=e;return l|0}g[f>>3]=o+1.0;i=(c[f+4>>2]|0)+(c[f>>2]|0)|0;f=0-i|0;j=(c[a+16>>2]|0)+(((((i|0)<0?((i|0)==(f|0)?0:f):i)|0)%((1<<(d[a+7>>0]|0))+-1|1|0)|0)<<5)|0;while(1){if((c[j+24>>2]|0)==3?+g[j+16>>3]==o:0)break;i=c[j+28>>2]|0;if(!i){l=15792;m=20;break}else j=i}if((m|0)==20){Pa=e;return l|0}l=j;Pa=e;return l|0}break}case 0:{l=15792;Pa=e;return l|0}default:{}}j=Ee(a,b)|0;while(1){if((c[j+24>>2]|0)==(c[h>>2]|0)?cf(0,j+16|0,b)|0:0)break;a=c[j+28>>2]|0;if(!a){l=15792;m=20;break}else j=a}if((m|0)==20){Pa=e;return l|0}l=j;Pa=e;return l|0}function Ie(a,b,e,f){a=a|0;b=b|0;e=e|0;f=f|0;var h=0,i=0,j=0,k=0,l=0,m=0.0,n=0,o=0,p=0,q=0.0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0,z=0,A=0,B=0,C=0,D=0,E=0;h=Pa;Pa=Pa+16|0;i=h;j=e+-1|0;a:do if(j>>>0<(c[b+28>>2]|0)>>>0){k=(c[b+12>>2]|0)+(j<<4)|0;l=8}else{m=+(e|0);g[i>>3]=m+1.0;n=(c[i+4>>2]|0)+(c[i>>2]|0)|0;o=0-n|0;p=(c[b+16>>2]|0)+(((((n|0)<0?((n|0)==(o|0)?0:o):n)|0)%((1<<(d[b+7>>0]|0))+-1|1|0)|0)<<5)|0;while(1){if((c[p+24>>2]|0)==3?+g[p+16>>3]==m:0)break;n=c[p+28>>2]|0;if(!n){q=m;break a}else p=n}k=p;l=8}while(0);do if((l|0)==8)if((k|0)==15792){q=+(e|0);break}else{r=k;s=f;t=s;u=c[t>>2]|0;v=s+4|0;w=v;x=c[w>>2]|0;y=r;z=y;c[z>>2]=u;A=y+4|0;B=A;c[B>>2]=x;C=f+8|0;D=c[C>>2]|0;E=r+8|0;c[E>>2]=D;Pa=h;return}while(0);g[i>>3]=q;c[i+8>>2]=3;r=Ge(a,b,i)|0;s=f;t=s;u=c[t>>2]|0;v=s+4|0;w=v;x=c[w>>2]|0;y=r;z=y;c[z>>2]=u;A=y+4|0;B=A;c[B>>2]=x;C=f+8|0;D=c[C>>2]|0;E=r+8|0;c[E>>2]=D;Pa=h;return}function Je(a,b,c){a=a|0;b=b|0;c=c|0;var d=0,e=0;d=He(b,c)|0;if((d|0)!=15792){e=d;return e|0}e=Ge(a,b,c)|0;return e|0}function Ke(a,b,e){a=a|0;b=b|0;e=e|0;var f=0;if((c[b+16>>2]|0)==15808)f=0;else f=1<<(d[b+7>>0]|0);Fe(a,b,e,f);return}function Le(b){b=b|0;var d=0;d=od(b,5,32,0,0)|0;c[d+8>>2]=0;a[d+6>>0]=-1;c[d+12>>2]=0;c[d+28>>2]=0;c[d+16>>2]=15808;a[d+7>>0]=0;c[d+20>>2]=15808;return d|0}function Me(a,b){a=a|0;b=b|0;var e=0;e=c[b+16>>2]|0;if((e|0)!=15808)Hd(a,e,32<<(d[b+7>>0]|0),0)|0;Hd(a,c[b+12>>2]|0,c[b+28>>2]<<4,0)|0;Hd(a,b,32,0)|0;return}function Ne(a,b){a=a|0;b=b|0;var e=0,f=0,h=0,i=0,j=0.0,k=0;e=Pa;Pa=Pa+16|0;f=e;h=b+-1|0;if(h>>>0<(c[a+28>>2]|0)>>>0){i=(c[a+12>>2]|0)+(h<<4)|0;Pa=e;return i|0}j=+(b|0);g[f>>3]=j+1.0;b=(c[f+4>>2]|0)+(c[f>>2]|0)|0;f=0-b|0;h=(c[a+16>>2]|0)+(((((b|0)<0?((b|0)==(f|0)?0:f):b)|0)%((1<<(d[a+7>>0]|0))+-1|1|0)|0)<<5)|0;while(1){if((c[h+24>>2]|0)==3?+g[h+16>>3]==j:0)break;a=c[h+28>>2]|0;if(!a){i=15792;k=8;break}else h=a}if((k|0)==8){Pa=e;return i|0}i=h;Pa=e;return i|0}function Oe(a,b){a=a|0;b=b|0;var e=0,f=0,g=0;e=(c[a+16>>2]|0)+(((1<<(d[a+7>>0]|0))+-1&c[b+8>>2])<<5)|0;while(1){if((c[e+24>>2]|0)==68?(c[e+16>>2]|0)==(b|0):0)break;a=c[e+28>>2]|0;if(!a){f=15792;g=6;break}else e=a}if((g|0)==6)return f|0;f=e;return f|0}function Pe(a){a=a|0;var b=0,e=0,f=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0.0,q=0,r=0,s=0,t=0,u=0,v=0;b=Pa;Pa=Pa+16|0;e=b;f=c[a+28>>2]|0;if(f|0?(h=c[a+12>>2]|0,(c[h+(f+-1<<4)+8>>2]|0)==0):0){if(f>>>0<=1){i=0;Pa=b;return i|0}j=0;k=f;while(1){l=(j+k|0)>>>1;m=(c[h+(l+-1<<4)+8>>2]|0)==0;k=m?l:k;n=m?j:l;if((k-n|0)>>>0<=1){i=n;break}else j=n}Pa=b;return i|0}j=c[a+16>>2]|0;if((j|0)==15808){i=f;Pa=b;return i|0}k=a+12|0;h=a+7|0;a=e+4|0;n=f;l=f+1|0;while(1){m=l+-1|0;a:do if(m>>>0<f>>>0)o=(c[k>>2]|0)+(m<<4)|0;else{p=+(l|0);g[e>>3]=p+1.0;q=(c[a>>2]|0)+(c[e>>2]|0)|0;r=0-q|0;s=j+(((((q|0)<0?((q|0)==(r|0)?0:r):q)|0)%((1<<(d[h>>0]|0))+-1|1|0)|0)<<5)|0;while(1){if((c[s+24>>2]|0)==3?+g[s+16>>3]==p:0)break;q=c[s+28>>2]|0;if(!q){o=15792;break a}else s=q}o=s}while(0);if(!(c[o+8>>2]|0))break;m=l<<1;if(m>>>0>2147483645){t=17;break}else{q=l;l=m;n=q}}if((t|0)==17){t=e+4|0;o=1;while(1){a=o+-1|0;b:do if(a>>>0<f>>>0)u=(c[k>>2]|0)+(a<<4)|0;else{p=+(o|0);g[e>>3]=p+1.0;q=(c[t>>2]|0)+(c[e>>2]|0)|0;m=0-q|0;r=j+(((((q|0)<0?((q|0)==(m|0)?0:m):q)|0)%((1<<(d[h>>0]|0))+-1|1|0)|0)<<5)|0;while(1){if((c[r+24>>2]|0)==3?+g[r+16>>3]==p:0)break;q=c[r+28>>2]|0;if(!q){u=15792;break b}else r=q}u=r}while(0);if(!(c[u+8>>2]|0)){i=a;break}else o=o+1|0}Pa=b;return i|0}if((l-n|0)>>>0<=1){i=n;Pa=b;return i|0}o=e+4|0;u=l;l=n;while(1){n=(u+l|0)>>>1;t=n+-1|0;c:do if(t>>>0<f>>>0)v=(c[k>>2]|0)+(t<<4)|0;else{p=+(n|0);g[e>>3]=p+1.0;s=(c[o>>2]|0)+(c[e>>2]|0)|0;q=0-s|0;m=j+(((((s|0)<0?((s|0)==(q|0)?0:q):s)|0)%((1<<(d[h>>0]|0))+-1|1|0)|0)<<5)|0;while(1){if((c[m+24>>2]|0)==3?+g[m+16>>3]==p:0)break;s=c[m+28>>2]|0;if(!s){v=15792;break c}else m=s}v=m}while(0);t=(c[v+8>>2]|0)==0;u=t?n:u;a=t?l:n;if((u-a|0)>>>0<=1){i=a;break}else l=a}Pa=b;return i|0}function Qe(b){b=b|0;var d=0,e=0;d=b+12|0;e=Be(b,13431)|0;c[(c[d>>2]|0)+184>>2]=e;e=(c[(c[d>>2]|0)+184>>2]|0)+5|0;a[e>>0]=a[e>>0]|32;e=Be(b,7694)|0;c[(c[d>>2]|0)+188>>2]=e;e=(c[(c[d>>2]|0)+188>>2]|0)+5|0;a[e>>0]=a[e>>0]|32;e=Be(b,12681)|0;c[(c[d>>2]|0)+192>>2]=e;e=(c[(c[d>>2]|0)+192>>2]|0)+5|0;a[e>>0]=a[e>>0]|32;e=Be(b,10376)|0;c[(c[d>>2]|0)+196>>2]=e;e=(c[(c[d>>2]|0)+196>>2]|0)+5|0;a[e>>0]=a[e>>0]|32;e=Be(b,7705)|0;c[(c[d>>2]|0)+200>>2]=e;e=(c[(c[d>>2]|0)+200>>2]|0)+5|0;a[e>>0]=a[e>>0]|32;e=Be(b,7711)|0;c[(c[d>>2]|0)+204>>2]=e;e=(c[(c[d>>2]|0)+204>>2]|0)+5|0;a[e>>0]=a[e>>0]|32;e=Be(b,7716)|0;c[(c[d>>2]|0)+208>>2]=e;e=(c[(c[d>>2]|0)+208>>2]|0)+5|0;a[e>>0]=a[e>>0]|32;e=Be(b,7722)|0;c[(c[d>>2]|0)+212>>2]=e;e=(c[(c[d>>2]|0)+212>>2]|0)+5|0;a[e>>0]=a[e>>0]|32;e=Be(b,7728)|0;c[(c[d>>2]|0)+216>>2]=e;e=(c[(c[d>>2]|0)+216>>2]|0)+5|0;a[e>>0]=a[e>>0]|32;e=Be(b,7734)|0;c[(c[d>>2]|0)+220>>2]=e;e=(c[(c[d>>2]|0)+220>>2]|0)+5|0;a[e>>0]=a[e>>0]|32;e=Be(b,7740)|0;c[(c[d>>2]|0)+224>>2]=e;e=(c[(c[d>>2]|0)+224>>2]|0)+5|0;a[e>>0]=a[e>>0]|32;e=Be(b,7746)|0;c[(c[d>>2]|0)+228>>2]=e;e=(c[(c[d>>2]|0)+228>>2]|0)+5|0;a[e>>0]=a[e>>0]|32;e=Be(b,7752)|0;c[(c[d>>2]|0)+232>>2]=e;e=(c[(c[d>>2]|0)+232>>2]|0)+5|0;a[e>>0]=a[e>>0]|32;e=Be(b,7758)|0;c[(c[d>>2]|0)+236>>2]=e;e=(c[(c[d>>2]|0)+236>>2]|0)+5|0;a[e>>0]=a[e>>0]|32;e=Be(b,7763)|0;c[(c[d>>2]|0)+240>>2]=e;e=(c[(c[d>>2]|0)+240>>2]|0)+5|0;a[e>>0]=a[e>>0]|32;e=Be(b,7768)|0;c[(c[d>>2]|0)+244>>2]=e;e=(c[(c[d>>2]|0)+244>>2]|0)+5|0;a[e>>0]=a[e>>0]|32;e=Be(b,7777)|0;c[(c[d>>2]|0)+248>>2]=e;e=(c[(c[d>>2]|0)+248>>2]|0)+5|0;a[e>>0]=a[e>>0]|32;return}function Re(b,e,f){b=b|0;e=e|0;f=f|0;var g=0,h=0;g=Oe(b,f)|0;if(c[g+8>>2]|0){h=g;return h|0}g=b+6|0;a[g>>0]=1<<e|(d[g>>0]|0);h=0;return h|0}function Se(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0;e=c[b+8>>2]|0;switch(e&15){case 5:{f=(c[b>>2]|0)+8|0;break}case 7:{f=(c[b>>2]|0)+8|0;break}default:f=(c[a+12>>2]|0)+252+((e&15)<<2)|0}e=c[f>>2]|0;if(!e){g=15792;return g|0}g=Oe(e,c[(c[a+12>>2]|0)+184+(d<<2)>>2]|0)|0;return g|0}function Te(b,d,e,f){b=b|0;d=d|0;e=e|0;f=f|0;var g=0,h=0,i=0,j=0,k=0,l=0;g=Pa;Pa=Pa+80|0;h=g+32|0;i=g;j=g+56|0;switch(a[f>>0]|0){case 61:case 64:{k=f+1|0;break}case 27:{k=7784;break}default:k=f}c[j+12>>2]=k;c[j>>2]=b;c[j+4>>2]=d;c[j+8>>2]=e;c[h>>2]=1635077147;a[h+4>>0]=82;a[h+5>>0]=0;a[h+6>>0]=1;a[h+7>>0]=4;a[h+8>>0]=4;a[h+9>>0]=4;a[h+10>>0]=8;e=h+12|0;a[h+11>>0]=0;a[e>>0]=a[7798]|0;a[e+1>>0]=a[7799]|0;a[e+2>>0]=a[7800]|0;a[e+3>>0]=a[7801]|0;a[e+4>>0]=a[7802]|0;a[e+5>>0]=a[7803]|0;a[i>>0]=27;if(lf(d,i+1|0,17)|0)Ue(j,7805);if(!(Mm(h,i,18)|0)){d=bd(b,1)|0;e=b+8|0;k=c[e>>2]|0;c[k>>2]=d;c[k+8>>2]=70;k=(c[e>>2]|0)+16|0;c[e>>2]=k;if(((c[b+24>>2]|0)-k|0)<16)Mc(b,0);k=gd(b)|0;f=d+12|0;c[f>>2]=k;Ve(j,k);k=c[f>>2]|0;f=c[k+40>>2]|0;if((f|0)==1){l=d;Pa=g;return l|0}d=bd(b,f)|0;c[d+12>>2]=k;k=c[e>>2]|0;c[k+-16>>2]=d;c[k+-8>>2]=70;l=d;Pa=g;return l|0}if((c[i>>2]|0)!=1635077147)Ue(j,7815);if(Mm(h,i,6)|0)Ue(j,7821);if(!(Mm(h,i,12)|0))Ue(j,7854);else Ue(j,7841);return 0}function Ue(a,b){a=a|0;b=b|0;var d=0,e=0;d=Pa;Pa=Pa+16|0;e=d;d=c[a>>2]|0;c[e>>2]=c[a+12>>2];c[e+4>>2]=b;Pd(d,7864,e)|0;Jc(c[a>>2]|0,3)}function Ve(b,d){b=b|0;d=d|0;var e=0,f=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0;e=Pa;Pa=Pa+16|0;f=e;h=b+4|0;if(lf(c[h>>2]|0,f,4)|0)Ue(b,7805);i=c[f>>2]|0;if((i|0)<0)Ue(b,7854);c[d+64>>2]=i;if(lf(c[h>>2]|0,f,4)|0)Ue(b,7805);i=c[f>>2]|0;if((i|0)<0)Ue(b,7854);c[d+68>>2]=i;if(lf(c[h>>2]|0,f,1)|0)Ue(b,7805);a[d+76>>0]=a[f>>0]|0;if(lf(c[h>>2]|0,f,1)|0)Ue(b,7805);a[d+77>>0]=a[f>>0]|0;if(lf(c[h>>2]|0,f,1)|0)Ue(b,7805);a[d+78>>0]=a[f>>0]|0;if(lf(c[h>>2]|0,f,4)|0)Ue(b,7805);i=c[f>>2]|0;if((i|0)<0)Ue(b,7854);j=c[b>>2]|0;if((i+1|0)>>>0>1073741823)Gd(j);k=i<<2;l=Hd(j,0,0,k)|0;c[d+12>>2]=l;c[d+48>>2]=i;if(lf(c[h>>2]|0,l,k)|0)Ue(b,7805);if(lf(c[h>>2]|0,f,4)|0)Ue(b,7805);k=c[f>>2]|0;if((k|0)<0)Ue(b,7854);l=c[b>>2]|0;if((k+1|0)>>>0>268435455)Gd(l);i=Hd(l,0,0,k<<4)|0;l=d+8|0;c[l>>2]=i;c[d+44>>2]=k;j=(k|0)>0;a:do if(j){m=0;do{c[i+(m<<4)+8>>2]=0;m=m+1|0}while((m|0)!=(k|0));if(j){if(lf(c[h>>2]|0,f,1)|0)Ue(b,7805);m=0;n=i;o=i;b:while(1){p=a[f>>0]|0;switch(p|0){case 0:{q=p;r=44;break}case 1:{if(lf(c[h>>2]|0,f,1)|0){r=38;break b}c[n>>2]=a[f>>0];q=1;r=44;break}case 3:{if(lf(c[h>>2]|0,f,8)|0){r=41;break b}g[n>>3]=+g[f>>3];q=3;r=44;break}case 4:{p=We(b)|0;c[n>>2]=p;q=(a[p+4>>0]|64)&255;r=44;break}default:{}}if((r|0)==44){r=0;c[o+(m<<4)+8>>2]=q}p=m+1|0;if((p|0)>=(k|0))break a;s=c[l>>2]|0;if(!(lf(c[h>>2]|0,f,1)|0)){m=p;n=s+(p<<4)|0;o=s}else{r=35;break}}if((r|0)==35)Ue(b,7805);else if((r|0)==38)Ue(b,7805);else if((r|0)==41)Ue(b,7805)}}while(0);if(lf(c[h>>2]|0,f,4)|0)Ue(b,7805);l=c[f>>2]|0;if((l|0)<0)Ue(b,7854);k=c[b>>2]|0;if((l+1|0)>>>0>1073741823)Gd(k);q=Hd(k,0,0,l<<2)|0;k=d+16|0;c[k>>2]=q;c[d+56>>2]=l;i=(l|0)>0;do if(i){c[q>>2]=0;if((l|0)!=1){j=1;do{c[(c[k>>2]|0)+(j<<2)>>2]=0;j=j+1|0}while((j|0)!=(l|0))}if(!i)break;j=0;do{o=gd(c[b>>2]|0)|0;c[(c[k>>2]|0)+(j<<2)>>2]=o;Ve(b,c[(c[k>>2]|0)+(j<<2)>>2]|0);j=j+1|0}while((j|0)!=(l|0))}while(0);if(lf(c[h>>2]|0,f,4)|0)Ue(b,7805);l=c[f>>2]|0;if((l|0)<0)Ue(b,7854);k=c[b>>2]|0;if((l+1|0)>>>0>536870911)Gd(k);i=Hd(k,0,0,l<<3)|0;k=d+28|0;c[k>>2]=i;c[d+40>>2]=l;c:do if((l|0)>0){q=0;do{c[i+(q<<3)>>2]=0;q=q+1|0}while((q|0)!=(l|0));q=0;while(1){if(lf(c[h>>2]|0,f,1)|0){r=71;break}a[(c[k>>2]|0)+(q<<3)+4>>0]=a[f>>0]|0;if(lf(c[h>>2]|0,f,1)|0){r=73;break}a[(c[k>>2]|0)+(q<<3)+5>>0]=a[f>>0]|0;q=q+1|0;if((q|0)>=(l|0))break c}if((r|0)==71)Ue(b,7805);else if((r|0)==73)Ue(b,7805)}while(0);l=We(b)|0;c[d+36>>2]=l;if(lf(c[h>>2]|0,f,4)|0)Ue(b,7805);l=c[f>>2]|0;if((l|0)<0)Ue(b,7854);i=c[b>>2]|0;if((l+1|0)>>>0>1073741823)Gd(i);q=l<<2;j=Hd(i,0,0,q)|0;c[d+20>>2]=j;c[d+52>>2]=l;if(lf(c[h>>2]|0,j,q)|0)Ue(b,7805);if(lf(c[h>>2]|0,f,4)|0)Ue(b,7805);q=c[f>>2]|0;if((q|0)<0)Ue(b,7854);j=c[b>>2]|0;if((q+1|0)>>>0>357913941)Gd(j);l=Hd(j,0,0,q*12|0)|0;j=d+24|0;c[j>>2]=l;c[d+60>>2]=q;d:do if((q|0)>0){d=0;do{c[l+(d*12|0)>>2]=0;d=d+1|0}while((d|0)!=(q|0));d=0;while(1){i=We(b)|0;c[(c[j>>2]|0)+(d*12|0)>>2]=i;if(lf(c[h>>2]|0,f,4)|0){r=94;break}i=c[f>>2]|0;if((i|0)<0){r=96;break}c[(c[j>>2]|0)+(d*12|0)+4>>2]=i;if(lf(c[h>>2]|0,f,4)|0){r=98;break}i=c[f>>2]|0;if((i|0)<0){r=100;break}c[(c[j>>2]|0)+(d*12|0)+8>>2]=i;d=d+1|0;if((d|0)>=(q|0))break d}if((r|0)==94)Ue(b,7805);else if((r|0)==96)Ue(b,7854);else if((r|0)==98)Ue(b,7805);else if((r|0)==100)Ue(b,7854)}while(0);if(lf(c[h>>2]|0,f,4)|0)Ue(b,7805);h=c[f>>2]|0;if((h|0)<0)Ue(b,7854);if(!h){Pa=e;return}f=0;do{r=We(b)|0;c[(c[k>>2]|0)+(f<<3)>>2]=r;f=f+1|0}while((f|0)<(h|0));Pa=e;return}function We(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0;b=Pa;Pa=Pa+16|0;d=b;e=a+4|0;if(lf(c[e>>2]|0,d,4)|0)Ue(a,7805);f=c[d>>2]|0;if(!f){g=0;Pa=b;return g|0}h=mf(c[a>>2]|0,c[a+8>>2]|0,f)|0;if(lf(c[e>>2]|0,h,c[d>>2]|0)|0)Ue(a,7805);g=Ae(c[a>>2]|0,h,(c[d>>2]|0)+-1|0)|0;Pa=b;return g|0}function Xe(b){b=b|0;var c=0;a[b>>0]=27;a[b+1>>0]=76;a[b+2>>0]=117;a[b+3>>0]=97;a[b+4>>0]=82;a[b+5>>0]=0;a[b+6>>0]=1;a[b+7>>0]=4;a[b+8>>0]=4;a[b+9>>0]=4;a[b+10>>0]=8;c=b+12|0;a[b+11>>0]=0;a[c>>0]=a[7798]|0;a[c+1>>0]=a[7799]|0;a[c+2>>0]=a[7800]|0;a[c+3>>0]=a[7801]|0;a[c+4>>0]=a[7802]|0;a[c+5>>0]=a[7803]|0;return}function Ye(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,h=0;d=Pa;Pa=Pa+16|0;e=d;f=c[a+8>>2]|0;if((f|0)!=3)if((f&15|0)==4?(f=c[a>>2]|0,(Nd(f+16|0,c[f+12>>2]|0,e)|0)!=0):0){g[b>>3]=+g[e>>3];c[b+8>>2]=3;h=b}else h=0;else h=a;Pa=d;return h|0}function Ze(b,d){b=b|0;d=d|0;var e=0,f=0,h=0,i=0,j=0,k=0;e=Pa;Pa=Pa+48|0;f=e+32|0;h=e;i=d+8|0;if((c[i>>2]|0)!=3){j=0;Pa=e;return j|0}g[f>>3]=+g[d>>3];k=Ae(b,h,Gm(h,10898,f)|0)|0;c[d>>2]=k;c[i>>2]=(a[k+4>>0]|64)&255;j=1;Pa=e;return j|0}function _e(b,d,e,f){b=b|0;d=d|0;e=e|0;f=f|0;var g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0;g=Pa;Pa=Pa+16|0;h=g;i=b+12|0;j=d;k=0;l=c[d+8>>2]|0;while(1){if((l|0)!=69){d=Se(b,j,0)|0;m=d+8|0;n=c[m>>2]|0;if(!n){o=11;break}else{p=d;q=m;r=n}}else{n=c[j>>2]|0;s=He(n,e)|0;if(c[s+8>>2]|0){o=9;break}m=c[n+8>>2]|0;if(!m){o=9;break}if(a[m+6>>0]&1){o=9;break}n=Re(m,0,c[(c[i>>2]|0)+184>>2]|0)|0;if(!n){o=9;break}m=n+8|0;p=n;q=m;r=c[m>>2]|0}k=k+1|0;if((r&15|0)==6){o=13;break}if(k>>>0>=100){o=14;break}else{j=p;l=r}}if((o|0)==9){r=s;l=c[r+4>>2]|0;k=f;c[k>>2]=c[r>>2];c[k+4>>2]=l;c[f+8>>2]=c[s+8>>2];Pa=g;return}else if((o|0)==11)Cc(b,j,7889);else if((o|0)==13){s=b+28|0;l=c[s>>2]|0;k=b+8|0;r=c[k>>2]|0;c[k>>2]=r+16;i=p;p=c[i+4>>2]|0;m=r;c[m>>2]=c[i>>2];c[m+4>>2]=p;c[r+8>>2]=c[q>>2];q=c[k>>2]|0;c[k>>2]=q+16;r=j;p=c[r+4>>2]|0;m=q;c[m>>2]=c[r>>2];c[m+4>>2]=p;c[q+8>>2]=c[j+8>>2];j=c[k>>2]|0;c[k>>2]=j+16;q=e;p=c[q+4>>2]|0;m=j;c[m>>2]=c[q>>2];c[m+4>>2]=p;c[j+8>>2]=c[e+8>>2];Rc(b,(c[k>>2]|0)+-48|0,1,a[(c[b+16>>2]|0)+18>>0]&1);e=(c[s>>2]|0)+(f-l)|0;l=c[k>>2]|0;f=l+-16|0;c[k>>2]=f;k=f;f=c[k+4>>2]|0;s=e;c[s>>2]=c[k>>2];c[s+4>>2]=f;c[e+8>>2]=c[l+-8>>2];Pa=g;return}else if((o|0)==14)Dc(b,7895,h)}function $e(b,d,e,f){b=b|0;d=d|0;e=e|0;f=f|0;var g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0;g=Pa;Pa=Pa+16|0;h=g;i=b+12|0;j=d;k=0;l=c[d+8>>2]|0;while(1){if((l|0)!=69){d=Se(b,j,1)|0;m=d+8|0;n=c[m>>2]|0;if(!n){o=16;break}else{p=d;q=m;r=n}}else{s=c[j>>2]|0;t=He(s,e)|0;if(c[t+8>>2]|0){u=t;break}n=c[s+8>>2]|0;if(!n){o=9;break}if(a[n+6>>0]&2){o=9;break}m=Re(n,1,c[(c[i>>2]|0)+188>>2]|0)|0;if(!m){o=9;break}n=m+8|0;p=m;q=n;r=c[n>>2]|0}k=k+1|0;if((r&15|0)==6){o=18;break}if(k>>>0>=100){o=19;break}else{j=p;l=r}}if((o|0)==9)if((t|0)==15792)u=Ge(b,s,e)|0;else u=t;else if((o|0)==16)Cc(b,j,7889);else if((o|0)==18){t=b+8|0;r=c[t>>2]|0;c[t>>2]=r+16;l=p;p=c[l+4>>2]|0;k=r;c[k>>2]=c[l>>2];c[k+4>>2]=p;c[r+8>>2]=c[q>>2];q=c[t>>2]|0;c[t>>2]=q+16;r=j;p=c[r+4>>2]|0;k=q;c[k>>2]=c[r>>2];c[k+4>>2]=p;c[q+8>>2]=c[j+8>>2];j=c[t>>2]|0;c[t>>2]=j+16;q=e;p=c[q+4>>2]|0;k=j;c[k>>2]=c[q>>2];c[k+4>>2]=p;c[j+8>>2]=c[e+8>>2];e=c[t>>2]|0;c[t>>2]=e+16;j=f;p=c[j+4>>2]|0;k=e;c[k>>2]=c[j>>2];c[k+4>>2]=p;c[e+8>>2]=c[f+8>>2];Rc(b,(c[t>>2]|0)+-64|0,0,a[(c[b+16>>2]|0)+18>>0]&1);Pa=g;return}else if((o|0)==19)Dc(b,7912,h);h=f;o=c[h+4>>2]|0;t=u;c[t>>2]=c[h>>2];c[t+4>>2]=o;o=f+8|0;c[u+8>>2]=c[o>>2];a[s+6>>0]=0;if(!(c[o>>2]&64)){Pa=g;return}if(!(a[(c[f>>2]|0)+5>>0]&3)){Pa=g;return}if(!(a[s+5>>0]&4)){Pa=g;return}ld(b,s);Pa=g;return}function af(b,d,e){b=b|0;d=d|0;e=e|0;var f=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0;f=d+8|0;h=c[f>>2]|0;if((h|0)==3){if((c[e+8>>2]|0)==3){i=+g[d>>3]<+g[e>>3]&1;return i|0}}else if((h&15|0)==4?(c[e+8>>2]&15|0)==4:0){h=c[d>>2]|0;j=c[e>>2]|0;k=h+16|0;l=j+16|0;m=vn(k,l)|0;a:do if(!m){n=c[j+12>>2]|0;o=l;p=c[h+12>>2]|0;q=k;while(1){r=_l(q)|0;if((r|0)==(n|0)){s=0;break a}t=r+1|0;if((r|0)==(p|0)){s=-1;break a}o=o+t|0;q=q+t|0;r=vn(q,o)|0;if(r|0){s=r;break}else{n=n-t|0;p=p-t|0}}}else s=m;while(0);i=s>>>31;return i|0}s=b+8|0;m=c[s>>2]|0;k=Se(b,d,13)|0;h=k+8|0;if(!(c[h>>2]|0)){l=Se(b,e,13)|0;j=l+8|0;if(!(c[j>>2]|0))Ic(b,d,e);else{u=l;v=j}}else{u=k;v=h}h=b+28|0;k=c[h>>2]|0;j=c[s>>2]|0;c[s>>2]=j+16;l=u;u=c[l+4>>2]|0;p=j;c[p>>2]=c[l>>2];c[p+4>>2]=u;c[j+8>>2]=c[v>>2];v=c[s>>2]|0;c[s>>2]=v+16;j=d;d=c[j+4>>2]|0;u=v;c[u>>2]=c[j>>2];c[u+4>>2]=d;c[v+8>>2]=c[f>>2];f=c[s>>2]|0;c[s>>2]=f+16;v=e;d=c[v+4>>2]|0;u=f;c[u>>2]=c[v>>2];c[u+4>>2]=d;c[f+8>>2]=c[e+8>>2];Rc(b,(c[s>>2]|0)+-48|0,1,a[(c[b+16>>2]|0)+18>>0]&1);b=(c[h>>2]|0)+(m-k)|0;k=c[s>>2]|0;m=k+-16|0;c[s>>2]=m;h=m;m=c[h+4>>2]|0;e=b;c[e>>2]=c[h>>2];c[e+4>>2]=m;c[b+8>>2]=c[k+-8>>2];k=c[s>>2]|0;s=c[k+8>>2]|0;switch(s|0){case 1:{i=(c[k>>2]|0)!=0&1;return i|0}case 0:{i=s;return i|0}default:{i=1;return i|0}}return 0}function bf(b,d,e){b=b|0;d=d|0;e=e|0;var f=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0,z=0;f=d+8|0;h=c[f>>2]|0;if((h|0)==3){if((c[e+8>>2]|0)==3){i=+g[d>>3]<=+g[e>>3];j=i&1;return j|0}}else if((h&15|0)==4?(c[e+8>>2]&15|0)==4:0){h=c[d>>2]|0;k=c[e>>2]|0;l=h+16|0;m=k+16|0;n=vn(l,m)|0;a:do if(!n){o=c[k+12>>2]|0;p=m;q=c[h+12>>2]|0;r=l;while(1){s=_l(r)|0;t=(s|0)==(q|0);if((s|0)==(o|0))break;u=s+1|0;if(t){v=-1;break a}p=p+u|0;r=r+u|0;s=vn(r,p)|0;if(s|0){v=s;break a}else{o=o-u|0;q=q-u|0}}v=(t^1)&1}else v=n;while(0);i=(v|0)<1;j=i&1;return j|0}v=b+8|0;n=c[v>>2]|0;t=Se(b,d,14)|0;l=t+8|0;if(!(c[l>>2]|0)){h=Se(b,e,14)|0;m=h+8|0;if(!(c[m>>2]|0)){k=c[v>>2]|0;q=Se(b,e,13)|0;o=q+8|0;if(!(c[o>>2]|0)){p=Se(b,d,13)|0;r=p+8|0;if(!(c[r>>2]|0))Ic(b,d,e);else{w=p;x=r}}else{w=q;x=o}o=b+28|0;q=c[o>>2]|0;r=c[v>>2]|0;c[v>>2]=r+16;p=w;w=c[p+4>>2]|0;u=r;c[u>>2]=c[p>>2];c[u+4>>2]=w;c[r+8>>2]=c[x>>2];x=c[v>>2]|0;c[v>>2]=x+16;r=e;w=c[r+4>>2]|0;u=x;c[u>>2]=c[r>>2];c[u+4>>2]=w;c[x+8>>2]=c[e+8>>2];x=c[v>>2]|0;c[v>>2]=x+16;w=d;u=c[w+4>>2]|0;r=x;c[r>>2]=c[w>>2];c[r+4>>2]=u;c[x+8>>2]=c[f>>2];Rc(b,(c[v>>2]|0)+-48|0,1,a[(c[b+16>>2]|0)+18>>0]&1);x=(c[o>>2]|0)+(k-q)|0;q=c[v>>2]|0;k=q+-16|0;c[v>>2]=k;o=k;k=c[o+4>>2]|0;u=x;c[u>>2]=c[o>>2];c[u+4>>2]=k;c[x+8>>2]=c[q+-8>>2];q=c[v>>2]|0;switch(c[q+8>>2]|0){case 1:{i=(c[q>>2]|0)==0;j=i&1;return j|0}case 0:{i=1;j=i&1;return j|0}default:{i=0;j=i&1;return j|0}}}else{y=h;z=m}}else{y=t;z=l}l=b+28|0;t=c[l>>2]|0;m=c[v>>2]|0;c[v>>2]=m+16;h=y;y=c[h+4>>2]|0;q=m;c[q>>2]=c[h>>2];c[q+4>>2]=y;c[m+8>>2]=c[z>>2];z=c[v>>2]|0;c[v>>2]=z+16;m=d;d=c[m+4>>2]|0;y=z;c[y>>2]=c[m>>2];c[y+4>>2]=d;c[z+8>>2]=c[f>>2];f=c[v>>2]|0;c[v>>2]=f+16;z=e;d=c[z+4>>2]|0;y=f;c[y>>2]=c[z>>2];c[y+4>>2]=d;c[f+8>>2]=c[e+8>>2];Rc(b,(c[v>>2]|0)+-48|0,1,a[(c[b+16>>2]|0)+18>>0]&1);b=(c[l>>2]|0)+(n-t)|0;t=c[v>>2]|0;n=t+-16|0;c[v>>2]=n;l=n;n=c[l+4>>2]|0;e=b;c[e>>2]=c[l>>2];c[e+4>>2]=n;c[b+8>>2]=c[t+-8>>2];t=c[v>>2]|0;switch(c[t+8>>2]|0){case 1:{i=(c[t>>2]|0)!=0;j=i&1;return j|0}case 0:{i=0;j=i&1;return j|0}default:{i=1;j=i&1;return j|0}}return 0}function cf(b,d,e){b=b|0;d=d|0;e=e|0;var f=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0;f=d+8|0;do switch(c[f>>2]&63){case 3:{h=+g[d>>3]==+g[e>>3]&1;return h|0}case 1:{h=(c[d>>2]|0)==(c[e>>2]|0)&1;return h|0}case 2:{h=(c[d>>2]|0)==(c[e>>2]|0)&1;return h|0}case 22:{h=(c[d>>2]|0)==(c[e>>2]|0)&1;return h|0}case 4:{h=(c[d>>2]|0)==(c[e>>2]|0)&1;return h|0}case 20:{h=we(c[d>>2]|0,c[e>>2]|0)|0;return h|0}case 7:{i=c[d>>2]|0;j=c[e>>2]|0;if((i|0)==(j|0)){h=1;return h|0}if(!b){h=0;return h|0}k=c[i+8>>2]|0;i=c[j+8>>2]|0;if(!k){h=0;return h|0}if(a[k+6>>0]&32){h=0;return h|0}j=b+12|0;l=Re(k,5,c[(c[j>>2]|0)+204>>2]|0)|0;if(!l){h=0;return h|0}if((k|0)!=(i|0)){if(!i){h=0;return h|0}if(a[i+6>>0]&32){h=0;return h|0}k=Re(i,5,c[(c[j>>2]|0)+204>>2]|0)|0;if(!k){h=0;return h|0}if((c[l+8>>2]|0)!=(c[k+8>>2]|0)){h=0;return h|0}if(!(cf(0,l,k)|0)){h=0;return h|0}else m=l}else m=l;break}case 5:{l=c[d>>2]|0;k=c[e>>2]|0;if((l|0)==(k|0)){h=1;return h|0}if(!b){h=0;return h|0}j=c[l+8>>2]|0;l=c[k+8>>2]|0;if(!j){h=0;return h|0}if(a[j+6>>0]&32){h=0;return h|0}k=b+12|0;i=Re(j,5,c[(c[k>>2]|0)+204>>2]|0)|0;if(!i){h=0;return h|0}if((j|0)!=(l|0)){if(!l){h=0;return h|0}if(a[l+6>>0]&32){h=0;return h|0}j=Re(l,5,c[(c[k>>2]|0)+204>>2]|0)|0;if(!j){h=0;return h|0}if((c[i+8>>2]|0)!=(c[j+8>>2]|0)){h=0;return h|0}if(!(cf(0,i,j)|0)){h=0;return h|0}else m=i}else m=i;break}case 0:{h=1;return h|0}default:{h=(c[d>>2]|0)==(c[e>>2]|0)&1;return h|0}}while(0);i=b+8|0;j=c[i>>2]|0;k=b+28|0;l=c[k>>2]|0;c[i>>2]=j+16;n=m;o=c[n+4>>2]|0;p=j;c[p>>2]=c[n>>2];c[p+4>>2]=o;c[j+8>>2]=c[m+8>>2];m=c[i>>2]|0;c[i>>2]=m+16;o=d;d=c[o+4>>2]|0;p=m;c[p>>2]=c[o>>2];c[p+4>>2]=d;c[m+8>>2]=c[f>>2];f=c[i>>2]|0;c[i>>2]=f+16;m=e;d=c[m+4>>2]|0;p=f;c[p>>2]=c[m>>2];c[p+4>>2]=d;c[f+8>>2]=c[e+8>>2];Rc(b,(c[i>>2]|0)+-48|0,1,a[(c[b+16>>2]|0)+18>>0]&1);b=(c[k>>2]|0)+(j-l)|0;l=c[i>>2]|0;j=l+-16|0;c[i>>2]=j;k=j;j=c[k+4>>2]|0;e=b;c[e>>2]=c[k>>2];c[e+4>>2]=j;c[b+8>>2]=c[l+-8>>2];l=c[i>>2]|0;i=c[l+8>>2]|0;switch(i|0){case 1:{h=(c[l>>2]|0)!=0&1;return h|0}case 0:{h=i;return h|0}default:{h=1;return h|0}}return 0}function df(b,d){b=b|0;d=d|0;var e=0,f=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0,z=0,A=0,B=0,C=0,D=0,E=0,F=0,G=0;e=Pa;Pa=Pa+64|0;f=e+56|0;h=e+48|0;i=e+40|0;j=e+32|0;k=e;l=b+8|0;m=b+28|0;n=b+16|0;o=b+12|0;p=d;d=c[l>>2]|0;a:while(1){q=d+-32|0;r=d+-24|0;s=c[r>>2]|0;t=d+-16|0;do if((s|0)==3|(s&15|0)==4){u=d+-8|0;v=c[u>>2]|0;if((v&15|0)==4)w=s;else{if((v|0)!=3){x=6;break}g[j>>3]=+g[t>>3];v=Ae(b,k,Gm(k,10898,j)|0)|0;c[t>>2]=v;c[u>>2]=(a[v+4>>0]|64)&255;w=c[r>>2]|0}v=c[(c[t>>2]|0)+12>>2]|0;y=(w&15|0)==4;if(!v){if(!((w|0)==3&(y^1))){z=2;break}g[i>>3]=+g[q>>3];A=Ae(b,k,Gm(k,10898,i)|0)|0;c[q>>2]=A;c[r>>2]=(a[A+4>>0]|64)&255;z=2;break}if(y?(c[(c[q>>2]|0)+12>>2]|0)==0:0){y=t;A=c[y+4>>2]|0;B=q;c[B>>2]=c[y>>2];c[B+4>>2]=A;c[r>>2]=c[u>>2];z=2;break}b:do if((p|0)>1){u=v;A=1;while(1){B=d+(0-A<<4)+-16|0;y=B+8|0;C=c[y>>2]|0;if((C&15|0)!=4){if((C|0)!=3){D=u;E=A;break b}g[h>>3]=+g[B>>3];C=Ae(b,k,Gm(k,10898,h)|0)|0;c[B>>2]=C;c[y>>2]=(a[C+4>>0]|64)&255}C=c[(c[B>>2]|0)+12>>2]|0;if(C>>>0>=(-3-u|0)>>>0){x=22;break a}B=C+u|0;C=A+1|0;if((C|0)<(p|0)){u=B;A=C}else{D=B;E=C;break}}}else{D=v;E=1}while(0);v=mf(b,(c[o>>2]|0)+144|0,D)|0;A=0;u=E;while(1){C=c[d+(0-u<<4)>>2]|0;B=c[C+12>>2]|0;Un(v+A|0,C+16|0,B|0)|0;A=B+A|0;if((u|0)<=1)break;else u=u+-1|0}u=0-E|0;B=Ae(b,v,A)|0;c[d+(u<<4)>>2]=B;c[d+(u<<4)+8>>2]=(a[B+4>>0]|64)&255;z=E}else x=6;while(0);if((x|0)==6){x=0;s=Se(b,q,15)|0;B=s+8|0;if(!(c[B>>2]|0)){u=Se(b,t,15)|0;C=u+8|0;if(!(c[C>>2]|0)){x=9;break}else{F=u;G=C}}else{F=s;G=B}B=c[m>>2]|0;s=c[l>>2]|0;c[l>>2]=s+16;C=F;u=c[C+4>>2]|0;y=s;c[y>>2]=c[C>>2];c[y+4>>2]=u;c[s+8>>2]=c[G>>2];s=c[l>>2]|0;c[l>>2]=s+16;u=q;y=c[u+4>>2]|0;C=s;c[C>>2]=c[u>>2];c[C+4>>2]=y;c[s+8>>2]=c[r>>2];s=c[l>>2]|0;c[l>>2]=s+16;y=t;C=c[y+4>>2]|0;u=s;c[u>>2]=c[y>>2];c[u+4>>2]=C;c[s+8>>2]=c[d+-8>>2];Rc(b,(c[l>>2]|0)+-48|0,1,a[(c[n>>2]|0)+18>>0]&1);s=(c[m>>2]|0)+(q-B)|0;B=c[l>>2]|0;C=B+-16|0;c[l>>2]=C;u=C;C=c[u+4>>2]|0;y=s;c[y>>2]=c[u>>2];c[y+4>>2]=C;c[s+8>>2]=c[B+-8>>2];z=2}p=p+1-z|0;d=(c[l>>2]|0)+(1-z<<4)|0;c[l>>2]=d;if((p|0)<=1){x=28;break}}if((x|0)==9)Gc(b,q,t);else if((x|0)==22)Dc(b,7929,f);else if((x|0)==28){Pa=e;return}}function ef(b,d,e){b=b|0;d=d|0;e=e|0;var f=0,h=0,i=0,j=0,k=0,l=0,m=0.0,n=0,o=0,p=0;f=e+8|0;a:do switch(c[f>>2]&15){case 5:{h=c[e>>2]|0;i=c[h+8>>2]|0;if((i|0?(a[i+6>>0]&16)==0:0)?(j=Re(i,4,c[(c[b+12>>2]|0)+200>>2]|0)|0,j|0):0){k=j;l=j+8|0;break a}m=+(Pe(h)|0);g[d>>3]=m;c[d+8>>2]=3;return}case 4:{g[d>>3]=+((c[(c[e>>2]|0)+12>>2]|0)>>>0);c[d+8>>2]=3;return}default:{h=Se(b,e,4)|0;j=h+8|0;if(!(c[j>>2]|0))Cc(b,e,7952);else{k=h;l=j}}}while(0);j=b+28|0;h=c[j>>2]|0;i=b+8|0;n=c[i>>2]|0;c[i>>2]=n+16;o=k;k=c[o+4>>2]|0;p=n;c[p>>2]=c[o>>2];c[p+4>>2]=k;c[n+8>>2]=c[l>>2];l=c[i>>2]|0;c[i>>2]=l+16;n=e;k=c[n+4>>2]|0;p=l;c[p>>2]=c[n>>2];c[p+4>>2]=k;c[l+8>>2]=c[f>>2];l=c[i>>2]|0;c[i>>2]=l+16;k=e;e=c[k+4>>2]|0;p=l;c[p>>2]=c[k>>2];c[p+4>>2]=e;c[l+8>>2]=c[f>>2];Rc(b,(c[i>>2]|0)+-48|0,1,a[(c[b+16>>2]|0)+18>>0]&1);b=(c[j>>2]|0)+(d-h)|0;h=c[i>>2]|0;d=h+-16|0;c[i>>2]=d;i=d;d=c[i+4>>2]|0;j=b;c[j>>2]=c[i>>2];c[j+4>>2]=d;c[b+8>>2]=c[h+-8>>2];return}function ff(b,d,e,f,h){b=b|0;d=d|0;e=e|0;f=f|0;h=h|0;var i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0.0,s=0,t=0;i=Pa;Pa=Pa+32|0;j=i+16|0;k=i;l=e+8|0;m=c[l>>2]|0;do if((m|0)!=3){if((m&15|0)==4?(n=c[e>>2]|0,Nd(n+16|0,c[n+12>>2]|0,j)|0):0){g[k>>3]=+g[j>>3];c[k+8>>2]=3;o=k;p=6;break}}else{o=e;p=6}while(0);a:do if((p|0)==6){k=c[f+8>>2]|0;do if((k|0)==3)q=f;else{if((k&15|0)==4?(m=c[f>>2]|0,Nd(m+16|0,c[m+12>>2]|0,j)|0):0){q=j;break}break a}while(0);r=+Ld(h+-6|0,+g[o>>3],+g[q>>3]);g[d>>3]=r;c[d+8>>2]=3;Pa=i;return}while(0);q=Se(b,e,h)|0;o=q+8|0;if(!(c[o>>2]|0)){j=Se(b,f,h)|0;h=j+8|0;if(!(c[h>>2]|0))Hc(b,e,f);else{s=j;t=h}}else{s=q;t=o}o=b+28|0;q=c[o>>2]|0;h=b+8|0;j=c[h>>2]|0;c[h>>2]=j+16;p=s;s=c[p+4>>2]|0;k=j;c[k>>2]=c[p>>2];c[k+4>>2]=s;c[j+8>>2]=c[t>>2];t=c[h>>2]|0;c[h>>2]=t+16;j=e;e=c[j+4>>2]|0;s=t;c[s>>2]=c[j>>2];c[s+4>>2]=e;c[t+8>>2]=c[l>>2];l=c[h>>2]|0;c[h>>2]=l+16;t=f;e=c[t+4>>2]|0;s=l;c[s>>2]=c[t>>2];c[s+4>>2]=e;c[l+8>>2]=c[f+8>>2];Rc(b,(c[h>>2]|0)+-48|0,1,a[(c[b+16>>2]|0)+18>>0]&1);b=(c[o>>2]|0)+(d-q)|0;q=c[h>>2]|0;d=q+-16|0;c[h>>2]=d;h=d;d=c[h+4>>2]|0;o=b;c[o>>2]=c[h>>2];c[o+4>>2]=d;c[b+8>>2]=c[q+-8>>2];Pa=i;return}function gf(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0;b=c[a+16>>2]|0;d=b+24|0;e=c[d>>2]|0;f=b+28|0;g=c[(c[f>>2]|0)+-4>>2]|0;h=g&63;switch(g&63){case 12:case 7:case 6:case 21:case 19:case 18:case 17:case 16:case 15:case 14:case 13:{i=a+8|0;j=c[i>>2]|0;k=j+-16|0;c[i>>2]=k;i=g>>>6&255;l=k;k=c[l+4>>2]|0;m=e+(i<<4)|0;c[m>>2]=c[l>>2];c[m+4>>2]=k;c[e+(i<<4)+8>>2]=c[j+-8>>2];return}case 24:case 25:case 26:{j=a+8|0;i=c[j>>2]|0;switch(c[i+-8>>2]|0){case 0:{n=1;break}case 1:{n=(c[i+-16>>2]|0)==0;break}default:n=0}k=(n^1)&1;c[j>>2]=i+-16;if((h|0)==26){h=(Se(a,e+(g>>>23<<4)|0,14)|0)+8|0;o=(c[h>>2]|0)==0?n&1:k}else o=k;if((o|0)==(g>>>6&255|0))return;c[f>>2]=(c[f>>2]|0)+4;return}case 22:{f=a+8|0;o=c[f>>2]|0;k=o+-32|0;n=k-(e+(g>>>23<<4))|0;e=o+-16|0;h=c[e+4>>2]|0;i=o+-48|0;c[i>>2]=c[e>>2];c[i+4>>2]=h;c[o+-40>>2]=c[o+-8>>2];if((n|0)>16){c[f>>2]=k;df(a,n>>>4)}n=c[f>>2]|0;k=c[d>>2]|0;d=g>>>6&255;o=n+-16|0;h=c[o+4>>2]|0;i=k+(d<<4)|0;c[i>>2]=c[o>>2];c[i+4>>2]=h;c[k+(d<<4)+8>>2]=c[n+-8>>2];c[f>>2]=c[b+4>>2];return}case 34:{c[a+8>>2]=c[b+4>>2];return}case 29:{if(!(g&8372224))return;c[a+8>>2]=c[b+4>>2];return}default:return}}function hf(b){b=b|0;var e=0,f=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,u=0,v=0,x=0,y=0,z=0,A=0,B=0,C=0,D=0,E=0,F=0,G=0,H=0,I=0,J=0,K=0,L=0,M=0,N=0,O=0,P=0,Q=0,R=0,S=0,T=0,U=0,V=0,W=0,X=0,Y=0,Z=0,_=0,$=0,aa=0,ba=0.0,ca=0.0,da=0.0,ea=0,fa=0,ga=0,ha=0,ia=0,ja=0,ka=0,la=0,ma=0,na=0,oa=0,pa=0,qa=0,ra=0,sa=0,ta=0,ua=0,va=0,wa=0,xa=0,ya=0,za=0,Aa=0,Ba=0,Ca=0,Da=0,Ea=0,Fa=0,Ga=0,Ha=0,Ia=0,Ja=0,Ka=0,La=0;e=Pa;Pa=Pa+32|0;f=e+24|0;h=e+16|0;i=e+8|0;j=e;k=b+16|0;l=b+40|0;m=b+48|0;n=b+8|0;o=b+12|0;p=b+24|0;q=b+44|0;r=b+20|0;s=b+6|0;u=c[k>>2]|0;a:while(1){v=c[c[u>>2]>>2]|0;x=v+12|0;y=c[(c[x>>2]|0)+8>>2]|0;z=u+24|0;A=u+28|0;B=u+4|0;C=u+4|0;D=u+4|0;E=u+4|0;F=u+4|0;G=u+4|0;H=u+4|0;I=c[u+24>>2]|0;b:while(1){J=c[A>>2]|0;c[A>>2]=J+4;K=c[J>>2]|0;J=a[l>>0]|0;if((J&12)!=0?(L=(c[m>>2]|0)+-1|0,c[m>>2]=L,M=(L|0)!=0,!((J&4)==0&M)):0){N=c[k>>2]|0;L=J&255;if((L&8|0)==0|M)O=0;else{c[m>>2]=c[q>>2];O=1}P=N+18|0;M=d[P>>0]|0;if(!(M&128)){if(O)Oc(b,3,-1);do if(!(L&4)){J=N+28|0;Q=J;R=J}else{J=c[(c[c[N>>2]>>2]|0)+12>>2]|0;S=N+28|0;T=c[S>>2]|0;U=c[J+12>>2]|0;V=(T-U>>2)+-1|0;W=c[J+20>>2]|0;J=(W|0)==0;if(J)X=0;else X=c[W+(V<<2)>>2]|0;if(V|0?(V=c[r>>2]|0,V>>>0<T>>>0):0){if(J)Y=0;else Y=c[W+((V-U>>2)+-1<<2)>>2]|0;if((X|0)==(Y|0)){Q=S;R=S;break}}Oc(b,2,X);Q=S;R=S}while(0);c[r>>2]=c[R>>2];if((a[s>>0]|0)==1){Z=22;break a}}else a[P>>0]=M&127;_=c[z>>2]|0}else _=I;L=K>>>6&255;$=_+(L<<4)|0;c:do switch(K&63){case 31:{Z=149;break b;break}case 0:{S=K>>>23;U=_+(S<<4)|0;V=c[U+4>>2]|0;W=$;c[W>>2]=c[U>>2];c[W+4>>2]=V;c[_+(L<<4)+8>>2]=c[_+(S<<4)+8>>2];aa=_;break}case 1:{S=K>>>14;V=y+(S<<4)|0;W=c[V+4>>2]|0;U=$;c[U>>2]=c[V>>2];c[U+4>>2]=W;c[_+(L<<4)+8>>2]=c[y+(S<<4)+8>>2];aa=_;break}case 2:{S=c[A>>2]|0;c[A>>2]=S+4;W=(c[S>>2]|0)>>>6;S=y+(W<<4)|0;U=c[S+4>>2]|0;V=$;c[V>>2]=c[S>>2];c[V+4>>2]=U;c[_+(L<<4)+8>>2]=c[y+(W<<4)+8>>2];aa=_;break}case 3:{c[$>>2]=K>>>23;c[_+(L<<4)+8>>2]=1;if(!(K&8372224))aa=_;else{c[A>>2]=(c[A>>2]|0)+4;aa=_}break}case 4:{W=$;U=K>>>23;while(1){c[W+8>>2]=0;if(!U){aa=_;break}else{W=W+16|0;U=U+-1|0}}break}case 5:{U=c[(c[v+16+(K>>>23<<2)>>2]|0)+8>>2]|0;W=U;V=c[W+4>>2]|0;S=$;c[S>>2]=c[W>>2];c[S+4>>2]=V;c[_+(L<<4)+8>>2]=c[U+8>>2];aa=_;break}case 6:{U=K>>>14;_e(b,c[(c[v+16+(K>>>23<<2)>>2]|0)+8>>2]|0,(K&4194304|0)==0?_+((U&511)<<4)|0:y+((U&255)<<4)|0,$);aa=c[z>>2]|0;break}case 7:{U=K>>>14;_e(b,_+(K>>>23<<4)|0,(K&4194304|0)==0?_+((U&511)<<4)|0:y+((U&255)<<4)|0,$);aa=c[z>>2]|0;break}case 8:{U=K>>>23;V=K>>>14;$e(b,c[(c[v+16+(L<<2)>>2]|0)+8>>2]|0,(K|0)<0?y+((U&255)<<4)|0:_+(U<<4)|0,(K&4194304|0)==0?_+((V&511)<<4)|0:y+((V&255)<<4)|0);aa=c[z>>2]|0;break}case 9:{V=c[v+16+(K>>>23<<2)>>2]|0;U=c[V+8>>2]|0;S=$;W=c[S+4>>2]|0;J=U;c[J>>2]=c[S>>2];c[J+4>>2]=W;W=_+(L<<4)+8|0;c[U+8>>2]=c[W>>2];if(((c[W>>2]&64|0)!=0?(W=c[$>>2]|0,(a[W+5>>0]&3)!=0):0)?(a[V+5>>0]&4)!=0:0){jd(b,V,W);aa=_}else aa=_;break}case 10:{W=K>>>23;V=K>>>14;$e(b,$,(K|0)<0?y+((W&255)<<4)|0:_+(W<<4)|0,(K&4194304|0)==0?_+((V&511)<<4)|0:y+((V&255)<<4)|0);aa=c[z>>2]|0;break}case 11:{V=K>>>23;W=K>>>14&511;U=Le(b)|0;c[$>>2]=U;c[_+(L<<4)+8>>2]=69;if(W|V|0){J=Jd(V)|0;Fe(b,U,J,Jd(W)|0)}if((c[(c[o>>2]|0)+12>>2]|0)>0){c[n>>2]=$+16;Ed(b);c[n>>2]=c[E>>2]}aa=c[z>>2]|0;break}case 12:{W=K>>>23;J=_+(W<<4)|0;U=$+16|0;V=J;S=c[V+4>>2]|0;T=U;c[T>>2]=c[V>>2];c[T+4>>2]=S;c[U+8>>2]=c[_+(W<<4)+8>>2];W=K>>>14;_e(b,J,(K&4194304|0)==0?_+((W&511)<<4)|0:y+((W&255)<<4)|0,$);aa=c[z>>2]|0;break}case 13:{W=K>>>23;J=(K|0)<0?y+((W&255)<<4)|0:_+(W<<4)|0;W=K>>>14;U=(K&4194304|0)==0?_+((W&511)<<4)|0:y+((W&255)<<4)|0;if((c[J+8>>2]|0)==3?(c[U+8>>2]|0)==3:0){g[$>>3]=+g[J>>3]+ +g[U>>3];c[_+(L<<4)+8>>2]=3;aa=_;break c}ff(b,$,J,U,6);aa=c[z>>2]|0;break}case 14:{U=K>>>23;J=(K|0)<0?y+((U&255)<<4)|0:_+(U<<4)|0;U=K>>>14;W=(K&4194304|0)==0?_+((U&511)<<4)|0:y+((U&255)<<4)|0;if((c[J+8>>2]|0)==3?(c[W+8>>2]|0)==3:0){g[$>>3]=+g[J>>3]-+g[W>>3];c[_+(L<<4)+8>>2]=3;aa=_;break c}ff(b,$,J,W,7);aa=c[z>>2]|0;break}case 15:{W=K>>>23;J=(K|0)<0?y+((W&255)<<4)|0:_+(W<<4)|0;W=K>>>14;U=(K&4194304|0)==0?_+((W&511)<<4)|0:y+((W&255)<<4)|0;if((c[J+8>>2]|0)==3?(c[U+8>>2]|0)==3:0){g[$>>3]=+g[J>>3]*+g[U>>3];c[_+(L<<4)+8>>2]=3;aa=_;break c}ff(b,$,J,U,8);aa=c[z>>2]|0;break}case 16:{U=K>>>23;J=(K|0)<0?y+((U&255)<<4)|0:_+(U<<4)|0;U=K>>>14;W=(K&4194304|0)==0?_+((U&511)<<4)|0:y+((U&255)<<4)|0;if((c[J+8>>2]|0)==3?(c[W+8>>2]|0)==3:0){g[$>>3]=+g[J>>3]/+g[W>>3];c[_+(L<<4)+8>>2]=3;aa=_;break c}ff(b,$,J,W,9);aa=c[z>>2]|0;break}case 17:{W=K>>>23;J=(K|0)<0?y+((W&255)<<4)|0:_+(W<<4)|0;W=K>>>14;U=(K&4194304|0)==0?_+((W&511)<<4)|0:y+((W&255)<<4)|0;if((c[J+8>>2]|0)==3?(c[U+8>>2]|0)==3:0){ba=+g[J>>3];ca=+g[U>>3];da=ba-ca*+t(+(ba/ca));g[$>>3]=da;c[_+(L<<4)+8>>2]=3;aa=_;break c}ff(b,$,J,U,10);aa=c[z>>2]|0;break}case 18:{U=K>>>23;J=(K|0)<0?y+((U&255)<<4)|0:_+(U<<4)|0;U=K>>>14;W=(K&4194304|0)==0?_+((U&511)<<4)|0:y+((U&255)<<4)|0;if((c[J+8>>2]|0)==3?(c[W+8>>2]|0)==3:0){da=+w(+(+g[J>>3]),+(+g[W>>3]));g[$>>3]=da;c[_+(L<<4)+8>>2]=3;aa=_;break c}ff(b,$,J,W,11);aa=c[z>>2]|0;break}case 19:{W=K>>>23;J=_+(W<<4)|0;if((c[_+(W<<4)+8>>2]|0)==3){g[$>>3]=-+g[J>>3];c[_+(L<<4)+8>>2]=3;aa=_;break c}else{ff(b,$,J,J,12);aa=c[z>>2]|0;break c}break}case 20:{J=K>>>23;switch(c[_+(J<<4)+8>>2]|0){case 0:{ea=1;break}case 1:{ea=(c[_+(J<<4)>>2]|0)==0;break}default:ea=0}c[$>>2]=ea&1;c[_+(L<<4)+8>>2]=1;aa=_;break}case 21:{ef(b,$,_+(K>>>23<<4)|0);aa=c[z>>2]|0;break}case 22:{J=K>>>23;W=K>>>14&511;c[n>>2]=_+(W<<4)+16;df(b,1-J+W|0);W=c[z>>2]|0;U=W+(L<<4)|0;S=W+(J<<4)|0;T=S;V=c[T+4>>2]|0;fa=U;c[fa>>2]=c[T>>2];c[fa+4>>2]=V;c[W+(L<<4)+8>>2]=c[W+(J<<4)+8>>2];if((c[(c[o>>2]|0)+12>>2]|0)>0){c[n>>2]=L>>>0<J>>>0?S:U+16|0;Ed(b);U=c[C>>2]|0;c[n>>2]=U;ga=U}else ga=c[D>>2]|0;U=c[z>>2]|0;c[n>>2]=ga;aa=U;break}case 23:{if(L|0)fd(b,(c[z>>2]|0)+(L<<4)+-16|0);c[A>>2]=(c[A>>2]|0)+((K>>>14)+-131071<<2);aa=_;break}case 24:{U=K>>>23;S=(K|0)<0?y+((U&255)<<4)|0:_+(U<<4)|0;U=K>>>14;J=(K&4194304|0)==0?_+((U&511)<<4)|0:y+((U&255)<<4)|0;if((c[S+8>>2]|0)==(c[J+8>>2]|0))ha=(cf(b,S,J)|0)!=0;else ha=0;J=c[A>>2]|0;if((L|0)==(ha&1|0)){S=c[J>>2]|0;U=S>>>6&255;if(!U)ia=J;else{fd(b,(c[z>>2]|0)+(U<<4)+-16|0);ia=c[A>>2]|0}ja=ia+((S>>>14)+-131070<<2)|0}else ja=J+4|0;c[A>>2]=ja;aa=c[z>>2]|0;break}case 25:{J=K>>>23;S=K>>>14;U=(af(b,(K|0)<0?y+((J&255)<<4)|0:_+(J<<4)|0,(K&4194304|0)==0?_+((S&511)<<4)|0:y+((S&255)<<4)|0)|0)==(L|0);S=c[A>>2]|0;if(U){U=c[S>>2]|0;J=U>>>6&255;if(!J)ka=S;else{fd(b,(c[z>>2]|0)+(J<<4)+-16|0);ka=c[A>>2]|0}la=ka+((U>>>14)+-131070<<2)|0}else la=S+4|0;c[A>>2]=la;aa=c[z>>2]|0;break}case 26:{S=K>>>23;U=K>>>14;J=(bf(b,(K|0)<0?y+((S&255)<<4)|0:_+(S<<4)|0,(K&4194304|0)==0?_+((U&511)<<4)|0:y+((U&255)<<4)|0)|0)==(L|0);U=c[A>>2]|0;if(J){J=c[U>>2]|0;S=J>>>6&255;if(!S)ma=U;else{fd(b,(c[z>>2]|0)+(S<<4)+-16|0);ma=c[A>>2]|0}na=ma+((J>>>14)+-131070<<2)|0}else na=U+4|0;c[A>>2]=na;aa=c[z>>2]|0;break}case 27:{U=c[_+(L<<4)+8>>2]|0;J=(U|0)==0;if(!(K&8372224)){if(!J)if(!((U|0)==1?!(c[$>>2]|0):0))Z=115}else if(!J){if((U|0)==1?(c[$>>2]|0)==0:0)Z=115}else Z=115;if((Z|0)==115){Z=0;c[A>>2]=(c[A>>2]|0)+4;aa=_;break c}U=c[A>>2]|0;J=c[U>>2]|0;S=J>>>6&255;if(!S)oa=U;else{fd(b,(c[z>>2]|0)+(S<<4)+-16|0);oa=c[A>>2]|0}c[A>>2]=oa+((J>>>14)+-131070<<2);aa=_;break}case 28:{J=K>>>23;S=_+(J<<4)|0;U=c[_+(J<<4)+8>>2]|0;J=(U|0)==0;if(!(K&8372224))if(!J)if((U|0)==1?(c[S>>2]|0)==0:0)Z=127;else Z=126;else Z=127;else if(!J)if((U|0)==1?(c[S>>2]|0)==0:0)Z=126;else Z=127;else Z=126;if((Z|0)==126){Z=0;pa=(c[A>>2]|0)+4|0}else if((Z|0)==127){Z=0;J=S;S=c[J+4>>2]|0;W=$;c[W>>2]=c[J>>2];c[W+4>>2]=S;c[_+(L<<4)+8>>2]=U;U=c[A>>2]|0;S=c[U>>2]|0;W=S>>>6&255;if(!W)qa=U;else{fd(b,(c[z>>2]|0)+(W<<4)+-16|0);qa=c[A>>2]|0}pa=qa+((S>>>14)+-131070<<2)|0}c[A>>2]=pa;aa=_;break}case 29:{S=K>>>23;W=K>>>14&511;if(S|0)c[n>>2]=$+(S<<4);if(!(Pc(b,$,W+-1|0)|0)){Z=137;break b}if(W|0)c[n>>2]=c[G>>2];aa=c[z>>2]|0;break}case 30:{W=K>>>23;if(W|0)c[n>>2]=$+(W<<4);if(!(Pc(b,$,-1)|0)){Z=142;break b}aa=c[z>>2]|0;break}case 32:{da=+g[$+32>>3];ca=da+ +g[$>>3];ba=+g[$+16>>3];if(da>0.0){if(!(ca<=ba)){aa=_;break c}}else if(!(ba<=ca)){aa=_;break c}c[A>>2]=(c[A>>2]|0)+((K>>>14)+-131071<<2);g[$>>3]=ca;c[_+(L<<4)+8>>2]=3;W=$+48|0;g[W>>3]=ca;c[W+8>>2]=3;aa=_;break}case 33:{W=$+16|0;S=$+32|0;U=_+(L<<4)+8|0;J=c[U>>2]|0;if((J|0)!=3){if((J&15|0)!=4){Z=164;break a}J=c[$>>2]|0;if(!(Nd(J+16|0,c[J+12>>2]|0,j)|0)){Z=164;break a}g[$>>3]=+g[j>>3];c[U>>2]=3}J=W+8|0;V=c[J>>2]|0;if((V|0)!=3){if((V&15|0)!=4){Z=169;break a}V=c[W>>2]|0;if(!(Nd(V+16|0,c[V+12>>2]|0,j)|0)){Z=169;break a}g[W>>3]=+g[j>>3];c[J>>2]=3}J=S+8|0;W=c[J>>2]|0;if((W|0)==3)ra=S;else{if((W&15|0)!=4){Z=175;break a}W=c[S>>2]|0;if(!(Nd(W+16|0,c[W+12>>2]|0,j)|0)){Z=175;break a}g[S>>3]=+g[j>>3];c[J>>2]=3;ra=S}g[$>>3]=+g[$>>3]-+g[ra>>3];c[U>>2]=3;c[A>>2]=(c[A>>2]|0)+((K>>>14)+-131071<<2);aa=_;break}case 34:{U=$+48|0;S=$+32|0;J=U+32|0;W=S;V=c[W+4>>2]|0;fa=J;c[fa>>2]=c[W>>2];c[fa+4>>2]=V;c[J+8>>2]=c[S+8>>2];S=$+16|0;J=U+16|0;V=S;fa=c[V+4>>2]|0;W=J;c[W>>2]=c[V>>2];c[W+4>>2]=fa;c[J+8>>2]=c[S+8>>2];S=$;J=c[S+4>>2]|0;fa=U;c[fa>>2]=c[S>>2];c[fa+4>>2]=J;c[U+8>>2]=c[_+(L<<4)+8>>2];c[n>>2]=U+48;Rc(b,U,K>>>14&511,1);U=c[z>>2]|0;c[n>>2]=c[B>>2];J=c[A>>2]|0;c[A>>2]=J+4;fa=c[J>>2]|0;sa=fa;ta=U;ua=U+((fa>>>6&255)<<4)|0;Z=178;break}case 35:{sa=K;ta=_;ua=$;Z=178;break}case 36:{fa=K>>>23;U=K>>>14&511;if(!fa)va=((c[n>>2]|0)-$>>4)+-1|0;else va=fa;if(!U){fa=c[A>>2]|0;c[A>>2]=fa+4;wa=(c[fa>>2]|0)>>>6}else wa=U;U=c[$>>2]|0;fa=va+-50+(wa*50|0)|0;if((fa|0)>(c[U+28>>2]|0))Ke(b,U,fa);if((va|0)>0){J=U+5|0;S=fa;fa=va;while(1){W=$+(fa<<4)|0;Ie(b,U,S,W);S=S+-1|0;if((c[W+8>>2]&64|0?a[(c[W>>2]|0)+5>>0]&3:0)?a[J>>0]&4:0)ld(b,U);if((fa|0)<=1)break;else fa=fa+-1|0}}c[n>>2]=c[H>>2];aa=_;break}case 37:{fa=c[(c[(c[x>>2]|0)+16>>2]|0)+(K>>>14<<2)>>2]|0;U=fa+32|0;J=c[U>>2]|0;S=c[fa+40>>2]|0;W=c[fa+28>>2]|0;d:do if(!J)Z=202;else{if((S|0)>0){V=J+16|0;T=0;do{xa=d[W+(T<<3)+5>>0]|0;if(!(a[W+(T<<3)+4>>0]|0))ya=c[(c[v+16+(xa<<2)>>2]|0)+8>>2]|0;else ya=_+(xa<<4)|0;if((c[(c[V+(T<<2)>>2]|0)+8>>2]|0)!=(ya|0)){Z=202;break d}T=T+1|0}while((T|0)<(S|0))}c[$>>2]=J;c[_+(L<<4)+8>>2]=70}while(0);if((Z|0)==202){Z=0;J=bd(b,S)|0;c[J+12>>2]=fa;c[$>>2]=J;c[_+(L<<4)+8>>2]=70;if((S|0)>0){T=J+16|0;V=0;do{xa=d[W+(V<<3)+5>>0]|0;if(!(a[W+(V<<3)+4>>0]|0))c[T+(V<<2)>>2]=c[v+16+(xa<<2)>>2];else{za=dd(b,_+(xa<<4)|0)|0;c[T+(V<<2)>>2]=za}V=V+1|0}while((V|0)!=(S|0))}if(a[fa+5>>0]&4)md(b,fa,J);c[U>>2]=J}if((c[(c[o>>2]|0)+12>>2]|0)>0){c[n>>2]=$+16;Ed(b);c[n>>2]=c[F>>2]}aa=c[z>>2]|0;break}case 38:{S=K>>>23;V=S+-1|0;T=(_-(c[u>>2]|0)>>4)-(d[(c[x>>2]|0)+76>>0]|0)|0;W=T+-1|0;if(!S){if(((c[p>>2]|0)-(c[n>>2]|0)>>4|0)<(T|0))Mc(b,W);S=c[z>>2]|0;za=S+(L<<4)|0;c[n>>2]=za+(W<<4);Aa=W;Ba=S;Ca=za}else{Aa=V;Ba=_;Ca=$}if((Aa|0)>0){V=Ba+(1-T<<4)|0;T=0;do{if((T|0)<(W|0)){za=V+(T<<4)|0;S=za;xa=c[S+4>>2]|0;Da=Ca+(T<<4)|0;c[Da>>2]=c[S>>2];c[Da+4>>2]=xa;Ea=c[za+8>>2]|0}else Ea=0;c[Ca+(T<<4)+8>>2]=Ea;T=T+1|0}while((T|0)!=(Aa|0));aa=Ba}else aa=Ba;break}default:aa=_}while(0);if((Z|0)==178){Z=0;L=c[ua+24>>2]|0;if(!L)aa=ta;else{M=ua+16|0;T=c[M+4>>2]|0;V=ua;c[V>>2]=c[M>>2];c[V+4>>2]=T;c[ua+8>>2]=L;c[A>>2]=(c[A>>2]|0)+((sa>>>14)+-131071<<2);aa=ta}}I=aa}if((Z|0)==137){Z=0;I=c[k>>2]|0;A=I+18|0;a[A>>0]=a[A>>0]|4;Fa=I}else if((Z|0)==142){Z=0;I=c[k>>2]|0;A=c[I+8>>2]|0;z=c[I>>2]|0;F=c[A>>2]|0;v=I+24|0;H=(c[v>>2]|0)+(d[(c[(c[z>>2]|0)+12>>2]|0)+76>>0]<<4)|0;if((c[(c[x>>2]|0)+56>>2]|0)>0)fd(b,c[A+24>>2]|0);if(z>>>0<H>>>0){B=0;G=z;do{y=G;D=c[y+4>>2]|0;C=F+(B<<4)|0;c[C>>2]=c[y>>2];c[C+4>>2]=D;c[F+(B<<4)+8>>2]=c[z+(B<<4)+8>>2];B=B+1|0;G=z+(B<<4)|0}while(G>>>0<H>>>0)}H=z;c[A+24>>2]=F+((c[v>>2]|0)-H>>4<<4);G=F+((c[n>>2]|0)-H>>4<<4)|0;c[n>>2]=G;c[A+4>>2]=G;c[A+28>>2]=c[I+28>>2];G=A+18|0;a[G>>0]=a[G>>0]|64;c[k>>2]=A;Fa=A}else if((Z|0)==149){Z=0;G=K>>>23;if(G|0)c[n>>2]=$+(G<<4)+-16;if((c[(c[x>>2]|0)+56>>2]|0)>0)fd(b,_);G=Qc(b,$)|0;if(!(a[u+18>>0]&4)){Z=225;break}H=c[k>>2]|0;if(!G)Fa=H;else{c[n>>2]=c[H+4>>2];Fa=H}}u=Fa}if((Z|0)==22){if(!O){Ga=c[Q>>2]|0;Ha=Ga+-4|0;c[Q>>2]=Ha;Ia=a[P>>0]|0;Ja=Ia|-128;a[P>>0]=Ja;Ka=c[n>>2]|0;La=Ka+-16|0;c[N>>2]=La;Jc(b,1)}c[m>>2]=1;Ga=c[Q>>2]|0;Ha=Ga+-4|0;c[Q>>2]=Ha;Ia=a[P>>0]|0;Ja=Ia|-128;a[P>>0]=Ja;Ka=c[n>>2]|0;La=Ka+-16|0;c[N>>2]=La;Jc(b,1)}else if((Z|0)==164)Dc(b,7966,i);else if((Z|0)==169)Dc(b,8003,h);else if((Z|0)==175)Dc(b,8032,f);else if((Z|0)==225){Pa=e;return}}function jf(a){a=a|0;var b=0,e=0,f=0,g=0,h=0;b=Pa;Pa=Pa+16|0;e=b;f=Va[c[a+8>>2]&255](c[a+16>>2]|0,c[a+12>>2]|0,e)|0;g=c[e>>2]|0;if((f|0)==0|(g|0)==0){h=-1;Pa=b;return h|0}c[a>>2]=g+-1;c[a+4>>2]=f+1;h=d[f>>0]|0;Pa=b;return h|0}function kf(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;c[b+16>>2]=a;c[b+8>>2]=d;c[b+12>>2]=e;c[b>>2]=0;c[b+4>>2]=0;return}function lf(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0;e=Pa;Pa=Pa+16|0;f=e;if(!d){g=0;Pa=e;return g|0}h=a+16|0;i=a+8|0;j=a+12|0;k=a+4|0;l=d;d=b;b=c[a>>2]|0;while(1){if(!b){m=Va[c[i>>2]&255](c[h>>2]|0,c[j>>2]|0,f)|0;n=c[f>>2]|0;if((m|0)==0|(n|0)==0){g=l;o=8;break}c[a>>2]=n;c[k>>2]=m;p=n;q=m}else{p=b;q=c[k>>2]|0}m=l>>>0>p>>>0?p:l;Un(d|0,q|0,m|0)|0;b=(c[a>>2]|0)-m|0;c[a>>2]=b;c[k>>2]=(c[k>>2]|0)+m;l=l-m|0;if(!l){g=0;o=8;break}else d=d+m|0}if((o|0)==8){Pa=e;return g|0}return 0}function mf(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0;e=b+8|0;f=c[e>>2]|0;if(f>>>0>=d>>>0){g=c[b>>2]|0;return g|0}h=d>>>0>32?d:32;if((h+1|0)>>>0>4294967293)Gd(a);d=Hd(a,c[b>>2]|0,f,h)|0;c[b>>2]=d;c[e>>2]=h;g=d;return g|0}function nf(b,d,e,f){b=b|0;d=d|0;e=e|0;f=f|0;var g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0,z=0,A=0;g=Pa;Pa=Pa+256|0;h=g+40|0;i=g+32|0;j=g+24|0;k=g+16|0;l=g+8|0;m=g;n=g+148|0;o=g+48|0;p=gb(b)|0;q=1;r=1;while(1)if(!(xc(d,r,n)|0))break;else{s=r;r=r<<1;q=s}if((q|0)<(r|0)){s=r;t=q;while(1){q=(s+t|0)/2|0;u=(xc(d,q,n)|0)==0;v=u?q:s;t=u?t:q+1|0;if((t|0)>=(v|0)){w=v;break}else s=v}}else w=r;r=(w|0)>23?12:0;if(e|0){c[m>>2]=e;Kb(b,10714,m)|0}Hb(b,8060,16)|0;if(!(xc(d,f,o)|0)){x=gb(b)|0;y=x-p|0;mc(b,y);Pa=g;return}m=w+-11|0;w=o+36|0;e=o+20|0;s=o+8|0;t=o+12|0;n=o+35|0;v=o+4|0;q=o+24|0;u=f;while(1){f=u+1|0;if((f|0)==(r|0)){Hb(b,8077,5)|0;z=m}else{Ac(d,8083,o)|0;c[l>>2]=w;Kb(b,8088,l)|0;A=c[e>>2]|0;if((A|0)>0){c[k>>2]=A;Kb(b,8094,k)|0}Hb(b,8098,4)|0;a:do if(!(a[c[s>>2]>>0]|0))switch(a[c[t>>2]>>0]|0){case 109:{Hb(b,8117,10)|0;break a;break}case 67:{if(!(of(b,o)|0)){Hb(b,13353,1)|0;break a}else{A=yb(b,-1,0)|0;c[i>>2]=A;Kb(b,8103,i)|0;ib(b,-2);break a}break}default:{A=c[q>>2]|0;c[h>>2]=w;c[h+4>>2]=A;Kb(b,8128,h)|0;break a}}else{c[j>>2]=c[v>>2];Kb(b,8103,j)|0}while(0);if(a[n>>0]|0)Hb(b,8145,20)|0;mc(b,(gb(b)|0)-p|0);z=f}if(!(xc(d,z,o)|0))break;else u=z}x=gb(b)|0;y=x-p|0;mc(b,y);Pa=g;return}function of(a,b){a=a|0;b=b|0;var c=0,d=0;c=gb(a)|0;Ac(a,13112,b)|0;Tb(a,-1001e3,2);b=c+1|0;if(!(pf(a,b,2)|0)){hb(a,c);d=0;return d|0}else{lb(a,-1,b);hb(a,-3);d=1;return d|0}return 0}function pf(a,b,c){a=a|0;b=b|0;c=c|0;var d=0,e=0,f=0;if(!c){d=0;return d|0}if((nb(a,-1)|0)!=5){d=0;return d|0}Db(a);if(!(lc(a,-2)|0)){d=0;return d|0}e=c+-1|0;while(1){if((nb(a,-2)|0)==4){if(sb(a,b,-1)|0){f=7;break}if(pf(a,b,e)|0){f=9;break}}hb(a,-2);if(!(lc(a,-2)|0)){d=0;f=11;break}}if((f|0)==7){hb(a,-2);d=1;return d|0}else if((f|0)==9){ib(a,-2);Hb(a,13528,1)|0;jb(a,-2);mc(a,3);d=1;return d|0}else if((f|0)==11)return d|0;return 0}function qf(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0;e=Pa;Pa=Pa+128|0;f=e+16|0;g=e+8|0;h=e;i=e+28|0;if(!(xc(a,0,i)|0)){c[h>>2]=b;c[h+4>>2]=d;j=rf(a,8166,h)|0;Pa=e;return j|0}Ac(a,12581,i)|0;if(!(Cl(c[i+8>>2]|0,8188)|0)){h=b+-1|0;if(!h){c[g>>2]=c[i+4>>2];c[g+4>>2]=d;j=rf(a,8195,g)|0;Pa=e;return j|0}else k=h}else k=b;b=i+4|0;h=c[b>>2]|0;if(!h){if(!(of(a,i)|0))l=13353;else l=yb(a,-1,0)|0;c[b>>2]=l;m=l}else m=h;c[f>>2]=k;c[f+4>>2]=m;c[f+8>>2]=d;j=rf(a,8225,f)|0;Pa=e;return j|0}function rf(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0;e=Pa;Pa=Pa+128|0;f=e+16|0;g=e+24|0;h=e;c[h>>2]=d;if(xc(a,1,g)|0?(Ac(a,8255,g)|0,d=c[g+20>>2]|0,(d|0)>0):0){c[f>>2]=g+36;c[f+4>>2]=d;Kb(a,8258,f)|0;Jb(a,b,h)|0;mc(a,2);kc(a)|0}Hb(a,16476,0)|0;Jb(a,b,h)|0;mc(a,2);kc(a)|0;return 0}function sf(a,b){a=a|0;b=b|0;var d=0,e=0,f=0;d=Pa;Pa=Pa+112|0;e=d;f=d+8|0;if(xc(a,b,f)|0?(Ac(a,8255,f)|0,b=c[f+20>>2]|0,(b|0)>0):0){c[e>>2]=f+36;c[e+4>>2]=b;Kb(a,8258,e)|0;Pa=d;return}Hb(a,16476,0)|0;Pa=d;return}function tf(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0;e=Pa;Pa=Pa+16|0;f=e;g=Qk()|0;h=c[g>>2]|0;if(b|0){Mb(a,1);i=1;Pa=e;return i|0}Db(a);b=bl(h)|0;if(!d)Ib(a,b)|0;else{c[f>>2]=d;c[f+4>>2]=b;Kb(a,8266,f)|0}Fb(a,h);i=3;Pa=e;return i|0}function uf(a,b){a=a|0;b=b|0;var d=0,e=0;switch(b|0){case -1:{d=Qk()|0;e=c[d>>2]|0;Db(a);Ib(a,bl(e)|0)|0;Fb(a,e);return 3}case 0:{Mb(a,1);break}default:Db(a)}Ib(a,11419)|0;Fb(a,b);return 3}function vf(a,b){a=a|0;b=b|0;var c=0;Rb(a,-1001e3,b);if(nb(a,-1)|0){c=0;return c|0}hb(a,-2);Ub(a,0,0);mb(a,-1);Zb(a,-1001e3,b);c=1;return c|0}function wf(a,b){a=a|0;b=b|0;Rb(a,-1001e3,b);ac(a,-2)|0;return}function xf(a,b,c){a=a|0;b=b|0;c=c|0;var d=0,e=0;d=Ab(a,b)|0;if(!d){e=0;return e|0}if(!(Vb(a,b)|0)){e=0;return e|0}Rb(a,-1001e3,c);c=(sb(a,-1,-2)|0)==0;hb(a,-3);e=c?0:d;return e|0}function yf(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0;e=Pa;Pa=Pa+16|0;f=e;g=Ab(a,b)|0;if((g|0?Vb(a,b)|0:0)?(Rb(a,-1001e3,d),h=(sb(a,-1,-2)|0)==0,hb(a,-3),!h):0){i=g;Pa=e;return i|0}g=ob(a,nb(a,b)|0)|0;c[f>>2]=d;c[f+4>>2]=g;qf(a,b,Kb(a,8273,f)|0)|0;i=0;Pa=e;return i|0}function zf(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0;f=Pa;Pa=Pa+16|0;g=f+8|0;h=f;if(!d){i=yb(a,b,0)|0;if(!i){j=ob(a,4)|0;k=ob(a,nb(a,b)|0)|0;c[h>>2]=j;c[h+4>>2]=k;qf(a,b,Kb(a,8273,h)|0)|0;l=0}else l=i}else l=Af(a,b,d,0)|0;d=c[e>>2]|0;a:do if(d|0){i=0;h=d;while(1){if(!(Cl(h,l)|0)){m=i;break}i=i+1|0;h=c[e+(i<<2)>>2]|0;if(!h)break a}Pa=f;return m|0}while(0);c[g>>2]=l;m=qf(a,b,Kb(a,8293,g)|0)|0;Pa=f;return m|0}function Af(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0,i=0,j=0,k=0;f=Pa;Pa=Pa+16|0;g=f;if((nb(a,b)|0)>=1){h=yb(a,b,e)|0;if(h|0){i=h;Pa=f;return i|0}h=ob(a,4)|0;j=ob(a,nb(a,b)|0)|0;c[g>>2]=h;c[g+4>>2]=j;qf(a,b,Kb(a,8273,g)|0)|0;i=0;Pa=f;return i|0}if(!e){i=d;Pa=f;return i|0}if(!d)k=0;else k=_l(d)|0;c[e>>2]=k;i=d;Pa=f;return i|0}function Bf(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0;e=Pa;Pa=Pa+16|0;f=e;g=yb(a,b,d)|0;if(g|0){Pa=e;return g|0}d=ob(a,4)|0;h=ob(a,nb(a,b)|0)|0;c[f>>2]=d;c[f+4>>2]=h;qf(a,b,Kb(a,8273,f)|0)|0;Pa=e;return g|0}function Cf(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0;e=Pa;Pa=Pa+16|0;f=e;if(ab(a,b+20|0)|0){Pa=e;return}if(!d){rf(a,9456,e+8|0)|0;Pa=e;return}else{c[f>>2]=d;rf(a,8313,f)|0;Pa=e;return}}function Df(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0;e=Pa;Pa=Pa+16|0;f=e;if((nb(a,b)|0)==(d|0)){Pa=e;return}g=ob(a,d)|0;d=ob(a,nb(a,b)|0)|0;c[f>>2]=g;c[f+4>>2]=d;qf(a,b,Kb(a,8273,f)|0)|0;Pa=e;return}function Ef(a,b){a=a|0;b=b|0;if((nb(a,b)|0)!=-1)return;qf(a,b,9441)|0;return}function Ff(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0.0,h=0;d=Pa;Pa=Pa+16|0;e=d;f=d+8|0;g=+ub(a,b,f);if(c[f>>2]|0){Pa=d;return +g}f=ob(a,3)|0;h=ob(a,nb(a,b)|0)|0;c[e>>2]=f;c[e+4>>2]=h;qf(a,b,Kb(a,8273,e)|0)|0;Pa=d;return +g}function Gf(a,b,d){a=a|0;b=b|0;d=+d;var e=0,f=0,g=0,h=0.0,i=0;e=Pa;Pa=Pa+16|0;f=e;g=e+8|0;if((nb(a,b)|0)<1){h=d;Pa=e;return +h}d=+ub(a,b,g);if(!(c[g>>2]|0)){g=ob(a,3)|0;i=ob(a,nb(a,b)|0)|0;c[f>>2]=g;c[f+4>>2]=i;qf(a,b,Kb(a,8273,f)|0)|0}h=d;Pa=e;return +h}function Hf(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0;d=Pa;Pa=Pa+16|0;e=d;f=d+8|0;g=vb(a,b,f)|0;if(c[f>>2]|0){Pa=d;return g|0}f=ob(a,3)|0;h=ob(a,nb(a,b)|0)|0;c[e>>2]=f;c[e+4>>2]=h;qf(a,b,Kb(a,8273,e)|0)|0;Pa=d;return g|0}function If(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0;d=Pa;Pa=Pa+16|0;e=d;f=d+8|0;g=wb(a,b,f)|0;if(c[f>>2]|0){Pa=d;return g|0}f=ob(a,3)|0;h=ob(a,nb(a,b)|0)|0;c[e>>2]=f;c[e+4>>2]=h;qf(a,b,Kb(a,8273,e)|0)|0;Pa=d;return g|0}function Jf(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0;e=Pa;Pa=Pa+16|0;f=e;g=e+8|0;if((nb(a,b)|0)<1){h=d;Pa=e;return h|0}d=vb(a,b,g)|0;if(!(c[g>>2]|0)){g=ob(a,3)|0;i=ob(a,nb(a,b)|0)|0;c[f>>2]=g;c[f+4>>2]=i;qf(a,b,Kb(a,8273,f)|0)|0}h=d;Pa=e;return h|0}function Kf(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0;d=Pa;Pa=Pa+16|0;e=c[a+12>>2]|0;f=a+4|0;g=c[f>>2]|0;h=a+8|0;i=c[h>>2]|0;if((g-i|0)>>>0>=b>>>0){j=c[a>>2]|0;k=i;l=j+k|0;Pa=d;return l|0}m=g<<1;g=(m-i|0)>>>0<b>>>0?i+b|0:m;if(g>>>0<i>>>0|(g-i|0)>>>0<b>>>0)rf(e,8333,d)|0;b=oc(e,g)|0;Un(b|0,c[a>>2]|0,c[h>>2]|0)|0;if((c[a>>2]|0)!=(a+16|0))ib(e,-2);c[a>>2]=b;c[f>>2]=g;j=b;k=c[h>>2]|0;l=j+k|0;Pa=d;return l|0}function Lf(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0;e=Pa;Pa=Pa+16|0;f=c[a+12>>2]|0;g=a+4|0;h=c[g>>2]|0;i=a+8|0;j=c[i>>2]|0;if((h-j|0)>>>0>=d>>>0){k=c[a>>2]|0;l=j;m=k+l|0;Un(m|0,b|0,d|0)|0;n=c[i>>2]|0;o=n+d|0;c[i>>2]=o;Pa=e;return}p=h<<1;h=(p-j|0)>>>0<d>>>0?j+d|0:p;if(h>>>0<j>>>0|(h-j|0)>>>0<d>>>0)rf(f,8333,e)|0;j=oc(f,h)|0;Un(j|0,c[a>>2]|0,c[i>>2]|0)|0;if((c[a>>2]|0)!=(a+16|0))ib(f,-2);c[a>>2]=j;c[g>>2]=h;k=j;l=c[i>>2]|0;m=k+l|0;Un(m|0,b|0,d|0)|0;n=c[i>>2]|0;o=n+d|0;c[i>>2]=o;Pa=e;return}function Mf(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0;d=Pa;Pa=Pa+16|0;e=_l(b)|0;f=c[a+12>>2]|0;g=a+4|0;h=c[g>>2]|0;i=a+8|0;j=c[i>>2]|0;if((h-j|0)>>>0>=e>>>0){k=c[a>>2]|0;l=j;m=k+l|0;Un(m|0,b|0,e|0)|0;n=c[i>>2]|0;o=n+e|0;c[i>>2]=o;Pa=d;return}p=h<<1;h=(p-j|0)>>>0<e>>>0?j+e|0:p;if(h>>>0<j>>>0|(h-j|0)>>>0<e>>>0)rf(f,8333,d)|0;j=oc(f,h)|0;Un(j|0,c[a>>2]|0,c[i>>2]|0)|0;if((c[a>>2]|0)!=(a+16|0))ib(f,-2);c[a>>2]=j;c[g>>2]=h;k=j;l=c[i>>2]|0;m=k+l|0;Un(m|0,b|0,e|0)|0;n=c[i>>2]|0;o=n+e|0;c[i>>2]=o;Pa=d;return}function Nf(a){a=a|0;var b=0;b=c[a+12>>2]|0;Hb(b,c[a>>2]|0,c[a+8>>2]|0)|0;if((c[a>>2]|0)==(a+16|0))return;ib(b,-2);return}function Of(a,b){a=a|0;b=b|0;var d=0,e=0;d=a+8|0;e=(c[d>>2]|0)+b|0;c[d>>2]=e;d=c[a+12>>2]|0;Hb(d,c[a>>2]|0,e)|0;if((c[a>>2]|0)==(a+16|0))return;ib(d,-2);return}function Pf(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0;b=Pa;Pa=Pa+16|0;d=b+4|0;e=a+12|0;f=c[e>>2]|0;g=yb(f,-1,d)|0;h=a+16|0;if((c[a>>2]|0)!=(h|0))jb(f,-2);i=c[d>>2]|0;d=c[e>>2]|0;e=a+4|0;j=c[e>>2]|0;k=a+8|0;l=c[k>>2]|0;if((j-l|0)>>>0>=i>>>0){m=c[a>>2]|0;n=l;o=m+n|0;Un(o|0,g|0,i|0)|0;p=c[k>>2]|0;q=p+i|0;c[k>>2]=q;r=c[a>>2]|0;s=(r|0)==(h|0);t=s?-1:-2;ib(f,t);Pa=b;return}u=j<<1;j=(u-l|0)>>>0<i>>>0?l+i|0:u;if(j>>>0<l>>>0|(j-l|0)>>>0<i>>>0)rf(d,8333,b)|0;l=oc(d,j)|0;Un(l|0,c[a>>2]|0,c[k>>2]|0)|0;if((c[a>>2]|0)!=(h|0))ib(d,-2);c[a>>2]=l;c[e>>2]=j;m=l;n=c[k>>2]|0;o=m+n|0;Un(o|0,g|0,i|0)|0;p=c[k>>2]|0;q=p+i|0;c[k>>2]=q;r=c[a>>2]|0;s=(r|0)==(h|0);t=s?-1:-2;ib(f,t);Pa=b;return}function Qf(a,b){a=a|0;b=b|0;c[b+12>>2]=a;c[b>>2]=b+16;c[b+8>>2]=0;c[b+4>>2]=1024;return}function Rf(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0;c[b+12>>2]=a;e=b+16|0;c[b>>2]=e;f=b+8|0;c[f>>2]=0;g=b+4|0;c[g>>2]=1024;if(d>>>0<=1024){h=e;i=0;j=h+i|0;return j|0}k=d>>>0>2048?d:2048;d=oc(a,k)|0;Un(d|0,c[b>>2]|0,c[f>>2]|0)|0;if((c[b>>2]|0)!=(e|0))ib(a,-2);c[b>>2]=d;c[g>>2]=k;h=d;i=c[f>>2]|0;j=h+i|0;return j|0}function Sf(b,d,e){b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0;f=Pa;Pa=Pa+1088|0;g=f+40|0;h=f+24|0;i=f+8|0;j=f;k=f+56|0;l=f+52|0;m=(gb(b)|0)+1|0;if(d){c[j>>2]=d;Kb(b,8357,j)|0;j=qm(d,13355)|0;c[k+4>>2]=j;if(!j){j=Qk()|0;n=bl(c[j>>2]|0)|0;j=(yb(b,m,0)|0)+1|0;c[i>>2]=11062;c[i+4>>2]=j;c[i+8>>2]=n;Kb(b,8361,i)|0;ib(b,m);o=7;Pa=f;return o|0}}else{Hb(b,8350,6)|0;c[k+4>>2]=c[1401]}if(Tf(k,l)|0){i=c[k>>2]|0;c[k>>2]=i+1;a[k+8+i>>0]=10}i=c[l>>2]|0;n=(d|0)!=0;do if(n&(i|0)==27){j=k+4|0;p=xm(d,8378,c[j>>2]|0)|0;c[j>>2]=p;if(p|0){Tf(k,l)|0;q=c[l>>2]|0;break}p=Qk()|0;j=bl(c[p>>2]|0)|0;p=(yb(b,m,0)|0)+1|0;c[h>>2]=8381;c[h+4>>2]=p;c[h+8>>2]=j;Kb(b,8361,h)|0;ib(b,m);o=7;Pa=f;return o|0}else q=i;while(0);if((q|0)!=-1){i=c[k>>2]|0;c[k>>2]=i+1;a[k+8+i>>0]=q}q=gc(b,134,k,yb(b,-1,0)|0,e)|0;e=c[k+4>>2]|0;k=mm(e)|0;if(n)bm(e)|0;if(!k){ib(b,m);o=q;Pa=f;return o|0}else{hb(b,m);q=Qk()|0;k=bl(c[q>>2]|0)|0;q=(yb(b,m,0)|0)+1|0;c[g>>2]=10810;c[g+4>>2]=q;c[g+8>>2]=k;Kb(b,8361,g)|0;ib(b,m);o=7;Pa=f;return o|0}return 0}function Tf(b,d){b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0;c[b>>2]=0;e=b+4|0;f=Am(c[e>>2]|0)|0;a:do switch(f|0){case -1:{g=0;h=f;break}case 239:{i=c[b>>2]|0;c[b>>2]=i+1;a[b+8+i>>0]=-17;i=Am(c[e>>2]|0)|0;switch(i|0){case -1:{g=0;h=i;break a;break}case 187:break;default:{j=i;k=5;break a}}i=c[b>>2]|0;c[b>>2]=i+1;a[b+8+i>>0]=-69;i=Am(c[e>>2]|0)|0;switch(i|0){case -1:{g=0;h=i;break a;break}case 191:break;default:{j=i;k=5;break a}}a[(c[b>>2]|0)+(b+8)>>0]=-65;c[b>>2]=0;j=Am(c[e>>2]|0)|0;k=5;break}default:{j=f;k=5}}while(0);if((k|0)==5){c[d>>2]=j;if((j|0)!=35){l=0;return l|0}b:while(1)switch(Am(c[e>>2]|0)|0){case 10:case -1:{break b;break}default:{}}g=1;h=Am(c[e>>2]|0)|0}c[d>>2]=h;l=g;return l|0}function Uf(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0;a=c[b>>2]|0;if((a|0)>0){c[d>>2]=a;c[b>>2]=0;e=b+8|0;return e|0}a=b+4|0;if(Im(c[a>>2]|0)|0){e=0;return e|0}f=b+8|0;b=Lm(f,1,1024,c[a>>2]|0)|0;c[d>>2]=b;e=f;return e|0}function Vf(a,b,d,e,f){a=a|0;b=b|0;d=d|0;e=e|0;f=f|0;var g=0,h=0;g=Pa;Pa=Pa+16|0;h=g;c[h>>2]=b;c[h+4>>2]=d;d=gc(a,135,h,e,f)|0;Pa=g;return d|0}function Wf(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0;a=b+4|0;e=c[a>>2]|0;if(!e){f=0;return f|0}c[d>>2]=e;c[a>>2]=0;f=c[b>>2]|0;return f|0}function Xf(a,b,c){a=a|0;b=b|0;c=c|0;var d=0;if(!(Vb(a,b)|0)){d=0;return d|0}Ib(a,c)|0;Sb(a,-2);if(!(nb(a,-1)|0)){hb(a,-3);d=0;return d|0}else{ib(a,-2);d=1;return d|0}return 0}function Yf(a,b,c){a=a|0;b=b|0;c=c|0;var d=0,e=0;d=fb(a,b)|0;if(!(Vb(a,d)|0)){e=0;return e|0}Ib(a,c)|0;Sb(a,-2);if(!(nb(a,-1)|0)){hb(a,-3);e=0;return e|0}else{ib(a,-2);mb(a,d);dc(a,1,1,0,0);e=1;return e|0}return 0}function Zf(a,b){a=a|0;b=b|0;var d=0,e=0;d=Pa;Pa=Pa+16|0;e=d+4|0;nc(a,b);b=vb(a,-1,e)|0;if(!(c[e>>2]|0))rf(a,8388,d)|0;hb(a,-2);Pa=d;return b|0}function _f(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0;e=Pa;Pa=Pa+16|0;f=e;a:do if(!(Yf(a,b,10834)|0))switch(nb(a,b)|0){case 4:case 3:{mb(a,b);break a;break}case 1:{g=(xb(a,b)|0)==0;Ib(a,g?8845:8904)|0;break a;break}case 0:{Hb(a,8881,3)|0;break a;break}default:{g=ob(a,nb(a,b)|0)|0;h=Cb(a,b)|0;c[f>>2]=g;c[f+4>>2]=h;Kb(a,8418,f)|0;break a}}while(0);f=yb(a,-1,d)|0;Pa=e;return f|0}function $f(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0;e=Pa;Pa=Pa+16|0;f=e;ag(a,-1001e3,12986,1)|0;Rb(a,-1,b);if((nb(a,-1)|0)==5){ib(a,-2);Pa=e;return}hb(a,-2);Tb(a,-1001e3,2);if(ag(a,0,b,d)|0){c[f>>2]=b;rf(a,8425,f)|0}mb(a,-1);Zb(a,-3,b);ib(a,-2);Pa=e;return}function ag(b,c,d,e){b=b|0;c=c|0;d=d|0;e=e|0;var f=0,g=0,h=0;if(c|0)mb(b,c);c=d;while(1){d=rm(c,46)|0;if(!d)f=c+(_l(c)|0)|0;else f=d;d=f-c|0;Hb(b,c,d)|0;Sb(b,-2);if(nb(b,-1)|0){if((nb(b,-1)|0)!=5)break}else{hb(b,-2);Ub(b,0,(a[f>>0]|0)==46?1:e);Hb(b,c,d)|0;mb(b,-2);Yb(b,-4)}ib(b,-2);if((a[f>>0]|0)==46)c=f+1|0;else{g=0;h=11;break}}if((h|0)==11)return g|0;hb(b,-3);g=c;return g|0}function bg(a,b){a=a|0;b=+b;var c=0,d=0,e=0,f=0,h=0,i=0.0;c=Pa;Pa=Pa+32|0;d=c+24|0;e=c+8|0;f=c;h=eb(a)|0;if((h|0)==(eb(0)|0)){i=+g[h>>3];if(i!=b){g[e>>3]=b;g[e+8>>3]=i;rf(a,8499,e)|0}}else rf(a,8473,f)|0;Eb(a,-4660.0);if((vb(a,-1,0)|0)==-4660?(wb(a,-1,0)|0)==-4660:0){hb(a,-2);Pa=c;return}rf(a,8553,d)|0;hb(a,-2);Pa=c;return}function cg(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0;e=Pa;Pa=Pa+16|0;f=e;bg(a,502.0);if(!(ab(a,d+20|0)|0)){c[f>>2]=8455;rf(a,8313,f)|0}if(!(c[b>>2]|0)){g=~d;hb(a,g);Pa=e;return}f=-2-d|0;h=0-d|0;if((d|0)<=0){i=b;do{Lb(a,c[i+4>>2]|0,d);Zb(a,f,c[i>>2]|0);i=i+8|0}while((c[i>>2]|0)!=0);g=~d;hb(a,g);Pa=e;return}i=b;do{b=0;do{mb(a,h);b=b+1|0}while((b|0)!=(d|0));Lb(a,c[i+4>>2]|0,d);Zb(a,f,c[i>>2]|0);i=i+8|0}while((c[i>>2]|0)!=0);g=~d;hb(a,g);Pa=e;return}function dg(a,b,c){a=a|0;b=b|0;c=c|0;var d=0,e=0;Rb(a,b,c);if((nb(a,-1)|0)==5){d=1;return d|0}hb(a,-2);e=fb(a,b)|0;Ub(a,0,0);mb(a,-1);Zb(a,e,c);d=0;return d|0}function eg(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;Lb(a,c,0);Ib(a,b)|0;dc(a,1,1,0,0);dg(a,-1001e3,12986)|0;mb(a,-2);Zb(a,-2,b);hb(a,-2);if(!d)return;mb(a,-1);Xb(a,b);return}function fg(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0,z=0,A=0,B=0,C=0,D=0,E=0,F=0,G=0,H=0,I=0;f=Pa;Pa=Pa+1072|0;g=f+16|0;h=f+8|0;i=f;j=f+24|0;k=_l(d)|0;l=j+12|0;c[l>>2]=a;m=j+16|0;c[j>>2]=m;n=j+8|0;c[n>>2]=0;o=j+4|0;c[o>>2]=1024;p=Um(b,d)|0;if(!p){q=b;r=0;s=1024;t=a}else{u=b;b=p;p=0;v=1024;w=a;while(1){x=b-u|0;if((v-p|0)>>>0<x>>>0){y=v<<1;z=(y-p|0)>>>0<x>>>0?p+x|0:y;if(z>>>0<p>>>0|(z-p|0)>>>0<x>>>0)rf(w,8333,i)|0;y=oc(w,z)|0;Un(y|0,c[j>>2]|0,c[n>>2]|0)|0;if((c[j>>2]|0)!=(m|0))ib(w,-2);c[j>>2]=y;c[o>>2]=z;A=y;B=c[n>>2]|0}else{A=c[j>>2]|0;B=p}Un(A+B|0,u|0,x|0)|0;y=(c[n>>2]|0)+x|0;c[n>>2]=y;x=_l(e)|0;z=c[l>>2]|0;C=c[o>>2]|0;if((C-y|0)>>>0<x>>>0){D=C<<1;C=(D-y|0)>>>0<x>>>0?x+y|0:D;if(C>>>0<y>>>0|(C-y|0)>>>0<x>>>0)rf(z,8333,h)|0;D=oc(z,C)|0;Un(D|0,c[j>>2]|0,c[n>>2]|0)|0;if((c[j>>2]|0)!=(m|0))ib(z,-2);c[j>>2]=D;c[o>>2]=C;E=D;F=c[n>>2]|0}else{E=c[j>>2]|0;F=y}Un(E+F|0,e|0,x|0)|0;y=(c[n>>2]|0)+x|0;c[n>>2]=y;x=b+k|0;b=Um(x,d)|0;D=c[l>>2]|0;C=c[o>>2]|0;if(!b){q=x;r=y;s=C;t=D;break}else{u=x;p=y;v=C;w=D}}}w=_l(q)|0;if((s-r|0)>>>0<w>>>0){v=s<<1;s=(v-r|0)>>>0<w>>>0?r+w|0:v;if(s>>>0<r>>>0|(s-r|0)>>>0<w>>>0)rf(t,8333,g)|0;g=oc(t,s)|0;Un(g|0,c[j>>2]|0,c[n>>2]|0)|0;if((c[j>>2]|0)!=(m|0))ib(t,-2);c[j>>2]=g;c[o>>2]=s;G=g;H=c[n>>2]|0}else{G=c[j>>2]|0;H=r}Un(G+H|0,q|0,w|0)|0;q=(c[n>>2]|0)+w|0;c[n>>2]=q;n=c[l>>2]|0;Hb(n,c[j>>2]|0,q)|0;if((c[j>>2]|0)==(m|0)){I=yb(a,-1,0)|0;Pa=f;return I|0}ib(n,-2);I=yb(a,-1,0)|0;Pa=f;return I|0}function gg(){var a=0;a=se(129,0)|0;if(!a)return a|0;db(a,272)|0;return a|0}function hg(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;var e=0;if(!d){Ik(b);e=0}else e=Jk(b,d)|0;return e|0}function ig(a){a=a|0;var b=0,d=0,e=0,f=0;b=Pa;Pa=Pa+16|0;d=b;e=c[1433]|0;f=yb(a,-1,0)|0;c[d>>2]=f;al(e,8621,d)|0;fm(e)|0;Pa=b;return 0}function jg(a){a=a|0;eg(a,9269,273,1);hb(a,-2);eg(a,8671,274,1);hb(a,-2);eg(a,8679,275,1);hb(a,-2);eg(a,8689,276,1);hb(a,-2);eg(a,8695,277,1);hb(a,-2);eg(a,8698,278,1);hb(a,-2);eg(a,8701,279,1);hb(a,-2);eg(a,8708,280,1);hb(a,-2);eg(a,8714,281,1);hb(a,-2);eg(a,10161,282,1);hb(a,-2);eg(a,8719,283,1);hb(a,-2);dg(a,-1001e3,13001)|0;hb(a,-2);return}function kg(a){a=a|0;Ub(a,0,2);cg(a,400,0);return 1}function lg(a){a=a|0;Eb(a,+(wa(Af(a,1,8737,0)|0)|0));return 1}function mg(a){a=a|0;Ib(a,xa(Af(a,1,8737,0)|0)|0)|0;return 1}function ng(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0;e=d+b|0;f=e+511|0;g=c[a+20>>2]|0;do if((g|0)>(c[a+24>>2]|0)?(h=(c[(c[a>>2]|0)+12>>2]|0)+(g+-1<<2)|0,i=c[h>>2]|0,(i&63|0)==4):0){j=i>>>6&255;k=j+(i>>>23)|0;if((j|0)>(b|0)|(k+1|0)<(b|0)?(j|0)<(b|0)|(j|0)>(e|0):0)break;l=(j|0)<(b|0)?j:b;c[h>>2]=l<<6&16320|i&8372287|((k|0)<(e|0)?f:k)-l<<23;return}while(0);og(a,b<<6|(d<<23)+-8388608|4)|0;return}function og(b,d){b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0,z=0,A=0,B=0,C=0,D=0,E=0,F=0,G=0;e=c[b>>2]|0;f=b+28|0;g=c[f>>2]|0;h=b+20|0;i=c[h>>2]|0;do if((g|0)!=-1){j=c[e+12>>2]|0;k=g;while(1){l=j+(k<<2)|0;m=c[l>>2]|0;n=(m>>>14)+-131071|0;o=k;k=(n|0)==-1?-1:k+1+n|0;if((o|0)>0?(n=l+-4|0,p=c[n>>2]|0,(a[272+(p&63)>>0]|0)<0):0){q=n;r=p}else{q=l;r=m}if((r&63|0)==28){c[q>>2]=r&8372224|r>>>23<<6|27;p=i+~o|0;if((((p|0)>-1?p:0-p|0)|0)>131071){s=8;break}t=c[l>>2]&16383;u=(p<<14)+2147467264|0}else{p=i+~o|0;if((((p|0)>-1?p:0-p|0)|0)>131071){s=11;break}t=(p<<14)+2147467264|0;u=m&16383}c[l>>2]=t|u;if((k|0)==-1){s=14;break}}if((s|0)==8)ah(c[b+12>>2]|0,8740);else if((s|0)==11)ah(c[b+12>>2]|0,8740);else if((s|0)==14){v=c[h>>2]|0;break}}else v=i;while(0);c[f>>2]=-1;f=e+48|0;if((v|0)<(c[f>>2]|0)){w=c[e+12>>2]|0;x=v}else{v=e+12|0;i=Fd(c[(c[b+12>>2]|0)+52>>2]|0,c[v>>2]|0,f,4,2147483645,8767)|0;c[v>>2]=i;w=i;x=c[h>>2]|0}c[w+(x<<2)>>2]=d;d=c[h>>2]|0;x=e+52|0;w=b+12|0;if((d|0)<(c[x>>2]|0)){y=e+20|0;z=d;A=c[w>>2]|0;B=A+8|0;C=c[B>>2]|0;D=c[y>>2]|0;E=D+(z<<2)|0;c[E>>2]=C;F=c[h>>2]|0;G=F+1|0;c[h>>2]=G;return F|0}else{d=e+20|0;e=Fd(c[(c[w>>2]|0)+52>>2]|0,c[d>>2]|0,x,4,2147483645,8767)|0;c[d>>2]=e;y=d;z=c[h>>2]|0;A=c[w>>2]|0;B=A+8|0;C=c[B>>2]|0;D=c[y>>2]|0;E=D+(z<<2)|0;c[E>>2]=C;F=c[h>>2]|0;G=F+1|0;c[h>>2]=G;return F|0}return 0}function pg(a,b,c,d,e){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;return og(a,c<<6|b|d<<23|e<<14)|0}function qg(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0;b=a+28|0;d=c[b>>2]|0;c[b>>2]=-1;b=og(a,2147450903)|0;if((d|0)==-1){e=b;return e|0}if((b|0)==-1){e=d;return e|0}f=c[(c[a>>2]|0)+12>>2]|0;g=b;while(1){h=f+(g<<2)|0;i=c[h>>2]|0;j=(i>>>14)+-131071|0;k=(j|0)==-1?-1:g+1+j|0;if((k|0)==-1)break;else g=k}f=d+~g|0;if((((f|0)>-1?f:0-f|0)|0)>131071)ah(c[a+12>>2]|0,8740);c[h>>2]=(f<<14)+2147467264|i&16383;e=b;return e|0}function rg(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return og(a,c<<6|b|d<<14)|0}function sg(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0;if((d|0)==-1)return;e=c[b>>2]|0;if((e|0)==-1){c[b>>2]=d;return}b=c[(c[a>>2]|0)+12>>2]|0;f=e;while(1){g=b+(f<<2)|0;h=c[g>>2]|0;e=(h>>>14)+-131071|0;i=(e|0)==-1?-1:f+1+e|0;if((i|0)==-1)break;else f=i}b=~f+d|0;if((((b|0)>-1?b:0-b|0)|0)>131071)ah(c[a+12>>2]|0,8740);c[g>>2]=h&16383|(b<<14)+2147467264;return}function tg(a,b,c){a=a|0;b=b|0;c=c|0;og(a,b<<6|(c<<23)+8388608|31)|0;return}function ug(a){a=a|0;var b=0;b=c[a+20>>2]|0;c[a+24>>2]=b;return b|0}function vg(b,d,e){b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0;if((c[b+20>>2]|0)==(e|0)){c[b+24>>2]=e;f=b+28|0;if((d|0)==-1)return;g=c[f>>2]|0;if((g|0)==-1){c[f>>2]=d;return}f=c[(c[b>>2]|0)+12>>2]|0;h=g;while(1){i=f+(h<<2)|0;j=c[i>>2]|0;g=(j>>>14)+-131071|0;k=(g|0)==-1?-1:h+1+g|0;if((k|0)==-1)break;else h=k}f=~h+d|0;if((((f|0)>-1?f:0-f|0)|0)>131071)ah(c[b+12>>2]|0,8740);c[i>>2]=(f<<14)+2147467264|j&16383;return}if((d|0)==-1)return;j=c[(c[b>>2]|0)+12>>2]|0;f=d;while(1){d=j+(f<<2)|0;i=c[d>>2]|0;h=(i>>>14)+-131071|0;k=f;f=(h|0)==-1?-1:f+1+h|0;if((k|0)>0?(h=d+-4|0,g=c[h>>2]|0,(a[272+(g&63)>>0]|0)<0):0){l=h;m=g}else{l=d;m=i}if((m&63|0)!=28){g=~k+e|0;if((((g|0)>-1?g:0-g|0)|0)>131071){n=20;break}else{o=g;p=i}}else{c[l>>2]=m&8372224|m>>>23<<6|27;i=~k+e|0;if((((i|0)>-1?i:0-i|0)|0)>131071){n=17;break}o=i;p=c[d>>2]|0}c[d>>2]=p&16383|(o<<14)+2147467264;if((f|0)==-1){n=22;break}}if((n|0)==17)ah(c[b+12>>2]|0,8740);else if((n|0)==20)ah(c[b+12>>2]|0,8740);else if((n|0)==22)return}function wg(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0,i=0;c[a+24>>2]=c[a+20>>2];d=a+28|0;if((b|0)==-1)return;e=c[d>>2]|0;if((e|0)==-1){c[d>>2]=b;return}d=c[(c[a>>2]|0)+12>>2]|0;f=e;while(1){g=d+(f<<2)|0;h=c[g>>2]|0;e=(h>>>14)+-131071|0;i=(e|0)==-1?-1:f+1+e|0;if((i|0)==-1)break;else f=i}d=~f+b|0;if((((d|0)>-1?d:0-d|0)|0)>131071)ah(c[a+12>>2]|0,8740);c[g>>2]=(d<<14)+2147467264|h&16383;return}function xg(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0;if((b|0)==-1)return;e=c[(c[a>>2]|0)+12>>2]|0;a=(d<<6)+64&16320;d=b;do{b=e+(d<<2)|0;f=c[b>>2]|0;g=(f>>>14)+-131071|0;c[b>>2]=f&-16321|a;d=(g|0)==-1?-1:d+1+g|0}while((d|0)!=-1);return}function yg(a,b,c){a=a|0;b=b|0;c=c|0;var d=0,e=0;d=b<<6;if((c|0)<262144){e=og(a,d|c<<14|1)|0;return e|0}else{b=og(a,d|2)|0;og(a,c<<6|39)|0;e=b;return e|0}return 0}function zg(b,e){b=b|0;e=e|0;var f=0;f=(d[b+48>>0]|0)+e|0;e=(c[b>>2]|0)+78|0;if((f|0)<=(d[e>>0]|0|0))return;if((f|0)>249)ah(c[b+12>>2]|0,8775);a[e>>0]=f;return}function Ag(b,e){b=b|0;e=e|0;var f=0,g=0,h=0;f=b+48|0;g=(d[f>>0]|0)+e|0;e=(c[b>>2]|0)+78|0;if((g|0)<=(d[e>>0]|0|0)){h=g&255;a[f>>0]=h;return}if((g|0)>249)ah(c[b+12>>2]|0,8775);b=g&255;a[e>>0]=b;h=b;a[f>>0]=h;return}function Bg(b,d){b=b|0;d=d|0;var e=0,f=0;e=Pa;Pa=Pa+16|0;f=e;c[f>>2]=d;c[f+8>>2]=(a[d+4>>0]|64)&255;d=Cg(b,f,f)|0;Pa=e;return d|0}function Cg(b,d,e){b=b|0;d=d|0;e=e|0;var f=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0;f=Pa;Pa=Pa+16|0;h=f;i=c[(c[b+12>>2]|0)+52>>2]|0;j=Je(i,c[b+4>>2]|0,d)|0;d=c[b>>2]|0;k=j+8|0;if(((c[k>>2]|0)==3?(g[h>>3]=+g[j>>3]+6755399441055744.0,l=c[h>>2]|0,h=c[d+8>>2]|0,(c[h+(l<<4)+8>>2]|0)==(c[e+8>>2]|0)):0)?cf(0,h+(l<<4)|0,e)|0:0){m=l;Pa=f;return m|0}l=d+44|0;h=c[l>>2]|0;n=b+32|0;b=c[n>>2]|0;g[j>>3]=+(b|0);c[k>>2]=3;k=c[l>>2]|0;j=d+8|0;if((b|0)<(k|0)){o=k;p=c[j>>2]|0}else{k=Fd(i,c[j>>2]|0,l,16,67108863,8810)|0;c[j>>2]=k;o=c[l>>2]|0;p=k}if((h|0)<(o|0)?(k=h+1|0,c[p+(h<<4)+8>>2]=0,(k|0)<(o|0)):0){h=k;do{c[p+(h<<4)+8>>2]=0;h=h+1|0}while((h|0)<(o|0))}o=e;h=c[o+4>>2]|0;k=p+(b<<4)|0;c[k>>2]=c[o>>2];c[k+4>>2]=h;h=e+8|0;c[p+(b<<4)+8>>2]=c[h>>2];c[n>>2]=(c[n>>2]|0)+1;if(!(c[h>>2]&64)){m=b;Pa=f;return m|0}h=c[e>>2]|0;if(!(a[h+5>>0]&3)){m=b;Pa=f;return m|0}if(!(a[d+5>>0]&4)){m=b;Pa=f;return m|0}jd(i,d,h);m=b;Pa=f;return m|0}function Dg(b,d){b=b|0;d=+d;var e=0,f=0,h=0,i=0,j=0,k=0,l=0,m=0;e=Pa;Pa=Pa+32|0;f=e;h=e+8|0;g[f>>3]=d;i=c[(c[b+12>>2]|0)+52>>2]|0;g[h>>3]=d;c[h+8>>2]=3;if(d!=d|0.0!=0.0|d==0.0){j=i+8|0;k=c[j>>2]|0;c[j>>2]=k+16;l=Ae(i,f,8)|0;c[k>>2]=l;c[k+8>>2]=(a[l+4>>0]|64)&255;l=Cg(b,(c[j>>2]|0)+-16|0,h)|0;c[j>>2]=(c[j>>2]|0)+-16;m=l;Pa=e;return m|0}else{m=Cg(b,h,h)|0;Pa=e;return m|0}return 0}function Eg(b,e,f){b=b|0;e=e|0;f=f|0;var g=0,h=0,i=0,j=0;switch(c[e>>2]|0){case 12:{g=(c[(c[b>>2]|0)+12>>2]|0)+(c[e+8>>2]<<2)|0;c[g>>2]=c[g>>2]&-8372225|(f<<14)+16384&8372224;return}case 13:{g=c[b>>2]|0;h=c[g+12>>2]|0;i=e+8|0;e=h+(c[i>>2]<<2)|0;c[e>>2]=c[e>>2]&8388607|(f<<23)+8388608;f=h+(c[i>>2]<<2)|0;i=b+48|0;h=a[i>>0]|0;e=h&255;c[f>>2]=e<<6|c[f>>2]&-16321;f=e+1|0;e=g+78|0;do if((h&255)>=(d[e>>0]|0))if((h&255)>248)ah(c[b+12>>2]|0,8775);else{g=f&255;a[e>>0]=g;j=g;break}else j=f&255;while(0);a[i>>0]=j;return}default:return}}function Fg(a,b){a=a|0;b=b|0;var d=0;switch(c[b>>2]|0){case 12:{c[b>>2]=6;d=b+8|0;c[d>>2]=(c[(c[(c[a>>2]|0)+12>>2]|0)+(c[d>>2]<<2)>>2]|0)>>>6&255;return}case 13:{d=(c[(c[a>>2]|0)+12>>2]|0)+(c[b+8>>2]<<2)|0;c[d>>2]=c[d>>2]&8388607|16777216;c[b>>2]=11;return}default:return}}function Gg(e,f){e=e|0;f=f|0;var g=0,h=0,i=0,j=0;switch(c[f>>2]|0){case 7:{c[f>>2]=6;return}case 8:{g=f+8|0;h=og(e,c[g>>2]<<23|5)|0;c[g>>2]=h;c[f>>2]=11;return}case 9:{h=f+8|0;g=b[h>>1]|0;if((g&256|0)==0?(d[e+46>>0]|0)<=(g|0):0){g=e+48|0;a[g>>0]=(a[g>>0]|0)+-1<<24>>24}g=h+2|0;if((a[h+3>>0]|0)==7)if((d[e+46>>0]|0)>(d[g>>0]|0))i=7;else{j=e+48|0;a[j>>0]=(a[j>>0]|0)+-1<<24>>24;i=7}else i=6;j=og(e,d[g>>0]<<23|i|b[h>>1]<<14)|0;c[h>>2]=j;c[f>>2]=11;return}case 12:{c[f>>2]=6;j=f+8|0;c[j>>2]=(c[(c[(c[e>>2]|0)+12>>2]|0)+(c[j>>2]<<2)>>2]|0)>>>6&255;return}case 13:{j=(c[(c[e>>2]|0)+12>>2]|0)+(c[f+8>>2]<<2)|0;c[j>>2]=c[j>>2]&8388607|16777216;c[f>>2]=11;return}default:return}}function Hg(b,e){b=b|0;e=e|0;var f=0,g=0,h=0,i=0,j=0,k=0,l=0;Gg(b,e);if(((c[e>>2]|0)==6?(f=c[e+8>>2]|0,(f&256|0)==0):0)?(f|0)>=(d[b+46>>0]|0|0):0){f=b+48|0;a[f>>0]=(a[f>>0]|0)+-1<<24>>24}f=b+48|0;g=a[f>>0]|0;h=(g&255)+1|0;i=(c[b>>2]|0)+78|0;if((g&255)<(d[i>>0]|0)){j=h&255;a[f>>0]=j;k=j&255;l=k+-1|0;Ig(b,e,l);return}if((g&255)>248)ah(c[b+12>>2]|0,8775);g=h&255;a[i>>0]=g;j=g;a[f>>0]=j;k=j&255;l=k+-1|0;Ig(b,e,l);return}function Ig(b,d,e){b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0,z=0,A=0,B=0,C=0,D=0,E=0,F=0,G=0,H=0,I=0,J=0,K=0,L=0,M=0,N=0,O=0,P=0,Q=0,R=0,S=0,T=0,U=0,V=0,W=0,X=0,Y=0,Z=0,_=0,$=0;Jg(b,d,e);f=(c[d>>2]|0)==10;g=d+16|0;do if(f?(h=c[d+8>>2]|0,(h|0)!=-1):0){i=c[g>>2]|0;if((i|0)==-1){c[g>>2]=h;j=h;break}k=c[(c[b>>2]|0)+12>>2]|0;l=i;while(1){m=k+(l<<2)|0;n=c[m>>2]|0;i=(n>>>14)+-131071|0;o=(i|0)==-1?-1:l+1+i|0;if((o|0)==-1)break;else l=o}k=h+~l|0;if((((k|0)>-1?k:0-k|0)|0)>131071)ah(c[b+12>>2]|0,8740);else{c[m>>2]=(k<<14)+2147467264|n&16383;p=10;break}}else p=10;while(0);if((p|0)==10)j=c[g>>2]|0;n=d+20|0;m=c[n>>2]|0;if((j|0)==(m|0)){c[g>>2]=-1;c[n>>2]=-1;q=d+8|0;c[q>>2]=e;c[d>>2]=6;return}a:do if((j|0)==-1)p=19;else{k=c[(c[b>>2]|0)+12>>2]|0;o=j;while(1){i=k+(o<<2)|0;if((o|0)>0?(r=c[i+-4>>2]|0,(a[272+(r&63)>>0]|0)<0):0)s=r;else s=c[i>>2]|0;if((s&63|0)!=28){p=26;break a}r=((c[i>>2]|0)>>>14)+-131071|0;o=(r|0)==-1?-1:o+1+r|0;if((o|0)==-1){p=19;break}}}while(0);b:do if((p|0)==19)if((m|0)==-1){t=-1;u=-1}else{s=c[(c[b>>2]|0)+12>>2]|0;j=m;while(1){o=s+(j<<2)|0;if((j|0)>0?(k=c[o+-4>>2]|0,(a[272+(k&63)>>0]|0)<0):0)v=k;else v=c[o>>2]|0;if((v&63|0)!=28){p=26;break b}k=((c[o>>2]|0)>>>14)+-131071|0;j=(k|0)==-1?-1:j+1+k|0;if((j|0)==-1){t=-1;u=-1;break}}}while(0);do if((p|0)==26){v=b+28|0;do if(!f){m=c[v>>2]|0;c[v>>2]=-1;j=og(b,2147450903)|0;if((m|0)!=-1)if((j|0)!=-1){s=c[(c[b>>2]|0)+12>>2]|0;k=j;while(1){w=s+(k<<2)|0;x=c[w>>2]|0;o=(x>>>14)+-131071|0;l=(o|0)==-1?-1:k+1+o|0;if((l|0)==-1)break;else k=l}s=m+~k|0;if((((s|0)>-1?s:0-s|0)|0)>131071)ah(c[b+12>>2]|0,8740);else{c[w>>2]=(s<<14)+2147467264|x&16383;y=j;break}}else y=m;else y=j}else y=-1;while(0);s=b+20|0;l=b+24|0;c[l>>2]=c[s>>2];o=e<<6;h=og(b,o|16387)|0;c[l>>2]=c[s>>2];r=og(b,o|8388611)|0;c[l>>2]=c[s>>2];if((y|0)!=-1){s=c[v>>2]|0;if((s|0)==-1){c[v>>2]=y;t=h;u=r;break}l=c[(c[b>>2]|0)+12>>2]|0;o=s;while(1){z=l+(o<<2)|0;A=c[z>>2]|0;s=(A>>>14)+-131071|0;i=(s|0)==-1?-1:o+1+s|0;if((i|0)==-1)break;else o=i}l=y+~o|0;if((((l|0)>-1?l:0-l|0)|0)>131071)ah(c[b+12>>2]|0,8740);else{c[z>>2]=(l<<14)+2147467264|A&16383;t=h;u=r;break}}else{t=h;u=r}}while(0);A=c[b+20>>2]|0;c[b+24>>2]=A;z=c[n>>2]|0;c:do if((z|0)!=-1){y=e<<6;x=y&16320;w=c[(c[b>>2]|0)+12>>2]|0;if((e|0)==255){f=z;while(1){l=w+(f<<2)|0;v=c[l>>2]|0;i=(v>>>14)+-131071|0;s=f;f=(i|0)==-1?-1:f+1+i|0;if((s|0)>0?(i=l+-4|0,B=c[i>>2]|0,(a[272+(B&63)>>0]|0)<0):0){C=i;D=B}else{C=l;D=v}if((D&63|0)!=28){B=t+~s|0;if((((B|0)>-1?B:0-B|0)|0)>131071){p=65;break}else{E=B;F=v}}else{c[C>>2]=D&8372224|D>>>23<<6|27;v=A+~s|0;if((((v|0)>-1?v:0-v|0)|0)>131071){p=62;break}E=v;F=c[l>>2]|0}c[l>>2]=F&16383|(E<<14)+2147467264;if((f|0)==-1)break c}if((p|0)==62){G=b+12|0;H=c[G>>2]|0;ah(H,8740)}else if((p|0)==65){I=b+12|0;J=c[I>>2]|0;ah(J,8740)}}f=z;while(1){r=w+(f<<2)|0;h=c[r>>2]|0;o=(h>>>14)+-131071|0;l=f;f=(o|0)==-1?-1:f+1+o|0;if((l|0)>0?(o=r+-4|0,v=c[o>>2]|0,(a[272+(v&63)>>0]|0)<0):0){K=o;L=v}else{K=r;L=h}if((L&63|0)!=28){v=t+~l|0;if((((v|0)>-1?v:0-v|0)|0)>131071){p=65;break}else{M=v;N=h}}else{if((L>>>23|0)==(e|0))O=L&8372224|y|27;else O=L&-16321|x;c[K>>2]=O;h=A+~l|0;if((((h|0)>-1?h:0-h|0)|0)>131071){p=62;break}M=h;N=c[r>>2]|0}c[r>>2]=N&16383|(M<<14)+2147467264;if((f|0)==-1)break c}if((p|0)==62){G=b+12|0;H=c[G>>2]|0;ah(H,8740)}else if((p|0)==65){I=b+12|0;J=c[I>>2]|0;ah(J,8740)}}while(0);J=c[g>>2]|0;if((J|0)==-1){c[g>>2]=-1;c[n>>2]=-1;q=d+8|0;c[q>>2]=e;c[d>>2]=6;return}I=e<<6;H=I&16320;G=c[(c[b>>2]|0)+12>>2]|0;if((e|0)==255){M=J;while(1){N=G+(M<<2)|0;O=c[N>>2]|0;K=(O>>>14)+-131071|0;L=M;M=(K|0)==-1?-1:M+1+K|0;if((L|0)>0?(K=N+-4|0,t=c[K>>2]|0,(a[272+(t&63)>>0]|0)<0):0){P=K;Q=t}else{P=N;Q=O}if((Q&63|0)!=28){t=u+~L|0;if((((t|0)>-1?t:0-t|0)|0)>131071){p=90;break}else{R=t;S=O}}else{c[P>>2]=Q&8372224|Q>>>23<<6|27;O=A+~L|0;if((((O|0)>-1?O:0-O|0)|0)>131071){p=87;break}R=O;S=c[N>>2]|0}c[N>>2]=S&16383|(R<<14)+2147467264;if((M|0)==-1){p=92;break}}if((p|0)==87){T=b+12|0;U=c[T>>2]|0;ah(U,8740)}else if((p|0)==90){V=b+12|0;W=c[V>>2]|0;ah(W,8740)}else if((p|0)==92){c[g>>2]=-1;c[n>>2]=-1;q=d+8|0;c[q>>2]=e;c[d>>2]=6;return}}M=J;while(1){J=G+(M<<2)|0;R=c[J>>2]|0;S=(R>>>14)+-131071|0;Q=M;M=(S|0)==-1?-1:M+1+S|0;if((Q|0)>0?(S=J+-4|0,P=c[S>>2]|0,(a[272+(P&63)>>0]|0)<0):0){X=S;Y=P}else{X=J;Y=R}if((Y&63|0)!=28){P=u+~Q|0;if((((P|0)>-1?P:0-P|0)|0)>131071){p=90;break}else{Z=P;_=R}}else{if((Y>>>23|0)==(e|0))$=Y&8372224|I|27;else $=Y&-16321|H;c[X>>2]=$;R=A+~Q|0;if((((R|0)>-1?R:0-R|0)|0)>131071){p=87;break}Z=R;_=c[J>>2]|0}c[J>>2]=_&16383|(Z<<14)+2147467264;if((M|0)==-1){p=92;break}}if((p|0)==87){T=b+12|0;U=c[T>>2]|0;ah(U,8740)}else if((p|0)==90){V=b+12|0;W=c[V>>2]|0;ah(W,8740)}else if((p|0)==92){c[g>>2]=-1;c[n>>2]=-1;q=d+8|0;c[q>>2]=e;c[d>>2]=6;return}}function Jg(b,d,e){b=b|0;d=d|0;e=e|0;var f=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0.0,s=0;f=Pa;Pa=Pa+32|0;h=f+16|0;i=f;Gg(b,d);j=c[d>>2]|0;a:do switch(j|0){case 1:{k=e+1|0;l=c[b+20>>2]|0;do if((l|0)>(c[b+24>>2]|0)?(m=(c[(c[b>>2]|0)+12>>2]|0)+(l+-1<<2)|0,n=c[m>>2]|0,(n&63|0)==4):0){o=n>>>6&255;p=o+(n>>>23)|0;if((o|0)>(e|0)|(p+1|0)<(e|0)?(o|0)<(e|0)|(o|0)>(k|0):0)break;q=(o|0)<(e|0)?o:e;c[m>>2]=q<<6&16320|n&8372287|((p|0)>(e|0)?p:e)-q<<23;break a}while(0);og(b,e<<6|4)|0;break}case 2:case 3:{og(b,e<<6|((j|0)==2&1)<<23|3)|0;break}case 4:{k=c[d+8>>2]|0;l=e<<6;if((k|0)<262144){og(b,l|k<<14|1)|0;break a}else{og(b,l|2)|0;og(b,k<<6|39)|0;break a}break}case 5:{r=+g[d+8>>3];g[h>>3]=r;k=c[(c[b+12>>2]|0)+52>>2]|0;g[i>>3]=r;c[i+8>>2]=3;if(r!=r|0.0!=0.0|r==0.0){l=k+8|0;q=c[l>>2]|0;c[l>>2]=q+16;p=Ae(k,h,8)|0;c[q>>2]=p;c[q+8>>2]=(a[p+4>>0]|64)&255;p=Cg(b,(c[l>>2]|0)+-16|0,i)|0;c[l>>2]=(c[l>>2]|0)+-16;s=p}else s=Cg(b,i,i)|0;p=e<<6;if((s|0)<262144){og(b,p|s<<14|1)|0;break a}else{og(b,p|2)|0;og(b,s<<6|39)|0;break a}break}case 11:{p=(c[(c[b>>2]|0)+12>>2]|0)+(c[d+8>>2]<<2)|0;c[p>>2]=c[p>>2]&-16321|e<<6&16320;break}case 6:{p=c[d+8>>2]|0;if((p|0)!=(e|0))og(b,p<<23|e<<6)|0;break}default:{Pa=f;return}}while(0);c[d+8>>2]=e;c[d>>2]=6;Pa=f;return}function Kg(b,e){b=b|0;e=e|0;var f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0;Gg(b,e);if((c[e>>2]|0)==6){f=e+8|0;g=c[f>>2]|0;if((c[e+16>>2]|0)==(c[e+20>>2]|0)){h=g;return h|0}if((g|0)>=(d[b+46>>0]|0|0)){Ig(b,e,g);i=f}else j=5}else j=5;if((j|0)==5){Gg(b,e);if(((c[e>>2]|0)==6?(j=c[e+8>>2]|0,(j&256|0)==0):0)?(j|0)>=(d[b+46>>0]|0|0):0){j=b+48|0;a[j>>0]=(a[j>>0]|0)+-1<<24>>24}j=b+48|0;f=a[j>>0]|0;g=(f&255)+1|0;k=(c[b>>2]|0)+78|0;do if((f&255)>=(d[k>>0]|0))if((f&255)>248)ah(c[b+12>>2]|0,8775);else{l=g&255;a[k>>0]=l;m=l;break}else m=g&255;while(0);a[j>>0]=m;Ig(b,e,(m&255)+-1|0);i=e+8|0}h=c[i>>2]|0;return h|0}function Lg(a,b){a=a|0;b=b|0;if((c[b>>2]|0)==8?(c[b+16>>2]|0)==(c[b+20>>2]|0):0)return;Kg(a,b)|0;return}function Mg(a,b){a=a|0;b=b|0;if((c[b+16>>2]|0)==(c[b+20>>2]|0)){Gg(a,b);return}else{Kg(a,b)|0;return}}function Ng(b,d){b=b|0;d=d|0;var e=0,f=0,h=0,i=0,j=0,k=0,l=0.0,m=0,n=0,o=0,p=0,q=0,r=0;e=Pa;Pa=Pa+32|0;f=e+16|0;h=e;if((c[d+16>>2]|0)==(c[d+20>>2]|0))Gg(b,d);else Kg(b,d)|0;i=c[d>>2]|0;switch(i|0){case 1:case 3:case 2:{if((c[b+32>>2]|0)<256){if((i|0)==1){c[h+8>>2]=0;c[f>>2]=c[b+4>>2];c[f+8>>2]=69;j=Cg(b,f,h)|0}else{c[f>>2]=(i|0)==2&1;c[f+8>>2]=1;j=Cg(b,f,f)|0}c[d+8>>2]=j;c[d>>2]=4;k=j|256;Pa=e;return k|0}break}case 5:{j=d+8|0;l=+g[j>>3];g[f>>3]=l;i=c[(c[b+12>>2]|0)+52>>2]|0;g[h>>3]=l;c[h+8>>2]=3;if(l!=l|0.0!=0.0|l==0.0){m=i+8|0;n=c[m>>2]|0;c[m>>2]=n+16;o=Ae(i,f,8)|0;c[n>>2]=o;c[n+8>>2]=(a[o+4>>0]|64)&255;o=Cg(b,(c[m>>2]|0)+-16|0,h)|0;c[m>>2]=(c[m>>2]|0)+-16;p=o}else p=Cg(b,h,h)|0;c[j>>2]=p;c[d>>2]=4;q=p;r=15;break}case 4:{q=c[d+8>>2]|0;r=15;break}default:{}}if((r|0)==15?(q|0)<256:0){k=q|256;Pa=e;return k|0}k=Kg(b,d)|0;Pa=e;return k|0}function Og(b,f,g){b=b|0;f=f|0;g=g|0;var h=0;switch(c[f>>2]|0){case 7:{if(((c[g>>2]|0)==6?(h=c[g+8>>2]|0,(h&256|0)==0):0)?(h|0)>=(d[b+46>>0]|0):0){h=b+48|0;a[h>>0]=(a[h>>0]|0)+-1<<24>>24}Ig(b,g,c[f+8>>2]|0);return}case 8:{og(b,(Kg(b,g)|0)<<6|c[f+8>>2]<<23|9)|0;break}case 9:{h=f+8|0;f=(a[h+3>>0]|0)==7?10:8;og(b,(Ng(b,g)|0)<<14|f|d[h+2>>0]<<6|e[h>>1]<<23)|0;break}default:{}}if((c[g>>2]|0)!=6)return;h=c[g+8>>2]|0;if(h&256|0)return;if((h|0)<(d[b+46>>0]|0))return;h=b+48|0;a[h>>0]=(a[h>>0]|0)+-1<<24>>24;return}function Pg(b,e,f){b=b|0;e=e|0;f=f|0;var g=0,h=0,i=0,j=0,k=0,l=0;Kg(b,e)|0;g=e+8|0;h=c[g>>2]|0;if((c[e>>2]|0)==6&(h&256|0)==0?(h|0)>=(d[b+46>>0]|0|0):0){i=b+48|0;a[i>>0]=(a[i>>0]|0)+-1<<24>>24}i=b+48|0;c[g>>2]=d[i>>0];c[e>>2]=6;e=(d[i>>0]|0)+2|0;j=(c[b>>2]|0)+78|0;do if(e>>>0>(d[j>>0]|0)>>>0)if(e>>>0>249)ah(c[b+12>>2]|0,8775);else{k=e&255;a[j>>0]=k;l=k;break}else l=e&255;while(0);a[i>>0]=l;l=c[g>>2]|0;og(b,h<<23|l<<6|(Ng(b,f)|0)<<14|12)|0;if((c[f>>2]|0)!=6)return;l=c[f+8>>2]|0;if(l&256|0)return;if((l|0)<(d[b+46>>0]|0|0))return;a[i>>0]=(a[i>>0]|0)+-1<<24>>24;return}function Qg(b,e){b=b|0;e=e|0;var f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0,z=0,A=0,B=0,C=0,D=0,E=0,F=0;Gg(b,e);f=c[e>>2]|0;a:do switch(f|0){case 10:{g=e+8|0;h=c[g>>2]|0;i=(c[(c[b>>2]|0)+12>>2]|0)+(h<<2)|0;if((h|0)>0?(h=i+-4|0,j=c[h>>2]|0,(a[272+(j&63)>>0]|0)<0):0){k=h;l=j}else{k=i;l=c[i>>2]|0}c[k>>2]=((l&16320|0)==0&1)<<6|l&-16321;m=c[g>>2]|0;n=32;break}case 2:case 5:case 4:break;case 11:{g=c[b>>2]|0;i=e+8|0;j=c[(c[g+12>>2]|0)+(c[i>>2]<<2)>>2]|0;h=b+20|0;if((j&63|0)==20){c[h>>2]=(c[h>>2]|0)+-1;og(b,j>>>23<<6|16411)|0;j=b+28|0;h=c[j>>2]|0;c[j>>2]=-1;j=og(b,2147450903)|0;if((h|0)!=-1)if((j|0)!=-1){o=c[(c[b>>2]|0)+12>>2]|0;p=j;while(1){q=o+(p<<2)|0;r=c[q>>2]|0;s=(r>>>14)+-131071|0;t=(s|0)==-1?-1:p+1+s|0;if((t|0)==-1)break;else p=t}o=h+~p|0;if((((o|0)>-1?o:0-o|0)|0)>131071)ah(c[b+12>>2]|0,8740);else{c[q>>2]=(o<<14)+2147467264|r&16383;m=j;n=32;break a}}else{u=h;n=33}else{m=j;n=32}}else{v=i;w=g;n=16}break}default:{o=e+8|0;if((f|0)==6){x=o;n=22}else{v=o;w=c[b>>2]|0;n=16}}}while(0);if((n|0)==16){f=b+48|0;r=a[f>>0]|0;q=(r&255)+1|0;l=w+78|0;do if((r&255)>=(d[l>>0]|0))if((r&255)>248)ah(c[b+12>>2]|0,8775);else{w=q&255;a[l>>0]=w;y=w;break}else y=q&255;while(0);a[f>>0]=y;Jg(b,e,(y&255)+-1|0);if((c[e>>2]|0)==6){x=v;n=22}else{z=v;n=25}}if((n|0)==22){v=c[e+8>>2]|0;if((v&256|0)==0?(v|0)>=(d[b+46>>0]|0):0){v=b+48|0;a[v>>0]=(a[v>>0]|0)+-1<<24>>24;z=x;n=25}else{z=x;n=25}}do if((n|0)==25){og(b,c[z>>2]<<23|16348)|0;x=b+28|0;v=c[x>>2]|0;c[x>>2]=-1;x=og(b,2147450903)|0;if((v|0)!=-1)if((x|0)!=-1){y=c[(c[b>>2]|0)+12>>2]|0;f=x;while(1){A=y+(f<<2)|0;B=c[A>>2]|0;q=(B>>>14)+-131071|0;l=(q|0)==-1?-1:f+1+q|0;if((l|0)==-1)break;else f=l}y=v+~f|0;if((((y|0)>-1?y:0-y|0)|0)>131071)ah(c[b+12>>2]|0,8740);else{c[A>>2]=(y<<14)+2147467264|B&16383;m=x;n=32;break}}else{u=v;n=33}else{m=x;n=32}}while(0);if((n|0)==32?(m|0)!=-1:0){u=m;n=33}do if((n|0)==33){m=e+20|0;B=c[m>>2]|0;if((B|0)==-1){c[m>>2]=u;break}m=c[(c[b>>2]|0)+12>>2]|0;A=B;while(1){C=m+(A<<2)|0;D=c[C>>2]|0;B=(D>>>14)+-131071|0;z=(B|0)==-1?-1:A+1+B|0;if((z|0)==-1)break;else A=z}m=u+~A|0;if((((m|0)>-1?m:0-m|0)|0)>131071)ah(c[b+12>>2]|0,8740);else{c[C>>2]=(m<<14)+2147467264|D&16383;break}}while(0);D=e+16|0;e=c[D>>2]|0;c[b+24>>2]=c[b+20>>2];C=b+28|0;if((e|0)==-1){c[D>>2]=-1;return}u=c[C>>2]|0;if((u|0)==-1){c[C>>2]=e;c[D>>2]=-1;return}C=c[(c[b>>2]|0)+12>>2]|0;n=u;while(1){E=C+(n<<2)|0;F=c[E>>2]|0;u=(F>>>14)+-131071|0;m=(u|0)==-1?-1:n+1+u|0;if((m|0)==-1)break;else n=m}C=e+~n|0;if((((C|0)>-1?C:0-C|0)|0)>131071)ah(c[b+12>>2]|0,8740);c[E>>2]=(C<<14)+2147467264|F&16383;c[D>>2]=-1;return}function Rg(b,e){b=b|0;e=e|0;var f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0,z=0,A=0,B=0,C=0,D=0;Gg(b,e);f=c[e>>2]|0;a:do switch(f|0){case 10:{g=c[e+8>>2]|0;h=29;break}case 3:case 1:break;case 11:{i=c[b>>2]|0;j=e+8|0;k=c[(c[i+12>>2]|0)+(c[j>>2]<<2)>>2]|0;l=b+20|0;if((k&63|0)==20){c[l>>2]=(c[l>>2]|0)+-1;og(b,k>>>23<<6|27)|0;k=b+28|0;l=c[k>>2]|0;c[k>>2]=-1;k=og(b,2147450903)|0;if((l|0)!=-1)if((k|0)!=-1){m=c[(c[b>>2]|0)+12>>2]|0;n=k;while(1){o=m+(n<<2)|0;p=c[o>>2]|0;q=(p>>>14)+-131071|0;r=(q|0)==-1?-1:n+1+q|0;if((r|0)==-1)break;else n=r}m=l+~n|0;if((((m|0)>-1?m:0-m|0)|0)>131071)ah(c[b+12>>2]|0,8740);else{c[o>>2]=(m<<14)+2147467264|p&16383;g=k;h=29;break a}}else{s=l;h=30}else{g=k;h=29}}else{t=j;u=i;h=13}break}default:{m=e+8|0;if((f|0)==6){v=m;h=19}else{t=m;u=c[b>>2]|0;h=13}}}while(0);if((h|0)==13){f=b+48|0;p=a[f>>0]|0;o=(p&255)+1|0;m=u+78|0;do if((p&255)>=(d[m>>0]|0))if((p&255)>248)ah(c[b+12>>2]|0,8775);else{u=o&255;a[m>>0]=u;w=u;break}else w=o&255;while(0);a[f>>0]=w;Jg(b,e,(w&255)+-1|0);if((c[e>>2]|0)==6){v=t;h=19}else{x=t;h=22}}if((h|0)==19){t=c[e+8>>2]|0;if((t&256|0)==0?(t|0)>=(d[b+46>>0]|0|0):0){t=b+48|0;a[t>>0]=(a[t>>0]|0)+-1<<24>>24;x=v;h=22}else{x=v;h=22}}do if((h|0)==22){og(b,c[x>>2]<<23|32732)|0;v=b+28|0;t=c[v>>2]|0;c[v>>2]=-1;v=og(b,2147450903)|0;if((t|0)!=-1)if((v|0)!=-1){w=c[(c[b>>2]|0)+12>>2]|0;f=v;while(1){y=w+(f<<2)|0;z=c[y>>2]|0;o=(z>>>14)+-131071|0;m=(o|0)==-1?-1:f+1+o|0;if((m|0)==-1)break;else f=m}w=t+~f|0;if((((w|0)>-1?w:0-w|0)|0)>131071)ah(c[b+12>>2]|0,8740);else{c[y>>2]=(w<<14)+2147467264|z&16383;g=v;h=29;break}}else{s=t;h=30}else{g=v;h=29}}while(0);if((h|0)==29?(g|0)!=-1:0){s=g;h=30}do if((h|0)==30){g=e+16|0;z=c[g>>2]|0;if((z|0)==-1){c[g>>2]=s;break}g=c[(c[b>>2]|0)+12>>2]|0;y=z;while(1){A=g+(y<<2)|0;B=c[A>>2]|0;z=(B>>>14)+-131071|0;x=(z|0)==-1?-1:y+1+z|0;if((x|0)==-1)break;else y=x}g=s+~y|0;if((((g|0)>-1?g:0-g|0)|0)>131071)ah(c[b+12>>2]|0,8740);else{c[A>>2]=(g<<14)+2147467264|B&16383;break}}while(0);B=e+20|0;e=c[B>>2]|0;c[b+24>>2]=c[b+20>>2];A=b+28|0;if((e|0)==-1){c[B>>2]=-1;return}s=c[A>>2]|0;if((s|0)==-1){c[A>>2]=e;c[B>>2]=-1;return}A=c[(c[b>>2]|0)+12>>2]|0;h=s;while(1){C=A+(h<<2)|0;D=c[C>>2]|0;s=(D>>>14)+-131071|0;g=(s|0)==-1?-1:h+1+s|0;if((g|0)==-1)break;else h=g}A=e+~h|0;if((((A|0)>-1?A:0-A|0)|0)>131071)ah(c[b+12>>2]|0,8740);c[C>>2]=(A<<14)+2147467264|D&16383;c[B>>2]=-1;return}function Sg(d,e,f){d=d|0;e=e|0;f=f|0;var g=0,h=0;g=e+8|0;a[g+2>>0]=c[g>>2];h=(Ng(d,f)|0)&65535;b[g>>1]=h;a[g+3>>0]=(c[e>>2]|0)==8?8:7;c[e>>2]=9;return}function Tg(b,e,f,h){b=b|0;e=e|0;f=f|0;h=h|0;var i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0;i=Pa;Pa=Pa+32|0;j=i;c[j+20>>2]=-1;c[j+16>>2]=-1;c[j>>2]=5;g[j+8>>3]=0.0;switch(e|0){case 0:{if(((c[f>>2]|0)==5?(c[f+16>>2]|0)==-1:0)?(c[f+20>>2]|0)==-1:0){e=f+8|0;g[e>>3]=-+g[e>>3];Pa=i;return}Kg(b,f)|0;Ug(b,19,f,j,h);Pa=i;return}case 1:{Gg(b,f);switch(c[f>>2]|0){case 3:case 1:{c[f>>2]=2;break}case 2:case 5:case 4:{c[f>>2]=3;break}case 10:{e=c[f+8>>2]|0;k=(c[(c[b>>2]|0)+12>>2]|0)+(e<<2)|0;if((e|0)>0?(e=k+-4|0,l=c[e>>2]|0,(a[272+(l&63)>>0]|0)<0):0){m=e;n=l}else{m=k;n=c[k>>2]|0}c[m>>2]=((n&16320|0)==0&1)<<6|n&-16321;break}case 6:{o=21;break}case 11:{n=b+48|0;m=a[n>>0]|0;k=(m&255)+1|0;l=(c[b>>2]|0)+78|0;do if((m&255)>=(d[l>>0]|0))if((m&255)>248)ah(c[b+12>>2]|0,8775);else{e=k&255;a[l>>0]=e;p=e;break}else p=k&255;while(0);a[n>>0]=p;Jg(b,f,(p&255)+-1|0);if((c[f>>2]|0)==6)o=21;else{q=f+8|0;o=24}break}default:{}}if((o|0)==21){p=f+8|0;n=c[p>>2]|0;if((n&256|0)==0?(n|0)>=(d[b+46>>0]|0):0){n=b+48|0;a[n>>0]=(a[n>>0]|0)+-1<<24>>24;q=p;o=24}else{q=p;o=24}}if((o|0)==24){o=og(b,c[q>>2]<<23|20)|0;c[q>>2]=o;c[f>>2]=11}o=f+20|0;q=c[o>>2]|0;p=f+16|0;n=c[p>>2]|0;c[o>>2]=n;c[p>>2]=q;if((n|0)==-1)r=q;else{q=c[(c[b>>2]|0)+12>>2]|0;o=n;do{n=q+(o<<2)|0;if((o|0)>0?(k=n+-4|0,l=c[k>>2]|0,(a[272+(l&63)>>0]|0)<0):0){s=k;t=l}else{s=n;t=c[n>>2]|0}if((t&63|0)==28)c[s>>2]=t&8372224|t>>>23<<6|27;l=((c[n>>2]|0)>>>14)+-131071|0;o=(l|0)==-1?-1:o+1+l|0}while((o|0)!=-1);r=c[p>>2]|0}if((r|0)==-1){Pa=i;return}p=c[(c[b>>2]|0)+12>>2]|0;o=r;do{r=p+(o<<2)|0;if((o|0)>0?(t=r+-4|0,s=c[t>>2]|0,(a[272+(s&63)>>0]|0)<0):0){u=t;v=s}else{u=r;v=c[r>>2]|0}if((v&63|0)==28)c[u>>2]=v&8372224|v>>>23<<6|27;s=((c[r>>2]|0)>>>14)+-131071|0;o=(s|0)==-1?-1:o+1+s|0}while((o|0)!=-1);Pa=i;return}case 2:{Kg(b,f)|0;Ug(b,21,f,j,h);Pa=i;return}default:{Pa=i;return}}}function Ug(b,e,f,h,i){b=b|0;e=e|0;f=f|0;h=h|0;i=i|0;var j=0.0,k=0,l=0.0,m=0,n=0;if(((((((c[f>>2]|0)==5?(c[f+16>>2]|0)==-1:0)?(c[f+20>>2]|0)==-1:0)?(c[h>>2]|0)==5:0)?(c[h+16>>2]|0)==-1:0)?(c[h+20>>2]|0)==-1:0)?(j=+g[h+8>>3],k=f+8|0,!((e|1|0)==17&j==0.0)):0){l=+Ld(e+-13|0,+g[k>>3],j);g[k>>3]=l;return}switch(e|0){case 19:case 21:{m=0;break}default:m=Ng(b,h)|0}k=Ng(b,f)|0;if((k|0)>(m|0)){if(((c[f>>2]|0)==6?(n=c[f+8>>2]|0,(n&256|0)==0):0)?(n|0)>=(d[b+46>>0]|0|0):0){n=b+48|0;a[n>>0]=(a[n>>0]|0)+-1<<24>>24}if(((c[h>>2]|0)==6?(n=c[h+8>>2]|0,(n&256|0)==0):0)?(n|0)>=(d[b+46>>0]|0|0):0){n=b+48|0;a[n>>0]=(a[n>>0]|0)+-1<<24>>24}}else{if(((c[h>>2]|0)==6?(n=c[h+8>>2]|0,(n&256|0)==0):0)?(n|0)>=(d[b+46>>0]|0|0):0){n=b+48|0;a[n>>0]=(a[n>>0]|0)+-1<<24>>24}if(((c[f>>2]|0)==6?(n=c[f+8>>2]|0,(n&256|0)==0):0)?(n|0)>=(d[b+46>>0]|0|0):0){n=b+48|0;a[n>>0]=(a[n>>0]|0)+-1<<24>>24}}n=og(b,m<<14|e|k<<23)|0;c[f+8>>2]=n;c[f>>2]=11;c[(c[(c[b>>2]|0)+20>>2]|0)+((c[b+20>>2]|0)+-1<<2)>>2]=i;return}function Vg(b,e,f){b=b|0;e=e|0;f=f|0;var g=0,h=0,i=0,j=0,k=0;switch(e|0){case 13:{Qg(b,f);return}case 14:{Rg(b,f);return}case 6:{Gg(b,f);if(((c[f>>2]|0)==6?(e=c[f+8>>2]|0,(e&256|0)==0):0)?(e|0)>=(d[b+46>>0]|0|0):0){e=b+48|0;a[e>>0]=(a[e>>0]|0)+-1<<24>>24}e=b+48|0;g=a[e>>0]|0;h=(g&255)+1|0;i=(c[b>>2]|0)+78|0;do if((g&255)>=(d[i>>0]|0))if((g&255)>248)ah(c[b+12>>2]|0,8775);else{j=h&255;a[i>>0]=j;k=j;break}else k=h&255;while(0);a[e>>0]=k;Ig(b,f,(k&255)+-1|0);return}case 5:case 4:case 3:case 2:case 1:case 0:{if(((c[f>>2]|0)==5?(c[f+16>>2]|0)==-1:0)?(c[f+20>>2]|0)==-1:0)return;Ng(b,f)|0;return}default:{Ng(b,f)|0;return}}}function Wg(b,e,f,g,h){b=b|0;e=e|0;f=f|0;g=g|0;h=h|0;var i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0;switch(e|0){case 13:{Gg(b,g);i=g+20|0;j=c[f+20>>2]|0;do if((j|0)!=-1){k=c[i>>2]|0;if((k|0)==-1){c[i>>2]=j;break}l=c[(c[b>>2]|0)+12>>2]|0;m=k;while(1){n=l+(m<<2)|0;o=c[n>>2]|0;k=(o>>>14)+-131071|0;p=(k|0)==-1?-1:m+1+k|0;if((p|0)==-1)break;else m=p}l=j+~m|0;if((((l|0)>-1?l:0-l|0)|0)>131071)ah(c[b+12>>2]|0,8740);else{c[n>>2]=(l<<14)+2147467264|o&16383;break}}while(0);c[f>>2]=c[g>>2];c[f+4>>2]=c[g+4>>2];c[f+8>>2]=c[g+8>>2];c[f+12>>2]=c[g+12>>2];c[f+16>>2]=c[g+16>>2];c[f+20>>2]=c[g+20>>2];return}case 14:{Gg(b,g);o=g+16|0;n=c[f+16>>2]|0;do if((n|0)!=-1){j=c[o>>2]|0;if((j|0)==-1){c[o>>2]=n;break}i=c[(c[b>>2]|0)+12>>2]|0;l=j;while(1){q=i+(l<<2)|0;r=c[q>>2]|0;j=(r>>>14)+-131071|0;p=(j|0)==-1?-1:l+1+j|0;if((p|0)==-1)break;else l=p}i=n+~l|0;if((((i|0)>-1?i:0-i|0)|0)>131071)ah(c[b+12>>2]|0,8740);else{c[q>>2]=(i<<14)+2147467264|r&16383;break}}while(0);c[f>>2]=c[g>>2];c[f+4>>2]=c[g+4>>2];c[f+8>>2]=c[g+8>>2];c[f+12>>2]=c[g+12>>2];c[f+16>>2]=c[g+16>>2];c[f+20>>2]=c[g+20>>2];return}case 6:{if((c[g+16>>2]|0)==(c[g+20>>2]|0))Gg(b,g);else Kg(b,g)|0;if((c[g>>2]|0)==11?(r=c[(c[b>>2]|0)+12>>2]|0,q=g+8|0,n=r+(c[q>>2]<<2)|0,o=c[n>>2]|0,(o&63|0)==22):0){i=f+8|0;if(((c[f>>2]|0)==6?(m=c[i>>2]|0,(m&256|0)==0):0)?(m|0)>=(d[b+46>>0]|0|0):0){m=b+48|0;a[m>>0]=(a[m>>0]|0)+-1<<24>>24;m=r+(c[q>>2]<<2)|0;s=m;t=c[m>>2]|0}else{s=n;t=o}c[s>>2]=c[i>>2]<<23|t&8388607;c[f>>2]=11;c[i>>2]=c[q>>2];return}Gg(b,g);if(((c[g>>2]|0)==6?(q=c[g+8>>2]|0,(q&256|0)==0):0)?(q|0)>=(d[b+46>>0]|0|0):0){q=b+48|0;a[q>>0]=(a[q>>0]|0)+-1<<24>>24}q=b+48|0;i=a[q>>0]|0;t=(i&255)+1|0;s=(c[b>>2]|0)+78|0;do if((i&255)>=(d[s>>0]|0))if((i&255)>248)ah(c[b+12>>2]|0,8775);else{o=t&255;a[s>>0]=o;u=o;break}else u=t&255;while(0);a[q>>0]=u;Ig(b,g,(u&255)+-1|0);Ug(b,22,f,g,h);return}case 5:case 4:case 3:case 2:case 1:case 0:{Ug(b,e+13|0,f,g,h);return}case 9:case 8:case 7:{Xg(b,e+17|0,1,f,g);return}case 12:case 11:case 10:{Xg(b,e+14|0,0,f,g);return}default:return}}function Xg(b,e,f,g,h){b=b|0;e=e|0;f=f|0;g=g|0;h=h|0;var i=0,j=0,k=0,l=0,m=0,n=0,o=0;i=Ng(b,g)|0;j=Ng(b,h)|0;if(((c[h>>2]|0)==6?(k=c[h+8>>2]|0,(k&256|0)==0):0)?(k|0)>=(d[b+46>>0]|0|0):0){k=b+48|0;a[k>>0]=(a[k>>0]|0)+-1<<24>>24}if(((c[g>>2]|0)==6?(k=c[g+8>>2]|0,(k&256|0)==0):0)?(k|0)>=(d[b+46>>0]|0|0):0){k=b+48|0;a[k>>0]=(a[k>>0]|0)+-1<<24>>24}k=(e|0)!=24&(f|0)==0;og(b,(k?64:f<<6)|e|(k?j:i)<<23|(k?i:j)<<14)|0;j=b+28|0;i=c[j>>2]|0;c[j>>2]=-1;j=og(b,2147450903)|0;if((i|0)==-1){l=j;m=g+8|0;c[m>>2]=l;c[g>>2]=10;return}if((j|0)==-1){l=i;m=g+8|0;c[m>>2]=l;c[g>>2]=10;return}k=c[(c[b>>2]|0)+12>>2]|0;e=j;while(1){n=k+(e<<2)|0;o=c[n>>2]|0;f=(o>>>14)+-131071|0;h=(f|0)==-1?-1:e+1+f|0;if((h|0)==-1)break;else e=h}k=i+~e|0;if((((k|0)>-1?k:0-k|0)|0)>131071)ah(c[b+12>>2]|0,8740);c[n>>2]=(k<<14)+2147467264|o&16383;l=j;m=g+8|0;c[m>>2]=l;c[g>>2]=10;return}function Yg(a,b){a=a|0;b=b|0;c[(c[(c[a>>2]|0)+20>>2]|0)+((c[a+20>>2]|0)+-1<<2)>>2]=b;return}function Zg(b,c,d,e){b=b|0;c=c|0;d=d|0;e=e|0;var f=0,g=0;f=((d+-1|0)/50|0)+1|0;g=c<<6|((e|0)==-1?0:e<<23)|36;if((d|0)<25551)og(b,g|f<<14)|0;else{og(b,g)|0;og(b,f<<6|39)|0}a[b+48>>0]=c+1;return}function _g(b){b=b|0;var c=0,d=0;c=Be(b,8820)|0;d=c+5|0;a[d>>0]=a[d>>0]|32;a[c+6>>0]=1;c=Be(b,8824)|0;d=c+5|0;a[d>>0]=a[d>>0]|32;a[c+6>>0]=2;c=Be(b,8830)|0;d=c+5|0;a[d>>0]=a[d>>0]|32;a[c+6>>0]=3;c=Be(b,8833)|0;d=c+5|0;a[d>>0]=a[d>>0]|32;a[c+6>>0]=4;c=Be(b,8838)|0;d=c+5|0;a[d>>0]=a[d>>0]|32;a[c+6>>0]=5;c=Be(b,10956)|0;d=c+5|0;a[d>>0]=a[d>>0]|32;a[c+6>>0]=6;c=Be(b,8845)|0;d=c+5|0;a[d>>0]=a[d>>0]|32;a[c+6>>0]=7;c=Be(b,8851)|0;d=c+5|0;a[d>>0]=a[d>>0]|32;a[c+6>>0]=8;c=Be(b,8855)|0;d=c+5|0;a[d>>0]=a[d>>0]|32;a[c+6>>0]=9;c=Be(b,8864)|0;d=c+5|0;a[d>>0]=a[d>>0]|32;a[c+6>>0]=10;c=Be(b,8869)|0;d=c+5|0;a[d>>0]=a[d>>0]|32;a[c+6>>0]=11;c=Be(b,8872)|0;d=c+5|0;a[d>>0]=a[d>>0]|32;a[c+6>>0]=12;c=Be(b,8875)|0;d=c+5|0;a[d>>0]=a[d>>0]|32;a[c+6>>0]=13;c=Be(b,8881)|0;d=c+5|0;a[d>>0]=a[d>>0]|32;a[c+6>>0]=14;c=Be(b,8885)|0;d=c+5|0;a[d>>0]=a[d>>0]|32;a[c+6>>0]=15;c=Be(b,8889)|0;d=c+5|0;a[d>>0]=a[d>>0]|32;a[c+6>>0]=16;c=Be(b,8892)|0;d=c+5|0;a[d>>0]=a[d>>0]|32;a[c+6>>0]=17;c=Be(b,10388)|0;d=c+5|0;a[d>>0]=a[d>>0]|32;a[c+6>>0]=18;c=Be(b,8899)|0;d=c+5|0;a[d>>0]=a[d>>0]|32;a[c+6>>0]=19;c=Be(b,8904)|0;d=c+5|0;a[d>>0]=a[d>>0]|32;a[c+6>>0]=20;c=Be(b,8909)|0;d=c+5|0;a[d>>0]=a[d>>0]|32;a[c+6>>0]=21;c=Be(b,8915)|0;b=c+5|0;a[b>>0]=a[b>>0]|32;a[c+6>>0]=22;return}function $g(b,d){b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0;e=Pa;Pa=Pa+32|0;f=e+16|0;g=e+8|0;h=e;if((d|0)>=257){i=c[704+(d+-257<<2)>>2]|0;if((d|0)>=286){j=i;Pa=e;return j|0}k=c[b+52>>2]|0;c[f>>2]=i;j=Pd(k,8935,f)|0;Pa=e;return j|0}f=c[b+52>>2]|0;if(!(a[432+(d+1)>>0]&4)){c[g>>2]=d;j=Pd(f,8926,g)|0;Pa=e;return j|0}else{c[h>>2]=d;j=Pd(f,8921,h)|0;Pa=e;return j|0}return 0}function ah(a,b){a=a|0;b=b|0;bh(a,b,c[a+16>>2]|0)}function bh(b,d,e){b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0,z=0;f=Pa;Pa=Pa+128|0;g=f+112|0;h=f+104|0;i=f+96|0;j=f+88|0;k=f+80|0;l=f+64|0;m=f;Qd(m,(c[b+68>>2]|0)+16|0,60);f=b+52|0;n=c[f>>2]|0;o=c[b+4>>2]|0;c[l>>2]=m;c[l+4>>2]=o;c[l+8>>2]=d;d=Pd(n,8993,l)|0;if(!e){p=c[f>>2]|0;Jc(p,3)}l=c[f>>2]|0;do if((e+-287|0)>>>0>=3){if((e|0)>=257){n=c[704+(e+-257<<2)>>2]|0;if((e|0)>=286){q=n;break}c[h>>2]=n;q=Pd(l,8935,h)|0;break}if(!(a[432+(e+1)>>0]&4)){c[i>>2]=e;q=Pd(l,8926,i)|0;break}else{c[j>>2]=e;q=Pd(l,8921,j)|0;break}}else{n=b+60|0;o=c[n>>2]|0;m=o+4|0;r=c[m>>2]|0;s=r+1|0;t=o+8|0;u=c[t>>2]|0;do if(s>>>0>u>>>0){if(u>>>0>2147483645)bh(b,9003,0);v=u<<1;if((v|0)==-2)Gd(l);else{w=Hd(l,c[o>>2]|0,u,v)|0;c[o>>2]=w;c[t>>2]=v;v=c[m>>2]|0;x=v+1|0;y=w;z=v;break}}else{x=s;y=c[o>>2]|0;z=r}while(0);c[m>>2]=x;a[y+z>>0]=0;r=c[f>>2]|0;c[k>>2]=c[c[n>>2]>>2];q=Pd(r,8935,k)|0}while(0);c[g>>2]=d;c[g+4>>2]=q;Pd(l,9028,g)|0;p=c[f>>2]|0;Jc(p,3)}function ch(b,d,e){b=b|0;d=d|0;e=e|0;var f=0,g=0;f=c[b+52>>2]|0;g=Ae(f,d,e)|0;e=f+8|0;d=c[e>>2]|0;c[e>>2]=d+16;c[d>>2]=g;c[d+8>>2]=(a[g+4>>0]|64)&255;d=Je(f,c[(c[b+48>>2]|0)+4>>2]|0,(c[e>>2]|0)+-16|0)|0;b=d+8|0;if((c[b>>2]|0)==0?(c[d>>2]=1,c[b>>2]=1,(c[(c[f+12>>2]|0)+12>>2]|0)>0):0)Ed(f);c[e>>2]=(c[e>>2]|0)+-16;return g|0}function dh(b,d,e,f,g){b=b|0;d=d|0;e=e|0;f=f|0;g=g|0;var h=0;a[d+76>>0]=46;h=d+52|0;c[h>>2]=b;c[d>>2]=g;c[d+32>>2]=286;c[d+56>>2]=e;c[d+48>>2]=0;c[d+4>>2]=1;c[d+8>>2]=1;c[d+68>>2]=f;f=Be(b,9039)|0;c[d+72>>2]=f;b=f+5|0;a[b>>0]=a[b>>0]|32;b=d+60|0;d=c[b>>2]|0;f=Hd(c[h>>2]|0,c[d>>2]|0,c[d+8>>2]|0,32)|0;d=c[b>>2]|0;c[d>>2]=f;c[d+8>>2]=32;return}function eh(a){a=a|0;var b=0,d=0;c[a+8>>2]=c[a+4>>2];b=a+32|0;if((c[b>>2]|0)==286){d=fh(a,a+24|0)|0;c[a+16>>2]=d;return}else{d=a+16|0;c[d>>2]=c[b>>2];c[d+4>>2]=c[b+4>>2];c[d+8>>2]=c[b+8>>2];c[d+12>>2]=c[b+12>>2];c[b>>2]=286;return}}function fh(b,e){b=b|0;e=e|0;var f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0,z=0,A=0,B=0,C=0,D=0,E=0,F=0,G=0,H=0,I=0,J=0,K=0,L=0,M=0,N=0,O=0,P=0,Q=0,R=0,S=0,T=0,U=0,V=0,W=0,X=0,Y=0,Z=0,_=0,$=0,aa=0,ba=0,ca=0,da=0,ea=0,fa=0,ga=0,ha=0,ia=0,ja=0,ka=0,la=0,ma=0,na=0,oa=0,pa=0,qa=0,ra=0,sa=0,ta=0,ua=0,va=0,wa=0,xa=0,ya=0,za=0,Aa=0,Ba=0,Ca=0,Da=0,Ea=0,Fa=0,Ga=0,Ha=0,Ia=0,Ja=0,Ka=0,La=0,Ma=0,Na=0,Oa=0,Qa=0,Ra=0,Sa=0,Ta=0,Ua=0,Va=0,Wa=0,Xa=0,Ya=0,Za=0,_a=0,$a=0,ab=0,bb=0,cb=0,db=0,eb=0,fb=0,gb=0,hb=0,ib=0,jb=0,kb=0,lb=0,mb=0,nb=0,ob=0,pb=0,qb=0,rb=0,sb=0,tb=0,ub=0,vb=0,wb=0;f=Pa;Pa=Pa+16|0;g=f;h=b+60|0;c[(c[h>>2]|0)+4>>2]=0;i=b+56|0;j=b+4|0;a:while(1){k=c[b>>2]|0;b:do switch(k|0){case 91:{l=36;break a;break}case 61:{l=40;break a;break}case 60:{l=48;break a;break}case 62:{l=56;break a;break}case 126:{l=64;break a;break}case 58:{l=72;break a;break}case 39:case 34:{l=80;break a;break}case 46:{l=204;break a;break}case 57:case 56:case 55:case 54:case 53:case 52:case 51:case 50:case 49:case 48:{m=k;break a;break}case -1:{n=286;l=350;break a;break}case 13:case 10:{o=c[i>>2]|0;p=c[o>>2]|0;c[o>>2]=p+-1;if(!p)q=jf(o)|0;else{p=o+4|0;o=c[p>>2]|0;c[p>>2]=o+1;q=d[o>>0]|0}c[b>>2]=q;switch(q|0){case 13:case 10:{if((q|0)!=(k|0)){o=c[i>>2]|0;p=c[o>>2]|0;c[o>>2]=p+-1;if(!p)r=jf(o)|0;else{p=o+4|0;o=c[p>>2]|0;c[p>>2]=o+1;r=d[o>>0]|0}c[b>>2]=r}break}default:{}}o=c[j>>2]|0;c[j>>2]=o+1;if((o|0)>2147483643){l=14;break a}break}case 11:case 9:case 12:case 32:{o=c[i>>2]|0;p=c[o>>2]|0;c[o>>2]=p+-1;if(!p)s=jf(o)|0;else{p=o+4|0;o=c[p>>2]|0;c[p>>2]=o+1;s=d[o>>0]|0}c[b>>2]=s;break}case 45:{o=c[i>>2]|0;p=c[o>>2]|0;c[o>>2]=p+-1;if(!p)t=jf(o)|0;else{p=o+4|0;o=c[p>>2]|0;c[p>>2]=o+1;t=d[o>>0]|0}c[b>>2]=t;if((t|0)!=45){n=45;l=350;break a}o=c[i>>2]|0;p=c[o>>2]|0;c[o>>2]=p+-1;if(!p)u=jf(o)|0;else{p=o+4|0;o=c[p>>2]|0;c[p>>2]=o+1;u=d[o>>0]|0}c[b>>2]=u;do if((u|0)==91){o=gh(b)|0;c[(c[h>>2]|0)+4>>2]=0;if((o|0)>-1){hh(b,0,o);c[(c[h>>2]|0)+4>>2]=0;break b}else{v=c[b>>2]|0;break}}else v=u;while(0);o=v;while(1){switch(o|0){case -1:case 13:case 10:{break b;break}default:{}}p=c[i>>2]|0;w=c[p>>2]|0;c[p>>2]=w+-1;if(!w)x=jf(p)|0;else{w=p+4|0;p=c[w>>2]|0;c[w>>2]=p+1;x=d[p>>0]|0}c[b>>2]=x;o=x}break}default:{l=328;break a}}while(0)}switch(l|0){case 14:{ah(b,9044);break}case 36:{x=gh(b)|0;if((x|0)>-1){hh(b,e,x);n=289;Pa=f;return n|0}if((x|0)==-1){n=91;Pa=f;return n|0}else bh(b,9069,289);break}case 40:{x=c[i>>2]|0;v=c[x>>2]|0;c[x>>2]=v+-1;if(!v)y=jf(x)|0;else{v=x+4|0;x=c[v>>2]|0;c[v>>2]=x+1;y=d[x>>0]|0}c[b>>2]=y;if((y|0)!=61){n=61;Pa=f;return n|0}y=c[i>>2]|0;x=c[y>>2]|0;c[y>>2]=x+-1;if(!x)z=jf(y)|0;else{x=y+4|0;y=c[x>>2]|0;c[x>>2]=y+1;z=d[y>>0]|0}c[b>>2]=z;n=281;Pa=f;return n|0}case 48:{z=c[i>>2]|0;y=c[z>>2]|0;c[z>>2]=y+-1;if(!y)A=jf(z)|0;else{y=z+4|0;z=c[y>>2]|0;c[y>>2]=z+1;A=d[z>>0]|0}c[b>>2]=A;if((A|0)!=61){n=60;Pa=f;return n|0}A=c[i>>2]|0;z=c[A>>2]|0;c[A>>2]=z+-1;if(!z)B=jf(A)|0;else{z=A+4|0;A=c[z>>2]|0;c[z>>2]=A+1;B=d[A>>0]|0}c[b>>2]=B;n=283;Pa=f;return n|0}case 56:{B=c[i>>2]|0;A=c[B>>2]|0;c[B>>2]=A+-1;if(!A)C=jf(B)|0;else{A=B+4|0;B=c[A>>2]|0;c[A>>2]=B+1;C=d[B>>0]|0}c[b>>2]=C;if((C|0)!=61){n=62;Pa=f;return n|0}C=c[i>>2]|0;B=c[C>>2]|0;c[C>>2]=B+-1;if(!B)D=jf(C)|0;else{B=C+4|0;C=c[B>>2]|0;c[B>>2]=C+1;D=d[C>>0]|0}c[b>>2]=D;n=282;Pa=f;return n|0}case 64:{D=c[i>>2]|0;C=c[D>>2]|0;c[D>>2]=C+-1;if(!C)E=jf(D)|0;else{C=D+4|0;D=c[C>>2]|0;c[C>>2]=D+1;E=d[D>>0]|0}c[b>>2]=E;if((E|0)!=61){n=126;Pa=f;return n|0}E=c[i>>2]|0;D=c[E>>2]|0;c[E>>2]=D+-1;if(!D)F=jf(E)|0;else{D=E+4|0;E=c[D>>2]|0;c[D>>2]=E+1;F=d[E>>0]|0}c[b>>2]=F;n=284;Pa=f;return n|0}case 72:{F=c[i>>2]|0;E=c[F>>2]|0;c[F>>2]=E+-1;if(!E)G=jf(F)|0;else{E=F+4|0;F=c[E>>2]|0;c[E>>2]=F+1;G=d[F>>0]|0}c[b>>2]=G;if((G|0)!=58){n=58;Pa=f;return n|0}G=c[i>>2]|0;F=c[G>>2]|0;c[G>>2]=F+-1;if(!F)H=jf(G)|0;else{F=G+4|0;G=c[F>>2]|0;c[F>>2]=G+1;H=d[G>>0]|0}c[b>>2]=H;n=285;Pa=f;return n|0}case 80:{H=c[h>>2]|0;G=H+4|0;F=c[G>>2]|0;E=F+1|0;D=H+8|0;C=c[D>>2]|0;do if(E>>>0>C>>>0){if(C>>>0>2147483645)bh(b,9003,0);B=C<<1;A=c[b+52>>2]|0;if((B|0)==-2)Gd(A);else{z=Hd(A,c[H>>2]|0,C,B)|0;c[H>>2]=z;c[D>>2]=B;B=c[G>>2]|0;I=B+1|0;J=z;K=B;break}}else{I=E;J=c[H>>2]|0;K=F}while(0);F=k&255;c[G>>2]=I;a[J+K>>0]=F;K=c[i>>2]|0;J=c[K>>2]|0;c[K>>2]=J+-1;if(!J)L=jf(K)|0;else{J=K+4|0;K=c[J>>2]|0;c[J>>2]=K+1;L=d[K>>0]|0}c[b>>2]=L;c:do if((L|0)!=(k|0)){K=b+52|0;J=g+4|0;I=g+8|0;G=L;d:while(1){e:do switch(G|0){case -1:{l=93;break d;break}case 13:case 10:{l=94;break d;break}case 92:{H=c[i>>2]|0;E=c[H>>2]|0;c[H>>2]=E+-1;if(!E)M=jf(H)|0;else{E=H+4|0;H=c[E>>2]|0;c[E>>2]=H+1;M=d[H>>0]|0}c[b>>2]=M;do switch(M|0){case -1:{N=M;break e;break}case 97:{O=7;l=166;break}case 98:{O=8;l=166;break}case 102:{O=12;l=166;break}case 110:{O=10;l=166;break}case 114:{O=13;l=166;break}case 116:{O=9;l=166;break}case 118:{O=11;l=166;break}case 120:{c[g>>2]=120;H=c[i>>2]|0;E=c[H>>2]|0;c[H>>2]=E+-1;if(!E)P=jf(H)|0;else{E=H+4|0;H=c[E>>2]|0;c[E>>2]=H+1;P=d[H>>0]|0}c[b>>2]=P;c[J>>2]=P;if(!(a[432+(P+1)>>0]&16)){Q=2;l=109;break d}H=Md(P)|0;E=c[i>>2]|0;D=c[E>>2]|0;c[E>>2]=D+-1;if(!D)R=jf(E)|0;else{D=E+4|0;E=c[D>>2]|0;c[D>>2]=E+1;R=d[E>>0]|0}c[b>>2]=R;c[I>>2]=R;if(!(a[432+(R+1)>>0]&16)){Q=3;l=109;break d}O=(Md(R)|0)+(H<<4)|0;l=166;break}case 13:case 10:{H=c[i>>2]|0;E=c[H>>2]|0;c[H>>2]=E+-1;if(!E)S=jf(H)|0;else{E=H+4|0;H=c[E>>2]|0;c[E>>2]=H+1;S=d[H>>0]|0}c[b>>2]=S;switch(S|0){case 13:case 10:{if((S|0)!=(M|0)){H=c[i>>2]|0;E=c[H>>2]|0;c[H>>2]=E+-1;if(!E)T=jf(H)|0;else{E=H+4|0;H=c[E>>2]|0;c[E>>2]=H+1;T=d[H>>0]|0}c[b>>2]=T}break}default:{}}H=c[j>>2]|0;c[j>>2]=H+1;if((H|0)>2147483643){l=125;break d}else U=10;break}case 39:case 34:case 92:{O=M;l=166;break}case 122:{H=c[i>>2]|0;E=c[H>>2]|0;c[H>>2]=E+-1;if(!E)V=jf(H)|0;else{E=H+4|0;H=c[E>>2]|0;c[E>>2]=H+1;V=d[H>>0]|0}c[b>>2]=V;if(!(a[432+(V+1)>>0]&8)){N=V;break e}H=V;while(1){switch(H|0){case 13:case 10:{E=c[i>>2]|0;D=c[E>>2]|0;c[E>>2]=D+-1;if(!D)W=jf(E)|0;else{D=E+4|0;E=c[D>>2]|0;c[D>>2]=E+1;W=d[E>>0]|0}c[b>>2]=W;switch(W|0){case 13:case 10:{if((W|0)==(H|0))X=H;else{E=c[i>>2]|0;D=c[E>>2]|0;c[E>>2]=D+-1;if(!D)Y=jf(E)|0;else{D=E+4|0;E=c[D>>2]|0;c[D>>2]=E+1;Y=d[E>>0]|0}c[b>>2]=Y;X=Y}break}default:X=W}E=c[j>>2]|0;c[j>>2]=E+1;if((E|0)>2147483643){l=143;break d}else Z=X;break}default:{E=c[i>>2]|0;D=c[E>>2]|0;c[E>>2]=D+-1;if(!D)_=jf(E)|0;else{D=E+4|0;E=c[D>>2]|0;c[D>>2]=E+1;_=d[E>>0]|0}c[b>>2]=_;Z=_}}if(!(a[432+(Z+1)>>0]&8)){N=Z;break e}else H=Z}break}default:{if(!(a[432+(M+1)>>0]&2)){l=150;break d}c[g>>2]=M;H=M+-48|0;E=c[i>>2]|0;D=c[E>>2]|0;c[E>>2]=D+-1;if(!D)$=jf(E)|0;else{D=E+4|0;E=c[D>>2]|0;c[D>>2]=E+1;$=d[E>>0]|0}c[b>>2]=$;if(a[432+($+1)>>0]&2){c[J>>2]=$;E=(H*10|0)+-48+$|0;D=c[i>>2]|0;C=c[D>>2]|0;c[D>>2]=C+-1;if(!C)aa=jf(D)|0;else{C=D+4|0;D=c[C>>2]|0;c[C>>2]=D+1;aa=d[D>>0]|0}c[b>>2]=aa;if(!(a[432+(aa+1)>>0]&2)){ba=E;ca=2}else{c[I>>2]=aa;D=c[i>>2]|0;C=c[D>>2]|0;c[D>>2]=C+-1;if(!C)da=jf(D)|0;else{C=D+4|0;D=c[C>>2]|0;c[C>>2]=D+1;da=d[D>>0]|0}c[b>>2]=da;ba=(E*10|0)+-48+aa|0;ca=3}}else{ba=H;ca=1}if((ba|0)>255){l=156;break d}U=ba}}while(0);if((l|0)==166){l=0;H=c[i>>2]|0;E=c[H>>2]|0;c[H>>2]=E+-1;if(!E)ea=jf(H)|0;else{E=H+4|0;H=c[E>>2]|0;c[E>>2]=H+1;ea=d[H>>0]|0}c[b>>2]=ea;U=O}H=c[h>>2]|0;E=H+4|0;D=c[E>>2]|0;C=D+1|0;B=H+8|0;z=c[B>>2]|0;if(C>>>0>z>>>0){if(z>>>0>2147483645){l=173;break d}A=z<<1;fa=c[K>>2]|0;if((A|0)==-2){l=175;break d}y=Hd(fa,c[H>>2]|0,z,A)|0;c[H>>2]=y;c[B>>2]=A;A=c[E>>2]|0;ga=A+1|0;ha=y;ia=A}else{ga=C;ha=c[H>>2]|0;ia=D}c[E>>2]=ga;a[ha+ia>>0]=U;N=c[b>>2]|0;break}default:{E=c[h>>2]|0;D=E+4|0;H=c[D>>2]|0;C=H+1|0;A=E+8|0;y=c[A>>2]|0;if(C>>>0>y>>>0){if(y>>>0>2147483645){l=181;break d}B=y<<1;ja=c[K>>2]|0;if((B|0)==-2){l=183;break d}z=Hd(ja,c[E>>2]|0,y,B)|0;c[E>>2]=z;c[A>>2]=B;B=c[D>>2]|0;ka=B+1|0;la=z;ma=B}else{ka=C;la=c[E>>2]|0;ma=H}c[D>>2]=ka;a[la+ma>>0]=G;D=c[i>>2]|0;H=c[D>>2]|0;c[D>>2]=H+-1;if(!H)na=jf(D)|0;else{H=D+4|0;D=c[H>>2]|0;c[H>>2]=D+1;na=d[D>>0]|0}c[b>>2]=na;N=na}}while(0);if((N|0)==(k|0))break c;else G=N}switch(l|0){case 93:{bh(b,9099,286);break}case 94:{bh(b,9099,289);break}case 109:{ih(b,g,Q,9117);break}case 125:{ah(b,9044);break}case 143:{ah(b,9044);break}case 150:{ih(b,b,1,9144);break}case 156:{ih(b,g,ca,9168);break}case 173:{bh(b,9003,0);break}case 175:{Gd(fa);break}case 181:{bh(b,9003,0);break}case 183:{Gd(ja);break}}}while(0);ja=c[h>>2]|0;fa=ja+4|0;ca=c[fa>>2]|0;g=ca+1|0;Q=ja+8|0;N=c[Q>>2]|0;do if(g>>>0>N>>>0){if(N>>>0>2147483645)bh(b,9003,0);na=N<<1;ma=c[b+52>>2]|0;if((na|0)==-2)Gd(ma);else{la=Hd(ma,c[ja>>2]|0,N,na)|0;c[ja>>2]=la;c[Q>>2]=na;na=c[fa>>2]|0;oa=na+1|0;pa=la;qa=na;break}}else{oa=g;pa=c[ja>>2]|0;qa=ca}while(0);c[fa>>2]=oa;a[pa+qa>>0]=F;F=c[i>>2]|0;qa=c[F>>2]|0;c[F>>2]=qa+-1;if(!qa)ra=jf(F)|0;else{qa=F+4|0;F=c[qa>>2]|0;c[qa>>2]=F+1;ra=d[F>>0]|0}c[b>>2]=ra;ra=c[h>>2]|0;F=c[b+52>>2]|0;qa=Ae(F,(c[ra>>2]|0)+1|0,(c[ra+4>>2]|0)+-2|0)|0;ra=F+8|0;pa=c[ra>>2]|0;c[ra>>2]=pa+16;c[pa>>2]=qa;c[pa+8>>2]=(a[qa+4>>0]|64)&255;pa=Je(F,c[(c[b+48>>2]|0)+4>>2]|0,(c[ra>>2]|0)+-16|0)|0;oa=pa+8|0;if((c[oa>>2]|0)==0?(c[pa>>2]=1,c[oa>>2]=1,(c[(c[F+12>>2]|0)+12>>2]|0)>0):0)Ed(F);c[ra>>2]=(c[ra>>2]|0)+-16;c[e>>2]=qa;n=289;Pa=f;return n|0}case 204:{qa=c[h>>2]|0;ra=qa+4|0;F=c[ra>>2]|0;oa=F+1|0;pa=qa+8|0;fa=c[pa>>2]|0;do if(oa>>>0>fa>>>0){if(fa>>>0>2147483645)bh(b,9003,0);ca=fa<<1;ja=c[b+52>>2]|0;if((ca|0)==-2)Gd(ja);else{g=Hd(ja,c[qa>>2]|0,fa,ca)|0;c[qa>>2]=g;c[pa>>2]=ca;ca=c[ra>>2]|0;sa=ca+1|0;ta=g;ua=ca;break}}else{sa=oa;ta=c[qa>>2]|0;ua=F}while(0);c[ra>>2]=sa;a[ta+ua>>0]=46;ua=c[i>>2]|0;ta=c[ua>>2]|0;c[ua>>2]=ta+-1;if(!ta)va=jf(ua)|0;else{ta=ua+4|0;ua=c[ta>>2]|0;c[ta>>2]=ua+1;va=d[ua>>0]|0}c[b>>2]=va;if(va|0?Xk(13528,va,2)|0:0){ua=c[h>>2]|0;ta=ua+4|0;sa=c[ta>>2]|0;ra=sa+1|0;F=ua+8|0;qa=c[F>>2]|0;do if(ra>>>0>qa>>>0){if(qa>>>0>2147483645)bh(b,9003,0);oa=qa<<1;pa=c[b+52>>2]|0;if((oa|0)==-2)Gd(pa);else{fa=Hd(pa,c[ua>>2]|0,qa,oa)|0;c[ua>>2]=fa;c[F>>2]=oa;oa=c[ta>>2]|0;wa=oa+1|0;xa=fa;ya=oa;break}}else{wa=ra;xa=c[ua>>2]|0;ya=sa}while(0);c[ta>>2]=wa;a[xa+ya>>0]=va;ya=c[i>>2]|0;xa=c[ya>>2]|0;c[ya>>2]=xa+-1;if(!xa)za=jf(ya)|0;else{xa=ya+4|0;ya=c[xa>>2]|0;c[xa>>2]=ya+1;za=d[ya>>0]|0}c[b>>2]=za;if(!za){n=279;Pa=f;return n|0}if(!(Xk(13528,za,2)|0)){n=279;Pa=f;return n|0}ya=c[h>>2]|0;xa=ya+4|0;wa=c[xa>>2]|0;ta=wa+1|0;sa=ya+8|0;ua=c[sa>>2]|0;do if(ta>>>0>ua>>>0){if(ua>>>0>2147483645)bh(b,9003,0);ra=ua<<1;F=c[b+52>>2]|0;if((ra|0)==-2)Gd(F);else{qa=Hd(F,c[ya>>2]|0,ua,ra)|0;c[ya>>2]=qa;c[sa>>2]=ra;ra=c[xa>>2]|0;Aa=ra+1|0;Ba=qa;Ca=ra;break}}else{Aa=ta;Ba=c[ya>>2]|0;Ca=wa}while(0);c[xa>>2]=Aa;a[Ba+Ca>>0]=za;za=c[i>>2]|0;Ca=c[za>>2]|0;c[za>>2]=Ca+-1;if(!Ca)Da=jf(za)|0;else{Ca=za+4|0;za=c[Ca>>2]|0;c[Ca>>2]=za+1;Da=d[za>>0]|0}c[b>>2]=Da;n=280;Pa=f;return n|0}if(!(a[432+(va+1)>>0]&2)){n=46;Pa=f;return n|0}else m=va;break}case 328:{if(!(a[432+(k+1)>>0]&1)){va=c[i>>2]|0;Da=c[va>>2]|0;c[va>>2]=Da+-1;if(!Da)Ea=jf(va)|0;else{Da=va+4|0;va=c[Da>>2]|0;c[Da>>2]=va+1;Ea=d[va>>0]|0}c[b>>2]=Ea;n=k;Pa=f;return n|0}Ea=b+52|0;va=k;while(1){k=c[h>>2]|0;Da=k+4|0;za=c[Da>>2]|0;Ca=za+1|0;Ba=k+8|0;Aa=c[Ba>>2]|0;if(Ca>>>0>Aa>>>0){if(Aa>>>0>2147483645){l=333;break}xa=Aa<<1;Fa=c[Ea>>2]|0;if((xa|0)==-2){l=335;break}wa=Hd(Fa,c[k>>2]|0,Aa,xa)|0;c[k>>2]=wa;c[Ba>>2]=xa;xa=c[Da>>2]|0;Ga=xa+1|0;Ha=wa;Ia=xa}else{Ga=Ca;Ha=c[k>>2]|0;Ia=za}c[Da>>2]=Ga;a[Ha+Ia>>0]=va;Da=c[i>>2]|0;za=c[Da>>2]|0;c[Da>>2]=za+-1;if(!za)Ja=jf(Da)|0;else{za=Da+4|0;Da=c[za>>2]|0;c[za>>2]=Da+1;Ja=d[Da>>0]|0}c[b>>2]=Ja;if(!(a[432+(Ja+1)>>0]&3)){l=341;break}else va=Ja}if((l|0)==333)bh(b,9003,0);else if((l|0)==335)Gd(Fa);else if((l|0)==341){Fa=c[h>>2]|0;Ja=c[Ea>>2]|0;Ea=Ae(Ja,c[Fa>>2]|0,c[Fa+4>>2]|0)|0;Fa=Ja+8|0;va=c[Fa>>2]|0;c[Fa>>2]=va+16;c[va>>2]=Ea;Ia=Ea+4|0;c[va+8>>2]=(a[Ia>>0]|64)&255;va=Je(Ja,c[(c[b+48>>2]|0)+4>>2]|0,(c[Fa>>2]|0)+-16|0)|0;Ha=va+8|0;if((c[Ha>>2]|0)==0?(c[va>>2]=1,c[Ha>>2]=1,(c[(c[Ja+12>>2]|0)+12>>2]|0)>0):0)Ed(Ja);c[Fa>>2]=(c[Fa>>2]|0)+-16;c[e>>2]=Ea;if((a[Ia>>0]|0)==4){Ia=a[Ea+6>>0]|0;Pa=f;return (Ia<<24>>24==0?288:Ia&255|256)|0}else{n=288;Pa=f;return n|0}}break}case 350:{Pa=f;return n|0}}Ia=c[h>>2]|0;Ea=Ia+4|0;Fa=c[Ea>>2]|0;Ja=Fa+1|0;Ha=Ia+8|0;va=c[Ha>>2]|0;do if(Ja>>>0>va>>>0){if(va>>>0>2147483645)bh(b,9003,0);Ga=va<<1;Da=c[b+52>>2]|0;if((Ga|0)==-2)Gd(Da);else{za=Hd(Da,c[Ia>>2]|0,va,Ga)|0;c[Ia>>2]=za;c[Ha>>2]=Ga;Ga=c[Ea>>2]|0;Ka=Ga+1|0;La=za;Ma=Ga;break}}else{Ka=Ja;La=c[Ia>>2]|0;Ma=Fa}while(0);c[Ea>>2]=Ka;a[La+Ma>>0]=m;Ma=c[i>>2]|0;La=c[Ma>>2]|0;c[Ma>>2]=La+-1;if(!La)Na=jf(Ma)|0;else{La=Ma+4|0;Ma=c[La>>2]|0;c[La>>2]=Ma+1;Na=d[Ma>>0]|0}c[b>>2]=Na;if(!((m|0)!=48|(Na|0)==0)?(Xk(9193,Na,3)|0)!=0:0){m=c[h>>2]|0;Ma=m+4|0;La=c[Ma>>2]|0;Ka=La+1|0;Ea=m+8|0;Fa=c[Ea>>2]|0;do if(Ka>>>0>Fa>>>0){if(Fa>>>0>2147483645)bh(b,9003,0);Ia=Fa<<1;Ja=c[b+52>>2]|0;if((Ia|0)==-2)Gd(Ja);else{Ha=Hd(Ja,c[m>>2]|0,Fa,Ia)|0;c[m>>2]=Ha;c[Ea>>2]=Ia;Ia=c[Ma>>2]|0;Oa=Ia+1|0;Qa=Ha;Ra=Ia;break}}else{Oa=Ka;Qa=c[m>>2]|0;Ra=La}while(0);c[Ma>>2]=Oa;a[Qa+Ra>>0]=Na;Ra=c[i>>2]|0;Qa=c[Ra>>2]|0;c[Ra>>2]=Qa+-1;if(!Qa)Sa=jf(Ra)|0;else{Qa=Ra+4|0;Ra=c[Qa>>2]|0;c[Qa>>2]=Ra+1;Sa=d[Ra>>0]|0}c[b>>2]=Sa;Ta=9199;Ua=Sa}else{Ta=9196;Ua=Na}Na=b+52|0;Sa=Ua;while(1){if(Sa)if(Xk(Ta,Sa,3)|0){Ua=c[h>>2]|0;Ra=Ua+4|0;Qa=c[Ra>>2]|0;Oa=Qa+1|0;Ma=Ua+8|0;La=c[Ma>>2]|0;if(Oa>>>0>La>>>0){if(La>>>0>2147483645){l=269;break}m=La<<1;Va=c[Na>>2]|0;if((m|0)==-2){l=271;break}Ka=Hd(Va,c[Ua>>2]|0,La,m)|0;c[Ua>>2]=Ka;c[Ma>>2]=m;m=c[Ra>>2]|0;Wa=m+1|0;Xa=Ka;Ya=m}else{Wa=Oa;Xa=c[Ua>>2]|0;Ya=Qa}c[Ra>>2]=Wa;a[Xa+Ya>>0]=Sa;Ra=c[i>>2]|0;Qa=c[Ra>>2]|0;c[Ra>>2]=Qa+-1;if(!Qa)Za=jf(Ra)|0;else{Qa=Ra+4|0;Ra=c[Qa>>2]|0;c[Qa>>2]=Ra+1;Za=d[Ra>>0]|0}c[b>>2]=Za;if(Za)if(!(Xk(9202,Za,3)|0))_a=Za;else{Ra=c[h>>2]|0;Qa=Ra+4|0;Ua=c[Qa>>2]|0;Oa=Ua+1|0;m=Ra+8|0;Ka=c[m>>2]|0;if(Oa>>>0>Ka>>>0){if(Ka>>>0>2147483645){l=281;break}Ma=Ka<<1;$a=c[Na>>2]|0;if((Ma|0)==-2){l=283;break}La=Hd($a,c[Ra>>2]|0,Ka,Ma)|0;c[Ra>>2]=La;c[m>>2]=Ma;Ma=c[Qa>>2]|0;ab=Ma+1|0;bb=La;cb=Ma}else{ab=Oa;bb=c[Ra>>2]|0;cb=Ua}c[Qa>>2]=ab;a[bb+cb>>0]=Za;Qa=c[i>>2]|0;Ua=c[Qa>>2]|0;c[Qa>>2]=Ua+-1;if(!Ua)db=jf(Qa)|0;else{Ua=Qa+4|0;Qa=c[Ua>>2]|0;c[Ua>>2]=Qa+1;db=d[Qa>>0]|0}c[b>>2]=db;_a=db}else _a=0}else _a=Sa;else _a=0;eb=c[h>>2]|0;fb=eb+4|0;gb=c[fb>>2]|0;hb=gb+1|0;ib=eb+8|0;jb=c[ib>>2]|0;kb=hb>>>0>jb>>>0;if(!((_a|0)==46?1:(a[432+(_a+1)>>0]&16)!=0)){l=301;break}if(kb){if(jb>>>0>2147483645){l=293;break}Qa=jb<<1;lb=c[Na>>2]|0;if((Qa|0)==-2){l=295;break}Ua=Hd(lb,c[eb>>2]|0,jb,Qa)|0;c[eb>>2]=Ua;c[ib>>2]=Qa;Qa=c[fb>>2]|0;mb=Qa+1|0;nb=Ua;ob=Qa}else{mb=hb;nb=c[eb>>2]|0;ob=gb}c[fb>>2]=mb;a[nb+ob>>0]=_a;Qa=c[i>>2]|0;Ua=c[Qa>>2]|0;c[Qa>>2]=Ua+-1;if(!Ua)pb=jf(Qa)|0;else{Ua=Qa+4|0;Qa=c[Ua>>2]|0;c[Ua>>2]=Qa+1;pb=d[Qa>>0]|0}c[b>>2]=pb;Sa=pb}if((l|0)==269)bh(b,9003,0);else if((l|0)==271)Gd(Va);else if((l|0)==281)bh(b,9003,0);else if((l|0)==283)Gd($a);else if((l|0)==293)bh(b,9003,0);else if((l|0)==295)Gd(lb);else if((l|0)==301){do if(kb){if(jb>>>0>2147483645)bh(b,9003,0);l=jb<<1;lb=c[Na>>2]|0;if((l|0)==-2)Gd(lb);else{$a=Hd(lb,c[eb>>2]|0,jb,l)|0;c[eb>>2]=$a;c[ib>>2]=l;l=c[fb>>2]|0;qb=l+1|0;rb=$a;sb=l;break}}else{qb=hb;rb=c[eb>>2]|0;sb=gb}while(0);c[fb>>2]=qb;a[rb+sb>>0]=0;sb=b+76|0;rb=a[sb>>0]|0;qb=c[h>>2]|0;fb=c[qb>>2]|0;gb=c[qb+4>>2]|0;if(!gb){tb=fb;ub=-1}else{qb=gb;do{qb=qb+-1|0;gb=fb+qb|0;if((a[gb>>0]|0)==46)a[gb>>0]=rb}while((qb|0)!=0);qb=c[h>>2]|0;tb=c[qb>>2]|0;ub=(c[qb+4>>2]|0)+-1|0}if(Nd(tb,ub,e)|0){n=287;Pa=f;return n|0}ub=a[sb>>0]|0;tb=qn()|0;qb=a[c[tb>>2]>>0]|0;a[sb>>0]=qb;tb=c[h>>2]|0;rb=c[tb>>2]|0;fb=c[tb+4>>2]|0;if(!fb){vb=rb;wb=-1}else{tb=fb;do{tb=tb+-1|0;fb=rb+tb|0;if((a[fb>>0]|0)==ub<<24>>24)a[fb>>0]=qb}while((tb|0)!=0);tb=c[h>>2]|0;vb=c[tb>>2]|0;wb=(c[tb+4>>2]|0)+-1|0}if(Nd(vb,wb,e)|0){n=287;Pa=f;return n|0}n=a[sb>>0]|0;sb=c[h>>2]|0;h=c[sb>>2]|0;f=c[sb+4>>2]|0;if(!f)bh(b,9205,287);sb=f;do{sb=sb+-1|0;f=h+sb|0;if((a[f>>0]|0)==n<<24>>24)a[f>>0]=46}while((sb|0)!=0);bh(b,9205,287)}return 0}function gh(b){b=b|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0,z=0,A=0,B=0,C=0,D=0;e=c[b>>2]|0;f=b+60|0;g=c[f>>2]|0;h=g+4|0;i=c[h>>2]|0;j=i+1|0;k=g+8|0;l=c[k>>2]|0;do if(j>>>0>l>>>0){if(l>>>0>2147483645)bh(b,9003,0);m=l<<1;n=c[b+52>>2]|0;if((m|0)==-2)Gd(n);else{o=Hd(n,c[g>>2]|0,l,m)|0;c[g>>2]=o;c[k>>2]=m;m=c[h>>2]|0;p=m+1|0;q=o;r=m;break}}else{p=j;q=c[g>>2]|0;r=i}while(0);c[h>>2]=p;a[q+r>>0]=e;r=b+56|0;q=c[r>>2]|0;p=c[q>>2]|0;c[q>>2]=p+-1;if(!p)s=jf(q)|0;else{p=q+4|0;q=c[p>>2]|0;c[p>>2]=q+1;s=d[q>>0]|0}c[b>>2]=s;if((s|0)!=61){t=0;u=s;v=(u|0)!=(e|0);w=v<<31>>31;x=t^w;return x|0}s=b+52|0;q=0;while(1){p=c[f>>2]|0;h=p+4|0;i=c[h>>2]|0;g=i+1|0;j=p+8|0;k=c[j>>2]|0;if(g>>>0>k>>>0){if(k>>>0>2147483645){y=16;break}l=k<<1;z=c[s>>2]|0;if((l|0)==-2){y=18;break}m=Hd(z,c[p>>2]|0,k,l)|0;c[p>>2]=m;c[j>>2]=l;l=c[h>>2]|0;A=l+1|0;B=m;C=l}else{A=g;B=c[p>>2]|0;C=i}c[h>>2]=A;a[B+C>>0]=61;h=c[r>>2]|0;i=c[h>>2]|0;c[h>>2]=i+-1;if(!i)D=jf(h)|0;else{i=h+4|0;h=c[i>>2]|0;c[i>>2]=h+1;D=d[h>>0]|0}c[b>>2]=D;h=q+1|0;if((D|0)==61)q=h;else{t=h;u=D;y=24;break}}if((y|0)==16)bh(b,9003,0);else if((y|0)==18)Gd(z);else if((y|0)==24){v=(u|0)!=(e|0);w=v<<31>>31;x=t^w;return x|0}return 0}function hh(b,e,f){b=b|0;e=e|0;f=f|0;var g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0,z=0,A=0,B=0,C=0,D=0,E=0,F=0,G=0,H=0,I=0,J=0,K=0,L=0,M=0,N=0,O=0,P=0,Q=0,R=0,S=0,T=0;g=c[b>>2]|0;h=b+60|0;i=c[h>>2]|0;j=i+4|0;k=c[j>>2]|0;l=k+1|0;m=i+8|0;n=c[m>>2]|0;do if(l>>>0>n>>>0){if(n>>>0>2147483645)bh(b,9003,0);o=n<<1;p=c[b+52>>2]|0;if((o|0)==-2)Gd(p);else{q=Hd(p,c[i>>2]|0,n,o)|0;c[i>>2]=q;c[m>>2]=o;o=c[j>>2]|0;r=o+1|0;s=q;t=o;break}}else{r=l;s=c[i>>2]|0;t=k}while(0);c[j>>2]=r;a[s+t>>0]=g;g=b+56|0;t=c[g>>2]|0;s=c[t>>2]|0;c[t>>2]=s+-1;if(!s)u=jf(t)|0;else{s=t+4|0;t=c[s>>2]|0;c[s>>2]=t+1;u=d[t>>0]|0}c[b>>2]=u;switch(u|0){case 13:case 10:{t=c[g>>2]|0;s=c[t>>2]|0;c[t>>2]=s+-1;if(!s)v=jf(t)|0;else{s=t+4|0;t=c[s>>2]|0;c[s>>2]=t+1;v=d[t>>0]|0}c[b>>2]=v;switch(v|0){case 13:case 10:{if((v|0)==(u|0))w=u;else{t=c[g>>2]|0;s=c[t>>2]|0;c[t>>2]=s+-1;if(!s)x=jf(t)|0;else{s=t+4|0;t=c[s>>2]|0;c[s>>2]=t+1;x=d[t>>0]|0}c[b>>2]=x;w=x}break}default:w=v}v=b+4|0;x=c[v>>2]|0;c[v>>2]=x+1;if((x|0)>2147483643)ah(b,9044);else{y=v;z=w}break}default:{y=b+4|0;z=u}}u=(e|0)==0;w=b+52|0;v=z;a:while(1){b:do switch(v|0){case -1:{A=26;break a;break}case 93:{z=(gh(b)|0)==(f|0);B=c[b>>2]|0;if(z){A=29;break a}else C=B;break}case 13:case 10:{z=c[h>>2]|0;x=z+4|0;t=c[x>>2]|0;s=t+1|0;r=z+8|0;j=c[r>>2]|0;if(s>>>0>j>>>0){if(j>>>0>2147483645){A=43;break a}k=j<<1;D=c[w>>2]|0;if((k|0)==-2){A=45;break a}i=Hd(D,c[z>>2]|0,j,k)|0;c[z>>2]=i;c[r>>2]=k;k=c[x>>2]|0;E=k+1|0;F=i;G=k}else{E=s;F=c[z>>2]|0;G=t}c[x>>2]=E;a[F+G>>0]=10;x=c[b>>2]|0;t=c[g>>2]|0;z=c[t>>2]|0;c[t>>2]=z+-1;if(!z)H=jf(t)|0;else{z=t+4|0;t=c[z>>2]|0;c[z>>2]=t+1;H=d[t>>0]|0}c[b>>2]=H;switch(H|0){case 13:case 10:{if((H|0)==(x|0))I=x;else{x=c[g>>2]|0;t=c[x>>2]|0;c[x>>2]=t+-1;if(!t)J=jf(x)|0;else{t=x+4|0;x=c[t>>2]|0;c[t>>2]=x+1;J=d[x>>0]|0}c[b>>2]=J;I=J}break}default:I=H}x=c[y>>2]|0;c[y>>2]=x+1;if((x|0)>2147483643){A=57;break a}if(u){c[(c[h>>2]|0)+4>>2]=0;C=I}else C=I;break}default:{if(u){x=c[g>>2]|0;t=c[x>>2]|0;c[x>>2]=t+-1;if(!t)K=jf(x)|0;else{t=x+4|0;x=c[t>>2]|0;c[t>>2]=x+1;K=d[x>>0]|0}c[b>>2]=K;C=K;break b}x=c[h>>2]|0;t=x+4|0;z=c[t>>2]|0;s=z+1|0;k=x+8|0;i=c[k>>2]|0;if(s>>>0>i>>>0){if(i>>>0>2147483645){A=64;break a}r=i<<1;L=c[w>>2]|0;if((r|0)==-2){A=66;break a}j=Hd(L,c[x>>2]|0,i,r)|0;c[x>>2]=j;c[k>>2]=r;r=c[t>>2]|0;M=r+1|0;N=j;O=r}else{M=s;N=c[x>>2]|0;O=z}c[t>>2]=M;a[N+O>>0]=v;t=c[g>>2]|0;z=c[t>>2]|0;c[t>>2]=z+-1;if(!z)P=jf(t)|0;else{z=t+4|0;t=c[z>>2]|0;c[z>>2]=t+1;P=d[t>>0]|0}c[b>>2]=P;C=P}}while(0);v=C}if((A|0)==26)bh(b,u?9222:9246,286);else if((A|0)==29){C=c[h>>2]|0;v=C+4|0;P=c[v>>2]|0;O=P+1|0;N=C+8|0;M=c[N>>2]|0;do if(O>>>0>M>>>0){if(M>>>0>2147483645)bh(b,9003,0);K=M<<1;I=c[w>>2]|0;if((K|0)==-2)Gd(I);else{y=Hd(I,c[C>>2]|0,M,K)|0;c[C>>2]=y;c[N>>2]=K;K=c[v>>2]|0;Q=K+1|0;R=y;S=K;break}}else{Q=O;R=c[C>>2]|0;S=P}while(0);c[v>>2]=Q;a[R+S>>0]=B;B=c[g>>2]|0;g=c[B>>2]|0;c[B>>2]=g+-1;if(!g)T=jf(B)|0;else{g=B+4|0;B=c[g>>2]|0;c[g>>2]=B+1;T=d[B>>0]|0}c[b>>2]=T;if(u)return;u=c[h>>2]|0;h=f+2|0;f=c[w>>2]|0;w=Ae(f,(c[u>>2]|0)+h|0,(c[u+4>>2]|0)-(h<<1)|0)|0;h=f+8|0;u=c[h>>2]|0;c[h>>2]=u+16;c[u>>2]=w;c[u+8>>2]=(a[w+4>>0]|64)&255;u=Je(f,c[(c[b+48>>2]|0)+4>>2]|0,(c[h>>2]|0)+-16|0)|0;T=u+8|0;if((c[T>>2]|0)==0?(c[u>>2]=1,c[T>>2]=1,(c[(c[f+12>>2]|0)+12>>2]|0)>0):0)Ed(f);c[h>>2]=(c[h>>2]|0)+-16;c[e>>2]=w;return}else if((A|0)==43)bh(b,9003,0);else if((A|0)==45)Gd(D);else if((A|0)==57)ah(b,9044);else if((A|0)==64)bh(b,9003,0);else if((A|0)==66)Gd(L)}function ih(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0,g=0;c[(c[a+60>>2]|0)+4>>2]=0;jh(a,92);a:do if((d|0)>0){f=0;do{g=c[b+(f<<2)>>2]|0;if((g|0)==-1)break a;jh(a,g);f=f+1|0}while((f|0)<(d|0))}while(0);bh(a,e,289)}function jh(b,d){b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0;e=c[b+60>>2]|0;f=e+4|0;g=c[f>>2]|0;h=g+1|0;i=e+8|0;j=c[i>>2]|0;if(h>>>0<=j>>>0){k=h;l=c[e>>2]|0;m=g;n=d&255;c[f>>2]=k;o=l+m|0;a[o>>0]=n;return}if(j>>>0>2147483645)bh(b,9003,0);g=j<<1;h=c[b+52>>2]|0;if((g|0)==-2)Gd(h);b=Hd(h,c[e>>2]|0,j,g)|0;c[e>>2]=b;c[i>>2]=g;g=c[f>>2]|0;k=g+1|0;l=b;m=g;n=d&255;c[f>>2]=k;o=l+m|0;a[o>>0]=n;return}function kh(a){a=a|0;var b=0;b=fh(a,a+40|0)|0;c[a+32>>2]=b;return b|0}function lh(a){a=a|0;Tb(a,-1001e3,2);Tb(a,-1001e3,2);Zb(a,-2,9269);cg(a,848,0);Hb(a,9272,7)|0;Zb(a,-2,9280);return 1}function mh(a){a=a|0;var b=0,d=0,e=0,f=0;b=Pa;Pa=Pa+16|0;d=b;if(!(xb(a,1)|0)){e=Af(a,2,9815,0)|0;c[d>>2]=e;f=rf(a,11053,d)|0;Pa=b;return f|0}else{f=gb(a)|0;Pa=b;return f|0}return 0}function nh(a){a=a|0;var b=0,d=0,e=0;b=1088+((zf(a,1,9722,1040)|0)<<2)|0;d=c[b>>2]|0;b=jc(a,d,Jf(a,2,0)|0)|0;switch(d|0){case 3:{d=jc(a,4,0)|0;Eb(a,+(d|0)*.0009765625+ +(b|0));Fb(a,d);e=2;return e|0}case 9:case 5:{Mb(a,b);e=1;return e|0}default:{Fb(a,b);e=1;return e|0}}return 0}function oh(a){a=a|0;var b=0;b=Af(a,1,0,0)|0;hb(a,1);if(!(Sf(a,b,0)|0)){dc(a,0,-1,0,284);return (gb(a)|0)+-1|0}else kc(a)|0;return 0}function ph(a){a=a|0;var b=0;b=Jf(a,2,1)|0;hb(a,1);if(!((b|0)>0&(rb(a,1)|0)!=0))kc(a)|0;sf(a,b);mb(a,1);mc(a,2);kc(a)|0;return 0}function qh(a){a=a|0;Ef(a,1);if(!(Vb(a,1)|0)){Db(a);return 1}else{Xf(a,1,9496)|0;return 1}return 0}function rh(a){a=a|0;Jh(a,9713,1,285);return 3}function sh(a){a=a|0;var b=0,c=0,d=0,e=0;b=Af(a,1,0,0)|0;c=Af(a,2,0,0)|0;d=(nb(a,3)|0)==-1;if(Sf(a,b,c)|0){Db(a);jb(a,-2);e=2;return e|0}if(d){e=1;return e|0}mb(a,d?0:3);if(qc(a,-2,1)|0){e=1;return e|0}hb(a,-2);e=1;return e|0}function th(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0,i=0,j=0;b=Pa;Pa=Pa+16|0;d=b;e=yb(a,1,d)|0;f=Af(a,3,9639,0)|0;g=(nb(a,4)|0)==-1;if(!e){h=Af(a,2,9642,0)|0;Df(a,1,6);hb(a,5);i=gc(a,136,0,h,f)|0}else{h=Af(a,2,e,0)|0;i=Vf(a,e,c[d>>2]|0,h,f)|0}if(i|0){Db(a);jb(a,-2);j=2;Pa=b;return j|0}if(g){j=1;Pa=b;return j|0}mb(a,g?0:4);if(qc(a,-2,1)|0){j=1;Pa=b;return j|0}hb(a,-2);j=1;Pa=b;return j|0}function uh(a){a=a|0;var b=0;Df(a,1,5);hb(a,2);if(lc(a,1)|0){b=2;return b|0}Db(a);b=1;return b|0}function vh(a){a=a|0;Jh(a,9631,0,139);return 3}function wh(a){a=a|0;var b=0,c=0;Ef(a,1);Db(a);jb(a,1);b=ec(a,(gb(a)|0)+-2|0,-1,0,0,286)|0;if(!(ab(a,1)|0)){hb(a,0);Mb(a,0);Ib(a,9456)|0;c=2;return c|0}else{Mb(a,(b|0)==0&1);kb(a,1);c=gb(a)|0;return c|0}return 0}function xh(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0;b=Pa;Pa=Pa+16|0;d=b;e=b+4|0;f=gb(a)|0;Pb(a,9425);a:do if((f|0)<1)g=c[1368]|0;else{h=c[1368]|0;i=1;while(1){mb(a,-1);mb(a,i);dc(a,1,1,0,0);j=yb(a,-1,e)|0;if(!j)break;if(i>>>0>1)$l(9,h)|0;zm(j,1,c[e>>2]|0,h)|0;hb(a,-2);if((i|0)<(f|0))i=i+1|0;else{g=h;break a}}k=rf(a,9588,d)|0;Pa=b;return k|0}while(0);$l(10,g)|0;fm(g)|0;k=0;Pa=b;return k|0}function yh(a){a=a|0;Ef(a,1);Ef(a,2);Mb(a,sb(a,1,2)|0);return 1}function zh(a){a=a|0;if((nb(a,1)|0|1|0)!=5)qf(a,1,9563)|0;Fb(a,zb(a,1)|0);return 1}function Ah(a){a=a|0;Df(a,1,5);Ef(a,2);hb(a,2);Sb(a,1);return 1}function Bh(a){a=a|0;Df(a,1,5);Ef(a,2);Ef(a,3);hb(a,3);_b(a,1);return 1}function Ch(b){b=b|0;var c=0,d=0,e=0,f=0;c=gb(b)|0;if((nb(b,1)|0)==4?(d=yb(b,1,0)|0,(a[d>>0]|0)==35):0){Fb(b,c+-1|0);e=1;return e|0}d=Hf(b,1)|0;f=(d|0)<0?d+c|0:(d|0)>(c|0)?c:d;if((f|0)<=0)qf(b,1,9544)|0;e=c-f|0;return e|0}function Dh(a){a=a|0;var b=0,c=0,d=0,e=0;b=Pa;Pa=Pa+16|0;c=b;d=nb(a,2)|0;Df(a,1,5);switch(d|0){case 0:case 5:break;default:qf(a,2,10327)|0}if(!(Xf(a,1,9496)|0)){hb(a,2);ac(a,1)|0;e=1;Pa=b;return e|0}else{e=rf(a,9508,c)|0;Pa=b;return e|0}return 0}function Eh(b){b=b|0;var d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0.0,m=0.0,n=0,o=0,p=0.0,q=0.0,r=0;d=Pa;Pa=Pa+16|0;e=d;do if((nb(b,2)|0)>=1){f=Bf(b,1,e)|0;g=f+(c[e>>2]|0)|0;h=Hf(b,2)|0;if((h+-2|0)>>>0>=35)qf(b,2,9471)|0;i=f+(Rm(f,9489)|0)|0;switch(a[i>>0]|0){case 45:{j=1;k=i+1|0;break}case 43:{j=0;k=i+1|0;break}default:{j=0;k=i}}i=a[k>>0]|0;if(cn(i&255)|0){l=+(h|0);m=0.0;f=k;n=i;while(1){i=n&255;if((i+-48|0)>>>0<10)o=(n<<24>>24)+-48|0;else o=($m(i)|0)+-55|0;p=m*l+ +(o|0);i=f+1|0;if((o|0)>=(h|0)){q=m;r=f;break}n=a[i>>0]|0;if(!(cn(n&255)|0)){q=p;r=i;break}else{m=p;f=i}}if((r+(Rm(r,9489)|0)|0)==(g|0)){Eb(b,(j|0)==0?q:-q);Pa=d;return 1}}}else{m=+ub(b,1,e);if(!(c[e>>2]|0)){Ef(b,1);break}Eb(b,m);Pa=d;return 1}while(0);Db(b);Pa=d;return 1}function Fh(a){a=a|0;Ef(a,1);_f(a,1,0)|0;return 1}function Gh(a){a=a|0;Ef(a,1);Ib(a,ob(a,nb(a,1)|0)|0)|0;return 1}function Hh(a){a=a|0;var b=0,c=0,d=0;b=gb(a)|0;if((b|0)<=1)qf(a,2,9441)|0;mb(a,1);lb(a,2,1);kb(a,2);c=ec(a,b+-2|0,-1,1,0,286)|0;if(!(ab(a,1)|0)){hb(a,0);Mb(a,0);Ib(a,9456)|0;d=2;return d|0}else{Mb(a,(c|0)==0&1);kb(a,1);d=gb(a)|0;return d|0}return 0}function Ih(a){a=a|0;var b=0,c=0;b=cc(a,0)|0;if(!(ab(a,1)|0)){hb(a,0);Mb(a,0);Ib(a,9456)|0;c=2;return c|0}else{Mb(a,(b|0)==1&1);kb(a,1);c=gb(a)|0;return c|0}return 0}function Jh(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;if(Xf(a,1,b)|0){mb(a,1);dc(a,1,3,0,0);return}Df(a,1,5);Lb(a,d,0);mb(a,1);if(!c){Db(a);return}else{Fb(a,0);return}}function Kh(a,b,d){a=a|0;b=b|0;d=d|0;var e=0;b=Pa;Pa=Pa+16|0;Cf(a,2,9650);mb(a,1);dc(a,0,1,0,0);if(!(nb(a,-1)|0)){hb(a,-2);c[d>>2]=0;e=0;Pa=b;return e|0}if(!(rb(a,-1)|0))rf(a,9676,b)|0;kb(a,5);e=yb(a,5,d)|0;Pa=b;return e|0}function Lh(a){a=a|0;var b=0,c=0;b=Hf(a,2)|0;Df(a,1,5);c=b+1|0;Fb(a,c);Tb(a,1,c);c=(nb(a,-1)|0)==0;return (c?1:2)|0}function Mh(a){a=a|0;return (gb(a)|0)+-1|0}function Nh(a){a=a|0;Ub(a,0,12);cg(a,1136,0);return 1}function Oh(a){a=a|0;var b=0,c=0,d=0;b=If(a,1)|0;c=Hf(a,2)|0;if((b|0)<0&(c|0)>-1){Gb(a,(c|0)>31?-1:b>>>c|~(-1>>>c));return 1}if((c|0)>0)d=(c|0)>31?0:b>>>c;else d=(c|0)<-31?0:b<<0-c;Gb(a,d);return 1}function Ph(a){a=a|0;var b=0,c=0,d=0,e=0,f=0;b=gb(a)|0;if((b|0)<1)c=-1;else{d=1;e=-1;while(1){f=(If(a,d)|0)&e;if((d|0)==(b|0)){c=f;break}else{d=d+1|0;e=f}}}Gb(a,c);return 1}function Qh(a){a=a|0;Gb(a,~(If(a,1)|0));return 1}function Rh(a){a=a|0;var b=0,c=0,d=0,e=0,f=0;b=gb(a)|0;if((b|0)<1)c=0;else{d=1;e=0;while(1){f=If(a,d)|0|e;if((d|0)==(b|0)){c=f;break}else{d=d+1|0;e=f}}}Gb(a,c);return 1}function Sh(a){a=a|0;var b=0,c=0,d=0,e=0,f=0;b=gb(a)|0;if((b|0)<1)c=0;else{d=1;e=0;while(1){f=(If(a,d)|0)^e;if((d|0)==(b|0)){c=f;break}else{d=d+1|0;e=f}}}Gb(a,c);return 1}function Th(a){a=a|0;var b=0,c=0,d=0,e=0;b=gb(a)|0;if((b|0)<1){c=1;Mb(a,c);return 1}d=1;e=-1;while(1){e=(If(a,d)|0)&e;if((d|0)==(b|0))break;else d=d+1|0}c=(e|0)!=0&1;Mb(a,c);return 1}function Uh(a){a=a|0;var b=0,c=0,d=0,e=0;b=Pa;Pa=Pa+16|0;c=If(a,1)|0;d=Hf(a,2)|0;e=Jf(a,3,1)|0;if((d|0)<=-1)qf(a,2,9912)|0;if((e|0)<=0)qf(a,3,9937)|0;if((e+d|0)>32)rf(a,9960,b)|0;Gb(a,c>>>d&~(-2<<e+-1));Pa=b;return 1}function Vh(a){a=a|0;var b=0,c=0,d=0;b=Hf(a,2)|0;c=If(a,1)|0;d=b&31;Gb(a,c>>>(32-d|0)|c<<d);return 1}function Wh(a){a=a|0;var b=0,c=0,d=0;b=If(a,1)|0;c=Hf(a,2)|0;if((c|0)<0){d=(c|0)<-31?0:b>>>(0-c|0);Gb(a,d);return 1}else{d=(c|0)>31?0:b<<c;Gb(a,d);return 1}return 0}function Xh(a){a=a|0;var b=0,c=0,d=0,e=0,f=0,g=0;b=Pa;Pa=Pa+16|0;c=If(a,1)|0;d=If(a,2)|0;e=Hf(a,3)|0;f=Jf(a,4,1)|0;if((e|0)<=-1)qf(a,3,9912)|0;if((f|0)<=0)qf(a,4,9937)|0;if((f+e|0)>32)rf(a,9960,b)|0;g=~(-2<<f+-1);Gb(a,c&~(g<<e)|(d&g)<<e);Pa=b;return 1}function Yh(a){a=a|0;var b=0,c=0,d=0;b=0-(Hf(a,2)|0)|0;c=If(a,1)|0;d=b&31;Gb(a,c>>>(32-d|0)|c<<d);return 1}function Zh(a){a=a|0;var b=0,c=0,d=0;b=If(a,1)|0;c=Hf(a,2)|0;if((c|0)>0){d=(c|0)>31?0:b>>>c;Gb(a,d);return 1}else{d=(c|0)<-31?0:b<<0-c;Gb(a,d);return 1}return 0}function _h(a){a=a|0;Ub(a,0,6);cg(a,1248,0);return 1}function $h(a){a=a|0;var b=0;Df(a,1,6);b=qe(a)|0;mb(a,1);cb(a,b,1);return 1}function ai(a){a=a|0;var b=0,c=0,d=0;b=Bb(a,1)|0;if(!b)qf(a,1,10120)|0;c=gi(a,b,(gb(a)|0)+-1|0)|0;if((c|0)<0){Mb(a,0);jb(a,-2);d=2;return d|0}else{Mb(a,1);jb(a,~c);d=c+1|0;return d|0}return 0}function bi(a){a=a|0;Mb(a,Ob(a)|0);return 2}function ci(a){a=a|0;var b=0,c=0;b=Pa;Pa=Pa+112|0;c=Bb(a,1)|0;if(!c)qf(a,1,10120)|0;if((c|0)==(a|0)){Hb(a,10009,7)|0;Pa=b;return 1}switch(ic(c)|0){case 1:{Hb(a,10139,9)|0;Pa=b;return 1}case 0:{do if((xc(c,0,b)|0)<=0)if(!(gb(c)|0)){Hb(a,10156,4)|0;break}else{Hb(a,10139,9)|0;break}else Hb(a,10149,6)|0;while(0);Pa=b;return 1}default:{Hb(a,10156,4)|0;Pa=b;return 1}}return 0}function di(a){a=a|0;var b=0;Df(a,1,6);b=qe(a)|0;mb(a,1);cb(a,b,1);Lb(a,287,1);return 1}function ei(a){a=a|0;return Wc(a,gb(a)|0,0,0)|0}function fi(a){a=a|0;var b=0,c=0;b=Bb(a,-1001001)|0;c=gi(a,b,gb(a)|0)|0;if((c|0)>=0)return c|0;if(!(rb(a,-1)|0))kc(a)|0;sf(a,1);jb(a,-2);mc(a,2);kc(a)|0;return 0}function gi(a,b,c){a=a|0;b=b|0;c=c|0;var d=0;if(!(ab(b,c)|0)){Hb(a,10035,28)|0;d=-1;return d|0}if((ic(b)|0)==0?(gb(b)|0)==0:0){Hb(a,10064,28)|0;d=-1;return d|0}cb(a,b,c);if((Sc(b,a,c)|0)>>>0>=2){cb(b,a,1);d=-1;return d|0}c=gb(b)|0;if(!(ab(a,c+1|0)|0)){hb(b,~c);Hb(a,10093,26)|0;d=-1;return d|0}else{cb(b,a,c);d=c;return d|0}return 0}function hi(a){a=a|0;Ub(a,0,16);cg(a,1312,0);return 1}function ii(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0,i=0;b=Pa;Pa=Pa+272|0;d=b+256|0;e=b;f=c[1433]|0;zm(10679,11,1,f)|0;fm(f)|0;g=c[1401]|0;if(!(Zl(e,250,g)|0)){Pa=b;return 0}while(1){if(!(Cl(e,10691)|0)){h=8;break}if(!((Vf(a,e,_l(e)|0,10697,0)|0)==0?!(ec(a,0,0,0,0,0)|0):0)){i=yb(a,-1,0)|0;c[d>>2]=i;al(f,10714,d)|0;fm(f)|0}hb(a,0);zm(10679,11,1,f)|0;fm(f)|0;if(!(Zl(e,250,g)|0)){h=8;break}}if((h|0)==8){Pa=b;return 0}return 0}function ji(a){a=a|0;if((nb(a,1)|0)==7){Wb(a,1);return 1}else{Db(a);return 1}return 0}function ki(b){b=b|0;var c=0,d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0;c=Pa;Pa=Pa+16|0;d=c;if((nb(b,1)|0)==8)e=Bb(b,1)|0;else e=b;f=vc(e)|0;g=uc(e)|0;if((g|0)!=0&(g|0)!=136)Hb(b,10665,13)|0;else{dg(b,-1001e3,10368)|0;Ob(e)|0;cb(e,b,1);Sb(b,-2);ib(b,-2)}if(!(f&1))h=0;else{a[d>>0]=99;h=1}if(!(f&2))i=h;else{a[d+h>>0]=114;i=h+1|0}if(!(f&4)){j=i;k=d+j|0;a[k>>0]=0;Ib(b,d)|0;l=wc(e)|0;Fb(b,l);Pa=c;return 3}a[d+i>>0]=108;j=i+1|0;k=d+j|0;a[k>>0]=0;Ib(b,d)|0;l=wc(e)|0;Fb(b,l);Pa=c;return 3}function li(b){b=b|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0;e=Pa;Pa=Pa+112|0;f=e;g=e+4|0;if((nb(b,1)|0)==8){h=Bb(b,1)|0;i=1}else{h=b;i=0}j=i|2;k=Af(b,j,10501,0)|0;l=i+1|0;do if(qb(b,l)|0)if(!(xc(h,vb(b,l,0)|0,g)|0)){Db(b);m=1;Pa=e;return m|0}else n=k;else{if((nb(b,l)|0)==6){c[f>>2]=k;Kb(b,10508,f)|0;i=yb(b,-1,0)|0;mb(b,l);cb(b,h,1);n=i;break}m=qf(b,l,10512)|0;Pa=e;return m|0}while(0);if(!(Ac(h,n,g)|0)){m=qf(b,j,10979)|0;Pa=e;return m|0}Ub(b,0,2);if(rm(n,83)|0){Ib(b,c[g+16>>2]|0)|0;Zb(b,-2,10539);Ib(b,g+36|0)|0;Zb(b,-2,10546);Fb(b,c[g+24>>2]|0);Zb(b,-2,10556);Fb(b,c[g+28>>2]|0);Zb(b,-2,10568);Ib(b,c[g+12>>2]|0)|0;Zb(b,-2,10584)}if(rm(n,108)|0){Fb(b,c[g+20>>2]|0);Zb(b,-2,10589)}if(rm(n,117)|0){Fb(b,d[g+32>>0]|0);Zb(b,-2,10601);Fb(b,d[g+33>>0]|0);Zb(b,-2,10606);Mb(b,a[g+34>>0]|0);Zb(b,-2,10614)}if(rm(n,110)|0){Ib(b,c[g+4>>2]|0)|0;Zb(b,-2,10623);Ib(b,c[g+8>>2]|0)|0;Zb(b,-2,10628)}if(rm(n,116)|0){Mb(b,a[g+35>>0]|0);Zb(b,-2,10637)}if(rm(n,76)|0){if((h|0)==(b|0)){mb(b,-2);ib(b,-3)}else cb(h,b,1);Zb(b,-2,10648)}if(!(rm(n,102)|0)){m=1;Pa=e;return m|0}if((h|0)==(b|0)){mb(b,-2);ib(b,-3)}else cb(h,b,1);Zb(b,-2,10660);m=1;Pa=e;return m|0}function mi(a){a=a|0;var b=0,c=0,d=0,e=0,f=0,g=0,h=0;b=Pa;Pa=Pa+112|0;c=b;if((nb(a,1)|0)==8){d=Bb(a,1)|0;e=1}else{d=a;e=0}f=Hf(a,e|2)|0;g=e+1|0;if((nb(a,g)|0)==6){mb(a,g);Ib(a,yc(a,0,f)|0)|0;h=1;Pa=b;return h|0}if(!(xc(d,Hf(a,g)|0,c)|0)){h=qf(a,g,10349)|0;Pa=b;return h|0}g=yc(d,c,f)|0;if(!g){Db(a);h=1;Pa=b;return h|0}else{cb(d,a,1);Ib(a,g)|0;mb(a,-2);h=2;Pa=b;return h|0}return 0}function ni(a){a=a|0;mb(a,-1001e3);return 1}function oi(a){a=a|0;Ef(a,1);if(Vb(a,1)|0)return 1;Db(a);return 1}function pi(a){a=a|0;var b=0,c=0,d=0;b=Hf(a,2)|0;Df(a,1,6);c=pc(a,1,b)|0;if(!c){d=0;return d|0}Ib(a,c)|0;jb(a,-2);d=2;return d|0}function qi(a){a=a|0;var b=0,c=0,e=0,f=0;b=Pa;Pa=Pa+112|0;c=b;e=Hf(a,2)|0;Df(a,1,6);mb(a,1);Ac(a,10454,c)|0;if(!((e|0)>0?(e|0)<=(d[c+32>>0]|0|0):0))qf(a,2,10457)|0;f=Hf(a,4)|0;Df(a,3,6);mb(a,3);Ac(a,10454,c)|0;if(!((f|0)>0?(f|0)<=(d[c+32>>0]|0|0):0))qf(a,4,10457)|0;if(pb(a,1)|0)qf(a,1,10479)|0;if(!(pb(a,3)|0)){sc(a,1,e,3,f);Pa=b;return 0}qf(a,3,10479)|0;sc(a,1,e,3,f);Pa=b;return 0}function ri(a){a=a|0;var b=0,c=0,e=0;b=Pa;Pa=Pa+112|0;c=b;e=Hf(a,2)|0;Df(a,1,6);mb(a,1);Ac(a,10454,c)|0;if(!((e|0)>0?(e|0)<=(d[c+32>>0]|0|0):0))qf(a,2,10457)|0;Nb(a,rc(a,1,e)|0);Pa=b;return 1}function si(a){a=a|0;if((nb(a,1)|0)==2)qf(a,1,10411)|0;Df(a,1,7);if((nb(a,2)|0)>=1)Df(a,2,5);hb(a,2);bc(a,1);return 1}function ti(a){a=a|0;var b=0,c=0,d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0;if((nb(a,1)|0)==8){b=Bb(a,1)|0;c=1}else{b=a;c=0}d=c+1|0;if((nb(a,d)|0)<1){hb(a,d);e=0;f=0;g=0}else{h=Bf(a,c|2,0)|0;Df(a,d,6);i=Jf(a,c+3|0,0)|0;c=(rm(h,99)|0)!=0&1;j=(rm(h,114)|0)==0;k=j?c:c|2;c=(rm(h,108)|0)==0;h=c?k:k|4;e=(i|0)>0?h|8:h;f=i;g=136}if(dg(a,-1001e3,10368)|0){Ob(b)|0;cb(b,a,1);mb(a,d);_b(a,-3);tc(b,g,e,f)|0;return 0}Ib(a,10374)|0;Zb(a,-2,10376);mb(a,-1);ac(a,-2)|0;Ob(b)|0;cb(b,a,1);mb(a,d);_b(a,-3);tc(b,g,e,f)|0;return 0}function ui(a){a=a|0;var b=0,c=0,d=0,e=0,f=0,g=0;b=Pa;Pa=Pa+112|0;c=b;if((nb(a,1)|0)==8){d=Bb(a,1)|0;e=1}else{d=a;e=0}f=e+1|0;if(!(xc(d,Hf(a,f)|0,c)|0)){g=qf(a,f,10349)|0;Pa=b;return g|0}else{f=e+3|0;Ef(a,f);hb(a,f);cb(a,d,1);Ib(a,zc(d,c,Hf(a,e|2)|0)|0)|0;g=1;Pa=b;return g|0}return 0}function vi(a){a=a|0;switch(nb(a,2)|0){case 0:case 5:break;default:qf(a,2,10327)|0}hb(a,2);ac(a,1)|0;return 1}function wi(a){a=a|0;var b=0,c=0,d=0;Ef(a,3);b=Hf(a,2)|0;Df(a,1,6);c=qc(a,1,b)|0;if(!c){d=0;return d|0}Ib(a,c)|0;jb(a,-1);d=1;return d|0}function xi(a){a=a|0;var b=0,c=0,d=0,e=0;if((nb(a,1)|0)==8){b=1;c=Bb(a,1)|0}else{b=0;c=a}d=b+1|0;e=yb(a,d,0)|0;if((e|0)==0?(nb(a,d)|0)>=1:0){mb(a,d);return 1}nf(a,c,e,Jf(a,b|2,(c|0)==(a|0)&1)|0);return 1}function yi(a,b){a=a|0;b=b|0;var d=0;dg(a,-1001e3,10368)|0;Ob(a)|0;Sb(a,-2);if((nb(a,-1)|0)!=6)return;Ib(a,c[1456+(c[b>>2]<<2)>>2]|0)|0;d=c[b+20>>2]|0;if((d|0)>-1)Fb(a,d);else Db(a);dc(a,2,0,0,0);return}function zi(a){a=a|0;var b=0,d=0,e=0;Ub(a,0,11);cg(a,1488,0);vf(a,10718)|0;mb(a,-1);Zb(a,-2,13431);cg(a,1584,0);hb(a,-2);b=c[1401]|0;d=oc(a,8)|0;e=d+4|0;c[e>>2]=0;wf(a,10718);c[d>>2]=b;c[e>>2]=288;mb(a,-1);Zb(a,-1001e3,10724);Zb(a,-2,10734);e=c[1368]|0;b=oc(a,8)|0;d=b+4|0;c[d>>2]=0;wf(a,10718);c[b>>2]=e;c[d>>2]=288;mb(a,-1);Zb(a,-1001e3,10740);Zb(a,-2,10751);d=c[1433]|0;e=oc(a,8)|0;b=e+4|0;c[b>>2]=0;wf(a,10718);c[e>>2]=d;c[b>>2]=288;Zb(a,-2,10758);return 1}function Ai(a){a=a|0;var b=0;b=(yf(a,1,10718)|0)+4|0;c[b>>2]=288;Db(a);Hb(a,10765,26)|0;return 2}function Bi(a){a=a|0;var b=0,d=0,e=0;b=Pa;Pa=Pa+16|0;if((nb(a,1)|0)==-1)Rb(a,-1001e3,10740);d=(yf(a,1,10718)|0)+4|0;if(!(c[d>>2]|0))rf(a,10869,b)|0;d=(yf(a,1,10718)|0)+4|0;e=c[d>>2]|0;c[d>>2]=0;d=Ta[e&511](a)|0;Pa=b;return d|0}function Ci(a){a=a|0;var b=0,d=0,e=0;b=Pa;Pa=Pa+16|0;d=yf(a,1,10718)|0;if(!(c[d+4>>2]|0))rf(a,10869,b)|0;e=tf(a,(fm(c[d>>2]|0)|0)==0&1,0)|0;Pa=b;return e|0}function Di(a){a=a|0;var b=0,d=0;b=Pa;Pa=Pa+16|0;d=(yf(a,1,10718)|0)+4|0;if(!(c[d>>2]|0))rf(a,10869,b)|0;Ni(a,0);Pa=b;return 1}function Ei(a){a=a|0;var b=0,d=0,e=0;b=Pa;Pa=Pa+16|0;d=yf(a,1,10718)|0;if(!(c[d+4>>2]|0))rf(a,10869,b)|0;e=Li(a,c[d>>2]|0,2)|0;Pa=b;return e|0}function Fi(a){a=a|0;var b=0,d=0,e=0,f=0.0,g=0,h=0;b=Pa;Pa=Pa+16|0;d=yf(a,1,10718)|0;if(!(c[d+4>>2]|0))rf(a,10869,b)|0;e=c[d>>2]|0;d=zf(a,2,10917,1680)|0;f=+Gf(a,3,0.0);g=~~f;if(!(f==+(g|0)))qf(a,3,10921)|0;if(!(om(e,g,c[5460+(d<<2)>>2]|0)|0)){Eb(a,+(km(e)|0));h=1;Pa=b;return h|0}else{h=tf(a,0,0)|0;Pa=b;return h|0}return 0}function Gi(a){a=a|0;var b=0,d=0,e=0,f=0,g=0;b=Pa;Pa=Pa+16|0;d=yf(a,1,10718)|0;if(!(c[d+4>>2]|0))rf(a,10869,b)|0;e=c[d>>2]|0;d=zf(a,2,0,1664)|0;f=Jf(a,3,1024)|0;g=tf(a,(am(e,0,c[5448+(d<<2)>>2]|0,f)|0)==0&1,0)|0;Pa=b;return g|0}function Hi(a){a=a|0;var b=0,d=0,e=0;b=Pa;Pa=Pa+16|0;d=yf(a,1,10718)|0;if(!(c[d+4>>2]|0))rf(a,10869,b)|0;e=c[d>>2]|0;mb(a,1);d=Ki(a,e,2)|0;Pa=b;return d|0}function Ii(a){a=a|0;var b=0,d=0;b=yf(a,1,10718)|0;if(!(c[b+4>>2]|0))return 0;if(!(c[b>>2]|0))return 0;b=(yf(a,1,10718)|0)+4|0;d=c[b>>2]|0;c[b>>2]=0;Ta[d&511](a)|0;return 0}function Ji(a){a=a|0;var b=0,d=0,e=0;b=Pa;Pa=Pa+16|0;d=b;e=yf(a,1,10718)|0;if(!(c[e+4>>2]|0)){Hb(a,10845,13)|0;Pa=b;return 1}else{c[d>>2]=c[e>>2];Kb(a,10859,d)|0;Pa=b;return 1}return 0}function Ki(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0.0,o=0,p=0;e=Pa;Pa=Pa+16|0;f=e;h=e+8|0;i=(gb(a)|0)-d|0;if(!i){j=1;Pa=e;return j|0}k=1;l=d;d=i;while(1){d=d+-1|0;if((nb(a,l)|0)==3)if(!k)m=0;else{n=+ub(a,l,0);g[f>>3]=n;m=(al(b,10898,f)|0)>0}else{i=Bf(a,l,h)|0;if(!k)o=0;else{p=zm(i,1,c[h>>2]|0,b)|0;o=(p|0)==(c[h>>2]|0)}m=o}if(!d)break;else{k=m&1;l=l+1|0}}if(m){j=1;Pa=e;return j|0}j=tf(a,0,0)|0;Pa=e;return j|0}
function Ya(a){a=a|0;var b=0;b=Pa;Pa=Pa+a|0;Pa=Pa+15&-16;return b|0}function Za(){return Pa|0}function _a(a){a=a|0;Pa=a}function $a(a,b){a=a|0;b=b|0;Pa=a;Qa=b}function ab(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0;d=Pa;Pa=Pa+16|0;e=d;c[e>>2]=b;f=c[a+16>>2]|0;g=a+8|0;h=c[g>>2]|0;do if(((c[a+24>>2]|0)-h>>4|0)<=(b|0)){if(((h-(c[a+28>>2]|0)>>4)+5|0)>(1e6-b|0)){i=0;Pa=d;return i|0}if(!(Kc(a,129,e)|0)){j=c[g>>2]|0;k=c[e>>2]|0;break}else{i=0;Pa=d;return i|0}}else{j=h;k=b}while(0);b=f+4|0;f=j+(k<<4)|0;if((c[b>>2]|0)>>>0>=f>>>0){i=1;Pa=d;return i|0}c[b>>2]=f;i=1;Pa=d;return i|0}function bb(a,b){a=a|0;b=b|0;Mc(a,c[b>>2]|0);return}function cb(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0;if((a|0)==(b|0))return;e=a+8|0;a=c[e>>2]|0;f=0-d|0;g=a+(f<<4)|0;c[e>>2]=g;if((d|0)<=0)return;h=b+8|0;b=c[h>>2]|0;c[h>>2]=b+16;i=g;g=c[i+4>>2]|0;j=b;c[j>>2]=c[i>>2];c[j+4>>2]=g;c[b+8>>2]=c[a+(f<<4)+8>>2];if((d|0)==1)return;f=1;do{a=c[e>>2]|0;b=c[h>>2]|0;c[h>>2]=b+16;g=a+(f<<4)|0;j=c[g+4>>2]|0;i=b;c[i>>2]=c[g>>2];c[i+4>>2]=j;c[b+8>>2]=c[a+(f<<4)+8>>2];f=f+1|0}while((f|0)!=(d|0));return}function db(a,b){a=a|0;b=b|0;var d=0;d=(c[a+12>>2]|0)+168|0;a=c[d>>2]|0;c[d>>2]=b;return a|0}function eb(a){a=a|0;var b=0;if(!a){b=5440;return b|0}b=c[(c[a+12>>2]|0)+176>>2]|0;return b|0}function fb(a,b){a=a|0;b=b|0;var d=0;if((b+1000999|0)>>>0>1000999){d=b;return d|0}d=((c[a+8>>2]|0)-(c[c[a+16>>2]>>2]|0)>>4)+b|0;return d|0}function gb(a){a=a|0;return (c[a+8>>2]|0)-((c[c[a+16>>2]>>2]|0)+16)>>4|0}function hb(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0;if((b|0)<=-1){d=a+8|0;c[d>>2]=(c[d>>2]|0)+(b+1<<4);return}d=c[c[a+16>>2]>>2]|0;e=a+8|0;a=c[e>>2]|0;f=d+16+(b<<4)|0;if(a>>>0<f>>>0){g=((d+(b<<4)+8+4+(3-a)|0)>>>4)+1|0;b=a;do{c[b+8>>2]=0;b=b+16|0}while(b>>>0<f>>>0);c[e>>2]=a+(g<<4)}c[e>>2]=f;return}function ib(a,b){a=a|0;b=b|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0;e=c[a+16>>2]|0;do if((b|0)<=0){if((b|0)>=-1000999){f=(c[a+8>>2]|0)+(b<<4)|0;break}if((b|0)==-1001e3){f=(c[a+12>>2]|0)+40|0;break}g=-1001e3-b|0;h=c[e>>2]|0;if((c[h+8>>2]|0)==22)f=15792;else{i=c[h>>2]|0;f=(g|0)>(d[i+6>>0]|0|0)?15792:i+16+(g+-1<<4)|0}}else{g=(c[e>>2]|0)+(b<<4)|0;f=g>>>0<(c[a+8>>2]|0)>>>0?g:15792}while(0);b=f+16|0;e=a+8|0;a=c[e>>2]|0;if(b>>>0>=a>>>0){j=a;k=j+-16|0;c[e>>2]=k;return}a=f;f=b;while(1){b=f;g=c[b+4>>2]|0;i=a;c[i>>2]=c[b>>2];c[i+4>>2]=g;c[a+8>>2]=c[a+24>>2];g=f+16|0;i=c[e>>2]|0;if(g>>>0<i>>>0){b=f;f=g;a=b}else{j=i;break}}k=j+-16|0;c[e>>2]=k;return}function jb(a,b){a=a|0;b=b|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0;e=c[a+16>>2]|0;do if((b|0)<=0){if((b|0)>=-1000999){f=(c[a+8>>2]|0)+(b<<4)|0;break}if((b|0)==-1001e3){f=(c[a+12>>2]|0)+40|0;break}g=-1001e3-b|0;h=c[e>>2]|0;if((c[h+8>>2]|0)==22)f=15792;else{i=c[h>>2]|0;f=(g|0)>(d[i+6>>0]|0|0)?15792:i+16+(g+-1<<4)|0}}else{g=(c[e>>2]|0)+(b<<4)|0;f=g>>>0<(c[a+8>>2]|0)>>>0?g:15792}while(0);b=a+8|0;a=c[b>>2]|0;if(a>>>0>f>>>0){e=a;do{g=e;e=e+-16|0;i=e;h=c[i+4>>2]|0;j=g;c[j>>2]=c[i>>2];c[j+4>>2]=h;c[g+8>>2]=c[g+-8>>2]}while(e>>>0>f>>>0);k=c[b>>2]|0}else k=a;a=k;b=c[a+4>>2]|0;e=f;c[e>>2]=c[a>>2];c[e+4>>2]=b;c[f+8>>2]=c[k+8>>2];return}function kb(b,e){b=b|0;e=e|0;var f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0;f=b+8|0;g=c[f>>2]|0;h=g+-16|0;i=b+16|0;j=c[i>>2]|0;do if((e|0)<=0){if((e|0)>=-1000999){k=g+(e<<4)|0;break}if((e|0)==-1001e3){k=(c[b+12>>2]|0)+40|0;break}l=-1001e3-e|0;m=c[j>>2]|0;if((c[m+8>>2]|0)==22)k=15792;else{n=c[m>>2]|0;k=(l|0)>(d[n+6>>0]|0|0)?15792:n+16+(l+-1<<4)|0}}else{l=(c[j>>2]|0)+(e<<4)|0;k=l>>>0<g>>>0?l:15792}while(0);j=h;l=c[j+4>>2]|0;n=k;c[n>>2]=c[j>>2];c[n+4>>2]=l;l=g+-8|0;c[k+8>>2]=c[l>>2];if((((e|0)<-1001e3?c[l>>2]&64|0:0)?(l=c[h>>2]|0,a[l+5>>0]&3):0)?(h=c[c[c[i>>2]>>2]>>2]|0,a[h+5>>0]&4):0)jd(b,h,l);c[f>>2]=(c[f>>2]|0)+-16;return}function lb(b,e,f){b=b|0;e=e|0;f=f|0;var g=0,h=0,i=0,j=0,k=0,l=0,m=0;g=b+16|0;h=c[g>>2]|0;do if((e|0)<=0){if((e|0)>=-1000999){i=(c[b+8>>2]|0)+(e<<4)|0;break}if((e|0)==-1001e3){i=(c[b+12>>2]|0)+40|0;break}j=-1001e3-e|0;k=c[h>>2]|0;if((c[k+8>>2]|0)==22)i=15792;else{l=c[k>>2]|0;i=(j|0)>(d[l+6>>0]|0|0)?15792:l+16+(j+-1<<4)|0}}else{j=(c[h>>2]|0)+(e<<4)|0;i=j>>>0<(c[b+8>>2]|0)>>>0?j:15792}while(0);do if((f|0)<=0){if((f|0)>=-1000999){m=(c[b+8>>2]|0)+(f<<4)|0;break}if((f|0)==-1001e3){m=(c[b+12>>2]|0)+40|0;break}e=-1001e3-f|0;j=c[h>>2]|0;if((c[j+8>>2]|0)==22)m=15792;else{l=c[j>>2]|0;m=(e|0)>(d[l+6>>0]|0|0)?15792:l+16+(e+-1<<4)|0}}else{e=(c[h>>2]|0)+(f<<4)|0;m=e>>>0<(c[b+8>>2]|0)>>>0?e:15792}while(0);h=i;e=c[h+4>>2]|0;l=m;c[l>>2]=c[h>>2];c[l+4>>2]=e;e=i+8|0;c[m+8>>2]=c[e>>2];if((f|0)>=-1001e3)return;if(!(c[e>>2]&64))return;e=c[i>>2]|0;if(!(a[e+5>>0]&3))return;i=c[c[c[g>>2]>>2]>>2]|0;if(!(a[i+5>>0]&4))return;jd(b,i,e);return}function mb(a,b){a=a|0;b=b|0;var e=0,f=0,g=0,h=0,i=0;e=c[a+16>>2]|0;do if((b|0)<=0){if((b|0)>=-1000999){f=(c[a+8>>2]|0)+(b<<4)|0;break}if((b|0)==-1001e3){f=(c[a+12>>2]|0)+40|0;break}g=-1001e3-b|0;h=c[e>>2]|0;if((c[h+8>>2]|0)==22)f=15792;else{i=c[h>>2]|0;f=(g|0)>(d[i+6>>0]|0|0)?15792:i+16+(g+-1<<4)|0}}else{g=(c[e>>2]|0)+(b<<4)|0;f=g>>>0<(c[a+8>>2]|0)>>>0?g:15792}while(0);b=a+8|0;a=c[b>>2]|0;e=f;g=c[e+4>>2]|0;i=a;c[i>>2]=c[e>>2];c[i+4>>2]=g;c[a+8>>2]=c[f+8>>2];c[b>>2]=(c[b>>2]|0)+16;return}function nb(a,b){a=a|0;b=b|0;var e=0,f=0,g=0,h=0,i=0,j=0;e=c[a+16>>2]|0;do if((b|0)>0){f=(c[e>>2]|0)+(b<<4)|0;if(f>>>0<(c[a+8>>2]|0)>>>0)g=f;else{h=-1;return h|0}}else{if((b|0)>=-1000999){g=(c[a+8>>2]|0)+(b<<4)|0;break}if((b|0)==-1001e3){g=(c[a+12>>2]|0)+40|0;break}f=-1001e3-b|0;i=c[e>>2]|0;if((c[i+8>>2]|0)==22){h=-1;return h|0}j=c[i>>2]|0;if((f|0)>(d[j+6>>0]|0|0)){h=-1;return h|0}else g=j+16+(f+-1<<4)|0}while(0);if((g|0)==15792){h=-1;return h|0}h=c[g+8>>2]&15;return h|0}function ob(a,b){a=a|0;b=b|0;return c[352+(b+1<<2)>>2]|0}function pb(a,b){a=a|0;b=b|0;var e=0,f=0,g=0,h=0,i=0;e=c[a+16>>2]|0;do if((b|0)<=0){if((b|0)>=-1000999){f=(c[a+8>>2]|0)+(b<<4)|0;break}if((b|0)==-1001e3){f=(c[a+12>>2]|0)+40|0;break}g=-1001e3-b|0;h=c[e>>2]|0;if((c[h+8>>2]|0)==22)f=15792;else{i=c[h>>2]|0;f=(g|0)>(d[i+6>>0]|0|0)?15792:i+16+(g+-1<<4)|0}}else{g=(c[e>>2]|0)+(b<<4)|0;f=g>>>0<(c[a+8>>2]|0)>>>0?g:15792}while(0);a=c[f+8>>2]|0;return ((a|0)==22|(a|0)==102)&1|0}function qb(a,b){a=a|0;b=b|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0;e=Pa;Pa=Pa+16|0;f=e;g=c[a+16>>2]|0;do if((b|0)<=0){if((b|0)>=-1000999){h=(c[a+8>>2]|0)+(b<<4)|0;break}if((b|0)==-1001e3){h=(c[a+12>>2]|0)+40|0;break}i=-1001e3-b|0;j=c[g>>2]|0;if((c[j+8>>2]|0)==22)h=15792;else{k=c[j>>2]|0;h=(i|0)>(d[k+6>>0]|0|0)?15792:k+16+(i+-1<<4)|0}}else{i=(c[g>>2]|0)+(b<<4)|0;h=i>>>0<(c[a+8>>2]|0)>>>0?i:15792}while(0);if((c[h+8>>2]|0)==3){l=1;Pa=e;return l|0}l=(Ye(h,f)|0)!=0&1;Pa=e;return l|0}function rb(a,b){a=a|0;b=b|0;var e=0,f=0,g=0,h=0,i=0,j=0;e=c[a+16>>2]|0;do if((b|0)>0){f=(c[e>>2]|0)+(b<<4)|0;if(f>>>0<(c[a+8>>2]|0)>>>0)g=f;else{h=0;return h|0}}else{if((b|0)>=-1000999){g=(c[a+8>>2]|0)+(b<<4)|0;break}if((b|0)==-1001e3){g=(c[a+12>>2]|0)+40|0;break}f=-1001e3-b|0;i=c[e>>2]|0;if((c[i+8>>2]|0)==22){h=0;return h|0}j=c[i>>2]|0;if((f|0)>(d[j+6>>0]|0|0)){h=0;return h|0}else g=j+16+(f+-1<<4)|0}while(0);if((g|0)==15792){h=0;return h|0}h=((c[g+8>>2]&15)+-3|0)>>>0<2&1;return h|0}function sb(a,b,e){a=a|0;b=b|0;e=e|0;var f=0,g=0,h=0,i=0,j=0,k=0,l=0;f=c[a+16>>2]|0;do if((b|0)<=0){if((b|0)>=-1000999){g=(c[a+8>>2]|0)+(b<<4)|0;break}if((b|0)==-1001e3){g=(c[a+12>>2]|0)+40|0;break}h=-1001e3-b|0;i=c[f>>2]|0;if((c[i+8>>2]|0)==22)g=15792;else{j=c[i>>2]|0;g=(h|0)>(d[j+6>>0]|0|0)?15792:j+16+(h+-1<<4)|0}}else{h=(c[f>>2]|0)+(b<<4)|0;g=h>>>0<(c[a+8>>2]|0)>>>0?h:15792}while(0);do if((e|0)<=0){if((e|0)>=-1000999){k=(c[a+8>>2]|0)+(e<<4)|0;break}if((e|0)==-1001e3){k=(c[a+12>>2]|0)+40|0;break}b=-1001e3-e|0;h=c[f>>2]|0;if((c[h+8>>2]|0)==22){l=0;return l|0}else{j=c[h>>2]|0;k=(b|0)>(d[j+6>>0]|0|0)?15792:j+16+(b+-1<<4)|0;break}}else{b=(c[f>>2]|0)+(e<<4)|0;k=b>>>0<(c[a+8>>2]|0)>>>0?b:15792}while(0);if(!((g|0)!=15792&(k|0)!=15792)){l=0;return l|0}if((c[g+8>>2]|0)!=(c[k+8>>2]|0)){l=0;return l|0}l=(cf(0,g,k)|0)!=0&1;return l|0}function tb(a,b,e,f){a=a|0;b=b|0;e=e|0;f=f|0;var g=0,h=0,i=0,j=0,k=0,l=0,m=0;g=c[a+16>>2]|0;do if((b|0)<=0){if((b|0)>=-1000999){h=(c[a+8>>2]|0)+(b<<4)|0;break}if((b|0)==-1001e3){h=(c[a+12>>2]|0)+40|0;break}i=-1001e3-b|0;j=c[g>>2]|0;if((c[j+8>>2]|0)==22)h=15792;else{k=c[j>>2]|0;h=(i|0)>(d[k+6>>0]|0|0)?15792:k+16+(i+-1<<4)|0}}else{i=(c[g>>2]|0)+(b<<4)|0;h=i>>>0<(c[a+8>>2]|0)>>>0?i:15792}while(0);do if((e|0)<=0){if((e|0)>=-1000999){l=(c[a+8>>2]|0)+(e<<4)|0;break}if((e|0)==-1001e3){l=(c[a+12>>2]|0)+40|0;break}b=-1001e3-e|0;i=c[g>>2]|0;if((c[i+8>>2]|0)==22){m=0;return m|0}else{k=c[i>>2]|0;l=(b|0)>(d[k+6>>0]|0|0)?15792:k+16+(b+-1<<4)|0;break}}else{b=(c[g>>2]|0)+(e<<4)|0;l=b>>>0<(c[a+8>>2]|0)>>>0?b:15792}while(0);if(!((h|0)!=15792&(l|0)!=15792)){m=0;return m|0}switch(f|0){case 0:{if((c[h+8>>2]|0)!=(c[l+8>>2]|0)){m=0;return m|0}m=(cf(a,h,l)|0)!=0&1;return m|0}case 1:{m=af(a,h,l)|0;return m|0}case 2:{m=bf(a,h,l)|0;return m|0}default:{m=0;return m|0}}return 0}function ub(a,b,e){a=a|0;b=b|0;e=e|0;var f=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0.0,o=0;f=Pa;Pa=Pa+16|0;h=f;i=c[a+16>>2]|0;do if((b|0)<=0){if((b|0)>=-1000999){j=(c[a+8>>2]|0)+(b<<4)|0;break}if((b|0)==-1001e3){j=(c[a+12>>2]|0)+40|0;break}k=-1001e3-b|0;l=c[i>>2]|0;if((c[l+8>>2]|0)==22)j=15792;else{m=c[l>>2]|0;j=(k|0)>(d[m+6>>0]|0|0)?15792:m+16+(k+-1<<4)|0}}else{k=(c[i>>2]|0)+(b<<4)|0;j=k>>>0<(c[a+8>>2]|0)>>>0?k:15792}while(0);if((c[j+8>>2]|0)!=3){a=Ye(j,h)|0;if(!a){if(!e){n=0.0;Pa=f;return +n}c[e>>2]=0;n=0.0;Pa=f;return +n}else o=a}else o=j;if(e|0)c[e>>2]=1;n=+g[o>>3];Pa=f;return +n}function vb(a,b,e){a=a|0;b=b|0;e=e|0;var f=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0;f=Pa;Pa=Pa+16|0;h=f;i=c[a+16>>2]|0;do if((b|0)<=0){if((b|0)>=-1000999){j=(c[a+8>>2]|0)+(b<<4)|0;break}if((b|0)==-1001e3){j=(c[a+12>>2]|0)+40|0;break}k=-1001e3-b|0;l=c[i>>2]|0;if((c[l+8>>2]|0)==22)j=15792;else{m=c[l>>2]|0;j=(k|0)>(d[m+6>>0]|0|0)?15792:m+16+(k+-1<<4)|0}}else{k=(c[i>>2]|0)+(b<<4)|0;j=k>>>0<(c[a+8>>2]|0)>>>0?k:15792}while(0);if((c[j+8>>2]|0)!=3){a=Ye(j,h)|0;if(!a){if(!e){n=0;Pa=f;return n|0}c[e>>2]=0;n=0;Pa=f;return n|0}else o=a}else o=j;j=~~+g[o>>3];if(!e){n=j;Pa=f;return n|0}c[e>>2]=1;n=j;Pa=f;return n|0}function wb(a,b,e){a=a|0;b=b|0;e=e|0;var f=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0;f=Pa;Pa=Pa+32|0;h=f+8|0;i=f;j=c[a+16>>2]|0;do if((b|0)<=0){if((b|0)>=-1000999){k=(c[a+8>>2]|0)+(b<<4)|0;break}if((b|0)==-1001e3){k=(c[a+12>>2]|0)+40|0;break}l=-1001e3-b|0;m=c[j>>2]|0;if((c[m+8>>2]|0)==22)k=15792;else{n=c[m>>2]|0;k=(l|0)>(d[n+6>>0]|0|0)?15792:n+16+(l+-1<<4)|0}}else{l=(c[j>>2]|0)+(b<<4)|0;k=l>>>0<(c[a+8>>2]|0)>>>0?l:15792}while(0);if((c[k+8>>2]|0)!=3){a=Ye(k,h)|0;if(!a){if(!e){o=0;Pa=f;return o|0}c[e>>2]=0;o=0;Pa=f;return o|0}else p=a}else p=k;g[i>>3]=+g[p>>3]+6755399441055744.0;p=c[i>>2]|0;if(!e){o=p;Pa=f;return o|0}c[e>>2]=1;o=p;Pa=f;return o|0}function xb(a,b){a=a|0;b=b|0;var e=0,f=0,g=0,h=0,i=0,j=0;e=c[a+16>>2]|0;do if((b|0)<=0){if((b|0)>=-1000999){f=(c[a+8>>2]|0)+(b<<4)|0;break}if((b|0)==-1001e3){f=(c[a+12>>2]|0)+40|0;break}g=-1001e3-b|0;h=c[e>>2]|0;if((c[h+8>>2]|0)==22)f=15792;else{i=c[h>>2]|0;f=(g|0)>(d[i+6>>0]|0|0)?15792:i+16+(g+-1<<4)|0}}else{g=(c[e>>2]|0)+(b<<4)|0;f=g>>>0<(c[a+8>>2]|0)>>>0?g:15792}while(0);a=c[f+8>>2]|0;switch(a|0){case 1:{j=(c[f>>2]|0)!=0&1;return j|0}case 0:{j=a;return j|0}default:{j=1;return j|0}}return 0}function yb(a,b,e){a=a|0;b=b|0;e=e|0;var f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0;f=a+16|0;g=c[f>>2]|0;h=(b|0)>0;do if(!h){if((b|0)>=-1000999){i=(c[a+8>>2]|0)+(b<<4)|0;break}if((b|0)==-1001e3){i=(c[a+12>>2]|0)+40|0;break}j=-1001e3-b|0;k=c[g>>2]|0;if((c[k+8>>2]|0)==22)i=15792;else{l=c[k>>2]|0;i=(j|0)>(d[l+6>>0]|0|0)?15792:l+16+(j+-1<<4)|0}}else{j=(c[g>>2]|0)+(b<<4)|0;i=j>>>0<(c[a+8>>2]|0)>>>0?j:15792}while(0);do if((c[i+8>>2]&15|0)!=4){if(!(Ze(a,i)|0)){if(!e){m=0;return m|0}c[e>>2]=0;m=0;return m|0}g=a+12|0;if((c[(c[g>>2]|0)+12>>2]|0)>0)Ed(a);j=c[f>>2]|0;if(h){l=(c[j>>2]|0)+(b<<4)|0;n=l>>>0<(c[a+8>>2]|0)>>>0?l:15792;break}if((b|0)>=-1000999){n=(c[a+8>>2]|0)+(b<<4)|0;break}if((b|0)==-1001e3){n=(c[g>>2]|0)+40|0;break}g=-1001e3-b|0;l=c[j>>2]|0;if((c[l+8>>2]|0)==22)n=15792;else{j=c[l>>2]|0;n=(g|0)>(d[j+6>>0]|0|0)?15792:j+16+(g+-1<<4)|0}}else n=i;while(0);if(e|0)c[e>>2]=c[(c[n>>2]|0)+12>>2];m=(c[n>>2]|0)+16|0;return m|0}function zb(a,b){a=a|0;b=b|0;var e=0,f=0,g=0,h=0,i=0,j=0;e=c[a+16>>2]|0;do if((b|0)<=0){if((b|0)>=-1000999){f=(c[a+8>>2]|0)+(b<<4)|0;break}if((b|0)==-1001e3){f=(c[a+12>>2]|0)+40|0;break}g=-1001e3-b|0;h=c[e>>2]|0;if((c[h+8>>2]|0)==22)f=15792;else{i=c[h>>2]|0;f=(g|0)>(d[i+6>>0]|0|0)?15792:i+16+(g+-1<<4)|0}}else{g=(c[e>>2]|0)+(b<<4)|0;f=g>>>0<(c[a+8>>2]|0)>>>0?g:15792}while(0);switch(c[f+8>>2]&15){case 4:{j=c[(c[f>>2]|0)+12>>2]|0;return j|0}case 7:{j=c[(c[f>>2]|0)+16>>2]|0;return j|0}case 5:{j=Pe(c[f>>2]|0)|0;return j|0}default:{j=0;return j|0}}return 0}function Ab(a,b){a=a|0;b=b|0;var e=0,f=0,g=0,h=0,i=0,j=0;e=c[a+16>>2]|0;do if((b|0)<=0){if((b|0)>=-1000999){f=(c[a+8>>2]|0)+(b<<4)|0;break}if((b|0)==-1001e3){f=(c[a+12>>2]|0)+40|0;break}g=-1001e3-b|0;h=c[e>>2]|0;if((c[h+8>>2]|0)==22)f=15792;else{i=c[h>>2]|0;f=(g|0)>(d[i+6>>0]|0|0)?15792:i+16+(g+-1<<4)|0}}else{g=(c[e>>2]|0)+(b<<4)|0;f=g>>>0<(c[a+8>>2]|0)>>>0?g:15792}while(0);switch(c[f+8>>2]&15){case 7:{j=(c[f>>2]|0)+24|0;return j|0}case 2:{j=c[f>>2]|0;return j|0}default:{j=0;return j|0}}return 0}function Bb(a,b){a=a|0;b=b|0;var e=0,f=0,g=0,h=0,i=0,j=0;e=c[a+16>>2]|0;do if((b|0)<=0){if((b|0)>=-1000999){f=(c[a+8>>2]|0)+(b<<4)|0;break}if((b|0)==-1001e3){f=(c[a+12>>2]|0)+40|0;break}g=-1001e3-b|0;h=c[e>>2]|0;if((c[h+8>>2]|0)==22)f=15792;else{i=c[h>>2]|0;f=(g|0)>(d[i+6>>0]|0|0)?15792:i+16+(g+-1<<4)|0}}else{g=(c[e>>2]|0)+(b<<4)|0;f=g>>>0<(c[a+8>>2]|0)>>>0?g:15792}while(0);if((c[f+8>>2]|0)!=72){j=0;return j|0}j=c[f>>2]|0;return j|0}function Cb(a,b){a=a|0;b=b|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0;e=c[a+16>>2]|0;f=(b|0)>0;do if(!f){if((b|0)>=-1000999){g=(c[a+8>>2]|0)+(b<<4)|0;break}if((b|0)==-1001e3){g=(c[a+12>>2]|0)+40|0;break}h=-1001e3-b|0;i=c[e>>2]|0;if((c[i+8>>2]|0)==22)g=15792;else{j=c[i>>2]|0;g=(h|0)>(d[j+6>>0]|0|0)?15792:j+16+(h+-1<<4)|0}}else{h=(c[e>>2]|0)+(b<<4)|0;g=h>>>0<(c[a+8>>2]|0)>>>0?h:15792}while(0);switch(c[g+8>>2]&63){case 5:{k=c[g>>2]|0;return k|0}case 6:{k=c[g>>2]|0;return k|0}case 38:{k=c[g>>2]|0;return k|0}case 22:{k=c[g>>2]|0;return k|0}case 8:{k=c[g>>2]|0;return k|0}case 2:case 7:{do if(!f){if((b|0)>=-1000999){l=(c[a+8>>2]|0)+(b<<4)|0;break}if((b|0)==-1001e3){l=(c[a+12>>2]|0)+40|0;break}g=-1001e3-b|0;h=c[e>>2]|0;if((c[h+8>>2]|0)==22)l=15792;else{j=c[h>>2]|0;l=(g|0)>(d[j+6>>0]|0|0)?15792:j+16+(g+-1<<4)|0}}else{g=(c[e>>2]|0)+(b<<4)|0;l=g>>>0<(c[a+8>>2]|0)>>>0?g:15792}while(0);switch(c[l+8>>2]&15){case 7:{k=(c[l>>2]|0)+24|0;return k|0}case 2:{k=c[l>>2]|0;return k|0}default:{k=0;return k|0}}break}default:{k=0;return k|0}}return 0}function Db(a){a=a|0;var b=0;b=a+8|0;a=c[b>>2]|0;c[a+8>>2]=0;c[b>>2]=a+16;return}function Eb(a,b){a=a|0;b=+b;var d=0;d=a+8|0;a=c[d>>2]|0;g[a>>3]=b;c[a+8>>2]=3;c[d>>2]=(c[d>>2]|0)+16;return}function Fb(a,b){a=a|0;b=b|0;var d=0;d=a+8|0;a=c[d>>2]|0;g[a>>3]=+(b|0);c[a+8>>2]=3;c[d>>2]=(c[d>>2]|0)+16;return}function Gb(a,b){a=a|0;b=b|0;var d=0;d=a+8|0;a=c[d>>2]|0;g[a>>3]=(b|0)>-1?+(b|0):+(b>>>0);c[a+8>>2]=3;c[d>>2]=(c[d>>2]|0)+16;return}function Hb(b,d,e){b=b|0;d=d|0;e=e|0;var f=0;if((c[(c[b+12>>2]|0)+12>>2]|0)>0)Ed(b);f=Ae(b,d,e)|0;e=b+8|0;b=c[e>>2]|0;c[b>>2]=f;c[b+8>>2]=(a[f+4>>0]|64)&255;c[e>>2]=(c[e>>2]|0)+16;return f+16|0}function Ib(b,d){b=b|0;d=d|0;var e=0,f=0,g=0;if(!d){e=b+8|0;f=c[e>>2]|0;c[f+8>>2]=0;c[e>>2]=f+16;g=0;return g|0}if((c[(c[b+12>>2]|0)+12>>2]|0)>0)Ed(b);f=Be(b,d)|0;d=b+8|0;b=c[d>>2]|0;c[b>>2]=f;c[b+8>>2]=(a[f+4>>0]|64)&255;c[d>>2]=(c[d>>2]|0)+16;g=f+16|0;return g|0}function Jb(a,b,d){a=a|0;b=b|0;d=d|0;if((c[(c[a+12>>2]|0)+12>>2]|0)>0)Ed(a);return Od(a,b,d)|0}function Kb(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0;e=Pa;Pa=Pa+16|0;f=e;if((c[(c[a+12>>2]|0)+12>>2]|0)>0)Ed(a);c[f>>2]=d;d=Od(a,b,f)|0;Pa=e;return d|0}function Lb(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0;if(!d){e=a+8|0;f=c[e>>2]|0;c[f>>2]=b;g=e;h=22;i=f;j=i+8|0;c[j>>2]=h;k=c[g>>2]|0;l=k+16|0;c[g>>2]=l;return}if((c[(c[a+12>>2]|0)+12>>2]|0)>0)Ed(a);f=ad(a,d)|0;c[f+12>>2]=b;b=a+8|0;a=(c[b>>2]|0)+(0-d<<4)|0;c[b>>2]=a;e=d;d=a;do{e=e+-1|0;a=d+(e<<4)|0;m=c[a+4>>2]|0;n=f+16+(e<<4)|0;c[n>>2]=c[a>>2];c[n+4>>2]=m;c[f+16+(e<<4)+8>>2]=c[d+(e<<4)+8>>2];d=c[b>>2]|0}while((e|0)!=0);c[d>>2]=f;g=b;h=102;i=d;j=i+8|0;c[j>>2]=h;k=c[g>>2]|0;l=k+16|0;c[g>>2]=l;return}function Mb(a,b){a=a|0;b=b|0;var d=0;d=a+8|0;a=c[d>>2]|0;c[a>>2]=(b|0)!=0&1;c[a+8>>2]=1;c[d>>2]=(c[d>>2]|0)+16;return}function Nb(a,b){a=a|0;b=b|0;var d=0;d=a+8|0;a=c[d>>2]|0;c[a>>2]=b;c[a+8>>2]=2;c[d>>2]=(c[d>>2]|0)+16;return}function Ob(a){a=a|0;var b=0,d=0;b=a+8|0;d=c[b>>2]|0;c[d>>2]=a;c[d+8>>2]=72;c[b>>2]=(c[b>>2]|0)+16;return (c[(c[a+12>>2]|0)+172>>2]|0)==(a|0)|0}function Pb(b,d){b=b|0;d=d|0;var e=0,f=0,g=0,h=0;e=Ne(c[(c[b+12>>2]|0)+40>>2]|0,2)|0;f=b+8|0;g=c[f>>2]|0;c[f>>2]=g+16;h=Be(b,d)|0;c[g>>2]=h;c[g+8>>2]=(a[h+4>>0]|64)&255;h=(c[f>>2]|0)+-16|0;_e(b,e,h,h);return}function Qb(a,b){a=a|0;b=b|0;var e=0,f=0,g=0,h=0,i=0;e=c[a+16>>2]|0;do if((b|0)<=0){if((b|0)>=-1000999){f=(c[a+8>>2]|0)+(b<<4)|0;break}if((b|0)==-1001e3){f=(c[a+12>>2]|0)+40|0;break}g=-1001e3-b|0;h=c[e>>2]|0;if((c[h+8>>2]|0)==22)f=15792;else{i=c[h>>2]|0;f=(g|0)>(d[i+6>>0]|0|0)?15792:i+16+(g+-1<<4)|0}}else{g=(c[e>>2]|0)+(b<<4)|0;f=g>>>0<(c[a+8>>2]|0)>>>0?g:15792}while(0);b=(c[a+8>>2]|0)+-16|0;_e(a,f,b,b);return}function Rb(b,e,f){b=b|0;e=e|0;f=f|0;var g=0,h=0,i=0,j=0,k=0;g=c[b+16>>2]|0;do if((e|0)<=0){if((e|0)>=-1000999){h=(c[b+8>>2]|0)+(e<<4)|0;break}if((e|0)==-1001e3){h=(c[b+12>>2]|0)+40|0;break}i=-1001e3-e|0;j=c[g>>2]|0;if((c[j+8>>2]|0)==22)h=15792;else{k=c[j>>2]|0;h=(i|0)>(d[k+6>>0]|0|0)?15792:k+16+(i+-1<<4)|0}}else{i=(c[g>>2]|0)+(e<<4)|0;h=i>>>0<(c[b+8>>2]|0)>>>0?i:15792}while(0);e=b+8|0;g=c[e>>2]|0;i=Be(b,f)|0;c[g>>2]=i;c[g+8>>2]=(a[i+4>>0]|64)&255;i=c[e>>2]|0;c[e>>2]=i+16;_e(b,h,i,i);return}function Sb(a,b){a=a|0;b=b|0;var e=0,f=0,g=0,h=0,i=0;e=c[a+16>>2]|0;do if((b|0)<=0){if((b|0)>=-1000999){f=(c[a+8>>2]|0)+(b<<4)|0;break}if((b|0)==-1001e3){f=(c[a+12>>2]|0)+40|0;break}g=-1001e3-b|0;h=c[e>>2]|0;if((c[h+8>>2]|0)==22)f=15792;else{i=c[h>>2]|0;f=(g|0)>(d[i+6>>0]|0|0)?15792:i+16+(g+-1<<4)|0}}else{g=(c[e>>2]|0)+(b<<4)|0;f=g>>>0<(c[a+8>>2]|0)>>>0?g:15792}while(0);b=a+8|0;a=He(c[f>>2]|0,(c[b>>2]|0)+-16|0)|0;f=c[b>>2]|0;b=a;e=c[b+4>>2]|0;g=f+-16|0;c[g>>2]=c[b>>2];c[g+4>>2]=e;c[f+-8>>2]=c[a+8>>2];return}function Tb(a,b,e){a=a|0;b=b|0;e=e|0;var f=0,g=0,h=0,i=0,j=0;f=c[a+16>>2]|0;do if((b|0)<=0){if((b|0)>=-1000999){g=(c[a+8>>2]|0)+(b<<4)|0;break}if((b|0)==-1001e3){g=(c[a+12>>2]|0)+40|0;break}h=-1001e3-b|0;i=c[f>>2]|0;if((c[i+8>>2]|0)==22)g=15792;else{j=c[i>>2]|0;g=(h|0)>(d[j+6>>0]|0|0)?15792:j+16+(h+-1<<4)|0}}else{h=(c[f>>2]|0)+(b<<4)|0;g=h>>>0<(c[a+8>>2]|0)>>>0?h:15792}while(0);b=Ne(c[g>>2]|0,e)|0;e=a+8|0;a=c[e>>2]|0;g=b;f=c[g+4>>2]|0;h=a;c[h>>2]=c[g>>2];c[h+4>>2]=f;c[a+8>>2]=c[b+8>>2];c[e>>2]=(c[e>>2]|0)+16;return}function Ub(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0;if((c[(c[a+12>>2]|0)+12>>2]|0)>0)Ed(a);e=Le(a)|0;f=a+8|0;g=c[f>>2]|0;c[g>>2]=e;c[g+8>>2]=69;c[f>>2]=(c[f>>2]|0)+16;if(!((b|0)>0|(d|0)>0))return;Fe(a,e,b,d);return}function Vb(a,b){a=a|0;b=b|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0;e=c[a+16>>2]|0;do if((b|0)<=0){if((b|0)>=-1000999){f=(c[a+8>>2]|0)+(b<<4)|0;break}if((b|0)==-1001e3){f=(c[a+12>>2]|0)+40|0;break}g=-1001e3-b|0;h=c[e>>2]|0;if((c[h+8>>2]|0)==22)f=15792;else{i=c[h>>2]|0;f=(g|0)>(d[i+6>>0]|0|0)?15792:i+16+(g+-1<<4)|0}}else{g=(c[e>>2]|0)+(b<<4)|0;f=g>>>0<(c[a+8>>2]|0)>>>0?g:15792}while(0);b=c[f+8>>2]|0;switch(b&15){case 5:{j=(c[f>>2]|0)+8|0;break}case 7:{j=(c[f>>2]|0)+8|0;break}default:j=(c[a+12>>2]|0)+252+((b&15)<<2)|0}b=c[j>>2]|0;if(!b){k=0;return k|0}j=a+8|0;a=c[j>>2]|0;c[a>>2]=b;c[a+8>>2]=69;c[j>>2]=(c[j>>2]|0)+16;k=1;return k|0}function Wb(a,b){a=a|0;b=b|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0;e=c[a+16>>2]|0;do if((b|0)<=0){if((b|0)>=-1000999){f=(c[a+8>>2]|0)+(b<<4)|0;break}if((b|0)==-1001e3){f=(c[a+12>>2]|0)+40|0;break}g=-1001e3-b|0;h=c[e>>2]|0;if((c[h+8>>2]|0)==22)f=15792;else{i=c[h>>2]|0;f=(g|0)>(d[i+6>>0]|0|0)?15792:i+16+(g+-1<<4)|0}}else{g=(c[e>>2]|0)+(b<<4)|0;f=g>>>0<(c[a+8>>2]|0)>>>0?g:15792}while(0);b=c[(c[f>>2]|0)+12>>2]|0;f=a+8|0;a=c[f>>2]|0;if(!b){j=0;k=a+8|0;c[k>>2]=j;l=c[f>>2]|0;m=l+16|0;c[f>>2]=m;return}c[a>>2]=b;j=69;k=a+8|0;c[k>>2]=j;l=c[f>>2]|0;m=l+16|0;c[f>>2]=m;return}function Xb(b,d){b=b|0;d=d|0;var e=0,f=0,g=0,h=0;e=Ne(c[(c[b+12>>2]|0)+40>>2]|0,2)|0;f=b+8|0;g=c[f>>2]|0;c[f>>2]=g+16;h=Be(b,d)|0;c[g>>2]=h;c[g+8>>2]=(a[h+4>>0]|64)&255;h=c[f>>2]|0;$e(b,e,h+-16|0,h+-32|0);c[f>>2]=(c[f>>2]|0)+-32;return}function Yb(a,b){a=a|0;b=b|0;var e=0,f=0,g=0,h=0,i=0;e=c[a+16>>2]|0;do if((b|0)<=0){if((b|0)>=-1000999){f=(c[a+8>>2]|0)+(b<<4)|0;break}if((b|0)==-1001e3){f=(c[a+12>>2]|0)+40|0;break}g=-1001e3-b|0;h=c[e>>2]|0;if((c[h+8>>2]|0)==22)f=15792;else{i=c[h>>2]|0;f=(g|0)>(d[i+6>>0]|0|0)?15792:i+16+(g+-1<<4)|0}}else{g=(c[e>>2]|0)+(b<<4)|0;f=g>>>0<(c[a+8>>2]|0)>>>0?g:15792}while(0);b=a+8|0;e=c[b>>2]|0;$e(a,f,e+-32|0,e+-16|0);c[b>>2]=(c[b>>2]|0)+-32;return}function Zb(b,e,f){b=b|0;e=e|0;f=f|0;var g=0,h=0,i=0,j=0,k=0;g=c[b+16>>2]|0;do if((e|0)<=0){if((e|0)>=-1000999){h=(c[b+8>>2]|0)+(e<<4)|0;break}if((e|0)==-1001e3){h=(c[b+12>>2]|0)+40|0;break}i=-1001e3-e|0;j=c[g>>2]|0;if((c[j+8>>2]|0)==22)h=15792;else{k=c[j>>2]|0;h=(i|0)>(d[k+6>>0]|0|0)?15792:k+16+(i+-1<<4)|0}}else{i=(c[g>>2]|0)+(e<<4)|0;h=i>>>0<(c[b+8>>2]|0)>>>0?i:15792}while(0);e=b+8|0;g=c[e>>2]|0;c[e>>2]=g+16;i=Be(b,f)|0;c[g>>2]=i;c[g+8>>2]=(a[i+4>>0]|64)&255;i=c[e>>2]|0;$e(b,h,i+-16|0,i+-32|0);c[e>>2]=(c[e>>2]|0)+-32;return}function _b(b,e){b=b|0;e=e|0;var f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0;f=c[b+16>>2]|0;do if((e|0)<=0){if((e|0)>=-1000999){g=(c[b+8>>2]|0)+(e<<4)|0;break}if((e|0)==-1001e3){g=(c[b+12>>2]|0)+40|0;break}h=-1001e3-e|0;i=c[f>>2]|0;if((c[i+8>>2]|0)==22)g=15792;else{j=c[i>>2]|0;g=(h|0)>(d[j+6>>0]|0|0)?15792:j+16+(h+-1<<4)|0}}else{h=(c[f>>2]|0)+(e<<4)|0;g=h>>>0<(c[b+8>>2]|0)>>>0?h:15792}while(0);e=b+8|0;f=c[e>>2]|0;h=Je(b,c[g>>2]|0,f+-32|0)|0;j=f+-16|0;i=c[j+4>>2]|0;k=h;c[k>>2]=c[j>>2];c[k+4>>2]=i;c[h+8>>2]=c[f+-8>>2];a[(c[g>>2]|0)+6>>0]=0;f=c[e>>2]|0;if(!(c[f+-8>>2]&64)){l=f;m=l+-32|0;c[e>>2]=m;return}if(!(a[(c[f+-16>>2]|0)+5>>0]&3)){l=f;m=l+-32|0;c[e>>2]=m;return}h=c[g>>2]|0;if(!(a[h+5>>0]&4)){l=f;m=l+-32|0;c[e>>2]=m;return}ld(b,h);l=c[e>>2]|0;m=l+-32|0;c[e>>2]=m;return}function $b(b,e,f){b=b|0;e=e|0;f=f|0;var g=0,h=0,i=0,j=0,k=0,l=0,m=0;g=c[b+16>>2]|0;do if((e|0)<=0){if((e|0)>=-1000999){h=(c[b+8>>2]|0)+(e<<4)|0;break}if((e|0)==-1001e3){h=(c[b+12>>2]|0)+40|0;break}i=-1001e3-e|0;j=c[g>>2]|0;if((c[j+8>>2]|0)==22)h=15792;else{k=c[j>>2]|0;h=(i|0)>(d[k+6>>0]|0|0)?15792:k+16+(i+-1<<4)|0}}else{i=(c[g>>2]|0)+(e<<4)|0;h=i>>>0<(c[b+8>>2]|0)>>>0?i:15792}while(0);e=b+8|0;Ie(b,c[h>>2]|0,f,(c[e>>2]|0)+-16|0);f=c[e>>2]|0;if(!(c[f+-8>>2]&64)){l=f;m=l+-16|0;c[e>>2]=m;return}if(!(a[(c[f+-16>>2]|0)+5>>0]&3)){l=f;m=l+-16|0;c[e>>2]=m;return}g=c[h>>2]|0;if(!(a[g+5>>0]&4)){l=f;m=l+-16|0;c[e>>2]=m;return}ld(b,g);l=c[e>>2]|0;m=l+-16|0;c[e>>2]=m;return}function ac(b,e){b=b|0;e=e|0;var f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0;f=c[b+16>>2]|0;do if((e|0)<=0){if((e|0)>=-1000999){g=(c[b+8>>2]|0)+(e<<4)|0;break}if((e|0)==-1001e3){g=(c[b+12>>2]|0)+40|0;break}h=-1001e3-e|0;i=c[f>>2]|0;if((c[i+8>>2]|0)==22)g=15792;else{j=c[i>>2]|0;g=(h|0)>(d[j+6>>0]|0|0)?15792:j+16+(h+-1<<4)|0}}else{h=(c[f>>2]|0)+(e<<4)|0;g=h>>>0<(c[b+8>>2]|0)>>>0?h:15792}while(0);e=b+8|0;f=c[e>>2]|0;if(!(c[f+-8>>2]|0)){k=0;l=0}else{h=c[f+-16>>2]|0;k=h;l=h}h=c[g+8>>2]|0;switch(h&15){case 5:{c[(c[g>>2]|0)+8>>2]=l;if(!k){m=c[e>>2]|0;n=m+-16|0;c[e>>2]=n;return 1}if(a[k+5>>0]&3?(f=c[g>>2]|0,a[f+5>>0]&4):0)ld(b,f);pd(b,c[g>>2]|0,k);m=c[e>>2]|0;n=m+-16|0;c[e>>2]=n;return 1}case 7:{c[(c[g>>2]|0)+8>>2]=k;if(!k){m=c[e>>2]|0;n=m+-16|0;c[e>>2]=n;return 1}if(a[l+5>>0]&3?(f=c[g>>2]|0,a[f+5>>0]&4):0)jd(b,f,l);pd(b,c[g>>2]|0,k);m=c[e>>2]|0;n=m+-16|0;c[e>>2]=n;return 1}default:{c[(c[b+12>>2]|0)+252+((h&15)<<2)>>2]=k;m=c[e>>2]|0;n=m+-16|0;c[e>>2]=n;return 1}}return 0}function bc(b,e){b=b|0;e=e|0;var f=0,g=0,h=0,i=0,j=0,k=0,l=0;f=c[b+16>>2]|0;do if((e|0)<=0){if((e|0)>=-1000999){g=(c[b+8>>2]|0)+(e<<4)|0;break}if((e|0)==-1001e3){g=(c[b+12>>2]|0)+40|0;break}h=-1001e3-e|0;i=c[f>>2]|0;if((c[i+8>>2]|0)==22)g=15792;else{j=c[i>>2]|0;g=(h|0)>(d[j+6>>0]|0|0)?15792:j+16+(h+-1<<4)|0}}else{h=(c[f>>2]|0)+(e<<4)|0;g=h>>>0<(c[b+8>>2]|0)>>>0?h:15792}while(0);e=b+8|0;f=c[e>>2]|0;if(!(c[f+-8>>2]|0)){c[(c[g>>2]|0)+12>>2]=0;k=c[e>>2]|0;l=k+-16|0;c[e>>2]=l;return}c[(c[g>>2]|0)+12>>2]=c[f+-16>>2];f=c[(c[e>>2]|0)+-16>>2]|0;if(!(a[f+5>>0]&3)){k=c[e>>2]|0;l=k+-16|0;c[e>>2]=l;return}h=c[g>>2]|0;if(!(a[h+5>>0]&4)){k=c[e>>2]|0;l=k+-16|0;c[e>>2]=l;return}jd(b,h,f);k=c[e>>2]|0;l=k+-16|0;c[e>>2]=l;return}function cc(b,e){b=b|0;e=e|0;var f=0,g=0;f=c[b+16>>2]|0;if(!(a[f+18>>0]&8)){g=0;return g|0}if(e|0)c[e>>2]=c[f+24>>2];g=d[f+37>>0]|0;return g|0}function dc(a,d,e,f,g){a=a|0;d=d|0;e=e|0;f=f|0;g=g|0;var h=0,i=0;h=a+8|0;i=(c[h>>2]|0)+(~d<<4)|0;if((g|0)!=0?(b[a+36>>1]|0)==0:0){d=a+16|0;c[(c[d>>2]|0)+28>>2]=g;c[(c[d>>2]|0)+24>>2]=f;Rc(a,i,e,1)}else Rc(a,i,e,0);if((e|0)!=-1)return;e=(c[a+16>>2]|0)+4|0;a=c[h>>2]|0;if((c[e>>2]|0)>>>0>=a>>>0)return;c[e>>2]=a;return}function ec(e,f,g,h,i,j){e=e|0;f=f|0;g=g|0;h=h|0;i=i|0;j=j|0;var k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0;k=Pa;Pa=Pa+16|0;l=k;if(!h)m=0;else{n=c[e+16>>2]|0;do if((h|0)<=0){if((h|0)>=-1000999){o=(c[e+8>>2]|0)+(h<<4)|0;break}if((h|0)==-1001e3){o=(c[e+12>>2]|0)+40|0;break}p=-1001e3-h|0;q=c[n>>2]|0;if((c[q+8>>2]|0)==22)o=15792;else{r=c[q>>2]|0;o=(p|0)>(d[r+6>>0]|0)?15792:r+16+(p+-1<<4)|0}}else{p=(c[n>>2]|0)+(h<<4)|0;o=p>>>0<(c[e+8>>2]|0)>>>0?p:15792}while(0);m=o-(c[e+28>>2]|0)|0}o=e+8|0;h=(c[o>>2]|0)+(~f<<4)|0;c[l>>2]=h;f=h;if((j|0)!=0?(b[e+36>>1]|0)==0:0){n=c[e+16>>2]|0;c[n+28>>2]=j;c[n+24>>2]=i;c[n+20>>2]=f-(c[e+28>>2]|0);a[n+36>>0]=a[e+41>>0]|0;i=e+68|0;j=n+32|0;c[j>>2]=c[i>>2];c[i>>2]=m;p=n+18|0;a[p>>0]=a[p>>0]|16;Rc(e,h,g,1);a[p>>0]=a[p>>0]&-17;c[i>>2]=c[j>>2];s=0}else{c[l+4>>2]=g;s=Xc(e,130,l,f-(c[e+28>>2]|0)|0,m)|0}if((g|0)!=-1){Pa=k;return s|0}g=(c[e+16>>2]|0)+4|0;e=c[o>>2]|0;if((c[g>>2]|0)>>>0>=e>>>0){Pa=k;return s|0}c[g>>2]=e;Pa=k;return s|0}function fc(a,b){a=a|0;b=b|0;Rc(a,c[b>>2]|0,c[b+4>>2]|0,0);return}function gc(b,d,e,f,g){b=b|0;d=d|0;e=e|0;f=f|0;g=g|0;var h=0,i=0,j=0,k=0;h=Pa;Pa=Pa+32|0;i=h;kf(b,i,d,e);e=Yc(b,i,(f|0)==0?13353:f,g)|0;if(e|0){Pa=h;return e|0}g=c[(c[b+8>>2]|0)+-16>>2]|0;if((a[g+6>>0]|0)!=1){Pa=h;return e|0}f=Ne(c[(c[b+12>>2]|0)+40>>2]|0,2)|0;i=g+16|0;g=c[(c[i>>2]|0)+8>>2]|0;d=f;j=c[d+4>>2]|0;k=g;c[k>>2]=c[d>>2];c[k+4>>2]=j;j=f+8|0;c[g+8>>2]=c[j>>2];if(!(c[j>>2]&64)){Pa=h;return e|0}j=c[f>>2]|0;if(!(a[j+5>>0]&3)){Pa=h;return e|0}f=c[i>>2]|0;if(!(a[f+5>>0]&4)){Pa=h;return e|0}jd(b,f,j);Pa=h;return e|0}function hc(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0;e=c[a+8>>2]|0;if((c[e+-8>>2]|0)!=70){f=1;return f|0}f=_c(a,c[(c[e+-16>>2]|0)+12>>2]|0,b,d,0)|0;return f|0}function ic(a){a=a|0;return d[a+6>>0]|0|0}function jc(b,e,f){b=b|0;e=e|0;f=f|0;var g=0,h=0,i=0,j=0,k=0;g=c[b+12>>2]|0;do switch(e|0){case 0:{a[g+63>>0]=0;h=0;return h|0}case 1:{ne(g,0);a[g+63>>0]=1;h=0;return h|0}case 2:{Dd(b,0);h=0;return h|0}case 3:{h=((c[g+12>>2]|0)+(c[g+8>>2]|0)|0)>>>10;return h|0}case 4:{h=(c[g+12>>2]|0)+(c[g+8>>2]|0)&1023;return h|0}case 5:{if((a[g+62>>0]|0)==2){i=(c[g+20>>2]|0)==0&1;Cd(b);h=i;return h|0}i=(f<<10)+-1600|0;if(!(a[g+63>>0]|0))j=i;else j=(c[g+12>>2]|0)+i|0;ne(g,j);Cd(b);h=(a[g+61>>0]|0)==5&1;return h|0}case 6:{i=g+156|0;k=c[i>>2]|0;c[i>>2]=f;h=k;return h|0}case 8:{k=g+160|0;i=c[k>>2]|0;c[k>>2]=f;h=i;return h|0}case 7:{i=g+164|0;k=c[i>>2]|0;c[i>>2]=f;h=k;return h|0}case 9:{h=d[g+63>>0]|0;return h|0}case 10:{rd(b,2);h=0;return h|0}case 11:{rd(b,0);h=0;return h|0}default:{h=-1;return h|0}}while(0);return 0}function kc(a){a=a|0;Fc(a);return 0}function lc(a,b){a=a|0;b=b|0;var e=0,f=0,g=0,h=0,i=0;e=c[a+16>>2]|0;do if((b|0)<=0){if((b|0)>=-1000999){f=(c[a+8>>2]|0)+(b<<4)|0;break}if((b|0)==-1001e3){f=(c[a+12>>2]|0)+40|0;break}g=-1001e3-b|0;h=c[e>>2]|0;if((c[h+8>>2]|0)==22)f=15792;else{i=c[h>>2]|0;f=(g|0)>(d[i+6>>0]|0|0)?15792:i+16+(g+-1<<4)|0}}else{g=(c[e>>2]|0)+(b<<4)|0;f=g>>>0<(c[a+8>>2]|0)>>>0?g:15792}while(0);b=a+8|0;e=De(a,c[f>>2]|0,(c[b>>2]|0)+-16|0)|0;f=c[b>>2]|0;c[b>>2]=(e|0)==0?f+-16|0:f+16|0;return e|0}function mc(b,d){b=b|0;d=d|0;var e=0,f=0;if((d|0)>1){if((c[(c[b+12>>2]|0)+12>>2]|0)>0)Ed(b);df(b,d);return}else{if(d|0)return;d=b+8|0;e=c[d>>2]|0;f=Ae(b,16476,0)|0;c[e>>2]=f;c[e+8>>2]=(a[f+4>>0]|64)&255;c[d>>2]=(c[d>>2]|0)+16;return}}function nc(a,b){a=a|0;b=b|0;var e=0,f=0,g=0,h=0,i=0;e=c[a+16>>2]|0;do if((b|0)<=0){if((b|0)>=-1000999){f=(c[a+8>>2]|0)+(b<<4)|0;break}if((b|0)==-1001e3){f=(c[a+12>>2]|0)+40|0;break}g=-1001e3-b|0;h=c[e>>2]|0;if((c[h+8>>2]|0)==22)f=15792;else{i=c[h>>2]|0;f=(g|0)>(d[i+6>>0]|0|0)?15792:i+16+(g+-1<<4)|0}}else{g=(c[e>>2]|0)+(b<<4)|0;f=g>>>0<(c[a+8>>2]|0)>>>0?g:15792}while(0);b=a+8|0;ef(a,c[b>>2]|0,f);c[b>>2]=(c[b>>2]|0)+16;return}function oc(a,b){a=a|0;b=b|0;var d=0;if((c[(c[a+12>>2]|0)+12>>2]|0)>0)Ed(a);d=Ce(a,b,0)|0;b=a+8|0;a=c[b>>2]|0;c[a>>2]=d;c[a+8>>2]=71;c[b>>2]=(c[b>>2]|0)+16;return d+24|0}function pc(a,b,e){a=a|0;b=b|0;e=e|0;var f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0;f=c[a+16>>2]|0;do if((b|0)<=0){if((b|0)>=-1000999){g=(c[a+8>>2]|0)+(b<<4)|0;break}if((b|0)==-1001e3){g=(c[a+12>>2]|0)+40|0;break}h=-1001e3-b|0;i=c[f>>2]|0;if((c[i+8>>2]|0)==22)g=15792;else{j=c[i>>2]|0;g=(h|0)>(d[j+6>>0]|0|0)?15792:j+16+(h+-1<<4)|0}}else{h=(c[f>>2]|0)+(b<<4)|0;g=h>>>0<(c[a+8>>2]|0)>>>0?h:15792}while(0);a:do switch(c[g+8>>2]&63){case 38:{b=c[g>>2]|0;if((e|0)<=0){k=0;return k|0}if((d[b+6>>0]|0|0)<(e|0)){k=0;return k|0}else{l=16476;m=b+16+(e+-1<<4)|0}break}case 6:{b=c[g>>2]|0;f=c[b+12>>2]|0;if((e|0)<=0){k=0;return k|0}if((c[f+40>>2]|0)<(e|0)){k=0;return k|0}else{h=e+-1|0;j=c[(c[f+28>>2]|0)+(h<<3)>>2]|0;l=(j|0)==0?16476:j+16|0;m=c[(c[b+16+(h<<2)>>2]|0)+8>>2]|0;break a}break}default:{k=0;return k|0}}while(0);e=a+8|0;a=c[e>>2]|0;g=m;h=c[g+4>>2]|0;b=a;c[b>>2]=c[g>>2];c[b+4>>2]=h;c[a+8>>2]=c[m+8>>2];c[e>>2]=(c[e>>2]|0)+16;k=l;return k|0}function qc(b,e,f){b=b|0;e=e|0;f=f|0;var g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0;g=c[b+16>>2]|0;do if((e|0)<=0){if((e|0)>=-1000999){h=(c[b+8>>2]|0)+(e<<4)|0;break}if((e|0)==-1001e3){h=(c[b+12>>2]|0)+40|0;break}i=-1001e3-e|0;j=c[g>>2]|0;if((c[j+8>>2]|0)==22)h=15792;else{k=c[j>>2]|0;h=(i|0)>(d[k+6>>0]|0|0)?15792:k+16+(i+-1<<4)|0}}else{i=(c[g>>2]|0)+(e<<4)|0;h=i>>>0<(c[b+8>>2]|0)>>>0?i:15792}while(0);a:do switch(c[h+8>>2]&63){case 38:{e=c[h>>2]|0;if((f|0)<=0){l=0;return l|0}if((d[e+6>>0]|0|0)<(f|0)){l=0;return l|0}else{m=16476;n=e;o=e+16+(f+-1<<4)|0}break}case 6:{e=c[h>>2]|0;g=c[e+12>>2]|0;if((f|0)<=0){l=0;return l|0}if((c[g+40>>2]|0)<(f|0)){l=0;return l|0}else{i=f+-1|0;k=c[e+16+(i<<2)>>2]|0;e=c[(c[g+28>>2]|0)+(i<<3)>>2]|0;m=(e|0)==0?16476:e+16|0;n=k;o=c[k+8>>2]|0;break a}break}default:{l=0;return l|0}}while(0);f=b+8|0;h=c[f>>2]|0;k=h+-16|0;c[f>>2]=k;e=k;k=c[e+4>>2]|0;i=o;c[i>>2]=c[e>>2];c[i+4>>2]=k;c[o+8>>2]=c[h+-8>>2];h=c[f>>2]|0;if(!(c[h+8>>2]&64)){l=m;return l|0}f=c[h>>2]|0;if(!(a[f+5>>0]&3)){l=m;return l|0}h=n;if(!(a[h+5>>0]&4)){l=m;return l|0}jd(b,h,f);l=m;return l|0}function rc(a,b,e){a=a|0;b=b|0;e=e|0;var f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0;f=c[a+16>>2]|0;g=(b|0)>0;do if(!g){if((b|0)>=-1000999){h=(c[a+8>>2]|0)+(b<<4)|0;break}if((b|0)==-1001e3){h=(c[a+12>>2]|0)+40|0;break}i=-1001e3-b|0;j=c[f>>2]|0;if((c[j+8>>2]|0)==22)h=15792;else{k=c[j>>2]|0;h=(i|0)>(d[k+6>>0]|0|0)?15792:k+16+(i+-1<<4)|0}}else{i=(c[f>>2]|0)+(b<<4)|0;h=i>>>0<(c[a+8>>2]|0)>>>0?i:15792}while(0);switch(c[h+8>>2]&63){case 6:{do if(!g){if((b|0)>=-1000999){l=(c[a+8>>2]|0)+(b<<4)|0;break}if((b|0)==-1001e3){l=(c[a+12>>2]|0)+40|0;break}i=-1001e3-b|0;k=c[f>>2]|0;if((c[k+8>>2]|0)==22)l=15792;else{j=c[k>>2]|0;l=(i|0)>(d[j+6>>0]|0|0)?15792:j+16+(i+-1<<4)|0}}else{i=(c[f>>2]|0)+(b<<4)|0;l=i>>>0<(c[a+8>>2]|0)>>>0?i:15792}while(0);m=c[(c[l>>2]|0)+16+(e+-1<<2)>>2]|0;return m|0}case 38:{m=(c[h>>2]|0)+16+(e+-1<<4)|0;return m|0}default:{m=0;return m|0}}return 0}function sc(b,e,f,g,h){b=b|0;e=e|0;f=f|0;g=g|0;h=h|0;var i=0,j=0,k=0,l=0,m=0,n=0;i=c[b+16>>2]|0;do if((e|0)<=0){if((e|0)>=-1000999){j=(c[b+8>>2]|0)+(e<<4)|0;break}if((e|0)==-1001e3){j=(c[b+12>>2]|0)+40|0;break}k=-1001e3-e|0;l=c[i>>2]|0;if((c[l+8>>2]|0)==22)j=15792;else{m=c[l>>2]|0;j=(k|0)>(d[m+6>>0]|0|0)?15792:m+16+(k+-1<<4)|0}}else{k=(c[i>>2]|0)+(e<<4)|0;j=k>>>0<(c[b+8>>2]|0)>>>0?k:15792}while(0);e=c[j>>2]|0;j=e+16+(f+-1<<2)|0;do if((g|0)<=0){if((g|0)>=-1000999){n=(c[b+8>>2]|0)+(g<<4)|0;break}if((g|0)==-1001e3){n=(c[b+12>>2]|0)+40|0;break}f=-1001e3-g|0;k=c[i>>2]|0;if((c[k+8>>2]|0)==22)n=15792;else{m=c[k>>2]|0;n=(f|0)>(d[m+6>>0]|0|0)?15792:m+16+(f+-1<<4)|0}}else{f=(c[i>>2]|0)+(g<<4)|0;n=f>>>0<(c[b+8>>2]|0)>>>0?f:15792}while(0);g=(c[n>>2]|0)+16+(h+-1<<2)|0;c[j>>2]=c[g>>2];j=c[g>>2]|0;if(!(a[j+5>>0]&3))return;if(!(a[e+5>>0]&4))return;jd(b,e,j);return}function tc(b,d,e,f){b=b|0;d=d|0;e=e|0;f=f|0;var g=0,h=0;g=(d|0)==0|(e|0)==0;h=c[b+16>>2]|0;if(a[h+18>>0]&1)c[b+20>>2]=c[h+28>>2];c[b+52>>2]=g?0:d;c[b+44>>2]=f;c[b+48>>2]=f;a[b+40>>0]=g?0:e&255;return 1}function uc(a){a=a|0;return c[a+52>>2]|0}function vc(a){a=a|0;return d[a+40>>0]|0|0}function wc(a){a=a|0;return c[a+44>>2]|0}function xc(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0;if((b|0)<0){e=0;return e|0}f=c[a+16>>2]|0;g=a+72|0;if((b|0)!=0&(f|0)!=(g|0)){a=b;h=f;while(1){i=a+-1|0;j=c[h+8>>2]|0;if((a|0)>1&(j|0)!=(g|0)){a=i;h=j}else{k=j;l=i;break}}}else{k=f;l=b}if((l|0)!=0|(k|0)==(g|0)){e=0;return e|0}c[d+96>>2]=k;e=1;return e|0}function yc(b,e,f){b=b|0;e=e|0;f=f|0;var g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0;if(!e){g=c[b+8>>2]|0;if((c[g+-8>>2]|0)!=70){h=0;return h|0}h=id(c[(c[g+-16>>2]|0)+12>>2]|0,f,0)|0;return h|0}g=c[e+96>>2]|0;do if(a[g+18>>0]&1){if((f|0)>=0){e=c[g+24>>2]|0;i=c[(c[c[g>>2]>>2]|0)+12>>2]|0;j=id(i,f,((c[g+28>>2]|0)-(c[i+12>>2]|0)>>2)+-1|0)|0;if(!j){k=e;l=9;break}else{m=e;n=j;l=13;break}}j=0-f|0;e=c[g>>2]|0;i=d[(c[(c[e>>2]|0)+12>>2]|0)+76>>0]|0;if((((c[g+24>>2]|0)-e>>4)-i|0)>(j|0)){o=e+(i<<4)+(j<<4)|0;p=6333}else{h=0;return h|0}}else{k=(c[g>>2]|0)+16|0;l=9}while(0);if((l|0)==9){if((c[b+16>>2]|0)==(g|0))q=b+8|0;else q=c[g+12>>2]|0;if((f|0)>0?((c[q>>2]|0)-k>>4|0)>=(f|0):0){m=k;n=6320;l=13}else{h=0;return h|0}}if((l|0)==13){o=m+(f+-1<<4)|0;p=n}n=b+8|0;b=c[n>>2]|0;f=o;m=c[f+4>>2]|0;l=b;c[l>>2]=c[f>>2];c[l+4>>2]=m;c[b+8>>2]=c[o+8>>2];c[n>>2]=(c[n>>2]|0)+16;h=p;return h|0}function zc(b,e,f){b=b|0;e=e|0;f=f|0;var g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0;g=c[e+96>>2]|0;do if(a[g+18>>0]&1){if((f|0)>=0){e=c[g+24>>2]|0;h=c[(c[c[g>>2]>>2]|0)+12>>2]|0;i=id(h,f,((c[g+28>>2]|0)-(c[h+12>>2]|0)>>2)+-1|0)|0;if(!i){j=e;k=6;break}else{l=e;m=i;k=10;break}}i=0-f|0;e=c[g>>2]|0;h=d[(c[(c[e>>2]|0)+12>>2]|0)+76>>0]|0;if((((c[g+24>>2]|0)-e>>4)-h|0)>(i|0)){n=e+(h<<4)+(i<<4)|0;o=6333}else{p=0;q=b+8|0;r=c[q>>2]|0;s=r+-16|0;c[q>>2]=s;return p|0}}else{j=(c[g>>2]|0)+16|0;k=6}while(0);if((k|0)==6){if((c[b+16>>2]|0)==(g|0))t=b+8|0;else t=c[g+12>>2]|0;if((f|0)>0?((c[t>>2]|0)-j>>4|0)>=(f|0):0){l=j;m=6320;k=10}else{p=0;q=b+8|0;r=c[q>>2]|0;s=r+-16|0;c[q>>2]=s;return p|0}}if((k|0)==10){n=l+(f+-1<<4)|0;o=m}m=c[b+8>>2]|0;f=m+-16|0;l=c[f+4>>2]|0;k=n;c[k>>2]=c[f>>2];c[k+4>>2]=l;c[n+8>>2]=c[m+-8>>2];p=o;q=b+8|0;r=c[q>>2]|0;s=r+-16|0;c[q>>2]=s;return p|0}function Ac(b,d,e){b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0,z=0,A=0,B=0,C=0,D=0,E=0,F=0,G=0,H=0,I=0,J=0,K=0,L=0,M=0,N=0,O=0,P=0,Q=0,R=0,S=0,T=0,U=0,V=0,W=0;f=Pa;Pa=Pa+16|0;g=f;if((a[d>>0]|0)==62){h=b+8|0;i=(c[h>>2]|0)+-16|0;c[h>>2]=i;j=d+1|0;k=0;l=i}else{i=c[e+96>>2]|0;j=d;k=i;l=c[i>>2]|0}i=l+8|0;if((c[i>>2]&31|0)==6)m=c[l>>2]|0;else m=0;d=a[j>>0]|0;a:do if(!(d<<24>>24))n=1;else{h=(m|0)==0;o=(k|0)==0;p=e+16|0;q=e+24|0;r=e+28|0;s=e+12|0;t=e+36|0;u=m+4|0;v=e+20|0;w=k+18|0;x=e+32|0;y=e+34|0;z=e+33|0;A=m+6|0;B=e+35|0;C=e+8|0;D=m+12|0;E=e+4|0;F=k+8|0;G=k+28|0;H=b+12|0;I=j;J=1;K=d;while(1){b:do switch(K<<24>>24|0){case 83:{if(!h?(a[u>>0]|0)!=38:0){L=c[D>>2]|0;M=c[L+36>>2]|0;N=(M|0)==0?6348:M+16|0;c[p>>2]=N;M=c[L+64>>2]|0;c[q>>2]=M;c[r>>2]=c[L+68>>2];O=N;P=(M|0)==0?6351:6356}else{c[p>>2]=6343;c[q>>2]=-1;c[r>>2]=-1;O=6343;P=13569}c[s>>2]=P;Qd(t,O,60);Q=J;break}case 108:{if(!o?(a[w>>0]&1)!=0:0){M=c[(c[c[k>>2]>>2]|0)+12>>2]|0;N=c[M+20>>2]|0;if(!N)R=0;else R=c[N+(((c[G>>2]|0)-(c[M+12>>2]|0)>>2)+-1<<2)>>2]|0}else R=-1;c[v>>2]=R;Q=J;break}case 117:{if(!h){a[x>>0]=a[A>>0]|0;if((a[u>>0]|0)!=38){a[y>>0]=a[(c[D>>2]|0)+77>>0]|0;a[z>>0]=a[(c[D>>2]|0)+76>>0]|0;Q=J;break b}}else a[x>>0]=0;a[y>>0]=1;a[z>>0]=0;Q=J;break}case 116:{if(o)S=0;else S=a[w>>0]&64;a[B>>0]=S;Q=J;break}case 110:{c:do if((!o?(a[w>>0]&64)==0:0)?(M=c[F>>2]|0,(a[M+18>>0]&1)!=0):0){N=c[(c[c[M>>2]>>2]|0)+12>>2]|0;L=c[N+12>>2]|0;T=((c[M+28>>2]|0)-L>>2)+-1|0;M=c[L+(T<<2)>>2]|0;do switch(M&63){case 30:case 29:{L=Bc(N,T,M>>>6&255,E)|0;c[C>>2]=L;if(!L)break c;else{Q=J;break b}break}case 34:{c[E>>2]=6360;U=6360;break}case 7:case 6:case 12:{V=0;W=45;break}case 10:case 8:{V=1;W=45;break}case 24:{V=5;W=45;break}case 13:{V=6;W=45;break}case 14:{V=7;W=45;break}case 15:{V=8;W=45;break}case 16:{V=9;W=45;break}case 17:{V=10;W=45;break}case 18:{V=11;W=45;break}case 19:{V=12;W=45;break}case 21:{V=4;W=45;break}case 25:{V=13;W=45;break}case 26:{V=14;W=45;break}case 22:{V=15;W=45;break}default:{W=46;break c}}while(0);if((W|0)==45){W=0;c[E>>2]=(c[(c[H>>2]|0)+184+(V<<2)>>2]|0)+16;U=6373}c[C>>2]=U;Q=J;break b}else W=46;while(0);if((W|0)==46){W=0;c[C>>2]=0}c[C>>2]=16476;c[E>>2]=0;Q=J;break}case 102:case 76:{Q=J;break}default:Q=0}while(0);I=I+1|0;K=a[I>>0]|0;if(!(K<<24>>24)){n=Q;break a}else J=Q}}while(0);if(rm(j,102)|0){Q=b+8|0;W=c[Q>>2]|0;U=l;l=c[U+4>>2]|0;V=W;c[V>>2]=c[U>>2];c[V+4>>2]=l;c[W+8>>2]=c[i>>2];c[Q>>2]=(c[Q>>2]|0)+16}if(!(rm(j,76)|0)){Pa=f;return n|0}if(m|0?(a[m+4>>0]|0)!=38:0){j=m+12|0;m=c[(c[j>>2]|0)+20>>2]|0;Q=Le(b)|0;i=b+8|0;W=c[i>>2]|0;c[W>>2]=Q;c[W+8>>2]=69;c[i>>2]=(c[i>>2]|0)+16;c[g>>2]=1;c[g+8>>2]=1;if((c[(c[j>>2]|0)+52>>2]|0)>0){i=0;do{Ie(b,Q,c[m+(i<<2)>>2]|0,g);i=i+1|0}while((i|0)<(c[(c[j>>2]|0)+52>>2]|0))}Pa=f;return n|0}j=b+8|0;b=c[j>>2]|0;c[b+8>>2]=0;c[j>>2]=b+16;Pa=f;return n|0}function Bc(b,d,e,f){b=b|0;d=d|0;e=e|0;f=f|0;var g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0;g=id(b,e+1|0,d)|0;c[f>>2]=g;if(g|0){h=8875;return h|0}g=b+12|0;i=d;d=e;a:while(1){if((i|0)<=0){h=0;j=40;break}k=c[g>>2]|0;e=-1;l=0;while(1){m=c[k+(l<<2)>>2]|0;n=m>>>6&255;switch(m&63){case 4:{o=l;p=(n|0)>(d|0)|(n+(m>>>23)|0)<(d|0)?e:l;break}case 34:{o=l;p=(n+2|0)>(d|0)?e:l;break}case 30:case 29:{o=l;p=(n|0)>(d|0)?e:l;break}case 23:{q=(m>>>14)+-131071|0;r=l+1+q|0;o=((l|0)>=(r|0)|(r|0)>(i|0)?0:q)+l|0;p=e;break}case 27:{o=l;p=(n|0)==(d|0)?l:e;break}default:{o=l;p=((n|0)==(d|0)?(a[272+(m&63)>>0]&64)!=0:0)?l:e}}l=o+1|0;if((l|0)>=(i|0))break;else e=p}if((p|0)==-1){h=0;j=40;break}s=c[k+(p<<2)>>2]|0;switch(s&63){case 7:case 6:{j=17;break a;break}case 5:{j=28;break a;break}case 2:case 1:{j=29;break a;break}case 12:{j=34;break a;break}case 0:break;default:{h=0;j=40;break a}}d=s>>>23;if(d>>>0>=(s>>>6&255)>>>0){h=0;j=40;break}e=id(b,d+1|0,p)|0;c[f>>2]=e;if(e|0){h=8875;j=40;break}else i=p}if((j|0)==17){i=s>>>14;d=s>>>23;if((s&63|0)==7)t=id(b,d+1|0,p)|0;else{o=c[(c[b+28>>2]|0)+(d<<3)>>2]|0;t=(o|0)==0?13353:o+16|0}if(!(s&4194304)){o=Bc(b,p,i&511,f)|0;if(!((o|0)!=0?(a[o>>0]|0)==99:0))j=25}else{o=c[b+8>>2]|0;d=i&255;if((c[o+(d<<4)+8>>2]&15|0)==4)c[f>>2]=(c[o+(d<<4)>>2]|0)+16;else j=25}if((j|0)==25)c[f>>2]=13353;if(!t){h=6391;return h|0}d=(Cl(t,9039)|0)==0;h=d?6384:6391;return h|0}else if((j|0)==28){d=c[(c[b+28>>2]|0)+(s>>>23<<3)>>2]|0;c[f>>2]=(d|0)==0?13353:d+16|0;h=6406;return h|0}else if((j|0)==29){if((s&63|0)==1)u=s>>>14;else u=(c[k+(p+1<<2)>>2]|0)>>>6;k=c[b+8>>2]|0;if((c[k+(u<<4)+8>>2]&15|0)!=4){h=0;return h|0}c[f>>2]=(c[k+(u<<4)>>2]|0)+16;h=6397;return h|0}else if((j|0)==34){u=s>>>14;if(!(s&4194304)){s=Bc(b,p,u&511,f)|0;if(s|0?(a[s>>0]|0)==99:0){h=8188;return h|0}}else{s=c[b+8>>2]|0;b=u&255;if((c[s+(b<<4)+8>>2]&15|0)==4){c[f>>2]=(c[s+(b<<4)>>2]|0)+16;h=8188;return h|0}}c[f>>2]=13353;h=8188;return h|0}else if((j|0)==40)return h|0;return 0}function Cc(b,d,e){b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0;f=Pa;Pa=Pa+32|0;g=f+16|0;h=f;i=f+24|0;f=c[b+16>>2]|0;c[i>>2]=0;j=c[352+((c[d+8>>2]&15)+1<<2)>>2]|0;a:do if(a[f+18>>0]&1){k=c[c[f>>2]>>2]|0;l=a[k+6>>0]|0;b:do if(l<<24>>24){m=l&255;n=0;while(1){if((c[(c[k+16+(n<<2)>>2]|0)+8>>2]|0)==(d|0))break;o=n+1|0;if(o>>>0<m>>>0)n=o;else break b}m=c[(c[(c[k+12>>2]|0)+28>>2]|0)+(n<<3)>>2]|0;o=(m|0)==0?13353:m+16|0;c[i>>2]=o;p=6406;q=o;c[h>>2]=e;r=h+4|0;c[r>>2]=p;s=h+8|0;c[s>>2]=q;t=h+12|0;c[t>>2]=j;Dc(b,6414,h)}while(0);l=c[f+24>>2]|0;o=c[f+4>>2]|0;m=l;if(l>>>0<o>>>0){u=l;while(1){if((u|0)==(d|0))break;u=u+16|0;if(u>>>0>=o>>>0)break a}o=c[k+12>>2]|0;u=Bc(o,((c[f+28>>2]|0)-(c[o+12>>2]|0)>>2)+-1|0,d-m>>4,i)|0;if(u|0){p=u;q=c[i>>2]|0;c[h>>2]=e;r=h+4|0;c[r>>2]=p;s=h+8|0;c[s>>2]=q;t=h+12|0;c[t>>2]=j;Dc(b,6414,h)}}}while(0);c[g>>2]=e;c[g+4>>2]=j;Dc(b,6449,g)}function Dc(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0;e=Pa;Pa=Pa+16|0;f=e;c[f>>2]=d;Ec(a,Od(a,b,f)|0);Fc(a)}function Ec(b,d){b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0;e=Pa;Pa=Pa+80|0;f=e+64|0;g=e;h=c[b+16>>2]|0;if(!(a[h+18>>0]&1)){Pa=e;return}i=c[(c[c[h>>2]>>2]|0)+12>>2]|0;j=c[i+20>>2]|0;if(!j)k=0;else k=c[j+(((c[h+28>>2]|0)-(c[i+12>>2]|0)>>2)+-1<<2)>>2]|0;h=c[i+36>>2]|0;if(!h){a[g>>0]=63;a[g+1>>0]=0}else Qd(g,h+16|0,60);c[f>>2]=g;c[f+4>>2]=k;c[f+8>>2]=d;Pd(b,8993,f)|0;Pa=e;return}function Fc(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0,i=0;b=c[a+68>>2]|0;if(!b)Jc(a,2);d=(c[a+28>>2]|0)+b|0;b=d+8|0;if((c[b>>2]&15|0)!=6)Jc(a,6);e=a+8|0;f=c[e>>2]|0;g=f+-16|0;h=c[g+4>>2]|0;i=f;c[i>>2]=c[g>>2];c[i+4>>2]=h;c[f+8>>2]=c[f+-8>>2];f=c[e>>2]|0;h=d;d=c[h+4>>2]|0;i=f+-16|0;c[i>>2]=c[h>>2];c[i+4>>2]=d;c[f+-8>>2]=c[b>>2];b=c[e>>2]|0;c[e>>2]=b+16;Rc(a,b+-16|0,1,0);Jc(a,2)}function Gc(a,b,d){a=a|0;b=b|0;d=d|0;var e=0;e=c[b+8>>2]|0;Cc(a,(e|0)==3|(e&15|0)==4?d:b,6474)}function Hc(a,b,c){a=a|0;b=b|0;c=c|0;var d=0,e=0;d=Pa;Pa=Pa+16|0;e=(Ye(b,d)|0)==0;Cc(a,e?b:c,6486)}function Ic(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0;e=Pa;Pa=Pa+16|0;f=e+8|0;g=e;e=c[352+((c[b+8>>2]&15)+1<<2)>>2]|0;b=c[352+((c[d+8>>2]&15)+1<<2)>>2]|0;if((e|0)==(b|0)){c[g>>2]=e;Dc(a,6508,g)}else{c[f>>2]=e;c[f+4>>2]=b;Dc(a,6541,f)}}function Jc(b,d){b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0;e=c[b+64>>2]|0;if(e|0){c[e+160>>2]=d;Ga(e+4|0,1)}a[b+6>>0]=d;e=b+12|0;f=c[e>>2]|0;g=c[f+172>>2]|0;if(c[g+64>>2]|0){h=c[b+8>>2]|0;i=g+8|0;g=c[i>>2]|0;c[i>>2]=g+16;i=h+-16|0;j=c[i+4>>2]|0;k=g;c[k>>2]=c[i>>2];c[k+4>>2]=j;c[g+8>>2]=c[h+-8>>2];Jc(c[(c[e>>2]|0)+172>>2]|0,d)}d=c[f+168>>2]|0;if(!d)na();Ta[d&511](b)|0;na()}function Kc(a,d,e){a=a|0;d=d|0;e=e|0;var f=0,g=0,h=0,i=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0;f=Pa;Pa=Pa+176|0;g=4;h=Hk(40)|0;c[h>>2]=0;i=f;l=a+38|0;m=b[l>>1]|0;n=i+160|0;c[n>>2]=0;o=a+64|0;c[i>>2]=c[o>>2];c[o>>2]=i;h=Rn(i+4|0,1,h|0,g|0)|0;g=L()|0;j=0;p=j;j=0;if((p|0)!=0&(k|0)!=0){q=Sn(c[p>>2]|0,h|0,g|0)|0;if(!q)Ga(p|0,k|0);K(k|0)}else q=-1;p=L()|0;if((q|0)==1)r=p;else r=0;do{if(r|0){s=6;break}j=0;M(d|0,a|0,e|0);p=j;j=0;if((p|0)!=0&(k|0)!=0){t=Sn(c[p>>2]|0,h|0,g|0)|0;if(!t)Ga(p|0,k|0);K(k|0)}else t=-1;r=L()|0}while((t|0)==1);if((s|0)==6){u=c[i>>2]|0;c[o>>2]=u;b[l>>1]=m;v=c[n>>2]|0;Ik(h|0);Pa=f;return v|0}u=c[i>>2]|0;c[o>>2]=u;b[l>>1]=m;v=c[n>>2]|0;Ik(h|0);Pa=f;return v|0}function Lc(b,d){b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0;e=b+28|0;f=c[e>>2]|0;g=b+32|0;h=c[g>>2]|0;if((d+1|0)>>>0>268435455)Gd(b);i=Hd(b,f,h<<4,d<<4)|0;c[e>>2]=i;if((h|0)<(d|0)){j=h;do{c[i+(j<<4)+8>>2]=0;j=j+1|0}while((j|0)!=(d|0))}c[g>>2]=d;c[b+24>>2]=i+(d<<4)+-80;d=b+8|0;g=f;c[d>>2]=i+((c[d>>2]|0)-g>>4<<4);d=c[b+56>>2]|0;if(d|0?(f=d+8|0,c[f>>2]=i+((c[f>>2]|0)-g>>4<<4),f=c[d>>2]|0,f|0):0){d=f;do{f=d+8|0;c[f>>2]=(c[e>>2]|0)+((c[f>>2]|0)-g>>4<<4);d=c[d>>2]|0}while((d|0)!=0)}d=c[b+16>>2]|0;if(!d)return;b=d;do{d=b+4|0;f=c[e>>2]|0;c[d>>2]=f+((c[d>>2]|0)-g>>4<<4);c[b>>2]=f+((c[b>>2]|0)-g>>4<<4);if(a[b+18>>0]&1){d=b+24|0;c[d>>2]=f+((c[d>>2]|0)-g>>4<<4)}b=c[b+8>>2]|0}while((b|0)!=0);return}function Mc(a,b){a=a|0;b=b|0;var d=0,e=0,f=0;d=Pa;Pa=Pa+16|0;e=c[a+32>>2]|0;if((e|0)>1e6)Jc(a,6);f=b+5+((c[a+8>>2]|0)-(c[a+28>>2]|0)>>4)|0;b=e<<1;e=(b|0)<1e6?b:1e6;b=(e|0)<(f|0)?f:e;if((b|0)>1e6){Lc(a,1000200);Dc(a,9456,d)}else{Lc(a,b);Pa=d;return}}function Nc(a){a=a|0;var b=0,d=0,e=0,f=0,g=0;b=c[a+8>>2]|0;d=c[a+16>>2]|0;if(!d)e=b;else{f=d;d=b;while(1){b=c[f+4>>2]|0;g=d>>>0<b>>>0?b:d;f=c[f+8>>2]|0;if(!f){e=g;break}else d=g}}d=e-(c[a+28>>2]|0)|0;e=d>>4;f=e+11+((e+1|0)/8|0)|0;e=(f|0)<1e6?f:1e6;if((d|0)>15999984)return;if((e|0)>=(c[a+32>>2]|0))return;Lc(a,e);return}function Oc(b,d,e){b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0;f=Pa;Pa=Pa+112|0;g=f;h=f+4|0;i=c[b+52>>2]|0;if(!i){Pa=f;return}j=b+41|0;if(!(a[j>>0]|0)){Pa=f;return}k=c[b+16>>2]|0;l=b+8|0;m=c[l>>2]|0;n=b+28|0;o=c[n>>2]|0;p=m-o|0;q=k+4|0;r=(c[q>>2]|0)-o|0;c[h>>2]=d;c[h+20>>2]=e;c[h+96>>2]=k;e=m;do if(((c[b+24>>2]|0)-m|0)<336){d=c[b+32>>2]|0;if((d|0)>1e6)Jc(b,6);o=(p>>4)+25|0;s=d<<1;d=(s|0)<1e6?s:1e6;s=(d|0)<(o|0)?o:d;if((s|0)>1e6){Lc(b,1000200);Dc(b,9456,g)}else{Lc(b,s);t=c[l>>2]|0;break}}else t=e;while(0);c[q>>2]=t+320;a[j>>0]=0;t=k+18|0;a[t>>0]=a[t>>0]|2;Xa[i&255](b,h);a[j>>0]=1;j=c[n>>2]|0;c[q>>2]=j+r;c[l>>2]=j+p;a[t>>0]=a[t>>0]&-3;Pa=f;return}function Pc(e,f,g){e=e|0;f=f|0;g=g|0;var h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0,z=0,A=0,B=0,C=0,D=0,E=0,F=0,G=0,H=0,I=0,J=0,K=0,L=0,M=0,N=0,O=0,P=0,Q=0;h=Pa;Pa=Pa+32|0;i=h+16|0;j=h+8|0;k=h;l=e+28|0;m=e+8|0;n=e+24|0;o=e+32|0;p=f;a:while(1){q=c[l>>2]|0;switch(c[p+8>>2]&63){case 22:{r=3;break a;break}case 38:{r=4;break a;break}case 6:{r=30;break a;break}default:{}}f=Se(e,p,16)|0;s=p-(c[l>>2]|0)|0;t=f+8|0;if((c[t>>2]&15|0)!=6){r=56;break}u=c[m>>2]|0;if(u>>>0>p>>>0){v=u;do{w=v;v=v+-16|0;x=v;y=c[x+4>>2]|0;z=w;c[z>>2]=c[x>>2];c[z+4>>2]=y;c[w+8>>2]=c[w+-8>>2]}while(v>>>0>p>>>0);A=c[m>>2]|0}else A=u;v=A+16|0;c[m>>2]=v;w=v;if(((c[n>>2]|0)-w|0)<16){v=c[o>>2]|0;if((v|0)>1e6){r=63;break}y=(w-(c[l>>2]|0)>>4)+5|0;w=v<<1;v=(w|0)<1e6?w:1e6;w=(v|0)<(y|0)?y:v;if((w|0)>1e6){r=65;break}Lc(e,w)}w=(c[l>>2]|0)+s|0;v=f;y=c[v+4>>2]|0;z=w;c[z>>2]=c[v>>2];c[z+4>>2]=y;c[w+8>>2]=c[t>>2];p=w}if((r|0)==3)B=p;else if((r|0)==4)B=(c[p>>2]|0)+12|0;else if((r|0)==30){A=p-q|0;w=c[(c[p>>2]|0)+12>>2]|0;y=c[m>>2]|0;z=w+78|0;v=d[z>>0]|0;do if(((c[n>>2]|0)-y>>4|0)<=(v|0)){x=c[o>>2]|0;if((x|0)>1e6)Jc(e,6);C=v+5+(y-q>>4)|0;D=x<<1;x=(D|0)<1e6?D:1e6;D=(x|0)<(C|0)?C:x;if((D|0)>1e6){Lc(e,1000200);Dc(e,9456,j)}else{Lc(e,D);E=c[m>>2]|0;F=c[l>>2]|0;break}}else{E=y;F=q}while(0);y=E;j=F+A|0;A=E-j>>4;E=A+-1|0;F=a[w+76>>0]|0;v=F&255;if((A|0)>(v|0)){G=E;H=y}else{A=E;E=y;do{y=E;E=E+16|0;c[y+8>>2]=0;A=A+1|0}while((A|0)<(v|0));c[m>>2]=E;G=A;H=E}if(a[w+77>>0]|0){E=0-G|0;G=H+(E<<4)|0;if(F<<24>>24!=0?(c[m>>2]=H+16,A=G,y=c[A+4>>2]|0,D=H,c[D>>2]=c[A>>2],c[D+4>>2]=y,y=H+(E<<4)+8|0,c[H+8>>2]=c[y>>2],c[y>>2]=0,F<<24>>24!=1):0){F=1;do{y=c[m>>2]|0;E=G+(F<<4)|0;c[m>>2]=y+16;D=E;A=c[D+4>>2]|0;x=y;c[x>>2]=c[D>>2];c[x+4>>2]=A;A=E+8|0;c[y+8>>2]=c[A>>2];c[A>>2]=0;F=F+1|0}while((F|0)!=(v|0));I=H}else I=H}else I=j+16|0;H=e+16|0;v=c[(c[H>>2]|0)+12>>2]|0;if(!v)J=oe(e)|0;else J=v;c[H>>2]=J;b[J+16>>1]=g;c[J>>2]=j;c[J+24>>2]=I;j=I+(d[z>>0]<<4)|0;c[J+4>>2]=j;z=J+28|0;c[z>>2]=c[w+12>>2];w=J+18|0;a[w>>0]=1;c[m>>2]=j;if((c[(c[e+12>>2]|0)+12>>2]|0)>0)Ed(e);if(!(a[e+40>>0]&1)){K=0;Pa=h;return K|0}c[z>>2]=(c[z>>2]|0)+4;j=c[J+8>>2]|0;if((a[j+18>>0]&1)!=0?(c[(c[j+28>>2]|0)+-4>>2]&63|0)==30:0){a[w>>0]=a[w>>0]|64;L=4}else L=0;Oc(e,L,-1);c[z>>2]=(c[z>>2]|0)+-4;K=0;Pa=h;return K|0}else if((r|0)==56)Cc(e,p,10383);else if((r|0)==63)Jc(e,6);else if((r|0)==65){Lc(e,1000200);Dc(e,9456,i)}i=p-q|0;p=c[B>>2]|0;B=c[m>>2]|0;do if(((c[n>>2]|0)-B|0)<336){r=c[o>>2]|0;if((r|0)>1e6)Jc(e,6);z=(B-q>>4)+25|0;L=r<<1;r=(L|0)<1e6?L:1e6;L=(r|0)<(z|0)?z:r;if((L|0)>1e6){Lc(e,1000200);Dc(e,9456,k)}else{Lc(e,L);break}}while(0);k=e+16|0;q=c[(c[k>>2]|0)+12>>2]|0;if(!q)M=oe(e)|0;else M=q;c[k>>2]=M;b[M+16>>1]=g;c[M>>2]=(c[l>>2]|0)+i;c[M+4>>2]=(c[m>>2]|0)+320;a[M+18>>0]=0;if((c[(c[e+12>>2]|0)+12>>2]|0)>0)Ed(e);M=e+40|0;if(a[M>>0]&1)Oc(e,0,-1);i=Ta[p&511](e)|0;p=(c[m>>2]|0)+(0-i<<4)|0;i=c[k>>2]|0;g=d[M>>0]|0;if(!(g&6)){N=p;O=c[i+8>>2]|0}else{if(!(g&2))P=p;else{g=p-(c[l>>2]|0)|0;Oc(e,1,-1);P=(c[l>>2]|0)+g|0}g=c[i+8>>2]|0;c[e+20>>2]=c[g+28>>2];N=P;O=g}g=c[i>>2]|0;P=b[i+16>>1]|0;c[k>>2]=O;b:do if(P<<16>>16){O=g;k=P<<16>>16;i=N;while(1){if(i>>>0>=(c[m>>2]|0)>>>0)break;e=O+16|0;l=i;p=c[l+4>>2]|0;M=O;c[M>>2]=c[l>>2];c[M+4>>2]=p;c[O+8>>2]=c[i+8>>2];p=k+-1|0;if(!p){Q=e;break b}else{O=e;k=p;i=i+16|0}}if((k|0)>0){i=O;t=k;while(1){f=i+16|0;c[i+8>>2]=0;if((t|0)>1){i=f;t=t+-1|0}else{Q=f;break}}}else Q=O}else Q=g;while(0);c[m>>2]=Q;K=1;Pa=h;return K|0}function Qc(a,e){a=a|0;e=e|0;var f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0;f=a+16|0;g=c[f>>2]|0;h=d[a+40>>0]|0;if(!(h&6)){i=e;j=c[g+8>>2]|0}else{if(!(h&2))k=e;else{h=a+28|0;l=e-(c[h>>2]|0)|0;Oc(a,1,-1);k=(c[h>>2]|0)+l|0}l=c[g+8>>2]|0;c[a+20>>2]=c[l+28>>2];i=k;j=l}l=c[g>>2]|0;k=b[g+16>>1]|0;g=k<<16>>16;c[f>>2]=j;j=a+8|0;if(!(k<<16>>16)){m=l;c[j>>2]=m;n=g+1|0;return n|0}k=l;l=g;a=i;while(1){if(a>>>0>=(c[j>>2]|0)>>>0)break;i=k+16|0;f=a;h=c[f+4>>2]|0;e=k;c[e>>2]=c[f>>2];c[e+4>>2]=h;c[k+8>>2]=c[a+8>>2];h=l+-1|0;if(!h){m=i;o=13;break}else{k=i;l=h;a=a+16|0}}if((o|0)==13){c[j>>2]=m;n=g+1|0;return n|0}if((l|0)<=0){m=k;c[j>>2]=m;n=g+1|0;return n|0}o=k;k=l;while(1){l=o+16|0;c[o+8>>2]=0;if((k|0)>1){o=l;k=k+-1|0}else{m=l;break}}c[j>>2]=m;n=g+1|0;return n|0}function Rc(a,c,d,e){a=a|0;c=c|0;d=d|0;e=e|0;var f=0,g=0,h=0,i=0,j=0,k=0;f=Pa;Pa=Pa+16|0;g=f;h=a+38|0;i=(b[h>>1]|0)+1<<16>>16;b[h>>1]=i;if((i&65535)>199){if(i<<16>>16==200)Dc(a,6571,g);if((i&65535)>224)Jc(a,6)}i=(e|0)!=0;if(!i){e=a+36|0;b[e>>1]=(b[e>>1]|0)+1<<16>>16}if(!(Pc(a,c,d)|0))hf(a);if(i){j=b[h>>1]|0;k=j+-1<<16>>16;b[h>>1]=k;Pa=f;return}i=a+36|0;b[i>>1]=(b[i>>1]|0)+-1<<16>>16;j=b[h>>1]|0;k=j+-1<<16>>16;b[h>>1]=k;Pa=f;return}function Sc(d,f,g){d=d|0;f=f|0;g=g|0;var h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0,z=0,A=0,B=0;if(!f)h=1;else h=(e[f+38>>1]|0)+1&65535;f=d+38|0;b[f>>1]=h;h=d+36|0;b[h>>1]=0;i=d+8|0;j=Kc(d,131,(c[i>>2]|0)+(0-g<<4)|0)|0;if((j|0)==-1){k=2;b[h>>1]=1;l=b[f>>1]|0;m=l+-1<<16>>16;b[f>>1]=m;return k|0}if(j>>>0<=1){k=j;b[h>>1]=1;l=b[f>>1]|0;m=l+-1<<16>>16;b[f>>1]=m;return k|0}g=d+16|0;n=d+28|0;o=d+41|0;p=d+12|0;q=d+68|0;r=d+32|0;s=j;a:while(1){j=c[g>>2]|0;if(!j)break;t=j;while(1){if(a[t+18>>0]&16)break;j=c[t+8>>2]|0;if(!j)break a;else t=j}j=t+18|0;u=(c[n>>2]|0)+(c[t+20>>2]|0)|0;fd(d,u);switch(s|0){case 4:{v=c[(c[p>>2]|0)+180>>2]|0;c[u>>2]=v;w=(a[v+4>>0]|64)&255;break}case 6:{v=Ae(d,6588,23)|0;c[u>>2]=v;w=(a[v+4>>0]|64)&255;break}default:{v=c[i>>2]|0;x=v+-16|0;y=c[x+4>>2]|0;z=u;c[z>>2]=c[x>>2];c[z+4>>2]=y;w=c[v+-8>>2]|0}}c[u+8>>2]=w;v=u+16|0;c[i>>2]=v;c[g>>2]=t;a[o>>0]=a[t+36>>0]|0;b[h>>1]=0;u=t;y=v;do{v=c[u+4>>2]|0;y=y>>>0<v>>>0?v:y;u=c[u+8>>2]|0}while((u|0)!=0);u=y-(c[n>>2]|0)|0;v=u>>4;z=v+11+((v+1|0)/8|0)|0;v=(z|0)<1e6?z:1e6;if((u|0)<=15999984?(v|0)<(c[r>>2]|0):0)Lc(d,v);c[q>>2]=c[t+32>>2];a[j>>0]=a[j>>0]|32;a[t+37>>0]=s;v=Kc(d,132,0)|0;if(v>>>0>1)s=v;else{k=v;A=25;break}}if((A|0)==25){b[h>>1]=1;l=b[f>>1]|0;m=l+-1<<16>>16;b[f>>1]=m;return k|0}a[d+6>>0]=s;A=c[i>>2]|0;switch(s|0){case 4:{q=c[(c[p>>2]|0)+180>>2]|0;c[A>>2]=q;B=(a[q+4>>0]|64)&255;break}case 6:{q=Ae(d,6588,23)|0;c[A>>2]=q;B=(a[q+4>>0]|64)&255;break}default:{q=A+-16|0;d=c[q+4>>2]|0;p=A;c[p>>2]=c[q>>2];c[p+4>>2]=d;B=c[A+-8>>2]|0}}c[A+8>>2]=B;B=A+16|0;c[i>>2]=B;c[(c[g>>2]|0)+4>>2]=B;k=s;b[h>>1]=1;l=b[f>>1]|0;m=l+-1<<16>>16;b[f>>1]=m;return k|0}function Tc(f,g){f=f|0;g=g|0;var h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0;h=f+16|0;i=c[h>>2]|0;if((e[f+38>>1]|0)>199)Vc(f,6571,g);j=f+6|0;switch(a[j>>0]|0){case 0:{if((i|0)!=(f+72|0))Vc(f,6612,g);if(Pc(f,g+-16|0,-1)|0)return;hf(f);return}case 1:{a[j>>0]=0;j=f+28|0;c[i>>2]=(c[j>>2]|0)+(c[i+20>>2]|0);k=i+18|0;l=a[k>>0]|0;if(!(l&1)){m=c[i+28>>2]|0;if(!m){n=g;o=i}else{a[i+37>>0]=1;a[k>>0]=l|8;l=Ta[m&511](f)|0;n=(c[f+8>>2]|0)+(0-l<<4)|0;o=c[h>>2]|0}l=d[f+40>>0]|0;if(!(l&6)){p=n;q=c[o+8>>2]|0}else{if(!(l&2))r=n;else{l=n-(c[j>>2]|0)|0;Oc(f,1,-1);r=(c[j>>2]|0)+l|0}l=c[o+8>>2]|0;c[f+20>>2]=c[l+28>>2];p=r;q=l}l=c[o>>2]|0;r=b[o+16>>1]|0;c[h>>2]=q;q=f+8|0;a:do if(r<<16>>16){h=l;o=r<<16>>16;j=p;while(1){if(j>>>0>=(c[q>>2]|0)>>>0)break;n=h+16|0;m=j;k=c[m+4>>2]|0;i=h;c[i>>2]=c[m>>2];c[i+4>>2]=k;c[h+8>>2]=c[j+8>>2];k=o+-1|0;if(!k){s=n;break a}else{h=n;o=k;j=j+16|0}}if((o|0)>0){j=h;k=o;while(1){n=j+16|0;c[j+8>>2]=0;if((k|0)>1){j=n;k=k+-1|0}else{s=n;break}}}else s=h}else s=l;while(0);c[q>>2]=s}else hf(f);Uc(f,0);return}default:Vc(f,10064,g)}}function Uc(e,f){e=e|0;f=f|0;var g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0,z=0,A=0;f=e+16|0;g=c[f>>2]|0;h=e+72|0;if((g|0)==(h|0))return;i=e+68|0;j=e+8|0;k=e+40|0;l=e+20|0;m=e+28|0;n=g;do{g=n+18|0;o=a[g>>0]|0;if(!(o&1)){p=o&255;if(!(p&16))q=o;else{o=p&239;a[g>>0]=o;c[i>>2]=c[n+32>>2];q=o}if((b[n+16>>1]|0)==-1?(o=n+4|0,p=c[j>>2]|0,(c[o>>2]|0)>>>0<p>>>0):0)c[o>>2]=p;if(!(q&32))a[n+37>>0]=1;a[g>>0]=q&-57|8;g=Ta[c[n+28>>2]&511](e)|0;p=(c[j>>2]|0)+(0-g<<4)|0;g=c[f>>2]|0;o=d[k>>0]|0;if(!(o&6)){r=p;s=c[g+8>>2]|0}else{if(!(o&2))t=p;else{o=p-(c[m>>2]|0)|0;Oc(e,1,-1);t=(c[m>>2]|0)+o|0}o=c[g+8>>2]|0;c[l>>2]=c[o+28>>2];r=t;s=o}o=c[g>>2]|0;p=b[g+16>>1]|0;c[f>>2]=s;a:do if(p<<16>>16){g=o;u=p<<16>>16;v=r;while(1){if(v>>>0>=(c[j>>2]|0)>>>0)break;w=g+16|0;x=v;y=c[x+4>>2]|0;z=g;c[z>>2]=c[x>>2];c[z+4>>2]=y;c[g+8>>2]=c[v+8>>2];y=u+-1|0;if(!y){A=w;break a}else{g=w;u=y;v=v+16|0}}if((u|0)>0){v=g;y=u;while(1){w=v+16|0;c[v+8>>2]=0;if((y|0)>1){v=w;y=y+-1|0}else{A=w;break}}}else A=g}else A=o;while(0);c[j>>2]=A}else{gf(e);hf(e)}n=c[f>>2]|0}while((n|0)!=(h|0));return}function Vc(b,d,e){b=b|0;d=d|0;e=e|0;var f=0,g=0;f=b+8|0;c[f>>2]=e;g=Be(b,d)|0;c[e>>2]=g;c[e+8>>2]=(a[g+4>>0]|64)&255;c[f>>2]=(c[f>>2]|0)+16;Jc(b,-1)}function Wc(d,e,f,g){d=d|0;e=e|0;f=f|0;g=g|0;var h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0;h=Pa;Pa=Pa+16|0;i=h+8|0;j=h;k=c[d+16>>2]|0;if(b[d+36>>1]|0)if((c[(c[d+12>>2]|0)+172>>2]|0)==(d|0))Dc(d,6692,i);else Dc(d,6650,j);a[d+6>>0]=1;c[k+20>>2]=(c[k>>2]|0)-(c[d+28>>2]|0);if(a[k+18>>0]&1){Pa=h;return 0}c[k+28>>2]=g;if(!g){l=d+8|0;m=c[l>>2]|0;n=0-e|0;o=m+(n<<4)|0;p=o+-16|0;c[k>>2]=p;Jc(d,1)}c[k+24>>2]=f;l=d+8|0;m=c[l>>2]|0;n=0-e|0;o=m+(n<<4)|0;p=o+-16|0;c[k>>2]=p;Jc(d,1);return 0}function Xc(d,e,f,g,h){d=d|0;e=e|0;f=f|0;g=g|0;h=h|0;var i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0;i=d+16|0;j=c[i>>2]|0;k=d+41|0;l=a[k>>0]|0;m=d+36|0;n=b[m>>1]|0;o=d+68|0;p=c[o>>2]|0;c[o>>2]=h;h=Kc(d,e,f)|0;if(!h){c[o>>2]=p;return h|0}f=d+28|0;e=(c[f>>2]|0)+g|0;fd(d,e);switch(h|0){case 4:{g=c[(c[d+12>>2]|0)+180>>2]|0;c[e>>2]=g;q=(a[g+4>>0]|64)&255;break}case 6:{g=Ae(d,6588,23)|0;c[e>>2]=g;q=(a[g+4>>0]|64)&255;break}default:{g=c[d+8>>2]|0;r=g+-16|0;s=c[r+4>>2]|0;t=e;c[t>>2]=c[r>>2];c[t+4>>2]=s;q=c[g+-8>>2]|0}}c[e+8>>2]=q;q=e+16|0;c[d+8>>2]=q;c[i>>2]=j;a[k>>0]=l;b[m>>1]=n;if(!j)u=q;else{n=j;j=q;while(1){q=c[n+4>>2]|0;m=j>>>0<q>>>0?q:j;n=c[n+8>>2]|0;if(!n){u=m;break}else j=m}}j=u-(c[f>>2]|0)|0;f=j>>4;u=f+11+((f+1|0)/8|0)|0;f=(u|0)<1e6?u:1e6;if((j|0)>15999984){c[o>>2]=p;return h|0}if((f|0)>=(c[d+32>>2]|0)){c[o>>2]=p;return h|0}Lc(d,f);c[o>>2]=p;return h|0}function Yc(a,d,e,f){a=a|0;d=d|0;e=e|0;f=f|0;var g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0;g=Pa;Pa=Pa+64|0;h=g;i=a+36|0;b[i>>1]=(b[i>>1]|0)+1<<16>>16;c[h>>2]=d;c[h+56>>2]=e;c[h+52>>2]=f;f=h+16|0;c[f>>2]=0;e=h+24|0;c[e>>2]=0;d=h+28|0;c[d>>2]=0;j=h+36|0;c[j>>2]=0;k=h+40|0;c[k>>2]=0;l=h+48|0;c[l>>2]=0;m=h+4|0;c[m>>2]=0;n=h+12|0;c[n>>2]=0;o=Xc(a,133,h,(c[a+8>>2]|0)-(c[a+28>>2]|0)|0,c[a+68>>2]|0)|0;h=Hd(a,c[m>>2]|0,c[n>>2]|0,0)|0;c[m>>2]=h;c[n>>2]=0;Hd(a,c[f>>2]|0,c[e>>2]<<1,0)|0;Hd(a,c[d>>2]|0,c[j>>2]<<4,0)|0;Hd(a,c[k>>2]|0,c[l>>2]<<4,0)|0;b[i>>1]=(b[i>>1]|0)+-1<<16>>16;Pa=g;return o|0}function Zc(b,e){b=b|0;e=e|0;var f=0,g=0,h=0,i=0,j=0,k=0,l=0;f=Pa;Pa=Pa+16|0;g=f+8|0;h=f;i=c[e>>2]|0;j=c[i>>2]|0;c[i>>2]=j+-1;if(!j)k=jf(i)|0;else{j=i+4|0;i=c[j>>2]|0;c[j>>2]=i+1;k=d[i>>0]|0}i=c[e+52>>2]|0;j=(i|0)==0;if((k|0)==27){if(!j?(rm(i,98)|0)==0:0){c[h>>2]=6776;c[h+4>>2]=i;Pd(b,6734,h)|0;Jc(b,3)}l=Te(b,c[e>>2]|0,e+4|0,c[e+56>>2]|0)|0}else{if(!j?(rm(i,116)|0)==0:0){c[g>>2]=6783;c[g+4>>2]=i;Pd(b,6734,g)|0;Jc(b,3)}l=Rd(b,c[e>>2]|0,e+4|0,e+16|0,c[e+56>>2]|0,k)|0}k=l+6|0;if(!(a[k>>0]|0)){Pa=f;return}e=l+16|0;g=l+5|0;i=0;do{j=cd(b)|0;c[e+(i<<2)>>2]=j;if(a[j+5>>0]&3?a[g>>0]&4:0)jd(b,l,j);i=i+1|0}while(i>>>0<(d[k>>0]|0)>>>0);Pa=f;return}function _c(a,b,d,e,f){a=a|0;b=b|0;d=d|0;e=e|0;f=f|0;var g=0,h=0,i=0,j=0;g=Pa;Pa=Pa+48|0;h=g;i=g+20|0;c[i>>2]=a;c[i+4>>2]=d;c[i+8>>2]=e;c[i+12>>2]=f;f=i+16|0;Xe(h);j=Wa[d&255](a,h,18,e)|0;c[f>>2]=j;$c(b,i);Pa=g;return c[f>>2]|0}function $c(b,d){b=b|0;d=d|0;var e=0,f=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0,z=0,A=0,B=0,C=0,D=0,E=0,F=0,G=0,H=0,I=0,J=0,K=0,L=0,M=0,N=0,O=0,P=0,Q=0,R=0,S=0,T=0,U=0,V=0,W=0,X=0,Y=0,Z=0,_=0,$=0;e=Pa;Pa=Pa+16|0;f=e;c[f>>2]=c[b+64>>2];h=d+16|0;i=c[h>>2]|0;if(!i){j=Wa[c[d+4>>2]&255](c[d>>2]|0,f,4,c[d+8>>2]|0)|0;c[h>>2]=j;k=j}else k=i;c[f>>2]=c[b+68>>2];if(!k){i=Wa[c[d+4>>2]&255](c[d>>2]|0,f,4,c[d+8>>2]|0)|0;c[h>>2]=i;l=i}else l=k;a[f>>0]=a[b+76>>0]|0;if(!l){k=Wa[c[d+4>>2]&255](c[d>>2]|0,f,1,c[d+8>>2]|0)|0;c[h>>2]=k;m=k}else m=l;a[f>>0]=a[b+77>>0]|0;if(!m){l=Wa[c[d+4>>2]&255](c[d>>2]|0,f,1,c[d+8>>2]|0)|0;c[h>>2]=l;n=l}else n=m;a[f>>0]=a[b+78>>0]|0;if(!n){m=Wa[c[d+4>>2]&255](c[d>>2]|0,f,1,c[d+8>>2]|0)|0;c[h>>2]=m;o=m}else o=n;n=c[b+12>>2]|0;m=c[b+48>>2]|0;c[f>>2]=m;if(!o){l=d+4|0;k=d+8|0;i=Wa[c[l>>2]&255](c[d>>2]|0,f,4,c[k>>2]|0)|0;c[h>>2]=i;if(!i){j=Wa[c[l>>2]&255](c[d>>2]|0,n,m<<2,c[k>>2]|0)|0;c[h>>2]=j;m=c[b+44>>2]|0;c[f>>2]=m;if(!j){n=Wa[c[l>>2]&255](c[d>>2]|0,f,4,c[k>>2]|0)|0;c[h>>2]=n;p=n;q=f;r=m}else{p=j;q=f;r=m}}else{s=i;t=14}}else{s=o;t=14}if((t|0)==14){t=c[b+44>>2]|0;c[f>>2]=t;p=s;q=f;r=t}a:do if((r|0)>0){t=b+8|0;q=d+4|0;s=d+8|0;o=0;i=p;while(1){m=c[t>>2]|0;j=m+(o<<4)|0;n=m+(o<<4)+8|0;m=c[n>>2]|0;a[f>>0]=m&15;if(!i){k=Wa[c[q>>2]&255](c[d>>2]|0,f,1,c[s>>2]|0)|0;c[h>>2]=k;u=c[n>>2]|0;v=k}else{u=m;v=i}b:do switch(u&15){case 4:{m=c[j>>2]|0;if(!m){c[f>>2]=0;if(!v){k=Wa[c[q>>2]&255](c[d>>2]|0,f,4,c[s>>2]|0)|0;c[h>>2]=k;w=k}else w=v;x=w;break b}c[f>>2]=(c[m+12>>2]|0)+1;if(!v){k=Wa[c[q>>2]&255](c[d>>2]|0,f,4,c[s>>2]|0)|0;c[h>>2]=k;if(!k){n=Wa[c[q>>2]&255](c[d>>2]|0,m+16|0,c[f>>2]|0,c[s>>2]|0)|0;c[h>>2]=n;y=n}else y=k}else y=v;x=y;break}case 1:{a[f>>0]=c[j>>2];if(!v){k=Wa[c[q>>2]&255](c[d>>2]|0,f,1,c[s>>2]|0)|0;c[h>>2]=k;z=k}else z=v;x=z;break}case 3:{g[f>>3]=+g[j>>3];if(!v){k=Wa[c[q>>2]&255](c[d>>2]|0,f,8,c[s>>2]|0)|0;c[h>>2]=k;A=k}else A=v;x=A;break}default:x=v}while(0);o=o+1|0;if((o|0)==(r|0)){B=x;break a}else i=x}}else B=p;while(0);p=c[b+56>>2]|0;c[f>>2]=p;if(!B){x=Wa[c[d+4>>2]&255](c[d>>2]|0,f,4,c[d+8>>2]|0)|0;c[h>>2]=x;C=x}else C=B;if((p|0)>0){B=b+16|0;x=0;do{$c(c[(c[B>>2]|0)+(x<<2)>>2]|0,d);x=x+1|0}while((x|0)!=(p|0));D=c[h>>2]|0}else D=C;C=b+40|0;p=c[C>>2]|0;c[f>>2]=p;if(!D){x=Wa[c[d+4>>2]&255](c[d>>2]|0,f,4,c[d+8>>2]|0)|0;c[h>>2]=x;E=x}else E=D;if((p|0)>0){D=b+28|0;x=d+4|0;B=d+8|0;r=0;v=E;while(1){A=c[D>>2]|0;a[f>>0]=a[A+(r<<3)+4>>0]|0;if(!v){z=Wa[c[x>>2]&255](c[d>>2]|0,f,1,c[B>>2]|0)|0;c[h>>2]=z;F=c[D>>2]|0;G=z}else{F=A;G=v}a[f>>0]=a[F+(r<<3)+5>>0]|0;if(!G){A=Wa[c[x>>2]&255](c[d>>2]|0,f,1,c[B>>2]|0)|0;c[h>>2]=A;H=A}else H=G;r=r+1|0;if((r|0)==(p|0)){I=H;break}else v=H}}else I=E;E=d+12|0;if((c[E>>2]|0)==0?(H=c[b+36>>2]|0,(H|0)!=0):0){c[f>>2]=(c[H+12>>2]|0)+1;if(!I){v=d+4|0;p=d+8|0;r=Wa[c[v>>2]&255](c[d>>2]|0,f,4,c[p>>2]|0)|0;c[h>>2]=r;if(!r){G=Wa[c[v>>2]&255](c[d>>2]|0,H+16|0,c[f>>2]|0,c[p>>2]|0)|0;c[h>>2]=G;J=G}else J=r}else J=I;K=J}else{c[f>>2]=0;if(!I){J=Wa[c[d+4>>2]&255](c[d>>2]|0,f,4,c[d+8>>2]|0)|0;c[h>>2]=J;L=J}else L=I;K=L}if(!(c[E>>2]|0))M=c[b+52>>2]|0;else M=0;L=c[b+20>>2]|0;c[f>>2]=M;if(!K){I=d+4|0;J=d+8|0;r=Wa[c[I>>2]&255](c[d>>2]|0,f,4,c[J>>2]|0)|0;c[h>>2]=r;if(!r){G=Wa[c[I>>2]&255](c[d>>2]|0,L,M<<2,c[J>>2]|0)|0;c[h>>2]=G;N=G}else N=r}else N=K;if(!(c[E>>2]|0))O=c[b+60>>2]|0;else O=0;c[f>>2]=O;if(!N){K=Wa[c[d+4>>2]&255](c[d>>2]|0,f,4,c[d+8>>2]|0)|0;c[h>>2]=K;P=K}else P=N;if((O|0)>0){N=b+24|0;K=d+4|0;r=d+8|0;G=0;J=P;while(1){M=c[(c[N>>2]|0)+(G*12|0)>>2]|0;if(!M){c[f>>2]=0;if(!J){L=Wa[c[K>>2]&255](c[d>>2]|0,f,4,c[r>>2]|0)|0;c[h>>2]=L;Q=L}else Q=J;R=Q}else{c[f>>2]=(c[M+12>>2]|0)+1;do if(!J){L=Wa[c[K>>2]&255](c[d>>2]|0,f,4,c[r>>2]|0)|0;c[h>>2]=L;if(L|0){S=L;break}L=Wa[c[K>>2]&255](c[d>>2]|0,M+16|0,c[f>>2]|0,c[r>>2]|0)|0;c[h>>2]=L;S=L}else S=J;while(0);R=S}M=c[N>>2]|0;c[f>>2]=c[M+(G*12|0)+4>>2];if(!R){L=Wa[c[K>>2]&255](c[d>>2]|0,f,4,c[r>>2]|0)|0;c[h>>2]=L;T=c[N>>2]|0;U=L}else{T=M;U=R}c[f>>2]=c[T+(G*12|0)+8>>2];if(!U){M=Wa[c[K>>2]&255](c[d>>2]|0,f,4,c[r>>2]|0)|0;c[h>>2]=M;V=M}else V=U;G=G+1|0;if((G|0)==(O|0)){W=V;break}else J=V}}else W=P;if(!(c[E>>2]|0))X=c[C>>2]|0;else X=0;c[f>>2]=X;if(!W){C=Wa[c[d+4>>2]&255](c[d>>2]|0,f,4,c[d+8>>2]|0)|0;c[h>>2]=C;Y=C}else Y=W;if((X|0)<=0){Pa=e;return}W=b+28|0;b=d+4|0;C=d+8|0;E=0;P=Y;while(1){Y=c[(c[W>>2]|0)+(E<<3)>>2]|0;if(!Y){c[f>>2]=0;if(!P){V=Wa[c[b>>2]&255](c[d>>2]|0,f,4,c[C>>2]|0)|0;c[h>>2]=V;Z=V}else Z=P;_=Z}else{c[f>>2]=(c[Y+12>>2]|0)+1;do if(!P){V=Wa[c[b>>2]&255](c[d>>2]|0,f,4,c[C>>2]|0)|0;c[h>>2]=V;if(V|0){$=V;break}V=Wa[c[b>>2]&255](c[d>>2]|0,Y+16|0,c[f>>2]|0,c[C>>2]|0)|0;c[h>>2]=V;$=V}else $=P;while(0);_=$}E=E+1|0;if((E|0)==(X|0))break;else P=_}Pa=e;return}function ad(b,c){b=b|0;c=c|0;var d=0;d=od(b,38,(c<<4)+16|0,0,0)|0;a[d+6>>0]=c;return d|0}function bd(b,d){b=b|0;d=d|0;var e=0,f=0;e=d<<2;f=od(b,6,e+16|0,0,0)|0;c[f+12>>2]=0;a[f+6>>0]=d;if(!d)return f|0;Vn(f+16|0,0,e|0)|0;return f|0}function cd(a){a=a|0;var b=0;b=od(a,10,32,0,0)|0;c[b+8>>2]=b+16;c[b+24>>2]=0;return b|0}function dd(b,d){b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0;e=c[b+12>>2]|0;f=b+56|0;g=c[f>>2]|0;a:do if(!g)h=f;else{i=f;j=g;while(1){k=c[j+8>>2]|0;if(k>>>0<d>>>0){h=i;break a}if((k|0)==(d|0))break;k=c[j>>2]|0;if(!k){h=j;break a}else{l=j;j=k;i=l}}i=j+5|0;l=a[i>>0]^3;if(((a[e+60>>0]^3)&l)<<24>>24){m=j;return m|0}a[i>>0]=l;m=j;return m|0}while(0);g=od(b,10,32,h,0)|0;c[g+8>>2]=d;d=g+16|0;c[d>>2]=e+112;h=e+128+4|0;e=c[h>>2]|0;c[d+4>>2]=e;c[e+16>>2]=g;c[h>>2]=g;m=g;return m|0}function ed(a,b){a=a|0;b=b|0;var d=0,e=0;if((c[b+8>>2]|0)==(b+16|0)){Hd(a,b,32,0)|0;return}d=b+16|0;e=d+4|0;c[(c[e>>2]|0)+16>>2]=c[d>>2];c[(c[d>>2]|0)+16+4>>2]=c[e>>2];Hd(a,b,32,0)|0;return}function fd(b,d){b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0;e=c[b+12>>2]|0;f=b+56|0;g=c[f>>2]|0;if(!g)return;h=e+60|0;i=e+68|0;j=g;while(1){g=j+8|0;k=c[g>>2]|0;if(k>>>0<d>>>0){l=10;break}c[f>>2]=c[j>>2];if(!(((a[h>>0]^3)&(a[j+5>>0]^3))<<24>>24)){if((k|0)!=(j+16|0)){k=j+16|0;m=k+4|0;c[(c[m>>2]|0)+16>>2]=c[k>>2];c[(c[k>>2]|0)+16+4>>2]=c[m>>2]}Hd(b,j,32,0)|0}else{m=j+16|0;k=m+4|0;c[(c[k>>2]|0)+16>>2]=c[m>>2];c[(c[m>>2]|0)+16+4>>2]=c[k>>2];k=c[g>>2]|0;m=j+16|0;n=k;o=c[n+4>>2]|0;p=m;c[p>>2]=c[n>>2];c[p+4>>2]=o;c[j+24>>2]=c[k+8>>2];c[g>>2]=m;c[j>>2]=c[i>>2];c[i>>2]=j;nd(e,j)}j=c[f>>2]|0;if(!j){l=10;break}}if((l|0)==10)return}function gd(b){b=b|0;var d=0;d=od(b,9,80,0,0)|0;c[d+8>>2]=0;c[d+44>>2]=0;c[d+16>>2]=0;c[d+56>>2]=0;c[d+12>>2]=0;c[d+32>>2]=0;c[d+48>>2]=0;c[d+20>>2]=0;c[d+52>>2]=0;c[d+28>>2]=0;c[d+40>>2]=0;a[d+76>>0]=0;a[d+77>>0]=0;a[d+78>>0]=0;c[d+24>>2]=0;c[d+60>>2]=0;c[d+64>>2]=0;c[d+68>>2]=0;c[d+36>>2]=0;return d|0}function hd(a,b){a=a|0;b=b|0;Hd(a,c[b+12>>2]|0,c[b+48>>2]<<2,0)|0;Hd(a,c[b+16>>2]|0,c[b+56>>2]<<2,0)|0;Hd(a,c[b+8>>2]|0,c[b+44>>2]<<4,0)|0;Hd(a,c[b+20>>2]|0,c[b+52>>2]<<2,0)|0;Hd(a,c[b+24>>2]|0,(c[b+60>>2]|0)*12|0,0)|0;Hd(a,c[b+28>>2]|0,c[b+40>>2]<<3,0)|0;Hd(a,b,80,0)|0;return}function id(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0;e=c[a+60>>2]|0;if((e|0)<=0){f=0;return f|0}g=c[a+24>>2]|0;a=b;b=0;while(1){if((c[g+(b*12|0)+4>>2]|0)>(d|0)){f=0;h=8;break}if((c[g+(b*12|0)+8>>2]|0)>(d|0)){i=a+-1|0;if(!i){h=6;break}else j=i}else j=a;i=b+1|0;if((i|0)<(e|0)){a=j;b=i}else{f=0;h=8;break}}if((h|0)==6){f=(c[g+(b*12|0)>>2]|0)+16|0;return f|0}else if((h|0)==8)return f|0;return 0}function jd(b,e,f){b=b|0;e=e|0;f=f|0;var g=0;g=c[b+12>>2]|0;if((d[g+61>>0]|0)<2){kd(g,f);return}else{f=e+5|0;a[f>>0]=a[g+60>>0]&3|a[f>>0]&-72;return}}function kd(b,d){b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0;e=d+5|0;a[e>>0]=a[e>>0]&-4;switch(a[d+4>>0]|0){case 20:case 4:{f=(c[d+12>>2]|0)+17|0;break}case 7:{g=c[d+8>>2]|0;if(g|0?a[g+5>>0]&3:0)kd(b,g);g=c[d+12>>2]|0;if(g|0?a[g+5>>0]&3:0)kd(b,g);f=(c[d+16>>2]|0)+24|0;break}case 10:{g=d+8|0;h=c[g>>2]|0;if((c[h+8>>2]&64|0)!=0?(i=c[h>>2]|0,(a[i+5>>0]&3)!=0):0){kd(b,i);j=c[g>>2]|0}else j=h;if((j|0)==(d+16|0))f=32;else return;break}case 6:{j=b+84|0;c[d+8>>2]=c[j>>2];c[j>>2]=d;return}case 38:{j=b+84|0;c[d+8>>2]=c[j>>2];c[j>>2]=d;return}case 5:{j=b+84|0;c[d+24>>2]=c[j>>2];c[j>>2]=d;return}case 8:{j=b+84|0;c[d+60>>2]=c[j>>2];c[j>>2]=d;return}case 9:{j=b+84|0;c[d+72>>2]=c[j>>2];c[j>>2]=d;return}default:return}a[e>>0]=a[e>>0]|4;e=b+16|0;c[e>>2]=(c[e>>2]|0)+f;return}function ld(b,d){b=b|0;d=d|0;var e=0;e=c[b+12>>2]|0;b=d+5|0;a[b>>0]=a[b>>0]&-5;b=e+88|0;c[d+24>>2]=c[b>>2];c[b>>2]=d;return}function md(b,e,f){b=b|0;e=e|0;f=f|0;var g=0,h=0;if(c[e+32>>2]|0){g=c[b+12>>2]|0;h=e+5|0;a[h>>0]=a[h>>0]&-5;h=g+88|0;c[e+72>>2]=c[h>>2];c[h>>2]=e;return}if(!(a[f+5>>0]&3))return;h=e+5|0;e=a[h>>0]|0;if(!(e&4))return;g=c[b+12>>2]|0;if((d[g+61>>0]|0)<2){kd(g,f);return}else{a[h>>0]=a[g+60>>0]&3|e&-72;return}}function nd(b,e){b=b|0;e=e|0;var f=0,g=0,h=0;f=e+5|0;g=a[f>>0]|0;h=g&255;if(h&7|0)return;if((a[b+62>>0]|0)!=2?(d[b+61>>0]|0)>=2:0){a[f>>0]=h&184|a[b+60>>0]&3;return}a[f>>0]=g&-69|4;g=c[e+8>>2]|0;if(!(c[g+8>>2]&64))return;e=c[g>>2]|0;if(!(a[e+5>>0]&3))return;kd(b,e);return}function od(b,d,e,f,g){b=b|0;d=d|0;e=e|0;f=f|0;g=g|0;var h=0,i=0;h=c[b+12>>2]|0;i=(Hd(b,0,d&15,e)|0)+g|0;g=(f|0)==0?h+68|0:f;a[i+5>>0]=a[h+60>>0]&3;a[i+4>>0]=d;c[i>>2]=c[g>>2];c[g>>2]=i;return i|0}function pd(b,e,f){b=b|0;e=e|0;f=f|0;var g=0,h=0,i=0,j=0,k=0;g=c[b+12>>2]|0;h=e+5|0;if((f|0)==0|(a[h>>0]&24)!=0)return;if(a[f+6>>0]&4)return;if(!(Re(f,2,c[g+192>>2]|0)|0))return;f=g+76|0;i=c[f>>2]|0;if((i|0)==(e|0)){do j=qd(b,i,1)|0;while((j|0)==(i|0));c[f>>2]=j}j=g+68|0;while(1){f=c[j>>2]|0;if((f|0)==(e|0))break;else j=f}c[j>>2]=c[e>>2];j=g+72|0;c[e>>2]=c[j>>2];c[j>>2]=e;e=a[h>>0]|16;a[h>>0]=e;j=e&255;if((d[g+61>>0]|0)<2)k=j&191;else k=j&184|a[g+60>>0]&3;a[h>>0]=k;return}function qd(b,e,f){b=b|0;e=e|0;f=f|0;var g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0;g=b+12|0;h=c[g>>2]|0;i=d[h+60>>0]|0;j=i^3;k=(a[h+62>>0]|0)==2;h=k?255:184;l=k?64:i&3;i=k?64:0;k=c[e>>2]|0;if(!k){m=0;return m|0}n=e;e=f;f=k;a:while(1){if(!e){m=n;o=23;break}e=e+-1|0;k=f+5|0;p=d[k>>0]|0;b:do if(!((p^3)&j)){q=c[f>>2]|0;c[n>>2]=q;switch(a[f+4>>0]|0){case 9:{hd(b,f);r=n;o=21;break b;break}case 6:{Hd(b,f,(d[f+6>>0]<<2)+16|0,0)|0;r=n;o=21;break b;break}case 38:{Hd(b,f,(d[f+6>>0]<<4)+16|0,0)|0;r=n;o=21;break b;break}case 10:{ed(b,f);r=n;o=21;break b;break}case 5:{Me(b,f);r=n;o=21;break b;break}case 8:{re(b,f);r=n;o=21;break b;break}case 7:{Hd(b,f,(c[f+16>>2]|0)+24|0,0)|0;r=n;o=21;break b;break}case 4:{s=(c[g>>2]|0)+28|0;c[s>>2]=(c[s>>2]|0)+-1;break}case 20:break;default:{t=n;u=q;break b}}Hd(b,f,(c[f+12>>2]|0)+17|0,0)|0;r=n;o=21}else{if(i&p|0){m=0;o=23;break a}if(((a[f+4>>0]|0)==8?c[f+28>>2]|0:0)?(qd(b,f+56|0,-3)|0,pe(f),(a[(c[g>>2]|0)+62>>0]|0)!=1):0)Nc(f);a[k>>0]=h&p|l;r=f;o=21}while(0);if((o|0)==21){o=0;t=r;u=c[r>>2]|0}if(!u){m=0;o=23;break}else{n=t;f=u}}if((o|0)==23)return m|0;return 0}function rd(b,e){b=b|0;e=e|0;var f=0,g=0,h=0,i=0,j=0;f=b+12|0;g=c[f>>2]|0;h=g+62|0;if((d[h>>0]|0)==(e|0))return;if((e|0)==2){e=g+61|0;if(a[e>>0]|0)do sd(b)|0;while((a[e>>0]|0)!=0);c[g+20>>2]=(c[g+12>>2]|0)+(c[g+8>>2]|0);a[h>>0]=2;return}a[h>>0]=0;a[g+61>>0]=2;c[g+64>>2]=0;h=g+72|0;do i=qd(b,h,1)|0;while((i|0)==(h|0));c[g+80>>2]=i;i=g+68|0;do j=qd(b,i,1)|0;while((j|0)==(i|0));c[g+76>>2]=j;j=(c[f>>2]|0)+61|0;if(1<<d[j>>0]&-29|0)return;do sd(b)|0;while(!(1<<d[j>>0]&-29|0));return}function sd(b){b=b|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0,z=0,A=0,B=0,C=0,D=0,E=0,F=0,G=0;e=Pa;Pa=Pa+16|0;f=e;g=b+12|0;h=c[g>>2]|0;i=h+61|0;switch(a[i>>0]|0){case 5:{j=h+16|0;c[j>>2]=c[h+32>>2]<<2;k=h+84|0;c[k>>2]=0;c[k+4>>2]=0;c[k+8>>2]=0;c[k+12>>2]=0;c[k+16>>2]=0;k=c[h+172>>2]|0;if(k|0?a[k+5>>0]&3:0)kd(h,k);if(c[h+48>>2]&64|0?(k=c[h+40>>2]|0,a[k+5>>0]&3):0)kd(h,k);td(h);k=c[h+104>>2]|0;if(k|0){l=h+60|0;m=k;do{k=m+5|0;a[k>>0]=a[l>>0]&3|a[k>>0]&-72;kd(h,m);m=c[m>>2]|0}while((m|0)!=0)}a[i>>0]=0;n=c[j>>2]|0;Pa=e;return n|0}case 0:{j=h+84|0;if(c[j>>2]|0){m=h+16|0;l=c[m>>2]|0;ud(h);n=(c[m>>2]|0)-l|0;Pa=e;return n|0}a[i>>0]=1;l=h+16|0;m=c[l>>2]|0;k=h+20|0;c[k>>2]=m;if(a[b+5>>0]&3)kd(h,b);if(c[h+48>>2]&64|0?(o=c[h+40>>2]|0,a[o+5>>0]&3):0)kd(h,o);td(h);o=h+112|0;p=c[h+128+4>>2]|0;if((p|0)!=(o|0)){q=p;do{if(((a[q+5>>0]&7)==0?(p=c[q+8>>2]|0,c[p+8>>2]&64|0):0)?(r=c[p>>2]|0,a[r+5>>0]&3):0)kd(h,r);q=c[q+16+4>>2]|0}while((q|0)!=(o|0))}if(c[j>>2]|0)do ud(h);while((c[j>>2]|0)!=0);o=(c[l>>2]|0)-m|0;m=h+92|0;q=c[m>>2]|0;r=h+88|0;p=c[r>>2]|0;s=h+96|0;t=c[s>>2]|0;c[s>>2]=0;c[r>>2]=0;c[m>>2]=0;c[j>>2]=p;if(p|0)do ud(h);while((c[j>>2]|0)!=0);c[j>>2]=q;if(q|0)do ud(h);while((c[j>>2]|0)!=0);c[j>>2]=t;if(t|0)do ud(h);while((c[j>>2]|0)!=0);t=o-(c[l>>2]|0)|0;do{o=c[s>>2]|0;c[s>>2]=0;if(!o)break;q=0;p=o;while(1){o=p;p=c[p+24>>2]|0;if(vd(h,o)|0)if(!(c[j>>2]|0))u=1;else{do ud(h);while((c[j>>2]|0)!=0);u=1}else u=q;if(!p)break;else q=u}}while((u|0)!=0);wd(h,c[m>>2]|0,0);u=h+100|0;wd(h,c[u>>2]|0,0);q=c[m>>2]|0;p=c[u>>2]|0;o=c[l>>2]|0;r=c[g>>2]|0;v=r+104|0;while(1){w=c[v>>2]|0;if(!w)break;else v=w}w=t+o|0;o=r+72|0;r=c[o>>2]|0;if(r|0){t=o;o=v;v=r;while(1){r=v+5|0;x=d[r>>0]|0;if(!(x&3)){y=v;z=o}else{a[r>>0]=x|8;c[t>>2]=c[v>>2];c[v>>2]=c[o>>2];c[o>>2]=v;y=t;z=v}v=c[y>>2]|0;if(!v)break;else{t=y;o=z}}}z=c[h+104>>2]|0;if(z|0){o=h+60|0;y=z;do{z=y+5|0;a[z>>0]=a[o>>0]&3|a[z>>0]&-72;kd(h,y);y=c[y>>2]|0}while((y|0)!=0)}if(c[j>>2]|0)do ud(h);while((c[j>>2]|0)!=0);y=w-(c[l>>2]|0)|0;while(1){w=c[s>>2]|0;c[s>>2]=0;if(!w)break;o=0;z=w;while(1){w=z;z=c[z+24>>2]|0;if(vd(h,w)|0)if(!(c[j>>2]|0))A=1;else{do ud(h);while((c[j>>2]|0)!=0);A=1}else A=o;if(!z)break;else o=A}if(!A){B=70;break}}if((B|0)==70?(A=c[s>>2]|0,A|0):0){s=A;do{A=c[s+16>>2]|0;j=a[s+7>>0]|0;o=A+(1<<(j&255)<<5)|0;if(j<<24>>24!=31){j=A;do{A=j+8|0;do if(c[A>>2]|0){z=j+24|0;w=c[z>>2]|0;if(!(w&64))break;t=c[j+16>>2]|0;if((w&15|0)==4){if(!t)break;if(!(a[t+5>>0]&3))break;kd(h,t);break}else{w=t+5|0;if(!(a[w>>0]&3))break;c[A>>2]=0;if(!(a[w>>0]&3))break;c[z>>2]=11;break}}while(0);j=j+32|0}while(j>>>0<o>>>0)}s=c[s+24>>2]|0}while((s|0)!=0)}s=c[u>>2]|0;if(s|0){o=s;do{s=c[o+16>>2]|0;j=a[o+7>>0]|0;A=s+(1<<(j&255)<<5)|0;if(j<<24>>24!=31){j=s;do{s=j+8|0;do if(c[s>>2]|0){z=j+24|0;w=c[z>>2]|0;if(!(w&64))break;t=c[j+16>>2]|0;if((w&15|0)==4){if(!t)break;if(!(a[t+5>>0]&3))break;kd(h,t);break}else{w=t+5|0;if(!(a[w>>0]&3))break;c[s>>2]=0;if(!(a[w>>0]&3))break;c[z>>2]=11;break}}while(0);j=j+32|0}while(j>>>0<A>>>0)}o=c[o+24>>2]|0}while((o|0)!=0)}wd(h,c[m>>2]|0,q);wd(h,c[u>>2]|0,p);p=h+60|0;a[p>>0]=a[p>>0]^3;p=y+(c[l>>2]|0)|0;c[k>>2]=(c[k>>2]|0)+p;k=c[g>>2]|0;a[k+61>>0]=2;c[k+64>>2]=0;l=k+72|0;y=0;do{y=y+1|0;C=qd(b,l,1)|0}while((C|0)==(l|0));c[k+80>>2]=C;C=k+68|0;l=0;do{l=l+1|0;D=qd(b,C,1)|0}while((D|0)==(C|0));c[k+76>>2]=D;n=((l+y|0)*5|0)+p|0;Pa=e;return n|0}case 2:{p=h+64|0;y=h+32|0;l=h+24|0;D=0;while(1){k=(c[p>>2]|0)+D|0;C=c[y>>2]|0;if((k|0)>=(C|0)){E=D;F=k;G=C;break}qd(b,(c[l>>2]|0)+(k<<2)|0,-3)|0;D=D+1|0;if(D>>>0>=80){B=108;break}}if((B|0)==108){E=80;F=(c[p>>2]|0)+D|0;G=c[y>>2]|0}c[p>>2]=F;if((F|0)>=(G|0))a[i>>0]=3;n=E*5|0;Pa=e;return n|0}case 3:{E=h+80|0;G=c[E>>2]|0;if(!G){a[i>>0]=4;n=0;Pa=e;return n|0}else{F=qd(b,G,80)|0;c[E>>2]=F;n=400;Pa=e;return n|0}break}case 4:{F=h+76|0;E=c[F>>2]|0;if(E|0){G=qd(b,E,80)|0;c[F>>2]=G;n=400;Pa=e;return n|0}c[f>>2]=c[h+172>>2];qd(b,f,1)|0;f=c[g>>2]|0;if((a[f+62>>0]|0)!=1){g=(c[f+32>>2]|0)/2|0;if((c[f+28>>2]|0)>>>0<g>>>0)ze(b,g);g=f+144|0;h=f+152|0;f=Hd(b,c[g>>2]|0,c[h>>2]|0,0)|0;c[g>>2]=f;c[h>>2]=0}a[i>>0]=5;n=5;Pa=e;return n|0}default:{n=0;Pa=e;return n|0}}return 0}function td(b){b=b|0;var d=0;d=c[b+252>>2]|0;if(d|0?a[d+5>>0]&3:0)kd(b,d);d=c[b+256>>2]|0;if(d|0?a[d+5>>0]&3:0)kd(b,d);d=c[b+260>>2]|0;if(d|0?a[d+5>>0]&3:0)kd(b,d);d=c[b+264>>2]|0;if(d|0?a[d+5>>0]&3:0)kd(b,d);d=c[b+268>>2]|0;if(d|0?a[d+5>>0]&3:0)kd(b,d);d=c[b+272>>2]|0;if(d|0?a[d+5>>0]&3:0)kd(b,d);d=c[b+276>>2]|0;if(d|0?a[d+5>>0]&3:0)kd(b,d);d=c[b+280>>2]|0;if(d|0?a[d+5>>0]&3:0)kd(b,d);d=c[b+284>>2]|0;if(!d)return;if(!(a[d+5>>0]&3))return;kd(b,d);return}function ud(b){b=b|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0,z=0,A=0,B=0,C=0,D=0,E=0,F=0,G=0,H=0,I=0,J=0,K=0,L=0,M=0,N=0,O=0,P=0;e=b+84|0;f=c[e>>2]|0;g=f+5|0;a[g>>0]=a[g>>0]|4;switch(a[f+4>>0]|0){case 5:{h=f+24|0;c[e>>2]=c[h>>2];i=f+8|0;j=c[i>>2]|0;do if(j){if(!(a[j+6>>0]&8)){k=Re(j,3,c[b+196>>2]|0)|0;l=c[i>>2]|0;if(!l)m=k;else{n=k;o=l;p=5}}else{n=0;o=j;p=5}if((p|0)==5)if(!(a[o+5>>0]&3))m=n;else{kd(b,o);m=n}if(((m|0)!=0?(c[m+8>>2]&15|0)==4:0)?(l=(c[m>>2]|0)+16|0,k=rm(l,107)|0,q=(k|0)!=0,k=(rm(l,118)|0)!=0,q|k):0){a[g>>0]=a[g>>0]&-5;if(q)if(k){k=b+100|0;c[h>>2]=c[k>>2];c[k>>2]=f;break}else{vd(b,f)|0;break}k=c[f+16>>2]|0;q=a[f+7>>0]|0;l=k+(1<<(q&255)<<5)|0;r=(c[f+28>>2]|0)>0&1;if(q<<24>>24==31)s=r;else{q=k;k=r;while(1){r=q+8|0;t=q+24|0;u=(c[t>>2]&64|0)==0;a:do if(!(c[r>>2]|0))if(!u?(a[(c[q+16>>2]|0)+5>>0]&3)!=0:0){c[t>>2]=11;v=k}else v=k;else{if(!u?(w=c[q+16>>2]|0,a[w+5>>0]&3):0)kd(b,w);if(!k){w=c[r>>2]|0;do if(w&64|0){x=c[q>>2]|0;if((w&15|0)!=4)if(!(a[x+5>>0]&3))break;else{v=1;break a}if(x|0?a[x+5>>0]&3:0)kd(b,x)}while(0);v=0}else v=k}while(0);q=q+32|0;if(q>>>0>=l>>>0){s=v;break}else k=v}}if(!s){k=b+88|0;c[h>>2]=c[k>>2];c[k>>2]=f;break}else{k=b+92|0;c[h>>2]=c[k>>2];c[k>>2]=f;break}}else p=35}else p=35;while(0);if((p|0)==35){p=f+16|0;h=c[p>>2]|0;s=h+(1<<d[f+7>>0]<<5)|0;v=f+28|0;m=c[v>>2]|0;if((m|0)>0){n=f+12|0;o=0;j=m;while(1){m=c[n>>2]|0;if((c[m+(o<<4)+8>>2]&64|0)!=0?(i=c[m+(o<<4)>>2]|0,(a[i+5>>0]&3)!=0):0){kd(b,i);y=c[v>>2]|0}else y=j;o=o+1|0;if((o|0)>=(y|0))break;else j=y}z=c[p>>2]|0}else z=h;if(z>>>0<s>>>0){h=z;do{z=h+8|0;p=c[z>>2]|0;y=h+24|0;j=(c[y>>2]&64|0)==0;if(!p){if(!j?a[(c[h+16>>2]|0)+5>>0]&3:0)c[y>>2]=11}else{if(!j?(j=c[h+16>>2]|0,(a[j+5>>0]&3)!=0):0){kd(b,j);A=c[z>>2]|0}else A=p;if(A&64|0?(p=c[h>>2]|0,a[p+5>>0]&3):0)kd(b,p)}h=h+32|0}while(h>>>0<s>>>0)}}B=(c[f+28>>2]<<4)+32+(32<<d[f+7>>0])|0;break}case 6:{c[e>>2]=c[f+8>>2];s=c[f+12>>2]|0;if(s|0?a[s+5>>0]&3:0)kd(b,s);s=f+6|0;h=a[s>>0]|0;if(!(h<<24>>24))B=16;else{A=0;p=h;while(1){h=c[f+16+(A<<2)>>2]|0;if((h|0)!=0?(a[h+5>>0]&3)!=0:0){kd(b,h);C=a[s>>0]|0}else C=p;A=A+1|0;D=C&255;if(A>>>0>=D>>>0)break;else p=C}B=(D<<2)+16|0}break}case 38:{c[e>>2]=c[f+8>>2];D=f+6|0;C=a[D>>0]|0;if(!(C<<24>>24))B=16;else{p=0;A=C;while(1){if((c[f+16+(p<<4)+8>>2]&64|0)!=0?(C=c[f+16+(p<<4)>>2]|0,(a[C+5>>0]&3)!=0):0){kd(b,C);E=a[D>>0]|0}else E=A;p=p+1|0;F=E&255;if(p>>>0>=F>>>0)break;else A=E}B=(F<<4)+16|0}break}case 8:{F=f+60|0;c[e>>2]=c[F>>2];E=b+88|0;c[F>>2]=c[E>>2];c[E>>2]=f;a[g>>0]=a[g>>0]&-5;g=f+28|0;E=c[g>>2]|0;if(!E)B=1;else{F=f+8|0;A=c[F>>2]|0;if(E>>>0<A>>>0){p=E;D=A;while(1){if((c[p+8>>2]&64|0)!=0?(A=c[p>>2]|0,(a[A+5>>0]&3)!=0):0){kd(b,A);G=c[F>>2]|0}else G=D;A=p+16|0;if(A>>>0<G>>>0){p=A;D=G}else{H=A;break}}}else H=E;if((a[b+61>>0]|0)==1){E=c[f+32>>2]|0;G=(c[g>>2]|0)+(E<<4)|0;if(H>>>0<G>>>0){g=H;do{c[g+8>>2]=0;g=g+16|0}while(g>>>0<G>>>0);I=E}else I=E}else I=c[f+32>>2]|0;B=(I<<4)+112|0}break}case 9:{c[e>>2]=c[f+72>>2];e=f+32|0;I=c[e>>2]|0;if(I|0?a[I+5>>0]&3:0)c[e>>2]=0;e=c[f+36>>2]|0;if(e|0?a[e+5>>0]&3:0)kd(b,e);e=f+44|0;I=c[e>>2]|0;if((I|0)>0){E=f+8|0;G=0;g=I;while(1){I=c[E>>2]|0;if((c[I+(G<<4)+8>>2]&64|0)!=0?(H=c[I+(G<<4)>>2]|0,(a[H+5>>0]&3)!=0):0){kd(b,H);J=c[e>>2]|0}else J=g;G=G+1|0;if((G|0)>=(J|0))break;else g=J}}J=f+40|0;g=c[J>>2]|0;if((g|0)>0){G=f+28|0;E=0;H=g;while(1){g=c[(c[G>>2]|0)+(E<<3)>>2]|0;if((g|0)!=0?(a[g+5>>0]&3)!=0:0){kd(b,g);K=c[J>>2]|0}else K=H;E=E+1|0;if((E|0)>=(K|0))break;else H=K}}K=f+56|0;H=c[K>>2]|0;if((H|0)>0){E=f+16|0;G=0;g=H;while(1){I=c[(c[E>>2]|0)+(G<<2)>>2]|0;if((I|0)!=0?(a[I+5>>0]&3)!=0:0){kd(b,I);L=c[K>>2]|0}else L=g;G=G+1|0;if((G|0)>=(L|0)){M=L;break}else g=L}}else M=H;H=f+60|0;L=c[H>>2]|0;if((L|0)>0){g=f+24|0;G=0;E=L;while(1){I=c[(c[g>>2]|0)+(G*12|0)>>2]|0;if((I|0)!=0?(a[I+5>>0]&3)!=0:0){kd(b,I);N=c[H>>2]|0}else N=E;G=G+1|0;if((G|0)>=(N|0))break;else E=N}O=N;P=c[K>>2]|0}else{O=L;P=M}B=(O*12|0)+80+(c[e>>2]<<4)+(c[J>>2]<<3)+((c[f+48>>2]|0)+P+(c[f+52>>2]|0)<<2)|0;break}default:return}f=b+16|0;c[f>>2]=(c[f>>2]|0)+B;return}function vd(b,e){b=b|0;e=e|0;var f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0,z=0;f=e+16|0;g=c[f>>2]|0;h=g+(1<<(d[e+7>>0]|0)<<5)|0;i=e+28|0;j=c[i>>2]|0;if((j|0)>0){k=e+12|0;l=0;m=0;n=j;while(1){j=c[k>>2]|0;if((c[j+(m<<4)+8>>2]&64|0)!=0?(o=c[j+(m<<4)>>2]|0,(a[o+5>>0]&3)!=0):0){kd(b,o);p=1;q=c[i>>2]|0}else{p=l;q=n}m=m+1|0;if((m|0)>=(q|0))break;else{l=p;n=q}}r=p;s=c[f>>2]|0}else{r=0;s=g}if(s>>>0<h>>>0){g=s;s=0;f=0;p=r;while(1){q=g+8|0;n=c[q>>2]|0;l=g+24|0;m=c[l>>2]|0;i=(m&64|0)==0;a:do if(!n)if(!i?(a[(c[g+16>>2]|0)+5>>0]&3)!=0:0){c[l>>2]=11;t=s;u=f;v=p}else{t=s;u=f;v=p}else{do if(i){w=n;x=19}else{k=c[g+16>>2]|0;if((m&15|0)==4){if(!k){w=n;x=19;break}if(!(a[k+5>>0]&3)){w=n;x=19;break}kd(b,k);w=c[q>>2]|0;x=19;break}o=(n&64|0)==0;if(!(a[k+5>>0]&3))if(o){t=s;u=f;v=p;break a}else break;if(o){t=s;u=1;v=p;break a}t=(a[(c[g>>2]|0)+5>>0]&3)==0?s:1;u=1;v=p;break a}while(0);if((x|0)==19?(x=0,(w&64|0)==0):0){t=s;u=f;v=p;break}o=c[g>>2]|0;if(!(a[o+5>>0]&3)){t=s;u=f;v=p}else{kd(b,o);t=s;u=f;v=1}}while(0);g=g+32|0;if(g>>>0>=h>>>0)break;else{s=t;f=u;p=v}}if(t|0){t=b+96|0;c[e+24>>2]=c[t>>2];c[t>>2]=e;y=v;return y|0}if(!u)z=v;else{u=b+100|0;c[e+24>>2]=c[u>>2];c[u>>2]=e;y=v;return y|0}}else z=r;r=b+88|0;c[e+24>>2]=c[r>>2];c[r>>2]=e;y=z;return y|0}function wd(b,e,f){b=b|0;e=e|0;f=f|0;var g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0;if((e|0)==(f|0))return;g=e;do{e=g+16|0;h=c[e>>2]|0;i=h+(1<<(d[g+7>>0]|0)<<5)|0;j=g+28|0;if((c[j>>2]|0)>0){k=g+12|0;l=0;do{m=c[k>>2]|0;if(xd(b,m+(l<<4)|0)|0)c[m+(l<<4)+8>>2]=0;l=l+1|0}while((l|0)<(c[j>>2]|0));n=c[e>>2]|0}else n=h;if(n>>>0<i>>>0){j=n;do{l=j+8|0;if(((c[l>>2]|0?xd(b,j)|0:0)?(c[l>>2]=0,l=j+24|0,c[l>>2]&64|0):0)?a[(c[j+16>>2]|0)+5>>0]&3:0)c[l>>2]=11;j=j+32|0}while(j>>>0<i>>>0)}g=c[g+24>>2]|0}while((g|0)!=(f|0));return}function xd(b,d){b=b|0;d=d|0;var e=0,f=0,g=0;e=c[d+8>>2]|0;if(!(e&64)){f=0;return f|0}g=c[d>>2]|0;if((e&15|0)!=4){f=a[g+5>>0]&3;return f|0}if(!g){f=0;return f|0}if(!(a[g+5>>0]&3)){f=0;return f|0}kd(b,g);f=0;return f|0}function yd(a,b){a=a|0;b=b|0;var e=0;e=(c[a+12>>2]|0)+61|0;if(1<<(d[e>>0]|0)&b|0)return;do sd(a)|0;while(!(1<<(d[e>>0]|0)&b|0));return}function zd(b){b=b|0;var d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0;d=b+12|0;e=c[d>>2]|0;f=e+104|0;g=f;while(1){h=c[g>>2]|0;if(!h)break;else g=h}h=e+72|0;i=c[h>>2]|0;if(!i)j=f;else{f=g;g=i;while(1){i=g+5|0;a[i>>0]=a[i>>0]|8;c[h>>2]=c[g>>2];c[g>>2]=c[f>>2];c[f>>2]=g;i=c[h>>2]|0;if(!i)break;else{k=g;g=i;f=k}}j=(c[d>>2]|0)+104|0}d=c[j>>2]|0;if(d|0){f=d;do{d=f+5|0;a[d>>0]=a[d>>0]&-65;Ad(b,0);f=c[j>>2]|0}while((f|0)!=0)}a[e+60>>0]=3;a[e+62>>0]=0;qd(b,h,-3)|0;qd(b,e+68|0,-3)|0;h=e+32|0;if((c[h>>2]|0)<=0)return;f=e+24|0;e=0;do{qd(b,(c[f>>2]|0)+(e<<2)|0,-3)|0;e=e+1|0}while((e|0)<(c[h>>2]|0));return}function Ad(b,e){b=b|0;e=e|0;var f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0;f=Pa;Pa=Pa+32|0;g=f+16|0;h=f;i=c[b+12>>2]|0;j=i+104|0;k=c[j>>2]|0;c[j>>2]=c[k>>2];j=i+68|0;c[k>>2]=c[j>>2];c[j>>2]=k;j=k+5|0;l=a[j>>0]|0;a[j>>0]=l&-17;if((d[i+61>>0]|0)>=2)a[j>>0]=a[i+60>>0]&3|l&-88;c[h>>2]=k;l=h+8|0;c[l>>2]=(a[k+4>>0]|64)&255;k=Se(b,h,2)|0;if(!k){Pa=f;return}j=k+8|0;if((c[j>>2]&15|0)!=6){Pa=f;return}m=b+41|0;n=a[m>>0]|0;o=i+63|0;i=a[o>>0]|0;a[m>>0]=0;a[o>>0]=0;p=b+8|0;q=c[p>>2]|0;r=k;k=c[r+4>>2]|0;s=q;c[s>>2]=c[r>>2];c[s+4>>2]=k;c[q+8>>2]=c[j>>2];j=c[p>>2]|0;q=h;h=c[q+4>>2]|0;k=j+16|0;c[k>>2]=c[q>>2];c[k+4>>2]=h;c[j+24>>2]=c[l>>2];l=c[p>>2]|0;c[p>>2]=l+32;j=Xc(b,134,0,l-(c[b+28>>2]|0)|0,0)|0;a[m>>0]=n;a[o>>0]=i;if(!((e|0)!=0&(j|0)!=0)){Pa=f;return}if((j|0)!=2){t=j;Jc(b,t)}j=c[p>>2]|0;if((c[j+-8>>2]&15|0)==4)u=(c[j+-16>>2]|0)+16|0;else u=6788;c[g>>2]=u;Pd(b,6799,g)|0;t=5;Jc(b,t)}function Bd(a,b){a=a|0;b=b|0;Rc(a,(c[a+8>>2]|0)+-32|0,0,0);return}function Cd(b){b=b|0;var d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0;d=c[b+12>>2]|0;do if((a[d+62>>0]|0)==2){e=d+20|0;f=c[e>>2]|0;if(!f){Dd(b,0);g=(c[d+12>>2]|0)+(c[d+8>>2]|0)|0;h=g;i=d+61|0;j=g}else{g=d+61|0;if((a[g>>0]|0)!=5)do sd(b)|0;while((a[g>>0]|0)!=5);a[g>>0]=0;k=(c[d+12>>2]|0)+(c[d+8>>2]|0)|0;l=k>>>0>(H(c[d+160>>2]|0,(f>>>0)/100|0)|0)>>>0;h=k;i=g;j=l?0:f}c[e>>2]=j;l=(h|0)/100|0;k=c[d+156>>2]|0;m=H(k,0-l|0)|0;ne(d,((k|0)<(2147483644/(l|0)|0|0)?m:-2147483644)+h|0);n=i}else{m=d+12|0;l=c[d+164>>2]|0;k=(l|0)>40?l:40;l=((c[m>>2]|0)/200|0)+1|0;o=H(k,l)|0;p=d+61|0;q=(l|0)<(2147483644/(k>>>0)|0|0)?o:2147483644;do{q=q-(sd(b)|0)|0;r=(a[p>>0]|0)==5;if((q|0)<=-1600){s=12;break}}while(!r);if((s|0)==12?!r:0){ne(d,((q|0)/(k|0)|0)*200|0);n=p;break}e=(c[d+20>>2]|0)/100|0;f=c[d+156>>2]|0;g=H(f,0-e|0)|0;ne(d,(c[m>>2]|0)+(c[d+8>>2]|0)+((f|0)<(2147483644/(e|0)|0|0)?g:-2147483644)|0);n=p}while(0);r=d+104|0;if(!(c[r>>2]|0))return;d=0;while(1){if(d>>>0>=4?(a[n>>0]|0)!=5:0){s=20;break}Ad(b,1);if(!(c[r>>2]|0)){s=20;break}else d=d+1|0}if((s|0)==20)return}function Dd(b,e){b=b|0;e=e|0;var f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0;f=b+12|0;g=c[f>>2]|0;h=g+62|0;i=a[h>>0]|0;j=(e|0)!=0;if(!j){a[h>>0]=0;e=g+104|0;k=c[e>>2]|0;if(k){l=k;do{k=l+5|0;a[k>>0]=a[k>>0]&-65;Ad(b,1);l=c[e>>2]|0}while((l|0)!=0);if((a[h>>0]|0)==2)m=8;else m=7}else m=7}else{a[h>>0]=1;m=7}if((m|0)==7?(d[g+61>>0]|0)<2:0)m=8;if((m|0)==8){m=c[f>>2]|0;a[m+61>>0]=2;c[m+64>>2]=0;l=m+72|0;do n=qd(b,l,1)|0;while((n|0)==(l|0));c[m+80>>2]=n;n=m+68|0;do o=qd(b,n,1)|0;while((o|0)==(n|0));c[m+76>>2]=o}o=(c[f>>2]|0)+61|0;if((a[o>>0]|0)==5){p=o;q=5}else{do sd(b)|0;while((a[o>>0]|0)!=5);o=(c[f>>2]|0)+61|0;p=o;q=a[o>>0]|0}if(!(1<<(q&255)&-33)){do sd(b)|0;while(!(1<<d[p>>0]&-33|0));o=(c[f>>2]|0)+61|0;r=o;s=a[o>>0]|0}else{r=p;s=q}if(s<<24>>24!=5)do sd(b)|0;while((a[r>>0]|0)!=5);if(i<<24>>24==2?(r=(c[f>>2]|0)+61|0,a[r>>0]|0):0)do sd(b)|0;while((a[r>>0]|0)!=0);a[h>>0]=i;i=(c[g+12>>2]|0)+(c[g+8>>2]|0)|0;h=(i|0)/100|0;r=c[g+156>>2]|0;s=H(h,0-r|0)|0;ne(g,((r|0)<(2147483644/(h|0)|0|0)?s:-2147483644)+i|0);if(j)return;j=(c[f>>2]|0)+104|0;f=c[j>>2]|0;if(!f)return;i=f;do{f=i+5|0;a[f>>0]=a[f>>0]&-65;Ad(b,1);i=c[j>>2]|0}while((i|0)!=0);return}function Ed(b){b=b|0;var d=0;d=c[b+12>>2]|0;if(!(a[d+63>>0]|0)){ne(d,-1600);return}else{Cd(b);return}}function Fd(b,d,e,f,g,h){b=b|0;d=d|0;e=e|0;f=f|0;g=g|0;h=h|0;var i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0;i=Pa;Pa=Pa+16|0;j=i;k=c[e>>2]|0;if((k|0)>=((g|0)/2|0|0))if((k|0)<(g|0))l=g;else{c[j>>2]=h;c[j+4>>2]=g;Dc(b,6829,j)}else{j=k<<1;l=(j|0)>4?j:4}if((l+1|0)>>>0>(4294967293/(f>>>0)|0)>>>0)Gd(b);j=H(k,f)|0;k=H(l,f)|0;f=c[b+12>>2]|0;g=(d|0)==0;h=f+4|0;m=Wa[c[f>>2]&255](c[h>>2]|0,d,j,k)|0;if(!((k|0)!=0&(m|0)==0)){n=m;o=f+12|0;p=c[o>>2]|0;q=0-j|0;r=g?0:q;s=k+r|0;t=s+p|0;c[o>>2]=t;c[e>>2]=l;Pa=i;return n|0}if(!(a[f+63>>0]|0))Jc(b,4);Dd(b,1);m=Wa[c[f>>2]&255](c[h>>2]|0,d,j,k)|0;if(!m)Jc(b,4);else{n=m;o=f+12|0;p=c[o>>2]|0;q=0-j|0;r=g?0:q;s=k+r|0;t=s+p|0;c[o>>2]=t;c[e>>2]=l;Pa=i;return n|0}return 0}function Gd(a){a=a|0;var b=0;b=Pa;Pa=Pa+16|0;Dc(a,6855,b)}function Hd(b,d,e,f){b=b|0;d=d|0;e=e|0;f=f|0;var g=0,h=0,i=0,j=0,k=0,l=0;g=c[b+12>>2]|0;h=(d|0)==0;i=g+4|0;j=Wa[c[g>>2]&255](c[i>>2]|0,d,e,f)|0;if((f|0)!=0&(j|0)==0){if(!(a[g+63>>0]|0))Jc(b,4);Dd(b,1);k=Wa[c[g>>2]&255](c[i>>2]|0,d,e,f)|0;if(!k)Jc(b,4);else l=k}else l=j;j=g+12|0;c[j>>2]=(h?0:0-e|0)+f+(c[j>>2]|0);return l|0}function Id(a){a=a|0;var b=0,c=0,d=0,e=0,f=0,g=0;if(a>>>0<8){b=a;return b|0}if(a>>>0>15){c=1;d=a;do{e=d+1|0;d=e>>>1;c=c+1|0}while(e>>>0>31);f=c<<3;g=d}else{f=8;g=a}b=f|g+-8;return b|0}function Jd(a){a=a|0;var b=0;b=a>>>3&31;return ((b|0)==0?a:(a&7|8)<<b+-1)|0}function Kd(a){a=a|0;var b=0,c=0,e=0,f=0,g=0,h=0;b=a+-1|0;if(b>>>0>255){a=b;c=0;while(1){e=c+8|0;f=a>>>8;if(a>>>0>65535){a=f;c=e}else{g=e;h=f;break}}}else{g=0;h=b}return g+(d[16+h>>0]|0)|0}function Ld(a,b,c){a=a|0;b=+b;c=+c;var d=0.0;switch(a|0){case 0:{d=b+c;break}case 1:{d=b-c;break}case 2:{d=b*c;break}case 3:{d=b/c;break}case 4:{d=b-+t(+(b/c))*c;break}case 5:{d=+w(+b,+c);break}case 6:{d=-b;break}default:d=0.0}return +d}function Md(b){b=b|0;return ((a[432+(b+1)>>0]&2)==0?(b|32)+-87|0:b+-48|0)|0}function Nd(b,e,f){b=b|0;e=e|0;f=f|0;var h=0,i=0,j=0,k=0.0,l=0,m=0.0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0.0,x=0,y=0,z=0,A=0,B=0.0,C=0,D=0,E=0.0,F=0,G=0,I=0,J=0,K=0,L=0,M=0,N=0,O=0,P=0;h=Pa;Pa=Pa+16|0;i=h;if(Pm(b,6894)|0){j=0;Pa=h;return j|0}a:do if(!(Pm(b,6897)|0)){k=+xn(b,i);l=c[i>>2]|0;m=k}else{c[i>>2]=b;n=b;while(1){o=a[n>>0]|0;p=n+1|0;if(!(a[432+((o&255)+1)>>0]&8))break;else n=p}switch(o<<24>>24){case 45:{q=1;r=p;break}case 43:{q=0;r=p;break}default:{q=0;r=n}}b:do if((a[r>>0]|0)==48){switch(a[r+1>>0]|0){case 88:case 120:break;default:break b}s=r+2|0;t=a[s>>0]|0;u=t&255;v=a[432+(u+1)>>0]|0;if(!(v&16)){w=0.0;x=0;y=s;z=t}else{k=0.0;t=v;v=u;u=0;A=s;while(1){B=k*16.0+ +(((t&2)==0?(v|32)+-87|0:v+-48|0)|0);s=u+1|0;C=A+1|0;D=a[C>>0]|0;v=D&255;t=a[432+(v+1)>>0]|0;if(!(t&16)){w=B;x=s;y=C;z=D;break}else{k=B;u=s;A=C}}}if(z<<24>>24==46){A=y+1|0;u=d[A>>0]|0;t=a[432+(u+1)>>0]|0;if(!(t&16)){E=w;F=0;G=A}else{k=w;v=t;t=u;u=0;C=A;while(1){B=k*16.0+ +(((v&2)==0?(t|32)+-87|0:t+-48|0)|0);A=u+1|0;s=C+1|0;t=d[s>>0]|0;v=a[432+(t+1)>>0]|0;if(!(v&16)){E=B;F=A;G=s;break}else{k=B;u=A;C=s}}}}else{E=w;F=0;G=y}C=G;if(F|x|0){u=H(F,-4)|0;c[i>>2]=C;switch(a[G>>0]|0){case 80:case 112:{v=G+1|0;switch(a[v>>0]|0){case 45:{I=1;J=G+2|0;break}case 43:{I=0;J=G+2|0;break}default:{I=0;J=v}}v=a[J>>0]|0;if(!(a[432+((v&255)+1)>>0]&2)){K=u;L=G}else{t=0;s=J;A=v;do{s=s+1|0;t=(A<<24>>24)+-48+(t*10|0)|0;A=a[s>>0]|0}while((a[432+((A&255)+1)>>0]&2)!=0);M=((I|0)==0?t:0-t|0)+u|0;N=s;O=26}break}default:{M=u;N=C;O=26}}if((O|0)==26){c[i>>2]=N;K=M;L=N}l=L;m=+pn((q|0)==0?E:-E,K);break a}}while(0);g[f>>3]=0.0;j=0;Pa=h;return j|0}while(0);g[f>>3]=m;if((l|0)==(b|0)){j=0;Pa=h;return j|0}if(!(a[432+((d[l>>0]|0)+1)>>0]&8))P=l;else{f=l;do f=f+1|0;while((a[432+((d[f>>0]|0)+1)>>0]&8)!=0);c[i>>2]=f;P=f}j=(P|0)==(b+e|0)&1;Pa=h;return j|0}function Od(b,d,e){b=b|0;d=d|0;e=e|0;var f=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0,z=0,A=0.0,B=0,C=0,D=0,E=0,F=0,G=0,H=0,I=0,J=0,K=0;f=Pa;Pa=Pa+48|0;h=f+32|0;i=f+24|0;j=f;k=rm(d,37)|0;l=b+24|0;m=b+8|0;n=c[m>>2]|0;o=(c[l>>2]|0)-n|0;p=n;do if(k){n=0;q=d;r=o;s=p;t=k;a:while(1){if((r|0)<48){Mc(b,2);u=c[m>>2]|0}else u=s;c[m>>2]=u+16;v=Ae(b,q,t-q|0)|0;c[u>>2]=v;c[u+8>>2]=(a[v+4>>0]|64)&255;w=a[t+1>>0]|0;switch(w<<24>>24|0){case 115:{v=(c[e>>2]|0)+(4-1)&~(4-1);x=c[v>>2]|0;c[e>>2]=v+4;v=(x|0)==0?13461:x;x=_l(v)|0;y=c[m>>2]|0;c[m>>2]=y+16;z=Ae(b,v,x)|0;c[y>>2]=z;c[y+8>>2]=(a[z+4>>0]|64)&255;break}case 99:{z=(c[e>>2]|0)+(4-1)&~(4-1);y=c[z>>2]|0;c[e>>2]=z+4;a[j>>0]=y;y=c[m>>2]|0;c[m>>2]=y+16;z=Ae(b,j,1)|0;c[y>>2]=z;c[y+8>>2]=(a[z+4>>0]|64)&255;break}case 100:{z=c[m>>2]|0;c[m>>2]=z+16;y=(c[e>>2]|0)+(4-1)&~(4-1);x=c[y>>2]|0;c[e>>2]=y+4;g[z>>3]=+(x|0);c[z+8>>2]=3;break}case 102:{z=c[m>>2]|0;c[m>>2]=z+16;x=(c[e>>2]|0)+(8-1)&~(8-1);A=+g[x>>3];c[e>>2]=x+8;g[z>>3]=A;c[z+8>>2]=3;break}case 112:{z=(c[e>>2]|0)+(4-1)&~(4-1);x=c[z>>2]|0;c[e>>2]=z+4;c[i>>2]=x;x=Gm(j,6900,i)|0;z=c[m>>2]|0;c[m>>2]=z+16;y=Ae(b,j,x)|0;c[z>>2]=y;c[z+8>>2]=(a[y+4>>0]|64)&255;break}case 37:{y=c[m>>2]|0;c[m>>2]=y+16;z=Ae(b,6903,1)|0;c[y>>2]=z;c[y+8>>2]=(a[z+4>>0]|64)&255;break}default:{B=12;break a}}n=n+2|0;q=t+2|0;t=rm(q,37)|0;s=c[m>>2]|0;r=(c[l>>2]|0)-s|0;if(!t){B=14;break}}if((B|0)==12){c[h>>2]=w<<24>>24;Dc(b,6905,h)}else if((B|0)==14){C=q;D=n;E=r;F=s;break}}else{C=d;D=0;E=o;F=p}while(0);if((E|0)<32){Mc(b,1);G=c[m>>2]|0}else G=F;F=_l(C)|0;c[m>>2]=G+16;E=Ae(b,C,F)|0;c[G>>2]=E;c[G+8>>2]=(a[E+4>>0]|64)&255;if(!D){H=c[m>>2]|0;I=H+-16|0;J=c[I>>2]|0;K=J+16|0;Pa=f;return K|0}df(b,D|1);H=c[m>>2]|0;I=H+-16|0;J=c[I>>2]|0;K=J+16|0;Pa=f;return K|0}function Pd(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0;e=Pa;Pa=Pa+16|0;f=e;c[f>>2]=d;d=Od(a,b,f)|0;Pa=e;return d|0}function Qd(b,c,d){b=b|0;c=c|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0;e=_l(c)|0;switch(a[c>>0]|0){case 61:{f=c+1|0;if(e>>>0>d>>>0){g=d+-1|0;Un(b|0,f|0,g|0)|0;a[b+g>>0]=0;return}else{Un(b|0,f|0,e|0)|0;return}break}case 64:{if(e>>>0>d>>>0){a[b>>0]=a[8943]|0;a[b+1>>0]=a[8944]|0;a[b+2>>0]=a[8945]|0;Un(b+3|0,c+1+e+(3-d)|0,d+-3|0)|0;return}else{Un(b|0,c+1|0,e|0)|0;return}break}default:{f=rm(c,10)|0;g=b;h=6948;i=g+9|0;do{a[g>>0]=a[h>>0]|0;g=g+1|0;h=h+1|0}while((g|0)<(i|0));h=b+9|0;b=d+-15|0;d=(f|0)==0;if(e>>>0<b>>>0&d){Un(h|0,c|0,e|0)|0;j=h+e|0}else{g=d?e:f-c|0;f=g>>>0>b>>>0?b:g;Un(h|0,c|0,f|0)|0;c=h+f|0;a[c>>0]=a[8943]|0;a[c+1>>0]=a[8944]|0;a[c+2>>0]=a[8945]|0;j=c+3|0};a[j>>0]=a[6958]|0;a[j+1>>0]=a[6959]|0;a[j+2>>0]=a[6960]|0;return}}}function Rd(d,e,f,g,h,i){d=d|0;e=e|0;f=f|0;g=g|0;h=h|0;i=i|0;var j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0;j=Pa;Pa=Pa+176|0;k=j+156|0;l=j+80|0;m=j;n=j+104|0;o=bd(d,1)|0;p=d+8|0;q=c[p>>2]|0;c[q>>2]=o;c[q+8>>2]=70;q=(c[p>>2]|0)+16|0;c[p>>2]=q;if(((c[d+24>>2]|0)-q|0)<16)Mc(d,0);q=gd(d)|0;c[o+12>>2]=q;c[n>>2]=q;p=Be(d,h)|0;h=q+36|0;c[h>>2]=p;c[m+60>>2]=f;f=m+64|0;c[f>>2]=g;c[g+28>>2]=0;c[g+16>>2]=0;c[g+4>>2]=0;dh(d,m,e,p,i);i=c[m+52>>2]|0;p=m+48|0;c[n+8>>2]=c[p>>2];e=n+12|0;c[e>>2]=m;c[p>>2]=n;c[n+20>>2]=0;c[n+24>>2]=0;c[n+28>>2]=-1;c[n+32>>2]=0;c[n+36>>2]=0;p=n+44|0;c[p>>2]=0;a[p+4>>0]=0;c[n+40>>2]=c[(c[f>>2]|0)+4>>2];f=n+16|0;c[f>>2]=0;c[h>>2]=c[m+68>>2];a[q+78>>0]=2;q=Le(i)|0;c[n+4>>2]=q;h=i+8|0;p=c[h>>2]|0;c[p>>2]=q;c[p+8>>2]=69;p=(c[h>>2]|0)+16|0;c[h>>2]=p;if(((c[i+24>>2]|0)-p|0)<16)Mc(i,0);a[k+10>>0]=0;a[k+8>>0]=a[n+46>>0]|0;i=c[(c[e>>2]|0)+64>>2]|0;b[k+4>>1]=c[i+28>>2];b[k+6>>1]=c[i+16>>2];a[k+9>>0]=0;c[k>>2]=c[f>>2];c[f>>2]=k;a[(c[n>>2]|0)+77>>0]=1;c[l+16>>2]=-1;c[l+20>>2]=-1;c[l>>2]=7;c[l+8>>2]=0;Sd(n,c[m+72>>2]|0,l)|0;eh(m);l=m+16|0;a:while(1){n=c[l>>2]|0;switch(n|0){case 277:case 286:case 262:case 261:case 260:{r=n;break a;break}default:{}}Td(m);if((n|0)==274){s=8;break}}if((s|0)==8)r=c[l>>2]|0;if((r|0)==286){Vd(m);Pa=j;return o|0}else Ud(m,286);return 0}function Sd(b,d,e){b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0;f=c[b>>2]|0;g=f+40|0;h=c[g>>2]|0;i=b+47|0;j=a[i>>0]|0;if(j<<24>>24==-1)$d(b,255,7549);if((h|0)>(j&255|0))k=h;else{j=f+28|0;l=Fd(c[(c[b+12>>2]|0)+52>>2]|0,c[j>>2]|0,g,8,255,7549)|0;c[j>>2]=l;k=c[g>>2]|0}g=c[f+28>>2]|0;if((h|0)<(k|0)){l=h;do{c[g+(l<<3)>>2]=0;l=l+1|0}while((l|0)<(k|0))}k=a[i>>0]|0;l=k&255;a[g+(l<<3)+4>>0]=(c[e>>2]|0)==7&1;a[g+(l<<3)+5>>0]=c[e+8>>2];c[g+(l<<3)>>2]=d;if(!(a[d+5>>0]&3)){m=l;n=k;o=n+1<<24>>24;a[i>>0]=o;return m|0}if(!(a[f+5>>0]&4)){m=l;n=k;o=n+1<<24>>24;a[i>>0]=o;return m|0}jd(c[(c[b+12>>2]|0)+52>>2]|0,f,d);d=a[i>>0]|0;m=d&255;n=d;o=n+1<<24>>24;a[i>>0]=o;return m|0}function Td(e){e=e|0;var f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0,z=0,A=0,B=0,C=0,D=0,E=0,F=0,G=0,H=0,I=0,J=0,K=0,L=0,M=0,N=0,O=0,P=0,Q=0,R=0,S=0,T=0,U=0,V=0,W=0,X=0,Y=0,Z=0,_=0,$=0,aa=0,ba=0,ca=0,da=0,ea=0,fa=0;f=Pa;Pa=Pa+176|0;g=f+160|0;h=f+144|0;i=f+128|0;j=f+112|0;k=f+96|0;l=f+80|0;m=f+48|0;n=f+24|0;o=f;p=e+4|0;q=c[p>>2]|0;r=e+48|0;s=c[r>>2]|0;t=e+52|0;u=(c[t>>2]|0)+38|0;v=(b[u>>1]|0)+1<<16>>16;b[u>>1]=v;if((v&65535)>200)$d(s,200,7120);v=e+16|0;do switch(c[v>>2]|0){case 59:{eh(e);w=c[r>>2]|0;x=w+46|0;y=a[x>>0]|0;z=w+48|0;a[z>>0]=y;A=c[t>>2]|0;B=A+38|0;C=b[B>>1]|0;D=C+-1<<16>>16;b[B>>1]=D;Pa=f;return}case 267:{c[n>>2]=-1;ae(e,n);a:while(1){u=c[v>>2]|0;switch(u|0){case 260:{E=8;break a;break}case 261:break;default:{F=u;break a}}ae(e,n)}if((E|0)==8){eh(e);u=c[r>>2]|0;a[m+10>>0]=0;a[m+8>>0]=a[u+46>>0]|0;G=c[(c[u+12>>2]|0)+64>>2]|0;b[m+4>>1]=c[G+28>>2];b[m+6>>1]=c[G+16>>2];a[m+9>>0]=0;G=u+16|0;c[m>>2]=c[G>>2];c[G>>2]=m;b:do{G=c[v>>2]|0;switch(G|0){case 277:case 286:case 262:case 261:case 260:{break b;break}default:{}}Td(e)}while((G|0)!=274);Wd(u);F=c[v>>2]|0}if((F|0)==262){eh(e);wg(s,c[n>>2]|0);w=c[r>>2]|0;x=w+46|0;y=a[x>>0]|0;z=w+48|0;a[z>>0]=y;A=c[t>>2]|0;B=A+38|0;C=b[B>>1]|0;D=C+-1<<16>>16;b[B>>1]=D;Pa=f;return}if((c[p>>2]|0)==(q|0))Ud(e,262);else{G=c[t>>2]|0;H=$g(e,262)|0;I=$g(e,267)|0;c[l>>2]=H;c[l+4>>2]=I;c[l+8>>2]=q;ah(e,Pd(G,7129,l)|0)}break}case 278:{eh(e);G=ug(s)|0;be(e,m,0)|0;if((c[m>>2]|0)==1)c[m>>2]=3;Qg(c[r>>2]|0,m);I=c[m+20>>2]|0;a[n+10>>0]=1;a[n+8>>0]=a[s+46>>0]|0;H=c[(c[s+12>>2]|0)+64>>2]|0;b[n+4>>1]=c[H+28>>2];b[n+6>>1]=c[H+16>>2];a[n+9>>0]=0;H=s+16|0;c[n>>2]=c[H>>2];c[H>>2]=n;if((c[v>>2]|0)!=259)Ud(e,259);eh(e);H=c[r>>2]|0;a[m+10>>0]=0;a[m+8>>0]=a[H+46>>0]|0;J=c[(c[H+12>>2]|0)+64>>2]|0;b[m+4>>1]=c[J+28>>2];b[m+6>>1]=c[J+16>>2];a[m+9>>0]=0;J=H+16|0;c[m>>2]=c[J>>2];c[J>>2]=m;c:do{J=c[v>>2]|0;switch(J|0){case 277:case 286:case 262:case 261:case 260:{break c;break}default:{}}Td(e)}while((J|0)!=274);Wd(H);vg(s,qg(s)|0,G);if((c[v>>2]|0)==262){eh(e);Wd(s);wg(s,I);w=c[r>>2]|0;x=w+46|0;y=a[x>>0]|0;z=w+48|0;a[z>>0]=y;A=c[t>>2]|0;B=A+38|0;C=b[B>>1]|0;D=C+-1<<16>>16;b[B>>1]=D;Pa=f;return}if((c[p>>2]|0)==(q|0))Ud(e,262);else{u=c[t>>2]|0;J=$g(e,262)|0;K=$g(e,278)|0;c[k>>2]=J;c[k+4>>2]=K;c[k+8>>2]=q;ah(e,Pd(u,7129,k)|0)}break}case 259:{eh(e);u=c[r>>2]|0;a[m+10>>0]=0;a[m+8>>0]=a[u+46>>0]|0;K=c[(c[u+12>>2]|0)+64>>2]|0;b[m+4>>1]=c[K+28>>2];b[m+6>>1]=c[K+16>>2];a[m+9>>0]=0;K=u+16|0;c[m>>2]=c[K>>2];c[K>>2]=m;d:do{K=c[v>>2]|0;switch(K|0){case 277:case 286:case 262:case 261:case 260:{break d;break}default:{}}Td(e)}while((K|0)!=274);Wd(u);if((c[v>>2]|0)==262){eh(e);w=c[r>>2]|0;x=w+46|0;y=a[x>>0]|0;z=w+48|0;a[z>>0]=y;A=c[t>>2]|0;B=A+38|0;C=b[B>>1]|0;D=C+-1<<16>>16;b[B>>1]=D;Pa=f;return}if((c[p>>2]|0)==(q|0))Ud(e,262);else{I=c[t>>2]|0;G=$g(e,262)|0;H=$g(e,259)|0;c[j>>2]=G;c[j+4>>2]=H;c[j+8>>2]=q;ah(e,Pd(I,7129,j)|0)}break}case 264:{a[n+10>>0]=1;a[n+8>>0]=a[s+46>>0]|0;I=c[(c[s+12>>2]|0)+64>>2]|0;b[n+4>>1]=c[I+28>>2];b[n+6>>1]=c[I+16>>2];a[n+9>>0]=0;I=s+16|0;c[n>>2]=c[I>>2];c[I>>2]=n;eh(e);if((c[v>>2]|0)!=288)Ud(e,288);I=e+24|0;H=c[I>>2]|0;eh(e);switch(c[v>>2]|0){case 61:{G=c[r>>2]|0;K=G+48|0;J=d[K>>0]|0;ce(e,ch(e,7166,11)|0);ce(e,ch(e,7178,11)|0);ce(e,ch(e,7190,10)|0);ce(e,H);if((c[v>>2]|0)!=61)Ud(e,61);eh(e);be(e,m,0)|0;Hg(c[r>>2]|0,m);if((c[v>>2]|0)!=44)Ud(e,44);eh(e);be(e,m,0)|0;Hg(c[r>>2]|0,m);if((c[v>>2]|0)==44){eh(e);be(e,m,0)|0;Hg(c[r>>2]|0,m)}else{L=d[K>>0]|0;yg(G,L,Dg(G,1.0)|0)|0;Ag(G,1)}de(e,J,q,1,1);break}case 268:case 44:{J=c[r>>2]|0;G=d[J+48>>0]|0;ce(e,ch(e,7201,15)|0);ce(e,ch(e,7217,11)|0);ce(e,ch(e,7229,13)|0);ce(e,H);H=c[v>>2]|0;do if((H|0)==44){L=4;while(1){eh(e);if((c[v>>2]|0)!=288){E=51;break}K=c[I>>2]|0;eh(e);ce(e,K);M=c[v>>2]|0;if((M|0)==44)L=L+1|0;else{E=53;break}}if((E|0)==51)Ud(e,288);else if((E|0)==53){N=L+-2|0;O=M;break}}else{N=1;O=H}while(0);if((O|0)!=268)Ud(e,268);eh(e);H=c[p>>2]|0;be(e,m,0)|0;if((c[v>>2]|0)==44){I=1;while(1){eh(e);Hg(c[r>>2]|0,m);be(e,m,0)|0;u=I+1|0;if((c[v>>2]|0)==44)I=u;else{P=u;break}}}else P=1;ee(c[r>>2]|0,3,P,m);zg(J,3);de(e,G,H,N,0);break}default:ah(e,7243)}if((c[v>>2]|0)==262){eh(e);Wd(s);w=c[r>>2]|0;x=w+46|0;y=a[x>>0]|0;z=w+48|0;a[z>>0]=y;A=c[t>>2]|0;B=A+38|0;C=b[B>>1]|0;D=C+-1<<16>>16;b[B>>1]=D;Pa=f;return}if((c[p>>2]|0)==(q|0))Ud(e,262);else{I=c[t>>2]|0;u=$g(e,262)|0;K=$g(e,264)|0;c[i>>2]=u;c[i+4>>2]=K;c[i+8>>2]=q;ah(e,Pd(I,7129,i)|0)}break}case 273:{I=ug(s)|0;a[n+10>>0]=1;K=a[s+46>>0]|0;a[n+8>>0]=K;u=c[(c[s+12>>2]|0)+64>>2]|0;Q=c[u+28>>2]&65535;b[n+4>>1]=Q;R=c[u+16>>2]&65535;b[n+6>>1]=R;a[n+9>>0]=0;u=s+16|0;c[n>>2]=c[u>>2];a[o+10>>0]=0;S=o+8|0;a[S>>0]=K;b[o+4>>1]=Q;b[o+6>>1]=R;R=o+9|0;a[R>>0]=0;c[o>>2]=n;c[u>>2]=o;eh(e);e:while(1){u=c[v>>2]|0;switch(u|0){case 277:case 286:case 262:case 261:case 260:{T=u;break e;break}default:{}}Td(e);if((u|0)==274){E=69;break}}if((E|0)==69)T=c[v>>2]|0;if((T|0)!=277)if((c[p>>2]|0)==(q|0))Ud(e,277);else{H=c[t>>2]|0;G=$g(e,277)|0;J=$g(e,273)|0;c[h>>2]=G;c[h+4>>2]=J;c[h+8>>2]=q;ah(e,Pd(H,7129,h)|0)}eh(e);be(e,m,0)|0;if((c[m>>2]|0)==1)c[m>>2]=3;Qg(c[r>>2]|0,m);H=c[m+20>>2]|0;if(a[R>>0]|0)xg(s,H,d[S>>0]|0);Wd(s);vg(s,H,I);Wd(s);w=c[r>>2]|0;x=w+46|0;y=a[x>>0]|0;z=w+48|0;a[z>>0]=y;A=c[t>>2]|0;B=A+38|0;C=b[B>>1]|0;D=C+-1<<16>>16;b[B>>1]=D;Pa=f;return}case 265:{eh(e);if((c[v>>2]|0)!=288)Ud(e,288);H=c[e+24>>2]|0;eh(e);J=c[r>>2]|0;if(!(fe(J,H,n,1)|0)){fe(J,c[e+72>>2]|0,n,1)|0;G=Bg(c[r>>2]|0,H)|0;c[m+16>>2]=-1;c[m+20>>2]=-1;c[m>>2]=4;c[m+8>>2]=G;Sg(J,n,m)}f:while(1){switch(c[v>>2]|0){case 58:{E=86;break f;break}case 46:break;default:{U=0;break f}}ge(e,n)}if((E|0)==86){ge(e,n);U=1}he(e,o,U,q);Og(c[r>>2]|0,n,o);Yg(c[r>>2]|0,q);w=c[r>>2]|0;x=w+46|0;y=a[x>>0]|0;z=w+48|0;a[z>>0]=y;A=c[t>>2]|0;B=A+38|0;C=b[B>>1]|0;D=C+-1<<16>>16;b[B>>1]=D;Pa=f;return}case 269:{eh(e);I=c[v>>2]|0;if((I|0)==265){eh(e);S=c[r>>2]|0;if((c[v>>2]|0)!=288)Ud(e,288);R=c[e+24>>2]|0;eh(e);ce(e,R);R=c[r>>2]|0;J=R+46|0;G=a[J>>0]|0;a[J>>0]=(G&255)+1;c[(c[(c[R>>2]|0)+24>>2]|0)+((b[(c[c[(c[R+12>>2]|0)+64>>2]>>2]|0)+((c[R+40>>2]|0)+(G+1&255)+-1<<1)>>1]|0)*12|0)+4>>2]=c[R+20>>2];he(e,m,0,c[p>>2]|0);c[(c[(c[S>>2]|0)+24>>2]|0)+((b[(c[c[(c[S+12>>2]|0)+64>>2]>>2]|0)+((c[S+40>>2]|0)+(c[m+8>>2]|0)<<1)>>1]|0)*12|0)+4>>2]=c[S+20>>2];w=c[r>>2]|0;x=w+46|0;y=a[x>>0]|0;z=w+48|0;a[z>>0]=y;A=c[t>>2]|0;B=A+38|0;C=b[B>>1]|0;D=C+-1<<16>>16;b[B>>1]=D;Pa=f;return}if((I|0)!=288)Ud(e,288);I=e+24|0;S=0;g:while(1){R=c[I>>2]|0;eh(e);ce(e,R);S=S+1|0;switch(c[v>>2]|0){case 61:{E=97;break g;break}case 44:break;default:{E=100;break g}}eh(e);if((c[v>>2]|0)!=288){E=95;break}}if((E|0)==95)Ud(e,288);else if((E|0)==97){eh(e);be(e,m,0)|0;if((c[v>>2]|0)==44){I=1;while(1){eh(e);Hg(c[r>>2]|0,m);be(e,m,0)|0;R=I+1|0;if((c[v>>2]|0)==44)I=R;else{V=R;break}}}else V=1}else if((E|0)==100){c[m>>2]=0;V=0}ee(c[r>>2]|0,S,V,m);I=c[r>>2]|0;R=I+46|0;G=S+(d[R>>0]|0)|0;a[R>>0]=G;R=c[I+20>>2]|0;J=c[(c[I>>2]|0)+24>>2]|0;H=c[c[(c[I+12>>2]|0)+64>>2]>>2]|0;u=(c[I+40>>2]|0)+(G&255)|0;G=S;do{c[J+((b[H+(u-G<<1)>>1]|0)*12|0)+4>>2]=R;G=G+-1|0}while((G|0)!=0);w=c[r>>2]|0;x=w+46|0;y=a[x>>0]|0;z=w+48|0;a[z>>0]=y;A=c[t>>2]|0;B=A+38|0;C=b[B>>1]|0;D=C+-1<<16>>16;b[B>>1]=D;Pa=f;return}case 285:{eh(e);if((c[v>>2]|0)!=288)Ud(e,288);G=c[e+24>>2]|0;eh(e);R=c[r>>2]|0;u=e+64|0;H=c[u>>2]|0;J=H+24|0;S=R+16|0;I=b[(c[S>>2]|0)+4>>1]|0;Q=H+28|0;h:do if((c[Q>>2]|0)>(I|0)){K=I;while(1){if(xe(G,c[(c[J>>2]|0)+(K<<4)>>2]|0)|0)break;W=K+1|0;if((W|0)<(c[Q>>2]|0))K=W;else break h}L=R+12|0;W=c[(c[L>>2]|0)+52>>2]|0;X=c[(c[J>>2]|0)+(K<<4)+8>>2]|0;c[g>>2]=G+16;c[g+4>>2]=X;X=Pd(W,7264,g)|0;_d(c[L>>2]|0,X)}while(0);if((c[v>>2]|0)!=285)Ud(e,285);eh(e);I=c[R+20>>2]|0;X=c[Q>>2]|0;L=H+32|0;if((X|0)<(c[L>>2]|0)){Y=c[J>>2]|0;Z=X}else{W=Fd(c[t>>2]|0,c[J>>2]|0,L,16,32767,6961)|0;c[J>>2]=W;Y=W;Z=c[Q>>2]|0}c[Y+(X<<4)>>2]=G;c[Y+(X<<4)+8>>2]=q;a[Y+(X<<4)+12>>0]=a[(c[r>>2]|0)+46>>0]|0;c[Y+(X<<4)+4>>2]=I;c[Q>>2]=Z+1;i:while(1){switch(c[v>>2]|0){case 286:case 262:case 261:case 260:{E=120;break i;break}case 285:case 59:break;default:{E=119;break i}}Td(e)}if((E|0)==119)_=c[J>>2]|0;else if((E|0)==120){Q=c[J>>2]|0;a[Q+(X<<4)+12>>0]=a[(c[S>>2]|0)+8>>0]|0;_=Q}Q=_+(X<<4)|0;G=c[u>>2]|0;H=b[(c[(c[r>>2]|0)+16>>2]|0)+6>>1]|0;R=G+16|0;if((c[R>>2]|0)<=(H|0)){w=c[r>>2]|0;x=w+46|0;y=a[x>>0]|0;z=w+48|0;a[z>>0]=y;A=c[t>>2]|0;B=A+38|0;C=b[B>>1]|0;D=C+-1<<16>>16;b[B>>1]=D;Pa=f;return}I=G+12|0;G=H;while(1){if(!(xe(c[(c[I>>2]|0)+(G<<4)>>2]|0,c[Q>>2]|0)|0))$=G+1|0;else{Xd(e,G,Q);$=G}if(($|0)<(c[R>>2]|0))G=$;else break}w=c[r>>2]|0;x=w+46|0;y=a[x>>0]|0;z=w+48|0;a[z>>0]=y;A=c[t>>2]|0;B=A+38|0;C=b[B>>1]|0;D=C+-1<<16>>16;b[B>>1]=D;Pa=f;return}case 274:{eh(e);G=c[r>>2]|0;j:do switch(c[v>>2]|0){case 59:case 277:case 286:case 262:case 261:case 260:{aa=0;ba=0;break}default:{be(e,m,0)|0;if((c[v>>2]|0)==44){R=1;while(1){eh(e);Hg(c[r>>2]|0,m);be(e,m,0)|0;Q=R+1|0;if((c[v>>2]|0)==44)R=Q;else{ca=Q;break}}}else ca=1;if((c[m>>2]&-2|0)!=12)if((ca|0)==1){aa=1;ba=Kg(G,m)|0;break j}else{Hg(G,m);aa=ca;ba=d[G+46>>0]|0;break j}else{Eg(G,m,-1);if((ca|0)==1&(c[m>>2]|0)==12){R=(c[(c[G>>2]|0)+12>>2]|0)+(c[m+8>>2]<<2)|0;c[R>>2]=c[R>>2]&-64|30}aa=-1;ba=d[G+46>>0]|0;break j}}}while(0);tg(G,ba,aa);if((c[v>>2]|0)==59)eh(e);w=c[r>>2]|0;x=w+46|0;y=a[x>>0]|0;z=w+48|0;a[z>>0]=y;A=c[t>>2]|0;B=A+38|0;C=b[B>>1]|0;D=C+-1<<16>>16;b[B>>1]=D;Pa=f;return}case 266:case 258:{R=qg(s)|0;K=c[p>>2]|0;Q=(c[v>>2]|0)==266;eh(e);do if(Q)if((c[v>>2]|0)==288){I=c[e+24>>2]|0;eh(e);da=I;break}else Ud(e,288);else da=Be(c[t>>2]|0,8824)|0;while(0);Q=c[e+64>>2]|0;G=Q+12|0;I=Q+16|0;u=c[I>>2]|0;X=Q+20|0;if((u|0)<(c[X>>2]|0)){ea=c[G>>2]|0;fa=u}else{Q=Fd(c[t>>2]|0,c[G>>2]|0,X,16,32767,6961)|0;c[G>>2]=Q;ea=Q;fa=c[I>>2]|0}c[ea+(u<<4)>>2]=da;c[ea+(u<<4)+8>>2]=K;a[ea+(u<<4)+12>>0]=a[(c[r>>2]|0)+46>>0]|0;c[ea+(u<<4)+4>>2]=R;c[I>>2]=fa+1;Yd(e,u)|0;w=c[r>>2]|0;x=w+46|0;y=a[x>>0]|0;z=w+48|0;a[z>>0]=y;A=c[t>>2]|0;B=A+38|0;C=b[B>>1]|0;D=C+-1<<16>>16;b[B>>1]=D;Pa=f;return}default:{u=m+8|0;ie(e,u);k:do switch(c[v>>2]|0){case 44:case 61:{c[m>>2]=0;je(e,m,1);break}default:if((c[u>>2]|0)==12){I=(c[(c[s>>2]|0)+12>>2]|0)+(c[m+16>>2]<<2)|0;c[I>>2]=c[I>>2]&-8372225|16384;break k}else ah(e,7302)}while(0);w=c[r>>2]|0;x=w+46|0;y=a[x>>0]|0;z=w+48|0;a[z>>0]=y;A=c[t>>2]|0;B=A+38|0;C=b[B>>1]|0;D=C+-1<<16>>16;b[B>>1]=D;Pa=f;return}}while(0)}function Ud(a,b){a=a|0;b=b|0;var d=0,e=0,f=0;d=Pa;Pa=Pa+16|0;e=d;d=c[a+52>>2]|0;f=$g(a,b)|0;c[e>>2]=f;ah(a,Pd(d,7108,e)|0)}function Vd(a){a=a|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0;e=c[a+52>>2]|0;f=a+48|0;g=c[f>>2]|0;h=c[g>>2]|0;tg(g,0,0);Wd(g);i=g+20|0;j=c[i>>2]|0;if((j+1|0)>>>0>1073741823)Gd(e);k=h+12|0;l=h+48|0;m=Hd(e,c[k>>2]|0,c[l>>2]<<2,j<<2)|0;c[k>>2]=m;m=c[i>>2]|0;c[l>>2]=m;if((m+1|0)>>>0>1073741823)Gd(e);l=h+20|0;k=h+52|0;j=Hd(e,c[l>>2]|0,c[k>>2]<<2,m<<2)|0;c[l>>2]=j;c[k>>2]=c[i>>2];i=g+32|0;k=c[i>>2]|0;if((k+1|0)>>>0>268435455)Gd(e);j=h+8|0;l=h+44|0;m=Hd(e,c[j>>2]|0,c[l>>2]<<4,k<<4)|0;c[j>>2]=m;c[l>>2]=c[i>>2];i=g+36|0;l=c[i>>2]|0;if((l+1|0)>>>0>1073741823)Gd(e);m=h+16|0;j=h+56|0;k=Hd(e,c[m>>2]|0,c[j>>2]<<2,l<<2)|0;c[m>>2]=k;c[j>>2]=c[i>>2];i=g+44|0;j=b[i>>1]|0;if((j+1|0)>>>0>357913941)Gd(e);k=h+24|0;m=h+60|0;l=Hd(e,c[k>>2]|0,(c[m>>2]|0)*12|0,j*12|0)|0;c[k>>2]=l;c[m>>2]=b[i>>1];i=g+47|0;m=h+28|0;l=h+40|0;h=Hd(e,c[m>>2]|0,c[l>>2]<<3,d[i>>0]<<3)|0;c[m>>2]=h;c[l>>2]=d[i>>0];c[f>>2]=c[g+8>>2];if((c[a+16>>2]&-2|0)==288){g=c[a+24>>2]|0;ch(a,g+16|0,c[g+12>>2]|0)|0}g=e+8|0;c[g>>2]=(c[g>>2]|0)+-16;if((c[(c[e+12>>2]|0)+12>>2]|0)<=0)return;Ed(e);return}function Wd(e){e=e|0;var f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0,z=0,A=0;f=e+16|0;g=c[f>>2]|0;h=e+12|0;i=c[h>>2]|0;if(c[g>>2]|0?a[g+9>>0]|0:0){j=qg(e)|0;xg(e,j,d[g+8>>0]|0);wg(e,j)}if(a[g+10>>0]|0){j=i+52|0;k=Be(c[j>>2]|0,8824)|0;l=i+64|0;m=c[l>>2]|0;n=m+24|0;o=i+48|0;p=c[o>>2]|0;q=c[p+20>>2]|0;r=m+28|0;s=c[r>>2]|0;t=m+32|0;if((s|0)<(c[t>>2]|0)){u=c[n>>2]|0;v=p;w=s;x=m}else{m=Fd(c[j>>2]|0,c[n>>2]|0,t,16,32767,6961)|0;c[n>>2]=m;u=m;v=c[o>>2]|0;w=c[r>>2]|0;x=c[l>>2]|0}c[u+(s<<4)>>2]=k;c[u+(s<<4)+8>>2]=0;a[u+(s<<4)+12>>0]=a[v+46>>0]|0;c[u+(s<<4)+4>>2]=q;c[r>>2]=w+1;w=(c[x+24>>2]|0)+(s<<4)|0;s=b[(c[v+16>>2]|0)+6>>1]|0;v=x+16|0;if((c[v>>2]|0)>(s|0)){r=x+12|0;x=s;while(1){if(!(xe(c[(c[r>>2]|0)+(x<<4)>>2]|0,c[w>>2]|0)|0))y=x+1|0;else{Xd(i,x,w);y=x}if((y|0)<(c[v>>2]|0))x=y;else break}}}y=c[g>>2]|0;c[f>>2]=y;f=g+8|0;x=a[f>>0]|0;v=e+46|0;w=a[v>>0]|0;r=w&255;s=c[(c[h>>2]|0)+64>>2]|0;q=s+4|0;c[q>>2]=(x&255)-r+(c[q>>2]|0);if((x&255)<(w&255)){q=c[e+20>>2]|0;u=c[e+40>>2]|0;k=c[(c[e>>2]|0)+24>>2]|0;l=c[s>>2]|0;o=r;while(1){r=(o&255)+-1<<24>>24;c[k+((b[l+(u+(r&255)<<1)>>1]|0)*12|0)+8>>2]=q;if((r&255)>(x&255))o=o+-1|0;else break}a[v>>0]=x;z=x}else z=w;a[e+48>>0]=z;z=c[i+64>>2]|0;c[z+28>>2]=b[g+4>>1];w=b[g+6>>1]|0;if(!y)if((c[z+16>>2]|0)>(w|0))Zd(i,(c[z+12>>2]|0)+(w<<4)|0);else return;z=s+16|0;if((c[z>>2]|0)<=(w|0))return;i=s+12|0;s=g+9|0;g=w;w=x;while(1){x=c[i>>2]|0;y=x+(g<<4)+12|0;v=w&255;if((d[y>>0]|0)>(w&255)){if(!(a[s>>0]|0))A=w;else{xg(e,c[x+(g<<4)+4>>2]|0,v);A=a[f>>0]|0}a[y>>0]=A}y=g+((Yd(c[h>>2]|0,g)|0)==0&1)|0;if((y|0)>=(c[z>>2]|0))break;g=y;w=a[f>>0]|0}return}function Xd(e,f,g){e=e|0;f=f|0;g=g|0;var h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0;h=Pa;Pa=Pa+16|0;i=h;j=c[e+48>>2]|0;k=c[e+64>>2]|0;l=k+12|0;m=c[l>>2]|0;n=a[m+(f<<4)+12>>0]|0;if((n&255)<(d[g+12>>0]|0)){o=c[e+52>>2]|0;p=c[m+(f<<4)+8>>2]|0;q=(c[(c[(c[j>>2]|0)+24>>2]|0)+((b[(c[c[(c[j+12>>2]|0)+64>>2]>>2]|0)+((c[j+40>>2]|0)+(n&255)<<1)>>1]|0)*12|0)>>2]|0)+16|0;c[i>>2]=(c[m+(f<<4)>>2]|0)+16;c[i+4>>2]=p;c[i+8>>2]=q;_d(e,Pd(o,7052,i)|0)}vg(j,c[m+(f<<4)+4>>2]|0,c[g+4>>2]|0);g=k+16|0;k=(c[g>>2]|0)+-1|0;if((k|0)<=(f|0)){r=k;c[g>>2]=r;Pa=h;return}k=f;do{f=c[l>>2]|0;m=f+(k<<4)|0;k=k+1|0;j=f+(k<<4)|0;c[m>>2]=c[j>>2];c[m+4>>2]=c[j+4>>2];c[m+8>>2]=c[j+8>>2];c[m+12>>2]=c[j+12>>2];j=(c[g>>2]|0)+-1|0}while((k|0)<(j|0));r=j;c[g>>2]=r;Pa=h;return}function Yd(e,f){e=e|0;f=f|0;var g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0;g=e+48|0;h=c[(c[g>>2]|0)+16>>2]|0;i=c[e+64>>2]|0;j=c[i+12>>2]|0;k=h+4|0;l=b[k>>1]|0;m=i+28|0;if((c[m>>2]|0)<=(l|0)){n=0;return n|0}o=i+24|0;i=j+(f<<4)|0;p=l;while(1){q=c[o>>2]|0;r=q+(p<<4)|0;if(xe(c[r>>2]|0,c[i>>2]|0)|0)break;l=p+1|0;if((l|0)<(c[m>>2]|0))p=l;else{n=0;s=10;break}}if((s|0)==10)return n|0;s=a[q+(p<<4)+12>>0]|0;do if((d[j+(f<<4)+12>>0]|0)>(s&255)){if((a[h+9>>0]|0)==0?(c[m>>2]|0)<=(b[k>>1]|0):0)break;xg(c[g>>2]|0,c[j+(f<<4)+4>>2]|0,s&255)}while(0);Xd(e,f,r);n=1;return n|0}function Zd(b,d){b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0;e=Pa;Pa=Pa+16|0;f=e;e=c[d>>2]|0;if((a[e+4>>0]|0)==4)g=(a[e+6>>0]|0)==0?6974:7018;else g=6974;h=c[b+52>>2]|0;i=c[d+8>>2]|0;c[f>>2]=e+16;c[f+4>>2]=i;_d(b,Pd(h,g,f)|0)}function _d(a,b){a=a|0;b=b|0;c[a+16>>2]=0;ah(a,b)}function $d(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0;e=Pa;Pa=Pa+32|0;f=e+8|0;g=e;e=a+12|0;h=c[(c[e>>2]|0)+52>>2]|0;i=c[(c[a>>2]|0)+64>>2]|0;if(!i)j=7503;else{c[g>>2]=i;j=Pd(h,7483,g)|0}c[f>>2]=d;c[f+4>>2]=b;c[f+8>>2]=j;j=Pd(h,7517,f)|0;ah(c[e>>2]|0,j)}function ae(d,e){d=d|0;e=e|0;var f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0;f=Pa;Pa=Pa+48|0;g=f+24|0;h=f;i=d+48|0;j=c[i>>2]|0;eh(d);be(d,h,0)|0;k=d+16|0;if((c[k>>2]|0)!=275)Ud(d,275);eh(d);a:do switch(c[k>>2]|0){case 258:case 266:{Rg(c[i>>2]|0,h);a[g+10>>0]=0;a[g+8>>0]=a[j+46>>0]|0;l=c[(c[j+12>>2]|0)+64>>2]|0;b[g+4>>1]=c[l+28>>2];b[g+6>>1]=c[l+16>>2];a[g+9>>0]=0;l=j+16|0;c[g>>2]=c[l>>2];c[l>>2]=g;l=c[h+16>>2]|0;m=c[d+4>>2]|0;n=(c[k>>2]|0)==266;eh(d);do if(n)if((c[k>>2]|0)==288){o=c[d+24>>2]|0;eh(d);p=o;break}else Ud(d,288);else p=Be(c[d+52>>2]|0,8824)|0;while(0);n=c[d+64>>2]|0;o=n+12|0;q=n+16|0;r=c[q>>2]|0;s=n+20|0;if((r|0)<(c[s>>2]|0)){t=c[o>>2]|0;u=r}else{n=Fd(c[d+52>>2]|0,c[o>>2]|0,s,16,32767,6961)|0;c[o>>2]=n;t=n;u=c[q>>2]|0}c[t+(r<<4)>>2]=p;c[t+(r<<4)+8>>2]=m;a[t+(r<<4)+12>>0]=a[(c[i>>2]|0)+46>>0]|0;c[t+(r<<4)+4>>2]=l;c[q>>2]=u+1;Yd(d,r)|0;b:while(1){switch(c[k>>2]|0){case 286:case 262:case 261:case 260:{break b;break}case 285:case 59:break;default:{v=16;break b}}Td(d)}if((v|0)==16){w=qg(j)|0;break a}Wd(j);Pa=f;return}default:{Qg(c[i>>2]|0,h);a[g+10>>0]=0;a[g+8>>0]=a[j+46>>0]|0;l=c[(c[j+12>>2]|0)+64>>2]|0;b[g+4>>1]=c[l+28>>2];b[g+6>>1]=c[l+16>>2];a[g+9>>0]=0;l=j+16|0;c[g>>2]=c[l>>2];c[l>>2]=g;w=c[h+20>>2]|0}}while(0);c:do{h=c[k>>2]|0;switch(h|0){case 277:case 286:case 262:case 261:case 260:{break c;break}default:{}}Td(d)}while((h|0)!=274);Wd(j);if((c[k>>2]&-2|0)==260)sg(j,e,qg(j)|0);wg(j,w);Pa=f;return}function be(e,f,h){e=e|0;f=f|0;h=h|0;var i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0;i=Pa;Pa=Pa+32|0;j=i;k=e+48|0;l=c[k>>2]|0;m=e+52|0;n=(c[m>>2]|0)+38|0;o=(b[n>>1]|0)+1<<16>>16;b[n>>1]=o;if((o&65535)>200)$d(l,200,7120);o=e+16|0;a:do switch(c[o>>2]|0){case 271:{p=1;q=6;break}case 45:{p=0;q=6;break}case 35:{p=2;q=6;break}case 287:{c[f+16>>2]=-1;c[f+20>>2]=-1;c[f>>2]=5;c[f+8>>2]=0;g[f+8>>3]=+g[e+24>>3];q=18;break}case 289:{n=Bg(l,c[e+24>>2]|0)|0;c[f+16>>2]=-1;c[f+20>>2]=-1;c[f>>2]=4;c[f+8>>2]=n;q=18;break}case 270:{c[f+16>>2]=-1;c[f+20>>2]=-1;c[f>>2]=1;c[f+8>>2]=0;q=18;break}case 276:{c[f+16>>2]=-1;c[f+20>>2]=-1;c[f>>2]=2;c[f+8>>2]=0;q=18;break}case 263:{c[f+16>>2]=-1;c[f+20>>2]=-1;c[f>>2]=3;c[f+8>>2]=0;q=18;break}case 280:{if(!(a[(c[l>>2]|0)+77>>0]|0))ah(e,7440);else{n=pg(l,38,0,1,0)|0;c[f+16>>2]=-1;c[f+20>>2]=-1;c[f>>2]=13;c[f+8>>2]=n;q=18;break a}break}case 123:{le(e,f);break}case 265:{eh(e);he(e,f,0,c[e+4>>2]|0);break}default:ie(e,f)}while(0);if((q|0)==6){l=c[e+4>>2]|0;eh(e);be(e,f,8)|0;Tg(c[k>>2]|0,p,f,l)}else if((q|0)==18)eh(e);do switch(c[o>>2]|0){case 43:{r=0;break}case 45:{r=1;break}case 42:{r=2;break}case 47:{r=3;break}case 37:{r=4;break}case 94:{r=5;break}case 279:{r=6;break}case 284:{r=10;break}case 281:{r=7;break}case 60:{r=8;break}case 283:{r=9;break}case 62:{r=11;break}case 282:{r=12;break}case 257:{r=13;break}case 272:{r=14;break}default:{s=15;t=c[m>>2]|0;u=t+38|0;v=b[u>>1]|0;w=v+-1<<16>>16;b[u>>1]=w;Pa=i;return s|0}}while(0);o=e+4|0;l=r;while(1){if((d[320+(l<<1)>>0]|0)<=(h|0)){s=l;q=37;break}r=c[o>>2]|0;eh(e);Vg(c[k>>2]|0,l,f);p=l;l=be(e,j,d[320+(l<<1)+1>>0]|0)|0;Wg(c[k>>2]|0,p,f,j,r);if((l|0)==15){s=15;q=37;break}}if((q|0)==37){t=c[m>>2]|0;u=t+38|0;v=b[u>>1]|0;w=v+-1<<16>>16;b[u>>1]=w;Pa=i;return s|0}return 0}function ce(d,e){d=d|0;e=e|0;var f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0;f=c[d+48>>2]|0;g=c[d+64>>2]|0;h=c[f>>2]|0;i=h+60|0;j=c[i>>2]|0;k=f+44|0;if((j|0)>(b[k>>1]|0)){l=j;m=c[h+24>>2]|0}else{n=h+24|0;o=Fd(c[d+52>>2]|0,c[n>>2]|0,i,12,32767,7424)|0;c[n>>2]=o;l=c[i>>2]|0;m=o}if((j|0)<(l|0)?(o=j+1|0,c[m+(j*12|0)>>2]=0,(o|0)<(l|0)):0){j=o;do{c[m+(j*12|0)>>2]=0;j=j+1|0}while((j|0)!=(l|0))}l=b[k>>1]|0;j=l<<16>>16;c[m+(j*12|0)>>2]=e;if((a[e+5>>0]&3)!=0?(a[h+5>>0]&4)!=0:0){jd(c[d+52>>2]|0,h,e);e=b[k>>1]|0;p=e<<16>>16;q=e}else{p=j;q=l}b[k>>1]=q+1<<16>>16;q=g+4|0;k=c[q>>2]|0;l=k+1|0;if((l-(c[f+40>>2]|0)|0)>200)$d(f,200,7424);f=g+8|0;if((k+2|0)>(c[f>>2]|0)){j=Fd(c[d+52>>2]|0,c[g>>2]|0,f,2,2147483645,7424)|0;c[g>>2]=j;f=c[q>>2]|0;r=f+1|0;s=j;t=f;u=p&65535;c[q>>2]=r;v=s+(t<<1)|0;b[v>>1]=u;return}else{r=l;s=c[g>>2]|0;t=k;u=p&65535;c[q>>2]=r;v=s+(t<<1)|0;b[v>>1]=u;return}}function de(e,f,g,h,i){e=e|0;f=f|0;g=g|0;h=h|0;i=i|0;var j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0;j=Pa;Pa=Pa+32|0;k=j+12|0;l=j;m=e+48|0;n=c[m>>2]|0;o=n+46|0;p=a[o>>0]|0;a[o>>0]=(p&255)+3;q=c[n+20>>2]|0;r=n+12|0;s=c[(c[n>>2]|0)+24>>2]|0;t=c[c[(c[r>>2]|0)+64>>2]>>2]|0;u=(c[n+40>>2]|0)+(p+3&255)|0;c[s+((b[t+(u+-3<<1)>>1]|0)*12|0)+4>>2]=q;c[s+((b[t+(u+-2<<1)>>1]|0)*12|0)+4>>2]=q;c[s+((b[t+(u+-1<<1)>>1]|0)*12|0)+4>>2]=q;q=e+16|0;if((c[q>>2]|0)!=259)Ud(e,259);eh(e);u=(i|0)!=0;if(u)v=rg(n,33,f,131070)|0;else v=qg(n)|0;a[l+10>>0]=0;a[l+8>>0]=a[o>>0]|0;o=c[(c[r>>2]|0)+64>>2]|0;b[l+4>>1]=c[o+28>>2];b[l+6>>1]=c[o+16>>2];a[l+9>>0]=0;o=n+16|0;c[l>>2]=c[o>>2];c[o>>2]=l;l=c[m>>2]|0;o=l+46|0;r=(d[o>>0]|0)+h|0;a[o>>0]=r;if(h|0){o=c[l+20>>2]|0;i=c[(c[l>>2]|0)+24>>2]|0;t=c[c[(c[l+12>>2]|0)+64>>2]>>2]|0;s=(c[l+40>>2]|0)+(r&255)|0;r=h;do{c[i+((b[t+(s-r<<1)>>1]|0)*12|0)+4>>2]=o;r=r+-1|0}while((r|0)!=0)}Ag(n,h);r=c[m>>2]|0;a[k+10>>0]=0;a[k+8>>0]=a[r+46>>0]|0;m=c[(c[r+12>>2]|0)+64>>2]|0;b[k+4>>1]=c[m+28>>2];b[k+6>>1]=c[m+16>>2];a[k+9>>0]=0;m=r+16|0;c[k>>2]=c[m>>2];c[m>>2]=k;a:do{k=c[q>>2]|0;switch(k|0){case 277:case 286:case 262:case 261:case 260:{break a;break}default:{}}Td(e)}while((k|0)!=274);Wd(r);Wd(n);wg(n,v);if(u){w=rg(n,32,f,131070)|0;x=v+1|0;vg(n,w,x);Yg(n,g);Pa=j;return}else{pg(n,34,f,0,h)|0;Yg(n,g);w=rg(n,35,f+2|0,131070)|0;x=v+1|0;vg(n,w,x);Yg(n,g);Pa=j;return}}function ee(a,b,e,f){a=a|0;b=b|0;e=e|0;f=f|0;var g=0;g=b-e|0;switch(c[f>>2]|0){case 13:case 12:{e=g+1|0;b=(e|0)>0?e:0;Eg(a,f,b);if((b|0)<=1)return;Ag(a,b+-1|0);return}case 0:break;default:Hg(a,f)}if((g|0)<=0)return;f=d[a+48>>0]|0;Ag(a,g);ng(a,f,g);return}function fe(e,f,g,h){e=e|0;f=f|0;g=g|0;h=h|0;var i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0;if(!e){i=0;return i|0}j=a[e+46>>0]|0;a:do if(j<<24>>24){k=e+12|0;l=e+40|0;m=j&255;while(1){n=m+-1|0;if(xe(f,c[(c[(c[e>>2]|0)+24>>2]|0)+((b[(c[c[(c[k>>2]|0)+64>>2]>>2]|0)+((c[l>>2]|0)+n<<1)>>1]|0)*12|0)>>2]|0)|0)break;if((m|0)>1)m=n;else break a}if((m|0)>0){c[g+16>>2]=-1;c[g+20>>2]=-1;c[g>>2]=7;c[g+8>>2]=n;if(h|0){i=7;return i|0}l=e+16|0;do l=c[l>>2]|0;while((m|0)<=(d[l+8>>0]|0));a[l+9>>0]=1;i=7;return i|0}}while(0);h=c[(c[e>>2]|0)+28>>2]|0;n=e+47|0;b:do if(!(a[n>>0]|0))o=15;else{j=0;while(1){if(xe(c[h+(j<<3)>>2]|0,f)|0){p=j;break b}j=j+1|0;if(j>>>0>=(d[n>>0]|0)>>>0){o=15;break}}}while(0);do if((o|0)==15)if(!(fe(c[e+8>>2]|0,f,g,0)|0)){i=0;return i|0}else{p=Sd(e,f,g)|0;break}while(0);c[g+16>>2]=-1;c[g+20>>2]=-1;c[g>>2]=8;c[g+8>>2]=p;i=8;return i|0}function ge(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0,i=0;d=Pa;Pa=Pa+32|0;e=d;f=a+48|0;g=c[f>>2]|0;Lg(g,b);eh(a);if((c[a+16>>2]|0)==288){h=c[a+24>>2]|0;eh(a);i=Bg(c[f>>2]|0,h)|0;c[e+16>>2]=-1;c[e+20>>2]=-1;c[e>>2]=4;c[e+8>>2]=i;Sg(g,b,e);Pa=d;return}else Ud(a,288)}function he(e,f,g,h){e=e|0;f=f|0;g=g|0;h=h|0;var i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0,z=0,A=0;i=Pa;Pa=Pa+80|0;j=i;k=i+24|0;l=i+12|0;m=e+48|0;n=c[m>>2]|0;o=e+52|0;p=c[o>>2]|0;q=c[n>>2]|0;r=n+36|0;n=q+56|0;s=c[n>>2]|0;t=q+16|0;if(((c[r>>2]|0)>=(s|0)?(u=Fd(p,c[t>>2]|0,n,4,262143,7384)|0,c[t>>2]=u,v=c[n>>2]|0,(s|0)<(v|0)):0)?(n=s+1|0,c[u+(s<<2)>>2]=0,(n|0)<(v|0)):0){s=n;do{c[(c[t>>2]|0)+(s<<2)>>2]=0;s=s+1|0}while((s|0)!=(v|0))}v=gd(p)|0;s=c[t>>2]|0;t=c[r>>2]|0;c[r>>2]=t+1;c[s+(t<<2)>>2]=v;if(a[v+5>>0]&3?a[q+5>>0]&4:0)jd(p,q,v);c[k>>2]=v;c[v+64>>2]=h;q=c[o>>2]|0;c[k+8>>2]=c[m>>2];p=k+12|0;c[p>>2]=e;c[m>>2]=k;c[k+20>>2]=0;c[k+24>>2]=0;c[k+28>>2]=-1;c[k+32>>2]=0;c[k+36>>2]=0;t=k+44|0;c[t>>2]=0;a[t+4>>0]=0;c[k+40>>2]=c[(c[e+64>>2]|0)+4>>2];t=k+16|0;c[t>>2]=0;c[v+36>>2]=c[e+68>>2];a[v+78>>0]=2;v=Le(q)|0;c[k+4>>2]=v;s=q+8|0;r=c[s>>2]|0;c[r>>2]=v;c[r+8>>2]=69;r=(c[s>>2]|0)+16|0;c[s>>2]=r;if(((c[q+24>>2]|0)-r|0)<16)Mc(q,0);a[l+10>>0]=0;a[l+8>>0]=a[k+46>>0]|0;q=c[(c[p>>2]|0)+64>>2]|0;b[l+4>>1]=c[q+28>>2];b[l+6>>1]=c[q+16>>2];a[l+9>>0]=0;c[l>>2]=c[t>>2];c[t>>2]=l;l=e+16|0;if((c[l>>2]|0)!=40)Ud(e,40);eh(e);if(!g){g=c[m>>2]|0;w=c[g>>2]|0;x=g}else{ce(e,ch(e,7394,4)|0);g=c[m>>2]|0;t=g+46|0;q=a[t>>0]|0;a[t>>0]=(q&255)+1;t=c[g>>2]|0;c[(c[t+24>>2]|0)+((b[(c[c[(c[g+12>>2]|0)+64>>2]>>2]|0)+((c[g+40>>2]|0)+(q+1&255)+-1<<1)>>1]|0)*12|0)+4>>2]=c[g+20>>2];w=t;x=g}g=w+77|0;a[g>>0]=0;t=c[l>>2]|0;a:do if((t|0)!=41){q=e+24|0;p=0;r=t;b:while(1){switch(r|0){case 280:{y=20;break b;break}case 288:break;default:{y=21;break b}}s=c[q>>2]|0;eh(e);ce(e,s);s=p+1|0;if(a[g>>0]|0){z=s;break a}if((c[l>>2]|0)!=44){z=s;break a}eh(e);p=s;r=c[l>>2]|0}if((y|0)==20){eh(e);a[g>>0]=1;z=p;break}else if((y|0)==21)ah(e,7399)}else z=0;while(0);g=c[m>>2]|0;t=g+46|0;r=z+(d[t>>0]|0)|0;a[t>>0]=r;if(z|0){t=c[g+20>>2]|0;q=c[(c[g>>2]|0)+24>>2]|0;s=c[c[(c[g+12>>2]|0)+64>>2]>>2]|0;v=(c[g+40>>2]|0)+(r&255)|0;r=z;do{c[q+((b[s+(v-r<<1)>>1]|0)*12|0)+4>>2]=t;r=r+-1|0}while((r|0)!=0)}r=a[x+46>>0]|0;a[w+76>>0]=r;Ag(x,r&255);if((c[l>>2]|0)!=41)Ud(e,41);eh(e);c:while(1){r=c[l>>2]|0;switch(r|0){case 277:case 286:case 262:case 261:case 260:{A=r;break c;break}default:{}}Td(e);if((r|0)==274){y=32;break}}if((y|0)==32)A=c[l>>2]|0;l=c[e+4>>2]|0;c[(c[k>>2]|0)+68>>2]=l;if((A|0)==262){eh(e);A=c[(c[m>>2]|0)+8>>2]|0;m=rg(A,37,0,(c[A+36>>2]|0)+-1|0)|0;c[f+16>>2]=-1;c[f+20>>2]=-1;c[f>>2]=11;c[f+8>>2]=m;Hg(A,f);Vd(e);Pa=i;return}if((l|0)==(h|0))Ud(e,262);else{l=c[o>>2]|0;o=$g(e,262)|0;i=$g(e,265)|0;c[j>>2]=o;c[j+4>>2]=i;c[j+8>>2]=h;ah(e,Pd(l,7129,j)|0)}}function ie(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0;d=Pa;Pa=Pa+48|0;e=d+24|0;f=d;g=a+48|0;h=c[g>>2]|0;i=a+4|0;j=c[i>>2]|0;k=a+16|0;a:do switch(c[k>>2]|0){case 40:{eh(a);be(a,b,0)|0;if((c[k>>2]|0)==41){eh(a);Gg(c[g>>2]|0,b);l=a+24|0;break a}if((c[i>>2]|0)==(j|0))Ud(a,41);else{m=c[a+52>>2]|0;n=$g(a,41)|0;o=$g(a,40)|0;c[e>>2]=n;c[e+4>>2]=o;c[e+8>>2]=j;ah(a,Pd(m,7129,e)|0)}break}case 288:{m=a+24|0;o=c[m>>2]|0;eh(a);n=c[g>>2]|0;if(!(fe(n,o,b,1)|0)){fe(n,c[a+72>>2]|0,b,1)|0;p=Bg(c[g>>2]|0,o)|0;c[f+16>>2]=-1;c[f+20>>2]=-1;c[f>>2]=4;c[f+8>>2]=p;Sg(n,b,f);l=m}else l=m;break}default:ah(a,7315)}while(0);e=f+16|0;i=f+20|0;m=f+8|0;b:while(1)switch(c[k>>2]|0){case 46:{ge(a,b);break}case 91:{Lg(h,b);eh(a);be(a,f,0)|0;Mg(c[g>>2]|0,f);if((c[k>>2]|0)!=93){q=14;break b}eh(a);Sg(h,b,f);break}case 58:{eh(a);if((c[k>>2]|0)!=288){q=17;break b}n=c[l>>2]|0;eh(a);p=Bg(c[g>>2]|0,n)|0;c[e>>2]=-1;c[i>>2]=-1;c[f>>2]=4;c[m>>2]=p;Pg(h,b,f);ke(a,b,j);break}case 123:case 289:case 40:{Hg(h,b);ke(a,b,j);break}default:{q=21;break b}}if((q|0)==14)Ud(a,93);else if((q|0)==17)Ud(a,288);else if((q|0)==21){Pa=d;return}}function je(f,g,h){f=f|0;g=g|0;h=h|0;var i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0,z=0,A=0,B=0;i=Pa;Pa=Pa+64|0;j=i+32|0;k=i;l=g+8|0;if(((c[l>>2]|0)+-7|0)>>>0>=3)ah(f,7302);m=f+16|0;a:do switch(c[m>>2]|0){case 44:{eh(f);c[k>>2]=g;n=k+8|0;ie(f,n);o=c[n>>2]|0;if((o|0)!=9){n=c[f+48>>2]|0;p=a[n+48>>0]|0;q=k+16|0;r=p&255;s=(o|0)==7;t=g;u=0;while(1){if((c[t+8>>2]|0)==9){v=t+16|0;w=v+3|0;if((o|0)==(d[w>>0]|0)?(x=v+2|0,(c[q>>2]|0)==(d[x>>0]|0)):0){a[w>>0]=7;a[x>>0]=p;y=1}else y=u;if(s?(c[q>>2]|0)==(b[v>>1]|0):0){b[v>>1]=r;z=1}else z=y}else z=u;t=c[t>>2]|0;if(!t)break;else u=z}if(z|0){pg(n,(o|0)==7?0:5,p&255,c[q>>2]|0,0)|0;Ag(n,1)}}if(((e[(c[f+52>>2]|0)+38>>1]|0)+h|0)>200)$d(c[f+48>>2]|0,200,7120);else{je(f,k,h+1|0);A=f+48|0;break a}break}case 61:{eh(f);be(f,j,0)|0;u=f+48|0;if((c[m>>2]|0)==44){t=1;while(1){eh(f);Hg(c[u>>2]|0,j);be(f,j,0)|0;r=t+1|0;if((c[m>>2]|0)==44)t=r;else{B=r;break}}}else B=1;t=c[u>>2]|0;if((B|0)==(h|0)){Fg(t,j);Og(c[u>>2]|0,l,j);Pa=i;return}else{ee(t,h,B,j);if((B|0)<=(h|0)){A=u;break a}t=(c[u>>2]|0)+48|0;a[t>>0]=h-B+(d[t>>0]|0);A=u;break a}break}default:Ud(f,61)}while(0);f=c[A>>2]|0;A=(d[f+48>>0]|0)+-1|0;c[j+16>>2]=-1;c[j+20>>2]=-1;c[j>>2]=6;c[j+8>>2]=A;Og(f,l,j);Pa=i;return}function ke(b,e,f){b=b|0;e=e|0;f=f|0;var g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0;g=Pa;Pa=Pa+48|0;h=g+24|0;i=g;j=b+48|0;k=c[j>>2]|0;l=b+16|0;switch(c[l>>2]|0){case 40:{eh(b);if((c[l>>2]|0)!=41){be(b,i,0)|0;if((c[l>>2]|0)==44)do{eh(b);Hg(c[j>>2]|0,i);be(b,i,0)|0}while((c[l>>2]|0)==44);Eg(k,i,-1);if((c[l>>2]|0)!=41)if((c[b+4>>2]|0)==(f|0))Ud(b,41);else{l=c[b+52>>2]|0;j=$g(b,41)|0;m=$g(b,40)|0;c[h>>2]=j;c[h+4>>2]=m;c[h+8>>2]=f;ah(b,Pd(l,7129,h)|0)}}else c[i>>2]=0;eh(b);break}case 123:{le(b,i);break}case 289:{h=Bg(k,c[b+24>>2]|0)|0;c[i+16>>2]=-1;c[i+20>>2]=-1;c[i>>2]=4;c[i+8>>2]=h;eh(b);break}default:ah(b,7333)}b=e+8|0;h=c[b>>2]|0;switch(c[i>>2]|0){case 0:break;case 13:case 12:{n=0;o=pg(k,29,h,n,2)|0;p=e+16|0;c[p>>2]=-1;q=e+20|0;c[q>>2]=-1;c[e>>2]=12;c[b>>2]=o;Yg(k,f);r=h+1|0;s=r&255;t=k+48|0;a[t>>0]=s;Pa=g;return}default:Hg(k,i)}n=(d[k+48>>0]|0)-h|0;o=pg(k,29,h,n,2)|0;p=e+16|0;c[p>>2]=-1;q=e+20|0;c[q>>2]=-1;c[e>>2]=12;c[b>>2]=o;Yg(k,f);r=h+1|0;s=r&255;t=k+48|0;a[t>>0]=s;Pa=g;return}function le(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0;d=Pa;Pa=Pa+64|0;e=d+40|0;f=d;g=a+48|0;h=c[g>>2]|0;i=a+4|0;j=c[i>>2]|0;k=pg(h,11,0,0,0)|0;l=f+36|0;c[l>>2]=0;m=f+28|0;c[m>>2]=0;n=f+32|0;c[n>>2]=0;o=f+24|0;c[o>>2]=b;c[b+16>>2]=-1;c[b+20>>2]=-1;c[b>>2]=11;c[b+8>>2]=k;c[f+16>>2]=-1;c[f+20>>2]=-1;c[f>>2]=0;c[f+8>>2]=0;Hg(c[g>>2]|0,b);b=a+16|0;if((c[b>>2]|0)!=123)Ud(a,123);eh(a);a:do if((c[b>>2]|0)!=125){p=0;b:while(1){if(p|0?(Hg(h,f),c[f>>2]=0,(c[l>>2]|0)==50):0){Zg(h,c[(c[o>>2]|0)+8>>2]|0,c[n>>2]|0,50);c[l>>2]=0}c:do switch(c[b>>2]|0){case 288:{if((kh(a)|0)==61){me(a,f);break c}be(a,f,0)|0;q=c[n>>2]|0;if((q|0)>2147483645){r=14;break b}c[n>>2]=q+1;c[l>>2]=(c[l>>2]|0)+1;break}case 91:{me(a,f);break}default:{be(a,f,0)|0;q=c[n>>2]|0;if((q|0)>2147483645){r=19;break b}c[n>>2]=q+1;c[l>>2]=(c[l>>2]|0)+1}}while(0);switch(c[b>>2]|0){case 125:{break a;break}case 44:{eh(a);break}case 59:{eh(a);break}default:{r=23;break b}}if((c[b>>2]|0)==125)break a;p=c[f>>2]|0}if((r|0)==14)$d(c[g>>2]|0,2147483645,7361);else if((r|0)==19)$d(c[g>>2]|0,2147483645,7361);else if((r|0)==23)if((c[i>>2]|0)==(j|0))Ud(a,125);else{p=c[a+52>>2]|0;q=$g(a,125)|0;s=$g(a,123)|0;c[e>>2]=q;c[e+4>>2]=s;c[e+8>>2]=j;ah(a,Pd(p,7129,e)|0)}}while(0);eh(a);a=c[l>>2]|0;d:do if(a|0){switch(c[f>>2]|0){case 13:case 12:{Eg(h,f,-1);Zg(h,c[(c[o>>2]|0)+8>>2]|0,c[n>>2]|0,-1);c[n>>2]=(c[n>>2]|0)+-1;break d;break}case 0:{t=a;break}default:{Hg(h,f);t=c[l>>2]|0}}Zg(h,c[(c[o>>2]|0)+8>>2]|0,c[n>>2]|0,t)}while(0);t=c[(c[(c[h>>2]|0)+12>>2]|0)+(k<<2)>>2]&8388607;o=(Id(c[n>>2]|0)|0)<<23|t;c[(c[(c[h>>2]|0)+12>>2]|0)+(k<<2)>>2]=o;t=(Id(c[m>>2]|0)|0)<<14&8372224|o&-8372225;c[(c[(c[h>>2]|0)+12>>2]|0)+(k<<2)>>2]=t;Pa=d;return}function me(b,d){b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0;e=Pa;Pa=Pa+48|0;f=e+24|0;g=e;h=b+48|0;i=c[h>>2]|0;j=i+48|0;k=a[j>>0]|0;l=b+16|0;do if((c[l>>2]|0)==288){m=d+28|0;if((c[m>>2]|0)>2147483645)$d(i,2147483645,7361);else{n=c[b+24>>2]|0;eh(b);o=Bg(c[h>>2]|0,n)|0;c[f+16>>2]=-1;c[f+20>>2]=-1;c[f>>2]=4;c[f+8>>2]=o;p=m;break}}else{eh(b);be(b,f,0)|0;Mg(c[h>>2]|0,f);if((c[l>>2]|0)==93){eh(b);p=d+28|0;break}else Ud(b,93)}while(0);c[p>>2]=(c[p>>2]|0)+1;if((c[l>>2]|0)==61){eh(b);l=Ng(i,f)|0;be(b,g,0)|0;f=c[(c[d+24>>2]|0)+8>>2]|0;pg(i,10,f,l,Ng(i,g)|0)|0;a[j>>0]=k;Pa=e;return}else Ud(b,61)}function ne(a,b){a=a|0;b=b|0;var d=0,e=0;d=a+12|0;e=a+8|0;c[e>>2]=(c[d>>2]|0)-b+(c[e>>2]|0);c[d>>2]=b;return}function oe(a){a=a|0;var b=0,d=0;b=Hd(a,0,0,40)|0;d=c[a+16>>2]|0;c[d+12>>2]=b;c[b+8>>2]=d;c[b+12>>2]=0;return b|0}function pe(a){a=a|0;var b=0,d=0;b=(c[a+16>>2]|0)+12|0;d=c[b>>2]|0;c[b>>2]=0;if(!d)return;b=d;do{d=b;b=c[b+12>>2]|0;Hd(a,d,40,0)|0}while((b|0)!=0);return}function qe(d){d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0;e=d+12|0;if((c[(c[e>>2]|0)+12>>2]|0)>0)Ed(d);f=od(d,8,112,0,0)|0;g=d+8|0;h=c[g>>2]|0;c[h>>2]=f;c[h+8>>2]=72;c[g>>2]=(c[g>>2]|0)+16;c[f+12>>2]=c[e>>2];e=f+28|0;c[e>>2]=0;g=f+16|0;c[g>>2]=0;h=f+32|0;c[h>>2]=0;c[f+64>>2]=0;b[f+38>>1]=0;i=f+52|0;c[i>>2]=0;j=f+40|0;a[j>>0]=0;k=f+44|0;c[k>>2]=0;a[f+41>>0]=1;c[f+56>>2]=0;b[f+36>>1]=1;a[f+6>>0]=0;c[f+68>>2]=0;a[j>>0]=a[d+40>>0]|0;j=c[d+44>>2]|0;c[k>>2]=j;c[i>>2]=c[d+52>>2];c[f+48>>2]=j;j=Hd(d,0,0,640)|0;c[e>>2]=j;c[h>>2]=40;h=j+8|0;c[h>>2]=0;c[j+24>>2]=0;c[j+40>>2]=0;c[j+56>>2]=0;c[j+72>>2]=0;c[j+88>>2]=0;c[j+104>>2]=0;c[j+120>>2]=0;c[j+136>>2]=0;c[j+152>>2]=0;c[j+168>>2]=0;c[j+184>>2]=0;c[j+200>>2]=0;c[j+216>>2]=0;c[j+232>>2]=0;c[j+248>>2]=0;c[j+264>>2]=0;c[j+280>>2]=0;c[j+296>>2]=0;c[j+312>>2]=0;c[j+328>>2]=0;c[j+344>>2]=0;c[j+360>>2]=0;c[j+376>>2]=0;c[j+392>>2]=0;c[j+408>>2]=0;c[j+424>>2]=0;c[j+440>>2]=0;c[j+456>>2]=0;c[j+472>>2]=0;c[j+488>>2]=0;c[j+504>>2]=0;c[j+520>>2]=0;c[j+536>>2]=0;c[j+552>>2]=0;c[j+568>>2]=0;c[j+584>>2]=0;c[j+600>>2]=0;c[j+616>>2]=0;c[j+632>>2]=0;c[f+24>>2]=j+560;e=f+72|0;c[f+80>>2]=0;c[f+84>>2]=0;a[f+90>>0]=0;c[e>>2]=j;c[f+8>>2]=j+16;c[h>>2]=0;c[f+76>>2]=j+336;c[g>>2]=e;return f|0}function re(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0;d=b+28|0;fd(b,c[d>>2]|0);e=c[d>>2]|0;if(!e){Hd(a,b,112,0)|0;return}c[b+16>>2]=b+72;f=b+84|0;g=c[f>>2]|0;c[f>>2]=0;if(!g)h=e;else{e=g;do{g=e;e=c[e+12>>2]|0;Hd(b,g,40,0)|0}while((e|0)!=0);h=c[d>>2]|0}Hd(b,h,c[b+32>>2]<<4,0)|0;Hd(a,b,112,0)|0;return}function se(d,e){d=d|0;e=e|0;var f=0,g=0,h=0,i=0,j=0,k=0;f=Pa;Pa=Pa+32|0;g=f;h=f+16|0;i=Wa[d&255](e,0,8,400)|0;if(!i){j=0;Pa=f;return j|0}k=i+112|0;c[i>>2]=0;a[i+4>>0]=8;a[i+172>>0]=33;a[i+5>>0]=1;a[i+174>>0]=0;c[i+12>>2]=k;c[i+28>>2]=0;c[i+16>>2]=0;c[i+32>>2]=0;c[i+64>>2]=0;b[i+38>>1]=0;c[i+52>>2]=0;a[i+40>>0]=0;c[i+44>>2]=0;a[i+41>>0]=1;c[i+48>>2]=0;c[i+56>>2]=0;b[i+36>>1]=1;a[i+6>>0]=0;c[i+68>>2]=0;c[k>>2]=d;c[i+116>>2]=e;c[i+284>>2]=i;e=Ka(0)|0;c[h>>2]=e;c[g>>2]=i;c[g+4>>2]=h;c[g+8>>2]=15792;c[g+12>>2]=129;h=ye(g,16,e)|0;c[i+168>>2]=h;h=i+224|0;c[i+240>>2]=h;c[i+244>>2]=h;a[i+175>>0]=0;h=i+132|0;c[i+160>>2]=0;c[i+256>>2]=0;c[i+264>>2]=0;c[i+280>>2]=0;c[h>>2]=0;c[h+4>>2]=0;c[h+8>>2]=0;c[h+12>>2]=0;h=eb(0)|0;c[i+288>>2]=h;a[i+173>>0]=5;h=i+120|0;e=i+180|0;g=e+40|0;do{c[e>>2]=0;e=e+4|0}while((e|0)<(g|0));c[h>>2]=400;c[i+124>>2]=0;c[i+268>>2]=200;c[i+272>>2]=200;c[i+276>>2]=200;e=i+364|0;g=e+36|0;do{c[e>>2]=0;e=e+4|0}while((e|0)<(g|0));if(!(Kc(i,135,0)|0)){j=i;Pa=f;return j|0}ue(i);j=0;Pa=f;return j|0}function te(b,d){b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0;d=Pa;Pa=Pa+16|0;e=d;f=c[b+12>>2]|0;g=Hd(b,0,0,640)|0;c[b+28>>2]=g;c[b+32>>2]=40;h=g+8|0;c[h>>2]=0;c[g+24>>2]=0;c[g+40>>2]=0;c[g+56>>2]=0;c[g+72>>2]=0;c[g+88>>2]=0;c[g+104>>2]=0;c[g+120>>2]=0;c[g+136>>2]=0;c[g+152>>2]=0;c[g+168>>2]=0;c[g+184>>2]=0;c[g+200>>2]=0;c[g+216>>2]=0;c[g+232>>2]=0;c[g+248>>2]=0;c[g+264>>2]=0;c[g+280>>2]=0;c[g+296>>2]=0;c[g+312>>2]=0;c[g+328>>2]=0;c[g+344>>2]=0;c[g+360>>2]=0;c[g+376>>2]=0;c[g+392>>2]=0;c[g+408>>2]=0;c[g+424>>2]=0;c[g+440>>2]=0;c[g+456>>2]=0;c[g+472>>2]=0;c[g+488>>2]=0;c[g+504>>2]=0;c[g+520>>2]=0;c[g+536>>2]=0;c[g+552>>2]=0;c[g+568>>2]=0;c[g+584>>2]=0;c[g+600>>2]=0;c[g+616>>2]=0;c[g+632>>2]=0;c[b+24>>2]=g+560;i=b+72|0;c[b+80>>2]=0;c[b+84>>2]=0;a[b+90>>0]=0;c[i>>2]=g;c[b+8>>2]=g+16;c[h>>2]=0;c[b+76>>2]=g+336;c[b+16>>2]=i;i=Le(b)|0;c[f+40>>2]=i;c[f+48>>2]=69;Fe(b,i,2,0);c[e>>2]=b;g=e+8|0;c[g>>2]=72;Ie(b,i,1,e);h=Le(b)|0;c[e>>2]=h;c[g>>2]=69;Ie(b,i,2,e);ze(b,32);Qe(b);_g(b);e=Ae(b,7558,17)|0;c[f+180>>2]=e;b=e+5|0;a[b>>0]=a[b>>0]|32;a[f+63>>0]=1;Pa=d;return}function ue(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0;b=a+12|0;d=c[b>>2]|0;e=a+28|0;fd(a,c[e>>2]|0);zd(a);f=c[b>>2]|0;Hd(a,c[f+24>>2]|0,c[f+32>>2]<<2,0)|0;f=d+144|0;b=d+152|0;g=Hd(a,c[f>>2]|0,c[b>>2]|0,0)|0;c[f>>2]=g;c[b>>2]=0;b=c[e>>2]|0;if(!b){h=c[d>>2]|0;i=d+4|0;j=c[i>>2]|0;Wa[h&255](j,a,400,0)|0;return}c[a+16>>2]=a+72;g=a+84|0;f=c[g>>2]|0;c[g>>2]=0;if(!f)k=b;else{b=f;do{f=b;b=c[b+12>>2]|0;Hd(a,f,40,0)|0}while((b|0)!=0);k=c[e>>2]|0}Hd(a,k,c[a+32>>2]<<4,0)|0;h=c[d>>2]|0;i=d+4|0;j=c[i>>2]|0;Wa[h&255](j,a,400,0)|0;return}function ve(a){a=a|0;ue(c[(c[a+12>>2]|0)+172>>2]|0);return}function we(a,b){a=a|0;b=b|0;var d=0,e=0;d=c[a+12>>2]|0;if((a|0)==(b|0)){e=1;return e|0}if((d|0)!=(c[b+12>>2]|0)){e=0;return e|0}e=(Mm(a+16|0,b+16|0,d)|0)==0&1;return e|0}function xe(b,d){b=b|0;d=d|0;var e=0,f=0,g=0;e=a[b+4>>0]|0;if(e<<24>>24!=(a[d+4>>0]|0)){f=0;return f|0}if(e<<24>>24!=4){e=c[b+12>>2]|0;if((b|0)!=(d|0))if((e|0)==(c[d+12>>2]|0))g=(Mm(b+16|0,d+16|0,e)|0)==0;else g=0;else g=1}else g=(b|0)==(d|0);f=g&1;return f|0}function ye(a,b,c){a=a|0;b=b|0;c=c|0;var e=0,f=0,g=0,h=0;e=c^b;c=b>>>5;if(c>>>0>=b>>>0){f=e;return f|0}g=~c;h=b;b=e;while(1){e=(b<<5)+(b>>>2)+(d[a+(h+-1)>>0]|0)^b;h=h+g|0;if(h>>>0<=c>>>0){f=e;break}else b=e}return f|0}function ze(b,d){b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0;e=c[b+12>>2]|0;f=e+24|0;yd(b,-5);g=e+32|0;e=c[g>>2]|0;if((e|0)<(d|0)){if((d+1|0)>>>0>1073741823)Gd(b);h=Hd(b,c[f>>2]|0,e<<2,d<<2)|0;c[f>>2]=h;i=c[g>>2]|0;if((i|0)<(d|0)?(c[h+(i<<2)>>2]=0,h=i+1|0,(h|0)!=(d|0)):0){j=h;do{c[(c[f>>2]|0)+(j<<2)>>2]=0;j=j+1|0}while((j|0)!=(d|0));k=i}else k=i}else k=e;if((k|0)>0){e=d+-1|0;i=0;j=k;while(1){h=(c[f>>2]|0)+(i<<2)|0;l=c[h>>2]|0;c[h>>2]=0;if(!l)m=j;else{h=l;do{l=h;h=c[h>>2]|0;n=c[l+8>>2]&e;c[l>>2]=c[(c[f>>2]|0)+(n<<2)>>2];c[(c[f>>2]|0)+(n<<2)>>2]=l;n=l+5|0;a[n>>0]=a[n>>0]&-65}while((h|0)!=0);m=c[g>>2]|0}i=i+1|0;if((i|0)>=(m|0)){o=m;break}else j=m}}else o=k;if((o|0)<=(d|0)){c[g>>2]=d;return}if((d+1|0)>>>0>1073741823)Gd(b);k=Hd(b,c[f>>2]|0,o<<2,d<<2)|0;c[f>>2]=k;c[g>>2]=d;return}function Ae(b,e,f){b=b|0;e=e|0;f=f|0;var g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0;if(f>>>0>=41){if((f+1|0)>>>0>4294967277)Gd(b);g=c[(c[b+12>>2]|0)+56>>2]|0;h=od(b,20,f+17|0,0,0)|0;c[h+12>>2]=f;c[h+8>>2]=g;a[h+6>>0]=0;g=h+16|0;Un(g|0,e|0,f|0)|0;a[g+f>>0]=0;i=h;return i|0}h=c[b+12>>2]|0;g=c[h+56>>2]^f;j=f>>>5;if(j>>>0<f>>>0){k=~j;l=f;m=g;while(1){n=(m<<5)+(m>>>2)+(d[e+(l+-1)>>0]|0)^m;l=l+k|0;if(l>>>0<=j>>>0){o=n;break}else m=n}}else o=g;g=h+24|0;m=h+32|0;j=c[m>>2]|0;l=(c[g>>2]|0)+((j+-1&o)<<2)|0;k=c[l>>2]|0;a:do if(k|0){n=k;while(1){if(((o|0)==(c[n+8>>2]|0)?(c[n+12>>2]|0)==(f|0):0)?(Mm(e,n+16|0,f)|0)==0:0)break;p=c[n>>2]|0;if(!p)break a;else n=p}p=n+5|0;q=a[p>>0]^3;if(((a[h+60>>0]^3)&q)<<24>>24){i=n;return i|0}a[p>>0]=q;i=n;return i|0}while(0);k=h+28|0;if((j|0)<1073741823?(c[k>>2]|0)>>>0>=j>>>0:0){ze(b,j<<1);r=(c[g>>2]|0)+(((c[m>>2]|0)+-1&o)<<2)|0}else r=l;l=od(b,4,f+17|0,r,0)|0;c[l+12>>2]=f;c[l+8>>2]=o;a[l+6>>0]=0;o=l+16|0;Un(o|0,e|0,f|0)|0;a[o+f>>0]=0;c[k>>2]=(c[k>>2]|0)+1;i=l;return i|0}function Be(a,b){a=a|0;b=b|0;return Ae(a,b,_l(b)|0)|0}function Ce(a,b,d){a=a|0;b=b|0;d=d|0;var e=0;if(b>>>0>4294967269)Gd(a);else{e=od(a,7,b+24|0,0,0)|0;c[e+16>>2]=b;c[e+8>>2]=0;c[e+12>>2]=d;return e|0}return 0}function De(a,b,e){a=a|0;b=b|0;e=e|0;var f=0,h=0,i=0,j=0,k=0,l=0,m=0.0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0;f=Pa;Pa=Pa+16|0;h=f+8|0;i=f;j=e+8|0;switch(c[j>>2]|0){case 0:{k=-1;l=c[b+28>>2]|0;break}case 3:{m=+g[e>>3];g[i>>3]=m+6755399441055744.0;n=c[i>>2]|0;if((n|0)>0&m==+(n|0)?(i=c[b+28>>2]|0,(n|0)<=(i|0)):0){k=n+-1|0;l=i}else o=6;break}default:o=6}do if((o|0)==6){i=Ee(b,e)|0;while(1){n=i+16|0;p=i+24|0;q=c[p>>2]|0;if((q|0)==(c[j>>2]|0)){if(cf(0,n,e)|0){o=13;break}r=c[p>>2]|0}else r=q;if(((r|0)==11?c[j>>2]&64|0:0)?(c[n>>2]|0)==(c[e>>2]|0):0){o=13;break}n=c[i+28>>2]|0;if(!n){o=15;break}else i=n}if((o|0)==13){n=c[b+28>>2]|0;k=(i-(c[b+16>>2]|0)>>5)+n|0;l=n;break}else if((o|0)==15)Dc(a,7576,h)}while(0);h=k+1|0;a:do if((h|0)<(l|0)){a=b+12|0;r=c[a>>2]|0;n=k;q=h;while(1){if(c[r+(q<<4)+8>>2]|0)break;p=q+1|0;if((p|0)<(l|0)){s=q;q=p;n=s}else{t=p;break a}}g[e>>3]=+(n+2|0);c[j>>2]=3;r=c[a>>2]|0;i=r+(q<<4)|0;p=c[i+4>>2]|0;s=e+16|0;c[s>>2]=c[i>>2];c[s+4>>2]=p;c[e+24>>2]=c[r+(q<<4)+8>>2];u=1;Pa=f;return u|0}else t=h;while(0);h=t-l|0;l=1<<(d[b+7>>0]|0);if((h|0)>=(l|0)){u=0;Pa=f;return u|0}t=b+16|0;b=c[t>>2]|0;k=h;while(1){if(c[b+(k<<5)+8>>2]|0)break;h=k+1|0;if((h|0)<(l|0))k=h;else{u=0;o=26;break}}if((o|0)==26){Pa=f;return u|0}o=b+(k<<5)+16|0;l=c[o+4>>2]|0;h=e;c[h>>2]=c[o>>2];c[h+4>>2]=l;c[j>>2]=c[b+(k<<5)+24>>2];b=c[t>>2]|0;t=b+(k<<5)|0;j=c[t+4>>2]|0;l=e+16|0;c[l>>2]=c[t>>2];c[l+4>>2]=j;c[e+24>>2]=c[b+(k<<5)+8>>2];u=1;Pa=f;return u|0}
function Li(b,d,e){b=b|0;d=d|0;e=e|0;var f=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0;f=Pa;Pa=Pa+1056|0;h=f+1040|0;i=f;j=gb(b)|0;Jm(d);a:do if((j|0)==1){k=e+1|0;l=Mi(b,d,1)|0}else{Cf(b,j+19|0,10960);m=i+8|0;n=i+8|0;o=e;p=j+-2|0;b:while(1){c:do if((nb(b,o)|0)==3){q=vb(b,o,0)|0;if(!q){r=Am(d)|0;Wk(r,d)|0;Hb(b,0,0)|0;s=(r|0)!=-1&1;break}else{Qf(b,i);r=Lm(Kf(i,q)|0,1,q,d)|0;c[m>>2]=(c[m>>2]|0)+r;Nf(i);s=(r|0)!=0&1;break}}else{r=yb(b,o,0)|0;if(!((r|0)!=0?(a[r>>0]|0)==42:0))qf(b,o,10979)|0;switch(a[r+1>>0]|0){case 110:{c[h>>2]=i;if((wm(d,10994,h)|0)==1){Eb(b,+g[i>>3]);t=1}else{Db(b);t=0}s=t;break c;break}case 108:{s=Mi(b,d,1)|0;break c;break}case 76:{s=Mi(b,d,0)|0;break c;break}case 97:{Qf(b,i);r=Lm(Kf(i,1024)|0,1,1024,d)|0;c[n>>2]=(c[n>>2]|0)+r;if(r>>>0>=1024){r=1024;do{r=r<<(r>>>0<1073741824&1);q=Lm(Kf(i,r)|0,1,r,d)|0;c[n>>2]=(c[n>>2]|0)+q}while(q>>>0>=r>>>0)}Nf(i);s=1;break c;break}default:break b}}while(0);r=o+1|0;if((s|0)!=0&(p|0)!=0){o=r;p=p+-1|0}else{k=r;l=s;break a}}u=qf(b,o,10998)|0;Pa=f;return u|0}while(0);if(mm(d)|0){u=tf(b,0,0)|0;Pa=f;return u|0}if(!l){hb(b,-2);Db(b)}u=k-e|0;Pa=f;return u|0}function Mi(b,d,e){b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0,i=0,j=0,k=0,l=0;f=Pa;Pa=Pa+1040|0;g=f;Qf(b,g);h=Kf(g,1024)|0;a:do if(Zl(h,1024,d)|0){i=g+8|0;j=h;while(1){k=_l(j)|0;if(k|0?(a[j+(k+-1)>>0]|0)==10:0)break;c[i>>2]=(c[i>>2]|0)+k;j=Kf(g,1024)|0;if(!(Zl(j,1024,d)|0))break a}c[i>>2]=k-e+(c[i>>2]|0);Nf(g);l=1;Pa=f;return l|0}while(0);Nf(g);l=(zb(b,-1)|0)!=0&1;Pa=f;return l|0}function Ni(a,b){a=a|0;b=b|0;var c=0,d=0;c=gb(a)|0;if((c|0)>=19)qf(a,17,11013)|0;mb(a,1);Fb(a,c+-1|0);Mb(a,b);if((c|0)<=1){d=c+2|0;Lb(a,289,d);return}b=1;do{b=b+1|0;mb(a,b)}while((b|0)!=(c|0));d=c+2|0;Lb(a,289,d);return}function Oi(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0;b=Pa;Pa=Pa+16|0;d=b+8|0;e=Ab(a,-1001001)|0;f=vb(a,-1001002,0)|0;if(!(c[e+4>>2]|0)){g=rf(a,11030,b)|0;Pa=b;return g|0}hb(a,1);if((f|0)>=1){h=1;while(1){mb(a,-1001003-h|0);if((h|0)==(f|0))break;else h=h+1|0}}h=Li(a,c[e>>2]|0,2)|0;if(nb(a,0-h|0)|0){g=h;Pa=b;return g|0}if((h|0)>1){e=yb(a,1-h|0,0)|0;c[d>>2]=e;g=rf(a,11053,d)|0;Pa=b;return g|0}if(!(xb(a,-1001003)|0)){g=0;Pa=b;return g|0}hb(a,0);mb(a,-1001001);d=(yf(a,1,10718)|0)+4|0;e=c[d>>2]|0;c[d>>2]=0;Ta[e&511](a)|0;g=0;Pa=b;return g|0}function Pi(a){a=a|0;var b=0,d=0,e=0;b=Pa;Pa=Pa+16|0;d=b;Rb(a,-1001e3,10740);e=Ab(a,-1)|0;if(!(c[e+4>>2]|0)){c[d>>2]=10744;rf(a,11093,d)|0}d=tf(a,(fm(c[e>>2]|0)|0)==0&1,0)|0;Pa=b;return d|0}function Qi(a){a=a|0;$i(a,10724,13355);return 1}function Ri(a){a=a|0;var b=0,d=0,e=0,f=0,g=0;b=Pa;Pa=Pa+16|0;d=b+8|0;e=b;if((nb(a,1)|0)==-1)Db(a);if(!(nb(a,1)|0)){Rb(a,-1001e3,10724);kb(a,1);f=(yf(a,1,10718)|0)+4|0;if(!(c[f>>2]|0))rf(a,10869,e)|0;Ni(a,0);Pa=b;return 1}else{e=Bf(a,1,0)|0;f=oc(a,8)|0;g=f+4|0;c[g>>2]=0;wf(a,10718);c[f>>2]=0;c[g>>2]=290;g=qm(e,13355)|0;c[f>>2]=g;if(!g){g=Qk()|0;f=bl(c[g>>2]|0)|0;c[d>>2]=e;c[d+4>>2]=f;rf(a,11161,d)|0}kb(a,1);Ni(a,1);Pa=b;return 1}return 0}function Si(b){b=b|0;var d=0,e=0,f=0,g=0,h=0,i=0;d=Bf(b,1,0)|0;e=Af(b,2,13355,0)|0;f=oc(b,8)|0;g=f+4|0;c[g>>2]=0;wf(b,10718);c[f>>2]=0;c[g>>2]=290;g=a[e>>0]|0;if(!((g<<24>>24!=0?(h=e+1|0,(Xk(13521,g<<24>>24,4)|0)!=0):0)?(g=(a[h>>0]|0)==43?e+2|0:h,!(a[((a[g>>0]|0)==98?g+1|0:g)>>0]|0)):0))qf(b,2,11188)|0;g=qm(d,e)|0;c[f>>2]=g;if(g|0){i=1;return i|0}i=tf(b,0,d)|0;return i|0}function Ti(a){a=a|0;$i(a,10740,11159);return 1}function Ui(a){a=a|0;var b=0,d=0,e=0,f=0;b=Pa;Pa=Pa+16|0;d=Bf(a,1,0)|0;Af(a,2,13355,0)|0;e=oc(a,8)|0;f=e+4|0;c[f>>2]=0;wf(a,10718);rf(a,11137,b)|0;c[e>>2]=0;c[f>>2]=291;f=tf(a,0,d)|0;Pa=b;return f|0}function Vi(a){a=a|0;var b=0,d=0,e=0;b=Pa;Pa=Pa+16|0;d=b;Rb(a,-1001e3,10724);e=Ab(a,-1)|0;if(!(c[e+4>>2]|0)){c[d>>2]=10728;rf(a,11093,d)|0}d=Li(a,c[e>>2]|0,1)|0;Pa=b;return d|0}function Wi(a){a=a|0;var b=0,d=0,e=0;b=oc(a,8)|0;d=b+4|0;c[d>>2]=0;wf(a,10718);c[b>>2]=0;c[d>>2]=290;d=Fm()|0;c[b>>2]=d;if(d|0){e=1;return e|0}e=tf(a,0,0)|0;return e|0}function Xi(a){a=a|0;var b=0;Ef(a,1);b=xf(a,1,10718)|0;if(!b){Db(a);return 1}if(!(c[b+4>>2]|0)){Hb(a,11120,11)|0;return 1}else{Hb(a,11132,4)|0;return 1}return 0}function Yi(a){a=a|0;var b=0,d=0,e=0;b=Pa;Pa=Pa+16|0;d=b;Rb(a,-1001e3,10740);e=Ab(a,-1)|0;if(!(c[e+4>>2]|0)){c[d>>2]=10744;rf(a,11093,d)|0}d=Ki(a,c[e>>2]|0,1)|0;Pa=b;return d|0}function Zi(a){a=a|0;var b=0;b=yf(a,1,10718)|0;return tf(a,(bm(c[b>>2]|0)|0)==0&1,0)|0}function _i(a){a=a|0;yf(a,1,10718)|0;return uf(a,-1)|0}function $i(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0;e=Pa;Pa=Pa+16|0;f=e+8|0;g=e;if((nb(a,1)|0)<1){Rb(a,-1001e3,b);Pa=e;return}h=yb(a,1,0)|0;if(h){i=oc(a,8)|0;j=i+4|0;c[j>>2]=0;wf(a,10718);c[i>>2]=0;c[j>>2]=290;j=qm(h,d)|0;c[i>>2]=j;if(!j){j=Qk()|0;i=bl(c[j>>2]|0)|0;c[g>>2]=h;c[g+4>>2]=i;rf(a,11161,g)|0}}else{g=(yf(a,1,10718)|0)+4|0;if(!(c[g>>2]|0))rf(a,10869,f)|0;mb(a,1)}Zb(a,-1001e3,b);Rb(a,-1001e3,b);Pa=e;return}function aj(a){a=a|0;Ub(a,0,28);cg(a,1696,0);Eb(a,3.141592653589793);Zb(a,-2,11201);Eb(a,s);Zb(a,-2,11204);return 1}function bj(a){a=a|0;Eb(a,+u(+(+Ff(a,1))));return 1}function cj(a){a=a|0;Eb(a,+A(+(+Ff(a,1))));return 1}function dj(a){a=a|0;Eb(a,+B(+(+Ff(a,1))));return 1}function ej(a){a=a|0;var b=0.0;b=+Ff(a,1);Eb(a,+D(+b,+(+Ff(a,2))));return 1}function fj(a){a=a|0;Eb(a,+C(+(+Ff(a,1))));return 1}function gj(a){a=a|0;Eb(a,+G(+(+Ff(a,1))));return 1}function hj(a){a=a|0;Eb(a,+mn(+Ff(a,1)));return 1}function ij(a){a=a|0;Eb(a,+x(+(+Ff(a,1))));return 1}function jj(a){a=a|0;Eb(a,+Ff(a,1)/.017453292519943295);return 1}function kj(a){a=a|0;Eb(a,+E(+(+Ff(a,1))));return 1}function lj(a){a=a|0;Eb(a,+t(+(+Ff(a,1))));return 1}function mj(a){a=a|0;var b=0.0;b=+Ff(a,1);Eb(a,b%+Ff(a,2));return 1}function nj(a){a=a|0;var b=0,d=0;b=Pa;Pa=Pa+16|0;d=b;Eb(a,+ql(+Ff(a,1),d));Fb(a,c[d>>2]|0);Pa=b;return 2}function oj(a){a=a|0;var b=0.0;b=+Ff(a,1);Eb(a,+pn(b,Hf(a,2)|0));return 1}function pj(a){a=a|0;Eb(a,+Da(+(+Ff(a,1))));return 1}function qj(a){a=a|0;var b=0.0,c=0.0,d=0.0;b=+Ff(a,1);do if((nb(a,2)|0)>=1){c=+Ff(a,2);if(c==10.0){d=+Da(+b);break}else{d=+F(+b)/+F(+c);break}}else d=+F(+b);while(0);Eb(a,d);return 1}function rj(a){a=a|0;var b=0,c=0.0,d=0.0,e=0,f=0.0,g=0.0;b=gb(a)|0;c=+Ff(a,1);if((b|0)<2){d=c;Eb(a,d);return 1}e=2;f=c;while(1){c=+Ff(a,e);g=c>f?c:f;if((e|0)==(b|0)){d=g;break}else{e=e+1|0;f=g}}Eb(a,d);return 1}function sj(a){a=a|0;var b=0,c=0.0,d=0.0,e=0,f=0.0,g=0.0;b=gb(a)|0;c=+Ff(a,1);if((b|0)<2){d=c;Eb(a,d);return 1}e=2;f=c;while(1){c=+Ff(a,e);g=c<f?c:f;if((e|0)==(b|0)){d=g;break}else{e=e+1|0;f=g}}Eb(a,d);return 1}function tj(a){a=a|0;var b=0,c=0,d=0.0;b=Pa;Pa=Pa+16|0;c=b;d=+nn(+Ff(a,1),c);Eb(a,+g[c>>3]);Eb(a,d);Pa=b;return 2}function uj(a){a=a|0;var b=0.0;b=+Ff(a,1);Eb(a,+w(+b,+(+Ff(a,2))));return 1}function vj(a){a=a|0;Eb(a,+Ff(a,1)*.017453292519943295);return 1}function wj(a){a=a|0;var b=0,c=0.0,d=0,e=0.0,f=0.0;b=Pa;Pa=Pa+16|0;c=+((An()|0)%2147483647|0|0)/2147483647.0;switch(gb(a)|0){case 0:{Eb(a,c);d=1;Pa=b;return d|0}case 1:{e=+Ff(a,1);if(!(e>=1.0))qf(a,1,11347)|0;Eb(a,+t(+(c*e))+1.0);d=1;Pa=b;return d|0}case 2:{e=+Ff(a,1);f=+Ff(a,2);if(!(e<=f))qf(a,2,11347)|0;Eb(a,e+ +t(+(c*(f-e+1.0))));d=1;Pa=b;return d|0}default:{d=rf(a,11365,b)|0;Pa=b;return d|0}}return 0}function xj(a){a=a|0;zn(If(a,1)|0);An()|0;return 0}function yj(a){a=a|0;Eb(a,+hn(+Ff(a,1)));return 1}function zj(a){a=a|0;Eb(a,+y(+(+Ff(a,1))));return 1}function Aj(a){a=a|0;Eb(a,+v(+(+Ff(a,1))));return 1}function Bj(a){a=a|0;Eb(a,+on(+Ff(a,1)));return 1}function Cj(a){a=a|0;Eb(a,+z(+(+Ff(a,1))));return 1}function Dj(a){a=a|0;Ub(a,0,11);cg(a,1936,0);return 1}function Ej(a){a=a|0;Eb(a,+(oa()|0)/1.0e6);return 1}function Fj(b){b=b|0;var d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0;d=Pa;Pa=Pa+1264|0;e=d+200|0;f=d+1248|0;g=d+1252|0;h=d+208|0;i=d;j=Af(b,1,11600,0)|0;if((nb(b,2)|0)<1)k=Ka(0)|0;else k=~~+Ff(b,2);c[f>>2]=k;if((a[j>>0]|0)==33){l=j+1|0;m=Aa(f|0)|0}else{l=j;m=Ea(f|0)|0}if(!m){Db(b);Pa=d;return 1}if(!(Cl(l,11603)|0)){Ub(b,0,9);Fb(b,c[m>>2]|0);Zb(b,-2,11498);Fb(b,c[m+4>>2]|0);Zb(b,-2,11502);Fb(b,c[m+8>>2]|0);Zb(b,-2,11506);Fb(b,c[m+12>>2]|0);Zb(b,-2,11511);Fb(b,(c[m+16>>2]|0)+1|0);Zb(b,-2,11548);Fb(b,(c[m+20>>2]|0)+1900|0);Zb(b,-2,11554);Fb(b,(c[m+24>>2]|0)+1|0);Zb(b,-2,11606);Fb(b,(c[m+28>>2]|0)+1|0);Zb(b,-2,11611);f=c[m+32>>2]|0;if((f|0)<0){Pa=d;return 1}Mb(b,f);Zb(b,-2,11559);Pa=d;return 1}a[g>>0]=37;Qf(b,h);f=h+8|0;j=h+4|0;k=g+1|0;n=g+2|0;o=l;a:while(1){l=a[o>>0]|0;switch(l<<24>>24){case 0:{break a;break}case 37:{p=o+1|0;q=a[p>>0]|0;if(q<<24>>24!=0?(Xk(11616,q<<24>>24,23)|0)!=0:0){a[k>>0]=q;a[n>>0]=0;r=o+2|0}else{c[e>>2]=p;qf(b,1,Kb(b,11639,e)|0)|0;r=p}Lf(h,i,Ia(i|0,200,g|0,m|0)|0);s=r;break}default:{p=c[f>>2]|0;if(p>>>0<(c[j>>2]|0)>>>0){t=p;u=l}else{Kf(h,1)|0;t=c[f>>2]|0;u=a[o>>0]|0}l=c[h>>2]|0;c[f>>2]=t+1;a[l+t>>0]=u;s=o+1|0}}o=s}Nf(h);Pa=d;return 1}function Gj(a){a=a|0;var b=0;b=~~+Ff(a,1);Eb(a,+qa(b|0,~~+Gf(a,2,0.0)|0));return 1}function Hj(a){a=a|0;var b=0,c=0,d=0;b=Af(a,1,0,0)|0;c=Ja(b|0)|0;if(!b){Mb(a,c);d=1;return d|0}else{d=uf(a,c)|0;return d|0}return 0}function Ij(a){a=a|0;var b=0;if((nb(a,1)|0)==1)b=(xb(a,1)|0)==0&1;else b=Jf(a,1,0)|0;if(xb(a,2)|0)ve(a);if(!a)return 0;else ya(b|0);return 0}function Jj(a){a=a|0;Ib(a,za(Bf(a,1,0)|0)|0)|0;return 1}function Kj(a){a=a|0;var b=0;b=Bf(a,1,0)|0;return tf(a,(Hm(b)|0)==0&1,b)|0}function Lj(a){a=a|0;var b=0;b=Bf(a,1,0)|0;return tf(a,(Km(b,Bf(a,2,0)|0)|0)==0&1,0)|0}function Mj(a){a=a|0;var b=0,d=0;b=Af(a,1,0,0)|0;d=2064+((zf(a,2,11565,2032)|0)<<2)|0;Ib(a,sn(c[d>>2]|0,b)|0)|0;return 1}function Nj(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0;b=Pa;Pa=Pa+80|0;d=b+16|0;e=b+8|0;f=b;g=b+64|0;h=b+20|0;if((nb(a,1)|0)<1)i=Ka(0)|0;else{Df(a,1,5);hb(a,1);Rb(a,-1,11498);j=vb(a,-1,g)|0;k=(c[g>>2]|0)==0?0:j;hb(a,-2);c[h>>2]=k;Rb(a,-1,11502);k=vb(a,-1,g)|0;j=(c[g>>2]|0)==0?0:k;hb(a,-2);c[h+4>>2]=j;Rb(a,-1,11506);j=vb(a,-1,g)|0;k=(c[g>>2]|0)==0?12:j;hb(a,-2);c[h+8>>2]=k;Rb(a,-1,11511);k=vb(a,-1,g)|0;if(!(c[g>>2]|0)){c[f>>2]=11511;l=rf(a,11515,f)|0}else{hb(a,-2);l=k}c[h+12>>2]=l;Rb(a,-1,11548);l=vb(a,-1,g)|0;if(!(c[g>>2]|0)){c[e>>2]=11548;m=rf(a,11515,e)|0}else{hb(a,-2);m=l}c[h+16>>2]=m+-1;Rb(a,-1,11554);m=vb(a,-1,g)|0;if(!(c[g>>2]|0)){c[d>>2]=11554;n=rf(a,11515,d)|0}else{hb(a,-2);n=m}c[h+20>>2]=n+-1900;Rb(a,-1,11559);if(!(nb(a,-1)|0))o=-1;else o=xb(a,-1)|0;hb(a,-2);c[h+32>>2]=o;i=Ha(h|0)|0}if((i|0)==-1){Db(a);Pa=b;return 1}else{Eb(a,+(i|0));Pa=b;return 1}return 0}function Oj(a){a=a|0;var b=0,c=0,d=0;b=Pa;Pa=Pa+32|0;c=b;if(!(Bm(c)|0)){d=rf(a,11461,b+24|0)|0;Pa=b;return d|0}else{Ib(a,c)|0;d=1;Pa=b;return d|0}return 0}function Pj(a){a=a|0;Ub(a,0,14);cg(a,2096,0);Ub(a,0,1);Hb(a,16476,0)|0;mb(a,-2);ac(a,-2)|0;hb(a,-2);mb(a,-2);Zb(a,-2,13431);hb(a,-2);return 1}function Qj(a){a=a|0;var b=0,e=0,f=0,g=0,h=0,i=0,j=0;b=Pa;Pa=Pa+16|0;e=b+4|0;f=Bf(a,1,e)|0;g=Jf(a,2,1)|0;h=c[e>>2]|0;i=(g|0)>-1?g:h>>>0<(0-g|0)>>>0?0:g+1+h|0;h=Jf(a,3,i)|0;g=c[e>>2]|0;e=(h|0)>-1?h:g>>>0<(0-h|0)>>>0?0:h+1+g|0;h=(i|0)==0?1:i;i=e>>>0>g>>>0?g:e;if(i>>>0<h>>>0){j=0;Pa=b;return j|0}e=i-h+1|0;if((i|0)==-1){j=rf(a,12431,b)|0;Pa=b;return j|0}Cf(a,e,12431);if((e|0)<=0){j=e;Pa=b;return j|0}i=h+-1|0;h=0;do{Fb(a,d[f+(i+h)>>0]|0);h=h+1|0}while((h|0)<(e|0));j=e;Pa=b;return j|0}function Rj(b){b=b|0;var c=0,d=0,e=0,f=0,g=0,h=0;c=Pa;Pa=Pa+1040|0;d=c;e=gb(b)|0;f=Rf(b,d,e)|0;if((e|0)<1){Of(d,e);Pa=c;return 1}g=1;while(1){h=Hf(b,g)|0;if((h&255|0)!=(h|0))qf(b,g,12412)|0;a[f+(g+-1)>>0]=h;if((g|0)==(e|0))break;else g=g+1|0}Of(d,e);Pa=c;return 1}function Sj(a){a=a|0;var b=0,c=0,d=0;b=Pa;Pa=Pa+1056|0;c=b+8|0;Df(a,1,6);hb(a,1);Qf(a,c);if(!(hc(a,130,c)|0)){Nf(c);d=1;Pa=b;return d|0}else{d=rf(a,12382,b)|0;Pa=b;return d|0}return 0}function Tj(a){a=a|0;return ck(a,1)|0}function Uj(b){b=b|0;var e=0,f=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0,z=0,A=0,B=0,C=0,D=0,E=0,F=0,G=0,H=0,I=0,J=0,K=0,L=0,M=0,N=0,O=0,P=0,Q=0,R=0,S=0,T=0,U=0,V=0,W=0,X=0.0,Y=0.0,Z=0,_=0,$=0,aa=0,ba=0,ca=0,da=0,ea=0,fa=0,ga=0,ha=0,ia=0,ja=0,ka=0;e=Pa;Pa=Pa+1168|0;f=e+96|0;h=e+88|0;i=e+80|0;j=e+72|0;k=e+64|0;l=e+56|0;m=e+48|0;n=e+40|0;o=e+32|0;p=e+24|0;q=e+1148|0;r=e+1152|0;s=e+1144|0;t=e+104|0;u=e;v=gb(b)|0;w=Bf(b,1,s)|0;x=c[s>>2]|0;s=w+x|0;Qf(b,t);a:do if((x|0)>0){y=t+8|0;z=t+4|0;A=u+1|0;B=1;C=w;b:while(1){D=a[C>>0]|0;do if(D<<24>>24==37){E=C+1|0;if((a[E>>0]|0)==37){F=c[y>>2]|0;if(F>>>0<(c[z>>2]|0)>>>0){G=F;H=37}else{Kf(t,1)|0;G=c[y>>2]|0;H=a[E>>0]|0}F=c[t>>2]|0;c[y>>2]=G+1;a[F+G>>0]=H;I=B;J=C+2|0;break}F=Kf(t,512)|0;K=B+1|0;if((B|0)>=(v|0))qf(b,K,12175)|0;L=a[E>>0]|0;c:do if(!(L<<24>>24)){M=E;N=0}else{O=E;P=L;while(1){if(!(Xk(12184,P<<24>>24,6)|0)){M=O;N=P;break c}Q=O+1|0;P=a[Q>>0]|0;if(!(P<<24>>24)){M=Q;N=0;break}else O=Q}}while(0);L=E;if((M-L|0)>>>0>5){rf(b,12190,p)|0;R=a[M>>0]|0}else R=N;O=((R&255)+-48|0)>>>0<10?M+1|0:M;P=((d[O>>0]|0)+-48|0)>>>0<10?O+1|0:O;O=a[P>>0]|0;if(O<<24>>24==46){Q=P+1|0;S=((d[Q>>0]|0)+-48|0)>>>0<10?P+2|0:Q;Q=((d[S>>0]|0)+-48|0)>>>0<10?S+1|0:S;T=Q;U=a[Q>>0]|0}else{T=P;U=O}if(((U&255)+-48|0)>>>0<10)rf(b,12222,o)|0;a[u>>0]=37;O=T-L+1|0;Un(A|0,E|0,O|0)|0;a[A+O>>0]=0;O=T+1|0;V=a[T>>0]|0;switch(V<<24>>24|0){case 99:{L=Hf(b,K)|0;c[n>>2]=L;W=Gm(F,u,n)|0;break}case 105:case 100:{X=+Ff(b,K);L=~~X;Y=X-+(L|0);if(!(Y>-1.0&Y<1.0))qf(b,K,12267)|0;P=_l(u)|0;Q=a[u+(P+-1)>>0]|0;S=u+P|0;Z=S+-1|0;a[Z>>0]=108;a[Z+1>>0]=0;a[S>>0]=Q;a[u+(P+1)>>0]=0;c[m>>2]=L;W=Gm(F,u,m)|0;break}case 88:case 120:case 117:case 111:{Y=+Ff(b,K);L=~~Y>>>0;X=Y-+(L>>>0);if(!(X>-1.0&X<1.0))qf(b,K,12296)|0;P=_l(u)|0;Q=a[u+(P+-1)>>0]|0;S=u+P|0;Z=S+-1|0;a[Z>>0]=108;a[Z+1>>0]=0;a[S>>0]=Q;a[u+(P+1)>>0]=0;c[l>>2]=L;W=Gm(F,u,l)|0;break}case 71:case 103:case 102:case 69:case 101:{L=_l(u)|0;P=u+(L+-1)|0;Q=a[P>>0]|0;S=u+L|0;a[S+-1>>0]=0;a[P>>0]=Q;a[S>>0]=0;X=+Ff(b,K);g[k>>3]=X;W=Gm(F,u,k)|0;break}case 113:{S=Bf(b,K,q)|0;Q=c[y>>2]|0;if(Q>>>0<(c[z>>2]|0)>>>0)_=Q;else{Kf(t,1)|0;_=c[y>>2]|0}Q=c[t>>2]|0;c[y>>2]=_+1;a[Q+_>>0]=34;Q=c[q>>2]|0;c[q>>2]=Q+-1;d:do if(Q|0){P=S;while(1){L=a[P>>0]|0;switch(L<<24>>24){case 10:case 92:case 34:{Z=c[y>>2]|0;if(Z>>>0<(c[z>>2]|0)>>>0)$=Z;else{Kf(t,1)|0;$=c[y>>2]|0}Z=c[t>>2]|0;c[y>>2]=$+1;a[Z+$>>0]=92;Z=c[y>>2]|0;if(Z>>>0<(c[z>>2]|0)>>>0)aa=Z;else{Kf(t,1)|0;aa=c[y>>2]|0}Z=a[P>>0]|0;ba=c[t>>2]|0;c[y>>2]=aa+1;a[ba+aa>>0]=Z;break}case 0:{ca=0;da=43;break}default:{Z=L&255;if(!(en(Z)|0)){ba=c[y>>2]|0;if(ba>>>0<(c[z>>2]|0)>>>0){ea=ba;fa=L}else{Kf(t,1)|0;ea=c[y>>2]|0;fa=a[P>>0]|0}L=c[t>>2]|0;c[y>>2]=ea+1;a[L+ea>>0]=fa}else{ca=Z;da=43}}}if((da|0)==43){da=0;if(((d[P+1>>0]|0)+-48|0)>>>0<10){c[i>>2]=ca;Gm(r,12342,i)|0}else{c[j>>2]=ca;Gm(r,12338,j)|0}Mf(t,r)}Z=c[q>>2]|0;c[q>>2]=Z+-1;if(!Z)break d;else P=P+1|0}}while(0);S=c[y>>2]|0;if(S>>>0<(c[z>>2]|0)>>>0)ga=S;else{Kf(t,1)|0;ga=c[y>>2]|0}S=c[t>>2]|0;c[y>>2]=ga+1;a[S+ga>>0]=34;W=0;break}case 115:{S=_f(b,K,q)|0;Q=(rm(u,46)|0)==0;if(Q&(c[q>>2]|0)>>>0>99){Pf(t);ha=0}else{c[h>>2]=S;S=Gm(F,u,h)|0;hb(b,-2);ha=S}W=ha;break}default:break b}c[y>>2]=(c[y>>2]|0)+W;I=K;J=O}else{S=c[y>>2]|0;if(S>>>0<(c[z>>2]|0)>>>0){ia=S;ja=D}else{Kf(t,1)|0;ia=c[y>>2]|0;ja=a[C>>0]|0}S=c[t>>2]|0;c[y>>2]=ia+1;a[S+ia>>0]=ja;I=B;J=C+1|0}while(0);if(J>>>0<s>>>0){B=I;C=J}else break a}c[f>>2]=V<<24>>24;ka=rf(b,12348,f)|0;Pa=e;return ka|0}while(0);Nf(t);ka=1;Pa=e;return ka|0}function Vj(a){a=a|0;Bf(a,1,0)|0;Bf(a,2,0)|0;hb(a,2);Fb(a,0);Lb(a,292,3);return 1}function Wj(b){b=b|0;var d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0,z=0,A=0,B=0,C=0,D=0,E=0,F=0,G=0,H=0,I=0,J=0,K=0,L=0,M=0,N=0,O=0,P=0,Q=0,R=0,S=0,T=0,U=0,V=0,W=0,X=0,Y=0,Z=0,_=0;d=Pa;Pa=Pa+1360|0;e=d+16|0;f=d+8|0;g=d;h=d+1352|0;i=d+1348|0;j=d+1344|0;k=d+1064|0;l=d+24|0;m=Bf(b,1,i)|0;n=Bf(b,2,j)|0;o=nb(b,3)|0;p=Jf(b,4,(c[i>>2]|0)+1|0)|0;q=(a[n>>0]|0)==94;if((o+-3|0)>>>0>=4)qf(b,3,12069)|0;Qf(b,l);if(q){r=(c[j>>2]|0)+-1|0;c[j>>2]=r;s=n+1|0;t=r}else{s=n;t=c[j>>2]|0}j=k+16|0;c[j>>2]=b;c[k>>2]=200;n=k+4|0;c[n>>2]=m;r=m+(c[i>>2]|0)|0;i=k+8|0;c[i>>2]=r;c[k+12>>2]=s+t;if(!p){u=0;v=m;w=r;x=v;y=w-x|0;Lf(l,v,y);Nf(l);Fb(b,u);Pa=d;return 2}r=k+20|0;t=l+8|0;z=l+4|0;A=k+28|0;B=k+24|0;C=q^1;q=m;m=0;while(1){c[r>>2]=0;D=dk(k,q,s)|0;if(D){E=m+1|0;F=c[j>>2]|0;switch(o|0){case 6:{mb(F,3);G=c[r>>2]|0;H=(q|0)!=0&(G|0)==0?1:G;Cf(c[j>>2]|0,H,11790);if((H|0)>0){G=0;do{ek(k,G,q,D);G=G+1|0}while((G|0)!=(H|0))}dc(F,H,1,0,0);I=40;break}case 5:{do if((c[r>>2]|0)>0){G=c[A>>2]|0;if((G|0)!=-1){J=c[B>>2]|0;if((G|0)==-2){Fb(F,J+1-(c[n>>2]|0)|0);break}else{K=F;L=J}}else{rf(F,11830,g)|0;K=c[j>>2]|0;L=c[B>>2]|0}Hb(K,L,G)|0}else Hb(F,q,D-q|0)|0;while(0);Qb(F,3);I=40;break}default:{H=yb(F,3,h)|0;if(c[h>>2]|0){G=D-q|0;J=0;do{M=H+J|0;N=a[M>>0]|0;do if(N<<24>>24==37){O=J+1|0;P=H+O|0;Q=a[P>>0]|0;R=Q<<24>>24;if(((Q&255)+-48|0)>>>0<10)if(Q<<24>>24==48){Lf(l,q,G);S=O;break}else{ek(k,R+-49|0,q,D);Pf(l);S=O;break}if(Q<<24>>24!=37){Q=c[j>>2]|0;c[f>>2]=37;rf(Q,12100,f)|0}Q=c[t>>2]|0;if(Q>>>0<(c[z>>2]|0)>>>0)T=Q;else{Kf(l,1)|0;T=c[t>>2]|0}Q=a[P>>0]|0;P=c[l>>2]|0;c[t>>2]=T+1;a[P+T>>0]=Q;S=O}else{O=c[t>>2]|0;if(O>>>0<(c[z>>2]|0)>>>0){U=O;V=N}else{Kf(l,1)|0;U=c[t>>2]|0;V=a[M>>0]|0}O=c[l>>2]|0;c[t>>2]=U+1;a[O+U>>0]=V;S=J}while(0);J=S+1|0}while(J>>>0<(c[h>>2]|0)>>>0)}}}if((I|0)==40){I=0;if(xb(F,-1)|0){if(!(rb(F,-1)|0)){J=ob(F,nb(F,-1)|0)|0;c[e>>2]=J;rf(F,12142,e)|0}}else{hb(F,-2);Hb(F,q,D-q|0)|0}Pf(l)}if(D>>>0>q>>>0){W=D;X=E}else{Y=E;I=46}}else{Y=m;I=46}if((I|0)==46){I=0;Z=c[i>>2]|0;if(q>>>0>=Z>>>0){I=47;break}J=c[t>>2]|0;if(J>>>0<(c[z>>2]|0)>>>0)_=J;else{Kf(l,1)|0;_=c[t>>2]|0}J=a[q>>0]|0;G=c[l>>2]|0;c[t>>2]=_+1;a[G+_>>0]=J;W=q+1|0;X=Y}if(X>>>0<p>>>0&C){q=W;m=X}else{I=52;break}}if((I|0)==47){u=Y;v=q;w=Z;x=v;y=w-x|0;Lf(l,v,y);Nf(l);Fb(b,u);Pa=d;return 2}else if((I|0)==52){u=X;v=W;w=c[i>>2]|0;x=v;y=w-x|0;Lf(l,v,y);Nf(l);Fb(b,u);Pa=d;return 2}return 0}function Xj(a){a=a|0;var b=0,d=0;b=Pa;Pa=Pa+16|0;d=b;Bf(a,1,d)|0;Fb(a,c[d>>2]|0);Pa=b;return 1}function Yj(b){b=b|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0;e=Pa;Pa=Pa+1056|0;f=e+1040|0;g=e;h=Bf(b,1,f)|0;i=Rf(b,g,c[f>>2]|0)|0;if(!(c[f>>2]|0)){j=0;Of(g,j);Pa=e;return 1}b=0;do{k=(Nm(d[h+b>>0]|0)|0)&255;a[i+b>>0]=k;b=b+1|0;k=c[f>>2]|0}while(b>>>0<k>>>0);j=k;Of(g,j);Pa=e;return 1}function Zj(a){a=a|0;return ck(a,0)|0}function _j(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0;b=Pa;Pa=Pa+1056|0;d=b;e=b+1052|0;f=b+1048|0;g=b+8|0;h=Bf(a,1,e)|0;i=Hf(a,2)|0;j=Af(a,3,16476,f)|0;if((i|0)<1){Hb(a,16476,0)|0;k=1;Pa=b;return k|0}l=c[e>>2]|0;m=c[f>>2]|0;n=m+l|0;if(n>>>0>=l>>>0?n>>>0<(2147483647/(i>>>0)|0)>>>0:0){n=(H(m,i+-1|0)|0)+(H(l,i)|0)|0;l=Rf(a,g,n)|0;Un(l|0,h|0,c[e>>2]|0)|0;if((i|0)>1){m=l;l=i;while(1){i=c[e>>2]|0;o=m+i|0;p=c[f>>2]|0;if(!p){q=o;r=i}else{Un(o|0,j|0,p|0)|0;q=o+(c[f>>2]|0)|0;r=c[e>>2]|0}Un(q|0,h|0,r|0)|0;if((l|0)>2){m=q;l=l+-1|0}else break}}Of(g,n);k=1;Pa=b;return k|0}k=rf(a,11752,d)|0;Pa=b;return k|0}function $j(b){b=b|0;var d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0;d=Pa;Pa=Pa+1056|0;e=d+1040|0;f=d;g=Bf(b,1,e)|0;h=Rf(b,f,c[e>>2]|0)|0;b=c[e>>2]|0;if(!b){i=0;Of(f,i);Pa=d;return 1}j=0;k=b;while(1){a[h+j>>0]=a[g+(k+~j)>>0]|0;j=j+1|0;b=c[e>>2]|0;if(b>>>0<=j>>>0){i=b;break}else k=b}Of(f,i);Pa=d;return 1}function ak(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0;b=Pa;Pa=Pa+16|0;d=b;e=Bf(a,1,d)|0;f=Hf(a,2)|0;g=c[d>>2]|0;h=(f|0)>-1?f:g>>>0<(0-f|0)>>>0?0:f+1+g|0;g=Jf(a,3,-1)|0;f=c[d>>2]|0;d=(g|0)>-1?g:f>>>0<(0-g|0)>>>0?0:g+1+f|0;g=(h|0)==0?1:h;h=d>>>0>f>>>0?f:d;if(h>>>0<g>>>0){Hb(a,16476,0)|0;Pa=b;return 1}else{Hb(a,e+g+-1|0,1-g+h|0)|0;Pa=b;return 1}return 0}function bk(b){b=b|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0;e=Pa;Pa=Pa+1056|0;f=e+1040|0;g=e;h=Bf(b,1,f)|0;i=Rf(b,g,c[f>>2]|0)|0;if(!(c[f>>2]|0)){j=0;Of(g,j);Pa=e;return 1}b=0;do{k=($m(d[h+b>>0]|0)|0)&255;a[i+b>>0]=k;b=b+1|0;k=c[f>>2]|0}while(b>>>0<k>>>0);j=k;Of(g,j);Pa=e;return 1}function ck(b,d){b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0,z=0,A=0,B=0,C=0;e=Pa;Pa=Pa+288|0;f=e+284|0;g=e+280|0;h=e;i=Bf(b,1,f)|0;j=Bf(b,2,g)|0;k=Jf(b,3,1)|0;l=c[f>>2]|0;m=l+1|0;n=(k|0)>-1?k:l>>>0<(0-k|0)>>>0?0:m+k|0;if(n)if(n>>>0>m>>>0){Db(b);o=1;Pa=e;return o|0}else p=n;else p=1;n=(d|0)!=0;a:do if(n){d=(xb(b,4)|0)==0;m=c[g>>2]|0;if(d){d=0;do{k=j+d|0;if(Pm(k,11779)|0){q=17;break a}d=d+1+(_l(k)|0)|0}while(d>>>0<=m>>>0)}d=i+p+-1|0;k=(c[f>>2]|0)-p+1|0;b:do if(!m)r=d;else{if(m>>>0>k>>>0)break a;l=m+-1|0;s=k-l|0;if(!s)break a;t=a[j>>0]|0;u=j+1|0;v=s;s=d;while(1){w=Xk(s,t,v)|0;if(!w)break a;x=s;s=w+1|0;if(!(Mm(s,u,l)|0)){r=w;break b}v=v+x-s|0;if(!v)break a}}while(0);d=r-i|0;Fb(b,d+1|0);Fb(b,d+(c[g>>2]|0)|0);o=2;Pa=e;return o|0}else q=17;while(0);do if((q|0)==17){r=i+p+-1|0;d=(a[j>>0]|0)==94;if(d){k=(c[g>>2]|0)+-1|0;c[g>>2]=k;y=j+1|0;z=k}else{y=j;z=c[g>>2]|0}k=h+16|0;c[k>>2]=b;c[h>>2]=200;c[h+4>>2]=i;m=h+8|0;c[m>>2]=i+(c[f>>2]|0);c[h+12>>2]=y+z;v=h+20|0;c[v>>2]=0;c:do if(d){s=dk(h,r,y)|0;if(!s)q=34;else{A=r;B=s}}else{s=dk(h,r,y)|0;if(!s){l=r;while(1){if(l>>>0>=(c[m>>2]|0)>>>0){q=34;break c}u=l+1|0;c[v>>2]=0;t=dk(h,u,y)|0;if(!t)l=u;else{A=u;B=t;break}}}else{A=r;B=s}}while(0);if((q|0)==34)break;if(!n){r=c[v>>2]|0;m=(r|0)==0?1:r;Cf(c[k>>2]|0,m,11790);if((m|0)>0){r=0;do{ek(h,r,A,B);r=r+1|0}while((r|0)!=(m|0));C=m}else C=m}else{r=i;Fb(b,1-r+A|0);Fb(b,B-r|0);r=c[v>>2]|0;Cf(c[k>>2]|0,r,11790);if((r|0)>0){d=0;do{ek(h,d,0,0);d=d+1|0}while((d|0)!=(r|0))}C=r+2|0}o=C;Pa=e;return o|0}while(0);Db(b);o=1;Pa=e;return o|0}function dk(b,e,f){b=b|0;e=e|0;f=f|0;var g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0,z=0,A=0,B=0,C=0,D=0,E=0,F=0,G=0,H=0,I=0,J=0,K=0,L=0,M=0,N=0,O=0,P=0,Q=0,R=0,S=0,T=0,U=0,V=0,W=0,X=0,Y=0,Z=0,_=0,$=0,aa=0,ba=0,ca=0,da=0,ea=0,fa=0,ga=0,ha=0,ia=0,ja=0,ka=0,la=0,ma=0,na=0,oa=0,pa=0,qa=0,ra=0,sa=0,ta=0,ua=0,va=0,wa=0,xa=0,ya=0,za=0;g=Pa;Pa=Pa+96|0;h=g+80|0;i=g+72|0;j=g+64|0;k=g+56|0;l=g+48|0;m=g+40|0;n=g+32|0;o=g+24|0;p=g+16|0;q=g+8|0;r=c[b>>2]|0;c[b>>2]=r+-1;if(!r)rf(c[b+16>>2]|0,11849,g)|0;r=b+12|0;s=c[r>>2]|0;a:do if((s|0)==(f|0))t=e;else{u=b+16|0;v=b+4|0;w=b+8|0;x=b+20|0;y=e;z=f;A=s;b:while(1){B=y+-1|0;C=z;D=A;c:while(1){E=a[C>>0]|0;switch(E<<24>>24|0){case 40:{F=8;break b;break}case 41:{F=17;break b;break}case 36:{F=24;break c;break}case 37:break;default:{F=84;break c}}G=a[C+1>>0]|0;switch(G<<24>>24|0){case 98:{F=28;break c;break}case 57:case 56:case 55:case 54:case 53:case 52:case 51:case 50:case 49:case 48:{F=77;break c;break}case 102:break;default:{F=27;break c}}H=C+2|0;if((a[H>>0]|0)==91)I=91;else{rf(c[u>>2]|0,11940,m)|0;I=a[H>>0]|0}J=C+3|0;switch(I<<24>>24|0){case 37:{if((J|0)==(c[r>>2]|0))rf(c[u>>2]|0,11975,l)|0;K=C+4|0;break}case 91:{L=(a[J>>0]|0)==94?C+4|0:J;while(1){if((L|0)==(c[r>>2]|0))rf(c[u>>2]|0,12010,k)|0;M=L+1|0;if((a[L>>0]|0)==37)N=M>>>0<(c[r>>2]|0)>>>0?L+2|0:M;else N=M;if((a[N>>0]|0)==93)break;else L=N}K=N+1|0;break}default:K=J}if((y|0)==(c[v>>2]|0))O=0;else O=a[B>>0]|0;L=O&255;M=K+-1|0;P=(a[J>>0]|0)==94;Q=P?J:H;R=(P^1)&1;P=Q+1|0;S=P>>>0<M>>>0;d:do if(S){T=O&255;U=Q;V=P;while(1){W=a[V>>0]|0;X=U+2|0;Y=a[X>>0]|0;do if(W<<24>>24==37)if(!(fk(L,Y&255)|0))Z=X;else{_=R;break d}else{if(Y<<24>>24==45?($=U+3|0,$>>>0<M>>>0):0){if(L>>>0<(W&255)>>>0){Z=$;break}if(L>>>0>(d[$>>0]|0)>>>0){Z=$;break}else{_=R;break d}}if(W<<24>>24==T<<24>>24){_=R;break d}else Z=V}while(0);V=Z+1|0;if(V>>>0>=M>>>0){F=63;break}else U=Z}}else F=63;while(0);if((F|0)==63){F=0;_=R^1}if(_|0){t=0;break a}L=a[y>>0]|0;H=L&255;e:do if(S){J=Q;U=P;while(1){V=a[U>>0]|0;T=J+2|0;W=a[T>>0]|0;do if(V<<24>>24==37)if(!(fk(H,W&255)|0))aa=T;else{ba=R;break e}else{if(W<<24>>24==45?(Y=J+3|0,Y>>>0<M>>>0):0){if((V&255)>(L&255)){aa=Y;break}if((d[Y>>0]|0)<(L&255)){aa=Y;break}else{ba=R;break e}}if(V<<24>>24==L<<24>>24){ba=R;break e}else aa=U}while(0);U=aa+1|0;if(U>>>0>=M>>>0){F=75;break}else J=aa}}else F=75;while(0);if((F|0)==75){F=0;ba=R^1}if(!ba){t=0;break a}M=c[r>>2]|0;if((K|0)==(M|0)){t=y;break a}else{C=K;D=M}}if((F|0)==24){F=0;B=C+1|0;if((B|0)==(D|0)){F=25;break}else{ca=B;da=B;F=95}}else if((F|0)==27){F=0;B=C+1|0;if((B|0)==(D|0))rf(c[u>>2]|0,11975,i)|0;ca=C+2|0;da=B;F=95}else if((F|0)==28){F=0;B=C+2|0;if((D+-1|0)>>>0<=B>>>0)rf(c[u>>2]|0,11893,n)|0;M=a[y>>0]|0;if(M<<24>>24!=(a[B>>0]|0)){t=0;break a}B=a[C+3>>0]|0;L=y+1|0;H=c[w>>2]|0;if(L>>>0>=H>>>0){t=0;break a}P=1;Q=y;S=L;while(1){L=a[S>>0]|0;if(L<<24>>24==B<<24>>24){J=P+-1|0;if(!J)break;else ea=J}else ea=P+(L<<24>>24==M<<24>>24&1)|0;L=S+1|0;if(L>>>0<H>>>0){J=S;P=ea;S=L;Q=J}else{t=0;break a}}fa=Q+2|0;ga=C+4|0}else if((F|0)==77){F=0;S=G&255;P=S+-49|0;if(((G&255)>=49?(P|0)<(c[x>>2]|0):0)?(H=c[b+24+(P<<3)+4>>2]|0,(H|0)!=-1):0){ha=P;ia=H}else{H=c[u>>2]|0;c[j>>2]=S+-48;S=rf(H,12042,j)|0;ha=S;ia=c[b+24+(S<<3)+4>>2]|0}S=y+ia|0;if(((c[w>>2]|0)-y|0)>>>0<ia>>>0){t=0;break a}if((S|0)==0|(Mm(c[b+24+(ha<<3)>>2]|0,y,ia)|0)!=0){t=0;break a}fa=S;ga=C+2|0}else if((F|0)==84){F=0;S=C+1|0;if(E<<24>>24==91){H=(a[S>>0]|0)==94?C+2|0:S;P=D;while(1){if((H|0)==(P|0))rf(c[u>>2]|0,12010,h)|0;M=H+1|0;if((a[H>>0]|0)==37)ja=M>>>0<(c[r>>2]|0)>>>0?H+2|0:M;else ja=M;if((a[ja>>0]|0)==93)break;H=ja;P=c[r>>2]|0}ca=ja+1|0;da=S;F=95}else{ca=S;da=S;F=95}}f:do if((F|0)==95){F=0;ka=c[w>>2]|0;do if(ka>>>0>y>>>0){P=a[y>>0]|0;H=P&255;la=a[C>>0]|0;ma=la<<24>>24;g:do switch(ma|0){case 46:{na=a[ca>>0]|0;break}case 37:{oa=fk(H,d[da>>0]|0)|0;F=112;break}case 91:{D=ca+-1|0;Q=(a[da>>0]|0)==94;M=Q?da:C;B=(Q^1)&1;Q=M+1|0;if(Q>>>0<D>>>0){J=M;M=Q;while(1){Q=a[M>>0]|0;L=J+2|0;U=a[L>>0]|0;do if(Q<<24>>24==37)if(!(fk(H,U&255)|0))pa=L;else{oa=B;F=112;break g}else{if(U<<24>>24==45?(V=J+3|0,V>>>0<D>>>0):0){if((Q&255)>(P&255)){pa=V;break}if((d[V>>0]|0)<(P&255)){pa=V;break}else{oa=B;F=112;break g}}if(Q<<24>>24==P<<24>>24){oa=B;F=112;break g}else pa=M}while(0);M=pa+1|0;if(M>>>0>=D>>>0)break;else J=pa}}oa=B^1;F=112;break}default:{oa=la<<24>>24==P<<24>>24&1;F=112}}while(0);if((F|0)==112){F=0;P=a[ca>>0]|0;if(!oa){qa=P;break}else na=P}switch(na<<24>>24|0){case 43:{F=117;break b;break}case 42:{ra=y;break b;break}case 45:{F=144;break b;break}case 63:{P=ca+1|0;H=dk(b,y+1|0,P)|0;if(!H){fa=y;ga=P;break f}else{t=H;break a}break}default:{fa=y+1|0;ga=ca;break f}}}else qa=a[ca>>0]|0;while(0);switch(qa<<24>>24){case 45:case 63:case 42:break;default:{t=0;break a}}fa=y;ga=ca+1|0}while(0);A=c[r>>2]|0;if((ga|0)==(A|0)){t=fa;break a}else{y=fa;z=ga}}if((F|0)==8){z=C+1|0;if((a[z>>0]|0)==41){A=c[x>>2]|0;if((A|0)>31)rf(c[u>>2]|0,11790,q)|0;c[b+24+(A<<3)>>2]=y;c[b+24+(A<<3)+4>>2]=-2;c[x>>2]=A+1;A=dk(b,y,C+2|0)|0;if(A|0){t=A;break}c[x>>2]=(c[x>>2]|0)+-1;t=0;break}else{A=c[x>>2]|0;if((A|0)>31)rf(c[u>>2]|0,11790,p)|0;c[b+24+(A<<3)>>2]=y;c[b+24+(A<<3)+4>>2]=-1;c[x>>2]=A+1;A=dk(b,y,z)|0;if(A|0){t=A;break}c[x>>2]=(c[x>>2]|0)+-1;t=0;break}}else if((F|0)==17){A=C+1|0;z=c[x>>2]|0;h:do if((z|0)>0){v=z;while(1){S=v;v=v+-1|0;R=b+24+(v<<3)+4|0;if((c[R>>2]|0)==-1){sa=v;ta=R;break h}if((S|0)<=1){F=21;break}}}else F=21;while(0);if((F|0)==21){z=rf(c[u>>2]|0,11869,o)|0;sa=z;ta=b+24+(z<<3)+4|0}c[ta>>2]=y-(c[b+24+(sa<<3)>>2]|0);z=dk(b,y,A)|0;if(z|0){t=z;break}c[ta>>2]=-1;t=0;break}else if((F|0)==25){t=(y|0)==(c[w>>2]|0)?y:0;break}else if((F|0)==117)ra=y+1|0;else if((F|0)==144){z=ca+1|0;x=dk(b,y,z)|0;if(x|0){t=x;break}x=ca+-1|0;v=y;while(1){if((c[w>>2]|0)>>>0<=v>>>0){t=0;break a}S=a[v>>0]|0;R=S&255;H=a[C>>0]|0;i:do switch(H<<24>>24|0){case 46:break;case 37:{ua=fk(R,d[da>>0]|0)|0;F=161;break}case 91:{P=(a[da>>0]|0)==94;J=P?da:C;D=(P^1)&1;P=J+1|0;if(P>>>0<x>>>0){M=J;J=P;while(1){P=a[J>>0]|0;Q=M+2|0;U=a[Q>>0]|0;do if(P<<24>>24==37)if(!(fk(R,U&255)|0))va=Q;else{ua=D;F=161;break i}else{if(U<<24>>24==45?(L=M+3|0,L>>>0<x>>>0):0){if((P&255)>(S&255)){va=L;break}if((d[L>>0]|0)<(S&255)){va=L;break}else{ua=D;F=161;break i}}if(P<<24>>24==S<<24>>24){ua=D;F=161;break i}else va=J}while(0);J=va+1|0;if(J>>>0>=x>>>0)break;else M=va}}ua=D^1;F=161;break}default:{ua=H<<24>>24==S<<24>>24&1;F=161}}while(0);if((F|0)==161?(F=0,(ua|0)==0):0){t=0;break a}v=v+1|0;S=dk(b,v,z)|0;if(S|0){t=S;break a}}}if(ka>>>0>ra>>>0){z=ca+-1|0;j:do switch(ma|0){case 46:{wa=ka-ra|0;break}case 37:{v=d[da>>0]|0;x=0;w=ra;while(1){if(!(fk(d[w>>0]|0,v)|0)){wa=x;break j}y=x+1|0;w=ra+y|0;if(ka>>>0<=w>>>0){wa=y;break}else x=y}break}default:{x=0;w=ra;while(1){v=a[w>>0]|0;y=v&255;k:do switch(ma|0){case 46:break;case 91:{A=(a[da>>0]|0)==94;u=A?da:C;S=(A^1)&1;A=u+1|0;if(A>>>0<z>>>0){H=u;u=A;while(1){A=a[u>>0]|0;R=H+2|0;M=a[R>>0]|0;do if(A<<24>>24==37)if(!(fk(y,M&255)|0))xa=R;else{ya=S;F=138;break k}else{if(M<<24>>24==45?(J=H+3|0,J>>>0<z>>>0):0){if((A&255)>(v&255)){xa=J;break}if((d[J>>0]|0)<(v&255)){xa=J;break}else{ya=S;F=138;break k}}if(A<<24>>24==v<<24>>24){ya=S;F=138;break k}else xa=u}while(0);u=xa+1|0;if(u>>>0>=z>>>0)break;else H=xa}}ya=S^1;F=138;break}default:{ya=la<<24>>24==v<<24>>24&1;F=138}}while(0);if((F|0)==138?(F=0,(ya|0)==0):0){wa=x;break j}v=x+1|0;w=ra+v|0;if(ka>>>0<=w>>>0){wa=v;break j}else x=v}}}while(0);if((wa|0)>-1)za=wa;else{t=0;break}}else za=0;z=ca+1|0;x=za;while(1){w=dk(b,ra+x|0,z)|0;v=(w|0)==0;x=x+(v<<31>>31)|0;if(!v){t=w;break a}if((x|0)<=-1){t=0;break}}}while(0);c[b>>2]=(c[b>>2]|0)+1;Pa=g;return t|0}function ek(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0,i=0,j=0,k=0;f=Pa;Pa=Pa+16|0;g=f+8|0;h=f;if((c[a+20>>2]|0)<=(b|0)){i=c[a+16>>2]|0;if(!b){Hb(i,d,e-d|0)|0;Pa=f;return}else{rf(i,11808,h)|0;Pa=f;return}}h=c[a+24+(b<<3)+4>>2]|0;if((h|0)!=-1){i=c[a+16>>2]|0;d=c[a+24+(b<<3)>>2]|0;if((h|0)==-2){Fb(i,d+1-(c[a+4>>2]|0)|0);Pa=f;return}else{j=i;k=d}}else{d=a+16|0;rf(c[d>>2]|0,11830,g)|0;j=c[d>>2]|0;k=c[a+24+(b<<3)>>2]|0}Hb(j,k,h)|0;Pa=f;return}function fk(a,b){a=a|0;b=b|0;var c=0,d=0;do switch(Nm(b)|0){case 97:{c=dn(a)|0;break}case 99:{c=en(a)|0;break}case 100:{c=(a+-48|0)>>>0<10&1;break}case 103:{c=bn(a)|0;break}case 108:{c=an(a)|0;break}case 112:{c=gn(a)|0;break}case 115:{c=Fl(a)|0;break}case 117:{c=Om(a)|0;break}case 119:{c=cn(a)|0;break}case 120:{c=fn(a)|0;break}case 122:{c=(a|0)==0&1;break}default:{d=(b|0)==(a|0)&1;return d|0}}while(0);a=(an(b)|0)==0;d=a?(c|0)==0&1:c;return d|0}function gk(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0;b=Pa;Pa=Pa+288|0;d=b+8|0;e=b+4|0;f=b;g=yb(a,-1001001,e)|0;h=yb(a,-1001002,f)|0;i=d+16|0;c[i>>2]=a;c[d>>2]=200;c[d+4>>2]=g;j=c[e>>2]|0;e=d+8|0;c[e>>2]=g+j;c[d+12>>2]=h+(c[f>>2]|0);f=vb(a,-1001003,0)|0;if((f|0)>(j|0)){k=0;Pa=b;return k|0}j=d+20|0;l=g+f|0;while(1){c[j>>2]=0;m=dk(d,l,h)|0;if(m|0)break;f=l+1|0;if(f>>>0>(c[e>>2]|0)>>>0){k=0;n=8;break}else l=f}if((n|0)==8){Pa=b;return k|0}Fb(a,m-g+((m|0)==(l|0)&1)|0);kb(a,-1001003);a=c[j>>2]|0;j=(l|0)!=0&(a|0)==0?1:a;Cf(c[i>>2]|0,j,11790);if((j|0)<=0){k=j;Pa=b;return k|0}i=0;do{ek(d,i,l,m);i=i+1|0}while((i|0)!=(j|0));k=j;Pa=b;return k|0}function hk(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;Lf(d,b,c);return 0}function ik(a){a=a|0;Ub(a,0,7);cg(a,2224,0);Rb(a,-1,12453);Xb(a,12453);return 1}function jk(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0;b=Pa;Pa=Pa+1072|0;d=b+8|0;e=b;f=b+24|0;g=b+16|0;h=Af(a,2,16476,g)|0;Df(a,1,5);i=Jf(a,3,1)|0;if((nb(a,4)|0)<1)j=Zf(a,1)|0;else j=Hf(a,4)|0;Qf(a,f);if((i|0)>=(j|0)){if((i|0)!=(j|0)){Nf(f);Pa=b;return 1}}else{k=i;do{Tb(a,1,k);if(!(rb(a,-1)|0)){i=ob(a,nb(a,-1)|0)|0;c[e>>2]=i;c[e+4>>2]=k;rf(a,12621,e)|0}Pf(f);Lf(f,h,c[g>>2]|0);k=k+1|0}while((k|0)!=(j|0))}Tb(a,1,j);if(!(rb(a,-1)|0)){k=ob(a,nb(a,-1)|0)|0;c[d>>2]=k;c[d+4>>2]=j;rf(a,12621,d)|0}Pf(f);Nf(f);Pa=b;return 1}function kk(a){a=a|0;var b=0.0,c=0.0,d=0.0,e=0.0;Df(a,1,5);Db(a);if(!(lc(a,1)|0)){b=0.0;Eb(a,b);return 1}c=0.0;while(1){hb(a,-2);if((nb(a,-1)|0)==3){d=+ub(a,-1,0);e=d>c?d:c}else e=c;if(!(lc(a,1)|0)){b=e;break}else c=e}Eb(a,b);return 1}function lk(a){a=a|0;var b=0,c=0,d=0,e=0,f=0,g=0;b=Pa;Pa=Pa+16|0;Df(a,1,5);c=Zf(a,1)|0;d=c+1|0;switch(gb(a)|0){case 2:{e=d;break}case 3:{f=2;break}default:{g=rf(a,12583,b)|0;Pa=b;return g|0}}if((f|0)==2){f=Hf(a,2)|0;if((f|0)<1|(f|0)>(d|0))qf(a,2,12531)|0;if((c|0)<(f|0))e=f;else{c=d;do{d=c;c=c+-1|0;Tb(a,1,c);$b(a,1,d)}while((c|0)>(f|0));e=f}}$b(a,1,e);g=0;Pa=b;return g|0}function mk(a){a=a|0;var b=0,c=0;b=gb(a)|0;Ub(a,b,1);Fb(a,b);Zb(a,-2,12581);if((b|0)<=0)return 1;mb(a,1);$b(a,-2,1);kb(a,1);if((b|0)==1)return 1;c=b;while(1){$b(a,1,c);if((c|0)>2)c=c+-1|0;else break}return 1}function nk(a){a=a|0;var b=0,c=0,d=0,e=0,f=0,g=0,h=0;b=Pa;Pa=Pa+16|0;c=b;Df(a,1,5);d=Jf(a,2,1)|0;if((nb(a,3)|0)<1)e=Zf(a,1)|0;else e=Hf(a,3)|0;if((e|0)<(d|0)){f=0;Pa=b;return f|0}g=e-d|0;h=g+1|0;if((g|0)>=0?ab(a,h)|0:0){Tb(a,1,d);if((e|0)<=(d|0)){f=h;Pa=b;return f|0}g=d;do{g=g+1|0;Tb(a,1,g)}while((g|0)!=(e|0));f=h;Pa=b;return f|0}f=rf(a,12554,c)|0;Pa=b;return f|0}function ok(a){a=a|0;var b=0,c=0,d=0,e=0;Df(a,1,5);b=Zf(a,1)|0;c=Jf(a,2,b)|0;if((c|0)!=(b|0)?(c|0)<1|(c|0)>(b+1|0):0)qf(a,1,12531)|0;Tb(a,1,c);if((c|0)>=(b|0)){d=c;Db(a);$b(a,1,d);return 1}e=c;do{c=e;e=e+1|0;Tb(a,1,e);$b(a,1,c)}while((e|0)!=(b|0));d=b;Db(a);$b(a,1,d);return 1}function pk(a){a=a|0;var b=0;Df(a,1,5);b=Zf(a,1)|0;Cf(a,40,16476);if((nb(a,2)|0)>=1)Df(a,2,6);hb(a,2);qk(a,1,b);return 0}function qk(a,b,c){a=a|0;b=b|0;c=c|0;var d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0;d=Pa;Pa=Pa+16|0;e=d+8|0;f=d;if((c|0)<=(b|0)){Pa=d;return}g=c;c=b;while(1){Tb(a,1,c);Tb(a,1,g);if(!(rk(a,-1,-2)|0))hb(a,-3);else{$b(a,1,c);$b(a,1,g)}b=g-c|0;if((b|0)==1){h=27;break}i=(g+c|0)/2|0;Tb(a,1,i);Tb(a,1,c);do if(!(rk(a,-2,-1)|0)){hb(a,-2);Tb(a,1,g);if(!(rk(a,-1,-2)|0)){hb(a,-3);break}else{$b(a,1,i);$b(a,1,g);break}}else{$b(a,1,i);$b(a,1,c)}while(0);if((b|0)==2){h=27;break}Tb(a,1,i);mb(a,-1);j=g+-1|0;Tb(a,1,j);$b(a,1,i);$b(a,1,j);k=j;l=c;while(1){m=l+1|0;Tb(a,1,m);if(!(rk(a,-1,-2)|0)){n=l;o=m}else{p=m;while(1){if((g|0)<=(p|0))rf(a,12496,f)|0;hb(a,-2);m=p+1|0;Tb(a,1,m);if(!(rk(a,-1,-2)|0)){n=p;o=m;break}else p=m}}p=k+-1|0;Tb(a,1,p);if(!(rk(a,-3,-1)|0)){q=k;r=p}else{m=p;while(1){if((m|0)<=(c|0))rf(a,12496,e)|0;hb(a,-2);p=m+-1|0;Tb(a,1,p);if(!(rk(a,-3,-1)|0)){q=m;r=p;break}else m=p}}if((q|0)<=(o|0))break;$b(a,1,o);$b(a,1,r);k=r;l=o}hb(a,-4);Tb(a,1,j);Tb(a,1,o);$b(a,1,j);$b(a,1,o);l=(o-c|0)<(g-o|0);k=n+2|0;i=c;c=l?k:c;b=g;g=l?g:n;qk(a,l?i:k,l?n:b);if((g|0)<=(c|0)){h=27;break}}if((h|0)==27){Pa=d;return}}function rk(a,b,c){a=a|0;b=b|0;c=c|0;var d=0;if(!(nb(a,2)|0)){d=tb(a,b,c,1)|0;return d|0}else{mb(a,2);mb(a,b+-1|0);mb(a,c+-2|0);dc(a,2,1,0,0);c=xb(a,-1)|0;hb(a,-2);d=c;return d|0}return 0}function sk(a){a=a|0;dg(a,-1001e3,12674)|0;Ub(a,0,1);Lb(a,293,0);Zb(a,-2,12681);ac(a,-2)|0;Ub(a,0,3);cg(a,2288,0);Ub(a,4,0);mb(a,-2);Lb(a,294,1);$b(a,-2,1);mb(a,-2);Lb(a,295,1);$b(a,-2,2);mb(a,-2);Lb(a,296,1);$b(a,-2,3);mb(a,-2);Lb(a,297,1);$b(a,-2,4);mb(a,-1);Zb(a,-3,12686);Zb(a,-2,12694);yk(a,12704,12709,12722,12731);yk(a,12869,12875,12889,12899);Hb(a,12968,10)|0;Zb(a,-2,12979);dg(a,-1001e3,12986)|0;Zb(a,-2,12994);dg(a,-1001e3,13001)|0;Zb(a,-2,13010);Tb(a,-1001e3,2);mb(a,-2);cg(a,2320,1);hb(a,-2);return 1}function tk(a){a=a|0;var b=0,c=0;b=Zf(a,1)|0;if((b|0)<=0)return 0;c=b;while(1){Tb(a,1,c);hb(a,-2);if((c|0)>1)c=c+-1|0;else break}return 0}function uk(a){a=a|0;var b=0,d=0,e=0;b=Pa;Pa=Pa+16|0;d=b;e=Bf(a,1,0)|0;Rb(a,-1001e3,13001);Rb(a,-1,e);if(nb(a,-1)|0){Pa=b;return 1}c[d>>2]=e;Kb(a,13372,d)|0;Pa=b;return 1}function vk(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0,i=0;b=Pa;Pa=Pa+32|0;d=b+8|0;e=b;f=Bf(a,1,0)|0;Rb(a,-1001001,12704);g=yb(a,-1,0)|0;if(!g){c[e>>2]=12704;rf(a,13173,e)|0;h=Bk(a,f,0,13528,13203)|0}else h=Bk(a,f,g,13528,13203)|0;if(!h){i=1;Pa=b;return i|0}if(!(Sf(a,h,0)|0)){Ib(a,h)|0;i=2;Pa=b;return i|0}else{g=yb(a,1,0)|0;f=yb(a,-1,0)|0;c[d>>2]=g;c[d+4>>2]=h;c[d+8>>2]=f;i=rf(a,13205,d)|0;Pa=b;return i|0}return 0}function wk(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0,i=0;b=Pa;Pa=Pa+32|0;d=b+8|0;e=b;f=Bf(a,1,0)|0;Rb(a,-1001001,12869);g=yb(a,-1,0)|0;if(!g){c[e>>2]=12869;rf(a,13173,e)|0;h=Bk(a,f,0,13528,13203)|0}else h=Bk(a,f,g,13528,13203)|0;if(!h){i=1;Pa=b;return i|0}if(!(Ck(a,h,f)|0)){Ib(a,h)|0;i=2;Pa=b;return i|0}else{f=yb(a,1,0)|0;g=yb(a,-1,0)|0;c[d>>2]=f;c[d+4>>2]=h;c[d+8>>2]=g;i=rf(a,13205,d)|0;Pa=b;return i|0}return 0}function xk(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0;b=Pa;Pa=Pa+32|0;d=b+24|0;e=b+8|0;f=b;g=Bf(a,1,0)|0;h=rm(g,46)|0;if(!h){i=0;Pa=b;return i|0}Hb(a,g,h-g|0)|0;h=yb(a,-1,0)|0;Rb(a,-1001001,12869);j=yb(a,-1,0)|0;if(!j){c[f>>2]=12869;rf(a,13173,f)|0;k=Bk(a,h,0,13528,13203)|0}else k=Bk(a,h,j,13528,13203)|0;if(!k){i=1;Pa=b;return i|0}switch(Ck(a,k,g)|0){case 0:{Ib(a,k)|0;i=2;Pa=b;return i|0}case 2:{c[d>>2]=g;c[d+4>>2]=k;Kb(a,13251,d)|0;i=1;Pa=b;return i|0}default:{d=yb(a,1,0)|0;g=yb(a,-1,0)|0;c[e>>2]=d;c[e+4>>2]=k;c[e+8>>2]=g;i=rf(a,13205,e)|0;Pa=b;return i|0}}return 0}function yk(a,b,c,d,e){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;var f=0,g=0,h=0;f=za(c|0)|0;if(!f){c=za(d|0)|0;if(c|0){g=c;h=3}}else{g=f;h=3}if((h|0)==3?(Rb(a,-1001e3,13154),h=xb(a,-1)|0,hb(a,-2),(h|0)==0):0){fg(a,fg(a,g,13164,13167)|0,13171,e)|0;ib(a,-2);Zb(a,-2,b);return}Ib(a,e)|0;Zb(a,-2,b);return}function zk(a){a=a|0;var b=0,c=0,d=0,e=0,f=0,g=0;b=Pa;Pa=Pa+112|0;c=b;d=b+4|0;e=Bf(a,1,0)|0;f=gb(a)|0;$f(a,e,1);Rb(a,-1,13094);g=(nb(a,-1)|0)==0;hb(a,-2);if(g){mb(a,-1);Zb(a,-2,13100);Ib(a,e)|0;Zb(a,-2,13094);g=Sm(e,46)|0;Hb(a,e,((g|0)==0?e:g+1|0)-e|0)|0;Zb(a,-2,13103)}mb(a,-1);if(!(((xc(a,1,d)|0)!=0?(Ac(a,13112,d)|0)!=0:0)?!(pb(a,-1)|0):0))rf(a,13114,c)|0;mb(a,-2);qc(a,-2,1)|0;hb(a,-2);if((f|0)<2){Pa=b;return 1}c=2;while(1){if((nb(a,c)|0)==6){mb(a,c);mb(a,-2);dc(a,1,0,0,0)}if((c|0)==(f|0))break;else c=c+1|0}Pa=b;return 1}function Ak(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0;b=Pa;Pa=Pa+1056|0;d=b+8|0;e=b+16|0;f=Bf(a,1,0)|0;hb(a,1);Rb(a,-1001e3,12986);Rb(a,2,f);if(xb(a,-1)|0){Pa=b;return 1}hb(a,-2);Qf(a,e);Rb(a,-1001001,12694);if((nb(a,3)|0)!=5)rf(a,13033,b)|0;g=1;while(1){Tb(a,3,g);if(!(nb(a,-1)|0)){hb(a,-2);Nf(e);h=yb(a,-1,0)|0;c[d>>2]=f;c[d+4>>2]=h;rf(a,13069,d)|0}Ib(a,f)|0;dc(a,1,2,0,0);if((nb(a,-2)|0)==6)break;if(!(rb(a,-2)|0))hb(a,-3);else{hb(a,-2);Pf(e)}g=g+1|0}Ib(a,f)|0;jb(a,-2);dc(a,2,1,0,0);if(nb(a,-1)|0)Zb(a,2,f);Rb(a,2,f);if(nb(a,-1)|0){Pa=b;return 1}Mb(a,1);mb(a,-1);Zb(a,2,f);Pa=b;return 1}function Bk(b,d,e,f,g){b=b|0;d=d|0;e=e|0;f=f|0;g=g|0;var h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0;h=Pa;Pa=Pa+1056|0;i=h;j=h+8|0;Qf(b,j);if(!(a[f>>0]|0))k=d;else k=fg(b,d,f,g)|0;g=e;a:while(1){switch(a[g>>0]|0){case 0:{l=13;break a;break}case 59:{m=g+1|0;break}default:{e=rm(g,59)|0;if(!e)n=g+(_l(g)|0)|0;else n=e;Hb(b,g,n-g|0)|0;if(!n){l=13;break a}o=fg(b,yb(b,-1,0)|0,13353,k)|0;ib(b,-2);p=qm(o,13355)|0;if(p|0){l=11;break a}c[i>>2]=o;Kb(b,13357,i)|0;ib(b,-2);Pf(j);m=n}}g=m}if((l|0)==11){bm(p)|0;q=o;Pa=h;return q|0}else if((l|0)==13){Nf(j);q=0;Pa=h;return q|0}return 0}function Ck(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0;e=Pa;Pa=Pa+16|0;f=e+8|0;g=e;h=fg(a,d,13528,13281)|0;d=rm(h,45)|0;if(d){i=Hb(a,h,d-h|0)|0;c[g>>2]=i;i=Dk(a,b,Kb(a,13283,g)|0)|0;if((i|0)==2)j=d+1|0;else{k=i;Pa=e;return k|0}}else j=h;c[f>>2]=j;k=Dk(a,b,Kb(a,13283,f)|0)|0;Pa=e;return k|0}function Dk(b,c,d){b=b|0;c=c|0;d=d|0;var e=0;Rb(b,-1001e3,12674);Rb(b,-1,c);c=Ab(b,-1)|0;hb(b,-3);if(!c){Hb(b,13294,58)|0;e=1;return e|0}if((a[d>>0]|0)==42){Mb(b,1);e=0;return e|0}else{Hb(b,13294,58)|0;e=2;return e|0}return 0}function Ek(a){a=a|0;var b=0,c=0,d=0;b=Bf(a,1,0)|0;c=Dk(a,b,Bf(a,2,0)|0)|0;if(!c){d=1;return d|0}Db(a);jb(a,-2);Ib(a,(c|0)==1?13439:13446)|0;d=3;return d|0}function Fk(a){a=a|0;var b=0,c=0,d=0,e=0;b=Bf(a,1,0)|0;c=Bf(a,2,0)|0;d=Af(a,3,13528,0)|0;if(Bk(a,b,c,d,Af(a,4,13203,0)|0)|0){e=1;return e|0}Db(a);jb(a,-2);e=2;return e|0}function Gk(a){a=a|0;Df(a,1,5);if(!(Vb(a,1)|0)){Ub(a,0,1);mb(a,-1);ac(a,1)|0}Tb(a,-1001e3,2);Zb(a,-2,13431);return 0}function Hk(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0,z=0,A=0,B=0,C=0,D=0,E=0,F=0,G=0,H=0,I=0,J=0,K=0,L=0,M=0,N=0,O=0,P=0,Q=0,R=0,S=0,T=0,U=0,V=0,W=0,X=0,Y=0,Z=0,_=0,$=0,aa=0,ba=0,ca=0,da=0,ea=0,fa=0,ga=0,ha=0,ia=0,ja=0,ka=0,la=0,ma=0,na=0,oa=0,pa=0,qa=0,ra=0,sa=0,ta=0,ua=0,va=0,wa=0,xa=0,ya=0,za=0,Aa=0,Ba=0,Ca=0,Da=0,Ea=0,Fa=0,Ga=0,Ha=0,Ia=0;b=Pa;Pa=Pa+16|0;d=b;do if(a>>>0<245){e=a>>>0<11?16:a+11&-8;f=e>>>3;g=c[3962]|0;h=g>>>f;if(h&3|0){i=(h&1^1)+f|0;j=15888+(i<<1<<2)|0;k=j+8|0;l=c[k>>2]|0;m=l+8|0;n=c[m>>2]|0;if((n|0)==(j|0))c[3962]=g&~(1<<i);else{c[n+12>>2]=j;c[k>>2]=n}n=i<<3;c[l+4>>2]=n|3;i=l+n+4|0;c[i>>2]=c[i>>2]|1;o=m;Pa=b;return o|0}m=c[3964]|0;if(e>>>0>m>>>0){if(h|0){i=2<<f;n=h<<f&(i|0-i);i=(n&0-n)+-1|0;n=i>>>12&16;f=i>>>n;i=f>>>5&8;h=f>>>i;f=h>>>2&4;l=h>>>f;h=l>>>1&2;k=l>>>h;l=k>>>1&1;j=(i|n|f|h|l)+(k>>>l)|0;l=15888+(j<<1<<2)|0;k=l+8|0;h=c[k>>2]|0;f=h+8|0;n=c[f>>2]|0;if((n|0)==(l|0)){i=g&~(1<<j);c[3962]=i;p=i}else{c[n+12>>2]=l;c[k>>2]=n;p=g}n=j<<3;j=n-e|0;c[h+4>>2]=e|3;k=h+e|0;c[k+4>>2]=j|1;c[h+n>>2]=j;if(m|0){n=c[3967]|0;h=m>>>3;l=15888+(h<<1<<2)|0;i=1<<h;if(!(p&i)){c[3962]=p|i;q=l;r=l+8|0}else{i=l+8|0;q=c[i>>2]|0;r=i}c[r>>2]=n;c[q+12>>2]=n;c[n+8>>2]=q;c[n+12>>2]=l}c[3964]=j;c[3967]=k;o=f;Pa=b;return o|0}f=c[3963]|0;if(f){k=(f&0-f)+-1|0;j=k>>>12&16;l=k>>>j;k=l>>>5&8;n=l>>>k;l=n>>>2&4;i=n>>>l;n=i>>>1&2;h=i>>>n;i=h>>>1&1;s=c[16152+((k|j|l|n|i)+(h>>>i)<<2)>>2]|0;i=s;h=s;n=(c[s+4>>2]&-8)-e|0;while(1){s=c[i+16>>2]|0;if(!s){l=c[i+20>>2]|0;if(!l)break;else t=l}else t=s;s=(c[t+4>>2]&-8)-e|0;l=s>>>0<n>>>0;i=t;h=l?t:h;n=l?s:n}i=h+e|0;if(i>>>0>h>>>0){s=c[h+24>>2]|0;l=c[h+12>>2]|0;do if((l|0)==(h|0)){j=h+20|0;k=c[j>>2]|0;if(!k){u=h+16|0;v=c[u>>2]|0;if(!v){w=0;break}else{x=v;y=u}}else{x=k;y=j}j=x;k=y;while(1){u=j+20|0;v=c[u>>2]|0;if(!v){z=j+16|0;A=c[z>>2]|0;if(!A)break;else{B=A;C=z}}else{B=v;C=u}j=B;k=C}c[k>>2]=0;w=j}else{u=c[h+8>>2]|0;c[u+12>>2]=l;c[l+8>>2]=u;w=l}while(0);do if(s|0){l=c[h+28>>2]|0;u=16152+(l<<2)|0;if((h|0)==(c[u>>2]|0)){c[u>>2]=w;if(!w){c[3963]=f&~(1<<l);break}}else{l=s+16|0;c[((c[l>>2]|0)==(h|0)?l:s+20|0)>>2]=w;if(!w)break}c[w+24>>2]=s;l=c[h+16>>2]|0;if(l|0){c[w+16>>2]=l;c[l+24>>2]=w}l=c[h+20>>2]|0;if(l|0){c[w+20>>2]=l;c[l+24>>2]=w}}while(0);if(n>>>0<16){s=n+e|0;c[h+4>>2]=s|3;f=h+s+4|0;c[f>>2]=c[f>>2]|1}else{c[h+4>>2]=e|3;c[i+4>>2]=n|1;c[i+n>>2]=n;if(m|0){f=c[3967]|0;s=m>>>3;l=15888+(s<<1<<2)|0;u=1<<s;if(!(u&g)){c[3962]=u|g;D=l;E=l+8|0}else{u=l+8|0;D=c[u>>2]|0;E=u}c[E>>2]=f;c[D+12>>2]=f;c[f+8>>2]=D;c[f+12>>2]=l}c[3964]=n;c[3967]=i}o=h+8|0;Pa=b;return o|0}else F=e}else F=e}else F=e}else if(a>>>0<=4294967231){l=a+11|0;f=l&-8;u=c[3963]|0;if(u){s=0-f|0;v=l>>>8;if(v)if(f>>>0>16777215)G=31;else{l=(v+1048320|0)>>>16&8;z=v<<l;v=(z+520192|0)>>>16&4;A=z<<v;z=(A+245760|0)>>>16&2;H=14-(v|l|z)+(A<<z>>>15)|0;G=f>>>(H+7|0)&1|H<<1}else G=0;H=c[16152+(G<<2)>>2]|0;a:do if(!H){I=0;J=0;K=s;L=61}else{z=0;A=s;l=H;v=f<<((G|0)==31?0:25-(G>>>1)|0);M=0;while(1){N=(c[l+4>>2]&-8)-f|0;if(N>>>0<A>>>0)if(!N){O=l;P=0;Q=l;L=65;break a}else{R=l;S=N}else{R=z;S=A}N=c[l+20>>2]|0;l=c[l+16+(v>>>31<<2)>>2]|0;T=(N|0)==0|(N|0)==(l|0)?M:N;if(!l){I=T;J=R;K=S;L=61;break}else{z=R;A=S;v=v<<1;M=T}}}while(0);if((L|0)==61){if((I|0)==0&(J|0)==0){H=2<<G;s=(H|0-H)&u;if(!s){F=f;break}H=(s&0-s)+-1|0;s=H>>>12&16;e=H>>>s;H=e>>>5&8;h=e>>>H;e=h>>>2&4;i=h>>>e;h=i>>>1&2;n=i>>>h;i=n>>>1&1;U=0;V=c[16152+((H|s|e|h|i)+(n>>>i)<<2)>>2]|0}else{U=J;V=I}if(!V){W=U;X=K}else{O=U;P=K;Q=V;L=65}}if((L|0)==65){i=O;n=P;h=Q;while(1){e=(c[h+4>>2]&-8)-f|0;s=e>>>0<n>>>0;H=s?e:n;e=s?h:i;s=c[h+16>>2]|0;if(!s)Y=c[h+20>>2]|0;else Y=s;if(!Y){W=e;X=H;break}else{i=e;n=H;h=Y}}}if(((W|0)!=0?X>>>0<((c[3964]|0)-f|0)>>>0:0)?(h=W+f|0,h>>>0>W>>>0):0){n=c[W+24>>2]|0;i=c[W+12>>2]|0;do if((i|0)==(W|0)){H=W+20|0;e=c[H>>2]|0;if(!e){s=W+16|0;g=c[s>>2]|0;if(!g){Z=0;break}else{_=g;$=s}}else{_=e;$=H}H=_;e=$;while(1){s=H+20|0;g=c[s>>2]|0;if(!g){m=H+16|0;M=c[m>>2]|0;if(!M)break;else{aa=M;ba=m}}else{aa=g;ba=s}H=aa;e=ba}c[e>>2]=0;Z=H}else{s=c[W+8>>2]|0;c[s+12>>2]=i;c[i+8>>2]=s;Z=i}while(0);do if(n){i=c[W+28>>2]|0;s=16152+(i<<2)|0;if((W|0)==(c[s>>2]|0)){c[s>>2]=Z;if(!Z){s=u&~(1<<i);c[3963]=s;ca=s;break}}else{s=n+16|0;c[((c[s>>2]|0)==(W|0)?s:n+20|0)>>2]=Z;if(!Z){ca=u;break}}c[Z+24>>2]=n;s=c[W+16>>2]|0;if(s|0){c[Z+16>>2]=s;c[s+24>>2]=Z}s=c[W+20>>2]|0;if(s){c[Z+20>>2]=s;c[s+24>>2]=Z;ca=u}else ca=u}else ca=u;while(0);b:do if(X>>>0<16){u=X+f|0;c[W+4>>2]=u|3;n=W+u+4|0;c[n>>2]=c[n>>2]|1}else{c[W+4>>2]=f|3;c[h+4>>2]=X|1;c[h+X>>2]=X;n=X>>>3;if(X>>>0<256){u=15888+(n<<1<<2)|0;s=c[3962]|0;i=1<<n;if(!(s&i)){c[3962]=s|i;da=u;ea=u+8|0}else{i=u+8|0;da=c[i>>2]|0;ea=i}c[ea>>2]=h;c[da+12>>2]=h;c[h+8>>2]=da;c[h+12>>2]=u;break}u=X>>>8;if(u)if(X>>>0>16777215)fa=31;else{i=(u+1048320|0)>>>16&8;s=u<<i;u=(s+520192|0)>>>16&4;n=s<<u;s=(n+245760|0)>>>16&2;g=14-(u|i|s)+(n<<s>>>15)|0;fa=X>>>(g+7|0)&1|g<<1}else fa=0;g=16152+(fa<<2)|0;c[h+28>>2]=fa;s=h+16|0;c[s+4>>2]=0;c[s>>2]=0;s=1<<fa;if(!(ca&s)){c[3963]=ca|s;c[g>>2]=h;c[h+24>>2]=g;c[h+12>>2]=h;c[h+8>>2]=h;break}s=c[g>>2]|0;c:do if((c[s+4>>2]&-8|0)==(X|0))ga=s;else{g=X<<((fa|0)==31?0:25-(fa>>>1)|0);n=s;while(1){ha=n+16+(g>>>31<<2)|0;i=c[ha>>2]|0;if(!i)break;if((c[i+4>>2]&-8|0)==(X|0)){ga=i;break c}else{g=g<<1;n=i}}c[ha>>2]=h;c[h+24>>2]=n;c[h+12>>2]=h;c[h+8>>2]=h;break b}while(0);s=ga+8|0;H=c[s>>2]|0;c[H+12>>2]=h;c[s>>2]=h;c[h+8>>2]=H;c[h+12>>2]=ga;c[h+24>>2]=0}while(0);o=W+8|0;Pa=b;return o|0}else F=f}else F=f}else F=-1;while(0);W=c[3964]|0;if(W>>>0>=F>>>0){ga=W-F|0;ha=c[3967]|0;if(ga>>>0>15){X=ha+F|0;c[3967]=X;c[3964]=ga;c[X+4>>2]=ga|1;c[ha+W>>2]=ga;c[ha+4>>2]=F|3}else{c[3964]=0;c[3967]=0;c[ha+4>>2]=W|3;ga=ha+W+4|0;c[ga>>2]=c[ga>>2]|1}o=ha+8|0;Pa=b;return o|0}ha=c[3965]|0;if(ha>>>0>F>>>0){ga=ha-F|0;c[3965]=ga;W=c[3968]|0;X=W+F|0;c[3968]=X;c[X+4>>2]=ga|1;c[W+4>>2]=F|3;o=W+8|0;Pa=b;return o|0}if(!(c[4080]|0)){c[4082]=4096;c[4081]=4096;c[4083]=-1;c[4084]=-1;c[4085]=0;c[4073]=0;c[4080]=d&-16^1431655768;ia=4096}else ia=c[4082]|0;d=F+48|0;W=F+47|0;ga=ia+W|0;X=0-ia|0;ia=ga&X;if(ia>>>0<=F>>>0){o=0;Pa=b;return o|0}fa=c[4072]|0;if(fa|0?(ca=c[4070]|0,da=ca+ia|0,da>>>0<=ca>>>0|da>>>0>fa>>>0):0){o=0;Pa=b;return o|0}d:do if(!(c[4073]&4)){fa=c[3968]|0;e:do if(fa){da=16296;while(1){ca=c[da>>2]|0;if(ca>>>0<=fa>>>0?(ca+(c[da+4>>2]|0)|0)>>>0>fa>>>0:0)break;ca=c[da+8>>2]|0;if(!ca){L=128;break e}else da=ca}ca=ga-ha&X;if(ca>>>0<2147483647){ea=Wn(ca|0)|0;if((ea|0)==((c[da>>2]|0)+(c[da+4>>2]|0)|0))if((ea|0)==(-1|0))ja=ca;else{ka=ca;la=ea;L=145;break d}else{ma=ea;na=ca;L=136}}else ja=0}else L=128;while(0);do if((L|0)==128){fa=Wn(0)|0;if((fa|0)!=(-1|0)?(f=fa,ca=c[4081]|0,ea=ca+-1|0,Z=((ea&f|0)==0?0:(ea+f&0-ca)-f|0)+ia|0,f=c[4070]|0,ca=Z+f|0,Z>>>0>F>>>0&Z>>>0<2147483647):0){ea=c[4072]|0;if(ea|0?ca>>>0<=f>>>0|ca>>>0>ea>>>0:0){ja=0;break}ea=Wn(Z|0)|0;if((ea|0)==(fa|0)){ka=Z;la=fa;L=145;break d}else{ma=ea;na=Z;L=136}}else ja=0}while(0);do if((L|0)==136){Z=0-na|0;if(!(d>>>0>na>>>0&(na>>>0<2147483647&(ma|0)!=(-1|0))))if((ma|0)==(-1|0)){ja=0;break}else{ka=na;la=ma;L=145;break d}ea=c[4082]|0;fa=W-na+ea&0-ea;if(fa>>>0>=2147483647){ka=na;la=ma;L=145;break d}if((Wn(fa|0)|0)==(-1|0)){Wn(Z|0)|0;ja=0;break}else{ka=fa+na|0;la=ma;L=145;break d}}while(0);c[4073]=c[4073]|4;oa=ja;L=143}else{oa=0;L=143}while(0);if(((L|0)==143?ia>>>0<2147483647:0)?(ja=Wn(ia|0)|0,ia=Wn(0)|0,ma=ia-ja|0,na=ma>>>0>(F+40|0)>>>0,!((ja|0)==(-1|0)|na^1|ja>>>0<ia>>>0&((ja|0)!=(-1|0)&(ia|0)!=(-1|0))^1)):0){ka=na?ma:oa;la=ja;L=145}if((L|0)==145){ja=(c[4070]|0)+ka|0;c[4070]=ja;if(ja>>>0>(c[4071]|0)>>>0)c[4071]=ja;ja=c[3968]|0;f:do if(ja){oa=16296;while(1){pa=c[oa>>2]|0;qa=c[oa+4>>2]|0;if((la|0)==(pa+qa|0)){L=154;break}ma=c[oa+8>>2]|0;if(!ma)break;else oa=ma}if(((L|0)==154?(ma=oa+4|0,(c[oa+12>>2]&8|0)==0):0)?la>>>0>ja>>>0&pa>>>0<=ja>>>0:0){c[ma>>2]=qa+ka;ma=(c[3965]|0)+ka|0;na=ja+8|0;ia=(na&7|0)==0?0:0-na&7;na=ja+ia|0;W=ma-ia|0;c[3968]=na;c[3965]=W;c[na+4>>2]=W|1;c[ja+ma+4>>2]=40;c[3969]=c[4084];break}if(la>>>0<(c[3966]|0)>>>0)c[3966]=la;ma=la+ka|0;W=16296;while(1){if((c[W>>2]|0)==(ma|0)){L=162;break}na=c[W+8>>2]|0;if(!na)break;else W=na}if((L|0)==162?(c[W+12>>2]&8|0)==0:0){c[W>>2]=la;oa=W+4|0;c[oa>>2]=(c[oa>>2]|0)+ka;oa=la+8|0;na=la+((oa&7|0)==0?0:0-oa&7)|0;oa=ma+8|0;ia=ma+((oa&7|0)==0?0:0-oa&7)|0;oa=na+F|0;d=ia-na-F|0;c[na+4>>2]=F|3;g:do if((ja|0)==(ia|0)){X=(c[3965]|0)+d|0;c[3965]=X;c[3968]=oa;c[oa+4>>2]=X|1}else{if((c[3967]|0)==(ia|0)){X=(c[3964]|0)+d|0;c[3964]=X;c[3967]=oa;c[oa+4>>2]=X|1;c[oa+X>>2]=X;break}X=c[ia+4>>2]|0;if((X&3|0)==1){ha=X&-8;ga=X>>>3;h:do if(X>>>0<256){fa=c[ia+8>>2]|0;Z=c[ia+12>>2]|0;if((Z|0)==(fa|0)){c[3962]=c[3962]&~(1<<ga);break}else{c[fa+12>>2]=Z;c[Z+8>>2]=fa;break}}else{fa=c[ia+24>>2]|0;Z=c[ia+12>>2]|0;do if((Z|0)==(ia|0)){ea=ia+16|0;ca=ea+4|0;f=c[ca>>2]|0;if(!f){ba=c[ea>>2]|0;if(!ba){ra=0;break}else{sa=ba;ta=ea}}else{sa=f;ta=ca}ca=sa;f=ta;while(1){ea=ca+20|0;ba=c[ea>>2]|0;if(!ba){aa=ca+16|0;$=c[aa>>2]|0;if(!$)break;else{ua=$;va=aa}}else{ua=ba;va=ea}ca=ua;f=va}c[f>>2]=0;ra=ca}else{ea=c[ia+8>>2]|0;c[ea+12>>2]=Z;c[Z+8>>2]=ea;ra=Z}while(0);if(!fa)break;Z=c[ia+28>>2]|0;n=16152+(Z<<2)|0;do if((c[n>>2]|0)!=(ia|0)){ea=fa+16|0;c[((c[ea>>2]|0)==(ia|0)?ea:fa+20|0)>>2]=ra;if(!ra)break h}else{c[n>>2]=ra;if(ra|0)break;c[3963]=c[3963]&~(1<<Z);break h}while(0);c[ra+24>>2]=fa;Z=ia+16|0;n=c[Z>>2]|0;if(n|0){c[ra+16>>2]=n;c[n+24>>2]=ra}n=c[Z+4>>2]|0;if(!n)break;c[ra+20>>2]=n;c[n+24>>2]=ra}while(0);wa=ia+ha|0;xa=ha+d|0}else{wa=ia;xa=d}ga=wa+4|0;c[ga>>2]=c[ga>>2]&-2;c[oa+4>>2]=xa|1;c[oa+xa>>2]=xa;ga=xa>>>3;if(xa>>>0<256){X=15888+(ga<<1<<2)|0;da=c[3962]|0;n=1<<ga;if(!(da&n)){c[3962]=da|n;ya=X;za=X+8|0}else{n=X+8|0;ya=c[n>>2]|0;za=n}c[za>>2]=oa;c[ya+12>>2]=oa;c[oa+8>>2]=ya;c[oa+12>>2]=X;break}X=xa>>>8;do if(!X)Aa=0;else{if(xa>>>0>16777215){Aa=31;break}n=(X+1048320|0)>>>16&8;da=X<<n;ga=(da+520192|0)>>>16&4;Z=da<<ga;da=(Z+245760|0)>>>16&2;ea=14-(ga|n|da)+(Z<<da>>>15)|0;Aa=xa>>>(ea+7|0)&1|ea<<1}while(0);X=16152+(Aa<<2)|0;c[oa+28>>2]=Aa;ha=oa+16|0;c[ha+4>>2]=0;c[ha>>2]=0;ha=c[3963]|0;ea=1<<Aa;if(!(ha&ea)){c[3963]=ha|ea;c[X>>2]=oa;c[oa+24>>2]=X;c[oa+12>>2]=oa;c[oa+8>>2]=oa;break}ea=c[X>>2]|0;i:do if((c[ea+4>>2]&-8|0)==(xa|0))Ba=ea;else{X=xa<<((Aa|0)==31?0:25-(Aa>>>1)|0);ha=ea;while(1){Ca=ha+16+(X>>>31<<2)|0;da=c[Ca>>2]|0;if(!da)break;if((c[da+4>>2]&-8|0)==(xa|0)){Ba=da;break i}else{X=X<<1;ha=da}}c[Ca>>2]=oa;c[oa+24>>2]=ha;c[oa+12>>2]=oa;c[oa+8>>2]=oa;break g}while(0);ea=Ba+8|0;X=c[ea>>2]|0;c[X+12>>2]=oa;c[ea>>2]=oa;c[oa+8>>2]=X;c[oa+12>>2]=Ba;c[oa+24>>2]=0}while(0);o=na+8|0;Pa=b;return o|0}oa=16296;while(1){d=c[oa>>2]|0;if(d>>>0<=ja>>>0?(Da=d+(c[oa+4>>2]|0)|0,Da>>>0>ja>>>0):0)break;oa=c[oa+8>>2]|0}oa=Da+-47|0;na=oa+8|0;d=oa+((na&7|0)==0?0:0-na&7)|0;na=ja+16|0;oa=d>>>0<na>>>0?ja:d;d=oa+8|0;ia=ka+-40|0;ma=la+8|0;W=(ma&7|0)==0?0:0-ma&7;ma=la+W|0;X=ia-W|0;c[3968]=ma;c[3965]=X;c[ma+4>>2]=X|1;c[la+ia+4>>2]=40;c[3969]=c[4084];ia=oa+4|0;c[ia>>2]=27;c[d>>2]=c[4074];c[d+4>>2]=c[4075];c[d+8>>2]=c[4076];c[d+12>>2]=c[4077];c[4074]=la;c[4075]=ka;c[4077]=0;c[4076]=d;d=oa+24|0;do{X=d;d=d+4|0;c[d>>2]=7}while((X+8|0)>>>0<Da>>>0);if((oa|0)!=(ja|0)){d=oa-ja|0;c[ia>>2]=c[ia>>2]&-2;c[ja+4>>2]=d|1;c[oa>>2]=d;X=d>>>3;if(d>>>0<256){ma=15888+(X<<1<<2)|0;W=c[3962]|0;ea=1<<X;if(!(W&ea)){c[3962]=W|ea;Ea=ma;Fa=ma+8|0}else{ea=ma+8|0;Ea=c[ea>>2]|0;Fa=ea}c[Fa>>2]=ja;c[Ea+12>>2]=ja;c[ja+8>>2]=Ea;c[ja+12>>2]=ma;break}ma=d>>>8;if(ma)if(d>>>0>16777215)Ga=31;else{ea=(ma+1048320|0)>>>16&8;W=ma<<ea;ma=(W+520192|0)>>>16&4;X=W<<ma;W=(X+245760|0)>>>16&2;fa=14-(ma|ea|W)+(X<<W>>>15)|0;Ga=d>>>(fa+7|0)&1|fa<<1}else Ga=0;fa=16152+(Ga<<2)|0;c[ja+28>>2]=Ga;c[ja+20>>2]=0;c[na>>2]=0;W=c[3963]|0;X=1<<Ga;if(!(W&X)){c[3963]=W|X;c[fa>>2]=ja;c[ja+24>>2]=fa;c[ja+12>>2]=ja;c[ja+8>>2]=ja;break}X=c[fa>>2]|0;j:do if((c[X+4>>2]&-8|0)==(d|0))Ha=X;else{fa=d<<((Ga|0)==31?0:25-(Ga>>>1)|0);W=X;while(1){Ia=W+16+(fa>>>31<<2)|0;ea=c[Ia>>2]|0;if(!ea)break;if((c[ea+4>>2]&-8|0)==(d|0)){Ha=ea;break j}else{fa=fa<<1;W=ea}}c[Ia>>2]=ja;c[ja+24>>2]=W;c[ja+12>>2]=ja;c[ja+8>>2]=ja;break f}while(0);d=Ha+8|0;X=c[d>>2]|0;c[X+12>>2]=ja;c[d>>2]=ja;c[ja+8>>2]=X;c[ja+12>>2]=Ha;c[ja+24>>2]=0}}else{X=c[3966]|0;if((X|0)==0|la>>>0<X>>>0)c[3966]=la;c[4074]=la;c[4075]=ka;c[4077]=0;c[3971]=c[4080];c[3970]=-1;c[3975]=15888;c[3974]=15888;c[3977]=15896;c[3976]=15896;c[3979]=15904;c[3978]=15904;c[3981]=15912;c[3980]=15912;c[3983]=15920;c[3982]=15920;c[3985]=15928;c[3984]=15928;c[3987]=15936;c[3986]=15936;c[3989]=15944;c[3988]=15944;c[3991]=15952;c[3990]=15952;c[3993]=15960;c[3992]=15960;c[3995]=15968;c[3994]=15968;c[3997]=15976;c[3996]=15976;c[3999]=15984;c[3998]=15984;c[4001]=15992;c[4e3]=15992;c[4003]=16e3;c[4002]=16e3;c[4005]=16008;c[4004]=16008;c[4007]=16016;c[4006]=16016;c[4009]=16024;c[4008]=16024;c[4011]=16032;c[4010]=16032;c[4013]=16040;c[4012]=16040;c[4015]=16048;c[4014]=16048;c[4017]=16056;c[4016]=16056;c[4019]=16064;c[4018]=16064;c[4021]=16072;c[4020]=16072;c[4023]=16080;c[4022]=16080;c[4025]=16088;c[4024]=16088;c[4027]=16096;c[4026]=16096;c[4029]=16104;c[4028]=16104;c[4031]=16112;c[4030]=16112;c[4033]=16120;c[4032]=16120;c[4035]=16128;c[4034]=16128;c[4037]=16136;c[4036]=16136;X=ka+-40|0;d=la+8|0;na=(d&7|0)==0?0:0-d&7;d=la+na|0;oa=X-na|0;c[3968]=d;c[3965]=oa;c[d+4>>2]=oa|1;c[la+X+4>>2]=40;c[3969]=c[4084]}while(0);la=c[3965]|0;if(la>>>0>F>>>0){ka=la-F|0;c[3965]=ka;la=c[3968]|0;ja=la+F|0;c[3968]=ja;c[ja+4>>2]=ka|1;c[la+4>>2]=F|3;o=la+8|0;Pa=b;return o|0}}la=Qk()|0;c[la>>2]=12;o=0;Pa=b;return o|0}function Ik(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0,z=0,A=0,B=0,C=0,D=0,E=0,F=0,G=0,H=0,I=0;if(!a)return;b=a+-8|0;d=c[3966]|0;e=c[a+-4>>2]|0;a=e&-8;f=b+a|0;do if(!(e&1)){g=c[b>>2]|0;if(!(e&3))return;h=b+(0-g)|0;i=g+a|0;if(h>>>0<d>>>0)return;if((c[3967]|0)==(h|0)){j=f+4|0;k=c[j>>2]|0;if((k&3|0)!=3){l=h;m=i;n=h;break}c[3964]=i;c[j>>2]=k&-2;c[h+4>>2]=i|1;c[h+i>>2]=i;return}k=g>>>3;if(g>>>0<256){g=c[h+8>>2]|0;j=c[h+12>>2]|0;if((j|0)==(g|0)){c[3962]=c[3962]&~(1<<k);l=h;m=i;n=h;break}else{c[g+12>>2]=j;c[j+8>>2]=g;l=h;m=i;n=h;break}}g=c[h+24>>2]|0;j=c[h+12>>2]|0;do if((j|0)==(h|0)){k=h+16|0;o=k+4|0;p=c[o>>2]|0;if(!p){q=c[k>>2]|0;if(!q){r=0;break}else{s=q;t=k}}else{s=p;t=o}o=s;p=t;while(1){k=o+20|0;q=c[k>>2]|0;if(!q){u=o+16|0;v=c[u>>2]|0;if(!v)break;else{w=v;x=u}}else{w=q;x=k}o=w;p=x}c[p>>2]=0;r=o}else{k=c[h+8>>2]|0;c[k+12>>2]=j;c[j+8>>2]=k;r=j}while(0);if(g){j=c[h+28>>2]|0;k=16152+(j<<2)|0;if((c[k>>2]|0)==(h|0)){c[k>>2]=r;if(!r){c[3963]=c[3963]&~(1<<j);l=h;m=i;n=h;break}}else{j=g+16|0;c[((c[j>>2]|0)==(h|0)?j:g+20|0)>>2]=r;if(!r){l=h;m=i;n=h;break}}c[r+24>>2]=g;j=h+16|0;k=c[j>>2]|0;if(k|0){c[r+16>>2]=k;c[k+24>>2]=r}k=c[j+4>>2]|0;if(k){c[r+20>>2]=k;c[k+24>>2]=r;l=h;m=i;n=h}else{l=h;m=i;n=h}}else{l=h;m=i;n=h}}else{l=b;m=a;n=b}while(0);if(n>>>0>=f>>>0)return;b=f+4|0;a=c[b>>2]|0;if(!(a&1))return;if(!(a&2)){if((c[3968]|0)==(f|0)){r=(c[3965]|0)+m|0;c[3965]=r;c[3968]=l;c[l+4>>2]=r|1;if((l|0)!=(c[3967]|0))return;c[3967]=0;c[3964]=0;return}if((c[3967]|0)==(f|0)){r=(c[3964]|0)+m|0;c[3964]=r;c[3967]=n;c[l+4>>2]=r|1;c[n+r>>2]=r;return}r=(a&-8)+m|0;x=a>>>3;do if(a>>>0<256){w=c[f+8>>2]|0;t=c[f+12>>2]|0;if((t|0)==(w|0)){c[3962]=c[3962]&~(1<<x);break}else{c[w+12>>2]=t;c[t+8>>2]=w;break}}else{w=c[f+24>>2]|0;t=c[f+12>>2]|0;do if((t|0)==(f|0)){s=f+16|0;d=s+4|0;e=c[d>>2]|0;if(!e){k=c[s>>2]|0;if(!k){y=0;break}else{z=k;A=s}}else{z=e;A=d}d=z;e=A;while(1){s=d+20|0;k=c[s>>2]|0;if(!k){j=d+16|0;q=c[j>>2]|0;if(!q)break;else{B=q;C=j}}else{B=k;C=s}d=B;e=C}c[e>>2]=0;y=d}else{o=c[f+8>>2]|0;c[o+12>>2]=t;c[t+8>>2]=o;y=t}while(0);if(w|0){t=c[f+28>>2]|0;h=16152+(t<<2)|0;if((c[h>>2]|0)==(f|0)){c[h>>2]=y;if(!y){c[3963]=c[3963]&~(1<<t);break}}else{t=w+16|0;c[((c[t>>2]|0)==(f|0)?t:w+20|0)>>2]=y;if(!y)break}c[y+24>>2]=w;t=f+16|0;h=c[t>>2]|0;if(h|0){c[y+16>>2]=h;c[h+24>>2]=y}h=c[t+4>>2]|0;if(h|0){c[y+20>>2]=h;c[h+24>>2]=y}}}while(0);c[l+4>>2]=r|1;c[n+r>>2]=r;if((l|0)==(c[3967]|0)){c[3964]=r;return}else D=r}else{c[b>>2]=a&-2;c[l+4>>2]=m|1;c[n+m>>2]=m;D=m}m=D>>>3;if(D>>>0<256){n=15888+(m<<1<<2)|0;a=c[3962]|0;b=1<<m;if(!(a&b)){c[3962]=a|b;E=n;F=n+8|0}else{b=n+8|0;E=c[b>>2]|0;F=b}c[F>>2]=l;c[E+12>>2]=l;c[l+8>>2]=E;c[l+12>>2]=n;return}n=D>>>8;if(n)if(D>>>0>16777215)G=31;else{E=(n+1048320|0)>>>16&8;F=n<<E;n=(F+520192|0)>>>16&4;b=F<<n;F=(b+245760|0)>>>16&2;a=14-(n|E|F)+(b<<F>>>15)|0;G=D>>>(a+7|0)&1|a<<1}else G=0;a=16152+(G<<2)|0;c[l+28>>2]=G;c[l+20>>2]=0;c[l+16>>2]=0;F=c[3963]|0;b=1<<G;a:do if(!(F&b)){c[3963]=F|b;c[a>>2]=l;c[l+24>>2]=a;c[l+12>>2]=l;c[l+8>>2]=l}else{E=c[a>>2]|0;b:do if((c[E+4>>2]&-8|0)==(D|0))H=E;else{n=D<<((G|0)==31?0:25-(G>>>1)|0);m=E;while(1){I=m+16+(n>>>31<<2)|0;r=c[I>>2]|0;if(!r)break;if((c[r+4>>2]&-8|0)==(D|0)){H=r;break b}else{n=n<<1;m=r}}c[I>>2]=l;c[l+24>>2]=m;c[l+12>>2]=l;c[l+8>>2]=l;break a}while(0);E=H+8|0;w=c[E>>2]|0;c[w+12>>2]=l;c[E>>2]=l;c[l+8>>2]=w;c[l+12>>2]=H;c[l+24>>2]=0}while(0);l=(c[3970]|0)+-1|0;c[3970]=l;if(l|0)return;l=16304;while(1){H=c[l>>2]|0;if(!H)break;else l=H+8|0}c[3970]=-1;return}function Jk(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0;if(!a){d=Hk(b)|0;return d|0}if(b>>>0>4294967231){e=Qk()|0;c[e>>2]=12;d=0;return d|0}e=Kk(a+-8|0,b>>>0<11?16:b+11&-8)|0;if(e|0){d=e+8|0;return d|0}e=Hk(b)|0;if(!e){d=0;return d|0}f=c[a+-4>>2]|0;g=(f&-8)-((f&3|0)==0?8:4)|0;Un(e|0,a|0,(g>>>0<b>>>0?g:b)|0)|0;Ik(a);d=e;return d|0}function Kk(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0;d=a+4|0;e=c[d>>2]|0;f=e&-8;g=a+f|0;if(!(e&3)){if(b>>>0<256){h=0;return h|0}if(f>>>0>=(b+4|0)>>>0?(f-b|0)>>>0<=c[4082]<<1>>>0:0){h=a;return h|0}h=0;return h|0}if(f>>>0>=b>>>0){i=f-b|0;if(i>>>0<=15){h=a;return h|0}j=a+b|0;c[d>>2]=e&1|b|2;c[j+4>>2]=i|3;k=g+4|0;c[k>>2]=c[k>>2]|1;Lk(j,i);h=a;return h|0}if((c[3968]|0)==(g|0)){i=(c[3965]|0)+f|0;j=i-b|0;k=a+b|0;if(i>>>0<=b>>>0){h=0;return h|0}c[d>>2]=e&1|b|2;c[k+4>>2]=j|1;c[3968]=k;c[3965]=j;h=a;return h|0}if((c[3967]|0)==(g|0)){j=(c[3964]|0)+f|0;if(j>>>0<b>>>0){h=0;return h|0}k=j-b|0;if(k>>>0>15){i=a+b|0;l=a+j|0;c[d>>2]=e&1|b|2;c[i+4>>2]=k|1;c[l>>2]=k;m=l+4|0;c[m>>2]=c[m>>2]&-2;n=i;o=k}else{c[d>>2]=e&1|j|2;k=a+j+4|0;c[k>>2]=c[k>>2]|1;n=0;o=0}c[3964]=o;c[3967]=n;h=a;return h|0}n=c[g+4>>2]|0;if(n&2|0){h=0;return h|0}o=(n&-8)+f|0;if(o>>>0<b>>>0){h=0;return h|0}f=o-b|0;k=n>>>3;do if(n>>>0<256){j=c[g+8>>2]|0;i=c[g+12>>2]|0;if((i|0)==(j|0)){c[3962]=c[3962]&~(1<<k);break}else{c[j+12>>2]=i;c[i+8>>2]=j;break}}else{j=c[g+24>>2]|0;i=c[g+12>>2]|0;do if((i|0)==(g|0)){m=g+16|0;l=m+4|0;p=c[l>>2]|0;if(!p){q=c[m>>2]|0;if(!q){r=0;break}else{s=q;t=m}}else{s=p;t=l}l=s;p=t;while(1){m=l+20|0;q=c[m>>2]|0;if(!q){u=l+16|0;v=c[u>>2]|0;if(!v)break;else{w=v;x=u}}else{w=q;x=m}l=w;p=x}c[p>>2]=0;r=l}else{m=c[g+8>>2]|0;c[m+12>>2]=i;c[i+8>>2]=m;r=i}while(0);if(j|0){i=c[g+28>>2]|0;m=16152+(i<<2)|0;if((c[m>>2]|0)==(g|0)){c[m>>2]=r;if(!r){c[3963]=c[3963]&~(1<<i);break}}else{i=j+16|0;c[((c[i>>2]|0)==(g|0)?i:j+20|0)>>2]=r;if(!r)break}c[r+24>>2]=j;i=g+16|0;m=c[i>>2]|0;if(m|0){c[r+16>>2]=m;c[m+24>>2]=r}m=c[i+4>>2]|0;if(m|0){c[r+20>>2]=m;c[m+24>>2]=r}}}while(0);if(f>>>0<16){c[d>>2]=e&1|o|2;r=a+o+4|0;c[r>>2]=c[r>>2]|1;h=a;return h|0}else{r=a+b|0;c[d>>2]=e&1|b|2;c[r+4>>2]=f|3;b=a+o+4|0;c[b>>2]=c[b>>2]|1;Lk(r,f);h=a;return h|0}return 0}function Lk(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0,z=0,A=0,B=0,C=0,D=0,E=0,F=0,G=0;d=a+b|0;e=c[a+4>>2]|0;do if(!(e&1)){f=c[a>>2]|0;if(!(e&3))return;g=a+(0-f)|0;h=f+b|0;if((c[3967]|0)==(g|0)){i=d+4|0;j=c[i>>2]|0;if((j&3|0)!=3){k=g;l=h;break}c[3964]=h;c[i>>2]=j&-2;c[g+4>>2]=h|1;c[d>>2]=h;return}j=f>>>3;if(f>>>0<256){f=c[g+8>>2]|0;i=c[g+12>>2]|0;if((i|0)==(f|0)){c[3962]=c[3962]&~(1<<j);k=g;l=h;break}else{c[f+12>>2]=i;c[i+8>>2]=f;k=g;l=h;break}}f=c[g+24>>2]|0;i=c[g+12>>2]|0;do if((i|0)==(g|0)){j=g+16|0;m=j+4|0;n=c[m>>2]|0;if(!n){o=c[j>>2]|0;if(!o){p=0;break}else{q=o;r=j}}else{q=n;r=m}m=q;n=r;while(1){j=m+20|0;o=c[j>>2]|0;if(!o){s=m+16|0;t=c[s>>2]|0;if(!t)break;else{u=t;v=s}}else{u=o;v=j}m=u;n=v}c[n>>2]=0;p=m}else{j=c[g+8>>2]|0;c[j+12>>2]=i;c[i+8>>2]=j;p=i}while(0);if(f){i=c[g+28>>2]|0;j=16152+(i<<2)|0;if((c[j>>2]|0)==(g|0)){c[j>>2]=p;if(!p){c[3963]=c[3963]&~(1<<i);k=g;l=h;break}}else{i=f+16|0;c[((c[i>>2]|0)==(g|0)?i:f+20|0)>>2]=p;if(!p){k=g;l=h;break}}c[p+24>>2]=f;i=g+16|0;j=c[i>>2]|0;if(j|0){c[p+16>>2]=j;c[j+24>>2]=p}j=c[i+4>>2]|0;if(j){c[p+20>>2]=j;c[j+24>>2]=p;k=g;l=h}else{k=g;l=h}}else{k=g;l=h}}else{k=a;l=b}while(0);b=d+4|0;a=c[b>>2]|0;if(!(a&2)){if((c[3968]|0)==(d|0)){p=(c[3965]|0)+l|0;c[3965]=p;c[3968]=k;c[k+4>>2]=p|1;if((k|0)!=(c[3967]|0))return;c[3967]=0;c[3964]=0;return}if((c[3967]|0)==(d|0)){p=(c[3964]|0)+l|0;c[3964]=p;c[3967]=k;c[k+4>>2]=p|1;c[k+p>>2]=p;return}p=(a&-8)+l|0;v=a>>>3;do if(a>>>0<256){u=c[d+8>>2]|0;r=c[d+12>>2]|0;if((r|0)==(u|0)){c[3962]=c[3962]&~(1<<v);break}else{c[u+12>>2]=r;c[r+8>>2]=u;break}}else{u=c[d+24>>2]|0;r=c[d+12>>2]|0;do if((r|0)==(d|0)){q=d+16|0;e=q+4|0;j=c[e>>2]|0;if(!j){i=c[q>>2]|0;if(!i){w=0;break}else{x=i;y=q}}else{x=j;y=e}e=x;j=y;while(1){q=e+20|0;i=c[q>>2]|0;if(!i){o=e+16|0;s=c[o>>2]|0;if(!s)break;else{z=s;A=o}}else{z=i;A=q}e=z;j=A}c[j>>2]=0;w=e}else{m=c[d+8>>2]|0;c[m+12>>2]=r;c[r+8>>2]=m;w=r}while(0);if(u|0){r=c[d+28>>2]|0;h=16152+(r<<2)|0;if((c[h>>2]|0)==(d|0)){c[h>>2]=w;if(!w){c[3963]=c[3963]&~(1<<r);break}}else{r=u+16|0;c[((c[r>>2]|0)==(d|0)?r:u+20|0)>>2]=w;if(!w)break}c[w+24>>2]=u;r=d+16|0;h=c[r>>2]|0;if(h|0){c[w+16>>2]=h;c[h+24>>2]=w}h=c[r+4>>2]|0;if(h|0){c[w+20>>2]=h;c[h+24>>2]=w}}}while(0);c[k+4>>2]=p|1;c[k+p>>2]=p;if((k|0)==(c[3967]|0)){c[3964]=p;return}else B=p}else{c[b>>2]=a&-2;c[k+4>>2]=l|1;c[k+l>>2]=l;B=l}l=B>>>3;if(B>>>0<256){a=15888+(l<<1<<2)|0;b=c[3962]|0;p=1<<l;if(!(b&p)){c[3962]=b|p;C=a;D=a+8|0}else{p=a+8|0;C=c[p>>2]|0;D=p}c[D>>2]=k;c[C+12>>2]=k;c[k+8>>2]=C;c[k+12>>2]=a;return}a=B>>>8;if(a)if(B>>>0>16777215)E=31;else{C=(a+1048320|0)>>>16&8;D=a<<C;a=(D+520192|0)>>>16&4;p=D<<a;D=(p+245760|0)>>>16&2;b=14-(a|C|D)+(p<<D>>>15)|0;E=B>>>(b+7|0)&1|b<<1}else E=0;b=16152+(E<<2)|0;c[k+28>>2]=E;c[k+20>>2]=0;c[k+16>>2]=0;D=c[3963]|0;p=1<<E;if(!(D&p)){c[3963]=D|p;c[b>>2]=k;c[k+24>>2]=b;c[k+12>>2]=k;c[k+8>>2]=k;return}p=c[b>>2]|0;a:do if((c[p+4>>2]&-8|0)==(B|0))F=p;else{b=B<<((E|0)==31?0:25-(E>>>1)|0);D=p;while(1){G=D+16+(b>>>31<<2)|0;C=c[G>>2]|0;if(!C)break;if((c[C+4>>2]&-8|0)==(B|0)){F=C;break a}else{b=b<<1;D=C}}c[G>>2]=k;c[k+24>>2]=D;c[k+12>>2]=k;c[k+8>>2]=k;return}while(0);G=F+8|0;B=c[G>>2]|0;c[B+12>>2]=k;c[G>>2]=k;c[k+8>>2]=B;c[k+12>>2]=F;c[k+24>>2]=0;return}function Mk(a){a=a|0;var b=0,d=0,e=0;b=Pa;Pa=Pa+16|0;d=b;e=Sk(c[a+60>>2]|0)|0;c[d>>2]=e;e=Pk(ga(6,d|0)|0)|0;Pa=b;return e|0}function Nk(b,d,e){b=b|0;d=d|0;e=e|0;var f=0,g=0;f=Pa;Pa=Pa+32|0;g=f;c[b+36>>2]=132;if((c[b>>2]&64|0)==0?(c[g>>2]=c[b+60>>2],c[g+4>>2]=21523,c[g+8>>2]=f+16,fa(54,g|0)|0):0)a[b+75>>0]=-1;g=Rk(b,d,e)|0;Pa=f;return g|0}function Ok(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0;e=Pa;Pa=Pa+32|0;f=e;g=e+20|0;c[f>>2]=c[a+60>>2];c[f+4>>2]=0;c[f+8>>2]=b;c[f+12>>2]=g;c[f+16>>2]=d;if((Pk(Y(140,f|0)|0)|0)<0){c[g>>2]=-1;h=-1}else h=c[g>>2]|0;Pa=e;return h|0}function Pk(a){a=a|0;var b=0,d=0;if(a>>>0>4294963200){b=Qk()|0;c[b>>2]=0-a;d=-1}else d=a;return d|0}function Qk(){return 16344}function Rk(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0;e=Pa;Pa=Pa+48|0;f=e+32|0;g=e+16|0;h=e;i=a+28|0;j=c[i>>2]|0;c[h>>2]=j;k=a+20|0;l=(c[k>>2]|0)-j|0;c[h+4>>2]=l;c[h+8>>2]=b;c[h+12>>2]=d;b=l+d|0;l=a+60|0;c[g>>2]=c[l>>2];c[g+4>>2]=h;c[g+8>>2]=2;j=Pk(_(146,g|0)|0)|0;a:do if((b|0)!=(j|0)){g=2;m=b;n=h;o=j;while(1){if((o|0)<0)break;m=m-o|0;p=c[n+4>>2]|0;q=o>>>0>p>>>0;r=q?n+8|0:n;s=g+(q<<31>>31)|0;t=o-(q?p:0)|0;c[r>>2]=(c[r>>2]|0)+t;p=r+4|0;c[p>>2]=(c[p>>2]|0)-t;c[f>>2]=c[l>>2];c[f+4>>2]=r;c[f+8>>2]=s;o=Pk(_(146,f|0)|0)|0;if((m|0)==(o|0)){u=3;break a}else{g=s;n=r}}c[a+16>>2]=0;c[i>>2]=0;c[k>>2]=0;c[a>>2]=c[a>>2]|32;if((g|0)==2)v=0;else v=d-(c[n+4>>2]|0)|0}else u=3;while(0);if((u|0)==3){u=c[a+44>>2]|0;c[a+16>>2]=u+(c[a+48>>2]|0);a=u;c[i>>2]=a;c[k>>2]=a;v=d}Pa=e;return v|0}function Sk(a){a=a|0;return a|0}function Tk(b,d,e){b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0;f=Pa;Pa=Pa+32|0;g=f+16|0;h=f;c[h>>2]=d;i=h+4|0;j=b+48|0;k=c[j>>2]|0;c[i>>2]=e-((k|0)!=0&1);l=b+44|0;c[h+8>>2]=c[l>>2];c[h+12>>2]=k;c[g>>2]=c[b+60>>2];c[g+4>>2]=h;c[g+8>>2]=2;h=Pk(Z(145,g|0)|0)|0;if((h|0)>=1){g=c[i>>2]|0;if(h>>>0>g>>>0){i=c[l>>2]|0;l=b+4|0;c[l>>2]=i;k=i;c[b+8>>2]=k+(h-g);if(!(c[j>>2]|0))m=e;else{c[l>>2]=k+1;a[d+(e+-1)>>0]=a[k>>0]|0;m=e}}else m=h}else{c[b>>2]=c[b>>2]|h&48^16;m=h}Pa=f;return m|0}function Uk(a){a=a|0;return 1}function Vk(a){a=a|0;var b=0,e=0,f=0;b=Pa;Pa=Pa+16|0;e=b;if((Zk(a)|0)==0?(Va[c[a+32>>2]&255](a,e,1)|0)==1:0)f=d[e>>0]|0;else f=-1;Pa=b;return f|0}function Wk(b,d){b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0;do if((b|0)!=-1){if((c[d+76>>2]|0)>-1)e=Uk(d)|0;else e=0;f=d+4|0;g=c[f>>2]|0;if(!g){Zk(d)|0;h=c[f>>2]|0;if(h|0){i=h;j=6}}else{i=g;j=6}if((j|0)==6?i>>>0>((c[d+44>>2]|0)+-8|0)>>>0:0){g=i+-1|0;c[f>>2]=g;a[g>>0]=b;c[d>>2]=c[d>>2]&-17;if(!e){k=b;break}Yk(d);k=b;break}if(e){Yk(d);k=-1}else k=-1}else k=-1;while(0);return k|0}function Xk(b,d,e){b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0;f=d&255;g=(e|0)!=0;a:do if(g&(b&3|0)!=0){h=d&255;i=b;j=e;while(1){if((a[i>>0]|0)==h<<24>>24){k=i;l=j;m=6;break a}n=i+1|0;o=j+-1|0;p=(o|0)!=0;if(p&(n&3|0)!=0){i=n;j=o}else{q=n;r=o;s=p;m=5;break}}}else{q=b;r=e;s=g;m=5}while(0);if((m|0)==5)if(s){k=q;l=r;m=6}else m=16;b:do if((m|0)==6){r=d&255;if((a[k>>0]|0)==r<<24>>24)if(!l){m=16;break}else{t=k;break}q=H(f,16843009)|0;c:do if(l>>>0>3){s=k;g=l;while(1){e=c[s>>2]^q;if((e&-2139062144^-2139062144)&e+-16843009|0){u=g;v=s;break c}e=s+4|0;b=g+-4|0;if(b>>>0>3){s=e;g=b}else{w=e;x=b;m=11;break}}}else{w=k;x=l;m=11}while(0);if((m|0)==11)if(!x){m=16;break}else{u=x;v=w}q=v;g=u;while(1){if((a[q>>0]|0)==r<<24>>24){t=q;break b}g=g+-1|0;if(!g){m=16;break}else q=q+1|0}}while(0);if((m|0)==16)t=0;return t|0}function Yk(a){a=a|0;return}function Zk(b){b=b|0;var d=0,e=0,f=0;d=b+74|0;e=a[d>>0]|0;a[d>>0]=e+255|e;e=b+20|0;d=b+28|0;if((c[e>>2]|0)>>>0>(c[d>>2]|0)>>>0)Va[c[b+36>>2]&255](b,0,0)|0;c[b+16>>2]=0;c[d>>2]=0;c[e>>2]=0;e=c[b>>2]|0;if(!(e&4)){d=(c[b+44>>2]|0)+(c[b+48>>2]|0)|0;c[b+8>>2]=d;c[b+4>>2]=d;f=e<<27>>31}else{c[b>>2]=e|32;f=-1}return f|0}function _k(){return 5888}function $k(a){a=a|0;return (a+-48|0)>>>0<10|0}function al(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0;e=Pa;Pa=Pa+16|0;f=e;c[f>>2]=d;d=dl(a,b,f)|0;Pa=e;return d|0}function bl(a){a=a|0;var b=0;b=(wl()|0)+188|0;return xl(a,c[b>>2]|0)|0}function cl(b,d,e,f){b=b|0;d=d|0;e=e|0;f=f|0;var g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0;g=Pa;Pa=Pa+128|0;h=g+124|0;i=g;j=i;k=6132;l=j+124|0;do{c[j>>2]=c[k>>2];j=j+4|0;k=k+4|0}while((j|0)<(l|0));if((d+-1|0)>>>0>2147483646)if(!d){m=h;n=1;o=4}else{h=Qk()|0;c[h>>2]=75;p=-1}else{m=b;n=d;o=4}if((o|0)==4){o=-2-m|0;d=n>>>0>o>>>0?o:n;c[i+48>>2]=d;n=i+20|0;c[n>>2]=m;c[i+44>>2]=m;o=m+d|0;m=i+16|0;c[m>>2]=o;c[i+28>>2]=o;o=dl(i,e,f)|0;if(!d)p=o;else{d=c[n>>2]|0;a[d+(((d|0)==(c[m>>2]|0))<<31>>31)>>0]=0;p=o}}Pa=g;return p|0}function dl(b,d,e){b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0;f=Pa;Pa=Pa+224|0;g=f+208|0;h=f+160|0;i=f+80|0;j=f;k=h;l=k+40|0;do{c[k>>2]=0;k=k+4|0}while((k|0)<(l|0));c[g>>2]=c[e>>2];if((el(0,d,g,i,h)|0)<0)m=-1;else{if((c[b+76>>2]|0)>-1)n=Uk(b)|0;else n=0;e=c[b>>2]|0;k=e&32;if((a[b+74>>0]|0)<1)c[b>>2]=e&-33;e=b+48|0;if(!(c[e>>2]|0)){l=b+44|0;o=c[l>>2]|0;c[l>>2]=j;p=b+28|0;c[p>>2]=j;q=b+20|0;c[q>>2]=j;c[e>>2]=80;r=b+16|0;c[r>>2]=j+80;j=el(b,d,g,i,h)|0;if(!o)s=j;else{Va[c[b+36>>2]&255](b,0,0)|0;t=(c[q>>2]|0)==0?-1:j;c[l>>2]=o;c[e>>2]=0;c[r>>2]=0;c[p>>2]=0;c[q>>2]=0;s=t}}else s=el(b,d,g,i,h)|0;h=c[b>>2]|0;c[b>>2]=h|k;if(n|0)Yk(b);m=(h&32|0)==0?s:-1}Pa=f;return m|0}function el(d,e,f,h,i){d=d|0;e=e|0;f=f|0;h=h|0;i=i|0;var j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0,z=0,A=0,B=0,C=0,D=0,E=0,F=0,G=0,H=0,I=0,J=0,K=0,M=0,N=0,O=0,P=0,Q=0,R=0,S=0,T=0,U=0,V=0,W=0,X=0,Y=0,Z=0,_=0,$=0,aa=0,ba=0,ca=0,da=0,ea=0,fa=0,ga=0,ha=0,ia=0,ja=0,ka=0,la=0,ma=0,na=0,oa=0,pa=0,qa=0,ra=0,sa=0,ta=0,ua=0,va=0,wa=0,xa=0,ya=0,za=0,Aa=0,Ba=0,Ca=0;j=Pa;Pa=Pa+64|0;k=j+56|0;l=j+40|0;m=j;n=j+48|0;o=j+60|0;c[k>>2]=e;e=(d|0)!=0;p=m+40|0;q=p;r=m+39|0;m=n+4|0;s=0;t=0;u=0;a:while(1){v=s;w=t;while(1){do if((w|0)>-1)if((v|0)>(2147483647-w|0)){x=Qk()|0;c[x>>2]=75;y=-1;break}else{y=v+w|0;break}else y=w;while(0);z=c[k>>2]|0;x=a[z>>0]|0;if(!(x<<24>>24)){A=94;break a}B=x;x=z;b:while(1){switch(B<<24>>24){case 37:{A=10;break b;break}case 0:{C=x;break b;break}default:{}}D=x+1|0;c[k>>2]=D;B=a[D>>0]|0;x=D}c:do if((A|0)==10){A=0;B=x;D=x;while(1){if((a[D+1>>0]|0)!=37){C=B;break c}E=B+1|0;D=D+2|0;c[k>>2]=D;if((a[D>>0]|0)!=37){C=E;break}else B=E}}while(0);v=C-z|0;if(e)fl(d,z,v);if(!v)break;else w=y}w=($k(a[(c[k>>2]|0)+1>>0]|0)|0)==0;v=c[k>>2]|0;if(!w?(a[v+2>>0]|0)==36:0){F=(a[v+1>>0]|0)+-48|0;G=1;H=3}else{F=-1;G=u;H=1}w=v+H|0;c[k>>2]=w;v=a[w>>0]|0;x=(v<<24>>24)+-32|0;if(x>>>0>31|(1<<x&75913|0)==0){I=0;J=v;K=w}else{v=0;B=x;x=w;while(1){w=1<<B|v;D=x+1|0;c[k>>2]=D;E=a[D>>0]|0;B=(E<<24>>24)+-32|0;if(B>>>0>31|(1<<B&75913|0)==0){I=w;J=E;K=D;break}else{v=w;x=D}}}if(J<<24>>24==42){if(($k(a[K+1>>0]|0)|0)!=0?(x=c[k>>2]|0,(a[x+2>>0]|0)==36):0){v=x+1|0;c[i+((a[v>>0]|0)+-48<<2)>>2]=10;M=c[h+((a[v>>0]|0)+-48<<3)>>2]|0;N=1;O=x+3|0}else{if(G|0){P=-1;break}if(e){x=(c[f>>2]|0)+(4-1)&~(4-1);v=c[x>>2]|0;c[f>>2]=x+4;Q=v}else Q=0;M=Q;N=0;O=(c[k>>2]|0)+1|0}c[k>>2]=O;v=(M|0)<0;R=v?0-M|0:M;S=v?I|8192:I;T=N;U=O}else{v=gl(k)|0;if((v|0)<0){P=-1;break}R=v;S=I;T=G;U=c[k>>2]|0}do if((a[U>>0]|0)==46){v=U+1|0;if((a[v>>0]|0)!=42){c[k>>2]=v;v=gl(k)|0;V=v;W=c[k>>2]|0;break}if($k(a[U+2>>0]|0)|0?(v=c[k>>2]|0,(a[v+3>>0]|0)==36):0){x=v+2|0;c[i+((a[x>>0]|0)+-48<<2)>>2]=10;B=c[h+((a[x>>0]|0)+-48<<3)>>2]|0;x=v+4|0;c[k>>2]=x;V=B;W=x;break}if(T|0){P=-1;break a}if(e){x=(c[f>>2]|0)+(4-1)&~(4-1);B=c[x>>2]|0;c[f>>2]=x+4;X=B}else X=0;B=(c[k>>2]|0)+2|0;c[k>>2]=B;V=X;W=B}else{V=-1;W=U}while(0);B=0;x=W;while(1){if(((a[x>>0]|0)+-65|0)>>>0>57){P=-1;break a}v=x;x=x+1|0;c[k>>2]=x;Y=a[(a[v>>0]|0)+-65+(2592+(B*58|0))>>0]|0;Z=Y&255;if((Z+-1|0)>>>0>=8)break;else B=Z}if(!(Y<<24>>24)){P=-1;break}v=(F|0)>-1;do if(Y<<24>>24==19)if(v){P=-1;break a}else A=54;else{if(v){c[i+(F<<2)>>2]=Z;D=h+(F<<3)|0;w=c[D+4>>2]|0;E=l;c[E>>2]=c[D>>2];c[E+4>>2]=w;A=54;break}if(!e){P=0;break a}hl(l,Z,f);_=c[k>>2]|0;A=55}while(0);if((A|0)==54){A=0;if(e){_=x;A=55}else $=0}d:do if((A|0)==55){A=0;v=a[_+-1>>0]|0;w=(B|0)!=0&(v&15|0)==3?v&-33:v;v=S&-65537;E=(S&8192|0)==0?S:v;e:do switch(w|0){case 110:{switch((B&255)<<24>>24){case 0:{c[c[l>>2]>>2]=y;$=0;break d;break}case 1:{c[c[l>>2]>>2]=y;$=0;break d;break}case 2:{D=c[l>>2]|0;c[D>>2]=y;c[D+4>>2]=((y|0)<0)<<31>>31;$=0;break d;break}case 3:{b[c[l>>2]>>1]=y;$=0;break d;break}case 4:{a[c[l>>2]>>0]=y;$=0;break d;break}case 6:{c[c[l>>2]>>2]=y;$=0;break d;break}case 7:{D=c[l>>2]|0;c[D>>2]=y;c[D+4>>2]=((y|0)<0)<<31>>31;$=0;break d;break}default:{$=0;break d}}break}case 112:{aa=120;ba=V>>>0>8?V:8;ca=E|8;A=67;break}case 88:case 120:{aa=w;ba=V;ca=E;A=67;break}case 111:{D=l;da=c[D>>2]|0;ea=c[D+4>>2]|0;D=jl(da,ea,p)|0;fa=q-D|0;ga=D;ha=0;ia=13451;ja=(E&8|0)==0|(V|0)>(fa|0)?V:fa+1|0;ka=E;la=da;ma=ea;A=73;break}case 105:case 100:{ea=l;da=c[ea>>2]|0;fa=c[ea+4>>2]|0;if((fa|0)<0){ea=Jn(0,0,da|0,fa|0)|0;D=L()|0;na=l;c[na>>2]=ea;c[na+4>>2]=D;oa=1;pa=13451;qa=ea;ra=D;A=72;break e}else{oa=(E&2049|0)!=0&1;pa=(E&2048|0)==0?((E&1|0)==0?13451:13453):13452;qa=da;ra=fa;A=72;break e}break}case 117:{fa=l;oa=0;pa=13451;qa=c[fa>>2]|0;ra=c[fa+4>>2]|0;A=72;break}case 99:{a[r>>0]=c[l>>2];sa=r;ta=0;ua=13451;va=1;wa=v;xa=q;break}case 109:{fa=Qk()|0;ya=bl(c[fa>>2]|0)|0;A=77;break}case 115:{fa=c[l>>2]|0;ya=(fa|0)==0?13461:fa;A=77;break}case 67:{c[n>>2]=c[l>>2];c[m>>2]=0;c[l>>2]=n;za=-1;A=81;break}case 83:{if(!V){ll(d,32,R,0,E);Aa=0;A=91}else{za=V;A=81}break}case 65:case 71:case 70:case 69:case 97:case 103:case 102:case 101:{$=nl(d,+g[l>>3],R,V,E,w)|0;break d;break}default:{sa=z;ta=0;ua=13451;va=V;wa=E;xa=q}}while(0);f:do if((A|0)==67){A=0;w=l;fa=c[w>>2]|0;da=c[w+4>>2]|0;w=il(fa,da,p,aa&32)|0;D=(ca&8|0)==0|(fa|0)==0&(da|0)==0;ga=w;ha=D?0:2;ia=D?13451:13451+(aa>>>4)|0;ja=ba;ka=ca;la=fa;ma=da;A=73}else if((A|0)==72){A=0;ga=kl(qa,ra,p)|0;ha=oa;ia=pa;ja=V;ka=E;la=qa;ma=ra;A=73}else if((A|0)==77){A=0;da=Xk(ya,0,V)|0;fa=(da|0)==0;sa=ya;ta=0;ua=13451;va=fa?V:da-ya|0;wa=v;xa=fa?ya+V|0:da}else if((A|0)==81){A=0;da=c[l>>2]|0;fa=0;while(1){D=c[da>>2]|0;if(!D){Ba=fa;break}w=ml(o,D)|0;Ca=(w|0)<0;if(Ca|w>>>0>(za-fa|0)>>>0){A=85;break}D=w+fa|0;if(za>>>0>D>>>0){da=da+4|0;fa=D}else{Ba=D;break}}if((A|0)==85){A=0;if(Ca){P=-1;break a}else Ba=fa}ll(d,32,R,Ba,E);if(!Ba){Aa=0;A=91}else{da=c[l>>2]|0;D=0;while(1){w=c[da>>2]|0;if(!w){Aa=Ba;A=91;break f}ea=ml(o,w)|0;D=ea+D|0;if((D|0)>(Ba|0)){Aa=Ba;A=91;break f}fl(d,o,ea);if(D>>>0>=Ba>>>0){Aa=Ba;A=91;break}else da=da+4|0}}}while(0);if((A|0)==73){A=0;v=(la|0)!=0|(ma|0)!=0;da=(ja|0)!=0|v;D=q-ga+((v^1)&1)|0;sa=da?ga:p;ta=ha;ua=ia;va=da?((ja|0)>(D|0)?ja:D):0;wa=(ja|0)>-1?ka&-65537:ka;xa=q}else if((A|0)==91){A=0;ll(d,32,R,Aa,E^8192);$=(R|0)>(Aa|0)?R:Aa;break}D=xa-sa|0;da=(va|0)<(D|0)?D:va;v=da+ta|0;fa=(R|0)<(v|0)?v:R;ll(d,32,fa,v,wa);fl(d,ua,ta);ll(d,48,fa,v,wa^65536);ll(d,48,da,D,0);fl(d,sa,D);ll(d,32,fa,v,wa^8192);$=fa}while(0);s=$;t=y;u=T}g:do if((A|0)==94)if(!d)if(!u)P=0;else{T=1;while(1){t=c[i+(T<<2)>>2]|0;if(!t)break;hl(h+(T<<3)|0,t,f);t=T+1|0;if(t>>>0<10)T=t;else{P=1;break g}}t=T;while(1){if(c[i+(t<<2)>>2]|0){P=-1;break g}t=t+1|0;if(t>>>0>=10){P=1;break}}}else P=y;while(0);Pa=j;return P|0}function fl(a,b,d){a=a|0;b=b|0;d=d|0;if(!(c[a>>2]&32))tl(b,d,a)|0;return}function gl(b){b=b|0;var d=0,e=0,f=0,g=0,h=0;if(!($k(a[c[b>>2]>>0]|0)|0))d=0;else{e=0;while(1){f=c[b>>2]|0;g=(e*10|0)+-48+(a[f>>0]|0)|0;h=f+1|0;c[b>>2]=h;if(!($k(a[h>>0]|0)|0)){d=g;break}else e=g}}return d|0}function hl(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,h=0,i=0,j=0.0;a:do if(b>>>0<=20)do switch(b|0){case 9:{e=(c[d>>2]|0)+(4-1)&~(4-1);f=c[e>>2]|0;c[d>>2]=e+4;c[a>>2]=f;break a;break}case 10:{f=(c[d>>2]|0)+(4-1)&~(4-1);e=c[f>>2]|0;c[d>>2]=f+4;f=a;c[f>>2]=e;c[f+4>>2]=((e|0)<0)<<31>>31;break a;break}case 11:{e=(c[d>>2]|0)+(4-1)&~(4-1);f=c[e>>2]|0;c[d>>2]=e+4;e=a;c[e>>2]=f;c[e+4>>2]=0;break a;break}case 12:{e=(c[d>>2]|0)+(8-1)&~(8-1);f=e;h=c[f>>2]|0;i=c[f+4>>2]|0;c[d>>2]=e+8;e=a;c[e>>2]=h;c[e+4>>2]=i;break a;break}case 13:{i=(c[d>>2]|0)+(4-1)&~(4-1);e=c[i>>2]|0;c[d>>2]=i+4;i=(e&65535)<<16>>16;e=a;c[e>>2]=i;c[e+4>>2]=((i|0)<0)<<31>>31;break a;break}case 14:{i=(c[d>>2]|0)+(4-1)&~(4-1);e=c[i>>2]|0;c[d>>2]=i+4;i=a;c[i>>2]=e&65535;c[i+4>>2]=0;break a;break}case 15:{i=(c[d>>2]|0)+(4-1)&~(4-1);e=c[i>>2]|0;c[d>>2]=i+4;i=(e&255)<<24>>24;e=a;c[e>>2]=i;c[e+4>>2]=((i|0)<0)<<31>>31;break a;break}case 16:{i=(c[d>>2]|0)+(4-1)&~(4-1);e=c[i>>2]|0;c[d>>2]=i+4;i=a;c[i>>2]=e&255;c[i+4>>2]=0;break a;break}case 17:{i=(c[d>>2]|0)+(8-1)&~(8-1);j=+g[i>>3];c[d>>2]=i+8;g[a>>3]=j;break a;break}case 18:{i=(c[d>>2]|0)+(8-1)&~(8-1);j=+g[i>>3];c[d>>2]=i+8;g[a>>3]=j;break a;break}default:break a}while(0);while(0);return}function il(b,c,e,f){b=b|0;c=c|0;e=e|0;f=f|0;var g=0,h=0;if((b|0)==0&(c|0)==0)g=e;else{h=e;e=c;c=b;while(1){b=h+-1|0;a[b>>0]=d[3056+(c&15)>>0]|0|f;c=On(c|0,e|0,4)|0;e=L()|0;if((c|0)==0&(e|0)==0){g=b;break}else h=b}}return g|0}function jl(b,c,d){b=b|0;c=c|0;d=d|0;var e=0,f=0;if((b|0)==0&(c|0)==0)e=d;else{f=d;d=c;c=b;while(1){b=f+-1|0;a[b>>0]=c&7|48;c=On(c|0,d|0,3)|0;d=L()|0;if((c|0)==0&(d|0)==0){e=b;break}else f=b}}return e|0}function kl(b,c,d){b=b|0;c=c|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0;if(c>>>0>0|(c|0)==0&b>>>0>4294967295){e=d;f=b;g=c;do{c=f;f=Mn(f|0,g|0,10,0)|0;h=g;g=L()|0;i=Hn(f|0,g|0,10,0)|0;j=Jn(c|0,h|0,i|0,L()|0)|0;L()|0;e=e+-1|0;a[e>>0]=j&255|48}while(h>>>0>9|(h|0)==9&c>>>0>4294967295);k=f;l=e}else{k=b;l=d}if(!k)m=l;else{d=k;k=l;while(1){l=d;d=(d>>>0)/10|0;b=k+-1|0;a[b>>0]=l-(d*10|0)|48;if(l>>>0<10){m=b;break}else k=b}}return m|0}function ll(a,b,c,d,e){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;var f=0,g=0,h=0;f=Pa;Pa=Pa+256|0;g=f;if((c|0)>(d|0)&(e&73728|0)==0){e=c-d|0;Vn(g|0,b<<24>>24|0,(e>>>0<256?e:256)|0)|0;if(e>>>0>255){b=c-d|0;d=e;do{fl(a,g,256);d=d+-256|0}while(d>>>0>255);h=b&255}else h=e;fl(a,g,h)}Pa=f;return}function ml(a,b){a=a|0;b=b|0;var c=0;if(!a)c=0;else c=rl(a,b,0)|0;return c|0}function nl(b,e,f,g,h,i){b=b|0;e=+e;f=f|0;g=g|0;h=h|0;i=i|0;var j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0.0,t=0,u=0.0,v=0,w=0,x=0,y=0,z=0,A=0,B=0,C=0,D=0.0,E=0,F=0,G=0,I=0.0,J=0,K=0,M=0,N=0,O=0,P=0,Q=0.0,R=0,S=0,T=0,U=0,V=0,W=0,X=0,Y=0,Z=0,_=0,$=0,aa=0,ba=0,ca=0,da=0,ea=0,fa=0,ga=0,ha=0.0,ia=0.0,ja=0,ka=0,la=0,ma=0,na=0,oa=0,pa=0,qa=0,ra=0,sa=0,ta=0,ua=0,va=0,wa=0,xa=0,ya=0,za=0,Aa=0,Ba=0,Ca=0,Da=0,Ea=0,Fa=0,Ga=0,Ha=0;j=Pa;Pa=Pa+560|0;k=j+32|0;l=j+536|0;m=j;n=m;o=j+540|0;c[l>>2]=0;p=o+12|0;q=ol(e)|0;r=L()|0;if((r|0)<0){s=-e;t=ol(s)|0;u=s;v=1;w=13468;x=L()|0;y=t}else{u=e;v=(h&2049|0)!=0&1;w=(h&2048|0)==0?((h&1|0)==0?13469:13474):13471;x=r;y=q}do if(0==0&(x&2146435072|0)==2146435072){q=(i&32|0)!=0;y=v+3|0;ll(b,32,f,y,h&-65537);fl(b,w,v);fl(b,u!=u|0.0!=0.0?(q?13508:13495):q?13487:13491,3);ll(b,32,f,y,h^8192);z=y}else{e=+pl(u,l)*2.0;y=e!=0.0;if(y)c[l>>2]=(c[l>>2]|0)+-1;q=i|32;if((q|0)==97){r=i&32;t=(r|0)==0?w:w+9|0;A=v|2;B=12-g|0;do if(!(g>>>0>11|(B|0)==0)){s=8.0;C=B;do{C=C+-1|0;s=s*16.0}while((C|0)!=0);if((a[t>>0]|0)==45){D=-(s+(-e-s));break}else{D=e+s-s;break}}else D=e;while(0);B=c[l>>2]|0;C=(B|0)<0?0-B|0:B;E=kl(C,((C|0)<0)<<31>>31,p)|0;if((E|0)==(p|0)){C=o+11|0;a[C>>0]=48;F=C}else F=E;a[F+-1>>0]=(B>>31&2)+43;B=F+-2|0;a[B>>0]=i+15;E=(g|0)<1;C=(h&8|0)==0;G=m;I=D;while(1){J=~~I;K=G+1|0;a[G>>0]=r|d[3056+J>>0];I=(I-+(J|0))*16.0;if((K-n|0)==1?!(C&(E&I==0.0)):0){a[K>>0]=46;M=G+2|0}else M=K;if(!(I!=0.0))break;else G=M}G=M;if((g|0)!=0?(-2-n+G|0)<(g|0):0){E=p;C=B;N=g+2+E-C|0;O=E;P=C}else{C=p;E=B;N=C-n-E+G|0;O=C;P=E}E=N+A|0;ll(b,32,f,E,h);fl(b,t,A);ll(b,48,f,E,h^65536);C=G-n|0;fl(b,m,C);G=O-P|0;ll(b,48,N-(C+G)|0,0,0);fl(b,B,G);ll(b,32,f,E,h^8192);z=E;break}E=(g|0)<0?6:g;if(y){G=(c[l>>2]|0)+-28|0;c[l>>2]=G;Q=e*268435456.0;R=G}else{Q=e;R=c[l>>2]|0}G=(R|0)<0?k:k+288|0;C=G;I=Q;do{r=~~I>>>0;c[C>>2]=r;C=C+4|0;I=(I-+(r>>>0))*1.0e9}while(I!=0.0);y=G;if((R|0)>0){B=G;A=C;t=R;while(1){r=(t|0)<29?t:29;K=A+-4|0;if(K>>>0>=B>>>0){J=K;K=0;do{S=Pn(c[J>>2]|0,0,r|0)|0;T=In(S|0,L()|0,K|0,0)|0;S=L()|0;K=Mn(T|0,S|0,1e9,0)|0;U=Hn(K|0,L()|0,1e9,0)|0;V=Jn(T|0,S|0,U|0,L()|0)|0;L()|0;c[J>>2]=V;J=J+-4|0}while(J>>>0>=B>>>0);if(K){J=B+-4|0;c[J>>2]=K;W=J}else W=B}else W=B;a:do if(A>>>0>W>>>0){J=A;while(1){V=J+-4|0;if(c[V>>2]|0){X=J;break a}if(V>>>0>W>>>0)J=V;else{X=V;break}}}else X=A;while(0);K=(c[l>>2]|0)-r|0;c[l>>2]=K;if((K|0)>0){B=W;A=X;t=K}else{Y=W;Z=X;_=K;break}}}else{Y=G;Z=C;_=R}if((_|0)<0){t=((E+25|0)/9|0)+1|0;A=(q|0)==102;B=Y;K=Z;J=_;while(1){V=0-J|0;U=(V|0)<9?V:9;if(B>>>0<K>>>0){V=(1<<U)+-1|0;S=1e9>>>U;T=0;$=B;do{aa=c[$>>2]|0;c[$>>2]=(aa>>>U)+T;T=H(aa&V,S)|0;$=$+4|0}while($>>>0<K>>>0);$=(c[B>>2]|0)==0?B+4|0:B;if(!T){ba=K;ca=$}else{c[K>>2]=T;ba=K+4|0;ca=$}}else{ba=K;ca=(c[B>>2]|0)==0?B+4|0:B}$=A?G:ca;S=(ba-$>>2|0)>(t|0)?$+(t<<2)|0:ba;J=(c[l>>2]|0)+U|0;c[l>>2]=J;if((J|0)>=0){da=ca;ea=S;break}else{B=ca;K=S}}}else{da=Y;ea=Z}if(da>>>0<ea>>>0){K=(y-da>>2)*9|0;B=c[da>>2]|0;if(B>>>0<10)fa=K;else{J=K;K=10;while(1){K=K*10|0;t=J+1|0;if(B>>>0<K>>>0){fa=t;break}else J=t}}}else fa=0;J=(q|0)==103;K=(E|0)!=0;B=E-((q|0)==102?0:fa)+((K&J)<<31>>31)|0;if((B|0)<(((ea-y>>2)*9|0)+-9|0)){t=B+9216|0;B=(t|0)/9|0;A=G+4+(B+-1024<<2)|0;C=t-(B*9|0)|0;if((C|0)<8){B=C;C=10;while(1){t=C*10|0;if((B|0)<7){B=B+1|0;C=t}else{ga=t;break}}}else ga=10;C=c[A>>2]|0;B=(C>>>0)/(ga>>>0)|0;q=C-(H(B,ga)|0)|0;t=(A+4|0)==(ea|0);if(!(t&(q|0)==0)){s=(B&1|0)==0?9007199254740992.0:9007199254740994.0;B=ga>>>1;I=q>>>0<B>>>0?.5:t&(q|0)==(B|0)?1.0:1.5;if(!v){ha=I;ia=s}else{B=(a[w>>0]|0)==45;ha=B?-I:I;ia=B?-s:s}B=C-q|0;c[A>>2]=B;if(ia+ha!=ia){q=B+ga|0;c[A>>2]=q;if(q>>>0>999999999){q=A;B=da;while(1){C=q+-4|0;c[q>>2]=0;if(C>>>0<B>>>0){t=B+-4|0;c[t>>2]=0;ja=t}else ja=B;t=(c[C>>2]|0)+1|0;c[C>>2]=t;if(t>>>0>999999999){q=C;B=ja}else{ka=C;la=ja;break}}}else{ka=A;la=da}B=(y-la>>2)*9|0;q=c[la>>2]|0;if(q>>>0<10){ma=ka;na=B;oa=la}else{C=B;B=10;while(1){B=B*10|0;t=C+1|0;if(q>>>0<B>>>0){ma=ka;na=t;oa=la;break}else C=t}}}else{ma=A;na=fa;oa=da}}else{ma=A;na=fa;oa=da}C=ma+4|0;pa=na;qa=ea>>>0>C>>>0?C:ea;ra=oa}else{pa=fa;qa=ea;ra=da}C=0-pa|0;b:do if(qa>>>0>ra>>>0){B=qa;while(1){q=B+-4|0;if(c[q>>2]|0){sa=B;ta=1;break b}if(q>>>0>ra>>>0)B=q;else{sa=q;ta=0;break}}}else{sa=qa;ta=0}while(0);do if(J){A=E+((K^1)&1)|0;if((A|0)>(pa|0)&(pa|0)>-5){ua=i+-1|0;va=A+-1-pa|0}else{ua=i+-2|0;va=A+-1|0}if(!(h&8)){if(ta?(A=c[sa+-4>>2]|0,(A|0)!=0):0)if(!((A>>>0)%10|0)){B=0;U=10;while(1){U=U*10|0;T=B+1|0;if((A>>>0)%(U>>>0)|0|0){wa=T;break}else B=T}}else wa=0;else wa=9;B=((sa-y>>2)*9|0)+-9|0;if((ua|32|0)==102){U=B-wa|0;A=(U|0)>0?U:0;xa=ua;ya=(va|0)<(A|0)?va:A;break}else{A=B+pa-wa|0;B=(A|0)>0?A:0;xa=ua;ya=(va|0)<(B|0)?va:B;break}}else{xa=ua;ya=va}}else{xa=i;ya=E}while(0);E=(ya|0)!=0;y=E?1:h>>>3&1;K=(xa|32|0)==102;if(K){za=0;Aa=(pa|0)>0?pa:0}else{J=(pa|0)<0?C:pa;B=kl(J,((J|0)<0)<<31>>31,p)|0;J=p;if((J-B|0)<2){A=B;while(1){U=A+-1|0;a[U>>0]=48;if((J-U|0)<2)A=U;else{Ba=U;break}}}else Ba=B;a[Ba+-1>>0]=(pa>>31&2)+43;A=Ba+-2|0;a[A>>0]=xa;za=A;Aa=J-A|0}A=v+1+ya+y+Aa|0;ll(b,32,f,A,h);fl(b,w,v);ll(b,48,f,A,h^65536);if(K){C=ra>>>0>G>>>0?G:ra;U=m+9|0;T=U;q=m+8|0;t=C;do{S=kl(c[t>>2]|0,0,U)|0;if((t|0)==(C|0))if((S|0)==(U|0)){a[q>>0]=48;Ca=q}else Ca=S;else if(S>>>0>m>>>0){Vn(m|0,48,S-n|0)|0;$=S;while(1){V=$+-1|0;if(V>>>0>m>>>0)$=V;else{Ca=V;break}}}else Ca=S;fl(b,Ca,T-Ca|0);t=t+4|0}while(t>>>0<=G>>>0);if(!((h&8|0)==0&(E^1)))fl(b,13528,1);if(t>>>0<sa>>>0&(ya|0)>0){G=ya;T=t;while(1){q=kl(c[T>>2]|0,0,U)|0;if(q>>>0>m>>>0){Vn(m|0,48,q-n|0)|0;C=q;while(1){K=C+-1|0;if(K>>>0>m>>>0)C=K;else{Da=K;break}}}else Da=q;fl(b,Da,(G|0)<9?G:9);T=T+4|0;C=G+-9|0;if(!(T>>>0<sa>>>0&(G|0)>9)){Ea=C;break}else G=C}}else Ea=ya;ll(b,48,Ea+9|0,9,0)}else{G=ta?sa:ra+4|0;if(ra>>>0<G>>>0&(ya|0)>-1){T=m+9|0;U=(h&8|0)==0;t=T;E=0-n|0;C=m+8|0;S=ya;K=ra;while(1){y=kl(c[K>>2]|0,0,T)|0;if((y|0)==(T|0)){a[C>>0]=48;Fa=C}else Fa=y;do if((K|0)==(ra|0)){y=Fa+1|0;fl(b,Fa,1);if(U&(S|0)<1){Ga=y;break}fl(b,13528,1);Ga=y}else{if(Fa>>>0<=m>>>0){Ga=Fa;break}Vn(m|0,48,Fa+E|0)|0;y=Fa;while(1){J=y+-1|0;if(J>>>0>m>>>0)y=J;else{Ga=J;break}}}while(0);q=t-Ga|0;fl(b,Ga,(S|0)>(q|0)?q:S);y=S-q|0;K=K+4|0;if(!(K>>>0<G>>>0&(y|0)>-1)){Ha=y;break}else S=y}}else Ha=ya;ll(b,48,Ha+18|0,18,0);fl(b,za,p-za|0)}ll(b,32,f,A,h^8192);z=A}while(0);Pa=j;return ((z|0)<(f|0)?f:z)|0}function ol(a){a=+a;var b=0;g[h>>3]=a;b=c[h>>2]|0;K(c[h+4>>2]|0);return b|0}function pl(a,b){a=+a;b=b|0;return +(+ql(a,b))}function ql(a,b){a=+a;b=b|0;var d=0,e=0,f=0,i=0.0,j=0.0,k=0,l=0.0;g[h>>3]=a;d=c[h>>2]|0;e=c[h+4>>2]|0;f=On(d|0,e|0,52)|0;L()|0;switch(f&2047){case 0:{if(a!=0.0){i=+ql(a*18446744073709551616.0,b);j=i;k=(c[b>>2]|0)+-64|0}else{j=a;k=0}c[b>>2]=k;l=j;break}case 2047:{l=a;break}default:{c[b>>2]=(f&2047)+-1022;c[h>>2]=d;c[h+4>>2]=e&-2146435073|1071644672;l=+g[h>>3]}}return +l}function rl(b,d,e){b=b|0;d=d|0;e=e|0;var f=0;do if(b){if(d>>>0<128){a[b>>0]=d;f=1;break}e=(sl()|0)+188|0;if(!(c[c[e>>2]>>2]|0))if((d&-128|0)==57216){a[b>>0]=d;f=1;break}else{e=Qk()|0;c[e>>2]=84;f=-1;break}if(d>>>0<2048){a[b>>0]=d>>>6|192;a[b+1>>0]=d&63|128;f=2;break}if(d>>>0<55296|(d&-8192|0)==57344){a[b>>0]=d>>>12|224;a[b+1>>0]=d>>>6&63|128;a[b+2>>0]=d&63|128;f=3;break}if((d+-65536|0)>>>0<1048576){a[b>>0]=d>>>18|240;a[b+1>>0]=d>>>12&63|128;a[b+2>>0]=d>>>6&63|128;a[b+3>>0]=d&63|128;f=4;break}else{e=Qk()|0;c[e>>2]=84;f=-1;break}}else f=1;while(0);return f|0}function sl(){return _k()|0}function tl(b,d,e){b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0;f=e+16|0;g=c[f>>2]|0;if(!g)if(!(ul(e)|0)){h=c[f>>2]|0;i=5}else j=0;else{h=g;i=5}a:do if((i|0)==5){g=e+20|0;f=c[g>>2]|0;k=f;if((h-f|0)>>>0<d>>>0){j=Va[c[e+36>>2]&255](e,b,d)|0;break}b:do if((a[e+75>>0]|0)<0|(d|0)==0){l=0;m=b;n=d;o=k}else{f=d;while(1){p=f+-1|0;if((a[b+p>>0]|0)==10)break;if(!p){l=0;m=b;n=d;o=k;break b}else f=p}p=Va[c[e+36>>2]&255](e,b,f)|0;if(p>>>0<f>>>0){j=p;break a}l=f;m=b+f|0;n=d-f|0;o=c[g>>2]|0}while(0);Un(o|0,m|0,n|0)|0;c[g>>2]=(c[g>>2]|0)+n;j=l+n|0}while(0);return j|0}function ul(b){b=b|0;var d=0,e=0,f=0;d=b+74|0;e=a[d>>0]|0;a[d>>0]=e+255|e;e=c[b>>2]|0;if(!(e&8)){c[b+8>>2]=0;c[b+4>>2]=0;d=c[b+44>>2]|0;c[b+28>>2]=d;c[b+20>>2]=d;c[b+16>>2]=d+(c[b+48>>2]|0);f=0}else{c[b>>2]=e|32;f=-1}return f|0}function vl(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0;e=a+20|0;f=c[e>>2]|0;g=(c[a+16>>2]|0)-f|0;a=g>>>0>d>>>0?d:g;Un(f|0,b|0,a|0)|0;c[e>>2]=(c[e>>2]|0)+a;return d|0}function wl(){return _k()|0}function xl(b,e){b=b|0;e=e|0;var f=0,g=0,h=0,i=0,j=0;f=0;while(1){if((d[3072+f>>0]|0)==(b|0)){g=4;break}h=f+1|0;if((h|0)==87){i=87;g=5;break}else f=h}if((g|0)==4)if(!f)j=3168;else{i=f;g=5}if((g|0)==5){g=3168;f=i;while(1){i=g;do{b=i;i=i+1|0}while((a[b>>0]|0)!=0);f=f+-1|0;if(!f){j=i;break}else g=i}}return yl(j,c[e+20>>2]|0)|0}function yl(a,b){a=a|0;b=b|0;return zl(a,b)|0}function zl(a,b){a=a|0;b=b|0;var d=0;if(!b)d=0;else d=Al(c[b>>2]|0,c[b+4>>2]|0,a)|0;return ((d|0)==0?a:d)|0}function Al(b,d,e){b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0;f=(c[b>>2]|0)+1794895138|0;g=Bl(c[b+8>>2]|0,f)|0;h=Bl(c[b+12>>2]|0,f)|0;i=Bl(c[b+16>>2]|0,f)|0;a:do if((g>>>0<d>>>2>>>0?(j=d-(g<<2)|0,h>>>0<j>>>0&i>>>0<j>>>0):0)?((i|h)&3|0)==0:0){j=h>>>2;k=i>>>2;l=0;m=g;while(1){n=m>>>1;o=l+n|0;p=o<<1;q=p+j|0;r=Bl(c[b+(q<<2)>>2]|0,f)|0;s=Bl(c[b+(q+1<<2)>>2]|0,f)|0;if(!(s>>>0<d>>>0&r>>>0<(d-s|0)>>>0)){t=0;break a}if(a[b+(s+r)>>0]|0){t=0;break a}r=Cl(e,b+s|0)|0;if(!r)break;s=(r|0)<0;if((m|0)==1){t=0;break a}l=s?l:o;m=s?n:m-n|0}m=p+k|0;l=Bl(c[b+(m<<2)>>2]|0,f)|0;j=Bl(c[b+(m+1<<2)>>2]|0,f)|0;if(j>>>0<d>>>0&l>>>0<(d-j|0)>>>0)t=(a[b+(j+l)>>0]|0)==0?b+j|0:0;else t=0}else t=0;while(0);return t|0}function Bl(a,b){a=a|0;b=b|0;var c=0;c=Qn(a|0)|0;return ((b|0)==0?a:c)|0}function Cl(b,c){b=b|0;c=c|0;var d=0,e=0,f=0,g=0;d=a[b>>0]|0;e=a[c>>0]|0;if(d<<24>>24==0?1:d<<24>>24!=e<<24>>24){f=e;g=d}else{d=c;c=b;do{c=c+1|0;d=d+1|0;b=a[c>>0]|0;e=a[d>>0]|0}while(!(b<<24>>24==0?1:b<<24>>24!=e<<24>>24));f=e;g=b}return (g&255)-(f&255)|0}function Dl(b,e){b=b|0;e=e|0;var f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0;f=Pa;Pa=Pa+16|0;g=f;h=e&255;a[g>>0]=h;i=b+16|0;j=c[i>>2]|0;if(!j)if(!(ul(b)|0)){k=c[i>>2]|0;l=4}else m=-1;else{k=j;l=4}do if((l|0)==4){j=b+20|0;i=c[j>>2]|0;if(i>>>0<k>>>0?(n=e&255,(n|0)!=(a[b+75>>0]|0)):0){c[j>>2]=i+1;a[i>>0]=h;m=n;break}if((Va[c[b+36>>2]&255](b,g,1)|0)==1)m=d[g>>0]|0;else m=-1}while(0);Pa=f;return m|0}function El(e,h,i){e=e|0;h=h|0;i=i|0;var j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0,z=0,A=0,B=0,C=0,D=0,E=0,F=0,G=0,H=0,I=0,J=0,K=0,M=0,N=0,O=0,P=0,Q=0,R=0,S=0,T=0,U=0,V=0,W=0,X=0,Y=0,Z=0,_=0,$=0,aa=0,ba=0,ca=0,da=0,ea=0,fa=0,ga=0,ha=0,ia=0,ja=0,ka=0,la=0,ma=0,na=0,oa=0,pa=0,qa=0,ra=0,sa=0,ta=0,ua=0,va=0,wa=0,xa=0,ya=0,za=0,Aa=0,Ba=0,Ca=0,Da=0,Ea=0,Fa=0,Ga=0,Ha=0,Ia=0,Ja=0,Ka=0,La=0,Ma=0,Na=0,Oa=0,Qa=0,Ra=0,Sa=0.0,Ta=0,Ua=0,Va=0,Wa=0,Xa=0,Ya=0,Za=0;j=Pa;Pa=Pa+288|0;k=j+264|0;l=j;m=j+260|0;n=j+272|0;if((c[e+76>>2]|0)>-1)o=Uk(e)|0;else o=0;p=a[h>>0]|0;a:do if(p<<24>>24){q=e+4|0;r=e+100|0;s=e+108|0;t=e+8|0;u=l+10|0;v=l+33|0;w=l+46|0;x=l+94|0;y=k+4|0;z=h;A=0;B=0;C=0;D=p;E=0;b:while(1){c:do if(!(Fl(D&255)|0)){F=(a[z>>0]|0)==37;d:do if(F){G=z+1|0;H=a[G>>0]|0;e:do switch(H<<24>>24){case 37:{break d;break}case 42:{I=0;J=z+2|0;break}default:{if($k(H&255)|0?(a[z+2>>0]|0)==36:0){I=Il(i,(d[G>>0]|0)+-48|0)|0;J=z+3|0;break e}K=(c[i>>2]|0)+(4-1)&~(4-1);M=c[K>>2]|0;c[i>>2]=K+4;I=M;J=G}}while(0);if(!($k(d[J>>0]|0)|0)){N=0;O=J}else{G=0;H=J;while(1){M=(G*10|0)+-48+(d[H>>0]|0)|0;K=H+1|0;if(!($k(d[K>>0]|0)|0)){N=M;O=K;break}else{G=M;H=K}}}H=a[O>>0]|0;G=O+1|0;if(H<<24>>24==109){P=(I|0)!=0&1;Q=0;R=G;S=O+2|0;T=a[G>>0]|0;U=0}else{P=0;Q=C;R=O;S=G;T=H;U=E}switch(T<<24>>24){case 104:{H=(a[S>>0]|0)==104;V=H?-2:-1;W=H?R+2|0:S;break}case 108:{H=(a[S>>0]|0)==108;V=H?3:1;W=H?R+2|0:S;break}case 106:{V=3;W=S;break}case 116:case 122:{V=1;W=S;break}case 76:{V=2;W=S;break}case 110:case 112:case 67:case 83:case 91:case 99:case 115:case 88:case 71:case 70:case 69:case 65:case 103:case 102:case 101:case 97:case 120:case 117:case 111:case 105:case 100:{V=0;W=R;break}default:{X=Q;Y=U;Z=143;break b}}H=d[W>>0]|0;G=(H&47|0)==3;K=G?H|32:H;H=G?1:V;G=K&255;switch(G<<24>>24){case 99:{_=(N|0)>1?N:1;$=A;break}case 91:{_=N;$=A;break}case 110:{Jl(I,H,A,((A|0)<0)<<31>>31);aa=W;ba=B;ca=A;da=Q;ea=U;break c;break}default:{Gl(e,0);do{M=c[q>>2]|0;if(M>>>0<(c[r>>2]|0)>>>0){c[q>>2]=M+1;fa=d[M>>0]|0}else fa=Hl(e)|0}while((Fl(fa)|0)!=0);if(!(c[r>>2]|0))ga=c[q>>2]|0;else{M=(c[q>>2]|0)+-1|0;c[q>>2]=M;ga=M}_=N;$=(c[s>>2]|0)+A+ga-(c[t>>2]|0)|0}}Gl(e,_);M=c[q>>2]|0;ha=c[r>>2]|0;if(M>>>0<ha>>>0){c[q>>2]=M+1;ia=ha}else{if((Hl(e)|0)<0){X=Q;Y=U;Z=143;break b}ia=c[r>>2]|0}if(ia|0)c[q>>2]=(c[q>>2]|0)+-1;f:do switch(G<<24>>24){case 91:case 99:case 115:{ha=(K|0)==99;g:do if((K|16|0)==115){Vn(l|0,-1,257)|0;a[l>>0]=0;if((K|0)==115){a[v>>0]=0;b[u>>1]=0;b[u+2>>1]=0;a[u+4>>0]=0;ja=W}else ja=W}else{M=W+1|0;ka=(a[M>>0]|0)==94;la=ka&1;ma=ka?W+2|0:M;Vn(l|0,la|0,257)|0;a[l>>0]=0;switch(a[ma>>0]|0){case 45:{M=(la^1)&255;a[w>>0]=M;na=ma+1|0;oa=M;break}case 93:{M=(la^1)&255;a[x>>0]=M;na=ma+1|0;oa=M;break}default:{na=ma;oa=(la^1)&255}}la=na;while(1){ma=a[la>>0]|0;h:do switch(ma<<24>>24){case 0:{X=Q;Y=U;Z=143;break b;break}case 93:{ja=la;break g;break}case 45:{M=la+1|0;ka=a[M>>0]|0;switch(ka<<24>>24){case 93:case 0:{pa=la;qa=45;break h;break}default:{}}ra=a[la+-1>>0]|0;if((ra&255)<(ka&255)){sa=ra&255;do{sa=sa+1|0;a[l+sa>>0]=oa;ra=a[M>>0]|0}while(sa>>>0<(ra&255)>>>0);pa=M;qa=ra}else{pa=M;qa=ka}break}default:{pa=la;qa=ma}}while(0);a[l+((qa&255)+1)>>0]=oa;la=pa+1|0}}while(0);la=ha?_+1|0:31;ma=(H|0)==1;sa=(P|0)!=0;i:do if(ma){if(sa){ra=Hk(la<<2)|0;if(!ra){X=0;Y=0;Z=143;break b}else ta=ra}else ta=I;c[k>>2]=0;c[y>>2]=0;ra=la;ua=0;va=ta;j:while(1){wa=(va|0)==0;xa=ua;while(1){k:while(1){ya=c[q>>2]|0;if(ya>>>0<(c[r>>2]|0)>>>0){c[q>>2]=ya+1;za=d[ya>>0]|0}else za=Hl(e)|0;if(!(a[l+(za+1)>>0]|0))break j;a[n>>0]=za;switch(Kl(m,n,1,k)|0){case -1:{X=0;Y=va;Z=143;break b;break}case -2:break;default:break k}}if(wa)Aa=xa;else{c[va+(xa<<2)>>2]=c[m>>2];Aa=xa+1|0}if(sa&(Aa|0)==(ra|0))break;else xa=Aa}ra=ra<<1|1;wa=Jk(va,ra<<2)|0;if(!wa){X=0;Y=va;Z=143;break b}else{ua=Aa;va=wa}}if(!(Ll(k)|0)){X=0;Y=va;Z=143;break b}else{Ba=xa;Ca=0;Da=va;Ea=va}}else{if(sa){ua=Hk(la)|0;if(!ua){X=0;Y=0;Z=143;break b}ra=la;wa=0;ka=ua;while(1){ua=wa;do{M=c[q>>2]|0;if(M>>>0<(c[r>>2]|0)>>>0){c[q>>2]=M+1;Fa=d[M>>0]|0}else Fa=Hl(e)|0;if(!(a[l+(Fa+1)>>0]|0)){Ba=ua;Ca=ka;Da=0;Ea=0;break i}M=ua;ua=ua+1|0;a[ka+M>>0]=Fa}while((ua|0)!=(ra|0));ra=ra<<1|1;M=Jk(ka,ra)|0;if(!M){X=ka;Y=0;Z=143;break b}else{wa=ua;ka=M}}}if(!I)while(1){ka=c[q>>2]|0;if(ka>>>0<(c[r>>2]|0)>>>0){c[q>>2]=ka+1;Ga=d[ka>>0]|0}else Ga=Hl(e)|0;if(!(a[l+(Ga+1)>>0]|0)){Ba=0;Ca=0;Da=0;Ea=0;break i}}ka=0;while(1){wa=c[q>>2]|0;if(wa>>>0<(c[r>>2]|0)>>>0){c[q>>2]=wa+1;Ha=d[wa>>0]|0}else Ha=Hl(e)|0;if(!(a[l+(Ha+1)>>0]|0)){Ba=ka;Ca=I;Da=0;Ea=0;break i}a[I+ka>>0]=Ha;ka=ka+1|0}}while(0);if(!(c[r>>2]|0))Ia=c[q>>2]|0;else{la=(c[q>>2]|0)+-1|0;c[q>>2]=la;Ia=la}la=Ia-(c[t>>2]|0)+(c[s>>2]|0)|0;if(!la){Ja=Ca;Ka=P;La=B;Ma=Ea;break b}if(!((la|0)==(_|0)|ha^1)){Ja=Ca;Ka=P;La=B;Ma=Ea;break b}do if(sa)if(ma){c[I>>2]=Da;break}else{c[I>>2]=Ca;break}while(0);if(ha){Na=ja;Oa=Ca;Qa=Ea}else{if(Da|0)c[Da+(Ba<<2)>>2]=0;if(!Ca){Na=ja;Oa=0;Qa=Ea;break f}a[Ca+Ba>>0]=0;Na=ja;Oa=Ca;Qa=Ea}break}case 120:case 88:case 112:{Ra=16;Z=131;break}case 111:{Ra=8;Z=131;break}case 117:case 100:{Ra=10;Z=131;break}case 105:{Ra=0;Z=131;break}case 71:case 103:case 70:case 102:case 69:case 101:case 65:case 97:{Sa=+Nl(e,H,0);if((c[s>>2]|0)==((c[t>>2]|0)-(c[q>>2]|0)|0)){Ja=Q;Ka=P;La=B;Ma=U;break b}if(!I){Na=W;Oa=Q;Qa=U}else switch(H|0){case 0:{f[I>>2]=Sa;Na=W;Oa=Q;Qa=U;break f;break}case 1:{g[I>>3]=Sa;Na=W;Oa=Q;Qa=U;break f;break}case 2:{g[I>>3]=Sa;Na=W;Oa=Q;Qa=U;break f;break}default:{Na=W;Oa=Q;Qa=U;break f}}break}default:{Na=W;Oa=Q;Qa=U}}while(0);do if((Z|0)==131){Z=0;G=Ml(e,Ra,0,-1,-1)|0;ma=L()|0;if((c[s>>2]|0)==((c[t>>2]|0)-(c[q>>2]|0)|0)){Ja=Q;Ka=P;La=B;Ma=U;break b}if((I|0)!=0&(K|0)==112){c[I>>2]=G;Na=W;Oa=Q;Qa=U;break}else{Jl(I,H,G,ma);Na=W;Oa=Q;Qa=U;break}}while(0);aa=Na;ba=B+((I|0)!=0&1)|0;ca=(c[s>>2]|0)+$+(c[q>>2]|0)-(c[t>>2]|0)|0;da=Oa;ea=Qa;break c}while(0);H=z+(F&1)|0;Gl(e,0);K=c[q>>2]|0;if(K>>>0<(c[r>>2]|0)>>>0){c[q>>2]=K+1;Ta=d[K>>0]|0}else Ta=Hl(e)|0;if((Ta|0)!=(d[H>>0]|0)){Z=23;break b}aa=H;ba=B;ca=A+1|0;da=C;ea=E}else{H=z;while(1){K=H+1|0;if(!(Fl(d[K>>0]|0)|0))break;else H=K}Gl(e,0);do{F=c[q>>2]|0;if(F>>>0<(c[r>>2]|0)>>>0){c[q>>2]=F+1;Ua=d[F>>0]|0}else Ua=Hl(e)|0}while((Fl(Ua)|0)!=0);if(!(c[r>>2]|0))Va=c[q>>2]|0;else{F=(c[q>>2]|0)+-1|0;c[q>>2]=F;Va=F}aa=H;ba=B;ca=(c[s>>2]|0)+A+Va-(c[t>>2]|0)|0;da=C;ea=E}while(0);z=aa+1|0;D=a[z>>0]|0;if(!(D<<24>>24)){Wa=ba;break a}else{A=ca;B=ba;C=da;E=ea}}if((Z|0)==23){if(c[r>>2]|0)c[q>>2]=(c[q>>2]|0)+-1;if((B|0)!=0|(Ta|0)>-1){Wa=B;break}else{Xa=0;Ya=C;Za=E;Z=144}}else if((Z|0)==143)if(!B){Xa=P;Ya=X;Za=Y;Z=144}else{Ja=X;Ka=P;La=B;Ma=Y}if((Z|0)==144){Ja=Ya;Ka=Xa;La=-1;Ma=Za}if(!Ka)Wa=La;else{Ik(Ja);Ik(Ma);Wa=La}}else Wa=0;while(0);if(o|0)Yk(e);Pa=j;return Wa|0}function Fl(a){a=a|0;return ((a|0)==32|(a+-9|0)>>>0<5)&1|0}function Gl(a,b){a=a|0;b=b|0;var d=0,e=0,f=0;c[a+104>>2]=b;d=c[a+8>>2]|0;e=c[a+4>>2]|0;f=d-e|0;c[a+108>>2]=f;if((b|0)!=0&(f|0)>(b|0))c[a+100>>2]=e+b;else c[a+100>>2]=d;return}function Hl(b){b=b|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0;e=b+104|0;f=c[e>>2]|0;if((f|0)!=0?(c[b+108>>2]|0)>=(f|0):0)g=4;else{f=Vk(b)|0;if((f|0)>=0){h=c[e>>2]|0;e=c[b+8>>2]|0;if(h){i=c[b+4>>2]|0;j=h-(c[b+108>>2]|0)|0;h=e;if((e-i|0)<(j|0)){k=h;g=9}else{c[b+100>>2]=i+(j+-1);l=h}}else{k=e;g=9}if((g|0)==9){c[b+100>>2]=e;l=k}k=b+4|0;if(!l)m=c[k>>2]|0;else{e=c[k>>2]|0;k=b+108|0;c[k>>2]=l+1-e+(c[k>>2]|0);m=e}e=m+-1|0;if((f|0)==(d[e>>0]|0|0))n=f;else{a[e>>0]=f;n=f}}else g=4}if((g|0)==4){c[b+100>>2]=0;n=-1}return n|0}function Il(a,b){a=a|0;b=b|0;var d=0,e=0,f=0;d=Pa;Pa=Pa+16|0;e=d;c[e>>2]=c[a>>2];a=b;while(1){b=(c[e>>2]|0)+(4-1)&~(4-1);f=c[b>>2]|0;c[e>>2]=b+4;if(a>>>0>1)a=a+-1|0;else break}Pa=d;return f|0}function Jl(d,e,f,g){d=d|0;e=e|0;f=f|0;g=g|0;var h=0;a:do if(d|0)switch(e|0){case -2:{a[d>>0]=f;break a;break}case -1:{b[d>>1]=f;break a;break}case 0:{c[d>>2]=f;break a;break}case 1:{c[d>>2]=f;break a;break}case 3:{h=d;c[h>>2]=f;c[h+4>>2]=g;break a;break}default:break a}while(0);return}function Kl(b,e,f,g){b=b|0;e=e|0;f=f|0;g=g|0;var h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0,z=0;h=Pa;Pa=Pa+16|0;i=h;j=(g|0)==0?16412:g;g=c[j>>2]|0;a:do if(!e)if(!g)k=0;else l=19;else{m=(b|0)==0?i:b;if(!f)k=-2;else{if(!g){n=a[e>>0]|0;if(n<<24>>24>-1){c[m>>2]=n&255;k=n<<24>>24!=0&1;break}n=(Yl()|0)+188|0;o=a[e>>0]|0;if(!(c[c[n>>2]>>2]|0)){c[m>>2]=o<<24>>24&57343;k=1;break}n=(o&255)+-194|0;if(n>>>0>50){l=19;break}o=c[2352+(n<<2)>>2]|0;n=f+-1|0;if(!n)p=o;else{q=e+1|0;r=o;s=n;l=11}}else{q=e;r=g;s=f;l=11}b:do if((l|0)==11){n=d[q>>0]|0;o=n>>>3;if((o+-16|o+(r>>26))>>>0>7){l=19;break a}o=n+-128|r<<6;n=s+-1|0;if((o|0)<0){t=q;u=o;v=n;while(1){t=t+1|0;if(!v){p=u;break b}w=a[t>>0]|0;if((w&-64)<<24>>24!=-128){l=19;break a}x=(w&255)+-128|u<<6;w=v+-1|0;if((x|0)>=0){y=w;z=x;break}else{u=x;v=w}}}else{y=n;z=o}c[j>>2]=0;c[m>>2]=z;k=f-y|0;break a}while(0);c[j>>2]=p;k=-2}}while(0);if((l|0)==19){c[j>>2]=0;j=Qk()|0;c[j>>2]=84;k=-1}Pa=h;return k|0}function Ll(a){a=a|0;var b=0;if(!a)b=1;else b=(c[a>>2]|0)==0&1;return b|0}function Ml(b,e,f,g,h){b=b|0;e=e|0;f=f|0;g=g|0;h=h|0;var i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0,z=0,A=0,B=0,C=0,D=0,E=0,F=0,G=0,I=0,J=0,M=0,N=0,O=0,P=0,Q=0,R=0,S=0,T=0,U=0,V=0,W=0,X=0,Y=0,Z=0,_=0,$=0,aa=0,ba=0,ca=0,da=0,ea=0,fa=0,ga=0,ha=0,ia=0,ja=0,ka=0;a:do if(e>>>0>36){i=Qk()|0;c[i>>2]=22;j=0;k=0}else{i=b+4|0;l=b+100|0;do{m=c[i>>2]|0;if(m>>>0<(c[l>>2]|0)>>>0){c[i>>2]=m+1;n=d[m>>0]|0}else n=Hl(b)|0}while((Fl(n)|0)!=0);b:do switch(n|0){case 43:case 45:{m=((n|0)==45)<<31>>31;o=c[i>>2]|0;if(o>>>0<(c[l>>2]|0)>>>0){c[i>>2]=o+1;p=m;q=d[o>>0]|0;break b}else{p=m;q=Hl(b)|0;break b}break}default:{p=0;q=n}}while(0);m=(e|0)==0;do if((e|16|0)==16&(q|0)==48){o=c[i>>2]|0;if(o>>>0<(c[l>>2]|0)>>>0){c[i>>2]=o+1;r=d[o>>0]|0}else r=Hl(b)|0;if((r|32|0)!=120)if(m){s=r;t=8;u=47;break}else{v=r;w=e;u=32;break}o=c[i>>2]|0;if(o>>>0<(c[l>>2]|0)>>>0){c[i>>2]=o+1;x=d[o>>0]|0}else x=Hl(b)|0;if((d[5009+x>>0]|0)>15){o=(c[l>>2]|0)==0;if(!o)c[i>>2]=(c[i>>2]|0)+-1;if(!f){Gl(b,0);j=0;k=0;break a}if(o){j=0;k=0;break a}c[i>>2]=(c[i>>2]|0)+-1;j=0;k=0;break a}else{s=x;t=16;u=47}}else{o=m?10:e;if(o>>>0>(d[5009+q>>0]|0)>>>0){v=q;w=o;u=32}else{if(c[l>>2]|0)c[i>>2]=(c[i>>2]|0)+-1;Gl(b,0);o=Qk()|0;c[o>>2]=22;j=0;k=0;break a}}while(0);c:do if((u|0)==32)if((w|0)==10){m=v+-48|0;if(m>>>0<10){o=0;y=m;do{o=(o*10|0)+y|0;m=c[i>>2]|0;if(m>>>0<(c[l>>2]|0)>>>0){c[i>>2]=m+1;z=d[m>>0]|0}else z=Hl(b)|0;y=z+-48|0}while(y>>>0<10&o>>>0<429496729);if(y>>>0<10){m=z;A=o;B=0;C=y;while(1){D=Hn(A|0,B|0,10,0)|0;E=L()|0;F=((C|0)<0)<<31>>31;G=~F;if(E>>>0>G>>>0|(E|0)==(G|0)&D>>>0>~C>>>0){I=10;J=m;M=A;N=B;u=76;break c}A=In(D|0,E|0,C|0,F|0)|0;B=L()|0;F=c[i>>2]|0;if(F>>>0<(c[l>>2]|0)>>>0){c[i>>2]=F+1;O=d[F>>0]|0}else O=Hl(b)|0;C=O+-48|0;if(!(C>>>0<10&(B>>>0<429496729|(B|0)==429496729&A>>>0<2576980378)))break;else m=O}if(C>>>0>9){P=p;Q=B;R=A}else{I=10;J=O;M=A;N=B;u=76}}else{P=p;Q=0;R=o}}else{P=p;Q=0;R=0}}else{s=v;t=w;u=47}while(0);d:do if((u|0)==47){if(!(t+-1&t)){m=a[13512+((t*23|0)>>>5&7)>>0]|0;y=a[5009+s>>0]|0;F=y&255;if(t>>>0>F>>>0){E=0;D=F;do{E=D|E<<m;G=c[i>>2]|0;if(G>>>0<(c[l>>2]|0)>>>0){c[i>>2]=G+1;S=d[G>>0]|0}else S=Hl(b)|0;T=a[5009+S>>0]|0;D=T&255}while(E>>>0<134217728&t>>>0>D>>>0);U=S;V=D;W=0;X=E;Y=T}else{U=s;V=F;W=0;X=0;Y=y}o=On(-1,-1,m|0)|0;B=L()|0;if(t>>>0<=V>>>0|(B>>>0<W>>>0|(B|0)==(W|0)&o>>>0<X>>>0)){I=t;J=U;M=X;N=W;u=76;break}A=X;C=W;G=Y;while(1){Z=Pn(A|0,C|0,m|0)|0;_=L()|0;$=Z|G&255;Z=c[i>>2]|0;if(Z>>>0<(c[l>>2]|0)>>>0){c[i>>2]=Z+1;aa=d[Z>>0]|0}else aa=Hl(b)|0;G=a[5009+aa>>0]|0;if(t>>>0<=(G&255)>>>0|(_>>>0>B>>>0|(_|0)==(B|0)&$>>>0>o>>>0)){I=t;J=aa;M=$;N=_;u=76;break d}else{A=$;C=_}}}C=a[5009+s>>0]|0;A=C&255;if(t>>>0>A>>>0){o=0;B=A;do{o=B+(H(o,t)|0)|0;G=c[i>>2]|0;if(G>>>0<(c[l>>2]|0)>>>0){c[i>>2]=G+1;ba=d[G>>0]|0}else ba=Hl(b)|0;ca=a[5009+ba>>0]|0;B=ca&255}while(o>>>0<119304647&t>>>0>B>>>0);da=ba;ea=B;fa=ca;ga=o;ha=0}else{da=s;ea=A;fa=C;ga=0;ha=0}if(t>>>0>ea>>>0){G=Mn(-1,-1,t|0,0)|0;m=L()|0;y=da;F=ha;E=ga;D=fa;while(1){if(F>>>0>m>>>0|(F|0)==(m|0)&E>>>0>G>>>0){I=t;J=y;M=E;N=F;u=76;break d}_=Hn(E|0,F|0,t|0,0)|0;$=L()|0;Z=D&255;if($>>>0>4294967295|($|0)==-1&_>>>0>~Z>>>0){I=t;J=y;M=E;N=F;u=76;break d}ia=In(_|0,$|0,Z|0,0)|0;Z=L()|0;$=c[i>>2]|0;if($>>>0<(c[l>>2]|0)>>>0){c[i>>2]=$+1;ja=d[$>>0]|0}else ja=Hl(b)|0;D=a[5009+ja>>0]|0;if(t>>>0<=(D&255)>>>0){I=t;J=ja;M=ia;N=Z;u=76;break}else{y=ja;F=Z;E=ia}}}else{I=t;J=da;M=ga;N=ha;u=76}}while(0);if((u|0)==76)if(I>>>0>(d[5009+J>>0]|0)>>>0){do{E=c[i>>2]|0;if(E>>>0<(c[l>>2]|0)>>>0){c[i>>2]=E+1;ka=d[E>>0]|0}else ka=Hl(b)|0}while(I>>>0>(d[5009+ka>>0]|0)>>>0);E=Qk()|0;c[E>>2]=34;P=(g&1|0)==0&0==0?p:0;Q=h;R=g}else{P=p;Q=N;R=M}if(c[l>>2]|0)c[i>>2]=(c[i>>2]|0)+-1;if(!(Q>>>0<h>>>0|(Q|0)==(h|0)&R>>>0<g>>>0)){if(!((g&1|0)!=0|0!=0|(P|0)!=0)){E=Qk()|0;c[E>>2]=34;E=In(g|0,h|0,-1,-1)|0;j=L()|0;k=E;break}if(Q>>>0>h>>>0|(Q|0)==(h|0)&R>>>0>g>>>0){E=Qk()|0;c[E>>2]=34;j=h;k=g;break}}E=((P|0)<0)<<31>>31;F=Jn(R^P|0,Q^E|0,P|0,E|0)|0;j=L()|0;k=F}while(0);K(j|0);return k|0}function Nl(b,e,f){b=b|0;e=e|0;f=f|0;var g=0,h=0,i=0,j=0.0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,t=0,u=0,v=0,w=0,x=0,y=0,z=0,A=0,B=0,C=0,D=0;switch(e|0){case 0:{g=-149;h=24;i=4;break}case 1:{g=-1074;h=53;i=4;break}case 2:{g=-1074;h=53;i=4;break}default:j=0.0}a:do if((i|0)==4){e=b+4|0;k=b+100|0;do{l=c[e>>2]|0;if(l>>>0<(c[k>>2]|0)>>>0){c[e>>2]=l+1;m=d[l>>0]|0}else m=Hl(b)|0}while((Fl(m)|0)!=0);b:do switch(m|0){case 43:case 45:{l=1-(((m|0)==45&1)<<1)|0;n=c[e>>2]|0;if(n>>>0<(c[k>>2]|0)>>>0){c[e>>2]=n+1;o=d[n>>0]|0;p=l;break b}else{o=Hl(b)|0;p=l;break b}break}default:{o=m;p=1}}while(0);l=0;n=o;while(1){if((n|32|0)!=(a[13499+l>>0]|0)){q=n;t=l;break}do if(l>>>0<7){u=c[e>>2]|0;if(u>>>0<(c[k>>2]|0)>>>0){c[e>>2]=u+1;v=d[u>>0]|0;break}else{v=Hl(b)|0;break}}else v=n;while(0);l=l+1|0;if(l>>>0>=8){q=v;t=8;break}else n=v}c:do switch(t&2147483647|0){case 8:break;case 3:{i=23;break}default:{n=(f|0)!=0;if(n&t>>>0>3)if((t|0)==8)break c;else{i=23;break c}d:do if(!t){l=0;u=q;while(1){if((u|32|0)!=(a[13508+l>>0]|0)){w=l;x=u;break d}do if(l>>>0<2){y=c[e>>2]|0;if(y>>>0<(c[k>>2]|0)>>>0){c[e>>2]=y+1;z=d[y>>0]|0;break}else{z=Hl(b)|0;break}}else z=u;while(0);l=l+1|0;if(l>>>0>=3){w=3;x=z;break}else u=z}}else{w=t;x=q}while(0);switch(w|0){case 3:{u=c[e>>2]|0;if(u>>>0<(c[k>>2]|0)>>>0){c[e>>2]=u+1;A=d[u>>0]|0}else A=Hl(b)|0;if((A|0)!=40){if(!(c[k>>2]|0)){j=r;break a}c[e>>2]=(c[e>>2]|0)+-1;j=r;break a}u=1;while(1){l=c[e>>2]|0;if(l>>>0<(c[k>>2]|0)>>>0){c[e>>2]=l+1;B=d[l>>0]|0}else B=Hl(b)|0;if(!((B+-48|0)>>>0<10|(B+-65|0)>>>0<26)?!((B|0)==95|(B+-97|0)>>>0<26):0)break;u=u+1|0}if((B|0)==41){j=r;break a}l=(c[k>>2]|0)==0;if(!l)c[e>>2]=(c[e>>2]|0)+-1;if(!n){y=Qk()|0;c[y>>2]=22;Gl(b,0);j=0.0;break a}if(!u){j=r;break a}y=u;while(1){y=y+-1|0;if(!l)c[e>>2]=(c[e>>2]|0)+-1;if(!y){j=r;break a}}break}case 0:{if((x|0)==48){y=c[e>>2]|0;if(y>>>0<(c[k>>2]|0)>>>0){c[e>>2]=y+1;C=d[y>>0]|0}else C=Hl(b)|0;if((C|32|0)==120){j=+Ol(b,h,g,p,f);break a}if(!(c[k>>2]|0))D=48;else{c[e>>2]=(c[e>>2]|0)+-1;D=48}}else D=x;j=+Pl(b,D,h,g,p,f);break a;break}default:{if(c[k>>2]|0)c[e>>2]=(c[e>>2]|0)+-1;y=Qk()|0;c[y>>2]=22;Gl(b,0);j=0.0;break a}}}}while(0);if((i|0)==23){y=(c[k>>2]|0)==0;if(!y)c[e>>2]=(c[e>>2]|0)+-1;if((f|0)!=0&t>>>0>3){l=t;do{if(!y)c[e>>2]=(c[e>>2]|0)+-1;l=l+-1|0}while(l>>>0>3)}}j=+(p|0)*s}while(0);return +j}function Ol(a,b,e,f,g){a=a|0;b=b|0;e=e|0;f=f|0;g=g|0;var h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0.0,x=0.0,y=0,z=0,A=0,B=0.0,C=0.0,D=0,E=0,F=0,G=0,H=0,I=0,J=0.0,K=0,M=0.0,N=0.0,O=0,P=0,Q=0.0,R=0,S=0,T=0,U=0.0,V=0,W=0,X=0,Y=0,Z=0,_=0,$=0.0,aa=0,ba=0.0;h=a+4|0;i=c[h>>2]|0;j=a+100|0;if(i>>>0<(c[j>>2]|0)>>>0){c[h>>2]=i+1;k=d[i>>0]|0}else k=Hl(a)|0;i=k;k=0;a:while(1){switch(i|0){case 46:{l=10;break a;break}case 48:break;default:{m=0;n=i;o=k;p=0;q=0;break a}}r=c[h>>2]|0;if(r>>>0<(c[j>>2]|0)>>>0){c[h>>2]=r+1;s=d[r>>0]|0}else s=Hl(a)|0;i=s;k=1}if((l|0)==10){s=c[h>>2]|0;if(s>>>0<(c[j>>2]|0)>>>0){c[h>>2]=s+1;t=d[s>>0]|0}else t=Hl(a)|0;if((t|0)==48){s=0;i=0;while(1){r=c[h>>2]|0;if(r>>>0<(c[j>>2]|0)>>>0){c[h>>2]=r+1;u=d[r>>0]|0}else u=Hl(a)|0;r=In(s|0,i|0,-1,-1)|0;v=L()|0;if((u|0)==48){s=r;i=v}else{m=1;n=u;o=1;p=r;q=v;break}}}else{m=1;n=t;o=k;p=0;q=0}}k=0;w=1.0;x=0.0;t=0;u=m;m=n;n=o;o=0;i=0;s=p;p=q;while(1){q=m+-48|0;v=m|32;if(q>>>0>=10){r=(m|0)==46;if(!(r|(v+-97|0)>>>0<6)){y=m;break}if(r)if(!u){z=1;A=k;B=w;C=x;D=t;E=n;F=i;G=o;H=i;I=o}else{y=46;break}else l=24}else l=24;if((l|0)==24){l=0;r=(m|0)>57?v+-87|0:q;do if(!((o|0)<0|(o|0)==0&i>>>0<8))if((o|0)<0|(o|0)==0&i>>>0<14){J=w*.0625;K=k;M=J;N=x+J*+(r|0);O=t;break}else{q=(k|0)!=0|(r|0)==0;K=q?k:1;M=w;N=q?x:x+w*.5;O=t;break}else{K=k;M=w;N=x;O=r+(t<<4)|0}while(0);r=In(i|0,o|0,1,0)|0;z=u;A=K;B=M;C=N;D=O;E=1;F=s;G=p;H=r;I=L()|0}r=c[h>>2]|0;if(r>>>0<(c[j>>2]|0)>>>0){c[h>>2]=r+1;P=d[r>>0]|0}else P=Hl(a)|0;k=A;w=B;x=C;t=D;u=z;m=P;n=E;o=I;i=H;s=F;p=G}do if(!n){G=(c[j>>2]|0)==0;if(!G)c[h>>2]=(c[h>>2]|0)+-1;if(g){if(!G?(c[h>>2]=(c[h>>2]|0)+-1,!((u|0)==0|G)):0)c[h>>2]=(c[h>>2]|0)+-1}else Gl(a,0);Q=+(f|0)*0.0}else{G=(u|0)==0;F=G?i:s;H=G?o:p;if((o|0)<0|(o|0)==0&i>>>0<8){G=t;I=i;E=o;while(1){P=G<<4;m=I;I=In(I|0,E|0,1,0)|0;z=E;E=L()|0;if(!((z|0)<0|(z|0)==0&m>>>0<7)){R=P;break}else G=P}}else R=t;if((y|32|0)==112){G=Ql(a,g)|0;E=L()|0;if((G|0)==0&(E|0)==-2147483648){if(!g){Gl(a,0);Q=0.0;break}if(!(c[j>>2]|0)){S=0;T=0}else{c[h>>2]=(c[h>>2]|0)+-1;S=0;T=0}}else{S=G;T=E}}else if(!(c[j>>2]|0)){S=0;T=0}else{c[h>>2]=(c[h>>2]|0)+-1;S=0;T=0}E=Pn(F|0,H|0,2)|0;G=In(E|0,L()|0,-32,-1)|0;E=In(G|0,L()|0,S|0,T|0)|0;G=L()|0;if(!R){Q=+(f|0)*0.0;break}I=0-e|0;P=((I|0)<0)<<31>>31;if((G|0)>(P|0)|(G|0)==(P|0)&E>>>0>I>>>0){I=Qk()|0;c[I>>2]=34;Q=+(f|0)*1797693134862315708145274.0e284*1797693134862315708145274.0e284;break}I=e+-106|0;P=((I|0)<0)<<31>>31;if((G|0)<(P|0)|(G|0)==(P|0)&E>>>0<I>>>0){I=Qk()|0;c[I>>2]=34;Q=+(f|0)*2.2250738585072014e-308*2.2250738585072014e-308;break}if((R|0)>-1){C=x;I=R;P=E;m=G;while(1){z=!(C>=.5);D=I<<1|(z^1)&1;B=C+(z?C:C+-1.0);z=In(P|0,m|0,-1,-1)|0;A=L()|0;if((D|0)>-1){C=B;I=D;P=z;m=A}else{U=B;V=D;W=z;X=A;break}}}else{U=x;V=R;W=E;X=G}m=((b|0)<0)<<31>>31;P=Jn(32,0,e|0,((e|0)<0)<<31>>31|0)|0;I=In(P|0,L()|0,W|0,X|0)|0;P=L()|0;if((P|0)<(m|0)|(P|0)==(m|0)&I>>>0<b>>>0)if((I|0)>0){Y=I;l=65}else{Z=0;_=84;l=67}else{Y=b;l=65}if((l|0)==65)if((Y|0)<53){Z=Y;_=84-Y|0;l=67}else{$=0.0;aa=Y;ba=+(f|0)}if((l|0)==67){C=+(f|0);$=+Sl(+Rl(1.0,_),C);aa=Z;ba=C}I=(V&1|0)==0&(U!=0.0&(aa|0)<32);C=(I?0.0:U)*ba+($+ba*+((V+(I&1)|0)>>>0))-$;if(!(C!=0.0)){I=Qk()|0;c[I>>2]=34}Q=+Ul(C,W)}while(0);return +Q}function Pl(a,b,e,f,g,h){a=a|0;b=b|0;e=e|0;f=f|0;g=g|0;h=h|0;var i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,v=0,w=0,x=0,y=0,z=0,A=0,B=0,C=0,D=0,E=0,F=0,G=0,I=0,J=0,K=0,M=0,N=0,O=0,P=0,Q=0,R=0,S=0,T=0,U=0,V=0,W=0,X=0,Y=0,Z=0,_=0,$=0,aa=0,ba=0,ca=0,da=0,ea=0,fa=0,ga=0,ha=0,ia=0,ja=0,ka=0,la=0,ma=0,na=0,oa=0,pa=0,qa=0,ra=0,sa=0,ta=0,ua=0,va=0,wa=0,xa=0,ya=0,za=0.0,Aa=0,Ba=0,Ca=0,Da=0,Ea=0,Fa=0,Ga=0,Ha=0,Ia=0,Ja=0,Ka=0,La=0,Ma=0,Na=0,Oa=0,Qa=0,Ra=0,Sa=0,Ta=0,Ua=0,Va=0,Wa=0,Xa=0,Ya=0,Za=0,_a=0,$a=0,ab=0,bb=0,cb=0,db=0,eb=0.0,fb=0,gb=0.0,hb=0.0,ib=0.0,jb=0.0,kb=0.0,lb=0.0,mb=0.0,nb=0.0,ob=0.0,pb=0.0,qb=0;i=Pa;Pa=Pa+512|0;j=i;k=f+e|0;l=0-k|0;m=a+4|0;n=a+100|0;o=b;b=0;a:while(1){switch(o|0){case 46:{p=7;break a;break}case 48:break;default:{q=0;r=o;s=b;t=0;v=0;break a}}w=c[m>>2]|0;if(w>>>0<(c[n>>2]|0)>>>0){c[m>>2]=w+1;x=d[w>>0]|0}else x=Hl(a)|0;o=x;b=1}if((p|0)==7){x=c[m>>2]|0;if(x>>>0<(c[n>>2]|0)>>>0){c[m>>2]=x+1;y=d[x>>0]|0}else y=Hl(a)|0;if((y|0)==48){x=0;o=0;while(1){w=In(x|0,o|0,-1,-1)|0;z=L()|0;A=c[m>>2]|0;if(A>>>0<(c[n>>2]|0)>>>0){c[m>>2]=A+1;B=d[A>>0]|0}else B=Hl(a)|0;if((B|0)==48){x=w;o=z}else{q=1;r=B;s=1;t=w;v=z;break}}}else{q=1;r=y;s=b;t=0;v=0}}c[j>>2]=0;b=r+-48|0;y=(r|0)==46;b:do if(y|b>>>0<10){B=j+496|0;o=0;x=0;z=0;w=q;A=s;C=r;D=y;E=b;F=t;G=v;I=0;J=0;c:while(1){do if(D)if(!w){K=o;M=x;N=1;O=z;P=A;Q=I;R=J;S=I;T=J}else break c;else{U=In(I|0,J|0,1,0)|0;V=L()|0;W=(C|0)!=48;if((x|0)>=125){if(!W){K=o;M=x;N=w;O=z;P=A;Q=F;R=G;S=U;T=V;break}c[B>>2]=c[B>>2]|1;K=o;M=x;N=w;O=z;P=A;Q=F;R=G;S=U;T=V;break}X=j+(x<<2)|0;if(!o)Y=E;else Y=C+-48+((c[X>>2]|0)*10|0)|0;c[X>>2]=Y;X=o+1|0;Z=(X|0)==9;K=Z?0:X;M=x+(Z&1)|0;N=w;O=W?U:z;P=1;Q=F;R=G;S=U;T=V}while(0);V=c[m>>2]|0;if(V>>>0<(c[n>>2]|0)>>>0){c[m>>2]=V+1;_=d[V>>0]|0}else _=Hl(a)|0;E=_+-48|0;D=(_|0)==46;if(!(D|E>>>0<10)){$=K;aa=M;ba=O;ca=N;da=_;ea=P;fa=Q;ga=S;ha=R;ia=T;p=31;break b}else{o=K;x=M;z=O;w=N;A=P;C=_;F=Q;G=R;I=S;J=T}}ja=o;ka=x;la=z;ma=I;na=J;oa=F;pa=G;qa=(A|0)!=0;p=39}else{$=0;aa=0;ba=0;ca=q;da=r;ea=s;fa=t;ga=0;ha=v;ia=0;p=31}while(0);do if((p|0)==31){v=(ca|0)==0;t=v?ga:fa;s=v?ia:ha;v=(ea|0)!=0;if(!(v&(da|32|0)==101))if((da|0)>-1){ja=$;ka=aa;la=ba;ma=ga;na=ia;oa=t;pa=s;qa=v;p=39;break}else{ra=$;sa=aa;ta=ba;ua=ga;va=ia;wa=v;xa=t;ya=s;p=41;break}v=Ql(a,h)|0;r=L()|0;if((v|0)==0&(r|0)==-2147483648){if(!h){Gl(a,0);za=0.0;break}if(!(c[n>>2]|0)){Aa=0;Ba=0}else{c[m>>2]=(c[m>>2]|0)+-1;Aa=0;Ba=0}}else{Aa=v;Ba=r}r=In(Aa|0,Ba|0,t|0,s|0)|0;Ca=$;Da=aa;Ea=ba;Fa=r;Ga=ga;Ha=L()|0;Ia=ia;p=43}while(0);if((p|0)==39)if(c[n>>2]|0){c[m>>2]=(c[m>>2]|0)+-1;if(qa){Ca=ja;Da=ka;Ea=la;Fa=oa;Ga=ma;Ha=pa;Ia=na;p=43}else p=42}else{ra=ja;sa=ka;ta=la;ua=ma;va=na;wa=qa;xa=oa;ya=pa;p=41}if((p|0)==41)if(wa){Ca=ra;Da=sa;Ea=ta;Fa=xa;Ga=ua;Ha=ya;Ia=va;p=43}else p=42;do if((p|0)==42){va=Qk()|0;c[va>>2]=22;Gl(a,0);za=0.0}else if((p|0)==43){va=c[j>>2]|0;if(!va){za=+(g|0)*0.0;break}if(((Ia|0)<0|(Ia|0)==0&Ga>>>0<10)&((Fa|0)==(Ga|0)&(Ha|0)==(Ia|0))?(e|0)>30|(va>>>e|0)==0:0){za=+(g|0)*+(va>>>0);break}va=(f|0)/-2|0;ya=((va|0)<0)<<31>>31;if((Ha|0)>(ya|0)|(Ha|0)==(ya|0)&Fa>>>0>va>>>0){va=Qk()|0;c[va>>2]=34;za=+(g|0)*1797693134862315708145274.0e284*1797693134862315708145274.0e284;break}va=f+-106|0;ya=((va|0)<0)<<31>>31;if((Ha|0)<(ya|0)|(Ha|0)==(ya|0)&Fa>>>0<va>>>0){va=Qk()|0;c[va>>2]=34;za=+(g|0)*2.2250738585072014e-308*2.2250738585072014e-308;break}if(!Ca)Ja=Da;else{if((Ca|0)<9){va=j+(Da<<2)|0;ya=Ca;ua=c[va>>2]|0;while(1){ua=ua*10|0;if((ya|0)>=8)break;else ya=ya+1|0}c[va>>2]=ua}Ja=Da+1|0}if((Ea|0)<9?(Ea|0)<=(Fa|0)&(Fa|0)<18:0){if((Fa|0)==9){za=+(g|0)*+((c[j>>2]|0)>>>0);break}if((Fa|0)<9){za=+(g|0)*+((c[j>>2]|0)>>>0)/+(c[4976+(8-Fa<<2)>>2]|0);break}ya=e+27+(H(Fa,-3)|0)|0;A=c[j>>2]|0;if((ya|0)>30|(A>>>ya|0)==0){za=+(g|0)*+(A>>>0)*+(c[4976+(Fa+-10<<2)>>2]|0);break}}A=(Fa|0)%9|0;if(!A){Ka=Ja;La=0;Ma=Fa}else{ya=(Fa|0)>-1?A:A+9|0;A=c[4976+(8-ya<<2)>>2]|0;if(Ja){G=1e9/(A|0)|0;F=0;J=0;I=Fa;z=0;do{x=j+(z<<2)|0;o=c[x>>2]|0;xa=(o>>>0)/(A>>>0)|0;ta=o-(H(xa,A)|0)|0;o=xa+F|0;c[x>>2]=o;F=H(G,ta)|0;ta=(z|0)==(J|0)&(o|0)==0;I=ta?I+-9|0:I;J=ta?J+1&127:J;z=z+1|0}while((z|0)!=(Ja|0));if(!F){Na=J;Oa=Ja;Qa=I}else{c[j+(Ja<<2)>>2]=F;Na=J;Oa=Ja+1|0;Qa=I}}else{Na=0;Oa=0;Qa=Fa}Ka=Oa;La=Na;Ma=9-ya+Qa|0}z=0;G=Ka;A=La;ua=Ma;d:while(1){va=(ua|0)<18;ta=(ua|0)==18;o=j+(A<<2)|0;Ra=z;Sa=G;while(1){if(!va){if(!ta){Ta=ua;break d}if((c[o>>2]|0)>>>0>=9007199){Ta=18;break d}}x=0;Ua=Sa;xa=Sa+127|0;while(1){sa=xa&127;ra=j+(sa<<2)|0;wa=Pn(c[ra>>2]|0,0,29)|0;pa=In(wa|0,L()|0,x|0,0)|0;wa=L()|0;if(wa>>>0>0|(wa|0)==0&pa>>>0>1e9){oa=Mn(pa|0,wa|0,1e9,0)|0;qa=Hn(oa|0,L()|0,1e9,0)|0;na=Jn(pa|0,wa|0,qa|0,L()|0)|0;L()|0;Va=oa;Wa=na}else{Va=0;Wa=pa}c[ra>>2]=Wa;ra=(sa|0)==(A|0);Xa=(sa|0)!=(Ua+127&127|0)|ra?Ua:(Wa|0)==0?sa:Ua;if(ra)break;else{x=Va;Ua=Xa;xa=sa+-1|0}}Ya=Ra+-29|0;if(!Va){Ra=Ya;Sa=Ua}else break}o=A+127&127;ta=Xa+127&127;va=j+((Xa+126&127)<<2)|0;if((o|0)==(Xa|0)){c[va>>2]=c[va>>2]|c[j+(ta<<2)>>2];Za=ta}else Za=Ua;c[j+(o<<2)>>2]=Va;z=Ya;G=Za;A=o;ua=ua+9|0}ua=Ra;G=A;z=Ta;ya=Sa;e:while(1){I=ya+1&127;J=j+((ya+127&127)<<2)|0;F=ua;o=G;ta=z;while(1){va=(ta|0)==18;xa=(ta|0)>27?9:1;_a=F;$a=o;while(1){x=0;while(1){sa=x+$a&127;if((sa|0)==(ya|0)){p=92;break}ra=c[j+(sa<<2)>>2]|0;sa=c[6256+(x<<2)>>2]|0;if(ra>>>0<sa>>>0){p=92;break}if(ra>>>0>sa>>>0)break;if((x+1|0)>>>0<2)x=1;else{p=92;break}}if((p|0)==92?(p=0,va):0)break e;ab=xa+_a|0;if(($a|0)==(ya|0)){_a=ab;$a=ya}else break}va=(1<<xa)+-1|0;x=1e9>>>xa;bb=0;cb=$a;db=ta;sa=$a;do{ra=j+(sa<<2)|0;pa=c[ra>>2]|0;na=(pa>>>xa)+bb|0;c[ra>>2]=na;bb=H(pa&va,x)|0;pa=(sa|0)==(cb|0)&(na|0)==0;db=pa?db+-9|0:db;cb=pa?cb+1&127:cb;sa=sa+1&127}while((sa|0)!=(ya|0));if(bb|0){if((I|0)!=(cb|0))break;c[J>>2]=c[J>>2]|1}F=ab;o=cb;ta=db}c[j+(ya<<2)>>2]=bb;ua=ab;G=cb;z=db;ya=I}eb=0.0;z=ya;G=0;while(1){ua=G+$a&127;A=z+1&127;if((ua|0)==(z|0)){c[j+(A+-1<<2)>>2]=0;fb=A}else fb=z;eb=eb*1.0e9+ +((c[j+(ua<<2)>>2]|0)>>>0);G=G+1|0;if((G|0)==2)break;else z=fb}gb=+(g|0);hb=eb*gb;z=_a+53|0;G=z-f|0;ya=(G|0)<(e|0);ua=ya?((G|0)>0?G:0):e;if((ua|0)<53){ib=+Sl(+Rl(1.0,105-ua|0),hb);jb=+Tl(hb,+Rl(1.0,53-ua|0));kb=ib;lb=jb;mb=ib+(hb-jb)}else{kb=0.0;lb=0.0;mb=hb}A=$a+2&127;if((A|0)!=(fb|0)){ta=c[j+(A<<2)>>2]|0;do if(ta>>>0>=5e8){if((ta|0)!=5e8){nb=gb*.75+lb;break}if(($a+3&127|0)==(fb|0)){nb=gb*.5+lb;break}else{nb=gb*.75+lb;break}}else{if((ta|0)==0?($a+3&127|0)==(fb|0):0){nb=lb;break}nb=gb*.25+lb}while(0);if((53-ua|0)>1?!(+Tl(nb,1.0)!=0.0):0)ob=nb+1.0;else ob=nb}else ob=lb;gb=mb+ob-kb;do if((z&2147483647|0)>(-2-k|0)){ta=!(+u(+gb)>=9007199254740992.0);A=_a+((ta^1)&1)|0;eb=ta?gb:gb*.5;if((A+50|0)<=(l|0)?!(ob!=0.0&(ya&((ua|0)!=(G|0)|ta))):0){pb=eb;qb=A;break}ta=Qk()|0;c[ta>>2]=34;pb=eb;qb=A}else{pb=gb;qb=_a}while(0);za=+Ul(pb,qb)}while(0);Pa=i;return +za}function Ql(a,b){a=a|0;b=b|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0;e=a+4|0;f=c[e>>2]|0;g=a+100|0;if(f>>>0<(c[g>>2]|0)>>>0){c[e>>2]=f+1;h=d[f>>0]|0}else h=Hl(a)|0;switch(h|0){case 43:case 45:{f=(h|0)==45&1;i=c[e>>2]|0;if(i>>>0<(c[g>>2]|0)>>>0){c[e>>2]=i+1;j=d[i>>0]|0}else j=Hl(a)|0;i=j+-48|0;if((b|0)!=0&i>>>0>9)if(!(c[g>>2]|0)){k=0;l=-2147483648}else{c[e>>2]=(c[e>>2]|0)+-1;m=14}else{n=f;o=j;p=i;m=12}break}default:{n=0;o=h;p=h+-48|0;m=12}}if((m|0)==12)if(p>>>0>9)m=14;else{p=0;h=o;while(1){p=h+-48+(p*10|0)|0;o=c[e>>2]|0;if(o>>>0<(c[g>>2]|0)>>>0){c[e>>2]=o+1;q=d[o>>0]|0}else q=Hl(a)|0;r=q+-48|0;if(!(r>>>0<10&(p|0)<214748364))break;else h=q}h=((p|0)<0)<<31>>31;if(r>>>0<10){r=q;q=p;o=h;while(1){i=Hn(q|0,o|0,10,0)|0;j=L()|0;f=In(r|0,((r|0)<0)<<31>>31|0,-48,-1)|0;q=In(f|0,L()|0,i|0,j|0)|0;o=L()|0;j=c[e>>2]|0;if(j>>>0<(c[g>>2]|0)>>>0){c[e>>2]=j+1;s=d[j>>0]|0}else s=Hl(a)|0;t=s+-48|0;if(!(t>>>0<10&((o|0)<21474836|(o|0)==21474836&q>>>0<2061584302)))break;else r=s}if(t>>>0<10){do{t=c[e>>2]|0;if(t>>>0<(c[g>>2]|0)>>>0){c[e>>2]=t+1;u=d[t>>0]|0}else u=Hl(a)|0}while((u+-48|0)>>>0<10);v=q;w=o}else{v=q;w=o}}else{v=p;w=h}if(c[g>>2]|0)c[e>>2]=(c[e>>2]|0)+-1;h=(n|0)==0;n=Jn(0,0,v|0,w|0)|0;p=L()|0;k=h?v:n;l=h?w:p}if((m|0)==14)if(!(c[g>>2]|0)){k=0;l=-2147483648}else{c[e>>2]=(c[e>>2]|0)+-1;k=0;l=-2147483648}K(l|0);return k|0}function Rl(a,b){a=+a;b=b|0;var d=0.0,e=0,f=0,i=0.0,j=0;if((b|0)<=1023)if((b|0)<-1022){d=a*2.2250738585072014e-308;e=(b|0)<-2044;f=b+2044|0;i=e?d*2.2250738585072014e-308:d;j=e?((f|0)>-1022?f:-1022):b+1022|0}else{i=a;j=b}else{d=a*8988465674311579538646525.0e283;f=(b|0)>2046;e=b+-2046|0;i=f?d*8988465674311579538646525.0e283:d;j=f?((e|0)<1023?e:1023):b+-1023|0}b=Pn(j+1023|0,0,52)|0;j=L()|0;c[h>>2]=b;c[h+4>>2]=j;return +(i*+g[h>>3])}function Sl(a,b){a=+a;b=+b;return +(+Xl(a,b))}function Tl(a,b){a=+a;b=+b;return +(+Vl(a,b))}function Ul(a,b){a=+a;b=b|0;return +(+Rl(a,b))}function Vl(a,b){a=+a;b=+b;var d=0,e=0,f=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0,z=0,A=0,B=0,C=0,D=0,E=0,F=0,G=0,H=0,I=0,J=0,K=0,M=0,N=0,O=0,P=0,Q=0,R=0,S=0,T=0,U=0.0,V=0,W=0,X=0,Y=0,Z=0,_=0,$=0,aa=0,ba=0.0;g[h>>3]=a;d=c[h>>2]|0;e=c[h+4>>2]|0;g[h>>3]=b;f=c[h>>2]|0;i=c[h+4>>2]|0;j=On(d|0,e|0,52)|0;L()|0;k=j&2047;j=On(f|0,i|0,52)|0;L()|0;l=j&2047;j=e&-2147483648;m=Pn(f|0,i|0,1)|0;n=L()|0;a:do if(!((m|0)==0&(n|0)==0)?(o=Wl(b)|0,p=(L()|0)&2147483647,!((k|0)==2047|(p>>>0>2146435072|(p|0)==2146435072&o>>>0>0))):0){o=Pn(d|0,e|0,1)|0;p=L()|0;if(!(p>>>0>n>>>0|(p|0)==(n|0)&o>>>0>m>>>0))return +((o|0)==(m|0)&(p|0)==(n|0)?a*0.0:a);if(!k){p=Pn(d|0,e|0,12)|0;o=L()|0;if((o|0)>-1|(o|0)==-1&p>>>0>4294967295){q=0;r=p;p=o;while(1){o=q+-1|0;r=Pn(r|0,p|0,1)|0;p=L()|0;if(!((p|0)>-1|(p|0)==-1&r>>>0>4294967295)){s=o;break}else q=o}}else s=0;q=Pn(d|0,e|0,1-s|0)|0;t=s;u=q;v=L()|0}else{t=k;u=d;v=e&1048575|1048576}if(!l){q=Pn(f|0,i|0,12)|0;r=L()|0;if((r|0)>-1|(r|0)==-1&q>>>0>4294967295){p=0;o=q;q=r;while(1){r=p+-1|0;o=Pn(o|0,q|0,1)|0;q=L()|0;if(!((q|0)>-1|(q|0)==-1&o>>>0>4294967295)){w=r;break}else p=r}}else w=0;p=Pn(f|0,i|0,1-w|0)|0;x=w;y=p;z=L()|0}else{x=l;y=f;z=i&1048575|1048576}p=Jn(u|0,v|0,y|0,z|0)|0;o=L()|0;q=(o|0)>-1|(o|0)==-1&p>>>0>4294967295;b:do if((t|0)>(x|0)){r=t;A=o;B=q;C=u;D=v;E=p;while(1){if(B)if((E|0)==0&(A|0)==0)break;else{F=E;G=A}else{F=C;G=D}H=Pn(F|0,G|0,1)|0;I=L()|0;J=r+-1|0;K=Jn(H|0,I|0,y|0,z|0)|0;M=L()|0;N=(M|0)>-1|(M|0)==-1&K>>>0>4294967295;if((J|0)>(x|0)){r=J;A=M;B=N;C=H;D=I;E=K}else{O=J;P=N;Q=K;R=M;S=H;T=I;break b}}U=a*0.0;break a}else{O=t;P=q;Q=p;R=o;S=u;T=v}while(0);if(P)if((Q|0)==0&(R|0)==0){U=a*0.0;break}else{V=R;W=Q}else{V=T;W=S}if(V>>>0<1048576|(V|0)==1048576&W>>>0<0){o=O;p=W;q=V;while(1){E=Pn(p|0,q|0,1)|0;D=L()|0;C=o+-1|0;if(D>>>0<1048576|(D|0)==1048576&E>>>0<0){o=C;p=E;q=D}else{X=C;Y=E;Z=D;break}}}else{X=O;Y=W;Z=V}if((X|0)>0){q=In(Y|0,Z|0,0,-1048576)|0;p=L()|0;o=Pn(X|0,0,52)|0;_=p|(L()|0);$=q|o}else{o=On(Y|0,Z|0,1-X|0)|0;_=L()|0;$=o}c[h>>2]=$;c[h+4>>2]=_|j;U=+g[h>>3]}else aa=3;while(0);if((aa|0)==3){ba=a*b;U=ba/ba}return +U}function Wl(a){a=+a;var b=0;g[h>>3]=a;b=c[h>>2]|0;K(c[h+4>>2]|0);return b|0}function Xl(a,b){a=+a;b=+b;var d=0,e=0,f=0;g[h>>3]=a;d=c[h>>2]|0;e=c[h+4>>2]|0;g[h>>3]=b;f=c[h+4>>2]&-2147483648|e&2147483647;c[h>>2]=d;c[h+4>>2]=f;return +(+g[h>>3])}function Yl(){return _k()|0}function Zl(b,e,f){b=b|0;e=e|0;f=f|0;var g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0;if((c[f+76>>2]|0)>-1)g=Uk(f)|0;else g=0;h=e+-1|0;if((e|0)<2){e=f+74|0;i=a[e>>0]|0;a[e>>0]=i+255|i;if(g|0)Yk(f);if(!h){a[b>>0]=0;j=b}else j=0}else{a:do if(h){i=f+4|0;e=f+8|0;k=h;l=b;while(1){m=c[i>>2]|0;n=m;o=(c[e>>2]|0)-n|0;p=Xk(m,10,o)|0;q=(p|0)==0;r=q?o:1-n+p|0;p=r>>>0<k>>>0?r:k;Un(l|0,m|0,p|0)|0;m=(c[i>>2]|0)+p|0;c[i>>2]=m;s=l+p|0;r=k-p|0;if(!(q&(r|0)!=0)){t=s;u=17;break a}if(m>>>0>=(c[e>>2]|0)>>>0){q=Vk(f)|0;if((q|0)<0)break;else v=q}else{c[i>>2]=m+1;v=d[m>>0]|0}m=s+1|0;a[s>>0]=v;k=r+-1|0;if((v&255|0)==10|(k|0)==0){t=m;u=17;break a}else l=m}if((s|0)!=(b|0)?(c[f>>2]&16|0)!=0:0){t=s;u=17}else w=0}else{t=b;u=17}while(0);if((u|0)==17)if(!b)w=0;else{a[t>>0]=0;w=b}if(!g)j=w;else{Yk(f);j=w}}return j|0}function _l(b){b=b|0;var d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0;d=b;a:do if(!(d&3)){e=b;f=5}else{g=b;h=d;while(1){if(!(a[g>>0]|0)){i=h;break a}j=g+1|0;h=j;if(!(h&3)){e=j;f=5;break}else g=j}}while(0);if((f|0)==5){f=e;while(1){k=c[f>>2]|0;if(!((k&-2139062144^-2139062144)&k+-16843009))f=f+4|0;else break}if(!((k&255)<<24>>24))l=f;else{k=f;while(1){f=k+1|0;if(!(a[f>>0]|0)){l=f;break}else k=f}}i=l}return i-d|0}function $l(b,d){b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0;if((c[d+76>>2]|0)>=0?(Uk(d)|0)!=0:0){e=b&255;f=b&255;if((f|0)!=(a[d+75>>0]|0)?(g=d+20|0,h=c[g>>2]|0,h>>>0<(c[d+16>>2]|0)>>>0):0){c[g>>2]=h+1;a[h>>0]=e;i=f}else i=Dl(d,b)|0;Yk(d);j=i}else k=3;do if((k|0)==3){i=b&255;f=b&255;if((f|0)!=(a[d+75>>0]|0)?(e=d+20|0,h=c[e>>2]|0,h>>>0<(c[d+16>>2]|0)>>>0):0){c[e>>2]=h+1;a[h>>0]=i;j=f;break}j=Dl(d,b)|0}while(0);return j|0}function am(b,d,e,f){b=b|0;d=d|0;e=e|0;f=f|0;f=b+75|0;a[f>>0]=-1;switch(e|0){case 2:{c[b+48>>2]=0;break}case 1:{a[f>>0]=10;break}default:{}}c[b>>2]=c[b>>2]|64;return 0}function bm(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0;if((c[a+76>>2]|0)>-1)b=Uk(a)|0;else b=0;cm(a);d=(c[a>>2]&1|0)!=0;if(!d){e=dm()|0;f=c[a+52>>2]|0;g=a+56|0;if(f|0)c[f+56>>2]=c[g>>2];h=c[g>>2]|0;if(h|0)c[h+52>>2]=f;if((c[e>>2]|0)==(a|0))c[e>>2]=h;em()}h=fm(a)|0;e=Ta[c[a+12>>2]&511](a)|0|h;h=c[a+92>>2]|0;if(h|0)Ik(h);if(d){if(b|0)Yk(a)}else Ik(a);return e|0}function cm(a){a=a|0;var b=0,d=0,e=0;if(c[a+68>>2]|0){b=c[a+116>>2]|0;d=a+112|0;if(b|0)c[b+112>>2]=c[d>>2];a=c[d>>2]|0;if(!a)e=(hm()|0)+232|0;else e=a+116|0;c[e>>2]=b}return}function dm(){U(16416);return 16424}function em(){ja(16416);return}function fm(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0,i=0;do if(a){if((c[a+76>>2]|0)<=-1){b=gm(a)|0;break}d=(Uk(a)|0)==0;e=gm(a)|0;if(d)b=e;else{Yk(a);b=e}}else{if(!(c[1400]|0))f=0;else f=fm(c[1400]|0)|0;e=dm()|0;d=c[e>>2]|0;if(!d)g=f;else{e=d;d=f;while(1){if((c[e+76>>2]|0)>-1)h=Uk(e)|0;else h=0;if((c[e+20>>2]|0)>>>0>(c[e+28>>2]|0)>>>0)i=gm(e)|0|d;else i=d;if(h|0)Yk(e);e=c[e+56>>2]|0;if(!e){g=i;break}else d=i}}em();b=g}while(0);return b|0}function gm(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0,i=0;b=a+20|0;d=a+28|0;if((c[b>>2]|0)>>>0>(c[d>>2]|0)>>>0?(Va[c[a+36>>2]&255](a,0,0)|0,(c[b>>2]|0)==0):0)e=-1;else{f=a+4|0;g=c[f>>2]|0;h=a+8|0;i=c[h>>2]|0;if(g>>>0<i>>>0)Va[c[a+40>>2]&255](a,g-i|0,1)|0;c[a+16>>2]=0;c[d>>2]=0;c[b>>2]=0;c[h>>2]=0;c[f>>2]=0;e=0}return e|0}function hm(){return _k()|0}function im(a){a=a|0;var b=0,d=0,e=0;if(!(c[a>>2]&128))b=1;else b=(c[a+20>>2]|0)>>>0>(c[a+28>>2]|0)>>>0?2:1;d=Va[c[a+40>>2]&255](a,0,b)|0;if((d|0)<0)e=d;else e=d-(c[a+8>>2]|0)+(c[a+4>>2]|0)+(c[a+20>>2]|0)-(c[a+28>>2]|0)|0;return e|0}function jm(a){a=a|0;var b=0,d=0,e=0;if((c[a+76>>2]|0)>-1){b=(Uk(a)|0)==0;d=im(a)|0;if(b)e=d;else e=d}else e=im(a)|0;return e|0}function km(a){a=a|0;return jm(a)|0}function lm(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0;if((d|0)==1)e=b-(c[a+8>>2]|0)+(c[a+4>>2]|0)|0;else e=b;b=a+20|0;f=a+28|0;if((c[b>>2]|0)>>>0>(c[f>>2]|0)>>>0?(Va[c[a+36>>2]&255](a,0,0)|0,(c[b>>2]|0)==0):0)g=-1;else{c[a+16>>2]=0;c[f>>2]=0;c[b>>2]=0;if((Va[c[a+40>>2]&255](a,e,d)|0)<0)g=-1;else{c[a+8>>2]=0;c[a+4>>2]=0;c[a>>2]=c[a>>2]&-17;g=0}}return g|0}function mm(a){a=a|0;var b=0,d=0,e=0;if((c[a+76>>2]|0)>-1){b=(Uk(a)|0)==0;d=(c[a>>2]|0)>>>5&1;if(b)e=d;else e=d}else e=(c[a>>2]|0)>>>5&1;return e|0}function nm(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0;if((c[a+76>>2]|0)>-1){e=(Uk(a)|0)==0;f=lm(a,b,d)|0;if(e)g=f;else{Yk(a);g=f}}else g=lm(a,b,d)|0;return g|0}function om(a,b,c){a=a|0;b=b|0;c=c|0;return nm(a,b,c)|0}function pm(b){b=b|0;var d=0,e=0,f=0,g=0;d=Pa;Pa=Pa+16|0;e=d;T(0,e|0)|0;f=0;g=(c[e+4>>2]|0)*65537^(e>>>4)+b;while(1){a[b+f>>0]=(g&15)+65|g<<1&32;f=f+1|0;if((f|0)==6)break;else g=g>>>5}Pa=d;return b|0}function qm(b,d){b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0;e=Pa;Pa=Pa+48|0;f=e+32|0;g=e+16|0;h=e;if(rm(13521,a[d>>0]|0)|0){i=sm(d)|0;c[h>>2]=b;c[h+4>>2]=i|32768;c[h+8>>2]=438;b=Pk(ea(5,h|0)|0)|0;if((b|0)>=0){if(i&524288|0){c[g>>2]=b;c[g+4>>2]=2;c[g+8>>2]=1;aa(221,g|0)|0}g=tm(b,d)|0;if(!g){c[f>>2]=b;ga(6,f|0)|0;j=0}else j=g}else j=0}else{g=Qk()|0;c[g>>2]=22;j=0}Pa=e;return j|0}function rm(b,c){b=b|0;c=c|0;var d=0;d=vm(b,c)|0;return ((a[d>>0]|0)==(c&255)<<24>>24?d:0)|0}function sm(b){b=b|0;var c=0,d=0,e=0,f=0;c=(rm(b,43)|0)==0;d=a[b>>0]|0;e=c?d<<24>>24!=114&1:2;c=(rm(b,120)|0)==0;f=c?e:e|128;e=(rm(b,101)|0)==0;b=e?f:f|524288;f=d<<24>>24==114?b:b|64;b=d<<24>>24==119?f|512:f;return (d<<24>>24==97?b|1024:b)|0}function tm(b,d){b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0;e=Pa;Pa=Pa+64|0;f=e+40|0;g=e+24|0;h=e+16|0;i=e;j=e+56|0;if(rm(13521,a[d>>0]|0)|0){k=Hk(1156)|0;if(!k)l=0;else{Vn(k|0,0,124)|0;if(!(rm(d,43)|0))c[k>>2]=(a[d>>0]|0)==114?8:4;if(rm(d,101)|0){c[i>>2]=b;c[i+4>>2]=2;c[i+8>>2]=1;aa(221,i|0)|0}if((a[d>>0]|0)==97){c[h>>2]=b;c[h+4>>2]=3;d=aa(221,h|0)|0;if(!(d&1024)){c[g>>2]=b;c[g+4>>2]=4;c[g+8>>2]=d|1024;aa(221,g|0)|0}g=c[k>>2]|128;c[k>>2]=g;m=g}else m=c[k>>2]|0;c[k+60>>2]=b;c[k+44>>2]=k+132;c[k+48>>2]=1024;g=k+75|0;a[g>>0]=-1;if((m&8|0)==0?(c[f>>2]=b,c[f+4>>2]=21523,c[f+8>>2]=j,(fa(54,f|0)|0)==0):0)a[g>>0]=10;c[k+32>>2]=131;c[k+36>>2]=132;c[k+40>>2]=130;c[k+12>>2]=271;if(!(c[4088]|0))c[k+76>>2]=-1;um(k)|0;l=k}}else{k=Qk()|0;c[k>>2]=22;l=0}Pa=e;return l|0}function um(a){a=a|0;var b=0,d=0;b=dm()|0;c[a+56>>2]=c[b>>2];d=c[b>>2]|0;if(d|0)c[d+52>>2]=a;c[b>>2]=a;em();return a|0}function vm(b,d){b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0;e=d&255;a:do if(!e)f=b+(_l(b)|0)|0;else{if(!(b&3))g=b;else{h=d&255;i=b;while(1){j=a[i>>0]|0;if(j<<24>>24==0?1:j<<24>>24==h<<24>>24){f=i;break a}j=i+1|0;if(!(j&3)){g=j;break}else i=j}}i=H(e,16843009)|0;h=c[g>>2]|0;b:do if(!((h&-2139062144^-2139062144)&h+-16843009)){j=g;k=h;while(1){l=k^i;if((l&-2139062144^-2139062144)&l+-16843009|0){m=j;break b}l=j+4|0;k=c[l>>2]|0;if((k&-2139062144^-2139062144)&k+-16843009|0){m=l;break}else j=l}}else m=g;while(0);i=d&255;h=m;while(1){j=a[h>>0]|0;if(j<<24>>24==0?1:j<<24>>24==i<<24>>24){f=h;break}else h=h+1|0}}while(0);return f|0}function wm(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0;e=Pa;Pa=Pa+16|0;f=e;c[f>>2]=d;d=El(a,b,f)|0;Pa=e;return d|0}function xm(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0;e=Pa;Pa=Pa+32|0;f=e+16|0;g=e;h=sm(b)|0;if((c[d+76>>2]|0)>-1)i=Uk(d)|0;else i=0;fm(d)|0;do if(!a){j=d+60|0;if(h&524288|0){c[g>>2]=c[j>>2];c[g+4>>2]=2;c[g+8>>2]=1;aa(221,g|0)|0}c[f>>2]=c[j>>2];c[f+4>>2]=4;c[f+8>>2]=h&-524481;if((Pk(aa(221,f|0)|0)|0)<0)k=15;else k=12}else{j=qm(a,b)|0;if(!j)k=15;else{l=j+60|0;m=c[l>>2]|0;n=c[d+60>>2]|0;if((m|0)!=(n|0)){if((ym(m,n,h&524288)|0)<0){bm(j)|0;k=15;break}}else c[l>>2]=-1;c[d>>2]=c[d>>2]&1|c[j>>2];c[d+32>>2]=c[j+32>>2];c[d+36>>2]=c[j+36>>2];c[d+40>>2]=c[j+40>>2];c[d+12>>2]=c[j+12>>2];bm(j)|0;k=12}}while(0);if((k|0)==12)if(!i)o=d;else{Yk(d);o=d}else if((k|0)==15){bm(d)|0;o=0}Pa=e;return o|0}function ym(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0;e=Pa;Pa=Pa+48|0;f=e+24|0;g=e+16|0;h=e;a:do if((a|0)!=(b|0)){i=(d&524288|0)!=0;b:do if(i)while(1){c[h>>2]=a;c[h+4>>2]=b;c[h+8>>2]=d;j=ba(330,h|0)|0;switch(j|0){case -38:{break b;break}case -16:break;default:{k=j;break a}}}while(0);do{c[g>>2]=a;c[g+4>>2]=b;l=ha(63,g|0)|0}while((l|0)==-16);if(i){c[f>>2]=b;c[f+4>>2]=2;c[f+8>>2]=1;aa(221,f|0)|0;k=l}else k=l}else k=-22;while(0);l=Pk(k)|0;Pa=e;return l|0}function zm(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0,i=0,j=0;f=H(d,b)|0;g=(b|0)==0?0:d;if((c[e+76>>2]|0)>-1){d=(Uk(e)|0)==0;h=tl(a,f,e)|0;if(d)i=h;else{Yk(e);i=h}}else i=tl(a,f,e)|0;if((i|0)==(f|0))j=g;else j=(i>>>0)/(b>>>0)|0;return j|0}function Am(a){a=a|0;var b=0,e=0,f=0,g=0,h=0;if((c[a+76>>2]|0)>=0?(Uk(a)|0)!=0:0){b=a+4|0;e=c[b>>2]|0;if(e>>>0<(c[a+8>>2]|0)>>>0){c[b>>2]=e+1;f=d[e>>0]|0}else f=Vk(a)|0;g=f}else h=3;do if((h|0)==3){f=a+4|0;e=c[f>>2]|0;if(e>>>0<(c[a+8>>2]|0)>>>0){c[f>>2]=e+1;g=d[e>>0]|0;break}else{g=Vk(a)|0;break}}while(0);return g|0}function Bm(d){d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0;e=Pa;Pa=Pa+112|0;f=e+24|0;g=e;h=e+32|0;c[g>>2]=c[1320];c[g+4>>2]=c[1321];c[g+8>>2]=c[1322];c[g+12>>2]=c[1323];b[g+16>>1]=b[2648]|0;a[g+18>>0]=a[5298]|0;i=g+12|0;j=g;k=h;l=0;while(1){pm(i)|0;m=h;n=m+76|0;do{c[m>>2]=0;m=m+4|0}while((m|0)<(n|0));c[f>>2]=j;c[f+4>>2]=k;l=l+1|0;if(($(196,f|0)|0)==-2){o=4;break}if(l>>>0>=100){p=0;break}}if((o|0)==4){o=(d|0)==0?15664:d;Cm(o,g)|0;p=o}Pa=e;return p|0}function Cm(a,b){a=a|0;b=b|0;Dm(a,b)|0;return a|0}function Dm(b,d){b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0;e=d;a:do if(!((e^b)&3)){if(!(e&3)){f=d;g=b}else{h=d;i=b;while(1){j=a[h>>0]|0;a[i>>0]=j;if(!(j<<24>>24)){k=i;break a}j=h+1|0;l=i+1|0;if(!(j&3)){f=j;g=l;break}else{h=j;i=l}}}i=c[f>>2]|0;if(!((i&-2139062144^-2139062144)&i+-16843009)){h=g;l=f;j=i;while(1){i=l+4|0;m=h+4|0;c[h>>2]=j;j=c[i>>2]|0;if((j&-2139062144^-2139062144)&j+-16843009|0){n=i;o=m;break}else{h=m;l=i}}}else{n=f;o=g}p=n;q=o;r=10}else{p=d;q=b;r=10}while(0);if((r|0)==10){r=a[p>>0]|0;a[q>>0]=r;if(!(r<<24>>24))k=q;else{r=q;q=p;while(1){q=q+1|0;p=r+1|0;b=a[q>>0]|0;a[p>>0]=b;if(!(b<<24>>24)){k=p;break}else r=p}}}return k|0}function Em(a,b,c){a=a|0;b=b|0;c=c|0;return cl(a,2147483647,b,c)|0}function Fm(){var a=0,b=0,d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0;a=Pa;Pa=Pa+64|0;b=a+48|0;d=a+40|0;e=a+24|0;f=a;c[f>>2]=c[1328];c[f+4>>2]=c[1329];c[f+8>>2]=c[1330];c[f+12>>2]=c[1331];c[f+16>>2]=c[1332];g=f+13|0;h=f;f=0;while(1){pm(g)|0;c[e>>2]=h;c[e+4>>2]=32962;c[e+8>>2]=384;i=Pk(ea(5,e|0)|0)|0;f=f+1|0;if((i|0)>-1){j=4;break}if(f>>>0>=100){k=0;break}}if((j|0)==4){c[d>>2]=h;X(10,d|0)|0;d=tm(i,13525)|0;if(!d){c[b>>2]=i;ga(6,b|0)|0;k=0}else k=d}Pa=a;return k|0}function Gm(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0;e=Pa;Pa=Pa+16|0;f=e;c[f>>2]=d;d=Em(a,b,f)|0;Pa=e;return d|0}function Hm(a){a=a|0;var b=0,d=0,e=0,f=0,g=0;b=Pa;Pa=Pa+16|0;d=b+8|0;e=b;f=a;c[e>>2]=f;a=X(10,e|0)|0;if((a|0)==-21){c[d>>2]=f;g=da(40,d|0)|0}else g=a;a=Pk(g)|0;Pa=b;return a|0}function Im(a){a=a|0;var b=0,d=0,e=0;if((c[a+76>>2]|0)>-1){b=(Uk(a)|0)==0;d=(c[a>>2]|0)>>>4&1;if(b)e=d;else e=d}else e=(c[a>>2]|0)>>>4&1;return e|0}function Jm(a){a=a|0;var b=0;if((c[a+76>>2]|0)>-1){b=(Uk(a)|0)==0;c[a>>2]=c[a>>2]&-49;if(!b)Yk(a)}else c[a>>2]=c[a>>2]&-49;return}function Km(a,b){a=a|0;b=b|0;var d=0,e=0;d=Pa;Pa=Pa+16|0;e=d;c[e>>2]=a;c[e+4>>2]=b;b=Pk(ca(38,e|0)|0)|0;Pa=d;return b|0}
function Lm(b,d,e,f){b=b|0;d=d|0;e=e|0;f=f|0;var g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0;g=H(e,d)|0;h=(d|0)==0?0:e;if((c[f+76>>2]|0)>-1)i=Uk(f)|0;else i=0;e=f+74|0;j=a[e>>0]|0;a[e>>0]=j+255|j;j=f+4|0;e=c[j>>2]|0;k=(c[f+8>>2]|0)-e|0;if((k|0)>0){l=k>>>0<g>>>0?k:g;Un(b|0,e|0,l|0)|0;c[j>>2]=(c[j>>2]|0)+l;m=g-l|0;n=b+l|0}else{m=g;n=b}a:do if(!m)o=13;else{b=f+32|0;l=n;j=m;while(1){if(Zk(f)|0)break;e=Va[c[b>>2]&255](f,l,j)|0;if((e+1|0)>>>0<2)break;k=j-e|0;if(!k){o=13;break a}else{l=l+e|0;j=k}}if(i|0)Yk(f);p=((g-j|0)>>>0)/(d>>>0)|0}while(0);if((o|0)==13)if(!i)p=h;else{Yk(f);p=h}return p|0}function Mm(b,c,d){b=b|0;c=c|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0;a:do if(!d)e=0;else{f=b;g=d;h=c;while(1){i=a[f>>0]|0;j=a[h>>0]|0;if(i<<24>>24!=j<<24>>24)break;g=g+-1|0;if(!g){e=0;break a}else{f=f+1|0;h=h+1|0}}e=(i&255)-(j&255)|0}while(0);return e|0}function Nm(a){a=a|0;var b=0;b=(Om(a)|0)==0;return (b?a:a|32)|0}function Om(a){a=a|0;return (a+-65|0)>>>0<26|0}function Pm(b,c){b=b|0;c=c|0;var d=0;d=b+(Qm(b,c)|0)|0;return ((a[d>>0]|0)==0?0:d)|0}function Qm(b,d){b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0;e=Pa;Pa=Pa+32|0;f=e;g=a[d>>0]|0;a:do if(g<<24>>24!=0?(a[d+1>>0]|0)!=0:0){Vn(f|0,0,32)|0;h=a[d>>0]|0;if(h<<24>>24){i=d;j=h;do{h=j&255;k=f+(h>>>5<<2)|0;c[k>>2]=c[k>>2]|1<<(h&31);i=i+1|0;j=a[i>>0]|0}while(j<<24>>24!=0)}j=a[b>>0]|0;if(!(j<<24>>24))l=b;else{i=b;h=j;while(1){j=h&255;if(c[f+(j>>>5<<2)>>2]&1<<(j&31)|0){l=i;break a}j=i+1|0;h=a[j>>0]|0;if(!(h<<24>>24)){l=j;break}else i=j}}}else m=3;while(0);if((m|0)==3)l=vm(b,g<<24>>24)|0;Pa=e;return l-b|0}function Rm(b,d){b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0;e=Pa;Pa=Pa+32|0;f=e;c[f>>2]=0;c[f+4>>2]=0;c[f+8>>2]=0;c[f+12>>2]=0;c[f+16>>2]=0;c[f+20>>2]=0;c[f+24>>2]=0;c[f+28>>2]=0;g=a[d>>0]|0;do if(!(g<<24>>24))h=0;else{if(!(a[d+1>>0]|0)){i=b;while(1)if((a[i>>0]|0)==g<<24>>24)i=i+1|0;else break;h=i-b|0;break}j=d;k=g;do{l=k&255;m=f+(l>>>5<<2)|0;c[m>>2]=c[m>>2]|1<<(l&31);j=j+1|0;k=a[j>>0]|0}while(k<<24>>24!=0);k=a[b>>0]|0;a:do if(!(k<<24>>24))n=b;else{j=b;i=k;while(1){l=i&255;if(!(c[f+(l>>>5<<2)>>2]&1<<(l&31))){n=j;break a}l=j+1|0;i=a[l>>0]|0;if(!(i<<24>>24)){n=l;break}else j=l}}while(0);h=n-b|0}while(0);Pa=e;return h|0}function Sm(a,b){a=a|0;b=b|0;return Tm(a,b,(_l(a)|0)+1|0)|0}function Tm(b,c,d){b=b|0;c=c|0;d=d|0;var e=0,f=0,g=0;a:do if(!d)e=0;else{f=c&255;g=d;while(1){g=g+-1|0;if((a[b+g>>0]|0)==f<<24>>24)break;if(!g){e=0;break a}}e=b+g|0}while(0);return e|0}function Um(b,c){b=b|0;c=c|0;var d=0,e=0,f=0;d=a[c>>0]|0;do if(d<<24>>24){e=rm(b,d<<24>>24)|0;if(e)if(a[c+1>>0]|0)if(a[e+1>>0]|0){if(!(a[c+2>>0]|0)){f=Vm(e,c)|0;break}if(a[e+2>>0]|0){if(!(a[c+3>>0]|0)){f=Wm(e,c)|0;break}if(a[e+3>>0]|0)if(!(a[c+4>>0]|0)){f=Xm(e,c)|0;break}else{f=Ym(e,c)|0;break}else f=0}else f=0}else f=0;else f=e;else f=0}else f=b;while(0);return f|0}function Vm(b,c){b=b|0;c=c|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0;e=(d[c>>0]|0)<<8|(d[c+1>>0]|0);c=b+1|0;f=a[c>>0]|0;a:do if(!(f<<24>>24))g=0;else{h=(d[b>>0]|0)<<8|f&255;i=c;while(1){j=h&65535;if((j|0)==(e|0))break;k=i+1|0;l=a[k>>0]|0;if(!(l<<24>>24)){g=0;break a}else{h=j<<8|l&255;i=k}}g=i+-1|0}while(0);return g|0}function Wm(b,c){b=b|0;c=c|0;var e=0,f=0,g=0,h=0,i=0,j=0;e=(d[c+1>>0]|0)<<16|(d[c>>0]|0)<<24|(d[c+2>>0]|0)<<8;c=b+2|0;f=a[c>>0]|0;g=(d[b+1>>0]|0)<<16|(d[b>>0]|0)<<24|(f&255)<<8;b=f<<24>>24==0;if((g|0)==(e|0)|b){h=c;i=b}else{b=c;c=g;while(1){g=b+1|0;f=a[g>>0]|0;c=(c|f&255)<<8;j=f<<24>>24==0;if((c|0)==(e|0)|j){h=g;i=j;break}else b=g}}return (i?0:h+-2|0)|0}function Xm(b,c){b=b|0;c=c|0;var e=0,f=0,g=0,h=0,i=0,j=0;e=(d[c+1>>0]|0)<<16|(d[c>>0]|0)<<24|(d[c+2>>0]|0)<<8|(d[c+3>>0]|0);c=b+3|0;f=a[c>>0]|0;g=(d[b+1>>0]|0)<<16|(d[b>>0]|0)<<24|(d[b+2>>0]|0)<<8|f&255;b=f<<24>>24==0;if((g|0)==(e|0)|b){h=c;i=b}else{b=c;c=g;while(1){g=b+1|0;f=a[g>>0]|0;c=c<<8|f&255;j=f<<24>>24==0;if((c|0)==(e|0)|j){h=g;i=j;break}else b=g}}return (i?0:h+-3|0)|0}function Ym(b,e){b=b|0;e=e|0;var f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0,z=0,A=0,B=0,C=0,D=0,E=0,F=0,G=0,H=0,I=0,J=0,K=0,L=0,M=0;f=Pa;Pa=Pa+1056|0;g=f+1024|0;h=f;c[g>>2]=0;c[g+4>>2]=0;c[g+8>>2]=0;c[g+12>>2]=0;c[g+16>>2]=0;c[g+20>>2]=0;c[g+24>>2]=0;c[g+28>>2]=0;i=a[e>>0]|0;a:do if(i<<24>>24){j=0;k=i;do{if(!(a[b+j>>0]|0)){l=0;break a}m=k&255;n=g+(m>>>5<<2)|0;c[n>>2]=c[n>>2]|1<<(m&31);j=j+1|0;c[h+(m<<2)>>2]=j;k=a[e+j>>0]|0}while(k<<24>>24!=0);k=j>>>0>1;if(k){m=1;n=1;o=0;p=-1;q=1;while(1){r=a[e+(n+p)>>0]|0;s=a[e+q>>0]|0;do if(r<<24>>24==s<<24>>24)if((n|0)==(m|0)){t=m;u=1;v=m+o|0;w=p;break}else{t=m;u=n+1|0;v=o;w=p;break}else if((r&255)>(s&255)){t=q-p|0;u=1;v=q;w=p;break}else{t=1;u=1;v=o+1|0;w=o;break}while(0);q=u+v|0;if(q>>>0>=j>>>0)break;else{m=t;n=u;o=v;p=w}}if(k){p=1;o=1;n=0;m=-1;q=1;while(1){s=a[e+(o+m)>>0]|0;r=a[e+q>>0]|0;do if(s<<24>>24==r<<24>>24)if((o|0)==(p|0)){x=p;y=1;z=p+n|0;A=m;break}else{x=p;y=o+1|0;z=n;A=m;break}else if((s&255)<(r&255)){x=q-m|0;y=1;z=q;A=m;break}else{x=1;y=1;z=n+1|0;A=n;break}while(0);q=y+z|0;if(q>>>0>=j>>>0){B=t;C=w;D=j;E=x;F=A;G=25;break}else{p=x;o=y;n=z;m=A}}}else{B=t;C=w;D=j;E=1;F=-1;G=25}}else{B=1;C=-1;D=j;E=1;F=-1;G=25}}else{B=1;C=-1;D=0;E=1;F=-1;G=25}while(0);b:do if((G|0)==25){w=(F+1|0)>>>0>(C+1|0)>>>0;t=w?E:B;A=w?F:C;w=A+1|0;if(!(Mm(e,e+t|0,w)|0)){z=D-t|0;H=z;I=t;J=z}else{z=D-A+-1|0;t=(A>>>0>z>>>0?A:z)+1|0;H=0;I=t;J=D-t|0}t=D|63;z=D+-1|0;y=(H|0)!=0;x=b;v=0;u=b;while(1){i=x;do if((u-i|0)>>>0<D>>>0){m=Xk(u,0,t)|0;if(m)if((m-i|0)>>>0<D>>>0){l=0;break b}else{K=m;break}else{K=u+t|0;break}}else K=u;while(0);i=d[x+z>>0]|0;c:do if(!(1<<(i&31)&c[g+(i>>>5<<2)>>2])){L=0;M=D}else{m=D-(c[h+(i<<2)>>2]|0)|0;if(m|0){L=0;M=y&(v|0)!=0&m>>>0<I>>>0?J:m;break}m=w>>>0>v>>>0;n=m?w:v;o=a[e+n>>0]|0;d:do if(o<<24>>24){p=n;q=o;while(1){if(q<<24>>24!=(a[x+p>>0]|0))break;k=p+1|0;q=a[e+k>>0]|0;if(!(q<<24>>24))break d;else p=k}L=0;M=p-A|0;break c}while(0);if(!m){l=x;break b}o=w;while(1){o=o+-1|0;if((a[e+o>>0]|0)!=(a[x+o>>0]|0)){L=H;M=I;break c}if(o>>>0<=v>>>0){l=x;break b}}}while(0);x=x+M|0;v=L;u=K}}while(0);Pa=f;return l|0}function Zm(){return}function _m(a,b){a=a|0;b=b|0;var d=0,e=0;d=Pa;Pa=Pa+16|0;e=d;c[e>>2]=a;c[e+4>>2]=b;b=Pk(ia(91,e|0)|0)|0;Pa=d;return b|0}function $m(a){a=a|0;var b=0;b=(an(a)|0)==0;return (b?a:a&95)|0}function an(a){a=a|0;return (a+-97|0)>>>0<26|0}function bn(a){a=a|0;return (a+-33|0)>>>0<94|0}function cn(a){a=a|0;var b=0;if(!(dn(a)|0))b=($k(a)|0)!=0&1;else b=1;return b|0}function dn(a){a=a|0;return ((a|32)+-97|0)>>>0<26|0}function en(a){a=a|0;return (a>>>0<32|(a|0)==127)&1|0}function fn(a){a=a|0;return (((a|32)+-97|0)>>>0<6|($k(a)|0)!=0)&1|0}function gn(a){a=a|0;var b=0;if(!(bn(a)|0))b=0;else b=(cn(a)|0)==0&1;return b|0}function hn(a){a=+a;var b=0,d=0.0,e=0,f=0.0,i=0.0,j=0.0;g[h>>3]=a;b=c[h+4>>2]|0;d=(b|0)<0?-.5:.5;e=b&2147483647;c[h>>2]=c[h>>2];c[h+4>>2]=e;f=+g[h>>3];do if(e>>>0<1082535490){i=+jn(f);if(e>>>0>=1072693248){j=d*(i+i/(i+1.0));break}if(e>>>0<1045430272)j=a;else j=d*(i*2.0-i*i/(i+1.0))}else j=d*2.0*+kn(f);while(0);return +j}function jn(a){a=+a;var b=0,d=0,e=0,f=0,i=0.0,j=0,k=0.0,l=0.0,m=0,n=0,o=0.0,p=0.0,q=0.0,r=0.0,s=0.0;g[h>>3]=a;b=c[h+4>>2]|0;d=b&2147483647;e=On(c[h>>2]|0,b|0,63)|0;L()|0;do if(d>>>0>1078159481){b=ln(a)|0;f=(L()|0)&2147483647;if(!(f>>>0>2146435072|(f|0)==2146435072&b>>>0>0))if(!e)if(a>709.782712893384)i=a*8988465674311579538646525.0e283;else j=11;else i=-1.0;else i=a}else{if(d>>>0<=1071001154)if(d>>>0<1016070144){i=a;break}else{k=a;l=0.0;m=0;j=14;break}if(d>>>0<1072734898)if(!e){n=1;o=a+-.6931471803691238;p=1.9082149292705877e-10;j=12;break}else{n=-1;o=a+.6931471803691238;p=-1.9082149292705877e-10;j=12;break}else j=11}while(0);if((j|0)==11){d=~~(a*1.4426950408889634+((e|0)==0?.5:-.5));q=+(d|0);n=d;o=a-q*.6931471803691238;p=q*1.9082149292705877e-10;j=12}if((j|0)==12){q=o-p;k=q;l=o-q-p;m=n;j=14}a:do if((j|0)==14){p=k*.5;q=k*p;o=q*(q*(q*(q*(4.008217827329362e-06-q*2.0109921818362437e-07)+-7.93650757867488e-05)+1.5873015872548146e-03)+-.03333333333333313)+1.0;a=3.0-p*o;p=q*((o-a)/(6.0-k*a));if(!m){i=k-(k*p-q);break}a=k*(p-l)-l-q;switch(m|0){case -1:{i=(k-a)*.5+-.5;break a;break}case 1:{if(k<-.25){i=(a-(k+.5))*-2.0;break a}else{i=(k-a)*2.0+1.0;break a}break}default:{n=Pn(m+1023|0,0,52)|0;d=L()|0;c[h>>2]=n;c[h+4>>2]=d;q=+g[h>>3];if(m>>>0>56){p=k-a+1.0;i=((m|0)==1024?p*2.0*8988465674311579538646525.0e283:p*q)+-1.0;break a}d=Pn(1023-m|0,0,52)|0;n=L()|0;if((m|0)<20){c[h>>2]=d;c[h+4>>2]=n;r=1.0-+g[h>>3];s=k-a}else{c[h>>2]=d;c[h+4>>2]=n;r=k-(a+ +g[h>>3]);s=1.0}i=(r+s)*q;break a}}}while(0);return +i}function kn(a){a=+a;return +(+E(+(a+-1416.0996898839683))*2247116418577894884661631.0e283*2247116418577894884661631.0e283)}function ln(a){a=+a;var b=0;g[h>>3]=a;b=c[h>>2]|0;K(c[h+4>>2]|0);return b|0}function mn(a){a=+a;var b=0,d=0.0,e=0.0;g[h>>3]=a;b=c[h+4>>2]&2147483647;c[h>>2]=c[h>>2];c[h+4>>2]=b;a=+g[h>>3];do if(b>>>0<1072049730)if(b>>>0<1045430272)d=1.0;else{e=+jn(a);d=e*e/((e+1.0)*2.0)+1.0}else if(b>>>0<1082535490){e=+E(+a);d=(e+1.0/e)*.5;break}else{d=+kn(a);break}while(0);return +d}function nn(a,b){a=+a;b=b|0;var d=0,e=0,f=0,i=0,j=0,k=0.0,l=0,m=0.0,n=0;g[h>>3]=a;d=c[h>>2]|0;e=c[h+4>>2]|0;f=On(d|0,e|0,52)|0;L()|0;i=f&2047;f=i+-1023|0;if(i>>>0>1074){g[b>>3]=a;c[h>>2]=0;c[h+4>>2]=e&-2147483648;return +((d|0)==0&(e&1048575|0)==0|(f|0)!=1024?+g[h>>3]:a)}do if(i>>>0>=1023){j=On(-1,1048575,f|0)|0;if((j&d|0)==0&((L()|0)&e|0)==0){g[b>>3]=a;c[h>>2]=0;c[h+4>>2]=e&-2147483648;k=+g[h>>3];break}else{j=Nn(0,-1048576,f|0)|0;l=j&d;j=(L()|0)&e;c[h>>2]=l;c[h+4>>2]=j;m=+g[h>>3];n=b;c[n>>2]=l;c[n+4>>2]=j;k=a-m;break}}else{j=b;c[j>>2]=0;c[j+4>>2]=e&-2147483648;k=a}while(0);return +k}function on(a){a=+a;var b=0,d=0,e=0.0,f=0.0;g[h>>3]=a;b=c[h+4>>2]|0;d=b&2147483647;c[h>>2]=c[h>>2];c[h+4>>2]=d;a=+g[h>>3];do if(d>>>0>1071748074)if(d>>>0>1077149696){e=1.0-0.0/a;break}else{e=1.0-2.0/(+jn(a*2.0)+2.0);break}else{if(d>>>0>1070618798){f=+jn(a*2.0);e=f/(f+2.0);break}if(d>>>0>1048575){f=+jn(a*-2.0);e=-f/(f+2.0)}else e=a}while(0);return +((b|0)<0?-e:e)}function pn(a,b){a=+a;b=b|0;return +(+Rl(a,b))}function qn(){return 6264}function rn(b,d){b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0;e=Pa;Pa=Pa+272|0;f=e;g=e+256|0;do if(!(a[d>>0]|0)){h=za(13530)|0;if(h|0?a[h>>0]|0:0){i=h;break}h=za(5344+(b*12|0)|0)|0;if(h|0?a[h>>0]|0:0){i=h;break}h=za(13537)|0;if(h|0?a[h>>0]|0:0){i=h;break}i=13542}else i=d;while(0);d=0;a:while(1){switch(a[i+d>>0]|0){case 47:case 0:{j=d;break a;break}default:{}}d=d+1|0;if(d>>>0>=15){j=15;break}}d=a[i>>0]|0;if(d<<24>>24!=46?(a[i+j>>0]|0)==0:0)if(d<<24>>24==67){k=i;l=15}else{m=i;l=16}else{k=13542;l=15}if((l|0)==15)if(!(a[k+1>>0]|0)){n=k;l=18}else{m=k;l=16}b:do if((l|0)==16)if((Cl(m,13542)|0)!=0?(Cl(m,13550)|0)!=0:0){k=c[4107]|0;if(k|0){i=k;do{if(!(Cl(m,i+8|0)|0)){o=i;break b}i=c[i+24>>2]|0}while((i|0)!=0)}U(16432);i=c[4107]|0;c:do if(i|0){k=i;while(1){if(!(Cl(m,k+8|0)|0))break;d=c[k+24>>2]|0;if(!d)break c;else k=d}ja(16432);o=k;break b}while(0);d:do if(((c[4089]|0)==0?(i=za(13556)|0,(i|0)!=0):0)?(a[i>>0]|0)!=0:0){d=254-j|0;h=j+1|0;p=i;while(1){i=vm(p,58)|0;q=a[i>>0]|0;r=i-p+((q<<24>>24!=0)<<31>>31)|0;if(r>>>0<d>>>0){Un(f|0,p|0,r|0)|0;s=f+r|0;a[s>>0]=47;Un(s+1|0,m|0,j|0)|0;a[f+(h+r)>>0]=0;t=V(f|0,g|0)|0;if(t|0)break;u=a[i>>0]|0}else u=q;p=i+(u<<24>>24!=0&1)|0;if(!(a[p>>0]|0)){l=41;break d}}p=Hk(28)|0;if(!p){_m(t,c[g>>2]|0)|0;l=41;break}else{c[p>>2]=t;c[p+4>>2]=c[g>>2];h=p+8|0;Un(h|0,m|0,j|0)|0;a[h+j>>0]=0;c[p+24>>2]=c[4107];c[4107]=p;v=p;break}}else l=41;while(0);if((l|0)==41){p=Hk(28)|0;if(!p)v=p;else{c[p>>2]=c[1465];c[p+4>>2]=c[1466];h=p+8|0;Un(h|0,m|0,j|0)|0;a[h+j>>0]=0;c[p+24>>2]=c[4107];c[4107]=p;v=p}}ja(16432);o=(b|0)==0&(v|0)==0?5860:v}else{n=m;l=18}while(0);do if((l|0)==18){if((b|0)==0?(a[n+1>>0]|0)==46:0){o=5860;break}o=0}while(0);Pa=e;return o|0}function sn(b,d){b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0;e=Pa;Pa=Pa+16|0;f=e;do if(b>>>0>6)g=0;else{U(16440);if((b|0)!=6){h=tn(b,d)|0;ja(16440);g=h;break}if(d|0){c[f>>2]=c[1356];c[f+4>>2]=c[1357];c[f+8>>2]=c[1358];c[f+12>>2]=c[1359];h=0;i=d;while(1){j=vm(i,59)|0;k=j-i|0;if((k|0)<16){Un(f|0,i|0,k|0)|0;a[f+k>>0]=0;l=(a[j>>0]|0)==0?i:j+1|0}else l=i;tn(h,f)|0;h=h+1|0;if((h|0)==6)break;else i=l}}i=15696;h=0;while(1){j=c[16388+(h<<2)>>2]|0;k=(j|0)==0?13569:j+8|0;m=_l(k)|0;Un(i|0,k|0,m|0)|0;a[i+m>>0]=59;h=h+1|0;if((h|0)==6)break;else i=i+(m+1)|0}a[i+m>>0]=0;ja(16440);g=15696}while(0);Pa=e;return g|0}function tn(a,b){a=a|0;b=b|0;var d=0,e=0;if(!b)d=c[16388+(a<<2)>>2]|0;else{e=rn(a,b)|0;c[16388+(a<<2)>>2]=e;d=e}return ((d|0)==0?13569:d+8|0)|0}function un(a,b,c){a=a|0;b=b|0;c=c|0;return Cl(a,b)|0}function vn(a,b){a=a|0;b=b|0;wn()|0;return un(a,b,0)|0}function wn(){return _k()|0}function xn(a,b){a=a|0;b=b|0;return +(+yn(a,b,1))}function yn(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0.0;e=Pa;Pa=Pa+128|0;f=e;g=f;h=g+124|0;do{c[g>>2]=0;g=g+4|0}while((g|0)<(h|0));g=f+4|0;c[g>>2]=a;h=f+8|0;c[h>>2]=-1;c[f+44>>2]=a;c[f+76>>2]=-1;Gl(f,0);i=+Nl(f,d,1);d=(c[g>>2]|0)-(c[h>>2]|0)+(c[f+108>>2]|0)|0;if(b|0)c[b>>2]=(d|0)==0?a:a+d|0;Pa=e;return +i}function zn(a){a=a|0;var b=0;b=15840;c[b>>2]=a+-1;c[b+4>>2]=0;return}function An(){var a=0,b=0,d=0;a=15840;b=Hn(c[a>>2]|0,c[a+4>>2]|0,1284865837,1481765933)|0;a=In(b|0,L()|0,1,0)|0;b=L()|0;d=15840;c[d>>2]=a;c[d+4>>2]=b;d=On(a|0,b|0,33)|0;L()|0;return d|0}function Bn(){S(16464);return}function Cn(){return 16448}function Dn(){return 16456}function En(){return 16460}function Fn(){return 16464}function Gn(a,b){a=a|0;b=b|0;var c=0,d=0,e=0,f=0;c=a&65535;d=b&65535;e=H(d,c)|0;f=a>>>16;a=(e>>>16)+(H(d,f)|0)|0;d=b>>>16;b=H(d,c)|0;return (K((a>>>16)+(H(d,f)|0)+(((a&65535)+b|0)>>>16)|0),a+b<<16|e&65535|0)|0}function Hn(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;var e=0,f=0;e=a;a=c;c=Gn(e,a)|0;f=L()|0;return (K((H(b,a)|0)+(H(d,e)|0)+f|f&0|0),c|0|0)|0}function In(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;var e=0;e=a+c>>>0;return (K(b+d+(e>>>0<a>>>0|0)>>>0|0),e|0)|0}function Jn(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;var e=0;e=b-d>>>0;e=b-d-(c>>>0>a>>>0|0)>>>0;return (K(e|0),a-c>>>0|0)|0}function Kn(a){a=a|0;return (a?31-(I(a^a-1)|0)|0:32)|0}function Ln(a,b,d,e,f){a=a|0;b=b|0;d=d|0;e=e|0;f=f|0;var g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0,z=0,A=0,B=0,C=0,D=0,E=0,F=0,G=0;g=a;h=b;i=h;j=d;k=e;l=k;if(!i){m=(f|0)!=0;if(!l){if(m){c[f>>2]=(g>>>0)%(j>>>0);c[f+4>>2]=0}n=0;o=(g>>>0)/(j>>>0)>>>0;return (K(n|0),o)|0}else{if(!m){n=0;o=0;return (K(n|0),o)|0}c[f>>2]=a|0;c[f+4>>2]=b&0;n=0;o=0;return (K(n|0),o)|0}}m=(l|0)==0;do if(j){if(!m){p=(I(l|0)|0)-(I(i|0)|0)|0;if(p>>>0<=31){q=p+1|0;r=31-p|0;s=p-31>>31;t=q;u=g>>>(q>>>0)&s|i<<r;v=i>>>(q>>>0)&s;w=0;x=g<<r;break}if(!f){n=0;o=0;return (K(n|0),o)|0}c[f>>2]=a|0;c[f+4>>2]=h|b&0;n=0;o=0;return (K(n|0),o)|0}r=j-1|0;if(r&j|0){s=(I(j|0)|0)+33-(I(i|0)|0)|0;q=64-s|0;p=32-s|0;y=p>>31;z=s-32|0;A=z>>31;t=s;u=p-1>>31&i>>>(z>>>0)|(i<<p|g>>>(s>>>0))&A;v=A&i>>>(s>>>0);w=g<<q&y;x=(i<<q|g>>>(z>>>0))&y|g<<p&s-33>>31;break}if(f|0){c[f>>2]=r&g;c[f+4>>2]=0}if((j|0)==1){n=h|b&0;o=a|0|0;return (K(n|0),o)|0}else{r=Kn(j|0)|0;n=i>>>(r>>>0)|0;o=i<<32-r|g>>>(r>>>0)|0;return (K(n|0),o)|0}}else{if(m){if(f|0){c[f>>2]=(i>>>0)%(j>>>0);c[f+4>>2]=0}n=0;o=(i>>>0)/(j>>>0)>>>0;return (K(n|0),o)|0}if(!g){if(f|0){c[f>>2]=0;c[f+4>>2]=(i>>>0)%(l>>>0)}n=0;o=(i>>>0)/(l>>>0)>>>0;return (K(n|0),o)|0}r=l-1|0;if(!(r&l)){if(f|0){c[f>>2]=a|0;c[f+4>>2]=r&i|b&0}n=0;o=i>>>((Kn(l|0)|0)>>>0);return (K(n|0),o)|0}r=(I(l|0)|0)-(I(i|0)|0)|0;if(r>>>0<=30){s=r+1|0;p=31-r|0;t=s;u=i<<p|g>>>(s>>>0);v=i>>>(s>>>0);w=0;x=g<<p;break}if(!f){n=0;o=0;return (K(n|0),o)|0}c[f>>2]=a|0;c[f+4>>2]=h|b&0;n=0;o=0;return (K(n|0),o)|0}while(0);if(!t){B=x;C=w;D=v;E=u;F=0;G=0}else{b=d|0|0;d=k|e&0;e=In(b|0,d|0,-1,-1)|0;k=L()|0;h=x;x=w;w=v;v=u;u=t;t=0;do{a=h;h=x>>>31|h<<1;x=t|x<<1;g=v<<1|a>>>31|0;a=v>>>31|w<<1|0;Jn(e|0,k|0,g|0,a|0)|0;i=L()|0;l=i>>31|((i|0)<0?-1:0)<<1;t=l&1;v=Jn(g|0,a|0,l&b|0,(((i|0)<0?-1:0)>>31|((i|0)<0?-1:0)<<1)&d|0)|0;w=L()|0;u=u-1|0}while((u|0)!=0);B=h;C=x;D=w;E=v;F=0;G=t}t=C;C=0;if(f|0){c[f>>2]=E;c[f+4>>2]=D}n=(t|0)>>>31|(B|C)<<1|(C<<1|t>>>31)&0|F;o=(t<<1|0>>>31)&-2|G;return (K(n|0),o)|0}function Mn(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return Ln(a,b,c,d,0)|0}function Nn(a,b,c){a=a|0;b=b|0;c=c|0;if((c|0)<32){K(b>>c|0);return a>>>c|(b&(1<<c)-1)<<32-c}K(((b|0)<0?-1:0)|0);return b>>c-32|0}function On(a,b,c){a=a|0;b=b|0;c=c|0;if((c|0)<32){K(b>>>c|0);return a>>>c|(b&(1<<c)-1)<<32-c}K(0);return b>>>c-32|0}function Pn(a,b,c){a=a|0;b=b|0;c=c|0;if((c|0)<32){K(b<<c|(a&(1<<c)-1<<32-c)>>>32-c|0);return a<<c}K(a<<c-32|0);return 0}function Qn(a){a=a|0;return (a&255)<<24|(a>>8&255)<<16|(a>>16&255)<<8|a>>>24|0}function Rn(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0;l=l+1|0;c[a>>2]=l;while((f|0)<(e|0)){if(!(c[d+(f<<3)>>2]|0)){c[d+(f<<3)>>2]=l;c[d+((f<<3)+4)>>2]=b;c[d+((f<<3)+8)>>2]=0;K(e|0);return d|0}f=f+1|0}e=e*2|0;d=Jk(d|0,8*(e+1|0)|0)|0;d=Rn(a|0,b|0,d|0,e|0)|0;K(e|0);return d|0}function Sn(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0;while((e|0)<(d|0)){f=c[b+(e<<3)>>2]|0;if(!f)break;if((f|0)==(a|0))return c[b+((e<<3)+4)>>2]|0;e=e+1|0}return 0}function Tn(a,b){a=a|0;b=b|0;if(!j){j=a;k=b}}function Un(b,d,e){b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0;if((e|0)>=8192){ua(b|0,d|0,e|0)|0;return b|0}f=b|0;g=b+e|0;if((b&3)==(d&3)){while(b&3){if(!e)return f|0;a[b>>0]=a[d>>0]|0;b=b+1|0;d=d+1|0;e=e-1|0}h=g&-4|0;e=h-64|0;while((b|0)<=(e|0)){c[b>>2]=c[d>>2];c[b+4>>2]=c[d+4>>2];c[b+8>>2]=c[d+8>>2];c[b+12>>2]=c[d+12>>2];c[b+16>>2]=c[d+16>>2];c[b+20>>2]=c[d+20>>2];c[b+24>>2]=c[d+24>>2];c[b+28>>2]=c[d+28>>2];c[b+32>>2]=c[d+32>>2];c[b+36>>2]=c[d+36>>2];c[b+40>>2]=c[d+40>>2];c[b+44>>2]=c[d+44>>2];c[b+48>>2]=c[d+48>>2];c[b+52>>2]=c[d+52>>2];c[b+56>>2]=c[d+56>>2];c[b+60>>2]=c[d+60>>2];b=b+64|0;d=d+64|0}while((b|0)<(h|0)){c[b>>2]=c[d>>2];b=b+4|0;d=d+4|0}}else{h=g-4|0;while((b|0)<(h|0)){a[b>>0]=a[d>>0]|0;a[b+1>>0]=a[d+1>>0]|0;a[b+2>>0]=a[d+2>>0]|0;a[b+3>>0]=a[d+3>>0]|0;b=b+4|0;d=d+4|0}}while((b|0)<(g|0)){a[b>>0]=a[d>>0]|0;b=b+1|0;d=d+1|0}return f|0}function Vn(b,d,e){b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0,i=0;f=b+e|0;d=d&255;if((e|0)>=67){while(b&3){a[b>>0]=d;b=b+1|0}g=f&-4|0;h=d|d<<8|d<<16|d<<24;i=g-64|0;while((b|0)<=(i|0)){c[b>>2]=h;c[b+4>>2]=h;c[b+8>>2]=h;c[b+12>>2]=h;c[b+16>>2]=h;c[b+20>>2]=h;c[b+24>>2]=h;c[b+28>>2]=h;c[b+32>>2]=h;c[b+36>>2]=h;c[b+40>>2]=h;c[b+44>>2]=h;c[b+48>>2]=h;c[b+52>>2]=h;c[b+56>>2]=h;c[b+60>>2]=h;b=b+64|0}while((b|0)<(g|0)){c[b>>2]=h;b=b+4|0}}while((b|0)<(f|0)){a[b>>0]=d;b=b+1|0}return f-e|0}function Wn(a){a=a|0;var b=0,d=0;b=c[i>>2]|0;d=b+a|0;if((a|0)>0&(d|0)<(b|0)|(d|0)<0){Ma(d|0)|0;W(12);return -1}if((d|0)>(ra()|0)){if(!(va(d|0)|0)){W(12);return -1}}else c[i>>2]=d;return b|0}function Xn(a,b){a=a|0;b=b|0;return Ta[a&511](b|0)|0}function Yn(a){a=a|0;return N(0,a|0)|0}function Zn(a){a=a|0;return N(1,a|0)|0}function _n(a){a=a|0;return N(2,a|0)|0}function $n(a){a=a|0;return N(3,a|0)|0}function ao(a){a=a|0;return N(4,a|0)|0}function bo(a){a=a|0;return N(5,a|0)|0}function co(a){a=a|0;return N(6,a|0)|0}function eo(a){a=a|0;return N(7,a|0)|0}function fo(a){a=a|0;return N(8,a|0)|0}function go(a){a=a|0;return N(9,a|0)|0}function ho(a){a=a|0;return N(10,a|0)|0}function io(a){a=a|0;return N(11,a|0)|0}function jo(a){a=a|0;return N(12,a|0)|0}function ko(a){a=a|0;return N(13,a|0)|0}function lo(a){a=a|0;return N(14,a|0)|0}function mo(a){a=a|0;return N(15,a|0)|0}function no(a){a=a|0;return N(16,a|0)|0}function oo(a){a=a|0;return N(17,a|0)|0}function po(a){a=a|0;return N(18,a|0)|0}function qo(a){a=a|0;return N(19,a|0)|0}function ro(a){a=a|0;return N(20,a|0)|0}function so(a){a=a|0;return N(21,a|0)|0}function to(a){a=a|0;return N(22,a|0)|0}function uo(a){a=a|0;return N(23,a|0)|0}function vo(a){a=a|0;return N(24,a|0)|0}function wo(a){a=a|0;return N(25,a|0)|0}function xo(a){a=a|0;return N(26,a|0)|0}function yo(a){a=a|0;return N(27,a|0)|0}function zo(a){a=a|0;return N(28,a|0)|0}function Ao(a){a=a|0;return N(29,a|0)|0}function Bo(a){a=a|0;return N(30,a|0)|0}function Co(a){a=a|0;return N(31,a|0)|0}function Do(a){a=a|0;return N(32,a|0)|0}function Eo(a){a=a|0;return N(33,a|0)|0}function Fo(a){a=a|0;return N(34,a|0)|0}function Go(a){a=a|0;return N(35,a|0)|0}function Ho(a){a=a|0;return N(36,a|0)|0}function Io(a){a=a|0;return N(37,a|0)|0}function Jo(a){a=a|0;return N(38,a|0)|0}function Ko(a){a=a|0;return N(39,a|0)|0}function Lo(a){a=a|0;return N(40,a|0)|0}function Mo(a){a=a|0;return N(41,a|0)|0}function No(a){a=a|0;return N(42,a|0)|0}function Oo(a){a=a|0;return N(43,a|0)|0}function Po(a){a=a|0;return N(44,a|0)|0}function Qo(a){a=a|0;return N(45,a|0)|0}function Ro(a){a=a|0;return N(46,a|0)|0}function So(a){a=a|0;return N(47,a|0)|0}function To(a){a=a|0;return N(48,a|0)|0}function Uo(a){a=a|0;return N(49,a|0)|0}function Vo(a){a=a|0;return N(50,a|0)|0}function Wo(a){a=a|0;return N(51,a|0)|0}function Xo(a){a=a|0;return N(52,a|0)|0}function Yo(a){a=a|0;return N(53,a|0)|0}function Zo(a){a=a|0;return N(54,a|0)|0}function _o(a){a=a|0;return N(55,a|0)|0}function $o(a){a=a|0;return N(56,a|0)|0}function ap(a){a=a|0;return N(57,a|0)|0}function bp(a){a=a|0;return N(58,a|0)|0}function cp(a){a=a|0;return N(59,a|0)|0}function dp(a){a=a|0;return N(60,a|0)|0}function ep(a){a=a|0;return N(61,a|0)|0}function fp(a){a=a|0;return N(62,a|0)|0}function gp(a){a=a|0;return N(63,a|0)|0}function hp(a){a=a|0;return N(64,a|0)|0}function ip(a){a=a|0;return N(65,a|0)|0}function jp(a){a=a|0;return N(66,a|0)|0}function kp(a){a=a|0;return N(67,a|0)|0}function lp(a){a=a|0;return N(68,a|0)|0}function mp(a){a=a|0;return N(69,a|0)|0}function np(a){a=a|0;return N(70,a|0)|0}function op(a){a=a|0;return N(71,a|0)|0}function pp(a){a=a|0;return N(72,a|0)|0}function qp(a){a=a|0;return N(73,a|0)|0}function rp(a){a=a|0;return N(74,a|0)|0}function sp(a){a=a|0;return N(75,a|0)|0}function tp(a){a=a|0;return N(76,a|0)|0}function up(a){a=a|0;return N(77,a|0)|0}function vp(a){a=a|0;return N(78,a|0)|0}function wp(a){a=a|0;return N(79,a|0)|0}function xp(a){a=a|0;return N(80,a|0)|0}function yp(a){a=a|0;return N(81,a|0)|0}function zp(a){a=a|0;return N(82,a|0)|0}function Ap(a){a=a|0;return N(83,a|0)|0}function Bp(a){a=a|0;return N(84,a|0)|0}function Cp(a){a=a|0;return N(85,a|0)|0}function Dp(a){a=a|0;return N(86,a|0)|0}function Ep(a){a=a|0;return N(87,a|0)|0}function Fp(a){a=a|0;return N(88,a|0)|0}function Gp(a){a=a|0;return N(89,a|0)|0}function Hp(a){a=a|0;return N(90,a|0)|0}function Ip(a){a=a|0;return N(91,a|0)|0}function Jp(a){a=a|0;return N(92,a|0)|0}function Kp(a){a=a|0;return N(93,a|0)|0}function Lp(a){a=a|0;return N(94,a|0)|0}function Mp(a){a=a|0;return N(95,a|0)|0}function Np(a){a=a|0;return N(96,a|0)|0}function Op(a){a=a|0;return N(97,a|0)|0}function Pp(a){a=a|0;return N(98,a|0)|0}function Qp(a){a=a|0;return N(99,a|0)|0}function Rp(a){a=a|0;return N(100,a|0)|0}function Sp(a){a=a|0;return N(101,a|0)|0}function Tp(a){a=a|0;return N(102,a|0)|0}function Up(a){a=a|0;return N(103,a|0)|0}function Vp(a){a=a|0;return N(104,a|0)|0}function Wp(a){a=a|0;return N(105,a|0)|0}function Xp(a){a=a|0;return N(106,a|0)|0}function Yp(a){a=a|0;return N(107,a|0)|0}function Zp(a){a=a|0;return N(108,a|0)|0}function _p(a){a=a|0;return N(109,a|0)|0}function $p(a){a=a|0;return N(110,a|0)|0}function aq(a){a=a|0;return N(111,a|0)|0}function bq(a){a=a|0;return N(112,a|0)|0}function cq(a){a=a|0;return N(113,a|0)|0}function dq(a){a=a|0;return N(114,a|0)|0}function eq(a){a=a|0;return N(115,a|0)|0}function fq(a){a=a|0;return N(116,a|0)|0}function gq(a){a=a|0;return N(117,a|0)|0}function hq(a){a=a|0;return N(118,a|0)|0}function iq(a){a=a|0;return N(119,a|0)|0}function jq(a){a=a|0;return N(120,a|0)|0}function kq(a){a=a|0;return N(121,a|0)|0}function lq(a){a=a|0;return N(122,a|0)|0}function mq(a){a=a|0;return N(123,a|0)|0}function nq(a){a=a|0;return N(124,a|0)|0}function oq(a){a=a|0;return N(125,a|0)|0}function pq(a){a=a|0;return N(126,a|0)|0}function qq(a){a=a|0;return N(127,a|0)|0}function rq(a,b,c){a=a|0;b=b|0;c=c|0;return Ua[a&255](b|0,c|0)|0}function sq(a,b){a=a|0;b=b|0;return O(0,a|0,b|0)|0}function tq(a,b){a=a|0;b=b|0;return O(1,a|0,b|0)|0}function uq(a,b){a=a|0;b=b|0;return O(2,a|0,b|0)|0}function vq(a,b){a=a|0;b=b|0;return O(3,a|0,b|0)|0}function wq(a,b){a=a|0;b=b|0;return O(4,a|0,b|0)|0}function xq(a,b){a=a|0;b=b|0;return O(5,a|0,b|0)|0}function yq(a,b){a=a|0;b=b|0;return O(6,a|0,b|0)|0}function zq(a,b){a=a|0;b=b|0;return O(7,a|0,b|0)|0}function Aq(a,b){a=a|0;b=b|0;return O(8,a|0,b|0)|0}function Bq(a,b){a=a|0;b=b|0;return O(9,a|0,b|0)|0}function Cq(a,b){a=a|0;b=b|0;return O(10,a|0,b|0)|0}function Dq(a,b){a=a|0;b=b|0;return O(11,a|0,b|0)|0}function Eq(a,b){a=a|0;b=b|0;return O(12,a|0,b|0)|0}function Fq(a,b){a=a|0;b=b|0;return O(13,a|0,b|0)|0}function Gq(a,b){a=a|0;b=b|0;return O(14,a|0,b|0)|0}function Hq(a,b){a=a|0;b=b|0;return O(15,a|0,b|0)|0}function Iq(a,b){a=a|0;b=b|0;return O(16,a|0,b|0)|0}function Jq(a,b){a=a|0;b=b|0;return O(17,a|0,b|0)|0}function Kq(a,b){a=a|0;b=b|0;return O(18,a|0,b|0)|0}function Lq(a,b){a=a|0;b=b|0;return O(19,a|0,b|0)|0}function Mq(a,b){a=a|0;b=b|0;return O(20,a|0,b|0)|0}function Nq(a,b){a=a|0;b=b|0;return O(21,a|0,b|0)|0}function Oq(a,b){a=a|0;b=b|0;return O(22,a|0,b|0)|0}function Pq(a,b){a=a|0;b=b|0;return O(23,a|0,b|0)|0}function Qq(a,b){a=a|0;b=b|0;return O(24,a|0,b|0)|0}function Rq(a,b){a=a|0;b=b|0;return O(25,a|0,b|0)|0}function Sq(a,b){a=a|0;b=b|0;return O(26,a|0,b|0)|0}function Tq(a,b){a=a|0;b=b|0;return O(27,a|0,b|0)|0}function Uq(a,b){a=a|0;b=b|0;return O(28,a|0,b|0)|0}function Vq(a,b){a=a|0;b=b|0;return O(29,a|0,b|0)|0}function Wq(a,b){a=a|0;b=b|0;return O(30,a|0,b|0)|0}function Xq(a,b){a=a|0;b=b|0;return O(31,a|0,b|0)|0}function Yq(a,b){a=a|0;b=b|0;return O(32,a|0,b|0)|0}function Zq(a,b){a=a|0;b=b|0;return O(33,a|0,b|0)|0}function _q(a,b){a=a|0;b=b|0;return O(34,a|0,b|0)|0}function $q(a,b){a=a|0;b=b|0;return O(35,a|0,b|0)|0}function ar(a,b){a=a|0;b=b|0;return O(36,a|0,b|0)|0}function br(a,b){a=a|0;b=b|0;return O(37,a|0,b|0)|0}function cr(a,b){a=a|0;b=b|0;return O(38,a|0,b|0)|0}function dr(a,b){a=a|0;b=b|0;return O(39,a|0,b|0)|0}function er(a,b){a=a|0;b=b|0;return O(40,a|0,b|0)|0}function fr(a,b){a=a|0;b=b|0;return O(41,a|0,b|0)|0}function gr(a,b){a=a|0;b=b|0;return O(42,a|0,b|0)|0}function hr(a,b){a=a|0;b=b|0;return O(43,a|0,b|0)|0}function ir(a,b){a=a|0;b=b|0;return O(44,a|0,b|0)|0}function jr(a,b){a=a|0;b=b|0;return O(45,a|0,b|0)|0}function kr(a,b){a=a|0;b=b|0;return O(46,a|0,b|0)|0}function lr(a,b){a=a|0;b=b|0;return O(47,a|0,b|0)|0}function mr(a,b){a=a|0;b=b|0;return O(48,a|0,b|0)|0}function nr(a,b){a=a|0;b=b|0;return O(49,a|0,b|0)|0}function or(a,b){a=a|0;b=b|0;return O(50,a|0,b|0)|0}function pr(a,b){a=a|0;b=b|0;return O(51,a|0,b|0)|0}function qr(a,b){a=a|0;b=b|0;return O(52,a|0,b|0)|0}function rr(a,b){a=a|0;b=b|0;return O(53,a|0,b|0)|0}function sr(a,b){a=a|0;b=b|0;return O(54,a|0,b|0)|0}function tr(a,b){a=a|0;b=b|0;return O(55,a|0,b|0)|0}function ur(a,b){a=a|0;b=b|0;return O(56,a|0,b|0)|0}function vr(a,b){a=a|0;b=b|0;return O(57,a|0,b|0)|0}function wr(a,b){a=a|0;b=b|0;return O(58,a|0,b|0)|0}function xr(a,b){a=a|0;b=b|0;return O(59,a|0,b|0)|0}function yr(a,b){a=a|0;b=b|0;return O(60,a|0,b|0)|0}function zr(a,b){a=a|0;b=b|0;return O(61,a|0,b|0)|0}function Ar(a,b){a=a|0;b=b|0;return O(62,a|0,b|0)|0}function Br(a,b){a=a|0;b=b|0;return O(63,a|0,b|0)|0}function Cr(a,b){a=a|0;b=b|0;return O(64,a|0,b|0)|0}function Dr(a,b){a=a|0;b=b|0;return O(65,a|0,b|0)|0}function Er(a,b){a=a|0;b=b|0;return O(66,a|0,b|0)|0}function Fr(a,b){a=a|0;b=b|0;return O(67,a|0,b|0)|0}function Gr(a,b){a=a|0;b=b|0;return O(68,a|0,b|0)|0}function Hr(a,b){a=a|0;b=b|0;return O(69,a|0,b|0)|0}function Ir(a,b){a=a|0;b=b|0;return O(70,a|0,b|0)|0}function Jr(a,b){a=a|0;b=b|0;return O(71,a|0,b|0)|0}function Kr(a,b){a=a|0;b=b|0;return O(72,a|0,b|0)|0}function Lr(a,b){a=a|0;b=b|0;return O(73,a|0,b|0)|0}function Mr(a,b){a=a|0;b=b|0;return O(74,a|0,b|0)|0}function Nr(a,b){a=a|0;b=b|0;return O(75,a|0,b|0)|0}function Or(a,b){a=a|0;b=b|0;return O(76,a|0,b|0)|0}function Pr(a,b){a=a|0;b=b|0;return O(77,a|0,b|0)|0}function Qr(a,b){a=a|0;b=b|0;return O(78,a|0,b|0)|0}function Rr(a,b){a=a|0;b=b|0;return O(79,a|0,b|0)|0}function Sr(a,b){a=a|0;b=b|0;return O(80,a|0,b|0)|0}function Tr(a,b){a=a|0;b=b|0;return O(81,a|0,b|0)|0}function Ur(a,b){a=a|0;b=b|0;return O(82,a|0,b|0)|0}function Vr(a,b){a=a|0;b=b|0;return O(83,a|0,b|0)|0}function Wr(a,b){a=a|0;b=b|0;return O(84,a|0,b|0)|0}function Xr(a,b){a=a|0;b=b|0;return O(85,a|0,b|0)|0}function Yr(a,b){a=a|0;b=b|0;return O(86,a|0,b|0)|0}function Zr(a,b){a=a|0;b=b|0;return O(87,a|0,b|0)|0}function _r(a,b){a=a|0;b=b|0;return O(88,a|0,b|0)|0}function $r(a,b){a=a|0;b=b|0;return O(89,a|0,b|0)|0}function as(a,b){a=a|0;b=b|0;return O(90,a|0,b|0)|0}function bs(a,b){a=a|0;b=b|0;return O(91,a|0,b|0)|0}function cs(a,b){a=a|0;b=b|0;return O(92,a|0,b|0)|0}function ds(a,b){a=a|0;b=b|0;return O(93,a|0,b|0)|0}function es(a,b){a=a|0;b=b|0;return O(94,a|0,b|0)|0}function fs(a,b){a=a|0;b=b|0;return O(95,a|0,b|0)|0}function gs(a,b){a=a|0;b=b|0;return O(96,a|0,b|0)|0}function hs(a,b){a=a|0;b=b|0;return O(97,a|0,b|0)|0}function is(a,b){a=a|0;b=b|0;return O(98,a|0,b|0)|0}function js(a,b){a=a|0;b=b|0;return O(99,a|0,b|0)|0}function ks(a,b){a=a|0;b=b|0;return O(100,a|0,b|0)|0}function ls(a,b){a=a|0;b=b|0;return O(101,a|0,b|0)|0}function ms(a,b){a=a|0;b=b|0;return O(102,a|0,b|0)|0}function ns(a,b){a=a|0;b=b|0;return O(103,a|0,b|0)|0}function os(a,b){a=a|0;b=b|0;return O(104,a|0,b|0)|0}function ps(a,b){a=a|0;b=b|0;return O(105,a|0,b|0)|0}function qs(a,b){a=a|0;b=b|0;return O(106,a|0,b|0)|0}function rs(a,b){a=a|0;b=b|0;return O(107,a|0,b|0)|0}function ss(a,b){a=a|0;b=b|0;return O(108,a|0,b|0)|0}function ts(a,b){a=a|0;b=b|0;return O(109,a|0,b|0)|0}function us(a,b){a=a|0;b=b|0;return O(110,a|0,b|0)|0}function vs(a,b){a=a|0;b=b|0;return O(111,a|0,b|0)|0}function ws(a,b){a=a|0;b=b|0;return O(112,a|0,b|0)|0}function xs(a,b){a=a|0;b=b|0;return O(113,a|0,b|0)|0}function ys(a,b){a=a|0;b=b|0;return O(114,a|0,b|0)|0}function zs(a,b){a=a|0;b=b|0;return O(115,a|0,b|0)|0}function As(a,b){a=a|0;b=b|0;return O(116,a|0,b|0)|0}function Bs(a,b){a=a|0;b=b|0;return O(117,a|0,b|0)|0}function Cs(a,b){a=a|0;b=b|0;return O(118,a|0,b|0)|0}function Ds(a,b){a=a|0;b=b|0;return O(119,a|0,b|0)|0}function Es(a,b){a=a|0;b=b|0;return O(120,a|0,b|0)|0}function Fs(a,b){a=a|0;b=b|0;return O(121,a|0,b|0)|0}function Gs(a,b){a=a|0;b=b|0;return O(122,a|0,b|0)|0}function Hs(a,b){a=a|0;b=b|0;return O(123,a|0,b|0)|0}function Is(a,b){a=a|0;b=b|0;return O(124,a|0,b|0)|0}function Js(a,b){a=a|0;b=b|0;return O(125,a|0,b|0)|0}function Ks(a,b){a=a|0;b=b|0;return O(126,a|0,b|0)|0}function Ls(a,b){a=a|0;b=b|0;return O(127,a|0,b|0)|0}function Ms(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return Va[a&255](b|0,c|0,d|0)|0}function Ns(a,b,c){a=a|0;b=b|0;c=c|0;return P(0,a|0,b|0,c|0)|0}function Os(a,b,c){a=a|0;b=b|0;c=c|0;return P(1,a|0,b|0,c|0)|0}function Ps(a,b,c){a=a|0;b=b|0;c=c|0;return P(2,a|0,b|0,c|0)|0}function Qs(a,b,c){a=a|0;b=b|0;c=c|0;return P(3,a|0,b|0,c|0)|0}function Rs(a,b,c){a=a|0;b=b|0;c=c|0;return P(4,a|0,b|0,c|0)|0}function Ss(a,b,c){a=a|0;b=b|0;c=c|0;return P(5,a|0,b|0,c|0)|0}function Ts(a,b,c){a=a|0;b=b|0;c=c|0;return P(6,a|0,b|0,c|0)|0}function Us(a,b,c){a=a|0;b=b|0;c=c|0;return P(7,a|0,b|0,c|0)|0}function Vs(a,b,c){a=a|0;b=b|0;c=c|0;return P(8,a|0,b|0,c|0)|0}function Ws(a,b,c){a=a|0;b=b|0;c=c|0;return P(9,a|0,b|0,c|0)|0}function Xs(a,b,c){a=a|0;b=b|0;c=c|0;return P(10,a|0,b|0,c|0)|0}function Ys(a,b,c){a=a|0;b=b|0;c=c|0;return P(11,a|0,b|0,c|0)|0}function Zs(a,b,c){a=a|0;b=b|0;c=c|0;return P(12,a|0,b|0,c|0)|0}function _s(a,b,c){a=a|0;b=b|0;c=c|0;return P(13,a|0,b|0,c|0)|0}function $s(a,b,c){a=a|0;b=b|0;c=c|0;return P(14,a|0,b|0,c|0)|0}function at(a,b,c){a=a|0;b=b|0;c=c|0;return P(15,a|0,b|0,c|0)|0}function bt(a,b,c){a=a|0;b=b|0;c=c|0;return P(16,a|0,b|0,c|0)|0}function ct(a,b,c){a=a|0;b=b|0;c=c|0;return P(17,a|0,b|0,c|0)|0}function dt(a,b,c){a=a|0;b=b|0;c=c|0;return P(18,a|0,b|0,c|0)|0}function et(a,b,c){a=a|0;b=b|0;c=c|0;return P(19,a|0,b|0,c|0)|0}function ft(a,b,c){a=a|0;b=b|0;c=c|0;return P(20,a|0,b|0,c|0)|0}function gt(a,b,c){a=a|0;b=b|0;c=c|0;return P(21,a|0,b|0,c|0)|0}function ht(a,b,c){a=a|0;b=b|0;c=c|0;return P(22,a|0,b|0,c|0)|0}function it(a,b,c){a=a|0;b=b|0;c=c|0;return P(23,a|0,b|0,c|0)|0}function jt(a,b,c){a=a|0;b=b|0;c=c|0;return P(24,a|0,b|0,c|0)|0}function kt(a,b,c){a=a|0;b=b|0;c=c|0;return P(25,a|0,b|0,c|0)|0}function lt(a,b,c){a=a|0;b=b|0;c=c|0;return P(26,a|0,b|0,c|0)|0}function mt(a,b,c){a=a|0;b=b|0;c=c|0;return P(27,a|0,b|0,c|0)|0}function nt(a,b,c){a=a|0;b=b|0;c=c|0;return P(28,a|0,b|0,c|0)|0}function ot(a,b,c){a=a|0;b=b|0;c=c|0;return P(29,a|0,b|0,c|0)|0}function pt(a,b,c){a=a|0;b=b|0;c=c|0;return P(30,a|0,b|0,c|0)|0}function qt(a,b,c){a=a|0;b=b|0;c=c|0;return P(31,a|0,b|0,c|0)|0}function rt(a,b,c){a=a|0;b=b|0;c=c|0;return P(32,a|0,b|0,c|0)|0}function st(a,b,c){a=a|0;b=b|0;c=c|0;return P(33,a|0,b|0,c|0)|0}function tt(a,b,c){a=a|0;b=b|0;c=c|0;return P(34,a|0,b|0,c|0)|0}function ut(a,b,c){a=a|0;b=b|0;c=c|0;return P(35,a|0,b|0,c|0)|0}function vt(a,b,c){a=a|0;b=b|0;c=c|0;return P(36,a|0,b|0,c|0)|0}function wt(a,b,c){a=a|0;b=b|0;c=c|0;return P(37,a|0,b|0,c|0)|0}function xt(a,b,c){a=a|0;b=b|0;c=c|0;return P(38,a|0,b|0,c|0)|0}function yt(a,b,c){a=a|0;b=b|0;c=c|0;return P(39,a|0,b|0,c|0)|0}function zt(a,b,c){a=a|0;b=b|0;c=c|0;return P(40,a|0,b|0,c|0)|0}function At(a,b,c){a=a|0;b=b|0;c=c|0;return P(41,a|0,b|0,c|0)|0}function Bt(a,b,c){a=a|0;b=b|0;c=c|0;return P(42,a|0,b|0,c|0)|0}function Ct(a,b,c){a=a|0;b=b|0;c=c|0;return P(43,a|0,b|0,c|0)|0}function Dt(a,b,c){a=a|0;b=b|0;c=c|0;return P(44,a|0,b|0,c|0)|0}function Et(a,b,c){a=a|0;b=b|0;c=c|0;return P(45,a|0,b|0,c|0)|0}function Ft(a,b,c){a=a|0;b=b|0;c=c|0;return P(46,a|0,b|0,c|0)|0}function Gt(a,b,c){a=a|0;b=b|0;c=c|0;return P(47,a|0,b|0,c|0)|0}function Ht(a,b,c){a=a|0;b=b|0;c=c|0;return P(48,a|0,b|0,c|0)|0}function It(a,b,c){a=a|0;b=b|0;c=c|0;return P(49,a|0,b|0,c|0)|0}function Jt(a,b,c){a=a|0;b=b|0;c=c|0;return P(50,a|0,b|0,c|0)|0}function Kt(a,b,c){a=a|0;b=b|0;c=c|0;return P(51,a|0,b|0,c|0)|0}function Lt(a,b,c){a=a|0;b=b|0;c=c|0;return P(52,a|0,b|0,c|0)|0}function Mt(a,b,c){a=a|0;b=b|0;c=c|0;return P(53,a|0,b|0,c|0)|0}function Nt(a,b,c){a=a|0;b=b|0;c=c|0;return P(54,a|0,b|0,c|0)|0}function Ot(a,b,c){a=a|0;b=b|0;c=c|0;return P(55,a|0,b|0,c|0)|0}function Pt(a,b,c){a=a|0;b=b|0;c=c|0;return P(56,a|0,b|0,c|0)|0}function Qt(a,b,c){a=a|0;b=b|0;c=c|0;return P(57,a|0,b|0,c|0)|0}function Rt(a,b,c){a=a|0;b=b|0;c=c|0;return P(58,a|0,b|0,c|0)|0}function St(a,b,c){a=a|0;b=b|0;c=c|0;return P(59,a|0,b|0,c|0)|0}function Tt(a,b,c){a=a|0;b=b|0;c=c|0;return P(60,a|0,b|0,c|0)|0}function Ut(a,b,c){a=a|0;b=b|0;c=c|0;return P(61,a|0,b|0,c|0)|0}function Vt(a,b,c){a=a|0;b=b|0;c=c|0;return P(62,a|0,b|0,c|0)|0}function Wt(a,b,c){a=a|0;b=b|0;c=c|0;return P(63,a|0,b|0,c|0)|0}function Xt(a,b,c){a=a|0;b=b|0;c=c|0;return P(64,a|0,b|0,c|0)|0}function Yt(a,b,c){a=a|0;b=b|0;c=c|0;return P(65,a|0,b|0,c|0)|0}function Zt(a,b,c){a=a|0;b=b|0;c=c|0;return P(66,a|0,b|0,c|0)|0}function _t(a,b,c){a=a|0;b=b|0;c=c|0;return P(67,a|0,b|0,c|0)|0}function $t(a,b,c){a=a|0;b=b|0;c=c|0;return P(68,a|0,b|0,c|0)|0}function au(a,b,c){a=a|0;b=b|0;c=c|0;return P(69,a|0,b|0,c|0)|0}function bu(a,b,c){a=a|0;b=b|0;c=c|0;return P(70,a|0,b|0,c|0)|0}function cu(a,b,c){a=a|0;b=b|0;c=c|0;return P(71,a|0,b|0,c|0)|0}function du(a,b,c){a=a|0;b=b|0;c=c|0;return P(72,a|0,b|0,c|0)|0}function eu(a,b,c){a=a|0;b=b|0;c=c|0;return P(73,a|0,b|0,c|0)|0}function fu(a,b,c){a=a|0;b=b|0;c=c|0;return P(74,a|0,b|0,c|0)|0}function gu(a,b,c){a=a|0;b=b|0;c=c|0;return P(75,a|0,b|0,c|0)|0}function hu(a,b,c){a=a|0;b=b|0;c=c|0;return P(76,a|0,b|0,c|0)|0}function iu(a,b,c){a=a|0;b=b|0;c=c|0;return P(77,a|0,b|0,c|0)|0}function ju(a,b,c){a=a|0;b=b|0;c=c|0;return P(78,a|0,b|0,c|0)|0}function ku(a,b,c){a=a|0;b=b|0;c=c|0;return P(79,a|0,b|0,c|0)|0}function lu(a,b,c){a=a|0;b=b|0;c=c|0;return P(80,a|0,b|0,c|0)|0}function mu(a,b,c){a=a|0;b=b|0;c=c|0;return P(81,a|0,b|0,c|0)|0}function nu(a,b,c){a=a|0;b=b|0;c=c|0;return P(82,a|0,b|0,c|0)|0}function ou(a,b,c){a=a|0;b=b|0;c=c|0;return P(83,a|0,b|0,c|0)|0}function pu(a,b,c){a=a|0;b=b|0;c=c|0;return P(84,a|0,b|0,c|0)|0}function qu(a,b,c){a=a|0;b=b|0;c=c|0;return P(85,a|0,b|0,c|0)|0}function ru(a,b,c){a=a|0;b=b|0;c=c|0;return P(86,a|0,b|0,c|0)|0}function su(a,b,c){a=a|0;b=b|0;c=c|0;return P(87,a|0,b|0,c|0)|0}function tu(a,b,c){a=a|0;b=b|0;c=c|0;return P(88,a|0,b|0,c|0)|0}function uu(a,b,c){a=a|0;b=b|0;c=c|0;return P(89,a|0,b|0,c|0)|0}function vu(a,b,c){a=a|0;b=b|0;c=c|0;return P(90,a|0,b|0,c|0)|0}function wu(a,b,c){a=a|0;b=b|0;c=c|0;return P(91,a|0,b|0,c|0)|0}function xu(a,b,c){a=a|0;b=b|0;c=c|0;return P(92,a|0,b|0,c|0)|0}function yu(a,b,c){a=a|0;b=b|0;c=c|0;return P(93,a|0,b|0,c|0)|0}function zu(a,b,c){a=a|0;b=b|0;c=c|0;return P(94,a|0,b|0,c|0)|0}function Au(a,b,c){a=a|0;b=b|0;c=c|0;return P(95,a|0,b|0,c|0)|0}function Bu(a,b,c){a=a|0;b=b|0;c=c|0;return P(96,a|0,b|0,c|0)|0}function Cu(a,b,c){a=a|0;b=b|0;c=c|0;return P(97,a|0,b|0,c|0)|0}function Du(a,b,c){a=a|0;b=b|0;c=c|0;return P(98,a|0,b|0,c|0)|0}function Eu(a,b,c){a=a|0;b=b|0;c=c|0;return P(99,a|0,b|0,c|0)|0}function Fu(a,b,c){a=a|0;b=b|0;c=c|0;return P(100,a|0,b|0,c|0)|0}function Gu(a,b,c){a=a|0;b=b|0;c=c|0;return P(101,a|0,b|0,c|0)|0}function Hu(a,b,c){a=a|0;b=b|0;c=c|0;return P(102,a|0,b|0,c|0)|0}function Iu(a,b,c){a=a|0;b=b|0;c=c|0;return P(103,a|0,b|0,c|0)|0}function Ju(a,b,c){a=a|0;b=b|0;c=c|0;return P(104,a|0,b|0,c|0)|0}function Ku(a,b,c){a=a|0;b=b|0;c=c|0;return P(105,a|0,b|0,c|0)|0}function Lu(a,b,c){a=a|0;b=b|0;c=c|0;return P(106,a|0,b|0,c|0)|0}function Mu(a,b,c){a=a|0;b=b|0;c=c|0;return P(107,a|0,b|0,c|0)|0}function Nu(a,b,c){a=a|0;b=b|0;c=c|0;return P(108,a|0,b|0,c|0)|0}function Ou(a,b,c){a=a|0;b=b|0;c=c|0;return P(109,a|0,b|0,c|0)|0}function Pu(a,b,c){a=a|0;b=b|0;c=c|0;return P(110,a|0,b|0,c|0)|0}function Qu(a,b,c){a=a|0;b=b|0;c=c|0;return P(111,a|0,b|0,c|0)|0}function Ru(a,b,c){a=a|0;b=b|0;c=c|0;return P(112,a|0,b|0,c|0)|0}function Su(a,b,c){a=a|0;b=b|0;c=c|0;return P(113,a|0,b|0,c|0)|0}function Tu(a,b,c){a=a|0;b=b|0;c=c|0;return P(114,a|0,b|0,c|0)|0}function Uu(a,b,c){a=a|0;b=b|0;c=c|0;return P(115,a|0,b|0,c|0)|0}function Vu(a,b,c){a=a|0;b=b|0;c=c|0;return P(116,a|0,b|0,c|0)|0}function Wu(a,b,c){a=a|0;b=b|0;c=c|0;return P(117,a|0,b|0,c|0)|0}function Xu(a,b,c){a=a|0;b=b|0;c=c|0;return P(118,a|0,b|0,c|0)|0}function Yu(a,b,c){a=a|0;b=b|0;c=c|0;return P(119,a|0,b|0,c|0)|0}function Zu(a,b,c){a=a|0;b=b|0;c=c|0;return P(120,a|0,b|0,c|0)|0}function _u(a,b,c){a=a|0;b=b|0;c=c|0;return P(121,a|0,b|0,c|0)|0}function $u(a,b,c){a=a|0;b=b|0;c=c|0;return P(122,a|0,b|0,c|0)|0}function av(a,b,c){a=a|0;b=b|0;c=c|0;return P(123,a|0,b|0,c|0)|0}function bv(a,b,c){a=a|0;b=b|0;c=c|0;return P(124,a|0,b|0,c|0)|0}function cv(a,b,c){a=a|0;b=b|0;c=c|0;return P(125,a|0,b|0,c|0)|0}function dv(a,b,c){a=a|0;b=b|0;c=c|0;return P(126,a|0,b|0,c|0)|0}function ev(a,b,c){a=a|0;b=b|0;c=c|0;return P(127,a|0,b|0,c|0)|0}function fv(a,b,c,d,e){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;return Wa[a&255](b|0,c|0,d|0,e|0)|0}function gv(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return Q(0,a|0,b|0,c|0,d|0)|0}function hv(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return Q(1,a|0,b|0,c|0,d|0)|0}function iv(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return Q(2,a|0,b|0,c|0,d|0)|0}function jv(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return Q(3,a|0,b|0,c|0,d|0)|0}function kv(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return Q(4,a|0,b|0,c|0,d|0)|0}function lv(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return Q(5,a|0,b|0,c|0,d|0)|0}function mv(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return Q(6,a|0,b|0,c|0,d|0)|0}function nv(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return Q(7,a|0,b|0,c|0,d|0)|0}function ov(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return Q(8,a|0,b|0,c|0,d|0)|0}function pv(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return Q(9,a|0,b|0,c|0,d|0)|0}function qv(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return Q(10,a|0,b|0,c|0,d|0)|0}function rv(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return Q(11,a|0,b|0,c|0,d|0)|0}function sv(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return Q(12,a|0,b|0,c|0,d|0)|0}function tv(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return Q(13,a|0,b|0,c|0,d|0)|0}function uv(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return Q(14,a|0,b|0,c|0,d|0)|0}function vv(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return Q(15,a|0,b|0,c|0,d|0)|0}function wv(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return Q(16,a|0,b|0,c|0,d|0)|0}function xv(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return Q(17,a|0,b|0,c|0,d|0)|0}function yv(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return Q(18,a|0,b|0,c|0,d|0)|0}function zv(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return Q(19,a|0,b|0,c|0,d|0)|0}function Av(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return Q(20,a|0,b|0,c|0,d|0)|0}function Bv(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return Q(21,a|0,b|0,c|0,d|0)|0}function Cv(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return Q(22,a|0,b|0,c|0,d|0)|0}function Dv(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return Q(23,a|0,b|0,c|0,d|0)|0}function Ev(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return Q(24,a|0,b|0,c|0,d|0)|0}function Fv(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return Q(25,a|0,b|0,c|0,d|0)|0}function Gv(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return Q(26,a|0,b|0,c|0,d|0)|0}function Hv(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return Q(27,a|0,b|0,c|0,d|0)|0}function Iv(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return Q(28,a|0,b|0,c|0,d|0)|0}function Jv(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return Q(29,a|0,b|0,c|0,d|0)|0}function Kv(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return Q(30,a|0,b|0,c|0,d|0)|0}function Lv(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return Q(31,a|0,b|0,c|0,d|0)|0}function Mv(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return Q(32,a|0,b|0,c|0,d|0)|0}function Nv(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return Q(33,a|0,b|0,c|0,d|0)|0}function Ov(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return Q(34,a|0,b|0,c|0,d|0)|0}function Pv(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return Q(35,a|0,b|0,c|0,d|0)|0}function Qv(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return Q(36,a|0,b|0,c|0,d|0)|0}function Rv(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return Q(37,a|0,b|0,c|0,d|0)|0}function Sv(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return Q(38,a|0,b|0,c|0,d|0)|0}function Tv(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return Q(39,a|0,b|0,c|0,d|0)|0}function Uv(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return Q(40,a|0,b|0,c|0,d|0)|0}function Vv(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return Q(41,a|0,b|0,c|0,d|0)|0}function Wv(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return Q(42,a|0,b|0,c|0,d|0)|0}function Xv(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return Q(43,a|0,b|0,c|0,d|0)|0}function Yv(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return Q(44,a|0,b|0,c|0,d|0)|0}function Zv(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return Q(45,a|0,b|0,c|0,d|0)|0}function _v(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return Q(46,a|0,b|0,c|0,d|0)|0}function $v(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return Q(47,a|0,b|0,c|0,d|0)|0}function aw(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return Q(48,a|0,b|0,c|0,d|0)|0}function bw(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return Q(49,a|0,b|0,c|0,d|0)|0}function cw(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return Q(50,a|0,b|0,c|0,d|0)|0}function dw(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return Q(51,a|0,b|0,c|0,d|0)|0}function ew(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return Q(52,a|0,b|0,c|0,d|0)|0}function fw(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return Q(53,a|0,b|0,c|0,d|0)|0}function gw(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return Q(54,a|0,b|0,c|0,d|0)|0}function hw(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return Q(55,a|0,b|0,c|0,d|0)|0}function iw(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return Q(56,a|0,b|0,c|0,d|0)|0}function jw(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return Q(57,a|0,b|0,c|0,d|0)|0}function kw(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return Q(58,a|0,b|0,c|0,d|0)|0}function lw(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return Q(59,a|0,b|0,c|0,d|0)|0}function mw(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return Q(60,a|0,b|0,c|0,d|0)|0}function nw(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return Q(61,a|0,b|0,c|0,d|0)|0}function ow(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return Q(62,a|0,b|0,c|0,d|0)|0}function pw(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return Q(63,a|0,b|0,c|0,d|0)|0}function qw(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return Q(64,a|0,b|0,c|0,d|0)|0}function rw(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return Q(65,a|0,b|0,c|0,d|0)|0}function sw(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return Q(66,a|0,b|0,c|0,d|0)|0}function tw(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return Q(67,a|0,b|0,c|0,d|0)|0}function uw(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return Q(68,a|0,b|0,c|0,d|0)|0}function vw(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return Q(69,a|0,b|0,c|0,d|0)|0}function ww(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return Q(70,a|0,b|0,c|0,d|0)|0}function xw(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return Q(71,a|0,b|0,c|0,d|0)|0}function yw(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return Q(72,a|0,b|0,c|0,d|0)|0}function zw(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return Q(73,a|0,b|0,c|0,d|0)|0}function Aw(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return Q(74,a|0,b|0,c|0,d|0)|0}function Bw(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return Q(75,a|0,b|0,c|0,d|0)|0}function Cw(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return Q(76,a|0,b|0,c|0,d|0)|0}function Dw(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return Q(77,a|0,b|0,c|0,d|0)|0}function Ew(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return Q(78,a|0,b|0,c|0,d|0)|0}function Fw(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return Q(79,a|0,b|0,c|0,d|0)|0}function Gw(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return Q(80,a|0,b|0,c|0,d|0)|0}function Hw(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return Q(81,a|0,b|0,c|0,d|0)|0}function Iw(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return Q(82,a|0,b|0,c|0,d|0)|0}function Jw(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return Q(83,a|0,b|0,c|0,d|0)|0}function Kw(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return Q(84,a|0,b|0,c|0,d|0)|0}function Lw(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return Q(85,a|0,b|0,c|0,d|0)|0}function Mw(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return Q(86,a|0,b|0,c|0,d|0)|0}function Nw(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return Q(87,a|0,b|0,c|0,d|0)|0}function Ow(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return Q(88,a|0,b|0,c|0,d|0)|0}function Pw(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return Q(89,a|0,b|0,c|0,d|0)|0}function Qw(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return Q(90,a|0,b|0,c|0,d|0)|0}function Rw(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return Q(91,a|0,b|0,c|0,d|0)|0}function Sw(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return Q(92,a|0,b|0,c|0,d|0)|0}function Tw(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return Q(93,a|0,b|0,c|0,d|0)|0}function Uw(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return Q(94,a|0,b|0,c|0,d|0)|0}function Vw(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return Q(95,a|0,b|0,c|0,d|0)|0}function Ww(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return Q(96,a|0,b|0,c|0,d|0)|0}function Xw(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return Q(97,a|0,b|0,c|0,d|0)|0}function Yw(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return Q(98,a|0,b|0,c|0,d|0)|0}function Zw(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return Q(99,a|0,b|0,c|0,d|0)|0}function _w(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return Q(100,a|0,b|0,c|0,d|0)|0}function $w(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return Q(101,a|0,b|0,c|0,d|0)|0}function ax(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return Q(102,a|0,b|0,c|0,d|0)|0}function bx(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return Q(103,a|0,b|0,c|0,d|0)|0}function cx(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return Q(104,a|0,b|0,c|0,d|0)|0}function dx(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return Q(105,a|0,b|0,c|0,d|0)|0}function ex(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return Q(106,a|0,b|0,c|0,d|0)|0}function fx(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return Q(107,a|0,b|0,c|0,d|0)|0}function gx(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return Q(108,a|0,b|0,c|0,d|0)|0}function hx(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return Q(109,a|0,b|0,c|0,d|0)|0}function ix(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return Q(110,a|0,b|0,c|0,d|0)|0}function jx(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return Q(111,a|0,b|0,c|0,d|0)|0}function kx(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return Q(112,a|0,b|0,c|0,d|0)|0}function lx(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return Q(113,a|0,b|0,c|0,d|0)|0}function mx(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return Q(114,a|0,b|0,c|0,d|0)|0}function nx(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return Q(115,a|0,b|0,c|0,d|0)|0}function ox(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return Q(116,a|0,b|0,c|0,d|0)|0}function px(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return Q(117,a|0,b|0,c|0,d|0)|0}function qx(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return Q(118,a|0,b|0,c|0,d|0)|0}function rx(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return Q(119,a|0,b|0,c|0,d|0)|0}function sx(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return Q(120,a|0,b|0,c|0,d|0)|0}function tx(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return Q(121,a|0,b|0,c|0,d|0)|0}function ux(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return Q(122,a|0,b|0,c|0,d|0)|0}function vx(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return Q(123,a|0,b|0,c|0,d|0)|0}function wx(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return Q(124,a|0,b|0,c|0,d|0)|0}function xx(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return Q(125,a|0,b|0,c|0,d|0)|0}function yx(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return Q(126,a|0,b|0,c|0,d|0)|0}function zx(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return Q(127,a|0,b|0,c|0,d|0)|0}function Ax(a,b,c){a=a|0;b=b|0;c=c|0;Xa[a&255](b|0,c|0)}function Bx(a,b){a=a|0;b=b|0;R(0,a|0,b|0)}function Cx(a,b){a=a|0;b=b|0;R(1,a|0,b|0)}function Dx(a,b){a=a|0;b=b|0;R(2,a|0,b|0)}function Ex(a,b){a=a|0;b=b|0;R(3,a|0,b|0)}function Fx(a,b){a=a|0;b=b|0;R(4,a|0,b|0)}function Gx(a,b){a=a|0;b=b|0;R(5,a|0,b|0)}function Hx(a,b){a=a|0;b=b|0;R(6,a|0,b|0)}function Ix(a,b){a=a|0;b=b|0;R(7,a|0,b|0)}function Jx(a,b){a=a|0;b=b|0;R(8,a|0,b|0)}function Kx(a,b){a=a|0;b=b|0;R(9,a|0,b|0)}function Lx(a,b){a=a|0;b=b|0;R(10,a|0,b|0)}function Mx(a,b){a=a|0;b=b|0;R(11,a|0,b|0)}function Nx(a,b){a=a|0;b=b|0;R(12,a|0,b|0)}function Ox(a,b){a=a|0;b=b|0;R(13,a|0,b|0)}function Px(a,b){a=a|0;b=b|0;R(14,a|0,b|0)}function Qx(a,b){a=a|0;b=b|0;R(15,a|0,b|0)}function Rx(a,b){a=a|0;b=b|0;R(16,a|0,b|0)}function Sx(a,b){a=a|0;b=b|0;R(17,a|0,b|0)}function Tx(a,b){a=a|0;b=b|0;R(18,a|0,b|0)}function Ux(a,b){a=a|0;b=b|0;R(19,a|0,b|0)}function Vx(a,b){a=a|0;b=b|0;R(20,a|0,b|0)}function Wx(a,b){a=a|0;b=b|0;R(21,a|0,b|0)}function Xx(a,b){a=a|0;b=b|0;R(22,a|0,b|0)}function Yx(a,b){a=a|0;b=b|0;R(23,a|0,b|0)}function Zx(a,b){a=a|0;b=b|0;R(24,a|0,b|0)}function _x(a,b){a=a|0;b=b|0;R(25,a|0,b|0)}function $x(a,b){a=a|0;b=b|0;R(26,a|0,b|0)}function ay(a,b){a=a|0;b=b|0;R(27,a|0,b|0)}function by(a,b){a=a|0;b=b|0;R(28,a|0,b|0)}function cy(a,b){a=a|0;b=b|0;R(29,a|0,b|0)}function dy(a,b){a=a|0;b=b|0;R(30,a|0,b|0)}function ey(a,b){a=a|0;b=b|0;R(31,a|0,b|0)}function fy(a,b){a=a|0;b=b|0;R(32,a|0,b|0)}function gy(a,b){a=a|0;b=b|0;R(33,a|0,b|0)}function hy(a,b){a=a|0;b=b|0;R(34,a|0,b|0)}function iy(a,b){a=a|0;b=b|0;R(35,a|0,b|0)}function jy(a,b){a=a|0;b=b|0;R(36,a|0,b|0)}function ky(a,b){a=a|0;b=b|0;R(37,a|0,b|0)}function ly(a,b){a=a|0;b=b|0;R(38,a|0,b|0)}function my(a,b){a=a|0;b=b|0;R(39,a|0,b|0)}function ny(a,b){a=a|0;b=b|0;R(40,a|0,b|0)}function oy(a,b){a=a|0;b=b|0;R(41,a|0,b|0)}function py(a,b){a=a|0;b=b|0;R(42,a|0,b|0)}function qy(a,b){a=a|0;b=b|0;R(43,a|0,b|0)}function ry(a,b){a=a|0;b=b|0;R(44,a|0,b|0)}function sy(a,b){a=a|0;b=b|0;R(45,a|0,b|0)}function ty(a,b){a=a|0;b=b|0;R(46,a|0,b|0)}function uy(a,b){a=a|0;b=b|0;R(47,a|0,b|0)}function vy(a,b){a=a|0;b=b|0;R(48,a|0,b|0)}function wy(a,b){a=a|0;b=b|0;R(49,a|0,b|0)}function xy(a,b){a=a|0;b=b|0;R(50,a|0,b|0)}function yy(a,b){a=a|0;b=b|0;R(51,a|0,b|0)}function zy(a,b){a=a|0;b=b|0;R(52,a|0,b|0)}function Ay(a,b){a=a|0;b=b|0;R(53,a|0,b|0)}function By(a,b){a=a|0;b=b|0;R(54,a|0,b|0)}function Cy(a,b){a=a|0;b=b|0;R(55,a|0,b|0)}function Dy(a,b){a=a|0;b=b|0;R(56,a|0,b|0)}function Ey(a,b){a=a|0;b=b|0;R(57,a|0,b|0)}function Fy(a,b){a=a|0;b=b|0;R(58,a|0,b|0)}function Gy(a,b){a=a|0;b=b|0;R(59,a|0,b|0)}function Hy(a,b){a=a|0;b=b|0;R(60,a|0,b|0)}function Iy(a,b){a=a|0;b=b|0;R(61,a|0,b|0)}function Jy(a,b){a=a|0;b=b|0;R(62,a|0,b|0)}function Ky(a,b){a=a|0;b=b|0;R(63,a|0,b|0)}function Ly(a,b){a=a|0;b=b|0;R(64,a|0,b|0)}function My(a,b){a=a|0;b=b|0;R(65,a|0,b|0)}function Ny(a,b){a=a|0;b=b|0;R(66,a|0,b|0)}function Oy(a,b){a=a|0;b=b|0;R(67,a|0,b|0)}function Py(a,b){a=a|0;b=b|0;R(68,a|0,b|0)}function Qy(a,b){a=a|0;b=b|0;R(69,a|0,b|0)}function Ry(a,b){a=a|0;b=b|0;R(70,a|0,b|0)}function Sy(a,b){a=a|0;b=b|0;R(71,a|0,b|0)}function Ty(a,b){a=a|0;b=b|0;R(72,a|0,b|0)}function Uy(a,b){a=a|0;b=b|0;R(73,a|0,b|0)}function Vy(a,b){a=a|0;b=b|0;R(74,a|0,b|0)}function Wy(a,b){a=a|0;b=b|0;R(75,a|0,b|0)}function Xy(a,b){a=a|0;b=b|0;R(76,a|0,b|0)}function Yy(a,b){a=a|0;b=b|0;R(77,a|0,b|0)}function Zy(a,b){a=a|0;b=b|0;R(78,a|0,b|0)}function _y(a,b){a=a|0;b=b|0;R(79,a|0,b|0)}function $y(a,b){a=a|0;b=b|0;R(80,a|0,b|0)}function az(a,b){a=a|0;b=b|0;R(81,a|0,b|0)}function bz(a,b){a=a|0;b=b|0;R(82,a|0,b|0)}function cz(a,b){a=a|0;b=b|0;R(83,a|0,b|0)}function dz(a,b){a=a|0;b=b|0;R(84,a|0,b|0)}function ez(a,b){a=a|0;b=b|0;R(85,a|0,b|0)}function fz(a,b){a=a|0;b=b|0;R(86,a|0,b|0)}function gz(a,b){a=a|0;b=b|0;R(87,a|0,b|0)}function hz(a,b){a=a|0;b=b|0;R(88,a|0,b|0)}function iz(a,b){a=a|0;b=b|0;R(89,a|0,b|0)}function jz(a,b){a=a|0;b=b|0;R(90,a|0,b|0)}function kz(a,b){a=a|0;b=b|0;R(91,a|0,b|0)}function lz(a,b){a=a|0;b=b|0;R(92,a|0,b|0)}function mz(a,b){a=a|0;b=b|0;R(93,a|0,b|0)}function nz(a,b){a=a|0;b=b|0;R(94,a|0,b|0)}function oz(a,b){a=a|0;b=b|0;R(95,a|0,b|0)}function pz(a,b){a=a|0;b=b|0;R(96,a|0,b|0)}function qz(a,b){a=a|0;b=b|0;R(97,a|0,b|0)}function rz(a,b){a=a|0;b=b|0;R(98,a|0,b|0)}function sz(a,b){a=a|0;b=b|0;R(99,a|0,b|0)}function tz(a,b){a=a|0;b=b|0;R(100,a|0,b|0)}function uz(a,b){a=a|0;b=b|0;R(101,a|0,b|0)}function vz(a,b){a=a|0;b=b|0;R(102,a|0,b|0)}function wz(a,b){a=a|0;b=b|0;R(103,a|0,b|0)}function xz(a,b){a=a|0;b=b|0;R(104,a|0,b|0)}function yz(a,b){a=a|0;b=b|0;R(105,a|0,b|0)}function zz(a,b){a=a|0;b=b|0;R(106,a|0,b|0)}function Az(a,b){a=a|0;b=b|0;R(107,a|0,b|0)}function Bz(a,b){a=a|0;b=b|0;R(108,a|0,b|0)}function Cz(a,b){a=a|0;b=b|0;R(109,a|0,b|0)}function Dz(a,b){a=a|0;b=b|0;R(110,a|0,b|0)}function Ez(a,b){a=a|0;b=b|0;R(111,a|0,b|0)}function Fz(a,b){a=a|0;b=b|0;R(112,a|0,b|0)}function Gz(a,b){a=a|0;b=b|0;R(113,a|0,b|0)}function Hz(a,b){a=a|0;b=b|0;R(114,a|0,b|0)}function Iz(a,b){a=a|0;b=b|0;R(115,a|0,b|0)}function Jz(a,b){a=a|0;b=b|0;R(116,a|0,b|0)}function Kz(a,b){a=a|0;b=b|0;R(117,a|0,b|0)}function Lz(a,b){a=a|0;b=b|0;R(118,a|0,b|0)}function Mz(a,b){a=a|0;b=b|0;R(119,a|0,b|0)}function Nz(a,b){a=a|0;b=b|0;R(120,a|0,b|0)}function Oz(a,b){a=a|0;b=b|0;R(121,a|0,b|0)}function Pz(a,b){a=a|0;b=b|0;R(122,a|0,b|0)}function Qz(a,b){a=a|0;b=b|0;R(123,a|0,b|0)}function Rz(a,b){a=a|0;b=b|0;R(124,a|0,b|0)}function Sz(a,b){a=a|0;b=b|0;R(125,a|0,b|0)}function Tz(a,b){a=a|0;b=b|0;R(126,a|0,b|0)}function Uz(a,b){a=a|0;b=b|0;R(127,a|0,b|0)}function Vz(a){a=a|0;J(0);return 0}function Wz(a,b){a=a|0;b=b|0;J(1);return 0}function Xz(a,b,c){a=a|0;b=b|0;c=c|0;J(2);return 0}function Yz(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;J(3);return 0}function Zz(a,b){a=a|0;b=b|0;J(4)}

// EMSCRIPTEN_END_FUNCS
var Ta=[Vz,Yn,Zn,_n,$n,ao,bo,co,eo,fo,go,ho,io,jo,ko,lo,mo,no,oo,po,qo,ro,so,to,uo,vo,wo,xo,yo,zo,Ao,Bo,Co,Do,Eo,Fo,Go,Ho,Io,Jo,Ko,Lo,Mo,No,Oo,Po,Qo,Ro,So,To,Uo,Vo,Wo,Xo,Yo,Zo,_o,$o,ap,bp,cp,dp,ep,fp,gp,hp,ip,jp,kp,lp,mp,np,op,pp,qp,rp,sp,tp,up,vp,wp,xp,yp,zp,Ap,Bp,Cp,Dp,Ep,Fp,Gp,Hp,Ip,Jp,Kp,Lp,Mp,Np,Op,Pp,Qp,Rp,Sp,Tp,Up,Vp,Wp,Xp,Yp,Zp,_p,$p,aq,bq,cq,dq,eq,fq,gq,hq,iq,jq,kq,lq,mq,nq,oq,pq,qq,lg,mg,mh,nh,oh,ph,qh,rh,sh,th,uh,vh,wh,xh,yh,zh,Ah,Bh,Ch,Dh,Eh,Fh,Gh,Hh,Oh,Ph,Qh,Rh,Sh,Th,Uh,Vh,Wh,Xh,Yh,Zh,$h,ai,bi,ci,di,ei,ii,ji,ki,li,mi,ni,oi,pi,qi,ri,si,ti,ui,vi,wi,xi,Bi,Pi,Qi,Ri,Si,Ti,Ui,Vi,Wi,Xi,Yi,Ci,Di,Ei,Fi,Gi,Hi,Ii,Ji,bj,cj,dj,ej,fj,gj,hj,ij,jj,kj,lj,mj,nj,oj,pj,qj,rj,sj,tj,uj,vj,wj,xj,yj,zj,Aj,Bj,Cj,Ej,Fj,Gj,Hj,Ij,Jj,Kj,Lj,Mj,Nj,Oj,Qj,Rj,Sj,Tj,Uj,Vj,Wj,Xj,Yj,Zj,_j,$j,ak,bk,jk,kk,lk,mk,nk,ok,pk,Ek,Fk,Gk,zk,Ak,Mk,ig,lh,sk,_h,ik,zi,Dj,Pj,Nh,aj,hi,kg,Mh,Lh,Ih,fi,Ai,Oi,Zi,_i,gk,tk,uk,vk,wk,xk,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz,Vz];var Ua=[Wz,sq,tq,uq,vq,wq,xq,yq,zq,Aq,Bq,Cq,Dq,Eq,Fq,Gq,Hq,Iq,Jq,Kq,Lq,Mq,Nq,Oq,Pq,Qq,Rq,Sq,Tq,Uq,Vq,Wq,Xq,Yq,Zq,_q,$q,ar,br,cr,dr,er,fr,gr,hr,ir,jr,kr,lr,mr,nr,or,pr,qr,rr,sr,tr,ur,vr,wr,xr,yr,zr,Ar,Br,Cr,Dr,Er,Fr,Gr,Hr,Ir,Jr,Kr,Lr,Mr,Nr,Or,Pr,Qr,Rr,Sr,Tr,Ur,Vr,Wr,Xr,Yr,Zr,_r,$r,as,bs,cs,ds,es,fs,gs,hs,is,js,ks,ls,ms,ns,os,ps,qs,rs,ss,ts,us,vs,ws,xs,ys,zs,As,Bs,Cs,Ds,Es,Fs,Gs,Hs,Is,Js,Ks,Ls,se,Wz,Wz,Wz,Wz,Wz,Wz,Wz,Wz,Wz,Wz,Wz,Wz,Wz,Wz,Wz,Wz,Wz,Wz,Wz,Wz,Wz,Wz,Wz,Wz,Wz,Wz,Wz,Wz,Wz,Wz,Wz,Wz,Wz,Wz,Wz,Wz,Wz,Wz,Wz,Wz,Wz,Wz,Wz,Wz,Wz,Wz,Wz,Wz,Wz,Wz,Wz,Wz,Wz,Wz,Wz,Wz,Wz,Wz,Wz,Wz,Wz,Wz,Wz,Wz,Wz,Wz,Wz,Wz,Wz,Wz,Wz,Wz,Wz,Wz,Wz,Wz,Wz,Wz,Wz,Wz,Wz,Wz,Wz,Wz,Wz,Wz,Wz,Wz,Wz,Wz,Wz,Wz,Wz,Wz,Wz,Wz,Wz,Wz,Wz,Wz,Wz,Wz,Wz,Wz,Wz,Wz,Wz,Wz,Wz,Wz,Wz,Wz,Wz,Wz,Wz,Wz,Wz,Wz,Wz,Wz,Wz,Wz,Wz,Wz,Wz,Wz];var Va=[Xz,Ns,Os,Ps,Qs,Rs,Ss,Ts,Us,Vs,Ws,Xs,Ys,Zs,_s,$s,at,bt,ct,dt,et,ft,gt,ht,it,jt,kt,lt,mt,nt,ot,pt,qt,rt,st,tt,ut,vt,wt,xt,yt,zt,At,Bt,Ct,Dt,Et,Ft,Gt,Ht,It,Jt,Kt,Lt,Mt,Nt,Ot,Pt,Qt,Rt,St,Tt,Ut,Vt,Wt,Xt,Yt,Zt,_t,$t,au,bu,cu,du,eu,fu,gu,hu,iu,ju,ku,lu,mu,nu,ou,pu,qu,ru,su,tu,uu,vu,wu,xu,yu,zu,Au,Bu,Cu,Du,Eu,Fu,Gu,Hu,Iu,Ju,Ku,Lu,Mu,Nu,Ou,Pu,Qu,Ru,Su,Tu,Uu,Vu,Wu,Xu,Yu,Zu,_u,$u,av,bv,cv,dv,ev,Nk,Ok,Tk,Rk,vl,Uf,Wf,Kh,Xz,Xz,Xz,Xz,Xz,Xz,Xz,Xz,Xz,Xz,Xz,Xz,Xz,Xz,Xz,Xz,Xz,Xz,Xz,Xz,Xz,Xz,Xz,Xz,Xz,Xz,Xz,Xz,Xz,Xz,Xz,Xz,Xz,Xz,Xz,Xz,Xz,Xz,Xz,Xz,Xz,Xz,Xz,Xz,Xz,Xz,Xz,Xz,Xz,Xz,Xz,Xz,Xz,Xz,Xz,Xz,Xz,Xz,Xz,Xz,Xz,Xz,Xz,Xz,Xz,Xz,Xz,Xz,Xz,Xz,Xz,Xz,Xz,Xz,Xz,Xz,Xz,Xz,Xz,Xz,Xz,Xz,Xz,Xz,Xz,Xz,Xz,Xz,Xz,Xz,Xz,Xz,Xz,Xz,Xz,Xz,Xz,Xz,Xz,Xz,Xz,Xz,Xz,Xz,Xz,Xz,Xz,Xz,Xz,Xz,Xz,Xz,Xz,Xz,Xz,Xz,Xz,Xz,Xz];var Wa=[Yz,gv,hv,iv,jv,kv,lv,mv,nv,ov,pv,qv,rv,sv,tv,uv,vv,wv,xv,yv,zv,Av,Bv,Cv,Dv,Ev,Fv,Gv,Hv,Iv,Jv,Kv,Lv,Mv,Nv,Ov,Pv,Qv,Rv,Sv,Tv,Uv,Vv,Wv,Xv,Yv,Zv,_v,$v,aw,bw,cw,dw,ew,fw,gw,hw,iw,jw,kw,lw,mw,nw,ow,pw,qw,rw,sw,tw,uw,vw,ww,xw,yw,zw,Aw,Bw,Cw,Dw,Ew,Fw,Gw,Hw,Iw,Jw,Kw,Lw,Mw,Nw,Ow,Pw,Qw,Rw,Sw,Tw,Uw,Vw,Ww,Xw,Yw,Zw,_w,$w,ax,bx,cx,dx,ex,fx,gx,hx,ix,jx,kx,lx,mx,nx,ox,px,qx,rx,sx,tx,ux,vx,wx,xx,yx,zx,hg,hk,Yz,Yz,Yz,Yz,Yz,Yz,Yz,Yz,Yz,Yz,Yz,Yz,Yz,Yz,Yz,Yz,Yz,Yz,Yz,Yz,Yz,Yz,Yz,Yz,Yz,Yz,Yz,Yz,Yz,Yz,Yz,Yz,Yz,Yz,Yz,Yz,Yz,Yz,Yz,Yz,Yz,Yz,Yz,Yz,Yz,Yz,Yz,Yz,Yz,Yz,Yz,Yz,Yz,Yz,Yz,Yz,Yz,Yz,Yz,Yz,Yz,Yz,Yz,Yz,Yz,Yz,Yz,Yz,Yz,Yz,Yz,Yz,Yz,Yz,Yz,Yz,Yz,Yz,Yz,Yz,Yz,Yz,Yz,Yz,Yz,Yz,Yz,Yz,Yz,Yz,Yz,Yz,Yz,Yz,Yz,Yz,Yz,Yz,Yz,Yz,Yz,Yz,Yz,Yz,Yz,Yz,Yz,Yz,Yz,Yz,Yz,Yz,Yz,Yz,Yz,Yz,Yz,Yz,Yz,Yz,Yz,Yz,Yz,Yz,Yz];var Xa=[Zz,Bx,Cx,Dx,Ex,Fx,Gx,Hx,Ix,Jx,Kx,Lx,Mx,Nx,Ox,Px,Qx,Rx,Sx,Tx,Ux,Vx,Wx,Xx,Yx,Zx,_x,$x,ay,by,cy,dy,ey,fy,gy,hy,iy,jy,ky,ly,my,ny,oy,py,qy,ry,sy,ty,uy,vy,wy,xy,yy,zy,Ay,By,Cy,Dy,Ey,Fy,Gy,Hy,Iy,Jy,Ky,Ly,My,Ny,Oy,Py,Qy,Ry,Sy,Ty,Uy,Vy,Wy,Xy,Yy,Zy,_y,$y,az,bz,cz,dz,ez,fz,gz,hz,iz,jz,kz,lz,mz,nz,oz,pz,qz,rz,sz,tz,uz,vz,wz,xz,yz,zz,Az,Bz,Cz,Dz,Ez,Fz,Gz,Hz,Iz,Jz,Kz,Lz,Mz,Nz,Oz,Pz,Qz,Rz,Sz,Tz,Uz,bb,fc,Tc,Uc,Zc,Bd,te,yi,Zz,Zz,Zz,Zz,Zz,Zz,Zz,Zz,Zz,Zz,Zz,Zz,Zz,Zz,Zz,Zz,Zz,Zz,Zz,Zz,Zz,Zz,Zz,Zz,Zz,Zz,Zz,Zz,Zz,Zz,Zz,Zz,Zz,Zz,Zz,Zz,Zz,Zz,Zz,Zz,Zz,Zz,Zz,Zz,Zz,Zz,Zz,Zz,Zz,Zz,Zz,Zz,Zz,Zz,Zz,Zz,Zz,Zz,Zz,Zz,Zz,Zz,Zz,Zz,Zz,Zz,Zz,Zz,Zz,Zz,Zz,Zz,Zz,Zz,Zz,Zz,Zz,Zz,Zz,Zz,Zz,Zz,Zz,Zz,Zz,Zz,Zz,Zz,Zz,Zz,Zz,Zz,Zz,Zz,Zz,Zz,Zz,Zz,Zz,Zz,Zz,Zz,Zz,Zz,Zz,Zz,Zz,Zz,Zz,Zz,Zz,Zz,Zz,Zz,Zz,Zz,Zz,Zz,Zz];return{___emscripten_environ_constructor:Bn,___muldi3:Hn,___udivdi3:Mn,__get_daylight:Dn,__get_environ:Fn,__get_timezone:En,__get_tzname:Cn,_bitshift64Ashr:Nn,_bitshift64Lshr:On,_bitshift64Shl:Pn,_emscripten_replace_memory:Sa,_free:Ik,_i64Add:In,_i64Subtract:Jn,_llvm_bswap_i32:Qn,_luaL_getmetafield:Xf,_luaL_loadbufferx:Vf,_luaL_newstate:gg,_luaL_openlibs:jg,_lua_close:ve,_lua_createtable:Ub,_lua_getglobal:Pb,_lua_gettop:gb,_lua_iscfunction:pb,_lua_next:lc,_lua_pcallk:ec,_lua_pushboolean:Mb,_lua_pushcclosure:Lb,_lua_pushnil:Db,_lua_pushnumber:Eb,_lua_pushstring:Ib,_lua_pushvalue:mb,_lua_rawget:Sb,_lua_rawlen:zb,_lua_rawset:_b,_lua_setglobal:Xb,_lua_setmetatable:ac,_lua_settop:hb,_lua_toboolean:xb,_lua_tolstring:yb,_lua_tonumberx:ub,_lua_topointer:Cb,_lua_type:nb,_lua_typename:ob,_malloc:Hk,_memcpy:Un,_memset:Vn,_realloc:Jk,_saveSetjmp:Rn,_sbrk:Wn,_setThrew:Tn,_testSetjmp:Sn,dynCall_ii:Xn,dynCall_iii:rq,dynCall_iiii:Ms,dynCall_iiiii:fv,dynCall_vii:Ax,establishStackSpace:$a,stackAlloc:Ya,stackRestore:_a,stackSave:Za}})


// EMSCRIPTEN_END_ASM
(asmGlobalArg, asmLibraryArg, buffer);

var ___emscripten_environ_constructor = Module["___emscripten_environ_constructor"] = asm["___emscripten_environ_constructor"];

var ___muldi3 = Module["___muldi3"] = asm["___muldi3"];

var ___udivdi3 = Module["___udivdi3"] = asm["___udivdi3"];

var __get_daylight = Module["__get_daylight"] = asm["__get_daylight"];

var __get_environ = Module["__get_environ"] = asm["__get_environ"];

var __get_timezone = Module["__get_timezone"] = asm["__get_timezone"];

var __get_tzname = Module["__get_tzname"] = asm["__get_tzname"];

var _bitshift64Ashr = Module["_bitshift64Ashr"] = asm["_bitshift64Ashr"];

var _bitshift64Lshr = Module["_bitshift64Lshr"] = asm["_bitshift64Lshr"];

var _bitshift64Shl = Module["_bitshift64Shl"] = asm["_bitshift64Shl"];

var _emscripten_replace_memory = Module["_emscripten_replace_memory"] = asm["_emscripten_replace_memory"];

var _free = Module["_free"] = asm["_free"];

var _i64Add = Module["_i64Add"] = asm["_i64Add"];

var _i64Subtract = Module["_i64Subtract"] = asm["_i64Subtract"];

var _llvm_bswap_i32 = Module["_llvm_bswap_i32"] = asm["_llvm_bswap_i32"];

var _luaL_getmetafield = Module["_luaL_getmetafield"] = asm["_luaL_getmetafield"];

var _luaL_loadbufferx = Module["_luaL_loadbufferx"] = asm["_luaL_loadbufferx"];

var _luaL_newstate = Module["_luaL_newstate"] = asm["_luaL_newstate"];

var _luaL_openlibs = Module["_luaL_openlibs"] = asm["_luaL_openlibs"];

var _lua_close = Module["_lua_close"] = asm["_lua_close"];

var _lua_createtable = Module["_lua_createtable"] = asm["_lua_createtable"];

var _lua_getglobal = Module["_lua_getglobal"] = asm["_lua_getglobal"];

var _lua_gettop = Module["_lua_gettop"] = asm["_lua_gettop"];

var _lua_iscfunction = Module["_lua_iscfunction"] = asm["_lua_iscfunction"];

var _lua_next = Module["_lua_next"] = asm["_lua_next"];

var _lua_pcallk = Module["_lua_pcallk"] = asm["_lua_pcallk"];

var _lua_pushboolean = Module["_lua_pushboolean"] = asm["_lua_pushboolean"];

var _lua_pushcclosure = Module["_lua_pushcclosure"] = asm["_lua_pushcclosure"];

var _lua_pushnil = Module["_lua_pushnil"] = asm["_lua_pushnil"];

var _lua_pushnumber = Module["_lua_pushnumber"] = asm["_lua_pushnumber"];

var _lua_pushstring = Module["_lua_pushstring"] = asm["_lua_pushstring"];

var _lua_pushvalue = Module["_lua_pushvalue"] = asm["_lua_pushvalue"];

var _lua_rawget = Module["_lua_rawget"] = asm["_lua_rawget"];

var _lua_rawlen = Module["_lua_rawlen"] = asm["_lua_rawlen"];

var _lua_rawset = Module["_lua_rawset"] = asm["_lua_rawset"];

var _lua_setglobal = Module["_lua_setglobal"] = asm["_lua_setglobal"];

var _lua_setmetatable = Module["_lua_setmetatable"] = asm["_lua_setmetatable"];

var _lua_settop = Module["_lua_settop"] = asm["_lua_settop"];

var _lua_toboolean = Module["_lua_toboolean"] = asm["_lua_toboolean"];

var _lua_tolstring = Module["_lua_tolstring"] = asm["_lua_tolstring"];

var _lua_tonumberx = Module["_lua_tonumberx"] = asm["_lua_tonumberx"];

var _lua_topointer = Module["_lua_topointer"] = asm["_lua_topointer"];

var _lua_type = Module["_lua_type"] = asm["_lua_type"];

var _lua_typename = Module["_lua_typename"] = asm["_lua_typename"];

var _malloc = Module["_malloc"] = asm["_malloc"];

var _memcpy = Module["_memcpy"] = asm["_memcpy"];

var _memset = Module["_memset"] = asm["_memset"];

var _realloc = Module["_realloc"] = asm["_realloc"];

var _saveSetjmp = Module["_saveSetjmp"] = asm["_saveSetjmp"];

var _sbrk = Module["_sbrk"] = asm["_sbrk"];

var _setThrew = Module["_setThrew"] = asm["_setThrew"];

var _testSetjmp = Module["_testSetjmp"] = asm["_testSetjmp"];

var establishStackSpace = Module["establishStackSpace"] = asm["establishStackSpace"];

var stackAlloc = Module["stackAlloc"] = asm["stackAlloc"];

var stackRestore = Module["stackRestore"] = asm["stackRestore"];

var stackSave = Module["stackSave"] = asm["stackSave"];

var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];

var dynCall_iii = Module["dynCall_iii"] = asm["dynCall_iii"];

var dynCall_iiii = Module["dynCall_iiii"] = asm["dynCall_iiii"];

var dynCall_iiiii = Module["dynCall_iiiii"] = asm["dynCall_iiiii"];

var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];

Module["asm"] = asm;

if (memoryInitializer) {
 if (!isDataURI(memoryInitializer)) {
  memoryInitializer = locateFile(memoryInitializer);
 }
 if (ENVIRONMENT_IS_NODE || ENVIRONMENT_IS_SHELL) {
  var data = Module["readBinary"](memoryInitializer);
  HEAPU8.set(data, GLOBAL_BASE);
 } else {
  addRunDependency("memory initializer");
  var applyMemoryInitializer = function(data) {
   if (data.byteLength) data = new Uint8Array(data);
   HEAPU8.set(data, GLOBAL_BASE);
   if (Module["memoryInitializerRequest"]) delete Module["memoryInitializerRequest"].response;
   removeRunDependency("memory initializer");
  };
  var doBrowserLoad = function() {
   Module["readAsync"](memoryInitializer, applyMemoryInitializer, function() {
    throw "could not load memory initializer " + memoryInitializer;
   });
  };
  var memoryInitializerBytes = tryParseAsDataURI(memoryInitializer);
  if (memoryInitializerBytes) {
   applyMemoryInitializer(memoryInitializerBytes.buffer);
  } else if (Module["memoryInitializerRequest"]) {
   var useRequest = function() {
    var request = Module["memoryInitializerRequest"];
    var response = request.response;
    if (request.status !== 200 && request.status !== 0) {
     var data = tryParseAsDataURI(Module["memoryInitializerRequestURL"]);
     if (data) {
      response = data.buffer;
     } else {
      console.warn("a problem seems to have happened with Module.memoryInitializerRequest, status: " + request.status + ", retrying " + memoryInitializer);
      doBrowserLoad();
      return;
     }
    }
    applyMemoryInitializer(response);
   };
   if (Module["memoryInitializerRequest"].response) {
    setTimeout(useRequest, 0);
   } else {
    Module["memoryInitializerRequest"].addEventListener("load", useRequest);
   }
  } else {
   doBrowserLoad();
  }
 }
}

function ExitStatus(status) {
 this.name = "ExitStatus";
 this.message = "Program terminated with exit(" + status + ")";
 this.status = status;
}

ExitStatus.prototype = new Error();

ExitStatus.prototype.constructor = ExitStatus;

dependenciesFulfilled = function runCaller() {
 if (!Module["calledRun"]) run();
 if (!Module["calledRun"]) dependenciesFulfilled = runCaller;
};

function run(args) {
 args = args || Module["arguments"];
 if (runDependencies > 0) {
  return;
 }
 preRun();
 if (runDependencies > 0) return;
 if (Module["calledRun"]) return;
 function doRun() {
  if (Module["calledRun"]) return;
  Module["calledRun"] = true;
  if (ABORT) return;
  ensureInitRuntime();
  preMain();
  if (Module["onRuntimeInitialized"]) Module["onRuntimeInitialized"]();
  postRun();
 }
 if (Module["setStatus"]) {
  Module["setStatus"]("Running...");
  setTimeout(function() {
   setTimeout(function() {
    Module["setStatus"]("");
   }, 1);
   doRun();
  }, 1);
 } else {
  doRun();
 }
}

Module["run"] = run;

function exit(status, implicit) {
 if (implicit && Module["noExitRuntime"] && status === 0) {
  return;
 }
 if (Module["noExitRuntime"]) {} else {
  ABORT = true;
  EXITSTATUS = status;
  exitRuntime();
  if (Module["onExit"]) Module["onExit"](status);
 }
 Module["quit"](status, new ExitStatus(status));
}

function abort(what) {
 if (Module["onAbort"]) {
  Module["onAbort"](what);
 }
 if (what !== undefined) {
  out(what);
  err(what);
  what = JSON.stringify(what);
 } else {
  what = "";
 }
 ABORT = true;
 EXITSTATUS = 1;
 throw "abort(" + what + "). Build with -s ASSERTIONS=1 for more info.";
}

Module["abort"] = abort;

if (Module["preInit"]) {
 if (typeof Module["preInit"] == "function") Module["preInit"] = [ Module["preInit"] ];
 while (Module["preInit"].length > 0) {
  Module["preInit"].pop()();
 }
}

Module["noExitRuntime"] = true;

run();

var FUNCTION_TABLE = [];

var Lua = {
 isRun: false,
 isInitialized: false,
 state: null,
 tmp_id: 0,
 errorHandlerCallback: null,
 default_source_name: "stdin",
 preallocated_strings: {
  "__handle": null,
  "__index": null
 },
 js_string_to_lua: function jsStringToLua(str) {
  return intArrayFromString(str);
 },
 lua_string_to_js: function luaStringToJs(int8array) {
  return decodeURIComponent(escape(intArrayToString(int8array)));
 },
 set_js_string_to_lua: function setJsStringToLua(f) {
  this.js_string_to_lua = f;
 },
 set_lua_string_to_js: function setLuaStringToJs(f) {
  this.lua_string_to_js = f;
 },
 initialize: function initialize(sourceName, stdout, stderr) {
  if (this.isInitialized) throw new Error("Lua already initialized");
  this.default_source_name = sourceName || this.default_source_name;
  this.stdout = stdout || this.stdout;
  this.stderr = stderr || this.stderr;
  if (!this.isRun) {
   run();
   this.isRun = true;
  }
  this.state = _luaL_newstate();
  _luaL_openlibs(this.state);
  for (var key in this.preallocated_strings) {
   if (this.preallocated_strings.hasOwnProperty(key)) {
    this.preallocated_strings[key] = this.allocate_string(key);
   }
  }
  this.isInitialized = true;
 },
 destroy: function destroy() {
  if (!this.isInitialized) throw new Error("Lua is not initialized");
  _lua_close(this.state);
  for (var i = 0; i < functionPointers.length; i++) {
   functionPointers[i] = null;
  }
  this.isInitialized = false;
 },
 require_initialization: function requireInitialization() {
  if (!this.isInitialized) throw new Error("Lua not yet initialized");
 },
 parse: function parse(command, sourceName) {
  this.require_initialization();
  var commandArray = this.js_string_to_lua(command);
  var commandPtr = allocate(commandArray, "i8", 0);
  var namePtr = this.allocate_string(sourceName);
  var parseFailed = _luaL_loadbufferx(this.state, commandPtr, commandArray.length - 1, namePtr);
  if (parseFailed) {
   this.report_error("Parsing failure");
  }
  _free(commandPtr);
  _free(namePtr);
  return !parseFailed;
 },
 eval: function luaEval(command, sourceName, source) {
  return this.exec("return " + command, sourceName || this.default_source_name, source || command);
 },
 exec: function luaExec(command, sourceName) {
  this.require_initialization();
  var src = sourceName || this.default_source_name;
  if (this.parse(command, src)) {
   var callFailed = _lua_pcallk(this.state, 0, -1, 0);
   if (callFailed) {
    this.report_error("Evaluation failure");
   } else {
    return this.get_stack_args();
   }
  } else {
   this.report_error("Parsing failure");
  }
  return null;
 },
 inject: function luaInject(object, injName, finalLocation, metatable) {
  var name = injName || this.get_tmp_name();
  this.pushStack(object);
  if (metatable) {
   this.pushStack(metatable);
   _lua_setmetatable(this.state, -2);
  }
  var strptr = this.allocate_string(name);
  _lua_setglobal(this.state, strptr);
  _free(strptr);
  if (finalLocation) {
   this.exec(finalLocation + " = " + name + "\n" + name + " = nil");
  }
  return finalLocation || name;
 },
 cache: function luaCache(evalstring) {
  if (!(evalstring in this.cache.items)) {
   this.cache.items[evalstring] = this.eval(evalstring);
  }
  return this.cache.items[evalstring];
 },
 call: function luaCall(evalstring, args) {
  var func = this.cache(evalstring)[0];
  return func.apply(null, args);
 },
 allocate_string: function allocateString(str) {
  var arr = this.js_string_to_lua(str);
  return allocate(arr, "i8", 0);
 },
 inspect: function luaInspect(index) {
  var type = _lua_type(this.state, index);
  var ptr = _lua_typename(this.state, type);
  var typename = Pointer_stringify(ptr);
  var address = _lua_topointer(this.state, index);
  return {
   "type": type,
   "typename": typename,
   "address": address,
   "addrstr": address.toString(16)
  };
 },
 peekStack: function peekStack(index, source) {
  this.require_initialization();
  var ret;
  var ptr;
  var type = _lua_type(this.state, index);
  switch (type) {
  case -1:
  case 0:
   ret = null;
   break;

  case 1:
   var result = _lua_toboolean(this.state, index);
   ret = result ? true : false;
   break;

  case 3:
   ret = _lua_tonumberx(this.state, index);
   break;

  case 4:
   ptr = _lua_tolstring(this.state, index, 0);
   var len = _lua_rawlen(this.state, index);
   ret = this.lua_string_to_js(HEAPU8.subarray(ptr, ptr + len));
   break;

  case 5:
   var isArray = true;
   var maxKey = 0;
   _lua_pushstring(this.state, this.preallocated_strings.__handle);
   _lua_rawget(this.state, index - 1);
   var handle = this.popStack();
   if (handle) {
    ptr = this.preallocated_strings.__index;
    _luaL_getmetafield(this.state, index, ptr);
    var __indexfunc = this.popStack();
    return __indexfunc.source;
   }
   ret = {};
   _lua_pushnil(this.state);
   _lua_pushnil(this.state);
   while (_lua_next(this.state, index - 2)) {
    var value = this.popStack();
    var key = this.peekStack(-1);
    ret[key] = value;
    if (isArray && typeof key === "number") {
     if (key > maxKey) {
      maxKey = key;
     }
    } else {
     isArray = false;
    }
   }
   this.popStack();
   if (isArray) {
    var newret = [];
    for (var i = 1; i <= maxKey; i++) {
     if (typeof ret[i] === "undefined") {
      isArray = false;
      break;
     }
     newret.push(ret[i]);
    }
    if (isArray) {
     ret = newret;
    }
   }
   break;

  case 6:
   var self = this;
   var address = _lua_topointer(this.state, index);
   if (_lua_iscfunction(this.state, index)) {
    var func = FUNCTION_TABLE[address];
    if (func.unwrapped) {
     return func.unwrapped;
    }
   }
   var name = this.get_tmp_name();
   var aname = this.allocate_string(name);
   _lua_pushvalue(this.state, index);
   _lua_setglobal(this.state, aname);
   _free(aname);
   ret = function retfn() {
    var origTop = _lua_gettop(self.state);
    var afname = self.allocate_string(name);
    _lua_getglobal(self.state, afname);
    _free(afname);
    for (var j = 0; j < arguments.length; j++) {
     self.pushStack(arguments[j]);
    }
    var failure = _lua_pcallk(self.state, arguments.length, -1, 0);
    if (failure) {
     self.report_error("Failure calling Lua function");
    }
    var numArgs = _lua_gettop(self.state) - origTop;
    return self.get_stack_args(numArgs);
   };
   var src = source || "";
   ret.toString = function toString() {
    return "Lua function " + src + ": " + name + " at " + address;
   };
   ret.source = src;
   ret.name = name;
   ret.address = address;
   break;

  default:
   var inspection = this.inspect(index);
   ret = inspection.typename + " (typecode " + type + "): 0x" + inspection.addrstr;
  }
  return ret;
 },
 popStack: function popStack(source) {
  var ret = this.peekStack(-1, source);
  _lua_settop(this.state, -2);
  return ret;
 },
 pushStack: function pushStack(obj) {
  var object = obj;
  if (object === null) {
   object = undefined;
  }
  switch (typeof object) {
  case "undefined":
   _lua_pushnil(this.state);
   return 1;

  case "boolean":
   _lua_pushboolean(this.state, object);
   return 1;

  case "number":
   _lua_pushnumber(this.state, object);
   return 1;

  case "string":
   var strptr = this.allocate_string(object);
   _lua_pushstring(this.state, strptr);
   _free(strptr);
   return 1;

  case "function":
   var self = this;
   var wrapper = function wrapperFn() {
    var result = object.apply(self, self.get_stack_args());
    if (typeof result === "undefined" || result === null) {
     result = [];
    }
    if (!(typeof result === "object" && typeof result.length === "number")) {
     throw new Error("Expected array return type from JS function");
    }
    for (var i = 0; i < result.length; i++) {
     self.pushStack(result[i]);
    }
    return result.length;
   };
   wrapper.unwrapped = object;
   var pointer = addFunction(wrapper);
   FUNCTION_TABLE[pointer] = wrapper;
   _lua_pushcclosure(this.state, pointer, 0);
   return 1;

  case "object":
   if (typeof object.length === "undefined") {
    _lua_createtable(this.state, 0, 0);
    if (object.__handle) {
     var source = object;
     var metatable = {
      "__index": function __index(table, key) {
       return [ source[key] ];
      },
      "__newindex": function __newindex(table, key, value) {
       source[key] = value;
       return [];
      }
     };
     metatable.__index.source = source;
     this.pushStack(metatable);
     _lua_setmetatable(this.state, -2);
     object = {
      "__handle": object.toString()
     };
    }
    for (var k in object) {
     if (object.hasOwnProperty(k)) {
      this.pushStack(k);
      this.pushStack(object[k]);
      _lua_rawset(this.state, -3);
     }
    }
   } else {
    _lua_createtable(this.state, object.length, 0);
    for (var kx in object) {
     if (object.hasOwnProperty(kx)) {
      kx = 1 * kx;
      this.pushStack(kx + 1);
      this.pushStack(object[kx]);
      _lua_rawset(this.state, -3);
     }
    }
   }
   return 1;

  default:
   throw new Error("Cannot push object to stack: " + object);
  }
 },
 get_stack_args: function getStackArgs(numArgs) {
  var num = typeof numArgs === "undefined" ? _lua_gettop(this.state) : numArgs;
  var args = [];
  for (var i = 0; i < num; i++) {
   args.push(this.popStack());
  }
  return args.reverse();
 },
 anon_lua_object: function anonLuaObject(object) {
  if (typeof object === "undefined" || object === null) {
   return "nil";
  }
  switch (typeof object) {
  case "string":
   return '"' + object.replace('"', '\\"') + '"';

  case "function":
  case "object":
   return this.inject(object);

  default:
   return object.toString();
  }
 },
 get_tmp_name: function getTmpName() {
  return "_weblua_tmp_" + this.tmp_id++;
 },
 cleanup_tmp: function cleanupTmp(name) {
  if (name === "_weblua_tmp_" + (this.tmp_id - 1)) {
   this.tmp_id--;
  }
  _lua_pushnil(this.state);
  var strptr = this.allocate_string(name);
  _lua_setglobal(this.state, strptr);
  _free(strptr);
 },
 stdout: function luaStdout(str) {
  console.log("stdout: " + str);
 },
 stderr: function luaStderr(str) {
  console.log("stderr: " + str);
  if (this.errorHandlerCallback) {
   this.errorHandlerCallback(str);
  }
 },
 report_error: function reportError(defaultMessage) {
  if (this.isInitialized) {
   var errorMessage = this.popStack();
   if (!(errorMessage && errorMessage.length)) errorMessage = defaultMessage;
   this.stderr(errorMessage);
  } else {
   this.stderr(defaultMessage);
  }
  _lua_settop(this.state, 0);
 },
 set_error_callback: function setErrorCallback(cb) {
  this.errorHandlerCallback = cb;
 }
};

window["Lua"] = Lua;

window["Lua"]["initialize"] = Lua.initialize;

window["Lua"]["destroy"] = Lua.destroy;

window["Lua"]["stdout"] = Lua.stdout;

window["Lua"]["stderr"] = Lua.stderr;

window["Lua"]["eval"] = Lua.eval;

window["Lua"]["exec"] = Lua.exec;

window["Lua"]["anon_lua_object"] = Lua.anon_lua_object;

window["Lua"]["inject"] = Lua.inject;

window["Lua"]["cache"] = Lua.cache;

window["Lua"]["set_js_string_to_lua"] = Lua.set_js_string_to_lua;

window["Lua"]["set_lua_string_to_js"] = Lua.set_lua_string_to_js;

window["Lua"]["set_error_callback"] = Lua.set_error_callback;

window["Lua"]["cache"]["items"] = {};

window["Lua"]["cache"]["clear"] = function luaClearCache(evalstring) {
 delete Lua.cache["items"][evalstring];
};



/***/ }),

/***/ "rvG2":
/*!************************************!*\
  !*** ./lib/instead-js/app/game.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Storage = __webpack_require__(/*! ./storage */ "bIoZ");

var gamefsBlob = {};

var gameDefaults = {
    // === configurable options ===
    mute: true,     // Mute all sounds
    preload: true,  // Preload all images while game is starting
    autosave_on_click: false,   // Autosave after each click
    log: false,     // Enable logging
    fading: false,  // Enable fade between scenes
    // === end of configurable options ===
    id: null,
    stead: 2,
    name: 'Default Game',
    details: {
        author: '',
        version: '',
        info: ''
    },
    gJournal: [], // game event log
    autosaveID: 9,
    importID: 10,
    saveSlots: 5,
    inventory_mode: 'vertical',
    scroll_mode: 'none',
    ways_mode: 'top',
    path: './game/',
    themePath: './themes/',
    ownTheme: false,
    clickSound: null,
    isAct: false, // 'act' mode flag
    actObj: null  // ref to act object
};

var Game = {
    mainLua: function mainLua() {
        var fullpath = this.path + (this.stead === 2 ? 'main.lua' : 'main3.lua');
        if (gamefsBlob.hasOwnProperty(fullpath)) {
            return gamefsBlob[fullpath];
        }
        return fullpath;
    },
    reset: function reset() {
        Object.keys(gameDefaults).forEach(function resetConfig(key) {
            Game[key] = gameDefaults[key];
        });
        gamefsBlob = {};
    },
    getSaveName: function getSaveName(i) {
        var id = i ? i : 0;
        return this.id + '-save-' + id;
    },
    getPrefsName: function getPrefsName() {
        return this.id + '-prefs';
    },
    saveExists: function saveExists(id) {
        if (typeof id === 'undefined') {
            return false;
        }
        return Storage.exists(this.getSaveName(id));
    },
    loadConfig: function loadConfig(cfg) {
        Object.keys(cfg).forEach(function applyConfig(key) {
            Game[key] = cfg[key];
        });
    },
    load: function load(slotId) {
        return Storage.load(Game.getSaveName(slotId));
    },
    save: function save(slotId, content) {
        var slot = this.getSaveName(slotId);
        Storage.save(slot, content);
    },
    importSave: function importSave(content) {
        this.save(this.importID, content);
    },
    allSaves: function allSaves() {
        return Storage.get(this.id);
    },
    addFile: function addFile(path, url) {
        gamefsBlob[path] = url;
    },
    fileURL: function fileURL(filename) {
        var fullpath = filename;
        Game.journal('[file: ' + filename + ']');
        // direct self-reference here, since fileURL is used as callback
        if (filename.indexOf(Game.path) === -1) {
            fullpath = Game.path + filename;
        }
        fullpath = fullpath.trim()
            .replace(/\\/g, '\/')
            .replace(/\/+/g, '\/'); // fix multiple slashes
        if (gamefsBlob.hasOwnProperty(fullpath)) {
            return gamefsBlob[fullpath];
        }
        return fullpath;
    },
    journal: function gameJournal(message) {
        Game.gJournal.push(message);
    }
};

Game.reset(); // run once to initialize

module.exports = Game;


/***/ }),

/***/ "t7p3":
/*!************************************!*\
  !*** ./lib/instead-js/app/menu.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! jquery */ "EVdn");
var Game = __webpack_require__(/*! ./game */ "rvG2");
var Logger = __webpack_require__(/*! ./log */ "318K");
var vfs = __webpack_require__(/*! ./vfs */ "pTW1");
var i18n = __webpack_require__(/*! ./i18n */ "zSbL");

var UTFsymbol = {
    mute: '<div style="position:absolute; color: #CC0000; text-shadow: 0px 0px 2px #000000">&#10006;</div>&#128266;',
    sound: '&#128266;'
};

var Menu = {
    element: {},
    init: function init(ui, steadHandler) {
        this.element = ui;
        var self = this;

        // apply menu translations
        $('#instead--menu-back').text(i18n.t('menu_back'));
        $('#instead--menu-save').text(i18n.t('menu_save'));
        $('#instead--menu-load').text(i18n.t('menu_load'));
        $('#instead--menu-reset').text(i18n.t('menu_reset'));
        $('#instead--menu-export').text(i18n.t('menu_export'));
        $('#instead--menu-export-log').text(i18n.t('menu_export_log'));

        function toggleMute() {
            if (Game.mute) {
                steadHandler.mute(false);
                ui.$menu_mute.text(i18n.t('menu_mute'));
                ui.$toolbar_mute.html(UTFsymbol.sound);
            } else {
                steadHandler.mute(true);
                ui.$menu_mute.text(i18n.t('menu_unmute'));
                ui.$toolbar_mute.html(UTFsymbol.mute);
            }
        }
        Game.mute = !Game.mute; // set correct mute state before switching
        toggleMute();

        ui.$menuButton.on('click', this.toggleMenu.bind(this));
        ui.$menu.on('click', 'a', function handler(e) {
            e.preventDefault();
            var action = $(this).attr('data-action');
            var id = $(this).attr('data-id');
            switch (action) {
            case 'reset':
                self.toggleMenu();
                steadHandler.reset();
                break;
            case 'menu-save':
                self.toggleSaveload('save');
                break;
            case 'menu-load':
                self.toggleSaveload('load');
                break;
            case 'menu-export':
                self.toggleSaveload('export');
                break;
            case 'save':
                self.toggleSaveload();
                self.toggleMenu();
                steadHandler.save(id);
                break;
            case 'load':
                self.toggleSaveload();
                self.toggleMenu();
                steadHandler.load(id);
                break;
            case 'export':
                self.exportSave(id);
                break;
            case 'cancel':
                self.toggleSaveload();
                break;
            case 'mute':
                toggleMute();
                break;
            case 'export-log':
                self.exportLog();
                break;
            default:
                self.toggleMenu();
            }
        });

        if (Game.log) {
            ui.$toolbar_log.on('click', function toggleLog(e) {
                e.preventDefault();
                Logger.show();
                $('#instead--log').toggle().scrollTop(function sh() { return this.scrollHeight; });
            });
        } else {
            ui.$toolbar_log.hide();
        }
        ui.$toolbar_mute.on('click', function toggleLog(e) {
            e.preventDefault();
            toggleMute();
        });
        ui.$toolbar_menu.on('click', this.toggleMenu.bind(this));

        function importLoad(e) {
            Game.importSave(e.target.result);
            self.toggleSaveload();
            self.toggleMenu();
            steadHandler.load(Game.importID);
        }

        ui.$menu.on('change', '#load-import',  function fileCtrl() {
            var reader = new FileReader();
            reader.onload = importLoad;
            reader.readAsText(this.files[0]);
        });
    },
    toggleMenu: function toggleMenu() {
        var ui = this.element;
        ui.$gameDetails.html(
            Game.name + ' - ' + Game.details.version + '<br/>'
            + Game.details.author + '<br/>'
            + '<pre>' + Game.details.info.replace(/\\n/g, '\n') + '</pre>'
            + '<hr>'
        );
        ui.$menu_saveload.hide();
        ui.$menu_content.show();
        ui.$menu.toggle();
        if (ui.$menu.is(':visible')) {
            ui.$stead.css('opacity', 0.5);
        } else {
            ui.$stead.css('opacity', 1);
        }
    },
    toggleSaveload: function toggleSaveload(action) {
        var ui = this.element;
        var html = '';
        var slots = [];
        if (action) {
            ui.$menu_content.hide();

            Game.allSaves().forEach(function f(item) {
                var saveId = item.id.match(/save-(\d+)/);
                var timestamp = new Date(item.timestamp);
                slots[saveId[1]] = timestamp.toLocaleString('en-US', {
                    weekday: 'short',
                    year: 'numeric',
                    month: 'numeric',
                    day: 'numeric',
                    hour: 'numeric',
                    minute: 'numeric',
                    hour12: false
                });
            });
            var i;
            if (action === 'save') {
                html += '<h3>' + i18n.t('menu_savegame') + '</h3>';
                for (i = 1; i <= Game.saveSlots; i++) {
                    html += '<a href="" data-action="save" data-id="' + i + '" class="slot-selector">';
                    if (slots[i]) {
                        html += i + ' - ' + slots[i];
                    } else {
                        html += i + ' - ' + i18n.t('empty');
                    }
                    html += '</a>';
                }
            } else if (action === 'load') {
                html += '<h3>' + i18n.t('menu_loadgame') + '</h3>';
                html += '<a href="" data-action="load" data-id="' + Game.autosaveID +
                        '" class="slot-selector">0 - ' + i18n.t('menu_autosave') + '</a>';
                for (i = 1; i <= Game.saveSlots; i++) {
                    if (slots[i]) {
                        html += '<a href="" data-action="load" data-id="' + i + '" class="slot-selector">';
                        html += i + ' - ' + slots[i];
                        html += '</a>';
                    } else {
                        html += '<div class="slot-selector">' + i + ' - ' + i18n.t('empty') + '</div>';
                    }
                }
                html += '<h3>' + i18n.t('menu_import') + '</h3>';
                html += '<input type="file" id="load-import" style="font-size: 0.8em"/>';
                html += '<br><br>';
            } else {
                html += '<h3>' + i18n.t('menu_export') + '</h3>';
                html += '<a href="" data-action="export" data-id="' + Game.autosaveID +
                        '" class="slot-selector">0 - ' + i18n.t('menu_autosave') + '</a>';
                for (i = 1; i <= Game.saveSlots; i++) {
                    if (slots[i]) {
                        html += '<a href="" data-action="export" data-id="' + i + '" class="slot-selector">';
                        html += i + ' - ' + slots[i];
                        html += '</a>';
                    } else {
                        html += '<div class="slot-selector">' + i + ' - ' + i18n.t('empty') + '</div>';
                    }
                }
            }

            html += '<a href="" data-action="cancel">' + i18n.t('menu_cancel') + '</a>';
            ui.$menu_saveload.html(html);
            ui.$menu_saveload.show();
        } else {
            ui.$menu_saveload.hide();
            ui.$menu_content.show();
        }
    },
    exportSave: function exportSave(id) {
        var savename = Game.getSaveName(id);
        var content = Game.load(id);
        vfs.exportFile(savename + '.lua', content);
    },
    exportLog: function exportLog() {
        var logContentTxt = Game.id + '\n' + Game.name + '\n\n';
        logContentTxt += Game.gJournal.join('\n');
        vfs.exportFile(Game.id + '-log.txt', logContentTxt);
    }
};

module.exports = Menu;


/***/ }),

/***/ "tfHD":
/*!*************************************!*\
  !*** ./lib/instead-js/app/audio.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Logger = __webpack_require__(/*! ./log */ "318K");
var HTMLAudio = {
    track: null,
    audio: null,
    isMuted: false,
    playMusic: function play(track, loop, onEndCallback) {
        if (!track.match(/(mp3|ogg|wav)$/) && !track.match(/^blob:/)) {
            console.log('Unsupported music format:' + track); // eslint-disable-line no-console
            Logger.log('{warning} Unsupported music format:' + track); // eslint-disable-line no-console
            return;
        }
        if (track !== this.track) {
            // stop previous music
            this.stopMusic();
            // start new track
            this.audio = new Audio(track);
            this.track = track;
            this.audio.autoplay = true;
            this.audio.muted = this.isMuted;
            this.play(this.audio, loop);
            this.audio.addEventListener('ended', function cb() {
                onEndCallback(track);
            });
        }
    },
    stopMusic: function stop() {
        if (this.audio) {
            this.audio.pause();
            this.audio = null;
            this.track = null;
        }
    },
    playSound: function playSound(track, loop, cache) {
        var audio = new Audio(track);
        audio.muted = this.isMuted;
        if (cache) {
            audio.muted = true;
        }
        this.play(audio, loop);
    },
    play: function play(audio, loop) {
        if (loop === 0) {
            audio.addEventListener('ended', function restartAudio() {
                this.currentTime = 0;
                this.play();
            }, false);
            audio.play();
        } else if (loop > 0) {
            for (var i = 0; i < loop; i++) {
                audio.play();
            }
        } else {
            audio.play();
        }
    },
    mute: function muteAudio(m) {
        if (this.audio) {
            this.audio.muted = m;
        }
        this.isMuted = m;
    }
};

module.exports = HTMLAudio;


/***/ }),

/***/ "tyl1":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./lib/instead-js/style.css ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "JPst");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "h1 {\n    font-size: 200%;\n}\n\nbody {\n    background-color: #111111;\n}\n\npre {\n    white-space: pre-line;\n    margin: 0px;\n}\n\nc {\n    text-align: center;\n    display: inline-block;\n    width: 99%;\n}\n\nr {\n    text-align: right;\n    display: inline-block;\n    width: 99%;\n}\n\nl {\n    text-align: left;\n    display: inline-block;\n    width: 99%;\n}\n", "",{"version":3,"sources":["webpack://lib/instead-js/style.css"],"names":[],"mappings":"AAAA;IACI,eAAe;AACnB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,qBAAqB;IACrB,WAAW;AACf;;AAEA;IACI,kBAAkB;IAClB,qBAAqB;IACrB,UAAU;AACd;;AAEA;IACI,iBAAiB;IACjB,qBAAqB;IACrB,UAAU;AACd;;AAEA;IACI,gBAAgB;IAChB,qBAAqB;IACrB,UAAU;AACd","sourcesContent":["h1 {\n    font-size: 200%;\n}\n\nbody {\n    background-color: #111111;\n}\n\npre {\n    white-space: pre-line;\n    margin: 0px;\n}\n\nc {\n    text-align: center;\n    display: inline-block;\n    width: 99%;\n}\n\nr {\n    text-align: right;\n    display: inline-block;\n    width: 99%;\n}\n\nl {\n    text-align: left;\n    display: inline-block;\n    width: 99%;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "u2Rq":
/*!******************************!*\
  !*** ./lib/instead/stead.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

var stead={};stead["instead_js.lua"]="DEBUG = false\nSTANDALONE = true\nPLATFORM = 'web'\nlocal INSTEAD_THEME_NAME = ''\n\nINSTEAD_PLACEHOLDER = function()\n    return\nend\n\nINSTEAD_EMPTYSTR = function()\n  return ''\nend\n\nINSTEAD_NOTIMPLEMENTED = function(fn)\n  js.run('Lua.logWarning(\"' .. fn .. ' : not implemented in instead.js\");')\nend\n\n-- call JS function with given parameters\ninsteadjs_call = function(jsfn, arg)\n    local arguments = ''\n    for i,v in ipairs(arg) do\n        arguments = arguments .. '\"' .. tostring(v) .. '\",'\n    end\n    arguments = arguments:sub(1, -2)\n    js.run(jsfn .. '(' .. arguments .. ')')\nend\n\ntable_get_maxn = function(tbl)\n\tlocal c=0\n\tfor k in pairs(tbl) do\n\t\tif type(k)=='number' and (c == nil or k > c) then\n\t\t\tc=k\n\t\tend\n\tend\n\treturn c\nend\n\nlocal INSTEAD_GAMEPATH = ''\n\njs_instead_gamepath = function(path)\n  INSTEAD_GAMEPATH=path\nend\n\ninstead_gamepath=function()\n  return INSTEAD_GAMEPATH\nend\n\ninstead_realpath = INSTEAD_EMPTYSTR\ninstead_savepath = INSTEAD_EMPTYSTR\ninstead_exepath = INSTEAD_EMPTYSTR\n\n-- theme\nfunction instead_theme_var(name, value)\n    if (value) then\n        js.run('insteadThemeSet(\"' .. tostring(name) .. '\",\"' .. tostring(value) .. '\")')\n    else\n        return js.run_string('insteadThemeGet(\"' .. tostring(name) .. '\")')\n    end\nend\n\nfunction js_instead_theme_name(theme)\n  INSTEAD_THEME_NAME=theme\nend\n\nfunction instead_theme_name()\n    return INSTEAD_THEME_NAME\nend\n\n-- timer\ninstead_timer = function(t)\n    js.run('instead_settimer(\"' .. tostring(t) .. '\")')\nend\n\n-- sound\ninstead_sound = INSTEAD_PLACEHOLDER\ninstead_sound_load = INSTEAD_PLACEHOLDER\ninstead_sound_free = INSTEAD_PLACEHOLDER\ninstead_sounds_free = INSTEAD_PLACEHOLDER\ninstead_sound_channel = function()\n    INSTEAD_NOTIMPLEMENTED('sound_channel')\nend\ninstead_sound_volume = function()\n    INSTEAD_NOTIMPLEMENTED('sound_volume')\nend\ninstead_sound_panning = function()\n    INSTEAD_NOTIMPLEMENTED('sound_panning')\nend\ninstead_sound_load_mem = function()\n    INSTEAD_NOTIMPLEMENTED('sound_load_mem')\nend -- stead 3\ninstead_music_callback = function()\n    INSTEAD_NOTIMPLEMENTED('music_callback')\nend -- stead 3\n\n-- sprites are not supported (yet?)\nsprite_descriptors = {}\nfont_descriptors = {}\n\ninstead_font_load = function(filename, size)\n    js.run('Sprite.font(\"' .. tostring(filename) .. '\",\"' .. tostring(size) .. '\")')\n    return font_descriptors[filename .. size]\nend\njs_instead_font_load = function(font, id)\n    font_descriptors[font] = id\nend\ninstead_font_free = function()\n    -- fonts are not taking much memory, no need to 'free' them\n    return\nend\ninstead_font_scaled_size = function(size)\n    -- TODO: return size as-is\n    return size\nend\ninstead_sprite_alpha = function()\n    INSTEAD_NOTIMPLEMENTED('sprite.sprite_alpha')\nend\ninstead_sprite_dup = function()\n    INSTEAD_NOTIMPLEMENTED('sprite.dup')\nend\ninstead_sprite_scale = function()\n    INSTEAD_NOTIMPLEMENTED('sprite.scale')\nend\ninstead_sprite_rotate = function()\n    INSTEAD_NOTIMPLEMENTED('sprite.rotate')\nend\ninstead_sprite_text = function(font, text, col, style)\n    local arguments = ''\n    arguments = arguments .. '\"' .. tostring(font) .. '\",'\n    arguments = arguments .. '\"' .. tostring(text) .. '\",'\n    arguments = arguments .. '\"' .. tostring(col) .. '\",'\n    arguments = arguments .. '\"' .. tostring(style) .. '\"'\n    js.run('Sprite.text(' .. arguments .. ')')\n    return sprite_descriptors[font]\nend\njs_instead_sprite_text = function(font, id)\n    sprite_descriptors[font] = id\nend\ninstead_sprite_text_size = function()\n    INSTEAD_NOTIMPLEMENTED('sprite.text_size')\n    return 16 -- default font size\nend\ninstead_sprite_draw = function(...)\n    insteadjs_call('Sprite.draw', {...})\nend\ninstead_sprite_copy = function(...)\n    insteadjs_call('Sprite.copy', {...})\nend\ninstead_sprite_compose = function(...)\n    insteadjs_call('Sprite.compose', {...})\nend\ninstead_sprite_fill = function(...)\n    insteadjs_call('Sprite.fill', {...})\nend\ninstead_sprite_pixel = function(...)\n    insteadjs_call('Sprite.pixel', {...})\nend\ninstead_sprite_load = function(filename)\n    js.run('Sprite.load(\"' .. tostring(filename) .. '\")')\n    return sprite_descriptors[filename]\nend\njs_instead_sprite_load = function(filename, id)\n    sprite_descriptors[filename] = id\nend\ninstead_sprite_free = function(descriptor)\n    js.run('Sprite.free(\"' .. tostring(descriptor) .. '\")')\nend\ninstead_sprite_size = function()\n    INSTEAD_NOTIMPLEMENTED('sprite.size')\nend\ninstead_sprites_free = INSTEAD_PLACEHOLDER\ninstead_sprite_colorkey = INSTEAD_PLACEHOLDER\ninstead_ticks = function()\n    return js.run_string('Date.now()')\nend\ninstead_mouse_pos = INSTEAD_PLACEHOLDER\ninstead_mouse_show = INSTEAD_PLACEHOLDER\ninstead_finger_pos = INSTEAD_PLACEHOLDER\nfunction instead_mouse_filter(...)\n  insteadjs_call('console.log', {...})\nend\ninstead_busy = INSTEAD_PLACEHOLDER\n\n-- click\ninstead_click = function(x,y)\n    local cmd = iface:input('mouse', true, 1, x, y, x, y)\n    if (cmd) then\n       return iface:cmd(cmd)\n    end\nend\n\n-- scene helper\njs_instead_getscene = function(invmode)\n    local scene = {}\n    scene['sound'] = instead.get_sound()\n    scene['music'] = instead.get_music()\n    scene['title'] = instead.get_title()\n    scene['ways'] = instead.get_ways()\n    scene['inv'] = instead.get_inv(invmode)\n    scene['pic'] = instead.get_picture()\n    return scene\nend\n\nfunction instead_readdir(d) -- TODO\n\treturn function()\n\t\tprint (\"Readdir for: \", d)\n\tend\nend\n\nfunction instead_text_input()\n    return true\nend\n";stead["instead_fs.lua"]="-- io.open proxy\nlocal files = {\n}\n\nio.open = function (filename, mode)\n\tlocal o = {\n\t\tmode = mode or \"r\",\n\t\tname = filename,\n\t\tnew = function(s)\n\t\t\tif not s._lines and s.mode:find(\"r\") then -- for read\n\t\t\t\tinstead_file_set_content(\n\t\t\t\t\ts,\n\t\t\t\t\tjs.run_string('Lua.openFile(\"' .. tostring(s.name) .. '\")')\n\t\t\t\t)\n\t\t\tend\n\t\tend;\n\t\tlines = function (s)\n\t\t\ts:new()\n\t\t\treturn function()\n\t\t\t\treturn s:read('*line')\n\t\t\tend\n\t\tend,\n\t\tsetvbuf = function ()\n\t\t\treturn\n\t\tend,\n\t\tread = function(s, m) -- line by line\n\t\t\ts:new()\n\t\t\tif m == '*line' then\n\t\t\t\tlocal i = s.line_nr + 1\n\t\t\t\ts.line_nr = i;\n\t\t\t\tlocal n = #s._lines\n\t\t\t\tif i >= n then\n\t\t\t\t\treturn\n\t\t\t\tend\n\t\t\t\treturn s._lines[i]\n\t\t\tend\n\t\t\treturn s.content\n\t\tend;\n\t\twrite = function(s, ...)\n\t\t\tlocal a = { ... }\n\t\t\tfor i, v in ipairs(a) do\n\t\t\t\ts.content = (s.content or '').. tostring(v)\n\t\t\tend\n\t\tend,\n\t\tflush = INSTEAD_PLACEHOLDER,\n\t\tclose = function(s)\n\t\t\tif s.content ~= '' then\n\t\t\t\tjs.run('Lua.saveFile(\"' .. s.name .. '\")')\n\t\t\tend\n\t\tend\n\t}\n\tfiles[filename] = o\n\treturn o\nend\n\nos.remove = INSTEAD_PLACEHOLDER\nos.rename = INSTEAD_PLACEHOLDER\n\ninstead_file_get_content = function(file)\n\treturn files[file] and files[file].content\nend\n\ninstead_file_set_content = function(s, content)\n\ts.content = content\n\tlocal t = {}\n\tlocal function helper(line)\n\t\ttable.insert(t, line)\n\t\treturn \"\"\n\tend\n\thelper((content:gsub(\"(.-)\\r?\\n\", helper)))\n\ts._lines = t\n\ts.line_nr = 0\nend\n\n-- loadfile proxy\nloadfile = function(file)\n\tlocal content = js.run_string('Lua.loadFile(\"' .. file .. '\")')\n\tif content ~= '' then\n\t\treturn assert(loadstring(content))\n\tend\nend\n\n-- stead3\nif std then\n\tstd.loadfile = loadfile;\nend\n\n";stead["instead_init.lua"]="local requires = {}\n\nfunction require(fn)\n\tif requires[fn] then return requires[fn] end\n\tlocal code = js.run_string('Lua.requireContent(\"' .. tostring(fn) .. '\")')\n\trequires[fn] = loadstring(code)() or true\n\treturn requires[fn]\nend\n\nrequire 'instead_js'\nrequire 'stead'\nrequire 'ext/gui'\nrequire 'ext/paths'\nrequire 'ext/sound'\nrequire 'ext/sprites'\nrequire 'ext/timer'\n\nstead:init()\n\nrequire 'instead_fs'\n";module.exports=stead;

/***/ }),

/***/ "vQlt":
/*!**********************************!*\
  !*** ./lib/instead-js/style.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "LboF");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./style.css */ "tyl1");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "zSbL":
/*!************************************!*\
  !*** ./lib/instead-js/app/i18n.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var i18n = {
    dict: {
        loading: 'Loading...',
        preload: 'Preloading images',
        empty: 'empty',
        menu_back: 'Return to game',
        menu_save: 'Save',
        menu_load: 'Load',
        menu_reset: 'Reset',
        menu_mute: 'Mute',
        menu_unmute: 'Unmute',
        menu_savegame: 'Save game',
        menu_loadgame: 'Load game',
        menu_import: 'Import',
        menu_export: 'Export saved game',
        menu_export_log: 'Export game log',
        menu_autosave: 'Autosave',
        menu_cancel: 'Cancel',
        zip: 'Play game from ZIP file',
        zip_incorrect: 'This is not an INSTEAD game zip file, choose another.'
    },
    load: function init(d) {
        this.dict = d;
    },
    t: function translate(phrase) {
        if (phrase in this.dict) {
            return this.dict[phrase];
        }
        return phrase;
    }
};

module.exports = i18n;


/***/ })

/******/ });
//# sourceMappingURL=instead.js.map