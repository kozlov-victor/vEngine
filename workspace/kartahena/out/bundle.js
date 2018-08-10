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
/******/ 	return __webpack_require__(__webpack_require__.s = 104);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
var size_1 = __webpack_require__(17);
var point2d_1 = __webpack_require__(3);
var objectPool_1 = __webpack_require__(9);
var global_1 = __webpack_require__(2);
var observableEntity_1 = __webpack_require__(44);
var Rect = /** @class */function (_super) {
    __extends(Rect, _super);
    function Rect(x, y, width, height, onChangedFn) {
        if (x === void 0) {
            x = 0;
        }
        if (y === void 0) {
            y = 0;
        }
        if (width === void 0) {
            width = 0;
        }
        if (height === void 0) {
            height = 0;
        }
        var _this = _super.call(this) || this;
        if (onChangedFn) _this.addListener(onChangedFn);
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
        if (this.p === undefined) this.p = new point2d_1.Point2d(0, 0);
        this.p.setXY(this.x, this.y);
        this.p.addListener(function () {
            return _this.setXY(_this.p.x, _this.p.y);
        });
        return this.p;
    };
    Rect.prototype.getSize = function () {
        if (this.size === undefined) this.size = new size_1.Size();
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
}(observableEntity_1.ObservableEntity);
exports.Rect = Rect;
global_1._global['Rect'] = Rect;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var mat4 = __webpack_require__(8);
var point2d_1 = __webpack_require__(3);
// todo class
exports.isPointInRect = function (point, rect, angle) {
    // if (angle) {
    //     const vec2 = new Vec2(point.x - rect.x - rect.width/2,point.y - rect.y - rect.height/2);
    //     vec2.setAngle(vec2.getAngle() - angle);
    //     point = {x:vec2.getX() + point.x,y:vec2.getY() + point.y};
    //
    // }
    return point.x > rect.x && point.x < rect.x + rect.width && point.y > rect.y && point.y < rect.y + rect.height;
};
exports.overlapTest = function (a, b) {
    return a.x < b.x + b.width && a.x + a.width > b.x && a.y < b.y + b.height && a.y + a.height > b.y;
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
    if (epsilon === void 0) {
        epsilon = EPSILON_CLOSE_TO;
    }
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
    if (res > max) res = max;else if (res < min) res = min;
    return res;
};
/**
 * analog of glu unproject function
 * https://github.com/bringhurst/webgl-unproject/blob/master/GLU.js
 */
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
// simple linear tweening - no easing, no acceleration
exports.linear = function (t, b, c, d) {
    return c * t / d + b;
};
// quadratic easing in - accelerating from zero velocity
exports.easeInQuad = function (t, b, c, d) {
    t /= d;
    return c * t * t + b;
};
// quadratic easing out - decelerating to zero velocity
exports.easeOutQuad = function (t, b, c, d) {
    t /= d;
    return -c * t * (t - 2) + b;
};
// quadratic easing in/out - acceleration until halfway, then deceleration
exports.easeInOutQuad = function (t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
};
// cubic easing in - accelerating from zero velocity
exports.easeInCubic = function (t, b, c, d) {
    t /= d;
    return c * t * t * t + b;
};
// cubic easing out - decelerating to zero velocity
exports.easeOutCubic = function (t, b, c, d) {
    t /= d;
    t--;
    return c * (t * t * t + 1) + b;
};
// cubic easing in/out - acceleration until halfway, then deceleration
exports.easeInOutCubic = function (t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t * t + b;
    t -= 2;
    return c / 2 * (t * t * t + 2) + b;
};
// quartic easing in - accelerating from zero velocity
exports.easeInQuart = function (t, b, c, d) {
    t /= d;
    return c * t * t * t * t + b;
};
// quartic easing out - decelerating to zero velocity
exports.easeOutQuart = function (t, b, c, d) {
    t /= d;
    t--;
    return -c * (t * t * t * t - 1) + b;
};
// quartic easing in/out - acceleration until halfway, then deceleration
exports.easeInOutQuart = function (t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t * t * t + b;
    t -= 2;
    return -c / 2 * (t * t * t * t - 2) + b;
};
// quintic easing in - accelerating from zero velocity
exports.easeInQuint = function (t, b, c, d) {
    t /= d;
    return c * t * t * t * t * t + b;
};
// quintic easing out - decelerating to zero velocity
exports.easeOutQuint = function (t, b, c, d) {
    t /= d;
    t--;
    return c * (t * t * t * t * t + 1) + b;
};
// quintic easing in/out - acceleration until halfway, then deceleration
exports.easeInOutQuint = function (t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t * t * t * t + b;
    t -= 2;
    return c / 2 * (t * t * t * t * t + 2) + b;
};
// sinusoidal easing in - accelerating from zero velocity
exports.easeInSine = function (t, b, c, d) {
    return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
};
// sinusoidal easing out - decelerating to zero velocity
exports.easeOutSine = function (t, b, c, d) {
    return c * Math.sin(t / d * (Math.PI / 2)) + b;
};
// sinusoidal easing in/out - accelerating until halfway, then decelerating
exports.easeInOutSine = function (t, b, c, d) {
    return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
};
// exponential easing in - accelerating from zero velocity
exports.easeInExpo = function (t, b, c, d) {
    return c * Math.pow(2, 10 * (t / d - 1)) + b;
};
// exponential easing out - decelerating to zero velocity
exports.easeOutExpo = function (t, b, c, d) {
    return c * (-Math.pow(2, -10 * t / d) + 1) + b;
};
// exponential easing in/out - accelerating until halfway, then decelerating
exports.easeInOutExpo = function (t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
    t--;
    return c / 2 * (-Math.pow(2, -10 * t) + 2) + b;
};
// circular easing in - accelerating from zero velocity
exports.easeInCirc = function (t, b, c, d) {
    t /= d;
    return -c * (Math.sqrt(1 - t * t) - 1) + b;
};
// circular easing out - decelerating to zero velocity
exports.easeOutCirc = function (t, b, c, d) {
    t /= d;
    t--;
    return c * Math.sqrt(1 - t * t) + b;
};
// circular easing in/out - acceleration until halfway, then deceleration
exports.easeInOutCirc = function (t, b, c, d) {
    t /= d / 2;
    if (t < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
    t -= 2;
    return c / 2 * (Math.sqrt(1 - t * t) + 1) + b;
};
exports.easeInElastic = function (t, b, c, d) {
    var s = 1.70158,
        p = 0,
        a = c;
    if (t === 0) return b;
    if ((t /= d) === 1) return b + c;
    if (!p) p = d * .3;
    if (a < Math.abs(c)) {
        a = c;
        s = p / 4;
    } else s = p / (2 * Math.PI) * Math.asin(c / a);
    return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
};
exports.easeOutElastic = function (t, b, c, d) {
    var s = 1.70158,
        p = 0,
        a = c;
    if (t === 0) return b;
    if ((t /= d) === 1) return b + c;
    if (!p) p = d * .3;
    if (a < Math.abs(c)) {
        a = c;
        s = p / 4;
    } else s = p / (2 * Math.PI) * Math.asin(c / a);
    return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
};
exports.easeInOutElastic = function (t, b, c, d) {
    var s = 1.70158,
        p = 0,
        a = c;
    if (t === 0) return b;
    if ((t /= d / 2) === 2) return b + c;
    if (!p) p = d * (.3 * 1.5);
    if (a < Math.abs(c)) {
        a = c;
        s = p / 4;
    } else s = p / (2 * Math.PI) * Math.asin(c / a);
    if (t < 1) return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
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
    if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= 1.525) + 1) * t - s)) + b;
    return c / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b;
};
exports.easeInBounce = function (t, b, c, d) {
    return c - exports.easeOutBounce(d - t, 0, c, d) + b;
};
exports.easeOutBounce = function (t, b, c, d) {
    if ((t /= d) < 1 / 2.75) {
        return c * (7.5625 * t * t) + b;
    } else if (t < 2 / 2.75) {
        return c * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + b;
    } else if (t < 2.5 / 2.75) {
        return c * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + b;
    } else {
        return c * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + b;
    }
};
exports.easeInOutBounce = function (t, b, c, d) {
    if (t < d / 2) return exports.easeInBounce(t * 2, 0, c, d) * .5 + b;else return exports.easeOutBounce(t * 2 - d, 0, c, d) * .5 + c * .5 + b;
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
exports._global = {};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
var objectPool_1 = __webpack_require__(9);
var observableEntity_1 = __webpack_require__(44);
var global_1 = __webpack_require__(2);
var Point2d = /** @class */function (_super) {
    __extends(Point2d, _super);
    function Point2d(x, y, onChangedFn) {
        if (x === void 0) {
            x = 0;
        }
        if (y === void 0) {
            y = 0;
        }
        var _this = _super.call(this) || this;
        _this.x = 0;
        _this.y = 0;
        _this.x = x;
        _this.y = y;
        if (onChangedFn) _this.addListener(onChangedFn);
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
            //noinspection JSSuspiciousNameCombination
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
        if (!this._arr) this._arr = new Array(2);
        this._arr[0] = this.x;
        this._arr[1] = this.y;
        return this._arr;
    };
    Point2d.pool = new objectPool_1.ObjectPool(Point2d, 4);
    return Point2d;
}(observableEntity_1.ObservableEntity);
exports.Point2d = Point2d;
global_1._global['Point2d'] = Point2d;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*global DEBUG:true*/

Object.defineProperty(exports, "__esModule", { value: true });
var shaderProgramUtils_1 = __webpack_require__(5);
var ShaderProgram = /** @class */function () {
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
            if (!attrName) throw "can not found attribute location: attrLocationName not defined";
            if (this.attributes[attrName] === undefined) {
                console.log(this);
                throw "can not found attribute location for  " + attrName;
            }
        }
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, buffer.getGlBuffer());
        var attrLocation = this.attributes[attrName];
        this.gl.enableVertexAttribArray(attrLocation);
        this.gl.vertexAttribPointer(attrLocation, buffer.getItemSize(), buffer.getItemType(), // type of data
        false, // if the content is normalized [0..1] vectors
        0, // number of bytes to skip in between elements
        0 // offsets to the first element
        );
    };
    ShaderProgram.prototype.destroy = function () {
        this.gl.deleteProgram(this.program);
    };
    ShaderProgram.currentProgram = null;
    return ShaderProgram;
}();
exports.ShaderProgram = ShaderProgram;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
exports.compileShader = function (gl, shaderSource, shaderType) {
    if (true) {
        if (!shaderSource) throw "can not compile shader: shader source not specified for type " + shaderType;
    }
    // Create the shader object
    var shader = gl.createShader(shaderType);
    if (true && !shader) throw "can not allocate memory for shader: gl.createShader(shaderType)";
    // Load the shader source
    gl.shaderSource(shader, shaderSource);
    // Compile the shader
    gl.compileShader(shader);
    // Check the compile status
    var compiled = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
    if (!compiled) {
        // Something went wrong during compilation; get the error
        var lastError = gl.getShaderInfoLog(shader);
        gl.deleteShader(shader);
        if (true) {
            console.log(shaderSource);
            throw "Error compiling shader: " + lastError;
        } else {}
    }
    return shader;
};
exports.createProgram = function (gl, vertexShader, fragmentShader) {
    var program = gl.createProgram();
    if (true && !program) throw "can not allocate memory for gl.createProgram()";
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    // Check the link status
    var linked = gl.getProgramParameter(program, gl.LINK_STATUS);
    if (!linked) {
        // something went wrong with the link
        gl.deleteProgram(program);
        var lastError = gl.getProgramInfoLog(program);
        if (true) {
            var status = gl.getProgramParameter(program, gl.VALIDATE_STATUS);
            console.error('VALIDATE_STATUS', status);
            throw "Error in program linking " + lastError;
        } else {}
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
    SAMPLER_2D: 'sampler2D'
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
        if (true && !uniformData) throw "can not receive active uniforms info: gl.getActiveUniform()";
        var type = mapType(gl, uniformData.type);
        var location = gl.getUniformLocation(program, uniformData.name);
        if (true && location === null) throw "error finding uniform location: " + uniformData.name;
        uniforms[uniformData.name] = {
            type: type,
            size: uniformData.size,
            location: location,
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
        if (true && !attrData) throw "can not receive active attribute info: gl.getActiveAttrib()";
        var location = gl.getAttribLocation(program, attrData.name);
        if (true && location < 0) throw "error finding attribute location: " + attrData.name;
        attrMap[attrData.name] = location;
    }
    return attrMap;
};
var TypeNumber = {
    check: function (val) {
        if (isNaN(parseFloat(val)) || !isFinite(val)) throw "can not set uniform with value " + val + ": expected argument of type number";
    }
};
var TypeInt = {
    check: function (val) {
        TypeNumber.check(val);
        if (val !== ~~val) throw "can not set uniform with value " + val + ": expected argument of integer type, but " + val + " found";
    }
};
var TypeBool = {
    check: function (val) {
        if (!(val == true || val == false)) throw "can not set uniform with value " + val + ": expected argument of boolean type, but " + val + " found";
    }
};
var TypeArray = function (checker, size) {
    return {
        check: function (val) {
            if (!val) throw "can not set uniform  value: " + val;
            if (!val.splice) {
                console.error('Can not set uniform value', val);
                throw "can not set uniform with value [" + val + "]: expected argument of type Array";
            }
            if (size !== undefined && val.length !== size) throw "can not set uniform with value [" + val + "]: expected array with size " + size + ", but " + val.length + " found";
            for (var i = 0; i < val.length; i++) {
                try {
                    checker.check(val[i]);
                } catch (e) {
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
            case 'float':
                return function (gl, location, value) {
                    true && expect(value, TypeNumber);
                    gl.uniform1f(location, value);
                };
            case 'vec2':
                return function (gl, location, value) {
                    true && expect(value, TypeArray(TypeNumber, 2));
                    gl.uniform2f(location, value[0], value[1]);
                };
            case 'vec3':
                return function (gl, location, value) {
                    true && expect(value, TypeArray(TypeNumber, 3));
                    gl.uniform3f(location, value[0], value[1], value[2]);
                };
            case 'vec4':
                return function (gl, location, value) {
                    true && expect(value, TypeArray(TypeNumber, 4));
                    gl.uniform4f(location, value[0], value[1], value[2], value[3]);
                };
            case 'int':
                return function (gl, location, value) {
                    true && expect(value, TypeInt);
                    gl.uniform1i(location, value);
                };
            case 'ivec2':
                return function (gl, location, value) {
                    true && expect(value, TypeArray(TypeInt, 2));
                    gl.uniform2i(location, value[0], value[1]);
                };
            case 'ivec3':
                return function (gl, location, value) {
                    true && expect(value, TypeArray(TypeInt, 3));
                    gl.uniform3i(location, value[0], value[1], value[2]);
                };
            case 'ivec4':
                return function (gl, location, value) {
                    true && expect(value, TypeArray(TypeInt, 4));
                    gl.uniform4i(location, value[0], value[1], value[2], value[3]);
                };
            case 'bool':
                return function (gl, location, value) {
                    true && expect(value, TypeBool);
                    gl.uniform1i(location, value);
                };
            case 'bvec2':
                return function (gl, location, value) {
                    true && expect(value, TypeArray(TypeBool, 2));
                    gl.uniform2i(location, value[0], value[1]);
                };
            case 'bvec3':
                return function (gl, location, value) {
                    true && expect(value, TypeArray(TypeBool, 3));
                    gl.uniform3i(location, value[0], value[1], value[2]);
                };
            case 'bvec4':
                return function (gl, location, value) {
                    true && expect(value, TypeArray(TypeBool, 4));
                    gl.uniform4i(location, value[0], value[1], value[2], value[3]);
                };
            case 'mat2':
                return function (gl, location, value) {
                    true && expect(value, TypeArray(TypeNumber, 2 * 2));
                    gl.uniformMatrix2fv(location, false, value); // location, transpose (Must be false), value
                };
            case 'mat3':
                return function (gl, location, value) {
                    true && expect(value, TypeArray(TypeNumber, 3 * 3));
                    gl.uniformMatrix3fv(location, false, value);
                };
            case 'mat4':
                return function (gl, location, value) {
                    true && expect(value, TypeArray(TypeNumber, 4 * 4));
                    gl.uniformMatrix4fv(location, false, value);
                };
            case 'sampler2D':
                return function (gl, location, value) {
                    true && expect(value, TypeInt);
                    gl.uniform1i(location, value);
                };
            default:
                if (true) throw "can not set uniform for type " + type + " and size " + size;
                break;
        }
    } else {
        switch (type) {// ie uniform vec2 u_someVec2[3]
            case 'float':
                return function (gl, location, value) {
                    true && expect(value, TypeArray(TypeNumber));
                    gl.uniform1fv(location, value);
                };
            case 'vec2':
                return function (gl, location, value) {
                    true && expect(value, TypeArray(TypeNumber));
                    gl.uniform2fv(location, value);
                };
            case 'vec3':
                return function (gl, location, value) {
                    true && expect(value, TypeArray(TypeNumber));
                    gl.uniform3fv(location, value);
                };
            case 'vec4':
                return function (gl, location, value) {
                    true && expect(value, TypeArray(TypeNumber));
                    gl.uniform4fv(location, value);
                };
            case 'int':
                return function (gl, location, value) {
                    true && expect(value, TypeArray(TypeInt));
                    gl.uniform1iv(location, value);
                };
            case 'ivec2':
                return function (gl, location, value) {
                    true && expect(value, TypeArray(TypeInt));
                    gl.uniform2iv(location, value);
                };
            case 'ivec3':
                return function (gl, location, value) {
                    true && expect(value, TypeArray(TypeInt));
                    gl.uniform3iv(location, value);
                };
            case 'ivec4':
                return function (gl, location, value) {
                    true && expect(value, TypeArray(TypeInt));
                    gl.uniform4iv(location, value);
                };
            case 'bool':
                return function (gl, location, value) {
                    true && expect(value, TypeArray(TypeBool));
                    gl.uniform1iv(location, value);
                };
            case 'bvec2':
                return function (gl, location, value) {
                    true && expect(value, TypeArray(TypeBool));
                    gl.uniform2iv(location, value);
                };
            case 'bvec3':
                return function (gl, location, value) {
                    true && expect(value, TypeArray(TypeBool));
                    gl.uniform3iv(location, value);
                };
            case 'bvec4':
                return function (gl, location, value) {
                    true && expect(value, TypeArray(TypeBool));
                    gl.uniform4iv(location, value);
                };
            case 'sampler2D':
                return function (gl, location, value) {
                    true && expect(value, TypeArray(TypeBool));
                    gl.uniform1iv(location, value);
                };
            default:
                if (true) throw "can not set uniform for type " + type + " and size " + size;
                break;
        }
    }
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var timer_1 = __webpack_require__(82);
var commonObject_1 = __webpack_require__(13);
var tween_1 = __webpack_require__(39);
var eventEmitter_1 = __webpack_require__(38);
var decorators_1 = __webpack_require__(12);
var rect_1 = __webpack_require__(0);
var point2d_1 = __webpack_require__(3);
var BaseModel = /** @class */function (_super) {
    __extends(BaseModel, _super);
    function BaseModel(game) {
        var _this = _super.call(this) || this;
        _this.width = 0;
        _this.height = 0;
        _this.pos = new point2d_1.Point2d(0, 0, function () {
            return _this._dirty = true;
        });
        _this.scale = new point2d_1.Point2d(1, 1);
        _this.anchor = new point2d_1.Point2d(0, 0); // todo show in ui interface
        _this.angle = 0;
        _this.alpha = 1;
        _this.layerId = null;
        _this.fixedToCamera = false;
        _this.rigid = false;
        _this._tweens = [];
        _this._dirty = true;
        _this._timers = [];
        _this._rect = new rect_1.Rect(0, 0);
        if (true && !game) throw "can not create model '" + _this.type + "': game instance not passed to model constructor";
        _this.game = game;
        _this._emitter = new eventEmitter_1.EventEmitter();
        return _this;
    }
    BaseModel.prototype.setIndividualBehaviour = function (instance) {};
    BaseModel.prototype.setCommonBehaviour = function () {};
    BaseModel.prototype.onShow = function () {};
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
    /**
     * {target:obj,from:a,to:b,progress:fn,complete:fn,ease:str,time:t}}
     * @param desc
     */
    BaseModel.prototype.tween = function (desc) {
        var t = new tween_1.Tween(desc);
        this._tweens.push(t);
    };
    BaseModel.prototype.update = function (time, delta) {
        var _this = this;
        this._tweens.forEach(function (t, index) {
            t.update(time);
            if (t.isCompleted()) _this._tweens.splice(index, 1);
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
    BaseModel = __decorate([decorators_1.Transient({
        game: true,
        rigidBody: true
    })], BaseModel);
    return BaseModel;
}(commonObject_1.CommonObject);
exports.BaseModel = BaseModel;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var isEqual = function (a, b) {
    if (a === undefined) return false;
    if (a.splice) return false; // skip array checking for now
    return a === b;
};
var AbstractDrawer = /** @class */function () {
    function AbstractDrawer(gl) {
        this.program = null;
        this.uniformCache = {};
        this.gl = gl;
        AbstractDrawer.instances.push(this);
    }
    AbstractDrawer.prototype.bind = function () {
        if (AbstractDrawer.currentInstance !== null && AbstractDrawer.currentInstance !== this) {
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
        if (isEqual(this.uniformCache[name], value)) return;
        this.program.setUniform(name, value);
        this.uniformCache[name] = value;
    };
    AbstractDrawer.prototype.drawElements = function () {
        this.bufferInfo.draw();
    };
    AbstractDrawer.prototype.draw = function (textureInfos, uniforms, unused) {
        var _this = this;
        this.bind();
        Object.keys(uniforms).forEach(function (name) {
            return _this.setUniform(name, uniforms[name]);
        });
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
}();
exports.AbstractDrawer = AbstractDrawer;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
// todo convert to plain good oop style???
// https://evanw.github.io/lightgl.js/docs/matrix.html
exports.makeIdentity = function () {
    return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
};
exports.makeZToWMatrix = function (fudgeFactor) {
    return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, fudgeFactor, 0, 0, 0, 1];
};
exports.make2DProjection = function (width, height, depth) {
    // Note: This matrix flips the Y axis so 0 is at the top.
    return [2 / width, 0, 0, 0, 0, -2 / height, 0, 0, 0, 0, 2 / depth, 0, -1, 1, 0, 1];
};
exports.ortho = function (left, right, bottom, top, near, far) {
    var lr = 1 / (left - right),
        bt = 1 / (bottom - top),
        nf = 1 / (near - far);
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
    var f = 1.0 / Math.tan(fovy / 2),
        nf = 1 / (near - far);
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
    out[14] = 2 * far * near * nf;
    out[15] = 0;
    return out;
};
exports.makeTranslation = function (tx, ty, tz) {
    return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, tx, ty, tz, 1];
};
exports.makeXRotation = function (angleInRadians) {
    var c = Math.cos(angleInRadians);
    var s = Math.sin(angleInRadians);
    return [1, 0, 0, 0, 0, c, s, 0, 0, -s, c, 0, 0, 0, 0, 1];
};
exports.makeYRotation = function (angleInRadians) {
    var c = Math.cos(angleInRadians);
    var s = Math.sin(angleInRadians);
    return [c, 0, -s, 0, 0, 1, 0, 0, s, 0, c, 0, 0, 0, 0, 1];
};
exports.makeZRotation = function (angleInRadians) {
    var c = Math.cos(angleInRadians);
    var s = Math.sin(angleInRadians);
    return [c, s, 0, 0, -s, c, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
};
exports.makeScale = function (sx, sy, sz) {
    return [sx, 0, 0, 0, 0, sy, 0, 0, 0, 0, sz, 0, 0, 0, 0, 1];
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
        out[i] = inp[0] * matrix[0 * 4 + i] + inp[1] * matrix[1 * 4 + i] + inp[2] * matrix[2 * 4 + i] + inp[3] * matrix[3 * 4 + i];
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
    for (var i = 0; i < 16; i++) r[i] /= det;
    return r;
};
exports.IDENTITY = exports.makeIdentity();

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var ObjectPool = /** @class */function () {
    /**
     * 16 - nice magic value for default pool size
     * @param Class
     * @param {number} numberOfInstances
     */
    function ObjectPool(Class, numberOfInstances) {
        if (numberOfInstances === void 0) {
            numberOfInstances = 16;
        }
        this._pool = [];
        this._cnt = 0;
        if (true && !Class) throw "can not instantiate ObjectPool: class not provided in constructor";
        for (var i = 0; i < numberOfInstances; i++) {
            this._pool.push(new Class());
        }
    }
    ObjectPool.prototype.getNextObject = function () {
        return this._pool[this._cnt++ % this._pool.length];
    };
    return ObjectPool;
}();
exports.ObjectPool = ObjectPool;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
var shaderProgramUtils_1 = __webpack_require__(5);
var shaderGenerator_1 = __webpack_require__(46);
//position and texture
var TexShaderGenerator = /** @class */function (_super) {
    __extends(TexShaderGenerator, _super);
    function TexShaderGenerator() {
        var _this = _super.call(this) || this;
        _this.addAttribute(shaderProgramUtils_1.GL_TYPE.FLOAT_VEC4, 'a_position');
        _this.addAttribute(shaderProgramUtils_1.GL_TYPE.FLOAT_VEC2, 'a_texCoord');
        _this.addVertexUniform(shaderProgramUtils_1.GL_TYPE.FLOAT_MAT4, 'u_vertexMatrix');
        _this.addVertexUniform(shaderProgramUtils_1.GL_TYPE.FLOAT_MAT4, 'u_textureMatrix');
        _this.addVarying(shaderProgramUtils_1.GL_TYPE.FLOAT_VEC2, 'v_texCoord');
        //language=GLSL
        _this.prependFragmentCodeBlock("\n            vec4 tint(vec4 srcColor,vec4 tintColor){\n                vec3 r = vec3(srcColor) * (1.0 - tintColor.a) +\n                    vec3(tintColor) * tintColor.a;\n                vec4 result = vec4(r,srcColor.a);\n                return result;    \n            }\n        ");
        //language=GLSL
        _this.setVertexMainFn("\n            void main(){\n                gl_Position = u_vertexMatrix * a_position;\n                v_texCoord = (u_textureMatrix * vec4(a_texCoord, 0, 1)).xy;\n            } \n        ");
        _this.addFragmentUniform(shaderProgramUtils_1.GL_TYPE.SAMPLER_2D, 'texture');
        _this.addFragmentUniform(shaderProgramUtils_1.GL_TYPE.FLOAT, 'u_alpha');
        //language=GLSL
        _this.setFragmentMainFn("\n            void main(){\n                gl_FragColor = texture2D(texture, v_texCoord);\n                gl_FragColor.a *= u_alpha;\n            }\n        ");
        return _this;
    }
    return TexShaderGenerator;
}(shaderGenerator_1.ShaderGenerator);
exports.TexShaderGenerator = TexShaderGenerator;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var vertexBuffer_1 = __webpack_require__(98);
var indexBuffer_1 = __webpack_require__(97);
var BufferInfo = /** @class */function () {
    function BufferInfo(gl, description) {
        this.posVertexBuffer = null;
        this.posIndexBuffer = null;
        this.texVertexBuffer = null;
        this.drawMethod = null;
        this.numOfElementsToDraw = 0;
        this.gl = gl;
        if (true && description.drawMethod === undefined) throw "can not create BufferInfo: drawMethod not defined";
        this.drawMethod = description.drawMethod;
        if (true && !description.posVertexInfo) throw "can not create BufferInfo: posVertexInfo is mandatory";
        this.posVertexBuffer = new vertexBuffer_1.VertexBuffer(gl);
        this.posVertexBuffer.setData(description.posVertexInfo.array, description.posVertexInfo.type, description.posVertexInfo.size);
        this.posVertexBuffer.setAttrName(description.posVertexInfo.attrName);
        if (description.posIndexInfo) {
            this.posIndexBuffer = new indexBuffer_1.IndexBuffer(gl);
            this.posIndexBuffer.setData(description.posIndexInfo.array);
        } else this.numOfElementsToDraw = this._getNumOfElementsToDraw(this.drawMethod);
        if (description.texVertexInfo) {
            this.texVertexBuffer = new vertexBuffer_1.VertexBuffer(gl);
            this.texVertexBuffer.setData(description.texVertexInfo.array, description.texVertexInfo.type, description.texVertexInfo.size);
            this.texVertexBuffer.setAttrName(description.texVertexInfo.attrName);
        }
    }
    BufferInfo.prototype.bind = function (program) {
        program.bind();
        if (this.posIndexBuffer) this.posIndexBuffer.bind();
        if (this.posVertexBuffer) this.posVertexBuffer.bind(program);
        if (this.texVertexBuffer) this.texVertexBuffer.bind(program);
    };
    BufferInfo.prototype.unbind = function () {
        if (this.posIndexBuffer) this.posIndexBuffer.unbind();
        if (this.posVertexBuffer) this.posVertexBuffer.unbind();
        if (this.texVertexBuffer) this.texVertexBuffer.unbind();
    };
    BufferInfo.prototype.destroy = function () {
        if (this.posVertexBuffer) this.posVertexBuffer.destroy();
        if (this.posIndexBuffer) this.posIndexBuffer.destroy();
        if (this.texVertexBuffer) this.texVertexBuffer.destroy();
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
        } else {
            this.gl.drawArrays(this.drawMethod, 0, this.numOfElementsToDraw);
        }
    };
    return BufferInfo;
}();
exports.BufferInfo = BufferInfo;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
exports.Transient = function (params) {
    return function (target) {
        target.transient = params;
    };
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var isPropNotFit = function (key, val, opts) {
    if (!key) return true;
    if (key.indexOf('_') === 0) return true;
    if (val && val.call) return true;
    if (typeof val === 'string') return false;
    if (typeof val === 'number') return false;
    if (typeof val === 'boolean') return false;
    return val == null && !opts.preserveNull;
};
var isPrimitive = function (val) {
    return typeof val === 'string' || typeof val === 'number';
};
var deepCopy = function (obj, _clonedObjects) {
    if (_clonedObjects === void 0) {
        _clonedObjects = [];
    }
    if (obj === undefined) return undefined;else if (obj === null) return null;else if (typeof window !== 'undefined' && obj === window) return undefined;else if (_clonedObjects.indexOf(obj) > -1) return obj;else if (obj.fromJSON) return obj.fromJSON(obj.toJSON());
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
                clonedObject = deepCopy(obj[i], _clonedObjects);
                _clonedObjects.push(obj[i]);
            }
            out[i] = clonedObject;
        }
        return out;
    } else if (typeof obj === 'object') {
        var out = {};
        for (var i in obj) {
            if (!obj.hasOwnProperty(i)) continue;
            var clonedObject = void 0;
            if (_clonedObjects.indexOf(obj[i]) > -1) {
                clonedObject = obj[i];
            } else {
                _clonedObjects.push(obj);
                clonedObject = deepCopy(obj[i], _clonedObjects);
                _clonedObjects.push(obj[i]);
            }
            out[i] = clonedObject;
        }
        return out;
    } else return obj;
};
var CommonObject = /** @class */function () {
    function CommonObject() {
        this.id = null;
        this.name = null;
    }
    CommonObject.prototype.fromJSON = function (params, forceNew) {
        var _this = this;
        if (params === void 0) {
            params = {};
        }
        Object.keys(params).forEach(function (key) {
            var _a;
            if (key === 'type') return;
            if (!(key in _this)) {
                console.error(_this);
                throw "::fromJSON(): class " + _this.constructor["name"] + " has no property " + key;
            }
            if (params[key] && params[key].id && params[key].type) _this[key] = _this.game.repository.getObject(params[key].id, params[key].type, forceNew);else if (params[key] && params[key].forEach) {
                _this[key] = [];
                params[key].forEach(function (item) {
                    if (item && item.type && item.id) {
                        _this[key].push(_this.game.repository.getObject(item.id, item.type, forceNew));
                    } else {
                        _this[key].push(item);
                    }
                });
            } else if (_this[key] && _this[key].fromJSON) {
                _this[key].fromJSON(params[key]);
            } else if (_this[key] && _this[key].call) {
                (_a = _this[key]).call.apply(_a, [_this].concat(params[key]));
            } else {
                _this[key] = params[key];
            }
        });
        this.revalidate();
        return this;
    };
    CommonObject.prototype.toJSON = function (opts) {
        if (opts === void 0) {
            opts = { preserveNull: false };
        }
        var res = {};
        var _loop_1 = function (key) {
            if (isPropNotFit(key, this_1[key], opts)) {
                return "continue";
            }
            if (this_1.constructor['transient'] && this_1.constructor['transient'][key]) {
                return "continue";
            }
            if (this_1[key] != null && this_1[key]['type'] && this_1[key]['id']) {
                // is model
                res[key] = {
                    id: this_1[key]['id'],
                    type: this_1[key]['type']
                };
            } else if (this_1[key] != null && this_1[key]['splice']) {
                // is arr
                var col = this_1[key];
                var arr_1 = [];
                col.forEach(function (el) {
                    if (el && el.type && el.id) {
                        arr_1.push({ type: el.type, id: el.id });
                    } else {
                        if (isPrimitive(el)) arr_1.push(deepCopy(el));
                    }
                });
                res[key] = arr_1;
            } else if (this_1[key] && this_1[key]['toJSON']) {
                res[key] = this_1[key]['toJSON']();
            } else {
                var possiblePrimitive = deepCopy(this_1[key]);
                if (possiblePrimitive && possiblePrimitive.splice && !possiblePrimitive.length) return "continue";else if (possiblePrimitive != null && typeof possiblePrimitive === 'object' && !Object.keys(possiblePrimitive).length) return "continue";
                res[key] = possiblePrimitive;
            }
        };
        var this_1 = this;
        for (var key in this) {
            _loop_1(key);
        }
        return res;
    };
    CommonObject.prototype.revalidate = function () {};
    CommonObject.prototype.clone = function (opts) {
        var Clazz = this.constructor;
        var obj = new Clazz(this.game);
        obj._cloner = this;
        return obj.fromJSON(this.toJSON(opts), true);
    };
    CommonObject.prototype.updateCloner = function (opts) {
        if (false) {}
        var cloner = this._cloner;
        if (!cloner) return;
        cloner.fromJSON(this.toJSON(opts));
        cloner.updateCloner(opts);
        delete this._cloner;
    };
    return CommonObject;
}();
exports.CommonObject = CommonObject;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
var baseModel_1 = __webpack_require__(6);
var Resource = /** @class */function (_super) {
    __extends(Resource, _super);
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
        return Object.keys(this.resourceMap).map(function (k) {
            return _this.resourceMap[k];
        });
    };
    return Resource;
}(baseModel_1.BaseModel);
exports.Resource = Resource;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
var rect_1 = __webpack_require__(0);
var mouse_1 = __webpack_require__(40);
var renderableModel_1 = __webpack_require__(20);
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
var Container = /** @class */function (_super) {
    __extends(Container, _super);
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
        _this.overflow = OVERFLOW.HIDDEN; // todo change
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
            if (this.layoutWidth === LAYOUT_SIZE.FIXED && this.width === 0) throw "layoutWidth is LAYOUT_SIZE.FIXED so width must be specified";
            if (this.layoutHeight === LAYOUT_SIZE.FIXED && this.height === 0) throw "layoutHeight is LAYOUT_SIZE.FIXED so height must be specified";
        }
    };
    Container.normalizeBorders = function (top, right, bottom, left) {
        if (right === undefined && bottom === undefined && left === undefined) {
            right = bottom = left = top;
        } else if (bottom === undefined && left === undefined) {
            bottom = top;
            left = right;
        } else if (left === undefined) {
            left = right;
        }
        return { top: top, right: right, bottom: bottom, left: left };
    };
    Container.prototype.setMargins = function (top, right, bottom, left) {
        var _a;
        _a = Container.normalizeBorders(top, right, bottom, left), top = _a.top, right = _a.right, bottom = _a.bottom, left = _a.left;
        this.marginTop = top;
        this.marginRight = right;
        this.marginBottom = bottom;
        this.marginLeft = left;
        this._setDirty();
    };
    Container.prototype.setMarginsTopBottom = function (top, bottom) {
        if (bottom === undefined) bottom = top;
        this.paddingTop = top;
        this.paddingBottom = bottom;
        this._setDirty();
    };
    Container.prototype.setMarginsLeftRight = function (left, right) {
        if (right === undefined) right = left;
        this.marginLeft = left;
        this.marginRight = right;
        this._setDirty();
    };
    Container.prototype.setPaddings = function (top, right, bottom, left) {
        var _a;
        _a = Container.normalizeBorders(top, right, bottom, left), top = _a.top, right = _a.right, bottom = _a.bottom, left = _a.left;
        this.paddingTop = top;
        this.paddingRight = right;
        this.paddingBottom = bottom;
        this.paddingLeft = left;
        this._setDirty();
    };
    Container.prototype.setPaddingsTopBottom = function (top, bottom) {
        if (bottom === undefined) bottom = top;
        this.paddingTop = top;
        this.paddingBottom = bottom;
        this._dirty = true;
    };
    Container.prototype.setPaddingsLeftRight = function (left, right) {
        if (right === undefined) right = left;
        this.paddingLeft = left;
        this.paddingRight = right;
        this._setDirty();
    };
    Container.prototype.describeStates = function (description) {
        var _this = this;
        var allUIRenderable = __webpack_require__(37);
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
    Container.prototype.onGeometryChanged = function () {};
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
        if (!possibleBg) possibleBg = this.background;
        return possibleBg;
    };
    Container.prototype.calcDrawableRect = function (contentWidth, contentHeight) {
        var paddedWidth = contentWidth + this.paddingLeft + this.paddingRight;
        var paddedHeight = contentHeight + this.paddingTop + this.paddingBottom;
        if (this.background) {
            this.background.drawingRect.setWH(paddedWidth, paddedHeight);
            this.background.width = paddedWidth;
            this.background.height = paddedHeight;
            this.width = this.background.drawingRect.width;
            this.height = this.background.drawingRect.height;
        } else {
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
}(renderableModel_1.RenderableModel);
exports.Container = Container;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
var container_1 = __webpack_require__(15);
var rect_1 = __webpack_require__(0);
var TEXT_ALIGN;
(function (TEXT_ALIGN) {
    TEXT_ALIGN[TEXT_ALIGN["LEFT"] = 0] = "LEFT";
    TEXT_ALIGN[TEXT_ALIGN["RIGHT"] = 1] = "RIGHT";
    TEXT_ALIGN[TEXT_ALIGN["CENTER"] = 2] = "CENTER";
    TEXT_ALIGN[TEXT_ALIGN["JUSTIFY"] = 3] = "JUSTIFY";
})(TEXT_ALIGN = exports.TEXT_ALIGN || (exports.TEXT_ALIGN = {}));
var TextInfo = /** @class */function () {
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
            if (s.width > this.width) this.width = s.width;
        }
    };
    TextInfo.prototype.align = function (textAlign) {
        for (var _i = 0, _a = this.strings; _i < _a.length; _i++) {
            var s = _a[_i];
            s.align(textAlign, this.width);
        }
    };
    return TextInfo;
}();
var CharInfo = /** @class */function () {
    function CharInfo() {
        this.destRect = new rect_1.Rect();
        this.sourceRect = new rect_1.Rect();
    }
    return CharInfo;
}();
var CharsHolder = /** @class */function () {
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
}();
var WordInfo = /** @class */function (_super) {
    __extends(WordInfo, _super);
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
}(CharsHolder);
var StringInfo = /** @class */function (_super) {
    __extends(StringInfo, _super);
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
            } else {
                currWord.chars.push(ch);
            }
        }
        if (res.indexOf(currWord) === -1) res.push(currWord);
        return res;
    };
    StringInfo.prototype.align = function (textAlign, textRectWidth) {
        switch (textAlign) {
            case TEXT_ALIGN.LEFT:
                break;
            case TEXT_ALIGN.CENTER:
                var offset = textRectWidth - this.width;
                if (offset < 0) return;
                offset /= 2;
                this.moveBy(offset, 0);
                break;
            case TEXT_ALIGN.RIGHT:
                offset = textRectWidth - this.width;
                if (offset < 0) return;
                this.moveBy(offset, 0);
                break;
            case TEXT_ALIGN.JUSTIFY:
                var words = this.toWords();
                if (words.length <= 1) return;
                if (!words[0].chars.length) return;
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
}(CharsHolder);
var TextField = /** @class */function (_super) {
    __extends(TextField, _super);
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
        if (this.font === null) this.font = this.game.repository.getArray('Font')[0];
        if (true && !this.font) throw "at least one Font must be created";
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
            } else {
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
        if (text === void 0) {
            text = '';
        }
        this.text = text.toString();
        this._dirty = true;
    };
    TextField.prototype.getText = function () {
        return this.text;
    };
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
}(container_1.Container);
exports.TextField = TextField;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var objectPool_1 = __webpack_require__(9);
var Size = /** @class */function () {
    function Size(width, height) {
        if (width === void 0) {
            width = 0;
        }
        if (height === void 0) {
            height = 0;
        }
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
}();
exports.Size = Size;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var objectPool_1 = __webpack_require__(9);
var global_1 = __webpack_require__(2);
var Color = /** @class */function () {
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
        if (a === void 0) {
            a = 255;
        }
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
        if (Color.objectPool === undefined) Color.objectPool = new objectPool_1.ObjectPool(Color);
        return Color.objectPool.getNextObject();
    };
    Color.RGB = function (r, g, b, a) {
        var c = new Color(0, 0, 0);
        c.setRGBA(r, g, b, a);
        return c;
    };
    Color.prototype.asGL = function () {
        if (this._arr === null) this._arr = new Array(3);
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
}();
exports.Color = Color;
global_1._global['Color'] = Color;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
var plane_1 = __webpack_require__(23);
var shaderProgram_1 = __webpack_require__(4);
var abstractDrawer_1 = __webpack_require__(7);
var bufferInfo_1 = __webpack_require__(11);
var texShaderGenerator_1 = __webpack_require__(10);
var SpriteRectDrawer = /** @class */function (_super) {
    __extends(SpriteRectDrawer, _super);
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
}(abstractDrawer_1.AbstractDrawer);
exports.SpriteRectDrawer = SpriteRectDrawer;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
var resource_1 = __webpack_require__(14);
var RenderableModel = /** @class */function (_super) {
    __extends(RenderableModel, _super);
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
        if (this.parent) this.parent._dirty = true;
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
            var dx = this.width / 2,
                dy = this.height / 2;
            renderer.translate(dx, dy);
            renderer.scale(this.scale.x, this.scale.y);
            renderer.rotateZ(this.angle);
            //ctx.rotateY(a);
            renderer.translate(-dx, -dy);
        }
        this.draw();
        if (this.children.length > 0) {
            renderer.save();
            renderer.translate(this.anchor.x, this.anchor.y);
            for (var i = 0, max = this.children.length; i < max; i++) {
                //renderer.save();
                this.children[i].render();
                //renderer.restore();
            }
            renderer.restore();
        }
        renderer.restore();
    };
    return RenderableModel;
}(resource_1.Resource);
exports.RenderableModel = RenderableModel;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
var shaderProgramUtils_1 = __webpack_require__(5);
var shaderGenerator_1 = __webpack_require__(46);
//position and color
var ColorShaderGenerator = /** @class */function (_super) {
    __extends(ColorShaderGenerator, _super);
    function ColorShaderGenerator() {
        var _this = _super.call(this) || this;
        _this.addAttribute(shaderProgramUtils_1.GL_TYPE.FLOAT_VEC4, 'a_position');
        _this.addVertexUniform(shaderProgramUtils_1.GL_TYPE.FLOAT_MAT4, 'u_vertexMatrix');
        //language=GLSL
        _this.setVertexMainFn("\n            void main(){\n                gl_Position = u_vertexMatrix * a_position;   \n            }\n        ");
        _this.addFragmentUniform(shaderProgramUtils_1.GL_TYPE.FLOAT, 'u_alpha');
        _this.addFragmentUniform(shaderProgramUtils_1.GL_TYPE.FLOAT_VEC4, 'u_rgba');
        //language=GLSL
        _this.setFragmentMainFn("\n            void main(){\n                gl_FragColor = u_rgba;\n            }\n        ");
        return _this;
    }
    return ColorShaderGenerator;
}(shaderGenerator_1.ShaderGenerator);
exports.ColorShaderGenerator = ColorShaderGenerator;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var AbstractPrimitive = /** @class */function () {
    function AbstractPrimitive() {}
    return AbstractPrimitive;
}();
exports.AbstractPrimitive = AbstractPrimitive;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
var abstractPrimitive_1 = __webpack_require__(22);
var Plane = /** @class */function (_super) {
    __extends(Plane, _super);
    function Plane() {
        var _this = _super.call(this) || this;
        _this.vertexArr = [0, 0, 0, 1, 1, 0, 1, 1];
        _this.indexArr = [0, 1, 2, 3];
        _this.texCoordArr = [0, 0, 0, 1, 1, 0, 1, 1];
        return _this;
    }
    return Plane;
}(abstractPrimitive_1.AbstractPrimitive);
exports.Plane = Plane;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var BaseAbstractBehaviour = /** @class */function () {
    function BaseAbstractBehaviour(game) {
        this.game = game;
        BaseAbstractBehaviour.instances.push(this);
    }
    BaseAbstractBehaviour.prototype.manage = function (gameObject, parameters, dirs) {
        console.error(this);
        if (true) throw "BaseAbstractBehaviour: method 'manage' not implemented";
    };
    BaseAbstractBehaviour.prototype.onUpdate = function () {};
    BaseAbstractBehaviour.prototype.destroy = function () {};
    BaseAbstractBehaviour.destroyAll = function () {
        BaseAbstractBehaviour.instances.forEach(function (it) {
            it.destroy();
        });
    };
    BaseAbstractBehaviour.instances = [];
    return BaseAbstractBehaviour;
}();
exports.BaseAbstractBehaviour = BaseAbstractBehaviour;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var tween_1 = __webpack_require__(39);
var mat4 = __webpack_require__(8);
var mathEx = __webpack_require__(1);
var rect_1 = __webpack_require__(0);
var point2d_1 = __webpack_require__(3);
var mathEx_1 = __webpack_require__(1);
var CAMERA_MATRIX_MODE;
(function (CAMERA_MATRIX_MODE) {
    CAMERA_MATRIX_MODE[CAMERA_MATRIX_MODE["MODE_TRANSFORM"] = 0] = "MODE_TRANSFORM";
    CAMERA_MATRIX_MODE[CAMERA_MATRIX_MODE["MODE_IDENTITY"] = 1] = "MODE_IDENTITY";
})(CAMERA_MATRIX_MODE = exports.CAMERA_MATRIX_MODE || (exports.CAMERA_MATRIX_MODE = {}));
var Camera = /** @class */function () {
    function Camera(game) {
        var _this = this;
        this.objFollowTo = null;
        this.scene = null;
        this.sceneWidth = 0;
        this.sceneHeight = 0;
        this.pos = new point2d_1.Point2d(0, 0);
        this.scale = new point2d_1.Point2d(1, 1);
        // flag to defined camera rect for transform mode (for dynamic objects)
        // and identity mode (for fixed objects)
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
        if (!this.scene) return;
        if (this.scene.tileMap) this.scene.tileMap.revalidate();
        this._rectIdentity.setXYWH(0, 0, this.game.width, this.game.height);
        if (this.scene.tileMap.spriteSheet) {
            this.sceneWidth = this.scene.tileMap.spriteSheet._frameWidth * this.scene.tileMap.width;
            this.sceneHeight = this.scene.tileMap.spriteSheet._frameHeight * this.scene.tileMap.height;
        } else {
            this.sceneWidth = this.game.getCurrScene().width || this.game.width;
            this.sceneHeight = this.game.getCurrScene().height || this.game.height;
        }
    };
    Camera.prototype.followTo = function (gameObject) {
        if (gameObject === null) return;
        if (true && gameObject === undefined) throw "Camera:followTo(gameObject) - gameObject not provided";
        this.objFollowTo = gameObject;
        this.revalidate();
    };
    Camera.prototype.update = function (currTime, delta) {
        this.scene = this.game.getCurrScene();
        if (!this.scene) return;
        var tileWidth = this.scene.tileMap.spriteSheet ? this.scene.tileMap.spriteSheet._frameWidth : 0; // todo ?
        var tileHeight = this.scene.tileMap.spriteSheet ? this.scene.tileMap.spriteSheet._frameHeight : 0;
        var w = this.game.width;
        var h = this.game.height;
        var wDiv2 = w / 2;
        var hDiv2 = h / 2;
        var wScaled = this.getRectScaled().width;
        var gameObject = this.objFollowTo;
        if (gameObject) {
            if (gameObject['_lastDirection'] === 'Right') this.cameraPosCorrection.max.x = wScaled / 3; // todo _lastDirection
            if (gameObject['_lastDirection'] === 'Left') this.cameraPosCorrection.max.x = -wScaled / 3;
            var currCorrection = this.cameraPosCorrection.max.substract(this.cameraPosCorrection.current).multiply(0.05);
            this.cameraPosCorrection.current.add(currCorrection);
            var newPos = point2d_1.Point2d.fromPool();
            var pointToFollow = point2d_1.Point2d.fromPool();
            pointToFollow.set(this.objFollowTo.pos);
            pointToFollow.addXY(-wDiv2, -hDiv2);
            newPos.x = this.pos.x + (pointToFollow.x + this.cameraPosCorrection.current.x - this.pos.x) * 0.1;
            newPos.y = this.pos.y + (pointToFollow.y - this.pos.y) * 0.1;
            if (newPos.x < 0) newPos.x = 0;
            if (newPos.y < 0) newPos.y = 0;
            if (newPos.x > this.sceneWidth - w + tileWidth) newPos.x = this.sceneWidth - w + tileWidth;
            if (newPos.y > this.sceneHeight - h + tileHeight) newPos.y = this.sceneHeight - h + tileHeight;
            this.pos.setXY(newPos.x, newPos.y);
            if (this.cameraShakeTween) this.cameraShakeTween.update(currTime);
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
            complete: function () {
                return _this.cameraShakeTween = null;
            }
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
        // todo rotation does not work correctly yet
        //this.game.renderer.rotateZ(this.angle);
        this.game.renderer.translate(-this.game.width / 2, -this.game.height / 2);
        this.game.renderer.translate(-this.pos.x, -this.pos.y);
        if (this.cameraShakeTween !== null) this.game.renderer.translate(this.cameraShakeTween.getTarget().point.x, this.cameraShakeTween.getTarget().point.y);
    };
    Camera.prototype.screenToWorld = function (p) {
        var mScale = mat4.makeScale(this.scale.x, this.scale.y, 1);
        var point2d = mathEx.unProject(p, this.game.width, this.game.height, mScale);
        point2d.add(this.pos);
        return point2d;
    };
    Camera.prototype.getRect = function () {
        if (this.matrixMode === CAMERA_MATRIX_MODE.MODE_IDENTITY) return this._rectIdentity;else {
            this._rect.setXYWH(this.pos.x, this.pos.y, this.game.width, this.game.height);
            return this._rect;
        }
    };
    Camera.prototype.getRectScaled = function () {
        if (this.matrixMode === CAMERA_MATRIX_MODE.MODE_IDENTITY) return this._rectIdentity;else return this._rectScaled;
    };
    return Camera;
}();
exports.Camera = Camera;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
var baseModel_1 = __webpack_require__(6);
var Layer = /** @class */function (_super) {
    __extends(Layer, _super);
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
            obj.spriteSheet && !dataSet.find(function (it) {
                return obj.id === it.id;
            }) && dataSet.push(obj.spriteSheet);
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
}(baseModel_1.BaseModel);
exports.Layer = Layer;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
var Vec2 = /** @class */function () {
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
        return this.x * vec.x + this.y * vec.y;
    };
    Vec2.prototype.cross = function (vec) {
        return this.x * vec.y - this.y * vec.x;
    };
    Vec2.prototype.rotate = function (center, angle) {
        //rotate in counterclockwise
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
}();
exports.Vec2 = Vec2;
var CollisionInfo = /** @class */function () {
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
}();
exports.CollisionInfo = CollisionInfo;
var RigidShape = /** @class */function () {
    function RigidShape(game, center, mass, friction, restitution) {
        this.fixedAngle = false;
        this.mVelocity = new Vec2(0, 0);
        this.mAngle = 0;
        this.mAngularVelocity = 0; //negetive-- clockwise, postive-- counterclockwise
        this.mAngularAcceleration = 0;
        this.mBoundRadius = 0;
        this.game = game;
        this.mCenter = center;
        this.mInertia = 0;
        this.fixedAngle = false;
        if (mass !== undefined) {
            this.mInvMass = mass;
        } else {
            this.mInvMass = 1;
        }
        if (friction !== undefined) {
            this.mFriction = friction;
        } else {
            this.mFriction = 0.2;
        }
        if (restitution !== undefined) {
            this.mRestitution = restitution;
        } else {
            this.mRestitution = 0.1;
        }
        if (this.mInvMass !== 0) {
            this.mInvMass = 1 / this.mInvMass;
            this.mAcceleration = new Vec2(0, game.gravityConstant);
        } else {
            this.mAcceleration = new Vec2(0, 0);
        }
    }
    RigidShape.prototype.updateMass = function (delta) {
        var mass;
        if (this.mInvMass !== 0) {
            mass = 1 / this.mInvMass;
        } else {
            mass = 0;
        }
        mass += delta;
        if (mass <= 0) {
            this.mInvMass = 0;
            this.mVelocity = new Vec2(0, 0);
            this.mAcceleration = new Vec2(0, 0);
            this.mAngularVelocity = 0;
            this.mAngularAcceleration = 0;
        } else {
            this.mInvMass = 1 / mass;
            this.mAcceleration = new Vec2(0, this.game.gravityConstant);
        }
        this.updateInertia();
    };
    RigidShape.prototype.update = function (time, _dt) {
        var dt = _dt / 1000;
        //v += a*t
        this.mVelocity = this.mVelocity.add(this.mAcceleration.scale(dt));
        //s += v*t
        this.move(this.mVelocity.scale(dt));
        this.mAngularVelocity += this.mAngularAcceleration * dt;
        //if (!this.fixedAngle)
        this.rotate(this.mAngularVelocity * dt);
    };
    RigidShape.prototype.boundTest = function (otherShape) {
        var vFrom1to2 = otherShape.mCenter.subtract(this.mCenter);
        var rSum = this.mBoundRadius + otherShape.mBoundRadius;
        var dist = vFrom1to2.length();
        return dist <= rSum;
    };
    return RigidShape;
}();
exports.RigidShape = RigidShape;
var RigidCircle = /** @class */function (_super) {
    __extends(RigidCircle, _super);
    function RigidCircle(game, center, radius, mass, friction, restitution) {
        var _this = _super.call(this, game, center, mass, friction, restitution) || this;
        _this.mType = "Circle";
        _this.mRadius = radius;
        _this.mBoundRadius = radius;
        //The start point of line in circle
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
        } else {
            // this.mInvMass is inverted!!
            // Inertia=mass * radius^2
            // 12 is a constant value that can be changed
            this.mInertia = 1 / this.mInvMass * (this.mRadius * this.mRadius) / 12;
        }
    };
    RigidCircle.prototype.collisionTest = function (otherShape, collisionInfo) {
        if (RigidCircle.isInstanceOf(otherShape)) {
            return this.collidedCircCirc(this, otherShape, collisionInfo);
        } else if (RigidRectangle.isInstanceOf(otherShape)) {
            return otherShape.collidedRectCirc(this, collisionInfo);
        } else {
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
            //not overlapping
            return false;
        }
        if (dist !== 0) {
            // overlapping bu not same position
            var normalFrom2to1 = vFrom1to2.scale(-1).normalize();
            var radiusC2 = normalFrom2to1.scale(c2.mRadius);
            collisionInfo.setInfo(rSum - dist, vFrom1to2.normalize(), c2.mCenter.add(radiusC2));
        } else {
            //same position
            if (c1.mRadius > c2.mRadius) {
                collisionInfo.setInfo(rSum, new Vec2(0, -1), c1.mCenter.add(new Vec2(0, c1.mRadius)));
            } else {
                collisionInfo.setInfo(rSum, new Vec2(0, -1), c2.mCenter.add(new Vec2(0, c2.mRadius)));
            }
        }
        return true;
    };
    RigidCircle.isInstanceOf = function (shape) {
        return shape.mType === 'Circle';
    };
    return RigidCircle;
}(RigidShape);
exports.RigidCircle = RigidCircle;
var SupportStruct = /** @class */function () {
    function SupportStruct() {
        this.mSupportPointDist = 0;
    }
    return SupportStruct;
}();
var tmpSupport = new SupportStruct();
var collisionInfoR1 = new CollisionInfo();
var collisionInfoR2 = new CollisionInfo();
var RigidRectangle = /** @class */function (_super) {
    __extends(RigidRectangle, _super);
    function RigidRectangle(game, center, width, height, mass, friction, restitution) {
        var _this = _super.call(this, game, center, mass, friction, restitution) || this;
        _this.mType = "Rectangle";
        _this.mVertex = [];
        _this.mFaceNormal = [];
        _this.mWidth = width;
        _this.mHeight = height;
        _this.mBoundRadius = Math.sqrt(width * width + height * height) / 2;
        //0--TopLeft;1--TopRight;2--BottomRight;3--BottomLeft
        _this.mVertex[0] = new Vec2(center.x - width / 2, center.y - height / 2);
        _this.mVertex[1] = new Vec2(center.x + width / 2, center.y - height / 2);
        _this.mVertex[2] = new Vec2(center.x + width / 2, center.y + height / 2);
        _this.mVertex[3] = new Vec2(center.x - width / 2, center.y + height / 2);
        //0--Top;1--Right;2--Bottom;3--Left
        //mFaceNormal is normal of face toward outside of rectangle
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
        // Expect this.mInvMass to be already inverted!
        if (this.mInvMass === 0) {
            this.mInertia = 0;
        } else {
            //inertia=mass*width^2+height^2
            this.mInertia = 1 / this.mInvMass * (this.mWidth * this.mWidth + this.mHeight * this.mHeight) / 12;
            this.mInertia = 1 / this.mInertia;
        }
    };
    RigidRectangle.prototype.collisionTest = function (otherShape, collisionInfo) {
        if (RigidCircle.isInstanceOf(otherShape)) {
            return this.collidedRectCirc(otherShape, collisionInfo);
        } else if (RigidRectangle.isInstanceOf(otherShape)) {
            return this.collidedRectRect(this, otherShape, collisionInfo);
        } else {
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
        //the longest project length
        var vToEdge;
        var projection;
        tmpSupport.mSupportPointDist = -9999999;
        tmpSupport.mSupportPoint = null;
        //check each vector of other object
        for (var i = 0; i < this.mVertex.length; i++) {
            vToEdge = this.mVertex[i].subtract(ptOnEdge);
            projection = vToEdge.dot(dir);
            //find the longest distance with certain edge
            //dir is -n direction, so the distance should be positive
            if (projection > 0 && projection > tmpSupport.mSupportPointDist) {
                tmpSupport.mSupportPoint = this.mVertex[i];
                tmpSupport.mSupportPointDist = projection;
            }
        }
    };
    /**
     * Find the shortest axis that overlapping
     * the code is convert from http://gamedevelopment.tutsplus.com/tutorials/how-to-create-a-custom-2d-physics-engine-oriented-rigid-bodies--gamedev-8032
     */
    RigidRectangle.prototype.findAxisLeastPenetration = function (otherRect, collisionInfo) {
        var n;
        var supportPoint;
        var bestDistance = 999999;
        var bestIndex = null;
        var hasSupport = true;
        var i = 0;
        while (hasSupport && i < this.mFaceNormal.length) {
            // Retrieve a face normal from A
            n = this.mFaceNormal[i];
            // use -n as direction and the vectex on edge i as point on edge
            var dir = n.scale(-1);
            var ptOnEdge = this.mVertex[i];
            // find the support on B
            // the point has longest distance with edge i
            otherRect.findSupportPoint(dir, ptOnEdge);
            hasSupport = tmpSupport.mSupportPoint !== null;
            //get the shortest support point depth
            if (hasSupport && tmpSupport.mSupportPointDist < bestDistance) {
                bestDistance = tmpSupport.mSupportPointDist;
                bestIndex = i;
                supportPoint = tmpSupport.mSupportPoint;
            }
            i = i + 1;
        }
        if (hasSupport) {
            //all four directions have support point
            var bestVec = this.mFaceNormal[bestIndex].scale(bestDistance);
            collisionInfo.setInfo(bestDistance, this.mFaceNormal[bestIndex], supportPoint.add(bestVec));
        }
        return hasSupport;
    };
    RigidRectangle.prototype.collidedRectRect = function (r1, r2, collisionInfo) {
        var status1;
        var status2;
        //find Axis of Separation for both rectangle
        status1 = r1.findAxisLeastPenetration(r2, collisionInfoR1);
        if (status1) {
            status2 = r2.findAxisLeastPenetration(r1, collisionInfoR2);
            if (status2) {
                //if both of rectangles are overlapping, choose the shorter normal as the normal
                if (collisionInfoR1.getDepth() < collisionInfoR2.getDepth()) {
                    var depthVec = collisionInfoR1.getNormal().scale(collisionInfoR1.getDepth());
                    collisionInfo.setInfo(collisionInfoR1.getDepth(), collisionInfoR1.getNormal(), collisionInfoR1.mStart.subtract(depthVec));
                } else {
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
            // todo 4!!
            //find the nearest face for center of circle
            circ2Pos = otherCir.mCenter;
            v = circ2Pos.subtract(this.mVertex[i]);
            projection = v.dot(this.mFaceNormal[i]);
            if (projection > 0) {
                //if the center of circle is outside of rectangle
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
            //the center of circle is outside of rectangle
            //v1 is from left vertex of face to center of circle
            //v2 is from left vertex of face to right vertex of face
            var v1 = circ2Pos.subtract(this.mVertex[nearestEdge]);
            var v2 = this.mVertex[(nearestEdge + 1) % 4].subtract(this.mVertex[nearestEdge]);
            var dot = v1.dot(v2);
            if (dot < 0) {
                //the center of circle is in corner region of mVertex[nearestEdge]
                dis = v1.length();
                //compare the distance with radium to decide collision
                if (dis > otherCir.mRadius) {
                    return false;
                }
                normal = v1.normalize();
                radiusVec = normal.scale(-otherCir.mRadius);
                collisionInfo.setInfo(otherCir.mRadius - dis, normal, circ2Pos.add(radiusVec));
            } else {
                //the center of circle is in corner region of mVertex[nearestEdge+1]
                //v1 is from right vertex of face to center of circle
                //v2 is from right vertex of face to left vertex of face
                v1 = circ2Pos.subtract(this.mVertex[(nearestEdge + 1) % 4]);
                v2 = v2.scale(-1);
                dot = v1.dot(v2);
                if (dot < 0) {
                    dis = v1.length();
                    //compare the distance with radium to decide collision
                    if (dis > otherCir.mRadius) {
                        return false;
                    }
                    normal = v1.normalize();
                    radiusVec = normal.scale(-otherCir.mRadius);
                    collisionInfo.setInfo(otherCir.mRadius - dis, normal, circ2Pos.add(radiusVec));
                } else {
                    //the center of circle is in face region of face[nearestEdge]
                    if (bestDistance < otherCir.mRadius) {
                        radiusVec = this.mFaceNormal[nearestEdge].scale(otherCir.mRadius);
                        collisionInfo.setInfo(otherCir.mRadius - bestDistance, this.mFaceNormal[nearestEdge], circ2Pos.subtract(radiusVec));
                    } else {
                        return false;
                    }
                }
            }
        } else {
            //the center of circle is inside of rectangle
            radiusVec = this.mFaceNormal[nearestEdge].scale(otherCir.mRadius);
            collisionInfo.setInfo(otherCir.mRadius - bestDistance, this.mFaceNormal[nearestEdge], circ2Pos.subtract(radiusVec));
        }
        return true;
    };
    RigidRectangle.isInstanceOf = function (shape) {
        return shape.mType === 'Rectangle';
    };
    return RigidRectangle;
}(RigidShape);
exports.RigidRectangle = RigidRectangle;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var rect_1 = __webpack_require__(0);
var rigidShapes_1 = __webpack_require__(27);
var commonObject_1 = __webpack_require__(13);
var decorators_1 = __webpack_require__(12);
var TileMap = /** @class */function (_super) {
    __extends(TileMap, _super);
    function TileMap(game) {
        var _this = _super.call(this) || this;
        _this.game = game;
        _this.type = "TileMap";
        _this.spriteSheet = null;
        _this.data = [];
        _this.width = 0;
        _this.height = 0;
        _this.filters = null; // todo
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
                if (val === 0) this.data[j][i] = undefined;else {
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
        if (!this.spriteSheet) return;
        this._tilesInScreenX = ~~(camRect.width / this.spriteSheet._frameWidth);
        this._tilesInScreenY = ~~(camRect.height / this.spriteSheet._frameHeight);
    };
    TileMap.prototype.getTileAt = function (x, y) {
        if (!this.spriteSheet) return;
        var tilePosX = ~~(x / this.spriteSheet._frameWidth);
        var tilePosY = ~~(y / this.spriteSheet._frameHeight);
        if (!this.data[tilePosY]) return;
        var tile = this.data[tilePosY][tilePosX];
        if (!tile) return;
        return {
            tileIndex: this.spriteSheet.numOfFramesH * tilePosY + tilePosX + 1,
            tile: tile
        };
    };
    TileMap.prototype.getTilesAtRect = function (rect) {
        var result = [];
        if (!this.spriteSheet) return result;
        var alreadyCheckedTiles = {};
        var x = rect.x,
            y;
        var maxX = rect.x + rect.width,
            maxY = rect.y + rect.height;
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
                if (y === maxY) break;
                y += this.spriteSheet._frameHeight;
                if (y > maxY) y = maxY;
            }
            if (x === maxX) break;
            x += this.spriteSheet._frameWidth;
            if (x > maxX) x = maxX;
        }
        return result;
    };
    TileMap.prototype.render = function () {
        var spriteSheet = this.spriteSheet;
        if (!spriteSheet) return;
        var camera = this.game.camera;
        var renderer = this.game.renderer;
        var cameraRect = camera.getRectScaled();
        var tilePosX = ~~(cameraRect.x / this.spriteSheet._frameWidth);
        var tilePosY = ~~(cameraRect.y / this.spriteSheet._frameHeight);
        if (tilePosX < 0) tilePosX = 0;
        if (tilePosY < 0) tilePosY = 0;
        var w = tilePosX + this._tilesInScreenX + 1;
        var h = tilePosY + this._tilesInScreenY + 1;
        for (var y = tilePosY; y <= h; y++) {
            for (var x = tilePosX; x <= w; x++) {
                var tileVal = this.data[y] && this.data[y][x] && this.data[y][x].val;
                if (tileVal === false || tileVal === null || tileVal === undefined) continue;
                var destRect = rect_1.Rect.fromPool().clone();
                destRect.setXYWH(x * spriteSheet._frameWidth, y * spriteSheet._frameHeight, spriteSheet._frameWidth, spriteSheet._frameHeight);
                renderer.drawImage(spriteSheet.getDefaultResourcePath(), spriteSheet.getFrameRect(tileVal), destRect);
            }
        }
    };
    TileMap = __decorate([decorators_1.Transient({
        game: true
    })], TileMap);
    return TileMap;
}(commonObject_1.CommonObject);
exports.TileMap = TileMap;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
exports.noop = function () {};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
var baseAbstractBehaviour_1 = __webpack_require__(24);
var Moveable = /** @class */function (_super) {
    __extends(Moveable, _super);
    function Moveable(game) {
        return _super.call(this, game) || this;
    }
    Moveable.prototype.manage = function (gameObject, parameters, dirs) {
        var _this = this;
        this.gameObject = gameObject;
        this.parameters = parameters;
        this.animations = {};
        dirs.forEach(function (dir) {
            var keyWalk = 'walk' + dir + 'Animation',
                keyIdle = 'idle' + dir + 'Animation';
            _this.animations[keyWalk] = _this.gameObject.frameAnimations.find(function (it) {
                return it.name === parameters[keyWalk];
            });
            parameters[keyIdle] && (_this.animations[keyIdle] = _this.gameObject.frameAnimations.find(function (it) {
                return it.name === parameters[keyIdle];
            }));
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
}(baseAbstractBehaviour_1.BaseAbstractBehaviour);
exports.Moveable = Moveable;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
var point2d_1 = __webpack_require__(3);
var rect_1 = __webpack_require__(0);
var shaderMaterial_1 = __webpack_require__(32);
var renderableModel_1 = __webpack_require__(20);
var global_1 = __webpack_require__(2);
var cloneId = 0;
var GameObjectProto = /** @class */function (_super) {
    __extends(GameObjectProto, _super);
    // static find(name:string){
    //     //return game.getCurrScene()._allGameObjects.find({name:name});
    // }
    // static findAll(name:string) {
    //     //return game.getCurrScene()._allGameObjects.findAll({name: name});
    // }
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
        _this._frameRect = new rect_1.Rect(); // todo make all private
        _this._sprPosX = 0;
        _this._sprPosY = 0;
        _this._timeCreated = null; // todo only for particle system
        _this._individualBehaviour = null;
        return _this;
    }
    GameObjectProto.prototype.createGameObject = function () {
        var go = new global_1._global['GameObject'](this.game); // to avoid circular dependency
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
            //this.frameAnimations[i] = this.frameAnimations[i].clone(); // todo need clone?
            _this.frameAnimations[i]._gameObject = _this;
        });
        if (this.rigid) {
            // let center = new Vec2(this.pos.x+this.anchor.x,this.pos.y+this.anchor);
            // let mass = 10; // todo
            // this.rigidBody = new RigidRectangle(this.game,center,this.width,this.height,mass);
        }
        if (false) {}
    };
    GameObjectProto.prototype.playFrameAnimation = function (animationName, opts) {
        var fr = this.frameAnimations.find(function (it) {
            return it.name === animationName;
        });
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
        if (this._individualBehaviour) this._individualBehaviour.onUpdate(time, delta);
        for (var i = 0, max = this.commonBehaviour.length; i < max; i++) {
            if (this.commonBehaviour[i].onUpdate) this.commonBehaviour[i].onUpdate(time, delta); // todo its undefined when clone
        }
        if (this.rigidBody !== null) {
            this.rigidBody.update(time, delta);
            this.pos.x = ~~(this.rigidBody.mCenter.x - this.rigidBody['mWidth'] / 2); // todo
            this.pos.y = ~~(this.rigidBody.mCenter.y - this.rigidBody['mHeight'] / 2);
            this.angle = this.rigidBody.mAngle;
        } else {
            if (this.velocity.x) this.pos.x += this.velocity.x * delta / 1000;
            if (this.velocity.y) this.pos.y += this.velocity.y * delta / 1000;
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
        if (this._individualBehaviour) this._individualBehaviour.onCreate();
        if (this.startFrameAnimationName !== null) this.playFrameAnimation(this.startFrameAnimationName);
    };
    GameObjectProto.prototype.stopFrAnimations = function () {
        this._currFrameAnimation && this._currFrameAnimation.stop();
    };
    return GameObjectProto;
}(renderableModel_1.RenderableModel);
exports.GameObjectProto = GameObjectProto;
global_1._global['GameObjectProto'] = GameObjectProto;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var color_1 = __webpack_require__(18);
var ShaderMaterial = /** @class */function () {
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
}();
exports.ShaderMaterial = ShaderMaterial;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var SCALE_STRATEGY;
(function (SCALE_STRATEGY) {
    SCALE_STRATEGY[SCALE_STRATEGY["NO_SCALE"] = 0] = "NO_SCALE";
    SCALE_STRATEGY[SCALE_STRATEGY["FIT"] = 1] = "FIT";
    SCALE_STRATEGY[SCALE_STRATEGY["STRETCH"] = 2] = "STRETCH";
})(SCALE_STRATEGY = exports.SCALE_STRATEGY || (exports.SCALE_STRATEGY = {}));

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
var container_1 = __webpack_require__(15);
var AbsoluteLayout = /** @class */function (_super) {
    __extends(AbsoluteLayout, _super);
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
        var maxX = 0,
            maxY = 0;
        for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
            var v = _a[_i];
            v.onGeometryChanged();
            v._dirty = true;
            var r = v.getRect();
            if (r.right > maxX) maxX = r.right;
            if (r.bottom > maxY) maxY = r.bottom;
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
            if (c._dirty) c.parent._dirty = true;
            c.update(time, delta);
        }
    };
    AbsoluteLayout.prototype.draw = function () {
        var renderer = this.game.renderer;
        if (this.overflow === container_1.OVERFLOW.HIDDEN) renderer.lockRect(this.getRect());
        if (this.background) this.background.draw();
        renderer.translate(this.paddingLeft, this.paddingTop);
        if (this.overflow === container_1.OVERFLOW.HIDDEN) this.game.renderer.unlockRect();
    };
    return AbsoluteLayout;
}(container_1.Container);
exports.AbsoluteLayout = AbsoluteLayout;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
var rect_1 = __webpack_require__(0);
var resource_1 = __webpack_require__(14);
var Image = /** @class */function (_super) {
    __extends(Image, _super);
    function Image(game) {
        var _this = _super.call(this, game) || this;
        _this.destRect = new rect_1.Rect();
        _this.srcRect = new rect_1.Rect();
        _this.filters = [];
        _this.drawingRect = new rect_1.Rect();
        _this.blendMode = '';
        return _this;
    }
    Image.prototype.revalidate = function () {
        if (true && !this.getDefaultResourcePath()) {
            throw "can not render Image: default resource path not specified in resourceMap property";
        }
    };
    Image.prototype.getDrawableInfo = function () {
        return { blendMode: this.blendMode, acceptLight: false };
    };
    Image.prototype.draw = function () {
        this.game.renderer.drawImage(this.getDefaultResourcePath(), this.srcRect, this.destRect);
    };
    return Image;
}(resource_1.Resource);
exports.Image = Image;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
var container_1 = __webpack_require__(15);
var textField_1 = __webpack_require__(16);
var Button = /** @class */function (_super) {
    __extends(Button, _super);
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
        if (!this.background) return;
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
        if (this.background) this.background.draw();
        this._textField.render();
    };
    return Button;
}(container_1.Container);
exports.Button = Button;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var button_1 = __webpack_require__(36);
exports.Button = button_1.Button;
var textField_1 = __webpack_require__(16);
exports.TextField = textField_1.TextField;
var container_1 = __webpack_require__(15);
exports.Container = container_1.Container;
var image_1 = __webpack_require__(35);
exports.Image = image_1.Image;
var rectangle_1 = __webpack_require__(81);
exports.Rectangle = rectangle_1.Rectangle;
var ninePatchImage_1 = __webpack_require__(80);
exports.NinePatchImage = ninePatchImage_1.NinePatchImage;
var absoluteLayout_1 = __webpack_require__(34);
exports.AbsoluteLayout = absoluteLayout_1.AbsoluteLayout;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var EventEmitter = /** @class */function () {
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
        } else if (eventNameOrList.splice) {
            eventNameOrList.forEach(function (eventName) {
                _this._on(eventName, callBack);
            });
        }
    };
    ;
    EventEmitter.prototype.off = function (eventName, callback) {
        var es = this.events[eventName];
        if (!es) return;
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
        if (!es) return;
        var l = es.length;
        while (l--) {
            es[l](data);
        }
    };
    ;
    return EventEmitter;
}();
exports.EventEmitter = EventEmitter;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var mathEx = __webpack_require__(1);
var global_1 = __webpack_require__(2);
var accessByPath = function (obj, path) {
    var pathArr = path.split('.');
    if (pathArr.length === 1) return { targetObj: obj, targetKey: path };
    var lastPath = pathArr.pop();
    pathArr.forEach(function (p) {
        obj = obj[p];
    });
    return { targetObj: obj, targetKey: lastPath };
};
var setValByPath = function (obj, path, val) {
    var _a = accessByPath(obj, path),
        targetObj = _a.targetObj,
        targetKey = _a.targetKey;
    targetObj[targetKey] = val;
};
var getValByPath = function (obj, path) {
    var _a = accessByPath(obj, path),
        targetObj = _a.targetObj,
        targetKey = _a.targetKey;
    return targetObj[targetKey];
};
var Tween = /** @class */function () {
    /**
     * @param tweenDesc
     * target: obj,
     * from: object with props,
     * to: object with props,
     * progress: fn,
     * complete: fn,
     * ease: str ease fn name,
     * time: tween time
     */
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
            if (tweenDesc.from[prp] === undefined) tweenDesc.from[prp] = getValByPath(_this.target, prp);
            if (tweenDesc.to[prp] === undefined) tweenDesc.to[prp] = getValByPath(_this.target, prp);
        });
        return tweenDesc;
    };
    ;
    Tween.prototype.update = function (time) {
        if (this.completed) return;
        this.currTime = time;
        if (!this.startedTime) this.startedTime = time;
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
        if (this.completed) return;
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
}();
exports.Tween = Tween;
global_1._global['Tween'] = Tween;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
var mathEx = __webpack_require__(1);
var point2d_1 = __webpack_require__(3);
var objectPool_1 = __webpack_require__(9);
var rect_1 = __webpack_require__(0);
var MousePoint = /** @class */function (_super) {
    __extends(MousePoint, _super);
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
}(point2d_1.Point2d);
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
var Mouse = /** @class */function () {
    function Mouse(game) {
        this.objectsCaptured = {};
        this.game = game;
    }
    //MouseEvent|TouchEvent|PointerEvent
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
        mousePoint.id = e.identifier || 0; // (e as PointerEvent).pointerId
        return mousePoint;
    };
    Mouse.triggerGameObjectEvent = function (eventName, point, go, offsetX, offsetY) {
        if (offsetX === void 0) {
            offsetX = 0;
        }
        if (offsetY === void 0) {
            offsetY = 0;
        }
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
        if (isMouseDown === undefined) isMouseDown = false;
        var g = this.game;
        var scene = g.getCurrScene();
        var point = this.resolvePoint(e);
        point.isMouseDown = isMouseDown;
        point.target = undefined;
        for (var _i = 0, _a = scene.getAllGameObjects(); _i < _a.length; _i++) {
            var go = _a[_i];
            var isCaptured = Mouse.triggerGameObjectEvent(eventName, point, go);
            if (isCaptured) {
                //if (go.children) this.triggerChildren(go.children,eventName,point,go.pos.x,go.pos.y);
                break;
            }
        }
        var untransformedPoint = MousePoint.unTransform(point);
        for (var j = 0; j < scene.uiLayer.children.length; j++) {
            var go = scene.uiLayer.children[scene.uiLayer.children.length - 1 - j];
            var isCaptured = Mouse.triggerGameObjectEvent(eventName, untransformedPoint, go);
            if (isCaptured) {
                //if (go.children) this.triggerChildren(go.children,eventName,untransformedPoint,go.pos.x,go.pos.y);
                break;
            }
        }
        if (untransformedPoint.target) point.target = untransformedPoint.target;
        if (point.target === undefined) point.target = scene;
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
        if (!point) return;
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
        if (!point) return;
        var lastMouseDownObject = this.objectsCaptured[point.id];
        if (!lastMouseDownObject) return;
        lastMouseDownObject.trigger(exports.MOUSE_EVENTS.mouseUp, point);
        delete this.objectsCaptured[point.id];
    };
    Mouse.prototype.resolveDoubleClick = function (e) {
        var point = this.triggerEvent(e, exports.MOUSE_EVENTS.doubleClick);
        if (!point) return;
        delete this.objectsCaptured[point.id];
    };
    Mouse.prototype.listenTo = function (container) {
        var _this = this;
        this.container = container;
        // mouseDown
        container.ontouchstart = function (e) {
            var l = e.touches.length;
            while (l--) {
                _this.resolveClick(e.touches[l]);
            }
        };
        container.onmousedown = function (e) {
            e.button === 0 && _this.resolveClick(e);
        };
        // mouseUp
        container.ontouchend = container.ontouchcancel = function (e) {
            var l = e.changedTouches.length;
            while (l--) {
                _this.resolveMouseUp(e.changedTouches[l]);
            }
        };
        container.onmouseup = function (e) {
            _this.resolveMouseUp(e);
        };
        // mouseMove
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
        // other
        container.ondblclick = function (e) {
            _this.resolveDoubleClick(e);
        };
    };
    Mouse.prototype.destroy = function () {
        var _this = this;
        ['mouseMove', 'ontouchstart', 'onmousedown', 'ontouchend', 'onmouseup', 'ontouchmove', 'onmousemove', 'ondblclick'].forEach(function (evtName) {
            _this.container[evtName] = null;
        });
    };
    return Mouse;
}();
exports.Mouse = Mouse;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var frameBuffer_1 = __webpack_require__(42);
var size_1 = __webpack_require__(17);
var isPowerOf2 = function (value) {
    return (value & value - 1) === 0;
};
// array of two frameBuffer for filters to apply
var TextureFilterBuffer = /** @class */function () {
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
        if (this.buffers) this.buffers.forEach(function (b) {
            return b.destroy();
        });
    };
    return TextureFilterBuffer;
}();
var Texture = /** @class */function () {
    function Texture(gl) {
        this.tex = null;
        this.size = new size_1.Size(0, 0);
        this.isPowerOfTwo = false;
        this._texFilterBuff = null;
        if (true && !gl) throw "can not create Texture, gl context not passed to constructor, expected: Texture(gl)";
        this.gl = gl;
        if (true) {
            // define max texture units supported
            if (!Texture.MAX_TEXTURE_IMAGE_UNITS) Texture.MAX_TEXTURE_IMAGE_UNITS = gl.getParameter(gl.MAX_TEXTURE_IMAGE_UNITS);
        }
        this.tex = gl.createTexture();
        if (true && !this.tex) throw "can not allocate memory for texture";
        gl.bindTexture(gl.TEXTURE_2D, this.tex);
        // Fill the texture with a 1x1 blue pixel.
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, new Uint8Array([0, 0, 255, 255]));
        gl.bindTexture(gl.TEXTURE_2D, this.tex);
        this._texFilterBuff = new TextureFilterBuffer(this);
    }
    // gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, true); for bitmap textures
    // gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
    /**
     * @param img - if image is null, width and height must be specified
     * @param width -unused if image specified
     * @param height -unused if image specified
     */
    Texture.prototype.setImage = function (img, width, height) {
        if (width === void 0) {
            width = 0;
        }
        if (height === void 0) {
            height = 0;
        }
        if (true) {
            if (!(img || width || height)) throw "texture.setImage: if image is null, width and height must be specified: tex.setImage(null,w,h)";
        }
        var gl = this.gl;
        if (img) this.size.setWH(img.width, img.height);else this.size.setWH(width, height);
        //gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, this.tex);
        gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 1); // 1 or true
        if (img) {
            gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img);
        } else {
            gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, width, height, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
        }
        this.isPowerOfTwo = img ? isPowerOf2(img.width) && isPowerOf2(img.height) : false;
        // Check if the image is a power of 2 in both dimensions.
        if (this.isPowerOfTwo) {
            gl.generateMipmap(gl.TEXTURE_2D);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT);
        } else {
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR); // NEAREST,LINEAR
        }
        gl.bindTexture(gl.TEXTURE_2D, null);
    };
    Texture.prototype.applyFilters = function (filters, frameBuffer) {
        if (true && frameBuffer === undefined) throw "can not apply filters. frameBuffer must be explicitly passed. Pass null if no frame buffer needs to bind after filtering";
        var len = filters.length;
        if (len === 0) return this;
        if (this._texFilterBuff.buffers === null) this._texFilterBuff.instantiate(this.gl);
        var filter = filters[0];
        var texInfo = [{ texture: this, name: 'texture' }]; // todo now to make this array reusable?
        filter.doFilter(texInfo, this._texFilterBuff.getDestBuffer());
        for (var i = 1; i < len; i++) {
            this._texFilterBuff.flip();
            var texInfo_1 = [{ texture: this._texFilterBuff.getSourceBuffer().texture, name: 'texture' }];
            filters[i].doFilter(texInfo_1, this._texFilterBuff.getDestBuffer());
        }
        this._texFilterBuff.flip();
        if (frameBuffer !== null) frameBuffer.bind();
        return this._texFilterBuff.getSourceBuffer().texture;
    };
    Texture.prototype.bind = function (name, i, program) {
        if (true) {
            if (i > Texture.MAX_TEXTURE_IMAGE_UNITS - 1) {
                throw "can not bind texture with index " + i + ". Max supported value by device is " + Texture.MAX_TEXTURE_IMAGE_UNITS;
            }
        }
        program.setUniform(name, i);
        if (Texture.currInstances[i] === this) return;
        var gl = this.gl;
        gl.activeTexture(gl.TEXTURE0 + i);
        gl.bindTexture(gl.TEXTURE_2D, this.tex);
        Texture.currInstances[i] = this;
    };
    Texture.prototype.unbind = function (i) {
        if (i === void 0) {
            i = 0;
        }
        var gl = this.gl;
        gl.activeTexture(gl.TEXTURE0 + i);
        gl.bindTexture(gl.TEXTURE_2D, null);
        delete Texture.currInstances[i];
    };
    Texture.prototype.getColorArray = function () {
        var gl = this.gl;
        var wxh = this.size.width * this.size.height;
        if (true && gl.checkFramebufferStatus(gl.FRAMEBUFFER) !== gl.FRAMEBUFFER_COMPLETE) throw "Texture.GetColorArray() failed!";
        var pixels = new Uint8Array(wxh * 4);
        gl.readPixels(0, 0, this.size.width, this.size.height, gl.RGBA, gl.UNSIGNED_BYTE, pixels);
        return pixels;
    };
    Texture.prototype.destroy = function () {
        if (this._texFilterBuff) this._texFilterBuff.destroy();
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
}();
exports.Texture = Texture;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var texture_1 = __webpack_require__(41);
var FrameBuffer = /** @class */function () {
    function FrameBuffer(gl, width, height) {
        if (true && !gl) throw "can not create FrameBuffer, gl context not passed to constructor, expected: FrameBuffer(gl)";
        this.gl = gl;
        this.width = width;
        this.height = height;
        this.texture = new texture_1.Texture(gl);
        this.texture.setImage(null, width, height);
        this._init(gl, width, height);
    }
    FrameBuffer.prototype._init = function (gl, width, height) {
        // Init Render Buffer
        this.glRenderBuffer = gl.createRenderbuffer();
        if (true && !this.glRenderBuffer) throw "can not allocate memory for glRenderBuffer";
        gl.bindRenderbuffer(gl.RENDERBUFFER, this.glRenderBuffer);
        gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_COMPONENT16, width, height);
        // Init Frame Buffer
        this.glFrameBuffer = gl.createFramebuffer();
        if (true && !this.glFrameBuffer) throw "can not allocate memory for glFrameBuffer";
        gl.bindFramebuffer(gl.FRAMEBUFFER, this.glFrameBuffer);
        gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, this.texture.getGlTexture(), 0);
        gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.RENDERBUFFER, this.glRenderBuffer);
        // check
        var fbStatus = gl.checkFramebufferStatus(gl.FRAMEBUFFER);
        if (true && fbStatus !== gl.FRAMEBUFFER_COMPLETE) {
            throw "frame buffer status error: " + fbStatus + " (expected gl.FRAMEBUFFER_COMPLETE(" + gl.FRAMEBUFFER_COMPLETE + "))";
        }
        // Clean up
        this.texture.unbind();
        gl.bindRenderbuffer(gl.RENDERBUFFER, null);
        gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    };
    FrameBuffer.prototype.bind = function () {
        if (FrameBuffer.currInstance === this) return;
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
}();
exports.FrameBuffer = FrameBuffer;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var color_1 = __webpack_require__(18);
var AbstractLight = /** @class */function () {
    function AbstractLight(game) {
        this.color = color_1.Color.WHITE;
        this.intensity = 1.0;
        if (true && !game) throw "game instanse is not passed to AbstractLight constructor";
        this.game = game;
    }
    return AbstractLight;
}();
exports.AbstractLight = AbstractLight;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var State = /** @class */function () {
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
            if (_this.currState[i] !== val) changed = true;
            _this.currState[i] = val;
        });
        return changed;
    };
    return State;
}();
var ObservableEntity = /** @class */function () {
    function ObservableEntity() {
        this._state = new State();
        this._onChanged = [];
    }
    ObservableEntity.prototype.triggerObservable = function () {
        var changed = this.checkObservableChanged();
        if (!changed) return;
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
}();
exports.ObservableEntity = ObservableEntity;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var pointLight_1 = __webpack_require__(96);
var LightArray = /** @class */function () {
    function LightArray(game) {
        if (true && !game) throw "game instance is not passed to LightArray constructor";
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
}();
exports.LightArray = LightArray;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var ShaderGenerator = /** @class */function () {
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
        return ("\n            " + this.prependedVertexCodeBlocks.map(function (v) {
            return "" + v;
        }).join('\n') + "\n            \n            " + this.vertexUniforms.map(function (u) {
            return "uniform   " + u.type + " " + u.name + ";";
        }).join('\n') + "\n            " + this.attributes.map(function (u) {
            return "attribute " + u.type + " " + u.name + ";";
        }).join('\n') + "\n            " + this.varyings.map(function (u) {
            return "varying   " + u.type + " " + u.name + ";";
        }).join('\n') + "\n            " + this.appendedVertexCodeBlocks.map(function (v) {
            return "" + v;
        }).join('\n') + "\n           \n            " + this.vertexMainFn + "\n            \n            ").replace(/\t/g, '');
    };
    ShaderGenerator.prototype.getFragmentSource = function () {
        return (
            // lowp, mediump, highp
            ("\n            precision mediump float;\n            \n            " + this.prependedFragCodeBlocks.map(function (v) {
                return "" + v;
            }).join('\n') + "\n            \n            " + this.fragmentUniforms.map(function (u) {
                return "uniform " + u.type + " " + u.name + ";";
            }).join('\n') + "\n            " + this.varyings.map(function (u) {
                return "varying " + u.type + " " + u.name + ";";
            }).join('\n') + "\n            " + this.appendedFragCodeBlocks.map(function (v) {
                return "" + v;
            }).join('\n') + "\n            \n            " + this.fragmentMainFn + "\n            \n            ").replace(/\t/g, '')
        );
    };
    ShaderGenerator.prototype.debug = function () {
        console.log(this.getVertexSource());
        console.log(this.getFragmentSource());
    };
    return ShaderGenerator;
}();
exports.ShaderGenerator = ShaderGenerator;

/***/ }),
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
exports.embeddedResources = {
    "resources/button.png": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAABNCAYAAACIaDKJAAAACXBIWXMAAC4jAAAuIwF4pT92AAAKT2lDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVNnVFPpFj333vRCS4iAlEtvUhUIIFJCi4AUkSYqIQkQSoghodkVUcERRUUEG8igiAOOjoCMFVEsDIoK2AfkIaKOg6OIisr74Xuja9a89+bN/rXXPues852zzwfACAyWSDNRNYAMqUIeEeCDx8TG4eQuQIEKJHAAEAizZCFz/SMBAPh+PDwrIsAHvgABeNMLCADATZvAMByH/w/qQplcAYCEAcB0kThLCIAUAEB6jkKmAEBGAYCdmCZTAKAEAGDLY2LjAFAtAGAnf+bTAICd+Jl7AQBblCEVAaCRACATZYhEAGg7AKzPVopFAFgwABRmS8Q5ANgtADBJV2ZIALC3AMDOEAuyAAgMADBRiIUpAAR7AGDIIyN4AISZABRG8lc88SuuEOcqAAB4mbI8uSQ5RYFbCC1xB1dXLh4ozkkXKxQ2YQJhmkAuwnmZGTKBNA/g88wAAKCRFRHgg/P9eM4Ors7ONo62Dl8t6r8G/yJiYuP+5c+rcEAAAOF0ftH+LC+zGoA7BoBt/qIl7gRoXgugdfeLZrIPQLUAoOnaV/Nw+H48PEWhkLnZ2eXk5NhKxEJbYcpXff5nwl/AV/1s+X48/Pf14L7iJIEyXYFHBPjgwsz0TKUcz5IJhGLc5o9H/LcL//wd0yLESWK5WCoU41EScY5EmozzMqUiiUKSKcUl0v9k4t8s+wM+3zUAsGo+AXuRLahdYwP2SycQWHTA4vcAAPK7b8HUKAgDgGiD4c93/+8//UegJQCAZkmScQAAXkQkLlTKsz/HCAAARKCBKrBBG/TBGCzABhzBBdzBC/xgNoRCJMTCQhBCCmSAHHJgKayCQiiGzbAdKmAv1EAdNMBRaIaTcA4uwlW4Dj1wD/phCJ7BKLyBCQRByAgTYSHaiAFiilgjjggXmYX4IcFIBBKLJCDJiBRRIkuRNUgxUopUIFVIHfI9cgI5h1xGupE7yAAygvyGvEcxlIGyUT3UDLVDuag3GoRGogvQZHQxmo8WoJvQcrQaPYw2oefQq2gP2o8+Q8cwwOgYBzPEbDAuxsNCsTgsCZNjy7EirAyrxhqwVqwDu4n1Y8+xdwQSgUXACTYEd0IgYR5BSFhMWE7YSKggHCQ0EdoJNwkDhFHCJyKTqEu0JroR+cQYYjIxh1hILCPWEo8TLxB7iEPENyQSiUMyJ7mQAkmxpFTSEtJG0m5SI+ksqZs0SBojk8naZGuyBzmULCAryIXkneTD5DPkG+Qh8lsKnWJAcaT4U+IoUspqShnlEOU05QZlmDJBVaOaUt2ooVQRNY9aQq2htlKvUYeoEzR1mjnNgxZJS6WtopXTGmgXaPdpr+h0uhHdlR5Ol9BX0svpR+iX6AP0dwwNhhWDx4hnKBmbGAcYZxl3GK+YTKYZ04sZx1QwNzHrmOeZD5lvVVgqtip8FZHKCpVKlSaVGyovVKmqpqreqgtV81XLVI+pXlN9rkZVM1PjqQnUlqtVqp1Q61MbU2epO6iHqmeob1Q/pH5Z/YkGWcNMw09DpFGgsV/jvMYgC2MZs3gsIWsNq4Z1gTXEJrHN2Xx2KruY/R27iz2qqaE5QzNKM1ezUvOUZj8H45hx+Jx0TgnnKKeX836K3hTvKeIpG6Y0TLkxZVxrqpaXllirSKtRq0frvTau7aedpr1Fu1n7gQ5Bx0onXCdHZ4/OBZ3nU9lT3acKpxZNPTr1ri6qa6UbobtEd79up+6Ynr5egJ5Mb6feeb3n+hx9L/1U/W36p/VHDFgGswwkBtsMzhg8xTVxbzwdL8fb8VFDXcNAQ6VhlWGX4YSRudE8o9VGjUYPjGnGXOMk423GbcajJgYmISZLTepN7ppSTbmmKaY7TDtMx83MzaLN1pk1mz0x1zLnm+eb15vft2BaeFostqi2uGVJsuRaplnutrxuhVo5WaVYVVpds0atna0l1rutu6cRp7lOk06rntZnw7Dxtsm2qbcZsOXYBtuutm22fWFnYhdnt8Wuw+6TvZN9un2N/T0HDYfZDqsdWh1+c7RyFDpWOt6azpzuP33F9JbpL2dYzxDP2DPjthPLKcRpnVOb00dnF2e5c4PziIuJS4LLLpc+Lpsbxt3IveRKdPVxXeF60vWdm7Obwu2o26/uNu5p7ofcn8w0nymeWTNz0MPIQ+BR5dE/C5+VMGvfrH5PQ0+BZ7XnIy9jL5FXrdewt6V3qvdh7xc+9j5yn+M+4zw33jLeWV/MN8C3yLfLT8Nvnl+F30N/I/9k/3r/0QCngCUBZwOJgUGBWwL7+Hp8Ib+OPzrbZfay2e1BjKC5QRVBj4KtguXBrSFoyOyQrSH355jOkc5pDoVQfujW0Adh5mGLw34MJ4WHhVeGP45wiFga0TGXNXfR3ENz30T6RJZE3ptnMU85ry1KNSo+qi5qPNo3ujS6P8YuZlnM1VidWElsSxw5LiquNm5svt/87fOH4p3iC+N7F5gvyF1weaHOwvSFpxapLhIsOpZATIhOOJTwQRAqqBaMJfITdyWOCnnCHcJnIi/RNtGI2ENcKh5O8kgqTXqS7JG8NXkkxTOlLOW5hCepkLxMDUzdmzqeFpp2IG0yPTq9MYOSkZBxQqohTZO2Z+pn5mZ2y6xlhbL+xW6Lty8elQfJa7OQrAVZLQq2QqboVFoo1yoHsmdlV2a/zYnKOZarnivN7cyzytuQN5zvn//tEsIS4ZK2pYZLVy0dWOa9rGo5sjxxedsK4xUFK4ZWBqw8uIq2Km3VT6vtV5eufr0mek1rgV7ByoLBtQFr6wtVCuWFfevc1+1dT1gvWd+1YfqGnRs+FYmKrhTbF5cVf9go3HjlG4dvyr+Z3JS0qavEuWTPZtJm6ebeLZ5bDpaql+aXDm4N2dq0Dd9WtO319kXbL5fNKNu7g7ZDuaO/PLi8ZafJzs07P1SkVPRU+lQ27tLdtWHX+G7R7ht7vPY07NXbW7z3/T7JvttVAVVN1WbVZftJ+7P3P66Jqun4lvttXa1ObXHtxwPSA/0HIw6217nU1R3SPVRSj9Yr60cOxx++/p3vdy0NNg1VjZzG4iNwRHnk6fcJ3/ceDTradox7rOEH0x92HWcdL2pCmvKaRptTmvtbYlu6T8w+0dbq3nr8R9sfD5w0PFl5SvNUyWna6YLTk2fyz4ydlZ19fi753GDborZ752PO32oPb++6EHTh0kX/i+c7vDvOXPK4dPKy2+UTV7hXmq86X23qdOo8/pPTT8e7nLuarrlca7nuer21e2b36RueN87d9L158Rb/1tWeOT3dvfN6b/fF9/XfFt1+cif9zsu72Xcn7q28T7xf9EDtQdlD3YfVP1v+3Njv3H9qwHeg89HcR/cGhYPP/pH1jw9DBY+Zj8uGDYbrnjg+OTniP3L96fynQ89kzyaeF/6i/suuFxYvfvjV69fO0ZjRoZfyl5O/bXyl/erA6xmv28bCxh6+yXgzMV70VvvtwXfcdx3vo98PT+R8IH8o/2j5sfVT0Kf7kxmTk/8EA5jz/GMzLdsAAAAgY0hSTQAAeiUAAICDAAD5/wAAgOkAAHUwAADqYAAAOpgAABdvkl/FRgAAoI9JREFUeNrM/XnQrVt6F4b9nrXWO+y9v+/Md+y5W7SGltBAI4QCCIMkjAmBkoDYrthOYpKY4KFITFKpIokTQspJCDYux3aqQuKK/U/sxBCcEBJkcCRhSQ0ISa2eh9v39p3O/E17eIe1nvzxPGt69z4tUiCbVh1133u+b+93WGs902+gP/N7X8e3+g8DABNWvcG6N7DWoHUGbUtoW4NxAK6uga6zuH+XYB2j6YBnzwOajnDvrgEATDPDOMA5+oHJ83eu1/jI6oy+m8EfJKLvYEIfOGC9JnQrg6ZlTCOw3wFgxjwzxonRNISuJRgDhECwDaPtCfMIeA8YAogA6wA/E8gw/MyYJgIYIGK4xsA1QAiMeQSsIwABIcg9ew8EBtgDzEDbEYiA4RBgDME1hHFkjENA0xJWK4OuB3wAri8BAqPrCGTkOrqOMc+EeWYQAYBcCzPgPQMgWEcwFBCY8ncHBoPgZ0YIcu/GEpoOICIcdgHzzGgawDoLMGAsgwxjHgnDgcHMcA3BEMAgMMvzYWY4R3CtPF9mgp8JxgSQAYKXe2YQjGFYE68FmCdgmgJABAJgDNCtDQiMEABrGfNkAALaTp7xcABADD/LZ7atXAMYcC3BOYb3ADPJ8wHDWsBYwDpG8PLd8ZkABNcwmIFxz/ru5D5CkGdrLMEQgwwBep3MjHFghEDoesqf7eXviQCSJQtjWNbuSOm+mlbWSwhIaw7MaHsD6wK217Lu2k4+z3vo7wDjIHfmWsBPwDzL/bFn+EBoGoa1hGmSddGvDIxjTAODA6X9OI0BhoBxlOvbnFlYC3gva0zu2aBpZC34iQAjvwcQrJU1ZR0wjICfZF02rfwdM8N7hnMGxsqeCV6foSUQMQ574LAPIGL0vUHbGcwzY57kc8GEtoc8a0/o18A0ADc3Hqu1QdcbeA/sth7WAKu1/PM0MsZR9uJ6Y7Bay8uYZ4Zz8t7mEbCNvP9hL++8aWVPcmDdS4A1BB8YPjDGAWAOsNagawkwBGuAeQ7wntE0BvMkz9daWac+yLkApuJEJMw+oG1kfxMBBIJtdD2DYK3c8zTqteg6INK1ywxD8uybRs+WQd7Nai3/bp4JwxAwDYy203fP8rveBxhrwnqDLzUt3hsG/OLuGu8Q4cuG8DO2JXRrgjWM/Q3gmdH3BGuBYZQ9xwGwDeAagp8YYSbMASAEGAPMs+xtom8ZHuDw6/gflgv9IAO/kyx+V7vCD/Vr/k7vAWvlZ+ZJFrMcSkDYGPAZASvCcAB21/Jz48g4DAF9Z+B7pE3QtATaEMZBDjZrcwCZZ4KxwDwFDId4eMoLaVs5BIYDwzUAkdXDTTY2BzmUQgBWvSyW/V4WXdMSDkPAfkfoOgOcG9BaAsj2qRxqfm1gjBwKtGbMkxwMRDEqA57lmokA5wiGCF4PPz/pgQhgHCWodK0eeL0sut21bNq2lQ3ELJsKYIx7wm4XwDDoOjmogpdnAGIQCG1nEBqAEeA9IcwE5+Rw9kF+hiEHuLOyeYdBNvk8GQkwZNC1gPOE2cfPBsaB0HQM3hP2O3m3cnjLgepb2VTWSvCdwPCzfDeRvCdrAdcwAhGmmTDPAGmwM5YQHGMcJFBK8JCNG5gAYjgLGEOABgVr5DP2uwDnCDTJd82T3JsxEmwk2AKNk803HggcCE0bwB1JcuIlIPiJwSxr1llgdyHrx/ey9vzMmFuDpgGGgTXYyFoYBwniwUvwbDsDa4FpBKaJgY0kUoMewqzrZhjiocMIzDAzwbl8AAOQBKmVADpOBGNI9gBkrcW9Mg5yqFgLtC3gnByS0ySHi9Mg7mdJqpyTZ7rfMq5vZM3OK4P1hjBNsg+t0yRlDRx28jxoYgwHwtVzBp9b8FrexfWVvCcaLXwIOByA/U7uhW8ZmNGArK6bRtb4cJD/HTrGfivPpu0lQHlP6RpdI9ftPeGwBzzL+g690eSOMQ8G0wS0vcE0yt51LiZ80P0ihykzg4gwTwaTJogxYZX9F88ewjzJe4uBxs91ACEj67brZH3udxKIaJC14ydgv7M47AP6NQFBrj+EgNmTJCVEP2gIsJb/wPoW4DoAAW8Gj18A8LPM+KvM+Mqv5xnvfr0CR/D4A0T4J9s1/pBp2MwTgT1jdwFcPQcME7rWYB4N5hHYHwKurj3Wa8b5ecBqBex2wLOnDBBwGBm7PWPdM87W+pLmgL4jnJ0TDgdgHCV7sJp9jRNgHGEaPHZbA1kLjNUK6HsJDvudLDTZaJId+wmYdVMHZmzWBGcI11vJrvqOcLNlXN8EbNaMu7cZ57cAHxjvvSeVzflZgLWErmOcncnBO44sWXCQRROCHCIM+TlrgNkTOADjxHpgMPYHIDBh3QNNw1ivZbFeXsrBvF4TWs3G21YW/M014+pGDoa+lUNvnlBFsPUqoO1kY8yzZOFtC4RUCTCCfqaz8jOHA2O/l/8NI9d3fgacbeSarYUGS8ZqAxgYXFxKRjvPwDjH58mYZkLfM/o1EGb5Z03+YR1rlRsQAmEcJbuOm7Rp5KC7udbDljQ7nRgBkvU1evhJ8JANuh8Zuy1jvSKcrQlMwOEgobqxAFmpEgCDrmWMM+Owl+fddbJ2moYwjvJ70yQZ6vm5HCJPnjKGA+PszMBZxjAyVr0Eye1OMuTNxmAYgMNBqscQZO3GLHGa5MA8O/NYrwi7A8u60Gr1ZgdYIwnVHICX7wNtG+C9fCYDaBvCegVYG7A7GDRWEooQgKaT63cG2B8Yu4Nk96veoHVSAA56YDeNBI15IsyeJVloGJeXwNMLqUDONxZ3bss97Q8BjX7G+Tlht5V1f+8usN0C7z/2uHM74O5tObAfPWNYy3hwV/bbzY5xdR0wzYyX71ncu8cwjrHfA62T97/fSwW7WgOXl7Ku1mvCbi+VQ9dJAGkbwjRLB+Jmy5i8JGFn6wBj5f6GIeAwyF4YtDJtO8YwEuaBwSR7INZ/RAbjwFitJEGwBJBh9J3RYCMJ0jgAux2j70gzeqnygn6SNYztFlitAEOEqxupQO7eAVYr2T9XV4SbbcDZRgI1NKELwWLVGRxeJpzfYtzsA3aTx617hM0tfOTsHj5ydov/iCY6P7Xf4d/jgP8QFvt/qAMIMyjM9MdMj39pcxuf7Fay2W+eAtcXjDARGmswjfKSrg8eF9cHXFxPuLwacb2bsGmBsxWjcYxhAK538lImDxwGRtcQVq20BwJLlth3wKStFWPkwGgcMM0GxkhZPWh5SgBaR2haKeUOA9A4A0LA5HNl4EM8SIGulWxtf5DPbxv5vf3AaBvgfG2w7iRbfXYp37PWRdw0jL6Vg94HVKVwYKm8mIDWSVvKBwCBNZuX3xlnWbydZoR9K//+Zi/X13fQBcZwDiAGdoP8cYbRWpLPZkYMH4bkvoyVA0xaFFKNzbMs8li+NlYW/zgTRm1fSZYvn3O2JlgC5hADiFx738rBuBvl+qdJsrG+JWlFxWsvMlwCpeqjcXLwTx7yPDhfvAQg4DDKvwtAal3JjxAaoy1Diu0r+XkfgFVHaC0jMGH0nFpxpgiwjZPvHaa4biRwOStra5yDtrCAVScH7eUWGCdg3cvhMs/xIJYExXtJFvxMEnCdZKTTLOuKDCEExjTJ8+v0GQaW+wMB+1Gfy8wYPfDkGaF1EvQHrfQaC7QtaRCTSm8YJZA3Tp6pIfmMw6htyJbQGPmOcQYaR3BG2qKzl6qrdXL/2wG43kqwWnWE8x6YPOEwaUUBeSaDVt7nj+Q6nl0xzp4TznrC5BlXO4YhwqPH8tT3I7A9SPV/cU04fyxV1DBJ5QSW1o+zQNcydgd5R31LGCaGD/LeiABnDHyQ9u9ulM9sHaFr5N6dkwAzzUDXyPsIkMRj1jXHkG4EUd4Ts2e0TkoPaxgGsi5Y34/V3x9Gfack710qEE2QCNiPWqGAsNPW0vlj+R3vge1BEue+JVgieMj5EGBwftZi71u8PDoYbrC7bLB7CHgOWN1ivPRB4N7rDLfCj955gB8F8L+aD/TvcOB/nQiX/1AFEK04/ggR/her2/gN/Qa4eh/YPQKG5wC8hYMBNwHb/Yh3nwwYDgOmYcL+MOH6EHA9MIaZ4Q0wMwMGGGY9+HXzzEEORGelhA9BDp/GyqEQX2A8DEKI/X75XdZMwho9UHTeYaRdnzINPcMlo2BZrCA55EDQSkE+0xoNSFYylf2oh66Rw8AYhjPFAYAcyJi1VaSfCf1uBKRshlkCGuJ1688yx8Ci16cHbzwoZy8Zo6H6/nQCI9+p7T4OWnHo74dAqVyXxS6/6IP2lFNGJtfTNnpwswTvOIuyVjPAkJ+11awtsG5ibWX6ECcfGkD02SEG8+I7ieRQmXz5ezl4xPsz6Wbz/Xs9FBor38+cn0u8n/iQjF5n/A6ryYlBEbD03pw+y3GWn3cm/74xct/SEpUeOVjWEOlFhBBnMPLsA+tn6O+B5d8z9Pf0s+cA9C6vn1mvNa4TeR+6X/R7rEF6h4ElmJDeQ7z/EFC1aOJzMiTvbwrQil2eZePyHo2/44z8c/B6KAbZH62TgOcDp6St1ZNomuX+AoDOxcRKftcYpOdmjTzHycv3Ok1gGNJmJpJkIAR5ZpMmg9bIdSH+Pcv6tCYnePG9xTUd11T8T9DPiWuEWN4TOCdnIeRrjmcVUbE+9V3FvTnH59DIZ4cg1+y9BDdLQG8JK0sgZqyeE4Zri3fWBuQc2HS4d7vD3fMeDTnsHwFvvTfjamDc/wDw4e/Eq+f38a/QFf6FwxZ/hgP+tX8oAkgI+C4O+LdX5/gdm7uyoW6eMp6+A2zWFrfuWlxeT/jGuzd48myLeRhxtfW4ngJGEB7vGe/czNjPwGFmbKeAgx7URPllxE3KxcEeXyZrwFjMXtLLi/8dDw/5e9YMoqgJ6MVDozR8hgaq+J16esXFZ03xHZx/lsogpb8TN2RcfPEz4nWke+Lqv1Igips99saXi91QfYBy8bPlLAbF58SFXvzr6sfisyy/tzzcefF7FL+7vAeun3n5+TFwxv9dfvby583iXS3fXwj135WfFddUvD5Q8a4oX2f6zPjO4oDe5PfDRfWTAqLPvxcTl/TPIX9u9ew4X1Nc93G9pO+qAimKQFSsS5tfQFpvqK8B5Too1itQH4LMdUBN/8gATA7CXLx8Kg7aeKjG/VPu4fgcebFo4uHstQqwOsMq11ta28V9gougZ/J3U/GsuFijsaKLAQPFHqfiPmKFq3ltjgBY3CuKRE2DSkqslntDrzXuN1OslXgd9T5gtIawagitIfSW8OGtx4duGazMBBf2ePrIwrQO9++t8O2fOMNrDzrs3yV8/e+OuHgb+MAngTsfxP3z+/hz+2v8c/OI/y4a/Cd/P+c//f2gsKylf4W9/Z+yJXQroAEwHYD1xuLiAtgdJlzutnj8eIeb6wnXU8B7e8Y724BnB4/LkTHpQd9bkqyTAUs6CCNKB39gqTykW51Xclx8ZnFwhCCIlpj9Mec2SHwhBOljGsq9dWOoOhzTgcJ586dFQQxjKC0EcLU3qwMwBZAiE/FeynenWdY8581bBr7lQRgz4rgk4wFY/lxamEauU+6BcvAx+WQoD5EUxHReFPuuFA9Uo1VOgSTLhy7Hq9EKJm8x5vJ55K0U7zFWj/FnY4UYfHm4yvOixYFWXkP8EwN9/Lt4UIWg97Q4XCIyTQ4nqg7S9OxNrjpIAz+RIKSCfmBcP95rNmzlRImZcfme4jXlBIBT+y2+E6/Xa0+sBQEOSGWYq6m87oFcISG+ySJp8qGuwuokgPXf5wdgDVcvKTAlMAyRgBtYN1IZqCMgo1yPDErPMb7vuNfjz3kvv2sUMSXPh2TfFP8uJOQdpyBlTOxSSCVdJi55v3Cq3OPeKA9uKqqx+D1xPcTnm34mrjNtgYMz6o+ZjjMsztdgTEY8cXF9cT1IcsmYGZg8Y/TSrZln2Yu3O4OXVwavnVl85MziXkfYnBmc3+lwa3WGV+9vsFkT9luP3Rjw+icJH/0Uw/XAsKV/dx74v8HhP0cUVmDu/Ux/6fzc/p6mNXj6LODqCXDnlsX5ucXkPb745gWePd2isTMe7xhfvQp442rGs72s1Nu9wf21RWNlEVqjSAM9HJ2jtPCHkTF7RuOkl58WC3ILqMxsAqScdURwlnTgytJLDrGVIQvLaaslZh3LDCkultTmMIKsYYU0ukYOY+8JQaF6YEqLw2v7IfZlh1HaMyAJnjbOPwzBxFaGlYXqGs73G3ImWB5iVLRcZGajwzoNWEbbfdbK78x67VY3WMzaUqtP+8D5YKWcLWuwF5imDBxzpp53hvTx9ZDXtxhYDoyQWon5GVqjg0q9mfg9hoA5ZuksUNf478tMu8weycj7kGAtwAD5WVkvEVnDgatKhjS1lJYmFy3QfJgbA7DOHgiUhvTxfYQgyYixhFEP88ZIw5uDHMCkLcIUxFnQNSnT9PL7sSqNa93oPvFTXIu6zgww650YQxhnhiNpK4HyM48ZksDY5b7mOScGs+f0vssqVAKhtjw1WSKdC0irLqPc4neRPgPoPhsXba045wlFBWOMDpsVoeQcMDGDvbSnuoa0DZz3TeMoBc15joEKaIzRpEz2ZU4CNWDEttHMGhi1NYvcUorPMyaNs+d02JuivWqMXJefZa/a1E6XOV5gBT8sqs+IFvEs548pynQJfvK+jILWY6dFWm7SRvaeMfqA3cT40vMZX3o64bw3+MQdh+97tcHr0w7vHPb42voa3/9dt/GR1zaY3g/46t+Z8eRt4Dt/K/Dyh/Ffv3qKHxy2+P0Avv7rXoEQ0fc01vzllx60H71z1+H5M4/33wu4davB/bsGb7x7jXffvcTDRwMeDYw3dwFvXHnsPXDWEM5bKz3QBrDGwBpBOAVm3OwYW0WRnK8NNh3JwtH+5aanIiPI2XgceMZ/Dl4CSOPk4HY64BqG/CLmWVBPzkkmEwp0Dy9mEEY3R8xA46GEYp7ifeQe5NZVWcK7ogpy2i8eJ7nutpHPGJRXIAFPDn1TVjdFRpRbE7nmid8rg748H4l8CuE0aM+4yWV+BB5wEPRI7NsvW2RxZzVNfc8oMsiqzab/HkZ4LWkGEfJzSkG7aM/EbNg6eZfxecfs1NoIhczPh4tAGKsD1t8VDkeZ1RaHncntqLh+OPbEfZ55xYBFFCHJ8u+tIo7Y5wqyccrXmPLsJOjh5PTv/CSIL+Ei1C1Z6PwmBqc4p0vJTVFhEorrcQLtJSMHbrynVNmaYl3pGokH5jgdzw5hBBqb2momzyFiiym27OJzKvcBaZUzjBpUUmdBfn6ec2vJOoUVj3ndet0jREDX5EppnCTA9wrF9wE65Jcg2LWasGnAjYlFPEfiOgk+8j70zJhzCywCL2IQl+8IMEoSatwiiSnan/OUAT68mH2WfaxYcVkbk738LJmBYWLMAdgNjKttkNmLBbpGgBAyQ2LMgQUM4Bk3U8B272EN4ZMPHL7rboPXV8J9efDKBh977S7ONw0eP5zRtIzv+EHgtW9nDHsabi7wh4nCf2zt33sF8v9XAOka/KPO2r/82iur5vyWw3Tw2N4whtHiMHm89/gCz5/e4Pkh4JeeBHz5+YzdzHj13OJ2b2XwRRIU2sbgMDEOg0T1e+cGH7zb4E5PuN0bfOgB4e6aYGfGZqODuhYgRe+QAWwL2JYQRskuuruE+UZaHe05IcxK0joAfpChsm2FuGYjAkl/ZjrIZzVrYLqRJu/6JcJ8YIxXgO0I7Tkw3gDGAc2KMVwRbt4PmAeg2QDNmtCu5TDZPReiTn9X8PQ3jxiHS8adDxu4Htg+BkwDrO4yxivJyPwIuJ7QboDxhnG4AnhiNGeE9X05Lea9HHDNRjkIMyFMms038q78gTHtZejf3xZ8OAfANIR5Lz/bnRN4ZphGnoUfgFl/z7ZAs1LI4Mh6rYxuYzDtGW5NMDoINi1JltgDzQqYdozDhewS4wDTSr9cOBxCvnNrITCGWeC7sQ0Xq0JpkxHI5Q0l8FolBZbVjrZCmLUxHnLQjr16Jj6ek8QKTNuQHDTgTEjrCUZ+wVh5tmQYFGRdTQeBnUai2DwIYc90jPUdIXtunwDjHjCO0fSyhlzHmLaEcctoNtKuGncSMa1CPnfPGLYB2rVCyg+y5k1DWL+kHKc94NaMMALjltLMcN4x5kEP4RWhv62VolZ18x6Y9pLZ2w5Y3ZPnKKRbgGd5L24l+2L/XGc7nVbQ1wA1wPpO3F+yVm0PbF4mTDfAcMUIs96P08F9S3A9MO8kMDVruZYwyXV0txk8A9OeMG2B4ZJx9gFCswF2jxn7J4qMOzepvdauCOMuwE+ynuQZaTWj+3veyVkAAsZrqfBiO9IpQc84gCxjPgjEnoPcr2n1eR6EDhBmxriT59efyz0xE9YPZI9ON8B4ybh5ynAdoTvXgN3Ksxq3cv6AhbzX9PJOxy1jvGKcf0AiVpjlO66fBfCKMLTAO08F8vzkCvjyux7vPPPYTwwCY90JH2icGJ5ZZsmDx9Ve0BHfcb/Fb/1Ag9fXhOvJ4hMfu4uPvXqOMAf4KeD264xv+0HZUjfP8Ces43/d+3+ALSzd3H+QWvsXX37QY7O22N94NA1hs3Z46+EW33j7Ofw44I0t4xcfz3g+MB6sLF51BptO5yckZLPrvYexjA/fa/GxVxp8+J7Fx14z+MQHDJoJ4IkQAOwH4OqC4XojJD+f21eGARsIRjM0JsB46XcYAK0iL4IX5qjwHAKsMzAsN05BPhMB4JkBCxgvG4gMowmyaNgDBgTnCdMsrQgXgNEDwxwweYYJBs4DRtsm06ysdSY0IPg5YJwDLFtYL5/rWsB54DBpS8gDFAjWC8x1HIMQvrx8DhRdRcxynV4OSK8EPqOLP3jJlmYPrIIBTzmLhJeNZbyykS1gFALNszyvBgwT202z3GPfEmblYjTeaDkP+Tkv8y87S5U3TyzfEQATDOZJWzVe4EuOANLvk/JerhuBYZzMwYgAYkFbWZtnSOVEnUsAhfbHUQAPmI6H+DJbkb+MjPswKuFskncNMMgaRbBxyhB5Epb5PArfwJDc4zxK5myIsOoYqwbYXwPjTnoWkjgBLQE8ahJiAAfCuGewF5WGBkYC0xTQ9QY8EbxCbxFEEWFlIQmLAZogcHITpC0k1y/riAnoDcFodWNIk6VZIdMeaHrABVlrpIE3eKGPNiw8l6BzOsPyruZZ4MU2aMvZSwXU9HI90xzXH2CD9Ghkvxk4lqBrQHBK1OUgP9cGSTKCl307TgGODXoGdsofImI4b7RqYcDLng6e5IYDwzABHiDdG+yFaAmK+z1Pw6nRAKKDei7WKAXAalXDXoIesZA+B89ws7RfQyDYQOi0bTV4abfbQCAPsD47xDa0tkDi3rX6/EfPIG9kXskATMB5G3DnLvDgA4y+D4BnjJPHOw8JX33f4otvEr74vsdXHnl884nHWa8UiENAY4BbvcV+9vjikxFfv5jwIx/u8R13gC9/+TEePdnjB7/nPu7fdXjnjQnXF8Cnfgdw6z7/azcX1AL4X/8DaWGpjMA/su7tX//ER86wWTuMQ0DbEtZrh89+6RK/8rmn2M8Bn70K+NLzGbc7gwcbBwOCBeF8Y8HEuNx6nHcO3/2hHp96rcP3frzBh16XLGo7EPYz8OwZYb8zCDCYZsLlTUDfWW17KCyPSYlCwkQfDnKYnZ0Z7HcSlc/OGNNsEQJwGAKGQRZD15Ngwds8SPQMHPZA2zJWPWG7k4Pj3m3C/gDsDox+RehbYHsj7Z/VinF9Dbz/OGAKAZuVkHs2ayGCPbsMWLUGt28BXWfw7kOP623ARz/o4CzjyTPCeg2c9UIiCtpGWHXAuifc7IFnFwE+MO7eMrh/WyqC/SAHXNtQgnMeDoChAOvkIN4PpJyDgPONyFPEgf84Am0jDNhpEnIcmLA/SKAdJ2C9UhLdCBzGgGeXAecbq4mE8D4Cy+fF9tN6Lf3aqyvlFVhGY4X5O47SVhHODbBaGW0ZMBicWobWRaiyAdkAZ4XHQAmOmdnYKBBLsYtHyBA3MkZ73nJgcQH94qAk0aCVn5f/BmV5Cmt0PmNlPYHleQ9DwKQE1dZJVXsY5PvXa4O7dySDfPJMuBONZXS9QdPKc9/vgO2esV4bEBH2+6BzJanMLy4CPAO3zmRGMYyc5m93bxPOz4Sg5pSPcn0jLV5jGeNIMi8MQni7d0t5ObOQQccJ2O0FWh084fZt4avMc2ybBHg9oLsGuNnJ2ndKupsmIfOebwh9L2z2OTC2O+D2OeFsA9xsGdsdwTPQtxI8AULbybPc76ByRIzDQfZe6xhn58A0Cldlu5WWzYdeN1h1hIePGRdXcuifrWImEdA1hO0hkgdlbTQKvhE2ujy/lXKydgeVNCJ5p6teXrYhUVoYRxkkg4W30zhRqthP8qwDCxlyNwScrQh9J+vm3h2D9RrY7YGbG8bTC0bXyd4GCekxkiTbRt7NMAasOkLjCDf7gOsb4LWXpQLxXgiv19cet88N7t8TQqghj76dcGft8fKdGXaYcQgBX3lG+OkvMP7mFzy+/MgjzAHrjsEIGANjmAKebgP2w4wP3mrwez+2Qs8B7XmL3/npV7DuWnzzmxP6c+D7f4yxPgeeP8K/ZA3+DapBk8cVCPOvBdPlbw+Mv/bKgxVunTXYbr0yhC0+/9Xn+OpXnuPpwePnn3pczYyP3muwchatJTgyOIwBF7sZr99t8Vs/cQs/8LEWn/qQxbhj7DzwzhPC1aWF9w7Gygua5wBnpbluDcOZIJBBHWImNrITTDkaycAbFzA30m9tWgJozn1wz7DEaJxB4/KcgTRT8i5uFIPWMYyVCqHxQBNJVU7aUW0rG9NaRusCjGd0VjZC20il0NmA1olUhbUMZzz6Bmgbqb5aR+gbCUaNCwgsg5jGydDfHhidZbBh9C2j6aT6ahSz3yh7Ps5XnFN5F8/oFIgwE6NvTdJ2koxbgkfbSfun7yRbbD2BKGh/N6Bx8vfTFNBaRt9odWOFPc2KSCE9aLtWDma5NxmiNq1sZladqs4B/Up1rygP0kMEQqgEhaEA13DityTUWZDfyE0vZeszVegh+SuPiGeIPejArNdCyonQIaqCIeIQ2Rp5t8Zymiv5YBSgENB1lOccM9Do/d+67dG0hKu9PMu+k/lW1zGaNiN9Vh2j74Sh3ThBF7om46w3K/n8KB0i2klyQMscRd5hCEquswpUsLKOyetabJH2jcwUhBfUWvmdvpODUtaG0fegAa0Rdnrr5BraRjJ8ZxmdSrNIdsnoGmDVGzinBEYn9yqzvQCCQdswLBEmXT/GqnwPy7NpnAEwIwBwA9A1QVnvSuC0wh7vVKonzppaBwQSsiwQJYGkTS0IOVE0AMk+NhHHSaLqEKHXVkmlNDMYJgUQ7xktZxDK1ACz92gbA2cJbAhNO8M1hGaW59m5gNZGnSvZz3Jeyb2Tyu60DeAag3YK6BwruZlhyCCEgL0NsGTAgTAFi3G0uAg93vGMr7YzTBhx73zCJz8y4bf/Ro8vfRH4G5+1+BtfC/j5r85oLHDnHNgaJSs6wttXM/7Pn7vB7/34Gp9oRvz033oP3/+pl/HKayu8++6EX/opwm/68YDzu/Tntxf0prH4v9O3DiDhWxEE706ef+bV+xt7/3aPw+DhrEHbGHz+q8/x1pvP8Y1rxs8+8jAW+LZ7LVatQaPD8SdXMzpj8KPfdQ+/7dtX+MSrBmw8Hl4xnj+3MMZhtQKGMcA5kTRwVg8iU8BVFTAfs0jWrHKJi88QbUrwOS57HQmUColExEd4eOgRRQn1oNlthONBrg2BKtZzFBog1KQ6+d+cyEeSIFOGPgbSz0X+b62MZKFTxb1I+HSuMwMq4Mcc9KBkUmSTImy4ECvkzLVJd80EmyC/cXAdiX3CerY2pyTGyjOQ3xFGbxx4R5E5QWNJxk9WKxZFmzGQqoSIRDFG0GfOyLXOQTLs4COqLUOua+JJBBHLgiBe8FVIqxfmdIAkhJnqX4EYxooETUZFyT1MkwwqYQwaPbAH1V9rW2CzAboe2G2BvbKrRctLgxER9oOgedZrwSj7mdPA1lpgu5Vr71rJzCN6ilk+W+RoVK/Lig5YBCQEHwOlvLymkQrRB4KxIQEYoIKXTZsJqanC0ymvEOyUOIsMyY3EuDgzkvUr70kCXezQFIsUef0xZcJruWetQZEMaIdJn0tQKCujeM/KQdGNmBYy6xnBupfi2ufIW1lCalEyzOv/xonMm4tzJeYpqfql/Fn8gjkA6bvheA/FT/Px5DmpMhhdzG3D8Oy1HW/w/HqNZ9fA463H3Tsj7tEO//inR/zkDxv8lc93+I8+4/G5tyb0HeHWSq65dQ0eb2f8pS/f4Pd82xo/8MDj5/7u+/hNn3oVL73U4/HDEZ/7GcJ3/Q5gdYa/NB3wvdbiV14YQMILAggzMPnwVx7cWb/06v01xikIuqE1+Oqbl3j7zQt84VnAT7874+7G4qW1w7ozWHcG+4FxuZ/x3a+v8WOfuoPv/XiDwzTh7aceIVj4YDHPIkVgbewxq0okuCZKxQdK0toIkdWjrN2KoKObLZ6y+TXop1ABJyI+6qdTxVIDiKO+TahPLA0kJVoLCnHkdB8FWY/jEJOVtKQDaEuV0GdchFyw6qEHHQIjBAmbTJw2Y8zuk2goK3w1wUYl07YKN0yHqAaZ+LQJ2p+2WjUg8yYic9ezzi90I8UxduQ+zDPrwUKJCex9DqrWZsRSzP4j4ilCRK0V3S0fJHj5OSKpQoF0ycKYlY5OrEFChJ5Svf1JMu30vyk/d0OkSsZ6yHoCs1ENLwmORALdJQiyaJ4lIK56aWnOE2G7jQq8rFIgcuD7IK1GZ1WZdwwIkNmIUwTc/pClLyLAICZQXS8JyTyrwGSQFld55LDCXmVuVNNAmUkhuXL/TmHBmVCZqzkyrFWXJkX6vBPE3Ob1HRME4/Rd6SyAzDG1lDUpsi4xTdLnI3Kx4tqK8jMQAcH6cKcknlmiE0vCrGRScW0L3I6R21fC7I/nBFU8mUqaYJGcHp+TBRdLr4eL6TPHdJc5JUu0QE5CE1ZwSSLL3KqgiRGTJK4GAAyjbWZN9gyePVvj61c9PmsO+M4P7/FP/ciI3//bLf6DnzH4C391xsPnM87XwOgDXjUOz3cB/++v7nAzrvAjrzf4zK+8j9/03a/i5Vd7PHs04ks/T/ju3wEQ8FPzhFdJxtLHAWQY+eghiXxD+B/dPm9/6EOvbPRQYvSdw5vv3uCtNy/w+aceP/u+x/2NwyvnDp0zWHeE7eQBNvjRT97Fj33PLazXAY+uRxwOBrO3aBuRDDeUA8AyteYFa/oELCwDqavSg2omXxk4iFIoyefKMR275DNkoh5VaITMMM58h+Uyi1kuCoVdOSQJPJMsCyqfuWLM9XNZN0BiqerBKFIYmVgnGNnyGggBnIiXEeobETbW5Mz0Rc85kgwFLlzQbzlmkmX5w6CCjyHzKU4ZfdDDi4MgUEjlI0p2f+SqGA0e8XAU6Xi5FyoG4mSyIEQKIgV1OFYilIcj5eNJAY9SYqJVJUu1E1UBfJD++qzvuHFywcMAjBOpMCdhcy7P8uZa1HCN0+pDD1tjRG3Vz4z1Rlph86SkSJ1/DEMAe0FeZckV1SezUpUEn+X1g85wSN+FnzOR0LmsXBv3feAa/h6BCdBs2hAh6IzJkMBHSzJq/P0kTz4jBSZDDAOG1zVaod04J3shVY8RNJETr/hZoQgglDoPSvxlgMjkxHChSlG9X6JUnWReBxIvJCs00PIkqWC2VHEAi7UUf59zlZPOkDLaFK2DuFbL2V1MELhkOfLpCiiWYaEIeZHg6ay0rC53HT771gqPdgd86juu8cf+0IQf/I4Wf+bfN/jZz424f5tgO9kdhoC/+dYeloBPP3D4xc8/wm/7/tdw70GDR9+Y8NY9wrd9Gi/dPMN/OA74yUjurc6K611A+edyF3B54z8SAv6XH35lg1XvME4efWfx5OKAt966wJefTviZ9z3ubSxePXfYdAZ9Q7gaAu5vGvzh77+H3/1d52Az49FFwP7QIgQrGTFx8cAXkbzQXyI+6i2lMjYHnnrlRHZ0zDCoYMjGgECG6t4NxcWZM+qUCcnSzS+eNQgVomgl25n0umOMMzGehUIWmqJ3hSnkFagIYDHrKD5Dw39k5EcUChdtvdwi0ARK+91lgcnKnYiEDSPyoJqFUgqySWpFh83Sk42FFuX2XNky1J8VCIu2OTgHoTRwj+ibBfmPjAycQYI087P4Vwg5M7a3KLWbrFYr1pJyCKLqAOnwXbwsrKX6Z41m6IZFp0yFIkOQHrjok0mmP40yCCdQEs+bRk68hr4H1mcSWHY7EdcEiQChcwSynLgsh4P4srhGhs+sh3+8//1BZhuuyTpMsXJrW+nXz1PkHclnxIXHSX1B2nHWiiw8J22xrEAQMx7rVBWa8+HNOieLHA2pRrIGSCIJUsG5Yqm0hCTHVQBfQqe5UGTgUKsRlEJTHDKTPvKJyv2fARNVNzafA6kVpnu1kKZZtn61Px1V6FCuaub8/MpmSPlZ8TziRQlEpS4M59basUYQVVVHGdwSsrBWTwGVfyg16WCI0TUzGudxeb3CL3/+Af7O3z3D93484N/7kw5/9Md6XO0MQjA46wxuryzOe4effnOPX3nu4bzHZz73CIEZ53ccvvk5xvN3gdUt/MQ04PeOg3jTlH/MOAaUf0Te2P9fX32wwssPeoyjR9NY7IYZ3/zmJb7+ZMDffOhxZ2Xx8sbJzMMZXA0BH9g0+EO/8R6+60M9biaP653BPBuAfGL65hqv6GdWxYUe5FS8I+KK0capZ3+6d8jVwqCcHYdc4VQCPYv3mHWGKBn5pBIfBGO0lYRQ1XWkp0Eo+uySvUWxPMmiQsh/70NRxlJmtsYThItFeURE0uqDmTMJr2Cj5RlAlO+gqoKyhlMbIijEkCJ5gjL0Nmp+xQMPcVMpGi6Kv/m5DszQ7LRku5f6SmkWATk8jUrBz2q2JC0TVkl2kbqxDjAKsY2BxxqGtUGl/FkPWYY1QQKFEimNCfpH11TUcWJCCOJBMc+s845MqGycEvZGUYg2ymVarwVNtN/J3IO9qiq43IojQOX4pYqAl0AQs27rJFBOM9D1KqQ45zViSCTvGdn0ChA4bSjlVYp5nXNcHoMayCmRS42CLjglM7Gtyul9pVlWQWyLs6pY/cZZlhiyIc2n4mIkqo++anYFQh5H8FLpompPB60iqNSV4SwTQtXmzWUJo9bZ4sUhXR3yZfnBGlCINSHMwI1KI6ucdy5mKyreUsj9RGYypVZ7kbJW0iVM9X2aImyk/gwVM8TYjaAszdK1MwiMR+/fxk9/5j6udgZ/5p8B/vQfXsGRw2HUINJbbDqHn/r6Hm/tGfNuwC9/+Sn6lYF1hHe+APgRaFf4v4ANGWNgqPiTDgsdhHrv/9G2MZ/+4MsbkRxQuv6jR1s8fLbHZx57kLV45UyCh7OEy73HR281+NHfcBsv3XHYz4z9IJvBGD5WqqOi2KMX9Rh10USUzZEaHy0G54uDPM4ekHuPcZgmfdeAsuEBomJmwVUmUmr7pPDF2TODys5morDnQifoYrdWFgdzMfOJWVLMYQwXVQnrUJOrhRt1rcqNnZ5nEIABGWhriaoKLw53l6J7kVSXpFiYkuKsyDZw5lFEcIORXiwZqRR84KxLRpB5FfJBHOco5XTKWHFjlH68HJLzxKp3lDWvrM1KvsawmlzJAWwcwbgI3cxIIgkUQVosVEu/xPfn9TtDqIOHGGnpcBhC0homSn4Pqw2wXsscZLsTNFZEOzVNViiY1FiocXKfo7bkDEnwdVp9EAT2HFhk9zlkhnbbUs2annNFEYmU3nOaS0U59cjVkYM+pHUV1QnK/k8WIM1K16wDXFIkXBz2l2k8R5VilY4J+plUzAwpJU5FQCqHy0SpiqrbxHktcq0ApntcW73LjobJ4njLuQXHAX6FAV9WJHFxlxpaVCetVDesQXU3pJRuz915Ls6LolEeQTjxv4usOp0wVJ6LVM31jtl+pDpsjK6bcdh3+MVfvY8vvtniv/m7Av7MT3ToncV+Mli3BndWFk1j8Fe/scMBBo8fXuMb797g7t0Guwvg0RuMdoVz5/h/3DgWkIv+MTIglj9MAZMP/8dX769x+7zFOHh0jcXzqwOePt3hbz2acTETPnjLoW8EaXWxD/joLYff/tEz3L3TYgyEYYxYfG0/lNGzaLqnPuciFPBijsGLpiAtXsxyCXEO0nXpR2VHVH/WH+l8JY0bqTqKfgK4Ht6W66aAg7HCUqMoXvS+qLqtXJbjVPdPde8E5PYNTqx1Q5EsR2n4y0CaSRitGuK3es6VRJQCQdGKIz2tQ3HAJmvQyBIv2gbMIS38oP/SRC0fRDkXqXxEfiT7gDCyXIq1EsGmSQ5cGbyzQlaz/pWxEjisViVZWqOo1ooZFGvPJA6BGQZBkWHBG62aJGCNU9CqQw92rWaER0Q4jOoJ0opR02Yjs5qbGyERihOdtKzitQJidAYmdL0R6fRoa2yypM0wCI8BCrPmgNRq7dRnJArnGZulyY2RPRV8fNYqpGipeEeKZku6V6QyI4RcAlDSK4sabuwZVBzcfpZ15GyZpElgsy7ojE6fM5kqEYrnMTOla+AC9CBrhfLRmnTeOOm7pf3LRSZYBaF6LkAl5jJ8q4k4n5iOU9qDVMIeT5wnvKhGYsRJbfN0wJv0WZy6A1x+9AKxVb4a1uqE6xEvH13xCRVtRtvOCMHgi9+4h5//Qo/f9/2MP/tP9GiNxX4krFqDV84s9jPjr711ABnCV998ju1hxtm5xeO3xGmzW+N/xoFvl2KB6WwyRJh9+Gf7zr322oONVg+EcQ7YXu7xhScjvnwZ8IFbDivFQD/beXzktsGPfGKNe3dWCCBljJYl12L4FCGV1VMvAwWjfqp8Qj+ZqvYXLRqEBK6AFFz1w8q5FqXshxaD1tgWQtFHzvKstJBwzoZEHKGvJr9q0pM6Zb8hD/ByBUF1ea9wSyoE3sqeeYU+Ij7OoMqYaygfGMhzFyreQ9wetpSQVjRNAqZQbuelqkuzpuCRBBHJ1PMhMYiSzDvdrzLBjbZ7/KxWsKpnZJ1RaG/mZaT5TXEvXEkfx2oqZq2a0QdK1U1ECvkgPIxxYkxJdDHORVQrSpn106TiiQ4aPOREvLkRd8ao+eVcFFhkJbGJk2LTSvtsHrXlQtkLZXdQU7BWlQZmJH93MsLTAVS4UCHUYoNMSSDQJ9SZgW3UitfHOULUi4rdBOEiwHCCyacOPrHqWRmtODTTV0g9GxUCjfMxXRMmiiOGoOg6Lg72vDdDyIMdZqN7jqs+GafEKbdk40ySFqcCgwubBco8oEJWnpZy9sWM5EVw3TIlTUiv6jSiWi4H0s5NbVGiSja+nFXG+Q1zXR/x4uTP9Ka625IDb94LtNCrS+i2onfXtgJc+up7d/ALX1vhx7+b8af/YA9rHObZYNUavH6rwTeej/jV5x48Tvj8GxfiVT8SHr6hcHGm/00EuHhh44s+lSEgeP5XX7qzwq11K6qelnB9PeC9iwG/+mzGrd7iVi8KupeHgPs94Uc+3uO1l9cgazFOnNYCHaXap/pUfAK9dPyDKZsgOjEEywujRHTl4VIm7pQzkpQ9LFOAlDUtDAFS1s+qRFt8lqkjUOAMv0SCF2eQe2CkABM3FRdQXnCpoJorCoGz5DZc0FatKfgmETKcZMkrDkzuHcthHrKSbsFVibEvuQRGtIo5zrhKY676S3I1FtsiUdk1fqchk/0zZpFfiWqkVgfiZMTSNA5fEzAiBvlY0fiMTIsD8aAcklmlr/2ktroTYxiD/DvNmq1FYi+LIyBhjPppioJar4HNufzMdsvY7ZQ7o8TQ6B/u1H9+vw8ibNgpKGBibbEhqbYeDqxOhGq8xXmA2zRCBpxnCYjWyjMMXAv3sQaJCAkueTyk6tE5SMh1kqKaytYMqT1rCNlzIxmOQWwWkrKyvltnMrAi7jZDFN2Oj7a6iUAaPSFLT5WkUKLVMRkqTlIu0E+UqvZy+9aBYoHOrNgcC/j+ckTNx/4pmUsSW7Nc35opS/M4y83GBcRFe/tUwVP2xihrEGKB8aKi7ZLk3k8M50+NdZwRgvYbD2/hb321w0/+FuBP/ld67AeCM0LBOFs7/Nw7A55PwKOH13j/yR63bzV4/h6wuwTaFf5bYca9rD4dlViZf2fTmAevPVhr311kLMb9iM89HvFkz3j1zKG1hN3EIA74Ta84fPCVFVarFuMUTkdTvAiPeyKI8ImHQbRoc2XoWyLuLIxruCxLiBJnIr2cYrB1VMlSIaQXEVmMaiiXyvdQVg6cW1rFsFqfbSb1mQVMEUiBJA+749A9wzRLw5rSVCuAququNIUyxFVWwiXiRhE4EXpbNmyTY5pn7WnXcxuj5EbmLEk+R9lvHfym76wQOUUCoO0Yqyqp08QZ5WMi4koqlxNTLkXrCCFU5i9COpx0AB+DxjwzplFnG8rpCDOliiqxzk1UeiaMk0jBBJXabhrCag1szmRZ7HaE/V5hrXFI7wpoLIkEjnjMU1K+RVK1FY9y8ZYXL3RpM+WDPDDQ99ISm3xWC54mk08zjnIs+bMbF6Xx84bwIVsCJDADE2D0/aqGWjy4fJyXRMRk1KyKsPAShq0VVyhJquXMLsn0ZwhvJHUyRYHMnLhlBGPkjoTUVk49/2U/uyCSlhucK/ONArtDNVQXy85HsX4jmvPFsFrOLaaF38hRA6WEmaf9gePrw/KeypYc4xRXgU505qqAyFHlWOZaX33vNj77TYv/9u8x+Mkf7nFxQ9i0YrGxHwN++fEMEwK++s0rEaqcgctH0cqB/mkE0gRAy+lpCv/CvVs97t/uMMyiYTMMMx5ejXjzesb9tXA4AgPbMeDbzgkff2WFW3dXmHzI2P4Tw3BexH5mPgY9HD+7RZrAJaiqOjAzoosXgTge6pkPEaGxNWAjEwvTJijL5crmLh+0HDgxd9PvozBTYvWVAMnwTu+BlHxHlFmpBOWILJZCQvSFRXsqsqjTMD62K/KxTUZ6/uWmM66MFdra4aIvq3OfgGyrmvgSBlUQjR4OaYZSzFWyhHX0hqB0jbFlaqJVsLK9ieVwlYOYk8VrBaEMmQPhg9Ghtxy+8xQwe52ljMK1mGaBF3ufWeVEKh+iWldRbmWaZJ7hZ7lJq3bJqxWw3sjhu9sBu73CeylCh/WaFR48TSKr7qy0vSSQ5blGtA/Y7aT6ENn2aMgUAReitRTJgRGW632uCn3gAl0YSX5UZPuUiH3xP41KiMR2IhGl9R3bU1lNwCRUoFwTp+tI5k8Q3kkU8Uxrv2iPRsY7B66qYKT2KifIaqpQtVJL/64eeJ7IOReHKhW6abFa4fo8OvqMBU6Hyuspsn+qwECUkr7qDONjYnb+ixLii2OYGFciGfk7SkvFmIycQrKeCrLFv2qtZJhfePs2Hl8T/nu/v8G3v95gOwB9Y3B34/Cl5yMej8DVswMePztgc25x/RgYdwzb4E/MM4E9wUhfne8w+CdevrdC01jB9DODvMfnHw14ug+4t7EwRLgaA84p4ON3Grz86gbOGEw+HHemFoPsIy/TFzcgi/5fBaU++viqx6oVSSpjS4yvOR6YpVIwoiUS/4QKN77i5yPHxBQZfTVjMAXBkBObOz2HYtBduvJVbnoaTQPngb2p3OVo4cAYiYxUqdNGnkZVy0Zv7nRYRMYzpwFsnB/FjSsZdp7/GEMLJEyUuMgQYRQoFw6kfhj5wEoCh8lnQ9pEviCtIZpCVUN+To6J86yHvbak5kmgsRH+OwfCzAv3QLMg92mFxkpaHCdgHLMpmHVA18m8Y7OW57bfEbZ7CRBgyeac+ntHb5DAhMNerrnt5F2JX4cCA0hgtvtB7rnvkUylWOdZzDL7aBqI+B+EIxO9TGL1GiuD+EydkxZZYCok8nP1A0QfGEbJv4xw2OQ5PivRrGCbew3uzLmFxoFSyzNK78RmcmyvkCYgAZk0mGZlmu0bynBWVqKfpQqRW7XFueBcUSlHsjg7qo4CL9JYzhNawun0ncvz4e9Js/z0gJ6xULkoRUGLpJSKwRFTPZ8qr3MZc5bDfDopi1JDjFvnMY4NfvXrZ3j9DuOf+W2dVsYGtzqDYQK+8HyGH2d84+0bdL3FtAO2zwHb4sPzjN88TXomcOD/ct9ZPLjbieigJfjJ4+n1jDeez9i0Fs4QRs+Y54BXGsZrL69x+6zFMPg8fViiqooMorJFpXIgVrSAils2xxCDuAwrHPhR6hAW2jMLlFaSfGCuAl0pHVD2HJP0xwsyCqITaAguPdA5zURsWU0yVxl5qXvEgQs/bskQY1+6rEoDsi7PEgZPCw2wUPWJi7YgZYSL0dZG4IK1rzyWDDLj7KymgcDPGgB0WL/ALCREToZ1avvKar99zkPjyEY3pYe1HpSC0hI12dnL94oTnVRSEeUj6qoCw42cjCiOGJ0JA+ucQ6uOaWId9gNNS1j1hM1GiIIgYLsDdrsAP8sbi+RE5+pq6XCQz2taA9eIMKj3MnwmK7BgZmC7i4ZnEYaLdPAbAlY9J0KfNSLaN42cCXisbpeQZC9CiI0Ga1IYtXiBUJpXWbfw6S7IhEZ5IRluy2mmZ7Xdx5rJBy+fHyueaCONhWpAllpALTtSeFIzQppphRBy6xfHvuxctFp5mVJyDb4hnIYs8cIbnRcbuZ5fHnPElsdOhocX8iRUDr3L+6Wj+QqIj1WxuIQEl0kzHQGLmPk0oIzoVE6f/n/XetzcrPDFt1v82HcY/PDHOtyMQOsMbq0tvvJ8xqMD4+rygO1+QtMa7C6i/w5+Yp4AQ0SYfPjRW+sW5+sG0yzVREPAV54MeO9mxoONTDqvRsaGPV4/d3jpwUaF0+osl4/6UUXk/JaRckHCXHhu19ozhRAaH1cnEYOd5D6KPj4YRzOVKlsozbIrJi0nR7RFJykvkHhYRx57iLMSPRiyQpwctmYRnDRgRIl5Q7mXnVoAVDN0ucyiOMPMyv5q9m0mbQ1kkmMJoyQN9+KCF1LGzIW2V1XlRa0tzogxSym65aomMqGLmVHkDkyTyI8nroepgG6JcT97rVTUk2Ka1RpWeSExOEQ2uiGqPOsBgciKVwswjSIzH+cOVvkbbSvaVpuNVCActG21C4mdbS2rMnPRbrPi9jgMqtLcSMtsGuvFbh2wP8hAf6WmXXNJco3cD5UKFy6IPgP1tTAkVUDwKGRyAOdMVklGdsBMQ1QVs0zIRJ1XhMIE3PuM7DOFR4ZUWDnyxNZvtoDmRTVdDqijLfFC4LLUt6q5wgkAIu1U1EN0xsnWTCyZcuJIR3BbrqYltJg8Ux2p+ARclmpZIz6JwuX8/7Wa4AXcn6rWfcKHFQP46jDMrS0sz5saOcBcSnmlrHhBAs6lDxHj4bM1vDf4Xd/eYNMJwvZ2Z3B9CPjmTcA8zHh2cUC/Mhi3wLQHyPI/ImKgBMyef+utswZ955RNypi9x9sXEwDpFU+eEeaAOybgpXtrnG9ajLPPhVXZ6qGCVb5o0cQDj1PvlY+n7pyVaVFIdUQUUkKXF4swDp7jZ1PR36ICvUULJZNjsIjCLMs+PudqqkRGcFKiQ7bArM/x4p+LYWGE4pW3TlnmJaCUOEEaZOd2INfwPV3UIQnUZeJeyfMAF4ZKxaAzLTrKBC7RY4qVSla5lSBW60vF6inyG1LVGbJScdC5Cmtv3jjprUePckOkJMF8ELCabM2BdJYhhyizSQHHRIKhIreMLeDOiH7WWr3MBuNIqeIIeug4y2ga8W1YrYD1mrV6IGy3JAe+V5izBiunqCtou8t7CTRgkVo3RgUTVYCwnAXs9iKa2LgoF1MKCYpHh7PavlKezDzlPruxlNSJ8yxGZfLT+1FBxCmiAikNwXMiwqkaiaoEs6cqyxejs0wQjdcQq1LrIs+XADba+sq991AkMBHMIqZVGtiVqMiKHmRFW5I9Lh5owSSPM6NEpitJhVy0mbluG6UAU0qcVFDZulqvFO74REuLudj0Bby+TFoNVVVGmadSca0o2uCppY0F1YGqiXwFJqqkjRh12yIhUnP11jiPw9Dg648cfujjFr/pIy1uDmKT0bQGb98EXB9mPLk4iE/9yBj3gLX4LcHjY4aB7zeGPnn7vE2b3RBwuQ94dDPjvJW+59XI2FDA62cWd++sEzIi+y/QcSuHFlGZj/VcTvYOC3x4OSxPc4KIkmDO/c7EtaB8SDNXSp1VWQo6mjxJ24nqe0ktt7rlwwVDNo6+A+rfSbOSUPBEiBNhi6rgWOO64wFoEi6aqzKWiCskSS2jw6klFQMAVy05VAsujYpUa4oKTSiiTFqjpLlD+eeZjjzTUzecMsQ4PWPk4Xv0OycSFJNxyJI3kSnuVVjRA/Msa9GqS6CJTOk4X4oZs8415llRWRNh8jJoD0FnEVYQUq2jVHWsV4R+Ja2vaRJvmsO+0OMyEaYrgQQIUkmpIdnso96VVlY+9ojlDbSNoLcEeWWyrD1TyuCdBfpVlJLPc6LJU9V6FO/xfIBmj/t6/hGK9ywkTK3cBN6QUIZkYrBQAUKTRQIjIjDqm+VoIJ4hHEUoUWtUUVorOd1Ooq6U1xJF2XZKeBkdDkdSKxcgkxLyWyjhIu9TPu7l1PSCYjBb7qMamfUCdQwqWuV0GnUVE00+YqEXa7vYm3kmW8PDuNImX5QZ5RyyVCXmY1Rp3RGjpQAIiBiPrlpYsvihj7VonIEzBrc7gyc7j6sRuLkeMYwB1hiMe33/gX6bCYG/r28tbp81MgwnRmOAp1uPy33AuhNS0TAHrBDw4HaPO7c6jGNYtJciiaZKqzMTg006/LKuPleDvBJGegqdVUo0cymswwL3q1BgRfnHvJhl0IvhxFUmkM49tcA8ViyoOChUINHKC+EFZl2Gj1raBjohUZCruCj+l0vi3O6IkNG8zHhR9iLxT6pqP5Qth8y4z7Mplb6ItUQiK+bKIlU56qCWUGFUoxyMzUPa2E6zhlU+ngrWflQBjrBRVcL1DK8OetFpDia34OJc33v9+Zn0jwzGJ/2MyLcxRnyzm1YqgL4jrDeE1Zpl6A3C4UDY7VTMMWR9IZl5SNvKGAYp6ukwEIZB/l5aT+LeF3kPIn8ibbzdNqhabtTgyhBaQK5Lqp9sKMWBxTuea9Jm0r4yebbCxVA5clziQWldAa5YdN0jdHj2sToV4llQ1eZcaWTdLTHfysAP5lpJm/X+jeEKakwV0kkrZzaiJ8VlO5kq352itVG0sPmICk4LTbyqzVQQUEmTQDrCZvGRCgYvkbFUzhyoDmSo9x6okGOJbSTO+jEhygrXfbYIRyjFu1JSnCD/CxmXypNkaR5UrIUSaeos4zA3ePeC8H0fdPjYA4fJA5vW4OLAeH/HYO+xPUxoWsK4E/tnED5iZs8vr3qLzbrBrCzgVWPwjWcjrg4erSUMntGCcdsGnJ116FsrukcnyDxRfwqohQ9BNRPzmHJflIJhqXpWHtzx76MxDedNQ1RUkssh2+Jkp2M4dymTQHZRrbA4n5Uw1RA4Q3zp2L8ktXg45DmKz2s+lJtDYZJkcrupHNAl2QdabCYuJKU5axqlAXyJGCyqkcQhqZishcJpUC0zm3u5KM2nCpBECFQh1qPLYOQTlSCGmMUL+omTcm9k28fnGeJgWVnUQr4LSjJU2XsI90NQWSR/xoBpCkXQUOSTiiK2LaFrBeW0Vm7Hqpe5yewlcGxvGOMQKptba+Qzou0u6bB/HKX6AAF9J621aZQD05k4FJeBeYT/rldIbO6wUFRer+QJTlN2mpy8Qq11/YUIZw6cWP5WTaXKijT4rLdmjfS2g487z5SiL+mQj0P1qNIQVP+msYVGW6yObOQwZaBG5JlQsSeipwUKZemkaEAhe4UjJ3jGZGY6YcnVyO2+DP2tjUGo2B+mhP0T/9ooqnLOU81puJ7XU03mYyzlVYowRFypVqS9pKKkZb+Oj2Y1C4Y6amh76nYwFt2A4/EAFdVjKbgZgsHzncODc4OPv9Ri8uJcGQA83gUchhnX2wlNY+Cn1Hr+tAuBv7ttRFH3MDKs9i2fbuf02nZTwBrApjHYnLVHSIplR4gom8Xkl11iHk5ocFKuLBjxUCwkDSgaCxT0NF7gr4vZQkS0cOnvQVQJM2bYa3FwMqXBPxcHSEJHUR6Eh8UELehiZV4Y8XhxwDImz3C4qLqOYIRcC7Gl9h3lzCsGsNhL5oKAGBE3MSoaUoG+GOBD9kmPA/C6ktGBe5SfZ0rHDRWQaUHtSA8fBbu+2sYU2y25pRVhvUo817lC1q6QGZwOzdV3wtpCFVjRRdGzIgSAI0ObMymQdCgvcwS1JE5/jKrlspIHRfRwmqSaASjzUEgH0I3a/tqoDybBwweZe7hGAsrstTIywpDvWglyu70wyxunA/1QypVLK63v42BceCRAhPImfQTMk7Z3ooeMDsdnL14hrGtz8hntESsbDjWiUDxFqPAAoWpO6ENMbkyVkokKL6r3WyEHuTj8ivlb1omihLwrz+c477Mmz7VPevYx1yq3pdAILyjpBoAvjsxkG5ErnVIuq64uFJZftJWO5jHLTkxUCS5mL4R6HlpB95NBHB+T54+MiPK8xaibZk14LA2uqGoXnrxkzsCj3WhBxPjYSy6ZvHWOcPDAfgw4HHxqPYeZQMDHXAj87Y2zkp1oeTQHiJSJkc0xzIw7TcCtlcP5usU0BzTtaXhbHNIskNnFVGcxLC82Rn2YUt3aKhBfRFTFT6KFeFo5TimUGePQrqzbqcYcV1VfJTGwQHxF20xWe8SEa18MtiUrMFm7nzP5MOYBxCfQ2zrhLduiJnEySux6Zq+XE5l4+FOhymaomFdFO9JABUehdFrUa4zmP7aWiM+vNJoQBUXOEAIHMI4RN/EdEKkBkqrFkqXcjmNOulXRp8S5aL4kfy+WntnkKMrKEMTMyagkh1QqBOOEPOcaQU9FuXdW5vphAqYhK9qCst97VLeVw1J6d06d/HY7IQk2jtC2pMN6ae0aJdc5J0Pvy2sZxJ9vIpeCUqCI66RfyWxmPESjKU7ExmhvKjDrGORK2Xgq+D8yPOcgLcIoiIkFbJ4JSgaTZx980M/I8y7RQ4tAALVgRkAIhFZRb+OElITU/KkUNZKkDUrgDEVzMIjbZtmliFVUoIJdUgJ1eDF34HrflvtKSYpENa+iTHJKYcdj47nTqFEm4EjfPalQld9Zj7HLllnlg3TCTCrUmOCE6jrWqS/mo+n6TsCDUcrC5PdhTcA4G2wPBg82FutW7IJXzuBqDNhNnBC6HJQ/BjozAfyxtjGwVgZqBiL5sJ/kQJjVh7oF43zdYLNy0nrAUkq8RhecorCc0ko6GvKgbJMUzY8lW2YJfD6SqaTCMyDpflSa/rljRcdSOFR/xWLOrVVI3T2lxWoh7dHHTYBC3rz87yVirTyly1ZRspGlqqdXjD1MDT2uUGMREUVJ0pq5bvNxCi51W45PDBhLIiRzEXmpEFG0NTIi6mmBSvHFGq4cJWIiM1vmJQUnQaGrqcVV2J9ao5WCE/mRphEv8dVKPDXaBlkocQL2ezGCOuxDzqKFEpoUwW2Um1d0mHMEDgb7A2GapDXZ9nLgC08jHraykdsGGKeA3S6gbZRRrsEj+PxunZNrjf7vSQ5+zjVdFC1E2arUuYlwd3IbcfacW0DaCkMhMsowokQdsqz/7PPAn4CEDnNWZySeUgURglpRW9K2LBdAiVILrpyzUM2TIKpyNNaABQopsGDBiTpFQk4scS7EW7lobXGNqHqBZEa1FyshEUM1XH7JSSjbamXz6YScE32LM6/se58Qb0qUhJQsMy+SyVrSKSfR5hiyROXMKCaKBjcH4MGZxZ21BTPQOYP9zNhNjHny8HoffgbY464BY+WsZlyB4QzhMHnsRpEzEbkEGd50rUXbmKT5n0ULTz+Eo3OdlvImWTI6eXYspErii2I+IdBYyicffTVjoZdZ9Qk5SRsUbNUKs6GZoaHj0zPCBYmLIXXtcXza/axGWlWtu3joM8OHUKm2RsRJ9JSmOJTmEr5HqTeePBKi7zMXEhOxqrdUDRvFIIpTZRVCPauiQpgxtmcoDUep4sMkVJdeYpyHRMIdF7wR0dUqoZyq7KqlvilE9cKsboVeuCOxTWoUleVa0jmHCBj2iqpqG84sbS/y7Nud6FWNU0jPVaDWuXUV217WBiC22UA4DMA4SDbY9RJcxD0xVy8IwgwHyVwFEIhw0IQsKdNqRtd3opI7++gfz2n+k2ZqStoM0drYaMVlcqUQqwuBO0NNvaSaycqwWeadQbDaioyckYhqC6q1ZRb7PNo4G6OOlmmNhQL5lwvk+F1U8bioWpNJ5BO5RZr1R5d2rzUXhRcwqORts9hf9WFcqoUvMKELEmHikZX1S4KK8wJ9SnUXg+shfuqgVzheKgiHZbyhotvCFUWCwYsO0AmXVsaJ6UzdgakMMRjYDYTz3uLu2mIOMvdjCC9tmjKoRMUUGwcgWO0/B8gvzD5gnFXaufJRNgUBphbpSmZNxAtVsIWmDNd+4aUB5rL3iLKqI64UKk+KZtHiMRXYcCw9qaqhdJlZZKJd6mMa1PAiOhHUqMYBlBILpRJwUEhvkunghd4NcUbTGIBKCVx9tlw6DSal0NLfjOv7Kqs0k0EKXMB5k3WughgiKgtBGvnGHJOWYnUVs1FQLfUjB1ao+DrRkMqHqCNVytwLMsv73P2IB/o8S4vIey6k11XuXYfITqsOpwZVUfmWVA5d+B/Sdgo+u/AlyKkxaWYUTa6MDYnYRgQMB+BwkKDTdgZNK4f6NClayXJ6no0zGAbGYc9YrQyciwEg+5kzywHe62Ddz7nlNoycPNpFJTgknkZAQGMIbSOtujHOPwpl4rhmnJUESljeyXO1IhCCxQNEbjbPzXwAOiufPWvJGI2qnI0+53KwBMow7DQDsblqKTM24mxeRcnPg7KsB6Xi4yjRyueCzKRYgTtkyul9CYTM/5AOajrB3qblADzbF2BBGK70qRZdEy4ETrlKSQtwEdGRNFbZ0qGqDYfFDKP+1GxvwctRKhbGQ0elCtd8BcyBsGoMNq1FgCgQRNUL70MSamUh8bI7Lge5kvqopDgMKt2ZdCOF2NixW1cl9Jp68JUkAdfIDS7nCVRaOqLyA6keYIpAx97GSc6dUaj4ciWaFol1pX5VKA7jlH2bE/yhAp/PAccLvRwuhsyRyDo/BRyvYAhXKrmcS00g+qFT1q7iAuG2kB2JraYIe/WIsiWZPCmHXg56QT+flT5cSlNHebE09Cx8cwJT8pIRRFmu5pKXttdsVX8myoHLXCCoSF+O28IBKYKH9vQjc906I8S8Nsp55B68aEGpNHvK3lEFNRQMe5Nsc7OacWz9jXsRSeQgsNy2U+n3UXv8Bcu76WUl3mwZZIG+i880O/cZHTB3qzxo9wHoVPBymlHJrE9jZpdHSXiZXdb50+xLd0AZnttGVIjz+87aW0RIFr5k9N0i+5JkAmJGyAHiOR8BVDHZqs4FDf6s7PbobphyTCr8MpJ7qATUXPDy8mxftHmz4Rod440E/xUhscVRYQpobO4aZEOr5BSqbUCzREXxCemQogrgYiuf/g+jsqjFwlo7lC2xoqVcnAlF6KjmwXxKTJFPzKDT/DlPmLwqXEdTuDgHXCqNRACRKdETC3LDQj/lqBtX6CkVQ3SuwzoXvZy0IBbaMVVQIZYsuZRfJ67hdIEXQ6tl2UI1Kmuh/7SUROCUIdUiPoZqaGqlvUXH/gNRSh10Wi7lCL0WbzNQIbWSD2QTkVzIhkARuoxSrLFo1QUupSRqq1ATq5sgffGkdBuKAbe+sdQ6QS29wEkShRL/ohRWpMKIJwVbKgfoNVLMFOKUIc4F4iDXZEJdUNtWKB8j6ly5htD10FZVnLGwOv0RdnuD3U5aTrH9U8GjTfR1Z21ZRWvckAMLhL1+GKS96LRNBujwPXD6HA7a9jKE/S7gMACrnhJ02SuDPKHrDLDeyMaf5xwY/CzVWJrPKTItwn+NcjCaJqvixv0y+0helTacKVpbXCNYEtopKgKUJDbvOTlGRmh55KEQxINeZPUpH0VFBWBKKwJawF4pR73aRZoyMqtSpEDdQgj8grOZij2kh3Rh8FTm7WDg2KO0tj4+UjA0RtUWuJZjX9JIarRNZaJIy2+lhaNgqA/rF8rJF1j/+Pnh6DtUI47KltcL9IiplLnhhXQR1WOCLKaMWjuYeeESeKqXd9yaAdUEG/CpIToVZRWi7kUlKIaiZ58YnwnOV881GEt83PE8hhdoMDohxkUFPI449/RDARWkInOjSiBSM6dINkwM3FPQjcK4J7XUQiUrEglipBlcDq5czW+Od2aNSSdT5ALFYLtGA3KFmiH9pViB2hJ5RgWpMBG5ck7GVLP444wmEd7iAB1GiIcoockAe6Mq0FqVxGF7yHLs0JaIyJ4I+qnvgLblJKfOCns97FXYcBBZ9xD9ISJCUOGvUfNJWmCAa9TDW6GkBsAwMoYhwAcJMm0nds7zKHyTiIaKyUPXinXtdge0TuYxOQhSbo0yoW0ZXadVg2d1NBQPEKgroLUqculzMhB9SGKQpZR4qVqw7hdrJODBF8ulbPHoYgy1hacgX5X9bm3emvF9WktwRgEPVeuXF7pSpUaWSS3WOpEqZnmhsILmLB2SOhwlEpJPHaxctLu40pcqRQuX3IparuT4bOUConsUZHBi1rCQh1jON0Ix/6hbSfkc5QXKqD4ii/lRBFYsZb0oz/ZKu91KTBWVB1YNh0aBpqWjmJW6BIsB0jHB7jSIbZntn/IQrAs7UA21LYlJR+AIqtnWJZmybqOhMpkvwyNH/aywYJYu9OL5GE6WBn+lFzqigVLB5i4jkkFNKKVaGidnU1xnIFxUI0u7zeSku3gxVDz72i/r+GWX2vfmmBNVS+MXQ/SyF7xk91OR7RFF+XoulHs5OR2iQFsxc8rA49yFi+qNtU9vtFwPPnpayMlp9WBvGjFcaroIUZWM+XAA9nvCYVChxFCK0JkEHTWJFS8wYddEH3MkpzxmwjAQxkECmDFCRLQ2e3zIYZ4rg7aR57LbyfWs1rklGDiDA2Ibc7WiZJ9LJFVVCCLbUv7Hz0jaUjHpcS1qrSVGUiVOa1L9VbgiVQihNRI7o2BiPKRjchNC9glZtulT5Vh4mNS6iFy0qJDXXiG6aAqhzVQto7RophOWGce9o1LbClWMNNW8E0uNKzo6wvI0tCImngBUVa0kOhZfPXmeHAcUKsxn+VuRG1/wN0SLfUmLjlB5k1XysPR45xMMyBpiQGWLTQOTO4p64UUGglwGzEKvfhHJ45C3ughTMIqW8DeulG1NZK1WL4sXLywr/yUuRXpyoVLOl1/N3gMlRCKW3AnOyoX0B1FRcmb+Q/b5KNzXinIxzovKAXtuK2WeAVHt0Zw2DZmiRZi5HSGV2yFxAeKKKZ0M0yIqxNu4NA/iJcSvYKxzaYqFysI2e8fziWKVFlXVibVPpUcJZVa6iT17JGJhlG7xQThJwUt1Z61Y4LpGsvamocqpbzgIUsQnGDBXhyJRiZOXQOQaTu6HKA5HDjLvGCf5fjJA2+og3DPGkdVjXNpT8yQttKYRxvlux+haCXTB50w7t08IrmWs+sx5iaCCYeKCVS6bcp6zvpUhQdEJIbHsjRhl4Bef18QZEyfftLR+tQKMBl0J1WYpSbOLXD2BOeRRsFYgIVo7x+TILGeUBfmOC3mSenZf8Yuo4HHEg5qS6gSqNhkv4La0ZI0XHQIqM7nkUnqaqR3SR4QqINUoe+k/Ep8+2CvP82rIWyfljFOVDBYCKlTJw5eMdC4tq6lOVGlBPFwc1IsOE6UEL/rVV8E5VfCoPNhNpVxc+ClU5Zu+/FAcPmYp5U4na76jOUg1y1jSa7hkGJTgCSrgeVT1HbmAtyEtuLpdRWUTqtB9KhFTp82FF7DgghUOKp0AuSiR+dhDgEsSVYGCSSV67Dea/KJiiDNUjH1Ku81yQL0gSxazH0MF/JBp0QJcgtrq9iVRLTVfQjTJxLlFEXEKbxJDdfYYDaQ4mGzXazMaxAfO/uma8XrP6fBNPulO2NptGw2QGNPAOOyRWODBh8LEi3Lw0iGuMSRaWA0nYy1E2LQRvoP4esj3E0lgcA3r0JwrZv08SxtMyISMm61UZKuVSZ1GH/K8KDasN5vIIFe59UYe4TwVrQLDyTXSe+WZqIKwMVIFJYIpGPNYn2iN+pVUnCOlMMUDOSy8aQicApNzcQmbNCuMRlJl9ZzAikXCUVrZRq5PpSudeGx5WM0qf5M5RqeG1SeAuUt0ZmkZy5ncm8+JhefPshVFx9MRwikxVj5SlQcvWmGGXlxFFKVJeeockaMXatlUOCwefy4fzTZoMZqgJVK2aLnHhKaccScAT2Hgx0HeuQnRX1q/tHOK7kAp00FijhMCCKfnGy96wXmCXmLB+SjO8qJtxoXaL1PNxkyY0SMf4np+Uw+uKRHlSgVmlMQ8qofHDCwtpqqgYqhemKWUO50q+wteSsThl8VsPGwoOrUxTmYplfImFWz+ZbpUzZ9KYqLAdUv9pOo+CoRcGVfijyWpCVW3pWR9qoexyf/bFHto1tafNdJgCMnHXaXe4yX4aJGqsFKFjXadIKCiVtI4Guz2Il7oQ0jruER9GUV6iRgjJyFFkU+ham7kPeFwkAojvoemle9k1qCihbS1+YDrellaN9uAaWSsV6RWtXrfM2WNMxbm+nqFRCgUWXqCn3VOUpw90VEw8jSs2tIetWSCWufqJopw5lIAM21HheKCRC6GuVaBFstgUkfMjBCMqGxrORmhRXRWGrrG/21qMQdUSC39e8NJMRjJ7rnuFwWO0NjCW2MhY46S2Y1S6ZYz0hO1xlSE06akiBZmTzWmrDqQeWmTSnjhqPsIjUQZ9EuLRtIxee50iMhNED76el4ExkTtJKrUuRciHKqJZrAbgf0U1EAsHynOmKxowIwwExkimsY5JPMfgLFpxWA9wgW9ro79YcYwhDRUO7ryxUPnksRXaCkTXtwiQ8G8hvp6VxSPo2bhizWMaanLybUSV5JvP+KVFKTDCEFNkFlKAzDGwtCJ8kYs/QgoSTwU4ylaHPilYxkLHj4PJAtoboTVRnE9Woo8cFW+MnPetMm3oQzWtJiHmNTuSgkIcc0bKd5lRK+ZyggqJJ5L4uOYsp8XhfS07RckYGTb38g2j+0HA6s9/7aN2W/AOEqlIIq7Ic1WEoonqfwakInsdK06DJInfRzmTwP083J7qmnlD1gQVyEqDyvfwXuWasgCw4Gx3wskt+lUZoUFBBAVd2ObZbWSa5gmTmZPRCy2ukrijC3EST3afWBlqItkfAgCpY1j6WmmSqCziYmgz6s+dhc45PafnwtIr5FDNQI5Ek+HIwckW/6KYCNVcxkULdMIDokOnRzbrSprTYssuVQ1KLlhVO6RIkCcEi+sEFYFNaG0MuAXqWQsBoqZ/0EnyqDS4bS2qGXKyEVaJGR0VMEcA8hqQ6Fa5qQcu9Y0QJyeJRekQ2KcYKPniswahiWL5zceV/sJjTUqaQRYMJrGqiW2vN95Zm+I8MY4eoEi6mbeNMCmJcxabQQmzES42U+42k5onD2JLTuhXJ/KU1Qak3XUXSiQn5BXPtlSr1tFXAxyFoP1hQFkIapW6GtxkVFT0VJjQokeXoLGMqJh0Xulmokb5x5gZbAvIJWl6q6oDTFOved4jZVo2nFVXQ/wyvgdytK9nLXU74oW2kJps5v8biIh7shLulRo1s+LooYcikBBXBtaMScyY9S6ykxqYZRbtbudvQy4o+quOPEV68nkllts+VhXOxRGtr+o38qwfJ5zm6htpPoAsyrs5iTLkvBKnJHqxHvC9bVU2atVdKTMPu4ZAURwLmDVq6YQI5lG+YCkiB1NoiIkNxouJQdEI0P60kxpnopMUuckxmbEIpeglZgFh2g4VShOcZyhCNKrzMA5lLpkSAlKankWw3MDqnZ89CApQSk5Ryp5HZyut5RHqS2w8UJrBiqGxKCl3NBxZ+CkKuKpQoJf+FdHhGCg9tqJLY+j2FEgxmpiMtezzcWs+igMFhSJo1uIdtkLo8Wq2tL9Ywh4/3LC9eDRWHHL7Cyhs4SmM1n0lAnzxBfGGnw1+jZDM4/eBawaymqpBFxNjO3B42Y3wVpzDBcqDzE+2cRaaOIfl1DlsLbWQVD0SUpJePFd9EI43SlAAFWYY1SLvh7+v2A9JcRQMbijxQvWxRKYj5Ae1XvmOlTW3uUF0GCZ/RhUXslctPdKG984Q4kBKkpFmOVi4lzNhEULq7TCTAlaGlSHLPUQqvBcQQNNYfZU3p/3lIT4olhxCJT8JYy2NNpG/kR1hOEgB7gvtZKiIZbOBASBRGgcK7djMdc0QpqaRiPBQ+cwpEHBtbIEpwkJrgsl1HovFULXSzTabgOmiVUavpQ4z62rmJisVhIQZ20dRaXhGLwoVXVZjTh+H0F81CNT2xRt3NjqYoiihLMxSBQ2r1GmRgEM0T45V4XFEN7K3ufkdx6lTZCUmCvdpQVuRgQ7Sb9fq8ETpOCK3hFQ2DZTIqqCqKokeNnHLy01qm4FL40lit8JCyQnHcFPqTrcl5GrSFjLRgYvjenq1PgYA7zsoNQtYz5JVcwE4GV/m05P9BftuWWPn1XvjPHkesQ4yz0OM+NWSzhrDZrG5gDOhHnGlbHGfPYwBgyjl4EeEzoH3N0YXaBAY4CbGRg84+r6kO0WS6ABvUAPl6hify9vBkeszkUULVBR1QItORp0qgQth/zlwLiE/C4WwgmI6wsnPXENJP+OQuiQC/anRkdDJQKJa7ViRrXBuURA8NK7sfa8rkYXXEiQLMXTuGDAQ10RuXBNodxLTjpbXCDdIlpNDzgy9TvONqqZGVxeYPQ5CSFoW6loA0b1X5N72tFamSzQqDiidZJIDDrgnn3QaqxoS+qswxjovEPaLabsx3MUBwTGQXgeXhnqpFDdptG21SQExFg9CCdD/rStAAEOe8Z2y2g7g66npEsWmFIAiGuvaQTaG/ktgAgdBlbZdmVkG1IL30kepp+VEW5UPDHk6gIk158CCEv1EWVVQqjVmwNnVFrw0QOkYGpzRHuR2vBmzSgf1HtemelUWAWYsl0dh/EhkwOjckH8PSpo3SkgcbZ+Traw4MpnvKqIj7JpqtFLvDxAqeQD1GioZUclnl1L0t8pk8AjmnVebAnMEVGIoayuwgnWYrmnl639Bam6nKcYOtHC41p/j+pAwoV7KBFwvfd4eD2m83wOjN4S1p3BqncyAzfAPAdMs3/XWGve2+5nXN2MaBuDORh4D3zyZYezXoJIZwmXY8DlTLi5HrDdz3CuxqnHKT9Xb6KAUSRJZaqIiHmwSxVCIN/7YiJNBREm+ZTzkeRBsm40VDc+uSQd5jlBKKQFYqZIC2SF0d5VJPJUmVfFfi8H5XxEac0eyJzRKmkAWQcXWuLhcboMPdXGZT5WdCQyOZhRzmLIoEZflWX04mOMUWOjKKpHXGkNGaqlWgzVcy2UveEIYS34B9FfJBpNNY0EAiLAT0YkzhX4YSgSD2MJLu2dplEZeJOzuFAguf0sM4tpEqRVhKZ2rZHgAfHdmKb8kqMQpPeZDzKNAdc38j3rPh/KsSLgwCrHI5+5Wouwo5+pcOwT5JVIjXCqoKK+lggwKmPe5grHFrYG81RXOrZR9V5fZ6+0AAZlAI28KKMtxKBmYmSzkB+ryKexotcVOCoHmIxMXKCw4h6PcPk0U+PMC8qJcs3N4KNGdjGzKlqlZSCqW1ecIdxxCH8iLWRwTTwszZm4AMtg2aUo5j1cI9BKzSvGQpeq1P6qvNoXfbKlDfeiCqKifVMhW3k5D66lm3CsaKKCnMCjiwGPbiY0Fkn2Z+OATe9wtm4wzyp9MzGmKfxtQ4QvTXPAxdUoqqJssJuBjz4wuH/mMMzirDZ64OkEXG9HvPdki17LmRfNP5Ya+WU//ri3jtppj45cPYr+YNkzPJZ35oV21HGKgpNZS+KTFHpTqVyjpZZ/1rwqZySJSl4VVllPKVe/dRrDpRNglbgv1AmrQTgdVWkl5DzBU6k05orEv0J2pfy7XNlXVWaph1Nj5xbznWVwK4Z/VPTho9cG68wtFBmiD7UBlVX7V2tkQQ9jPphjy43KIGJU+8lxjQIqHuE8AcMgw2kf0V8mQnXlZ6eRMc25ZZJQZHPmezAD260wv1crSq6AMVjFwbkpILXrFSVJeiakRGwuda90g0jwkoBldezYOKT5U2lNOk+5TQgSlJaxnGYsHqXOk5AmWSVMUumh+8574WM5y+kgT1LwqhScqhc+secrv3E94ArTNlqcDYFroqJddCBqZCMt2r5U8SqSo8eCHMwn4b90zMEgg6ouKTXyTvSzX8zhKBPrk0OahTsiFYn0iwmEL6Qa8rK7Riftt09MQATjYg2mYcY3nuxxcQjorMHgGWct4ZU10PUOm94ieOkUqOvnGwbg/8wQ3r/cTqK2CIPdZPDqOfDBuxbDJAPQs5bw3o7x7BDw8MkWcwgVQzW3MspoaSq8aTwPS//z0hMgd5a4TpyluY6wxHcxnxjD89HBWqoHczV14oo1m8p45gX+sMxwMsOTkA1xKlR4UhYMmdVdTfBK5w6u7XqLUjVtwAKSmgIAOMukV5LVpiD+FKxTyr4PcVxqTlGXqn3HlUw71ctuYblJVSsyylKkAFQQNok4rYNQkh8jkSlk/4u2US4DSYtnnkqoZkSiZVJo06oYYmH8Wb7zaQLGKetxxcqjbdV/HJJdzRNXMM84o7A6HwGJNtZ+L4TBtimDssBpeTEFXK1V58pTCkrWKpHPl5wJkU3x2lqaPZKgYdtiwbdRL/OCo+usaHslHSQUnJLi98DRN73kWel8T+XsJViFKmkyBQw+FBUGEZ2wYeUTSBCqYPJpzQSuUehcV6y8zK4XLn7lacqn8Z0LbFLdt0jugKhRiPzCyXquspZDc+ZvzY2jpVTJwvDpCFq1EJfk8g4KqBed8BNhVLISNahIW8ezZ1xcDfjGxYBR38PNGHC7A+6vDM7Pe7jGqiovcBg8Zh/+tgHDN4396YurEdvdLN7Ns8NZD3zyFZu8ndfO4OnB4+FIuL7a4+3HW6xXbgGL07KTFg9iyVY/wdkoF1oy0CnalYZiFk+VlP2x4iUlJFNNMOJK9LBmd+bSPwWpxcA/HHmSlLR8PqXInAZ9FFn4C3G4JOBYqQkjW2EW846MrT8mQy3xDPHuOfAxVIVqR7rq96m6pWqIzkfQxVoQshKnK79D+S/RD770cEZJYDMZXho/26hkiUBGBSkVTY5S5mTis1G3QZuDc5RSi5tvmig5/HntQ1tHaBsRUYSS+GKZHgmqUbrEQM2jSFBZ19dyL71CciOM2IeiQtWkqW3EDySaYWUuBSsYoObjTCOSFlgcQLtWKqtpUkviSPyaI2Q4WuGyclQ4BbRcoUcYNKVhORZztNmzBiLdTcFUB5gp1YEqAdGCuKYZzzJgoYTQ08LULA3LKVXBvOhy8KlBsakJjWkPJt4J1/5Ci0ktLT6dXsTjOOH2tFA8OaEIvJQK5oR2JD5FiEwUbxzVDFS21HKfWPagqQf/XNtWIKBSweBCS7BxFvvtiK882uLRIWDTGPjA2E+Mex3hwVmLB/d6eB9gHWEcA3Z7/6ve8y8bMNBY+tmb3YSLqwF9SzjMFjcj4fs/bPD6XWljWQusG4O3dozrKeBr37jAOAZ0jT0R1Wphv+ohnsy8j864erC1iNIVYiLUAX456uCFbzudQEovceN1UcM1cgG0ADZQBS2kWLIXw+WyY5Xk3ikU0L4SXsrHwTV+XyhDBNWItcVzN4VkR/KJVyMjUxAnqTz0kdsjKO0/6URlXagIV0ZBUVQSNbIu2qNGHw9QtlxN6DH1n4gJgnPRDY8xzwazHpQl8i2KTroGMA0fN1WDlK7zJPa1fs6sbOsIXUswTts5I2OaQqEaIGgmrxWLmEfJ4bbdiuz8Zi3BJzLyIwR5yUXq11A/kOyi2FhBKI1TJrJFAqb4m8t/R05Ibl9x1u0CMI056hORkhLjjC4cuWGKgVeGSie3Px10IxAs1VI2EUFHkRC7PKxNUZmXa6fqudfK2BHNUyaf4KyCvZRHTSCPhe3CKT5fapkuUZLpwCgsGE4gLo+CwqleFTLUdslwo4VIIr1A6YJPoViPosZRg6KmLhSZHJ/4TDq+gPS828ZiGD0ePdniresJo7YQh5nhCHipA27fbnHnVid7A8Du4DFO4acDA0Y301+cQ8C7T3YwYMywuDw4fNdrhN/4wQZXB0ZjDc5bgyeHgLcHwuXzPb74xgXWK7s4YBeAM+ITPcPy4D7WKTgpkbwoJeOLqyXVC/VIphNFaynGeCwCyYuKiBeKwuJHvPB8LjVqFLabBuSFvHIa4JUIKVrwVZgXekm1JTtOSsTT0WyCCqZxnDVQMXpJiH/ORK1Srp2R22YVuZHrYJkPHy5aULn3nwMTp60bCXyxTowZcjQii46KkSwnUhqSkc9zYZoT3Qq11ZLbVhk+GzPucZSBuC969tYR+jaLJk46MDfFANUYmQd41uDh5IC92TJ2B2DVSYVU3rP30eo4H4ttK9wQqRTkvsUFlDHOWTqfFSIc1YOh3tOR+9G20urKnuUSUKcpV4NGbXej7HqECkaVOC6WoA81WifNNRQZRlQf3llGJQMgYsA3R8hUOka8FtlaMj3jLPkewRyZhEp1p4pOHLjLfA+nzhM+CgR01BEJRzIkXLDVWflb1dHEdau3bGJVhT+Vs8UT11H3LLB0F1yKHXLZzyM+gu3SItku+TNU3KNVC4L337/GVx/t8HQGNq0Ap54ePF7qgY/edrj/YA2ntr4+ADfbCcz8lwGGUYnyt7vG/n8fPdvj8lqqkO3UYvaE3/kbHF46s/BBMqZNQ/jihcd1IHz1q8/w9sMdzs+awkiJU0shwceOeXalIdiJofupB4IEcTz6S3M8UcrcDjqWUVjWnYyTrLs4pE0CZlyLr5VyBkdeIyd4EEICjJoSJqmdlg5uqIIOcjZfWOUya15ZDsaKXiwtSUz6L42hYgPkjRYCKnRLibiOHiSl8GWSmEce0qbG4bLKRC3xX82TorWw9vcF958lxFunM4Og7PBwfC/GKrucloRLmS1Ms7alfA4+VmcryQtcZx6U4WIJrjt7TsgshiC3rrciu96vKIkRMrIsSXzyVluQ641816ysbUOExono4zQVMwodZk8qnDhNQQft2Txr9tDhOCWzrVC0E230P6cs7Km0ISAUiCRE2Gw+CYmjJwsn+ZdopUxFgCKn8vIBC4WPom1tQgrkR9V7pRfHRZuU60SNuWoFHvl3MJ/oS9BRawgVOS+3IqrAwnTMFFtYxiYrgEIokiqb7PJcqjXnylE5n5yR8LFr4aLTUVZ2STIm9kiLDJDxa2KHRA2hs3j8ZIevvHmFr+88jCU4AAflBX5oZfDaSyu8+tIawxhgncF2P+NmO10RhZ8iCjDqbYvGmT93vZvw9qMtVi1hmFo83zf49IeB7/9gi8sD0DUicTIExi8+CziMHp/5pYfY7Tw2q0b6tRUEmguhNK6Yn1xBSVEp7ZZD2crDoloqJYTu2I+8rCpK80mumoRcSRxTBT+mIjM7Uc3wMUs1S6XUImRccDDSdCNtntzCMYVMQJJAX8Y7WmR4yM8gMU21aZ6d92o2fjxEQvV8i7Lac1H5ULYCpSV6JR9IQqzkNOSv2rmU4ahxtiH9+VDAOCl5hUdTpejxMU1RYJALCRiGIaMOhChUiylJuE+zZOcJERWhup0ipgKn4CFtK84qxCyziVZtcqVVxLi+CSAC1mtKs4AYmMrBeRwot62IPwaPdF0ihEji7x6yQZgM2IU8aEiH5ybyR3Sg7amCTYuwI6VDvmmyAVSEwQYWj5MMamCRIPE5+ShhvSGSG61a7xayNLH6ic6a4KxkUHKjTaUGvZQNp6pFeiQ9QlG8sVCKSBaVFWmpTpgIlevgqcbWESb9hfBMXgSqE7p9hUI3VTQDzqoPyx5zocRdVTnFdZRcpeMGW9IVqI24SvruEunJXMws5fdWvcPF9YgvfeUpPvtoxKUnnLeyHp/tA15qCb/hXoOXXtlg1Vl4XTzPLkYMU/g3meF9CDCepUQPAf+xc2Z45/EW+2GGawiXhx7MwO/5doMHG4vJE1pLuNdZfP3S4wvXwHAz4j/7u++DCOg7t8Bu106BVIy4j6IoapLgkdc4aDGI5+owTcKLZRbBdNxbPF3aLLBuEY3B4KWzMS1xHZS0Tco2DkKWPKXEVckOYUdCjMXAtyLpLSikif1e9ZwL0cMjxdBi61aD2iw4WOaGOjJIQ86a5Jlx/DH7RWG5ulRgjW82yUQXve/UvuKsPlD+szWxj08py85+3ooiszJUNhVngJPtq6jc5gAeVXiNWu16DTAJmBDifUjAclZIe6yCg9c3jGkG1isDp+2saLGb2mOJk8rq95FFGuMqi+ZT0U8Ehdz8NHGu7LTVBQM0rQ7aY6JB8jPjnAELpHLwJnJ0OINRQJSgvBL4SMUi87yWKVYVas9L+XjzRWUiqtFFcCBKem8RmZgO1EKaJZtDUQWhpcLpMi5k1oopue0h76NK+mcpO17OIk+KSlBBS1xWy8u0k4/UKY7GgFzLphx5ItHxXC4nlHTM0FngounULH8xf+XqKCqfKxdBK2/6de+wH2Z84cuP8Pn39nhjZ3DWivDMfmIMk8fHzi1ef7DGqw/WGCeP1hnc3Mx4djEAjH97VuKqiUgMH8B9Y//Vy5sBbz/a4qwj7KYW7113+M0fJvzYtze4OgCdM2gd4W5n8LceznhjT7h4usVnPvcQjTPoOltrxVccDhzD/EDHbPTFcJiLTiYRfcsHfuT5u4AwMC/1uI6riKPBWYnC42WJytUsoxYwCxUPpHbyq1VES5G1tCxKQi2j0APi3O9figgv55UlMoOO50u86BLHbpUpqqdT/WRwre5LFUt4KRWd5fUzyZAqFddIKIyAEuui54QMwMvEKvJIrK3AJwl55j2Jj4dGQ9ZWV9vJZ8aDPwaPUuKfFMZrDAniykhg2e4DDgdG1xK6SGr0uUs/zzl6xI5q1wlCa54TEl1QYia6LOYkxyh8dpzi8JyTtUKsxuaZYF1IQofsgTAXcupGqhMy0gIqd1FQQcfIJwGHqkLNHBHSayycLkNuc8YBd0BhDpbIgYteNS+Yz5HDwTUkfikdUu3icEImZdEaqsEyfIqMUZl5HIeDJXCFKuOrF+3xcsBT8dTiOWIoAQOWSLMSoFNDilFfw0l+HS3sunFSxouLeiXCrTcrh8Po8StfeIivP9zjS1uL1hn0jjAH4P2bGR85t/iNr/V4+ZUzNE4QWQDh4bM99sP8V3zgt6c5YJoDTGSdSh+V/7RzZv+1ty+xP8xYdQZPDxtcHwx+8vsMPvUBh6sDsGoN1q186X/y1oT3J4NH71/h5z77PpwDNisH5mx1ecT3KVtPXJRjS0b6ovozOIGrpmLo9qLm3+Jw5YVoVyW0tugV0THVB8fSy1wTeVAw6CugRJ2pMC+zlbrcrA5wWg7ka7LVMSY391O58JZYoklO+i2UAIKySjKLoWvB/eBSKXShQkp0rFia1oApe+GxncJoGqhkQhye50w5EiUzZJdTiywEUoOqLBQoToLCj4CKG84zJ8FFGUvJwe1nude2U49zBvZRqqQRCfb4O9HXY5pQJRURqbTe6Lsqqo/YikoBDhkUME2ZXT9PWgUYQuui0KmKUrIEiWnOrWJm8RaJMu/BG0SUBNl8wBkrzypWPxGcYZLvunyX07ZgiG6Hemeu0erHLxBL8R1SLX4eii0YaKH5xFS0vCnDe00eOGe3TKoSuELYJM8fC75XhTpafu0CtcUoXBwXgeRF4xQkekFh/XCqrY3aiAmnCLeoA5Uk33xyOEwnZipHs2Q6jihEhLN1g+1uxi9+9n288d4NvniwmMnidiuqu093Hi0xPv1qh9deOsO92z3GyaNrDJ5fDXj0dA8C/nnmAPbyx0S/ae+BycN3jf0XL65HfOWtS5z1hNE7vHW5xmu3Gf/sf6nBujUYZkLvCLda0Yf/qbcnPA0GTx9e4z/9zHsYp4DbZ21xgNaCY0sIbHa0y7OSU4P1JReBqGx5VTgkHNNeuYKrlhIEVXZdBTSuh80LOO9S3mu5OFlJWjlDosJFbMGXqAJsbosVlh/VWZ44I4kwVlNjKfPq86GWpCWo6C2XgpLZeyXqe1X1MRcZHC1Y9EoEQ/KTiPakJ4JkKUdUJH9RxjwOjAHRgkpmSKQOcUZRV5TJftGXYvYC1U38AkUlNTa3D+Yp6KyDqrU2z/K++5aEVMjANErriohk7mFlzuLVaEpmCYXQorb3+l7IieK1wQgc4GwUYpRrpCojlkBEJvIwJCDEYOZ9Jt3GdTeOJdqNZR5ks/xMnHMdqcAyKYGwIKooB8p7CU7O5rkRivlVlHcPBZ8FxZqsxsyFmnVOEHLLprQ4QMH4J6bKKmE5m8BiDxyhJ6uMtUZrMsKxh0b5KVy0lIrBPb9gHoGTFIB8b6WzeCVcWrLmi//j6mroCMZcaWFVgbM8W2tHV2MNbp+1ePTsgF/4xXfx5sMtvrC38MbgXi/3uR0ZFzuP3/xyh0++usHtO2vMs5DFfQC++f4Ww+D/XWa8Mc+SaMyeYWa1DZ2D9Iy9x/9h1dv3vviNSzx8ssfdM8LzcYW3Lnr88McD/olPN9iNBEMGbUO43RlYAn764YT3ZoPnT7b4G7/wNh5d7HHnrIFzRtnGNUJA/AGOS85k/VpoTVUSVgsSqvRWKfViyzeadHiWnTLKyCJeMKmrYTejcv2iZW7PeS7CCyRNSenL1Q1XM5+ocFrfYGGURfn+Ai/6U0vhNVMMFwsjgtTNpWxTmoiSJQKnwMWnjzcvSL0qz+XyvnFi3KcHDhekwgUxWf6eUtbpnHArOGRdrLgZo7OhMVzNW5iFTTtPrJ4Y6iSoQoyCkmKMk16HLUhZhnR4LDMP47QVNom7YAiEVS/D7/jeIkJn9otZnLbL1mt5F8L7kGt3Su4bJ0Jgk7J2aWlJkDBGqhOj67Ox8r3Cgs/MY+85ER4jwEFEIzU4IFTto4pQqP7xpd4aIQcpawGyQEgDXUGMxRYZl1UDn1aMLf1oUh8+tmGp9D2jujotPGGWgJFaORfZOnvRtaIjVcTCfIlrufUlcrKC40YbXlVOqPHE/AIGiSYMi/YY0fL5YKHfxQvh3mNTuNIXhUtHPLPkpuXkeN1brHqLL71xgc/8nXfxzecHfG5vcIDB/d7CEGHyjHevJnz3/RY/8PoGd+6t0bUG3ge0jcXbD3d4/HyPAPoT+4GxH/MfUw6j4p+2MT8xjB6//KWn4rbWWDzc3cLTrcN/9QeBn/x0g2dboLUWXWNwuzewAH764Ygv7Qi7mxE/93fewWe/8hxta3Fr3SSYaZwt1I5eXKvXnmKe8hLpob4aNcQjB6oCLvxC8UGunQwJVBnPYAkIAGpHxGpVF/1QJStRZWVpqgM7fmcoNMGS8RTl4SFjYSur/yPwAhXC+XCpBotkwCVKTDconWj9lexVWgqxMS9Uf1F/H9UOjtEeN91Xpfuts4nAKfAEFR0UBJZImc+eMM9Zvyu53BkxmUIxfA3KmSgtgUUXKwdFTZASyTJbNctMomkIjWpThQDsdjr36IVwWGZ4BBm0lzDT6HnSd8Ian3x+PzZCkvUaytGpMcA8Fu2IAOWJSECDVhLWRiiuyJxwUUVYhfoSlPEPqjgfIUhQEMveZUDJrVACo7T7yci8SGikJAMT55x1kakGbFE2JXDOrSnn3fUs9BS7gxeuoTjyiyAqZyvlfKAmLlPlU0NLlO0RrSAFVlqo+fLyNKcXK3VjgUatqOtL3tlyToxjjXxeJLsvcECM/+Sswe3zBsMU8Au/+Ai/9Cvv42vPJvzilcFkLF5eW9GXY+CblyM+esvhRz5yhvsP1jjbNBgnj753eH414itvXsJ7/ufniS8OQ8BY/DF9K4Sq9KcjdI5+/mzd/IW3H+7wy196ivMVIcDhzed3MAeLP/67CT/+3Q2e3xD6xqBvDG71BmcN4Rfen/AzjwO2M+OLX3qMv/EL7+D9Z3vc2jRY9a46sUiRUlTNrlgOOaYatFuqapYvmjKklGs1ulxtnHzVdMQyTKV/PMBLfeuFsGOlHVV8UWm+t2TJCi+4ECskOjK4SY6BOkQqIbPxWwNnRd8lprCsuFhV/Sj5d9Oxum+oYYtlW4WSI2PkwxSBp8yGFiAIOuU8yVSw4glziKxjKkAC0X5WJKOD16oponxMVKTNsNOYvXqvSKHCn6FxlKx351lk2W1yPMyJgJ+FO9HY/B6GAdjtZRbTterUh2zhGwIlgynW+2ASG9n1WhBLHDLax5kILRZUWQRSGJJ/nmZpzc1z5qrIzETQLsQqea7rc1IRxFhUOisBJK4dY7JfTZzxWH2P0VY4Vq1U8IECF37nhS1BtHYwJsNMk4q1qQVIQeVcgypVB048HqS5TlrXIc//sv11PWyulBG0OirbqDkxqsVKllUvUwk3L8D32ci8SJqoSBzoBDs+V0SpcbzQ+zs5/2OcmGYszxsumQb1HRGqPc8k6+Zs1aBrLT7/9Uv8pz/7Nr7yxiV+9RL4O88NGmfxysYoMRB46/mI184s/uCnbuPVBxtsNi3mOaBxFuMU8LmvPMf19fS3G0f/O/H+CfLM9Y9r7Au7FH+07+yPf+7rzz606Tt8x8dv4WLf4mtPb+NTrz/H/+AfM5iCw09/acbLt2yasTaG8ea1x5NDwG9+2eEDYYfPXA149bVz/IaP3MHL9zpMk8cw+dqTZanJYxLU4ygKL2ddSznkJbchZ8XHln0lOzTdRKi5GMt20ZK3Ug4h5dynHNBQk/BMhMhGrarjkd2RbEHijZSErdIXvkCnMYej/m9siVHJFDc6E19a6urzDPGZscn2pCVSLWRgQ4l0S8gsXgrSZc+CXF3lKkgk1UUqxDqVKPdRMDKTqGyBmopPNXgJIByrGiMtMKsSJYFl5hAPwMCZ9OZnuf2mkcjPLCq81zuhRa96HUwjy6gwK7GxWBNGZwjrFeBawjhwOmSdETjuHFgqqoLqaaw4IYYgEuzzgORV7hoJlsMQRD49fn8g4X8UXjNWXQqjF4lV2LQx2bExAZtCCXNX1BayP4lR/k1k1EcoNDUkyEIuWrAhIvbqqqCEw9eS27QgGmugKyR1UFSHpeggFbyQpWpCefDWnLMymyuqMqZFayhev0ENCicUE9BjVV6qKwnKk5bCRGwpLEIn7HGT6p/ecwDwYrVfXmjcWUs4X8kieefxFg8fXeLZ0y2eDowvbQ3e3wF3e4t7Gjx8AN54MuKlM4t/+gfv4rW7PWBbzD6IxA4Tvvj153j78Rabtf19ROHk/Mfxt0AYNM78eOvMF/72Fx7j7m2HD766wsOLHl95dBeffO0Z/tQfMPjzf8Xh//Mlj/POYuMIZgx4iQhXQ8Bf/+aED51ZfPf9gPHNCzx7ssX9l9b46AfOcWvd4+zMgozHOPlqgBxlQE6RgqhQ/aOiv3gknFuUqmXrpUYcHXdvk29Jyaw9JaBf/Qyd+H5OGyaq8pb+G6nlU2YwiYxQsFwTpLa0VjnhUVbMMTyjmgllK1w99A1XOkdJHbfUiwg5+FSDwAidKqf6BosAxyr/UPJLuAINICruUpYciVIWLs4gPI6CJJlM3ArKNveqZhsDlDVSfcTse570MLWU5k4R4RUgHuZR38l7kWj3swSDxkUrV0r8Uu8pAwZiUIKgtPpeW2khM8FdI+25aSbVk+JEagSzVh9KbPRA38hz6zrJlAMTWhVWjE6GpUOiWNeyBgtKLa/YxpsVkUUlWTAoIRGUXCA5+mKr+VGYC34SE6zyQ6aRkhshijlU4tMsPWhS55aOYeC8aKEVhmzMpSf6QugjUoLSD5WJ5kJpmrP6QiI60imacbG3ivUa1QMycbe2PjjuKmmLlXICvHQYrfVd6vG5JGaLs4n5iL9iibDqLTYbwjB6fP3tK7z5zjUO+wMuBo93RsI7B6ncP3jbwoHQWIPJB7zxZMS3vdTin/ot9/DKnR4TS6JCROhai89+9Tm+/PYF1r39iWnGI35BoHA+4Fv954t95/6x59fTX/nZX3ofP/5Dr+HBrRUudyt85dE9fPKV5/iXf5Rwt3X4jz7vYQxwqyfcQNi6nWG8de3x/sHj225bfHiccL29wLNHW/SbHq++vMaHP7DC2aqTQ8EGQbSMAbNfROBIDucF2oJPQH6RURpc/CzTIqtgPsoQsg8GncKAFJ4hSB7fXFbu6SA22X3QUMXTANfmRiVxialk1puqv0VHbbRFbIsSH1FTq4BtRRdCQ3q4I2SkEifLoJoxW6HUCz0tLIcmBWqGAKMsR5HPMidsfBforQWr11DQuQYlXayofWVMYXmqPxOJhvEAco16YQRBSAWOsiWcJdC15dU2gtBiSDDa7xmHAeg7Qt/LQeOLlmP0LUfFQpbnIOx0xjhlRJ/V1tg0k/JZ8gA+WtbO6jY4jpHjQkmJWNBamXwZmfkoCk1jWCXvqfCo56RqizgANxpwZ9TMaZIZRwhyHdZm/gdBniEruzxJjmgQSpI/R+YTnEAbceYZRSRDkRRwsa8lCBWSMmFhDlWKgSwNl0ALaZ/FLAMF0XHJfi88P7L1c23ctGxdlSPCRBQuWuCVAely4lMeGJWj6wlrbs6k68YZGGPgtKX7ZJrx7uMtbt484Ppyj3ce7vHuNuCSDd7dEw4AXjm3uN1bCUiecLmf8XQ74wc+uMYf+fQ9fODlBtuBMR8k6K17hy+/dYFf/doztA39ywT6i+P44gDhAr/4L/XZ/r/O181/Z7uf/vd//TPv4Ud+8+t45UGPZ9crfPkh4fX+Of7o9034wLnFf/BF4L3LgFudhbMEQoAzUrp/6cLja5fAh88tXt/POH92jcdPbvDwvRb9psfZWYsH9zpYY9E7h7NVq73igL6j5JrmNWtxVqCWbcOYg8TrvkPiEHQ90Ey6cL0eaAZY9QadiuBNVttVysjdrESFNLC2IqxkOF0vnw0G2o7ROcJ4kEwxAFh1Fn0HrHtpXXgfsOoMNisZOHZNwKoTDsE4yTLZrAjwgHeCpnGNwXpFIA4YmwACo+8t1r2RTaUZSNtmhzp7EJhd05D6aTNmtTldryVLbhpB7HgnyrEx+26dhWHgYIGJGP1KMt7gCcOKweyx6g0sGfSdopO0v9y1wqsYOtGgWnUk8hyQ7LxrNUNSKZDNWp6rNYx1r+xuBgwC2laqND8zWkvYrBhnGyss6z3giNPwt3UQMqC2obwHRhLMvNfGvbMqrw5Bl8wkYoZGM/w495k9oe9ZBRVFwuHgGewZZ2vC+TkUNYVqaDyOcs+xbWmsHCyrnnDnTvQMoZRU9B2LbPtB+SBtVGoVRd2DJ6w6wDbijLjqpP3WdYyzDWG/Y/QqTxK0xTfsgVXPqV3X98D5Riq3AwCZ99uE/LOGYBtZ82GSisxp9WOdDPj9LG6PbUuqMCxKxIn054GzDWHTCziPfHYU7TtS0Ut5Hk7fkyP52a6XWY732eKg7eWZQR0svSccOpGi36wMPBNWfcAwGFjIc+laqUCdZfS9kUrKSxvQGlVvdhLUm5bhrIGfA1a9znAisZhkPa5XGY3nGqS9H2b551Uv921IvjN4A+aAMAf0ncWqlz226gmbtVQNYWLsWo9W58nGSoXrLcOPjLYjTRYYXStrM3jGODLWvZUq2InCwuwZZ2uDszODEAKur2fc7CZcbUdcXg149mzA5dWAy8OMixl4MhIeDoTtxLjdGXx4Y3G2NmisgZ+lZeUs4w987z38jo/fwnoDeACTl2tqncUXv3GBz371CYyhP9c5878N3ypAAKB/7gdu49f6TwgMZ/Ev7g7zn1/1Dr/7t7yGD7yywtPrgHE/4SX/DB9/6YAv7y3+Tz/H+LmveVjD6AxjP/rUTz9MjMtBMPh3e8KHzi0edMAGjNsd4XxlYYxF1zucrTtY5zB6YNNr5LWU+oRGF0zrkLwUupZwOMim6DtSKQvGbi9OdtCDu21kgUyzoFoOg2Qsm7VkgYEZt86F+Xs4MNoO6BpgdxAWsrPA1RXhyTMPJmEcn68F6nl5DewPAWcrUWANDDx+wjg7I9y/S7i6Dhgn4N5dg92O1ZtC1GFXPTAcgKubgGlmrFeEu7cNyArmn4MuuCDZ83CAemDIYbo7BIFiMnB2Jk151yA54K0UWho32/4ATJPoKbWdHETeA5dXjN2BcetMbFXbNps6GYNk8nR5xZi8ZOrOSObug7wTABi9/O/VinAYhOG97uW7tzt192vlO/cHyXg3G8btWwbzJKq3PnAanDeO0bRILRfvIWq2E6dhe9fJzwUmTLMcWhII8kxq9pLtdY1k3NFE6mYrRlDrFaHr4rA9q9DKsDuCPHKrxxBw61yeyzhmkUlngK6PBjwiR29S5SJ7YrfTyoEZ+wOj1wCz2Ujw3Q/yDBMhMwCXV9nMyRrCqies16yqwlr8MtRUStjtzrHCgQm7XfYBEfSWVE37LaPvgVu3ooGWrJf9Xtbf2blUWYeBMQ6EwyBVbKvP0egQ1zjxZplmSajaRmZMUbyRIdyWrmXsd0qq9MDltXCAXn2JEEC4vgEurwJmz7i1kcA6jnLo952AHLyXatMaEXslK+2mthGZl+BFToaZMQwCjojJ/2YjVRmz6J2NowIJvAS8rgP2e+AwRkdMYH9gbPeMVS+JFQfg1i1gcwYcDoSba8bFZUDbGvSdVD0xSNxsRRvNGMI4SyLWOGC3B66vA15+2SQ3zN0QcHntsW4lkO72I55fjDgcZuwOHpeHgMcHxh4GT0bgyT6ADOHe2mBlDVprsOkJ697gcu/x9tMRn3iwwh/4vvv41Os9bg4z2BBca8Rajgm/9MVn+NzXn6FtzL/TOPvHDPGvGRv+ngOI9pX/+9fb+c/2ncVv+4GX8ImPnOP9x4yHj0Z8+O4NvufDW4yB8Zc/R/jLfzfgy+97tIZxaw14DhgmxqStg5EZ21FW8d3O4KUV4cwR1gZoiGFZMlJLQlq0JhvhEGU+gLVZJsI5ORCtkQM/BpDDKJBKY4DORZ8JDTCQ32FIpjf5iJ+WdsUYNZGcHFaNZsP7A3Cxk8FS64BVY9C2wG4QrkHfGHROStiLLaNvCOdryEHqgfMVMIyiQxbbKq1+x24I8IHQN4SzVfTDkGCUsmJmTDMlToQPhGHOtqOblpL5D0MO27bJA19rgGESNNLsCY2VZxMYuDlIsF93IvjXuGyRa5SbYA2wPWjA0M+NirmRDT17+dmmlbZLCJR+dpzkmhsnPzdMUuSvOsK6k+cwTEgVkzFyIJcoqsg695xnCm0jbQeR58ltjazdpNcYUUtKnht0jXQNpWAZChMe5ixdjgIMITB3ycL9XIhZAmgcZydFX0PNjSrrTrP0sodZKsz4rFedHGQzCzAlBLneYQIOU/4Sa4G+BRqrXBLOTPkI0wyA+nuoI+OcYbVRWkb2JrDpgV7temedg42qZrzp9WCe5P1Ms3xG3BOx/WO16pm8zHQaJ8z2UHQ+o9ryMMlzCAxs9xJA7p3JWt8PwM0gycG6M2K5PUsAaS1wGOVdGivP0JgolcMKWpCzoW3k86e5ZuB3bRRX4HQeZFSb7PnDIElSDCCDrtXWElrdL5te3sE4M/YDYXtgNFaeCwyjcRLIDmP0dGHMgZLa9GEE9iPj7kYVoGdgPzG2QxDACDHGAIxM2Hpg6wlXE+PZgeFZJNg3DWHVWKmoQXBkMLHH9TjjrG3ww5+4hd/3fXfgQsDz3YTdJEn5K/cb3Ow8/tZnn+Ar37xC19h/q23oj/tAKQH5BxZAnCWA6CcOw/x/Yw74ge+6j0984A4ePQf2E/Ch+wd86M4VXrs/4vNfAP7S54Cfezvg/UuWdoEVhMvkBf4XAmMOwOClfRDhiq0h9A3QW0JvgdYQXMTZF1hwUwzQZcAqPd540MXBXlQYlU3FpVV3OijiZozzBWuyRLc1SWtPJAYUITQqgseZDHH0Xl6qJVLil2wSq5m7VwXWptHBL3PSNmpclBDP35t724qvpzywT4NSkgPGF9j+XK3ln7eGKytUrpQ/OSmVzCH2w5Ey6VJMi4w8+9kXEt+UyXjWUHqucVPHKjESCb0ig6LyrQj7qYii4eSNHpnnJqKDUl+YE+wUxTA4vvewkNlPcjDR4c/UnvJzgroiQXZzNFCRSS7FHDNCz5kCJUcZgRYH88LKz3BLUjj1nAQY41A7gxoaF31CsjowRcXiZBdMCRBRwmuTZGChyExGvtt7IQ1HccOYGHgd+juDNAOJvfvYenL6XT7kd13NFhZ8shBKN9EaYh2njHMhWeKDtIHaRiHPHvBaOcbqJqofWypAmnGobHJ7EMW+jm6TJf8lwdqJj8RGIwLMmjj/Utl+0QxUUqW2+JDh4sHL/USAqTXRVycLfMYzK3DeC3HPd00GLUyBMEzAyAGDBq5ZhW/JACtHOGuk0mgbggWhawxaBzy7DrjYebx61+J7PrTBD33kNr73oy1GnvDeI48xWDAb3L3lsB0G/PwvPcbbD3fouuZPNhZ/Ns4Xf10CiAjC4bvmmf8fh2H+2Et31/joa3fx6oM14Ag+THj51hZ3dje4ezbjzcngr30O+IVvBLzxJOAwMTadZG3eM+YgbQqOmaBmxTCqEgxBqYSAlDGWnLSoKGpNkWWGfABHAhcB6XNiX5sSq7k0GlLeQEC1KeJhGPRgI11AxmRoZPxORJXOuIFM6b+dZSDiAR180atWqYh5zoP2uOmsrVXo40IkKp36UOvyxIF9wtrnQz9mjZEzEKsvZ/O1GVo8V58BWvHw4bDAqZvapCoUwaOWqq6g8vk5+ppQnyQuTOIg5gShUBSefU2KLE2OqPj9SkZF/338jNKONkKMva9dhEuoalyDMROm4meS+i5lxd500JkCVYf8LuYpHy4JZRURYhrMScmAKN5p+jkUgTtm/Vw/l1jVeZ9/Lr6btD4ozwdiEBC5+vxM4+/4Od+DWXDv7MLVsATGzHMeKFsFDcQMPL57Z/PPGlsoFrMAIOI7817baKZeQ9Dqojw7IuQ6+Aipz+8m7oUS5BKfK4eFjtZSO5LzmeKzEEBlG7x0mI6VotHzzqTnqHMdI4HIgrTqka6Ms0Bjpa3vLGEYGdeDLNR7vcNv+eQav+t7znC/cbi5njFZBhuHqyvCemUxe+Ab71ziq9+8wM1uPvRd84c88P8kTVR/XQOIkVZCz4x///nV9JNzMPieT9zFb/zkHbS9xWFkPH884OXzLb7tAwM2bsZbD4G/+QbwS+8xvvGU8XQfcBgYzjEag+TPMIyaxdr8pIUPUFh6lh7moWABI2+CwLnFFTdCPJSj9WiUBC8Po/KQLklLXAixJf/quPEL8bcSzlpKXnNqI8SsJm/AOQ3q8vdHobx4SEdv7iU5MT6lsPBTKEEjpRFT3By53C82tI8w33x4Vvb2eq1JA3FpQxzbJcXvl5h9s3AyPLreYpOGBTrQFMF6+ZzTQT8Xa7YILkvHvOUhUAW75XMsDpcj9Yiiko2HUVkkmwVBugwgywM7tuniTMzZut2TeChUB5B0r4U8i/fZEnh5T3H9xplOPKRpeXDGgEQ1/2X57IE62TKFnXGcHZVJWPVcQ31wO5NQ72ntxHufdZYF0paz+syXnxM11GIyF6uNxlH1DCOEPYSiIij2ZDw/4jsu121M/sr9U+q/oehqVEjNJXeE68S0VKKg1Fqk1N2I0v7OSjXu9YzYDTI3u9VbvH7H4ZMvd/jhT67x7R9xGL3H198KuLwx6NcN7txy2G8ZD5/t8Lk3LvH+4y02K/Pzztp/cvZ4wyss+j+XABIf3jTjJ55d+39rnv0rH3p5he/8+G187EMbPHnmsB8DHtyecdbucZv2uL+Z4Cngy+8Svn5F+PzDgG8+ZVzsgctDkL7fLmCekBzjnJOeo/dQ1EZ0l5MbnGekbIQpE8omL33Its0IkWFAGuRNswxnm0bK5khqixal8UBg5D4pqWif9xmjRxACWMweq8M8akBxrDgkc4jGQyItLgNMGU5nEbtxkupLPMFlxTU6gIuZWyZdqaw3jvQrE+sd2lbyKvlhbGY7W8vKbuZ0naZGRyYC4lRoSZlE6iu1wmSImbJx5VCkDJ3qww/ps/Jz9z6L+kU8pFRnaopE0QlQ3QNdnmVFiHBQ6KqlCEGV70lEykrZl7NHhgoxxqSEVbIktbGKyhWFLE+cvVlXBBlTklG1/06c1kGUlRePc8k4p0mesXOUrtfqtcfD1rkoyIj0To1qYcUqEcxoOhVO9LniEaOsnMiIdFGGK8eqhIqg7QtGu/cCUil9jYexrGQoy/Nr9s96fyhUjOPnprmZlUG7ISSkZVDZGaMgEmfluewPgr7qeyOVlM5jXCNzB+/ljIis/q4zCXwRgya0chJPmRyUXJSbCZzsAiJXKaBQhqalusPis5k14aMkhR8RgOlc0aouIsfiOzJRMFTBLhxiACXVRhMh2zsbg9fvO3zXay1ebi0++pJDZwl7BnxDmLzFk2cWYIu7twjX+wG/9IVLvPneNYbJT7fWzZ/sW/rzkyYt/4UEkHECbg68dgb/Q2b/p5jZvPbSCrdWa3zotQ1eeXmFcSTcbEf0bsTdfsAZjbh3dwaagCcXwMML4K2nwMNnjB0DuwDsg/hOT6MMp7wXRu+RjIZi/KPSbK4won9zdp+bpjxLKDNUY6Lon9wnxwGsPkxjs2GVENPy0L7pZAGNgw4lXWaOe5+JazBZDJCVeR0XzKwHX9MATUuCujowplH+Obeasn1q9KlIvVS1hM3tmmzeEwLDTyotrumqsVlOIjrhTWPOeK3LA2hjtKU4KyeA1M0u2t0mnoXIkLtGNahUTp2152SMBC9QPhyjzlnpAU8uGj5xqkisFUQZh7q1JuJ/XBzQRaZZ6oKVLbDSGjeKXJrC90JnHVbRW37O4pmhMPRKcw4qKpBi+F5Kuhgrh5KfZb05l025vDKxXSMXOk15TiP3qjOnCcm/JLVfdG1GKLpoUMlcyBbZdTzcCAoo0c9jZrStgdHWbbTkNerZbh3lyk7nAKxIJbDoa5VCp2mtWnluIgGvasNDwfpX5Ns0Mmwjz9HqGp5nCejWaXIWBGrqVNZ+GOV9t3GOSJJgxmfIXMyKvMB54xphlrXNpVZLrD5V4h/6+8m/jIoZnwZRY3O7Oeq3eQXtGAfZbyhcK0/AYcu2dpSdEVh1DsKOBGV31hic9YSVI9xyhNfuWHzkgwavv+owHwhvf5OxCwa70cI0DnfuNOg7wsPHM955/4DHF1s8errFs6sJq879BWPpT1uiN1uXZ67/xQWQvWTK65Y+GsB/ahz9f+1qF7q7tzp84oNrvPbSGo3r0HUtGmdw2I04W08430xoeERHM8zMmK49VncJ7g4QesbuinD9UAdsM3C4YriO0J2pWugs/+zWJFDOQTeYZbie4KeoSQT4QybI2QZo1rK4pj3Bdpox6R/WDeNHwDSA60ViIslob+XBru4Rzl4Bhivg+j1Gf5vQbADbAcYB4zUQRrlWtwLmg/xzcyaf7aMctwemgxwyzQZobwHTFbB/DnS3VQTPAtMeGG+Adi2fHxT+6NZAdyafDz2A40FqG2DeA4cL3SsW6DZyX8Fncb3hUoKMaQiul7+PO6s50575Xq4vjMD2iTwzkHyHbQE/AMOOsbojAcKPmu07oO0J816y3+6WXD9P8lnzoBvOAau7wiEYb+TPNMrPuja3boJmcbaRg0rIZ/p+QtFq4rIdGclxvBCmq9uVWb72WHkYxWyDjKj2kmO5Duh6mwGes0RKaj+28rymndyP/DsCe5b3OAN2BazuCKlv3GnVM+t9eOHFNCtg2kritL5PMMpan/byDJsVYHs5iEb9Lp7lWbpVrgCNJRyea8XZMtyKkkd8mOTayDCokXfEILhWqo/dU9mLANCdE/rbhGnHmAd5JyCguwNM14T5wFg/kDV4+Taju0tY3yP4HWPYCgT77CXheY1bYDowpgOj7Q02L8l6G29k3dpO9hSY0N2SvX14Lj9DBAzXcr+2zevDHyRQTnvpGNgGaDeqW7aSNT0f5DP8ID9vV/K850HZ+EYCRpjkOuY9o1mRvNNZnlG7UfXoWc6WeUvyuWecnmm05Q2zvLN5kHcC1ntkwuoeo+nlHqdrYN4Cm7sGnTWwJKjI4WAwwcCdA6Z3uL62ePzEoO0abct7wEx4/GyPL3x9i/ceHQAEnK3tX2Sm/zkzfknmaYIE+/sJIA7/AP/DwDeI8Ec3K/c/8cz/+M1++uOf/9rFx7/y5hXWqxZ3zjvcv92g71cIpoU3YpnrDMNPAcMw4f5IuDMDawpoW4ZRshEbhu8YtjOwnegchRloOuFhzBYYiUAU4Jy4z002ZkqMoYDiWCcKqzzLgdKtDMIMzFOQbN0KVDhQgG0J7YrAhqXVxQyeBbHUrQhna0I4MNAy2rVBvxKyIVkCjYyZJANremA/M8gR+jVhJMAbVrtUgV86JyZEqxXjYkewK0bba0vJEvzIoD6g20jpMpH0Q1cb4XGMLKiciLgxmqHuBoAahnGMpiWs1gTbiNeGdcC4ZxysZIKuIbQdw7VSZVgLrM8Z00DgjWyc7QDASaYVnf6MEchlfwvY3CJMhbpstxIfFD8GnG0Iq3NtOwRgsPJMGgec3QH6c+Bww/ATIRBLQO00Y1ZF2d5KoBP58uxhEjwLWU990bPZUqnzJ9dCxb/8NbdJYYkrz1TbYw4wRlJHPxNMADwBviA/gpCUcocDYHtB4EHXxTwxvJFnsDkXzsw0AvBSbXuFuk8TYCHr6DDIGu9XJiUCwQOmkffbKVnTsrR1plEOra7PgpBgg9AErewYbS/vPngho7bKYbANYdbEo+2kWjt0QGhkncmal+BpIIHeEGPdAls9yNdrwm4GfOfRrizWK8IhBIyjtCm7Xr5XGPbCE7P/v+bOHWluIorCpx9qaTQz/2+7SAnICMkoqGIN7I8NELMGCidUEUARsQACAx7P/KNHd6uvg3NbksFkLorJ59GSph/3nO/c3qI7WLQdgMzTYNMCiLwX/YGbxtRuzE7uWDJrgm7aPBAFMI5GnXUB6bjRDJ0gKgbftgZJNwuhk9UYALXdWm0tbB2QRGBbZp4VL3CNxeGgpbMk5J4Kg1PbVq3cbheNolpOAe8XjDo6xaDpNMKmAKkBohd4azEu2oJ5sbhP9IKegkFnDca44DZmjJcbLtcZ9ylinCLuU8I44ZVz7pvjofnWWfxaT28f6vVBTyAHvRjeGlwH7gr71ny5LPL1MC1fpFy+cg5omgbPTh59a+G9R2gccrGYo8HDyeLUk86NCXh9w9op7TYJWk9Ahrk/FNbblrpAypwOvGXpJy9buWJOsvbvcE599oVe8tAYLVWUlXAWYxBTQeOpo8TEksAiBJisAZ4/WDx/BC5XwV9vBM/OFqEloQ4BhmmrXXovGGdet65lTTeXOjbqD42voKPgcqWP/tDy9zoDvFGw7tRbSKF2Yixw6lkaSwmrKQDVtguD673qLISaDqFaU/m+eRbcJz7gQTmI6kZpgkEXaG5wWqe/XIAp1x4UBkGdZfeJFHfjd+VCS8AzRlpzjz1trykZzNqTvBROAucTT4VPd4MpMnqmDRx79ejXnKutJwhLFqvzZuc8qy6ctWOd2ZKF8TdIal9hMDuWYzt1qLazi1WpO7Scq7V1y7MyO8ailjqmWdROrQuQ5firC/HhZNA2hC5j3gmzymkUZXLe3Au6ADweLeHAxWhvBl6bCnpOMxeHlKkbhGaLwCkFuA1FeQd+buM2rqZaSr0zq0bX6Gnn9VXwNFBHezga9J3BMJIjaSybWh07i9tAPenxDDwNwKtLwYsHg/ORY3y6E0R88WixLAT05iyYouDcWzw/cyzDxGtI6I7Hx+OR9/t6JzskQpDVOQUKVZSfE3mWedZymuc8ZS0X2RgFc6zzDR2fIdCOH1N9LkQt+iyLTonXP/jaJdKiP+guPgu6juObZqDv+ADVTo/1FC2g47TTE9sw8Xl9PELBQ3Ix/E/Ztf9HEf5OlIzQFhgUXO8L/rhkzHNGyoLgzc8PR/tDE+x391G+zxlDG6i71QXkf3kC+ZfXS2vNyzY4dK3/1Br5bIryyeUWP7/e5OO84LyU8lEu8CkbHMJGaC7ZYJiZqrioL7pxYItPnTicYQzIovXJ2nvAedGAPR6/12wtrUs2rvqvVcwumuy60rKEfbzlCSkXswp/MUMjPIC+BYZJMEQCcJXdECEBTFGaC3BUEtm5bUI0ENVKWHZgkJ7BfQKMK/DG6sRH2MgYBZiKCn2Wk05NU3W2JgqbNf57nDkh1kiGxpnNJQJgjFVX4EPj3SYWh1CdPXSzpGwwzrLTjMwKJQIEvqprTtQBQxqaE9gqACuPUO3MfcvJaZw1IcBS0LQwWER3pZpqu6aUafaTaPfDd/zLZqtdW7OL5Tby3jBNeU9jpH92epB3uhSLWmv37VfLviWAal5WuZZUnUSa74Xd+40ljGaV4N8vgkZ1EajuMkVCr8FvltGYVcRXMZ2ciRpNls0CXErNnhLMadMeag+QorqAd9uimxdew9oQa5j5X3QsW8NZWSFWr1lewRuMke/vGsJyTxNw7glr5iwYIr+zD6wYxsRTac4Eb48HIWSZNjdlivxdbcNxT7rJIzeii/yqbWIde8rbprf1qhHZbfKsQGsFH4tmnpVq97bbM1IdYU7Tj60RLiZ6z5h9Vj+L17OWXc3OSJCKrJ0yZy2bHxp+dhFuWudMwNdoll8FZA1EDi3+7IJ9WgS/z9H82Ab7WxfsL87hJ/9fzOwA3gKaUahnaemRCgAAAABJRU5ErkJggg==",
    "resources/null.png": "data:image/png;base64,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",
    "resources/scriptFont.png": "data:image/png;base64,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"
};

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
exports.repository = {
    "Scene": [{
        "id": 2,
        "name": "introScene",
        "pos": {
            "x": 0,
            "y": 0
        },
        "scale": {
            "x": 1,
            "y": 1
        },
        "anchor": {
            "x": 0,
            "y": 0
        },
        "type": "Scene",
        "layers": [{
            "type": "Layer",
            "id": 2
        }],
        "colorBG": {
            "r": 255,
            "g": 255,
            "b": 255,
            "a": 255
        },
        "tileMap": {
            "type": "TileMap",
            "data": [],
            "width": 0,
            "height": 0,
            "blendMode": ""
        },
        "ambientLight": {
            "intensity": 1,
            "game": {
                "width": 1024,
                "height": 600,
                "gravityConstant": 0,
                "scaleStrategy": 1,
                "startSceneId": 2,
                "preloadingSceneId": 0
            },
            "direction": [1, 1, 1]
        },
        "uiLayer": {
            "width": 0,
            "height": 0,
            "pos": {
                "x": 0,
                "y": 0
            },
            "scale": {
                "x": 1,
                "y": 1
            },
            "anchor": {
                "x": 0,
                "y": 0
            },
            "angle": 0,
            "alpha": 1,
            "fixedToCamera": false,
            "rigid": false,
            "type": "Layer",
            "children": []
        }
    }],
    "Layer": [{
        "id": 2,
        "name": "layer1",
        "pos": {
            "x": 0,
            "y": 0
        },
        "scale": {
            "x": 1,
            "y": 1
        },
        "anchor": {
            "x": 0,
            "y": 0
        },
        "type": "Layer"
    }],
    "SpriteSheet": [{
        "name": "button",
        "width": 400,
        "height": 77,
        "pos": {
            "x": 0,
            "y": 0
        },
        "scale": {
            "x": 1,
            "y": 1
        },
        "anchor": {
            "x": 0,
            "y": 0
        },
        "resourceMap": {
            "main": "resources/button.png"
        },
        "type": "SpriteSheet",
        "frameRect": {
            "x": 0,
            "y": 0,
            "width": 0,
            "height": 0
        },
        "id": 5
    }],
    "GameObjectProto": [{
        "name": "button",
        "width": 400,
        "height": 77,
        "pos": {
            "x": 0,
            "y": 0
        },
        "scale": {
            "x": 1,
            "y": 1
        },
        "anchor": {
            "x": 0,
            "y": 0
        },
        "type": "GameObjectProto",
        "spriteSheet": {
            "id": 5,
            "type": "SpriteSheet"
        },
        "shaderMaterial": {
            "shininess": 10
        },
        "velocity": {
            "x": 0,
            "y": 0
        },
        "id": 6
    }],
    "GameObject": [{
        "id": 7,
        "name": "button",
        "pos": {
            "x": 313,
            "y": 428
        },
        "scale": {
            "x": 1,
            "y": 1
        },
        "layerId": 2,
        "type": "GameObject",
        "gameObjectProto": {
            "id": 6,
            "type": "GameObjectProto"
        }
    }],
    "Font": [{
        "id": 8,
        "name": "scriptFont",
        "pos": {
            "x": 0,
            "y": 0
        },
        "scale": {
            "x": 1,
            "y": 1
        },
        "anchor": {
            "x": 0,
            "y": 0
        },
        "resourceMap": {
            "main": "resources/scriptFont.png"
        },
        "type": "Font",
        "fontSize": 64,
        "fontFamily": "Classic Console",
        "fontContext": {
            "symbols": {
                "0": {
                    "x": 235,
                    "y": 62,
                    "width": 25,
                    "height": 50
                },
                "1": {
                    "x": 268,
                    "y": 62,
                    "width": 25,
                    "height": 50
                },
                "2": {
                    "x": 4,
                    "y": 120,
                    "width": 25,
                    "height": 50
                },
                "3": {
                    "x": 37,
                    "y": 120,
                    "width": 25,
                    "height": 50
                },
                "4": {
                    "x": 70,
                    "y": 120,
                    "width": 25,
                    "height": 50
                },
                "5": {
                    "x": 103,
                    "y": 120,
                    "width": 25,
                    "height": 50
                },
                "6": {
                    "x": 136,
                    "y": 120,
                    "width": 25,
                    "height": 50
                },
                "7": {
                    "x": 169,
                    "y": 120,
                    "width": 25,
                    "height": 50
                },
                "8": {
                    "x": 202,
                    "y": 120,
                    "width": 25,
                    "height": 50
                },
                "9": {
                    "x": 235,
                    "y": 120,
                    "width": 25,
                    "height": 50
                },
                " ": {
                    "x": 4,
                    "y": 4,
                    "width": 25,
                    "height": 50
                },
                "!": {
                    "x": 37,
                    "y": 4,
                    "width": 25,
                    "height": 50
                },
                "\"": {
                    "x": 70,
                    "y": 4,
                    "width": 25,
                    "height": 50
                },
                "#": {
                    "x": 103,
                    "y": 4,
                    "width": 25,
                    "height": 50
                },
                "$": {
                    "x": 136,
                    "y": 4,
                    "width": 25,
                    "height": 50
                },
                "%": {
                    "x": 169,
                    "y": 4,
                    "width": 25,
                    "height": 50
                },
                "&": {
                    "x": 202,
                    "y": 4,
                    "width": 25,
                    "height": 50
                },
                "'": {
                    "x": 235,
                    "y": 4,
                    "width": 25,
                    "height": 50
                },
                "(": {
                    "x": 268,
                    "y": 4,
                    "width": 25,
                    "height": 50
                },
                ")": {
                    "x": 4,
                    "y": 62,
                    "width": 25,
                    "height": 50
                },
                "*": {
                    "x": 37,
                    "y": 62,
                    "width": 25,
                    "height": 50
                },
                "+": {
                    "x": 70,
                    "y": 62,
                    "width": 25,
                    "height": 50
                },
                ",": {
                    "x": 103,
                    "y": 62,
                    "width": 25,
                    "height": 50
                },
                "-": {
                    "x": 136,
                    "y": 62,
                    "width": 25,
                    "height": 50
                },
                ".": {
                    "x": 169,
                    "y": 62,
                    "width": 25,
                    "height": 50
                },
                "/": {
                    "x": 202,
                    "y": 62,
                    "width": 25,
                    "height": 50
                },
                ":": {
                    "x": 268,
                    "y": 120,
                    "width": 25,
                    "height": 50
                },
                ";": {
                    "x": 4,
                    "y": 178,
                    "width": 25,
                    "height": 50
                },
                "<": {
                    "x": 37,
                    "y": 178,
                    "width": 25,
                    "height": 50
                },
                "=": {
                    "x": 70,
                    "y": 178,
                    "width": 25,
                    "height": 50
                },
                ">": {
                    "x": 103,
                    "y": 178,
                    "width": 25,
                    "height": 50
                },
                "?": {
                    "x": 136,
                    "y": 178,
                    "width": 25,
                    "height": 50
                },
                "@": {
                    "x": 169,
                    "y": 178,
                    "width": 25,
                    "height": 50
                },
                "A": {
                    "x": 202,
                    "y": 178,
                    "width": 25,
                    "height": 50
                },
                "B": {
                    "x": 235,
                    "y": 178,
                    "width": 25,
                    "height": 50
                },
                "C": {
                    "x": 268,
                    "y": 178,
                    "width": 25,
                    "height": 50
                },
                "D": {
                    "x": 4,
                    "y": 236,
                    "width": 25,
                    "height": 50
                },
                "E": {
                    "x": 37,
                    "y": 236,
                    "width": 25,
                    "height": 50
                },
                "F": {
                    "x": 70,
                    "y": 236,
                    "width": 25,
                    "height": 50
                },
                "G": {
                    "x": 103,
                    "y": 236,
                    "width": 25,
                    "height": 50
                },
                "H": {
                    "x": 136,
                    "y": 236,
                    "width": 25,
                    "height": 50
                },
                "I": {
                    "x": 169,
                    "y": 236,
                    "width": 25,
                    "height": 50
                },
                "J": {
                    "x": 202,
                    "y": 236,
                    "width": 25,
                    "height": 50
                },
                "K": {
                    "x": 235,
                    "y": 236,
                    "width": 25,
                    "height": 50
                },
                "L": {
                    "x": 268,
                    "y": 236,
                    "width": 25,
                    "height": 50
                },
                "M": {
                    "x": 4,
                    "y": 294,
                    "width": 25,
                    "height": 50
                },
                "N": {
                    "x": 37,
                    "y": 294,
                    "width": 25,
                    "height": 50
                },
                "O": {
                    "x": 70,
                    "y": 294,
                    "width": 25,
                    "height": 50
                },
                "P": {
                    "x": 103,
                    "y": 294,
                    "width": 25,
                    "height": 50
                },
                "Q": {
                    "x": 136,
                    "y": 294,
                    "width": 25,
                    "height": 50
                },
                "R": {
                    "x": 169,
                    "y": 294,
                    "width": 25,
                    "height": 50
                },
                "S": {
                    "x": 202,
                    "y": 294,
                    "width": 25,
                    "height": 50
                },
                "T": {
                    "x": 235,
                    "y": 294,
                    "width": 25,
                    "height": 50
                },
                "U": {
                    "x": 268,
                    "y": 294,
                    "width": 25,
                    "height": 50
                },
                "V": {
                    "x": 4,
                    "y": 352,
                    "width": 25,
                    "height": 50
                },
                "W": {
                    "x": 37,
                    "y": 352,
                    "width": 25,
                    "height": 50
                },
                "X": {
                    "x": 70,
                    "y": 352,
                    "width": 25,
                    "height": 50
                },
                "Y": {
                    "x": 103,
                    "y": 352,
                    "width": 25,
                    "height": 50
                },
                "Z": {
                    "x": 136,
                    "y": 352,
                    "width": 25,
                    "height": 50
                },
                "[": {
                    "x": 169,
                    "y": 352,
                    "width": 25,
                    "height": 50
                },
                "\\": {
                    "x": 202,
                    "y": 352,
                    "width": 25,
                    "height": 50
                },
                "]": {
                    "x": 235,
                    "y": 352,
                    "width": 25,
                    "height": 50
                },
                "^": {
                    "x": 268,
                    "y": 352,
                    "width": 25,
                    "height": 50
                },
                "_": {
                    "x": 4,
                    "y": 410,
                    "width": 25,
                    "height": 50
                },
                "`": {
                    "x": 37,
                    "y": 410,
                    "width": 25,
                    "height": 50
                },
                "a": {
                    "x": 70,
                    "y": 410,
                    "width": 25,
                    "height": 50
                },
                "b": {
                    "x": 103,
                    "y": 410,
                    "width": 25,
                    "height": 50
                },
                "c": {
                    "x": 136,
                    "y": 410,
                    "width": 25,
                    "height": 50
                },
                "d": {
                    "x": 169,
                    "y": 410,
                    "width": 25,
                    "height": 50
                },
                "e": {
                    "x": 202,
                    "y": 410,
                    "width": 25,
                    "height": 50
                },
                "f": {
                    "x": 235,
                    "y": 410,
                    "width": 25,
                    "height": 50
                },
                "g": {
                    "x": 268,
                    "y": 410,
                    "width": 25,
                    "height": 50
                },
                "h": {
                    "x": 4,
                    "y": 468,
                    "width": 25,
                    "height": 50
                },
                "i": {
                    "x": 37,
                    "y": 468,
                    "width": 25,
                    "height": 50
                },
                "j": {
                    "x": 70,
                    "y": 468,
                    "width": 25,
                    "height": 50
                },
                "k": {
                    "x": 103,
                    "y": 468,
                    "width": 25,
                    "height": 50
                },
                "l": {
                    "x": 136,
                    "y": 468,
                    "width": 25,
                    "height": 50
                },
                "m": {
                    "x": 169,
                    "y": 468,
                    "width": 25,
                    "height": 50
                },
                "n": {
                    "x": 202,
                    "y": 468,
                    "width": 25,
                    "height": 50
                },
                "o": {
                    "x": 235,
                    "y": 468,
                    "width": 25,
                    "height": 50
                },
                "p": {
                    "x": 268,
                    "y": 468,
                    "width": 25,
                    "height": 50
                },
                "q": {
                    "x": 4,
                    "y": 526,
                    "width": 25,
                    "height": 50
                },
                "r": {
                    "x": 37,
                    "y": 526,
                    "width": 25,
                    "height": 50
                },
                "s": {
                    "x": 70,
                    "y": 526,
                    "width": 25,
                    "height": 50
                },
                "t": {
                    "x": 103,
                    "y": 526,
                    "width": 25,
                    "height": 50
                },
                "u": {
                    "x": 136,
                    "y": 526,
                    "width": 25,
                    "height": 50
                },
                "v": {
                    "x": 169,
                    "y": 526,
                    "width": 25,
                    "height": 50
                },
                "w": {
                    "x": 202,
                    "y": 526,
                    "width": 25,
                    "height": 50
                },
                "x": {
                    "x": 235,
                    "y": 526,
                    "width": 25,
                    "height": 50
                },
                "y": {
                    "x": 268,
                    "y": 526,
                    "width": 25,
                    "height": 50
                },
                "z": {
                    "x": 4,
                    "y": 584,
                    "width": 25,
                    "height": 50
                },
                "{": {
                    "x": 37,
                    "y": 584,
                    "width": 25,
                    "height": 50
                },
                "|": {
                    "x": 70,
                    "y": 584,
                    "width": 25,
                    "height": 50
                },
                "}": {
                    "x": 103,
                    "y": 584,
                    "width": 25,
                    "height": 50
                },
                "~": {
                    "x": 136,
                    "y": 584,
                    "width": 25,
                    "height": 50
                },
                "": {
                    "x": 169,
                    "y": 584,
                    "width": 32,
                    "height": 50
                },
                "": {
                    "x": 209,
                    "y": 584,
                    "width": 0,
                    "height": 50
                },
                "": {
                    "x": 217,
                    "y": 584,
                    "width": 0,
                    "height": 50
                },
                "": {
                    "x": 225,
                    "y": 584,
                    "width": 32,
                    "height": 50
                },
                "": {
                    "x": 265,
                    "y": 584,
                    "width": 32,
                    "height": 50
                },
                "": {
                    "x": 4,
                    "y": 642,
                    "width": 32,
                    "height": 50
                },
                "": {
                    "x": 44,
                    "y": 642,
                    "width": 50,
                    "height": 50
                },
                "": {
                    "x": 102,
                    "y": 642,
                    "width": 32,
                    "height": 50
                },
                "": {
                    "x": 142,
                    "y": 642,
                    "width": 32,
                    "height": 50
                },
                "": {
                    "x": 182,
                    "y": 642,
                    "width": 23,
                    "height": 50
                },
                "": {
                    "x": 213,
                    "y": 642,
                    "width": 50,
                    "height": 50
                },
                "": {
                    "x": 271,
                    "y": 642,
                    "width": 30,
                    "height": 50
                },
                "": {
                    "x": 4,
                    "y": 700,
                    "width": 32,
                    "height": 50
                },
                "": {
                    "x": 44,
                    "y": 700,
                    "width": 63,
                    "height": 50
                },
                "": {
                    "x": 115,
                    "y": 700,
                    "width": 0,
                    "height": 50
                },
                "": {
                    "x": 123,
                    "y": 700,
                    "width": 0,
                    "height": 50
                },
                "": {
                    "x": 131,
                    "y": 700,
                    "width": 0,
                    "height": 50
                },
                "": {
                    "x": 139,
                    "y": 700,
                    "width": 0,
                    "height": 50
                },
                "": {
                    "x": 147,
                    "y": 700,
                    "width": 12,
                    "height": 50
                },
                "": {
                    "x": 168,
                    "y": 700,
                    "width": 12,
                    "height": 50
                },
                "": {
                    "x": 189,
                    "y": 700,
                    "width": 26,
                    "height": 50
                },
                "": {
                    "x": 224,
                    "y": 700,
                    "width": 26,
                    "height": 50
                },
                "": {
                    "x": 259,
                    "y": 700,
                    "width": 0,
                    "height": 50
                },
                "А": {
                    "x": 267,
                    "y": 700,
                    "width": 25,
                    "height": 50
                },
                "Б": {
                    "x": 4,
                    "y": 758,
                    "width": 25,
                    "height": 50
                },
                "В": {
                    "x": 37,
                    "y": 758,
                    "width": 25,
                    "height": 50
                },
                "Г": {
                    "x": 70,
                    "y": 758,
                    "width": 25,
                    "height": 50
                },
                "Д": {
                    "x": 103,
                    "y": 758,
                    "width": 25,
                    "height": 50
                },
                "Е": {
                    "x": 136,
                    "y": 758,
                    "width": 25,
                    "height": 50
                },
                "Ж": {
                    "x": 169,
                    "y": 758,
                    "width": 25,
                    "height": 50
                },
                "З": {
                    "x": 202,
                    "y": 758,
                    "width": 25,
                    "height": 50
                },
                "И": {
                    "x": 235,
                    "y": 758,
                    "width": 25,
                    "height": 50
                },
                "Й": {
                    "x": 268,
                    "y": 758,
                    "width": 25,
                    "height": 50
                },
                "К": {
                    "x": 4,
                    "y": 816,
                    "width": 25,
                    "height": 50
                },
                "Л": {
                    "x": 37,
                    "y": 816,
                    "width": 25,
                    "height": 50
                },
                "М": {
                    "x": 70,
                    "y": 816,
                    "width": 25,
                    "height": 50
                },
                "Н": {
                    "x": 103,
                    "y": 816,
                    "width": 25,
                    "height": 50
                },
                "О": {
                    "x": 136,
                    "y": 816,
                    "width": 25,
                    "height": 50
                },
                "П": {
                    "x": 169,
                    "y": 816,
                    "width": 25,
                    "height": 50
                },
                "Р": {
                    "x": 202,
                    "y": 816,
                    "width": 25,
                    "height": 50
                },
                "С": {
                    "x": 235,
                    "y": 816,
                    "width": 25,
                    "height": 50
                },
                "Т": {
                    "x": 268,
                    "y": 816,
                    "width": 25,
                    "height": 50
                },
                "У": {
                    "x": 4,
                    "y": 874,
                    "width": 25,
                    "height": 50
                },
                "Ф": {
                    "x": 37,
                    "y": 874,
                    "width": 25,
                    "height": 50
                },
                "Х": {
                    "x": 70,
                    "y": 874,
                    "width": 25,
                    "height": 50
                },
                "Ц": {
                    "x": 103,
                    "y": 874,
                    "width": 25,
                    "height": 50
                },
                "Ч": {
                    "x": 136,
                    "y": 874,
                    "width": 25,
                    "height": 50
                },
                "Ш": {
                    "x": 169,
                    "y": 874,
                    "width": 25,
                    "height": 50
                },
                "Щ": {
                    "x": 202,
                    "y": 874,
                    "width": 25,
                    "height": 50
                },
                "Ъ": {
                    "x": 235,
                    "y": 874,
                    "width": 25,
                    "height": 50
                },
                "Ы": {
                    "x": 268,
                    "y": 874,
                    "width": 25,
                    "height": 50
                },
                "Ь": {
                    "x": 4,
                    "y": 932,
                    "width": 25,
                    "height": 50
                },
                "Э": {
                    "x": 37,
                    "y": 932,
                    "width": 25,
                    "height": 50
                },
                "Ю": {
                    "x": 70,
                    "y": 932,
                    "width": 25,
                    "height": 50
                },
                "Я": {
                    "x": 103,
                    "y": 932,
                    "width": 25,
                    "height": 50
                },
                "а": {
                    "x": 136,
                    "y": 932,
                    "width": 25,
                    "height": 50
                },
                "б": {
                    "x": 169,
                    "y": 932,
                    "width": 25,
                    "height": 50
                },
                "в": {
                    "x": 202,
                    "y": 932,
                    "width": 25,
                    "height": 50
                },
                "г": {
                    "x": 235,
                    "y": 932,
                    "width": 25,
                    "height": 50
                },
                "д": {
                    "x": 268,
                    "y": 932,
                    "width": 25,
                    "height": 50
                },
                "е": {
                    "x": 4,
                    "y": 990,
                    "width": 25,
                    "height": 50
                },
                "ж": {
                    "x": 37,
                    "y": 990,
                    "width": 25,
                    "height": 50
                },
                "з": {
                    "x": 70,
                    "y": 990,
                    "width": 25,
                    "height": 50
                },
                "и": {
                    "x": 103,
                    "y": 990,
                    "width": 25,
                    "height": 50
                },
                "й": {
                    "x": 136,
                    "y": 990,
                    "width": 25,
                    "height": 50
                },
                "к": {
                    "x": 169,
                    "y": 990,
                    "width": 25,
                    "height": 50
                },
                "л": {
                    "x": 202,
                    "y": 990,
                    "width": 25,
                    "height": 50
                },
                "м": {
                    "x": 235,
                    "y": 990,
                    "width": 25,
                    "height": 50
                },
                "н": {
                    "x": 268,
                    "y": 990,
                    "width": 25,
                    "height": 50
                },
                "о": {
                    "x": 4,
                    "y": 1048,
                    "width": 25,
                    "height": 50
                },
                "п": {
                    "x": 37,
                    "y": 1048,
                    "width": 25,
                    "height": 50
                },
                "р": {
                    "x": 70,
                    "y": 1048,
                    "width": 25,
                    "height": 50
                },
                "с": {
                    "x": 103,
                    "y": 1048,
                    "width": 25,
                    "height": 50
                },
                "т": {
                    "x": 136,
                    "y": 1048,
                    "width": 25,
                    "height": 50
                },
                "у": {
                    "x": 169,
                    "y": 1048,
                    "width": 25,
                    "height": 50
                },
                "ф": {
                    "x": 202,
                    "y": 1048,
                    "width": 25,
                    "height": 50
                },
                "х": {
                    "x": 235,
                    "y": 1048,
                    "width": 25,
                    "height": 50
                },
                "ц": {
                    "x": 268,
                    "y": 1048,
                    "width": 25,
                    "height": 50
                },
                "ч": {
                    "x": 4,
                    "y": 1106,
                    "width": 25,
                    "height": 50
                },
                "ш": {
                    "x": 37,
                    "y": 1106,
                    "width": 25,
                    "height": 50
                },
                "щ": {
                    "x": 70,
                    "y": 1106,
                    "width": 25,
                    "height": 50
                },
                "ъ": {
                    "x": 103,
                    "y": 1106,
                    "width": 25,
                    "height": 50
                },
                "ы": {
                    "x": 136,
                    "y": 1106,
                    "width": 25,
                    "height": 50
                },
                "ь": {
                    "x": 169,
                    "y": 1106,
                    "width": 25,
                    "height": 50
                },
                "э": {
                    "x": 202,
                    "y": 1106,
                    "width": 25,
                    "height": 50
                },
                "ю": {
                    "x": 235,
                    "y": 1106,
                    "width": 25,
                    "height": 50
                },
                "я": {
                    "x": 268,
                    "y": 1106,
                    "width": 25,
                    "height": 50
                },
                "ѐ": {
                    "x": 4,
                    "y": 1164,
                    "width": 25,
                    "height": 50
                },
                "ё": {
                    "x": 37,
                    "y": 1164,
                    "width": 25,
                    "height": 50
                },
                "ђ": {
                    "x": 70,
                    "y": 1164,
                    "width": 25,
                    "height": 50
                },
                "ѓ": {
                    "x": 103,
                    "y": 1164,
                    "width": 25,
                    "height": 50
                },
                "є": {
                    "x": 136,
                    "y": 1164,
                    "width": 25,
                    "height": 50
                },
                "ѕ": {
                    "x": 169,
                    "y": 1164,
                    "width": 25,
                    "height": 50
                },
                "і": {
                    "x": 202,
                    "y": 1164,
                    "width": 25,
                    "height": 50
                },
                "ї": {
                    "x": 235,
                    "y": 1164,
                    "width": 25,
                    "height": 50
                },
                "ј": {
                    "x": 268,
                    "y": 1164,
                    "width": 25,
                    "height": 50
                },
                "љ": {
                    "x": 4,
                    "y": 1222,
                    "width": 25,
                    "height": 50
                },
                "њ": {
                    "x": 37,
                    "y": 1222,
                    "width": 25,
                    "height": 50
                },
                "ћ": {
                    "x": 70,
                    "y": 1222,
                    "width": 25,
                    "height": 50
                }
            },
            "width": 320,
            "height": 1276
        }
    }]
};

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
exports.gameProps = {
    "width": 1024,
    "height": 600,
    "scaleStrategy": 1,
    "startSceneId": 2,
    "gravityConstant": 0,
    "preloadingSceneId": 0
};

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var IntroSceneBehaviour = exports.IntroSceneBehaviour = function () {
    function IntroSceneBehaviour() {
        _classCallCheck(this, IntroSceneBehaviour);
    }

    _createClass(IntroSceneBehaviour, [{
        key: 'onCreate',
        value: function onCreate() {
            var widget = this.game.uiBuilder.build({
                AbsoluteLayout: {
                    properties: {
                        pos: { x: 0, y: 0 },
                        width: this.game.width,
                        height: this.game.height,
                        layoutWidth: 0,
                        layoutHeight: 0,
                        background: {
                            type: 'NinePatchImage',
                            resourceMap: { main: 'resources/button.png' },
                            ABCD: 20
                        },
                        on: ['click', function () {
                            console.log('clicked on layout');
                        }]
                    },
                    children: [{
                        Button: {
                            pos: { x: 12, y: 30 },
                            font: { type: 'Font', name: 'scriptFont' },
                            text: "Продолжить",
                            paddings: 50,
                            background: {
                                type: 'NinePatchImage',
                                resourceMap: { main: 'resources/button.png' },
                                ABCD: 20
                            },
                            on: ['click', function () {
                                console.log('clicked on btn');
                            }]
                        }
                    }]
                }
            });
            this.scene.appendChild(widget);
            window.w = widget;
        }
    }, {
        key: 'onUpdate',
        value: function onUpdate() {}
    }, {
        key: 'onDestroy',
        value: function onDestroy() {}
    }]);

    return IntroSceneBehaviour;
}();

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ButtonBehaviour = exports.ButtonBehaviour = function () {
    function ButtonBehaviour() {
        _classCallCheck(this, ButtonBehaviour);
    }

    _createClass(ButtonBehaviour, [{
        key: "onCreate",
        value: function onCreate() {}
    }, {
        key: "onUpdate",
        value: function onUpdate() {}
    }, {
        key: "onDestroy",
        value: function onDestroy() {}
    }]);

    return ButtonBehaviour;
}();

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _button = __webpack_require__(55);

Object.defineProperty(exports, 'ButtonBehaviour', {
  enumerable: true,
  get: function get() {
    return _button.ButtonBehaviour;
  }
});

var _introScene = __webpack_require__(54);

Object.defineProperty(exports, 'IntroSceneBehaviour', {
  enumerable: true,
  get: function get() {
    return _introScene.IntroSceneBehaviour;
  }
});

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var rigidShapes_1 = __webpack_require__(27);
var rect_1 = __webpack_require__(0);
var mathEx = __webpack_require__(1);
var ColliderEngine = /** @class */function () {
    function ColliderEngine(game) {
        this.relaxationCount = 15;
        // percentage of separation to project objects
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
        if (s1.mInvMass === 0 && s2.mInvMass === 0) {
            return;
        }
        //  correct positions
        this.positionalCorrection(s1, s2, collisionInfo);
        var n = collisionInfo.getNormal();
        //the direction of collisionInfo is always from s1 to s2
        //but the Mass is inversed, so start scale with s2 and end scale with s1
        var start = collisionInfo.mStart.scale(s2.mInvMass / (s1.mInvMass + s2.mInvMass));
        var end = collisionInfo.mEnd.scale(s1.mInvMass / (s1.mInvMass + s2.mInvMass));
        var p = start.add(end);
        //r is vector from center of object to collision point
        var r1 = p.subtract(s1.mCenter);
        var r2 = p.subtract(s2.mCenter);
        //newV = V + mAngularVelocity cross R
        var v1 = s1.mVelocity.add(new rigidShapes_1.Vec2(-1 * s1.mAngularVelocity * r1.y, s1.mAngularVelocity * r1.x));
        var v2 = s2.mVelocity.add(new rigidShapes_1.Vec2(-1 * s2.mAngularVelocity * r2.y, s2.mAngularVelocity * r2.x));
        var relativeVelocity = v2.subtract(v1);
        // Relative velocity in normal direction
        var rVelocityInNormal = relativeVelocity.dot(n);
        //if objects moving apart ignore
        if (rVelocityInNormal > 0) {
            return;
        }
        // compute and apply response impulses for each object
        var newRestituion = Math.min(s1.mRestitution, s2.mRestitution);
        var newFriction = Math.min(s1.mFriction, s2.mFriction);
        //R cross N
        var R1crossN = r1.cross(n);
        var R2crossN = r2.cross(n);
        // Calc impulse scalar
        // the formula of jN can be found in http://www.myphysicslab.com/collision.html
        var jN = -(1 + newRestituion) * rVelocityInNormal;
        jN = jN / (s1.mInvMass + s2.mInvMass + R1crossN * R1crossN * s1.mInertia + R2crossN * R2crossN * s2.mInertia);
        //impulse is in direction of normal ( from s1 to s2)
        var impulse = n.scale(jN);
        // impulse = F dt = m * ?v
        // ?v = impulse / m
        s1.mVelocity = s1.mVelocity.subtract(impulse.scale(s1.mInvMass));
        s2.mVelocity = s2.mVelocity.add(impulse.scale(s2.mInvMass));
        if (!s1.fixedAngle) s1.mAngularVelocity -= R1crossN * jN * s1.mInertia;
        if (!s2.fixedAngle) s2.mAngularVelocity += R2crossN * jN * s2.mInertia;
        var tangent = relativeVelocity.subtract(n.scale(relativeVelocity.dot(n)));
        //relativeVelocity.dot(tangent) should less than 0
        tangent = tangent.normalize().scale(-1);
        var R1crossT = r1.cross(tangent);
        var R2crossT = r2.cross(tangent);
        var jT = -(1 + newRestituion) * relativeVelocity.dot(tangent) * newFriction;
        jT = jT / (s1.mInvMass + s2.mInvMass + R1crossT * R1crossT * s1.mInertia + R2crossT * R2crossT * s2.mInertia);
        //friction should less than force in normal direction
        if (jT > jN) {
            jT = jN;
        }
        //impulse is from s1 to s2 (in opposite direction of velocity)
        impulse = tangent.scale(jT);
        s1.mVelocity = s1.mVelocity.subtract(impulse.scale(s1.mInvMass));
        s2.mVelocity = s2.mVelocity.add(impulse.scale(s2.mInvMass));
        if (!s1.fixedAngle) s1.mAngularVelocity -= R1crossT * jT * s1.mInertia;
        if (!s2.fixedAngle) s2.mAngularVelocity += R2crossT * jT * s2.mInertia;
    };
    ColliderEngine.prototype.boundAndCollide = function (a, b, collisionInfo) {
        if (a.boundTest(b)) {
            if (a.collisionTest(b, collisionInfo)) {
                //make sure the normal is always from object[i] to object[j]
                if (collisionInfo.getNormal().dot(b.mCenter.subtract(a.mCenter)) < 0) {
                    collisionInfo.changeDir();
                }
                this.resolveCollision(a, b, collisionInfo);
            }
        }
    };
    ColliderEngine.prototype.collision = function () {
        var _this = this;
        var rigidObjects = this.game.getCurrScene().getAllGameObjects().map(function (g) {
            return g.rigidBody;
        });
        //concat(this.game.getCurrScene().tileMap.rigidBodies);
        var i, j, k;
        var collisionInfo = new rigidShapes_1.CollisionInfo();
        for (k = 0; k < this.relaxationCount; k++) {
            for (i = 0; i < rigidObjects.length; i++) {
                if (!rigidObjects[i]) continue;
                var tiles = this.game.getCurrScene().tileMap.getTilesAtRect(new rect_1.Rect(rigidObjects[i].mCenter.x - rigidObjects[i].mWidth / 2, rigidObjects[i].mCenter.y - rigidObjects[i].mHeight / 2, rigidObjects[i].mWidth, rigidObjects[i].mHeight));
                if (tiles.length) {
                    tiles.forEach(function (t) {
                        _this.boundAndCollide(rigidObjects[i], t.rect, collisionInfo);
                    });
                }
                for (j = i + 1; j < rigidObjects.length; j++) {
                    if (!rigidObjects[j]) continue;
                    this.boundAndCollide(rigidObjects[i], rigidObjects[j], collisionInfo);
                }
            }
        }
    };
    ColliderEngine.prototype.isIntersect = function (arr1, arr2) {
        return arr1.filter(function (value) {
            return arr2.indexOf(value) !== -1;
        }).length > 0;
    };
    ColliderEngine.prototype.boundAndCollideAcrade = function (a, b) {
        if (a.velocity.equal(0) && b.velocity.equal(0)) return;
        var numOfIterations = 0;
        var isOverlapped = mathEx.overlapTest(a.getRect(), b.getRect());
        if (!isOverlapped) return;
        if (!a.rigid || !b.rigid) {
            a.trigger('overlap', b);
            b.trigger('overlap', a);
            return;
        }
        while (isOverlapped) {
            if (numOfIterations > 3) break;
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
                var a = rigidObjects[i],
                    b = rigidObjects[j];
                if (this.isIntersect(a.collideWith, b.groupNames) || this.isIntersect(b.collideWith, a.groupNames)) {
                    this.boundAndCollideAcrade(a, b);
                }
            }
        }
    };
    return ColliderEngine;
}();
exports.ColliderEngine = ColliderEngine;

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * let widget = this.game.uiBuilder.build({
            Button: {
                pos: {x:12,y:30},
                font: {type:'Font',name:'font1'},
                text: 'button1',
                paddings: 50,
                background: {
                    type: 'NinePatchImage',
                    resourcePath: 'resources/nineP.png',
                    ABCD: 45
                },
                onClick: ()=>{
                    console.log('clicked',this);
                }
            }
        });
 */

Object.defineProperty(exports, "__esModule", { value: true });
var allUIClasses = __webpack_require__(37);
var absoluteLayout_1 = __webpack_require__(34);
var UIBuilder = /** @class */function () {
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
            if (propName === 'type') return; //reserved word, just skip
            if (obj[propName].type) {
                if (obj[propName].name) {
                    var typeToFind = obj[propName].type;
                    var nameToFind_1 = obj[propName].name;
                    obj[propName] = _this.game.repository.getArray(typeToFind).find(function (it) {
                        return it.name == nameToFind_1;
                    });
                    if (!obj[propName]) throw "can not find object {type:" + typeToFind + ",name:" + nameToFind_1 + "}";
                } else obj[propName] = _this.resolveObj(obj[propName].type, obj[propName]);
            }
            var setterName = UIBuilder.normalizeSetterName(propName);
            var hasSetter = instance[setterName] && instance[setterName].call;
            var hasProperty = propName in obj;
            if (true && !hasProperty && !hasSetter) {
                console.error(instance);
                throw "nor method " + setterName + " not property " + propName + " found";
            }
            if (hasSetter) (_a = instance[setterName]).call.apply(_a, [instance].concat(obj[propName]));else {
                if (instance[propName] && instance[propName].fromJSON) instance[propName].fromJSON(obj[propName]);else if (instance[propName] && instance[propName].call) (_b = instance[propName]).call.apply(_b, [instance].concat(obj[propName]));else {
                    if (!(propName in instance)) {
                        console.error(instance);
                        var constructorName = instance.constructor && instance.constructor.name || '';
                        throw "uiBuilder error: object " + constructorName + " has not property " + propName;
                    }
                    instance[propName] = obj[propName];
                }
            }
        });
    };
    UIBuilder.prototype.resolveObj = function (key, obj) {
        var clazz = allUIClasses[key];
        if (true && !clazz) throw "no such ui class: " + key;
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
        if (true && allKeys.length > 1) throw "only one root element is supported. Found: " + allKeys;
        var firstKey = Object.keys(desc)[0];
        var rootObj = desc[firstKey];
        if (firstKey === 'AbsoluteLayout') return this.resolveAbsoluteLayout(rootObj.properties, rootObj.children);else return this.resolveObj(firstKey, rootObj);
    };
    return UIBuilder;
}();
exports.UIBuilder = UIBuilder;

/***/ }),
/* 59 */
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
var GamePad = /** @class */function () {
    function GamePad(game) {
        this.game = game;
    }
    GamePad.prototype.update = function () {
        this.gamepads = // todo remove from runtime
        navigator.getGamepads && navigator.getGamepads() || navigator.webkitGetGamepads && navigator.webkitGetGamepads() || navigator.webkitGamepads || navigator.mozGamepads || navigator.msGamepads || navigator.gamepads || [];
        for (var i = 0, max = this.gamepads.length; i < max; i++) {
            var gp = this.gamepads[i];
            if (!gp) continue;
            var maxButtons = gp.buttons.length;
            if (maxButtons > 7) maxButtons = 7; // only 8-buttons gamePad is supported for now
            for (var j = 0; j < maxButtons; j++) {
                var btn = gp.buttons[j];
                if (btn.pressed) {
                    this.game.keyboard.press(j);
                } else {
                    this.game.keyboard.release(j);
                }
            }
            if (gp.axes[0] === 0) continue; // to avoid oscillations, skip integer zero value
            if (gp.axes[1] === 0) continue;
            var axis0 = ~~gp.axes[0];
            var axis1 = ~~gp.axes[1];
            if (axis0 === 1) {
                this.game.keyboard.press(this.game.keyboard.KEY.GAME_PAD_AXIS_RIGHT);
            } else {
                this.game.keyboard.release(this.game.keyboard.KEY.GAME_PAD_AXIS_RIGHT);
            }
            if (axis0 === -1) {
                this.game.keyboard.press(this.game.keyboard.KEY.GAME_PAD_AXIS_LEFT);
            } else {
                this.game.keyboard.release(this.game.keyboard.KEY.GAME_PAD_AXIS_LEFT);
            }
            if (axis1 === 1) {
                this.game.keyboard.press(this.game.keyboard.KEY.GAME_PAD_AXIS_DOWN);
            } else {
                this.game.keyboard.release(this.game.keyboard.KEY.GAME_PAD_AXIS_DOWN);
            }
            if (axis1 === -1) {
                this.game.keyboard.press(this.game.keyboard.KEY.GAME_PAD_AXIS_UP);
            } else {
                this.game.keyboard.release(this.game.keyboard.KEY.GAME_PAD_AXIS_UP);
            }
        }
    };
    return GamePad;
}();
exports.GamePad = GamePad;

/***/ }),
/* 60 */
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
var Keyboard = /** @class */function () {
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
        if (this.isPressed(key)) return;
        //console.log('pressed',key);
        this.buffer[key] = KEY_STATE.KEY_JUST_PRESSED;
    };
    Keyboard.prototype.release = function (key) {
        if (this.isReleased(key)) return;
        this.buffer[key] = KEY_STATE.KEY_JUST_RELEASED;
    };
    Keyboard.prototype.isPressed = function (key) {
        return this.buffer[key] >= KEY_STATE.KEY_PRESSED;
    };
    Keyboard.prototype.isJustPressed = function (key) {
        return this.buffer[key] === KEY_STATE.KEY_JUST_PRESSED;
    };
    Keyboard.prototype.isReleased = function (key) {
        if (this.buffer[key] === undefined) return true;
        return this.buffer[key] <= KEY_STATE.KEY_JUST_RELEASED;
    };
    Keyboard.prototype.isJustReleased = function (key) {
        return this.buffer[key] === KEY_STATE.KEY_JUST_RELEASED;
    };
    Keyboard.prototype.update = function () {
        var _this = this;
        Object.keys(this.buffer).forEach(function (key) {
            var keyNum = +key;
            if (_this.buffer[keyNum] === KEY_STATE.KEY_RELEASED) delete _this.buffer[keyNum];else if (_this.buffer[keyNum] === KEY_STATE.KEY_JUST_RELEASED) _this.buffer[keyNum] = KEY_STATE.KEY_RELEASED;
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
}();
exports.Keyboard = Keyboard;

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
var rect_1 = __webpack_require__(0);
var resource_1 = __webpack_require__(14);
var FontContext = /** @class */function () {
    function FontContext() {
        this.width = 0;
        this.height = 0;
        this.symbols = [];
    }
    return FontContext;
}();
var Font = /** @class */function (_super) {
    __extends(Font, _super);
    function Font(game) {
        var _this = _super.call(this, game) || this;
        _this.type = 'Font';
        _this.fontSize = 12;
        _this.fontFamily = 'Monospace';
        _this.fontContext = null;
        _this.fontColor = { r: 0, g: 0, b: 0 };
        return _this;
    }
    Font.prototype.revalidate = function () {
        var _this = this;
        _super.prototype.revalidate.call(this);
        var s = this.fontContext.symbols;
        this.fontContext.symbols = {};
        Object.keys(s).forEach(function (key) {
            if (true) {
                if (!s[key]) {
                    console.error(s);
                    throw "can not find proper object for key " + key;
                }
            }
            _this.fontContext.symbols[key] = new rect_1.Rect(s[key].x, s[key].y, s[key].width, s[key].height);
        });
    }; // todo is it really need???
    Font.prototype.getDefaultSymbolHeight = function () {
        return this.fontContext.symbols[' '].height;
    };
    return Font;
}(resource_1.Resource);
exports.Font = Font;

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
var baseModel_1 = __webpack_require__(6);
var Sound = /** @class */function (_super) {
    __extends(Sound, _super);
    function Sound(game) {
        var _this = _super.call(this, game) || this;
        _this.type = 'Sound';
        _this.resourcePath = '';
        _this._gain = 1;
        _this._loop = false;
        return _this;
    }
    Sound.find = function (name) {
        // let res = bundle.soundList.find({name:name});
        // //<code>{{#if opts.minify}}
        // if (!res) throw `can not found sound with name ${name}`;
        // // {{/if}}
        // return res;
    };
    Sound.prototype.play = function () {
        //audioPlayer.play(this);
    };
    Sound.prototype.stop = function () {
        //audioPlayer.stop(this);
    };
    Sound.prototype.pause = function () {
        throw 'not implemented';
    };
    Sound.prototype.setGain = function (val, time, easeFnName) {
        //audioPlayer.setGain(this,val,time,easeFnName);
    };
    return Sound;
}(baseModel_1.BaseModel);
exports.Sound = Sound;

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
var abstractLight_1 = __webpack_require__(43);
var AmbientLight = /** @class */function (_super) {
    __extends(AmbientLight, _super);
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
}(abstractLight_1.AbstractLight);
exports.AmbientLight = AmbientLight;

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var Queue = /** @class */function () {
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
            if (this.onResolved) this.onResolved();
        } else {
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
        if (this.size() === 0) this.onResolved();
        this.tasks.forEach(function (t) {
            t && t();
        });
    };
    return Queue;
}();
exports.Queue = Queue;
;

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
var noop_1 = __webpack_require__(29);
var baseModel_1 = __webpack_require__(6);
var loadingQueue_1 = __webpack_require__(64);
var tileMap_1 = __webpack_require__(28);
var layer_1 = __webpack_require__(26);
var ambientLight_1 = __webpack_require__(63);
var color_1 = __webpack_require__(18);
var camera_1 = __webpack_require__(25);
var Scene = /** @class */function (_super) {
    __extends(Scene, _super);
    function Scene(game) {
        var _this = _super.call(this, game) || this;
        _this.type = 'Scene';
        _this.layers = [];
        _this.useBG = false;
        _this.colorBG = color_1.Color.WHITE;
        _this.filters = [];
        _this.blendMode = ''; // todo
        _this._tweenMovies = [];
        _this._individualBehaviour = null;
        _this.tileMap = new tileMap_1.TileMap(game);
        _this.ambientLight = new ambientLight_1.AmbientLight(game);
        _this.uiLayer = new layer_1.Layer(_this.game);
        return _this;
    }
    Scene.prototype.revalidate = function () {
        _super.prototype.revalidate.call(this);
        if (!false && this.tileMap && this.tileMap.spriteSheet) {
            this.tileMap.revalidate();
        }
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
        return Object.keys(dataSet).map(function (key) {
            return dataSet[key];
        });
    };
    Scene.prototype.getDefaultLayer = function () {
        return this.layers[0];
    };
    Scene.prototype.addGameObject = function (go) {
        console.trace('scene:addGameObject is deprecated'); // todo remove after completeon
        this.getDefaultLayer().appendChild(go);
    };
    Scene.prototype.appendChild = function (go) {
        this.getDefaultLayer().appendChild(go);
    };
    ;
    Scene.prototype.preload = function (cb) {
        var _this = this;
        var resources = this.getAllSpriteSheets().concat(this.game.repository.getArray('Font'));
        // todo more smart preload
        resources = resources.concat(this.game.repository.getArray('GameObjectProto').map(function (it) {
            return it.spriteSheet;
        }));
        var q = new loadingQueue_1.Queue();
        q.onResolved = function () {
            cb && cb();
        };
        resources.forEach(function (res) {
            var id = 0;
            res.getAllResourcePathes().forEach(function (path) {
                (function (id) {
                    q.addTask(function () {
                        _this.game.renderer.loadTextureInfo(path, function () {
                            return q.resolveTask(id);
                        });
                    }, id);
                })(id);
                id++;
            });
        });
        q.start();
    };
    Scene.prototype.onShow = function () {
        if (this._individualBehaviour) this._individualBehaviour.onCreate();
        this.layers.forEach(function (l) {
            l.onShow();
        });
    };
    Scene.prototype.setIndividualBehaviour = function (instance) {
        instance.game = this.game;
        instance.scene = this;
        if (!instance.onCreate) instance.onCreate = noop_1.noop;
        if (!instance.onUpdate) instance.onUpdate = noop_1.noop;
        if (!instance.onDestroy) instance.onDestroy = noop_1.noop;
        this._individualBehaviour = instance;
    };
    Scene.prototype.update = function (currTime, deltaTime) {
        var _this = this;
        var layers = this.layers;
        var i = this.layers.length;
        var l = i - 1;
        if (this._individualBehaviour) this._individualBehaviour.onUpdate();
        while (i--) {
            layers[i - l].update(currTime, deltaTime);
        }
        this.uiLayer.update(currTime, deltaTime);
        this.game.repository.getArray('ParticleSystem').forEach(function (ps) {
            ps.update(currTime, deltaTime);
        });
        this._tweens.forEach(function (t, index) {
            t.update(currTime);
            if (t.isCompleted()) _this._tweens.splice(index, 1);
        });
    };
    Scene.prototype.render = function () {
        var renderer = this.game.renderer;
        renderer.beginFrameBuffer();
        if (this.useBG) renderer.clearColor(this.colorBG);else renderer.clear();
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
}(baseModel_1.BaseModel);
exports.Scene = Scene;

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
var baseModel_1 = __webpack_require__(6);
var mathEx = __webpack_require__(1);
var r = function (obj) {
    return mathEx.random(obj.from, obj.to);
};
var ParticleSystem = /** @class */function (_super) {
    __extends(ParticleSystem, _super);
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
        if (this.particleAngle.to < this.particleAngle.from) this.particleAngle.to += 2 * Math.PI;
    };
    ParticleSystem.find = function (name) {
        //return bundle.particleSystemList.find({name:name});
    };
    ParticleSystem.findAll = function (name) {
        //return bundle.particleSystemList.findAll({name:name});
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
            particle['liveTime'] = r(this.particleLiveTime); // todo
            // bundle.applyBehaviour(particle); todo
            this._particles.push(particle);
        }
    };
    ParticleSystem.prototype.update = function (time, delta) {
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
    };
    ParticleSystem.prototype.render = function () {
        var all = this._particles;
        var i = all.length;
        var l = i - 1;
        while (i--) {
            var p = all[l - i];
            if (!p) continue;
            p.render();
        }
    };
    return ParticleSystem;
}(baseModel_1.BaseModel);
exports.ParticleSystem = ParticleSystem;

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
var baseModel_1 = __webpack_require__(6);
var CommonBehaviour = /** @class */function (_super) {
    __extends(CommonBehaviour, _super);
    function CommonBehaviour(game) {
        var _this = _super.call(this, game) || this;
        _this.type = 'CommonBehaviour';
        _this.parameters = [];
        _this.description = null;
        return _this;
    }
    return CommonBehaviour;
}(baseModel_1.BaseModel);
exports.CommonBehaviour = CommonBehaviour;

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
var moveable_1 = __webpack_require__(30);
var Move2Dir = /** @class */function (_super) {
    __extends(Move2Dir, _super);
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
}(moveable_1.Moveable);
exports.Move2Dir = Move2Dir;

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
var move2Dir_1 = __webpack_require__(68);
var Parameters = /** @class */function () {
    function Parameters() {
        this.velocity = 100;
        this.walkLeftAnimation = 'left';
        this.walkRightAnimation = 'right';
        this.idleLeftAnimation = 'idleLeft';
        this.idleRightAnimation = 'idleRight';
    }
    return Parameters;
}();
exports.Parameters = Parameters;
var Control2Dir = /** @class */function (_super) {
    __extends(Control2Dir, _super);
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
        } else if (keyboard.isJustReleased(keyboard.KEY.RIGHT) || keyboard.isJustReleased(keyboard.KEY.GAME_PAD_AXIS_RIGHT)) {
            this.stop();
        }
    };
    return Control2Dir;
}(move2Dir_1.Move2Dir);
exports.Control2Dir = Control2Dir;

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
var moveable_1 = __webpack_require__(30);
var Move4Dir = /** @class */function (_super) {
    __extends(Move4Dir, _super);
    function Move4Dir(game) {
        return _super.call(this, game) || this;
    }
    Move4Dir.prototype.manage = function (gameObject, parameters) {
        _super.prototype.manage.call(this, gameObject, parameters, Move4Dir.DIRS);
    };
    Move4Dir.prototype.stop = function () {
        _super.prototype.stop.call(this);
        this.gameObject.rigidBody.mVelocity.x = 0; // todo mVelocity velocity
        this.gameObject.rigidBody.mVelocity.y = 0;
    };
    Move4Dir.DIRS = ['Left', 'Right', 'Up', 'Down'];
    return Move4Dir;
}(moveable_1.Moveable);
exports.Move4Dir = Move4Dir;

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
var move4Dir_1 = __webpack_require__(70);
var Parameters = /** @class */function () {
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
}();
exports.Parameters = Parameters;
var Control4Dir = /** @class */function (_super) {
    __extends(Control4Dir, _super);
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
            go.rigidBody.mVelocity.y = -parameters.velocity; // todo interface parameters // todo velocity mVelocity
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
        } else if (keyboard.isJustReleased(keyboard.KEY.RIGHT) || keyboard.isPressed(keyboard.KEY.GAME_PAD_AXIS_RIGHT)) {
            this.stop();
        } else if (keyboard.isJustReleased(keyboard.KEY.UP) || keyboard.isPressed(keyboard.KEY.GAME_PAD_AXIS_UP)) {
            this.stop();
        } else if (keyboard.isJustReleased(keyboard.KEY.DOWN) || keyboard.isPressed(keyboard.KEY.GAME_PAD_AXIS_DOWN)) {
            this.stop();
        }
    };
    return Control4Dir;
}(move4Dir_1.Move4Dir);
exports.Control4Dir = Control4Dir;

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
var baseAbstractBehaviour_1 = __webpack_require__(24);
var DraggableBehaviour = /** @class */function (_super) {
    __extends(DraggableBehaviour, _super);
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
            if (!point) return;
            point.dragStartX = point.target.pos.x;
            point.dragStartY = point.target.pos.y;
        });
        this.sceneOnMouseMove = scene.on('mouseMove', function (e) {
            var pointId = DraggableBehaviour._getEventId(e);
            var point = _this.points[pointId];
            if (!point) return;
            if (!point.dragStart) {
                point.dragStart = true;
                gameObject.trigger('dragStart', point);
                if (point.defaultPrevented) {
                    delete _this.points[pointId];
                    return;
                }
            }
            gameObject.pos.x = e.screenX - point.mX;
            gameObject.pos.y = e.screenY - point.mY; // todo check collision ant then move
            // this.game._collider.moveTo(
            //     gameObject,
            //     e.screenX - point.mX,
            //     e.screenY - point.mY
            // );
        });
        this.sceneOnMouseUp = scene.on('mouseUp', function (e) {
            var pointId = DraggableBehaviour._getEventId(e);
            var point = _this.points[pointId];
            if (!point) return;
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
}(baseAbstractBehaviour_1.BaseAbstractBehaviour);
exports.DraggableBehaviour = DraggableBehaviour;

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var draggable_1 = __webpack_require__(72);
exports.Draggable = draggable_1.DraggableBehaviour;
var control4Dir_1 = __webpack_require__(71);
exports.Control4Dir = control4Dir_1.Control4Dir;
var control2Dir_1 = __webpack_require__(69);
exports.Control2Dir = control2Dir_1.Control2Dir;

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
var gameObjectProto_1 = __webpack_require__(31);
var commonBehaviours = __webpack_require__(73);
var global_1 = __webpack_require__(2);
var noop_1 = __webpack_require__(29);
var GameObject = /** @class */function (_super) {
    __extends(GameObject, _super);
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
            if (!this.hasOwnProperty(key)) continue;
            ownProps[key] = this[key];
        }
        Object.keys(this.gameObjectProto).forEach(function (key) {
            if (_this.gameObjectProto[key] === undefined) return;
            _this[key] = _this.gameObjectProto[key];
        });
        Object.keys(ownProps).forEach(function (key) {
            if (!ownProps[key]) return; // to avoid corrupt frameIndex val
            if (ownProps[key].splice && ownProps[key].length === 0) return;
            _this[key] = ownProps[key];
        });
        if (this.startFrameAnimationName !== null) this.playFrameAnimation(this.startFrameAnimationName);
        _super.prototype.revalidate.call(this);
        //     let filter1 = new BlackWhiteFilter(this.game.renderer['gl']); // todo
        //     let filter2 = new ColorizeFilter(this.game.renderer['gl']);
        //     this.filters.push(filter1);
        //     this.filters.push(filter2);
    };
    GameObject.prototype.kill = function () {
        var _this = this;
        this.parent.children.remove(function (it) {
            return it.id === _this.id;
        });
    };
    GameObject.prototype.setIndividualBehaviour = function (instance) {
        instance.game = this.game;
        instance.gameObject = this;
        if (!instance.onCreate) instance.onCreate = noop_1.noop;
        if (!instance.onUpdate) instance.onUpdate = noop_1.noop;
        if (!instance.onDestroy) instance.onDestroy = noop_1.noop;
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
        if (true && index == -1) throw "can not move to front: gameObject is detached";
        this.parent.children.splice(index, 1);
        this.parent.children.push(this);
    };
    GameObject.prototype.moveToBack = function () {
        var index = this.parent.children.indexOf(this);
        if (true && index == -1) throw "can not move to back: gameObject is detached";
        this.parent.children.splice(index, 1);
        this.parent.children.unshift(this);
    };
    return GameObject;
}(gameObjectProto_1.GameObjectProto);
exports.GameObject = GameObject;
global_1._global['GameObject'] = GameObject;

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
var rect_1 = __webpack_require__(0);
var resource_1 = __webpack_require__(14);
var SpriteSheet = /** @class */function (_super) {
    __extends(SpriteSheet, _super);
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
        if (!(this.numOfFramesH && this.numOfFramesV)) return;
        this._frameWidth = ~~(this.width / this.numOfFramesH);
        this._frameHeight = ~~(this.height / this.numOfFramesV);
        this._numOfFrames = this.numOfFramesH * this.numOfFramesV;
    };
    SpriteSheet.prototype.getFramePosX = function (frameIndex) {
        return frameIndex % this.numOfFramesH * this._frameWidth;
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
}(resource_1.Resource);
exports.SpriteSheet = SpriteSheet;

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var commonObject_1 = __webpack_require__(13);
var decorators_1 = __webpack_require__(12);
var eventEmitter_1 = __webpack_require__(38);
var FrameAnimation = /** @class */function (_super) {
    __extends(FrameAnimation, _super);
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
        if (opts === void 0) {
            opts = { repeat: true };
        }
        this._isRepeat = opts.repeat;
        this._gameObject._currFrameAnimation = this;
    };
    FrameAnimation.prototype.stop = function () {
        if (this._gameObject) this._gameObject._currFrameAnimation = null;
        this._startTime = null;
        this._isRepeat = true;
    };
    FrameAnimation.prototype.update = function (time) {
        if (!this._startTime) this._startTime = time;
        var delta = (time - this._startTime) % this.duration;
        this._currFrame = ~~(this.frames.length * delta / this.duration);
        if (this._isRepeat == false && this._currFrame >= this.frames.length - 1) {
            this.trigger('loop');
            this.stop();
            return;
        }
        var lastFrIndex = this._gameObject.currFrameIndex;
        if (lastFrIndex != this.frames[this._currFrame]) {
            this._gameObject.setFrameIndex(this.frames[this._currFrame]);
            if (this._currFrame === 0 && this._startTime !== time) this.trigger('loop');
        }
    };
    FrameAnimation.prototype.nextFrame = function () {
        var ind = this._currFrame;
        ind++;
        if (ind == this.frames.length) ind = 0;
        this._gameObject.setFrameIndex(this.frames[ind]);
        this._currFrame = ind;
    };
    FrameAnimation.prototype.previousFrame = function () {
        var ind = this._currFrame;
        ind--;
        if (ind < 0) ind = this.frames.length - 1;
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
    FrameAnimation = __decorate([decorators_1.Transient({
        game: true
    })], FrameAnimation);
    return FrameAnimation;
}(commonObject_1.CommonObject);
exports.FrameAnimation = FrameAnimation;

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var frameAnimation_1 = __webpack_require__(76);
exports.FrameAnimation = frameAnimation_1.FrameAnimation;
var spriteSheet_1 = __webpack_require__(75);
exports.SpriteSheet = spriteSheet_1.SpriteSheet;
var gameObjectProto_1 = __webpack_require__(31);
exports.GameObjectProto = gameObjectProto_1.GameObjectProto;
var gameObject_1 = __webpack_require__(74);
exports.GameObject = gameObject_1.GameObject;
var commonBehaviour_1 = __webpack_require__(67);
exports.CommonBehaviour = commonBehaviour_1.CommonBehaviour;
var particleSystem_1 = __webpack_require__(66);
exports.ParticleSystem = particleSystem_1.ParticleSystem;
var scene_1 = __webpack_require__(65);
exports.Scene = scene_1.Scene;
var sound_1 = __webpack_require__(62);
exports.Sound = sound_1.Sound;
var font_1 = __webpack_require__(61);
exports.Font = font_1.Font;
var layer_1 = __webpack_require__(26);
exports.Layer = layer_1.Layer;
var textField_1 = __webpack_require__(16);
exports.TextField = textField_1.TextField;
var button_1 = __webpack_require__(36);
exports.Button = button_1.Button;
var tileMap_1 = __webpack_require__(28);
exports.TileMap = tileMap_1.TileMap;

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var models = __webpack_require__(77);
var Repository = /** @class */function () {
    function Repository(game) {
        this._game = game;
        this.reset();
    }
    Repository.prototype.addDescription = function (desc, type) {
        if (!this.descriptions[type]) this.descriptions[type] = [];
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
        if (forceNew === void 0) {
            forceNew = false;
        }
        if (true && !type) throw 'repository.getObject: type not specified';
        if (true && id == null) {
            console.trace("id is null");
            throw "::getObject() id not specified for type " + type;
        }
        var Clazz = models[type];
        if (true && !Clazz) {
            throw "::getObject() undeclared object type " + type;
        }
        if (true && !this.descriptions[type]) throw "not found description for type: " + type;
        var desc = this.descriptions[type].find(function (it) {
            return it.id == id;
        });
        if (!desc) {
            throw "can not find object \"" + type + "\" with id " + id;
        }
        if (forceNew || !this.cache[desc[id]]) this.cache[id] = new Clazz(this._game).fromJSON(desc);
        return this.cache[id];
    };
    Repository.prototype.getFirst = function (type) {
        var all = this.getArray(type);
        if (!all.length) return null;
        return all[0];
    };
    Repository.prototype.addObject = function (obj) {
        if (true && !obj.id) {
            console.error(obj);
            throw "addObject: id is not provided";
        }
        if (!this.arrays[obj.type]) this.arrays[obj.type] = [];
        this.arrays[obj.type].push(obj);
        if (!this.descriptions[obj.type]) this.descriptions[obj.type] = [];
        this.descriptions[obj.type].push(obj.toJSON());
    };
    Repository.prototype.updateObject = function (obj, opts) {
        var json = obj.toJSON(opts);
        var index = this.descriptions[obj.type].findIndex(function (it) {
            return it.id == obj.id;
        });
        this.descriptions[obj.type][index] = json;
        var objInRepo = this.getObject(obj.id, obj.type, true);
        if (objInRepo) objInRepo.fromJSON(json);
    };
    Repository.prototype.removeObject = function (obj) {
        if (true && !this.arrays[obj.type]) this.arrays[obj.type] = [];
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
    };
    Repository.prototype.getArray = function (type) {
        var _this = this;
        if (true && !models[type]) throw "getArray: unregistered type \"" + type + "\"";
        if (this.arrays[type]) return this.arrays[type];
        var res = [];
        if (!this.descriptions[type]) this.descriptions[type] = [];
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
}();
exports.Repository = Repository;

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var isCocoonJS = !!navigator.isCocoonJS;
var Device = /** @class */function () {
    function Device(game) {}
    Device.isCocoonJS = isCocoonJS;
    Device.scale = isCocoonJS ? window.devicePixelRatio || 1 : 1;
    Device.isTouch = typeof window !== 'undefined' && 'ontouchstart' in window;
    return Device;
}();
exports.Device = Device;

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
var image_1 = __webpack_require__(35);
var NinePatchImage = /** @class */function (_super) {
    __extends(NinePatchImage, _super);
    function NinePatchImage(game) {
        var _this = _super.call(this, game) || this;
        _this.a = 0;
        _this.b = 0;
        _this.c = 0;
        _this.d = 0;
        _this.drawingRect.observe(function () {
            _this.revalidate();
        });
        return _this;
    }
    NinePatchImage.prototype.revalidate = function () {
        var r = this.drawingRect;
        var width = r.width,
            height = r.height;
        if (width < this.a + this.b) width = this.a + this.b;
        if (height < this.c + this.d) height = this.c + this.d;
        r.setWH(width, height);
    };
    NinePatchImage.prototype.setABCD = function (a, b, c, d) {
        if (b === undefined) b = a;
        if (c === undefined) c = b;
        if (d === undefined) d = c;
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
}(image_1.Image);
exports.NinePatchImage = NinePatchImage;

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
var rect_1 = __webpack_require__(0);
var color_1 = __webpack_require__(18);
var global_1 = __webpack_require__(2);
var renderableModel_1 = __webpack_require__(20);
var Rectangle = /** @class */function (_super) {
    __extends(Rectangle, _super);
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
}(renderableModel_1.RenderableModel);
exports.Rectangle = Rectangle;
global_1._global['Rectangle'] = Rectangle;

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var Timer = /** @class */function () {
    function Timer(callback, interval) {
        this.lastTime = 0;
        this.interval = interval;
        this.callback = callback;
    }
    Timer.prototype.onUpdate = function (time) {
        if (!this.lastTime) this.lastTime = time;
        var delta = time - this.lastTime;
        if (delta !== 0 && delta > this.interval) {
            this.lastTime = time;
            this.callback();
        }
    };
    return Timer;
}();
exports.Timer = Timer;

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var textField_1 = __webpack_require__(16);
var device_1 = __webpack_require__(79);
var size_1 = __webpack_require__(17);
var AbstractRenderer = /** @class */function () {
    function AbstractRenderer(game) {
        this.renderableCache = {};
        this.fullScreenSize = new size_1.Size(0, 0);
        this.game = game;
        if (device_1.Device.isCocoonJS) {
            var dpr = window.devicePixelRatio || 1;
            this.fullScreenSize.setW(window.innerWidth * dpr);
            this.fullScreenSize.setH(window.innerHeight * dpr);
        } else {
            this.fullScreenSize.setWH(this.game.width, this.game.height);
        }
    }
    AbstractRenderer.prototype.onResize = function () {};
    AbstractRenderer.prototype.requestFullScreen = function () {
        var element = this.container;
        if (element.requestFullScreen) {
            element.requestFullScreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullScreen) {
            element.webkitRequestFullScreen();
        }
    };
    AbstractRenderer.prototype.cancelFullScreen = function () {
        if (document.cancelFullScreen) {
            document.cancelFullScreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
        }
    };
    AbstractRenderer.prototype.beginFrameBuffer = function () {};
    AbstractRenderer.prototype.flipFrameBuffer = function (filters) {};
    AbstractRenderer.prototype.registerResize = function () {
        var _this = this;
        this.onResize();
        window.addEventListener('resize', function () {
            return _this.onResize();
        });
    };
    AbstractRenderer.prototype.destroy = function () {
        window.removeEventListener('resize', this.onResize);
    };
    AbstractRenderer.prototype.getError = function () {
        return 0;
    };
    AbstractRenderer.prototype.drawImage = function (texturePath, srcRect, dstRect) {};
    AbstractRenderer.prototype.drawImageEx = function (texturePath, srcRect, dstRect, filters, drawableInfo) {};
    AbstractRenderer.prototype.drawNinePatch = function (texturePath, destRect, filters, drawableInfo, a, b, c, d) {};
    AbstractRenderer.prototype.drawTiledImage = function (texturePath, srcRect, dstRect, offset) {};
    AbstractRenderer.prototype.fillRect = function (rect, color) {};
    AbstractRenderer.prototype.drawRect = function (rect, color, lineWidth) {};
    AbstractRenderer.prototype.lockRect = function (rect) {};
    AbstractRenderer.prototype.unlockRect = function () {};
    AbstractRenderer.prototype.drawLine = function (x1, y1, x2, y2, color) {};
    AbstractRenderer.prototype.fillCircle = function (x, y, r, color) {};
    AbstractRenderer.prototype.resetTransform = function () {};
    AbstractRenderer.prototype.clear = function () {};
    AbstractRenderer.prototype.clearColor = function (c) {};
    AbstractRenderer.prototype.save = function () {};
    AbstractRenderer.prototype.restore = function () {};
    AbstractRenderer.prototype.translate = function (x, y, z) {};
    AbstractRenderer.prototype.scale = function (x, y, z) {};
    AbstractRenderer.prototype.rotateZ = function (a) {};
    AbstractRenderer.prototype.draw = function (renderable) {};
    AbstractRenderer.prototype.log = function (args) {
        if (false) {}
        var textField = this.debugTextField;
        if (!textField) {
            textField = new textField_1.TextField(this.game);
            textField.name = 'defaultName';
            textField.revalidate();
            this.debugTextField = textField;
        }
        var res = '';
        Array.prototype.slice.call(arguments).forEach(function (txt) {
            if (txt === undefined) txt = 'undefined';else if (txt === null) txt = 'null';else if (txt.toJSON) {
                txt = JSON.stringify(txt.toJSON(), null, 4);
            } else {
                if (typeof txt !== 'string') {
                    try {
                        txt = JSON.stringify(txt);
                    } catch (e) {}
                }
            }
            if (typeof txt !== 'string') txt = txt.toString();
            res += txt + "\n";
        });
        textField.pos.x = 10;
        textField.pos.y = 10;
        textField.setText(textField.getText() + res);
    };
    AbstractRenderer.prototype.loadTextureInfo = function (textureId, onLoaded) {};
    AbstractRenderer.prototype.getTextureInfo = function (textureId) {
        return this.renderableCache[textureId];
    };
    AbstractRenderer.prototype.getResource = function (resourcePath) {
        return  true ? this.game.repository.embeddedResources[resourcePath] : undefined;
    };
    return AbstractRenderer;
}();
exports.AbstractRenderer = AbstractRenderer;

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
var abstractRenderer_1 = __webpack_require__(83);
var consts_1 = __webpack_require__(33);
var rect_1 = __webpack_require__(0);
var AbstractCanvasRenderer = /** @class */function (_super) {
    __extends(AbstractCanvasRenderer, _super);
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
        if (this.game.scaleStrategy === consts_1.SCALE_STRATEGY.NO_SCALE) return;else if (this.game.scaleStrategy === consts_1.SCALE_STRATEGY.STRETCH) {
            canvas.style.width = window.innerWidth + "px";
            canvas.style.height = window.innerHeight + "px";
            return;
        }
        ;
        var canvasRatio = canvas.height / canvas.width;
        var windowRatio = window.innerHeight / window.innerWidth;
        var width;
        var height;
        if (windowRatio < canvasRatio) {
            height = window.innerHeight;
            width = height / canvasRatio;
        } else {
            width = window.innerWidth;
            height = width * canvasRatio;
        }
        this.game.scale.setXY(width / this.game.width, height / this.game.height);
        this.game.pos.setXY((window.innerWidth - width) / 2, (window.innerHeight - height) / 2);
        this.container.style.width = width + 'px';
        this.container.style.height = height + 'px';
        this.container.style.marginTop = this.game.pos.y + "px";
    };
    /**
     *
      |-A-|--------|-B-|
     C|-1-|---2----|-3-|
      |---|--------|---|
      |-4-|   4    |-6-|
      |---|        |---|
      |---|--------|---|
     D|-7-|---8----|-9-|
      |---|--------|---|
     */
    AbstractCanvasRenderer.prototype.drawNinePatch = function (texturePath, destRect, filters, drawableInfo, a, b, c, d) {
        var r = rect_1.Rect.fromPool();
        var rDst = rect_1.Rect.fromPool();
        var texSize = this.renderableCache[texturePath].texture.getSize();
        // patch 1
        r.setXYWH(0, 0, a, c);
        rDst.setXYWH(destRect.getPoint().x, destRect.getPoint().y, a, c);
        this.drawImage(texturePath, r, rDst);
        // patch 2
        r.setXYWH(a, 0, texSize.width - a - b, c);
        rDst.setXYWH(destRect.x + a, destRect.y, destRect.width - a - c, c);
        this.drawImageEx(texturePath, r, rDst, filters, drawableInfo);
        // patch 3
        r.setXYWH(texSize.width - b, 0, b, c);
        rDst.setXYWH(destRect.getPoint().x + destRect.width - b, destRect.getPoint().y, b, c);
        this.drawImageEx(texturePath, r, rDst, filters, drawableInfo);
        // patch 4
        r.setXYWH(0, c, a, texSize.height - c - d);
        rDst.setXYWH(destRect.x, destRect.y + c, a, destRect.height - c - d);
        this.drawImageEx(texturePath, r, rDst, filters, drawableInfo);
        // patch 5
        r.setXYWH(a, c, texSize.width - a - b, texSize.height - c - d);
        rDst.setXYWH(destRect.x + a, destRect.y + c, destRect.width - a - b, destRect.height - c - d);
        this.drawImageEx(texturePath, r, rDst, filters, drawableInfo);
        // patch 6
        r.setXYWH(texSize.width - b, c, b, texSize.height - c - d);
        rDst.setXYWH(destRect.x + destRect.width - b, destRect.y + c, b, destRect.height - c - d);
        this.drawImageEx(texturePath, r, rDst, filters, drawableInfo);
        // patch 7
        r.setXYWH(0, texSize.height - d, a, d);
        rDst.setXYWH(destRect.getPoint().x, destRect.getPoint().y + destRect.height - d, a, d);
        this.drawImageEx(texturePath, r, rDst, filters, drawableInfo);
        // patch 8
        r.setXYWH(a, texSize.height - d, texSize.width - a - b, d);
        rDst.setXYWH(destRect.x + a, destRect.y + destRect.height - d, destRect.width - a - b, d);
        this.drawImageEx(texturePath, r, rDst, filters, drawableInfo);
        // patch 9
        r.setXYWH(texSize.width - b, texSize.height - d, b, d);
        rDst.setXYWH(destRect.getPoint().x + destRect.width - b, destRect.getPoint().y + destRect.height - d, b, d);
        this.drawImageEx(texturePath, r, rDst, filters, drawableInfo);
    };
    return AbstractCanvasRenderer;
}(abstractRenderer_1.AbstractRenderer);
exports.AbstractCanvasRenderer = AbstractCanvasRenderer;

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var shaderProgram_1 = __webpack_require__(4);
var spriteRectDrawer_1 = __webpack_require__(19);
var mat4 = __webpack_require__(8);
var texShaderGenerator_1 = __webpack_require__(10);
var makePositionMatrix = function (dstX, dstY, dstWidth, dstHeight) {
    var projectionMatrix = mat4.ortho(0, dstWidth, 0, dstHeight, -1, 1);
    var scaleMatrix = mat4.makeScale(dstWidth, dstHeight, 1);
    return mat4.matrixMultiply(scaleMatrix, projectionMatrix);
};
var identity = mat4.makeIdentity();
var AbstractFilter = /** @class */function () {
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
    AbstractFilter.prototype.prepare = function (gen) {};
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
}();
exports.AbstractFilter = AbstractFilter;

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// this filter needs to copy texture to framebuffer

var __extends = this && this.__extends || function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
var abstractFilter_1 = __webpack_require__(85);
var shaderProgramUtils_1 = __webpack_require__(5);
var SimpleCopyFilter = /** @class */function (_super) {
    __extends(SimpleCopyFilter, _super);
    function SimpleCopyFilter(gl) {
        return _super.call(this, gl) || this;
    }
    SimpleCopyFilter.prototype.prepare = function (programGen) {
        programGen.addFragmentUniform(shaderProgramUtils_1.GL_TYPE.FLOAT, 'u_mixFactor');
        //language=GLSL
        programGen.setFragmentMainFn("\n            void main(){\n                gl_FragColor = texture2D(texture, v_texCoord);\n            }\n        ");
    };
    return SimpleCopyFilter;
}(abstractFilter_1.AbstractFilter);
exports.SimpleCopyFilter = SimpleCopyFilter;

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var spriteRectDrawer_1 = __webpack_require__(19);
var shaderProgramUtils_1 = __webpack_require__(5);
var texShaderGenerator_1 = __webpack_require__(10);
var shaderProgram_1 = __webpack_require__(4);
var simpleCopyFilter_1 = __webpack_require__(86);
var AbstractBlendDrawer = /** @class */function () {
    function AbstractBlendDrawer(gl) {
        this.gl = gl;
        var gen = new texShaderGenerator_1.TexShaderGenerator();
        gen.addVarying(shaderProgramUtils_1.GL_TYPE.FLOAT_VEC4, 'v_destTexCoord');
        gen.addFragmentUniform(shaderProgramUtils_1.GL_TYPE.SAMPLER_2D, 'destTexture');
        //language=GLSL
        gen.setVertexMainFn("\n            void main(){\n                gl_Position = u_vertexMatrix * a_position;\n                v_texCoord = (u_textureMatrix * vec4(a_texCoord, 0, 1)).xy;\n                v_destTexCoord = gl_Position*0.5+0.5; \n            }\n        ");
        this.prepare(gen);
        this._afterPrepare(gen);
        this.simpleCopyFilter = new simpleCopyFilter_1.SimpleCopyFilter(gl);
    }
    AbstractBlendDrawer.prototype._afterPrepare = function (gen) {
        this.program = new shaderProgram_1.ShaderProgram(this.gl, gen.getVertexSource(), gen.getFragmentSource());
        this.spriteRectDrawer = new spriteRectDrawer_1.SpriteRectDrawer(this.gl, this.program);
    };
    AbstractBlendDrawer.prototype.prepare = function (programGen) {};
    // destTex is copy or current destination texture
    // to avoid "Source and destination textures of the draw are the same" error
    AbstractBlendDrawer.prototype.draw = function (textureInfos, uniforms, frameBuffer) {
        var destTex = frameBuffer.texture.applyFilters([this.simpleCopyFilter], frameBuffer);
        textureInfos.push({ texture: destTex, name: 'destTexture' });
        this.spriteRectDrawer.draw(textureInfos, uniforms, frameBuffer);
    };
    return AbstractBlendDrawer;
}();
exports.AbstractBlendDrawer = AbstractBlendDrawer;

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
var abstractBlendDrawer_1 = __webpack_require__(87);
var AddBlendDrawer = /** @class */function (_super) {
    __extends(AddBlendDrawer, _super);
    function AddBlendDrawer(gl) {
        return _super.call(this, gl) || this;
    }
    //language=GLSL
    AddBlendDrawer.prototype.prepare = function (programGen) {
        programGen.setFragmentMainFn("\n            void main(){\n                vec4 srcColor =  texture2D(texture, v_texCoord)*2.0;\n                srcColor.a *= u_alpha;\n                vec4 destColor = texture2D(destTexture, v_destTexCoord.xy);\n                vec4 res = min(srcColor + destColor,vec4(1.0));\n                gl_FragColor = res;\n            }\n        ");
    };
    return AddBlendDrawer;
}(abstractBlendDrawer_1.AbstractBlendDrawer);
exports.AddBlendDrawer = AddBlendDrawer;

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var mat4 = __webpack_require__(8);
var MatrixStack = /** @class */function () {
    function MatrixStack() {
        this.stack = [];
        this.restore();
    }
    MatrixStack.prototype.restore = function () {
        this.stack.pop();
        // Never let the stack be totally empty
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
}();
exports.MatrixStack = MatrixStack;

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
var abstractPrimitive_1 = __webpack_require__(22);
var Circle = /** @class */function (_super) {
    __extends(Circle, _super);
    function Circle() {
        var _this = _super.call(this) || this;
        _this.vertexArr = [];
        //this.indexArr = [];
        //let i = 0;
        var Pi2 = Math.PI * 2;
        _this.vertexArr.push(0.5);
        _this.vertexArr.push(0.5);
        for (var a = 0, max = Pi2; a < max; a += 0.1) {
            _this.vertexArr.push(Math.cos(a) / 2 + 0.5);
            _this.vertexArr.push(Math.sin(a) / 2 + 0.5);
            //this.indexArr.push(i++);
        }
        _this.vertexArr.push(Math.cos(Pi2) / 2 + 0.5);
        _this.vertexArr.push(Math.sin(Pi2) / 2 + 0.5);
        return _this;
    }
    return Circle;
}(abstractPrimitive_1.AbstractPrimitive);
exports.Circle = Circle;

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
var circle_1 = __webpack_require__(90);
var shaderProgram_1 = __webpack_require__(4);
var abstractDrawer_1 = __webpack_require__(7);
var bufferInfo_1 = __webpack_require__(11);
var colorShaderGenerator_1 = __webpack_require__(21);
var CircleDrawer = /** @class */function (_super) {
    __extends(CircleDrawer, _super);
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
}(abstractDrawer_1.AbstractDrawer);
exports.CircleDrawer = CircleDrawer;

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
var abstractPrimitive_1 = __webpack_require__(22);
var Line = /** @class */function (_super) {
    __extends(Line, _super);
    function Line() {
        var _this = _super.call(this) || this;
        _this.vertexArr = [0, 0, 1, 1];
        _this.indexArr = [0, 1];
        return _this;
    }
    return Line;
}(abstractPrimitive_1.AbstractPrimitive);
exports.Line = Line;

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
var line_1 = __webpack_require__(92);
var shaderProgram_1 = __webpack_require__(4);
var bufferInfo_1 = __webpack_require__(11);
var abstractDrawer_1 = __webpack_require__(7);
var colorShaderGenerator_1 = __webpack_require__(21);
var LineDrawer = /** @class */function (_super) {
    __extends(LineDrawer, _super);
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
}(abstractDrawer_1.AbstractDrawer);
exports.LineDrawer = LineDrawer;

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
var plane_1 = __webpack_require__(23);
var shaderProgram_1 = __webpack_require__(4);
var bufferInfo_1 = __webpack_require__(11);
var abstractDrawer_1 = __webpack_require__(7);
var colorShaderGenerator_1 = __webpack_require__(21);
var ColorRectDrawer = /** @class */function (_super) {
    __extends(ColorRectDrawer, _super);
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
}(abstractDrawer_1.AbstractDrawer);
exports.ColorRectDrawer = ColorRectDrawer;

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
var plane_1 = __webpack_require__(23);
var shaderProgram_1 = __webpack_require__(4);
var bufferInfo_1 = __webpack_require__(11);
var abstractDrawer_1 = __webpack_require__(7);
var shaderProgramUtils_1 = __webpack_require__(5);
var texShaderGenerator_1 = __webpack_require__(10);
var TiledSpriteRectDrawer = /** @class */function (_super) {
    __extends(TiledSpriteRectDrawer, _super);
    function TiledSpriteRectDrawer(gl) {
        var _this = _super.call(this, gl) || this;
        _this.primitive = new plane_1.Plane();
        var gen = new texShaderGenerator_1.TexShaderGenerator();
        gen.addFragmentUniform(shaderProgramUtils_1.GL_TYPE.FLOAT_VEC2, 'u_offsetCoords');
        gen.addFragmentUniform(shaderProgramUtils_1.GL_TYPE.FLOAT_VEC4, 'u_frameCoords');
        //language=GLSL
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
}(abstractDrawer_1.AbstractDrawer);
exports.TiledSpriteRectDrawer = TiledSpriteRectDrawer;

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
var point2d_1 = __webpack_require__(3);
var abstractLight_1 = __webpack_require__(43);
var PointLight = /** @class */function (_super) {
    __extends(PointLight, _super);
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
}(abstractLight_1.AbstractLight);
exports.PointLight = PointLight;

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var IndexBuffer = /** @class */function () {
    function IndexBuffer(gl) {
        if (true && !gl) throw "can not create IndexBuffer, gl context not passed to constructor, expected: IndexBuffer(gl)";
        this.gl = gl;
        this.buffer = gl.createBuffer();
        if (true && !this.buffer) throw "can not allocate memory for index buffer";
        this.dataLength = null;
    }
    IndexBuffer.prototype.setData = function (bufferData) {
        if (true) {
            if (!bufferData) throw 'can not set data to buffer: bufferData not specified';
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
}();
exports.IndexBuffer = IndexBuffer;

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var VertexBuffer = /** @class */function () {
    function VertexBuffer(gl) {
        this.bufferItemSize = 0;
        this.bufferItemType = 0;
        this.dataLength = 0;
        if (true && !gl) throw "can not create VertexBuffer, gl context not passed to constructor, expected: VertexBuffer(gl)";
        this.gl = gl;
        this.buffer = gl.createBuffer();
        if (true && !this.buffer) throw "can not allocate memory for vertex buffer";
    }
    VertexBuffer.prototype.setData = function (bufferData, itemType, itemSize) {
        if (true) {
            if (!bufferData) throw 'can not set data to buffer: bufferData not specified';
            if (!itemType) throw 'can not set data to buffer: itemType not specified';
            if (!itemSize) throw 'can not set data to buffer: itemSize not specified';
        }
        var gl = this.gl;
        gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
        // gl.bufferSubData(gl.ARRAY_BUFFER, 0, new Float32Array(bufferSubData));
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(bufferData), gl.STATIC_DRAW); // DYNAMIC_DRAW, STREAM_DRAW
        gl.bindBuffer(gl.ARRAY_BUFFER, null);
        this.bufferItemSize = itemSize;
        this.bufferItemType = itemType; // BYTE, FLOAT, INT, UNSIGNED_SHORT ...
        this.dataLength = bufferData.length;
    };
    VertexBuffer.prototype.setAttrName = function (attrName) {
        this.attrName = attrName;
    };
    VertexBuffer.prototype.bind = function (program) {
        if (true && !program) throw "can not bind VertexBuffer, program not specified";
        if (true && !this.attrName) throw "can not bind VertexBuffer, attribute name not specified";
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
}();
exports.VertexBuffer = VertexBuffer;

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
var spriteRectDrawer_1 = __webpack_require__(19);
var texShaderGenerator_1 = __webpack_require__(10);
var shaderProgram_1 = __webpack_require__(4);
var shaderProgramUtils_1 = __webpack_require__(5);
var lightArray_1 = __webpack_require__(45);
var SpriteRectLightDrawer = /** @class */function (_super) {
    __extends(SpriteRectLightDrawer, _super);
    function SpriteRectLightDrawer(gl) {
        var _this = this;
        var gen = new texShaderGenerator_1.TexShaderGenerator();
        //language=GLSL
        gen.prependFragmentCodeBlock("\n            #define NUM_OF_LIGHT_IN_VIEW " + lightArray_1.LightArray.NUM_OF_LIGHT_IN_VIEW + "\n            struct PointLight {\n                vec2 pos;\n                vec4 color;\n                float nearRadius;\n                float farRadius;\n                bool isOn;\n            };\n            struct AmbientLight {\n                vec4 color;\n                vec3 direction;\n            };\n            struct Material {\n                vec4  ambient;\n                vec4  diffuse;\n                vec4  specular;\n                float shininess;\n            };\n            \n            float distanceAttenuation(PointLight lgt,float dist){\n                float atten = 0.0;\n                if (dist<=lgt.farRadius) {\n                    if (dist<=lgt.nearRadius) atten = 1.0;\n                    else {\n                        float n = dist - lgt.nearRadius;\n                        float d = lgt.farRadius - lgt.nearRadius;\n                        atten = smoothstep(0.0,1.0,1.0 - (n*n)/(d*d));\n                    }\n                }\n                return atten;\n            }\n            \n            float angleAttenuation(PointLight lgt, float dist, vec3 L){\n                float atten = 0.;\n                vec3 lightDir = vec3(-0.6,0.8,1.0);\n                float cosOuter = cos(1.14);\n                float cosInner = cos(0.20);\n                float dropOff = 2.0;\n                float cosL = dot(lightDir,L);\n                float num = cosL - cosOuter;\n                if (num>0.) {\n                    if (cosL > cosInner) atten = 1.;\n                    else {\n                        float denom = cosInner - cosOuter;\n                        atten = smoothstep(0.,1.,pow(num/denom,dropOff));\n                    }\n                }\n                return atten;//* distanceAttenuation(lgt,dist);\n            }\n            \n            vec4 specularResult(Material m, float dotProduct, float dist) {\n                return m.specular * dotProduct * m.shininess / dist;\n            }\n            vec4 diffuseResult(Material m, float dotProduct, vec4 texColor) {\n                return m.diffuse * dotProduct * texColor;\n            }\n            vec4 shadedResult(PointLight lgt, Material m, vec4 N4,vec4 texColor) {\n                vec3 L = vec3(lgt.pos.xy - gl_FragCoord.xy,0.0);\n                float dist = length(L);\n                L = L / dist;\n                float dotProduct = (N4.a>0.)? max(0.0,dot(N4.xyz,L)): 1.;\n                //float atten = distanceAttenuation(lgt,dist);\n                float atten = angleAttenuation(lgt,dist,L);\n                vec4 diffuse = diffuseResult(m, dotProduct, texColor);\n                vec4 specular = specularResult(m, dotProduct, dist);\n                vec4 result = atten * lgt.color * (diffuse + specular);\n                return result;\n            }\n        ");
        // program normal map gen 2 * (color - vec3(0.5))
        gen.addFragmentUniform("PointLight", 'u_pointLights[NUM_OF_LIGHT_IN_VIEW]');
        gen.addFragmentUniform("AmbientLight", 'u_ambientLight');
        gen.addFragmentUniform("Material", 'u_material');
        gen.addFragmentUniform(shaderProgramUtils_1.GL_TYPE.SAMPLER_2D, 'normalTexture');
        gen.addFragmentUniform(shaderProgramUtils_1.GL_TYPE.BOOL, 'u_useNormalMap');
        //language=GLSL
        gen.setFragmentMainFn("\n            void main(){\n                vec4 texColor = texture2D(texture, v_texCoord); // todo u_texture\n                \n                vec4 N4;\n                float dotProduct;\n                if (u_useNormalMap) {\n                    vec4 normal = texture2D(normalTexture,v_texCoord);\n                    vec4 normalMap = (2.0 * normal) - 1.0;\n                    N4 = vec4(normalize(normalMap.xyz),1);\n                    vec3 N = N4.xyz;\n                    dotProduct = max(0.,dot(N,normalize(u_ambientLight.direction))); \n                } else {\n                    N4 = vec4(0.0);\n                    dotProduct = 1.;\n                }\n                   \n               vec4 lightResult = (texColor * u_ambientLight.color) * (u_material.ambient + dotProduct);\n                // * u_ambientLight.intensity\n                \n                if (texColor.a>0.) {\n                    for (int i=0;i<NUM_OF_LIGHT_IN_VIEW;i++) {\n                        if (u_pointLights[i].isOn) lightResult+=shadedResult(\n                            u_pointLights[i], u_material, N4, texColor\n                        );\n                    } \n                }\n                \n                gl_FragColor = lightResult;\n                gl_FragColor.a = texColor.a;\n                gl_FragColor.a *= u_alpha;\n            }\n        ");
        var program = new shaderProgram_1.ShaderProgram(gl, gen.getVertexSource(), gen.getFragmentSource());
        _this = _super.call(this, gl, program) || this;
        return _this;
    }
    return SpriteRectLightDrawer;
}(spriteRectDrawer_1.SpriteRectDrawer);
exports.SpriteRectLightDrawer = SpriteRectLightDrawer;

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
var spriteRectLightDrawer_1 = __webpack_require__(99);
var spriteRectDrawer_1 = __webpack_require__(19);
var tiledSpriteRectDrawer_1 = __webpack_require__(95);
var colorRectDrawer_1 = __webpack_require__(94);
var abstractDrawer_1 = __webpack_require__(7);
var lineDrawer_1 = __webpack_require__(93);
var circleDrawer_1 = __webpack_require__(91);
var frameBuffer_1 = __webpack_require__(42);
var matrixStack_1 = __webpack_require__(89);
var mat4 = __webpack_require__(8);
var matEx = __webpack_require__(1);
var texture_1 = __webpack_require__(41);
var addBlendDrawer_1 = __webpack_require__(88);
var rect_1 = __webpack_require__(0);
var abstractCanvasRenderer_1 = __webpack_require__(84);
var shaderMaterial_1 = __webpack_require__(32);
var size_1 = __webpack_require__(17);
var getCtx = function (el) {
    return el.getContext("webgl", { alpha: false }) || el.getContext('experimental-webgl', { alpha: false }) || el.getContext('webkit-3d', { alpha: false }) || el.getContext('moz-webgl', { alpha: false });
};
var SCENE_DEPTH = 1000;
var matrixStack = new matrixStack_1.MatrixStack();
var makePositionMatrix = function (rect, viewSize) {
    // proj * modelView
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
var FRAME_TO_SCREEN_MATRIX = new matrixStack_1.MatrixStack().scale(1, -1, 1).translate(-1, -1, 0).scale(2, 2, 1).getCurrentMatrix();
//  gl.enable(gl.CULL_FACE);
//  gl.enable(gl.DEPTH_TEST);
var WebGlRenderer = /** @class */function (_super) {
    __extends(WebGlRenderer, _super);
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
        //this.modelDrawer = new ModelDrawer(gl);
        this.addBlendDrawer = new addBlendDrawer_1.AddBlendDrawer(gl);
        this.frameBuffer = new frameBuffer_1.FrameBuffer(gl, this.game.width, this.game.height);
        gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
        gl.enable(gl.BLEND);
        // gl.depthFunc(gl.LEQUAL);
    };
    WebGlRenderer.prototype.draw = function (renderable) {
        //console.log(this.game.camera.getRectScaled(),renderable.getRect(),matEx.overlapTest(this.game.camera.getRectScaled(),renderable.getRect()));
        //this.game.destroy();
        if (!matEx.overlapTest(this.game.camera.getRectScaled(), renderable.getRect())) return;
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
            if (!texturePath) throw "no texture path provided";else throw "can not find texture with path " + texturePath;
        }
        var texInfo = [{ texture: texture, name: 'texture' }];
        var drawableInfo = { blendMode: 'normal', acceptLight: false };
        this.drawTextureInfo(texInfo, drawableInfo, shaderMaterial_1.ShaderMaterial.DEFAULT, srcRect, dstRect);
    };
    WebGlRenderer.prototype.drawImageEx = function (texturePath, srcRect, dstRect, filters, drawableInfo) {
        if (!matEx.overlapTest(this.game.camera.getRectScaled(), dstRect)) return;
        var texture = this.renderableCache[texturePath].texture;
        texture = texture.applyFilters(filters, this.frameBuffer);
        if (true && !texture) {
            if (!texturePath) throw "no texture path provided";else throw "can not find texture with path " + texturePath;
        }
        var texInfo = [{ texture: texture, name: 'texture' }];
        this.drawTextureInfo(texInfo, drawableInfo, shaderMaterial_1.ShaderMaterial.DEFAULT, srcRect, dstRect);
    };
    /**
     *
      |-A-|--------|-B-|
     C|-1-|---2----|-3-|
      |---|--------|---|
      |-4-|   4    |-6-|
      |---|        |---|
      |---|--------|---|
     D|-7-|---8----|-9-|
      |---|--------|---|
     */
    WebGlRenderer.prototype.drawNinePatch = function (texturePath, destRect, filters, drawableInfo, a, b, c, d) {
        var r = rect_1.Rect.fromPool();
        var rDst = rect_1.Rect.fromPool();
        var texSize = this.renderableCache[texturePath].texture.getSize();
        // patch 1
        r.setXYWH(0, 0, a, c);
        rDst.setXYWH(destRect.getPoint().x, destRect.getPoint().y, a, c);
        this.drawImageEx(texturePath, r, rDst, filters, drawableInfo);
        // patch 2
        r.setXYWH(a, 0, texSize.width - a - b, c);
        rDst.setXYWH(destRect.x + a, destRect.y, destRect.width - a - c, c);
        this.drawImageEx(texturePath, r, rDst, filters, drawableInfo);
        // patch 3
        r.setXYWH(texSize.width - b, 0, b, c);
        rDst.setXYWH(destRect.getPoint().x + destRect.width - b, destRect.getPoint().y, b, c);
        this.drawImageEx(texturePath, r, rDst, filters, drawableInfo);
        // patch 4
        r.setXYWH(0, c, a, texSize.height - c - d);
        rDst.setXYWH(destRect.x, destRect.y + c, a, destRect.height - c - d);
        this.drawImageEx(texturePath, r, rDst, filters, drawableInfo);
        // patch 5
        r.setXYWH(a, c, texSize.width - a - b, texSize.height - c - d);
        rDst.setXYWH(destRect.x + a, destRect.y + c, destRect.width - a - b, destRect.height - c - d);
        this.drawImageEx(texturePath, r, rDst, filters, drawableInfo);
        // patch 6
        r.setXYWH(texSize.width - b, c, b, texSize.height - c - d);
        rDst.setXYWH(destRect.x + destRect.width - b, destRect.y + c, b, destRect.height - c - d);
        this.drawImageEx(texturePath, r, rDst, filters, drawableInfo);
        // patch 7
        r.setXYWH(0, texSize.height - d, a, d);
        rDst.setXYWH(destRect.getPoint().x, destRect.getPoint().y + destRect.height - d, a, d);
        this.drawImageEx(texturePath, r, rDst, filters, drawableInfo);
        // patch 8
        r.setXYWH(a, texSize.height - d, texSize.width - a - b, d);
        rDst.setXYWH(destRect.x + a, destRect.y + destRect.height - d, destRect.width - a - b, d);
        this.drawImageEx(texturePath, r, rDst, filters, drawableInfo);
        // patch 9
        r.setXYWH(texSize.width - b, texSize.height - d, b, d);
        rDst.setXYWH(destRect.getPoint().x + destRect.width - b, destRect.getPoint().y + destRect.height - d, b, d);
        this.drawImageEx(texturePath, r, rDst, filters, drawableInfo);
    };
    WebGlRenderer.prototype.drawTextureInfo = function (texInfo, drawableInfo, shaderMaterial, srcRect, dstRect) {
        var camRectScaled = this.game.camera.getRectScaled();
        if (!matEx.overlapTest(camRectScaled, dstRect)) return;
        var scene = this.game.getCurrScene();
        var drawer;
        var uniforms = {
            u_textureMatrix: makeTextureMatrix(srcRect, texInfo[0].texture.getSize()),
            u_vertexMatrix: makePositionMatrix(dstRect, size_1.Size.fromPool().setWH(this.game.width, this.game.height)),
            u_alpha: 1
        };
        if (drawableInfo.blendMode === 'add') drawer = this.addBlendDrawer; // todo extract to separate class method
        else if (drawableInfo.acceptLight || texInfo.length > 1) {
                // todo
                drawer = this.spriteRectLightDrawer;
                uniforms['u_useNormalMap'] = texInfo.length > 1;
                scene.ambientLight.setUniforms(uniforms);
                this.game.lightArray.setUniforms(uniforms);
                shaderMaterial.setUniforms(uniforms);
            } else {
                drawer = this.spriteRectDrawer;
            }
        drawer.draw(texInfo, uniforms, this.frameBuffer);
    };
    WebGlRenderer.prototype.drawTiledImage = function (texturePath, srcRect, dstRect, offset) {
        //this.gl.blendFunc(this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA);
        //gl.blendColor(0, 0.5, 1, 1);
        var texture = this.renderableCache[texturePath].texture;
        if (true && !texture) {
            if (!texturePath) throw "no texture path provided";else throw "can not find texture with path " + texturePath;
        }
        var uniforms = {
            u_textureMatrix: makeTextureMatrix(rect_1.Rect.fromPool().setXYWH(0, 0, dstRect.width, dstRect.height), texture.getSize()),
            u_vertexMatrix: makePositionMatrix(dstRect, size_1.Size.fromPool().setWH(this.game.width, this.game.height)),
            u_frameCoords: [srcRect.x / texture.size.width, srcRect.y / texture.size.height, srcRect.width / texture.size.width, srcRect.height / texture.size.height],
            u_offsetCoords: [offset.x / srcRect.width, offset.y / srcRect.height],
            u_alpha: 1
        };
        var texInfo = [{ texture: texture, name: 'texture' }];
        this.tiledSpriteRectDrawer.draw(texInfo, uniforms, null);
    };
    WebGlRenderer.prototype.fillRect = function (rect, color) {
        if (!matEx.overlapTest(this.game.camera.getRectScaled(), rect)) return;
        var uniforms = {
            u_vertexMatrix: makePositionMatrix(rect, size_1.Size.fromPool().setWH(this.game.width, this.game.height)),
            u_rgba: color.asGL()
        };
        //gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
        this.colorRectDrawer.draw(null, uniforms, null);
    };
    WebGlRenderer.prototype.drawRect = function (rect, color, lineWidth) {
        var r = rect_1.Rect.fromPool();
        var _a = [rect.x, rect.y, rect.width, rect.height],
            x = _a[0],
            y = _a[1],
            w = _a[2],
            h = _a[3];
        this.fillRect(r.setXYWH(x, y, w, lineWidth), color);
        this.fillRect(r.setXYWH(x, y + h - lineWidth, w, lineWidth), color);
        this.fillRect(r.setXYWH(x, y, lineWidth, h - lineWidth), color);
        this.fillRect(r.setXYWH(x + w, y, lineWidth, h), color);
    };
    WebGlRenderer.prototype.drawLine = function (x1, y1, x2, y2, color) {
        var dx = x2 - x1,
            dy = y2 - y1;
        //if (!matEx.overlapTest(this.game.camera.getRectScaled(),new Rect(x1,y1,dx,dy))) return;
        var uniforms = {};
        uniforms.u_vertexMatrix = makePositionMatrix(rect_1.Rect.fromPool().setXYWH(x1, y1, dx, dy), size_1.Size.fromPool().setWH(this.game.width, this.game.height));
        uniforms.u_rgba = color.asGL();
        //gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
        this.lineDrawer.draw(null, uniforms, null);
    };
    WebGlRenderer.prototype.fillCircle = function (x, y, r, color) {
        var r2 = r * 2;
        if (!matEx.overlapTest(this.game.camera.getRectScaled(), rect_1.Rect.fromPool().setXYWH(x - r, y - r, r2, r2))) return;
        var uniforms = {};
        uniforms['u_vertexMatrix'] = makePositionMatrix(new rect_1.Rect(x - r, y - r, r2, r2), new size_1.Size(this.game.width, this.game.height) // tofo
        );
        uniforms['u_rgba'] = color.asGL();
        //gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
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
        //this.gl.clearDepth(1.);
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
        var texInfo = [{ texture: texToDraw, name: 'texture' }]; // todo now to make this array reusable?
        this.spriteRectDrawer.draw(texInfo, uniforms, null);
        //this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA);
        this.restore();
    };
    ;
    WebGlRenderer.prototype.getError = function () {
        if (false) {}
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
}(abstractCanvasRenderer_1.AbstractCanvasRenderer);
exports.WebGlRenderer = WebGlRenderer;

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
//import {HtmlRenderer as Renderer} from './dom/htmlRenderer'
//import {CanvasRenderer as Renderer} from './canvas/canvasRenderer'
var webGlRenderer_1 = __webpack_require__(100);
//import Renderer from './dom/svgRenderer'
var RendererFactory = /** @class */function () {
    function RendererFactory() {}
    RendererFactory.getRenderer = function (game) {
        if (!game) throw "RendererFactory::getRenderer: game param not specified";
        return new webGlRenderer_1.WebGlRenderer(game);
    };
    return RendererFactory;
}();
exports.RendererFactory = RendererFactory;

/***/ }),
/* 102 */
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
window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || function (f) {
    setTimeout(f, 17);
};
if (!window.cancelAnimationFrame) {
    window.cancelAnimationFrame = function (id) {
        return clearTimeout(id);
    };
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
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(102);
var baseAbstractBehaviour_1 = __webpack_require__(24);
var rendererFactory_1 = __webpack_require__(101);
var repository_1 = __webpack_require__(78);
var mouse_1 = __webpack_require__(40);
var keyboard_1 = __webpack_require__(60);
var gamePad_1 = __webpack_require__(59);
var decorators_1 = __webpack_require__(12);
var commonObject_1 = __webpack_require__(13);
var camera_1 = __webpack_require__(25);
var consts_1 = __webpack_require__(33);
var point2d_1 = __webpack_require__(3);
var lightArray_1 = __webpack_require__(45);
var uiBuilder_1 = __webpack_require__(58);
var colliderEngine_1 = __webpack_require__(57);
var MathEx = __webpack_require__(1);
var global_1 = __webpack_require__(2);
var Game = /** @class */function (_super) {
    __extends(Game, _super);
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
        if (true) window['game'] = _this;
        // todo
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
        if (this._cnt > 10) throw 'too many logs';
    };
    Game.prototype.runScene = function (scene) {
        var _this = this;
        if (true && !this._revalidated) throw "game.revalidate() method not invoked. Invoke game.fromJSON(gameParams) or call game.revalidate() method directly";
        this._currentScene = scene;
        if (true) {
            var allScripts_1 = __webpack_require__(56);
            var sceneBhScriptName = "" + scene.name[0].toUpperCase() + scene.name.substr(1) + "Behaviour";
            var BhClass = allScripts_1[sceneBhScriptName];
            if (sceneBhScriptName) scene.setIndividualBehaviour(new BhClass());
            scene.layers.forEach(function (l) {
                l.children.forEach(function (go) {
                    go.setCommonBehaviour();
                    var scriptName = "" + go.name[0].toUpperCase() + go.name.substr(1) + "Behaviour";
                    var BhClass = allScripts_1[scriptName];
                    if (BhClass && !go.getIndividualBehaviour()) go.setIndividualBehaviour(new BhClass());
                });
            });
        }
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
        if (this.destroyed) return;
        this._lastTime = this._currTime;
        this._currTime = Date.now();
        var currTimeCopy = this._currTime;
        if (!this._lastTime) this._lastTime = this._currTime;
        this._deltaTime = this._currTime - this._lastTime;
        if (true) {
            this.fps = ~~(1000 / this._deltaTime);
            window.fps = this.fps;
            var renderError = this.renderer.getError();
            if (renderError) throw "render error with code " + renderError;
        }
        var dTime = Math.min(this._deltaTime, Game_1.UPDATE_TIME_RATE);
        var numOfLoops = 1; //(~~(this._deltaTime / Game.UPDATE_TIME_RATE))||1;
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
                // to avoid to much iterations
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
        var lastTimeout = setTimeout(function () {}, 0);
        //noinspection TypeScriptValidateTypes
        var lastInterval = setInterval(function () {}, 0);
        var delta = 16;
        var lastMaxVal = Math.max(lastTimeout, lastInterval) + delta;
        for (var i = 0; i < lastMaxVal; i++) {
            clearInterval(i);
            clearTimeout(i);
        }
    };
    var Game_1;
    Game.UPDATE_TIME_RATE = 20;
    Game = Game_1 = __decorate([decorators_1.Transient({
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
    })], Game);
    return Game;
}(commonObject_1.CommonObject);
exports.Game = Game;

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var game_1 = __webpack_require__(103);
var gameProps_1 = __webpack_require__(53);
var repository_1 = __webpack_require__(52);
if (true && gameProps_1.gameProps.startSceneId === undefined) throw 'start scene not specified';
var game = new game_1.Game();
game.fromJSON(gameProps_1.gameProps);
game.repository.setDescriptions(repository_1.repository);
if (true) {
    game.repository.embeddedResources = __webpack_require__(51).embeddedResources;
}
var startScene = game.repository.getObject(gameProps_1.gameProps.startSceneId, 'Scene');
game.runScene(startScene);

/***/ })
/******/ ]);