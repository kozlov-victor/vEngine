/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 125);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _commonBehaviour = __webpack_require__(12);

var _commonBehaviour2 = _interopRequireDefault(_commonBehaviour);

var _gameObjectProto = __webpack_require__(6);

var _gameObjectProto2 = _interopRequireDefault(_gameObjectProto);

var _spriteSheet = __webpack_require__(11);

var _spriteSheet2 = _interopRequireDefault(_spriteSheet);

var _frameAnimation = __webpack_require__(21);

var _frameAnimation2 = _interopRequireDefault(_frameAnimation);

var _scene = __webpack_require__(10);

var _scene2 = _interopRequireDefault(_scene);

var _layer = __webpack_require__(9);

var _layer2 = _interopRequireDefault(_layer);

var _font = __webpack_require__(20);

var _font2 = _interopRequireDefault(_font);

var _sound = __webpack_require__(22);

var _sound2 = _interopRequireDefault(_sound);

var _particleSystem = __webpack_require__(14);

var _particleSystem2 = _interopRequireDefault(_particleSystem);

var _game = __webpack_require__(69);

var _game2 = _interopRequireDefault(_game);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var res = {};

res.reset = function (gameProps) {

    var g = new _game2.default(gameProps || {});
    res.game = g;

    res.commonBehaviourList = [];
    res.currGameObjectInEdit = new _gameObjectProto2.default(g);
    res.currSpriteSheetInEdit = new _spriteSheet2.default(g);
    res.currFrameAnimationInEdit = new _frameAnimation2.default(g);
    res.currFrameAnimationInEdit._gameObject = new _gameObjectProto2.default(g);
    res.currSceneInEdit = new _scene2.default(g);
    res.currSceneGameObjectInEdit = {
        pos: {},
        scale: {}
    };
    res.currLayerInEdit = new _layer2.default(g);
    res.currFontInEdit = new _font2.default(g);
    res.currSoundInEdit = new _sound2.default(g);
    res.currParticleSystemInEdit = new _particleSystem2.default(g);
    res.currProjectInEdit = {};
    res.currTileIndexInEdit = {};
    res.commonBehaviourProto = [];

    res.debugFrameUrl = '';
    res.scriptEditorUrl = '';

    res.tileMapPosY = res.tileMapPosX = 0;

    res.projectName = '';
    res.projects = [];

    res.buildOpts = {
        debug: false,
        embedResources: false,
        embedScript: false,
        minify: false
    };
};

res.reset();

exports.default = res;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _i18n = {};

_i18n.locale = 'en';

_i18n.bundle = {
    'en': {
        ok: 'ok',
        confirm: 'confirm',
        confirmQuestion: function confirmQuestion(item) {
            return 'Delete ' + item.type + ' with name "' + item.name + '"?';
        },
        canNotDelete: function canNotDelete(item, usedByObjects) {
            var usedByStr = usedByObjects ? usedByObjects.map(function (it) {
                return it.type + ':' + it.name;
            }).join(',') : '';
            return 'Can not delete ' + item.type + ' with name "' + item.name + '", it\'s used by other objects ' + (usedByStr ? usedByStr : '');
        },
        noGameObject: 'create at least one game object firstly',
        cancel: 'cancel',
        assets: 'assets',
        addSpriteSheet: 'add sprite sheet',
        loadImage: 'load image',
        gameObjects: 'game objects',
        gameObject: 'gameObject',
        create: 'create',
        edit: 'edit',
        close: 'close',
        name: 'name',
        scaleStrategy: 'scale strategy',
        spriteSheets: 'sprite sheets',
        width: 'width',
        height: 'height',
        currFrameIndex: 'current frame index',
        currGameObject: 'current gameObject',
        currScene: 'current scene',
        spriteSheet: 'sprite sheet',
        numOfFramesH: 'num of frames horizontally',
        numOfFramesV: 'num of frames vertically',
        image: 'image',
        frAnimations: 'frame animations',
        duration: 'duration, msec',
        frames: 'frames (i.e 1,2,3)',
        playAnim: 'play animation',
        stopAnim: 'stop animation',
        saveObjectFirst: 'save object first',
        all: 'all',
        step: 'step',
        game: 'game',
        editThisGameObject: 'edit this game object',
        deleteThisGameObject: 'delete this game object',
        scenes: 'scenes',
        scene: 'scene',
        run: 'run',
        layers: 'layers',
        layer: 'layer',
        debug: 'debug',
        stop: 'stop',
        addGameObject: 'add game object',
        nothingToAdd: 'nothing to add',
        from: 'from',
        to: 'to',
        fonts: 'fonts',
        font: 'font',
        text: 'text',
        commonBehaviour: 'common behaviour',
        groupName: 'group name',
        selectFont: 'select font',
        fontSize: 'font size',
        fontColor: 'font color',
        userInterface: 'user interface',
        textField: 'text field',
        noDataToEdit: 'no data to edit provided',
        rigid: 'rigid',
        sounds: 'sounds',
        play: 'play',
        loadSound: 'load sound',
        build: 'build',
        particleSystems: 'particle systems',
        particleSystem: 'particle system',
        preview: 'preview',
        explorer: 'explorer',
        description: 'description',
        colorBG: 'scene background color',
        useBG: 'use background color',
        angle: 'angle',
        tileMap: 'tile map',
        noScene: 'create at least one scene',
        sceneNotSelected: 'select scene to drop object',
        noLayer: 'create at least one layer of current scene',
        selected: 'selected',
        notSelected: 'not selected',
        fixedToCamera: 'fixed to camera',
        preloadingScene: 'preloading scene',
        startScene: 'start scene',
        projects: 'projects',
        objectAlreadyAdded: 'object is already added'
    }
};

_i18n.setLocate = function (_locale) {
    _i18n.locale = _locale;
};

_i18n.get = function (key) {
    return _i18n.bundle[_i18n.locale][key];
};

_i18n.getAll = function () {
    return _i18n.bundle[_i18n.locale];
};

exports.default = _i18n;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _mathEx = __webpack_require__(8);

var _mathEx2 = _interopRequireDefault(_mathEx);

var _editData = __webpack_require__(0);

var _editData2 = _interopRequireDefault(_editData);

var _resource = __webpack_require__(3);

var _resource2 = _interopRequireDefault(_resource);

var _fileSystem = __webpack_require__(4);

var _fileSystem2 = _interopRequireDefault(_fileSystem);

var _i18n = __webpack_require__(1);

var _i18n2 = _interopRequireDefault(_i18n);

var _gameObjectProto = __webpack_require__(6);

var _gameObjectProto2 = _interopRequireDefault(_gameObjectProto);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Utils = function () {
    function Utils() {
        _classCallCheck(this, Utils);
    }

    _createClass(Utils, [{
        key: 'getGameObjectCss',
        value: function getGameObjectCss(gameObj) {
            if (!gameObj) gameObj = {};
            gameObj.scale = gameObj.scale || {};
            gameObj.spriteSheet = gameObj.spriteSheet || {};
            return {
                width: gameObj.width + 'px',
                height: gameObj.height + 'px',
                backgroundImage: gameObj.spriteSheet && gameObj.spriteSheet.resourcePath && 'url(' + _editData2.default.projectName + '/' + gameObj.spriteSheet.resourcePath + ')',
                backgroundPositionY: -gameObj._sprPosY + 'px',
                backgroundPositionX: -gameObj._sprPosX + 'px',
                backgroundRepeat: 'no-repeat',
                opacity: gameObj.alpha,
                transform: 'scale(' + gameObj.scale.x + ',' + gameObj.scale.y + ') rotateZ(' + _mathEx2.default.radToDeg(gameObj.angle) + 'deg)',
                backgroundSize: gameObj.spriteSheet.numOfFramesH * gameObj.width + 'px ' + gameObj.spriteSheet.numOfFramesV * gameObj.height + 'px'
            };
        }
    }, {
        key: 'calcZoom',
        value: function calcZoom(gameObject) {
            if (!gameObject) gameObject = {};
            if (!gameObject.height) gameObject.height = 30;
            return gameObject.height > 30 ? 30 / gameObject.height : 1;
        }
    }, {
        key: 'merge',
        value: function merge(a, b) {
            a = a || {};
            b = b || {};
            var res = {};
            Object.keys(a).forEach(function (key) {
                res[key] = a[key];
            });
            Object.keys(b).forEach(function (key) {
                res[key] = b[key];
            });
            return res;
        }
    }, {
        key: 'hexToRgb',
        value: function hexToRgb(hex) {
            if (!hex) return { r: 0, g: 0, b: 0 };
            var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
            return result ? {
                r: parseInt(result[1], 16) || 0,
                g: parseInt(result[2], 16) || 0,
                b: parseInt(result[3], 16) || 0
            } : { r: 0, g: 0, b: 0 };
        }
    }, {
        key: 'rgbToHex',
        value: function rgbToHex(col) {
            if (!col) return '#000000';
            var r = +col.r,
                g = +col.g,
                b = +col.b;
            return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
        }
    }, {
        key: 'dataURItoBlob',
        value: function dataURItoBlob(dataURI) {
            // convert base64/URLEncoded data component to raw binary data held in a string
            var byteString = void 0;
            if (dataURI.split(',')[0].indexOf('base64') >= 0) byteString = atob(dataURI.split(',')[1]);else byteString = unescape(dataURI.split(',')[1]);

            // separate out the mime component
            var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

            // write the bytes of the string to a typed array
            var ia = new Uint8Array(byteString.length);
            for (var i = 0; i < byteString.length; i++) {
                ia[i] = byteString.charCodeAt(i);
            }

            return new Blob([ia], { type: mimeString });
        }
    }, {
        key: 'range',
        value: function range(rFr, rTo, step) {
            if (!step) step = 1;
            var arr = [],
                i = void 0;
            if (rTo == undefined) {
                rTo = rFr;
                rFr = 0;
            }
            if (rFr < rTo) {
                for (i = rFr; i <= rTo; i += step) {
                    arr.push(i);
                }
            } else {
                for (i = rFr; i >= rTo; i -= step) {
                    arr.push(i);
                }
            }
            return arr;
        }
    }, {
        key: '_createAceCompleter',
        value: function _createAceCompleter() {
            var result = [];
            var res = {};
            var objs = ['gameObject'];
            objs.forEach(function (go) {
                var GObjClass = _gameObjectProto2.default;
                var goObj = new GObjClass(_editData2.default.game);
                for (var key in goObj) {
                    if (key.indexOf('_') == 0) continue;
                    res[key] = {
                        name: key,
                        value: key,
                        score: 1,
                        meta: 'gameObject property'
                    };
                }
            });
            Object.keys(res).forEach(function (key) {
                result.push(res[key]);
            });
            return result;
        }
    }, {
        key: '_waitForFrameAndDo',
        value: function _waitForFrameAndDo(file, path) {
            var _this = this;

            var frame = document.getElementById('scriptEditorFrame');
            var contentWindow = frame && frame.contentWindow;
            if (!contentWindow || !contentWindow.ready) {
                setTimeout(function () {
                    _this._waitForFrameAndDo(file, path);
                }, 100);
                return;
            }
            contentWindow.setCode(file);
            contentWindow.calcEditorSize();
            contentWindow.setAutocomplete(this._createAceCompleter());
            window.removeEventListener('resize', contentWindow.calcEditorSize);
            window.addEventListener('resize', function () {
                contentWindow && contentWindow.calcEditorSize();
            });
            window.saveCode = function (code) {
                _fileSystem2.default.createFile(path, code);
            };
        }
    }, {
        key: 'getArray',
        value: function getArray(num) {
            if (!num) return [];
            var res = [];
            for (var i = 0; i < num; i++) {
                res.push(i);
            }
            return res;
        }
    }, {
        key: 'size',
        value: function size(obj) {
            if (!obj) return 0;
            return Object.keys(obj).length;
        }
    }, {
        key: 'deleteModel',
        value: function deleteModel(model, callback) {
            return new Promise(function (resolve) {
                window.confirmEx(_i18n2.default.getAll().confirmQuestion(model), function () {
                    _resource2.default.remove(model, callback);
                    _editData2.default.game._repository.removeObject(model);
                    resolve();
                });
            });
        }
    }, {
        key: 'openEditor',
        value: function openEditor(path) {
            var _this2 = this;

            _editData2.default.scriptEditorUrl = path;
            _fileSystem2.default.readFile(path, function (file) {
                _this2._waitForFrameAndDo(file, path);
            });
        }
    }, {
        key: 'assign',
        value: function assign(model, property, value) {
            model && (model[property] = value);
        }
    }, {
        key: 'capitalise',
        value: function capitalise(s) {
            return s[0].toUpperCase() + s.substr(1);
        }
    }]);

    return Utils;
}();

exports.default = new Utils();

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _httpClient = __webpack_require__(7);

var _httpClient2 = _interopRequireDefault(_httpClient);

var _editData = __webpack_require__(0);

var _editData2 = _interopRequireDefault(_editData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Resource = function () {
    function Resource() {
        _classCallCheck(this, Resource);
    }

    _createClass(Resource, [{
        key: 'getAll',
        value: function getAll(projectName) {
            return _httpClient2.default.post('/resource/getAll', { projectName: projectName });
        }
    }, {
        key: 'save',
        value: function save(model, callback) {
            if (model.toJSON) model = model.toJSON();
            return _httpClient2.default.post('/resource/save', { projectName: _editData2.default.projectName, model: model }, callback);
        }
    }, {
        key: 'saveGameProps',
        value: function saveGameProps(model, callback) {
            return _httpClient2.default.post('/resource/saveGameProps', { projectName: _editData2.default.projectName, model: model }, callback);
        }
    }, {
        key: 'remove',
        value: function remove(model, callback) {
            return _httpClient2.default.post('/resource/remove', { projectName: _editData2.default.projectName, model: {
                    id: model.id,
                    type: model.type
                } }, callback);
        }
    }]);

    return Resource;
}();

exports.default = new Resource();

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _httpClient = __webpack_require__(7);

var _httpClient2 = _interopRequireDefault(_httpClient);

var _editData = __webpack_require__(0);

var _editData2 = _interopRequireDefault(_editData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FileSystem = function () {
    function FileSystem() {
        _classCallCheck(this, FileSystem);
    }

    _createClass(FileSystem, [{
        key: 'createFile',
        value: function createFile(path, content, callback) {
            return _httpClient2.default.post('/fileSystem/createFile', {
                path: path,
                content: content,
                projectName: _editData2.default.projectName
            }, callback);
        }
    }, {
        key: 'uploadFile',
        value: function uploadFile(file, params, callback) {
            params = params || {};
            params.projectName = _editData2.default.projectName;
            return _httpClient2.default.postMultiPart('/fileSystem/uploadFile', file, params, callback);
        }
    }, {
        key: 'removeFile',
        value: function removeFile(path, callback) {
            return _httpClient2.default.post('/fileSystem/removeFile', {
                path: path,
                projectName: _editData2.default.projectName
            }, callback);
        }
    }, {
        key: 'readFile',
        value: function readFile(path, callback) {
            return _httpClient2.default.post('/fileSystem/readFile', {
                path: path,
                projectName: _editData2.default.projectName
            }, callback);
        }
    }, {
        key: 'renameFolder',
        value: function renameFolder(oldName, newName, callback) {
            return _httpClient2.default.post('/fileSystem/renameFolder', { oldName: oldName, newName: newName }, callback);
        }
    }, {
        key: 'deleteFolder',
        value: function deleteFolder(name, callback) {
            return _httpClient2.default.post('/fileSystem/deleteFolder', { name: name }, callback);
        }
    }]);

    return FileSystem;
}();

module.exports = new FileSystem();

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _commonObject = __webpack_require__(19);

var _commonObject2 = _interopRequireDefault(_commonObject);

var _tween = __webpack_require__(76);

var _tween2 = _interopRequireDefault(_tween);

var _eventEmitter = __webpack_require__(68);

var _eventEmitter2 = _interopRequireDefault(_eventEmitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BaseModel = function (_CommonObject) {
    _inherits(BaseModel, _CommonObject);

    function BaseModel(game) {
        _classCallCheck(this, BaseModel);

        var _this = _possibleConstructorReturn(this, (BaseModel.__proto__ || Object.getPrototypeOf(BaseModel)).call(this));

        if (false) throw 'can not create model \'' + _this.type + '\': game instance not passed to model constructor';
        _this._game = game;
        _this.id = null;
        _this.name = null;
        _this.tweens = [];
        _this._emitter = new _eventEmitter2.default();
        return _this;
    }

    _createClass(BaseModel, [{
        key: 'revalidate',
        value: function revalidate() {}
    }, {
        key: 'tween',
        value: function tween(desc) {
            var t = new _tween2.default(desc, this);
            this.tweens.push(t);
        }
    }, {
        key: 'update',
        value: function update(time) {
            var _this2 = this;

            this.tweens.forEach(function (t, index) {
                t.update(time);
                if (t.completed) _this2.tweens.splice(index, 1);
            });
        }
    }, {
        key: 'clone',
        value: function clone() {
            var Clazz = this.constructor;
            var obj = new Clazz(this._game);
            obj._cloner = this;
            return obj.fromJSON(this.toJSON(), true);
        }
    }, {
        key: 'on',
        value: function on(eventName, callBack) {
            this._emitter.on(eventName, callBack);
            return this;
        }
    }, {
        key: 'trigger',
        value: function trigger(eventName, data) {
            this._emitter.trigger(eventName, data);
        }
    }, {
        key: 'updateCloner',
        value: function updateCloner() {
            if (true) return;
            var cloner = this._cloner;
            if (!cloner) return;
            cloner.fromJSON(this.toJSON());
            cloner.updateCloner();
            delete this._cloner;
        }
    }]);

    return BaseModel;
}(_commonObject2.default);

exports.default = BaseModel;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _baseModel = __webpack_require__(5);

var _baseModel2 = _interopRequireDefault(_baseModel);

var _all = __webpack_require__(64);

var commonBehaviours = _interopRequireWildcard(_all);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GameObjectProto = function (_BaseModel) {
    _inherits(GameObjectProto, _BaseModel);

    _createClass(GameObjectProto, null, [{
        key: 'find',
        value: function find(name) {
            //return game.getCurrScene()._allGameObjects.find({name:name});
        }
    }, {
        key: 'findAll',
        value: function findAll(name) {
            //return game.getCurrScene()._allGameObjects.findAll({name: name});
        }
    }]);

    function GameObjectProto(game) {
        _classCallCheck(this, GameObjectProto);

        var _this = _possibleConstructorReturn(this, (GameObjectProto.__proto__ || Object.getPrototypeOf(GameObjectProto)).call(this, game));

        _this.type = 'GameObjectProto';
        _this.width = 0;
        _this.height = 0;
        _this.spriteSheet = null;
        _this.scale = { x: 1, y: 1 };
        _this.vel = { x: 0, y: 0 };
        _this.pos = { x: 0, y: 0 };
        _this.angle = 0;
        _this.alpha = 1;
        _this.rigid = false;
        _this._behaviour = null;
        _this.commonBehaviour = [];
        _this.currFrameIndex = 0;
        _this._sprPosX = 0;
        _this._sprPosY = 0;
        _this.frameAnimations = [];
        _this._currFrameAnimation = null;
        _this._timeCreated = null;
        _this.tileOffset = { x: 0, y: 0 };
        _this.tileRepeat = false;
        _this.groupName = '';
        return _this;
    }

    _createClass(GameObjectProto, [{
        key: 'revalidate',
        value: function revalidate() {
            var _this2 = this;

            this.setFrameIndex(this.currFrameIndex);
            if (this.spriteSheet) {
                this.width = this.spriteSheet._frameWidth;
                this.height = this.spriteSheet._frameHeight;
            }
            this.frameAnimations.forEach(function (f, i) {
                _this2.frameAnimations[i] = _this2.frameAnimations[i].clone();
                _this2.frameAnimations[i]._gameObject = _this2;
            });
        }
    }, {
        key: 'setCommonBehaviour',
        value: function setCommonBehaviour() {
            var _this3 = this;

            this.commonBehaviour.forEach(function (cb) {
                var CbClazz = commonBehaviours[cb.name];
                var instance = new CbClazz(_this3._game);
                instance.manage(_this3, cb.parameters);
            });
        }
    }, {
        key: 'getRect',
        value: function getRect() {
            return {
                x: this.pos.x,
                y: this.pos.y,
                width: this.width,
                height: this.height
            };
        }
    }, {
        key: 'playFrameAnimation',
        value: function playFrameAnimation(animationName) {
            var fr = this.frameAnimations.find(function (it) {
                return it.name === animationName;
            });
            fr._gameObject = this;
            this._currFrameAnimation = fr;
            fr.play();
        }
    }, {
        key: 'setFrameIndex',
        value: function setFrameIndex(index) {
            this.currFrameIndex = index;
            this._sprPosX = this.spriteSheet.getFramePosX(this.currFrameIndex);
            this._sprPosY = this.spriteSheet.getFramePosY(this.currFrameIndex);
        }
    }, {
        key: 'update',
        value: function update(time, delta) {
            _get(GameObjectProto.prototype.__proto__ || Object.getPrototypeOf(GameObjectProto.prototype), 'update', this).call(this, time);
            this._currFrameAnimation && this._currFrameAnimation.update(time);
            this._game._renderer.draw(this);
            if (this._individualBehaviour) this._individualBehaviour.onUpdate();
        }
    }, {
        key: 'onShow',
        value: function onShow() {
            if (this._individualBehaviour) this._individualBehaviour.onCreate();
        }
    }, {
        key: 'stopFrAnimations',
        value: function stopFrAnimations() {
            this._currFrameAnimation && this._currFrameAnimation.stop();
        }
    }]);

    return GameObjectProto;
}(_baseModel2.default);

exports.default = GameObjectProto;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});


var noop = function noop() {};

var objectToQuery = function objectToQuery(o) {
    if (!o) return '';
    if (o instanceof window.FormData) return o;
    var paramsArr = [];
    if (o == null || o == undefined || typeof o == 'string' || typeof o == 'number') return o;
    for (var key in o) {
        paramsArr.push([key, encodeURIComponent(o[key])]);
    }
    return paramsArr.map(function (item) {
        return [item[0] + '=' + item[1]];
    }).join('&');
};

var request = function request(data) {
    var abortTmr = null;
    var resolved = false;
    data.method = data.method || 'get';
    if (data.data && data.method == 'get') data.url += '?' + objectToQuery(data.data);
    var xhr = new XMLHttpRequest();
    var resolveFn = noop,
        rejectFn = noop;
    var promise = new Promise(function (resolve, reject) {
        resolveFn = resolve;
        rejectFn = reject;
    });
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200 || xhr.status == 0) {
                var resp = xhr.responseText;
                var contentType = xhr.getResponseHeader("Content-Type") || '';
                if (contentType.toLowerCase().indexOf('json') > -1) resp = JSON.parse(resp);
                if (data.success) {
                    data.success(resp);
                    RF.digest();
                }
                resolveFn(resp);
            } else {
                if (data.error) data.error({ status: xhr.status, error: xhr.statusText });
                rejectFn(xhr.statusText);
            }
            clearTimeout(abortTmr);
            resolved = true;
        }
    };
    xhr.open(data.method, data.url, true);
    if (data.requestType) {
        if (data.requestType != 'multipart/form-data') // at this case header needs to be auto generated
            xhr.setRequestHeader("Content-Type", data.requestType);
    } else {
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    }
    if (data.requestType == 'application/json') data.data = data.data && JSON.stringify(data.data);
    xhr.send(data.data);
    if (data.timeout) {
        abortTmr = setTimeout(function () {
            if (resolved) return;
            xhr.abort();
            if (data.ontimeout) data.ontimeout();
            rejectFn('timeout');
        }, data.timeout);
    }
    return promise;
};

var get = function get(url, data, success, error) {
    return request({
        method: 'get',
        url: url,
        data: data,
        success: success,
        error: error
    });
};

var post = function post(url, data, success, error) {
    return request({
        method: 'post',
        url: url,
        data: data,
        requestType: 'application/json',
        success: success,
        error: error
    });
};

var postMultiPart = function postMultiPart(url, file, data, success, error) {
    var formData = new FormData();
    Object.keys(data).forEach(function (key) {
        formData.append(key, data[key]);
    });
    formData.append('file', file);
    formData.append('fileName', file.name);
    return request({
        method: 'post',
        url: url,
        data: formData,
        requestType: 'multipart/form-data',
        success: success,
        error: error
    });
};

exports.default = { get: get, post: post, postMultiPart: postMultiPart };

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//const Vec2 = require('./vec2');

exports.isPointInRect = function (point, rect, angle) {
    // if (angle) {
    //     let vec2 = new Vec2(point.x - rect.x - rect.width/2,point.y - rect.y - rect.height/2);
    //     vec2.setAngle(vec2.getAngle() - angle);
    //     point = {x:vec2.getX() + point.x,y:vec2.getY() + point.y};
    //
    // }
    return point.x > rect.x && point.x < rect.x + rect.width && point.y > rect.y && point.y < rect.y + rect.height;
};
//
// exports.isRectIntersectRect = function(r1,r2) {
//     return (
//         !( r2.x > (r1.x+r1.width)
//         || (r2.x+r2.width) < r1.x
//         || r2.y > (r1.y+r1.height)
//         || (r2.y+r2.height) < r1.y
//         )
//     );
// };

exports.radToDeg = function (rad) {
    return rad * 180 / Math.PI;
};

exports.degToRad = function (deg) {
    return deg * Math.PI / 180;
};

exports.random = function (min, max) {
    if (min > max) {
        var tmp = min;
        min = max;
        max = tmp;
    }
    var res = Math.random() * (max - min) + min;
    if (res > max) res = max;else if (res < min) res = min;
    return res;
};
//
// exports.getNormalizedVectorFromPoints = function(pointA,pointB) {
//     let angle = Math.atan2(pointB.y-pointA.y,pointB.x-pointA.x);
//     return {
//         x:Math.cos(angle),
//         y:Math.sin(angle)
//     }
// };
//
var ease = {};

// simple linear tweening - no easing, no acceleration
ease.linear = function (t, b, c, d) {
    return c * t / d + b;
};

// quadratic easing in - accelerating from zero velocity
ease.easeInQuad = function (t, b, c, d) {
    t /= d;
    return c * t * t + b;
};

// quadratic easing out - decelerating to zero velocity
ease.easeOutQuad = function (t, b, c, d) {
    t /= d;
    return -c * t * (t - 2) + b;
};

// quadratic easing in/out - acceleration until halfway, then deceleration
ease.easeInOutQuad = function (t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
};

// // cubic easing in - accelerating from zero velocity
// ease.easeInCubic = function (t, b, c, d) {
//     t /= d;
//     return c*t*t*t + b;
// };
//
// // cubic easing out - decelerating to zero velocity
// ease.easeOutCubic = function (t, b, c, d) {
//     t /= d;
//     t--;
//     return c*(t*t*t + 1) + b;
// };
//
// // cubic easing in/out - acceleration until halfway, then deceleration
// ease.easeInOutCubic = function (t, b, c, d) {
//     t /= d/2;
//     if (t < 1) return c/2*t*t*t + b;
//     t -= 2;
//     return c/2*(t*t*t + 2) + b;
// };
//
// // quartic easing in - accelerating from zero velocity
// ease.easeInQuart = function (t, b, c, d) {
//     t /= d;
//     return c*t*t*t*t + b;
// };
//
// // quartic easing out - decelerating to zero velocity
// ease.easeOutQuart = function (t, b, c, d) {
//     t /= d;
//     t--;
//     return -c * (t*t*t*t - 1) + b;
// };
//
// // quartic easing in/out - acceleration until halfway, then deceleration
// ease.easeInOutQuart = function (t, b, c, d) {
//     t /= d/2;
//     if (t < 1) return c/2*t*t*t*t + b;
//     t -= 2;
//     return -c/2 * (t*t*t*t - 2) + b;
// };
//
// // quintic easing in - accelerating from zero velocity
// ease.easeInQuint = function (t, b, c, d) {
//     t /= d;
//     return c*t*t*t*t*t + b;
// };
//
// // quintic easing out - decelerating to zero velocity
// ease.easeOutQuint = function (t, b, c, d) {
//     t /= d;
//     t--;
//     return c*(t*t*t*t*t + 1) + b;
// };
//
// // quintic easing in/out - acceleration until halfway, then deceleration
// ease.easeInOutQuint = function (t, b, c, d) {
//     t /= d/2;
//     if (t < 1) return c/2*t*t*t*t*t + b;
//     t -= 2;
//     return c/2*(t*t*t*t*t + 2) + b;
// };
//
//
// // sinusoidal easing in - accelerating from zero velocity
// ease.easeInSine = function (t, b, c, d) {
//     return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
// };
//
//
//
// // sinusoidal easing out - decelerating to zero velocity
// ease.easeOutSine = function (t, b, c, d) {
//     return c * Math.sin(t/d * (Math.PI/2)) + b;
// };
//
//
//
// // sinusoidal easing in/out - accelerating until halfway, then decelerating
// ease.easeInOutSine = function (t, b, c, d) {
//     return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
// };
//
// // exponential easing in - accelerating from zero velocity
// ease.easeInExpo = function (t, b, c, d) {
//     return c * Math.pow( 2, 10 * (t/d - 1) ) + b;
// };
//
// // exponential easing out - decelerating to zero velocity
// ease.easeOutExpo = function (t, b, c, d) {
//     return c * ( -Math.pow( 2, -10 * t/d ) + 1 ) + b;
// };
//
// // exponential easing in/out - accelerating until halfway, then decelerating
// ease.easeInOutExpo = function (t, b, c, d) {
//     t /= d/2;
//     if (t < 1) return c/2 * Math.pow( 2, 10 * (t - 1) ) + b;
//     t--;
//     return c/2 * ( -Math.pow( 2, -10 * t) + 2 ) + b;
// };
//
// // circular easing in - accelerating from zero velocity
// ease.easeInCirc = function (t, b, c, d) {
//     t /= d;
//     return -c * (Math.sqrt(1 - t*t) - 1) + b;
// };
//
//
//
// // circular easing out - decelerating to zero velocity
// ease.easeOutCirc = function (t, b, c, d) {
//     t /= d;
//     t--;
//     return c * Math.sqrt(1 - t*t) + b;
// };
//
// // circular easing in/out - acceleration until halfway, then deceleration
// ease.easeInOutCirc = function (t, b, c, d) {
//     t /= d/2;
//     if (t < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
//     t -= 2;
//     return c/2 * (Math.sqrt(1 - t*t) + 1) + b;
// };
//
// ease.easeInElastic = function (t, b, c, d) {
//     let s=1.70158;let p=0;let a=c;
//     if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
//     if (a < Math.abs(c)) { a=c; s=p/4; }
//     else s = p/(2*Math.PI) * Math.asin (c/a);
//     return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
// };
//
// ease.easeOutElastic = function (t, b, c, d) {
//     let s=1.70158;let p=0;let a=c;
//     if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
//     if (a < Math.abs(c)) { a=c; s=p/4; }
//     else s = p/(2*Math.PI) * Math.asin (c/a);
//     return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
// };
//
// ease.easeInOutElastic = function (t, b, c, d) {
//     let s=1.70158;let p=0;let a=c;
//     if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
//     if (a < Math.abs(c)) { a=c; s=p/4; }
//     else s = p/(2*Math.PI) * Math.asin (c/a);
//     if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
//     return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
// };
//
// ease.easeInBack = function (t, b, c, d) {
//     let s = 1.70158;
//     return c*(t/=d)*t*((s+1)*t - s) + b;
// };
//
// ease.easeOutBack = function (t, b, c, d) {
//     let s = 1.70158;
//     return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
// };
//
// ease.easeInOutBack = function (t, b, c, d) {
//     let s = 1.70158;
//     if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
//     return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
// };
//
// ease.easeInBounce = function(t, b, c, d) {
//     return c - ease.easeOutBounce (d-t, 0, c, d) + b;
// };
//
// ease.easeOutBounce  = function(t, b, c, d){
//     if ((t/=d) < (1/2.75)) {
//         return c*(7.5625*t*t) + b;
//     } else if (t < (2/2.75)) {
//         return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
//     } else if (t < (2.5/2.75)) {
//         return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
//     } else {
//         return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
//     }
// };
//
// ease.easeInOutBounce = function(t, b, c, d) {
//     if (t < d/2) return ease.easeInBounce(t*2, 0, c, d) * .5 + b;
//     else return ease.easeOutBounce(t*2-d, 0, c, d) * .5 + c*.5 + b;
// };
//
exports.ease = ease;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _baseModel = __webpack_require__(5);

