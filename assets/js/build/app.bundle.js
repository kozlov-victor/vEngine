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
/******/ 	return __webpack_require__(__webpack_require__.s = 185);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _utils = __webpack_require__(17);

var _utils2 = _interopRequireDefault(_utils);

var _editData = __webpack_require__(8);

var _editData2 = _interopRequireDefault(_editData);

var _project = __webpack_require__(13);

var _project2 = _interopRequireDefault(_project);

var _fileSystem = __webpack_require__(38);

var _fileSystem2 = _interopRequireDefault(_fileSystem);

var _resource = __webpack_require__(16);

var _resource2 = _interopRequireDefault(_resource);

var _resourceHelper = __webpack_require__(37);

var _resourceHelper2 = _interopRequireDefault(_resourceHelper);

var _i18n = __webpack_require__(9);

var _i18n2 = _interopRequireDefault(_i18n);

var _httpClient = __webpack_require__(12);

var _httpClient2 = _interopRequireDefault(_httpClient);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BaseComponent = function BaseComponent() {
    _classCallCheck(this, BaseComponent);

    this.editData = _editData2.default;
    this.restProject = _project2.default;
    this.restFileSystem = _fileSystem2.default;
    this.resourceHelper = _resourceHelper2.default;
    this.restResource = _resource2.default;
    this.i18n = _i18n2.default;
    this.http = _httpClient2.default;
    this.form = { valid: function valid() {
            return true;
        } };
    this.utils = _utils2.default;
};

exports.default = BaseComponent;

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'E:\\vEngine\\client-app\\engine\\core\\mathEx.js'");

/***/ }),
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ (function(module, exports) {

"use strict";
throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'E:\\vEngine\\client-app\\engine\\model\\generic\\gameObjectProto.js'");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _gameObjectProto = __webpack_require__(7);

var _gameObjectProto2 = _interopRequireDefault(_gameObjectProto);

var _spriteSheet = __webpack_require__(15);

var _spriteSheet2 = _interopRequireDefault(_spriteSheet);

var _frameAnimation = __webpack_require__(28);

var _frameAnimation2 = _interopRequireDefault(_frameAnimation);

var _scene = __webpack_require__(32);

var _scene2 = _interopRequireDefault(_scene);

var _layer = __webpack_require__(30);

var _layer2 = _interopRequireDefault(_layer);

var _font = __webpack_require__(27);

var _font2 = _interopRequireDefault(_font);

var _sound = __webpack_require__(33);

var _sound2 = _interopRequireDefault(_sound);

var _particleSystem = __webpack_require__(31);

var _particleSystem2 = _interopRequireDefault(_particleSystem);

var _game = __webpack_require__(110);

var _game2 = _interopRequireDefault(_game);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var res = {}; /*global localStorage:true*/
/*global window:true*/

res.reset = function (gameProps) {

    var g = new _game2.default();
    g.fromJSON(gameProps || { width: 1, height: 1 });
    res.game = g;
    res.editTileMapModeOn = false;

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
    res.currTileIndexInEdit = null;
    res.commonBehaviourProto = [];

    res.debugFrameUrl = '';
    res.scriptEditorUrl = '';

    res.tileMapPosY = res.tileMapPosX = 0;

    res.projectName = '';
    res.projects = [];

    try {
        res.buildOpts = JSON.parse(localStorage.buildOpts);
    } catch (e) {
        res.buildOpts = {
            debug: false,
            minify: false,
            windowed: false,
            embedResources: false
        };
    }
};

res.reset();

window.editData = res;

exports.default = res;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

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
        actions: 'actions',
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
        minify: 'minify',
        windowed: 'windowed',
        embedResources: 'embed resources',
        stop: 'stop',
        addGameObject: 'add game object',
        nothingToAdd: 'nothing to add',
        from: 'from',
        to: 'to',
        fonts: 'fonts',
        font: 'font',
        text: 'text',
        commonBehaviour: 'common behaviour',
        unselect: 'unselect',
        groupName: 'group name',
        noFont: 'Create at least one font firstly',
        selectFont: 'select font',
        isDefault: 'is default',
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
        objectAlreadyAdded: 'object is already added',
        popupBlocked: 'popup window is blocked by browser',
        tryAgain: 'try again',
        unset: 'unset',
        gravityConstant: 'gravity constant',
        gravityConstantTitle: 'acceleration in pixels per second'
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
/* 10 */,
/* 11 */,
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
/*global XMLHttpRequest:true*/
/*global FormData:true*/
/*global RF:true*/
var noop = function noop() {};

var objectToQuery = function objectToQuery(o) {
    if (!o) return '';
    if (o instanceof window.FormData) return o;
    var paramsArr = [];
    if (o === null || o === undefined || typeof o === 'string' || typeof o === 'number') return o;
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
    if (data.data && data.method === 'get') data.url += '?' + objectToQuery(data.data);
    var xhr = new XMLHttpRequest();
    var resolveFn = noop,
        rejectFn = noop;
    var promise = new Promise(function (resolve, reject) {
        resolveFn = resolve;
        rejectFn = reject;
    });
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200 || xhr.status === 0) {
                var resp = xhr.responseText;
                var contentType = xhr.getResponseHeader("Content-Type") || '';
                if (contentType.toLowerCase().indexOf('json') > -1) resp = JSON.parse(resp);
                if (data.success) {
                    data.success(resp);
                    if (window.RF) RF.digest(); // todo separate
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
        if (data.requestType !== 'multipart/form-data') // at this case header needs to be auto generated
            xhr.setRequestHeader("Content-Type", data.requestType);
    } else {
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    }
    if (data.requestType === 'application/json') data.data = data.data && JSON.stringify(data.data);
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
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _httpClient = __webpack_require__(12);

var _httpClient2 = _interopRequireDefault(_httpClient);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Project = function () {
    function Project() {
        _classCallCheck(this, Project);
    }

    Project.getAll = function getAll(callback) {
        return _httpClient2.default.get('/project/getAll', {}, callback);
    };

    Project.create = function create(projectName, callback) {
        return _httpClient2.default.post('/project/create', { projectName: projectName }, callback);
    };

    Project.exist = function exist(projectName, callback) {
        return _httpClient2.default.post('/project/exist', { projectName: projectName }, callback);
    };

    return Project;
}();

exports.default = Project;

/***/ }),
/* 14 */,
/* 15 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'E:\\vEngine\\client-app\\engine\\model\\generic\\spriteSheet.js'");

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _httpClient = __webpack_require__(12);

var _httpClient2 = _interopRequireDefault(_httpClient);

var _editData = __webpack_require__(8);

var _editData2 = _interopRequireDefault(_editData);

var _utils = __webpack_require__(17);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Resource = function () {
    function Resource() {
        _classCallCheck(this, Resource);
    }

    Resource.getAll = function getAll(projectName) {
        return _httpClient2.default.post('/resource/getAll', { projectName: projectName });
    };

    Resource.save = function save(model, callback, opts) {

        var allModels = __webpack_require__(48);
        if (!allModels[model.type]) throw 'Unregistered type ' + model.type + ', export this type in \'engine/model/all\'!';
        var Class = allModels[model.type];

        var modelSample = new Class(_editData2.default.game);
        if (model.toJSON) model = model.toJSON(opts);

        Object.keys(model).forEach(function (key) {
            if (['name', 'type', 'id'].includes(key)) return;
            if (_utils2.default.deepEqual(model[key], modelSample[key])) delete model[key];
        });

        return _httpClient2.default.post('/resource/save', { projectName: _editData2.default.projectName, model: model }, callback);
    };

    Resource.saveGameProps = function saveGameProps(model, callback) {
        return _httpClient2.default.post('/resource/saveGameProps', { projectName: _editData2.default.projectName, model: model }, callback);
    };

    Resource.remove = function remove(model, callback) {
        return _httpClient2.default.post('/resource/remove', { projectName: _editData2.default.projectName, model: {
                id: model.id,
                type: model.type
            } }, callback);
    };

    Resource.saveTile = function saveTile(model, callback) {
        return _httpClient2.default.post('/resource/saveTile', {
            projectName: _editData2.default.projectName,
            model: model
        }, callback);
    };

    return Resource;
}();

exports.default = Resource;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _mathEx = __webpack_require__(3);

var _mathEx2 = _interopRequireDefault(_mathEx);

var _editData = __webpack_require__(8);

var _editData2 = _interopRequireDefault(_editData);

var _resource = __webpack_require__(16);

var _resource2 = _interopRequireDefault(_resource);

var _fileSystem = __webpack_require__(38);

var _fileSystem2 = _interopRequireDefault(_fileSystem);

var _i18n = __webpack_require__(9);

var _i18n2 = _interopRequireDefault(_i18n);

var _gameObjectProto = __webpack_require__(7);

var _gameObjectProto2 = _interopRequireDefault(_gameObjectProto);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /*global Blob:true*/
/*global atob:true*/

var Utils = function () {
    function Utils() {
        _classCallCheck(this, Utils);
    }

    Utils.getGameObjectCss = function getGameObjectCss(gameObj) {
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
    };

    Utils.getCoords = function getCoords(elSelector, event) {
        var el = document.querySelector(elSelector);
        var clientRect = el.getBoundingClientRect();
        var x = event.clientX - clientRect.left;
        var y = event.clientY - clientRect.top;
        return { x: x, y: y };
    };

    Utils.tileMapWidth = function tileMapWidth() {
        if (!_editData2.default.currSceneInEdit.tileMap) return 0;
        return _editData2.default.currSceneInEdit.tileMap.width || 0;
    };

    Utils.tileMapHeight = function tileMapHeight() {
        if (!_editData2.default.currSceneInEdit.tileMap) return 0;
        return _editData2.default.currSceneInEdit.tileMap.height || 0;
    };

    Utils.tileFrameWidth = function tileFrameWidth() {
        if (!_editData2.default.currSceneInEdit.tileMap) return null;
        if (!_editData2.default.currSceneInEdit.tileMap.spriteSheet) return null;
        return _editData2.default.currSceneInEdit.tileMap.spriteSheet._frameWidth;
    };

    Utils.tileFrameHeight = function tileFrameHeight() {
        if (!_editData2.default.currSceneInEdit.tileMap) return null;
        if (!_editData2.default.currSceneInEdit.tileMap.spriteSheet) return null;
        return _editData2.default.currSceneInEdit.tileMap.spriteSheet._frameHeight;
    };

    Utils.tileFramePosX = function tileFramePosX(i) {
        if (!_editData2.default.currSceneInEdit.tileMap) return null;
        if (!_editData2.default.currSceneInEdit.tileMap.spriteSheet) return null;
        return _editData2.default.currSceneInEdit.tileMap.spriteSheet.getFramePosX(i);
    };

    Utils.tileFramePosY = function tileFramePosY(i) {
        if (!_editData2.default.currSceneInEdit.tileMap) return null;
        if (!_editData2.default.currSceneInEdit.tileMap.spriteSheet) return null;
        return _editData2.default.currSceneInEdit.tileMap.spriteSheet.getFramePosY(i);
    };

    Utils.tileResourcePath = function tileResourcePath() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { strict: false };

        if (!_editData2.default.currSceneInEdit.tileMap) return null;
        if (!_editData2.default.currSceneInEdit.tileMap.spriteSheet) return null;
        if (!_editData2.default.currSceneInEdit.tileMap.spriteSheet.resourcePath) return null;
        if (opts.strict && _editData2.default.currTileIndexInEdit == null) return;
        return 'url(' + _editData2.default.projectName + '/' + _editData2.default.currSceneInEdit.tileMap.spriteSheet.resourcePath + ')';
    };

    Utils.tileNumOfFramesH = function tileNumOfFramesH() {
        if (!_editData2.default.currSceneInEdit.tileMap) return null;
        if (!_editData2.default.currSceneInEdit.tileMap.spriteSheet) return null;
        return _editData2.default.currSceneInEdit.tileMap.spriteSheet.numOfFramesH;
    };

    Utils.calcZoom = function calcZoom(gameObject) {
        var sampleSize = 30;
        if (!gameObject) gameObject = { width: sampleSize, height: sampleSize };
        var maxSize = gameObject.width > gameObject.height ? gameObject.width : gameObject.height;
        return maxSize > sampleSize ? sampleSize / maxSize : 1;
    };

    Utils.merge = function merge(a, b) {
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
    };

    Utils.hexToRgb = function hexToRgb(hex) {
        if (!hex) return { r: 0, g: 0, b: 0 };
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16) || 0,
            g: parseInt(result[2], 16) || 0,
            b: parseInt(result[3], 16) || 0
        } : { r: 0, g: 0, b: 0 };
    };

    Utils.rgbToHex = function rgbToHex(col) {
        if (!col) return '#000000';
        var r = +col.r,
            g = +col.g,
            b = +col.b;
        return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    };

    Utils.rgbToCss = function rgbToCss(objRGB) {
        return 'rgb(' + objRGB.r + ',' + objRGB.g + ',' + objRGB.b + ')';
    };

    Utils.dataURItoBlob = function dataURItoBlob(dataURI) {
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
    };

    Utils.range = function range(rFr, rTo, step) {
        if (!step) step = 1;
        var arr = [],
            i = void 0;
        if (rTo === undefined) {
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
    };

    Utils._createAceCompleter = function _createAceCompleter() {
        var result = [];
        var res = {};
        var objs = ['gameObject'];
        objs.forEach(function (go) {
            var GObjClass = _gameObjectProto2.default;
            var goObj = new GObjClass(_editData2.default.game);
            for (var key in goObj) {
                if (key.indexOf('_') === 0) continue;
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
    };

    Utils._waitForFrameAndDo = function _waitForFrameAndDo(file, path) {
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
    };

    Utils.getArray = function getArray(num) {
        if (!num) return [];
        var res = [];
        for (var i = 0; i < num; i++) {
            res.push(i);
        }
        return res;
    };

    Utils.size = function size(obj) {
        if (!obj) return 0;
        return Object.keys(obj).length;
    };

    Utils.deleteModel = function deleteModel(model, callback) {
        return new Promise(function (resolve) {
            window.confirmEx(_i18n2.default.getAll().confirmQuestion(model), function () {
                _resource2.default.remove(model, callback);
                _editData2.default.game.repository.removeObject(model);
                resolve();
            });
        });
    };

    Utils.eachGameObject = function eachGameObject(callback) {
        _editData2.default.game.repository.getArray('GameObjectProto').forEach(function (go) {
            callback(go);
        });
        _editData2.default.game.repository.getArray('Scene').forEach(function (scene) {
            scene.layers.forEach(function (layer) {
                layer.gameObjects.forEach(function (go) {
                    callback(go);
                });
            });
        });
    };

    Utils.openEditor = function openEditor(path) {
        var _this2 = this;

        _editData2.default.scriptEditorUrl = path;
        _fileSystem2.default.readFile(path, function (file) {
            _this2._waitForFrameAndDo(file, path);
        });
    };

    Utils.assign = function assign(model, property, value) {
        model && (model[property] = value);
    };

    Utils.capitalise = function capitalise(s) {
        return s[0].toUpperCase() + s.substr(1);
    };

    Utils.deepEqual = function deepEqual(x, y) {
        var _checkCache = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

        //if (isNaN(x) && isNaN(y)) return true;
        if (x && y && (typeof x === 'undefined' ? 'undefined' : _typeof(x)) === 'object' && (typeof y === 'undefined' ? 'undefined' : _typeof(y)) === 'object') {
            if (x === y) return true;
            if (_checkCache.indexOf(x) > -1 || _checkCache.indexOf(y) > -1) return true;
            _checkCache.push(x);
            _checkCache.push(y);
            return Object.keys(x).length === Object.keys(y).length && Object.keys(x).reduce(function (isEqual, key) {
                return isEqual && Utils.deepEqual(x[key], y[key], _checkCache);
            }, true);
        } else {
            return x === y;
        }
    };

    return Utils;
}();

exports.default = Utils;

/***/ }),
/* 18 */,
/* 19 */
/***/ (function(module, exports) {

"use strict";
throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'E:\\vEngine\\client-app\\engine\\core\\misc\\consts.js'");

/***/ }),
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */
/***/ (function(module, exports) {

"use strict";
throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'E:\\vEngine\\client-app\\engine\\model\\generic\\font.js'");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

"use strict";
throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'E:\\vEngine\\client-app\\engine\\model\\generic\\frameAnimation.js'");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'E:\\vEngine\\client-app\\engine\\model\\generic\\gameObject.js'");

/***/ }),
/* 30 */
/***/ (function(module, exports) {

"use strict";
throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'E:\\vEngine\\client-app\\engine\\model\\generic\\layer.js'");

/***/ }),
/* 31 */
/***/ (function(module, exports) {

"use strict";
throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'E:\\vEngine\\client-app\\engine\\model\\generic\\particleSystem.js'");

/***/ }),
/* 32 */
/***/ (function(module, exports) {

"use strict";
throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'E:\\vEngine\\client-app\\engine\\model\\generic\\scene.js'");

/***/ }),
/* 33 */
/***/ (function(module, exports) {

"use strict";
throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'E:\\vEngine\\client-app\\engine\\model\\generic\\sound.js'");

/***/ }),
/* 34 */
/***/ (function(module, exports) {

"use strict";
throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'E:\\vEngine\\client-app\\engine\\model\\generic\\tileMap.js'");

/***/ }),
/* 35 */
/***/ (function(module, exports) {

"use strict";
throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'E:\\vEngine\\client-app\\engine\\model\\generic\\ui\\textField.js'");

/***/ }),
/* 36 */
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
        document = global.document,
        addEventListener = 'addEventListener',
        isIE8 = global.attachEvent && !global[addEventListener],
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
        // It also adds event listeners for _mouse/touch events,
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
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _editData = __webpack_require__(8);

var _editData2 = _interopRequireDefault(_editData);

var _resource = __webpack_require__(16);

var _resource2 = _interopRequireDefault(_resource);

var _project = __webpack_require__(13);

var _project2 = _interopRequireDefault(_project);

var _commonBehaviour = __webpack_require__(50);

var _commonBehaviour2 = _interopRequireDefault(_commonBehaviour);

var _textField = __webpack_require__(35);

var _textField2 = _interopRequireDefault(_textField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /*global RF:true*/
/*global sessionStorage:true*/


var ResourceHelper = function () {
    function ResourceHelper() {
        _classCallCheck(this, ResourceHelper);
    }

    ResourceHelper.loadProject = function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(projectName) {
            var exist, allData, scenes;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return _project2.default.exist(projectName);

                        case 2:
                            exist = _context.sent;

                            if (exist) {
                                _context.next = 9;
                                break;
                            }

                            delete sessionStorage.projectName;
                            RF.Router.navigateTo('explorer');
                            return _context.abrupt('return', false);

                        case 9:
                            document.title = projectName;
                            sessionStorage.projectName = projectName;
                            _editData2.default.reset();
                            _context.next = 14;
                            return _resource2.default.getAll(projectName);

                        case 14:
                            allData = _context.sent;

                            _editData2.default.reset(allData.gameProps);
                            _editData2.default.projectName = projectName;
                            _editData2.default.commonBehaviourProtos = allData.commonBehaviourProtos.map(function (it) {
                                return new _commonBehaviour2.default(_editData2.default.game).fromJSON(it);
                            });
                            _editData2.default.game.repository.setDescriptions(allData.repository);

                            _editData2.default.ui = [function () {
                                var t = new _textField2.default(_editData2.default.game);
                                t.name = 'text field';
                                t.id = t.type + '_1';
                                var font = _editData2.default.game.repository.getFirst('Font');
                                if (font) t.setFont(font);
                                _editData2.default.game.repository.addDescription(t.toJSON(), t.type);
                                return t;
                            }()];

                            scenes = _editData2.default.game.repository.getArray('Scene');

                            _editData2.default.currSceneInEdit = scenes[0];
                            _editData2.default.currLayerInEdit = scenes[0] && scenes[0].layers[0];
                            RF.Router.navigateTo('editor');

                        case 24:
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
    }();

    return ResourceHelper;
}();

exports.default = ResourceHelper;


window.e = _editData2.default;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _httpClient = __webpack_require__(12);

var _httpClient2 = _interopRequireDefault(_httpClient);

var _editData = __webpack_require__(8);

var _editData2 = _interopRequireDefault(_editData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FileSystem = function () {
    function FileSystem() {
        _classCallCheck(this, FileSystem);
    }

    FileSystem.createFile = function createFile(path, content, callback) {
        return _httpClient2.default.post('/fileSystem/createFile', {
            path: path,
            content: content,
            projectName: _editData2.default.projectName
        }, callback);
    };

    FileSystem.uploadFile = function uploadFile(file, params, callback) {
        params = params || {};
        params.projectName = _editData2.default.projectName;
        return _httpClient2.default.postMultiPart('/fileSystem/uploadFile', file, params, callback);
    };

    FileSystem.removeFile = function removeFile(path, callback) {
        return _httpClient2.default.post('/fileSystem/removeFile', {
            path: path,
            projectName: _editData2.default.projectName
        }, callback);
    };

    FileSystem.readFile = function readFile(path, callback) {
        return _httpClient2.default.post('/fileSystem/readFile', {
            path: path,
            projectName: _editData2.default.projectName
        }, callback);
    };

    FileSystem.renameFolder = function renameFolder(oldName, newName, callback) {
        return _httpClient2.default.post('/fileSystem/renameFolder', { oldName: oldName, newName: newName }, callback);
    };

    FileSystem.deleteFolder = function deleteFolder(name, callback) {
        return _httpClient2.default.post('/fileSystem/deleteFolder', { name: name }, callback);
    };

    return FileSystem;
}();

exports.default = FileSystem;

/***/ }),
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */
/***/ (function(module, exports) {

"use strict";
throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'E:\\vEngine\\client-app\\engine\\core\\misc\\polyfills.js'");

/***/ }),
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */
/***/ (function(module, exports) {

"use strict";
throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'E:\\vEngine\\client-app\\engine\\model\\all.js'");

/***/ }),
/* 49 */,
/* 50 */
/***/ (function(module, exports) {

"use strict";
throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'E:\\vEngine\\client-app\\engine\\model\\generic\\commonBehaviour.js'");

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(42);

__webpack_require__(54);

__webpack_require__(36);

__webpack_require__(55);

var _modal = __webpack_require__(63);

var _modal2 = _interopRequireDefault(_modal);

var _collapsible = __webpack_require__(58);

var _collapsible2 = _interopRequireDefault(_collapsible);

var _alertDialog = __webpack_require__(56);

var _alertDialog2 = _interopRequireDefault(_alertDialog);

var _confirmDialog = __webpack_require__(61);

var _confirmDialog2 = _interopRequireDefault(_confirmDialog);

var _inputFile = __webpack_require__(62);

var _inputFile2 = _interopRequireDefault(_inputFile);

var _colorPicker = __webpack_require__(59);

var _colorPicker2 = _interopRequireDefault(_colorPicker);

var _colorPickerDialog = __webpack_require__(60);

var _colorPickerDialog2 = _interopRequireDefault(_colorPickerDialog);

var _anglePicker = __webpack_require__(57);

var _anglePicker2 = _interopRequireDefault(_anglePicker);

var _draggableDirective = __webpack_require__(64);

var _draggableDirective2 = _interopRequireDefault(_draggableDirective);

__webpack_require__(97);

var _resourceHelper = __webpack_require__(37);

var _resourceHelper2 = _interopRequireDefault(_resourceHelper);

var _explorer = __webpack_require__(95);

var _explorer2 = _interopRequireDefault(_explorer);

var _editor = __webpack_require__(80);

var _editor2 = _interopRequireDefault(_editor);

var _projectDialog = __webpack_require__(94);

var _projectDialog2 = _interopRequireDefault(_projectDialog);

var _gameProps = __webpack_require__(84);

var _gameProps2 = _interopRequireDefault(_gameProps);

var _particleSystems = __webpack_require__(85);

var _particleSystems2 = _interopRequireDefault(_particleSystems);

var _sounds = __webpack_require__(87);

var _sounds2 = _interopRequireDefault(_sounds);

var _fonts = __webpack_require__(82);

var _fonts2 = _interopRequireDefault(_fonts);

var _spriteSheets = __webpack_require__(88);

var _spriteSheets2 = _interopRequireDefault(_spriteSheets);

var _gameObjects = __webpack_require__(83);

var _gameObjects2 = _interopRequireDefault(_gameObjects);

var _scenes = __webpack_require__(86);

var _scenes2 = _interopRequireDefault(_scenes);

var _userInterface = __webpack_require__(89);

var _userInterface2 = _interopRequireDefault(_userInterface);

var _topPanel = __webpack_require__(93);

var _topPanel2 = _interopRequireDefault(_topPanel);

var _popupBlocked = __webpack_require__(92);

var _popupBlocked2 = _interopRequireDefault(_popupBlocked);

var _scriptEditor = __webpack_require__(67);

var _scriptEditor2 = _interopRequireDefault(_scriptEditor);

var _sceneCentralPanel = __webpack_require__(66);

var _sceneCentralPanel2 = _interopRequireDefault(_sceneCentralPanel);

var _sceneCursor = __webpack_require__(65);

var _sceneCursor2 = _interopRequireDefault(_sceneCursor);

var _sceneRightPanel = __webpack_require__(91);

var _sceneRightPanel2 = _interopRequireDefault(_sceneRightPanel);

var _gameObjectRightPanel = __webpack_require__(90);

var _gameObjectRightPanel2 = _interopRequireDefault(_gameObjectRightPanel);

var _gameObjectRow = __webpack_require__(81);

var _gameObjectRow2 = _interopRequireDefault(_gameObjectRow);

var _dialogs = __webpack_require__(70);

var _dialogs2 = _interopRequireDefault(_dialogs);

var _particleSystemDialog = __webpack_require__(75);

var _particleSystemDialog2 = _interopRequireDefault(_particleSystemDialog);

var _soundDialog = __webpack_require__(78);

var _soundDialog2 = _interopRequireDefault(_soundDialog);

var _fontDialog = __webpack_require__(71);

var _fontDialog2 = _interopRequireDefault(_fontDialog);

var _spriteSheetDialog = __webpack_require__(79);

var _spriteSheetDialog2 = _interopRequireDefault(_spriteSheetDialog);

var _gameObjectDialog = __webpack_require__(73);

var _gameObjectDialog2 = _interopRequireDefault(_gameObjectDialog);

var _sceneDialog = __webpack_require__(77);

var _sceneDialog2 = _interopRequireDefault(_sceneDialog);

var _layerDialog = __webpack_require__(74);

var _layerDialog2 = _interopRequireDefault(_layerDialog);

var _particleSystemPreviewDialog = __webpack_require__(76);

var _particleSystemPreviewDialog2 = _interopRequireDefault(_particleSystemPreviewDialog);

var _frameAnimationDialog = __webpack_require__(72);

var _frameAnimationDialog2 = _interopRequireDefault(_frameAnimationDialog);

var _commonBehaviourDialog = __webpack_require__(69);

var _commonBehaviourDialog2 = _interopRequireDefault(_commonBehaviourDialog);

var _buildDialog = __webpack_require__(68);

var _buildDialog2 = _interopRequireDefault(_buildDialog);

__webpack_require__(140);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

RF.registerDirectives([_draggableDirective2.default]);
/*global RF:true*/
/*global BUILD_AT:true*/
/*global sessionStorage:true*/
/*global regeneratorRuntime:true*/

RF.registerComponents([_modal2.default, _collapsible2.default, _alertDialog2.default, _confirmDialog2.default, _inputFile2.default, _colorPicker2.default, _anglePicker2.default, _colorPickerDialog2.default, _explorer2.default, _projectDialog2.default, _editor2.default, _gameProps2.default, _particleSystems2.default, _sounds2.default, _fonts2.default, _spriteSheets2.default, _gameObjects2.default, _scenes2.default, _userInterface2.default, _topPanel2.default, _popupBlocked2.default, _scriptEditor2.default, _sceneCentralPanel2.default, _sceneRightPanel2.default, _gameObjectRightPanel2.default, _dialogs2.default, _particleSystemDialog2.default, _gameObjectRow2.default, _soundDialog2.default, _fontDialog2.default, _spriteSheetDialog2.default, _gameObjectDialog2.default, _sceneDialog2.default, _layerDialog2.default, _buildDialog2.default, _sceneCursor2.default, _particleSystemPreviewDialog2.default, _frameAnimationDialog2.default, _commonBehaviourDialog2.default]);

RF.Router.setup({
    explorer: _explorer2.default,
    editor: _editor2.default
});

RF.applyBindings('body');
if (sessionStorage.projectName) {
    _resourceHelper2.default.loadProject(sessionStorage.projectName);
} else RF.Router.navigateTo('explorer');

console.log('built at: ' + new Date(+1515339828911));

/***/ }),
/* 52 */
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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(134)(module)))

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var draggable = exports.draggable = function draggable(el, objVal) {

    var draggableContainer = el.closest('[data-draggable-container]');
    if (!draggableContainer) throw '[data-draggable-container] not specified';

    var draggedInfo = null;
    var isMousePressed = false;
    el.addEventListener('mousedown', function (e) {
        var rect = el.getBoundingClientRect();
        draggedInfo = { el: el, offsetX: e.screenX - rect.left, offsetY: e.screenY - rect.top };
        isMousePressed = true;
    });

    var onDragEnd = function onDragEnd() {
        isMousePressed = false;
        if (!(draggedInfo && draggedInfo.pos)) return;
        objVal.onDragEnd && objVal.onDragEnd(objVal.target, draggedInfo.pos);
        draggedInfo = null;
    };

    draggableContainer.addEventListener('mouseup', function (e) {
        onDragEnd();
    });
    document.addEventListener('mouseleave', function (e) {
        onDragEnd();
    });
    draggableContainer.addEventListener('mousemove', function (e) {
        if (!draggedInfo) return;
        e.preventDefault();
        e.stopPropagation();
        var _isMousePressed = 'buttons' in e && e.buttons == 1 || isMousePressed;
        if (!_isMousePressed) {
            draggedInfo = null;
            return;
        }
        var el = draggedInfo.el;
        var clientRect = draggableContainer.getBoundingClientRect();
        var x = ~~(e.screenX - clientRect.left - draggedInfo.offsetX);
        var y = ~~(e.screenY - clientRect.top - draggedInfo.offsetY);
        var newCoords = { x: x, y: y };
        if (objVal.onDragMove) objVal.onDragMove(objVal.target, newCoords);
        draggedInfo.pos = draggedInfo.pos || {};
        draggedInfo.pos.x = x;
        draggedInfo.pos.y = y;
        el.style.left = x + 'px';
        el.style.top = y + 'px';
    });
};

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (!Array.prototype.findIndex) {
    Array.prototype.findIndex = function (obj) {
        return this.indexOf(obj);
    };
}

