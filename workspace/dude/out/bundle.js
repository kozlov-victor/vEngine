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
/******/ 	return __webpack_require__(__webpack_require__.s = 47);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
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
var size_1 = __webpack_require__(14);
var point2d_1 = __webpack_require__(3);
var objectPool_1 = __webpack_require__(10);
var global_1 = __webpack_require__(1);
var observableEntity_1 = __webpack_require__(27);
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
exports._global = {};

/***/ }),
/* 2 */
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
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
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
var objectPool_1 = __webpack_require__(10);
var observableEntity_1 = __webpack_require__(27);
var global_1 = __webpack_require__(1);
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


Object.defineProperty(exports, "__esModule", { value: true });
var mat4 = __webpack_require__(11);
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
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
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
var timer_1 = __webpack_require__(69);
var commonObject_1 = __webpack_require__(18);
var tween_1 = __webpack_require__(32);
var eventEmitter_1 = __webpack_require__(33);
var decorators_1 = __webpack_require__(19);
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
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var vertexBuffer_1 = __webpack_require__(53);
var indexBuffer_1 = __webpack_require__(54);
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
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
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
var shaderGenerator_1 = __webpack_require__(25);
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
/* 10 */
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
/* 11 */
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
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
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
var plane_1 = __webpack_require__(21);
var shaderProgram_1 = __webpack_require__(2);
var abstractDrawer_1 = __webpack_require__(6);
var bufferInfo_1 = __webpack_require__(8);
var texShaderGenerator_1 = __webpack_require__(9);
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
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var objectPool_1 = __webpack_require__(10);
var global_1 = __webpack_require__(1);
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
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var objectPool_1 = __webpack_require__(10);
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
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
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
var container_1 = __webpack_require__(16);
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
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
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
var mouse_1 = __webpack_require__(31);
var renderableModel_1 = __webpack_require__(24);
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
        var allUIRenderable = __webpack_require__(34);
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
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
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
var baseModel_1 = __webpack_require__(7);
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
/* 18 */
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
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
exports.Transient = function (params) {
    return function (target) {
        target.transient = params;
    };
};

/***/ }),
/* 20 */
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
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
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
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
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
var shaderGenerator_1 = __webpack_require__(25);
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
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
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
var resource_1 = __webpack_require__(17);
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
/* 25 */
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
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var pointLight_1 = __webpack_require__(55);
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
/* 27 */
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
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var color_1 = __webpack_require__(13);
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
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var texture_1 = __webpack_require__(30);
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
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var frameBuffer_1 = __webpack_require__(29);
var size_1 = __webpack_require__(14);
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
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
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
var mathEx = __webpack_require__(4);
var point2d_1 = __webpack_require__(3);
var objectPool_1 = __webpack_require__(10);
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
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var mathEx = __webpack_require__(4);
var global_1 = __webpack_require__(1);
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
/* 33 */
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
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var button_1 = __webpack_require__(35);
exports.Button = button_1.Button;
var textField_1 = __webpack_require__(15);
exports.TextField = textField_1.TextField;
var container_1 = __webpack_require__(16);
exports.Container = container_1.Container;
var image_1 = __webpack_require__(36);
exports.Image = image_1.Image;
var rectangle_1 = __webpack_require__(70);
exports.Rectangle = rectangle_1.Rectangle;
var ninePatchImage_1 = __webpack_require__(71);
exports.NinePatchImage = ninePatchImage_1.NinePatchImage;
var absoluteLayout_1 = __webpack_require__(37);
exports.AbsoluteLayout = absoluteLayout_1.AbsoluteLayout;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
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
var container_1 = __webpack_require__(16);
var textField_1 = __webpack_require__(15);
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
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
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
var resource_1 = __webpack_require__(17);
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
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
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
var container_1 = __webpack_require__(16);
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
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var SCALE_STRATEGY;
(function (SCALE_STRATEGY) {
    SCALE_STRATEGY[SCALE_STRATEGY["NO_SCALE"] = 0] = "NO_SCALE";
    SCALE_STRATEGY[SCALE_STRATEGY["FIT"] = 1] = "FIT";
})(SCALE_STRATEGY = exports.SCALE_STRATEGY || (exports.SCALE_STRATEGY = {}));

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var color_1 = __webpack_require__(13);
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
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
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
var shaderMaterial_1 = __webpack_require__(39);
var renderableModel_1 = __webpack_require__(24);
var global_1 = __webpack_require__(1);
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
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
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
var baseAbstractBehaviour_1 = __webpack_require__(20);
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
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
exports.noop = function () {};

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
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
var rigidShapes_1 = __webpack_require__(44);
var commonObject_1 = __webpack_require__(18);
var decorators_1 = __webpack_require__(19);
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
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
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
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
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
var baseModel_1 = __webpack_require__(7);
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
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var tween_1 = __webpack_require__(32);
var mat4 = __webpack_require__(11);
var mathEx = __webpack_require__(4);
var rect_1 = __webpack_require__(0);
var point2d_1 = __webpack_require__(3);
var mathEx_1 = __webpack_require__(4);
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
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var game_1 = __webpack_require__(48);
var gameProps_1 = __webpack_require__(104);
var repository_1 = __webpack_require__(105);
if (true && gameProps_1.gameProps.startSceneId === undefined) throw 'start scene not specified';
var game = new game_1.Game();
game.fromJSON(gameProps_1.gameProps);
game.repository.setDescriptions(repository_1.repository);
if (false) {}
var startScene = game.repository.getObject(gameProps_1.gameProps.startSceneId, 'Scene');
game.runScene(startScene);

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
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
__webpack_require__(49);
var baseAbstractBehaviour_1 = __webpack_require__(20);
var rendererFactory_1 = __webpack_require__(50);
var repository_1 = __webpack_require__(73);
var mouse_1 = __webpack_require__(31);
var keyboard_1 = __webpack_require__(91);
var gamePad_1 = __webpack_require__(92);
var decorators_1 = __webpack_require__(19);
var commonObject_1 = __webpack_require__(18);
var camera_1 = __webpack_require__(46);
var consts_1 = __webpack_require__(38);
var point2d_1 = __webpack_require__(3);
var lightArray_1 = __webpack_require__(26);
var uiBuilder_1 = __webpack_require__(93);
var colliderEngine_1 = __webpack_require__(94);
var MathEx = __webpack_require__(4);
var global_1 = __webpack_require__(1);
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
            var allScripts_1 = __webpack_require__(95);
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
/* 49 */
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
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
//import {HtmlRenderer as Renderer} from './dom/htmlRenderer'
//import {CanvasRenderer as Renderer} from './canvas/canvasRenderer'
var webGlRenderer_1 = __webpack_require__(51);
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
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
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
var spriteRectLightDrawer_1 = __webpack_require__(52);
var spriteRectDrawer_1 = __webpack_require__(12);
var tiledSpriteRectDrawer_1 = __webpack_require__(56);
var colorRectDrawer_1 = __webpack_require__(57);
var abstractDrawer_1 = __webpack_require__(6);
var lineDrawer_1 = __webpack_require__(58);
var circleDrawer_1 = __webpack_require__(60);
var frameBuffer_1 = __webpack_require__(29);
var matrixStack_1 = __webpack_require__(62);
var mat4 = __webpack_require__(11);
var matEx = __webpack_require__(4);
var texture_1 = __webpack_require__(30);
var addBlendDrawer_1 = __webpack_require__(63);
var rect_1 = __webpack_require__(0);
var abstractCanvasRenderer_1 = __webpack_require__(67);
var shaderMaterial_1 = __webpack_require__(39);
var size_1 = __webpack_require__(14);
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
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
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
var spriteRectDrawer_1 = __webpack_require__(12);
var texShaderGenerator_1 = __webpack_require__(9);
var shaderProgram_1 = __webpack_require__(2);
var shaderProgramUtils_1 = __webpack_require__(5);
var lightArray_1 = __webpack_require__(26);
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
/* 53 */
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
/* 54 */
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
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
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
var abstractLight_1 = __webpack_require__(28);
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
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
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
var plane_1 = __webpack_require__(21);
var shaderProgram_1 = __webpack_require__(2);
var bufferInfo_1 = __webpack_require__(8);
var abstractDrawer_1 = __webpack_require__(6);
var shaderProgramUtils_1 = __webpack_require__(5);
var texShaderGenerator_1 = __webpack_require__(9);
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
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
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
var plane_1 = __webpack_require__(21);
var shaderProgram_1 = __webpack_require__(2);
var bufferInfo_1 = __webpack_require__(8);
var abstractDrawer_1 = __webpack_require__(6);
var colorShaderGenerator_1 = __webpack_require__(23);
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
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
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
var line_1 = __webpack_require__(59);
var shaderProgram_1 = __webpack_require__(2);
var bufferInfo_1 = __webpack_require__(8);
var abstractDrawer_1 = __webpack_require__(6);
var colorShaderGenerator_1 = __webpack_require__(23);
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
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
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
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
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
var circle_1 = __webpack_require__(61);
var shaderProgram_1 = __webpack_require__(2);
var abstractDrawer_1 = __webpack_require__(6);
var bufferInfo_1 = __webpack_require__(8);
var colorShaderGenerator_1 = __webpack_require__(23);
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
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
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
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var mat4 = __webpack_require__(11);
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
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
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
var abstractBlendDrawer_1 = __webpack_require__(64);
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
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var spriteRectDrawer_1 = __webpack_require__(12);
var shaderProgramUtils_1 = __webpack_require__(5);
var texShaderGenerator_1 = __webpack_require__(9);
var shaderProgram_1 = __webpack_require__(2);
var simpleCopyFilter_1 = __webpack_require__(65);
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
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// this filter needs to copy texture to framebuffer