var _baseModel2 = _interopRequireDefault(_baseModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Layer = function (_BaseModel) {
    _inherits(Layer, _BaseModel);

    function Layer(game) {
        _classCallCheck(this, Layer);

        var _this = _possibleConstructorReturn(this, (Layer.__proto__ || Object.getPrototypeOf(Layer)).call(this, game));

        _this.type = 'Layer';
        _this.gameObjects = [];
        return _this;
    }

    _createClass(Layer, [{
        key: 'addGameObject',
        value: function addGameObject(go) {
            go._layer = this;
            this.gameObjects.push(go);
        }
    }, {
        key: 'getAllSpriteSheets',
        value: function getAllSpriteSheets() {
            var dataSet = [];
            this.gameObjects.forEach(function (obj) {
                obj.spriteSheet && !dataSet.find(function (it) {
                    return obj.id === it.id;
                }) && dataSet.push(obj.spriteSheet);
            });
            return dataSet;
        }
    }, {
        key: 'onShow',
        value: function onShow() {
            this.gameObjects.forEach(function (g) {
                g.onShow();
            });
        }
    }, {
        key: 'update',
        value: function update(currTime, deltaTime) {
            var all = this.gameObjects;
            var i = all.length;
            var l = i - 1;
            while (i--) {
                var obj = all[l - i];
                obj && obj.update(currTime, deltaTime);
            }
        }
    }]);

    return Layer;
}(_baseModel2.default);

exports.default = Layer;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _baseModel = __webpack_require__(5);

var _baseModel2 = _interopRequireDefault(_baseModel);

var _loadingQueue = __webpack_require__(70);

var _loadingQueue2 = _interopRequireDefault(_loadingQueue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Scene = function (_BaseModel) {
    _inherits(Scene, _BaseModel);

    function Scene(game) {
        _classCallCheck(this, Scene);

        var _this = _possibleConstructorReturn(this, (Scene.__proto__ || Object.getPrototypeOf(Scene)).call(this, game));

        _this.type = 'Scene';
        _this.alpha = 1;
        _this.layers = [];
        _this.useBG = false;
        _this.colorBG = { r: 255, g: 255, b: 255 };
        _this._tweenMovies = [];
        _this.tileMap = {
            _spriteSheet: null,
            spriteSheetId: null,
            width: 0,
            height: 0,
            data: []
        };

        // if (!this.tileMap) {
        //     if (this.tileMap.spriteSheetId) {
        //         this.tileMap._spriteSheet = bundle.spriteSheetList.find({id: this.tileMap.spriteSheetId});
        //         if (!this.tileMap._spriteSheet) return;
        //         this.tileMap._tilesInScreenX = ~~(bundle.gameProps.width / this.tileMap._spriteSheet._frameWidth);
        //         this.tileMap._tilesInScreenY = ~~(bundle.gameProps.height / this.tileMap._spriteSheet._frameHeight);
        //     }
        // }
        return _this;
    }

    _createClass(Scene, [{
        key: 'addTweenMovie',
        value: function addTweenMovie(tm) {
            this._tweenMovies.push(tm);
        }
    }, {
        key: 'getAllSpriteSheets',
        value: function getAllSpriteSheets() {
            var dataSet = {};
            this.layers.forEach(function (l) {
                l.getAllSpriteSheets().forEach(function (s) {
                    dataSet[s.id] = s;
                });
            });
            // if (this.tileMap && this.tileMap.spriteSheet) {
            //     dataSet.add(this.tileMap._spriteSheet);
            // }
            return Object.keys(dataSet).map(function (key) {
                return dataSet[key];
            });
        }
    }, {
        key: 'preload',
        value: function preload(cb) {
            var _this2 = this;

            var resources = this.getAllSpriteSheets();
            var q = new _loadingQueue2.default();
            q.onResolved = function () {
                cb && cb();
            };
            resources.forEach(function (res) {
                q.addTask(function () {
                    _this2._game._renderer.loadTextureInfo(res.resourcePath, function () {
                        return q.resolveTask(res.id);
                    });
                }, res.id);
            });
            q.start();
        }
    }, {
        key: 'onShow',
        value: function onShow() {
            this.layers.forEach(function (l) {
                l.onShow();
            });
        }
    }, {
        key: 'update',
        value: function update(currTime, deltaTime) {
            this._game._renderer.clear();
            var layers = this.layers;
            var i = this.layers.length;
            var l = i - 1;
            while (i--) {
                layers[i - l].update(currTime, deltaTime);
            }
            // this._tweenMovies.forEach(function(tweenMovie){
            //     if (tweenMovie.completed) {
            //         this._tweenMovies.remove(tweenMovie);
            //     }
            //     tweenMovie._update(currTime);
            // });
            // this.__updateIndividualBehaviour__(currTime);
        }
    }, {
        key: 'fadeIn',
        value: function fadeIn(time, easeFnName) {
            return this.tween(this, { to: { alpha: 1 } }, time, easeFnName);
        }
    }, {
        key: 'fadeOut',
        value: function fadeOut(time, easeFnName) {
            return this.tween(this, { to: { alpha: 0 } }, time, easeFnName);
        }
    }, {
        key: 'tween',
        value: function tween(obj, fromToVal, tweenTime, easeFnName) {
            var movie = new tweenMovieModule.TweenMovie();
            var tween = new tweenModule.Tween(obj, fromToVal, tweenTime, easeFnName);
            movie.tween(0, tween);
            movie.play();
        }
    }, {
        key: '_render',
        value: function _render() {
            // let spriteSheet = this.tileMap._spriteSheet;
            // if (!spriteSheet) return;
            // let ctx = renderer.getContext();
            // let tilePosX = ~~(camera.pos.x / this.tileMap._spriteSheet._frameWidth);
            // let tilePosY = ~~(camera.pos.y / this.tileMap._spriteSheet._frameHeight);
            // let w = tilePosX + this.tileMap._tilesInScreenX + 2;
            // let h = tilePosY + this.tileMap._tilesInScreenY + 2;
            // for (let y=tilePosY;y<h;y++) {
            //     for (let x=tilePosX;x<w;x++) {
            //         let index = this.tileMap.data[y] && this.tileMap.data[y][x];
            //         if (index==undefined) continue;
            //         ctx.drawImage(
            //             resourceCache.get(spriteSheet.resourcePath),
            //             spriteSheet.getFramePosX(index),
            //             spriteSheet.getFramePosY(index),
            //             spriteSheet._frameWidth,
            //             spriteSheet._frameHeight,
            //             x*spriteSheet._frameWidth,
            //             y*spriteSheet._frameHeight
            //         );
            //     }
            // }
        }
    }, {
        key: 'getTileAt',
        value: function getTileAt(x, y) {
            if (!this.tileMap._spriteSheet) return null;
            var tilePosX = ~~(x / this.tileMap._spriteSheet._frameWidth);
            var tilePosY = ~~(y / this.tileMap._spriteSheet._frameHeight);
            return this.tileMap.data[tilePosY] && this.tileMap.data[tilePosY][tilePosX];
        }
    }, {
        key: 'printText',
        value: function printText(x, y, text, font) {
            if (!text) return;
            if (!text.substring) text = JSON.stringify(text, null, 4);
            this.game.renderer.printText(x, y, text, font);
        }
    }, {
        key: 'log',
        value: function log(text) {
            this.printText(0, 0, text);
        }
    }]);

    return Scene;
}(_baseModel2.default);

exports.default = Scene;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _baseModel = __webpack_require__(5);

var _baseModel2 = _interopRequireDefault(_baseModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SpriteSheet = function (_BaseModel) {
    _inherits(SpriteSheet, _BaseModel);

    function SpriteSheet(game) {
        _classCallCheck(this, SpriteSheet);

        var _this = _possibleConstructorReturn(this, (SpriteSheet.__proto__ || Object.getPrototypeOf(SpriteSheet)).call(this, game));

        _this.type = 'SpriteSheet';
        _this.width = 0;
        _this.height = 0;
        _this.numOfFramesH = 1;
        _this.numOfFramesV = 1;
        _this._frameWidth = 0;
        _this._frameHeight = 0;
        _this._numOfFrames = 0;
        _this.resourcePath = '';
        return _this;
    }

    _createClass(SpriteSheet, [{
        key: 'revalidate',
        value: function revalidate() {
            if (!(this.numOfFramesH && this.numOfFramesV)) return;
            this._frameWidth = ~~(this.width / this.numOfFramesH);
            this._frameHeight = ~~(this.height / this.numOfFramesV);
            this._numOfFrames = this.numOfFramesH * this.numOfFramesV;
        }
    }, {
        key: 'getFramePosX',
        value: function getFramePosX(frameIndex) {
            return frameIndex % this.numOfFramesH * this._frameWidth;
        }
    }, {
        key: 'getFramePosY',
        value: function getFramePosY(frameIndex) {
            return ~~(frameIndex / this.numOfFramesH) * this._frameHeight;
        }
    }]);

    return SpriteSheet;
}(_baseModel2.default);

exports.default = SpriteSheet;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _baseModel = __webpack_require__(5);

var _baseModel2 = _interopRequireDefault(_baseModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CommonBehaviour = function (_BaseModel) {
    _inherits(CommonBehaviour, _BaseModel);

    function CommonBehaviour(game) {
        _classCallCheck(this, CommonBehaviour);

        var _this = _possibleConstructorReturn(this, (CommonBehaviour.__proto__ || Object.getPrototypeOf(CommonBehaviour)).call(this, game));

        _this.type = 'CommonBehaviour';
        _this.parameters = [];
        _this.description = null;
        return _this;
    }

    return CommonBehaviour;
}(_baseModel2.default);

exports.default = CommonBehaviour;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _gameObjectProto = __webpack_require__(6);

var _gameObjectProto2 = _interopRequireDefault(_gameObjectProto);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GameObject = function (_GameObjectProto) {
    _inherits(GameObject, _GameObjectProto);

    function GameObject(game) {
        _classCallCheck(this, GameObject);

        var _this = _possibleConstructorReturn(this, (GameObject.__proto__ || Object.getPrototypeOf(GameObject)).call(this, game));

        _this.type = 'GameObject';
        _this.layerId = null;
        return _this;
    }

    _createClass(GameObject, [{
        key: 'setIndividualBehaviour',
        value: function setIndividualBehaviour(clazz) {
            var instance = new clazz();
            instance.game = this._game;
            instance.object = this;
            this._individualBehaviour = instance;
        }
    }]);

    return GameObject;
}(_gameObjectProto2.default);

exports.default = GameObject;
;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _baseModel = __webpack_require__(5);

var _baseModel2 = _interopRequireDefault(_baseModel);

var _mathEx = __webpack_require__(8);

var mathEx = _interopRequireWildcard(_mathEx);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var r = function r(obj) {
    return mathEx.random(obj.from, obj.to);
};

var ParticleSystem = function (_BaseModel) {
    _inherits(ParticleSystem, _BaseModel);

    function ParticleSystem(game) {
        _classCallCheck(this, ParticleSystem);

        var _this = _possibleConstructorReturn(this, (ParticleSystem.__proto__ || Object.getPrototypeOf(ParticleSystem)).call(this, game));

        _this.type = 'ParticleSystem';
        _this.gameObjectProto = null;
        _this._particles = [];
        _this.numOfParticlesToEmit = { from: 1, to: 10 };
        _this.particleAngle = { from: 0, to: 0 };
        _this.particleVelocity = { from: 1, to: 100 };
        _this.particleLiveTime = { from: 100, to: 1000 };
        _this.emissionRadius = 0;
        return _this;
    }

    _createClass(ParticleSystem, [{
        key: 'revalidate',
        value: function revalidate() {
            if (this.particleAngle.to < this.particleAngle.from) this.particleAngle.to += 2 * Math.PI;
        }
    }, {
        key: 'emit',
        value: function emit(x, y) {
            for (var i = 0; i < r(this.numOfParticlesToEmit); i++) {
                var particle = this.gameObjectProto.clone();
                var angle = r(this.particleAngle);
                var vel = r(this.particleVelocity);
                particle.vel.x = vel * Math.cos(angle);
                particle.vel.y = vel * Math.sin(angle);
                particle.pos.x = r({ from: x - this.emissionRadius, to: x + this.emissionRadius });
                particle.pos.y = r({ from: y - this.emissionRadius, to: y + this.emissionRadius });
                particle.liveTime = r(this.particleLiveTime);
                // bundle.applyBehaviour(particle); todo
                this._particles.push(particle);
            }
        }
    }, {
        key: 'update',
        value: function update(time, delta) {
            var all = this._particles;
            var i = all.length;
            var l = i - 1;
            while (i--) {
                var p = all[l - i];
                if (!p) continue;
                if (!p._timeCreated) p._timeCreated = time;
                if (time - p._timeCreated > p.liveTime) {
                    this._particles.splice(this._particles.indexOf(p), 1);
                }
                p.update(time, delta);
            }
        }
    }], [{
        key: 'find',
        value: function find(name) {
            //return bundle.particleSystemList.find({name:name});
        }
    }, {
        key: 'findAll',
        value: function findAll(name) {
            //return bundle.particleSystemList.findAll({name:name});
        }
    }]);

    return ParticleSystem;
}(_baseModel2.default);

exports.default = ParticleSystem;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _editData = __webpack_require__(0);

var _editData2 = _interopRequireDefault(_editData);

var _resource = __webpack_require__(3);

var _resource2 = _interopRequireDefault(_resource);

var _utils = __webpack_require__(2);

var _utils2 = _interopRequireDefault(_utils);

var _i18n = __webpack_require__(1);

var _i18n2 = _interopRequireDefault(_i18n);

__webpack_require__(41);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = RF.registerComponent('app-particle-system-dialog', {
    template: {
        type: 'string',
        value: __webpack_require__(105)
    },
    form: { valid: function valid() {
            return true;
        } },
    editData: _editData2.default,
    utils: _utils2.default,
    i18n: _i18n2.default.getAll(),
    showPreview: function showPreview() {
        _editData2.default.currParticleSystemInEdit.revalidate();
        RF.getComponentById('particleSystemPreviewDialog').open();
    },
    onGameObjectSelected: function onGameObjectSelected(go) {
        if (!_editData2.default.currParticleSystemInEdit.name) _editData2.default.currParticleSystemInEdit.name = go.name + 'ParticleSystem';
    },
    createOrEditPs: function createOrEditPs(model) {
        var _this = this;

        return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var resp;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return _resource2.default.save(model);

                        case 2:
                            resp = _context.sent;

                            if (resp.created) {
                                model.id = resp.id;
                                _editData2.default.game._repository.addObject(model);
                            } else if (resp.updated) {
                                model.updateCloner();
                            }
                            RF.getComponentById('particleSystemModal').close();

                        case 5:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, _this);
        }))();
    }
});

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _editData = __webpack_require__(0);

var _editData2 = _interopRequireDefault(_editData);

var _resource = __webpack_require__(3);

var _resource2 = _interopRequireDefault(_resource);

var _commonBehaviour = __webpack_require__(12);

var _commonBehaviour2 = _interopRequireDefault(_commonBehaviour);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ResourceHelper = function () {
    function ResourceHelper() {
        _classCallCheck(this, ResourceHelper);
    }

    _createClass(ResourceHelper, [{
        key: 'loadProject',
        value: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(projectName) {
                var allData, scenes;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                document.title = _editData2.default.projectName;
                                sessionStorage.projectName = projectName;

                                _context.next = 4;
                                return _resource2.default.getAll(projectName);

                            case 4:
                                allData = _context.sent;

                                _editData2.default.reset(allData.gameProps);
                                _editData2.default.projectName = projectName;
                                _editData2.default.commonBehaviourProtos = allData.commonBehaviourProtos.map(function (it) {
                                    return new _commonBehaviour2.default(_editData2.default.game).fromJSON(it);
                                });
                                _editData2.default.game._repository.setDescriptions(allData.repository);

                                scenes = _editData2.default.game._repository.getArray('Scene');

                                _editData2.default.currSceneInEdit = scenes[0];
                                _editData2.default.currLayerInEdit = scenes[0] && scenes[0].layers[0];
                                RF.Router.navigateTo('editor');

                            case 13:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function loadProject(_x) {
                return _ref.apply(this, arguments);
            }

            return loadProject;
        }()
    }]);

    return ResourceHelper;
}();

exports.default = new ResourceHelper();

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _httpClient = __webpack_require__(7);

var _httpClient2 = _interopRequireDefault(_httpClient);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Project = function () {
    function Project() {
        _classCallCheck(this, Project);
    }

    _createClass(Project, [{
        key: 'getAll',
        value: function getAll(callback) {
            return _httpClient2.default.get('/project/getAll', {}, callback);
        }
    }, {
        key: 'create',
        value: function create(projectName, callback) {
            return _httpClient2.default.post('/project/create', { projectName: projectName }, callback);
        }
    }]);

    return Project;
}();

exports.default = new Project();

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// The programming goals of Split.js are to deliver readable, understandable and
// maintainable code, while at the same time manually optimizing for tiny minified file size,
// browser compatibility without additional requirements, graceful fallback (IE8 is supported)
// and very few assumptions about the user's page layout.
//
// Make sure all browsers handle this JS library correctly with ES5.
// More information here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode


// A wrapper function that does a couple things:
//
// 1. Doesn't pollute the global namespace. This is important for a library.
// 2. Allows us to mount the library in different module systems, as well as
//    directly in the browser.

(function () {

    // Save the global `this` for use later. In this case, since the library only
    // runs in the browser, it will refer to `window`. Also, figure out if we're in IE8
    // or not. IE8 will still render correctly, but will be static instead of draggable.
    //
    // Save a couple long function names that are used frequently.
    // This optimization saves around 400 bytes.
    var global = this,
        isIE8 = global.attachEvent && !global[addEventListener],
        document = global.document,
        addEventListener = 'addEventListener',
        removeEventListener = 'removeEventListener',
        getBoundingClientRect = 'getBoundingClientRect'

    // This library only needs two helper functions:
    //
    // The first determines which prefixes of CSS calc we need.
    // We only need to do this once on startup, when this anonymous function is called.
    //
    // Tests -webkit, -moz and -o prefixes. Modified from StackOverflow:
    // http://stackoverflow.com/questions/16625140/js-feature-detection-to-detect-the-usage-of-webkit-calc-over-calc/16625167#16625167
    ,
        calc = function () {
        var el,
            prefixes = ["", "-webkit-", "-moz-", "-o-"];

        for (var i = 0; i < prefixes.length; i++) {
            el = document.createElement('div');
            el.style.cssText = "width:" + prefixes[i] + "calc(9px)";

            if (el.style.length) {
                return prefixes[i] + "calc";
            }
        }
    }()

    // The second helper function allows elements and string selectors to be used
    // interchangeably. In either case an element is returned. This allows us to
    // do `Split(elem1, elem2)` as well as `Split('#id1', '#id2')`.
    ,
        elementOrSelector = function elementOrSelector(el) {
        if (typeof el === 'string' || el instanceof String) {
            return document.querySelector(el);
        } else {
            return el;
        }
    }

    // The main function to initialize a split. Split.js thinks about each pair
    // of elements as an independant pair. Dragging the gutter between two elements
    // only changes the dimensions of elements in that pair. This is key to understanding
    // how the following functions operate, since each function is bound to a pair.
    //
    // A pair object is shaped like this:
    //
    // {
    //     a: DOM element,
    //     b: DOM element,
    //     aMin: Number,
    //     bMin: Number,
    //     dragging: Boolean,
    //     parent: DOM element,
    //     isFirst: Boolean,
    //     isLast: Boolean,
    //     direction: 'horizontal' | 'vertical'
    // }
    //
    // The basic sequence:
    //
    // 1. Set defaults to something sane. `options` doesn't have to be passed at all.
    // 2. Initialize a bunch of strings based on the direction we're splitting.
    //    A lot of the behavior in the rest of the library is paramatized down to
    //    rely on CSS strings and classes.
    // 3. Define the dragging helper functions, and a few helpers to go with them.
    // 4. Define a few more functions that "balance" the entire split instance.
    //    Split.js tries it's best to cope with min sizes that don't add up.
    // 5. Loop through the elements while pairing them off. Every pair gets an
    //    `pair` object, a gutter, and special isFirst/isLast properties.
    // 6. Actually size the pair elements, insert gutters and attach event listeners.
    // 7. Balance all of the pairs to accomodate min sizes as best as possible.
    ,
        Split = function Split(ids, options) {
        var dimension,
            i,
            clientDimension,
            clientAxis,
            position,
            gutterClass,
            paddingA,
            paddingB,
            pairs = [];

        // 1. Set defaults to something sane. `options` doesn't have to be passed at all,
        // so create an options object if none exists. Pixel values 10, 100 and 30 are
        // arbitrary but feel natural.
        options = typeof options !== 'undefined' ? options : {};

        if (typeof options.gutterSize === 'undefined') options.gutterSize = 10;
        if (typeof options.minSize === 'undefined') options.minSize = 100;
        if (typeof options.snapOffset === 'undefined') options.snapOffset = 30;
        if (typeof options.direction === 'undefined') options.direction = 'horizontal';

        // 2. Initialize a bunch of strings based on the direction we're splitting.
        // A lot of the behavior in the rest of the library is paramatized down to
        // rely on CSS strings and classes.
        if (options.direction == 'horizontal') {
            dimension = 'width';
            clientDimension = 'clientWidth';
            clientAxis = 'clientX';
            position = 'left';
            gutterClass = 'gutter gutter-horizontal';
            paddingA = 'paddingLeft';
            paddingB = 'paddingRight';
            if (!options.cursor) options.cursor = 'ew-resize';
        } else if (options.direction == 'vertical') {
            dimension = 'height';
            clientDimension = 'clientHeight';
            clientAxis = 'clientY';
            position = 'top';
            gutterClass = 'gutter gutter-vertical';
            paddingA = 'paddingTop';
            paddingB = 'paddingBottom';
            if (!options.cursor) options.cursor = 'ns-resize';
        }

        // 3. Define the dragging helper functions, and a few helpers to go with them.
        // Each helper is bound to a pair object that contains it's metadata. This
        // also makes it easy to store references to listeners that that will be
        // added and removed.
        //
        // Even though there are no other functions contained in them, aliasing
        // this to self saves 50 bytes or so since it's used so frequently.
        //
        // The pair object saves metadata like dragging state, position and
        // event listener references.
        //
        // startDragging calls `calculateSizes` to store the inital size in the pair object.
        // It also adds event listeners for mouse/touch events,
        // and prevents selection while dragging so avoid the selecting text.
        var startDragging = function startDragging(e) {
            // Alias frequently used variables to save space. 200 bytes.
            var self = this,
                a = self.a,
                b = self.b;

            // Call the onDragStart callback.
            if (!self.dragging && options.onDragStart) {
                options.onDragStart();
            }

            // Don't actually drag the element. We emulate that in the drag function.
            e.preventDefault();

            // Set the dragging property of the pair object.
            self.dragging = true;

            // Create two event listeners bound to the same pair object and store
            // them in the pair object.
            self.move = drag.bind(self);
            self.stop = stopDragging.bind(self);

            // All the binding. `window` gets the stop events in case we drag out of the elements.
            global[addEventListener]('mouseup', self.stop);
            global[addEventListener]('touchend', self.stop);
            global[addEventListener]('touchcancel', self.stop);

            self.parent[addEventListener]('mousemove', self.move);
            self.parent[addEventListener]('touchmove', self.move);

            // Disable selection. Disable!
            a[addEventListener]('selectstart', noop);
            a[addEventListener]('dragstart', noop);
            b[addEventListener]('selectstart', noop);
            b[addEventListener]('dragstart', noop);

            a.style.userSelect = 'none';
            a.style.webkitUserSelect = 'none';
            a.style.MozUserSelect = 'none';
            a.style.pointerEvents = 'none';

            b.style.userSelect = 'none';
            b.style.webkitUserSelect = 'none';
            b.style.MozUserSelect = 'none';
            b.style.pointerEvents = 'none';

            // Set the cursor, both on the gutter and the parent element.
            // Doing only a, b and gutter causes flickering.
            //self.gutter.style.cursor = options.cursor
            //self.parent.style.cursor = options.cursor

            // Cache the initial sizes of the pair.
            calculateSizes.call(self);
        }

        // stopDragging is very similar to startDragging in reverse.
        ,
            stopDragging = function stopDragging() {
            var self = this,
                a = self.a,
                b = self.b;

            if (self.dragging && options.onDragEnd) {
                options.onDragEnd();
            }

            self.dragging = false;

            // Remove the stored event listeners. This is why we store them.
            global[removeEventListener]('mouseup', self.stop);
            global[removeEventListener]('touchend', self.stop);
            global[removeEventListener]('touchcancel', self.stop);

            self.parent[removeEventListener]('mousemove', self.move);
            self.parent[removeEventListener]('touchmove', self.move);

            // Delete them once they are removed. I think this makes a difference
            // in memory usage with a lot of splits on one page. But I don't know for sure.
            delete self.stop;
            delete self.move;

            a[removeEventListener]('selectstart', noop);
            a[removeEventListener]('dragstart', noop);
            b[removeEventListener]('selectstart', noop);
            b[removeEventListener]('dragstart', noop);

            a.style.userSelect = '';
            a.style.webkitUserSelect = '';
            a.style.MozUserSelect = '';
            a.style.pointerEvents = '';

            b.style.userSelect = '';
            b.style.webkitUserSelect = '';
            b.style.MozUserSelect = '';
            b.style.pointerEvents = '';

            self.gutter.style.cursor = '';
            self.parent.style.cursor = '';
        }

        // drag, where all the magic happens. The logic is really quite simple:
        //
        // 1. Ignore if the pair is not dragging.
        // 2. Get the offset of the event.
        // 3. Snap offset to min if within snappable range (within min + snapOffset).
        // 4. Actually adjust each element in the pair to offset.
        //
        // ---------------------------------------------------------------------
        // |    | <- this.aMin               ||              this.bMin -> |    |
        // |    |  | <- this.snapOffset      ||     this.snapOffset -> |  |    |
        // |    |  |                         ||                        |  |    |
        // |    |  |                         ||                        |  |    |
        // ---------------------------------------------------------------------
        // | <- this.start                                        this.size -> |
        ,
            drag = function drag(e) {
            var offset;

            if (!this.dragging) return;

            // Get the offset of the event from the first side of the
            // pair `this.start`. Supports touch events, but not multitouch, so only the first
            // finger `touches[0]` is counted.
            if ('touches' in e) {
                offset = e.touches[0][clientAxis] - this.start;
            } else {
                offset = e[clientAxis] - this.start;
            }

            // If within snapOffset of min or max, set offset to min or max.
            // snapOffset buffers aMin and bMin, so logic is opposite for both.
            // Include the appropriate gutter sizes to prevent overflows.
            if (offset <= this.aMin + options.snapOffset + this.aGutterSize) {
                offset = this.aMin + this.aGutterSize;
            } else if (offset >= this.size - (this.bMin + options.snapOffset + this.bGutterSize)) {
                offset = this.size - (this.bMin + this.bGutterSize);
            }

            // Actually adjust the size.
            adjust.call(this, offset);

            // Call the drag callback continously. Don't do anything too intensive
            // in this callback.
            if (options.onDrag) {
                options.onDrag();
            }
        }

        // Cache some important sizes when drag starts, so we don't have to do that
        // continously:
        //
        // `size`: The total size of the pair. First element + second element + first gutter + second gutter.
        // `percentage`: The percentage between 0-100 that the pair occupies in the parent.
        // `start`: The leading side of the first element.
        //
        // ------------------------------------------------ - - - - - - - - - - -
        // |      aGutterSize -> |||                      |                     |
        // |                     |||                      |                     |
        // |                     |||                      |                     |
        // |                     ||| <- bGutterSize       |                     |
        // ------------------------------------------------ - - - - - - - - - - -
        // | <- start                             size -> |       parentSize -> |
        ,
            calculateSizes = function calculateSizes() {
            // Figure out the parent size minus padding.
            var computedStyle = global.getComputedStyle(this.parent),
                parentSize = this.parent[clientDimension] - parseFloat(computedStyle[paddingA]) - parseFloat(computedStyle[paddingB]);

            this.size = this.a[getBoundingClientRect]()[dimension] + this.b[getBoundingClientRect]()[dimension] + this.aGutterSize + this.bGutterSize;
            this.percentage = Math.min(this.size / parentSize * 100, 100);
            this.start = this.a[getBoundingClientRect]()[position];
        }

        // Actually adjust the size of elements `a` and `b` to `offset` while dragging.
        // calc is used to allow calc(percentage + gutterpx) on the whole split instance,
        // which allows the viewport to be resized without additional logic.
        // Element a's size is the same as offset. b's size is total size - a size.
        // Both sizes are calculated from the initial parent percentage, then the gutter size is subtracted.
        ,
            adjust = function adjust(offset) {
            var aSize = offset / this.size * this.percentage;
            var bSize = this.percentage - offset / this.size * this.percentage;
            //var aId = this.a.getAttribute('id');
            //var bId = this.b.getAttribute('id');
            //var toSave = {};
            //toSave[aId] = aSize.toFixed(1);
            //toSave[bId] = bSize.toFixed(1);
            //localStorage.layout = JSON.stringify(toSave);
            this.a.style[dimension] = calc + '(' + aSize + '% - ' + this.aGutterSize + 'px)';
            this.b.style[dimension] = calc + '(' + bSize + '% - ' + this.bGutterSize + 'px)';
        }

        // 4. Define a few more functions that "balance" the entire split instance.
        // Split.js tries it's best to cope with min sizes that don't add up.
        // At some point this should go away since it breaks out of the calc(% - px) model.
        // Maybe it's a user error if you pass uncomputable minSizes.
        ,
            fitMin = function fitMin() {
            var self = this,
                a = self.a,
                b = self.b;

            if (a[getBoundingClientRect]()[dimension] < self.aMin) {
                a.style[dimension] = self.aMin - self.aGutterSize + 'px';
                b.style[dimension] = self.size - self.aMin - self.aGutterSize + 'px';
            } else if (b[getBoundingClientRect]()[dimension] < self.bMin) {
                a.style[dimension] = self.size - self.bMin - self.bGutterSize + 'px';
                b.style[dimension] = self.bMin - self.bGutterSize + 'px';
            }
        },
            fitMinReverse = function fitMinReverse() {
            var self = this,
                a = self.a,
                b = self.b;

            if (b[getBoundingClientRect]()[dimension] < self.bMin) {
                a.style[dimension] = self.size - self.bMin - self.bGutterSize + 'px';
                b.style[dimension] = self.bMin - self.bGutterSize + 'px';
            } else if (a[getBoundingClientRect]()[dimension] < self.aMin) {
                a.style[dimension] = self.aMin - self.aGutterSize + 'px';
                b.style[dimension] = self.size - self.aMin - self.aGutterSize + 'px';
            }
        },
            balancePairs = function balancePairs(pairs) {
            for (var i = 0; i < pairs.length; i++) {
                calculateSizes.call(pairs[i]);
                fitMin.call(pairs[i]);
            }

            for (i = pairs.length - 1; i >= 0; i--) {
                calculateSizes.call(pairs[i]);
                fitMinReverse.call(pairs[i]);
            }
        },
            setElementSize = function setElementSize(el, size, gutterSize) {
            // Split.js allows setting sizes via numbers (ideally), or if you must,
            // by string, like '300px'. This is less than ideal, because it breaks
            // the fluid layout that `calc(% - px)` provides. You're on your own if you do that,
            // make sure you calculate the gutter size by hand.
            if (typeof size !== 'string' && !(size instanceof String)) {
                if (!isIE8) {
                    size = calc + '(' + size + '% - ' + gutterSize + 'px)';
                } else {
                    size = options.sizes[i] + '%';
                }
            }

            el.style[dimension] = size;
        }

        // No-op function to prevent default. Used to prevent selection.
        ,
            noop = function noop() {
            return false;
        }

        // All DOM elements in the split should have a common parent. We can grab
        // the first elements parent and hope users read the docs because the
        // behavior will be whacky otherwise.
        ,
            parent = elementOrSelector(ids[0]).parentNode;

        // Set default options.sizes to equal percentages of the parent element.
        if (!options.sizes) {
            var percent = 100 / ids.length;

            options.sizes = [];

            for (i = 0; i < ids.length; i++) {
                options.sizes.push(percent);
            }
        }

        // Standardize minSize to an array if it isn't already. This allows minSize
        // to be passed as a number.
        if (!Array.isArray(options.minSize)) {
            var minSizes = [];

            for (i = 0; i < ids.length; i++) {
                minSizes.push(options.minSize);
            }

            options.minSize = minSizes;
        }

        // 5. Loop through the elements while pairing them off. Every pair gets a
        // `pair` object, a gutter, and isFirst/isLast properties.
        //
        // Basic logic:
        //
        // - Starting with the second element `i > 0`, create `pair` objects with
        //   `a = ids[i - 1]` and `b = ids[i]`
        // - Set gutter sizes based on the _pair_ being first/last. The first and last
        //   pair have gutterSize / 2, since they only have one half gutter, and not two.
        // - Create gutter elements and add event listeners.
        // - Set the size of the elements, minus the gutter sizes.
        //
        // -----------------------------------------------------------------------
        // |     i=0     |         i=1         |        i=2       |      i=3     |
        // |             |       isFirst       |                  |     isLast   |
        // |           pair 0                pair 1             pair 2           |
        // |             |                     |                  |              |
        // -----------------------------------------------------------------------
        for (i = 0; i < ids.length; i++) {
            var el = elementOrSelector(ids[i]),
                isFirstPair = i == 1,
                isLastPair = i == ids.length - 1,
                size = options.sizes[i],
                gutterSize = options.gutterSize,
                pair;

            if (i > 0) {
                // Create the pair object with it's metadata.
                pair = {
                    a: elementOrSelector(ids[i - 1]),
                    b: el,
                    aMin: options.minSize[i - 1],
                    bMin: options.minSize[i],
                    dragging: false,
                    parent: parent,
                    isFirst: isFirstPair,
                    isLast: isLastPair,
                    direction: options.direction

                    // For first and last pairs, first and last gutter width is half.
                };pair.aGutterSize = options.gutterSize;
                pair.bGutterSize = options.gutterSize;

                if (isFirstPair) {
                    pair.aGutterSize = options.gutterSize / 2 - 1;
                }

                if (isLastPair) {
                    pair.bGutterSize = options.gutterSize / 2 - 1;
                }
            }

            // Determine the size of the current element. IE8 is supported by
            // staticly assigning sizes without draggable gutters. Assigns a string
            // to `size`.
            //
            // IE9 and above
            if (!isIE8) {
                // Create gutter elements for each pair.
                if (i > 0) {
                    var gutter = document.createElement('div');

                    gutter.className = gutterClass;
                    gutter.style[dimension] = options.gutterSize + 'px';

                    gutter[addEventListener]('mousedown', startDragging.bind(pair));
                    gutter[addEventListener]('touchstart', startDragging.bind(pair));

                    parent.insertBefore(gutter, el);

                    pair.gutter = gutter;
                }

                // Half-size gutters for first and last elements.
                if (i === 0 || i == ids.length - 1) {
                    gutterSize = options.gutterSize / 2 + 1;
                }
            }

            // Set the element size to our determined size.
            setElementSize(el, size, gutterSize);

            // After the first iteration, and we have a pair object, append it to the
            // list of pairs.
            if (i > 0) {
                pairs.push(pair);
            }
        }

        // Balance the pairs to try to accomodate min sizes.
        balancePairs(pairs);

        return {
            setSizes: function setSizes(sizes) {
                for (var i = 0; i < sizes.length; i++) {
                    if (i > 0) {
                        var pair = pairs[i - 1];

                        setElementSize(pair.a, sizes[i - 1], pair.aGutterSize);
                        setElementSize(pair.b, sizes[i], pair.bGutterSize);
                    }
                }
            },
            collapse: function collapse(i) {
                var pair;

                if (i === pairs.length) {
                    pair = pairs[i - 1];

                    calculateSizes.call(pair);
                    adjust.call(pair, pair.size - pair.bGutterSize);
                } else {
                    pair = pairs[i];

                    calculateSizes.call(pair);
                    adjust.call(pair, pair.aGutterSize);
                }
            },
            destroy: function destroy() {
                for (var i = 0; i < pairs.length; i++) {
                    pairs[i].parent.removeChild(pairs[i].gutter);
                    pairs[i].a.style[dimension] = '';
                    pairs[i].b.style[dimension] = '';
                }
            }
        };
    };

    // Play nicely with module systems, and the browser too if you include it raw.
    if (true) {
        if (typeof module !== 'undefined' && module.exports) {
            exports = module.exports = Split;
        }
        exports.Split = Split;
    } else {
        global.Split = Split;
    }

    // Call our wrapper function with the current global. In this case, `window`.
}).call(window);

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var isPropNotFit = function isPropNotFit(key, val) {
    if (!key) return true;
    if (key.indexOf('_') == 0) return true;
    if (val && val.call) return true;
    if (typeof val == 'string') return false;
    if (typeof val == 'number') return false;
    if (typeof val == 'boolean') return false;
    if (!val) return true;
};

var isPrimitive = function isPrimitive(val) {
    return typeof val === 'string' || typeof val === 'number';
};

var deepCopy = function deepCopy(obj) {
    var _clonedObjects = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

    if (obj === undefined) return undefined;
    if (typeof obj === 'function') return undefined;else if (obj === null) return null;else if (typeof window !== 'undefined' && obj === window) return undefined;else if (_clonedObjects.indexOf(obj) > -1) return obj;
    if (Object.prototype.toString.call(obj) === '[object Array]') {
        var out = [],
            i = 0,
            len = obj.length;
        for (; i < len; i++) {
            var clonedObject = void 0;
            if (_clonedObjects.indexOf(obj[i]) > -1) {
                clonedObject = obj[i];
            } else {
                _clonedObjects.push(obj[i]);
                clonedObject = deepCopy(obj[i], _clonedObjects);
            }
            out[i] = clonedObject;
        }
        return out;
    }
    if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object') {
        var _out = {};
        for (var _i in obj) {
            if (_i.indexOf('_') == 0) return;
            var _clonedObject = void 0;
            if (_clonedObjects.indexOf(obj[_i]) > -1) {
                _clonedObject = obj[_i];
            } else {
                _clonedObjects.push(obj[_i]);
                _clonedObject = deepCopy(obj[_i], _clonedObjects);
            }
            _out[_i] = _clonedObject;
        }
        return _out;
    }
    return obj;
};

var CommonObject = function () {
    function CommonObject() {
        _classCallCheck(this, CommonObject);
    }

    _createClass(CommonObject, [{
        key: 'fromJSON',
        value: function fromJSON() {
            var _this = this;

            var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var forceNew = arguments[1];

            Object.keys(params).forEach(function (key) {
                if (key === 'type') return;
                if (key in _this) _this[key] = params[key];else {
                    console.error(_this);
                    throw '::fromJSON(): class ' + _this.constructor.name + ' has no property ' + key;
                }
                if (!_this[key]) return;
                if (params[key].id && params[key].type) _this[key] = _this._game._repository.getObject(params[key].id, params[key].type, forceNew);else if (params[key].splice) {
                    var arr = _this[key];
                    _this[key] = [];
                    arr.forEach(function (item, i) {
                        if (item && item.type && item.id) {
                            _this[key].push(_this._game._repository.getObject(item.id, item.type, forceNew));
                        } else {
                            if (isPrimitive(item)) _this[key].push(item);
                        }
                    });
                }
            });
            this.revalidate();
            return this;
        }
    }, {
        key: 'toJSON',
        value: function toJSON() {
            var _this2 = this;

            var res = {};
            for (var key in this) {

                if (isPropNotFit(key, this[key])) {
                    continue;
                }
                if (this[key].type && this[key].id) {
                    // is model
                    res[key] = {
                        id: this[key].id,
                        type: this[key].type
                    };
                } else if (this[key] && this[key].splice) {
                    (function () {
                        // is arr
                        var col = _this2[key];
                        var arr = [];
                        col.forEach(function (el) {
                            if (el && el.type && el.id) {
                                arr.push({ type: el.type, id: el.id });
                            } else {
                                if (isPrimitive(el)) arr.push(deepCopy(el));
                            }
                        });
                        res[key] = arr;
                    })();
                } else res[key] = deepCopy(this[key]);
            }
            return res;
        }
    }]);

    return CommonObject;
}();

exports.default = CommonObject;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _baseModel = __webpack_require__(5);