if (!Array.prototype.includes) {
    Array.prototype.includes = function (obj) {
        return this.indexOf(obj) > -1;
    };
}

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/******/(function (modules) {
    // webpackBootstrap
    /******/ // The module cache
    /******/var installedModules = {};
    /******/
    /******/ // The require function
    /******/function __webpack_require__(moduleId) {
        /******/
        /******/ // Check if module is in cache
        /******/if (installedModules[moduleId]) {
            /******/return installedModules[moduleId].exports;
            /******/
        }
        /******/ // Create a new module (and put it into the cache)
        /******/var module = installedModules[moduleId] = {
            /******/i: moduleId,
            /******/l: false,
            /******/exports: {}
            /******/ };
        /******/
        /******/ // Execute the module function
        /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/
        /******/ // Flag the module as loaded
        /******/module.l = true;
        /******/
        /******/ // Return the exports of the module
        /******/return module.exports;
        /******/
    }
    /******/
    /******/
    /******/ // expose the modules object (__webpack_modules__)
    /******/__webpack_require__.m = modules;
    /******/
    /******/ // expose the module cache
    /******/__webpack_require__.c = installedModules;
    /******/
    /******/ // identity function for calling harmony imports with the correct context
    /******/__webpack_require__.i = function (value) {
        return value;
    };
    /******/
    /******/ // define getter function for harmony exports
    /******/__webpack_require__.d = function (exports, name, getter) {
        /******/if (!__webpack_require__.o(exports, name)) {
            /******/Object.defineProperty(exports, name, {
                /******/configurable: false,
                /******/enumerable: true,
                /******/get: getter
                /******/ });
            /******/
        }
        /******/
    };
    /******/
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/__webpack_require__.n = function (module) {
        /******/var getter = module && module.__esModule ?
        /******/function getDefault() {
            return module['default'];
        } :
        /******/function getModuleExports() {
            return module;
        };
        /******/__webpack_require__.d(getter, 'a', getter);
        /******/return getter;
        /******/
    };
    /******/
    /******/ // Object.prototype.hasOwnProperty.call
    /******/__webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    };
    /******/
    /******/ // __webpack_public_path__
    /******/__webpack_require__.p = "";
    /******/
    /******/ // Load entry module and return exports
    /******/return __webpack_require__(__webpack_require__.s = 18);
    /******/
})(
/************************************************************************/
/******/[
/* 0 */
/***/function (module, exports, __webpack_require__) {

    "use strict";

    exports.__esModule = true;

    var _miscUtils = __webpack_require__(1);

    var _miscUtils2 = _interopRequireDefault(_miscUtils);

    var _domUtils = __webpack_require__(2);

    var _domUtils2 = _interopRequireDefault(_domUtils);

    var _expressionEngine = __webpack_require__(6);

    var _expressionEngine2 = _interopRequireDefault(_expressionEngine);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { 'default': obj };
    }

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
            this.transclusionChildren = null;
            this.disableParentScopeEvaluation = false;
            this.name = name;
            this.node = node;
            this.modelView = modelView;
            this.commonWatchers = [];
            this.ifAndShow_watchers = []; // watchers for directives if and show
            this.loopWatchers = []; // watchers for loop
            this.id = _miscUtils2['default'].getUID();
            this.domId = null;
            _domUtils2['default'].setAttribute(node, 'data-component-id', this.id);
            this.isWatchEnable = true;
            this.isMounted = false;
            this.isShown = false;
            this.stateExpression = null;
            _domUtils2['default'].nodeListToArray(_domUtils2['default'].querySelectorAll(this.node, '*')).forEach(function (el) {
                _domUtils2['default'].setAttribute(el, 'data-component-id', _this.id);
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

        Component.prototype.addWatcher = function addWatcher(expression, listenerFn, ifExpressionsList, watchersArrName) {
            var watcherFn = _expressionEngine2['default'].getExpressionFn(expression);
            watchersArrName = watchersArrName || 'commonWatchers';
            this[watchersArrName].push({
                expression: expression,
                watcherFn: watcherFn,
                listenerFn: listenerFn,
                component: this,
                ifExpressionsList: ifExpressionsList
            });
            listenerFn(_expressionEngine2['default'].runExpressionFn(watcherFn, this));
        };

        Component.prototype.collectTransclusionChildren = function collectTransclusionChildren() {
            var componentIds = {};
            var el = this.node;
            var thisId = _domUtils2['default'].getAttribute(el, 'data-component-id');
            var res = [];
            var ids = _domUtils2['default'].nodeListToArray(_domUtils2['default'].querySelectorAll(el, '*')).map(function (it) {
                return _domUtils2['default'].getAttribute(it, 'data-component-id');
            });
            ids.forEach(function (componentId) {
                if (componentId && !componentIds[componentId]) {
                    componentIds[componentId] = true;
                    if (thisId != componentId) {
                        res.push(RF._getComponentByInternalId(componentId));
                    }
                }
            });
            if (res.length) this.transclusionChildren = res;
        };

        Component.prototype._updateExternalState = function _updateExternalState() {
            var _this4 = this;

            if (!this.stateExpression) return;
            var newExternalState = _expressionEngine2['default'].executeExpression(this.stateExpression, this.parent);
            Object.keys(newExternalState).forEach(function (key) {
                if (_this4.modelView[key] !== newExternalState[key]) {
                    _this4.modelView[key] = newExternalState[key];
                }
            });
        };

        Component.prototype._runWatcher = function _runWatcher(watcher) {
            var ifDirective = true;
            watcher.ifExpressionsList.some(function (exprItem) {
                if (watcher.expression === exprItem.expression) return false;
                var res = _expressionEngine2['default'].executeExpression(exprItem.expression, exprItem.component);
                if (!res) {
                    ifDirective = false;
                    return true;
                }
            });
            if (!ifDirective) return;

            var newValue = _expressionEngine2['default'].runExpressionFn(watcher.watcherFn, watcher.component);
            var oldValue = watcher.last;
            var newValDeepCopy = _miscUtils2['default'].deepCopy(newValue);
            if (!_miscUtils2['default'].deepEqual(newValDeepCopy, oldValue)) {
                watcher.listenerFn(newValue, oldValue);
                watcher.last = newValDeepCopy;
            }
        };

        Component.prototype.digest = function digest() {
            var _this5 = this;

            this._updateExternalState();
            this.ifAndShow_watchers.forEach(function (watcher) {
                _this5._runWatcher(watcher);
            });
            if (!this.isWatchEnable) return;
            this.commonWatchers.forEach(function (watcher) {
                _this5._runWatcher(watcher);
            });
            this.loopWatchers.forEach(function (watcher) {
                var newValue = _expressionEngine2['default'].runExpressionFn(watcher.watcherFn, _this5);
                if (!newValue) return;
                if (watcher.last === newValue && watcher.lastLength === newValue.length) return;
                watcher.last = newValue;
                watcher.lastLength = newValue.length;
                watcher.listenerFn(newValue);
            });
        };

        Component.prototype.run = function run() {
            var DirectiveEngine = __webpack_require__(14)['default'];
            var deInstance = new DirectiveEngine(this);
            deInstance.run();
            this.digest();
            return deInstance;
        };

        Component.prototype.destroy = function destroy() {
            _domUtils2['default'].remove(this.node);
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

    exports['default'] = Component;

    Component.instances = [];

    /***/
},
/* 1 */
/***/function (module, exports, __webpack_require__) {

    "use strict";

    exports.__esModule = true;

    var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
        return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
    } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
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
         * @param deepness
         * @returns {*}
         */
        MiscUtils.deepCopy = function deepCopy(obj) {
            var _clonedObjects = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

            var deepness = arguments[2];

            if (obj === undefined) return undefined;
            if (deepness >= MiscUtils.RECURSION_DEEPNESS) return undefined;else if (obj === null) return null;else if (typeof window !== 'undefined' && obj === window) return undefined;else if (_clonedObjects.indexOf(obj) > -1) return obj;
            if (Object.prototype.toString.call(obj) === '[object Array]') {
                var out = [],
                    i = 0,
                    len = obj.length;
                for (; i < len; i++) {
                    var clonedObject = void 0;
                    if (_clonedObjects.indexOf(obj[i]) > -1) {
                        clonedObject = obj[i];
                    } else {
                        _clonedObjects.push(obj);
                        clonedObject = MiscUtils.deepCopy(obj[i], _clonedObjects, deepness + 1);
                        _clonedObjects.push(obj[i]);
                    }
                    out[i] = clonedObject;
                }
                return out;
            } else if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object') {
                var _out = {};
                for (var _i in obj) {
                    if (!obj.hasOwnProperty(_i)) continue;
                    var _clonedObject = void 0;
                    if (_clonedObjects.indexOf(obj[_i]) > -1) {
                        _clonedObject = obj[_i];
                    } else {
                        _clonedObjects.push(obj);
                        _clonedObject = MiscUtils.deepCopy(obj[_i], _clonedObjects, deepness + 1);
                        _clonedObjects.push(obj[_i]);
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
         * @param deepness
         * @returns {*}
         *
         */

        MiscUtils.deepEqual = function deepEqual(x, y) {
            var _checkCache = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

            var deepness = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

            //if (isNaN(x) && isNaN(y)) return true;
            if (deepness >= MiscUtils.RECURSION_DEEPNESS) return true;
            if (x && y && (typeof x === 'undefined' ? 'undefined' : _typeof(x)) === 'object' && (typeof y === 'undefined' ? 'undefined' : _typeof(y)) === 'object') {
                if (x === y) return true;
                if (_checkCache.indexOf(x) > -1 || _checkCache.indexOf(y) > -1) return true;
                _checkCache.push(x);
                _checkCache.push(y);
                return Object.keys(x).length === Object.keys(y).length && Object.keys(x).reduce(function (isEqual, key) {
                    return isEqual && MiscUtils.deepEqual(x[key], y[key], _checkCache, deepness + 1);
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

        MiscUtils.isPrimitive = function isPrimitive(value) {
            return Object(value) !== value;
        };

        MiscUtils.stringify = function stringify(obj) {
            if (window.JSON && JSON.stringify) return JSON.stringify(obj);
            if (typeof obj === 'function') return;
            if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== "object" || obj.splice) {
                // not an object, stringify using native function
                return obj;
            }
            // Implements recursive object serialization according to JSON spec
            var props = Object.keys(obj).map(function (key) {
                return key + ':' + MiscUtils.stringify(obj[key]);
            }).join(",");
            return '{' + props + '}';
        };

        return MiscUtils;
    }();

    exports['default'] = MiscUtils;

    MiscUtils.isIE = function () {
        var ua = navigator.userAgent;
        return ua.indexOf('MSIE ') > -1 || ua.indexOf('Trident/') > -1 || ua.indexOf('Edge/') > -1;
    }();

    MiscUtils.isBadBrowser = function () {
        if (navigator.appName.indexOf("Internet Explorer") > -1) {
            return navigator.appVersion.indexOf("MSIE 9") == -1 && //v9 is ok
            navigator.appVersion.indexOf("MSIE 1") == -1 //v10, 11, 12, etc. is fine too
            ;
        }
        return false;
    }();

    MiscUtils.RECURSION_DEEPNESS = 32;

    var cnt = 0;

    /***/
},
/* 2 */
/***/function (module, exports, __webpack_require__) {

    "use strict";

    exports.__esModule = true;

    var _miscUtils = __webpack_require__(1);

    var _miscUtils2 = _interopRequireDefault(_miscUtils);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { 'default': obj };
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var qsaWorker = function () {
        var idAllocator = 10000;

        function qsaWorker(element, selector) {
            var needsID = element.id === "";
            if (needsID) {
                ++idAllocator;
                element.id = "__qsa" + idAllocator;
            }
            try {
                if (selector === '*') return element.getElementsByTagName('*');
                return document.querySelectorAll("#" + element.id + " " + selector);
            } finally {
                if (needsID) {
                    element.id = "";
                }
            }
        }

        return qsaWorker;
    }();

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
                var textNodes = [],
                    nonWhitespaceMatcher = /\S/;

                function getTextNodes(node) {
                    if (node.nodeType == 3) {
                        textNodes.push(node);
                    } else {
                        for (var i = 0, len = node.childNodes.length; i < len; ++i) {
                            getTextNodes(node.childNodes[i]);
                        }
                    }
                }

                getTextNodes(root);
                return textNodes;
            }
        };

        DomUtils.setInputValue = function setInputValue(el, value) {
            var tagName = el.tagName.toLowerCase();
            switch (tagName) {
                case 'input':
                    var type = DomUtils.getAttribute(el, 'type');
                    switch (type) {
                        case 'checkbox':
                            el.checked = !!value;
                            break;
                        case 'radio':
                            el.checked = value == el.value;
                            break;
                        default:
                            if (DomUtils.getAttribute(el, 'type') === 'number') {
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

        DomUtils._getRadioButtons = function _getRadioButtons(modelExpr) {
            if (!_miscUtils2['default'].isBadBrowser) {
                var _res = document.querySelectorAll("[type=radio][_data-model=\"" + modelExpr + "\"]");
                return DomUtils.nodeListToArray(_res);
            }
            var allInputs = DomUtils.nodeListToArray(document.getElementsByTagName('input'));
            var res = [];
            allInputs.forEach(function (i) {
                if (i.tagName.toLowerCase() === 'input' && DomUtils.getAttribute(i, 'type') === 'radio' && DomUtils.getAttribute(i, '_data-model') === modelExpr) res.push(i);
            });
            return res;
        };

        DomUtils.getInputValue = function getInputValue(el) {
            var tagName = el.tagName.toLowerCase();
            switch (tagName) {
                case 'input':
                    var type = DomUtils.getAttribute(el, 'type');
                    switch (type) {
                        case 'checkbox':
                            return el.checked;
                            break;
                        case 'radio':
                            var checkedEls = DomUtils._getRadioButtons(DomUtils.getAttribute(el, '_data-model'));
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
                    var type = DomUtils.getAttribute(el, 'type');
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
                            return 'keyup,propertychange,input,change';
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

        DomUtils.toggleClass = function toggleClass(el, className, isAdd) {
            if (el.classList && !_miscUtils2['default'].isBadBrowser) {
                isAdd ? el.classList.add(className) : el.classList.remove(className);
                return;
            }
            if (isAdd) {
                if (el.className.indexOf(className) == -1) el.className += " " + className;
            } else {
                var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
                el.className = el.className.replace(reg, ' ');
            }
        };

        DomUtils.remove = function remove(el) {
            if (el.remove) el.remove();else el.parentNode.removeChild(el);
        };

        DomUtils.matchesSelector = function matchesSelector(el, selector) {
            var matches = DomUtils.nodeListToArray(document.querySelectorAll(selector));
            var res = false;
            matches.forEach(function (m) {
                if (m === el) res = true;
            });
            return res;
        };

        DomUtils.closest = function closest(el, css) {
            if (el.closest) return el.closest(css);
            var node = el;
            while (node) {
                if (DomUtils.matchesSelector(node, css)) return node;else node = node.parentElement;
            }
            return null;
        };

        DomUtils.setAttribute = function setAttribute(el, attrName, val) {
            if (!_miscUtils2['default'].isBadBrowser && el.setAttribute) return el.setAttribute(attrName, val);
            el[attrName] = val;
            if (_miscUtils2['default'].isBadBrowser && attrName === 'class') el['className'] = val;
        };

        DomUtils.hasAttribute = function hasAttribute(el, attrName) {
            if (el.hasAttribute) return el.hasAttribute(attrName);
            return attrName in el;
        };

        DomUtils.getAttribute = function getAttribute(el, attrName) {
            if (el.getAttribute) return el.getAttribute(attrName);
            return el[attrName];
        };

        DomUtils.removeAttribute = function removeAttribute(el, attrName) {
            el.removeAttribute(attrName);
            if (_miscUtils2['default'].isBadBrowser && attrName === 'class') el.removeAttribute('className');
        };

        DomUtils.getElementsByAttribute = function getElementsByAttribute(context, attribute, value) {
            if (!_miscUtils2['default'].isBadBrowser) {
                var selector = "[" + attribute + (value ? "=\"" + value + "\"" : '') + "]";
                return context.querySelectorAll(selector);
            }
            var nodeList = context.getElementsByTagName('*');
            var nodeArray = [];
            var iterator = 0;
            var node = void 0;

            while (node = nodeList[iterator++]) {
                if (DomUtils.hasAttribute(node, attribute) && (value === undefined || DomUtils.getAttribute(node, attribute) === value)) nodeArray.push(node);
            }

            return nodeArray;
        };

        DomUtils.getElementByAttribute = function getElementByAttribute(context, attribute) {
            if (!_miscUtils2['default'].isBadBrowser) return context.querySelector("[" + attribute + "]");
            return DomUtils.getElementsByAttribute(context, attribute)[0];
        };

        DomUtils.querySelectorAll = function querySelectorAll(el, css) {
            if (el.querySelectorAll) return el.querySelectorAll(css);
            return qsaWorker(el, css);
        };

        DomUtils.querySelector = function querySelector(el, css) {
            if (el.querySelector) return el.querySelector(css);
            var all = DomUtils.querySelectorAll(el, css);
            if (!all) return null;
            return all[0];
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

        DomUtils.getClosestElWithTagName = function getClosestElWithTagName(node, tagName) {
            while (node) {
                if (node === document) return;
                if (node.tagName.toLowerCase() == tagName) return node;
                node = node.parentNode;
            }
        };

        DomUtils.getNodeAttributes = function getNodeAttributes(el) {
            var res = [];
            for (var att, i = 0, atts = el.attributes, n = atts.length; i < n; i++) {
                att = atts[i];
                var attributeObj = { name: att.nodeName, value: att.nodeValue };
                res.push(attributeObj);
            }
            return res;
        };

        DomUtils.getComments = function getComments(context) {
            var foundComments = [];
            var elementPath = [context];
            while (elementPath.length > 0) {
                var el = elementPath.pop();
                for (var i = 0; i < el.childNodes.length; i++) {
                    var node = el.childNodes[i];
                    if (node.nodeType === Node.COMMENT_NODE) {
                        foundComments.push(node);
                    } else {
                        elementPath.push(node);
                    }
                }
            }
            return foundComments;
        };

        DomUtils._get_If_expressionTopDownList = function _get_If_expressionTopDownList(el) {
            var res = [];
            var Core = __webpack_require__(7)['default']; // to avoid circular dependencies
            do {
                var expression = DomUtils.getAttribute(el, 'data-if') || DomUtils.getAttribute(el, '_data-if');
                if (expression) {
                    var component = Core._getComponentByInternalId(DomUtils.getAttribute(el, 'data-component-id'));
                    res.unshift({ expression: expression, component: component });
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
            DomUtils.nodeListToArray(DomUtils.querySelectorAll(node, 'script,style,iframe,frame')).forEach(function (nodeItem) {
                nodeItem.parentNode.removeChild(nodeItem);
            });
            return node.innerHTML;
        };

        return DomUtils;
    }();

    exports['default'] = DomUtils;

    DomUtils.EXPRESSION_REGEXP = /(\{\{[^\t]*?}})/;

    /***/
},
/* 3 */
/***/function (module, exports, __webpack_require__) {

    "use strict";

    exports.__esModule = true;

    var _modelView = __webpack_require__(4);

    var _modelView2 = _interopRequireDefault(_modelView);

    var _component = __webpack_require__(0);

    var _component2 = _interopRequireDefault(_component);

    var _templateLoader = __webpack_require__(17);

    var _templateLoader2 = _interopRequireDefault(_templateLoader);

    var _miscUtils = __webpack_require__(1);

    var _miscUtils2 = _interopRequireDefault(_miscUtils);

    var _domUtils = __webpack_require__(2);

    var _domUtils2 = _interopRequireDefault(_domUtils);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { 'default': obj };
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var ComponentProto = function () {
        ComponentProto._newComponentInstance = function _newComponentInstance(ComponentClass) {
            if (!ComponentClass) return {};
            if (typeof ComponentClass === 'function') return new ComponentClass();
            return ComponentClass;
        };

        function ComponentProto(ComponentClassOrObject) {
            _classCallCheck(this, ComponentProto);

            var tmpl = void 0,
                templateInstance = void 0;
            var name = void 0; // todo only for @decorator
            var decoratedName = ComponentClassOrObject.decoratedName;
            if (decoratedName) {
                name = decoratedName;
                templateInstance = ComponentClassOrObject;
            } else {
                templateInstance = ComponentProto._newComponentInstance(ComponentClassOrObject);
                name = templateInstance.name;
            }
            if (!name) {
                console.error(ComponentClassOrObject);
                throw 'component name not defined';
            }
            name = _miscUtils2['default'].camelToSnake(name);
            tmpl = _templateLoader2['default'].getNode(templateInstance, name);
            if (ComponentProto.getByName(name)) throw 'component with name ' + decoratedName + ' already registered';
            var domTemplate = tmpl.innerHTML;
            _domUtils2['default'].remove(tmpl);
            var node = document.createElement('div');
            node.innerHTML = domTemplate;
            this.node = node;
            this.name = name;
            this.ComponentClass = ComponentClassOrObject;
            ComponentProto.instances.push(this);
        }

        ComponentProto.prototype.newInstance = function newInstance(node, externalProperties) {
            var modelView = new _modelView2['default'](this.name, new ComponentProto._newComponentInstance(this.ComponentClass), externalProperties);
            var cmp = new _component2['default'](this.name, node, modelView);
            modelView.component = cmp;
            return cmp;
        };

        ComponentProto.getByName = function getByName(name) {
            return ComponentProto.instances.find(function (it) {
                return it.name === name;
            });
        };

        ComponentProto.getByComponentClass = function getByComponentClass(ComponentClass) {
            return ComponentProto.instances.find(function (it) {
                return it.ComponentClass === ComponentClass;
            });
        };

        return ComponentProto;
    }();

    exports['default'] = ComponentProto;

    ComponentProto.instances = [];

    /***/
},
/* 4 */
/***/function (module, exports, __webpack_require__) {

    "use strict";

    exports.__esModule = true;

    var _miscUtils = __webpack_require__(1);

    var _miscUtils2 = _interopRequireDefault(_miscUtils);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { 'default': obj };
    }

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
            initialState && (initialState = _miscUtils2['default'].deepCopy(initialState));
            initialState && this._applyState(initialState, { warnRedefined: warnRedefined });
            this._applyState(this.externalProperties, { strict: true });
            this.component && this.component._updateExternalState();
        };

        ModelView.prototype._applyState = function _applyState() {
            var properties = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            var strict = opts.strict;

            for (var key in properties) {
                if (strict && !this.hasOwnProperty(key)) throw '\n                    can not apply non declared property "' + key + '" to component "' + this.name + '",\n                    declare property in component\n                ';
                if (opts.warnRedefined && properties[key] && this.hasOwnProperty(key)) {
                    console.warn('property ' + key + ' is redefined at component ' + this.name);
                }
                this[key] = properties[key];
            }
        };

        return ModelView;
    }();

    exports['default'] = ModelView;

    /***/
},
/* 5 */
/***/function (module, exports, __webpack_require__) {

    "use strict";

    exports.__esModule = true;

    var _component = __webpack_require__(0);

    var _component2 = _interopRequireDefault(_component);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { 'default': obj };
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof2(superClass)));
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

            var _this = _possibleConstructorReturn(this, _Component.call(this, null, node, modelView));

            _this.scopeLoopContainer = null;
            return _this;
        }

        return ScopedDomFragment;
    }(_component2['default']);

    exports['default'] = ScopedDomFragment;

    /***/
},
/* 6 */
/***/function (module, exports, __webpack_require__) {

    "use strict";

    exports.__esModule = true;

    var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
        return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
    } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
    };

    var _lexer = __webpack_require__(9);

    var _lexer2 = _interopRequireDefault(_lexer);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { 'default': obj };
    }

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

        ExpressionEngine._getComponentName = function _getComponentName(component) {
            if (!component) return null;
            if (component.name) return component.name;else if (component.parent) return ExpressionEngine._getComponentName(component.parent);else return null;
        };

        ExpressionEngine.getExpressionFn = function getExpressionFn(code) {
            var unconvertedCodeTail = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

            var codeRaw = code;
            code = code.split('\n').join('').split("'").join('"');
            var codeProcessed = '\n                var __RF__result__; __RF__result__ = ' + _lexer2['default'].convertExpression(code, RF_API_STR + '.getVal(component,\'{expr}\')') + '\n        ' + unconvertedCodeTail + '\nreturn __RF__result__';
            try {
                var fn = new Function('component', '' + RF_API_STR, codeProcessed);
                fn.expression = code;
                fn.fnProcessed = fn.toString();
                return fn;
            } catch (e) {
                console.error('can not compile function from expression');
                console.error(codeRaw);
                console.error('debugContext', {
                    expression: codeRaw,
                    compiled: codeProcessed,
                    exception: e
                });
                throw e;
            }
        };

        ExpressionEngine.runExpressionFn = function runExpressionFn(fn, component) {
            try {
                return fn.call(component.modelView, component, RF_API);
            } catch (e) {
                console.error('expression error: ' + fn.expression);
                var compName = ExpressionEngine._getComponentName(component);
                if (compName) {
                    console.error('at component with name "' + compName + '"');
                }
                console.error('debugContext', {
                    expression: fn.expression,
                    compiled: fn.fnProcessed,
                    component: component,
                    exception: e
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
                        lastToken = _lexer2['default'].convertExpression(lastToken, RF_API_STR + '.getVal(component,\'{expr}\')');
                        lastToken = '[' + lastToken + ']';
                    } else if (!exprTokens.length) {
                        lastToken = '.' + lastToken;
                    }
                    expression = exprTokens.join('');
                    expression = _lexer2['default'].convertExpression(expression, RF_API_STR + '.getVal(component,\'{expr}\')');
                    expression = '' + expression + lastToken + '=value';
                    setterFnCache[expression] = fn = new Function('component', '' + RF_API_STR, 'value', expression);
                }
                fn(component, RF_API, value);
            } catch (e) {
                console.error('expression error: ' + expression);
                var compName = ExpressionEngine._getComponentName(component);
                if (compName) {
                    console.error('at component with name "' + compName + '"');
                }
                console.error('debugContext', {
                    expression: expression,
                    compiled: fn,
                    value: value,
                    exception: e
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
            // todo remove?
            var codeRaw = code;
            code = code.replace(/[\n\t\r\s]+/gi, '');
            try {
                var fn = new Function('return (' + code + ')');
                return fn();
            } catch (e) {
                console.error('can not parse expression: ' + codeRaw);
                console.error('debugContext', {
                    code: code,
                    codeRaw: codeRaw,
                    exception: e
                });
                throw e;
            }
        };

        return ExpressionEngine;
    }();

    exports['default'] = ExpressionEngine;

    /***/
},
/* 7 */
/***/function (module, exports, __webpack_require__) {

    "use strict";

    exports.__esModule = true;

    var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
        return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
    } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
    };

    __webpack_require__(16);

    __webpack_require__(15);

    var _component = __webpack_require__(0);

    var _component2 = _interopRequireDefault(_component);

    var _miscUtils = __webpack_require__(1);

    var _miscUtils2 = _interopRequireDefault(_miscUtils);

    var _componentProto = __webpack_require__(3);

    var _componentProto2 = _interopRequireDefault(_componentProto);

    var _modelView = __webpack_require__(4);

    var _modelView2 = _interopRequireDefault(_modelView);

    var _directive = __webpack_require__(8);

    var _directive2 = _interopRequireDefault(_directive);

    var _scopedDomFragment = __webpack_require__(5);

    var _scopedDomFragment2 = _interopRequireDefault(_scopedDomFragment);

    var _router = __webpack_require__(12);

    var _router2 = _interopRequireDefault(_router);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { 'default': obj };
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    //import './polyfills/promiseLight'


    if (_miscUtils2['default'].isBadBrowser) {
        if (!window.html5) throw 'additional shim module for ie version 8 and less is needed';
    }

    var Core = function () {
        function Core() {
            _classCallCheck(this, Core);
        }

        Core.registerComponent = function registerComponent(ComponentClazz) {
            return new _componentProto2['default'](ComponentClazz);
        };

        Core.registerComponents = function registerComponents(clazzArr) {
            if (_miscUtils2['default'].isBadBrowser) {
                var names = [];
                clazzArr.forEach(function (clazz) {
                    // ie8: register custom element in dom
                    names.push(clazz.decoratedName);
                });
                window.html5.addElements(names, document);
            }
            clazzArr.forEach(function (clazz, i) {
                if (!clazz) throw 'registerComponents error: can not register component: passed invalid parameter ' + clazz + '; current index: ' + i;
                Core.registerComponent(clazz);
            });
        };

        Core.applyBindings = function applyBindings(domElementSelector, propertiesOrClazz) {
            if (!domElementSelector) throw 'can not applyBindings: element selector not provided';
            if (typeof domElementSelector != 'string') throw 'element selector parameter must me a string,\n            but ' + (typeof domElementSelector === 'undefined' ? 'undefined' : _typeof(domElementSelector)) + ' found}';
            var properties = _componentProto2['default']._newComponentInstance(propertiesOrClazz);
            var domElement = document.querySelector(domElementSelector);
            if (!domElement) throw 'can not apply bindings: root element with selector ' + domElementSelector + ' not defined';
            var modelView = new _modelView2['default'](null, properties);
            var fragment = new _scopedDomFragment2['default'](domElement, modelView);
            fragment.setMounted(true);
            fragment.setShown(true);
            fragment.run();
            // run if

            modelView.component = fragment;
            return fragment;
        };

        Core.digest = function digest() {
            _component2['default'].digestAll();
        };

        Core.getComponentById = function getComponentById(id) {
            var cmp = _component2['default'].getComponentByDomId(id);
            if (!cmp) return null;
            return cmp.modelView;
        };

        Core.getComponents = function getComponents() {
            return _component2['default'].instances.map(function (c) {
                return c.modelView;
            });
        };

        Core._getComponentByInternalId = function _getComponentByInternalId(id) {
            return _component2['default'].getComponentByInternalId(id);
        };

        Core.decorateComponent = function decorateComponent(params) {
            if (params.name) {
                params.decoratedName = params.name;
                delete params.name;
            }
            return function (target) {
                Object.keys(params).forEach(function (key) {
                    target[key] = params[key];
                });
            };
        };

        Core.registerDirectives = function registerDirectives(directivesArr) {
            directivesArr.forEach(function (dClass, index) {
                var name = dClass.decoratedName;
                if (!name) throw 'registerDirectives: can not register directive: name is undefined; current index: ' + index;
                Core._registerDirective(dClass);
            });
        };

        Core._registerDirective = function _registerDirective(dClass) {
            _directive2['default'].all.push(dClass);
        };

        return Core;
    }();

    exports['default'] = Core;

    Core.version = "0.9.10";
    Core.buildAt = 1509136177359;

    window.RF = Core;
    window.RF.Router = _router2['default'];

    /***/
},
/* 8 */
/***/function (module, exports, __webpack_require__) {

    "use strict";

    exports.__esModule = true;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var Directive = function Directive() {
        _classCallCheck(this, Directive);

        this.name = null;
        this.onMount = null;
    };

    exports['default'] = Directive;

    Directive.all = [];

    /***/
},
/* 9 */
/***/function (module, exports, __webpack_require__) {

    "use strict";

    exports.__esModule = true;

    var _token = __webpack_require__(10);

    var _token2 = _interopRequireDefault(_token);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { 'default': obj };
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

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
            var isEndWithSemicolon = expression[expression.length - 1] == _token2['default'].SYMBOL.SEMICOLON;
            var tokens = [],
                t = void 0,
                lastChar = '';
            expression = expression.trim();
            expression = expression.replace(/[\n\t\r]+/gi, '');
            if (!isEndWithSemicolon) expression = expression + _token2['default'].SYMBOL.SEMICOLON;

            var isStringCurrent = void 0;
            expression.split('').forEach(function (char, i) {

                var lastToken = tokens[tokens.length - 1];
                if (lastToken && charInArr(lastToken.tokenValue, ['true', 'false'])) lastToken.tokenType = _token2['default'].TYPE.BOOLEAN;

                if (charInArr(char, ['"', "'"])) isStringCurrent = false;

                if (charInArr(char, _token2['default'].ALL_SPECIAL_SYMBOLS) && !isStringCurrent) {
                    t = new _token2['default'](_token2['default'].TYPE.OPERATOR, char);
                    tokens.push(t);

                    lastChar = char;
                    if (!lastToken) return;
                    if (char == _token2['default'].SYMBOL.L_PAR && !charInArr(lastToken.tokenValue, _token2['default'].ALL_SPECIAL_SYMBOLS)) lastToken.tokenType = _token2['default'].TYPE.FUNCTION;
                } else {
                    if (lastToken && lastToken.tokenType != _token2['default'].TYPE.STRING && char == ' ') return;
                    if (lastToken && (lastToken.tokenType == _token2['default'].TYPE.DIGIT || lastToken.tokenType == _token2['default'].TYPE.VARIABLE || lastToken.tokenType == _token2['default'].TYPE.STRING)) {
                        lastToken.tokenValue += char;
                    } else {
                        var type = void 0;
                        if (isNumber(char)) type = _token2['default'].TYPE.DIGIT;else if (charInArr(char, ['"', "'"])) {
                            type = _token2['default'].TYPE.STRING;
                            isStringCurrent = true;
                        } else type = _token2['default'].TYPE.VARIABLE;
                        t = new _token2['default'](type, char);
                        tokens.push(t);
                    }
                    lastChar = char;
                }
            });

            tokens.forEach(function (t, i) {
                t.tokenValue && (t.tokenValue = t.tokenValue.trim());
                if (charInArr(t.tokenValue, _token2['default'].KEY_WORDS)) t.tokenType = _token2['default'].KEY_WORDS;

                if (t && t.tokenType == _token2['default'].TYPE.VARIABLE) {
                    var next = tokens[i + 1];
                    var prev = tokens[i - 1];

                    if (next && next.tokenValue == _token2['default'].SYMBOL.COLON && (!prev || prev && prev.tokenValue !== '?')) t.tokenType = _token2['default'].TYPE.OBJECT_KEY;

                    if (t.tokenValue && t.tokenValue.startsWith('.')) t.tokenType = _token2['default'].TYPE.STRING; // resolve expression error at app.task.taskCases[0].text
                }

                if (t && t.tokenType == _token2['default'].TYPE.FUNCTION && t.tokenValue.indexOf('.') == 0) {
                    t.tokenType = _token2['default'].TYPE.OBJECT_KEY; // resolve expression [1,2,3].indexOf(2)
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
                if (token.tokenValue == _token2['default'].SYMBOL.EQUAL && token[index + 1] && token[index + 1].tokenValue != _token2['default'].SYMBOL.EQUAL) throw 'assign (like "a=b") not supported at directives for now, change your expression: ' + expression;
                if ([_token2['default'].TYPE.VARIABLE, _token2['default'].TYPE.FUNCTION].indexOf(token.tokenType) > -1) {
                    out += variableReplacerStr.replace('{expr}', token.tokenValue);
                } else out += token.tokenValue || token.tokenType;
            });
            return out;
        };

        return Lexer;
    }();

    exports['default'] = Lexer;

    /***/
},
/* 10 */
/***/function (module, exports, __webpack_require__) {

    "use strict";

    exports.__esModule = true;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var Token = function Token(type, val) {
        _classCallCheck(this, Token);

        this.tokenType = type;
        this.tokenValue = val;
    };

    exports['default'] = Token;

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

    /***/
},
/* 11 */
/***/function (module, exports, __webpack_require__) {

    "use strict";

    exports.__esModule = true;

    var _component = __webpack_require__(0);

    var _component2 = _interopRequireDefault(_component);

    var _miscUtils = __webpack_require__(1);

    var _miscUtils2 = _interopRequireDefault(_miscUtils);

    var _domUtils = __webpack_require__(2);

    var _domUtils2 = _interopRequireDefault(_domUtils);

    var _modelView = __webpack_require__(4);

    var _modelView2 = _interopRequireDefault(_modelView);

    var _scopedDomFragment = __webpack_require__(5);

    var _scopedDomFragment2 = _interopRequireDefault(_scopedDomFragment);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { 'default': obj };
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof2(superClass)));
        }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    var ScopedLoopContainer = function (_Component) {
        _inherits(ScopedLoopContainer, _Component);

        function ScopedLoopContainer(node, modelView) {
            _classCallCheck(this, ScopedLoopContainer);

            var _this = _possibleConstructorReturn(this, _Component.call(this, null, node, modelView));

            if (_domUtils2['default'].getAttribute(node, 'data-for')) throw 'can not use "data-for" attribute at component directly. Use this directive at parent node';

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

        ScopedLoopContainer.prototype.run = function run(eachItemName, indexName, iterableObjectExpr, trackBy) {
            var _this2 = this;

            this.eachItemName = eachItemName;
            this.indexName = indexName;
            this.trackBy = trackBy;

            this.anchor = document.createComment('component-id: ' + this.id + '; loop: ' + eachItemName + ' in ' + iterableObjectExpr);
            this.node.parentNode.insertBefore(this.anchor, this.node.nextSibling);
            _domUtils2['default'].remove(this.node);
            this.node = this.node.cloneNode(true);

            this.addWatcher(iterableObjectExpr, function (newArr, oldArr) {
                _this2._processIterations(newArr, oldArr);
            }, [], // todo!!!! replace to real array of "if" expressions,
            'loopWatchers');
            this.digest();
        };

        ScopedLoopContainer.prototype._processIterations = function _processIterations() {
            var _this3 = this;

            var newArr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

            var currNodeInIteration = this.anchor;
            if (newArr instanceof Object) newArr = _miscUtils2['default'].objectToArray(newArr);

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
                    var localModelView = new _modelView2['default'](_this3.indexName, props);

                    var node = _this3.node.cloneNode(true);
                    var scopedDomFragment = new _scopedDomFragment2['default'](node, localModelView);
                    // todo Cannot read property 'insertBefore' of null
                    currNodeInIteration.parentNode.insertBefore(node, currNodeInIteration.nextSibling);
                    scopedDomFragment.parent = _this3.parent;
                    scopedDomFragment.parent.addChild(scopedDomFragment);
                    scopedDomFragment.scopeLoopContainer = _this3;

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
    }(_component2['default']);

    exports['default'] = ScopedLoopContainer;

    /***/
},
/* 12 */
/***/function (module, exports, __webpack_require__) {

    "use strict";

    exports.__esModule = true;

    var _domUtils = __webpack_require__(2);

    var _domUtils2 = _interopRequireDefault(_domUtils);

    var _component = __webpack_require__(0);

    var _component2 = _interopRequireDefault(_component);

    var _componentProto = __webpack_require__(3);

    var _componentProto2 = _interopRequireDefault(_componentProto);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { 'default': obj };
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var HashRouterStrategy = function () {
        function HashRouterStrategy() {
            _classCallCheck(this, HashRouterStrategy);
        }

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
            if (!isMatch) throw 'page with path ' + hash + ' not registered, set up router correctly';
        };

        HashRouterStrategy.setup = function setup() {
            location.hash && HashRouterStrategy._check(location.hash);
            _domUtils2['default'].addEventListener(window, 'hashchange', function () {
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
            if (!Router._pages[route]) throw route + ' not registered, set up router correctly';
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
                    throw 'cat not find strategy with strategyName ' + strategyName;
            }
        };

        return RouterStrategyProvider;
    }();

    var routeNode = null;
    var lastPageItem = void 0;
    var __showPage = function __showPage(pageName, params) {

        if (lastPageItem) {
            lastPageItem.component.setShown(false);
            _domUtils2['default'].nodeListToArray(routeNode.childNodes).forEach(function (el) {
                lastPageItem.component.node.appendChild(el);
            });
            lastPageItem.component.setMounted(false);
        }
        lastPageItem = Router._pages[pageName];
        if (!lastPageItem) throw 'no page with name ' + pageName + ' registered';
        if (!lastPageItem.component) {
            var componentNode = lastPageItem.componentProto.node.cloneNode(true);
            lastPageItem.component = lastPageItem.componentProto.newInstance(componentNode, {});
            lastPageItem.component.run();
            delete lastPageItem.componentProto;
        }
        _domUtils2['default'].nodeListToArray(lastPageItem.component.node.childNodes).forEach(function (el) {
            routeNode.appendChild(el);
        });
        lastPageItem.component.setMounted(true, params);
        lastPageItem.component.setShown(true, params);
        _component2['default'].digestAll();
    };

    var Router = function () {
        function Router() {
            _classCallCheck(this, Router);
        }

        Router.setup = function setup(keyValues) {
            var strategyName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Router.STRATEGY.MANUAL;

            Router._strategy = RouterStrategyProvider.getRouterStrategy(strategyName);
            var routePlaceholderNode = _domUtils2['default'].getElementByAttribute(document, 'data-route');
            if (!routePlaceholderNode) throw 'can not run Route: element with data-route attribute not found';
            routePlaceholderNode.innerHTML = '';
            routeNode = routePlaceholderNode;
            Object.keys(keyValues).forEach(function (key) {
                var ComponentClass = void 0;
                if (keyValues[key].node) {
                    // if component defined as sinple old js object
                    ComponentClass = keyValues[key];
                } else {
                    // if component defined as class or function
                    ComponentClass = _componentProto2['default'].getByComponentClass(keyValues[key]);
                    if (!ComponentClass) {
                        console.error(keyValues[key]);
                        throw 'router component error: can not found component for rote ' + key;
                    }
                }
                Router._pages[key] = {
                    componentProto: ComponentClass,
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

    exports['default'] = Router;

    Router._pages = {};
    Router._strategy = null;

    Router.STRATEGY = {
        MANUAL: 0,
        HASH: 1
    };

    /***/
},
/* 13 */
/***/function (module, exports, __webpack_require__) {

    "use strict";

    exports.__esModule = true;

    var _domUtils = __webpack_require__(2);

    var _domUtils2 = _interopRequireDefault(_domUtils);

    var _componentProto = __webpack_require__(3);

    var _componentProto2 = _interopRequireDefault(_componentProto);

    var _expressionEngine = __webpack_require__(6);

    var _expressionEngine2 = _interopRequireDefault(_expressionEngine);

    var _component = __webpack_require__(0);

    var _component2 = _interopRequireDefault(_component);

    var _scopedDomFragment = __webpack_require__(5);

    var _scopedDomFragment2 = _interopRequireDefault(_scopedDomFragment);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { 'default': obj };
    }

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

        ComponentHelper._copyAttrs = function _copyAttrs(domEl, attrs) {
            attrs.forEach(function (attr) {
                if (attr.name.startsWith('_')) attr.name = attr.name.substr(1);
                if (['data-component-id', 'data-_processed', 'id', 'data-transclusion', 'data-transclusion-id'].indexOf(attr.name) > -1) return;
                if (attr.name.startsWith('data-')) {
                    _domUtils2['default'].setAttribute(domEl, attr.name, attr.value);
                }
            });
        };

        ComponentHelper._runTransclNode = function _runTransclNode(componentProto, domEl, transclNode, transclComponents) {
            var transclusionId = _domUtils2['default'].getAttribute(domEl, 'data-transclusion-id') || '';
            var name = transclNode.getAttribute(dataTransclusion);
            var nameSpecifiedById = transclusionId ? name += '\\:\\#' + transclusionId : '';
            if (!name) {
                console.error(componentProto.node);
                console.error(transclNode);
                throw dataTransclusion + ' attribute can not be empty';
            }

            var recipients = _domUtils2['default'].nodeListToArray(domEl.querySelectorAll('[' + dataTransclusion + '="' + name + '"],[' + dataTransclusion + '="' + nameSpecifiedById + '"]')).filter(function (el) {
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
            if (_domUtils2['default'].getAttribute(domEl, 'data-_processed')) return;
            _domUtils2['default'].setAttribute(domEl, 'data-_processed', '1');

            var hasNotTranscluded = false;
            _domUtils2['default'].nodeListToArray(domEl.childNodes).forEach(function (chdrn) {
                if (chdrn.hasAttribute && !chdrn.hasAttribute(dataTransclusion)) hasNotTranscluded = true;
            });
            if (hasNotTranscluded) {
                console.warn(domEl);
                console.warn('children elements of component ' + componentProto.name + ' will be removed');
            }

            var domId = _domUtils2['default'].getAttribute(domEl, 'id');
            var componentAttrs = _domUtils2['default'].getNodeAttributes(domEl);
            var componentNode = componentProto.node.cloneNode(true);
            _domUtils2['default'].nodeListToArray(componentNode.querySelectorAll('[' + dataTransclusion + ']')).forEach(function (transclNode) {
                ComponentHelper._runTransclNode(componentProto, domEl, transclNode, transclComponents);
            });
            domEl.parentNode.insertBefore(componentNode, domEl);

            var dataStateExpression = domEl.getAttribute('data-state');
            var dataState = dataStateExpression ? _expressionEngine2['default'].executeExpression(dataStateExpression, rootComponent) : {};
            var component = componentProto.newInstance(componentNode, dataState);
            domId && (component.domId = domId);

            component.parent = rootComponent;
            component.parent.addChild(component);
            if (dataStateExpression) component.stateExpression = dataStateExpression;
            component.disableParentScopeEvaluation = true; // avoid recursion in Component

            component.run();

            _domUtils2['default'].remove(domEl);
            componentNodes.push({ component: component, componentNode: componentNode, attrs: componentAttrs });
        };

        ComponentHelper._runComponent = function _runComponent(rootComponent, componentProto) {
            var transclComponents = [];
            var domEls = _domUtils2['default'].nodeListToArray(rootComponent.node.getElementsByTagName(componentProto.name));
            if (rootComponent.node.tagName.toLowerCase() == componentProto.name.toLowerCase()) {
                console.error('\n                   Can not use "data-for" attribute at component directly. Use "data-for" directive at parent node');
                console.error('component node:', rootComponent.node);
                throw "Can not use data-for attribute at component";
            }
            var componentNodes = [];
            domEls.forEach(function (domEl) {
                var hasClosestSameComponent = domEl.parentNode && _domUtils2['default'].closest(domEl.parentNode, domEl.tagName.toLowerCase());
                if (hasClosestSameComponent) return;
                ComponentHelper._runComponentDomEl(rootComponent, componentProto, domEl, transclComponents, componentNodes);
            });
            var hasStateChanged = false;
            componentNodes.forEach(function (item) {
                var children = _domUtils2['default'].removeParentButNotChildren(item.componentNode);
                if (children.length == 1) {
                    item.component.modelView.$el = children[0];
                    ComponentHelper._copyAttrs(item.component.modelView.$el, item.attrs);
                } else {
                    item.component.modelView.$el = children;
                    children.forEach(function (c) {
                        ComponentHelper._copyAttrs(c, item.attrs);
                    });
                }
                hasStateChanged = item.component.setMounted(true) != 'noChanged' || hasStateChanged;
                hasStateChanged = item.component.setShown(true) != 'noChanged' || hasStateChanged;
            });
            hasStateChanged && _component2['default'].digestAll();
            return transclComponents;
        };

        ComponentHelper._runTransclusionComponent = function _runTransclusionComponent(rootComponent, trnscl) {
            _domUtils2['default'].nodeListToArray(trnscl.rcp.childNodes).forEach(function (n) {
                trnscl.transclNode.appendChild(n);
            });
            var transclComponent = new _scopedDomFragment2['default'](trnscl.transclNode, rootComponent.modelView);
            rootComponent.addChild(transclComponent);
            transclComponent.parent = rootComponent;
            _domUtils2['default'].setAttribute(trnscl.transclNode, 'data-_processed', '1');
            transclComponent.run();
        };

        ComponentHelper.runComponents = function runComponents(rootComponent) {
            var transclComponents = [];
            _componentProto2['default'].instances.forEach(function (componentProto) {
                transclComponents = transclComponents.concat(ComponentHelper._runComponent(rootComponent, componentProto));
            });
            transclComponents.forEach(function (trnscl) {
                ComponentHelper._runTransclusionComponent(rootComponent, trnscl);
            });
        };

        return ComponentHelper;
    }();

    exports['default'] = ComponentHelper;

    /***/
},
/* 14 */
/***/function (module, exports, __webpack_require__) {

    "use strict";

    exports.__esModule = true;

    var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
        return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
    } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
    };

    var _lexer = __webpack_require__(9);

    var _lexer2 = _interopRequireDefault(_lexer);

    var _token = __webpack_require__(10);

    var _token2 = _interopRequireDefault(_token);

    var _expressionEngine = __webpack_require__(6);

    var _expressionEngine2 = _interopRequireDefault(_expressionEngine);

    var _domUtils = __webpack_require__(2);

    var _domUtils2 = _interopRequireDefault(_domUtils);

    var _miscUtils = __webpack_require__(1);

    var _miscUtils2 = _interopRequireDefault(_miscUtils);

    var _scopedLoopContainer = __webpack_require__(11);

    var _scopedLoopContainer2 = _interopRequireDefault(_scopedLoopContainer);

    var _componentHelper = __webpack_require__(13);

    var _componentHelper2 = _interopRequireDefault(_componentHelper);

    var _component = __webpack_require__(0);

    var _component2 = _interopRequireDefault(_component);

    var _directive = __webpack_require__(8);

    var _directive2 = _interopRequireDefault(_directive);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { 'default': obj };
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var DirectiveEngine = function () {
        function DirectiveEngine(component) {
            _classCallCheck(this, DirectiveEngine);

            this.component = component;
            DirectiveEngine.instances.push(this);
        }

        DirectiveEngine.prototype._eachElementWithAttr = function _eachElementWithAttr(dataAttrName, onEachElementFn) {
            var elements = [];
            var nodes = _domUtils2['default'].getElementsByAttribute(this.component.node, dataAttrName);
            for (var i = 0; i < nodes.length; i++) {
                elements.push(nodes[i]);
            }
            if (_domUtils2['default'].hasAttribute(this.component.node, dataAttrName)) elements.push(this.component.node);
            elements.forEach(function (el) {
                var expression = _domUtils2['default'].getAttribute(el, dataAttrName);
                if (!expression) return;
                _domUtils2['default'].removeAttribute(el, dataAttrName);
                _domUtils2['default'].setAttribute(el, '_' + dataAttrName, expression);
                var processed = onEachElementFn(el, expression);
                if (processed === false) _domUtils2['default'].setAttribute(el, dataAttrName, expression);
            });
        };

        DirectiveEngine.prototype.runDirective_For = function runDirective_For() {
            var _this = this;

            this._eachElementWithAttr('data-for', function (el, expression) {
                var closestTransclusionEl = _domUtils2['default'].closest(el, '[data-transclusion]');

                if (closestTransclusionEl && !_domUtils2['default'].getAttribute(closestTransclusionEl, 'data-_processed')) return false;
                expression = expression.replace(/,\s+/, ',').replace(/[\t\n]+/, ' ');
                var tokens = expression.split(' ').filter(function (it) {
                    return it.length;
                });
                // if (['var','let'].indexOf(tokens[0]>-1)) tokens.unshift();
                var trackBy = undefined;
                if (tokens[tokens.length - 3] == 'track' && tokens[tokens.length - 2] == 'by') {
                    trackBy = tokens[tokens.length - 1];
                    tokens.pop();
                    tokens.pop();
                    tokens.pop();
                }
                if (['in', 'of'].indexOf(tokens[1]) == -1) throw 'can not parse expression: ' + expression;
                var variables = _lexer2['default'].tokenize(tokens[0]).filter(function (t) {
                    return [_token2['default'].TYPE.VARIABLE, _token2['default'].TYPE.OBJECT_KEY].indexOf(t.tokenType) > -1;
                }).map(function (t) {
                    return t.tokenValue;
                });

                if (!variables.length) throw 'can not parse expression: ' + expression;
                var eachItemName = variables[0];
                var indexName = variables[1];
                tokens.shift();
                tokens.shift();
                var iterableObjectExpr = tokens.join(' ');
                var scopedLoopContainer = new _scopedLoopContainer2['default'](el, _this.component.modelView);
                scopedLoopContainer.parent = _this.component;
                scopedLoopContainer.run(eachItemName, indexName, iterableObjectExpr, trackBy);
            });
        };

        DirectiveEngine.prototype.runTextNodes = function runTextNodes() {
            var _this2 = this;

            _domUtils2['default'].processScopedTextNodes(this.component.node).forEach(function (it) {
                _this2.component.addWatcher(it.expression, function (value) {
                    if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
                        value = _miscUtils2['default'].deepCopy(value);
                        value = value && _miscUtils2['default'].stringify(value) || '';
                    }
                    _domUtils2['default'].setTextNodeValue(it.node, value);
                }, _domUtils2['default']._get_If_expressionTopDownList(it.node));
            });
        };

        DirectiveEngine.prototype._runDomEvent = function _runDomEvent(el, expression, eventName) {
            var _this3 = this;

            var closestForm = _domUtils2['default'].getClosestElWithTagName(el, 'form');
            var shouldPreventDefault = !!closestForm && !closestForm.__shouldPreventDefault__;
            var fn = _expressionEngine2['default'].getExpressionFn(expression);
            if (shouldPreventDefault && el !== closestForm) {
                _domUtils2['default'].addEventListener(closestForm, 'submit', function (e) {
                    _domUtils2['default'].preventDefault(e);
                    return false;
                });
            }

            _domUtils2['default'].addEventListener(el, eventName, function (e) {
                if (_miscUtils2['default'].isIE && eventName === 'input') {
                    // ie fire 'input event on placeholder changes
                    if (document.activeElement !== el) return;
                }
                _this3.component.modelView.$event = e;
                _expressionEngine2['default'].runExpressionFn(fn, _this3.component);
                delete _this3.component.modelView.$event;
                _component2['default'].digestAll();
                if (eventName === 'submit') {
                    _domUtils2['default'].preventDefault(e);
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
                var events = _domUtils2['default'].getDefaultInputChangeEvents(el).split(',');
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
            var selectedEls = _domUtils2['default'].nodeListToArray(selectEl.getElementsByTagName('option')).filter(function (opt) {
                return opt.selected;
            });
            selectedEls.forEach(function (selectedEl) {
                var dataValueAttr = _domUtils2['default'].getAttribute(selectedEl, 'data-value');
                var component = void 0;
                component = _component2['default'].getComponentByInternalId(_domUtils2['default'].getAttribute(selectedEl, 'data-component-id'));
                if (component && dataValueAttr) {
                    val.push(_expressionEngine2['default'].executeExpression(dataValueAttr, component));
                } else {
                    val.push(_domUtils2['default'].getAttribute(selectedEl, 'value'));
                }
            });
            _expressionEngine2['default'].setValueToContext(this.component, modelExpression, isMultiple ? val : val[0]);
        };

        DirectiveEngine.prototype._addSelectModelWatcher = function _addSelectModelWatcher(el, expression) {
            this.component.addWatcher(expression, function (value) {
                if (el.tagName.toLowerCase() == 'select') {
                    var isMultiple = el.multiple;
                    var isModelSet = false;
                    _domUtils2['default'].nodeListToArray(_domUtils2['default'].nodeListToArray(el.getElementsByTagName('option'))).some(function (opt) {
                        var modelItemExpression = _domUtils2['default'].getAttribute(opt, 'data-value');
                        if (!modelItemExpression) return;
                        var componentId = _domUtils2['default'].getAttribute(opt, 'data-component-id');
                        var component = _component2['default'].getComponentByInternalId(componentId);

                        var modelItem = _expressionEngine2['default'].executeExpression(modelItemExpression, component);
                        var trackBy = component.scopeLoopContainer && component.scopeLoopContainer.trackBy;
                        var isEqual = function isEqual(a, b, isMultiple) {
                            if (trackBy && (a == null || b == null)) return false;
                            if (isMultiple) {
                                return trackBy ? a.findIndex(function (v) {
                                    return v[trackBy] == b[trackBy];
                                }) : a.indexOf(b) > -1;
                            } else {
                                return trackBy ? a[trackBy] == b[trackBy] : a === b;
                            }
                        };

                        if (isMultiple) {
                            if (isEqual(value, modelItem, isMultiple)) {
                                isModelSet = true;
                                opt.selected = true;
                            } else {
                                opt.selected = false;
                            }
                        } else {
                            if (isEqual(value, modelItem, isMultiple)) {
                                opt.selected = true;
                                isModelSet = true;
                                return true;
                            }
                        }
                    });
                    if (!isModelSet) {
                        el.value = value;
                        if (isMultiple) {
                            _domUtils2['default'].nodeListToArray(_domUtils2['default'].nodeListToArray(el.getElementsByTagName('option'))).forEach(function (opt) {
                                opt.selected = value.indexOf(_domUtils2['default'].getAttribute(opt, 'value')) > -1;
                            });
                        }
                    }
                } else {
                    if (_domUtils2['default'].getInputValue(el) == value) return;
                    if (value == undefined) value = '';
                    _domUtils2['default'].setInputValue(el, value);
                }
            }, _domUtils2['default']._get_If_expressionTopDownList(el));
        };

        DirectiveEngine.prototype.runDirective_Model = function runDirective_Model() {
            var _this9 = this;

            this._eachElementWithAttr('data-model', function (el, expression) {
                var isNumeric = _domUtils2['default'].getAttribute(el, 'type') === 'number';
                if (_domUtils2['default'].getAttribute(el, 'type') == 'radio' && !_domUtils2['default'].getAttribute(el, 'name')) _domUtils2['default'].setAttribute(el, 'name', expression);
                var eventNames = _domUtils2['default'].getDefaultInputChangeEvents(el);
                eventNames.split(',').forEach(function (eventName) {
                    if (el.tagName.toLowerCase() == 'select') {
                        _domUtils2['default'].addEventListener(el, eventName, function (e) {
                            _this9._runDirective_Model_OfSelect(el, expression);
                            _component2['default'].digestAll();
                        });
                    } else {
                        _domUtils2['default'].addEventListener(el, eventName, function (e) {
                            var val = _domUtils2['default'].getInputValue(el);
                            if (isNumeric && val.length) val = parseFloat(val);
                            _expressionEngine2['default'].setValueToContext(_this9.component, expression, val);
                            _component2['default'].digestAll();
                        });
                    }
                });
                _this9._addSelectModelWatcher(el, expression);
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
                            _domUtils2['default'].toggleClass(el, key, !!classNameOrObj[key]);
                        }
                    } else {
                        el.className = initialClassName + ' ' + classNameOrObj;
                    }
                }, _domUtils2['default']._get_If_expressionTopDownList(el));
            });
        };

        DirectiveEngine.prototype.runDirective_Style = function runDirective_Style() {
            var _this11 = this;

            this._eachElementWithAttr('data-style', function (el, expression) {
                _this11.component.addWatcher(expression, function (styleObject) {
                    if (styleObject === _this11.component.modelView) return;
                    for (var key in styleObject) {
                        if (!styleObject.hasOwnProperty(key)) continue;
                        try {
                            el.style[key] = ''; // reset property value firstly
                            el.style[key] = styleObject[key] ? styleObject[key] : '';
                        } catch (e) {
                            //ie8 throws error if style is incorrect
                        }
                    }
                }, _domUtils2['default']._get_If_expressionTopDownList(el));
            });
        };

        DirectiveEngine.prototype.runDirective_Disabled = function runDirective_Disabled() {
            var _this12 = this;

            this._eachElementWithAttr('data-disabled', function (el, expression) {
                _this12.component.addWatcher(expression, function (value) {
                    if (value) _domUtils2['default'].setAttribute(el, 'disabled', 'disabled');else el.removeAttribute('disabled');
                }, _domUtils2['default']._get_If_expressionTopDownList(el));
            });
        };

        DirectiveEngine.prototype.runDirective_If = function runDirective_If() {
            var _this13 = this;

            this._eachElementWithAttr('data-if', function (el, expression) {
                var comment = document.createComment('component-placeholder;component-id: ' + _this13.component.id);
                el.parentNode.insertBefore(comment, el);
                var transclusionChildren = _this13.component.transclusionChildren || [];
                _this13.component.addWatcher(expression, function (val) {
                    if (val) {
                        if (!el.parentElement) {
                            comment.parentNode.insertBefore(el, comment.nextSibling);
                            //this.component.setMounted(true);
                            //this.component.setShown(true);
                            transclusionChildren.forEach(function (cmp) {
                                cmp.setMounted(true);
                                cmp.setShown(true);
                            });
                        }
                    } else {
                        _domUtils2['default'].remove(el);
                        //this.component.setMounted(false);
                        //this.component.setShown(false);
                        transclusionChildren.forEach(function (cmp) {
                            cmp.setMounted(false);
                            cmp.setShown(false);
                        });
                    }
                }, _domUtils2['default']._get_If_expressionTopDownList(el), 'ifAndShow_watchers');
            });
        };

        DirectiveEngine.prototype.runDirective_Show = function runDirective_Show() {
            var _this14 = this;

            this._eachElementWithAttr('data-show', function (el, expression) {
                var initialStyle = el.style.display || '';
                var transclusionChildren = _this14.component.transclusionChildren || [];
                _this14.component.addWatcher(expression, function (val) {
                    if (val) {
                        el.style.display = initialStyle;
                        transclusionChildren.forEach(function (cmp) {
                            cmp.setShown(true);
                        });
                    } else {
                        el.style.display = 'none';
                        transclusionChildren.forEach(function (cmp) {
                            cmp.setShown(false);
                        });
                    }
                }, _domUtils2['default']._get_If_expressionTopDownList(el), 'ifAndShow_watchers');
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
                }, _domUtils2['default']._get_If_expressionTopDownList(el), true);
            });
        };

        DirectiveEngine.prototype.runDirective_Html = function runDirective_Html() {
            var _this16 = this;

            this._eachElementWithAttr('data-html', function (el, expression) {
                _this16.component.addWatcher(expression, function (val) {
                    el.innerHTML = _domUtils2['default'].sanitize(val);
                }, _domUtils2['default']._get_If_expressionTopDownList(el));
            });
        };

        DirectiveEngine.prototype._runAttributes = function _runAttributes(el, properties) {
            Object.keys(properties).forEach(function (key) {
                var val = properties[key];
                if (typeof val == 'boolean') val ? _domUtils2['default'].setAttribute(el, key, key) : el.removeAttribute(key);else _domUtils2['default'].setAttribute(el, key, val);
            });
        };

        DirectiveEngine.prototype.runDirective_Attributes = function runDirective_Attributes() {
            var _this17 = this;

            this._eachElementWithAttr('data-attributes', function (el, expression) {
                _this17.component.addWatcher(expression, function (properties) {
                    _this17._runAttributes(el, properties);
                }, _domUtils2['default']._get_If_expressionTopDownList(el));
            });
        };

        DirectiveEngine.prototype.runDirective_Attribute = function runDirective_Attribute() {
            var _this18 = this;

            this._eachElementWithAttr('data-attribute', function (el, expression) {
                expression = '{' + expression + '}';
                _this18.component.addWatcher(expression, function (properties) {
                    _this18._runAttributes(el, properties);
                }, _domUtils2['default']._get_If_expressionTopDownList(el));
            });
        };

        DirectiveEngine.prototype.runComponents = function runComponents() {
            _componentHelper2['default'].runComponents(this.component);
        };

        DirectiveEngine.prototype.runExpressionsInAttrs = function runExpressionsInAttrs() {
            var _this19 = this;

            _domUtils2['default'].nodeListToArray(_domUtils2['default'].querySelectorAll(this.component.node, '*')).forEach(function (el) {
                Array.prototype.forEach.call(el.attributes, function (attr) {
                    if (!attr) return;
                    var name = attr.name,
                        value = attr.value;

                    if (value.indexOf('{{') == -1 && value.indexOf('}}') == -1) return;
                    value = value.split(/[\n\t]|[\s]{2,}/).join(' ').trim();
                    var resultExpArr = [],
                        resultExpr = void 0;
                    value.split(_domUtils2['default'].EXPRESSION_REGEXP).forEach(function (token) {
                        if (!token.length) return;
                        if (token.indexOf('{{') == 0) {
                            token = token.split('{{').join('').split('}}').join('');
                            resultExpArr.push('(' + token + ')');
                        } else {
                            resultExpArr.push('"' + token + '"');
                        }
                    });
                    resultExpr = resultExpArr.join('+');
                    _domUtils2['default'].removeAttribute(el, name);
                    _this19.component.addWatcher(resultExpr, function (expr) {
                        expr = expr && expr.trim() || '';
                        _domUtils2['default'].setAttribute(el, name, expr);
                    }, _domUtils2['default']._get_If_expressionTopDownList(el));
                });
            });
        };

        DirectiveEngine.prototype.runDragAndDrop = function runDragAndDrop() {
            var _this20 = this;

            this._eachElementWithAttr('data-draggable', function (el, expression) {
                _domUtils2['default'].addEventListener(el, 'mousedown', function (e) {
                    var mouseX = e.offsetX,
                        mouseY = e.offsetY;
                    el.__coords = { mouseX: mouseX, mouseY: mouseY };
                });
                _domUtils2['default'].addEventListener(el, 'dragstart', function (e) {
                    var id = Math.random() + '_' + Math.random();
                    var clientRect = el.getBoundingClientRect();
                    var mouseX = e.clientX,
                        mouseY = e.clientY;
                    DirectiveEngine.ddObjects[id] = {
                        obj: _expressionEngine2['default'].executeExpression(expression, _this20.component),
                        coords: el.__coords
                    };
                    e.dataTransfer.setData('text/plain', id); //cannot be empty string
                    e.dataTransfer.effectAllowed = 'move';
                });
                _this20.component.addWatcher(expression, function (draggableObj) {
                    _domUtils2['default'].setAttribute(el, 'draggable', '' + !!draggableObj);
                }, _domUtils2['default']._get_If_expressionTopDownList(el));
            });
            this._eachElementWithAttr('data-droppable', function (el, expression) {
                var callbackFn = _expressionEngine2['default'].executeExpression(expression, _this20.component);
                _domUtils2['default'].addEventListener(el, 'dragover', function (e) {
                    e.preventDefault();
                });
                _domUtils2['default'].addEventListener(el, 'drop', function (e) {
                    e.preventDefault();
                    var id = e.dataTransfer.getData('text/plain');
                    if (id === undefined) return;

                    var _ref = DirectiveEngine.ddObjects[id] || {},
                        obj = _ref.obj,
                        coords = _ref.coords;

                    if (!obj) return;
                    callbackFn && callbackFn(obj, e, coords);
                    delete DirectiveEngine.ddObjects[id];
                });
            });
        };

        DirectiveEngine.prototype.runCustomDirectives = function runCustomDirectives() {
            var _this21 = this;

            _directive2['default'].all.forEach(function (DClass) {
                _this21._eachElementWithAttr(DClass.decoratedName, function (el, expression) {
                    var exprVal = _expressionEngine2['default'].executeExpression(expression, _this21.component);
                    var instance = new DClass();
                    instance.onMount(el, exprVal);
                });
            });
        };

        DirectiveEngine.prototype.run = function run() {
            var _this22 = this;

            this.runDirective_For();
            this.runComponents();
            this.runTextNodes();
            this.runDirective_Model();
            ['click', 'blur', 'focus', 'submit', 'keypress', 'keyup', 'keydown', 'input', 'mousedown', 'mouseup', 'mousemove', 'mouseleave', 'mouseenter', 'mouseover', 'mouseout'].forEach(function (eventName) {
                _this22.runDomEvent(eventName);
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
            this.runCustomDirectives();
            this.runDirective_If();
            this.component.collectTransclusionChildren();
        };

        return DirectiveEngine;
    }();

    exports['default'] = DirectiveEngine;

    DirectiveEngine.ddObjects = {};
    DirectiveEngine.instances = [];

    /***/
},
/* 15 */
/***/function (module, exports, __webpack_require__) {

    "use strict";

    var setTimeoutNative = window.setTimeout;
    var setIntervalNative = window.setInterval;
    var clearTimeOutNative = window.clearTimeout;
    var clearIntervalNative = window.clearInterval;

    if (window.regeneratorRuntime) {
        var wrapOrig = window.regeneratorRuntime.wrap;
        window.regeneratorRuntime.wrap = function (a, b, c, d) {
            var aWrapped = function aWrapped(ctx) {
                var stopOrig = ctx.stop;
                ctx.stop = function () {
                    var res = stopOrig.apply(ctx, arguments);
                    RF.digest();
                    return res;
                };
                return a.call(c, ctx);
            };
            return wrapOrig.call(window.regeneratorRuntime, aWrapped, b, c, d);
        };
    }

    window.setTimeout = function (fn, time) {
        return setTimeoutNative(function () {
            fn();
            RF.digest();
        }, time);
    };

    window.setInterval = function (fn, time) {
        return setIntervalNative(function () {
            fn();
            RF.digest();
        }, time);
    };

    window.clearTimeout = function (tid) {
        return clearTimeOutNative(tid);
    };

    window.clearInterval = function (tid) {
        return clearIntervalNative(tid);
    };

    /***/
},
/* 16 */
/***/function (module, exports, __webpack_require__) {

    "use strict";

    var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
        return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
    } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
    };

    if (!window.console) {
        window.console = {};
        window.console.log = window.console.error = window.console.warn = window.console.trace = function (msg) {
            window.status = msg;
        };
    }

    if (!document.querySelectorAll) {
        document.querySelectorAll = function (selector) {
            var head = document.documentElement.firstChild;
            var styleTag = document.createElement("STYLE");
            head.appendChild(styleTag);
            document.__qsResult = [];

            styleTag.styleSheet.cssText = selector + "{x:expression(document.__qsResult.push(this))}";
            window.scrollBy(0, 0);
            head.removeChild(styleTag);

            var result = [];
            for (var i in document.__qsResult) {
                if (typeof document.__qsResult[i] === 'function') continue;
                result.push(document.__qsResult[i]);
            }
            return result;
        };
    }

    if (!document.querySelector) {
        document.querySelector = function (selector) {
            var head = document.documentElement.firstChild;
            var styleTag = document.createElement("STYLE");
            head.appendChild(styleTag);
            document.__qsResult = [];

            styleTag.styleSheet.cssText = selector + "{x:expression(document.__qsResult.push(this))}";
            window.scrollBy(0, 0);
            head.removeChild(styleTag);

            return document.__qsResult[0];
        };
    }

    if (!window.Element) {
        window.Element = function () {};
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
            this.attachEvent('on' + name, fn);
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

    Array.prototype.filter = Array.prototype.filter || // Use the native array filter method, if available.
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
    };

    Array.prototype.every = Array.prototype.every || // Use the native every method if available, otherwise:
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

    if (!Array.prototype.find) {
        Array.prototype.find = function (predicate) {
            if (this == null) {
                throw new TypeError('Array.prototype.find called on null or undefined');
            }
            if (typeof predicate !== 'function') {
                throw new TypeError('predicate must be a function');
            }
            var list = Object(this);
            var length = list.length >>> 0;
            var thisArg = arguments[1];
            var value = void 0;

            for (var i = 0; i < length; i++) {
                value = list[i];
                if (predicate.call(thisArg, value, i, list)) {
                    return value;
                }
            }
            return undefined;
        };
    }

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

            if ((typeof props === "undefined" ? "undefined" : _typeof(props)) === "object") {
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

    /***/
},
/* 17 */
/***/function (module, exports, __webpack_require__) {

    "use strict";

    exports.__esModule = true;

    var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
        return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
    } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
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
            if (!templateObj) throw "template not defined. Provide template at your component '" + componentName + "'";
            if (typeof templateObj === 'string') templateObj = {
                type: 'string',
                value: templateObj
            };
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

    exports['default'] = TemplateLoader;

    /***/
},
/* 18 */
/***/function (module, exports, __webpack_require__) {

    module.exports = __webpack_require__(7);

    /***/
}]
/******/);

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _dec, _class; /*global RF:true*/


