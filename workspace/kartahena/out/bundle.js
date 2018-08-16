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
var size_1 = __webpack_require__(15);
var point2d_1 = __webpack_require__(3);
var objectPool_1 = __webpack_require__(11);
var global_1 = __webpack_require__(4);
var observableEntity_1 = __webpack_require__(26);
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
var mat4 = __webpack_require__(12);
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
var objectPool_1 = __webpack_require__(11);
var observableEntity_1 = __webpack_require__(26);
var global_1 = __webpack_require__(4);
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
exports._global = {};

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
var mouse_1 = __webpack_require__(30);
var renderableModel_1 = __webpack_require__(31);
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
    Container.prototype.onGeometryChanged = function () {
        this.revalidate();
    };
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
    Container.prototype.setWH = function (w, h) {
        this.width = w;
        this.height = h;
        this.drawingRect.setWH(w, h);
    };
    Container.prototype.calcDrawableRect = function (contentWidth, contentHeight) {
        var paddedWidth = contentWidth + this.paddingLeft + this.paddingRight;
        var paddedHeight = contentHeight + this.paddingTop + this.paddingBottom;
        if (this.background) {
            this.background.setWH(paddedWidth, paddedHeight);
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
/* 8 */
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
var timer_1 = __webpack_require__(69);
var commonObject_1 = __webpack_require__(17);
var tween_1 = __webpack_require__(32);
var eventEmitter_1 = __webpack_require__(33);
var decorators_1 = __webpack_require__(18);
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
        _this.filters = [];
        _this.blendMode = null;
        _this.acceptLight = false;
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
/* 9 */
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
var shaderGenerator_1 = __webpack_require__(24);
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
/* 12 */
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
/* 13 */
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
var plane_1 = __webpack_require__(20);
var shaderProgram_1 = __webpack_require__(2);
var abstractDrawer_1 = __webpack_require__(6);
var bufferInfo_1 = __webpack_require__(9);
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
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var objectPool_1 = __webpack_require__(11);
var global_1 = __webpack_require__(4);
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
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var objectPool_1 = __webpack_require__(11);
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
var container_1 = __webpack_require__(7);
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
    TextField.prototype.setFontName = function (name) {
        var font = this.game.repository.getArray('Font').find(function (it) {
            return it.name == name;
        });
        if (!font) throw "can not find font with name " + name;
        this.setFont(font);
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
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
exports.Transient = function (params) {
    return function (target) {
        target.transient = params;
    };
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var BaseAbstractBehaviour = /** @class */function () {
    function BaseAbstractBehaviour(game) {
        this.game = game;
        BaseAbstractBehaviour.instances.push(this);
    }
    BaseAbstractBehaviour.prototype.manage = function (gameObject, parameters) {
        console.error(this);
        if (true) throw "BaseAbstractBehaviour: method 'manage' not implemented";
    };
    BaseAbstractBehaviour.prototype.onUpdate = function (time, delta) {};
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
var abstractPrimitive_1 = __webpack_require__(21);
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
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var AbstractPrimitive = /** @class */function () {
    function AbstractPrimitive() {}
    return AbstractPrimitive;
}();
exports.AbstractPrimitive = AbstractPrimitive;

/***/ }),
/* 22 */
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
var shaderGenerator_1 = __webpack_require__(24);
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
var baseModel_1 = __webpack_require__(8);
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
/* 24 */
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
/* 25 */
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
/* 26 */
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
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var color_1 = __webpack_require__(14);
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
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var texture_1 = __webpack_require__(29);
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
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var frameBuffer_1 = __webpack_require__(28);
var size_1 = __webpack_require__(15);
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
var mathEx = __webpack_require__(1);
var point2d_1 = __webpack_require__(3);
var objectPool_1 = __webpack_require__(11);
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
var resource_1 = __webpack_require__(23);
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
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var mathEx = __webpack_require__(1);
var global_1 = __webpack_require__(4);
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
var textField_1 = __webpack_require__(16);
exports.TextField = textField_1.TextField;
var container_1 = __webpack_require__(7);
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
var container_1 = __webpack_require__(7);
var textField_1 = __webpack_require__(16);
var mathEx_1 = __webpack_require__(1);
var Button = /** @class */function (_super) {
    __extends(Button, _super);
    function Button(game) {
        var _this = _super.call(this, game) || this;
        _this.text = '';
        _this.font = null;
        _this._textField = new textField_1.TextField(game);
        _this._textField.name = 'textField_' + mathEx_1.random(0, 1000);
        return _this;
    }
    Button.prototype.revalidate = function () {
        _super.prototype.revalidate.call(this);
        this._textField.setFont(this.font);
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
        this.font = f;
        this._textField.setFont(f);
    };
    Button.prototype.setFontName = function (name) {
        var font = this.game.repository.getArray('Font').find(function (it) {
            return it.name == name;
        });
        if (!font) throw "can not find font with name " + name;
        this.setFont(font);
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
var container_1 = __webpack_require__(7);
var Image = /** @class */function (_super) {
    __extends(Image, _super);
    function Image(game) {
        var _this = _super.call(this, game) || this;
        _this.srcRect = new rect_1.Rect();
        return _this;
    }
    Image.prototype.revalidate = function () {
        if (true && !this.getDefaultResourcePath()) {
            throw "can not render Image: default resource path not specified in resourceMap property";
        }
        var r = this.drawingRect;
        var tex = this.game.renderer.getTextureInfo(this.getDefaultResourcePath());
        if (this.width === 0) this.width = tex.size.width;
        if (this.height === 0) this.height = tex.size.height;
        r.setWH(this.width, this.height);
        if (this.srcRect.width === 0) this.srcRect.width = tex.size.width;
        if (this.srcRect.height === 0) this.srcRect.height = tex.size.height;
    };
    Image.prototype.draw = function () {
        this.game.renderer.drawImage(this.getDefaultResourcePath(), this.srcRect, this.drawingRect);
    };
    return Image;
}(container_1.Container);
exports.Image = Image;

/***/ }),
/* 37 */
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
var container_1 = __webpack_require__(7);
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
    SCALE_STRATEGY[SCALE_STRATEGY["STRETCH"] = 2] = "STRETCH";
})(SCALE_STRATEGY = exports.SCALE_STRATEGY || (exports.SCALE_STRATEGY = {}));

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var color_1 = __webpack_require__(14);
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
var shaderMaterial_1 = __webpack_require__(39);
var renderableModel_1 = __webpack_require__(31);
var global_1 = __webpack_require__(4);
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
var baseAbstractBehaviour_1 = __webpack_require__(19);
var Moveable = /** @class */function (_super) {
    __extends(Moveable, _super);
    function Moveable(game) {
        return _super.call(this, game) || this;
    }
    Moveable.prototype.setDirs = function (value) {
        this._dirs = value;
    };
    Moveable.prototype.manage = function (gameObject, parameters) {
        var _this = this;
        this.gameObject = gameObject;
        this.parameters = parameters;
        this.animations = {};
        this._dirs.forEach(function (dir) {
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
var rigidShapes_1 = __webpack_require__(44);
var commonObject_1 = __webpack_require__(17);
var decorators_1 = __webpack_require__(18);
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
/* 45 */
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
var baseModel_1 = __webpack_require__(8);
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
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var tween_1 = __webpack_require__(32);
var mat4 = __webpack_require__(12);
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
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var game_1 = __webpack_require__(48);
var gameProps_1 = __webpack_require__(100);
var repository_1 = __webpack_require__(101);
if (true && gameProps_1.gameProps.startSceneId === undefined) throw 'start scene not specified';
var game = new game_1.Game();
game.fromJSON(gameProps_1.gameProps);
game.repository.setDescriptions(repository_1.repository);
if (true) {
    game.repository.embeddedResources = __webpack_require__(102).embeddedResources;
}
var startScene = game.repository.getObject(gameProps_1.gameProps.startSceneId, 'Scene');
game.runScene(startScene);

/***/ }),
/* 48 */
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
__webpack_require__(49);
var baseAbstractBehaviour_1 = __webpack_require__(19);
var rendererFactory_1 = __webpack_require__(50);
var repository_1 = __webpack_require__(74);
var mouse_1 = __webpack_require__(30);
var keyboard_1 = __webpack_require__(92);
var gamePad_1 = __webpack_require__(93);
var decorators_1 = __webpack_require__(18);
var commonObject_1 = __webpack_require__(17);
var camera_1 = __webpack_require__(46);
var consts_1 = __webpack_require__(38);
var point2d_1 = __webpack_require__(3);
var lightArray_1 = __webpack_require__(25);
var uiBuilder_1 = __webpack_require__(94);
var colliderEngine_1 = __webpack_require__(95);
var MathEx = __webpack_require__(1);
var global_1 = __webpack_require__(4);
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
        if (scene.prepared) {
            this._currentScene = scene;
            return;
        }
        if (true) {
            var allScripts_1 = __webpack_require__(96);
            var sceneBhScriptName = "" + scene.name[0].toUpperCase() + scene.name.substr(1) + "Behaviour";
            var BhClass = allScripts_1[sceneBhScriptName];
            if (sceneBhScriptName) scene.setIndividualBehaviour(new BhClass());
            scene.layers.forEach(function (l) {
                l.children.forEach(function (go) {
                    go.setCommonBehaviour();
                    var scriptName = go.name && "" + go.name[0].toUpperCase() + go.name.substr(1) + "Behaviour";
                    var BhClass = allScripts_1[scriptName];
                    if (BhClass && !go.getIndividualBehaviour()) go.setIndividualBehaviour(new BhClass());
                });
            });
        }
        scene.preload(function () {
            scene.onShow();
            scene.prepared = true;
            _this._currentScene = scene;
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
var spriteRectLightDrawer_1 = __webpack_require__(52);
var spriteRectDrawer_1 = __webpack_require__(13);
var tiledSpriteRectDrawer_1 = __webpack_require__(56);
var colorRectDrawer_1 = __webpack_require__(57);
var abstractDrawer_1 = __webpack_require__(6);
var lineDrawer_1 = __webpack_require__(58);
var circleDrawer_1 = __webpack_require__(60);
var frameBuffer_1 = __webpack_require__(28);
var matrixStack_1 = __webpack_require__(62);
var mat4 = __webpack_require__(12);
var matEx = __webpack_require__(1);
var texture_1 = __webpack_require__(29);
var addBlendDrawer_1 = __webpack_require__(63);
var rect_1 = __webpack_require__(0);
var abstractCanvasRenderer_1 = __webpack_require__(67);
var shaderMaterial_1 = __webpack_require__(39);
var size_1 = __webpack_require__(15);
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
        var resource = this.getResource(resourcePath);
        if (true && !resource) throw "can not find resource with path " + resourcePath;
        img.src = resource;
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
var spriteRectDrawer_1 = __webpack_require__(13);
var texShaderGenerator_1 = __webpack_require__(10);
var shaderProgram_1 = __webpack_require__(2);
var shaderProgramUtils_1 = __webpack_require__(5);
var lightArray_1 = __webpack_require__(25);
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
var abstractLight_1 = __webpack_require__(27);
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
var plane_1 = __webpack_require__(20);
var shaderProgram_1 = __webpack_require__(2);
var bufferInfo_1 = __webpack_require__(9);
var abstractDrawer_1 = __webpack_require__(6);
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
/* 57 */
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
var plane_1 = __webpack_require__(20);
var shaderProgram_1 = __webpack_require__(2);
var bufferInfo_1 = __webpack_require__(9);
var abstractDrawer_1 = __webpack_require__(6);
var colorShaderGenerator_1 = __webpack_require__(22);
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
var line_1 = __webpack_require__(59);
var shaderProgram_1 = __webpack_require__(2);
var bufferInfo_1 = __webpack_require__(9);
var abstractDrawer_1 = __webpack_require__(6);
var colorShaderGenerator_1 = __webpack_require__(22);
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
var abstractPrimitive_1 = __webpack_require__(21);
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
var circle_1 = __webpack_require__(61);
var shaderProgram_1 = __webpack_require__(2);
var abstractDrawer_1 = __webpack_require__(6);
var bufferInfo_1 = __webpack_require__(9);
var colorShaderGenerator_1 = __webpack_require__(22);
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
var abstractPrimitive_1 = __webpack_require__(21);
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
var mat4 = __webpack_require__(12);
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
var spriteRectDrawer_1 = __webpack_require__(13);
var shaderProgramUtils_1 = __webpack_require__(5);
var texShaderGenerator_1 = __webpack_require__(10);
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
var spriteRectDrawer_1 = __webpack_require__(13);
var mat4 = __webpack_require__(12);
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
var abstractRenderer_1 = __webpack_require__(68);
var consts_1 = __webpack_require__(38);
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
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var textField_1 = __webpack_require__(16);
var device_1 = __webpack_require__(72);
var size_1 = __webpack_require__(15);
var debugError_1 = __webpack_require__(73);
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
        var t = this.renderableCache[textureId];
        if (!t) throw new debugError_1.DebugError("can not find resource " + textureId);
        return t;
    };
    AbstractRenderer.prototype.getResource = function (resourcePath) {
        return  true ? this.game.repository.embeddedResources[resourcePath] : undefined;
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
var color_1 = __webpack_require__(14);
var global_1 = __webpack_require__(4);
var container_1 = __webpack_require__(7);
var Rectangle = /** @class */function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(game) {
        var _this = _super.call(this, game) || this;
        _this.color = color_1.Color.BLACK.clone();
        _this.lineWidth = 1;
        _this.fillColor = color_1.Color.RGB(100, 100, 100);
        _this.width = 16;
        _this.height = 16;
        return _this;
    }
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
}(container_1.Container);
exports.Rectangle = Rectangle;
global_1._global['Rectangle'] = Rectangle;

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
var DebugError = /** @class */function (_super) {
    __extends(DebugError, _super);
    function DebugError(message) {
        return _super.call(this, message) || this;
    }
    return DebugError;
}(Error);
exports.DebugError = DebugError;

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var models = __webpack_require__(75);
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
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var frameAnimation_1 = __webpack_require__(76);
exports.FrameAnimation = frameAnimation_1.FrameAnimation;
var spriteSheet_1 = __webpack_require__(77);
exports.SpriteSheet = spriteSheet_1.SpriteSheet;
var gameObjectProto_1 = __webpack_require__(40);
exports.GameObjectProto = gameObjectProto_1.GameObjectProto;
var gameObject_1 = __webpack_require__(78);
exports.GameObject = gameObject_1.GameObject;
var commonBehaviour_1 = __webpack_require__(85);
exports.CommonBehaviour = commonBehaviour_1.CommonBehaviour;
var particleSystem_1 = __webpack_require__(86);
exports.ParticleSystem = particleSystem_1.ParticleSystem;
var scene_1 = __webpack_require__(87);
exports.Scene = scene_1.Scene;
var sound_1 = __webpack_require__(90);
exports.Sound = sound_1.Sound;
var font_1 = __webpack_require__(91);
exports.Font = font_1.Font;
var layer_1 = __webpack_require__(45);
exports.Layer = layer_1.Layer;
var textField_1 = __webpack_require__(16);
exports.TextField = textField_1.TextField;
var button_1 = __webpack_require__(35);
exports.Button = button_1.Button;
var tileMap_1 = __webpack_require__(43);
exports.TileMap = tileMap_1.TileMap;

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
var commonObject_1 = __webpack_require__(17);
var decorators_1 = __webpack_require__(18);
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
/* 77 */
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
var resource_1 = __webpack_require__(23);
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
/* 78 */
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
var gameObjectProto_1 = __webpack_require__(40);
var commonBehaviours = __webpack_require__(79);
var global_1 = __webpack_require__(4);
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
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var draggable_1 = __webpack_require__(80);
exports.Draggable = draggable_1.DraggableBehaviour;
var control4Dir_1 = __webpack_require__(81);
exports.Control4Dir = control4Dir_1.Control4Dir;
var control2Dir_1 = __webpack_require__(83);
exports.Control2Dir = control2Dir_1.Control2Dir;

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
var baseAbstractBehaviour_1 = __webpack_require__(19);
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
var move4Dir_1 = __webpack_require__(82);
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
/* 82 */
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
var moveable_1 = __webpack_require__(41);
var Move4Dir = /** @class */function (_super) {
    __extends(Move4Dir, _super);
    function Move4Dir(game) {
        return _super.call(this, game) || this;
    }
    Move4Dir.prototype.manage = function (gameObject, parameters) {
        this.setDirs(Move4Dir.DIRS);
        _super.prototype.manage.call(this, gameObject, parameters);
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
/* 83 */
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
var move2Dir_1 = __webpack_require__(84);
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
var moveable_1 = __webpack_require__(41);
var Move2Dir = /** @class */function (_super) {
    __extends(Move2Dir, _super);
    function Move2Dir(game) {
        return _super.call(this, game) || this;
    }
    Move2Dir.prototype.manage = function (gameObject, parameters) {
        this.setDirs(Move2Dir.DIRS);
        _super.prototype.manage.call(this, gameObject, parameters);
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
/* 85 */
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
var baseModel_1 = __webpack_require__(8);
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
/* 86 */
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
var baseModel_1 = __webpack_require__(8);
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
/* 87 */
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
var noop_1 = __webpack_require__(42);
var baseModel_1 = __webpack_require__(8);
var loadingQueue_1 = __webpack_require__(88);
var tileMap_1 = __webpack_require__(43);
var layer_1 = __webpack_require__(45);
var ambientLight_1 = __webpack_require__(89);
var color_1 = __webpack_require__(14);
var camera_1 = __webpack_require__(46);
var Scene = /** @class */function (_super) {
    __extends(Scene, _super);
    function Scene(game) {
        var _this = _super.call(this, game) || this;
        _this.type = 'Scene';
        _this.layers = [];
        _this.useBG = false;
        _this.colorBG = color_1.Color.WHITE;
        _this.prepared = false;
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
        resources = resources.concat(this.game.repository.getArray('SpriteSheet'));
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
/* 88 */
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

/***/ }),
/* 89 */
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
var abstractLight_1 = __webpack_require__(27);
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
var baseModel_1 = __webpack_require__(8);
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
var rect_1 = __webpack_require__(0);
var resource_1 = __webpack_require__(23);
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
/* 92 */
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
/* 93 */
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
/* 94 */
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
        var Clazz = allUIClasses[key];
        if (true && !Clazz) throw "no such ui class: " + key;
        var instance = new Clazz(this.game);
        this.resolveObjProperties(instance, obj);
        instance.revalidate();
        return instance;
    };
    UIBuilder.prototype.resolveAbsoluteLayout = function (props) {
        var _this = this;
        var children = props.children || [];
        delete props.children;
        var l = new absoluteLayout_1.AbsoluteLayout(this.game);
        this.resolveObjProperties(l, props);
        children.forEach(function (v) {
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
        if (firstKey === 'AbsoluteLayout') return this.resolveAbsoluteLayout(rootObj);else return this.resolveObj(firstKey, rootObj);
    };
    return UIBuilder;
}();
exports.UIBuilder = UIBuilder;

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var rigidShapes_1 = __webpack_require__(44);
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
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _button = __webpack_require__(97);

Object.defineProperty(exports, 'ButtonBehaviour', {
  enumerable: true,
  get: function get() {
    return _button.ButtonBehaviour;
  }
});

var _gameScene = __webpack_require__(98);

Object.defineProperty(exports, 'GameSceneBehaviour', {
  enumerable: true,
  get: function get() {
    return _gameScene.GameSceneBehaviour;
  }
});

var _introScene = __webpack_require__(99);

Object.defineProperty(exports, 'IntroSceneBehaviour', {
  enumerable: true,
  get: function get() {
    return _introScene.IntroSceneBehaviour;
  }
});

/***/ }),
/* 97 */
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
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GameSceneBehaviour = exports.GameSceneBehaviour = function () {
    function GameSceneBehaviour() {
        _classCallCheck(this, GameSceneBehaviour);
    }

    _createClass(GameSceneBehaviour, [{
        key: 'onCreate',
        value: function onCreate() {
            var bgView = this.game.uiBuilder.build({
                AbsoluteLayout: {
                    pos: { x: 0, y: 0 },
                    width: this.game.width,
                    height: this.game.height,
                    layoutWidth: 0,
                    layoutHeight: 0,
                    background: {
                        type: 'Image',
                        resourceMap: { main: 'resources/bg.jpg' }
                    },
                    children: [{
                        TextField: {
                            pos: { x: 330, y: 300 },
                            fontName: 'cartahena_large',
                            name: '1',
                            text: 'Game will be here'
                        }
                    }]
                }
            });
            this.scene.appendChild(bgView);
        }
    }, {
        key: 'onUpdate',
        value: function onUpdate() {}
    }, {
        key: 'onDestroy',
        value: function onDestroy() {}
    }]);

    return GameSceneBehaviour;
}();

/***/ }),
/* 99 */
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
            var self = this;
            var widget = this.game.uiBuilder.build({
                AbsoluteLayout: {
                    pos: { x: 0, y: 0 },
                    width: this.game.width,
                    height: this.game.height,
                    layoutWidth: 0,
                    layoutHeight: 0,
                    background: {
                        type: 'Image', // NinePatchImage Image
                        resourceMap: { main: 'resources/bg.jpg' }
                        //ABCD: 20
                    },
                    on: ['click', function () {
                        self.toGameScene();
                    }],
                    children: [{
                        Image: {
                            pos: { x: 180, y: -40 },
                            resourceMap: { main: 'resources/pirate-flag.png' }
                        }
                    }, {
                        TextField: {
                            pos: { x: 330, y: 300 },
                            fontName: 'cartahena_large',
                            name: '1',
                            text: 'Cartahena'
                        }
                    }, {
                        Button: {
                            pos: { x: 360, y: 522 },
                            fontName: 'scriptFont',
                            text: "Продолжить",
                            paddings: 15,
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
        key: 'toGameScene',
        value: function toGameScene() {
            var gameScene = this.game.repository.getArray('Scene').find(function (it) {
                return it.name == 'gameScene';
            });
            this.game.runScene(gameScene);
        }
    }]);

    return IntroSceneBehaviour;
}();

/***/ }),
/* 100 */
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
/* 101 */
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
    }, {
        "id": 13,
        "name": "gameScene",
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
            "id": 14
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
            "filters": [],
            "acceptLight": false,
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
    }, {
        "name": "mainLayer",
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
        "type": "Layer",
        "id": 14
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
    }, {
        "name": "bg",
        "width": 650,
        "height": 483,
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
            "main": "resources/bg.jpg"
        },
        "type": "SpriteSheet",
        "frameRect": {
            "x": 0,
            "y": 0,
            "width": 0,
            "height": 0
        },
        "id": 10
    }, {
        "name": "pirate-flag",
        "width": 640,
        "height": 640,
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
            "main": "resources/pirate-flag.png"
        },
        "type": "SpriteSheet",
        "frameRect": {
            "x": 0,
            "y": 0,
            "width": 0,
            "height": 0
        },
        "id": 11
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
    }, {
        "name": "cartahena_large",
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
            "main": "resources/cartahena_large.png"
        },
        "type": "Font",
        "fontSize": 56,
        "fontFamily": "Algerian",
        "fontContext": {
            "symbols": {
                "0": {
                    "x": 211,
                    "y": 74,
                    "width": 32,
                    "height": 62
                },
                "1": {
                    "x": 252,
                    "y": 74,
                    "width": 33,
                    "height": 62
                },
                "2": {
                    "x": 4,
                    "y": 144,
                    "width": 33,
                    "height": 62
                },
                "3": {
                    "x": 45,
                    "y": 144,
                    "width": 33,
                    "height": 62
                },
                "4": {
                    "x": 87,
                    "y": 144,
                    "width": 33,
                    "height": 62
                },
                "5": {
                    "x": 128,
                    "y": 144,
                    "width": 33,
                    "height": 62
                },
                "6": {
                    "x": 170,
                    "y": 144,
                    "width": 33,
                    "height": 62
                },
                "7": {
                    "x": 212,
                    "y": 144,
                    "width": 33,
                    "height": 62
                },
                "8": {
                    "x": 253,
                    "y": 144,
                    "width": 33,
                    "height": 62
                },
                "9": {
                    "x": 4,
                    "y": 214,
                    "width": 33,
                    "height": 62
                },
                " ": {
                    "x": 4,
                    "y": 4,
                    "width": 14,
                    "height": 62
                },
                "!": {
                    "x": 26,
                    "y": 4,
                    "width": 18,
                    "height": 62
                },
                "\"": {
                    "x": 52,
                    "y": 4,
                    "width": 18,
                    "height": 62
                },
                "#": {
                    "x": 79,
                    "y": 4,
                    "width": 32,
                    "height": 62
                },
                "$": {
                    "x": 119,
                    "y": 4,
                    "width": 32,
                    "height": 62
                },
                "%": {
                    "x": 160,
                    "y": 4,
                    "width": 35,
                    "height": 62
                },
                "&": {
                    "x": 203,
                    "y": 4,
                    "width": 44,
                    "height": 62
                },
                "'": {
                    "x": 256,
                    "y": 4,
                    "width": 10,
                    "height": 62
                },
                "(": {
                    "x": 275,
                    "y": 4,
                    "width": 24,
                    "height": 62
                },
                ")": {
                    "x": 4,
                    "y": 74,
                    "width": 24,
                    "height": 62
                },
                "*": {
                    "x": 36,
                    "y": 74,
                    "width": 19,
                    "height": 62
                },
                "+": {
                    "x": 64,
                    "y": 74,
                    "width": 32,
                    "height": 62
                },
                ",": {
                    "x": 105,
                    "y": 74,
                    "width": 14,
                    "height": 62
                },
                "-": {
                    "x": 128,
                    "y": 74,
                    "width": 17,
                    "height": 62
                },
                ".": {
                    "x": 153,
                    "y": 74,
                    "width": 14,
                    "height": 62
                },
                "/": {
                    "x": 176,
                    "y": 74,
                    "width": 26,
                    "height": 62
                },
                ":": {
                    "x": 45,
                    "y": 214,
                    "width": 14,
                    "height": 62
                },
                ";": {
                    "x": 68,
                    "y": 214,
                    "width": 14,
                    "height": 62
                },
                "<": {
                    "x": 91,
                    "y": 214,
                    "width": 28,
                    "height": 62
                },
                "=": {
                    "x": 127,
                    "y": 214,
                    "width": 32,
                    "height": 62
                },
                ">": {
                    "x": 168,
                    "y": 214,
                    "width": 28,
                    "height": 62
                },
                "?": {
                    "x": 204,
                    "y": 214,
                    "width": 24,
                    "height": 62
                },
                "@": {
                    "x": 236,
                    "y": 214,
                    "width": 40,
                    "height": 62
                },
                "A": {
                    "x": 4,
                    "y": 284,
                    "width": 42,
                    "height": 62
                },
                "B": {
                    "x": 54,
                    "y": 284,
                    "width": 36,
                    "height": 62
                },
                "C": {
                    "x": 98,
                    "y": 284,
                    "width": 32,
                    "height": 62
                },
                "D": {
                    "x": 139,
                    "y": 284,
                    "width": 33,
                    "height": 62
                },
                "E": {
                    "x": 181,
                    "y": 284,
                    "width": 34,
                    "height": 62
                },
                "F": {
                    "x": 223,
                    "y": 284,
                    "width": 30,
                    "height": 62
                },
                "G": {
                    "x": 262,
                    "y": 284,
                    "width": 38,
                    "height": 62
                },
                "H": {
                    "x": 4,
                    "y": 354,
                    "width": 35,
                    "height": 62
                },
                "I": {
                    "x": 47,
                    "y": 354,
                    "width": 17,
                    "height": 62
                },
                "J": {
                    "x": 72,
                    "y": 354,
                    "width": 28,
                    "height": 62
                },
                "K": {
                    "x": 109,
                    "y": 354,
                    "width": 37,
                    "height": 62
                },
                "L": {
                    "x": 154,
                    "y": 354,
                    "width": 30,
                    "height": 62
                },
                "M": {
                    "x": 193,
                    "y": 354,
                    "width": 40,
                    "height": 62
                },
                "N": {
                    "x": 242,
                    "y": 354,
                    "width": 33,
                    "height": 62
                },
                "O": {
                    "x": 4,
                    "y": 424,
                    "width": 34,
                    "height": 62
                },
                "P": {
                    "x": 46,
                    "y": 424,
                    "width": 33,
                    "height": 62
                },
                "Q": {
                    "x": 88,
                    "y": 424,
                    "width": 35,
                    "height": 62
                },
                "R": {
                    "x": 131,
                    "y": 424,
                    "width": 35,
                    "height": 62
                },
                "S": {
                    "x": 175,
                    "y": 424,
                    "width": 31,
                    "height": 62
                },
                "T": {
                    "x": 214,
                    "y": 424,
                    "width": 32,
                    "height": 62
                },
                "U": {
                    "x": 254,
                    "y": 424,
                    "width": 34,
                    "height": 62
                },
                "V": {
                    "x": 4,
                    "y": 494,
                    "width": 34,
                    "height": 62
                },
                "W": {
                    "x": 46,
                    "y": 494,
                    "width": 44,
                    "height": 62
                },
                "X": {
                    "x": 98,
                    "y": 494,
                    "width": 39,
                    "height": 62
                },
                "Y": {
                    "x": 146,
                    "y": 494,
                    "width": 35,
                    "height": 62
                },
                "Z": {
                    "x": 189,
                    "y": 494,
                    "width": 35,
                    "height": 62
                },
                "[": {
                    "x": 233,
                    "y": 494,
                    "width": 24,
                    "height": 62
                },
                "\\": {
                    "x": 266,
                    "y": 494,
                    "width": 28,
                    "height": 62
                },
                "]": {
                    "x": 4,
                    "y": 564,
                    "width": 24,
                    "height": 62
                },
                "^": {
                    "x": 36,
                    "y": 564,
                    "width": 28,
                    "height": 62
                },
                "_": {
                    "x": 72,
                    "y": 564,
                    "width": 28,
                    "height": 62
                },
                "`": {
                    "x": 108,
                    "y": 564,
                    "width": 28,
                    "height": 62
                },
                "a": {
                    "x": 144,
                    "y": 564,
                    "width": 42,
                    "height": 62
                },
                "b": {
                    "x": 194,
                    "y": 564,
                    "width": 36,
                    "height": 62
                },
                "c": {
                    "x": 239,
                    "y": 564,
                    "width": 32,
                    "height": 62
                },
                "d": {
                    "x": 279,
                    "y": 564,
                    "width": 33,
                    "height": 62
                },
                "e": {
                    "x": 4,
                    "y": 634,
                    "width": 34,
                    "height": 62
                },
                "f": {
                    "x": 46,
                    "y": 634,
                    "width": 30,
                    "height": 62
                },
                "g": {
                    "x": 85,
                    "y": 634,
                    "width": 38,
                    "height": 62
                },
                "h": {
                    "x": 131,
                    "y": 634,
                    "width": 35,
                    "height": 62
                },
                "i": {
                    "x": 175,
                    "y": 634,
                    "width": 17,
                    "height": 62
                },
                "j": {
                    "x": 200,
                    "y": 634,
                    "width": 28,
                    "height": 62
                },
                "k": {
                    "x": 236,
                    "y": 634,
                    "width": 37,
                    "height": 62
                },
                "l": {
                    "x": 282,
                    "y": 634,
                    "width": 30,
                    "height": 62
                },
                "m": {
                    "x": 4,
                    "y": 704,
                    "width": 40,
                    "height": 62
                },
                "n": {
                    "x": 52,
                    "y": 704,
                    "width": 33,
                    "height": 62
                },
                "o": {
                    "x": 94,
                    "y": 704,
                    "width": 34,
                    "height": 62
                },
                "p": {
                    "x": 137,
                    "y": 704,
                    "width": 33,
                    "height": 62
                },
                "q": {
                    "x": 178,
                    "y": 704,
                    "width": 35,
                    "height": 62
                },
                "r": {
                    "x": 222,
                    "y": 704,
                    "width": 35,
                    "height": 62
                },
                "s": {
                    "x": 266,
                    "y": 704,
                    "width": 31,
                    "height": 62
                },
                "t": {
                    "x": 4,
                    "y": 774,
                    "width": 32,
                    "height": 62
                },
                "u": {
                    "x": 44,
                    "y": 774,
                    "width": 34,
                    "height": 62
                },
                "v": {
                    "x": 86,
                    "y": 774,
                    "width": 34,
                    "height": 62
                },
                "w": {
                    "x": 129,
                    "y": 774,
                    "width": 44,
                    "height": 62
                },
                "x": {
                    "x": 181,
                    "y": 774,
                    "width": 39,
                    "height": 62
                },
                "y": {
                    "x": 228,
                    "y": 774,
                    "width": 35,
                    "height": 62
                },
                "z": {
                    "x": 272,
                    "y": 774,
                    "width": 35,
                    "height": 62
                },
                "{": {
                    "x": 4,
                    "y": 844,
                    "width": 24,
                    "height": 62
                },
                "|": {
                    "x": 36,
                    "y": 844,
                    "width": 28,
                    "height": 62
                },
                "}": {
                    "x": 72,
                    "y": 844,
                    "width": 24,
                    "height": 62
                },
                "~": {
                    "x": 105,
                    "y": 844,
                    "width": 37,
                    "height": 62
                },
                "": {
                    "x": 150,
                    "y": 844,
                    "width": 28,
                    "height": 62
                },
                "": {
                    "x": 186,
                    "y": 844,
                    "width": 0,
                    "height": 62
                },
                "": {
                    "x": 194,
                    "y": 844,
                    "width": 0,
                    "height": 62
                },
                "": {
                    "x": 202,
                    "y": 844,
                    "width": 28,
                    "height": 62
                },
                "": {
                    "x": 238,
                    "y": 844,
                    "width": 28,
                    "height": 62
                },
                "": {
                    "x": 274,
                    "y": 844,
                    "width": 28,
                    "height": 62
                },
                "": {
                    "x": 4,
                    "y": 914,
                    "width": 44,
                    "height": 62
                },
                "": {
                    "x": 56,
                    "y": 914,
                    "width": 28,
                    "height": 62
                },
                "": {
                    "x": 92,
                    "y": 914,
                    "width": 28,
                    "height": 62
                },
                "": {
                    "x": 128,
                    "y": 914,
                    "width": 20,
                    "height": 62
                },
                "": {
                    "x": 156,
                    "y": 914,
                    "width": 43,
                    "height": 62
                },
                "": {
                    "x": 208,
                    "y": 914,
                    "width": 27,
                    "height": 62
                },
                "": {
                    "x": 243,
                    "y": 914,
                    "width": 28,
                    "height": 62
                },
                "": {
                    "x": 4,
                    "y": 984,
                    "width": 55,
                    "height": 62
                },
                "": {
                    "x": 67,
                    "y": 984,
                    "width": 0,
                    "height": 62
                },
                "": {
                    "x": 75,
                    "y": 984,
                    "width": 0,
                    "height": 62
                },
                "": {
                    "x": 83,
                    "y": 984,
                    "width": 0,
                    "height": 62
                },
                "": {
                    "x": 91,
                    "y": 984,
                    "width": 0,
                    "height": 62
                },
                "": {
                    "x": 99,
                    "y": 984,
                    "width": 11,
                    "height": 62
                },
                "": {
                    "x": 119,
                    "y": 984,
                    "width": 11,
                    "height": 62
                },
                "": {
                    "x": 138,
                    "y": 984,
                    "width": 23,
                    "height": 62
                },
                "": {
                    "x": 169,
                    "y": 984,
                    "width": 23,
                    "height": 62
                },
                "": {
                    "x": 201,
                    "y": 984,
                    "width": 0,
                    "height": 62
                },
                "А": {
                    "x": 209,
                    "y": 984,
                    "width": 40,
                    "height": 62
                },
                "Б": {
                    "x": 257,
                    "y": 984,
                    "width": 32,
                    "height": 62
                },
                "В": {
                    "x": 4,
                    "y": 1054,
                    "width": 37,
                    "height": 62
                },
                "Г": {
                    "x": 49,
                    "y": 1054,
                    "width": 32,
                    "height": 62
                },
                "Д": {
                    "x": 89,
                    "y": 1054,
                    "width": 38,
                    "height": 62
                },
                "Е": {
                    "x": 135,
                    "y": 1054,
                    "width": 34,
                    "height": 62
                },
                "Ж": {
                    "x": 178,
                    "y": 1054,
                    "width": 50,
                    "height": 62
                },
                "З": {
                    "x": 236,
                    "y": 1054,
                    "width": 28,
                    "height": 62
                },
                "И": {
                    "x": 272,
                    "y": 1054,
                    "width": 40,
                    "height": 62
                },
                "Й": {
                    "x": 4,
                    "y": 1124,
                    "width": 40,
                    "height": 62
                },
                "К": {
                    "x": 52,
                    "y": 1124,
                    "width": 37,
                    "height": 62
                },
                "Л": {
                    "x": 97,
                    "y": 1124,
                    "width": 37,
                    "height": 62
                },
                "М": {
                    "x": 143,
                    "y": 1124,
                    "width": 49,
                    "height": 62
                },
                "Н": {
                    "x": 201,
                    "y": 1124,
                    "width": 40,
                    "height": 62
                },
                "О": {
                    "x": 250,
                    "y": 1124,
                    "width": 40,
                    "height": 62
                },
                "П": {
                    "x": 4,
                    "y": 1194,
                    "width": 40,
                    "height": 62
                },
                "Р": {
                    "x": 52,
                    "y": 1194,
                    "width": 31,
                    "height": 62
                },
                "С": {
                    "x": 91,
                    "y": 1194,
                    "width": 37,
                    "height": 62
                },
                "Т": {
                    "x": 136,
                    "y": 1194,
                    "width": 34,
                    "height": 62
                },
                "У": {
                    "x": 179,
                    "y": 1194,
                    "width": 39,
                    "height": 62
                },
                "Ф": {
                    "x": 226,
                    "y": 1194,
                    "width": 44,
                    "height": 62
                },
                "Х": {
                    "x": 4,
                    "y": 1264,
                    "width": 40,
                    "height": 62
                },
                "Ц": {
                    "x": 52,
                    "y": 1264,
                    "width": 40,
                    "height": 62
                },
                "Ч": {
                    "x": 100,
                    "y": 1264,
                    "width": 36,
                    "height": 62
                },
                "Ш": {
                    "x": 145,
                    "y": 1264,
                    "width": 56,
                    "height": 62
                },
                "Щ": {
                    "x": 209,
                    "y": 1264,
                    "width": 56,
                    "height": 62
                },
                "Ъ": {
                    "x": 274,
                    "y": 1264,
                    "width": 39,
                    "height": 62
                },
                "Ы": {
                    "x": 4,
                    "y": 1334,
                    "width": 48,
                    "height": 62
                },
                "Ь": {
                    "x": 60,
                    "y": 1334,
                    "width": 32,
                    "height": 62
                },
                "Э": {
                    "x": 100,
                    "y": 1334,
                    "width": 36,
                    "height": 62
                },
                "Ю": {
                    "x": 145,
                    "y": 1334,
                    "width": 57,
                    "height": 62
                },
                "Я": {
                    "x": 211,
                    "y": 1334,
                    "width": 37,
                    "height": 62
                },
                "а": {
                    "x": 256,
                    "y": 1334,
                    "width": 24,
                    "height": 62
                },
                "б": {
                    "x": 4,
                    "y": 1404,
                    "width": 28,
                    "height": 62
                },
                "в": {
                    "x": 40,
                    "y": 1404,
                    "width": 26,
                    "height": 62
                },
                "г": {
                    "x": 74,
                    "y": 1404,
                    "width": 22,
                    "height": 62
                },
                "д": {
                    "x": 105,
                    "y": 1404,
                    "width": 28,
                    "height": 62
                },
                "е": {
                    "x": 142,
                    "y": 1404,
                    "width": 24,
                    "height": 62
                },
                "ж": {
                    "x": 175,
                    "y": 1404,
                    "width": 38,
                    "height": 62
                },
                "з": {
                    "x": 221,
                    "y": 1404,
                    "width": 22,
                    "height": 62
                },
                "и": {
                    "x": 252,
                    "y": 1404,
                    "width": 29,
                    "height": 62
                },
                "й": {
                    "x": 4,
                    "y": 1474,
                    "width": 29,
                    "height": 62
                },
                "к": {
                    "x": 41,
                    "y": 1474,
                    "width": 27,
                    "height": 62
                },
                "л": {
                    "x": 77,
                    "y": 1474,
                    "width": 27,
                    "height": 62
                },
                "м": {
                    "x": 113,
                    "y": 1474,
                    "width": 35,
                    "height": 62
                },
                "н": {
                    "x": 156,
                    "y": 1474,
                    "width": 29,
                    "height": 62
                },
                "о": {
                    "x": 194,
                    "y": 1474,
                    "width": 28,
                    "height": 62
                },
                "п": {
                    "x": 230,
                    "y": 1474,
                    "width": 29,
                    "height": 62
                },
                "р": {
                    "x": 268,
                    "y": 1474,
                    "width": 28,
                    "height": 62
                },
                "с": {
                    "x": 4,
                    "y": 1544,
                    "width": 24,
                    "height": 62
                },
                "т": {
                    "x": 36,
                    "y": 1544,
                    "width": 24,
                    "height": 62
                },
                "у": {
                    "x": 69,
                    "y": 1544,
                    "width": 28,
                    "height": 62
                },
                "ф": {
                    "x": 105,
                    "y": 1544,
                    "width": 36,
                    "height": 62
                },
                "х": {
                    "x": 149,
                    "y": 1544,
                    "width": 28,
                    "height": 62
                },
                "ц": {
                    "x": 185,
                    "y": 1544,
                    "width": 29,
                    "height": 62
                },
                "ч": {
                    "x": 223,
                    "y": 1544,
                    "width": 28,
                    "height": 62
                },
                "ш": {
                    "x": 259,
                    "y": 1544,
                    "width": 43,
                    "height": 62
                },
                "щ": {
                    "x": 4,
                    "y": 1614,
                    "width": 43,
                    "height": 62
                },
                "ъ": {
                    "x": 55,
                    "y": 1614,
                    "width": 28,
                    "height": 62
                },
                "ы": {
                    "x": 92,
                    "y": 1614,
                    "width": 37,
                    "height": 62
                },
                "ь": {
                    "x": 137,
                    "y": 1614,
                    "width": 25,
                    "height": 62
                },
                "э": {
                    "x": 171,
                    "y": 1614,
                    "width": 24,
                    "height": 62
                },
                "ю": {
                    "x": 203,
                    "y": 1614,
                    "width": 41,
                    "height": 62
                },
                "я": {
                    "x": 253,
                    "y": 1614,
                    "width": 25,
                    "height": 62
                },
                "ѐ": {
                    "x": 286,
                    "y": 1614,
                    "width": 24,
                    "height": 62
                },
                "ё": {
                    "x": 4,
                    "y": 1684,
                    "width": 24,
                    "height": 62
                },
                "ђ": {
                    "x": 36,
                    "y": 1684,
                    "width": 27,
                    "height": 62
                },
                "ѓ": {
                    "x": 71,
                    "y": 1684,
                    "width": 22,
                    "height": 62
                },
                "є": {
                    "x": 102,
                    "y": 1684,
                    "width": 24,
                    "height": 62
                },
                "ѕ": {
                    "x": 134,
                    "y": 1684,
                    "width": 21,
                    "height": 62
                },
                "і": {
                    "x": 164,
                    "y": 1684,
                    "width": 15,
                    "height": 62
                },
                "ї": {
                    "x": 188,
                    "y": 1684,
                    "width": 15,
                    "height": 62
                },
                "ј": {
                    "x": 211,
                    "y": 1684,
                    "width": 15,
                    "height": 62
                },
                "љ": {
                    "x": 235,
                    "y": 1684,
                    "width": 40,
                    "height": 62
                },
                "њ": {
                    "x": 4,
                    "y": 1754,
                    "width": 40,
                    "height": 62
                },
                "ћ": {
                    "x": 52,
                    "y": 1754,
                    "width": 28,
                    "height": 62
                }
            },
            "width": 320,
            "height": 1820
        },
        "id": 12
    }]
};

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.embeddedResources={"resources/bg.jpg":"data:image/jpg;base64,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","resources/button.png":"data:image/png;base64,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","resources/cartahena_large.png":"data:image/png;base64,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","resources/null.png":"data:image/png;base64,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","resources/pirate-flag.png":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAoAAAAKACAYAAAAMzckjAAAgAElEQVR4XuydCbh+5dTG7zuUiiakookQpZSpoklFaVJp+EqlQQMNQiqREk2aNA8KiVBCChlC0mCKzGSIyBQhkeL+rlX76PTvDPvd7x6eZ+97Xdf/Or6v/azh9+zznvU+w1qExQRMwARMwARMwARMYFAEOKhoHawJmIAJmIAJmIAJmACcAPolMAETMAETMAETMIGBEXACOLAJd7gmYAImYAImYAIm4ATQ74AJmIAJmIAJmIAJDIyAE8CBTbjDNQETMAETMAETMAEngH4HTMAETMAETMAETGBgBJwADmzCHa4JmIAJmIAJmIAJOAH0O2ACJmACJmACJmACAyPgBHBgE+5wTcAETMAETMAETMAJoN8BEzABEzABEzABExgYASeAA5twh2sCJmACJmACJmACTgD9DpiACZiACZiACZjAwAg4ARzYhDtcEzABEzABEzABE3AC6HfABEzABEzABEzABAZGwAngwCbc4ZqACZiACZiACZiAE0C/AyZgAiZgAiZgAiYwMAJOAAc24Q7XBEzABEzABEzABJwA+h0wARMwARMwARMwgYERcAI4sAl3uCZgAiZgAiZgAibgBNDvgAmYgAmYgAmYgAkMjIATwIFNuMM1ARMwARMwARMwASeAfgdMwARMwARMwARMYGAEnAAObMIdrgmYgAmYgAmYgAk4AfQ7YAImYAImYAImYAIDI+AEcGAT7nBNwARMwARMwARMwAmg3wETMAETMAETMAETGBgBJ4ADm3CHawImYAImYAImYAJOAP0OmIAJmIAJmIAJmMDACDgBHNiEO1wTMAETMAETMAETcALod8AETMAETMAETMAEBkbACeDAJtzhmoAJmIAJmIAJmIATQL8DJmACJmACJmACJjAwAk4ABzbhDtcETMAETMAETMAEnAD6HTABEzABEzABEzCBgRFwAjiwCXe4JmACJmACJmACJuAE0O+ACZiACZiACZiACQyMgBPAgU24wzUBEzABEzABEzABJ4B+B0zABEzABEzABExgYAScAA5swh2uCeROQNI8ABYDsPg0PxcEMPcU/x4xx/9vXgD3APgHgDuLf9P9778B+DuA2wH8ufg38b//RPLfuXO1/yZgAsMi4ARwWPPtaE0geQKS5gKwNICnAnjapH9LFAnfwgkGcdekpPAPAG4G8ONJ/35JUgn6bZdMwAQGSsAJ4EAn3mGbQNcEipW8VSYleBMJX/yMFbw+yd1TJIU/BHAjyViFtJiACZhAqwScALaK28ZMYJgEJC0K4FnFv5WLn8sDiNW+IUskht8GcMPEP5I/GzIQx24CJtAOASeA7XC2FRMYDAFJsXq3JoD1AMQKXyR8cV7PUo5AnDH8WpEQXgfgqyTjjKLFBEzABGoj4ASwNpRWZALDJSBpWQAbFv8i8Zt/uDRqj/xeAN8EcBWALxYJYZw5tJiACZhAZQJOACuj80ATGC4BSY8EsDaAjYqkLy5rWNohEGcGY8s4ksFICq8jGVvJFhMwARMoTcAJYGlUftAEhk1A0nwANgbwcgCbAogyKpbuCcRq4BUALgFwOUmvDnY/J/bABJIn4AQw+SmygybQHQFJsZW7SZH0xc9Y+bOkS+CfAD4F4OIiGYy6hhYTMAETeAgBJ4B+KUzABB5EoCjPsgWArYsVvyi8bMmPQCSDnwHwIQCf8DZxfhNoj02gSQJOAJuka90mkBEBSVF8eS8AewBYJCPX7ersBKJrybsBnE7y17M/7idMwAT6TsAJYN9n2PGZwAwEJMVnwIsBvLrY6h16Xb6+vy//LbaITwPwWXcn6ft0Oz4TmJ6AE0C/HSYwQAKSFgKwC4B9ADxpgAgc8v3t6s4EcD7JOwzEBExgWAScAA5rvh3twAlIWgzA64oVP9fqG/j7UIQfF0UiETye5O+NxARMYBgEnAAOY54d5cAJSFoKwIEAXgXAlzoG/j5ME/6/AJwH4BiStxqRCZhAvwk4Aez3/Dq6gROQtByAgwHsDODhA8fh8MsRiELT7wfwdpK/KDfET5mACeRGwAlgbjNmf02gBAFJTwRwFIAdAPhiRwlmfuQhBOLCyIUADvWKoN8OE+gfASeA/ZtTRzRgAkWLttjqfZOLNg/4Rag39DsjCQRwqm8N1wvW2kygSwJOALukb9smUCMBSZsBOAVA1POzmEDdBL4BYFeS361bsfWZgAm0T8AJYPvMbdEEaiUgKcq4nANgvVoVW5kJPJTAvQBOBHA4yeg0YjEBE8iUgBPATCfObpuApLjUcVhxyeMRJmICLRK4BcDuJD/fok2bMgETqJGAE8AaYVqVCbRFQNIyAC4B8Oy2bNqOCUxB4CwAryd5l+mYgAnkRcAJYF7zZW9NAJK2Keq1Pco4TCABAj8HsCPJaxPwxS6YgAmUJOAEsCQoP2YCXROQFAnf6QB26toX2zeBOQhEyZgTALyZ5L9NxwRMIH0CTgDTnyN7aAKx6hdbvbHlG1u/FhNIlcAPo/YkyRtTddB+mYAJ3E/ACaDfBBNInICkvaIGmzt5JD5Rdm+CQNwUfiXJDxiJCZhAugScAKY7N/Zs4AQkRc/e8wFsP3AUDj9PAlEu5kCSsT1sMQETSIyAE8DEJsTumEAQkLQUgMsBPNNETCBjAlEmZguS0U3EYgImkBABJ4AJTYZdMYEi+VsbwCcALGgiJtADAj8CsBHJX/YgFodgAr0h4ASwN1PpQPpAQNIBAI4HMFcf4nEMJlAQ+AuAzUheYyImYAJpEHACmMY82AsTiG3ft0aLLaMwgZ4SuBvApiQ/19P4HJYJZEXACWBW02Vn+0pA0kkAXtvX+ByXCRQE7inOBF5hIiZgAt0ScALYLX9bHzgBSfE7GMWd9x44Coc/HAJRJmYbkh8bTsiO1ATSI+AEML05sUcDIVAkf++PwrkDCdlhmsAEgf8A2JXkBUZiAibQDQEngN1wt1UTiDN/USjXNf78LgyVgADsRfKcoQJw3CbQJQEngF3St+3BEpB0ZPRNHSwAB24C9xOIJPBlJC8zEBMwgXYJOAFsl7etmUCs/MWqn9tk+V0wgfsJ/BvAei4R49fBBNol4ASwXd62NnACklYH8GUAjxg4CodvApMJ/B3AGiS/ZywmYALtEHAC2A5nWzGBWPl7CoAbACxsHCZgAg8h8HsAq5L8rdmYgAk0T8AJYPOMbcEEIvmLpO9bAJYxDhMwgWkJ/BjAaiTvMCMTMIFmCTgBbJavtZtAJH/xe3YVgHWMwwRMYFYCXyzOBMYFEYsJmEBDBJwANgTWak1ggoCkwwAcYSImYAKlCbyV5NtKP+0HTcAERibgBHBkZB5gAuUJSIpVv1j98+9aeWx+0gRi9S9uBsdqoMUETKABAv6j1ABUqzSBICDp8QC+D+AxJmICJjAygdsBrEAyLodYTMAEaibgBLBmoFZnAkXy93AAVwOIsi8WEzCBagS+GmdnSUb/YIsJmECNBJwA1gjTqkxggoCkowEcbCImYAJjEziG5CFja7ECEzCBBxFwAugXwgRqJiDpWQC+CWCumlVbnQkMkcB/iq3gKBFjMQETqImAE8CaQFqNCQQBSQ8DcBOAZ5iICZhAbQSuJfmC2rRZkQmYgG8m+h0wgToJSIpt39j+tZiACdRLYHeS59Wr0tpMYLgEvAI43Ll35DUTkLRccet37ppVW50JmAAQ3UGeQvJPhmECJjA+ASeA4zO0BhO4j4Ck6PP7POMwARNojMB7Se7SmHYrNoEBEXACOKDJdqjNEZC0A4ALm7NgzSZgAgWB1UlebxomYALjEXACOB4/jzaBiYsfPwHwJOMwARNonMBXSb6wcSs2YAI9J+AEsOcT7PCaJyBpVwA+nN48alswgQkCm5K83DhMwASqE3ACWJ2dR5rAxOrfLwAsaRwmYAKtEYiagM8g+d/WLNqQCfSMgBPAnk2ow2mXgKS9AZzRrlVbMwETALATyfebhAmYQDUCTgCrcfMoE4jVvyj3cguAxYzDBEygdQK3xrlbkve0btkGTaAHBJwA9mASHUI3BCTtA+DUbqzbqgmYAIB9SJ5uEiZgAqMTcAI4OjOPMIFY/YvfnZt989cvgwl0SuBnRXFodeqFjZtAhgScAGY4aXa5ewKSNgVwWfee2AMTGDwB3wge/CtgAFUIOAGsQs1jBk9A0ucBrDd4EAZgAt0T+ALJ9bt3wx6YQF4EnADmNV/2NgECkp4O4AcJuGIXTMAE7iewAkn/TvptMIERCDgBHAGWHzWBICDpXAC7m4YJmEAyBM4luUcy3tgRE8iAgBPADCbJLqZDQNJCAH4HYJ50vLInJjB4AndHOSaSdwyehAGYQEkCTgBLgvJjJlCs/sUqw9mmYQImkByBPUjG6rzFBEygBAEngCUg+RETmCAg6SoA65qICZhAcgSuIumLWclNix1KlYATwFRnxn4lR0DS4wHcBsC/N8nNjh0yAUQtwMVJ/t4sTMAEZifgP2SzM/ITJnAfAUn7AXiXcZiACSRLYD+S7s6T7PTYsZQIOAFMaTbsS9IEJF0LYPWknbRzJjBsAteSfMGwETh6EyhHwAlgOU5+auAEJC0J4FcDx+DwTSAHAkuR/HUOjtpHE+iSgBPALunbdjYEJO0L4JRsHLajJjBcAt4GHu7cO/IRCDgBHAGWHx0uAUmfBLDJcAk4chPIhsDHSW6Rjbd21AQ6IuAEsCPwNpsPAUkPA/BXAPPn47U9NYHBErgTwIIk/ztYAg7cBEoQcAJYApIfGTYBSWsCuHrYFBy9CWRF4Dkkv5mVx3bWBFom4ASwZeA2lx8BSUcAOCw/z+2xCQyWwEEkjxts9A7cBEoQcAJYApIfGTYBl38Z9vw7+iwJXElywyw9t9Mm0BIBJ4AtgbaZPAlIinN/f3f3jzznz14PlsDdAB5F8t7BEnDgJjALASeAfkVMYAYCkl4I4CuGZAImkB2BVUnemJ3XdtgEWiLgBLAl0DaTJwFJrwFwWp7e22sTGDSBXUm+Z9AEHLwJzEDACaBfDxOYeQXwbAB7GJIJmEB2BE4huX92XtthE2iJgBPAlkDbTJ4EJF0HYLU8vbfXJjBoAleTXHvQBBy8CXgF0O+ACVQjIOkfAOarNtqjTMAEOiRwF0kXb+9wAmw6bQJeAUx7fuxdhwQkLQfgpx26YNMmYALjEXgSyV+Mp8KjTaCfBJwA9nNeHVUNBCS9DMDHalBlFSZgAt0Q2ILkx7sxbasmkDYBJ4Bpz4+965CApNcBOKFDF2zaBExgPAKvI3nSeCo82gT6ScAJYD/n1VHVQEDSuwDsV4MqqzABE+iGwEkk44ucxQRMYA4CTgD9SpjANAQkxfZvbANbTMAE8iRwCcmt83TdXptAswScADbL19ozJiDpmwBWzTgEu24CQydwA0mXcRr6W+D4pyTgBNAvhglMvwL4RwCPNSATMIFsCfyW5BOy9d6Om0CDBJwANgjXqvMlIGleAHflG4E9NwETACAAc5O81zRMwAQeTMAJoN8IE5iCgKQnA7jZcEzABLInsAzJW7KPwgGYQM0EnADWDNTq+kFA0soAvt2PaByFCQyawDNJfm/QBBy8CUxBwAmgXwsTmHoF8AUArjEcEzCB7AmsRvKG7KNwACZQMwEngDUDtbp+EJD0YgBX9iMaR2ECgyawHsmrBk3AwZuAVwD9DphAOQKStgBwabmn/ZQJmEDCBDYneVnC/tk1E+iEgFcAO8Fuo6kTkLQjgAtS99P+mYAJzEpge5IXzfqUHzCBgRFwAjiwCXe45QhI2gvAmeWe9lMmYAIJE9iD5LkJ+2fXTKATAk4AO8Fuo6kTkHQAgBNT99P+mYAJzErgAJInz/qUHzCBgRFwAjiwCXe45QhI2hfAKeWe9lMmYAIJE9ifpH+XE54gu9YNASeA3XC31cQJeAs48QmyeyZQnsDeJM8q/7ifNIFhEHACOIx5dpQjEpC0K4DzRhzmx03ABNIjsBvJ89Nzyx6ZQLcEnAB2y9/WEyXgW8CJTozdMoHRCexE8v2jD/MIE+g3ASeA/Z5fR1eRgKRtAXyo4nAPMwETSIfAdiQ/nI479sQE0iDgBDCNebAXiRGQtCWAjybmlt0xARMYncCWJD82+jCPMIF+E3AC2O/5dXQVCUjaGMDlFYd7mAmYQDoENiF5RTru2BMTSIOAE8A05sFeJEZA0uoArk3MLbtjAiYwOoHVSV4/+jCPMIF+E3AC2O/5dXQVCUh6EoCfVRzuYSZgAukQeDLJn6fjjj0xgTQIOAFMYx7sRWIEJM0N4O7E3LI7JmACoxN4NMk7Rx/mESbQbwJOAPs9v45uDAKS4o/G/GOo8FATMIFuCdxDMr7MWUzABOYg4ATQr4QJTENAUmwBx1awxQRMIE8Ct5BcJk/X7bUJNEvACWCzfK09YwKS4hJIXAaxmIAJ5Eng6ySfl6fr9toEmiXgBLBZvtaeMQFJlwLYIuMQ7LoJDJ3AFSQ3GToEx28CUxFwAuj3wgSmISDpBACvMyATMIFsCZxB8jXZem/HTaBBAk4AG4Rr1XkTkLQngLPyjsLem8CgCbyW5LsGTcDBm8A0BJwA+tUwgelXANcFcJUBmYAJZEvgpSQ/na33dtwEGiTgBLBBuFadNwFJSwD4Td5R2HsTGDSB5Ui6oPugXwEHPx0BJ4B+N0xgBgKS/gVgHkMyARPIjsB/4neXZPy0mIAJzEHACaBfCROYOQH8FoBVDMkETCA7Aj8i+fTsvLbDJtASASeALYG2mTwJSPoQgG3z9N5em8CgCVxGcvNBE3DwJjADASeAfj1MYOYVwIMAHGNIJmAC2RF4B8k3Z+e1HTaBlgg4AWwJtM3kSUDSOgC+mKf39toEBk1gE5JXDJqAgzcBrwD6HTCBagQkzQvgTgBzVdPgUSZgAh0RWIDk3zuybbMmkDwBrwAmP0V2sGsCkr4LYMWu/bB9EzCB0gR+SvKppZ/2gyYwQAJOAAc46Q55NAKSzgOw62ij/LQJmECHBC4guXOH9m3aBJIn4AQw+Smyg10TkLQHgLO79sP2TcAEShPYm6TbOJbG5QeHSMAJ4BBn3TGPREDSygC+PdIgP2wCJtAlgVVI+ne2yxmw7eQJOAFMforsYNcEJD0MwF8BzN+1Ly3ZvwfAjwDcVPz8A4A/AvhLYX8+AI8F8BgATwOwBYBFW/LNZu4noOJLyfcB/Lj4F3MUsjCAxwFYDECcg1sJQBREfvhA4P0DwILuADKQ2XaYlQk4AayMzgOHREDSpUWi0+ewvwbgXAAfIhk3n0uJpPgcWb3gsx2AJ5Ya6IdGJXAHgPcB+DyAq0n+rayC4jb7iwBsAmAbAIuUHZvhc5eS3CpDv+2yCbRKwAlgq7htLFcCkvYE0MczRXdHwgfgBJJx23lskfQ8ADsBiLOTjxhboRXEVubpAC4kGb2pxxJJCwE4GMD+AB45lrI0B+9J8pw0XbNXJpAOASeA6cyFPUmYgKSlANySsItVXLsxVu1INhKXpGUAHAHgFa6jOPL0/BfAJwGcTPJLI48uMUDSkwF8GMCzSzye0yNLkrw1J4ftqwl0QcAJYBfUbTNLApJ+AuApWTr/UKePA3AoyXubjkfSswB8sDiH1rS5Puj/HoAd27jEICnOBR5ZrAj2gd1PSMa5VIsJmMAsBJwA+hUxgZIEJJ0KYJ+Sj6f6WFwe2I/kaW06KCm2gg8DcAiAuFRjeSiBSMaj7/ThbV9gkBRnA+MoQO4XnU4luZ9fLhMwgdkJOAGcnZGfMIH7CEjaFMBlmeN4Jcm4SNCJSFoTwEeLW6qd+JCo0bjBuxnJ67vyT9ILir7XOZ/b3JTk5V0xtF0TyImAE8CcZsu+dkpA0qMA3A5g7k4dqW5837ZX/qZyVdLixfm2vp09qzoz3wQQicttVRXUNU5SnNd8f136WtYT5YsWGeUGe8v+2ZwJJEXACWBS02FnUieQcTmYU0jGrc8kpEimrwSwRhIOdedE1PFbneTfu3PhwZYlnQJg31T8GcEPl38ZAZYfNQEngH4HTGAEApKizt1FIwxJ4dHvAHguyVghSUaK2nSfArBOMk6168gvAKxGMgptJyOSYoX7BgBxeScn2Y5k3Gq2mIAJlCDgBLAEJD9iAhMEiqQltoHnzYjKs0hGEpicSJoHwDUAnpOcc8069Kcov0LyV82aqaZd0jMAxG3kXP5G/DM605CMnxYTMIESBHL55S4Rih8xgXYISLoYwMvbsTa2lY+R3HJsLQ0qkBRt5aIm4VA6iESSshbJbzSIdWzVks4uinmPrasFBReTjA4nFhMwgZIEnACWBOXHTGCCgKRI/iIJzEFWIPmD1B0tVpziMkQfO1PMiX8rktFaMGmRFP2dY4UyVmlTl5eTjNvlFhMwgZIEnACWBOXHTGBSAhjbvzlsA3+E5La5zJykvQCcmYu/Ff08muSbKo5tfZikaKn2qtYNj2bQ27+j8fLTJnAfASeAfhFMoAIBSdHZ4v8qDG1zyEp19fdty2lJnwHwkrbstWznagDrkow2b1mIpKcDSH0F+SKS22cB1E6aQEIEkk8AJb2EZJSLsJhAMgQkrQ/gc8k49FBHvkHyuQn7N6VrxbbjjwEslJvvs/gbZV6eQvL3ucUl6auJl+tZn+QXcuNqf/tNIIfcJYcE8FoAm5D8c79fF0eXEwFJ8bsTZTyWTtTvN5J8Z6K+zeiWpN0AvDtH32fw+fUkT8wxJkl7AjgrUd/jjOIyJKPFocUEkiAgaZEodk8yuuskKzkkgFcBuI3kDslStGODJCDpYABHJxr80qmWGCnDS1J88Vu9zLMZPHMzgGekVoexLDdJCwL4S6JHhg4meWzZWPycCbRBoDgi9HiS67Vhr6qNHBLACwFE8hergFdUDdTjTKBuAkX5kt8CSK136ndI5lbE90HTI2lVAHEruA+S/Q3VRBPyewEsRjIuZFlMIAkCkjYCEAXuLyS5YxJOTeNEDgngcQAOBBDV8p9K8q8pA7VvwyIg6RIAWyUW9dtJviUxn0Z2R1J84XvpyAPTGhAXKFbMfYtS0uEA3poWWlxCcuvEfLI7AyYgaQEAPwUQJZSOJRm7RMlKDgngawGcVBB8L8ldkqVpxwZHQNKLAaR2SWltknHjNGvpySrg1iTjS0LWImltAF9KLIgXk0z5IlZiuOxO0wQkvQ/AToWd/Uie2rTNcfTnkABGdffJ/R1942ucGffYWgkkeBkkSow8qi8tsSR9MeNewXGb+em5r/7FL0zRAvFOAHPV+gtUXZkvf1Rn55ENEJD0IgCTb6Mnf/QjhwQwbtFEr9AJiTNXTyMZH0YWE+icgKR9AKTyTS/783+TJzSzritzvov7kzyl8xe0JgckfRvAyjWpG1fNPiRPH1eJx5tAHQQkzQ/gJwCWmKRvdZLX16G/KR05JIDLAvj5HADOIRmlCSwm0DkBSXMDuBXA4zp3Bvhgn27MS4oVp9/EYf8E2I7iwl0AFif5t1EGpfxsQsXP/wTgCST/nTIv+zYcApLOBbD7HBEnX4khhwQwblhO9Yu+JsnJK4PDedscaXIEJB0E4JgEHDuCZBzY741IOh7A6zML6AKSO2fm84zuJnQR5CCScTnQYgKdE5hi6zd8irqUc5OMm+rJSvIJ4H0kpbgBPOfqyi3F+ZroA2kxgU4JSHp0sVIVP7uUV5D8QJcO1G1b0poAcrvUsgXJj9fNokt9kqIcV5Tl6lLuALCkjwB1OQW2PUFgmq3f+M9/IPn41EnlkgDGPvrzp4B5Gsl9U4ds/4ZBQNKRAN7ccbRrkfxKxz7Uar64aBNfAh9bq+LmlMWOxUJ9uYgz6Y/dWgC+3By2UpqPJHlYqSf9kAk0TEDSmQD2msLMjSSjlmnSkksC+EEA/zcFyVhmXY3k15KmbOcGQUDSwsUq4LwdBrwcyZ91aL8R05ImCsI3or9mpVeQ3KRmnZ2rk7RcUeOsK19it2cJkrEKaDGBTglIWgdAVCmYSi4nuWmnDpYwnksC+HYAh04TT/yxi0Kr/yoRrx8xgUYJSIp+rwc0amRm5fOTjAsIvRJJrwaQy63PbPv+zvTSSJoPwD86fLFOJJnbWdAOcdl0UwSKrd8o+Lz4NDZOIvm6puzXpTeXBDCKP58/Q9BnkHxNXVCsxwSqEpAU5z7iS0mUBWhb/kvyYW0bbcOepGhtd2Mbtmqw8RySfWlj9yAckv7TUS3ASDyXIvnnGubHKkxgLAKSzgOw6wxK9iZ51lhGWhicSwJYpgr9eiSvaoGZTZjAjAQ6vC15B8nYhu6dFOVgoqRKF4n1KDwjUVmAZBTk7p1Iiu3XBTsI7HCSR3Rg1yZNYM4vQS8B8JlZsGTRsCKXBHBJAFH5fSaJAtFRdb83dbf8e5cngWJ7IN7XRVqO4Dckn9iyzdbMSfoWgFVaM1jN0LdIPrva0PRHSYp6l09o2dNY9YvVvy63n1sO2eZSJFD0+r25RM3XeF9/nWIMk33KJQEMP+8BMNv21gdIviJ16Pav/wQ66g7yK5JL95WupGgJGa0hU5YPk9wuZQfH8U1SfLGJL+RtymtIntGmQdsygakIlLyMdjfJR+ZAMIsEMEBK+lG0gCsBtXf1t0rE7EcSIyApvqzEIeHoZNOW9D0BnOkyWFuMZ7PzDpJdlwKazcfK/72DBPCXAOJme5w9tJhAZwQkbQ6gTG3P75JcqTNHRzCcUwL4KQAblYgttgtiKzjqhllMoDMCkrYF8KEWHfg1yaVatNeqKUn7Azi5VaOjG+tV/985w+8gAdyW5EdGnwaPMIH6CBQlvuJyX5kz1peS3Ko+681pyikBPBXAPiVRfJrkS0s+68dMoDECkm4C8MzGDDxY8R9JLtqSrdbNSHolgPe0bng0g68k+b7RhuTztKTow/uYljzu9XnKlhjaTA0EJMXKX6wAlpFjSB5S5sGun8kpAdwbwCjnQHYnGVe1LSbQGQFJzwXQVqHyu0imfku28lxI2gLApZUVtDOw10dQJGcVJtwAACAASURBVEW91XnaQYnnkvxGS7ZsxgSmJCApmlBEM4qyshvJmcrWldXT+HM5JYCj9gONG2MrkIyewRYT6IyApPgwiFqWbchcJKNDTu9EUlTWvyzxwDYleXniPlZyr2jJ11Z5m/NJ7lbJUQ8ygZoISIpCz3H/YIERVK5J8poRnu/s0ZwSwFjZuHNEUl8FEJPRyz+II7Lw4x0RkBQ9bONCyEItuPD4vp5/7eBMZZXp2obkxVUGpj5G0hJFq8OmXY1ag8u65VvTmK1/NgKSvgQg6hCPItl8BmeTAAZ9Sb+JXpCjzASAXrZlGpGBH++YgKRRjzBU9Xglkt+tOjjlcZmcAdyJ5PtT5ljVN0krA/h21fEjjMuii8II8fjRDAlI2g/Au0Z0/a8k2/iiP6JbUz+eWwJ4JYAXjxj5vwE8i+QPRxznx02gNgLF9ln88Wy6PMBLSH62NscTUiQp+sAen5BLU7myH8m4sNY7kVSmA8K4cceXl5W9azMuRo8fh4CkKDkXn9ej1vP7Msl1xrHd5tjcEsATAFRpsBwfKquSvLdNuLZlApMJFBdCbgDQ5O/dHiTP7SN5SaNUAugKwYkkI1HtnbSwih1HdZ7nix+9e3WyCkjSw4u+4ytWcPxdJF9bYVwnQ5r8Q1R7QJLiIH3V2zVHk3xT7U5ZoQmMQEDSOQBeNcKQUR89iuShow7K4XlJnwSwSeK+foLkyxL3sZJ7kmL1tcnk9hySe1ZyzoNMoCYCko4EULWY+y4k31uTK42ryS0BfA6Ar1ekErfX4kLItRXHe5gJjEVAUmwnfA7AC8dSNPPgD5GMsgW9E0lxkWa5xAO7meRTEvexknsj1kKrYuNqAHGEIUrNWEygdQKSVi1yjLkqGo/jZt+pOLb1YbklgHMDuHsMStHH8hluKj4GQQ+tREBSfKB8BsAGlRSUH/QDkiuUfzyPJyUtBuC2PLzFY0nenomvpd1sKQGPc94vJdlWuZnS8fvBfhMovqB/H8CTKkZ6T5wZzOndzSoBjEmRdDOAJ1ecoBj2XpJt1WQbw00P7RMBSccCeGMLMcUfzvn7toqSSQmYiendjuSHW5jr1kwUfxz/2ZLBY0ke3JItmzGB+whIOhPAXmPg+DbJVcYY3/rQHBPASwCM22fvZSQ/0TptGxwkgQ4KGK9B8ro+wZYUXX12zSSmd5Ns8pxn6xgkrQEg6qq2JVuTjM96iwk0TkDShgA+Paah95DM5TPqvlBzTAAPAnDMmBP1l6JLSC5bSmOG6+FdESi2LqMEUZu1oV5LctT6VV0hmtWupCgC//tY2Zz14TQeiM+XKAYbW0K9EElxs/GkFoOJ1cYXkLyxRZs2NUACkhYG8BMAUbB/HNmf5CnjKGh7bI4J4IsAfKEGUF8iuW4NeqzCBKYlIOmKONPUMqKLSG7fss3GzEmKb9W59fXenGTqbetKz5mk6IXa9uWiG0nGoXyLCTRGQFK0bty4BgNrk4yLTNlIjgngggCiVVAd0tuirXXAsY7xCEjaGsBHxtNSafQfSD6+0sgEB0mKgqzRhaJu+U8c/QEQdb/qlk+S3KxupV3pk/QHAI/rwP4OJCP5tJhA7QQkxZm/OPtXh8xHsq1zsnX4m98WcEQt6ccAnloDgSg3sArJaPZsMYHaCEiaB8DPK7QurMuHZ5L8Xl3KutIjaQsAlzZkf6Je1ysb0h/F57PfwpT0TAA3NcRoNrXR/jP6AvdmO322gP3f2yEgKXKIKNkyarePqRz8OclxLqe2E/QcVrJbASwSwAsB7FATMXcJqQmk1TxAQNIBAE7skMmBJFNvmzYjnqJ9XnxARwJSt8Tq37KF0l8AeFjdBgD0YhVQ0iEAjmqAT1mVryPZ5vnDsn75uUwJFN0+YmehrpJZl5Ic93Jq6zRzTQDrPpB8DMn4kLOYQC0EJN0CYKlalFVT8hWSa1UbmsYoSa8BcFpD3vzvxp6k6C7UVGmoDUlGbbtsRVIk4U33sJ6Jzy0kl8kWoB1PjoCk4wAcWKNjB5EMnVlJrgngCwBcUyPpOAe0Lskv16jTqgZKQFIkXl2/S/FOL0Yyzm5lJ5LiDGPU/HxUA87ft/pH8tehW9KSAJpaBfwjgKeRjJvB2YmkpwFI4YhMdgfss5vsgThcfD5/qeYqKNFlrM6cpJXZyDUBnBfAnQCqtmuZCm6UhFme5N9aIW8jvSUgKbZ+Ywu4azmUZJdbd5XiL7qmRN/fpm5Pn09yt8nONbwKGLeBo/ZoJOVZiaSjAaRQlPlEkk32Ic5qXuxsNQJFyZcfxJfjahqmHHUvgHlJxs+sJMsEsPjWHoeS6z4bdDHJbbKaQTubHAFJUfdv+QQcuxXA0jm1Jip+t98DoKmLGQ9a/ZuYo4ZXAcPM20m+JYF3orQLRSIeq6RLlB7U3IM/Ivn05tRb8xAI1FjyZTKu60hGofTsJOcE8GwAezRAfDeScSbIYgIjE5AUq9N3jTywuQHbk7yoOfX1apb0TgBvqFfrg7SdR3L3qfS30G1kG5IXNxhbraolRS3JD9SqdDxl0eIwpd+t8aLx6FYJNFhP9HiSdZ4nbI1LzgngKwC8vwFS/4gDzySjhIfFBEYiIOn5AK4faVCzD99EsokaerV6Xdz4fXfD7d6mXP2bCKSFVcAoZRK1R8+qFV5DyhK4/DFnZKuRvKGhcK22xwQkPQVA3Pqdr4EwtyT5sQb0Nq4y5wQwboXFwe0m5FsAnp/jnn4TMKyzPAFJUfw3tT7TryCZ0krOg4BKegSAWBnbvDzpSk/O2qNXUiShDzofWMnSzIPii+uuKX++SNoRwAUNxD6Oys1IxtlQiwmUJiBpbgBRj/MZpQeN9uBjSd4+2pA0ns42AQx8kqJIaFPnU44lmcLh5zTeFHtRioCkplamS9mf5qE4Cxg3UZPbPpP0PABx5q+pD+cJJDOu/k081MIq4ISp+IO0LcmfjjOxTYyVtACAOMfa1GdrVbd3JBk1YC0mUJqApOiLvl/pAaM9eDPJWF3MUnJPAONs03YNkXdpmIbA9lmtpC0BfDTBGN9B8s2p+CUpGq8fU2z5tvE5dC7JUmeGJZ0LYMpzgjXzi4T89altCXfU97cM2my32soE52fqJyApKglEP/am5H0km7qw1pTP/9PbxgdvY0E0XCg2/I7SMCvkWsOrMfBWPC0BSesD+FyCiOL82fpdNyuXFGdwokTOQQAe3RKnUqt/E760uAo4YTJWA4+NbfCub2xLinmJxDxF2YDk51N0zD6lR0BSlHqJleyFGvRuT5LnNKi/UdW5J4BxuD0OdjYpvWjn1CQg636AgKQnArivwHCCEjUu4xxV60WqJS0KYOdY8QIQRZ7blHNI7jmKQUnxof6qUcbU8Gx0jzkZwIdI/q4GfSOpkBRHXqLuX6ryRJJx7MdiAjMSKC6VXQ3ghQ2jWpHk9xu20Zj63BPAKAR9RwsrCVln+Y29PVY8JQFJ0X3jcYniiZXAQwGc0ORqU1FDbrnosBNn3QCsU3Pl/bJ4R1r9m1DawSrg5Hj+CyD+eMURl8uaTgYlxTydDuDFZaF28NwfScaXCIsJzEpAUhx3OXLWB8d74O8k47xstpJ1AhjUJX0awIYNz8C/AKxM8icN27H6HhCQFLcn4xZlyhKrgd8EEOWO4jb9//6VTTgkPQzA4gBi1TPaqS0NIJKJWJmPf1ETsWs5m+ReVZzoaBVwKldjbmLVNv5FAfxfk4wWcyNJsSW2LICooBA/418ULI/Wmqn/LbiAZKwgW0xgRgLFxbLrau4UNpXN7HcHU/+ln/VVl/QmAO+Y9cHxH4j2MauQ/Pf4qqyhzwQkbQXgkoxjjFWzqIcZ7RYn/sX/HQldnNub/C/lMCut/k0E1PEq4Gxc7wYQt7t/CyBWDCdLfK7PX/RRjl7K8S/mrM7WmbP5V/d/fznJFC9X1R2n9Y1BQFK85/G3Or6UNi37kjytaSNN6u9DArhW8c24SU4Tus8iuXcbhmwjXwKS5in+MC+SbxS98Lzy6t+kJLCpjkO9ANxSEH+J3q3+8t0S7YzNSIqCzC9rKYTlSf64JVuNmOlDAhjbUH8tvvE2AmkOpS5F0AblzG1IOhzAWzMPI2f3Y6U++iCPdZki8VXAnOdnFN+PIBm/TxYTmJaApH0AnNoSoltJxrGXrCX7BDDoS4rOC9GBoQ35e9Eq7pdtGLONPAlIegyAmxsuQZAnnHa8rm21XlK0bhvpFnE7IQ7CSlzyWy7XTguDmKEEgpQUZ46/DiC6CrUh55NsumNQ43H0JQGMbdkzGqf1gIEoPROt4nwesEXouZmS1PZ7mRuipvytZfVvwrliFTCS+WgpZWmXwKtJntmuSVvLiUBx7i8uR8XlprZkO5IfbstYU3b6kgB2UXvtdJKx5GwxgSkJFLWorgcQ7c4s7RE4k+Sr6zQnKZKQSreJ6/RjYLq+BmA1ktGVyWIC033OfryFPuKTbcf7uDDJOHqWtfQiAYwZkBSHMZ/a8mz4PGDLwHMzJ+kJAL7nreDWZq7W1b8Jr4sSKlGo2auA7UxlbP1GkV0Xfm6Hd5ZWJMUXvahh2aZ8i+Sz2zTYlK0+JYBNNnyejr/PAzb1ZvZIr6SNo6Bv5mU4cpmRM0i+pglnJcUxE1cBaALug3VGWZtNSX6qeVO2kCuBDs79TaA6lmR0zcle+pQAbgSgiw8MnwfM/teg+QAkRcPw9zRvadAWGln98ypg6+/ULiTf27pVG8yGQEfn/ib4rEfyqmxgzeBonxLAqL0We/Lxs205heT+bRu1vbwISDoIwDF5eZ2Vt42fy/UqYOPvw6Ekj2rcig1kTUBS2+f+JnhFAfYFScbP7KU3CWDMhKQrO+xn6fOA2f86NB+ApNg6OLp5S4Oz0Ojqn1cBW3mfDiR5fCuWbCRbAh1XV7iSZNOtZ1ubm74lgK8FcFJr9B5syIeWOwKfm1lJuwJ4dwb9V3NCexrJfdtwWFIcOq/1lnEbfidsI25Vxrbv+xL20a4lQEDSM4se5m3V+5sz6teTPDEBFLW40LcEMJqbR3P7riQKUb6A5D1dOWC7eRCQtDWADwJ4eB4eJ+1lK6t/XgVs5B24F8C2JC9tRLuV9oaApAUBRL2/pToMalmSvWkC0asEMF4KSd+N8gEdviCNn0PqMDabrpFAcTv4IwDmq1HtEFWdSnK/NgOXFE3gG7lt3GYcHdv6B4BtfNu341nIxLykzwFYv0N3v0+yy9yi9tD7mAC+A8Cbaic1msL4Rht/2C0mMCMBSc8C8FkAjzOqSgRaXf3zKmClOZpq0M8AbEwy6rdaTGC2z8n4mx5/27uUo0ge2qUDddvuYwIYXRduqBvUiPruArAyyWgfZTGB2T7clgYQF5ieZlQjE+jsBr6kaDzvbkAjT9l973qs/P1t9KEeMTQCktYC8MUE6qg+j2Qc8+qN9C4BjJmR9EcAj+14ln4IYFWS/+rYD5vPgEBxviWKRceHnaUcgU5W/yZcc3eQcpM0x1NR4uXNbu9Wid3gBklaFED8LV2k4+BvI7lExz7Ubr6vCeBZAPasndboCi8gufPowzxiiAQkPQzA4QBim6GXv5s1z+u7SMbN/85E0ikAWrl93FmQ9Rj+Z7Hqd3k96qyl7wSKz8Nroh90ArGeRbJ3XYB6+UdGUlddQaZ6T19FMkp+WEygFAFJcdA5bgj7XOD0xGJlPW7k/a4U1IYe8ipgKbC3AtiQ5PdLPe2HTOD+nbwTALwuERjx/sbRhV5JXxPAaNj+l0RuV8YfqtVIfqdXb46DaZRAkVhE67jeFB2tGdjJJA+oqlPSXJP+uJxIMvrPVhKvAs6I7ZNFjb/bK8H1oEESKCokpLJaHKvXC5GMIye9kl4mgDFDki4BsFUisxV1g1Yi+fdE/LEbmRCQtAeA+Cb8qExcbsPN+FL1RJKVkgpJqxZ9mVcqnI3aYlGI+FtVnPcq4JTUfg1gP5LRsstiAqUJSIo6f7FanMpn3odJblc6gIwe7HMCuCOACxKai0+QfFlC/tiVTAhIilvCsSW8RiYuN+3mSSRH3hoqLtpEG769pjhjGSuAZwM4uMrtVEnvioSn6cAz0P8fAHE7Onr6RjUEiwmUJiBpHgBx0zY6fqQi25O8KBVn6vSjzwngowH8CUBsB6cibyAZqzkWExiJgKT4XY3EJRKYqIg/VKm0+idpewAnlzhX+XsAB4z6ge9VwPtex1hB3ZHkD4b6cjru8QhIii+6/zeellpHxxeaRap8KazVi4aU9TYBDF6SPgFgs4bYVVEbL9OLSF5dZbDHmECRaMRq0zYDpRHn9V5fNnZJTwZwfoXyOvE7uvMobZ8kRYK5f1nfevRc1POLQr1nuLxLj2a15VAk7Vb0SG/Z8ozmPkfyxSk5VKcvfU8A41v/B+oEVoOuP8fyNsnf1qDLKgZKQNIGAKIEyfIDQlB69a/YSjq4SEyq7gLcXay4Hl3mAHiRnP8CwCMHNCcfi5Vpkn8YUMwOtWYCkmLLN7Z+Yws4JYmzwe9NyaE6fel7AjgvgDgoHj9TktgqWYNk/IGxmEAlApIeXmwLvw3AwpWU5DXoBJJvmM3lonNArPrF6l8dEm3Ldi2zci/pJACd1iasI+ASOm4DECWurijxrB8xgWkJSIrLHnHpIy5/pCTxhfNxJO9Myak6fel1AhigJF0M4OV1QqtJ10UkY4XSYgJjEZC0UFFAOtqSRTHpPsqsq3+SHl/cmN6hIQCxmxDnA6PT0JQi6TEAou5dX1cB742tXgCHkfxrQ5ytdkAEJEW5l40TDPlikr0+ajOEBDBKwURJmBRlf5KxjWcxgbEJSIrt4OiCs/bYytJTcDzJA6dyq6jpF+VyjgWwQMOu3wHgkLgxPN15N0knRqLYsB9dqP9ysd37oy6M22b/CEh6Y/F7m2Jwm5OM9py9lSEkgKluA8dL5Ushvf3V6i4wSZsUH6rP6M6LWi1Pu/onKWr5RcHsqO3Xpkx747WHq4Bxq/cgkqkU5m1znm2rIQKSosXbVwFEUfbUJBpJPJ7kPak5Vqc/vU8AA5akCwE0tS007nz4Usi4BD3+IQSKVbEop3BktEzLHNE7ScZKwf+kODcUZx/j1m1Xf0DiC1zcyH7LnDXverIK+HMAb42LdL7dm/lvUGLuS1ocwI2RZCXm2oQ7scIfZbd6LUNJADcFkPJSri+F9PrXrLvgJD0iVm8AvDnBG3ZlwDxk9U/SlkWx4SXKKGjhmTjzF10v4kbsfZL5KmAwfweAY0jGmT+LCdRGoPhMugHAKrUprV/RmiSvqV9tWhqHkgBGGYgoCh3FoVMVXwpJdWZ64JekJxU1ttbNLJzjSEYCG0nVkgDOBfCSRGOIZvFxMzbaoKXWzL4sspHrH5ZV7OdMoPi9iLIqOydM41aS8VnTexlEAli8dPGHY/fEZ3Qfkqcn7qPdy5iApJ2K+oE5dBO5b/UPQBQajtZvh2dwuzbanx1R3EaO29m53AiOoyhxwzml9pkZ/6bZ9akISIp2iXFsImWJup9R2Lz3MqQEcHUA1yY+o3GmaJ0hLD0nPg+9dk/SokV3jBRLL0xmH7d64+hG1PR7WmaTEhcndik6tpTuXNJRjB8tbvfGLonFBBohIOmFAL6UQamqFYbSznAwCWCxCvjDDDonREX96BTiyvqNfAxZ6QSB4izdOQCidl2KEslfSq0cR2UkANGO8mWjDmzp+Vj1i04HKZ+PbgmFzTRJoDi+8e3oq9uknRp0f5tkymcTawjxARVDSwCjjthxtRJsRtn10bu071fQm0FnraMQKFYD3wdgw1HG+dnsCXwewPYzFbXOPkIHkAQBSVGK7WsAVkzCoZmdOJDk8Rn4WYuLQ0sAHwfgdx2WjRhl0s4huecoA/ysCVQlICm+HB2Tye9G1TA9Dvhv9EcmGdvrFhNonICkuB2f6ir45PjjxvtiJKN97CBkUAlgzKik2JLJZVsp+o9GkVuLCTROQNL6AOI8WNPdNBqPxQamJBCXabYgeZX5mEAbBCRF+amoRZqDfITktjk4WpePQ0wANwfw8boANqwnqpCvRjLqBFpMoHECRTu5qH+V6rnAxhn01MBvAKxH8sc9jc9hJUZA0kYArgCQS56xAck4GjEYyWViapuQokNCbAPHdnAO8tsomOlLITlMVT98lLQygK8kXjezH7DbieJXxZniW9oxZytDJyApbu1/A8CjMmERvyPLDK3jzeASwHgZJb0TwBsyeTHDzbgU8kKSUSbGYgKNE5C0BoAvZFB3r3EWmRuIdm5xoSxWAC0m0DgBSVFjNHatovh8LnIIyTgDPSgZagK4PIAoCZOTnEHyNTk5bF/zJiBpAwCf8cWQbOfxnwBWJfmjbCOw41kRKHbYPhvHDTJyPC5GLTqkyx8TczPIBDCClxQtj9bM6CUNV3cg+cHMfLa7GROQtDeAMzIOYciub0Xy0iEDcOztEpAUt8vf2K7Vsa1dSnKrsbVkqGDICWDc9vlQZnN2N4A1fCkks1nL3F1JJ0absMzDGJr7/+uhPLTAHW83BCTl+Dc1YG1IMvp4D06GnAA+HEA0bV8ss1m/DcDKLuCa2axl7K6k+F2JA91xOcSSPoGbiotjsbVlMYHGCUiK7hnXAZincWP1Ghjk5Y8JhINNAAOApLcBeEu971Mr2r4e29ckY0XQYgKNE5D0DADfARDJoCVdAlHMdiWSuZ1xTpeoPZuRgKSoqBGfDYtniOotJN+eod+1uDz0BDBW/+J23Fy10GxXycUkt2nXpK0NmUBmRV2HOlWD/oM21EnvKm5JDwMQhcXX6sqHMezGCvkTSEZZuEHKoBPAmHFJlwDI9QCoP+wH+WvbTdDFh/0PADy1Gw9sdRYCNwNY3uWi/J60RUDS+QB2actezXYuIxmNIQYrTgCldYtvMDm+BIoeiyQvy9F5+5wfAUnRRjHaKVrSI7AZyU+m55Y96iMBSfsCOCXj2NYnGbVOByuDTwCLVcCfAlgu07cgan3FzeBvZ+q/3c6MgKRrAayemdt9d/fLJNfpe5COLw0CktYuFk5yPD4VEH9IMs41D1qcAN6/DbwPgFMzfhN8MzjjycvN9eJCiM+fpjVx0cg+tuctJtAoAUlPKaoCLNCooWaVv4rku5s1kb52J4D3J4DzAfgjgPiZq/hmcK4zZ79NwARMIAMCkiLpixu/y2Tg7nQu/hnAEq6iATgBLF4RSbECGCuBOYtvBuc8e/bdBEzABBIlUFwCizNzsf2bsxxF8tCcA6jLdyeADySA0bg6zgLmeqZh4p04jOSRdb0g1mMCJmACJmACmd/4nZjAqJP5RJK/94x6BfBB74CkjwLYMvMXI24Gb00yYrGYgAmYgAmYwFgEenBOfiL+D5LcYSwYPRrsFcBJkylpDQBf7cH8xs3gtUhG+y6LCZiACZiACVQiIGkDAJ8GEEWfc5dVXDHjgSl0AjjH6yzpegDPz/0tB/Cnoh/orT2IxSE89D2Nbf5jSd5pOCbQFYHiUsCBJHNsqdkVtmzsSno6gPibmPON3wne15GMRR5LQcAJ4EP/sL4cwMU9eUOiH+hzSf6jJ/E4jIKApHfGVj+A7UlGXT6LCbRKoNgx+QiA2FZ7Y6vGbaxxApIeC+DGODPXuLF2DGxLMt5XixPAqd8BSXEJJC6DxKWQPsjnAGzk9lB9mMoHYpD0QgBfAfAfAMcAOJxkHHC2mECjBCQ9HMBbAbypuDT3QpJ9ODrTKLeclEuaB8A1AJ6Tk98z+Bo7YUuTjP6/FieA078DPWhxM2dw7yG5q9/6/hCQFKv3UbvyMUVU8U395SR/3p8oHUlqBCTFF+Pon75K4dvtAB5HMi6fWXpAoPhsiV2wrXoQzkQIB5M8tkfx1BKKt4CnwFgUhv4dgEfXQjkNJQeQPDkNV+xFHQSmKMsQW/37kzyvDv3WYQKTCUjarej9Orlg/nkkdzep/hCQFDsKB/UnIvy1KP3i89JzTKoTwGnecklHAzi4R78EsfS9IcnYErb0gICkzQF8fIpQPglgJ5J39CBMh9AxAUkLAbgAwKZTuLIZyXjfLD0gIGkXAOf3IJTJIRxB8vCexVRLOE4Ap08AFwfwSwBz10I6DSWxQrQGyZvScMdejENAUrybf5/mHY0V7Dj0fPU4Njx22AQkrQXgwwAWm4LEXQAWJvnvYVPqR/SSosNHdProQ7mXiUmJVb8l/WV46nfUCeAMv7uSTgfw6n78ev8vikgMohZS/LRkTkDSJwBsNt33GAAnxUo2yXsyD9Xut0iguARwFIADMH3DgI+T3KJFt2yqIQKSlgdwQ0/KvUymdAzJQxrClr1aJ4AzJ4DR8DpuBMettz7JtwDEzb0oGG3JmICkuNwz25m/7xargVEWyGICMxIoar9FJ6GoATeT7ELyvcaZNwFJjwcQfxOWyDuSh3j/r2L1L2riWqYg4ARwlteiJ/0Pp4rycgCb+1p83p8LkuIWcNwGnu13OT4M30jy1LwjtvdNEigqIBxf4uhL3PqN279xC9iSKQFJ8xeFnlfMNISZ3D6ZZKxgW6YhMNsfjcGDk/RUALFyEvUB+yZnkuzbFnff5mjWeCRFPcCoC1hG4oxPFI/+Q5mH/cwwCEhaNAo6A1ivZMRfIRnnAy2ZEpAUZ/0+C+BFmYYwk9txLnUZkrf1MLbaQnICWAKlpIsAbFfi0RwfiTZO8Y3fkikBSW8AEJ1Bykqs2ryC5GfKDvBz/SUgaUMAF06qKVkm2DeQPKHMg34mTQKS3h+fA2l6N7ZXXtwogdAJYAlIkmJ5PG7O9pFXbOVsTTLO/FgyJCApzqr+ooLrZ8Uhf5KxPWwZGIGi3mkkcXtVCH1ZklElwZIhAUmHATgiQ9fLuBzdkZ5E8ldlHh7yM31MaBqZT0lRby3qrvVR7gawLsnr+hjcEGKS9IMSh/anQhGXnLYiGRdFLAMhIOmZAOJL31MqhPx9kn08M1YBRX5DJMWqX6z+9VXc+arkzDoBLAlKzfpCagAAIABJREFUUvRE/HrJx3N87C8Ank8yEgJLZgTGLFweJWLeAuA4t/TKbOJHdLfodX4ggCMBPGLE4ROPH0Xy0IpjPaxDApLivF+c++tTrb/JRKPhwdNI3twh5mxMOwEcYaokXQngxSMMye3R2NJ5Lklfm89s5iStBmDcFdwoGh0XRH6TWfh2twQBSU8A8JEoBl/i8ZkeiS+KXxtTh4e3TEDSSgCuBRA3f/sqHyS5Q1+DqzsuJ4AjEK3pj+wIFjt59BsA1nKNwE7YVzZaNHCPcjBRFmYc+RuAqO926ThKPDYtApK2BPCeGgr93kayb/Xi0pqsBryRFHMWtf6i5l9fJc7+PYVklfPQfWUyY1xOAEecdknR93KTEYfl9njUCIwen3FBxJIJAUnnAHhVTe5G79fXkHQD9ZqAdqFG0qMBRO3HnWuyfzbJKpdGajJvNaMSKN6BOL70tFHHZva8380RJ8wJ4IjAipY5Q+iocDrJfUbE48c7JCBpYwCRvNcltxQ3xPt89rUuVsnpkfRcABcDWLpG515K8tM16rOqBglIii5WXxyhTmiD3jSqOioZRN2/3zdqpWfKnQBWmFBJH4izUhWG5jbkMJJxWNySAQFJcwOIyzzz1ehubKu8A8DbSMb/tiROoPij/2YA8a/Ow/53AViYZBTZtWRAQFKc+dw6A1fHdfEEklEP1TICASeAI8CaeFTSkwD8pOYP1wqetDJkd5Kz9ZptxREbmZ2ApCjtEee96pZYBYx6kbEqaEmUgKRY7YtVv1j9q1suITmEZKJubp3okxRf3N7UifF2jf4DwFIk/9yu2fytOQGsOIeSzqxYQLWixc6GxbX6LUhe1pkHNlyagKSdALyv9IDRHozzgPuSfO9ow/x0GwQkvbI47/eohuxF95jY/bAkTmAAtf4mz8ARJA9PfEqSdM8JYMVpkbRY0X3hkRVV5DQstnw2InlVTk4P0VdJCwCIb8J1bv3NiTJuCO9G8o4hMk4tZkkLAYhLO5s26Fts/y9CMm6JWxImULT2i7PATX4GpEIgPuti9S9WAS0jEnACOCKwyY9LOhbAG8dQkdPQ+AVbk+SNOTk9RF8lfQnA2g3H/jsA25KM2oGWjghIWgvAhwHEF9Im5SqS6zVpwLrHJyDp2QCuATCEhYkA5p7UY7w2TgDHgCdpQQBxJip+DkFuL7qF/GwIweYao6QDAJzYgv/3Ft++b2vBlk3MQUDSUgDidzFuejYt+5M8pWkj1l+dgKSnFoWex60FWt2JdkfGjd+4+ete5hW5OwGsCG5imKRoifT2MdXkNDwabK9O8rc5OT0kXyUtUxxPaCPsM0m+ug1DtvFgAi2fQ16CpBP9RF9CSUsCuB7AkIp070Xy7ESnJAu3nACOOU2SYqk9+g5Gm6WhyI8BrOYzYOlOt6SbADyzBQ/jfGh8C3dy0ALsSV88FwcQrRuj9E/T8h2Sz2raiPVXIyBp0SL5W7aahixHRbeP6Prh0lRjTJ8TwDHgTfow3rE4hF2DtmxUxLfNdb38nuZ8SYr6jVEHrg05leR+bRiyjfsJSIruHm0Vao8akG81+/QIFF0+ogf4Cul516hH25CMckeWMQg4ARwD3uShkr4JYNWa1OWi5jPRFs/fwtKbLknPAdBWB49YBXwCyT+lR6J/Hklqc/UvAD6bZPSRtSREoNh9+gKANRJyqw1XribZ9CW3NuLo3IYTwJqmQFL8En61JnU5qbmQZKyAWhIjICnOaUay0IacRPJ1bRgaug1JJwF4bUscbiM5pHNlLWEdz0zR7eUKAC8eT1N2o6M//Yokf5Cd5wk67ASwxkmRFPXRtqhRZS6q3klyKOVwcpmT2CY8A8DeLTn8z+JGsFcBGwQu6bEA4iLWvA2amaz6NJL7tmTLZkoQkDQXgGjxtlWJx/v2yLkk9+hbUF3F4wSwRvLF7ctoEfeIGtXmour1JNsoPZILj879lPQSALFN35YcR/KgtowN0Y6k4wAc2GLsG5D8fIv2bGoWApLeAyC6vgxN/g7gyST/OLTAm4rXCWDNZFvenqnZ+7HV7UjywrG1WEEtBCTFDdG/AJivFoWzK4lVwCgX4g4hs7Ma+Ymi40ds67e1+hddP6L7h29ajjxbzQyQdDSAg5vRnrxWF32ueYqcANYMtGjFFVfUF6lZdQ7q4g9FXAppc9UpBy6d+SgpukRs06IDR5GM2piWmglIOgrAITWrnUndRSS3b9GeTc1AQNL+AE4eKKQotfYMkvcMNP5GwnYC2ABWSXFAOw5qD1GiKvvaJL82xOBTi1lS/AH/QIt+3QlgSa8C1ku8WP37NYBH1at5Rm3bkYwvEJaOCUiKLd/Y+h2qbEoy+htbaiTgBLBGmBOqJMUZwLiltFwD6nNQGVuAUSg6CkZbOiRQrEhHw/Q2G8O7blzNcy7pbQDeUrPamdTFav4CJO9q0aZNTUFAUlz2iEsfcfljiPI5kkO77dzKPDsBbAizpGicPuTD03FWaQ2S0SvZ0iEBSfEexvvYlsQq4OIk46dlTAKSYtUvOq20ufr3WZJxicjSIQFJ6wD4XEv9njuMdFrT8UVkeZKxBWypmYATwJqBTlYnKb61bd2gidRVR6uqSALdJqzDmZIUZTxOadmFt5AcUo/sxvBKipW/WAFsU15N8sw2DdrWgwlIei6AL7V4iSvFKTiFZJx9tDRAwAlgA1AnVBYV++ObS1u3MBuMprLqnxbbwbENaemAQPEexopsmxLHAOIsoFcBx6BerP7F2b+FxlBTZWjc5vYXtyrkahgjKfp4X93BvNfgfW0qooLB0iSj/IulAQJOABuAOlmlpNcDOL5hM6mrvwnAWiT/mrqjffVP0o0AntVyfIeQPKZlm70yJylu/cbt3zblGyRj9cnSAQFJTym6Sj2uA/Mpmdyd5HkpOdQ3X5wANjyjkuLw/ffiHEPDplJXH72S1/GKUDfTJOlwAG9t2Xp0BVmKZNQHtIxIQFLU+4uV27ZX/7x9P+Jc1fW4pGWL5K+tFo51uV63nutIDq3Hcd0MZ9XnBHBWROM/IOkFAK4ZX1P2Gq4HsC7JKBVjaZGApFUAfKtFkxOmDiQ59BXwStglRceP6PzRtqxE8rttGx26veKoxg1xdGLgLOLixwquItH8W+AEsHnG91kYcPueOQnHjdSNSf67JfQ2UxCQFKtJba8seBWwwhtYrP5Fz9/o/dum/JJkrEJZWiQgKbZ7vwogtn+HLseTbLPd4WB5OwFsaeqLJu5xIaLt7ZyWIhzJzKcAbE7y3pFG+eGxCEiKm8BxI7htOYDkUDsYVGIt6QAAXfTWPplk2La0REBSdI2KHaKnt2QyZTO3Aniqj420M0VOANvhfJ8VSXsBcGmF+5l/HMBWJP/b4hQM2lSHtSl/B+B5JOM2q2UWApJiCzA66SzWAaw4ohGlRywtEChuecfK30otmMvBxJYkP5aDo33w0Qlgi7MoKXjHL/vqLZpN2dSFAHZ2EtjOFBUXkqIczwLtWHyQlSgHE3N9aQe2szEpaUsAFwCYvwOn/xY9zEnGGSxLwwQkRXmwL0SZrIZN5aL+SpIb5uJsH/x0AtjyLBZX/KNN3MNbNp2qufcXiYFSdbBPfkmKvsDRH7griR7Zb/T2/4PxS4rPg7jw0eX26wUkd+7qxRiS3SL5uxLAC4cU9wyx3h2tU0nGFrClJQJOAFsCPdmMpCjHEWU5LPcTOBfAniSdBDb8RkjaBsCHGzYzm/rriu1/Fxq+/2hIbPnGnHS9MxBHMrxCO9vbO+Z/l/TIor2bk78HWL6J5NFjovXwEQk4ARwRWB2PF9/2YxXQN74eAHouyT3q4Gsd0xMoVh5iqy/qU3YpUeV/R5JXdOlE17YlbQwgVmUX7NiXuJW/MMm7Ovaj1+aL5C/e+Rf1OtDRgvsxgBW9KzAatDqedgJYB8UKOiQ9H0CshHgOHuB3GskubqlWmMF8h0j6DICXJBLBe2Lbc2hdYiQtXHQI2jWRebiC5CaJ+NJLNyTNDeDTTv4eMr3RLz7+FlpaJuDko2Xgk811WJajw6hnNe0kcFZE4z0gaW8AZ4ynpdbRfwCw11Bu/0naAsBZABatleJ4yvYgGUcxLA0QKJK/yxL64tVAlJVUvpvkqyqN9KCxCTgBHBthdQVFCYAfAXhCdS29HOlCoA1Oa9FxIIpCpyYXAdiHZNxU7p0U9d5O7fgSzlRc4+zt40je3jvoCQTk5G/aSYjPoKj5948EpmmQLjgB7HjaJW0A4LMdu5Gi+XeQfHOKjvXBJ0lfB/CcBGP5fRSrJnlxgr5VdknS1gAi+Xt8ZSXNDbyeZNcXUJqLrkPNxXnvjwLYrEM3UjW9HsmrUnVuCH45AUxglhMozZEAhSldOIKkb0s3MDuSIrk+sgHVdamMPwy7kfxlXQq70FPc8H1v4ue+DiF5TBd8+myzqLsZt6qd/D10os8huWef5z+H2JwAJjBLkh4DIG5CxU/Lgwn4j1MDb4SkZwK4qQHVdar8J4Bj4x/Jf9WpuGldRS/f6Gd6CIAo+5GyPJ1kHEWx1ESgSP4+BODlNanskxpv/SYym04AE5kISS8D4BY4U8/H4SSPSGSqeuOGpF8AWCaDgKI47P651KiTFH/0o+D1EzNg+0uSy2bgZzYuSpqrqOvo5G/qWfPWbyJvsxPARCYi3JAUh+C3S8illFw5hmSsplhqIiApkpTX1qSuDTXRRjESwW+2YWxUG5KeVdzujRJPucg7Sb4xF2dT97NI/qKV3w6p+9qRf2eT3Ksj2zY7BwEngAm9EsUtwR8mVh4iIUJwEljjbEhaB8AXa1TZhqq4sRrtA2NVOFYwOxdJsYJ2WLQ0zLCu5wtJRmJtGZNA0es93k0nf1Oz9NbvmO9Y3cOdANZNdEx9kjYC8Kkx1fR5uJPAmma3OKcUJVcWqEllm2r+CyBuCsdt8e+2aXjClqSVARwMINrrxbZfbhJlX6L8i1swjjlzRfJ3HoBdxlTV5+He+k1sdp0AJjYh4Y6k9wHYKUHXUnHJSWBNMyEptqt2rEldV2qiu8LRJL/ShgOS1iwSv5e2Ya9BG+eT3K1B/YNRLSkKe/tW6/QzfhbJKEBvSYiAE8CEJmPSykKsyMRW8BIJupeKSyeTPCAVZ3L1Q9KWAKJOWR/kegDvAnBJ3X1Fi3pucah/fwCr9QEWgM1JRncKS0UCxcrf2QDczWJ6hrcAWMEFnyu+ZA0OcwLYINxxVEuKZuFfGEfHAMY6CRxzkiXNB+AvAKJPaV8kWstF7b33kowvUpVF0vLFtl707H1sZUXpDbwLwMIk/52ea3l4VCR/8Z55t2b6KYvjBbH1m9tZ4zxewjG9dAI4JsAmh0t6dxTDbdJGD3S7d/CYkyjpcgAbj6km1eE/KFY4Y5v4ptlWISTNDyDO9m0IYCsAz0g1sDH9+jjJ6ElsqUDAyV9paG7rWRpV+w86AWyfeWmLxR+jn3greFZk0cR+Tx9mn5XTlA9IitJDH8zwBuuoAcdqxK8AxO/U7wBE27mQaM8Wxy2WA7D0qEozfX5Hkhdm6nunbhfJX/y+uGTXzDPxfQCrepW509d1RuNOANOdm/s8Kw6cf3kAf5zHnYm4zPBKJ4HVMEp6CYCPZHojuFrQwx3lPtsV5764OR+Js5O/mRlG556VScaXLUuiBJwAJjoxk92SFD1bo3erZWYC0XrpFST/Y1CjEyj61kY3mmePPtojMiDw17jxTfKTGfianItF8helh7x1Pvvs7EvytNkf8xNdEnAC2CX9kraL6vLXAsipw0DJ6Gp/LBKYbeq+BVq7l4kqLG67vh1AdIfw50Oi81TBresAbEvy1xXGDn5I8XsRXzDjXKhlZgKfJ7mBIaVPwB/w6c/RfR4WqzNxpuLRmbjcpZtXxLd0kvd06UTOtiWtW2wJ9+nma85TUtX3OPd4DIC3eGW8GkJJ8xR92qNIv2VmAn8C8HSS8dOSOAEngIlP0GT3JMW3z0sycrlLVz8HYFOSd3fpRM62JcXliFj1iJZxlvwIxEWX7V2Co/rESZoXwJUAovi3ZXYCG5D8/OyP+YkUCDgBTGEWRvBBUtx43X2EIUN+9EsAXkryn0OGME7sxfGDIwAc6i3hcUi2PjYKPO9M8o7WLffEoKQoyB/JX18Kfzc9M2eT3KtpI9ZfHwEngPWxbEWTpEcC+A6Ap7ZiMH8j0R5so9nqv+UfZrMRSFofwIcBLNKsJWsfk0D0dn4NyVi5tVQkIGkhAFF9YaWKKoY27BdRM5Nk3P61ZELACWAmEzXZTUkrAvhmz7o3NDkTwWp9r4aMh7jYEj4HwGbjafLohghEt4X/IzlR37AhM/1WK2lRAMGyr0XA657AewE8j+SNdSu2vmYJOAFslm9j2iXtC+CUxgz0T3F0hFiXZLQJs4xBQNLWAM7oWWu0MYh0PjQuO70FwHGugzneXEiKguDXAFh2PE2DGv0mkkcPKuKeBOsEMOOJlBT1vDbJOIS2XY9tinVIRjcIyxgEJMVWcCSB246hxkPHJ/DTYtUvVrktYxCQFJ1gYuXviWOoGdrQz0bbRH/xyHPanQDmOW/3eV2cU4ll92UyDqNt139bJIHxh9MyJgFJrwBwujuIjAly9OFR7PwEAIf5pvvo8OYcIWkVAFE54DHjaxuMht8AWNFHa/KdbyeA+c7dRBIYjeu/DuARmYfSpvu3A3gRyZvaNNpXW5KeUNQMXKOvMSYW1/eK8i7fTcyvLN2R9ILitu/8WQbQjdNx7GB1kl557oZ/LVadANaCsVslkvYBcGq3XmRn/W8AXkLy+uw8T9DholzM6wG8DUDcVLfUT+DfAN4K4J0u6lwPXElxhCZqq0axZ0t5AvuT9Bn08rySfNIJYJLTMrpTkj4OYPPRRw56RNQH3NiFcut7ByQtBeBk90utj2mh6RvFqp+PLtSEVtLOAM4HMFdNKoei5pMkXQmgB7PtBLAHkxghSIoWcd8CEAeZLeUJRKeQl5O8vPwQPzkbAUkvAhAlY54827P+7zMSuAvAm+LGvw/a1/emeNekMsubAaxC8s7KGjwwGQJOAJOZivEdkRR1q+JMhrfgRsP5XwC7knzfaMP89EwEJM0NYD8AR/qdrPSuxKr+a0neUmm0B01JQNI7AbzBeEYmEF+WI/n74cgjPSBJAk4Ak5yW6k5J2g3Au6trGPTIfUmeNmgCDQQvaUkA0cLwJQ2o76PK+AO7N8noRGGpiYCk+Ht3NoBX1aRyaGp2JHnh0ILuc7xOAHs4u5KiZdc2PQytjZCimO5BbRgamg1JWwCIBDuK7VoeSiA6eBwWX+BIxqq0pSYCkh5etDLcsiaVQ1NzPslYXLD0iIATwB5N5kQokuYD8DUAK/QwvDZCiq3g2BL2H+GaaRfv5oEAIsmet2b1uaqLkhrHAjjGPavrn0JJ8Z7FdvqL69c+CI0/AvAs15vs31w7AezfnN4XkaQ4fB/nARfsaYhNhxWXQuJySJx7sdRMQNLiAI6IRBvAw2pWn5O6LwDYg+TPc3I6F1+Ly3Gfj161uficmJ9RLuvZJOPyh6VnBJwA9mxCJ4cjaX0A0arH81xtnr9a1Ar8R7XhHjUbAUnLF6tfQysr8UsAryP5sdkY+b9XIyBpUQCR/D2zmobBj4odkJeSvHLwJHoKwIlBTyd2IixJUTj28J6H2WR40WovCkb/sUkjQ9ct6flFa7PoytBniXN+xwA406vLzU1zUY/yKpchGovxQSSPG0uDBydNwAlg0tMzvnPFzbdYBYzVQEs1AlGGI5LAH1cb7lFlCUjaCED80Vmx7JhMnvtVEVdc8PCxggYnrfgyEUc4Htugmb6rvpikLxL2fJadAPZ8giM8SXEOMM4Duihv9fn+a3RacWmO6gDLjiy+tGxXtD17WtlxiT4XnTvigsf7SN6bqI+9cUtS3PK9CEDUoLRUI/BtAKv5i0o1eDmNcgKY02yN4Wtx1io6hfjmZXWOcVtzF5IfqK7CI8sSKBLBDQHsn2ENwe8BOBrAh3ybvOyMj/ecpLhZHtvrluoEbisufcRPS88JOAHs+QRPDq/4dvzRAYXcVKhHkPS5yqboTqFXUqwERleRXRL/EvN1AEeRjLIjlhYISIpb5NHTd6cWzPXZRBxNiJW/WAG0DICAE8ABTPIcSaDbINUz57EKGKuBsSpoaYlAUdbj/wBEUdpUSnvEH85Lo/cxyS+1hMJmHjjeEjep1zWQsQlsQ/LisbVYQTYEnABmM1X1OCppLgBfBLBWPRoHreVqAJuRjPOBlpYJSIqLIrsD2BnAQi2bD3PfAXAegPeTvKMD+4M2KWkxAHHT9+mDBlFP8MeTjALtlgERcAI4oMmeCFXSwkWnkOUGGH7dIUeV/A1I3lq3YusrR0DSIwCsCWDTuKgDYNlyIys9FdtjccP0UpJRIsjSAYHiSEAU0X5CB+b7ZjIWBNb3WdW+Tevs8TgBnJ1RL5+QtAyAOK/kUgnjz/DvAGzkszPjg6xDQ3HhKZLBqC0Y28RLjqH3LwCuAfDpaCdG0ofjx4BZx1BJzykKPLvL0fhA45b6c0hGxw/LwAg4ARzYhE8Ot/ggjW1M3wwe/z24qygTE50HLAkRKDpCRCL47CIZjITwiQCWBhCrh/HHL7bx4+ftxdZufDn6ulu0JTSR95/5i3qmnwTwyLQ8y9Kb+HLzfJKRBFoGSMAJ4AAnfY4kcBMAnwAQZwMt4xH4T9HXNW4kWkzABGokIGmHqKc48N7RdRGNy2trk7yuLoXWkx+B/2/vPKC3u6Y0/jxadEb0MoIIoo/RmREkStSQEL0ESQiiB0mUaGGkkGiJqJkQESVRokYnjAmGGEYdRAuj92fWE+fjny9fecs955b32Wv918fKvXvv8zv3fd99z9ln7wSA45uzzj2WtAeAwztXvLoKn0Py6as7/Iw8BLolIOkppa5it4pXV9t9SR69usPPyE0gAWCegzMJSDq4FNwNkW4IpExMNxyjZYUJlBp/fjl9+Apj6HrozyD5zK6VRt/4CCQAHN+cVfG4lIfxVrC3hCPdEEiZmG44RssKEpB0YQDv8FblCg6/1pCPJumt9EgIZAUwz8DfCUjyYRAHLT5lF+mGwFcA3J7kd7pRFy0hMH0CpUrB+wCkVFV30+18P+f9pXh9d0xHrSkrgKOevu6dl+SyMJ+pXEute8eHrfEnJQj83LDdjHch0D8BSV7xc3cP1yuNdEPg6y6JRNInfyMhcCaBBIB5EM5GQJLfuh0E5gu4u+fjdwCceO2WYZEQCIENEJDkXs+vyknfTh8PB33/RPJbnWqNstETSAA4+imsMwBJNykt41JvqzvEAvB0ks/tTmU0hcD4CZQc5BcB2Hv8oxnUCNyneruUexnUnAzGmQSAg5mK4Tki6Y6l6GpqBHY7Pa9zD9vk4nQLNdrGSUDSBcuWr4s8R7olcE+Sx3WrMtqmQiAB4FRmstI4JLn8wisqqV9ltW4vdpfk5KzyI5CxS3JXlpMAXD00OiewL8kDOtcahZMhkABwMlNZbyCSvDXz+HoWVlbzNwBsn3ZjKzv/Kz1wSTcsPZa3XGkQdQb/KpKpnViH7WS0JgCczFTWG4gkPyc+vHC3elZWVrMTtO9O8uSVJZCBrxwBSTsDeAOA86zc4OsP+ITSl/wv9U3FwpgJJAAc8+w19F2Sv6gdpPhwSKRbAu4h/DCSR3WrNtpCYFgEysvkswE8bVieTcabDwO4Hck/TGZEGUg1AgkAq6GdnmJJLgtzCoCrTG90gxiRW149mqQDwkgITIpAKTR/jHNfJzWw4QzmVAA3I/mb4bgUT4ZMIAHgkGdngL5JuiKATwO41ADdm4JLXmX1lnAKtk5hNjOGMwmU740TAVwzSKoQ+O8S/P20ivYonSSBBICTnNa6g5LkL3GfYr1oXUsrq90FW+9A8rSVJZCBT4aApFuWnr75vqgzq98HcEOS/jcSAjMTSAA4M6pcuJZAOcHnfJPzh0wVAr8qK4Hvr6I9SkOgAQFJjwbw4nT2qAbbK37e9vUKYCQE5iKQAHAuXLl4vSDwVgDem5N81Z4Ln+J7MkmX4YmEwGgIlENjLnh+r9E4PT5Hnevn4M+5f5EQmJtAAsC5keWG9YLAOwF4W97wqz4XbwLwQJJu6xQJgUETkHQJAC5FcqNBOzpu5/5Uaoh6FyYSAgsRSAC4ELbctF4QuCuANwLI81Tv0fBbvvMCf1DPRDSHwHIEJN2gBH+XXk5T7t4EAe8M7JIWb3lGliWQH+xlCeb+MwlI2h3Ay4KjKoEfl/Zxn6pqJcpDYAECkrzd623fFHdegN8ct+xOMu055wCWSzdMIAFgnozOCEh6KoDndKYwijZE4I8AHkMywXaej0EQkHQOAM8H8MRBODRtJ/bMZ3/aE9xydAkAW9JeAVuSDnaAsgJD7XuIrwewWyr+9z0Nq21f0oUBHA/g1qtNosno9ybp79dICHRCIAFgJxijZC0BSd6eSCPy+o/F58qWcOp/1WcdC+sRkLQNgHelM1CTRyPBXxPMq2UkAeBqzXeT0ZZ+n0cCeHATg6ttxHmB9yGZeoGr/Rw0Hb2kXQC4d3XqgNYnvw9Jb7FHQqBTAgkAO8UZZesIJAhs+iwIwHMB7J8+wk25r5yx0s/3JQAeunKD72fAzyK5fz+mY3XqBBIATn2GexxfgsDm8D9RykN8r7nlGJw8AUlXA/B2AP43Up/AwST3rm8mFlaVQALAVZ35RuNOENgI9N/NnOHuC9kSbs590gYlOZ3jcADnnfRAhzO4BH/DmYvJepIAcLJTO5yBJQhsPhfeEnbO0L7ZEm7OflIGJW0B4FUA7j+pgQ17MC8jueewXYx3UyCQAHAKsziCMSQI7GWSPg7gniRP78V6jI6agKQrli3f6456IONyPsHfuOZr1N4mABz19I3L+QSBvcyXTwnvTPLkXqzH6CgJSHJdv+MAXHSUAxin00eRfMg4XY/XYySQAHCMszYWfxgqAAAgAElEQVRinxME9jJ57h36bAA+Uej/HQmBjRKQ9CQAzwPgDh+RNgTc2eeRJJ2+EQmBJgQSADbBHCNrCZQg0MWiHxYyTQl4FdCrgV4VjITAWQhIukDp5btT0DQlkAMfTXHH2DoCCQDzLPRGQJLriT2qNwdW0/APAexE0iVjIiFwJoFS4uWtALYNkqYEfFDrgKYWYywECoEEgHkUeiUg6YUAntCrE6tn/M8+IeyTwtlyWr3JX3/EkrwSf2hKvDR/FvYk6a3fSAj0QiABYC/YY3QtAUmudP+MUGlO4D0A7k3y/5pbjsHeCUj6BwCvBnC33p1ZLQec57cbSbOPhEBvBBIA9oY+htcLAr0K6NXASFsC33EAQPLzbc3GWp8EJN0CwJsBXKZPP1bQtg9h+aXr2BUce4Y8MAIJAAc2IavsjiTnAzovMNKWwO8BPJbky9uajbXWBCSdq6y275NTvq3p44/lEJbb6UVCoHcCCQB7n4I4sJZAyUfyCeE8m+0fjbcAeADJ37Y3HYu1CUi6Qln1u0ltW9F/NgJ+ydqR5AfCJgSGQiA/skOZifjxNwKSHgDgNQkCe3kovgLgriS/1ov1GK1CQJLz/PyZukgVA1G6KQK/BnAHkh8NphAYEoEEgEOajfiyNgi8F4DXAzh3sDQn4B+sB5H0imBkxAQknQ/AiwHsPuJhjNn1XwC4NcnPjXkQ8X2aBBIATnNeJzEqSdsBeCcAF6iNtCfwSgB7k/xNe9OxuCwBSdcs7dyutqyu3L8QgR8B+FeSpy10d24KgcoEEgBWBhz1yxGQdH0A7wOw5XKacveCBL4B4J45JbwgvZ5uk7QHgIMAbNGTC6tu9lsAtiPpfyMhMEgCCQAHOS1xai0BSVsD+BCAy4dMLwR8enE/AAeml3Av/Gc2Ksk5fs71S22/mal1fuEXAdyWpFcAIyEwWAIJAAc7NXFsvSDQ9co+CODqIdMbAbeP24Xk93rzIIY3SkDSDQAcD8CnfSP9EPh4OfDxy37Mx2oIzE4gAeDsrHJlzwQkXRTAewHcqGdXVtm8k9ofTNJ9YyMDICDJ3+MupP5cAK7zF+mHwAklXcIlXyIhMHgCCQAHP0VxcC2BcqrxbQB2CJleCfiE9qNIOiCM9ERA0sVLbT8fmIr0R+AYAPdNikR/ExDL8xNIADg/s9zRM4HSzcAByL17dmXVzXsr+IEpbtvPYyDpLgCOBOAgMNIfgZcCeDRJ9/iNhMBoCCQAHM1UxdG1BMq2l+ubPTZkeiXgH73DADyR5O969WRFjJdVv0MB7LoiQx7yMJ9K8nlDdjC+hcDGCCQAzLMxagKldZx72J5j1AMZv/PuHOItsFPGP5ThjiCrfoOZm78AeAjJ1w7GozgSAnMSSAA4J7BcPjwCkm4HwF0rLjg871bKoz8DeD6AZ5J06ZhIRwQkXQKAtxp36Uhl1CxOwIc8XBvThz4iITBaAgkARzt1cXwtAUnbloLRlw2Z3gmc6u1Jku4rHFmSgKTbA3hDiqEvCbKb239ayrxkpbsbntHSI4EEgD3Cj+luCUi6FICTAFynW83RtgAB5wPuA+CQJMcvQA+ApPMCeKFPWy+mIXd1TODrpa/vdzvWG3Uh0AuBBIC9YI/RWgQknR/AmwDcqZaN6J2LwEcA3CfFo+di5uDvGqWPr/+N9E/gZAB3Sdmj/iciHnRHIAFgdyyjaSAEJPlAyL/lhPBAJgT4OYBHkjx6MB4N1JFyuv0xAF4A4DwDdXPV3DoKwMNIOsc1EgKTIZAAcDJTmYGsTyAnhAf3TLh7yENJOiCMrEdA0hVLXb/bBM4gCDjg25vkSwbhTZwIgY4JJADsGGjUDYtAOSF8LIALDcuzlfXm+wAeTvLElSVw9sDvnAC86ncAgPOFyyAI/ArA3Um+fxDexIkQqEAgAWAFqFE5LAKSrg7g3QC2GpZnK+3NmwHsRfJHq0xB0rUBvA7A9VaZw8DG7kMeO5A8bWB+xZ0Q6JRAAsBOcUbZUAlI+gcArtt1s6H6uIJ+eSvYHUSOWLWxl57W+wN4AgCvAEaGQcDlXe5A0uVeIiEwaQIJACc9vRncWgKlh/Br3LEiZAZF4KMlN9DdRCYvkm4JwM/hlSc/2HEN0Kki9yP5h3G5HW9DYDECCQAX45a7RkxA0uMBHJj2cYOaRP/o7gfgRVM9bSnpIuV07yMGRT7OuJ/1viSfExQhsEoEEgCu0mxnrH8jIOm2AI5P+7jBPRRfAnB/kv85OM+WcEjSjgBeBeAyS6jJrd0T+DWAe5B8b/eqozEEhk0gAeCw5yfeVSRQDoe4c8gVKpqJ6vkJuPyG6zjuR9J9V0crki4JwGVE0sN3eLP4bQC3I/nV4bkWj0KgPoEEgPUZx8KACUjaEsA7cjhkkJP0DQAPIukcwdGJpF0BHAbAB5AiwyLwwbLyl5qUw5qXeNOQQALAhrBjapgEyuGQVwJ48DA9XGmvnJ/lufFp4V+OgYQkb/P6kMcOY/B3BX08BMDjSP5lBceeIYfA3wgkAMzDEAKFgKQ9ARyashyDeyR+VlpxHTc4z9ZzSJJfIhxgpPD48CbLB40eQNK9wiMhsPIEEgCu/CMQAGsJlBIdPhzireFIvwT+COBwAPuT/L9+Xdm0dUnOIz0SwPZD9nOFfftxqe/3uRVmkKGHwFkIJADMAxECZ1/FuTyA9wC4ZuD0RuCdAB5PctC1ASWd2346SAVw3t5oxfCmCDjouzPJHwRTCITA3wkkAMzTEAIbIFA6NbwBwE4B1JTAfwF4JMmTm1pdwJgkd5V5NYCrLXB7bmlDwNu93vZNcec2vGNlRAQSAI5osuJqewKSngzgeQDyWamL/ztlFe11Q0/Ol3SxUtB5t7pIon0JAi4l9GSSLicUCYEQ2ACB/KjlsQiBzRCQdDsAbwZw4cDqnMB3AbgDw6tJOudvsCLpHAAc9D0/pV0GO012zPl+O49hFXnQFOPc5AkkAJz8FGeAXRCQdBUA7hbgfyPLE/h+WVl95Ri25yTduBzySF7o8nNfU8MpAO5C8vSaRqI7BKZAIAHgFGYxY2hCQJJXAP8dwB2bGJymkR+W7dPDx9DlQ5IPBL0AwH2mOR2TGtXBpV7knyY1qgwmBCoRSABYCWzUTpOAJH9mfOrTeYHnmuYoq4zqDAAHus4iyd9WsdCh0nK61/mf+wA4f4eqo6p7Ai4Qfj+S7ugTCYEQmJFAAsAZQeWyEFhLQNINALheYPoIb/rR+BUAr8y8kOQvxvAUSbpN6T5y5TH4u+I+fgXAjiS/ueIcMvwQmJtAAsC5keWGEPgrAUkXKS2/7hYmZyPwewAv8wEPkj8ZAx9JWwF4MYC7j8Hf+IijfShnDCvKmasQGCKBBIBDnJX4NCoCknYvq1xbjMrxOs46/8p9cPcbS+FdSZ63JwJ4OoDMYZ3nokutfrl4DMlXdKk0ukJg1QgkAFy1Gc94qxCQ5NOhb1/hU8K/A3CUS6SQdE2/UYikW5fTvV79iwyfgJ+tO5H84vBdjYchMGwCCQCHPT/xbkQEJF2g9K59wIjcXtZVJ+B7q/fFJH3CdxRSevceBOAeo3A4TprAuwHsOvS+0JmqEBgLgQSAY5mp+DkaApJ2KathUz49+lMAh5RTvf83lsmRdB5vHwJ4Rk73jmXW4DZu+5B0fmYkBEKgIwIJADsCGTUhsJaApKsCOBbAdSdG5n8BuL3WK8aUfC/JJXseVAK/y01sTqY8HJ/yvQdJ/xsJgRDokEACwA5hRlUIrBcEerXJ9QL3nkAv4S+7lAuAN5AcTaHdUrfx3qXd3JXyhI6GgLy6DOBJY+gUMxqqcTQE1hBIAJjHIQQqE5C0HYBjAFyysqka6j/uThgk31lDeU2dkm5fViu3rWknujsn4DZuLuz8gc41R2EIhMDfCCQAzMMQAg0ISLo4gDcC2KGBuWVNePXFAd+zSX52WWWt7y/b784Xu1Nr27G3NAE/dw8g+fOlNUVBCITAJgkkAMwDEgINCUjyAQT3lh1ivTmXcnm9W7aR/HpDLJ2YKr2a9wXw2LTp6wRpSyXuGPNYkke2NBpbIbDKBBIArvLsZ+y9ECg1A48DcLVeHDi70W+VUi6vHOPKi6RzAnhoyfPzSmtkXAROAXBvkt8Yl9vxNgTGTSAB4LjnL96PlICk85XuIQ/vcQjOsXqJt3tJ/qVHPxY2Lclt+Lyius3CSnJjXwT+XIL2Z5H0/46EQAg0JJAAsCHsmAqB9QlI2hHAawFs2YiOt9q8zXsQya81stm5GUk3LnUI/W9kfAS+DWBnkl79i4RACPRAIAFgD9BjMgTWEpB0iRIE3qEima+WLiVHkXT3jlGKpOsDeFYOeIxy+tY57R6+e4+pjuSoacf5ENgIgQSAeTRCYCAEJLlQsWufXagjl7yt61OVh5F8X0c6e1Ej6XoA9gfgLd/IOAm4VaBz/T48TvfjdQhMi0ACwGnNZ0YzcgKSLlvKxdxqiaH8BIBPUzrw++4Senq/VZI7qbhtWwK/3mdjKQf+HcCeYzxktNSoc3MIDJhAAsABT05cW00CpXvFHgBeBMCHRWaVzwB4OYCjSf5+1puGeJ2ka5TAz32VI+MlcAaAB5N8x3iHEM9DYJoEEgBOc14zqgkQkLRV6SCyqYMOrt3n1ZVDSf7n2Ictaeuy1XsfAOcY+3hW3P93A3ggyR+vOIcMPwQGSSAB4CCnJU6FwF8JSHIQ9HgABwBwb+F14pppLwNwxBS21SRdrozx/gBc1y8yXgI+ZORDHinqPN45jOcrQCAB4ApMcoY4fgKSXDTaK33fL6d5303SLdtGLeUE9FOdH7ZegDvqca2w8+4dvevYc09XeP4y9BUikABwhSY7Qw2BoRCQdFEAT/BKEYDzD8Wv+LEwAaciOJA/eAovJgtTyI0hMCICCQBHNFlTdFXSCQAuWMb2awCnlz+XjPD/dsHYz5H80xTHv2pjKit+Dvoe1WG5m1XDOLTxupjzfcbYP7oWSEnnAnADAP8I4FIALl3+Lg/gvMXur0jeqZYP0RsCmyOQAHBzhPLfqxKQ9D0ALn2yKfkNgE8BOBnARwB8cuynXKtCHaDykuP3RACPWPMDOEBP49IcBJzr93S3E1z1VT9JDupuAuBfyt/NZ3jOv0fSAWEkBHohkACwF+wxuo6AJHeomLePqwPCtwN4A4D3po/ocJ8nSVcA8BQADwNw7uF6Gs/mJPC2UtfvB3PeN5nLyyrfDgDuC+Duc5ZsMoevkrz6ZIBkIKMjkABwdFM2LYclfQ7APy0xKpeYOMaFj0meuoSe3NohgVLCZh8ADwHg7bDINAj8L4DdSZ44jeHMP4rSlcbPtQO/i82v4W93OLXln5e4P7eGwFIEEgAuhS83L0tAkrd1vW3ShfhH6RkkP9uFsuiYn0A5rezAzz+OCfzmRzjUO9xW8KU+6EHSuborJ5Jcj3NfADt2NPgPk9yuI11REwJzE0gAODey3NAlAUkO2u7YpU4AJ7mYMEnnDUYaEJB021Kv8PYNzMVEWwIuMO5uHqMvNL4INkm3KIGft3u7lBNI3rlLhdEVAvMQSAA4D61c2zkBSW8CUKvd17E+bUryR507HoUuUu0VPs/dkwC4Z29kWgS80rc/gINIegVwpUSST+4eUvH76RiSu64U1Ax2UAQSAA5qOlbPGUnuFuB8mlrycwBPJHlELQOrpleS6/Y9tAR+OcU4zQfAK/PO9XPO30pJ6cXt59u9uC9ScfDu4uPDUZEQ6IVAAsBesMfoOgKS/Ib96AZEPlq2sf6nga1JmpDkmmYu4+K/LSc5yAzKp3ofQ9Kr5ysnkq4C4CgAt2wweK+sPq6BnZgIgQ0SSACYB6NXApKeUzoItPDDdcseQvItLYxNwUZZDdm+tGpzvpJ7E0emR+DPAA4D8DSSv5re8DY/Ikl3A/D6NYXpN3/Tclc8m+R+y6nI3SGwOIEEgIuzy50dEJDkE6PP7UDVPCpeDuCxKSa9cWSSHOg5v+8ZANyHODJdAp9xnUaSX5juEDf5rLuI80He8m48/ieTPLCxzZgLgb8RSACYh6FXApL2AnBoD0580cVbSWZLeA18SecsJVxc7mLrHuYlJtsROAOAX8BetaqdPCRdGcA7AFyzHfa/WXokycN7sBuTIXAmgQSAeRB6JSDpQSXnpg8/fDp4O5Jf7sP4kGxKuioAz4X/Nteab0iux5f5CQjAawE8geRP5799GndI2hbAhwBcsqcRPYCkt5wjIdALgQSAvWCP0XUEJN0TQJ8J5z4lfFuS7kiyUlLKuLhgs08iundpZPoE/LLj7d5PTH+oGx+hpBsAeD+Ai/bIYSeSx/doP6ZXnEACwBV/APoeviQXDn53z3643tkdSPqk8ORF0oVL0OcTiFntm/yMnzlAP+PPBPDiVe+dLcknfP2dc4Gep34Hku/r2YeYX2ECCQBXePKHMPRSZX8Igdfvy0rgx4bApYYPkpzT9xgADwRwoRo2onOQBN4KYC+S3x+kdw2dkuTWaw7+tmhodmOmbppuRQOYhRV2IQHgCk/+EIZeGqt/fgi+AHCZmJuR/NJA/FnaDUk+4ejyFq7dd6ulFUbBmAh8qxRzfu+YnK7lq6RrAfDW91Befq49pe+aWvMWvfUIJACsxzaaZyBQVqW+NsOlrS75IYAbkfxOK4Nd2ym5fbcBcB8AOzWsa9b1UKJvMQLe7n02gINT6uivAEsRc5e7udRiSKvcdSWSDtIjIdALgQSAvWCP0XUESr9Ndx8YknyjBIGjOiEpyd05Hl46q7iPaWS1CLiY86tLMecfr9bQNz7a8rlw8OeSL0OSS5D8yZAcii+rRSAB4GrN9+BGK+mCZet1aL6d4nZQY1hBkXQjALsBeMBAcpuGNper4I+3efcm+ZVVGOysYyx1LZ3Xe5NZ72l43XnH8P3SkEdMNSaQALAx8Jg7OwFJrks2RDmWpLthDE4kXR7ArgDctD6dOgY3Q80ccsC3B8mTm1kckSFJLjLvYvNDk7+QdNH1SAj0RiABYG/oY3gdAUnuPdp3SYaNTcjTSbpfce9Suhbcyx1MANywd4fiQJ8EnKvqPrJHkPxLn44M1bYk58C+caD+/ZzkPwzUt7i1IgQSAK7IRA95mJJcpuJixUfnrm0zoC41Xp28G0m3i2ouZQvrjl7lAeCaifnMNp+FQRn8rWv5AXgeSR/2iGyAgKRrA3AaxxDKvdhDB+k+7HZ6cffHJHfO5IVAnwTyY9In/djeIIFSusSV+m8NYEcfyOg58PEP7bYtTwZLunHZ4vWKXw505LPiF5E3AHjK0Ov5STofgBe5uDqANwF4K0kHY01E0vkBuJTTlZoY3LARz5cPnpwI4AMA/oPk73r0J6ZD4GwEEgDmoRg8gVLCwadb3bKsr76drh92C5LV8xUlnQOAc7u8EhoJgY+Xen6Dr09ZVt6OA+De0uvE7eeu1eKzY4OSHHT2lbvrrfkjALyC5Hfz6IbAkAkkABzy7MS3sxAoK4NPB/BkAOfqAc8TSXplo7pI8ravVw8iq0vg1FLSZfDPgST/ljwewHMBnHu9KbsjySbtHiW5y81renhk/gjgQNdfzMneHujH5EIEEgAuhC039UlA0jUAHAPgOo39+AOA65I8rYVdSR8E4NZVkdUi8PVywOOYVqtmy+AttTy96vYvG9BzMskmHWhKUXkHzd4Cbim2uWtK8LREHltdEEgA2AXF6GhOoOT5+PDI7Rob/wKAG5D8U227pXXVF2vbif7BEHCvXnfw8Mne6s9XF6OW5BPpLj590Q3oc7qEt369BVxVSvcb5xler6qhsyt/P4C7kvxNY7sxFwJLE0gAuDTCKOiLQMmVewmAPRv7sC/JA1rYlPQ6APdvYSs2eiNwBoAXADhkLNuHkpyL68/epnLtXkfSW7LVRZJTQxw8t5TDXWMwZXhaIo+tLgkkAOySZnT1QkCSv/j9A9BKvBXslY3qPYwlXQ6AtwTP22pwsdOMgE+XH+zcMZK/aGZ1SUOS7gfABZY3Vcfu92691uLEctn69aGplnnBB5Dcd0mUuT0EeiWQALBX/DHeFQFJTyqrKF2p3JyeTwO4aYscLUnPc/mPzTmU/z4aAn6BeAWAZ42pF2zpPnMkgB1mIO06hU+d4bqlLimHTz5VSkUtpWuOm59A8t/muD6XhsAgCSQAHOS0xKlFCEjyCcR9Frl3wXseR/KgBe+d+TZJFwbwzTXFsme+NxcOioCLAbuW31NJfm9Qnm3CmRJk7Q7ghTN27PkZgK1arGpKehyAlsHYc0i23G0Yy2MSP0dIIAHgCCctLm+cgCSfDnbx5Bbirgze5lpX3b+aTUnuZ+ptt8j4CPgwhJ/LZ5L86pjcl3R1AF71u9kcfjsv7qVzXL/QpWVF8r8BuPB0Cxlsb/AWg4+N6RFIADi9OV3pEUlyDbL3NiyfcjzJnWpDLy3hnAu4VW1b0d8ZAQd+bwHgQ0NjC/wu4i1qAI8EcM45iHwbwFVI/nmOexa6tLSQ9CnkFuJuHrcfy+nsFkBiY/wEEgCOfw4zgvUISPKP1394da4RnCaFbiXdE8CxjcYUM4sT8FavA7/9Rhj4+TfhQaWo8cUXQLAzSY+9qkhy+af3VDXyd+VOv7heiy3tRuOJmRA4k0ACwDwIkyQg6WoAPgvggg0G6JZPV61dwqPkYrkd2LYNxhQT8xNw4OcAff+xBX4eqqTrlu1e9+FeRE4lWb0OX+k17K3fyy/i5Jz3/KrU/bS9SAhMikACwElNZwazloCkuwB4eyMqTZLDJd0VwNsajSlmZiPgwO/NZavX2/SjEkkXA/AcAI9YclHABZHfUXvwklyD82m17RT9O5J8VyNbMRMCTQkkAGyKO8ZaE5B0WKNC0b8DsHWL052SPt9Dx4PWUzcGew783ALNW71jDPxcN885fs8E4LSJZaTV6t9lAXwDwBbLODvjvYeRfNSM1+ayEBgdgQSAo5uyODwPAUkuoOxt06vMc9+C176WpPOnqoqkOwI4saqRKN8UAQd+PtXrrd7RBX4emKTbAHiZUxc6mupWebCvBfCAjnzelBoHmdck6Re7SAhMkkACwElOawa1loAk5zR9BsA5KpNxYHBdkg44q4qkTwK4SVUjUb4+gVFv9ZbAzwGf6+bducPp/QzJG3eob4OqJDn31Z+t2r9b7sN8Y5I+SBYJgckSqP1Bmiy4DGxcBCQ5x6l6ZwIAHyJ569p0JG0P4KTadqL/TAJ/BOCezM7z9InQ0UkpJr4fgEcDcKmkLmV7ku/vUuGGdEn6MIB/rW2nzHOKPTcAHRP9EkgA2C//WG9EQNJ5yupBV1tem/Lc9cJci7CqZBWwKl4r9/bfqwG4rdn/VrdWwUCpH/kwAD44sWUFE61W/1qVffGWvrd+3a4vEgKTJpAAcNLTm8GtJSDJ21TuG1pbWiXEbwfgg7UHs4L6f1169R5I8odjHb+k2wM4BMA2FcfwryQ/UlH/maolfQHAtWvbKVu/TheJhMDkCSQAnPwUZ4DrBYEvL+UuaoO5F0mXBqkqDbfFqo5jIMrPAOAWZgeTdD/bUYokB3yvbLBd+kGSPkxSVSS5taMP3dSWl5Pco7aR6A+BoRBIADiUmYgfTQhIuigA53H535riU4Tb1G6JJenmAD5WcyAroPs7AF7soImk+zuPUiRdorRv85bvPO3bFh3vzUl+YtGbZ7mvbGF/DcCVZrl+iWt+Uvp6/3IJHbk1BEZFIAHgqKYrznZBQNJuAF7Vha7N6Hg4yep2JL0PwG0bjGdqJlwk/DgAR9cO1GuCK50x9gbwFAAXqmlrje73kdyhti1JDy/b8bVN7UbyyNpGoj8EhkQgAeCQZiO+NCFQWqr9J4DrVDZ4OoAr1k4ol3QzAB+vPJapqHd+n0/0HkTSK0ujFUkua+SaeM8HcKnGA7kpyar5tOXg1rcBXLry2D5L8oaVbUR9CAyOQALAwU1JHGpBQJK/8Fskez+a5Etqj0nSBwBULz9TexwV9Xub111hnOf1i4p2mqiW5FOxBwG4RhODZzXyAZLVV5wluWSND7HUFJWDH6fUNBLdITBEAgkAhzgr8akJAUktugp4FfDKtXPLsgq40UfG+ZEOIt5K0oWcRy2SrlUOqrSoh7cxVi1W/9zBx7m6tVf/mnTvGfVDF+cnSyAB4GSnNgPbHAFJlwPgul/+sakpTyT5opoGrFvShwDcqradEeh3DTefGn0RyS+OwN/NuihpawDPAHCfBp0wNuVPq0LnTwRw4GbBLHfB78vL2feXU5O7Q2CcBBIAjnPe4nVHBCS5QO7TOlK3MTU+YbgVSeefVRNJDv4cBK6quGafy/y8lKSZj14kXRmAu1I416/Fyd7NMbsVyZM3d9Ey/13SBQA4969G4eq1rh1Act9lfM29ITBmAgkAxzx78X1pAuXHxiVbLrm0sk0reBLJF1a24VVAb3m6NMwqyecBHFpO806ig4OkK5bA78EDCfz8PH2CZPVnS9KTALyg8gP84/JS9pvKdqI+BAZLIAHgYKdmNR2T5D6ldwLwIAA/I+l/q4qk3QG8rKoRwCtS/9ggF/BfAFRdoanMaVb1btN2rEuEkJzMCWhJVyg9qx9aoWfvrGw3dt0NSX52WSWbur+UtPGBnYvXtAPgkSQPr2zDL2TOM3bN0dcAeCfJP9W2Gf0hMCuBBICzksp1VQlIuh4Ar3bcD8DF1hi7E8kTaxovxWa/XLlllofQahXwPQB8SnSK8t+lLtyrSf58KgOUdJmS4+cXHvetHpq8h+QdajvVaPXPfZ19MOuPNccjybzetcaGXwLf6GCQpMtQRUKgVwIJAHvFv9rGS+eC+wJ4yCb6fP6odNT4v5q0JN0ZwDtq2kC7VcDrApjSD4x/qI8vJVwmleNYVvz2AeDi5F79Hqpcp/aBmoarfw8m6RW5aiLpwgBcZ3JjqSWnllXBN0wlX7UazCiuRiABYDW0UbwhAmWL945li9dbve0zM6sAAB5kSURBVOeagZS/JO8/w3VLXSLJba1uupSSzd/c6kSwO1zstHl3Bn2Fy4C4p+0RU/uRlPSPa7Z6Z/kM9DlRx5G8Z20HJD0BQO08WT9TW9cuCSTpDQD8crs58cuNdzgckJ6YLeLN4cp/75JAAsAuaUbXRglI8qqUt7e8xbtIfk+LreAbAKia41RWAS/XoDvI1QH8FwB3ixiT/Nm5UuU070kkXah3MlIOdzy1rHoPPfAzd9dO3JbkV2tOQun68b0Fvxvmce1eJN88zw3zXruBrd9ZVfhgireInd4wifJFsw481/VDIAFgP9xXwqokB3quW+bA7/pLDrrVVvBJALZf0tfN3b4XyZdu7qJl/7sktzyrvnK6rJ/lfudlHVEOdbh49uREkgM+lxxyf9vLjmSAryP5wNq+StqrnOSuaeo0klU7p8yw9Tvr+Hyy3auC3v04Y9abcl0IzEMgAeA8tHLtZgmUH7m1W7xd5jUdRvJRm3ViiQsaddT4QSlBUbVkiaQrAfDKTZdzsATds93q1aX3ltU+b3959W/yUnr43qYcevI2/RYDHbS3J69G0tum1aRhz9+7kqya5yvJ7Qb37BCWvyNOKMHgu1blM9Ihv6jaBIEEgHk8OiEg6dplpc8FaxfZ4p3FDwcITkb3id1qIsllVFxOpabsTvIVNQ1YtyT3Ia4aNC8wBndfcXkMb3WtdBcGSS4Rcu8SDN5oAZY1b3kJSffjrSqNyjCdStKVBqqJJKdd+Lup1u+qd0GcW3hk7e/AapCieFAEaj2ogxpknKlDQJLLtXiL1+Vb/qmOlbNp/QjJqn1QJbnR/fsqj8e1zq5SO+m7zJFtubtCn+JT3G8C4C3FydTt6xKopG3LS5S3XGsXJt+c6+5a47qVVbcfSwkmF2L3oZiacnuSXm2uJo2LsH9uzRbxZMohVZucKN4ggQSAeTDmIlC2eG9ffqju0tP24j1IvnUux+e8WNInAdxkztvmvXwPkm5dVlUkPbt0lahqZwPKvWLrQNqrfceTdO/VyGYIlM+Ya8j5xcrlifo4LPJskvvVnixJewCoXZD5oySrruhLugeAt9TmtQH93iL2trbzBV2rcSXSKHrgPEmTCQAnOa3dD0rSNdds8fa9OuEVrW1qBhSN+ur6sMMVG5wI9uqfma0tsN39Q/J3jT597AMoLnjrbavIggTKQSqXE3FnEKdZtBCv+nn1r3bvahe8ds/fS1ce1I1JfqaWDUnO4XTNP3dx6VP8ffL68rmrmibT5yBjuzsCCQC7Yzk5TWX7cNcS+P3zwAa4L8kDavok6f0AnKxfUx5N0nl6VUXS4wG8qKKRnwL4d6/21W4XVnEMg1YtyWkW67rlOHewljye5ItrKV+nV5LzCw+pbOf9JKue6pe0L4BnVR7HvOpPKauCR0+pY868EHL9pgkkAMwTchYCJSfHbcRcuuWuA21LZZ/dxN0FXX2itopI8hawt4Jrit/a3ZbqtzWNlALczrW6fId2fErUra68xXtC7dZaHfo9alVlLv0Z9cuZ0zAu2OGAWrVJOy8Any4e++qf/f8fAOfvcA66VOW0i7eXYNB1NbNF3CXdketKADjyCezafUnblNIhXauuoe9VJF1TrZpIcpV+l7WpKXuTPLimAeuW5K1EnyJcRly6xaekXUz3zbUPCSzj6CrcW9qn7ViCQT+nDqyWkfuSPHoZBbPcK2lvALVXGV1ayN2GqomkV5U2ftVsdKjYaTPeqo6EwJkEEgDmQTgbAUleVav9Zt4Feb/NXrVmnTJJ3vr2dkpNcZN451xVXQX0ACR9GsC85UbcjcMnd32K95iptWWrObEtdUu6EIC7lbIy3vact/7jx0neorbPkhykeqVxy8q2rkfSPXeriKStALik0TmrGOhW6ekkL9OtymgbO4EEgD3NYKmb50K9NwdwLQAOZhwI/BCAWyL9d/n7dut2WJKcy+XaZGOQY0nuUtNRST7J6tIwNeVxJA+qaaAEgK6F9h8zvvx9ak3QN8nuHLV596W/5O/6ZKq3iV02aXMtAR3ku+XbabV9lvQ4AP9W2U71/sWSjgVQvUdyR5ycCzhLb+KOzP1VjSTHGK6P6B7rVwNwiVIn1kGz2919zAeB0vquU+wzK0sAODOq5S8sX8o+zedE7llbErnG03tKf9R3k/zZ8p5sWoOkR5TuDLVNdaXfxaGr9c6U5B/QD3fl7Eb0tFwFdNkNl9/YkLgXsrd3/52kV2kiIycgyav5O5dg0HmtG/reP5zkI2sPteHq3zVqBrPlQI5r8Y1FHkHylS2clXQ5AE5LcAmjWwK4yAx2v1QqB7jIddXakzP4sjKXJABsMNUlT+cxAPYBcOElTP6pBILOO3kvSedjdS6S/KZWfSWgQ8dbnPTzm6pXa2vKk0i+sKYB65b0DyVx3f9avE3m7d03knS5mMhECUhywWWv7vtvXX9uv2ReqcVpUUlPBvD8ynidpuCVz2oi6RNlVauajY4Vu6Wfd5WqSNnRuns5OLhMUwAXjPfzcTDJ31VxNkr/RiABYOWHQZLfhNzyy29FXcrXSV61S4VrdUnyW9i6AKGWmS713pKkg7Qq0qg7iL/8Lle7/poBSfIPpJ8fB30+xRhZMQLlwJcDQX+XtDj44e8T1/1zrmIt8Uuxgx3n5lWRRt8FXfpeNf9Pkut+uotNl+LdB5fXceegKgsdXTo7Vl0JACvNnCQn3Lq+m/Nwasm1SPrD17lIOgbAvTpXXE/hZ0nesJ76M4MmbwNXbUMH4ACS/uKLhMCkCEh6GYDdKw/KJ9Orfm9JcrqJ87bHIk7ncMvOzqU0CPD2bS35CgDXSnVN1kjHBBIAdgzU6iTtVoruzpL7sIwHjyRZpY1SoxZNy4x9Q/fuRPL4rpWu09eoLqC7L7g7iAsrR0JgEgQkbV3SSmqfmL0myWpdMCTtBOC4kU3K7iS9C9W5SNoTwGGdKz67QpcMenLt3ukNxjEoEwkAO5yOUhbALbCc+NpCqr3tSvIhlWpfpJXg2F+vivpEYxWRdBKAqp0FvHJM0l0SIiEwCQKSTigHA2qO5+0kXQanmkjyipRPtY5Jrk7yqzUcluQDYz5g1EJ86OaeJL/Vwtgq2EgA2NEsS3LzdpdPqb3qt9bjM0hWq6U1wjxAs7kXSX8pVRFJ3mau1le0OO0OGy7ami+6KrMYpS0JNDpF7yH9M8lqJ3MleWvZqTFjkp+RrNYDXJJ3Kqrp3wBo50nvSvLdY5qEofqaAHDJmSl1jp7n5eklVS16e7VyB43f7hYd//r3eRXw2jUThyW5/ZkD/pryFpKt3qxrjiO6V5xApUMC61OtuvonyXUU3UXjyiObzjeRrFLTVZJXQr0i2of4pPBTa+729DGo1jYTAC5BXNIWpXyGe+b2JVPI7+ia3f1IvrFrpev0NawBdnOSLjcRCYFREpB0/1Lfrbb/1bY57bik+wF4fe1BVNC/B8mXV9BrJj7Q44M9fYl7HHvHx/2OIwsQSAC4ALTyheCtXi9Du8J5n1Kt5lWDE161uLmsibdQq5UPaJQL+CmSfT9fteYoeidOoLwguxzL5SsPtWqXC0k+uOIaemNb/TP2mjtEQ+gY9UnvxpD01nBkTgIJAOcEVoI/5919pELtowW8Qe0aT2OrB7iO4UNIHrUI0FnukXSz0h93lsuXuabqauYyjuXeENgUAUnPKrXcaoJq0Q/8IQCOrDmISrpr5/8NpWf8FwDcOpUT5n+KEgDOyUzSZUtbsGpFmOd0yZd7tcv5KZ3LyPpdrh3/N1zouPIqYIsewf6S3Zrkbzqf3CgMgUoEJF2h5Mw5TaamHEHyYbUMSDpXGcdWtWxU1FuzSsQ2AKqcLF6Qh3//bkXy+wvev5K3JQCcY9olXRzApwe4FfAwkkfMMZSZL5X0qFLQeuZ7BnThfWt2OCjtj/z2WVteQPIptY1Efwh0RUCS63FWLckCwKt/bmH33a78Xl+PJPdtf3Ut/ZX17kmySo6eJAfdTXoLz8HIL/03Jum+6pEZCCQAnAGSLyn9fN1qbJk+hzNam/syt/NyknLnIskV7135foziCvXXqXlSrNFJ6T8AcIHbau2txji58XmYBCTdCsCHGnj3cpJ71LJTVv+cT+z+yWOUakWxJfmQXZXuIkuC/iyAW+RgyGwUEwDOxskB4Fsqt3Wb0ZMNXpY8wI3TuyvJdywDd1P3SrpS2SKq3eHAtQdvRtKrHpEQGCSBcvDDpUH8uagpfilyx5zTaxkZ+erfquT/bWj6jyN5z1rPxZT0JgCcYTYl7QXg0Bku7fOSq5D0EnjnIsmtj9wCaYzSokewyyw8ogEct0I6sIGdmAiBhQhIejaApy9083w3HUbS6SlVZAKrf8eS3KUGnNLWr0rOeYf+7kXypR3qm6SqBICbmVZJTnb1Fuh5Bv4EPJRklVyVkQTAm5qe25D8YK35k3RJAA6+L1DLRtHrVY/r1+x1Wtn/qJ8wAUnbAjgVgA9O1BQfiNqK5I9rGZH0IADVqgjU8nuN3pp94h8KoErOeYdcfgfgerVa4HXoZ6+qEgBuAn+p//R5d5bodZZmM/46kg+c7dL5rpJ0nfLFPt+Nw7n6ZJLOS6omkvYD8MxqBv6u+L+ch0rSwWAkBAZBQJJfkP/DuaoNHNqfpEvMVJHS9eM0VxGoYqCNUvdE93dF5yLJBbGr5Jx37KxfRtwe8E8d652MugSAm5hKSU8C8IKRzHbyADc9Ua4TVS0xXZJX/7wK6NXA2nIIycfWNhL9ITArAUmHAHj0rNcvcZ1X/a5QM8l/pD1/1yJd5fy/9R+t55J82hLP26RvTQC4kemV5Or1rv5+vhE9AS6J8K0a/jYq61DD9XU6q3fVkLQbgFfVHMQa3XcieWIjWzETAhslIGlHACc0QrQbyapFmSW5ekCLlcxayKr1ES+H3qrkmleC4W5QNyF5SiX9o1abAHDjAeCbAFRJoq34xDyI5Gtr6Jf0GAAH19DdUOf2JN9fy17ZOvqcc09q2Vij162PXPNqSMVYGww7JoZEoORI+5m/YAO/vKXnHFjVsiXpzgCqVQ2o5fd6eqsdgBjpyejqBwEbzWvnZhIAbgCppKsDcCmDsclRJN22qHORdF0A/9m54rYKW6wC/jMAl2xp8dnym7jzAdMHs+1zFGt/rY164fKdULvki3k76LshSQeb1USS9Q+x1us8Y742Sa9idi6SXgOgSq55586eVeEtSbqOb2QNgRY/UqMDPuLtzm+SrNKwvKxuOdBo8abf9TPjHw83DXd3gkNrH6CQ1KosjDl9AoBPOfvUWyQEmhCQdF4AH3BtyiYGgVeQ3L2mLUnnBuCdjrsDuGmjl7iuh1Q7/88pRlfs2ukG+k4keacGdkZlIgHgetMlyVXfvz2qWTyrs5epVRxV0tsA3HUkbHzyy4c+3grgbbWYbIiFpIuW4tBuHdhCTgKwY067tUAdG6VGnvNPd2hE46elH/bPG9nz6ualSys7B4O3blDapquhvZXkPbpStlZPYeLe5GMULwI4R37Mv+2dc08AePYA0Kd+ffp3rHJ/km+o4bykvQG8uIbujnT+FsB7S9D3jj63RiXdH8DrOhrXLGrcqebe6RQyC6pcsyiBEvy5MPxdFtWxwH0PJNnys3QWF8sLnVePXAz/DgC8+jlUeTTJl9RwTtIDAFTJMa/h7wZ0pqf6elASAK4BUur+/RDAlo0eyBpmjiTp06idi6Trl1pfneteQqFXBXwC0du77yHpIrGDEElemdu+oTMOAu9be4u74XhiakAEyhbp0QBattn6AMnbDgWDpPMDuF0JBn1g5CJD8a344d7nVXq3S3KjgQcPbLzzuPMTAJfOS/LfkSUAPGsAeJOSKzbPQzW0a79OskoB0wHlATpI93a0gz7/QAyy0Keky5Wt4JalhFy4/B4kvzm0BzP+jJeApK3KZ86HwVqJV/SvSvJ7rQzOY6cExNuVYNBbxS1qgG7Kxdr5f/8DoEqO+Tzcl7zWlRN8SC8y0iTXahMnyT0s3cty7FIzD9AlEvzm21oc0Djgc07fJ2qWguhyYJJcHNdFcluKfzh9Wu/lJL/Q0nBsTYtA6QLkwxeuLrBF49E9huTQe7CfiaS8HPvgiANB5+A5YG4tx5Os0rN95Pl/a+fh6SSf03pihmovK4BrZkaS88daJTbXfCa8Deitms5F0uMA/Fvnijes0FsZZwZ9JF0DbHQiyZ8xn0C+cU/O+9Te2sTn19cupNvTOGN2SQKSXN7jXwG424YDmBv1FMh4JF6lcQHfajX/lsS1ydtL2SwHYw4IW7USrRYwS3LrN7eAG7ucRNJb+JGsAJ71GZDkorrbTODJeCXJR9QYh6QbAPhsDd2l1tenS9B3HElvOYxeSvV81+Vy/lDfUq1ndN8Di/3lCEjyQQsfXupbnMd7zVpdjVoPTtJV1mwTO82o1sLLdWut+Es6AsBDW7OrYO80kteooHeUKms9iKOEIenXA/mRXpbfV0m6mHXnUiEP0Pl7J5etXa/0nd650wNQWFZXvC3bt3yM5C37diL2h0dAkgvl3nwAnvV66rfm+CVddk15GecPnrMje7Xz/77mUjwd+dqnmt+QdN/2SMU3kdHBleQCx78cneMbd3hLkmfUGI8kn7p1/89FxUWLvd3u7V2Xa/nZoorGdJ8kn9KtUqNrDg7fI+k+15EQOAsBSd8HcJmesRxDcteefWhiXtLFAKwrL+NtyWXKy7jWqbebO5cJ5f+tY3NBkl7sWXnJCmB5BCQ5wXlK3RRcE879jDsXSU8A8MI5FbuLiIvHOuh715DKtcw5joUvl3QhAM5lbNE6a1N+niulEBaexkneWDp7+PBQn+J8VW/9DqaUUysYkrwqdfuyVeyg0G325pHHkqxy2EzSfQC8cR5nBn7tFimV9dcZSgC45kmVNMqE44182F5Gcs8aH0RJ7nd7ygy6fwTg7WV71+Va/jjDPZO+pJyqdIJ76xOVa7leg+Rpkwadwc1FQNK2AP5rrpu6vfj3pddvlRp23bpaV1spL3ObcoDEB0lm6Sh0fZJVerVLegWAh9cddTvtJBP3FNwBcdYA0G1u3AJoCvJlktesMZDN5AH6Ld41+lyuxflmUwqqO8EpycnUTqruS9w27l19GY/d4RGQ5FWnd/boWbXKBT2OaWnT5bvWeZnrysu4Ven68isXpCb5l6UNbkDBhA5HenSnk+w7zaHGNC2kMwHgWQPAZXPbFpqEijfVzAP0du4di+9eOVhXrsWFiCObISDpuQD26QnUXiRf2pPtmB0ggZ7qVa4jcRjJRw0Qy+BcKt2Y1pWXWfeC/3aSd6vh7ATz/04g2Ucd2xrTs7TOBIBnDQCfAWD/pakOR8HOJH3woHORdK9SI+wtUynX0jmkzQeBfW2tvJjk41uPN/aGS0DSwQAe04OHH3ftweSkzk9ekjs+ORj8Bslj59ew+TvK9/wxm79yNFc8g+QzR+NtZUcTAJ41AHTBzil1Tngpyb0qP0NRvyCBsr3jHElvv7WUaicGWw4itrojIKmPDj/eLfgXkt7CjAyQgKSXAXAnmKnIjUjOkr8+lfFuchwJANfDI8kJ+jecyOx/iWSrKvQTQdZ2GJLcJ/jDpetCK+NfINmyp2urccXOggQkuVB5lZzhjbj0OQC3IenqAJGBEpD0ZQBTKZz8TZJj72Xc6ZOSAPDsAeAuAKqUT+l05mZXVi0PcHYXcuWmCJQalK6LeLNGpH5H0oFnJATOJCDJJWCWqUM3D8lPAbhtarHNg6z9taVO4U/bW65m8QkkW7UxrTaILhUnANwATUn+guqrd2uX82tdO5H0AY3IgAmUlcA3N9wOviRJ93yNrDiBxon+J7kTBsm+aw6u+KxvfviSdgbg76QpiA8qXo+kO09FCoEEgBsOAN3v9pMAzj2BJ+VQkn0kd08AXdshSPLn8WkAntWgRueNSTrdIbLiBCR55dmHMWqLDyrsmgMftTF3o1/SYQCq1JLtxsOZtbj+7M2T+3d2XgkAN/IMSdoDwOEzP2LDvfBUktcbrnvxbH0Ckm4L4GgAl6hIxz/EUzrdVxHVtFVLuh+A11ccpevT7UvSpY8iIyHQQ15oLTJ7kHx5LeVj1psAcBOzJ+lFAMZeLuN4ki4VEBkRgbIt5/ZLt67k9tPyg1yJ7MjUStoPQK3SGD8EcE+SHxsZlpV3V5JTh6rUF2wI93CSj2xob1SmEgBuZrok3b90bTjPqGYWcAeO/Uk+e2R+x91CoGwJPwnAAQDO1TGYI0nu1rHOqBshAUmvAfDACq47388dPn5SQXdUNiAgad/ycjDGWOFAkk9ugGm0JsY4qc1hS3IpFZ8MHstx+F8A2IWkT5ZGRk6gFHx1PS73B+1KPkiyS31d+RU9jQlI+giAW3Zo1gHfE0k6sIyMnICk25XDIBceyVB+A+BRJI8aib+9uZkAcEb0krwC6JUYbwmfY8bb+rjsowAenO4cfaCva1PSHQC4Y8M2HVj6FskrdaAnKkZOQNL/ArhcB8NwTT8fHHg+yV92oC8qBkJA0tYAXCx86IsgruDhVedvDATdoN1IADjn9EjygQonTF9rzltrX+6yCq5zNIWDK7VZjVa/pHMC8Natt4aXLWp6rpzIHO2j0Inj5XlatjSGf2wPAvBqkl59iUyQQClV5faVTosamnwFwNNJvnVojg3ZnwSAC8xOaeG1ffkhdpJs1/lZ83r1TQA7kvSHILICBEp+4F281V9qBy6yPbN1VopX4GHZxBAlXR3AIt8bzjH2ipC32d5B0v8/sgIEJO0A4EgAlx/AcN2p5DkAjiHp0+aROQgkAJwD1oYulXRxAPcpSdT/tKS6eW//EYAXeNuF5O/nvTnXT4OAJNerdD7fnQHcHcBlZhzZDiTfN+O1uWyCBCTdEcCJMw7NXSHcws01Uo8i+e0Z78tlEyMgyV1jXCNwHwD+DWwprut3Qnn5OCEvH4ujTwC4OLuz3SnpigC8Muik2e0AbNmh+rWqzgBwIAAXeU5F/UqQx6pW0kUAXLYEgpcu/15oA+NxiaBTxzrO+L08AUkuev8QAJcq31frfhOcw/cDAN8D8EUHfgn4luc9NQ2Szg9gr5KScrGK43M5oQ8AeLdfWEj+rKKtlVGdALDSVJctOp8edlHf65acQTdb32IBk17a/iwAn+r9kKv2k/zDAnpySwiEQAiEQAh0SqAEgvcC4KLiV1viUJEXNE4D8KU1f18k+d1OHY6yMwkkAGz4IJSg8KIALln+nNC/KXFC9en+S8DXcKJiKgRCIARCYGECpWqGV5WdjuJdCP9v/63Ll/8zAJcLchqT/9yX/EckvbsVaUQgAWAj0DETAiEQAiEQAiEQAkMhkABwKDMRP0IgBEIgBEIgBEKgEYEEgI1Ax0wIhEAIhEAIhEAIDIVAAsChzET8CIEQCIEQCIEQCIFGBBIANgIdMyEQAiEQAiEQAiEwFAIJAIcyE/EjBEIgBEIgBEIgBBoRSADYCHTMhEAIhEAIhEAIhMBQCCQAHMpMxI8QCIEQCIEQCIEQaEQgAWAj0DETAiEQAiEQAiEQAkMhkABwKDMRP0IgBEIgBEIgBEKgEYEEgI1Ax0wIhEAIhEAIhEAIDIVAAsChzET8CIEQCIEQCIEQCIFGBBIANgIdMyEQAiEQAiEQAiEwFAIJAIcyE/EjBEIgBEIgBEIgBBoRSADYCHTMhEAIhEAIhEAIhMBQCCQAHMpMxI8QCIEQCIEQCIEQaEQgAWAj0DETAiEQAiEQAiEQAkMhkABwKDMRP0IgBEIgBEIgBEKgEYEEgI1Ax0wIhEAIhEAIhEAIDIVAAsChzET8CIEQCIEQCIEQCIFGBBIANgIdMyEQAiEQAiEQAiEwFAIJAIcyE/EjBEIgBEIgBEIgBBoRSADYCHTMhEAIhEAIhEAIhMBQCCQAHMpMxI8QCIEQCIEQCIEQaEQgAWAj0DETAiEQAiEQAiEQAkMhkABwKDMRP0IgBEIgBEIgBEKgEYEEgI1Ax0wIhEAIhEAIhEAIDIVAAsChzET8CIEQCIEQCIEQCIFGBBIANgIdMyEQAiEQAiEQAiEwFAIJAIcyE/EjBEIgBEIgBEIgBBoRSADYCHTMhEAIhEAIhEAIhMBQCCQAHMpMxI8QCIEQCIEQCIEQaEQgAWAj0DETAiEQAiEQAiEQAkMhkABwKDMRP0IgBEIgBEIgBEKgEYEEgI1Ax0wIhEAIhEAIhEAIDIVAAsChzET8CIEQCIEQCIEQCIFGBBIANgIdMyEQAiEQAiEQAiEwFAIJAIcyE/EjBEIgBEIgBEIgBBoRSADYCHTMhEAIhEAIhEAIhMBQCCQAHMpMxI8QCIEQCIEQCIEQaEQgAWAj0DETAiEQAiEQAiEQAkMhkABwKDMRP0IgBEIgBEIgBEKgEYH/BwlNLcpDDjb/AAAAAElFTkSuQmCC","resources/scriptFont.png":"data:image/png;base64,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"};

/***/ })
/******/ ]);