var _baseModel2 = _interopRequireDefault(_baseModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Font = function (_BaseModel) {
    _inherits(Font, _BaseModel);

    function Font(game) {
        _classCallCheck(this, Font);

        var _this = _possibleConstructorReturn(this, (Font.__proto__ || Object.getPrototypeOf(Font)).call(this, game));

        _this.type = 'Font';
        _this.fontSize = 12;
        _this.fontColor = null;
        _this.fontFamily = 'Monospace';
        _this.fontContext = null;
        _this.fontColor = { r: 0, g: 0, b: 0 };
        return _this;
    }

    return Font;
}(_baseModel2.default);

exports.default = Font;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _baseModel = __webpack_require__(5);

var _baseModel2 = _interopRequireDefault(_baseModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FrameAnimation = function (_BaseModel) {
    _inherits(FrameAnimation, _BaseModel);

    function FrameAnimation(game) {
        _classCallCheck(this, FrameAnimation);

        var _this = _possibleConstructorReturn(this, (FrameAnimation.__proto__ || Object.getPrototypeOf(FrameAnimation)).call(this, game));

        _this.type = 'frameAnimation';
        _this._currFrame = 0;
        _this.frames = [];
        _this.duration = 1000;
        _this._gameObject = null;
        _this._startTime = null;
        return _this;
    }

    _createClass(FrameAnimation, [{
        key: 'revalidate',
        value: function revalidate() {
            this._timeForOneFrame = ~~(this.duration / this.frames.length);
        }
    }, {
        key: 'play',
        value: function play() {
            this._gameObject._currFrameAnimation = this;
        }
    }, {
        key: 'stop',
        value: function stop() {
            this._gameObject._currFrameAnimation = null;
            this._startTime = null;
        }
    }, {
        key: 'update',
        value: function update(time) {
            if (!this._startTime) this._startTime = time;
            var delta = (time - this._startTime) % this.duration;
            this._currFrame = ~~(this.frames.length * delta / this.duration);
            var lastFrIndex = this._gameObject.currFrameIndex;
            if (lastFrIndex != this.frames[this._currFrame]) {
                this._gameObject.setFrameIndex(this.frames[this._currFrame]);
            }
        }
    }, {
        key: 'nextFrame',
        value: function nextFrame() {
            var ind = this._currFrame;
            ind++;
            if (ind == this.frames.length) ind = 0;
            this._gameObject.setFrameIndex(this.frames[ind]);
            this._currFrame = ind;
        }
    }, {
        key: 'previousFrame',
        value: function previousFrame() {
            var ind = this._currFrame;
            ind--;
            if (ind < 0) ind = this.frames.length - 1;
            this._gameObject.setFrameIndex(this.frames[ind]);
            this._currFrame = ind;
        }
    }]);

    return FrameAnimation;
}(_baseModel2.default);

exports.default = FrameAnimation;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _baseModel = __webpack_require__(5);

var _baseModel2 = _interopRequireDefault(_baseModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Sound = function (_BaseModel) {
    _inherits(Sound, _BaseModel);

    function Sound(game) {
        _classCallCheck(this, Sound);

        var _this = _possibleConstructorReturn(this, (Sound.__proto__ || Object.getPrototypeOf(Sound)).call(this, game));

        _this.type = 'Sound';
        _this.resourcePath = '';

        _this._gain = 1;
        _this._loop = false;
        return _this;
    }

    _createClass(Sound, [{
        key: 'play',
        value: function play() {
            //audioPlayer.play(this);
        }
    }, {
        key: 'stop',
        value: function stop() {
            //audioPlayer.stop(this);
        }
    }, {
        key: 'pause',
        value: function pause() {
            throw 'not implemented';
        }
    }, {
        key: 'setGain',
        value: function setGain(val, time, easeFnName) {
            //audioPlayer.setGain(this,val,time,easeFnName);
        }
    }], [{
        key: 'find',
        value: function find(name) {
            // let res = bundle.soundList.find({name:name});
            // //<code>{{#if opts.minify}}
            // if (!res) throw `can not found sound with name ${name}`;
            // // {{/if}}
            // return res;
        }
    }]);

    return Sound;
}(_baseModel2.default);

exports.default = Sound;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(61);

__webpack_require__(71);

__webpack_require__(18);

__webpack_require__(63);

__webpack_require__(32);

__webpack_require__(27);

__webpack_require__(25);

__webpack_require__(30);

__webpack_require__(31);

__webpack_require__(28);

__webpack_require__(26);

__webpack_require__(62);

var _explorer = __webpack_require__(59);

var _explorer2 = _interopRequireDefault(_explorer);

var _editor = __webpack_require__(45);

var _editor2 = _interopRequireDefault(_editor);

var _resourceHelper = __webpack_require__(16);

var _resourceHelper2 = _interopRequireDefault(_resourceHelper);

__webpack_require__(83);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

RF.Router.setup({
    explorer: _explorer2.default,
    editor: _editor2.default
});

RF.applyBindings('body');
if (sessionStorage.projectName) {
    _resourceHelper2.default.loadProject(sessionStorage.projectName);
} else RF.Router.navigateTo('explorer');

console.log('built at: ' + new Date(+1504875941673));

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
 * additional grant of patent rights can be found in the PATENTS file in
 * the same directory.
 */

!function (global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = ( false ? "undefined" : _typeof(module)) === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      prototype[method] = function (arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function (genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor ? ctor === GeneratorFunction ||
    // For the native GeneratorFunction constructor, the best we can
    // do is to check its .name property.
    (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
  };

  runtime.mark = function (genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function (arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value && (typeof value === "undefined" ? "undefined" : _typeof(value)) === "object" && hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function (value) {
            invoke("next", value, resolve, reject);
          }, function (err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function (unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
      // If enqueue has been called before, then we want to wait until
      // all previous Promises have been resolved before calling invoke,
      // so that results are always delivered in the correct order. If
      // enqueue has not been called before, then it is important to
      // call invoke immediately, without waiting on a callback to fire,
      // so that the async generator function has the opportunity to do
      // any necessary setup in a predictable way. This predictability
      // is why the Promise constructor synchronously invokes its
      // executor callback, and why async functions synchronously
      // execute code before the first await. Since we implement simple
      // async functions in terms of async generators, it is especially
      // important to get this right, even though it requires care.
      previousPromise ? previousPromise.then(callInvokeWithMethodAndArg,
      // Avoid propagating failures to Promises returned by later
      // invocations of the iterator.
      callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function (innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList));

    return runtime.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
    : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;
        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);
        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done ? GenStateCompleted : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };
        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError("The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (!info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }
    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function () {
    return this;
  };

  Gp.toString = function () {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function (object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1,
            next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function reset(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function stop() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function dispatchException(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }
          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function complete(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" || record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
}(
// In sloppy mode, unbound `this` refers to the global object, fallback to
// Function constructor if we're in global strict mode. That is sadly a form
// of indirect eval which violates Content Security Policy.
function () {
  return this;
}() || Function("return this")());
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(78)(module)))

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _i18n = __webpack_require__(1);

var _i18n2 = _interopRequireDefault(_i18n);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = RF.registerComponent('app-alert-dialog', {
    template: {
        type: 'string',
        value: __webpack_require__(89)
    },
    message: '',
    i18n: _i18n2.default.getAll(),
    open: function open(message) {
        RF.getComponentById('alertModal').open();
        this.message = message;
    },
    close: function close() {
        RF.getComponentById('alertModal').close();
        this.message = null;
    }
});

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = RF.registerComponent('app-angle-picker', {
    getInitialState: function getInitialState() {
        return {
            object: { val: 0 },
            value: 'val'
        };
    },

    template: {
        type: 'string',
        value: __webpack_require__(90)
    },

    angleInDeg: function angleInDeg() {
        if (!this.object) return 0;
        var res = this.object[this.value] * 180 / Math.PI % 360;
        return +res.toFixed(2) || 0;
    },

    calcAngleFromEvent: function calcAngleFromEvent(e) {
        if (!this.object) return;
        var el = this.$el.querySelector('[data-container]');
        var rect = el.getBoundingClientRect();
        var x = e.clientX - rect.left,
            y = e.clientY - rect.top;
        var angle = Math.atan2(y - 15, x - 15);
        if (angle < 0) angle = 2 * Math.PI + angle;
        angle = +angle.toFixed(2) || 0;
        this.object[this.value] = angle;
    },
    click: function click(e) {
        this.calcAngleFromEvent(e);
    },
    mouseMove: function mouseMove(e) {
        if (e.buttons !== 1) return;
        this.calcAngleFromEvent(e);
    }
});

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

__webpack_require__(79);

exports.default = RF.registerComponent('app-collapsible', {
    template: {
        type: 'string',
        value: __webpack_require__(91)
    },
    getInitialState: function getInitialState() {
        return {
            title: 'default_title',
            crud: '',
            object: {},
            meta: {},
            id: null,
            opened: false
        };
    },

    toggle: function toggle() {
        this.opened = !this.opened;
    }
});

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

__webpack_require__(29);

exports.default = RF.registerComponent('app-color-picker', {
    template: {
        type: 'string',
        value: __webpack_require__(92)
    },
    getInitialState: function getInitialState() {
        return {
            model: { field: '' },
            field: 'field'
        };
    },
    click: function click() {
        RF.getComponentById('colorPickerDialog').open(this.model, this.field);
    }
});

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _utils = __webpack_require__(2);

var _utils2 = _interopRequireDefault(_utils);

var _i18n = __webpack_require__(1);

var _i18n2 = _interopRequireDefault(_i18n);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultColor = { r: 0, g: 0, b: 0 };
var colorEnums = [{ left: 'red', right: 'cyan', key: 'r' }, { left: 'green', right: 'magenta', key: 'g' }, { left: 'blue', right: 'yellow', key: 'b' }];

exports.default = RF.registerComponent('app-color-picker-dialog', {
    template: {
        type: 'string',
        value: __webpack_require__(93)
    },
    colorEnums: colorEnums,
    i18n: _i18n2.default.getAll(),
    getInitialState: function getInitialState() {
        return {
            currentColor: {
                RGB: {},
                hex: ''
            },
            model: { field: {} },
            field: 'field'
        };
    },
    open: function open(model, field) {
        var color = model && model[field] || Object.create(defaultColor);
        this.model = model;
        this.field = field;
        this.currentColor.RGB.r = color.r;
        this.currentColor.RGB.g = color.g;
        this.currentColor.RGB.b = color.b;
        this.currentColor.hex = _utils2.default.rgbToHex(this.currentColor.RGB);
        RF.getComponentById('colorPickerModal').open();
    },
    hexChanged: function hexChanged() {
        this.currentColor.RGB = _utils2.default.hexToRgb(this.currentColor.hex);
    },
    rgbChanged: function rgbChanged() {
        this.currentColor.hex = _utils2.default.rgbToHex(this.currentColor.RGB);
    },
    getRawColor: function getRawColor(rgb, key) {
        var col = {
            r: key == 'r' ? rgb.r : 0,
            g: key == 'g' ? rgb.g : 0,
            b: key == 'b' ? rgb.b : 0
        };
        return _utils2.default.rgbToHex(col);
    },
    applyColor: function applyColor() {
        this.model[this.field] = this.currentColor.RGB;
        RF.getComponentById('colorPickerModal').close();
    }
});

// let el = document.createElement('app-color-picker-dialog');
// el.id = 'colorPickerDialog';
// document.body.appendChild(el);

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

__webpack_require__(80);

var _i18n = __webpack_require__(1);

var _i18n2 = _interopRequireDefault(_i18n);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = RF.registerComponent('app-confirm-dialog', {
    template: {
        type: 'string',
        value: __webpack_require__(94)
    },
    message: 'default message',
    confirm: function confirm() {},
    i18n: _i18n2.default.getAll(),
    close: function close() {
        RF.getComponentById('confirmModal').close();
    },
    confirmAndClose: function confirmAndClose() {
        this.confirm();
        this.close();
    },
    open: function open(message, callback) {
        RF.getComponentById('confirmModal').open();
        this.message = message;
        this.confirm = callback;
    }
});

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

__webpack_require__(81);

exports.default = RF.registerComponent('app-input-file', {
    getInitialState: function getInitialState() {
        return {
            title: '',
            accept: '',
            onFilePicked: null
        };
    },
    template: {
        type: 'string',
        value: __webpack_require__(95)
    },
    onMount: function onMount() {
        var _this = this;

        var btn = this.$el.querySelector('button');
        var input = this.$el.querySelector('input');
        btn.onclick = function () {
            input.click();
        };
        input.onchange = function () {
            var file = input.files[0];
            var fileNameArr = file.name.split('.');
            var ext = fileNameArr.pop();
            var name = fileNameArr.join('');
            var url = window.URL || window.webkitURL;
            var src = url.createObjectURL(file);
            _this.onFilePicked(src, file, name, ext);
            RF.digest();
        };
    }
});

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

__webpack_require__(82);

exports.default = RF.registerComponent('app-modal', {
    template: {
        type: 'string',
        value: __webpack_require__(96)
    },
    getInitialState: function getInitialState() {
        return {
            opened: false
        };
    },
    close: function close() {
        this.opened = false;
        setTimeout(RF.digest, 1); //todo
    },
    open: function open() {
        this.opened = true;
    }
});

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

__webpack_require__(84);

var _editData = __webpack_require__(0);

var _editData2 = _interopRequireDefault(_editData);

var _resource = __webpack_require__(3);

var _resource2 = _interopRequireDefault(_resource);

var _i18n = __webpack_require__(1);

var _i18n2 = _interopRequireDefault(_i18n);

var _utils = __webpack_require__(2);

var _utils2 = _interopRequireDefault(_utils);

var _gameObject = __webpack_require__(13);

var _gameObject2 = _interopRequireDefault(_gameObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = RF.registerComponent('app-curr-scene', {
    template: {
        type: 'string',
        value: __webpack_require__(97)
    },
    editData: _editData2.default,
    i18n: _i18n2.default.getAll(),
    utils: _utils2.default,
    frameWidth: function frameWidth() {
        if (!_editData2.default.currSceneInEdit.tileMap) return 0;
        if (!_editData2.default.currSceneInEdit.tileMap._spriteSheet) return 0;
        return _editData2.default.currSceneInEdit.tileMap._spriteSheet._frameWidth || 0;
    },
    frameHeight: function frameHeight() {
        if (!_editData2.default.currSceneInEdit.tileMap) return 0;
        if (!_editData2.default.currSceneInEdit.tileMap._spriteSheet) return 0;
        return _editData2.default.currSceneInEdit.tileMap._spriteSheet._frameHeight || 0;
    },
    _onDropFromLeftPanel: function _onDropFromLeftPanel(droppedObj, x, y) {
        var _this = this;

        return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var go, l, resp;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            go = new _gameObject2.default(_editData2.default.game).fromJSON(droppedObj.obj.toJSON());

                            go.pos = { x: x, y: y };
                            go.layerId = _editData2.default.currLayerInEdit.id;
                            go.id = null;

                            l = _editData2.default.currLayerInEdit;
                            _context.next = 7;
                            return _resource2.default.save(go);

                        case 7:
                            resp = _context.sent;

                            if (resp.created) {
                                go.id = resp.id;
                                _editData2.default.game._repository.addObject(go);
                                _editData2.default.currLayerInEdit.addGameObject(go);
                                l.updateCloner();
                                _editData2.default.game._repository.updateObject(l);
                                _resource2.default.save(l);
                            }
                            RF.digest();

                        case 10:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, _this);
        }))();
    },
    _onDropFromCentralPanel: function _onDropFromCentralPanel(droppedObj, x, y) {
        var _this2 = this;

        return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var go;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            go = _editData2.default.currLayerInEdit.gameObjects.find(function (it) {
                                return it.id == droppedObj.obj.id;
                            });

                            go.pos = { x: x, y: y };
                            _context2.next = 4;
                            return _resource2.default.save(go);

                        case 4:
                            RF.digest();

                        case 5:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, _this2);
        }))();
    },
    onDrop: function onDrop(droppedObj, e, coords) {
        var x = e.offsetX - coords.mouseX;
        var y = e.offsetY - coords.mouseY;
        if (droppedObj.src == 'leftPanel') this._onDropFromLeftPanel(droppedObj, x, y);else this._onDropFromCentralPanel(droppedObj, x, y);
    }
});

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

__webpack_require__(85);

var _i18n = __webpack_require__(1);

var _i18n2 = _interopRequireDefault(_i18n);

var _editData = __webpack_require__(0);

var _editData2 = _interopRequireDefault(_editData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = RF.registerComponent('app-script-editor', {
    template: {
        type: 'string',
        value: __webpack_require__(98)
    },
    editData: _editData2.default,
    i18n: _i18n2.default.getAll(),
    close: function close() {
        _editData2.default.scriptEditorUrl = '';
    }
});

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _editData = __webpack_require__(0);

var _editData2 = _interopRequireDefault(_editData);

var _resource = __webpack_require__(3);

var _resource2 = _interopRequireDefault(_resource);

var _i18n = __webpack_require__(1);

var _i18n2 = _interopRequireDefault(_i18n);

var _utils = __webpack_require__(2);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = RF.registerComponent('app-common-behaviour-dialog', {
    template: {
        type: 'string',
        value: __webpack_require__(99)
    },
    i18n: _i18n2.default.getAll(),
    utils: _utils2.default,
    editData: _editData2.default,
    form: { valid: function valid() {
            return true;
        } },

    createOrEditCommonBehaviour: function createOrEditCommonBehaviour() {
        var _this = this;

        return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var cb, resp, editedCb;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            cb = _editData2.default.currCommonBehaviourInEdit;
                            _context.next = 3;
                            return _resource2.default.save(cb);

                        case 3:
                            resp = _context.sent;

                            if (resp.created) {
                                cb.id = resp.id;
                                _editData2.default.game._repository.addObject(cb);
                                _editData2.default.currGameObjectInEdit.commonBehaviour.push(cb);
                            } else {
                                editedCb = _editData2.default.currGameObjectInEdit.commonBehaviour.find(function (it) {
                                    return it.id == cb.id;
                                });

                                editedCb.fromJSON(cb.toJSON());
                                cb.updateCloner();
                                _editData2.default.game._repository.updateObject(cb);
                            }
                            _context.next = 7;
                            return _resource2.default.save(_editData2.default.currGameObjectInEdit);

                        case 7:
                            _editData2.default.currGameObjectInEdit.updateCloner();
                            RF.getComponentById('commonBehaviourModal').close();

                        case 9:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, _this);
        }))();
    }
});

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _editData = __webpack_require__(0);

var _editData2 = _interopRequireDefault(_editData);

var _i18n = __webpack_require__(1);

var _i18n2 = _interopRequireDefault(_i18n);

__webpack_require__(43);

__webpack_require__(37);

__webpack_require__(44);

__webpack_require__(39);

__webpack_require__(15);

__webpack_require__(42);

__webpack_require__(40);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = RF.registerComponent('app-dialogs', {
    template: {
        type: 'string',
        value: __webpack_require__(100)
    },
    editData: _editData2.default,
    i18n: _i18n2.default.getAll()
});

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _editData = __webpack_require__(0);

var _editData2 = _interopRequireDefault(_editData);

var _fileSystem = __webpack_require__(4);

var _fileSystem2 = _interopRequireDefault(_fileSystem);

var _resource = __webpack_require__(3);

var _resource2 = _interopRequireDefault(_resource);

var _i18n = __webpack_require__(1);

var _i18n2 = _interopRequireDefault(_i18n);

var _chrome = __webpack_require__(60);

var _chrome2 = _interopRequireDefault(_chrome);

var _utils = __webpack_require__(2);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var SYMBOL_PADDING = 4;
var fontSample = 'Test me! Text here';

var getFontContext = function getFontContext(arrFromTo, strFont, w) {
    function getFontHeight(strFont) {
        var parent = document.createElement("span");
        parent.appendChild(document.createTextNode("height!ДдЙЇ"));
        document.body.appendChild(parent);
        parent.style.cssText = "font: " + strFont + "; white-space: nowrap; display: inline;";
        var height = parent.offsetHeight;
        document.body.removeChild(parent);
        return height;
    }
    var cnv = document.createElement('canvas');
    var ctx = cnv.getContext('2d');
    ctx.font = strFont;
    var textHeight = getFontHeight(strFont) + 2 * SYMBOL_PADDING;
    var symbols = {};
    var currX = 0,
        currY = 0,
        cnvHeight = textHeight;
    for (var k = 0; k < arrFromTo.length; k++) {
        var arrFromToCurr = arrFromTo[k];
        for (var i = arrFromToCurr.from; i < arrFromToCurr.to; i++) {
            var currentChar = String.fromCharCode(i);

            ctx = cnv.getContext('2d');
            var textWidth = ctx.measureText(currentChar).width;
            textWidth += 2 * SYMBOL_PADDING;
            if (textWidth == 0) continue;
            if (currX + textWidth > w) {
                currX = 0;
                currY += textHeight;
                cnvHeight = currY + textHeight;
            }
            var symbol = {};
            symbol.x = ~~currX + SYMBOL_PADDING;
            symbol.y = ~~currY + SYMBOL_PADDING;
            symbol.width = ~~textWidth - 2 * SYMBOL_PADDING;
            symbol.height = textHeight - 2 * SYMBOL_PADDING;
            symbols[currentChar] = symbol;
            currX += textWidth;
        }
    }
    return { symbols: symbols, width: w, height: cnvHeight };
};

var getFontImage = function getFontImage(symbolsContext, strFont, color) {
    var cnv = document.createElement('canvas');
    cnv.width = symbolsContext.width;
    cnv.height = symbolsContext.height;
    var ctx = cnv.getContext('2d');
    ctx.font = strFont;
    ctx.fillStyle = color;
    ctx.textBaseline = "top";
    var symbols = symbolsContext.symbols;
    for (var symbol in symbols) {
        if (!symbols.hasOwnProperty(symbol)) continue;
        ctx.fillText(symbol, symbols[symbol].x, symbols[symbol].y);
    }
    return cnv.toDataURL();
};

exports.default = RF.registerComponent('app-font-dialog', {
    template: {
        type: 'string',
        value: __webpack_require__(101)
    },
    form: { valid: function valid() {
            return true;
        } },
    editData: _editData2.default,
    i18n: _i18n2.default.getAll(),
    utils: _utils2.default,
    fontSample: fontSample,
    systemFontList: [],

    open: function open() {
        var _this = this;

        if (!this.systemFontList.length) {
            _chrome2.default.requestToApi({ method: 'getFontList' }, function (list) {
                _this.systemFontList = list;
                RF.digest();
            });
        }
        RF.getComponentById('fontModal').open();
    },
    createOrEditFont: function createOrEditFont(model) {
        var _this2 = this;

        return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var strFont, file, resp;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            strFont = model.fontSize + 'px' + ' ' + model.fontFamily;

                            model.fontContext = getFontContext([{ from: 32, to: 150 }, { from: 1040, to: 1116 }], strFont, 320);
                            file = _utils2.default.dataURItoBlob(getFontImage(model.fontContext, strFont, _utils2.default.rgbToHex(model.fontColor)));

                            model.resourcePath = 'resources/' + model.name + '.png';

                            _context.next = 6;
                            return _fileSystem2.default.uploadFile(file, {
                                path: model.resourcePath
                            });

                        case 6:
                            _context.next = 8;
                            return _resource2.default.save(model);

                        case 8:
                            resp = _context.sent;

                            if (resp.created) {
                                model.id = resp.id;
                                _editData2.default.game._repository.addObject(model);
                            } else if (resp.updated) {
                                model.updateCloner();
                            }
                            RF.getComponentById('fontModal').close();

                        case 11:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, _this2);
        }))();
    }
});

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _editData = __webpack_require__(0);

var _editData2 = _interopRequireDefault(_editData);

var _resource = __webpack_require__(3);

var _resource2 = _interopRequireDefault(_resource);

var _i18n = __webpack_require__(1);

var _i18n2 = _interopRequireDefault(_i18n);

var _fileSystem = __webpack_require__(4);

var _fileSystem2 = _interopRequireDefault(_fileSystem);

var _utils = __webpack_require__(2);

var _utils2 = _interopRequireDefault(_utils);

var _gameObject = __webpack_require__(13);

var _gameObject2 = _interopRequireDefault(_gameObject);

var _spriteSheet = __webpack_require__(11);

var _spriteSheet2 = _interopRequireDefault(_spriteSheet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = RF.registerComponent('app-frame-animation-dialog', {
    template: {
        type: 'string',
        value: __webpack_require__(102)
    },
    form: { valid: function valid() {
            return true;
        } },
    editData: _editData2.default,
    utils: _utils2.default,
    i18n: _i18n2.default.getAll(),

    isStopped: true,
    from: 0, to: 1, step: 1,
    frames: '',

    open: function open() {
        this.isStopped = true;
        this.frames = this.editData.currFrameAnimationInEdit.frames.join(',');
        this.editData.currFrameAnimationInEdit._gameObject = this.editData.currGameObjectInEdit.clone();
        RF.getComponentById('frameAnimationModal').open();
    },
    allIndexes: function allIndexes() {
        var res = this.utils.getArray(this.editData.currGameObjectInEdit.spriteSheet._numOfFrames);
        return res.join(',');
    },
    setAllIndexes: function setAllIndexes() {
        this.frames = this.allIndexes();
    },
    setRangeIndexes: function setRangeIndexes() {
        this.frames = _utils2.default.range(+this.from, +this.to, +this.step).join(',');
    },
    playAnimation: function playAnimation() {
        var self = this;
        self.isStopped = false;
        try {
            self.editData.currFrameAnimationInEdit.frames = JSON.parse('[' + self.frames + ']');
        } catch (e) {
            console.error(e);
            return;
        }
        self.editData.currFrameAnimationInEdit.play();
        setTimeout(function _anim() {
            self.editData.currFrameAnimationInEdit.update(new Date().getTime());

            var i = self.editData.currFrameAnimationInEdit._gameObject.currFrameIndex;
            self.editData.currFrameAnimationInEdit._gameObject.setFrameIndex(i);

            if (self.isStopped) {
                self.isStopped = false;
                return;
            }
            RF.digest();
            if (RF.getComponentById('frameAnimationModal').opened) setTimeout(_anim, 50);
        }, 0);
    },
    stopAnimation: function stopAnimation() {
        this.isStopped = true;
    },
    nextFrame: function nextFrame() {
        this.stopAnimation();
        this.editData.currFrameAnimationInEdit.nextFrame();
    },
    previousFrame: function previousFrame() {
        this.stopAnimation();
        this.editData.currFrameAnimationInEdit.previousFrame();
    },
    getLoopArr: function getLoopArr() {
        if (!_editData2.default.currFrameAnimationInEdit._gameObject) _editData2.default.currFrameAnimationInEdit._gameObject = new _gameObject2.default(_editData2.default.game);
        if (!_editData2.default.currFrameAnimationInEdit._gameObject.spriteSheet) {
            _editData2.default.currFrameAnimationInEdit._gameObject.spriteSheet = new _spriteSheet2.default(_editData2.default.game);
        }
        var lastIndex = _editData2.default.currFrameAnimationInEdit._gameObject.spriteSheet.numOfFramesH * _editData2.default.currFrameAnimationInEdit._gameObject.spriteSheet.numOfFramesV;
        return _utils2.default.getArray(lastIndex);
    },
    createOrEditFrameAnimation: function createOrEditFrameAnimation() {
        var _this = this;

        return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var fa, resp, editedFa;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            fa = _editData2.default.currFrameAnimationInEdit;

                            fa.frames = JSON.parse('[' + _this.frames + ']');

                            _context.next = 4;
                            return _resource2.default.save(fa);

                        case 4:
                            resp = _context.sent;

                            if (resp.created) {
                                fa.id = resp.id;
                                _editData2.default.game._repository.addObject(fa);
                                _editData2.default.currGameObjectInEdit.frameAnimations.push(fa);
                            } else {
                                editedFa = _editData2.default.currGameObjectInEdit.frameAnimations.find(function (it) {
                                    return it.id == fa.id;
                                });

                                editedFa.fromJSON(fa.toJSON());
                                fa.updateCloner();
                                _editData2.default.game._repository.updateObject(fa);
                            }
                            _context.next = 8;
                            return _resource2.default.save(_editData2.default.currGameObjectInEdit);

                        case 8:
                            _editData2.default.currGameObjectInEdit.updateCloner();

                            RF.getComponentById('frameAnimationModal').close();

                        case 10:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, _this);
        }))();
    }
});

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _editData = __webpack_require__(0);

var _editData2 = _interopRequireDefault(_editData);

var _resource = __webpack_require__(3);

var _resource2 = _interopRequireDefault(_resource);

var _i18n = __webpack_require__(1);

var _i18n2 = _interopRequireDefault(_i18n);

var _fileSystem = __webpack_require__(4);

var _fileSystem2 = _interopRequireDefault(_fileSystem);

var _utils = __webpack_require__(2);

var _utils2 = _interopRequireDefault(_utils);

__webpack_require__(38);

__webpack_require__(35);

var _frameAnimation = __webpack_require__(21);

var _frameAnimation2 = _interopRequireDefault(_frameAnimation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = RF.registerComponent('app-game-object-dialog', {
    template: {
        type: 'string',
        value: __webpack_require__(103)
    },
    form: { valid: function valid() {
            return true;
        } },
    editData: _editData2.default,
    i18n: _i18n2.default.getAll(),
    utils: _utils2.default,
    selectedBehaviourId: '',

    createOrEditGameObject: function createOrEditGameObject(g) {
        var _this = this;

        return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var resp, name;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return _resource2.default.save(g);

                        case 2:
                            resp = _context.sent;

                            if (!resp.created) {
                                _context.next = 11;
                                break;
                            }

                            g.id = resp.id;
                            _editData2.default.game._repository.addObject(g);
                            name = _utils2.default.capitalise(_editData2.default.currGameObjectInEdit.name);
                            _context.next = 9;
                            return _fileSystem2.default.createFile('scripts/' + g.name + '.js', document.getElementById('defaultCodeScript').textContent.replace('${name}', name));

                        case 9:
                            _context.next = 12;
                            break;

                        case 11:
                            g.updateCloner();

                        case 12:
                            RF.getComponentById('gameObjectModal').close();

                        case 13:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, _this);
        }))();
    },
    refreshGameObjectFramePreview: function refreshGameObjectFramePreview(gameObjectProto, ind) {
        var spriteSheet = gameObjectProto.spriteSheet;
        if (!spriteSheet) return;
        var maxNumOfFrame = spriteSheet.numOfFramesH * spriteSheet.numOfFramesV - 1;
        if (this.editData.currGameObjectInEdit.currFrameIndex >= maxNumOfFrame) {
            this.editData.currGameObjectInEdit.currFrameIndex = 0;
            ind = 0;
        }
        gameObjectProto.setFrameIndex(ind);
    },
    createFrameAnimation: function createFrameAnimation() {
        this.editData.currFrameAnimationInEdit = new _frameAnimation2.default(_editData2.default.game);
        RF.getComponentById('frameAnimationDialog').open();
    },
    editFrameAnimation: function editFrameAnimation(fa) {
        this.editData.currFrameAnimationInEdit = fa.clone();
        RF.getComponentById('frameAnimationDialog').open();
    },
    deleteFrameAnimation: function deleteFrameAnimation(fa) {
        var _this2 = this;

        _utils2.default.deleteModel(fa, function () {
            var go = _this2.editData.currGameObjectInEdit;
            go.frameAnimations.remove(function (it) {
                return it.id == fa.id;
            });
            go.updateCloner();
            _editData2.default.game._repository.updateObject(go);
            _resource2.default.save(go);
        });
    },
    onSpriteSheetSelected: function onSpriteSheetSelected(spriteSheet) {
        var gameObjectProto = _editData2.default.currGameObjectInEdit;
        gameObjectProto.width = ~~(spriteSheet.width / spriteSheet.numOfFramesH);
        gameObjectProto.height = ~~(spriteSheet.height / spriteSheet.numOfFramesV);
        gameObjectProto.name = spriteSheet.name;
    },
    createCommonBehaviour: function createCommonBehaviour(selectedBehaviour) {
        if (_editData2.default.currGameObjectInEdit.commonBehaviour.find(function (it) {
            return it.name == selectedBehaviour.name;
        })) {
            alertEx(_i18n2.default.get('objectAlreadyAdded'));
            return;
        }
        selectedBehaviour.__originalId = selectedBehaviour.id;
        selectedBehaviour.id = null;
        this.editData.currCommonBehaviourInEdit = selectedBehaviour.clone();
        RF.getComponentById('commonBehaviourModal').open();
    },
    editCommonBehaviour: function editCommonBehaviour(cb) {
        this.editData.currCommonBehaviourInEdit = cb.clone();
        RF.getComponentById('commonBehaviourModal').open();
    },
    deleteCommonBehaviour: function deleteCommonBehaviour(cb) {
        _utils2.default.deleteModel(cb, function () {
            var model = _editData2.default.currGameObjectInEdit;
            model.commonBehaviour.remove(function (it) {
                return it.id == cb.id;
            });
            model.updateCloner();
            _editData2.default.game._repository.updateObject(model);
            _resource2.default.save(model);
        });
    },
    isCbItemDisabled: function isCbItemDisabled(cb) {
        return !!_editData2.default.currGameObjectInEdit.commonBehaviour.find(function (it) {
            return it.name == cb.name;
        });
    }
});

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _editData = __webpack_require__(0);

var _editData2 = _interopRequireDefault(_editData);

var _resource = __webpack_require__(3);

var _resource2 = _interopRequireDefault(_resource);

var _i18n = __webpack_require__(1);

var _i18n2 = _interopRequireDefault(_i18n);

var _fileSystem = __webpack_require__(4);

var _fileSystem2 = _interopRequireDefault(_fileSystem);

var _utils = __webpack_require__(2);

var _utils2 = _interopRequireDefault(_utils);

var _layer = __webpack_require__(9);

var _layer2 = _interopRequireDefault(_layer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = RF.registerComponent('app-layer-dialog', {
    template: {
        type: 'string',
        value: __webpack_require__(104)
    },
    form: { valid: function valid() {
            return true;
        } },
    editData: _editData2.default,
    i18n: _i18n2.default.getAll(),

    createOrEditLayer: function createOrEditLayer(layer, scene) {
        var _this = this;

        return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var resp;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return _resource2.default.save(layer);

                        case 2:
                            resp = _context.sent;

                            if (!resp.created) {
                                _context.next = 13;
                                break;
                            }

                            layer.id = resp.id;
                            scene.layers.push(layer);
                            _editData2.default.game._repository.addObject(layer);
                            scene.updateCloner();
                            _editData2.default.game._repository.updateObject(scene);
                            _context.next = 11;
                            return _resource2.default.save(scene);

                        case 11:
                            _context.next = 14;
                            break;

                        case 13:
                            layer.updateCloner();

                        case 14:
                            RF.getComponentById('layerModal').close();

                        case 15:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, _this);
        }))();
    },

    deleteLayer: function deleteLayer(l) {}
});

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _editData = __webpack_require__(0);

var _editData2 = _interopRequireDefault(_editData);

var _i18n = __webpack_require__(1);

var _i18n2 = _interopRequireDefault(_i18n);

var _utils = __webpack_require__(2);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var tid = void 0;

exports.default = RF.registerComponent('app-particle-system-preview-dialog', {
    template: {
        type: 'string',
        value: __webpack_require__(106)
    },
    editData: _editData2.default, utils: _utils2.default,
    i18n: _i18n2.default.getAll(),

    open: function open() {
        RF.getComponentById('particleSystemPreviewModal').open();
        this.run();
    },
    close: function close() {
        RF.getComponentById('particleSystemPreviewModal').close();
        clearInterval(tid);
    },
    run: function run() {
        var prevTime = null;

        if (!_editData2.default.currParticleSystemInEdit._particles) _editData2.default.currParticleSystemInEdit._particles = [];

        var update = function update() {

            var currTime = Date.now();
            if (!prevTime) prevTime = currTime;
            var delta = currTime - prevTime;
            prevTime = currTime;
            _editData2.default.currParticleSystemInEdit._particles.forEach(function (p) {

                p._currFrameAnimation && p._currFrameAnimation.update(currTime);
                var deltaX = p.vel.x * delta / 1000;
                var deltaY = p.vel.y * delta / 1000;
                p.pos.x = p.pos.x + deltaX;
                p.pos.y = p.pos.y + deltaY;

                if (!p._timeCreated) p._timeCreated = currTime;
                if (currTime - p._timeCreated > p.liveTime) {
                    _editData2.default.currParticleSystemInEdit._particles.splice(_editData2.default.currParticleSystemInEdit._particles.indexOf(p), 1);
                }
            });
        };
        tid = setInterval(function () {
            update();
            RF.digest();
        }, 5);
    },
    emit: function emit(e) {
        if (!_editData2.default.currParticleSystemInEdit) return;
        if (!_editData2.default.currParticleSystemInEdit.gameObjectProto) return;
        var rect = e.target.getBoundingClientRect();
        _editData2.default.currParticleSystemInEdit.emit(e.clientX - rect.left, e.clientY - rect.top);
    }
});

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _editData = __webpack_require__(0);

var _editData2 = _interopRequireDefault(_editData);

var _resource = __webpack_require__(3);

var _resource2 = _interopRequireDefault(_resource);

var _i18n = __webpack_require__(1);

var _i18n2 = _interopRequireDefault(_i18n);

var _fileSystem = __webpack_require__(4);

var _fileSystem2 = _interopRequireDefault(_fileSystem);

var _utils = __webpack_require__(2);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = RF.registerComponent('app-scene-dialog', {
    template: {
        type: 'string',
        value: __webpack_require__(107)
    },
    form: { valid: function valid() {
            return true;
        } },
    editData: _editData2.default,
    i18n: _i18n2.default.getAll(),

    createOrEditScene: function createOrEditScene(s) {
        var _this = this;

        return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var resp, name;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return _resource2.default.save(s);

                        case 2:
                            resp = _context.sent;

                            if (!resp.created) {
                                _context.next = 11;
                                break;
                            }

                            s.id = resp.id;
                            _editData2.default.game._repository.addObject(s);
                            name = _utils2.default.capitalise(_editData2.default.currSceneInEdit.name);
                            _context.next = 9;
                            return _fileSystem2.default.createFile('scripts/' + s.name + '.js', document.getElementById('defaultCodeScript').textContent.replace('${name}', name));

                        case 9:
                            _context.next = 12;
                            break;

                        case 11:
                            s.updateCloner();

                        case 12:
                            RF.getComponentById('sceneModal').close();

                        case 13:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, _this);
        }))();
    }
});

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _editData = __webpack_require__(0);

var _editData2 = _interopRequireDefault(_editData);

var _resource = __webpack_require__(3);

var _resource2 = _interopRequireDefault(_resource);

var _i18n = __webpack_require__(1);

var _i18n2 = _interopRequireDefault(_i18n);

var _fileSystem = __webpack_require__(4);

var _fileSystem2 = _interopRequireDefault(_fileSystem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = RF.registerComponent('app-sound-dialog', {
    template: {
        type: 'string',
        value: __webpack_require__(108)
    },
    form: { valid: function valid() {
            return true;
        } },
    editData: _editData2.default,
    i18n: _i18n2.default.getAll(),
    soundUrl: '',
    _file: null,

    open: function open() {
        if (_editData2.default.currSoundInEdit.id) this.soundUrl = _editData2.default.projectName + '/' + _editData2.default.currSoundInEdit.resourcePath + '?' + Math.random();else this.soundUrl = '';
        this._file = null;
        RF.getComponentById('soundModal').open();
    },
    onFilePicked: function onFilePicked(src, file, name, ext) {
        this._file = file;
        this.soundUrl = src;
        this.editData.currSoundInEdit._lastPath = this.editData.currSoundInEdit.resourcePath;
        this.editData.currSoundInEdit.resourcePath = 'resources/' + _editData2.default.currSoundInEdit.name + '.' + ext;
        if (this.editData.currSoundInEdit._lastPath == this.editData.currSoundInEdit.resourcePath) this.editData.currSoundInEdit._lastPath = null;
        if (!this.editData.currSoundInEdit.name) {
            this.editData.currSoundInEdit.name = name;
        }
    },
    createOrEditSound: function createOrEditSound(model) {
        var _this = this;

        return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var resp;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            if (!_this._file) {
                                _context.next = 3;
                                break;
                            }

                            _context.next = 3;
                            return _fileSystem2.default.uploadFile(_this._file, { path: _editData2.default.currSoundInEdit.resourcePath });

                        case 3:
                            if (!_this.editData.currSoundInEdit._lastPath) {
                                _context.next = 6;
                                break;
                            }

                            _context.next = 6;
                            return _fileSystem2.default.removeFile(_this.editData.currSoundInEdit._lastPath);

                        case 6:
                            _context.next = 8;
                            return _resource2.default.save(model);

                        case 8:
                            resp = _context.sent;

                            if (resp.created) {
                                model.id = resp.id;
                                _editData2.default.game._repository.addObject(model);
                            } else if (resp.updated) {
                                model.updateCloner();
                            }
                            RF.getComponentById('soundModal').close();

                        case 11:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, _this);
        }))();
    }
});

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _editData = __webpack_require__(0);

var _editData2 = _interopRequireDefault(_editData);

var _resource = __webpack_require__(3);

var _resource2 = _interopRequireDefault(_resource);

var _i18n = __webpack_require__(1);

var _i18n2 = _interopRequireDefault(_i18n);

var _fileSystem = __webpack_require__(4);

var _fileSystem2 = _interopRequireDefault(_fileSystem);

var _utils = __webpack_require__(2);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = RF.registerComponent('app-sprite-sheet-dialog', {
    template: {
        type: 'string',
        value: __webpack_require__(109)
    },
    i18n: _i18n2.default.getAll(),
    utils: _utils2.default,
    editData: _editData2.default,
    form: { valid: function valid() {
            return true;
        } },
    spriteSheetUrl: '',
    _file: '',
    numOfSpriteSheetCells: 0,
    open: function open() {
        this._file = null;
        if (_editData2.default.currSpriteSheetInEdit.id) this.spriteSheetUrl = _editData2.default.projectName + '/' + _editData2.default.currSpriteSheetInEdit.resourcePath + '?' + Math.random();else this.spriteSheetUrl = '';
        this.refreshNumOfCells();
        RF.getComponentById('spriteSheetModal').open();
    },
    onFilePicked: function onFilePicked(src, file, name, ext) {
        if (!_editData2.default.currSpriteSheetInEdit.name) {
            _editData2.default.currSpriteSheetInEdit.name = name;
        }

        this._file = file;
        this.spriteSheetUrl = src;
        _editData2.default.currSpriteSheetInEdit._lastPath = this.editData.currSpriteSheetInEdit.resourcePath;
        _editData2.default.currSpriteSheetInEdit.resourcePath = 'resources/' + _editData2.default.currSpriteSheetInEdit.name + '.' + ext;
        if (_editData2.default.currSpriteSheetInEdit._lastPath == _editData2.default.currSpriteSheetInEdit.resourcePath) _editData2.default.currSpriteSheetInEdit._lastPath = null;

        var img = new Image();
        img.onload = function () {
            _editData2.default.currSpriteSheetInEdit.width = img.width;
            _editData2.default.currSpriteSheetInEdit.height = img.height;
            _editData2.default.currSpriteSheetInEdit.revalidate();
            RF.digest();
        };
        img.src = src;
    },
    refreshNumOfCells: function refreshNumOfCells() {
        this.numOfSpriteSheetCells = _editData2.default && _editData2.default.currSpriteSheetInEdit && _editData2.default.currSpriteSheetInEdit.numOfFramesH * _editData2.default.currSpriteSheetInEdit.numOfFramesV;
        _editData2.default.currSpriteSheetInEdit.revalidate();
    },
    revalidate: function revalidate() {
        _editData2.default.currSpriteSheetInEdit.revalidate();
    },
    createOrEditSpriteSheet: function createOrEditSpriteSheet(model) {
        var _this = this;

        return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var resp;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            if (!_this._file) {
                                _context.next = 3;
                                break;
                            }

                            _context.next = 3;
                            return _fileSystem2.default.uploadFile(_this._file, { path: _editData2.default.currSpriteSheetInEdit.resourcePath });

                        case 3:
                            if (!_this.editData.currSpriteSheetInEdit._lastPath) {
                                _context.next = 6;
                                break;
                            }

                            _context.next = 6;
                            return _fileSystem2.default.removeFile(_editData2.default.currSpriteSheetInEdit._lastPath);

                        case 6:
                            _context.next = 8;
                            return _resource2.default.save(model);

                        case 8:
                            resp = _context.sent;

                            if (resp.created) {
                                model.id = resp.id;
                                _editData2.default.game._repository.addObject(model);
                            } else if (resp.updated) {
                                model.updateCloner();
                            }
                            RF.getComponentById('spriteSheetModal').close();

                        case 11:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, _this);
        }))();
    }
});

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