var _i18n = __webpack_require__(9);

var _i18n2 = _interopRequireDefault(_i18n);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AlertDialog = (_dec = RF.decorateComponent({
    name: 'app-alert-dialog',
    template: __webpack_require__(147)
}), _dec(_class = function () {
    function AlertDialog() {
        _classCallCheck(this, AlertDialog);

        this.message = '';
        this.i18n = _i18n2.default;
    }

    AlertDialog.prototype.open = function open(message) {
        RF.getComponentById('alertModal').open();
        this.message = message;
    };

    AlertDialog.prototype.close = function close() {
        RF.getComponentById('alertModal').close();
        this.message = null;
    };

    return AlertDialog;
}()) || _class);
exports.default = AlertDialog;

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _dec, _class;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AnglePicker = (_dec = RF.decorateComponent({
    name: 'app-angle-picker',
    template: __webpack_require__(148)
}), _dec(_class = function () {
    function AnglePicker() {
        _classCallCheck(this, AnglePicker);

        this.object = { val: 0 };
        this.value = 'val';
    }

    AnglePicker.prototype.angleInDeg = function angleInDeg() {
        if (!this.object) return 0;
        var res = this.object[this.value] * 180 / Math.PI % 360;
        return +res.toFixed(2) || 0;
    };

    AnglePicker.prototype.calcAngleFromEvent = function calcAngleFromEvent(e) {
        if (!this.object) return;
        var el = this.$el.querySelector('[data-container]');
        var rect = el.getBoundingClientRect();
        var x = e.clientX - rect.left,
            y = e.clientY - rect.top;
        var angle = Math.atan2(y - 15, x - 15);
        if (angle < 0) angle = 2 * Math.PI + angle;
        angle = +angle.toFixed(2) || 0;
        this.object[this.value] = angle;
    };

    AnglePicker.prototype.click = function click(e) {
        this.calcAngleFromEvent(e);
    };

    AnglePicker.prototype.mouseMove = function mouseMove(e) {
        if (e.buttons !== 1) return;
        this.calcAngleFromEvent(e);
    };

    return AnglePicker;
}()) || _class);
exports.default = AnglePicker;

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _dec, _class; /*global RF:true*/