var __extends = this && this.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
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
var abstractFilter_1 = __webpack_require__(66);
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
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var shaderProgram_1 = __webpack_require__(2);
var spriteRectDrawer_1 = __webpack_require__(12);
var mat4 = __webpack_require__(11);
var texShaderGenerator_1 = __webpack_require__(9);
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
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
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
var abstractRenderer_1 = __webpack_require__(68);
var consts_1 = __webpack_require__(38);
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
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var textField_1 = __webpack_require__(15);
var device_1 = __webpack_require__(72);
var size_1 = __webpack_require__(14);
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
        return  false ? undefined : resourcePath;
    };
    return AbstractRenderer;
}();
exports.AbstractRenderer = AbstractRenderer;

/***/ }),
/* 69 */
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
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
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
var color_1 = __webpack_require__(13);
var global_1 = __webpack_require__(1);
var renderableModel_1 = __webpack_require__(24);
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
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
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
var image_1 = __webpack_require__(36);
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
/* 72 */
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
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var models = __webpack_require__(74);
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
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var frameAnimation_1 = __webpack_require__(75);
exports.FrameAnimation = frameAnimation_1.FrameAnimation;
var spriteSheet_1 = __webpack_require__(76);
exports.SpriteSheet = spriteSheet_1.SpriteSheet;
var gameObjectProto_1 = __webpack_require__(40);
exports.GameObjectProto = gameObjectProto_1.GameObjectProto;
var gameObject_1 = __webpack_require__(77);
exports.GameObject = gameObject_1.GameObject;
var commonBehaviour_1 = __webpack_require__(84);
exports.CommonBehaviour = commonBehaviour_1.CommonBehaviour;
var particleSystem_1 = __webpack_require__(85);
exports.ParticleSystem = particleSystem_1.ParticleSystem;
var scene_1 = __webpack_require__(86);
exports.Scene = scene_1.Scene;
var sound_1 = __webpack_require__(89);
exports.Sound = sound_1.Sound;
var font_1 = __webpack_require__(90);
exports.Font = font_1.Font;
var layer_1 = __webpack_require__(45);
exports.Layer = layer_1.Layer;
var textField_1 = __webpack_require__(15);
exports.TextField = textField_1.TextField;
var button_1 = __webpack_require__(35);
exports.Button = button_1.Button;
var tileMap_1 = __webpack_require__(43);
exports.TileMap = tileMap_1.TileMap;

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
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
var commonObject_1 = __webpack_require__(18);
var decorators_1 = __webpack_require__(19);
var eventEmitter_1 = __webpack_require__(33);
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
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
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
var resource_1 = __webpack_require__(17);
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
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
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
var gameObjectProto_1 = __webpack_require__(40);
var commonBehaviours = __webpack_require__(78);
var global_1 = __webpack_require__(1);
var noop_1 = __webpack_require__(42);
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
    return GameObject;
}(gameObjectProto_1.GameObjectProto);
exports.GameObject = GameObject;
global_1._global['GameObject'] = GameObject;

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var draggable_1 = __webpack_require__(79);
exports.Draggable = draggable_1.DraggableBehaviour;
var control4Dir_1 = __webpack_require__(80);
exports.Control4Dir = control4Dir_1.Control4Dir;
var control2Dir_1 = __webpack_require__(82);
exports.Control2Dir = control2Dir_1.Control2Dir;

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
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
var baseAbstractBehaviour_1 = __webpack_require__(20);
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
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
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
var move4Dir_1 = __webpack_require__(81);
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
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
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
var moveable_1 = __webpack_require__(41);
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
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
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
var move2Dir_1 = __webpack_require__(83);
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
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
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
var moveable_1 = __webpack_require__(41);
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
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
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
var baseModel_1 = __webpack_require__(7);
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
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
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
var baseModel_1 = __webpack_require__(7);
var mathEx = __webpack_require__(4);
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
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
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
var noop_1 = __webpack_require__(42);
var baseModel_1 = __webpack_require__(7);
var loadingQueue_1 = __webpack_require__(87);
var tileMap_1 = __webpack_require__(43);
var layer_1 = __webpack_require__(45);
var ambientLight_1 = __webpack_require__(88);
var color_1 = __webpack_require__(13);
var camera_1 = __webpack_require__(46);
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
        this.getDefaultLayer().appendChild(go);
    };
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
/* 87 */
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
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
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
var abstractLight_1 = __webpack_require__(28);
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
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
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
var baseModel_1 = __webpack_require__(7);
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
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
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
var resource_1 = __webpack_require__(17);
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
/* 91 */
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
/* 92 */
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
/* 93 */
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
var allUIClasses = __webpack_require__(34);
var absoluteLayout_1 = __webpack_require__(37);
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
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var rigidShapes_1 = __webpack_require__(44);
var rect_1 = __webpack_require__(0);
var mathEx = __webpack_require__(4);
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
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _clamp = __webpack_require__(96);

Object.defineProperty(exports, 'ClampBehaviour', {
  enumerable: true,
  get: function get() {
    return _clamp.ClampBehaviour;
  }
});

var _dude = __webpack_require__(97);

Object.defineProperty(exports, 'DudeBehaviour', {
  enumerable: true,
  get: function get() {
    return _dude.DudeBehaviour;
  }
});

var _eso1611a = __webpack_require__(98);

Object.defineProperty(exports, 'Eso1611aBehaviour', {
  enumerable: true,
  get: function get() {
    return _eso1611a.Eso1611aBehaviour;
  }
});

var _flare = __webpack_require__(99);

Object.defineProperty(exports, 'FlareBehaviour', {
  enumerable: true,
  get: function get() {
    return _flare.FlareBehaviour;
  }
});

var _ground = __webpack_require__(100);

