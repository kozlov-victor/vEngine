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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 197);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = __webpack_require__(30);
var editData_1 = __webpack_require__(9);
var restProject_1 = __webpack_require__(46);
var restFileSystem_1 = __webpack_require__(48);
var restResource_1 = __webpack_require__(32);
var resourceHelper_1 = __webpack_require__(47);
var i18n_1 = __webpack_require__(18);
var httpClient_1 = __webpack_require__(19);
var BaseComponent = (function () {
    function BaseComponent() {
        this.form = { valid: function () { return true; } };
        this.editData = editData_1.editData;
        this.restProject = restProject_1.RestProject;
        this.restFileSystem = restFileSystem_1.RestFileSystem;
        this.resourceHelper = resourceHelper_1.ResourceHelper;
        this.restResource = restResource_1.RestResource;
        this.i18n = i18n_1.I18n;
        this.http = httpClient_1.httpClient;
        this.form = { valid: function () { return true; } };
        this.utils = utils_1.Utils;
    }
    return BaseComponent;
}());
exports.BaseComponent = BaseComponent;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var size_1 = __webpack_require__(29);
var point2d_1 = __webpack_require__(3);
var objectPool_1 = __webpack_require__(16);
var global_1 = __webpack_require__(7);
var observableEntity_1 = __webpack_require__(67);
var Rect = (function (_super) {
    tslib_1.__extends(Rect, _super);
    function Rect(x, y, width, height, onChangedFn) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (width === void 0) { width = 0; }
        if (height === void 0) { height = 0; }
        var _this = _super.call(this) || this;
        if (onChangedFn)
            _this.addListener(onChangedFn);
        _this.setXYWH(x, y, width, height);
        return _this;
    }
    Rect.prototype.checkObservableChanged = function () {
        return this._state.setState(this.x, this.y, this.width, this.height);
    };
    Rect.prototype.observe = function (onChangedFn) {
        this.addListener(onChangedFn);
    };
    Rect.prototype.revalidate = function () {
        this.right = this.x + this.width;
        this.bottom = this.y + this.height;
        this.triggerObservable();
    };
    Rect.prototype.setXYWH = function (x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.revalidate();
        return this;
    };
    Rect.prototype.setXY = function (x, y) {
        this.x = x;
        this.y = y;
        this.revalidate();
        return this;
    };
    Rect.prototype.setWH = function (width, height) {
        this.width = width;
        this.height = height;
        this.revalidate();
        return this;
    };
    Rect.prototype.set = function (another) {
        this.setXYWH(another.x, another.y, another.width, another.height);
        return this;
    };
    Rect.prototype.setSize = function (s) {
        this.width = s.width;
        this.height = s.height;
        this.revalidate();
        return this;
    };
    Rect.prototype.setPoint = function (p) {
        p.setXY(p.x, p.y);
        return this;
    };
    Rect.prototype.addXY = function (x, y) {
        this.x += x;
        this.y += y;
        this.revalidate();
        return this;
    };
    Rect.prototype.addPoint = function (another) {
        this.addXY(another.x, another.y);
        return this;
    };
    Rect.prototype.getPoint = function () {
        var _this = this;
        if (this.p === undefined)
            this.p = new point2d_1.Point2d(0, 0);
        this.p.setXY(this.x, this.y);
        this.p.addListener(function () { return _this.setXY(_this.p.x, _this.p.y); });
        return this.p;
    };
    Rect.prototype.getSize = function () {
        if (this.size === undefined)
            this.size = new size_1.Size();
        this.size.setWH(this.width, this.height);
        return this.size;
    };
    Rect.prototype.clone = function () {
        return new Rect(this.x, this.y, this.width, this.height);
    };
    Rect.prototype.toJSON = function () {
        return { x: this.x, y: this.y, width: this.width, height: this.height };
    };
    Rect.prototype.fromJSON = function (x, y, width, height) {
        this.setXYWH(x, y, width, height);
    };
    Rect.fromPool = function () {
        return Rect.rectPool.getNextObject();
    };
    Rect.rectPool = new objectPool_1.ObjectPool(Rect);
    return Rect;
}(observableEntity_1.ObservableEntity));
exports.Rect = Rect;
global_1._global['Rect'] = Rect;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var objectPool_1 = __webpack_require__(16);
var observableEntity_1 = __webpack_require__(67);
var global_1 = __webpack_require__(7);
var Point2d = (function (_super) {
    tslib_1.__extends(Point2d, _super);
    function Point2d(x, y, onChangedFn) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        var _this = _super.call(this) || this;
        _this.x = 0;
        _this.y = 0;
        _this.x = x;
        _this.y = y;
        if (onChangedFn)
            _this.addListener(onChangedFn);
        return _this;
    }
    Point2d.fromPool = function () {
        return Point2d.pool.getNextObject();
    };
    Point2d.prototype.checkObservableChanged = function () {
        return this._state.setState(this.x, this.y);
    };
    Point2d.prototype.observe = function (onChangedFn) {
        this.addListener(onChangedFn);
    };
    Point2d.prototype.setXY = function (x, y) {
        if (y === undefined) {
            y = x;
        }
        this.x = x;
        this.y = y;
        this.triggerObservable();
        return this;
    };
    Point2d.prototype.setX = function (x) {
        this.x = x;
        this.triggerObservable();
        return this;
    };
    Point2d.prototype.setY = function (y) {
        this.y = y;
        this.triggerObservable();
        return this;
    };
    Point2d.prototype.set = function (another) {
        this.setXY(another.x, another.y);
        this.triggerObservable();
        return this;
    };
    Point2d.prototype.add = function (another) {
        this.addXY(another.x, another.y);
        this.triggerObservable();
        return this;
    };
    Point2d.prototype.substract = function (another) {
        this.addXY(-another.x, -another.y);
        this.triggerObservable();
        return this;
    };
    Point2d.prototype.multiply = function (n) {
        this.x *= n;
        this.y *= n;
        this.triggerObservable();
        return this;
    };
    Point2d.prototype.addXY = function (x, y) {
        this.x += x;
        this.y += y;
        this.triggerObservable();
        return this;
    };
    Point2d.prototype.addX = function (x) {
        this.x += x;
        this.triggerObservable();
        return this;
    };
    Point2d.prototype.addY = function (y) {
        this.y += y;
        this.triggerObservable();
        return this;
    };
    Point2d.prototype.negative = function () {
        this.x = -this.x;
        this.y = -this.y;
        this.triggerObservable();
        return this;
    };
    Point2d.prototype.equal = function (val) {
        return this.x === val && this.y === val;
    };
    Point2d.prototype.equalXY = function (x, y) {
        return this.x === x && this.y === y;
    };
    Point2d.prototype.equalPoint = function (point) {
        return this.x === point.x && this.y === point.y;
    };
    Point2d.prototype.clone = function () {
        return new Point2d(this.x, this.y);
    };
    Point2d.prototype.fromJSON = function (json) {
        this.setXY(json.x, json.y);
    };
    Point2d.prototype.toJSON = function () {
        return { x: this.x, y: this.y };
    };
    Point2d.prototype.toArray = function () {
        if (!this._arr)
            this._arr = new Array(2);
        this._arr[0] = this.x;
        this._arr[1] = this.y;
        return this._arr;
    };
    Point2d.pool = new objectPool_1.ObjectPool(Point2d, 4);
    return Point2d;
}(observableEntity_1.ObservableEntity));
exports.Point2d = Point2d;
global_1._global['Point2d'] = Point2d;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var mat4 = __webpack_require__(17);
var point2d_1 = __webpack_require__(3);
exports.isPointInRect = function (point, rect, angle) {
    return point.x > rect.x &&
        point.x < (rect.x + rect.width) &&
        point.y > rect.y &&
        point.y < (rect.y + rect.height);
};
exports.overlapTest = function (a, b) {
    return (a.x < b.x + b.width) &&
        (a.x + a.width > b.x) &&
        (a.y < b.y + b.height) &&
        (a.y + a.height > b.y);
};
exports.radToDeg = function (rad) {
    return rad * 180 / Math.PI;
};
exports.degToRad = function (deg) {
    return deg * Math.PI / 180;
};
exports.rectToPolar = function (point, center) {
    var radius = Math.sqrt(point.x * point.x + center.y * center.y);
    var angle = Math.atan2(center.y - point.y, center.x - point.x);
    return { radius: radius, angle: angle };
};
exports.polarToRect = function (radius, angle, center) {
    var x = radius * Math.cos(angle);
    var y = radius * Math.sin(angle);
    return new point2d_1.Point2d(center.x - x, center.y - y);
};
exports.getDistanceSquared = function (p1, p2) {
    return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
};
var EPSILON_CLOSE_TO = 0.01;
exports.closeTo = function (a, b, epsilon) {
    if (epsilon === void 0) { epsilon = EPSILON_CLOSE_TO; }
    return Math.abs(a - b) <= epsilon;
};
exports.getDistance = function (p1, p2) {
    return Math.sqrt(exports.getDistanceSquared(p1, p2));
};
exports.getAngle = function (p1, p2) {
    var dx = p1.x - p2.x;
    var dy = p1.y - p2.y;
    return Math.atan2(dy, dx);
};
exports.random = function (min, max) {
    if (min > max) {
        var tmp = min;
        min = max;
        max = tmp;
    }
    var res = ~~(Math.random() * (max - min)) + min;
    if (res > max)
        res = max;
    else if (res < min)
        res = min;
    return res;
};
exports.unProject = function (winPoint, width, height, viewProjectionMatrix) {
    var x = 2.0 * winPoint.x / width - 1;
    var y = 2.0 * winPoint.y / height - 1;
    var viewProjectionInverse = mat4.inverse(viewProjectionMatrix);
    var point3D = [x, y, 0, 1];
    var res = mat4.multMatrixVec(viewProjectionInverse, point3D);
    res[0] = (res[0] / 2 + 0.5) * width;
    res[1] = (res[1] / 2 + 0.5) * height;
    return new point2d_1.Point2d(res[0], res[1]);
};
exports.linear = function (t, b, c, d) { return c * t / d + b; };
exports.easeInQuad = function (t, b, c, d) {
    t /= d;
    return c * t * t + b;
};
exports.easeOutQuad = function (t, b, c, d) {
    t /= d;
    return -c * t * (t - 2) + b;
};
exports.easeInOutQuad = function (t, b, c, d) {
    t /= d / 2;
    if (t < 1)
        return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
};
exports.easeInCubic = function (t, b, c, d) {
    t /= d;
    return c * t * t * t + b;
};
exports.easeOutCubic = function (t, b, c, d) {
    t /= d;
    t--;
    return c * (t * t * t + 1) + b;
};
exports.easeInOutCubic = function (t, b, c, d) {
    t /= d / 2;
    if (t < 1)
        return c / 2 * t * t * t + b;
    t -= 2;
    return c / 2 * (t * t * t + 2) + b;
};
exports.easeInQuart = function (t, b, c, d) {
    t /= d;
    return c * t * t * t * t + b;
};
exports.easeOutQuart = function (t, b, c, d) {
    t /= d;
    t--;
    return -c * (t * t * t * t - 1) + b;
};
exports.easeInOutQuart = function (t, b, c, d) {
    t /= d / 2;
    if (t < 1)
        return c / 2 * t * t * t * t + b;
    t -= 2;
    return -c / 2 * (t * t * t * t - 2) + b;
};
exports.easeInQuint = function (t, b, c, d) {
    t /= d;
    return c * t * t * t * t * t + b;
};
exports.easeOutQuint = function (t, b, c, d) {
    t /= d;
    t--;
    return c * (t * t * t * t * t + 1) + b;
};
exports.easeInOutQuint = function (t, b, c, d) {
    t /= d / 2;
    if (t < 1)
        return c / 2 * t * t * t * t * t + b;
    t -= 2;
    return c / 2 * (t * t * t * t * t + 2) + b;
};
exports.easeInSine = function (t, b, c, d) {
    return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
};
exports.easeOutSine = function (t, b, c, d) {
    return c * Math.sin(t / d * (Math.PI / 2)) + b;
};
exports.easeInOutSine = function (t, b, c, d) {
    return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
};
exports.easeInExpo = function (t, b, c, d) {
    return c * Math.pow(2, 10 * (t / d - 1)) + b;
};
exports.easeOutExpo = function (t, b, c, d) {
    return c * (-Math.pow(2, -10 * t / d) + 1) + b;
};
exports.easeInOutExpo = function (t, b, c, d) {
    t /= d / 2;
    if (t < 1)
        return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
    t--;
    return c / 2 * (-Math.pow(2, -10 * t) + 2) + b;
};
exports.easeInCirc = function (t, b, c, d) {
    t /= d;
    return -c * (Math.sqrt(1 - t * t) - 1) + b;
};
exports.easeOutCirc = function (t, b, c, d) {
    t /= d;
    t--;
    return c * Math.sqrt(1 - t * t) + b;
};
exports.easeInOutCirc = function (t, b, c, d) {
    t /= d / 2;
    if (t < 1)
        return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
    t -= 2;
    return c / 2 * (Math.sqrt(1 - t * t) + 1) + b;
};
exports.easeInElastic = function (t, b, c, d) {
    var s = 1.70158, p = 0, a = c;
    if (t === 0)
        return b;
    if ((t /= d) === 1)
        return b + c;
    if (!p)
        p = d * .3;
    if (a < Math.abs(c)) {
        a = c;
        s = p / 4;
    }
    else
        s = p / (2 * Math.PI) * Math.asin(c / a);
    return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
};
exports.easeOutElastic = function (t, b, c, d) {
    var s = 1.70158, p = 0, a = c;
    if (t === 0)
        return b;
    if ((t /= d) === 1)
        return b + c;
    if (!p)
        p = d * .3;
    if (a < Math.abs(c)) {
        a = c;
        s = p / 4;
    }
    else
        s = p / (2 * Math.PI) * Math.asin(c / a);
    return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
};
exports.easeInOutElastic = function (t, b, c, d) {
    var s = 1.70158, p = 0, a = c;
    if (t === 0)
        return b;
    if ((t /= d / 2) === 2)
        return b + c;
    if (!p)
        p = d * (.3 * 1.5);
    if (a < Math.abs(c)) {
        a = c;
        s = p / 4;
    }
    else
        s = p / (2 * Math.PI) * Math.asin(c / a);
    if (t < 1)
        return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
    return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;
};
exports.easeInBack = function (t, b, c, d) {
    var s = 1.70158;
    return c * (t /= d) * t * ((s + 1) * t - s) + b;
};
exports.easeOutBack = function (t, b, c, d) {
    var s = 1.70158;
    return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
};
exports.easeInOutBack = function (t, b, c, d) {
    var s = 1.70158;
    if ((t /= d / 2) < 1)
        return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
    return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b;
};
exports.easeInBounce = function (t, b, c, d) {
    return c - exports.easeOutBounce(d - t, 0, c, d) + b;
};
exports.easeOutBounce = function (t, b, c, d) {
    if ((t /= d) < (1 / 2.75)) {
        return c * (7.5625 * t * t) + b;
    }
    else if (t < (2 / 2.75)) {
        return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b;
    }
    else if (t < (2.5 / 2.75)) {
        return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b;
    }
    else {
        return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b;
    }
};
exports.easeInOutBounce = function (t, b, c, d) {
    if (t < d / 2)
        return exports.easeInBounce(t * 2, 0, c, d) * .5 + b;
    else
        return exports.easeOutBounce(t * 2 - d, 0, c, d) * .5 + c * .5 + b;
};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
exports.alertEx = function (message) {
    RF.getComponentById('alertDialog').open(message);
};
exports.confirmEx = function (message) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
    var resolveFn, p;
    return tslib_1.__generator(this, function (_a) {
        resolveFn = null;
        p = new Promise(function (resolve) {
            resolveFn = resolve;
        });
        RF.getComponentById('confirmDialog').open(message, resolveFn);
        return [2, p];
    });
}); };


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var shaderProgramUtils_1 = __webpack_require__(8);
var ShaderProgram = (function () {
    function ShaderProgram(gl, vertexSource, fragmentSource) {
        var vShader = shaderProgramUtils_1.compileShader(gl, vertexSource, gl.VERTEX_SHADER);
        var fShader = shaderProgramUtils_1.compileShader(gl, fragmentSource, gl.FRAGMENT_SHADER);
        this.program = shaderProgramUtils_1.createProgram(gl, vShader, fShader);
        gl.deleteShader(vShader);
        gl.deleteShader(fShader);
        this.uniforms = shaderProgramUtils_1.extractUniforms(gl, this.program);
        this.attributes = shaderProgramUtils_1.extractAttributes(gl, this.program);
        this.gl = gl;
    }
    ShaderProgram.prototype.getProgram = function () {
        return this.program;
    };
    ShaderProgram.prototype.bind = function () {
        this.gl.useProgram(this.program);
        ShaderProgram.currentProgram = this;
    };
    ShaderProgram.prototype.setUniform = function (name, value) {
        var uniform = this.uniforms[name];
        if (true && !uniform) {
            console.error(this);
            throw "no uniform with name " + name + " found!";
        }
        if (true) {
            if (ShaderProgram.currentProgram !== this) {
                console.error(this);
                throw "can not set uniform: target program is inactive";
            }
        }
        uniform.setter(this.gl, uniform.location, value);
    };
    ShaderProgram.prototype.bindBuffer = function (buffer, attrName) {
        if (true) {
            if (!attrName)
                throw "can not found attribute location: attrLocationName not defined";
            if (this.attributes[attrName] === undefined) {
                console.log(this);
                throw "can not found attribute location for  " + attrName;
            }
        }
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, buffer.getGlBuffer());
        var attrLocation = this.attributes[attrName];
        this.gl.enableVertexAttribArray(attrLocation);
        this.gl.vertexAttribPointer(attrLocation, buffer.getItemSize(), buffer.getItemType(), false, 0, 0);
    };
    ShaderProgram.prototype.destroy = function () {
        this.gl.deleteProgram(this.program);
    };
    ShaderProgram.currentProgram = null;
    return ShaderProgram;
}());
exports.ShaderProgram = ShaderProgram;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports._global = {};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.compileShader = function (gl, shaderSource, shaderType) {
    if (true) {
        if (!shaderSource)
            throw "can not compile shader: shader source not specified for type " + shaderType;
    }
    var shader = gl.createShader(shaderType);
    if (true && !shader)
        throw "can not allocate memory for shader: gl.createShader(shaderType)";
    gl.shaderSource(shader, shaderSource);
    gl.compileShader(shader);
    var compiled = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
    if (!compiled) {
        var lastError = gl.getShaderInfoLog(shader);
        gl.deleteShader(shader);
        if (true) {
            console.log(shaderSource);
            throw "Error compiling shader: " + lastError;
        }
        else {}
    }
    return shader;
};
exports.createProgram = function (gl, vertexShader, fragmentShader) {
    var program = gl.createProgram();
    if (true && !program)
        throw "can not allocate memory for gl.createProgram()";
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    var linked = gl.getProgramParameter(program, gl.LINK_STATUS);
    if (!linked) {
        gl.deleteProgram(program);
        var lastError = gl.getProgramInfoLog(program);
        if (true) {
            var status_1 = gl.getProgramParameter(program, gl.VALIDATE_STATUS);
            console.error('VALIDATE_STATUS', status_1);
            throw "Error in program linking " + lastError;
        }
        else {}
    }
    return program;
};
var GL_TABLE = null;
exports.GL_TYPE = {
    FLOAT: 'float',
    FLOAT_VEC2: 'vec2',
    FLOAT_VEC3: 'vec3',
    FLOAT_VEC4: 'vec4',
    INT: 'int',
    INT_VEC2: 'ivec2',
    INT_VEC3: 'ivec3',
    INT_VEC4: 'ivec4',
    BOOL: 'bool',
    BOOL_VEC2: 'bvec2',
    BOOL_VEC3: 'bvec3',
    BOOL_VEC4: 'bvec4',
    FLOAT_MAT2: 'mat2',
    FLOAT_MAT3: 'mat3',
    FLOAT_MAT4: 'mat4',
    SAMPLER_2D: 'sampler2D',
};
var mapType = function (gl, type) {
    if (!GL_TABLE) {
        var typeNames = Object.keys(exports.GL_TYPE);
        GL_TABLE = {};
        for (var i = 0; i < typeNames.length; ++i) {
            var tn = typeNames[i];
            GL_TABLE[gl[tn]] = exports.GL_TYPE[tn];
        }
    }
    return GL_TABLE[type];
};
exports.extractUniforms = function (gl, program) {
    var activeUniforms = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);
    var uniforms = {};
    for (var i = 0; i < activeUniforms; i++) {
        var uniformData = gl.getActiveUniform(program, i);
        if (true && !uniformData)
            throw "can not receive active uniforms info: gl.getActiveUniform()";
        var type = mapType(gl, uniformData.type);
        var location_1 = gl.getUniformLocation(program, uniformData.name);
        if (true && location_1 === null)
            throw "error finding uniform location: " + uniformData.name;
        uniforms[uniformData.name] = {
            type: type,
            size: uniformData.size,
            location: location_1,
            setter: exports.getUniformSetter(uniformData.size, type)
        };
    }
    return uniforms;
};
exports.extractAttributes = function (gl, program) {
    var activeAttributes = gl.getProgramParameter(program, gl.ACTIVE_ATTRIBUTES);
    var attrMap = {};
    for (var i = 0; i < activeAttributes; i++) {
        var attrData = gl.getActiveAttrib(program, i);
        if (true && !attrData)
            throw "can not receive active attribute info: gl.getActiveAttrib()";
        var location_2 = gl.getAttribLocation(program, attrData.name);
        if (true && location_2 < 0)
            throw "error finding attribute location: " + attrData.name;
        attrMap[attrData.name] = location_2;
    }
    return attrMap;
};
var TypeNumber = {
    check: function (val) {
        if (isNaN(parseFloat(val)) || !isFinite(val))
            throw "can not set uniform with value " + val + ": expected argument of type number";
    }
};
var TypeInt = {
    check: function (val) {
        TypeNumber.check(val);
        if (val !== ~~val)
            throw "can not set uniform with value " + val + ": expected argument of integer type, but " + val + " found";
    }
};
var TypeBool = {
    check: function (val) {
        if (!(val == true || val == false))
            throw "can not set uniform with value " + val + ": expected argument of boolean type, but " + val + " found";
    }
};
var TypeArray = function (checker, size) {
    return {
        check: function (val) {
            if (!val)
                throw "can not set uniform  value: " + val;
            if (!val.splice) {
                console.error('Can not set uniform value', val);
                throw "can not set uniform with value [" + val + "]: expected argument of type Array";
            }
            if (size !== undefined && val.length !== size)
                throw "can not set uniform with value [" + val + "]: expected array with size " + size + ", but " + val.length + " found";
            for (var i = 0; i < val.length; i++) {
                try {
                    checker.check(val[i]);
                }
                catch (e) {
                    console.error('Can not set uniform array item', val);
                    throw "can not set uniform array item with value [" + val + "]: unexpected array element type: " + val[i];
                }
            }
        }
    };
};
var expect = function (value, typeChecker) {
    typeChecker.check(value);
};
exports.getUniformSetter = function (size, type) {
    if (size === 1) {
        switch (type) {
            case 'float': return function (gl, location, value) {
                true && expect(value, TypeNumber);
                gl.uniform1f(location, value);
            };
            case 'vec2': return function (gl, location, value) {
                true && expect(value, TypeArray(TypeNumber, 2));
                gl.uniform2f(location, value[0], value[1]);
            };
            case 'vec3': return function (gl, location, value) {
                true && expect(value, TypeArray(TypeNumber, 3));
                gl.uniform3f(location, value[0], value[1], value[2]);
            };
            case 'vec4': return function (gl, location, value) {
                true && expect(value, TypeArray(TypeNumber, 4));
                gl.uniform4f(location, value[0], value[1], value[2], value[3]);
            };
            case 'int': return function (gl, location, value) {
                true && expect(value, TypeInt);
                gl.uniform1i(location, value);
            };
            case 'ivec2': return function (gl, location, value) {
                true && expect(value, TypeArray(TypeInt, 2));
                gl.uniform2i(location, value[0], value[1]);
            };
            case 'ivec3': return function (gl, location, value) {
                true && expect(value, TypeArray(TypeInt, 3));
                gl.uniform3i(location, value[0], value[1], value[2]);
            };
            case 'ivec4': return function (gl, location, value) {
                true && expect(value, TypeArray(TypeInt, 4));
                gl.uniform4i(location, value[0], value[1], value[2], value[3]);
            };
            case 'bool': return function (gl, location, value) {
                true && expect(value, TypeBool);
                gl.uniform1i(location, value);
            };
            case 'bvec2': return function (gl, location, value) {
                true && expect(value, TypeArray(TypeBool, 2));
                gl.uniform2i(location, value[0], value[1]);
            };
            case 'bvec3': return function (gl, location, value) {
                true && expect(value, TypeArray(TypeBool, 3));
                gl.uniform3i(location, value[0], value[1], value[2]);
            };
            case 'bvec4': return function (gl, location, value) {
                true && expect(value, TypeArray(TypeBool, 4));
                gl.uniform4i(location, value[0], value[1], value[2], value[3]);
            };
            case 'mat2': return function (gl, location, value) {
                true && expect(value, TypeArray(TypeNumber, 2 * 2));
                gl.uniformMatrix2fv(location, false, value);
            };
            case 'mat3': return function (gl, location, value) {
                true && expect(value, TypeArray(TypeNumber, 3 * 3));
                gl.uniformMatrix3fv(location, false, value);
            };
            case 'mat4': return function (gl, location, value) {
                true && expect(value, TypeArray(TypeNumber, 4 * 4));
                gl.uniformMatrix4fv(location, false, value);
            };
            case 'sampler2D': return function (gl, location, value) {
                true && expect(value, TypeInt);
                gl.uniform1i(location, value);
            };
            default:
                if (true)
                    throw "can not set uniform for type " + type + " and size " + size;
                break;
        }
    }
    else {
        switch (type) {
            case 'float': return function (gl, location, value) {
                true && expect(value, TypeArray(TypeNumber));
                gl.uniform1fv(location, value);
            };
            case 'vec2': return function (gl, location, value) {
                true && expect(value, TypeArray(TypeNumber));
                gl.uniform2fv(location, value);
            };
            case 'vec3': return function (gl, location, value) {
                true && expect(value, TypeArray(TypeNumber));
                gl.uniform3fv(location, value);
            };
            case 'vec4': return function (gl, location, value) {
                true && expect(value, TypeArray(TypeNumber));
                gl.uniform4fv(location, value);
            };
            case 'int': return function (gl, location, value) {
                true && expect(value, TypeArray(TypeInt));
                gl.uniform1iv(location, value);
            };
            case 'ivec2': return function (gl, location, value) {
                true && expect(value, TypeArray(TypeInt));
                gl.uniform2iv(location, value);
            };
            case 'ivec3': return function (gl, location, value) {
                true && expect(value, TypeArray(TypeInt));
                gl.uniform3iv(location, value);
            };
            case 'ivec4': return function (gl, location, value) {
                true && expect(value, TypeArray(TypeInt));
                gl.uniform4iv(location, value);
            };
            case 'bool': return function (gl, location, value) {
                true && expect(value, TypeArray(TypeBool));
                gl.uniform1iv(location, value);
            };
            case 'bvec2': return function (gl, location, value) {
                true && expect(value, TypeArray(TypeBool));
                gl.uniform2iv(location, value);
            };
            case 'bvec3': return function (gl, location, value) {
                true && expect(value, TypeArray(TypeBool));
                gl.uniform3iv(location, value);
            };
            case 'bvec4': return function (gl, location, value) {
                true && expect(value, TypeArray(TypeBool));
                gl.uniform4iv(location, value);
            };
            case 'sampler2D': return function (gl, location, value) {
                true && expect(value, TypeArray(TypeBool));
                gl.uniform1iv(location, value);
            };
            default:
                if (true)
                    throw "can not set uniform for type " + type + " and size " + size;
                break;
        }
    }
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var gameObjectProto_1 = __webpack_require__(15);
var spriteSheet_1 = __webpack_require__(24);
var frameAnimation_1 = __webpack_require__(44);
var scene_1 = __webpack_require__(43);
var layer_1 = __webpack_require__(23);
var font_1 = __webpack_require__(41);
var sound_1 = __webpack_require__(40);
var particleSystem_1 = __webpack_require__(39);
var game_1 = __webpack_require__(177);
var gameObject_1 = __webpack_require__(20);
var EditData = (function () {
    function EditData() {
        this.editTileMapModeOn = false;
        this.currSceneGameObjectInEdit = {
            pos: {},
            scale: {}
        };
        this.commonBehaviourProtos = [];
        this.ui = [];
        this.projectName = '';
        this.reset(null);
    }
    EditData.prototype.reset = function (gameProps) {
        this.projectName = '';
        this.projects = [];
        if (!gameProps)
            return;
        var g = new game_1.Game();
        g.fromJSON(gameProps || { width: 0, height: 0 });
        this.game = g;
        this.editTileMapModeOn = false;
        this.commonBehaviourList = [];
        this.currGameObjectInEdit = new gameObjectProto_1.GameObjectProto(g);
        this.currSpriteSheetInEdit = new spriteSheet_1.SpriteSheet(g);
        this.currFrameAnimationInEdit = new frameAnimation_1.FrameAnimation(g);
        this.currFrameAnimationInEdit._gameObject = new gameObject_1.GameObject(g);
        this.currSceneInEdit = new scene_1.Scene(g);
        this.currSceneGameObjectInEdit = {
            pos: {},
            scale: {}
        };
        this.currLayerInEdit = new layer_1.Layer(g);
        this.currFontInEdit = new font_1.Font(g);
        this.currSoundInEdit = new sound_1.Sound(g);
        this.currParticleSystemInEdit = new particleSystem_1.ParticleSystem(g);
        this.currProjectInEdit = {};
        this.currTileIndexInEdit = null;
        this.commonBehaviourProto = [];
        this.debugFrameUrl = '';
        this.scriptEditorUrl = '';
        this.tileMapPosY = this.tileMapPosX = 0;
        try {
            this.buildOpts = JSON.parse(localStorage['buildOpts']);
        }
        catch (e) {
            this.buildOpts = {
                debug: false,
                minify: false,
                windowed: false,
                embedResources: false
            };
        }
    };
    return EditData;
}());
exports.editData = new EditData();
window.editData = exports.editData;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var isEqual = function (a, b) {
    if (a === undefined)
        return false;
    if (a.splice)
        return false;
    return a === b;
};
var AbstractDrawer = (function () {
    function AbstractDrawer(gl) {
        this.program = null;
        this.uniformCache = {};
        this.gl = gl;
        AbstractDrawer.instances.push(this);
    }
    AbstractDrawer.prototype.bind = function () {
        if (AbstractDrawer.currentInstance !== null &&
            AbstractDrawer.currentInstance !== this) {
            AbstractDrawer.currentInstance.unbind();
        }
        AbstractDrawer.currentInstance = this;
        this.bufferInfo.bind(this.program);
    };
    AbstractDrawer.prototype.unbind = function () {
        this.bufferInfo.unbind();
    };
    AbstractDrawer.prototype.destroy = function () {
        this.bufferInfo.destroy();
        this.program.destroy();
    };
    AbstractDrawer.destroyAll = function () {
        AbstractDrawer.instances.forEach(function (it) {
            it.destroy();
        });
    };
    AbstractDrawer.prototype.setUniform = function (name, value) {
        if (isEqual(this.uniformCache[name], value))
            return;
        this.program.setUniform(name, value);
        this.uniformCache[name] = value;
    };
    AbstractDrawer.prototype.drawElements = function () {
        this.bufferInfo.draw();
    };
    AbstractDrawer.prototype.draw = function (textureInfos, uniforms, unused) {
        var _this = this;
        this.bind();
        Object.keys(uniforms).forEach(function (name) { return _this.setUniform(name, uniforms[name]); });
        if (textureInfos) {
            textureInfos.forEach(function (t, i) {
                t.texture.bind(t.name, i, _this.program);
            });
        }
        this.drawElements();
    };
    AbstractDrawer.currentInstance = null;
    AbstractDrawer.instances = [];
    return AbstractDrawer;
}());
exports.AbstractDrawer = AbstractDrawer;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var timer_1 = __webpack_require__(180);
var commonObject_1 = __webpack_require__(26);
var tween_1 = __webpack_require__(65);
var eventEmitter_1 = __webpack_require__(64);
var decorators_1 = __webpack_require__(25);
var rect_1 = __webpack_require__(2);
var point2d_1 = __webpack_require__(3);
var BaseModel = (function (_super) {
    tslib_1.__extends(BaseModel, _super);
    function BaseModel(game) {
        var _this = _super.call(this) || this;
        _this.width = 0;
        _this.height = 0;
        _this.pos = new point2d_1.Point2d(0, 0, function () { return _this._dirty = true; });
        _this.scale = new point2d_1.Point2d(1, 1);
        _this.anchor = new point2d_1.Point2d(0, 0);
        _this.angle = 0;
        _this.alpha = 1;
        _this.layerId = null;
        _this.fixedToCamera = false;
        _this.rigid = false;
        _this._tweens = [];
        _this._dirty = true;
        _this._timers = [];
        _this._rect = new rect_1.Rect(0, 0);
        if (true && !game)
            throw ("can not create model '" + _this.type + "': game instance not passed to model constructor");
        _this.game = game;
        _this._emitter = new eventEmitter_1.EventEmitter();
        return _this;
    }
    BaseModel.prototype.setIndividualBehaviour = function (instance) { };
    BaseModel.prototype.setCommonBehaviour = function () { };
    BaseModel.prototype.onShow = function () { };
    BaseModel.prototype.getRect = function () {
        this._rect.setXYWH(this.pos.x - this.anchor.x, this.pos.y - this.anchor.y, this.width, this.height);
        return this._rect;
    };
    BaseModel.prototype.setAnchorToCenter = function () {
        this.anchor.setXY(this.width / 2, this.height / 2);
    };
    BaseModel.prototype.setTimer = function (callback, interval) {
        this._timers.push(new timer_1.Timer(callback, interval));
    };
    BaseModel.prototype.tween = function (desc) {
        var t = new tween_1.Tween(desc);
        this._tweens.push(t);
    };
    BaseModel.prototype.update = function (time, delta) {
        var _this = this;
        this._tweens.forEach(function (t, index) {
            t.update(time);
            if (t.isCompleted())
                _this._tweens.splice(index, 1);
        });
        this._timers.forEach(function (t) {
            t.onUpdate(time);
        });
    };
    BaseModel.prototype.on = function (eventName, callBack) {
        this._emitter.on(eventName, callBack);
        return callBack;
    };
    BaseModel.prototype.off = function (eventName, callBack) {
        this._emitter.off(eventName, callBack);
    };
    BaseModel.prototype.trigger = function (eventName, data) {
        this._emitter.trigger(eventName, data);
    };
    BaseModel = tslib_1.__decorate([
        decorators_1.Transient({
            game: true,
            rigidBody: true
        })
    ], BaseModel);
    return BaseModel;
}(commonObject_1.CommonObject));
exports.BaseModel = BaseModel;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var container_1 = __webpack_require__(21);
var rect_1 = __webpack_require__(2);
var TEXT_ALIGN;
(function (TEXT_ALIGN) {
    TEXT_ALIGN[TEXT_ALIGN["LEFT"] = 0] = "LEFT";
    TEXT_ALIGN[TEXT_ALIGN["RIGHT"] = 1] = "RIGHT";
    TEXT_ALIGN[TEXT_ALIGN["CENTER"] = 2] = "CENTER";
    TEXT_ALIGN[TEXT_ALIGN["JUSTIFY"] = 3] = "JUSTIFY";
})(TEXT_ALIGN = exports.TEXT_ALIGN || (exports.TEXT_ALIGN = {}));
var TextInfo = (function () {
    function TextInfo() {
        this.allCharsCached = [];
        this.width = 0;
        this.height = 0;
        this.strings = [];
    }
    TextInfo.prototype.reset = function () {
        this.allCharsCached = [];
        this.strings = [];
    };
    TextInfo.prototype.newString = function () {
        this.strings.push(new StringInfo());
    };
    TextInfo.prototype.newChar = function (c) {
        this.strings[this.strings.length - 1].chars.push(c);
        this.allCharsCached.push(c);
    };
    TextInfo.prototype.revalidate = function (defaultSymbolHeight) {
        this.height = 0;
        this.width = 0;
        for (var _i = 0, _a = this.strings; _i < _a.length; _i++) {
            var s = _a[_i];
            s.calcSize(defaultSymbolHeight);
            this.height += s.height;
            if (s.width > this.width)
                this.width = s.width;
        }
    };
    TextInfo.prototype.align = function (textAlign) {
        for (var _i = 0, _a = this.strings; _i < _a.length; _i++) {
            var s = _a[_i];
            s.align(textAlign, this.width);
        }
    };
    return TextInfo;
}());
var CharInfo = (function () {
    function CharInfo() {
        this.destRect = new rect_1.Rect();
        this.sourceRect = new rect_1.Rect();
    }
    return CharInfo;
}());
var CharsHolder = (function () {
    function CharsHolder() {
        this.chars = [];
    }
    CharsHolder.prototype.moveBy = function (dx, dy) {
        for (var _i = 0, _a = this.chars; _i < _a.length; _i++) {
            var ch = _a[_i];
            ch.destRect.getPoint().addXY(dx, dy);
        }
    };
    CharsHolder.prototype.moveTo = function (x, y) {
        var initialOffsetX = 0;
        for (var _i = 0, _a = this.chars; _i < _a.length; _i++) {
            var ch = _a[_i];
            ch.destRect.getPoint().setXY(initialOffsetX + x, y);
            initialOffsetX += ch.sourceRect.width;
        }
    };
    return CharsHolder;
}());
var WordInfo = (function (_super) {
    tslib_1.__extends(WordInfo, _super);
    function WordInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WordInfo.prototype.revalidate = function () {
        this.width = 0;
        for (var _i = 0, _a = this.chars; _i < _a.length; _i++) {
            var ch = _a[_i];
            this.width += ch.destRect.width;
        }
    };
    return WordInfo;
}(CharsHolder));
var StringInfo = (function (_super) {
    tslib_1.__extends(StringInfo, _super);
    function StringInfo() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.chars = [];
        _this.width = 0;
        _this.height = 0;
        return _this;
    }
    StringInfo.prototype.calcSize = function (defaultSymbolHeight) {
        this.width = 0;
        this.height = defaultSymbolHeight;
        for (var _i = 0, _a = this.chars; _i < _a.length; _i++) {
            var ch = _a[_i];
            this.width += ch.sourceRect.width;
        }
    };
    StringInfo.prototype.toWords = function () {
        var res = [];
        var currWord = new WordInfo();
        for (var _i = 0, _a = this.chars; _i < _a.length; _i++) {
            var ch = _a[_i];
            if (ch.symbol === ' ') {
                if (currWord.chars.length) {
                    res.push(currWord);
                    currWord = new WordInfo();
                }
            }
            else {
                currWord.chars.push(ch);
            }
        }
        if (res.indexOf(currWord) === -1)
            res.push(currWord);
        return res;
    };
    StringInfo.prototype.align = function (textAlign, textRectWidth) {
        switch (textAlign) {
            case TEXT_ALIGN.LEFT:
                break;
            case TEXT_ALIGN.CENTER:
                var offset = textRectWidth - this.width;
                if (offset < 0)
                    return;
                offset /= 2;
                this.moveBy(offset, 0);
                break;
            case TEXT_ALIGN.RIGHT:
                offset = textRectWidth - this.width;
                if (offset < 0)
                    return;
                this.moveBy(offset, 0);
                break;
            case TEXT_ALIGN.JUSTIFY:
                var words = this.toWords();
                if (words.length <= 1)
                    return;
                if (!words[0].chars.length)
                    return;
                var totalWordsWidth_1 = 0;
                words.forEach(function (w) {
                    w.revalidate();
                    totalWordsWidth_1 += w.width;
                });
                var totalSpaceWidth = textRectWidth - totalWordsWidth_1;
                var oneSpaceWidth = totalSpaceWidth / (words.length - 1);
                var initialPosY = this.chars[0].destRect.getPoint().y;
                var currXPointer = this.chars[0].destRect.getPoint().x;
                for (var i = 0; i < words.length; i++) {
                    var w = words[i];
                    w.moveTo(currXPointer, initialPosY);
                    currXPointer += w.width + oneSpaceWidth;
                }
        }
    };
    return StringInfo;
}(CharsHolder));
var TextField = (function (_super) {
    tslib_1.__extends(TextField, _super);
    function TextField(game) {
        var _this = _super.call(this, game) || this;
        _this.type = 'TextField';
        _this._textInfo = new TextInfo();
        _this.text = '';
        _this.font = null;
        _this.textAlign = TEXT_ALIGN.LEFT;
        return _this;
    }
    TextField.prototype.revalidate = function () {
        _super.prototype.revalidate.call(this);
        if (true && !this.name) {
            console.error(this);
            throw "property 'name' not set at object of type " + this.type;
        }
        if (this.font === null)
            this.font = this.game.repository.getArray('Font')[0];
        if (true && !this.font)
            throw "at least one Font must be created";
        this.setFont(this.font);
        this._dirty = true;
    };
    TextField.prototype.onGeometryChanged = function () {
        _super.prototype.onGeometryChanged.call(this);
        var initialPosX = 0;
        var initialPosY = 0;
        var posX = initialPosX;
        var posY = initialPosY;
        var textInfo = this._textInfo;
        textInfo.reset();
        textInfo.newString();
        var defaultHeight = this.font.getDefaultSymbolHeight();
        var text = this.text;
        for (var i = 0, max = text.length; i < max; i++) {
            if (text[i] === '\n') {
                textInfo.newString();
                posX = initialPosX;
                posY += defaultHeight;
            }
            else {
                var charRect = this.font.fontContext.symbols[text[i]] || this.font.fontContext.symbols[' '];
                var charInfo = new CharInfo();
                charInfo.symbol = text[i];
                charInfo.sourceRect = charRect;
                charInfo.destRect.setXYWH(posX, posY, charRect.width, charRect.height);
                textInfo.newChar(charInfo);
                posX += charRect.width;
            }
        }
        textInfo.revalidate(this.font.getDefaultSymbolHeight());
        textInfo.align(this.textAlign);
        this.width = textInfo.width;
        this.height = textInfo.height;
    };
    TextField.prototype.setText = function (text) {
        if (text === void 0) { text = ''; }
        this.text = text.toString();
        this._dirty = true;
    };
    TextField.prototype.getText = function () { return this.text; };
    TextField.prototype.setFont = function (font) {
        this.font = font;
        this.setText(this.text);
    };
    TextField.prototype.update = function (time, delta) {
        _super.prototype.update.call(this, time, delta);
    };
    TextField.prototype.draw = function () {
        for (var _i = 0, _a = this._textInfo.allCharsCached; _i < _a.length; _i++) {
            var charInfo = _a[_i];
            this.game.renderer.drawImage(this.font.getDefaultResourcePath(), charInfo.sourceRect, charInfo.destRect);
        }
    };
    return TextField;
}(container_1.Container));
exports.TextField = TextField;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var shaderProgramUtils_1 = __webpack_require__(8);
var shaderGenerator_1 = __webpack_require__(59);
var TexShaderGenerator = (function (_super) {
    tslib_1.__extends(TexShaderGenerator, _super);
    function TexShaderGenerator() {
        var _this = _super.call(this) || this;
        _this.addAttribute(shaderProgramUtils_1.GL_TYPE.FLOAT_VEC4, 'a_position');
        _this.addAttribute(shaderProgramUtils_1.GL_TYPE.FLOAT_VEC2, 'a_texCoord');
        _this.addVertexUniform(shaderProgramUtils_1.GL_TYPE.FLOAT_MAT4, 'u_vertexMatrix');
        _this.addVertexUniform(shaderProgramUtils_1.GL_TYPE.FLOAT_MAT4, 'u_textureMatrix');
        _this.addVarying(shaderProgramUtils_1.GL_TYPE.FLOAT_VEC2, 'v_texCoord');
        _this.prependFragmentCodeBlock("\n            vec4 tint(vec4 srcColor,vec4 tintColor){\n                vec3 r = vec3(srcColor) * (1.0 - tintColor.a) +\n                    vec3(tintColor) * tintColor.a;\n                vec4 result = vec4(r,srcColor.a);\n                return result;    \n            }\n        ");
        _this.setVertexMainFn("\n            void main(){\n                gl_Position = u_vertexMatrix * a_position;\n                v_texCoord = (u_textureMatrix * vec4(a_texCoord, 0, 1)).xy;\n            } \n        ");
        _this.addFragmentUniform(shaderProgramUtils_1.GL_TYPE.SAMPLER_2D, 'texture');
        _this.addFragmentUniform(shaderProgramUtils_1.GL_TYPE.FLOAT, 'u_alpha');
        _this.setFragmentMainFn("\n            void main(){\n                gl_FragColor = texture2D(texture, v_texCoord);\n                gl_FragColor.a *= u_alpha;\n            }\n        ");
        return _this;
    }
    return TexShaderGenerator;
}(shaderGenerator_1.ShaderGenerator));
exports.TexShaderGenerator = TexShaderGenerator;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var vertexBuffer_1 = __webpack_require__(173);
var indexBuffer_1 = __webpack_require__(172);
var BufferInfo = (function () {
    function BufferInfo(gl, description) {
        this.posVertexBuffer = null;
        this.posIndexBuffer = null;
        this.texVertexBuffer = null;
        this.drawMethod = null;
        this.numOfElementsToDraw = 0;
        this.gl = gl;
        if (true && description.drawMethod === undefined)
            throw "can not create BufferInfo: drawMethod not defined";
        this.drawMethod = description.drawMethod;
        if (true && !description.posVertexInfo)
            throw "can not create BufferInfo: posVertexInfo is mandatory";
        this.posVertexBuffer = new vertexBuffer_1.VertexBuffer(gl);
        this.posVertexBuffer.setData(description.posVertexInfo.array, description.posVertexInfo.type, description.posVertexInfo.size);
        this.posVertexBuffer.setAttrName(description.posVertexInfo.attrName);
        if (description.posIndexInfo) {
            this.posIndexBuffer = new indexBuffer_1.IndexBuffer(gl);
            this.posIndexBuffer.setData(description.posIndexInfo.array);
        }
        else
            this.numOfElementsToDraw = this._getNumOfElementsToDraw(this.drawMethod);
        if (description.texVertexInfo) {
            this.texVertexBuffer = new vertexBuffer_1.VertexBuffer(gl);
            this.texVertexBuffer.setData(description.texVertexInfo.array, description.texVertexInfo.type, description.texVertexInfo.size);
            this.texVertexBuffer.setAttrName(description.texVertexInfo.attrName);
        }
    }
    BufferInfo.prototype.bind = function (program) {
        program.bind();
        if (this.posIndexBuffer)
            this.posIndexBuffer.bind();
        if (this.posVertexBuffer)
            this.posVertexBuffer.bind(program);
        if (this.texVertexBuffer)
            this.texVertexBuffer.bind(program);
    };
    BufferInfo.prototype.unbind = function () {
        if (this.posIndexBuffer)
            this.posIndexBuffer.unbind();
        if (this.posVertexBuffer)
            this.posVertexBuffer.unbind();
        if (this.texVertexBuffer)
            this.texVertexBuffer.unbind();
    };
    BufferInfo.prototype.destroy = function () {
        if (this.posVertexBuffer)
            this.posVertexBuffer.destroy();
        if (this.posIndexBuffer)
            this.posIndexBuffer.destroy();
        if (this.texVertexBuffer)
            this.texVertexBuffer.destroy();
    };
    BufferInfo.prototype._getNumOfElementsToDraw = function (drawMethod) {
        switch (drawMethod) {
            case this.gl.LINE_STRIP:
            case this.gl.TRIANGLE_FAN:
                return this.posVertexBuffer.getBufferLength() / 2;
            default:
                throw "unknown draw method: " + drawMethod;
        }
    };
    BufferInfo.prototype.draw = function () {
        if (this.posIndexBuffer !== null) {
            this.gl.drawElements(this.drawMethod, this.posIndexBuffer.getBufferLength(), this.gl.UNSIGNED_SHORT, 0);
        }
        else {
            this.gl.drawArrays(this.drawMethod, 0, this.numOfElementsToDraw);
        }
    };
    return BufferInfo;
}());
exports.BufferInfo = BufferInfo;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var point2d_1 = __webpack_require__(3);
var rect_1 = __webpack_require__(2);
var shaderMaterial_1 = __webpack_require__(66);
var renderableModel_1 = __webpack_require__(45);
var global_1 = __webpack_require__(7);
var cloneId = 0;
var GameObjectProto = (function (_super) {
    tslib_1.__extends(GameObjectProto, _super);
    function GameObjectProto(game) {
        var _this = _super.call(this, game) || this;
        _this.type = 'GameObjectProto';
        _this.spriteSheet = null;
        _this.commonBehaviour = [];
        _this.currFrameIndex = 0;
        _this.frameAnimations = [];
        _this.startFrameAnimationName = null;
        _this.tileOffset = { x: 0, y: 0 };
        _this.tileRepeat = false;
        _this.groupNames = [];
        _this.collideWith = [];
        _this.filters = [];
        _this.blendMode = null;
        _this.acceptLight = false;
        _this.shaderMaterial = new shaderMaterial_1.ShaderMaterial();
        _this.rigidBody = null;
        _this.velocity = new point2d_1.Point2d(0, 0);
        _this._frameRect = new rect_1.Rect();
        _this._sprPosX = 0;
        _this._sprPosY = 0;
        _this._timeCreated = null;
        _this._individualBehaviour = null;
        return _this;
    }
    GameObjectProto.prototype.createGameObject = function () {
        var go = new global_1._global['GameObject'](this.game);
        go.gameObjectProto = this.clone();
        go.revalidate();
        go.id += "_clone_" + ++cloneId;
        go.setCommonBehaviour();
        return go;
    };
    GameObjectProto.prototype.revalidate = function () {
        var _this = this;
        _super.prototype.revalidate.call(this);
        this.setFrameIndex(this.currFrameIndex);
        if (this.spriteSheet) {
            this.width = this.spriteSheet._frameWidth;
            this.height = this.spriteSheet._frameHeight;
        }
        this.frameAnimations.forEach(function (f, i) {
            _this.frameAnimations[i]._gameObject = _this;
        });
        if (this.rigid) {
        }
        if (true) {
            this.spriteSheet['_lastRevalidated'] = new Date().getTime().toString(16);
        }
    };
    GameObjectProto.prototype.playFrameAnimation = function (animationName, opts) {
        var fr = this.frameAnimations.find(function (it) { return it.name === animationName; });
        fr._gameObject = this;
        this._currFrameAnimation = fr;
        fr.play(opts);
        return fr;
    };
    GameObjectProto.prototype.setFrameIndex = function (index) {
        this.currFrameIndex = index % this.spriteSheet._numOfFrames;
        this._sprPosX = this.spriteSheet.getFramePosX(this.currFrameIndex);
        this._sprPosY = this.spriteSheet.getFramePosY(this.currFrameIndex);
    };
    GameObjectProto.prototype.getFrameRect = function () {
        this._frameRect.setXYWH(this._sprPosX, this._sprPosY, this.width, this.height);
        return this._frameRect;
    };
    GameObjectProto.prototype.update = function (time, delta) {
        _super.prototype.update.call(this, time, delta);
        this._currFrameAnimation && this._currFrameAnimation.update(time);
        if (this._individualBehaviour)
            this._individualBehaviour.onUpdate(time, delta);
        for (var i = 0, max = this.commonBehaviour.length; i < max; i++) {
            if (this.commonBehaviour[i].onUpdate)
                this.commonBehaviour[i].onUpdate(time, delta);
        }
        if (this.rigidBody !== null) {
            this.rigidBody.update(time, delta);
            this.pos.x = ~~(this.rigidBody.mCenter.x - this.rigidBody['mWidth'] / 2);
            this.pos.y = ~~(this.rigidBody.mCenter.y - this.rigidBody['mHeight'] / 2);
            this.angle = this.rigidBody.mAngle;
        }
        else {
            if (this.velocity.x)
                this.pos.x += this.velocity.x * delta / 1000;
            if (this.velocity.y)
                this.pos.y += this.velocity.y * delta / 1000;
        }
        if (this.children.length > 0) {
            for (var i = 0; i < this.children.length; i++) {
                this.children[i].update(time, delta);
            }
        }
        this.render();
    };
    GameObjectProto.prototype.draw = function () {
        this.game.renderer.draw(this);
    };
    GameObjectProto.prototype.onShow = function () {
        if (this._individualBehaviour)
            this._individualBehaviour.onCreate();
        if (this.startFrameAnimationName !== null)
            this.playFrameAnimation(this.startFrameAnimationName);
    };
    GameObjectProto.prototype.stopFrAnimations = function () {
        this._currFrameAnimation && this._currFrameAnimation.stop();
    };
    return GameObjectProto;
}(renderableModel_1.RenderableModel));
exports.GameObjectProto = GameObjectProto;
global_1._global['GameObjectProto'] = GameObjectProto;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ObjectPool = (function () {
    function ObjectPool(Class, numberOfInstances) {
        if (numberOfInstances === void 0) { numberOfInstances = 16; }
        this._pool = [];
        this._cnt = 0;
        if (true && !Class)
            throw "can not instantiate ObjectPool: class not provided in constructor";
        for (var i = 0; i < numberOfInstances; i++) {
            this._pool.push(new Class());
        }
    }
    ObjectPool.prototype.getNextObject = function () {
        return this._pool[this._cnt++ % this._pool.length];
    };
    return ObjectPool;
}());
exports.ObjectPool = ObjectPool;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.makeIdentity = function () {
    return [
        1, 0, 0, 0,
        0, 1, 0, 0,
        0, 0, 1, 0,
        0, 0, 0, 1
    ];
};
exports.makeZToWMatrix = function (fudgeFactor) {
    return [
        1, 0, 0, 0,
        0, 1, 0, 0,
        0, 0, 1, fudgeFactor,
        0, 0, 0, 1
    ];
};
exports.make2DProjection = function (width, height, depth) {
    return [
        2 / width, 0, 0, 0,
        0, -2 / height, 0, 0,
        0, 0, 2 / depth, 0,
        -1, 1, 0, 1
    ];
};
exports.ortho = function (left, right, bottom, top, near, far) {
    var lr = 1 / (left - right), bt = 1 / (bottom - top), nf = 1 / (near - far);
    var out = new Array(16);
    out[0] = -2 * lr;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = -2 * bt;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = 2 * nf;
    out[11] = 0;
    out[12] = (left + right) * lr;
    out[13] = (top + bottom) * bt;
    out[14] = (far + near) * nf;
    out[15] = 1;
    return out;
};
exports.perspective = function (fovy, aspect, near, far) {
    var f = 1.0 / Math.tan(fovy / 2), nf = 1 / (near - far);
    var out = new Array(16);
    out[0] = f / aspect;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = f;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = (far + near) * nf;
    out[11] = -1;
    out[12] = 0;
    out[13] = 0;
    out[14] = (2 * far * near) * nf;
    out[15] = 0;
    return out;
};
exports.makeTranslation = function (tx, ty, tz) {
    return [
        1, 0, 0, 0,
        0, 1, 0, 0,
        0, 0, 1, 0,
        tx, ty, tz, 1
    ];
};
exports.makeXRotation = function (angleInRadians) {
    var c = Math.cos(angleInRadians);
    var s = Math.sin(angleInRadians);
    return [
        1, 0, 0, 0,
        0, c, s, 0,
        0, -s, c, 0,
        0, 0, 0, 1
    ];
};
exports.makeYRotation = function (angleInRadians) {
    var c = Math.cos(angleInRadians);
    var s = Math.sin(angleInRadians);
    return [
        c, 0, -s, 0,
        0, 1, 0, 0,
        s, 0, c, 0,
        0, 0, 0, 1
    ];
};
exports.makeZRotation = function (angleInRadians) {
    var c = Math.cos(angleInRadians);
    var s = Math.sin(angleInRadians);
    return [
        c, s, 0, 0,
        -s, c, 0, 0,
        0, 0, 1, 0,
        0, 0, 0, 1
    ];
};
exports.makeScale = function (sx, sy, sz) {
    return [
        sx, 0, 0, 0,
        0, sy, 0, 0,
        0, 0, sz, 0,
        0, 0, 0, 1
    ];
};
exports.matrixMultiply = function (a, b) {
    var r = new Array(16);
    r[0] = a[0] * b[0] + a[1] * b[4] + a[2] * b[8] + a[3] * b[12];
    r[1] = a[0] * b[1] + a[1] * b[5] + a[2] * b[9] + a[3] * b[13];
    r[2] = a[0] * b[2] + a[1] * b[6] + a[2] * b[10] + a[3] * b[14];
    r[3] = a[0] * b[3] + a[1] * b[7] + a[2] * b[11] + a[3] * b[15];
    r[4] = a[4] * b[0] + a[5] * b[4] + a[6] * b[8] + a[7] * b[12];
    r[5] = a[4] * b[1] + a[5] * b[5] + a[6] * b[9] + a[7] * b[13];
    r[6] = a[4] * b[2] + a[5] * b[6] + a[6] * b[10] + a[7] * b[14];
    r[7] = a[4] * b[3] + a[5] * b[7] + a[6] * b[11] + a[7] * b[15];
    r[8] = a[8] * b[0] + a[9] * b[4] + a[10] * b[8] + a[11] * b[12];
    r[9] = a[8] * b[1] + a[9] * b[5] + a[10] * b[9] + a[11] * b[13];
    r[10] = a[8] * b[2] + a[9] * b[6] + a[10] * b[10] + a[11] * b[14];
    r[11] = a[8] * b[3] + a[9] * b[7] + a[10] * b[11] + a[11] * b[15];
    r[12] = a[12] * b[0] + a[13] * b[4] + a[14] * b[8] + a[15] * b[12];
    r[13] = a[12] * b[1] + a[13] * b[5] + a[14] * b[9] + a[15] * b[13];
    r[14] = a[12] * b[2] + a[13] * b[6] + a[14] * b[10] + a[15] * b[14];
    r[15] = a[12] * b[3] + a[13] * b[7] + a[14] * b[11] + a[15] * b[15];
    return r;
};
exports.multMatrixVec = function (matrix, inp) {
    var out = new Array(16);
    for (var i = 0; i < 4; i++) {
        out[i] =
            inp[0] * matrix[0 * 4 + i] +
                inp[1] * matrix[1 * 4 + i] +
                inp[2] * matrix[2 * 4 + i] +
                inp[3] * matrix[3 * 4 + i];
    }
    return out;
};
exports.inverse = function (m) {
    var r = new Array(16);
    r[0] = m[5] * m[10] * m[15] - m[5] * m[14] * m[11] - m[6] * m[9] * m[15] + m[6] * m[13] * m[11] + m[7] * m[9] * m[14] - m[7] * m[13] * m[10];
    r[1] = -m[1] * m[10] * m[15] + m[1] * m[14] * m[11] + m[2] * m[9] * m[15] - m[2] * m[13] * m[11] - m[3] * m[9] * m[14] + m[3] * m[13] * m[10];
    r[2] = m[1] * m[6] * m[15] - m[1] * m[14] * m[7] - m[2] * m[5] * m[15] + m[2] * m[13] * m[7] + m[3] * m[5] * m[14] - m[3] * m[13] * m[6];
    r[3] = -m[1] * m[6] * m[11] + m[1] * m[10] * m[7] + m[2] * m[5] * m[11] - m[2] * m[9] * m[7] - m[3] * m[5] * m[10] + m[3] * m[9] * m[6];
    r[4] = -m[4] * m[10] * m[15] + m[4] * m[14] * m[11] + m[6] * m[8] * m[15] - m[6] * m[12] * m[11] - m[7] * m[8] * m[14] + m[7] * m[12] * m[10];
    r[5] = m[0] * m[10] * m[15] - m[0] * m[14] * m[11] - m[2] * m[8] * m[15] + m[2] * m[12] * m[11] + m[3] * m[8] * m[14] - m[3] * m[12] * m[10];
    r[6] = -m[0] * m[6] * m[15] + m[0] * m[14] * m[7] + m[2] * m[4] * m[15] - m[2] * m[12] * m[7] - m[3] * m[4] * m[14] + m[3] * m[12] * m[6];
    r[7] = m[0] * m[6] * m[11] - m[0] * m[10] * m[7] - m[2] * m[4] * m[11] + m[2] * m[8] * m[7] + m[3] * m[4] * m[10] - m[3] * m[8] * m[6];
    r[8] = m[4] * m[9] * m[15] - m[4] * m[13] * m[11] - m[5] * m[8] * m[15] + m[5] * m[12] * m[11] + m[7] * m[8] * m[13] - m[7] * m[12] * m[9];
    r[9] = -m[0] * m[9] * m[15] + m[0] * m[13] * m[11] + m[1] * m[8] * m[15] - m[1] * m[12] * m[11] - m[3] * m[8] * m[13] + m[3] * m[12] * m[9];
    r[10] = m[0] * m[5] * m[15] - m[0] * m[13] * m[7] - m[1] * m[4] * m[15] + m[1] * m[12] * m[7] + m[3] * m[4] * m[13] - m[3] * m[12] * m[5];
    r[11] = -m[0] * m[5] * m[11] + m[0] * m[9] * m[7] + m[1] * m[4] * m[11] - m[1] * m[8] * m[7] - m[3] * m[4] * m[9] + m[3] * m[8] * m[5];
    r[12] = -m[4] * m[9] * m[14] + m[4] * m[13] * m[10] + m[5] * m[8] * m[14] - m[5] * m[12] * m[10] - m[6] * m[8] * m[13] + m[6] * m[12] * m[9];
    r[13] = m[0] * m[9] * m[14] - m[0] * m[13] * m[10] - m[1] * m[8] * m[14] + m[1] * m[12] * m[10] + m[2] * m[8] * m[13] - m[2] * m[12] * m[9];
    r[14] = -m[0] * m[5] * m[14] + m[0] * m[13] * m[6] + m[1] * m[4] * m[14] - m[1] * m[12] * m[6] - m[2] * m[4] * m[13] + m[2] * m[12] * m[5];
    r[15] = m[0] * m[5] * m[10] - m[0] * m[9] * m[6] - m[1] * m[4] * m[10] + m[1] * m[8] * m[6] + m[2] * m[4] * m[9] - m[2] * m[8] * m[5];
    var det = m[0] * r[0] + m[1] * r[4] + m[2] * r[8] + m[3] * r[12];
    if (true && det === 0) {
        console.error(m);
        throw new Error("can not invert matrix");
    }
    for (var i = 0; i < 16; i++)
        r[i] /= det;
    return r;
};
exports.IDENTITY = exports.makeIdentity();


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var I18n = (function () {
    function I18n() {
    }
    I18n.setLocale = function (name) {
        I18n.locale = name;
    };
    I18n.get = function (key) {
        return I18n.bundle[I18n.locale][key];
    };
    I18n.getAll = function () {
        return I18n.bundle[I18n.locale];
    };
    I18n.locale = 'en';
    I18n.bundle = {
        'en': {
            ok: 'ok',
            confirm: 'confirm',
            confirmQuestion: function (item) {
                return "Delete " + item.type + " with name \"" + item.name + "\"?";
            },
            canNotDelete: function (item, usedByObjects) {
                var usedByStr = usedByObjects ? usedByObjects.map(function (it) {
                    return it.type + ":" + it.name;
                }).join(',') : '';
                return "Can not delete " + item.type + " with name \"" + item.name + "\", it's used by other objects " + (usedByStr ? usedByStr : '');
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
            gravityConstantTitle: 'acceleration in pixels per second',
            scripts: 'scripts',
            collideWith: 'collide with'
        }
    };
    return I18n;
}());
exports.I18n = I18n;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var noop = function (data) { };
var objectToQuery = function (o) {
    if (!o)
        return '';
    if (o instanceof FormData)
        return o;
    var paramsArr = [];
    if (o === null || o === undefined || typeof o === 'string' || typeof o === 'number')
        return o;
    for (var key in o) {
        paramsArr.push([key, encodeURIComponent(o[key])]);
    }
    return paramsArr.map(function (item) { return [item[0] + '=' + item[1]]; }).join('&');
};
var request = function (data) {
    var abortTmr = null;
    var resolved = false;
    data.method = data.method || 'get';
    if (data.data && data.method === 'get')
        data.url += '?' + objectToQuery(data.data);
    var xhr = new XMLHttpRequest();
    var resolveFn = noop, rejectFn = noop;
    var promise = new Promise(function (resolve, reject) {
        resolveFn = resolve;
        rejectFn = reject;
    });
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200 || xhr.status === 0) {
                var resp = xhr.responseText;
                var contentType = xhr.getResponseHeader("Content-Type") || '';
                if (contentType.toLowerCase().indexOf('json') > -1)
                    resp = JSON.parse(resp);
                if (data.success) {
                    data.success(resp);
                    if (window['RF'])
                        RF.digest();
                }
                resolveFn(resp);
            }
            else {
                if (data.error)
                    data.error({ status: xhr.status, error: xhr.statusText });
                rejectFn(xhr.statusText);
            }
            clearTimeout(abortTmr);
            resolved = true;
        }
    };
    xhr.open(data.method, data.url, true);
    if (data.requestType) {
        if (data.requestType !== 'multipart/form-data')
            xhr.setRequestHeader("Content-Type", data.requestType);
    }
    else {
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    }
    if (data.requestType === 'application/json')
        data.data = data.data && JSON.stringify(data.data);
    xhr.send(data.data);
    if (data.timeout) {
        abortTmr = setTimeout(function () {
            if (resolved)
                return;
            xhr.abort();
            if (data.ontimeout)
                data.ontimeout();
            rejectFn('timeout');
        }, data.timeout);
    }
    return promise;
};
var get = function (url, data, success, error) {
    return request({
        method: 'get',
        url: url,
        data: data,
        success: success,
        error: error
    });
};
var post = function (url, data, success, error) {
    return request({
        method: 'post',
        url: url,
        data: data,
        requestType: 'application/json',
        success: success,
        error: error
    });
};
var postMultiPart = function (url, file, data, success, error) {
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
exports.httpClient = { get: get, post: post, postMultiPart: postMultiPart };


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var gameObjectProto_1 = __webpack_require__(15);
var commonBehaviours = __webpack_require__(153);
var global_1 = __webpack_require__(7);
var noop_1 = __webpack_require__(63);
var GameObject = (function (_super) {
    tslib_1.__extends(GameObject, _super);
    function GameObject(game) {
        var _this = _super.call(this, game) || this;
        _this.type = 'GameObject';
        _this.gameObjectProto = null;
        return _this;
    }
    GameObject.prototype.revalidate = function () {
        var _this = this;
        var ownProps = {};
        for (var key in this) {
            if (!this.hasOwnProperty(key))
                continue;
            ownProps[key] = this[key];
        }
        Object.keys(this.gameObjectProto).forEach(function (key) {
            if (_this.gameObjectProto[key] === undefined)
                return;
            _this[key] = _this.gameObjectProto[key];
        });
        Object.keys(ownProps).forEach(function (key) {
            if (!ownProps[key])
                return;
            if (ownProps[key].splice && ownProps[key].length === 0)
                return;
            _this[key] = ownProps[key];
        });
        if (this.startFrameAnimationName !== null)
            this.playFrameAnimation(this.startFrameAnimationName);
        _super.prototype.revalidate.call(this);
    };
    GameObject.prototype.kill = function () {
        var _this = this;
        this.parent.children.remove(function (it) { return it.id === _this.id; });
    };
    GameObject.prototype.setIndividualBehaviour = function (instance) {
        instance.game = this.game;
        instance.gameObject = this;
        if (!instance.onCreate)
            instance.onCreate = noop_1.noop;
        if (!instance.onUpdate)
            instance.onUpdate = noop_1.noop;
        if (!instance.onDestroy)
            instance.onDestroy = noop_1.noop;
        this._individualBehaviour = instance;
    };
    GameObject.prototype.getIndividualBehaviour = function () {
        return this._individualBehaviour;
    };
    GameObject.prototype.setCommonBehaviour = function () {
        var _this = this;
        var instances = [];
        this.commonBehaviour.forEach(function (cb) {
            var CbClazz = commonBehaviours[cb.name];
            if (true) {
                if (!CbClazz) {
                    console.error(cb);
                    console.error(commonBehaviours);
                    throw "can not find common behaviour with name " + cb.name;
                }
            }
            var instance = new CbClazz(_this.game);
            instance.manage(_this, cb.parameters);
            instances.push(instance);
        });
        this.commonBehaviour = instances;
    };
    GameObject.prototype.moveToFront = function () {
        var index = this.parent.children.indexOf(this);
        if (true && index == -1)
            throw "can not move to front: gameObject is detached";
        this.parent.children.splice(index, 1);
        this.parent.children.push(this);
    };
    GameObject.prototype.moveToBack = function () {
        var index = this.parent.children.indexOf(this);
        if (true && index == -1)
            throw "can not move to back: gameObject is detached";
        this.parent.children.splice(index, 1);
        this.parent.children.unshift(this);
    };
    return GameObject;
}(gameObjectProto_1.GameObjectProto));
exports.GameObject = GameObject;
global_1._global['GameObject'] = GameObject;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var rect_1 = __webpack_require__(2);
var mouse_1 = __webpack_require__(55);
var renderableModel_1 = __webpack_require__(45);
var OVERFLOW;
(function (OVERFLOW) {
    OVERFLOW[OVERFLOW["HIDDEN"] = 0] = "HIDDEN";
    OVERFLOW[OVERFLOW["VISIBLE"] = 1] = "VISIBLE";
})(OVERFLOW = exports.OVERFLOW || (exports.OVERFLOW = {}));
var LAYOUT_SIZE;
(function (LAYOUT_SIZE) {
    LAYOUT_SIZE[LAYOUT_SIZE["FIXED"] = 0] = "FIXED";
    LAYOUT_SIZE[LAYOUT_SIZE["WRAP_CONTENT"] = 1] = "WRAP_CONTENT";
    LAYOUT_SIZE[LAYOUT_SIZE["MATCH_PARENT"] = 2] = "MATCH_PARENT";
})(LAYOUT_SIZE = exports.LAYOUT_SIZE || (exports.LAYOUT_SIZE = {}));
var STATE;
(function (STATE) {
    STATE[STATE["NORMAL"] = 0] = "NORMAL";
    STATE[STATE["ACTIVE"] = 1] = "ACTIVE";
    STATE[STATE["DISABLED"] = 2] = "DISABLED";
})(STATE = exports.STATE || (exports.STATE = {}));
var Container = (function (_super) {
    tslib_1.__extends(Container, _super);
    function Container(game) {
        var _this = _super.call(this, game) || this;
        _this.marginLeft = 0;
        _this.marginTop = 0;
        _this.marginRight = 0;
        _this.marginBottom = 0;
        _this.paddingLeft = 0;
        _this.paddingTop = 0;
        _this.paddingRight = 0;
        _this.paddingBottom = 0;
        _this.layoutWidth = LAYOUT_SIZE.WRAP_CONTENT;
        _this.layoutHeight = LAYOUT_SIZE.WRAP_CONTENT;
        _this.overflow = OVERFLOW.HIDDEN;
        _this.filters = [];
        _this.blendMode = '';
        _this.background = undefined;
        _this.drawingRect = new rect_1.Rect();
        _this.bgByState = {};
        _this.state = STATE.NORMAL;
        _this.on(mouse_1.MOUSE_EVENTS.mouseDown, function () {
            _this.state = STATE.ACTIVE;
        });
        _this.on(mouse_1.MOUSE_EVENTS.mouseUp, function () {
            _this.state = STATE.NORMAL;
        });
        _this.on(mouse_1.MOUSE_EVENTS.mouseLeave, function () {
            _this.state = STATE.NORMAL;
        });
        return _this;
    }
    Container.prototype.testLayout = function () {
        if (true) {
            if (this.layoutWidth === LAYOUT_SIZE.FIXED && this.width === 0)
                throw "layoutWidth is LAYOUT_SIZE.FIXED so width must be specified";
            if (this.layoutHeight === LAYOUT_SIZE.FIXED && this.height === 0)
                throw "layoutHeight is LAYOUT_SIZE.FIXED so height must be specified";
        }
    };
    Container.normalizeBorders = function (top, right, bottom, left) {
        if (right === undefined && bottom === undefined && left === undefined) {
            right = bottom = left = top;
        }
        else if (bottom === undefined && left === undefined) {
            bottom = top;
            left = right;
        }
        else if (left === undefined) {
            left = right;
        }
        return { top: top, right: right, bottom: bottom, left: left };
    };
    Container.prototype.setMargins = function (top, right, bottom, left) {
        var _a;
        (_a = Container.normalizeBorders(top, right, bottom, left), top = _a.top, right = _a.right, bottom = _a.bottom, left = _a.left);
        this.marginTop = top;
        this.marginRight = right;
        this.marginBottom = bottom;
        this.marginLeft = left;
        this._setDirty();
    };
    Container.prototype.setMarginsTopBottom = function (top, bottom) {
        if (bottom === undefined)
            bottom = top;
        this.paddingTop = top;
        this.paddingBottom = bottom;
        this._setDirty();
    };
    Container.prototype.setMarginsLeftRight = function (left, right) {
        if (right === undefined)
            right = left;
        this.marginLeft = left;
        this.marginRight = right;
        this._setDirty();
    };
    Container.prototype.setPaddings = function (top, right, bottom, left) {
        var _a;
        (_a = Container.normalizeBorders(top, right, bottom, left), top = _a.top, right = _a.right, bottom = _a.bottom, left = _a.left);
        this.paddingTop = top;
        this.paddingRight = right;
        this.paddingBottom = bottom;
        this.paddingLeft = left;
        this._setDirty();
    };
    Container.prototype.setPaddingsTopBottom = function (top, bottom) {
        if (bottom === undefined)
            bottom = top;
        this.paddingTop = top;
        this.paddingBottom = bottom;
        this._dirty = true;
    };
    Container.prototype.setPaddingsLeftRight = function (left, right) {
        if (right === undefined)
            right = left;
        this.paddingLeft = left;
        this.paddingRight = right;
        this._setDirty();
    };
    Container.prototype.describeStates = function (description) {
        var _this = this;
        var allUIRenderable = __webpack_require__(54);
        Object.keys(description).forEach(function (stateName) {
            var state = STATE[stateName];
            var clazz = allUIRenderable[description[stateName].type];
            var instance = new clazz(_this.game);
            instance.fromJSON(description[stateName]);
            _this.bgByState[state] = instance;
        });
    };
    Container.prototype.getDrawableInfo = function () {
        return { blendMode: this.blendMode, acceptLight: false };
    };
    Container.prototype.onGeometryChanged = function () { };
    Container.prototype.getRect = function () {
        if (this._dirty) {
            this.calcLayoutRect();
        }
        return this._rect;
    };
    Container.prototype.calcLayoutRect = function () {
        this._rect.setXYWH(this.pos.x, this.pos.y, this.width + this.marginLeft + this.marginRight, this.height + this.marginTop + this.marginBottom);
    };
    Container.prototype.getBgByState = function () {
        var possibleBg = this.bgByState[this.state];
        if (!possibleBg)
            possibleBg = this.background;
        return possibleBg;
    };
    Container.prototype.calcDrawableRect = function (contentWidth, contentHeight) {
        var paddedWidth = contentWidth + this.paddingLeft + this.paddingRight;
        var paddedHeight = contentHeight + this.paddingTop + this.paddingBottom;
        if (this.background) {
            this.background.drawingRect.setWH(paddedWidth, paddedHeight);
            this.width = this.background.drawingRect.width;
            this.height = this.background.drawingRect.height;
        }
        else {
            this.width = paddedWidth;
            this.height = paddedHeight;
        }
        this.calcLayoutRect();
    };
    Container.prototype.update = function (time, delta) {
        this.background = this.getBgByState();
        if (this._dirty) {
            this.onGeometryChanged();
            this._dirty = false;
        }
        _super.prototype.update.call(this, time, delta);
    };
    Container.prototype.beforeRender = function () {
        this.game.renderer.translate(this.pos.x + this.marginLeft, this.pos.y + this.marginTop);
    };
    return Container;
}(renderableModel_1.RenderableModel));
exports.Container = Container;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var plane_1 = __webpack_require__(37);
var shaderProgram_1 = __webpack_require__(6);
var abstractDrawer_1 = __webpack_require__(10);
var bufferInfo_1 = __webpack_require__(14);
var texShaderGenerator_1 = __webpack_require__(13);
var SpriteRectDrawer = (function (_super) {
    tslib_1.__extends(SpriteRectDrawer, _super);
    function SpriteRectDrawer(gl, program) {
        var _this = _super.call(this, gl) || this;
        var gen = new texShaderGenerator_1.TexShaderGenerator();
        _this.primitive = new plane_1.Plane();
        _this.program = program || new shaderProgram_1.ShaderProgram(gl, gen.getVertexSource(), gen.getFragmentSource());
        _this.bufferInfo = new bufferInfo_1.BufferInfo(gl, {
            posVertexInfo: { array: _this.primitive.vertexArr, type: gl.FLOAT, size: 2, attrName: 'a_position' },
            posIndexInfo: { array: _this.primitive.indexArr },
            texVertexInfo: { array: _this.primitive.texCoordArr, type: gl.FLOAT, size: 2, attrName: 'a_texCoord' },
            drawMethod: _this.gl.TRIANGLE_STRIP
        });
        return _this;
    }
    return SpriteRectDrawer;
}(abstractDrawer_1.AbstractDrawer));
exports.SpriteRectDrawer = SpriteRectDrawer;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var baseModel_1 = __webpack_require__(11);
var Layer = (function (_super) {
    tslib_1.__extends(Layer, _super);
    function Layer(game) {
        var _this = _super.call(this, game) || this;
        _this.type = 'Layer';
        _this.children = [];
        return _this;
    }
    Layer.prototype.appendChild = function (go) {
        go.parent = this;
        this.children.push(go);
        go.onShow();
    };
    Layer.prototype.getAllSpriteSheets = function () {
        var dataSet = [];
        this.children.forEach(function (obj) {
            obj.spriteSheet && !dataSet.find(function (it) { return obj.id === it.id; }) && dataSet.push(obj.spriteSheet);
        });
        return dataSet;
    };
    Layer.prototype.onShow = function () {
        this.children.forEach(function (g) {
            g.onShow();
        });
    };
    Layer.prototype.update = function (currTime, deltaTime) {
        var all = this.children;
        var i = all.length;
        var l = i - 1;
        while (i--) {
            var obj = all[l - i];
            obj && obj.update(currTime, deltaTime);
        }
    };
    Layer.prototype.render = function () {
        var all = this.children;
        var i = all.length;
        var l = i - 1;
        while (i--) {
            var obj = all[l - i];
            obj && obj.render();
        }
    };
    return Layer;
}(baseModel_1.BaseModel));
exports.Layer = Layer;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var rect_1 = __webpack_require__(2);
var resource_1 = __webpack_require__(27);
var SpriteSheet = (function (_super) {
    tslib_1.__extends(SpriteSheet, _super);
    function SpriteSheet(game) {
        var _this = _super.call(this, game) || this;
        _this.type = 'SpriteSheet';
        _this.width = 0;
        _this.height = 0;
        _this.numOfFramesH = 1;
        _this.numOfFramesV = 1;
        _this._frameWidth = 0;
        _this._frameHeight = 0;
        _this._numOfFrames = 0;
        _this.frameRect = new rect_1.Rect();
        return _this;
    }
    SpriteSheet.prototype.revalidate = function () {
        if (!(this.numOfFramesH && this.numOfFramesV))
            return;
        this._frameWidth = ~~(this.width / this.numOfFramesH);
        this._frameHeight = ~~(this.height / this.numOfFramesV);
        this._numOfFrames = this.numOfFramesH * this.numOfFramesV;
    };
    SpriteSheet.prototype.getFramePosX = function (frameIndex) {
        return (frameIndex % this.numOfFramesH) * this._frameWidth;
    };
    SpriteSheet.prototype.getFramePosY = function (frameIndex) {
        return ~~(frameIndex / this.numOfFramesH) * this._frameHeight;
    };
    SpriteSheet.prototype.getFrameRect = function (index) {
        var fr = this.frameRect;
        fr.setXYWH(this.getFramePosX(index), this.getFramePosY(index), this._frameWidth, this._frameHeight);
        return fr;
    };
    return SpriteSheet;
}(resource_1.Resource));
exports.SpriteSheet = SpriteSheet;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Transient = function (params) {
    return function (target) {
        target.transient = params;
    };
};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var isPropNotFit = function (key, val, opts) {
    if (!key)
        return true;
    if (key.indexOf('_') === 0)
        return true;
    if (val && val.call)
        return true;
    if (typeof val === 'string')
        return false;
    if (typeof val === 'number')
        return false;
    if (typeof val === 'boolean')
        return false;
    return (val == null && !opts.preserveNull);
};
var isPrimitive = function (val) {
    return typeof val === 'string' || typeof val === 'number';
};
var deepCopy = function (obj, _clonedObjects) {
    if (_clonedObjects === void 0) { _clonedObjects = []; }
    if (obj === undefined)
        return undefined;
    else if (obj === null)
        return null;
    else if (typeof window !== 'undefined' && obj === window)
        return undefined;
    else if (_clonedObjects.indexOf(obj) > -1)
        return obj;
    else if (obj.fromJSON)
        return obj.fromJSON(obj.toJSON());
    if (Object.prototype.toString.call(obj) === '[object Array]') {
        var out = [], i = 0, len = obj.length;
        for (; i < len; i++) {
            var clonedObject = void 0;
            if (_clonedObjects.indexOf(obj[i]) > -1) {
                clonedObject = obj[i];
            }
            else {
                _clonedObjects.push(obj);
                clonedObject = deepCopy(obj[i], _clonedObjects);
                _clonedObjects.push(obj[i]);
            }
            out[i] = clonedObject;
        }
        return out;
    }
    else if (typeof obj === 'object') {
        var out = {};
        for (var i in obj) {
            if (!obj.hasOwnProperty(i))
                continue;
            var clonedObject = void 0;
            if (_clonedObjects.indexOf(obj[i]) > -1) {
                clonedObject = obj[i];
            }
            else {
                _clonedObjects.push(obj);
                clonedObject = deepCopy(obj[i], _clonedObjects);
                _clonedObjects.push(obj[i]);
            }
            out[i] = clonedObject;
        }
        return out;
    }
    else
        return obj;
};
var CommonObject = (function () {
    function CommonObject() {
        this.id = null;
        this.name = null;
    }
    CommonObject.prototype.fromJSON = function (params, forceNew) {
        var _this = this;
        if (params === void 0) { params = {}; }
        Object.keys(params).forEach(function (key) {
            var _a;
            if (key === 'type')
                return;
            if (!(key in _this)) {
                console.error(_this);
                throw "::fromJSON(): class " + _this.constructor["name"] + " has no property " + key;
            }
            if (params[key] && params[key].id && params[key].type)
                _this[key] = _this.game.repository.getObject(params[key].id, params[key].type, forceNew);
            else if (params[key] && params[key].forEach) {
                _this[key] = [];
                params[key].forEach(function (item) {
                    if (item && item.type && item.id) {
                        _this[key].push(_this.game.repository.getObject(item.id, item.type, forceNew));
                    }
                    else {
                        _this[key].push(item);
                    }
                });
            }
            else if (_this[key] && _this[key].fromJSON) {
                _this[key].fromJSON(params[key]);
            }
            else if (_this[key] && _this[key].call) {
                (_a = _this[key]).call.apply(_a, [_this].concat(params[key]));
            }
            else {
                _this[key] = params[key];
            }
        });
        this.revalidate();
        return this;
    };
    CommonObject.prototype.toJSON = function (opts) {
        if (opts === void 0) { opts = { preserveNull: false }; }
        var res = {};
        var _loop_1 = function (key) {
            if (isPropNotFit(key, this_1[key], opts)) {
                return "continue";
            }
            if (this_1.constructor['transient'] && this_1.constructor['transient'][key]) {
                return "continue";
            }
            if (this_1[key] != null && this_1[key]['type'] && this_1[key]['id']) {
                res[key] = {
                    id: this_1[key]['id'],
                    type: this_1[key]['type']
                };
            }
            else if (this_1[key] != null && this_1[key]['splice']) {
                var col = this_1[key];
                var arr_1 = [];
                col.forEach(function (el) {
                    if (el && el.type && el.id) {
                        arr_1.push({ type: el.type, id: el.id });
                    }
                    else {
                        if (isPrimitive(el))
                            arr_1.push(deepCopy(el));
                    }
                });
                res[key] = arr_1;
            }
            else if (this_1[key] && this_1[key]['toJSON']) {
                res[key] = this_1[key]['toJSON']();
            }
            else {
                var possiblePrimitive = deepCopy(this_1[key]);
                if (possiblePrimitive && possiblePrimitive.splice && !possiblePrimitive.length)
                    return "continue";
                else if (possiblePrimitive != null && typeof possiblePrimitive === 'object' && !Object.keys(possiblePrimitive).length)
                    return "continue";
                res[key] = possiblePrimitive;
            }
        };
        var this_1 = this;
        for (var key in this) {
            _loop_1(key);
        }
        return res;
    };
    CommonObject.prototype.revalidate = function () { };
    CommonObject.prototype.clone = function (opts) {
        var Clazz = this.constructor;
        var obj = new Clazz(this.game);
        obj._cloner = this;
        return obj.fromJSON(this.toJSON(opts), true);
    };
    CommonObject.prototype.updateCloner = function (opts) {
        if (false)
            {}
        var cloner = this._cloner;
        if (!cloner)
            return;
        cloner.fromJSON(this.toJSON(opts));
        cloner.updateCloner(opts);
        delete this._cloner;
    };
    return CommonObject;
}());
exports.CommonObject = CommonObject;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var baseModel_1 = __webpack_require__(11);
var Resource = (function (_super) {
    tslib_1.__extends(Resource, _super);
    function Resource() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.resourceMap = {};
        return _this;
    }
    Resource.prototype.getResourceMap = function () {
        return this.resourceMap;
    };
    Resource.prototype.getDefaultResourcePath = function () {
        return this.resourceMap['main'];
    };
    Resource.prototype.setDefaultResourcePath = function (path) {
        this.resourceMap['main'] = path;
    };
    Resource.prototype.setResourcePath = function (path, name) {
        this.resourceMap[name] = path;
    };
    Resource.prototype.getResourcePathByName = function (name) {
        return this.resourceMap[name];
    };
    Resource.prototype.hasResourceWithName = function (name) {
        return !!this.resourceMap[name];
    };
    Resource.prototype.getAllResourcePathes = function () {
        var _this = this;
        return Object.keys(this.resourceMap).map(function (k) { return _this.resourceMap[k]; });
    };
    return Resource;
}(baseModel_1.BaseModel));
exports.Resource = Resource;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var objectPool_1 = __webpack_require__(16);
var global_1 = __webpack_require__(7);
var Color = (function () {
    function Color(r, g, b, a) {
        this._arr = null;
        this.setRGBA(r, g, b, a);
    }
    Color.prototype.normalizeToZeroOne = function () {
        this.rNorm = this.r / 0xff;
        this.gNorm = this.g / 0xff;
        this.bNorm = this.b / 0xff;
        this.aNorm = this.a / 0xff;
    };
    Color.prototype.setRGBA = function (r, g, b, a) {
        if (a === void 0) { a = 255; }
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
        this.normalizeToZeroOne();
    };
    Color.prototype.setRGB = function (r, g, b) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = 255;
        this.normalizeToZeroOne();
    };
    Color.prototype.setR = function (val) {
        this.r = val;
        this.normalizeToZeroOne();
    };
    Color.prototype.setG = function (val) {
        this.g = val;
        this.normalizeToZeroOne();
    };
    Color.prototype.setB = function (val) {
        this.b = val;
        this.normalizeToZeroOne();
    };
    Color.prototype.setA = function (val) {
        this.a = val;
        this.normalizeToZeroOne();
    };
    Color.prototype.clone = function () {
        return new Color(this.r, this.g, this.b, this.a);
    };
    Color.getFromPool = function () {
        if (Color.objectPool === undefined)
            Color.objectPool = new objectPool_1.ObjectPool(Color);
        return Color.objectPool.getNextObject();
    };
    Color.RGB = function (r, g, b, a) {
        var c = new Color(0, 0, 0);
        c.setRGBA(r, g, b, a);
        return c;
    };
    Color.prototype.asGL = function () {
        if (this._arr === null)
            this._arr = new Array(3);
        this._arr[0] = this.rNorm;
        this._arr[1] = this.gNorm;
        this._arr[2] = this.bNorm;
        this._arr[3] = this.aNorm;
        return this._arr;
    };
    Color.prototype.asCSS = function () {
        return "rgba(" + this.r + "," + this.g + "," + this.b + "," + this.a + ")";
    };
    Color.prototype.toJSON = function () {
        return { r: this.r, g: this.g, b: this.b, a: this.a };
    };
    Color.prototype.fromJSON = function (json) {
        this.setRGBA(json.r, json.g, json.b, json.a);
    };
    Color.WHITE = Color.RGB(255, 255, 255);
    Color.GREY = Color.RGB(127, 127, 127);
    Color.BLACK = Color.RGB(0, 0, 0);
    Color.NONE = Color.RGB(0, 0, 0, 0);
    return Color;
}());
exports.Color = Color;
global_1._global['Color'] = Color;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var objectPool_1 = __webpack_require__(16);
var Size = (function () {
    function Size(width, height) {
        if (width === void 0) { width = 0; }
        if (height === void 0) { height = 0; }
        this.width = width;
        this.height = height;
    }
    Size.prototype.setW = function (width) {
        this.width = width;
        return this;
    };
    Size.prototype.setH = function (height) {
        this.height = height;
        return this;
    };
    Size.prototype.setWH = function (width, height) {
        this.width = width;
        this.height = height;
        return this;
    };
    Size.fromPool = function () {
        return Size.rectPool.getNextObject();
    };
    Size.rectPool = new objectPool_1.ObjectPool(Size);
    return Size;
}());
exports.Size = Size;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var userDefinedFns_1 = __webpack_require__(5);
var mathEx = __webpack_require__(4);
var editData_1 = __webpack_require__(9);
var restResource_1 = __webpack_require__(32);
var restFileSystem_1 = __webpack_require__(48);
var i18n_1 = __webpack_require__(18);
var gameObjectProto_1 = __webpack_require__(15);
var point2d_1 = __webpack_require__(3);
var Utils = (function () {
    function Utils() {
    }
    Utils.getGameObjectCss = function (gameObj) {
        if (!gameObj)
            gameObj = {};
        gameObj.scale = gameObj.scale || new point2d_1.Point2d(1, 1);
        gameObj.spriteSheet = gameObj.spriteSheet || {};
        return {
            width: gameObj.width + 'px',
            height: gameObj.height + 'px',
            backgroundImage: gameObj.spriteSheet &&
                gameObj.spriteSheet.getDefaultResourcePath &&
                "url(" + editData_1.editData.projectName + "/" + gameObj.spriteSheet.getDefaultResourcePath() + "?lastRevalidated=" + gameObj.spriteSheet['_lastRevalidated'] + ")",
            backgroundPositionY: -gameObj._sprPosY + 'px',
            backgroundPositionX: -gameObj._sprPosX + 'px',
            backgroundRepeat: 'no-repeat',
            opacity: gameObj.alpha,
            transform: "scale(" + gameObj.scale.x + "," + gameObj.scale.y + ") rotateZ(" + mathEx.radToDeg(gameObj.angle) + "deg)",
            backgroundSize: gameObj.spriteSheet.numOfFramesH * gameObj.width + "px " + gameObj.spriteSheet.numOfFramesV * gameObj.height + "px"
        };
    };
    Utils.getCoords = function (elSelector, event) {
        var el = document.querySelector(elSelector);
        var clientRect = el.getBoundingClientRect();
        var x = event.clientX - clientRect.left;
        var y = event.clientY - clientRect.top;
        return { x: x, y: y };
    };
    Utils.tileMapWidth = function () {
        if (!editData_1.editData.currSceneInEdit.tileMap)
            return 0;
        return editData_1.editData.currSceneInEdit.tileMap.width || 0;
    };
    Utils.tileMapHeight = function () {
        if (!editData_1.editData.currSceneInEdit.tileMap)
            return 0;
        return editData_1.editData.currSceneInEdit.tileMap.height || 0;
    };
    Utils.tileFrameWidth = function () {
        if (!editData_1.editData.currSceneInEdit.tileMap)
            return null;
        if (!editData_1.editData.currSceneInEdit.tileMap.spriteSheet)
            return null;
        return editData_1.editData.currSceneInEdit.tileMap.spriteSheet._frameWidth;
    };
    Utils.tileFrameHeight = function () {
        if (!editData_1.editData.currSceneInEdit.tileMap)
            return null;
        if (!editData_1.editData.currSceneInEdit.tileMap.spriteSheet)
            return null;
        return editData_1.editData.currSceneInEdit.tileMap.spriteSheet._frameHeight;
    };
    Utils.tileFramePosX = function (i) {
        if (!editData_1.editData.currSceneInEdit.tileMap)
            return null;
        if (!editData_1.editData.currSceneInEdit.tileMap.spriteSheet)
            return null;
        return editData_1.editData.currSceneInEdit.tileMap.spriteSheet.getFramePosX(i);
    };
    Utils.tileFramePosY = function (i) {
        if (!editData_1.editData.currSceneInEdit.tileMap)
            return null;
        if (!editData_1.editData.currSceneInEdit.tileMap.spriteSheet)
            return null;
        return editData_1.editData.currSceneInEdit.tileMap.spriteSheet.getFramePosY(i);
    };
    Utils.tileResourcePath = function (opts) {
        if (opts === void 0) { opts = { strict: false }; }
        if (!editData_1.editData.currSceneInEdit.tileMap)
            return null;
        if (!editData_1.editData.currSceneInEdit.tileMap.spriteSheet)
            return null;
        if (!editData_1.editData.currSceneInEdit.tileMap.spriteSheet.getDefaultResourcePath())
            return null;
        if (opts.strict && editData_1.editData.currTileIndexInEdit == null)
            return;
        return "url(" + editData_1.editData.projectName + "/" + editData_1.editData.currSceneInEdit.tileMap.spriteSheet.getDefaultResourcePath() + ")";
    };
    Utils.tileNumOfFramesH = function () {
        if (!editData_1.editData.currSceneInEdit.tileMap)
            return null;
        if (!editData_1.editData.currSceneInEdit.tileMap.spriteSheet)
            return null;
        return editData_1.editData.currSceneInEdit.tileMap.spriteSheet.numOfFramesH;
    };
    Utils.calcZoom = function (gameObject) {
        var sampleSize = 30;
        if (!gameObject)
            gameObject = { width: sampleSize, height: sampleSize };
        var maxSize = gameObject.width > gameObject.height ? gameObject.width : gameObject.height;
        return maxSize > sampleSize ?
            sampleSize / maxSize :
            1;
    };
    Utils.merge = function (a, b) {
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
    Utils.hexToRgb = function (hex) {
        if (!hex)
            return { r: 0, g: 0, b: 0 };
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16) || 0,
            g: parseInt(result[2], 16) || 0,
            b: parseInt(result[3], 16) || 0
        } : { r: 0, g: 0, b: 0 };
    };
    Utils.rgbToHex = function (col) {
        if (!col)
            return '#000000';
        var r = +col.r, g = +col.g, b = +col.b;
        return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    };
    Utils.rgbToCss = function (objRGB) {
        return "rgb(" + objRGB.r + "," + objRGB.g + "," + objRGB.b + ")";
    };
    Utils.dataURItoBlob = function (dataURI) {
        var byteString;
        if (dataURI.split(',')[0].indexOf('base64') >= 0)
            byteString = atob(dataURI.split(',')[1]);
        else
            byteString = window['unescape'](dataURI.split(',')[1]);
        var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
        var ia = new Uint8Array(byteString.length);
        for (var i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }
        return new Blob([ia], { type: mimeString });
    };
    Utils.range = function (rFr, rTo, step) {
        if (!step)
            step = 1;
        var arr = [], i;
        if (rTo === undefined) {
            rTo = rFr;
            rFr = 0;
        }
        if (rFr < rTo) {
            for (i = rFr; i <= rTo; i += step) {
                arr.push(i);
            }
        }
        else {
            for (i = rFr; i >= rTo; i -= step) {
                arr.push(i);
            }
        }
        return arr;
    };
    Utils._createAceCompleter = function () {
        var result = [];
        var res = {};
        var objs = ['gameObject'];
        objs.forEach(function (go) {
            var GObjClass = gameObjectProto_1.GameObjectProto;
            var goObj = new GObjClass(editData_1.editData.game);
            for (var key in goObj) {
                if (key.indexOf('_') === 0)
                    continue;
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
    Utils._waitForFrameAndDo = function (file, path) {
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
        window['saveCode'] = function (code) {
            restFileSystem_1.RestFileSystem.createFile(path, code);
        };
    };
    ;
    Utils.getArray = function (num) {
        if (!num)
            return [];
        var res = [];
        for (var i = 0; i < num; i++) {
            res.push(i);
        }
        return res;
    };
    Utils.size = function (obj) {
        if (!obj)
            return 0;
        return Object.keys(obj).length;
    };
    Utils.deleteModel = function (model) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var res;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, userDefinedFns_1.confirmEx(i18n_1.I18n.getAll().confirmQuestion(model))];
                    case 1:
                        res = _a.sent();
                        if (!res)
                            return [2, false];
                        restResource_1.RestResource.remove(model);
                        editData_1.editData.game.repository.removeObject(model);
                        return [2, true];
                }
            });
        });
    };
    Utils.eachGameObject = function (callback) {
        editData_1.editData.game.repository.getArray('GameObjectProto').forEach(function (go) {
            callback(go);
        });
        editData_1.editData.game.repository.getArray('Scene').forEach(function (scene) {
            scene.layers.forEach(function (layer) {
                layer.children.forEach(function (go) {
                    callback(go);
                });
            });
        });
    };
    Utils.openEditor = function (path) {
        var _this = this;
        editData_1.editData.scriptEditorUrl = path;
        restFileSystem_1.RestFileSystem.readFile(path, function (file) {
            _this._waitForFrameAndDo(file, path);
        });
    };
    Utils.assign = function (model, property, value) {
        model && (model[property] = value);
    };
    Utils.capitalise = function (s) {
        return s[0].toUpperCase() + s.substr(1);
    };
    Utils.decapitalise = function (s) {
        return s[0].toLowerCase() + s.substr(1);
    };
    Utils.deepEqual = function (x, y, _checkCache) {
        if (_checkCache === void 0) { _checkCache = []; }
        if (x && y && typeof x === 'object' && typeof y === 'object') {
            if (x === y)
                return true;
            if (_checkCache.indexOf(x) > -1 || _checkCache.indexOf(y) > -1)
                return true;
            _checkCache.push(x);
            _checkCache.push(y);
            return (Object.keys(x).length === Object.keys(y).length) &&
                Object.keys(x).reduce(function (isEqual, key) {
                    return isEqual && Utils.deepEqual(x[key], y[key], _checkCache);
                }, true);
        }
        else {
            return x === y;
        }
    };
    return Utils;
}());
exports.Utils = Utils;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getDefaultCodeScript = function (name) {
    return "\n\nexport class " + name + "Behaviour {\n\n    onCreate(){\n\n    }\n\n    onUpdate(){\n\n    }\n\n    onDestroy(){\n\n    }\n\n}\n";
};
exports.getLibCodeScript = function (name) {
    return "\n\nexport class " + name + " {\n\n}";
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var httpClient_1 = __webpack_require__(19);
var editData_1 = __webpack_require__(9);
var allModels = __webpack_require__(33);
var utils_1 = __webpack_require__(30);
var RestResource = (function () {
    function RestResource() {
    }
    RestResource.getAll = function (projectName) {
        return httpClient_1.httpClient.post('/resource/getAll', { projectName: projectName });
    };
    RestResource.save = function (model, callback, opts) {
        if (!allModels[model.type])
            throw "Unregistered type " + model.type + ", export this type in 'engine/model/all'!";
        var Class = allModels[model.type];
        var modelSample = new Class(editData_1.editData.game);
        if (model.toJSON)
            model = model.toJSON(opts);
        Object.keys(model).forEach(function (key) {
            if (['name', 'type', 'id']['includes'](key))
                return;
            if (utils_1.Utils.deepEqual(model[key], modelSample[key]))
                delete model[key];
        });
        return httpClient_1.httpClient.post('/resource/save', { projectName: editData_1.editData.projectName, model: model }, callback);
    };
    RestResource.saveGameProps = function (model, callback) {
        return httpClient_1.httpClient.post('/resource/saveGameProps', { projectName: editData_1.editData.projectName, model: model }, callback);
    };
    RestResource.remove = function (model, callback) {
        return httpClient_1.httpClient.post('/resource/remove', { projectName: editData_1.editData.projectName, model: {
                id: model.id,
                type: model.type
            } }, callback);
    };
    RestResource.saveTile = function (model, callback) {
        return httpClient_1.httpClient.post('/resource/saveTile', {
            projectName: editData_1.editData.projectName,
            model: model
        }, callback);
    };
    return RestResource;
}());
exports.RestResource = RestResource;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var frameAnimation_1 = __webpack_require__(44);
exports.FrameAnimation = frameAnimation_1.FrameAnimation;
var spriteSheet_1 = __webpack_require__(24);
exports.SpriteSheet = spriteSheet_1.SpriteSheet;
var gameObjectProto_1 = __webpack_require__(15);
exports.GameObjectProto = gameObjectProto_1.GameObjectProto;
var gameObject_1 = __webpack_require__(20);
exports.GameObject = gameObject_1.GameObject;
var commonBehaviour_1 = __webpack_require__(49);
exports.CommonBehaviour = commonBehaviour_1.CommonBehaviour;
var particleSystem_1 = __webpack_require__(39);
exports.ParticleSystem = particleSystem_1.ParticleSystem;
var scene_1 = __webpack_require__(43);
exports.Scene = scene_1.Scene;
var sound_1 = __webpack_require__(40);
exports.Sound = sound_1.Sound;
var font_1 = __webpack_require__(41);
exports.Font = font_1.Font;
var layer_1 = __webpack_require__(23);
exports.Layer = layer_1.Layer;
var textField_1 = __webpack_require__(12);
exports.TextField = textField_1.TextField;
var button_1 = __webpack_require__(53);
exports.Button = button_1.Button;
var tileMap_1 = __webpack_require__(42);
exports.TileMap = tileMap_1.TileMap;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var SCALE_STRATEGY;
(function (SCALE_STRATEGY) {
    SCALE_STRATEGY[SCALE_STRATEGY["NO_SCALE"] = 0] = "NO_SCALE";
    SCALE_STRATEGY[SCALE_STRATEGY["FIT"] = 1] = "FIT";
})(SCALE_STRATEGY = exports.SCALE_STRATEGY || (exports.SCALE_STRATEGY = {}));


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var shaderProgramUtils_1 = __webpack_require__(8);
var shaderGenerator_1 = __webpack_require__(59);
var ColorShaderGenerator = (function (_super) {
    tslib_1.__extends(ColorShaderGenerator, _super);
    function ColorShaderGenerator() {
        var _this = _super.call(this) || this;
        _this.addAttribute(shaderProgramUtils_1.GL_TYPE.FLOAT_VEC4, 'a_position');
        _this.addVertexUniform(shaderProgramUtils_1.GL_TYPE.FLOAT_MAT4, 'u_vertexMatrix');
        _this.setVertexMainFn("\n            void main(){\n                gl_Position = u_vertexMatrix * a_position;   \n            }\n        ");
        _this.addFragmentUniform(shaderProgramUtils_1.GL_TYPE.FLOAT, 'u_alpha');
        _this.addFragmentUniform(shaderProgramUtils_1.GL_TYPE.FLOAT_VEC4, 'u_rgba');
        _this.setFragmentMainFn("\n            void main(){\n                gl_FragColor = u_rgba;\n            }\n        ");
        return _this;
    }
    return ColorShaderGenerator;
}(shaderGenerator_1.ShaderGenerator));
exports.ColorShaderGenerator = ColorShaderGenerator;


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var AbstractPrimitive = (function () {
    function AbstractPrimitive() {
    }
    return AbstractPrimitive;
}());
exports.AbstractPrimitive = AbstractPrimitive;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var abstractPrimitive_1 = __webpack_require__(36);
var Plane = (function (_super) {
    tslib_1.__extends(Plane, _super);
    function Plane() {
        var _this = _super.call(this) || this;
        _this.vertexArr = [
            0, 0,
            0, 1,
            1, 0,
            1, 1
        ];
        _this.indexArr = [0, 1, 2, 3];
        _this.texCoordArr = [
            0, 0,
            0, 1,
            1, 0,
            1, 1
        ];
        return _this;
    }
    return Plane;
}(abstractPrimitive_1.AbstractPrimitive));
exports.Plane = Plane;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var BaseAbstractBehaviour = (function () {
    function BaseAbstractBehaviour(game) {
        this.game = game;
        BaseAbstractBehaviour.instances.push(this);
    }
    BaseAbstractBehaviour.prototype.manage = function (gameObject, parameters, dirs) {
        console.error(this);
        if (true)
            throw "BaseAbstractBehaviour: method 'manage' not implemented";
    };
    BaseAbstractBehaviour.prototype.onUpdate = function () { };
    BaseAbstractBehaviour.prototype.destroy = function () { };
    BaseAbstractBehaviour.destroyAll = function () {
        BaseAbstractBehaviour.instances.forEach(function (it) {
            it.destroy();
        });
    };
    BaseAbstractBehaviour.instances = [];
    return BaseAbstractBehaviour;
}());
exports.BaseAbstractBehaviour = BaseAbstractBehaviour;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var baseModel_1 = __webpack_require__(11);
var mathEx = __webpack_require__(4);
var r = function (obj) { return mathEx.random(obj.from, obj.to); };
var ParticleSystem = (function (_super) {
    tslib_1.__extends(ParticleSystem, _super);
    function ParticleSystem(game) {
        var _this = _super.call(this, game) || this;
        _this.type = 'ParticleSystem';
        _this.gameObjectProto = null;
        _this._particles = [];
        _this.numOfParticlesToEmit = { from: 1, to: 10 };
        _this.particleAngle = { from: 0, to: 0 };
        _this.particleVelocity = { from: 1, to: 100 };
        _this.particleLiveTime = { from: 100, to: 1000 };
        _this.emissionRadius = 0;
        _this.filters = null;
        _this.blendMode = '';
        return _this;
    }
    ParticleSystem.prototype.revalidate = function () {
        if (this.particleAngle.to < this.particleAngle.from)
            this.particleAngle.to += 2 * Math.PI;
    };
    ParticleSystem.find = function (name) {
    };
    ParticleSystem.findAll = function (name) {
    };
    ParticleSystem.prototype.emit = function (x, y) {
        for (var i = 0; i < r(this.numOfParticlesToEmit); i++) {
            var particle = this.gameObjectProto.createGameObject();
            var angle = r(this.particleAngle);
            var vel = r(this.particleVelocity);
            particle.velocity.x = vel * Math.cos(angle);
            particle.velocity.y = vel * Math.sin(angle);
            particle.pos.x = r({ from: x - this.emissionRadius, to: x + this.emissionRadius });
            particle.pos.y = r({ from: y - this.emissionRadius, to: y + this.emissionRadius });
            particle['liveTime'] = r(this.particleLiveTime);
            this._particles.push(particle);
        }
    };
    ParticleSystem.prototype.update = function (time, delta) {
        var all = this._particles;
        var i = all.length;
        var l = i - 1;
        while (i--) {
            var p = all[l - i];
            if (!p)
                continue;
            if (!p._timeCreated)
                p._timeCreated = time;
            if (time - p._timeCreated > p.liveTime) {
                this._particles.splice(this._particles.indexOf(p), 1);
            }
            p.update(time, delta);
        }
    };
    ParticleSystem.prototype.render = function () {
        var all = this._particles;
        var i = all.length;
        var l = i - 1;
        while (i--) {
            var p = all[l - i];
            if (!p)
                continue;
            p.render();
        }
    };
    return ParticleSystem;
}(baseModel_1.BaseModel));
exports.ParticleSystem = ParticleSystem;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var baseModel_1 = __webpack_require__(11);
var Sound = (function (_super) {
    tslib_1.__extends(Sound, _super);
    function Sound(game) {
        var _this = _super.call(this, game) || this;
        _this.type = 'Sound';
        _this.resourcePath = '';
        _this._gain = 1;
        _this._loop = false;
        return _this;
    }
    Sound.find = function (name) {
    };
    Sound.prototype.play = function () {
    };
    Sound.prototype.stop = function () {
    };
    Sound.prototype.pause = function () {
        throw 'not implemented';
    };
    Sound.prototype.setGain = function (val, time, easeFnName) {
    };
    return Sound;
}(baseModel_1.BaseModel));
exports.Sound = Sound;


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var resource_1 = __webpack_require__(27);
var FontContext = (function () {
    function FontContext() {
        this.width = 0;
        this.height = 0;
        this.symbols = [];
    }
    return FontContext;
}());
var Font = (function (_super) {
    tslib_1.__extends(Font, _super);
    function Font(game) {
        var _this = _super.call(this, game) || this;
        _this.type = 'Font';
        _this.fontSize = 12;
        _this.fontFamily = 'Monospace';
        _this.fontContext = null;
        _this.fontColor = { r: 0, g: 0, b: 0 };
        return _this;
    }
    Font.prototype.getDefaultSymbolHeight = function () {
        return this.fontContext.symbols[' '].height;
    };
    return Font;
}(resource_1.Resource));
exports.Font = Font;


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var rect_1 = __webpack_require__(2);
var rigidShapes_1 = __webpack_require__(62);
var commonObject_1 = __webpack_require__(26);
var decorators_1 = __webpack_require__(25);
var TileMap = (function (_super) {
    tslib_1.__extends(TileMap, _super);
    function TileMap(game) {
        var _this = _super.call(this) || this;
        _this.game = game;
        _this.type = "TileMap";
        _this.spriteSheet = null;
        _this.data = [];
        _this.width = 0;
        _this.height = 0;
        _this.filters = null;
        _this.blendMode = '';
        return _this;
    }
    TileMap.prototype.fromTiledJSON = function (source, mapWidth, mapHeight) {
        this.data = [];
        var cnt = 0;
        for (var j = 0; j < mapHeight; j++) {
            this.data[j] = [];
            for (var i = 0; i < mapWidth; i++) {
                var val = source[cnt++];
                if (val === 0)
                    this.data[j][i] = undefined;
                else {
                    this.data[j][i] = {};
                    this.data[j][i].val = val - 1;
                    var w = this.spriteSheet._frameWidth;
                    var h = this.spriteSheet._frameHeight;
                    var x = i * w;
                    var y = j * h;
                    var c = new rigidShapes_1.Vec2(x + w / 2, y + h / 2);
                    var r = new rigidShapes_1.RigidRectangle(this.game, c, w, h, 0);
                    r.fixedAngle = true;
                    this.data[j][i].rect = r;
                }
            }
        }
        this.width = mapWidth;
        this.height = mapHeight;
        if (true) {
            var found = cnt;
            var expected = source.length;
            if (expected !== found) {
                throw "incorrect mapWidth/mapHeight provided. Expected " + expected + " tiles, but " + found + " found (" + mapWidth + "*" + mapHeight + ")";
            }
        }
    };
    TileMap.prototype.revalidate = function () {
        this.game.camera._updateRect();
        var camRect = this.game.camera.getRectScaled();
        if (!this.spriteSheet)
            return;
        this._tilesInScreenX = ~~(camRect.width / this.spriteSheet._frameWidth);
        this._tilesInScreenY = ~~(camRect.height / this.spriteSheet._frameHeight);
    };
    TileMap.prototype.getTileAt = function (x, y) {
        if (!this.spriteSheet)
            return;
        var tilePosX = ~~(x / this.spriteSheet._frameWidth);
        var tilePosY = ~~(y / this.spriteSheet._frameHeight);
        if (!this.data[tilePosY])
            return;
        var tile = this.data[tilePosY][tilePosX];
        if (!tile)
            return;
        return {
            tileIndex: this.spriteSheet.numOfFramesH * tilePosY + tilePosX + 1,
            tile: tile
        };
    };
    TileMap.prototype.getTilesAtRect = function (rect) {
        var result = [];
        if (!this.spriteSheet)
            return result;
        var alreadyCheckedTiles = {};
        var x = rect.x, y;
        var maxX = rect.x + rect.width, maxY = rect.y + rect.height;
        while (true) {
            y = rect.y;
            while (true) {
                var tileInfo = this.getTileAt(x, y);
                if (tileInfo) {
                    if (!alreadyCheckedTiles[tileInfo.tileIndex]) {
                        result.push(tileInfo.tile);
                        alreadyCheckedTiles[tileInfo.tileIndex] = true;
                    }
                }
                if (y === maxY)
                    break;
                y += this.spriteSheet._frameHeight;
                if (y > maxY)
                    y = maxY;
            }
            if (x === maxX)
                break;
            x += this.spriteSheet._frameWidth;
            if (x > maxX)
                x = maxX;
        }
        return result;
    };
    TileMap.prototype.render = function () {
        var spriteSheet = this.spriteSheet;
        if (!spriteSheet)
            return;
        var camera = this.game.camera;
        var renderer = this.game.renderer;
        var cameraRect = camera.getRectScaled();
        var tilePosX = ~~((cameraRect.x) / this.spriteSheet._frameWidth);
        var tilePosY = ~~((cameraRect.y) / this.spriteSheet._frameHeight);
        if (tilePosX < 0)
            tilePosX = 0;
        if (tilePosY < 0)
            tilePosY = 0;
        var w = tilePosX + this._tilesInScreenX + 1;
        var h = tilePosY + this._tilesInScreenY + 1;
        for (var y = tilePosY; y <= h; y++) {
            for (var x = tilePosX; x <= w; x++) {
                var tileVal = this.data[y] && this.data[y][x] && this.data[y][x].val;
                if (tileVal === false || tileVal === null || tileVal === undefined)
                    continue;
                var destRect = rect_1.Rect.fromPool().clone();
                destRect.setXYWH(x * spriteSheet._frameWidth, y * spriteSheet._frameHeight, spriteSheet._frameWidth, spriteSheet._frameHeight);
                renderer.drawImage(spriteSheet.getDefaultResourcePath(), spriteSheet.getFrameRect(tileVal), destRect);
            }
        }
    };
    TileMap = tslib_1.__decorate([
        decorators_1.Transient({
            game: true
        })
    ], TileMap);
    return TileMap;
}(commonObject_1.CommonObject));
exports.TileMap = TileMap;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var noop_1 = __webpack_require__(63);
var baseModel_1 = __webpack_require__(11);
var loadingQueue_1 = __webpack_require__(179);
var tileMap_1 = __webpack_require__(42);
var layer_1 = __webpack_require__(23);
var ambientLight_1 = __webpack_require__(178);
var color_1 = __webpack_require__(28);
var camera_1 = __webpack_require__(60);
var Scene = (function (_super) {
    tslib_1.__extends(Scene, _super);
    function Scene(game) {
        var _this = _super.call(this, game) || this;
        _this.type = 'Scene';
        _this.layers = [];
        _this.useBG = false;
        _this.colorBG = color_1.Color.WHITE;
        _this.filters = [];
        _this.blendMode = '';
        _this._tweenMovies = [];
        _this._individualBehaviour = null;
        _this.tileMap = new tileMap_1.TileMap(game);
        _this.ambientLight = new ambientLight_1.AmbientLight(game);
        _this.uiLayer = new layer_1.Layer(_this.game);
        return _this;
    }
    Scene.prototype.revalidate = function () {
        _super.prototype.revalidate.call(this);
        if (false) {}
    };
    Scene.prototype.addTweenMovie = function (tm) {
        this._tweenMovies.push(tm);
    };
    Scene.prototype.getAllGameObjects = function () {
        var res = [];
        var ONE = 1;
        for (var i = 0; i < this.layers.length; i++) {
            var layer = this.layers[this.layers.length - ONE - i];
            for (var j = 0; j < layer.children.length; j++) {
                var go = layer.children[layer.children.length - ONE - j];
                res.push(go);
            }
        }
        return res;
    };
    Scene.prototype.getAllSpriteSheets = function () {
        var dataSet = {};
        this.layers.forEach(function (l) {
            l.getAllSpriteSheets().forEach(function (s) {
                dataSet[s.id] = s;
            });
        });
        if (this.tileMap && this.tileMap.spriteSheet) {
            dataSet[this.tileMap.spriteSheet.id] = this.tileMap.spriteSheet;
        }
        return Object.keys(dataSet).map(function (key) { return dataSet[key]; });
    };
    Scene.prototype.getDefaultLayer = function () {
        return this.layers[0];
    };
    Scene.prototype.addGameObject = function (go) {
        this.getDefaultLayer().appendChild(go);
    };
    Scene.prototype.preload = function (cb) {
        var _this = this;
        var resources = this.getAllSpriteSheets().
            concat(this.game.repository.getArray('Font'));
        resources = resources.concat(this.game.repository.getArray('GameObjectProto').map(function (it) { return it.spriteSheet; }));
        var q = new loadingQueue_1.Queue();
        q.onResolved = function () {
            cb && cb();
        };
        resources.forEach(function (res) {
            var id = 0;
            res.getAllResourcePathes().forEach(function (path) {
                (function (id) {
                    q.addTask(function () {
                        _this.game.renderer.loadTextureInfo(path, function () { return q.resolveTask(id); });
                    }, id);
                })(id);
                id++;
            });
        });
        q.start();
    };
    Scene.prototype.onShow = function () {
        if (this._individualBehaviour)
            this._individualBehaviour.onCreate();
        this.layers.forEach(function (l) {
            l.onShow();
        });
    };
    Scene.prototype.setIndividualBehaviour = function (instance) {
        instance.game = this.game;
        instance.scene = this;
        if (!instance.onCreate)
            instance.onCreate = noop_1.noop;
        if (!instance.onUpdate)
            instance.onUpdate = noop_1.noop;
        if (!instance.onDestroy)
            instance.onDestroy = noop_1.noop;
        this._individualBehaviour = instance;
    };
    Scene.prototype.update = function (currTime, deltaTime) {
        var _this = this;
        var layers = this.layers;
        var i = this.layers.length;
        var l = i - 1;
        if (this._individualBehaviour)
            this._individualBehaviour.onUpdate();
        while (i--) {
            layers[i - l].update(currTime, deltaTime);
        }
        this.uiLayer.update(currTime, deltaTime);
        this.game.repository.getArray('ParticleSystem').forEach(function (ps) {
            ps.update(currTime, deltaTime);
        });
        this._tweens.forEach(function (t, index) {
            t.update(currTime);
            if (t.isCompleted())
                _this._tweens.splice(index, 1);
        });
    };
    Scene.prototype.render = function () {
        var renderer = this.game.renderer;
        renderer.beginFrameBuffer();
        if (this.useBG)
            renderer.clearColor(this.colorBG);
        else
            renderer.clear();
        var layers = this.layers;
        var i = this.layers.length;
        var l = i - 1;
        this.game.camera.matrixMode = camera_1.CAMERA_MATRIX_MODE.MODE_TRANSFORM;
        this.game.camera.update(this.game.getTime(), this.game.getDeltaTime());
        while (i--) {
            layers[i - l].render();
        }
        this.tileMap.render();
        renderer.save();
        renderer.resetTransform();
        this.game.camera.matrixMode = camera_1.CAMERA_MATRIX_MODE.MODE_IDENTITY;
        this.uiLayer.render();
        renderer.restore();
        this.game.camera.matrixMode = camera_1.CAMERA_MATRIX_MODE.MODE_TRANSFORM;
        this.game.repository.getArray('ParticleSystem').forEach(function (ps) {
            ps.render();
        });
        if (true) {
            this.game.renderer.restore();
            if (this.game.renderer.debugTextField) {
                this.game.renderer.debugTextField.update(this.game.getTime(), this.game.getDeltaTime());
                this.game.renderer.debugTextField.render();
            }
            this.game.renderer.restore();
        }
        renderer.flipFrameBuffer(this.filters);
    };
    return Scene;
}(baseModel_1.BaseModel));
exports.Scene = Scene;


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var commonObject_1 = __webpack_require__(26);
var decorators_1 = __webpack_require__(25);
var eventEmitter_1 = __webpack_require__(64);
var FrameAnimation = (function (_super) {
    tslib_1.__extends(FrameAnimation, _super);
    function FrameAnimation(game) {
        var _this = _super.call(this) || this;
        _this.game = game;
        _this.type = 'FrameAnimation';
        _this._currFrame = 0;
        _this.frames = [];
        _this.duration = 1000;
        _this._gameObject = null;
        _this._startTime = null;
        _this._emitter = new eventEmitter_1.EventEmitter();
        _this.stop();
        return _this;
    }
    FrameAnimation.prototype.revalidate = function () {
        this._timeForOneFrame = ~~(this.duration / this.frames.length);
    };
    FrameAnimation.prototype.play = function (opts) {
        if (opts === void 0) { opts = { repeat: true }; }
        this._isRepeat = opts.repeat;
        this._gameObject._currFrameAnimation = this;
    };
    FrameAnimation.prototype.stop = function () {
        if (this._gameObject)
            this._gameObject._currFrameAnimation = null;
        this._startTime = null;
        this._isRepeat = true;
    };
    FrameAnimation.prototype.update = function (time) {
        if (!this._startTime)
            this._startTime = time;
        var delta = (time - this._startTime) % this.duration;
        this._currFrame = ~~((this.frames.length) * delta / this.duration);
        if (this._isRepeat == false && this._currFrame >= this.frames.length - 1) {
            this.trigger('loop');
            this.stop();
            return;
        }
        var lastFrIndex = this._gameObject.currFrameIndex;
        if (lastFrIndex != this.frames[this._currFrame]) {
            this._gameObject.setFrameIndex(this.frames[this._currFrame]);
            if (this._currFrame === 0 && this._startTime !== time)
                this.trigger('loop');
        }
    };
    FrameAnimation.prototype.nextFrame = function () {
        var ind = this._currFrame;
        ind++;
        if (ind == this.frames.length)
            ind = 0;
        this._gameObject.setFrameIndex(this.frames[ind]);
        this._currFrame = ind;
    };
    FrameAnimation.prototype.previousFrame = function () {
        var ind = this._currFrame;
        ind--;
        if (ind < 0)
            ind = this.frames.length - 1;
        this._gameObject.setFrameIndex(this.frames[ind]);
        this._currFrame = ind;
    };
    FrameAnimation.prototype.on = function (eventName, callBack) {
        this._emitter.on(eventName, callBack);
        return callBack;
    };
    FrameAnimation.prototype.off = function (eventName, callBack) {
        this._emitter.off(eventName, callBack);
    };
    FrameAnimation.prototype.trigger = function (eventName, data) {
        this._emitter.trigger(eventName, data);
    };
    FrameAnimation = tslib_1.__decorate([
        decorators_1.Transient({
            game: true
        })
    ], FrameAnimation);
    return FrameAnimation;
}(commonObject_1.CommonObject));
exports.FrameAnimation = FrameAnimation;


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var resource_1 = __webpack_require__(27);
var RenderableModel = (function (_super) {
    tslib_1.__extends(RenderableModel, _super);
    function RenderableModel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.parent = null;
        _this.children = [];
        return _this;
    }
    RenderableModel.prototype.appendChild = function (c) {
        c.parent = this;
        this.children.push(c);
        c.onShow();
    };
    RenderableModel.prototype._setDirty = function () {
        this._dirty = true;
        if (this.parent)
            this.parent._dirty = true;
    };
    RenderableModel.prototype.beforeRender = function () {
        this.game.renderer.translate(this.pos.x, this.pos.y);
    };
    RenderableModel.prototype.render = function () {
        var renderer = this.game.renderer;
        renderer.save();
        this.beforeRender();
        renderer.translate(-this.anchor.x, -this.anchor.y);
        if (!(this.angle === 0 && this.scale.equal(1))) {
            var dx = this.width / 2, dy = this.height / 2;
            renderer.translate(dx, dy);
            renderer.scale(this.scale.x, this.scale.y);
            renderer.rotateZ(this.angle);
            renderer.translate(-dx, -dy);
        }
        this.draw();
        if (this.children.length > 0) {
            renderer.save();
            renderer.translate(this.anchor.x, this.anchor.y);
            for (var i = 0, max = this.children.length; i < max; i++) {
                this.children[i].render();
            }
            renderer.restore();
        }
        renderer.restore();
    };
    return RenderableModel;
}(resource_1.Resource));
exports.RenderableModel = RenderableModel;


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var httpClient_1 = __webpack_require__(19);
var RestProject = (function () {
    function RestProject() {
    }
    RestProject.getAll = function (callback) {
        return httpClient_1.httpClient.get('/project/getAll', {}, callback);
    };
    RestProject.create = function (projectName, callback) {
        return httpClient_1.httpClient.post('/project/create', { projectName: projectName }, callback);
    };
    RestProject.exist = function (projectName, callback) {
        return httpClient_1.httpClient.post('/project/exist', { projectName: projectName }, callback);
    };
    return RestProject;
}());
exports.RestProject = RestProject;


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var editData_1 = __webpack_require__(9);
var restResource_1 = __webpack_require__(32);
var restProject_1 = __webpack_require__(46);
var commonBehaviour_1 = __webpack_require__(49);
var textField_1 = __webpack_require__(12);
var cnt = 0;
var ResourceHelper = (function () {
    function ResourceHelper() {
    }
    ResourceHelper.loadProject = function (projectName) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var exist, allData, scenes;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, restProject_1.RestProject.exist(projectName)];
                    case 1:
                        exist = _a.sent();
                        if (!!exist) return [3, 2];
                        delete sessionStorage['projectName'];
                        RF.Router.navigateTo('explorer');
                        return [3, 4];
                    case 2:
                        document.title = projectName;
                        sessionStorage['projectName'] = projectName;
                        editData_1.editData.reset();
                        return [4, restResource_1.RestResource.getAll(projectName)];
                    case 3:
                        allData = _a.sent();
                        editData_1.editData.reset(allData.gameProps);
                        editData_1.editData.projectName = projectName;
                        editData_1.editData.commonBehaviourProtos = allData.commonBehaviourProtos.map(function (it) {
                            return new commonBehaviour_1.CommonBehaviour(editData_1.editData.game).fromJSON(it);
                        });
                        editData_1.editData.game.repository.setDescriptions(allData.repository);
                        editData_1.editData.customScripts = allData.customScripts.map(function (it) { return ({ name: it }); });
                        editData_1.editData.ui = [
                            (function () {
                                var t = new textField_1.TextField(editData_1.editData.game);
                                t.name = 'text field';
                                t.id = ~~(Math.random() * 100) + (cnt++);
                                var font = editData_1.editData.game.repository.getFirst('Font');
                                if (font)
                                    t.setFont(font);
                                editData_1.editData.game.repository.addDescription(t.toJSON(), t.type);
                                return t;
                            })()
                        ];
                        scenes = editData_1.editData.game.repository.getArray('Scene');
                        editData_1.editData.currSceneInEdit = scenes[0];
                        editData_1.editData.currLayerInEdit = scenes[0] && scenes[0].layers[0];
                        RF.Router.navigateTo('editor');
                        _a.label = 4;
                    case 4: return [2];
                }
            });
        });
    };
    return ResourceHelper;
}());
exports.ResourceHelper = ResourceHelper;


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var httpClient_1 = __webpack_require__(19);
var editData_1 = __webpack_require__(9);
var RestFileSystem = (function () {
    function RestFileSystem() {
    }
    RestFileSystem.createFile = function (path, content, callback) {
        return httpClient_1.httpClient.post('/fileSystem/createFile', {
            path: path,
            content: content,
            projectName: editData_1.editData.projectName
        }, callback);
    };
    RestFileSystem.uploadFile = function (file, params, callback) {
        params = params || {};
        params.projectName = editData_1.editData.projectName;
        return httpClient_1.httpClient.postMultiPart('/fileSystem/uploadFile', file, params, callback);
    };
    RestFileSystem.removeFile = function (path, callback) {
        return httpClient_1.httpClient.post('/fileSystem/removeFile', {
            path: path,
            projectName: editData_1.editData.projectName
        }, callback);
    };
    RestFileSystem.readFile = function (path, callback) {
        return httpClient_1.httpClient.post('/fileSystem/readFile', {
            path: path,
            projectName: editData_1.editData.projectName
        }, callback);
    };
    RestFileSystem.renameFolder = function (oldName, newName, callback) {
        return httpClient_1.httpClient.post('/fileSystem/renameFolder', { oldName: oldName, newName: newName }, callback);
    };
    RestFileSystem.deleteFolder = function (name, callback) {
        return httpClient_1.httpClient.post('/fileSystem/deleteFolder', { name: name }, callback);
    };
    return RestFileSystem;
}());
exports.RestFileSystem = RestFileSystem;


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var baseModel_1 = __webpack_require__(11);
var CommonBehaviour = (function (_super) {
    tslib_1.__extends(CommonBehaviour, _super);
    function CommonBehaviour(game) {
        var _this = _super.call(this, game) || this;
        _this.type = 'CommonBehaviour';
        _this.parameters = [];
        _this.description = null;
        return _this;
    }
    return CommonBehaviour;
}(baseModel_1.BaseModel));
exports.CommonBehaviour = CommonBehaviour;


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var baseAbstractBehaviour_1 = __webpack_require__(38);
var Moveable = (function (_super) {
    tslib_1.__extends(Moveable, _super);
    function Moveable(game) {
        return _super.call(this, game) || this;
    }
    Moveable.prototype.manage = function (gameObject, parameters, dirs) {
        var _this = this;
        this.gameObject = gameObject;
        this.parameters = parameters;
        this.animations = {};
        dirs.forEach(function (dir) {
            var keyWalk = 'walk' + dir + 'Animation', keyIdle = 'idle' + dir + 'Animation';
            _this.animations[keyWalk] = _this.gameObject.
                frameAnimations.
                find(function (it) { return it.name === parameters[keyWalk]; });
            parameters[keyIdle] && (_this.animations[keyIdle] =
                _this.gameObject.
                    frameAnimations.
                    find(function (it) { return it.name === parameters[keyIdle]; }));
        });
    };
    Moveable.prototype.stop = function () {
        this.gameObject.stopFrAnimations();
        var keyIdle = 'idle' + this.gameObject._lastDirection + 'Animation';
        if (this.animations[keyIdle]) {
            this.animations[keyIdle].play();
        }
    };
    Moveable.prototype.go = function (direction) {
        this.gameObject._lastDirection = direction;
        this.animations['walk' + direction + 'Animation'].play();
    };
    return Moveable;
}(baseAbstractBehaviour_1.BaseAbstractBehaviour));
exports.Moveable = Moveable;


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var container_1 = __webpack_require__(21);
var AbsoluteLayout = (function (_super) {
    tslib_1.__extends(AbsoluteLayout, _super);
    function AbsoluteLayout(game) {
        return _super.call(this, game) || this;
    }
    AbsoluteLayout.prototype.appendChild = function (c) {
        c.testLayout();
        c.parent = this;
        _super.prototype.appendChild.call(this, c);
    };
    AbsoluteLayout.prototype.onGeometryChanged = function () {
        _super.prototype.onGeometryChanged.call(this);
        var maxX = 0, maxY = 0;
        for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
            var v = _a[_i];
            v.onGeometryChanged();
            v._dirty = true;
            var r = v.getRect();
            if (r.right > maxX)
                maxX = r.right;
            if (r.bottom > maxY)
                maxY = r.bottom;
        }
        if (this.layoutWidth === container_1.LAYOUT_SIZE.WRAP_CONTENT) {
            this.width = maxX;
        }
        if (this.layoutHeight === container_1.LAYOUT_SIZE.WRAP_CONTENT) {
            this.height = maxY;
        }
        this.calcDrawableRect(this.width, this.height);
    };
    AbsoluteLayout.prototype.update = function (time, delta) {
        _super.prototype.update.call(this, time, delta);
        for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
            var c = _a[_i];
            if (c._dirty)
                c.parent._dirty = true;
            c.update(time, delta);
        }
    };
    AbsoluteLayout.prototype.draw = function () {
        var renderer = this.game.renderer;
        if (this.overflow === container_1.OVERFLOW.HIDDEN)
            renderer.lockRect(this.getRect());
        if (this.background)
            this.background.draw();
        renderer.translate(this.paddingLeft, this.paddingTop);
        if (this.overflow === container_1.OVERFLOW.HIDDEN)
            this.game.renderer.unlockRect();
    };
    return AbsoluteLayout;
}(container_1.Container));
exports.AbsoluteLayout = AbsoluteLayout;


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var rect_1 = __webpack_require__(2);
var resource_1 = __webpack_require__(27);
var Image = (function (_super) {
    tslib_1.__extends(Image, _super);
    function Image(game) {
        var _this = _super.call(this, game) || this;
        _this.destRect = new rect_1.Rect();
        _this.srcRect = new rect_1.Rect();
        _this.filters = [];
        _this.drawingRect = new rect_1.Rect();
        _this.blendMode = '';
        return _this;
    }
    Image.prototype.getDrawableInfo = function () {
        return { blendMode: this.blendMode, acceptLight: false };
    };
    Image.prototype.draw = function () {
        this.game.renderer.drawImage(this.getDefaultResourcePath(), this.srcRect, this.destRect);
    };
    return Image;
}(resource_1.Resource));
exports.Image = Image;


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var container_1 = __webpack_require__(21);
var textField_1 = __webpack_require__(12);
var Button = (function (_super) {
    tslib_1.__extends(Button, _super);
    function Button(game) {
        var _this = _super.call(this, game) || this;
        _this.text = '';
        _this.font = null;
        _this._textField = new textField_1.TextField(game);
        return _this;
    }
    Button.prototype.revalidate = function () {
        _super.prototype.revalidate.call(this);
        this._textField.setFont(this.font);
        this._textField.setText(this.text);
        this.onGeometryChanged();
    };
    Button.prototype.onGeometryChanged = function () {
        this._textField.onGeometryChanged();
        this.calcDrawableRect(this._textField.width, this._textField.height);
        if (!this.background)
            return;
        var dx = (this.background.drawingRect.width - this._textField.width) / 2;
        var dy = (this.background.drawingRect.height - this._textField.height) / 2;
        this._textField.pos.setXY(dx, dy);
    };
    Button.prototype.setText = function (text) {
        this._textField.setText(text);
        this._dirty = true;
    };
    Button.prototype.setFont = function (f) {
        this._textField.setFont(f);
    };
    Button.prototype.getText = function () {
        return this._textField.getText();
    };
    Button.prototype.update = function (time, delta) {
        _super.prototype.update.call(this, time, delta);
    };
    Button.prototype.draw = function () {
        if (this.background)
            this.background.draw();
        this._textField.render();
    };
    return Button;
}(container_1.Container));
exports.Button = Button;


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var button_1 = __webpack_require__(53);
exports.Button = button_1.Button;
var textField_1 = __webpack_require__(12);
exports.TextField = textField_1.TextField;
var container_1 = __webpack_require__(21);
exports.Container = container_1.Container;
var image_1 = __webpack_require__(52);
exports.Image = image_1.Image;
var rectangle_1 = __webpack_require__(157);
exports.Rectangle = rectangle_1.Rectangle;
var ninePatchImage_1 = __webpack_require__(156);
exports.NinePatchImage = ninePatchImage_1.NinePatchImage;
var absoluteLayout_1 = __webpack_require__(51);
exports.AbsoluteLayout = absoluteLayout_1.AbsoluteLayout;


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var mathEx = __webpack_require__(4);
var point2d_1 = __webpack_require__(3);
var objectPool_1 = __webpack_require__(16);
var rect_1 = __webpack_require__(2);
var MousePoint = (function (_super) {
    tslib_1.__extends(MousePoint, _super);
    function MousePoint() {
        return _super.call(this) || this;
    }
    MousePoint.fromPool = function () {
        return MousePoint.mousePointsPool.getNextObject();
    };
    MousePoint.unTransform = function (another) {
        var p = MousePoint.fromPool();
        p.screenX = another.screenX;
        p.screenY = another.screenY;
        p.id = another.id;
        p.target = another.target;
        p.setXY(p.screenX, p.screenY);
        return p;
    };
    MousePoint.mousePointsPool = new objectPool_1.ObjectPool(MousePoint);
    return MousePoint;
}(point2d_1.Point2d));
exports.MousePoint = MousePoint;
exports.MOUSE_EVENTS = {
    click: 'click',
    mouseDown: 'mouseDown',
    mouseMove: 'mouseMove',
    mouseLeave: 'mouseLeave',
    mouseEnter: 'mouseEnter',
    mouseUp: 'mouseUp',
    doubleClick: 'doubleClick'
};
var Mouse = (function () {
    function Mouse(game) {
        this.objectsCaptured = {};
        this.game = game;
    }
    Mouse.prototype.resolvePoint = function (e) {
        var game = this.game;
        var clientX = e.clientX;
        var clientY = e.clientY;
        var screenX = (clientX - game.pos.x) / game.scale.x;
        var screenY = (clientY - game.pos.y) / game.scale.y;
        var p = game.camera.screenToWorld(point2d_1.Point2d.fromPool().setXY(screenX, screenY));
        var mousePoint = MousePoint.fromPool();
        mousePoint.set(p);
        mousePoint.screenX = screenX;
        mousePoint.screenY = screenY;
        mousePoint.id = e.identifier || 0;
        return mousePoint;
    };
    Mouse.triggerGameObjectEvent = function (eventName, point, go, offsetX, offsetY) {
        if (offsetX === void 0) { offsetX = 0; }
        if (offsetY === void 0) { offsetY = 0; }
        var rectWithOffset = rect_1.Rect.fromPool().clone().set(go.getRect()).addXY(offsetX, offsetY);
        if (mathEx.isPointInRect(point, rectWithOffset)) {
            point.target = go;
            go.trigger(eventName, {
                screenX: point.x,
                screenY: point.y,
                objectX: point.x - go.pos.x,
                objectY: point.y - go.pos.y,
                id: point.id,
                target: go,
                isMouseDown: point.isMouseDown
            });
            return true;
        }
        return false;
    };
    Mouse.prototype.triggerChildren = function (c, eventName, point, offsetX, offsetY) {
        for (var i = 0; i < c.length; i++) {
            var go = c[c.length - 1 - i];
            var isCaptured = Mouse.triggerGameObjectEvent(eventName, point, go, offsetX, offsetY);
            if (isCaptured) {
                this.triggerChildren(go.children, eventName, point, offsetX + go.pos.x, offsetY + go.pos.y);
                break;
            }
        }
    };
    Mouse.prototype.triggerEvent = function (e, eventName, isMouseDown) {
        if (isMouseDown === undefined)
            isMouseDown = false;
        var g = this.game;
        var scene = g.getCurrScene();
        var point = this.resolvePoint(e);
        point.isMouseDown = isMouseDown;
        point.target = undefined;
        for (var _i = 0, _a = scene.getAllGameObjects(); _i < _a.length; _i++) {
            var go = _a[_i];
            var isCaptured = Mouse.triggerGameObjectEvent(eventName, point, go);
            if (isCaptured) {
                break;
            }
        }
        var untransformedPoint = MousePoint.unTransform(point);
        for (var j = 0; j < scene.uiLayer.children.length; j++) {
            var go = scene.uiLayer.children[scene.uiLayer.children.length - 1 - j];
            var isCaptured = Mouse.triggerGameObjectEvent(eventName, untransformedPoint, go);
            if (isCaptured) {
                break;
            }
        }
        if (untransformedPoint.target)
            point.target = untransformedPoint.target;
        if (point.target === undefined)
            point.target = scene;
        scene.trigger(eventName, {
            screenX: point.x,
            screenY: point.y,
            id: point.id,
            target: scene,
            isMouseDown: isMouseDown
        });
        return point;
    };
    Mouse.prototype.resolveClick = function (e) {
        this.triggerEvent(e, exports.MOUSE_EVENTS.click);
        this.triggerEvent(e, exports.MOUSE_EVENTS.mouseDown);
    };
    Mouse.prototype.resolveMouseMove = function (e, isMouseDown) {
        var point = this.triggerEvent(e, exports.MOUSE_EVENTS.mouseMove, isMouseDown);
        if (!point)
            return;
        var lastMouseDownObject = this.objectsCaptured[point.id];
        if (lastMouseDownObject && lastMouseDownObject !== point.target) {
            lastMouseDownObject.trigger(exports.MOUSE_EVENTS.mouseLeave, point);
            delete this.objectsCaptured[point.id];
        }
        if (point.target && lastMouseDownObject !== point.target) {
            point.target.trigger(exports.MOUSE_EVENTS.mouseEnter, point);
            this.objectsCaptured[point.id] = point.target;
        }
    };
    Mouse.prototype.resolveMouseUp = function (e) {
        var point = this.triggerEvent(e, exports.MOUSE_EVENTS.mouseUp);
        if (!point)
            return;
        var lastMouseDownObject = this.objectsCaptured[point.id];
        if (!lastMouseDownObject)
            return;
        lastMouseDownObject.trigger(exports.MOUSE_EVENTS.mouseUp, point);
        delete this.objectsCaptured[point.id];
    };
    Mouse.prototype.resolveDoubleClick = function (e) {
        var point = this.triggerEvent(e, exports.MOUSE_EVENTS.doubleClick);
        if (!point)
            return;
        delete this.objectsCaptured[point.id];
    };
    Mouse.prototype.listenTo = function (container) {
        var _this = this;
        this.container = container;
        container.ontouchstart = function (e) {
            var l = e.touches.length;
            while (l--) {
                _this.resolveClick(e.touches[l]);
            }
        };
        container.onmousedown = function (e) {
            (e.button === 0) && _this.resolveClick(e);
        };
        container.ontouchend = container.ontouchcancel = function (e) {
            var l = e.changedTouches.length;
            while (l--) {
                _this.resolveMouseUp(e.changedTouches[l]);
            }
        };
        container.onmouseup = function (e) {
            _this.resolveMouseUp(e);
        };
        container.ontouchmove = function (e) {
            var l = e.touches.length;
            while (l--) {
                _this.resolveMouseMove(e.touches[l], true);
            }
        };
        container.onmousemove = function (e) {
            var isMouseDown = e.buttons === 1;
            _this.resolveMouseMove(e, isMouseDown);
        };
        container.ondblclick = function (e) {
            _this.resolveDoubleClick(e);
        };
    };
    Mouse.prototype.destroy = function () {
        var _this = this;
        [
            'mouseMove', 'ontouchstart', 'onmousedown',
            'ontouchend', 'onmouseup', 'ontouchmove',
            'onmousemove', 'ondblclick'
        ].forEach(function (evtName) {
            _this.container[evtName] = null;
        });
    };
    return Mouse;
}());
exports.Mouse = Mouse;


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var frameBuffer_1 = __webpack_require__(57);
var size_1 = __webpack_require__(29);
var isPowerOf2 = function (value) {
    return (value & (value - 1)) === 0;
};
var TextureFilterBuffer = (function () {
    function TextureFilterBuffer(parent) {
        this.buffers = [];
        this.parent = parent;
    }
    TextureFilterBuffer.prototype.instantiate = function (gl) {
        this.gl = gl;
        var buffSize = 2;
        for (var i = 0; i < buffSize; i++) {
            this.buffers.push(new frameBuffer_1.FrameBuffer(gl, this.parent.size.width, this.parent.size.height));
        }
    };
    TextureFilterBuffer.prototype.flip = function () {
        var tmp = this.buffers[0];
        this.buffers[0] = this.buffers[1];
        this.buffers[1] = tmp;
    };
    TextureFilterBuffer.prototype.getSourceBuffer = function () {
        return this.buffers[0];
    };
    TextureFilterBuffer.prototype.getDestBuffer = function () {
        return this.buffers[1];
    };
    TextureFilterBuffer.prototype.destroy = function () {
        if (this.buffers)
            this.buffers.forEach(function (b) { return b.destroy(); });
    };
    return TextureFilterBuffer;
}());
var Texture = (function () {
    function Texture(gl) {
        this.tex = null;
        this.size = new size_1.Size(0, 0);
        this.isPowerOfTwo = false;
        this._texFilterBuff = null;
        if (true && !gl)
            throw "can not create Texture, gl context not passed to constructor, expected: Texture(gl)";
        this.gl = gl;
        if (true) {
            if (!Texture.MAX_TEXTURE_IMAGE_UNITS)
                Texture.MAX_TEXTURE_IMAGE_UNITS = gl.getParameter(gl.MAX_TEXTURE_IMAGE_UNITS);
        }
        this.tex = gl.createTexture();
        if (true && !this.tex)
            throw "can not allocate memory for texture";
        gl.bindTexture(gl.TEXTURE_2D, this.tex);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, new Uint8Array([0, 0, 255, 255]));
        gl.bindTexture(gl.TEXTURE_2D, this.tex);
        this._texFilterBuff = new TextureFilterBuffer(this);
    }
    Texture.prototype.setImage = function (img, width, height) {
        if (width === void 0) { width = 0; }
        if (height === void 0) { height = 0; }
        if (true) {
            if (!(img || width || height))
                throw "texture.setImage: if image is null, width and height must be specified: tex.setImage(null,w,h)";
        }
        var gl = this.gl;
        if (img)
            this.size.setWH(img.width, img.height);
        else
            this.size.setWH(width, height);
        gl.bindTexture(gl.TEXTURE_2D, this.tex);
        gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 1);
        if (img) {
            gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img);
        }
        else {
            gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, width, height, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
        }
        this.isPowerOfTwo = img ? (isPowerOf2(img.width) && isPowerOf2(img.height)) : false;
        if (this.isPowerOfTwo) {
            gl.generateMipmap(gl.TEXTURE_2D);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT);
        }
        else {
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
        }
        gl.bindTexture(gl.TEXTURE_2D, null);
    };
    Texture.prototype.applyFilters = function (filters, frameBuffer) {
        if (true && frameBuffer === undefined)
            throw "can not apply filters. frameBuffer must be explicitly passed. Pass null if no frame buffer needs to bind after filtering";
        var len = filters.length;
        if (len === 0)
            return this;
        if (this._texFilterBuff.buffers === null)
            this._texFilterBuff.instantiate(this.gl);
        var filter = filters[0];
        var texInfo = [{ texture: this, name: 'texture' }];
        filter.doFilter(texInfo, this._texFilterBuff.getDestBuffer());
        for (var i = 1; i < len; i++) {
            this._texFilterBuff.flip();
            var texInfo_1 = [{ texture: this._texFilterBuff.getSourceBuffer().texture, name: 'texture' }];
            filters[i].doFilter(texInfo_1, this._texFilterBuff.getDestBuffer());
        }
        this._texFilterBuff.flip();
        if (frameBuffer !== null)
            frameBuffer.bind();
        return this._texFilterBuff.getSourceBuffer().texture;
    };
    Texture.prototype.bind = function (name, i, program) {
        if (true) {
            if (i > Texture.MAX_TEXTURE_IMAGE_UNITS - 1) {
                throw "can not bind texture with index " + i + ". Max supported value by device is " + Texture.MAX_TEXTURE_IMAGE_UNITS;
            }
        }
        program.setUniform(name, i);
        if (Texture.currInstances[i] === this)
            return;
        var gl = this.gl;
        gl.activeTexture(gl.TEXTURE0 + i);
        gl.bindTexture(gl.TEXTURE_2D, this.tex);
        Texture.currInstances[i] = this;
    };
    Texture.prototype.unbind = function (i) {
        if (i === void 0) { i = 0; }
        var gl = this.gl;
        gl.activeTexture(gl.TEXTURE0 + i);
        gl.bindTexture(gl.TEXTURE_2D, null);
        delete Texture.currInstances[i];
    };
    Texture.prototype.getColorArray = function () {
        var gl = this.gl;
        var wxh = this.size.width * this.size.height;
        if (true && gl.checkFramebufferStatus(gl.FRAMEBUFFER) !== gl.FRAMEBUFFER_COMPLETE)
            throw "Texture.GetColorArray() failed!";
        var pixels = new Uint8Array(wxh * 4);
        gl.readPixels(0, 0, this.size.width, this.size.height, gl.RGBA, gl.UNSIGNED_BYTE, pixels);
        return pixels;
    };
    Texture.prototype.destroy = function () {
        if (this._texFilterBuff)
            this._texFilterBuff.destroy();
        this.gl.deleteTexture(this.tex);
    };
    Texture.prototype.getSize = function () {
        return this.size;
    };
    Texture.prototype.getGlTexture = function () {
        return this.tex;
    };
    Texture.MAX_TEXTURE_IMAGE_UNITS = 0;
    Texture.currInstances = {};
    return Texture;
}());
exports.Texture = Texture;


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var texture_1 = __webpack_require__(56);
var FrameBuffer = (function () {
    function FrameBuffer(gl, width, height) {
        if (true && !gl)
            throw "can not create FrameBuffer, gl context not passed to constructor, expected: FrameBuffer(gl)";
        this.gl = gl;
        this.width = width;
        this.height = height;
        this.texture = new texture_1.Texture(gl);
        this.texture.setImage(null, width, height);
        this._init(gl, width, height);
    }
    FrameBuffer.prototype._init = function (gl, width, height) {
        this.glRenderBuffer = gl.createRenderbuffer();
        if (true && !this.glRenderBuffer)
            throw "can not allocate memory for glRenderBuffer";
        gl.bindRenderbuffer(gl.RENDERBUFFER, this.glRenderBuffer);
        gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_COMPONENT16, width, height);
        this.glFrameBuffer = gl.createFramebuffer();
        if (true && !this.glFrameBuffer)
            throw "can not allocate memory for glFrameBuffer";
        gl.bindFramebuffer(gl.FRAMEBUFFER, this.glFrameBuffer);
        gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, this.texture.getGlTexture(), 0);
        gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.RENDERBUFFER, this.glRenderBuffer);
        var fbStatus = gl.checkFramebufferStatus(gl.FRAMEBUFFER);
        if (true && fbStatus !== gl.FRAMEBUFFER_COMPLETE) {
            throw "frame buffer status error: " + fbStatus + " (expected gl.FRAMEBUFFER_COMPLETE(" + gl.FRAMEBUFFER_COMPLETE + "))";
        }
        this.texture.unbind();
        gl.bindRenderbuffer(gl.RENDERBUFFER, null);
        gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    };
    FrameBuffer.prototype.bind = function () {
        if (FrameBuffer.currInstance === this)
            return;
        this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.glFrameBuffer);
        this.gl.viewport(0, 0, this.width, this.height);
        FrameBuffer.currInstance = this;
    };
    FrameBuffer.prototype.unbind = function () {
        this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null);
        FrameBuffer.currInstance = null;
    };
    FrameBuffer.prototype.destroy = function () {
        this.gl.deleteRenderbuffer(this.glRenderBuffer);
        this.gl.deleteFramebuffer(this.glFrameBuffer);
    };
    FrameBuffer.prototype.getTexture = function () {
        return this.texture;
    };
    FrameBuffer.currInstance = null;
    return FrameBuffer;
}());
exports.FrameBuffer = FrameBuffer;


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var pointLight_1 = __webpack_require__(171);
var LightArray = (function () {
    function LightArray(game) {
        if (true && !game)
            throw "game instance is not passed to LightArray constructor";
        this.lights = new Array(LightArray.NUM_OF_LIGHT_IN_VIEW);
        for (var i = 0; i < this.lights.length; i++) {
            this.lights[i] = new pointLight_1.PointLight(game);
        }
    }
    LightArray.prototype.getLightAt = function (i) {
        return this.lights[i];
    };
    LightArray.prototype.setUniforms = function (uniform) {
        for (var i = 0; i < this.lights.length; i++) {
            var p = this.lights[i];
            p.setUniforms(uniform, i);
        }
    };
    LightArray.NUM_OF_LIGHT_IN_VIEW = 4;
    return LightArray;
}());
exports.LightArray = LightArray;


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ShaderGenerator = (function () {
    function ShaderGenerator() {
        this.vertexUniforms = [];
        this.fragmentUniforms = [];
        this.attributes = [];
        this.varyings = [];
        this.appendedFragCodeBlocks = [];
        this.appendedVertexCodeBlocks = [];
        this.prependedVertexCodeBlocks = [];
        this.prependedFragCodeBlocks = [];
        this.vertexMainFn = '';
        this.fragmentMainFn = '';
    }
    ShaderGenerator.prototype.addVertexUniform = function (type, name) {
        this.vertexUniforms.push({ type: type, name: name });
        return this;
    };
    ShaderGenerator.prototype.addFragmentUniform = function (type, name) {
        this.fragmentUniforms.push({ type: type, name: name });
        return this;
    };
    ShaderGenerator.prototype.addAttribute = function (type, name) {
        this.attributes.push({ type: type, name: name });
        return this;
    };
    ShaderGenerator.prototype.addVarying = function (type, name) {
        this.varyings.push({ type: type, name: name });
        return this;
    };
    ShaderGenerator.prototype.appendVertexCodeBlock = function (code) {
        this.appendedVertexCodeBlocks.push(code);
    };
    ShaderGenerator.prototype.appendFragmentCodeBlock = function (code) {
        this.appendedFragCodeBlocks.push(code);
    };
    ShaderGenerator.prototype.prependVertexCodeBlock = function (code) {
        this.prependedVertexCodeBlocks.push(code);
    };
    ShaderGenerator.prototype.prependFragmentCodeBlock = function (code) {
        this.prependedFragCodeBlocks.push(code);
    };
    ShaderGenerator.prototype.setVertexMainFn = function (fnCode) {
        this.vertexMainFn = fnCode;
        return this;
    };
    ShaderGenerator.prototype.setFragmentMainFn = function (fnCode) {
        this.fragmentMainFn = fnCode;
        return this;
    };
    ShaderGenerator.prototype.getVertexSource = function () {
        return (("\n            " + this.prependedVertexCodeBlocks.map(function (v) { return "" + v; }).join('\n') + "\n            \n            " + this.vertexUniforms.map(function (u) { return "uniform   " + u.type + " " + u.name + ";"; }).join('\n') + "\n            " + this.attributes.map(function (u) { return "attribute " + u.type + " " + u.name + ";"; }).join('\n') + "\n            " + this.varyings.map(function (u) { return "varying   " + u.type + " " + u.name + ";"; }).join('\n') + "\n            " + this.appendedVertexCodeBlocks.map(function (v) { return "" + v; }).join('\n') + "\n           \n            " + this.vertexMainFn + "\n            \n            ").replace(/\t/g, ''));
    };
    ShaderGenerator.prototype.getFragmentSource = function () {
        return (("\n            precision mediump float;\n            \n            " + this.prependedFragCodeBlocks.map(function (v) { return "" + v; }).join('\n') + "\n            \n            " + this.fragmentUniforms.map(function (u) { return "uniform " + u.type + " " + u.name + ";"; }).join('\n') + "\n            " + this.varyings.map(function (u) { return "varying " + u.type + " " + u.name + ";"; }).join('\n') + "\n            " + this.appendedFragCodeBlocks.map(function (v) { return "" + v; }).join('\n') + "\n            \n            " + this.fragmentMainFn + "\n            \n            ").replace(/\t/g, ''));
    };
    ShaderGenerator.prototype.debug = function () {
        console.log(this.getVertexSource());
        console.log(this.getFragmentSource());
    };
    return ShaderGenerator;
}());
exports.ShaderGenerator = ShaderGenerator;


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tween_1 = __webpack_require__(65);
var mat4 = __webpack_require__(17);
var mathEx = __webpack_require__(4);
var rect_1 = __webpack_require__(2);
var point2d_1 = __webpack_require__(3);
var mathEx_1 = __webpack_require__(4);
var CAMERA_MATRIX_MODE;
(function (CAMERA_MATRIX_MODE) {
    CAMERA_MATRIX_MODE[CAMERA_MATRIX_MODE["MODE_TRANSFORM"] = 0] = "MODE_TRANSFORM";
    CAMERA_MATRIX_MODE[CAMERA_MATRIX_MODE["MODE_IDENTITY"] = 1] = "MODE_IDENTITY";
})(CAMERA_MATRIX_MODE = exports.CAMERA_MATRIX_MODE || (exports.CAMERA_MATRIX_MODE = {}));
var Camera = (function () {
    function Camera(game) {
        var _this = this;
        this.objFollowTo = null;
        this.scene = null;
        this.sceneWidth = 0;
        this.sceneHeight = 0;
        this.pos = new point2d_1.Point2d(0, 0);
        this.scale = new point2d_1.Point2d(1, 1);
        this.matrixMode = CAMERA_MATRIX_MODE.MODE_TRANSFORM;
        this._rect = new rect_1.Rect();
        this._rectIdentity = new rect_1.Rect();
        this._rectScaled = new rect_1.Rect();
        this.cameraShakeTween = null;
        this.cameraPosCorrection = {
            current: new point2d_1.Point2d(),
            max: new point2d_1.Point2d()
        };
        this.game = game;
        this._updateRect();
        this.sceneWidth = game.width;
        this.sceneHeight = game.height;
        this.scale.observe(function () {
            _this.revalidate();
        });
    }
    Camera.prototype.revalidate = function () {
        this.scene = this.game.getCurrScene();
        if (!this.scene)
            return;
        if (this.scene.tileMap)
            this.scene.tileMap.revalidate();
        this._rectIdentity.setXYWH(0, 0, this.game.width, this.game.height);
        if (this.scene.tileMap.spriteSheet) {
            this.sceneWidth = this.scene.tileMap.spriteSheet._frameWidth * this.scene.tileMap.width;
            this.sceneHeight = this.scene.tileMap.spriteSheet._frameHeight * this.scene.tileMap.height;
        }
        else {
            this.sceneWidth = this.game.getCurrScene().width || this.game.width;
            this.sceneHeight = this.game.getCurrScene().height || this.game.height;
        }
    };
    Camera.prototype.followTo = function (gameObject) {
        if (gameObject === null)
            return;
        if (true && gameObject === undefined)
            throw "Camera:followTo(gameObject) - gameObject not provided";
        this.objFollowTo = gameObject;
        this.revalidate();
    };
    Camera.prototype.update = function (currTime, delta) {
        this.scene = this.game.getCurrScene();
        if (!this.scene)
            return;
        var tileWidth = this.scene.tileMap.spriteSheet ? this.scene.tileMap.spriteSheet._frameWidth : 0;
        var tileHeight = this.scene.tileMap.spriteSheet ? this.scene.tileMap.spriteSheet._frameHeight : 0;
        var w = this.game.width;
        var h = this.game.height;
        var wDiv2 = w / 2;
        var hDiv2 = h / 2;
        var wScaled = this.getRectScaled().width;
        var gameObject = this.objFollowTo;
        if (gameObject) {
            if (gameObject['_lastDirection'] === 'Right')
                this.cameraPosCorrection.max.x = wScaled / 3;
            if (gameObject['_lastDirection'] === 'Left')
                this.cameraPosCorrection.max.x = -wScaled / 3;
            var currCorrection = this.cameraPosCorrection.max.
                substract(this.cameraPosCorrection.current).
                multiply(0.05);
            this.cameraPosCorrection.current.add(currCorrection);
            var newPos = point2d_1.Point2d.fromPool();
            var pointToFollow = point2d_1.Point2d.fromPool();
            pointToFollow.set(this.objFollowTo.pos);
            pointToFollow.addXY(-wDiv2, -hDiv2);
            newPos.x = this.pos.x + (pointToFollow.x + this.cameraPosCorrection.current.x - this.pos.x) * 0.1;
            newPos.y = this.pos.y + (pointToFollow.y - this.pos.y) * 0.1;
            if (newPos.x < 0)
                newPos.x = 0;
            if (newPos.y < 0)
                newPos.y = 0;
            if (newPos.x > this.sceneWidth - w + tileWidth)
                newPos.x = this.sceneWidth - w + tileWidth;
            if (newPos.y > this.sceneHeight - h + tileHeight)
                newPos.y = this.sceneHeight - h + tileHeight;
            this.pos.setXY(newPos.x, newPos.y);
            if (this.cameraShakeTween)
                this.cameraShakeTween.update(currTime);
        }
        this._updateRect();
        this.render();
    };
    Camera.prototype.shake = function (amplitude, time) {
        var _this = this;
        var tweenTarget = { time: 0, point: new point2d_1.Point2d(0, 0) };
        this.cameraShakeTween = new tween_1.Tween({
            target: tweenTarget,
            time: time,
            to: { time: time },
            progress: function () {
                var r1 = mathEx_1.random(-amplitude / 2, amplitude / 2);
                var r2 = mathEx_1.random(-amplitude / 2, amplitude / 2);
                tweenTarget.point.setXY(r1, r2);
            },
            complete: function () { return _this.cameraShakeTween = null; }
        });
    };
    Camera.prototype._updateRect = function () {
        var point00 = this.screenToWorld(point2d_1.Point2d.fromPool().setXY(0, 0));
        var pointWH = this.screenToWorld(point2d_1.Point2d.fromPool().setXY(this.game.width, this.game.height));
        this._rectScaled.setXYWH(point00.x, point00.y, pointWH.x - point00.x, pointWH.y - point00.y);
    };
    Camera.prototype.render = function () {
        this.game.renderer.translate(this.game.width / 2, this.game.height / 2);
        this.game.renderer.scale(this.scale.x, this.scale.y);
        this.game.renderer.translate(-this.game.width / 2, -this.game.height / 2);
        this.game.renderer.translate(-this.pos.x, -this.pos.y);
        if (this.cameraShakeTween !== null)
            this.game.renderer.translate(this.cameraShakeTween.getTarget().point.x, this.cameraShakeTween.getTarget().point.y);
    };
    Camera.prototype.screenToWorld = function (p) {
        var mScale = mat4.makeScale(this.scale.x, this.scale.y, 1);
        var point2d = mathEx.unProject(p, this.game.width, this.game.height, mScale);
        point2d.add(this.pos);
        return point2d;
    };
    Camera.prototype.getRect = function () {
        if (this.matrixMode === CAMERA_MATRIX_MODE.MODE_IDENTITY)
            return this._rectIdentity;
        else {
            this._rect.setXYWH(this.pos.x, this.pos.y, this.game.width, this.game.height);
            return this._rect;
        }
    };
    Camera.prototype.getRectScaled = function () {
        if (this.matrixMode === CAMERA_MATRIX_MODE.MODE_IDENTITY)
            return this._rectIdentity;
        else
            return this._rectScaled;
    };
    return Camera;
}());
exports.Camera = Camera;


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var color_1 = __webpack_require__(28);
var AbstractLight = (function () {
    function AbstractLight(game) {
        this.color = color_1.Color.WHITE;
        this.intensity = 1.0;
        if (true && !game)
            throw "game instanse is not passed to AbstractLight constructor";
        this.game = game;
    }
    return AbstractLight;
}());
exports.AbstractLight = AbstractLight;


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var Vec2 = (function () {
    function Vec2(x, y) {
        this.x = x;
        this.y = y;
    }
    Vec2.prototype.length = function () {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    };
    Vec2.prototype.add = function (vec) {
        return new Vec2(vec.x + this.x, vec.y + this.y);
    };
    Vec2.prototype.subtract = function (vec) {
        return new Vec2(this.x - vec.x, this.y - vec.y);
    };
    Vec2.prototype.scale = function (n) {
        return new Vec2(this.x * n, this.y * n);
    };
    Vec2.prototype.dot = function (vec) {
        return (this.x * vec.x + this.y * vec.y);
    };
    Vec2.prototype.cross = function (vec) {
        return (this.x * vec.y - this.y * vec.x);
    };
    Vec2.prototype.rotate = function (center, angle) {
        var r = [];
        var x = this.x - center.x;
        var y = this.y - center.y;
        r[0] = x * Math.cos(angle) - y * Math.sin(angle);
        r[1] = x * Math.sin(angle) + y * Math.cos(angle);
        r[0] += center.x;
        r[1] += center.y;
        return new Vec2(r[0], r[1]);
    };
    Vec2.prototype.normalize = function () {
        var len = this.length();
        if (len > 0) {
            len = 1 / len;
        }
        return new Vec2(this.x * len, this.y * len);
    };
    Vec2.prototype.distance = function (vec) {
        var x = this.x - vec.x;
        var y = this.y - vec.y;
        return Math.sqrt(x * x + y * y);
    };
    return Vec2;
}());
exports.Vec2 = Vec2;
var CollisionInfo = (function () {
    function CollisionInfo() {
        this.mDepth = 0;
        this.mNormal = new Vec2(0, 0);
        this.mStart = new Vec2(0, 0);
        this.mEnd = new Vec2(0, 0);
    }
    CollisionInfo.prototype.setDepth = function (s) {
        this.mDepth = s;
    };
    CollisionInfo.prototype.setNormal = function (s) {
        this.mNormal = s;
    };
    CollisionInfo.prototype.getDepth = function () {
        return this.mDepth;
    };
    CollisionInfo.prototype.getNormal = function () {
        return this.mNormal;
    };
    CollisionInfo.prototype.setInfo = function (d, n, s) {
        this.mDepth = d;
        this.mNormal = n;
        this.mStart = s;
        this.mEnd = s.add(n.scale(d));
    };
    CollisionInfo.prototype.changeDir = function () {
        this.mNormal = this.mNormal.scale(-1);
        var n = this.mStart;
        this.mStart = this.mEnd;
        this.mEnd = n;
    };
    return CollisionInfo;
}());
exports.CollisionInfo = CollisionInfo;
var RigidShape = (function () {
    function RigidShape(game, center, mass, friction, restitution) {
        this.fixedAngle = false;
        this.mVelocity = new Vec2(0, 0);
        this.mAngle = 0;
        this.mAngularVelocity = 0;
        this.mAngularAcceleration = 0;
        this.mBoundRadius = 0;
        this.game = game;
        this.mCenter = center;
        this.mInertia = 0;
        this.fixedAngle = false;
        if (mass !== undefined) {
            this.mInvMass = mass;
        }
        else {
            this.mInvMass = 1;
        }
        if (friction !== undefined) {
            this.mFriction = friction;
        }
        else {
            this.mFriction = 0.2;
        }
        if (restitution !== undefined) {
            this.mRestitution = restitution;
        }
        else {
            this.mRestitution = 0.1;
        }
        if (this.mInvMass !== 0) {
            this.mInvMass = 1 / this.mInvMass;
            this.mAcceleration = new Vec2(0, game.gravityConstant);
        }
        else {
            this.mAcceleration = new Vec2(0, 0);
        }
    }
    RigidShape.prototype.updateMass = function (delta) {
        var mass;
        if (this.mInvMass !== 0) {
            mass = 1 / this.mInvMass;
        }
        else {
            mass = 0;
        }
        mass += delta;
        if (mass <= 0) {
            this.mInvMass = 0;
            this.mVelocity = new Vec2(0, 0);
            this.mAcceleration = new Vec2(0, 0);
            this.mAngularVelocity = 0;
            this.mAngularAcceleration = 0;
        }
        else {
            this.mInvMass = 1 / mass;
            this.mAcceleration = new Vec2(0, this.game.gravityConstant);
        }
        this.updateInertia();
    };
    RigidShape.prototype.update = function (time, _dt) {
        var dt = _dt / 1000;
        this.mVelocity = this.mVelocity.add(this.mAcceleration.scale(dt));
        this.move(this.mVelocity.scale(dt));
        this.mAngularVelocity += this.mAngularAcceleration * dt;
        this.rotate(this.mAngularVelocity * dt);
    };
    RigidShape.prototype.boundTest = function (otherShape) {
        var vFrom1to2 = otherShape.mCenter.subtract(this.mCenter);
        var rSum = this.mBoundRadius + otherShape.mBoundRadius;
        var dist = vFrom1to2.length();
        return (dist <= rSum);
    };
    return RigidShape;
}());
exports.RigidShape = RigidShape;
var RigidCircle = (function (_super) {
    tslib_1.__extends(RigidCircle, _super);
    function RigidCircle(game, center, radius, mass, friction, restitution) {
        var _this = _super.call(this, game, center, mass, friction, restitution) || this;
        _this.mType = "Circle";
        _this.mRadius = radius;
        _this.mBoundRadius = radius;
        _this.mStartpoint = new Vec2(center.x, center.y - radius);
        _this.updateInertia();
        return _this;
    }
    RigidCircle.prototype.move = function (s) {
        this.mStartpoint = this.mStartpoint.add(s);
        this.mCenter = this.mCenter.add(s);
        return this;
    };
    RigidCircle.prototype.rotate = function (angle) {
        this.mAngle += angle;
        this.mStartpoint = this.mStartpoint.rotate(this.mCenter, angle);
        return this;
    };
    RigidCircle.prototype.updateInertia = function () {
        if (this.mInvMass === 0) {
            this.mInertia = 0;
        }
        else {
            this.mInertia = (1 / this.mInvMass) * (this.mRadius * this.mRadius) / 12;
        }
    };
    RigidCircle.prototype.collisionTest = function (otherShape, collisionInfo) {
        if (RigidCircle.isInstanceOf(otherShape)) {
            return this.collidedCircCirc(this, otherShape, collisionInfo);
        }
        else if (RigidRectangle.isInstanceOf(otherShape)) {
            return otherShape.collidedRectCirc(this, collisionInfo);
        }
        else {
            if (true) {
                console.error(this, otherShape);
                throw "collision test error";
            }
        }
    };
    RigidCircle.prototype.collidedCircCirc = function (c1, c2, collisionInfo) {
        var vFrom1to2 = c2.mCenter.subtract(c1.mCenter);
        var rSum = c1.mRadius + c2.mRadius;
        var dist = vFrom1to2.length();
        if (dist > Math.sqrt(rSum * rSum)) {
            return false;
        }
        if (dist !== 0) {
            var normalFrom2to1 = vFrom1to2.scale(-1).normalize();
            var radiusC2 = normalFrom2to1.scale(c2.mRadius);
            collisionInfo.setInfo(rSum - dist, vFrom1to2.normalize(), c2.mCenter.add(radiusC2));
        }
        else {
            if (c1.mRadius > c2.mRadius) {
                collisionInfo.setInfo(rSum, new Vec2(0, -1), c1.mCenter.add(new Vec2(0, c1.mRadius)));
            }
            else {
                collisionInfo.setInfo(rSum, new Vec2(0, -1), c2.mCenter.add(new Vec2(0, c2.mRadius)));
            }
        }
        return true;
    };
    RigidCircle.isInstanceOf = function (shape) {
        return shape.mType === 'Circle';
    };
    return RigidCircle;
}(RigidShape));
exports.RigidCircle = RigidCircle;
var SupportStruct = (function () {
    function SupportStruct() {
        this.mSupportPointDist = 0;
    }
    return SupportStruct;
}());
var tmpSupport = new SupportStruct();
var collisionInfoR1 = new CollisionInfo();
var collisionInfoR2 = new CollisionInfo();
var RigidRectangle = (function (_super) {
    tslib_1.__extends(RigidRectangle, _super);
    function RigidRectangle(game, center, width, height, mass, friction, restitution) {
        var _this = _super.call(this, game, center, mass, friction, restitution) || this;
        _this.mType = "Rectangle";
        _this.mVertex = [];
        _this.mFaceNormal = [];
        _this.mWidth = width;
        _this.mHeight = height;
        _this.mBoundRadius = Math.sqrt(width * width + height * height) / 2;
        _this.mVertex[0] = new Vec2(center.x - width / 2, center.y - height / 2);
        _this.mVertex[1] = new Vec2(center.x + width / 2, center.y - height / 2);
        _this.mVertex[2] = new Vec2(center.x + width / 2, center.y + height / 2);
        _this.mVertex[3] = new Vec2(center.x - width / 2, center.y + height / 2);
        _this.mFaceNormal[0] = _this.mVertex[1].subtract(_this.mVertex[2]);
        _this.mFaceNormal[0] = _this.mFaceNormal[0].normalize();
        _this.mFaceNormal[1] = _this.mVertex[2].subtract(_this.mVertex[3]);
        _this.mFaceNormal[1] = _this.mFaceNormal[1].normalize();
        _this.mFaceNormal[2] = _this.mVertex[3].subtract(_this.mVertex[0]);
        _this.mFaceNormal[2] = _this.mFaceNormal[2].normalize();
        _this.mFaceNormal[3] = _this.mVertex[0].subtract(_this.mVertex[1]);
        _this.mFaceNormal[3] = _this.mFaceNormal[3].normalize();
        _this.updateInertia();
        return _this;
    }
    RigidRectangle.prototype.rotate = function (angle) {
        this.mAngle += angle;
        for (var i = 0; i < this.mVertex.length; i++) {
            this.mVertex[i] = this.mVertex[i].rotate(this.mCenter, angle);
        }
        this.mFaceNormal[0] = this.mVertex[1].subtract(this.mVertex[2]);
        this.mFaceNormal[0] = this.mFaceNormal[0].normalize();
        this.mFaceNormal[1] = this.mVertex[2].subtract(this.mVertex[3]);
        this.mFaceNormal[1] = this.mFaceNormal[1].normalize();
        this.mFaceNormal[2] = this.mVertex[3].subtract(this.mVertex[0]);
        this.mFaceNormal[2] = this.mFaceNormal[2].normalize();
        this.mFaceNormal[3] = this.mVertex[0].subtract(this.mVertex[1]);
        this.mFaceNormal[3] = this.mFaceNormal[3].normalize();
        return this;
    };
    RigidRectangle.prototype.move = function (v) {
        for (var i = 0; i < this.mVertex.length; i++) {
            this.mVertex[i] = this.mVertex[i].add(v);
        }
        this.mCenter = this.mCenter.add(v);
        return this;
    };
    RigidRectangle.prototype.updateInertia = function () {
        if (this.mInvMass === 0) {
            this.mInertia = 0;
        }
        else {
            this.mInertia = (1 / this.mInvMass) * (this.mWidth * this.mWidth + this.mHeight * this.mHeight) / 12;
            this.mInertia = 1 / this.mInertia;
        }
    };
    RigidRectangle.prototype.collisionTest = function (otherShape, collisionInfo) {
        if (RigidCircle.isInstanceOf(otherShape)) {
            return this.collidedRectCirc(otherShape, collisionInfo);
        }
        else if (RigidRectangle.isInstanceOf(otherShape)) {
            return this.collidedRectRect(this, otherShape, collisionInfo);
        }
        else {
            if (true) {
                console.error(this, otherShape);
                throw "collision test error";
            }
        }
    };
    RigidRectangle.prototype.boundTest = function (otherShape) {
        var vFrom1to2 = otherShape.mCenter.subtract(this.mCenter);
        var rSum = this.mBoundRadius + otherShape.mBoundRadius;
        var dist = vFrom1to2.length();
        return dist <= rSum;
    };
    RigidRectangle.prototype.findSupportPoint = function (dir, ptOnEdge) {
        var vToEdge;
        var projection;
        tmpSupport.mSupportPointDist = -9999999;
        tmpSupport.mSupportPoint = null;
        for (var i = 0; i < this.mVertex.length; i++) {
            vToEdge = this.mVertex[i].subtract(ptOnEdge);
            projection = vToEdge.dot(dir);
            if ((projection > 0) && (projection > tmpSupport.mSupportPointDist)) {
                tmpSupport.mSupportPoint = this.mVertex[i];
                tmpSupport.mSupportPointDist = projection;
            }
        }
    };
    RigidRectangle.prototype.findAxisLeastPenetration = function (otherRect, collisionInfo) {
        var n;
        var supportPoint;
        var bestDistance = 999999;
        var bestIndex = null;
        var hasSupport = true;
        var i = 0;
        while ((hasSupport) && (i < this.mFaceNormal.length)) {
            n = this.mFaceNormal[i];
            var dir = n.scale(-1);
            var ptOnEdge = this.mVertex[i];
            otherRect.findSupportPoint(dir, ptOnEdge);
            hasSupport = (tmpSupport.mSupportPoint !== null);
            if ((hasSupport) && (tmpSupport.mSupportPointDist < bestDistance)) {
                bestDistance = tmpSupport.mSupportPointDist;
                bestIndex = i;
                supportPoint = tmpSupport.mSupportPoint;
            }
            i = i + 1;
        }
        if (hasSupport) {
            var bestVec = this.mFaceNormal[bestIndex].scale(bestDistance);
            collisionInfo.setInfo(bestDistance, this.mFaceNormal[bestIndex], supportPoint.add(bestVec));
        }
        return hasSupport;
    };
    RigidRectangle.prototype.collidedRectRect = function (r1, r2, collisionInfo) {
        var status1;
        var status2;
        status1 = r1.findAxisLeastPenetration(r2, collisionInfoR1);
        if (status1) {
            status2 = r2.findAxisLeastPenetration(r1, collisionInfoR2);
            if (status2) {
                if (collisionInfoR1.getDepth() < collisionInfoR2.getDepth()) {
                    var depthVec = collisionInfoR1.getNormal().scale(collisionInfoR1.getDepth());
                    collisionInfo.setInfo(collisionInfoR1.getDepth(), collisionInfoR1.getNormal(), collisionInfoR1.mStart.subtract(depthVec));
                }
                else {
                    collisionInfo.setInfo(collisionInfoR2.getDepth(), collisionInfoR2.getNormal().scale(-1), collisionInfoR2.mStart);
                }
            }
        }
        return status1 && status2;
    };
    RigidRectangle.prototype.collidedRectCirc = function (otherCir, collisionInfo) {
        var inside = true;
        var bestDistance = -99999;
        var nearestEdge = 0;
        var i, v;
        var circ2Pos, projection;
        for (i = 0; i < 4; i++) {
            circ2Pos = otherCir.mCenter;
            v = circ2Pos.subtract(this.mVertex[i]);
            projection = v.dot(this.mFaceNormal[i]);
            if (projection > 0) {
                bestDistance = projection;
                nearestEdge = i;
                inside = false;
                break;
            }
            if (projection > bestDistance) {
                bestDistance = projection;
                nearestEdge = i;
            }
        }
        var dis, normal, radiusVec;
        if (!inside) {
            var v1 = circ2Pos.subtract(this.mVertex[nearestEdge]);
            var v2 = this.mVertex[(nearestEdge + 1) % 4].subtract(this.mVertex[nearestEdge]);
            var dot = v1.dot(v2);
            if (dot < 0) {
                dis = v1.length();
                if (dis > otherCir.mRadius) {
                    return false;
                }
                normal = v1.normalize();
                radiusVec = normal.scale(-otherCir.mRadius);
                collisionInfo.setInfo(otherCir.mRadius - dis, normal, circ2Pos.add(radiusVec));
            }
            else {
                v1 = circ2Pos.subtract(this.mVertex[(nearestEdge + 1) % 4]);
                v2 = v2.scale(-1);
                dot = v1.dot(v2);
                if (dot < 0) {
                    dis = v1.length();
                    if (dis > otherCir.mRadius) {
                        return false;
                    }
                    normal = v1.normalize();
                    radiusVec = normal.scale(-otherCir.mRadius);
                    collisionInfo.setInfo(otherCir.mRadius - dis, normal, circ2Pos.add(radiusVec));
                }
                else {
                    if (bestDistance < otherCir.mRadius) {
                        radiusVec = this.mFaceNormal[nearestEdge].scale(otherCir.mRadius);
                        collisionInfo.setInfo(otherCir.mRadius - bestDistance, this.mFaceNormal[nearestEdge], circ2Pos.subtract(radiusVec));
                    }
                    else {
                        return false;
                    }
                }
            }
        }
        else {
            radiusVec = this.mFaceNormal[nearestEdge].scale(otherCir.mRadius);
            collisionInfo.setInfo(otherCir.mRadius - bestDistance, this.mFaceNormal[nearestEdge], circ2Pos.subtract(radiusVec));
        }
        return true;
    };
    RigidRectangle.isInstanceOf = function (shape) {
        return shape.mType === 'Rectangle';
    };
    return RigidRectangle;
}(RigidShape));
exports.RigidRectangle = RigidRectangle;


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.noop = function () { };


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var EventEmitter = (function () {
    function EventEmitter() {
        this.events = {};
    }
    EventEmitter.prototype._on = function (name, callBack) {
        this.events[name] = this.events[name] || [];
        this.events[name].push(callBack);
    };
    EventEmitter.prototype.on = function (eventNameOrList, callBack) {
        var _this = this;
        if (typeof eventNameOrList === 'string') {
            this._on(eventNameOrList, callBack);
        }
        else if (eventNameOrList.splice) {
            eventNameOrList.forEach(function (eventName) {
                _this._on(eventName, callBack);
            });
        }
    };
    ;
    EventEmitter.prototype.off = function (eventName, callback) {
        var es = this.events[eventName];
        if (!es)
            return;
        var index = es.indexOf(callback);
        if (true && index == -1) {
            console.error(callback);
            throw "can not remove event listener " + eventName;
        }
        es.splice(index, 1);
    };
    ;
    EventEmitter.prototype.trigger = function (eventName, data) {
        var es = this.events[eventName];
        if (!es)
            return;
        var l = es.length;
        while (l--) {
            es[l](data);
        }
    };
    ;
    return EventEmitter;
}());
exports.EventEmitter = EventEmitter;


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var mathEx = __webpack_require__(4);
var global_1 = __webpack_require__(7);
var accessByPath = function (obj, path) {
    var pathArr = path.split('.');
    if (pathArr.length === 1)
        return { targetObj: obj, targetKey: path };
    var lastPath = pathArr.pop();
    pathArr.forEach(function (p) {
        obj = obj[p];
    });
    return { targetObj: obj, targetKey: lastPath };
};
var setValByPath = function (obj, path, val) {
    var _a = accessByPath(obj, path), targetObj = _a.targetObj, targetKey = _a.targetKey;
    targetObj[targetKey] = val;
};
var getValByPath = function (obj, path) {
    var _a = accessByPath(obj, path), targetObj = _a.targetObj, targetKey = _a.targetKey;
    return targetObj[targetKey];
};
var Tween = (function () {
    function Tween(tweenDesc) {
        this.propsToChange = [];
        this.startedTime = 0;
        this.currTime = 0;
        this.completed = false;
        this.target = tweenDesc.target;
        this.progressFn = tweenDesc.progress;
        this.completeFn = tweenDesc.complete;
        this.easeFnName = tweenDesc.ease || 'linear';
        this.tweenTime = tweenDesc.time || 1000;
        this.desc = this.normalizeDesc(tweenDesc);
    }
    Tween.prototype.reuse = function (newTweenDesc) {
        var _this = this;
        this.startedTime = this.currTime;
        this.completed = false;
        Object.keys(newTweenDesc).forEach(function (key) {
            _this.desc[key] = newTweenDesc[key];
        });
        this.desc = this.normalizeDesc(newTweenDesc);
    };
    Tween.prototype.normalizeDesc = function (tweenDesc) {
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
            if (tweenDesc.from[prp] === undefined)
                tweenDesc.from[prp] = getValByPath(_this.target, prp);
            if (tweenDesc.to[prp] === undefined)
                tweenDesc.to[prp] = getValByPath(_this.target, prp);
        });
        return tweenDesc;
    };
    ;
    Tween.prototype.update = function (time) {
        if (this.completed)
            return;
        this.currTime = time;
        if (!this.startedTime)
            this.startedTime = time;
        var curTweenTime = time - this.startedTime;
        if (curTweenTime > this.tweenTime) {
            this._complete();
            return;
        }
        var l = this.propsToChange.length;
        while (l--) {
            var prp = this.propsToChange[l];
            var valFrom = this.desc.from[prp];
            var valTo = this.desc.to[prp];
            var valCurr = mathEx[this.easeFnName](curTweenTime, valFrom, valTo - valFrom, this.tweenTime);
            setValByPath(this.target, prp, valCurr);
        }
        this.progressFn && this.progressFn(this.target);
    };
    ;
    Tween.prototype.progress = function (_progressFn) {
        this.progressFn = _progressFn;
    };
    ;
    Tween.prototype.reset = function () {
        this.startedTime = null;
        this.completed = false;
    };
    ;
    Tween.prototype._complete = function () {
        if (this.completed)
            return;
        var l = this.propsToChange.length;
        while (l--) {
            var prp = this.propsToChange[l];
            var valCurr = this.desc.to[prp];
            setValByPath(this.target, prp, valCurr);
        }
        this.progressFn && this.progressFn(this.target);
        this.completeFn && this.completeFn(this.target);
        this.completed = true;
    };
    ;
    Tween.prototype.isCompleted = function () {
        return this.completed;
    };
    Tween.prototype.getTarget = function () {
        return this.target;
    };
    return Tween;
}());
exports.Tween = Tween;
global_1._global['Tween'] = Tween;


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var color_1 = __webpack_require__(28);
var ShaderMaterial = (function () {
    function ShaderMaterial() {
        this.ambient = color_1.Color.BLACK.clone();
        this.specular = color_1.Color.GREY.clone();
        this.diffuse = color_1.Color.WHITE.clone();
        this.shininess = 10;
    }
    ShaderMaterial.prototype.setUniforms = function (uniforms) {
        uniforms['u_material.ambient'] = this.ambient.asGL();
        uniforms['u_material.specular'] = this.specular.asGL();
        uniforms['u_material.diffuse'] = this.diffuse.asGL();
        uniforms['u_material.shininess'] = this.shininess;
    };
    ShaderMaterial.DEFAULT = new ShaderMaterial();
    return ShaderMaterial;
}());
exports.ShaderMaterial = ShaderMaterial;


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var State = (function () {
    function State() {
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            values[_i] = arguments[_i];
        }
        this.currState = [];
        this.setState.apply(this, values);
    }
    State.prototype.setState = function () {
        var _this = this;
        var newState = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            newState[_i] = arguments[_i];
        }
        var changed = false;
        newState.forEach(function (val, i) {
            if (_this.currState[i] !== val)
                changed = true;
            _this.currState[i] = val;
        });
        return changed;
    };
    return State;
}());
var ObservableEntity = (function () {
    function ObservableEntity() {
        this._state = new State();
        this._onChanged = [];
    }
    ObservableEntity.prototype.triggerObservable = function () {
        var changed = this.checkObservableChanged();
        if (!changed)
            return;
        for (var _i = 0, _a = this._onChanged; _i < _a.length; _i++) {
            var fn = _a[_i];
            fn();
        }
    };
    ObservableEntity.prototype.addListener = function (f) {
        this._onChanged.push(f);
    };
    ObservableEntity.prototype.removeListener = function (f) {
        this._onChanged.remove(f);
    };
    return ObservableEntity;
}());
exports.ObservableEntity = ObservableEntity;


/***/ }),
/* 68 */
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
(function() {

// Save the global `this` for use later. In this case, since the library only
// runs in the browser, it will refer to `window`. Also, figure out if we're in IE8
// or not. IE8 will still render correctly, but will be static instead of draggable.
//
// Save a couple long function names that are used frequently.
// This optimization saves around 400 bytes.
    var global = this
        , document = global.document
        , addEventListener = 'addEventListener'
        , isIE8 = global.attachEvent && !global[addEventListener]
        , removeEventListener = 'removeEventListener'
        , getBoundingClientRect = 'getBoundingClientRect'

    // This library only needs two helper functions:
    //
    // The first determines which prefixes of CSS calc we need.
    // We only need to do this once on startup, when this anonymous function is called.
    //
    // Tests -webkit, -moz and -o prefixes. Modified from StackOverflow:
    // http://stackoverflow.com/questions/16625140/js-feature-detection-to-detect-the-usage-of-webkit-calc-over-calc/16625167#16625167
        , calc = (function () {
            var el
                , prefixes = ["", "-webkit-", "-moz-", "-o-"]

            for (var i = 0; i < prefixes.length; i++) {
                el = document.createElement('div')
                el.style.cssText = "width:" + prefixes[i] + "calc(9px)"

                if (el.style.length) {
                    return prefixes[i] + "calc"
                }
            }
        })()

    // The second helper function allows elements and string selectors to be used
    // interchangeably. In either case an element is returned. This allows us to
    // do `Split(elem1, elem2)` as well as `Split('#id1', '#id2')`.
        , elementOrSelector = function (el) {
            if (typeof el === 'string' || el instanceof String) {
                return document.querySelector(el)
            } else {
                return el
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
        , Split = function (ids, options) {
            var dimension
                , i
                , clientDimension
                , clientAxis
                , position
                , gutterClass
                , paddingA
                , paddingB
                , pairs = []

            // 1. Set defaults to something sane. `options` doesn't have to be passed at all,
            // so create an options object if none exists. Pixel values 10, 100 and 30 are
            // arbitrary but feel natural.
            options = typeof options !== 'undefined' ?  options : {}

            if (typeof options.gutterSize === 'undefined') options.gutterSize = 10
            if (typeof options.minSize === 'undefined') options.minSize = 100
            if (typeof options.snapOffset === 'undefined') options.snapOffset = 30
            if (typeof options.direction === 'undefined') options.direction = 'horizontal'

            // 2. Initialize a bunch of strings based on the direction we're splitting.
            // A lot of the behavior in the rest of the library is paramatized down to
            // rely on CSS strings and classes.
            if (options.direction == 'horizontal') {
                dimension = 'width'
                clientDimension = 'clientWidth'
                clientAxis = 'clientX'
                position = 'left'
                gutterClass = 'gutter gutter-horizontal'
                paddingA = 'paddingLeft'
                paddingB = 'paddingRight'
                if (!options.cursor) options.cursor = 'ew-resize'
            } else if (options.direction == 'vertical') {
                dimension = 'height'
                clientDimension = 'clientHeight'
                clientAxis = 'clientY'
                position = 'top'
                gutterClass = 'gutter gutter-vertical'
                paddingA = 'paddingTop'
                paddingB = 'paddingBottom'
                if (!options.cursor) options.cursor = 'ns-resize'
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
            var startDragging = function (e) {
                    // Alias frequently used variables to save space. 200 bytes.
                    var self = this
                        , a = self.a
                        , b = self.b

                    // Call the onDragStart callback.
                    if (!self.dragging && options.onDragStart) {
                        options.onDragStart()
                    }

                    // Don't actually drag the element. We emulate that in the drag function.
                    e.preventDefault()

                    // Set the dragging property of the pair object.
                    self.dragging = true

                    // Create two event listeners bound to the same pair object and store
                    // them in the pair object.
                    self.move = drag.bind(self)
                    self.stop = stopDragging.bind(self)

                    // All the binding. `window` gets the stop events in case we drag out of the elements.
                    global[addEventListener]('mouseup', self.stop)
                    global[addEventListener]('touchend', self.stop)
                    global[addEventListener]('touchcancel', self.stop)

                    self.parent[addEventListener]('mousemove', self.move)
                    self.parent[addEventListener]('touchmove', self.move)

                    // Disable selection. Disable!
                    a[addEventListener]('selectstart', noop)
                    a[addEventListener]('dragstart', noop)
                    b[addEventListener]('selectstart', noop)
                    b[addEventListener]('dragstart', noop)

                    a.style.userSelect = 'none'
                    a.style.webkitUserSelect = 'none'
                    a.style.MozUserSelect = 'none'
                    a.style.pointerEvents = 'none'

                    b.style.userSelect = 'none'
                    b.style.webkitUserSelect = 'none'
                    b.style.MozUserSelect = 'none'
                    b.style.pointerEvents = 'none'

                    // Set the cursor, both on the gutter and the parent element.
                    // Doing only a, b and gutter causes flickering.
                    //self.gutter.style.cursor = options.cursor
                    //self.parent.style.cursor = options.cursor

                    // Cache the initial sizes of the pair.
                    calculateSizes.call(self)
                }

            // stopDragging is very similar to startDragging in reverse.
                , stopDragging = function () {
                    var self = this
                        , a = self.a
                        , b = self.b

                    if (self.dragging && options.onDragEnd) {
                        options.onDragEnd()
                    }

                    self.dragging = false

                    // Remove the stored event listeners. This is why we store them.
                    global[removeEventListener]('mouseup', self.stop)
                    global[removeEventListener]('touchend', self.stop)
                    global[removeEventListener]('touchcancel', self.stop)

                    self.parent[removeEventListener]('mousemove', self.move)
                    self.parent[removeEventListener]('touchmove', self.move)

                    // Delete them once they are removed. I think this makes a difference
                    // in memory usage with a lot of splits on one page. But I don't know for sure.
                    delete self.stop
                    delete self.move

                    a[removeEventListener]('selectstart', noop)
                    a[removeEventListener]('dragstart', noop)
                    b[removeEventListener]('selectstart', noop)
                    b[removeEventListener]('dragstart', noop)

                    a.style.userSelect = ''
                    a.style.webkitUserSelect = ''
                    a.style.MozUserSelect = ''
                    a.style.pointerEvents = ''

                    b.style.userSelect = ''
                    b.style.webkitUserSelect = ''
                    b.style.MozUserSelect = ''
                    b.style.pointerEvents = ''

                    self.gutter.style.cursor = ''
                    self.parent.style.cursor = ''
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
                , drag = function (e) {
                    var offset

                    if (!this.dragging) return

                    // Get the offset of the event from the first side of the
                    // pair `this.start`. Supports touch events, but not multitouch, so only the first
                    // finger `touches[0]` is counted.
                    if ('touches' in e) {
                        offset = e.touches[0][clientAxis] - this.start
                    } else {
                        offset = e[clientAxis] - this.start
                    }

                    // If within snapOffset of min or max, set offset to min or max.
                    // snapOffset buffers aMin and bMin, so logic is opposite for both.
                    // Include the appropriate gutter sizes to prevent overflows.
                    if (offset <= this.aMin + options.snapOffset + this.aGutterSize) {
                        offset = this.aMin + this.aGutterSize
                    } else if (offset >= this.size - (this.bMin + options.snapOffset + this.bGutterSize)) {
                        offset = this.size - (this.bMin + this.bGutterSize)
                    }

                    // Actually adjust the size.
                    adjust.call(this, offset)

                    // Call the drag callback continously. Don't do anything too intensive
                    // in this callback.
                    if (options.onDrag) {
                        options.onDrag()
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
                , calculateSizes = function () {
                    // Figure out the parent size minus padding.
                    var computedStyle = global.getComputedStyle(this.parent)
                        , parentSize = this.parent[clientDimension] - parseFloat(computedStyle[paddingA]) - parseFloat(computedStyle[paddingB])

                    this.size = this.a[getBoundingClientRect]()[dimension] + this.b[getBoundingClientRect]()[dimension] + this.aGutterSize + this.bGutterSize
                    this.percentage = Math.min(this.size / parentSize * 100, 100)
                    this.start = this.a[getBoundingClientRect]()[position]
                }

            // Actually adjust the size of elements `a` and `b` to `offset` while dragging.
            // calc is used to allow calc(percentage + gutterpx) on the whole split instance,
            // which allows the viewport to be resized without additional logic.
            // Element a's size is the same as offset. b's size is total size - a size.
            // Both sizes are calculated from the initial parent percentage, then the gutter size is subtracted.
                , adjust = function (offset) {
                    var aSize = offset / this.size * this.percentage;
                    var bSize = this.percentage - (offset / this.size * this.percentage);
                    //var aId = this.a.getAttribute('id');
                    //var bId = this.b.getAttribute('id');
                    //var toSave = {};
                    //toSave[aId] = aSize.toFixed(1);
                    //toSave[bId] = bSize.toFixed(1);
                    //localStorage.layout = JSON.stringify(toSave);
                    this.a.style[dimension] = calc + '(' + (aSize) + '% - ' + this.aGutterSize + 'px)'
                    this.b.style[dimension] = calc + '(' + (bSize) + '% - ' + this.bGutterSize + 'px)'
                }

            // 4. Define a few more functions that "balance" the entire split instance.
            // Split.js tries it's best to cope with min sizes that don't add up.
            // At some point this should go away since it breaks out of the calc(% - px) model.
            // Maybe it's a user error if you pass uncomputable minSizes.
                , fitMin = function () {
                    var self = this
                        , a = self.a
                        , b = self.b

                    if (a[getBoundingClientRect]()[dimension] < self.aMin) {
                        a.style[dimension] = (self.aMin - self.aGutterSize) + 'px'
                        b.style[dimension] = (self.size - self.aMin - self.aGutterSize) + 'px'
                    } else if (b[getBoundingClientRect]()[dimension] < self.bMin) {
                        a.style[dimension] = (self.size - self.bMin - self.bGutterSize) + 'px'
                        b.style[dimension] = (self.bMin - self.bGutterSize) + 'px'
                    }
                }
                , fitMinReverse = function () {
                    var self = this
                        , a = self.a
                        , b = self.b

                    if (b[getBoundingClientRect]()[dimension] < self.bMin) {
                        a.style[dimension] = (self.size - self.bMin - self.bGutterSize) + 'px'
                        b.style[dimension] = (self.bMin - self.bGutterSize) + 'px'
                    } else if (a[getBoundingClientRect]()[dimension] < self.aMin) {
                        a.style[dimension] = (self.aMin - self.aGutterSize) + 'px'
                        b.style[dimension] = (self.size - self.aMin - self.aGutterSize) + 'px'
                    }
                }
                , balancePairs = function (pairs) {
                    for (var i = 0; i < pairs.length; i++) {
                        calculateSizes.call(pairs[i])
                        fitMin.call(pairs[i])
                    }

                    for (i = pairs.length - 1; i >= 0; i--) {
                        calculateSizes.call(pairs[i])
                        fitMinReverse.call(pairs[i])
                    }
                }
                , setElementSize = function (el, size, gutterSize) {
                    // Split.js allows setting sizes via numbers (ideally), or if you must,
                    // by string, like '300px'. This is less than ideal, because it breaks
                    // the fluid layout that `calc(% - px)` provides. You're on your own if you do that,
                    // make sure you calculate the gutter size by hand.
                    if (typeof size !== 'string' && !(size instanceof String)) {
                        if (!isIE8) {
                            size = calc + '(' + size + '% - ' + gutterSize + 'px)'
                        } else {
                            size = options.sizes[i] + '%'
                        }
                    }

                    el.style[dimension] = size
                }

            // No-op function to prevent default. Used to prevent selection.
                , noop = function () { return false }

            // All DOM elements in the split should have a common parent. We can grab
            // the first elements parent and hope users read the docs because the
            // behavior will be whacky otherwise.
                , parent = elementOrSelector(ids[0]).parentNode

            // Set default options.sizes to equal percentages of the parent element.
            if (!options.sizes) {
                var percent = 100 / ids.length

                options.sizes = []

                for (i = 0; i < ids.length; i++) {
                    options.sizes.push(percent)
                }
            }

            // Standardize minSize to an array if it isn't already. This allows minSize
            // to be passed as a number.
            if (!Array.isArray(options.minSize)) {
                var minSizes = []

                for (i = 0; i < ids.length; i++) {
                    minSizes.push(options.minSize)
                }

                options.minSize = minSizes
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
                var el = elementOrSelector(ids[i])
                    , isFirstPair = (i == 1)
                    , isLastPair = (i == ids.length - 1)
                    , size = options.sizes[i]
                    , gutterSize = options.gutterSize
                    , pair

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
                    }

                    // For first and last pairs, first and last gutter width is half.
                    pair.aGutterSize = options.gutterSize
                    pair.bGutterSize = options.gutterSize

                    if (isFirstPair) {
                        pair.aGutterSize = options.gutterSize / 2 - 1
                    }

                    if (isLastPair) {
                        pair.bGutterSize = options.gutterSize / 2 - 1
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
                        var gutter = document.createElement('div')

                        gutter.className = gutterClass
                        gutter.style[dimension] = options.gutterSize + 'px'

                        gutter[addEventListener]('mousedown', startDragging.bind(pair))
                        gutter[addEventListener]('touchstart', startDragging.bind(pair))

                        parent.insertBefore(gutter, el)

                        pair.gutter = gutter
                    }

                    // Half-size gutters for first and last elements.
                    if (i === 0 || i == ids.length - 1) {
                        gutterSize = options.gutterSize / 2  + 1
                    }
                }

                // Set the element size to our determined size.
                setElementSize(el, size, gutterSize)

                // After the first iteration, and we have a pair object, append it to the
                // list of pairs.
                if (i > 0) {
                    pairs.push(pair)
                }
            }

            // Balance the pairs to try to accomodate min sizes.
            balancePairs(pairs)

            return {
                setSizes: function (sizes) {
                    for (var i = 0; i < sizes.length; i++) {
                        if (i > 0) {
                            var pair = pairs[i - 1]

                            setElementSize(pair.a, sizes[i - 1], pair.aGutterSize)
                            setElementSize(pair.b, sizes[i], pair.bGutterSize)
                        }
                    }
                },
                collapse: function (i) {
                    var pair

                    if (i === pairs.length) {
                        pair = pairs[i - 1]

                        calculateSizes.call(pair)
                        adjust.call(pair, pair.size - pair.bGutterSize)
                    } else {
                        pair = pairs[i]

                        calculateSizes.call(pair)
                        adjust.call(pair, pair.aGutterSize)
                    }
                },
                destroy: function () {
                    for (var i = 0; i < pairs.length; i++) {
                        pairs[i].parent.removeChild(pairs[i].gutter)
                        pairs[i].a.style[dimension] = ''
                        pairs[i].b.style[dimension] = ''
                    }
                }
            }
        }

// Play nicely with module systems, and the browser too if you include it raw.
    if (true) {
        if (typeof module !== 'undefined' && module.exports) {
            exports = module.exports = Split
        }
        exports.Split = Split
    } else {}

// Call our wrapper function with the current global. In this case, `window`.
}).call(window);

/***/ }),
/* 69 */
/***/ (function(module, exports) {

Array.prototype['remove'] = function (callback) {
    var i = this.length;
    var cnt = 0;
    while (i--) {
        if (callback(this[i], i)) {
            this.splice(i, 1);
            cnt++;
        }
    }
    return cnt;
};
window.requestAnimationFrame =
    window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        function (f) { setTimeout(f, 17); };
if (!window.cancelAnimationFrame) {
    window.cancelAnimationFrame = function (id) { return clearTimeout(id); };
}
if (!Array.prototype['find']) {
    Array.prototype['find'] = function (predicate) {
        if (this == null) {
            throw new TypeError('Array.prototype.find called on null or undefined');
        }
        if (typeof predicate !== 'function') {
            throw new TypeError('predicate must be a function');
        }
        var list = Object(this);
        var length = list['length'] >>> 0;
        var thisArg = arguments[1];
        var value;
        for (var i = 0; i < length; i++) {
            value = list[i];
            if (predicate.call(thisArg, value, i, list)) {
                return value;
            }
        }
        return undefined;
    };
}


/***/ }),
/* 70 */,
/* 71 */
/***/ (function(module, exports) {

module.exports = "<div><span data-for=\"name,index of array\"><span data-if=\"!editableMap[index]\" class=\"groupName\"><span>{{array[index]}}</span><span data-click=\"setItemEditable(index)\" class=\"edit\"></span><span data-click=\"removeItem(index)\" class=\"delete\"></span></span><form data-if=\"editableMap[index]\" class=\"groupName\" data-submit=\"updateItem(array[index],index)\"><input data-model=\"array[index]\"></form></span><form><input data-click=\"setItemEditable(index)\" class=\"itemInput\" data-model=\"newItemName\"><button data-click=\"addNewItem()\">+</button></form></div>";

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
__webpack_require__(198);
var EditableArray = (function () {
    function EditableArray() {
        this.array = [];
        this.newItemName = '';
        this.editableMap = {};
    }
    EditableArray.prototype.addNewItem = function () {
        if (!this.newItemName)
            return;
        if (this.array.indexOf(this.newItemName) == -1)
            this.array.push(this.newItemName);
        this.newItemName = '';
    };
    EditableArray.prototype.setItemEditable = function (index) {
        this.editableMap[index] = true;
    };
    EditableArray.prototype.removeItem = function (index) {
        this.array.splice(index, 1);
        this.editableMap = {};
    };
    EditableArray.prototype.updateItem = function (str, index) {
        this.array[index] = str;
        this.editableMap = {};
    };
    EditableArray = tslib_1.__decorate([
        RF.decorateComponent({
            name: 'app-editable-array',
            template: __webpack_require__(71)
        })
    ], EditableArray);
    return EditableArray;
}());
exports.EditableArray = EditableArray;


/***/ }),
/* 73 */
/***/ (function(module, exports) {

module.exports = "<app-modal id=\"scriptModal\"><div data-transclusion=\"content\"><form data-submit=\"createOrEditScript(editData.currScriptInEdit)\"><div class=\"withPadding\"><div class=\"table\"><div class=\"row\"><div class=\"cell\">{{i18n.get('name')}}</div><div class=\"cell\"><input required data-model=\"editData.currScriptInEdit.name\"></div></div></div><button data-disabled=\"!form.valid()\">{{editData.currScriptInEdit.id?i18n.get('edit'):i18n.get('create')}}</button></div></form></div></app-modal>";

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var baseComponent_1 = __webpack_require__(1);
var codeTemplates_1 = __webpack_require__(31);
var editData_1 = __webpack_require__(9);
var utils_1 = __webpack_require__(30);
var getRawName = function (str) {
    var splited = str.split('.');
    if (splited.length == 1)
        return str;
    splited.pop();
    return splited.join('.');
};
var ScriptDialog = (function (_super) {
    tslib_1.__extends(ScriptDialog, _super);
    function ScriptDialog() {
        return _super.call(this) || this;
    }
    ScriptDialog.prototype.createOrEditScript = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var name;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = utils_1.Utils.decapitalise(getRawName(editData_1.editData.currScriptInEdit.name));
                        if (!!editData_1.editData.currScriptInEdit.id) return [3, 2];
                        this.editData.customScripts.push({ name: name + ".js" });
                        return [4, this.restFileSystem.createFile("scripts/custom/" + name + ".js", codeTemplates_1.getLibCodeScript(utils_1.Utils.capitalise(name)))];
                    case 1:
                        _a.sent();
                        return [3, 4];
                    case 2:
                        this.editData.customScripts[editData_1.editData.currScriptInEdit.index].name = name + ".js";
                        return [4, this.restFileSystem.renameFolder("workspace/" + editData_1.editData.projectName + "/scripts/custom/" + getRawName(editData_1.editData.currScriptInEdit.oldName) + ".js", "workspace/" + editData_1.editData.projectName + "/scripts/custom/" + name + ".js")];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        RF.getComponentById('scriptModal').close();
                        return [2];
                }
            });
        });
    };
    ScriptDialog = tslib_1.__decorate([
        RF.decorateComponent({
            name: 'app-script-dialog',
            template: __webpack_require__(73)
        })
    ], ScriptDialog);
    return ScriptDialog;
}(baseComponent_1.BaseComponent));
exports.ScriptDialog = ScriptDialog;


/***/ }),
/* 75 */
/***/ (function(module, exports) {

module.exports = "<app-modal id=\"buildModal\"><div data-transclusion=\"content\"><table class=\"width100\"><tr><td>{{i18n.get('minify')}}</td><td><input data-change=\"onChanged()\" data-model=\"editData.buildOpts.minify\" type=\"checkbox\"></td></tr><tr><td>{{i18n.get('debug')}}</td><td><input data-change=\"onChanged()\" data-model=\"editData.buildOpts.debug\" type=\"checkbox\"></td></tr><tr><td>{{i18n.get('windowed')}}</td><td><input data-change=\"onChanged()\" data-model=\"editData.buildOpts.windowed\" type=\"checkbox\"></td></tr><tr><td>{{i18n.get('embedResources')}}</td><td><input data-change=\"onChanged()\" data-model=\"editData.buildOpts.embedResources\" type=\"checkbox\"></td></tr></table><button data-click=\"close()\">ok</button></div></app-modal>";

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var baseComponent_1 = __webpack_require__(1);
var BuildDialog = (function (_super) {
    tslib_1.__extends(BuildDialog, _super);
    function BuildDialog() {
        return _super.call(this) || this;
    }
    BuildDialog.prototype.close = function () {
        RF.getComponentById('buildModal').close();
    };
    BuildDialog.prototype.onChanged = function () {
        localStorage['buildOpts'] = JSON.stringify(this.editData.buildOpts);
    };
    BuildDialog = tslib_1.__decorate([
        RF.decorateComponent({
            name: 'app-build-dialog',
            template: __webpack_require__(75)
        })
    ], BuildDialog);
    return BuildDialog;
}(baseComponent_1.BaseComponent));
exports.BuildDialog = BuildDialog;


/***/ }),
/* 77 */
/***/ (function(module, exports) {

module.exports = "<app-modal id=\"commonBehaviourModal\"><div data-transclusion=\"content\"><table class=\"width100\"><tr><td class=\"borderBottom\">{{i18n.get('name')}}</td><td class=\"borderBottom\">{{editData.currCommonBehaviourInEdit.name}}</td></tr><tr><td class=\"borderBottom\">{{i18n.get('description')}}</td><td class=\"borderBottom\">{{editData.currCommonBehaviourInEdit.description}}</td></tr><tr data-for=\"value,key in editData.currCommonBehaviourInEdit.parameters\"><td class=\"borderBottom\">{{key}}</td><td class=\"borderBottom\"><input type=\"text\" data-model=\"editData.currCommonBehaviourInEdit.parameters[key]\"></td></tr><tr data-if=\"utils.size(editData.currCommonBehaviourInEdit.parameters)==0\"><td colspan=\"2\" class=\"borderBottom\">{{i18n.get('noDataToEdit')}}</td></tr></table><button data-click=\"createOrEditCommonBehaviour(editData.currCommonBehaviourInEdit)\" data-disabled=\"!form.valid()\">{{editData.currCommonBehaviourInEdit.id?i18n.get('edit'):i18n.get('create')}}</button></div></app-modal>";

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var baseComponent_1 = __webpack_require__(1);
var CommonBehaviourDialog = (function (_super) {
    tslib_1.__extends(CommonBehaviourDialog, _super);
    function CommonBehaviourDialog() {
        return _super.call(this) || this;
    }
    CommonBehaviourDialog.prototype.createOrEditCommonBehaviour = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var editData, cb, resp, editedCb;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        editData = this.editData;
                        cb = editData.currCommonBehaviourInEdit;
                        delete cb.description;
                        return [4, this.restResource.save(cb)];
                    case 1:
                        resp = _a.sent();
                        if (resp.created) {
                            cb.id = resp.id;
                            editData.game.repository.addObject(cb);
                            editData.currGameObjectInEdit.commonBehaviour.push(cb);
                        }
                        else {
                            editedCb = editData.currGameObjectInEdit.commonBehaviour.find(function (it) { return it.id == cb.id; });
                            editedCb.fromJSON(cb.toJSON());
                            cb.updateCloner();
                            editData.game.repository.updateObject(cb);
                        }
                        return [4, this.restResource.save(editData.currGameObjectInEdit)];
                    case 2:
                        _a.sent();
                        editData.currGameObjectInEdit.updateCloner();
                        RF.getComponentById('commonBehaviourModal').close();
                        return [2];
                }
            });
        });
    };
    CommonBehaviourDialog = tslib_1.__decorate([
        RF.decorateComponent({
            name: 'app-common-behaviour-dialog',
            template: __webpack_require__(77)
        })
    ], CommonBehaviourDialog);
    return CommonBehaviourDialog;
}(baseComponent_1.BaseComponent));
exports.CommonBehaviourDialog = CommonBehaviourDialog;


/***/ }),
/* 79 */
/***/ (function(module, exports) {

module.exports = "<app-modal id=\"frameAnimationModal\"><div data-transclusion=\"content\"><table class=\"width100\"><tr><td>{{i18n.get('name')}}</td><td><input required data-model=\"editData.currFrameAnimationInEdit.name\"></td><td rowspan=\"3\"><div style=\"max-height: 80vh;max-width:80vw;overflow: auto;padding: 5px;\">{{ editData.currFrameAnimationInEdit._gameObject && editData.currFrameAnimationInEdit._gameObject.currFrameIndex||0 }}<div data-style=\"utils.merge( utils.getGameObjectCss(editData.currFrameAnimationInEdit._gameObject), {outline:'1px solid blue'} )\"></div><div><button data-click=\"playAnimation()\" data-disabled=\"!form.valid()\" class=\"inlineBlock withMargin\">{{i18n.get('playAnim')}}</button><button data-click=\"stopAnimation()\" data-disabled=\"!form.valid()\" class=\"inlineBlock withMargin\">{{i18n.get('stopAnim')}}</button></div><div><button data-click=\"previousFrame()\" data-disabled=\"!form.valid()\" class=\"inlineBlock withMargin\"><< </button><button data-click=\"nextFrame()\" data-disabled=\"!form.valid()\" class=\"inlineBlock withMargin\">>></button></<><div class=\"relative\" data-style=\"{ 'background-image': 'url('+editData.projectName+'/'+editData.currFrameAnimationInEdit._gameObject.spriteSheet.getDefaultResourcePath()+')', 'width': editData.currFrameAnimationInEdit._gameObject.spriteSheet.width+'px', 'height': editData.currFrameAnimationInEdit._gameObject.spriteSheet.height+'px' }\"><div data-for=\"v,i in getLoopArr()\" data-style=\"{ 'display': 'inline-block', 'left': editData.currFrameAnimationInEdit._gameObject.spriteSheet.getFramePosX(i)+'px', 'top': editData.currFrameAnimationInEdit._gameObject.spriteSheet.getFramePosY(i)+'px', 'position': 'absolute', 'text-align': 'left', 'outline': '1px solid red', 'width': editData.currFrameAnimationInEdit._gameObject.spriteSheet._frameWidth+'px', 'height': editData.currFrameAnimationInEdit._gameObject.spriteSheet._frameHeight+'px' }\">{{i}}</div></div></button></div></div><tr><td>{{i18n.get('duration')}}</td><td><input type=\"number\" min=\"1\" required data-model=\"editData.currFrameAnimationInEdit.duration\"></td></tr><tr><td><table><tr><td>{{i18n.get('frames')}}</td><td><button data-click=\"setAllIndexes()\">{{i18n.get('all')}}</button></td></tr><tr><td>{{i18n.get('from')}}</td><td><input type=\"number\" data-model=\"from\" min=\"0\" data-keyup=\"setRangeIndexes()\"></td></tr><tr><td>{{i18n.get('to')}}</td><td><input type=\"number\" min=\"0\" data-model=\"to\" data-change=\"setRangeIndexes()\"></td></tr><tr><td>{{i18n.get('step')}}</td><td><input type=\"number\" min=\"0\" data-model=\"step\" data-change=\"setRangeIndexes()\"></td></tr></table></td><td><textarea required data-model=\"frames\"></textarea></td></tr></td><button data-click=\"createOrEditFrameAnimation()\" data-disabled=\"!form.valid()\">{{editData.currFrameAnimationInEdit.id?i18n.get('edit'):i18n.get('create')}}</button></tr></table></div></app-modal>";

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var baseComponent_1 = __webpack_require__(1);
var gameObject_1 = __webpack_require__(20);
var spriteSheet_1 = __webpack_require__(24);
var FrameAnimationDialog = (function (_super) {
    tslib_1.__extends(FrameAnimationDialog, _super);
    function FrameAnimationDialog() {
        var _this = _super.call(this) || this;
        _this.isStopped = true;
        _this.from = 0;
        _this.to = 1;
        _this.step = 1;
        _this.frames = '';
        return _this;
    }
    FrameAnimationDialog.prototype.open = function () {
        this.isStopped = true;
        this.frames = this.editData.currFrameAnimationInEdit.frames.join(',');
        this.editData.currFrameAnimationInEdit._gameObject = this.editData.currGameObjectInEdit.clone();
        RF.getComponentById('frameAnimationModal').open();
    };
    FrameAnimationDialog.prototype.allIndexes = function () {
        var res = this.utils.getArray(this.editData.currGameObjectInEdit.spriteSheet._numOfFrames);
        return res.join(',');
    };
    FrameAnimationDialog.prototype.setAllIndexes = function () {
        this.frames = this.allIndexes();
    };
    FrameAnimationDialog.prototype.setRangeIndexes = function () {
        this.frames = this.utils.range(+this.from, +this.to, +this.step).join(',');
    };
    FrameAnimationDialog.prototype.playAnimation = function () {
        var _this = this;
        this.isStopped = false;
        try {
            this.editData.currFrameAnimationInEdit.frames = JSON.parse('[' + this.frames + ']');
        }
        catch (e) {
            console.error(e);
            return;
        }
        this.editData.currFrameAnimationInEdit.play();
        var _anim = function () {
            _this.editData.currFrameAnimationInEdit.update(new Date().getTime());
            var i = _this.editData.currFrameAnimationInEdit._gameObject.currFrameIndex;
            _this.editData.currFrameAnimationInEdit._gameObject.setFrameIndex(i);
            if (_this.isStopped) {
                _this.isStopped = false;
                return;
            }
            if (RF.getComponentById('frameAnimationModal').opened)
                setTimeout(_anim, 50);
        };
        setTimeout(_anim, 0);
    };
    FrameAnimationDialog.prototype.stopAnimation = function () {
        this.isStopped = true;
    };
    FrameAnimationDialog.prototype.nextFrame = function () {
        this.stopAnimation();
        this.editData.currFrameAnimationInEdit.nextFrame();
    };
    FrameAnimationDialog.prototype.previousFrame = function () {
        this.stopAnimation();
        this.editData.currFrameAnimationInEdit.previousFrame();
    };
    FrameAnimationDialog.prototype.getLoopArr = function () {
        var editData = this.editData;
        if (!editData.currFrameAnimationInEdit._gameObject)
            editData.currFrameAnimationInEdit._gameObject = new gameObject_1.GameObject(editData.game);
        if (!editData.currFrameAnimationInEdit._gameObject.spriteSheet) {
            editData.currFrameAnimationInEdit._gameObject.spriteSheet = new spriteSheet_1.SpriteSheet(editData.game);
        }
        var lastIndex = editData.currFrameAnimationInEdit.
            _gameObject.spriteSheet.numOfFramesH
            *
                editData.currFrameAnimationInEdit._gameObject.spriteSheet.numOfFramesV;
        return this.utils.getArray(lastIndex);
    };
    FrameAnimationDialog.prototype.createOrEditFrameAnimation = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var fa, resp, editedFa;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        fa = this.editData.currFrameAnimationInEdit;
                        fa.frames = JSON.parse('[' + this.frames + ']');
                        return [4, this.restResource.save(fa)];
                    case 1:
                        resp = _a.sent();
                        if (resp.created) {
                            fa.id = resp.id;
                            this.editData.game.repository.addObject(fa);
                            this.editData.currGameObjectInEdit.frameAnimations.push(fa);
                        }
                        else {
                            editedFa = this.editData.currGameObjectInEdit.frameAnimations.find(function (it) { return it.id == fa.id; });
                            editedFa.fromJSON(fa.toJSON());
                            fa.updateCloner();
                            this.editData.game.repository.updateObject(fa);
                        }
                        return [4, this.restResource.save(this.editData.currGameObjectInEdit)];
                    case 2:
                        _a.sent();
                        this.editData.currGameObjectInEdit.updateCloner();
                        RF.getComponentById('frameAnimationModal').close();
                        return [2];
                }
            });
        });
    };
    FrameAnimationDialog = tslib_1.__decorate([
        RF.decorateComponent({
            name: 'app-frame-animation-dialog',
            template: __webpack_require__(79)
        })
    ], FrameAnimationDialog);
    return FrameAnimationDialog;
}(baseComponent_1.BaseComponent));
exports.FrameAnimationDialog = FrameAnimationDialog;


/***/ }),
/* 81 */
/***/ (function(module, exports) {

module.exports = "<app-modal id=\"particleSystemPreviewModal\"><div data-transclusion=\"content\"><div>{{i18n.get('preview')}} {{i18n.get('particleSystem')}}<span class=\"underLine\">{{editData.currParticleSystemInEdit.name}}</span></div><div data-click=\"emit($event)\" data-mousemove=\"$event.buttons==1 && emit($event)\" class=\"subFullScreen relative noOverFlow\"><div data-for=\"item in editData.currParticleSystemInEdit._particles\" data-style=\"utils.merge( utils.getGameObjectCss(item), { position:'absolute', left:item.pos.x+'px', top: item.pos.y+'px', pointerEvents:'none' } )\"></div></div><div><button data-click=\"close()\">{{i18n.get('close')}}</button></div></div></app-modal>";

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var baseComponent_1 = __webpack_require__(1);
var tid;
var ParticleSystemPreviewDialog = (function (_super) {
    tslib_1.__extends(ParticleSystemPreviewDialog, _super);
    function ParticleSystemPreviewDialog() {
        return _super.call(this) || this;
    }
    ParticleSystemPreviewDialog.prototype.open = function () {
        RF.getComponentById('particleSystemPreviewModal').open();
        this.run();
    };
    ParticleSystemPreviewDialog.prototype.close = function () {
        RF.getComponentById('particleSystemPreviewModal').close();
        clearInterval(tid);
    };
    ParticleSystemPreviewDialog.prototype.run = function () {
        var editData = this.editData;
        var prevTime = null;
        if (!editData.currParticleSystemInEdit._particles)
            editData.currParticleSystemInEdit._particles = [];
        var update = function () {
            var currTime = Date.now();
            if (!prevTime)
                prevTime = currTime;
            var delta = currTime - prevTime;
            prevTime = currTime;
            editData.currParticleSystemInEdit._particles.forEach(function (p) {
                p._currFrameAnimation && p._currFrameAnimation.update(currTime);
                var deltaX = p.velocity.x * delta / 1000;
                var deltaY = p.velocity.y * delta / 1000;
                p.pos.x = p.pos.x + deltaX;
                p.pos.y = p.pos.y + deltaY;
                if (!p._timeCreated)
                    p._timeCreated = currTime;
                if (currTime - p._timeCreated > p['liveTime']) {
                    editData.currParticleSystemInEdit._particles.
                        splice(editData.currParticleSystemInEdit._particles.indexOf(p), 1);
                }
            });
        };
        tid = setInterval(function () {
            update();
        }, 5);
    };
    ParticleSystemPreviewDialog.prototype.emit = function (e) {
        var editData = this.editData;
        if (!editData.currParticleSystemInEdit)
            return;
        if (!editData.currParticleSystemInEdit.gameObjectProto)
            return;
        var rect = e.target.getBoundingClientRect();
        editData.currParticleSystemInEdit.emit(e.clientX - rect.left, e.clientY - rect.top);
    };
    ParticleSystemPreviewDialog = tslib_1.__decorate([
        RF.decorateComponent({
            name: 'app-particle-system-preview-dialog',
            template: __webpack_require__(81)
        })
    ], ParticleSystemPreviewDialog);
    return ParticleSystemPreviewDialog;
}(baseComponent_1.BaseComponent));
exports.ParticleSystemPreviewDialog = ParticleSystemPreviewDialog;


/***/ }),
/* 83 */
/***/ (function(module, exports) {

module.exports = "<app-modal id=\"layerModal\"><div data-transclusion=\"content\"><form data-submit=\"createOrEditLayer(editData.currLayerInEdit,editData.currLayerInEdit._scene)\"><div class=\"withPadding\"><div>{{i18n.get('scene')}}: {{editData.currLayerInEdit._scene && editData.currLayerInEdit._scene.name}}</div><b class=\"block centerText\">{{i18n.get('layer')}}</b><div class=\"table width100\"><div class=\"row\"><div class=\"cell\">{{i18n.get('name')}}</div><div class=\"cell\"><input data-model=\"editData.currLayerInEdit.name\" required></div></div></div><div><button data-disabled=\"!form.valid()\">{{editData.currLayerInEdit.id?i18n.get('edit'):i18n.get('create')}}</button></div></div></form></div></app-modal>";

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var baseComponent_1 = __webpack_require__(1);
var LayerDialog = (function (_super) {
    tslib_1.__extends(LayerDialog, _super);
    function LayerDialog() {
        return _super.call(this) || this;
    }
    LayerDialog.prototype.createOrEditLayer = function (layer, scene) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var resp;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.restResource.save(layer)];
                    case 1:
                        resp = _a.sent();
                        if (!resp.created) return [3, 3];
                        layer.id = resp.id;
                        scene.layers.push(layer);
                        this.editData.game.repository.addObject(layer);
                        scene.updateCloner();
                        this.editData.game.repository.updateObject(scene);
                        return [4, this.restResource.save(scene)];
                    case 2:
                        _a.sent();
                        return [3, 4];
                    case 3:
                        layer.updateCloner();
                        _a.label = 4;
                    case 4:
                        RF.getComponentById('layerModal').close();
                        return [2];
                }
            });
        });
    };
    LayerDialog.prototype.deleteLayer = function (l) {
    };
    LayerDialog = tslib_1.__decorate([
        RF.decorateComponent({
            name: 'app-layer-dialog',
            template: __webpack_require__(83)
        })
    ], LayerDialog);
    return LayerDialog;
}(baseComponent_1.BaseComponent));
exports.LayerDialog = LayerDialog;


/***/ }),
/* 85 */
/***/ (function(module, exports) {

module.exports = "<app-modal id=\"sceneModal\"><div data-transclusion=\"content\"><form data-submit=\"createOrEditScene(editData.currSceneInEdit)\"><div class=\"withPadding\"><div class=\"table\"><div class=\"row\"><div class=\"cell\">{{i18n.get('name')}}</div><div class=\"cell\"><input required data-model=\"editData.currSceneInEdit.name\"></div></div></div><button data-disabled=\"!form.valid()\">{{editData.currSceneInEdit.id?i18n.get('edit'):i18n.get('create')}}</button></div></form></div></app-modal>";

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var baseComponent_1 = __webpack_require__(1);
var codeTemplates_1 = __webpack_require__(31);
var SceneDialog = (function (_super) {
    tslib_1.__extends(SceneDialog, _super);
    function SceneDialog() {
        return _super.call(this) || this;
    }
    SceneDialog.prototype.createOrEditScene = function (s) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var resp, name_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.restResource.save(s)];
                    case 1:
                        resp = _a.sent();
                        if (!resp.created) return [3, 3];
                        s.id = resp.id;
                        this.editData.game.repository.addObject(s);
                        name_1 = this.utils.capitalise(this.editData.currSceneInEdit.name);
                        return [4, this.restFileSystem.createFile("scripts/" + s.name + ".js", codeTemplates_1.getDefaultCodeScript(name_1))];
                    case 2:
                        _a.sent();
                        return [3, 4];
                    case 3:
                        s.updateCloner();
                        _a.label = 4;
                    case 4:
                        RF.getComponentById('sceneModal').close();
                        return [2];
                }
            });
        });
    };
    SceneDialog = tslib_1.__decorate([
        RF.decorateComponent({
            name: 'app-scene-dialog',
            template: __webpack_require__(85)
        })
    ], SceneDialog);
    return SceneDialog;
}(baseComponent_1.BaseComponent));
exports.SceneDialog = SceneDialog;


/***/ }),
/* 87 */
/***/ (function(module, exports) {

module.exports = "<app-modal id=\"gameObjectModal\"><div data-transclusion=\"content\"><table class=\"width100\"><tr><td>{{i18n.get('name')}}</td><td><input required data-model=\"editData.currGameObjectInEdit.name\"></td><td></td><td rowspan=\"5\"><div class=\"relative\" style=\"display: inline-block; overflow: auto; max-width:60vw; max-height:60vh;\"><div data-style=\"utils.merge( utils.getGameObjectCss(editData.currGameObjectInEdit), { 'border':'1px solid blue', 'opacity':editData.currGameObjectInEdit.alpha } )\"></div></div></td></tr><tr><td>{{i18n.get('spriteSheet')}}</td><td><select data-change=\"onSpriteSheetSelected(editData.currGameObjectInEdit.spriteSheet)\" required data-model=\"editData.currGameObjectInEdit.spriteSheet\"><option>--</option><option data-value=\"item\" data-for=\"item in editData.game.repository.getArray('SpriteSheet') track by id\">{{item.name}}</option></select></td><td></td></tr><tr><td>{{i18n.get('groupName')}}</td><td><app-editable-array data-state=\"{ array: editData.currGameObjectInEdit.groupNames }\"></app-editable-array></td><td></td></tr><tr><td>{{i18n.get('collideWith')}}</td><td><app-editable-array data-state=\"{ array: editData.currGameObjectInEdit.collideWith }\"></app-editable-array></td><td></td></tr><tr><td>{{i18n.get('rigid')}}</td><td><input type=\"checkbox\" data-model=\"editData.currGameObjectInEdit.rigid\"></td><td></td></tr><tr><td>{{i18n.get('width')}}</td><td><input type=\"number\" required data-model=\"editData.currGameObjectInEdit.width\"></td><td></td></tr><tr><td>{{i18n.get('height')}}</td><td><input type=\"number\" required data-model=\"editData.currGameObjectInEdit.height\"></td><td></td></tr><tr><td>{{i18n.get('angle')}}</td><td><input step=\"0.1\" type=\"number\" required data-model=\"editData.currGameObjectInEdit.angle\"></td><td align=\"left\"><div class=\"inlineBlock\"><app-angle-picker data-state=\"{ object: editData.currGameObjectInEdit, value: 'angle' }\"></app-angle-picker></div></td></tr><tr><td>alpha</td><td><input type=\"number\" min=\"0\" max=\"1\" step=\"0.1\" required data-model=\"editData.currGameObjectInEdit.alpha\"></td><td><input type=\"range\" min=\"0\" max=\"1\" step=\"0.1\" data-model=\"editData.currGameObjectInEdit.alpha\"></td></tr><tr><td>{{i18n.get('currFrameIndex')}}</td><td><input type=\"number\" min=\"0\" data-change=\"refreshGameObjectFramePreview(editData.currGameObjectInEdit,editData.currGameObjectInEdit.currFrameIndex)\" required data-model=\"editData.currGameObjectInEdit.currFrameIndex\"></td><td></td></tr></table><table class=\"width100 stripped\"><tr><th colspan=\"4\">{{i18n.get('frAnimations')}}<button class=\"inlineBlock\" data-disabled=\"!editData.currGameObjectInEdit.id\" data-click=\"createFrameAnimation()\">+</button></th></tr><tr><th colspan=\"2\">{{i18n.get('actions')}}</th><th>{{i18n.get('name')}}</th><th>{{i18n.get('isDefault')}}<span class=\"small withPadding\">{{i18n.get('unselect')}}<button data-click=\"onStartFrameAnimNameChanged(null)\">*</button></span></th></tr><tr data-for=\"animItm in editData.currGameObjectInEdit.frameAnimations\"><td class=\"pointer\" data-click=\"editFrameAnimation(animItm)\"><span class=\"edit\"></span></td><td class=\"pointer\" data-click=\"deleteFrameAnimation(animItm)\"><span class=\"delete\"></span></td><td>{{animItm.name}}</td><td><input data-attribute=\"value: animItm.name\" data-change=\"onStartFrameAnimNameChanged(animItm.name)\" data-model=\"editData.currGameObjectInEdit.startFrameAnimationName\" type=\"radio\"></td></tr><tr><th colspan=\"4\">{{i18n.get('commonBehaviour')}}</th></tr><tr><td colspan=\"2\"><select class=\"width50\" data-model=\"selectedCb\"><option>-</option><option data-disabled=\"isCbItemDisabled(cb)\" data-value=\"cb\" data-for=\"cb in editData.commonBehaviourProtos\">{{cb.name}}</option></select></td><td colspan=\"2\"><button class=\"inlineBlock\" data-disabled=\"!editData.currGameObjectInEdit.id || !selectedCb\" data-click=\"createCommonBehaviour(selectedCb)\">+</button></td></tr><tr><th colspan=\"2\">{{i18n.get('actions')}}</th><th colspan=\"2\">{{i18n.get('name')}}</th></tr><tr data-for=\"itm in editData.currGameObjectInEdit.commonBehaviour\"><td class=\"pointer\" data-click=\"editCommonBehaviour(itm)\"><span class=\"edit\"></span></td><td class=\"pointer\" data-click=\"deleteCommonBehaviour(itm)\"><span class=\"delete\"></span></td><td colspan=\"2\">{{itm.name}}</td></tr></table><button data-disabled=\"!form.valid()\" data-click=\"createOrEditGameObject(editData.currGameObjectInEdit)\">{{editData.currGameObjectInEdit.id?i18n.get('edit'):i18n.get('create')}}</button></div></app-modal><app-frame-animation-dialog id=\"frameAnimationDialog\"></app-frame-animation-dialog><app-common-behaviour-dialog id=\"commonBehaviourDialog\"></app-common-behaviour-dialog>";

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var baseComponent_1 = __webpack_require__(1);
var frameAnimation_1 = __webpack_require__(44);
var userDefinedFns_1 = __webpack_require__(5);
var codeTemplates_1 = __webpack_require__(31);
var GameObjectDialog = (function (_super) {
    tslib_1.__extends(GameObjectDialog, _super);
    function GameObjectDialog() {
        var _this = _super.call(this) || this;
        _this.selectedBehaviourId = '';
        return _this;
    }
    GameObjectDialog.prototype.createOrEditGameObject = function (g) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var resp, name_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.restResource.save(g)];
                    case 1:
                        resp = _a.sent();
                        if (!resp.created) return [3, 3];
                        g.id = resp.id;
                        this.editData.game.repository.addObject(g);
                        name_1 = this.utils.capitalise(this.editData.currGameObjectInEdit.name);
                        return [4, this.restFileSystem.createFile("scripts/" + g.name + ".js", codeTemplates_1.getDefaultCodeScript(name_1))];
                    case 2:
                        _a.sent();
                        return [3, 4];
                    case 3:
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
                        _a.label = 4;
                    case 4:
                        RF.getComponentById('gameObjectModal').close();
                        return [2];
                }
            });
        });
    };
    GameObjectDialog.prototype.onStartFrameAnimNameChanged = function (frName) {
        var go = this.editData.currGameObjectInEdit;
        go.startFrameAnimationName = frName;
        var opts = { preserveNull: true };
        this.editData.game.repository.updateObject(go, opts);
        go.updateCloner(opts);
        this.restResource.save(go, null, opts);
    };
    GameObjectDialog.prototype.refreshGameObjectFramePreview = function (gameObjectProto, ind) {
        var spriteSheet = gameObjectProto.spriteSheet;
        if (!spriteSheet)
            return;
        var maxNumOfFrame = spriteSheet.numOfFramesH * spriteSheet.numOfFramesV;
        if (ind > maxNumOfFrame - 1) {
            this.editData.currGameObjectInEdit.currFrameIndex = 0;
            ind = 0;
        }
        gameObjectProto.setFrameIndex(ind);
    };
    GameObjectDialog.prototype.createFrameAnimation = function () {
        this.editData.currFrameAnimationInEdit = new frameAnimation_1.FrameAnimation(this.editData.game);
        RF.getComponentById('frameAnimationDialog').open();
    };
    GameObjectDialog.prototype.editFrameAnimation = function (fa) {
        this.editData.currFrameAnimationInEdit = fa.clone();
        RF.getComponentById('frameAnimationDialog').open();
    };
    GameObjectDialog.prototype.deleteFrameAnimation = function (fa) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.utils.deleteModel(fa)];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    GameObjectDialog.prototype.onSpriteSheetSelected = function (spriteSheet) {
        var gameObjectProto = this.editData.currGameObjectInEdit;
        gameObjectProto.width = ~~(spriteSheet.width / spriteSheet.numOfFramesH);
        gameObjectProto.height = ~~(spriteSheet.height / spriteSheet.numOfFramesV);
        gameObjectProto.name = spriteSheet.name;
    };
    GameObjectDialog.prototype.createCommonBehaviour = function (selectedBehaviour) {
        if (this.editData.currGameObjectInEdit.commonBehaviour.find(function (it) { return it.name == selectedBehaviour.name; })) {
            userDefinedFns_1.alertEx(this.i18n.get('objectAlreadyAdded'));
            return;
        }
        selectedBehaviour.__originalId = selectedBehaviour.id;
        selectedBehaviour.id = null;
        this.editData.currCommonBehaviourInEdit = selectedBehaviour.clone();
        RF.getComponentById('commonBehaviourModal').open();
    };
    GameObjectDialog.prototype.editCommonBehaviour = function (cb) {
        this.editData.currCommonBehaviourInEdit = cb.clone();
        RF.getComponentById('commonBehaviourModal').open();
    };
    GameObjectDialog.prototype.deleteCommonBehaviour = function (cb) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var res, model;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.utils.deleteModel(cb)];
                    case 1:
                        res = _a.sent();
                        if (!res)
                            return [2];
                        model = this.editData.currGameObjectInEdit;
                        model.commonBehaviour.remove(function (it) { return it.id == cb.id; });
                        model.updateCloner();
                        this.editData.game.repository.updateObject(model);
                        this.restResource.save(model);
                        return [2];
                }
            });
        });
    };
    GameObjectDialog.prototype.isCbItemDisabled = function (cb) {
        return !!this.editData.currGameObjectInEdit.commonBehaviour.find(function (it) { return it.name == cb.name; });
    };
    GameObjectDialog = tslib_1.__decorate([
        RF.decorateComponent({
            name: 'app-game-object-dialog',
            template: __webpack_require__(87)
        })
    ], GameObjectDialog);
    return GameObjectDialog;
}(baseComponent_1.BaseComponent));
exports.GameObjectDialog = GameObjectDialog;


/***/ }),
/* 89 */
/***/ (function(module, exports) {

module.exports = "<app-modal id=\"spriteSheetModal\"><div data-transclusion=\"content\"><table class=\"width100\"><tr><td>{{i18n.get('name')}}</td><td><input data-model=\"editData.currSpriteSheetInEdit.name\"></td><td rowspan=\"6\"><div style=\"max-width:60vw;overflow: auto;padding:5px;\"><div class=\"relative\" data-style=\"{ 'background-image': 'url('+spriteSheetUrl+')', 'background-size': editData.currSpriteSheetInEdit.width+'px '+editData.currSpriteSheetInEdit.height+'px', 'width': editData.currSpriteSheetInEdit.width+'px', 'height': editData.currSpriteSheetInEdit.height+'px', }\"><div data-attributes=\"{title:i}\" data-for=\"i in utils.range(0,numOfSpriteSheetCells-1)\" data-style=\"{ 'display': 'inline-block', 'left': editData.currSpriteSheetInEdit.getFramePosX(i)+'px', 'top': editData.currSpriteSheetInEdit.getFramePosY(i)+'px', 'position': 'absolute', 'text-align': 'left', 'outline': '1px solid red', 'width': editData.currSpriteSheetInEdit._frameWidth+'px', 'height': editData.currSpriteSheetInEdit._frameHeight+'px' }\">{{i}}</div></div></div></td></tr><tr><td>{{i18n.get('image')}}</td><td><app-input-file data-state=\"{ onFilePicked: onFilePicked, title: i18n.get('loadImage'), accept: 'image/*' }\"></app-input-file></td></tr><tr><td>{{i18n.get('width')}}</td><td><input type=\"number\" min=\"1\" data-change=\"revalidate()\" data-model=\"editData.currSpriteSheetInEdit.width\"></td></tr><tr><td>{{i18n.get('height')}}</td><td><input type=\"number\" min=\"1\" data-change=\"revalidate()\" data-model=\"editData.currSpriteSheetInEdit.height\"></td></tr><tr><td>{{i18n.get('numOfFramesH')}}</td><td><input required min=\"1\" max=\"100\" type=\"number\" data-change=\"refreshNumOfCells()\" data-model=\"editData.currSpriteSheetInEdit.numOfFramesH\"></td></tr><tr><td>{{i18n.get('numOfFramesV')}}</td><td><input required min=\"1\" max=\"100\" type=\"number\" data-change=\"refreshNumOfCells()\" data-input=\"refreshNumOfCells()\" data-keyup=\"refreshNumOfCells()\" data-model=\"editData.currSpriteSheetInEdit.numOfFramesV\"></td></tr></table><button data-click=\"createOrEditSpriteSheet(editData.currSpriteSheetInEdit)\" data-disabled=\"!(form.valid() && editData.currSpriteSheetInEdit.getDefaultResourcePath())\">{{editData.currSpriteSheetInEdit.id?i18n.get('edit'):i18n.get('create')}}</button></div></app-modal>";

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var baseComponent_1 = __webpack_require__(1);
var SpriteSheetDialog = (function (_super) {
    tslib_1.__extends(SpriteSheetDialog, _super);
    function SpriteSheetDialog() {
        var _this = _super.call(this) || this;
        _this.spriteSheetUrl = '';
        _this._file = '';
        _this.numOfSpriteSheetCells = 0;
        return _this;
    }
    SpriteSheetDialog.prototype.open = function () {
        var editData = this.editData;
        this._file = null;
        if (editData.currSpriteSheetInEdit.id)
            this.spriteSheetUrl =
                editData.projectName + "/" + editData.currSpriteSheetInEdit.getDefaultResourcePath() + "?" + Math.random();
        else
            this.spriteSheetUrl = '';
        this.refreshNumOfCells();
        RF.getComponentById('spriteSheetModal').open();
    };
    SpriteSheetDialog.prototype.onFilePicked = function (src, file, name, ext) {
        var editData = this.editData;
        if (!editData.currSpriteSheetInEdit.name) {
            editData.currSpriteSheetInEdit.name = name;
        }
        this._file = file;
        this.spriteSheetUrl = src;
        editData.currSpriteSheetInEdit._lastPath = this.editData.currSpriteSheetInEdit.getDefaultResourcePath();
        var currPath = "resources/" + editData.currSpriteSheetInEdit.name + "." + ext;
        if (editData.currSpriteSheetInEdit._lastPath == currPath)
            editData.currSpriteSheetInEdit._lastPath = null;
        editData.currSpriteSheetInEdit.setDefaultResourcePath(currPath);
        var img = new Image();
        img.onload = function () {
            editData.currSpriteSheetInEdit.width = img.width;
            editData.currSpriteSheetInEdit.height = img.height;
            editData.currSpriteSheetInEdit.revalidate();
            RF.digest();
        };
        img.src = src;
    };
    SpriteSheetDialog.prototype.refreshNumOfCells = function () {
        var editData = this.editData;
        this.numOfSpriteSheetCells =
            editData && editData.currSpriteSheetInEdit &&
                editData.currSpriteSheetInEdit.numOfFramesH *
                    editData.currSpriteSheetInEdit.numOfFramesV;
        editData.currSpriteSheetInEdit.revalidate();
    };
    SpriteSheetDialog.prototype.revalidate = function () {
        this.editData.currSpriteSheetInEdit.revalidate();
    };
    SpriteSheetDialog.prototype.createOrEditSpriteSheet = function (model) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var resp, cloner;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this._file) return [3, 2];
                        return [4, this.restFileSystem.uploadFile(this._file, { path: this.editData.currSpriteSheetInEdit.getDefaultResourcePath() })];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        if (!this.editData.currSpriteSheetInEdit._lastPath) return [3, 4];
                        return [4, this.restFileSystem.removeFile(this.editData.currSpriteSheetInEdit._lastPath)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [4, this.restResource.save(model)];
                    case 5:
                        resp = _a.sent();
                        if (resp.created) {
                            model.id = resp.id;
                            this.editData.game.repository.addObject(model);
                        }
                        else if (resp.updated) {
                            cloner = model._cloner;
                            model.updateCloner();
                            cloner['_lastRevalidated'] = new Date().getTime().toString(16);
                            this.editData.game.repository.updateObject(model);
                            this.utils.eachGameObject(function (g) {
                                if (g.spriteSheet.id == model.id) {
                                    g.spriteSheet = model;
                                    g.revalidate();
                                }
                            });
                        }
                        RF.getComponentById('spriteSheetModal').close();
                        return [2];
                }
            });
        });
    };
    SpriteSheetDialog = tslib_1.__decorate([
        RF.decorateComponent({
            name: 'app-sprite-sheet-dialog',
            template: __webpack_require__(89)
        })
    ], SpriteSheetDialog);
    return SpriteSheetDialog;
}(baseComponent_1.BaseComponent));
exports.SpriteSheetDialog = SpriteSheetDialog;


/***/ }),
/* 91 */
/***/ (function(module, exports) {

module.exports = "<app-modal id=\"fontModal\"><div data-transclusion=\"content\"><table class=\"width100\"><tr><td>{{i18n.get('selectFont')}}</td><td><select data-model=\"editData.currFontInEdit.fontFamily\" class=\"width100\"><option data-value=\"fnt.displayName\" data-for=\"fnt in systemFontList\">{{fnt.displayName}}</option></select></td></tr><tr><td>{{i18n.get('name')}}</td><td><input data-model=\"editData.currFontInEdit.name\" class=\"width100\"></td></tr><tr><td>{{i18n.get('fontSize')}}</td><td><input type=\"number\" min=\"1\" max=\"1000\" data-model=\"editData.currFontInEdit.fontSize\" class=\"width100\"></td></tr><tr><td>{{i18n.get('fontColor')}}</td><td><app-color-picker data-state=\"{ model:editData.currFontInEdit, field:'fontColor' }\"></app-color-picker></td></tr><tr><td colspan=\"2\"><input data-model=\"fontSample\" class=\"width100\"></td></tr><tr><td colspan=\"2\"><div data-style=\"{ fontFamily:editData.currFontInEdit.fontFamily, fontSize:editData.currFontInEdit.fontSize+'px', color:utils.rgbToHex(editData.currFontInEdit.fontColor) }\">{{fontSample}}</div></td></tr></table><button data-disabled=\"!form.valid()\" data-click=\"createOrEditFont(editData.currFontInEdit)\">{{editData.currFontInEdit.id?i18n.get('edit'):i18n.get('create')}}</button></div></app-modal>";

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var events = {};
window.addEventListener('message', function (resp) {
    var data = resp.data && resp.data.response;
    if (!data)
        return;
    var id = resp.data.eventUUID;
    if (events[id]) {
        var fn = events[id];
        delete events[id];
        fn && data && fn(data);
    }
});
exports.requestToApi = function (params, callBack) {
    var eventUUID = (~~Math.random() * 100) + new Date().getTime();
    events[eventUUID] = callBack;
    params.eventUUID = eventUUID;
    window.top.postMessage(params, '*');
};


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var baseComponent_1 = __webpack_require__(1);
var chrome = __webpack_require__(92);
var SYMBOL_PADDING = 4;
var fontSample = 'Test me! Text here';
var SAFE_FONTS = [{ displayName: 'serif' }, { displayName: 'sans-serif' }, { displayName: 'monospace' }];
var getFontContext = function (arrFromTo, strFont, w) {
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
    var currX = 0, currY = 0, cnvHeight = textHeight;
    for (var k = 0; k < arrFromTo.length; k++) {
        var arrFromToCurr = arrFromTo[k];
        for (var i = arrFromToCurr.from; i < arrFromToCurr.to; i++) {
            var currentChar = String.fromCharCode(i);
            ctx = cnv.getContext('2d');
            var textWidth = ctx.measureText(currentChar).width;
            textWidth += 2 * SYMBOL_PADDING;
            if (textWidth == 0)
                continue;
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
var getFontImage = function (symbolsContext, strFont, color) {
    var cnv = document.createElement('canvas');
    cnv.width = symbolsContext.width;
    cnv.height = symbolsContext.height;
    var ctx = cnv.getContext('2d');
    ctx.font = strFont;
    ctx.fillStyle = color;
    ctx.textBaseline = "top";
    var symbols = symbolsContext.symbols;
    for (var symbol in symbols) {
        if (!symbols.hasOwnProperty(symbol))
            continue;
        ctx.fillText(symbol, symbols[symbol].x, symbols[symbol].y);
    }
    return cnv.toDataURL();
};
var FontDialog = (function (_super) {
    tslib_1.__extends(FontDialog, _super);
    function FontDialog() {
        var _this = _super.call(this) || this;
        _this.systemFontList = [];
        _this.fontSample = fontSample;
        return _this;
    }
    FontDialog.prototype.open = function () {
        var _this = this;
        if (!this.systemFontList.length) {
            chrome.requestToApi({ method: 'getFontList' }, function (list) {
                _this.systemFontList = list;
                RF.digest();
            });
            setTimeout(function () {
                if (!_this.systemFontList.length) {
                    _this.systemFontList = SAFE_FONTS;
                }
            }, 5000);
        }
        RF.getComponentById('fontModal').open();
    };
    FontDialog.prototype.createOrEditFont = function (model) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var strFont, file, resp;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        strFont = model.fontSize + 'px' + ' ' + model.fontFamily;
                        model.fontContext = getFontContext([{ from: 32, to: 150 }, { from: 1040, to: 1116 }], strFont, 320);
                        file = this.utils.dataURItoBlob(getFontImage(model.fontContext, strFont, this.utils.rgbToHex(model.fontColor)));
                        model.setDefaultResourcePath("resources/" + model.name + ".png");
                        return [4, this.restFileSystem.uploadFile(file, {
                                path: model.getDefaultResourcePath()
                            })];
                    case 1:
                        _a.sent();
                        return [4, this.restResource.save(model)];
                    case 2:
                        resp = _a.sent();
                        if (resp.created) {
                            model.id = resp.id;
                            this.editData.game.repository.addObject(model);
                        }
                        else if (resp.updated) {
                            model.updateCloner();
                        }
                        RF.getComponentById('fontModal').close();
                        return [2];
                }
            });
        });
    };
    FontDialog = tslib_1.__decorate([
        RF.decorateComponent({
            name: 'app-font-dialog',
            template: __webpack_require__(91)
        })
    ], FontDialog);
    return FontDialog;
}(baseComponent_1.BaseComponent));
exports.FontDialog = FontDialog;


/***/ }),
/* 94 */
/***/ (function(module, exports) {

module.exports = "<app-modal id=\"soundModal\"><div data-transclusion=\"content\"><table class=\"width100\"><tr><td>{{i18n.get('name')}}</td></tr><tr><td><input required data-model=\"editData.currSoundInEdit.name\"></td></tr><tr><td><app-input-file data-state=\"{ onFilePicked: onFilePicked, title: i18n.get('loadSound'), accept: 'audio/*' }\"></app-input-file></td></tr><tr><td><audio data-if=\"soundUrl\" controls=\"controls\" data-attributes=\"{src:soundUrl}\"></audio></td></tr></table><button data-disabled=\"!(form.valid() && soundUrl)\" data-click=\"createOrEditSound(editData.currSoundInEdit)\">{{editData.currSoundInEdit.id?i18n.get('edit'):i18n.get('create')}}</button></div></app-modal>";

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var baseComponent_1 = __webpack_require__(1);
var SoundDialog = (function (_super) {
    tslib_1.__extends(SoundDialog, _super);
    function SoundDialog() {
        var _this = _super.call(this) || this;
        _this.soundUrl = '';
        _this._file = null;
        return _this;
    }
    SoundDialog.prototype.open = function () {
        if (this.editData.currSoundInEdit.id)
            this.soundUrl =
                this.editData.projectName + "/" + this.editData.currSoundInEdit.resourcePath + "?" + Math.random();
        else
            this.soundUrl = '';
        this._file = null;
        RF.getComponentById('soundModal').open();
    };
    SoundDialog.prototype.onFilePicked = function (src, file, name, ext) {
        this._file = file;
        this.soundUrl = src;
        this.editData.currSoundInEdit._lastPath = this.editData.currSoundInEdit.resourcePath;
        this.editData.currSoundInEdit.resourcePath = "resources/" + this.editData.currSoundInEdit.name + "." + ext;
        if (this.editData.currSoundInEdit._lastPath == this.editData.currSoundInEdit.resourcePath)
            this.editData.currSoundInEdit._lastPath = null;
        if (!this.editData.currSoundInEdit.name) {
            this.editData.currSoundInEdit.name = name;
        }
    };
    SoundDialog.prototype.createOrEditSound = function (model) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var resp;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this._file) return [3, 2];
                        return [4, this.restFileSystem.uploadFile(this._file, { path: this.editData.currSoundInEdit.resourcePath })];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        if (!this.editData.currSoundInEdit._lastPath) return [3, 4];
                        return [4, this.restFileSystem.removeFile(this.editData.currSoundInEdit._lastPath)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [4, this.restResource.save(model)];
                    case 5:
                        resp = _a.sent();
                        if (resp.created) {
                            model.id = resp.id;
                            this.editData.game.repository.addObject(model);
                        }
                        else if (resp.updated) {
                            model.updateCloner();
                            this.editData.game.repository.updateObject(model);
                        }
                        RF.getComponentById('soundModal').close();
                        return [2];
                }
            });
        });
    };
    SoundDialog = tslib_1.__decorate([
        RF.decorateComponent({
            name: 'app-sound-dialog',
            template: __webpack_require__(94)
        })
    ], SoundDialog);
    return SoundDialog;
}(baseComponent_1.BaseComponent));
exports.SoundDialog = SoundDialog;


/***/ }),
/* 96 */
/***/ (function(module, exports) {

module.exports = "<app-modal id=\"particleSystemModal\"><div data-transclusion=\"content\"><table class=\"width100\"><tr><td>{{i18n.get('name')}}</td><td></td><td><input required data-model=\"editData.currParticleSystemInEdit.name\"></td></tr><tr><td rowspan=\"2\">numOfParticlesToEmit</td><td>from</td><td><input required type=\"number\" data-model=\"editData.currParticleSystemInEdit.numOfParticlesToEmit.from\"></td></tr><tr><td>to</td><td><input required type=\"number\" data-model=\"editData.currParticleSystemInEdit.numOfParticlesToEmit.to\"></td></tr><tr><td rowspan=\"2\">particleVelocity</td><td>from</td><td><input required type=\"number\" data-model=\"editData.currParticleSystemInEdit.particleVelocity.from\"></td></tr><tr><td>to</td><td><input required type=\"number\" data-model=\"editData.currParticleSystemInEdit.particleVelocity.to\"></td></tr><tr><td rowspan=\"2\">particleLiveTime</td><td>from</td><td><input required type=\"number\" data-model=\"editData.currParticleSystemInEdit.particleLiveTime.from\"></td></tr><tr><td>to</td><td><input required type=\"number\" data-model=\"editData.currParticleSystemInEdit.particleLiveTime.to\"></td></tr><tr><td>emissionRadius</td><td></td><td><input required type=\"number\" data-model=\"editData.currParticleSystemInEdit.emissionRadius\"></td></tr><tr><td>particleAngle</td><td>from / to</td><td><app-angle-picker data-state=\"{ object:editData.currParticleSystemInEdit.particleAngle, value:'from' }\"></app-angle-picker><app-angle-picker data-state=\"{ object:editData.currParticleSystemInEdit.particleAngle, value:'to' }\"></app-angle-picker></td></tr><tr><td></td><td>{{i18n.get('gameObject')}}</td><td><table><tr><td><select required data-change=\"onGameObjectSelected(editData.currParticleSystemInEdit.gameObjectProto)\" data-model=\"editData.currParticleSystemInEdit.gameObjectProto\"><option>--</option><option data-value=\"item\" data-for=\"item in editData.game.repository.getArray('GameObjectProto') track by id\">{{item.name}}</option></select></td><td><div data-style=\"utils.merge( utils.getGameObjectCss(editData.currParticleSystemInEdit.gameObjectProto), { zoom:utils.calcZoom(editData.currParticleSystemInEdit.gameObjectProto) } )\"></div></td></tr></table></td></tr></table><button data-disabled=\"!form.valid()\" data-click=\"createOrEditPs(editData.currParticleSystemInEdit)\">{{editData.currParticleSystemInEdit.id?i18n.get('edit'):i18n.get('create')}}</button><button data-disabled=\"!form.valid()\" data-click=\"showPreview()\">{{i18n.get('preview')}}</button></div></app-modal><app-particle-system-preview-dialog id=\"particleSystemPreviewDialog\"></app-particle-system-preview-dialog>";

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var baseComponent_1 = __webpack_require__(1);
var ParticleSystemDialog = (function (_super) {
    tslib_1.__extends(ParticleSystemDialog, _super);
    function ParticleSystemDialog() {
        return _super.call(this) || this;
    }
    ParticleSystemDialog.prototype.showPreview = function () {
        this.editData.currParticleSystemInEdit.revalidate();
        RF.getComponentById('particleSystemPreviewDialog').open();
    };
    ParticleSystemDialog.prototype.onGameObjectSelected = function (go) {
        if (!this.editData.currParticleSystemInEdit.name)
            this.editData.currParticleSystemInEdit.name =
                go.name + "ParticleSystem";
    };
    ParticleSystemDialog.prototype.createOrEditPs = function (model) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var resp;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.restResource.save(model)];
                    case 1:
                        resp = _a.sent();
                        if (resp.created) {
                            model.id = resp.id;
                            this.editData.game.repository.addObject(model);
                        }
                        else if (resp.updated) {
                            model.updateCloner();
                        }
                        RF.getComponentById('particleSystemModal').close();
                        return [2];
                }
            });
        });
    };
    ParticleSystemDialog = tslib_1.__decorate([
        RF.decorateComponent({
            name: 'app-particle-system-dialog',
            template: __webpack_require__(96)
        })
    ], ParticleSystemDialog);
    return ParticleSystemDialog;
}(baseComponent_1.BaseComponent));
exports.ParticleSystemDialog = ParticleSystemDialog;


/***/ }),
/* 98 */
/***/ (function(module, exports) {

module.exports = "<div><app-sound-dialog id=\"soundDialog\"></app-sound-dialog><app-particle-system-dialog></app-particle-system-dialog><app-font-dialog id=\"fontDialog\"></app-font-dialog><app-sprite-sheet-dialog id=\"spriteSheetDialog\"></app-sprite-sheet-dialog><app-game-object-dialog id=\"gameObjectDialog\"></app-game-object-dialog><app-scene-dialog></app-scene-dialog><app-layer-dialog></app-layer-dialog><app-build-dialog></app-build-dialog><app-script-dialog></app-script-dialog></div><app-color-picker-dialog id=\"colorPickerDialog\"></app-color-picker-dialog>";

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var baseComponent_1 = __webpack_require__(1);
var Dialogs = (function (_super) {
    tslib_1.__extends(Dialogs, _super);
    function Dialogs() {
        return _super.call(this) || this;
    }
    Dialogs = tslib_1.__decorate([
        RF.decorateComponent({
            name: 'app-dialogs',
            template: __webpack_require__(98)
        })
    ], Dialogs);
    return Dialogs;
}(baseComponent_1.BaseComponent));
exports.Dialogs = Dialogs;


/***/ }),
/* 100 */
/***/ (function(module, exports) {

module.exports = "<div><div class=\"cell width100\"><div data-style=\"utils.merge( utils.getGameObjectCss(gameObject), { zoom:utils.calcZoom(gameObject), transform: 'scale(1, 1) rotateZ(0deg)', opacity:1 } )\" data-draggable=\"draggable && {obj:gameObject,src: 'leftPanel'}\"></div></div><div class=\"cell\"><span class=\"inlineBlock withPaddingRight\"><span class=\"inlineBlock withPaddingTop withPaddingBottom\">{{gameObject.name}}</span></span></div><div class=\"cell width1\"><div data-if=\"crud && crud.editScript\" class=\"script\" data-click=\"crud.editScript(gameObject)\"></div></div><div class=\"cell width1\"><div data-if=\"crud && crud.edit\" class=\"edit\" data-click=\"crud.edit(gameObject)\"></div></div><div class=\"cell width1\"><div data-if=\"crud && crud.delete\" data-click=\"crud.delete(gameObject)\" class=\"delete\"></div></div></div>";

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var baseComponent_1 = __webpack_require__(1);
var GameObjectRow = (function (_super) {
    tslib_1.__extends(GameObjectRow, _super);
    function GameObjectRow() {
        var _this = _super.call(this) || this;
        _this.crud = null;
        _this.gameObject = {};
        _this.draggable = false;
        return _this;
    }
    GameObjectRow = tslib_1.__decorate([
        RF.decorateComponent({
            name: 'app-game-object-row',
            template: __webpack_require__(100)
        })
    ], GameObjectRow);
    return GameObjectRow;
}(baseComponent_1.BaseComponent));
exports.GameObjectRow = GameObjectRow;


/***/ }),
/* 102 */
/***/ (function(module, exports) {

module.exports = "<app-collapsible data-state=\"{ title: i18n.get('currGameObject') }\"><div data-transclusion=\"content\"><div data-if=\"!editData.currSceneGameObjectInEdit.id\">{{i18n.get('notSelected')}}</div><div class=\"withPadding\" data-if=\"editData.currSceneGameObjectInEdit.id\"><h3 class=\"centerText\">{{editData.currSceneGameObjectInEdit.type}}</h3><div class=\"table width100\"><div class=\"row\"><div class=\"cell\">id</div><div class=\"cell\">{{editData.currSceneGameObjectInEdit.id}}</div></div><div class=\"row\"><div class=\"cell\">name</div><div class=\"cell\"><input required data-change=\"editGameObject()\" class=\"width100\" data-model=\"editData.currSceneGameObjectInEdit.name\"></div></div><div class=\"row\"><div class=\"cell\">pos.x</div><div class=\"cell\"><input data-change=\"editGameObject()\" type=\"number\" class=\"width100\" required data-model=\"editData.currSceneGameObjectInEdit.pos.x\"></div></div><div class=\"row\"><div class=\"cell\">pos.y</div><div class=\"cell\"><input data-change=\"editGameObject()\" type=\"number\" class=\"width100\" required data-model=\"editData.currSceneGameObjectInEdit.pos.y\"></div></div><div class=\"row\"><div class=\"cell\">scale.x</div><div class=\"cell\"><input data-change=\"editGameObject()\" type=\"number\" step=\"0.1\" class=\"width100\" required data-model=\"editData.currSceneGameObjectInEdit.scale.x\"></div></div><div class=\"row\"><div class=\"cell\">scale.y</div><div class=\"cell\"><input data-change=\"editGameObject()\" type=\"number\" step=\"0.1\" class=\"width100\" required data-model=\"editData.currSceneGameObjectInEdit.scale.y\"></div></div><div class=\"row\"><div class=\"cell\">{{i18n.get('width')}}</div><div class=\"cell\"><input data-change=\"editGameObject()\" type=\"number\" class=\"width100\" step=\"1\" required data-model=\"editData.currSceneGameObjectInEdit.width\"></div></div><div class=\"row\"><div class=\"cell\">{{i18n.get('height')}}</div><div class=\"cell\"><input data-change=\"editGameObject()\" type=\"number\" class=\"width100\" step=\"1\" required data-model=\"editData.currSceneGameObjectInEdit.height\"></div></div><div class=\"row\"><div class=\"cell\">{{i18n.get('angle')}}</div><div class=\"cell\"><input data-change=\"editGameObject()\" type=\"number\" class=\"width100\" step=\"0.1\" required data-model=\"editData.currSceneGameObjectInEdit.angle\"></div></div><div class=\"row\"><div class=\"cell\">alpha</div><div class=\"cell\"><input data-change=\"editGameObject()\" type=\"number\" class=\"width100\" step=\"0.1\" required min=\"0\" max=\"1\" data-model=\"editData.currSceneGameObjectInEdit.alpha\"></div></div><div class=\"row\"><div class=\"cell\">{{i18n.get('fixedToCamera')}}</div><div class=\"cell\"><input data-change=\"editGameObject()\" type=\"checkbox\" data-model=\"editData.currSceneGameObjectInEdit.fixedToCamera\" /></div></div><div class=\"row\"><div class=\"cell\">{{i18n.get('rigid')}}</div><div class=\"cell\"><input data-change=\"editGameObject()\" type=\"checkbox\" data-model=\"editData.currSceneGameObjectInEdit.rigid\" /></div></div><div class=\"row\" data-if=\"editData.currSceneGameObjectInEdit.type=='TextField'\"><div class=\"cell\">{{i18n.get('text')}}</div><div class=\"cell\"><textarea data-model=\"editData.currSceneGameObjectInEdit.text\" data-change=\"setTextFieldText($event) || editGameObject()\"></textarea></div></div></div></div></div></app-collapsible>";

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var baseComponent_1 = __webpack_require__(1);
var GameObjectRightPanel = (function (_super) {
    tslib_1.__extends(GameObjectRightPanel, _super);
    function GameObjectRightPanel() {
        return _super.call(this) || this;
    }
    GameObjectRightPanel.prototype.editGameObject = function () {
        var model = this.editData.currSceneGameObjectInEdit;
        model.updateCloner();
        this.editData.game.repository.updateObject(model);
        this.restResource.save(model);
    };
    GameObjectRightPanel.prototype.setTextFieldText = function (e) {
        this.editData.currSceneGameObjectInEdit.setText(e.target.value);
    };
    GameObjectRightPanel = tslib_1.__decorate([
        RF.decorateComponent({
            name: 'app-game-object-right-panel',
            template: __webpack_require__(102)
        })
    ], GameObjectRightPanel);
    return GameObjectRightPanel;
}(baseComponent_1.BaseComponent));
exports.GameObjectRightPanel = GameObjectRightPanel;


/***/ }),
/* 104 */
/***/ (function(module, exports) {

module.exports = "<app-collapsible data-state=\"{title:i18n.get('currScene')}\"><div data-transclusion=\"content\"><div data-if=\"!editData.currSceneInEdit.id\">{{i18n.get('notSelected')}}</div><div class=\"withPadding\" data-if=\"editData.currSceneInEdit.id\"><b class=\"centerText\">{{i18n.get('scene')}} : {{editData.currSceneInEdit.name}}</b><div class=\"table width100\"><div class=\"row\"><div class=\"cell\"><label for=\"editData.currSceneInEdit.useBG\">{{i18n.get('useBG')}}</label></div><div class=\"cell\"><input type=\"checkbox\" id=\"editData.currSceneInEdit.useBG\" data-model=\"editData.currSceneInEdit.useBG\" data-change=\"editScene()\"></div></div><div class=\"row\"><div class=\"cell\">{{i18n.get('width')}}</div><div class=\"cell\"><input type=\"number\" data-model=\"editData.currSceneInEdit.width\" data-change=\"editScene()\"></div></div><div class=\"row\"><div class=\"cell\">{{i18n.get('height')}}</div><div class=\"cell\"><input type=\"number\" data-model=\"editData.currSceneInEdit.height\" data-change=\"editScene()\"></div></div><div class=\"row\" data-if=\"editData.currSceneInEdit.useBG\"><div class=\"cell\">{{i18n.get('colorBG')}}</div><div class=\"cell\"><app-color-picker data-state=\"{ model:editData.currSceneInEdit, field: 'colorBG', onChange: editScene }\"></app-color-picker></div></div><div class=\"row\"><div class=\"cell\"><hr></div><div class=\"cell\"><hr></div></div><div class=\"row\"><div class=\"cell valign bold\">{{i18n.get('tileMap')}}</div><div class=\"cell\"><div data-click=\"createTileMap()\" data-if=\"!editData.currSceneInEdit.tileMap.id\" class=\"add\"></div><div data-if=\"editData.currSceneInEdit.tileMap.id\" class=\"delete\"></div></div></div></div><div data-if=\"editData.currSceneInEdit.tileMap.id\" class=\"table width100\"><div class=\"row\"><div class=\"cell valign\">tileMap.width</div><div class=\"cell\"><input type=\"number\" min=\"0\" maxlength=\"3\" data-change=\"editTileMap()\" data-model=\"editData.currSceneInEdit.tileMap.width\"></div></div><div class=\"row\"><div class=\"cell valign\">tileMap.height</div><div class=\"cell\"><input type=\"number\" min=\"0\" maxlength=\"3\" data-change=\"editTileMap()\" data-model=\"editData.currSceneInEdit.tileMap.height\"></div></div><div class=\"row\"><div class=\"cell\">{{i18n.get('selected')}}</div><div class=\"cell\"><div data-class=\"{ inlineBlock:1, hoverOutline:1 }\" data-style=\"{ width:utils.tileFrameWidth()+'px', verticalAlign:'middle', height:utils.tileFrameHeight()+'px', backgroundImage: utils.tileResourcePath({strict:true}), backgroundPositionX: -utils.tileFramePosX(editData.currTileIndexInEdit)+'px', backgroundPositionY: -utils.tileFramePosY(editData.currTileIndexInEdit)+'px', backgroundRepeat: 'no-repeat' }\"></div><button data-if=\"editData.currTileIndexInEdit!=null\" data-click=\"utils.assign(editData,'currTileIndexInEdit',null)\">{{i18n.get('unset')}}</button></div></div><div class=\"row\"><div class=\"cell\">{{i18n.get('spriteSheets')}}</div><div class=\"cell\"><select data-change=\"editTileMap()\" data-model=\"editData.currSceneInEdit.tileMap.spriteSheet\"><option value>--</option><option data-for=\"item in editData.game.repository.getArray('SpriteSheet') track by id\" data-value=\"item\">{{item.name}}</option></select></div></div></div><div class=\"row\"><div data-click=\"toggleEditMode()\" data-class=\"{ editModeOn:editData.editTileMapModeOn, edit:1 }\"></div><span class=\"small\">(shift)</span></div><div data-style=\"{ width: utils.tileFrameWidth()*utils.tileNumOfFramesH()+'px', overflowX: 'auto', padding: '2px' }\"><div data-class=\"{ inlineBlock:true, selected:i==editData.currTileIndexInEdit, hoverOutline:1 }\" data-style=\"{ width:utils.tileFrameWidth()+'px', verticalAlign:'middle', height:utils.tileFrameHeight()+'px', backgroundImage: utils.tileResourcePath(), backgroundPositionX: -utils.tileFramePosX(i)+'px', backgroundPositionY: -utils.tileFramePosY(i)+'px', backgroundRepeat: 'no-repeat' }\" data-title=\"i\" data-click=\"setCurrSelectedTile(i)\" data-for=\"v,i in utils.getArray(numOfFramesForSceneSpriteSheet())\"></div></div></div></div></app-collapsible>";

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var baseComponent_1 = __webpack_require__(1);
__webpack_require__(200);
var tileMap_1 = __webpack_require__(42);
var SceneRightPanel = (function (_super) {
    tslib_1.__extends(SceneRightPanel, _super);
    function SceneRightPanel() {
        var _this = _super.call(this) || this;
        var keyPressed = false;
        document.addEventListener('keydown', function (e) {
            if (keyPressed)
                return;
            keyPressed = true;
            if (e.keyCode === 16) {
                _this.toggleEditMode();
                RF.digest();
            }
        });
        document.addEventListener('keyup', function (e) {
            keyPressed = false;
            if (e.keyCode === 16) {
                _this.toggleEditMode();
                RF.digest();
            }
        });
        return _this;
    }
    SceneRightPanel.prototype.numOfFramesForSceneSpriteSheet = function () {
        var editData = this.editData;
        if (!editData.currSceneInEdit)
            return 0;
        if (!editData.currSceneInEdit.tileMap)
            return 0;
        if (!editData.currSceneInEdit.tileMap.spriteSheet)
            return 0;
        return (editData.currSceneInEdit.tileMap.spriteSheet.numOfFramesV *
            editData.currSceneInEdit.tileMap.spriteSheet.numOfFramesH) || 0;
    };
    SceneRightPanel.prototype.createTileMap = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var currScene, t, res;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        currScene = this.editData.currSceneInEdit;
                        t = new tileMap_1.TileMap(this.editData.game);
                        return [4, this.restResource.save(t)];
                    case 1:
                        res = _a.sent();
                        t.id = res.id;
                        this.editData.game.repository.addObject(t);
                        currScene.tileMap = t;
                        return [4, this.restResource.save(currScene)];
                    case 2:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    SceneRightPanel.prototype.setCurrSelectedTile = function (i) {
        this.editData.currTileIndexInEdit = i;
    };
    SceneRightPanel.prototype.editScene = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.restResource.save(this.editData.currSceneInEdit)];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    SceneRightPanel.prototype.toggleEditMode = function () {
        this.editData.editTileMapModeOn = !this.editData.editTileMapModeOn;
    };
    SceneRightPanel.prototype.editTileMap = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var currScene, tileMap;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        currScene = this.editData.currSceneInEdit;
                        tileMap = currScene.tileMap;
                        return [4, this.restResource.save(tileMap)];
                    case 1:
                        _a.sent();
                        this.editData.game.repository.updateObject(tileMap);
                        return [2];
                }
            });
        });
    };
    SceneRightPanel = tslib_1.__decorate([
        RF.decorateComponent({
            name: 'app-scene-right-panel',
            template: __webpack_require__(104)
        })
    ], SceneRightPanel);
    return SceneRightPanel;
}(baseComponent_1.BaseComponent));
exports.SceneRightPanel = SceneRightPanel;


/***/ }),
/* 106 */
/***/ (function(module, exports) {

module.exports = "<table><tr><td></td><td><button data-click=\"onKeyUp()\">&uarr;</button></td><td></td></tr><tr><td><button data-click=\"onKeyLeft()\">&larr;</button></td><td></td><td><button data-click=\"onKeyRight()\">&rarr;</button></td></tr><tr><td></td><td><button data-click=\"onKeyDown()\">&darr;</button></td><td></td></tr></table>";

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var baseComponent_1 = __webpack_require__(1);
var SceneCursor = (function (_super) {
    tslib_1.__extends(SceneCursor, _super);
    function SceneCursor() {
        return _super.call(this) || this;
    }
    SceneCursor.prototype.onKeyUp = function () {
        this.editData.tileMapPosY -= 1;
    };
    SceneCursor.prototype.onKeyLeft = function () {
        this.editData.tileMapPosX -= 1;
    };
    SceneCursor.prototype.onKeyRight = function () {
        this.editData.tileMapPosX += 1;
    };
    SceneCursor.prototype.onKeyDown = function () {
        this.editData.tileMapPosY += 1;
    };
    SceneCursor = tslib_1.__decorate([
        RF.decorateComponent({
            name: 'app-scene-cursor',
            template: __webpack_require__(106)
        })
    ], SceneCursor);
    return SceneCursor;
}(baseComponent_1.BaseComponent));
exports.SceneCursor = SceneCursor;


/***/ }),
/* 108 */
/***/ (function(module, exports) {

module.exports = "<div class=\"height100 relative noOverFlow\" data-droppable=\"onDropFromLeftPanel\" data-click=\"onCentralSceneClick($event)\" data-style=\"{ backgroundColor: editData.currSceneInEdit.useBG?utils.rgbToCss(editData.currSceneInEdit.colorBG):'white' }\" data-draggable-container id=\"sceneDiv\"><div data-for=\"item in editData.currLayerInEdit.children\"><div data-if=\"item.type=='GameObject'\" app-draggable=\"{ target: item, onDragEnd: onDropFromCentralPanel }\" data-click=\"utils.assign(editData,'currSceneGameObjectInEdit',item)\" data-style=\"utils.merge( utils.getGameObjectCss(item), { position:'absolute', left: item.fixedToCamera?(item.pos.x+'px'): item.pos.x - utils.tileFrameWidth() * editData.tileMapPosX + 'px', top: item.fixedToCamera?(item.pos.y+'px'): item.pos.y - utils.tileFrameHeight() * editData.tileMapPosY + 'px', } )\" data-class=\"{active:item==editData.currSceneGameObjectInEdit}\"></div><div data-if=\"item.type=='TextField'\" app-draggable=\"{ target: item, onDragEnd: onDropFromCentralPanel }\" data-click=\"utils.assign(editData,'currSceneGameObjectInEdit',item)\" data-style=\"utils.merge( utils.getGameObjectCss(item), { position:'absolute', left: item.pos.x - item.width * editData.tileMapPosX + 'px', top: item.pos.y - item.height * editData.tileMapPosY + 'px', backgroundColor:'rgb(0,222,0.1)', height:item.height+'px', width:item.width?item.width+'px':'10px', backgroundColor:item.width?'':'#ddd', backgroundImage:'none' } )\" data-class=\"{active:item==editData.currSceneGameObjectInEdit}\"><div style=\"position: relative;left:0;top:0;z-index:10\"><span data-style=\"getCharCss(item,ch)\" data-for=\"ch in item._chars\"></span></div></div></div></div>";

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
__webpack_require__(201);
var userDefinedFns_1 = __webpack_require__(5);
var baseComponent_1 = __webpack_require__(1);
var gameObjectProto_1 = __webpack_require__(15);
var gameObject_1 = __webpack_require__(20);
var point2d_1 = __webpack_require__(3);
var SceneCentralPanel = (function (_super) {
    tslib_1.__extends(SceneCentralPanel, _super);
    function SceneCentralPanel() {
        return _super.call(this) || this;
    }
    SceneCentralPanel.prototype.showThisTile = function (j, i) {
        if (j === undefined || i === undefined)
            return false;
        var editData = this.editData;
        if (!editData.currSceneInEdit.tileMap)
            return false;
        if (!editData.currSceneInEdit.tileMap.data)
            return false;
        var data = editData.currSceneInEdit.tileMap.data;
        var res = data[j] != null && data[j][i] != null;
        return res;
    };
    SceneCentralPanel.prototype.getTilePos = function (j, i) {
        var res = { x: 0, y: 0 };
        if (!this.editData.currSceneInEdit.tileMap)
            return res;
        var tileMapData = this.editData.currSceneInEdit.tileMap.data;
        var currCell = tileMapData[j] && tileMapData[j][i] && tileMapData[j][i];
        if (!currCell)
            return res;
        var index = currCell.index;
        var editData = this.editData;
        return {
            x: editData.currSceneInEdit.tileMap.spriteSheet.getFramePosX(index),
            y: editData.currSceneInEdit.tileMap.spriteSheet.getFramePosY(index)
        };
    };
    SceneCentralPanel.prototype.getCharCss = function (item, ch) {
        if (!item)
            return;
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
    SceneCentralPanel.prototype.onDropFromCentralPanel = function (go, _a) {
        var x = _a.x, y = _a.y;
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var json;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        go.pos = { x: x, y: y };
                        json = go.toJSON();
                        json.type === 'GameObject' && Object.keys(json).forEach(function (key) {
                            if (!['id', 'name', 'pos', 'font', 'scale', 'angle', 'alpha', 'type', 'layerId', 'gameObjectProto'].includes(key))
                                delete json[key];
                        });
                        return [4, this.restResource.save(json, null)];
                    case 1:
                        _b.sent();
                        return [2];
                }
            });
        });
    };
    SceneCentralPanel.prototype.onDropFromLeftPanel = function (droppedObj, e, coords) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var x, y, editData, Clazz, objInScene, firstFont, allTextFields, size, resp, l;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!droppedObj)
                            return [2, null];
                        if (droppedObj.src !== 'leftPanel')
                            return [2, null];
                        x = e.offsetX - coords.mouseX;
                        y = e.offsetY - coords.mouseY;
                        editData = this.editData;
                        Clazz = droppedObj.obj instanceof gameObjectProto_1.GameObjectProto ? gameObject_1.GameObject : droppedObj.obj.constructor;
                        objInScene = new Clazz(editData.game);
                        if (('font' in objInScene) && !objInScene.font) {
                            firstFont = editData.game.repository.getFirst('Font');
                            if (!firstFont) {
                                userDefinedFns_1.alertEx(this.i18n.get('noFont'));
                                return [2];
                            }
                            objInScene.setFont(firstFont);
                            allTextFields = editData.game.repository.getArray('TextField');
                            size = (allTextFields && allTextFields.length) || 1;
                            objInScene['name'] = "textField" + size;
                            objInScene.setText(objInScene['name']);
                        }
                        objInScene.pos = new point2d_1.Point2d(x, y);
                        objInScene.layerId = editData.currLayerInEdit.id;
                        if (objInScene instanceof gameObject_1.GameObject)
                            objInScene.gameObjectProto = droppedObj.obj;
                        return [4, this.restResource.save(objInScene)];
                    case 1:
                        resp = _a.sent();
                        objInScene.id = resp.id;
                        editData.game.repository.addObject(objInScene);
                        editData.currLayerInEdit.appendChild(objInScene);
                        l = editData.currLayerInEdit;
                        l.updateCloner();
                        editData.game.repository.updateObject(l);
                        this.restResource.save(l);
                        objInScene.revalidate();
                        return [2];
                }
            });
        });
    };
    SceneCentralPanel.prototype.onCentralSceneClick = function (e) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var tileMap, coords, x, y, index, tile;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.editData.editTileMapModeOn)
                            return [2];
                        if (this.editData.currTileIndexInEdit === null)
                            return [2];
                        tileMap = this.editData.currSceneInEdit.tileMap;
                        if (!tileMap)
                            return [2, null];
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
                        return [4, this.restResource.saveTile(tile)];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    SceneCentralPanel = tslib_1.__decorate([
        RF.decorateComponent({
            name: 'app-scene-central-panel',
            template: __webpack_require__(108)
        })
    ], SceneCentralPanel);
    return SceneCentralPanel;
}(baseComponent_1.BaseComponent));
exports.SceneCentralPanel = SceneCentralPanel;


/***/ }),
/* 110 */
/***/ (function(module, exports) {

module.exports = "<div class=\"height100 relative\" data-if=\"editData.scriptEditorUrl\"><div class=\"scriptEditorClose\" data-click=\"close()\">X</div><div style=\"height:10px;font-size: 10px;\">{{editData.scriptEditorUrl}}</div><div id=\"scriptEditor\" style=\"height:calc(100% - 10px)\"><iframe id=\"scriptEditorFrame\" frameborder=\"0\" class=\"block width100 height100 noOverFlow\" src=\"/editor\"></div></div>";

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var baseComponent_1 = __webpack_require__(1);
__webpack_require__(202);
var ScriptEditor = (function (_super) {
    tslib_1.__extends(ScriptEditor, _super);
    function ScriptEditor() {
        return _super.call(this) || this;
    }
    ScriptEditor.prototype.close = function () {
        this.editData.scriptEditorUrl = '';
    };
    ScriptEditor = tslib_1.__decorate([
        RF.decorateComponent({
            name: 'app-script-editor',
            template: __webpack_require__(110)
        })
    ], ScriptEditor);
    return ScriptEditor;
}(baseComponent_1.BaseComponent));
exports.ScriptEditor = ScriptEditor;


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var baseComponent_1 = __webpack_require__(1);
var PopupBlocked = (function (_super) {
    tslib_1.__extends(PopupBlocked, _super);
    function PopupBlocked() {
        return _super.call(this) || this;
    }
    PopupBlocked.prototype.openWindow = function () {
        RF.getComponentById('topPanel').openWindow();
        RF.getComponentById('popupBlockedModal').close();
    };
    PopupBlocked = tslib_1.__decorate([
        RF.decorateComponent({
            name: 'app-popup-blocked',
            template: "\n        <app-modal id=\"popupBlockedModal\">\n            <div data-transclusion=\"content\">\n                <div>\n                {{i18n.get('popupBlocked')}}\n                </div>\n                <button data-click=\"openWindow()\">{{i18n.get('tryAgain')}}</button>\n            </div>\n        </app-modal>\n    "
        })
    ], PopupBlocked);
    return PopupBlocked;
}(baseComponent_1.BaseComponent));
exports.PopupBlocked = PopupBlocked;


/***/ }),
/* 113 */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel withPadding pointer\"><div class=\"inlineBlock withPadding\" data-click=\"showBuildDialog()\">{{i18n.get('build')}}</div><div class=\"inlineBlock withPadding\" data-click=\"run()\">{{i18n.get('run')}}</div><div class=\"inlineBlock withPadding\" data-click=\"toExplorer()\">{{i18n.get('explorer')}}</div></div><app-popup-blocked></app-popup-blocked>";

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var baseComponent_1 = __webpack_require__(1);
var TopPanel = (function (_super) {
    tslib_1.__extends(TopPanel, _super);
    function TopPanel() {
        return _super.call(this) || this;
    }
    TopPanel.prototype.openWindow = function () {
        var buildOpts = this.editData.buildOpts;
        if (buildOpts.windowed) {
            this.w = window.open("/" + this.editData.projectName + "/out", this.editData.projectName, "\n                left=" + (window.screen.width - this.editData.game.width) / 2 + ",\n                top=" + (window.screen.height - this.editData.game.height) / 2 + ",\n                width=" + this.editData.game.width + ",\n                height=" + this.editData.game.height + ",\n                toolbar=0,resizable=0");
        }
        else {
            this.w = window.open('/' + this.editData.projectName + '/out');
        }
        return this.w;
    };
    TopPanel.prototype.run = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var w, buildOpts;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        w = this.w;
                        buildOpts = this.editData.buildOpts;
                        if (w && w.document && w.document.body) {
                            w.document.title = w.document.body.innerHTML = 'loading...';
                        }
                        return [4, this.http.get('/resource/generate', {
                                debug: buildOpts.debug ? '1' : '',
                                r: Math.random(),
                                projectName: this.editData.projectName,
                                minify: buildOpts.minify ? '1' : '',
                                embedResources: buildOpts.embedResources ? '1' : ''
                            })];
                    case 1:
                        _a.sent();
                        if (!w || w.closed) {
                            w = this.openWindow();
                            if (!w) {
                                RF.getComponentById('popupBlockedModal').open();
                            }
                        }
                        else {
                            w.location.reload();
                        }
                        w && w.focus();
                        return [2];
                }
            });
        });
    };
    TopPanel.prototype.showBuildDialog = function () {
        RF.getComponentById('buildModal').open();
    };
    TopPanel.prototype.toExplorer = function () {
        RF.Router.navigateTo('explorer');
    };
    TopPanel = tslib_1.__decorate([
        RF.decorateComponent({
            name: 'app-top-panel',
            template: __webpack_require__(113)
        })
    ], TopPanel);
    return TopPanel;
}(baseComponent_1.BaseComponent));
exports.TopPanel = TopPanel;


/***/ }),
/* 115 */
/***/ (function(module, exports) {

module.exports = "<app-collapsible data-state=\"{ title: i18n.get('userInterface') }\"><div data-transclusion=\"content\"><div class=\"withPaddingLeft\"><div class=\"table width100\"><div data-draggable=\"{obj:uiObject,src: 'leftPanel'}\" class=\"row\" data-for=\"uiObject in editData.ui\"><div class=\"cell\"><span class=\"inlineBlock withPaddingTop withPaddingBottom\">{{uiObject.type}}</span></div></div></div></div></div></app-collapsible>";

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var baseComponent_1 = __webpack_require__(1);
var UserInterface = (function (_super) {
    tslib_1.__extends(UserInterface, _super);
    function UserInterface() {
        return _super.call(this) || this;
    }
    UserInterface = tslib_1.__decorate([
        RF.decorateComponent({
            name: 'app-user-interface',
            template: __webpack_require__(115)
        })
    ], UserInterface);
    return UserInterface;
}(baseComponent_1.BaseComponent));
exports.UserInterface = UserInterface;


/***/ }),
/* 117 */
/***/ (function(module, exports) {

module.exports = "<app-collapsible data-transclusion-id=\"scenes\" data-state=\"{ crud: { create:createScene }, title: i18n.get('scenes') }\"><div data-transclusion=\"content:#scenes\"><div class=\"withPaddingLeft\" data-class=\"{ currScene:editData.currSceneInEdit==scene }\" data-for=\"scene in editData.game.repository.getArray('Scene')\" data-click=\"setCurrentScene(scene)\"><app-collapsible data-transclusion-id=\"currScene\" data-state=\"{ crud: { edit:editScene, delete:deleteScene, editScript: editScript }, object: scene, title: scene.name }\"><div data-transclusion=\"content:#currScene\"><div class=\"withPaddingLeft\"><app-collapsible data-transclusion-id=\"layers\" data-state=\"{ title: i18n.get('layers'), meta: scene, crud: { create: createLayer } }\"><div data-transclusion=\"content:#layers\"><div data-click=\"setCurrLayer(layer)\" data-for=\"layer in scene.layers\" class=\"withPaddingLeft\"><app-collapsible data-transclusion-id=\"currLayer\" data-state=\"{ object: layer, meta: scene, crud: { edit:editLayer, delete:deleteLayer }, title: layer.name }\"><div data-transclusion=\"content:#currLayer\"><div class=\"withPaddingLeft\"><div class=\"table width100\"><div data-class=\"{ currSceneGameObject: editData.currSceneGameObjectInEdit==gameObject }\" data-click=\"setCurrSceneGameObjectInEdit(gameObject)\" data-for=\"gameObject in layer.children\"><app-game-object-row data-state=\"{ gameObject: gameObject, crud: { delete: deleteGameObject }, }\"></app-game-object-row></div></div></div></div></app-collapsible></div></div></app-collapsible></div></div></app-collapsible></div></div></app-collapsible>";

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var baseComponent_1 = __webpack_require__(1);
__webpack_require__(203);
var userDefinedFns_1 = __webpack_require__(5);
var layer_1 = __webpack_require__(23);
var scene_1 = __webpack_require__(43);
var Scenes = (function (_super) {
    tslib_1.__extends(Scenes, _super);
    function Scenes() {
        return _super.call(this) || this;
    }
    Scenes.prototype.setCurrentScene = function (scene) {
        this.editData.currSceneInEdit = scene;
    };
    Scenes.prototype.setCurrSceneGameObjectInEdit = function (gameObject) {
        this.editData.currSceneGameObjectInEdit = gameObject;
    };
    Scenes.prototype.setCurrLayer = function (layer) {
        this.editData.currLayerInEdit = layer;
    };
    Scenes.prototype.createScene = function () {
        this.editData.currSceneInEdit = new scene_1.Scene(this.editData.game);
        RF.getComponentById('sceneModal').open();
    };
    Scenes.prototype.editScene = function (scene) {
        this.editData.currSceneInEdit = scene.clone();
        RF.getComponentById('sceneModal').open();
    };
    Scenes.prototype.deleteScene = function (scene) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var res;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (scene.layers && scene.layers.length > 0) {
                            userDefinedFns_1.alertEx(this.i18n.get('canNotDelete')(scene, scene.layers.rs));
                            return [2];
                        }
                        return [4, this.utils.deleteModel(scene)];
                    case 1:
                        res = _a.sent();
                        if (!res)
                            return [2];
                        return [4, this.restFileSystem.removeFile("scripts/" + scene.name + ".js")];
                    case 2:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    Scenes.prototype.createLayer = function (scene) {
        this.editData.currLayerInEdit = new layer_1.Layer(this.editData.game);
        this.editData.currLayerInEdit._scene = scene;
        RF.getComponentById('layerModal').open();
    };
    Scenes.prototype.editLayer = function (layer, scene) {
        this.editData.currLayerInEdit = new layer_1.Layer(this.editData.game);
        this.editData.currLayerInEdit._scene = scene;
        RF.getComponentById('layerModal').open();
    };
    Scenes.prototype.editScript = function (scene) {
        this.utils.openEditor("scripts/" + scene.name + ".js");
    };
    Scenes.prototype.deleteLayer = function (layer, scene) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var res;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (layer.children.length)
                            return [2, userDefinedFns_1.alertEx(this.i18n.get('canNotDelete')(layer, layer.children))];
                        return [4, this.utils.deleteModel(layer)];
                    case 1:
                        res = _a.sent();
                        if (!res)
                            return [2];
                        scene.layers.remove(function (it) { return it.id == layer.id; });
                        scene.updateCloner();
                        this.editData.game.repository.updateObject(scene);
                        this.restResource.save(scene);
                        return [2];
                }
            });
        });
    };
    Scenes.prototype.createGameObject = function () {
        console.log('create go invoked');
    };
    Scenes.prototype.editGameObject = function (scene) {
        console.log('edit go invoked', scene);
    };
    Scenes.prototype.deleteGameObject = function (model) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var l, res;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        l = this.editData.currLayerInEdit;
                        return [4, this.utils.deleteModel(model)];
                    case 1:
                        res = _a.sent();
                        if (!res)
                            return [2];
                        l.children.remove(function (it) { return it.id == model.id; });
                        l.updateCloner();
                        this.editData.game.repository.updateObject(l);
                        this.restResource.save(l);
                        return [2];
                }
            });
        });
    };
    Scenes = tslib_1.__decorate([
        RF.decorateComponent({
            name: 'app-scenes',
            template: __webpack_require__(117)
        })
    ], Scenes);
    return Scenes;
}(baseComponent_1.BaseComponent));
exports.Scenes = Scenes;


/***/ }),
/* 119 */
/***/ (function(module, exports) {

module.exports = "<app-collapsible data-state=\"{ title: i18n.get('gameObjects'), crud: { create:createGameObject } }\"><div data-transclusion=\"content\"><div class=\"withPaddingLeft\"><div class=\"table width100\"><div class=\"row\" data-for=\"gameObject in editData.game.repository.getArray('GameObjectProto')\"><app-game-object-row data-state=\"{ crud: { edit: editGameObject, editScript: editGameObjectScript, delete: deleteGameObject }, gameObject: gameObject || {}, draggable: true }\"></app-game-object-row></div></div></div></div></app-collapsible>";

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var baseComponent_1 = __webpack_require__(1);
var all_1 = __webpack_require__(33);
var userDefinedFns_1 = __webpack_require__(5);
var GameObjects = (function (_super) {
    tslib_1.__extends(GameObjects, _super);
    function GameObjects() {
        return _super.call(this) || this;
    }
    GameObjects.prototype.createGameObject = function () {
        this.editData.currGameObjectInEdit = new all_1.GameObjectProto(this.editData.game);
        RF.getComponentById('gameObjectModal').open();
    };
    GameObjects.prototype.editGameObjectScript = function (model) {
        this.utils.openEditor("scripts/" + model.name + ".js");
    };
    GameObjects.prototype.editGameObject = function (go) {
        this.editData.currGameObjectInEdit = go.clone();
        RF.getComponentById('gameObjectModal').open();
    };
    GameObjects.prototype.deleteGameObject = function (model) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var scenesUsed, res;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        scenesUsed = [];
                        this.editData.game.repository.getArray('Scene').forEach(function (s) {
                            s.layers.forEach(function (l) {
                                l.gameObjects.forEach(function (go) {
                                    if (go.name == model.name) {
                                        if (scenesUsed.indexOf(s) == -1)
                                            scenesUsed.push(s);
                                    }
                                });
                            });
                        });
                        if (scenesUsed.length)
                            return [2, userDefinedFns_1.alertEx(this.i18n.get('canNotDelete')(model, scenesUsed))];
                        return [4, this.utils.deleteModel(model)];
                    case 1:
                        res = _a.sent();
                        if (!res)
                            return [2];
                        this.restFileSystem.removeFile("scripts/" + model.name + ".js");
                        return [2];
                }
            });
        });
    };
    GameObjects = tslib_1.__decorate([
        RF.decorateComponent({
            name: 'app-game-objects',
            template: __webpack_require__(119)
        })
    ], GameObjects);
    return GameObjects;
}(baseComponent_1.BaseComponent));
exports.GameObjects = GameObjects;


/***/ }),
/* 121 */
/***/ (function(module, exports) {

module.exports = "<app-collapsible data-state=\"{ crud: { create:createScript }, title: i18n.get('scripts') }\"><div data-transclusion=\"content\"><div>./custom</div><div class=\"withPadding\"><div class=\"table width100\"><div class=\"row\" data-for=\"script,i in editData.customScripts\"><div class=\"cell\"><span class=\"inlineBlock withPaddingTop withPaddingBottom\">{{script.name}}</span></div><div class=\"cell width1\"><div class=\"script\" data-click=\"editScript(script)\"></div></div><div class=\"cell width1\"><div class=\"edit\" data-click=\"editScriptName(script,i)\"></div></div><div class=\"cell width1\"><div class=\"delete\" data-click=\"deleteScript(script)\"></div></div></div></div></div></div></app-collapsible>";

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var baseComponent_1 = __webpack_require__(1);
var userDefinedFns_1 = __webpack_require__(5);
var editData_1 = __webpack_require__(9);
var Scripts = (function (_super) {
    tslib_1.__extends(Scripts, _super);
    function Scripts() {
        return _super.call(this) || this;
    }
    Scripts.prototype.createScript = function () {
        editData_1.editData.currScriptInEdit = { id: 0, name: 'userScript' };
        RF.getComponentById('scriptModal').open();
    };
    Scripts.prototype.editScript = function (script) {
        editData_1.editData.currScriptInEdit = script;
        this.utils.openEditor("scripts/custom/" + script.name);
    };
    Scripts.prototype.deleteScript = function (script) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, userDefinedFns_1.confirmEx("delete script " + script.name + "?")];
                    case 1:
                        if (!_a.sent()) return [3, 3];
                        return [4, this.restFileSystem.removeFile("scripts/custom/" + script.name)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        editData_1.editData.customScripts.splice(script.index, 1);
                        return [2];
                }
            });
        });
    };
    Scripts.prototype.editScriptName = function (script, index) {
        script.id = index + 1;
        script.oldName = script.name;
        script.index = index;
        editData_1.editData.currScriptInEdit = script;
        RF.getComponentById('scriptModal').open();
    };
    Scripts = tslib_1.__decorate([
        RF.decorateComponent({
            name: 'app-scripts',
            template: __webpack_require__(121)
        })
    ], Scripts);
    return Scripts;
}(baseComponent_1.BaseComponent));
exports.Scripts = Scripts;


/***/ }),
/* 123 */
/***/ (function(module, exports) {

module.exports = "<app-collapsible data-state=\"{ title: i18n.get('spriteSheets'), crud: { create:createSpriteSheet } }\"><div data-transclusion=\"content\"><div class=\"withPaddingLeft\"><div class=\"table width100\"><div class=\"row\" data-for=\"spriteSheet in editData.game.repository.getArray('SpriteSheet')\"><div class=\"cell\"><img class=\"spriteSheetThumb\" data-attributes=\"{ src: editData.projectName+'/'+spriteSheet.getDefaultResourcePath() + '?lastRevalidated=' + spriteSheet._lastRevalidated, width: spriteSheet.width, height: spriteSheet.height }\"></div><div class=\"cell\"><span class=\"inlineBlock withPaddingTop withPaddingBottom\">{{spriteSheet.name}}</span></div><div class=\"cell width1\"><div class=\"edit\" data-click=\"editSpriteSheet(spriteSheet)\"></div></div><div class=\"cell width1\"><div class=\"delete\" data-click=\"deleteSpriteSheet(spriteSheet)\"></div></div></div></div></div></div></app-collapsible>";

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var baseComponent_1 = __webpack_require__(1);
__webpack_require__(204);
var spriteSheet_1 = __webpack_require__(24);
var userDefinedFns_1 = __webpack_require__(5);
var SpriteSheets = (function (_super) {
    tslib_1.__extends(SpriteSheets, _super);
    function SpriteSheets() {
        return _super.call(this) || this;
    }
    SpriteSheets.prototype.createSpriteSheet = function () {
        this.editData.currSpriteSheetInEdit = new spriteSheet_1.SpriteSheet(this.editData.game);
        RF.getComponentById('spriteSheetDialog').open();
    };
    SpriteSheets.prototype.editSpriteSheet = function (sprSh) {
        this.editData.currSpriteSheetInEdit = sprSh.clone();
        RF.getComponentById('spriteSheetDialog').open();
    };
    SpriteSheets.prototype.deleteSpriteSheet = function (model) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var hasDepends, res;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        hasDepends = this.editData.game.repository.getArray('GameObject').filter(function (it) { return it.spriteSheet.id == model.id; }).length > 0;
                        if (hasDepends) {
                            userDefinedFns_1.alertEx(this.i18n.canNotDelete(model));
                            return [2];
                        }
                        return [4, this.utils.deleteModel(model)];
                    case 1:
                        res = _a.sent();
                        if (!res)
                            return [2];
                        this.restFileSystem.removeFile(model.resourcePath);
                        return [2];
                }
            });
        });
    };
    SpriteSheets = tslib_1.__decorate([
        RF.decorateComponent({
            name: 'app-sprite-sheets',
            template: __webpack_require__(123)
        })
    ], SpriteSheets);
    return SpriteSheets;
}(baseComponent_1.BaseComponent));
exports.SpriteSheets = SpriteSheets;


/***/ }),
/* 125 */
/***/ (function(module, exports) {

module.exports = "<app-collapsible data-state=\"{ crud: {create:createFont}, title:i18n.get('fonts') }\"><div data-transclusion=\"content\"><div class=\"withPaddingLeft\"><div class=\"table width100\"><div class=\"row\" data-for=\"font in editData.game.repository.getArray('Font')\"><div class=\"cell\"><span class=\"inlineBlock withPaddingTop withPaddingBottom\">{{font.name}}</span></div><div class=\"cell width1\"><div class=\"edit\" data-click=\"editFont(font)\"></div></div><div class=\"cell width1\"><div class=\"delete\" data-click=\"deleteFont(font)\"></div></div></div></div></div></div></app-collapsible>";

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var baseComponent_1 = __webpack_require__(1);
var font_1 = __webpack_require__(41);
var Fonts = (function (_super) {
    tslib_1.__extends(Fonts, _super);
    function Fonts() {
        return _super.call(this) || this;
    }
    Fonts.prototype.createFont = function () {
        this.editData.currFontInEdit = new font_1.Font(this.editData.game);
        RF.getComponentById('fontDialog').open();
    };
    Fonts.prototype.editFont = function (fnt) {
        this.editData.currFontInEdit = fnt.clone();
        RF.getComponentById('fontDialog').open();
    };
    Fonts.prototype.deleteFont = function (model) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var res;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.utils.deleteModel(model)];
                    case 1:
                        res = _a.sent();
                        if (!res)
                            return [2];
                        this.restFileSystem.removeFile(model.resourcePath);
                        return [2];
                }
            });
        });
    };
    Fonts = tslib_1.__decorate([
        RF.decorateComponent({
            name: 'app-fonts',
            template: __webpack_require__(125)
        })
    ], Fonts);
    return Fonts;
}(baseComponent_1.BaseComponent));
exports.Fonts = Fonts;


/***/ }),
/* 127 */
/***/ (function(module, exports) {

module.exports = "<app-collapsible data-state=\"{ crud:{ create:createSound }, title:i18n.get('sounds') }\"><div data-transclusion=\"content\"><div class=\"withPaddingLeft\"><div class=\"table width100\"><div class=\"row\" data-for=\"sound in editData.game.repository.getArray('Sound')\"><div class=\"cell\"><span class=\"inlineBlock withPaddingTop withPaddingBottom\">{{sound.name}}</span></div><div class=\"cell width1\"><div class=\"edit\" data-click=\"editSound(sound)\"></div></div><div class=\"cell width1\"><div class=\"delete\" data-click=\"deleteSound(sound)\"></div></div></div></div></div></div></app-collapsible>";

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var baseComponent_1 = __webpack_require__(1);
var sound_1 = __webpack_require__(40);
var Sounds = (function (_super) {
    tslib_1.__extends(Sounds, _super);
    function Sounds() {
        return _super.call(this) || this;
    }
    Sounds.prototype.createSound = function () {
        this.editData.currSoundInEdit = new sound_1.Sound(this.editData.game);
        RF.getComponentById('soundDialog').open();
    };
    Sounds.prototype.editSound = function (sound) {
        this.editData.currSoundInEdit = sound.clone();
        RF.getComponentById('soundDialog').open();
    };
    Sounds.prototype.deleteSound = function (model) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var res;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.utils.deleteModel(model)];
                    case 1:
                        res = _a.sent();
                        if (!res)
                            return [2];
                        this.restFileSystem.removeFile(model.resourcePath);
                        return [2];
                }
            });
        });
    };
    Sounds = tslib_1.__decorate([
        RF.decorateComponent({
            name: 'app-sounds',
            template: __webpack_require__(127)
        })
    ], Sounds);
    return Sounds;
}(baseComponent_1.BaseComponent));
exports.Sounds = Sounds;


/***/ }),
/* 129 */
/***/ (function(module, exports) {

module.exports = "<app-collapsible data-state=\"{ crud:{ create:createParticleSystem }, title:i18n.get('particleSystems') }\"><div data-transclusion=\"content\"><div class=\"withPaddingLeft\"><div class=\"table width100\"><div class=\"row\" data-for=\"ps in editData.game.repository.getArray('ParticleSystem')\"><div class=\"cell\"><span class=\"inlineBlock withPaddingTop withPaddingBottom\">{{ps.name}}</span></div><div class=\"cell width1\"><div class=\"edit\" data-click=\"editParticleSystem(ps)\"></div></div><div class=\"cell width1\"><div class=\"delete\" data-click=\"deleteParticleSystem(ps)\"></div></div></div></div></div></div></app-collapsible>";

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var baseComponent_1 = __webpack_require__(1);
var particleSystem_1 = __webpack_require__(39);
var userDefinedFns_1 = __webpack_require__(5);
var ParticleSystems = (function (_super) {
    tslib_1.__extends(ParticleSystems, _super);
    function ParticleSystems() {
        return _super.call(this) || this;
    }
    ParticleSystems.prototype.createParticleSystem = function () {
        this.editData.currParticleSystemInEdit =
            new particleSystem_1.ParticleSystem(this.editData.game);
        var go = this.editData.game.repository.getArray('GameObjectProto')[0];
        if (!go) {
            userDefinedFns_1.alertEx(this.i18n.noGameObject);
            return;
        }
        RF.getComponentById('particleSystemModal').open();
    };
    ParticleSystems.prototype.editParticleSystem = function (ps) {
        this.editData.currParticleSystemInEdit = ps.clone();
        RF.getComponentById('particleSystemModal').open();
    };
    ParticleSystems.prototype.deleteParticleSystem = function (model) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.utils.deleteModel(model)];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    ParticleSystems = tslib_1.__decorate([
        RF.decorateComponent({
            name: 'app-particle-systems',
            template: __webpack_require__(129)
        })
    ], ParticleSystems);
    return ParticleSystems;
}(baseComponent_1.BaseComponent));
exports.ParticleSystems = ParticleSystems;


/***/ }),
/* 131 */
/***/ (function(module, exports) {

module.exports = "<app-collapsible data-state=\"{title:i18n.get('game')}\"><div data-transclusion=\"content\"><form class=\"table width100\"><div class=\"row\"><div class=\"cell\">{{i18n.get('width')}}</div><div class=\"cell\"><input class=\"narrow\" data-model=\"editData.game.width\" type=\"number\" min=\"1\" max=\"20000\" data-change=\"form.valid() && saveGameProps()\"></div></div><div class=\"row\"><div class=\"cell\">{{i18n.get('height')}}</div><div class=\"cell\"><input class=\"narrow\" data-model=\"editData.game.height\" type=\"number\" min=\"1\" max=\"20000\" data-change=\"form.valid() && saveGameProps()\"></div></div><div class=\"row\"><div class=\"cell\" tille=\"{{i18n.get('gravityConstantTitle')}}\">{{i18n.get('gravityConstant')}}</div><div class=\"cell\"><input class=\"narrow\" data-model=\"editData.game.gravityConstant\" type=\"number\" min=\"0\" max=\"20000\" data-change=\"form.valid() && saveGameProps()\"></div></div><div class=\"row\"><div class=\"cell\">{{i18n.get('scaleStrategy')}}</div><div class=\"cell\"><select data-model=\"editData.game.scaleStrategy\" data-change=\"form.valid() && saveGameProps()\"><option data-value=\"value\" data-for=\"value,key in scales\">{{key}}</option></select></div></div><div class=\"row\"><div class=\"cell\">{{i18n.get('preloadingScene')}}</div><div class=\"cell\"><select data-model=\"editData.game.preloadingSceneId\" data-change=\"form.valid() && saveGameProps()\"><option value>--</option><option data-disabled=\"item.id==editData.gameProps.startSceneId\" data-value=\"item.id\" data-for=\"item in editData.game.repository.getArray('Scene')\">{{item.name}}</option></select></div></div><div class=\"row\"><div class=\"cell\">{{i18n.get('startScene')}}</div><div class=\"cell\"><select data-model=\"editData.game.startSceneId\" data-change=\"form.valid() && saveGameProps()\"><option data-disabled=\"item.id==editData.gameProps.preloadingSceneId\" data-value=\"item.id\" data-for=\"item in editData.game.repository.getArray('Scene')\">{{item.name}}</option></select></div></div></form></div></app-collapsible>";

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var baseComponent_1 = __webpack_require__(1);
var consts_1 = __webpack_require__(34);
var GameProps = (function (_super) {
    tslib_1.__extends(GameProps, _super);
    function GameProps() {
        var _this = _super.call(this) || this;
        var scales = Object.assign({}, consts_1.SCALE_STRATEGY);
        Object.keys(scales).forEach(function (key) {
            if (parseInt(key) >= 0)
                delete scales[key];
        });
        _this.scales = scales;
        return _this;
    }
    GameProps.prototype.saveGameProps = function () {
        this.restResource.saveGameProps(this.editData.game.toJSON());
    };
    GameProps = tslib_1.__decorate([
        RF.decorateComponent({
            name: 'app-game-props',
            template: __webpack_require__(131)
        })
    ], GameProps);
    return GameProps;
}(baseComponent_1.BaseComponent));
exports.GameProps = GameProps;


/***/ }),
/* 133 */
/***/ (function(module, exports) {

module.exports = "<app-modal id=\"projectDialog\"><div data-transclusion=\"content\"><form data-submit=\"createOrEditProject(editData.currProjectInEdit)\"><table class=\"width100\"><tr><td>{{i18n.get('name')}}</td><td><input required data-model=\"editData.currProjectInEdit.name\"></td></tr></table><button>{{editData.currProjectInEdit.oldName?i18n.get('edit'):i18n.get('create')}}</button></form></div></app-modal>";

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var baseComponent_1 = __webpack_require__(1);
var ProjectDialog = (function (_super) {
    tslib_1.__extends(ProjectDialog, _super);
    function ProjectDialog() {
        return _super.call(this) || this;
    }
    ProjectDialog.prototype.createOrEditProject = function (proj) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!proj.oldName) return [3, 3];
                        return [4, this.restFileSystem.renameFolder('workspace/' + proj.oldName, 'workspace/' + proj.name)];
                    case 1:
                        _b.sent();
                        return [4, this.restProject.getAll(function (list) {
                                _this.editData.projects = list;
                            })];
                    case 2:
                        _b.sent();
                        return [3, 6];
                    case 3: return [4, this.restProject.create(proj.name)];
                    case 4:
                        _b.sent();
                        _a = this.editData;
                        return [4, this.restProject.getAll()];
                    case 5:
                        _a.projects = _b.sent();
                        _b.label = 6;
                    case 6:
                        RF.getComponentById('projectDialog').close();
                        return [2];
                }
            });
        });
    };
    ProjectDialog = tslib_1.__decorate([
        RF.decorateComponent({
            name: 'app-project-dialog',
            template: __webpack_require__(133)
        })
    ], ProjectDialog);
    return ProjectDialog;
}(baseComponent_1.BaseComponent));
exports.ProjectDialog = ProjectDialog;


/***/ }),
/* 135 */
/***/ (function(module, exports) {

module.exports = "<div class=\"template\"><div class=\"absolute\"><app-top-panel id=\"topPanel\"></app-top-panel></div><div id=\"c\" class=\"split\"><div id=\"a\" class=\"split split-horizontal content\"><app-game-props></app-game-props><app-scenes></app-scenes><app-game-objects></app-game-objects><app-sprite-sheets></app-sprite-sheets><app-scripts></app-scripts><app-user-interface></app-user-interface><app-fonts></app-fonts><app-sounds></app-sounds><app-particle-systems></app-particle-systems></div><div id=\"b\" class=\"split split-horizontal content relative\"><app-script-editor></app-script-editor><div data-if=\"!editData.scriptEditorUrl\" class=\"table width100 height100\"><div class=\"row\"><div class=\"cell height100 vAlign\"><div data-style=\"{ width: editData.game.width + 'px', height: editData.game.height + 'px', overflow: 'auto', border: '1px solid green', margin: '0 auto' }\"><app-scene-central-panel></app-scene-central-panel></div></div></div></div></div><div id=\"e\" class=\"split split-horizontal content\"><app-scene-right-panel></app-scene-right-panel><app-game-object-right-panel></app-game-object-right-panel></div></div><div id=\"d\" class=\"split content\"></div><app-dialogs></app-dialogs></div>";

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var baseComponent_1 = __webpack_require__(1);
__webpack_require__(205);
var Split = __webpack_require__(68);
var Editor = (function (_super) {
    tslib_1.__extends(Editor, _super);
    function Editor() {
        var _this = _super.call(this) || this;
        _this.splitMounted = false;
        return _this;
    }
    Editor.prototype.onMount = function () {
        if (this.splitMounted)
            return;
        this.splitMounted = true;
        var layoutSizes = {};
        layoutSizes.a = 15;
        layoutSizes.b = 70;
        layoutSizes.e = (100 - layoutSizes.a - layoutSizes.b);
        layoutSizes.c = 94;
        layoutSizes.d = (100 - layoutSizes.c);
        Split(['#a', '#b', '#e'], {
            sizes: [layoutSizes.a, layoutSizes.b, layoutSizes.e],
            gutterSize: 5,
            cursor: 'row-resize',
            minSize: 10
        });
        var vertical = Split(['#c', '#d'], {
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
    Editor = tslib_1.__decorate([
        RF.decorateComponent({
            name: 'editor',
            template: __webpack_require__(135)
        })
    ], Editor);
    return Editor;
}(baseComponent_1.BaseComponent));
exports.Editor = Editor;


/***/ }),
/* 137 */
/***/ (function(module, exports) {

module.exports = "<div><div class=\"width50 marginAuto\"><h3 class=\"centerText\">{{i18n.get('projects')}}</h3><div class=\"table width100\"><div data-for=\"p in editData.projects\" class=\"row hoverOnProjectRow\"><div class=\"cell width100\"><div data-click=\"openProject(p)\" class=\"withPadding pointer\">{{p.name}}</div></div><div class=\"cell rightAlign\"><div class=\"edit\" data-click=\"editProject(p)\"></div></div><div class=\"cell rightAlign\"><div data-click=\"deleteProject(p)\" class=\"delete\"></div></div></div><div class=\"row\"><div class=\"cell\"><div class=\"withPadding\"><div class=\"add\" data-click=\"createProject()\"></div></div></div></div></div></div><app-project-dialog></app-project-dialog></div>";

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var baseComponent_1 = __webpack_require__(1);
__webpack_require__(206);
var userDefinedFns_1 = __webpack_require__(5);
var Explorer = (function (_super) {
    tslib_1.__extends(Explorer, _super);
    function Explorer() {
        return _super.call(this) || this;
    }
    Explorer.prototype.onShow = function () {
    };
    Explorer.prototype.onMount = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.editData;
                        return [4, this.restProject.getAll()];
                    case 1:
                        _a.projects = _b.sent();
                        return [2];
                }
            });
        });
    };
    Explorer.prototype.editProject = function (p) {
        p.oldName = p.name;
        this.editData.currProjectInEdit = {
            name: p.name,
            oldName: p.name
        };
        RF.getComponentById('projectDialog').open();
    };
    Explorer.prototype.createProject = function () {
        this.editData.currProjectInEdit = {
            name: ''
        };
        RF.getComponentById('projectDialog').open();
    };
    Explorer.prototype.openProject = function (project) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.resourceHelper.loadProject(project.name)];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    Explorer.prototype.deleteProject = function (proj) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var res, _a;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4, userDefinedFns_1.confirmEx(this.i18n.get('confirmQuestion')(proj))];
                    case 1:
                        res = _b.sent();
                        if (!res) return [3, 4];
                        return [4, this.restFileSystem.deleteFolder('workspace/' + proj.name)];
                    case 2:
                        _b.sent();
                        _a = this.editData;
                        return [4, this.restProject.getAll()];
                    case 3:
                        _a.projects = _b.sent();
                        _b.label = 4;
                    case 4: return [2];
                }
            });
        });
    };
    Explorer = tslib_1.__decorate([
        RF.decorateComponent({
            name: 'explorer',
            template: __webpack_require__(137)
        })
    ], Explorer);
    return Explorer;
}(baseComponent_1.BaseComponent));
exports.Explorer = Explorer;


/***/ }),
/* 139 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "draggable", function() { return draggable; });

const draggable = (el,objVal)=>{

    let draggableContainer = el.closest('[data-draggable-container]');
    if (!draggableContainer) throw `[data-draggable-container] not specified`;

    let draggedInfo = null;
    let isMousePressed = false;
    el.addEventListener('mousedown',e=>{
        let rect = el.getBoundingClientRect();
        draggedInfo = {el,offsetX:e.screenX - rect.left,offsetY:e.screenY - rect.top};
        isMousePressed = true;
    });

    let onDragEnd = ()=>{
        isMousePressed = false;
        if (!(draggedInfo && draggedInfo.pos)) return;
        objVal.onDragEnd && objVal.onDragEnd(objVal.target,draggedInfo.pos);
        draggedInfo = null;
    };

    draggableContainer.addEventListener('mouseup',e=>{
        onDragEnd();
    });
    document.addEventListener('mouseleave',e=>{
        onDragEnd();
    });
    draggableContainer.addEventListener('mousemove',e=>{
        if (!draggedInfo) return;
        e.preventDefault();
        e.stopPropagation();
        let _isMousePressed = ('buttons' in e && e.buttons==1) || isMousePressed;
        if(!_isMousePressed) {
            draggedInfo = null;
            return;
        }
        let el = draggedInfo.el;
        let clientRect = draggableContainer.getBoundingClientRect();
        let x =  ~~(e.screenX - clientRect.left - draggedInfo.offsetX);
        let y =  ~~(e.screenY - clientRect.top  - draggedInfo.offsetY);
        let newCoords = {x,y};
        if (objVal.onDragMove) objVal.onDragMove(objVal.target,newCoords);
        draggedInfo.pos = draggedInfo.pos || {};
        draggedInfo.pos.x = x;
        draggedInfo.pos.y = y;
        el.style.left = `${x}px`;
        el.style.top = `${y}px`;
    });
};

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var draggable_js_1 = __webpack_require__(139);
var DraggableDirective = (function () {
    function DraggableDirective() {
    }
    DraggableDirective.prototype.onMount = function (el, objVal) {
        draggable_js_1.draggable(el, objVal);
    };
    DraggableDirective = tslib_1.__decorate([
        RF.decorateComponent({
            name: 'app-draggable'
        })
    ], DraggableDirective);
    return DraggableDirective;
}());
exports.DraggableDirective = DraggableDirective;


/***/ }),
/* 141 */
/***/ (function(module, exports) {

module.exports = "<div class=\"inlineBlock\" data-click=\"click($event)\" data-mousemove=\"mouseMove($event)\"><div data-container class=\"inlineBlock\"><svg viewBox=\"0 0 200 200\" width=\"30\" height=\"30\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"100\" cy=\"100\" r=\"100\" stroke=\"black\" stroke-width=\"1\" fill=\"white\"></circle><line id=\"line\" x1=\"100\" y1=\"100\" x2=\"200\" y2=\"100\" stroke=\"black\" stroke-width=\"2\" data-attributes=\"{transform:'rotate('+angleInDeg()+',100,100)'}\"></line></svg></div><div class=\"smallXX\" data-attributes=\"{title: object && (object[value]+' rad')}\">{{angleInDeg()}}&deg;</div></div>";

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var AnglePicker = (function () {
    function AnglePicker() {
        this.object = { val: 0 };
        this.value = 'val';
    }
    AnglePicker.prototype.angleInDeg = function () {
        if (!this.object)
            return 0;
        var res = (this.object[this.value] * 180 / Math.PI) % 360;
        return +(res.toFixed(2)) || 0;
    };
    AnglePicker.prototype.calcAngleFromEvent = function (e) {
        if (!this.object)
            return;
        var el = this.$el.querySelector('[data-container]');
        var rect = el.getBoundingClientRect();
        var x = e.clientX - rect.left, y = e.clientY - rect.top;
        var angle = Math.atan2((y - 15), (x - 15));
        if (angle < 0)
            angle = 2 * Math.PI + angle;
        angle = +(angle.toFixed(2)) || 0;
        this.object[this.value] = angle;
    };
    AnglePicker.prototype.click = function (e) {
        this.calcAngleFromEvent(e);
    };
    AnglePicker.prototype.mouseMove = function (e) {
        if (e.buttons !== 1)
            return;
        this.calcAngleFromEvent(e);
    };
    AnglePicker = tslib_1.__decorate([
        RF.decorateComponent({
            name: 'app-angle-picker',
            template: __webpack_require__(141)
        })
    ], AnglePicker);
    return AnglePicker;
}());
exports.AnglePicker = AnglePicker;


/***/ }),
/* 143 */
/***/ (function(module, exports) {

module.exports = "<app-modal id=\"colorPickerModal\" data-transclusion-id=\"colorPicker\"><div data-transclusion=\"content:#colorPicker\"><table><tr><td><input type=\"color\" data-model=\"currentColor.hex\" data-change=\"hexChanged()\"></td><td><input type=\"text\" data-model=\"currentColor.hex\" data-keyup=\"hexChanged()\"></td><td></td></tr><table class=\"width100\"><tr data-for=\"item in colorEnums\"><td data-style=\"{ color: item.left }\">{{item.left}}</td><td class=\"centerText\"><input class=\"vAlign\" type=\"range\" min=\"0\" max=\"255\" data-model=\"currentColor.RGB[item.key]\" data-input=\"rgbChanged()\" data-change=\"rgbChanged()\"><br><input class=\"small vAlign\" data-model=\"currentColor.RGB[item.key]\" data-change=\"rgbChanged()\"><hr></td><td data-style=\"{ color: item.right }\">{{item.right}}</td><td><div data-style=\"{ width: '5px', height: '5px', backgroundColor: getRawColor(currentColor.RGB,item.key) }\"></div></td></tr></table></table><button data-click=\"applyColor()\">{{i18n.get('edit')}}</button></div></app-modal>";

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rigidShapes_1 = __webpack_require__(62);
var rect_1 = __webpack_require__(2);
var mathEx = __webpack_require__(4);
var ColliderEngine = (function () {
    function ColliderEngine(game) {
        this.relaxationCount = 15;
        this.posCorrectionRate = 0.8;
        this.game = game;
    }
    ColliderEngine.prototype.positionalCorrection = function (s1, s2, collisionInfo) {
        var s1InvMass = s1.mInvMass;
        var s2InvMass = s2.mInvMass;
        var num = collisionInfo.getDepth() / (s1InvMass + s2InvMass) * this.posCorrectionRate;
        var correctionAmount = collisionInfo.getNormal().scale(num);
        s1.move(correctionAmount.scale(-s1InvMass));
        s2.move(correctionAmount.scale(s2InvMass));
    };
    ColliderEngine.prototype.resolveCollision = function (s1, s2, collisionInfo) {
        if ((s1.mInvMass === 0) && (s2.mInvMass === 0)) {
            return;
        }
        this.positionalCorrection(s1, s2, collisionInfo);
        var n = collisionInfo.getNormal();
        var start = collisionInfo.mStart.scale(s2.mInvMass / (s1.mInvMass + s2.mInvMass));
        var end = collisionInfo.mEnd.scale(s1.mInvMass / (s1.mInvMass + s2.mInvMass));
        var p = start.add(end);
        var r1 = p.subtract(s1.mCenter);
        var r2 = p.subtract(s2.mCenter);
        var v1 = s1.mVelocity.add(new rigidShapes_1.Vec2(-1 * s1.mAngularVelocity * r1.y, s1.mAngularVelocity * r1.x));
        var v2 = s2.mVelocity.add(new rigidShapes_1.Vec2(-1 * s2.mAngularVelocity * r2.y, s2.mAngularVelocity * r2.x));
        var relativeVelocity = v2.subtract(v1);
        var rVelocityInNormal = relativeVelocity.dot(n);
        if (rVelocityInNormal > 0) {
            return;
        }
        var newRestituion = Math.min(s1.mRestitution, s2.mRestitution);
        var newFriction = Math.min(s1.mFriction, s2.mFriction);
        var R1crossN = r1.cross(n);
        var R2crossN = r2.cross(n);
        var jN = -(1 + newRestituion) * rVelocityInNormal;
        jN = jN / (s1.mInvMass + s2.mInvMass +
            R1crossN * R1crossN * s1.mInertia +
            R2crossN * R2crossN * s2.mInertia);
        var impulse = n.scale(jN);
        s1.mVelocity = s1.mVelocity.subtract(impulse.scale(s1.mInvMass));
        s2.mVelocity = s2.mVelocity.add(impulse.scale(s2.mInvMass));
        if (!s1.fixedAngle)
            s1.mAngularVelocity -= R1crossN * jN * s1.mInertia;
        if (!s2.fixedAngle)
            s2.mAngularVelocity += R2crossN * jN * s2.mInertia;
        var tangent = relativeVelocity.subtract(n.scale(relativeVelocity.dot(n)));
        tangent = tangent.normalize().scale(-1);
        var R1crossT = r1.cross(tangent);
        var R2crossT = r2.cross(tangent);
        var jT = -(1 + newRestituion) * relativeVelocity.dot(tangent) * newFriction;
        jT = jT / (s1.mInvMass + s2.mInvMass + R1crossT * R1crossT * s1.mInertia + R2crossT * R2crossT * s2.mInertia);
        if (jT > jN) {
            jT = jN;
        }
        impulse = tangent.scale(jT);
        s1.mVelocity = s1.mVelocity.subtract(impulse.scale(s1.mInvMass));
        s2.mVelocity = s2.mVelocity.add(impulse.scale(s2.mInvMass));
        if (!s1.fixedAngle)
            s1.mAngularVelocity -= R1crossT * jT * s1.mInertia;
        if (!s2.fixedAngle)
            s2.mAngularVelocity += R2crossT * jT * s2.mInertia;
    };
    ColliderEngine.prototype.boundAndCollide = function (a, b, collisionInfo) {
        if (a.boundTest(b)) {
            if (a.collisionTest(b, collisionInfo)) {
                if (collisionInfo.getNormal().dot(b.mCenter.subtract(a.mCenter)) < 0) {
                    collisionInfo.changeDir();
                }
                this.resolveCollision(a, b, collisionInfo);
            }
        }
    };
    ColliderEngine.prototype.collision = function () {
        var _this = this;
        var rigidObjects = this.game.getCurrScene().getAllGameObjects().map(function (g) { return g.rigidBody; });
        var i, j, k;
        var collisionInfo = new rigidShapes_1.CollisionInfo();
        for (k = 0; k < this.relaxationCount; k++) {
            for (i = 0; i < rigidObjects.length; i++) {
                if (!rigidObjects[i])
                    continue;
                var tiles = this.game.getCurrScene().tileMap.getTilesAtRect(new rect_1.Rect(rigidObjects[i].mCenter.x - rigidObjects[i].mWidth / 2, rigidObjects[i].mCenter.y - rigidObjects[i].mHeight / 2, rigidObjects[i].mWidth, rigidObjects[i].mHeight));
                if (tiles.length) {
                    tiles.forEach(function (t) {
                        _this.boundAndCollide(rigidObjects[i], t.rect, collisionInfo);
                    });
                }
                for (j = i + 1; j < rigidObjects.length; j++) {
                    if (!rigidObjects[j])
                        continue;
                    this.boundAndCollide(rigidObjects[i], rigidObjects[j], collisionInfo);
                }
            }
        }
    };
    ColliderEngine.prototype.isIntersect = function (arr1, arr2) {
        return arr1.filter(function (value) { return arr2.indexOf(value) !== -1; }).length > 0;
    };
    ColliderEngine.prototype.boundAndCollideAcrade = function (a, b) {
        if (a.velocity.equal(0) && b.velocity.equal(0))
            return;
        var numOfIterations = 0;
        var isOverlapped = mathEx.overlapTest(a.getRect(), b.getRect());
        if (!isOverlapped)
            return;
        if (!a.rigid || !b.rigid) {
            a.trigger('overlap', b);
            b.trigger('overlap', a);
            return;
        }
        while (isOverlapped) {
            if (numOfIterations > 3)
                break;
            var dt = 0.01;
            a.pos.x += -a.velocity.x * dt;
            a.pos.y += -a.velocity.y * dt;
            b.pos.x += -b.velocity.x * dt;
            b.pos.y += -b.velocity.y * dt;
            isOverlapped = mathEx.overlapTest(a.getRect(), b.getRect());
            numOfIterations++;
        }
        a.trigger('collide', b);
        b.trigger('collide', a);
    };
    ColliderEngine.prototype.collisionArcade = function () {
        var rigidObjects = this.game.getCurrScene().getAllGameObjects();
        for (var i = 0; i < rigidObjects.length; i++) {
            for (var j = i + 1; j < rigidObjects.length; j++) {
                var a = rigidObjects[i], b = rigidObjects[j];
                if (this.isIntersect(a.collideWith, b.groupNames) ||
                    this.isIntersect(b.collideWith, a.groupNames)) {
                    this.boundAndCollideAcrade(a, b);
                }
            }
        }
    };
    return ColliderEngine;
}());
exports.ColliderEngine = ColliderEngine;


/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var allUIClasses = __webpack_require__(54);
var absoluteLayout_1 = __webpack_require__(51);
var UIBuilder = (function () {
    function UIBuilder(game) {
        this.game = game;
    }
    UIBuilder.normalizeSetterName = function (name) {
        return "set" + name[0].toUpperCase() + name.substr(1);
    };
    UIBuilder.prototype.resolveObjProperties = function (instance, obj) {
        var _this = this;
        Object.keys(obj).forEach(function (propName) {
            var _a, _b;
            if (propName === 'type')
                return;
            if (obj[propName].type) {
                if (obj[propName].name) {
                    obj[propName] = _this.game.repository.getArray(obj[propName].type).find(function (it) { return it.name == obj[propName].name; });
                    if (!obj[propName])
                        throw "can not find object {type:" + obj[propName].type + ",name:" + obj[propName].type + "}";
                }
                else
                    obj[propName] = _this.resolveObj(obj[propName].type, obj[propName]);
            }
            var setterName = UIBuilder.normalizeSetterName(propName);
            var hasSetter = instance[setterName] && instance[setterName].call;
            var hasProperty = propName in obj;
            if (true && !hasProperty && !hasSetter) {
                console.error(instance);
                throw "nor method " + setterName + " not property " + propName + " found";
            }
            if (hasSetter)
                (_a = instance[setterName]).call.apply(_a, [instance].concat(obj[propName]));
            else {
                if (instance[propName] && instance[propName].fromJSON)
                    instance[propName].fromJSON(obj[propName]);
                else if (instance[propName] && instance[propName].call)
                    (_b = instance[propName]).call.apply(_b, [instance].concat(obj[propName]));
                else {
                    if (!(propName in instance)) {
                        console.error(instance);
                        var constructorName = (instance.constructor && instance.constructor.name) || '';
                        throw "uiBuilder error: object " + constructorName + " has not property " + propName;
                    }
                    instance[propName] = obj[propName];
                }
            }
        });
    };
    UIBuilder.prototype.resolveObj = function (key, obj) {
        var clazz = allUIClasses[key];
        if (true && !clazz)
            throw "no such ui class: " + key;
        var instance = new clazz(this.game);
        this.resolveObjProperties(instance, obj);
        return instance;
    };
    UIBuilder.prototype.resolveAbsoluteLayout = function (props, arr) {
        var _this = this;
        var l = new absoluteLayout_1.AbsoluteLayout(this.game);
        this.resolveObjProperties(l, props);
        arr.forEach(function (v) {
            var firstKey = Object.keys(v)[0];
            l.appendChild(_this.resolveObj(firstKey, v[firstKey]));
        });
        l.testLayout();
        return l;
    };
    UIBuilder.prototype.build = function (desc) {
        var allKeys = Object.keys(desc);
        if (true && allKeys.length > 1)
            throw "only one root element is supported. Found: " + allKeys;
        var firstKey = Object.keys(desc)[0];
        var rootObj = desc[firstKey];
        if (firstKey === 'AbsoluteLayout')
            return this.resolveAbsoluteLayout(rootObj.properties, rootObj.children);
        else
            return this.resolveObj(firstKey, rootObj);
    };
    return UIBuilder;
}());
exports.UIBuilder = UIBuilder;


/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
if (true) {
    window.addEventListener("gamepadconnected", function (e) {
        console.log("Gamepad connected at index %d: %s. %d buttons, %d axes.", e.gamepad.index, e.gamepad.id, e.gamepad.buttons.length, e.gamepad.axes.length);
    });
    window.addEventListener("gamepaddisconnected", function (e) {
        console.log("Gamepad disconnected from index %d: %s", e.gamepad.index, e.gamepad.id);
    });
}
var GamePad = (function () {
    function GamePad(game) {
        this.game = game;
    }
    GamePad.prototype.update = function () {
        this.gamepads =
            (navigator.getGamepads && navigator.getGamepads()) ||
                (navigator.webkitGetGamepads && navigator.webkitGetGamepads()) ||
                navigator.webkitGamepads || navigator.mozGamepads ||
                navigator.msGamepads || navigator.gamepads || [];
        for (var i = 0, max = this.gamepads.length; i < max; i++) {
            var gp = this.gamepads[i];
            if (!gp)
                continue;
            var maxButtons = gp.buttons.length;
            if (maxButtons > 7)
                maxButtons = 7;
            for (var j = 0; j < maxButtons; j++) {
                var btn = gp.buttons[j];
                if (btn.pressed) {
                    this.game.keyboard.press(j);
                }
                else {
                    this.game.keyboard.release(j);
                }
            }
            if (gp.axes[0] === 0)
                continue;
            if (gp.axes[1] === 0)
                continue;
            var axis0 = ~~(gp.axes[0]);
            var axis1 = ~~(gp.axes[1]);
            if (axis0 === 1) {
                this.game.keyboard.press(this.game.keyboard.KEY.GAME_PAD_AXIS_RIGHT);
            }
            else {
                this.game.keyboard.release(this.game.keyboard.KEY.GAME_PAD_AXIS_RIGHT);
            }
            if (axis0 === -1) {
                this.game.keyboard.press(this.game.keyboard.KEY.GAME_PAD_AXIS_LEFT);
            }
            else {
                this.game.keyboard.release(this.game.keyboard.KEY.GAME_PAD_AXIS_LEFT);
            }
            if (axis1 === 1) {
                this.game.keyboard.press(this.game.keyboard.KEY.GAME_PAD_AXIS_DOWN);
            }
            else {
                this.game.keyboard.release(this.game.keyboard.KEY.GAME_PAD_AXIS_DOWN);
            }
            if (axis1 === -1) {
                this.game.keyboard.press(this.game.keyboard.KEY.GAME_PAD_AXIS_UP);
            }
            else {
                this.game.keyboard.release(this.game.keyboard.KEY.GAME_PAD_AXIS_UP);
            }
        }
    };
    return GamePad;
}());
exports.GamePad = GamePad;


/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var KEY_STATE;
(function (KEY_STATE) {
    KEY_STATE[KEY_STATE["KEY_JUST_PRESSED"] = 2] = "KEY_JUST_PRESSED";
    KEY_STATE[KEY_STATE["KEY_PRESSED"] = 1] = "KEY_PRESSED";
    KEY_STATE[KEY_STATE["KEY_JUST_RELEASED"] = 0] = "KEY_JUST_RELEASED";
    KEY_STATE[KEY_STATE["KEY_RELEASED"] = -1] = "KEY_RELEASED";
})(KEY_STATE || (KEY_STATE = {}));
var Keyboard = (function () {
    function Keyboard(game) {
        this.buffer = {};
        this.KEY = {
            SPACE: 32,
            A: 65,
            B: 66,
            C: 67,
            D: 68,
            E: 69,
            F: 70,
            G: 71,
            H: 72,
            I: 73,
            J: 74,
            K: 75,
            L: 76,
            M: 77,
            N: 78,
            O: 79,
            P: 80,
            Q: 81,
            R: 82,
            S: 83,
            T: 84,
            U: 85,
            V: 86,
            W: 87,
            X: 88,
            Y: 89,
            Z: 80,
            LEFT: 37,
            UP: 38,
            RIGHT: 39,
            DOWN: 40,
            GAME_PAD_1: 0,
            GAME_PAD_2: 1,
            GAME_PAD_3: 2,
            GAME_PAD_4: 3,
            GAME_PAD_5: 4,
            GAME_PAD_6: 5,
            GAME_PAD_7: 6,
            GAME_PAD_8: 7,
            GAME_PAD_AXIS_LEFT: 8,
            GAME_PAD_AXIS_RIGHT: 9,
            GAME_PAD_AXIS_UP: 10,
            GAME_PAD_AXIS_DOWN: 11
        };
        this.game = game;
    }
    Keyboard.prototype.press = function (key) {
        if (this.isPressed(key))
            return;
        this.buffer[key] = KEY_STATE.KEY_JUST_PRESSED;
    };
    Keyboard.prototype.release = function (key) {
        if (this.isReleased(key))
            return;
        this.buffer[key] = KEY_STATE.KEY_JUST_RELEASED;
    };
    Keyboard.prototype.isPressed = function (key) {
        return this.buffer[key] >= KEY_STATE.KEY_PRESSED;
    };
    Keyboard.prototype.isJustPressed = function (key) {
        return this.buffer[key] === KEY_STATE.KEY_JUST_PRESSED;
    };
    Keyboard.prototype.isReleased = function (key) {
        if (this.buffer[key] === undefined)
            return true;
        return this.buffer[key] <= KEY_STATE.KEY_JUST_RELEASED;
    };
    Keyboard.prototype.isJustReleased = function (key) {
        return this.buffer[key] === KEY_STATE.KEY_JUST_RELEASED;
    };
    Keyboard.prototype.update = function () {
        var _this = this;
        Object.keys(this.buffer).forEach(function (key) {
            var keyNum = (+key);
            if (_this.buffer[keyNum] === KEY_STATE.KEY_RELEASED)
                delete _this.buffer[keyNum];
            else if (_this.buffer[keyNum] === KEY_STATE.KEY_JUST_RELEASED)
                _this.buffer[keyNum] = KEY_STATE.KEY_RELEASED;
            if (_this.buffer[keyNum] === KEY_STATE.KEY_JUST_PRESSED) {
                _this.buffer[keyNum] = KEY_STATE.KEY_PRESSED;
            }
        });
    };
    Keyboard.prototype.listenTo = function () {
        var _this = this;
        this.keyDownListener = function (e) {
            var code = e.keyCode;
            _this.press(code);
        };
        this.keyUpListener = function (e) {
            var code = e.keyCode;
            _this.release(code);
        };
        window.addEventListener('keydown', this.keyDownListener);
        window.addEventListener('keyup', this.keyUpListener);
    };
    Keyboard.prototype.destroy = function () {
        window.removeEventListener('keydown', this.keyDownListener);
        window.removeEventListener('keyup', this.keyUpListener);
    };
    return Keyboard;
}());
exports.Keyboard = Keyboard;


/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var moveable_1 = __webpack_require__(50);
var Move2Dir = (function (_super) {
    tslib_1.__extends(Move2Dir, _super);
    function Move2Dir(game) {
        return _super.call(this, game) || this;
    }
    Move2Dir.prototype.manage = function (gameObject, parameters) {
        _super.prototype.manage.call(this, gameObject, parameters, Move2Dir.DIRS);
    };
    Move2Dir.prototype.stop = function () {
        _super.prototype.stop.call(this);
        this.gameObject.rigidBody.mAcceleration.x = 0;
        this.gameObject.rigidBody.mVelocity.x = 0;
    };
    Move2Dir.DIRS = ['Left', 'Right'];
    return Move2Dir;
}(moveable_1.Moveable));
exports.Move2Dir = Move2Dir;


/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var move2Dir_1 = __webpack_require__(148);
var Parameters = (function () {
    function Parameters() {
        this.velocity = 100;
        this.walkLeftAnimation = 'left';
        this.walkRightAnimation = 'right';
        this.idleLeftAnimation = 'idleLeft';
        this.idleRightAnimation = 'idleRight';
    }
    return Parameters;
}());
exports.Parameters = Parameters;
var Control2Dir = (function (_super) {
    tslib_1.__extends(Control2Dir, _super);
    function Control2Dir(game) {
        return _super.call(this, game) || this;
    }
    Control2Dir.prototype.manage = function (gameObject, parameters) {
        _super.prototype.manage.call(this, gameObject, parameters);
    };
    Control2Dir.prototype.onUpdate = function () {
        var keyboard = this.game.keyboard;
        var parameters = this.parameters;
        var go = this.gameObject;
        if (keyboard.isJustPressed(keyboard.KEY.LEFT) || keyboard.isJustPressed(keyboard.KEY.GAME_PAD_AXIS_LEFT)) {
            go.rigidBody.mAcceleration.x = -parameters['velocity'];
            this.go('Left');
        }
        if (keyboard.isJustPressed(keyboard.KEY.RIGHT) || keyboard.isJustPressed(keyboard.KEY.GAME_PAD_AXIS_RIGHT)) {
            go.rigidBody.mAcceleration.x = parameters['velocity'];
            this.go('Right');
        }
        if (keyboard.isJustReleased(keyboard.KEY.LEFT) || keyboard.isJustReleased(keyboard.KEY.GAME_PAD_AXIS_LEFT)) {
            this.stop();
        }
        else if (keyboard.isJustReleased(keyboard.KEY.RIGHT) || keyboard.isJustReleased(keyboard.KEY.GAME_PAD_AXIS_RIGHT)) {
            this.stop();
        }
    };
    return Control2Dir;
}(move2Dir_1.Move2Dir));
exports.Control2Dir = Control2Dir;


/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var moveable_1 = __webpack_require__(50);
var Move4Dir = (function (_super) {
    tslib_1.__extends(Move4Dir, _super);
    function Move4Dir(game) {
        return _super.call(this, game) || this;
    }
    Move4Dir.prototype.manage = function (gameObject, parameters) {
        _super.prototype.manage.call(this, gameObject, parameters, Move4Dir.DIRS);
    };
    Move4Dir.prototype.stop = function () {
        _super.prototype.stop.call(this);
        this.gameObject.rigidBody.mVelocity.x = 0;
        this.gameObject.rigidBody.mVelocity.y = 0;
    };
    Move4Dir.DIRS = ['Left', 'Right', 'Up', 'Down'];
    return Move4Dir;
}(moveable_1.Moveable));
exports.Move4Dir = Move4Dir;


/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var move4Dir_1 = __webpack_require__(150);
var Parameters = (function () {
    function Parameters() {
        this.velocity = 100;
        this.walkLeftAnimation = 'left';
        this.walkRightAnimation = 'right';
        this.walkUpAnimation = 'up';
        this.walkDownAnimation = 'down';
        this.idleLeftAnimation = 'idleLeft';
        this.idleRightAnimation = 'idleRight';
        this.idleUpAnimation = 'idleUp';
        this.idleDownAnimation = 'idleDown';
    }
    return Parameters;
}());
exports.Parameters = Parameters;
var Control4Dir = (function (_super) {
    tslib_1.__extends(Control4Dir, _super);
    function Control4Dir(game) {
        return _super.call(this, game) || this;
    }
    Control4Dir.prototype.manage = function (gameObject, parameters) {
        _super.prototype.manage.call(this, gameObject, parameters);
    };
    Control4Dir.prototype.onUpdate = function () {
        var keyboard = this.game.keyboard;
        var parameters = this.parameters;
        var go = this.gameObject;
        if (keyboard.isPressed(keyboard.KEY.UP) || keyboard.isPressed(keyboard.KEY.GAME_PAD_AXIS_UP)) {
            go.rigidBody.mVelocity.y = -parameters.velocity;
            this.go('Up');
        }
        if (keyboard.isPressed(keyboard.KEY.DOWN) || keyboard.isPressed(keyboard.KEY.GAME_PAD_AXIS_DOWN)) {
            go.rigidBody.mVelocity.y = parameters.velocity;
            this.go('Down');
        }
        if (keyboard.isPressed(keyboard.KEY.LEFT) || keyboard.isPressed(keyboard.KEY.GAME_PAD_AXIS_LEFT)) {
            go.rigidBody.mVelocity.x = -parameters.velocity;
            this.go('Left');
        }
        if (keyboard.isPressed(keyboard.KEY.RIGHT) || keyboard.isPressed(keyboard.KEY.GAME_PAD_AXIS_RIGHT)) {
            go.rigidBody.mVelocity.x = parameters.velocity;
            this.go('Right');
        }
        if (keyboard.isJustReleased(keyboard.KEY.LEFT) || keyboard.isPressed(keyboard.KEY.GAME_PAD_AXIS_LEFT)) {
            this.stop();
        }
        else if (keyboard.isJustReleased(keyboard.KEY.RIGHT) || keyboard.isPressed(keyboard.KEY.GAME_PAD_AXIS_RIGHT)) {
            this.stop();
        }
        else if (keyboard.isJustReleased(keyboard.KEY.UP) || keyboard.isPressed(keyboard.KEY.GAME_PAD_AXIS_UP)) {
            this.stop();
        }
        else if (keyboard.isJustReleased(keyboard.KEY.DOWN) || keyboard.isPressed(keyboard.KEY.GAME_PAD_AXIS_DOWN)) {
            this.stop();
        }
    };
    return Control4Dir;
}(move4Dir_1.Move4Dir));
exports.Control4Dir = Control4Dir;


/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var baseAbstractBehaviour_1 = __webpack_require__(38);
var DraggableBehaviour = (function (_super) {
    tslib_1.__extends(DraggableBehaviour, _super);
    function DraggableBehaviour(game) {
        var _this = _super.call(this, game) || this;
        _this.points = {};
        return _this;
    }
    DraggableBehaviour._getEventId = function (e) {
        return e.id || 1;
    };
    ;
    DraggableBehaviour.prototype.manage = function (gameObject, params) {
        var _this = this;
        this.gameObject = gameObject;
        this.gameObjectOnClick = gameObject.on('click', function (e) {
            _this.points[DraggableBehaviour._getEventId(e)] = {
                mX: e.objectX,
                mY: e.objectY,
                target: gameObject,
                preventDefault: function () {
                    this.defaultPrevented = true;
                },
                dragStartX: 0,
                dragStartY: 0
            };
        });
        var scene = this.game.getCurrScene();
        this.sceneOnMouseDown = scene.on('mouseDown', function (e) {
            var pointId = DraggableBehaviour._getEventId(e);
            var point = _this.points[pointId];
            if (!point)
                return;
            point.dragStartX = point.target.pos.x;
            point.dragStartY = point.target.pos.y;
        });
        this.sceneOnMouseMove = scene.on('mouseMove', function (e) {
            var pointId = DraggableBehaviour._getEventId(e);
            var point = _this.points[pointId];
            if (!point)
                return;
            if (!point.dragStart) {
                point.dragStart = true;
                gameObject.trigger('dragStart', point);
                if (point.defaultPrevented) {
                    delete _this.points[pointId];
                    return;
                }
            }
            gameObject.pos.x = e.screenX - point.mX;
            gameObject.pos.y = e.screenY - point.mY;
        });
        this.sceneOnMouseUp = scene.on('mouseUp', function (e) {
            var pointId = DraggableBehaviour._getEventId(e);
            var point = _this.points[pointId];
            if (!point)
                return;
            if (point.dragStart) {
                point.x = gameObject.pos.x;
                point.y = gameObject.pos.y;
                gameObject.trigger('dragStop', point);
            }
            delete _this.points[pointId];
        });
        this.blurListener = function (e) {
            scene.trigger('mouseUp', e);
        };
        this.game.renderer.container.addEventListener('mouseleave', this.blurListener);
    };
    DraggableBehaviour.prototype.destroy = function () {
        var scene = this.game.getCurrScene();
        this.game.renderer.container.removeEventListener('mouseleave', this.blurListener);
        this.gameObject.off('click', this.gameObjectOnClick);
        scene.off('mouseDown', this.sceneOnMouseDown);
        scene.off('mouseMove', this.sceneOnMouseMove);
        scene.off('mouseUp', this.sceneOnMouseUp);
    };
    return DraggableBehaviour;
}(baseAbstractBehaviour_1.BaseAbstractBehaviour));
exports.DraggableBehaviour = DraggableBehaviour;


/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var draggable_1 = __webpack_require__(152);
exports.Draggable = draggable_1.DraggableBehaviour;
var control4Dir_1 = __webpack_require__(151);
exports.Control4Dir = control4Dir_1.Control4Dir;
var control2Dir_1 = __webpack_require__(149);
exports.Control2Dir = control2Dir_1.Control2Dir;


/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var models = __webpack_require__(33);
var Repository = (function () {
    function Repository(game) {
        this._game = game;
        this.reset();
    }
    Repository.prototype.addDescription = function (desc, type) {
        if (!this.descriptions[type])
            this.descriptions[type] = [];
        this.descriptions[type].push(desc);
    };
    Repository.prototype.setDescriptions = function (descs) {
        var _this = this;
        Object.keys(descs).forEach(function (type) {
            descs[type].forEach(function (desc) {
                _this.addDescription(desc, type);
            });
        });
    };
    Repository.prototype.getObject = function (id, type, forceNew) {
        if (forceNew === void 0) { forceNew = false; }
        if (true && !type)
            throw 'repository.getObject: type not specified';
        if (true && id == null) {
            console.trace("id is null");
            throw "::getObject() id not specified for type " + type;
        }
        var Clazz = models[type];
        if (true && !Clazz) {
            throw "::getObject() undeclared object type " + type;
        }
        if (true && !this.descriptions[type])
            throw "not found description for type: " + type;
        var desc = this.descriptions[type].find(function (it) { return it.id == id; });
        if (!desc) {
            throw "can not find object \"" + type + "\" with id " + id;
        }
        if (forceNew || !this.cache[desc[id]])
            this.cache[id] = new Clazz(this._game).fromJSON(desc);
        return this.cache[id];
    };
    Repository.prototype.getFirst = function (type) {
        var all = this.getArray(type);
        if (!all.length)
            return null;
        return all[0];
    };
    Repository.prototype.addObject = function (obj) {
        if (true && !obj.id) {
            console.error(obj);
            throw "addObject: id is not provided";
        }
        if (!this.arrays[obj.type])
            this.arrays[obj.type] = [];
        this.arrays[obj.type].push(obj);
        if (!this.descriptions[obj.type])
            this.descriptions[obj.type] = [];
        this.descriptions[obj.type].push(obj.toJSON());
    };
    Repository.prototype.updateObject = function (obj, opts) {
        var json = obj.toJSON(opts);
        var index = this.descriptions[obj.type].findIndex(function (it) { return it.id == obj.id; });
        this.descriptions[obj.type][index] = json;
        var objInRepo = this.getObject(obj.id, obj.type, true);
        if (objInRepo)
            objInRepo.fromJSON(json);
    };
    Repository.prototype.removeObject = function (obj) {
        if (true && !this.arrays[obj.type])
            this.arrays[obj.type] = [];
        var index = this.arrays[obj.type].findIndex(function (it) { return it.id === obj.id; });
        this.arrays[obj.type].splice(index, 1);
        if (!this.descriptions[obj.type])
            this.descriptions[obj.type] = [];
        index = this.descriptions[obj.type].findIndex(function (it) { return it.id === obj.id; });
        this.descriptions[obj.type].splice(index, 1);
        delete this.cache[obj.id];
    };
    Repository.prototype.getArray = function (type) {
        var _this = this;
        if (true && !models[type])
            throw "getArray: unregistered type \"" + type + "\"";
        if (this.arrays[type])
            return this.arrays[type];
        var res = [];
        if (!this.descriptions[type])
            this.descriptions[type] = [];
        this.descriptions[type].forEach(function (desc) {
            if (true && (desc.id === null || desc.id === undefined)) {
                console.error(desc);
                throw "object id must me specified";
            }
            res.push(_this.getObject(desc.id, type));
        });
        return this.arrays[type] = res;
    };
    Repository.prototype.reset = function () {
        this.descriptions = {};
        this.arrays = {};
        this.cache = {};
    };
    return Repository;
}());
exports.Repository = Repository;


/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var isCocoonJS = !!(navigator.isCocoonJS);
var Device = (function () {
    function Device(game) {
    }
    Device.isCocoonJS = isCocoonJS;
    Device.scale = isCocoonJS ? (window.devicePixelRatio || 1) : 1;
    Device.isTouch = (typeof window !== 'undefined' && 'ontouchstart' in window);
    return Device;
}());
exports.Device = Device;


/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var image_1 = __webpack_require__(52);
var NinePatchImage = (function (_super) {
    tslib_1.__extends(NinePatchImage, _super);
    function NinePatchImage(game) {
        var _this = _super.call(this, game) || this;
        _this.a = 0;
        _this.b = 0;
        _this.c = 0;
        _this.d = 0;
        _this.drawingRect.observe(function () { _this.revalidate(); });
        return _this;
    }
    NinePatchImage.prototype.revalidate = function () {
        var r = this.drawingRect;
        var width = r.width, height = r.height;
        if (width < this.a + this.b)
            width = this.a + this.b;
        if (height < this.c + this.d)
            height = this.c + this.d;
        r.setWH(width, height);
    };
    NinePatchImage.prototype.setABCD = function (a, b, c, d) {
        if (b === undefined)
            b = a;
        if (c === undefined)
            c = b;
        if (d === undefined)
            d = c;
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
        this.revalidate();
    };
    NinePatchImage.prototype.draw = function () {
        this.game.renderer.drawNinePatch(this.getDefaultResourcePath(), this.drawingRect, this.filters, this.getDrawableInfo(), this.a, this.b, this.c, this.d);
    };
    return NinePatchImage;
}(image_1.Image));
exports.NinePatchImage = NinePatchImage;


/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var rect_1 = __webpack_require__(2);
var color_1 = __webpack_require__(28);
var global_1 = __webpack_require__(7);
var renderableModel_1 = __webpack_require__(45);
var Rectangle = (function (_super) {
    tslib_1.__extends(Rectangle, _super);
    function Rectangle(game) {
        var _this = _super.call(this, game) || this;
        _this.filters = [];
        _this.blendMode = '';
        _this.drawingRect = new rect_1.Rect();
        _this.color = color_1.Color.BLACK.clone();
        _this.lineWidth = 1;
        _this.fillColor = color_1.Color.RGB(100, 100, 100);
        _this.width = 16;
        _this.height = 16;
        return _this;
    }
    Rectangle.prototype.getDrawableInfo = function () {
        return { blendMode: this.blendMode, acceptLight: false };
    };
    Rectangle.prototype.draw = function () {
        var r = this.game.renderer;
        var rect = this.getRect();
        this.drawingRect.setXYWH(0, 0, rect.width, rect.height);
        if (this.fillColor) {
            r.fillRect(this.drawingRect, this.fillColor);
        }
        r.drawRect(this.drawingRect, this.color, this.lineWidth);
    };
    return Rectangle;
}(renderableModel_1.RenderableModel));
exports.Rectangle = Rectangle;
global_1._global['Rectangle'] = Rectangle;


/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var textField_1 = __webpack_require__(12);
var device_1 = __webpack_require__(155);
var size_1 = __webpack_require__(29);
var AbstractRenderer = (function () {
    function AbstractRenderer(game) {
        this.renderableCache = {};
        this.fullScreenSize = new size_1.Size(0, 0);
        this.game = game;
        if (device_1.Device.isCocoonJS) {
            var dpr = window.devicePixelRatio || 1;
            this.fullScreenSize.setW(window.innerWidth * dpr);
            this.fullScreenSize.setH(window.innerHeight * dpr);
        }
        else {
            this.fullScreenSize.setWH(this.game.width, this.game.height);
        }
    }
    AbstractRenderer.prototype.onResize = function () { };
    AbstractRenderer.prototype.requestFullScreen = function () {
        var element = this.container;
        if (element.requestFullScreen) {
            element.requestFullScreen();
        }
        else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        }
        else if (element.webkitRequestFullScreen) {
            element.webkitRequestFullScreen();
        }
    };
    AbstractRenderer.prototype.cancelFullScreen = function () {
        if (document.cancelFullScreen) {
            document.cancelFullScreen();
        }
        else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        }
        else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
        }
    };
    AbstractRenderer.prototype.beginFrameBuffer = function () { };
    AbstractRenderer.prototype.flipFrameBuffer = function (filters) { };
    AbstractRenderer.prototype.registerResize = function () {
        var _this = this;
        this.onResize();
        window.addEventListener('resize', function () { return _this.onResize(); });
    };
    AbstractRenderer.prototype.destroy = function () {
        window.removeEventListener('resize', this.onResize);
    };
    AbstractRenderer.prototype.getError = function () {
        return 0;
    };
    AbstractRenderer.prototype.drawImage = function (texturePath, srcRect, dstRect) { };
    AbstractRenderer.prototype.drawImageEx = function (texturePath, srcRect, dstRect, filters, drawableInfo) { };
    AbstractRenderer.prototype.drawNinePatch = function (texturePath, destRect, filters, drawableInfo, a, b, c, d) { };
    AbstractRenderer.prototype.drawTiledImage = function (texturePath, srcRect, dstRect, offset) { };
    AbstractRenderer.prototype.fillRect = function (rect, color) { };
    AbstractRenderer.prototype.drawRect = function (rect, color, lineWidth) { };
    AbstractRenderer.prototype.lockRect = function (rect) { };
    AbstractRenderer.prototype.unlockRect = function () { };
    AbstractRenderer.prototype.drawLine = function (x1, y1, x2, y2, color) { };
    AbstractRenderer.prototype.fillCircle = function (x, y, r, color) { };
    AbstractRenderer.prototype.resetTransform = function () { };
    AbstractRenderer.prototype.clear = function () { };
    AbstractRenderer.prototype.clearColor = function (c) { };
    AbstractRenderer.prototype.save = function () { };
    AbstractRenderer.prototype.restore = function () { };
    AbstractRenderer.prototype.translate = function (x, y, z) { };
    AbstractRenderer.prototype.scale = function (x, y, z) { };
    AbstractRenderer.prototype.rotateZ = function (a) { };
    AbstractRenderer.prototype.draw = function (renderable) {
    };
    AbstractRenderer.prototype.log = function (args) {
        if (false)
            {}
        var textField = this.debugTextField;
        if (!textField) {
            textField = new textField_1.TextField(this.game);
            textField.name = 'defaultName';
            textField.revalidate();
            this.debugTextField = textField;
        }
        var res = '';
        Array.prototype.slice.call(arguments).forEach(function (txt) {
            if (txt === undefined)
                txt = 'undefined';
            else if (txt === null)
                txt = 'null';
            else if (txt.toJSON) {
                txt = JSON.stringify(txt.toJSON(), null, 4);
            }
            else {
                if (typeof txt !== 'string') {
                    try {
                        txt = JSON.stringify(txt);
                    }
                    catch (e) { }
                }
            }
            if (typeof txt !== 'string')
                txt = txt.toString();
            res += txt + "\n";
        });
        textField.pos.x = 10;
        textField.pos.y = 10;
        textField.setText(textField.getText() + res);
    };
    AbstractRenderer.prototype.loadTextureInfo = function (textureId, onLoaded) { };
    AbstractRenderer.prototype.getTextureInfo = function (textureId) {
        return this.renderableCache[textureId];
    };
    AbstractRenderer.prototype.getResource = function (resourcePath) {
        return  false ?
            undefined :
            resourcePath;
    };
    return AbstractRenderer;
}());
exports.AbstractRenderer = AbstractRenderer;


/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var abstractRenderer_1 = __webpack_require__(158);
var consts_1 = __webpack_require__(34);
var AbstractCanvasRenderer = (function (_super) {
    tslib_1.__extends(AbstractCanvasRenderer, _super);
    function AbstractCanvasRenderer(game) {
        var _this = _super.call(this, game) || this;
        var container = document.createElement('canvas');
        document.body.appendChild(container);
        container.setAttribute('width', game.width.toString());
        container.setAttribute('height', game.height.toString());
        _this.container = container;
        return _this;
    }
    AbstractCanvasRenderer.prototype.onResize = function () {
        var canvas = this.container;
        if (this.game.scaleStrategy === consts_1.SCALE_STRATEGY.NO_SCALE)
            return;
        var canvasRatio = canvas.height / canvas.width;
        var windowRatio = window.innerHeight / window.innerWidth;
        var width;
        var height;
        if (windowRatio < canvasRatio) {
            height = window.innerHeight;
            width = height / canvasRatio;
        }
        else {
            width = window.innerWidth;
            height = width * canvasRatio;
        }
        this.game.scale.setXY(width / this.game.width, height / this.game.height);
        this.game.pos.setXY((window.innerWidth - width) / 2, (window.innerHeight - height) / 2);
        this.container.style.width = width + 'px';
        this.container.style.height = height + 'px';
        this.container.style.marginTop = this.game.pos.y + "px";
    };
    return AbstractCanvasRenderer;
}(abstractRenderer_1.AbstractRenderer));
exports.AbstractCanvasRenderer = AbstractCanvasRenderer;


/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var shaderProgram_1 = __webpack_require__(6);
var spriteRectDrawer_1 = __webpack_require__(22);
var mat4 = __webpack_require__(17);
var texShaderGenerator_1 = __webpack_require__(13);
var makePositionMatrix = function (dstX, dstY, dstWidth, dstHeight) {
    var projectionMatrix = mat4.ortho(0, dstWidth, 0, dstHeight, -1, 1);
    var scaleMatrix = mat4.makeScale(dstWidth, dstHeight, 1);
    return mat4.matrixMultiply(scaleMatrix, projectionMatrix);
};
var identity = mat4.makeIdentity();
var AbstractFilter = (function () {
    function AbstractFilter(gl) {
        this.spriteRectDrawer = null;
        this.uniformsToSet = {};
        if (true && !gl) {
            console.error(this);
            throw "can not create Filter, gl context not passed to constructor, expected: Filter(gl)";
        }
        this.gl = gl;
        var gen = new texShaderGenerator_1.TexShaderGenerator();
        this.prepare(gen);
        this._afterPrepare(gen);
    }
    AbstractFilter.prototype.prepare = function (gen) { };
    AbstractFilter.prototype._afterPrepare = function (gen) {
        var program = new shaderProgram_1.ShaderProgram(this.gl, gen.getVertexSource(), gen.getFragmentSource());
        this.spriteRectDrawer = new spriteRectDrawer_1.SpriteRectDrawer(this.gl, program);
    };
    AbstractFilter.prototype.doFilter = function (textureInfos, destFrameBuffer) {
        destFrameBuffer.bind();
        var w = textureInfos[0].texture.size.width;
        var h = textureInfos[0].texture.size.height;
        this.uniformsToSet.u_textureMatrix = identity;
        this.uniformsToSet.u_vertexMatrix = makePositionMatrix(0, 0, w, h);
        this.spriteRectDrawer.draw(textureInfos, this.uniformsToSet, null);
    };
    AbstractFilter.prototype.setParam = function (name, value) {
        this.uniformsToSet[name] = value;
    };
    return AbstractFilter;
}());
exports.AbstractFilter = AbstractFilter;


/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var abstractFilter_1 = __webpack_require__(160);
var shaderProgramUtils_1 = __webpack_require__(8);
var SimpleCopyFilter = (function (_super) {
    tslib_1.__extends(SimpleCopyFilter, _super);
    function SimpleCopyFilter(gl) {
        return _super.call(this, gl) || this;
    }
    SimpleCopyFilter.prototype.prepare = function (programGen) {
        programGen.addFragmentUniform(shaderProgramUtils_1.GL_TYPE.FLOAT, 'u_mixFactor');
        programGen.setFragmentMainFn("\n            void main(){\n                gl_FragColor = texture2D(texture, v_texCoord);\n            }\n        ");
    };
    return SimpleCopyFilter;
}(abstractFilter_1.AbstractFilter));
exports.SimpleCopyFilter = SimpleCopyFilter;


/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var spriteRectDrawer_1 = __webpack_require__(22);
var shaderProgramUtils_1 = __webpack_require__(8);
var texShaderGenerator_1 = __webpack_require__(13);
var shaderProgram_1 = __webpack_require__(6);
var simpleCopyFilter_1 = __webpack_require__(161);
var AbstractBlendDrawer = (function () {
    function AbstractBlendDrawer(gl) {
        this.gl = gl;
        var gen = new texShaderGenerator_1.TexShaderGenerator();
        gen.addVarying(shaderProgramUtils_1.GL_TYPE.FLOAT_VEC4, 'v_destTexCoord');
        gen.addFragmentUniform(shaderProgramUtils_1.GL_TYPE.SAMPLER_2D, 'destTexture');
        gen.setVertexMainFn("\n            void main(){\n                gl_Position = u_vertexMatrix * a_position;\n                v_texCoord = (u_textureMatrix * vec4(a_texCoord, 0, 1)).xy;\n                v_destTexCoord = gl_Position*0.5+0.5; \n            }\n        ");
        this.prepare(gen);
        this._afterPrepare(gen);
        this.simpleCopyFilter = new simpleCopyFilter_1.SimpleCopyFilter(gl);
    }
    AbstractBlendDrawer.prototype._afterPrepare = function (gen) {
        this.program = new shaderProgram_1.ShaderProgram(this.gl, gen.getVertexSource(), gen.getFragmentSource());
        this.spriteRectDrawer = new spriteRectDrawer_1.SpriteRectDrawer(this.gl, this.program);
    };
    AbstractBlendDrawer.prototype.prepare = function (programGen) { };
    AbstractBlendDrawer.prototype.draw = function (textureInfos, uniforms, frameBuffer) {
        var destTex = frameBuffer.texture.applyFilters([this.simpleCopyFilter], frameBuffer);
        textureInfos.push({ texture: destTex, name: 'destTexture' });
        this.spriteRectDrawer.draw(textureInfos, uniforms, frameBuffer);
    };
    return AbstractBlendDrawer;
}());
exports.AbstractBlendDrawer = AbstractBlendDrawer;


/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var abstractBlendDrawer_1 = __webpack_require__(162);
var AddBlendDrawer = (function (_super) {
    tslib_1.__extends(AddBlendDrawer, _super);
    function AddBlendDrawer(gl) {
        return _super.call(this, gl) || this;
    }
    AddBlendDrawer.prototype.prepare = function (programGen) {
        programGen.setFragmentMainFn("\n            void main(){\n                vec4 srcColor =  texture2D(texture, v_texCoord)*2.0;\n                srcColor.a *= u_alpha;\n                vec4 destColor = texture2D(destTexture, v_destTexCoord.xy);\n                vec4 res = min(srcColor + destColor,vec4(1.0));\n                gl_FragColor = res;\n            }\n        ");
    };
    return AddBlendDrawer;
}(abstractBlendDrawer_1.AbstractBlendDrawer));
exports.AddBlendDrawer = AddBlendDrawer;


/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var mat4 = __webpack_require__(17);
var MatrixStack = (function () {
    function MatrixStack() {
        this.stack = [];
        this.restore();
    }
    MatrixStack.prototype.restore = function () {
        this.stack.pop();
        if (this.stack.length < 1) {
            this.stack[0] = mat4.makeIdentity();
        }
    };
    MatrixStack.prototype.save = function () {
        this.stack.push(this.getCurrentMatrix());
    };
    MatrixStack.prototype.getCurrentMatrix = function () {
        return this.stack[this.stack.length - 1].slice();
    };
    MatrixStack.prototype.setCurrentMatrix = function (m) {
        return this.stack[this.stack.length - 1] = m;
    };
    MatrixStack.prototype.translate = function (x, y, z) {
        if (z === undefined) {
            z = 0;
        }
        var t = mat4.makeTranslation(x, y, z);
        var m = this.getCurrentMatrix();
        this.setCurrentMatrix(mat4.matrixMultiply(t, m));
        return this;
    };
    MatrixStack.prototype.rotateZ = function (angleInRadians) {
        var t = mat4.makeZRotation(angleInRadians);
        var m = this.getCurrentMatrix();
        this.setCurrentMatrix(mat4.matrixMultiply(t, m));
        return this;
    };
    MatrixStack.prototype.rotateY = function (angleInRadians) {
        var t = mat4.makeYRotation(angleInRadians);
        var m = this.getCurrentMatrix();
        this.setCurrentMatrix(mat4.matrixMultiply(t, m));
        return this;
    };
    MatrixStack.prototype.scale = function (x, y, z) {
        if (z === undefined) {
            z = 1;
        }
        var t = mat4.makeScale(x, y, z);
        var m = this.getCurrentMatrix();
        this.setCurrentMatrix(mat4.matrixMultiply(t, m));
        return this;
    };
    MatrixStack.prototype.resetTransform = function () {
        var identity = mat4.makeIdentity();
        this.setCurrentMatrix(identity);
        return this;
    };
    return MatrixStack;
}());
exports.MatrixStack = MatrixStack;


/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var abstractPrimitive_1 = __webpack_require__(36);
var Circle = (function (_super) {
    tslib_1.__extends(Circle, _super);
    function Circle() {
        var _this = _super.call(this) || this;
        _this.vertexArr = [];
        var Pi2 = Math.PI * 2;
        _this.vertexArr.push(0.5);
        _this.vertexArr.push(0.5);
        for (var a = 0, max = Pi2; a < max; a += 0.1) {
            _this.vertexArr.push(Math.cos(a) / 2 + 0.5);
            _this.vertexArr.push(Math.sin(a) / 2 + 0.5);
        }
        _this.vertexArr.push(Math.cos(Pi2) / 2 + 0.5);
        _this.vertexArr.push(Math.sin(Pi2) / 2 + 0.5);
        return _this;
    }
    return Circle;
}(abstractPrimitive_1.AbstractPrimitive));
exports.Circle = Circle;


/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var circle_1 = __webpack_require__(165);
var shaderProgram_1 = __webpack_require__(6);
var abstractDrawer_1 = __webpack_require__(10);
var bufferInfo_1 = __webpack_require__(14);
var colorShaderGenerator_1 = __webpack_require__(35);
var CircleDrawer = (function (_super) {
    tslib_1.__extends(CircleDrawer, _super);
    function CircleDrawer(gl) {
        var _this = _super.call(this, gl) || this;
        var gen = new colorShaderGenerator_1.ColorShaderGenerator();
        _this.program = new shaderProgram_1.ShaderProgram(gl, gen.getVertexSource(), gen.getFragmentSource());
        _this.primitive = new circle_1.Circle();
        _this.bufferInfo = new bufferInfo_1.BufferInfo(gl, {
            posVertexInfo: { array: _this.primitive.vertexArr, type: gl.FLOAT, size: 2, attrName: 'a_position' },
            drawMethod: _this.gl.TRIANGLE_FAN
        });
        return _this;
    }
    return CircleDrawer;
}(abstractDrawer_1.AbstractDrawer));
exports.CircleDrawer = CircleDrawer;


/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var abstractPrimitive_1 = __webpack_require__(36);
var Line = (function (_super) {
    tslib_1.__extends(Line, _super);
    function Line() {
        var _this = _super.call(this) || this;
        _this.vertexArr = [
            0, 0,
            1, 1
        ];
        _this.indexArr = [0, 1];
        return _this;
    }
    return Line;
}(abstractPrimitive_1.AbstractPrimitive));
exports.Line = Line;


/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var line_1 = __webpack_require__(167);
var shaderProgram_1 = __webpack_require__(6);
var bufferInfo_1 = __webpack_require__(14);
var abstractDrawer_1 = __webpack_require__(10);
var colorShaderGenerator_1 = __webpack_require__(35);
var LineDrawer = (function (_super) {
    tslib_1.__extends(LineDrawer, _super);
    function LineDrawer(gl) {
        var _this = _super.call(this, gl) || this;
        var gen = new colorShaderGenerator_1.ColorShaderGenerator();
        _this.program = new shaderProgram_1.ShaderProgram(gl, gen.getVertexSource(), gen.getFragmentSource());
        _this.primitive = new line_1.Line();
        _this.bufferInfo = new bufferInfo_1.BufferInfo(gl, {
            posVertexInfo: { array: _this.primitive.vertexArr, type: gl.FLOAT, size: 2, attrName: 'a_position' },
            drawMethod: _this.gl.LINE_STRIP
        });
        return _this;
    }
    return LineDrawer;
}(abstractDrawer_1.AbstractDrawer));
exports.LineDrawer = LineDrawer;


/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var plane_1 = __webpack_require__(37);
var shaderProgram_1 = __webpack_require__(6);
var bufferInfo_1 = __webpack_require__(14);
var abstractDrawer_1 = __webpack_require__(10);
var colorShaderGenerator_1 = __webpack_require__(35);
var ColorRectDrawer = (function (_super) {
    tslib_1.__extends(ColorRectDrawer, _super);
    function ColorRectDrawer(gl) {
        var _this = _super.call(this, gl) || this;
        _this.primitive = new plane_1.Plane();
        var gen = new colorShaderGenerator_1.ColorShaderGenerator();
        _this.program = new shaderProgram_1.ShaderProgram(gl, gen.getVertexSource(), gen.getFragmentSource());
        _this.bufferInfo = new bufferInfo_1.BufferInfo(gl, {
            posVertexInfo: { array: _this.primitive.vertexArr, type: gl.FLOAT, size: 2, attrName: 'a_position' },
            posIndexInfo: { array: _this.primitive.indexArr },
            drawMethod: _this.gl.TRIANGLE_STRIP
        });
        return _this;
    }
    return ColorRectDrawer;
}(abstractDrawer_1.AbstractDrawer));
exports.ColorRectDrawer = ColorRectDrawer;


/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var plane_1 = __webpack_require__(37);
var shaderProgram_1 = __webpack_require__(6);
var bufferInfo_1 = __webpack_require__(14);
var abstractDrawer_1 = __webpack_require__(10);
var shaderProgramUtils_1 = __webpack_require__(8);
var texShaderGenerator_1 = __webpack_require__(13);
var TiledSpriteRectDrawer = (function (_super) {
    tslib_1.__extends(TiledSpriteRectDrawer, _super);
    function TiledSpriteRectDrawer(gl) {
        var _this = _super.call(this, gl) || this;
        _this.primitive = new plane_1.Plane();
        var gen = new texShaderGenerator_1.TexShaderGenerator();
        gen.addFragmentUniform(shaderProgramUtils_1.GL_TYPE.FLOAT_VEC2, 'u_offsetCoords');
        gen.addFragmentUniform(shaderProgramUtils_1.GL_TYPE.FLOAT_VEC4, 'u_frameCoords');
        gen.setFragmentMainFn("\n            void main(){\n                vec2 localTextCoord = mod(\n                    v_texCoord + fract(u_offsetCoords),\n                    u_frameCoords.zw\n                ) + u_frameCoords.xy;\n                gl_FragColor = texture2D(texture, localTextCoord);\n                gl_FragColor.a *= u_alpha;\n            }\n        ");
        _this.program = new shaderProgram_1.ShaderProgram(gl, gen.getVertexSource(), gen.getFragmentSource());
        _this.bufferInfo = new bufferInfo_1.BufferInfo(gl, {
            posVertexInfo: { array: _this.primitive.vertexArr, type: gl.FLOAT, size: 2, attrName: 'a_position' },
            posIndexInfo: { array: _this.primitive.indexArr },
            texVertexInfo: { array: _this.primitive.texCoordArr, type: gl.FLOAT, size: 2, attrName: 'a_texCoord' },
            drawMethod: _this.gl.TRIANGLE_STRIP
        });
        return _this;
    }
    return TiledSpriteRectDrawer;
}(abstractDrawer_1.AbstractDrawer));
exports.TiledSpriteRectDrawer = TiledSpriteRectDrawer;


/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var point2d_1 = __webpack_require__(3);
var abstractLight_1 = __webpack_require__(61);
var PointLight = (function (_super) {
    tslib_1.__extends(PointLight, _super);
    function PointLight(game) {
        var _this = _super.call(this, game) || this;
        _this.pos = new point2d_1.Point2d();
        _this.nearRadius = 0;
        _this.farRadius = 0;
        _this.isOn = false;
        _this._screenPoint = new point2d_1.Point2d();
        return _this;
    }
    PointLight.prototype.getPosScaled = function () {
        var camera = this.game.camera;
        var rect = camera.getRectScaled();
        var scale = camera.scale;
        this._screenPoint.setXY((this.pos.x - rect.x) * scale.x, (this.pos.y - rect.y) * scale.y);
        return this._screenPoint;
    };
    PointLight.prototype.setUniforms = function (uniform, i) {
        uniform["u_pointLights[" + i + "].pos"] = this.getPosScaled().toArray();
        uniform["u_pointLights[" + i + "].nearRadius"] = this.nearRadius;
        uniform["u_pointLights[" + i + "].farRadius"] = this.farRadius;
        uniform["u_pointLights[" + i + "].isOn"] = this.isOn;
        uniform["u_pointLights[" + i + "].color"] = this.color.asGL();
    };
    return PointLight;
}(abstractLight_1.AbstractLight));
exports.PointLight = PointLight;


/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var IndexBuffer = (function () {
    function IndexBuffer(gl) {
        if (true && !gl)
            throw "can not create IndexBuffer, gl context not passed to constructor, expected: IndexBuffer(gl)";
        this.gl = gl;
        this.buffer = gl.createBuffer();
        if (true && !this.buffer)
            throw "can not allocate memory for index buffer";
        this.dataLength = null;
    }
    IndexBuffer.prototype.setData = function (bufferData) {
        if (true) {
            if (!bufferData)
                throw 'can not set data to buffer: bufferData not specified';
        }
        var gl = this.gl;
        this.dataLength = bufferData.length;
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.buffer);
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(bufferData), gl.STATIC_DRAW);
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
    };
    IndexBuffer.prototype.getGlBuffer = function () {
        return this.buffer;
    };
    IndexBuffer.prototype.bind = function () {
        this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.buffer);
    };
    IndexBuffer.prototype.unbind = function () {
        this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, null);
    };
    IndexBuffer.prototype.destroy = function () {
        this.gl.deleteBuffer(this.buffer);
    };
    IndexBuffer.prototype.getBufferLength = function () {
        return this.dataLength;
    };
    return IndexBuffer;
}());
exports.IndexBuffer = IndexBuffer;


/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var VertexBuffer = (function () {
    function VertexBuffer(gl) {
        this.bufferItemSize = 0;
        this.bufferItemType = 0;
        this.dataLength = 0;
        if (true && !gl)
            throw "can not create VertexBuffer, gl context not passed to constructor, expected: VertexBuffer(gl)";
        this.gl = gl;
        this.buffer = gl.createBuffer();
        if (true && !this.buffer)
            throw "can not allocate memory for vertex buffer";
    }
    VertexBuffer.prototype.setData = function (bufferData, itemType, itemSize) {
        if (true) {
            if (!bufferData)
                throw 'can not set data to buffer: bufferData not specified';
            if (!itemType)
                throw 'can not set data to buffer: itemType not specified';
            if (!itemSize)
                throw 'can not set data to buffer: itemSize not specified';
        }
        var gl = this.gl;
        gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(bufferData), gl.STATIC_DRAW);
        gl.bindBuffer(gl.ARRAY_BUFFER, null);
        this.bufferItemSize = itemSize;
        this.bufferItemType = itemType;
        this.dataLength = bufferData.length;
    };
    VertexBuffer.prototype.setAttrName = function (attrName) {
        this.attrName = attrName;
    };
    VertexBuffer.prototype.bind = function (program) {
        if (true && !program)
            throw "can not bind VertexBuffer, program not specified";
        if (true && !this.attrName)
            throw "can not bind VertexBuffer, attribute name not specified";
        program.bindBuffer(this, this.attrName);
    };
    VertexBuffer.prototype.unbind = function () {
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, null);
    };
    VertexBuffer.prototype.destroy = function () {
        this.gl.deleteBuffer(this.buffer);
    };
    VertexBuffer.prototype.getGlBuffer = function () {
        return this.buffer;
    };
    VertexBuffer.prototype.getItemSize = function () {
        return this.bufferItemSize;
    };
    VertexBuffer.prototype.getItemType = function () {
        return this.bufferItemType;
    };
    VertexBuffer.prototype.getBufferLength = function () {
        return this.dataLength;
    };
    return VertexBuffer;
}());
exports.VertexBuffer = VertexBuffer;


/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var spriteRectDrawer_1 = __webpack_require__(22);
var texShaderGenerator_1 = __webpack_require__(13);
var shaderProgram_1 = __webpack_require__(6);
var shaderProgramUtils_1 = __webpack_require__(8);
var lightArray_1 = __webpack_require__(58);
var SpriteRectLightDrawer = (function (_super) {
    tslib_1.__extends(SpriteRectLightDrawer, _super);
    function SpriteRectLightDrawer(gl) {
        var _this = this;
        var gen = new texShaderGenerator_1.TexShaderGenerator();
        gen.prependFragmentCodeBlock("\n            #define NUM_OF_LIGHT_IN_VIEW " + lightArray_1.LightArray.NUM_OF_LIGHT_IN_VIEW + "\n            struct PointLight {\n                vec2 pos;\n                vec4 color;\n                float nearRadius;\n                float farRadius;\n                bool isOn;\n            };\n            struct AmbientLight {\n                vec4 color;\n                vec3 direction;\n            };\n            struct Material {\n                vec4  ambient;\n                vec4  diffuse;\n                vec4  specular;\n                float shininess;\n            };\n            \n            float distanceAttenuation(PointLight lgt,float dist){\n                float atten = 0.0;\n                if (dist<=lgt.farRadius) {\n                    if (dist<=lgt.nearRadius) atten = 1.0;\n                    else {\n                        float n = dist - lgt.nearRadius;\n                        float d = lgt.farRadius - lgt.nearRadius;\n                        atten = smoothstep(0.0,1.0,1.0 - (n*n)/(d*d));\n                    }\n                }\n                return atten;\n            }\n            \n            float angleAttenuation(PointLight lgt, float dist, vec3 L){\n                float atten = 0.;\n                vec3 lightDir = vec3(-0.6,0.8,1.0);\n                float cosOuter = cos(1.14);\n                float cosInner = cos(0.20);\n                float dropOff = 2.0;\n                float cosL = dot(lightDir,L);\n                float num = cosL - cosOuter;\n                if (num>0.) {\n                    if (cosL > cosInner) atten = 1.;\n                    else {\n                        float denom = cosInner - cosOuter;\n                        atten = smoothstep(0.,1.,pow(num/denom,dropOff));\n                    }\n                }\n                return atten;//* distanceAttenuation(lgt,dist);\n            }\n            \n            vec4 specularResult(Material m, float dotProduct, float dist) {\n                return m.specular * dotProduct * m.shininess / dist;\n            }\n            vec4 diffuseResult(Material m, float dotProduct, vec4 texColor) {\n                return m.diffuse * dotProduct * texColor;\n            }\n            vec4 shadedResult(PointLight lgt, Material m, vec4 N4,vec4 texColor) {\n                vec3 L = vec3(lgt.pos.xy - gl_FragCoord.xy,0.0);\n                float dist = length(L);\n                L = L / dist;\n                float dotProduct = (N4.a>0.)? max(0.0,dot(N4.xyz,L)): 1.;\n                //float atten = distanceAttenuation(lgt,dist);\n                float atten = angleAttenuation(lgt,dist,L);\n                vec4 diffuse = diffuseResult(m, dotProduct, texColor);\n                vec4 specular = specularResult(m, dotProduct, dist);\n                vec4 result = atten * lgt.color * (diffuse + specular);\n                return result;\n            }\n        ");
        gen.addFragmentUniform("PointLight", 'u_pointLights[NUM_OF_LIGHT_IN_VIEW]');
        gen.addFragmentUniform("AmbientLight", 'u_ambientLight');
        gen.addFragmentUniform("Material", 'u_material');
        gen.addFragmentUniform(shaderProgramUtils_1.GL_TYPE.SAMPLER_2D, 'normalTexture');
        gen.addFragmentUniform(shaderProgramUtils_1.GL_TYPE.BOOL, 'u_useNormalMap');
        gen.setFragmentMainFn("\n            void main(){\n                vec4 texColor = texture2D(texture, v_texCoord); // todo u_texture\n                \n                vec4 N4;\n                float dotProduct;\n                if (u_useNormalMap) {\n                    vec4 normal = texture2D(normalTexture,v_texCoord);\n                    vec4 normalMap = (2.0 * normal) - 1.0;\n                    N4 = vec4(normalize(normalMap.xyz),1);\n                    vec3 N = N4.xyz;\n                    dotProduct = max(0.,dot(N,normalize(u_ambientLight.direction))); \n                } else {\n                    N4 = vec4(0.0);\n                    dotProduct = 1.;\n                }\n                   \n               vec4 lightResult = (texColor * u_ambientLight.color) * (u_material.ambient + dotProduct);\n                // * u_ambientLight.intensity\n                \n                if (texColor.a>0.) {\n                    for (int i=0;i<NUM_OF_LIGHT_IN_VIEW;i++) {\n                        if (u_pointLights[i].isOn) lightResult+=shadedResult(\n                            u_pointLights[i], u_material, N4, texColor\n                        );\n                    } \n                }\n                \n                gl_FragColor = lightResult;\n                gl_FragColor.a = texColor.a;\n                gl_FragColor.a *= u_alpha;\n            }\n        ");
        var program = new shaderProgram_1.ShaderProgram(gl, gen.getVertexSource(), gen.getFragmentSource());
        _this = _super.call(this, gl, program) || this;
        return _this;
    }
    return SpriteRectLightDrawer;
}(spriteRectDrawer_1.SpriteRectDrawer));
exports.SpriteRectLightDrawer = SpriteRectLightDrawer;


/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var spriteRectLightDrawer_1 = __webpack_require__(174);
var spriteRectDrawer_1 = __webpack_require__(22);
var tiledSpriteRectDrawer_1 = __webpack_require__(170);
var colorRectDrawer_1 = __webpack_require__(169);
var abstractDrawer_1 = __webpack_require__(10);
var lineDrawer_1 = __webpack_require__(168);
var circleDrawer_1 = __webpack_require__(166);
var frameBuffer_1 = __webpack_require__(57);
var matrixStack_1 = __webpack_require__(164);
var mat4 = __webpack_require__(17);
var matEx = __webpack_require__(4);
var texture_1 = __webpack_require__(56);
var addBlendDrawer_1 = __webpack_require__(163);
var rect_1 = __webpack_require__(2);
var abstractCanvasRenderer_1 = __webpack_require__(159);
var shaderMaterial_1 = __webpack_require__(66);
var size_1 = __webpack_require__(29);
var getCtx = function (el) {
    return (el.getContext("webgl", { alpha: false }) ||
        el.getContext('experimental-webgl', { alpha: false }) ||
        el.getContext('webkit-3d', { alpha: false }) ||
        el.getContext('moz-webgl', { alpha: false }));
};
var SCENE_DEPTH = 1000;
var matrixStack = new matrixStack_1.MatrixStack();
var makePositionMatrix = function (rect, viewSize) {
    var zToWMatrix = mat4.makeZToWMatrix(1);
    var projectionMatrix = mat4.ortho(0, viewSize.width, 0, viewSize.height, -SCENE_DEPTH, SCENE_DEPTH);
    var scaleMatrix = mat4.makeScale(rect.width, rect.height, 1);
    var translationMatrix = mat4.makeTranslation(rect.x, rect.y, 0);
    var matrix = mat4.matrixMultiply(scaleMatrix, translationMatrix);
    matrix = mat4.matrixMultiply(matrix, matrixStack.getCurrentMatrix());
    matrix = mat4.matrixMultiply(matrix, projectionMatrix);
    matrix = mat4.matrixMultiply(matrix, zToWMatrix);
    return matrix;
};
var makeTextureMatrix = function (srcRect, texSize) {
    var texScaleMatrix = mat4.makeScale(srcRect.width / texSize.width, srcRect.height / texSize.height, 1);
    var texTranslationMatrix = mat4.makeTranslation(srcRect.x / texSize.width, srcRect.y / texSize.height, 0);
    return mat4.matrixMultiply(texScaleMatrix, texTranslationMatrix);
};
var FRAME_TO_SCREEN_MATRIX = new matrixStack_1.MatrixStack().
    scale(1, -1, 1).
    translate(-1, -1, 0).
    scale(2, 2, 1).
    getCurrentMatrix();
var WebGlRenderer = (function (_super) {
    tslib_1.__extends(WebGlRenderer, _super);
    function WebGlRenderer(game) {
        var _this = _super.call(this, game) || this;
        _this.matrixStack = matrixStack;
        _this.registerResize();
        _this._init();
        return _this;
    }
    WebGlRenderer.prototype._init = function () {
        var gl = getCtx(this.container);
        this.gl = gl;
        this.circleDrawer = new circleDrawer_1.CircleDrawer(gl);
        this.spriteRectDrawer = new spriteRectDrawer_1.SpriteRectDrawer(gl);
        this.spriteRectLightDrawer = new spriteRectLightDrawer_1.SpriteRectLightDrawer(gl);
        this.tiledSpriteRectDrawer = new tiledSpriteRectDrawer_1.TiledSpriteRectDrawer(gl);
        this.colorRectDrawer = new colorRectDrawer_1.ColorRectDrawer(gl);
        this.lineDrawer = new lineDrawer_1.LineDrawer(gl);
        this.addBlendDrawer = new addBlendDrawer_1.AddBlendDrawer(gl);
        this.frameBuffer = new frameBuffer_1.FrameBuffer(gl, this.game.width, this.game.height);
        gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
        gl.enable(gl.BLEND);
    };
    WebGlRenderer.prototype.draw = function (renderable) {
        if (!matEx.overlapTest(this.game.camera.getRectScaled(), renderable.getRect()))
            return;
        var texToDraw = this.renderableCache[renderable.spriteSheet.getDefaultResourcePath()].texture;
        texToDraw = texToDraw.applyFilters(renderable.filters, this.frameBuffer);
        var texInfo = [{ texture: texToDraw, name: 'texture' }];
        if (renderable.spriteSheet.hasResourceWithName('normalMap')) {
            texInfo.push({
                texture: this.renderableCache[renderable.spriteSheet.getResourcePathByName('normalMap')].texture,
                name: 'normalTexture'
            });
        }
        var drawableInfo = {
            blendMode: renderable.blendMode,
            acceptLight: renderable.acceptLight
        };
        this.drawTextureInfo(texInfo, drawableInfo, renderable.shaderMaterial, renderable.getFrameRect(), rect_1.Rect.fromPool().setXYWH(0, 0, renderable.getFrameRect().width, renderable.getFrameRect().height));
    };
    WebGlRenderer.prototype.drawImage = function (texturePath, srcRect, dstRect) {
        var texture = this.renderableCache[texturePath].texture;
        if (true && !texture) {
            if (!texturePath)
                throw "no texture path provided";
            else
                throw "can not find texture with path " + texturePath;
        }
        var texInfo = [{ texture: texture, name: 'texture' }];
        var drawableInfo = { blendMode: 'normal', acceptLight: false };
        this.drawTextureInfo(texInfo, drawableInfo, shaderMaterial_1.ShaderMaterial.DEFAULT, srcRect, dstRect);
    };
    WebGlRenderer.prototype.drawImageEx = function (texturePath, srcRect, dstRect, filters, drawableInfo) {
        if (!matEx.overlapTest(this.game.camera.getRectScaled(), dstRect))
            return;
        var texture = this.renderableCache[texturePath].texture;
        texture = texture.applyFilters(filters, this.frameBuffer);
        if (true && !texture) {
            if (!texturePath)
                throw "no texture path provided";
            else
                throw "can not find texture with path " + texturePath;
        }
        var texInfo = [{ texture: texture, name: 'texture' }];
        this.drawTextureInfo(texInfo, drawableInfo, shaderMaterial_1.ShaderMaterial.DEFAULT, srcRect, dstRect);
    };
    WebGlRenderer.prototype.drawNinePatch = function (texturePath, destRect, filters, drawableInfo, a, b, c, d) {
        var r = rect_1.Rect.fromPool();
        var rDst = rect_1.Rect.fromPool();
        var texSize = this.renderableCache[texturePath].texture.getSize();
        r.setXYWH(0, 0, a, c);
        rDst.setXYWH(destRect.getPoint().x, destRect.getPoint().y, a, c);
        this.drawImageEx(texturePath, r, rDst, filters, drawableInfo);
        r.setXYWH(a, 0, texSize.width - a - b, c);
        rDst.setXYWH(destRect.x + a, destRect.y, destRect.width - a - c, c);
        this.drawImageEx(texturePath, r, rDst, filters, drawableInfo);
        r.setXYWH(texSize.width - b, 0, b, c);
        rDst.setXYWH(destRect.getPoint().x + destRect.width - b, destRect.getPoint().y, b, c);
        this.drawImageEx(texturePath, r, rDst, filters, drawableInfo);
        r.setXYWH(0, c, a, texSize.height - c - d);
        rDst.setXYWH(destRect.x, destRect.y + c, a, destRect.height - c - d);
        this.drawImageEx(texturePath, r, rDst, filters, drawableInfo);
        r.setXYWH(a, c, texSize.width - a - b, texSize.height - c - d);
        rDst.setXYWH(destRect.x + a, destRect.y + c, destRect.width - a - b, destRect.height - c - d);
        this.drawImageEx(texturePath, r, rDst, filters, drawableInfo);
        r.setXYWH(texSize.width - b, c, b, texSize.height - c - d);
        rDst.setXYWH(destRect.x + destRect.width - b, destRect.y + c, b, destRect.height - c - d);
        this.drawImageEx(texturePath, r, rDst, filters, drawableInfo);
        r.setXYWH(0, texSize.height - d, a, d);
        rDst.setXYWH(destRect.getPoint().x, destRect.getPoint().y + destRect.height - d, a, d);
        this.drawImageEx(texturePath, r, rDst, filters, drawableInfo);
        r.setXYWH(a, texSize.height - d, texSize.width - a - b, d);
        rDst.setXYWH(destRect.x + a, destRect.y + destRect.height - d, destRect.width - a - b, d);
        this.drawImageEx(texturePath, r, rDst, filters, drawableInfo);
        r.setXYWH(texSize.width - b, texSize.height - d, b, d);
        rDst.setXYWH(destRect.getPoint().x + destRect.width - b, destRect.getPoint().y + destRect.height - d, b, d);
        this.drawImageEx(texturePath, r, rDst, filters, drawableInfo);
    };
    WebGlRenderer.prototype.drawTextureInfo = function (texInfo, drawableInfo, shaderMaterial, srcRect, dstRect) {
        var camRectScaled = this.game.camera.getRectScaled();
        if (!matEx.overlapTest(camRectScaled, rect_1.Rect.fromPool().setXYWH(camRectScaled.x + srcRect.x, camRectScaled.y + srcRect.y, srcRect.width, srcRect.height)))
            return;
        var scene = this.game.getCurrScene();
        var drawer;
        var uniforms = {
            u_textureMatrix: makeTextureMatrix(srcRect, texInfo[0].texture.getSize()),
            u_vertexMatrix: makePositionMatrix(dstRect, size_1.Size.fromPool().setWH(this.game.width, this.game.height)),
            u_alpha: 1
        };
        if (drawableInfo.blendMode === 'add')
            drawer = this.addBlendDrawer;
        else if (drawableInfo.acceptLight || texInfo.length > 1) {
            drawer = this.spriteRectLightDrawer;
            uniforms['u_useNormalMap'] = texInfo.length > 1;
            scene.ambientLight.setUniforms(uniforms);
            this.game.lightArray.setUniforms(uniforms);
            shaderMaterial.setUniforms(uniforms);
        }
        else {
            drawer = this.spriteRectDrawer;
        }
        drawer.draw(texInfo, uniforms, this.frameBuffer);
    };
    WebGlRenderer.prototype.drawTiledImage = function (texturePath, srcRect, dstRect, offset) {
        var texture = this.renderableCache[texturePath].texture;
        if (true && !texture) {
            if (!texturePath)
                throw "no texture path provided";
            else
                throw "can not find texture with path " + texturePath;
        }
        var uniforms = {
            u_textureMatrix: makeTextureMatrix(rect_1.Rect.fromPool().setXYWH(0, 0, dstRect.width, dstRect.height), texture.getSize()),
            u_vertexMatrix: makePositionMatrix(dstRect, size_1.Size.fromPool().setWH(this.game.width, this.game.height)),
            u_frameCoords: [
                srcRect.x / texture.size.width,
                srcRect.y / texture.size.height,
                srcRect.width / texture.size.width,
                srcRect.height / texture.size.height
            ],
            u_offsetCoords: [offset.x / srcRect.width, offset.y / srcRect.height],
            u_alpha: 1
        };
        var texInfo = [{ texture: texture, name: 'texture' }];
        this.tiledSpriteRectDrawer.draw(texInfo, uniforms, null);
    };
    WebGlRenderer.prototype.fillRect = function (rect, color) {
        if (!matEx.overlapTest(this.game.camera.getRectScaled(), rect))
            return;
        var uniforms = {
            u_vertexMatrix: makePositionMatrix(rect, size_1.Size.fromPool().setWH(this.game.width, this.game.height)),
            u_rgba: color.asGL()
        };
        this.colorRectDrawer.draw(null, uniforms, null);
    };
    WebGlRenderer.prototype.drawRect = function (rect, color, lineWidth) {
        var r = rect_1.Rect.fromPool();
        var _a = [rect.x, rect.y, rect.width, rect.height], x = _a[0], y = _a[1], w = _a[2], h = _a[3];
        this.fillRect(r.setXYWH(x, y, w, lineWidth), color);
        this.fillRect(r.setXYWH(x, y + h - lineWidth, w, lineWidth), color);
        this.fillRect(r.setXYWH(x, y, lineWidth, h - lineWidth), color);
        this.fillRect(r.setXYWH(x + w, y, lineWidth, h), color);
    };
    WebGlRenderer.prototype.drawLine = function (x1, y1, x2, y2, color) {
        var dx = x2 - x1, dy = y2 - y1;
        var uniforms = {};
        uniforms.u_vertexMatrix = makePositionMatrix(rect_1.Rect.fromPool().setXYWH(x1, y1, dx, dy), size_1.Size.fromPool().setWH(this.game.width, this.game.height));
        uniforms.u_rgba = color.asGL();
        this.lineDrawer.draw(null, uniforms, null);
    };
    WebGlRenderer.prototype.fillCircle = function (x, y, r, color) {
        var r2 = r * 2;
        if (!matEx.overlapTest(this.game.camera.getRectScaled(), rect_1.Rect.fromPool().setXYWH(x - r, y - r, r2, r2)))
            return;
        var uniforms = {};
        uniforms['u_vertexMatrix'] = makePositionMatrix(new rect_1.Rect(x - r, y - r, r2, r2), new size_1.Size(this.game.width, this.game.height));
        uniforms['u_rgba'] = color.asGL();
        this.circleDrawer.draw(null, uniforms, null);
    };
    WebGlRenderer.prototype.setAlpha = function (a) {
        throw 'not implemented';
    };
    WebGlRenderer.prototype.save = function () {
        this.matrixStack.save();
    };
    WebGlRenderer.prototype.scale = function (x, y) {
        this.matrixStack.scale(x, y);
    };
    WebGlRenderer.prototype.resetTransform = function () {
        this.matrixStack.resetTransform();
    };
    WebGlRenderer.prototype.rotateZ = function (angleInRadians) {
        this.matrixStack.rotateZ(angleInRadians);
    };
    WebGlRenderer.prototype.rotateY = function (angleInRadians) {
        this.matrixStack.rotateY(angleInRadians);
    };
    WebGlRenderer.prototype.translate = function (x, y) {
        this.matrixStack.translate(x, y);
    };
    WebGlRenderer.prototype.restore = function () {
        this.matrixStack.restore();
    };
    WebGlRenderer.prototype.lockRect = function (rect) {
        this.gl.enable(this.gl.SCISSOR_TEST);
        this.gl.scissor(rect.x, rect.y, rect.width, rect.height);
    };
    WebGlRenderer.prototype.unlockRect = function () {
        this.gl.disable(this.gl.SCISSOR_TEST);
    };
    WebGlRenderer.prototype.clear = function () {
        this.gl.clearColor(1, 1, 1, 1);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
    };
    WebGlRenderer.prototype.clearColor = function (color) {
        var arr = color.asGL();
        this.gl.clearColor(arr[0], arr[1], arr[2], arr[3]);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
    };
    WebGlRenderer.prototype.beginFrameBuffer = function () {
        this.save();
        this.frameBuffer.bind();
    };
    WebGlRenderer.prototype.flipFrameBuffer = function (filters) {
        var fullScreen = this.fullScreenSize;
        this.restore();
        this.save();
        this.translate(0, this.game.height);
        this.scale(1, -1);
        var texToDraw = this.frameBuffer.getTexture().applyFilters(filters, null);
        this.frameBuffer.unbind();
        this.gl.viewport(0, 0, fullScreen.width, fullScreen.height);
        var uniforms = {
            u_vertexMatrix: FRAME_TO_SCREEN_MATRIX,
            u_textureMatrix: mat4.IDENTITY,
            u_alpha: 1
        };
        var texInfo = [{ texture: texToDraw, name: 'texture' }];
        this.spriteRectDrawer.draw(texInfo, uniforms, null);
        this.restore();
    };
    ;
    WebGlRenderer.prototype.getError = function () {
        if (false)
            {}
        var err = this.gl.getError();
        err = err === this.gl.NO_ERROR ? 0 : err;
        if (err) {
            console.log(abstractDrawer_1.AbstractDrawer.currentInstance);
        }
        return err;
    };
    WebGlRenderer.prototype.loadTextureInfo = function (resourcePath, onLoad) {
        var _this = this;
        var img = new Image();
        img.src = this.getResource(resourcePath);
        img.onload = function () {
            var texture = new texture_1.Texture(_this.gl);
            texture.setImage(img);
            _this.renderableCache[resourcePath] = { texture: texture, size: texture.size };
            onLoad();
        };
        if (true) {
            img.onerror = function () {
                throw "Resource loading error: can not load resource \"" + resourcePath + "\"";
            };
        }
    };
    WebGlRenderer.prototype.destroy = function () {
        var _this = this;
        _super.prototype.destroy.call(this);
        this.frameBuffer.destroy();
        abstractDrawer_1.AbstractDrawer.destroyAll();
        Object.keys(this.renderableCache).forEach(function (key) {
            var t = _this.renderableCache[key].texture;
            t.destroy();
        });
    };
    return WebGlRenderer;
}(abstractCanvasRenderer_1.AbstractCanvasRenderer));
exports.WebGlRenderer = WebGlRenderer;


/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var webGlRenderer_1 = __webpack_require__(175);
var RendererFactory = (function () {
    function RendererFactory() {
    }
    RendererFactory.getRenderer = function (game) {
        if (!game)
            throw "RendererFactory::getRenderer: game param not specified";
        return new webGlRenderer_1.WebGlRenderer(game);
    };
    return RendererFactory;
}());
exports.RendererFactory = RendererFactory;


/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
__webpack_require__(69);
var baseAbstractBehaviour_1 = __webpack_require__(38);
var rendererFactory_1 = __webpack_require__(176);
var repository_1 = __webpack_require__(154);
var mouse_1 = __webpack_require__(55);
var keyboard_1 = __webpack_require__(147);
var gamePad_1 = __webpack_require__(146);
var decorators_1 = __webpack_require__(25);
var commonObject_1 = __webpack_require__(26);
var camera_1 = __webpack_require__(60);
var consts_1 = __webpack_require__(34);
var point2d_1 = __webpack_require__(3);
var lightArray_1 = __webpack_require__(58);
var uiBuilder_1 = __webpack_require__(145);
var colliderEngine_1 = __webpack_require__(144);
var MathEx = __webpack_require__(4);
var global_1 = __webpack_require__(7);
var Game = (function (_super) {
    tslib_1.__extends(Game, _super);
    function Game() {
        var _this = _super.call(this) || this;
        _this._lastTime = 0;
        _this._currTime = 0;
        _this._deltaTime = 0;
        _this._currentScene = null;
        _this._running = false;
        _this.destroyed = false;
        _this.renderer = null;
        _this.scale = new point2d_1.Point2d(1, 1);
        _this.pos = new point2d_1.Point2d(0, 0);
        _this.width = 0;
        _this.height = 0;
        _this.gravityConstant = 0;
        _this.fps = 0;
        _this.gamePad = null;
        _this.scaleStrategy = consts_1.SCALE_STRATEGY.FIT;
        _this.startSceneId = 0;
        _this.preloadingSceneId = 0;
        _this._revalidated = false;
        _this.__global__ = global_1._global;
        _this._cnt = 0;
        _this.repository = new repository_1.Repository(_this);
        _this.mouse = new mouse_1.Mouse(_this);
        _this.keyboard = new keyboard_1.Keyboard(_this);
        _this.keyboard.listenTo();
        _this.gamePad = new gamePad_1.GamePad(_this);
        _this.collider = new colliderEngine_1.ColliderEngine(_this);
        _this.camera = new camera_1.Camera(_this);
        _this.lightArray = new lightArray_1.LightArray(_this);
        _this.uiBuilder = new uiBuilder_1.UIBuilder(_this);
        if (true)
            window['game'] = _this;
        _this.__global__['MathEx'] = MathEx;
        return _this;
    }
    Game_1 = Game;
    Game.prototype.revalidate = function () {
        this.renderer = rendererFactory_1.RendererFactory.getRenderer(this);
        this.mouse.listenTo(this.renderer.container);
        this.camera.revalidate();
        this._revalidated = true;
    };
    Game.prototype.getTime = function () {
        return this._lastTime;
    };
    Game.prototype.getDeltaTime = function () {
        return this._deltaTime;
    };
    Game.prototype.log = function (args) {
        this.renderer.log(args);
    };
    Game.prototype.debug2 = function () {
        var val = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            val[_i] = arguments[_i];
        }
        this._cnt++;
        console.log.apply(console, val);
        if (this._cnt > 10)
            throw 'too many logs';
    };
    Game.prototype.runScene = function (scene) {
        var _this = this;
        if (true && !this._revalidated)
            throw "game.revalidate() method not invoked. Invoke game.fromJSON(gameParams) or call game.revalidate() method directly";
        this._currentScene = scene;
        if (false) { var BhClass, sceneBhScriptName, allScripts_1; }
        scene.preload(function () {
            _this._currentScene.onShow();
            if (!_this._running) {
                _this.update();
                _this._running = true;
            }
        });
    };
    Game.prototype.getCurrScene = function () {
        return this._currentScene;
    };
    Game.prototype.setCurrScene = function (scene) {
        this._currentScene = scene;
    };
    Game.prototype.update = function () {
        if (this.destroyed)
            return;
        this._lastTime = this._currTime;
        this._currTime = Date.now();
        var currTimeCopy = this._currTime;
        if (!this._lastTime)
            this._lastTime = this._currTime;
        this._deltaTime = this._currTime - this._lastTime;
        if (true) {
            this.fps = ~~(1000 / this._deltaTime);
            window.fps = this.fps;
            var renderError = this.renderer.getError();
            if (renderError)
                throw "render error with code " + renderError;
        }
        var dTime = Math.min(this._deltaTime, Game_1.UPDATE_TIME_RATE);
        var numOfLoops = 1;
        var currTime = this._currTime - numOfLoops * Game_1.UPDATE_TIME_RATE;
        var loopCnt = 0;
        do {
            this._currentScene && this._currentScene.update(currTime, dTime);
            this.collider.collisionArcade();
            currTime += Game_1.UPDATE_TIME_RATE;
            this.keyboard.update();
            this.gamePad.update();
            loopCnt++;
            if (loopCnt > 10) {
                this._lastTime = this._currTime = currTimeCopy;
                break;
            }
        } while (loopCnt < numOfLoops);
        this._currentScene && this._currentScene.render();
        requestAnimationFrame(this.update.bind(this));
    };
    Game.prototype.destroy = function () {
        var _this = this;
        this.destroyed = true;
        this.keyboard.destroy();
        this.mouse.destroy();
        this.renderer.cancelFullScreen();
        baseAbstractBehaviour_1.BaseAbstractBehaviour.destroyAll();
        setTimeout(function () {
            _this.renderer.destroy();
        }, 1000);
        var lastTimeout = setTimeout(function () { }, 0);
        var lastInterval = setInterval(function () { }, 0);
        var delta = 16;
        var lastMaxVal = Math.max(lastTimeout, lastInterval) + delta;
        for (var i = 0; i < lastMaxVal; i++) {
            clearInterval(i);
            clearTimeout(i);
        }
    };
    var Game_1;
    Game.UPDATE_TIME_RATE = 20;
    Game = Game_1 = tslib_1.__decorate([
        decorators_1.Transient({
            repository: true,
            renderer: true,
            mouse: true,
            keyboard: true,
            gamePad: true,
            collider: true,
            camera: true,
            fps: true,
            destroyed: true,
            lightArray: true,
            uiBuilder: true,
            scale: true,
            pos: true
        })
    ], Game);
    return Game;
}(commonObject_1.CommonObject));
exports.Game = Game;


/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var abstractLight_1 = __webpack_require__(61);
var AmbientLight = (function (_super) {
    tslib_1.__extends(AmbientLight, _super);
    function AmbientLight(game) {
        var _this = _super.call(this, game) || this;
        _this.direction = [1, 1, 1];
        return _this;
    }
    AmbientLight.prototype.setUniforms = function (uniform) {
        uniform['u_ambientLight.color'] = this.color.asGL();
        uniform['u_ambientLight.direction'] = this.direction;
    };
    return AmbientLight;
}(abstractLight_1.AbstractLight));
exports.AmbientLight = AmbientLight;


/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Queue = (function () {
    function Queue() {
        this.tasksResolved = 0;
        this.tasks = [];
        this.tasksProgressById = {};
    }
    Queue.prototype.size = function () {
        return this.tasks.length;
    };
    Queue.prototype.calcProgress = function () {
        var _this = this;
        var sum = 0;
        Object.keys(this.tasksProgressById).forEach(function (taskId) {
            sum += _this.tasksProgressById[+taskId] || 0;
        });
        return sum / this.tasks.length;
    };
    Queue.prototype.progressTask = function (taskId, progress) {
        this.tasksProgressById[taskId] = progress;
        this.onProgress && this.onProgress(this.calcProgress());
    };
    ;
    Queue.prototype.resolveTask = function (taskId) {
        this.tasksResolved++;
        this.tasksProgressById[taskId] = 1;
        if (this.tasks.length === this.tasksResolved) {
            this.onProgress && this.onProgress(1);
            if (this.onResolved)
                this.onResolved();
        }
        else {
            this.onProgress && this.onProgress(this.calcProgress());
        }
    };
    ;
    Queue.prototype.addTask = function (taskFn, taskId) {
        this.tasks.push(taskFn);
        this.tasksProgressById[taskId] = 0;
    };
    ;
    Queue.prototype.start = function () {
        if (this.size() === 0)
            this.onResolved();
        this.tasks.forEach(function (t) {
            t && t();
        });
    };
    return Queue;
}());
exports.Queue = Queue;
;


/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Timer = (function () {
    function Timer(callback, interval) {
        this.lastTime = 0;
        this.interval = interval;
        this.callback = callback;
    }
    Timer.prototype.onUpdate = function (time) {
        if (!this.lastTime)
            this.lastTime = time;
        var delta = time - this.lastTime;
        if (delta !== 0 && delta > this.interval) {
            this.lastTime = time;
            this.callback();
        }
    };
    return Timer;
}());
exports.Timer = Timer;


/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var utils_1 = __webpack_require__(30);
var i18n_1 = __webpack_require__(18);
var defaultColor = { r: 0, g: 0, b: 0 };
var ColorPickerDialog = (function () {
    function ColorPickerDialog() {
        this.colorEnums = [
            { left: 'red', right: 'cyan', key: 'r' },
            { left: 'green', right: 'magenta', key: 'g' },
            { left: 'blue', right: 'yellow', key: 'b' }
        ];
        this.i18n = i18n_1.I18n;
        this.currentColor = {
            RGB: {},
            hex: ''
        };
        this.model = { field: {} };
        this.field = 'field';
    }
    ColorPickerDialog.prototype.open = function (model, field, onChange) {
        var color = (model && model[field]) || Object.create(defaultColor);
        this.model = model;
        this.field = field;
        this.onChange = onChange;
        this.currentColor.RGB.r = color.r;
        this.currentColor.RGB.g = color.g;
        this.currentColor.RGB.b = color.b;
        this.currentColor.hex = utils_1.Utils.rgbToHex(this.currentColor.RGB);
        RF.getComponentById('colorPickerModal').open();
    };
    ColorPickerDialog.prototype.hexChanged = function () {
        this.currentColor.RGB = utils_1.Utils.hexToRgb(this.currentColor.hex);
    };
    ColorPickerDialog.prototype.rgbChanged = function () {
        this.currentColor.hex = utils_1.Utils.rgbToHex(this.currentColor.RGB);
    };
    ColorPickerDialog.prototype.getRawColor = function (rgb, key) {
        var col = {
            r: key == 'r' ? rgb.r : 0,
            g: key == 'g' ? rgb.g : 0,
            b: key == 'b' ? rgb.b : 0
        };
        return utils_1.Utils.rgbToHex(col);
    };
    ColorPickerDialog.prototype.applyColor = function () {
        this.model[this.field] = this.currentColor.RGB;
        this.onChange && this.onChange();
        RF.getComponentById('colorPickerModal').close();
    };
    ColorPickerDialog = tslib_1.__decorate([
        RF.decorateComponent({
            name: 'app-color-picker-dialog',
            template: __webpack_require__(143)
        })
    ], ColorPickerDialog);
    return ColorPickerDialog;
}());
exports.ColorPickerDialog = ColorPickerDialog;


/***/ }),
/* 182 */
/***/ (function(module, exports) {

module.exports = "<div class=\"inlineBlock\"><div data-style=\"{ cursor: 'pointer', width: 24 + 'px', height:24 + 'px', backgroundColor: model && model[field] && ('rgb('+model[field].r+','+model[field].g+','+model[field].b+')') }\" data-click=\"click()\"></div></div>";

/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var ColorPicker = (function () {
    function ColorPicker() {
        this.model = { field: '' };
        this.field = 'field';
        this.onChange = null;
    }
    ColorPicker.prototype.click = function () {
        RF.getComponentById('colorPickerDialog').open(this.model, this.field, this.onChange);
    };
    ColorPicker = tslib_1.__decorate([
        RF.decorateComponent({
            name: 'app-color-picker',
            template: __webpack_require__(182)
        })
    ], ColorPicker);
    return ColorPicker;
}());
exports.ColorPicker = ColorPicker;


/***/ }),
/* 184 */
/***/ (function(module, exports) {

module.exports = "<div><button>{{title}}</button><input required accept=\"{{accept}}\" type=\"file\"></div>";

/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
__webpack_require__(207);
var InputFile = (function () {
    function InputFile() {
        this.title = '';
        this.accept = '';
        this.onFilePicked = null;
        this.title = '';
        this.accept = '';
        this.onFilePicked = null;
    }
    InputFile.prototype.onMount = function () {
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
            var url = window.URL || window['webkitURL'];
            var src = url.createObjectURL(file);
            _this.onFilePicked(src, file, name, ext);
            RF.digest();
        };
    };
    InputFile = tslib_1.__decorate([
        RF.decorateComponent({
            name: 'app-input-file',
            template: __webpack_require__(184)
        })
    ], InputFile);
    return InputFile;
}());
exports.InputFile = InputFile;


/***/ }),
/* 186 */
/***/ (function(module, exports) {

module.exports = "<app-modal id=\"confirmModal\"><div data-transclusion=\"content\"><div class=\"withMargin\"><div class=\"alert_body\">{{message}}</div><div><button data-click=\"confirmAndClose()\">{{i18n.get('confirm')}}</button><button data-click=\"close()\">{{i18n.get('cancel')}}</button></div></div></div></app-modal>";

/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var i18n_1 = __webpack_require__(18);
__webpack_require__(208);
var ConfirmDialog = (function () {
    function ConfirmDialog() {
        this.message = 'default message';
        this.confirm = function () { };
        this.i18n = i18n_1.I18n;
    }
    ConfirmDialog.prototype.close = function () {
        RF.getComponentById('confirmModal').close();
    };
    ConfirmDialog.prototype.confirmAndClose = function () {
        this.confirm();
        this.close();
    };
    ConfirmDialog.prototype.open = function (message, resolveFn) {
        RF.getComponentById('confirmModal').open();
        this.message = message;
        this.confirm = function () { resolveFn(true); };
    };
    ConfirmDialog = tslib_1.__decorate([
        RF.decorateComponent({
            name: 'app-confirm-dialog',
            template: __webpack_require__(186)
        })
    ], ConfirmDialog);
    return ConfirmDialog;
}());
exports.ConfirmDialog = ConfirmDialog;


/***/ }),
/* 188 */
/***/ (function(module, exports) {

module.exports = "<app-modal id=\"alertModal\"><div data-transclusion=\"content\"><div class=\"withMargin\"><div class=\"alert_body\">{{message}}</div><div><button data-click=\"close()\">{{i18n.get('ok')}}</button></div></div></div></app-modal>";

/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var i18n_1 = __webpack_require__(18);
var AlertDialog = (function () {
    function AlertDialog() {
        this.message = '';
        this.i18n = i18n_1.I18n;
    }
    AlertDialog.prototype.open = function (message) {
        RF.getComponentById('alertModal').open();
        this.message = message;
    };
    AlertDialog.prototype.close = function () {
        RF.getComponentById('alertModal').close();
        this.message = null;
    };
    AlertDialog = tslib_1.__decorate([
        RF.decorateComponent({
            name: 'app-alert-dialog',
            template: __webpack_require__(188)
        })
    ], AlertDialog);
    return AlertDialog;
}());
exports.AlertDialog = AlertDialog;


/***/ }),
/* 190 */
/***/ (function(module, exports) {

module.exports = "<div><div class=\"collapsible_header bold noSelect\"><div class=\"table width100\"><div class=\"row\"><div class=\"cell width1\"><span class=\"collapsible_point noBrake\" data-click=\"toggle()\" data-class=\"{rotated:opened}\">▷</span></div><div class=\"cell\"><span data-click=\"toggle()\">&nbsp;{{title}}</span></div><div class=\"cell width1\"><div data-if=\"crud && crud.create\" class=\"add\" data-click=\"crud.create(meta)\"></div></div><div class=\"cell width1\"><div data-if=\"crud && crud.editScript\" class=\"script\" data-click=\"crud.editScript(object)\"></div></div><div class=\"cell width1\"><div data-if=\"crud && crud.edit\" class=\"edit\" data-click=\"crud.edit(object,meta)\"></div></div><div class=\"cell width1\"><div data-if=\"crud && crud.delete\" class=\"delete\" data-click=\"crud.delete(object,meta)\"></div></div></div></div></div><div class=\"collapsible_content\" data-class=\"{opened:opened}\"><div data-transclusion=\"content\"></div></div></div>";

/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
__webpack_require__(209);
var Collapsible = (function () {
    function Collapsible() {
        this.title = 'default_title';
        this.crud = '';
        this.object = {};
        this.meta = {};
        this.id = null;
        this.opened = false;
    }
    Collapsible.prototype.toggle = function () {
        this.opened = !this.opened;
    };
    Collapsible = tslib_1.__decorate([
        RF.decorateComponent({
            name: 'app-collapsible',
            template: __webpack_require__(190)
        })
    ], Collapsible);
    return Collapsible;
}());
exports.Collapsible = Collapsible;


/***/ }),
/* 192 */
/***/ (function(module, exports) {

module.exports = "<div class=\"dialogWrapper\" data-if=\"opened\"><div class=\"fullscreen shadow\"></div><div class=\"dialog\"><div class=\"dialogContent\"><div class=\"dialogClose\"><span data-click=\"close()\" class=\"pointer\">X</span></div><div class=\"withPadding\"><div data-transclusion=\"content\"></div></div></div></div></div>";

/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
__webpack_require__(211);
var AppModal = (function () {
    function AppModal() {
        this.opened = false;
    }
    AppModal.prototype.close = function () {
        this.opened = false;
    };
    AppModal.prototype.open = function () {
        this.opened = true;
    };
    AppModal = tslib_1.__decorate([
        RF.decorateComponent({
            name: 'app-modal',
            template: __webpack_require__(192)
        })
    ], AppModal);
    return AppModal;
}());
exports.AppModal = AppModal;


/***/ }),
/* 194 */
/***/ (function(module, exports) {

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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 18);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _miscUtils = __webpack_require__(1);

var _miscUtils2 = _interopRequireDefault(_miscUtils);

var _domUtils = __webpack_require__(2);

var _domUtils2 = _interopRequireDefault(_domUtils);

var _expressionEngine = __webpack_require__(6);

var _expressionEngine2 = _interopRequireDefault(_expressionEngine);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
        this.id = _miscUtils2.default.getUID();
        this.domId = null;
        _domUtils2.default.setAttribute(node, 'data-component-id', this.id);
        this.isWatchEnable = true;
        this.isMounted = false;
        this.isShown = false;
        this.stateExpression = null;
        _domUtils2.default.nodeListToArray(_domUtils2.default.querySelectorAll(this.node, '*')).forEach(function (el) {
            _domUtils2.default.setAttribute(el, 'data-component-id', _this.id);
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
        _miscUtils2.default.resolvePossiblePromiseResult(res);
        return res;
    };

    Component.prototype.addWatcher = function addWatcher(expression, listenerFn, ifExpressionsList, watchersArrName) {
        var watcherFn = _expressionEngine2.default.getExpressionFn(expression);
        watchersArrName = watchersArrName || 'commonWatchers';
        this[watchersArrName].push({
            expression: expression,
            watcherFn: watcherFn,
            listenerFn: listenerFn,
            component: this,
            ifExpressionsList: ifExpressionsList
        });
        listenerFn(_expressionEngine2.default.runExpressionFn(watcherFn, this));
    };

    Component.prototype.collectTransclusionChildren = function collectTransclusionChildren() {
        var componentIds = {};
        var el = this.node;
        var thisId = _domUtils2.default.getAttribute(el, 'data-component-id');
        var res = [];
        var ids = _domUtils2.default.nodeListToArray(_domUtils2.default.querySelectorAll(el, '*')).map(function (it) {
            return _domUtils2.default.getAttribute(it, 'data-component-id');
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
        var newExternalState = _expressionEngine2.default.executeExpression(this.stateExpression, this.parent);
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
            var res = _expressionEngine2.default.executeExpression(exprItem.expression, exprItem.component);
            if (!res) {
                ifDirective = false;
                return true;
            }
        });
        if (!ifDirective) return;

        var newValue = _expressionEngine2.default.runExpressionFn(watcher.watcherFn, watcher.component);
        var oldValue = watcher.last;
        var newValDeepCopy = _miscUtils2.default.deepCopy(newValue);
        if (!_miscUtils2.default.deepEqual(newValDeepCopy, oldValue)) {
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
            var newValue = _expressionEngine2.default.runExpressionFn(watcher.watcherFn, _this5);
            if (!newValue) return;
            if (newValue && newValue.splice && watcher.last === newValue && watcher.lastLength === newValue.length) return;
            watcher.last = newValue;
            watcher.lastLength = newValue.length;
            watcher.listenerFn(newValue);
        });
    };

    Component.prototype.run = function run() {
        var DirectiveEngine = __webpack_require__(15).default;
        var deInstance = new DirectiveEngine(this);
        deInstance.run();
        this.digest();
        return deInstance;
    };

    Component.prototype.destroy = function destroy() {
        _domUtils2.default.remove(this.node);
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

exports.default = Component;

Component.instances = [];

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _component = __webpack_require__(0);

var _component2 = _interopRequireDefault(_component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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

    MiscUtils.resolvePossiblePromiseResult = function resolvePossiblePromiseResult(res) {
        if (!res) return;
        if (res.then) res.then(function () {
            return _component2.default.digestAll();
        });
    };

    return MiscUtils;
}();

exports.default = MiscUtils;


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

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _miscUtils = __webpack_require__(1);

var _miscUtils2 = _interopRequireDefault(_miscUtils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
        if (!_miscUtils2.default.isBadBrowser) {
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
        if (el.classList && !_miscUtils2.default.isBadBrowser) {
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
        if (!_miscUtils2.default.isBadBrowser && el.setAttribute) return el.setAttribute(attrName, val);
        el[attrName] = val;
        if (_miscUtils2.default.isBadBrowser && attrName === 'class') el['className'] = val;
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
        if (_miscUtils2.default.isBadBrowser && attrName === 'class') el.removeAttribute('className');
    };

    DomUtils.getElementsByAttribute = function getElementsByAttribute(context, attribute, value) {
        if (!_miscUtils2.default.isBadBrowser) {
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
        if (!_miscUtils2.default.isBadBrowser) return context.querySelector("[" + attribute + "]");
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
        var Core = __webpack_require__(10).default; // to avoid circular dependencies
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

exports.default = DomUtils;


DomUtils.EXPRESSION_REGEXP = /(\{\{[^\t]*?}})/;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _modelView = __webpack_require__(5);

var _modelView2 = _interopRequireDefault(_modelView);

var _component = __webpack_require__(0);

var _component2 = _interopRequireDefault(_component);

var _templateLoader = __webpack_require__(12);

var _templateLoader2 = _interopRequireDefault(_templateLoader);

var _miscUtils = __webpack_require__(1);

var _miscUtils2 = _interopRequireDefault(_miscUtils);

var _domUtils = __webpack_require__(2);

var _domUtils2 = _interopRequireDefault(_domUtils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
        name = _miscUtils2.default.camelToSnake(name);
        tmpl = _templateLoader2.default.getNode(templateInstance, name);
        if (ComponentProto.getByName(name)) throw 'component with name ' + decoratedName + ' already registered';
        var domTemplate = tmpl.innerHTML;
        _domUtils2.default.remove(tmpl);
        var node = document.createElement('div');
        node.innerHTML = domTemplate;
        this.node = node;
        this.name = name;
        this.ComponentClass = ComponentClassOrObject;
        ComponentProto.instances.push(this);
    }

    ComponentProto.prototype.newInstance = function newInstance(node, externalProperties) {
        var modelView = new _modelView2.default(this.name, new ComponentProto._newComponentInstance(this.ComponentClass), externalProperties);
        var cmp = new _component2.default(this.name, node, modelView);
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

exports.default = ComponentProto;

ComponentProto.instances = [];

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _component = __webpack_require__(0);

var _component2 = _interopRequireDefault(_component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
}(_component2.default);

exports.default = ScopedDomFragment;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _miscUtils = __webpack_require__(1);

var _miscUtils2 = _interopRequireDefault(_miscUtils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
        initialState && (initialState = _miscUtils2.default.deepCopy(initialState));
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

exports.default = ModelView;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _lexer = __webpack_require__(9);

var _lexer2 = _interopRequireDefault(_lexer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
        var codeProcessed = '\n                var __RF__result__; __RF__result__ = ' + _lexer2.default.convertExpression(code, RF_API_STR + '.getVal(component,\'{expr}\')') + '\n        ' + unconvertedCodeTail + '\nreturn __RF__result__';
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
                    lastToken = _lexer2.default.convertExpression(lastToken, RF_API_STR + '.getVal(component,\'{expr}\')');
                    lastToken = '[' + lastToken + ']';
                } else if (!exprTokens.length) {
                    lastToken = '.' + lastToken;
                }
                expression = exprTokens.join('');
                expression = _lexer2.default.convertExpression(expression, RF_API_STR + '.getVal(component,\'{expr}\')');
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

exports.default = ExpressionEngine;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Directive = function Directive() {
    _classCallCheck(this, Directive);

    this.name = null;
    this.onMount = null;
};

exports.default = Directive;


Directive.all = [];

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Token = function Token(type, val) {
    _classCallCheck(this, Token);

    this.tokenType = type;
    this.tokenValue = val;
};

exports.default = Token;


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
    SEMICOLON: ';',
    PERCENT: '%',
    HAT: '^',
    TILDA: '~'
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

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _token = __webpack_require__(8);

var _token2 = _interopRequireDefault(_token);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
        var isEndWithSemicolon = expression[expression.length - 1] == _token2.default.SYMBOL.SEMICOLON;
        var tokens = [],
            t = void 0,
            lastChar = '';
        expression = expression.trim();
        expression = expression.replace(/[\n\t\r]+/gi, '');
        if (!isEndWithSemicolon) expression = expression + _token2.default.SYMBOL.SEMICOLON;

        var isStringCurrent = void 0;
        expression.split('').forEach(function (char, i) {

            var lastToken = tokens[tokens.length - 1];
            if (lastToken && charInArr(lastToken.tokenValue, ['true', 'false'])) lastToken.tokenType = _token2.default.TYPE.BOOLEAN;

            if (charInArr(char, ['"', "'"])) isStringCurrent = false;

            if (charInArr(char, _token2.default.ALL_SPECIAL_SYMBOLS) && !isStringCurrent) {
                t = new _token2.default(_token2.default.TYPE.OPERATOR, char);
                tokens.push(t);

                lastChar = char;
                if (!lastToken) return;
                if (char == _token2.default.SYMBOL.L_PAR && !charInArr(lastToken.tokenValue, _token2.default.ALL_SPECIAL_SYMBOLS)) lastToken.tokenType = _token2.default.TYPE.FUNCTION;
            } else {
                if (lastToken && lastToken.tokenType != _token2.default.TYPE.STRING && char == ' ') return;
                if (lastToken && (lastToken.tokenType == _token2.default.TYPE.DIGIT || lastToken.tokenType == _token2.default.TYPE.VARIABLE || lastToken.tokenType == _token2.default.TYPE.STRING)) {
                    lastToken.tokenValue += char;
                } else {
                    var type = void 0;
                    if (isNumber(char)) type = _token2.default.TYPE.DIGIT;else if (charInArr(char, ['"', "'"])) {
                        type = _token2.default.TYPE.STRING;
                        isStringCurrent = true;
                    } else type = _token2.default.TYPE.VARIABLE;
                    t = new _token2.default(type, char);
                    tokens.push(t);
                }
                lastChar = char;
            }
        });

        tokens.forEach(function (t, i) {
            t.tokenValue && (t.tokenValue = t.tokenValue.trim());
            if (charInArr(t.tokenValue, _token2.default.KEY_WORDS)) t.tokenType = _token2.default.KEY_WORDS;

            if (t && t.tokenType == _token2.default.TYPE.VARIABLE) {
                var next = tokens[i + 1];
                var prev = tokens[i - 1];

                if (next && next.tokenValue == _token2.default.SYMBOL.COLON && (!prev || prev && prev.tokenValue !== '?')) t.tokenType = _token2.default.TYPE.OBJECT_KEY;

                if (t.tokenValue && t.tokenValue.startsWith('.')) t.tokenType = _token2.default.TYPE.STRING; // resolve expression error at app.task.taskCases[0].text
            }

            if (t && t.tokenType == _token2.default.TYPE.FUNCTION && t.tokenValue.indexOf('.') == 0) {
                t.tokenType = _token2.default.TYPE.OBJECT_KEY; // resolve expression [1,2,3].indexOf(2)
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
            if (token.tokenValue == _token2.default.SYMBOL.EQUAL && token[index + 1] && token[index + 1].tokenValue != _token2.default.SYMBOL.EQUAL) throw 'assign (like "a=b") not supported at directives for now, change your expression: ' + expression;
            if ([_token2.default.TYPE.VARIABLE, _token2.default.TYPE.FUNCTION].indexOf(token.tokenType) > -1) {
                out += variableReplacerStr.replace('{expr}', token.tokenValue);
            } else out += token.tokenValue || token.tokenType;
        });
        return out;
    };

    return Lexer;
}();

exports.default = Lexer;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

__webpack_require__(17);

__webpack_require__(16);

var _component = __webpack_require__(0);

var _component2 = _interopRequireDefault(_component);

var _miscUtils = __webpack_require__(1);

var _miscUtils2 = _interopRequireDefault(_miscUtils);

var _componentProto = __webpack_require__(3);

var _componentProto2 = _interopRequireDefault(_componentProto);

var _modelView = __webpack_require__(5);

var _modelView2 = _interopRequireDefault(_modelView);

var _directive = __webpack_require__(7);

var _directive2 = _interopRequireDefault(_directive);

var _scopedDomFragment = __webpack_require__(4);

var _scopedDomFragment2 = _interopRequireDefault(_scopedDomFragment);

var _router = __webpack_require__(11);

var _router2 = _interopRequireDefault(_router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
//import './polyfills/promiseLight'


if (_miscUtils2.default.isBadBrowser) {
    if (!window.html5) throw 'additional shim module for ie version 8 and less is needed';
}

var Core = function () {
    function Core() {
        _classCallCheck(this, Core);
    }

    Core.registerComponent = function registerComponent(ComponentClazz) {
        return new _componentProto2.default(ComponentClazz);
    };

    Core.registerComponents = function registerComponents(clazzArr) {
        if (_miscUtils2.default.isBadBrowser) {
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
        var properties = _componentProto2.default._newComponentInstance(propertiesOrClazz);
        var domElement = document.querySelector(domElementSelector);
        if (!domElement) throw 'can not apply bindings: root element with selector ' + domElementSelector + ' not defined';
        var modelView = new _modelView2.default(null, properties);
        var fragment = new _scopedDomFragment2.default(domElement, modelView);
        fragment.setMounted(true);
        fragment.setShown(true);
        fragment.run();
        // run if

        modelView.component = fragment;
        return fragment;
    };

    Core.digest = function digest() {
        _component2.default.digestAll();
    };

    Core.getComponentById = function getComponentById(id) {
        var cmp = _component2.default.getComponentByDomId(id);
        if (!cmp) return null;
        return cmp.modelView;
    };

    Core.getComponents = function getComponents() {
        return _component2.default.instances.map(function (c) {
            return c.modelView;
        });
    };

    Core._getComponentByInternalId = function _getComponentByInternalId(id) {
        return _component2.default.getComponentByInternalId(id);
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
        _directive2.default.all.push(dClass);
    };

    return Core;
}();

exports.default = Core;


Core.version = "0.9.13";
Core.buildAt = 1531229926514;

window.RF = Core;
window.RF.Router = _router2.default;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _domUtils = __webpack_require__(2);

var _domUtils2 = _interopRequireDefault(_domUtils);

var _component = __webpack_require__(0);

var _component2 = _interopRequireDefault(_component);

var _componentProto = __webpack_require__(3);

var _componentProto2 = _interopRequireDefault(_componentProto);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
        _domUtils2.default.addEventListener(window, 'hashchange', function () {
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
        _domUtils2.default.nodeListToArray(routeNode.childNodes).forEach(function (el) {
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
    _domUtils2.default.nodeListToArray(lastPageItem.component.node.childNodes).forEach(function (el) {
        routeNode.appendChild(el);
    });
    lastPageItem.component.setMounted(true, params);
    lastPageItem.component.setShown(true, params);
    _component2.default.digestAll();
};

var Router = function () {
    function Router() {
        _classCallCheck(this, Router);
    }

    Router.setup = function setup(keyValues) {
        var strategyName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Router.STRATEGY.MANUAL;

        Router._strategy = RouterStrategyProvider.getRouterStrategy(strategyName);
        var routePlaceholderNode = _domUtils2.default.getElementByAttribute(document, 'data-route');
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
                ComponentClass = _componentProto2.default.getByComponentClass(keyValues[key]);
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

exports.default = Router;


Router._pages = {};
Router._strategy = null;

Router.STRATEGY = {
    MANUAL: 0,
    HASH: 1
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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

exports.default = TemplateLoader;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

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

var _scopedDomFragment = __webpack_require__(4);

var _scopedDomFragment2 = _interopRequireDefault(_scopedDomFragment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
                _domUtils2.default.setAttribute(domEl, attr.name, attr.value);
            }
        });
    };

    ComponentHelper._runTransclNode = function _runTransclNode(componentProto, domEl, transclNode, transclComponents) {
        var transclusionId = _domUtils2.default.getAttribute(domEl, 'data-transclusion-id') || '';
        var name = transclNode.getAttribute(dataTransclusion);
        var nameSpecifiedById = transclusionId ? name += '\\:\\#' + transclusionId : '';
        if (!name) {
            console.error(componentProto.node);
            console.error(transclNode);
            throw dataTransclusion + ' attribute can not be empty';
        }

        var recipients = _domUtils2.default.nodeListToArray(domEl.querySelectorAll('[' + dataTransclusion + '="' + name + '"],[' + dataTransclusion + '="' + nameSpecifiedById + '"]')).filter(function (el) {
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
        if (_domUtils2.default.getAttribute(domEl, 'data-_processed')) return;
        _domUtils2.default.setAttribute(domEl, 'data-_processed', '1');

        var hasNotTranscluded = false;
        _domUtils2.default.nodeListToArray(domEl.childNodes).forEach(function (chdrn) {
            if (chdrn.hasAttribute && !chdrn.hasAttribute(dataTransclusion)) hasNotTranscluded = true;
        });
        if (hasNotTranscluded) {
            console.warn(domEl);
            console.warn('children elements of component ' + componentProto.name + ' will be removed');
        }

        var domId = _domUtils2.default.getAttribute(domEl, 'id');
        var componentAttrs = _domUtils2.default.getNodeAttributes(domEl);
        var componentNode = componentProto.node.cloneNode(true);
        _domUtils2.default.nodeListToArray(componentNode.querySelectorAll('[' + dataTransclusion + ']')).forEach(function (transclNode) {
            ComponentHelper._runTransclNode(componentProto, domEl, transclNode, transclComponents);
        });
        domEl.parentNode.insertBefore(componentNode, domEl);

        var dataStateExpression = domEl.getAttribute('data-state');
        var dataState = dataStateExpression ? _expressionEngine2.default.executeExpression(dataStateExpression, rootComponent) : {};
        var component = componentProto.newInstance(componentNode, dataState);
        domId && (component.domId = domId);

        component.parent = rootComponent;
        component.parent.addChild(component);
        if (dataStateExpression) component.stateExpression = dataStateExpression;
        component.disableParentScopeEvaluation = true; // avoid recursion in Component

        component.run();

        _domUtils2.default.remove(domEl);
        componentNodes.push({ component: component, componentNode: componentNode, attrs: componentAttrs });
    };

    ComponentHelper._runComponent = function _runComponent(rootComponent, componentProto) {
        var transclComponents = [];
        var domEls = _domUtils2.default.nodeListToArray(rootComponent.node.getElementsByTagName(componentProto.name));
        if (rootComponent.node.tagName.toLowerCase() == componentProto.name.toLowerCase()) {
            console.error('\n                   Can not use "data-for" attribute at component directly. Use "data-for" directive at parent node');
            console.error('component node:', rootComponent.node);
            throw "Can not use data-for attribute at component";
        }
        var componentNodes = [];
        domEls.forEach(function (domEl) {
            var hasClosestSameComponent = domEl.parentNode && _domUtils2.default.closest(domEl.parentNode, domEl.tagName.toLowerCase());
            if (hasClosestSameComponent) return;
            ComponentHelper._runComponentDomEl(rootComponent, componentProto, domEl, transclComponents, componentNodes);
        });
        var hasStateChanged = false;
        componentNodes.forEach(function (item) {
            var children = _domUtils2.default.removeParentButNotChildren(item.componentNode);
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
        hasStateChanged && _component2.default.digestAll();
        return transclComponents;
    };

    ComponentHelper._runTransclusionComponent = function _runTransclusionComponent(rootComponent, trnscl) {
        _domUtils2.default.nodeListToArray(trnscl.rcp.childNodes).forEach(function (n) {
            trnscl.transclNode.appendChild(n);
        });
        var transclComponent = new _scopedDomFragment2.default(trnscl.transclNode, rootComponent.modelView);
        rootComponent.addChild(transclComponent);
        transclComponent.parent = rootComponent;
        _domUtils2.default.setAttribute(trnscl.transclNode, 'data-_processed', '1');
        transclComponent.run();
    };

    ComponentHelper.runComponents = function runComponents(rootComponent) {
        var transclComponents = [];
        _componentProto2.default.instances.forEach(function (componentProto) {
            transclComponents = transclComponents.concat(ComponentHelper._runComponent(rootComponent, componentProto));
        });
        transclComponents.forEach(function (trnscl) {
            ComponentHelper._runTransclusionComponent(rootComponent, trnscl);
        });
    };

    return ComponentHelper;
}();

exports.default = ComponentHelper;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _component = __webpack_require__(0);

var _component2 = _interopRequireDefault(_component);

var _miscUtils = __webpack_require__(1);

var _miscUtils2 = _interopRequireDefault(_miscUtils);

var _domUtils = __webpack_require__(2);

var _domUtils2 = _interopRequireDefault(_domUtils);

var _modelView = __webpack_require__(5);

var _modelView2 = _interopRequireDefault(_modelView);

var _scopedDomFragment = __webpack_require__(4);

var _scopedDomFragment2 = _interopRequireDefault(_scopedDomFragment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ScopedLoopContainer = function (_Component) {
    _inherits(ScopedLoopContainer, _Component);

    function ScopedLoopContainer(node, modelView) {
        _classCallCheck(this, ScopedLoopContainer);

        var _this = _possibleConstructorReturn(this, _Component.call(this, null, node, modelView));

        if (_domUtils2.default.getAttribute(node, 'data-for')) throw 'can not use "data-for" attribute at component directly. Use this directive at parent node';

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
        _domUtils2.default.remove(this.node);
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
        if (!newArr.splice) newArr = _miscUtils2.default.objectToArray(newArr);

        if (!newArr.forEach) {
            console.error(this.node);
            throw 'can not evaluate loop expression: ' + this.eachItemName + (this.indexName ? ',' + this.indexName : '') + '. Expected object or array, but ' + newArr + ' found.';
        }

        var index = 0;
        newArr.forEach(function (iterableItem, i) {

            if (iterableItem['key'] !== undefined && iterableItem['value'] !== undefined) {
                // if looped object with key and value pairs
                i = iterableItem.key;
                iterableItem = iterableItem.value;
            }

            if (!_this3.scopedDomFragments[index]) {

                var props = {};
                props[_this3.eachItemName] = iterableItem;
                if (_this3.indexName) props[_this3.indexName] = i;
                var localModelView = new _modelView2.default(_this3.indexName, props);

                var node = _this3.node.cloneNode(true);
                var scopedDomFragment = new _scopedDomFragment2.default(node, localModelView);
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
}(_component2.default);

exports.default = ScopedLoopContainer;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _lexer = __webpack_require__(9);

var _lexer2 = _interopRequireDefault(_lexer);

var _token = __webpack_require__(8);

var _token2 = _interopRequireDefault(_token);

var _expressionEngine = __webpack_require__(6);

var _expressionEngine2 = _interopRequireDefault(_expressionEngine);

var _domUtils = __webpack_require__(2);

var _domUtils2 = _interopRequireDefault(_domUtils);

var _miscUtils = __webpack_require__(1);

var _miscUtils2 = _interopRequireDefault(_miscUtils);

var _scopedLoopContainer = __webpack_require__(14);

var _scopedLoopContainer2 = _interopRequireDefault(_scopedLoopContainer);

var _componentHelper = __webpack_require__(13);

var _componentHelper2 = _interopRequireDefault(_componentHelper);

var _component = __webpack_require__(0);

var _component2 = _interopRequireDefault(_component);

var _directive = __webpack_require__(7);

var _directive2 = _interopRequireDefault(_directive);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DirectiveEngine = function () {
    function DirectiveEngine(component) {
        _classCallCheck(this, DirectiveEngine);

        this.component = component;
        DirectiveEngine.instances.push(this);
    }

    DirectiveEngine.prototype._eachElementWithAttr = function _eachElementWithAttr(dataAttrName, onEachElementFn) {
        var elements = [];
        var nodes = _domUtils2.default.getElementsByAttribute(this.component.node, dataAttrName);
        for (var i = 0; i < nodes.length; i++) {
            elements.push(nodes[i]);
        }
        if (_domUtils2.default.hasAttribute(this.component.node, dataAttrName)) elements.push(this.component.node);
        elements.forEach(function (el) {
            var expression = _domUtils2.default.getAttribute(el, dataAttrName);
            if (!expression) return;
            _domUtils2.default.removeAttribute(el, dataAttrName);
            _domUtils2.default.setAttribute(el, '_' + dataAttrName, expression);
            var processed = onEachElementFn(el, expression);
            if (processed === false) _domUtils2.default.setAttribute(el, dataAttrName, expression);
        });
    };

    DirectiveEngine.prototype.runDirective_For = function runDirective_For() {
        var _this = this;

        this._eachElementWithAttr('data-for', function (el, expression) {
            var closestTransclusionEl = _domUtils2.default.closest(el, '[data-transclusion]');

            if (closestTransclusionEl && !_domUtils2.default.getAttribute(closestTransclusionEl, 'data-_processed')) return false;
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
            var variables = _lexer2.default.tokenize(tokens[0]).filter(function (t) {
                return [_token2.default.TYPE.VARIABLE, _token2.default.TYPE.OBJECT_KEY].indexOf(t.tokenType) > -1;
            }).map(function (t) {
                return t.tokenValue;
            });

            if (!variables.length) throw 'can not parse expression: ' + expression;
            var eachItemName = variables[0];
            var indexName = variables[1];
            tokens.shift();
            tokens.shift();
            var iterableObjectExpr = tokens.join(' ');
            var scopedLoopContainer = new _scopedLoopContainer2.default(el, _this.component.modelView);
            scopedLoopContainer.parent = _this.component;
            scopedLoopContainer.run(eachItemName, indexName, iterableObjectExpr, trackBy);
        });
    };

    DirectiveEngine.prototype.runTextNodes = function runTextNodes() {
        var _this2 = this;

        _domUtils2.default.processScopedTextNodes(this.component.node).forEach(function (it) {
            _this2.component.addWatcher(it.expression, function (value) {
                if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
                    value = _miscUtils2.default.deepCopy(value);
                    value = value && _miscUtils2.default.stringify(value) || '';
                }
                _domUtils2.default.setTextNodeValue(it.node, value);
            }, _domUtils2.default._get_If_expressionTopDownList(it.node));
        });
    };

    DirectiveEngine.prototype._runDomEvent = function _runDomEvent(el, expression, eventName) {
        var _this3 = this;

        var closestForm = _domUtils2.default.getClosestElWithTagName(el, 'form');
        var shouldPreventDefault = !!closestForm && !closestForm.__shouldPreventDefault__;
        var fn = _expressionEngine2.default.getExpressionFn(expression);
        if (shouldPreventDefault && el !== closestForm) {
            _domUtils2.default.addEventListener(closestForm, 'submit', function (e) {
                _domUtils2.default.preventDefault(e);
                return false;
            });
        }

        _domUtils2.default.addEventListener(el, eventName, function (e) {
            if (_miscUtils2.default.isIE && eventName === 'input') {
                // ie fire 'input event on placeholder changes
                if (document.activeElement !== el) return;
            }
            _this3.component.modelView.$event = e;
            var res = _expressionEngine2.default.runExpressionFn(fn, _this3.component);
            _miscUtils2.default.resolvePossiblePromiseResult(res);
            delete _this3.component.modelView.$event;
            _component2.default.digestAll();
            if (eventName === 'submit') {
                _domUtils2.default.preventDefault(e);
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
            var events = _domUtils2.default.getDefaultInputChangeEvents(el).split(',');
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
        var selectedEls = _domUtils2.default.nodeListToArray(selectEl.getElementsByTagName('option')).filter(function (opt) {
            return opt.selected;
        });
        selectedEls.forEach(function (selectedEl) {
            var dataValueAttr = _domUtils2.default.getAttribute(selectedEl, 'data-value');
            var component = void 0;
            component = _component2.default.getComponentByInternalId(_domUtils2.default.getAttribute(selectedEl, 'data-component-id'));
            if (component && dataValueAttr) {
                val.push(_expressionEngine2.default.executeExpression(dataValueAttr, component));
            } else {
                val.push(_domUtils2.default.getAttribute(selectedEl, 'value'));
            }
        });
        _expressionEngine2.default.setValueToContext(this.component, modelExpression, isMultiple ? val : val[0]);
    };

    DirectiveEngine.prototype._addSelectModelWatcher = function _addSelectModelWatcher(el, expression) {
        this.component.addWatcher(expression, function (value) {
            if (el.tagName.toLowerCase() == 'select') {
                var isMultiple = el.multiple;
                var isModelSet = false;
                _domUtils2.default.nodeListToArray(_domUtils2.default.nodeListToArray(el.getElementsByTagName('option'))).some(function (opt) {
                    var modelItemExpression = _domUtils2.default.getAttribute(opt, 'data-value');
                    if (!modelItemExpression) return;
                    var componentId = _domUtils2.default.getAttribute(opt, 'data-component-id');
                    var component = _component2.default.getComponentByInternalId(componentId);

                    var modelItem = _expressionEngine2.default.executeExpression(modelItemExpression, component);
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
                        _domUtils2.default.nodeListToArray(_domUtils2.default.nodeListToArray(el.getElementsByTagName('option'))).forEach(function (opt) {
                            opt.selected = value.indexOf(_domUtils2.default.getAttribute(opt, 'value')) > -1;
                        });
                    }
                }
            } else {
                if (_domUtils2.default.getInputValue(el) == value) return;
                if (value == undefined) value = '';
                _domUtils2.default.setInputValue(el, value);
            }
        }, _domUtils2.default._get_If_expressionTopDownList(el));
    };

    DirectiveEngine.prototype.runDirective_Model = function runDirective_Model() {
        var _this9 = this;

        this._eachElementWithAttr('data-model', function (el, expression) {
            var isNumeric = _domUtils2.default.getAttribute(el, 'type') === 'number';
            if (_domUtils2.default.getAttribute(el, 'type') == 'radio' && !_domUtils2.default.getAttribute(el, 'name')) _domUtils2.default.setAttribute(el, 'name', expression);
            var eventNames = _domUtils2.default.getDefaultInputChangeEvents(el);
            eventNames.split(',').forEach(function (eventName) {
                if (el.tagName.toLowerCase() == 'select') {
                    _domUtils2.default.addEventListener(el, eventName, function (e) {
                        _this9._runDirective_Model_OfSelect(el, expression);
                        _component2.default.digestAll();
                    });
                } else {
                    _domUtils2.default.addEventListener(el, eventName, function (e) {
                        var val = _domUtils2.default.getInputValue(el);
                        if (isNumeric && val.length) val = parseFloat(val);
                        _expressionEngine2.default.setValueToContext(_this9.component, expression, val);
                        _component2.default.digestAll();
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
                        _domUtils2.default.toggleClass(el, key, !!classNameOrObj[key]);
                    }
                } else {
                    el.className = initialClassName + ' ' + classNameOrObj;
                }
            }, _domUtils2.default._get_If_expressionTopDownList(el));
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
            }, _domUtils2.default._get_If_expressionTopDownList(el));
        });
    };

    DirectiveEngine.prototype.runDirective_Disabled = function runDirective_Disabled() {
        var _this12 = this;

        this._eachElementWithAttr('data-disabled', function (el, expression) {
            _this12.component.addWatcher(expression, function (value) {
                if (value) _domUtils2.default.setAttribute(el, 'disabled', 'disabled');else el.removeAttribute('disabled');
            }, _domUtils2.default._get_If_expressionTopDownList(el));
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
                    _domUtils2.default.remove(el);
                    //this.component.setMounted(false);
                    //this.component.setShown(false);
                    transclusionChildren.forEach(function (cmp) {
                        cmp.setMounted(false);
                        cmp.setShown(false);
                    });
                }
            }, _domUtils2.default._get_If_expressionTopDownList(el), 'ifAndShow_watchers');
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
            }, _domUtils2.default._get_If_expressionTopDownList(el), 'ifAndShow_watchers');
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
            }, _domUtils2.default._get_If_expressionTopDownList(el), true);
        });
    };

    DirectiveEngine.prototype.runDirective_Html = function runDirective_Html() {
        var _this16 = this;

        this._eachElementWithAttr('data-html', function (el, expression) {
            _this16.component.addWatcher(expression, function (val) {
                el.innerHTML = _domUtils2.default.sanitize(val);
            }, _domUtils2.default._get_If_expressionTopDownList(el));
        });
    };

    DirectiveEngine.prototype._runAttributes = function _runAttributes(el, properties) {
        Object.keys(properties).forEach(function (key) {
            var val = properties[key];
            if (typeof val == 'boolean') val ? _domUtils2.default.setAttribute(el, key, key) : el.removeAttribute(key);else _domUtils2.default.setAttribute(el, key, val);
        });
    };

    DirectiveEngine.prototype.runDirective_Attributes = function runDirective_Attributes() {
        var _this17 = this;

        this._eachElementWithAttr('data-attributes', function (el, expression) {
            _this17.component.addWatcher(expression, function (properties) {
                _this17._runAttributes(el, properties);
            }, _domUtils2.default._get_If_expressionTopDownList(el));
        });
    };

    DirectiveEngine.prototype.runDirective_Attribute = function runDirective_Attribute() {
        var _this18 = this;

        this._eachElementWithAttr('data-attribute', function (el, expression) {
            expression = '{' + expression + '}';
            _this18.component.addWatcher(expression, function (properties) {
                _this18._runAttributes(el, properties);
            }, _domUtils2.default._get_If_expressionTopDownList(el));
        });
    };

    DirectiveEngine.prototype.runComponents = function runComponents() {
        _componentHelper2.default.runComponents(this.component);
    };

    DirectiveEngine.prototype.runExpressionsInAttrs = function runExpressionsInAttrs() {
        var _this19 = this;

        _domUtils2.default.nodeListToArray(_domUtils2.default.querySelectorAll(this.component.node, '*')).forEach(function (el) {
            Array.prototype.forEach.call(el.attributes, function (attr) {
                if (!attr) return;
                var name = attr.name,
                    value = attr.value;

                if (value.indexOf('{{') == -1 && value.indexOf('}}') == -1) return;
                value = value.split(/[\n\t]|[\s]{2,}/).join(' ').trim();
                var resultExpArr = [],
                    resultExpr = void 0;
                value.split(_domUtils2.default.EXPRESSION_REGEXP).forEach(function (token) {
                    if (!token.length) return;
                    if (token.indexOf('{{') == 0) {
                        token = token.split('{{').join('').split('}}').join('');
                        resultExpArr.push('(' + token + ')');
                    } else {
                        resultExpArr.push('"' + token + '"');
                    }
                });
                resultExpr = resultExpArr.join('+');
                _domUtils2.default.removeAttribute(el, name);
                _this19.component.addWatcher(resultExpr, function (expr) {
                    expr = expr && expr.trim() || '';
                    _domUtils2.default.setAttribute(el, name, expr);
                }, _domUtils2.default._get_If_expressionTopDownList(el));
            });
        });
    };

    DirectiveEngine.prototype.runDragAndDrop = function runDragAndDrop() {
        var _this20 = this;

        this._eachElementWithAttr('data-draggable', function (el, expression) {
            _domUtils2.default.addEventListener(el, 'mousedown', function (e) {
                var mouseX = e.offsetX,
                    mouseY = e.offsetY;
                el.__coords = { mouseX: mouseX, mouseY: mouseY };
            });
            _domUtils2.default.addEventListener(el, 'dragstart', function (e) {
                var id = Math.random() + '_' + Math.random();
                var clientRect = el.getBoundingClientRect();
                var mouseX = e.clientX,
                    mouseY = e.clientY;
                DirectiveEngine.ddObjects[id] = {
                    obj: _expressionEngine2.default.executeExpression(expression, _this20.component),
                    coords: el.__coords
                };
                e.dataTransfer.setData('text/plain', id); //cannot be empty string
                e.dataTransfer.effectAllowed = 'move';
            });
            _this20.component.addWatcher(expression, function (draggableObj) {
                _domUtils2.default.setAttribute(el, 'draggable', '' + !!draggableObj);
            }, _domUtils2.default._get_If_expressionTopDownList(el));
        });
        this._eachElementWithAttr('data-droppable', function (el, expression) {
            var callbackFn = _expressionEngine2.default.executeExpression(expression, _this20.component);
            _domUtils2.default.addEventListener(el, 'dragover', function (e) {
                e.preventDefault();
            });
            _domUtils2.default.addEventListener(el, 'drop', function (e) {
                e.preventDefault();
                var id = e.dataTransfer.getData('text/plain');
                if (id === undefined) return;

                var _ref = DirectiveEngine.ddObjects[id] || {},
                    obj = _ref.obj,
                    coords = _ref.coords;

                if (!obj) return;
                var res = void 0;
                callbackFn && (res = callbackFn(obj, e, coords));
                _miscUtils2.default.resolvePossiblePromiseResult(res);
                delete DirectiveEngine.ddObjects[id];
            });
        });
    };

    DirectiveEngine.prototype.runCustomDirectives = function runCustomDirectives() {
        var _this21 = this;

        _directive2.default.all.forEach(function (DClass) {
            _this21._eachElementWithAttr(DClass.decoratedName, function (el, expression) {
                var exprVal = _expressionEngine2.default.executeExpression(expression, _this21.component);
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

exports.default = DirectiveEngine;


DirectiveEngine.ddObjects = {};
DirectiveEngine.instances = [];

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

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

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

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

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(10);


/***/ })
/******/ ]);

/***/ }),
/* 195 */
/***/ (function(module, exports) {


if (!Array.prototype.findIndex) {
    Array.prototype.findIndex = function(obj){
        return this.indexOf(obj);
    };
}

if (!Array.prototype.includes) {
    Array.prototype.includes = function(obj){
        return this.indexOf(obj)>-1;
    };
}

/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(69);
__webpack_require__(195);
__webpack_require__(68);
__webpack_require__(194);
var modal_1 = __webpack_require__(193);
var collapsible_1 = __webpack_require__(191);
var alertDialog_1 = __webpack_require__(189);
var confirmDialog_1 = __webpack_require__(187);
var inputFile_1 = __webpack_require__(185);
var colorPicker_1 = __webpack_require__(183);
var colorPickerDialog_1 = __webpack_require__(181);
var anglePicker_1 = __webpack_require__(142);
var draggableDirective_1 = __webpack_require__(140);
var resourceHelper_1 = __webpack_require__(47);
var explorer_1 = __webpack_require__(138);
var editor_1 = __webpack_require__(136);
var projectDialog_1 = __webpack_require__(134);
var gameProps_1 = __webpack_require__(132);
var particleSystems_1 = __webpack_require__(130);
var sounds_1 = __webpack_require__(128);
var fonts_1 = __webpack_require__(126);
var spriteSheets_1 = __webpack_require__(124);
var scripts_1 = __webpack_require__(122);
var gameObjects_1 = __webpack_require__(120);
var scenes_1 = __webpack_require__(118);
var userInterface_1 = __webpack_require__(116);
var topPanel_1 = __webpack_require__(114);
var popupBlocked_1 = __webpack_require__(112);
var scriptEditor_1 = __webpack_require__(111);
var sceneCentralPanel_1 = __webpack_require__(109);
var sceneCursor_1 = __webpack_require__(107);
var sceneRightPanel_1 = __webpack_require__(105);
var gameObjectRightPanel_1 = __webpack_require__(103);
var gameObjectRow_1 = __webpack_require__(101);
var dialogs_1 = __webpack_require__(99);
var particleSystemDialog_1 = __webpack_require__(97);
var soundDialog_1 = __webpack_require__(95);
var fontDialog_1 = __webpack_require__(93);
var spriteSheetDialog_1 = __webpack_require__(90);
var gameObjectDialog_1 = __webpack_require__(88);
var sceneDialog_1 = __webpack_require__(86);
var layerDialog_1 = __webpack_require__(84);
var particleSystemPreviewDialog_1 = __webpack_require__(82);
var frameAnimationDialog_1 = __webpack_require__(80);
var commonBehaviourDialog_1 = __webpack_require__(78);
var buildDialog_1 = __webpack_require__(76);
__webpack_require__(199);
var scriptDialog_1 = __webpack_require__(74);
var editableArray_1 = __webpack_require__(72);
RF.registerDirectives([
    draggableDirective_1.DraggableDirective
]);
RF.registerComponents([
    modal_1.AppModal, collapsible_1.Collapsible, alertDialog_1.AlertDialog,
    confirmDialog_1.ConfirmDialog, inputFile_1.InputFile, colorPicker_1.ColorPicker,
    anglePicker_1.AnglePicker, colorPickerDialog_1.ColorPickerDialog, explorer_1.Explorer,
    projectDialog_1.ProjectDialog, editor_1.Editor, gameProps_1.GameProps,
    scriptDialog_1.ScriptDialog, editableArray_1.EditableArray,
    particleSystems_1.ParticleSystems, sounds_1.Sounds, fonts_1.Fonts, scripts_1.Scripts,
    spriteSheets_1.SpriteSheets, gameObjects_1.GameObjects, scenes_1.Scenes,
    userInterface_1.UserInterface, topPanel_1.TopPanel, popupBlocked_1.PopupBlocked, scriptEditor_1.ScriptEditor,
    sceneCentralPanel_1.SceneCentralPanel, sceneRightPanel_1.SceneRightPanel, gameObjectRightPanel_1.GameObjectRightPanel,
    dialogs_1.Dialogs, particleSystemDialog_1.ParticleSystemDialog, gameObjectRow_1.GameObjectRow,
    soundDialog_1.SoundDialog, fontDialog_1.FontDialog, spriteSheetDialog_1.SpriteSheetDialog,
    gameObjectDialog_1.GameObjectDialog, sceneDialog_1.SceneDialog, layerDialog_1.LayerDialog,
    buildDialog_1.BuildDialog, sceneCursor_1.SceneCursor,
    particleSystemPreviewDialog_1.ParticleSystemPreviewDialog, frameAnimationDialog_1.FrameAnimationDialog, commonBehaviourDialog_1.CommonBehaviourDialog
]);
RF.Router.setup({
    explorer: explorer_1.Explorer,
    editor: editor_1.Editor
});
RF.applyBindings('body');
if (sessionStorage['projectName']) {
    resourceHelper_1.ResourceHelper.loadProject(sessionStorage['projectName']);
}
else
    RF.Router.navigateTo('explorer');
console.log("built at: " + new Date(+1533737381724));


/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(196);


/***/ }),
/* 198 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 199 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 200 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 201 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 202 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 203 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 204 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 205 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 206 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 207 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 208 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 209 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 210 */,
/* 211 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);