__webpack_require__(86);

__webpack_require__(49);

__webpack_require__(50);

__webpack_require__(52);

__webpack_require__(47);

__webpack_require__(53);

__webpack_require__(48);

__webpack_require__(51);

__webpack_require__(54);

__webpack_require__(57);

__webpack_require__(34);

__webpack_require__(33);

__webpack_require__(56);

__webpack_require__(55);

__webpack_require__(36);

var _split = __webpack_require__(18);

var _split2 = _interopRequireDefault(_split);

var _i18n = __webpack_require__(1);

var _i18n2 = _interopRequireDefault(_i18n);

var _editData = __webpack_require__(0);

var _editData2 = _interopRequireDefault(_editData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var splitMounted = false;

var _onMount = function _onMount() {
    if (splitMounted) return;
    splitMounted = true;
    var layoutSizes = {};

    layoutSizes.a = 15;
    layoutSizes.b = 70;
    layoutSizes.e = 100 - layoutSizes.a - layoutSizes.b;

    layoutSizes.c = 94;
    layoutSizes.d = 100 - layoutSizes.c;

    (0, _split2.default)(['#a', '#b', '#e'], {
        sizes: [layoutSizes.a, layoutSizes.b, layoutSizes.e],
        gutterSize: 5,
        cursor: 'row-resize',
        minSize: 10
    });
    var vertical = (0, _split2.default)(['#c', '#d'], {
        direction: 'vertical',
        sizes: [layoutSizes.c, layoutSizes.d],
        gutterSize: 5,
        cursor: 'col-resize',
        minSize: 10
    });
    window.addEventListener('resize', function () {
        vertical.setSizes([layoutSizes.c, layoutSizes.d]);
    });
};

exports.default = RF.registerComponent('editor', {
    template: {
        type: 'string',
        value: __webpack_require__(110)
    },
    editData: _editData2.default,
    i18n: _i18n2.default.getAll(),
    onMount: function onMount() {
        _onMount();
    }
});

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _utils = __webpack_require__(2);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = RF.registerComponent('app-game-object-row', {
    template: {
        type: 'string',
        value: __webpack_require__(111)
    },
    getInitialState: function getInitialState() {
        return {
            crud: null,
            gameObject: {},
            draggable: false
        };
    },

    utils: _utils2.default
});

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _fileSystem = __webpack_require__(4);

var _fileSystem2 = _interopRequireDefault(_fileSystem);

var _i18n = __webpack_require__(1);

var _i18n2 = _interopRequireDefault(_i18n);

var _editData = __webpack_require__(0);

var _editData2 = _interopRequireDefault(_editData);

var _utils = __webpack_require__(2);

var _utils2 = _interopRequireDefault(_utils);

var _font = __webpack_require__(20);

var _font2 = _interopRequireDefault(_font);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = RF.registerComponent('app-fonts', {
    template: {
        type: 'string',
        value: __webpack_require__(112)
    },
    editData: _editData2.default,
    i18n: _i18n2.default.getAll(),

    createFont: function createFont() {
        _editData2.default.currFontInEdit = new _font2.default(_editData2.default.game);
        RF.getComponentById('fontDialog').open();
    },
    editFont: function editFont(fnt) {
        _editData2.default.currFontInEdit = fnt.clone();
        RF.getComponentById('fontDialog').open();
    },
    deleteFont: function deleteFont(model) {
        var _this = this;

        return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return _utils2.default.deleteModel(model);

                        case 2:
                            _fileSystem2.default.removeFile(model.resourcePath);

                        case 3:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, _this);
        }))();
    }
});

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _i18n = __webpack_require__(1);

var _i18n2 = _interopRequireDefault(_i18n);

var _editData = __webpack_require__(0);

var _editData2 = _interopRequireDefault(_editData);

var _utils = __webpack_require__(2);

var _utils2 = _interopRequireDefault(_utils);

__webpack_require__(46);

var _fileSystem = __webpack_require__(4);

var _fileSystem2 = _interopRequireDefault(_fileSystem);

var _gameObjectProto = __webpack_require__(6);

var _gameObjectProto2 = _interopRequireDefault(_gameObjectProto);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = RF.registerComponent('app-game-objects', {
    template: {
        type: 'string',
        value: __webpack_require__(113)
    },
    editData: _editData2.default,
    i18n: _i18n2.default.getAll(),

    createGameObject: function createGameObject() {
        this.editData.currGameObjectInEdit = new _gameObjectProto2.default(_editData2.default.game);
        RF.getComponentById('gameObjectModal').open();
    },
    editGameObjectScript: function editGameObjectScript(model) {
        _utils2.default.openEditor('scripts/' + model.name + '.js');
    },
    editGameObject: function editGameObject(go) {
        this.editData.currGameObjectInEdit = go.clone();
        RF.getComponentById('gameObjectModal').open();
    },
    deleteGameObject: function deleteGameObject(model) {
        var scenesUsed = [];
        _editData2.default.gameObject._repository.getArray('Scene').forEach(function (s) {
            s.layers.forEach(function (l) {
                l.gameObjects.forEach(function (go) {
                    if (go.name == model.name) {
                        if (scenesUsed.indexOf(s) == -1) scenesUsed.push(s);
                    }
                });
            });
        });
        if (scenesUsed.length) return alertEx(this.i18n.canNotDelete(model, scenesUsed));
        _utils2.default.deleteModel(model, function () {
            _fileSystem2.default.removeFile('scripts/' + model.name + '.js');
        });
    }
});

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _resource = __webpack_require__(3);

var _resource2 = _interopRequireDefault(_resource);

var _i18n = __webpack_require__(1);

var _i18n2 = _interopRequireDefault(_i18n);

var _editData = __webpack_require__(0);

var _editData2 = _interopRequireDefault(_editData);

var _consts = __webpack_require__(66);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = RF.registerComponent('app-game-props', {
    template: {
        type: 'string',
        value: __webpack_require__(114)
    },
    form: { valid: function valid() {
            return true;
        } },
    editData: _editData2.default,
    i18n: _i18n2.default.getAll(),
    scales: _consts.SCALE_STRATEGY,
    saveGameProps: function saveGameProps() {
        _resource2.default.saveGameProps(this.editData.game);
    }
});

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _editData = __webpack_require__(0);

var _editData2 = _interopRequireDefault(_editData);

var _utils = __webpack_require__(2);

var _utils2 = _interopRequireDefault(_utils);

var _i18n = __webpack_require__(1);

var _i18n2 = _interopRequireDefault(_i18n);

__webpack_require__(15);

var _particleSystem = __webpack_require__(14);