__webpack_require__(136);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Collapsible = (_dec = RF.decorateComponent({
    name: 'app-collapsible',
    template: __webpack_require__(149)
}), _dec(_class = function () {
    function Collapsible() {
        _classCallCheck(this, Collapsible);

        this.title = 'default_title';
        this.crud = '';
        this.object = {};
        this.meta = {};
        this.id = null;
        this.opened = false;
    }

    Collapsible.prototype.toggle = function toggle() {
        this.opened = !this.opened;
    };

    return Collapsible;
}()) || _class);
exports.default = Collapsible;

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _dec, _class;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ColorPicker = (_dec = RF.decorateComponent({
    name: 'app-color-picker',
    template: __webpack_require__(150)
}), _dec(_class = function () {
    function ColorPicker() {
        _classCallCheck(this, ColorPicker);

        this.model = { field: '' };
        this.field = 'field';
        this.onChange = null;
    }

    ColorPicker.prototype.click = function click() {
        RF.getComponentById('colorPickerDialog').open(this.model, this.field, this.onChange);
    };

    return ColorPicker;
}()) || _class);
exports.default = ColorPicker;

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _dec, _class; /*global RF:true*/


var _utils = __webpack_require__(17);

var _utils2 = _interopRequireDefault(_utils);

var _i18n = __webpack_require__(9);

var _i18n2 = _interopRequireDefault(_i18n);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var defaultColor = { r: 0, g: 0, b: 0 };

var ColorPickerDialog = (_dec = RF.decorateComponent({
    name: 'app-color-picker-dialog',
    template: __webpack_require__(151)
}), _dec(_class = function () {
    function ColorPickerDialog() {
        _classCallCheck(this, ColorPickerDialog);

        this.colorEnums = [{ left: 'red', right: 'cyan', key: 'r' }, { left: 'green', right: 'magenta', key: 'g' }, { left: 'blue', right: 'yellow', key: 'b' }];
        this.i18n = _i18n2.default;
        this.currentColor = {
            RGB: {},
            hex: ''
        };
        this.model = { field: {} };
        this.field = 'field';
    }

    ColorPickerDialog.prototype.open = function open(model, field, onChange) {
        var color = model && model[field] || Object.create(defaultColor);
        this.model = model;
        this.field = field;
        this.onChange = onChange;
        this.currentColor.RGB.r = color.r;
        this.currentColor.RGB.g = color.g;
        this.currentColor.RGB.b = color.b;
        this.currentColor.hex = _utils2.default.rgbToHex(this.currentColor.RGB);
        RF.getComponentById('colorPickerModal').open();
    };

    ColorPickerDialog.prototype.hexChanged = function hexChanged() {
        this.currentColor.RGB = _utils2.default.hexToRgb(this.currentColor.hex);
    };

    ColorPickerDialog.prototype.rgbChanged = function rgbChanged() {
        this.currentColor.hex = _utils2.default.rgbToHex(this.currentColor.RGB);
    };

    ColorPickerDialog.prototype.getRawColor = function getRawColor(rgb, key) {
        var col = {
            r: key == 'r' ? rgb.r : 0,
            g: key == 'g' ? rgb.g : 0,
            b: key == 'b' ? rgb.b : 0
        };
        return _utils2.default.rgbToHex(col);
    };

    ColorPickerDialog.prototype.applyColor = function applyColor() {
        this.model[this.field] = this.currentColor.RGB;
        this.onChange && this.onChange();
        RF.getComponentById('colorPickerModal').close();
    };

    return ColorPickerDialog;
}()) || _class);
exports.default = ColorPickerDialog;

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _dec, _class; /*global RF:true*/


__webpack_require__(137);

var _i18n = __webpack_require__(9);

var _i18n2 = _interopRequireDefault(_i18n);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ConfirmDialog = (_dec = RF.decorateComponent({
    name: 'app-confirm-dialog',
    template: __webpack_require__(152)
}), _dec(_class = function () {
    function ConfirmDialog() {
        _classCallCheck(this, ConfirmDialog);

        this.message = 'default message';
        this.confirm = function () {};
        this.i18n = _i18n2.default;
    }

    ConfirmDialog.prototype.close = function close() {
        RF.getComponentById('confirmModal').close();
    };

    ConfirmDialog.prototype.confirmAndClose = function confirmAndClose() {
        this.confirm();
        this.close();
    };

    ConfirmDialog.prototype.open = function open(message, callback) {
        RF.getComponentById('confirmModal').open();
        this.message = message;
        this.confirm = callback;
    };

    return ConfirmDialog;
}()) || _class);
exports.default = ConfirmDialog;

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _dec, _class; /*global RF:true*/


__webpack_require__(138);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var InputFile = (_dec = RF.decorateComponent({
    name: 'app-input-file',
    template: __webpack_require__(153)
}), _dec(_class = function () {
    function InputFile() {
        _classCallCheck(this, InputFile);

        this.title = '';
        this.accept = '';
        this.onFilePicked = null;
    }

    InputFile.prototype.onMount = function onMount() {
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
    };

    return InputFile;
}()) || _class);
exports.default = InputFile;

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _dec, _class; /*global RF:true*/


__webpack_require__(139);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AppModal = (_dec = RF.decorateComponent({
    name: 'app-modal',
    template: __webpack_require__(154)
}), _dec(_class = function () {
    function AppModal() {
        _classCallCheck(this, AppModal);

        this.opened = false;
    }

    AppModal.prototype.close = function close() {
        this.opened = false;
        //setTimeout(RF.digest,1); //todo
    };

    AppModal.prototype.open = function open() {
        this.opened = true;
    };

    return AppModal;
}()) || _class);
exports.default = AppModal;

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _dec, _class;

var _draggable = __webpack_require__(53);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*global RF:true*/
var DraggableDirective = (_dec = RF.decorateComponent({
    name: 'app-draggable'
}), _dec(_class = function () {
    function DraggableDirective() {
        _classCallCheck(this, DraggableDirective);
    }

    DraggableDirective.prototype.onMount = function onMount(el, objVal) {
        (0, _draggable.draggable)(el, objVal);
    };

    return DraggableDirective;
}()) || _class);
exports.default = DraggableDirective;

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _dec, _class;
/*global RF:true*/


var _baseComponent = __webpack_require__(0);