Object.defineProperty(exports, 'Ground1Behaviour', {
  enumerable: true,
  get: function get() {
    return _ground.Ground1Behaviour;
  }
});

var _mainScene = __webpack_require__(101);

Object.defineProperty(exports, 'MainSceneBehaviour', {
  enumerable: true,
  get: function get() {
    return _mainScene.MainSceneBehaviour;
  }
});

var _platform = __webpack_require__(102);

Object.defineProperty(exports, 'PlatformBehaviour', {
  enumerable: true,
  get: function get() {
    return _platform.PlatformBehaviour;
  }
});

var _tile = __webpack_require__(103);

Object.defineProperty(exports, 'TileBehaviour', {
  enumerable: true,
  get: function get() {
    return _tile.TileBehaviour;
  }
});

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ClampBehaviour = exports.ClampBehaviour = function () {
    function ClampBehaviour() {
        _classCallCheck(this, ClampBehaviour);
    }

    ClampBehaviour.prototype.onCreate = function onCreate() {};

    ClampBehaviour.prototype.onUpdate = function onUpdate() {};

    ClampBehaviour.prototype.onDestroy = function onDestroy() {};

    return ClampBehaviour;
}();

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DudeBehaviour = exports.DudeBehaviour = function () {
    function DudeBehaviour() {
        _classCallCheck(this, DudeBehaviour);
    }

    DudeBehaviour.prototype.onCreate = function onCreate() {
        this.gameObject.rigidBody.fixedAngle = true;
        this.game.camera.followTo(this.gameObject);
    };

    DudeBehaviour.prototype.onUpdate = function onUpdate() {

        var p1 = this.game.lightArray.getLightAt(0);
        //p1.pos.setXY(this.gameObject.pos.x + 16,this.gameObject.pos.y + 16);

        if (this.game.keyboard.isJustPressed(this.game.keyboard.KEY.UP) || this.game.keyboard.isJustPressed(this.game.keyboard.KEY.GAME_PAD_1)) {
            //if (this.gameObject.rigidBody.onFloor) this.gameObject.rigidBody.vel.addXY(0,-340);
            this.gameObject.rigidBody.mVelocity.y = -100;
        }

        if (this.game.keyboard.isPressed(this.game.keyboard.KEY.A) || this.game.keyboard.isPressed(this.game.keyboard.KEY.GAME_PAD_5)) {
            //this.gameObject.rigidBody.fixedAngle = true;
        }
    };

    DudeBehaviour.prototype.onDestroy = function onDestroy() {};

    return DudeBehaviour;
}();

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Eso1611aBehaviour = exports.Eso1611aBehaviour = function () {
    function Eso1611aBehaviour() {
        _classCallCheck(this, Eso1611aBehaviour);
    }

    Eso1611aBehaviour.prototype.onCreate = function onCreate() {
        this.gameObject.blendMode = 'add';
    };

    Eso1611aBehaviour.prototype.onUpdate = function onUpdate() {};

    Eso1611aBehaviour.prototype.onDestroy = function onDestroy() {};

    return Eso1611aBehaviour;
}();

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FlareBehaviour = exports.FlareBehaviour = function () {
    function FlareBehaviour() {
        _classCallCheck(this, FlareBehaviour);
    }

    FlareBehaviour.prototype.onCreate = function onCreate() {
        this.gameObject.blendMode = 'add';
    };

    FlareBehaviour.prototype.onUpdate = function onUpdate() {};

    FlareBehaviour.prototype.onDestroy = function onDestroy() {};

    return FlareBehaviour;
}();

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Ground1Behaviour = exports.Ground1Behaviour = function () {
    function Ground1Behaviour() {
        _classCallCheck(this, Ground1Behaviour);
    }

    Ground1Behaviour.prototype.onCreate = function onCreate() {
        //this.gameObject.rigidBody.static = true;
    };

    Ground1Behaviour.prototype.onUpdate = function onUpdate() {};

    Ground1Behaviour.prototype.onDestroy = function onDestroy() {};

    return Ground1Behaviour;
}();

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.MainSceneBehaviour = undefined;