var _particleSystem2 = _interopRequireDefault(_particleSystem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = RF.registerComponent('app-particle-systems', {
    template: {
        type: 'string',
        value: __webpack_require__(115)
    },
    editData: _editData2.default,
    i18n: _i18n2.default.getAll(),
    createParticleSystem: function createParticleSystem() {
        this.editData.currParticleSystemInEdit = new _particleSystem2.default(_editData2.default.game);
        var go = _editData2.default.game._repository.getArray('GameObjectProto')[0];

        if (!go) {
            alertEx(this.i18n.noGameObject);
            return;
        }

        RF.getComponentById('particleSystemModal').open();
    },
    editParticleSystem: function editParticleSystem(ps) {
        this.editData.currParticleSystemInEdit = ps.clone();
        RF.getComponentById('particleSystemModal').open();
    },
    deleteParticleSystem: function deleteParticleSystem(model) {
        _utils2.default.deleteModel(model);
    }
});

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _fileSystem = __webpack_require__(4);

var _fileSystem2 = _interopRequireDefault(_fileSystem);

var _resource = __webpack_require__(3);

var _resource2 = _interopRequireDefault(_resource);

var _i18n = __webpack_require__(1);

var _i18n2 = _interopRequireDefault(_i18n);

var _editData = __webpack_require__(0);

var _editData2 = _interopRequireDefault(_editData);

var _utils = __webpack_require__(2);

var _utils2 = _interopRequireDefault(_utils);

var _layer = __webpack_require__(9);

var _layer2 = _interopRequireDefault(_layer);

var _scene = __webpack_require__(10);

var _scene2 = _interopRequireDefault(_scene);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = RF.registerComponent('app-scenes', {
    template: {
        value: __webpack_require__(116),
        type: 'string'
    },
    i18n: _i18n2.default.getAll(),
    editData: _editData2.default,

    setCurrentScene: function setCurrentScene(scene) {
        _editData2.default.currSceneInEdit = scene;
    },
    setCurrSceneGameObjectInEdit: function setCurrSceneGameObjectInEdit(gameObject) {
        _editData2.default.currSceneGameObjectInEdit = gameObject;
    },
    setCurrLayer: function setCurrLayer(layer) {
        _editData2.default.currLayerInEdit = layer;
    },


    createScene: function createScene() {
        this.editData.currSceneInEdit = new _scene2.default(_editData2.default.game);
        RF.getComponentById('sceneModal').open();
    },
    editScene: function editScene(scene) {
        this.editData.currSceneInEdit = scene.clone();
        RF.getComponentById('sceneModal').open();
    },
    deleteScene: function deleteScene(scene) {
        if (scene.layers && scene.layers.length > 0) {
            alertEx(this.i18n.canNotDelete(scene, scene.layers.rs));
            return;
        }
        _utils2.default.deleteModel(scene, function () {
            _fileSystem2.default.removeFile('scripts/' + scene.name + '.js');
        });
    },
    createLayer: function createLayer(scene) {
        this.editData.currLayerInEdit = new _layer2.default(_editData2.default.game);
        this.editData.currLayerInEdit._scene = scene;
        RF.getComponentById('layerModal').open();
    },
    editLayer: function editLayer(layer, scene) {
        this.editData.currLayerInEdit = new _layer2.default(_editData2.default.game);
        this.editData.currLayerInEdit._scene = scene;
        RF.getComponentById('layerModal').open();
    },
    editScript: function editScript(scene) {
        _utils2.default.openEditor('scripts/' + scene.name + '.js');
    },
    deleteLayer: function deleteLayer(layer, scene) {
        if (layer.gameObjects.length) return alertEx(this.i18n.canNotDelete(layer, layer.gameObjects));
        _utils2.default.deleteModel(layer, function () {
            scene.layers.remove(function (it) {
                return it.id == layer.id;
            });
            scene.updateCloner();
            _editData2.default.game._repository.updateObject(scene);
            _resource2.default.save(scene);
        });
    },
    createGameObject: function createGameObject() {
        console.log('create go invoked');
    },
    editGameObject: function editGameObject(scene) {
        console.log('edit go invoked', scene);
    },
    deleteGameObject: function deleteGameObject(model) {
        var l = _editData2.default.currLayerInEdit;
        _utils2.default.deleteModel(model, function () {
            l.gameObjects.remove(function (it) {
                return it.id == model.id;
            });
            l.updateCloner();
            _editData2.default.game._repository.updateObject(l);
            _resource2.default.save(l);
        });
    }
});

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _editData = __webpack_require__(0);

var _editData2 = _interopRequireDefault(_editData);

var _utils = __webpack_require__(2);

var _utils2 = _interopRequireDefault(_utils);

var _i18n = __webpack_require__(1);

var _i18n2 = _interopRequireDefault(_i18n);

var _fileSystem = __webpack_require__(4);

var _fileSystem2 = _interopRequireDefault(_fileSystem);

var _sound = __webpack_require__(22);

var _sound2 = _interopRequireDefault(_sound);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = RF.registerComponent('app-sounds', {
    template: {
        type: 'string',
        value: __webpack_require__(117)
    },
    editData: _editData2.default,
    i18n: _i18n2.default.getAll(),
    createSound: function createSound() {
        this.editData.currSoundInEdit = new _sound2.default(_editData2.default.game);
        RF.getComponentById('soundDialog').open();
    },
    editSound: function editSound(sound) {
        this.editData.currSoundInEdit = sound.clone();
        RF.getComponentById('soundDialog').open();
    },
    deleteSound: function deleteSound(model) {
        _utils2.default.deleteModel(model, function () {
            _fileSystem2.default.removeFile(model.resourcePath);
        });
    }
});

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _editData = __webpack_require__(0);

var _editData2 = _interopRequireDefault(_editData);

var _utils = __webpack_require__(2);

var _utils2 = _interopRequireDefault(_utils);

var _i18n = __webpack_require__(1);

var _i18n2 = _interopRequireDefault(_i18n);

var _fileSystem = __webpack_require__(4);

var _fileSystem2 = _interopRequireDefault(_fileSystem);

var _spriteSheet = __webpack_require__(11);

var _spriteSheet2 = _interopRequireDefault(_spriteSheet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = RF.registerComponent('app-sprite-sheets', {
    template: {
        type: 'string',
        value: __webpack_require__(118)
    },
    editData: _editData2.default,
    i18n: _i18n2.default.getAll(),
    createSpriteSheet: function createSpriteSheet() {
        this.editData.currSpriteSheetInEdit = new _spriteSheet2.default(_editData2.default);
        RF.getComponentById('spriteSheetDialog').open();
    },
    editSpriteSheet: function editSpriteSheet(sprSh) {
        this.editData.currSpriteSheetInEdit = sprSh.clone();
        RF.getComponentById('spriteSheetDialog').open();
    },
    deleteSpriteSheet: function deleteSpriteSheet(model) {
        var hasDepends = _editData2.default.game._repository.getArray('GameObject').filter(function (it) {
            return it.spriteSheet.id == model.id;
        }).length > 0;
        if (hasDepends) {
            window.alertEx(this.i18n.canNotDelete(model));
            return;
        }
        _utils2.default.deleteModel(model, function () {
            _fileSystem2.default.removeFile(model.resourcePath);
        });
    }
});

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _i18n = __webpack_require__(1);

var _i18n2 = _interopRequireDefault(_i18n);

var _editData = __webpack_require__(0);

var _editData2 = _interopRequireDefault(_editData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = RF.registerComponent('app-user-interface', {
    template: {
        value: __webpack_require__(119),
        type: 'string'
    },
    i18n: _i18n2.default.getAll(),
    editData: _editData2.default
});

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _resource = __webpack_require__(3);

var _resource2 = _interopRequireDefault(_resource);

var _i18n = __webpack_require__(1);

var _i18n2 = _interopRequireDefault(_i18n);

var _editData = __webpack_require__(0);

var _editData2 = _interopRequireDefault(_editData);

var _utils = __webpack_require__(2);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = RF.registerComponent('app-info-curr-scene-game-object', {
    template: {
        value: __webpack_require__(120),
        type: 'string'
    },
    form: { valid: function valid() {
            return true;
        } },
    editData: _editData2.default,
    i18n: _i18n2.default.getAll(),
    utils: _utils2.default,
    editGameObject: function editGameObject() {
        var model = _editData2.default.currSceneGameObjectInEdit;
        model.updateCloner();
        _editData2.default.game._repository.updateObject(model);
        _resource2.default.save(model);
    }
});

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

__webpack_require__(87);

var _resource = __webpack_require__(3);

var _resource2 = _interopRequireDefault(_resource);

var _i18n = __webpack_require__(1);

var _i18n2 = _interopRequireDefault(_i18n);

var _editData = __webpack_require__(0);

var _editData2 = _interopRequireDefault(_editData);

var _utils = __webpack_require__(2);

var _utils2 = _interopRequireDefault(_utils);

var _scene = __webpack_require__(10);

var _scene2 = _interopRequireDefault(_scene);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = RF.registerComponent('app-info-curr-scene', {
    template: {
        type: 'string',
        value: __webpack_require__(121)
    },
    form: { valid: function valid() {
            return true;
        } },
    editData: _editData2.default,
    i18n: _i18n2.default.getAll(),
    utils: _utils2.default,
    numOfFramesForSceneSpriteSheet: function numOfFramesForSceneSpriteSheet() {
        if (!_editData2.default.currSceneInEdit) return 0;
        if (!_editData2.default.currSceneInEdit.tileMap) return 0;
        if (!_editData2.default.currSceneInEdit.tileMap._spriteSheet) return 0;
        return _editData2.default.currSceneInEdit.tileMap._spriteSheet.numOfFramesV * _editData2.default.currSceneInEdit.tileMap._spriteSheet.numOfFramesH || 0;
    },
    frameWidth: function frameWidth() {
        if (!_editData2.default.currSceneInEdit.tileMap) return null;
        if (!_editData2.default.currSceneInEdit.tileMap._spriteSheet) return null;
        return _editData2.default.currSceneInEdit.tileMap._spriteSheet._frameWidth;
    },
    frameHeight: function frameHeight() {
        if (!_editData2.default.currSceneInEdit.tileMap) return null;
        if (!_editData2.default.currSceneInEdit.tileMap._spriteSheet) return null;
        return _editData2.default.currSceneInEdit.tileMap._spriteSheet._frameHeight;
    },
    framePosX: function framePosX() {
        if (!_editData2.default.currSceneInEdit.tileMap) return null;
        if (!_editData2.default.currSceneInEdit.tileMap._spriteSheet) return null;
        if (!_editData2.default.currSceneInEdit.tileMap._spriteSheet.getFramePosX) return null;
        if (!_editData2.default.currTileIndexInEdit) return null;
        return _editData2.default.currSceneInEdit.tileMap._spriteSheet.getFramePosX(_editData2.default.currTileIndexInEdit);
    },
    framePosY: function framePosY() {
        if (!_editData2.default.currSceneInEdit.tileMap) return null;
        if (!_editData2.default.currSceneInEdit.tileMap._spriteSheet) return null;
        if (!_editData2.default.currSceneInEdit.tileMap._spriteSheet.getFramePosY) return null;
        if (!_editData2.default.currTileIndexInEdit) return null;
        return _editData2.default.currSceneInEdit.tileMap._spriteSheet.getFramePosY(_editData2.default.currTileIndexInEdit);
    },
    resourcePath: function resourcePath() {
        if (!_editData2.default.currSceneInEdit.tileMap) return null;
        if (!_editData2.default.currSceneInEdit.tileMap._spriteSheet) return null;
        return _editData2.default.currSceneInEdit.tileMap._spriteSheet.resourcePath;
    },
    numOfFramesH: function numOfFramesH() {
        if (!_editData2.default.currSceneInEdit.tileMap) return null;
        if (!_editData2.default.currSceneInEdit.tileMap._spriteSheet) return null;
        return _editData2.default.currSceneInEdit.tileMap._spriteSheet.numOfFramesH;
    },

    setCurrSelectedTile: function setCurrSelectedTile(i) {
        _editData2.default.currTileIndexInEdit = i;
    },
    setTileMapSpriteSheet: function setTileMapSpriteSheet() {
        // ??
        // editData.currSceneInEdit = new Scene(editData.currSceneInEdit.toJSON())
    },
    editScene: function editScene() {
        _resource2.default.save(this.editData.currSceneInEdit);
    }
});

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _httpClient = __webpack_require__(7);

var _httpClient2 = _interopRequireDefault(_httpClient);

var _editData = __webpack_require__(0);

var _editData2 = _interopRequireDefault(_editData);

var _i18n = __webpack_require__(1);

var _i18n2 = _interopRequireDefault(_i18n);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//opts: minify minify engineOnly embedResources embedScript

var w = void 0;
exports.default = RF.registerComponent('app-top-panel', {
    template: {
        value: __webpack_require__(122),
        type: 'string'
    },
    editData: _editData2.default,
    i18n: _i18n2.default.getAll(),
    run: function run() {
        _httpClient2.default.get('/resource/generate', {
            debug: 1,
            r: Math.random(),
            projectName: _editData2.default.projectName,
            minify: 1
            //embedResources: 1,
            //embedScript: 1
        }, function () {
            if (!w || w.closed) {
                //w = window.open(
                //    '/'+editData.projectName+'/out',
                //    editData.projectName,
                //    'width='+editData.gameProps.width+',height='+editData.gameProps.height+',toolbar=0'
                //);
                w = window.open('/' + _editData2.default.projectName + '/out');
            } else {
                w.location.reload();
            }
            w && w.focus();
        });
    },
    showBuildDialog: function showBuildDialog() {
        //uiHelper.showDialog('buildDialog');
    },
    toExplorer: function toExplorer() {
        RF.Router.navigateTo('explorer');
    }
});

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _editData = __webpack_require__(0);

var _editData2 = _interopRequireDefault(_editData);

var _project = __webpack_require__(17);

var _project2 = _interopRequireDefault(_project);

var _fileSystem = __webpack_require__(4);

var _fileSystem2 = _interopRequireDefault(_fileSystem);

var _i18n = __webpack_require__(1);

var _i18n2 = _interopRequireDefault(_i18n);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = RF.registerComponent('app-project-dialog', {
    template: {
        type: 'string',
        value: __webpack_require__(123)
    },
    editData: _editData2.default,
    i18n: _i18n2.default.getAll(),
    created: function created() {
        module.exports.instance = this;
    },
    createOrEditProject: function createOrEditProject(proj) {
        if (proj.oldName) {
            _fileSystem2.default.renameFolder('workspace/' + proj.oldName, 'workspace/' + proj.name, function () {
                _project2.default.getAll(function (list) {
                    _editData2.default.projects = list;
                });
            });
        } else {
            _project2.default.create(proj.name, function () {
                _project2.default.getAll(function (list) {
                    _editData2.default.projects = list;
                });
            });
        }
        RF.getComponentById('projectDialog').close();
    }
});

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

__webpack_require__(88);

var _editData = __webpack_require__(0);

var _editData2 = _interopRequireDefault(_editData);

var _project = __webpack_require__(17);

var _project2 = _interopRequireDefault(_project);

var _resourceHelper = __webpack_require__(16);

var _resourceHelper2 = _interopRequireDefault(_resourceHelper);

var _fileSystem = __webpack_require__(4);

var _fileSystem2 = _interopRequireDefault(_fileSystem);

__webpack_require__(58);

var _i18n = __webpack_require__(1);

var _i18n2 = _interopRequireDefault(_i18n);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = RF.registerComponent('explorer', {
    template: {
        type: 'string',
        value: __webpack_require__(124)
    },
    editData: _editData2.default,
    onMount: function onMount() {
        var _this = this;

        _project2.default.getAll(function (list) {
            _this.editData.projects = list;
        });
    },
    i18n: _i18n2.default.getAll(),
    editProject: function editProject(p) {
        p.oldName = p.name;
        this.editData.currProjectInEdit = {
            name: p.name,
            oldName: p.name
        };
        RF.getComponentById('projectDialog').open();
    },
    createProject: function createProject() {
        this.editData.currProjectInEdit = {
            name: ''
        };
        RF.getComponentById('projectDialog').open();
    },
    openProject: function openProject(project) {
        _resourceHelper2.default.loadProject(project.name);
    },
    deleteProject: function deleteProject(proj) {
        window.confirmEx(this.i18n.confirmQuestion(proj), function () {
            _fileSystem2.default.deleteFolder('workspace/' + proj.name, function () {
                _project2.default.getAll(function (list) {
                    _editData2.default.projects = list;
                });
            });
        });
    }
});

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var events = {};
window.addEventListener('message', function (resp) {
    var data = resp.data && resp.data.response;
    if (!data) return;
    var id = resp.data.eventUUID;
    if (events[id]) {
        var fn = events[id];
        delete events[id];
        fn && data && fn(data);
    }
});
var requestToApi = function requestToApi(params, callBack) {
    var eventUUID = ~~Math.random() * 100 + new Date().getTime();
    events[eventUUID] = callBack;
    params.eventUUID = eventUUID;
    window.top.postMessage(params, '*');
};

exports.default = { requestToApi: requestToApi };

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * v 1.0.0
 */

var PromiseLight = function () {
    function PromiseLight(resolveFn) {
        var _this = this;

        _classCallCheck(this, PromiseLight);

        this.resolveFn = resolveFn;
        this.catchFn = null;
        this.chain = [{ fn: resolveFn }];
        this.currentChainPointer = -1;
        this.lastResult = undefined;
        this.rejected = false;
        this.resolved = false;
        setTimeout(function () {
            if (!_this.isSecondary) PromiseLight._executeChain(_this);
        }, 0);
        PromiseLight.digest();
    }

    _createClass(PromiseLight, [{
        key: "then",
        value: function then(fn) {
            this.chain.push({ fn: fn, resolved: false });
            return this;
        }
    }, {
        key: "catch",
        value: function _catch(fn) {
            this.catchFn = fn;
            return this;
        }
    }], [{
        key: "digest",
        value: function digest() {
            clearTimeout(PromiseLight._resolve_tid);
            PromiseLight._resolve_tid = setTimeout(function () {
                RF.digest();
            }, 100);
        }
    }, {
        key: "_executeChain",
        value: function _executeChain(self) {
            if (self.rejected || self.resolved) return;
            self.currentChainPointer++;

            var resolve = function resolve(data) {
                self.lastResult = data;
                PromiseLight._executeChain(self);
            };
            var reject = function reject(data) {
                self.catchFn && self.catchFn(data);
                self.rejected = true;
            };

            if (self.currentChainPointer == 0) {
                if (self.resolveFn) {
                    self.resolveFn(resolve, reject);
                    PromiseLight.digest();
                    return;
                } else {
                    self.chain.shift();
                }
            }

            var next = self.chain[self.currentChainPointer];
            if (!next) {
                PromiseLight.digest();
                return;
            }
            try {
                self.lastResult = next.fn(self.lastResult);
                PromiseLight.digest();
            } catch (e) {
                if (self.rejectFn) {
                    self.rejectFn(e);
                } else {
                    console.error(e);
                }
                return;
            }
            if (self.lastResult instanceof PromiseLight) {
                self.lastResult.isSecondary = true;
                self.lastResult.resolveFn(resolve, reject);
            } else {
                setTimeout(function () {
                    PromiseLight._executeChain(self);
                }, 0);
            }
        }
    }, {
        key: "resolve",
        value: function resolve(data) {
            return new PromiseLight().then(function () {
                return data;
            });
        }
    }, {
        key: "reject",
        value: function reject(data) {
            window.onerror && window.onerror(data);
            return new PromiseLight().then(function () {
                return new PromiseLight(function (resolve, reject) {
                    reject(data);
                });
            });
        }
    }]);

    return PromiseLight;
}();

PromiseLight._resolve_tid = null;

//window.Promise = PromiseLight;

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


window.alertEx = function (message) {
    RF.getComponentById('alertDialog').open(message);
};

window.confirmEx = function (message, callback) {
    RF.getComponentById('confirmDialog').open(message, callback);
};

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

;(function () {
    "use strict";

    'use strict';

    var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
        return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
    } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
    };

    if (!window.console) {
        window.console = {};
        window.console.log = window.console.error = window.console.warn = function (msg) {
            window.status = msg;
        };
    }

    var ElementPrototype = typeof HTMLElement !== "undefined" ? HTMLElement.prototype : Element.prototype;

    if (!ElementPrototype.remove) {
        ElementPrototype.remove = function () {
            this.parentNode && this.parentNode.removeChild(this);
        };
    }

    if (!ElementPrototype.matches) {
        (function (e) {
            e.matches || (e.matches = e.matchesSelector || function (selector) {
                var matches = document.querySelectorAll(selector),
                    th = this;
                return Array.prototype.some.call(matches, function (e) {
                    return e === th;
                });
            });
        })(Element.prototype);
    }

    if (!ElementPrototype.closest) {
        (function (e) {
            e.closest = e.closest || function (css) {
                var node = this;

                while (node) {
                    if (node.matches(css)) return node;else node = node.parentElement;
                }
                return null;
            };
        })(Element.prototype);
    }

    if (!ElementPrototype.addEventListener) {
        ElementPrototype.addEventListener = function (name, fn) {
            this.attachEvent(name, function (e) {
                fn(e || window.event);
            });
        };
    }

    if (!Object.keys) {
        Object.keys = function (obj) {
            var keys = [];
            for (var i in obj) {
                if (obj.hasOwnProperty(i)) {
                    keys.push(i);
                }
            }
            return keys;
        };
    }

    if (!Array.prototype.reduce) {
        Array.prototype.reduce = function (callback /*, initialValue*/) {
            'use strict';

            if (this == null) {
                throw new TypeError('Array.prototype.reduce called on null or undefined');
            }
            if (typeof callback !== 'function') {
                throw new TypeError(callback + ' is not a function');
            }
            var t = Object(this),
                len = t.length >>> 0,
                k = 0,
                value = void 0;
            if (arguments.length >= 2) {
                value = arguments[1];
            } else {
                while (k < len && !(k in t)) {
                    k++;
                }
                if (k >= len) {
                    throw new TypeError('Reduce of empty array with no initial value');
                }
                value = t[k++];
            }
            for (; k < len; k++) {
                if (k in t) {
                    value = callback(value, t[k], k, t);
                }
            }
            return value;
        };
    }

    // Production steps of ECMA-262, Edition 5, 15.4.4.17
    // Reference: http://es5.github.io/#x15.4.4.17
    if (!Array.prototype.some) {
        Array.prototype.some = function (fun /*, thisArg*/) {
            'use strict';

            if (this == null) {
                throw new TypeError('Array.prototype.some called on null or undefined');
            }

            if (typeof fun !== 'function') {
                throw new TypeError();
            }

            var t = Object(this);
            var len = t.length >>> 0;

            var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
            for (var i = 0; i < len; i++) {
                if (i in t && fun.call(thisArg, t[i], i, t)) {
                    return true;
                }
            }

            return false;
        };
    }

    if (typeof Array.prototype.forEach != 'function') {
        Array.prototype.forEach = function (callback, thisArg) {
            if (typeof this.length != 'number') return;
            if (typeof callback != 'function') return;

            if (_typeof(this) == 'object') {
                for (var i = 0; i < this.length; i++) {
                    if (i in this) {
                        callback.call(thisArg || this, this[i], i, this);
                    } else {
                        return;
                    }
                }
            }
        };
    }

    [].filter || (Array.prototype.filter = // Use the native array filter method, if available.
    function (a, //a function to test each value of the array against. Truthy values will be put into the new array and falsy values will be excluded from the new array
    b, // placeholder
    c, // placeholder
    d, // placeholder
    e // placeholder
    ) {
        c = this; // cache the array
        d = []; // array to hold the new values which match the expression
        for (e in c) {
            // for each value in the array,
            ~~e + '' == e && e >= 0 && // coerce the array position and if valid,
            a.call(b, c[e], +e, c) && // pass the current value into the expression and if truthy,
            d.push(c[e]);
        } // add it to the new array

        return d; // give back the new array
    });

    Array.prototype.every = Array.prototype.every.every || // Use the native every method if available, otherwise:
    function (a, // expression to test each element of the array against
    b, // optionally change the 'this' context in the given expression
    c, // placeholder iterator variable
    d // placeholder variable (stores context of original array)
    ) {
        for (c = 0, d = this; c < d.length; c++) {
            // iterate over all of the array elements
            if (!a.call(b, d[c], c, d)) // call the given expression, passing in context, value, index, and original array
                return !1;
        } // if any expression evaluates false, immediately return since 'every' is false
        return !0; // otherwise return true since all expressions evaluated to true
    };

    if (!Array.prototype.map) {
        Array.prototype.map = function (fn) {
            var rv = [];
            for (var i = 0, l = this.length; i < l; i++) {
                rv.push(fn(this[i]));
            }return rv;
        };
    }

    if (!Array.prototype.indexOf) {
        Array.prototype.indexOf = function (elt /*, from*/) {
            var len = this.length >>> 0;
            var from = Number(arguments[1]) || 0;
            from = from < 0 ? Math.ceil(from) : Math.floor(from);
            if (from < 0) from += len;

            for (; from < len; from++) {
                if (from in this && this[from] === elt) return from;
            }
            return -1;
        };
    }

    if (!String.prototype.trim) {
        String.prototype.trim = function () {
            return this.replace(/^\s+|\s+$/g, '');
        };
    }

    if (!String.prototype.startsWith) {
        String.prototype.startsWith = function (searchString, position) {
            position = position || 0;
            return this.indexOf(searchString, position) === position;
        };
    }
    if (!String.prototype.endsWith) {
        String.prototype.endsWith = function (searchString, position) {
            var subjectString = this.toString();
            if (position === undefined || position > subjectString.length) {
                position = subjectString.length;
            }
            position -= searchString.length;
            var lastIndex = subjectString.indexOf(searchString, position);
            return lastIndex !== -1 && lastIndex === position;
        };
    }

    if (!Object.create) {
        Object.create = function (o, props) {
            function F() {}
            F.prototype = o;

            if ((typeof props === 'undefined' ? 'undefined' : _typeof(props)) === "object") {
                for (var prop in props) {
                    if (props.hasOwnProperty(prop)) {
                        F[prop] = props[prop];
                    }
                }
            }
            return new F();
        };
    }

    if (!window.Node) window.Node = {
        ELEMENT_NODE: 1,
        ATTRIBUTE_NODE: 2,
        TEXT_NODE: 3
    };

    (function (undef) {

        var nativeSplit = String.prototype.split,
            compliantExecNpcg = /()??/.exec("")[1] === undef,

        // NPCG: nonparticipating capturing group
        self = void 0;

        self = function self(str, separator, limit) {
            // If `separator` is not a regex, use `nativeSplit`
            if (Object.prototype.toString.call(separator) !== "[object RegExp]") {
                return nativeSplit.call(str, separator, limit);
            }
            var output = [],
                flags = (separator.ignoreCase ? "i" : "") + (separator.multiline ? "m" : "") + (separator.extended ? "x" : "") + ( // Proposed for ES6
            separator.sticky ? "y" : ""),

            // Firefox 3+
            lastLastIndex = 0,


            // Make `global` and avoid `lastIndex` issues by working with a copy
            separator = new RegExp(separator.source, flags + "g"),
                separator2,
                match,
                lastIndex,
                lastLength;
            str += ""; // Type-convert
            if (!compliantExecNpcg) {
                // Doesn't need flags gy, but they don't hurt
                separator2 = new RegExp("^" + separator.source + "$(?!\\s)", flags);
            }
            /* Values for `limit`, per the spec:
             * If undefined: 4294967295 // Math.pow(2, 32) - 1
             * If 0, Infinity, or NaN: 0
             * If positive number: limit = Math.floor(limit); if (limit > 4294967295) limit -= 4294967296;
             * If negative number: 4294967296 - Math.floor(Math.abs(limit))
             * If other: Type-convert, then use the above rules
             */
            limit = limit === undef ? -1 >>> 0 : // Math.pow(2, 32) - 1
            limit >>> 0; // ToUint32(limit)
            while (match = separator.exec(str)) {
                // `separator.lastIndex` is not reliable cross-browser
                lastIndex = match.index + match[0].length;
                if (lastIndex > lastLastIndex) {
                    output.push(str.slice(lastLastIndex, match.index));
                    // Fix browsers whose `exec` methods don't consistently return `undefined` for
                    // nonparticipating capturing groups
                    if (!compliantExecNpcg && match.length > 1) {
                        match[0].replace(separator2, function () {
                            for (var i = 1; i < arguments.length - 2; i++) {
                                if (arguments[i] === undef) {
                                    match[i] = undef;
                                }
                            }
                        });
                    }
                    if (match.length > 1 && match.index < str.length) {
                        Array.prototype.push.apply(output, match.slice(1));
                    }
                    lastLength = match[0].length;
                    lastLastIndex = lastIndex;
                    if (output.length >= limit) {
                        break;
                    }
                }
                if (separator.lastIndex === match.index) {
                    separator.lastIndex++; // Avoid an infinite loop
                }
            }
            if (lastLastIndex === str.length) {
                if (lastLength || !separator.test("")) {
                    output.push("");
                }
            } else {
                output.push(str.slice(lastLastIndex));
            }
            return output.length > limit ? output.slice(0, limit) : output;
        };

        // For convenience
        String.prototype.split = function (separator, limit) {
            return self(this, separator, limit);
        };

        return self;
    })();
    'use strict';

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var Component = function () {
        function Component(name, node, modelView) {
            var _this = this;

            _classCallCheck(this, Component);

            this.parent = null;
            this.children = null;
            this.disableParentScopeEvaluation = false;
            this.name = name;
            this.node = node;
            this.modelView = modelView;
            this.watchers = [];
            this.id = MiscUtils.getUID();
            this.domId = null;
            this.node.setAttribute('data-component-id', this.id);
            this.isWatchEnable = true;
            this.isMounted = false;
            this.isShown = false;
            this.stateExpression = null;
            DomUtils.nodeListToArray(this.node.querySelectorAll('*')).forEach(function (el) {
                el.setAttribute('data-component-id', _this.id);
            });
            modelView.$el = node;
            Component.instances.push(this);
        }

        Component.prototype.addChild = function addChild(childComponent) {
            if (!this.children) this.children = [];
            this.children.push(childComponent);
        };

        Component.prototype.setShown = function setShown(val, params) {
            var _this2 = this;

            var res = 'noChanged';
            if (this.isShown == val) return res;
            this.isShown = val;
            if (this.isShown) {
                res = this.modelView.onShow(params);
            } else {
                this.modelView.onHide();
            }
            this.isWatchEnable = val;
            if (this.children) {
                this.children.forEach(function (c) {
                    c.setShown(_this2.isShown);
                });
            }
            return res;
        };

        Component.prototype.setMounted = function setMounted(val, params) {
            var _this3 = this;

            var res = 'noChanged';
            if (this.isMounted == val) return res;
            this.isMounted = val;
            if (this.isMounted) {
                res = this.modelView.onMount(params);
            } else {
                this.modelView.onUnmount();
            }
            this.isWatchEnable = val;
            if (this.children) {
                this.children.forEach(function (c) {
                    c.setMounted(_this3.isMounted);
                });
            }
            return res;
        };

        Component.prototype.addWatcher = function addWatcher(expression, listenerFn, ifExpressionsList) {
            var watcherFn = ExpressionEngine.getExpressionFn(expression);
            this.watchers.push({
                expression: expression,
                watcherFn: watcherFn,
                listenerFn: listenerFn,
                ifExpressionsList: ifExpressionsList
            });
            listenerFn(ExpressionEngine.runExpressionFn(watcherFn, this));
        };

        Component.prototype._updateExternalState = function _updateExternalState() {
            var _this4 = this;

            if (!this.stateExpression) return;
            var newExternalState = ExpressionEngine.executeExpression(this.stateExpression, this.parent);
            Object.keys(newExternalState).forEach(function (key) {
                if (_this4.modelView[key] !== null && _this4.modelView[key] !== undefined && _this4.modelView[key] !== newExternalState[key]) {
                    _this4.modelView[key] = newExternalState[key];
                }
            });
        };

        Component.prototype.digest = function digest() {
            var _this5 = this;

            if (!this.isWatchEnable) return;
            this._updateExternalState();
            this.watchers.forEach(function (watcher) {
                var ifDirective = true;
                watcher.ifExpressionsList.some(function (ifExpression) {
                    var res = ExpressionEngine.executeExpression(ifExpression, _this5);
                    if (!res) {
                        ifDirective = false;
                        return true;
                    }
                });
                if (!ifDirective) return;

                var newValue = ExpressionEngine.runExpressionFn(watcher.watcherFn, _this5);
                var oldValue = watcher.last;
                var newValDeepCopy = MiscUtils.deepCopy(newValue);
                if (!MiscUtils.deepEqual(newValDeepCopy, oldValue)) {
                    watcher.listenerFn(newValue, oldValue);
                    watcher.last = newValDeepCopy;
                }
            });
        };

        Component.prototype.run = function run() {
            new DirectiveEngine(this).run();
            this.digest();
        };

        Component.prototype.destroy = function destroy() {
            this.node.remove();
            Component.instances.splice(Component.instances.indexOf(this), 1);
            if (this.children) {
                this.children.forEach(function (c) {
                    c.destroy();
                });
            }
        };

        Component.prototype.getComponentsByName = function getComponentsByName(name) {
            return this.children && this.children.filter(function (child) {
                return child.name == name;
            });
        };

        Component.prototype.getComponentById = function getComponentById(id) {
            return this.children && this.children.filter(function (child) {
                return child.domId == id;
            })[0];
        };

        Component.digestAll = function digestAll() {
            Component.instances.forEach(function (cmp) {
                cmp.digest();
            });
        };

        Component.getComponentByInternalId = function getComponentByInternalId(id) {
            var res = null;
            Component.instances.some(function (cmp) {
                if (cmp.id == id) {
                    res = cmp;
                    return true;
                }
            });
            return res;
        };

        Component.getComponentByDomId = function getComponentByDomId(domId) {
            var res = null;
            Component.instances.some(function (cmp) {
                if (cmp.domId == domId) {
                    res = cmp;
                    return true;
                }
            });
            return res;
        };

        return Component;
    }();

    Component.instances = [];
    "use strict";

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var ComponentProto = function () {
        function ComponentProto(name, node, properties) {
            _classCallCheck(this, ComponentProto);

            this.name = name;
            this.node = node;
            this.properties = properties;
        }

        ComponentProto.prototype.newInstance = function newInstance(node, externalProperties) {
            var modelView = new ModelView(this.name, this.properties, externalProperties);
            var cmp = new Component(this.name, node, modelView);
            modelView.component = cmp;
            return cmp;
        };

        ComponentProto.getByName = function getByName(name) {
            return ComponentProto.instances.filter(function (it) {
                return it.name == name;
            })[0] || null;
        };

        return ComponentProto;
    }();

    ComponentProto.instances = [];
    'use strict';

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var noop = function noop() {
        return 'noChanged';
    };

    var ModelView = function () {
        function ModelView(componentName) {
            var properties = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            var externalProperties = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

            _classCallCheck(this, ModelView);

            this.name = componentName || '';
            this.initialProperties = properties;
            this.externalProperties = externalProperties;
            this.component = null;
            this.resetState({ warnRedefined: true });

            this.onShow = this.onShow || noop;
            this.onHide = this.onHide || noop;
            this.onMount = this.onMount || noop;
            this.onUnmount = this.onUnmount || noop;
            this.onDestroy = this.onDestroy || noop;
        }

        ModelView.prototype.resetState = function resetState() {
            var warnRedefined = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            var properties = this.initialProperties;
            this._applyState(properties);
            var initialState = properties.getInitialState && properties.getInitialState();
            initialState && (initialState = MiscUtils.deepCopy(initialState));
            initialState && this._applyState(initialState, { warnRedefined: warnRedefined });
            this._applyState(this.externalProperties, { strict: true });
            this.component && this.component._updateExternalState();
        };

        ModelView.prototype._applyState = function _applyState() {
            var _this = this;

            var properties = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            var strict = opts.strict;

            Object.keys(properties).forEach(function (key) {
                if (strict && !_this.hasOwnProperty(key)) throw '\n                    can not apply non declared property "' + key + '" to component "' + _this.name + '",\n                    declare property in getInitialState() method\n                ';
                if (opts.warnRedefined && properties[key] && _this.hasOwnProperty(key)) {
                    console.warn('property ' + key + ' is redefined at component ' + _this.name);
                }
                _this[key] = properties[key];
            });
        };

        return ModelView;
    }();
    "use strict";

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }return call && ((typeof call === "undefined" ? "undefined" : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof2(superClass)));
        }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    /**
     * безымянный компонент, образованый методом applyBindings
     * либо при итерации
     */
    var ScopedDomFragment = function (_Component) {
        _inherits(ScopedDomFragment, _Component);

        function ScopedDomFragment(node, modelView) {
            _classCallCheck(this, ScopedDomFragment);

            return _possibleConstructorReturn(this, _Component.call(this, null, node, modelView));
        }

        return ScopedDomFragment;
    }(Component);
    'use strict';

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }return call && ((typeof call === "undefined" ? "undefined" : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof2(superClass)));
        }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    var ScopedLoopContainer = function (_Component) {
        _inherits(ScopedLoopContainer, _Component);

        function ScopedLoopContainer(node, modelView) {
            _classCallCheck(this, ScopedLoopContainer);

            var _this = _possibleConstructorReturn(this, _Component.call(this, null, node, modelView));

            if (node.getAttribute('data-for')) throw 'can not use "data-for" attribute at component directly. Use this directive at parent node';

            _this.scopedDomFragments = [];
            _this.lastFrafmentsLength = 0;
            _this.node = node;
            _this.parent = null;
            return _this;
        }

        ScopedLoopContainer.prototype._destroyFragment = function _destroyFragment(index) {
            var removedFragment = this.scopedDomFragments.splice(index, 1)[0];
            removedFragment.destroy();
            this.lastFrafmentsLength--;
        };

        ScopedLoopContainer.prototype.run = function run(eachItemName, indexName, iterableObjectExpr) {
            var _this2 = this;

            this.eachItemName = eachItemName;
            this.indexName = indexName;

            this.anchor = document.createComment('component-id: ' + this.id + '; loop: ' + eachItemName + ' in ' + iterableObjectExpr);
            this.node.parentNode.insertBefore(this.anchor, this.node.nextSibling);
            this.node.remove();
            this.node = this.node.cloneNode(true);

            this.addWatcher(iterableObjectExpr, function (newArr, oldArr) {
                _this2._processIterations(newArr, oldArr);
            }, [] // todo!!!! replace to real array of "if" expressions
            );
            this.digest();
        };

        ScopedLoopContainer.prototype._processIterations = function _processIterations() {
            var _this3 = this;

            var newArr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

            var currNodeInIteration = this.anchor;
            if (newArr instanceof Object) newArr = MiscUtils.objectToArray(newArr);

            if (!newArr.forEach) {
                console.error(this.node);
                throw 'can not evaluate loop expression: ' + this.eachItemName + (this.indexName ? ',' + this.indexName : '') + '. Expected object or array, but ' + newArr + ' found.';
            }

            var index = 0;
            newArr.forEach(function (iterableItem, i) {

                if ('key' in iterableItem && 'value' in iterableItem) {
                    // if looped object with key and value pairs
                    i = iterableItem.key;
                    iterableItem = iterableItem.value;
                }

                if (!_this3.scopedDomFragments[index]) {

                    var props = {};
                    props[_this3.eachItemName] = iterableItem;
                    if (_this3.indexName) props[_this3.indexName] = i;
                    var localModelView = new ModelView(_this3.indexName, props);

                    var node = _this3.node.cloneNode(true);
                    var scopedDomFragment = new ScopedDomFragment(node, localModelView);
                    // todo Cannot read property 'insertBefore' of null
                    currNodeInIteration.parentNode.insertBefore(node, currNodeInIteration.nextSibling);
                    scopedDomFragment.parent = _this3.parent;
                    scopedDomFragment.parent.addChild(scopedDomFragment);

                    scopedDomFragment.run();
                    currNodeInIteration = node;
                    _this3.scopedDomFragments.push(scopedDomFragment);
                    _this3.lastFrafmentsLength++;
                } else {

                    var _localModelView = _this3.scopedDomFragments[index].modelView;
                    _localModelView[_this3.eachItemName] = iterableItem;
                    if (_this3.indexName) _localModelView[_this3.indexName] = i;

                    currNodeInIteration = _this3.scopedDomFragments[index].node;
                    _this3.scopedDomFragments[index].digest();
                }
                index++;
            });

            if (this.lastFrafmentsLength > newArr.length) {
                var l = this.scopedDomFragments.length;
                for (var i = 0, max = this.lastFrafmentsLength - newArr.length; i < max; i++) {
                    this._destroyFragment(l - i - 1);
                }
            }
        };

        return ScopedLoopContainer;
    }(Component);
    'use strict';

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var DomUtils = function () {
        function DomUtils() {
            _classCallCheck(this, DomUtils);
        }

        /**
         * обработка текстовых узлов с выражением типа {{expression}}
         * @param root
         * @returns {Array}
         */
        DomUtils.processScopedTextNodes = function processScopedTextNodes(root) {
            var textNodes = getTextNodes(root);
            var result = [];
            textNodes.forEach(function (textNode) {
                var scopedNode = document.createDocumentFragment();
                var hasExpressions = false;
                (textNode.textContent || textNode.innerText || textNode.data).split(DomUtils.EXPRESSION_REGEXP).forEach(function (item) {
                    var newNode = void 0;
                    var trimmed = item.trim();
                    if (trimmed.indexOf('{{') == 0) {
                        newNode = document.createTextNode('');
                        var exp = trimmed.split('{{').join('').split('}}').join('');
                        if (!exp) return;
                        hasExpressions = true;
                        result.push({
                            node: newNode,
                            expression: exp
                        });
                    } else {
                        newNode = document.createTextNode(item);
                    }
                    scopedNode.appendChild(newNode);
                });
                hasExpressions && textNode.parentNode.replaceChild(scopedNode, textNode);
            });
            return result;

            function getTextNodes(root) {
                var textNodes = [];
                addTextNodes(root);
                Array.prototype.forEach.call(root.querySelectorAll('*'), addTextNodes);
                return textNodes;

                function addTextNodes(el) {
                    textNodes = textNodes.concat(Array.prototype.filter.call(el.childNodes, function (k) {
                        return k.nodeType == Node.TEXT_NODE;
                    }));
                }
            }
        };

        DomUtils.setInputValue = function setInputValue(el, value) {
            var tagName = el.tagName.toLowerCase();
            switch (tagName) {
                case 'input':
                    var type = el.getAttribute('type');
                    switch (type) {
                        case 'checkbox':
                            el.checked = !!value;
                            break;
                        case 'radio':
                            el.checked = value == el.value;
                            break;
                        default:
                            if (el.getAttribute('type') === 'number') {
                                value = parseFloat(value);
                            }
                            el.value = value;
                            break;
                    }
                    break;
                case 'select':
                    el.value = value;
                    break;
                case 'textarea':
                    el.value = value;
                    break;
            }
        };

        DomUtils.getInputValue = function getInputValue(el) {
            var tagName = el.tagName.toLowerCase();
            switch (tagName) {
                case 'input':
                    var type = el.getAttribute('type');
                    switch (type) {
                        case 'checkbox':
                            return el.checked;
                            break;
                        case 'radio':
                            var checkedEls = document.querySelectorAll('[type=radio][_data-model="' + el.getAttribute('_data-model') + '"]');
                            var checkedEl = null;
                            for (var i = 0; i < checkedEls.length; i++) {
                                if (checkedEls[i].checked) {
                                    checkedEl = checkedEls[i];
                                    break;
                                }
                            }
                            if (checkedEl) return checkedEl.value;
                            return '';
                            break;
                        default:
                            return el.value;
                            break;
                    }
                    break;
                    break;
                case 'select':
                    return el.value;
                    break;
                case 'textarea':
                    return el.value;
                    break;
            }
        };

        DomUtils.getDefaultInputChangeEvents = function getDefaultInputChangeEvents(el) {
            var tagName = el.tagName.toLowerCase();
            switch (tagName) {
                case 'input':
                    var type = el.getAttribute('type');
                    switch (type) {
                        case 'checkbox':
                            return 'click'; // ie8 not fire change for checkbox
                            break;
                        case 'radio':
                            return 'click'; // ie8 change returns previous value
                            break;
                        case 'range':
                        case 'date':
                        case 'number':
                            return 'oninput' in el ? 'input' : 'keyup,change';
                            break;
                        default:
                            return 'keyup,input,change';
                            break;
                    }
                    break;
                case 'select':
                    return 'change'; // todo DOMNodeRemoved
                    break;
                case 'textarea':
                    return 'keyup';
                    break;
                default:
                    return 'change';
                    break;
            }
        };

        DomUtils.addEventListener = function addEventListener(el, type, fn) {
            if (el.addEventListener) el.addEventListener(type, fn);else el.attachEvent('on' + type, fn);
        };

        DomUtils.setTextNodeValue = function setTextNodeValue(el, value) {
            if ('textContent' in el) {
                el.textContent = value;
            } else {
                el.nodeValue = value;
            }
        };

        // todo ie8 in emulation mode has classList, but it is uncorrect


        DomUtils.toggleClass = function toggleClass(el, className, isAdd) {
            if (el.classList) {
                el.classList.toggle(className, isAdd);
                return;
            }
            if (isAdd) {
                if (el.className.indexOf(className) == -1) el.className += ' ' + className;
            } else {
                var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
                el.className = el.className.replace(reg, ' ');
            }
        };

        DomUtils.nodeListToArray = function nodeListToArray(nodeList) {
            var arr = [];
            for (var i = 0; i < nodeList.length; i++) {
                arr.push(nodeList[i]);
            }
            return arr;
        };

        DomUtils.removeParentButNotChildren = function removeParentButNotChildren(nodeToBeRemoved) {
            var children = DomUtils.nodeListToArray(nodeToBeRemoved.children);
            while (nodeToBeRemoved.firstChild) {
                nodeToBeRemoved.parentNode.insertBefore(nodeToBeRemoved.firstChild, nodeToBeRemoved);
            }
            nodeToBeRemoved.parentNode.removeChild(nodeToBeRemoved);
            return children;
        };

        DomUtils.preventDefault = function preventDefault(e) {
            e = e || window.e;
            e.preventDefault && e.preventDefault();
            e.stopPropagation && e.stopPropagation();
            e.cancelBubble = true;
            e.returnValue = false;
        };

        DomUtils.getClosestElWithDataAttr = function getClosestElWithDataAttr(node, dataAttr) {
            while (node) {
                if (node === document) return;
                if (node.hasAttribute(dataAttr)) return node;
                node = node.parentNode;
            }
        };

        DomUtils.__getAttribute = function __getAttribute(el, attr) {
            return el.getAttribute && el.getAttribute('data-' + attr);
        };

        DomUtils._get_If_expressionTopDownList = function _get_If_expressionTopDownList(el) {
            var res = [];
            do {
                var dataIfExp = DomUtils.__getAttribute(el, 'if');
                if (dataIfExp) {
                    res.unshift(dataIfExp);
                }
            } while (el = el.parentNode);
            return res;
        };

        DomUtils._replaceAll = function _replaceAll(val, delimiter, value) {
            return val.split(delimiter).join(value);
        };

        DomUtils.sanitize = function sanitize(value) {
            var node = document.createElement('div');
            node.innerHTML = value;
            DomUtils.nodeListToArray(node.querySelectorAll('script,style,iframe,frame')).forEach(function (nodeItem) {
                nodeItem.parentNode.removeChild(nodeItem);
            });
            return node.innerHTML;
        };

        return DomUtils;
    }();

    DomUtils.EXPRESSION_REGEXP = /(\{\{[^\t]*?}})/;
    'use strict';

    var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
        return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
    } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
    };

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var MiscUtils = function () {
        function MiscUtils() {
            _classCallCheck(this, MiscUtils);
        }

        /**
         * @param obj
         * @param _clonedObjects - internal store of cloned object to avoid self-cycled object recursion
         * @returns {*}
         */
        MiscUtils.deepCopy = function deepCopy(obj) {
            var _clonedObjects = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

            if (obj === undefined) return undefined;else if (obj === null) return null;else if (typeof window !== 'undefined' && obj === window) return undefined;else if (_clonedObjects.indexOf(obj) > -1) return obj;
            if (Object.prototype.toString.call(obj) === '[object Array]') {
                var out = [],
                    i = 0,
                    len = obj.length;
                for (; i < len; i++) {
                    var clonedObject = void 0;
                    if (_clonedObjects.indexOf(obj[i]) > -1) {
                        clonedObject = obj[i];
                    } else {
                        clonedObject = MiscUtils.deepCopy(obj[i], _clonedObjects);
                        _clonedObjects.push(obj[i]);
                    }
                    out[i] = clonedObject;
                }
                return out;
            } else if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object') {
                var _out = {};
                for (var _i in obj) {
                    var _clonedObject = void 0;
                    if (_clonedObjects.indexOf(obj[_i]) > -1) {
                        _clonedObject = obj[_i];
                    } else {
                        _clonedObjects.push(obj[_i]);
                        _clonedObject = MiscUtils.deepCopy(obj[_i], _clonedObjects);
                    }
                    _out[_i] = _clonedObject;
                }
                return _out;
            }
            return obj;
        };

        MiscUtils.superficialCopy = function superficialCopy(a, b) {
            if (!(a && b)) return;
            Object.keys(b).forEach(function (key) {
                a[key] = b[key];
            });
        };

        /**
         * @param x
         * @param y
         * @param _checkCache - circular structure holder
         * @returns {*}
         *
         */

        MiscUtils.deepEqual = function deepEqual(x, y) {
            var _checkCache = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

            //if (isNaN(x) && isNaN(y)) return true;
            if (x && y && (typeof x === 'undefined' ? 'undefined' : _typeof(x)) === 'object' && (typeof y === 'undefined' ? 'undefined' : _typeof(y)) === 'object') {
                if (x === y) return true;
                if (_checkCache.indexOf(x) > -1 || _checkCache.indexOf(y) > -1) return true;
                _checkCache.push(x);
                _checkCache.push(y);
                return Object.keys(x).length === Object.keys(y).length && Object.keys(x).reduce(function (isEqual, key) {
                    return isEqual && MiscUtils.deepEqual(x[key], y[key], _checkCache);
                }, true);
            } else {
                return x === y;
            }
        };

        MiscUtils.camelToSnake = function camelToSnake(str) {
            return str.replace(/([A-Z])/g, function ($1) {
                return "-" + $1.toLowerCase();
            });
        };

        MiscUtils.getUID = function getUID() {
            return cnt++;
        };

        MiscUtils.objectToArray = function objectToArray(obj) {
            var res = [];
            Object.keys(obj).forEach(function (key) {
                res.push({ key: key, value: obj[key] });
            });
            return res;
        };

        MiscUtils.copyMethods = function copyMethods(src, dest) {
            Object.keys(dest).forEach(function (name) {
                src[name] = dest.name;
            });
        };

        return MiscUtils;
    }();

    var cnt = 0;
    "use strict";

    var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
        return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
    } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
    };

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var TemplateLoader = function () {
        function TemplateLoader() {
            _classCallCheck(this, TemplateLoader);
        }

        TemplateLoader._getNodeFromDom = function _getNodeFromDom(templateObj, componentName) {
            if (!templateObj.value) {
                console.error("can not process template at component " + componentName);
                throw "template.value must be specified";
            }
            var node = document.getElementById(templateObj.value);
            if (!node) throw "can not fing dom element with id " + templateObj.value;
            return node;
        };

        TemplateLoader._getNodeFromString = function _getNodeFromString(templateObj, componentName) {
            if (!templateObj.value) throw "template string not provided";
            if (typeof templateObj.value !== 'string') {
                console.error("can not process template at component " + componentName);
                throw "template.value mast be a String, but " + _typeof(templateObj.value) + " found";
            }
            var container = document.createElement('div');
            container.innerHTML = templateObj.value;
            return container;
        };

        TemplateLoader.getNode = function getNode() {
            var properties = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var componentName = arguments[1];

            var templateObj = properties.template;
            if (!templateObj) throw "template object not defined. Provide template at your component '" + componentName + "'";
            switch (templateObj.type) {
                case 'dom':
                    return TemplateLoader._getNodeFromDom(templateObj, componentName);
                case 'string':
                    return TemplateLoader._getNodeFromString(templateObj, componentName);
                default:
                    console.error("can not process template at component " + componentName);
                    throw "can not load template with type " + templateObj.type + ", only \"dom\" and \"string\" types is supported";
            }
        };

        return TemplateLoader;
    }();
    'use strict';

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var dataTransclusion = 'data-transclusion';

    var ComponentHelper = function () {
        function ComponentHelper() {
            _classCallCheck(this, ComponentHelper);
        }

        ComponentHelper._runTransclNode = function _runTransclNode(componentProto, domEl, transclNode, transclComponents) {
            var transclusionId = domEl.getAttribute('data-transclusion-id') || '';
            var name = transclNode.getAttribute(dataTransclusion);
            var nameSpecifiedById = transclusionId ? name += '\\:\\#' + transclusionId : '';
            if (!name) {
                console.error(componentProto.node);
                console.error(transclNode);
                throw dataTransclusion + ' attribute can not be empty';
            }

            var recipients = DomUtils.nodeListToArray(domEl.querySelectorAll('[' + dataTransclusion + '="' + name + '"],[' + dataTransclusion + '="' + nameSpecifiedById + '"]')).filter(function (el) {
                var closestWithSameName = el.parentNode && (el.parentNode.closest('[' + dataTransclusion + '="' + name + '"]') || el.parentNode.closest('[' + dataTransclusion + '="' + nameSpecifiedById + '"]'));
                if (!!closestWithSameName) {
                    console.error(domEl);
                    console.error(closestWithSameName);
                    throw '\n                            transclusion name conflict:\n                            dont use same transclusion name at different components with parent-child relations.\n                            Conflicted name: "' + name + '"';
                }
                return true;
            });

            recipients.forEach(function (rcp) {
                transclNode.innerHTML = '';
                transclComponents.push({ transclNode: transclNode, rcp: rcp });
            });
        };

        ComponentHelper._runComponentDomEl = function _runComponentDomEl(rootComponent, componentProto, domEl, transclComponents, componentNodes) {
            if (domEl.getAttribute('data-_processed')) return;
            domEl.setAttribute('data-_processed', '1');

            var hasNotTranscluded = false;
            DomUtils.nodeListToArray(domEl.childNodes).forEach(function (chdrn) {
                if (chdrn.hasAttribute && !chdrn.hasAttribute(dataTransclusion)) hasNotTranscluded = true;
            });
            if (hasNotTranscluded) {
                console.warn(domEl);
                console.warn('children elements of component ' + componentProto.name + ' will be removed');
            }

            var domId = domEl.getAttribute('id');
            var componentNode = componentProto.node.cloneNode(true);
            DomUtils.nodeListToArray(componentNode.querySelectorAll('[' + dataTransclusion + ']')).forEach(function (transclNode) {
                ComponentHelper._runTransclNode(componentProto, domEl, transclNode, transclComponents);
            });
            domEl.parentNode.insertBefore(componentNode, domEl);

            var dataStateExpression = domEl.getAttribute('data-state');
            var dataState = dataStateExpression ? ExpressionEngine.executeExpression(dataStateExpression, rootComponent) : {};
            var component = componentProto.newInstance(componentNode, dataState);
            domId && (component.domId = domId);

            component.parent = rootComponent;
            component.parent.addChild(component);
            if (dataStateExpression) component.stateExpression = dataStateExpression;
            component.disableParentScopeEvaluation = true; // avoid recursion in Component

            component.run();

            domEl.parentNode.removeChild(domEl);
            componentNodes.push({ component: component, componentNode: componentNode });
        };

        ComponentHelper._runComponent = function _runComponent(rootComponent, componentProto) {
            var transclComponents = [];
            var domEls = DomUtils.nodeListToArray(rootComponent.node.getElementsByTagName(componentProto.name));
            if (rootComponent.node.tagName.toLowerCase() == componentProto.name.toLowerCase()) {
                console.error('\n                   Can not use "data-for" attribute at component directly. Use "data-for" directive at parent node');
                console.error('component node:', rootComponent.node);
                throw "Can not use data-for attribute at component";
            }
            var componentNodes = [];
            domEls.forEach(function (domEl) {
                var hasClosestSameComponent = domEl.parentNode && domEl.parentNode.closest(domEl.tagName.toLowerCase());
                if (hasClosestSameComponent) return;
                ComponentHelper._runComponentDomEl(rootComponent, componentProto, domEl, transclComponents, componentNodes);
            });
            var hasStateChanged = false;
            componentNodes.forEach(function (item) {
                var children = DomUtils.removeParentButNotChildren(item.componentNode);
                if (children.length == 1) {
                    item.component.modelView.$el = children[0];
                } else {
                    item.component.modelView.$el = children;
                }
                hasStateChanged = item.component.setMounted(true) != 'noChanged' || hasStateChanged;
                hasStateChanged = item.component.setShown(true) != 'noChanged' || hasStateChanged;
            });
            hasStateChanged && Component.digestAll();
            return transclComponents;
        };

        ComponentHelper._runTransclusionComponent = function _runTransclusionComponent(rootComponent, trnscl) {
            DomUtils.nodeListToArray(trnscl.rcp.childNodes).forEach(function (n) {
                trnscl.transclNode.appendChild(n);
            });
            var transclComponent = new ScopedDomFragment(trnscl.transclNode, rootComponent.modelView);
            rootComponent.addChild(transclComponent);
            transclComponent.parent = rootComponent;
            trnscl.transclNode.setAttribute('data-_processed', '1');
            transclComponent.run();
        };

        ComponentHelper.runComponents = function runComponents(rootComponent) {
            var transclComponents = [];
            ComponentProto.instances.forEach(function (componentProto) {
                transclComponents = transclComponents.concat(ComponentHelper._runComponent(rootComponent, componentProto));
            });
            transclComponents.forEach(function (trnscl) {
                ComponentHelper._runTransclusionComponent(rootComponent, trnscl);
            });
        };

        return ComponentHelper;
    }();
    'use strict';

    var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
        return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
    } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
    };

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var DirectiveEngine = function () {
        function DirectiveEngine(component) {
            _classCallCheck(this, DirectiveEngine);

            this.component = component;
        }

        DirectiveEngine.prototype._eachElementWithAttr = function _eachElementWithAttr(dataAttrName, onEachElementFn) {
            var elements = [];
            var nodes = this.component.node.querySelectorAll('[' + dataAttrName + ']');
            for (var i = 0; i < nodes.length; i++) {
                elements.push(nodes[i]);
            }
            if (this.component.node.hasAttribute(dataAttrName)) elements.push(this.component.node);
            elements.forEach(function (el) {
                var expression = el.getAttribute(dataAttrName);
                el.removeAttribute(dataAttrName);
                el.setAttribute('_' + dataAttrName, expression);
                var processed = onEachElementFn(el, expression);
                if (processed === false) el.setAttribute(dataAttrName, expression);
            });
        };

        DirectiveEngine.prototype.runDirective_For = function runDirective_For() {
            var _this = this;

            this._eachElementWithAttr('data-for', function (el, expression) {
                var closestTransclusionEl = el.closest('[data-transclusion]');

                if (closestTransclusionEl && !closestTransclusionEl.getAttribute('data-_processed')) return false;
                expression = expression.replace(/,\s+/, ',').replace(/[\t\n]+/, ' ');
                var tokens = expression.split(' ').filter(function (it) {
                    return it.length;
                });
                if (['in', 'of'].indexOf(tokens[1]) == -1) throw 'can not parse expression: ' + expression;
                var variables = Lexer.tokenize(tokens[0]).filter(function (t) {
                    return [Token.TYPE.VARIABLE, Token.TYPE.OBJECT_KEY].indexOf(t.tokenType) > -1;
                }).map(function (t) {
                    return t.tokenValue;
                });

                if (!variables.length) throw 'can not parse expression: ' + expression;
                var eachItemName = variables[0];
                var indexName = variables[1];
                tokens.shift();
                tokens.shift();
                var iterableObjectExpr = tokens.join(' ');
                var scopedLoopContainer = new ScopedLoopContainer(el, _this.component.modelView);
                scopedLoopContainer.parent = _this.component;
                scopedLoopContainer.run(eachItemName, indexName, iterableObjectExpr);
            });
        };

        DirectiveEngine.prototype.runTextNodes = function runTextNodes() {
            var _this2 = this;

            DomUtils.processScopedTextNodes(this.component.node).forEach(function (it) {
                _this2.component.addWatcher(it.expression, function (value) {
                    if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') value = JSON.stringify(value);
                    DomUtils.setTextNodeValue(it.node, value);
                }, DomUtils._get_If_expressionTopDownList(it.node));
            });
        };

        DirectiveEngine.prototype._runDomEvent = function _runDomEvent(el, expression, eventName) {
            var _this3 = this;

            var closestForm = el.closest('form');
            var shouldPreventDefault = !!closestForm && !closestForm.__shouldPreventDefault__;
            var fn = ExpressionEngine.getExpressionFn(expression);
            if (shouldPreventDefault && el !== closestForm) {
                DomUtils.addEventListener(closestForm, 'submit', function (e) {
                    DomUtils.preventDefault(e);
                    return false;
                });
            }

            DomUtils.addEventListener(el, eventName, function (e) {

                _this3.component.modelView.$event = e;
                ExpressionEngine.runExpressionFn(fn, _this3.component);
                delete _this3.component.modelView.$event;
                Component.digestAll();
                if (eventName == 'submit') {
                    DomUtils.preventDefault(e);
                    return false;
                }
            });
            closestForm && (closestForm.__shouldPreventDefault__ = '__shouldPreventDefault__');
        };

        DirectiveEngine.prototype.runDomEvent = function runDomEvent(eventName) {
            var _this4 = this;

            this._eachElementWithAttr('data-' + eventName, function (el, expression) {
                _this4._runDomEvent(el, expression, eventName);
            });
        };

        DirectiveEngine.prototype.runDomEvent_Change = function runDomEvent_Change() {
            var _this5 = this;

            this._eachElementWithAttr('data-' + 'change', function (el, expression) {
                var events = DomUtils.getDefaultInputChangeEvents(el).split(',');
                events.forEach(function (eventName) {
                    _this5._runDomEvent(el, expression, eventName);
                });
            });
        };

        DirectiveEngine.prototype._runDirectiveEvents = function _runDirectiveEvents(el, expression) {
            var _this6 = this;

            expression = expression.trim();
            if (!(expression.startsWith("{") && expression.endsWith("}"))) throw 'Attribute error. can not parse expression ' + expression;
            expression = expression.substr(1, expression.length - 2);
            expression.split(',').forEach(function (expr) {
                var p = expr.split(':');
                if (p.length !== 2) throw 'Attribute error. can not parse expression ' + expression;
                _this6._runDomEvent(el, p[1], p[0]);
            });
        };

        DirectiveEngine.prototype.runDirective_Events = function runDirective_Events() {
            var _this7 = this;

            this._eachElementWithAttr('data-' + 'events', function (el, expression) {
                _this7._runDirectiveEvents(el, expression);
            });
        };

        DirectiveEngine.prototype.runDirective_Event = function runDirective_Event() {
            var _this8 = this;

            this._eachElementWithAttr('data-' + 'event', function (el, expression) {
                _this8._runDirectiveEvents(el, '{' + expression + '}');
            });
        };

        DirectiveEngine.prototype._runDirective_Model_OfSelect = function _runDirective_Model_OfSelect(selectEl, modelExpression) {
            var isMultiple = selectEl.multiple,
                val = [];
            var selectedEls = DomUtils.nodeListToArray(selectEl.querySelectorAll('option')).filter(function (opt) {
                return opt.selected;
            });
            selectedEls.forEach(function (selectedEl) {
                var dataValueAttr = selectedEl.getAttribute('data-value');
                var component = void 0;
                component = Component.getComponentByInternalId(selectedEl.getAttribute('data-component-id'));
                if (component && dataValueAttr) {
                    val.push(ExpressionEngine.executeExpression(dataValueAttr, component));
                } else {
                    val.push(selectedEl.getAttribute('value'));
                }
            });
            ExpressionEngine.setValueToContext(this.component, modelExpression, isMultiple ? val : val[0]);
        };

        DirectiveEngine.prototype.runDirective_Model = function runDirective_Model() {
            var _this9 = this;

            this._eachElementWithAttr('data-model', function (el, expression) {
                var isNumeric = el.getAttribute('type') === 'number';
                if (el.getAttribute('type') == 'radio' && !el.getAttribute('name')) el.setAttribute('name', expression);
                var eventNames = DomUtils.getDefaultInputChangeEvents(el);
                eventNames.split(',').forEach(function (eventName) {
                    if (el.tagName.toLowerCase() == 'select') {
                        DomUtils.addEventListener(el, eventName, function (e) {
                            _this9._runDirective_Model_OfSelect(el, expression);
                            Component.digestAll();
                        });
                    } else {
                        DomUtils.addEventListener(el, eventName, function (e) {
                            var val = DomUtils.getInputValue(el);
                            if (isNumeric && val.length) val = parseFloat(val);
                            ExpressionEngine.setValueToContext(_this9.component, expression, val);
                            Component.digestAll();
                        });
                    }
                });
                _this9.component.addWatcher(expression, function (value) {
                    if (el.tagName.toLowerCase() == 'select') {
                        var isMultiple = el.multiple;
                        var isModelSet = false;
                        DomUtils.nodeListToArray(el.querySelectorAll('option')).some(function (opt) {
                            var modelItemExpression = opt.getAttribute('data-value');
                            if (!modelItemExpression) return;
                            var componentId = opt.getAttribute('data-component-id');
                            var component = Component.getComponentByInternalId(componentId);
                            var modelItem = ExpressionEngine.executeExpression(modelItemExpression, component);
                            if (isMultiple) {
                                if (value.indexOf(modelItem) > -1) {
                                    isModelSet = true;
                                    opt.selected = true;
                                } else {
                                    opt.selected = false;
                                }
                            } else {
                                if (modelItem == value) {
                                    opt.selected = true;
                                    isModelSet = true;
                                    return true;
                                }
                            }
                        });
                        if (!isModelSet) {
                            el.value = value;
                            if (isMultiple) {
                                DomUtils.nodeListToArray(el.querySelectorAll('option')).forEach(function (opt) {
                                    opt.selected = value.indexOf(opt.getAttribute('value')) > -1;
                                });
                            }
                        }
                    } else {
                        if (DomUtils.getInputValue(el) == value) return;
                        if (value == undefined) value = '';
                        DomUtils.setInputValue(el, value);
                    }
                }, DomUtils._get_If_expressionTopDownList(el));
            });
        };

        DirectiveEngine.prototype.runDirective_Class = function runDirective_Class() {
            var _this10 = this;

            this._eachElementWithAttr('data-class', function (el, expression) {
                var initialClassName = el.className;
                _this10.component.addWatcher(expression, function (classNameOrObj) {
                    if ((typeof classNameOrObj === 'undefined' ? 'undefined' : _typeof(classNameOrObj)) === 'object') {
                        for (var key in classNameOrObj) {
                            if (!classNameOrObj.hasOwnProperty(key)) continue;
                            DomUtils.toggleClass(el, key, !!classNameOrObj[key]);
                        }
                    } else {
                        el.className = initialClassName + ' ' + classNameOrObj;
                    }
                }, DomUtils._get_If_expressionTopDownList(el));
            });
        };

        DirectiveEngine.prototype.runDirective_Style = function runDirective_Style() {
            var _this11 = this;

            this._eachElementWithAttr('data-style', function (el, expression) {
                _this11.component.addWatcher(expression, function (styleObject) {
                    for (var key in styleObject) {
                        if (!styleObject.hasOwnProperty(key)) continue;
                        try {
                            el.style[key] = styleObject[key] ? styleObject[key] : '';
                        } catch (e) {
                            //ie8 throws error if style is incorrect
                        }
                    }
                }, DomUtils._get_If_expressionTopDownList(el));
            });
        };

        DirectiveEngine.prototype.runDirective_Disabled = function runDirective_Disabled() {
            var _this12 = this;

            this._eachElementWithAttr('data-disabled', function (el, expression) {
                _this12.component.addWatcher(expression, function (value) {
                    if (value) el.setAttribute('disabled', 'disabled');else el.removeAttribute('disabled');
                }, DomUtils._get_If_expressionTopDownList(el));
            });
        };

        DirectiveEngine.prototype._getChildComponents = function _getChildComponents(el) {
            var componentIds = {};
            var thisId = el.getAttribute('data-component-id');
            var res = [];
            if (!el.children) return [];
            DomUtils.nodeListToArray(el.querySelectorAll('*')).map(function (it) {
                return it.getAttribute('data-component-id');
            }).forEach(function (componentId) {
                if (!componentIds[componentId]) {
                    componentIds[componentId] = true;
                    if (thisId != componentId) res.push(RF._getComponentByInternalId(componentId));
                }
            });
            return res;
        };

        DirectiveEngine.prototype.runDirective_If = function runDirective_If() {
            var _this13 = this;

            this._eachElementWithAttr('data-if', function (el, expression) {
                var comment = document.createComment('');
                el.parentNode.insertBefore(comment, el);
                var childComponents = _this13._getChildComponents(el);
                _this13.component.addWatcher(expression, function (val) {
                    if (val) {
                        if (!el.parentElement) {
                            comment.parentNode.insertBefore(el, comment.nextSibling);
                            childComponents.forEach(function (cmp) {
                                cmp.setMounted(true);
                                cmp.setShown(true);
                            });
                        }
                    } else {
                        el.remove();
                        childComponents.forEach(function (cmp) {
                            cmp.setMounted(false);
                            cmp.setShown(false);
                        });
                    }
                }, DomUtils._get_If_expressionTopDownList(el));
            });
        };

        DirectiveEngine.prototype.runDirective_Show = function runDirective_Show() {
            var _this14 = this;

            this._eachElementWithAttr('data-show', function (el, expression) {
                var initialStyle = el.style.display || '';
                var childComponents = _this14._getChildComponents(el);
                _this14.component.addWatcher(expression, function (val) {
                    if (val) {
                        el.style.display = initialStyle;
                        childComponents.forEach(function (cmp) {
                            cmp.setShown(true);
                        });
                    } else {
                        el.style.display = 'none';
                        childComponents.forEach(function (cmp) {
                            cmp.setShown(false);
                        });
                    }
                }, DomUtils._get_If_expressionTopDownList(el));
            });
        };

        DirectiveEngine.prototype.runDirective_Hide = function runDirective_Hide() {
            var _this15 = this;

            this._eachElementWithAttr('data-hide', function (el, expression) {
                var initialStyle = el.style.display || '';
                var childComponents = _this15._getChildComponents(el);
                _this15.component.addWatcher(expression, function (val) {
                    if (val) {
                        el.style.display = 'none';
                        childComponents.forEach(function (cmp) {
                            cmp.setShown(false);
                        });
                    } else {
                        el.style.display = initialStyle;
                        childComponents.forEach(function (cmp) {
                            cmp.setShown(true);
                        });
                    }
                }, DomUtils._get_If_expressionTopDownList(el));
            });
        };

        DirectiveEngine.prototype.runDirective_Html = function runDirective_Html() {
            var _this16 = this;

            this._eachElementWithAttr('data-html', function (el, expression) {
                _this16.component.addWatcher(expression, function (val) {
                    el.innerHTML = DomUtils.sanitize(val);
                }, DomUtils._get_If_expressionTopDownList(el));
            });
        };

        DirectiveEngine.prototype._runAttributes = function _runAttributes(el, properties) {
            Object.keys(properties).forEach(function (key) {
                var val = properties[key];
                if (typeof val == 'boolean') val ? el.setAttribute(key, key) : el.removeAttribute(key);else el.setAttribute(key, val);
            });
        };

        DirectiveEngine.prototype.runDirective_Attributes = function runDirective_Attributes() {
            var _this17 = this;

            this._eachElementWithAttr('data-attributes', function (el, expression) {
                _this17.component.addWatcher(expression, function (properties) {
                    _this17._runAttributes(el, properties);
                }, DomUtils._get_If_expressionTopDownList(el));
            });
        };

        DirectiveEngine.prototype.runDirective_Attribute = function runDirective_Attribute() {
            var _this18 = this;

            this._eachElementWithAttr('data-attribute', function (el, expression) {
                expression = '{' + expression + '}';
                _this18.component.addWatcher(expression, function (properties) {
                    _this18._runAttributes(el, properties);
                }, DomUtils._get_If_expressionTopDownList(el));
            });
        };

        DirectiveEngine.prototype.runComponents = function runComponents() {
            ComponentHelper.runComponents(this.component);
        };

        DirectiveEngine.prototype.runExpressionsInAttrs = function runExpressionsInAttrs() {
            var _this19 = this;

            DomUtils.nodeListToArray(this.component.node.querySelectorAll('*')).forEach(function (el) {
                if (!el.attributes) return;
                Array.prototype.forEach.call(el.attributes, function (attr) {
                    if (!attr) return;
                    var name = attr.name,
                        value = attr.value;

                    if (value.indexOf('{{') == -1 && value.indexOf('}}') == -1) return;
                    value = value.split(/[\n\t]|[\s]{2,}/).join(' ').trim();
                    var resultExpArr = [],
                        resultExpr = void 0;
                    value.split(DomUtils.EXPRESSION_REGEXP).forEach(function (token) {
                        if (!token.length) return;
                        if (token.indexOf('{{') == 0) {
                            token = token.split('{{').join('').split('}}').join('');
                            resultExpArr.push('(' + token + ')');
                        } else {
                            resultExpArr.push('"' + token + '"');
                        }
                    });
                    resultExpr = resultExpArr.join('+');
                    _this19.component.addWatcher(resultExpr, function (expr) {
                        el.setAttribute(name, expr.trim());
                    }, DomUtils._get_If_expressionTopDownList(el));
                });
            });
        };

        DirectiveEngine.prototype.runDragAndDrop = function runDragAndDrop() {
            var _this20 = this;

            this._eachElementWithAttr('data-draggable', function (el, expression) {
                DomUtils.addEventListener(el, 'mousedown', function (e) {
                    var mouseX = e.offsetX,
                        mouseY = e.offsetY;
                    el.__coords = { mouseX: mouseX, mouseY: mouseY };
                });
                DomUtils.addEventListener(el, 'dragstart', function (e) {
                    var id = Math.random() + '_' + Math.random();
                    var clientRect = el.getBoundingClientRect();
                    var mouseX = e.clientX,
                        mouseY = e.clientY;
                    DirectiveEngine.ddObjects[id] = {
                        obj: ExpressionEngine.executeExpression(expression, _this20.component),
                        coords: el.__coords
                    };
                    e.dataTransfer.setData('text/plain', id); //cannot be empty string
                    e.dataTransfer.effectAllowed = 'move';
                });
                _this20.component.addWatcher(expression, function (draggableObj) {
                    el.setAttribute('draggable', '' + !!draggableObj);
                }, DomUtils._get_If_expressionTopDownList(el));
            });
            this._eachElementWithAttr('data-droppable', function (el, expression) {
                var callbackFn = ExpressionEngine.executeExpression(expression, _this20.component);
                DomUtils.addEventListener(el, 'dragover', function (e) {
                    e.preventDefault();
                });
                DomUtils.addEventListener(el, 'drop', function (e) {
                    e.preventDefault();
                    var id = e.dataTransfer.getData('text/plain');
                    var _DirectiveEngine$ddOb = DirectiveEngine.ddObjects[id],
                        obj = _DirectiveEngine$ddOb.obj,
                        coords = _DirectiveEngine$ddOb.coords;

                    callbackFn && callbackFn(obj, e, coords);
                    delete DirectiveEngine.ddObjects[id];
                });
            });
        };

        DirectiveEngine.prototype.run = function run() {
            var _this21 = this;

            this.runDirective_For();
            this.runComponents();
            this.runTextNodes();
            this.runDirective_Model();
            ['click', 'blur', 'focus', 'submit', 'keypress', 'keyup', 'keydown', 'input', 'mousedown', 'mouseup', 'mousemove', 'mouseleave', 'mouseenter', 'mouseover', 'mousout'].forEach(function (eventName) {
                _this21.runDomEvent(eventName);
            });
            this.runDomEvent_Change();
            this.runDirective_Events();
            this.runDirective_Event();
            this.runDirective_Class();
            this.runDirective_Style();
            this.runDirective_Show();
            this.runDirective_Hide();
            this.runDirective_Disabled();
            this.runDirective_Html();
            this.runDirective_Attribute();
            this.runDirective_Attributes();
            this.runExpressionsInAttrs();
            this.runDragAndDrop();
            this.runDirective_If();
        };

        return DirectiveEngine;
    }();

    DirectiveEngine.ddObjects = {};
    'use strict';

    var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
        return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
    } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
    };

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _getValByPath = function _getValByPath(component, path) {
        if (!path) return component.modelView;
        var keys = path.split('.');
        var lastKey = keys.pop();
        var contextForPath = component.modelView;
        var res = component.modelView;
        keys.forEach(function (key) {
            if (res !== undefined) {
                res = res[key];
                if ((typeof res === 'undefined' ? 'undefined' : _typeof(res)) === 'object') contextForPath = res;
            }
        });
        if (res !== undefined) res = res[lastKey];
        if (!component.disableParentScopeEvaluation && res === undefined && component.parent) {
            return _getValByPath(component.parent, path);
        } else {
            if (res && res.call) {
                return function () {
                    return res.apply(contextForPath, Array.prototype.slice.call(arguments));
                };
            }
            return res;
        }
    };
    var getVal = function getVal(component, path) {
        return _getValByPath(component, path);
    };
    var RF_API = { getVal: getVal };
    var RF_API_STR = '__RF__';

    var getterFnCache = {};
    var setterFnCache = {};

    var ExpressionEngine = function () {
        function ExpressionEngine() {
            _classCallCheck(this, ExpressionEngine);
        }

        ExpressionEngine.getExpressionFn = function getExpressionFn(code) {
            var unconvertedCodeTail = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

            var codeRaw = code;
            code = code.split('\n').join('').split("'").join('"');
            var codeProcessed = '\n                return ' + Lexer.convertExpression(code, RF_API_STR + '.getVal(component,\'{expr}\')') + '\n        ' + unconvertedCodeTail;
            try {
                var fn = new Function('component', '' + RF_API_STR, codeProcessed);
                fn.expression = code;
                fn.fnProcessed = fn.toString();
                return fn;
            } catch (e) {
                console.error('can not compile function from expression');
                console.error({
                    debugContext: {
                        expression: codeRaw,
                        compiled: codeProcessed,
                        exception: e
                    }
                });
                throw e;
            }
        };

        ExpressionEngine.runExpressionFn = function runExpressionFn(fn, component) {
            try {
                return fn.call(component.modelView, component, RF_API);
            } catch (e) {
                console.error('getting value error');
                console.error({
                    debugContext: {
                        expression: fn.expression,
                        compiled: fn.fnProcessed,
                        component: component,
                        exception: e
                    }
                });
                throw e;
            }
        };

        ExpressionEngine.executeExpression = function executeExpression(code, component) {
            var fn = getterFnCache[code];
            if (!fn) {
                fn = getterFnCache[code] = ExpressionEngine.getExpressionFn(code);
            }
            return ExpressionEngine.runExpressionFn(fn, component);
        };

        /**
         * i.e.
         * object[field] = value
         * object.field = value
         * object['field'] = value
         */

        ExpressionEngine.setValueToContext = function setValueToContext(component, expression, value) {
            var fn = setterFnCache[expression];
            try {
                if (!fn) {
                    var exprTokens = expression.split(/(\..[_$a-zA-Z0-9]+)|(\[.+])/).filter(function (it) {
                        return !!it;
                    });
                    var lastToken = exprTokens.pop();
                    if (lastToken.indexOf('[') == 0) {
                        lastToken = lastToken.replace('[', '').replace(']', '');
                        lastToken = Lexer.convertExpression(lastToken, RF_API_STR + '.getVal(component,\'{expr}\')');
                        lastToken = '[' + lastToken + ']';
                    } else if (!exprTokens.length) {
                        lastToken = '.' + lastToken;
                    }
                    expression = exprTokens.join('');
                    expression = Lexer.convertExpression(expression, RF_API_STR + '.getVal(component,\'{expr}\')');
                    expression = '' + expression + lastToken + '=value';
                    setterFnCache[expression] = fn = new Function('component', '' + RF_API_STR, 'value', expression);
                }
                fn(component, RF_API, value);
            } catch (e) {
                console.error('setting value error');
                console.error({
                    debugContext: {
                        expression: expression,
                        compiled: fn,
                        value: value,
                        exception: e
                    }
                });
                throw e;
            }
        };
        /**
         *  "{a:1}"
         * @param code
         * @returns {*}
         */

        ExpressionEngine.getObjectFromString = function getObjectFromString(code) {
            code = code.replace(/[\n\t\r\s]+/gi, '');
            try {
                var fn = new Function('return (' + code + ')');
                return fn();
            } catch (e) {
                console.error('can not parse properties: ' + code);
                throw e;
            }
        };

        return ExpressionEngine;
    }();
    "use strict";

    var setTimeoutNative = window.setTimeout;
    var setIntervalNative = window.setInterval;
    var clearTimeOutNative = window.clearTimeout;
    var clearIntervalNative = window.clearInterval;

    var Reactivity = {
        setTimeOut: function setTimeOut(fn, time) {
            setTimeoutNative(function () {
                fn();
                RF.digest();
            }, time);
        },
        setInterval: function setInterval(fn, time) {
            setIntervalNative(function () {
                fn();
                RF.digest();
            }, time);
        },
        clearTimeOut: function clearTimeOut(tid) {
            clearTimeOutNative(tid);
        },
        clearInterval: function clearInterval(tid) {
            clearIntervalNative(tid);
        }
    };
    'use strict';

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    // [3].indexOf(dataStorage.receiver.actionType)>-1
    var Token = function Token(type, val) {
        _classCallCheck(this, Token);

        this.tokenType = type;
        this.tokenValue = val;
    };

    Token.SYMBOL = {
        L_PAR: '(',
        R_PAR: ')',
        L_CURLY: '{',
        R_CURLY: '}',
        L_SQUARE: '[',
        R_SQUARE: ']',
        COMMA: ',',
        PLUS: '+',
        MULTIPLY: '*',
        MINUS: '-',
        DIVIDE: '/',
        GT: '>',
        LT: '<',
        EQUAL: '=',
        QUESTION: '?',
        COLON: ':',
        AMPERSAND: '&',
        OR: '|',
        EXCLAMATION: '!',
        SEMICOLON: ';'
    };

    Token.KEY_WORDS = ['in', 'of', 'null', 'undefined'];

    Token.ALL_SPECIAL_SYMBOLS = Object.keys(Token.SYMBOL).map(function (key) {
        return Token.SYMBOL[key];
    });

    Token.TYPE = {
        OPERATOR: 'OPERATOR',
        DIGIT: 'DIGIT',
        VARIABLE: 'VARIABLE',
        STRING: 'STRING',
        OBJECT_KEY: 'OBJECT_KEY',
        FUNCTION: 'FUNCTION',
        BOOLEAN: 'BOOLEAN',
        KEY_WORD: 'KEY_WORD'
    };

    function isNumber(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }

    function charInArr(char, arr) {
        return char && arr.indexOf(char) > -1;
    }

    var Lexer = function () {
        function Lexer() {
            _classCallCheck(this, Lexer);
        }

        Lexer.tokenize = function tokenize(expression) {
            var isEndWithSemicolon = expression[expression.length - 1] == Token.SYMBOL.SEMICOLON;
            var tokens = [],
                t = void 0,
                lastChar = '';
            expression = expression.trim();
            expression = expression.replace(/[\n\t\r]+/gi, '');
            if (!isEndWithSemicolon) expression = expression + Token.SYMBOL.SEMICOLON;

            var isStringCurrent = void 0;
            expression.split('').forEach(function (char, i) {

                var lastToken = tokens[tokens.length - 1];
                if (lastToken && charInArr(lastToken.tokenValue, ['true', 'false'])) lastToken.tokenType = Token.TYPE.BOOLEAN;

                if (charInArr(char, ['"', "'"])) isStringCurrent = false;

                if (charInArr(char, Token.ALL_SPECIAL_SYMBOLS) && !isStringCurrent) {
                    t = new Token(Token.TYPE.OPERATOR, char);
                    tokens.push(t);

                    lastChar = char;
                    if (!lastToken) return;
                    if (char == Token.SYMBOL.L_PAR && !charInArr(lastToken.tokenValue, Token.ALL_SPECIAL_SYMBOLS)) lastToken.tokenType = Token.TYPE.FUNCTION;
                } else {
                    if (lastToken && lastToken.tokenType != Token.TYPE.STRING && char == ' ') return;
                    if (lastToken && (lastToken.tokenType == Token.TYPE.DIGIT || lastToken.tokenType == Token.TYPE.VARIABLE || lastToken.tokenType == Token.TYPE.STRING)) {
                        lastToken.tokenValue += char;
                    } else {
                        var type = void 0;
                        if (isNumber(char)) type = Token.TYPE.DIGIT;else if (charInArr(char, ['"', "'"])) {
                            type = Token.TYPE.STRING;
                            isStringCurrent = true;
                        } else type = Token.TYPE.VARIABLE;
                        t = new Token(type, char);
                        tokens.push(t);
                    }
                    lastChar = char;
                }
            });

            tokens.forEach(function (t, i) {
                t.tokenValue && (t.tokenValue = t.tokenValue.trim());
                if (charInArr(t.tokenValue, Token.KEY_WORDS)) t.tokenType = Token.KEY_WORDS;

                if (t && t.tokenType == Token.TYPE.VARIABLE) {
                    var next = tokens[i + 1];
                    var prev = tokens[i - 1];

                    if (next && next.tokenValue == Token.SYMBOL.COLON && (!prev || prev && prev.tokenValue !== '?')) t.tokenType = Token.TYPE.OBJECT_KEY;

                    if (t.tokenValue && t.tokenValue.startsWith('.')) t.tokenType = Token.TYPE.STRING; // resolve expression error at app.task.taskCases[0].text
                }

                if (t && t.tokenType == Token.TYPE.FUNCTION && t.tokenValue.indexOf('.') == 0) {
                    t.tokenType = Token.TYPE.OBJECT_KEY; // resolve expression [1,2,3].indexOf(2)
                }
            });
            if (!isEndWithSemicolon) tokens.pop();
            //console.log(JSON.stringify(tokens));
            return tokens;
        };

        Lexer.convertExpression = function convertExpression(expression) {
            var variableReplacerStr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '{expr}';

            if (!expression) return variableReplacerStr.replace('{expr}', '');
            var out = '';
            expression = expression.split('\n').join('');
            Lexer.tokenize(expression).forEach(function (token, index) {
                if (token.tokenValue == Token.SYMBOL.EQUAL && token[index + 1] && token[index + 1].tokenValue != Token.SYMBOL.EQUAL) throw 'assign (like "a=b") not supported at directives for now, change your expression: ' + expression;
                if ([Token.TYPE.VARIABLE, Token.TYPE.FUNCTION].indexOf(token.tokenType) > -1) {
                    out += variableReplacerStr.replace('{expr}', token.tokenValue);
                } else out += token.tokenValue || token.tokenType;
            });
            return out;
        };

        return Lexer;
    }();
    "use strict";

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var HashRouterStrategy = function () {
        function HashRouterStrategy() {
            _classCallCheck(this, HashRouterStrategy);
        }

        // todo complete

        HashRouterStrategy.navigateTo = function navigateTo(route, params) {
            location.hash = route;
        };

        HashRouterStrategy.goBack = function goBack() {
            if (window.history) history.back();
        };

        HashRouterStrategy._check = function _check(hash) {
            var isMatch = false;
            hash = hash.substr(1);
            Object.keys(Router._pages).some(function (key) {

                var routeParams = {};
                var keys = key.match(/:([^\/]+)/g);
                var match = hash.match(new RegExp(key.replace(/:([^\/]+)/g, "([^\/]*)")));
                if (match) {
                    match.shift();
                    match.forEach(function (value, i) {
                        routeParams[keys[i].replace(":", "")] = value;
                    });
                    isMatch = true;
                    __showPage(key, routeParams);
                    return true;
                }
            });
            if (!isMatch) throw "page with path " + hash + " not registered, set up router correctly";
        };

        HashRouterStrategy.setup = function setup() {
            location.hash && HashRouterStrategy._check(location.hash);
            DomUtils.addEventListener(window, 'hashchange', function () {
                HashRouterStrategy._check(location.hash);
            });
        };

        return HashRouterStrategy;
    }();

    var ManualRouterStrategy = function () {
        function ManualRouterStrategy() {
            _classCallCheck(this, ManualRouterStrategy);
        }

        ManualRouterStrategy.navigateTo = function navigateTo(route, params) {
            if (!Router._pages[route]) throw route + " not registered, set up router correctly";
            __showPage(route, params);
            ManualRouterStrategy.history.push({ route: route, params: params });
        };

        ManualRouterStrategy.setup = function setup() {};

        ManualRouterStrategy.goBack = function goBack() {
            ManualRouterStrategy.history.pop();
            var state = ManualRouterStrategy.history[ManualRouterStrategy.history.length - 1];
            if (state) __showPage(state.route, state.params);
        };

        return ManualRouterStrategy;
    }();

    ManualRouterStrategy.history = [];

    var RouterStrategyProvider = function () {
        function RouterStrategyProvider() {
            _classCallCheck(this, RouterStrategyProvider);
        }

        RouterStrategyProvider.getRouterStrategy = function getRouterStrategy(strategyName) {
            switch (strategyName) {
                case Router.STRATEGY.MANUAL:
                    return ManualRouterStrategy;
                case Router.STRATEGY.HASH:
                    return HashRouterStrategy;
                default:
                    throw "cat not find strategy with strategyName " + strategyName;
            }
        };

        return RouterStrategyProvider;
    }();

    var routeNode = null;
    var lastPageItem = void 0;
    var __showPage = function __showPage(pageName, params) {

        if (lastPageItem) {
            lastPageItem.component.setShown(false);
            DomUtils.nodeListToArray(routeNode.childNodes).forEach(function (el) {
                lastPageItem.component.node.appendChild(el);
            });
            lastPageItem.component.setMounted(false);
        }
        lastPageItem = Router._pages[pageName];
        if (!lastPageItem) throw "no page with name " + pageName + " registered";
        if (!lastPageItem.component) {
            var componentNode = lastPageItem.componentProto.node.cloneNode(true);
            lastPageItem.component = lastPageItem.componentProto.newInstance(componentNode, {});
            lastPageItem.component.run();
            delete lastPageItem.componentProto;
        }
        DomUtils.nodeListToArray(lastPageItem.component.node.childNodes).forEach(function (el) {
            routeNode.appendChild(el);
        });
        lastPageItem.component.setMounted(true, params);
        lastPageItem.component.setShown(true, params);
        Component.digestAll();
    };

    var Router = function () {
        function Router() {
            _classCallCheck(this, Router);
        }

        Router.setup = function setup(keyValues) {
            var strategyName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Router.STRATEGY.MANUAL;

            Router._strategy = RouterStrategyProvider.getRouterStrategy(strategyName);
            var routePlaceholderNode = document.querySelector('[data-route]');
            if (!routePlaceholderNode) throw 'can not run Route: element with data-route attribute not found';
            routePlaceholderNode.innerHTML = '';
            routeNode = routePlaceholderNode;
            Object.keys(keyValues).forEach(function (key) {
                Router._pages[key] = {
                    componentProto: keyValues[key],
                    component: null
                };
            });
            Router._strategy.setup();
        };

        Router.navigateTo = function navigateTo(pageName, params) {
            Router._strategy.navigateTo(pageName, params);
        };

        Router.goBack = function goBack() {
            Router._strategy.goBack();
        };

        return Router;
    }();

    Router._pages = {};
    Router._strategy = null;

    Router.STRATEGY = {
        MANUAL: 0,
        HASH: 1
    };
    'use strict';

    var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
        return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
    } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
    };

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var Core = function () {
        function Core() {
            _classCallCheck(this, Core);
        }

        Core.registerComponent = function registerComponent(name) {
            var properties = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            var nameOriginal = name;
            name = MiscUtils.camelToSnake(name);
            if (ComponentProto.getByName(name)) throw 'component with name ' + nameOriginal + ' already registered';
            var tmpl = TemplateLoader.getNode(properties, name);
            var domTemplate = tmpl.innerHTML;
            tmpl.remove();
            var node = document.createElement('div');
            node.innerHTML = domTemplate;

            var componentProto = new ComponentProto(name, node, properties);
            ComponentProto.instances.push(componentProto);
            return componentProto;
        };

        Core.applyBindings = function applyBindings(domElementSelector) {
            var properties = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            if (!domElementSelector) throw 'can not applyBindings: element selector not provided';
            if (typeof domElementSelector != 'string') throw 'element selector parameter mast me a string,\n            but ' + (typeof domElementSelector === 'undefined' ? 'undefined' : _typeof(domElementSelector)) + ' found}';
            var domElement = document.querySelector(domElementSelector);
            if (!domElement) throw 'can not apply bindings: root element with selector ' + domElementSelector + ' not defined';
            var modelView = new ModelView(null, properties);
            var fragment = new ScopedDomFragment(domElement, modelView);
            fragment.setMounted(true);
            fragment.setShown(true);
            fragment.run();
            modelView.component = fragment;
            return fragment;
        };

        Core.digest = function digest() {
            Component.digestAll();
        };

        Core.getComponentById = function getComponentById(id) {
            var cmp = Component.getComponentByDomId(id);
            if (!cmp) return null;
            return cmp.modelView;
        };

        Core.getComponents = function getComponents() {
            return Component.instances.map(function (c) {
                return c.modelView;
            });
        };

        Core._getComponentByInternalId = function _getComponentByInternalId(id) {
            return Component.getComponentByInternalId(id);
        };

        return Core;
    }();

    MiscUtils.copyMethods(Core, Reactivity);

    Core.version = '0.8.7';

    window.RF = Core;
    window.RF.Router = Router;
})();

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Draggable = undefined;

