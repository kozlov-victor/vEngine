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
    "resources/button.png": "data:image/png;base64,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",
    "resources/pirate.png": "data:image/png;base64,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",
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
        "fontSize": 43,
        "fontFamily": "Times New Roman",
        "fontContext": {
            "symbols": {
                "0": {
                    "x": 116,
                    "y": 60,
                    "width": 21,
                    "height": 48
                },
                "1": {
                    "x": 145,
                    "y": 60,
                    "width": 21,
                    "height": 48
                },
                "2": {
                    "x": 175,
                    "y": 60,
                    "width": 21,
                    "height": 48
                },
                "3": {
                    "x": 204,
                    "y": 60,
                    "width": 21,
                    "height": 48
                },
                "4": {
                    "x": 234,
                    "y": 60,
                    "width": 21,
                    "height": 48
                },
                "5": {
                    "x": 263,
                    "y": 60,
                    "width": 21,
                    "height": 48
                },
                "6": {
                    "x": 293,
                    "y": 60,
                    "width": 21,
                    "height": 48
                },
                "7": {
                    "x": 4,
                    "y": 116,
                    "width": 21,
                    "height": 48
                },
                "8": {
                    "x": 33,
                    "y": 116,
                    "width": 21,
                    "height": 48
                },
                "9": {
                    "x": 63,
                    "y": 116,
                    "width": 21,
                    "height": 48
                },
                " ": {
                    "x": 4,
                    "y": 4,
                    "width": 10,
                    "height": 48
                },
                "!": {
                    "x": 22,
                    "y": 4,
                    "width": 14,
                    "height": 48
                },
                "\"": {
                    "x": 45,
                    "y": 4,
                    "width": 17,
                    "height": 48
                },
                "#": {
                    "x": 70,
                    "y": 4,
                    "width": 21,
                    "height": 48
                },
                "$": {
                    "x": 100,
                    "y": 4,
                    "width": 21,
                    "height": 48
                },
                "%": {
                    "x": 129,
                    "y": 4,
                    "width": 35,
                    "height": 48
                },
                "&": {
                    "x": 173,
                    "y": 4,
                    "width": 33,
                    "height": 48
                },
                "'": {
                    "x": 214,
                    "y": 4,
                    "width": 7,
                    "height": 48
                },
                "(": {
                    "x": 230,
                    "y": 4,
                    "width": 14,
                    "height": 48
                },
                ")": {
                    "x": 252,
                    "y": 4,
                    "width": 14,
                    "height": 48
                },
                "*": {
                    "x": 275,
                    "y": 4,
                    "width": 21,
                    "height": 48
                },
                "+": {
                    "x": 4,
                    "y": 60,
                    "width": 24,
                    "height": 48
                },
                ",": {
                    "x": 36,
                    "y": 60,
                    "width": 10,
                    "height": 48
                },
                "-": {
                    "x": 55,
                    "y": 60,
                    "width": 14,
                    "height": 48
                },
                ".": {
                    "x": 77,
                    "y": 60,
                    "width": 10,
                    "height": 48
                },
                "/": {
                    "x": 96,
                    "y": 60,
                    "width": 11,
                    "height": 48
                },
                ":": {
                    "x": 92,
                    "y": 116,
                    "width": 11,
                    "height": 48
                },
                ";": {
                    "x": 112,
                    "y": 116,
                    "width": 11,
                    "height": 48
                },
                "<": {
                    "x": 132,
                    "y": 116,
                    "width": 24,
                    "height": 48
                },
                "=": {
                    "x": 164,
                    "y": 116,
                    "width": 24,
                    "height": 48
                },
                ">": {
                    "x": 196,
                    "y": 116,
                    "width": 24,
                    "height": 48
                },
                "?": {
                    "x": 229,
                    "y": 116,
                    "width": 19,
                    "height": 48
                },
                "@": {
                    "x": 256,
                    "y": 116,
                    "width": 39,
                    "height": 48
                },
                "A": {
                    "x": 4,
                    "y": 172,
                    "width": 31,
                    "height": 48
                },
                "B": {
                    "x": 43,
                    "y": 172,
                    "width": 28,
                    "height": 48
                },
                "C": {
                    "x": 79,
                    "y": 172,
                    "width": 28,
                    "height": 48
                },
                "D": {
                    "x": 116,
                    "y": 172,
                    "width": 31,
                    "height": 48
                },
                "E": {
                    "x": 155,
                    "y": 172,
                    "width": 26,
                    "height": 48
                },
                "F": {
                    "x": 189,
                    "y": 172,
                    "width": 23,
                    "height": 48
                },
                "G": {
                    "x": 221,
                    "y": 172,
                    "width": 31,
                    "height": 48
                },
                "H": {
                    "x": 260,
                    "y": 172,
                    "width": 31,
                    "height": 48
                },
                "I": {
                    "x": 299,
                    "y": 172,
                    "width": 14,
                    "height": 48
                },
                "J": {
                    "x": 4,
                    "y": 228,
                    "width": 16,
                    "height": 48
                },
                "K": {
                    "x": 28,
                    "y": 228,
                    "width": 31,
                    "height": 48
                },
                "L": {
                    "x": 67,
                    "y": 228,
                    "width": 26,
                    "height": 48
                },
                "M": {
                    "x": 102,
                    "y": 228,
                    "width": 38,
                    "height": 48
                },
                "N": {
                    "x": 148,
                    "y": 228,
                    "width": 31,
                    "height": 48
                },
                "O": {
                    "x": 187,
                    "y": 228,
                    "width": 31,
                    "height": 48
                },
                "P": {
                    "x": 226,
                    "y": 228,
                    "width": 23,
                    "height": 48
                },
                "Q": {
                    "x": 258,
                    "y": 228,
                    "width": 31,
                    "height": 48
                },
                "R": {
                    "x": 4,
                    "y": 284,
                    "width": 28,
                    "height": 48
                },
                "S": {
                    "x": 40,
                    "y": 284,
                    "width": 23,
                    "height": 48
                },
                "T": {
                    "x": 72,
                    "y": 284,
                    "width": 26,
                    "height": 48
                },
                "U": {
                    "x": 106,
                    "y": 284,
                    "width": 31,
                    "height": 48
                },
                "V": {
                    "x": 145,
                    "y": 284,
                    "width": 31,
                    "height": 48
                },
                "W": {
                    "x": 184,
                    "y": 284,
                    "width": 40,
                    "height": 48
                },
                "X": {
                    "x": 233,
                    "y": 284,
                    "width": 31,
                    "height": 48
                },
                "Y": {
                    "x": 272,
                    "y": 284,
                    "width": 31,
                    "height": 48
                },
                "Z": {
                    "x": 4,
                    "y": 340,
                    "width": 26,
                    "height": 48
                },
                "[": {
                    "x": 38,
                    "y": 340,
                    "width": 14,
                    "height": 48
                },
                "\\": {
                    "x": 60,
                    "y": 340,
                    "width": 11,
                    "height": 48
                },
                "]": {
                    "x": 80,
                    "y": 340,
                    "width": 14,
                    "height": 48
                },
                "^": {
                    "x": 102,
                    "y": 340,
                    "width": 20,
                    "height": 48
                },
                "_": {
                    "x": 131,
                    "y": 340,
                    "width": 21,
                    "height": 48
                },
                "`": {
                    "x": 160,
                    "y": 340,
                    "width": 14,
                    "height": 48
                },
                "a": {
                    "x": 182,
                    "y": 340,
                    "width": 19,
                    "height": 48
                },
                "b": {
                    "x": 209,
                    "y": 340,
                    "width": 21,
                    "height": 48
                },
                "c": {
                    "x": 239,
                    "y": 340,
                    "width": 19,
                    "height": 48
                },
                "d": {
                    "x": 266,
                    "y": 340,
                    "width": 21,
                    "height": 48
                },
                "e": {
                    "x": 296,
                    "y": 340,
                    "width": 19,
                    "height": 48
                },
                "f": {
                    "x": 4,
                    "y": 396,
                    "width": 14,
                    "height": 48
                },
                "g": {
                    "x": 26,
                    "y": 396,
                    "width": 21,
                    "height": 48
                },
                "h": {
                    "x": 55,
                    "y": 396,
                    "width": 21,
                    "height": 48
                },
                "i": {
                    "x": 85,
                    "y": 396,
                    "width": 11,
                    "height": 48
                },
                "j": {
                    "x": 105,
                    "y": 396,
                    "width": 11,
                    "height": 48
                },
                "k": {
                    "x": 125,
                    "y": 396,
                    "width": 21,
                    "height": 48
                },
                "l": {
                    "x": 154,
                    "y": 396,
                    "width": 11,
                    "height": 48
                },
                "m": {
                    "x": 174,
                    "y": 396,
                    "width": 33,
                    "height": 48
                },
                "n": {
                    "x": 216,
                    "y": 396,
                    "width": 21,
                    "height": 48
                },
                "o": {
                    "x": 245,
                    "y": 396,
                    "width": 21,
                    "height": 48
                },
                "p": {
                    "x": 275,
                    "y": 396,
                    "width": 21,
                    "height": 48
                },
                "q": {
                    "x": 4,
                    "y": 452,
                    "width": 21,
                    "height": 48
                },
                "r": {
                    "x": 33,
                    "y": 452,
                    "width": 14,
                    "height": 48
                },
                "s": {
                    "x": 55,
                    "y": 452,
                    "width": 16,
                    "height": 48
                },
                "t": {
                    "x": 80,
                    "y": 452,
                    "width": 11,
                    "height": 48
                },
                "u": {
                    "x": 100,
                    "y": 452,
                    "width": 21,
                    "height": 48
                },
                "v": {
                    "x": 130,
                    "y": 452,
                    "width": 21,
                    "height": 48
                },
                "w": {
                    "x": 159,
                    "y": 452,
                    "width": 31,
                    "height": 48
                },
                "x": {
                    "x": 198,
                    "y": 452,
                    "width": 21,
                    "height": 48
                },
                "y": {
                    "x": 228,
                    "y": 452,
                    "width": 21,
                    "height": 48
                },
                "z": {
                    "x": 257,
                    "y": 452,
                    "width": 19,
                    "height": 48
                },
                "{": {
                    "x": 284,
                    "y": 452,
                    "width": 20,
                    "height": 48
                },
                "|": {
                    "x": 4,
                    "y": 508,
                    "width": 8,
                    "height": 48
                },
                "}": {
                    "x": 20,
                    "y": 508,
                    "width": 20,
                    "height": 48
                },
                "~": {
                    "x": 49,
                    "y": 508,
                    "width": 23,
                    "height": 48
                },
                "": {
                    "x": 80,
                    "y": 508,
                    "width": 21,
                    "height": 48
                },
                "": {
                    "x": 110,
                    "y": 508,
                    "width": 0,
                    "height": 48
                },
                "": {
                    "x": 118,
                    "y": 508,
                    "width": 0,
                    "height": 48
                },
                "": {
                    "x": 126,
                    "y": 508,
                    "width": 21,
                    "height": 48
                },
                "": {
                    "x": 155,
                    "y": 508,
                    "width": 21,
                    "height": 48
                },
                "": {
                    "x": 185,
                    "y": 508,
                    "width": 21,
                    "height": 48
                },
                "": {
                    "x": 214,
                    "y": 508,
                    "width": 33,
                    "height": 48
                },
                "": {
                    "x": 256,
                    "y": 508,
                    "width": 21,
                    "height": 48
                },
                "": {
                    "x": 285,
                    "y": 508,
                    "width": 21,
                    "height": 48
                },
                "": {
                    "x": 4,
                    "y": 564,
                    "width": 15,
                    "height": 48
                },
                "": {
                    "x": 27,
                    "y": 564,
                    "width": 33,
                    "height": 48
                },
                "": {
                    "x": 69,
                    "y": 564,
                    "width": 20,
                    "height": 48
                },
                "": {
                    "x": 98,
                    "y": 564,
                    "width": 21,
                    "height": 48
                },
                "": {
                    "x": 127,
                    "y": 564,
                    "width": 42,
                    "height": 48
                },
                "": {
                    "x": 178,
                    "y": 564,
                    "width": 0,
                    "height": 48
                },
                "": {
                    "x": 186,
                    "y": 564,
                    "width": 0,
                    "height": 48
                },
                "": {
                    "x": 194,
                    "y": 564,
                    "width": 0,
                    "height": 48
                },
                "": {
                    "x": 202,
                    "y": 564,
                    "width": 0,
                    "height": 48
                },
                "": {
                    "x": 210,
                    "y": 564,
                    "width": 8,
                    "height": 48
                },
                "": {
                    "x": 227,
                    "y": 564,
                    "width": 8,
                    "height": 48
                },
                "": {
                    "x": 243,
                    "y": 564,
                    "width": 18,
                    "height": 48
                },
                "": {
                    "x": 269,
                    "y": 564,
                    "width": 18,
                    "height": 48
                },
                "": {
                    "x": 295,
                    "y": 564,
                    "width": 0,
                    "height": 48
                },
                "А": {
                    "x": 4,
                    "y": 620,
                    "width": 31,
                    "height": 48
                },
                "Б": {
                    "x": 43,
                    "y": 620,
                    "width": 24,
                    "height": 48
                },
                "В": {
                    "x": 75,
                    "y": 620,
                    "width": 28,
                    "height": 48
                },
                "Г": {
                    "x": 112,
                    "y": 620,
                    "width": 24,
                    "height": 48
                },
                "Д": {
                    "x": 145,
                    "y": 620,
                    "width": 29,
                    "height": 48
                },
                "Е": {
                    "x": 182,
                    "y": 620,
                    "width": 26,
                    "height": 48
                },
                "Ж": {
                    "x": 216,
                    "y": 620,
                    "width": 38,
                    "height": 48
                },
                "З": {
                    "x": 263,
                    "y": 620,
                    "width": 21,
                    "height": 48
                },
                "И": {
                    "x": 4,
                    "y": 676,
                    "width": 31,
                    "height": 48
                },
                "Й": {
                    "x": 43,
                    "y": 676,
                    "width": 31,
                    "height": 48
                },
                "К": {
                    "x": 82,
                    "y": 676,
                    "width": 28,
                    "height": 48
                },
                "Л": {
                    "x": 118,
                    "y": 676,
                    "width": 29,
                    "height": 48
                },
                "М": {
                    "x": 155,
                    "y": 676,
                    "width": 38,
                    "height": 48
                },
                "Н": {
                    "x": 202,
                    "y": 676,
                    "width": 31,
                    "height": 48
                },
                "О": {
                    "x": 241,
                    "y": 676,
                    "width": 31,
                    "height": 48
                },
                "П": {
                    "x": 280,
                    "y": 676,
                    "width": 31,
                    "height": 48
                },
                "Р": {
                    "x": 4,
                    "y": 732,
                    "width": 23,
                    "height": 48
                },
                "С": {
                    "x": 35,
                    "y": 732,
                    "width": 28,
                    "height": 48
                },
                "Т": {
                    "x": 72,
                    "y": 732,
                    "width": 26,
                    "height": 48
                },
                "У": {
                    "x": 106,
                    "y": 732,
                    "width": 30,
                    "height": 48
                },
                "Ф": {
                    "x": 145,
                    "y": 732,
                    "width": 33,
                    "height": 48
                },
                "Х": {
                    "x": 187,
                    "y": 732,
                    "width": 31,
                    "height": 48
                },
                "Ц": {
                    "x": 226,
                    "y": 732,
                    "width": 31,
                    "height": 48
                },
                "Ч": {
                    "x": 265,
                    "y": 732,
                    "width": 27,
                    "height": 48
                },
                "Ш": {
                    "x": 4,
                    "y": 788,
                    "width": 43,
                    "height": 48
                },
                "Щ": {
                    "x": 55,
                    "y": 788,
                    "width": 43,
                    "height": 48
                },
                "Ъ": {
                    "x": 106,
                    "y": 788,
                    "width": 30,
                    "height": 48
                },
                "Ы": {
                    "x": 145,
                    "y": 788,
                    "width": 37,
                    "height": 48
                },
                "Ь": {
                    "x": 190,
                    "y": 788,
                    "width": 24,
                    "height": 48
                },
                "Э": {
                    "x": 223,
                    "y": 788,
                    "width": 28,
                    "height": 48
                },
                "Ю": {
                    "x": 259,
                    "y": 788,
                    "width": 44,
                    "height": 48
                },
                "Я": {
                    "x": 4,
                    "y": 844,
                    "width": 28,
                    "height": 48
                },
                "а": {
                    "x": 40,
                    "y": 844,
                    "width": 19,
                    "height": 48
                },
                "б": {
                    "x": 67,
                    "y": 844,
                    "width": 21,
                    "height": 48
                },
                "в": {
                    "x": 97,
                    "y": 844,
                    "width": 20,
                    "height": 48
                },
                "г": {
                    "x": 125,
                    "y": 844,
                    "width": 17,
                    "height": 48
                },
                "д": {
                    "x": 151,
                    "y": 844,
                    "width": 21,
                    "height": 48
                },
                "е": {
                    "x": 181,
                    "y": 844,
                    "width": 19,
                    "height": 48
                },
                "ж": {
                    "x": 208,
                    "y": 844,
                    "width": 29,
                    "height": 48
                },
                "з": {
                    "x": 246,
                    "y": 844,
                    "width": 16,
                    "height": 48
                },
                "и": {
                    "x": 271,
                    "y": 844,
                    "width": 23,
                    "height": 48
                },
                "й": {
                    "x": 4,
                    "y": 900,
                    "width": 23,
                    "height": 48
                },
                "к": {
                    "x": 35,
                    "y": 900,
                    "width": 20,
                    "height": 48
                },
                "л": {
                    "x": 63,
                    "y": 900,
                    "width": 21,
                    "height": 48
                },
                "м": {
                    "x": 93,
                    "y": 900,
                    "width": 27,
                    "height": 48
                },
                "н": {
                    "x": 128,
                    "y": 900,
                    "width": 23,
                    "height": 48
                },
                "о": {
                    "x": 159,
                    "y": 900,
                    "width": 21,
                    "height": 48
                },
                "п": {
                    "x": 189,
                    "y": 900,
                    "width": 23,
                    "height": 48
                },
                "р": {
                    "x": 220,
                    "y": 900,
                    "width": 21,
                    "height": 48
                },
                "с": {
                    "x": 249,
                    "y": 900,
                    "width": 19,
                    "height": 48
                },
                "т": {
                    "x": 276,
                    "y": 900,
                    "width": 18,
                    "height": 48
                },
                "у": {
                    "x": 4,
                    "y": 956,
                    "width": 21,
                    "height": 48
                },
                "ф": {
                    "x": 33,
                    "y": 956,
                    "width": 27,
                    "height": 48
                },
                "х": {
                    "x": 69,
                    "y": 956,
                    "width": 21,
                    "height": 48
                },
                "ц": {
                    "x": 98,
                    "y": 956,
                    "width": 23,
                    "height": 48
                },
                "ч": {
                    "x": 129,
                    "y": 956,
                    "width": 21,
                    "height": 48
                },
                "ш": {
                    "x": 159,
                    "y": 956,
                    "width": 33,
                    "height": 48
                },
                "щ": {
                    "x": 200,
                    "y": 956,
                    "width": 33,
                    "height": 48
                },
                "ъ": {
                    "x": 241,
                    "y": 956,
                    "width": 22,
                    "height": 48
                },
                "ы": {
                    "x": 271,
                    "y": 956,
                    "width": 28,
                    "height": 48
                },
                "ь": {
                    "x": 4,
                    "y": 1012,
                    "width": 19,
                    "height": 48
                },
                "э": {
                    "x": 31,
                    "y": 1012,
                    "width": 18,
                    "height": 48
                },
                "ю": {
                    "x": 58,
                    "y": 1012,
                    "width": 32,
                    "height": 48
                },
                "я": {
                    "x": 98,
                    "y": 1012,
                    "width": 19,
                    "height": 48
                },
                "ѐ": {
                    "x": 125,
                    "y": 1012,
                    "width": 19,
                    "height": 48
                },
                "ё": {
                    "x": 153,
                    "y": 1012,
                    "width": 19,
                    "height": 48
                },
                "ђ": {
                    "x": 180,
                    "y": 1012,
                    "width": 20,
                    "height": 48
                },
                "ѓ": {
                    "x": 208,
                    "y": 1012,
                    "width": 17,
                    "height": 48
                },
                "є": {
                    "x": 234,
                    "y": 1012,
                    "width": 18,
                    "height": 48
                },
                "ѕ": {
                    "x": 260,
                    "y": 1012,
                    "width": 16,
                    "height": 48
                },
                "і": {
                    "x": 285,
                    "y": 1012,
                    "width": 11,
                    "height": 48
                },
                "ї": {
                    "x": 4,
                    "y": 1068,
                    "width": 11,
                    "height": 48
                },
                "ј": {
                    "x": 23,
                    "y": 1068,
                    "width": 11,
                    "height": 48
                },
                "љ": {
                    "x": 43,
                    "y": 1068,
                    "width": 31,
                    "height": 48
                },
                "њ": {
                    "x": 83,
                    "y": 1068,
                    "width": 31,
                    "height": 48
                },
                "ћ": {
                    "x": 122,
                    "y": 1068,
                    "width": 21,
                    "height": 48
                }
            },
            "width": 320,
            "height": 1120
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
                Button: {
                    pos: { x: 12, y: 30 },
                    font: { type: 'Font', name: 'scriptFont' },
                    text: "123",
                    paddings: 50,
                    background: {
                        type: 'NinePatchImage',
                        resourceMap: { main: 'resources/button.png' },
                        ABCD: 45
                    }
                    // onClick: ()=>{
                    //     console.log('clicked',this);
                    // }
                }
            });
            this.scene.appendChild(widget);
            console.log(widget);
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
                    obj[propName] = _this.game.repository.getArray(obj[propName].type).find(function (it) {
                        return it.name == obj[propName].name;
                    });
                    if (!obj[propName]) throw "can not find object {type:" + obj[propName].type + ",name:" + obj[propName].type + "}";
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
    // revalidate(){
    //     super.revalidate();
    //     let s = this.fontContext.symbols;
    //     this.fontContext.symbols = {};
    //     Object.keys(s).forEach(key=>{
    //         if (DEBUG) {
    //             if (!s[key]) {
    //                 console.error(s);
    //                 throw `can not find proper object for key ${key}`;
    //             }
    //         }
    //         this.fontContext.symbols[key] = new Rect(s[key].x,s[key].y,s[key].width,s[key].height);
    //     });
    // }  // todo is it really need???
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
        _this.drawingRect = new rect_1.Rect(); // todo need?
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
        if (this.game.scaleStrategy === consts_1.SCALE_STRATEGY.NO_SCALE) return;
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
        if (!matEx.overlapTest(camRectScaled, rect_1.Rect.fromPool().setXYWH(camRectScaled.x + srcRect.x, camRectScaled.y + srcRect.y, srcRect.width, srcRect.height))) return;
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