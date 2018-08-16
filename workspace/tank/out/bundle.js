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
/******/ 	return __webpack_require__(__webpack_require__.s = 49);
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
var timer_1 = __webpack_require__(71);
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
var vertexBuffer_1 = __webpack_require__(55);
var indexBuffer_1 = __webpack_require__(56);
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
var pointLight_1 = __webpack_require__(57);
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
var rectangle_1 = __webpack_require__(72);
exports.Rectangle = rectangle_1.Rectangle;
var ninePatchImage_1 = __webpack_require__(73);
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


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EnemyBulletBh = exports.EnemyBulletBh = function () {
    function EnemyBulletBh(params) {
        _classCallCheck(this, EnemyBulletBh);

        this.cnt = 0;
        this.params = params;
        this.distanceDelta = ~~(Math.random() * 50);
    }

    _createClass(EnemyBulletBh, [{
        key: 'onCreate',
        value: function onCreate() {}
    }, {
        key: 'onUpdate',
        value: function onUpdate() {
            this.cnt++;
            if (this.cnt > this.params.fireDistance + this.distanceDelta) {
                this.explode();
            }
        }
    }, {
        key: 'explode',
        value: function explode() {
            var go = this.gameObject;
            var r = this.game.repository;
            var explosion = r.getArray('GameObjectProto').find(function (it) {
                return it.name === 'explosion';
            }).createGameObject();
            explosion.pos.setXY(go.pos.x - go.width / 2, go.pos.y - go.height / 2);
            this.game.getCurrScene().addGameObject(explosion);
            var anim = explosion.playFrameAnimation('explode', { repeat: false });
            anim.on('loop', function () {
                explosion.kill();
            });
            go.kill();
        }
    }, {
        key: 'damage',
        value: function damage() {}
    }]);

    return EnemyBulletBh;
}();

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CommonBehaviour = exports.CommonBehaviour = function () {
    function CommonBehaviour() {
        _classCallCheck(this, CommonBehaviour);
    }

    _createClass(CommonBehaviour, [{
        key: 'onCreate',
        value: function onCreate() {
            var r = new this.game.__global__.Rectangle(this.game);
            r.color.setRGBA(0, 0, 0, 255);
            r.fillColor.setRGBA(0, 0, 0, 0);
            r.width = 100;
            r.height = 20;
            r.lineWidth = 5;

            var r1 = new this.game.__global__.Rectangle(this.game);
            r1.color.setRGBA(0, 0, 0, 10);
            r1.fillColor.setRGBA(0, 255, 0, 255);
            r1.width = 100;
            r1.height = 20;
            r1.lineWidth = 5;
            r1.appendChild(r);
            this.gameObject.appendChild(r1);
            r1.pos.setXY(0, -100);
            this.live = 100;
            this.liveRect = r1;
            this.isExploding = false;
        }
    }, {
        key: 'damage',
        value: function damage() {
            this.live -= 10;
            if (this.live < 50) this.liveRect.fillColor.setR(155);
            if (this.live < 25) this.liveRect.fillColor.setRGB(255, 0, 0);
            if (this.live < 0) {
                this.live = 0;
                this.explode();
            }
            this.liveRect.width = this.live;
        }
    }, {
        key: '_setUpOneExplosion',
        value: function _setUpOneExplosion(explosion) {
            explosion.pos.setXY(Math.random() * 200, Math.random() * 200);
            if (Math.random() > 0.5) explosion.pos.x = -1 * explosion.pos.x;
            if (Math.random() > 0.5) explosion.pos.y = -1 * explosion.pos.y;
            explosion.setFrameIndex(~~(Math.random() * 100));
        }
    }, {
        key: 'explode',
        value: function explode() {
            var _this = this;

            if (this.isExploding) return;
            this.isExploding = true;
            var r = this.game.repository;
            for (var i = 0; i < 50; i++) {
                var explosion = r.getArray('GameObjectProto').find(function (it) {
                    return it.name === 'fire';
                }).createGameObject();
                this._setUpOneExplosion(explosion);
                (function (explosion) {
                    explosion.frameAnimations[0].on('loop', function () {
                        _this._setUpOneExplosion(explosion);
                    });
                })(explosion);
                explosion.setAnchorToCenter();
                this.gameObject.appendChild(explosion);
            }
            this.gameObject.setTimer(function () {
                _this.gameObject.kill();
            }, 5000);
        }
    }]);

    return CommonBehaviour;
}();

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var game_1 = __webpack_require__(50);
var gameProps_1 = __webpack_require__(112);
var repository_1 = __webpack_require__(113);
if (true && gameProps_1.gameProps.startSceneId === undefined) throw 'start scene not specified';
var game = new game_1.Game();
game.fromJSON(gameProps_1.gameProps);
game.repository.setDescriptions(repository_1.repository);
if (true) {
    game.repository.embeddedResources = __webpack_require__(114).embeddedResources;
}
var startScene = game.repository.getObject(gameProps_1.gameProps.startSceneId, 'Scene');
game.runScene(startScene);

/***/ }),
/* 50 */
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
__webpack_require__(51);
var baseAbstractBehaviour_1 = __webpack_require__(19);
var rendererFactory_1 = __webpack_require__(52);
var repository_1 = __webpack_require__(76);
var mouse_1 = __webpack_require__(30);
var keyboard_1 = __webpack_require__(94);
var gamePad_1 = __webpack_require__(95);
var decorators_1 = __webpack_require__(18);
var commonObject_1 = __webpack_require__(17);
var camera_1 = __webpack_require__(46);
var consts_1 = __webpack_require__(38);
var point2d_1 = __webpack_require__(3);
var lightArray_1 = __webpack_require__(25);
var uiBuilder_1 = __webpack_require__(96);
var colliderEngine_1 = __webpack_require__(97);
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
            var allScripts_1 = __webpack_require__(98);
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
/* 51 */
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
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
//import {HtmlRenderer as Renderer} from './dom/htmlRenderer'
//import {CanvasRenderer as Renderer} from './canvas/canvasRenderer'
var webGlRenderer_1 = __webpack_require__(53);
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
/* 53 */
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
var spriteRectLightDrawer_1 = __webpack_require__(54);
var spriteRectDrawer_1 = __webpack_require__(13);
var tiledSpriteRectDrawer_1 = __webpack_require__(58);
var colorRectDrawer_1 = __webpack_require__(59);
var abstractDrawer_1 = __webpack_require__(6);
var lineDrawer_1 = __webpack_require__(60);
var circleDrawer_1 = __webpack_require__(62);
var frameBuffer_1 = __webpack_require__(28);
var matrixStack_1 = __webpack_require__(64);
var mat4 = __webpack_require__(12);
var matEx = __webpack_require__(1);
var texture_1 = __webpack_require__(29);
var addBlendDrawer_1 = __webpack_require__(65);
var rect_1 = __webpack_require__(0);
var abstractCanvasRenderer_1 = __webpack_require__(69);
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
/* 54 */
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
/* 55 */
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
/* 56 */
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
var line_1 = __webpack_require__(61);
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
var circle_1 = __webpack_require__(63);
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
/* 64 */
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
var abstractBlendDrawer_1 = __webpack_require__(66);
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
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var spriteRectDrawer_1 = __webpack_require__(13);
var shaderProgramUtils_1 = __webpack_require__(5);
var texShaderGenerator_1 = __webpack_require__(10);
var shaderProgram_1 = __webpack_require__(2);
var simpleCopyFilter_1 = __webpack_require__(67);
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
/* 67 */
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
var abstractFilter_1 = __webpack_require__(68);
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
/* 68 */
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
var abstractRenderer_1 = __webpack_require__(70);
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
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var textField_1 = __webpack_require__(16);
var device_1 = __webpack_require__(74);
var size_1 = __webpack_require__(15);
var debugError_1 = __webpack_require__(75);
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
/* 71 */
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
/* 74 */
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
var DebugError = /** @class */function (_super) {
    __extends(DebugError, _super);
    function DebugError(message) {
        return _super.call(this, message) || this;
    }
    return DebugError;
}(Error);
exports.DebugError = DebugError;

/***/ }),
/* 76 */
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
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var frameAnimation_1 = __webpack_require__(78);
exports.FrameAnimation = frameAnimation_1.FrameAnimation;
var spriteSheet_1 = __webpack_require__(79);
exports.SpriteSheet = spriteSheet_1.SpriteSheet;
var gameObjectProto_1 = __webpack_require__(40);
exports.GameObjectProto = gameObjectProto_1.GameObjectProto;
var gameObject_1 = __webpack_require__(80);
exports.GameObject = gameObject_1.GameObject;
var commonBehaviour_1 = __webpack_require__(87);
exports.CommonBehaviour = commonBehaviour_1.CommonBehaviour;
var particleSystem_1 = __webpack_require__(88);
exports.ParticleSystem = particleSystem_1.ParticleSystem;
var scene_1 = __webpack_require__(89);
exports.Scene = scene_1.Scene;
var sound_1 = __webpack_require__(92);
exports.Sound = sound_1.Sound;
var font_1 = __webpack_require__(93);
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
/* 79 */
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
var gameObjectProto_1 = __webpack_require__(40);
var commonBehaviours = __webpack_require__(81);
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
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var draggable_1 = __webpack_require__(82);
exports.Draggable = draggable_1.DraggableBehaviour;
var control4Dir_1 = __webpack_require__(83);
exports.Control4Dir = control4Dir_1.Control4Dir;
var control2Dir_1 = __webpack_require__(85);
exports.Control2Dir = control2Dir_1.Control2Dir;

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
var move4Dir_1 = __webpack_require__(84);
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
var move2Dir_1 = __webpack_require__(86);
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
var noop_1 = __webpack_require__(42);
var baseModel_1 = __webpack_require__(8);
var loadingQueue_1 = __webpack_require__(90);
var tileMap_1 = __webpack_require__(43);
var layer_1 = __webpack_require__(45);
var ambientLight_1 = __webpack_require__(91);
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
/* 90 */
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
/* 94 */
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
/* 95 */
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
/* 96 */
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
/* 97 */
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
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _explosion = __webpack_require__(99);

Object.defineProperty(exports, 'ExplosionBehaviour', {
  enumerable: true,
  get: function get() {
    return _explosion.ExplosionBehaviour;
  }
});

var _fire = __webpack_require__(100);

Object.defineProperty(exports, 'FireBehaviour', {
  enumerable: true,
  get: function get() {
    return _fire.FireBehaviour;
  }
});

var _fire2 = __webpack_require__(101);

Object.defineProperty(exports, 'Fire2Behaviour', {
  enumerable: true,
  get: function get() {
    return _fire2.Fire2Behaviour;
  }
});

var _fireSmoke = __webpack_require__(102);

Object.defineProperty(exports, 'FireSmokeBehaviour', {
  enumerable: true,
  get: function get() {
    return _fireSmoke.FireSmokeBehaviour;
  }
});

var _helicopterBody = __webpack_require__(103);

Object.defineProperty(exports, 'HelicopterBodyBehaviour', {
  enumerable: true,
  get: function get() {
    return _helicopterBody.HelicopterBodyBehaviour;
  }
});

var _helicopterHead = __webpack_require__(104);

Object.defineProperty(exports, 'HelicopterHeadBehaviour', {
  enumerable: true,
  get: function get() {
    return _helicopterHead.HelicopterHeadBehaviour;
  }
});

var _levelComplete = __webpack_require__(105);

Object.defineProperty(exports, 'LevelCompleteBehaviour', {
  enumerable: true,
  get: function get() {
    return _levelComplete.LevelCompleteBehaviour;
  }
});

var _mainScene = __webpack_require__(106);

Object.defineProperty(exports, 'MainSceneBehaviour', {
  enumerable: true,
  get: function get() {
    return _mainScene.MainSceneBehaviour;
  }
});

var _tank = __webpack_require__(110);

Object.defineProperty(exports, 'TankBehaviour', {
  enumerable: true,
  get: function get() {
    return _tank.TankBehaviour;
  }
});

var _tankHead = __webpack_require__(111);

Object.defineProperty(exports, 'TankHeadBehaviour', {
  enumerable: true,
  get: function get() {
    return _tankHead.TankHeadBehaviour;
  }
});

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ExplosionBehaviour = exports.ExplosionBehaviour = function () {
    function ExplosionBehaviour() {
        _classCallCheck(this, ExplosionBehaviour);
    }

    _createClass(ExplosionBehaviour, [{
        key: "onCreate",
        value: function onCreate() {}
    }, {
        key: "onUpdate",
        value: function onUpdate() {}
    }, {
        key: "onDestroy",
        value: function onDestroy() {}
    }]);

    return ExplosionBehaviour;
}();

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FireBehaviour = exports.FireBehaviour = function () {
    function FireBehaviour() {
        _classCallCheck(this, FireBehaviour);
    }

    _createClass(FireBehaviour, [{
        key: "onCreate",
        value: function onCreate() {}
    }, {
        key: "onUpdate",
        value: function onUpdate() {}
    }, {
        key: "onDestroy",
        value: function onDestroy() {}
    }]);

    return FireBehaviour;
}();

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Fire2Behaviour = exports.Fire2Behaviour = function () {
    function Fire2Behaviour() {
        _classCallCheck(this, Fire2Behaviour);
    }

    _createClass(Fire2Behaviour, [{
        key: "onCreate",
        value: function onCreate() {}
    }, {
        key: "onUpdate",
        value: function onUpdate() {}
    }, {
        key: "onDestroy",
        value: function onDestroy() {}
    }]);

    return Fire2Behaviour;
}();

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FireSmokeBehaviour = exports.FireSmokeBehaviour = function () {
    function FireSmokeBehaviour() {
        _classCallCheck(this, FireSmokeBehaviour);
    }

    _createClass(FireSmokeBehaviour, [{
        key: "onCreate",
        value: function onCreate() {}
    }, {
        key: "onUpdate",
        value: function onUpdate() {}
    }, {
        key: "onDestroy",
        value: function onDestroy() {}
    }]);

    return FireSmokeBehaviour;
}();

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HelicopterBodyBehaviour = exports.HelicopterBodyBehaviour = function () {
    function HelicopterBodyBehaviour() {
        _classCallCheck(this, HelicopterBodyBehaviour);
    }

    _createClass(HelicopterBodyBehaviour, [{
        key: "onCreate",
        value: function onCreate() {}
    }, {
        key: "onUpdate",
        value: function onUpdate() {}
    }, {
        key: "onDestroy",
        value: function onDestroy() {}
    }]);

    return HelicopterBodyBehaviour;
}();

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HelicopterHeadBehaviour = exports.HelicopterHeadBehaviour = function () {
    function HelicopterHeadBehaviour() {
        _classCallCheck(this, HelicopterHeadBehaviour);
    }

    _createClass(HelicopterHeadBehaviour, [{
        key: "onCreate",
        value: function onCreate() {}
    }, {
        key: "onUpdate",
        value: function onUpdate() {}
    }, {
        key: "onDestroy",
        value: function onDestroy() {}
    }]);

    return HelicopterHeadBehaviour;
}();

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LevelCompleteBehaviour = exports.LevelCompleteBehaviour = function () {
    function LevelCompleteBehaviour() {
        _classCallCheck(this, LevelCompleteBehaviour);
    }

    _createClass(LevelCompleteBehaviour, [{
        key: "onCreate",
        value: function onCreate() {}
    }, {
        key: "onUpdate",
        value: function onUpdate() {}
    }, {
        key: "onDestroy",
        value: function onDestroy() {}
    }]);

    return LevelCompleteBehaviour;
}();

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MainSceneBehaviour = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _objectCreator = __webpack_require__(107);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PLAYER_TYPE = {
    ENEMY: -1,
    HERO: 1
};

var MainSceneBehaviour = exports.MainSceneBehaviour = function () {
    function MainSceneBehaviour() {
        _classCallCheck(this, MainSceneBehaviour);
    }

    _createClass(MainSceneBehaviour, [{
        key: 'onCreate',
        value: function onCreate() {
            var _this = this;

            this.objectCreator = new _objectCreator.ObjectCreator(this.game);

            var tank = this.objectCreator.createTank(PLAYER_TYPE.ENEMY);
            tank.pos.setXY(200, 400);
            window.t = tank;

            var tank2 = this.objectCreator.createTank(PLAYER_TYPE.HERO);
            tank2.pos.setXY(500, 720);
            window.t2 = tank2;

            this.scene.on('click', function (e) {
                var tank = _this.objectCreator.createTank(PLAYER_TYPE.HERO);
                tank.pos.setXY(~~e.screenX, ~~e.screenY);
                tank.moveToBack();
                window.t3 = tank;
            });

            var hlc = this.objectCreator.createHelicopter();
            hlc.pos.setXY(450, 300);
            window.h = hlc;
        }
    }, {
        key: 'onUpdate',
        value: function onUpdate() {}
    }, {
        key: 'onDestroy',
        value: function onDestroy() {}
    }]);

    return MainSceneBehaviour;
}();

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ObjectCreator = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _enemyTankBh = __webpack_require__(108);

var _enemyHelicopterBh = __webpack_require__(109);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ObjectCreator = exports.ObjectCreator = function () {
    function ObjectCreator(game) {
        _classCallCheck(this, ObjectCreator);

        this.game = game;
    }

    _createClass(ObjectCreator, [{
        key: 'createTank',
        value: function createTank(type) {
            var r = this.game.repository;
            var tank = r.getArray('GameObjectProto').find(function (it) {
                return it.name === 'tank';
            }).createGameObject();
            tank.setAnchorToCenter();
            var tankHead = r.getArray('GameObjectProto').find(function (it) {
                return it.name === 'tankHead';
            }).createGameObject();
            tankHead.setAnchorToCenter();
            tank.head = tankHead;
            var me = type === -1 ? 'enemy' : 'friend';
            tank.groupNames.push(me);

            tankHead.pos.setXY(0, 0);
            tank.pos.setXY(0, 0);
            tank.setIndividualBehaviour(new _enemyTankBh.EnemyTankBh({ type: type, vel: -100, fireFreq: 500, fireVel: 100, fireDistance: 50 }));
            tank.appendChild(tankHead);

            this.game.getCurrScene().addGameObject(tank);

            return tank;
        }
    }, {
        key: 'createHelicopter',
        value: function createHelicopter() {
            var r = this.game.repository;
            var helicopterHead = r.getArray('GameObjectProto').find(function (it) {
                return it.name === 'helicopterHead';
            }).createGameObject();
            var helicopterBody = r.getArray('GameObjectProto').find(function (it) {
                return it.name === 'helicopterBody';
            }).createGameObject();
            helicopterHead.setAnchorToCenter();
            helicopterBody.head = helicopterHead;
            helicopterBody.setAnchorToCenter();
            var me = 'enemy';
            helicopterBody.groupNames.push(me);

            helicopterHead.pos.setXY(0, 0);
            helicopterBody.pos.setXY(0, 0);
            helicopterBody.setIndividualBehaviour(new _enemyHelicopterBh.EnemyHelicopterBh({ vel: -150, fireFreq: 300, fireVel: 380, fireDistance: 50 }));

            helicopterBody.appendChild(helicopterHead);
            this.game.getCurrScene().addGameObject(helicopterBody);

            return helicopterBody;
        }
    }]);

    return ObjectCreator;
}();

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EnemyTankBh = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _EnemyBulletBh = __webpack_require__(47);

var _commonBehaviour = __webpack_require__(48);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EnemyTankBh = exports.EnemyTankBh = function (_CommonBehaviour) {
    _inherits(EnemyTankBh, _CommonBehaviour);

    function EnemyTankBh(params) {
        _classCallCheck(this, EnemyTankBh);

        var _this = _possibleConstructorReturn(this, (EnemyTankBh.__proto__ || Object.getPrototypeOf(EnemyTankBh)).call(this));

        _this.params = params;
        _this.angleVel = 1;
        _this.me = '';
        _this.opponent = '';
        _this.canFire = false;
        return _this;
    }

    _createClass(EnemyTankBh, [{
        key: 'onCreate',
        value: function onCreate() {
            var _this2 = this;

            this.gameObject.setTimer(function () {
                _this2.fire();
            }, this.params.fireFreq);
            if (this.params.type == -1) this.gameObject.velocity.setX(this.params.vel);else this.gameObject.angle = Math.PI;
            this.me = this.params.type == -1 ? 'enemy' : 'friend';
            this.opponent = this.params.type == 1 ? 'enemy' : 'friend';
            _get(EnemyTankBh.prototype.__proto__ || Object.getPrototypeOf(EnemyTankBh.prototype), 'onCreate', this).call(this);
        }
    }, {
        key: 'onUpdate',
        value: function onUpdate(time, delta) {
            var _this3 = this;

            var MathEx = this.game.__global__.MathEx;
            var go = this.gameObject;
            if (go.pos.x < -go.width * 2) go.pos.x = this.game.width + 100;
            var allDist = this.game.getCurrScene().getAllGameObjects().filter(function (go) {
                var bh = go.getIndividualBehaviour();
                if (!bh) return false;
                return bh.me === _this3.opponent;
            }).map(function (go) {
                return { go: go, dist: MathEx.getDistanceSquared(_this3.gameObject.pos, go.pos) };
            });
            this.canFire = false;
            allDist.sort(function (a, b) {
                return a.dist - b.dist;
            });
            if (!allDist[0]) return;
            var closest = allDist[0].dist;
            var isCloseToEnemy = closest < Math.pow(500, 2);
            if (isCloseToEnemy && allDist.length) {
                this.canFire = true;
            }
            var angle = MathEx.getAngle(this.gameObject.pos, allDist[0].go.pos);
            if (this.gameObject.getIndividualBehaviour().me === 'friend') angle -= this.gameObject.angle;
            if (!isCloseToEnemy) angle = 0;
            var headVel = 0.03;
            var dAngle = this.gameObject.head.angle < angle ? headVel : -headVel;
            if (!MathEx.closeTo(this.gameObject.head.angle, angle, 0.1)) this.gameObject.head.angle += dAngle;
        }
    }, {
        key: 'fire',
        value: function fire() {
            if (!this.canFire) return;
            var r = this.game.repository;
            var MathEx = this.game.__global__.MathEx;
            var Point2d = this.game.__global__.Point2d;
            var fireSmoke = r.getArray('GameObjectProto').find(function (it) {
                return it.name == 'fire';
            }).createGameObject();
            fireSmoke.setAnchorToCenter();
            var p = new Point2d(this.gameObject.pos.x, this.gameObject.pos.y);
            fireSmoke.angle = this.gameObject.head.angle + this.gameObject.angle;
            fireSmoke.pos = MathEx.polarToRect(160, fireSmoke.angle, p);
            var fireSmokeVel = 180;
            fireSmoke.velocity.setXY(-this.params.fireVel * Math.cos(fireSmoke.angle), -fireSmokeVel * Math.sin(fireSmoke.angle));
            fireSmoke.setIndividualBehaviour(new _EnemyBulletBh.EnemyBulletBh({ fireDistance: this.params.fireDistance }));
            this.game.getCurrScene().addGameObject(fireSmoke);
            fireSmoke.collideWith.push(this.opponent);
            fireSmoke.on('collide', function (obj) {
                fireSmoke.kill();
                fireSmoke.getIndividualBehaviour().explode();
                obj.getIndividualBehaviour().damage();
            });
        }
    }]);

    return EnemyTankBh;
}(_commonBehaviour.CommonBehaviour);

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EnemyHelicopterBh = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _EnemyBulletBh = __webpack_require__(47);

var _commonBehaviour = __webpack_require__(48);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EnemyHelicopterBh = exports.EnemyHelicopterBh = function (_CommonBehaviour) {
    _inherits(EnemyHelicopterBh, _CommonBehaviour);

    function EnemyHelicopterBh(params) {
        _classCallCheck(this, EnemyHelicopterBh);

        var _this = _possibleConstructorReturn(this, (EnemyHelicopterBh.__proto__ || Object.getPrototypeOf(EnemyHelicopterBh)).call(this));

        _this.angleVel = 1;
        _this.currentSlot = 0;
        _this.params = params;
        return _this;
    }

    _createClass(EnemyHelicopterBh, [{
        key: 'onCreate',
        value: function onCreate() {
            var _this2 = this;

            this.gameObject.setTimer(function () {
                _this2.fire();
            }, this.params.fireFreq);
            this.gameObject.velocity.setX(this.params.vel);
            this.me = 'enemy';
            this.opponent = 'friend';
            _get(EnemyHelicopterBh.prototype.__proto__ || Object.getPrototypeOf(EnemyHelicopterBh.prototype), 'onCreate', this).call(this);
        }
    }, {
        key: 'onUpdate',
        value: function onUpdate(time, delta) {
            var go = this.gameObject;
            if (go.pos.x < -go.width * 2) go.pos.x = this.game.width + 100;
            go.head.angle += 5 * delta / 1000;
        }
    }, {
        key: 'fire',
        value: function fire() {
            var r = this.game.repository;
            var go = this.gameObject;
            var fireSmoke = r.getArray('GameObjectProto').find(function (it) {
                return it.name === 'fire2';
            }).createGameObject();
            this.currentSlot = this.currentSlot === 0 ? 1 : 0;
            var dy = this.currentSlot ? 80 : 0;
            fireSmoke.pos.setXY(go.pos.x - 40, go.pos.y - 60 + dy);
            fireSmoke.velocity.setXY(-this.params.fireVel, 0);
            fireSmoke.setIndividualBehaviour(new _EnemyBulletBh.EnemyBulletBh({ fireDistance: this.params.fireDistance }));
            fireSmoke.groupNames.push(this.me);
            fireSmoke.collideWith.push(this.opponent);
            window.f = fireSmoke;
            fireSmoke.on('collide', function (obj) {
                fireSmoke.getIndividualBehaviour().explode();
                obj.getIndividualBehaviour().damage();
            });
            window.f = fireSmoke;
            this.game.getCurrScene().addGameObject(fireSmoke);
        }
    }]);

    return EnemyHelicopterBh;
}(_commonBehaviour.CommonBehaviour);

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TankBehaviour = exports.TankBehaviour = function () {
    function TankBehaviour() {
        _classCallCheck(this, TankBehaviour);
    }

    _createClass(TankBehaviour, [{
        key: "onCreate",
        value: function onCreate() {}
    }, {
        key: "onUpdate",
        value: function onUpdate() {}
    }, {
        key: "onDestroy",
        value: function onDestroy() {}
    }]);

    return TankBehaviour;
}();

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TankHeadBehaviour = exports.TankHeadBehaviour = function () {
    function TankHeadBehaviour() {
        _classCallCheck(this, TankHeadBehaviour);
    }

    _createClass(TankHeadBehaviour, [{
        key: "onCreate",
        value: function onCreate() {}
    }, {
        key: "onUpdate",
        value: function onUpdate() {}
    }, {
        key: "onDestroy",
        value: function onDestroy() {}
    }]);

    return TankHeadBehaviour;
}();

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
exports.gameProps = {
    "width": 1200,
    "height": 800,
    "scaleStrategy": 1,
    "startSceneId": 2,
    "gravityConstant": 0,
    "preloadingSceneId": 2
};

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
exports.repository = {
    "Scene": [{
        "id": 2,
        "name": "mainScene",
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
        "useBG": true,
        "colorBG": {
            "r": 245,
            "g": 253,
            "b": 242
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
                "width": 1200,
                "height": 800,
                "gravityConstant": 0,
                "scaleStrategy": 1,
                "startSceneId": 2,
                "preloadingSceneId": 2
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
        "id": 29,
        "name": "levelComplete",
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
            "id": 31
        }],
        "colorBG": {
            "r": 22,
            "g": 30,
            "b": 67,
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
                "width": 1200,
                "height": 800,
                "gravityConstant": 0,
                "scaleStrategy": 1,
                "startSceneId": 2,
                "preloadingSceneId": 2
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
    }, {
        "id": 31,
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
        "type": "Layer",
        "children": [{
            "type": "TextField",
            "id": 32
        }]
    }],
    "SpriteSheet": [{
        "id": 3,
        "name": "tank",
        "width": 228,
        "height": 148,
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
            "main": "resources/tank.png"
        },
        "type": "SpriteSheet",
        "frameRect": {
            "x": {
                "x": {
                    "x": {
                        "x": {
                            "x": 0,
                            "y": 0,
                            "width": 0,
                            "height": 0
                        }
                    }
                }
            }
        }
    }, {
        "id": 7,
        "name": "tankHead",
        "width": 228,
        "height": 148,
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
            "main": "resources/tankHead.png"
        },
        "type": "SpriteSheet",
        "frameRect": {
            "x": {
                "x": {
                    "x": 0,
                    "y": 0,
                    "width": 0,
                    "height": 0
                }
            }
        }
    }, {
        "id": 13,
        "name": "helicopterBody",
        "width": 400,
        "height": 246,
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
            "main": "resources/helicopterBody.png"
        },
        "type": "SpriteSheet",
        "frameRect": {
            "x": {
                "x": {
                    "x": {
                        "x": 0,
                        "y": 0,
                        "width": 0,
                        "height": 0
                    }
                }
            }
        }
    }, {
        "id": 14,
        "name": "helicopterHead",
        "width": 400,
        "height": 246,
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
            "main": "resources/helicopterHead.png"
        },
        "type": "SpriteSheet",
        "frameRect": {
            "x": {
                "x": {
                    "x": {
                        "x": {
                            "x": {
                                "x": {
                                    "x": {
                                        "x": 0,
                                        "y": 0,
                                        "width": 0,
                                        "height": 0
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }, {
        "id": 17,
        "name": "fireSmoke",
        "width": 59,
        "height": 54,
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
            "main": "resources/fireSmoke.png"
        },
        "type": "SpriteSheet",
        "frameRect": {
            "x": {
                "x": {
                    "x": {
                        "x": {
                            "x": {
                                "x": {
                                    "x": {
                                        "x": {
                                            "x": 0,
                                            "y": 0,
                                            "width": 0,
                                            "height": 0
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }, {
        "name": "explosion",
        "width": 250,
        "height": 125,
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
            "main": "resources/explosion.png"
        },
        "type": "SpriteSheet",
        "numOfFramesH": 8,
        "numOfFramesV": 4,
        "frameRect": {
            "x": 0,
            "y": 0,
            "width": 0,
            "height": 0
        },
        "id": 19
    }, {
        "name": "fire",
        "width": 256,
        "height": 256,
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
            "main": "resources/fire.png"
        },
        "type": "SpriteSheet",
        "numOfFramesH": 4,
        "numOfFramesV": 4,
        "frameRect": {
            "x": 0,
            "y": 0,
            "width": 0,
            "height": 0
        },
        "id": 23
    }, {
        "name": "fire2",
        "width": 320,
        "height": 320,
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
            "main": "resources/fire2.png"
        },
        "type": "SpriteSheet",
        "numOfFramesH": 5,
        "numOfFramesV": 5,
        "frameRect": {
            "x": 0,
            "y": 0,
            "width": 0,
            "height": 0
        },
        "id": 26
    }],
    "GameObjectProto": [{
        "id": 4,
        "name": "tank",
        "width": 228,
        "height": 148,
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
        "rigid": true,
        "type": "GameObjectProto",
        "spriteSheet": {
            "id": 3,
            "type": "SpriteSheet"
        },
        "commonBehaviour": [{
            "type": "CommonBehaviour",
            "id": 22
        }],
        "groupNames": ["tank"],
        "collideWith": ["tank"],
        "shaderMaterial": {
            "shininess": 10
        },
        "velocity": {
            "x": 0,
            "y": 0
        }
    }, {
        "name": "tankHead",
        "width": 148,
        "height": 228,
        "pos": {
            "x": 0,
            "y": 0
        },
        "scale": {
            "x": 1,
            "y": 1
        },
        "type": "GameObjectProto",
        "spriteSheet": {
            "id": 7,
            "type": "SpriteSheet"
        },
        "shaderMaterial": {
            "shininess": 10
        },
        "id": 8
    }, {
        "name": "helicopterHead",
        "width": 246,
        "height": 400,
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
            "id": 14,
            "type": "SpriteSheet"
        },
        "shaderMaterial": {
            "shininess": 10
        },
        "id": 15
    }, {
        "id": 16,
        "name": "helicopterBody",
        "width": 400,
        "height": 246,
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
        "rigid": true,
        "type": "GameObjectProto",
        "spriteSheet": {
            "id": 13,
            "type": "SpriteSheet"
        },
        "groupNames": ["helicopter"],
        "shaderMaterial": {
            "shininess": 10
        },
        "velocity": {
            "x": 0,
            "y": 0
        }
    }, {
        "id": 18,
        "name": "fireSmoke",
        "width": 59,
        "height": 54,
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
        "rigid": true,
        "type": "GameObjectProto",
        "spriteSheet": {
            "id": 17,
            "type": "SpriteSheet"
        },
        "shaderMaterial": {
            "shininess": 10
        },
        "velocity": {
            "x": 0,
            "y": 0
        }
    }, {
        "id": 20,
        "name": "explosion",
        "width": 31,
        "height": 31,
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
            "id": 19,
            "type": "SpriteSheet"
        },
        "frameAnimations": [{
            "type": "FrameAnimation",
            "id": 21
        }],
        "shaderMaterial": {
            "shininess": 10
        },
        "velocity": {
            "x": 0,
            "y": 0
        }
    }, {
        "id": 24,
        "name": "fire",
        "width": 64,
        "height": 64,
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
        "rigid": true,
        "type": "GameObjectProto",
        "spriteSheet": {
            "id": 23,
            "type": "SpriteSheet"
        },
        "frameAnimations": [{
            "type": "FrameAnimation",
            "id": 25
        }],
        "startFrameAnimationName": "explode",
        "shaderMaterial": {
            "shininess": 10
        },
        "velocity": {
            "x": 0,
            "y": 0
        }
    }, {
        "id": 27,
        "name": "fire2",
        "width": 64,
        "height": 64,
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
        "rigid": true,
        "type": "GameObjectProto",
        "spriteSheet": {
            "id": 26,
            "type": "SpriteSheet"
        },
        "frameAnimations": [{
            "type": "FrameAnimation",
            "id": 28
        }],
        "startFrameAnimationName": "explode",
        "shaderMaterial": {
            "shininess": 10
        },
        "velocity": {
            "x": 0,
            "y": 0
        }
    }],
    "GameObject": [{
        "id": 10,
        "name": "tank",
        "pos": {
            "x": -127,
            "y": -203
        },
        "scale": {
            "x": 1,
            "y": 1
        },
        "layerId": 2,
        "type": "GameObject",
        "gameObjectProto": {
            "id": 4,
            "type": "GameObjectProto"
        }
    }, {
        "id": 11,
        "name": "tankHead",
        "pos": {
            "x": -135,
            "y": -210
        },
        "scale": {
            "x": 1,
            "y": 1
        },
        "layerId": 2,
        "type": "GameObject",
        "gameObjectProto": {
            "id": 8,
            "type": "GameObjectProto"
        }
    }],
    "Font": [{
        "id": 12,
        "name": "default",
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
            "main": "resources/default.png"
        },
        "type": "Font",
        "fontSize": 31,
        "fontFamily": "Blackadder ITC",
        "fontContext": {
            "symbols": {
                "0": {
                    "x": 4,
                    "y": 52,
                    "width": 11,
                    "height": 40
                },
                "1": {
                    "x": 23,
                    "y": 52,
                    "width": 7,
                    "height": 40
                },
                "2": {
                    "x": 39,
                    "y": 52,
                    "width": 10,
                    "height": 40
                },
                "3": {
                    "x": 57,
                    "y": 52,
                    "width": 10,
                    "height": 40
                },
                "4": {
                    "x": 76,
                    "y": 52,
                    "width": 12,
                    "height": 40
                },
                "5": {
                    "x": 96,
                    "y": 52,
                    "width": 11,
                    "height": 40
                },
                "6": {
                    "x": 115,
                    "y": 52,
                    "width": 11,
                    "height": 40
                },
                "7": {
                    "x": 134,
                    "y": 52,
                    "width": 11,
                    "height": 40
                },
                "8": {
                    "x": 154,
                    "y": 52,
                    "width": 11,
                    "height": 40
                },
                "9": {
                    "x": 173,
                    "y": 52,
                    "width": 11,
                    "height": 40
                },
                " ": {
                    "x": 4,
                    "y": 4,
                    "width": 4,
                    "height": 40
                },
                "!": {
                    "x": 16,
                    "y": 4,
                    "width": 10,
                    "height": 40
                },
                "\"": {
                    "x": 35,
                    "y": 4,
                    "width": 10,
                    "height": 40
                },
                "#": {
                    "x": 53,
                    "y": 4,
                    "width": 21,
                    "height": 40
                },
                "$": {
                    "x": 82,
                    "y": 4,
                    "width": 13,
                    "height": 40
                },
                "%": {
                    "x": 104,
                    "y": 4,
                    "width": 13,
                    "height": 40
                },
                "&": {
                    "x": 126,
                    "y": 4,
                    "width": 18,
                    "height": 40
                },
                "'": {
                    "x": 152,
                    "y": 4,
                    "width": 5,
                    "height": 40
                },
                "(": {
                    "x": 165,
                    "y": 4,
                    "width": 12,
                    "height": 40
                },
                ")": {
                    "x": 185,
                    "y": 4,
                    "width": 12,
                    "height": 40
                },
                "*": {
                    "x": 205,
                    "y": 4,
                    "width": 11,
                    "height": 40
                },
                "+": {
                    "x": 225,
                    "y": 4,
                    "width": 15,
                    "height": 40
                },
                ",": {
                    "x": 248,
                    "y": 4,
                    "width": 6,
                    "height": 40
                },
                "-": {
                    "x": 263,
                    "y": 4,
                    "width": 9,
                    "height": 40
                },
                ".": {
                    "x": 281,
                    "y": 4,
                    "width": 6,
                    "height": 40
                },
                "/": {
                    "x": 296,
                    "y": 4,
                    "width": 11,
                    "height": 40
                },
                ":": {
                    "x": 193,
                    "y": 52,
                    "width": 7,
                    "height": 40
                },
                ";": {
                    "x": 208,
                    "y": 52,
                    "width": 7,
                    "height": 40
                },
                "<": {
                    "x": 223,
                    "y": 52,
                    "width": 7,
                    "height": 40
                },
                "=": {
                    "x": 239,
                    "y": 52,
                    "width": 15,
                    "height": 40
                },
                ">": {
                    "x": 262,
                    "y": 52,
                    "width": 7,
                    "height": 40
                },
                "?": {
                    "x": 278,
                    "y": 52,
                    "width": 15,
                    "height": 40
                },
                "@": {
                    "x": 4,
                    "y": 100,
                    "width": 24,
                    "height": 40
                },
                "A": {
                    "x": 36,
                    "y": 100,
                    "width": 26,
                    "height": 40
                },
                "B": {
                    "x": 70,
                    "y": 100,
                    "width": 26,
                    "height": 40
                },
                "C": {
                    "x": 104,
                    "y": 100,
                    "width": 24,
                    "height": 40
                },
                "D": {
                    "x": 136,
                    "y": 100,
                    "width": 25,
                    "height": 40
                },
                "E": {
                    "x": 170,
                    "y": 100,
                    "width": 23,
                    "height": 40
                },
                "F": {
                    "x": 201,
                    "y": 100,
                    "width": 18,
                    "height": 40
                },
                "G": {
                    "x": 228,
                    "y": 100,
                    "width": 25,
                    "height": 40
                },
                "H": {
                    "x": 261,
                    "y": 100,
                    "width": 27,
                    "height": 40
                },
                "I": {
                    "x": 297,
                    "y": 100,
                    "width": 15,
                    "height": 40
                },
                "J": {
                    "x": 4,
                    "y": 148,
                    "width": 19,
                    "height": 40
                },
                "K": {
                    "x": 31,
                    "y": 148,
                    "width": 32,
                    "height": 40
                },
                "L": {
                    "x": 72,
                    "y": 148,
                    "width": 21,
                    "height": 40
                },
                "M": {
                    "x": 101,
                    "y": 148,
                    "width": 36,
                    "height": 40
                },
                "N": {
                    "x": 146,
                    "y": 148,
                    "width": 26,
                    "height": 40
                },
                "O": {
                    "x": 180,
                    "y": 148,
                    "width": 24,
                    "height": 40
                },
                "P": {
                    "x": 212,
                    "y": 148,
                    "width": 21,
                    "height": 40
                },
                "Q": {
                    "x": 242,
                    "y": 148,
                    "width": 29,
                    "height": 40
                },
                "R": {
                    "x": 279,
                    "y": 148,
                    "width": 26,
                    "height": 40
                },
                "S": {
                    "x": 4,
                    "y": 196,
                    "width": 22,
                    "height": 40
                },
                "T": {
                    "x": 34,
                    "y": 196,
                    "width": 16,
                    "height": 40
                },
                "U": {
                    "x": 59,
                    "y": 196,
                    "width": 30,
                    "height": 40
                },
                "V": {
                    "x": 98,
                    "y": 196,
                    "width": 26,
                    "height": 40
                },
                "W": {
                    "x": 132,
                    "y": 196,
                    "width": 32,
                    "height": 40
                },
                "X": {
                    "x": 173,
                    "y": 196,
                    "width": 29,
                    "height": 40
                },
                "Y": {
                    "x": 211,
                    "y": 196,
                    "width": 23,
                    "height": 40
                },
                "Z": {
                    "x": 243,
                    "y": 196,
                    "width": 26,
                    "height": 40
                },
                "[": {
                    "x": 278,
                    "y": 196,
                    "width": 12,
                    "height": 40
                },
                "\\": {
                    "x": 298,
                    "y": 196,
                    "width": 11,
                    "height": 40
                },
                "]": {
                    "x": 4,
                    "y": 244,
                    "width": 12,
                    "height": 40
                },
                "^": {
                    "x": 24,
                    "y": 244,
                    "width": 15,
                    "height": 40
                },
                "_": {
                    "x": 47,
                    "y": 244,
                    "width": 15,
                    "height": 40
                },
                "`": {
                    "x": 70,
                    "y": 244,
                    "width": 15,
                    "height": 40
                },
                "a": {
                    "x": 93,
                    "y": 244,
                    "width": 11,
                    "height": 40
                },
                "b": {
                    "x": 112,
                    "y": 244,
                    "width": 11,
                    "height": 40
                },
                "c": {
                    "x": 131,
                    "y": 244,
                    "width": 9,
                    "height": 40
                },
                "d": {
                    "x": 149,
                    "y": 244,
                    "width": 12,
                    "height": 40
                },
                "e": {
                    "x": 170,
                    "y": 244,
                    "width": 9,
                    "height": 40
                },
                "f": {
                    "x": 187,
                    "y": 244,
                    "width": 9,
                    "height": 40
                },
                "g": {
                    "x": 205,
                    "y": 244,
                    "width": 11,
                    "height": 40
                },
                "h": {
                    "x": 224,
                    "y": 244,
                    "width": 12,
                    "height": 40
                },
                "i": {
                    "x": 244,
                    "y": 244,
                    "width": 7,
                    "height": 40
                },
                "j": {
                    "x": 260,
                    "y": 244,
                    "width": 7,
                    "height": 40
                },
                "k": {
                    "x": 275,
                    "y": 244,
                    "width": 12,
                    "height": 40
                },
                "l": {
                    "x": 295,
                    "y": 244,
                    "width": 7,
                    "height": 40
                },
                "m": {
                    "x": 4,
                    "y": 292,
                    "width": 16,
                    "height": 40
                },
                "n": {
                    "x": 28,
                    "y": 292,
                    "width": 12,
                    "height": 40
                },
                "o": {
                    "x": 49,
                    "y": 292,
                    "width": 10,
                    "height": 40
                },
                "p": {
                    "x": 67,
                    "y": 292,
                    "width": 13,
                    "height": 40
                },
                "q": {
                    "x": 89,
                    "y": 292,
                    "width": 10,
                    "height": 40
                },
                "r": {
                    "x": 108,
                    "y": 292,
                    "width": 9,
                    "height": 40
                },
                "s": {
                    "x": 125,
                    "y": 292,
                    "width": 9,
                    "height": 40
                },
                "t": {
                    "x": 143,
                    "y": 292,
                    "width": 8,
                    "height": 40
                },
                "u": {
                    "x": 160,
                    "y": 292,
                    "width": 14,
                    "height": 40
                },
                "v": {
                    "x": 182,
                    "y": 292,
                    "width": 11,
                    "height": 40
                },
                "w": {
                    "x": 201,
                    "y": 292,
                    "width": 15,
                    "height": 40
                },
                "x": {
                    "x": 225,
                    "y": 292,
                    "width": 13,
                    "height": 40
                },
                "y": {
                    "x": 246,
                    "y": 292,
                    "width": 13,
                    "height": 40
                },
                "z": {
                    "x": 268,
                    "y": 292,
                    "width": 12,
                    "height": 40
                },
                "{": {
                    "x": 288,
                    "y": 292,
                    "width": 12,
                    "height": 40
                },
                "|": {
                    "x": 4,
                    "y": 340,
                    "width": 15,
                    "height": 40
                },
                "}": {
                    "x": 27,
                    "y": 340,
                    "width": 12,
                    "height": 40
                },
                "~": {
                    "x": 47,
                    "y": 340,
                    "width": 25,
                    "height": 40
                },
                "": {
                    "x": 80,
                    "y": 340,
                    "width": 15,
                    "height": 40
                },
                "": {
                    "x": 104,
                    "y": 340,
                    "width": 0,
                    "height": 40
                },
                "": {
                    "x": 112,
                    "y": 340,
                    "width": 0,
                    "height": 40
                },
                "": {
                    "x": 120,
                    "y": 340,
                    "width": 15,
                    "height": 40
                },
                "": {
                    "x": 143,
                    "y": 340,
                    "width": 15,
                    "height": 40
                },
                "": {
                    "x": 167,
                    "y": 340,
                    "width": 15,
                    "height": 40
                },
                "": {
                    "x": 190,
                    "y": 340,
                    "width": 24,
                    "height": 40
                },
                "": {
                    "x": 223,
                    "y": 340,
                    "width": 15,
                    "height": 40
                },
                "": {
                    "x": 246,
                    "y": 340,
                    "width": 15,
                    "height": 40
                },
                "": {
                    "x": 270,
                    "y": 340,
                    "width": 11,
                    "height": 40
                },
                "": {
                    "x": 289,
                    "y": 340,
                    "width": 24,
                    "height": 40
                },
                "": {
                    "x": 4,
                    "y": 388,
                    "width": 14,
                    "height": 40
                },
                "": {
                    "x": 26,
                    "y": 388,
                    "width": 15,
                    "height": 40
                },
                "": {
                    "x": 50,
                    "y": 388,
                    "width": 30,
                    "height": 40
                },
                "": {
                    "x": 89,
                    "y": 388,
                    "width": 0,
                    "height": 40
                },
                "": {
                    "x": 97,
                    "y": 388,
                    "width": 0,
                    "height": 40
                },
                "": {
                    "x": 105,
                    "y": 388,
                    "width": 0,
                    "height": 40
                },
                "": {
                    "x": 113,
                    "y": 388,
                    "width": 0,
                    "height": 40
                },
                "": {
                    "x": 121,
                    "y": 388,
                    "width": 6,
                    "height": 40
                },
                "": {
                    "x": 135,
                    "y": 388,
                    "width": 6,
                    "height": 40
                },
                "": {
                    "x": 149,
                    "y": 388,
                    "width": 13,
                    "height": 40
                },
                "": {
                    "x": 170,
                    "y": 388,
                    "width": 13,
                    "height": 40
                },
                "": {
                    "x": 191,
                    "y": 388,
                    "width": 0,
                    "height": 40
                },
                "А": {
                    "x": 199,
                    "y": 388,
                    "width": 22,
                    "height": 40
                },
                "Б": {
                    "x": 230,
                    "y": 388,
                    "width": 17,
                    "height": 40
                },
                "В": {
                    "x": 256,
                    "y": 388,
                    "width": 20,
                    "height": 40
                },
                "Г": {
                    "x": 284,
                    "y": 388,
                    "width": 17,
                    "height": 40
                },
                "Д": {
                    "x": 4,
                    "y": 436,
                    "width": 21,
                    "height": 40
                },
                "Е": {
                    "x": 33,
                    "y": 436,
                    "width": 18,
                    "height": 40
                },
                "Ж": {
                    "x": 60,
                    "y": 436,
                    "width": 27,
                    "height": 40
                },
                "З": {
                    "x": 95,
                    "y": 436,
                    "width": 15,
                    "height": 40
                },
                "И": {
                    "x": 119,
                    "y": 436,
                    "width": 22,
                    "height": 40
                },
                "Й": {
                    "x": 149,
                    "y": 436,
                    "width": 22,
                    "height": 40
                },
                "К": {
                    "x": 180,
                    "y": 436,
                    "width": 20,
                    "height": 40
                },
                "Л": {
                    "x": 208,
                    "y": 436,
                    "width": 21,
                    "height": 40
                },
                "М": {
                    "x": 237,
                    "y": 436,
                    "width": 27,
                    "height": 40
                },
                "Н": {
                    "x": 273,
                    "y": 436,
                    "width": 22,
                    "height": 40
                },
                "О": {
                    "x": 4,
                    "y": 484,
                    "width": 22,
                    "height": 40
                },
                "П": {
                    "x": 34,
                    "y": 484,
                    "width": 22,
                    "height": 40
                },
                "Р": {
                    "x": 64,
                    "y": 484,
                    "width": 17,
                    "height": 40
                },
                "С": {
                    "x": 90,
                    "y": 484,
                    "width": 20,
                    "height": 40
                },
                "Т": {
                    "x": 118,
                    "y": 484,
                    "width": 18,
                    "height": 40
                },
                "У": {
                    "x": 145,
                    "y": 484,
                    "width": 21,
                    "height": 40
                },
                "Ф": {
                    "x": 175,
                    "y": 484,
                    "width": 24,
                    "height": 40
                },
                "Х": {
                    "x": 208,
                    "y": 484,
                    "width": 22,
                    "height": 40
                },
                "Ц": {
                    "x": 238,
                    "y": 484,
                    "width": 22,
                    "height": 40
                },
                "Ч": {
                    "x": 268,
                    "y": 484,
                    "width": 20,
                    "height": 40
                },
                "Ш": {
                    "x": 4,
                    "y": 532,
                    "width": 31,
                    "height": 40
                },
                "Щ": {
                    "x": 43,
                    "y": 532,
                    "width": 31,
                    "height": 40
                },
                "Ъ": {
                    "x": 82,
                    "y": 532,
                    "width": 21,
                    "height": 40
                },
                "Ы": {
                    "x": 112,
                    "y": 532,
                    "width": 27,
                    "height": 40
                },
                "Ь": {
                    "x": 147,
                    "y": 532,
                    "width": 17,
                    "height": 40
                },
                "Э": {
                    "x": 173,
                    "y": 532,
                    "width": 20,
                    "height": 40
                },
                "Ю": {
                    "x": 201,
                    "y": 532,
                    "width": 31,
                    "height": 40
                },
                "Я": {
                    "x": 241,
                    "y": 532,
                    "width": 20,
                    "height": 40
                },
                "а": {
                    "x": 270,
                    "y": 532,
                    "width": 13,
                    "height": 40
                },
                "б": {
                    "x": 292,
                    "y": 532,
                    "width": 15,
                    "height": 40
                },
                "в": {
                    "x": 4,
                    "y": 580,
                    "width": 14,
                    "height": 40
                },
                "г": {
                    "x": 26,
                    "y": 580,
                    "width": 12,
                    "height": 40
                },
                "д": {
                    "x": 47,
                    "y": 580,
                    "width": 15,
                    "height": 40
                },
                "е": {
                    "x": 71,
                    "y": 580,
                    "width": 13,
                    "height": 40
                },
                "ж": {
                    "x": 92,
                    "y": 580,
                    "width": 21,
                    "height": 40
                },
                "з": {
                    "x": 122,
                    "y": 580,
                    "width": 12,
                    "height": 40
                },
                "и": {
                    "x": 142,
                    "y": 580,
                    "width": 16,
                    "height": 40
                },
                "й": {
                    "x": 167,
                    "y": 580,
                    "width": 16,
                    "height": 40
                },
                "к": {
                    "x": 191,
                    "y": 580,
                    "width": 15,
                    "height": 40
                },
                "л": {
                    "x": 214,
                    "y": 580,
                    "width": 15,
                    "height": 40
                },
                "м": {
                    "x": 238,
                    "y": 580,
                    "width": 19,
                    "height": 40
                },
                "н": {
                    "x": 265,
                    "y": 580,
                    "width": 16,
                    "height": 40
                },
                "о": {
                    "x": 290,
                    "y": 580,
                    "width": 15,
                    "height": 40
                },
                "п": {
                    "x": 4,
                    "y": 628,
                    "width": 16,
                    "height": 40
                },
                "р": {
                    "x": 28,
                    "y": 628,
                    "width": 15,
                    "height": 40
                },
                "с": {
                    "x": 52,
                    "y": 628,
                    "width": 13,
                    "height": 40
                },
                "т": {
                    "x": 73,
                    "y": 628,
                    "width": 13,
                    "height": 40
                },
                "у": {
                    "x": 95,
                    "y": 628,
                    "width": 15,
                    "height": 40
                },
                "ф": {
                    "x": 118,
                    "y": 628,
                    "width": 20,
                    "height": 40
                },
                "х": {
                    "x": 146,
                    "y": 628,
                    "width": 15,
                    "height": 40
                },
                "ц": {
                    "x": 170,
                    "y": 628,
                    "width": 16,
                    "height": 40
                },
                "ч": {
                    "x": 195,
                    "y": 628,
                    "width": 15,
                    "height": 40
                },
                "ш": {
                    "x": 218,
                    "y": 628,
                    "width": 23,
                    "height": 40
                },
                "щ": {
                    "x": 250,
                    "y": 628,
                    "width": 23,
                    "height": 40
                },
                "ъ": {
                    "x": 282,
                    "y": 628,
                    "width": 16,
                    "height": 40
                },
                "ы": {
                    "x": 4,
                    "y": 676,
                    "width": 20,
                    "height": 40
                },
                "ь": {
                    "x": 32,
                    "y": 676,
                    "width": 14,
                    "height": 40
                },
                "э": {
                    "x": 54,
                    "y": 676,
                    "width": 13,
                    "height": 40
                },
                "ю": {
                    "x": 76,
                    "y": 676,
                    "width": 23,
                    "height": 40
                },
                "я": {
                    "x": 107,
                    "y": 676,
                    "width": 14,
                    "height": 40
                },
                "ѐ": {
                    "x": 129,
                    "y": 676,
                    "width": 13,
                    "height": 40
                },
                "ё": {
                    "x": 151,
                    "y": 676,
                    "width": 13,
                    "height": 40
                },
                "ђ": {
                    "x": 173,
                    "y": 676,
                    "width": 14,
                    "height": 40
                },
                "ѓ": {
                    "x": 196,
                    "y": 676,
                    "width": 12,
                    "height": 40
                },
                "є": {
                    "x": 216,
                    "y": 676,
                    "width": 13,
                    "height": 40
                },
                "ѕ": {
                    "x": 238,
                    "y": 676,
                    "width": 12,
                    "height": 40
                },
                "і": {
                    "x": 258,
                    "y": 676,
                    "width": 8,
                    "height": 40
                },
                "ї": {
                    "x": 274,
                    "y": 676,
                    "width": 8,
                    "height": 40
                },
                "ј": {
                    "x": 291,
                    "y": 676,
                    "width": 8,
                    "height": 40
                },
                "љ": {
                    "x": 4,
                    "y": 724,
                    "width": 22,
                    "height": 40
                },
                "њ": {
                    "x": 34,
                    "y": 724,
                    "width": 22,
                    "height": 40
                },
                "ћ": {
                    "x": 64,
                    "y": 724,
                    "width": 15,
                    "height": 40
                }
            },
            "width": 320,
            "height": 768
        }
    }],
    "FrameAnimation": [{
        "id": 21,
        "name": "explode",
        "type": "FrameAnimation",
        "frames": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
        "duration": 2000
    }, {
        "name": "explode",
        "type": "FrameAnimation",
        "frames": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
        "duration": 800,
        "id": 25
    }, {
        "name": "explode",
        "type": "FrameAnimation",
        "frames": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
        "id": 28
    }],
    "CommonBehaviour": [{
        "name": "Draggable",
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
        "type": "CommonBehaviour",
        "id": 22
    }],
    "TextField": [{
        "name": "textField1",
        "pos": {
            "x": 375,
            "y": 156
        },
        "scale": {
            "x": 1,
            "y": 1
        },
        "anchor": {
            "x": 0,
            "y": 0
        },
        "layerId": 2,
        "drawingRect": {
            "x": 0,
            "y": 0,
            "width": 0,
            "height": 0
        },
        "type": "TextField",
        "text": "textField1",
        "font": {
            "id": 12,
            "type": "Font"
        },
        "id": 30
    }, {
        "id": 32,
        "name": "txtInfo",
        "pos": {
            "x": 399,
            "y": 175
        },
        "scale": {
            "x": 1,
            "y": 1
        },
        "anchor": {
            "x": 0,
            "y": 0
        },
        "layerId": 31,
        "drawingRect": {
            "x": {
                "x": 0,
                "y": 0,
                "width": 0,
                "height": 0
            }
        },
        "type": "TextField",
        "text": "textField2",
        "font": {
            "id": 12,
            "type": "Font"
        }
    }]
};

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.embeddedResources={"resources/default.png":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUAAAAMACAYAAABVV77vAAAgAElEQVR4XuzdCdh/Tzk/8PvPH8m+FQpRoajIGmXJVtFCIZLKmiQUQohS2SIqUUq2bBFCVCKKkEjIkkLJUta/tcT/ev2aO/M7v8/nc2bOOZ/neb7PM3Ndz/VdnnPOzNwz877f9zIz/ydGGRIYEhgSuKAS+D8XtN+j20MCQwJDAjEAcEyCIYEhgQsrgQGAF3boR8eHBIYEBgCOOTAkMCRwYSUwAPDCDv3o+JDAkMAAwDEHhgSGBC6sBAYAXtihHx2fSOALI+KOEfHtEfHdEfGqIaHzL4EBgOd/jC9iDz86Ih4cEW8bEZ8WEY9vEMIHR8T3RMSfRMSnRsRfNbwzHrnEJTAA8BIfwNH8y0ng/0bER0XEgyLiehHx0xHx+RHxwkY5fWhEPC0iPi8iHtb4znjsEpbAAMBLePBG0y8ngRtGxAMi4mYR8axiyv5gRPxXh5yuHhGPi4gnFRDteHU8esYk8KYR8Q1F+X3jPpfGpQCAHxcRL4+IX46I146IT4mItykT/J/PmNBHcw5L4HUj4rMj4toR8WUR8a8bCew6xW/31hFx34j4oYj4zwXffpOI+K7CAr8jIv5nwTe8ct2I+IyI+MoN+7iwKRfytdcr4HfNMg5/vU8KJwmAN4mIhxfTxOR4dMPQ3Coi7h0RnxsRvxMRrx8R3xIRHx8RN4+I32j4xnjk7Ejg3SLiRyOCdr5lRPzWBk17s4h4aETcISIeExH3WAE61gMAvU1EfGJE/FFH+74oIp4fET8TEe8VEXeOiC+NiFtHhDaa+6McXwLcIHcqOCGwdRBnTgoArxwR31rQ+P8VHwuH86GCLXxdRHxAic5xTicAYoCfGRF/u4E836EI61fKn/UnLdSvjQhM08J45Qb1vV9EvEdEPHIFw9igGU2f+IgSTNB/zO33m97a/9AHRsQzIuJREWFyrmGA5u77l+8IYPxI0fovXtFGFsb9I+LuEfGRxZRu/RxlbeEBPYAHAH8vIl6rfACz/I/Wj43nFksglewvRsSXzM2xkwBAdXxYRHxbRPCxPDAivjkiXjHTxQTNty9Rub+JCJT2+yPipzby0aDK/Ea3iIjbR8TvVm2yGO4aEfcpjGALtgnUv6CYay9bPMTHfTEDCR8eEV9RJtCNIuKLCxNfEx29fonIsgC4NNaUnOjM33sV5bXUZM12XKkoXQzQD6ujp7xBRNwtIt4pIrhuHlvM4Lm53lPHeHa/BMzdr4kI81VK01/OCeskAPAtIuIHSnROjpXJ2qIJEwCfHRHfWTryOgX4fj4injLXuYbfA+YnFDYG6Gq/ET/V90XESwv7WQNYIpJMpI+NiDeKiF+IiK+KiF87gyzwvSPiIYVhM+kUbWbCSSehfJYWbJslQBYvWPqRwqB/IiJ8j8kJUPf6eTrr+fTyfezh3zvf9fhViyl+tYj4pGIWL/jMeGWBBFgY5qnI/9Nb3j8JAMz8qjePiNtFxJNbGhYRCZwAKgGQCcxEYU78YeN39j2m70Dvk4tPcWre8Sk9ooAWwFpSMIJ7RgRQ+aaIYJ7JUeMG+ISipf5hyYcn79B8ZIuxCgSIflI2vaCdPjBMlQM/k4Hz/wHiD69o77tWwYEl4KJqMuUT/vpiShvD3n7u6wLQovT4jSjtJcUYGG/j++VlQa5lpkvacdHe4XawXilo879J5scGwPTZ8R8xe5lUrRM/AZCv7MfLaNL4fHJApWfSAwg/NfPkR/zeiOD7s5hq9pdRJO/M+hEOzDQgymRPE01SrnpQ9P8u326Rh0XPBJWfRpHU5beLMviXiBDux1jJyG6G2qRvWRDpd+X8T6XjvTcupgU3xotaPrTnmQ+KiLdbAS6ptChBbTE2S6K9+7qQ4yV9ggLoNV0BMzPavOf7e0mZp09cIbPx6rwEMvDxniVo2uxbPjYAysninGZCiYb1mE8A0CTko0uwk9kv3wuLbJ2cfHlYAvBRv8CGRYN5SVcAfp65S0Rw+osyM8+ADQ0uBSfTbbQJ82zSLhHB5yUlg1lkd4GADkD/8/kxfc0TuegFT6SO6DdXAMZqoWnzV0fEcyPiBsUsFA0VQPq7jno8mkEAi5gzX10ASyT+50p+3JotYiK/AgNLQTSVIiYp4NBk5nTIIH2UmG5PkI2fGsPHuuUg8nOLcGOR1yiKXxBt1ifV0dbx6KslgBxYpyxNKXJ/1iOYYwIgFgV4gBgTkmmwxu/T06/6WYv6fSNCeyxek5Cfh9DsEBCNFjF6TkQAGYCLaWJPhMks8m+CNqGxqx7wxVYxCkyTHHy/Jzk3Fz1Gl+YnJfBvZduWhQXoMKJWYN4nS/PBOIlo+vNjisIBhj2Me+lYzb3HfcC8IQd+HjLYqmC5lB9Fye1ijix1T1B25tpSM3qrPl2E76QfX9Q9LcXmfh8TADEtTEQ0Uc7eM5tbddwHr1J8R0zPz5lM8owKf0iJCm8B2Glqk4MtWrVvrbWnIopYBt8UdiZNg4mKCQJyroWtAEp6ikgaxaAOTHMtsLb2c+653KmBkYvyLQWoXfVIqUn/NPY/l6Z1qK0Y85827kGe63OyHC4QgUHzZ0uzv6X+s/pMuqoEP2RxdK/XYwKgXDeROj+YYLNdfmRp5yKy59NCrxd3si3MDxC0+OdammtwmL7PK0GXHhPY95nqtmgxR6WP8IFhrNgKP1NrYKmlrZTVzxYTk4/0UDEB5UbyZ55E4ePB/kT6tmC82eYM8mARlCJz/6yAvraJJtuZsojlnMTAnFIdNy0+9h/r8KdfrqnHAsD0W8mlWoTMRxQocxgom1DM0dqnlbllQGZLAOSz4guVDvNZJYq9doEJKNB8zOs1frkUNae9CcXcJwdtZcrJkeR75WOUF8fsZBrz6WqD1J61OX0tw42VS8/hkxWskBe6VXnHYlr/auX73Orba7/zliUyLcqJ9doQMMqrA4mivvJzFyfVHwsA0+zDsrZaoFsMOsBgRv7BDh+P5FU5apKtp0nRa+u2rYpZJEUFkJjIFvLSktF1fsUt/EyYnHQgZjYfJyDEKoGcoIX/w0KUXy9BF78/KeanXdgoR/cxor+2ronU/nEB/b9YOjBHeC8VNl+v9K+1ivMITTzxTwosya6Q8QD8FgeXjgWAIpMWCCBZkze2pWQTNJiTIr58NFkESkwwjIfznwm0tJCp6Ld+M08pAQsKcHCsY8U9+ZC72iEwI+rI/7c0oprf1V6MikbNlJ9agfFbSo8hH/WJtG0Buj3yxf5E8EV9jd0a5bGrXkAv/0/EfjGb6OnQgWfNxWT0mYYlKDXY36uFZr5KfJdytDrR/BgAmOYvpz9WAaXPQmHamUQc+9OAAfMCU5W6INq61Mlswor6ihjboG9hiSwCQYELA6YebVhqYr9VeZ8G7I567RgIYCp9g3M98wadiiKAxVeZ6TD6lhFyZvxJnsTzLkWhiJ5v7VIx9qwCpryxM14nXaSJGQNpUuYedwR/MTeEvv9mUXSyFgRC+EKxb/N5zd7nk+7nFvUJYrJIyIs1tYoRHwMA02dhcZ4WZZfS4EBLIGzLnIXD/MX6sDHAZAGLTPs/6RUEifkJ1vAJAUkTk59LTpgJOVc8K5fMZn9AhVVgL/LCBFz4Am0n40frPW0k6zb5+eAwwLVBGmwD62OaT5OKJa9jqvXpyP5PUrf/702ynpPdod/ntkhBKm3YKuJNUUmnAfIOT7VF77QUNgVjPeaBG/pq84C8U6k/zL7chy1It1RJrxmHmp2u+c7Sd1lxtpBSBJtgy7EA0AI1aKcxSLuEC+AwGszlJycPZLSaj64212nhHPAWX5cILYbHH8FkwfBQdYvKySK0uCieCK5FtoTJYGaAij+MeW3hYgH+bl+xydEDilix6LLv1Ts/iCh3RWQCe7oQKBdpIr1J1ksnvff0WwAknd5rvpXvGi/+RC4JvlTWCjmelZJbMc0p+51Pq2RWwLR+TDmtg5NoG6aec9T82yQIdgwAPAlh9NSRyb0m/K4cPMegm/xrE2sxOuDDjMb8RE75QfnomMPqpxQkWwu2mDwth0LUfbUosFO7POyEkAQKuC1cfwfUzO3WcggAMWa+Pknizth7n8JIgLoDKk6yJBjoKxBcW8wJCsq9IfZlU0oWdE+C+to2zL2PaRtje4rX7nufq+vQ7zFT88qfuQGA/ATOeufvmnZQxFKUKPytLIDLKPd5LvrHt8OUMMGnuWN5krAz6qanwfTKBZOUY8iUyoIJKiKMQASLEQzhyM+TVlrr0VZ+Dwmx3mXiM0PTZ8UpzDTqYQvYXG7N0/8aACRcAwgRUt80+bDZ5o3mrR1reA5YGUMBqilTbXj9co+YEzcu+6YpIzJds9+7t/6W5zPB18G/Wx0c21LvMZ8RZJOvx53UM0e1Kdcppi7pfzPLcksAxBD4vkTqtt6kvnRg8nQPgDGd5HaqWOCczN17CHc0SLqCKClmJyMdmABAEUt15GkwwM8BBj0ld6jY+ZGyZZpgg9imginIb+w1TbXNuMnle2oBUYxS+32TW4Cv1DmG2O0qp3NPp6tn0xxfG4Hm8xOEcmafPlEilNNZSdLXZWuSq8R8EXSi4NbKnAuGH5qSc5TcSRfmq3nKFdUbaLKPPpUe/+8mpm8KYEsAFOVk6gEAwHLa5kR9cogJUJ8fWGfXS+/YKvLnDEHb1oAcYFGYWLZVSeOQf7gkZ0kgBVMBBAmezFcHbvod1qkfdocsKcz125YEaH5PE5W2dfKMYM7qdIMljareySPluRTIcgkgGPN3Lr7ga5VgDja7RRL5yu5d7nW+VizHXLLg1273S98tN8/aLX5L+6kNFA+TvvWaUnWlwsIAmw447W3glgAoV8yPY5nOQhGNFikSPZtGXNP0s8uh9+jz1r5hhJKrMaglC7a1nmM+xz/K7wZ4e5nllu3KKDCwWpI+ZBwE5igJoM6PqF+U03kveYiwzAOMcjPzsVNwsIZbRf0tQUWfzwDMVid+X6HJWwJgpzzO9eNYFJ+f019OMl1ka6FKaGcuYrT/uPXHO76XCsvCIdfWRGjRY2Y80w9jltfo+DMZAacFBB3d3uRRqVnSnGzFvJQK1s/CkY1B6XUfdNDS2QGALVLqf4aJxWzkuD9L/qVpT5gYght8lUx2B6FiekxpwG1HiCDINEKeO0MEdHrOeOyX5P++ISrtvl7+yZatinm2oTMUFT41ZthmEcQ1nTmhdzEupq/81tPKbzyhri6rZgDgMrmdl7eYGKLHfE55g5nkb9qXyWjxADumkzxDt/AxqUT0BHykyEghOYkiMVhbgZ9I+Fwk0eKX9sS3qZ0S0be6N+Qk+jvqOAEJDAA8ASGf0SqYh9KCpObsikpnKgZzEzjKwxJwYUoqgiQieiedE3hGxTmadSlKYADgpThq27QZ0wN+oqrT46xE7TiebSWUklEfMy4h1u8Fuy7V4M42EhxfueQlMADwkh/CVR3gH8PqmIrOmQNqNuAziXOf7GnuQljVufHykMCcBAYAzknofP8em+PPk51vFwvz1mZ8Jy7bI3yaqS/nW/Kjd2dCAgMAz8QwjEYMCQwJnIYEBgCehtRHnUMCQwJnQgIDAM/EMIxGDAkMCZyGBAYAnobUR51DAkMCZ0ICAwDPxDCMRgwJDAmchgQGAJ6G1EedQwJDAmdCAgMAz8QwjEYMCQwJnIYEBgCehtRHnUMCQwJnQgIDAM/EMIxGDAkMCZyGBAYAnobUR51DAkMCZ0ICAwDPxDCMRgwJDAmchgQGAJ6G1EedQwJDAmdCAgMAz8QwjEYMCQwJnIYEBgCehtRHnUMCQwJnQgIDAM/EMIxGDAkMCZyGBAYAnobUR51DAkMCZ0ICAwDPxDCMRgwJDAmchgQGAJ6G1EedQwJDAmdCAgMAz8QwjEYMCQwJlCtX/+skL9saADjm3ZDAkMBpSAD2vEdEfFxEfHREvGdpxB9FxP0i4sci4j+P3bABgMeW8Pj+kMCQwFQCb16uXX3niHhURPxWRPxrRNwuIr62XM715RHxzccGwQGAY3IOCQwJnKQEPjAiHh0RX19uHqxZHjy6b/l5bkR8YkRghEcrAwCPJtrx4SGBIYGJBK4UEQ+OiBtExCdFxIsnv3dN6wMi4ksi4qkR8akR8VfHlOIAwGNKd3x7SGBIoJbA6xZwe4uIYOL+e/XL146IzyrM0H/fOyIecWzxDQA8toTH94cEhgTmJACHbhERD48I/sFvKEyxBsi5byz6/QDARWIbLw0JDAlsKIF3iYgfjoi3i4jPLX//nw2/v/dTAwBPQsqjjn0SeIOI+JyI+LSIeGSJCIoGjnJxJHCNiPj+iLh6RHxNRHxvRLzqpLo/APCkJD3qmUrgahHxLRHx8dUv+IC+6yQTYcewnLoEPjsiHlh8gsb+xMBPzwcAnvr4n1gDjDWmxbl8l4h45onVfPmKRPruFRFfVwDwKyLi3UpqxN9FxB0i4qWn1LZR7RUlYM68f0R8UUT888YCeqeSCvNzhf2diNlb9+EkAFAdHJs3jYhblqzvb4qIBy0U5mtFhIiRn//o/EYdaZKLZPGtNblev4AKGv+Czvac1OPGgG/lUyLi2hHxkIi4f2Pl3vXz343Pzz1GXpgfzf/3Jfn1WRHxBRHxMRHxyRHx53Mf2fN7JrW8MtupLuVynSIXwYCj74aYEdR7l3WCnf/thkI1p+T53TMi7njsfL997W4BwLeKiK+KiMeWjO1eGVwrIr6jODZtdxHtoeV7GcjrRcRnFhbjO963oP+so0Hq/r4CyF77fxFx14j4wRVml208fxERv7fiGx1duAz4e8wEgINxeY/iITO5VT/VUCl5f2lE0NSHCjl+ZEQAspZigX93RLxfUYR2A9j+9D0R8QsL5AjUv7jMj98s6RS/09KQHc9ct6Ri/HREfGfnN25YIpg/uuBdVb1RAYS3j4h7dCpna/kNyztbKStt8l05ex9c2raWMKRI9ZG/76/LeG3NLpuGbg4Ar1oG8tYFLOTuCFUvoarMHBPj1yPi7h2Dq43XL2ab7HB02WL5jMIYfqahp5iBxazd/AwW4LsWMHifAoj8ELLQe9gDxiKChVH1gNK+JuunRfeiiPihiHhOyZUyof+psCMsGmj/Q2O/jZlJJqeqp29khqmR20MLeEpcJTtblD6qtPULJ/lcDc26DIwx0C8rDz+5sOhe0ALuAJ1CtbPgb4rcMEtm/vNbGlM9U5vn+gxUWxkYBS2B19z89qJ0eiwUScLWBfb7853mpnrvHBHWK2XEEnnLAqhY2yvLGJGXuYRxTZOQD4nqmmXdcJ/8RqdM9z1uHzAA1Odf3uib3Z/ZB4ASFbGlz4uIpxetZtJanPw0BrmHeXn3PsXOxyZbzS8d+tjKd/UHEZEmFJPa3sHfbej1bYsJbqLUGkxiJl/UnRaE300KZq/B+8qIeEVDOw498g5FvoDlUGEqfluDEgJgQAGYWpC9OVWAHdB+a2G4Fg6G8bAiLwycX4hC61WI2sakAqQvjAjj0wt+vsFEfJ2IAMLG1Xz+0Ih4TET8YgEhYNhauFc+vbSH4qCAWot3me/AhWsFE20p2nzjiPiIiPjJhVaWusnBnxSxea2QiXkKxK1BzL8V0Kdtv3k5vIDM1yp7fTZmdnocfbvboUHYBYAZlrZnz2D+QDXBNdqkNel7NOyVy0LC2m5fzOGWybHrmTcrDnN+RQJkfi4tTKdvLIBsQ3ZPwdaAgYX8hz0v7nn2VmUB8I0C1DWTzLiS9duU/t2kgAUTE6tbWj6oMCzf5bvp/RYTj0lNefEBYkiYFrDFemyEb2UmWB8FRFE/qeqQOlgp5u7aubZUTj3vfXgBbaRiKTj11Lf0WYEQrhTzvcX6OFTPmxRGiVxRzlua7F392wWAH1L8QyYSzVT76gAGVoGV0ZCtgQwmNN8bBmdi/klXK//3YSYK4LWfcKnv7ioR8QnFdOKDYkIDC2ZiT7GIP7+wU6x4TUlz04Llb2kx6/fVR0bAQfuYmADHOGP1fFQm8FKTAzBbqMavlX1nO80dc0DRR8xU4UPlAwSq/Myt7hF947bAtPjL0v+YAGjB9rZxzRgufZcpaE1RCD1WlfrMG2vBu0xffkvK+B0j4k0jgsuI64Sy5vJhXhv/Jf4240PmEpZ7/fdT2bxxIR3Ix0uWCm6L93YBIEH9SERcrwhrmpclKPK44lP68cZG5MLBGCzIJeaitt6sTBaL5BkLNEcdgcymM8EAYg8DzEX28hX9qUXnTDTnn9GGUzO9UcSveYwpxacGbER+LYwsgPEDFvinvF8zK75ci66HCSTD/ZViKubEZ7a9b/Gj8oO1mkQAzrzCAC1sbgzuEC4WZiw3gY31vaZ/r7zXPs+tYF0Yr17FZE0AE+spzV9z3N8VOyv+pfzdPF/KtCgSik8bj35E1VqB9ry/CwABHF8flsf/w/FZU3PahSbg03tZY2UJgPwHS/1lTF+7BQCFAMGSor9Me9/5t6IpmdKO3NGnn2j0Z9Gojy/foSCAg3wpEUQLsOcInzwh426FifLfWMzY6fMKu2EqtPjZ0qfJVbErwv22EfHVZUx7wIusb1NASh3+3usMJ3emakY6a/M5FRN/Vc8JIMBy11zgolljaSyZW2ve+bCiSM2hVhfAmvpa301rydqjUIDpGtdM1gugzeeWOd3a1kXP7QuCWHyoLh9NDQyeN0FFmVppcE5u/iNZ/7/f0VK7BbADuUgc5XxFQIHpjX2u9ZmkWaa/HNDM6zlgkBJCMYgATwsQ42d798JWmSC+e6ikP0SUHAP8pRK9xHal52BKrXJL5zKzSFG/SKaAgAiw7UYCUIIXvWZ7KrEeM7XuN3ON28SPLU9+cgGIWGIXlIr8zNZCWQtiAY4sS10aAJp1IoBBbidZpIRwA5Bxr2I5VjtzXjKXkZ1eF9G+dgn28dEKMJkDWwDqYhnsA0D/zyzD/mhlk4LD2b5NZgaHdSt6Z/rLrxZANUFrp/W+xovmWRAY2q7CzOODWxOAyE3YzidrZadMP3mNh4rII1OBb2cu9YR8gQJ/SN2Xum09znypEAILucXMYsaG/riAIQXUynSzj/xJGAB/HXYpfWFJyQCWSc/vyj+l8FcCMVkHcwpoV73cNQDUOC5xs2iXvES+6iXBHTmQ/JGAwtpYUgADdu47S33kS+rd9Q6rBPHh6uC3X2o6T79dWzsI1K4zAbfqQ9N35vIAaW2MD/tK05dQWsGPiQLlmXAWZY8wRcf4rPgbmavSJLTHYsHCblR8HVjbkgx1wQLs0sKW/weU5wY6HfVPLAtO7hWlAKyyPKEoDH1dU2oAlOsmGt9amBgCHnxgFmcWzNAi7WHOeYKv9pA1hts6/tP2mm98nMaV35VfiquFj8k8kUzeW8wJ84zrQeE+MN96Sub/edd49ryfFo4UGABOPkuKfhgv8xzLPo8lt2PKLaXwWXFL59Im8pkDwE0qOWMfqaPATOBWppaL661L5C2ZXQaNgHQd3Vzb7QRA7V3ic1M/9izqB6gxdwtUsnBPydQnTBJL68mN21WPhGFRW4xbwUb9e4nvy/z1rkR0gTvf1L6TXFTy77hkjD8A61EuPeMwnj2CBC4KAFp0GCP2yBRkPi9hjbuGAEOyrWzNOWbaJwfOLhdbwTAS5hjWzIfIj5fRvCNMg72fzKAKNo6xrXE3HKPdgjqYMeaIWZ5GxJdvm3W0lPkdQy7jm40SOO8AyLnMPBIRxTSwn63ZARcBJz7f09Jvy9EDdgIUcsGYvMxV5r+FvSRvq3EKHHwsgxNYVe82wS3qP/SN3AZHOTA/n33sCnd8n0/LWD1lxQEOp9DsUWVK4LwCIB8Yzcxc5a/bagP3dOak/0eUVdR8aam3CgqgCBgx6562AlSXtsV7csvk2TGdsdElpvOa+ufe5S8DyPL9RLT5zJYqn7m6xu/PsQTOIwBmqo4k5Z898sLAkARROPB7cv/O6pQCxIAFq5WSw/wWkZwLDh2zPxKFMWM+Prs+cu+vlJWlu4GO2d7x7UtIAucRACWVckpLs2g5KGHNcElPkaMojWXJ7pY1dV+kd+WkcWUwN20dA84CHj0HHVwkeY2+NkrgPAJgY9c3eYz5JaBybKDdpLHjI0MCQwKXl8AAwDEjhgSGBC6sBAYAXtihHx0fEhgSGAA45sCQwJDAhZXAAMALO/Sj40MCQwIDAMccGBIYEriwEhgAeGGHfnR8SGBIYADgmANDAkMCF1YCAwAv7NCPjg8JDAkMABxzYEhgSODCSmAA4IUd+tHxIYEhgQGAYw4MCQwJXFgJDAC8sEM/Oj4kMCQwAHDMgSGBIYELK4EBgBd26EfHhwSGBAYAjjkwJDAkcGElMADwwg796PiQwJmRgDtxHHR7i3L3tMuuXBDmCtej3pE8APDMzIEL15C3ioj7RcTVy33DrjAY5WJJAP64e+YrIuJ5EfEdEfFPEfGdEfHxCy+575LgeQRAFyK9XUR8TES4gJlQ/YxytiSQ9x67HP2zI+JlZ6t5ozVHloCrYD+uML9HlNsQs0r3dbtn58pFOf7Dsdpy3gDwehFxp4j4rYj4mYh4ZUS86gzc10HO71Ao/htFBMp/q4j4g3KrGRA4r8XNecbATW5u6XN5FNbHvHGR/MeWu5BPov/a4hrNG5Q7Y462sE6iM5dwHUiKcbcG7l6urT2V7mwJgDplkv9buUVsy2sKtROru0tE3KzQZgL77Yh4aUT8TqkXyLj/1z26L4iI/yh/37ItuwbKNZIGFOvEbABxXm/5GxHxpuX/abpfKzfVuXRcX/g93G523hYjExcD/6wC/uTmfuZfL2P5koj4unL15zFvnQN6GAWT6oML43D3skuWnn/kVfdOZa6au+6o5ucij98/cr1n/fPvW9bpcyPijhFxTPcHXLp5RDy8mod/Xi5Oe/RaALTwb1Im00dHxJsXybuO0kXfLgzaYnK/W7kF7Jsi4lkR8e+lHmzqIwuLenFhfn7lekcgdI0yAXW4vt4x773NRbn0esRC4hcAACAASURBVMWk8bTY10fE0yeAe+Nyv6+BJhuUHkgDuz8sC+Hni//jpCYtQFBShseo92plwpHzvQvwfVm5PPwbT0jju88YAH9tRPxyRHxfRLxZYYDPjIgvPNKF8+YeZuN6UYvvR8ucZY38VUT8aUT81zGEfga+qb9uSrROAdsv7GjT20TE95Z1cMwL7WHbjSo/8xeUC+w/oYAfJfipSwFQJz4nIq5U7mp1K5o7cv+4TG4mxoMj4nsi4rs2uJuXo/RaEfEDEYE50aQuPv/AspAfWcBnDmwxVEzNbW5/XQaKubyUfVng31LA7JuLqWfM1WPhuV+XDNxhexrXZhrfd42I20XE+xUZYqgKhspNINpm/LCSLZgypsXnCvBdY2nMjlFyHnxuRHxokbk6McwfL4oX2/qqiHhiRPzrRo0w5iyRmxZT2mefUe4tdofxVSPiQ4qJz8Wxb05yB9ytzEEWy9pizlkXrApjgIGzPigjBOBLFjBe84cS/7QCJqKzTygAxm3zjyVoYd6wcoC+tY8M/GJE/OeOTlmz5MUaQF4Qmq0LfPr8Il8kCQb5N+tUMV+si0f0AiDGQxgWkYXN9Ny3aNzP+60R8XlFGGs6yWfGd0NghPqciPihIsi5RauPBk47TA4DhYXRCC41n3t/SbstEpEs2lC9D1vykT3vWGTXLYuMhgOsV4mI94oIg62YXMbGJeKUx3dHxL0K0GNGnqOtLU6ThUIwebHo3uJ7wPXOEXHNsgDSEshvYbkmIQX5extYBeQL2LArl6XrB2ZLud0hIlgMxljhEvHcr0YEszvZl+ctVnPKHdLAGlM8VMx/CwmwAFqyx/jI0DinCyS/weXBKjD/vGPemr/vHhEPLPVRnLsYIRliSNYRy8FYaq+iz4DDn9pgjD33g6Vd3D//UnUECGLiAgt/1zHAGPOjC3tm1Zl7WZc+a6OxMP8ArnmFjFhb+yyMJAWIh/WhrVuVHB9R5VwLvv2VxYK8AgnpAUAddOH4k4oWmGNbKr5OMQFNlgfs0QhbdX7Xd7TZwmcKP66wAAOK+dCIW7ECddPA/Hm0P/ObNlYsOk5/DMvfmYJLBp1Z5QJ2Ewu7/psSRKn7YDzfuQCuv1skJjH2nAvIpJVyQENbUJigRQggWsa0lrM6mJLaI6gB9MmAiaP4nf8DErctC5AJ/FNFFkuUD8DlcgBWzElgP2036wDwAD59vWGZixQ3v9+PFDnyIQN9CwRL/4uZyQg0sZsfKws/mR5fM1lwpQBC/iZyVi/wUgBysu+shvWwzzoA5HyXlJex9n1j70+gA0QBGuDTJ8xTnan8EoA8C3StXS6pHpl7F5vH4q37W5Z1jLnWygKrMwdYhHyrAl27inlw/7IGrEFm8lLrq/4+4PvwYpVStj9clI5xonT3+hlbAdDAW7gQVEd7/EcAiE/gUWVBbAk6h+YrFvCQiPj+MoC0F8YHmGj7LS8zp23IxQKiKTERWqim3hYuJYCp+V0P9TdxaE4szUIyIS20evKY/ED9A8rvLPx9gGY8aW0mDPOrZ1GYMwAGa8R4BDK+oWpLmji7xhsY8xnfoyxa7/WyTpMdOPjGXxbQqb/xPoW1WLy3KUx4SyVLbsCeGWXMgT35vXdEPL64FAD/rjXCbMf2yPDTI0JfWAe75A/8KCYy/vYC0pSVYi6pA3A/raQRAcks5rqxN2+st17FVsvLvLpnWTPJqvUTa5azZ0yB9K0j4rFFOe1b44iAecESoxj3yal1vMjROMAmFiG2j+Fa44CW7OAPRbNzjrcAICESgIklX2sOsQ2yHxTcAKP63j8G5d0lKH0CArQxxmRxYGcWG1PEwPWYAa2Dkc9hnerCfvmn9DuLqCBThEmyRPthE/rH/DORkkmamFgHVnCMRV/L4Pplof9kCXSJwtdm5VeXvmkHs29XAZ6YoMAEGWEtWxVzFGvBivjCTiLiar5TBBa0NKxkwGv7BHzIk3vBnKJALWQKyIL/25JKdOxodt0P1hRFi1FaW6wLbWF5zKU0fVQBS99DQoC3Yl5j0T1ATQlY43yxyABlqFDuAM88mMWcFgC0WE1UHX7KjhGlAfhFDFJqCJqKqYD5aRAgEiU+RI/XTpZ8nyYyCWuhpEm0Je3e1V6ahxYycQEdH9C0YEjpoN0i/A9waVOTD/Xn+N/Cqb5vPLAv/doVOWeOcZJzkB8aayasLAHAN7doeuaF+Ywl++H452PqYdo9ddXPUvTmun5hdACix0o6VC/lzUzmu+YHZ2ayZChQP6yBHga/tI/73jPOALBmhfueBYCCbqn4KFNuCv7EXp88xs2tJRhbR5tr/zu3Dj+qubCzzAGg4ANaK4SPstfsL+knzUfLGnSsL9EXEPH1KBY9RLbw5xjkmgFCsQE11llrRYuWKTxH0dfU7d33LCD0SwfMfSDJhAJUa2WBnVvsTCH9FZ3kbz1mSfCaKhOBGROSX9G4S0HBUHaVdywOe8GTLSPFyUa4GQ7517aWj7UAnCh9Y2++YcZbl3q8twbaJW0F/FgpM5NVwuw8VNJ6YL0w74E51w4iwGpjymKCLQXbNs4sCKZ4ltxhZB5SxoK2XD07yyEAJGyAhYLzpXG4yujPojOQn6knwZRTlMYVBeKfESU+Sc2EiWIVImH8cFl3Zv9rGxBnlmmfSco0n4v8tQyGZ9SfexhFFgUZBC6AksFF0YEGRs13JDdwbamBxDiZjMfOMcM4Aa5Jq76cE8kE9GluMTB5ZAhwRxz00TQISDqJHSWSa01+Skgha75WUWc+WgtGgIapxlGePqyGKpoeSSXrYakjcg23LhiUOZa7igQmTqpktJ8lx+8GVMxlAb99BfuWbmZOCkZ4V/aBXDx5sIr1KZhEcbSy5jRzrakp6Fpz3DOKMTA39vqZDwFgjaRTLc3noWKs76kFxXU0zY/p89gBH5WOYiio+5pTHjh5ATDziZ/HIgTYJga6Kw+MmUCgJkztoJULZCH8dAFATGFtIUcLCvin70nkTZ+xvI+oksSZfRYjBbEWrOpFl0pobV+Wvp/MULKvvxuDfeVNSoBIfuIat4TFR8a+QfHxT4n+KuRs/AUtFPOC39E7/j8j6kv7O31vFwCaF3yhrJK0CloX+fT7giJMR6zZGrKwX7RV42e+w4LjUuJbFVwzp/nraowQ5c8xB1AZ/fZpTE1erDiCcUFCgPezi5UAC3rXAiUs9xgG1fmG9TjMzq2lAMjUZO6I6AETnWF+MDH5v7AtUdb0X2CSmZeD+azxBUrnwDwIWToDDc8/gt1hqlIPAJ4cuWQDuQAIGnii7hzx6YRdO48sPCY2UJ7bVWIDOPNFSkEdIFnSBkDKlFByHJZ8Z4t3MvjwK8XvIuVnXzFxLWbRwFlHdWPj6pQcSigj/eaABcwXZAHyGYnO9y64uhnmsvkmyoh5cgGxAAACn5Y5wA9urhlrPum1Cop5yLWjkB0ls8TXa92wfPiLW9KxkuxQ8KK71hprA4MHytYgID7k8sgMCGDFLJ260xqH+HKPSfvRhtwEQbEZD+Oe6UazPtJDAEhzstVRyjpkXefycD5CXOkx8uswslyI9j/SGDQFZihCye+lgbahtBZ+SHY8um0SMG2xT2aGgaBFfJ9jvvb71WaWvCQT044AGmypFt7XZgNqUU0zznc9jw3Kx1q7IOoFr56tE65bx8dzAAETM+FaFFz6giwgjHELZVCzkV0OeXWKzjKLmN2tvqapHMx/7IPipfiBAkXPkgACymPKnPQ7csHW1ox3zZh37aAABgAe0chApHbUu30wY2Yr5qvvwLR2aR0ab3PNd/nbKDo+XvMN0PvO3Ly3hgVrmPCAFFZsUWACudtnzRKFR/IB9bHJF3sIAOtJXQNg7uVTEeDBxgwuBkTj6SCQ4dzk5NQYAJm2usnTKni5fFBedHHXQtF+AEyrTbfcpT9SP9ZMvrmBStOEmc+kA26HSgZKJPGKnNf5W3N11b+3ECmElCvth/LvKlgPuWNbFqRI3JalDj60TLyauVoYU0f2krblDgPvksnUZ+3/jRXmb05ulQpVg595z7+FJUlbYSFlWbPwsUusjw/NQgd2eXwYi0gABruVgcCnDejUr866iM6bN4JwS7YoWm/WGgKhj0l65nL66rSdNdbf3LxIn7i1mCz1INYcAkBahV+Fw7MOJ+f2GEBoAdOszE3RTc8CKgnB2CMzmbAESnwLSLVuC/M9C0NgQ9AA4AI11D2LuoXPc5tX/r9Bdtimia7UEek5Ifb8HrW30NSDXdCKc2YJcwwbVdYyH8DOl0g7H4qm0to0de4UwAYAwb6M/R4ZeDbTjPyd73Xql6m/RykaT7sJFEm+axiZb9RWCYaEce1TBr19m3u+Zp67fHOc/mSNeS4NjNRkpKV/NUkhB+uIDxR4CVBhqGt88GTClWOnBcZPwTrlaFepx3srd8e+MUlLbNb3lx84BIC5tccEVerIlkWMefk/WgDYMVMBgcXG1MxC6LSR/JwWgPCehWqg+BQNHO3Ht1cDholnUYv0TRNBaWVAC6BbTLK5Sb7v94AHyGujSdaS1pLmAPAWwFm6KLQp6xdlPpTiAyCMjagchoAtcVHsYklLZIFdUjgWFQ1vi9m+UrsmPLNFGkxtIh471WnarxoAj5HYPQV4/64DDrvknPNCcIBbIpOEl4ztHKjNsb/a/G0GpgUNrV12gk5NluZcHmDNcCRj0ty9zuOcICJwLbRbm6SpYJoAjvkMcJl7AI3pIqqkg3IQd2meOkUH27Hg5/Z57pK5nRsAFvvEUpK55bPpz5PygnW0mLNpLjopZO0uiJoZYN58UHUK0K4+JVuimbc4pSaTvy26FmUDeFkDxrTl+Za1kG4FDIN5LSPhpIrDAbg9jMWxADDXhCCfIqLK/bRv50SanHPR+KUykgpF8VsXcwnM5CNdzvwQA9jidKhd7YYJiBc3XLMFMAeAKkrzVTQIMHE0tub30cwcs9gbZtgCEAl8kkozWMKMsGCBIccrkwJ47DJzavan/SJedaoLRspEEwnmK9oXEDFgIqwy/C0opriJxX8GeJ22YvAphX0+p+lAkbdAEZZiAq3dCzk1JzFhZsA+c0R7EoCxdtq7pWi3iC1/LBOXHzHngAku74oGzkMRdh2DpB4yNx4ZzVyqVOs2TwMQzHr+aC6JJUqvRR71M5n/yDS1wC32Y5X0a/v+Pn8zBWNvLr+5fNRdu7fWti9Tnlg+c1svUz7IQ8tW2qVtS/N3zgVzue+3AGANKK05fGgv4WNtmRfW6nOA5E5wzX2P2eA86gboABwLeBcbrSOM6jRR8uCD3L3CB+IooUPJsAYLA+QwznoAcR4Ay9Eq9M68qBM7Dw1gbS4xSbkGWgNC+77Lsc/cJ29F5A9DEIGfgrux5DAHZj25mFOfUu5jrreetURztVGEVmF+c6/0RuSlHHGPGNf6yKOpfMgB25CmgWn2Wi6tCzEPf5jddtX6wQPP5YGjlLHgB/8vJZbnDnIdWXMIgj6zfLY89EPTMgmZ4mMVCXrtm8O5c8WabQkQzolI3fb+msPYvnkg0p7bda1Xrrlmt1ILAGqUQWa+YkU0LOcnBsTcsk1OQcexRWkwKKitKLQwE7LnxA+ClTeFKeTiQLlFdUTB/L9cokPnEIqUKTL+CYTZjKH4rn9zwJuwh4rnhO1NJhE3bE0SdV6wlFHHKcjOfRM7MWmY83v3KM7NhMnvARtfmsmfaRDSggCMxWGc+Wv1xXjpS0/dUqHIgnb1rnr4O7H1TPOYM/9MTu+zBjBr7es5GYgCNPGBHlMQ4Jpv2I7kYErRVszpWXBERQ7T48/yMFs5bBTR0gNrKWvr4CR9j8ab8rVWBB6tNeuRcjEOypaHMtTTLX16kpmnPuTcPcY60x7Wk+wEY8dlxTLoOfCgrldf+bqtHyCIDasHAcm12Oz7yw+3AiBfIIpZL7BDa5T2wZwA0T5zaN/7bHgMxjcMqI4DP7484DNn1tQ+KUDDbMd4mFtST/zJZzdnxhs0QmbC6z9ta7FhFlMz22LOo9/39Yt2Zjrz003N8k682/u4NjNPsMvpoaReWupzY/pjXvUpJ/yfzL2sZ5d1YH4ZD8yPKcQFgq3O+Sl3dRCwA0Ba34JnbvL9YdXqtuWQC4CiUx9XCcWdxVgywyxATIrpZk5jU0vTgsgbeJIFa2JOqW41zvu+k5FZyuHQaTxr2kHeFJl1NA12UYjWLn+/sbb2zPks0oSMH5fJ3Pqr2yjPz3gDuKnSrN1A3euqFQCzMbQmZiT7XTY/dK8LgUBoYLEmz0q7+KpoGGCDubSa0N7NrW7ZNv4ZLMBkzTPV1kwCW/r48AAivxfQJnzy4bus7x9RT71VTgBAv7ZKQdnVD4Dt6C/5YmQBhGjs3nMI89vcEkwY5pZxlXPGj4d5KZg2s4OGtjhMdFaAHyBlXnhXxsBSU1R/yDtN/Wwba0AEGuOoC8aJHWGuou0Kt4k0Kr5MC/GQJbFvfmQunD3F1gJXiTmlbVwrPdbOmjk4fTcZrWyMuchsb72YnVQXY86CMNdZhNOxzKPzrLN67VHISIJ1g621ZoPkN4CueTzdtkqRwSIWAeusO+LdC4C9gjut5y0WrBF7tOfXpOcL6dE6vW0XJDLAFqNoFMBlVgEfCxBtBxIm0Wktkt4+5fOUkElvEkpO55rwg5Fxh6RZAygtDFoZG7NjgK8VIPZaAkvbuus9zETEkrkqgbfXBVB/Ux+Z/UAfoEo6ZnoL+FmAFAQlt7akvxp4CGhQIlwxDhGgPLF57g31m9d1Mnpt/mLvrBPjhhlylbCElhQAN+ez1m4K2J+e7/Xx7moXHzQ5YJP1uX9Yt1iBk3cwxO6DTc4rAC4Z3K3eybspaGKZ6eh+AkGPz2ur9hzjOxmVz0tmjlHHRf9mAhqTEtgCkjxkgNOfT5NvlrWFccmvpOgp4tyLT4aYMF8ckAYieTrLpSRfOOX8P4qL1ckPnEf/289MRovu1h4AeClNg9HWiySBjLwL0lCimB72x9zG+IAhdoeZe9b+3kxVcyBFbe1gp1iryOkWpx+dm3EYAHhuhnJ05JxKAHg5SEQqCX+m1BN+dowQ4Al8pMnNLPZ7QSGMD1PHFvkpM0/zmL7nS24IBgBeckM2GnxBJSAVTACBLzmv/eQXxPakvkhrYiZKrxKcynQo/lfpIp4bZSKBAYBjSgwJnF8JWN9+lubenV/JlJ4NADz3Qzw6OCQwJLBPAgMAx9wYEhgSuLASGAB4YYd+dHxIYEhgAOCYA0MCQwIXVgIDAC/s0I+ODwkMCQwAHHNgSGBI4MJKYADghR360fEhgSGBAYBjDgwJDAlcWAkMALywQz86PiQwJDAAcMyBIYEhgQsrgQGAF3boR8eHBIYEBgCOOTAkMCRwYSUwAPDCDv3o+JDAkMAAwDEHhgSGBC6sBAYAXtihHx0fEhgSGAA45sCQwJDAhZXApQ6Ajvy+dkS4N9T9CB9cbmFzacovlDto80KZCzvIBzruSHWycmObI9QPFXfsutPYzXdOGyZfd0x8V8eVpWMMlkvAWr1quWHw1uW60SeXe6DXXEG7vEXn4M1LFQBd02gSuHntbyPiseXaQBMhT7+9erkaM+/pPQfDtbgLxvn6EfHREXGTcmE44KuLy3Ycne5msfpCHe+62/e+5Xc/EhGvU24ec7E4+btzwpWNp1lcxegoeEDt6kr/dmGQo+Iv5eLCI3fyug3NONTl6eWY/L+4lDt4mm0/SQAEWlja3Qprm7vH8/XKRTAfERHAzJ0Iv1p+sBCXvbgm7znlUmQs5hplkbug2/+7vDzvET1NOZ923e5nvX+5PczViO6HzWJc3F0MGN3z6zmXfP9TOU79BhHxleX/68vHsW8XvLujwgXspwU05rAL0N0Z68L2uujrg05b+AvrNy7WiMvs/zgifjEiML6XRIR7jt0JfF6uWV0oovWvHRsAfd/duIDKZc0165i7vf4tIuLRZbG6A9XN927A+rZyKfSPF9ONGQfwXMbt4vGfjYhnl0vJ10vo8Bf0z/WEwBfz3HfxOrDwu2NezD7XV+wPi/jGiMDcyPc+5SLvfJcrIe9dpWDI9S3Lxebe+/1yH6vn37UAo3tmjc8WF2Af6oP23jYiPrawPJdgAwgK8vMi4qHl/mVz7DHlMvH6gvA5+Zyl33PrPKy4GsjdLXCnebH8WZCNtcb18gkRcYtyTehdIuIf1jTumAD4LgXAmCSKyeh+U7fc/1jRzJjF3E3zNVNxATQGedeIAKAnWdIU/KJyPeGbTyp3+5ZFaGH+abmoGqsyWDcqoPxDEXHjiHhIRPzzSTa+ADUf3u0K43OTGODaxSIwRr/7xGJ+AT7AeMcCPpr+7WVhYiLHuHTHhd7fWur96QK2WKYLsc2ZO5Tb0JjgXCFPiQjt5gcGgE+KiC89A6Z56zBTklwLb1rmNpkiDqfFrFvbfeznrDvr6JblUvefKutrkzl3LAAEfrTyM6o7Sy2gnylmmAnqLtPvbZSedprkeanzR0bEsxrf3eqx20fE/YqfjDnyX8VExEz5mxR/AjzmmPLNEfHIor1dXG3QsFjmpSDCWS38TvyqDy5m12m0kwlI3kBbIOszity0hXvkAQXUMSVzC9hRSgCD6ctXaYwOFaBjrlpcxg14mle/VxjY7x6RtbMcLOxPKgpSO3YVgG+u/GiRw0UKeHB7GedfigjkYRPQq4V8DAC8YTFTsLVbFZbANP2UiPizhSsJi7QYOblN+JMwuaZN5eh37+rnFx8MMMY4ADNAU0TpMNM/LO1854h4YGn3w8sitVhFT/9koSxO4jUgDfD1eZWJsUFjKTu+PXLkQjBngRUGePeIELzpLQDUOBhLILSrAFJ1mLtbFsDufl+BDXU8qlxk/oqiXPlgAbj1Y8GbU0DAPHOpuTZTCEtLRv7JgNtiOr6UOL+ugBj/L7MTywa8ZEExunh9TrksbV++R0F8VUS8sGQaHMV9tCUAQmvamlC/owyeQWSnM7s4cJcWpjI2QBvW7O/tiplgwSr8f0wfP1sPkP4BXz4IEwCbxTJMyixfVhYqMzcXDl+a/vO7aRP2+4gO09+3MRULlSwzDaVHlj2LOUEcO+dnXVrMLQpLJJbbo3YZkBlF8YTi1FcH00+U8x7FV8zcfvGOygW6BAa+unq3p40CPkAG2/umMleAkjQgbgxmKF8o9s6Vca+IwN7XFmOoTi4cLiAgVoMPkP+eiHh5CSoJdmThv2Ux8W/ygSMALT5BY/D+BVABvuIy9SsX5uvf3DEA95URcZsiW+uKghcMe2lROql8jCW2ao1vtcaAMTeRuU0OefF79l+brTltrdfb2jG5TJtuUQiEhk4fGGHdrCz035yYL731Sd/gBL5eWTCA5B+LHw6rNHjSAGhrzwHJmx9Bc8+1+ypFm3NgAyoDtlXBdMgXEzApaWSa2oIwcescvjcssuI8T/+rdkgb4j85VNK0tOgFHJYCoLbx+WqzBUsZiDxjvep464i4bmmfBYpp1ADJ5DOefzNpLKCS1sTfx5+8rwAbLAaDMDewLTISQAFsGDoABiJ+B5iAMXeFcQMAAnD8ufqAna0p+gZ0jZXA09Tvyo2ibj5XaUiCO7WP2Pry/+QkE2Iu6q7/5Ev5WOOIiD4nizI+mJ21Y63wqX9UAWdEBcv0/K7C6sEOMTSEYE0kWjvfvYCuOc3MZR19fFEG5oG6ZIEAfXKw/jdzH20BgExeWtviTLMOgvNZXKdoEv6ZpZNIhyXbYjEWlUnJb8LHyCx4fhmlpO4G2/MG5yQLzWgRqd/P0v7uajMgA6qc4gC+pXA/JEg8tyyuOe1pvDANC02Ki58lpgfA5rOz2LHy1m8wuTELRZBlyr6AIoXou4fYRw0YFjmfrDmD1fg3Hx8WmaxolzwzyZh/0DzD3My93oJRIwYWLfZPLtLBrJnMnQTW5iv5cz0Au7rU/eEPIwfMbFehYNRhfbCcsM1dvjNrXwRdMIzyVjBg4Eo+hwoQlBcqODZta6t8AKiAonXLDSCbwJhK8aF8KCvrSB+sJW4DDHkue6S1/sueWwOABG0gaS3CyHw736RRTGCg5e8/19Wq/32YM54p9uFFE6sHRWb+WBxzA7Ww2u7XUoPzTQEek3TLQqa0ogRfvtBkgHyMFjEXAPZbg34yYu0wyWnSQ+Ap5eXxJUjlOQvIhOstTFnRW24IGr216COA1z/1T90m0nEACVDex06yLm4HfZYf+AVlnlhU8kJFrbEf7PZtI+IFxY+IOZMRq4KiACLMUGCLvf1A+X36e1v6heFwC1nYxsdCth7UkSwOAKjDnGbqGbdU6lmHFCD1Y2nk4/l9JjDCADSSLDBrsXnrpWbU+u6bzM4s5G7dko2cz11K3Dix7siVwlri1+fG0AdjxDqwrqWusVCSSPD9wZZU2kiAoOpTi+w2SbxfCoAmEG36bzsmRT1Yu7R4y8TxjIlBSxpwEwIASH8wUfwf0/qsFKwEeJBHPWhbts9YAUCL0QTMYtEAGn7FBDja1fjIwcRATNJDOVP8mzQrrau0MsZd/dNGdWMH2sFkNX6ZE8oaYGZiQzUzrJUdcxnzYg5lwYwoFwDSkkJEUWJ7FhRXwa+UdmFiLe9nveY6xz9m0ju2fHfM2TsXfx8T3mL3Z7Jb40MWlOc+1k2mTyyuH3IQnd5V5MJaG0AaCFJGCZxIRG06UpoUJrkbD8rHPNEGdVAy6kQyXlQUB9DUbn9KmgdSPSXBE/vmetAPfmJAaH4y7wEjc9fYCRzmHJF3yueOzfaOw942LgHAXFzQfxfAvUkxQWnwpYmo/H00dmb2Y4FMM5qTgM5abpQBSbazy4TpmSQ9zzJFlGkupUXL9wYsKRHlEAMElORrMipzZtahNuYkB8jakTmbFr0FBwx2RfJrk933711MIH+nVPnuMEBMobVkvzzPBLaQlxTBGUDCFO5Jv8JajIH3sB6Lnnz4FXNXTSpPflHPUh61eQ/Ei/7mFQAAIABJREFU+OQAD+WPXR/KnWVGAw/fotiYl4JJ6k7AElADLtYZtxU2OpUrPyiWh0XrP+WKrQEreZk9SiRlfq2CDZSAbXxkIrBB+bISjbPvIz/aVLO8dAPoA5a7SXbCEgCsGR7WU+dn6WhGrPwdo2h1WAoe0AzeqXeMEBTNQFPRDJtQ3yWr4MA7Gf31yFnYfsUHB3BEGpl9xolm37VwmIsWgyBJFj5Uiw6jXVJqEBSw4ODH6gDf+5Zo429UH06fEuVhHih8yoIYND5wlIK0rw+72mgRYZuAYFdgoadfgJwcRWixWe1o2fliDLSBLPUX8MkhTVaDTPBzGa86uMG95BnJ4OoCguYYtj/nTyV7ringhf0yK2vzd8r2MVSBta0iuofkSo76KqNDkMb4shD4VrWbuwAYTokVeSBTgjpzW2h7xnWRDzBpNqcwbVUHOGp22MMimBc6Lt2AlqNtaAI+D4XPix+DD+CsFXlVnOxMCOUkGeAuWVBQX1t22gAT2pY2rdMq8r3cI+zfJp2FwFSyYIzt3GKbGwvgmjl7Iq37Ioy0O9NNnRY85pTmoLQUIIZ9zEWx6/bUgYMaTOfavOv3zFQMGRuS/iRFZwsGkqYt5Q6wsHZ+3Yz4MtsFhQSz1kRb6z4JfGRKmqCHtK45n2r9PlCXYcBs72HjvmG+ATGgj1FnBoff8fFa8+negQFYMsbtd6LFZPRrG8zL1/RnCQP0ckZmbTSvt7Oh80xBNBxbY7a0bHXzvEFnNhlwE43T2MTIAlBpUIziLBUaFTsAHBiXaBXAPq3CNYE1YXFMHIvf/+2KGgp8MI1E4yxyTFEwgOO8ZmjH7guGBygBL98S0M5on3ZhCeZTj+sDC2I9KEtdMdlveXNMz2sWE36r01ewIWY9M5TLiE+MQmUJmecAcOtSWytLmbH1TwZbrsVUBoJSFDYFA1u4Qqwnrhw+wLVK+XLyXAqAtAAUN1gWmomroRyZGi0dpOeIJAwQ+6jNMA3FAgAfJ3Q6o6enmWw9QXq/x6T7iQLW+sznsukgdTQIGEvuNTaCEEwncsXuppPVsxYf85RZlhFYsrYwt2Icc83PuZSn92CB5JgAyIdonvYy0tqniBFTni1m6672mp/YCZnOpeDM9Td/r0+A3o85Q/4nIfPcVKAdTFDsureIVAuYbLlLpk6B0h6BOMyUf13hejgUAOrtw2XPLwVA72aunyRFDMgE5dBkvjARDiWqHmpshrsJgOM6t/9gkykYrAUVPu1SJw6LWBogGuw0SiYfZ8CATyf9tcan3nfNVQEQmMjGCsOxwEX3TO46+nrMvph/NDvGbwFwrCcAMjW5Q4AXBQt8ekoGF9Kn2GORTOvJlBE5dVvllwoIsJYwn5N0mwDaXEvM0dxf3ypbY8b9hZ3ui0a3fiufy3kq0lsnOksvo6RZVQo3ypJczL3tWQOA048CLrlf8nSWRmksYpOdT83C5CfApqaC4DCmvVoDLL0D0vp8PYnXpI601nfoOQseYIj25nl/qaT4r2pNn64K4MKssCiwRn44JpIdCydRRD4pTZMcm6j9qTS+5FhtZ2X0suoMXDDzlTUAaPultBFzcyuWVpvozF/gehKlzg9t2R20Sxnw+2OuW/hBUwmaB7tcFeREUXCHSX2jMHsi8QdluhUAitry02BmosJSWJYU+zSZkxbCNA+MExQjZAIrdpqc9mb92qEsjA+0RQpPujAjgZkk3xosMnt+aupYBEAP8+Bjo2gABj+Xyb3F3lfKzJ5ofjMTeAocTHCAi21y/ifApV+MDDP/s5f9pfwtcMxW0V+J3b3RTgwSe+aXa1W4/KgCBdJH+DSnvjwMHPsyZvyafK71YbPHnD+1D1CyO/dIzykrlAEmZk61+PezL5LCRcO5ZSjjHAfRfb5n828XEzaPuMJy3XOvLSVYV5DrFgBYZ/C37FM8NLi5YPc5Z+uAg+/ULPGYk2bft2ttmlG8Xqay69uZBM7fhA0fCialGS46b5HaJ50lJ3sNgJkGAVwESCxC4IA1bhX8qOeEtlhotemYBy5g9sawPrU7E14FcNYk0qu3dlEsBRoMRP5pj4+ujkALFGJLNauuf79VxL11/tt7zT1l+1tvFFjenrEEYPU8m6sbuEm1kiInUGjdOF2mTlXyjfoQkfqb9c4e/7+Zy2ALACQUEVsmMDNqqZM4UzIs2n3UnMA4xfmvsE5mJ+DZeuvZ3ID6fb3Ie1J+Wr7dY1rL9cLaJBhPj/9PhVKbFlgrc9DvTOL0ue3K6Wxp665naHXsx0IXGJPflQcrZNCD7wv4TY8FSx+w726RU1mDTY91YnyBMZeCxTvdnnZINha4tCMLF/CxVrL4bh7mupbhLhkfAR39YU0p5g4mnoxM+wAW0Gf2G0esC+hZl9hsKxP2/WTQLBPBNlYbpc58rs8MOLSG8oBe617ByAHxkmTsy8lsCwDMlBgf5hyVxrKEBSUVxkQI31FEu0qewQdoDRT/kQj00gjfkkmUib65EbwlQ7+nHgDIRGKSYggmz760FEDGpNp1QnYywARAzMs3pRtJEalzr3ZtwwJG/IU9Y4rVmahMQIBsNw/T3PYs7QS+QFH/LKzpXKkB0Dxgnq8p9eLBPpjYc4EqSp2iNb8ARE/6jbZa5HYs7EoTqU2+nqOt1sigftfcFXSSx6d/8u2spTy4l/zTJTKtc0l7MWdKD+hN3Q915HfORytQws0Gb7R5166ZbhmtBcD65IZd+zdbG5TbpHyPxm25yAiDoMls32JmWMAtZ6S1tunQcxnwwUKZE5jFlr4/TJe/BMOlbfcpFHIDNkzFXSe95LUEIuaiZyYPfxxGwn9Ts6Mp2CRTc4xUnsjRIjumFYVgPOrN9zXzkc2/L7BRA+A+k6ilHfUzdlQAff4rB6iSK58ty8W48TnzTZGHk1kwP872lnm4qy1MvTyOq/Z91js/jJdF35Pc3dvvQ8/nacvMSfOY7122wNOKjMw589C8kEqlUCDmQs8+fOlImPBUicr99V3r1xoChtPjz6btr7ds5ulQmeu5SDZrAZDwaA4CJJhdKN/SMBPTdwRRRJJbiwkFfPiyTGi0eJ8QDQQTXUoDUJFmQdPNMUd+JBrTfs7pwZ51O/OQVJNk30kaecw75jVH4T3LBOSn2XWqirFjxmB1Imi7QNIznPA0p4VvCxJfXDqvawZYA6A+W5zMFwy0d/shE0+76tw9jnP5brnVaZ/c+ajsVDCntvSPYabGDyM5dAq0PEom1hrzKrMZBPLMabe6ZdK5Qz3MFfP2tE8zyjkEnKbXpNZzW9RVFBZjpDyMC6BssfTMYwTFfmRBKEnNvkVBco1goq13t9QRY+1bbQqvAUCaWrSX1lzjy6AJCIY2sEB6o3SiSzQuABbNAiy26EwHR4Q5M8uZYwANKzg00TEDDmx+KqApbQNYM7lNGMwLqAAKJl2epgJsTCrABDwMOLZqb62Tby0ygD8XRctIKZMNCDKrbA0TZbRNEEuxwPbl7eUOBottlz+t3rooATr3WpvogMq/l+R6JYDy+WizdnKPYJ4A6JDMa6a4iZafaFNtE5m22yB3XxjbvMxqq3Mc9SPPLgR6CtMN6zQPz8rdHsAaOeAmcQ6ksSF3c4C/D1hL0ZGFweXj//2e7Fq3wqkDTgBOfkQHxJoL1oQ6eqLQ3jUvzSdrcJWbZCkA1lTewC6JgIpaMpUACvBAZVs0yj52SNMIBPBnyG3j2N11pHpOTMEAzxyqc98OFaxMZBV1r9/npxBJ9eOcvgRCviCRXJN/7jSPaf+cruPUXnsk8zj8ZIUUxiF2ljsYTFiLbtf9GRSDvgBvIEsbY2u29vGXLWVCJqoJD6gFQOTzGY8WBZena1uYc76hVmvhNJ+zXpQ5a+M029hSN9cA3665be6ZK0vuZGmp69Az9clCq+4bWgqAtZmCBe27XnFtR5e8b/HYPkPDW4BO0JDXlneKMoNsu8J45k5IXlK/d8jVDhn7WwEXhgiA+FnWgPzS9rS8h6VikzbHY7yU0lm+uKmlT+OZ7SVAsWFfmDwTlIVESQIlAS+KNF0M2CNLiNm8dcm7kxEolhwyZY1j3dgm5elP658lIlh6hcNblwBgHVVDYw/53bbudOv3kuUxcx27k9uhhNod0Y6RtDCR1vrGc0MCF0kC1hcgRDIAD783pi9hHeA5L5C577oMQU1WWe5O2kpOXF/SdJjRSI/6+BNlS1DcMg+4nPiiWXtIEdfT5SzNKQCy1UVlRAvZ6swrTImvL02t+t6IraJ0WwllfGdIYEjgihLAzqQecWk4YKAl4rpPjr7FbQLw+JbzxCYAhxUiRenT4+Zi+fDvz6UetY5b3q7HD68NrDhAJ19xmtNYfzPPKNDG17giACBaiDpmgd5+EkHlLXHicnjyrUlhIEB7fuWgbY3srYIYzw0JDAnMSyDTXURcs8jWwNxa0sYADt82FpWZEL4DIwQvWVWCeUxOqVsyK7jFBOocs8bvO71C0/eAlyh5Jswzl1lmjuEHatPAyC7gY/pKp/I74Od7giLTwB2XnYCkPEa+6Ne4oQCg6A4QU6Ho6K6IjGgoexrdTPt+ur1pfijGE0MCQwInLQHJ8NgPX530LKlTtj/y9R468xE2CIYBS1ahQJqcRSAlD3DXoRCisqxHQGmXEZCtT8DWdz5xwUp7tG2dZboCREQrg2/Ma8/kDi8gLs4AULXDlk9Mswbw3CUGAOGUyL6UOBF/wCcNqb5T/LJx0ElpAT4kvQJdJRgRHiheR63q9ATvpgN06lisGyufq76L4KQHf9Q3JHDRJSDox0eG+SjWuzWJ9NRXWubWP2Zt3gMigCBNBdgAy7UpQjIaRJHl4x4yiREuvnubHUSeWaBAESbJothndQJBIJqniusvNslHyXrFMi/n+9dpyZjp54PG0B49lRcl2VEqhTw7/5+3wuekEgKnIdBQOXJ5s5R0D5eqEBzqqcOjDAkMCZy8BABe3u8i+d+atbtHYrg1K7UKM8KUMESBDEDh+omtA4XwRlBEfqq0MN/PgAqWykzPu5pzx44tscxqbdo8jSijpdicJMi54jnoaouQHRVoqhwyhXD5BwnXSR7uNpCGgpKe1FE/c+0fvx8SuKgSwAL5wqxz5iDAUTA76VkY4kkkZ+fGBWaygCrXGrBjDmObdnTxG25x1uDsWB9Kg0ElOTlRTza0nQF5sY49eaiy/B/Js/6f6SzXxvOKTtmChQGupc6zHRkPDAkMCQwJ9ErgEACK4gib2+3gAhQJjkxhhXOSTX0iKN3bqfH8kMCQwJBAiwTmEqFzTyjnIppsT+BIe2mR7HhmSGBI4MxLYA4Az3wHRgOHBIYEhgSWSmAA4FLJjfeGBIYELnkJDAC85IdwdGBIYEhgqQQGAC6V3HhvSGBI4JKXwADAS34IRweGBIYElkpgAOBSyY33hgSGBC55CQwAvOSHcHRgSGBIYKkEBgAuldx4b0hgSOCSl8AAwEt+CEcHhgSGBJZKYADgUsmN94YEhgQueQkMALzkh3B0YEhgSGCpBAYALpXceG9IYEhgawk4cwAmvXLrD+/73gDAk5L0qGdIYEjgkARgkSP2HlkecrNbXs/x8nKu6BWutVwr0gGAayV48u/nNQbuOh5lSOC8SCBvm3xhuVfkRI7aGwB4NqePcXGitqPKXULlKoI8aDZb/KxyZYFjytzd4Hhxx5w7jftNy7UGbupy98JdN7yW8GxK7NV3XdyoyMzFO1crJxw7ws3dF245TEZBTo5kdwy8U81dtHPRiouIblPO+XRvhhvWtrq6sleWxs61Ga7udH+vU6Ffc3Pbno85zt/9IJ517eaishUA+s7Vy3n+bp2yaAnV5HM/yK5r7hY1+BJ+yWVRX1Auav7iA4fJ8oO4W8XR5QY4wa3uumPFLXCXWN2+3L7lKgITyS1cf1wWuysJ3AfhOXc7XypF/0xwF1+7ZsElOW4FcyvZvuK4d8esk5l7JMilXhgWuAt5LCzz07Mu3bnCTWGXiJDMp/tHxOPK/T09zb52uZXNXRuOonelpCst3A10GuXdyv1B7ix2q1wL+6PEnFKvuKbX6fTd5RAAugDZNXRQ2cGoLkxSoTtA6stJMBNX77m5ydV7Tot2pr+F7ALle5Yb5H62s3U66GZ5kzUvZcpPuDvAHQZPKsfx5+Ut6nTJyx0KgLhzNO8bsBgsoEMXvQAQ7AFgmFxOw56W1y83Vt08Im5abq26Wzkwdvqs9gAhV4++TwElC/qZBzScS6hcGejqQVpxehFM3tN6i3K7l8uq+Etut+M+1E6RL3qcPG5bAArIuFFw6WU6vkX+QNu905Sn+2dcr4ixXO5S60lryRrjvWNEuH2MApmyZq/kZTuugHV9oou/6qtgzTvz507lIjCX8aj31xZJZ/9LeR+Pvt66AMCh/uWXjL9552pIl5EBwF1X2e6rOQ85dhOkS4j+ttwISTHsGzfjYh1+cllfvkHR3GfP9Zi9ogJg7g627h7QwP5833wA4BQl1ohkdZd9AGgyAS5XZdIM/nxQEbpLVFLgAA5Q5E1OT48IQOfuUMfoa6RLlEyiVgby2mUxE66b6dw54lIlDEcxGDQ3ALBYDIY7QF1990GF0gMdi8cgY0pYKZBC+esLmlzIApAArL877TpvuncfiisB1OsCGT80lcvgFXWasG7V20fXfZP5ZTE+t9zHymQ9BBDGxIK4XzFn6zYBOmzIWLiSgPnGlFOM17fMzACyA5iUBNn5u5v73PHsDtXWktcWfnjpm8VhHCzIvIGs/paJTZn5MxVAfSWjZ427PmAnGAmgygKQ1NECELv6oF7yVLgDkjnUz5K7ax/Ik3L9pnK3rf4o7rbpAZpDsjQO5ihW6y5dBcEwnk84MJ8oUv3Qzrxbt6VNyIz1giV7b5c7xYVI1ob1jUG/tMx9ilvfXaqkveYgokPJbOE+MJfcLOmiJuv0RY2TMM1mV3i6jwh77C77APD6BXjcHwrUpkXlIjYWOOR+YFm0FivWojMWmElMU4js7LpIeVeDMSDP087qTnABUiamhWOhmDCK591a77Jni2da8m5T5ji6D3yYDyY6IPUt9QBLdbmHFFvEZAA5sNBPpiUNeI/CDGmtQ6BhgjB1ATnwI8utWQTmTfZ8WBjLrrFKeRhT4KPflJOrT8kYcHnXjX9zxcJlFRjbvPSaEsRCyH4XCHsHMJPXT5cFvMusdwmXiWwRMk+1jRIDjBacPrYq0Wk/AKhvKfoJ8GuTyTrAItQJ+MjIfAC6LBtybp2/h2RIFsCLDFkB7rlVN/lRkoB5H8hT7taFueg9YNTSpmsU18tTCqtmKbhzl0ytBYzSXMWkzH2+ZwEJ897cUKw140JmyAy/264xnJs/u36vbooT8JL7qzo+gqCY/4vdGPsAMC83v2Ux7YAcs/aqRTAGkaYCKiZKPcEMLDt+ESUtE+J9i6ZmntBEvkVTosfq1ukcQPJSHyEq+zR8LVdmjhvrtDvZYpqafmeBqMcdqQAck9VXbQCE6uBn21fciewmPYxTcTUour5lEejgjrBg9AHI7GOirjB1H6s+58J3N6u+aauJdMgBTvsDSc9in3kvDFlZlMDD/5kvvzXpZPp3MGUguMu/A/woCMrzwWWe8eH9brl+Vd+wwlZ2MJVz+rwwXovZ2GLwWZb4oHrHEgM2J1w2ZrzMbeNVWwn7AJCSMXYWuvnHzOcaOFQAGyUn0EOhA0tM8N4FaA+9j1RoC/DfJa/evh96XoDP3LTm5vo0/Y534RB3FNzpLnNBEOgssoaamjRQ+jGFAdXah2BNUj4FxSTGfIDj0qJumsjEcQ1n3g5v4jJPsQkarGYYfGdYV4s5Z4JY2BYaEx7oArg045mYWMeVKgajLy0Ai5E+uXTcALU6dltlZdyAt/4qAIS7YFchP2Y74KrlknLDig+xP4uOH1gAgdavQTb9MBba88sYURpZtBNAYzyUgEU/LYJnDyvM0N+BVCq3zA3DYmqF1yqn+jngzMnP/JsCjWALBcedw2XTw0Lm2qIPLCLgzqLQhrx/17rRL3PWXBMk4yKp5cd0pfjz3u5WZYrNGRfkxTo03qwXaSbcHocKtsn1xB3EBcba++u5ji74PfNXn1kkLLu5yO+0CoodsWD91QqtuSlzANj8oQIgBo/Qdi2Gnm/1PCvtAxCYIC3g1PNt8gH+JhFw5KvAPtP83vUt/lOL6MvLL3scu61tq4HneQd8IMwZrAtLmzJyWh4jYXYAtl3FWGKZ+rNrAdTtMIGZ2LVpmbld3gXY04u3yYopx6wygTFJfi4yVigS39SHXnYw7U+a0saj9rdhZEzf994B4K3jse85AIe5Ah9pOOYnU5JSsNsB4Oq/9mDY1k+CgPZiet7HEhVuGe+2mL4Un3HH9P1QPpQYX9khoKnZH1Dm1jjkl1wqIzKhFPL63ZY+TesiX8pTcFMbu8uWAJgdYk4prZqqu9HVC7UJxt/IKfvENR+s3p2CH0GbrNOo7LQ6fkVtAB6iyHO+wt7m1s56PhqDn9G8+lsWDZ+lSbZrcgm0iN4yPUREdwEG7cw01g9gZ5H6pkUpSlsDIMDHMrMIPgEW9VjgfE/JivMZzBXo+R7gxMox8ocWpga0AeA+dtsrO2yKssQC+WXNF4wTMJBTawSypV6L0zdZMhg2MDJesiQoA/NIW/i2sXByzXxEa0nwhUwzSIJUpFugpf6lz2D8jy/1kpdMi2MUfUn3yZo6KDQM2xp4SW9DtwRAdWfwhObnKKXBbGM5VhGZfUb5eEsUtKcdvo1em7TSO/hODjE/3860F0yRT8wgb7V4s+1J+zmpFaBjEtRmG/Bh9jL1LDQmln5YVKLafs9NwRwzTrsKvxjAE+z4txIIwMxE+TEZPmFmFlcBFl6b4RSTyOG1SiDB9zFJjKcGSG3ALi3uaTE3yXPLfaG+KWrIjUMe0qnesvQBCC5hIbtkpx7mpggqBYONAfJnF0spA4gYn4AioOPDNoaUAHePBQ0g+QvJ91CApGdeH3qWj189lNYUlLeqI7+TkfkbL/XflQ/5Dv/xLv/zbJu3BsAMTRt8YLE4OjPb8suDjcfVJdK1Ran9ioBMMIP/c65Y8HwnWCAtaqLvYldz3zn0+3T8JjMQEbRIcmucuk0IPlg+v+wLM0g0U184jYGZqPQ+cwhLYYZhLxalvDO+Mv7ANJkz+DQda2OBgUqn4EOaAqAgG/BjNgPUXt/PGvkBVYwzwZgvWZ+2VNQAy5hQmul31WcuB0qVUsR+MCzKRHYDGZAzmSIOTF0+USBorLdW8FMZJmOVLqaQkTFamtM5N0argKt8PPHGXNvlYplrw2Uh+K1LvUBpNmbAlk7lbC+WaQGZbPvMwKV9q/vQmvCZWh/zUQywvr9iaSP2vFdHDZlMTEvMwuIBbAIOJnGyqrpdmd/GDzWXP4YB88HxOzEV+UKxuNoflFpc5BfbZS4z/bFSYy94xbyxgJMBag8glVuKPc61Y2PxXfY5UVVBj3c6QpSTosGaRV5zDCxUAAZMMv0K+xOM4FbJYGFGowEPlipA4ufYZMLcAbq5E0S6kfYu2l3RMGDmA/cIy2JpbqdqctOAP2sXQkMTXv3IUgA0oPxD2IRB48DG+phFGkOAosbHDIZY7Oqx4PiyRNi2KHUQg5+oNcscIJv0fEq0vND+1uxP/7gZsEupHRiFBUTBmEjYaua7rZUFcAD+TEXfxGxF6+qSACgJnQbmhzUPMEdZAWTB71cDIDmZrBjonD91bR92vT9NUfKMucNEnQZpltSfKUeUH2BhBlMGzG2uEWZ2po1No/fYH5kZSxkKFJZ/t/qfl7R36uvG2DHily35WMM7yTTNA/1dmtqU+JVKgrXVnSe6BABReQyDGURYNIeFn4OkYZn46u/8CYf2cDbI7AqPZPa4iZJOZfmCWxTsgHa28FvN2Nr01wZbleRrbV3022Iy6EoGHtRnAvDxHWviTvtSj0ECIJlJJGaCC2DUPloMkNlnJwOGuOXRRuRvVwpzkkNcIY9pZJCPS4DlHwvoYWqZG4jhprm+ZtwQAH5NbgBzUy4jMx9bT1Nfmol0K2uHsvT/Un0oHIEY7hbb+gSfjpmGQm6UkTETGKLAWBTHmLsp03SbzOWuto6BZPVk091sshcAOXNVAuCeU5JUDSCHvEREk4gvpQbAaXSwtWOHnqsDAbvSL9bUkbsrfKPF8VzvIjCJmDX7En7XtMu7tW9S6ogFhLHKgwIwdQ7e2rrm3s9EakDDgc/0Z9YAufRp1fmQmeKyZkfHrjaZCwBVmgeFBVwADv8bFpYlmQeLAUsVMawT6I85btN2Cy4xN40hSwHzFITB5DFRLJGP0lxcxGzmBq8AnjrS50dhseoos2P5ZOXUMu/5qXu2vR3qTmYi8DfXvvAGEfSZwLQn/xJtkY7d2ulvAWTuWw2A0+jfXMMAij2LvkWbTneV1JFWvhEgsOvQgrl6dv2+Bhi/b8krrKPFJjTzYVdUc0l7pu+8fQlKMJ1MVv41jIo5iWmcZOHfSxMN2Ij8Mmf4rnIBiURLWlfkK/KHMv+W7hKa9o85mwnGWIAtdGTBv1jvDqC4PadeZnvuM06fG3PMXNqKBc6NA9bJalJvFnMH2Nkxk/mTlMwxDrmYBjyY5+o+tLtprk8tv0/3mMAdt9kWQJs+Zdv76iyDlvY0+wD5dCw4Z9ApbG1mmEknZE+jmex8UHVumGdb95l6FgABHROAqQIE+bnqPbR2bGTC9da+kZrVaM9ciL5OGvV8Jj37jrbZRUOjYkgAYG1JhcM5bbApB8pmuv1sbT0t79dMWTBDOpI+15O6PoTAN7d2DWiDAtzMUTJhfmM19teaT5inOUVB59bN7B8TkMmJOSj8lRTYVu6UQ3I0d4A00AVI5rr1Vc+pree39qhLWlS6Ufi5ZQycRDSewpEWpP65lLKWOZjPUKoCl6zTLr97qwnM74f90a42TQNAzIcf0OT37/Q+QQ3QAAAgAElEQVQ91YmUGig6OD35Y1/nMD9swgTO/ab1s9prMtMgNOZWNDrr0E8Lhz9pXx4UxzY/oQMB/PBBKNOIbDqzKQiDbjKvLRkAYeoKgjDldm0vW1vP3PtYOOAQgFF25UkmIAEpk50lQAZbpVXovwg18EoFwAfJpOQSsNikcmA1lOk0gJN95HsT5DGfFe/6WbONc05+h36fY2w9LYpsHvi4+U0WlILSum9fQIzll/vw+Th7sxuMDZ+r8agT5tfIKt/Ng1LkTrZizWXvtgJgHhtFowtd7ytTRtS7D9Z2JJqQH2RXXlYdafUMZrUFjc7+SIqVdwXYdkWAmVwG3/YdUVFpHxY/x3vt0Pa9PFKMfyeP5lo72Omz4hi38Ot7E9Z+u+f9nHCiu/vG2A4IPkHamUKznXDLsfJdisrOo2kCcybkYzUte9JrpX3MzIUWGefZeC3+55bv5TNcFMAvj3Pz/63ZE9YdV4aI9jTvtKUNXBLWjfQnc3jRwQUHKsq5xiXUdehIKwACBpOZ1t/na8pTe9MOr30aLUJK0LCw7fvM6Fi+W2epZwAAAGxdmCV5eCswlACsMOVFtP07HcUZqZuCJfDDVO1iwFK2yHXLQc5DP7fyey6RX5q2h7aqZaoHZuzvW096ARYBjfogh0w74Whnxraec2i8mL55Ic+xAg9zss78OIGczO+ce2f6exYJ5osB53FWmbjugOAs5rbnWFpcAXkc3L76YAWzmYLoYlnlg+aMNDlAuqUi9PnM64RRh05FukLfWgHQiyK98picVMwHZ/IzbfijHM2EHjNzCJ2TmSmy5IQHPgqOfRvoCQsTZO6Y1Hxq/Aec78fKIZuaCSk0qQG0c4JuRrSwG//HrDDRcrsVwOQ2WJuWwpTk3MdkyHZ6FFjvAtni+Yzu5jFVU3PIgnJ8k7Scfc+sbQd/KGUrsVhGAtDgPsFSyJ0ro8eMrQMDvZbL2r7k+xmUwf74vnuBggVmneT5eqLKyAsFxBUht9DaZEH4nfmUJ2f7f4EJ5EKifK5va5zy5XvncgKaPSfD1FkS1soS8JyTr34hGnmARMuR+pd9swcAPZ8HoQKoXceNE5qkUp3EFHsHMDuqXULlAFc9giBYGb9cc+fmpHbg9xgBuu6YLOae7VKYHw2WhbCZ4RY6zc2vIZXBrgkR0q0O0azrIYeTctIfEp/9tHyP+6LkFhYAIpfFp/U2jF+CFj+zRW3eiWgu3cHAxWE8LXQ+LyYjoDCW5sC+fdMNTZ19JP3b3C+7DreY/UBJSxMQoizN1doP7X2BOH7j+qBh9TKPKXRb76w3J/JwIyAceRIN4uPdDIS2tMcz6bYix619mnUbEC5rsGv7bS8AZoUQ11ljOsR5LKmV5pGHtdWG8lYBn+ZzeXmPBcPc4miXzGqx9LCPuT5kygn2t3VS+Vzd099nMjGXx76TbnK7ni16WNkWOyx627n0eZFjbIerAZt0cATlB1y3cGXsa1e6ONzRgWX1BhmS0OTJ1pnYDLi4H7TfWYBbBaFa5IswsQr59Y9x1mLdhnTLHDob8wptXgqALZ0fz5xPCWDEmC8z8xg+2PMptfleURqSoymMrU8Qmq/9OE/wOQJeoIsk8JUfo1DGWC+3kyBL8+GoAwCPMRzjm0MC/RLgcsFe6sMR+r9ydt6oT91hlnJNYKWO6JftgeEKWpxqGQB4quIflZ9jCXATOaNOIMiJRYqIOB+53TL1Re1yawU+RKF37Ue2Tp29yJ/KVydflo9OJFca1lY7a7YcDsEXwRiZE7tK7w6xLdv2mm8NADyKWMdHL7gE7HixK0FQTNAg/Xm5+0NUX8BBOpUoq+ivZG5Bv6mPTkBJ0FGggh9NcDGfscWP49/uF/69s1QStPWPX3OJT/Po/RkAeHQRjwoumASAGfATOZYCJVDGBJQIzleVh+uKkAt25P55ifWCLYAssyfs/ZYOIzUlr+qsxQkc5ebJnT2J7IhzN5QDAM/dkI4OnbIEZEWIIucl9dK5MD6bCEQqZUrYN421+Te/mIMR5Lva2YIpMZNtBgBs8tsER6Z5r3koiEDUVmdhnrLoTr76AYAnL/NR4/mWgNxEUXKRSOaqdBobBXLHSn2aUW4YkHgtbUraiGRhbE9hPvod3yAWyPTlA7QVE3tkFmOal1Ka0Zka/QGAZ2o4RmPOiQRyRwbw4v/CCAGgRGtskIksVxQDtOtCYTpLvsYg5ZIKikiNAahOOpF3m0nJnrdVVO7pMH1XTJoBgCuEN14dEjggAWBnVxDwkt6C7cmDc5amfdyuTsX6RIBtI7X7w2Z+O2jW7KIag9IhgQGAHcIajw4JLJBA3rkhYCFtBSO0LUy+X14Az9RlNguEjHKCEhgAeILCHlVdWAnw+zndxaHC9ucqcvccLeeeZoe12uJ4ktvULuxg1B0fADimwZDAkMCFlcAAwAs79KPjQwJDAgMAxxwYEhgSuLASGAB4YYd+dHxIYEhgAOCYA0MCQwIXVgIDAC/s0I+ODwkMCQwAHHNgSGBI4MJKYADghR360fEhgSGBAYBjDgwJDAlcWAkMALywQz86PiQwJDAAcMyBIYEhgQsrgQGAF3boR8eHBIYElgCgo7xvUi57cdT3tNyxnFW29FL0MSpDAkMCQwInIoElAPg2EfHF5YKWPIwxL3W+Qznxwj0GAwBPZAhHJUMCQwJLJbAEAKd1vXZ1ttlTI+JTI+KvljZovDckMCQwJHBSEtgCADFCx3270MWhju4CXcL+Xj8i3BXqroNxQORJzYBRz5DABZbAFgDoyG93Hzjt1im3/7pAno4M/56IcGpulq8uN2mNQyIXCHS8MiQwJDAvgbUAiLW5/s9N9Uxfdxn0luuUawGdlOuiGPek3j4iPjoiPvGM3nrf28fx/JDAkMAZlMBaAHyLEvF9aET8bKfp68JoF8e4AeumEXGfcv2fi2ISFH8mIr6hXB5zBsU3mnQOJeAKS5bMx5Vb2Bxd79+OrB9lGwm4zlPAVBYJeX96RHClWfdcaK0FAZOR8inl5j3EKW/Za/rGGgAU/Pj8iGCq3jwintlU4/8+5Po/V/tJq/mKcgF0be4CRfejLmWWnc05148bZz//Xf50NaO7ZSmfUV4tAbezAboPKvOO8nW9JQXsWss7RcTTz5iwrlqu2WSF/ceR20YWru18ysLLm8w/cvzsiLh1uRC+bvKPFv//Cxv7ccOI+PqIEHh1sbzLprrLGgB8y3JjPQ0peNHj+0uG592vi4g/3MEe3Yf6sIj41dLB4QvsG14L+n7FnUDJ1OUx5U7al/Z98ihPG+fbRsQtI+IlEfGu5W7cvy4XCS1xqyxpKCXOigF0eYm57wBEwPeNxUp55ZKPL3zHIhcU5Gd/8/INF6R/fyEP7xkRH1PcRscGQCwNO3tQRNw3InrkcPWIeHC54xjZ+b1yMx78ETBN5dwqpmsUGfiOO5b/vfXF6XNrABCa3zMiPqfjcmb1oakoK+b47BmzmYlM4HyD48rA9lF+p4h4RERcLyJuExG/0f7qiT557aLkXqfcofsXpfb3iIgbRcR3dLpVljaeScaN437eT4oI7C+L/zNf7xERf7m0gs73uIewJIDzZQXs7l7IQv0pYGjjwZ/MfF9w0TryXZka/9zZnvT1p9XnNrvW4ka8e5W2C3b+cuuLB57D1LE/+IP9Li5LAZDWFqygde7fUTvkpj2+NiL+tPG965dBBpg9LLPx812PMTksFMz0GcWk7PrACT2c2vo712rII7Y3FxWTyHWRp5k8/xER8eRi7ppnixnFRvKi+H8wIoAHQH5RRJAXdopAABLWE7/5jzXUCUTdQQwsMMpXNLxTPwJAuauYmqyHnjS3d4sI5q3y8RHx+511Tx+nHH+igPgnFOtx8SeXAKB30E6UlmYkmItSBH0eEBG3Ktrnhzsnw0nIqQaWzytgfRL19tbBx8uU4/Mxj/6s9wMbPp8AwSnPx3Xa5R0LAALlrynm4tI2Wa9IB7a0xFevXgDIF88H2KscPjQinlYY6Feu7Iu2YMZS7vj+KPrcjbZIPksAMBOfr7YRoi9q+Cm/xKfBJ8TH9vxTbsu0eoyZu4Cf1WQ5i9HLKxUFerdiQaxd5GuGIBWGRc6cfPmaj23wbhIMgLNFAPDKJdjF7OV/6wWwNV3iWnhkSWfbYi4KxDy6uCoEpwBqL5u9XH96AZAP4KMKFcYC0fQeOrxGmGftXeYwU14Qp9WcP3YfUtvT+N++IjH92O2s946fthWRCt0YrnKobyS0ZH/8kD3upX3Vc1fxmTFd/3yjNrZ+hhKGEc+NCNZIr+9xl3J/fPnP2y3MO14FgKJOzD7OWXRYWsUoZ0cCNCTz4O0jYrV/5IjdOkvmL/+fXUjMqScdsc+tn+Ze+ckd0ejW98/Scxgs2TK/HxIRotosJ6C4ZMts+rZ/qeQRrs5i6GGA2B9mIar4ySWUfZaEPdoSca1i/r6givZxmmOpGIDImUTzlsI0BFSihlgJn6/0kLWMvzaLRAc55nu++Xol983i4mAX4WZCy0NtUcgCC+a9NA5/CiRwaST7E6i7a/H12pN+kkXb9EWQ47T9oiLGovTXLYGY3ypzoDUd7Soltxeg+5E1IpXHPDQnjXsPgNW+7SXzZuc49gBgve1tbFHbdllIW5GmgLUJCrxVSRC3AEVHLYqWvCsTi89FArngFJ8PoFCYDp8REf/U0HRmE2Xn2LNpYUap51kN3zG/5LDx17AeOPW1zeTna6NI5f61Fu0ShOKrk4SvT0wh3wfuovOvOvAxEUQLUFt2FX3jM8VWWhNy9ZHflYnnQJB6PzvTU38Ptaluh+2f2JG8Wn3jbhI5fZ/C7IH1XCYE4JIDSu6ixv4UATaeLeCVwEeZynS4d0nFkXLje6LPLYVM9AGI/nyZ31JgKEDKRhJ+TwAjzxyQ07pZsKoHAGlek0zlW4SzW4R43p8xmPIoaXta7RfL7gPpK/LPehzHNyt5cxaghWyCSZEADhRWa0SYogOc0pz4boDN8xYORALyr0WEPDb5ahlx5UJRTysj1QQsQgqEtArg4t108ttS1Qrw2Z00qabJz63dxdgsZs54gScgwzcsum2njXXym40fSzbK7/f3BfC4MwAe5i1B3Jz4hZnvSSkC8IAX4D82IrA3Y8EymCsAy04hClmbmKp2bUlU952WAkQ/s8xH7bXt7W9KKo98yud0Rttr2ZiTmxGwHgB87yJMAtapHrOlRWgX8Rn7TYFUraGXhPnrqCpty4STVoJJPi4ieiL2xpnmBqRAEIC2Mph6DK9ZgmX8kViapHeAgcFhNIC1N7EY0Ii836Ly1+U3segeAKyPcVsaiEmAt1spZZ4+vF4zDeMCnMYyo79pEhsHQRF1tDLm2tWAGVMYvRHgVBC953xmrl6yYaDHF0jh8W+SVw9+5DzGsDHSzeIPrQCoAUwHWoUDsqfxFxHYWvrMRMgtV6nRmHjMQ9qzlbGpi8lDU797BTb+P80Q/jEMbM58yu2Hdy7sb6mmxSIBpzr5Dplu2JoFAZCZU70JuSwQ37SYzEFywiz5/R5V0iF6djkkUGG3SwJGNeMGvNIzFInd6Stv3YFT+7cwr8yXy4iwk5Ju3Lnf/r0i4olFUQDjf2yZlNUzwFdSuLEDwNrVUuo8YUxdxJ/VuOaqjDR/uSUkhm+WetYKgKg3nwvNlNuVWoQxntkvgWQzcuFyy1cyChOHadWSNgAYsKpkHAksGbRST+sWpHcpUf4brJywtcZm4uufYl+t9BwgAZSZixYY18ocG0xWYf5hJsABc+M3s5UO+LVul6wVTQ3QrfO1ZtxMTLJntqbM9bNnrWRUHCs1B2RaKMnAuA560z7ImNx7wKvuP5P7R8p2ytb54/167CkJvmvMVr4e05qbp5dAZTQZCwakPb7Dg2PaAoA6xCfFtPLnKOslkOaJiGNudcoDIrA5UVuTpEXeeSQZh3nty8otSBZma0Qxo8i2Ynknd0WYA8wOAZaWU38SSDFOgQ4+yWQG/HjACuvhp7S1sOWb/EgW0tLtXPWopWxEf1v8atMRB3R8dRiu94E336bDFCxQ5r7AVctCr3M3a/9WbaILhKXPs2X2ZcKwtJN0P7S8l89oE1ZrvI2dzI+WY6awRmY6l46Ah2/w/ZER6xELNR/+oKMxKWvyXQrme6ubA0C/N/E4YzeLvHR0/rw+yixgspqotKJDC5hNfGMKE/EuDVTf+AAUQIm1JQDmXm3+PD6TlsmrXhMYYxSF5Iv8uXIm3heV6DG21pIaAsyx2H8pAP93hc3wAWE4/JN8eQCt9RzJZAHaVicIM/vJgIumtWDXFiT21uIa2PVdfbQgnUcnuk1pMVWZitrauum/Nn+BZgJnKhF1i0qzBn68oYMsAnl3QAhwOhQDANmD27orqAZlxAcGGMO5YhzkUkp3ccJPtrcGVPOaP7BVOSR4CpyYy3MHP8y18XK/nwPAPHaG83RcdtQl2tmHLRxa/QOKWWijOb+fAbconYAzV0yyzIzPZwEU4JHCAGQcGdRTzAmgjGmJUmsHE5XjuiXPTl0WNY0tYOYbmI2UGiYRZglYAZCjrloWgm8mIPADMQ2l8+i/H+4ZTKOlpPLBjGpzs+XdQ89k3tvrFh9ua7AimT+rQHvy+K865QeYCWS0RMxZBMaLjKSsSKsh6xbFlf3TF/5pVgWXBRN/7rgtwGs+m3PGlx+5HpNpCpNovnm6r3xI5ToxFymrlv53jeMcAKajmMY9zf2aXZ26QA+LtAoAmHAPbwhyXMqiMVe5C/i18nxD/Qayrblp+s/vKEdSgm9Pasch2dX+1l4TnVIQ3MFu9KdVIRxzLJNtq6MnGDfXJiCor/zeChcIn/UcuM59d/HvDwFgRvJMkiV+hMWNGi8OCRxRApl6hKlQ7C3JwXPNqf11l7qriILA/vRD0IEfz+G0WxWZAEBV4G6zYMbSxh0CQMmP7Hn+h8H+lkp4vHeWJFA71HuSzOf6kAEazPJzG3fbzH3z2L9nsjqqiqnsdHc+aH7Lty0MmQm6ND/y2G3f7PsJgBgeJ/LLyuDRikL9IojSGDbLu9ms5eNDQwL9ErDQBfTkEUp/2YL9pZ8cYagd//2tO9k3mN7yTQVM8pQY4CcqjyXzHfJFw4BzW+Z8gGe54/wJmKmETzlGnMiu51Q4fEU+pSe8uNw+ZzeEXDIDKpLkXYGCUS6OBCTUimRz0G+Rz4pRcvwLUjgazZ+9uy1OS/r8fMzROqJu/YhoC+CIcAtUnOtyKQPguR6Y0bnNJZAJ41JwRFRbindEmEXFJVvLcatPjM7ItG14S09bbmnHMZ5htvPz28GSgRcsFimwXU26yqn76I7R8fqbAwCPLeHx/dOQgA39LIPcGZIpGMxVOyRaU2YAgjxDOyJEm7GjTNrOtA//LzdRXufmaRpHFJ5tjtJlRGLlYmJ9zGE5qUD/r45Y95n59ADAMzMUoyEbSgBTywRjSbmSu0U3e31afOOyIICbfEqMyEkncjd9kwnpT7mYZyF9pVeE0olEY0VlFQn4gjitp7701nfmnh8AeOaGZDRoAwnw9cmLZKIqciX56noPBODjEyywFQxjAhjpXxbxPUpy7gb9H59olMAAwEZBjceGBIYEzp8EBgCevzEdPRoSGBJolMAAwEZBjceGBIYEzp8EBgCevzEdPRoSGBJolMAAwEZBjceGBIYEzp8EBgCevzEdPRoSGBJolMAAwEZBjceGBIYEzp8EBgCevzEdPRoSGBJolMAAwEZBjceGBIYEzp8EBgCevzEdPRoSGBJolMAAwEZBjceGBIYEzp8EBgCevzEdPRoSGBJolMAAwEZBjceGBIYEzp8EBgCevzEdPRoSGBJolMAAwEZBjceGBIYEzp8EBgCevzEdPRoSGBJolMAAwEZBjceGBIYEzp8EBgCevzEdPRoSOM8SeJOI+KyIuGM54ft1I+Kby70t3f0eANgtsvHCkMCQwClJ4C3Kfc4uu3pauQ53VVMGAK4S33h5SGBI4IQkAKs+o1zajv29fIt6BwBuIcXxjSGBIYFjSuD/RsRnlus6XWv69K0qGwC4lSTHd4YEhgSOJQHXjz6u3MjnQve/26qiAYBbSXJ8Z0hgSOBYEnDJ/RMj4ltKwONVW1U0AHArSY7vDAkMCRxDAleKiK+LiPePiE+KiBdtWckAwC2lOb41JDAksLUErhMR3x0Rz4qIe0fEf25ZwQDALaU5vjUkMCSwpQQEP740Iq4ZEfeKiL/f8uO+NQBwa4mO7w0JDAmslcDrR8Q1IuJTIuJjS+LzM9Z+dNf7AwCPIdWL/U2T964R8diI+IeLLYrR+wUSMH8EO6S7YHxfERGPioj/WvCt2VcGAM6KaDzQIQGZ+ibvr0fEwzveG48OCdQSSL/fT0TEN0TEfx9LPAMAjyXZi/fd14uIL4mIm0XEJ0fEn188EYweR4S9ua9YKYlkgSK/nxgRf7Tye3tfP00AfMOIuG5E3Kr83DMinhoRbxwRNymbndn9mMT/HEsAM98lny8s+w+/PCIedErtOHa1bxARty6mK9k/ISLuFxG/01DxVSLilhFxm4j4mPI88JOrJWXhLhHx4obvHOuRm0bEAyPit0sU8Z+PVdGO71675K2Z1992ivP4mF3G+rk7cuyndVkz942IV3Y04s0i4vsiglKlTF/W8W7Xo4cAUATmBiX68melEyY10OLjeWFEfGtEXDkivj4iPqcwACczHEpUfLuIeERE/GVEPLl8l8awUK5Xoj7+VL6zANC/N/bqtSLiPUubtU/710y+q5WB+NACEM8tJh7H7DMj4s4R8YLGtuVj6D2wBzTvMnn3FhHxpIbvASzPvkdEvH1E3KeMi/ZIFehlX3ePiIdGxBdFxMMi4q3Ld0zcQ5NP/RQDH40FcI+I+OLy739q6Ef9iLH7oDL+/1HmQ+1DvFPZB6qtLYDqexbn7Qv4/EpZTC+pKjX/Jdk+JP5/e2cBRctRZe29cHd3Bh8GJ7i7u7sGJ7g7BA8uAYKFQAjB3V2Dw0DCMOg/uPvAIP/6wimoFN1d0t333r731FpZee/d7pJdp3Ydq2rpMDtq9bvKflMH8vEoSbTxaNOAjizpsZIeLOnFFXXT59uZ3L/TfGBgyVzcXtJ+1lbpmuD2FN5jgzqzpOtL+kQ0RrQt5uyqpnS0yDNyx4YJduB+BUmPk/Ra629t9PY/7OTHl0ymat8vnsKUAGHcp0g6q523AxQWKrsXJMchZBbbcY0YcFBeWNIV7aze84x8EOCScm4DiZ3yN5J4/wBJV5b0VIsCvbKkIkkQNovkbjahR7Urcth5qAshLxUacECo72V9OdjGtZf9P3QJrenNhf3jMRb4C82ngVB+1pI80TIPlXRDSV/J1AfpcBtGTJ7MD3MAuTJW5qU0X4poG5hfXNIjzOfCpsZCpq7vFowvZOr/VtINJCG4pQUyx28IgZ7S/IdpwutJbTPkdyKD38hUzkIHI/oVCn7JuF5kH9nmjCnkwoY5VP7NFjX9RP6DZoOcoQjsYY77Q8wMxIn/Y0lnlPRDy2XLYYI1xFhfZ/OB9cO5V4gFMkFGWCPMTU47h4hOZQQcFAmIKpVZ2uOYGdo6cli7AYQxQaTIN+M+jW2M3NjS4r97uK27FgUjh/ERfh/SACEBHJDs6hRYeH8jBjQrypuMWCAXCsL06YoeANa+kt5mWiW7c1B/IeHSxcQigpzIGeKsIMdmENi9bWeCUL8s6X0DfWPRQ/6Xl/R70yTD4wgQQsIuCib8x2aAtsWfSwqaGvhd2ogV0oJ8DrRNhHrYXHLRLuaM7HieYyGgYaBJc1MGmxGkRX9LzfVzSoLgIU8KGO5T0I94zEEzebtpLz8qASR5BgJnHPgRUyviemZmoXkPzWFXs7wLoXw9kSewZ6ycMsDCGSpsNuAJGX3clAHehezYkHDWv8dkEGsGCwl5Yhy5+QztMg+MDxlk80ITZPNHdiH9UkUg1Hchkw3kCovg5dan2D+L0hDIBgsMgm0pcAV9ZCNjE8QlwubeUnCpYFGgWKA5z1qGCJCdgR0IrQShQ7Niclmw3zem50oaFi2qPmYdAJSWmGDjXSksSPx/pTsSzlIWDzszBPPhpBPUyQILRD3UR0wXTPhwAPtiRtAsIBYLZhn/p29XMsHPjZndmM0Bssd0RlhYdOz4bCJov7WL+ySmhRN0KDWd48XGgmIckANzx58ptX2BjCHMu9pmUELiKV5BC0RbSn0+QftjYSGD9K+moAUx1stE2g/t0WfkBHmu8TFD9piogUjYcNGg8YOhLFzdNk+06VItPB0PMoiM4JZApiEp5qeUTOP6eB9F4B4mx2zcwbWAuwiCxK3QGmhA88P8Z+NCttkocOO0aH4oP2zeyHTteqiRiX88O0SAYUd+jfmG8LtgJjG40DlIDNMY7auUDELjYedE2wqmHzsSWg27EdoWO2xJYYc+yHx++Hz4cyiQD2YLN0gwQaUlmHWYXZg4LOxgHtzKNED+/4OCCtGuWGhopWi1kHWYbMb+QdNc2VhKCvPGwsNR/C5J9ANzq6TwLhoKphTvQyq4Bvg3FhzaAnWXYoW5g3aM2cm80R+0XRZWqT8ybAQ8jwYbFg8ywubKpkb/askKPGJNChnFFEYzY8ws2lK3CHUFMoZUwAj/Gps+pIf2hNYS/KctWnCYP2Ti7OYrx5cGPjXrIZaDoAGzcXCTMq4BCpsA/l5IlfXLOqwtrH/WBQTNOoC0MXtbS9isWB81LqvW9npPgoQwNIsfzSUsLrQetI2w8FHzIQcEAHMW0xgtp+SyQupALQ+LkAkKvpv/Mq0TQmRHKCkQH/41FhBCwyJisUPWFCKbpTs977GbMwm8x9hCMIBJx+GLKYT2VlLCAo/9UOHfeB/Hdo0QXtTMA8iHnR0cSwtzi3bCuCAENCE0e/xgCDIRU/5cqm3gJ8b0Zedn80LrYdHdyBZcSdQVM552aR9thXJB21z5Px48jEgAACAASURBVLghe2gs1MuxKGSkpMSJtZitBLII2DGn+OZqCgoAlgmySvu/NLOYIAKkmPoZS+smsIh7BE0MImLNQSxgF3LicC1B2GjcbC5sDCX+WXCD8NNNFquIDQXcAymW9pfn4k2Yv6MB0/9WHyLrig0QGar1rdf0+wjPphogqSn4IBBgBOclUVQu+LAQGnYSJid2NgfBiiNMfR1jsJAUOx2Bi3DBYeyPQiBY3CULiHaCyUoEGXMMzRXNjzb4e82phNhsglghP/CA9FigJ6pY3PQtBBrQAIMTH/cCGwcaFyZoKUGTJgTRkx/1ATPFahYy5hWC+lV7n/6hzbCgiJhDRqXaS3BjgHHQUJAp5g1SLI0o4jxHBiAQ5AHtG1LAr4Y/F3KhsFlCAjXjpT8QOv/hxyb7gGg3WkZNoR42/7faS3HACF8VGy0pN8xJbYGMGRebPWNFNuIxhg0PUxuNExORywFKrA/cCsHPHCwZtEvaYJ5jBSfXbzYAxppmL/AefrvYZYXGjl+a9VMiB0GZQmOPFY5cn0b9nhIgiwNBQTtDu+HP7HIUSAETCcEJWhnPAyALCpJJfW9p50iSZKEx2QgjZEIwIGgbaHz4WDATa/0SjIWFhD8Cfw+FvlIP/ruaEnyKqPNMBv2mn9SPz4wxlKRixG2S/kN0Fqc2ZB1KafAjPI+ZiSAT3aY+NO5SzTbUgfmD1gJRQeYEQXBl1DquMQHRXpkv/oMcMFtJY0AjKL23DSJl00ULJpADieCrom8sVKK1mOxoiC0pEcF1A7mANzJSY/qCG/IF0fM+m31MHKwXtMuSKH4qh6Fexs56IPWly39GpgTr7wS2LpHtknmnfhQLsEN7jgtrA/kpnSesFhQMNmDmhUAlvlD6hI+SeWJDJzWKwBAkyKZVkscX0oaIbqO8rKSsIxGagZI6AOmVmlk1YFA/BeEI/9W8H/yQkEPw19W8X/IsCxvtGi0HTY4k3SUW5AetBzMagicPDuKDCOeY21aMIHzIBYslDgK01rfU94LfnQ0YPzkyXkJOYbxYH1hurAuIGldQGkHHUiLdCEWGTRaLsISoaQNLBI0VMuUGmJCi1GpWZ+dpHQSY7dSaH8A8YAdCbWcSa0zn0q6TaoPJS6Bhsg+8lDbuz+0sAsGHiUW0iRsv5IlGCfHhbmIzJX2tlECrJ9YJ8IiQxY5dHO34W6YGP07/acnvqp5kf8ERMARCyg7R6hrf39YC6AR4xKkNDmhOqMx1CDukFxFJJIJamm6ytULoA1sJAuFYJxYOvr/Xr6TVDW9kVwmQ3EAEAQ3sEhYRJfpJFjq+EXxyY0L6Q9MeTr/g1CcYNJt/Y8Nlz7u3WgRCOkztUcnV9nLFre0iAZLqg2kLCeIYx4kbcgZx3hIVgxhrzvjWTBvROKKFROQ4gO/FEZgbAYIXRJCxPloTqufu41rq30UCxNFKGgu5UXHaR8iXCsf8aqJjpZMXjnyRUznp901LO+DP7SQCJLxzmQJRX9JSWo6pbSVwu0iATCSnCzB5yXPkDCSExJ85b0o2eu1501LhII+QrHuiW5BwbS5aaTv+3G4hQGIyeXlcgEBOIjl4FNY3OZnksBJVJV2pJY9ya9HcVQJk3Fx3RcImKSkIBSYCp2Dm8smRn4jPj6NHFLL4CflztGqTcua2Vti3eGDhtFJ8Uw4yHq6Vw+XDcUmXs0QIdpUA17EWwvE6jnkRYSaRdOoUm3WMy9tcPwJYFlguXGzB8TY2d47m4dZhw+WElpNfxzw5Aa5feL0HjsBYBPBrcxQ1nHfmTDVnqDm26W6WAXSdAMeKnr/vCDgCi0XACXCxU+cddwQcgbEIOAGORdDfdwQcgcUi4AS42KnzjjsCjsBYBJwAxyLo7zsCjsBiEXACXOzUeccdAUdgLAJOgGMR9PcdAUdgsQg4AS526rzjjoAjMBYBJ8CxCPr7joAjsFgEnAAXO3XecUfAERiLgBPgWAT9fUfAEVgsAk6Ai50677gj4AiMRcAJcCyC/r4j4AgsFgEnwMVOnXfcEdgYBMLnNkOHFvO1wxoC5GZZLvTkYsX44sWpZ4Gv2PNBZb5aRTtzXVA6db+9PkdgFxEIn9p8gSQ+vHQ9SQdICn/f6Ou4agiQizxfbFduf2mGmT6qpEcbgN+RxIdcuNfsQZL+d4b2vEpHYFMROLGtgxfN0EGuz7+93R04hpzo4yslnaLjE7LcT8gt1HwBka8ubuynX2sIkFuM+bbAtSV9coaJSavkBmU+Tv4YSb9aQXvexHwIsOj43Oh5lqIZzAdFtuaYPKY2JeesOzuwwgdCHy/S821uzO1bmrY5hsAP704NAWKaHiwJ7W9PSb8uHFDrYxDgM+3jRf/dWom/t3YEYoE9lmkNaAR8FMrLvyIQNCu+5zG19jRn3VPMZdgo+TYPn6vlezkxBsHXOBkuNQR4dElPNm0MU/UvU4x4oA7UdL6feztJfKrSy/IQCAsOsoP0ggAvwj+0Rrjxq6HlzPHp1DnrHgNZkBWID18i2l1sOVA3ckN5qKSfjWksvFtDgLwDKX1Z0iFTND5QR1CD+ZDLwyT9cub2vPp5EOhabHe0ANckAjxPt9de61R+uq6BzFn3GOBCMCXW7lJfKM9Q8D1OUmoJkA7wDd0nTNJ6fyUnte+c8lEXfEdelodA2MToedjRlzeK9fSYhX9+Se+Zofk5627tbpf2R10xASJPWJ4EYvmW9ySlhQCPE6mik3QiqSR8P/d+kq66Am1zjjF4nf80X9jE3N9XJxEsdjS1L9S9VvT0nHUXdaDjoeAaSYM+MQGCx9Usutzazr+8V0uAdPTqkh4+ow/w9JZrSBj9zf7t3MnmetUV9Qn1qvux6e2lScSYgJ+LCJC1RiYEpdZ3OmfdU+KKZUnuL5kmsXYH6Z1d0puMc94/dUpNCwGeYUobvANFBoyJzUeePfgxpZittq7g05k6lWO1o5i/tTRFiOwKyCAUcun45m9LCtGcdU+JDCQPWadBH/5OUOQwSXtPGfwIna8lwGtJQoWeyy93QtvlCHrgN/JTIFOK2WrrCprLZCkLq+3+Wlub00yds+4W0IZ8xSFghlI0i+JVS4DsRt+cyTkLeHeX9GxJV5qxjZZJ8nfyCKQpC11vvGum1I5875b1xJyBijnrbkWZzfLUSbAs+Pz2nSP40aoB0tHfTu2IjFDDv3igpGtI+nADmkeRdD5LnjyNpNtI4ljdRyS929JpcCz3aZZHknQxSWeV9JKG9nf5FRbW7y1/a+iY1C5jVDr2uY/CTR5MKB1Yz3OYupeMCDCO+PJKenTvtJL+38g2D3+9RgM8hqR9JP3Rzuf+aYoOJHVw/veF5vi8maSvFrYBcV1O0uMl7ZF5h9MsHOn7rC1WMDiR+SBQuSFf8ozuIuk3he37Y0dEIGiDP3SNr0k0Jj3ulfRgzrqbBmvpLqy5V1iOKAFQlBb+DaUrBD+CXxkXHAGTRyQZBvFJF/qStThqCJBjTBxN+56ppH9rHe3AeyycW0t6tTk+S0mWY3NobGhv75T0REmftwjy0SSdVxL+SxzyRJmHChcw4H/8xAzj25Uq/cTHuJlm0V+/5yzsuJr/Tihz1T2mb7ELJfiNIbQQ/MAPGB+NQ0skVe55diqky5eIHA76DmsIMLDrh2ZIhKYf+BcvI2kvST+qRPLyki4r6VGSOD3SVwAJVfvYlsaDiXxdM5NJsGQHwmSeg9wrh7Tox50A26cvJoJUw2mv9e9vxhrS1HWP7VvX+8gRlh0khzYYH5PjeRSVt1vqTFcqTTZ3sIYA0bLoxH4zpMHgk3iIJEzQQ+dA0utcKQLBVFnCIlspMIWNzRlB30QTuAuW2A94QbtjMM0oCAT40x6CnJQAw85Ejt6UaTAce8O3iGaJFuZl+QiEBew5gG1zOeeFBVlSaOvy5G+FM8tPMjMYUzbNEwwE2EeQcSJ1ZwdrNMBAgCRpTnVGkagt5/u4+ucmkvzaq8nlaOUVLuYyzJUjU97gnFraJqbBdCETLj74jClc6ZHK4AN8qV2Y0nV/4KQ+wDNbcAIzmCjNFCWQ6v5Wp/vepkB1vXXkLrRcb++W0fqcWhrzQ0Bzk2/jiYMfJzEC5I7A+BYYnuGEDASIWy71DzLTXN7MKZLeyxNqNMDgQOUqrCnuAyTl5Tl27xkd5dyvl+Uj4DmA4+dwqjzArshqTICxtr5J/toQ/OASjb5LUIN2R9YHxJhessvYuFORwGbvzdEtBBgutxw7zWFyCG37nX9j0Rx+f/KbdAeaCwTII2Mv9IwvAohTIxB43CZfnClVZN7ZyNc+lZmaXoYw1HLtRQv5UbQ/Eef+wRPk7d4z0eTCMTla6SLArP+PF1sIEEad4kJCFgeaH+kvv2jHyt/MIJAeUZs7MBHaG3sNVqydMMSwQLmPMnxfhH9v1Vzi+ocSZkvTUkLkmz6NPf881XndMEbWbPgwUVp31zPrXFTpha3preL0LfXtdR2lK7p4d1UEGC45ICn5PpLOYTs3HSfvzst8CHRdKz7nBaWhvdRn0zLCmFQCSXHcLnxxLCbG2g/kxDlxQ5pkrEUNaUmxtjp2k5mKALswn0q7bJnPkne6bn2Ob4shITr9KFJq4cQa5GCbqyJAdm0CHRw5w/fH936515+jUl7mRyBenNnjQSO7M4e5nWb9hy6O9ZWV5CuWRrWnPP43JwHOGWAZKTqHXwLLYQYuRUmDNEGG+zT+Jg28hgCPa9fUs4CmMIHHguXv1yMwZ3pF6M0cOWx9RFfk56mHae1vzEmAc8zP2gFr7UANAYazwB90AmyFe+3vsYtyndlUG1jQevhONGY1BfOU8+JTXoPPWW5M3DSdocjPs3bU6zswFwGWarP1PV7oGzUEGHwmUwVBFgrZYrsdpxZMNYhg7gazZMiEaW2zz2SjbUpw7rfWv4nvzUWAsd9zrJ9yE3Gr7lMNAYZE6AdPeBKkusP+QjUCYdefWisLHYn9i1OnpaQRwdjM/reJtcxqYGd8YS4CpMub7AOcEdLuqmsI8AKS9rSbGRB0L46AI+AILBqBGgJc9EC9846AI+AIpAg4AbpMOAKOwM4i4AS4s1PvA3cEHAEnQJcBR8AR2FkEnAB3dup94I6AI+AE6DLgCDgCO4uAE+DOTr0P3BFwBJwAXQYcAUdgZxFwAtzZqfeBOwKOgBOgy4Aj4AjsLAJOgDs79T5wR8ARcAJ0GXAEHIGdRcAJcGen3gfuCDgCToAuA46AI7CzCDgB7uzU+8AdAUfACdBlwBFwBHYWASfAnZ16H7gj4AgMEWD8PdT0+wHhE3RTX4HuM+IIOAKOwMoQKNEAYyLk4zePkeTEt7Ip8oYcAUdgLgRKCJC2469Jzf1h7bnG6vU6Ao6AI3AEBEoJ0GHbHgRwX3y74nOSwd3xAvv2L9/nrSlD7V1b0mEd3/vtq3+oL+HrdK39rBlT+uz1JOEmur2kX4ypKHo3/tpeTZW11llNO3z/Gdl5iyQUoZ/VdMyejS3KhtcPbxc5aGn7X9orIcCuDl/CFtBSPrFXM8mlk7LE76oiOJTSD6PHH9LmvdoxD7U3ZV9iC6Wln6Vz3vXcsSU9R9L1JV1X0vvGVJa8C/5XlPQsSae338Laix89jiQ+Hn9PSWeVdOOKTYV6jiTpcpL2i9phLJBN2PCOL+likvaSdGVJP5d0H5OlP1eO+SiS+MzuUyVd3d4dki2e5zOoj5J0olUSIMQBAaaMGxPKOnbcUrzTD3en76ULPHzgu69+CP8gSedpIIPSPs/1HH0/u6Q3VTSQEkvNXA+1N3VfxvSzAo7ORy8k6Y2STinpCZJYG38ZW2n0/jEk7SPprgMEGB4/taRnSHpYJQHyfmk7EP6TrT+/kXRnSQdK+lvDmO8kad8CAozH9yRJD5X0nYb2/uWVIQ0Q0rv/wG4SyGVSlXSKQVkd9A9hLFGXg2mVI8DQPer9ZoUmNeGwmqvC3Hx3tKPXVtT3kfK+eobau6Ok148wY4b6UtvPWhzi548uaW9J97V//JSkm0r61phKO96NFY4uDTC8wnqGKD8i6UsNfShtB6J9haTLSjpU0g0lfaWhvbDueLXEumB8aKDvaCD4zu71EWDQjL4n6bEDA+vTEBuwmPQVNALMElTmrxXUHDS712XGG6qCXM+wIAJkPm9pQlvrwwtjBlN8XS8qwHOoPephkWL+zNGXmn4WDGXwkXNKer7J2B3sSf7/4rEVJ++XEhOvXco00I819KG0HXgDLSxwA1og1kFtqSVA6q/1Gw/2qY8AAyE8JbPIeQ7/BL6HEqKpBaj1eSaSXerehYssmFAIzRDhh/60mHCtY5nivdRELNV047YhfUrJwhpqb+6+1PRzDLasHeQL39z+trmcw/5/N0mYh1OVUmIa215NOzF5tcgTfW0hwLFjPML7OQIk6pMjEX5/+wYRYCl5x0DUEuCkk7Ciysb4bVu0qqH25upLSz9b4cfn9zLzh33U/o8i8ANJ15F0SGvFHe/VENOYZmvaif13DzH/Z23bG0+ADCgXUapNq6gFqfb5AOqQryStcxcIMA7g1OzYNb7UGNeh9uboS2s/a+UrPJ+mvlxe0hskHdesiEdPGAypIabW8fBeaTv4PgmEQPhouq3R740lwCUnPjOJpCTkiLtFA5zClzZGQP3dzUDghObzIgAY/H1ohJjCV5D0cUk3mypSWUFMY9EpJcBLS3p5ZP7fQ9KvGxrfWAJM7fPa5MpSLKYOJoTgzUVmIsBVRhhLMfTnVo8A2t6DJN1GEoFCSvAJkrJCYRMm0j1FKSWmsW3F7VzJchr/apWSi3cKG1fwfaLx8ufWlJSNJsBUJebvJaHq0kmYI4k6aK5M1BwaYG1wpRQLf245CATzj0X/9CT/jajwwZIIhuAfvLuk300wtL5EfszPLxgJf1DSWyNCbmm25sAAbhRyDscEezaeAFNNkL/XJMP2TcJc0eOxBEiGe65MMf5cG/775iIQUl/u0pH7FifWEwy5pqTPTjCULg2Q0xts9GijmKB7GBnhe3xeYfZD2rW4HczcD0cPMLYzWSoUuXicyAibwAsb21sEAYJBmrrAv9UEGWKgW6K0pTIU6ub5qTXAIBxOgKWzsX3PxakvD5D0x44hEhwhn5RCgnSqJbagkjOBT2rpaDexyunb0xqCMLl2Qt85lkb6WzjG9kzLC6zVdhdDgGHgqYpcaxLXJhzXCstYDTCXB4jPkoTiXGpQbb/9+WUgQPL7AXY8tKTH75V0K0uNKXm+75kSYjqfHdM8y4jTGSXthD7GRwAxgzkB87bKQS6OABlfejlCKQkG8vth4fG0SiwPf3xuApziFEPLuPydzUCA216wfIZ8e3MEQ0qIicsKuMzgBgYV2iDn1mtKSTuhPtJ9nmsKAf/Wcg56kQQYEw0+s5IIcewbmdOEjNupMdFL8wA9DaZmOW3Xs6S+kPKCBpiL7sbaEaZin7lcilAJMY29uYe+lLQT93lMQjv1LJYAUxIsTawNAy7VGksFpGtSatooJcCW/vg724EAwQaIjNQXAhxDJVyRxbNjLgsIbZQQE37AV1keIu9xZvbNldCXtBOqPJqkJ5o7KJAnF0PU3AqzkQRYc5woDKDmRpjcLTOVc/Yvj7dc4OkEOBb17X4/ENqXK4IacTCEo2KcnGi9JquEmLgE4dV2LVfrrTQl7YSZPqNdg3Vh2xAwueOocYlEbCQBokrfz0LpuVtXW/16DPySMwUTWiLBLQRYg1OJMPgzm4sA2hQ+LhZ56TVTXJKARsYlomiBNe/GSJTc00db+ONCVHZP8wfWaGMl7YR+4f/jXj5SgSgkhZMAXnsxanyemMtViZivtHRdhhB8Cdwplrs5OJBNyaUJ6cDYbea6U682ZaWFAAkGcYtuye0xK51Ub2wyBDDzmGNMPVI/SGuB1HLpHpya4K48rg4LNzlzFyMXlX6+gii6boSOT2jgl+TihQdKYi0SjX2cJNJSulJ0+oDpuhGaqC6W3a8kcRoEriD3D03zwVHeIZot5FdztVnXjdAfkISm/DlJf5psBjMV9d0GA4F03QSdVpe7cXmoeSaXpE0cy1NfpRXnLZb4AmuJvGaTWNVcejvTIpAGFeLah2Qqvuihq0el7qLSUxkkI3MZ6YckvcaSk2s0v9J2wlggcNqkPW7C5s817ZV8E6RkzU4y230EWOJHa005iTuOkCEwHOeZutTcOBJPSi563HreeOrxeX2OgCMwEoE+AowJoWvHijWsHGGM7OKo19PduO8D7y2NlO7kLXX7O46AI7ACBIYIMPi3uo7B0bU58/mmHnrOLGlprzT1p6Vuf8cRcARWgEDJZzFX0A1vwhFwBByB1SPgBLh6zL1FR8AR2BAEnAA3ZCK8G46AI7B6BJwAV4+5t+gIOAIbgoAT4IZMhHfDEXAEVo+AE+DqMfcWHQFHYEMQcALckInwbjgCjsDqEXACXD3m3qIj4AhsCAJOgBsyEd4NR8ARWD0CToCrx9xbdAQcgQ1BwAlwQybCu+EIOAKrR8AJcPWYe4uOgCOwIQg4AW7IRHg3HAFHYPUIOAGuHnNv0RFwBDYEASfADZkI74Yj4AisHgEnwNVj7i06Ao7AhiDgBLghE+HdcAQcgdUj4AS4esx3tcULSHqppMdLOqjnQzpnlvQySW+S9LQR39HdVYx93JUIOAFWAuaPNyMQPrTV99HuI0t6pCS+UubfW2mG2V+sQcAJsAYtf3YMApeX9AZJfFQbkuNbu/GHtM8t6dWSziHpWZIeUPlt2zF983d3FAEnwB2d+DUMm49h82FxiI8PePPnA4zkzi9pb0l89Ptjkm4/w7ei1zBkb3LTEXAC3PQZ2q7+HUnShSXdRNIlJZ3PhvdzSR+3D22jBf5uu4bto9lUBJwAN3VmvF+OgCMwOwJOgLND7A04Ao7ApiKQI8ApPihe8gH1i0v66AiQLmG+o5IqjilpT0n3Nof86yw149vRyyFiOVRf3CY4Yto9UBLOfuoi3eO1iaO/q76bSjqOpA9IupCkK0o6T2Qefl7S6yXtL+m7JQOMninB9RaSXmnvnNj+fOWBdqaazznapdu1Yw5DPan5Hm8jCbn/iAViPlmB+RTrJcalr2mCSI9JfsSvegNJ767ob3j0jJIONBmOXy+Nxnf1J67ni5JuHPl1p5KzhqEe8ZUcAYanjy/pRpL2kfQqI48/JK3HgwpO7tdI+lVFL09nEcBr2ztDwnBsSTezPl21ggAvYkJCNDIUUjNuK+nQ6N+OJumClo8GuVHeJul+kv47IbYbStpX0omi9z9rvi6eHSqBbMEMcnm+ESjvnEHS3Q3vrxlxf7gCTx4l+EB+3VMlXd3ehWwfIulzkv7UUd8JJe1laSn83DKf62q3ZcwnN+yD3AVIHiHpsZV44+c8tUW67yipb3OOiTo3H11dYCO/vqTHSTq9PUAOJfJS60Ml6LRf1Mh9TJ7TNT4EBfN9BVsvRPIpLzIZ+kHPi6mcfUfSPSW9s0cuK6ci/3gpAVITnX2xpMNscv+SVB8TIJrPHSrJL1R3K0kvt7/kdkNAJ3r4pUiLyY36tEayZ5L0BNOuILA9OlIvwIfcNP6j3No0sbiNU9pEk7gLkaJdQh5vlPTQAmEMBPggI/M4NYR2IPonS7qr1X9LSV/PDbLj9zuZUPMTAv70TB1nl8QGdi5J77XN5icLapeuloyZOWbRnVUSc3AWmz8St8G8dsMJEF1K0ocKCbBkPrqgP5akZ9pa43eIhgBTTZ+RX6wLyItCMArFAjKqLSgNRPmxriglllksZ6+QdDfbcGvbbnq+hgADGUB8XbtiTIAlZlJfh2PzM0eA1HEtM2WDGdcCxKkkPdu0IjStuMSE3DWhmLwIDIuoduelHcaL5sFi/UVP59EW3mHjbF0stbiCCZhexrQjhLpGIwhDWVe7AVtSbSh9shQ2MEzKQ1qEp+edYA6zoEntSUusAZbIeV/XMD/B+HiSGEttDuX1zF0T3i81e4f6E8zzEgKM3QZjeKNp6moIkAYAm7JJBMgOgspNkm1r4RQCY/pKhyYZL+B0QsN73zDtuKV96qcMEfgUQlJDRMgFvknMelwFYwRzXe2WEuDYDaxvzldJgCcw9wv+S9w4aIFYRbkC6bHxs+mjseL7dQIcQA0CRDVGZU7LujTA3CSX/o4mebUO/+YQAZ7EfHaQZ4nAdfUFPw4m7dD7mGNvsR0e0xVTrct3NzTWGiK6tLkhgm9pVQQ4ZbslBHh0cy+APe6dKcsqCZB+Y7qGkzbI46MLzlJD/qxp/Nr4Ep0AByTgGOajAugubWXpBIjA4mvDlI39H0MEiBmDvw9nd02wp2ahoY1hfhKAIhiBD5DLAmpLKQGiTb/E/H9sCPiGVkGAU7dbQoDnlPQkCxzEWQC12HY9jzyxTghKdEWSpzSBaf85RuLXNV8xGvy3BgYSyD8oNLgKnAAHACPqhPZB2sh7NkADJLL575LePIW0Sgrje3tSZx8BBmKieXD520T9SKuJtaLnWaCm1deY84eFaOgn7FYWglEsirkJcI52cwRIAA0tCeIjAjr1/EGA+OPYUFO/Mn2bmgDR+vDnsT4pHDUckksyHCBNIsA/jNKf3ATuWchEgYnSEDntcuquWgNEgEibIX9pqoIAQTjxQfw+AsTh/FwzIfAdTlmIppFKQe7U/a1iTBR8ci2BiBwZ8DskhD+ISC/jR+NHg5mbAOdqd2jMwcd5McvdbNlQcvO9DgKMI7qk1mAtfK+jo+HmnfB/0tzCXDsB9szsUKSUV1ZFgORZkcJCojGpJmOiv+lQSTnBJCJxE20JsukiQDYDSOKXPakrucXR93tXEi8pRfSJvMIxWsqQCRxSbSBdotE/WtF8ztluFwGSw0quJjmfBM8ebITfOl9D762DACF20s9eaB3jz12+TRKfuZsRGSbyHa9dJ8CeWUVg0P4I63+/45k5CDAnmGPSB/rqJu8NrRL/0FCBfMkTQZ4+VAAAIABJREFU60vyzPV96HdOhpzX6seXQ8EvR14h5kpL6SPAcEvLRW1ug8Ywx3zG8zV3uykBxphx+QKJ4c8YoVHn5mAdBEif4lMdBEUwceP0quC6Qc5D0vRcBJjDKP19jKultq3Dn69JgyFMfo+BBOe5F0wYIBogyaoEBSCqKTVATl6g+aGJcVKC5GaOFwXfGWkwRAzRyO5iUTc0ppYE4ZIJgyRIvsaXQzoKwY+goZW8Hz/TRYDBFGReb5echJlzPlfRbkqAkC+bVjg9BJ5jfKo5/LnfEB8g87UqHyB9ii+W5e9kGXCUMhTMZE6MEPB7n/3jXAS4VXmATCRpEYTN01Mg4DjngukStql9gMEpDvERWCGy++MeEzjOy+PkxxxO9DDmEJwBf0rOud23MLsIEH8nJwmIZHNqIS5zzucq2u0iQDbL+F5Cnuk7gZMjuNzvyGdIUv5Zx8NzBEFCM1gvB1t+bHo8DjmAFGPN0AkwM5vhiMsXenIA10GAU0eBiYrhb8NHFKeadPkA49QUjr+1Hk/LLaLwOxckhEPuHEvjdEqt6Z0SIOeAMasJfKBJp/7FuQhwVe32ESD/Hh8vBEe0w/eXTkbhc1hM+NiQja4TPnMSYEhxIQJN6hSpMWh74TgrkeLYcnICzEwqAZDgg8IZ31XmWjBTmrh9w4y1LJK8MQl/bQ/3RYFjc5mADOeF03O8hWsl+1h8XjK9WSP7csc40Hrw+ZHugiuhq99zzOcq2x0iQH4j75BAABddDEVMS/FNn0NuuPS17wjhnARIX7hZCJM/Ph6HSQopc2Ik3kCdADOzzCkJdrKhCw7mWDBzBDm6hspV7Gh/lPRKoaE8QHZYHOkkk/LeZ1pXS+a92OSeggBpLuf/mmM+V9lujgD5nTPYpHbhD2QjIMj0xwnmMJybpy4Ch11lbgJEyyXPL5Ad65f1hBWHbzLW+J0AByY9aEefzhwXmmPBlBIgKj8RWYT5p5UCfDK7zQWS77pOaOgkCGkjtHnZkcnCuS6Hm0V4rvW2jngcJcGUOeZzle2WECD+QLRSkogxFe/c4w7IzU/6O3l1+IWRjb5E/bkJkD6FjR2C515JrBpSgNITIk6AAzPM4uN2hy7g4tfmWDClBHg5u86KyFZNrly4Cgktru8qodxtMOEutZZjaqexRGNOXPSZz0T1MFswsyml5zzTKS09Chfe44JQ8uZWdRRu6nZLCJBn4rsA0a5JO4rvhawlP54vWTOrIMDg88MHOCQ7ToA9sxyEAx9Jqjanr8Rm2qruA6QP+HK4RDQkddYIbHzMrCsHqeQ+wFiD7LpYdag/1H8dSdSB9tllfsWfixwTcCm5Gy/u667cB8iYYzko0VIDTswfp3XYeElVIgGZNcNaIao+9HH3eGNtveIsnM/nHHpfdkbY+IZuiYk3u1YLA0xCf7DGKCVpMMg3fEFq20bdB3gKm1iScnO5bpgSVzGNAXW77+PXOTIgsosghZuL8Z9wXrOLGDDNcTJzROx/OhI+h9oiqo3WyOWNXD+P9gcRxffB1dwIHWtXRGvxJRHt/GsBG7OI6Au+Gm7QxdXACZS0j2+1i0xrL0PtupmZPj7MzKJU86Q/RMIJBIWLYKe6EXoV7QI5Y/4Pk42SW7DT1BgSiAle5C4FTRd8mG42U0xrTgqlpeWm7C4xIh8WucHUJjn+Xia/qcyF43Ff7fnWMusISwsfaLglHVcAwcCaY5f0h/WIMlJ6IzTXcUH+Qc424kZomJjcNm5JDtchFazjf3mEbypwaQJEwFXyQ6XkOw5D79fsoF3fL0gd4DGh9bUb726pqRHeKTXheR6n9TXtQDvXFEFCCMQHLWWBW35rHfQluM7xbY51tQuOtW2HuUILgriCuchpEeT2oIz8sl5IjA+3sODOgDy6zhe39i2VwaFvcKQyx4YGOZLAHxKfqS/NL+2S89JjcVv1TZB0ksgRI2JI9Oi3AyzEzobWyOF5DvBjElNavqvQQrj+jiPgCDgCVQh0HYULBIjZgxkw5KDvawzNkZtSMD+cAKumxB92BByBVSEwRIBjjwiFkxXcRlH7Za1Vjd/bcQQcgR1GoI8AIay+u8RK4QqHsv/PCbAUMn/OEXAEVolAHwFyPGiKW44xp0kSJlLrxRFwBByBjUKgjwDR3mq+Ldo3KM4Qc9yI0LgXR8ARcAQ2CoGa+wA3quPeGUfAEXAExiLgBDgWQX/fEXAEFouAE+Bip8477gg4AmMRcAIci6C/7wg4AotFwAlwsVPnHXcEHIGxCDgBjkXQ33cEHIHFIuAEuNip8447Ao7AWAScAMci6O87Ao7AYhFwAlzs1HnHHQFHYCwCToBjEfT3HQFHYLEIOAEuduq8446AIzAWASfAsQj6+46AI7BYBJwAFzt13nFHwBEYi4AT4FgE/X1HwBFYLAJOgIudOu+4I+AIjEXACXAsgv6+I+AILBYBJ8DFTp133BFwBMYi4AQ4FkF/3xFwBBaLgBPgYqfOO+4IOAJjEXACHIugv+8IOAKLRcAJcLFT5x13BByBsQjUEOCRJP27pOtKurSkC0k6rqTvSPqUpDdIerukXzd2ik9ofrTx3b7XXiDp3pL+MFDvwyU9JtPuzyV9UdLHJB0k6auS/jpRX5mD00i6hqSrSbqYpBNJ+o2kLxgm7zaMzyTpcpKeVdD2Me3TpncqeLbvEcZ8Y0lfy9SRw/AWkl7ZUceJ7d+v3PFb3zulwzmbzdV5Bl54xATfrL65pAMynXqXJJ77WfTcEGYlcluyXmIMh7AO3cq1WyJTYazUyZx3zW1pe6Vz3fxcKQGeQdKjJfG94OdKep2kHxoJHN8W7V6SeA4y4fc/NvTqKJLOLOmpkq5u75cshHhyIY77SnqNpF8V9gFyv6R9vvMc9s5VJL1P0l8kndw+FP8gI6fnSUKAIcYx5aTW17tKeqsk6v2sETZ9OoWkq0q6vyQWNIV54L+/ZRo+lqRnSjq2pEdK+kZE2jFe6eJEJvic6b0kXbGQAJm389n3n68U9evORg6/G+gr/buZpH1sQ+V71BA8G2tujCXYn1ASsgkGFOq9p6T3ZDbGkrrDM6yBS1gbe0Qv0tYdJX1A0p87KoRQmFvmk8LYnyPp24UbbNd6oa2HSPqcpD8lbTK3bK73iPBoWS+M90bRnFHHgyW9StIvkjZT/EN7PDskFzX4Nz+bI0B+hwj4ri+EdwdJ/9nTGtrgkyTdxRbeQ0cMEK1l30YCfK8tqJ9UonIMm1DIiIJAo/GFAhY3tX4x1peYdtmq8V7UcD2BLQI2jT6tEiJ8spFwbpcO/YXknijpUZK+l2AxRIDhURYn84mgfrIQS/q5X7R5XV/S6wvePbttWGgMEGEXWRRU0/vIuSW9VtJZJJXi19Le6U1BCJt3iSxeyzYJLJWXN449Xi/3MSId6n/A+1ySSvrYVRebN7JxBUkfNA33+z2Nxtr420yOU6JswXv0OzkCxNRlUii3lvShTItoSggYH0NHm3lAIwnGZkWtBjhGwGOzJCVAhn48Sc+WdCvDgQ3hxQ2zcClJLzSt7pZmKuS0nYAtG1HOrKdLkNwNbT7SuksIkDrQAH+fbAS54aIBQjZsEgdLYnHmhB0SQOMEi5Ssc+3Fvwd3Aq6Ey5hFcpGeCoJbA3IPLoYhV0lpP7AgXmrWEtoOY3pTz8uQCPKKC2kM8deul5i8WtdLqQwx9CnaK8W/6rkhAown8vGmMpfszPEC2NM0gtziTjtdO6HxZLROKH3IESDPxLstCx0SLDW1eT/WkvY3c6RUiwRbyI9NIfYndU36cSShkXyl48dS4cUUPqqZjaWCdXRJe5tpzzu5DYzn0W4xFzEBa2Ul9AvTjg0XDf4wSU8w/yk4ofnhu8UfGOSD9/CpXs9MZFwEuDgwIVv7EPqCAvAK2wSwIsAAszYumK+4ak43QlEI9a1jvZTKUNiMgz9wzPoslcHi5/oIMBZidjH8ULE5ONTASWzyMZ1LnehLIkC0t6AJf9zMbRZvSQFv/E/PsIdLTcRQN/4yfC0QRY4Ah/pTI7wl40qfYfM80AinjwDCO+c0VwCuky6yLmk/tjxeZEQW+2djEyxdgMzJZc2lAYnit6TvY0gQcsOvhy+Ogl8Pcg4aZnCn4IvDmvh6ySAHnnECbASwjwARSswXBDln36dNUycO5+B0LvFJLIkA4+hbLQGeUhJaH36T2ncDRpDmZyq1shTfuQkwJXo0a/yRqQXBc2i0aKoQREvgDF8lGuTdbZPu0raGCBBs4v6ymUEopRt+39KLNX2UiJhYcS0RoCI4k3MrlSxtJ8ASlDqe6SPAGNAWlTV+H1PgbpbWUdrNdUwofSsxgUkLebUNpNahi68r+IMIFrAA8LGtusxNgIznZJLQxhgzpHIDI+54rGwILzMCI+LeUi5vKVj4HDEpu8zoHAHS7hlN8yPTgT5BqGOjlMGHDsHj57utaYHUjw94rKYZ8FrHeqmRoalcVC3yMfhOFwEe2XKjMLUopWkXcUNjtCTqWceElhBg8FdhxlL6Flwf6GCKP7UV16kEoEZ4x7QZ+4MhQ7S9mFTwv6Gx3b4gUNLVD+SXbIPH2o8Qzoc7HiwhwJA2hE+31XWTNh38fGi/FDZOUlPIIx0T9EjbWcd6IRWGTZyNLWclLooA02THlmTRmABbhGkdE1pCgCQhk/SK5sKOToSv1H8zBa5jyCh+d1UEGJunaUQ0bCZfaoykM54Y0y9bbhoBkLSUEGDquunKAmjBP0R6OUBAIX2KiDd4TFXWsV5i7H8g6TqSDukZkBNgwWmCGLt1TGhKgAR+OJnyW1to+N4eZ/4qSB2n/ScqJDglwFx0tKLq6kdXRYB0jBw8NB/8yURYQ6oLfma0IHD8VvUI/v5CjOnQRltCgCUbYGM3dUFLDcIUPlTSTSRB/FOVdayX1FLEHYRFhEJAPitZCKe1dCTWDq4KSotLbSqc/qWeLhN4Ck1lGzRAghVEtFmoCC47No5xjvyRtFwbhU1xJa+SNtZRVkmALBQCYQQqKAQ78NPhRiAJHBcLp21aSpy8jhZyTTtJk9ZVQoBHs0ANZjpzjflemgCe6zvrgTQQ5IhSmh+Zqzf8vg4CpO04Va6rr0TiiQFgNaE8cCxu4wkwNQXIpyI4UCOkMQHm/ANdwK1rQkuCIKVCmT4XLzB+a3EttLadvrdKAqTtU9tCIN0EDQhNATOQY5Njo60Q1tNsgOTfvbkDpBICjH1arRH6rvkhRYeTVBw5RBPExxg2Avpds6765n9d64X+YOLjw+VoHMchu+4GWJQJzKDGRnHjaGcL469rQuckQHCNk6jRgki8Tc9rTkVyQ/WsmgDpS5wcPKUWFKds9W3WJQQYH5cjqDJGMw3Yk7eJ5vtLSwsjITucEoEoSk5XlcjDutZLSd94ZnEEGAtVy24Y78otx8XWNaFzE+AFJL3FgijvNH/YT0ulaMLn1kGAkAGkz+UAlNok8L7hx5HWPv9ajgDjxGV8iZz5pq4xJfSLM99sfD+yfMP4PDkpUeG3MW2ta72U9nlxBJgeZ8Ifwu0ZJYV8LG6MwdmdOwWwaSr93AQICXAq4DbmZyIy2Jr/VjIXfc+sgwDpSwgG4CjnBAR+uylK0LQ4BgepkHcanykeIkBu3eE2Gs6u47PCX4mfd8xJEMZEoIM8z9slZBpHxnmuL0m8BhcnwBq0omeHzgLH0bsaM5Z7At9oUaDWY0XrmtC5CRDoY4d4Da5h2jCjCB58unHOeW1dBIifjc2RaHDLJRJDQ4YEOXv+MLv6i0sraIfLIzjzm54FJjjD/ZZs1JiipM/glySyP5b8CA5AqNzE03XSg2vjCAwgCwRcyKXjQobWsq71UtrfxWmADCy+/om/D91qEYCIb0vBv9Wa7Fk7oVPdNrEKAoxNtvSIVE6gID8WDYun5GKKTdIAkSfmlRtqMIN/nBts4+/cP8dRQ26E4dqnvttg8MFx9phIL+6Iz4/ENHSXSC9aPkoAOX99ZJrmlHJKpNXsrl0vqyakqdZno0j0v5a7DgvzAFWe3RSzBdOCCzu7CqYvt4BwwJvTDvzXepRoHfebpVHavlMFU0wCLgZMLTDC7Lqf3a02dBYWvyy5iUQUW3ENfY8FssXHm8OA/C8uNSX6y0kNtCCu1kI+pjr/mutD/Puq7gM8v42bNZI728xGCB48R+ky3UvHWHt/Zjz/XbdVl7Zb+txi7wMMmiDhbaJiXNfOsR5ymuIbocNtuGiAmCBcgtlyZfy6brjtuhGao1tc6DCVnyoVFtokex4ziYspEUTMJvymkCKaA6R8VtNmvmu+qZYLA+K28UGRhB1uYOY3XBXkJE5xHx71dV3XXqvtli6uoee6bkAON0Kj9U0RgWceMWnBFHLnRhmOiEFsQ/cgcpqIDRB/cCjMPVYI/y/pW9d6eaDdqD60/rgWjPw85A75RrEhkbmkzdp56bsRuubG9to2i5/PaYBxRYDNQXHyffDzBdOC70XgN+Fg90dGLKJ1fOOA8eW+Z9FylK94Auw0A9fxkyZCxJDNhgKumGVoBmO+tRL6UvM9h9ok73S8tIU/jmwALAPGwO0nnH4Y618rxXZV3wQZkp++0z5TyFzJeinFKjzX4pPua2OKb5DU9r/6+RoCrK7cX3AEHIGNRKDvezNTEuBGDjztlBPgIqbJO+kIzIYAfloi81ggToCzwewVOwKOwKYiEG7wJiJe8r2ZTR1Hdb9cA6yGzF9wBLYOgXAjNkToBLh10+sDcgQcgRwC3IhN4IoLKqbKBsi1ufbfXQNc+xR4BxyBjUCAG7E5nshncJ0AN2JKvBOOgCPgCMyIgGuAM4LrVTsCjsBmI+AEuNnz471zBByBGRFwApwRXK/aEXAENhsBJ8DNnh/vnSPgCMyIgBPgjOB61Y6AI7DZCDgBbvb8eO8cAUdgRgScAGcE16t2BByBzUbACXCz58d75wg4AjMi4AQ4I7hetSPgCGw2Ak6Amz0/3jtHwBGYEQEnwBnB9aodAUdgsxFwAtzs+fHeOQKOwIwIOAHOCK5X7Qg4ApuNgBPgZs+P984RcARmRMAJcEZwvWpHwBHYbAScADd7frx3joAjMCMCToAzgutVOwKOwGYj4AS42fPjvXMEHIEZEXACnBFcr9oRcAQ2GwEnwM2eH++dI+AIDCNwNEkXlHQBSc+R9LcawLoI8OKSPjpQyS0kvdJ+P5ukgySdp+f5+NlcvY+Q9NhM53N1rLNvJ5T0CklXr5iAuL8Vrx3h0RwmPJxrZ4o6aOfh9lnFvrF8UdKNJX2tdbDRe8eUdE9JB0j6paQ9JF1X0oUkXcSeo51PSDpQ0kdGfO1s7LiOLekykm4g6aKSWDcUPkT+XltDX5X01wlwias4urUHLueydXqigjYuIeljBc+t6pETS7q+pKtK4tvFAb/Q/g8kXUfSIbUd6tMAYdWrSHqWpNNbpS+S9GhJ309Ylsm9mqRnSjqlPctz/P0XSYd49maS9pF0XPvtgZKoO322byyb2jcmiY3h54bTtyT9yQYRE8ynJN1H0mei32vnLX3+KJLOLOmpEQF/QNJDJH2usB1kgbl+hqRrWwP09V4mWKWLE2K6YofssLl9b8JFfnxJ+xmp0F1wf4qR3f8zGT25pFtKepCkbxge72/sAxhDDM+zRUibyO0jJbEAuwoExMJlcwfL50r6gs0H9YH3zSXtJemtVte3xwqDvU/dT7dN4TeS9rYN+ofR+GmbDYTyJttQvjtR+1NUg0xeWtK+HaQX18/8wil/rm10yAQ+hlV6V6uUjny4p4FYGL9uQvmlnmdPZUTBjvhxI8TvVHZ8E/sGAT5R0qNsocdDigmQzYH/qlT1QnzuZMLC45AsC6C2oKG92l4q0cq76q+Zn9r+hefDhnNlSW+QdD9J3+yp7Oy2IaN9PdnkuuXbt2y+zPG9C9YEmhakDwHzPN/b7VugmG+Q4wlsw3nXSPmA+F9gGxnkd2fbGFKZiwkwZyW0ztOY91g3KBVBCYvrQrs/1Ej9zS3kR2U5H2Cs+g+pxez6LDYWYM7MiQWXiWYSftaA0qb1jXFhary4Q3hjAry1pP0bxlvyyhQCPVVfS+enZFxdzwQ5+l+Tux9lKsJ0eqmkC5tG2KQxJGZ+35qAgJ4t6YYVbV1J0mtNk2XzgtRbN0kI92mGx8sk3V3S7zrwieVl08xeXEqQOC4NtNd3SPpxoTVTLFNOgEeEagw545dA08CUSEtMKnPutFMT4Ji+zk2AJzVtF226z9pI5yHgM6QV5RZPblyYtvQJ9wNuCDRATP9ciZUIzOXbmoaTey/9/Vim7d7BfkD7g0i6yiYT4OUlPV/SHSV9qBaE0uedAKcjwCHMnQCnd6qz4UAumJl/LBR4fNRo31cwJz8EX+tzyxHgpcyFQFv3NcuoVJPDd/puGwsa6kMrxhYgSINxQ5vYphIgvlNcFf9pft5S/ArF4J+POQE6Ac6lreaIolpYkxcgQAI/b6uoCHmHVEK2QS1B0dTQuMLCJTpNGfKbd3UbX9erJF3MtD9M6K9UjI9HUz/lkC94UwmQuX2M+UP7AkyVsHQ/7gToBLhUAmxdANeK3BT43DAVf1VR2RABxgSW84V3NUlmBMEQNFtKq7+YKD4pWdRHgAAzEv9ZWqYgQEj/smay418FA1wMpNGALwG1Lv/jEOTMEbl9uBIIqN3EAqtYUhTqZny4m2rrPkK7ToBOgLtGgOQIYmZCDl+WdCNJh01EgLGroyXAd2TTTh9s/XmCaZx/qegfj+KHRLslYk15vP2XksVYAiStjQDF7aw9UmoIShFwIihKYIe0oQdUEBWcRGoR6VtEeUnFI1uEtDqIFYIFnz1tHgnwkHnSVJwAnQB3jQDT5P3a6OeQBhgTSgsBMhdx/QQviOi2pOzEOYiMmf5ARmhP5EziVxtLgMFn2aXtXk/S64y0IEKSvksKwSD8f2xStzcXAIQYpxBBvBAsmi3jafHlHt4XJ8DVE2AqBAgGaUBE/t4u6fONibrUGwt0VzskwXIygnb6Th5MFbDpOz3BLk4yMJHRD1oCcEmUtGTx8EzudFJazxgCHOrTugkw9A2fIKdkMCeJrPaVWhyoBx8saTb/I+kekn4SVX5uM4HPYprgewonkEwMiJpDBPS374QH6TFvtMMXaLgpSRY15wS4egKM/TokkOPruJvlENKbl5ijHrKqLTEBhnaYYxJsMf04cUDicGiHDPpYaPn3OQgwLK4jSTqFCTYLhoUJIbI4EfoWTacWo13RAGNcQo4hZj9BI/yeyNdYDXAI+xjnmnSqOBVt6KBE7C/FVG4JGLkGmMzgmDzAIWHIkQrmCtE6djIKSbAklafklFvsuTzAtJ0u/0yur7k+hN9zUWDy+PDv4OCm4CciebfW31Xan/AcuZqvsbOxuVNLXXUPjYsUmJCzhnbLfHB0tKbE9U9xaugMdtyNeeXEFRtj6OMcBHgy09ogvUvawFsJMKdF4wsMa4bADwGfquIa4BHhWhcB0gvytzhFwmkSCrs0f68pOQKkLgSUM6xE2iicVX191MiqCJAmz2cXAWAmNe/iNQBJiknqnRZx/WlFHUMEGGs9LeQaJ0PTpaZFHY0l+NMIFFDSTWYqAkSzP69ZGFg1WDGkryBnXJRSQ4CxZpcjwBJ5H5xaJ8DNIUB6Eu9oaGdE8oiqlZYSgQhRNnwmlDTSuEoCTC80QBvkdqE5S3xMjHxAtKwarXOIAHHOcyXTbWwAtQSGVkweIIna+IRvKolLNVoK88z7XCQAqZAAjtvh11FlUxDgaSU9zlwb5FgSveXijFYTOM5jzGnRJfLuBLiGc8op6KWkcis7NM/7LRHAUoEYijSW9jW3KHMmMO+nGk+NppBrv+v3WPvFHOR6Km7lqSm5ccX+Nkx8tK7SkyqxY5+jdERDa8g5Hkd89rnvaN1YAgxtoEEHv2LoQysB8n641COnRcf9r006P7yfrgEeUfTXaQKnmhlhfoIU4UqtkkVaQoBprlnqZ1olAcYaD+Mr1ZiOIylsFqWJsOALPiTQUlqvUMoRIFogxMUtSjVmfesZ4i65iNNESm+DqY0Cx6deum4NGkOA55R0sOUTpi6aeLxBBrhTkT9XnxpxAtwcAjy1LU6y6ilDE99HhiUEGLfD4sDn+L6owpgAhw7S5wg5RxS8H5+brTX50D7ACj9piYYVa0S1ybnxWEvGFbdVeqYXDYYrsyhxoCKHc/p7mgSNSY4W2hVhH6MBxspCV8L2f5g5z0WstZo95EqCNS6gvttsYlOZpGjuhqw+M1xzH+Ac12HlbPy+yU/vm5ujbzkHbI1gxqZtlzBgCiKk3CVIaV2g8X2AXe3gC3qSpLsMtBPfB9gahSyZHzL6OfYVbtBuEWII9JqmcQ1FzNEocClA7miALKzaCDuQ1dwHSGAH8uEOQsxZfHEl9wGy6RClrV7MkiAOcIQ8mOvcbTSxP7SWpOJgBe4E5JdgGrfRsHlzwoYACJdCoA3j28Q98JZCv3bYRP695z5DfuembxKha06aHGHd9hEgC5IdibQEGqIwIM72dU0Mg+SuNXLM0CpwvnJ/V9ctwgg+QkiInGcRRo7QlOaArapv+B8gAxKTW0vXTc0IKDs9pi0Livy8+0u6hjXSskC72iFLnt2TRQdm5NzF7RCpi/MAkQUSWzG9AymhlbEguW5qzI3QCD5aJnUQ7Sa5lZvAMZOQAZzoHHUq0eTSuSCthYAO16GTPkRSLmNOb1zmPdqBiEplLW6L+ghOxGsidyM0l6KyOCEA+jbXjdDML5eq0g5rj5KmvMRjYa4haHyUIS+U/EAucei7VLZrDRC0emF0uzvPMJ8EQ1Ag4AQudqC0XPHFBkf9uEqoExL9rfUdzZoTLa2b2eGdavkmSCsZ5N4ruX245NsVuXZqfuesKLlFnJ6ouXWENkr7Gk5GQLTkpyEoNVd717aDdkEGfXzipKSOEg0h9+2MgD2Lk1tO6Atj5u/pjP48AAAgAElEQVQtGk+ojzQMDuKzINNvgjBODs1z+iWOgNbIQW5cuYsPcDuQdsRnJtCKwoUBnIgBAyLfrd8E6Zu7Ph/n0GmhgEmpP5BNgUASn01AU2OTw8JAhvE1o2FyUzdrh02KTxXUltOZf4+jdaRNQXq0wwaOhtuyaf6jDzkfYG1nl/48znUSRwGbUxPhAzIl5Lz0sXv/HYGdQ8AJsH/KceLiWEWzcALcuaXhA94FBJwAh2f5cuaf5Gru3Cc7d0FefIyOwFYh4AQ4PJ0h14lETyfArRJ9H4wjkE+Edoz+fiUPqQxEEL04Ao7AFiHgGmB+MvmOMScUMIO9OAKOwBYh4AS4RZPpQ3EEHIE6BJwA6/Dypx0BR2CLEHAC3KLJ9KE4Ao5AHQJOgHV4+dOOgCOwRQg4AW7RZPpQHAFHoA4BJ8A6vPxpR8AR2CIEnAC3aDJ9KI6AI1CHgBNgHV7+tCPgCGwRAk6AWzSZPhRHwBGoQ8AJsA4vf9oRcAS2CAEnwC2aTB+KI+AI1CHgBFiHlz/tCDgCW4SAE+AWTaYPxRFwBOoQcAKsw8ufdgQcgS1CwAlwiybTh+IIOAJ1CDgB1uHlTzsCjsAWIeAEuEWT6UNxBByBOgScAOvw8qcdAUdgixBwAtyiyfShOAKOQB0CToB1ePnTjoAjsEUIOAFu0WT6UBwBR6AOASfAOrz8aUfAEdgiBJwAt2gyt3woF5f0YklPl7SfpL9E4z2KpHtLurX999ktx8KHNxECToATAenVzI7AjSW9WtJ3JN1A0meiFi8o6bWSTiTpupLeN3tvvIGtQMAJcCumcScGcXJJL7CP1L9I0iMl/UDS6SQ9S9LlJD3WNMQ/7wQiPsjRCDgBjobQK1ghAseWdBPTADGJjyvpa5LeZmbxYZL+tsL+eFMLR8AJcOET6N13BByBdgScANux8zcdAUdg4Qh0ESCmxUcHxvUbSYdIeoek/SX9pBCDm0s6oPDZD0ri+e8XPn9iSa+UdOXC578oCac65lNpOZKkC0u6vaQrSDp9ZH49W9K3CyvCjHuMpDsajg+T9El79+H2W1pV3F/ev5uku0r6tf35IwVtH1PSoyW9RdJpJV1H0uUtcPAhSQfZfP6uoC4eGZKTW9h89M15Kf5ztzFUP/5GIst/kHReSY+wecf/yJ9LcaqRe3CN2x2aiq6+4wNljuMIeVzHGSUdaHIc/r2kvZJ5KJHdQtE6/DF8u7eSdD1J55P0cwtuvUTSByT9saayvmf7NMCjS7qPpMfbi0GgSTdg4bMAEY5PSbqtpEMLO8MivJM5qnkl1BteP5qkPSQ9StI9JOHTKS3UTX2PM0d5IBXeD0IIeUMcr5L019KKJUE6D5F0ZEnPNOf7CY0MWQxMzl0kvbPAB3U2I5vzWPsfs35DoJDsWSU9IyJz5uGFtuBon78/Oeo77SP4uQI+pJBcRRKk+wZJv5d0KgsoQMhvsvn5Ua4y+x15APOX2t9JT3mApF9E74cgxbUlgf/dDf/SQMXcbaSyno7hLJJeEZFGKXnHELJBP1ESGzsbdShhTlgT1Mv/US5K/Zhp31mPN5X0rZ75Y/NmfBSe3VPSlwvbo6+s+b1nnGuqhpOI5IMXcs9/v5XEPDzBfmM+7luhfPWK85AJfHZJr5F0rg6iYvGTk0VHYX5AKZ20c1vKAgNKCTAAEMgVcqgpOMUBCY0s1u4CAbYILwsQsI9nRBEvXH5j7Cx6BOqWkr6e6TDY0b/jS9pHEoQIwUJOAcOwm6b95Vk2B967rG0SbEZodbkSFhvaPYswnq9YM4Bg6UtpiQm9az6ph/l8mi3yWs2b9+duo08mWR/0nflhLtgk0PzYnEstn4AjMkjpI8ASTaxrTug776KYnNJIDZJL1yNyxxywwV6sQtOM28ytXZ7tk91SeWKjhOBYI0T64/V2CiPwq0s62DaMeLMtbeMfzw0R4JDQxTtX7cSVCPMFJJ3JCLhmUMHMg5ynIkByzF42kGAbmzh3NsGq6fPJbKLRXEnroKD6v1zSeyXdLFps7OD/myyi0rbAhoWLCZcKzUlNK8O0L9UoQ7u5+WRhPlcSQvsu08Z/Vtppe27uNvrqh1AeZJvOqIVm456DAOk7xIx2zeaIzCA/QZYC1JixpArh/uD52nVbuhGF9dAy1+CNWw1X01UldSlAmMSvs0GhwXaRfbF4tRJgrDGgHcXaS67xnDDn3h/6fWoCBJ+HFpqY9KuWPHgnaBkIcJjMLiE6taSnmineZ+K0Yncl08ox5Wm7RvMems+Y/Ohby6LILbwp2ugaA/MCFmxQNfLdNwdzaYD0nY0RjYhN8xySri/p9VFHcJ3gwgm+dUztTSTAIPcft42fpPe04LJBi76MuZywun7aKvi1BIiP7iKS7i/pGgY6WkWpzygnzK3jCO8dywgLjSMOoLSawNSHzw+/ZIvpVjqeM5hAovrjmyNAQcAIwmCCT2DObcxskn5L3Q259plPtAL8LX8ybQcHc039fQQYiAlS/ZKkp8xAgFO1kY4B8kBjxb2AlpFza+Rw5ve5CRDXDxrgPc1iwdcaAjUoLPydecZfvIkEeAxz7eCjH9oow5q8g2m515TUfPSxlADTCf6m+RNwfuNIrylzaoCYcmhs+A5+FXWqlQBDdBmfCVpSHFipGXPuWXxMt7PgBBpHV3mrja3UaZ1rM2DyY9M8000j9374vWs+Y2LCQgC7QOi0O4UJPGUbaWAqjA0ywQk/RcRxbgJE5pFTNlCCBmyiBFQoaIiY8GRuoM1OQYA5+ajV9uNMjty7ccT5EpUWyxH6XUqAcRQYFft+5mf4tKR7SfpEhdYwJwHipEVTIxUAjSaUsQRIek2Lfy8nJPwegiL0EROYIMS1IsIAe9Iw8I0Q9btNYdCjpG1cBmi3bBr4OiFBNDXM8dKSzidBFupB8wuRujF+Ifoxdxtp/aQF7Wta4PMsyFWa9tKH2yoIkCyC55iMhJQYNCZcMxAfJDgVAfYFvFrnOibAIRMYfNdGgGFy0VhIxUBdJQXmhpK+Urhi5iRAwD9ORyCilQCJKrOYMUM5boXa/cOecRLVvZrlWRVCcbj/jzrRMsCRY16Yi6kQoc1C6vhxMFHpz/dKGyl4jk2N/DBSc4gwQ4ilWk88n+Q3EsCKyY/mWxdFl5Y5RxtdMhmikfQBM5iLGMaUVRAgOYshSBDWJWuVDZyUNlwem0qANaZtIEBMX9bMf7dOTK0GGLdzRUnvtn+o0Y7mIkC0I1JSWMipT6CVAHEeY1oAOAUh4r8ubQAzD/O1NNmb+vD98TwROuoNYf8uwkC7ZRFCVrWBp5x8xFH9WqFKzceuHK0pCZCxTN1Gl0yS9kQqBhHVOFczh+U6NUAIMERSiegTwca3humLOTwme6NLE49TesK4x8x1SJeiLhQDsjnSAmexTviP7IzY11k9N1MRIJoJTtiSMhcBQhDs1A/sIKhWAmQ8lzLiQbAo+OLQQj5vOUrssAQSMF2ZjFJNOER/0bhSLborDSYm41zCa8k8xM+kCbk1AZ94PvsSVMN4cr6dvn7P3UafTMZzj4xj9fSdshjCPCxaiPQ90YNjCSmQEj4+CAECpC18lyTT499FXvk7m/bY9krW7pi5juvHlxl8lzG2wSrDx8m1aEEJq5X5w58fIkBMGRJsWfipvU8CcDDJ8BfV3ME2VG/TICxRFeHkHrg4/J/uSgQQblR5wiRolmhdQ4XdFjIrPeEQT3Z8hCne4dJE6HNa5B0tEK2UqF5pe5e2BYDApKdgSLGBvEiurk0wLZnPscmxc7fRV38s56Rk1KQIYZpx4obILD4tTE8sFFwcocRmX0taCvXQd/zCJONDgJQ4TS1eu7hp8DNDHC3tzT0PyD4nWfC/QnS4etKk/bApkQsYj7mJO/oIMD32gjpKxJeFEx8Bo9GaO9jQlvbKHKepGQj9Jxr4YFP1ScnhfGxccAwTtHmS/SPmOgGFICwl7TEZCC/1d5Xnm+ZZEjygz/Hxs5jk6CuaLAJAMiiF3Zv8LsaFFsikYy6zIPmN43dxwKdvPLSLporwI1SYRP9ni4UkbASPvnCkj6BWSUnlpAuHOE+v5Sjc3G3kjnjFbgo2DzbCrxYcpUzPxqaEw3ww18wtvteWo3Ch72zq3IYNuZLCFKwF3DLhaByyxfxDgMzJHEfhxs41MsemwxpFxvEls4lAdvikCdihZHzO/NQl621QjlsuQ6BC0kHIOOcAfYkw8E58YiLtVF9EKbcIh+rMvVsbPkeA0KIgCC4ROKr5hhAozIzSoEG6MGLTquRAeepzqz3eR7SNRYEJcSHbaTHn0ZzZGL6bA85+HzogH7AtGc9Qc3O3UXoZAtocgSo2QkqJKX9JC6ChXaM8kMQeAmil7dZiE5MscxuCH+SR9l0WUqIJrvoyBHiJo7goXuRjIvNs+HAOfkHIu+Ysfy+OS78OKxAg5gXpCizePm2I6PD5bedgZ6wlwEJe8MccAUdgKQhsAwGilRE9Ks3TCv4utJOaI19LmVPvpyPgCBQisHQCxJRD66slMggTH1jte4Ww+mOOgCOwBASWToDcbYfjt/Ti1DAnRJJIZ3ACXIKUeh8dgZkQWDoBzgSLV+sIOAK7gIAT4C7Mso/REXAEOhFwAnTBcAQcgZ1FwAlwZ6feB+4IOAJOgC4DjoAjsLMIOAHu7NT7wB0BR8AJ0GXAEXAEdhYBJ8CdnXofuCPgCDgBugw4Ao7AziLgBLizU+8DdwQcASdAlwFHwBHYWQScAHd26n3gjoAj4AToMuAIOAI7i4AT4M5OvQ/cEXAEnABdBhwBR2BnEXAC3Nmp94E7Ao6AE6DLgCPgCOwsAk6AOzv1PnBHwBFwAnQZcAQcgZ1FwAlwZ6feB+4IOAJOgC4DjoAjsLMIOAHu7NT7wB0BR8AJcHdl4JiSriHp/vZhef9E6O7Kws6O3Alw96Y+Jr49bPiX8G8k754g+IglJ8DdkwI+Cn9RSeeRdFMnwN0TAB/xPxFwAtxdaTi3pNdKOosk1wB3Vw52euROgLs7/WeTdJBpgk6AuysHOz1yJ8DdnX4nwN2dex+5IeAEuLui4AS4u3PvI3cC3HkZcALceRFwALo0wItL+mgjNF+UdGNJXyt4/8SSbiaJqOSdJf1W0vUk7SXpwpLeJ+n5kt4q6Y8F9XU9wvjOKOlukq4uiUVP3w6Q9BJJ3y+s9yKS3i3puIXPv8La/M3A84z/lZKu3PHMLey38FM6JzU4U8eJDOM9bQz7SnqbpOeZD/Bqks4l6a7WIPg8TdLPC8dLas3TJd1pYCxd432B5SD+oaCdIbkMeD1c0mM66irFa+j92xiGXWN8l6SbS/rZwDhy/f/2wLrDR3sGk9uuJkp8uOtuv2QNleBYICrlj/SZwEeXdB9Jj7eq0gUZWmDSWSws9LtLepWkP2eaP50ttDvawmTQLMwHRgswroI+8N/vyod1+JNHkUQbN5L06Ei4IN3nSPqqpNtKOrSgXkidlJF7SfqOpL+ZwDP2eHHR5lVtHLcvINjjGc6PtD5ASmwG/9PRp5MbKX5T0kMl/aSg3zxyUknPlgTJhTliDiC4yxkhHijpYTa2y0raT9Ihku4h6UeF7RxJ0vkl7S3pSvYOhArZglcgYv5OBPq+kpj7nLzEzadyST8fIOkX0UOM7VmSrl0pl1TBeiAqzvtsTD+QBPG9V9JfrY3TS3qubahdvw/Bles/G8m9DUPqYVN5lKRfW6UntN/uYn9HDnimZAPhlXW2fy1TCthkviCJHNSgaNWOo1Ak848N+QDjNIkcAZbusMeS9Fgb/Hlt8X1Q0meMiIhKMpmAs48kdi3IFYJ8dX44/3iCcUFYD5JE378UvYsQvVjSdS0KSt1BwPqagDio48PRA4H807HTNloC4zqsoM/HlvRkI803SII44wUdqkCTRSNmwcfjGWqCvtxT0jNsUfNu0KbPZ+NP02B4h0UI/jwPUf6lYBzhkXNIeqlp8W8yLAKJXto2s/tJ+kRFnfGjJXIZNLlSuUy7Et7v00hyvw8NLdf/WFNjI3lPUhlEAq6UEs0v7cu62sey+0+z7OhTPM6WcTSKzxFfGyLA2EeUI8Ba1RVNCU2BBYZGxY72zkhToJcsJDQTEnaHiKELiHNKOljSGyUhrPECPpqkJ9oiL1kgR7b+QcA/LSBAHsGsp8SEOTRhob+nMWLG/E8LxIjwxiSWE4JTStpf0hVMK4sX05AP8AKS3iLpu7aRfCvXUPI72hduAFwGbEKQKQT+QtNoPlRZX/z4nHIZ2skRXO73oeHl+p8jhtzvOWjX0X7XGho7jtw4i35fFwHSuZwQARqmIc9halxT0meLRvV3DQbNpY+4MZNeJum/jFByGmBXs30aYGEXj/AYpgkbAmYh/ULjjE1+iASzi8TlN1c0cEXzXX7ZXAGxRjpEgJh5uDMuZqZkTZt0jw2OsbDRoMHfTtJlJH3cNrVgElcM5R+P5hYwD4a5qd2YnQDzmtlUxDVVPS0y9I93NpkA6SSaVNAWbmImW27AmNnPlHSHAQLM1VHy+5QESHsXMo2VPzPWWHvkt0eYT5PNoLSEjQBznP7GQZ8hAowDFrSL26K24HskyIGrgRI0wRqfX1ebToD/9J21mI45/HLElPu9VE6mqqe0vc7nNp0Ac5PVNah48fZpgKNAs5enJsA4kooTPpi6QRP+pTm8a7SnIS17bgIEptgfSMSZMdUGs9K5KpGJsRpg2DjYbHDPEJzCjUI0HR8cATv60aJh5vqfI4bc7znZXnf7oX99UWmyND5vfk7cMGPlZRCPJRFgqQYYE+ATOnyAOQEp/X1qAqTdy5u/k5Sg61gkFnOUyCmBg6+Uds6eWzcB4rPEB/lv5g9sCaqsgwBPa1FxIsHgjxlPVBxrBH/0Dcw94wQotV6j1kXk+OfJTMB1gu+f1DPcQV+vlPvix5dCgCwgImKfLBhZ8JfdMklRKXi16pE5CJC0GFJWbmXRUnygaByMHa2kNN0hDIRoNOTZtVBLNcCHSGIjqS2k7eCKIFWFoApCTcDr1pFbo7ZOns9pMDwzVgPM9Svnvx56P9f/nIaX+z3X93W336UBpqY8JEiKGUE8MiTA+0+5gbX8vukEGKKRaD6QQon/izGRVxT8VkOm1yks3+vlDeDNQYB0g2Tw11laEMEDSAxT4PUNfQxBkK5o9xABnspyDglcENGtDYKQ2vOkKOhxAvMH3lDSpySxObXu6rkF7AQ4LCg5/HIEm/u9VEyH6omtuBYtu7QPg/cB5oCiEUgJ8mjpZNhFuxz0qQZDAjJ+sVL/VwgosINQMMMeJ+kbUUIrmiJaCcTSlXaSA3EuAozzFPGFELggobuE/NM+hzQYTtaQoB2bK3OlwYQIMCk9mLxBa53KH1gil64B9ktvDr8cweV+z62bEg1wIwgwaF8sor5gwpiE0/Au/hV8Ktj7cTm15ZKRooIWVHoigTpYhJz+wHwbKuQKUndX4nFuIoN5WZJLmKsr/Z2cP0xHCukkZPuXkn9cF9ow0XDy79CIwSTkRJ5d0mvsCBwJyiHqHCdC1248IQGd+SR4EM9Z+A2TPM4PrI0Kl8hlIEBOcHDyp/TUTMk8xXmkLRt/rv85gsn9nhvDutsP/QtzxN9TEzhWYNZiAqdHcrqOHMVHgmqOwgUAYgIkP410i/fb0ShOJ+B3OpmdjCg5W5xOPGYYuXVkoHcVtCGIpqVuyPmplq5C3dSDz2IqP0XQ3EiQrsl/7BpnOGnCWWjORL9DEv458EYIISOinPgYOWZ3Fcs55N9qorYchUPLJF+RhOv0iBoEeEkjduYXmYHcwa3Ut5nKJUf1cHGEY2qMn35A9Bzt68p/zBHE0O+MgTPTbCho1bVH4XL9p36OLHL+ncIxPBLKw/j4nTnj3ygcm8S6mQq/2vaRGVKdStsP2GLlQGxszhR8fh8wxeWCtrYg+qGjoWPm8R/v1l6GMNWhczoQO5LJEcOcxv8FsRJt41gckzsmDI4mSGQVQeH/FIgPAeI4UUvd8c6VTkLN4f7cQuNjRZiNaVJ0y8RDgggbWhn5efgY0X6fYtE2/HzsuswvheAFi7wGnxSXVDMee1FB6yUdaM+QLMcHa7XNGOvYdEznoEQTbO1/yXyX5AOuu/0wjqH1wzMbkwZTAvyYZ8ZE0sa0u4R3Q04gboGW4EfJGLf5Oiy0QPxIpLGQPkQpvaWoBLtdf+Y4dvEFmzRfFiwh4I3EbJ0XojoB9osEpi8+O0zWluBHibBtMwHG40eLRtPF3G5xd5RguavP4ErB6gHf1nzAtWLnBLhW+Hsbx7cSfJgtwY+SUe0KASLj3PhDtoETYIlk1D2D24pglxNgHW7ZyxAqq9uaxwn8cH0VKTql1161DH5XCBBs8H9xk48TYIukDL/DaR8i41xpt7iyCRrgUB7g4gCt7DABCW6t4dgPUW+ifwQ9iPpxhdQYp32uK3EazGJ9OLlB+u+OwBAC6yDA9NbdlhSabZnVrmvCp7o0YAgjgizkMRIhpaztRt5tmUgfxzIRWDUBDn0HAwR3TROBiEg2JlLJ0TDST4j6tn4DpUQKh9IQStI5StrwZxyBRSCwagJcBCjeSUfAEdgNBJwAd2OefZSOgCPQgYAToIuFI+AI7CwCToA7O/U+cEfAEXACdBlwBByBnUXACXBnp94H7gg4Ak6ALgOOgCOwswg4Ae7s1PvAHQFHwAnQZcARcAR2FgEnwJ2deh+4I+AIOAG6DDgCjsDOIuAEuLNT7wN3BBwBJ0CXAUfAEdhZBJwAd3bqfeCOgCPgBOgy4Ag4AjuLgBPgzk69D9wRcAScAF0GHAFHYGcRcALc2an3gTsCjoAToMuAI+AI7CwCToA7O/VbMfDjSeIbJ5e2j8j/bCtGtd5BwAk3tq8V8tEs/pvz64Rdo+VbOQ+WdAdJ95F0kKRZvo/tBLheYdvU1s8h6aWSLizpFUYufL1vU8rpJN1G0l6STiRpFR9zOr2kV0m6mKQ32Vf1+CD4tpUT2txfW9KnJN1M0jdXPMj4m9VgfVtJv5ijD06Ac6C6HXWiVb1c0p8k3WDmj7TXIHYsSY+VtIek80o67ooI8FpGfO+2bzfzFb9tLK0a4MklPVsSH0rfU9KHJYW6nmsbKZ9f/V0BaK4BFoDkj8yPQCBBPtr+gpHNTblA6AqL65H239wa4NEkPdG0P7SRQ0disY2vx59bRVbuLYnN6pWSrmwD3rjP3roGuI2iON2YkI+bmgDfXdIYM3iqBZL7tnQ6+ikW3akkvdhI8EPTwbtVNU29wa0EHCfAlcC86EaOIunOkt4v6asjRjLHAnm4pMeswAS+jKQjSfrAXM74Ebj6qyMQcAIcAZ6/unYEVkWAax+od2AeBJwA58HVa10NAk6Aq8F5a1vpIsCLS/poz4i/aDlCX4t+J2JDrtCdet7J+WBq26uZjOtJ+r4kzLgbSSKSR9rE+8ypj0nzx5oKJQ319xbm9A1Vgu/ZLZ/p6pII739H0nvNp0SawV8r2w+PkwpyK0nUe5GBOtI+5ZrD1CP95faSriCJ9A/m+20W5ft2roKe3+eoNyXA30u6o6S7SjqGpAMsn+3nFX2OfZW51z5oeYjIWElBHoiS3sOwDbJIntshkq4h6UWS/lBSmT1zdHvvLpIuH8k20errSHpNZX1Ui2yBIRH2+63h/Sn6UARhnwYIqCQgPt5qeb4kQthDuTgkpT7Koj+8xvMQY8lktrRXMsAgzE+1hfBDSWeU9Dhz7pPjdl9JPympLCF9CJ/xUfaT9IAEH8ZEOgDCjp/qdZL+T9IFJdEfiBR8+a8kNSDu4qUkvdAI9UBJD5P0Lfs7An8uSS+zPtWM7diSHiLpyJKeKekHksgLgwwfIQkiYaG9s9IXNle9MQGCNTJLbmBcnmc41GDMph7Pb7qJEBUmDQd5Z34PK5CfIA97W14d8oJf9aiSrm8yCa5ET0vWDE2ysSO/54lkgMjrdRvqC5s1xHdrI78QzS3pz9j3Gc8UdRRMxT8fGTKB2aleK+kskkq1iJArRQs5zS/taEt7ucGGUwIIVbwAcMgzuSR7vsGEvYYoaPcCkt4i6ZQd+ATBJHXiXpKelRAGicYQF4ILOZLXVpptD5k8xxKB0SCJ0kJ+lDiBtHTOAoahz2xkpJfE/eE3Fi6LljZvKak0D26ueul3IEA0ajSobxiuaH/0F7Imck1/SaitKTl5ZO0gV+DxsUzFbCiQ85PNAoBg4mgydSGrrJkaAiQP8o1mCZB3Fwr1cYoCGS2tj40OOT1zZFHUEODY9+n7FHXUzPHhjNtXWhZTbB7WEmBLe7nBQg7f7RFQzGO0MgraA1pczXGbof6i5bF5/LLDZUB7YfHsYwuURGNMlpKCgL7ahJs+o/Fg+o0lQPqM1sji/GxHR2LTkKhwaV7gXPXGBAjJ0Sc2lTCHMYGhqT/IkrpLMC7FEoI5k5mZQ/UGecCdAMmwkaSuFzZS5BCSLNG4aC/MCRrk65MOkLoDJuRwltZHFZi9JC6zadQQYGh+7PtT9KF0jreeAK9iJxi6fDTx0Sa0QMy8muM2fQTIbo8GhXYylKAba5A1gnYSy6pnbPjlENTQ79ZNBELGZYEmWlIwh0uenave0MehIAjaBC4OfKRoiBzpqtHyW7FM8UsxuJKk93SAjFnNGVw2zlLC4nk2Q3zz9zf/X/Apt9RHt2Kffo1chiGNfX+KPpTI8OHPbLsGOAREvFN92YIkJb6cUGffAokX3pAAndTOlhJoqHGmM2f3lPSMDu2xddHiN8Lnh1+LRRUHuYqFqePBueotIcB4IXYF73LjasUyrXesnA31E382Wi9BKwobOdruJypcKmn9Ywls7PsbSYAxSDjCP27+L0zI+AaOqUzg0vZyQhz/Hgt013tjTPa+fgwRYCAHfDW1CzR2qDMfBEEQ/tPYzRn4Fmt8gOF0BQf90VA+WQPswLNz1VtCgOH4Gj4wgjnX7DHt+w4C+V8AAAq4SURBVLo/FQHmTq7UzFOXdslxxX3N/xt+/4j5lgmy1GYZjCWwse9vJAGGSUKocLxiehCyR1MIB5/p+FQEWNre2HUaTCh8SLULv2+BxKb1kAk8VkNh7P9mmhtzkZaahRUv0hr/Xg7/ueotIUCeCfPLn8dscDVYppjEGMx1Zhlrgqg1ZE9qTSgtWQZjCWzs+xtNgAHYWPWO/WdTE2CuvdwCzP0eFghO/5tI+u/cC9HvfQR4fAuoENgYqjcWlNSXV9qNy1mu23HMF4gJT05ZrQYYm2n0Ba2UlKGuwviuZqZXrp9z1bskAiQiTbCL9JK5CDDg0UWEzCXnmEvLWAIb+/4iCLBPe5mLAKfQllIBiE1Qop8c9q/JFSsJgtBmn9M7JgdyufDd1ESh4zv7iHCyyIhIthBgHLihz0OaA+M5mRFvblHNVe+SCJC+EmAjYl/r6sjhS74fN9OkvmuS7/HpMle19zmOJbCx7zsBdviv5iDAoMX+e2Oe2JCPiBQMonOQVF/aQzCVCZrcUNJXctIe/U4uIOkSaBXx5Zxj/FYkV9Nn0jEobzU/0ufNoU6baJzks7FZlPZ3rnrpY+4oXPh9yiBXxTT949Ez2IaBgtC3IbbUSxoMG3lXCtdVJb3dCXAY1qEo8FCib2wCo3HgB/y1RRBZRJRan0tLe0OjI6JJP0krSB3BcaIymhMpILVH4ob6Gye+4oDHh4RDOi4hh6srUXpoXHHdaBTkOob76Yb6lFtgBFZIHkYbHSpB2yxN3J6rXnAgFYer0wnKkebCMcNQ4t9bNK8xWHbhh4uF0zvIAf66rtukaZNTPPsXBi+QIU6idN1RyMZDsnWtdTHWNTP2/Y3QABkEDlUWBAU/AlekU85v/85ORgY86j3BEDQZtBKepdQchWtpL7egIXcuYiTNhJuNIYm/SCJBFKFBe+IG25ajaBAoZ045ZkXpOgrHmBA+kl7JQ+TP+IAoaFKcEmGzwFQpJV/IBDINR/Di5N8UQ8x6jrVBwKUFs5w5B5+uwpHIBzbcCzh1vZwrvpClAoUUEFKDmGc2Ykq8EGt9b2i7JJgH+e+a31JMw3P0GRJE5iBsTgChXSOTnEyCzCic8imVh7CJQvBou5ArSfEkyyMjZAjUHPUMZ5XBET8yssOnB8ijLIkmj30/YDWFGV00P7WXIVBpSIPhCM7Bdr51rssQutoLAl40QEk4hiFpLkM43wSXEdRchtB1AQBCzyUMLCp8N6V+vzSdAuIOR9Zq+pTDjT6TWhEO13NWlY2O/mIWly7OtJ0p642ju3E7MdHFPlY2Kojgf3ODj05XdD06Jhoc6guXWHASKZZHiPFLFfJAfZwA4fgf2jhaYLhwg8s+2Kxq5mvoUpOSDWTs+zHeayXAAhnxRxyBjUcgTjTHbxm05o3vuHdw9GmUYgj9PsBiqPzBhSEQzgKTIlSbBL2woW5dd2MNsEZ7rwbCCbAaMn9hIQiE1JOWFKeFDHFruxkTIH5sLnSYpTgBzgKrV7pmBAjIkfxLwI5AQe66qjV315tPEAgESGSfXEd8mrMUJ8BZYPVK14hAnOJUm7Kzxm7vbNOntbPM3GhEoIr0oHBIgaO3ZCTUBj6LwXQCLIbKH9xwBJBlkstJh+FOQy6I4Hr50nzFDR/e1naPzzlwFyZRe06tkDZG/i7zR/BqqpuJOgF0Atxaudq5gZEKRFI7F4OSX8lFuF42HwFyW8k1JO+Yk0zcsM23XLjmK75papaROAHOAqtX6gg4AktAwAlwCbPkfXQEHIFZEHACnAVWr9QRcASWgIAT4BJmyfvoCDgCsyDgBDgLrF6pI+AILAEBJ8AlzJL30RFwBGZBwAlwFli9UkfAEVgCAk6AS5gl76Mj4AjMgoAT4CyweqWOgCOwBAScAJcwS95HR8ARmAUBJ8BZYPVKHQFHYAkIOAEuYZa8j46AIzALAk6As8DqlToCjsASEHACXMIseR8dAUdgFgScAGeB1St1BByBJSDgBLiEWfI+OgKOwCwIOAHOAqtX6gg4AktAwAlwCbPkfXQEHIFZEHACnAVWr9QRcASWgIAT4D9n6XiSriHpapL2WsX3CJYgIN5HR2CbEXAClE5nXxHjQ9p8Vexd9i3Z2T/Iss2C5WNzBJaAwK4TIN8ffaykPSSd1z7N5wS4BMn1PjoCEyCw6wQYIOTTfE+2b8o6AU4gWF6FI7AEBJwA/zlLD5f0GDeBlyC23kdHYBoEdp0Ajynp6ZLuVAjnLSS9svBZf8wRcAQ2HIFdJ8B4elwD3HBh9e45AlMj4AToJvDUMuX1OQKLQSBHgDeXdEDlaFrNxItL+mhPWy+Q9DpJ7+75/YuSbizpa5V9HdIAfy7pfJIeJOkqkr5v5vLLJP1xRDv+qiPgCGwIAjkCpJvkyT1L0sGJ/yv2n0FA+NEOkfS3EWMjGnsfSY+3OvaT9ABJv7C/H0nSFSRBQqeU9BFJexrxjWmX6mMT+NaWFI1/8LjJeO5leIxtbwRM/qoj4AhMgUAJAdLOvSX9eIAA0dB45g8TdOrckl4r6SySurTJE1s/rizpCUZcf5mg3UCA75X0NklHM6Jl3GETuLakD1qiNBqhF0fAEVgwAqUEiClMiSOgsQY4JQGeTdJBks5TQICPsETmKaYgEOB3JN1F0jsTbfZWkl4u6cuSbiTpsCka9TocAUdgfQg4Af4T+1wUOPZRXkLSx9Y3bd6yI+AITIGAE6AT4BRy5HU4AotEYCoCTAf/SUn40l5lpmJNwCA2gWtAJWr7adPM8CFiota06xpgDdr+rCOwBQhMRYDBB0h6yKkl3U3SXQ0fLhsgmvrnQrxafIBEh2n3npLuJ+k3ku4s6cAKEnQCLJwgf8wR2BYEpibAEAWOLxf4gaTrWIpMCW4tBBjq5U6/Z0siYHGopBtK+kpJo0kaDEGf9Dos9wEWAumPOQJLQaCUAFvSYOIk6prk6DEECO7kI+5rE1DTrmuAS5Fa76cjMBECJQR4ZEs1IS3kw1G7uTSYdRFgSFehq+TtvbkQKyfAQqD8MUdgWxDoIkDMxn0kvULSMySdwhKO7yHpW9HAOSHxXEm3lJTmAcbkWGuKXkDSW+ykRy4ROs0DjE1g0lR4/9sFkxVI/sEWvLmZpJ8k711K0ofs364k6T0F9fojjoAjsMEIdBFg0ITibnMc7WmSwokLgg7kwmFqnkPSS+0kyK+MuDjORjCCyCwBERKbSyKyECfm9t7WeO4oHEfmHi3pT0m7JDNznC0Q1tAUgAFm9wslXdICKFyP/4YocHNs04LpG4WgDjj9boPn1rvmCDgCGQS6CPC0Rio3MO0JLZATIOECgJI79EIaDMSI1lhCfmMuQwjD/Lyk10vaX9J3C2e/i/B5NdwMzUUIfRdCeEJ0Icj+mCOwiQiU+AA3sd/eJ0fAEXAERiPgBDgaQq/AEXAEloqAE+BSZ8777Qg4AqMRcAIcDaFX4Ag4AktFwAlwqTPn/XYEHIHRCDgBjobQK3AEHIGlIuAEuNSZ8347Ao7AaAScAEdD6BU4Ao7AUhFwAlzqzHm/HQFHYDQCToCjIfQKHAFHYKkIOAEudea8346AIzAaASfA0RB6BY6AI7BUBJwAlzpz3m9HwBEYjYAT4GgIvQJHwBFYKgJOgEudOe+3I+AIjEbACXA0hF6BI+AILBWB/w/1D0WnZGnJ0wAAAABJRU5ErkJggg==","resources/explosion.png":"data:image/png;base64,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","resources/fire.png":"data:image/png;base64,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","resources/fire2.png":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUAAAAFACAYAAADNkKWqAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjE4QjE3NjFEQkZDRTExREY4OUVERDM4NjRDQ0I1MUZEIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjE4QjE3NjFFQkZDRTExREY4OUVERDM4NjRDQ0I1MUZEIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MThCMTc2MUJCRkNFMTFERjg5RUREMzg2NENDQjUxRkQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MThCMTc2MUNCRkNFMTFERjg5RUREMzg2NENDQjUxRkQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4GvjEGAAHyCElEQVR42uy9SZNd15Ye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","resources/fireSmoke.png":"data:image/png;base64,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","resources/fnt.png":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUAAAAMACAYAAABVV77vAAAgAElEQVR4XuzdCdh/Tzk/8PvPH8m+FQpRoajIGmXJVtFCIZLKmiQUQohS2SIqUUq2bBFCVCKKkEjIkkLJUta/tcT/ev2aO/M7v8/nc2bOOZ/neb7PM3Ndz/VdnnPOzNwz877f9zIz/ydGGRIYEhgSuKAS+D8XtN+j20MCQwJDAjEAcEyCIYEhgQsrgQGAF3boR8eHBIYEBgCOOTAkMCRwYSUwAPDCDv3o+JDAkMAAwDEHhgSGBC6sBAYAXtihHx2fSOALI+KOEfHtEfHdEfGqIaHzL4EBgOd/jC9iDz86Ih4cEW8bEZ8WEY9vEMIHR8T3RMSfRMSnRsRfNbwzHrnEJTAA8BIfwNH8y0ng/0bER0XEgyLiehHx0xHx+RHxwkY5fWhEPC0iPi8iHtb4znjsEpbAAMBLePBG0y8ngRtGxAMi4mYR8axiyv5gRPxXh5yuHhGPi4gnFRDteHU8esYk8KYR8Q1F+X3jPpfGpQCAHxcRL4+IX46I146IT4mItykT/J/PmNBHcw5L4HUj4rMj4toR8WUR8a8bCew6xW/31hFx34j4oYj4zwXffpOI+K7CAr8jIv5nwTe8ct2I+IyI+MoN+7iwKRfytdcr4HfNMg5/vU8KJwmAN4mIhxfTxOR4dMPQ3Coi7h0RnxsRvxMRrx8R3xIRHx8RN4+I32j4xnjk7Ejg3SLiRyOCdr5lRPzWBk17s4h4aETcISIeExH3WAE61gMAvU1EfGJE/FFH+74oIp4fET8TEe8VEXeOiC+NiFtHhDaa+6McXwLcIHcqOCGwdRBnTgoArxwR31rQ+P8VHwuH86GCLXxdRHxAic5xTicAYoCfGRF/u4E836EI61fKn/UnLdSvjQhM08J45Qb1vV9EvEdEPHIFw9igGU2f+IgSTNB/zO33m97a/9AHRsQzIuJREWFyrmGA5u77l+8IYPxI0fovXtFGFsb9I+LuEfGRxZRu/RxlbeEBPYAHAH8vIl6rfACz/I/Wj43nFksglewvRsSXzM2xkwBAdXxYRHxbRPCxPDAivjkiXjHTxQTNty9Rub+JCJT2+yPipzby0aDK/Ea3iIjbR8TvVm2yGO4aEfcpjGALtgnUv6CYay9bPMTHfTEDCR8eEV9RJtCNIuKLCxNfEx29fonIsgC4NNaUnOjM33sV5bXUZM12XKkoXQzQD6ujp7xBRNwtIt4pIrhuHlvM4Lm53lPHeHa/BMzdr4kI81VK01/OCeskAPAtIuIHSnROjpXJ2qIJEwCfHRHfWTryOgX4fj4injLXuYbfA+YnFDYG6Gq/ET/V90XESwv7WQNYIpJMpI+NiDeKiF+IiK+KiF87gyzwvSPiIYVhM+kUbWbCSSehfJYWbJslQBYvWPqRwqB/IiJ8j8kJUPf6eTrr+fTyfezh3zvf9fhViyl+tYj4pGIWL/jMeGWBBFgY5qnI/9Nb3j8JAMz8qjePiNtFxJNbGhYRCZwAKgGQCcxEYU78YeN39j2m70Dvk4tPcWre8Sk9ooAWwFpSMIJ7RgRQ+aaIYJ7JUeMG+ISipf5hyYcn79B8ZIuxCgSIflI2vaCdPjBMlQM/k4Hz/wHiD69o77tWwYEl4KJqMuUT/vpiShvD3n7u6wLQovT4jSjtJcUYGG/j++VlQa5lpkvacdHe4XawXilo879J5scGwPTZ8R8xe5lUrRM/AZCv7MfLaNL4fHJApWfSAwg/NfPkR/zeiOD7s5hq9pdRJO/M+hEOzDQgymRPE01SrnpQ9P8u326Rh0XPBJWfRpHU5beLMviXiBDux1jJyG6G2qRvWRDpd+X8T6XjvTcupgU3xotaPrTnmQ+KiLdbAS6ptChBbTE2S6K9+7qQ4yV9ggLoNV0BMzPavOf7e0mZp09cIbPx6rwEMvDxniVo2uxbPjYAysninGZCiYb1mE8A0CTko0uwk9kv3wuLbJ2cfHlYAvBRv8CGRYN5SVcAfp65S0Rw+osyM8+ADQ0uBSfTbbQJ82zSLhHB5yUlg1lkd4GADkD/8/kxfc0TuegFT6SO6DdXAMZqoWnzV0fEcyPiBsUsFA0VQPq7jno8mkEAi5gzX10ASyT+50p+3JotYiK/AgNLQTSVIiYp4NBk5nTIIH2UmG5PkI2fGsPHuuUg8nOLcGOR1yiKXxBt1ifV0dbx6KslgBxYpyxNKXJ/1iOYYwIgFgV4gBgTkmmwxu/T06/6WYv6fSNCeyxek5Cfh9DsEBCNFjF6TkQAGYCLaWJPhMks8m+CNqGxqx7wxVYxCkyTHHy/Jzk3Fz1Gl+YnJfBvZduWhQXoMKJWYN4nS/PBOIlo+vNjisIBhj2Me+lYzb3HfcC8IQd+HjLYqmC5lB9Fye1ijix1T1B25tpSM3qrPl2E76QfX9Q9LcXmfh8TADEtTEQ0Uc7eM5tbddwHr1J8R0zPz5lM8owKf0iJCm8B2Glqk4MtWrVvrbWnIopYBt8UdiZNg4mKCQJyroWtAEp6ikgaxaAOTHMtsLb2c+653KmBkYvyLQWoXfVIqUn/NPY/l6Z1qK0Y85827kGe63OyHC4QgUHzZ0uzv6X+s/pMuqoEP2RxdK/XYwKgXDeROj+YYLNdfmRp5yKy59NCrxd3si3MDxC0+OdammtwmL7PK0GXHhPY95nqtmgxR6WP8IFhrNgKP1NrYKmlrZTVzxYTk4/0UDEB5UbyZ55E4ePB/kT6tmC82eYM8mARlCJz/6yAvraJJtuZsojlnMTAnFIdNy0+9h/r8KdfrqnHAsD0W8mlWoTMRxQocxgom1DM0dqnlbllQGZLAOSz4guVDvNZJYq9doEJKNB8zOs1frkUNae9CcXcJwdtZcrJkeR75WOUF8fsZBrz6WqD1J61OX0tw42VS8/hkxWskBe6VXnHYlr/auX73Orba7/zliUyLcqJ9doQMMqrA4mivvJzFyfVHwsA0+zDsrZaoFsMOsBgRv7BDh+P5FU5apKtp0nRa+u2rYpZJEUFkJjIFvLSktF1fsUt/EyYnHQgZjYfJyDEKoGcoIX/w0KUXy9BF78/KeanXdgoR/cxor+2ronU/nEB/b9YOjBHeC8VNl+v9K+1ivMITTzxTwosya6Q8QD8FgeXjgWAIpMWCCBZkze2pWQTNJiTIr58NFkESkwwjIfznwm0tJCp6Ld+M08pAQsKcHCsY8U9+ZC72iEwI+rI/7c0oprf1V6MikbNlJ9agfFbSo8hH/WJtG0Buj3yxf5E8EV9jd0a5bGrXkAv/0/EfjGb6OnQgWfNxWT0mYYlKDXY36uFZr5KfJdytDrR/BgAmOYvpz9WAaXPQmHamUQc+9OAAfMCU5W6INq61Mlswor6ihjboG9hiSwCQYELA6YebVhqYr9VeZ8G7I567RgIYCp9g3M98wadiiKAxVeZ6TD6lhFyZvxJnsTzLkWhiJ5v7VIx9qwCpryxM14nXaSJGQNpUuYedwR/MTeEvv9mUXSyFgRC+EKxb/N5zd7nk+7nFvUJYrJIyIs1tYoRHwMA02dhcZ4WZZfS4EBLIGzLnIXD/MX6sDHAZAGLTPs/6RUEifkJ1vAJAUkTk59LTpgJOVc8K5fMZn9AhVVgL/LCBFz4Am0n40frPW0k6zb5+eAwwLVBGmwD62OaT5OKJa9jqvXpyP5PUrf/702ynpPdod/ntkhBKm3YKuJNUUmnAfIOT7VF77QUNgVjPeaBG/pq84C8U6k/zL7chy1It1RJrxmHmp2u+c7Sd1lxtpBSBJtgy7EA0AI1aKcxSLuEC+AwGszlJycPZLSaj64212nhHPAWX5cILYbHH8FkwfBQdYvKySK0uCieCK5FtoTJYGaAij+MeW3hYgH+bl+xydEDilix6LLv1Ts/iCh3RWQCe7oQKBdpIr1J1ksnvff0WwAknd5rvpXvGi/+RC4JvlTWCjmelZJbMc0p+51Pq2RWwLR+TDmtg5NoG6aec9T82yQIdgwAPAlh9NSRyb0m/K4cPMegm/xrE2sxOuDDjMb8RE75QfnomMPqpxQkWwu2mDwth0LUfbUosFO7POyEkAQKuC1cfwfUzO3WcggAMWa+Pknizth7n8JIgLoDKk6yJBjoKxBcW8wJCsq9IfZlU0oWdE+C+to2zL2PaRtje4rX7nufq+vQ7zFT88qfuQGA/ATOeufvmnZQxFKUKPytLIDLKPd5LvrHt8OUMMGnuWN5krAz6qanwfTKBZOUY8iUyoIJKiKMQASLEQzhyM+TVlrr0VZ+Dwmx3mXiM0PTZ8UpzDTqYQvYXG7N0/8aACRcAwgRUt80+bDZ5o3mrR1reA5YGUMBqilTbXj9co+YEzcu+6YpIzJds9+7t/6W5zPB18G/Wx0c21LvMZ8RZJOvx53UM0e1Kdcppi7pfzPLcksAxBD4vkTqtt6kvnRg8nQPgDGd5HaqWOCczN17CHc0SLqCKClmJyMdmABAEUt15GkwwM8BBj0ld6jY+ZGyZZpgg9imginIb+w1TbXNuMnle2oBUYxS+32TW4Cv1DmG2O0qp3NPp6tn0xxfG4Hm8xOEcmafPlEilNNZSdLXZWuSq8R8EXSi4NbKnAuGH5qSc5TcSRfmq3nKFdUbaLKPPpUe/+8mpm8KYEsAFOVk6gEAwHLa5kR9cogJUJ8fWGfXS+/YKvLnDEHb1oAcYFGYWLZVSeOQf7gkZ0kgBVMBBAmezFcHbvod1qkfdocsKcz125YEaH5PE5W2dfKMYM7qdIMljareySPluRTIcgkgGPN3Lr7ga5VgDja7RRL5yu5d7nW+VizHXLLg1273S98tN8/aLX5L+6kNFA+TvvWaUnWlwsIAmw447W3glgAoV8yPY5nOQhGNFikSPZtGXNP0s8uh9+jz1r5hhJKrMaglC7a1nmM+xz/K7wZ4e5nllu3KKDCwWpI+ZBwE5igJoM6PqF+U03kveYiwzAOMcjPzsVNwsIZbRf0tQUWfzwDMVid+X6HJWwJgpzzO9eNYFJ+f019OMl1ka6FKaGcuYrT/uPXHO76XCsvCIdfWRGjRY2Y80w9jltfo+DMZAacFBB3d3uRRqVnSnGzFvJQK1s/CkY1B6XUfdNDS2QGALVLqf4aJxWzkuD9L/qVpT5gYght8lUx2B6FiekxpwG1HiCDINEKeO0MEdHrOeOyX5P++ISrtvl7+yZatinm2oTMUFT41ZthmEcQ1nTmhdzEupq/81tPKbzyhri6rZgDgMrmdl7eYGKLHfE55g5nkb9qXyWjxADumkzxDt/AxqUT0BHykyEghOYkiMVhbgZ9I+Fwk0eKX9sS3qZ0S0be6N+Qk+jvqOAEJDAA8ASGf0SqYh9KCpObsikpnKgZzEzjKwxJwYUoqgiQieiedE3hGxTmadSlKYADgpThq27QZ0wN+oqrT46xE7TiebSWUklEfMy4h1u8Fuy7V4M42EhxfueQlMADwkh/CVR3gH8PqmIrOmQNqNuAziXOf7GnuQljVufHykMCcBAYAzknofP8em+PPk51vFwvz1mZ8Jy7bI3yaqS/nW/Kjd2dCAgMAz8QwjEYMCQwJnIYEBgCehtRHnUMCQwJnQgIDAM/EMIxGDAkMCZyGBAYAnobUR51DAkMCZ0ICAwDPxDCMRgwJDAmchgQGAJ6G1EedQwJDAmdCAgMAz8QwjEYMCQwJnIYEBgCehtRHnUMCQwJnQgIDAM/EMIxGDAkMCZyGBAYAnobUR51DAkMCZ0ICAwDPxDCMRgwJDAmchgQGAJ6G1EedQwJDAmdCAgMAz8QwjEYMCQwJnIYEBgCehtRHnUMCQwJnQgIDAM/EMIxGDAkMCZyGBAYAnobUR51DAkMCZ0ICAwDPxDCMRgwJDAmchgQGAJ6G1EedQwJDAmdCAgMAz8QwjEYMCQwJlCtX/+skL9saADjm3ZDAkMBpSAD2vEdEfFxEfHREvGdpxB9FxP0i4sci4j+P3bABgMeW8Pj+kMCQwFQCb16uXX3niHhURPxWRPxrRNwuIr62XM715RHxzccGwQGAY3IOCQwJnKQEPjAiHh0RX19uHqxZHjy6b/l5bkR8YkRghEcrAwCPJtrx4SGBIYGJBK4UEQ+OiBtExCdFxIsnv3dN6wMi4ksi4qkR8akR8VfHlOIAwGNKd3x7SGBIoJbA6xZwe4uIYOL+e/XL146IzyrM0H/fOyIecWzxDQA8toTH94cEhgTmJACHbhERD48I/sFvKEyxBsi5byz6/QDARWIbLw0JDAlsKIF3iYgfjoi3i4jPLX//nw2/v/dTAwBPQsqjjn0SeIOI+JyI+LSIeGSJCIoGjnJxJHCNiPj+iLh6RHxNRHxvRLzqpLo/APCkJD3qmUrgahHxLRHx8dUv+IC+6yQTYcewnLoEPjsiHlh8gsb+xMBPzwcAnvr4n1gDjDWmxbl8l4h45onVfPmKRPruFRFfVwDwKyLi3UpqxN9FxB0i4qWn1LZR7RUlYM68f0R8UUT888YCeqeSCvNzhf2diNlb9+EkAFAdHJs3jYhblqzvb4qIBy0U5mtFhIiRn//o/EYdaZKLZPGtNblev4AKGv+Czvac1OPGgG/lUyLi2hHxkIi4f2Pl3vXz343Pzz1GXpgfzf/3Jfn1WRHxBRHxMRHxyRHx53Mf2fN7JrW8MtupLuVynSIXwYCj74aYEdR7l3WCnf/thkI1p+T53TMi7njsfL997W4BwLeKiK+KiMeWjO1eGVwrIr6jODZtdxHtoeV7GcjrRcRnFhbjO963oP+so0Hq/r4CyF77fxFx14j4wRVml208fxERv7fiGx1duAz4e8wEgINxeY/iITO5VT/VUCl5f2lE0NSHCjl+ZEQAspZigX93RLxfUYR2A9j+9D0R8QsL5AjUv7jMj98s6RS/09KQHc9ct6Ri/HREfGfnN25YIpg/uuBdVb1RAYS3j4h7dCpna/kNyztbKStt8l05ex9c2raWMKRI9ZG/76/LeG3NLpuGbg4Ar1oG8tYFLOTuCFUvoarMHBPj1yPi7h2Dq43XL2ab7HB02WL5jMIYfqahp5iBxazd/AwW4LsWMHifAoj8ELLQe9gDxiKChVH1gNK+JuunRfeiiPihiHhOyZUyof+psCMsGmj/Q2O/jZlJJqeqp29khqmR20MLeEpcJTtblD6qtPULJ/lcDc26DIwx0C8rDz+5sOhe0ALuAJ1CtbPgb4rcMEtm/vNbGlM9U5vn+gxUWxkYBS2B19z89qJ0eiwUScLWBfb7853mpnrvHBHWK2XEEnnLAqhY2yvLGJGXuYRxTZOQD4nqmmXdcJ/8RqdM9z1uHzAA1Odf3uib3Z/ZB4ASFbGlz4uIpxetZtJanPw0BrmHeXn3PsXOxyZbzS8d+tjKd/UHEZEmFJPa3sHfbej1bYsJbqLUGkxiJl/UnRaE300KZq/B+8qIeEVDOw498g5FvoDlUGEqfluDEgJgQAGYWpC9OVWAHdB+a2G4Fg6G8bAiLwycX4hC61WI2sakAqQvjAjj0wt+vsFEfJ2IAMLG1Xz+0Ih4TET8YgEhYNhauFc+vbSH4qCAWot3me/AhWsFE20p2nzjiPiIiPjJhVaWusnBnxSxea2QiXkKxK1BzL8V0Kdtv3k5vIDM1yp7fTZmdnocfbvboUHYBYAZlrZnz2D+QDXBNdqkNel7NOyVy0LC2m5fzOGWybHrmTcrDnN+RQJkfi4tTKdvLIBsQ3ZPwdaAgYX8hz0v7nn2VmUB8I0C1DWTzLiS9duU/t2kgAUTE6tbWj6oMCzf5bvp/RYTj0lNefEBYkiYFrDFemyEb2UmWB8FRFE/qeqQOlgp5u7aubZUTj3vfXgBbaRiKTj11Lf0WYEQrhTzvcX6OFTPmxRGiVxRzlua7F392wWAH1L8QyYSzVT76gAGVoGV0ZCtgQwmNN8bBmdi/klXK//3YSYK4LWfcKnv7ioR8QnFdOKDYkIDC2ZiT7GIP7+wU6x4TUlz04Llb2kx6/fVR0bAQfuYmADHOGP1fFQm8FKTAzBbqMavlX1nO80dc0DRR8xU4UPlAwSq/Myt7hF947bAtPjL0v+YAGjB9rZxzRgufZcpaE1RCD1WlfrMG2vBu0xffkvK+B0j4k0jgsuI64Sy5vJhXhv/Jf4240PmEpZ7/fdT2bxxIR3Ix0uWCm6L93YBIEH9SERcrwhrmpclKPK44lP68cZG5MLBGCzIJeaitt6sTBaL5BkLNEcdgcymM8EAYg8DzEX28hX9qUXnTDTnn9GGUzO9UcSveYwpxacGbER+LYwsgPEDFvinvF8zK75ci66HCSTD/ZViKubEZ7a9b/Gj8oO1mkQAzrzCAC1sbgzuEC4WZiw3gY31vaZ/r7zXPs+tYF0Yr17FZE0AE+spzV9z3N8VOyv+pfzdPF/KtCgSik8bj35E1VqB9ry/CwABHF8flsf/w/FZU3PahSbg03tZY2UJgPwHS/1lTF+7BQCFAMGSor9Me9/5t6IpmdKO3NGnn2j0Z9Gojy/foSCAg3wpEUQLsOcInzwh426FifLfWMzY6fMKu2EqtPjZ0qfJVbErwv22EfHVZUx7wIusb1NASh3+3usMJ3emakY6a/M5FRN/Vc8JIMBy11zgolljaSyZW2ve+bCiSM2hVhfAmvpa301rydqjUIDpGtdM1gugzeeWOd3a1kXP7QuCWHyoLh9NDQyeN0FFmVppcE5u/iNZ/7/f0VK7BbADuUgc5XxFQIHpjX2u9ZmkWaa/HNDM6zlgkBJCMYgATwsQ42d798JWmSC+e6ikP0SUHAP8pRK9xHal52BKrXJL5zKzSFG/SKaAgAiw7UYCUIIXvWZ7KrEeM7XuN3ON28SPLU9+cgGIWGIXlIr8zNZCWQtiAY4sS10aAJp1IoBBbidZpIRwA5Bxr2I5VjtzXjKXkZ1eF9G+dgn28dEKMJkDWwDqYhnsA0D/zyzD/mhlk4LD2b5NZgaHdSt6Z/rLrxZANUFrp/W+xovmWRAY2q7CzOODWxOAyE3YzidrZadMP3mNh4rII1OBb2cu9YR8gQJ/SN2Xum09znypEAILucXMYsaG/riAIQXUynSzj/xJGAB/HXYpfWFJyQCWSc/vyj+l8FcCMVkHcwpoV73cNQDUOC5xs2iXvES+6iXBHTmQ/JGAwtpYUgADdu47S33kS+rd9Q6rBPHh6uC3X2o6T79dWzsI1K4zAbfqQ9N35vIAaW2MD/tK05dQWsGPiQLlmXAWZY8wRcf4rPgbmavSJLTHYsHCblR8HVjbkgx1wQLs0sKW/weU5wY6HfVPLAtO7hWlAKyyPKEoDH1dU2oAlOsmGt9amBgCHnxgFmcWzNAi7WHOeYKv9pA1hts6/tP2mm98nMaV35VfiquFj8k8kUzeW8wJ84zrQeE+MN96Sub/edd49ryfFo4UGABOPkuKfhgv8xzLPo8lt2PKLaXwWXFL59Im8pkDwE0qOWMfqaPATOBWppaL661L5C2ZXQaNgHQd3Vzb7QRA7V3ic1M/9izqB6gxdwtUsnBPydQnTBJL68mN21WPhGFRW4xbwUb9e4nvy/z1rkR0gTvf1L6TXFTy77hkjD8A61EuPeMwnj2CBC4KAFp0GCP2yBRkPi9hjbuGAEOyrWzNOWbaJwfOLhdbwTAS5hjWzIfIj5fRvCNMg72fzKAKNo6xrXE3HKPdgjqYMeaIWZ5GxJdvm3W0lPkdQy7jm40SOO8AyLnMPBIRxTSwn63ZARcBJz7f09Jvy9EDdgIUcsGYvMxV5r+FvSRvq3EKHHwsgxNYVe82wS3qP/SN3AZHOTA/n33sCnd8n0/LWD1lxQEOp9DsUWVK4LwCIB8Yzcxc5a/bagP3dOak/0eUVdR8aam3CgqgCBgx6562AlSXtsV7csvk2TGdsdElpvOa+ufe5S8DyPL9RLT5zJYqn7m6xu/PsQTOIwBmqo4k5Z898sLAkARROPB7cv/O6pQCxIAFq5WSw/wWkZwLDh2zPxKFMWM+Prs+cu+vlJWlu4GO2d7x7UtIAucRACWVckpLs2g5KGHNcElPkaMojWXJ7pY1dV+kd+WkcWUwN20dA84CHj0HHVwkeY2+NkrgPAJgY9c3eYz5JaBybKDdpLHjI0MCQwKXl8AAwDEjhgSGBC6sBAYAXtihHx0fEhgSGAA45sCQwJDAhZXAAMALO/Sj40MCQwIDAMccGBIYEriwEhgAeGGHfnR8SGBIYADgmANDAkMCF1YCAwAv7NCPjg8JDAkMABxzYEhgSODCSmAA4IUd+tHxIYEhgQGAYw4MCQwJXFgJDAC8sEM/Oj4kMCQwAHDMgSGBIYELK4EBgBd26EfHhwSGBAYAjjkwJDAkcGElMADwwg796PiQwJmRgDtxHHR7i3L3tMuuXBDmCtej3pE8APDMzIEL15C3ioj7RcTVy33DrjAY5WJJAP64e+YrIuJ5EfEdEfFPEfGdEfHxCy+575LgeQRAFyK9XUR8TES4gJlQ/YxytiSQ9x67HP2zI+JlZ6t5ozVHloCrYD+uML9HlNsQs0r3dbtn58pFOf7Dsdpy3gDwehFxp4j4rYj4mYh4ZUS86gzc10HO71Ao/htFBMp/q4j4g3KrGRA4r8XNecbATW5u6XN5FNbHvHGR/MeWu5BPov/a4hrNG5Q7Y462sE6iM5dwHUiKcbcG7l6urT2V7mwJgDplkv9buUVsy2sKtROru0tE3KzQZgL77Yh4aUT8TqkXyLj/1z26L4iI/yh/37ItuwbKNZIGFOvEbABxXm/5GxHxpuX/abpfKzfVuXRcX/g93G523hYjExcD/6wC/uTmfuZfL2P5koj4unL15zFvnQN6GAWT6oML43D3skuWnn/kVfdOZa6au+6o5ucij98/cr1n/fPvW9bpcyPijhFxTPcHXLp5RDy8mod/Xi5Oe/RaALTwb1Im00dHxJsXybuO0kXfLgzaYnK/W7kF7Jsi4lkR8e+lHmzqIwuLenFhfn7lekcgdI0yAXW4vt4x773NRbn0esRC4hcAACAASURBVMWk8bTY10fE0yeAe+Nyv6+BJhuUHkgDuz8sC+Hni//jpCYtQFBShseo92plwpHzvQvwfVm5PPwbT0jju88YAH9tRPxyRHxfRLxZYYDPjIgvPNKF8+YeZuN6UYvvR8ucZY38VUT8aUT81zGEfga+qb9uSrROAdsv7GjT20TE95Z1cMwL7WHbjSo/8xeUC+w/oYAfJfipSwFQJz4nIq5U7mp1K5o7cv+4TG4mxoMj4nsi4rs2uJuXo/RaEfEDEYE50aQuPv/AspAfWcBnDmwxVEzNbW5/XQaKubyUfVng31LA7JuLqWfM1WPhuV+XDNxhexrXZhrfd42I20XE+xUZYqgKhspNINpm/LCSLZgypsXnCvBdY2nMjlFyHnxuRHxokbk6McwfL4oX2/qqiHhiRPzrRo0w5iyRmxZT2mefUe4tdofxVSPiQ4qJz8Wxb05yB9ytzEEWy9pizlkXrApjgIGzPigjBOBLFjBe84cS/7QCJqKzTygAxm3zjyVoYd6wcoC+tY8M/GJE/OeOTlmz5MUaQF4Qmq0LfPr8Il8kCQb5N+tUMV+si0f0AiDGQxgWkYXN9Ny3aNzP+60R8XlFGGs6yWfGd0NghPqciPihIsi5RauPBk47TA4DhYXRCC41n3t/SbstEpEs2lC9D1vykT3vWGTXLYuMhgOsV4mI94oIg62YXMbGJeKUx3dHxL0K0GNGnqOtLU6ThUIwebHo3uJ7wPXOEXHNsgDSEshvYbkmIQX5extYBeQL2LArl6XrB2ZLud0hIlgMxljhEvHcr0YEszvZl+ctVnPKHdLAGlM8VMx/CwmwAFqyx/jI0DinCyS/weXBKjD/vGPemr/vHhEPLPVRnLsYIRliSNYRy8FYaq+iz4DDn9pgjD33g6Vd3D//UnUECGLiAgt/1zHAGPOjC3tm1Zl7WZc+a6OxMP8ArnmFjFhb+yyMJAWIh/WhrVuVHB9R5VwLvv2VxYK8AgnpAUAddOH4k4oWmGNbKr5OMQFNlgfs0QhbdX7Xd7TZwmcKP66wAAOK+dCIW7ECddPA/Hm0P/ObNlYsOk5/DMvfmYJLBp1Z5QJ2Ewu7/psSRKn7YDzfuQCuv1skJjH2nAvIpJVyQENbUJigRQggWsa0lrM6mJLaI6gB9MmAiaP4nf8DErctC5AJ/FNFFkuUD8DlcgBWzElgP2036wDwAD59vWGZixQ3v9+PFDnyIQN9CwRL/4uZyQg0sZsfKws/mR5fM1lwpQBC/iZyVi/wUgBysu+shvWwzzoA5HyXlJex9n1j70+gA0QBGuDTJ8xTnan8EoA8C3StXS6pHpl7F5vH4q37W5Z1jLnWygKrMwdYhHyrAl27inlw/7IGrEFm8lLrq/4+4PvwYpVStj9clI5xonT3+hlbAdDAW7gQVEd7/EcAiE/gUWVBbAk6h+YrFvCQiPj+MoC0F8YHmGj7LS8zp23IxQKiKTERWqim3hYuJYCp+V0P9TdxaE4szUIyIS20evKY/ED9A8rvLPx9gGY8aW0mDPOrZ1GYMwAGa8R4BDK+oWpLmji7xhsY8xnfoyxa7/WyTpMdOPjGXxbQqb/xPoW1WLy3KUx4SyVLbsCeGWXMgT35vXdEPL64FAD/rjXCbMf2yPDTI0JfWAe75A/8KCYy/vYC0pSVYi6pA3A/raQRAcks5rqxN2+st17FVsvLvLpnWTPJqvUTa5azZ0yB9K0j4rFFOe1b44iAecESoxj3yal1vMjROMAmFiG2j+Fa44CW7OAPRbNzjrcAICESgIklX2sOsQ2yHxTcAKP63j8G5d0lKH0CArQxxmRxYGcWG1PEwPWYAa2Dkc9hnerCfvmn9DuLqCBThEmyRPthE/rH/DORkkmamFgHVnCMRV/L4Pplof9kCXSJwtdm5VeXvmkHs29XAZ6YoMAEGWEtWxVzFGvBivjCTiLiar5TBBa0NKxkwGv7BHzIk3vBnKJALWQKyIL/25JKdOxodt0P1hRFi1FaW6wLbWF5zKU0fVQBS99DQoC3Yl5j0T1ATQlY43yxyABlqFDuAM88mMWcFgC0WE1UHX7KjhGlAfhFDFJqCJqKqYD5aRAgEiU+RI/XTpZ8nyYyCWuhpEm0Je3e1V6ahxYycQEdH9C0YEjpoN0i/A9waVOTD/Xn+N/Cqb5vPLAv/doVOWeOcZJzkB8aayasLAHAN7doeuaF+Ywl++H452PqYdo9ddXPUvTmun5hdACix0o6VC/lzUzmu+YHZ2ayZChQP6yBHga/tI/73jPOALBmhfueBYCCbqn4KFNuCv7EXp88xs2tJRhbR5tr/zu3Dj+qubCzzAGg4ANaK4SPstfsL+knzUfLGnSsL9EXEPH1KBY9RLbw5xjkmgFCsQE11llrRYuWKTxH0dfU7d33LCD0SwfMfSDJhAJUa2WBnVvsTCH9FZ3kbz1mSfCaKhOBGROSX9G4S0HBUHaVdywOe8GTLSPFyUa4GQ7517aWj7UAnCh9Y2++YcZbl3q8twbaJW0F/FgpM5NVwuw8VNJ6YL0w74E51w4iwGpjymKCLQXbNs4sCKZ4ltxhZB5SxoK2XD07yyEAJGyAhYLzpXG4yujPojOQn6knwZRTlMYVBeKfESU+Sc2EiWIVImH8cFl3Zv9rGxBnlmmfSco0n4v8tQyGZ9SfexhFFgUZBC6AksFF0YEGRs13JDdwbamBxDiZjMfOMcM4Aa5Jq76cE8kE9GluMTB5ZAhwRxz00TQISDqJHSWSa01+Skgha75WUWc+WgtGgIapxlGePqyGKpoeSSXrYakjcg23LhiUOZa7igQmTqpktJ8lx+8GVMxlAb99BfuWbmZOCkZ4V/aBXDx5sIr1KZhEcbSy5jRzrakp6Fpz3DOKMTA39vqZDwFgjaRTLc3noWKs76kFxXU0zY/p89gBH5WOYiio+5pTHjh5ATDziZ/HIgTYJga6Kw+MmUCgJkztoJULZCH8dAFATGFtIUcLCvin70nkTZ+xvI+oksSZfRYjBbEWrOpFl0pobV+Wvp/MULKvvxuDfeVNSoBIfuIat4TFR8a+QfHxT4n+KuRs/AUtFPOC39E7/j8j6kv7O31vFwCaF3yhrJK0CloX+fT7giJMR6zZGrKwX7RV42e+w4LjUuJbFVwzp/nraowQ5c8xB1AZ/fZpTE1erDiCcUFCgPezi5UAC3rXAiUs9xgG1fmG9TjMzq2lAMjUZO6I6AETnWF+MDH5v7AtUdb0X2CSmZeD+azxBUrnwDwIWToDDc8/gt1hqlIPAJ4cuWQDuQAIGnii7hzx6YRdO48sPCY2UJ7bVWIDOPNFSkEdIFnSBkDKlFByHJZ8Z4t3MvjwK8XvIuVnXzFxLWbRwFlHdWPj6pQcSigj/eaABcwXZAHyGYnO9y64uhnmsvkmyoh5cgGxAAACn5Y5wA9urhlrPum1Cop5yLWjkB0ls8TXa92wfPiLW9KxkuxQ8KK71hprA4MHytYgID7k8sgMCGDFLJ260xqH+HKPSfvRhtwEQbEZD+Oe6UazPtJDAEhzstVRyjpkXefycD5CXOkx8uswslyI9j/SGDQFZihCye+lgbahtBZ+SHY8um0SMG2xT2aGgaBFfJ9jvvb71WaWvCQT044AGmypFt7XZgNqUU0zznc9jw3Kx1q7IOoFr56tE65bx8dzAAETM+FaFFz6giwgjHELZVCzkV0OeXWKzjKLmN2tvqapHMx/7IPipfiBAkXPkgACymPKnPQ7csHW1ox3zZh37aAABgAe0chApHbUu30wY2Yr5qvvwLR2aR0ab3PNd/nbKDo+XvMN0PvO3Ly3hgVrmPCAFFZsUWACudtnzRKFR/IB9bHJF3sIAOtJXQNg7uVTEeDBxgwuBkTj6SCQ4dzk5NQYAJm2usnTKni5fFBedHHXQtF+AEyrTbfcpT9SP9ZMvrmBStOEmc+kA26HSgZKJPGKnNf5W3N11b+3ECmElCvth/LvKlgPuWNbFqRI3JalDj60TLyauVoYU0f2krblDgPvksnUZ+3/jRXmb05ulQpVg595z7+FJUlbYSFlWbPwsUusjw/NQgd2eXwYi0gABruVgcCnDejUr866iM6bN4JwS7YoWm/WGgKhj0l65nL66rSdNdbf3LxIn7i1mCz1INYcAkBahV+Fw7MOJ+f2GEBoAdOszE3RTc8CKgnB2CMzmbAESnwLSLVuC/M9C0NgQ9AA4AI11D2LuoXPc5tX/r9Bdtimia7UEek5Ifb8HrW30NSDXdCKc2YJcwwbVdYyH8DOl0g7H4qm0to0de4UwAYAwb6M/R4ZeDbTjPyd73Xql6m/RykaT7sJFEm+axiZb9RWCYaEce1TBr19m3u+Zp67fHOc/mSNeS4NjNRkpKV/NUkhB+uIDxR4CVBhqGt88GTClWOnBcZPwTrlaFepx3srd8e+MUlLbNb3lx84BIC5tccEVerIlkWMefk/WgDYMVMBgcXG1MxC6LSR/JwWgPCehWqg+BQNHO3Ht1cDholnUYv0TRNBaWVAC6BbTLK5Sb7v94AHyGujSdaS1pLmAPAWwFm6KLQp6xdlPpTiAyCMjagchoAtcVHsYklLZIFdUjgWFQ1vi9m+UrsmPLNFGkxtIh471WnarxoAj5HYPQV4/64DDrvknPNCcIBbIpOEl4ztHKjNsb/a/G0GpgUNrV12gk5NluZcHmDNcCRj0ty9zuOcICJwLbRbm6SpYJoAjvkMcJl7AI3pIqqkg3IQd2meOkUH27Hg5/Z57pK5nRsAFvvEUpK55bPpz5PygnW0mLNpLjopZO0uiJoZYN58UHUK0K4+JVuimbc4pSaTvy26FmUDeFkDxrTl+Za1kG4FDIN5LSPhpIrDAbg9jMWxADDXhCCfIqLK/bRv50SanHPR+KUykgpF8VsXcwnM5CNdzvwQA9jidKhd7YYJiBc3XLMFMAeAKkrzVTQIMHE0tub30cwcs9gbZtgCEAl8kkozWMKMsGCBIccrkwJ47DJzavan/SJedaoLRspEEwnmK9oXEDFgIqwy/C0opriJxX8GeJ22YvAphX0+p+lAkbdAEZZiAq3dCzk1JzFhZsA+c0R7EoCxdtq7pWi3iC1/LBOXHzHngAku74oGzkMRdh2DpB4yNx4ZzVyqVOs2TwMQzHr+aC6JJUqvRR71M5n/yDS1wC32Y5X0a/v+Pn8zBWNvLr+5fNRdu7fWti9Tnlg+c1svUz7IQ8tW2qVtS/N3zgVzue+3AGANKK05fGgv4WNtmRfW6nOA5E5wzX2P2eA86gboABwLeBcbrSOM6jRR8uCD3L3CB+IooUPJsAYLA+QwznoAcR4Ay9Eq9M68qBM7Dw1gbS4xSbkGWgNC+77Lsc/cJ29F5A9DEIGfgrux5DAHZj25mFOfUu5jrreetURztVGEVmF+c6/0RuSlHHGPGNf6yKOpfMgB25CmgWn2Wi6tCzEPf5jddtX6wQPP5YGjlLHgB/8vJZbnDnIdWXMIgj6zfLY89EPTMgmZ4mMVCXrtm8O5c8WabQkQzolI3fb+msPYvnkg0p7bda1Xrrlmt1ILAGqUQWa+YkU0LOcnBsTcsk1OQcexRWkwKKitKLQwE7LnxA+ClTeFKeTiQLlFdUTB/L9cokPnEIqUKTL+CYTZjKH4rn9zwJuwh4rnhO1NJhE3bE0SdV6wlFHHKcjOfRM7MWmY83v3KM7NhMnvARtfmsmfaRDSggCMxWGc+Wv1xXjpS0/dUqHIgnb1rnr4O7H1TPOYM/9MTu+zBjBr7es5GYgCNPGBHlMQ4Jpv2I7kYErRVszpWXBERQ7T48/yMFs5bBTR0gNrKWvr4CR9j8ab8rVWBB6tNeuRcjEOypaHMtTTLX16kpmnPuTcPcY60x7Wk+wEY8dlxTLoOfCgrldf+bqtHyCIDasHAcm12Oz7yw+3AiBfIIpZL7BDa5T2wZwA0T5zaN/7bHgMxjcMqI4DP7484DNn1tQ+KUDDbMd4mFtST/zJZzdnxhs0QmbC6z9ta7FhFlMz22LOo9/39Yt2Zjrz003N8k682/u4NjNPsMvpoaReWupzY/pjXvUpJ/yfzL2sZ5d1YH4ZD8yPKcQFgq3O+Sl3dRCwA0Ba34JnbvL9YdXqtuWQC4CiUx9XCcWdxVgywyxATIrpZk5jU0vTgsgbeJIFa2JOqW41zvu+k5FZyuHQaTxr2kHeFJl1NA12UYjWLn+/sbb2zPks0oSMH5fJ3Pqr2yjPz3gDuKnSrN1A3euqFQCzMbQmZiT7XTY/dK8LgUBoYLEmz0q7+KpoGGCDubSa0N7NrW7ZNv4ZLMBkzTPV1kwCW/r48AAivxfQJnzy4bus7x9RT71VTgBAv7ZKQdnVD4Dt6C/5YmQBhGjs3nMI89vcEkwY5pZxlXPGj4d5KZg2s4OGtjhMdFaAHyBlXnhXxsBSU1R/yDtN/Wwba0AEGuOoC8aJHWGuou0Kt4k0Kr5MC/GQJbFvfmQunD3F1gJXiTmlbVwrPdbOmjk4fTcZrWyMuchsb72YnVQXY86CMNdZhNOxzKPzrLN67VHISIJ1g621ZoPkN4CueTzdtkqRwSIWAeusO+LdC4C9gjut5y0WrBF7tOfXpOcL6dE6vW0XJDLAFqNoFMBlVgEfCxBtBxIm0Wktkt4+5fOUkElvEkpO55rwg5Fxh6RZAygtDFoZG7NjgK8VIPZaAkvbuus9zETEkrkqgbfXBVB/Ux+Z/UAfoEo6ZnoL+FmAFAQlt7akvxp4CGhQIlwxDhGgPLF57g31m9d1Mnpt/mLvrBPjhhlylbCElhQAN+ez1m4K2J+e7/Xx7moXHzQ5YJP1uX9Yt1iBk3cwxO6DTc4rAC4Z3K3eybspaGKZ6eh+AkGPz2ur9hzjOxmVz0tmjlHHRf9mAhqTEtgCkjxkgNOfT5NvlrWFccmvpOgp4tyLT4aYMF8ckAYieTrLpSRfOOX8P4qL1ckPnEf/289MRovu1h4AeClNg9HWiySBjLwL0lCimB72x9zG+IAhdoeZe9b+3kxVcyBFbe1gp1iryOkWpx+dm3EYAHhuhnJ05JxKAHg5SEQqCX+m1BN+dowQ4Al8pMnNLPZ7QSGMD1PHFvkpM0/zmL7nS24IBgBeckM2GnxBJSAVTACBLzmv/eQXxPakvkhrYiZKrxKcynQo/lfpIp4bZSKBAYBjSgwJnF8JWN9+lubenV/JlJ4NADz3Qzw6OCQwJLBPAgMAx9wYEhgSuLASGAB4YYd+dHxIYEhgAOCYA0MCQwIXVgIDAC/s0I+ODwkMCQwAHHNgSGBI4MJKYADghR360fEhgSGBAYBjDgwJDAlcWAkMALywQz86PiQwJDAAcMyBIYEhgQsrgQGAF3boR8eHBIYEBgCOOTAkMCRwYSUwAPDCDv3o+JDAkMAAwDEHhgSGBC6sBAYAXtihHx0fEhgSGAA45sCQwJDAhZXApQ6Ajvy+dkS4N9T9CB9cbmFzacovlDto80KZCzvIBzruSHWycmObI9QPFXfsutPYzXdOGyZfd0x8V8eVpWMMlkvAWr1quWHw1uW60SeXe6DXXEG7vEXn4M1LFQBd02gSuHntbyPiseXaQBMhT7+9erkaM+/pPQfDtbgLxvn6EfHREXGTcmE44KuLy3Ycne5msfpCHe+62/e+5Xc/EhGvU24ec7E4+btzwpWNp1lcxegoeEDt6kr/dmGQo+Iv5eLCI3fyug3NONTl6eWY/L+4lDt4mm0/SQAEWlja3Qprm7vH8/XKRTAfERHAzJ0Iv1p+sBCXvbgm7znlUmQs5hplkbug2/+7vDzvET1NOZ923e5nvX+5PczViO6HzWJc3F0MGN3z6zmXfP9TOU79BhHxleX/68vHsW8XvLujwgXspwU05rAL0N0Z68L2uujrg05b+AvrNy7WiMvs/zgifjEiML6XRIR7jt0JfF6uWV0oovWvHRsAfd/duIDKZc0165i7vf4tIuLRZbG6A9XN927A+rZyKfSPF9ONGQfwXMbt4vGfjYhnl0vJ10vo8Bf0z/WEwBfz3HfxOrDwu2NezD7XV+wPi/jGiMDcyPc+5SLvfJcrIe9dpWDI9S3Lxebe+/1yH6vn37UAo3tmjc8WF2Af6oP23jYiPrawPJdgAwgK8vMi4qHl/mVz7DHlMvH6gvA5+Zyl33PrPKy4GsjdLXCnebH8WZCNtcb18gkRcYtyTehdIuIf1jTumAD4LgXAmCSKyeh+U7fc/1jRzJjF3E3zNVNxATQGedeIAKAnWdIU/KJyPeGbTyp3+5ZFaGH+abmoGqsyWDcqoPxDEXHjiHhIRPzzSTa+ADUf3u0K43OTGODaxSIwRr/7xGJ+AT7AeMcCPpr+7WVhYiLHuHTHhd7fWur96QK2WKYLsc2ZO5Tb0JjgXCFPiQjt5gcGgE+KiC89A6Z56zBTklwLb1rmNpkiDqfFrFvbfeznrDvr6JblUvefKutrkzl3LAAEfrTyM6o7Sy2gnylmmAnqLtPvbZSedprkeanzR0bEsxrf3eqx20fE/YqfjDnyX8VExEz5mxR/AjzmmPLNEfHIor1dXG3QsFjmpSDCWS38TvyqDy5m12m0kwlI3kBbIOszity0hXvkAQXUMSVzC9hRSgCD6ctXaYwOFaBjrlpcxg14mle/VxjY7x6RtbMcLOxPKgpSO3YVgG+u/GiRw0UKeHB7GedfigjkYRPQq4V8DAC8YTFTsLVbFZbANP2UiPizhSsJi7QYOblN+JMwuaZN5eh37+rnFx8MMMY4ADNAU0TpMNM/LO1854h4YGn3w8sitVhFT/9koSxO4jUgDfD1eZWJsUFjKTu+PXLkQjBngRUGePeIELzpLQDUOBhLILSrAFJ1mLtbFsDufl+BDXU8qlxk/oqiXPlgAbj1Y8GbU0DAPHOpuTZTCEtLRv7JgNtiOr6UOL+ugBj/L7MTywa8ZEExunh9TrksbV++R0F8VUS8sGQaHMV9tCUAQmvamlC/owyeQWSnM7s4cJcWpjI2QBvW7O/tiplgwSr8f0wfP1sPkP4BXz4IEwCbxTJMyixfVhYqMzcXDl+a/vO7aRP2+4gO09+3MRULlSwzDaVHlj2LOUEcO+dnXVrMLQpLJJbbo3YZkBlF8YTi1FcH00+U8x7FV8zcfvGOygW6BAa+unq3p40CPkAG2/umMleAkjQgbgxmKF8o9s6Vca+IwN7XFmOoTi4cLiAgVoMPkP+eiHh5CSoJdmThv2Ux8W/ygSMALT5BY/D+BVABvuIy9SsX5uvf3DEA95URcZsiW+uKghcMe2lROql8jCW2ao1vtcaAMTeRuU0OefF79l+brTltrdfb2jG5TJtuUQiEhk4fGGHdrCz035yYL731Sd/gBL5eWTCA5B+LHw6rNHjSAGhrzwHJmx9Bc8+1+ypFm3NgAyoDtlXBdMgXEzApaWSa2oIwcescvjcssuI8T/+rdkgb4j85VNK0tOgFHJYCoLbx+WqzBUsZiDxjvep464i4bmmfBYpp1ADJ5DOefzNpLKCS1sTfx5+8rwAbLAaDMDewLTISQAFsGDoABiJ+B5iAMXeFcQMAAnD8ufqAna0p+gZ0jZXA09Tvyo2ibj5XaUiCO7WP2Pry/+QkE2Iu6q7/5Ev5WOOIiD4nizI+mJ21Y63wqX9UAWdEBcv0/K7C6sEOMTSEYE0kWjvfvYCuOc3MZR19fFEG5oG6ZIEAfXKw/jdzH20BgExeWtviTLMOgvNZXKdoEv6ZpZNIhyXbYjEWlUnJb8LHyCx4fhmlpO4G2/MG5yQLzWgRqd/P0v7uajMgA6qc4gC+pXA/JEg8tyyuOe1pvDANC02Ki58lpgfA5rOz2LHy1m8wuTELRZBlyr6AIoXou4fYRw0YFjmfrDmD1fg3Hx8WmaxolzwzyZh/0DzD3My93oJRIwYWLfZPLtLBrJnMnQTW5iv5cz0Au7rU/eEPIwfMbFehYNRhfbCcsM1dvjNrXwRdMIzyVjBg4Eo+hwoQlBcqODZta6t8AKiAonXLDSCbwJhK8aF8KCvrSB+sJW4DDHkue6S1/sueWwOABG0gaS3CyHw736RRTGCg5e8/19Wq/32YM54p9uFFE6sHRWb+WBxzA7Ww2u7XUoPzTQEek3TLQqa0ogRfvtBkgHyMFjEXAPZbg34yYu0wyWnSQ+Ap5eXxJUjlOQvIhOstTFnRW24IGr216COA1z/1T90m0nEACVDex06yLm4HfZYf+AVlnlhU8kJFrbEf7PZtI+IFxY+IOZMRq4KiACLMUGCLvf1A+X36e1v6heFwC1nYxsdCth7UkSwOAKjDnGbqGbdU6lmHFCD1Y2nk4/l9JjDCADSSLDBrsXnrpWbU+u6bzM4s5G7dko2cz11K3Dix7siVwlri1+fG0AdjxDqwrqWusVCSSPD9wZZU2kiAoOpTi+w2SbxfCoAmEG36bzsmRT1Yu7R4y8TxjIlBSxpwEwIASH8wUfwf0/qsFKwEeJBHPWhbts9YAUCL0QTMYtEAGn7FBDja1fjIwcRATNJDOVP8mzQrrau0MsZd/dNGdWMH2sFkNX6ZE8oaYGZiQzUzrJUdcxnzYg5lwYwoFwDSkkJEUWJ7FhRXwa+UdmFiLe9nveY6xz9m0ju2fHfM2TsXfx8T3mL3Z7Jb40MWlOc+1k2mTyyuH3IQnd5V5MJaG0AaCFJGCZxIRG06UpoUJrkbD8rHPNEGdVAy6kQyXlQUB9DUbn9KmgdSPSXBE/vmetAPfmJAaH4y7wEjc9fYCRzmHJF3yueOzfaOw942LgHAXFzQfxfAvUkxQWnwpYmo/H00dmb2Y4FMM5qTgM5abpQBSbazy4TpmSQ9zzJFlGkupUXL9wYsKRHlEAMElORrMipzZtahNuYkB8jakTmbFr0FBwx2RfJrk933711MIH+nVPnuMEBMobVkvzzPBLaQlxTBGUDCFO5Jv8JajIH3sB6Lnnz4FXNXTSpPflHPUh61eQ/Ei/7mFQAAIABJREFU+OQAD+WPXR/KnWVGAw/fotiYl4JJ6k7AElADLtYZtxU2OpUrPyiWh0XrP+WKrQEreZk9SiRlfq2CDZSAbXxkIrBB+bISjbPvIz/aVLO8dAPoA5a7SXbCEgCsGR7WU+dn6WhGrPwdo2h1WAoe0AzeqXeMEBTNQFPRDJtQ3yWr4MA7Gf31yFnYfsUHB3BEGpl9xolm37VwmIsWgyBJFj5Uiw6jXVJqEBSw4ODH6gDf+5Zo429UH06fEuVhHih8yoIYND5wlIK0rw+72mgRYZuAYFdgoadfgJwcRWixWe1o2fliDLSBLPUX8MkhTVaDTPBzGa86uMG95BnJ4OoCguYYtj/nTyV7ringhf0yK2vzd8r2MVSBta0iuofkSo76KqNDkMb4shD4VrWbuwAYTokVeSBTgjpzW2h7xnWRDzBpNqcwbVUHOGp22MMimBc6Lt2AlqNtaAI+D4XPix+DD+CsFXlVnOxMCOUkGeAuWVBQX1t22gAT2pY2rdMq8r3cI+zfJp2FwFSyYIzt3GKbGwvgmjl7Iq37Ioy0O9NNnRY85pTmoLQUIIZ9zEWx6/bUgYMaTOfavOv3zFQMGRuS/iRFZwsGkqYt5Q6wsHZ+3Yz4MtsFhQSz1kRb6z4JfGRKmqCHtK45n2r9PlCXYcBs72HjvmG+ATGgj1FnBoff8fFa8+negQFYMsbtd6LFZPRrG8zL1/RnCQP0ckZmbTSvt7Oh80xBNBxbY7a0bHXzvEFnNhlwE43T2MTIAlBpUIziLBUaFTsAHBiXaBXAPq3CNYE1YXFMHIvf/+2KGgp8MI1E4yxyTFEwgOO8ZmjH7guGBygBL98S0M5on3ZhCeZTj+sDC2I9KEtdMdlveXNMz2sWE36r01ewIWY9M5TLiE+MQmUJmecAcOtSWytLmbH1TwZbrsVUBoJSFDYFA1u4Qqwnrhw+wLVK+XLyXAqAtAAUN1gWmomroRyZGi0dpOeIJAwQ+6jNMA3FAgAfJ3Q6o6enmWw9QXq/x6T7iQLW+sznsukgdTQIGEvuNTaCEEwncsXuppPVsxYf85RZlhFYsrYwt2Icc83PuZSn92CB5JgAyIdonvYy0tqniBFTni1m6672mp/YCZnOpeDM9Td/r0+A3o85Q/4nIfPcVKAdTFDsureIVAuYbLlLpk6B0h6BOMyUf13hejgUAOrtw2XPLwVA72aunyRFDMgE5dBkvjARDiWqHmpshrsJgOM6t/9gkykYrAUVPu1SJw6LWBogGuw0SiYfZ8CATyf9tcan3nfNVQEQmMjGCsOxwEX3TO46+nrMvph/NDvGbwFwrCcAMjW5Q4AXBQt8ekoGF9Kn2GORTOvJlBE5dVvllwoIsJYwn5N0mwDaXEvM0dxf3ypbY8b9hZ3ui0a3fiufy3kq0lsnOksvo6RZVQo3ypJczL3tWQOA048CLrlf8nSWRmksYpOdT83C5CfApqaC4DCmvVoDLL0D0vp8PYnXpI601nfoOQseYIj25nl/qaT4r2pNn64K4MKssCiwRn44JpIdCydRRD4pTZMcm6j9qTS+5FhtZ2X0suoMXDDzlTUAaPultBFzcyuWVpvozF/gehKlzg9t2R20Sxnw+2OuW/hBUwmaB7tcFeREUXCHSX2jMHsi8QdluhUAitry02BmosJSWJYU+zSZkxbCNA+MExQjZAIrdpqc9mb92qEsjA+0RQpPujAjgZkk3xosMnt+aupYBEAP8+Bjo2gABj+Xyb3F3lfKzJ5ofjMTeAocTHCAi21y/ifApV+MDDP/s5f9pfwtcMxW0V+J3b3RTgwSe+aXa1W4/KgCBdJH+DSnvjwMHPsyZvyafK71YbPHnD+1D1CyO/dIzykrlAEmZk61+PezL5LCRcO5ZSjjHAfRfb5n828XEzaPuMJy3XOvLSVYV5DrFgBYZ/C37FM8NLi5YPc5Z+uAg+/ULPGYk2bft2ttmlG8Xqay69uZBM7fhA0fCialGS46b5HaJ50lJ3sNgJkGAVwESCxC4IA1bhX8qOeEtlhotemYBy5g9sawPrU7E14FcNYk0qu3dlEsBRoMRP5pj4+ujkALFGJLNauuf79VxL11/tt7zT1l+1tvFFjenrEEYPU8m6sbuEm1kiInUGjdOF2mTlXyjfoQkfqb9c4e/7+Zy2ALACQUEVsmMDNqqZM4UzIs2n3UnMA4xfmvsE5mJ+DZeuvZ3ID6fb3Ie1J+Wr7dY1rL9cLaJBhPj/9PhVKbFlgrc9DvTOL0ue3K6Wxp665naHXsx0IXGJPflQcrZNCD7wv4TY8FSx+w726RU1mDTY91YnyBMZeCxTvdnnZINha4tCMLF/CxVrL4bh7mupbhLhkfAR39YU0p5g4mnoxM+wAW0Gf2G0esC+hZl9hsKxP2/WTQLBPBNlYbpc58rs8MOLSG8oBe617ByAHxkmTsy8lsCwDMlBgf5hyVxrKEBSUVxkQI31FEu0qewQdoDRT/kQj00gjfkkmUib65EbwlQ7+nHgDIRGKSYggmz760FEDGpNp1QnYywARAzMs3pRtJEalzr3ZtwwJG/IU9Y4rVmahMQIBsNw/T3PYs7QS+QFH/LKzpXKkB0Dxgnq8p9eLBPpjYc4EqSp2iNb8ARE/6jbZa5HYs7EoTqU2+nqOt1sigftfcFXSSx6d/8u2spTy4l/zTJTKtc0l7MWdKD+hN3Q915HfORytQws0Gb7R5166ZbhmtBcD65IZd+zdbG5TbpHyPxm25yAiDoMls32JmWMAtZ6S1tunQcxnwwUKZE5jFlr4/TJe/BMOlbfcpFHIDNkzFXSe95LUEIuaiZyYPfxxGwn9Ts6Mp2CRTc4xUnsjRIjumFYVgPOrN9zXzkc2/L7BRA+A+k6ilHfUzdlQAff4rB6iSK58ty8W48TnzTZGHk1kwP872lnm4qy1MvTyOq/Z91js/jJdF35Pc3dvvQ8/nacvMSfOY7122wNOKjMw589C8kEqlUCDmQs8+fOlImPBUicr99V3r1xoChtPjz6btr7ds5ulQmeu5SDZrAZDwaA4CJJhdKN/SMBPTdwRRRJJbiwkFfPiyTGi0eJ8QDQQTXUoDUJFmQdPNMUd+JBrTfs7pwZ51O/OQVJNk30kaecw75jVH4T3LBOSn2XWqirFjxmB1Imi7QNIznPA0p4VvCxJfXDqvawZYA6A+W5zMFwy0d/shE0+76tw9jnP5brnVaZ/c+ajsVDCntvSPYabGDyM5dAq0PEom1hrzKrMZBPLMabe6ZdK5Qz3MFfP2tE8zyjkEnKbXpNZzW9RVFBZjpDyMC6BssfTMYwTFfmRBKEnNvkVBco1goq13t9QRY+1bbQqvAUCaWrSX1lzjy6AJCIY2sEB6o3SiSzQuABbNAiy26EwHR4Q5M8uZYwANKzg00TEDDmx+KqApbQNYM7lNGMwLqAAKJl2epgJsTCrABDwMOLZqb62Tby0ygD8XRctIKZMNCDKrbA0TZbRNEEuxwPbl7eUOBottlz+t3rooATr3WpvogMq/l+R6JYDy+WizdnKPYJ4A6JDMa6a4iZafaFNtE5m22yB3XxjbvMxqq3Mc9SPPLgR6CtMN6zQPz8rdHsAaOeAmcQ6ksSF3c4C/D1hL0ZGFweXj//2e7Fq3wqkDTgBOfkQHxJoL1oQ6eqLQ3jUvzSdrcJWbZCkA1lTewC6JgIpaMpUACvBAZVs0yj52SNMIBPBnyG3j2N11pHpOTMEAzxyqc98OFaxMZBV1r9/npxBJ9eOcvgRCviCRXJN/7jSPaf+cruPUXnsk8zj8ZIUUxiF2ljsYTFiLbtf9GRSDvgBvIEsbY2u29vGXLWVCJqoJD6gFQOTzGY8WBZena1uYc76hVmvhNJ+zXpQ5a+M029hSN9cA3665be6ZK0vuZGmp69Az9clCq+4bWgqAtZmCBe27XnFtR5e8b/HYPkPDW4BO0JDXlneKMoNsu8J45k5IXlK/d8jVDhn7WwEXhgiA+FnWgPzS9rS8h6VikzbHY7yU0lm+uKmlT+OZ7SVAsWFfmDwTlIVESQIlAS+KNF0M2CNLiNm8dcm7kxEolhwyZY1j3dgm5elP658lIlh6hcNblwBgHVVDYw/53bbudOv3kuUxcx27k9uhhNod0Y6RtDCR1vrGc0MCF0kC1hcgRDIAD783pi9hHeA5L5C577oMQU1WWe5O2kpOXF/SdJjRSI/6+BNlS1DcMg+4nPiiWXtIEdfT5SzNKQCy1UVlRAvZ6swrTImvL02t+t6IraJ0WwllfGdIYEjgihLAzqQecWk4YKAl4rpPjr7FbQLw+JbzxCYAhxUiRenT4+Zi+fDvz6UetY5b3q7HD68NrDhAJ19xmtNYfzPPKNDG17giACBaiDpmgd5+EkHlLXHicnjyrUlhIEB7fuWgbY3srYIYzw0JDAnMSyDTXURcs8jWwNxa0sYADt82FpWZEL4DIwQvWVWCeUxOqVsyK7jFBOocs8bvO71C0/eAlyh5Jswzl1lmjuEHatPAyC7gY/pKp/I74Od7giLTwB2XnYCkPEa+6Ne4oQCg6A4QU6Ho6K6IjGgoexrdTPt+ur1pfijGE0MCQwInLQHJ8NgPX530LKlTtj/y9R468xE2CIYBS1ahQJqcRSAlD3DXoRCisqxHQGmXEZCtT8DWdz5xwUp7tG2dZboCREQrg2/Ma8/kDi8gLs4AULXDlk9Mswbw3CUGAOGUyL6UOBF/wCcNqb5T/LJx0ElpAT4kvQJdJRgRHiheR63q9ATvpgN06lisGyufq76L4KQHf9Q3JHDRJSDox0eG+SjWuzWJ9NRXWubWP2Zt3gMigCBNBdgAy7UpQjIaRJHl4x4yiREuvnubHUSeWaBAESbJothndQJBIJqniusvNslHyXrFMi/n+9dpyZjp54PG0B49lRcl2VEqhTw7/5+3wuekEgKnIdBQOXJ5s5R0D5eqEBzqqcOjDAkMCZy8BABe3u8i+d+atbtHYrg1K7UKM8KUMESBDEDh+omtA4XwRlBEfqq0MN/PgAqWykzPu5pzx44tscxqbdo8jSijpdicJMi54jnoaouQHRVoqhwyhXD5BwnXSR7uNpCGgpKe1FE/c+0fvx8SuKgSwAL5wqxz5iDAUTA76VkY4kkkZ+fGBWaygCrXGrBjDmObdnTxG25x1uDsWB9Kg0ElOTlRTza0nQF5sY49eaiy/B/Js/6f6SzXxvOKTtmChQGupc6zHRkPDAkMCQwJ9ErgEACK4gib2+3gAhQJjkxhhXOSTX0iKN3bqfH8kMCQwJBAiwTmEqFzTyjnIppsT+BIe2mR7HhmSGBI4MxLYA4Az3wHRgOHBIYEhgSWSmAA4FLJjfeGBIYELnkJDAC85IdwdGBIYEhgqQQGAC6V3HhvSGBI4JKXwADAS34IRweGBIYElkpgAOBSyY33hgSGBC55CQwAvOSHcHRgSGBIYKkEBgAuldx4b0hgSOCSl8AAwEt+CEcHhgSGBJZKYADgUsmN94YEhgQueQkMALzkh3B0YEhgSGCpBAYALpXceG9IYEhgawk4cwAmvXLrD+/73gDAk5L0qGdIYEjgkARgkSP2HlkecrNbXs/x8nKu6BWutVwr0gGAayV48u/nNQbuOh5lSOC8SCBvm3xhuVfkRI7aGwB4NqePcXGitqPKXULlKoI8aDZb/KxyZYFjytzd4Hhxx5w7jftNy7UGbupy98JdN7yW8GxK7NV3XdyoyMzFO1crJxw7ws3dF245TEZBTo5kdwy8U81dtHPRiouIblPO+XRvhhvWtrq6sleWxs61Ga7udH+vU6Ffc3Pbno85zt/9IJ517eaishUA+s7Vy3n+bp2yaAnV5HM/yK5r7hY1+BJ+yWVRX1Auav7iA4fJ8oO4W8XR5QY4wa3uumPFLXCXWN2+3L7lKgITyS1cf1wWuysJ3AfhOXc7XypF/0xwF1+7ZsElOW4FcyvZvuK4d8esk5l7JMilXhgWuAt5LCzz07Mu3bnCTWGXiJDMp/tHxOPK/T09zb52uZXNXRuOonelpCst3A10GuXdyv1B7ix2q1wL+6PEnFKvuKbX6fTd5RAAugDZNXRQ2cGoLkxSoTtA6stJMBNX77m5ydV7Tot2pr+F7ALle5Yb5H62s3U66GZ5kzUvZcpPuDvAHQZPKsfx5+Ut6nTJyx0KgLhzNO8bsBgsoEMXvQAQ7AFgmFxOw56W1y83Vt08Im5abq26Wzkwdvqs9gAhV4++TwElC/qZBzScS6hcGejqQVpxehFM3tN6i3K7l8uq+Etut+M+1E6RL3qcPG5bAArIuFFw6WU6vkX+QNu905Sn+2dcr4ixXO5S60lryRrjvWNEuH2MApmyZq/kZTuugHV9oou/6qtgzTvz507lIjCX8aj31xZJZ/9LeR+Pvt66AMCh/uWXjL9552pIl5EBwF1X2e6rOQ85dhOkS4j+ttwISTHsGzfjYh1+cllfvkHR3GfP9Zi9ogJg7g627h7QwP5833wA4BQl1ohkdZd9AGgyAS5XZdIM/nxQEbpLVFLgAA5Q5E1OT48IQOfuUMfoa6RLlEyiVgby2mUxE66b6dw54lIlDEcxGDQ3ALBYDIY7QF1990GF0gMdi8cgY0pYKZBC+esLmlzIApAArL877TpvuncfiisB1OsCGT80lcvgFXWasG7V20fXfZP5ZTE+t9zHymQ9BBDGxIK4XzFn6zYBOmzIWLiSgPnGlFOM17fMzACyA5iUBNn5u5v73PHsDtXWktcWfnjpm8VhHCzIvIGs/paJTZn5MxVAfSWjZ427PmAnGAmgygKQ1NECELv6oF7yVLgDkjnUz5K7ax/Ik3L9pnK3rf4o7rbpAZpDsjQO5ihW6y5dBcEwnk84MJ8oUv3Qzrxbt6VNyIz1giV7b5c7xYVI1ob1jUG/tMx9ilvfXaqkveYgokPJbOE+MJfcLOmiJuv0RY2TMM1mV3i6jwh77C77APD6BXjcHwrUpkXlIjYWOOR+YFm0FivWojMWmElMU4js7LpIeVeDMSDP087qTnABUiamhWOhmDCK591a77Jni2da8m5T5ji6D3yYDyY6IPUt9QBLdbmHFFvEZAA5sNBPpiUNeI/CDGmtQ6BhgjB1ATnwI8utWQTmTfZ8WBjLrrFKeRhT4KPflJOrT8kYcHnXjX9zxcJlFRjbvPSaEsRCyH4XCHsHMJPXT5cFvMusdwmXiWwRMk+1jRIDjBacPrYq0Wk/AKhvKfoJ8GuTyTrAItQJ+MjIfAC6LBtybp2/h2RIFsCLDFkB7rlVN/lRkoB5H8hT7taFueg9YNTSpmsU18tTCqtmKbhzl0ytBYzSXMWkzH2+ZwEJ897cUKw140JmyAy/264xnJs/u36vbooT8JL7qzo+gqCY/4vdGPsAMC83v2Ux7YAcs/aqRTAGkaYCKiZKPcEMLDt+ESUtE+J9i6ZmntBEvkVTosfq1ukcQPJSHyEq+zR8LVdmjhvrtDvZYpqafmeBqMcdqQAck9VXbQCE6uBn21fciewmPYxTcTUour5lEejgjrBg9AHI7GOirjB1H6s+58J3N6u+aauJdMgBTvsDSc9in3kvDFlZlMDD/5kvvzXpZPp3MGUguMu/A/woCMrzwWWe8eH9brl+Vd+wwlZ2MJVz+rwwXovZ2GLwWZb4oHrHEgM2J1w2ZrzMbeNVWwn7AJCSMXYWuvnHzOcaOFQAGyUn0EOhA0tM8N4FaA+9j1RoC/DfJa/evh96XoDP3LTm5vo0/Y534RB3FNzpLnNBEOgssoaamjRQ+jGFAdXah2BNUj4FxSTGfIDj0qJumsjEcQ1n3g5v4jJPsQkarGYYfGdYV4s5Z4JY2BYaEx7oArg045mYWMeVKgajLy0Ai5E+uXTcALU6dltlZdyAt/4qAIS7YFchP2Y74KrlknLDig+xP4uOH1gAgdavQTb9MBba88sYURpZtBNAYzyUgEU/LYJnDyvM0N+BVCq3zA3DYmqF1yqn+jngzMnP/JsCjWALBcedw2XTw0Lm2qIPLCLgzqLQhrx/17rRL3PWXBMk4yKp5cd0pfjz3u5WZYrNGRfkxTo03qwXaSbcHocKtsn1xB3EBcba++u5ji74PfNXn1kkLLu5yO+0CoodsWD91QqtuSlzANj8oQIgBo/Qdi2Gnm/1PCvtAxCYIC3g1PNt8gH+JhFw5KvAPtP83vUt/lOL6MvLL3scu61tq4HneQd8IMwZrAtLmzJyWh4jYXYAtl3FWGKZ+rNrAdTtMIGZ2LVpmbld3gXY04u3yYopx6wygTFJfi4yVigS39SHXnYw7U+a0saj9rdhZEzf994B4K3jse85AIe5Ah9pOOYnU5JSsNsB4Oq/9mDY1k+CgPZiet7HEhVuGe+2mL4Un3HH9P1QPpQYX9khoKnZH1Dm1jjkl1wqIzKhFPL63ZY+TesiX8pTcFMbu8uWAJgdYk4prZqqu9HVC7UJxt/IKfvENR+s3p2CH0GbrNOo7LQ6fkVtAB6iyHO+wt7m1s56PhqDn9G8+lsWDZ+lSbZrcgm0iN4yPUREdwEG7cw01g9gZ5H6pkUpSlsDIMDHMrMIPgEW9VjgfE/JivMZzBXo+R7gxMox8ocWpga0AeA+dtsrO2yKssQC+WXNF4wTMJBTawSypV6L0zdZMhg2MDJesiQoA/NIW/i2sXByzXxEa0nwhUwzSIJUpFugpf6lz2D8jy/1kpdMi2MUfUn3yZo6KDQM2xp4SW9DtwRAdWfwhObnKKXBbGM5VhGZfUb5eEsUtKcdvo1em7TSO/hODjE/3860F0yRT8wgb7V4s+1J+zmpFaBjEtRmG/Bh9jL1LDQmln5YVKLafs9NwRwzTrsKvxjAE+z4txIIwMxE+TEZPmFmFlcBFl6b4RSTyOG1SiDB9zFJjKcGSG3ALi3uaTE3yXPLfaG+KWrIjUMe0qnesvQBCC5hIbtkpx7mpggqBYONAfJnF0spA4gYn4AioOPDNoaUAHePBQ0g+QvJ91CApGdeH3qWj189lNYUlLeqI7+TkfkbL/XflQ/5Dv/xLv/zbJu3BsAMTRt8YLE4OjPb8suDjcfVJdK1Ran9ioBMMIP/c65Y8HwnWCAtaqLvYldz3zn0+3T8JjMQEbRIcmucuk0IPlg+v+wLM0g0U184jYGZqPQ+cwhLYYZhLxalvDO+Mv7ANJkz+DQda2OBgUqn4EOaAqAgG/BjNgPUXt/PGvkBVYwzwZgvWZ+2VNQAy5hQmul31WcuB0qVUsR+MCzKRHYDGZAzmSIOTF0+USBorLdW8FMZJmOVLqaQkTFamtM5N0argKt8PPHGXNvlYplrw2Uh+K1LvUBpNmbAlk7lbC+WaQGZbPvMwKV9q/vQmvCZWh/zUQywvr9iaSP2vFdHDZlMTEvMwuIBbAIOJnGyqrpdmd/GDzWXP4YB88HxOzEV+UKxuNoflFpc5BfbZS4z/bFSYy94xbyxgJMBag8glVuKPc61Y2PxXfY5UVVBj3c6QpSTosGaRV5zDCxUAAZMMv0K+xOM4FbJYGFGowEPlipA4ufYZMLcAbq5E0S6kfYu2l3RMGDmA/cIy2JpbqdqctOAP2sXQkMTXv3IUgA0oPxD2IRB48DG+phFGkOAosbHDIZY7Oqx4PiyRNi2KHUQg5+oNcscIJv0fEq0vND+1uxP/7gZsEupHRiFBUTBmEjYaua7rZUFcAD+TEXfxGxF6+qSACgJnQbmhzUPMEdZAWTB71cDIDmZrBjonD91bR92vT9NUfKMucNEnQZpltSfKUeUH2BhBlMGzG2uEWZ2po1No/fYH5kZSxkKFJZ/t/qfl7R36uvG2DHily35WMM7yTTNA/1dmtqU+JVKgrXVnSe6BABReQyDGURYNIeFn4OkYZn46u/8CYf2cDbI7AqPZPa4iZJOZfmCWxTsgHa28FvN2Nr01wZbleRrbV3022Iy6EoGHtRnAvDxHWviTvtSj0ECIJlJJGaCC2DUPloMkNlnJwOGuOXRRuRvVwpzkkNcIY9pZJCPS4DlHwvoYWqZG4jhprm+ZtwQAH5NbgBzUy4jMx9bT1Nfmol0K2uHsvT/Un0oHIEY7hbb+gSfjpmGQm6UkTETGKLAWBTHmLsp03SbzOWuto6BZPVk091sshcAOXNVAuCeU5JUDSCHvEREk4gvpQbAaXSwtWOHnqsDAbvSL9bUkbsrfKPF8VzvIjCJmDX7En7XtMu7tW9S6ogFhLHKgwIwdQ7e2rrm3s9EakDDgc/0Z9YAufRp1fmQmeKyZkfHrjaZCwBVmgeFBVwADv8bFpYlmQeLAUsVMawT6I85btN2Cy4xN40hSwHzFITB5DFRLJGP0lxcxGzmBq8AnjrS50dhseoos2P5ZOXUMu/5qXu2vR3qTmYi8DfXvvAGEfSZwLQn/xJtkY7d2ulvAWTuWw2A0+jfXMMAij2LvkWbTneV1JFWvhEgsOvQgrl6dv2+Bhi/b8krrKPFJjTzYVdUc0l7pu+8fQlKMJ1MVv41jIo5iWmcZOHfSxMN2Ij8Mmf4rnIBiURLWlfkK/KHMv+W7hKa9o85mwnGWIAtdGTBv1jvDqC4PadeZnvuM06fG3PMXNqKBc6NA9bJalJvFnMH2Nkxk/mTlMwxDrmYBjyY5+o+tLtprk8tv0/3mMAdt9kWQJs+Zdv76iyDlvY0+wD5dCw4Z9ApbG1mmEknZE+jmex8UHVumGdb95l6FgABHROAqQIE+bnqPbR2bGTC9da+kZrVaM9ciL5OGvV8Jj37jrbZRUOjYkgAYG1JhcM5bbApB8pmuv1sbT0t79dMWTBDOpI+15O6PoTAN7d2DWiDAtzMUTJhfmM19teaT5inOUVB59bN7B8TkMmJOSj8lRTYVu6UQ3I0d4A00AVI5rr1Vc+pree39qhLWlS6Ufi5ZQycRDSewpEWpP65lLKWOZjPUKoCl6zTLr97qwnM74f90a42TQNAzIcf0OT37/Q+QQ3QAAAgAElEQVQ91YmUGig6OD35Y1/nMD9swgTO/ab1s9prMtMgNOZWNDrr0E8Lhz9pXx4UxzY/oQMB/PBBKNOIbDqzKQiDbjKvLRkAYeoKgjDldm0vW1vP3PtYOOAQgFF25UkmIAEpk50lQAZbpVXovwg18EoFwAfJpOQSsNikcmA1lOk0gJN95HsT5DGfFe/6WbONc05+h36fY2w9LYpsHvi4+U0WlILSum9fQIzll/vw+Th7sxuMDZ+r8agT5tfIKt/Ng1LkTrZizWXvtgJgHhtFowtd7ytTRtS7D9Z2JJqQH2RXXlYdafUMZrUFjc7+SIqVdwXYdkWAmVwG3/YdUVFpHxY/x3vt0Pa9PFKMfyeP5lo72Omz4hi38Ot7E9Z+u+f9nHCiu/vG2A4IPkHamUKznXDLsfJdisrOo2kCcybkYzUte9JrpX3MzIUWGefZeC3+55bv5TNcFMAvj3Pz/63ZE9YdV4aI9jTvtKUNXBLWjfQnc3jRwQUHKsq5xiXUdehIKwACBpOZ1t/na8pTe9MOr30aLUJK0LCw7fvM6Fi+W2epZwAAAGxdmCV5eCswlACsMOVFtP07HcUZqZuCJfDDVO1iwFK2yHXLQc5DP7fyey6RX5q2h7aqZaoHZuzvW096ARYBjfogh0w74Whnxraec2i8mL55Ic+xAg9zss78OIGczO+ce2f6exYJ5osB53FWmbjugOAs5rbnWFpcAXkc3L76YAWzmYLoYlnlg+aMNDlAuqUi9PnM64RRh05FukLfWgHQiyK98picVMwHZ/IzbfijHM2EHjNzCJ2TmSmy5IQHPgqOfRvoCQsTZO6Y1Hxq/Aec78fKIZuaCSk0qQG0c4JuRrSwG//HrDDRcrsVwOQ2WJuWwpTk3MdkyHZ6FFjvAtni+Yzu5jFVU3PIgnJ8k7Scfc+sbQd/KGUrsVhGAtDgPsFSyJ0ro8eMrQMDvZbL2r7k+xmUwf74vnuBggVmneT5eqLKyAsFxBUht9DaZEH4nfmUJ2f7f4EJ5EKifK5va5zy5XvncgKaPSfD1FkS1soS8JyTr34hGnmARMuR+pd9swcAPZ8HoQKoXceNE5qkUp3EFHsHMDuqXULlAFc9giBYGb9cc+fmpHbg9xgBuu6YLOae7VKYHw2WhbCZ4RY6zc2vIZXBrgkR0q0O0azrIYeTctIfEp/9tHyP+6LkFhYAIpfFp/U2jF+CFj+zRW3eiWgu3cHAxWE8LXQ+LyYjoDCW5sC+fdMNTZ19JP3b3C+7DreY/UBJSxMQoizN1doP7X2BOH7j+qBh9TKPKXRb76w3J/JwIyAceRIN4uPdDIS2tMcz6bYix619mnUbEC5rsGv7bS8AZoUQ11ljOsR5LKmV5pGHtdWG8lYBn+ZzeXmPBcPc4miXzGqx9LCPuT5kygn2t3VS+Vzd099nMjGXx76TbnK7ni16WNkWOyx627n0eZFjbIerAZt0cATlB1y3cGXsa1e6ONzRgWX1BhmS0OTJ1pnYDLi4H7TfWYBbBaFa5IswsQr59Y9x1mLdhnTLHDob8wptXgqALZ0fz5xPCWDEmC8z8xg+2PMptfleURqSoymMrU8Qmq/9OE/wOQJeoIsk8JUfo1DGWC+3kyBL8+GoAwCPMRzjm0MC/RLgcsFe6sMR+r9ydt6oT91hlnJNYKWO6JftgeEKWpxqGQB4quIflZ9jCXATOaNOIMiJRYqIOB+53TL1Re1yawU+RKF37Ue2Tp29yJ/KVydflo9OJFca1lY7a7YcDsEXwRiZE7tK7w6xLdv2mm8NADyKWMdHL7gE7HixK0FQTNAg/Xm5+0NUX8BBOpUoq+ivZG5Bv6mPTkBJ0FGggh9NcDGfscWP49/uF/69s1QStPWPX3OJT/Po/RkAeHQRjwoumASAGfATOZYCJVDGBJQIzleVh+uKkAt25P55ifWCLYAssyfs/ZYOIzUlr+qsxQkc5ebJnT2J7IhzN5QDAM/dkI4OnbIEZEWIIucl9dK5MD6bCEQqZUrYN421+Te/mIMR5Lva2YIpMZNtBgBs8tsER6Z5r3koiEDUVmdhnrLoTr76AYAnL/NR4/mWgNxEUXKRSOaqdBobBXLHSn2aUW4YkHgtbUraiGRhbE9hPvod3yAWyPTlA7QVE3tkFmOal1Ka0Zka/QGAZ2o4RmPOiQRyRwbw4v/CCAGgRGtskIksVxQDtOtCYTpLvsYg5ZIKikiNAahOOpF3m0nJnrdVVO7pMH1XTJoBgCuEN14dEjggAWBnVxDwkt6C7cmDc5amfdyuTsX6RIBtI7X7w2Z+O2jW7KIag9IhgQGAHcIajw4JLJBA3rkhYCFtBSO0LUy+X14Az9RlNguEjHKCEhgAeILCHlVdWAnw+zndxaHC9ucqcvccLeeeZoe12uJ4ktvULuxg1B0fADimwZDAkMCFlcAAwAs79KPjQwJDAgMAxxwYEhgSuLASGAB4YYd+dHxIYEhgAOCYA0MCQwIXVgIDAC/s0I+ODwkMCQwAHHNgSGBI4MJKYADghR360fEhgSGBAYBjDgwJDAlcWAkMALywQz86PiQwJDAAcMyBIYEhgQsrgQGAF3boR8eHBIYElgCgo7xvUi57cdT3tNyxnFW29FL0MSpDAkMCQwInIoElAPg2EfHF5YKWPIwxL3W+Qznxwj0GAwBPZAhHJUMCQwJLJbAEAKd1vXZ1ttlTI+JTI+KvljZovDckMCQwJHBSEtgCADFCx3270MWhju4CXcL+Xj8i3BXqroNxQORJzYBRz5DABZbAFgDoyG93Hzjt1im3/7pAno4M/56IcGpulq8uN2mNQyIXCHS8MiQwJDAvgbUAiLW5/s9N9Uxfdxn0luuUawGdlOuiGPek3j4iPjoiPvGM3nrf28fx/JDAkMAZlMBaAHyLEvF9aET8bKfp68JoF8e4AeumEXGfcv2fi2ISFH8mIr6hXB5zBsU3mnQOJeAKS5bMx5Vb2Bxd79+OrB9lGwm4zlPAVBYJeX96RHClWfdcaK0FAZOR8inl5j3EKW/Za/rGGgAU/Pj8iGCq3jwintlU4/8+5Po/V/tJq/mKcgF0be4CRfejLmWWnc05148bZz//Xf50NaO7ZSmfUV4tAbezAboPKvOO8nW9JQXsWss7RcTTz5iwrlqu2WSF/ceR20YWru18ysLLm8w/cvzsiLh1uRC+bvKPFv//Cxv7ccOI+PqIEHh1sbzLprrLGgB8y3JjPQ0peNHj+0uG592vi4g/3MEe3Yf6sIj41dLB4QvsG14L+n7FnUDJ1OUx5U7al/Z98ihPG+fbRsQtI+IlEfGu5W7cvy4XCS1xqyxpKCXOigF0eYm57wBEwPeNxUp55ZKPL3zHIhcU5Gd/8/INF6R/fyEP7xkRH1PcRscGQCwNO3tQRNw3InrkcPWIeHC54xjZ+b1yMx78ETBN5dwqpmsUGfiOO5b/vfXF6XNrABCa3zMiPqfjcmb1oakoK+b47BmzmYlM4HyD48rA9lF+p4h4RERcLyJuExG/0f7qiT557aLkXqfcofsXpfb3iIgbRcR3dLpVljaeScaN437eT4oI7C+L/zNf7xERf7m0gs73uIewJIDzZQXs7l7IQv0pYGjjwZ/MfF9w0TryXZka/9zZnvT1p9XnNrvW4ka8e5W2C3b+cuuLB57D1LE/+IP9Li5LAZDWFqygde7fUTvkpj2+NiL+tPG965dBBpg9LLPx812PMTksFMz0GcWk7PrACT2c2vo712rII7Y3FxWTyHWRp5k8/xER8eRi7ppnixnFRvKi+H8wIoAHQH5RRJAXdopAABLWE7/5jzXUCUTdQQwsMMpXNLxTPwJAuauYmqyHnjS3d4sI5q3y8RHx+511Tx+nHH+igPgnFOtx8SeXAKB30E6UlmYkmItSBH0eEBG3Ktrnhzsnw0nIqQaWzytgfRL19tbBx8uU4/Mxj/6s9wMbPp8AwSnPx3Xa5R0LAALlrynm4tI2Wa9IB7a0xFevXgDIF88H2KscPjQinlYY6Feu7Iu2YMZS7vj+KPrcjbZIPksAMBOfr7YRoi9q+Cm/xKfBJ8TH9vxTbsu0eoyZu4Cf1WQ5i9HLKxUFerdiQaxd5GuGIBWGRc6cfPmaj23wbhIMgLNFAPDKJdjF7OV/6wWwNV3iWnhkSWfbYi4KxDy6uCoEpwBqL5u9XH96AZAP4KMKFcYC0fQeOrxGmGftXeYwU14Qp9WcP3YfUtvT+N++IjH92O2s946fthWRCt0YrnKobyS0ZH/8kD3upX3Vc1fxmTFd/3yjNrZ+hhKGEc+NCNZIr+9xl3J/fPnP2y3MO14FgKJOzD7OWXRYWsUoZ0cCNCTz4O0jYrV/5IjdOkvmL/+fXUjMqScdsc+tn+Ze+ckd0ejW98/Scxgs2TK/HxIRotosJ6C4ZMts+rZ/qeQRrs5i6GGA2B9mIar4ySWUfZaEPdoSca1i/r6givZxmmOpGIDImUTzlsI0BFSihlgJn6/0kLWMvzaLRAc55nu++Xol983i4mAX4WZCy0NtUcgCC+a9NA5/CiRwaST7E6i7a/H12pN+kkXb9EWQ47T9oiLGovTXLYGY3ypzoDUd7Soltxeg+5E1IpXHPDQnjXsPgNW+7SXzZuc49gBgve1tbFHbdllIW5GmgLUJCrxVSRC3AEVHLYqWvCsTi89FArngFJ8PoFCYDp8REf/U0HRmE2Xn2LNpYUap51kN3zG/5LDx17AeOPW1zeTna6NI5f61Fu0ShOKrk4SvT0wh3wfuovOvOvAxEUQLUFt2FX3jM8VWWhNy9ZHflYnnQJB6PzvTU38Ptaluh+2f2JG8Wn3jbhI5fZ/C7IH1XCYE4JIDSu6ixv4UATaeLeCVwEeZynS4d0nFkXLje6LPLYVM9AGI/nyZ31JgKEDKRhJ+TwAjzxyQ07pZsKoHAGlek0zlW4SzW4R43p8xmPIoaXta7RfL7gPpK/LPehzHNyt5cxaghWyCSZEADhRWa0SYogOc0pz4boDN8xYORALyr0WEPDb5ahlx5UJRTysj1QQsQgqEtArg4t108ttS1Qrw2Z00qabJz63dxdgsZs54gScgwzcsum2njXXym40fSzbK7/f3BfC4MwAe5i1B3Jz4hZnvSSkC8IAX4D82IrA3Y8EymCsAy04hClmbmKp2bUlU952WAkQ/s8xH7bXt7W9KKo98yud0Rttr2ZiTmxGwHgB87yJMAtapHrOlRWgX8Rn7TYFUraGXhPnrqCpty4STVoJJPi4ieiL2xpnmBqRAEIC2Mph6DK9ZgmX8kViapHeAgcFhNIC1N7EY0Ii836Ly1+U3segeAKyPcVsaiEmAt1spZZ4+vF4zDeMCnMYyo79pEhsHQRF1tDLm2tWAGVMYvRHgVBC953xmrl6yYaDHF0jh8W+SVw9+5DzGsDHSzeIPrQCoAUwHWoUDsqfxFxHYWvrMRMgtV6nRmHjMQ9qzlbGpi8lDU797BTb+P80Q/jEMbM58yu2Hdy7sb6mmxSIBpzr5Dplu2JoFAZCZU70JuSwQ37SYzEFywiz5/R5V0iF6djkkUGG3SwJGNeMGvNIzFInd6Stv3YFT+7cwr8yXy4iwk5Ju3Lnf/r0i4olFUQDjf2yZlNUzwFdSuLEDwNrVUuo8YUxdxJ/VuOaqjDR/uSUkhm+WetYKgKg3nwvNlNuVWoQxntkvgWQzcuFyy1cyChOHadWSNgAYsKpkHAksGbRST+sWpHcpUf4brJywtcZm4uufYl+t9BwgAZSZixYY18ocG0xWYf5hJsABc+M3s5UO+LVul6wVTQ3QrfO1ZtxMTLJntqbM9bNnrWRUHCs1B2RaKMnAuA560z7ImNx7wKvuP5P7R8p2ytb54/167CkJvmvMVr4e05qbp5dAZTQZCwakPb7Dg2PaAoA6xCfFtPLnKOslkOaJiGNudcoDIrA5UVuTpEXeeSQZh3nty8otSBZma0Qxo8i2Ynknd0WYA8wOAZaWU38SSDFOgQ4+yWQG/HjACuvhp7S1sOWb/EgW0tLtXPWopWxEf1v8atMRB3R8dRiu94E336bDFCxQ5r7AVctCr3M3a/9WbaILhKXPs2X2ZcKwtJN0P7S8l89oE1ZrvI2dzI+WY6awRmY6l46Ah2/w/ZER6xELNR/+oKMxKWvyXQrme6ubA0C/N/E4YzeLvHR0/rw+yixgspqotKJDC5hNfGMKE/EuDVTf+AAUQIm1JQDmXm3+PD6TlsmrXhMYYxSF5Iv8uXIm3heV6DG21pIaAsyx2H8pAP93hc3wAWE4/JN8eQCt9RzJZAHaVicIM/vJgIumtWDXFiT21uIa2PVdfbQgnUcnuk1pMVWZitrauum/Nn+BZgJnKhF1i0qzBn68oYMsAnl3QAhwOhQDANmD27orqAZlxAcGGMO5YhzkUkp3ccJPtrcGVPOaP7BVOSR4CpyYy3MHP8y18XK/nwPAPHaG83RcdtQl2tmHLRxa/QOKWWijOb+fAbconYAzV0yyzIzPZwEU4JHCAGQcGdRTzAmgjGmJUmsHE5XjuiXPTl0WNY0tYOYbmI2UGiYRZglYAZCjrloWgm8mIPADMQ2l8+i/H+4ZTKOlpPLBjGpzs+XdQ89k3tvrFh9ua7AimT+rQHvy+K865QeYCWS0RMxZBMaLjKSsSKsh6xbFlf3TF/5pVgWXBRN/7rgtwGs+m3PGlx+5HpNpCpNovnm6r3xI5ToxFymrlv53jeMcAKajmMY9zf2aXZ26QA+LtAoAmHAPbwhyXMqiMVe5C/i18nxD/Qayrblp+s/vKEdSgm9Pasch2dX+1l4TnVIQ3MFu9KdVIRxzLJNtq6MnGDfXJiCor/zeChcIn/UcuM59d/HvDwFgRvJMkiV+hMWNGi8OCRxRApl6hKlQ7C3JwXPNqf11l7qriILA/vRD0IEfz+G0WxWZAEBV4G6zYMbSxh0CQMmP7Hn+h8H+lkp4vHeWJFA71HuSzOf6kAEazPJzG3fbzH3z2L9nsjqqiqnsdHc+aH7Lty0MmQm6ND/y2G3f7PsJgBgeJ/LLyuDRikL9IojSGDbLu9ms5eNDQwL9ErDQBfTkEUp/2YL9pZ8cYagd//2tO9k3mN7yTQVM8pQY4CcqjyXzHfJFw4BzW+Z8gGe54/wJmKmETzlGnMiu51Q4fEU+pSe8uNw+ZzeEXDIDKpLkXYGCUS6OBCTUimRz0G+Rz4pRcvwLUjgazZ+9uy1OS/r8fMzROqJu/YhoC+CIcAtUnOtyKQPguR6Y0bnNJZAJ41JwRFRbindEmEXFJVvLcatPjM7ItG14S09bbmnHMZ5htvPz28GSgRcsFimwXU26yqn76I7R8fqbAwCPLeHx/dOQgA39LIPcGZIpGMxVOyRaU2YAgjxDOyJEm7GjTNrOtA//LzdRXufmaRpHFJ5tjtJlRGLlYmJ9zGE5qUD/r45Y95n59ADAMzMUoyEbSgBTywRjSbmSu0U3e31afOOyIICbfEqMyEkncjd9kwnpT7mYZyF9pVeE0olEY0VlFQn4gjitp7701nfmnh8AeOaGZDRoAwnw9cmLZKIqciX56noPBODjEyywFQxjAhjpXxbxPUpy7gb9H59olMAAwEZBjceGBIYEzp8EBgCevzEdPRoSGBJolMAAwEZBjceGBIYEzp8EBgCevzEdPRoSGBJolMAAwEZBjceGBIYEzp8EBgCevzEdPRoSGBJolMAAwEZBjceGBIYEzp8EBgCevzEdPRoSGBJolMAAwEZBjceGBIYEzp8EBgCevzEdPRoSGBJolMAAwEZBjceGBIYEzp8EBgCevzEdPRoSGBJolMAAwEZBjceGBIYEzp8EBgCevzEdPRoSGBJolMAAwEZBjceGBIYEzp8EBgCevzEdPRoSGBJolMAAwEZBjceGBIYEzp8EBgCevzEdPRoSOM8SeJOI+KyIuGM54ft1I+Kby70t3f0eANgtsvHCkMCQwClJ4C3Kfc4uu3pauQ53VVMGAK4S33h5SGBI4IQkAKs+o1zajv29fIt6BwBuIcXxjSGBIYFjSuD/RsRnlus6XWv69K0qGwC4lSTHd4YEhgSOJQHXjz6u3MjnQve/26qiAYBbSXJ8Z0hgSOBYEnDJ/RMj4ltKwONVW1U0AHArSY7vDAkMCRxDAleKiK+LiPePiE+KiBdtWckAwC2lOb41JDAksLUErhMR3x0Rz4qIe0fEf25ZwQDALaU5vjUkMCSwpQQEP740Iq4ZEfeKiL/f8uO+NQBwa4mO7w0JDAmslcDrR8Q1IuJTIuJjS+LzM9Z+dNf7AwCPIdWL/U2T964R8diI+IeLLYrR+wUSMH8EO6S7YHxfERGPioj/WvCt2VcGAM6KaDzQIQGZ+ibvr0fEwzveG48OCdQSSL/fT0TEN0TEfx9LPAMAjyXZi/fd14uIL4mIm0XEJ0fEn188EYweR4S9ua9YKYlkgSK/nxgRf7Tye3tfP00AfMOIuG5E3Kr83DMinhoRbxwRNymbndn9mMT/HEsAM98lny8s+w+/PCIedErtOHa1bxARty6mK9k/ISLuFxG/01DxVSLilhFxm4j4mPI88JOrJWXhLhHx4obvHOuRm0bEAyPit0sU8Z+PVdGO71675K2Z1992ivP4mF3G+rk7cuyndVkz942IV3Y04s0i4vsiglKlTF/W8W7Xo4cAUATmBiX68melEyY10OLjeWFEfGtEXDkivj4iPqcwACczHEpUfLuIeERE/GVEPLl8l8awUK5Xoj7+VL6zANC/N/bqtSLiPUubtU/710y+q5WB+NACEM8tJh7H7DMj4s4R8YLGtuVj6D2wBzTvMnn3FhHxpIbvASzPvkdEvH1E3KeMi/ZIFehlX3ePiIdGxBdFxMMi4q3Ld0zcQ5NP/RQDH40FcI+I+OLy739q6Ef9iLH7oDL+/1HmQ+1DvFPZB6qtLYDqexbn7Qv4/EpZTC+pKjX/Jdk+JP5/e2cBRctRZe29cHd3Bh8GJ7i7u7sGJ7g7BA8uAYKFQAjB3V2Dw0DCMOg/uPvAIP/6wimoFN1d0t333r731FpZee/d7pJdp3Ydq2rpMDtq9bvKflMH8vEoSbTxaNOAjizpsZIeLOnFFXXT59uZ3L/TfGBgyVzcXtJ+1lbpmuD2FN5jgzqzpOtL+kQ0RrQt5uyqpnS0yDNyx4YJduB+BUmPk/Ra629t9PY/7OTHl0ymat8vnsKUAGHcp0g6q523AxQWKrsXJMchZBbbcY0YcFBeWNIV7aze84x8EOCScm4DiZ3yN5J4/wBJV5b0VIsCvbKkIkkQNovkbjahR7Urcth5qAshLxUacECo72V9OdjGtZf9P3QJrenNhf3jMRb4C82ngVB+1pI80TIPlXRDSV/J1AfpcBtGTJ7MD3MAuTJW5qU0X4poG5hfXNIjzOfCpsZCpq7vFowvZOr/VtINJCG4pQUyx28IgZ7S/IdpwutJbTPkdyKD38hUzkIHI/oVCn7JuF5kH9nmjCnkwoY5VP7NFjX9RP6DZoOcoQjsYY77Q8wMxIn/Y0lnlPRDy2XLYYI1xFhfZ/OB9cO5V4gFMkFGWCPMTU47h4hOZQQcFAmIKpVZ2uOYGdo6cli7AYQxQaTIN+M+jW2M3NjS4r97uK27FgUjh/ERfh/SACEBHJDs6hRYeH8jBjQrypuMWCAXCsL06YoeANa+kt5mWiW7c1B/IeHSxcQigpzIGeKsIMdmENi9bWeCUL8s6X0DfWPRQ/6Xl/R70yTD4wgQQsIuCib8x2aAtsWfSwqaGvhd2ogV0oJ8DrRNhHrYXHLRLuaM7HieYyGgYaBJc1MGmxGkRX9LzfVzSoLgIU8KGO5T0I94zEEzebtpLz8qASR5BgJnHPgRUyviemZmoXkPzWFXs7wLoXw9kSewZ6ycMsDCGSpsNuAJGX3clAHehezYkHDWv8dkEGsGCwl5Yhy5+QztMg+MDxlk80ITZPNHdiH9UkUg1Hchkw3kCovg5dan2D+L0hDIBgsMgm0pcAV9ZCNjE8QlwubeUnCpYFGgWKA5z1qGCJCdgR0IrQShQ7Niclmw3zem50oaFi2qPmYdAJSWmGDjXSksSPx/pTsSzlIWDzszBPPhpBPUyQILRD3UR0wXTPhwAPtiRtAsIBYLZhn/p29XMsHPjZndmM0Bssd0RlhYdOz4bCJov7WL+ySmhRN0KDWd48XGgmIckANzx58ptX2BjCHMu9pmUELiKV5BC0RbSn0+QftjYSGD9K+moAUx1stE2g/t0WfkBHmu8TFD9piogUjYcNGg8YOhLFzdNk+06VItPB0PMoiM4JZApiEp5qeUTOP6eB9F4B4mx2zcwbWAuwiCxK3QGmhA88P8Z+NCttkocOO0aH4oP2zeyHTteqiRiX88O0SAYUd+jfmG8LtgJjG40DlIDNMY7auUDELjYedE2wqmHzsSWg27EdoWO2xJYYc+yHx++Hz4cyiQD2YLN0gwQaUlmHWYXZg4LOxgHtzKNED+/4OCCtGuWGhopWi1kHWYbMb+QdNc2VhKCvPGwsNR/C5J9ANzq6TwLhoKphTvQyq4Bvg3FhzaAnWXYoW5g3aM2cm80R+0XRZWqT8ybAQ8jwYbFg8ywubKpkb/askKPGJNChnFFEYzY8ws2lK3CHUFMoZUwAj/Gps+pIf2hNYS/KctWnCYP2Ti7OYrx5cGPjXrIZaDoAGzcXCTMq4BCpsA/l5IlfXLOqwtrH/WBQTNOoC0MXtbS9isWB81LqvW9npPgoQwNIsfzSUsLrQetI2w8FHzIQcEAHMW0xgtp+SyQupALQ+LkAkKvpv/Mq0TQmRHKCkQH/41FhBCwyJisUPWFCKbpTs977GbMwm8x9hCMIBJx+GLKYT2VlLCAo/9UOHfeB/Hdo0QXtTMA8iHnR0cSwtzi3bCuCAENCE0e/xgCDIRU/5cqm3gJ8b0Zedn80LrYdHdyBZcSdQVM552aR9thXJB21z5Px48jEgAACAASURBVLghe2gs1MuxKGSkpMSJtZitBLII2DGn+OZqCgoAlgmySvu/NLOYIAKkmPoZS+smsIh7BE0MImLNQSxgF3LicC1B2GjcbC5sDCX+WXCD8NNNFquIDQXcAymW9pfn4k2Yv6MB0/9WHyLrig0QGar1rdf0+wjPphogqSn4IBBgBOclUVQu+LAQGnYSJid2NgfBiiNMfR1jsJAUOx2Bi3DBYeyPQiBY3CULiHaCyUoEGXMMzRXNjzb4e82phNhsglghP/CA9FigJ6pY3PQtBBrQAIMTH/cCGwcaFyZoKUGTJgTRkx/1ATPFahYy5hWC+lV7n/6hzbCgiJhDRqXaS3BjgHHQUJAp5g1SLI0o4jxHBiAQ5AHtG1LAr4Y/F3KhsFlCAjXjpT8QOv/hxyb7gGg3WkZNoR42/7faS3HACF8VGy0pN8xJbYGMGRebPWNFNuIxhg0PUxuNExORywFKrA/cCsHPHCwZtEvaYJ5jBSfXbzYAxppmL/AefrvYZYXGjl+a9VMiB0GZQmOPFY5cn0b9nhIgiwNBQTtDu+HP7HIUSAETCcEJWhnPAyALCpJJfW9p50iSZKEx2QgjZEIwIGgbaHz4WDATa/0SjIWFhD8Cfw+FvlIP/ruaEnyKqPNMBv2mn9SPz4wxlKRixG2S/kN0Fqc2ZB1KafAjPI+ZiSAT3aY+NO5SzTbUgfmD1gJRQeYEQXBl1DquMQHRXpkv/oMcMFtJY0AjKL23DSJl00ULJpADieCrom8sVKK1mOxoiC0pEcF1A7mANzJSY/qCG/IF0fM+m31MHKwXtMuSKH4qh6Fexs56IPWly39GpgTr7wS2LpHtknmnfhQLsEN7jgtrA/kpnSesFhQMNmDmhUAlvlD6hI+SeWJDJzWKwBAkyKZVkscX0oaIbqO8rKSsIxGagZI6AOmVmlk1YFA/BeEI/9W8H/yQkEPw19W8X/IsCxvtGi0HTY4k3SUW5AetBzMagicPDuKDCOeY21aMIHzIBYslDgK01rfU94LfnQ0YPzkyXkJOYbxYH1hurAuIGldQGkHHUiLdCEWGTRaLsISoaQNLBI0VMuUGmJCi1GpWZ+dpHQSY7dSaH8A8YAdCbWcSa0zn0q6TaoPJS6Bhsg+8lDbuz+0sAsGHiUW0iRsv5IlGCfHhbmIzJX2tlECrJ9YJ8IiQxY5dHO34W6YGP07/acnvqp5kf8ERMARCyg7R6hrf39YC6AR4xKkNDmhOqMx1CDukFxFJJIJamm6ytULoA1sJAuFYJxYOvr/Xr6TVDW9kVwmQ3EAEAQ3sEhYRJfpJFjq+EXxyY0L6Q9MeTr/g1CcYNJt/Y8Nlz7u3WgRCOkztUcnV9nLFre0iAZLqg2kLCeIYx4kbcgZx3hIVgxhrzvjWTBvROKKFROQ4gO/FEZgbAYIXRJCxPloTqufu41rq30UCxNFKGgu5UXHaR8iXCsf8aqJjpZMXjnyRUznp901LO+DP7SQCJLxzmQJRX9JSWo6pbSVwu0iATCSnCzB5yXPkDCSExJ85b0o2eu1501LhII+QrHuiW5BwbS5aaTv+3G4hQGIyeXlcgEBOIjl4FNY3OZnksBJVJV2pJY9ya9HcVQJk3Fx3RcImKSkIBSYCp2Dm8smRn4jPj6NHFLL4CflztGqTcua2Vti3eGDhtFJ8Uw4yHq6Vw+XDcUmXs0QIdpUA17EWwvE6jnkRYSaRdOoUm3WMy9tcPwJYFlguXGzB8TY2d47m4dZhw+WElpNfxzw5Aa5feL0HjsBYBPBrcxQ1nHfmTDVnqDm26W6WAXSdAMeKnr/vCDgCi0XACXCxU+cddwQcgbEIOAGORdDfdwQcgcUi4AS42KnzjjsCjsBYBJwAxyLo7zsCjsBiEXACXOzUeccdAUdgLAJOgGMR9PcdAUdgsQg4AS526rzjjoAjMBYBJ8CxCPr7joAjsFgEnAAXO3XecUfAERiLgBPgWAT9fUfAEVgsAk6Ai50677gj4AiMRcAJcCyC/r4j4AgsFgEnwMVOnXfcEdgYBMLnNkOHFvO1wxoC5GZZLvTkYsX44sWpZ4Gv2PNBZb5aRTtzXVA6db+9PkdgFxEIn9p8gSQ+vHQ9SQdICn/f6Ou4agiQizxfbFduf2mGmT6qpEcbgN+RxIdcuNfsQZL+d4b2vEpHYFMROLGtgxfN0EGuz7+93R04hpzo4yslnaLjE7LcT8gt1HwBka8ubuynX2sIkFuM+bbAtSV9coaJSavkBmU+Tv4YSb9aQXvexHwIsOj43Oh5lqIZzAdFtuaYPKY2JeesOzuwwgdCHy/S821uzO1bmrY5hsAP704NAWKaHiwJ7W9PSb8uHFDrYxDgM+3jRf/dWom/t3YEYoE9lmkNaAR8FMrLvyIQNCu+5zG19jRn3VPMZdgo+TYPn6vlezkxBsHXOBkuNQR4dElPNm0MU/UvU4x4oA7UdL6feztJfKrSy/IQCAsOsoP0ggAvwj+0Rrjxq6HlzPHp1DnrHgNZkBWID18i2l1sOVA3ckN5qKSfjWksvFtDgLwDKX1Z0iFTND5QR1CD+ZDLwyT9cub2vPp5EOhabHe0ANckAjxPt9de61R+uq6BzFn3GOBCMCXW7lJfKM9Q8D1OUmoJkA7wDd0nTNJ6fyUnte+c8lEXfEdelodA2MToedjRlzeK9fSYhX9+Se+Zofk5627tbpf2R10xASJPWJ4EYvmW9ySlhQCPE6mik3QiqSR8P/d+kq66Am1zjjF4nf80X9jE3N9XJxEsdjS1L9S9VvT0nHUXdaDjoeAaSYM+MQGCx9Usutzazr+8V0uAdPTqkh4+ow/w9JZrSBj9zf7t3MnmetUV9Qn1qvux6e2lScSYgJ+LCJC1RiYEpdZ3OmfdU+KKZUnuL5kmsXYH6Z1d0puMc94/dUpNCwGeYUobvANFBoyJzUeePfgxpZittq7g05k6lWO1o5i/tTRFiOwKyCAUcun45m9LCtGcdU+JDCQPWadBH/5OUOQwSXtPGfwIna8lwGtJQoWeyy93QtvlCHrgN/JTIFOK2WrrCprLZCkLq+3+Wlub00yds+4W0IZ8xSFghlI0i+JVS4DsRt+cyTkLeHeX9GxJV5qxjZZJ8nfyCKQpC11vvGum1I5875b1xJyBijnrbkWZzfLUSbAs+Pz2nSP40aoB0tHfTu2IjFDDv3igpGtI+nADmkeRdD5LnjyNpNtI4ljdRyS929JpcCz3aZZHknQxSWeV9JKG9nf5FRbW7y1/a+iY1C5jVDr2uY/CTR5MKB1Yz3OYupeMCDCO+PJKenTvtJL+38g2D3+9RgM8hqR9JP3Rzuf+aYoOJHVw/veF5vi8maSvFrYBcV1O0uMl7ZF5h9MsHOn7rC1WMDiR+SBQuSFf8ozuIuk3he37Y0dEIGiDP3SNr0k0Jj3ulfRgzrqbBmvpLqy5V1iOKAFQlBb+DaUrBD+CXxkXHAGTRyQZBvFJF/qStThqCJBjTBxN+56ppH9rHe3AeyycW0t6tTk+S0mWY3NobGhv75T0REmftwjy0SSdVxL+SxzyRJmHChcw4H/8xAzj25Uq/cTHuJlm0V+/5yzsuJr/Tihz1T2mb7ELJfiNIbQQ/MAPGB+NQ0skVe55diqky5eIHA76DmsIMLDrh2ZIhKYf+BcvI2kvST+qRPLyki4r6VGSOD3SVwAJVfvYlsaDiXxdM5NJsGQHwmSeg9wrh7Tox50A26cvJoJUw2mv9e9vxhrS1HWP7VvX+8gRlh0khzYYH5PjeRSVt1vqTFcqTTZ3sIYA0bLoxH4zpMHgk3iIJEzQQ+dA0utcKQLBVFnCIlspMIWNzRlB30QTuAuW2A94QbtjMM0oCAT40x6CnJQAw85Ejt6UaTAce8O3iGaJFuZl+QiEBew5gG1zOeeFBVlSaOvy5G+FM8tPMjMYUzbNEwwE2EeQcSJ1ZwdrNMBAgCRpTnVGkagt5/u4+ucmkvzaq8nlaOUVLuYyzJUjU97gnFraJqbBdCETLj74jClc6ZHK4AN8qV2Y0nV/4KQ+wDNbcAIzmCjNFCWQ6v5Wp/vepkB1vXXkLrRcb++W0fqcWhrzQ0Bzk2/jiYMfJzEC5I7A+BYYnuGEDASIWy71DzLTXN7MKZLeyxNqNMDgQOUqrCnuAyTl5Tl27xkd5dyvl+Uj4DmA4+dwqjzArshqTICxtr5J/toQ/OASjb5LUIN2R9YHxJhessvYuFORwGbvzdEtBBgutxw7zWFyCG37nX9j0Rx+f/KbdAeaCwTII2Mv9IwvAohTIxB43CZfnClVZN7ZyNc+lZmaXoYw1HLtRQv5UbQ/Eef+wRPk7d4z0eTCMTla6SLArP+PF1sIEEad4kJCFgeaH+kvv2jHyt/MIJAeUZs7MBHaG3sNVqydMMSwQLmPMnxfhH9v1Vzi+ocSZkvTUkLkmz6NPf881XndMEbWbPgwUVp31zPrXFTpha3preL0LfXtdR2lK7p4d1UEGC45ICn5PpLOYTs3HSfvzst8CHRdKz7nBaWhvdRn0zLCmFQCSXHcLnxxLCbG2g/kxDlxQ5pkrEUNaUmxtjp2k5mKALswn0q7bJnPkne6bn2Ob4shITr9KFJq4cQa5GCbqyJAdm0CHRw5w/fH936515+jUl7mRyBenNnjQSO7M4e5nWb9hy6O9ZWV5CuWRrWnPP43JwHOGWAZKTqHXwLLYQYuRUmDNEGG+zT+Jg28hgCPa9fUs4CmMIHHguXv1yMwZ3pF6M0cOWx9RFfk56mHae1vzEmAc8zP2gFr7UANAYazwB90AmyFe+3vsYtyndlUG1jQevhONGY1BfOU8+JTXoPPWW5M3DSdocjPs3bU6zswFwGWarP1PV7oGzUEGHwmUwVBFgrZYrsdpxZMNYhg7gazZMiEaW2zz2SjbUpw7rfWv4nvzUWAsd9zrJ9yE3Gr7lMNAYZE6AdPeBKkusP+QjUCYdefWisLHYn9i1OnpaQRwdjM/reJtcxqYGd8YS4CpMub7AOcEdLuqmsI8AKS9rSbGRB0L46AI+AILBqBGgJc9EC9846AI+AIpAg4AbpMOAKOwM4i4AS4s1PvA3cEHAEnQJcBR8AR2FkEnAB3dup94I6AI+AE6DLgCDgCO4uAE+DOTr0P3BFwBJwAXQYcAUdgZxFwAtzZqfeBOwKOgBOgy4Aj4AjsLAJOgDs79T5wR8ARcAJ0GXAEHIGdRcAJcGen3gfuCDgCToAuA46AI7CzCDgB7uzU+8AdAUfACdBlwBFwBHYWASfAnZ16H7gj4AgMEWD8PdT0+wHhE3RTX4HuM+IIOAKOwMoQKNEAYyLk4zePkeTEt7Ip8oYcAUdgLgRKCJC2469Jzf1h7bnG6vU6Ao6AI3AEBEoJ0GHbHgRwX3y74nOSwd3xAvv2L9/nrSlD7V1b0mEd3/vtq3+oL+HrdK39rBlT+uz1JOEmur2kX4ypKHo3/tpeTZW11llNO3z/Gdl5iyQUoZ/VdMyejS3KhtcPbxc5aGn7X9orIcCuDl/CFtBSPrFXM8mlk7LE76oiOJTSD6PHH9LmvdoxD7U3ZV9iC6Wln6Vz3vXcsSU9R9L1JV1X0vvGVJa8C/5XlPQsSae338Laix89jiQ+Hn9PSWeVdOOKTYV6jiTpcpL2i9phLJBN2PCOL+likvaSdGVJP5d0H5OlP1eO+SiS+MzuUyVd3d4dki2e5zOoj5J0olUSIMQBAaaMGxPKOnbcUrzTD3en76ULPHzgu69+CP8gSedpIIPSPs/1HH0/u6Q3VTSQEkvNXA+1N3VfxvSzAo7ORy8k6Y2STinpCZJYG38ZW2n0/jEk7SPprgMEGB4/taRnSHpYJQHyfmk7EP6TrT+/kXRnSQdK+lvDmO8kad8CAozH9yRJD5X0nYb2/uWVIQ0Q0rv/wG4SyGVSlXSKQVkd9A9hLFGXg2mVI8DQPer9ZoUmNeGwmqvC3Hx3tKPXVtT3kfK+eobau6Ok148wY4b6UtvPWhzi548uaW9J97V//JSkm0r61phKO96NFY4uDTC8wnqGKD8i6UsNfShtB6J9haTLSjpU0g0lfaWhvbDueLXEumB8aKDvaCD4zu71EWDQjL4n6bEDA+vTEBuwmPQVNALMElTmrxXUHDS712XGG6qCXM+wIAJkPm9pQlvrwwtjBlN8XS8qwHOoPephkWL+zNGXmn4WDGXwkXNKer7J2B3sSf7/4rEVJ++XEhOvXco00I819KG0HXgDLSxwA1og1kFtqSVA6q/1Gw/2qY8AAyE8JbPIeQ7/BL6HEqKpBaj1eSaSXerehYssmFAIzRDhh/60mHCtY5nivdRELNV047YhfUrJwhpqb+6+1PRzDLasHeQL39z+trmcw/5/N0mYh1OVUmIa215NOzF5tcgTfW0hwLFjPML7OQIk6pMjEX5/+wYRYCl5x0DUEuCkk7Ciysb4bVu0qqH25upLSz9b4cfn9zLzh33U/o8i8ANJ15F0SGvFHe/VENOYZmvaif13DzH/Z23bG0+ADCgXUapNq6gFqfb5AOqQryStcxcIMA7g1OzYNb7UGNeh9uboS2s/a+UrPJ+mvlxe0hskHdesiEdPGAypIabW8fBeaTv4PgmEQPhouq3R740lwCUnPjOJpCTkiLtFA5zClzZGQP3dzUDghObzIgAY/H1ohJjCV5D0cUk3mypSWUFMY9EpJcBLS3p5ZP7fQ9KvGxrfWAJM7fPa5MpSLKYOJoTgzUVmIsBVRhhLMfTnVo8A2t6DJN1GEoFCSvAJkrJCYRMm0j1FKSWmsW3F7VzJchr/apWSi3cKG1fwfaLx8ufWlJSNJsBUJebvJaHq0kmYI4k6aK5M1BwaYG1wpRQLf245CATzj0X/9CT/jajwwZIIhuAfvLuk300wtL5EfszPLxgJf1DSWyNCbmm25sAAbhRyDscEezaeAFNNkL/XJMP2TcJc0eOxBEiGe65MMf5cG/775iIQUl/u0pH7FifWEwy5pqTPTjCULg2Q0xts9GijmKB7GBnhe3xeYfZD2rW4HczcD0cPMLYzWSoUuXicyAibwAsb21sEAYJBmrrAv9UEGWKgW6K0pTIU6ub5qTXAIBxOgKWzsX3PxakvD5D0x44hEhwhn5RCgnSqJbagkjOBT2rpaDexyunb0xqCMLl2Qt85lkb6WzjG9kzLC6zVdhdDgGHgqYpcaxLXJhzXCstYDTCXB4jPkoTiXGpQbb/9+WUgQPL7AXY8tKTH75V0K0uNKXm+75kSYjqfHdM8y4jTGSXthD7GRwAxgzkB87bKQS6OABlfejlCKQkG8vth4fG0SiwPf3xuApziFEPLuPydzUCA216wfIZ8e3MEQ0qIicsKuMzgBgYV2iDn1mtKSTuhPtJ9nmsKAf/Wcg56kQQYEw0+s5IIcewbmdOEjNupMdFL8wA9DaZmOW3Xs6S+kPKCBpiL7sbaEaZin7lcilAJMY29uYe+lLQT93lMQjv1LJYAUxIsTawNAy7VGksFpGtSatooJcCW/vg724EAwQaIjNQXAhxDJVyRxbNjLgsIbZQQE37AV1keIu9xZvbNldCXtBOqPJqkJ5o7KJAnF0PU3AqzkQRYc5woDKDmRpjcLTOVc/Yvj7dc4OkEOBb17X4/ENqXK4IacTCEo2KcnGi9JquEmLgE4dV2LVfrrTQl7YSZPqNdg3Vh2xAwueOocYlEbCQBokrfz0LpuVtXW/16DPySMwUTWiLBLQRYg1OJMPgzm4sA2hQ+LhZ56TVTXJKARsYlomiBNe/GSJTc00db+ONCVHZP8wfWaGMl7YR+4f/jXj5SgSgkhZMAXnsxanyemMtViZivtHRdhhB8Cdwplrs5OJBNyaUJ6cDYbea6U682ZaWFAAkGcYtuye0xK51Ub2wyBDDzmGNMPVI/SGuB1HLpHpya4K48rg4LNzlzFyMXlX6+gii6boSOT2jgl+TihQdKYi0SjX2cJNJSulJ0+oDpuhGaqC6W3a8kcRoEriD3D03zwVHeIZot5FdztVnXjdAfkISm/DlJf5psBjMV9d0GA4F03QSdVpe7cXmoeSaXpE0cy1NfpRXnLZb4AmuJvGaTWNVcejvTIpAGFeLah2Qqvuihq0el7qLSUxkkI3MZ6YckvcaSk2s0v9J2wlggcNqkPW7C5s817ZV8E6RkzU4y230EWOJHa005iTuOkCEwHOeZutTcOBJPSi563HreeOrxeX2OgCMwEoE+AowJoWvHijWsHGGM7OKo19PduO8D7y2NlO7kLXX7O46AI7ACBIYIMPi3uo7B0bU58/mmHnrOLGlprzT1p6Vuf8cRcARWgEDJZzFX0A1vwhFwBByB1SPgBLh6zL1FR8AR2BAEnAA3ZCK8G46AI7B6BJwAV4+5t+gIOAIbgoAT4IZMhHfDEXAEVo+AE+DqMfcWHQFHYEMQcALckInwbjgCjsDqEXACXD3m3qIj4AhsCAJOgBsyEd4NR8ARWD0CToCrx9xbdAQcgQ1BwAlwQybCu+EIOAKrR8AJcPWYe4uOgCOwIQg4AW7IRHg3HAFHYPUIOAGuHnNv0RFwBDYEASfADZkI74Yj4AisHgEnwNVj7i06Ao7AhiDgBLghE+HdcAQcgdUj4AS4esx3tcULSHqppMdLOqjnQzpnlvQySW+S9LQR39HdVYx93JUIOAFWAuaPNyMQPrTV99HuI0t6pCS+UubfW2mG2V+sQcAJsAYtf3YMApeX9AZJfFQbkuNbu/GHtM8t6dWSziHpWZIeUPlt2zF983d3FAEnwB2d+DUMm49h82FxiI8PePPnA4zkzi9pb0l89Ptjkm4/w7ei1zBkb3LTEXAC3PQZ2q7+HUnShSXdRNIlJZ3PhvdzSR+3D22jBf5uu4bto9lUBJwAN3VmvF+OgCMwOwJOgLND7A04Ao7ApiKQI8ApPihe8gH1i0v66AiQLmG+o5IqjilpT0n3Nof86yw149vRyyFiOVRf3CY4Yto9UBLOfuoi3eO1iaO/q76bSjqOpA9IupCkK0o6T2Qefl7S6yXtL+m7JQOMninB9RaSXmnvnNj+fOWBdqaazznapdu1Yw5DPan5Hm8jCbn/iAViPlmB+RTrJcalr2mCSI9JfsSvegNJ767ob3j0jJIONBmOXy+Nxnf1J67ni5JuHPl1p5KzhqEe8ZUcAYanjy/pRpL2kfQqI48/JK3HgwpO7tdI+lVFL09nEcBr2ztDwnBsSTezPl21ggAvYkJCNDIUUjNuK+nQ6N+OJumClo8GuVHeJul+kv47IbYbStpX0omi9z9rvi6eHSqBbMEMcnm+ESjvnEHS3Q3vrxlxf7gCTx4l+EB+3VMlXd3ehWwfIulzkv7UUd8JJe1laSn83DKf62q3ZcwnN+yD3AVIHiHpsZV44+c8tUW67yipb3OOiTo3H11dYCO/vqTHSTq9PUAOJfJS60Ml6LRf1Mh9TJ7TNT4EBfN9BVsvRPIpLzIZ+kHPi6mcfUfSPSW9s0cuK6ci/3gpAVITnX2xpMNscv+SVB8TIJrPHSrJL1R3K0kvt7/kdkNAJ3r4pUiLyY36tEayZ5L0BNOuILA9OlIvwIfcNP6j3No0sbiNU9pEk7gLkaJdQh5vlPTQAmEMBPggI/M4NYR2IPonS7qr1X9LSV/PDbLj9zuZUPMTAv70TB1nl8QGdi5J77XN5icLapeuloyZOWbRnVUSc3AWmz8St8G8dsMJEF1K0ocKCbBkPrqgP5akZ9pa43eIhgBTTZ+RX6wLyItCMArFAjKqLSgNRPmxriglllksZ6+QdDfbcGvbbnq+hgADGUB8XbtiTIAlZlJfh2PzM0eA1HEtM2WDGdcCxKkkPdu0IjStuMSE3DWhmLwIDIuoduelHcaL5sFi/UVP59EW3mHjbF0stbiCCZhexrQjhLpGIwhDWVe7AVtSbSh9shQ2MEzKQ1qEp+edYA6zoEntSUusAZbIeV/XMD/B+HiSGEttDuX1zF0T3i81e4f6E8zzEgKM3QZjeKNp6moIkAYAm7JJBMgOgspNkm1r4RQCY/pKhyYZL+B0QsN73zDtuKV96qcMEfgUQlJDRMgFvknMelwFYwRzXe2WEuDYDaxvzldJgCcw9wv+S9w4aIFYRbkC6bHxs+mjseL7dQIcQA0CRDVGZU7LujTA3CSX/o4mebUO/+YQAZ7EfHaQZ4nAdfUFPw4m7dD7mGNvsR0e0xVTrct3NzTWGiK6tLkhgm9pVQQ4ZbslBHh0cy+APe6dKcsqCZB+Y7qGkzbI46MLzlJD/qxp/Nr4Ep0AByTgGOajAugubWXpBIjA4mvDlI39H0MEiBmDvw9nd02wp2ahoY1hfhKAIhiBD5DLAmpLKQGiTb/E/H9sCPiGVkGAU7dbQoDnlPQkCxzEWQC12HY9jzyxTghKdEWSpzSBaf85RuLXNV8xGvy3BgYSyD8oNLgKnAAHACPqhPZB2sh7NkADJLL575LePIW0Sgrje3tSZx8BBmKieXD520T9SKuJtaLnWaCm1deY84eFaOgn7FYWglEsirkJcI52cwRIAA0tCeIjAjr1/EGA+OPYUFO/Mn2bmgDR+vDnsT4pHDUckksyHCBNIsA/jNKf3ATuWchEgYnSEDntcuquWgNEgEibIX9pqoIAQTjxQfw+AsTh/FwzIfAdTlmIppFKQe7U/a1iTBR8ci2BiBwZ8DskhD+ISC/jR+NHg5mbAOdqd2jMwcd5McvdbNlQcvO9DgKMI7qk1mAtfK+jo+HmnfB/0tzCXDsB9szsUKSUV1ZFgORZkcJCojGpJmOiv+lQSTnBJCJxE20JsukiQDYDSOKXPakrucXR93tXEi8pRfSJvMIxWsqQCRxSbSBdotE/WtF8ztluFwGSw0quJjmfBM8ebITfOl9D762DACF20s9eaB3jz12+TRKfuZsRGSbyHa9dJ8CeWUVg0P4I63+/45k5CDAnmGPSB/rqJu8NrRL/0FCBfMkTQZ4+VAAAIABJREFU60vyzPV96HdOhpzX6seXQ8EvR14h5kpL6SPAcEvLRW1ug8Ywx3zG8zV3uykBxphx+QKJ4c8YoVHn5mAdBEif4lMdBEUwceP0quC6Qc5D0vRcBJjDKP19jKultq3Dn69JgyFMfo+BBOe5F0wYIBogyaoEBSCqKTVATl6g+aGJcVKC5GaOFwXfGWkwRAzRyO5iUTc0ppYE4ZIJgyRIvsaXQzoKwY+goZW8Hz/TRYDBFGReb5echJlzPlfRbkqAkC+bVjg9BJ5jfKo5/LnfEB8g87UqHyB9ii+W5e9kGXCUMhTMZE6MEPB7n/3jXAS4VXmATCRpEYTN01Mg4DjngukStql9gMEpDvERWCGy++MeEzjOy+PkxxxO9DDmEJwBf0rOud23MLsIEH8nJwmIZHNqIS5zzucq2u0iQDbL+F5Cnuk7gZMjuNzvyGdIUv5Zx8NzBEFCM1gvB1t+bHo8DjmAFGPN0AkwM5vhiMsXenIA10GAU0eBiYrhb8NHFKeadPkA49QUjr+1Hk/LLaLwOxckhEPuHEvjdEqt6Z0SIOeAMasJfKBJp/7FuQhwVe32ESD/Hh8vBEe0w/eXTkbhc1hM+NiQja4TPnMSYEhxIQJN6hSpMWh74TgrkeLYcnICzEwqAZDgg8IZ31XmWjBTmrh9w4y1LJK8MQl/bQ/3RYFjc5mADOeF03O8hWsl+1h8XjK9WSP7csc40Hrw+ZHugiuhq99zzOcq2x0iQH4j75BAABddDEVMS/FNn0NuuPS17wjhnARIX7hZCJM/Ph6HSQopc2Ik3kCdADOzzCkJdrKhCw7mWDBzBDm6hspV7Gh/lPRKoaE8QHZYHOkkk/LeZ1pXS+a92OSeggBpLuf/mmM+V9lujgD5nTPYpHbhD2QjIMj0xwnmMJybpy4Ch11lbgJEyyXPL5Ad65f1hBWHbzLW+J0AByY9aEefzhwXmmPBlBIgKj8RWYT5p5UCfDK7zQWS77pOaOgkCGkjtHnZkcnCuS6Hm0V4rvW2jngcJcGUOeZzle2WECD+QLRSkogxFe/c4w7IzU/6O3l1+IWRjb5E/bkJkD6FjR2C515JrBpSgNITIk6AAzPM4uN2hy7g4tfmWDClBHg5u86KyFZNrly4Cgktru8qodxtMOEutZZjaqexRGNOXPSZz0T1MFswsyml5zzTKS09Chfe44JQ8uZWdRRu6nZLCJBn4rsA0a5JO4rvhawlP54vWTOrIMDg88MHOCQ7ToA9sxyEAx9Jqjanr8Rm2qruA6QP+HK4RDQkddYIbHzMrCsHqeQ+wFiD7LpYdag/1H8dSdSB9tllfsWfixwTcCm5Gy/u667cB8iYYzko0VIDTswfp3XYeElVIgGZNcNaIao+9HH3eGNtveIsnM/nHHpfdkbY+IZuiYk3u1YLA0xCf7DGKCVpMMg3fEFq20bdB3gKm1iScnO5bpgSVzGNAXW77+PXOTIgsosghZuL8Z9wXrOLGDDNcTJzROx/OhI+h9oiqo3WyOWNXD+P9gcRxffB1dwIHWtXRGvxJRHt/GsBG7OI6Au+Gm7QxdXACZS0j2+1i0xrL0PtupmZPj7MzKJU86Q/RMIJBIWLYKe6EXoV7QI5Y/4Pk42SW7DT1BgSiAle5C4FTRd8mG42U0xrTgqlpeWm7C4xIh8WucHUJjn+Xia/qcyF43Ff7fnWMusISwsfaLglHVcAwcCaY5f0h/WIMlJ6IzTXcUH+Qc424kZomJjcNm5JDtchFazjf3mEbypwaQJEwFXyQ6XkOw5D79fsoF3fL0gd4DGh9bUb726pqRHeKTXheR6n9TXtQDvXFEFCCMQHLWWBW35rHfQluM7xbY51tQuOtW2HuUILgriCuchpEeT2oIz8sl5IjA+3sODOgDy6zhe39i2VwaFvcKQyx4YGOZLAHxKfqS/NL+2S89JjcVv1TZB0ksgRI2JI9Oi3AyzEzobWyOF5DvBjElNavqvQQrj+jiPgCDgCVQh0HYULBIjZgxkw5KDvawzNkZtSMD+cAKumxB92BByBVSEwRIBjjwiFkxXcRlH7Za1Vjd/bcQQcgR1GoI8AIay+u8RK4QqHsv/PCbAUMn/OEXAEVolAHwFyPGiKW44xp0kSJlLrxRFwBByBjUKgjwDR3mq+Ldo3KM4Qc9yI0LgXR8ARcAQ2CoGa+wA3quPeGUfAEXAExiLgBDgWQX/fEXAEFouAE+Bip8477gg4AmMRcAIci6C/7wg4AotFwAlwsVPnHXcEHIGxCDgBjkXQ33cEHIHFIuAEuNip8447Ao7AWAScAMci6O87Ao7AYhFwAlzs1HnHHQFHYCwCToBjEfT3HQFHYLEIOAEuduq8446AIzAWASfAsQj6+46AI7BYBJwAFzt13nFHwBEYi4AT4FgE/X1HwBFYLAJOgIudOu+4I+AIjEXACXAsgv6+I+AILBYBJ8DFTp133BFwBMYi4AQ4FkF/3xFwBBaLgBPgYqfOO+4IOAJjEXACHIugv+8IOAKLRcAJcLFT5x13BByBsQjUEOCRJP27pOtKurSkC0k6rqTvSPqUpDdIerukXzd2ik9ofrTx3b7XXiDp3pL+MFDvwyU9JtPuzyV9UdLHJB0k6auS/jpRX5mD00i6hqSrSbqYpBNJ+o2kLxgm7zaMzyTpcpKeVdD2Me3TpncqeLbvEcZ8Y0lfy9SRw/AWkl7ZUceJ7d+v3PFb3zulwzmbzdV5Bl54xATfrL65pAMynXqXJJ77WfTcEGYlcluyXmIMh7AO3cq1WyJTYazUyZx3zW1pe6Vz3fxcKQGeQdKjJfG94OdKep2kHxoJHN8W7V6SeA4y4fc/NvTqKJLOLOmpkq5u75cshHhyIY77SnqNpF8V9gFyv6R9vvMc9s5VJL1P0l8kndw+FP8gI6fnSUKAIcYx5aTW17tKeqsk6v2sETZ9OoWkq0q6vyQWNIV54L+/ZRo+lqRnSjq2pEdK+kZE2jFe6eJEJvic6b0kXbGQAJm389n3n68U9evORg6/G+gr/buZpH1sQ+V71BA8G2tujCXYn1ASsgkGFOq9p6T3ZDbGkrrDM6yBS1gbe0Qv0tYdJX1A0p87KoRQmFvmk8LYnyPp24UbbNd6oa2HSPqcpD8lbTK3bK73iPBoWS+M90bRnFHHgyW9StIvkjZT/EN7PDskFzX4Nz+bI0B+hwj4ri+EdwdJ/9nTGtrgkyTdxRbeQ0cMEK1l30YCfK8tqJ9UonIMm1DIiIJAo/GFAhY3tX4x1peYdtmq8V7UcD2BLQI2jT6tEiJ8spFwbpcO/YXknijpUZK+l2AxRIDhURYn84mgfrIQS/q5X7R5XV/S6wvePbttWGgMEGEXWRRU0/vIuSW9VtJZJJXi19Le6U1BCJt3iSxeyzYJLJWXN449Xi/3MSId6n/A+1ySSvrYVRebN7JxBUkfNA33+z2Nxtr420yOU6JswXv0OzkCxNRlUii3lvShTItoSggYH0NHm3lAIwnGZkWtBjhGwGOzJCVAhn48Sc+WdCvDgQ3hxQ2zcClJLzSt7pZmKuS0nYAtG1HOrKdLkNwNbT7SuksIkDrQAH+fbAS54aIBQjZsEgdLYnHmhB0SQOMEi5Ssc+3Fvwd3Aq6Ey5hFcpGeCoJbA3IPLoYhV0lpP7AgXmrWEtoOY3pTz8uQCPKKC2kM8deul5i8WtdLqQwx9CnaK8W/6rkhAown8vGmMpfszPEC2NM0gtziTjtdO6HxZLROKH3IESDPxLstCx0SLDW1eT/WkvY3c6RUiwRbyI9NIfYndU36cSShkXyl48dS4cUUPqqZjaWCdXRJe5tpzzu5DYzn0W4xFzEBa2Ul9AvTjg0XDf4wSU8w/yk4ofnhu8UfGOSD9/CpXs9MZFwEuDgwIVv7EPqCAvAK2wSwIsAAszYumK+4ak43QlEI9a1jvZTKUNiMgz9wzPoslcHi5/oIMBZidjH8ULE5ONTASWzyMZ1LnehLIkC0t6AJf9zMbRZvSQFv/E/PsIdLTcRQN/4yfC0QRY4Ah/pTI7wl40qfYfM80AinjwDCO+c0VwCuky6yLmk/tjxeZEQW+2djEyxdgMzJZc2lAYnit6TvY0gQcsOvhy+Ogl8Pcg4aZnCn4IvDmvh6ySAHnnECbASwjwARSswXBDln36dNUycO5+B0LvFJLIkA4+hbLQGeUhJaH36T2ncDRpDmZyq1shTfuQkwJXo0a/yRqQXBc2i0aKoQREvgDF8lGuTdbZPu0raGCBBs4v6ymUEopRt+39KLNX2UiJhYcS0RoCI4k3MrlSxtJ8ASlDqe6SPAGNAWlTV+H1PgbpbWUdrNdUwofSsxgUkLebUNpNahi68r+IMIFrAA8LGtusxNgIznZJLQxhgzpHIDI+54rGwILzMCI+LeUi5vKVj4HDEpu8zoHAHS7hlN8yPTgT5BqGOjlMGHDsHj57utaYHUjw94rKYZ8FrHeqmRoalcVC3yMfhOFwEe2XKjMLUopWkXcUNjtCTqWceElhBg8FdhxlL6Flwf6GCKP7UV16kEoEZ4x7QZ+4MhQ7S9mFTwv6Gx3b4gUNLVD+SXbIPH2o8Qzoc7HiwhwJA2hE+31XWTNh38fGi/FDZOUlPIIx0T9EjbWcd6IRWGTZyNLWclLooA02THlmTRmABbhGkdE1pCgCQhk/SK5sKOToSv1H8zBa5jyCh+d1UEGJunaUQ0bCZfaoykM54Y0y9bbhoBkLSUEGDquunKAmjBP0R6OUBAIX2KiDd4TFXWsV5i7H8g6TqSDukZkBNgwWmCGLt1TGhKgAR+OJnyW1to+N4eZ/4qSB2n/ScqJDglwFx0tKLq6kdXRYB0jBw8NB/8yURYQ6oLfma0IHD8VvUI/v5CjOnQRltCgCUbYGM3dUFLDcIUPlTSTSRB/FOVdayX1FLEHYRFhEJAPitZCKe1dCTWDq4KSotLbSqc/qWeLhN4Ck1lGzRAghVEtFmoCC47No5xjvyRtFwbhU1xJa+SNtZRVkmALBQCYQQqKAQ78NPhRiAJHBcLp21aSpy8jhZyTTtJk9ZVQoBHs0ANZjpzjflemgCe6zvrgTQQ5IhSmh+Zqzf8vg4CpO04Va6rr0TiiQFgNaE8cCxu4wkwNQXIpyI4UCOkMQHm/ANdwK1rQkuCIKVCmT4XLzB+a3EttLadvrdKAqTtU9tCIN0EDQhNATOQY5Njo60Q1tNsgOTfvbkDpBICjH1arRH6rvkhRYeTVBw5RBPExxg2Avpds6765n9d64X+YOLjw+VoHMchu+4GWJQJzKDGRnHjaGcL469rQuckQHCNk6jRgki8Tc9rTkVyQ/WsmgDpS5wcPKUWFKds9W3WJQQYH5cjqDJGMw3Yk7eJ5vtLSwsjITucEoEoSk5XlcjDutZLSd94ZnEEGAtVy24Y78otx8XWNaFzE+AFJL3FgijvNH/YT0ulaMLn1kGAkAGkz+UAlNok8L7hx5HWPv9ajgDjxGV8iZz5pq4xJfSLM99sfD+yfMP4PDkpUeG3MW2ta72U9nlxBJgeZ8Ifwu0ZJYV8LG6MwdmdOwWwaSr93AQICXAq4DbmZyIy2Jr/VjIXfc+sgwDpSwgG4CjnBAR+uylK0LQ4BgepkHcanykeIkBu3eE2Gs6u47PCX4mfd8xJEMZEoIM8z9slZBpHxnmuL0m8BhcnwBq0omeHzgLH0bsaM5Z7At9oUaDWY0XrmtC5CRDoY4d4Da5h2jCjCB58unHOeW1dBIifjc2RaHDLJRJDQ4YEOXv+MLv6i0sraIfLIzjzm54FJjjD/ZZs1JiipM/glySyP5b8CA5AqNzE03XSg2vjCAwgCwRcyKXjQobWsq71UtrfxWmADCy+/om/D91qEYCIb0vBv9Wa7Fk7oVPdNrEKAoxNtvSIVE6gID8WDYun5GKKTdIAkSfmlRtqMIN/nBts4+/cP8dRQ26E4dqnvttg8MFx9phIL+6Iz4/ENHSXSC9aPkoAOX99ZJrmlHJKpNXsrl0vqyakqdZno0j0v5a7DgvzAFWe3RSzBdOCCzu7CqYvt4BwwJvTDvzXepRoHfebpVHavlMFU0wCLgZMLTDC7Lqf3a02dBYWvyy5iUQUW3ENfY8FssXHm8OA/C8uNSX6y0kNtCCu1kI+pjr/mutD/Puq7gM8v42bNZI728xGCB48R+ky3UvHWHt/Zjz/XbdVl7Zb+txi7wMMmiDhbaJiXNfOsR5ymuIbocNtuGiAmCBcgtlyZfy6brjtuhGao1tc6DCVnyoVFtokex4ziYspEUTMJvymkCKaA6R8VtNmvmu+qZYLA+K28UGRhB1uYOY3XBXkJE5xHx71dV3XXqvtli6uoee6bkAON0Kj9U0RgWceMWnBFHLnRhmOiEFsQ/cgcpqIDRB/cCjMPVYI/y/pW9d6eaDdqD60/rgWjPw85A75RrEhkbmkzdp56bsRuubG9to2i5/PaYBxRYDNQXHyffDzBdOC70XgN+Fg90dGLKJ1fOOA8eW+Z9FylK94Auw0A9fxkyZCxJDNhgKumGVoBmO+tRL6UvM9h9ok73S8tIU/jmwALAPGwO0nnH4Y618rxXZV3wQZkp++0z5TyFzJeinFKjzX4pPua2OKb5DU9r/6+RoCrK7cX3AEHIGNRKDvezNTEuBGDjztlBPgIqbJO+kIzIYAfloi81ggToCzwewVOwKOwKYiEG7wJiJe8r2ZTR1Hdb9cA6yGzF9wBLYOgXAjNkToBLh10+sDcgQcgRwC3IhN4IoLKqbKBsi1ufbfXQNc+xR4BxyBjUCAG7E5nshncJ0AN2JKvBOOgCPgCMyIgGuAM4LrVTsCjsBmI+AEuNnz471zBByBGRFwApwRXK/aEXAENhsBJ8DNnh/vnSPgCMyIgBPgjOB61Y6AI7DZCDgBbvb8eO8cAUdgRgScAGcE16t2BByBzUbACXCz58d75wg4AjMi4AQ4I7hetSPgCGw2Ak6Amz0/3jtHwBGYEQEnwBnB9aodAUdgsxFwAtzs+fHeOQKOwIwIOAHOCK5X7Qg4ApuNgBPgZs+P984RcARmRMAJcEZwvWpHwBHYbAScADd7frx3joAjMCMCToAzgutVOwKOwGYj4AS42fPjvXMEHIEZEXACnBFcr9oRcAQ2GwEnwM2eH++dI+AIDCNwNEkXlHQBSc+R9LcawLoI8OKSPjpQyS0kvdJ+P5ukgySdp+f5+NlcvY+Q9NhM53N1rLNvJ5T0CklXr5iAuL8Vrx3h0RwmPJxrZ4o6aOfh9lnFvrF8UdKNJX2tdbDRe8eUdE9JB0j6paQ9JF1X0oUkXcSeo51PSDpQ0kdGfO1s7LiOLekykm4g6aKSWDcUPkT+XltDX5X01wlwias4urUHLueydXqigjYuIeljBc+t6pETS7q+pKtK4tvFAb/Q/g8kXUfSIbUd6tMAYdWrSHqWpNNbpS+S9GhJ309Ylsm9mqRnSjqlPctz/P0XSYd49maS9pF0XPvtgZKoO322byyb2jcmiY3h54bTtyT9yQYRE8ynJN1H0mei32vnLX3+KJLOLOmpEQF/QNJDJH2usB1kgbl+hqRrWwP09V4mWKWLE2K6YofssLl9b8JFfnxJ+xmp0F1wf4qR3f8zGT25pFtKepCkbxge72/sAxhDDM+zRUibyO0jJbEAuwoExMJlcwfL50r6gs0H9YH3zSXtJemtVte3xwqDvU/dT7dN4TeS9rYN+ofR+GmbDYTyJttQvjtR+1NUg0xeWtK+HaQX18/8wil/rm10yAQ+hlV6V6uUjny4p4FYGL9uQvmlnmdPZUTBjvhxI8TvVHZ8E/sGAT5R0qNsocdDigmQzYH/qlT1QnzuZMLC45AsC6C2oKG92l4q0cq76q+Zn9r+hefDhnNlSW+QdD9J3+yp7Oy2IaN9PdnkuuXbt2y+zPG9C9YEmhakDwHzPN/b7VugmG+Q4wlsw3nXSPmA+F9gGxnkd2fbGFKZiwkwZyW0ztOY91g3KBVBCYvrQrs/1Ej9zS3kR2U5H2Cs+g+pxez6LDYWYM7MiQWXiWYSftaA0qb1jXFhary4Q3hjAry1pP0bxlvyyhQCPVVfS+enZFxdzwQ5+l+Tux9lKsJ0eqmkC5tG2KQxJGZ+35qAgJ4t6YYVbV1J0mtNk2XzgtRbN0kI92mGx8sk3V3S7zrwieVl08xeXEqQOC4NtNd3SPpxoTVTLFNOgEeEagw545dA08CUSEtMKnPutFMT4Ji+zk2AJzVtF226z9pI5yHgM6QV5RZPblyYtvQJ9wNuCDRATP9ciZUIzOXbmoaTey/9/Vim7d7BfkD7g0i6yiYT4OUlPV/SHSV9qBaE0uedAKcjwCHMnQCnd6qz4UAumJl/LBR4fNRo31cwJz8EX+tzyxHgpcyFQFv3NcuoVJPDd/puGwsa6kMrxhYgSINxQ5vYphIgvlNcFf9pft5S/ArF4J+POQE6Ac6lreaIolpYkxcgQAI/b6uoCHmHVEK2QS1B0dTQuMLCJTpNGfKbd3UbX9erJF3MtD9M6K9UjI9HUz/lkC94UwmQuX2M+UP7AkyVsHQ/7gToBLhUAmxdANeK3BT43DAVf1VR2RABxgSW84V3NUlmBMEQNFtKq7+YKD4pWdRHgAAzEv9ZWqYgQEj/smay418FA1wMpNGALwG1Lv/jEOTMEbl9uBIIqN3EAqtYUhTqZny4m2rrPkK7ToBOgLtGgOQIYmZCDl+WdCNJh01EgLGroyXAd2TTTh9s/XmCaZx/qegfj+KHRLslYk15vP2XksVYAiStjQDF7aw9UmoIShFwIihKYIe0oQdUEBWcRGoR6VtEeUnFI1uEtDqIFYIFnz1tHgnwkHnSVJwAnQB3jQDT5P3a6OeQBhgTSgsBMhdx/QQviOi2pOzEOYiMmf5ARmhP5EziVxtLgMFn2aXtXk/S64y0IEKSvksKwSD8f2xStzcXAIQYpxBBvBAsmi3jafHlHt4XJ8DVE2AqBAgGaUBE/t4u6fONibrUGwt0VzskwXIygnb6Th5MFbDpOz3BLk4yMJHRD1oCcEmUtGTx8EzudFJazxgCHOrTugkw9A2fIKdkMCeJrPaVWhyoBx8saTb/I+kekn4SVX5uM4HPYprgewonkEwMiJpDBPS374QH6TFvtMMXaLgpSRY15wS4egKM/TokkOPruJvlENKbl5ijHrKqLTEBhnaYYxJsMf04cUDicGiHDPpYaPn3OQgwLK4jSTqFCTYLhoUJIbI4EfoWTacWo13RAGNcQo4hZj9BI/yeyNdYDXAI+xjnmnSqOBVt6KBE7C/FVG4JGLkGmMzgmDzAIWHIkQrmCtE6djIKSbAklafklFvsuTzAtJ0u/0yur7k+hN9zUWDy+PDv4OCm4CciebfW31Xan/AcuZqvsbOxuVNLXXUPjYsUmJCzhnbLfHB0tKbE9U9xaugMdtyNeeXEFRtj6OMcBHgy09ogvUvawFsJMKdF4wsMa4bADwGfquIa4BHhWhcB0gvytzhFwmkSCrs0f68pOQKkLgSUM6xE2iicVX191MiqCJAmz2cXAWAmNe/iNQBJiknqnRZx/WlFHUMEGGs9LeQaJ0PTpaZFHY0l+NMIFFDSTWYqAkSzP69ZGFg1WDGkryBnXJRSQ4CxZpcjwBJ5H5xaJ8DNIUB6Eu9oaGdE8oiqlZYSgQhRNnwmlDTSuEoCTC80QBvkdqE5S3xMjHxAtKwarXOIAHHOcyXTbWwAtQSGVkweIIna+IRvKolLNVoK88z7XCQAqZAAjtvh11FlUxDgaSU9zlwb5FgSveXijFYTOM5jzGnRJfLuBLiGc8op6KWkcis7NM/7LRHAUoEYijSW9jW3KHMmMO+nGk+NppBrv+v3WPvFHOR6Km7lqSm5ccX+Nkx8tK7SkyqxY5+jdERDa8g5Hkd89rnvaN1YAgxtoEEHv2LoQysB8n641COnRcf9r006P7yfrgEeUfTXaQKnmhlhfoIU4UqtkkVaQoBprlnqZ1olAcYaD+Mr1ZiOIylsFqWJsOALPiTQUlqvUMoRIFogxMUtSjVmfesZ4i65iNNESm+DqY0Cx6deum4NGkOA55R0sOUTpi6aeLxBBrhTkT9XnxpxAtwcAjy1LU6y6ilDE99HhiUEGLfD4sDn+L6owpgAhw7S5wg5RxS8H5+brTX50D7ACj9piYYVa0S1ybnxWEvGFbdVeqYXDYYrsyhxoCKHc/p7mgSNSY4W2hVhH6MBxspCV8L2f5g5z0WstZo95EqCNS6gvttsYlOZpGjuhqw+M1xzH+Ac12HlbPy+yU/vm5ujbzkHbI1gxqZtlzBgCiKk3CVIaV2g8X2AXe3gC3qSpLsMtBPfB9gahSyZHzL6OfYVbtBuEWII9JqmcQ1FzNEocClA7miALKzaCDuQ1dwHSGAH8uEOQsxZfHEl9wGy6RClrV7MkiAOcIQ8mOvcbTSxP7SWpOJgBe4E5JdgGrfRsHlzwoYACJdCoA3j28Q98JZCv3bYRP695z5DfuembxKha06aHGHd9hEgC5IdibQEGqIwIM72dU0Mg+SuNXLM0CpwvnJ/V9ctwgg+QkiInGcRRo7QlOaArapv+B8gAxKTW0vXTc0IKDs9pi0Livy8+0u6hjXSskC72iFLnt2TRQdm5NzF7RCpi/MAkQUSWzG9AymhlbEguW5qzI3QCD5aJnUQ7Sa5lZvAMZOQAZzoHHUq0eTSuSCthYAO16GTPkRSLmNOb1zmPdqBiEplLW6L+ghOxGsidyM0l6KyOCEA+jbXjdDML5eq0g5rj5KmvMRjYa4haHyUIS+U/EAucei7VLZrDRC0emF0uzvPMJ8EQ1Ag4AQudqC0XPHFBkf9uEqoExL9rfUdzZoTLa2b2eGdavkmSCsZ5N4ruX245NsVuXZqfuesKLlFnJ6ouXWENkr7Gk5GQLTkpyEoNVd717aDdkEGfXzipKSOEg0h9+2MgD2Lk1tO6Atj5u/pjP48AAAgAElEQVQtGk+ojzQMDuKzINNvgjBODs1z+iWOgNbIQW5cuYsPcDuQdsRnJtCKwoUBnIgBAyLfrd8E6Zu7Ph/n0GmhgEmpP5BNgUASn01AU2OTw8JAhvE1o2FyUzdrh02KTxXUltOZf4+jdaRNQXq0wwaOhtuyaf6jDzkfYG1nl/48znUSRwGbUxPhAzIl5Lz0sXv/HYGdQ8AJsH/KceLiWEWzcALcuaXhA94FBJwAh2f5cuaf5Gru3Cc7d0FefIyOwFYh4AQ4PJ0h14lETyfArRJ9H4wjkE+Edoz+fiUPqQxEEL04Ao7AFiHgGmB+MvmOMScUMIO9OAKOwBYh4AS4RZPpQ3EEHIE6BJwA6/Dypx0BR2CLEHAC3KLJ9KE4Ao5AHQJOgHV4+dOOgCOwRQg4AW7RZPpQHAFHoA4BJ8A6vPxpR8AR2CIEnAC3aDJ9KI6AI1CHgBNgHV7+tCPgCGwRAk6AWzSZPhRHwBGoQ8AJsA4vf9oRcAS2CAEnwC2aTB+KI+AI1CHgBFiHlz/tCDgCW4SAE+AWTaYPxRFwBOoQcAKsw8ufdgQcgS1CwAlwiybTh+IIOAJ1CDgB1uHlTzsCjsAWIeAEuEWT6UNxBByBOgScAOvw8qcdAUdgixBwAtyiyfShOAKOQB0CToB1ePnTjoAjsEUIOAFu0WT6UBwBR6AOASfAOrz8aUfAEdgiBJwAt2gyt3woF5f0YklPl7SfpL9E4z2KpHtLurX999ktx8KHNxECToATAenVzI7AjSW9WtJ3JN1A0meiFi8o6bWSTiTpupLeN3tvvIGtQMAJcCumcScGcXJJL7CP1L9I0iMl/UDS6SQ9S9LlJD3WNMQ/7wQiPsjRCDgBjobQK1ghAseWdBPTADGJjyvpa5LeZmbxYZL+tsL+eFMLR8AJcOET6N13BByBdgScANux8zcdAUdg4Qh0ESCmxUcHxvUbSYdIeoek/SX9pBCDm0s6oPDZD0ri+e8XPn9iSa+UdOXC578oCac65lNpOZKkC0u6vaQrSDp9ZH49W9K3CyvCjHuMpDsajg+T9El79+H2W1pV3F/ev5uku0r6tf35IwVtH1PSoyW9RdJpJV1H0uUtcPAhSQfZfP6uoC4eGZKTW9h89M15Kf5ztzFUP/5GIst/kHReSY+wecf/yJ9LcaqRe3CN2x2aiq6+4wNljuMIeVzHGSUdaHIc/r2kvZJ5KJHdQtE6/DF8u7eSdD1J55P0cwtuvUTSByT9saayvmf7NMCjS7qPpMfbi0GgSTdg4bMAEY5PSbqtpEMLO8MivJM5qnkl1BteP5qkPSQ9StI9JOHTKS3UTX2PM0d5IBXeD0IIeUMcr5L019KKJUE6D5F0ZEnPNOf7CY0MWQxMzl0kvbPAB3U2I5vzWPsfs35DoJDsWSU9IyJz5uGFtuBon78/Oeo77SP4uQI+pJBcRRKk+wZJv5d0KgsoQMhvsvn5Ua4y+x15APOX2t9JT3mApF9E74cgxbUlgf/dDf/SQMXcbaSyno7hLJJeEZFGKXnHELJBP1ESGzsbdShhTlgT1Mv/US5K/Zhp31mPN5X0rZ75Y/NmfBSe3VPSlwvbo6+s+b1nnGuqhpOI5IMXcs9/v5XEPDzBfmM+7luhfPWK85AJfHZJr5F0rg6iYvGTk0VHYX5AKZ20c1vKAgNKCTAAEMgVcqgpOMUBCY0s1u4CAbYILwsQsI9nRBEvXH5j7Cx6BOqWkr6e6TDY0b/jS9pHEoQIwUJOAcOwm6b95Vk2B967rG0SbEZodbkSFhvaPYswnq9YM4Bg6UtpiQm9az6ph/l8mi3yWs2b9+duo08mWR/0nflhLtgk0PzYnEstn4AjMkjpI8ASTaxrTug776KYnNJIDZJL1yNyxxywwV6sQtOM28ytXZ7tk91SeWKjhOBYI0T64/V2CiPwq0s62DaMeLMtbeMfzw0R4JDQxTtX7cSVCPMFJJ3JCLhmUMHMg5ynIkByzF42kGAbmzh3NsGq6fPJbKLRXEnroKD6v1zSeyXdLFps7OD/myyi0rbAhoWLCZcKzUlNK8O0L9UoQ7u5+WRhPlcSQvsu08Z/Vtppe27uNvrqh1AeZJvOqIVm456DAOk7xIx2zeaIzCA/QZYC1JixpArh/uD52nVbuhGF9dAy1+CNWw1X01UldSlAmMSvs0GhwXaRfbF4tRJgrDGgHcXaS67xnDDn3h/6fWoCBJ+HFpqY9KuWPHgnaBkIcJjMLiE6taSnmineZ+K0Yncl08ox5Wm7RvMems+Y/Ohby6LILbwp2ugaA/MCFmxQNfLdNwdzaYD0nY0RjYhN8xySri/p9VFHcJ3gwgm+dUztTSTAIPcft42fpPe04LJBi76MuZywun7aKvi1BIiP7iKS7i/pGgY6WkWpzygnzK3jCO8dywgLjSMOoLSawNSHzw+/ZIvpVjqeM5hAovrjmyNAQcAIwmCCT2DObcxskn5L3Q259plPtAL8LX8ybQcHc039fQQYiAlS/ZKkp8xAgFO1kY4B8kBjxb2AlpFza+Rw5ve5CRDXDxrgPc1iwdcaAjUoLPydecZfvIkEeAxz7eCjH9oow5q8g2m515TUfPSxlADTCf6m+RNwfuNIrylzaoCYcmhs+A5+FXWqlQBDdBmfCVpSHFipGXPuWXxMt7PgBBpHV3mrja3UaZ1rM2DyY9M8000j9374vWs+Y2LCQgC7QOi0O4UJPGUbaWAqjA0ywQk/RcRxbgJE5pFTNlCCBmyiBFQoaIiY8GRuoM1OQYA5+ajV9uNMjty7ccT5EpUWyxH6XUqAcRQYFft+5mf4tKR7SfpEhdYwJwHipEVTIxUAjSaUsQRIek2Lfy8nJPwegiL0EROYIMS1IsIAe9Iw8I0Q9btNYdCjpG1cBmi3bBr4OiFBNDXM8dKSzidBFupB8wuRujF+Ifoxdxtp/aQF7Wta4PMsyFWa9tKH2yoIkCyC55iMhJQYNCZcMxAfJDgVAfYFvFrnOibAIRMYfNdGgGFy0VhIxUBdJQXmhpK+Urhi5iRAwD9ORyCilQCJKrOYMUM5boXa/cOecRLVvZrlWRVCcbj/jzrRMsCRY16Yi6kQoc1C6vhxMFHpz/dKGyl4jk2N/DBSc4gwQ4ilWk88n+Q3EsCKyY/mWxdFl5Y5RxtdMhmikfQBM5iLGMaUVRAgOYshSBDWJWuVDZyUNlwem0qANaZtIEBMX9bMf7dOTK0GGLdzRUnvtn+o0Y7mIkC0I1JSWMipT6CVAHEeY1oAOAUh4r8ubQAzD/O1NNmb+vD98TwROuoNYf8uwkC7ZRFCVrWBp5x8xFH9WqFKzceuHK0pCZCxTN1Gl0yS9kQqBhHVOFczh+U6NUAIMERSiegTwca3humLOTwme6NLE49TesK4x8x1SJeiLhQDsjnSAmexTviP7IzY11k9N1MRIJoJTtiSMhcBQhDs1A/sIKhWAmQ8lzLiQbAo+OLQQj5vOUrssAQSMF2ZjFJNOER/0bhSLborDSYm41zCa8k8xM+kCbk1AZ94PvsSVMN4cr6dvn7P3UafTMZzj4xj9fSdshjCPCxaiPQ90YNjCSmQEj4+CAECpC18lyTT499FXvk7m/bY9krW7pi5juvHlxl8lzG2wSrDx8m1aEEJq5X5w58fIkBMGRJsWfipvU8CcDDJ8BfV3ME2VG/TICxRFeHkHrg4/J/uSgQQblR5wiRolmhdQ4XdFjIrPeEQT3Z8hCne4dJE6HNa5B0tEK2UqF5pe5e2BYDApKdgSLGBvEiurk0wLZnPscmxc7fRV38s56Rk1KQIYZpx4obILD4tTE8sFFwcocRmX0taCvXQd/zCJONDgJQ4TS1eu7hp8DNDHC3tzT0PyD4nWfC/QnS4etKk/bApkQsYj7mJO/oIMD32gjpKxJeFEx8Bo9GaO9jQlvbKHKepGQj9Jxr4YFP1ScnhfGxccAwTtHmS/SPmOgGFICwl7TEZCC/1d5Xnm+ZZEjygz/Hxs5jk6CuaLAJAMiiF3Zv8LsaFFsikYy6zIPmN43dxwKdvPLSLporwI1SYRP9ni4UkbASPvnCkj6BWSUnlpAuHOE+v5Sjc3G3kjnjFbgo2DzbCrxYcpUzPxqaEw3ww18wtvteWo3Ch72zq3IYNuZLCFKwF3DLhaByyxfxDgMzJHEfhxs41MsemwxpFxvEls4lAdvikCdihZHzO/NQl621QjlsuQ6BC0kHIOOcAfYkw8E58YiLtVF9EKbcIh+rMvVsbPkeA0KIgCC4ROKr5hhAozIzSoEG6MGLTquRAeepzqz3eR7SNRYEJcSHbaTHn0ZzZGL6bA85+HzogH7AtGc9Qc3O3UXoZAtocgSo2QkqJKX9JC6ChXaM8kMQeAmil7dZiE5MscxuCH+SR9l0WUqIJrvoyBHiJo7goXuRjIvNs+HAOfkHIu+Ysfy+OS78OKxAg5gXpCizePm2I6PD5bedgZ6wlwEJe8MccAUdgKQhsAwGilRE9Ks3TCv4utJOaI19LmVPvpyPgCBQisHQCxJRD66slMggTH1jte4Ww+mOOgCOwBASWToDcbYfjt/Ti1DAnRJJIZ3ACXIKUeh8dgZkQWDoBzgSLV+sIOAK7gIAT4C7Mso/REXAEOhFwAnTBcAQcgZ1FwAlwZ6feB+4IOAJOgC4DjoAjsLMIOAHu7NT7wB0BR8AJ0GXAEXAEdhYBJ8CdnXofuCPgCDgBugw4Ao7AziLgBLizU+8DdwQcASdAlwFHwBHYWQScAHd26n3gjoAj4AToMuAIOAI7i4AT4M5OvQ/cEXAEnABdBhwBR2BnEXAC3Nmp94E7Ao6AE6DLgCPgCOwsAk6AOzv1PnBHwBFwAnQZcAQcgZ1FwAlwZ6feB+4IOAJOgC4DjoAjsLMIOAHu7NT7wB0BR8AJcHdl4JiSriHp/vZhef9E6O7Kws6O3Alw96Y+Jr49bPiX8G8k754g+IglJ8DdkwI+Cn9RSeeRdFMnwN0TAB/xPxFwAtxdaTi3pNdKOosk1wB3Vw52euROgLs7/WeTdJBpgk6AuysHOz1yJ8DdnX4nwN2dex+5IeAEuLui4AS4u3PvI3cC3HkZcALceRFwALo0wItL+mgjNF+UdGNJXyt4/8SSbiaJqOSdJf1W0vUk7SXpwpLeJ+n5kt4q6Y8F9XU9wvjOKOlukq4uiUVP3w6Q9BJJ3y+s9yKS3i3puIXPv8La/M3A84z/lZKu3PHMLey38FM6JzU4U8eJDOM9bQz7SnqbpOeZD/Bqks4l6a7WIPg8TdLPC8dLas3TJd1pYCxd432B5SD+oaCdIbkMeD1c0mM66irFa+j92xiGXWN8l6SbS/rZwDhy/f/2wLrDR3sGk9uuJkp8uOtuv2QNleBYICrlj/SZwEeXdB9Jj7eq0gUZWmDSWSws9LtLepWkP2eaP50ttDvawmTQLMwHRgswroI+8N/vyod1+JNHkUQbN5L06Ei4IN3nSPqqpNtKOrSgXkidlJF7SfqOpL+ZwDP2eHHR5lVtHLcvINjjGc6PtD5ASmwG/9PRp5MbKX5T0kMl/aSg3zxyUknPlgTJhTliDiC4yxkhHijpYTa2y0raT9Ihku4h6UeF7RxJ0vkl7S3pSvYOhArZglcgYv5OBPq+kpj7nLzEzadyST8fIOkX0UOM7VmSrl0pl1TBeiAqzvtsTD+QBPG9V9JfrY3TS3qubahdvw/Bles/G8m9DUPqYVN5lKRfW6UntN/uYn9HDnimZAPhlXW2fy1TCthkviCJHNSgaNWOo1Ak848N+QDjNIkcAZbusMeS9Fgb/Hlt8X1Q0meMiIhKMpmAs48kdi3IFYJ8dX44/3iCcUFYD5JE378UvYsQvVjSdS0KSt1BwPqagDio48PRA4H807HTNloC4zqsoM/HlvRkI803SII44wUdqkCTRSNmwcfjGWqCvtxT0jNsUfNu0KbPZ+NP02B4h0UI/jwPUf6lYBzhkXNIeqlp8W8yLAKJXto2s/tJ+kRFnfGjJXIZNLlSuUy7Et7v00hyvw8NLdf/WFNjI3lPUhlEAq6UEs0v7cu62sey+0+z7OhTPM6WcTSKzxFfGyLA2EeUI8Ba1RVNCU2BBYZGxY72zkhToJcsJDQTEnaHiKELiHNKOljSGyUhrPECPpqkJ9oiL1kgR7b+QcA/LSBAHsGsp8SEOTRhob+nMWLG/E8LxIjwxiSWE4JTStpf0hVMK4sX05AP8AKS3iLpu7aRfCvXUPI72hduAFwGbEKQKQT+QtNoPlRZX/z4nHIZ2skRXO73oeHl+p8jhtzvOWjX0X7XGho7jtw4i35fFwHSuZwQARqmIc9halxT0meLRvV3DQbNpY+4MZNeJum/jFByGmBXs30aYGEXj/AYpgkbAmYh/ULjjE1+iASzi8TlN1c0cEXzXX7ZXAGxRjpEgJh5uDMuZqZkTZt0jw2OsbDRoMHfTtJlJH3cNrVgElcM5R+P5hYwD4a5qd2YnQDzmtlUxDVVPS0y9I93NpkA6SSaVNAWbmImW27AmNnPlHSHAQLM1VHy+5QESHsXMo2VPzPWWHvkt0eYT5PNoLSEjQBznP7GQZ8hAowDFrSL26K24HskyIGrgRI0wRqfX1ebToD/9J21mI45/HLElPu9VE6mqqe0vc7nNp0Ac5PVNah48fZpgKNAs5enJsA4kooTPpi6QRP+pTm8a7SnIS17bgIEptgfSMSZMdUGs9K5KpGJsRpg2DjYbHDPEJzCjUI0HR8cATv60aJh5vqfI4bc7znZXnf7oX99UWmyND5vfk7cMGPlZRCPJRFgqQYYE+ATOnyAOQEp/X1qAqTdy5u/k5Sg61gkFnOUyCmBg6+Uds6eWzcB4rPEB/lv5g9sCaqsgwBPa1FxIsHgjxlPVBxrBH/0Dcw94wQotV6j1kXk+OfJTMB1gu+f1DPcQV+vlPvix5dCgCwgImKfLBhZ8JfdMklRKXi16pE5CJC0GFJWbmXRUnygaByMHa2kNN0hDIRoNOTZtVBLNcCHSGIjqS2k7eCKIFWFoApCTcDr1pFbo7ZOns9pMDwzVgPM9Svnvx56P9f/nIaX+z3X93W336UBpqY8JEiKGUE8MiTA+0+5gbX8vukEGKKRaD6QQon/izGRVxT8VkOm1yks3+vlDeDNQYB0g2Tw11laEMEDSAxT4PUNfQxBkK5o9xABnspyDglcENGtDYKQ2vOkKOhxAvMH3lDSpySxObXu6rkF7AQ4LCg5/HIEm/u9VEyH6omtuBYtu7QPg/cB5oCiEUgJ8mjpZNhFuxz0qQZDAjJ+sVL/VwgosINQMMMeJ+kbUUIrmiJaCcTSlXaSA3EuAozzFPGFELggobuE/NM+hzQYTtaQoB2bK3OlwYQIMCk9mLxBa53KH1gil64B9ktvDr8cweV+z62bEg1wIwgwaF8sor5gwpiE0/Au/hV8Ktj7cTm15ZKRooIWVHoigTpYhJz+wHwbKuQKUndX4nFuIoN5WZJLmKsr/Z2cP0xHCukkZPuXkn9cF9ow0XDy79CIwSTkRJ5d0mvsCBwJyiHqHCdC1248IQGd+SR4EM9Z+A2TPM4PrI0Kl8hlIEBOcHDyp/TUTMk8xXmkLRt/rv85gsn9nhvDutsP/QtzxN9TEzhWYNZiAqdHcrqOHMVHgmqOwgUAYgIkP410i/fb0ShOJ+B3OpmdjCg5W5xOPGYYuXVkoHcVtCGIpqVuyPmplq5C3dSDz2IqP0XQ3EiQrsl/7BpnOGnCWWjORL9DEv458EYIISOinPgYOWZ3Fcs55N9qorYchUPLJF+RhOv0iBoEeEkjduYXmYHcwa3Ut5nKJUf1cHGEY2qMn35A9Bzt68p/zBHE0O+MgTPTbCho1bVH4XL9p36OLHL+ncIxPBLKw/j4nTnj3ygcm8S6mQq/2vaRGVKdStsP2GLlQGxszhR8fh8wxeWCtrYg+qGjoWPm8R/v1l6GMNWhczoQO5LJEcOcxv8FsRJt41gckzsmDI4mSGQVQeH/FIgPAeI4UUvd8c6VTkLN4f7cQuNjRZiNaVJ0y8RDgggbWhn5efgY0X6fYtE2/HzsuswvheAFi7wGnxSXVDMee1FB6yUdaM+QLMcHa7XNGOvYdEznoEQTbO1/yXyX5AOuu/0wjqH1wzMbkwZTAvyYZ8ZE0sa0u4R3Q04gboGW4EfJGLf5Oiy0QPxIpLGQPkQpvaWoBLtdf+Y4dvEFmzRfFiwh4I3EbJ0XojoB9osEpi8+O0zWluBHibBtMwHG40eLRtPF3G5xd5RguavP4ErB6gHf1nzAtWLnBLhW+Hsbx7cSfJgtwY+SUe0KASLj3PhDtoETYIlk1D2D24pglxNgHW7ZyxAqq9uaxwn8cH0VKTql1161DH5XCBBs8H9xk48TYIukDL/DaR8i41xpt7iyCRrgUB7g4gCt7DABCW6t4dgPUW+ifwQ9iPpxhdQYp32uK3EazGJ9OLlB+u+OwBAC6yDA9NbdlhSabZnVrmvCp7o0YAgjgizkMRIhpaztRt5tmUgfxzIRWDUBDn0HAwR3TROBiEg2JlLJ0TDST4j6tn4DpUQKh9IQStI5StrwZxyBRSCwagJcBCjeSUfAEdgNBJwAd2OefZSOgCPQgYAToIuFI+AI7CwCToA7O/U+cEfAEXACdBlwBByBnUXACXBnp94H7gg4Ak6ALgOOgCOwswg4Ae7s1PvAHQFHwAnQZcARcAR2FgEnwJ2deh+4I+AIOAG6DDgCjsDOIuAEuLNT7wN3BBwBJ0CXAUfAEdhZBJwAd3bqfeCOgCPgBOgy4Ag4AjuLgBPgzk69D9wRcAScAF0GHAFHYGcRcALc2an3gTsCjoAToMuAI+AI7CwCToA7O/VbMfDjSeIbJ5e2j8j/bCtGtd5BwAk3tq8V8tEs/pvz64Rdo+VbOQ+WdAdJ95F0kKRZvo/tBLheYdvU1s8h6aWSLizpFUYufL1vU8rpJN1G0l6STiRpFR9zOr2kV0m6mKQ32Vf1+CD4tpUT2txfW9KnJN1M0jdXPMj4m9VgfVtJv5ijD06Ac6C6HXWiVb1c0p8k3WDmj7TXIHYsSY+VtIek80o67ooI8FpGfO+2bzfzFb9tLK0a4MklPVsSH0rfU9KHJYW6nmsbKZ9f/V0BaK4BFoDkj8yPQCBBPtr+gpHNTblA6AqL65H239wa4NEkPdG0P7SRQ0disY2vx59bRVbuLYnN6pWSrmwD3rjP3roGuI2iON2YkI+bmgDfXdIYM3iqBZL7tnQ6+ikW3akkvdhI8EPTwbtVNU29wa0EHCfAlcC86EaOIunOkt4v6asjRjLHAnm4pMeswAS+jKQjSfrAXM74Ebj6qyMQcAIcAZ6/unYEVkWAax+od2AeBJwA58HVa10NAk6Aq8F5a1vpIsCLS/poz4i/aDlCX4t+J2JDrtCdet7J+WBq26uZjOtJ+r4kzLgbSSKSR9rE+8ypj0nzx5oKJQ319xbm9A1Vgu/ZLZ/p6pII739H0nvNp0SawV8r2w+PkwpyK0nUe5GBOtI+5ZrD1CP95faSriCJ9A/m+20W5ft2roKe3+eoNyXA30u6o6S7SjqGpAMsn+3nFX2OfZW51z5oeYjIWElBHoiS3sOwDbJIntshkq4h6UWS/lBSmT1zdHvvLpIuH8k20errSHpNZX1Ui2yBIRH2+63h/Sn6UARhnwYIqCQgPt5qeb4kQthDuTgkpT7Koj+8xvMQY8lktrRXMsAgzE+1hfBDSWeU9Dhz7pPjdl9JPympLCF9CJ/xUfaT9IAEH8ZEOgDCjp/qdZL+T9IFJdEfiBR8+a8kNSDu4qUkvdAI9UBJD5P0Lfs7An8uSS+zPtWM7diSHiLpyJKeKekHksgLgwwfIQkiYaG9s9IXNle9MQGCNTJLbmBcnmc41GDMph7Pb7qJEBUmDQd5Z34PK5CfIA97W14d8oJf9aiSrm8yCa5ET0vWDE2ysSO/54lkgMjrdRvqC5s1xHdrI78QzS3pz9j3Gc8UdRRMxT8fGTKB2aleK+kskkq1iJArRQs5zS/taEt7ucGGUwIIVbwAcMgzuSR7vsGEvYYoaPcCkt4i6ZQd+ATBJHXiXpKelRAGicYQF4ILOZLXVpptD5k8xxKB0SCJ0kJ+lDiBtHTOAoahz2xkpJfE/eE3Fi6LljZvKak0D26ueul3IEA0ajSobxiuaH/0F7Imck1/SaitKTl5ZO0gV+DxsUzFbCiQ85PNAoBg4mgydSGrrJkaAiQP8o1mCZB3Fwr1cYoCGS2tj40OOT1zZFHUEODY9+n7FHXUzPHhjNtXWhZTbB7WEmBLe7nBQg7f7RFQzGO0MgraA1pczXGbof6i5bF5/LLDZUB7YfHsYwuURGNMlpKCgL7ahJs+o/Fg+o0lQPqM1sji/GxHR2LTkKhwaV7gXPXGBAjJ0Sc2lTCHMYGhqT/IkrpLMC7FEoI5k5mZQ/UGecCdAMmwkaSuFzZS5BCSLNG4aC/MCRrk65MOkLoDJuRwltZHFZi9JC6zadQQYGh+7PtT9KF0jreeAK9iJxi6fDTx0Sa0QMy8muM2fQTIbo8GhXYylKAba5A1gnYSy6pnbPjlENTQ79ZNBELGZYEmWlIwh0uenave0MehIAjaBC4OfKRoiBzpqtHyW7FM8UsxuJKk93SAjFnNGVw2zlLC4nk2Q3zz9zf/X/Apt9RHt2Kffo1chiGNfX+KPpTI8OHPbLsGOAREvFN92YIkJb6cUGffAokX3pAAndTOlhJoqHGmM2f3lPSMDu2xddHiN8Lnh1+LRRUHuYqFqePBueotIcB4IXYF73LjasUyrXesnA31E382Wi9BKwobOdruJypcKmn9Ywls7PsbSYAxSDjCP27+L0zI+AaOqUzg0vZyQhz/Hgt013tjTPa+fgwRYCAHfDW1CzR2qDMfBEEQ/tPYzRn4Fmt8gOF0BQf90VA+WQPswLNz1VtCgOH4Gj4wgjnX7DHt+w4C+V8AAAq4SURBVLo/FQHmTq7UzFOXdslxxX3N/xt+/4j5lgmy1GYZjCWwse9vJAGGSUKocLxiehCyR1MIB5/p+FQEWNre2HUaTCh8SLULv2+BxKb1kAk8VkNh7P9mmhtzkZaahRUv0hr/Xg7/ueotIUCeCfPLn8dscDVYppjEGMx1Zhlrgqg1ZE9qTSgtWQZjCWzs+xtNgAHYWPWO/WdTE2CuvdwCzP0eFghO/5tI+u/cC9HvfQR4fAuoENgYqjcWlNSXV9qNy1mu23HMF4gJT05ZrQYYm2n0Ba2UlKGuwviuZqZXrp9z1bskAiQiTbCL9JK5CDDg0UWEzCXnmEvLWAIb+/4iCLBPe5mLAKfQllIBiE1Qop8c9q/JFSsJgtBmn9M7JgdyufDd1ESh4zv7iHCyyIhIthBgHLihz0OaA+M5mRFvblHNVe+SCJC+EmAjYl/r6sjhS74fN9OkvmuS7/HpMle19zmOJbCx7zsBdviv5iDAoMX+e2Oe2JCPiBQMonOQVF/aQzCVCZrcUNJXctIe/U4uIOkSaBXx5Zxj/FYkV9Nn0jEobzU/0ufNoU6baJzks7FZlPZ3rnrpY+4oXPh9yiBXxTT949Ez2IaBgtC3IbbUSxoMG3lXCtdVJb3dCXAY1qEo8FCib2wCo3HgB/y1RRBZRJRan0tLe0OjI6JJP0krSB3BcaIymhMpILVH4ob6Gye+4oDHh4RDOi4hh6srUXpoXHHdaBTkOob76Yb6lFtgBFZIHkYbHSpB2yxN3J6rXnAgFYer0wnKkebCMcNQ4t9bNK8xWHbhh4uF0zvIAf66rtukaZNTPPsXBi+QIU6idN1RyMZDsnWtdTHWNTP2/Y3QABkEDlUWBAU/AlekU85v/85ORgY86j3BEDQZtBKepdQchWtpL7egIXcuYiTNhJuNIYm/SCJBFKFBe+IG25ajaBAoZ045ZkXpOgrHmBA+kl7JQ+TP+IAoaFKcEmGzwFQpJV/IBDINR/Di5N8UQ8x6jrVBwKUFs5w5B5+uwpHIBzbcCzh1vZwrvpClAoUUEFKDmGc2Ykq8EGt9b2i7JJgH+e+a31JMw3P0GRJE5iBsTgChXSOTnEyCzCic8imVh7CJQvBou5ArSfEkyyMjZAjUHPUMZ5XBET8yssOnB8ijLIkmj30/YDWFGV00P7WXIVBpSIPhCM7Bdr51rssQutoLAl40QEk4hiFpLkM43wSXEdRchtB1AQBCzyUMLCp8N6V+vzSdAuIOR9Zq+pTDjT6TWhEO13NWlY2O/mIWly7OtJ0p642ju3E7MdHFPlY2Kojgf3ODj05XdD06Jhoc6guXWHASKZZHiPFLFfJAfZwA4fgf2jhaYLhwg8s+2Kxq5mvoUpOSDWTs+zHeayXAAhnxRxyBjUcgTjTHbxm05o3vuHdw9GmUYgj9PsBiqPzBhSEQzgKTIlSbBL2woW5dd2MNsEZ7rwbCCbAaMn9hIQiE1JOWFKeFDHFruxkTIH5sLnSYpTgBzgKrV7pmBAjIkfxLwI5AQe66qjV315tPEAgESGSfXEd8mrMUJ8BZYPVK14hAnOJUm7Kzxm7vbNOntbPM3GhEoIr0oHBIgaO3ZCTUBj6LwXQCLIbKH9xwBJBlkstJh+FOQy6I4Hr50nzFDR/e1naPzzlwFyZRe06tkDZG/i7zR/BqqpuJOgF0Atxaudq5gZEKRFI7F4OSX8lFuF42HwFyW8k1JO+Yk0zcsM23XLjmK75papaROAHOAqtX6gg4AktAwAlwCbPkfXQEHIFZEHACnAVWr9QRcASWgIAT4BJmyfvoCDgCsyDgBDgLrF6pI+AILAEBJ8AlzJL30RFwBGZBwAlwFli9UkfAEVgCAk6AS5gl76Mj4AjMgoAT4CyweqWOgCOwBAScAJcwS95HR8ARmAUBJ8BZYPVKHQFHYAkIOAEuYZa8j46AIzALAk6As8DqlToCjsASEHACXMIseR8dAUdgFgScAGeB1St1BByBJSDgBLiEWfI+OgKOwCwIOAHOAqtX6gg4AktAwAlwCbPkfXQEHIFZEHACnAVWr9QRcASWgIAT4D9n6XiSriHpapL2WsX3CJYgIN5HR2CbEXAClE5nXxHjQ9p8Vexd9i3Z2T/Iss2C5WNzBJaAwK4TIN8ffaykPSSd1z7N5wS4BMn1PjoCEyCw6wQYIOTTfE+2b8o6AU4gWF6FI7AEBJwA/zlLD5f0GDeBlyC23kdHYBoEdp0Ajynp6ZLuVAjnLSS9svBZf8wRcAQ2HIFdJ8B4elwD3HBh9e45AlMj4AToJvDUMuX1OQKLQSBHgDeXdEDlaFrNxItL+mhPWy+Q9DpJ7+75/YuSbizpa5V9HdIAfy7pfJIeJOkqkr5v5vLLJP1xRDv+qiPgCGwIAjkCpJvkyT1L0sGJ/yv2n0FA+NEOkfS3EWMjGnsfSY+3OvaT9ABJv7C/H0nSFSRBQqeU9BFJexrxjWmX6mMT+NaWFI1/8LjJeO5leIxtbwRM/qoj4AhMgUAJAdLOvSX9eIAA0dB45g8TdOrckl4r6SySurTJE1s/rizpCUZcf5mg3UCA75X0NklHM6Jl3GETuLakD1qiNBqhF0fAEVgwAqUEiClMiSOgsQY4JQGeTdJBks5TQICPsETmKaYgEOB3JN1F0jsTbfZWkl4u6cuSbiTpsCka9TocAUdgfQg4Af4T+1wUOPZRXkLSx9Y3bd6yI+AITIGAE6AT4BRy5HU4AotEYCoCTAf/SUn40l5lpmJNwCA2gWtAJWr7adPM8CFiota06xpgDdr+rCOwBQhMRYDBB0h6yKkl3U3SXQ0fLhsgmvrnQrxafIBEh2n3npLuJ+k3ku4s6cAKEnQCLJwgf8wR2BYEpibAEAWOLxf4gaTrWIpMCW4tBBjq5U6/Z0siYHGopBtK+kpJo0kaDEGf9Dos9wEWAumPOQJLQaCUAFvSYOIk6prk6DEECO7kI+5rE1DTrmuAS5Fa76cjMBECJQR4ZEs1IS3kw1G7uTSYdRFgSFehq+TtvbkQKyfAQqD8MUdgWxDoIkDMxn0kvULSMySdwhKO7yHpW9HAOSHxXEm3lJTmAcbkWGuKXkDSW+ykRy4ROs0DjE1g0lR4/9sFkxVI/sEWvLmZpJ8k711K0ofs364k6T0F9fojjoAjsMEIdBFg0ITibnMc7WmSwokLgg7kwmFqnkPSS+0kyK+MuDjORjCCyCwBERKbSyKyECfm9t7WeO4oHEfmHi3pT0m7JDNznC0Q1tAUgAFm9wslXdICKFyP/4YocHNs04LpG4WgDjj9boPn1rvmCDgCGQS6CPC0Rio3MO0JLZATIOECgJI79EIaDMSI1lhCfmMuQwjD/Lyk10vaX9J3C2e/i/B5NdwMzUUIfRdCeEJ0Icj+mCOwiQiU+AA3sd/eJ0fAEXAERiPgBDgaQq/AEXAEloqAE+BSZ8777Qg4AqMRcAIcDaFX4Ag4AktFwAlwqTPn/XYEHIHRCDgBjobQK3AEHIGlIuAEuNSZ8347Ao7AaAScAEdD6BU4Ao7AUhFwAlzqzHm/HQFHYDQCToCjIfQKHAFHYKkIOAEudea8346AIzAaASfA0RB6BY6AI7BUBJwAlzpz3m9HwBEYjYAT4GgIvQJHwBFYKgJOgEudOe+3I+AIjEbACXA0hF6BI+AILBWB/w/1D0WnZGnJ0wAAAABJRU5ErkJggg==","resources/helicopterBody.png":"data:image/png;base64,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","resources/helicopterHead.png":"data:image/png;base64,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","resources/tank.png":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOQAAACUCAYAAACDdYVMAAAACXBIWXMAABJ0AAASdAHeZh94AAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAACF3SURBVHja7F1JjCRXmf5eRGRkVmZWZW29VdutMpbbHo+lmYMvwMCIA3CwZDhbjRCXtpBYJIQsyAJjYbpbAgmb5eSL5QMn3yzuCEZCI7FdPGZ6BrsLD+3eqmvNPSPizSHjj/rz1YvMyLWyKt4vPeUSkZGxvO/9+/8LKSUMGTI0G2SZW2DIkAGkIUOGDCANGTKANGTIkAGkIUMGkIYMGTKANGTIANKQIUNjJsfcgtSSGOI3JorEANLQFEEoGOiEBoTCANMA0tB4wSiG3C5jgJ06cAohbmlvkJSPqdvpO6NDpg9sumFphlBe7XD02tdWhqX8h+6/h57sQohbGxsbV/n7jY2Nq3w/vj0OIOMCnzrCTevKgGY7Bj03YYLLT6X4afXZz1JEVJHg2EEul/ufIAiklBJCCPi+DyEEhOjsHgSBjmsk+k6hdc13mz3225zwvV4f4bebg3BJI7KeICIucePGje9yIIQrcdd7+qy8F/x7y7J0vxUh2CR9L6VEEASwbRsA1ul7+r2UEgRSFXTqPvz/BmQG6xMCjNEh06pjjHhMmsjrNMn55LYsqwt8fB/aRu+llAQuCCFg2zaEEF3AchynC4y0zXGciDPSNvW3KqfkYKRt9LsBuGY65s5pvRGT1CumIOYcARyBTeVw9B0HIIGNQKUCkwBI4OT7cUARkGj4vh+BkINVt6/uOwI2B6Dv+6cdlJuDGHdOOyDXT/g1HBkcWPyVg4wGB6pt2xEA1d/R/hwYxMGCIIjee56HdrsNy7LgeV4X1+Mck4Cr44ye50XHVMHJwZ2UyuUyrl27Ft0b+jzOZ9CPVFF8FFAakXWGgaiCkoONgMQBlclkjgCVDwKm4ziwbRtSSvz5z3+O/vcTn/gEvvzlL+PFF19MfK5PPPFExOXolSYoge/rX/86fvazn8HzPOzv7+OHP/whfvzjH8P3fdTr9bHcs0kxljEddz2p4clwSGW1vX79+kQecpKVNk7nU7kZAcq2bWQymegzbXvvvffMqnZMC2kv0TUJh0wtII0RwdAUAZlYZLVOMRhjwWfAaGjalNSoc5ojddYN+AydNDKhc4YMGUAeL21sbJgnb2gSYuno6tZpFOnIoMOvTVW4jShraEJzT/f1ptEh+98kQ4ZmjkxgQAokKeW9KhrwpGMR83vaJjXH5OlW/bJM0kibBpCGCERBOPxwBAxcar6kUMCpHiNgv1dBTjmSDvQ5k2nXLU36lQHiERDFJRPbMeqL1ICXjh1X3iNg+9hsfhluaQCZOt1Rx8HsHnYCge5EZR1wJANtAH25DhEjIsuQK1tGlE1OqfVDniLXRwDACye/xGHJDUd5tdk2C/GlN4QCUIuBkg9HObb6vcO4pgegHQ4f6anDsznoD4zIerLFU9INhQIyHReTCtD6le1IUt5DIL74FT9P4q4egFY479w0MIRBi1wZQJ5M8kNuEzDO1KvAlBxSVNSBMgmQdZKYYItII3yfMyKscvNOcWAAcPqyPWhCV8P3WQAZDGbRlBruJhLsnwSsvY5BnLIdAjIAUAyv4bTaLDZNGcgEYsIJBmMLwDaAZkLO2IvzAaO7JcQA+6muFi+8juhhvPTSSycdgMaokyJ9sQbgQTiJHQWMo4BIDsEd+23rB0yad8QpAXSqGXzlK1+Z6o3d2NjQlkpJMgiUagVAA8h42oRi6TqB3FGGE/chgDoDozUm/UugOxCAj2GBl5RID8bPf/7zIxufeuop7Y++//3vDw0idfAKEbNAp9aooyvrPupKCiC2gFLcCkm1bHzfxyuvvAIhBF5//XU4jgPXdTE3N4dvfvObePvtt/G73/0OV65cwdmzZ/HTn/6UDuGFYuoBgEL4zMYRBZNE/4sLldPpo8P8v+QLJY3nnnsODx8+hJQSly5dQrVaRbvdRqvViopoGaPOyTbwrB+HbqEWnMpkMrAsC9lsFrZtI5/PY35+HnNzcyiVSlhcXMTKygpWV1exurqKlZWV4IUXXtgD8FEIxCKAfGgIcUbQIeWA2+MAKQbQJ1WjTmVnZ0e+++67F27fvu3cvn0bd+/exZ07d7C1tYXt7W3s7e2hWq2iXq+j1WrB8zz4vg/f97VV0mdQOjNuDw0Yj0XJV8HoOE40MpkMcrkcCoUCisUiCoUCFhcXsbi4iIWFBZRKJZRKJaysrLQBbOHQReCOoDv2AqNMyEXjOmP1s9jqYmu9VqtlNRoNNJvNiAN6nhcBj9eCPQHqxmaclGZ0yG6aOnekQZXhOBiz2SxyuRzy+XwEyFKphGKxiMXFRSwtLREg/c9//vO7ITfhYFQDtwfljHFNeXp9T5ZRO2ZfVbzVjQiIAFpBELRDMMpGo4FGo4FWqxUNAqVmks+UfaJcLr+ockMp5WPDgPHUc8i4lasXaI/jgV+9ehWLi4tYXl4m038AoAJgJxRPCZCZGIPOIO6HYbYlpQB6Ky6BsRUuMA3f95u1Ws2t1WqiVquhXq+DuCWJpSSa0iuNaYK0l/WUQHft2rU3RuGKqQFkojqY3b38juU833jjDXVSH6Dj4rBCQw4FADg9ONSx3250Z4NIdj3EGZvoWIqrtVrNe/jwYaZSqYhKpYJGo4F6vY5ms4lGo4F3330XAHDmzBns7e0hLWRC52Zo/cChv3EnfE8GHG7E0eUujtqeXI6Bkwp0x61ygFIMax1ALQiC6s7OTvb+/fuFvb09q1aroVKpRIBsNpvRQR88eJCqSWAAORtA5OLcQfh5LhwZjaiqE1dlQkAR1+pl1Oll+FGd+6pNgjJPAgWMTbq+3d1dbG5uLt2/fz+/v78v9vf3Ua1WIy7ZbrcnImL2kKQMIE8S6R6yZVnj8IfJkGvsoxOf6oXAy4Vg7KU36gw1gxh2+Gcbh1kjOstpwL7zoQ+9I5A6TESllCsCY21ra0vcvHlzdXNz88z29ra9v7+PSqWCarWKSqWCVqs19H0dNlqGGgXNApnQuQEestrAJpPJjArGGoB76PgZKyEw8kxUddHfqjqM/1HHTW0NuFVrK20nvVBqjuWwc7fYPg6A5dXV1UsffPDBha2trdzBwYF1cHCASqWCWq0WGXWazSbOnDmTyvlmANljheUNb3S9GC3Lipz7Q1ATwF10QuJsdJz+BRxaVMmA0y+ZeBgwCo24K9l8iCv5YTPwxom2BMo5AAsAlgGcBbAG4CKAlS996Uu5SqUSgZGc/41GA+12O/JFDkJxCefch1kulw0gTxKpD6xcLh8BJXWh4r5Fx3EGXdFbAO6EYMwCmA+5Yi7GgDMoJ+xnkBF93lua39nQJ0LHgdIOF5Y5ttjQtQluyGk0GnjhhRfgeV7kgwyCAMViMfGF6WJS1YCCa9euaUXTWdIhRdoLBvPQOt29oO7CnDOSqEqhcBR9849//CPJX/oA7odiajacrHMhGElfnAQYZR9DEOmKQuGU0HBRnVV24HO8cuVKFCJXqVRw5coVvPbaa5HYGgQBarXaRPXHfoDs1dFqVJ+jMer0ExcsS+t4Vhuf8ggc27aRy+Xgum5SUFTRCRafU/TFjCKmjhOMUAw1OpeHUHS+uJA5vk1KKWU4aQc+z2azGXHFdruNX/7yl9rW6UaHNBQRgY8ASA1Ss9ksstks8vk8crlcUj3SQ8fHaGmMN06MvjhOMPbijipQA43eeSS0LgSjjyGKV7399ttot9sRCAHga1/7WlccK0koBpDpEls340QTAqPrusjlcsjlclFAOA8EL5VK/f4mQMeq2mLckRtwxpnj2I9Lq5XI+TnygsrkS+QAVXMl6ZyDYUD5m9/8pguQr7/+Or797W/POnfcnNSBUy+ySik/ZlnWB3H6QjabjVwcmUwGruvCdV3k8/noNaHI6qHjc8zEiKnTCIWTOGpZVSNsEAO6XhkhFgOuh971YI+uVEEA27bRaDQQBAF+8pOfRM9iVoE5Cf3RAFJR3nWAdF03AmM+n0c2m42ASZyyUCggl8v1AwLVJOWB4jynEZhOXKrK5XzG4egcvB7nY2kAzb8PmHEo0fX85S9/weXLl7tSrQiIZExLiz6ZdkAKDkado//evXu4fPlylN0/NzeHYrEYgXNubg7z8/N47bXX+omr7XDSuhrOOC0wQqM/qnGnvco+WujO6NDppbzlgD3IgkjqAX8m446ikVIOZJEddH+jQ47ByEG+RHJrqPSNb3wjyuZfWlqK3q+treHixYv9wMi5hqsYcI4LjL1yGPn5BopuGMQYe+ga+DVR+FwiNGUyGdi2jSAIUt0+MM1+yGgiZbPZ913XXXccBzs7Oz1/9M477+D5558fFAAUOC4Q796YFhh1wFPBprOuWuiuVqCLHuLHpVjWxFXKL126FKVfUUwr5UBSvZ1eHHYUrtmPe6tGnUnpkFbKwegAcGzbFuTgX1tb6/nDAcHIgWBjfAWqJiG2qucUaERZ1QILjUFIpRo6vte+EeMffvhhl4iYRmaRZpE1Wu3Jv0h64pjJZ/83LddGEhBCI2qqoJQKACXi3SZxemgAYA+dtLK+lhkeqsiLhaWF0mjUUSeew539hUJhHJO9S0eTUlosmuU4M/2FAgqu/6ngsthiIpXf2UhW1IrIQ6dYl0AnbtcaRvScpTQpA8jxSwaUlZAJ/Yi3c7ncxXw+38swo4JOaiY4H0E4kayYxWDaoJQ9wKhyRurtqAOemqys+55vd3AYMkg1ghLpbGkTW9MostqKyOrcvn3733K5XOTS0IicDXSSiHfClX4nHAfhtha6s+R13YfjgrZnQVLgPSMtjQFHBViQ4JhCwzGr4YgVXe/evdsFzElzxVkDfNoAGU2st956K7u2tvb6I4888ofLly//Z7FYFIVCQY1J9UMgfoROIvFuCD5KuM3gaIkNK4YbWxqd7biBqJ6XuoD0KhsiFO4qNNempmtRXZ1EKBhnz4xhRGQjsk6POzrnz5+3LMsqCiEesSzLocibhYUF2reNTprUvfDzHDo5fb1Ka4xSvFhMCYyqS0N9tdDt4I8TQ3sdX8ZcH4nCPQFJUTk67nXa9cg0iqwCAFZXV61CofCwUCh8NDc3F2VsvPXWW0Anm///ALwfAnMO3UnEqnO/V2kN0UeXUyeynLBIm6RyuRXDJS0NMOMMQ7qqeIliXHmo3LjBN+uVA9IWGJDlxhwAuaeffvoPpVLp4srKCn7961/TfrdCMLoAFgGU0EkkzqE7M8PqAzKdsaOXkYS/tyYExqAHp5PKfjLGmMUrCABHS38QJ6SA+loo+ksA5wEs9bq+paUltNtttNvtKDiAz9M4zjkpPdIEBkxOPOc+QRfAHM/aIPrrX//69yAI/FBE5WKqg6Nhb9BMcBEzyeNiSOM+T0p/BPTl/oWGS8bV9VH9kbrMEf69HUoZhX7zTo3KSQK2k1AvxwCy/7Xb2WzWoqBxokcffbQihMjjsLTGIN2mRAwAe+lXvNy+PwWdsh/oLRzteAz0rpquKyHJcynzobTRN0/tW9/6VqRLJpXg4toEGkDOrjGHwtdoOAAc13WF67rIZg9b3ReLRSmEyClgHGfYG48d5cObAhhFDEcWMcabuNjVJPoy7TuHTvW5YpI59/LLL0chdLNqxJlUZ7U0+yGjEhQUqcMql+lyFgd1VSTZl0Q7LxwBphfFE2dAEn3E3X7WVr7dCUXUxZBDDjTfePjcuA07I9K64ZDj0SHBOKUIOWQUx/qpT32K9tX5F4dxbYg+IiPQ3YzGV4wlk+KQIkZ/jds3ri5sEgCT7i3GBZy4GqwDcLexGYQMIEfXm7omDG+mqgBy0hXgpOY1mOJzjzPAyCE4fly/kZG5mA6Uuhqsp8mwkRYRVeWWFgDLtu0oW/0Xv/gFvy+TqACnczNwjmUfwyIVNwC9u6OXu6SfODwwF5v1wsYGkGMW36SUXa3H++hH4wBhLwOLM4VnoiYjB5rPaixuEgkhzqIsRwHkJETKQQE9zQUgDYD0NdcbTZawotxWEAS8n8Q4xcckVlPy001af6TzIfdKHCh7iaT9Io94kSs5CmgmVc5jlvMr025lxTvvvPMC9bNngGxrJu2wq32vUDO+OFBZyGmIqGq2v6+8BgNebxLj1di42ahGnVkmJ0UA9JVXcjfIIAgkNXlhgGyju/noqBkacbmIFnsW03J3QAM4H/GZKrLPdXAxlVemE6MAkVQItV/kaQkCMCLr4cQhn58HoNVqtWSr1eKttJvopAq1FFCOYqjQluJHdyTMNK0VPLeRRwn5OBqwECch6GJ0x8YdZ710xySCA9IosvLAZx+AR4BknZbq4WgyUAZjAKUOFMeRG6k+90C5Lx67P34MOHWiapIUrZk0pgxB60ZkHQ954XUHBLZarSYzmQzq9Trtc4CjnamsGDFtHKC0p8gdeYYGL3rsa0RPifiGsaqoKqAPlB/4uniflLR1wEoLh/Q1oCSu1/I8D/V6HZVKhQwGbXRKTRyEr3VFfJ1E7qKY8nO3VAMXuuup8lcvhlP20k3lsNfF9ce0URo5ZKCAskWiaq1Ww8HBAQCcAVAJAcnD5/jkU0Pqkka4yGMEo4678UY5PKPfZ6Dlw0J8NQEddxxowTp79mxXUEDaarSmDZAUK0qvLQBOrVbzhBCo1WrY398HgH8B8CE6BawaITj5JMzisHeF3UdnkgOIudMUW20mkvL/55knVjhHOLgy6F0GZKRrIRDGVSsfFzCn3bPDiKz9iSrF+e12G/V6Hfv7+9jb2wOARwH8K4CnAFzEYdqQh0Prq06ci5uQo/rzJqFDqtXmeHQNXQ+5f1qKkUfXbkDHiQe6nkuXLkXpVpNqthOd4IBgnFYCdJo4JOeONBk9APVarQYpZdQhObwvVLZDF9upy5QINBNRYjbaBuhAyUuF2Izje+x+kYtIKuKtKq6qbem8HmDtCRLiiqRHmrqs6SC+2vutVgvVahXVahU7Ozv43Oc+R/tRIjOlYrkxI0nOpJwhMKolIG3NQsI5pKcxaOnKQqqNXUdaiCYlrg5D0wpGSBsgdQ1f2u1222+1Wmg0Gmg0GqhUKkkmtdVnxJXymMVFWVfMGegdeB4gvlDXwOlqzzzzTJeYOm1jzqyE46VZhyQnOIIggO/7USs0FiBwmklouBvnlGojV1/RL2moUoDaCj0RKCk8jsRVFZCTBuas5Fg6KQUiXbsPQDSbTek4TvTgJ+SMFjMOSuLsTiimchGUG3vUvh4B9JE/VMKj73V/8pOfBOWlWpYFy7Lg+34qu1+lmUOS4cHzPC/ijs1mk0fs9KQ333zzJIJQd36WIrKqVlddhgrv8aHzOfLopr5iuxACvu9H3HGS6VezTA7STT4A2/M8OI4DKSVarVbszs8//zwKhQIWFxexvLyMlZUVvPnmm1heXsYXvvAF3WTv5RpIZNeYMMg5sHjxY7WnR5ybgwPWUo5D3NVjuicPNAAAfPGLX4wASIniqsiqZntMgmbFmpt2QEqmw2wKIdbjHs6zzz6LYrEYiVJ85bYsCzdv3sSTTz45CVDG6WjjcKcIDQdUO2H5mv+Xyv46F4gfir4NHAbqA50qdPPoBFdYdL9JVOUAUao4nHowGkCGWGy32x/LZDIfeJ4HIQReeumlIzsdHByg3W5H+iUBk4pk/elPf9IBUsfpxICLRVz+4jgzRbh11VL0Sb6Y8DYCAQ6jeNR6tdzw46MTWLAfDg+ddgKPfvWrXy0IIUQmk4mAR1E69L7dbg8ErJMu4loGj52JTvqLlBI3btzo2uH8+fNoNBpd0TyVSgX7+/vY39/Hzs4OhdzFiYSDtAjg+/K6rWpqFA05BjCq88FiBhldVywP+j6RarVylZtLdJq2/hc6/TGaBEQencO/G+hChgTjLIHYcEi2upKuoj6gZrPZ1Y2JJo0QIiohmc1m8cc//hHPPvusbrLzyduvK7FaFpK7F3zldza6szZGAaWOS9psjggmiroag4/ULESIEa9333///f8tFAorDx48OC86FN1fEmFT4n4yHLKfLqGuzFTeg6oKEHesVqvY3t7G7u4udnd3VTDqDCdqLCj380lFzKP0J4qdbbLXJrpLjAzLJXXisNrHw9YANYjh6GoInWCLBTfoBM1m88Hi4uJdx3E87nscRW88DQ13DCATApVcI81mE61WC1RhoFaroVqtUtpWP+6jy8b3FRCqQGyEAKyx9wROCm0bh7gqNDokB6SDbktsHGfUieZq8x6xsrJSK5VKD23b9i3LAq+Pa9t2kmipI3Tt2rWuWNhBxtA3cMxlPIzI2k2bUsp19UsqfkWv5B9zXRfVahU0ofpMfDsETxNHs/DViBieKEzWyoBxIIqtBTOsjKN7s66lOXA06kbXBl0Vx1WQ2+zYVj6f9wuFQkUI4XMVwPd9bG1tnZT5sg5g03DIyXDBx+IU/VarhXa7DSllZGltNpuRcefg4AC/+tWvknAjAk8Dh5UIauGohoMSo2nsKq9Vxi3bGF+3LJWj2ThMzqbh4mj+pE4PVoMM+KIkAYhsNusvLS3tO47TpKyOIAhw586dUzOnhBC3hBC3NjY2rhpAjpkIkEEQ4OHDh5H4WqvV8Pvf/z6peJhBpzWbFYJxDx1XwF4IOBo7AB6GFsmdcJDbgIBMDnc7RmQcxbDDDTokrjoaCyznzr1q7nArrQPAchwHq6urB4VCYc+27cCyLPztb387scDr8d369evXv5tUtDUiax8DD6dGoxG9397eHnbSuwAWwgm/FYKR3BeqDukrOmIGnVZ5wGF7dlcBoxiQa4oYUBHQyeeoE08DZQ6pTVtVA09ksbUsyy+VSpV8Pn8PwEUppTsj4BpKbI0B3Pqgoq3hkBo9ctLPPARWCZ1qBGvh5z0AdwHcA3AnfKXxIOSSBwBqQRC06vW6RCeBmib5KCUqhaIrqtE6PN/T1nA9Xbt23bF5ypZVLBZbuVzugPRIotXVVczPzyOXy8F1XTiOE+mYOsDw1Ck1hYsHqCcZI+iSumGMOqPqkZPqjBsDgrmQ0y0CuBAC8u7NmzcfLCwsNPL5fN22bd/uWIwyUkrL87x8o9HI7u7ungUwf/nyZT7ZR11gqaIC52r82JZmG9C/0FcvkVpS/OqTTz6JarV6hFup0ooOOL3Sp05S9I4B5PGT9b3vfW/u05/+dPa3v/3tkm3b60KImm3bjWw2W11YWNhaXV3dXVxchGVZC1LKC0EQXMjn8wulUsm+ffu2vHjxos+4z7DhdLweqwqeuLqsuowQ/ls1uZlT8Pjjj881Go0Fz/NsDjxdCNw0WpuXy+WoMoAOxOVyeeJ5kyJtNUsSKujr474vzz33HDKZDDKZDLLZLGzbhuM4UXW1IAgoDzAS7aSUsG3bLxQKrWKxKEulkr28vOwuLi5a586dE6urq8GZM2e85eVlL5vNWuhuMjuQcKB530sM1ZW/VNsh8OCGWihub4d68z0A9wGcA/Dvn/3sZ9d3dnas/f19VCqVKACj3W6DhzSe8KLJm6ol33DIAaxl6oqsfn755Zdx/fr1yJFNgwplOY6DfD4P27bhui5yuVz0PQ3LsromWejnFEIIGwAcx4Ft21az2cy0221YloVsNotCoYBWq+U7jtOYn5+vu65rheIvB8+wcpquT4dOZ0z6P9y/SkD1Q8PWxwCc8X3fooWJF7rqZWA7ibSxsXH12rVrbxgOORgYEyvjFAxAYGQgguu6EUBd14Xrul2xr7QvAZI4JL1S1Eomk8HCwgIWFhawvLyMc+fO4fz583J9fb36zDPPPLhw4UIQGojy0Bd1HoRDqoHwPFdSV8NVZxgCAx6F+lXRcdlshwaqeqgz/xOAM5/5zGfs7e1tVKtV1Go11Ot1tNtteJ6HIAiiMctzNWGmSV8u6Zx2gA1oqBnKMqYm0NLEcRynKw6Wg5eie0gU49nxtO29996L+0sPwHar1boPYBlH68IOyiF1ZStV/ZEnGcsYo45QLL5c9CUXjhNyxsfDc7e57siD+AcBIOl3qp4Xd4yNjY1YfZDrkoOCsp8RSQhxq1wu34jjlKeWQ2pAuD6p/+Jhcyq3BIBsNosHDx7g/PnzuHv3LgBgbW2tSxymPMCPPvooCTerAHgv1M3OAlhCJ/E3x/TIcfSyVI02KnBVww8HoR9yxzoOI40ehtz8CRz6YvHxj38cBwcHODg4iMqo7O7unuS5NzSnTAMgxwpEul8bGxvH1ThUhoaRP4QgIEAuhHokia2DVBTQpYMFGk6rWmBFzG+JG7ZCcXUPHT+qH3LGcxg9ZWyWdcV+1tj0AZJbTJOC7IRQEFoo/yOc1GfRaQ60EHLJLOOSSGh00YmvQQ9RVlfuUU0no0yVasgdm+F5ruEwyug0z72hAJlKK+spWIQIcBV0onXqOOxjaWt0OjEg4Hk4Ha8AoAJZoLtcB3FHnxlzGuE5rQFYxWHonyEDyFMBRoHD6J4tHPax5BZWXlFAx/2giJ6qYYdGG/HtyjkApQJGL1wkfHSsv9wKbMgA8nRJQ6Gu+CiAv6PjTnDRnSolQ06kdkDWldnQiaA60HFLKxSuGOBo24EiDkMDzTxj4mq5XL4R+3DTpEOeomslS+u7AP47BN8yM+4Uw+9cHKZR9St2HDBxVS0poobC0e85d3RC8OU0onM6V069HtnTF2lWrpPLJQsAng5B92EoIlJKFImNWRx251JLNeo4I2/WGsf5ePUAJ+SCHPzCPB4jsqaRrJAb/jM6US8P0fFLUk/HBg7dDy7jkiJGNNUBjzggicK8LR8XkQ0IY+wVg2aapAGQm5hgUMAMcMpcCMgzGkCpmRk6q6saUaMLn1Nb7cGA0HDIYVaoaeY3HjcwjQXzlIg9hgwZMoA0ZMiQAaQhQwaQhgwZMoA0ZMgA0pAhQzG0aQAZkilVYmhG5uFjBpCGDBmR1dBxUT6fR6FQwPz8PEqlEkqlEl599dWxHX9hYQHz8/OYn59HoVCIxiuvvIIf/OAH5gGMQKe+6hzP+Dht16prcKqWxaf6PmpJfXqvK7dIbeF6if1qUWP+me/3ne98B6+++mp0HrStXC7jRz/6UVesZ6/Yz7jq5cMWpJrW81F1yH4iaxrSr3ASADlquXsVaJEIFLZ669W7glqI9wMfL+2vq5+q/q5XYeNZeRa6auW8btKYK5X3L5Y8bMfZkzAA3AqH7FxqNwGQ5XJZjoPU45TLZbVt+cSHEEIKIaRlWdGwbbtrOI4TjUwmIzOZjHQcJ3YbP5ZlWdF227aPbOODzoWPad+PGRy3+s3ZtIisROtJamceI23GfL8+KsflYmWfuqE9uVe/+WKs2aNxyNRULh+iLOTmcZynppPzrQnci1jgsG3rg4LVUP/5lGqRtYcI23eUy+Wrabkv6rUq98KImlMSV1Mhshoam7h/0mk9gRS0PinOmIg7wjTbMZQC2tjYuAoA169f/26cijDJxScJEA0gDRkaI+D7tZkzgDRk6ASSCZ0zZMgA0pAhQwaQhgwZQBoyZMgA0pAhA0hDhgwZQBoyZABpyJChcdP/DwDkUgAHe9p1ywAAAABJRU5ErkJggg==","resources/tankHead.png":"data:image/png;base64,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"};

/***/ })
/******/ ]);