var _baseComponent2 = _interopRequireDefault(_baseComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SceneCursor = (_dec = RF.decorateComponent({
    name: 'app-scene-cursor',
    template: __webpack_require__(155)
}), _dec(_class = function (_BaseComponent) {
    _inherits(SceneCursor, _BaseComponent);

    function SceneCursor() {
        _classCallCheck(this, SceneCursor);

        return _possibleConstructorReturn(this, _BaseComponent.call(this));
    }

    SceneCursor.prototype.onKeyUp = function onKeyUp() {
        this.editData.tileMapPosY -= 1;
    };

    SceneCursor.prototype.onKeyLeft = function onKeyLeft() {
        this.editData.tileMapPosX -= 1;
    };

    SceneCursor.prototype.onKeyRight = function onKeyRight() {
        this.editData.tileMapPosX += 1;
    };

    SceneCursor.prototype.onKeyDown = function onKeyDown() {
        this.editData.tileMapPosY += 1;
    };

    return SceneCursor;
}(_baseComponent2.default)) || _class);
exports.default = SceneCursor;

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _dec, _class; /*global RF:true*/
/*global alertEx:true*/


var _baseComponent = __webpack_require__(0);

var _baseComponent2 = _interopRequireDefault(_baseComponent);

__webpack_require__(141);

var _gameObject = __webpack_require__(29);

var _gameObject2 = _interopRequireDefault(_gameObject);

var _gameObjectProto = __webpack_require__(7);

var _gameObjectProto2 = _interopRequireDefault(_gameObjectProto);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SceneCentralPanel = (_dec = RF.decorateComponent({
    name: 'app-scene-central-panel',
    template: __webpack_require__(156)
}), _dec(_class = function (_BaseComponent) {
    _inherits(SceneCentralPanel, _BaseComponent);

    function SceneCentralPanel() {
        _classCallCheck(this, SceneCentralPanel);

        return _possibleConstructorReturn(this, _BaseComponent.call(this));
    }

    SceneCentralPanel.prototype.showThisTile = function showThisTile(j, i) {
        if (j === undefined || i === undefined) return false;
        var editData = this.editData;
        if (!editData.currSceneInEdit.tileMap) return false;
        if (!editData.currSceneInEdit.tileMap.data) return false;
        var data = editData.currSceneInEdit.tileMap.data;
        var res = data[j] != null && data[j][i] != null;
        return res;
    };

    SceneCentralPanel.prototype.getTilePos = function getTilePos(j, i) {
        var res = { x: 0, y: 0 };
        if (!this.editData.currSceneInEdit.tileMap) return res;
        var tileMapData = this.editData.currSceneInEdit.tileMap.data;
        var currCell = tileMapData[j] && tileMapData[j][i] && tileMapData[j][i];
        if (!currCell) return res;
        var index = currCell.index;

        var editData = this.editData;
        return {
            x: editData.currSceneInEdit.tileMap.spriteSheet.getFramePosX(index),
            y: editData.currSceneInEdit.tileMap.spriteSheet.getFramePosY(index)
        };
    };

    SceneCentralPanel.prototype.getCharCss = function getCharCss(item, ch) {
        if (!item) return;
        var symbol = item.font.fontContext.symbols[ch] || {};
        return {
            left: item.pos.x + 'px',
            top: item.pos.y + 'px',
            display: ch === '\n' ? 'block' : 'inline-block',
            width: symbol.width + 'px',
            height: symbol.height + 'px',
            backgroundImage: 'url(' + this.editData.projectName + '/' + item.font.resourcePath + ')',
            backgroundRepeat: 'no-repeat',
            backgroundPositionX: -symbol.x + 'px',
            backgroundPositionY: -symbol.y + 'px'
        };
    };

    SceneCentralPanel.prototype.onDropFromCentralPanel = function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(go, _ref2) {
            var x = _ref2.x,
                y = _ref2.y;
            var json;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:

                            go.pos = { x: x, y: y };
                            json = go.toJSON();

                            json.type === 'GameObject' && Object.keys(json).forEach(function (key) {
                                if (!['id', 'name', 'pos', 'font', 'scale', 'angle', 'alpha', 'type', 'layerId', 'gameObjectProto'].includes(key)) delete json[key];
                            });
                            _context.next = 5;
                            return this.restResource.save(json, null);

                        case 5:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        function onDropFromCentralPanel(_x, _x2) {
            return _ref.apply(this, arguments);
        }

        return onDropFromCentralPanel;
    }();

    SceneCentralPanel.prototype.onDropFromLeftPanel = function () {
        var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(droppedObj, e, coords) {
            var x, y, editData, Clazz, objInScene, firstFont, allTextFields, size, resp, l;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            if (droppedObj) {
                                _context2.next = 2;
                                break;
                            }

                            return _context2.abrupt('return', null);

                        case 2:
                            if (!(droppedObj.src !== 'leftPanel')) {
                                _context2.next = 4;
                                break;
                            }

                            return _context2.abrupt('return', null);

                        case 4:
                            x = e.offsetX - coords.mouseX;
                            y = e.offsetY - coords.mouseY;
                            editData = this.editData;
                            Clazz = droppedObj.obj instanceof _gameObjectProto2.default ? _gameObject2.default : droppedObj.obj.constructor;
                            objInScene = new Clazz(editData.game);

                            if (!('font' in objInScene && !objInScene.font)) {
                                _context2.next = 19;
                                break;
                            }

                            firstFont = editData.game.repository.getFirst('Font');

                            if (firstFont) {
                                _context2.next = 14;
                                break;
                            }

                            alertEx(this.i18n.get('noFont'));
                            return _context2.abrupt('return', null);

                        case 14:
                            objInScene.setFont(firstFont);
                            allTextFields = editData.game.repository.getArray('TextField');
                            size = allTextFields && allTextFields.length || 1;

                            objInScene.name = 'textField' + size;
                            objInScene.setText(objInScene.name);

                        case 19:
                            objInScene.pos = { x: x, y: y };
                            objInScene.layerId = editData.currLayerInEdit.id;
                            if (objInScene instanceof _gameObject2.default) objInScene.gameObjectProto = droppedObj.obj;

                            _context2.next = 24;
                            return this.restResource.save(objInScene);

                        case 24:
                            resp = _context2.sent;

                            objInScene.id = resp.id;
                            editData.game.repository.addObject(objInScene);
                            editData.currLayerInEdit.addGameObject(objInScene);
                            l = editData.currLayerInEdit;

                            l.updateCloner();
                            editData.game.repository.updateObject(l);
                            this.restResource.save(l);
                            objInScene.revalidate();

                        case 33:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, this);
        }));

        function onDropFromLeftPanel(_x3, _x4, _x5) {
            return _ref3.apply(this, arguments);
        }

        return onDropFromLeftPanel;
    }();

    SceneCentralPanel.prototype.onCentralSceneClick = function () {
        var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(e) {
            var tileMap, coords, x, y, index, tile;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            if (this.editData.editTileMapModeOn) {
                                _context3.next = 2;
                                break;
                            }

                            return _context3.abrupt('return');

                        case 2:
                            if (!(this.editData.currTileIndexInEdit === null)) {
                                _context3.next = 4;
                                break;
                            }

                            return _context3.abrupt('return');

                        case 4:
                            tileMap = this.editData.currSceneInEdit.tileMap;

                            if (tileMap) {
                                _context3.next = 7;
                                break;
                            }

                            return _context3.abrupt('return');

                        case 7:
                            coords = this.utils.getCoords('#sceneDiv', e);
                            x = ~~(coords.x / this.editData.currSceneInEdit.tileMap.spriteSheet._frameWidth);
                            y = ~~(coords.y / this.editData.currSceneInEdit.tileMap.spriteSheet._frameHeight);
                            index = +this.editData.currTileIndexInEdit;
                            tile = {
                                meta: { tileMapId: this.editData.currSceneInEdit.tileMap.id },
                                x: x, y: y,
                                index: index
                            };

                            tileMap.data = tileMap.data || {};
                            tileMap.data[y] = tileMap.data[y] || {};
                            tileMap.data[y][x] = { index: index };
                            _context3.next = 17;
                            return this.restResource.saveTile(tile);

                        case 17:
                        case 'end':
                            return _context3.stop();
                    }
                }
            }, _callee3, this);
        }));

        function onCentralSceneClick(_x6) {
            return _ref4.apply(this, arguments);
        }

        return onCentralSceneClick;
    }();

    return SceneCentralPanel;
}(_baseComponent2.default)) || _class);
exports.default = SceneCentralPanel;

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _dec, _class; /*global RF:true*/


var _baseComponent = __webpack_require__(0);

var _baseComponent2 = _interopRequireDefault(_baseComponent);

__webpack_require__(142);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ScriptEditor = (_dec = RF.decorateComponent({
    name: 'app-script-editor',
    template: __webpack_require__(157)
}), _dec(_class = function (_BaseComponent) {
    _inherits(ScriptEditor, _BaseComponent);

    function ScriptEditor() {
        _classCallCheck(this, ScriptEditor);

        return _possibleConstructorReturn(this, _BaseComponent.call(this));
    }

    ScriptEditor.prototype.close = function close() {
        this.editData.scriptEditorUrl = '';
    };

    return ScriptEditor;
}(_baseComponent2.default)) || _class);
exports.default = ScriptEditor;

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _dec, _class;
/*global RF:true*/
/*global localStorage:true*/

var _baseComponent = __webpack_require__(0);

var _baseComponent2 = _interopRequireDefault(_baseComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BuildDialog = (_dec = RF.decorateComponent({
    name: 'app-build-dialog',
    template: __webpack_require__(158)
}), _dec(_class = function (_BaseComponent) {
    _inherits(BuildDialog, _BaseComponent);

    function BuildDialog() {
        _classCallCheck(this, BuildDialog);

        return _possibleConstructorReturn(this, _BaseComponent.call(this));
    }

    BuildDialog.prototype.close = function close() {
        RF.getComponentById('buildModal').close();
    };

    BuildDialog.prototype.onChanged = function onChanged() {
        localStorage.buildOpts = JSON.stringify(this.editData.buildOpts);
    };

    return BuildDialog;
}(_baseComponent2.default)) || _class);
exports.default = BuildDialog;

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _dec, _class; /*global RF:true*/


var _baseComponent = __webpack_require__(0);

var _baseComponent2 = _interopRequireDefault(_baseComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CommonBehaviourDialog = (_dec = RF.decorateComponent({
    name: 'app-common-behaviour-dialog',
    template: __webpack_require__(159)
}), _dec(_class = function (_BaseComponent) {
    _inherits(CommonBehaviourDialog, _BaseComponent);

    function CommonBehaviourDialog() {
        _classCallCheck(this, CommonBehaviourDialog);

        return _possibleConstructorReturn(this, _BaseComponent.call(this));
    }

    CommonBehaviourDialog.prototype.createOrEditCommonBehaviour = function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var editData, cb, resp, editedCb;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            editData = this.editData;
                            cb = editData.currCommonBehaviourInEdit;

                            delete cb.description;
                            _context.next = 5;
                            return this.restResource.save(cb);

                        case 5:
                            resp = _context.sent;

                            if (resp.created) {
                                cb.id = resp.id;
                                editData.game.repository.addObject(cb);
                                editData.currGameObjectInEdit.commonBehaviour.push(cb);
                            } else {
                                editedCb = editData.currGameObjectInEdit.commonBehaviour.find(function (it) {
                                    return it.id == cb.id;
                                });

                                editedCb.fromJSON(cb.toJSON());
                                cb.updateCloner();
                                editData.game.repository.updateObject(cb);
                            }
                            _context.next = 9;
                            return this.restResource.save(editData.currGameObjectInEdit);

                        case 9:
                            editData.currGameObjectInEdit.updateCloner();
                            RF.getComponentById('commonBehaviourModal').close();

                        case 11:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        function createOrEditCommonBehaviour() {
            return _ref.apply(this, arguments);
        }

        return createOrEditCommonBehaviour;
    }();

    return CommonBehaviourDialog;
}(_baseComponent2.default)) || _class);
exports.default = CommonBehaviourDialog;

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _dec, _class; /*global RF:true*/


var _baseComponent = __webpack_require__(0);

var _baseComponent2 = _interopRequireDefault(_baseComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Dialogs = (_dec = RF.decorateComponent({
    name: 'app-dialogs',
    template: __webpack_require__(160)
}), _dec(_class = function (_BaseComponent) {
    _inherits(Dialogs, _BaseComponent);

    function Dialogs() {
        _classCallCheck(this, Dialogs);

        return _possibleConstructorReturn(this, _BaseComponent.call(this));
    }

    return Dialogs;
}(_baseComponent2.default)) || _class);
exports.default = Dialogs;

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _dec, _class; /*global RF:true*/

var _baseComponent = __webpack_require__(0);

var _baseComponent2 = _interopRequireDefault(_baseComponent);

var _chrome = __webpack_require__(96);

var _chrome2 = _interopRequireDefault(_chrome);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SYMBOL_PADDING = 4;
var fontSample = 'Test me! Text here';
var SAFE_FONTS = [{ displayName: 'serif' }, { displayName: 'sans-serif' }, { displayName: 'monospace' }];

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

var FontDialog = (_dec = RF.decorateComponent({
    name: 'app-font-dialog',
    template: __webpack_require__(161)
}), _dec(_class = function (_BaseComponent) {
    _inherits(FontDialog, _BaseComponent);

    function FontDialog() {
        _classCallCheck(this, FontDialog);

        var _this = _possibleConstructorReturn(this, _BaseComponent.call(this));

        _this.fontSample = fontSample;
        _this.systemFontList = [];
        return _this;
    }

    FontDialog.prototype.open = function open() {
        var _this2 = this;

        if (!this.systemFontList.length) {
            _chrome2.default.requestToApi({ method: 'getFontList' }, function (list) {
                _this2.systemFontList = list;
                RF.digest();
            });
            setTimeout(function () {
                if (!_this2.systemFontList.length) {
                    _this2.systemFontList = SAFE_FONTS;
                }
            }, 5000);
        }
        RF.getComponentById('fontModal').open();
    };

    FontDialog.prototype.createOrEditFont = function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(model) {
            var strFont, file, resp;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            strFont = model.fontSize + 'px' + ' ' + model.fontFamily;

                            model.fontContext = getFontContext([{ from: 32, to: 150 }, { from: 1040, to: 1116 }], strFont, 320);
                            file = this.utils.dataURItoBlob(getFontImage(model.fontContext, strFont, this.utils.rgbToHex(model.fontColor)));

                            model.resourcePath = 'resources/' + model.name + '.png';

                            _context.next = 6;
                            return this.restFileSystem.uploadFile(file, {
                                path: model.resourcePath
                            });

                        case 6:
                            _context.next = 8;
                            return this.restResource.save(model);

                        case 8:
                            resp = _context.sent;

                            if (resp.created) {
                                model.id = resp.id;
                                this.editData.game.repository.addObject(model);
                            } else if (resp.updated) {
                                model.updateCloner();
                            }
                            RF.getComponentById('fontModal').close();

                        case 11:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        function createOrEditFont(_x) {
            return _ref.apply(this, arguments);
        }

        return createOrEditFont;
    }();

    return FontDialog;
}(_baseComponent2.default)) || _class);
exports.default = FontDialog;

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _dec, _class; /*global RF:true*/


var _baseComponent = __webpack_require__(0);

var _baseComponent2 = _interopRequireDefault(_baseComponent);

var _gameObject = __webpack_require__(29);

var _gameObject2 = _interopRequireDefault(_gameObject);

var _spriteSheet = __webpack_require__(15);

var _spriteSheet2 = _interopRequireDefault(_spriteSheet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FrameAnimationDialog = (_dec = RF.decorateComponent({
    name: 'app-frame-animation-dialog',
    template: __webpack_require__(162)
}), _dec(_class = function (_BaseComponent) {
    _inherits(FrameAnimationDialog, _BaseComponent);

    function FrameAnimationDialog() {
        _classCallCheck(this, FrameAnimationDialog);

        var _this = _possibleConstructorReturn(this, _BaseComponent.call(this));

        _this.isStopped = true;
        _this.from = 0;
        _this.to = 1;
        _this.step = 1;
        _this.frames = '';
        return _this;
    }

    FrameAnimationDialog.prototype.open = function open() {
        this.isStopped = true;
        this.frames = this.editData.currFrameAnimationInEdit.frames.join(',');
        this.editData.currFrameAnimationInEdit._gameObject = this.editData.currGameObjectInEdit.clone();
        RF.getComponentById('frameAnimationModal').open();
    };

    FrameAnimationDialog.prototype.allIndexes = function allIndexes() {
        var res = this.utils.getArray(this.editData.currGameObjectInEdit.spriteSheet._numOfFrames);
        return res.join(',');
    };

    FrameAnimationDialog.prototype.setAllIndexes = function setAllIndexes() {
        this.frames = this.allIndexes();
    };

    FrameAnimationDialog.prototype.setRangeIndexes = function setRangeIndexes() {
        this.frames = this.utils.range(+this.from, +this.to, +this.step).join(',');
    };

    FrameAnimationDialog.prototype.playAnimation = function playAnimation() {
        var _this2 = this;

        this.isStopped = false;
        try {
            this.editData.currFrameAnimationInEdit.frames = JSON.parse('[' + this.frames + ']');
        } catch (e) {
            console.error(e);
            return;
        }
        this.editData.currFrameAnimationInEdit.play();

        var _anim = function _anim() {
            _this2.editData.currFrameAnimationInEdit.update(new Date().getTime());

            var i = _this2.editData.currFrameAnimationInEdit._gameObject.currFrameIndex;
            _this2.editData.currFrameAnimationInEdit._gameObject.setFrameIndex(i);

            if (_this2.isStopped) {
                _this2.isStopped = false;
                return;
            }
            if (RF.getComponentById('frameAnimationModal').opened) setTimeout(_anim, 50);
        };
        setTimeout(_anim, 0);
    };

    FrameAnimationDialog.prototype.stopAnimation = function stopAnimation() {
        this.isStopped = true;
    };

    FrameAnimationDialog.prototype.nextFrame = function nextFrame() {
        this.stopAnimation();
        this.editData.currFrameAnimationInEdit.nextFrame();
    };

    FrameAnimationDialog.prototype.previousFrame = function previousFrame() {
        this.stopAnimation();
        this.editData.currFrameAnimationInEdit.previousFrame();
    };

    FrameAnimationDialog.prototype.getLoopArr = function getLoopArr() {
        var editData = this.editData;
        if (!editData.currFrameAnimationInEdit._gameObject) editData.currFrameAnimationInEdit._gameObject = new _gameObject2.default(editData.game);
        if (!editData.currFrameAnimationInEdit._gameObject.spriteSheet) {
            editData.currFrameAnimationInEdit._gameObject.spriteSheet = new _spriteSheet2.default(editData.game);
        }
        var lastIndex = editData.currFrameAnimationInEdit._gameObject.spriteSheet.numOfFramesH * editData.currFrameAnimationInEdit._gameObject.spriteSheet.numOfFramesV;
        return this.utils.getArray(lastIndex);
    };

    FrameAnimationDialog.prototype.createOrEditFrameAnimation = function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var fa, resp, editedFa;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            fa = this.editData.currFrameAnimationInEdit;

                            fa.frames = JSON.parse('[' + this.frames + ']');

                            _context.next = 4;
                            return this.restResource.save(fa);

                        case 4:
                            resp = _context.sent;

                            if (resp.created) {
                                fa.id = resp.id;
                                this.editData.game.repository.addObject(fa);
                                this.editData.currGameObjectInEdit.frameAnimations.push(fa);
                            } else {
                                editedFa = this.editData.currGameObjectInEdit.frameAnimations.find(function (it) {
                                    return it.id == fa.id;
                                });

                                editedFa.fromJSON(fa.toJSON());
                                fa.updateCloner();
                                this.editData.game.repository.updateObject(fa);
                            }
                            _context.next = 8;
                            return this.restResource.save(this.editData.currGameObjectInEdit);

                        case 8:
                            this.editData.currGameObjectInEdit.updateCloner();

                            RF.getComponentById('frameAnimationModal').close();

                        case 10:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        function createOrEditFrameAnimation() {
            return _ref.apply(this, arguments);
        }

        return createOrEditFrameAnimation;
    }();

    return FrameAnimationDialog;
}(_baseComponent2.default)) || _class);
exports.default = FrameAnimationDialog;

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _dec, _class; /*global RF:true*/
/*global alertEx:true*/

var _baseComponent = __webpack_require__(0);

var _baseComponent2 = _interopRequireDefault(_baseComponent);

var _frameAnimation = __webpack_require__(28);

var _frameAnimation2 = _interopRequireDefault(_frameAnimation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var gameObjectDialog = (_dec = RF.decorateComponent({
    name: 'app-game-object-dialog',
    template: __webpack_require__(163)
}), _dec(_class = function (_BaseComponent) {
    _inherits(gameObjectDialog, _BaseComponent);

    function gameObjectDialog() {
        _classCallCheck(this, gameObjectDialog);

        var _this = _possibleConstructorReturn(this, _BaseComponent.call(this));

        _this.selectedBehaviourId = '';
        return _this;
    }

    gameObjectDialog.prototype.createOrEditGameObject = function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(g) {
            var resp, name;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return this.restResource.save(g);

                        case 2:
                            resp = _context.sent;

                            if (!resp.created) {
                                _context.next = 11;
                                break;
                            }

                            g.id = resp.id;
                            this.editData.game.repository.addObject(g);
                            name = this.utils.capitalise(this.editData.currGameObjectInEdit.name);
                            _context.next = 9;
                            return this.restFileSystem.createFile('scripts/' + g.name + '.js', document.getElementById('defaultCodeScript').textContent.replace('${name}', name));

                        case 9:
                            _context.next = 14;
                            break;

                        case 11:
                            g.updateCloner();
                            this.editData.game.repository.updateObject(g);
                            this.utils.eachGameObject(function (itG) {
                                if (itG.gameObjectProto && itG.gameObjectProto.id == g.id) {
                                    var gJSON = g.toJSON();
                                    var itPos = itG.pos;
                                    var itId = itG.id;
                                    itG.gameObjectProto.fromJSON(gJSON);
                                    itG.fromJSON(gJSON);
                                    itG.pos = itPos;
                                    itG.id = itId;
                                    itG.revalidate();
                                }
                            });

                        case 14:
                            RF.getComponentById('gameObjectModal').close();

                        case 15:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        function createOrEditGameObject(_x) {
            return _ref.apply(this, arguments);
        }

        return createOrEditGameObject;
    }();

    gameObjectDialog.prototype.onStartFrameAnimNameChanged = function onStartFrameAnimNameChanged(frName) {
        var go = this.editData.currGameObjectInEdit;
        go.startFrameAnimationName = frName;
        var opts = { preserveNull: true };
        this.editData.game.repository.updateObject(go, opts);
        go.updateCloner(opts);
        this.restResource.save(go, null, opts);
    };

    gameObjectDialog.prototype.refreshGameObjectFramePreview = function refreshGameObjectFramePreview(gameObjectProto, ind) {
        var spriteSheet = gameObjectProto.spriteSheet;
        if (!spriteSheet) return;
        var maxNumOfFrame = spriteSheet.numOfFramesH * spriteSheet.numOfFramesV;
        if (ind > maxNumOfFrame - 1) {
            this.editData.currGameObjectInEdit.currFrameIndex = 0;
            ind = 0;
        }
        gameObjectProto.setFrameIndex(ind);
    };

    gameObjectDialog.prototype.createFrameAnimation = function createFrameAnimation() {
        this.editData.currFrameAnimationInEdit = new _frameAnimation2.default(this.editData.game);
        RF.getComponentById('frameAnimationDialog').open();
    };

    gameObjectDialog.prototype.editFrameAnimation = function editFrameAnimation(fa) {
        this.editData.currFrameAnimationInEdit = fa.clone();
        RF.getComponentById('frameAnimationDialog').open();
    };

    gameObjectDialog.prototype.deleteFrameAnimation = function deleteFrameAnimation(fa) {
        var _this2 = this;

        this.utils.deleteModel(fa, function () {
            var go = _this2.editData.currGameObjectInEdit;
            go.frameAnimations.remove(function (it) {
                return it.id == fa.id;
            });
            go.updateCloner();
            _this2.editData.game.repository.updateObject(go);
            _this2.restResource.save(go);
        });
    };

    gameObjectDialog.prototype.onSpriteSheetSelected = function onSpriteSheetSelected(spriteSheet) {
        var gameObjectProto = this.editData.currGameObjectInEdit;
        gameObjectProto.width = ~~(spriteSheet.width / spriteSheet.numOfFramesH);
        gameObjectProto.height = ~~(spriteSheet.height / spriteSheet.numOfFramesV);
        gameObjectProto.name = spriteSheet.name;
    };

    gameObjectDialog.prototype.createCommonBehaviour = function createCommonBehaviour(selectedBehaviour) {
        if (this.editData.currGameObjectInEdit.commonBehaviour.find(function (it) {
            return it.name == selectedBehaviour.name;
        })) {
            alertEx(this.i18n.get('objectAlreadyAdded'));
            return;
        }
        selectedBehaviour.__originalId = selectedBehaviour.id;
        selectedBehaviour.id = null;
        this.editData.currCommonBehaviourInEdit = selectedBehaviour.clone();
        RF.getComponentById('commonBehaviourModal').open();
    };

    gameObjectDialog.prototype.editCommonBehaviour = function editCommonBehaviour(cb) {
        this.editData.currCommonBehaviourInEdit = cb.clone();
        RF.getComponentById('commonBehaviourModal').open();
    };

    gameObjectDialog.prototype.deleteCommonBehaviour = function deleteCommonBehaviour(cb) {
        var _this3 = this;

        this.utils.deleteModel(cb, function () {
            var model = _this3.editData.currGameObjectInEdit;
            model.commonBehaviour.remove(function (it) {
                return it.id == cb.id;
            });
            model.updateCloner();
            _this3.editData.game.repository.updateObject(model);
            _this3.restResource.save(model);
        });
    };

    gameObjectDialog.prototype.isCbItemDisabled = function isCbItemDisabled(cb) {
        return !!this.editData.currGameObjectInEdit.commonBehaviour.find(function (it) {
            return it.name == cb.name;
        });
    };

    return gameObjectDialog;
}(_baseComponent2.default)) || _class);
exports.default = gameObjectDialog;

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _dec, _class; /*global RF:true*/

var _baseComponent = __webpack_require__(0);

var _baseComponent2 = _interopRequireDefault(_baseComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LayerDialog = (_dec = RF.decorateComponent({
    name: 'app-layer-dialog',
    template: __webpack_require__(164)
}), _dec(_class = function (_BaseComponent) {
    _inherits(LayerDialog, _BaseComponent);

    function LayerDialog() {
        _classCallCheck(this, LayerDialog);

        return _possibleConstructorReturn(this, _BaseComponent.call(this));
    }

    LayerDialog.prototype.createOrEditLayer = function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(layer, scene) {
            var resp;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return this.restResource.save(layer);

                        case 2:
                            resp = _context.sent;

                            if (!resp.created) {
                                _context.next = 13;
                                break;
                            }

                            layer.id = resp.id;
                            scene.layers.push(layer);
                            this.editData.game.repository.addObject(layer);
                            scene.updateCloner();
                            this.editData.game.repository.updateObject(scene);
                            _context.next = 11;
                            return this.restResource.save(scene);

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
            }, _callee, this);
        }));

        function createOrEditLayer(_x, _x2) {
            return _ref.apply(this, arguments);
        }

        return createOrEditLayer;
    }();

    LayerDialog.prototype.deleteLayer = function deleteLayer(l) {};

    return LayerDialog;
}(_baseComponent2.default)) || _class);
exports.default = LayerDialog;

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _dec, _class; /*global RF:true*/


var _baseComponent = __webpack_require__(0);

var _baseComponent2 = _interopRequireDefault(_baseComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ParticleSystemDialog = (_dec = RF.decorateComponent({
    name: 'app-particle-system-dialog',
    template: __webpack_require__(165)
}), _dec(_class = function (_BaseComponent) {
    _inherits(ParticleSystemDialog, _BaseComponent);

    function ParticleSystemDialog() {
        _classCallCheck(this, ParticleSystemDialog);

        return _possibleConstructorReturn(this, _BaseComponent.call(this));
    }

    ParticleSystemDialog.prototype.showPreview = function showPreview() {
        this.editData.currParticleSystemInEdit.revalidate();
        RF.getComponentById('particleSystemPreviewDialog').open();
    };

    ParticleSystemDialog.prototype.onGameObjectSelected = function onGameObjectSelected(go) {
        if (!this.editData.currParticleSystemInEdit.name) this.editData.currParticleSystemInEdit.name = go.name + 'ParticleSystem';
    };

    ParticleSystemDialog.prototype.createOrEditPs = function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(model) {
            var resp;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return this.restResource.save(model);

                        case 2:
                            resp = _context.sent;

                            if (resp.created) {
                                model.id = resp.id;
                                this.editData.game.repository.addObject(model);
                            } else if (resp.updated) {
                                model.updateCloner();
                            }
                            RF.getComponentById('particleSystemModal').close();

                        case 5:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        function createOrEditPs(_x) {
            return _ref.apply(this, arguments);
        }

        return createOrEditPs;
    }();

    return ParticleSystemDialog;
}(_baseComponent2.default)) || _class);
exports.default = ParticleSystemDialog;

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _dec, _class; /*global RF:true*/


var _baseComponent = __webpack_require__(0);

var _baseComponent2 = _interopRequireDefault(_baseComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var tid = void 0;

var ParticleSystemPreviewDialog = (_dec = RF.decorateComponent({
    name: 'app-particle-system-preview-dialog',
    template: __webpack_require__(166)
}), _dec(_class = function (_BaseComponent) {
    _inherits(ParticleSystemPreviewDialog, _BaseComponent);

    function ParticleSystemPreviewDialog() {
        _classCallCheck(this, ParticleSystemPreviewDialog);

        return _possibleConstructorReturn(this, _BaseComponent.call(this));
    }

    ParticleSystemPreviewDialog.prototype.open = function open() {
        RF.getComponentById('particleSystemPreviewModal').open();
        this.run();
    };

    ParticleSystemPreviewDialog.prototype.close = function close() {
        RF.getComponentById('particleSystemPreviewModal').close();
        clearInterval(tid);
    };

    ParticleSystemPreviewDialog.prototype.run = function run() {
        var editData = this.editData;
        var prevTime = null;

        if (!editData.currParticleSystemInEdit._particles) editData.currParticleSystemInEdit._particles = [];

        var update = function update() {

            var currTime = Date.now();
            if (!prevTime) prevTime = currTime;
            var delta = currTime - prevTime;
            prevTime = currTime;
            editData.currParticleSystemInEdit._particles.forEach(function (p) {

                p._currFrameAnimation && p._currFrameAnimation.update(currTime);
                var deltaX = p.vel.x * delta / 1000;
                var deltaY = p.vel.y * delta / 1000;
                p.pos.x = p.pos.x + deltaX;
                p.pos.y = p.pos.y + deltaY;

                if (!p._timeCreated) p._timeCreated = currTime;
                if (currTime - p._timeCreated > p.liveTime) {
                    editData.currParticleSystemInEdit._particles.splice(editData.currParticleSystemInEdit._particles.indexOf(p), 1);
                }
            });
        };
        tid = setInterval(function () {
            update();
        }, 5);
    };

    ParticleSystemPreviewDialog.prototype.emit = function emit(e) {
        var editData = this.editData;
        if (!editData.currParticleSystemInEdit) return;
        if (!editData.currParticleSystemInEdit.gameObjectProto) return;
        var rect = e.target.getBoundingClientRect();
        editData.currParticleSystemInEdit.emit(e.clientX - rect.left, e.clientY - rect.top);
    };

    return ParticleSystemPreviewDialog;
}(_baseComponent2.default)) || _class);
exports.default = ParticleSystemPreviewDialog;

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _dec, _class; /*global RF:true*/

var _baseComponent = __webpack_require__(0);

var _baseComponent2 = _interopRequireDefault(_baseComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SceneDialog = (_dec = RF.decorateComponent({
    name: 'app-scene-dialog',
    template: __webpack_require__(167)
}), _dec(_class = function (_BaseComponent) {
    _inherits(SceneDialog, _BaseComponent);

    function SceneDialog() {
        _classCallCheck(this, SceneDialog);

        return _possibleConstructorReturn(this, _BaseComponent.call(this));
    }

    SceneDialog.prototype.createOrEditScene = function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(s) {
            var resp, name;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return this.restResource.save(s);

                        case 2:
                            resp = _context.sent;

                            if (!resp.created) {
                                _context.next = 11;
                                break;
                            }

                            s.id = resp.id;
                            this.editData.game.repository.addObject(s);
                            name = this.utils.capitalise(this.editData.currSceneInEdit.name);
                            _context.next = 9;
                            return this.restFileSystem.createFile('scripts/' + s.name + '.js', document.getElementById('defaultCodeScript').textContent.replace('${name}', name));

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
            }, _callee, this);
        }));

        function createOrEditScene(_x) {
            return _ref.apply(this, arguments);
        }

        return createOrEditScene;
    }();

    return SceneDialog;
}(_baseComponent2.default)) || _class);
exports.default = SceneDialog;

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _dec, _class; /*global RF:true*/