var _global = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MainSceneBehaviour = exports.MainSceneBehaviour = function () {
    function MainSceneBehaviour() {
        _classCallCheck(this, MainSceneBehaviour);
    }

    MainSceneBehaviour.prototype.onCreate = function onCreate() {
        var _this = this;

        this.x = 0;
        this.y = 0;
        this.color = _global._global.Color.RGB(255, 0, 0);
        this.points = [];

        this.game.getCurrScene().tileMap.fromTiledJSON([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, null, null, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 5, 3, 3, 3, 3, 0, 0, 0, 6, 3, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 11, 0, 12, 0, 5, 5, 3, 5, 5, 0, 0, 0, 3, 2, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 11, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2, 2, 2, 4, 2, 4, 2, 2, 2, 8, 2, 2, 2, 4, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 2, 4, 2, 8, 2, 4, 2, 2, 2, 0, 0, 0, 2, 4, 2, 4, 2, 2, 4, 2, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 13, 13, 13, 13, 12, 13, 13, 0, 0, 0, 0, 12, 12, 12, 0, 0, 12, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 13, 0, 0, 0, 0, 12, 13, 0, 0, 0, 0, 12, 12, 12, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 13, 0, 0, 0, 0, 13, 13, 0, 0, 0, 12, 12, 12, 12, 12, 0, 0, 0, 12, 0, 13, 13, 13, 13, 13, 13, 13, 13, 13, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 13, 13, 0, 13, 0, 0, 0, 0, 0, 12, 12, 12, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 13, 12, 0, 13, 0, 0, 0, 0, 0, 11, 11, 11, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 8, 2, 2, 2, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 13, 11, 0, 12, 13, 0, 0, 0, 0, 11, 0, 0, 0, 0, 0, 0, 0, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 1, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 8, 2, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 4, 2, 2, 2, 2, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 13, 13, 0, 12, 13, 0, 0, 0, 0, 11, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 13, 13, 13, 13, 13, 0, 0, 0, 0, 0, 0, 0, 0, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 4, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 6, 4, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 0, 0, 12, 12, 12, 12, 12, 0, 12, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 12, 12, 12, 12, 0, 12, 12, 12, 12, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 4, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 12, 0, 0, 12, 12, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 6, 6, 1, 1, 6, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 6, 1, 1, 7, 1, 1, 1, 7, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 12, 12, 0, 0, 0, 1, 1, 1, 1, 1, 4, 1, 1, 4, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 6, 1, 4, 1, 1, 6, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 7, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 100, 20);

        this.scene.on('mouseMove', function (e) {
            //console.log(e.isMouseDown);
        });

        this.offsetX = 0;
        this.cnt = 0;

        var p1 = this.game.lightArray.getLightAt(0);
        p1.color = _global._global.Color.RGB(244, 251, 51);
        p1.nearRadius = 40;
        p1.farRadius = 100;
        p1.isOn = true;
        p1.pos.setXY(100, 100);

        var p2 = this.game.lightArray.getLightAt(1);
        p2.color = _global._global.Color.RGB(255, 255, 122);
        p2.nearRadius = 50;
        p2.farRadius = 120;
        p2.isOn = true;
        p2.pos.setXY(100, 100);

        this.scene.ambientLight.color = _global._global.Color.RGB(122, 122, 51);

        this.scene.on('mouseMove', function (e) {
            _this.x = e.screenX;
            _this.y = e.screenY;
            //this.points.push({x:e.screenX,y:e.screenY});
            p1.pos.setXY(e.screenX, e.screenY);
        });

        var widget = this.game.uiBuilder.build({
            AbsoluteLayout: {
                properties: {
                    pos: { x: 0, y: 0 },
                    width: 200, height: 200,
                    background: {
                        type: 'Rectangle'
                    },
                    on: ['click', function () {
                        console.log('clicked on layout');
                    }]
                },
                children: [{
                    Button: {
                        pos: { x: 0, y: 0 },
                        font: { type: 'Font', name: 'font1' },
                        text: 'button1',
                        paddings: 10,
                        describeStates: {
                            NORMAL: {
                                type: 'NinePatchImage',
                                resourceMap: { main: 'resources/nineP.png' },
                                setABCD: 45
                            },
                            ACTIVE: {
                                type: 'NinePatchImage',
                                resourceMap: { main: 'resources/ninePactive.png' },
                                setABCD: 45
                            }
                        },
                        on: ['click', function () {
                            console.log('clicked on button 1');
                        }]
                    }
                }, {
                    Button: {
                        pos: { x: 120, y: 0 },
                        font: { type: 'Font', name: 'font1' },
                        text: 'button2',
                        paddings: 10,
                        background: {
                            type: 'NinePatchImage',
                            resourceMap: { main: 'resources/nineP.png' },
                            ABCD: 45
                        },
                        on: ['click', function () {
                            console.log('clicked on button 2');
                        }]
                    }
                }, {
                    TextField: {
                        pos: { x: 250, y: 0 },
                        font: { type: 'Font', name: 'font1' },
                        text: '12345\n12345\n54321',
                        paddings: 0,
                        on: ['click', function () {
                            console.log('clicked text field');
                        }]
                    }
                }]
            }
        });

        console.log(widget);
        window.w = widget;
        this.scene.uiLayer.children.push(widget);
    };

    MainSceneBehaviour.prototype.onUpdate = function onUpdate() {
        this.cnt++;
        if (this.cnt === 5) {
            this.points.shift();
            this.cnt = 0;
        }
        this.game.renderer.fillRect({ x: this.x, y: this.y, width: 10, height: 10 }, this.color);

        this.points.forEach(function (p) {
            //this.game.renderer.fillRect({x:p.x,y:p.y,width:50,height:50},this.color);
            //this.game.renderer.fillCircle(p.x,p.y,25,[0,1,0,1]);
            //this.game.renderer.log(p.x);
            //this.game.renderer.drawLine(p.x,p.y,p.x+50,p.y+30,[0,1,1,1]);
        });
        //this.game.renderer.log(this.points.length);
        //this.game.renderer.log({a:2});
        var camera = this.game.camera;
        var camRect = this.game.camera.getRectScaled();
        // this.game.renderer.drawTiledImage('resources/tile.jpg',
        //     {x:130,y:0,width:130,height:61},
        //     {x:camRect.x, y:camRect.y, width:100, height:100},
        //     {x:this.offsetX,y:this.offsetX}
        // );
        // this.game.renderer.draw9Patch(
        //     'resources/nineP.png',
        //     new global.Rect(12,12,400,320),
        //     45
        // );
        //this.game.renderer.log(camRect);
        this.offsetX += 0.1;
    };

    MainSceneBehaviour.prototype.onDestroy = function onDestroy() {};

    return MainSceneBehaviour;
}();

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PlatformBehaviour = exports.PlatformBehaviour = function () {
    function PlatformBehaviour() {
        _classCallCheck(this, PlatformBehaviour);
    }

    PlatformBehaviour.prototype.onCreate = function onCreate() {
        this.gameObject.rigidBody.fixed = true;
        this.gameObject.acceptLight = true;
    };

    PlatformBehaviour.prototype.onUpdate = function onUpdate() {};

    PlatformBehaviour.prototype.onDestroy = function onDestroy() {};

    return PlatformBehaviour;
}();

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TileBehaviour = exports.TileBehaviour = function () {
    function TileBehaviour() {
        _classCallCheck(this, TileBehaviour);
    }

    TileBehaviour.prototype.onCreate = function onCreate() {};

    TileBehaviour.prototype.onUpdate = function onUpdate() {};

    TileBehaviour.prototype.onDestroy = function onDestroy() {};

    return TileBehaviour;
}();

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
exports.gameProps = {
    "width": 800,
    "height": 500,
    "scaleStrategy": 1,
    "startSceneId": 2,
    "scale": {
        "x": 1,
        "y": 1
    },
    "pos": {
        "x": 0,
        "y": 0
    },
    "gravityConstant": 800
};

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
exports.repository = {
    "Scene": [{
        "id": 2,
        "name": "mainScene",
        "width": 5000,
        "height": 800,
        "type": "Scene",
        "layers": [{
            "type": "Layer",
            "id": 2
        }],
        "useBG": true,
        "colorBG": {
            "r": 22,
            "g": 30,
            "b": 67,
            "a": 255
        },
        "tileMap": {
            "id": 52,
            "type": "TileMap"
        }
    }],
    "Layer": [{
        "id": 2,
        "name": "layer1",
        "type": "Layer",
        "children": [{
            "type": "GameObject",
            "id": 7
        }, {
            "type": "GameObject",
            "id": 63
        }, {
            "type": "GameObject",
            "id": 64
        }, {
            "type": "GameObject",
            "id": 65
        }, {
            "type": "GameObject",
            "id": 67
        }, {
            "type": "GameObject",
            "id": 68
        }, {
            "type": "GameObject",
            "id": 71
        }, {
            "type": "GameObject",
            "id": 74
        }, {
            "type": "TextField",
            "id": 76
        }, {
            "type": "GameObject",
            "id": 77
        }, {
            "type": "GameObject",
            "id": 78
        }, {
            "type": "GameObject",
            "id": 81
        }, {
            "type": "GameObject",
            "id": 82
        }, {
            "type": "GameObject",
            "id": 86
        }, {
            "type": "GameObject",
            "id": 87
        }, {
            "type": "GameObject",
            "id": 91
        }]
    }],
    "SpriteSheet": [{
        "id": 3,
        "name": "dude",
        "width": 288,
        "height": 48,
        "type": "SpriteSheet",
        "numOfFramesH": 9,
        "resourceMap": {
            "main": "resources/dude.png"
        }
    }, {
        "id": 5,
        "name": "platform",
        "width": 500,
        "height": 64,
        "type": "SpriteSheet",
        "resourceMap": {
            "main": "resources/platform.png"
        }
    }, {
        "name": "ground",
        "width": 800,
        "height": 32,
        "type": "SpriteSheet",
        "numOfFramesH": 25,
        "resourceMap": {
            "main": "resources/ground.png"
        },
        "id": 57
    }, {
        "name": "clamp",
        "width": 300,
        "height": 300,
        "type": "SpriteSheet",
        "resourceMap": {
            "main": "resources/clamp.png",
            "normalMap": "resources/clamp_normal.png"
        },
        "id": 69
    }, {
        "name": "tile",
        "width": 262,
        "height": 192,
        "type": "SpriteSheet",
        "resourceMap": {
            "main": "resources/tile.jpg"
        },
        "id": 72
    }, {
        "name": "flare",
        "width": 174,
        "height": 173,
        "type": "SpriteSheet",
        "resourceMap": {
            "main": "resources/flare.png"
        },
        "id": 79
    }, {
        "name": "eso1611a",
        "width": 120,
        "height": 120,
        "type": "SpriteSheet",
        "resourceMap": {
            "main": "resources/eso1611a.png"
        },
        "id": 84
    }, {
        "name": "nineP",
        "width": 120,
        "height": 105,
        "type": "SpriteSheet",
        "resourceMap": {
            "main": "resources/nineP.png",
            "main1": "resources/ninePactive.png"
        },
        "id": 89
    }],
    "GameObjectProto": [{
        "id": 4,
        "name": "dude",
        "width": 32,
        "height": 48,
        "rigid": true,
        "type": "GameObjectProto",
        "spriteSheet": {
            "id": 3,
            "type": "SpriteSheet"
        },
        "commonBehaviour": [{
            "type": "CommonBehaviour",
            "id": 15
        }, {
            "type": "CommonBehaviour",
            "id": 60
        }],
        "frameAnimations": [{
            "type": "FrameAnimation",
            "id": 11
        }, {
            "type": "FrameAnimation",
            "id": 12
        }, {
            "type": "FrameAnimation",
            "id": 13
        }, {
            "type": "FrameAnimation",
            "id": 14
        }]
    }, {
        "id": 6,
        "name": "platform",
        "width": 500,
        "height": 64,
        "rigid": true,
        "type": "GameObjectProto",
        "spriteSheet": {
            "id": 5,
            "type": "SpriteSheet"
        },
        "commonBehaviour": [{
            "type": "CommonBehaviour",
            "id": 61
        }]
    }, {
        "id": 58,
        "name": "ground1",
        "width": 32,
        "height": 32,
        "rigid": true,
        "type": "GameObjectProto",
        "spriteSheet": {
            "id": 57,
            "type": "SpriteSheet"
        },
        "commonBehaviour": [{
            "type": "CommonBehaviour",
            "id": 62
        }],
        "currFrameIndex": 9
    }, {
        "id": 70,
        "name": "clamp",
        "width": 64,
        "height": 64,
        "rigid": false,
        "type": "GameObjectProto",
        "spriteSheet": {
            "id": 69,
            "type": "SpriteSheet"
        },
        "commonBehaviour": [{
            "type": "CommonBehaviour",
            "id": 75
        }]
    }, {
        "id": 73,
        "name": "tile",
        "width": 262,
        "height": 192,
        "rigid": false,
        "type": "GameObjectProto",
        "spriteSheet": {
            "id": 72,
            "type": "SpriteSheet"
        }
    }, {
        "id": 80,
        "name": "flare",
        "width": 174,
        "height": 173,
        "type": "GameObjectProto",
        "spriteSheet": {
            "id": 79,
            "type": "SpriteSheet"
        },
        "commonBehaviour": [{
            "type": "CommonBehaviour",
            "id": 83
        }]
    }, {
        "id": 85,
        "name": "eso1611a",
        "width": 120,
        "height": 120,
        "type": "GameObjectProto",
        "spriteSheet": {
            "id": 84,
            "type": "SpriteSheet"
        },
        "commonBehaviour": [{
            "type": "CommonBehaviour",
            "id": 88
        }]
    }, {
        "id": 90,
        "name": "nineP",
        "width": 120,
        "height": 105,
        "type": "GameObjectProto",
        "spriteSheet": {
            "id": 89,
            "type": "SpriteSheet"
        },
        "commonBehaviour": [{
            "type": "CommonBehaviour",
            "id": 92
        }],
        "shaderMaterial": {
            "shininess": 10
        }
    }],
    "GameObject": [{
        "id": 7,
        "name": "dude",
        "pos": {
            "x": 232,
            "y": 60
        },
        "layerId": 2,
        "type": "GameObject",
        "gameObjectProto": {
            "id": 4,
            "type": "GameObjectProto"
        }
    }, {
        "id": 63,
        "name": "ground1",
        "pos": {
            "x": 400,
            "y": 95
        },
        "layerId": 2,
        "type": "GameObject",
        "gameObjectProto": {
            "id": 58,
            "type": "GameObjectProto"
        }
    }, {
        "id": 64,
        "name": "platform",
        "pos": {
            "x": 471,
            "y": 478
        },
        "layerId": 2,
        "type": "GameObject",
        "gameObjectProto": {
            "id": 6,
            "type": "GameObjectProto"
        }
    }, {
        "id": 65,
        "name": "platform",
        "pos": {
            "x": 74,
            "y": 143
        },
        "layerId": 2,
        "type": "GameObject",
        "gameObjectProto": {
            "id": 6,
            "type": "GameObjectProto"
        }
    }, {
        "id": 67,
        "name": "ground1",
        "pos": {
            "x": 483,
            "y": 45
        },
        "layerId": 2,
        "type": "GameObject",
        "gameObjectProto": {
            "id": 58,
            "type": "GameObjectProto"
        }
    }, {
        "id": 68,
        "name": "ground1",
        "pos": {
            "x": 348,
            "y": 47
        },
        "layerId": 2,
        "type": "GameObject",
        "gameObjectProto": {
            "id": 58,
            "type": "GameObjectProto"
        }
    }, {
        "id": 71,
        "name": "clamp",
        "width": 300,
        "height": 300,
        "pos": {
            "x": 747,
            "y": 124
        },
        "layerId": 2,
        "type": "GameObject",
        "spriteSheet": {
            "id": 69,
            "type": "SpriteSheet"
        },
        "commonBehaviour": [{
            "type": "CommonBehaviour",
            "id": 75
        }],
        "gameObjectProto": {
            "id": 70,
            "type": "GameObjectProto"
        }
    }, {
        "id": 74,
        "name": "tile",
        "pos": {
            "x": 360,
            "y": 228
        },
        "layerId": 2,
        "type": "GameObject",
        "gameObjectProto": {
            "id": 73,
            "type": "GameObjectProto"
        }
    }, {
        "id": 77,
        "name": "platform",
        "pos": {
            "x": 62,
            "y": 304
        },
        "layerId": 2,
        "type": "GameObject",
        "gameObjectProto": {
            "id": 6,
            "type": "GameObjectProto"
        }
    }, {
        "id": 78,
        "name": "platform",
        "pos": {
            "x": 43,
            "y": 393
        },
        "layerId": 2,
        "type": "GameObject",
        "gameObjectProto": {
            "id": 6,
            "type": "GameObjectProto"
        }
    }, {
        "id": 81,
        "name": "flare",
        "pos": {
            "x": 651,
            "y": 67
        },
        "layerId": 2,
        "type": "GameObject",
        "gameObjectProto": {
            "id": 80,
            "type": "GameObjectProto"
        }
    }, {
        "id": 82,
        "name": "flare",
        "pos": {
            "x": 617,
            "y": 36
        },
        "layerId": 2,
        "type": "GameObject",
        "gameObjectProto": {
            "id": 80,
            "type": "GameObjectProto"
        }
    }, {
        "id": 86,
        "name": "eso1611a",
        "pos": {
            "x": 616,
            "y": 53
        },
        "layerId": 2,
        "type": "GameObject",
        "gameObjectProto": {
            "id": 85,
            "type": "GameObjectProto"
        }
    }, {
        "id": 87,
        "name": "eso1611a",
        "pos": {
            "x": 625,
            "y": 56
        },
        "layerId": 2,
        "type": "GameObject",
        "gameObjectProto": {
            "id": 85,
            "type": "GameObjectProto"
        }
    }, {
        "id": 91,
        "name": "nineP",
        "pos": {
            "x": 8,
            "y": 463
        },
        "layerId": 2,
        "type": "GameObject",
        "gameObjectProto": {
            "id": 90,
            "type": "GameObjectProto"
        }
    }],
    "FrameAnimation": [{
        "name": "left",
        "type": "FrameAnimation",
        "frames": [0, 1, 2, 3],
        "id": 11
    }, {
        "name": "right",
        "type": "FrameAnimation",
        "frames": [5, 6, 7, 8],
        "id": 12
    }, {
        "name": "idleLeft",
        "type": "FrameAnimation",
        "frames": [4],
        "id": 13
    }, {
        "name": "idleRight",
        "type": "FrameAnimation",
        "frames": [4],
        "id": 14
    }],
    "CommonBehaviour": [{
        "id": 15,
        "name": "Control2Dir",
        "type": "CommonBehaviour",
        "parameters": {
            "velocity": "130",
            "walkLeftAnimation": "left",
            "walkRightAnimation": "right",
            "idleLeftAnimation": "idleLeft",
            "idleRightAnimation": "idleRight"
        }
    }, {
        "name": "Draggable",
        "type": "CommonBehaviour",
        "id": 60
    }, {
        "name": "Draggable",
        "type": "CommonBehaviour",
        "id": 61
    }, {
        "name": "Draggable",
        "type": "CommonBehaviour",
        "id": 62
    }, {
        "name": "Draggable",
        "type": "CommonBehaviour",
        "id": 75
    }, {
        "name": "Draggable",
        "type": "CommonBehaviour",
        "id": 83
    }, {
        "name": "Draggable",
        "type": "CommonBehaviour",
        "id": 88
    }, {
        "name": "Draggable",
        "type": "CommonBehaviour",
        "id": 92
    }],
    "Font": [{
        "id": 22,
        "name": "font1",
        "type": "Font",
        "resourceMap": {
            "main": "resources/font1.png"
        },
        "fontSize": 21,
        "fontFamily": "monospace",
        "fontContext": {
            "symbols": {
                "0": {
                    "x": 24,
                    "y": 36,
                    "width": 12,
                    "height": 24
                },
                "1": {
                    "x": 45,
                    "y": 36,
                    "width": 12,
                    "height": 24
                },
                "2": {
                    "x": 65,
                    "y": 36,
                    "width": 12,
                    "height": 24
                },
                "3": {
                    "x": 86,
                    "y": 36,
                    "width": 12,
                    "height": 24
                },
                "4": {
                    "x": 107,
                    "y": 36,
                    "width": 12,
                    "height": 24
                },
                "5": {
                    "x": 127,
                    "y": 36,
                    "width": 12,
                    "height": 24
                },
                "6": {
                    "x": 148,
                    "y": 36,
                    "width": 12,
                    "height": 24
                },
                "7": {
                    "x": 168,
                    "y": 36,
                    "width": 12,
                    "height": 24
                },
                "8": {
                    "x": 189,
                    "y": 36,
                    "width": 12,
                    "height": 24
                },
                "9": {
                    "x": 210,
                    "y": 36,
                    "width": 12,
                    "height": 24
                },
                " ": {
                    "x": 4,
                    "y": 4,
                    "width": 12,
                    "height": 24
                },
                "!": {
                    "x": 24,
                    "y": 4,
                    "width": 12,
                    "height": 24
                },
                "\"": {
                    "x": 45,
                    "y": 4,
                    "width": 12,
                    "height": 24
                },
                "#": {
                    "x": 65,
                    "y": 4,
                    "width": 12,
                    "height": 24
                },
                "$": {
                    "x": 86,
                    "y": 4,
                    "width": 12,
                    "height": 24
                },
                "%": {
                    "x": 107,
                    "y": 4,
                    "width": 12,
                    "height": 24
                },
                "&": {
                    "x": 127,
                    "y": 4,
                    "width": 12,
                    "height": 24
                },
                "'": {
                    "x": 148,
                    "y": 4,
                    "width": 12,
                    "height": 24
                },
                "(": {
                    "x": 168,
                    "y": 4,
                    "width": 12,
                    "height": 24
                },
                ")": {
                    "x": 189,
                    "y": 4,
                    "width": 12,
                    "height": 24
                },
                "*": {
                    "x": 210,
                    "y": 4,
                    "width": 12,
                    "height": 24
                },
                "+": {
                    "x": 230,
                    "y": 4,
                    "width": 12,
                    "height": 24
                },
                ",": {
                    "x": 251,
                    "y": 4,
                    "width": 12,
                    "height": 24
                },
                "-": {
                    "x": 271,
                    "y": 4,
                    "width": 12,
                    "height": 24
                },
                ".": {
                    "x": 292,
                    "y": 4,
                    "width": 12,
                    "height": 24
                },
                "/": {
                    "x": 4,
                    "y": 36,
                    "width": 12,
                    "height": 24
                },
                ":": {
                    "x": 230,
                    "y": 36,
                    "width": 12,
                    "height": 24
                },
                ";": {
                    "x": 251,
                    "y": 36,
                    "width": 12,
                    "height": 24
                },
                "<": {
                    "x": 271,
                    "y": 36,
                    "width": 12,
                    "height": 24
                },
                "=": {
                    "x": 292,
                    "y": 36,
                    "width": 12,
                    "height": 24
                },
                ">": {
                    "x": 4,
                    "y": 68,
                    "width": 12,
                    "height": 24
                },
                "?": {
                    "x": 24,
                    "y": 68,
                    "width": 12,
                    "height": 24
                },
                "@": {
                    "x": 45,
                    "y": 68,
                    "width": 12,
                    "height": 24
                },
                "A": {
                    "x": 65,
                    "y": 68,
                    "width": 12,
                    "height": 24
                },
                "B": {
                    "x": 86,
                    "y": 68,
                    "width": 12,
                    "height": 24
                },
                "C": {
                    "x": 107,
                    "y": 68,
                    "width": 12,
                    "height": 24
                },
                "D": {
                    "x": 127,
                    "y": 68,
                    "width": 12,
                    "height": 24
                },
                "E": {
                    "x": 148,
                    "y": 68,
                    "width": 12,
                    "height": 24
                },
                "F": {
                    "x": 168,
                    "y": 68,
                    "width": 12,
                    "height": 24
                },
                "G": {
                    "x": 189,
                    "y": 68,
                    "width": 12,
                    "height": 24
                },
                "H": {
                    "x": 210,
                    "y": 68,
                    "width": 12,
                    "height": 24
                },
                "I": {
                    "x": 230,
                    "y": 68,
                    "width": 12,
                    "height": 24
                },
                "J": {
                    "x": 251,
                    "y": 68,
                    "width": 12,
                    "height": 24
                },
                "K": {
                    "x": 271,
                    "y": 68,
                    "width": 12,
                    "height": 24
                },
                "L": {
                    "x": 292,
                    "y": 68,
                    "width": 12,
                    "height": 24
                },
                "M": {
                    "x": 4,
                    "y": 100,
                    "width": 12,
                    "height": 24
                },
                "N": {
                    "x": 24,
                    "y": 100,
                    "width": 12,
                    "height": 24
                },
                "O": {
                    "x": 45,
                    "y": 100,
                    "width": 12,
                    "height": 24
                },
                "P": {
                    "x": 65,
                    "y": 100,
                    "width": 12,
                    "height": 24
                },
                "Q": {
                    "x": 86,
                    "y": 100,
                    "width": 12,
                    "height": 24
                },
                "R": {
                    "x": 107,
                    "y": 100,
                    "width": 12,
                    "height": 24
                },
                "S": {
                    "x": 127,
                    "y": 100,
                    "width": 12,
                    "height": 24
                },
                "T": {
                    "x": 148,
                    "y": 100,
                    "width": 12,
                    "height": 24
                },
                "U": {
                    "x": 168,
                    "y": 100,
                    "width": 12,
                    "height": 24
                },
                "V": {
                    "x": 189,
                    "y": 100,
                    "width": 12,
                    "height": 24
                },
                "W": {
                    "x": 210,
                    "y": 100,
                    "width": 12,
                    "height": 24
                },
                "X": {
                    "x": 230,
                    "y": 100,
                    "width": 12,
                    "height": 24
                },
                "Y": {
                    "x": 251,
                    "y": 100,
                    "width": 12,
                    "height": 24
                },
                "Z": {
                    "x": 271,
                    "y": 100,
                    "width": 12,
                    "height": 24
                },
                "[": {
                    "x": 292,
                    "y": 100,
                    "width": 12,
                    "height": 24
                },
                "\\": {
                    "x": 4,
                    "y": 132,
                    "width": 12,
                    "height": 24
                },
                "]": {
                    "x": 24,
                    "y": 132,
                    "width": 12,
                    "height": 24
                },
                "^": {
                    "x": 45,
                    "y": 132,
                    "width": 12,
                    "height": 24
                },
                "_": {
                    "x": 65,
                    "y": 132,
                    "width": 12,
                    "height": 24
                },
                "`": {
                    "x": 86,
                    "y": 132,
                    "width": 12,
                    "height": 24
                },
                "a": {
                    "x": 107,
                    "y": 132,
                    "width": 12,
                    "height": 24
                },
                "b": {
                    "x": 127,
                    "y": 132,
                    "width": 12,
                    "height": 24
                },
                "c": {
                    "x": 148,
                    "y": 132,
                    "width": 12,
                    "height": 24
                },
                "d": {
                    "x": 168,
                    "y": 132,
                    "width": 12,
                    "height": 24
                },
                "e": {
                    "x": 189,
                    "y": 132,
                    "width": 12,
                    "height": 24
                },
                "f": {
                    "x": 210,
                    "y": 132,
                    "width": 12,
                    "height": 24
                },
                "g": {
                    "x": 230,
                    "y": 132,
                    "width": 12,
                    "height": 24
                },
                "h": {
                    "x": 251,
                    "y": 132,
                    "width": 12,
                    "height": 24
                },
                "i": {
                    "x": 271,
                    "y": 132,
                    "width": 12,
                    "height": 24
                },
                "j": {
                    "x": 292,
                    "y": 132,
                    "width": 12,
                    "height": 24
                },
                "k": {
                    "x": 4,
                    "y": 164,
                    "width": 12,
                    "height": 24
                },
                "l": {
                    "x": 24,
                    "y": 164,
                    "width": 12,
                    "height": 24
                },
                "m": {
                    "x": 45,
                    "y": 164,
                    "width": 12,
                    "height": 24
                },
                "n": {
                    "x": 65,
                    "y": 164,
                    "width": 12,
                    "height": 24
                },
                "o": {
                    "x": 86,
                    "y": 164,
                    "width": 12,
                    "height": 24
                },
                "p": {
                    "x": 107,
                    "y": 164,
                    "width": 12,
                    "height": 24
                },
                "q": {
                    "x": 127,
                    "y": 164,
                    "width": 12,
                    "height": 24
                },
                "r": {
                    "x": 148,
                    "y": 164,
                    "width": 12,
                    "height": 24
                },
                "s": {
                    "x": 168,
                    "y": 164,
                    "width": 12,
                    "height": 24
                },
                "t": {
                    "x": 189,
                    "y": 164,
                    "width": 12,
                    "height": 24
                },
                "u": {
                    "x": 210,
                    "y": 164,
                    "width": 12,
                    "height": 24
                },
                "v": {
                    "x": 230,
                    "y": 164,
                    "width": 12,
                    "height": 24
                },
                "w": {
                    "x": 251,
                    "y": 164,
                    "width": 12,
                    "height": 24
                },
                "x": {
                    "x": 271,
                    "y": 164,
                    "width": 12,
                    "height": 24
                },
                "y": {
                    "x": 292,
                    "y": 164,
                    "width": 12,
                    "height": 24
                },
                "z": {
                    "x": 4,
                    "y": 196,
                    "width": 12,
                    "height": 24
                },
                "{": {
                    "x": 24,
                    "y": 196,
                    "width": 12,
                    "height": 24
                },
                "|": {
                    "x": 45,
                    "y": 196,
                    "width": 12,
                    "height": 24
                },
                "}": {
                    "x": 65,
                    "y": 196,
                    "width": 12,
                    "height": 24
                },
                "~": {
                    "x": 86,
                    "y": 196,
                    "width": 12,
                    "height": 24
                },
                "": {
                    "x": 107,
                    "y": 196,
                    "width": 12,
                    "height": 24
                },
                "": {
                    "x": 127,
                    "y": 196,
                    "width": 12,
                    "height": 24
                },
                "": {
                    "x": 148,
                    "y": 196,
                    "width": 12,
                    "height": 24
                },
                "": {
                    "x": 168,
                    "y": 196,
                    "width": 12,
                    "height": 24
                },
                "": {
                    "x": 189,
                    "y": 196,
                    "width": 12,
                    "height": 24
                },
                "": {
                    "x": 210,
                    "y": 196,
                    "width": 12,
                    "height": 24
                },
                "": {
                    "x": 230,
                    "y": 196,
                    "width": 12,
                    "height": 24
                },
                "": {
                    "x": 251,
                    "y": 196,
                    "width": 12,
                    "height": 24
                },
                "": {
                    "x": 271,
                    "y": 196,
                    "width": 12,
                    "height": 24
                },
                "": {
                    "x": 292,
                    "y": 196,
                    "width": 12,
                    "height": 24
                },
                "": {
                    "x": 4,
                    "y": 228,
                    "width": 12,
                    "height": 24
                },
                "": {
                    "x": 24,
                    "y": 228,
                    "width": 12,
                    "height": 24
                },
                "": {
                    "x": 45,
                    "y": 228,
                    "width": 12,
                    "height": 24
                },
                "": {
                    "x": 65,
                    "y": 228,
                    "width": 12,
                    "height": 24
                },
                "": {
                    "x": 86,
                    "y": 228,
                    "width": 12,
                    "height": 24
                },
                "": {
                    "x": 107,
                    "y": 228,
                    "width": 12,
                    "height": 24
                },
                "": {
                    "x": 127,
                    "y": 228,
                    "width": 12,
                    "height": 24
                },
                "": {
                    "x": 148,
                    "y": 228,
                    "width": 12,
                    "height": 24
                },
                "": {
                    "x": 168,
                    "y": 228,
                    "width": 12,
                    "height": 24
                },
                "": {
                    "x": 189,
                    "y": 228,
                    "width": 12,
                    "height": 24
                },
                "": {
                    "x": 210,
                    "y": 228,
                    "width": 12,
                    "height": 24
                },
                "": {
                    "x": 230,
                    "y": 228,
                    "width": 12,
                    "height": 24
                },
                "": {
                    "x": 251,
                    "y": 228,
                    "width": 12,
                    "height": 24
                },
                "А": {
                    "x": 271,
                    "y": 228,
                    "width": 12,
                    "height": 24
                },
                "Б": {
                    "x": 292,
                    "y": 228,
                    "width": 12,
                    "height": 24
                },
                "В": {
                    "x": 4,
                    "y": 260,
                    "width": 12,
                    "height": 24
                },
                "Г": {
                    "x": 24,
                    "y": 260,
                    "width": 12,
                    "height": 24
                },
                "Д": {
                    "x": 45,
                    "y": 260,
                    "width": 12,
                    "height": 24
                },
                "Е": {
                    "x": 65,
                    "y": 260,
                    "width": 12,
                    "height": 24
                },
                "Ж": {
                    "x": 86,
                    "y": 260,
                    "width": 12,
                    "height": 24
                },
                "З": {
                    "x": 107,
                    "y": 260,
                    "width": 12,
                    "height": 24
                },
                "И": {
                    "x": 127,
                    "y": 260,
                    "width": 12,
                    "height": 24
                },
                "Й": {
                    "x": 148,
                    "y": 260,
                    "width": 12,
                    "height": 24
                },
                "К": {
                    "x": 168,
                    "y": 260,
                    "width": 12,
                    "height": 24
                },
                "Л": {
                    "x": 189,
                    "y": 260,
                    "width": 12,
                    "height": 24
                },
                "М": {
                    "x": 210,
                    "y": 260,
                    "width": 12,
                    "height": 24
                },
                "Н": {
                    "x": 230,
                    "y": 260,
                    "width": 12,
                    "height": 24
                },
                "О": {
                    "x": 251,
                    "y": 260,
                    "width": 12,
                    "height": 24
                },
                "П": {
                    "x": 271,
                    "y": 260,
                    "width": 12,
                    "height": 24
                },
                "Р": {
                    "x": 292,
                    "y": 260,
                    "width": 12,
                    "height": 24
                },
                "С": {
                    "x": 4,
                    "y": 292,
                    "width": 12,
                    "height": 24
                },
                "Т": {
                    "x": 24,
                    "y": 292,
                    "width": 12,
                    "height": 24
                },
                "У": {
                    "x": 45,
                    "y": 292,
                    "width": 12,
                    "height": 24
                },
                "Ф": {
                    "x": 65,
                    "y": 292,
                    "width": 12,
                    "height": 24
                },
                "Х": {
                    "x": 86,
                    "y": 292,
                    "width": 12,
                    "height": 24
                },
                "Ц": {
                    "x": 107,
                    "y": 292,
                    "width": 12,
                    "height": 24
                },
                "Ч": {
                    "x": 127,
                    "y": 292,
                    "width": 12,
                    "height": 24
                },
                "Ш": {
                    "x": 148,
                    "y": 292,
                    "width": 12,
                    "height": 24
                },
                "Щ": {
                    "x": 168,
                    "y": 292,
                    "width": 12,
                    "height": 24
                },
                "Ъ": {
                    "x": 189,
                    "y": 292,
                    "width": 12,
                    "height": 24
                },
                "Ы": {
                    "x": 210,
                    "y": 292,
                    "width": 12,
                    "height": 24
                },
                "Ь": {
                    "x": 230,
                    "y": 292,
                    "width": 12,
                    "height": 24
                },
                "Э": {
                    "x": 251,
                    "y": 292,
                    "width": 12,
                    "height": 24
                },
                "Ю": {
                    "x": 271,
                    "y": 292,
                    "width": 12,
                    "height": 24
                },
                "Я": {
                    "x": 292,
                    "y": 292,
                    "width": 12,
                    "height": 24
                },
                "а": {
                    "x": 4,
                    "y": 324,
                    "width": 12,
                    "height": 24
                },
                "б": {
                    "x": 24,
                    "y": 324,
                    "width": 12,
                    "height": 24
                },
                "в": {
                    "x": 45,
                    "y": 324,
                    "width": 12,
                    "height": 24
                },
                "г": {
                    "x": 65,
                    "y": 324,
                    "width": 12,
                    "height": 24
                },
                "д": {
                    "x": 86,
                    "y": 324,
                    "width": 12,
                    "height": 24
                },
                "е": {
                    "x": 107,
                    "y": 324,
                    "width": 12,
                    "height": 24
                },
                "ж": {
                    "x": 127,
                    "y": 324,
                    "width": 12,
                    "height": 24
                },
                "з": {
                    "x": 148,
                    "y": 324,
                    "width": 12,
                    "height": 24
                },
                "и": {
                    "x": 168,
                    "y": 324,
                    "width": 12,
                    "height": 24
                },
                "й": {
                    "x": 189,
                    "y": 324,
                    "width": 12,
                    "height": 24
                },
                "к": {
                    "x": 210,
                    "y": 324,
                    "width": 12,
                    "height": 24
                },
                "л": {
                    "x": 230,
                    "y": 324,
                    "width": 12,
                    "height": 24
                },
                "м": {
                    "x": 251,
                    "y": 324,
                    "width": 12,
                    "height": 24
                },
                "н": {
                    "x": 271,
                    "y": 324,
                    "width": 12,
                    "height": 24
                },
                "о": {
                    "x": 292,
                    "y": 324,
                    "width": 12,
                    "height": 24
                },
                "п": {
                    "x": 4,
                    "y": 356,
                    "width": 12,
                    "height": 24
                },
                "р": {
                    "x": 24,
                    "y": 356,
                    "width": 12,
                    "height": 24
                },
                "с": {
                    "x": 45,
                    "y": 356,
                    "width": 12,
                    "height": 24
                },
                "т": {
                    "x": 65,
                    "y": 356,
                    "width": 12,
                    "height": 24
                },
                "у": {
                    "x": 86,
                    "y": 356,
                    "width": 12,
                    "height": 24
                },
                "ф": {
                    "x": 107,
                    "y": 356,
                    "width": 12,
                    "height": 24
                },
                "х": {
                    "x": 127,
                    "y": 356,
                    "width": 12,
                    "height": 24
                },
                "ц": {
                    "x": 148,
                    "y": 356,
                    "width": 12,
                    "height": 24
                },
                "ч": {
                    "x": 168,
                    "y": 356,
                    "width": 12,
                    "height": 24
                },
                "ш": {
                    "x": 189,
                    "y": 356,
                    "width": 12,
                    "height": 24
                },
                "щ": {
                    "x": 210,
                    "y": 356,
                    "width": 12,
                    "height": 24
                },
                "ъ": {
                    "x": 230,
                    "y": 356,
                    "width": 12,
                    "height": 24
                },
                "ы": {
                    "x": 251,
                    "y": 356,
                    "width": 12,
                    "height": 24
                },
                "ь": {
                    "x": 271,
                    "y": 356,
                    "width": 12,
                    "height": 24
                },
                "э": {
                    "x": 292,
                    "y": 356,
                    "width": 12,
                    "height": 24
                },
                "ю": {
                    "x": 4,
                    "y": 388,
                    "width": 12,
                    "height": 24
                },
                "я": {
                    "x": 24,
                    "y": 388,
                    "width": 12,
                    "height": 24
                },
                "ѐ": {
                    "x": 45,
                    "y": 388,
                    "width": 12,
                    "height": 24
                },
                "ё": {
                    "x": 65,
                    "y": 388,
                    "width": 12,
                    "height": 24
                },
                "ђ": {
                    "x": 86,
                    "y": 388,
                    "width": 12,
                    "height": 24
                },
                "ѓ": {
                    "x": 107,
                    "y": 388,
                    "width": 12,
                    "height": 24
                },
                "є": {
                    "x": 127,
                    "y": 388,
                    "width": 12,
                    "height": 24
                },
                "ѕ": {
                    "x": 148,
                    "y": 388,
                    "width": 12,
                    "height": 24
                },
                "і": {
                    "x": 168,
                    "y": 388,
                    "width": 12,
                    "height": 24
                },
                "ї": {
                    "x": 189,
                    "y": 388,
                    "width": 12,
                    "height": 24
                },
                "ј": {
                    "x": 210,
                    "y": 388,
                    "width": 12,
                    "height": 24
                },
                "љ": {
                    "x": 230,
                    "y": 388,
                    "width": 12,
                    "height": 24
                },
                "њ": {
                    "x": 251,
                    "y": 388,
                    "width": 12,
                    "height": 24
                },
                "ћ": {
                    "x": 271,
                    "y": 388,
                    "width": 12,
                    "height": 24
                }
            },
            "width": 320,
            "height": 416
        }
    }],
    "TileMap": [{
        "id": 52,
        "width": 50,
        "height": 50,
        "type": "TileMap",
        "spriteSheet": {
            "id": 57,
            "type": "SpriteSheet"
        },
        "data": [[1], null, null, [null, null, null, null, null, null, null], [null, null], [null, null, null, null, null], null, [null, null, null, null]]
    }],
    "TextField": [{
        "id": 76,
        "name": "textField1",
        "width": 120,
        "height": 24,
        "pos": {
            "x": 22,
            "y": 25
        },
        "layerId": 2,
        "type": "TextField",
        "text": "textField1",
        "font": {
            "id": 22,
            "type": "Font"
        }
    }]
};

/***/ })
/******/ ]);