var _draggable = __webpack_require__(65);

var _draggable2 = _interopRequireDefault(_draggable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Draggable = _draggable2.default;

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 *
 exports.parameters =  {};
 exports.description = 'draggable behaviour with multitouch supporting';
 */

var DraggableBehaviour = function () {
    _createClass(DraggableBehaviour, null, [{
        key: '_getEventId',
        value: function _getEventId(e) {
            return e.id || 1;
        }
    }]);

    function DraggableBehaviour(game) {
        _classCallCheck(this, DraggableBehaviour);

        this.game = game;
        this.points = {};
    }

    _createClass(DraggableBehaviour, [{
        key: 'manage',
        value: function manage(gameObject, params) {
            var _this = this;

            gameObject.on('click', function (e) {
                _this.points[DraggableBehaviour._getEventId(e)] = {
                    mX: e.objectX,
                    mY: e.objectY,
                    target: gameObject,
                    preventDefault: function preventDefault() {
                        this.defaultPrevented = true;
                    }
                };
            });
            var scene = this.game.getCurrScene();
            scene.on('mouseDown', function (e) {
                var pointId = DraggableBehaviour._getEventId(e);
                var point = _this.points[pointId];
                if (!point) return;
                point.dragStartX = point.target.pos.x;
                point.dragStartY = point.target.pos.y;
            });
            scene.on('mouseMove', function (e) {
                var pointId = DraggableBehaviour._getEventId(e);
                var point = _this.points[pointId];
                if (!point) return;
                if (!point.dragStart) {
                    point.dragStart = true;
                    point.target.trigger('dragStart', point);
                    if (point.defaultPrevented) {
                        delete _this.points[pointId];
                        return;
                    }
                }
                // collider.manage(
                //     self,
                //     e.screenX - point.mX,
                //     e.screenY - point.mY
                // );
                gameObject.pos.x = e.screenX - point.mX;
                gameObject.pos.y = e.screenY - point.mY;
            });
            scene.on('mouseUp', function (e) {
                var pointId = DraggableBehaviour._getEventId(e);
                var point = _this.points[pointId];
                if (!point) return;
                if (point.dragStart) {
                    point.x = gameObject.pos.x;
                    point.y = gameObject.pos.y;
                    point.target.trigger('dragStop', point);
                }
                delete _this.points[pointId];
            });
        }
    }]);

    return DraggableBehaviour;
}();

exports.default = DraggableBehaviour;

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var SCALE_STRATEGY = exports.SCALE_STRATEGY = {
    NO_SCALE: 0,
    CSS_PRESERVE_ASPECT_RATIO: 1,
    HARDWARE_PRESERVE_ASPECT_RATIO: 2,
    CSS_STRETCH: 3,
    HARDWARE_STRETCH: 4
};

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _mathEx = __webpack_require__(8);

var _mathEx2 = _interopRequireDefault(_mathEx);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var isTouch = 'ontouchstart' in window;

var Mouse = function () {
    function Mouse(game) {
        _classCallCheck(this, Mouse);

        this.game = game;
        this.objectsCaptured = {};
    }

    _createClass(Mouse, [{
        key: 'listenTo',
        value: function listenTo(container) {
            var _this = this;

            if (isTouch) {
                var lastTouch = {}; // todo
                container.ontouchstart = function (e) {
                    var l = e.touches.length;
                    while (l--) {
                        _this.resolveClick(e.touches[l]);
                    }
                };
                container.ontouchend = container.ontouchcancel = function (e) {
                    var l = e.changedTouches.length;
                    while (l--) {
                        _this.resolveMouseUp(e.changedTouches[l]);
                    }
                };
                container.ontouchmove = function (e) {
                    var l = e.touches.length;
                    while (l--) {
                        _this.resolveMouseMove(e.touches[l]);
                    }
                };
            } else {
                container.onmousedown = function (e) {
                    e.button === 0 && _this.resolveClick(e);
                };
                container.onmouseup = function (e) {
                    _this.resolveMouseUp(e);
                };
                container.onmousemove = function (e) {
                    _this.resolveMouseMove(e);
                };
                container.ondblclick = function (e) {
                    _this.resolveDoubleClick(e);
                };
            }
        }
    }, {
        key: 'resolveScreenPoint',
        value: function resolveScreenPoint(e) {
            return {
                //x: (e.clientX * device.scale - gameProps.left) / globalScale.x ,
                //y: (e.clientY * device.scale - gameProps.top) / globalScale.y ,
                x: ~~((e.clientX - this.game.pos.x) / this.game.scale.x),
                y: ~~((e.clientY - this.game.pos.y) / this.game.scale.y),
                id: e.identifier || 0
            };
        }
    }, {
        key: 'triggerEvent',
        value: function triggerEvent(e, name) {
            var scene = this.game.getCurrScene();
            if (!scene) return;
            var point = this.resolveScreenPoint(e);

            exit: for (var i = 0; i < scene.layers.length; i++) {
                var layer = scene.layers[scene.layers.length - 1 - i];
                for (var j = 0; j < layer.gameObjects.length; j++) {
                    var g = layer.gameObjects[layer.gameObjects.length - 1 - j];
                    if (_mathEx2.default.isPointInRect(point, g.getRect())) {
                        g.trigger(name, {
                            screenX: point.x,
                            screenY: point.y,
                            objectX: point.x - g.pos.x,
                            objectY: point.y - g.pos.y,
                            id: point.id
                        });
                        scene.trigger(name, {
                            screenX: point.x,
                            screenY: point.y,
                            id: point.id,
                            target: g
                        });
                        break exit;
                    }
                }
            }

            return point;
        }
    }, {
        key: 'resolveClick',
        value: function resolveClick(e) {
            if (window.canceled) return;
            var point = this.triggerEvent(e, 'click');
            this.triggerEvent(e, 'mouseDown');
        }
    }, {
        key: 'resolveMouseMove',
        value: function resolveMouseMove(e) {
            if (false) return;
            var point = this.triggerEvent(e, 'mouseMove');
            if (!point) return;
            var lastMouseDownObject = this.objectsCaptured[point.id];
            if (lastMouseDownObject && lastMouseDownObject != point.object) {
                lastMouseDownObject.trigger('mouseLeave');
                delete this.objectsCaptured[point.id];
            }
            if (point.object && lastMouseDownObject != point.object) {
                point.object.trigger('mouseEnter');
                this.objectsCaptured[point.id] = point.object;
            }
        }
    }, {
        key: 'resolveMouseUp',
        value: function resolveMouseUp(e) {
            if (false) return;
            var point = this.triggerEvent(e, 'mouseUp');
            if (!point) return;
            var lastMouseDownObject = this.objectsCaptured[point.id];
            if (!lastMouseDownObject) return;
            lastMouseDownObject.trigger('mouseUp');
            delete this.objectsCaptured[point.id];
        }
    }, {
        key: 'resolveDoubleClick',
        value: function resolveDoubleClick(e) {
            if (false) return;
            var point = this.triggerEvent(e, 'doubleClick');
            if (!point) return;
            delete this.objectsCaptured[point.id];
        }
    }]);

    return Mouse;
}();

exports.default = Mouse;

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EventEmitter = function () {
    function EventEmitter() {
        _classCallCheck(this, EventEmitter);

        this.events = {};
    }

    _createClass(EventEmitter, [{
        key: '_on',
        value: function _on(name, callBack) {
            this.events[name] = this.events[name] || [];
            this.events[name].push(callBack);
        }
    }, {
        key: 'on',
        value: function on(eventNameOrList, callBack) {
            if (typeof eventNameOrList == 'string') {
                this._on(eventNameOrList, callBack);
            } else if (eventNameOrList.splice) {
                eventNameOrList.forEach(function (eventName) {
                    this._on(eventName, callBack);
                });
            }
        }
    }, {
        key: 'trigger',
        value: function trigger(eventName, data) {
            var es = this.events[eventName];
            if (!es) return;
            var l = es.length;
            while (l--) {
                es[l](data);
            }
        }
    }]);

    return EventEmitter;
}();

exports.default = EventEmitter;
;

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rendererFactory = __webpack_require__(74);

var _rendererFactory2 = _interopRequireDefault(_rendererFactory);

var _repository = __webpack_require__(75);

var _repository2 = _interopRequireDefault(_repository);

var _mouse = __webpack_require__(67);

var _mouse2 = _interopRequireDefault(_mouse);

var _commonObject = __webpack_require__(19);

var _commonObject2 = _interopRequireDefault(_commonObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Game = function (_CommonObject) {
    _inherits(Game, _CommonObject);

    function Game(gameProps) {
        _classCallCheck(this, Game);

        var _this = _possibleConstructorReturn(this, (Game.__proto__ || Object.getPrototypeOf(Game)).call(this));

        _this.pos = { x: 0, y: 0 };
        _this.scale = { x: 1, y: 1 };
        Object.keys(gameProps).forEach(function (key) {
            _this[key] = gameProps[key];
        });
        _this._currentScene = null;
        var time = Date.now();
        _this._lastTime = time;
        _this._currTime = time;
        _this._deltaTime = 0;
        _this._running = false;
        _this._repository = new _repository2.default(_this);
        _this.mouse = new _mouse2.default(_this);
        return _this;
    }

    _createClass(Game, [{
        key: 'getTime',
        value: function getTime() {
            return this._lastTime;
        }
    }, {
        key: 'getDeltaTime',
        value: function getDeltaTime() {
            return this._deltaTime;
        }
    }, {
        key: 'runScene',
        value: function runScene(scene) {
            var _this2 = this;

            if (!this._renderer) {
                this._renderer = _rendererFactory2.default.getRenderer(this);
                this.mouse.listenTo(this._renderer.container);
            }
            scene.preload(function () {
                _this2._currentScene = scene;
                _this2._currentScene.onShow();
                if (!_this2._running) {
                    Game.update(_this2);
                    _this2._running = true;
                }
            });
        }
    }, {
        key: 'getCurrScene',
        value: function getCurrScene() {
            return this._currentScene;
        }
    }, {
        key: 'setCurrScene',
        value: function setCurrScene(scene) {
            this._currentScene = scene;
        }
    }], [{
        key: 'update',
        value: function update(self) {
            if (false) return;
            requestAnimationFrame(function () {
                Game.update(self);
            });
            self._lastTime = self._currTime;
            self._currTime = Date.now();
            self._deltaTime = self._currTime - self._lastTime;

            self._currentScene && self._currentScene.update(self._currTime, self._deltaTime);
        }
    }]);

    return Game;
}(_commonObject2.default);

exports.default = Game;

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Queue = function () {
    function Queue() {
        _classCallCheck(this, Queue);

        this.tasksResolved = 0;
        this.tasks = [];
        this.tasksProgressById = {};
        this.tasts = [];
        this.onResolved = null;
        this.onProgress = null;
    }

    _createClass(Queue, [{
        key: "size",
        value: function size() {
            return this.tasks.length;
        }
    }, {
        key: "calcProgress",
        value: function calcProgress() {
            var sum = 0;
            Object.keys(this.tasksProgressById).forEach(function (taskId) {
                sum += this.tasksProgressById[taskId] || 0;
            });
            return sum / this.tasks.length;
        }
    }, {
        key: "addTask",
        value: function addTask(taskFn, taskId) {
            this.tasks.push(taskFn);
            this.tasksProgressById[taskId] = 0;
        }
    }, {
        key: "progressTask",
        value: function progressTask(taskId, progress) {
            this.tasksProgressById[taskId] = progress;
            this.onProgress && this.onProgress(this.calcProgress());
        }
    }, {
        key: "resolveTask",
        value: function resolveTask(taskId) {
            this.tasksResolved++;
            this.tasksProgressById[taskId] = 1;
            if (this.tasks.length == this.tasksResolved) {
                this.onProgress && this.onProgress(1);
                if (this.onResolved) this.onResolved();
            } else {
                this.onProgress && this.onProgress(this.calcProgress());
            }
        }
    }, {
        key: "start",
        value: function start() {
            if (this.size() == 0) this.onResolved();
            this.tasks.forEach(function (t) {
                t && t();
            });
        }
    }]);

    return Queue;
}();

exports.default = Queue;
;

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Array.prototype.remove = function (callback) {
    var i = this.length;
    while (i--) {
        if (callback(this[i], i)) {
            this.splice(i, 1);
        }
    }
};

window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || function (f) {
    setTimeout(f, 17);
};

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AbstractRenderer = function () {
    function AbstractRenderer(game) {
        _classCallCheck(this, AbstractRenderer);

        this.game = game;
        this.renderableCache = {};
        this.container = null;
    }

    _createClass(AbstractRenderer, [{
        key: 'onResize',
        value: function onResize() {
            var canvasRatio = this.container.height / this.container.width;
            var windowRatio = window.innerHeight / window.innerWidth;
            var width = void 0;
            var height = void 0;

            if (windowRatio < canvasRatio) {
                height = window.innerHeight;
                width = height / canvasRatio;
            } else {
                width = window.innerWidth;
                height = width * canvasRatio;
            }
            this.game.scale.x = width / this.game.width;
            this.game.scale.y = height / this.game.height;
            this.game.pos.x = (window.innerWidth - width) / 2;
            this.game.pos.y = (window.innerHeight - height) / 2;

            this.container.style.width = width + 'px';
            this.container.style.height = height + 'px';
        }
    }, {
        key: 'registerResize',
        value: function registerResize() {
            var _this = this;

            this.onResize();
            window.addEventListener('resize', function () {
                _this.onResize();
            });
        }
    }, {
        key: 'loadTextureInfo',
        value: function loadTextureInfo(textureId, info) {}
    }, {
        key: 'getTextureInfo',
        value: function getTextureInfo(textureId) {}
    }]);

    return AbstractRenderer;
}();

exports.default = AbstractRenderer;

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _abstractRenderer = __webpack_require__(72);

var _abstractRenderer2 = _interopRequireDefault(_abstractRenderer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CanvasRenderer = function (_AbstractDomRenderer) {
    _inherits(CanvasRenderer, _AbstractDomRenderer);

    function CanvasRenderer(game) {
        _classCallCheck(this, CanvasRenderer);

        var _this = _possibleConstructorReturn(this, (CanvasRenderer.__proto__ || Object.getPrototypeOf(CanvasRenderer)).call(this, game));

        var container = document.createElement('canvas');
        _this.ctx = container.getContext('2d');
        document.body.appendChild(container);
        container.setAttribute('width', game.width);
        container.setAttribute('height', game.height);
        _this.container = container;
        _this.registerResize();
        return _this;
    }

    _createClass(CanvasRenderer, [{
        key: 'draw',
        value: function draw(renderable) {
            var ctx = this.ctx;
            ctx.save();
            ctx.translate(renderable.pos.x + renderable.width / 2, renderable.pos.y + renderable.height / 2);
            ctx.scale(renderable.scale.x, renderable.scale.y);
            ctx.rotate(renderable.angle);
            //ctx.rotateY(a);
            ctx.translate(-renderable.width / 2, -renderable.height / 2);
            ctx.globalAlpha = renderable.alpha;
            ctx.drawImage(this.renderableCache[renderable.spriteSheet.resourcePath], renderable._sprPosX, renderable._sprPosY, renderable.width, renderable.height, 0, 0, renderable.width, renderable.height);
            ctx.restore();
        }
    }, {
        key: 'drawImage',
        value: function drawImage(img, srcPosX, srcPosY, srcWidth, srcHeight, destPosX, destPosY) {
            this.ctx.drawImage(img, srcPosX, srcPosY, srcWidth, srcHeight, destPosX, destPosY, srcWidth, srcHeight);
        }
    }, {
        key: 'fillRect',
        value: function fillRect(x, y, w, h, color) {
            this.ctx.fillStyle = color;
            this.ctx.fillRect(x, y, w, h);
        }
    }, {
        key: 'setAlpha',
        value: function setAlpha(a) {
            this.ctx.globalAlpha = a;
        }
    }, {
        key: 'lockRect',
        value: function lockRect(rect) {
            this.ctx.save();
            this.ctx.beginPath();
            this.ctx.rect(rect.x, rect.y, rect.width, rect.height);
            this.ctx.clip();
        }
    }, {
        key: 'unlockRect',
        value: function unlockRect() {
            this.ctx.restore();
        }
    }, {
        key: 'clear',
        value: function clear() {
            this.ctx.clearRect(0, 0, this.game.width, this.game.height);
        }
    }, {
        key: 'loadTextureInfo',
        value: function loadTextureInfo(resourcePath, onLoad) {
            var _this2 = this;

            var img = new Image();
            img.src = resourcePath;
            img.onload = function () {
                var c = document.createElement('canvas');
                c.setAttribute('width', img.width);
                c.setAttribute('height', img.height);
                var ctx = c.getContext('2d');
                ctx.drawImage(img, 0, 0);
                _this2.renderableCache[resourcePath] = c;
                onLoad();
            };
        }
    }]);

    return CanvasRenderer;
}(_abstractRenderer2.default);

exports.default = CanvasRenderer;

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
//import HtmlRenderer from '../renderer/dom/htmlRenderer'


var _canvasRenderer = __webpack_require__(73);

var _canvasRenderer2 = _interopRequireDefault(_canvasRenderer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//import SvgRenderer from '../renderer/dom/svgRenderer'

var RendererFactory = function () {
    function RendererFactory() {
        _classCallCheck(this, RendererFactory);
    }

    _createClass(RendererFactory, null, [{
        key: 'getRenderer',
        value: function getRenderer(game) {
            if (!game) throw 'RendererFactory::getRenderer: game param not specified';
            return new _canvasRenderer2.default(game);
        }
    }]);

    return RendererFactory;
}();

exports.default = RendererFactory;

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _all = __webpack_require__(77);

var models = _interopRequireWildcard(_all);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Repository = function () {
    function Repository(game) {
        _classCallCheck(this, Repository);

        this._game = game;
        this.reset();
    }

    _createClass(Repository, [{
        key: 'addDescription',
        value: function addDescription(desc, type) {
            if (!this.descriptions[type]) this.descriptions[type] = [];
            this.descriptions[type].push(desc);
        }
    }, {
        key: 'setDescriptions',
        value: function setDescriptions(descs) {
            var _this = this;

            Object.keys(descs).forEach(function (type) {
                descs[type].forEach(function (desc) {
                    _this.addDescription(desc, type);
                });
            });
        }
    }, {
        key: 'getObject',
        value: function getObject(id, type) {
            var forceNew = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

            if (false) throw 'repository.getObject: type not specified';
            if (false) {
                console.trace("id is null");
                throw '::getObject() id not specified for type ' + type;
            }
            var clazz = models[type];
            if (false) {
                throw '::getObject() unknown object type ' + type;
            }
            if (false) throw 'not found description for type: ' + type;
            var desc = this.descriptions[type].find(function (it) {
                return it.id == id;
            });
            if (!desc) {
                throw 'can not find object "' + type + '" with id ' + id;
            }
            if (forceNew || !this.cache[desc[id]]) this.cache[id] = new clazz(this._game).fromJSON(desc);
            return this.cache[id];
        }
    }, {
        key: 'addObject',
        value: function addObject(obj) {
            if (!this.arrays[obj.type]) this.arrays[obj.type] = [];
            this.arrays[obj.type].push(obj);
            if (!this.descriptions[obj.type]) this.descriptions[obj.type] = [];
            this.descriptions[obj.type].push(obj.toJSON());
        }
    }, {
        key: 'updateObject',
        value: function updateObject(obj) {
            var json = obj.toJSON();
            var index = this.descriptions[obj.type].findIndex(function (it) {
                return it.id == obj.id;
            });
            this.descriptions[obj.type][index] = json;

            var objInRepo = this.getObject(obj.id, obj.type, true);
            if (objInRepo) objInRepo.fromJSON(json);
        }
    }, {
        key: 'removeObject',
        value: function removeObject(obj) {
            if (!this.arrays[obj.type]) this.arrays[obj.type] = [];
            var index = this.arrays[obj.type].findIndex(function (it) {
                return it.id === obj.id;
            });
            this.arrays[obj.type].splice(index, 1);

            if (!this.descriptions[obj.type]) this.descriptions[obj.type] = [];
            index = this.descriptions[obj.type].findIndex(function (it) {
                return it.id === obj.id;
            });
            this.descriptions[obj.type].splice(index, 1);

            delete this.cache[obj.id];
        }
    }, {
        key: 'getArray',
        value: function getArray(type) {
            var _this2 = this;

            if (this.arrays[type]) return this.arrays[type];
            var res = [];
            if (!this.descriptions[type]) this.descriptions[type] = [];
            this.descriptions[type].forEach(function (desc) {
                if (false) {
                    console.error(desc);
                    throw 'object id must me specified';
                }
                res.push(_this2.getObject(desc.id, type));
            });
            return this.arrays[type] = res;
        }
    }, {
        key: 'reset',
        value: function reset() {
            this.descriptions = {};
            this.arrays = {};
            this.cache = {};
        }
    }]);

    return Repository;
}();

exports.default = Repository;

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _mathEx = __webpack_require__(8);

var _mathEx2 = _interopRequireDefault(_mathEx);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Tween = function () {
    function Tween(tweenDesc, obj) {
        _classCallCheck(this, Tween);

        this.obj = tweenDesc.target || obj;
        this.propsToChange = [];
        this.startedTime = null;
        this.progressFn = tweenDesc.progress;
        this.completeFn = tweenDesc.complete;
        this.easeFnName = tweenDesc.ease || 'linear';
        this.completed = false;
        this.tweenTime = tweenDesc.time || 1000;
        this.desc = this.normalizeDesc(tweenDesc);
    }

    _createClass(Tween, [{
        key: 'normalizeDesc',
        value: function normalizeDesc(tweenDesc) {
            var _this = this;

            tweenDesc.from = tweenDesc.from || {};
            tweenDesc.to = tweenDesc.to || {};
            var allPropsMap = {};
            Object.keys(tweenDesc.from).forEach(function (keyFrom) {
                allPropsMap[keyFrom] = true;
            });
            Object.keys(tweenDesc.to).forEach(function (keyTo) {
                allPropsMap[keyTo] = true;
            });
            this.propsToChange = Object.keys(allPropsMap);
            this.propsToChange.forEach(function (prp) {
                if (tweenDesc.from[prp] === undefined) tweenDesc.from[prp] = _this.obj[prp];
                if (tweenDesc.to[prp] === undefined) tweenDesc.to[prp] = _this.obj[prp];
            });
            return tweenDesc;
        }
    }, {
        key: 'update',
        value: function update(time) {
            if (!this.startedTime) this.startedTime = time;
            if (this.completed) return;
            var delta = time - this.startedTime;
            if (delta > this.tweenTime) {
                this._complete();
                return;
            }
            var l = this.propsToChange.length;
            while (l--) {
                var prp = this.propsToChange[l];
                this.obj[prp] = _mathEx2.default.ease[this.easeFnName](delta, this.desc.from[prp], this.desc.to[prp] - this.desc.from[prp], this.tweenTime);
            }
            this.progressFn && this.progressFn(this.obj);
        }
    }, {
        key: 'progress',
        value: function progress(_progressFn) {
            this.progressFn = _progressFn;
        }
    }, {
        key: 'reset',
        value: function reset() {
            this.startedTime = null;
            this.completed = false;
        }
    }, {
        key: '_complete',
        value: function _complete() {
            if (this.completed) return;
            var l = this.propsToChange.length;
            while (l--) {
                var prp = this.propsToChange[l];
                this.obj[prp] = this.desc.to[prp];
            }
            this.progressFn && this.progressFn(this.obj);
            this.completeFn && this.completeFn(this.obj);
            this.completed = true;
        }
    }]);

    return Tween;
}();

exports.default = Tween;

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Layer = exports.Scene = exports.ParticleSystem = exports.CommonBehaviour = exports.GameObject = exports.GameObjectProto = exports.SpriteSheet = undefined;

var _spriteSheet = __webpack_require__(11);

var _spriteSheet2 = _interopRequireDefault(_spriteSheet);

var _gameObjectProto = __webpack_require__(6);

var _gameObjectProto2 = _interopRequireDefault(_gameObjectProto);

var _gameObject = __webpack_require__(13);

var _gameObject2 = _interopRequireDefault(_gameObject);

var _commonBehaviour = __webpack_require__(12);

var _commonBehaviour2 = _interopRequireDefault(_commonBehaviour);

var _particleSystem = __webpack_require__(14);

var _particleSystem2 = _interopRequireDefault(_particleSystem);

var _scene = __webpack_require__(10);

var _scene2 = _interopRequireDefault(_scene);

var _layer = __webpack_require__(9);

var _layer2 = _interopRequireDefault(_layer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.SpriteSheet = _spriteSheet2.default;
exports.GameObjectProto = _gameObjectProto2.default;
exports.GameObject = _gameObject2.default;
exports.CommonBehaviour = _commonBehaviour2.default;
exports.ParticleSystem = _particleSystem2.default;
exports.Scene = _scene2.default;
exports.Layer = _layer2.default;
//import Sound from './generic/sound'
//import Font from './generic/font'

//import FrameAnimation from './generic/frameAnimation'

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function () {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function get() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function get() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};

/***/ }),
/* 79 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 80 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 81 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 82 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 83 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 84 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 85 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 86 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 87 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 88 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 89 */
/***/ (function(module, exports) {

module.exports = "\n<app-modal id=\"alertModal\">\n    <div data-transclusion=\"content\">\n        <div class=\"withMargin\">\n            <div class=\"alert_body\">\n                {{message}}\n            </div>\n            <div>\n                <button data-click=\"close()\">{{i18n.ok}}</button>\n            </div>\n        </div>\n    </div>\n</app-modal>\n"

/***/ }),
/* 90 */
/***/ (function(module, exports) {

module.exports = "<div\n        class=\"inlineBlock\"\n        data-click=\"click($event)\"\n        data-mousemove=\"mouseMove($event)\"\n        >\n    <div data-container class=\"inlineBlock\">\n        <svg viewBox=\"0 0 200 200\" width=\"30\" height=\"30\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\n            <circle cx=\"100\" cy=\"100\" r=\"100\" stroke=\"black\" stroke-width=\"1\" fill=\"white\"></circle>\n            <line id=\"line\" x1=\"100\" y1=\"100\"\n                  x2=\"200\" y2=\"100\"\n                  stroke=\"black\"\n                  stroke-width=\"2\"\n                  data-attributes=\"{transform:'rotate('+angleInDeg()+',100,100)'}\"\n                    >\n            </line>\n        </svg>\n    </div>\n    <div class=\"smallXX\" data-attributes=\"{title: object && (object[value]+' rad')}\">\n        {{angleInDeg()}}&deg;\n    </div>\n</div>"

/***/ }),
/* 91 */
/***/ (function(module, exports) {

module.exports = "<div>\n    <div\n        class=\"collapsible_header bold noSelect\"\n    >\n        <div class=\"table width100\">\n            <div class=\"row\">\n                <div class=\"cell width1\">\n                    <span\n                            class=\"collapsible_point noBrake\"\n                            data-click=\"toggle()\"\n                            data-class=\"{rotated:opened}\">▷</span>\n                </div>\n                <div class=\"cell\">\n                    <span\n                            data-click=\"toggle()\"\n                            >&nbsp;{{title}}</span>\n                </div>\n                <div class=\"cell width1\">\n                    <div data-if=\"crud && crud.create\" class=\"add\" data-click=\"crud.create(meta)\"></div>\n                </div>\n                <div class=\"cell width1\">\n                    <div data-if=\"crud && crud.editScript\" class=\"script\" data-click=\"crud.editScript(object)\"></div>\n                </div>\n                <div class=\"cell width1\">\n                    <div data-if=\"crud && crud.edit\" class=\"edit\" data-click=\"crud.edit(object,meta)\"></div>\n                </div>\n                <div class=\"cell width1\">\n                    <div data-if=\"crud && crud.delete\" class=\"delete\" data-click=\"crud.delete(object,meta)\"></div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div\n            class=\"collapsible_content\"\n            data-class=\"{opened:opened}\">\n        <div data-transclusion=\"content\"></div>\n    </div>\n</div>"

/***/ }),
/* 92 */
/***/ (function(module, exports) {

module.exports = "<div class=\"inlineBlock\">\r\n\r\n    <div\r\n            data-style=\"{\r\n                cursor: 'pointer',\r\n                width: 24 + 'px',\r\n                height:24 + 'px',\r\n                backgroundColor: model && model[field] && ('rgb('+model[field].r+','+model[field].g+','+model[field].b+')')\r\n            }\"\r\n            data-click=\"click()\"\r\n            >\r\n    </div>\r\n\r\n</div>\r\n\r\n"

/***/ }),
/* 93 */
/***/ (function(module, exports) {

module.exports = "\n<app-modal id=\"colorPickerModal\" data-transclusion-id=\"colorPicker\">\n\n    <div data-transclusion=\"content:#colorPicker\">\n\n        <table>\n            <tr>\n                <td>\n                    <input type=\"color\" data-model=\"currentColor.hex\" data-change=\"hexChanged()\"/>\n                </td>\n                <td>\n                    <input type=\"text\"  data-model=\"currentColor.hex\" data-keyup=\"hexChanged()\"/>\n                </td>\n                <td></td>\n            </tr>\n\n            <table class=\"width100\">\n                <tr\n                        data-for=\"item in colorEnums\">\n                    <td\n                            data-style=\"{\n                                color: item.left\n                            }\"\n                    >\n                        {{item.left}}\n                    </td>\n                    <td class=\"centerText\">\n                        <input class=\"vAlign\" type=\"range\" min=\"0\" max=\"255\" data-model=\"currentColor.RGB[item.key]\" data-input=\"rgbChanged()\" data-change=\"rgbChanged()\">\n                        <br/>\n                        <input class=\"small vAlign\" data-model=\"currentColor.RGB[item.key]\" data-change=\"rgbChanged()\">\n                        <hr/>\n                    </td>\n                    <td\n                            data-style=\"{\n                                color: item.right\n                            }\"\n                    >\n                        {{item.right}}\n                    </td>\n                    <td>\n                        <div data-style=\"{\n                            width: '5px',\n                            height: '5px',\n                            backgroundColor: getRawColor(currentColor.RGB,item.key)\n                        }\"></div>\n                    </td>\n                </tr>\n\n            </table>\n        </table>\n\n        <button\n                data-click=\"applyColor()\">\n            {{i18n.edit}}\n        </button>\n    </div>\n\n</app-modal>"

/***/ }),
/* 94 */
/***/ (function(module, exports) {

module.exports = "\n<app-modal id=\"confirmModal\">\n    <div data-transclusion=\"content\">\n        <div class=\"withMargin\">\n            <div class=\"alert_body\">\n                {{message}}\n            </div>\n            <div>\n                <button data-click=\"confirmAndClose()\">{{i18n.confirm}}</button>\n                <button data-click=\"close()\">{{i18n.cancel}}</button>\n            </div>\n        </div>\n    </div>\n</app-modal>"

/***/ }),
/* 95 */
/***/ (function(module, exports) {

module.exports = "<div>\n    <button>{{title}}</button>\n    <input  required accept=\"{{accept}}\" type=\"file\"/>\n</div>"

/***/ }),
/* 96 */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"dialogWrapper\" data-if=\"opened\">\n    <div class=\"fullscreen shadow\"></div>\n    <div class=\"dialog\">\n        <div class=\"dialogContent\">\n            <div class=\"dialogClose\">\n                <span data-click=\"close()\" class=\"pointer\">X</span>\n            </div>\n            <div class=\"withPadding\">\n                <div data-transclusion=\"content\"></div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),
/* 97 */
/***/ (function(module, exports) {

module.exports = "<div class=\"height100 relative\" data-droppable=\"onDrop\" id=\"sceneDiv\">\n    <div data-for=\"item in editData.currLayerInEdit.gameObjects\">\n\n\n        <div\n                data-if=\"!item.subType\"\n                data-draggable=\"{obj:item,src:'centralPanel'}\"\n                data-click=\"utils.assign(editData,'currSceneGameObjectInEdit',item)\"\n                data-style=\"utils.merge(\n                    utils.getGameObjectCss(item),\n                    {\n                        position:'absolute',\n                        left:\n                             item.fixedToCamera?(item.pos.x+'px'):\n                             item.pos.x -\n                             frameWidth() *\n                             editData.tileMapPosX +\n                             'px',\n                        top:\n                             item.fixedToCamera?(item.pos.y+'px'):\n                             item.pos.y -\n                             frameHeight() *\n                             editData.tileMapPosY +\n                             'px',\n                    }\n                )\"\n                data-class=\"{active:item==editData.currSceneGameObjectInEdit}\"\n                >\n\n        </div>\n\n        <div\n                data-if=\"item.subType=='textField'\"\n                data-draggable=\"{obj:item,src:'centralPanel'}\"\n                data-click=\"utils.assign(editData,'currSceneGameObjectInEdit',item)\"\n                data-style=\"utils.merge(\n                    utils.getGameObjectCss(item),\n                    {\n                        position:'absolute',\n                        left:\n                             item.pos.x -\n                             frameWidth() *\n                             editData.tileMapPosX +\n                             'px',\n                        top:\n                             item.pos.y -\n                             frameHeight() *\n                             editData.tileMapPosY +\n                             'px',\n                        backgroundColor:'rgb(0,222,0.1)',\n                        height:item.height+'px',\n                        width:item.width?item.width+'px':'10px',\n                        backgroundColor:item.width?'':'#ddd',\n                        backgroundImage:'none'\n                    }\n                )\"\n                data-class=\"{active:item==editData.currSceneGameObjectInEdit}\"\n                >\n\n            <div style=\"position: relative;left:0;top:0;z-index:10\">\n                            <span\n                                data-style=\"{\n                                    left:item.pos.x+'px',\n                                    top: item.pos.y+'px',\n                                    display:ch=='\\n'?'block':'inline-block',\n                                    width:item._font.fontContext.symbols[ch].width+'px',\n                                    height:item._font.fontContext.symbols[ch].height+'px',\n                                    backgroundImage:'url('+editData.projectName+'/'+item._font.resourcePath+')',\n                                    backgroundRepeat:     'no-repeat',\n                                    backgroundPositionX: -item._font.fontContext.symbols[ch].x+'px',\n                                    backgroundPositionY: -item._font.fontContext.symbols[ch].y+'px'\n                                }\"\n                                    data-for=\"ch in item._chars\">\n                                </span>\n            </div>\n\n        </div>\n    </div>\n</div>"

/***/ }),
/* 98 */
/***/ (function(module, exports) {

module.exports = "<div\n        class=\"height100 relative\"\n        data-if=\"editData.scriptEditorUrl\"\n        >\n\n    <div class=\"scriptEditorClose\" data-click=\"close()\">X</div>\n\n    <div style=\"height:10px;font-size: 10px;\">\n        {{editData.scriptEditorUrl}}\n    </div>\n    <div\n            id=\"scriptEditor\"\n            style=\"height:calc(100% - 10px)\"\n            >\n        <iframe\n                id=\"scriptEditorFrame\"\n                frameborder=\"0\"\n                class=\"block width100 height100 noOverFlow\"\n                src=\"/editor\"\n                ></iframe>\n    </div>\n</div>"

/***/ }),
/* 99 */
/***/ (function(module, exports) {

module.exports = "\r\n<app-modal id=\"commonBehaviourModal\">\r\n\r\n    <div data-transclusion=\"content\">\r\n\r\n\r\n        <table class=\"width100\">\r\n            <tr>\r\n                <td class=\"borderBottom\">\r\n                    {{i18n.name}}\r\n                </td>\r\n                <td class=\"borderBottom\">\r\n                    {{editData.currCommonBehaviourInEdit.name}}\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td class=\"borderBottom\">\r\n                    {{i18n.description}}\r\n                </td>\r\n                <td class=\"borderBottom\">\r\n                    {{editData.currCommonBehaviourInEdit.description}}\r\n                </td>\r\n            </tr>\r\n            <tr data-for=\"value,key in editData.currCommonBehaviourInEdit.parameters\">\r\n                <td class=\"borderBottom\">\r\n                    {{key}}\r\n                </td>\r\n                <td class=\"borderBottom\">\r\n                    <input\r\n                            type=\"text\"\r\n                            data-model=\"editData.currCommonBehaviourInEdit.parameters[key]\"/>\r\n                </td>\r\n            </tr>\r\n            <tr data-if=\"utils.size(editData.currCommonBehaviourInEdit.parameters)==0\">\r\n                <td colspan=\"2\" class=\"borderBottom\">\r\n                    {{i18n.noDataToEdit}}\r\n                </td>\r\n            </tr>\r\n        </table>\r\n        <button\r\n                data-click=\"createOrEditCommonBehaviour(editData.currCommonBehaviourInEdit)\"\r\n                data-disabled=\"!form.valid()\">\r\n            {{editData.currCommonBehaviourInEdit.id?i18n.edit:i18n.create}}\r\n        </button>\r\n\r\n\r\n    </div>\r\n\r\n</app-modal>"

/***/ }),
/* 100 */
/***/ (function(module, exports) {

module.exports = "<div>\n    <app-sound-dialog id=\"soundDialog\"></app-sound-dialog>\n    <app-particle-system-dialog></app-particle-system-dialog>\n    <app-font-dialog id=\"fontDialog\"></app-font-dialog>\n    <app-sprite-sheet-dialog id=\"spriteSheetDialog\"></app-sprite-sheet-dialog>\n    <app-game-object-dialog id=\"gameObjectDialog\"></app-game-object-dialog>\n    <app-scene-dialog></app-scene-dialog>\n    <app-layer-dialog></app-layer-dialog>\n</div>\n\n<app-color-picker-dialog id=\"colorPickerDialog\"></app-color-picker-dialog> <!--todo-->"

/***/ }),
/* 101 */
/***/ (function(module, exports) {

module.exports = "<app-modal id=\"fontModal\">\n    <div data-transclusion=\"content\">\n        <table class=\"width100\">\n            <tr>\n                <td>\n                    {{i18n.selectFont}}\n                </td>\n                <td>\n                    <select\n                            required\n                            data-model=\"editData.currFontInEdit.fontFamily\" class=\"width100\">\n                        <option\n                                data-value=\"fnt.displayName\"\n                                data-for=\"fnt in systemFontList\">\n                            {{fnt.displayName}}\n                        </option>\n                    </select>\n                </td>\n            </tr>\n            <tr>\n                <td>\n                    {{i18n.name}}\n                </td>\n                <td>\n                    <input required\n                           data-model=\"editData.currFontInEdit.name\" class=\"width100\">\n                </td>\n            </tr>\n            <tr>\n                <td>\n                    {{i18n.fontSize}}\n                </td>\n                <td>\n                    <input required type=\"number\"\n                           min=\"1\"\n                           max=\"1000\"\n                           data-model=\"editData.currFontInEdit.fontSize\" class=\"width100\">\n                </td>\n            </tr>\n            <tr>\n                <td>\n                    {{i18n.fontColor}}\n                </td>\n                <td>\n                    <app-color-picker\n                        data-state=\"{\n                            model:editData.currFontInEdit,\n                            field:'fontColor'\n                        }\"\n                    ></app-color-picker>\n                </td>\n            </tr>\n            <tr>\n                <td colspan=\"2\">\n                    <input data-model=\"fontSample\" class=\"width100\"/>\n                </td>\n            </tr>\n            <tr>\n                <td colspan=\"2\">\n                    <div data-style='{\n                fontFamily:editData.currFontInEdit.fontFamily,\n                fontSize:editData.currFontInEdit.fontSize+\"px\",\n                color:utils.rgbToHex(editData.currFontInEdit.fontColor)\n            }'>{{fontSample}}</div>\n                </td>\n            </tr>\n        </table>\n\n        <button\n                data-disabled=\"!form.valid()\"\n                data-click=\"createOrEditFont(editData.currFontInEdit)\">\n            {{editData.currFontInEdit.id?i18n.edit:i18n.create}}\n        </button>\n    </div>\n</app-modal>\n\n\n"

/***/ }),
/* 102 */
/***/ (function(module, exports) {

module.exports = "<app-modal id=\"frameAnimationModal\">\r\n\r\n    <div data-transclusion=\"content\">\r\n        <table class=\"width100\">\r\n            <tr>\r\n                <td>\r\n                    {{i18n.name}}\r\n                </td>\r\n                <td>\r\n                    <input\r\n                            required\r\n                            data-model=\"editData.currFrameAnimationInEdit.name\">\r\n                </td>\r\n                <td rowspan=\"3\">\r\n                    <div style=\"max-height: 80vh;max-width:80vw;overflow: auto;padding: 5px;\"\r\n                    >\r\n                        {{\r\n                            editData.currFrameAnimationInEdit._gameObject &&\r\n                            editData.currFrameAnimationInEdit._gameObject.currFrameIndex||0\r\n                        }}\r\n\r\n                        <div data-style=\"\r\n                        utils.merge(\r\n                            utils.getGameObjectCss(editData.currFrameAnimationInEdit._gameObject),\r\n                            {outline:'1px solid blue'}\r\n                        )\">\r\n                        </div>\r\n\r\n                        <div>\r\n                            <button\r\n                                    data-click=\"playAnimation()\"\r\n                                    data-disabled=\"!form.valid()\" class=\"inlineBlock withMargin\">{{i18n.playAnim}}</button>\r\n                            <button\r\n                                    data-click=\"stopAnimation()\"\r\n                                    data-disabled=\"!form.valid()\" class=\"inlineBlock withMargin\">{{i18n.stopAnim}}</button>\r\n                        </div>\r\n\r\n                        <div>\r\n\r\n                            <button\r\n                                    data-click=\"previousFrame()\"\r\n                                    data-disabled=\"!form.valid()\" class=\"inlineBlock withMargin\"> << </button>\r\n\r\n                            <button\r\n                                    data-click=\"nextFrame()\"\r\n                                    data-disabled=\"!form.valid()\" class=\"inlineBlock withMargin\"> >> </button>\r\n                        </div>\r\n\r\n\r\n                        <div class=\"relative\"\r\n                             data-style=\"\r\n                              {\r\n                                'background-image':     'url('+editData.projectName+'/'+editData.currFrameAnimationInEdit._gameObject.spriteSheet.resourcePath+')',\r\n                                'width':                editData.currFrameAnimationInEdit._gameObject.spriteSheet.width+'px',\r\n                                'height':               editData.currFrameAnimationInEdit._gameObject.spriteSheet.height+'px'\r\n                              }\">\r\n                            <div\r\n                                    data-for=\"v,i in getLoopArr()\"\r\n                                    data-style=\"{\r\n                                            'display':        'inline-block',\r\n                                            'left':           editData.currFrameAnimationInEdit._gameObject.spriteSheet.getFramePosX(i)+'px',\r\n                                            'top':            editData.currFrameAnimationInEdit._gameObject.spriteSheet.getFramePosY(i)+'px',\r\n                                            'position':       'absolute',\r\n                                            'text-align':     'left',\r\n                                            'outline':        '1px solid red',\r\n                                            'width':          editData.currFrameAnimationInEdit._gameObject.spriteSheet._frameWidth+'px',\r\n                                            'height':         editData.currFrameAnimationInEdit._gameObject.spriteSheet._frameHeight+'px'\r\n                                      }\">{{i}}</div>\r\n                        </div>\r\n                    </div>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td>\r\n                    {{i18n.duration}}\r\n                </td>\r\n                <td>\r\n                    <input\r\n                            type=\"number\"\r\n                            min=\"1\"\r\n                            required\r\n                            data-model=\"editData.currFrameAnimationInEdit.duration\">\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td>\r\n\r\n                    <table>\r\n                        <tr>\r\n                            <td>\r\n                                {{i18n.frames}}\r\n                            </td>\r\n                            <td>\r\n                                <button data-click=\"setAllIndexes()\">{{i18n.all}}</button>\r\n                            </td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>\r\n                                {{i18n.from}}\r\n                            </td>\r\n                            <td>\r\n                                <input\r\n                                        type=\"number\"\r\n                                        data-model=\"from\"\r\n                                        min=\"0\"\r\n                                        data-keyup=\"setRangeIndexes()\">\r\n                            </td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>\r\n                                {{i18n.to}}\r\n                            </td>\r\n                            <td>\r\n                                <input\r\n                                        type=\"number\"\r\n                                        min=\"0\"\r\n                                        data-model=\"to\"\r\n                                        data-change=\"setRangeIndexes()\">\r\n                            </td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>\r\n                                {{i18n.step}}\r\n                            </td>\r\n                            <td>\r\n                                <input\r\n                                        type=\"number\"\r\n                                        min=\"0\"\r\n                                        data-model=\"step\"\r\n                                        data-change=\"setRangeIndexes()\">\r\n                            </td>\r\n                        </tr>\r\n                    </table>\r\n\r\n                </td>\r\n                <td>\r\n                   <textarea\r\n                           required\r\n                           data-model=\"frames\">\r\n                   </textarea>\r\n                </td>\r\n            </tr>\r\n        </table>\r\n        <button\r\n                data-click=\"createOrEditFrameAnimation()\"\r\n                data-disabled=\"!form.valid()\">\r\n            {{editData.currFrameAnimationInEdit.id?i18n.edit:i18n.create}}\r\n        </button>\r\n    </div>\r\n\r\n</app-modal>"

/***/ }),
/* 103 */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<app-modal id=\"gameObjectModal\">\r\n    <div data-transclusion=\"content\">\r\n\r\n\r\n        <table class=\"width100\">\r\n            <tr>\r\n                <td>\r\n                    {{i18n.name}}\r\n                </td>\r\n                <td>\r\n                    <input\r\n                            required\r\n                            data-model=\"editData.currGameObjectInEdit.name\"/>\r\n                </td>\r\n                <td></td>\r\n                <td rowspan=\"5\">\r\n                    <div class=\"relative\"\r\n                         style=\"\r\n                        display: inline-block;\r\n                        overflow: scroll;\r\n                        max-width:60vw;\r\n                        max-height:60vh;\r\n                    \"\r\n                    >\r\n\r\n                        <div data-style=\"\r\n                            utils.merge(\r\n                                utils.getGameObjectCss(editData.currGameObjectInEdit),\r\n                                {\r\n                                    'border':'1px solid blue',\r\n                                    'opacity':editData.currGameObjectInEdit.alpha\r\n                                }\r\n                            )\r\n                \"></div>\r\n                    </div>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td>\r\n                    {{i18n.spriteSheet}}\r\n                </td>\r\n                <td>\r\n                    <select\r\n                            data-change=\"onSpriteSheetSelected(editData.currGameObjectInEdit.spriteSheet)\"\r\n                            required\r\n                            data-model=\"editData.currGameObjectInEdit.spriteSheet\">\r\n                        <option>--</option>\r\n                        <option data-value=\"item\" data-for=\"item in editData.game._repository.getArray('SpriteSheet')\">{{item.name}}</option>\r\n                    </select>\r\n                </td>\r\n                <td>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td>\r\n                    {{i18n.groupName}}\r\n                </td>\r\n                <td>\r\n                    <input\r\n                            data-model=\"editData.currGameObjectInEdit.groupName\"/>\r\n                </td>\r\n                <td></td>\r\n            </tr>\r\n            <tr>\r\n                <td>\r\n                    {{i18n.rigid}}\r\n                </td>\r\n                <td>\r\n                    <input\r\n                            type=\"checkbox\"\r\n                            data-model=\"editData.currGameObjectInEdit.rigid\"/>\r\n                </td>\r\n                <td></td>\r\n            </tr>\r\n            <tr>\r\n                <td>\r\n                    {{i18n.width}}\r\n                </td>\r\n                <td>\r\n                    <input\r\n                            type=\"number\"\r\n                            required\r\n                            data-model=\"editData.currGameObjectInEdit.width\"/>\r\n                </td>\r\n                <td></td>\r\n            </tr>\r\n            <tr>\r\n                <td>\r\n                    {{i18n.height}}\r\n                </td>\r\n                <td>\r\n                    <input\r\n                            type=\"number\"\r\n                            required\r\n                            data-model=\"editData.currGameObjectInEdit.height\"/>\r\n                </td>\r\n                <td></td>\r\n            </tr>\r\n            <tr>\r\n                <td>\r\n                    {{i18n.angle}}\r\n                </td>\r\n                <td>\r\n                    <input\r\n                            step=\"0.1\"\r\n                            type=\"number\"\r\n                            required\r\n                            data-model=\"editData.currGameObjectInEdit.angle\"/>\r\n                </td>\r\n                <td align=\"left\">\r\n                    <div class=\"inlineBlock\">\r\n                        <app-angle-picker\r\n                                data-state=\"{\r\n                                    object: editData.currGameObjectInEdit,\r\n                                        value: 'angle'\r\n                                }\"\r\n                        ></app-angle-picker>\r\n                    </div>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td>\r\n                    alpha\r\n                </td>\r\n                <td>\r\n                    <input\r\n                            type=\"number\"\r\n                            min=\"0\"\r\n                            max=\"1\"\r\n                            step=\"0.1\"\r\n                            required\r\n                            data-model=\"editData.currGameObjectInEdit.alpha\"/>\r\n                </td>\r\n                <td>\r\n                    <input\r\n                            type=\"range\"\r\n                            min=\"0\"\r\n                            max=\"1\"\r\n                            step=\"0.1\"\r\n                            data-model=\"editData.currGameObjectInEdit.alpha\"/>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td>\r\n                    {{i18n.currFrameIndex}}\r\n                </td>\r\n                <td>\r\n                    <input type=\"number\"\r\n                           min=\"0\"\r\n                           data-change=\"refreshGameObjectFramePreview(editData.currGameObjectInEdit,editData.currGameObjectInEdit.currFrameIndex)\"\r\n                           required\r\n                           data-model=\"editData.currGameObjectInEdit.currFrameIndex\"/>\r\n                </td>\r\n                <td></td>\r\n            </tr>\r\n        </table>\r\n\r\n        <hr>\r\n\r\n        <table class=\"width100\">\r\n            <tr>\r\n                <td>\r\n                    {{i18n.frAnimations}}\r\n                </td>\r\n                <td>\r\n                    <table data-for=\"animItm in editData.currGameObjectInEdit.frameAnimations\">\r\n                        <tr>\r\n                            <td class=\"pointer\" data-click=\"editFrameAnimation(animItm)\">\r\n                                <span class=\"edit\"></span>\r\n                            </td>\r\n                            <td class=\"pointer\" data-click=\"deleteFrameAnimation(animItm)\">\r\n                                <span class=\"delete\"></span>\r\n                            </td>\r\n                            <td>{{animItm.name}}</td>\r\n                        </tr>\r\n                    </table>\r\n                </td>\r\n                <td></td>\r\n                <td align=\"right\">\r\n                    <button\r\n                            class=\"inlineBlock\"\r\n                            data-disabled=\"!editData.currGameObjectInEdit.id\"\r\n                            data-click=\"createFrameAnimation()\">+</button>\r\n                </td>\r\n            </div>\r\n            <tr>\r\n                <td>\r\n                    {{i18n.commonBehaviour}}\r\n                </td>\r\n                <td>\r\n                    <table data-for=\"itm in editData.currGameObjectInEdit.commonBehaviour\">\r\n                        <tr>\r\n                            <td class=\"pointer\" data-click=\"editCommonBehaviour(itm)\">\r\n                                <span class=\"edit\"></span>\r\n                            </td>\r\n                            <td class=\"pointer\" data-click=\"deleteCommonBehaviour(itm)\">\r\n                                <span class=\"delete\"></span>\r\n                            </td>\r\n                            <td>\r\n                                {{itm.name}}\r\n                            </td>\r\n                        </tr>\r\n                    </table>\r\n                </td>\r\n                <td>\r\n                    <select data-model=\"selectedCb\">\r\n                        <option>-</option>\r\n                        <option\r\n                                data-disabled=\"isCbItemDisabled(cb)\"\r\n                                data-value=\"cb\"\r\n                                data-for=\"cb in editData.commonBehaviourProtos\">\r\n                            {{cb.name}}\r\n                        </option>\r\n                    </select>\r\n                </td>\r\n                <td align=\"right\">\r\n                    <button\r\n                            class=\"inlineBlock\"\r\n                            data-disabled=\"!editData.currGameObjectInEdit.id || !selectedCb\"\r\n                            data-click=\"createCommonBehaviour(selectedCb)\">\r\n                        +\r\n                    </button>\r\n                </td>\r\n            </tr>\r\n        </table>\r\n\r\n\r\n        <button\r\n                data-disabled=\"!form.valid()\"\r\n                data-click=\"createOrEditGameObject(editData.currGameObjectInEdit)\">\r\n            {{editData.currGameObjectInEdit.id?i18n.edit:i18n.create}}\r\n        </button>\r\n\r\n    </div>\r\n</app-modal>\r\n\r\n<app-frame-animation-dialog id=\"frameAnimationDialog\"></app-frame-animation-dialog>\r\n<app-common-behaviour-dialog id=\"commonBehaviourDialog\"></app-common-behaviour-dialog>\r\n"

/***/ }),
/* 104 */
/***/ (function(module, exports) {

module.exports = "\r\n<app-modal id=\"layerModal\">\r\n\r\n    <div data-transclusion=\"content\">\r\n\r\n        <div class=\"withPadding\">\r\n            <div>\r\n                {{i18n.scene}}: {{editData.currLayerInEdit._scene && editData.currLayerInEdit._scene.name}}\r\n            </div>\r\n            <b class=\"block centerText\">{{i18n.layer}}</b>\r\n            <div class=\"table width100\">\r\n                <div class=\"row\">\r\n                    <div class=\"cell\">\r\n                        {{i18n.name}}\r\n                    </div>\r\n                    <div class=\"cell\">\r\n                        <input\r\n                                data-model=\"editData.currLayerInEdit.name\"\r\n                                required/>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div>\r\n                <button\r\n                    data-disabled=\"!form.valid()\"\r\n                    data-click=\"createOrEditLayer(editData.currLayerInEdit,editData.currLayerInEdit._scene)\">\r\n                    {{editData.currLayerInEdit.id?i18n.edit:i18n.create}}\r\n                </button>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n\r\n</app-modal>"

/***/ }),
/* 105 */
/***/ (function(module, exports) {

module.exports = "\n<app-modal id=\"particleSystemModal\">\n    <div data-transclusion=\"content\">\n\n        <table class=\"width100\">\n            <tr>\n                <td>\n                    {{i18n.name}}\n                </td>\n                <td>\n\n                </td>\n                <td>\n                    <input\n                            required\n                            data-model=\"editData.currParticleSystemInEdit.name\"/>\n                </td>\n            </tr>\n            <tr>\n                <td rowspan=\"2\">\n                    numOfParticlesToEmit\n                </td>\n                <td>\n                    from\n                </td>\n                <td>\n                    <input\n                            required\n                            type=\"number\"\n                            data-model=\"editData.currParticleSystemInEdit.numOfParticlesToEmit.from\"/>\n                </td>\n            </tr>\n            <tr>\n                <td>\n                    to\n                </td>\n                <td>\n                    <input\n                            required\n                            type=\"number\"\n                            data-model=\"editData.currParticleSystemInEdit.numOfParticlesToEmit.to\"/>\n                </td>\n            </tr>\n            <tr>\n                <td rowspan=\"2\">\n                    particleVelocity\n                </td>\n                <td>\n                    from\n                </td>\n                <td>\n                    <input\n                            required\n                            type=\"number\"\n                            data-model=\"editData.currParticleSystemInEdit.particleVelocity.from\"/>\n                </td>\n            </tr>\n            <tr>\n                <td>\n                    to\n                </td>\n                <td>\n                    <input\n                            required\n                            type=\"number\"\n                            data-model=\"editData.currParticleSystemInEdit.particleVelocity.to\"/>\n                </td>\n            </tr>\n\n            <tr>\n                <td rowspan=\"2\">\n                    particleLiveTime\n                </td>\n                <td>\n                    from\n                </td>\n                <td>\n                    <input\n                            required\n                            type=\"number\"\n                            data-model=\"editData.currParticleSystemInEdit.particleLiveTime.from\"/>\n                </td>\n            </tr>\n            <tr>\n                <td>\n                    to\n                </td>\n                <td>\n                    <input\n                            required\n                            type=\"number\"\n                            data-model=\"editData.currParticleSystemInEdit.particleLiveTime.to\"/>\n                </td>\n            </tr>\n\n            <tr>\n                <td>\n                    emissionRadius\n                </td>\n                <td></td>\n                <td>\n                    <input\n                            required\n                            type=\"number\"\n                            data-model=\"editData.currParticleSystemInEdit.emissionRadius\"/>\n                </td>\n            </tr>\n\n            <tr>\n                <td>\n                    particleAngle\n                </td>\n                <td>\n                    from / to\n                </td>\n                <td>\n                    <app-angle-picker\n                            data-state=\"{\n                        object:editData.currParticleSystemInEdit.particleAngle,\n                        value:'from'\n                    }\"\n                    ></app-angle-picker>\n                    <app-angle-picker\n                            data-state=\"{\n                        object:editData.currParticleSystemInEdit.particleAngle,\n                        value:'to'\n                    }\"\n                    ></app-angle-picker>\n                </td>\n            </tr>\n            <tr>\n                <td></td>\n                <td>\n                    {{i18n.gameObject}}\n                </td>\n                <td>\n\n                    <table>\n                        <tr>\n                            <td>\n                                <select\n                                        required\n                                        data-change=\"onGameObjectSelected(editData.currParticleSystemInEdit.gameObjectProto)\"\n                                        data-model=\"editData.currParticleSystemInEdit.gameObjectProto\"\n                                >\n                                    <option>--</option>\n                                    <option\n                                            data-value=\"item\"\n                                            data-for=\"item in editData.game._repository.getArray('GameObjectProto')\">{{item.name}}</option>\n                                </select>\n                            </td>\n                            <td>\n                                <div data-style=\"\n                                utils.merge(\n                                    utils.getGameObjectCss(editData.currParticleSystemInEdit.gameObjectProto),\n                                    {\n                                        zoom:utils.calcZoom(editData.currParticleSystemInEdit.gameObjectProto)\n                                    }\n                               )\">\n                                </div>\n                            </td>\n                        </tr>\n                    </table>\n\n\n                </td>\n            </tr>\n\n        </table>\n\n        <button\n                data-disabled=\"!form.valid()\"\n                data-click=\"createOrEditPs(editData.currParticleSystemInEdit)\">\n            {{editData.currParticleSystemInEdit.id?i18n.edit:i18n.create}}\n        </button>\n\n        <button\n                data-disabled=\"!form.valid()\"\n                data-click=\"showPreview()\">\n            {{i18n.preview}}\n        </button>\n\n    </div>\n</app-modal>\n\n<app-particle-system-preview-dialog id=\"particleSystemPreviewDialog\"></app-particle-system-preview-dialog>"

/***/ }),
/* 106 */
/***/ (function(module, exports) {

module.exports = "<app-modal id=\"particleSystemPreviewModal\">\n    <div data-transclusion=\"content\">\n        <div>\n            {{i18n.preview}} {{i18n.particleSystem}}\n            <span class=\"underLine\">{{editData.currParticleSystemInEdit.name}}</span>\n        </div>\n        <div\n                data-click=\"emit($event)\"\n                data-mousemove=\"$event.buttons==1 && emit($event)\"\n                class=\"subFullScreen relative noOverFlow\">\n            <div\n                    data-for=\"item in editData.currParticleSystemInEdit._particles\"\n                    data-style=\"utils.merge(\n                            utils.getGameObjectCss(item),\n                            {\n                                position:'absolute',\n                                left:item.pos.x+'px',\n                                top: item.pos.y+'px',\n                                pointerEvents:'none'\n                            }\n                    )\"\n            >\n            </div>\n        </div>\n        <div>\n            <button data-click=\"close()\">{{i18n.close}}</button>\n        </div>\n    </div>\n</app-modal>\n\n\n"

/***/ }),
/* 107 */
/***/ (function(module, exports) {

module.exports = "<app-modal id=\"sceneModal\">\r\n\r\n    <div data-transclusion=\"content\">\r\n\r\n        <div class=\"withPadding\">\r\n            <div class=\"table\">\r\n                <div class=\"row\">\r\n                    <div class=\"cell\">\r\n                        {{i18n.name}}\r\n                    </div>\r\n                    <div class=\"cell\">\r\n                        <input\r\n                                required\r\n                                data-model=\"editData.currSceneInEdit.name\"/>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <button\r\n                    data-disabled=\"!form.valid()\"\r\n                    data-click=\"createOrEditScene(editData.currSceneInEdit)\">\r\n                {{editData.currSceneInEdit.id?i18n.edit:i18n.create}}\r\n            </button>\r\n        </div>\r\n\r\n    </div>\r\n\r\n</app-modal>"

/***/ }),
/* 108 */
/***/ (function(module, exports) {

module.exports = "\n<app-modal id=\"soundModal\">\n    <div data-transclusion=\"content\">\n        <table class=\"width100\">\n            <tr>\n                <td>\n                    {{i18n.name}}\n                </td>\n            </tr>\n            <tr>\n                <td>\n                    <input\n                            required\n                            data-model=\"editData.currSoundInEdit.name\"/>\n                </td>\n            </tr>\n            <tr>\n                <td>\n                    <app-input-file\n                            data-state=\"{\n                        onFilePicked: onFilePicked,\n                        title: i18n.loadSound,\n                        accept: 'audio/*'\n                    }\"\n                    ></app-input-file>\n                </td>\n            </tr>\n            <tr>\n                <td>\n                    <audio data-if=\"soundUrl\" controls=\"controls\" data-attributes=\"{src:soundUrl}\"></audio>\n                </td>\n            </tr>\n        </table>\n\n        <button\n                data-disabled=\"!(form.valid() && soundUrl)\"\n                data-click=\"createOrEditSound(editData.currSoundInEdit)\">\n            {{editData.currSoundInEdit.id?i18n.edit:i18n.create}}\n        </button>\n    </div>\n</app-modal>\n"

/***/ }),
/* 109 */
/***/ (function(module, exports) {

module.exports = "\r\n<app-modal id=\"spriteSheetModal\">\r\n    <div data-transclusion=\"content\">\r\n\r\n        <table class=\"width100\">\r\n            <tr>\r\n                <td>\r\n                    {{i18n.name}}\r\n                </td>\r\n                <td>\r\n                    <input data-model=\"editData.currSpriteSheetInEdit.name\"/>\r\n                </td>\r\n                <td rowspan=\"6\">\r\n                    <div style=\"max-width:60vw;overflow: auto;padding:5px;\"\r\n                    >\r\n                        <div class=\"relative\"\r\n                             data-style=\"{\r\n                                    'background-image':   'url('+spriteSheetUrl+')',\r\n                                    'background-size':    editData.currSpriteSheetInEdit.width+'px '+editData.currSpriteSheetInEdit.height+'px',\r\n                                    'width':              editData.currSpriteSheetInEdit.width+'px',\r\n                                    'height':             editData.currSpriteSheetInEdit.height+'px',\r\n                               }\">\r\n                            <div\r\n                                    data-attributes=\"{title:i}\"\r\n                                    data-for=\"i in utils.range(0,numOfSpriteSheetCells-1)\"\r\n                                    data-style=\"{\r\n                                    'display':        'inline-block',\r\n                                    'left':           editData.currSpriteSheetInEdit.getFramePosX(i)+'px',\r\n                                    'top':            editData.currSpriteSheetInEdit.getFramePosY(i)+'px',\r\n                                    'position':       'absolute',\r\n                                    'text-align':     'left',\r\n                                    'outline':         '1px solid red',\r\n                                    'width':          editData.currSpriteSheetInEdit._frameWidth+'px',\r\n                                    'height':         editData.currSpriteSheetInEdit._frameHeight+'px'\r\n                                }\">{{i}}</div>\r\n                        </div>\r\n                    </div>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td>\r\n                    {{i18n.image}}\r\n                </td>\r\n                <td>\r\n                    <app-input-file\r\n                            data-state=\"{\r\n                                onFilePicked: onFilePicked,\r\n                                title: i18n.loadImage,\r\n                                accept: 'image/*'\r\n                            }\"\r\n                    ></app-input-file>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td>\r\n                    {{i18n.width}}\r\n                </td>\r\n                <td>\r\n                    <input type=\"number\" min=\"1\" data-change=\"revalidate()\" data-model=\"editData.currSpriteSheetInEdit.width\">\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td>\r\n                    {{i18n.height}}\r\n                </td>\r\n                <td>\r\n                    <input type=\"number\" min=\"1\" data-change=\"revalidate()\" data-model=\"editData.currSpriteSheetInEdit.height\">\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td>\r\n                    {{i18n.numOfFramesH}}\r\n                </td>\r\n                <td>\r\n                    <input\r\n                            required\r\n                            min=\"1\"\r\n                            max=\"100\"\r\n                            type=\"number\"\r\n                            data-change=\"refreshNumOfCells()\"\r\n                            data-model=\"editData.currSpriteSheetInEdit.numOfFramesH\"/>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td>\r\n                    {{i18n.numOfFramesV}}\r\n                </td>\r\n                <td>\r\n                    <input\r\n                            required\r\n                            min=\"1\"\r\n                            max=\"100\"\r\n                            type=\"number\"\r\n                            data-change=\"refreshNumOfCells()\"\r\n                            data-input=\"refreshNumOfCells()\"\r\n                            data-keyup=\"refreshNumOfCells()\"\r\n                            data-model=\"editData.currSpriteSheetInEdit.numOfFramesV\"/>\r\n                </td>\r\n            </tr>\r\n        </table>\r\n        <button\r\n                data-click=\"createOrEditSpriteSheet(editData.currSpriteSheetInEdit)\"\r\n                data-disabled=\"!(form.valid() && editData.currSpriteSheetInEdit.resourcePath)\">\r\n            {{editData.currSpriteSheetInEdit.id?i18n.edit:i18n.create}}\r\n        </button>\r\n\r\n    </div>\r\n</app-modal>\r\n\r\n"

/***/ }),
/* 110 */
/***/ (function(module, exports) {

module.exports = "<div class=\"template\">\n    <div class=\"absolute\">\n        <app-top-panel></app-top-panel>\n    </div>\n    <div id=\"c\" class=\"split\">\n        <div id=\"a\" class=\"split split-horizontal content\">\n            <app-game-props></app-game-props>\n            <app-scenes></app-scenes>\n            <app-game-objects></app-game-objects>\n            <app-sprite-sheets></app-sprite-sheets>\n            <app-user-interface></app-user-interface>\n            <app-fonts></app-fonts>\n            <app-sounds></app-sounds>\n            <app-particle-systems></app-particle-systems>\n        </div>\n        <div id=\"b\" class=\"split split-horizontal content relative\">\n            <app-script-editor></app-script-editor>\n            <div class=\"table width100 height100\">\n                <div class=\"row\">\n                    <div class=\"cell height100 vAlign\">\n                        <div\n                            data-style=\"{\n                                width:  editData.game.width + 'px',\n                                height: editData.game.height + 'px',\n                                border: '1px solid green',\n                                margin: '0 auto'\n                            }\">\n                            <app-curr-scene></app-curr-scene>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n        </div>\n        <div id=\"e\" class=\"split split-horizontal content\">\n            <app-info-curr-scene></app-info-curr-scene>\n            <app-info-curr-scene-game-object></app-info-curr-scene-game-object>\n        </div>\n    </div>\n    <div id=\"d\" class=\"split content\">d</div>\n\n    <app-dialogs></app-dialogs>\n\n</div>"

/***/ }),
/* 111 */
/***/ (function(module, exports) {

module.exports = "<div>\n    <div    class=\"cell width100\">\n        <div data-style=\"\n                utils.merge(\n                        utils.getGameObjectCss(gameObject),\n                        {\n                            zoom:utils.calcZoom(gameObject),\n                            transform: 'scale(1, 1) rotateZ(0deg)',\n                            opacity:1\n                        }\n                )\"\n             data-draggable=\"draggable && {obj:gameObject,src: 'leftPanel'}\"\n        ></div>\n    </div>\n    <div class=\"cell\">\n        <span class=\"inlineBlock withPaddingRight\">\n            <span class=\"inlineBlock withPaddingTop withPaddingBottom\">\n                {{gameObject.name}}\n            </span>\n        </span>\n    </div>\n    <div class=\"cell width1\">\n        <div data-if=\"crud && crud.editScript\" class=\"script\" data-click=\"crud.editScript(gameObject)\"></div>\n    </div>\n    <div class=\"cell width1\">\n        <div data-if=\"crud && crud.edit\" class=\"edit\" data-click=\"crud.edit(gameObject)\"></div>\n    </div>\n    <div class=\"cell width1\">\n        <div data-if=\"crud && crud.delete\" data-click=\"crud.delete(gameObject)\" class=\"delete\"></div>\n    </div>\n</div>"

/***/ }),
/* 112 */
/***/ (function(module, exports) {

module.exports = "<app-collapsible\n        data-state=\"{\n            crud: {create:createFont},\n            title:i18n.fonts\n        }\">\n    <div data-transclusion=\"content\">\n\n        <div class=\"withPaddingLeft\">\n            <div class=\"table width100\">\n                <div class=\"row\"\n                     data-for=\"font in editData.game._repository.getArray('Font')\">\n\n                    <div class=\"cell\">\n                    <span class=\"inlineBlock withPaddingTop withPaddingBottom\">\n                        {{font.name}}\n                    </span>\n                    </div>\n\n                    <div class=\"cell width1\">\n                        <div class=\"edit\" data-click=\"editFont(font)\"></div>\n                    </div>\n                    <div class=\"cell width1\">\n                        <div class=\"delete\" data-click=\"deleteFont(font)\"></div>\n                    </div>\n\n                </div>\n            </div>\n        </div>\n\n    </div>\n</app-collapsible>"

/***/ }),
/* 113 */
/***/ (function(module, exports) {

module.exports = "<app-collapsible\n        data-state=\"{\n                title: i18n.gameObjects,\n                crud: {\n                    create:createGameObject\n                }\n            }\">\n\n    <div data-transclusion=\"content\">\n\n        <div class=\"withPaddingLeft\">\n\n            <div class=\"table width100\">\n                <div class=\"row\"\n                     data-for=\"gameObject in editData.game._repository.getArray('GameObjectProto')\"\n                >\n                    <app-game-object-row\n                            data-state=\"{\n                            crud: {\n                                 edit: editGameObject,\n                                 editScript: editGameObjectScript,\n                                 delete: deleteGameObject\n                            },\n                            gameObject: gameObject || {},\n                            draggable: true\n                        }\">\n                    </app-game-object-row>\n                </div>\n\n            </div>\n        </div>\n\n\n    </div>\n\n</app-collapsible>"

/***/ }),
/* 114 */
/***/ (function(module, exports) {

module.exports = "\n<app-collapsible data-state=\"{title:i18n.game}\">\n    <div data-transclusion=\"content\">\n        <form class=\"table width100\">\n            <div class=\"row\">\n                <div class=\"cell\">\n                    {{i18n.width}}\n                </div>\n                <div class=\"cell\">\n                    <input\n                            class=\"narrow\"\n                            data-model=\"editData.game.width\"\n                            type=\"number\"\n                            min=\"1\"\n                            max=\"20000\"\n                            data-change=\"form.valid() && saveGameProps()\"/>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"cell\">\n                    {{i18n.height}}\n                </div>\n                <div class=\"cell\">\n                    <input\n                            class=\"narrow\"\n                            data-model=\"editData.game.height\"\n                            type=\"number\"\n                            min=\"1\"\n                            max=\"20000\"\n                            data-change=\"form.valid() && saveGameProps()\"/>\n                </div>\n            </div>\n\n\n            <div class=\"row\">\n                <div class=\"cell\">\n                    {{i18n.scaleStrategy}}\n                </div>\n                <div class=\"cell\">\n                    <select\n                            data-model=\"editData.game.scaleStrategy\"\n                            data-change=\"form.valid() && saveGameProps()\">\n                        <option\n                                data-value=\"value\"\n                                data-for=\"(value,key) in scales\">{{key}}</option>\n                    </select>\n                </div>\n            </div>\n\n            <div class=\"row\">\n                <div class=\"cell\">\n                    {{i18n.preloadingScene}}\n                </div>\n                <div class=\"cell\">\n                    <select\n                            data-model=\"editData.game.preloadingSceneId\"\n                            data-change=\"form.valid() && saveGameProps()\">\n                        <option value=\"\">--</option>\n                        <option\n                                data-disabled=\"item.id==editData.gameProps.startSceneId\"\n                                data-value=\"item.id\"\n                                data-for=\"item in editData.game._repository.getArray('Scene')\">\n                            {{item.name}}\n                        </option>\n                    </select>\n                </div>\n            </div>\n\n            <div class=\"row\">\n                <div class=\"cell\">\n                    {{i18n.startScene}}\n                </div>\n                <div class=\"cell\">\n                    <select data-model=\"editData.game.startSceneId\"\n                            data-change=\"form.valid() && saveGameProps()\">\n                        <option\n                                data-disabled=\"item.id==editData.gameProps.preloadingSceneId\"\n                                data-value=\"item.id\"\n                                data-for=\"item in editData.game._repository.getArray('Scene')\">\n                            {{item.name}}\n                        </option>\n                    </select>\n                </div>\n            </div>\n\n        </form>\n    </div>\n</app-collapsible>"

/***/ }),
/* 115 */
/***/ (function(module, exports) {

module.exports = "<app-collapsible\n        data-state=\"{\n            crud:{\n                create:createParticleSystem\n            },\n            title:i18n.particleSystems\n        }\">\n\n    <div data-transclusion=\"content\">\n        <div class=\"withPaddingLeft\">\n            <div class=\"table width100\">\n                <div class=\"row\"\n                     data-for=\"ps in editData.game._repository.getArray('ParticleSystem')\">\n\n                    <div class=\"cell\">\n                    <span class=\"inlineBlock withPaddingTop withPaddingBottom\">\n                        {{ps.name}}\n                    </span>\n                    </div>\n\n                    <div class=\"cell width1\">\n                        <div class=\"edit\" data-click=\"editParticleSystem(ps)\"></div>\n                    </div>\n                    <div class=\"cell width1\">\n                        <div class=\"delete\" data-click=\"deleteParticleSystem(ps)\"></div>\n                    </div>\n\n                </div>\n            </div>\n        </div>\n    </div>\n\n\n</app-collapsible>"

/***/ }),
/* 116 */
/***/ (function(module, exports) {

module.exports = "<app-collapsible\n        data-transclusion-id=\"scenes\"\n        data-state=\"{\n            crud: {\n                create:createScene\n            },\n            title: i18n.scenes\n        }\">\n    <div data-transclusion=\"content:#scenes\">\n        <div\n            class=\"withPaddingLeft\"\n            data-class=\"{\n                currScene:editData.currSceneInEdit==scene\n            }\"\n            data-for=\"scene in editData.game._repository.getArray('Scene')\"\n            data-click=\"setCurrentScene(scene)\"\n        >\n            <app-collapsible\n                    data-transclusion-id=\"currScene\"\n                    data-state=\"{\n                        crud: {\n                            edit:editScene,\n                            delete:deleteScene,\n                            editScript: editScript\n                        },\n                        object: scene,\n                        title: scene.name\n                    }\"\n                    >\n                <div data-transclusion=\"content:#currScene\">\n                    <div class=\"withPaddingLeft\">\n                        <app-collapsible\n                                data-transclusion-id=\"layers\"\n                                data-state=\"{\n                                    title: i18n.layers,\n                                    meta: scene,\n                                    crud: {\n                                        create: createLayer\n                                    }\n                                }\"\n                        >\n                            <div data-transclusion=\"content:#layers\">\n                                <div\n                                        data-click=\"setCurrLayer(layer)\"\n                                        data-for=\"layer in scene.layers\" class=\"withPaddingLeft\">\n                                    <app-collapsible\n                                            data-transclusion-id=\"currLayer\"\n                                            data-state=\"{\n                                                object: layer,\n                                                meta: scene,\n                                                crud: {\n                                                    edit:editLayer,\n                                                    delete:deleteLayer\n                                                },\n                                                title: layer.name\n                                            }\">\n                                                <div data-transclusion=\"content:#currLayer\">\n                                                    <div class=\"withPaddingLeft\">\n                                                        <div class=\"table width100\">\n                                                            <div\n                                                                data-class=\"\n                                                                {\n                                                                    currSceneGameObject: editData.currSceneGameObjectInEdit==gameObject\n                                                                }\"\n                                                                data-click=\"setCurrSceneGameObjectInEdit(gameObject)\"\n                                                                data-for=\"gameObject in layer.gameObjects\">\n\n                                                                <app-game-object-row\n                                                                        data-state=\"\n                                                                            {\n                                                                                gameObject: gameObject,\n                                                                                crud: {\n                                                                                     delete: deleteGameObject\n                                                                                },\n                                                                            }\"\n                                                                ></app-game-object-row>\n\n                                                            </div>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                    </app-collapsible>\n                                </div>\n                            </div>\n                        </app-collapsible>\n                    </div>\n                </div>\n            </app-collapsible>\n        </div>\n    </div>\n</app-collapsible>"

/***/ }),
/* 117 */
/***/ (function(module, exports) {

module.exports = "<app-collapsible\n        data-state=\"{\n            crud:{\n                create:createSound\n            },\n            title:i18n.sounds\n        }\">\n    <div data-transclusion=\"content\">\n        <div class=\"withPaddingLeft\">\n            <div class=\"table width100\">\n                <div class=\"row\"\n                     data-for=\"sound in editData.game._repository.getArray('Sound')\">\n\n                    <div class=\"cell\">\n                    <span class=\"inlineBlock withPaddingTop withPaddingBottom\">\n                        {{sound.name}}\n                    </span>\n                    </div>\n\n                    <div class=\"cell width1\">\n                        <div class=\"edit\" data-click=\"editSound(sound)\"></div>\n                    </div>\n                    <div class=\"cell width1\">\n                        <div class=\"delete\" data-click=\"deleteSound(sound)\"></div>\n                    </div>\n\n                </div>\n            </div>\n        </div>\n    </div>\n</app-collapsible>"

/***/ }),
/* 118 */
/***/ (function(module, exports) {

module.exports = "<app-collapsible\n        data-state=\"{\n            title: i18n.spriteSheets,\n            crud: {\n                create:createSpriteSheet\n            }\n        }\">\n    <div data-transclusion=\"content\">\n        <div class=\"withPaddingLeft\">\n            <div class=\"table width100\">\n                <div class=\"row\"\n                     data-for=\"spriteSheet in editData.game._repository.getArray('SpriteSheet')\">\n\n                    <div class=\"cell\">\n                        <img\n                            class=\"spriteSheetThumb\"\n                            data-attributes=\"{\n                                src:    editData.projectName+'/'+spriteSheet.resourcePath,\n                                width:  spriteSheet.width,\n                                height: spriteSheet.height\n                            }\"/>\n                    </div>\n                    <div class=\"cell\">\n                    <span class=\"inlineBlock withPaddingTop withPaddingBottom\">\n                        {{spriteSheet.name}}\n                    </span>\n                    </div>\n                    <div class=\"cell width1\">\n                        <div class=\"edit\" data-click=\"editSpriteSheet(spriteSheet)\"></div>\n                    </div>\n                    <div class=\"cell width1\">\n                        <div class=\"delete\" data-click=\"deleteSpriteSheet(spriteSheet)\"></div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</app-collapsible>"

/***/ }),
/* 119 */
/***/ (function(module, exports) {

module.exports = "<app-collapsible\n        data-state=\"{\n            title: i18n.userInterface\n        }\">\n\n    <div data-transclusion=\"content\">\n\n        <div class=\"withPaddingLeft\">\n            <div class=\"table width100\">\n                <div class=\"row\"\n                     data-for=\"ui in (editData.userInterfaceList && editData.userInterfaceList.rs)\">\n\n                    <div class=\"cell\">\n                        <span class=\"inlineBlock withPaddingTop withPaddingBottom\">{{ui.subType}}</span>\n                    </div>\n\n                </div>\n            </div>\n        </div>\n\n    </div>\n\n</app-collapsible>"

/***/ }),
/* 120 */
/***/ (function(module, exports) {

module.exports = "<app-collapsible\r\n        data-state=\"{\r\n            title: i18n.currGameObject\r\n        }\"\r\n        >\r\n\r\n    <div data-transclusion=\"content\">\r\n        <div\r\n                data-if=\"!editData.currSceneGameObjectInEdit.id\">\r\n            {{i18n.notSelected}}\r\n        </div>\r\n\r\n        <div\r\n                class=\"withPadding\"\r\n                data-if=\"editData.currSceneGameObjectInEdit.id\">\r\n            <h3 class=\"centerText\">\r\n                {{editData.currSceneGameObjectInEdit.type}}\r\n            </h3>\r\n\r\n            <div class=\"table width100\">\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"cell\">\r\n                        name\r\n                    </div>\r\n                    <div class=\"cell\">\r\n                        <input\r\n                                required\r\n                                datachange=\"editGameObject()\"\r\n                                class=\"width100\"\r\n                                data-model=\"editData.currSceneGameObjectInEdit.name\">\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"cell\">\r\n                        pos.x\r\n                    </div>\r\n                    <div class=\"cell\">\r\n                        <input\r\n                                data-change=\"editGameObject()\"\r\n                                type=\"number\"\r\n                                class=\"width100\"\r\n                                required\r\n                                data-model=\"editData.currSceneGameObjectInEdit.pos.x\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"cell\">\r\n                        pos.y\r\n                    </div>\r\n                    <div class=\"cell\">\r\n                        <input\r\n                                data-change=\"editGameObject()\"\r\n                                type=\"number\"\r\n                                class=\"width100\"\r\n                                required\r\n                                data-model=\"editData.currSceneGameObjectInEdit.pos.y\">\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"cell\">\r\n                        scale.x\r\n                    </div>\r\n                    <div class=\"cell\">\r\n                        <input\r\n                                data-change=\"editGameObject()\"\r\n                                type=\"number\"\r\n                                step=\"0.1\"\r\n                                class=\"width100\"\r\n                                required\r\n                                data-model=\"editData.currSceneGameObjectInEdit.scale.x\"/>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"cell\">\r\n                        scale.y\r\n                    </div>\r\n                    <div class=\"cell\">\r\n                        <input\r\n                                data-change=\"editGameObject()\"\r\n                                type=\"number\"\r\n                                step=\"0.1\"\r\n                                class=\"width100\"\r\n                                required\r\n                                data-model=\"editData.currSceneGameObjectInEdit.scale.y\"/>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"cell\">\r\n                        {{i18n.width}}\r\n                    </div>\r\n                    <div class=\"cell\">\r\n                        <input\r\n                                data-change=\"editGameObject()\"\r\n                                type=\"number\"\r\n                                class=\"width100\"\r\n                                step=\"1\"\r\n                                required\r\n                                data-model=\"editData.currSceneGameObjectInEdit.width\"/>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"cell\">\r\n                        {{i18n.height}}\r\n                    </div>\r\n                    <div class=\"cell\">\r\n                        <input\r\n                                data-change=\"editGameObject()\"\r\n                                type=\"number\"\r\n                                class=\"width100\"\r\n                                step=\"1\"\r\n                                required\r\n                                data-model=\"editData.currSceneGameObjectInEdit.height\"/>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"cell\">\r\n                        {{i18n.angle}}\r\n                    </div>\r\n                    <div class=\"cell\">\r\n                        <input\r\n                                data-change=\"editGameObject()\"\r\n                                type=\"number\"\r\n                                class=\"width100\"\r\n                                step=\"0.1\"\r\n                                required\r\n                                data-model=\"editData.currSceneGameObjectInEdit.angle\"/>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"cell\">\r\n                        alpha\r\n                    </div>\r\n                    <div class=\"cell\">\r\n                        <input\r\n                                data-change=\"editGameObject()\"\r\n                                type=\"number\"\r\n                                class=\"width100\"\r\n                                step=\"0.1\"\r\n                                required\r\n                                min=\"0\"\r\n                                max=\"1\"\r\n                                data-model=\"editData.currSceneGameObjectInEdit.alpha\"/>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"cell\">\r\n                        {{i18n.fixedToCamera}}\r\n                    </div>\r\n                    <div class=\"cell\">\r\n                        <input\r\n                                data-change=\"editGameObject()\"\r\n                                type=\"checkbox\"\r\n                                data-model=\"editData.currSceneGameObjectInEdit.fixedToCamera\"\r\n                        />\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"cell\">\r\n                        {{i18n.rigid}}\r\n                    </div>\r\n                    <div class=\"cell\">\r\n                        <input\r\n                                data-change=\"editGameObject()\"\r\n                                type=\"checkbox\"\r\n                                data-model=\"editData.currSceneGameObjectInEdit.rigid\"\r\n                        />\r\n                    </div>\r\n                </div>\r\n\r\n                <!--<div class=\"row\"-->\r\n                <!--v-if=\"editData.currSceneGameObjectInEdit.subType=='textField'\"-->\r\n                <!--&gt;-->\r\n                <!--<div class=\"cell\">-->\r\n                <!--{{i18n.text}}-->\r\n                <!--</div>-->\r\n                <!--<div class=\"cell\">-->\r\n                <!--<textarea-->\r\n                <!--class=\"width100\"-->\r\n                <!--v-on:keyup=\"updateEditText() || editGameObject()\"-->\r\n                <!--v-model=\"editData.currSceneGameObjectInEdit.text\"></textarea>-->\r\n                <!--</div>-->\r\n                <!--</div>-->\r\n\r\n                <!--<div class=\"row\"-->\r\n                <!--v-if=\"editData.currSceneGameObjectInEdit.subType=='textField'\"-->\r\n                <!--&gt;-->\r\n                <!--<div class=\"cell\">-->\r\n                <!--{{i18n.font}}-->\r\n                <!--</div>-->\r\n                <!--<div class=\"cell\">-->\r\n                <!--<select-->\r\n                <!--class=\"width100\"-->\r\n                <!--v-model=\"editData.currSceneGameObjectInEdit.fontId\"-->\r\n                <!--ng-change=\"editGameObjectFromRightMenu(editData.currSceneGameObjectInEdit)\"-->\r\n                <!--required-->\r\n                <!--&gt;-->\r\n                <!--<option :value=\"item.id\" v-for=\"item in editData.fontList.rs\">{{item.name}}</option>-->\r\n                <!--</select>-->\r\n                <!--</div>-->\r\n                <!--</div>-->\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n\r\n</app-collapsible>\r\n\r\n"

/***/ }),
/* 121 */
/***/ (function(module, exports) {

module.exports = "<app-collapsible\r\n    data-state=\"{title:i18n.currScene}\"\r\n>\r\n\r\n    <div data-transclusion=\"content\">\r\n        <div\r\n                data-if=\"!editData.currSceneInEdit.id\">\r\n            {{i18n.notSelected}}\r\n        </div>\r\n\r\n        <div class=\"withPadding\" data-if=\"editData.currSceneInEdit.id\">\r\n\r\n            <b class=\"centerText\">\r\n                {{i18n.scene}} : {{editData.currSceneInEdit.name}}\r\n            </b>\r\n\r\n            <div class=\"table width100\">\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"cell\">\r\n                        <label for=\"editData.currSceneInEdit.useBG\">{{i18n.useBG}}</label>\r\n                    </div>\r\n                    <div class=\"cell\">\r\n                        <input type=\"checkbox\"\r\n                               id=\"editData.currSceneInEdit.useBG\"\r\n                               data-model=\"editData.currSceneInEdit.useBG\"\r\n                               data-change=\"editScene()\"/>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row\" data-if=\"editData.currSceneInEdit.useBG\">\r\n                    <div class=\"cell\">\r\n                        {{i18n.colorBG}}\r\n                    </div>\r\n                    <div class=\"cell\">\r\n                        <app-color-picker\r\n                                data-state=\"{\r\n                                    model:editData.currSceneInEdit,\r\n                                    field: 'colorBG',\r\n\r\n                                }\"\r\n                        ></app-color-picker>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"cell\">\r\n                        <hr/>\r\n                    </div>\r\n                    <div class=\"cell\">\r\n                        <hr/>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"cell valign bold\">\r\n                        {{i18n.tileMap}}\r\n                    </div>\r\n                    <div class=\"cell eye\"></div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"cell valign\">\r\n                        tileMap.width\r\n                    </div>\r\n                    <div class=\"cell\">\r\n                        <input type=\"number\"\r\n                               min=\"0\"\r\n                               maxlength=\"3\"\r\n                               data-change=\"editScene()\"\r\n                               data-model=\"editData.currSceneInEdit.tileMap.width\"/>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"cell valign\">\r\n                        tileMap.height\r\n                    </div>\r\n                    <div class=\"cell\">\r\n                        <input type=\"number\"\r\n                               min=\"0\"\r\n                               maxlength=\"3\"\r\n                               data-change=\"editScene()\"\r\n                               data-model=\"editData.currSceneInEdit.tileMap.height\"/>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"cell\">\r\n                        {{i18n.selected}}\r\n                    </div>\r\n                    <div class=\"cell\">\r\n                        <div\r\n                            data-class=\"{\r\n                                inlineBlock:1,\r\n                                hoverOutline:1\r\n                            }\"\r\n                            data-style=\"{\r\n                                width:frameWidth+'px',\r\n                                verticalAlign:'middle',\r\n                                height:frameHeight+'px',\r\n                                backgroundImage:      'url('+editData.projectName+'/'+resourcePath+')',\r\n                                backgroundPositionX:  -framePosX+'px',\r\n                                backgroundPositionY:  -framePosY+'px',\r\n                                backgroundRepeat:     'no-repeat',\r\n                            }\"\r\n                        ></div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"cell\">\r\n                        {{i18n.spriteSheets}}\r\n                    </div>\r\n                    <div class=\"cell\">\r\n                        <select\r\n                                data-model=\"editData.currSceneInEdit.tileMap.spriteSheetId\"\r\n                                data-change=\"setTileMapSpriteSheet()\"\r\n                                >\r\n                            <option value=\"\">--</option>\r\n                            <option\r\n                                    data-for=\"item in editData.spriteSheetList.rs\"\r\n                                    data-value=\"item.id\"\r\n                                    >{{item.name}}</option>\r\n                        </select>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div\r\n                data-style=\"{\r\n                    width: frameWidth*numOfFramesH+'px',\r\n                    overflowX: 'auto'\r\n                }\"\r\n                >\r\n                <div data-class=\"{\r\n                        inlineBlock:true,\r\n                        selected:i==editData.currTileIndexInEdit,\r\n                        hoverOutline:1\r\n                     }\"\r\n                     data-style=\"{\r\n                        width:frameWidth+'px',\r\n                        verticalAlign:'middle',\r\n                        height:frameHeight+'px',\r\n                        backgroundImage:'url('+resourcePath+')',\r\n                        backgroundPositionX:   -framePosX+'px',\r\n                        backgroundPositionY:   -framePosY+'px',\r\n                        backgroundRepeat:     'no-repeat',\r\n                     }\"\r\n                     data-title=\"i\"\r\n                     data-click=\"setCurrSelectedTile(i)\"\r\n                     data-for=\"v,i in numOfFramesForSceneSpriteSheet\"\r\n                     ></div>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n\r\n\r\n</app-collapsible>"

/***/ }),
/* 122 */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel withPadding pointer\">\r\n\r\n    <div class=\"inlineBlock\" data-click=\"showBuildDialog()\">\r\n        {{i18n.build}}\r\n    </div>\r\n    <div class=\"inlineBlock\" data-click=\"run()\">\r\n        {{i18n.run}}\r\n    </div>\r\n    <div class=\"inlineBlock\" data-click=\"toExplorer()\">\r\n        {{i18n.explorer}}\r\n    </div>\r\n\r\n</div>"

/***/ }),
/* 123 */
/***/ (function(module, exports) {

module.exports = "\r\n<app-modal id=\"projectDialog\">\r\n    <div data-transclusion=\"content\">\r\n        <table class=\"width100\">\r\n            <tr>\r\n                <td>\r\n                    {{i18n.name}}\r\n                </td>\r\n                <td>\r\n                    <input\r\n                            required\r\n                            data-model=\"editData.currProjectInEdit.name\"/>\r\n                </td>\r\n            </tr>\r\n        </table>\r\n        <button data-click=\"createOrEditProject(editData.currProjectInEdit)\">\r\n            {{editData.currProjectInEdit.oldName?i18n.edit:i18n.create}}\r\n        </button>\r\n    </div>\r\n</app-modal>\r\n\r\n"

/***/ }),
/* 124 */
/***/ (function(module, exports) {

module.exports = "\r\n<div>\r\n    <div class=\"width50 marginAuto\">\r\n        <h3 class=\"centerText\">{{i18n.projects}}</h3>\r\n        <div class=\"table width100\">\r\n            <div\r\n                    data-for=\"p in editData.projects\"\r\n                    class=\"row hoverOnProjectRow\">\r\n                <div class=\"cell\">\r\n                    <div\r\n                            data-click=\"openProject(p)\"\r\n                            class=\"withPadding pointer\">\r\n                        {{p.name}}\r\n                    </div>\r\n                </div>\r\n                <div class=\"cell rightAlign\">\r\n                    <div class=\"edit\"\r\n                            data-click=\"editProject(p)\"\r\n                            ></div>\r\n                </div>\r\n                <div class=\"cell rightAlign\">\r\n                    <div\r\n                            data-click=\"deleteProject(p)\"\r\n                            class=\"delete\"></div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"cell\">\r\n                    <div class=\"withPadding\">\r\n                        <div class=\"add\"\r\n                                data-click=\"createProject()\"\r\n                                ></div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <app-project-dialog></app-project-dialog>\r\n\r\n</div>"

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(24);
module.exports = __webpack_require__(23);


/***/ })
/******/ ]);