var _baseComponent = __webpack_require__(0);

var _baseComponent2 = _interopRequireDefault(_baseComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SoundDialog = (_dec = RF.decorateComponent({
    name: 'app-sound-dialog',
    template: __webpack_require__(168)
}), _dec(_class = function (_BaseComponent) {
    _inherits(SoundDialog, _BaseComponent);

    function SoundDialog() {
        _classCallCheck(this, SoundDialog);

        var _this = _possibleConstructorReturn(this, _BaseComponent.call(this));

        _this.soundUrl = '';
        _this._file = null;
        return _this;
    }

    SoundDialog.prototype.open = function open() {
        if (this.editData.currSoundInEdit.id) this.soundUrl = this.editData.projectName + '/' + this.editData.currSoundInEdit.resourcePath + '?' + Math.random();else this.soundUrl = '';
        this._file = null;
        RF.getComponentById('soundModal').open();
    };

    SoundDialog.prototype.onFilePicked = function onFilePicked(src, file, name, ext) {
        this._file = file;
        this.soundUrl = src;
        this.editData.currSoundInEdit._lastPath = this.editData.currSoundInEdit.resourcePath;
        this.editData.currSoundInEdit.resourcePath = 'resources/' + this.editData.currSoundInEdit.name + '.' + ext;
        if (this.editData.currSoundInEdit._lastPath == this.editData.currSoundInEdit.resourcePath) this.editData.currSoundInEdit._lastPath = null;
        if (!this.editData.currSoundInEdit.name) {
            this.editData.currSoundInEdit.name = name;
        }
    };

    SoundDialog.prototype.createOrEditSound = function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(model) {
            var resp;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            if (!this._file) {
                                _context.next = 3;
                                break;
                            }

                            _context.next = 3;
                            return this.restFileSystem.uploadFile(this._file, { path: this.editData.currSoundInEdit.resourcePath });

                        case 3:
                            if (!this.editData.currSoundInEdit._lastPath) {
                                _context.next = 6;
                                break;
                            }

                            _context.next = 6;
                            return this.restFileSystem.removeFile(this.editData.currSoundInEdit._lastPath);

                        case 6:
                            _context.next = 8;
                            return this.restResource.save(model);

                        case 8:
                            resp = _context.sent;

                            if (resp.created) {
                                model.id = resp.id;
                                this.editData.game.repository.addObject(model);
                            } else if (resp.updated) {
                                model.updateCloner();
                                this.editData.game.repository.updateObject(model);
                            }
                            RF.getComponentById('soundModal').close();

                        case 11:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        function createOrEditSound(_x) {
            return _ref.apply(this, arguments);
        }

        return createOrEditSound;
    }();

    return SoundDialog;
}(_baseComponent2.default)) || _class);
exports.default = SoundDialog;

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _dec, _class; /*global RF:true*/
/*global Image:true*/

var _baseComponent = __webpack_require__(0);

var _baseComponent2 = _interopRequireDefault(_baseComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SpriteSheetDialog = (_dec = RF.decorateComponent({
    name: 'app-sprite-sheet-dialog',
    template: __webpack_require__(169)
}), _dec(_class = function (_BaseComponent) {
    _inherits(SpriteSheetDialog, _BaseComponent);

    function SpriteSheetDialog() {
        _classCallCheck(this, SpriteSheetDialog);

        var _this = _possibleConstructorReturn(this, _BaseComponent.call(this));

        _this.spriteSheetUrl = '';
        _this._file = '';
        _this.numOfSpriteSheetCells = 0;
        return _this;
    }

    SpriteSheetDialog.prototype.open = function open() {
        var editData = this.editData;
        this._file = null;
        if (editData.currSpriteSheetInEdit.id) this.spriteSheetUrl = editData.projectName + '/' + editData.currSpriteSheetInEdit.resourcePath + '?' + Math.random();else this.spriteSheetUrl = '';
        this.refreshNumOfCells();
        RF.getComponentById('spriteSheetModal').open();
    };

    SpriteSheetDialog.prototype.onFilePicked = function onFilePicked(src, file, name, ext) {
        var editData = this.editData;
        if (!editData.currSpriteSheetInEdit.name) {
            editData.currSpriteSheetInEdit.name = name;
        }

        this._file = file;
        this.spriteSheetUrl = src;
        editData.currSpriteSheetInEdit._lastPath = this.editData.currSpriteSheetInEdit.resourcePath;
        editData.currSpriteSheetInEdit.resourcePath = 'resources/' + editData.currSpriteSheetInEdit.name + '.' + ext;
        if (editData.currSpriteSheetInEdit._lastPath == editData.currSpriteSheetInEdit.resourcePath) editData.currSpriteSheetInEdit._lastPath = null;

        var img = new Image();
        img.onload = function () {
            editData.currSpriteSheetInEdit.width = img.width;
            editData.currSpriteSheetInEdit.height = img.height;
            editData.currSpriteSheetInEdit.revalidate();
            RF.digest();
        };
        img.src = src;
    };

    SpriteSheetDialog.prototype.refreshNumOfCells = function refreshNumOfCells() {
        var editData = this.editData;
        this.numOfSpriteSheetCells = editData && editData.currSpriteSheetInEdit && editData.currSpriteSheetInEdit.numOfFramesH * editData.currSpriteSheetInEdit.numOfFramesV;
        editData.currSpriteSheetInEdit.revalidate();
    };

    SpriteSheetDialog.prototype.revalidate = function revalidate() {
        this.editData.currSpriteSheetInEdit.revalidate();
    };

    SpriteSheetDialog.prototype.createOrEditSpriteSheet = function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(model) {
            var resp;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            if (!this._file) {
                                _context.next = 3;
                                break;
                            }

                            _context.next = 3;
                            return this.restFileSystem.uploadFile(this._file, { path: this.editData.currSpriteSheetInEdit.resourcePath });

                        case 3:
                            if (!this.editData.currSpriteSheetInEdit._lastPath) {
                                _context.next = 6;
                                break;
                            }

                            _context.next = 6;
                            return this.restFileSystem.removeFile(this.editData.currSpriteSheetInEdit._lastPath);

                        case 6:
                            _context.next = 8;
                            return this.restResource.save(model);

                        case 8:
                            resp = _context.sent;

                            if (resp.created) {
                                model.id = resp.id;
                                this.editData.game.repository.addObject(model);
                            } else if (resp.updated) {
                                model.updateCloner();
                                this.editData.game.repository.updateObject(model);
                                this.utils.eachGameObject(function (g) {
                                    if (g.spriteSheet.id == model.id) {
                                        g.spriteSheet = model;
                                        g.revalidate();
                                    }
                                });
                            }
                            RF.getComponentById('spriteSheetModal').close();

                        case 11:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        function createOrEditSpriteSheet(_x) {
            return _ref.apply(this, arguments);
        }

        return createOrEditSpriteSheet;
    }();

    return SpriteSheetDialog;
}(_baseComponent2.default)) || _class);
exports.default = SpriteSheetDialog;

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _dec, _class; /*global RF:true*/


var _baseComponent = __webpack_require__(0);

var _baseComponent2 = _interopRequireDefault(_baseComponent);

__webpack_require__(143);

var _split = __webpack_require__(36);

var _split2 = _interopRequireDefault(_split);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Editor = (_dec = RF.decorateComponent({
    name: 'editor',
    template: __webpack_require__(170)
}), _dec(_class = function (_BaseComponent) {
    _inherits(Editor, _BaseComponent);

    function Editor() {
        _classCallCheck(this, Editor);

        return _possibleConstructorReturn(this, _BaseComponent.call(this));
    }

    Editor.prototype.onMount = function onMount() {
        if (this.splitMounted) return;
        this.splitMounted = true;
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

    return Editor;
}(_baseComponent2.default)) || _class);
exports.default = Editor;

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _dec, _class; /*global RF:true*/


var _baseComponent = __webpack_require__(0);

var _baseComponent2 = _interopRequireDefault(_baseComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GameObjectRow = (_dec = RF.decorateComponent({
    name: 'app-game-object-row',
    template: __webpack_require__(171)
}), _dec(_class = function (_BaseComponent) {
    _inherits(GameObjectRow, _BaseComponent);

    function GameObjectRow() {
        _classCallCheck(this, GameObjectRow);

        var _this = _possibleConstructorReturn(this, _BaseComponent.call(this));

        _this.crud = null;
        _this.gameObject = {};
        _this.draggable = false;
        return _this;
    }

    return GameObjectRow;
}(_baseComponent2.default)) || _class);
exports.default = GameObjectRow;

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _dec, _class; /*global RF:true*/


var _baseComponent = __webpack_require__(0);

var _baseComponent2 = _interopRequireDefault(_baseComponent);

var _font = __webpack_require__(27);

var _font2 = _interopRequireDefault(_font);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Fonts = (_dec = RF.decorateComponent({
    name: 'app-fonts',
    template: __webpack_require__(172)
}), _dec(_class = function (_BaseComponent) {
    _inherits(Fonts, _BaseComponent);

    function Fonts() {
        _classCallCheck(this, Fonts);

        return _possibleConstructorReturn(this, _BaseComponent.call(this));
    }

    Fonts.prototype.createFont = function createFont() {
        this.editData.currFontInEdit = new _font2.default(this.editData.game);
        RF.getComponentById('fontDialog').open();
    };

    Fonts.prototype.editFont = function editFont(fnt) {
        this.editData.currFontInEdit = fnt.clone();
        RF.getComponentById('fontDialog').open();
    };

    Fonts.prototype.deleteFont = function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(model) {
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return this.utils.deleteModel(model);

                        case 2:
                            this.restFileSystem.removeFile(model.resourcePath);

                        case 3:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        function deleteFont(_x) {
            return _ref.apply(this, arguments);
        }

        return deleteFont;
    }();

    return Fonts;
}(_baseComponent2.default)) || _class);
exports.default = Fonts;

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _dec, _class; /*global RF:true*/
/*global alertEx:true*/

var _baseComponent = __webpack_require__(0);

var _baseComponent2 = _interopRequireDefault(_baseComponent);

var _gameObjectProto = __webpack_require__(7);

var _gameObjectProto2 = _interopRequireDefault(_gameObjectProto);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GameObject = (_dec = RF.decorateComponent({
    name: 'app-game-objects',
    template: __webpack_require__(173)
}), _dec(_class = function (_BaseComponent) {
    _inherits(GameObject, _BaseComponent);

    function GameObject() {
        _classCallCheck(this, GameObject);

        return _possibleConstructorReturn(this, _BaseComponent.call(this));
    }

    GameObject.prototype.createGameObject = function createGameObject() {
        this.editData.currGameObjectInEdit = new _gameObjectProto2.default(this.editData.game);
        RF.getComponentById('gameObjectModal').open();
    };

    GameObject.prototype.editGameObjectScript = function editGameObjectScript(model) {
        this.utils.openEditor('scripts/' + model.name + '.js');
    };

    GameObject.prototype.editGameObject = function editGameObject(go) {
        this.editData.currGameObjectInEdit = go.clone();
        RF.getComponentById('gameObjectModal').open();
    };

    GameObject.prototype.deleteGameObject = function deleteGameObject(model) {
        var _this2 = this;

        var scenesUsed = [];
        this.editData.game.repository.getArray('Scene').forEach(function (s) {
            s.layers.forEach(function (l) {
                l.gameObjects.forEach(function (go) {
                    if (go.name == model.name) {
                        if (scenesUsed.indexOf(s) == -1) scenesUsed.push(s);
                    }
                });
            });
        });
        if (scenesUsed.length) return alertEx(this.i18n.get('canNotDelete')(model, scenesUsed));
        this.utils.deleteModel(model, function () {
            _this2.restFileSystem.removeFile('scripts/' + model.name + '.js');
        });
    };

    return GameObject;
}(_baseComponent2.default)) || _class);
exports.default = GameObject;

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _dec, _class; /*global RF:true*/


var _baseComponent = __webpack_require__(0);

var _baseComponent2 = _interopRequireDefault(_baseComponent);

var _consts = __webpack_require__(19);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GameProps = (_dec = RF.decorateComponent({
    name: 'app-game-props',
    template: __webpack_require__(174)
}), _dec(_class = function (_BaseComponent) {
    _inherits(GameProps, _BaseComponent);

    function GameProps() {
        _classCallCheck(this, GameProps);

        var _this = _possibleConstructorReturn(this, _BaseComponent.call(this));

        _this.scales = _consts.SCALE_STRATEGY;
        return _this;
    }

    GameProps.prototype.saveGameProps = function saveGameProps() {
        this.restResource.saveGameProps(this.editData.game.toJSON());
    };

    return GameProps;
}(_baseComponent2.default)) || _class);
exports.default = GameProps;

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _dec, _class; /*global RF:true*/
/*global alertEx:true*/

var _baseComponent = __webpack_require__(0);

var _baseComponent2 = _interopRequireDefault(_baseComponent);

var _particleSystem = __webpack_require__(31);

var _particleSystem2 = _interopRequireDefault(_particleSystem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ParticleSystems = (_dec = RF.decorateComponent({
    name: 'app-particle-systems',
    template: __webpack_require__(175)
}), _dec(_class = function (_BaseComponent) {
    _inherits(ParticleSystems, _BaseComponent);

    function ParticleSystems() {
        _classCallCheck(this, ParticleSystems);

        return _possibleConstructorReturn(this, _BaseComponent.call(this));
    }

    ParticleSystems.prototype.createParticleSystem = function createParticleSystem() {
        this.editData.currParticleSystemInEdit = new _particleSystem2.default(this.editData.game);
        var go = this.editData.game.repository.getArray('GameObjectProto')[0];

        if (!go) {
            alertEx(this.i18n.noGameObject);
            return;
        }

        RF.getComponentById('particleSystemModal').open();
    };

    ParticleSystems.prototype.editParticleSystem = function editParticleSystem(ps) {
        this.editData.currParticleSystemInEdit = ps.clone();
        RF.getComponentById('particleSystemModal').open();
    };

    ParticleSystems.prototype.deleteParticleSystem = function deleteParticleSystem(model) {
        this.utils.deleteModel(model);
    };

    return ParticleSystems;
}(_baseComponent2.default)) || _class);
exports.default = ParticleSystems;

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _dec, _class; /*global RF:true*/
/*global alertEx:true*/


var _baseComponent = __webpack_require__(0);

var _baseComponent2 = _interopRequireDefault(_baseComponent);

var _layer = __webpack_require__(30);

var _layer2 = _interopRequireDefault(_layer);

var _scene = __webpack_require__(32);

var _scene2 = _interopRequireDefault(_scene);

__webpack_require__(144);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Scenes = (_dec = RF.decorateComponent({
    name: 'app-scenes',
    template: __webpack_require__(176)
}), _dec(_class = function (_BaseComponent) {
    _inherits(Scenes, _BaseComponent);

    function Scenes() {
        _classCallCheck(this, Scenes);

        return _possibleConstructorReturn(this, _BaseComponent.call(this));
    }

    Scenes.prototype.setCurrentScene = function setCurrentScene(scene) {
        this.editData.currSceneInEdit = scene;
    };

    Scenes.prototype.setCurrSceneGameObjectInEdit = function setCurrSceneGameObjectInEdit(gameObject) {
        this.editData.currSceneGameObjectInEdit = gameObject;
    };

    Scenes.prototype.setCurrLayer = function setCurrLayer(layer) {
        this.editData.currLayerInEdit = layer;
    };

    Scenes.prototype.createScene = function createScene() {
        this.editData.currSceneInEdit = new _scene2.default(this.editData.game);
        RF.getComponentById('sceneModal').open();
    };

    Scenes.prototype.editScene = function editScene(scene) {
        this.editData.currSceneInEdit = scene.clone();
        RF.getComponentById('sceneModal').open();
    };

    Scenes.prototype.deleteScene = function deleteScene(scene) {
        var _this2 = this;

        if (scene.layers && scene.layers.length > 0) {
            alertEx(this.i18n.get('canNotDelete')(scene, scene.layers.rs));
            return;
        }
        this.utils.deleteModel(scene, function () {
            _this2.restFileSystem.removeFile('scripts/' + scene.name + '.js');
        });
    };

    Scenes.prototype.createLayer = function createLayer(scene) {
        this.editData.currLayerInEdit = new _layer2.default(this.editData.game);
        this.editData.currLayerInEdit._scene = scene;
        RF.getComponentById('layerModal').open();
    };

    Scenes.prototype.editLayer = function editLayer(layer, scene) {
        this.editData.currLayerInEdit = new _layer2.default(this.editData.game);
        this.editData.currLayerInEdit._scene = scene;
        RF.getComponentById('layerModal').open();
    };

    Scenes.prototype.editScript = function editScript(scene) {
        this.utils.openEditor('scripts/' + scene.name + '.js');
    };

    Scenes.prototype.deleteLayer = function deleteLayer(layer, scene) {
        var _this3 = this;

        if (layer.gameObjects.length) return alertEx(this.i18n.get('canNotDelete')(layer, layer.gameObjects));
        this.utils.deleteModel(layer, function () {
            scene.layers.remove(function (it) {
                return it.id == layer.id;
            });
            scene.updateCloner();
            _this3.editData.game.repository.updateObject(scene);
            _this3.restResource.save(scene);
        });
    };

    Scenes.prototype.createGameObject = function createGameObject() {
        console.log('create go invoked');
    };

    Scenes.prototype.editGameObject = function editGameObject(scene) {
        console.log('edit go invoked', scene);
    };

    Scenes.prototype.deleteGameObject = function deleteGameObject(model) {
        var _this4 = this;

        var l = this.editData.currLayerInEdit;
        this.utils.deleteModel(model, function () {
            l.gameObjects.remove(function (it) {
                return it.id == model.id;
            });
            l.updateCloner();
            _this4.editData.game.repository.updateObject(l);
            _this4.restResource.save(l);
        });
    };

    return Scenes;
}(_baseComponent2.default)) || _class);
exports.default = Scenes;

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _dec, _class; /*global RF:true*/

var _baseComponent = __webpack_require__(0);

var _baseComponent2 = _interopRequireDefault(_baseComponent);

var _sound = __webpack_require__(33);

var _sound2 = _interopRequireDefault(_sound);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Sounds = (_dec = RF.decorateComponent({
    name: 'app-sounds',
    template: __webpack_require__(177)
}), _dec(_class = function (_BaseComponent) {
    _inherits(Sounds, _BaseComponent);

    function Sounds() {
        _classCallCheck(this, Sounds);

        return _possibleConstructorReturn(this, _BaseComponent.call(this));
    }

    Sounds.prototype.createSound = function createSound() {
        this.editData.currSoundInEdit = new _sound2.default(this.editData.game);
        RF.getComponentById('soundDialog').open();
    };

    Sounds.prototype.editSound = function editSound(sound) {
        this.editData.currSoundInEdit = sound.clone();
        RF.getComponentById('soundDialog').open();
    };

    Sounds.prototype.deleteSound = function deleteSound(model) {
        var _this2 = this;

        this.utils.deleteModel(model, function () {
            _this2.restFileSystem.removeFile(model.resourcePath);
        });
    };

    return Sounds;
}(_baseComponent2.default)) || _class);
exports.default = Sounds;

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _dec, _class; /*global RF:true*/


var _baseComponent = __webpack_require__(0);

var _baseComponent2 = _interopRequireDefault(_baseComponent);

var _spriteSheet = __webpack_require__(15);

var _spriteSheet2 = _interopRequireDefault(_spriteSheet);

__webpack_require__(135);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SpriteSheets = (_dec = RF.decorateComponent({
    name: 'app-sprite-sheets',
    template: __webpack_require__(178)
}), _dec(_class = function (_BaseComponent) {
    _inherits(SpriteSheets, _BaseComponent);

    function SpriteSheets() {
        _classCallCheck(this, SpriteSheets);

        return _possibleConstructorReturn(this, _BaseComponent.call(this));
    }

    SpriteSheets.prototype.createSpriteSheet = function createSpriteSheet() {
        this.editData.currSpriteSheetInEdit = new _spriteSheet2.default(this.editData.game);
        RF.getComponentById('spriteSheetDialog').open();
    };

    SpriteSheets.prototype.editSpriteSheet = function editSpriteSheet(sprSh) {
        this.editData.currSpriteSheetInEdit = sprSh.clone();
        RF.getComponentById('spriteSheetDialog').open();
    };

    SpriteSheets.prototype.deleteSpriteSheet = function deleteSpriteSheet(model) {
        var _this2 = this;

        var hasDepends = this.editData.game.repository.getArray('GameObject').filter(function (it) {
            return it.spriteSheet.id == model.id;
        }).length > 0;
        if (hasDepends) {
            window.alertEx(this.i18n.canNotDelete(model));
            return;
        }
        this.utils.deleteModel(model, function () {
            _this2.restFileSystem.removeFile(model.resourcePath);
        });
    };

    return SpriteSheets;
}(_baseComponent2.default)) || _class);
exports.default = SpriteSheets;

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _dec, _class; /*global RF:true*/


var _baseComponent = __webpack_require__(0);

var _baseComponent2 = _interopRequireDefault(_baseComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var userInterface = (_dec = RF.decorateComponent({
    name: 'app-user-interface',
    template: __webpack_require__(179)
}), _dec(_class = function (_BaseComponent) {
    _inherits(userInterface, _BaseComponent);

    function userInterface() {
        _classCallCheck(this, userInterface);

        return _possibleConstructorReturn(this, _BaseComponent.call(this));
    }

    return userInterface;
}(_baseComponent2.default)) || _class);
exports.default = userInterface;

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _dec, _class; /*global RF:true*/


var _baseComponent = __webpack_require__(0);

var _baseComponent2 = _interopRequireDefault(_baseComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GameObjectRightPanel = (_dec = RF.decorateComponent({
    name: 'app-game-object-right-panel',
    template: __webpack_require__(180)
}), _dec(_class = function (_BaseComponent) {
    _inherits(GameObjectRightPanel, _BaseComponent);

    function GameObjectRightPanel() {
        _classCallCheck(this, GameObjectRightPanel);

        return _possibleConstructorReturn(this, _BaseComponent.call(this));
    }

    GameObjectRightPanel.prototype.editGameObject = function editGameObject() {
        var model = this.editData.currSceneGameObjectInEdit;
        model.updateCloner();
        this.editData.game.repository.updateObject(model);
        this.restResource.save(model);
    };

    GameObjectRightPanel.prototype.setTextFieldText = function setTextFieldText(e) {
        this.editData.currSceneGameObjectInEdit.setText(e.target.value);
    };

    return GameObjectRightPanel;
}(_baseComponent2.default)) || _class);
exports.default = GameObjectRightPanel;

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _dec, _class; /*global RF:true*/


var _baseComponent = __webpack_require__(0);

var _baseComponent2 = _interopRequireDefault(_baseComponent);

__webpack_require__(145);

var _tileMap = __webpack_require__(34);

var _tileMap2 = _interopRequireDefault(_tileMap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SceneRightPanel = (_dec = RF.decorateComponent({
    name: 'app-scene-right-panel',
    template: __webpack_require__(181)
}), _dec(_class = function (_BaseComponent) {
    _inherits(SceneRightPanel, _BaseComponent);

    function SceneRightPanel() {
        _classCallCheck(this, SceneRightPanel);

        var _this = _possibleConstructorReturn(this, _BaseComponent.call(this));

        var keyPressed = false;
        document.addEventListener('keydown', function (e) {
            if (keyPressed) return;
            keyPressed = true;
            if (e.keyCode === 16) {
                // shift
                _this.toggleEditMode();
                RF.digest();
            }
        });
        document.addEventListener('keyup', function (e) {
            keyPressed = false;
            if (e.keyCode === 16) {
                // shift
                _this.toggleEditMode();
                RF.digest();
            }
        });
        return _this;
    }

    SceneRightPanel.prototype.numOfFramesForSceneSpriteSheet = function numOfFramesForSceneSpriteSheet() {
        var editData = this.editData;
        if (!editData.currSceneInEdit) return 0;
        if (!editData.currSceneInEdit.tileMap) return 0;
        if (!editData.currSceneInEdit.tileMap.spriteSheet) return 0;
        return editData.currSceneInEdit.tileMap.spriteSheet.numOfFramesV * editData.currSceneInEdit.tileMap.spriteSheet.numOfFramesH || 0;
    };

    SceneRightPanel.prototype.createTileMap = function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var currScene, t, res;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            currScene = this.editData.currSceneInEdit;
                            t = new _tileMap2.default(this.editData.game);
                            _context.next = 4;
                            return this.restResource.save(t);

                        case 4:
                            res = _context.sent;

                            t.id = res.id;
                            this.editData.game.repository.addObject(t);
                            currScene.tileMap = t;
                            _context.next = 10;
                            return this.restResource.save(currScene);

                        case 10:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        function createTileMap() {
            return _ref.apply(this, arguments);
        }

        return createTileMap;
    }();

    SceneRightPanel.prototype.setCurrSelectedTile = function setCurrSelectedTile(i) {
        this.editData.currTileIndexInEdit = i;
    };

    SceneRightPanel.prototype.editScene = function editScene() {
        this.restResource.save(this.editData.currSceneInEdit);
    };

    SceneRightPanel.prototype.toggleEditMode = function toggleEditMode() {
        this.editData.editTileMapModeOn = !this.editData.editTileMapModeOn;
    };

    SceneRightPanel.prototype.editTileMap = function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var currScene, tileMap;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            currScene = this.editData.currSceneInEdit;
                            tileMap = currScene.tileMap;
                            _context2.next = 4;
                            return this.restResource.save(tileMap);

                        case 4:
                            this.editData.game.repository.updateObject(tileMap);

                        case 5:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, this);
        }));

        function editTileMap() {
            return _ref2.apply(this, arguments);
        }

        return editTileMap;
    }();

    return SceneRightPanel;
}(_baseComponent2.default)) || _class);
exports.default = SceneRightPanel;

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _dec, _class; /*global RF:true*/


var _baseComponent = __webpack_require__(0);

var _baseComponent2 = _interopRequireDefault(_baseComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var w = void 0;
var PopupBlocked = (_dec = RF.decorateComponent({
    name: 'app-popup-blocked',
    template: '\n        <app-modal id="popupBlockedModal">\n            <div data-transclusion="content">\n                <div>\n                {{i18n.get(\'popupBlocked\')}}\n                </div>\n                <button data-click="openWindow()">{{i18n.get(\'tryAgain\')}}</button>\n            </div>\n        </app-modal>\n    '
}), _dec(_class = function (_BaseComponent) {
    _inherits(PopupBlocked, _BaseComponent);

    function PopupBlocked() {
        _classCallCheck(this, PopupBlocked);

        return _possibleConstructorReturn(this, _BaseComponent.call(this));
    }

    PopupBlocked.prototype.openWindow = function openWindow() {
        RF.getComponentById('topPanel').openWindow();
        RF.getComponentById('popupBlockedModal').close();
    };

    return PopupBlocked;
}(_baseComponent2.default)) || _class);
exports.default = PopupBlocked;

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _dec, _class; /*global RF:true*/


var _baseComponent = __webpack_require__(0);

var _baseComponent2 = _interopRequireDefault(_baseComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//opts: minify minify engineOnly embedResources embedScript

var w = void 0;
var TopPanel = (_dec = RF.decorateComponent({
    name: 'app-top-panel',
    template: __webpack_require__(182)
}), _dec(_class = function (_BaseComponent) {
    _inherits(TopPanel, _BaseComponent);

    function TopPanel() {
        _classCallCheck(this, TopPanel);

        return _possibleConstructorReturn(this, _BaseComponent.call(this));
    }

    TopPanel.prototype.openWindow = function openWindow() {
        var buildOpts = this.editData.buildOpts;
        if (buildOpts.windowed) {
            w = window.open('/' + this.editData.projectName + '/out', this.editData.projectName, '\n                left=' + (window.screen.width - this.editData.game.width) / 2 + ',\n                top=' + (window.screen.height - this.editData.game.height) / 2 + ',\n                width=' + this.editData.game.width + ',\n                height=' + this.editData.game.height + ',\n                toolbar=0,resizable=0');
        } else {
            w = window.open('/' + this.editData.projectName + '/out');
        }
    };

    TopPanel.prototype.run = function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var buildOpts;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            buildOpts = this.editData.buildOpts;

                            if (w) {
                                w.document.title = w.document.body.innerHTML = 'loading...';
                            }
                            _context.next = 4;
                            return this.http.get('/resource/generate', {
                                debug: buildOpts.debug ? '1' : '',
                                r: Math.random(),
                                projectName: this.editData.projectName,
                                minify: buildOpts.minify ? '1' : ''
                            });

                        case 4:

                            if (!w || w.closed) {
                                this.openWindow();
                                if (!w) {
                                    RF.getComponentById('popupBlockedModal').open();
                                }
                            } else {
                                w.location.reload();
                            }
                            w && w.focus();

                        case 6:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        function run() {
            return _ref.apply(this, arguments);
        }

        return run;
    }();

    TopPanel.prototype.showBuildDialog = function showBuildDialog() {
        RF.getComponentById('buildModal').open();
    };

    TopPanel.prototype.toExplorer = function toExplorer() {
        RF.Router.navigateTo('explorer');
    };

    return TopPanel;
}(_baseComponent2.default)) || _class);
exports.default = TopPanel;

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _dec, _class; /*global RF:true*/

var _baseComponent = __webpack_require__(0);

var _baseComponent2 = _interopRequireDefault(_baseComponent);

var _project = __webpack_require__(13);

var _project2 = _interopRequireDefault(_project);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProjectDialog = (_dec = RF.decorateComponent({
    name: 'app-project-dialog',
    template: __webpack_require__(183)
}), _dec(_class = function (_BaseComponent) {
    _inherits(ProjectDialog, _BaseComponent);

    function ProjectDialog() {
        _classCallCheck(this, ProjectDialog);

        var _this = _possibleConstructorReturn(this, _BaseComponent.call(this));

        _this.restProject = _project2.default;
        return _this;
    }

    ProjectDialog.prototype.createOrEditProject = function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(proj) {
            var _this2 = this;

            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            if (!proj.oldName) {
                                _context.next = 7;
                                break;
                            }

                            _context.next = 3;
                            return this.restFileSystem.renameFolder('workspace/' + proj.oldName, 'workspace/' + proj.name);

                        case 3:
                            _context.next = 5;
                            return this.restProject.getAll(function (list) {
                                _this2.editData.projects = list;
                            });

                        case 5:
                            _context.next = 12;
                            break;

                        case 7:
                            _context.next = 9;
                            return this.restProject.create(proj.name);

                        case 9:
                            _context.next = 11;
                            return this.restProject.getAll();

                        case 11:
                            this.editData.projects = _context.sent;

                        case 12:
                            RF.getComponentById('projectDialog').close();

                        case 13:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        function createOrEditProject(_x) {
            return _ref.apply(this, arguments);
        }

        return createOrEditProject;
    }();

    return ProjectDialog;
}(_baseComponent2.default)) || _class);
exports.default = ProjectDialog;

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _dec, _class;
/*global RF:true*/

var _baseComponent = __webpack_require__(0);

var _baseComponent2 = _interopRequireDefault(_baseComponent);

__webpack_require__(146);

var _project = __webpack_require__(13);

var _project2 = _interopRequireDefault(_project);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Explorer = (_dec = RF.decorateComponent({
    name: 'explorer',
    template: __webpack_require__(184)
}), _dec(_class = function (_BaseComponent) {
    _inherits(Explorer, _BaseComponent);

    function Explorer() {
        _classCallCheck(this, Explorer);

        var _this = _possibleConstructorReturn(this, _BaseComponent.call(this));

        _this.restProject = _project2.default;
        return _this;
    }

    Explorer.prototype.onShow = function onShow() {};

    Explorer.prototype.onMount = function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return this.restProject.getAll();

                        case 2:
                            this.editData.projects = _context.sent;

                        case 3:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        function onMount() {
            return _ref.apply(this, arguments);
        }

        return onMount;
    }();

    Explorer.prototype.editProject = function editProject(p) {
        p.oldName = p.name;
        this.editData.currProjectInEdit = {
            name: p.name,
            oldName: p.name
        };
        RF.getComponentById('projectDialog').open();
    };

    Explorer.prototype.createProject = function createProject() {
        this.editData.currProjectInEdit = {
            name: ''
        };
        RF.getComponentById('projectDialog').open();
    };

    Explorer.prototype.openProject = function openProject(project) {
        this.resourceHelper.loadProject(project.name);
    };

    Explorer.prototype.deleteProject = function deleteProject(proj) {
        var _this2 = this;

        window.confirmEx(this.i18n.get('confirmQuestion')(proj), _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            _context2.next = 2;
                            return _this2.restFileSystem.deleteFolder('workspace/' + proj.name);

                        case 2:
                            _context2.next = 4;
                            return _this2.restProject.getAll();

                        case 4:
                            _this2.editData.projects = _context2.sent;

                        case 5:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, _this2);
        })));
    };

    return Explorer;
}(_baseComponent2.default)) || _class);
exports.default = Explorer;

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

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
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*global RF:true*/
window.alertEx = function (message) {
    RF.getComponentById('alertDialog').open(message);
};

window.confirmEx = function (message, callback) {
    RF.getComponentById('confirmDialog').open(message, callback);
};

/***/ }),
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */
/***/ (function(module, exports) {

"use strict";
throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'E:\\vEngine\\client-app\\engine\\core\\game.js'");

/***/ }),
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */
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
/* 135 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 136 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 137 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 138 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 139 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 140 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 141 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 142 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 143 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 144 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 145 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 146 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 147 */
/***/ (function(module, exports) {

module.exports = "<app-modal id=\"alertModal\"><div data-transclusion=\"content\"><div class=\"withMargin\"><div class=\"alert_body\">{{message}}</div><div><button data-click=\"close()\">{{i18n.get('ok')}}</button></div></div></div></app-modal>";

/***/ }),
/* 148 */
/***/ (function(module, exports) {

module.exports = "<div class=\"inlineBlock\" data-click=\"click($event)\" data-mousemove=\"mouseMove($event)\"><div data-container class=\"inlineBlock\"><svg viewBox=\"0 0 200 200\" width=\"30\" height=\"30\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"100\" cy=\"100\" r=\"100\" stroke=\"black\" stroke-width=\"1\" fill=\"white\"></circle><line id=\"line\" x1=\"100\" y1=\"100\" x2=\"200\" y2=\"100\" stroke=\"black\" stroke-width=\"2\" data-attributes=\"{transform:'rotate('+angleInDeg()+',100,100)'}\"></line></svg></div><div class=\"smallXX\" data-attributes=\"{title: object && (object[value]+' rad')}\">{{angleInDeg()}}&deg;</div></div>";

/***/ }),
/* 149 */
/***/ (function(module, exports) {

module.exports = "<div><div class=\"collapsible_header bold noSelect\"><div class=\"table width100\"><div class=\"row\"><div class=\"cell width1\"><span class=\"collapsible_point noBrake\" data-click=\"toggle()\" data-class=\"{rotated:opened}\">▷</span></div><div class=\"cell\"><span data-click=\"toggle()\">&nbsp;{{title}}</span></div><div class=\"cell width1\"><div data-if=\"crud && crud.create\" class=\"add\" data-click=\"crud.create(meta)\"></div></div><div class=\"cell width1\"><div data-if=\"crud && crud.editScript\" class=\"script\" data-click=\"crud.editScript(object)\"></div></div><div class=\"cell width1\"><div data-if=\"crud && crud.edit\" class=\"edit\" data-click=\"crud.edit(object,meta)\"></div></div><div class=\"cell width1\"><div data-if=\"crud && crud.delete\" class=\"delete\" data-click=\"crud.delete(object,meta)\"></div></div></div></div></div><div class=\"collapsible_content\" data-class=\"{opened:opened}\"><div data-transclusion=\"content\"></div></div></div>";

/***/ }),
/* 150 */
/***/ (function(module, exports) {

module.exports = "<div class=\"inlineBlock\"><div data-style=\"{ cursor: 'pointer', width: 24 + 'px', height:24 + 'px', backgroundColor: model && model[field] && ('rgb('+model[field].r+','+model[field].g+','+model[field].b+')') }\" data-click=\"click()\"></div></div>";

/***/ }),
/* 151 */
/***/ (function(module, exports) {

module.exports = "<app-modal id=\"colorPickerModal\" data-transclusion-id=\"colorPicker\"><div data-transclusion=\"content:#colorPicker\"><table><tr><td><input type=\"color\" data-model=\"currentColor.hex\" data-change=\"hexChanged()\"></td><td><input type=\"text\" data-model=\"currentColor.hex\" data-keyup=\"hexChanged()\"></td><td></td></tr><table class=\"width100\"><tr data-for=\"item in colorEnums\"><td data-style=\"{ color: item.left }\">{{item.left}}</td><td class=\"centerText\"><input class=\"vAlign\" type=\"range\" min=\"0\" max=\"255\" data-model=\"currentColor.RGB[item.key]\" data-input=\"rgbChanged()\" data-change=\"rgbChanged()\"><br><input class=\"small vAlign\" data-model=\"currentColor.RGB[item.key]\" data-change=\"rgbChanged()\"><hr></td><td data-style=\"{ color: item.right }\">{{item.right}}</td><td><div data-style=\"{ width: '5px', height: '5px', backgroundColor: getRawColor(currentColor.RGB,item.key) }\"></div></td></tr></table></table><button data-click=\"applyColor()\">{{i18n.get('edit')}}</button></div></app-modal>";

/***/ }),
/* 152 */
/***/ (function(module, exports) {

module.exports = "<app-modal id=\"confirmModal\"><div data-transclusion=\"content\"><div class=\"withMargin\"><div class=\"alert_body\">{{message}}</div><div><button data-click=\"confirmAndClose()\">{{i18n.get('confirm')}}</button><button data-click=\"close()\">{{i18n.get('cancel')}}</button></div></div></div></app-modal>";

/***/ }),
/* 153 */
/***/ (function(module, exports) {

module.exports = "<div><button>{{title}}</button><input required accept=\"{{accept}}\" type=\"file\"></div>";

/***/ }),
/* 154 */
/***/ (function(module, exports) {

module.exports = "<div class=\"dialogWrapper\" data-if=\"opened\"><div class=\"fullscreen shadow\"></div><div class=\"dialog\"><div class=\"dialogContent\"><div class=\"dialogClose\"><span data-click=\"close()\" class=\"pointer\">X</span></div><div class=\"withPadding\"><div data-transclusion=\"content\"></div></div></div></div></div>";

/***/ }),
/* 155 */
/***/ (function(module, exports) {

module.exports = "<table><tr><td></td><td><button data-click=\"onKeyUp()\">&uarr;</button></td><td></td></tr><tr><td><button data-click=\"onKeyLeft()\">&larr;</button></td><td></td><td><button data-click=\"onKeyRight()\">&rarr;</button></td></tr><tr><td></td><td><button data-click=\"onKeyDown()\">&darr;</button></td><td></td></tr></table>";

/***/ }),
/* 156 */
/***/ (function(module, exports) {

module.exports = "<div class=\"height100 relative noOverFlow\" data-droppable=\"onDropFromLeftPanel\" data-click=\"onCentralSceneClick($event)\" data-style=\"{ backgroundColor: editData.currSceneInEdit.useBG?utils.rgbToCss(editData.currSceneInEdit.colorBG):'white' }\" data-draggable-container id=\"sceneDiv\"><div data-for=\"item in editData.currLayerInEdit.gameObjects\"><div data-if=\"item.type=='GameObject'\" app-draggable=\"{ target: item, onDragEnd: onDropFromCentralPanel }\" data-click=\"utils.assign(editData,'currSceneGameObjectInEdit',item)\" data-style=\"utils.merge( utils.getGameObjectCss(item), { position:'absolute', left: item.fixedToCamera?(item.pos.x+'px'): item.pos.x - utils.tileFrameWidth() * editData.tileMapPosX + 'px', top: item.fixedToCamera?(item.pos.y+'px'): item.pos.y - utils.tileFrameHeight() * editData.tileMapPosY + 'px', } )\" data-class=\"{active:item==editData.currSceneGameObjectInEdit}\"></div><div data-if=\"item.type=='TextField'\" app-draggable=\"{ target: item, onDragEnd: onDropFromCentralPanel }\" data-click=\"utils.assign(editData,'currSceneGameObjectInEdit',item)\" data-style=\"utils.merge( utils.getGameObjectCss(item), { position:'absolute', left: item.pos.x - item.width * editData.tileMapPosX + 'px', top: item.pos.y - item.height * editData.tileMapPosY + 'px', backgroundColor:'rgb(0,222,0.1)', height:item.height+'px', width:item.width?item.width+'px':'10px', backgroundColor:item.width?'':'#ddd', backgroundImage:'none' } )\" data-class=\"{active:item==editData.currSceneGameObjectInEdit}\"><div style=\"position: relative;left:0;top:0;z-index:10\"><span data-style=\"getCharCss(item,ch)\" data-for=\"ch in item._chars\"></span></div></div></div></div>";

/***/ }),
/* 157 */
/***/ (function(module, exports) {

module.exports = "<div class=\"height100 relative\" data-if=\"editData.scriptEditorUrl\"><div class=\"scriptEditorClose\" data-click=\"close()\">X</div><div style=\"height:10px;font-size: 10px;\">{{editData.scriptEditorUrl}}</div><div id=\"scriptEditor\" style=\"height:calc(100% - 10px)\"><iframe id=\"scriptEditorFrame\" frameborder=\"0\" class=\"block width100 height100 noOverFlow\" src=\"/editor\"></div></div>";

/***/ }),
/* 158 */
/***/ (function(module, exports) {

module.exports = "<app-modal id=\"buildModal\"><div data-transclusion=\"content\"><table class=\"width100\"><tr><td>{{i18n.get('minify')}}</td><td><input data-change=\"onChanged()\" data-model=\"editData.buildOpts.minify\" type=\"checkbox\"></td></tr><tr><td>{{i18n.get('debug')}}</td><td><input data-change=\"onChanged()\" data-model=\"editData.buildOpts.debug\" type=\"checkbox\"></td></tr><tr><td>{{i18n.get('windowed')}}</td><td><input data-change=\"onChanged()\" data-model=\"editData.buildOpts.windowed\" type=\"checkbox\"></td></tr><tr><td>{{i18n.get('embedResources')}}</td><td><input data-change=\"onChanged()\" data-model=\"editData.buildOpts.embedResources\" type=\"checkbox\"></td></tr></table><button data-click=\"close()\">ok</button></div></app-modal>";

/***/ }),
/* 159 */
/***/ (function(module, exports) {

module.exports = "<app-modal id=\"commonBehaviourModal\"><div data-transclusion=\"content\"><table class=\"width100\"><tr><td class=\"borderBottom\">{{i18n.get('name')}}</td><td class=\"borderBottom\">{{editData.currCommonBehaviourInEdit.name}}</td></tr><tr><td class=\"borderBottom\">{{i18n.get('description')}}</td><td class=\"borderBottom\">{{editData.currCommonBehaviourInEdit.description}}</td></tr><tr data-for=\"value,key in editData.currCommonBehaviourInEdit.parameters\"><td class=\"borderBottom\">{{key}}</td><td class=\"borderBottom\"><input type=\"text\" data-model=\"editData.currCommonBehaviourInEdit.parameters[key]\"></td></tr><tr data-if=\"utils.size(editData.currCommonBehaviourInEdit.parameters)==0\"><td colspan=\"2\" class=\"borderBottom\">{{i18n.get('noDataToEdit')}}</td></tr></table><button data-click=\"createOrEditCommonBehaviour(editData.currCommonBehaviourInEdit)\" data-disabled=\"!form.valid()\">{{editData.currCommonBehaviourInEdit.id?i18n.get('edit'):i18n.get('create')}}</button></div></app-modal>";

/***/ }),
/* 160 */
/***/ (function(module, exports) {

module.exports = "<div><app-sound-dialog id=\"soundDialog\"></app-sound-dialog><app-particle-system-dialog></app-particle-system-dialog><app-font-dialog id=\"fontDialog\"></app-font-dialog><app-sprite-sheet-dialog id=\"spriteSheetDialog\"></app-sprite-sheet-dialog><app-game-object-dialog id=\"gameObjectDialog\"></app-game-object-dialog><app-scene-dialog></app-scene-dialog><app-layer-dialog></app-layer-dialog><app-build-dialog></app-build-dialog></div><app-color-picker-dialog id=\"colorPickerDialog\"></app-color-picker-dialog>";

/***/ }),
/* 161 */
/***/ (function(module, exports) {

module.exports = "<app-modal id=\"fontModal\"><div data-transclusion=\"content\"><table class=\"width100\"><tr><td>{{i18n.get('selectFont')}}</td><td><select data-model=\"editData.currFontInEdit.fontFamily\" class=\"width100\"><option data-value=\"fnt.displayName\" data-for=\"fnt in systemFontList\">{{fnt.displayName}}</option></select></td></tr><tr><td>{{i18n.get('name')}}</td><td><input data-model=\"editData.currFontInEdit.name\" class=\"width100\"></td></tr><tr><td>{{i18n.get('fontSize')}}</td><td><input type=\"number\" min=\"1\" max=\"1000\" data-model=\"editData.currFontInEdit.fontSize\" class=\"width100\"></td></tr><tr><td>{{i18n.get('fontColor')}}</td><td><app-color-picker data-state=\"{ model:editData.currFontInEdit, field:'fontColor' }\"></app-color-picker></td></tr><tr><td colspan=\"2\"><input data-model=\"fontSample\" class=\"width100\"></td></tr><tr><td colspan=\"2\"><div data-style=\"{ fontFamily:editData.currFontInEdit.fontFamily, fontSize:editData.currFontInEdit.fontSize+'px', color:utils.rgbToHex(editData.currFontInEdit.fontColor) }\">{{fontSample}}</div></td></tr></table><button data-disabled=\"!form.valid()\" data-click=\"createOrEditFont(editData.currFontInEdit)\">{{editData.currFontInEdit.id?i18n.get('edit'):i18n.get('create')}}</button></div></app-modal>";

/***/ }),
/* 162 */
/***/ (function(module, exports) {

module.exports = "<app-modal id=\"frameAnimationModal\"><div data-transclusion=\"content\"><table class=\"width100\"><tr><td>{{i18n.get('name')}}</td><td><input required data-model=\"editData.currFrameAnimationInEdit.name\"></td><td rowspan=\"3\"><div style=\"max-height: 80vh;max-width:80vw;overflow: auto;padding: 5px;\">{{ editData.currFrameAnimationInEdit._gameObject && editData.currFrameAnimationInEdit._gameObject.currFrameIndex||0 }}<div data-style=\"utils.merge( utils.getGameObjectCss(editData.currFrameAnimationInEdit._gameObject), {outline:'1px solid blue'} )\"></div><div><button data-click=\"playAnimation()\" data-disabled=\"!form.valid()\" class=\"inlineBlock withMargin\">{{i18n.get('playAnim')}}</button><button data-click=\"stopAnimation()\" data-disabled=\"!form.valid()\" class=\"inlineBlock withMargin\">{{i18n.get('stopAnim')}}</button></div><div><button data-click=\"previousFrame()\" data-disabled=\"!form.valid()\" class=\"inlineBlock withMargin\"><< </button><button data-click=\"nextFrame()\" data-disabled=\"!form.valid()\" class=\"inlineBlock withMargin\">>></button></<><div class=\"relative\" data-style=\"{ 'background-image': 'url('+editData.projectName+'/'+editData.currFrameAnimationInEdit._gameObject.spriteSheet.resourcePath+')', 'width': editData.currFrameAnimationInEdit._gameObject.spriteSheet.width+'px', 'height': editData.currFrameAnimationInEdit._gameObject.spriteSheet.height+'px' }\"><div data-for=\"v,i in getLoopArr()\" data-style=\"{ 'display': 'inline-block', 'left': editData.currFrameAnimationInEdit._gameObject.spriteSheet.getFramePosX(i)+'px', 'top': editData.currFrameAnimationInEdit._gameObject.spriteSheet.getFramePosY(i)+'px', 'position': 'absolute', 'text-align': 'left', 'outline': '1px solid red', 'width': editData.currFrameAnimationInEdit._gameObject.spriteSheet._frameWidth+'px', 'height': editData.currFrameAnimationInEdit._gameObject.spriteSheet._frameHeight+'px' }\">{{i}}</div></div></button></div></div><tr><td>{{i18n.get('duration')}}</td><td><input type=\"number\" min=\"1\" required data-model=\"editData.currFrameAnimationInEdit.duration\"></td></tr><tr><td><table><tr><td>{{i18n.get('frames')}}</td><td><button data-click=\"setAllIndexes()\">{{i18n.get('all')}}</button></td></tr><tr><td>{{i18n.get('from')}}</td><td><input type=\"number\" data-model=\"from\" min=\"0\" data-keyup=\"setRangeIndexes()\"></td></tr><tr><td>{{i18n.get('to')}}</td><td><input type=\"number\" min=\"0\" data-model=\"to\" data-change=\"setRangeIndexes()\"></td></tr><tr><td>{{i18n.get('step')}}</td><td><input type=\"number\" min=\"0\" data-model=\"step\" data-change=\"setRangeIndexes()\"></td></tr></table></td><td><textarea required data-model=\"frames\"></textarea></td></tr></td><button data-click=\"createOrEditFrameAnimation()\" data-disabled=\"!form.valid()\">{{editData.currFrameAnimationInEdit.id?i18n.get('edit'):i18n.get('create')}}</button></tr></table></div></app-modal>";

/***/ }),
/* 163 */
/***/ (function(module, exports) {

module.exports = "<app-modal id=\"gameObjectModal\"><div data-transclusion=\"content\"><table class=\"width100\"><tr><td>{{i18n.get('name')}}</td><td><input required data-model=\"editData.currGameObjectInEdit.name\"></td><td></td><td rowspan=\"5\"><div class=\"relative\" style=\"display: inline-block; overflow: auto; max-width:60vw; max-height:60vh;\"><div data-style=\"utils.merge( utils.getGameObjectCss(editData.currGameObjectInEdit), { 'border':'1px solid blue', 'opacity':editData.currGameObjectInEdit.alpha } )\"></div></div></td></tr><tr><td>{{i18n.get('spriteSheet')}}</td><td><select data-change=\"onSpriteSheetSelected(editData.currGameObjectInEdit.spriteSheet)\" required data-model=\"editData.currGameObjectInEdit.spriteSheet\"><option>--</option><option data-value=\"item\" data-for=\"item in editData.game.repository.getArray('SpriteSheet') track by id\">{{item.name}}</option></select></td><td></td></tr><tr><td>{{i18n.get('groupName')}}</td><td><input data-model=\"editData.currGameObjectInEdit.groupName\"></td><td></td></tr><tr><td>{{i18n.get('rigid')}}</td><td><input type=\"checkbox\" data-model=\"editData.currGameObjectInEdit.rigid\"></td><td></td></tr><tr><td>{{i18n.get('width')}}</td><td><input type=\"number\" required data-model=\"editData.currGameObjectInEdit.width\"></td><td></td></tr><tr><td>{{i18n.get('height')}}</td><td><input type=\"number\" required data-model=\"editData.currGameObjectInEdit.height\"></td><td></td></tr><tr><td>{{i18n.get('angle')}}</td><td><input step=\"0.1\" type=\"number\" required data-model=\"editData.currGameObjectInEdit.angle\"></td><td align=\"left\"><div class=\"inlineBlock\"><app-angle-picker data-state=\"{ object: editData.currGameObjectInEdit, value: 'angle' }\"></app-angle-picker></div></td></tr><tr><td>alpha</td><td><input type=\"number\" min=\"0\" max=\"1\" step=\"0.1\" required data-model=\"editData.currGameObjectInEdit.alpha\"></td><td><input type=\"range\" min=\"0\" max=\"1\" step=\"0.1\" data-model=\"editData.currGameObjectInEdit.alpha\"></td></tr><tr><td>{{i18n.get('currFrameIndex')}}</td><td><input type=\"number\" min=\"0\" data-change=\"refreshGameObjectFramePreview(editData.currGameObjectInEdit,editData.currGameObjectInEdit.currFrameIndex)\" required data-model=\"editData.currGameObjectInEdit.currFrameIndex\"></td><td></td></tr></table><table class=\"width100 stripped\"><tr><th colspan=\"4\">{{i18n.get('frAnimations')}}<button class=\"inlineBlock\" data-disabled=\"!editData.currGameObjectInEdit.id\" data-click=\"createFrameAnimation()\">+</button></th></tr><tr><th colspan=\"2\">{{i18n.get('actions')}}</th><th>{{i18n.get('name')}}</th><th>{{i18n.get('isDefault')}}<span class=\"small withPadding\">{{i18n.get('unselect')}}<button data-click=\"onStartFrameAnimNameChanged(null)\">*</button></span></th></tr><tr data-for=\"animItm in editData.currGameObjectInEdit.frameAnimations\"><td class=\"pointer\" data-click=\"editFrameAnimation(animItm)\"><span class=\"edit\"></span></td><td class=\"pointer\" data-click=\"deleteFrameAnimation(animItm)\"><span class=\"delete\"></span></td><td>{{animItm.name}}</td><td><input data-attribute=\"value: animItm.name\" data-change=\"onStartFrameAnimNameChanged(animItm.name)\" data-model=\"editData.currGameObjectInEdit.startFrameAnimationName\" type=\"radio\"></td></tr><tr><th colspan=\"4\">{{i18n.get('commonBehaviour')}}</th></tr><tr><td colspan=\"2\"><select class=\"width50\" data-model=\"selectedCb\"><option>-</option><option data-disabled=\"isCbItemDisabled(cb)\" data-value=\"cb\" data-for=\"cb in editData.commonBehaviourProtos\">{{cb.name}}</option></select></td><td colspan=\"2\"><button class=\"inlineBlock\" data-disabled=\"!editData.currGameObjectInEdit.id || !selectedCb\" data-click=\"createCommonBehaviour(selectedCb)\">+</button></td></tr><tr><th colspan=\"2\">{{i18n.get('actions')}}</th><th colspan=\"2\">{{i18n.get('name')}}</th></tr><tr data-for=\"itm in editData.currGameObjectInEdit.commonBehaviour\"><td class=\"pointer\" data-click=\"editCommonBehaviour(itm)\"><span class=\"edit\"></span></td><td class=\"pointer\" data-click=\"deleteCommonBehaviour(itm)\"><span class=\"delete\"></span></td><td colspan=\"2\">{{itm.name}}</td></tr></table><button data-disabled=\"!form.valid()\" data-click=\"createOrEditGameObject(editData.currGameObjectInEdit)\">{{editData.currGameObjectInEdit.id?i18n.get('edit'):i18n.get('create')}}</button></div></app-modal><app-frame-animation-dialog id=\"frameAnimationDialog\"></app-frame-animation-dialog><app-common-behaviour-dialog id=\"commonBehaviourDialog\"></app-common-behaviour-dialog>";

/***/ }),
/* 164 */
/***/ (function(module, exports) {

module.exports = "<app-modal id=\"layerModal\"><div data-transclusion=\"content\"><form data-submit=\"createOrEditLayer(editData.currLayerInEdit,editData.currLayerInEdit._scene)\"><div class=\"withPadding\"><div>{{i18n.get('scene')}}: {{editData.currLayerInEdit._scene && editData.currLayerInEdit._scene.name}}</div><b class=\"block centerText\">{{i18n.get('layer')}}</b><div class=\"table width100\"><div class=\"row\"><div class=\"cell\">{{i18n.get('name')}}</div><div class=\"cell\"><input data-model=\"editData.currLayerInEdit.name\" required></div></div></div><div><button data-disabled=\"!form.valid()\">{{editData.currLayerInEdit.id?i18n.get('edit'):i18n.get('create')}}</button></div></div></form></div></app-modal>";

/***/ }),
/* 165 */
/***/ (function(module, exports) {

module.exports = "<app-modal id=\"particleSystemModal\"><div data-transclusion=\"content\"><table class=\"width100\"><tr><td>{{i18n.get('name')}}</td><td></td><td><input required data-model=\"editData.currParticleSystemInEdit.name\"></td></tr><tr><td rowspan=\"2\">numOfParticlesToEmit</td><td>from</td><td><input required type=\"number\" data-model=\"editData.currParticleSystemInEdit.numOfParticlesToEmit.from\"></td></tr><tr><td>to</td><td><input required type=\"number\" data-model=\"editData.currParticleSystemInEdit.numOfParticlesToEmit.to\"></td></tr><tr><td rowspan=\"2\">particleVelocity</td><td>from</td><td><input required type=\"number\" data-model=\"editData.currParticleSystemInEdit.particleVelocity.from\"></td></tr><tr><td>to</td><td><input required type=\"number\" data-model=\"editData.currParticleSystemInEdit.particleVelocity.to\"></td></tr><tr><td rowspan=\"2\">particleLiveTime</td><td>from</td><td><input required type=\"number\" data-model=\"editData.currParticleSystemInEdit.particleLiveTime.from\"></td></tr><tr><td>to</td><td><input required type=\"number\" data-model=\"editData.currParticleSystemInEdit.particleLiveTime.to\"></td></tr><tr><td>emissionRadius</td><td></td><td><input required type=\"number\" data-model=\"editData.currParticleSystemInEdit.emissionRadius\"></td></tr><tr><td>particleAngle</td><td>from / to</td><td><app-angle-picker data-state=\"{ object:editData.currParticleSystemInEdit.particleAngle, value:'from' }\"></app-angle-picker><app-angle-picker data-state=\"{ object:editData.currParticleSystemInEdit.particleAngle, value:'to' }\"></app-angle-picker></td></tr><tr><td></td><td>{{i18n.get('gameObject')}}</td><td><table><tr><td><select required data-change=\"onGameObjectSelected(editData.currParticleSystemInEdit.gameObjectProto)\" data-model=\"editData.currParticleSystemInEdit.gameObjectProto\"><option>--</option><option data-value=\"item\" data-for=\"item in editData.game.repository.getArray('GameObjectProto') track by id\">{{item.name}}</option></select></td><td><div data-style=\"utils.merge( utils.getGameObjectCss(editData.currParticleSystemInEdit.gameObjectProto), { zoom:utils.calcZoom(editData.currParticleSystemInEdit.gameObjectProto) } )\"></div></td></tr></table></td></tr></table><button data-disabled=\"!form.valid()\" data-click=\"createOrEditPs(editData.currParticleSystemInEdit)\">{{editData.currParticleSystemInEdit.id?i18n.get('edit'):i18n.get('create')}}</button><button data-disabled=\"!form.valid()\" data-click=\"showPreview()\">{{i18n.get('preview')}}</button></div></app-modal><app-particle-system-preview-dialog id=\"particleSystemPreviewDialog\"></app-particle-system-preview-dialog>";

/***/ }),
/* 166 */
/***/ (function(module, exports) {

module.exports = "<app-modal id=\"particleSystemPreviewModal\"><div data-transclusion=\"content\"><div>{{i18n.get('preview')}} {{i18n.get('particleSystem')}}<span class=\"underLine\">{{editData.currParticleSystemInEdit.name}}</span></div><div data-click=\"emit($event)\" data-mousemove=\"$event.buttons==1 && emit($event)\" class=\"subFullScreen relative noOverFlow\"><div data-for=\"item in editData.currParticleSystemInEdit._particles\" data-style=\"utils.merge( utils.getGameObjectCss(item), { position:'absolute', left:item.pos.x+'px', top: item.pos.y+'px', pointerEvents:'none' } )\"></div></div><div><button data-click=\"close()\">{{i18n.get('close')}}</button></div></div></app-modal>";

/***/ }),
/* 167 */
/***/ (function(module, exports) {

module.exports = "<app-modal id=\"sceneModal\"><div data-transclusion=\"content\"><form data-submit=\"createOrEditScene(editData.currSceneInEdit)\"><div class=\"withPadding\"><div class=\"table\"><div class=\"row\"><div class=\"cell\">{{i18n.get('name')}}</div><div class=\"cell\"><input required data-model=\"editData.currSceneInEdit.name\"></div></div></div><button data-disabled=\"!form.valid()\">{{editData.currSceneInEdit.id?i18n.get('edit'):i18n.get('create')}}</button></div></form></div></app-modal>";

/***/ }),
/* 168 */
/***/ (function(module, exports) {

module.exports = "<app-modal id=\"soundModal\"><div data-transclusion=\"content\"><table class=\"width100\"><tr><td>{{i18n.get('name')}}</td></tr><tr><td><input required data-model=\"editData.currSoundInEdit.name\"></td></tr><tr><td><app-input-file data-state=\"{ onFilePicked: onFilePicked, title: i18n.get('loadSound'), accept: 'audio/*' }\"></app-input-file></td></tr><tr><td><audio data-if=\"soundUrl\" controls=\"controls\" data-attributes=\"{src:soundUrl}\"></audio></td></tr></table><button data-disabled=\"!(form.valid() && soundUrl)\" data-click=\"createOrEditSound(editData.currSoundInEdit)\">{{editData.currSoundInEdit.id?i18n.get('edit'):i18n.get('create')}}</button></div></app-modal>";

/***/ }),
/* 169 */
/***/ (function(module, exports) {

module.exports = "<app-modal id=\"spriteSheetModal\"><div data-transclusion=\"content\"><table class=\"width100\"><tr><td>{{i18n.get('name')}}</td><td><input data-model=\"editData.currSpriteSheetInEdit.name\"></td><td rowspan=\"6\"><div style=\"max-width:60vw;overflow: auto;padding:5px;\"><div class=\"relative\" data-style=\"{ 'background-image': 'url('+spriteSheetUrl+')', 'background-size': editData.currSpriteSheetInEdit.width+'px '+editData.currSpriteSheetInEdit.height+'px', 'width': editData.currSpriteSheetInEdit.width+'px', 'height': editData.currSpriteSheetInEdit.height+'px', }\"><div data-attributes=\"{title:i}\" data-for=\"i in utils.range(0,numOfSpriteSheetCells-1)\" data-style=\"{ 'display': 'inline-block', 'left': editData.currSpriteSheetInEdit.getFramePosX(i)+'px', 'top': editData.currSpriteSheetInEdit.getFramePosY(i)+'px', 'position': 'absolute', 'text-align': 'left', 'outline': '1px solid red', 'width': editData.currSpriteSheetInEdit._frameWidth+'px', 'height': editData.currSpriteSheetInEdit._frameHeight+'px' }\">{{i}}</div></div></div></td></tr><tr><td>{{i18n.get('image')}}</td><td><app-input-file data-state=\"{ onFilePicked: onFilePicked, title: i18n.get('loadImage'), accept: 'image/*' }\"></app-input-file></td></tr><tr><td>{{i18n.get('width')}}</td><td><input type=\"number\" min=\"1\" data-change=\"revalidate()\" data-model=\"editData.currSpriteSheetInEdit.width\"></td></tr><tr><td>{{i18n.get('height')}}</td><td><input type=\"number\" min=\"1\" data-change=\"revalidate()\" data-model=\"editData.currSpriteSheetInEdit.height\"></td></tr><tr><td>{{i18n.get('numOfFramesH')}}</td><td><input required min=\"1\" max=\"100\" type=\"number\" data-change=\"refreshNumOfCells()\" data-model=\"editData.currSpriteSheetInEdit.numOfFramesH\"></td></tr><tr><td>{{i18n.get('numOfFramesV')}}</td><td><input required min=\"1\" max=\"100\" type=\"number\" data-change=\"refreshNumOfCells()\" data-input=\"refreshNumOfCells()\" data-keyup=\"refreshNumOfCells()\" data-model=\"editData.currSpriteSheetInEdit.numOfFramesV\"></td></tr></table><button data-click=\"createOrEditSpriteSheet(editData.currSpriteSheetInEdit)\" data-disabled=\"!(form.valid() && editData.currSpriteSheetInEdit.resourcePath)\">{{editData.currSpriteSheetInEdit.id?i18n.get('edit'):i18n.get('create')}}</button></div></app-modal>";

/***/ }),
/* 170 */
/***/ (function(module, exports) {

module.exports = "<div class=\"template\"><div class=\"absolute\"><app-top-panel id=\"topPanel\"></app-top-panel></div><div id=\"c\" class=\"split\"><div id=\"a\" class=\"split split-horizontal content\"><app-game-props></app-game-props><app-scenes></app-scenes><app-game-objects></app-game-objects><app-sprite-sheets></app-sprite-sheets><app-user-interface></app-user-interface><app-fonts></app-fonts><app-sounds></app-sounds><app-particle-systems></app-particle-systems></div><div id=\"b\" class=\"split split-horizontal content relative\"><app-script-editor></app-script-editor><div data-if=\"!editData.scriptEditorUrl\" class=\"table width100 height100\"><div class=\"row\"><div class=\"cell height100 vAlign\"><div data-style=\"{ width: editData.game.width + 'px', height: editData.game.height + 'px', overflow: 'auto', border: '1px solid green', margin: '0 auto' }\"><app-scene-central-panel></app-scene-central-panel></div></div></div></div></div><div id=\"e\" class=\"split split-horizontal content\"><app-scene-right-panel></app-scene-right-panel><app-game-object-right-panel></app-game-object-right-panel></div></div><div id=\"d\" class=\"split content\"></div><app-dialogs></app-dialogs></div>";

/***/ }),
/* 171 */
/***/ (function(module, exports) {

module.exports = "<div><div class=\"cell width100\"><div data-style=\"utils.merge( utils.getGameObjectCss(gameObject), { zoom:utils.calcZoom(gameObject), transform: 'scale(1, 1) rotateZ(0deg)', opacity:1 } )\" data-draggable=\"draggable && {obj:gameObject,src: 'leftPanel'}\"></div></div><div class=\"cell\"><span class=\"inlineBlock withPaddingRight\"><span class=\"inlineBlock withPaddingTop withPaddingBottom\">{{gameObject.name}}</span></span></div><div class=\"cell width1\"><div data-if=\"crud && crud.editScript\" class=\"script\" data-click=\"crud.editScript(gameObject)\"></div></div><div class=\"cell width1\"><div data-if=\"crud && crud.edit\" class=\"edit\" data-click=\"crud.edit(gameObject)\"></div></div><div class=\"cell width1\"><div data-if=\"crud && crud.delete\" data-click=\"crud.delete(gameObject)\" class=\"delete\"></div></div></div>";

/***/ }),
/* 172 */
/***/ (function(module, exports) {

module.exports = "<app-collapsible data-state=\"{ crud: {create:createFont}, title:i18n.get('fonts') }\"><div data-transclusion=\"content\"><div class=\"withPaddingLeft\"><div class=\"table width100\"><div class=\"row\" data-for=\"font in editData.game.repository.getArray('Font')\"><div class=\"cell\"><span class=\"inlineBlock withPaddingTop withPaddingBottom\">{{font.name}}</span></div><div class=\"cell width1\"><div class=\"edit\" data-click=\"editFont(font)\"></div></div><div class=\"cell width1\"><div class=\"delete\" data-click=\"deleteFont(font)\"></div></div></div></div></div></div></app-collapsible>";

/***/ }),
/* 173 */
/***/ (function(module, exports) {

module.exports = "<app-collapsible data-state=\"{ title: i18n.get('gameObjects'), crud: { create:createGameObject } }\"><div data-transclusion=\"content\"><div class=\"withPaddingLeft\"><div class=\"table width100\"><div class=\"row\" data-for=\"gameObject in editData.game.repository.getArray('GameObjectProto')\"><app-game-object-row data-state=\"{ crud: { edit: editGameObject, editScript: editGameObjectScript, delete: deleteGameObject }, gameObject: gameObject || {}, draggable: true }\"></app-game-object-row></div></div></div></div></app-collapsible>";

/***/ }),
/* 174 */
/***/ (function(module, exports) {

module.exports = "<app-collapsible data-state=\"{title:i18n.get('game')}\"><div data-transclusion=\"content\"><form class=\"table width100\"><div class=\"row\"><div class=\"cell\">{{i18n.get('width')}}</div><div class=\"cell\"><input class=\"narrow\" data-model=\"editData.game.width\" type=\"number\" min=\"1\" max=\"20000\" data-change=\"form.valid() && saveGameProps()\"></div></div><div class=\"row\"><div class=\"cell\">{{i18n.get('height')}}</div><div class=\"cell\"><input class=\"narrow\" data-model=\"editData.game.height\" type=\"number\" min=\"1\" max=\"20000\" data-change=\"form.valid() && saveGameProps()\"></div></div><div class=\"row\"><div class=\"cell\" tille=\"{{i18n.get('gravityConstantTitle')}}\">{{i18n.get('gravityConstant')}}</div><div class=\"cell\"><input class=\"narrow\" data-model=\"editData.game.gravityConstant\" type=\"number\" min=\"0\" max=\"20000\" data-change=\"form.valid() && saveGameProps()\"></div></div><div class=\"row\"><div class=\"cell\">{{i18n.get('scaleStrategy')}}</div><div class=\"cell\"><select data-model=\"editData.game.scaleStrategy\" data-change=\"form.valid() && saveGameProps()\"><option data-value=\"value\" data-for=\"(value,key) in scales\">{{key}}</option></select></div></div><div class=\"row\"><div class=\"cell\">{{i18n.get('preloadingScene')}}</div><div class=\"cell\"><select data-model=\"editData.game.preloadingSceneId\" data-change=\"form.valid() && saveGameProps()\"><option value>--</option><option data-disabled=\"item.id==editData.gameProps.startSceneId\" data-value=\"item.id\" data-for=\"item in editData.game.repository.getArray('Scene')\">{{item.name}}</option></select></div></div><div class=\"row\"><div class=\"cell\">{{i18n.get('startScene')}}</div><div class=\"cell\"><select data-model=\"editData.game.startSceneId\" data-change=\"form.valid() && saveGameProps()\"><option data-disabled=\"item.id==editData.gameProps.preloadingSceneId\" data-value=\"item.id\" data-for=\"item in editData.game.repository.getArray('Scene')\">{{item.name}}</option></select></div></div></form></div></app-collapsible>";

/***/ }),
/* 175 */
/***/ (function(module, exports) {

module.exports = "<app-collapsible data-state=\"{ crud:{ create:createParticleSystem }, title:i18n.get('particleSystems') }\"><div data-transclusion=\"content\"><div class=\"withPaddingLeft\"><div class=\"table width100\"><div class=\"row\" data-for=\"ps in editData.game.repository.getArray('ParticleSystem')\"><div class=\"cell\"><span class=\"inlineBlock withPaddingTop withPaddingBottom\">{{ps.name}}</span></div><div class=\"cell width1\"><div class=\"edit\" data-click=\"editParticleSystem(ps)\"></div></div><div class=\"cell width1\"><div class=\"delete\" data-click=\"deleteParticleSystem(ps)\"></div></div></div></div></div></div></app-collapsible>";

/***/ }),
/* 176 */
/***/ (function(module, exports) {

module.exports = "<app-collapsible data-transclusion-id=\"scenes\" data-state=\"{ crud: { create:createScene }, title: i18n.get('scenes') }\"><div data-transclusion=\"content:#scenes\"><div class=\"withPaddingLeft\" data-class=\"{ currScene:editData.currSceneInEdit==scene }\" data-for=\"scene in editData.game.repository.getArray('Scene')\" data-click=\"setCurrentScene(scene)\"><app-collapsible data-transclusion-id=\"currScene\" data-state=\"{ crud: { edit:editScene, delete:deleteScene, editScript: editScript }, object: scene, title: scene.name }\"><div data-transclusion=\"content:#currScene\"><div class=\"withPaddingLeft\"><app-collapsible data-transclusion-id=\"layers\" data-state=\"{ title: i18n.get('layers'), meta: scene, crud: { create: createLayer } }\"><div data-transclusion=\"content:#layers\"><div data-click=\"setCurrLayer(layer)\" data-for=\"layer in scene.layers\" class=\"withPaddingLeft\"><app-collapsible data-transclusion-id=\"currLayer\" data-state=\"{ object: layer, meta: scene, crud: { edit:editLayer, delete:deleteLayer }, title: layer.name }\"><div data-transclusion=\"content:#currLayer\"><div class=\"withPaddingLeft\"><div class=\"table width100\"><div data-class=\"{ currSceneGameObject: editData.currSceneGameObjectInEdit==gameObject }\" data-click=\"setCurrSceneGameObjectInEdit(gameObject)\" data-for=\"gameObject in layer.gameObjects\"><app-game-object-row data-state=\"{ gameObject: gameObject, crud: { delete: deleteGameObject }, }\"></app-game-object-row></div></div></div></div></app-collapsible></div></div></app-collapsible></div></div></app-collapsible></div></div></app-collapsible>";

/***/ }),
/* 177 */
/***/ (function(module, exports) {

module.exports = "<app-collapsible data-state=\"{ crud:{ create:createSound }, title:i18n.get('sounds') }\"><div data-transclusion=\"content\"><div class=\"withPaddingLeft\"><div class=\"table width100\"><div class=\"row\" data-for=\"sound in editData.game.repository.getArray('Sound')\"><div class=\"cell\"><span class=\"inlineBlock withPaddingTop withPaddingBottom\">{{sound.name}}</span></div><div class=\"cell width1\"><div class=\"edit\" data-click=\"editSound(sound)\"></div></div><div class=\"cell width1\"><div class=\"delete\" data-click=\"deleteSound(sound)\"></div></div></div></div></div></div></app-collapsible>";

/***/ }),
/* 178 */
/***/ (function(module, exports) {

module.exports = "<app-collapsible data-state=\"{ title: i18n.get('spriteSheets'), crud: { create:createSpriteSheet } }\"><div data-transclusion=\"content\"><div class=\"withPaddingLeft\"><div class=\"table width100\"><div class=\"row\" data-for=\"spriteSheet in editData.game.repository.getArray('SpriteSheet')\"><div class=\"cell\"><img class=\"spriteSheetThumb\" data-attributes=\"{ src: editData.projectName+'/'+spriteSheet.resourcePath, width: spriteSheet.width, height: spriteSheet.height }\"></div><div class=\"cell\"><span class=\"inlineBlock withPaddingTop withPaddingBottom\">{{spriteSheet.name}}</span></div><div class=\"cell width1\"><div class=\"edit\" data-click=\"editSpriteSheet(spriteSheet)\"></div></div><div class=\"cell width1\"><div class=\"delete\" data-click=\"deleteSpriteSheet(spriteSheet)\"></div></div></div></div></div></div></app-collapsible>";

/***/ }),
/* 179 */
/***/ (function(module, exports) {

module.exports = "<app-collapsible data-state=\"{ title: i18n.get('userInterface') }\"><div data-transclusion=\"content\"><div class=\"withPaddingLeft\"><div class=\"table width100\"><div data-draggable=\"{obj:uiObject,src: 'leftPanel'}\" class=\"row\" data-for=\"uiObject in editData.ui\"><div class=\"cell\"><span class=\"inlineBlock withPaddingTop withPaddingBottom\">{{uiObject.type}}</span></div></div></div></div></div></app-collapsible>";

/***/ }),
/* 180 */
/***/ (function(module, exports) {

module.exports = "<app-collapsible data-state=\"{ title: i18n.get('currGameObject') }\"><div data-transclusion=\"content\"><div data-if=\"!editData.currSceneGameObjectInEdit.id\">{{i18n.get('notSelected')}}</div><div class=\"withPadding\" data-if=\"editData.currSceneGameObjectInEdit.id\"><h3 class=\"centerText\">{{editData.currSceneGameObjectInEdit.type}}</h3><div class=\"table width100\"><div class=\"row\"><div class=\"cell\">id</div><div class=\"cell\">{{editData.currSceneGameObjectInEdit.id}}</div></div><div class=\"row\"><div class=\"cell\">name</div><div class=\"cell\"><input required data-change=\"editGameObject()\" class=\"width100\" data-model=\"editData.currSceneGameObjectInEdit.name\"></div></div><div class=\"row\"><div class=\"cell\">pos.x</div><div class=\"cell\"><input data-change=\"editGameObject()\" type=\"number\" class=\"width100\" required data-model=\"editData.currSceneGameObjectInEdit.pos.x\"></div></div><div class=\"row\"><div class=\"cell\">pos.y</div><div class=\"cell\"><input data-change=\"editGameObject()\" type=\"number\" class=\"width100\" required data-model=\"editData.currSceneGameObjectInEdit.pos.y\"></div></div><div class=\"row\"><div class=\"cell\">scale.x</div><div class=\"cell\"><input data-change=\"editGameObject()\" type=\"number\" step=\"0.1\" class=\"width100\" required data-model=\"editData.currSceneGameObjectInEdit.scale.x\"></div></div><div class=\"row\"><div class=\"cell\">scale.y</div><div class=\"cell\"><input data-change=\"editGameObject()\" type=\"number\" step=\"0.1\" class=\"width100\" required data-model=\"editData.currSceneGameObjectInEdit.scale.y\"></div></div><div class=\"row\"><div class=\"cell\">{{i18n.get('width')}}</div><div class=\"cell\"><input data-change=\"editGameObject()\" type=\"number\" class=\"width100\" step=\"1\" required data-model=\"editData.currSceneGameObjectInEdit.width\"></div></div><div class=\"row\"><div class=\"cell\">{{i18n.get('height')}}</div><div class=\"cell\"><input data-change=\"editGameObject()\" type=\"number\" class=\"width100\" step=\"1\" required data-model=\"editData.currSceneGameObjectInEdit.height\"></div></div><div class=\"row\"><div class=\"cell\">{{i18n.get('angle')}}</div><div class=\"cell\"><input data-change=\"editGameObject()\" type=\"number\" class=\"width100\" step=\"0.1\" required data-model=\"editData.currSceneGameObjectInEdit.angle\"></div></div><div class=\"row\"><div class=\"cell\">alpha</div><div class=\"cell\"><input data-change=\"editGameObject()\" type=\"number\" class=\"width100\" step=\"0.1\" required min=\"0\" max=\"1\" data-model=\"editData.currSceneGameObjectInEdit.alpha\"></div></div><div class=\"row\"><div class=\"cell\">{{i18n.get('fixedToCamera')}}</div><div class=\"cell\"><input data-change=\"editGameObject()\" type=\"checkbox\" data-model=\"editData.currSceneGameObjectInEdit.fixedToCamera\" /></div></div><div class=\"row\"><div class=\"cell\">{{i18n.get('rigid')}}</div><div class=\"cell\"><input data-change=\"editGameObject()\" type=\"checkbox\" data-model=\"editData.currSceneGameObjectInEdit.rigid\" /></div></div><div class=\"row\" data-if=\"editData.currSceneGameObjectInEdit.type=='TextField'\"><div class=\"cell\">{{i18n.get('text')}}</div><div class=\"cell\"><textarea data-model=\"editData.currSceneGameObjectInEdit.text\" data-change=\"setTextFieldText($event) || editGameObject()\"></textarea></div></div></div></div></div></app-collapsible>";

/***/ }),
/* 181 */
/***/ (function(module, exports) {

module.exports = "<app-collapsible data-state=\"{title:i18n.get('currScene')}\"><div data-transclusion=\"content\"><div data-if=\"!editData.currSceneInEdit.id\">{{i18n.get('notSelected')}}</div><div class=\"withPadding\" data-if=\"editData.currSceneInEdit.id\"><b class=\"centerText\">{{i18n.get('scene')}} : {{editData.currSceneInEdit.name}}</b><div class=\"table width100\"><div class=\"row\"><div class=\"cell\"><label for=\"editData.currSceneInEdit.useBG\">{{i18n.get('useBG')}}</label></div><div class=\"cell\"><input type=\"checkbox\" id=\"editData.currSceneInEdit.useBG\" data-model=\"editData.currSceneInEdit.useBG\" data-change=\"editScene()\"></div></div><div class=\"row\"><div class=\"cell\">{{i18n.get('width')}}</div><div class=\"cell\"><input type=\"number\" data-model=\"editData.currSceneInEdit.width\" data-change=\"editScene()\"></div></div><div class=\"row\"><div class=\"cell\">{{i18n.get('height')}}</div><div class=\"cell\"><input type=\"number\" data-model=\"editData.currSceneInEdit.height\" data-change=\"editScene()\"></div></div><div class=\"row\" data-if=\"editData.currSceneInEdit.useBG\"><div class=\"cell\">{{i18n.get('colorBG')}}</div><div class=\"cell\"><app-color-picker data-state=\"{ model:editData.currSceneInEdit, field: 'colorBG', onChange: editScene }\"></app-color-picker></div></div><div class=\"row\"><div class=\"cell\"><hr></div><div class=\"cell\"><hr></div></div><div class=\"row\"><div class=\"cell valign bold\">{{i18n.get('tileMap')}}</div><div class=\"cell\"><div data-click=\"createTileMap()\" data-if=\"!editData.currSceneInEdit.tileMap.id\" class=\"add\"></div><div data-if=\"editData.currSceneInEdit.tileMap.id\" class=\"delete\"></div></div></div></div><div data-if=\"editData.currSceneInEdit.tileMap.id\" class=\"table width100\"><div class=\"row\"><div class=\"cell valign\">tileMap.width</div><div class=\"cell\"><input type=\"number\" min=\"0\" maxlength=\"3\" data-change=\"editTileMap()\" data-model=\"editData.currSceneInEdit.tileMap.width\"></div></div><div class=\"row\"><div class=\"cell valign\">tileMap.height</div><div class=\"cell\"><input type=\"number\" min=\"0\" maxlength=\"3\" data-change=\"editTileMap()\" data-model=\"editData.currSceneInEdit.tileMap.height\"></div></div><div class=\"row\"><div class=\"cell\">{{i18n.get('selected')}}</div><div class=\"cell\"><div data-class=\"{ inlineBlock:1, hoverOutline:1 }\" data-style=\"{ width:utils.tileFrameWidth()+'px', verticalAlign:'middle', height:utils.tileFrameHeight()+'px', backgroundImage: utils.tileResourcePath({strict:true}), backgroundPositionX: -utils.tileFramePosX(editData.currTileIndexInEdit)+'px', backgroundPositionY: -utils.tileFramePosY(editData.currTileIndexInEdit)+'px', backgroundRepeat: 'no-repeat' }\"></div><button data-if=\"editData.currTileIndexInEdit!=null\" data-click=\"utils.assign(editData,'currTileIndexInEdit',null)\">{{i18n.get('unset')}}</button></div></div><div class=\"row\"><div class=\"cell\">{{i18n.get('spriteSheets')}}</div><div class=\"cell\"><select data-change=\"editTileMap()\" data-model=\"editData.currSceneInEdit.tileMap.spriteSheet\"><option value>--</option><option data-for=\"item in editData.game.repository.getArray('SpriteSheet') track by id\" data-value=\"item\">{{item.name}}</option></select></div></div></div><div class=\"row\"><div data-click=\"toggleEditMode()\" data-class=\"{ editModeOn:editData.editTileMapModeOn, edit:1 }\"></div><span class=\"small\">(shift)</span></div><div data-style=\"{ width: utils.tileFrameWidth()*utils.tileNumOfFramesH()+'px', overflowX: 'auto', padding: '2px' }\"><div data-class=\"{ inlineBlock:true, selected:i==editData.currTileIndexInEdit, hoverOutline:1 }\" data-style=\"{ width:utils.tileFrameWidth()+'px', verticalAlign:'middle', height:utils.tileFrameHeight()+'px', backgroundImage: utils.tileResourcePath(), backgroundPositionX: -utils.tileFramePosX(i)+'px', backgroundPositionY: -utils.tileFramePosY(i)+'px', backgroundRepeat: 'no-repeat' }\" data-title=\"i\" data-click=\"setCurrSelectedTile(i)\" data-for=\"v,i in utils.getArray(numOfFramesForSceneSpriteSheet())\"></div></div></div></div></app-collapsible>";

/***/ }),
/* 182 */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel withPadding pointer\"><div class=\"inlineBlock withPadding\" data-click=\"showBuildDialog()\">{{i18n.get('build')}}</div><div class=\"inlineBlock withPadding\" data-click=\"run()\">{{i18n.get('run')}}</div><div class=\"inlineBlock withPadding\" data-click=\"toExplorer()\">{{i18n.get('explorer')}}</div></div><app-popup-blocked></app-popup-blocked>";

/***/ }),
/* 183 */
/***/ (function(module, exports) {

module.exports = "<app-modal id=\"projectDialog\"><div data-transclusion=\"content\"><form data-submit=\"createOrEditProject(editData.currProjectInEdit)\"><table class=\"width100\"><tr><td>{{i18n.get('name')}}</td><td><input required data-model=\"editData.currProjectInEdit.name\"></td></tr></table><button>{{editData.currProjectInEdit.oldName?i18n.get('edit'):i18n.get('create')}}</button></form></div></app-modal>";

/***/ }),
/* 184 */
/***/ (function(module, exports) {

module.exports = "<div><div class=\"width50 marginAuto\"><h3 class=\"centerText\">{{i18n.get('projects')}}</h3><div class=\"table width100\"><div data-for=\"p in editData.projects\" class=\"row hoverOnProjectRow\"><div class=\"cell width100\"><div data-click=\"openProject(p)\" class=\"withPadding pointer\">{{p.name}}</div></div><div class=\"cell rightAlign\"><div class=\"edit\" data-click=\"editProject(p)\"></div></div><div class=\"cell rightAlign\"><div data-click=\"deleteProject(p)\" class=\"delete\"></div></div></div><div class=\"row\"><div class=\"cell\"><div class=\"withPadding\"><div class=\"add\" data-click=\"createProject()\"></div></div></div></div></div></div><app-project-dialog></app-project-dialog></div>";

/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(52);
module.exports = __webpack_require__(51);


/***/ })
/******/ ]);