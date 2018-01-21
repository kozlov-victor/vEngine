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
/******/ 	return __webpack_require__(__webpack_require__.s = 50);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = __webpack_require__(19);
var editData_1 = __webpack_require__(11);
var project_1 = __webpack_require__(49);
var fileSystem_1 = __webpack_require__(47);
var resource_1 = __webpack_require__(35);
var resourceHelper_1 = __webpack_require__(48);
var i18n_1 = __webpack_require__(9);
var httpClient_1 = __webpack_require__(18);
var BaseComponent = /** @class */ (function () {
    function BaseComponent() {
        this.form = { valid: function () { return true; } };
        this.editData = editData_1.editData;
        this.restProject = project_1.default;
        this.restFileSystem = fileSystem_1.default;
        this.resourceHelper = resourceHelper_1.default;
        this.restResource = resource_1.default;
        this.i18n = i18n_1.default;
        this.http = httpClient_1.default;
        this.form = { valid: function () { return true; } };
        this.utils = utils_1.default;
    }
    return BaseComponent;
}());
exports.default = BaseComponent;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var commonObject_1 = __webpack_require__(38);
var tween_1 = __webpack_require__(39);
var eventEmitter_1 = __webpack_require__(71);
var decorators_1 = __webpack_require__(40);
var arcadeRigidBody_1 = __webpack_require__(72);
var rect_1 = __webpack_require__(6);
var point2d_1 = __webpack_require__(2);
var BaseModel = /** @class */ (function (_super) {
    __extends(BaseModel, _super);
    function BaseModel(game) {
        var _this = _super.call(this) || this;
        _this.id = null;
        _this.name = null;
        _this.width = 0;
        _this.height = 0;
        _this.pos = new point2d_1.default(0, 0);
        _this.scale = new point2d_1.default(1, 1);
        _this.angle = 0;
        _this.alpha = 1;
        _this.layerId = null;
        _this.fixedToCamera = false;
        _this.rigid = false;
        _this._tweens = [];
        _this._rect = new rect_1.default(0, 0);
        if (true && !game)
            throw ("can not create model '" + _this.type + "': game instance not passed to model constructor");
        _this.game = game;
        _this._emitter = new eventEmitter_1.default();
        return _this;
    }
    BaseModel.prototype.revalidate = function () {
        this.rigidBody = this.rigid ? new arcadeRigidBody_1.default(this) : null;
    };
    BaseModel.prototype.setIndividualBehaviour = function (Clazz) { };
    BaseModel.prototype.setCommonBehaviour = function () { };
    BaseModel.prototype.onShow = function () { };
    BaseModel.prototype.getRect = function () {
        this._rect.set(this.pos.x, this.pos.y, this.width, this.height);
        return this._rect;
    };
    /**
     * {target:obj,from:a,to:b,progress:fn,complete:fn,ease:str,time:t}}
     * @param desc
     */
    BaseModel.prototype.tween = function (desc) {
        var t = new tween_1.default(desc);
        this._tweens.push(t);
    };
    BaseModel.prototype.update = function (time, delta) {
        var _this = this;
        this._tweens.forEach(function (t, index) {
            t.update(time);
            if (t.isCompleted())
                _this._tweens.splice(index, 1);
        });
    };
    BaseModel.prototype.clone = function (opts) {
        var Clazz = this.constructor;
        var obj = new Clazz(this.game);
        obj._cloner = this;
        return obj.fromJSON(this.toJSON(opts), true);
    };
    BaseModel.prototype.on = function (eventName, callBack) {
        this._emitter.on(eventName, callBack);
        return this;
    };
    BaseModel.prototype.trigger = function (eventName, data) {
        this._emitter.trigger(eventName, data);
    };
    BaseModel.prototype.updateCloner = function (opts) {
        if (false)
            return;
        var cloner = this._cloner;
        if (!cloner)
            return;
        cloner.fromJSON(this.toJSON(opts));
        cloner.updateCloner(opts);
        delete this._cloner;
    };
    BaseModel = __decorate([
        decorators_1.Transient({
            game: true,
            rigidBody: true
        })
    ], BaseModel);
    return BaseModel;
}(commonObject_1.default));
exports.default = BaseModel;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var objectPool_1 = __webpack_require__(20);
var Point2d = /** @class */ (function () {
    function Point2d(x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        this.x = 0;
        this.y = 0;
        this.x = x;
        this.y = y;
    }
    Point2d.fromPool = function () {
        return Point2d.pool.getNextObject();
    };
    Point2d.prototype.setXY = function (x, y) {
        this.x = x;
        this.y = y;
        return this;
    };
    Point2d.prototype.setX = function (x) {
        this.x = x;
        return this;
    };
    Point2d.prototype.setY = function (y) {
        this.y = y;
        return this;
    };
    Point2d.prototype.set = function (another) {
        this.setXY(another.x, another.y);
        return this;
    };
    Point2d.prototype.add = function (another) {
        this.addXY(another.x, another.y);
        return this;
    };
    Point2d.prototype.substract = function (another) {
        this.addXY(-another.x, -another.y);
        return this;
    };
    Point2d.prototype.multiply = function (n) {
        this.x *= n;
        this.y *= n;
        return this;
    };
    Point2d.prototype.addXY = function (x, y) {
        this.x += x;
        this.y += y;
        return this;
    };
    Point2d.prototype.addX = function (x) {
        this.x += x;
        return this;
    };
    Point2d.prototype.addY = function (y) {
        this.y += y;
        return this;
    };
    Point2d.prototype.negative = function () {
        this.x = -this.x;
        this.y = -this.y;
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
        this.set(json);
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
    Point2d.pool = new objectPool_1.default(Point2d, 4);
    return Point2d;
}());
exports.default = Point2d;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.alertEx = function (message) {
    RF.getComponentById('alertDialog').open(message);
};
exports.confirmEx = function (message, callback) {
    RF.getComponentById('confirmDialog').open(message, callback);
};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var mat4 = __webpack_require__(10);
var point2d_1 = __webpack_require__(2);
exports.isPointInRect = function (point, rect, angle) {
    // if (angle) {
    //     let vec2 = new Vec2(point.x - rect.x - rect.width/2,point.y - rect.y - rect.height/2);
    //     vec2.setAngle(vec2.getAngle() - angle);
    //     point = {x:vec2.getX() + point.x,y:vec2.getY() + point.y};
    //
    // }
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
exports.random = function (min, max) {
    if (min > max) {
        var tmp = min;
        min = max;
        max = tmp;
    }
    var res = Math.random() * (max - min) + min;
    if (res > max)
        res = max;
    else if (res < min)
        res = min;
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
    return new point2d_1.default(res[0], res[1]);
};
// simple linear tweening - no easing, no acceleration
exports.linear = function (t, b, c, d) { return c * t / d + b; };
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
    if (t < 1)
        return c / 2 * t * t + b;
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
    if (t < 1)
        return c / 2 * t * t * t + b;
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
    if (t < 1)
        return c / 2 * t * t * t * t + b;
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
    if (t < 1)
        return c / 2 * t * t * t * t * t + b;
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
    if (t < 1)
        return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
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
    if (t < 1)
        return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
    t -= 2;
    return c / 2 * (Math.sqrt(1 - t * t) + 1) + b;
};
exports.easeInElastic = function (t, b, c, d) {
    var s = 1.70158;
    var p = 0;
    var a = c;
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
    var s = 1.70158;
    var p = 0;
    var a = c;
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
    var s = 1.70158;
    var p = 0;
    var a = c;
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

/*global DEBUG:true*/
Object.defineProperty(exports, "__esModule", { value: true });
var shaderProgramUtils_1 = __webpack_require__(7);
var ShaderProgram = /** @class */ (function () {
    function ShaderProgram(gl, vertexSource, fragmentSource) {
        this._attrLocationCache = {};
        var vShader = shaderProgramUtils_1.compileShader(gl, vertexSource, gl.VERTEX_SHADER);
        var fShader = shaderProgramUtils_1.compileShader(gl, fragmentSource, gl.FRAGMENT_SHADER);
        this.program = shaderProgramUtils_1.createProgram(gl, vShader, fShader);
        gl.deleteShader(vShader);
        gl.deleteShader(fShader);
        this.uniforms = shaderProgramUtils_1.extractUniforms(gl, this.program);
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
        if (true && !uniform)
            throw "no uniform with name " + name + " found!";
        if (true) {
            if (ShaderProgram.currentProgram !== this) {
                console.error(this);
                throw "can not set uniform: target program is inactive";
            }
        }
        uniform.setter(this.gl, uniform.location, value);
        // structure in shader:
        // struct SomeStruct {
        //      bool active;
        //      vec2 someVec2;
        // }
        // uniform SomeStruct u_someThing;
        // js:
        // gl.getUniformLocation(program,'u_someThing.active')
        // gl.getUniformLocation(program,'u_someThing.someVec2')
    };
    ShaderProgram.prototype.bindBuffer = function (buffer, attrLocationName) {
        if (true) {
            if (!attrLocationName)
                throw "can not found attribute location: attrLocationName not defined";
        }
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, buffer.getGlBuffer());
        var attrLocation = this._attrLocationCache[attrLocationName] ||
            this.gl.getAttribLocation(this.program, attrLocationName);
        if (true) {
            if (attrLocation < 0) {
                console.log(this);
                throw "can not found attribute location for  " + attrLocationName;
            }
        }
        this.gl.enableVertexAttribArray(attrLocation);
        this.gl.vertexAttribPointer(attrLocation, buffer.getItemSize(), buffer.getItemType(), // type of data
        false, // if the content is normalized [0..1] vectors
        0, // number of bytes to skip in between elements
        0 // offsets to the first element
        );
        this._attrLocationCache[attrLocationName] = attrLocation;
    };
    ShaderProgram.prototype.destroy = function () {
        this.gl.deleteProgram(this.program);
    };
    ShaderProgram.currentProgram = null;
    return ShaderProgram;
}());
exports.default = ShaderProgram;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var point2d_1 = __webpack_require__(2);
var objectPool_1 = __webpack_require__(20);
var Rect = /** @class */ (function () {
    function Rect(x, y, width, height) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (width === void 0) { width = 0; }
        if (height === void 0) { height = 0; }
        this.set(x, y, width, height);
    }
    Rect.prototype.onSet = function () {
        this.right = this.x + this.width;
        this.bottom = this.y + this.height;
    };
    Rect.prototype.set = function (x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.onSet();
        return this;
    };
    Rect.prototype.addXY = function (x, y) {
        this.x += x;
        this.y += y;
        this.onSet();
        return this;
    };
    Rect.prototype.addPoint = function (another) {
        this.addXY(another.x, another.y);
        return this;
    };
    Rect.prototype.getPoint = function () {
        if (this.p === undefined)
            this.p = new point2d_1.default();
        this.p.setXY(this.x, this.y);
        return this.p;
    };
    Rect.prototype.clone = function () {
        return new Rect(this.x, this.y, this.width, this.height);
    };
    Rect.prototype.toJSON = function () {
        return { x: this.x, y: this.y, width: this.width, height: this.height };
    };
    Rect.prototype.fromJSON = function (x, y, width, height) {
        this.set(x, y, width, height);
    };
    Rect.fromPool = function () {
        return Rect.rectPool.getNextObject();
    };
    Rect.rectPool = new objectPool_1.default(Rect);
    return Rect;
}());
exports.default = Rect;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.compileShader = function (gl, shaderSource, shaderType) {
    if (true) {
        if (!shaderSource)
            throw "can not compile shader: shader source not specified for type " + shaderType;
    }
    // Create the shader object
    var shader = gl.createShader(shaderType);
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
        }
        else {
            throw lastError;
        }
    }
    return shader;
};
exports.createProgram = function (gl, vertexShader, fragmentShader) {
    var program = gl.createProgram();
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
            var status_1 = gl.getProgramParameter(program, gl.VALIDATE_STATUS);
            console.error('VALIDATE_STATUS', status_1);
            throw "Error in program linking " + lastError;
        }
        else {
            throw lastError;
        }
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
    var uniforms = {};
    var totalUniforms = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);
    for (var i = 0; i < totalUniforms; i++) {
        var uniformData = gl.getActiveUniform(program, i);
        var name_1 = uniformData.name.replace(/\[.*?]/, "");
        var type = mapType(gl, uniformData.type);
        uniforms[name_1] = {
            type: type,
            size: uniformData.size,
            name: name_1,
            location: gl.getUniformLocation(program, name_1),
            setter: exports.getUniformSetter(uniformData.size, type)
        };
    }
    return uniforms;
};
var TypeNumber = {
    check: function (val) {
        if (isNaN(val))
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
var TypeArray = function (ElType, size) {
    return {
        check: function (val) {
            if (!val.splice) {
                console.error('Can not set uniform value', val);
                throw "can not set uniform with value [" + val + "]: expected argument of type Array";
            }
            if (size !== undefined && val.length !== size)
                throw "can not set uniform with value [" + val + "]: expected array with size " + size + ", but " + val.length + " found";
            for (var i = 0; i < val.length; i++) {
                try {
                    ElType.check(val[i]);
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
                gl.uniformMatrix2fv(location, false, value); // location, transpose (Must be false), value
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
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var isEqual = function (a, b) {
    if (a === undefined)
        return false;
    if (a.splice)
        return false; // skip array checking for now
    return a === b;
};
var AbstractDrawer = /** @class */ (function () {
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
    AbstractDrawer.prototype.draw = function (texture, uniforms) {
        var _this = this;
        if (texture !== null)
            texture.bind();
        this.bind();
        Object.keys(uniforms).forEach(function (name) { return _this.setUniform(name, uniforms[name]); });
        this.drawElements();
    };
    AbstractDrawer.currentInstance = null;
    AbstractDrawer.instances = [];
    return AbstractDrawer;
}());
exports.default = AbstractDrawer;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var I18n = /** @class */ (function () {
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
            gravityConstantTitle: 'acceleration in pixels per second'
        }
    };
    return I18n;
}());
exports.default = I18n;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// todo convert to plain good oop style???
// https://evanw.github.io/lightgl.js/docs/matrix.html
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
    // Note: This matrix flips the Y axis so 0 is at the top.
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


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var gameObjectProto_1 = __webpack_require__(12);
var spriteSheet_1 = __webpack_require__(15);
var frameAnimation_1 = __webpack_require__(21);
var scene_1 = __webpack_require__(22);
var layer_1 = __webpack_require__(24);
var font_1 = __webpack_require__(25);
var sound_1 = __webpack_require__(26);
var particleSystem_1 = __webpack_require__(27);
var game_1 = __webpack_require__(77);
var gameObject_1 = __webpack_require__(17);
var EditData = /** @class */ (function () {
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
        var g = new game_1.default();
        g.fromJSON(gameProps || { width: 0, height: 0 });
        this.game = g;
        this.editTileMapModeOn = false;
        this.commonBehaviourList = [];
        this.currGameObjectInEdit = new gameObjectProto_1.default(g);
        this.currSpriteSheetInEdit = new spriteSheet_1.default(g);
        this.currFrameAnimationInEdit = new frameAnimation_1.default(g);
        this.currFrameAnimationInEdit._gameObject = new gameObject_1.default(g);
        this.currSceneInEdit = new scene_1.default(g);
        this.currSceneGameObjectInEdit = {
            pos: {},
            scale: {}
        };
        this.currLayerInEdit = new layer_1.default(g);
        this.currFontInEdit = new font_1.default(g);
        this.currSoundInEdit = new sound_1.default(g);
        this.currParticleSystemInEdit = new particleSystem_1.default(g);
        this.currProjectInEdit = {};
        this.currTileIndexInEdit = null;
        this.commonBehaviourProto = [];
        this.debugFrameUrl = '';
        this.scriptEditorUrl = '';
        this.tileMapPosY = this.tileMapPosX = 0;
        try {
            this.buildOpts = JSON.parse(localStorage.buildOpts);
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


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var baseModel_1 = __webpack_require__(1);
var rect_1 = __webpack_require__(6);
var GameObjectProto = /** @class */ (function (_super) {
    __extends(GameObjectProto, _super);
    function GameObjectProto(game) {
        var _this = _super.call(this, game) || this;
        _this.type = 'GameObjectProto';
        _this.spriteSheet = null;
        _this._behaviour = null;
        _this.commonBehaviour = [];
        _this.currFrameIndex = 0;
        _this._sprPosX = 0;
        _this._sprPosY = 0;
        _this.frameAnimations = [];
        _this.startFrameAnimationName = null;
        _this._timeCreated = null;
        _this.tileOffset = { x: 0, y: 0 };
        _this.tileRepeat = false;
        _this.groupName = '';
        _this._individualBehaviour = null;
        _this.filters = [];
        _this._frameRect = new rect_1.default();
        return _this;
    }
    GameObjectProto.find = function (name) {
        //return game.getCurrScene()._allGameObjects.find({name:name});
    };
    GameObjectProto.findAll = function (name) {
        //return game.getCurrScene()._allGameObjects.findAll({name: name});
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
            _this.frameAnimations[i] = _this.frameAnimations[i].clone(); // todo need clone?
            _this.frameAnimations[i]._gameObject = _this;
        });
    };
    GameObjectProto.prototype.playFrameAnimation = function (animationName, opts) {
        var fr = this.frameAnimations.find(function (it) { return it.name === animationName; });
        fr._gameObject = this;
        this._currFrameAnimation = fr;
        fr.play(opts);
    };
    GameObjectProto.prototype.setFrameIndex = function (index) {
        this.currFrameIndex = index;
        this._sprPosX = this.spriteSheet.getFramePosX(this.currFrameIndex);
        this._sprPosY = this.spriteSheet.getFramePosY(this.currFrameIndex);
    };
    GameObjectProto.prototype.getFrameRect = function () {
        this._frameRect.set(this._sprPosX, this._sprPosY, this.width, this.height);
        return this._frameRect;
    };
    GameObjectProto.prototype.update = function (time, delta) {
        _super.prototype.update.call(this, time, delta);
        this._currFrameAnimation && this._currFrameAnimation.update(time);
        //if (_gameObject.angleVel) _gameObject.angle += _gameObject.angleVel * delta / 1000;
        if (this._individualBehaviour)
            this._individualBehaviour.onUpdate(time, delta);
        for (var i = 0, max = this.commonBehaviour.length; i < max; i++) {
            this.commonBehaviour[i].onUpdate(time, delta);
        }
        if (this.rigidBody !== null)
            this.rigidBody.update(time, delta);
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
    GameObjectProto.prototype.kill = function () {
        this._layer.kill(this);
    };
    return GameObjectProto;
}(baseModel_1.default));
exports.default = GameObjectProto;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var vertexBuffer_1 = __webpack_require__(81);
var indexBuffer_1 = __webpack_require__(82);
var BufferInfo = /** @class */ (function () {
    function BufferInfo(gl, description) {
        this.posVertexBuffer = null;
        this.posIndexBuffer = null;
        this.texVertexBuffer = null;
        this.drawMethod = null;
        this.numOfElementsToDraw = 0;
        this.gl = gl;
        if (this.drawMethod === undefined)
            throw "can not create BufferInfo: drawMethod not defined";
        this.drawMethod = description.drawMethod;
        if (true && !description.posVertexInfo)
            throw "can not create BufferInfo: posVertexInfo is mandatory";
        this.posVertexBuffer = new vertexBuffer_1.default(gl);
        this.posVertexBuffer.setData(description.posVertexInfo.array, description.posVertexInfo.type, description.posVertexInfo.size);
        this.posVertexBuffer.setAttrName(description.posVertexInfo.attrName);
        if (description.posIndexInfo) {
            this.posIndexBuffer = new indexBuffer_1.default(gl);
            this.posIndexBuffer.setData(description.posIndexInfo.array);
        }
        else
            this.numOfElementsToDraw = this._getNumOfElementsToDraw(this.drawMethod);
        if (description.texVertexInfo) {
            this.texVertexBuffer = new vertexBuffer_1.default(gl);
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
exports.default = BufferInfo;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var shaderProgramUtils_1 = __webpack_require__(7);
var shaderGenerator_1 = __webpack_require__(42);
//position and texture
var TexShaderGenerator = /** @class */ (function (_super) {
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
}(shaderGenerator_1.default));
exports.default = TexShaderGenerator;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var baseModel_1 = __webpack_require__(1);
var rect_1 = __webpack_require__(6);
var SpriteSheet = /** @class */ (function (_super) {
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
        _this.resourcePath = '';
        _this.frameRect = new rect_1.default();
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
        fr.set(this.getFramePosX(index), this.getFramePosY(index), this._frameWidth, this._frameHeight);
        return fr;
    };
    return SpriteSheet;
}(baseModel_1.default));
exports.default = SpriteSheet;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var plane_1 = __webpack_require__(29);
var shaderProgram_1 = __webpack_require__(5);
var abstractDrawer_1 = __webpack_require__(8);
var bufferInfo_1 = __webpack_require__(13);
var texShaderGenerator_1 = __webpack_require__(14);
var SpriteRectDrawer = /** @class */ (function (_super) {
    __extends(SpriteRectDrawer, _super);
    function SpriteRectDrawer(gl, program) {
        var _this = _super.call(this, gl) || this;
        var gen = new texShaderGenerator_1.default();
        _this.plane = new plane_1.default();
        _this.program = program || new shaderProgram_1.default(gl, gen.getVertexSource(), gen.getFragmentSource());
        _this.bufferInfo = new bufferInfo_1.default(gl, {
            posVertexInfo: { array: _this.plane.vertexArr, type: gl.FLOAT, size: 2, attrName: 'a_position' },
            posIndexInfo: { array: _this.plane.indexArr },
            texVertexInfo: { array: _this.plane.texCoordArr, type: gl.FLOAT, size: 2, attrName: 'a_texCoord' },
            drawMethod: _this.gl.TRIANGLE_STRIP
        });
        return _this;
    }
    return SpriteRectDrawer;
}(abstractDrawer_1.default));
exports.default = SpriteRectDrawer;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var gameObjectProto_1 = __webpack_require__(12);
var commonBehaviours = __webpack_require__(98);
var noop = function () { };
var GameObject = /** @class */ (function (_super) {
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
                return; // to avoid corrupt frameIndex val
            if (ownProps[key].splice && ownProps[key].length === 0)
                return;
            _this[key] = ownProps[key];
        });
        _super.prototype.revalidate.call(this);
        // if (this.id===71) {
        //     let filter1 = new BlackWhiteFilter(this.game.renderer['gl']); // todo
        //     let filter2 = new ColorizeFilter(this.game.renderer['gl']);
        //     this.filters.push(filter1);
        //     this.filters.push(filter2);
        // }
    };
    GameObject.prototype.setIndividualBehaviour = function (Clazz) {
        var instance = new Clazz(this.game);
        instance.game = this.game;
        instance.gameObject = this;
        if (!instance.onCreate)
            instance.onCreate = noop;
        if (!instance.onUpdate)
            instance.onUpdate = noop;
        if (!instance.onDestroy)
            instance.onDestroy = noop;
        this._individualBehaviour = instance;
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
}(gameObjectProto_1.default));
exports.default = GameObject;
;


/***/ }),
/* 18 */
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
exports.default = { get: get, post: post, postMultiPart: postMultiPart };


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var userDefinedFns_1 = __webpack_require__(3);
var mathEx = __webpack_require__(4);
var editData_1 = __webpack_require__(11);
var resource_1 = __webpack_require__(35);
var fileSystem_1 = __webpack_require__(47);
var i18n_1 = __webpack_require__(9);
var gameObjectProto_1 = __webpack_require__(12);
var Utils = /** @class */ (function () {
    function Utils() {
    }
    Utils.getGameObjectCss = function (gameObj) {
        if (!gameObj)
            gameObj = {};
        gameObj.scale = gameObj.scale || {};
        gameObj.spriteSheet = gameObj.spriteSheet || {};
        return {
            width: gameObj.width + 'px',
            height: gameObj.height + 'px',
            backgroundImage: gameObj.spriteSheet &&
                gameObj.spriteSheet.resourcePath &&
                "url(" + editData_1.editData.projectName + "/" + gameObj.spriteSheet.resourcePath + ")",
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
        if (!editData_1.editData.currSceneInEdit.tileMap.spriteSheet.resourcePath)
            return null;
        if (opts.strict && editData_1.editData.currTileIndexInEdit == null)
            return;
        return "url(" + editData_1.editData.projectName + "/" + editData_1.editData.currSceneInEdit.tileMap.spriteSheet.resourcePath + ")";
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
        // convert base64/URLEncoded data component to raw binary data held in a string
        var byteString;
        if (dataURI.split(',')[0].indexOf('base64') >= 0)
            byteString = atob(dataURI.split(',')[1]);
        else
            byteString = window['unescape'](dataURI.split(',')[1]);
        // separate out the mime component
        var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
        // write the bytes of the string to a typed array
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
            var GObjClass = gameObjectProto_1.default;
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
            fileSystem_1.default.createFile(path, code);
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
    Utils.deleteModel = function (model, callback) {
        return new Promise(function (resolve) {
            userDefinedFns_1.confirmEx(i18n_1.default.getAll().confirmQuestion(model), function () {
                resource_1.default.remove(model, callback);
                editData_1.editData.game.repository.removeObject(model);
                resolve();
            });
        });
    };
    Utils.eachGameObject = function (callback) {
        editData_1.editData.game.repository.getArray('GameObjectProto').forEach(function (go) {
            callback(go);
        });
        editData_1.editData.game.repository.getArray('Scene').forEach(function (scene) {
            scene.layers.forEach(function (layer) {
                layer.gameObjects.forEach(function (go) {
                    callback(go);
                });
            });
        });
    };
    Utils.openEditor = function (path) {
        var _this = this;
        editData_1.editData.scriptEditorUrl = path;
        fileSystem_1.default.readFile(path, function (file) {
            _this._waitForFrameAndDo(file, path);
        });
    };
    Utils.assign = function (model, property, value) {
        model && (model[property] = value);
    };
    Utils.capitalise = function (s) {
        return s[0].toUpperCase() + s.substr(1);
    };
    Utils.deepEqual = function (x, y, _checkCache) {
        if (_checkCache === void 0) { _checkCache = []; }
        //if (isNaN(x) && isNaN(y)) return true;
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
exports.default = Utils;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ObjectPool = /** @class */ (function () {
    /**
     * 16 - nice magic value for default pool size
     * @param Class
     * @param {number} numberOfInstances
     */
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
exports.default = ObjectPool;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var baseModel_1 = __webpack_require__(1);
var FrameAnimation = /** @class */ (function (_super) {
    __extends(FrameAnimation, _super);
    function FrameAnimation(game) {
        var _this = _super.call(this, game) || this;
        _this.type = 'FrameAnimation';
        _this._currFrame = 0;
        _this.frames = [];
        _this.duration = 1000;
        _this._gameObject = null;
        _this._startTime = null;
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
            this.stop();
        }
        var lastFrIndex = this._gameObject.currFrameIndex;
        if (lastFrIndex != this.frames[this._currFrame]) {
            this._gameObject.setFrameIndex(this.frames[this._currFrame]);
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
    return FrameAnimation;
}(baseModel_1.default));
exports.default = FrameAnimation;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var pointLight_1 = __webpack_require__(74);
var baseModel_1 = __webpack_require__(1);
var loadingQueue_1 = __webpack_require__(75);
var tileMap_1 = __webpack_require__(23);
var ambientLight_1 = __webpack_require__(76);
var Scene = /** @class */ (function (_super) {
    __extends(Scene, _super);
    function Scene(game) {
        var _this = _super.call(this, game) || this;
        _this.type = 'Scene';
        _this.layers = [];
        _this.useBG = false;
        _this.colorBG = { r: 255, g: 255, b: 255 };
        _this.filters = [];
        _this._tweenMovies = [];
        _this._individualBehaviour = null;
        _this.tileMap = new tileMap_1.default(game);
        _this.pointLight = new pointLight_1.default(game);
        _this.ambientLight = new ambientLight_1.default(game);
        return _this;
    }
    Scene.prototype.revalidate = function () {
        _super.prototype.revalidate.call(this);
        if (false) {
            this.tileMap._tilesInScreenX = ~~(this.game.width / this.tileMap.spriteSheet._frameWidth);
            this.tileMap._tilesInScreenY = ~~(this.game.height / this.tileMap.spriteSheet._frameHeight);
        }
        //this.filters.push(new SimpleBlurFilter(this.game.renderer['gl']));
    };
    Scene.prototype.addTweenMovie = function (tm) {
        this._tweenMovies.push(tm);
    };
    Scene.prototype.getAllGameObjects = function () {
        var res = [];
        this.layers.forEach(function (l) {
            res = res.concat(res, l.gameObjects);
        });
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
    Scene.prototype.preload = function (cb) {
        var _this = this;
        var resources = this.getAllSpriteSheets().
            concat(this.game.repository.getArray('Font'));
        var q = new loadingQueue_1.default();
        q.onResolved = function () {
            cb && cb();
        };
        resources.forEach(function (res) {
            q.addTask(function () {
                _this.game.renderer.loadTextureInfo(res.resourcePath, function () { return q.resolveTask(res.id); });
            }, res.id);
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
    Scene.prototype.setIndividualBehaviour = function (Clazz) {
        var instance = new Clazz(this.game);
        instance.game = this.game;
        instance.scene = this;
        this._individualBehaviour = instance;
    };
    Scene.prototype.update = function (currTime, deltaTime) {
        var _this = this;
        if (true) {
            if (this.game.renderer.debugTextField)
                this.game.renderer.debugTextField.setText('');
        }
        var renderer = this.game.renderer;
        renderer.beginFrameBuffer();
        if (this.useBG)
            renderer.clearColor(this.colorBG);
        else
            renderer.clear();
        var layers = this.layers;
        var i = this.layers.length;
        var l = i - 1;
        this.game.camera.update(currTime, deltaTime);
        if (this._individualBehaviour)
            this._individualBehaviour.onUpdate();
        while (i--) {
            layers[i - l].update(currTime, deltaTime);
        }
        this.game.repository.getArray('ParticleSystem').forEach(function (ps) {
            ps.update(currTime, deltaTime);
        });
        this._tweens.forEach(function (t, index) {
            t.update(currTime);
            if (t.isCompleted())
                _this._tweens.splice(index, 1);
        });
        // this._tweenMovies.forEach(function(tweenMovie){
        //     if (tweenMovie.completed) {
        //         this._tweenMovies.remove(tweenMovie);
        //     }
        //     tweenMovie._update(currTime);
        // });
        // this.__updateIndividualBehaviour__(currTime);
        this.tileMap.update();
        if (true) {
            this.game.renderer.restore();
            if (this.game.renderer.debugTextField)
                this.game.renderer.debugTextField.update();
            this.game.renderer.restore();
        }
        renderer.flipFrameBuffer(this.filters);
    };
    return Scene;
}(baseModel_1.default));
exports.default = Scene;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var baseModel_1 = __webpack_require__(1);
var point2d_1 = __webpack_require__(2);
var TileMap = /** @class */ (function (_super) {
    __extends(TileMap, _super);
    function TileMap(game) {
        var _this = _super.call(this, game) || this;
        _this.type = "TileMap";
        _this.spriteSheet = null;
        _this.data = [];
        return _this;
    }
    TileMap.prototype.getTileAt = function (x, y) {
        var _this = this;
        if (!this.spriteSheet)
            return;
        var tilePosX = ~~(x / this.spriteSheet._frameWidth);
        var tilePosY = ~~(y / this.spriteSheet._frameHeight);
        if (!this.data[tilePosY])
            return;
        var value = this.data[tilePosY][tilePosX];
        if (value == null)
            return;
        return {
            getRect: function () {
                var x = tilePosX * _this.spriteSheet._frameWidth + 1, y = tilePosY * _this.spriteSheet._frameHeight + 1, width = _this.spriteSheet._frameWidth - 2, height = _this.spriteSheet._frameHeight - 2;
                return {
                    x: x, y: y, width: width, height: height,
                    right: x + width,
                    bottom: y + height
                };
            },
            tileIndex: this.spriteSheet.numOfFramesH * tilePosY + tilePosX + 1,
            value: value
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
                        result.push(tileInfo);
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
        //if (result.length) result = [result[0]];
        //if (result.length) console.log('collided with',result.length);
        return result;
    };
    TileMap.prototype.update = function () {
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
        for (var y = tilePosY; y < h; y++) {
            for (var x = tilePosX; x < w; x++) {
                var index = this.data[y] && this.data[y][x];
                if (index === null || index === undefined)
                    continue;
                renderer.drawImage(spriteSheet.resourcePath, spriteSheet.getFrameRect(index), new point2d_1.default(x * spriteSheet._frameWidth, y * spriteSheet._frameHeight));
            }
        }
    };
    return TileMap;
}(baseModel_1.default));
exports.default = TileMap;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var baseModel_1 = __webpack_require__(1);
var Layer = /** @class */ (function (_super) {
    __extends(Layer, _super);
    function Layer(game) {
        var _this = _super.call(this, game) || this;
        _this.type = 'Layer';
        _this.gameObjects = [];
        return _this;
    }
    Layer.prototype.addGameObject = function (go) {
        go._layer = this;
        this.gameObjects.push(go);
    };
    Layer.prototype.getAllSpriteSheets = function () {
        var dataSet = [];
        this.gameObjects.forEach(function (obj) {
            obj.spriteSheet && !dataSet.find(function (it) { return obj.id === it.id; }) && dataSet.push(obj.spriteSheet);
        });
        return dataSet;
    };
    Layer.prototype.onShow = function () {
        this.gameObjects.forEach(function (g) {
            g.onShow();
        });
    };
    Layer.prototype.kill = function (gObj) {
        this.gameObjects.remove(function (it) { return it.id === gObj.id; }); //todo
    };
    Layer.prototype.update = function (currTime, deltaTime) {
        var all = this.gameObjects;
        var i = all.length;
        var l = i - 1;
        while (i--) {
            var obj = all[l - i];
            obj && obj.update(currTime, deltaTime);
        }
    };
    return Layer;
}(baseModel_1.default));
exports.default = Layer;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var baseModel_1 = __webpack_require__(1);
var rect_1 = __webpack_require__(6);
var FontContext = /** @class */ (function () {
    function FontContext() {
        this.width = 0;
        this.height = 0;
        this.symbols = [];
    }
    return FontContext;
}());
var Font = /** @class */ (function (_super) {
    __extends(Font, _super);
    function Font(game) {
        var _this = _super.call(this, game) || this;
        _this.type = 'Font';
        _this.resourcePath = null;
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
            _this.fontContext.symbols[key] = new rect_1.default(s[key].x, s[key].y, s[key].width, s[key].height);
        });
    };
    return Font;
}(baseModel_1.default));
exports.default = Font;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var baseModel_1 = __webpack_require__(1);
var Sound = /** @class */ (function (_super) {
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
}(baseModel_1.default));
exports.default = Sound;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var baseModel_1 = __webpack_require__(1);
var mathEx = __webpack_require__(4);
var r = function (obj) {
    return mathEx.random(obj.from, obj.to);
};
var ParticleSystem = /** @class */ (function (_super) {
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
        return _this;
    }
    ParticleSystem.prototype.revalidate = function () {
        if (this.particleAngle.to < this.particleAngle.from)
            this.particleAngle.to += 2 * Math.PI;
    };
    ParticleSystem.find = function (name) {
        //return bundle.particleSystemList.find({name:name});
    };
    ParticleSystem.findAll = function (name) {
        //return bundle.particleSystemList.findAll({name:name});
    };
    ParticleSystem.prototype.emit = function (x, y) {
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
    return ParticleSystem;
}(baseModel_1.default));
exports.default = ParticleSystem;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var BaseAbstractBehaviour = /** @class */ (function () {
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
exports.default = BaseAbstractBehaviour;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var abstractPrimitive_1 = __webpack_require__(30);
var Plane = /** @class */ (function (_super) {
    __extends(Plane, _super);
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
}(abstractPrimitive_1.default));
exports.default = Plane;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var AbstractPrimitive = /** @class */ (function () {
    function AbstractPrimitive() {
        this.vertexArr = null;
        this.normalArr = null;
        this.texCoordArr = null;
        this.indexArr = null;
    }
    return AbstractPrimitive;
}());
exports.default = AbstractPrimitive;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var baseModel_1 = __webpack_require__(1);
var TextField = /** @class */ (function (_super) {
    __extends(TextField, _super);
    function TextField(game) {
        var _this = _super.call(this, game) || this;
        _this.type = 'TextField';
        _this._chars = null;
        _this.text = '';
        _this.font = null;
        return _this;
    }
    TextField.prototype.revalidate = function () {
        if (true && !this.name) {
            console.error(this);
            throw "property 'name' not set at object of type " + this.type;
        }
        if (this.font === null)
            this.font = this.game.repository.getArray('Font')[0];
        if (true && !this.font)
            throw "at least one Font must be created";
        this.setFont(this.font);
    };
    TextField.prototype.setText = function (text) {
        text += '';
        this._chars = [];
        this.text = text;
        var rows = [{ width: 0 }];
        var currRowIndex = 0;
        this.height = this.font.fontContext.symbols[' '].height;
        for (var i = 0, max = text.length; i < max; i++) {
            this._chars.push(text[i]);
            var currSymbolInFont = this.font.fontContext.symbols[text[i]] || this.font.fontContext.symbols[' '];
            if (text[i] === '\n') {
                currRowIndex++;
                this.height += currSymbolInFont.height;
                rows[currRowIndex] = { width: 0 };
            }
            else {
                rows[currRowIndex].width += currSymbolInFont.width;
            }
        }
        this.width = Math.max.apply(Math, rows.map(function (o) { return o.width; }));
    };
    TextField.prototype.getText = function () { return this.text; };
    TextField.prototype.setFont = function (font) {
        this.font = font;
        this.setText(this.text);
    };
    TextField.prototype.update = function (time, delta) {
        _super.prototype.update.call(this, time, delta);
        this.render();
    };
    TextField.prototype.render = function () {
        var _this = this;
        var posX = 0;
        var posY = 0;
        this._chars.forEach(function (ch) {
            var charInCtx = _this.font.fontContext.symbols[ch] || _this.font.fontContext.symbols['?'];
            if (ch === '\n') {
                posX = 0;
                posY += charInCtx.height;
                return;
            }
            _this.game.renderer.drawImage(_this.font.resourcePath, charInCtx, _this.pos.clone().addXY(posX, posY));
            posX += charInCtx.width;
        });
    };
    return TextField;
}(baseModel_1.default));
exports.default = TextField;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var SCALE_STRATEGY;
(function (SCALE_STRATEGY) {
    SCALE_STRATEGY[SCALE_STRATEGY["NO_SCALE"] = 0] = "NO_SCALE";
    SCALE_STRATEGY[SCALE_STRATEGY["FIT"] = 1] = "FIT";
})(SCALE_STRATEGY = exports.SCALE_STRATEGY || (exports.SCALE_STRATEGY = {}));


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var shaderProgramUtils_1 = __webpack_require__(7);
var shaderGenerator_1 = __webpack_require__(42);
//position and color
var ColorShaderGenerator = /** @class */ (function (_super) {
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
}(shaderGenerator_1.default));
exports.default = ColorShaderGenerator;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var frameAnimation_1 = __webpack_require__(21);
exports.FrameAnimation = frameAnimation_1.default;
var spriteSheet_1 = __webpack_require__(15);
exports.SpriteSheet = spriteSheet_1.default;
var gameObjectProto_1 = __webpack_require__(12);
exports.GameObjectProto = gameObjectProto_1.default;
var gameObject_1 = __webpack_require__(17);
exports.GameObject = gameObject_1.default;
var commonBehaviour_1 = __webpack_require__(46);
exports.CommonBehaviour = commonBehaviour_1.default;
var particleSystem_1 = __webpack_require__(27);
exports.ParticleSystem = particleSystem_1.default;
var scene_1 = __webpack_require__(22);
exports.Scene = scene_1.default;
var sound_1 = __webpack_require__(26);
exports.Sound = sound_1.default;
var font_1 = __webpack_require__(25);
exports.Font = font_1.default;
var layer_1 = __webpack_require__(24);
exports.Layer = layer_1.default;
var textField_1 = __webpack_require__(31);
exports.TextField = textField_1.default;
var tileMap_1 = __webpack_require__(23);
exports.TileMap = tileMap_1.default;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var httpClient_1 = __webpack_require__(18);
var editData_1 = __webpack_require__(11);
var allModels = __webpack_require__(34);
var utils_1 = __webpack_require__(19);
var Resource = /** @class */ (function () {
    function Resource() {
    }
    Resource.getAll = function (projectName) {
        return httpClient_1.default.post('/resource/getAll', { projectName: projectName });
    };
    Resource.save = function (model, callback, opts) {
        //let allModels = require('engine/model/all');
        if (!allModels[model.type])
            throw "Unregistered type " + model.type + ", export this type in 'engine/model/all'!";
        var Class = allModels[model.type];
        var modelSample = new Class(editData_1.editData.game);
        if (model.toJSON)
            model = model.toJSON(opts);
        Object.keys(model).forEach(function (key) {
            if (['name', 'type', 'id']['includes'](key))
                return;
            if (utils_1.default.deepEqual(model[key], modelSample[key]))
                delete model[key];
        });
        return httpClient_1.default.post('/resource/save', { projectName: editData_1.editData.projectName, model: model }, callback);
    };
    Resource.saveGameProps = function (model, callback) {
        return httpClient_1.default.post('/resource/saveGameProps', { projectName: editData_1.editData.projectName, model: model }, callback);
    };
    Resource.remove = function (model, callback) {
        return httpClient_1.default.post('/resource/remove', { projectName: editData_1.editData.projectName, model: {
                id: model.id,
                type: model.type
            } }, callback);
    };
    Resource.saveTile = function (model, callback) {
        return httpClient_1.default.post('/resource/saveTile', {
            projectName: editData_1.editData.projectName,
            model: model
        }, callback);
    };
    return Resource;
}());
exports.default = Resource;


/***/ }),
/* 36 */
/***/ (function(module, exports) {

Array.prototype['remove'] = function (callback) {
    var i = this.length;
    while (i--) {
        if (callback(this[i], i)) {
            this.splice(i, 1);
        }
    }
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
        var length = list.length >>> 0;
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
/* 37 */
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
/* 38 */
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
var CommonObject = /** @class */ (function () {
    function CommonObject() {
    }
    CommonObject.prototype.fromJSON = function (params, forceNew) {
        var _this = this;
        if (params === void 0) { params = {}; }
        Object.keys(params).forEach(function (key) {
            if (key === 'type')
                return;
            if (!(key in _this)) {
                console.error(_this);
                throw "::fromJSON(): class " + _this.constructor["name"] + " has no property " + key;
            }
            if (params[key].id && params[key].type)
                _this[key] = _this.game.repository.getObject(params[key].id, params[key].type, forceNew);
            else if (params[key].forEach) {
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
            else
                _this[key] = params[key];
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
            else if (this_1[key]['toJSON']) {
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
    return CommonObject;
}());
exports.default = CommonObject;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var mathEx = __webpack_require__(4);
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
var Tween = /** @class */ (function () {
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
        this.startedTime = null;
        this.currTime = null;
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
exports.default = Tween;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Transient = function (params) {
    return function (target) {
        target.transient = params;
    };
};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var AbstractLight = /** @class */ (function () {
    function AbstractLight(game) {
        this.color = [1, 1, 1, 1];
        this.intensity = 1.0;
        this.game = game;
    }
    return AbstractLight;
}());
exports.default = AbstractLight;


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ShaderGenerator = /** @class */ (function () {
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
        return (
        // lowp, mediump, highp
        ("\n            precision mediump float;\n            \n            " + this.prependedFragCodeBlocks.map(function (v) { return "" + v; }).join('\n') + "\n            \n            " + this.fragmentUniforms.map(function (u) { return "uniform " + u.type + " " + u.name + ";"; }).join('\n') + "\n            " + this.varyings.map(function (u) { return "varying " + u.type + " " + u.name + ";"; }).join('\n') + "\n            " + this.appendedFragCodeBlocks.map(function (v) { return "" + v; }).join('\n') + "\n            \n            " + this.fragmentMainFn + "\n            \n            ").replace(/\t/g, ''));
    };
    ShaderGenerator.prototype.debug = function () {
        console.log(this.getVertexSource());
        console.log(this.getFragmentSource());
    };
    return ShaderGenerator;
}());
exports.default = ShaderGenerator;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var texture_1 = __webpack_require__(44);
var FrameBuffer = /** @class */ (function () {
    function FrameBuffer(gl, width, height) {
        if (true && !gl)
            throw "can not create FrameBuffer, gl context not passed to constructor, expected: FrameBuffer(gl)";
        this.gl = gl;
        this.width = width;
        this.height = height;
        this.texture = new texture_1.default(gl);
        this.texture.setImage(null, width, height);
        this._init(gl, width, height);
    }
    FrameBuffer.prototype._init = function (gl, width, height) {
        // Init Render Buffer
        this.glRenderBuffer = gl.createRenderbuffer();
        if (true && !this.glRenderBuffer)
            throw "can not allocate memory for glRenderBuffer";
        gl.bindRenderbuffer(gl.RENDERBUFFER, this.glRenderBuffer);
        gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_COMPONENT16, width, height);
        // Init Frame Buffer
        this.glFrameBuffer = gl.createFramebuffer();
        if (true && !this.glRenderBuffer)
            throw "can not allocate memory for glFrameBuffer";
        gl.bindFramebuffer(gl.FRAMEBUFFER, this.glFrameBuffer);
        gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, this.texture.getGlTexture(), 0);
        gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.RENDERBUFFER, this.glRenderBuffer);
        // Clean up
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
exports.default = FrameBuffer;


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var frameBuffer_1 = __webpack_require__(43);
var size_1 = __webpack_require__(91);
var isPowerOf2 = function (value) {
    return (value & (value - 1)) === 0;
};
// array of two frameBuffer for filters to apply
var TextureFilterBuffer = /** @class */ (function () {
    function TextureFilterBuffer(parent) {
        this.gl = null;
        this.buffers = null; // lazy initialized
        this.parent = parent;
    }
    TextureFilterBuffer.prototype.instantiate = function (gl) {
        this.gl = gl;
        this.buffers = [];
        var buffSize = 2;
        for (var i = 0; i < buffSize; i++) {
            this.buffers.push(new frameBuffer_1.default(gl, this.parent.size.width, this.parent.size.height));
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
var Texture = /** @class */ (function () {
    function Texture(gl) {
        this.tex = null;
        this.size = new size_1.default(0, 0);
        this.isPowerOfTwo = false;
        this._texFilterBuff = null;
        if (true && !gl)
            throw "can not create Texture, gl context not passed to constructor, expected: Texture(gl)";
        this.gl = gl;
        this.tex = gl.createTexture();
        if (true && !this.tex)
            throw "can not allocate memory for texture";
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
        if (true) {
            if (!(img || width || height))
                throw "texture.setImage: if image is null, width and height must be specified: tex.setImage(null,w,h)";
        }
        var gl = this.gl;
        if (img)
            this.size.setWH(img.width, img.height);
        else
            this.size.setWH(width, height);
        this.bind();
        gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, true);
        if (img) {
            gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img);
        }
        else {
            gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, width, height, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
        }
        this.isPowerOfTwo = img && isPowerOf2(img.width) && isPowerOf2(img.height);
        // Check if the image is a power of 2 in both dimensions.
        if (this.isPowerOfTwo) {
            gl.generateMipmap(gl.TEXTURE_2D);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT);
        }
        else {
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR); // NEAREST,LINEAR
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
        filter.doFilter(this, this._texFilterBuff.getDestBuffer());
        for (var i = 1; i < len; i++) {
            this._texFilterBuff.flip();
            filters[i].doFilter(this._texFilterBuff.getSourceBuffer().texture, this._texFilterBuff.getDestBuffer());
        }
        this._texFilterBuff.flip();
        if (frameBuffer !== null)
            frameBuffer.bind();
        return this._texFilterBuff.getSourceBuffer().texture;
    };
    Texture.prototype.bind = function (i) {
        if (i === void 0) { i = 0; }
        // to define max texture units supported gl.getParameter(gl.MAX_TEXTURE_IMAGE_UNITS);
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
        Texture.currInstances[i] = null;
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
    Texture.currInstances = {};
    return Texture;
}());
exports.default = Texture;


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var baseAbstractBehaviour_1 = __webpack_require__(28);
var Moveable = /** @class */ (function (_super) {
    __extends(Moveable, _super);
    function Moveable(game) {
        var _this = _super.call(this, game) || this;
        _this.gameObject = null;
        return _this;
    }
    Moveable.prototype.manage = function (gameObject, parameters, dirs) {
        var _this = this;
        this.gameObject = gameObject;
        this.parameters = parameters;
        this.animations = {};
        dirs.forEach(function (dir) {
            var keyWalk = 'walk' + dir + 'Animation', keyIdle = 'idle' + dir + 'Animation';
            _this.animations[keyWalk] = _this.gameObject.frameAnimations.find(function (it) { return it.name === parameters[keyWalk]; });
            //if (!this.animations[keyWalk]) throw `can not find animation ${parameters[keyWalk]} at gameObject ${this.gameObject.name}`;
            parameters[keyIdle] && (_this.animations[keyIdle] = _this.gameObject.frameAnimations.find(function (it) { return it.name === parameters[keyIdle]; }));
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
}(baseAbstractBehaviour_1.default));
exports.default = Moveable;


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var baseModel_1 = __webpack_require__(1);
var CommonBehaviour = /** @class */ (function (_super) {
    __extends(CommonBehaviour, _super);
    function CommonBehaviour(game) {
        var _this = _super.call(this, game) || this;
        _this.type = 'CommonBehaviour';
        _this.parameters = [];
        _this.description = null;
        return _this;
    }
    return CommonBehaviour;
}(baseModel_1.default));
exports.default = CommonBehaviour;


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var httpClient_1 = __webpack_require__(18);
var editData_1 = __webpack_require__(11);
var FileSystem = /** @class */ (function () {
    function FileSystem() {
    }
    FileSystem.createFile = function (path, content, callback) {
        return httpClient_1.default.post('/fileSystem/createFile', {
            path: path,
            content: content,
            projectName: editData_1.editData.projectName
        }, callback);
    };
    FileSystem.uploadFile = function (file, params, callback) {
        params = params || {};
        params.projectName = editData_1.editData.projectName;
        return httpClient_1.default.postMultiPart('/fileSystem/uploadFile', file, params, callback);
    };
    FileSystem.removeFile = function (path, callback) {
        return httpClient_1.default.post('/fileSystem/removeFile', {
            path: path,
            projectName: editData_1.editData.projectName
        }, callback);
    };
    FileSystem.readFile = function (path, callback) {
        return httpClient_1.default.post('/fileSystem/readFile', {
            path: path,
            projectName: editData_1.editData.projectName
        }, callback);
    };
    FileSystem.renameFolder = function (oldName, newName, callback) {
        return httpClient_1.default.post('/fileSystem/renameFolder', { oldName: oldName, newName: newName }, callback);
    };
    FileSystem.deleteFolder = function (name, callback) {
        return httpClient_1.default.post('/fileSystem/deleteFolder', { name: name }, callback);
    };
    return FileSystem;
}());
exports.default = FileSystem;


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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
};
Object.defineProperty(exports, "__esModule", { value: true });
var editData_1 = __webpack_require__(11);
var resource_1 = __webpack_require__(35);
var project_1 = __webpack_require__(49);
var commonBehaviour_1 = __webpack_require__(46);
var textField_1 = __webpack_require__(31);
var cnt = 0;
var ResourceHelper = /** @class */ (function () {
    function ResourceHelper() {
    }
    ResourceHelper.loadProject = function (projectName) {
        return __awaiter(this, void 0, void 0, function () {
            var exist, allData, scenes;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, project_1.default.exist(projectName)];
                    case 1:
                        exist = _a.sent();
                        if (!!exist) return [3 /*break*/, 2];
                        delete sessionStorage.projectName;
                        RF.Router.navigateTo('explorer');
                        return [3 /*break*/, 4];
                    case 2:
                        document.title = projectName;
                        sessionStorage.projectName = projectName;
                        editData_1.editData.reset();
                        return [4 /*yield*/, resource_1.default.getAll(projectName)];
                    case 3:
                        allData = _a.sent();
                        editData_1.editData.reset(allData.gameProps);
                        editData_1.editData.projectName = projectName;
                        editData_1.editData.commonBehaviourProtos = allData.commonBehaviourProtos.map(function (it) {
                            return new commonBehaviour_1.default(editData_1.editData.game).fromJSON(it);
                        });
                        editData_1.editData.game.repository.setDescriptions(allData.repository);
                        editData_1.editData.ui = [
                            (function () {
                                var t = new textField_1.default(editData_1.editData.game);
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
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return ResourceHelper;
}());
exports.default = ResourceHelper;


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var httpClient_1 = __webpack_require__(18);
var Project = /** @class */ (function () {
    function Project() {
    }
    Project.getAll = function (callback) {
        return httpClient_1.default.get('/project/getAll', {}, callback);
    };
    Project.create = function (projectName, callback) {
        return httpClient_1.default.post('/project/create', { projectName: projectName }, callback);
    };
    Project.exist = function (projectName, callback) {
        return httpClient_1.default.post('/project/exist', { projectName: projectName }, callback);
    };
    return Project;
}());
exports.default = Project;


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(51);


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(36);
__webpack_require__(52);
__webpack_require__(37);
__webpack_require__(53);
var modal_1 = __webpack_require__(54);
var collapsible_1 = __webpack_require__(57);
var alertDialog_1 = __webpack_require__(60);
var confirmDialog_1 = __webpack_require__(62);
var inputFile_1 = __webpack_require__(65);
var colorPicker_1 = __webpack_require__(68);
var colorPickerDialog_1 = __webpack_require__(70);
var anglePicker_1 = __webpack_require__(110);
var draggableDirective_1 = __webpack_require__(112);
__webpack_require__(3);
var resourceHelper_1 = __webpack_require__(48);
var explorer_1 = __webpack_require__(114);
var editor_1 = __webpack_require__(117);
var projectDialog_1 = __webpack_require__(120);
var gameProps_1 = __webpack_require__(122);
var particleSystems_1 = __webpack_require__(124);
var sounds_1 = __webpack_require__(126);
var fonts_1 = __webpack_require__(128);
var spriteSheets_1 = __webpack_require__(130);
var gameObjects_1 = __webpack_require__(133);
var scenes_1 = __webpack_require__(135);
var userInterface_1 = __webpack_require__(138);
var topPanel_1 = __webpack_require__(140);
var popupBlocked_1 = __webpack_require__(142);
var scriptEditor_1 = __webpack_require__(143);
var sceneCentralPanel_1 = __webpack_require__(146);
var sceneCursor_1 = __webpack_require__(149);
var sceneRightPanel_1 = __webpack_require__(151);
var gameObjectRightPanel_1 = __webpack_require__(154);
var gameObjectRow_1 = __webpack_require__(156);
var dialogs_1 = __webpack_require__(158);
var particleSystemDialog_1 = __webpack_require__(160);
var soundDialog_1 = __webpack_require__(162);
var fontDialog_1 = __webpack_require__(164);
var spriteSheetDialog_1 = __webpack_require__(167);
var gameObjectDialog_1 = __webpack_require__(169);
var sceneDialog_1 = __webpack_require__(171);
var layerDialog_1 = __webpack_require__(173);
var particleSystemPreviewDialog_1 = __webpack_require__(175);
var frameAnimationDialog_1 = __webpack_require__(177);
var commonBehaviourDialog_1 = __webpack_require__(179);
var buildDialog_1 = __webpack_require__(181);
__webpack_require__(183);
RF.registerDirectives([
    draggableDirective_1.default
]);
RF.registerComponents([
    modal_1.default, collapsible_1.default, alertDialog_1.default,
    confirmDialog_1.default, inputFile_1.default, colorPicker_1.default,
    anglePicker_1.default, colorPickerDialog_1.default, explorer_1.default,
    projectDialog_1.default, editor_1.default, gameProps_1.default,
    particleSystems_1.default, sounds_1.default, fonts_1.default,
    spriteSheets_1.default, gameObjects_1.default, scenes_1.default,
    userInterface_1.default, topPanel_1.default, popupBlocked_1.default, scriptEditor_1.default,
    sceneCentralPanel_1.default, sceneRightPanel_1.default, gameObjectRightPanel_1.default,
    dialogs_1.default, particleSystemDialog_1.default, gameObjectRow_1.default,
    soundDialog_1.default, fontDialog_1.default, spriteSheetDialog_1.default,
    gameObjectDialog_1.default, sceneDialog_1.default, layerDialog_1.default,
    buildDialog_1.default, sceneCursor_1.default,
    particleSystemPreviewDialog_1.default, frameAnimationDialog_1.default, commonBehaviourDialog_1.default
]);
RF.Router.setup({
    explorer: explorer_1.default,
    editor: editor_1.default
});
RF.applyBindings('body');
if (sessionStorage.projectName) {
    resourceHelper_1.default.loadProject(sessionStorage.projectName);
}
else
    RF.Router.navigateTo('explorer');
console.log("built at: " + new Date(+1516557326853));


/***/ }),
/* 52 */
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
/* 53 */
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
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(55);
var AppModal = /** @class */ (function () {
    function AppModal() {
        this.opened = false;
    }
    AppModal.prototype.close = function () {
        this.opened = false;
        //setTimeout(RF.digest,1); //todo
    };
    AppModal.prototype.open = function () {
        this.opened = true;
    };
    AppModal = __decorate([
        RF.decorateComponent({
            name: 'app-modal',
            template: __webpack_require__(56)
        })
    ], AppModal);
    return AppModal;
}());
exports.default = AppModal;


/***/ }),
/* 55 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports = "<div class=\"dialogWrapper\" data-if=\"opened\"><div class=\"fullscreen shadow\"></div><div class=\"dialog\"><div class=\"dialogContent\"><div class=\"dialogClose\"><span data-click=\"close()\" class=\"pointer\">X</span></div><div class=\"withPadding\"><div data-transclusion=\"content\"></div></div></div></div></div>";

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(58);
var Collapsible = /** @class */ (function () {
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
    Collapsible = __decorate([
        RF.decorateComponent({
            name: 'app-collapsible',
            template: __webpack_require__(59)
        })
    ], Collapsible);
    return Collapsible;
}());
exports.default = Collapsible;


/***/ }),
/* 58 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = "<div><div class=\"collapsible_header bold noSelect\"><div class=\"table width100\"><div class=\"row\"><div class=\"cell width1\"><span class=\"collapsible_point noBrake\" data-click=\"toggle()\" data-class=\"{rotated:opened}\">▷</span></div><div class=\"cell\"><span data-click=\"toggle()\">&nbsp;{{title}}</span></div><div class=\"cell width1\"><div data-if=\"crud && crud.create\" class=\"add\" data-click=\"crud.create(meta)\"></div></div><div class=\"cell width1\"><div data-if=\"crud && crud.editScript\" class=\"script\" data-click=\"crud.editScript(object)\"></div></div><div class=\"cell width1\"><div data-if=\"crud && crud.edit\" class=\"edit\" data-click=\"crud.edit(object,meta)\"></div></div><div class=\"cell width1\"><div data-if=\"crud && crud.delete\" class=\"delete\" data-click=\"crud.delete(object,meta)\"></div></div></div></div></div><div class=\"collapsible_content\" data-class=\"{opened:opened}\"><div data-transclusion=\"content\"></div></div></div>";

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var i18n_1 = __webpack_require__(9);
var AlertDialog = /** @class */ (function () {
    function AlertDialog() {
        this.message = '';
        this.i18n = i18n_1.default;
    }
    AlertDialog.prototype.open = function (message) {
        RF.getComponentById('alertModal').open();
        this.message = message;
    };
    AlertDialog.prototype.close = function () {
        RF.getComponentById('alertModal').close();
        this.message = null;
    };
    AlertDialog = __decorate([
        RF.decorateComponent({
            name: 'app-alert-dialog',
            template: __webpack_require__(61)
        })
    ], AlertDialog);
    return AlertDialog;
}());
exports.default = AlertDialog;


/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports = "<app-modal id=\"alertModal\"><div data-transclusion=\"content\"><div class=\"withMargin\"><div class=\"alert_body\">{{message}}</div><div><button data-click=\"close()\">{{i18n.get('ok')}}</button></div></div></div></app-modal>";

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var i18n_1 = __webpack_require__(9);
__webpack_require__(63);
var ConfirmDialog = /** @class */ (function () {
    function ConfirmDialog() {
        this.message = 'default message';
        this.confirm = function () { };
        this.i18n = i18n_1.default;
    }
    ConfirmDialog.prototype.close = function () {
        RF.getComponentById('confirmModal').close();
    };
    ConfirmDialog.prototype.confirmAndClose = function () {
        this.confirm();
        this.close();
    };
    ConfirmDialog.prototype.open = function (message, callback) {
        RF.getComponentById('confirmModal').open();
        this.message = message;
        this.confirm = callback;
    };
    ConfirmDialog = __decorate([
        RF.decorateComponent({
            name: 'app-confirm-dialog',
            template: __webpack_require__(64)
        })
    ], ConfirmDialog);
    return ConfirmDialog;
}());
exports.default = ConfirmDialog;


/***/ }),
/* 63 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports = "<app-modal id=\"confirmModal\"><div data-transclusion=\"content\"><div class=\"withMargin\"><div class=\"alert_body\">{{message}}</div><div><button data-click=\"confirmAndClose()\">{{i18n.get('confirm')}}</button><button data-click=\"close()\">{{i18n.get('cancel')}}</button></div></div></div></app-modal>";

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(66);
var InputFile = /** @class */ (function () {
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
    InputFile = __decorate([
        RF.decorateComponent({
            name: 'app-input-file',
            template: __webpack_require__(67)
        })
    ], InputFile);
    return InputFile;
}());
exports.default = InputFile;


/***/ }),
/* 66 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 67 */
/***/ (function(module, exports) {

module.exports = "<div><button>{{title}}</button><input required accept=\"{{accept}}\" type=\"file\"></div>";

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var ColorPicker = /** @class */ (function () {
    function ColorPicker() {
        this.model = { field: '' };
        this.field = 'field';
        this.onChange = null;
    }
    ColorPicker.prototype.click = function () {
        RF.getComponentById('colorPickerDialog').open(this.model, this.field, this.onChange);
    };
    ColorPicker = __decorate([
        RF.decorateComponent({
            name: 'app-color-picker',
            template: __webpack_require__(69)
        })
    ], ColorPicker);
    return ColorPicker;
}());
exports.default = ColorPicker;


/***/ }),
/* 69 */
/***/ (function(module, exports) {

module.exports = "<div class=\"inlineBlock\"><div data-style=\"{ cursor: 'pointer', width: 24 + 'px', height:24 + 'px', backgroundColor: model && model[field] && ('rgb('+model[field].r+','+model[field].g+','+model[field].b+')') }\" data-click=\"click()\"></div></div>";

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = __webpack_require__(19);
var i18n_1 = __webpack_require__(9);
var defaultColor = { r: 0, g: 0, b: 0 };
var ColorPickerDialog = /** @class */ (function () {
    function ColorPickerDialog() {
        this.colorEnums = [
            { left: 'red', right: 'cyan', key: 'r' },
            { left: 'green', right: 'magenta', key: 'g' },
            { left: 'blue', right: 'yellow', key: 'b' }
        ];
        this.i18n = i18n_1.default;
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
        this.currentColor.hex = utils_1.default.rgbToHex(this.currentColor.RGB);
        RF.getComponentById('colorPickerModal').open();
    };
    ColorPickerDialog.prototype.hexChanged = function () {
        this.currentColor.RGB = utils_1.default.hexToRgb(this.currentColor.hex);
    };
    ColorPickerDialog.prototype.rgbChanged = function () {
        this.currentColor.hex = utils_1.default.rgbToHex(this.currentColor.RGB);
    };
    ColorPickerDialog.prototype.getRawColor = function (rgb, key) {
        var col = {
            r: key == 'r' ? rgb.r : 0,
            g: key == 'g' ? rgb.g : 0,
            b: key == 'b' ? rgb.b : 0
        };
        return utils_1.default.rgbToHex(col);
    };
    ColorPickerDialog.prototype.applyColor = function () {
        this.model[this.field] = this.currentColor.RGB;
        this.onChange && this.onChange();
        RF.getComponentById('colorPickerModal').close();
    };
    ColorPickerDialog = __decorate([
        RF.decorateComponent({
            name: 'app-color-picker-dialog',
            template: __webpack_require__(109)
        })
    ], ColorPickerDialog);
    return ColorPickerDialog;
}());
exports.default = ColorPickerDialog;


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var EventEmitter = /** @class */ (function () {
    function EventEmitter() {
        this.events = {};
    }
    EventEmitter.prototype._on = function (name, callBack) {
        this.events[name] = this.events[name] || [];
        this.events[name].push(callBack);
    };
    EventEmitter.prototype.on = function (eventNameOrList, callBack) {
        if (typeof eventNameOrList === 'string') {
            this._on(eventNameOrList, callBack);
        }
        else if (eventNameOrList.splice) {
            eventNameOrList.forEach(function (eventName) {
                this._on(eventName, callBack);
            });
        }
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
exports.default = EventEmitter;
;


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// http://madebyevan.com/gamedevclass/minimal-demo/
Object.defineProperty(exports, "__esModule", { value: true });
var vec2_1 = __webpack_require__(73);
var ArcadeRigidBody = /** @class */ (function () {
    function ArcadeRigidBody(gameObject) {
        this.vel = new vec2_1.default();
        this.onFloor = false;
        this._onFloorInCurrFrame = false; // to avoid onFloor oscillation
        this._onFloorInPrevFrame = false;
        this.static = false; // todo reserved world
        this.game = gameObject.game;
        this.gameObject = gameObject;
    }
    ArcadeRigidBody.prototype.update = function (time, delta) {
        if (!this.gameObject.rigidBody.static) {
            var deltaPoint = this.vel.multByScalar(delta / 1000);
            this.game.collider.moveBy(this.gameObject, deltaPoint);
            this.vel.addY(this.game.gravityConstant * delta / 1000);
        }
    };
    return ArcadeRigidBody;
}());
exports.default = ArcadeRigidBody;


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var point2d_1 = __webpack_require__(2);
var Vec2 = /** @class */ (function (_super) {
    __extends(Vec2, _super);
    function Vec2(x, y) {
        // xyzw stpq rgba
        return _super.call(this, x, y) || this;
    }
    // скалярное произведение
    Vec2.prototype.dotProduct = function (another) {
        return this.x * another.x + this.y * another.y;
    };
    Vec2.prototype.crossProduct = function (another) {
        return this.x * another.y - this.y * another.x;
    };
    Vec2.prototype.setXY = function (x, y) {
        this.x = x;
        this.y = y;
        return this;
    };
    Vec2.prototype.addXY = function (x, y) {
        this.x += x;
        this.y += y;
        return this;
    };
    Vec2.prototype.multByScalar = function (scalar, mutateOrigin) {
        if (mutateOrigin === void 0) { mutateOrigin = true; }
        if (mutateOrigin)
            return new Vec2(this.x * scalar, this.y * scalar);
        this.x *= scalar;
        this.y *= scalar;
        return this;
    };
    Vec2.prototype.divByScalar = function (scalar, mutateOrigin) {
        if (mutateOrigin === void 0) { mutateOrigin = true; }
        return this.multByScalar(1 / scalar, mutateOrigin);
    };
    Vec2.prototype.plus = function (another, mutateOrigin) {
        if (mutateOrigin === void 0) { mutateOrigin = false; }
        if (!mutateOrigin)
            return new Vec2(this.x + another.x, this.y + another.y);
        this.x += another.x;
        this.y += another.y;
        return this;
    };
    Vec2.prototype.minus = function (another, mutateOrigin) {
        if (mutateOrigin === void 0) { mutateOrigin = false; }
        if (!mutateOrigin)
            return new Vec2(this.x - another.x, this.y - another.y);
        this.x -= another.x;
        this.y -= another.y;
        return this;
    };
    Vec2.prototype.getLength = function () {
        return Math.sqrt(this.lengthSquared());
    };
    Vec2.prototype.lengthSquared = function () {
        return (this.x * this.x) + (this.y * this.y);
    };
    Vec2.prototype.normalize = function () {
        var length = this.getLength();
        this.x = this.x / length;
        this.y = this.y / length;
        return this;
    };
    Vec2.prototype.setLength = function (value) {
        var _angle = this.getAngle();
        this.x = Math.cos(_angle) * value;
        this.y = Math.sin(_angle) * value;
    };
    ;
    Vec2.prototype.getAngle = function () {
        return Math.atan2(this.y, this.x);
    };
    ;
    Vec2.prototype.getAngleBetween = function (that) {
        return Math.acos((this.x * that.x + this.y * that.y) /
            this.getLength() * that.getLength());
    };
    Vec2.prototype.setAngle = function (value) {
        var len = this.getLength();
        this.x = Math.cos(value) * len;
        this.y = Math.sin(value) * len;
    };
    ;
    Vec2.prototype.clone = function () {
        return new Vec2(this.x, this.y);
    };
    Vec2.angleBetween = function (v1, v2) {
        v1 = v1.clone().normalize();
        v2 = v2.clone().normalize();
        return Math.acos(v1.dotProduct(v2));
    };
    ;
    Vec2.normalBetween = function (v1, v2) {
        var v = v1.minus(v2);
        return v.normalize();
    };
    Vec2.distance = function (a, b) {
        return Math.sqrt(Vec2.distanceSquared(a, b));
    };
    Vec2.distanceSquared = function (a, b) {
        return (a.x - b.x) * (a.x - b.x) + (a.y - b.y) * ((a.y - b.y));
    };
    return Vec2;
}(point2d_1.default));
exports.default = Vec2;


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var point2d_1 = __webpack_require__(2);
var abstractLight_1 = __webpack_require__(41);
var PointLight = /** @class */ (function (_super) {
    __extends(PointLight, _super);
    function PointLight(game) {
        var _this = _super.call(this, game) || this;
        _this.pos = new point2d_1.default();
        _this.nearRadius = 0;
        _this.farRadius = 0;
        _this.isOn = true;
        _this._screenPoint = new point2d_1.default();
        return _this;
    }
    PointLight.prototype.getPosScaled = function () {
        var camera = this.game.camera;
        var rect = camera.getRectScaled();
        var scale = camera.scale;
        this._screenPoint.setXY((this.pos.x - rect.x) * scale.x, (this.pos.y - rect.y) * scale.y);
        return this._screenPoint;
    };
    return PointLight;
}(abstractLight_1.default));
exports.default = PointLight;


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Queue = /** @class */ (function () {
    function Queue() {
        this.tasksResolved = 0;
        this.tasks = [];
        this.tasksProgressById = {};
        this.onResolved = null;
        this.onProgress = null;
    }
    Queue.prototype.size = function () {
        return this.tasks.length;
    };
    Queue.prototype.calcProgress = function () {
        var sum = 0;
        Object.keys(this.tasksProgressById).forEach(function (taskId) {
            sum += this.tasksProgressById[taskId] || 0;
        });
        return sum / this.tasks.length;
    };
    Queue.prototype.addTask = function (taskFn, taskId) {
        this.tasks.push(taskFn);
        this.tasksProgressById[taskId] = 0;
    };
    ;
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
    Queue.prototype.start = function () {
        if (this.size() === 0)
            this.onResolved();
        this.tasks.forEach(function (t) {
            t && t();
        });
    };
    return Queue;
}());
exports.default = Queue;
;


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var abstractLight_1 = __webpack_require__(41);
var AmbientLight = /** @class */ (function (_super) {
    __extends(AmbientLight, _super);
    function AmbientLight(game) {
        return _super.call(this, game) || this;
    }
    return AmbientLight;
}(abstractLight_1.default));
exports.default = AmbientLight;


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var baseAbstractBehaviour_1 = __webpack_require__(28);
__webpack_require__(36);
var rendererFactory_1 = __webpack_require__(78);
var repository_1 = __webpack_require__(97);
var mouse_1 = __webpack_require__(104);
var keyboard_1 = __webpack_require__(105);
var gamePad_1 = __webpack_require__(106);
var collider_1 = __webpack_require__(107);
var decorators_1 = __webpack_require__(40);
var commonObject_1 = __webpack_require__(38);
var camera_1 = __webpack_require__(108);
var consts_1 = __webpack_require__(32);
var point2d_1 = __webpack_require__(2);
var Game = /** @class */ (function (_super) {
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
        _this.scale = new point2d_1.default(1, 1);
        _this.pos = new point2d_1.default(0, 0);
        _this.width = 0;
        _this.height = 0;
        _this.gravityConstant = 0;
        _this.fps = 0;
        _this.gamePad = null;
        _this.scaleStrategy = consts_1.SCALE_STRATEGY.FIT;
        _this.startSceneId = 0;
        _this._revalidated = false;
        var time = Date.now();
        _this._lastTime = _this._currTime = time;
        _this._deltaTime = 0;
        _this.repository = new repository_1.default(_this);
        _this.mouse = new mouse_1.default(_this);
        _this.keyboard = new keyboard_1.default(_this);
        _this.keyboard.listenTo();
        _this.gamePad = new gamePad_1.default(_this);
        _this.collider = new collider_1.default(_this);
        _this.camera = new camera_1.default(_this);
        return _this;
    }
    Game.prototype.revalidate = function () {
        this.renderer = rendererFactory_1.default.getRenderer(this);
        this.mouse.listenTo(this.renderer.container);
        this._revalidated = true;
    };
    Game.prototype.getTime = function () {
        return this._lastTime;
    };
    Game.prototype.getDeltaTime = function () {
        return this._deltaTime;
    };
    Game.prototype.runScene = function (scene) {
        var _this = this;
        if (true && !this._revalidated)
            throw "game.revalidate() method not invoked. Invoke game.fromJSON(gameParams) or call game.revalidate() method directly";
        this._currentScene = scene;
        if (false) {
            var allScripts_1 = require("../../app/scripts/allScripts");
            var sceneBhScriptName = "" + scene.name[0].toUpperCase() + scene.name.substr(1) + "Behaviour";
            if (sceneBhScriptName)
                scene.setIndividualBehaviour(allScripts_1[sceneBhScriptName]);
            scene.layers.forEach(function (l) {
                l.gameObjects.forEach(function (go) {
                    go.setCommonBehaviour();
                    var scriptName = "" + go.name[0].toUpperCase() + go.name.substr(1) + "Behaviour";
                    var bhClass = allScripts_1[scriptName];
                    if (bhClass)
                        go.setIndividualBehaviour(bhClass);
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
        if (this.destroyed)
            return;
        this._lastTime = this._currTime;
        this._currTime = Date.now();
        this._deltaTime = this._currTime - this._lastTime;
        if (true) {
            this.fps = ~~(1000 / this._deltaTime);
            window.fps = this.fps;
            var renderError = this.renderer.getError();
            if (renderError)
                throw "render error with code " + renderError;
        }
        if (this._deltaTime > 20)
            this._deltaTime = 20;
        this._currentScene && this._currentScene.update(this._currTime, this._deltaTime);
        this.keyboard.update();
        this.gamePad.update();
        requestAnimationFrame(this.update.bind(this));
    };
    Game.prototype.destroy = function () {
        var _this = this;
        this.destroyed = true;
        this.keyboard.destroy();
        this.mouse.destroy();
        this.renderer.cancelFullScreen();
        baseAbstractBehaviour_1.default.destroyAll();
        setTimeout(function () {
            _this.renderer.destroy();
        }, 1000);
    };
    Game = __decorate([
        decorators_1.Transient({
            repository: true,
            renderer: true,
            mouse: true,
            keyboard: true,
            gamePad: true,
            collider: true,
            camera: true,
            scaleStrategy: true,
            fps: true,
            destroyed: true
        })
    ], Game);
    return Game;
}(commonObject_1.default));
exports.default = Game;


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
//import Renderer from './dom/htmlRenderer'
//import Renderer from './canvas/canvasRenderer'
var webGlRenderer_1 = __webpack_require__(79);
//import Renderer from './dom/svgRenderer'
var RendererFactory = /** @class */ (function () {
    function RendererFactory() {
    }
    RendererFactory.getRenderer = function (game) {
        if (!game)
            throw "RendererFactory::getRenderer: game param not specified";
        return new webGlRenderer_1.default(game);
    };
    return RendererFactory;
}());
exports.default = RendererFactory;


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var spriteRectLightDrawer_1 = __webpack_require__(80);
var abstractRenderer_1 = __webpack_require__(83);
var spriteRectDrawer_1 = __webpack_require__(16);
var tiledSpriteRectDrawer_1 = __webpack_require__(85);
var colorRectDrawer_1 = __webpack_require__(86);
var abstractDrawer_1 = __webpack_require__(8);
var lineDrawer_1 = __webpack_require__(87);
var circleDrawer_1 = __webpack_require__(89);
var frameBuffer_1 = __webpack_require__(43);
var matrixStack_1 = __webpack_require__(92);
var mat4 = __webpack_require__(10);
var matEx = __webpack_require__(4);
var texture_1 = __webpack_require__(44);
var multBlendDrawer_1 = __webpack_require__(93);
var rect_1 = __webpack_require__(6);
var point2d_1 = __webpack_require__(2);
var getCtx = function (el) {
    return (el.getContext("webgl", { alpha: false }) ||
        el.getContext('experimental-webgl', { alpha: false }) ||
        el.getContext('webkit-3d', { alpha: false }) ||
        el.getContext('moz-webgl', { alpha: false }));
};
var SCENE_DEPTH = 1000;
var matrixStack = new matrixStack_1.default();
var makePositionMatrix = function (dstX, dstY, dstWidth, dstHeight, viewWidth, viewHeight) {
    // proj * modelView
    var zToWMatrix = mat4.makeZToWMatrix(1);
    var projectionMatrix = mat4.ortho(0, viewWidth, 0, viewHeight, -SCENE_DEPTH, SCENE_DEPTH);
    var scaleMatrix = mat4.makeScale(dstWidth, dstHeight, 1);
    var translationMatrix = mat4.makeTranslation(dstX, dstY, 0);
    var matrix = mat4.matrixMultiply(scaleMatrix, translationMatrix);
    matrix = mat4.matrixMultiply(matrix, matrixStack.getCurrentMatrix());
    matrix = mat4.matrixMultiply(matrix, projectionMatrix);
    matrix = mat4.matrixMultiply(matrix, zToWMatrix);
    return matrix;
};
var makeTextureMatrix = function (srcRect, texWidth, texHeight) {
    var texScaleMatrix = mat4.makeScale(srcRect.width / texWidth, srcRect.height / texHeight, 1);
    var texTranslationMatrix = mat4.makeTranslation(srcRect.x / texWidth, srcRect.y / texHeight, 0);
    return mat4.matrixMultiply(texScaleMatrix, texTranslationMatrix);
};
//  gl.enable(gl.CULL_FACE);
//   gl.enable(gl.DEPTH_TEST);
var WebGlRenderer = /** @class */ (function (_super) {
    __extends(WebGlRenderer, _super);
    function WebGlRenderer(game) {
        var _this = _super.call(this, game) || this;
        // todo DRY
        var container = document.createElement('canvas');
        document.body.appendChild(container);
        container.setAttribute('width', game.width.toString());
        container.setAttribute('height', game.height.toString());
        _this.container = container;
        _this.matrixStack = matrixStack;
        _this.registerResize();
        _this._init();
        return _this;
    }
    WebGlRenderer.prototype._init = function () {
        var gl = getCtx(this.container);
        this.gl = gl;
        this.circleDrawer = new circleDrawer_1.default(gl);
        this.spriteRectDrawer = new spriteRectDrawer_1.default(gl);
        this.spriteRectLightDrawer = new spriteRectLightDrawer_1.default(gl);
        this.tiledSpriteRectDrawer = new tiledSpriteRectDrawer_1.default(gl);
        this.colorRectDrawer = new colorRectDrawer_1.default(gl);
        this.lineDrawer = new lineDrawer_1.default(gl);
        //this.modelDrawer = new ModelDrawer(gl);
        this.multBlendDrawer = new multBlendDrawer_1.default(gl);
        this.frameBuffer = new frameBuffer_1.default(gl, this.game.width, this.game.height);
        gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
        gl.enable(gl.BLEND);
        // gl.depthFunc(gl.LEQUAL);
    };
    WebGlRenderer.prototype.draw = function (renderable) {
        if (!matEx.overlapTest(this.game.camera.getRectScaled(), renderable.getRect()))
            return;
        var texToDraw = this.renderableCache[renderable.spriteSheet.resourcePath];
        texToDraw = texToDraw.applyFilters(renderable.filters, this.frameBuffer);
        this.save();
        this.translate(renderable.pos.x, renderable.pos.y);
        if (!(renderable.angle === 0 && renderable.scale.equal(1))) {
            var halfV = renderable.width / 2;
            var halfH = renderable.height / 2;
            this.translate(halfV, halfH);
            this.scale(renderable.scale.x, renderable.scale.y);
            this.rotateZ(renderable.angle);
            //ctx.rotateY(a);
            this.translate(-halfV, -halfH);
        }
        this.drawTexture(texToDraw, renderable.getFrameRect(), new point2d_1.default(0, 0));
        this.restore();
    };
    WebGlRenderer.prototype.drawImage = function (texturePath, srcRect, dstPoint) {
        //this.gl.blendFunc(this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA);
        //gl.blendColor(0, 0.5, 1, 1);
        var texture = this.renderableCache[texturePath];
        if (true && !texture) {
            if (!texturePath)
                throw "no texture path provided";
            else
                throw "can not find texture with path " + texturePath;
        }
        this.drawTexture(texture, srcRect, dstPoint);
    };
    WebGlRenderer.prototype.drawTexture = function (texture, srcRect, dstPoint) {
        var camRectScaled = this.game.camera.getRectScaled();
        if (!matEx.overlapTest(camRectScaled, rect_1.default.fromPool().set(camRectScaled.x + srcRect.x, camRectScaled.y + srcRect.y, srcRect.width, srcRect.height)))
            return;
        var texWidth = texture.getSize().width;
        var texHeight = texture.getSize().height;
        var scene = this.game.getCurrScene();
        if (srcRect.width === 120 || srcRect.width === 174) {
            var uniforms = {
                u_textureMatrix: makeTextureMatrix(srcRect, texWidth, texHeight),
                u_vertexMatrix: makePositionMatrix(dstPoint.x, dstPoint.y, srcRect.width, srcRect.height, this.game.width, this.game.height),
                u_alpha: 1
            };
            this.multBlendDrawer.draw(texture, this.frameBuffer, uniforms);
        }
        else {
            var uniforms = {
                u_textureMatrix: makeTextureMatrix(srcRect, texWidth, texHeight),
                u_vertexMatrix: makePositionMatrix(dstPoint.x, dstPoint.y, srcRect.width, srcRect.height, this.game.width, this.game.height),
                u_alpha: 1,
                'u_pointLight.pos': scene.pointLight.getPosScaled().toArray(),
                'u_pointLight.nearRadius': scene.pointLight.nearRadius,
                'u_pointLight.farRadius': scene.pointLight.farRadius,
                'u_pointLight.isOn': scene.pointLight.isOn,
                'u_pointLight.color': scene.pointLight.color,
                'u_ambientLight.color': scene.ambientLight.color
            };
            this.spriteRectLightDrawer.draw(texture, uniforms);
        }
    };
    WebGlRenderer.prototype.drawTiledImage = function (texturePath, srcRect, dstRect, offset) {
        //this.gl.blendFunc(this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA);
        //gl.blendColor(0, 0.5, 1, 1);
        var texture = this.renderableCache[texturePath];
        if (true && !texture) {
            if (!texturePath)
                throw "no texture path provided";
            else
                throw "can not find texture with path " + texturePath;
        }
        var texWidth = texture.getSize().width;
        var texHeight = texture.getSize().height;
        var uniforms = {};
        uniforms.u_textureMatrix = makeTextureMatrix(rect_1.default.fromPool().set(0, 0, dstRect.width, dstRect.height), texWidth, texHeight);
        uniforms.u_vertexMatrix = makePositionMatrix(dstRect.x, dstRect.y, dstRect.width, dstRect.height, this.game.width, this.game.height);
        uniforms.u_frameCoords = [srcRect.x / texWidth, srcRect.y / texHeight, srcRect.width / texWidth, srcRect.height / texHeight];
        uniforms.u_offsetCoords = [offset.x / srcRect.width, offset.y / srcRect.height];
        uniforms.u_alpha = 1;
        this.tiledSpriteRectDrawer.draw(texture, uniforms);
    };
    WebGlRenderer.prototype.fillRect = function (rect, color) {
        if (!matEx.overlapTest(this.game.camera.getRectScaled(), rect))
            return;
        var uniforms = {
            u_vertexMatrix: makePositionMatrix(rect.x, rect.y, rect.width, rect.height, this.game.width, this.game.height),
            u_rgba: color
        };
        //gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
        this.colorRectDrawer.draw(null, uniforms);
    };
    WebGlRenderer.prototype.drawRect = function (rect, color) {
        var r = rect_1.default.fromPool();
        var _a = [r.x, r.y, r.width, r.height], x = _a[0], y = _a[1], w = _a[2], h = _a[3];
        this.fillRect(r.set(x, y, w, 1), color);
        this.fillRect(r.set(x, y + h, w, 1), color);
        this.fillRect(r.set(x, y, 1, h), color);
        this.fillRect(r.set(x + w, y, 1, h), color);
    };
    WebGlRenderer.prototype.drawLine = function (x1, y1, x2, y2, color) {
        var dx = x2 - x1, dy = y2 - y1;
        //if (!matEx.overlapTest(this.game.camera.getRectScaled(),new Rect(x1,y1,dx,dy))) return;
        var uniforms = {};
        uniforms.u_vertexMatrix = makePositionMatrix(x1, y1, dx, dy, this.game.width, this.game.height);
        uniforms.u_rgba = color;
        //gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
        this.lineDrawer.draw(null, uniforms);
    };
    WebGlRenderer.prototype.fillCircle = function (x, y, r, color) {
        var r2 = r * 2;
        if (!matEx.overlapTest(this.game.camera.getRectScaled(), rect_1.default.fromPool().set(x - r, y - r, r2, r2)))
            return;
        var uniforms = {};
        uniforms.u_vertexMatrix = makePositionMatrix(x - r, y - r, r2, r2, this.game.width, this.game.height);
        uniforms.u_rgba = color;
        //gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
        this.circleDrawer.draw(null, uniforms);
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
    };
    WebGlRenderer.prototype.unlockRect = function () {
    };
    WebGlRenderer.prototype.clear = function () {
        this.gl.clearColor(1, 1, 1, 1);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
        //this.gl.clearDepth(1.);
    };
    WebGlRenderer.prototype.clearColor = function (_a) {
        var r = _a.r, g = _a.g, b = _a.b;
        this.gl.clearColor(r / 255.0, g / 255.0, b / 255.0, 1.0);
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
        this.translate(0, fullScreen.h);
        this.scale(1, -1);
        var texToDraw = this.frameBuffer.getTexture().applyFilters(filters, null);
        this.frameBuffer.unbind();
        this.gl.viewport(0, 0, fullScreen.w, fullScreen.h);
        var uniforms = {
            u_vertexMatrix: makePositionMatrix(0, 0, this.game.width * fullScreen.scaleFactor, this.game.height * fullScreen.scaleFactor, fullScreen.w, fullScreen.h),
            u_textureMatrix: makeTextureMatrix(rect_1.default.fromPool().set(0, 0, fullScreen.w, fullScreen.h), fullScreen.w, fullScreen.h),
            u_alpha: 1
        };
        this.spriteRectDrawer.draw(texToDraw, uniforms);
        //this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA);
        this.restore();
    };
    ;
    WebGlRenderer.prototype.getError = function () {
        if (false)
            return 0;
        var err = this.gl.getError();
        err = err === this.gl.NO_ERROR ? 0 : err;
        if (err) {
            console.log(abstractDrawer_1.default.currentInstance);
        }
        return err;
    };
    WebGlRenderer.prototype.loadTextureInfo = function (resourcePath, onLoad) {
        var _this = this;
        var img = new Image();
        img.src = resourcePath;
        img.onload = function () {
            var texture = new texture_1.default(_this.gl);
            texture.setImage(img);
            _this.renderableCache[resourcePath] = texture;
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
        abstractDrawer_1.default.destroyAll();
        Object.keys(this.renderableCache).forEach(function (key) {
            var t = _this.renderableCache[key];
            t.destroy();
        });
    };
    return WebGlRenderer;
}(abstractRenderer_1.default));
exports.default = WebGlRenderer;


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var spriteRectDrawer_1 = __webpack_require__(16);
var texShaderGenerator_1 = __webpack_require__(14);
var shaderProgram_1 = __webpack_require__(5);
var SpriteRectLightDrawer = /** @class */ (function (_super) {
    __extends(SpriteRectLightDrawer, _super);
    function SpriteRectLightDrawer(gl) {
        var _this = this;
        var gen = new texShaderGenerator_1.default();
        //language=GLSL
        gen.prependFragmentCodeBlock("\n            struct PointLight {\n                vec2 pos;\n                vec4 color;\n                float nearRadius;\n                float farRadius;\n                bool isOn;\n            };\n            struct AmbientLight {\n                vec4 color;\n            };\n            vec4 lightEffect(PointLight lgt){\n                vec4 result = vec4(0);\n                float atten = 0.0;\n                float dist = length(lgt.pos - gl_FragCoord.xy);\n                if (dist<=lgt.farRadius) {\n                    if (dist<=lgt.nearRadius) atten = 1.0;\n                    else {\n                        float n = dist - lgt.nearRadius;\n                        float d = lgt.farRadius - lgt.nearRadius;\n                        atten = smoothstep(0.0,1.0,1.0 - (n*n)/(d*d));\n                    }\n                }\n                result = atten * lgt.color; // * lgt.intensity\n                return result;\n            }\n        ");
        gen.addFragmentUniform("PointLight", 'u_pointLight');
        gen.addFragmentUniform("AmbientLight", 'u_ambientLight');
        //language=GLSL
        gen.setFragmentMainFn("\n            void main(){\n                vec4 texColor = texture2D(texture, v_texCoord);\n                vec4 lightResult = u_ambientLight.color;\n                \n                if (u_pointLight.isOn) lightResult+=lightEffect(u_pointLight);\n                \n                lightResult*=texColor;\n                gl_FragColor = lightResult;\n                gl_FragColor.a *= u_alpha;\n            }\n        ");
        var program = new shaderProgram_1.default(gl, gen.getVertexSource(), gen.getFragmentSource());
        _this = _super.call(this, gl, program) || this;
        return _this;
    }
    return SpriteRectLightDrawer;
}(spriteRectDrawer_1.default));
exports.default = SpriteRectLightDrawer;


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var VertexBuffer = /** @class */ (function () {
    function VertexBuffer(gl) {
        this.bufferItemSize = null;
        this.bufferItemType = null;
        this.dataLength = null;
        this.attrName = null;
        if (true && !gl)
            throw "can not create VertexBuffer, gl context not passed to constructor, expected: VertexBuffer(gl)";
        this.gl = gl;
        this.buffer = gl.createBuffer();
        if (true && !this.buffer)
            throw "can not allocate memory for vertex buffer";
        this.bufferItemSize = 0;
        this.bufferItemType = 0;
        this.dataLength = 0;
        this.attrName = null;
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
exports.default = VertexBuffer;


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var IndexBuffer = /** @class */ (function () {
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
exports.default = IndexBuffer;


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var textField_1 = __webpack_require__(31);
var device_1 = __webpack_require__(84);
var consts_1 = __webpack_require__(32);
var AbstractRenderer = /** @class */ (function () {
    function AbstractRenderer(game) {
        this.renderableCache = {};
        this.container = null;
        this.debugTextField = null;
        this.fullScreenSize = { w: 0, h: 0, scaleFactor: 1 };
        this.game = game;
        if (device_1.default.isCocoonJS) {
            this.fullScreenSize.w = window.innerWidth * device_1.default.scale;
            this.fullScreenSize.h = window.innerHeight * device_1.default.scale;
            this.fullScreenSize.scaleFactor =
                Math.min(this.fullScreenSize.w / this.game.width, this.fullScreenSize.h / this.game.height);
        }
        else {
            this.fullScreenSize.w = game.width;
            this.fullScreenSize.h = game.height;
        }
        //document.body.addEventListener('click',()=>this.requestFullScreen());
    }
    AbstractRenderer.prototype.onResize = function () {
        if (this.game.scaleStrategy === consts_1.SCALE_STRATEGY.NO_SCALE)
            return;
        var canvasRatio = this.container.height / this.container.width;
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
    AbstractRenderer.prototype.drawImage = function (texturePath, srcRect, dstPoint) {
    };
    AbstractRenderer.prototype.drawTiledImage = function (texturePath, srcRect, dstRect, offset) {
    };
    AbstractRenderer.prototype.fillRect = function (rect, color) {
    };
    AbstractRenderer.prototype.drawRect = function (rect, color) {
    };
    AbstractRenderer.prototype.drawLine = function (x1, y1, x2, y2, color) {
    };
    AbstractRenderer.prototype.fillCircle = function (x, y, r, color) {
    };
    AbstractRenderer.prototype.clear = function () {
    };
    AbstractRenderer.prototype.clearColor = function (_a) {
        var r = _a.r, g = _a.g, b = _a.b;
    };
    AbstractRenderer.prototype.restore = function () {
    };
    AbstractRenderer.prototype.translate = function (x, y, z) { };
    AbstractRenderer.prototype.scale = function (x, y, z) { };
    AbstractRenderer.prototype.draw = function (renderable) {
    };
    AbstractRenderer.prototype.log = function (args) {
        if (false)
            return;
        var textField = this.debugTextField;
        var res = '';
        Array.prototype.slice.call(arguments).forEach(function (txt) {
            if (txt === undefined)
                txt = 'undefined';
            if (txt === null)
                txt = 'null';
            if (txt.toJSON) {
                txt = JSON.stringify(txt.toJSON(), null, 4);
            }
            else {
                try {
                    txt = JSON.stringify(txt);
                }
                catch (e) { }
            }
            if (typeof txt !== 'string')
                txt = txt.toString();
            res += txt + "\n";
        });
        if (!textField) {
            textField = new textField_1.default(this.game);
            textField.name = 'defaultName';
            textField.revalidate();
            this.debugTextField = textField;
        }
        textField.pos.x = 10;
        textField.pos.y = 10;
        textField.setText(textField.getText() + res);
    };
    AbstractRenderer.prototype.loadTextureInfo = function (textureId, info) { };
    AbstractRenderer.prototype.getTextureInfo = function (textureId) { };
    return AbstractRenderer;
}());
exports.default = AbstractRenderer;


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var isCocoonJS = !!(navigator.isCocoonJS);
var Device = /** @class */ (function () {
    function Device(game) {
    }
    Device.isCocoonJS = isCocoonJS;
    Device.scale = isCocoonJS ? (window.devicePixelRatio || 1) : 1;
    Device.isTouch = (typeof window !== 'undefined' && 'ontouchstart' in window);
    return Device;
}());
exports.default = Device;


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var plane_1 = __webpack_require__(29);
var shaderProgram_1 = __webpack_require__(5);
var bufferInfo_1 = __webpack_require__(13);
var abstractDrawer_1 = __webpack_require__(8);
var shaderProgramUtils_1 = __webpack_require__(7);
var texShaderGenerator_1 = __webpack_require__(14);
var gen = new texShaderGenerator_1.default();
gen.addFragmentUniform(shaderProgramUtils_1.GL_TYPE.FLOAT_VEC2, 'u_offsetCoords');
gen.addFragmentUniform(shaderProgramUtils_1.GL_TYPE.FLOAT_VEC4, 'u_frameCoords');
//language=GLSL
gen.setFragmentMainFn("\n    void main(){\n        vec2 localTextCoord = mod(\n            v_texCoord + fract(u_offsetCoords),\n            u_frameCoords.zw\n        ) + u_frameCoords.xy;\n        gl_FragColor = texture2D(texture, localTextCoord);\n        gl_FragColor.a *= u_alpha;\n    }\n");
var TiledSpriteRectDrawer = /** @class */ (function (_super) {
    __extends(TiledSpriteRectDrawer, _super);
    function TiledSpriteRectDrawer(gl) {
        var _this = _super.call(this, gl) || this;
        _this.plane = new plane_1.default();
        _this.program = new shaderProgram_1.default(gl, gen.getVertexSource(), gen.getFragmentSource());
        _this.bufferInfo = new bufferInfo_1.default(gl, {
            posVertexInfo: { array: _this.plane.vertexArr, type: gl.FLOAT, size: 2, attrName: 'a_position' },
            posIndexInfo: { array: _this.plane.indexArr },
            texVertexInfo: { array: _this.plane.texCoordArr, type: gl.FLOAT, size: 2, attrName: 'a_texCoord' },
            drawMethod: _this.gl.TRIANGLE_STRIP
        });
        return _this;
    }
    return TiledSpriteRectDrawer;
}(abstractDrawer_1.default));
exports.default = TiledSpriteRectDrawer;


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var plane_1 = __webpack_require__(29);
var shaderProgram_1 = __webpack_require__(5);
var bufferInfo_1 = __webpack_require__(13);
var abstractDrawer_1 = __webpack_require__(8);
var colorShaderGenerator_1 = __webpack_require__(33);
var ColorRectDrawer = /** @class */ (function (_super) {
    __extends(ColorRectDrawer, _super);
    function ColorRectDrawer(gl) {
        var _this = _super.call(this, gl) || this;
        _this.plane = new plane_1.default();
        var gen = new colorShaderGenerator_1.default();
        _this.program = new shaderProgram_1.default(gl, gen.getVertexSource(), gen.getFragmentSource());
        _this.bufferInfo = new bufferInfo_1.default(gl, {
            posVertexInfo: { array: _this.plane.vertexArr, type: gl.FLOAT, size: 2, attrName: 'a_position' },
            posIndexInfo: { array: _this.plane.indexArr },
            drawMethod: _this.gl.TRIANGLE_STRIP
        });
        return _this;
    }
    return ColorRectDrawer;
}(abstractDrawer_1.default));
exports.default = ColorRectDrawer;


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var line_1 = __webpack_require__(88);
var shaderProgram_1 = __webpack_require__(5);
var bufferInfo_1 = __webpack_require__(13);
var abstractDrawer_1 = __webpack_require__(8);
var colorShaderGenerator_1 = __webpack_require__(33);
var LineDrawer = /** @class */ (function (_super) {
    __extends(LineDrawer, _super);
    function LineDrawer(gl) {
        var _this = _super.call(this, gl) || this;
        var gen = new colorShaderGenerator_1.default();
        _this.program = new shaderProgram_1.default(gl, gen.getVertexSource(), gen.getFragmentSource());
        _this.line = new line_1.default();
        _this.bufferInfo = new bufferInfo_1.default(gl, {
            posVertexInfo: { array: _this.line.vertexArr, type: gl.FLOAT, size: 2, attrName: 'a_position' },
            drawMethod: _this.gl.LINE_STRIP
        });
        return _this;
    }
    return LineDrawer;
}(abstractDrawer_1.default));
exports.default = LineDrawer;


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var abstractPrimitive_1 = __webpack_require__(30);
var Line = /** @class */ (function (_super) {
    __extends(Line, _super);
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
}(abstractPrimitive_1.default));
exports.default = Line;


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var circle_1 = __webpack_require__(90);
var shaderProgram_1 = __webpack_require__(5);
var abstractDrawer_1 = __webpack_require__(8);
var bufferInfo_1 = __webpack_require__(13);
var colorShaderGenerator_1 = __webpack_require__(33);
var CircleDrawer = /** @class */ (function (_super) {
    __extends(CircleDrawer, _super);
    function CircleDrawer(gl) {
        var _this = _super.call(this, gl) || this;
        var gen = new colorShaderGenerator_1.default();
        _this.program = new shaderProgram_1.default(gl, gen.getVertexSource(), gen.getFragmentSource());
        _this.circle = new circle_1.default();
        _this.bufferInfo = new bufferInfo_1.default(gl, {
            posVertexInfo: { array: _this.circle.vertexArr, type: gl.FLOAT, size: 2, attrName: 'a_position' },
            drawMethod: _this.gl.TRIANGLE_FAN
        });
        return _this;
    }
    return CircleDrawer;
}(abstractDrawer_1.default));
exports.default = CircleDrawer;


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var abstractPrimitive_1 = __webpack_require__(30);
var Circle = /** @class */ (function (_super) {
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
}(abstractPrimitive_1.default));
exports.default = Circle;


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Size = /** @class */ (function () {
    function Size(width, height) {
        if (width === void 0) { width = 0; }
        if (height === void 0) { height = 0; }
        this.width = width;
        this.height = height;
    }
    Size.prototype.setW = function (width) { this.width = width; };
    Size.prototype.setH = function (height) { this.height = height; };
    Size.prototype.setWH = function (width, height) {
        this.width = width;
        this.height = height;
    };
    return Size;
}());
exports.default = Size;


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var mat4 = __webpack_require__(10);
var MatrixStack = /** @class */ (function () {
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
    };
    MatrixStack.prototype.rotateZ = function (angleInRadians) {
        var t = mat4.makeZRotation(angleInRadians);
        var m = this.getCurrentMatrix();
        this.setCurrentMatrix(mat4.matrixMultiply(t, m));
    };
    MatrixStack.prototype.rotateY = function (angleInRadians) {
        var t = mat4.makeYRotation(angleInRadians);
        var m = this.getCurrentMatrix();
        this.setCurrentMatrix(mat4.matrixMultiply(t, m));
    };
    MatrixStack.prototype.scale = function (x, y, z) {
        if (z === undefined) {
            z = 1;
        }
        var t = mat4.makeScale(x, y, z);
        var m = this.getCurrentMatrix();
        this.setCurrentMatrix(mat4.matrixMultiply(t, m));
    };
    return MatrixStack;
}());
exports.default = MatrixStack;


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var abstractBlendDrawer_1 = __webpack_require__(94);
var MultBlendDrawer = /** @class */ (function (_super) {
    __extends(MultBlendDrawer, _super);
    function MultBlendDrawer(gl) {
        return _super.call(this, gl) || this;
    }
    //language=GLSL
    MultBlendDrawer.prototype.prepare = function (programGen) {
        programGen.setFragmentMainFn("\n            void main(){\n                vec4 srcColor =  texture2D(texture, v_texCoord)*2.0;\n                srcColor.a *= u_alpha;\n                vec4 destColor = texture2D(destTexture, v_destTexCoord.xy);\n                vec4 res = min(srcColor + destColor,vec4(1.0));\n                gl_FragColor = res;\n            }\n        ");
    };
    return MultBlendDrawer;
}(abstractBlendDrawer_1.default));
exports.default = MultBlendDrawer;


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var spriteRectDrawer_1 = __webpack_require__(16);
var shaderProgramUtils_1 = __webpack_require__(7);
var texShaderGenerator_1 = __webpack_require__(14);
var shaderProgram_1 = __webpack_require__(5);
var simpleCopyFilter_1 = __webpack_require__(95);
var AbstractBlendDrawer = /** @class */ (function () {
    function AbstractBlendDrawer(gl) {
        this.gl = gl;
        var gen = new texShaderGenerator_1.default();
        gen.addVarying(shaderProgramUtils_1.GL_TYPE.FLOAT_VEC4, 'v_destTexCoord');
        gen.addFragmentUniform(shaderProgramUtils_1.GL_TYPE.SAMPLER_2D, 'destTexture');
        //language=GLSL
        gen.setVertexMainFn("\n            void main(){\n                gl_Position = u_vertexMatrix * a_position;\n                v_texCoord = (u_textureMatrix * vec4(a_texCoord, 0, 1)).xy;\n                v_destTexCoord = gl_Position*0.5+0.5; \n            }\n        ");
        this.prepare(gen);
        this._afterPrepare(gen);
        this.simpleCopyFilter = new simpleCopyFilter_1.default(gl);
    }
    AbstractBlendDrawer.prototype._afterPrepare = function (gen) {
        var program = new shaderProgram_1.default(this.gl, gen.getVertexSource(), gen.getFragmentSource());
        this.spriteRectDrawer = new spriteRectDrawer_1.default(this.gl, program);
    };
    AbstractBlendDrawer.prototype.prepare = function (programGen) { };
    // destTex is copy or current destination texture
    // to avoid "Source and destination textures of the draw are the same" error
    AbstractBlendDrawer.prototype.draw = function (sourceTex, frameBuffer, uniforms) {
        var destTex = frameBuffer.texture;
        destTex = destTex.applyFilters([this.simpleCopyFilter], frameBuffer); // todo
        destTex.bind(1);
        uniforms.texture = 0;
        uniforms.destTexture = 1;
        this.spriteRectDrawer.draw(sourceTex, uniforms);
    };
    return AbstractBlendDrawer;
}());
exports.default = AbstractBlendDrawer;


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// this filter needs to copy texture to framebuffer
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var abstractFilter_1 = __webpack_require__(96);
var shaderProgramUtils_1 = __webpack_require__(7);
var SimpleCopyFilter = /** @class */ (function (_super) {
    __extends(SimpleCopyFilter, _super);
    function SimpleCopyFilter(gl) {
        return _super.call(this, gl) || this;
    }
    SimpleCopyFilter.prototype.prepare = function (programGen) {
        programGen.addFragmentUniform(shaderProgramUtils_1.GL_TYPE.FLOAT, 'u_mixFactor');
        programGen.setFragmentMainFn("\n            gl_FragColor = texture2D(texture, v_texCoord); \n        ");
    };
    return SimpleCopyFilter;
}(abstractFilter_1.default));
exports.default = SimpleCopyFilter;


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var shaderProgram_1 = __webpack_require__(5);
var spriteRectDrawer_1 = __webpack_require__(16);
var mat4 = __webpack_require__(10);
var texShaderGenerator_1 = __webpack_require__(14);
var makePositionMatrix = function (dstX, dstY, dstWidth, dstHeight) {
    var projectionMatrix = mat4.ortho(0, dstWidth, 0, dstHeight, -1, 1);
    var scaleMatrix = mat4.makeScale(dstWidth, dstHeight, 1);
    return mat4.matrixMultiply(scaleMatrix, projectionMatrix);
};
var identity = mat4.makeIdentity();
var AbstractFilter = /** @class */ (function () {
    function AbstractFilter(gl) {
        this.spriteRectDrawer = null;
        this.uniformsToSet = {};
        if (true && !gl) {
            console.error(this);
            throw "can not create Filter, gl context not passed to constructor, expected: Filter(gl)";
        }
        this.gl = gl;
        var gen = new texShaderGenerator_1.default();
        this.prepare(gen);
        this._afterPrepare(gen);
    }
    AbstractFilter.prototype.prepare = function (gen) { };
    AbstractFilter.prototype._afterPrepare = function (gen) {
        var program = new shaderProgram_1.default(this.gl, gen.getVertexSource(), gen.getFragmentSource());
        this.spriteRectDrawer = new spriteRectDrawer_1.default(this.gl, program);
    };
    AbstractFilter.prototype.doFilter = function (srcTexture, destFrameBuffer) {
        destFrameBuffer.bind();
        var w = srcTexture.size.width;
        var h = srcTexture.size.height;
        this.uniformsToSet.u_textureMatrix = identity;
        this.uniformsToSet.u_vertexMatrix = makePositionMatrix(0, 0, w, h);
        this.spriteRectDrawer.draw(srcTexture, this.uniformsToSet);
    };
    AbstractFilter.prototype.setParam = function (name, value) {
        this.uniformsToSet[name] = value;
    };
    return AbstractFilter;
}());
exports.default = AbstractFilter;


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var models = __webpack_require__(34);
var Repository = /** @class */ (function () {
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
exports.default = Repository;


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var draggable_1 = __webpack_require__(99);
exports.Draggable = draggable_1.default;
var control4Dir_1 = __webpack_require__(100);
exports.Control4Dir = control4Dir_1.default;
var control2Dir_1 = __webpack_require__(102);
exports.Control2Dir = control2Dir_1.default;


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var baseAbstractBehaviour_1 = __webpack_require__(28);
var DraggableBehaviour = /** @class */ (function (_super) {
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
        gameObject.on('click', function (e) {
            _this.points[DraggableBehaviour._getEventId(e)] = {
                mX: e.objectX,
                mY: e.objectY,
                target: gameObject,
                preventDefault: function () {
                    this.defaultPrevented = true;
                }
            };
        });
        var scene = this.game.getCurrScene();
        scene.on('mouseDown', function (e) {
            var pointId = DraggableBehaviour._getEventId(e);
            var point = _this.points[pointId];
            if (!point)
                return;
            point.dragStartX = point.target.pos.x;
            point.dragStartY = point.target.pos.y;
        });
        scene.on('mouseMove', function (e) {
            var pointId = DraggableBehaviour._getEventId(e);
            var point = _this.points[pointId];
            if (!point)
                return;
            if (!point.dragStart) {
                point.dragStart = true;
                point.target.trigger('dragStart', point);
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
        scene.on('mouseUp', function (e) {
            var pointId = DraggableBehaviour._getEventId(e);
            var point = _this.points[pointId];
            if (!point)
                return;
            if (point.dragStart) {
                point.x = gameObject.pos.x;
                point.y = gameObject.pos.y;
                point.target.trigger('dragStop', point);
            }
            delete _this.points[pointId];
        });
        this.blurListener = function (e) {
            scene.trigger('mouseUp', e);
        };
        this.game.renderer.container.addEventListener('mouseleave', this.blurListener);
    };
    DraggableBehaviour.prototype.destroy = function () {
        this.game.renderer.container.removeEventListener('mouseleave', this.blurListener);
    };
    return DraggableBehaviour;
}(baseAbstractBehaviour_1.default));
exports.default = DraggableBehaviour;


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var move4Dir_1 = __webpack_require__(101);
var Control4Dir = /** @class */ (function (_super) {
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
            go.rigidBody.vel.y = -parameters.velocity;
            this.go('Up');
        }
        if (keyboard.isPressed(keyboard.KEY.DOWN) || keyboard.isPressed(keyboard.KEY.GAME_PAD_AXIS_DOWN)) {
            go.rigidBody.vel.y = parameters.velocity;
            this.go('Down');
        }
        if (keyboard.isPressed(keyboard.KEY.LEFT) || keyboard.isPressed(keyboard.KEY.GAME_PAD_AXIS_LEFT)) {
            go.rigidBody.vel.x = -parameters.velocity;
            this.go('Left');
        }
        if (keyboard.isPressed(keyboard.KEY.RIGHT) || keyboard.isPressed(keyboard.KEY.GAME_PAD_AXIS_RIGHT)) {
            go.rigidBody.vel.x = parameters.velocity;
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
}(move4Dir_1.default));
exports.default = Control4Dir;


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var moveable_1 = __webpack_require__(45);
var Move4Dir = /** @class */ (function (_super) {
    __extends(Move4Dir, _super);
    function Move4Dir(game) {
        return _super.call(this, game) || this;
    }
    Move4Dir.prototype.manage = function (gameObject, parameters) {
        _super.prototype.manage.call(this, gameObject, parameters, Move4Dir.DIRS);
    };
    Move4Dir.prototype.stop = function () {
        _super.prototype.stop.call(this);
        this.gameObject.rigidBody.vel.x = 0;
        this.gameObject.rigidBody.vel.y = 0;
    };
    Move4Dir.DIRS = ['Left', 'Right', 'Up', 'Down'];
    return Move4Dir;
}(moveable_1.default));
exports.default = Move4Dir;


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var move2Dir_1 = __webpack_require__(103);
var Control2Dir = /** @class */ (function (_super) {
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
        if (keyboard.isPressed(keyboard.KEY.LEFT) || keyboard.isPressed(keyboard.KEY.GAME_PAD_AXIS_LEFT)) {
            go.rigidBody.vel.x = -parameters['velocity'];
            this.go('Left');
        }
        if (keyboard.isPressed(keyboard.KEY.RIGHT) || keyboard.isPressed(keyboard.KEY.GAME_PAD_AXIS_RIGHT)) {
            go.rigidBody.vel.x = parameters['velocity'];
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
}(move2Dir_1.default));
exports.default = Control2Dir;


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var moveable_1 = __webpack_require__(45);
var Move2Dir = /** @class */ (function (_super) {
    __extends(Move2Dir, _super);
    function Move2Dir(game) {
        return _super.call(this, game) || this;
    }
    Move2Dir.prototype.manage = function (gameObject, parameters) {
        _super.prototype.manage.call(this, gameObject, parameters, Move2Dir.DIRS);
    };
    Move2Dir.prototype.stop = function () {
        _super.prototype.stop.call(this);
        this.gameObject.rigidBody.vel.x = 0;
    };
    Move2Dir.DIRS = ['Left', 'Right'];
    return Move2Dir;
}(moveable_1.default));
exports.default = Move2Dir;


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var mathEx = __webpack_require__(4);
var point2d_1 = __webpack_require__(2);
var objectPool_1 = __webpack_require__(20);
var MousePoint = /** @class */ (function (_super) {
    __extends(MousePoint, _super);
    function MousePoint() {
        return _super.call(this) || this;
    }
    MousePoint.fromPool = function () {
        return MousePoint.mousePointsPool.getNextObject();
    };
    MousePoint.mousePointsPool = new objectPool_1.default(MousePoint);
    return MousePoint;
}(point2d_1.default));
var Mouse = /** @class */ (function () {
    function Mouse(game) {
        this.objectsCaptured = {};
        this.container = null;
        this.game = game;
    }
    //MouseEvent|TouchEvent|PointerEvent
    Mouse.prototype.resolvePoint = function (e) {
        var game = this.game;
        var screenX = (e.clientX - game.pos.x) / game.scale.x;
        var screenY = (e.clientY - game.pos.y) / game.scale.y;
        var p = game.camera.screenToWorld(point2d_1.default.fromPool().setXY(screenX, screenY));
        var mousePoint = MousePoint.fromPool();
        mousePoint.set(p);
        mousePoint.screenX = screenX;
        mousePoint.screenY = screenY;
        mousePoint.id = e.identifier || 0;
        return mousePoint;
    };
    Mouse.prototype.triggerEvent = function (e, eventName, isMouseDown) {
        if (isMouseDown === undefined)
            isMouseDown = false;
        var g = this.game;
        var scene = g.getCurrScene();
        if (!scene)
            return;
        var point = this.resolvePoint(e);
        exit: for (var i = 0; i < scene.layers.length; i++) {
            var layer = scene.layers[scene.layers.length - 1 - i];
            for (var j = 0; j < layer.gameObjects.length; j++) {
                var go = layer.gameObjects[j];
                if (mathEx.isPointInRect(point, go.getRect())) {
                    go.trigger(eventName, {
                        screenX: point.x,
                        screenY: point.y,
                        objectX: point.x - go.pos.x,
                        objectY: point.y - go.pos.y,
                        id: point.id,
                        target: go,
                        isMouseDown: isMouseDown
                    });
                    break exit;
                }
            }
        }
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
        this.triggerEvent(e, 'click');
        this.triggerEvent(e, 'mouseDown');
    };
    Mouse.prototype.resolveMouseMove = function (e, isMouseDown) {
        var point = this.triggerEvent(e, 'mouseMove', isMouseDown);
        if (!point)
            return;
        var lastMouseDownObject = this.objectsCaptured[point.id];
        if (lastMouseDownObject && lastMouseDownObject !== point.target) {
            lastMouseDownObject.trigger('mouseLeave');
            delete this.objectsCaptured[point.id];
        }
        if (point.target && lastMouseDownObject !== point.target) {
            point.target.trigger('mouseEnter');
            this.objectsCaptured[point.id] = point.target;
        }
    };
    Mouse.prototype.resolveMouseUp = function (e) {
        var point = this.triggerEvent(e, 'mouseUp');
        if (!point)
            return;
        var lastMouseDownObject = this.objectsCaptured[point.id];
        if (!lastMouseDownObject)
            return;
        lastMouseDownObject.trigger('mouseUp');
        delete this.objectsCaptured[point.id];
    };
    Mouse.prototype.resolveDoubleClick = function (e) {
        var point = this.triggerEvent(e, 'doubleClick');
        if (!point)
            return;
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
            (e.button === 0) && _this.resolveClick(e);
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
exports.default = Mouse;


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var KEY_JUST_PRESSED = 2;
var KEY_PRESSED = 1;
var KEY_JUST_RELEASED = 0;
var KEY_RELEASED = -1;
var Keyboard = /** @class */ (function () {
    function Keyboard(game) {
        this.keyDownListener = null;
        this.keyUpListener = null;
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
        this.buffer = {};
        this.game = game;
    }
    Keyboard.prototype.press = function (key) {
        if (this.isPressed(key))
            return;
        //console.log('pressed',key);
        this.buffer[key] = KEY_JUST_PRESSED;
    };
    Keyboard.prototype.release = function (key) {
        if (this.isReleased(key))
            return;
        this.buffer[key] = KEY_JUST_RELEASED;
    };
    Keyboard.prototype.isPressed = function (key) {
        return this.buffer[key] >= KEY_PRESSED;
    };
    Keyboard.prototype.isJustPressed = function (key) {
        return this.buffer[key] === KEY_JUST_PRESSED;
    };
    Keyboard.prototype.isReleased = function (key) {
        if (this.buffer[key] === undefined)
            return true;
        return this.buffer[key] <= KEY_JUST_RELEASED;
    };
    Keyboard.prototype.isJustReleased = function (key) {
        return this.buffer[key] === KEY_JUST_RELEASED;
    };
    Keyboard.prototype.update = function () {
        var _this = this;
        Object.keys(this.buffer).forEach(function (key) {
            if (_this.buffer[key] === KEY_RELEASED)
                delete _this.buffer[key];
            else if (_this.buffer[key] === KEY_JUST_RELEASED)
                _this.buffer[key] = KEY_RELEASED;
            if (_this.buffer[key] === KEY_JUST_PRESSED) {
                _this.buffer[key] = KEY_PRESSED;
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
exports.default = Keyboard;


/***/ }),
/* 106 */
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
var GamePad = /** @class */ (function () {
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
                maxButtons = 7; // only 8-buttons gamePad is supported for now
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
                continue; // to avoid oscillations
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
exports.default = GamePad;


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var mathEx_1 = __webpack_require__(4);
var Collider = /** @class */ (function () {
    function Collider(game) {
        this.game = game;
    }
    Collider.prototype.moveBy = function (player, deltaPoint) {
        var rigidObjects = this.game.getCurrScene().getAllGameObjects().
            concat(this.game._currentScene.tileMap.getTilesAtRect(player.getRect()));
        var playerRect = player.getRect();
        var playerRigidBody = player.rigidBody;
        playerRect.x += deltaPoint.x;
        playerRect.y += deltaPoint.y;
        var collidedByX = false, collidedByY = false;
        var expectedY = player.pos.y + deltaPoint.y;
        playerRigidBody._onFloorInPrevFrame = playerRigidBody._onFloorInCurrFrame;
        for (var i = 0, len = rigidObjects.length; i < len; i++) {
            var obstacle = rigidObjects[i];
            if (obstacle.rigidBody === null)
                continue;
            var obstacleRect = obstacle.getRect();
            if (player !== rigidObjects[i] && mathEx_1.overlapTest(playerRect, obstacleRect)) {
                var pathToTop = playerRect.bottom - obstacleRect.y;
                var pathToBottom = obstacleRect.bottom - playerRect.y;
                var pathToLeft = playerRect.x + playerRect.width - obstacleRect.x;
                var pathToRight = obstacleRect.right - playerRect.x;
                var minPath = Math.min(pathToTop, pathToBottom, pathToLeft, pathToRight);
                if (pathToTop === minPath) {
                    player.pos.setY(obstacleRect.y - playerRect.height);
                    collidedByY = true;
                }
                else if (pathToBottom === minPath) {
                    player.pos.setY(obstacleRect.bottom);
                    collidedByY = true;
                    playerRigidBody.vel.setY(0);
                }
                else if (pathToLeft === minPath) {
                    player.pos.setX(obstacleRect.x - playerRect.width);
                    collidedByX = true;
                    playerRigidBody.vel.setX(0);
                }
                else if (pathToRight === minPath) {
                    player.pos.setX(obstacleRect.x + obstacleRect.width);
                    collidedByX = true;
                    playerRigidBody.vel.setX(0);
                }
            }
        }
        if (!collidedByX) {
            player.pos.addX(deltaPoint.x);
        }
        if (!collidedByY) {
            player.pos.addY(deltaPoint.y);
        }
        playerRigidBody._onFloorInCurrFrame = expectedY > player.pos.y;
        playerRigidBody.onFloor =
            playerRigidBody.vel.y >= 0 &&
                (playerRigidBody._onFloorInPrevFrame || playerRigidBody._onFloorInCurrFrame);
        if (player.rigidBody.onFloor)
            player.rigidBody.vel.setY(0);
    };
    Collider.prototype.moveTo = function (player, point) {
        var pRect = player.getRect();
        var collided = false;
        if (player.rigidBody) {
            this.game.getCurrScene().getAllGameObjects().
                concat(this.game._currentScene.tileMap.getTilesAtRect(pRect)).
                some(function (g) {
                if (mathEx_1.overlapTest(pRect, g.getRect())) {
                    collided = true;
                    return true;
                }
            });
        }
        if (collided)
            return;
        player.pos.setX(point.x);
        player.pos.setY(point.y);
    };
    return Collider;
}());
exports.default = Collider;


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tween_1 = __webpack_require__(39);
var mat4 = __webpack_require__(10);
var mathEx = __webpack_require__(4);
var rect_1 = __webpack_require__(6);
var point2d_1 = __webpack_require__(2);
var mathEx_1 = __webpack_require__(4);
var Camera = /** @class */ (function () {
    function Camera(game) {
        this.objFollowTo = null;
        this.scene = null;
        this.sceneWidth = 0;
        this.sceneHeight = 0;
        this.pos = new point2d_1.default(0, 0);
        this.scale = new point2d_1.default(1, 1);
        this.lastToleranceTime = 0;
        this._rect = new rect_1.default();
        this._rectScaled = new rect_1.default();
        this.cameraShakeTween = null;
        this.cameraPosCorrection = {
            current: new point2d_1.default(),
            max: new point2d_1.default()
        };
        this.game = game;
    }
    Camera.prototype.followTo = function (gameObject) {
        if (gameObject === null)
            return;
        if (true && gameObject === undefined)
            throw "Camera:followTo(gameObject) - gameObject not provided";
        this.objFollowTo = gameObject;
        this.scene = this.game.getCurrScene();
        if (this.scene.tileMap.spriteSheet) {
            this.sceneWidth = this.scene.tileMap.spriteSheet._frameWidth * this.scene.tileMap.width;
            this.sceneHeight = this.scene.tileMap.spriteSheet._frameHeight * this.scene.tileMap.height;
        }
        else {
            this.sceneWidth = this.game.getCurrScene().width || this.game.width;
            this.sceneHeight = this.game.getCurrScene().height || this.game.height;
        }
    };
    Camera.prototype.update = function (currTime, delta) {
        var gameObject = this.objFollowTo;
        if (!gameObject)
            return;
        var tileWidth = this.scene.tileMap.spriteSheet ? this.scene.tileMap.spriteSheet._frameWidth : 0; // todo ?
        var tileHeight = this.scene.tileMap.spriteSheet ? this.scene.tileMap.spriteSheet._frameHeight : 0;
        var w = this.game.width;
        var h = this.game.height;
        var wDiv2 = w / 2;
        var hDiv2 = h / 2;
        var wScaled = this.getRectScaled().width;
        if (gameObject['_lastDirection'] === 'Right')
            this.cameraPosCorrection.max.x = wScaled / 3; // todo _lastDirection
        if (gameObject['_lastDirection'] === 'Left')
            this.cameraPosCorrection.max.x = -wScaled / 3;
        var currCorrection = this.cameraPosCorrection.max.
            substract(this.cameraPosCorrection.current).
            multiply(0.05);
        this.cameraPosCorrection.current.add(currCorrection);
        var newPos = point2d_1.default.fromPool();
        var pointToFollow = point2d_1.default.fromPool();
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
        this._updateRect();
        this.render();
    };
    Camera.prototype.shake = function (amplitude, time) {
        var _this = this;
        var tweenTarget = { time: 0, point: new point2d_1.default(0, 0) };
        this.cameraShakeTween = new tween_1.default({
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
        var point00 = this.screenToWorld(point2d_1.default.fromPool().setXY(0, 0));
        var pointWH = this.screenToWorld(point2d_1.default.fromPool().setXY(this.game.width, this.game.height));
        this._rectScaled.set(point00.x, point00.y, pointWH.x - point00.x, pointWH.y - point00.y);
    };
    Camera.prototype.render = function () {
        this.game.renderer.translate(this.game.width / 2, this.game.height / 2);
        this.game.renderer.scale(this.scale.x, this.scale.y);
        // todo rotation does not work correctly yet
        //this.game.renderer.rotateZ(this.angle);
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
        this._rect.set(this.pos.x, this.pos.y, this.game.width, this.game.height);
        return this._rect;
    };
    Camera.prototype.getRectScaled = function () {
        return this._rectScaled;
    };
    return Camera;
}());
exports.default = Camera;


/***/ }),
/* 109 */
/***/ (function(module, exports) {

module.exports = "<app-modal id=\"colorPickerModal\" data-transclusion-id=\"colorPicker\"><div data-transclusion=\"content:#colorPicker\"><table><tr><td><input type=\"color\" data-model=\"currentColor.hex\" data-change=\"hexChanged()\"></td><td><input type=\"text\" data-model=\"currentColor.hex\" data-keyup=\"hexChanged()\"></td><td></td></tr><table class=\"width100\"><tr data-for=\"item in colorEnums\"><td data-style=\"{ color: item.left }\">{{item.left}}</td><td class=\"centerText\"><input class=\"vAlign\" type=\"range\" min=\"0\" max=\"255\" data-model=\"currentColor.RGB[item.key]\" data-input=\"rgbChanged()\" data-change=\"rgbChanged()\"><br><input class=\"small vAlign\" data-model=\"currentColor.RGB[item.key]\" data-change=\"rgbChanged()\"><hr></td><td data-style=\"{ color: item.right }\">{{item.right}}</td><td><div data-style=\"{ width: '5px', height: '5px', backgroundColor: getRawColor(currentColor.RGB,item.key) }\"></div></td></tr></table></table><button data-click=\"applyColor()\">{{i18n.get('edit')}}</button></div></app-modal>";

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var AnglePicker = /** @class */ (function () {
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
    AnglePicker = __decorate([
        RF.decorateComponent({
            name: 'app-angle-picker',
            template: __webpack_require__(111)
        })
    ], AnglePicker);
    return AnglePicker;
}());
exports.default = AnglePicker;


/***/ }),
/* 111 */
/***/ (function(module, exports) {

module.exports = "<div class=\"inlineBlock\" data-click=\"click($event)\" data-mousemove=\"mouseMove($event)\"><div data-container class=\"inlineBlock\"><svg viewBox=\"0 0 200 200\" width=\"30\" height=\"30\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"100\" cy=\"100\" r=\"100\" stroke=\"black\" stroke-width=\"1\" fill=\"white\"></circle><line id=\"line\" x1=\"100\" y1=\"100\" x2=\"200\" y2=\"100\" stroke=\"black\" stroke-width=\"2\" data-attributes=\"{transform:'rotate('+angleInDeg()+',100,100)'}\"></line></svg></div><div class=\"smallXX\" data-attributes=\"{title: object && (object[value]+' rad')}\">{{angleInDeg()}}&deg;</div></div>";

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var draggable_1 = __webpack_require__(113);
var DraggableDirective = /** @class */ (function () {
    function DraggableDirective() {
    }
    DraggableDirective.prototype.onMount = function (el, objVal) {
        draggable_1.draggable(el, objVal);
    };
    DraggableDirective = __decorate([
        RF.decorateComponent({
            name: 'app-draggable'
        })
    ], DraggableDirective);
    return DraggableDirective;
}());
exports.default = DraggableDirective;


/***/ }),
/* 113 */
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
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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
};
Object.defineProperty(exports, "__esModule", { value: true });
var baseComponent_1 = __webpack_require__(0);
__webpack_require__(115);
var userDefinedFns_1 = __webpack_require__(3);
var Explorer = /** @class */ (function (_super) {
    __extends(Explorer, _super);
    function Explorer() {
        return _super.call(this) || this;
    }
    Explorer.prototype.onShow = function () {
    };
    Explorer.prototype.onMount = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.editData;
                        return [4 /*yield*/, this.restProject.getAll()];
                    case 1:
                        _a.projects = _b.sent();
                        return [2 /*return*/];
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
        this.resourceHelper.loadProject(project.name);
    };
    Explorer.prototype.deleteProject = function (proj) {
        var _this = this;
        userDefinedFns_1.confirmEx(this.i18n.get('confirmQuestion')(proj), function () { return __awaiter(_this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.restFileSystem.deleteFolder('workspace/' + proj.name)];
                    case 1:
                        _b.sent();
                        _a = this.editData;
                        return [4 /*yield*/, this.restProject.getAll()];
                    case 2:
                        _a.projects = _b.sent();
                        return [2 /*return*/];
                }
            });
        }); });
    };
    Explorer = __decorate([
        RF.decorateComponent({
            name: 'explorer',
            template: __webpack_require__(116)
        })
    ], Explorer);
    return Explorer;
}(baseComponent_1.default));
exports.default = Explorer;


/***/ }),
/* 115 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 116 */
/***/ (function(module, exports) {

module.exports = "<div><div class=\"width50 marginAuto\"><h3 class=\"centerText\">{{i18n.get('projects')}}</h3><div class=\"table width100\"><div data-for=\"p in editData.projects\" class=\"row hoverOnProjectRow\"><div class=\"cell width100\"><div data-click=\"openProject(p)\" class=\"withPadding pointer\">{{p.name}}</div></div><div class=\"cell rightAlign\"><div class=\"edit\" data-click=\"editProject(p)\"></div></div><div class=\"cell rightAlign\"><div data-click=\"deleteProject(p)\" class=\"delete\"></div></div></div><div class=\"row\"><div class=\"cell\"><div class=\"withPadding\"><div class=\"add\" data-click=\"createProject()\"></div></div></div></div></div></div><app-project-dialog></app-project-dialog></div>";

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var baseComponent_1 = __webpack_require__(0);
__webpack_require__(118);
var Split = __webpack_require__(37);
var Editor = /** @class */ (function (_super) {
    __extends(Editor, _super);
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
    Editor = __decorate([
        RF.decorateComponent({
            name: 'editor',
            template: __webpack_require__(119)
        })
    ], Editor);
    return Editor;
}(baseComponent_1.default));
exports.default = Editor;


/***/ }),
/* 118 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 119 */
/***/ (function(module, exports) {

module.exports = "<div class=\"template\"><div class=\"absolute\"><app-top-panel id=\"topPanel\"></app-top-panel></div><div id=\"c\" class=\"split\"><div id=\"a\" class=\"split split-horizontal content\"><app-game-props></app-game-props><app-scenes></app-scenes><app-game-objects></app-game-objects><app-sprite-sheets></app-sprite-sheets><app-user-interface></app-user-interface><app-fonts></app-fonts><app-sounds></app-sounds><app-particle-systems></app-particle-systems></div><div id=\"b\" class=\"split split-horizontal content relative\"><app-script-editor></app-script-editor><div data-if=\"!editData.scriptEditorUrl\" class=\"table width100 height100\"><div class=\"row\"><div class=\"cell height100 vAlign\"><div data-style=\"{ width: editData.game.width + 'px', height: editData.game.height + 'px', overflow: 'auto', border: '1px solid green', margin: '0 auto' }\"><app-scene-central-panel></app-scene-central-panel></div></div></div></div></div><div id=\"e\" class=\"split split-horizontal content\"><app-scene-right-panel></app-scene-right-panel><app-game-object-right-panel></app-game-object-right-panel></div></div><div id=\"d\" class=\"split content\"></div><app-dialogs></app-dialogs></div>";

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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
};
Object.defineProperty(exports, "__esModule", { value: true });
var baseComponent_1 = __webpack_require__(0);
var ProjectDialog = /** @class */ (function (_super) {
    __extends(ProjectDialog, _super);
    function ProjectDialog() {
        return _super.call(this) || this;
    }
    ProjectDialog.prototype.createOrEditProject = function (proj) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!proj.oldName) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.restFileSystem.renameFolder('workspace/' + proj.oldName, 'workspace/' + proj.name)];
                    case 1:
                        _b.sent();
                        return [4 /*yield*/, this.restProject.getAll(function (list) {
                                _this.editData.projects = list;
                            })];
                    case 2:
                        _b.sent();
                        return [3 /*break*/, 6];
                    case 3: return [4 /*yield*/, this.restProject.create(proj.name)];
                    case 4:
                        _b.sent();
                        _a = this.editData;
                        return [4 /*yield*/, this.restProject.getAll()];
                    case 5:
                        _a.projects = _b.sent();
                        _b.label = 6;
                    case 6:
                        RF.getComponentById('projectDialog').close();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProjectDialog = __decorate([
        RF.decorateComponent({
            name: 'app-project-dialog',
            template: __webpack_require__(121)
        })
    ], ProjectDialog);
    return ProjectDialog;
}(baseComponent_1.default));
exports.default = ProjectDialog;


/***/ }),
/* 121 */
/***/ (function(module, exports) {

module.exports = "<app-modal id=\"projectDialog\"><div data-transclusion=\"content\"><form data-submit=\"createOrEditProject(editData.currProjectInEdit)\"><table class=\"width100\"><tr><td>{{i18n.get('name')}}</td><td><input required data-model=\"editData.currProjectInEdit.name\"></td></tr></table><button>{{editData.currProjectInEdit.oldName?i18n.get('edit'):i18n.get('create')}}</button></form></div></app-modal>";

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var baseComponent_1 = __webpack_require__(0);
var consts_1 = __webpack_require__(32);
var GameProps = /** @class */ (function (_super) {
    __extends(GameProps, _super);
    function GameProps() {
        var _this = _super.call(this) || this;
        _this.scales = consts_1.SCALE_STRATEGY;
        return _this;
    }
    GameProps.prototype.saveGameProps = function () {
        this.restResource.saveGameProps(this.editData.game.toJSON());
    };
    GameProps = __decorate([
        RF.decorateComponent({
            name: 'app-game-props',
            template: __webpack_require__(123)
        })
    ], GameProps);
    return GameProps;
}(baseComponent_1.default));
exports.default = GameProps;


/***/ }),
/* 123 */
/***/ (function(module, exports) {

module.exports = "<app-collapsible data-state=\"{title:i18n.get('game')}\"><div data-transclusion=\"content\"><form class=\"table width100\"><div class=\"row\"><div class=\"cell\">{{i18n.get('width')}}</div><div class=\"cell\"><input class=\"narrow\" data-model=\"editData.game.width\" type=\"number\" min=\"1\" max=\"20000\" data-change=\"form.valid() && saveGameProps()\"></div></div><div class=\"row\"><div class=\"cell\">{{i18n.get('height')}}</div><div class=\"cell\"><input class=\"narrow\" data-model=\"editData.game.height\" type=\"number\" min=\"1\" max=\"20000\" data-change=\"form.valid() && saveGameProps()\"></div></div><div class=\"row\"><div class=\"cell\" tille=\"{{i18n.get('gravityConstantTitle')}}\">{{i18n.get('gravityConstant')}}</div><div class=\"cell\"><input class=\"narrow\" data-model=\"editData.game.gravityConstant\" type=\"number\" min=\"0\" max=\"20000\" data-change=\"form.valid() && saveGameProps()\"></div></div><div class=\"row\"><div class=\"cell\">{{i18n.get('scaleStrategy')}}</div><div class=\"cell\"><select data-model=\"editData.game.scaleStrategy\" data-change=\"form.valid() && saveGameProps()\"><option data-value=\"value\" data-for=\"(value,key) in scales\">{{key}}</option></select></div></div><div class=\"row\"><div class=\"cell\">{{i18n.get('preloadingScene')}}</div><div class=\"cell\"><select data-model=\"editData.game.preloadingSceneId\" data-change=\"form.valid() && saveGameProps()\"><option value>--</option><option data-disabled=\"item.id==editData.gameProps.startSceneId\" data-value=\"item.id\" data-for=\"item in editData.game.repository.getArray('Scene')\">{{item.name}}</option></select></div></div><div class=\"row\"><div class=\"cell\">{{i18n.get('startScene')}}</div><div class=\"cell\"><select data-model=\"editData.game.startSceneId\" data-change=\"form.valid() && saveGameProps()\"><option data-disabled=\"item.id==editData.gameProps.preloadingSceneId\" data-value=\"item.id\" data-for=\"item in editData.game.repository.getArray('Scene')\">{{item.name}}</option></select></div></div></form></div></app-collapsible>";

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var baseComponent_1 = __webpack_require__(0);
var particleSystem_1 = __webpack_require__(27);
var userDefinedFns_1 = __webpack_require__(3);
var ParticleSystems = /** @class */ (function (_super) {
    __extends(ParticleSystems, _super);
    function ParticleSystems() {
        return _super.call(this) || this;
    }
    ParticleSystems.prototype.createParticleSystem = function () {
        this.editData.currParticleSystemInEdit =
            new particleSystem_1.default(this.editData.game);
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
        this.utils.deleteModel(model);
    };
    ParticleSystems = __decorate([
        RF.decorateComponent({
            name: 'app-particle-systems',
            template: __webpack_require__(125)
        })
    ], ParticleSystems);
    return ParticleSystems;
}(baseComponent_1.default));
exports.default = ParticleSystems;


/***/ }),
/* 125 */
/***/ (function(module, exports) {

module.exports = "<app-collapsible data-state=\"{ crud:{ create:createParticleSystem }, title:i18n.get('particleSystems') }\"><div data-transclusion=\"content\"><div class=\"withPaddingLeft\"><div class=\"table width100\"><div class=\"row\" data-for=\"ps in editData.game.repository.getArray('ParticleSystem')\"><div class=\"cell\"><span class=\"inlineBlock withPaddingTop withPaddingBottom\">{{ps.name}}</span></div><div class=\"cell width1\"><div class=\"edit\" data-click=\"editParticleSystem(ps)\"></div></div><div class=\"cell width1\"><div class=\"delete\" data-click=\"deleteParticleSystem(ps)\"></div></div></div></div></div></div></app-collapsible>";

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var baseComponent_1 = __webpack_require__(0);
var sound_1 = __webpack_require__(26);
var Sounds = /** @class */ (function (_super) {
    __extends(Sounds, _super);
    function Sounds() {
        return _super.call(this) || this;
    }
    Sounds.prototype.createSound = function () {
        this.editData.currSoundInEdit = new sound_1.default(this.editData.game);
        RF.getComponentById('soundDialog').open();
    };
    Sounds.prototype.editSound = function (sound) {
        this.editData.currSoundInEdit = sound.clone();
        RF.getComponentById('soundDialog').open();
    };
    Sounds.prototype.deleteSound = function (model) {
        var _this = this;
        this.utils.deleteModel(model, function () {
            _this.restFileSystem.removeFile(model.resourcePath);
        });
    };
    Sounds = __decorate([
        RF.decorateComponent({
            name: 'app-sounds',
            template: __webpack_require__(127)
        })
    ], Sounds);
    return Sounds;
}(baseComponent_1.default));
exports.default = Sounds;


/***/ }),
/* 127 */
/***/ (function(module, exports) {

module.exports = "<app-collapsible data-state=\"{ crud:{ create:createSound }, title:i18n.get('sounds') }\"><div data-transclusion=\"content\"><div class=\"withPaddingLeft\"><div class=\"table width100\"><div class=\"row\" data-for=\"sound in editData.game.repository.getArray('Sound')\"><div class=\"cell\"><span class=\"inlineBlock withPaddingTop withPaddingBottom\">{{sound.name}}</span></div><div class=\"cell width1\"><div class=\"edit\" data-click=\"editSound(sound)\"></div></div><div class=\"cell width1\"><div class=\"delete\" data-click=\"deleteSound(sound)\"></div></div></div></div></div></div></app-collapsible>";

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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
};
Object.defineProperty(exports, "__esModule", { value: true });
var baseComponent_1 = __webpack_require__(0);
var font_1 = __webpack_require__(25);
var Fonts = /** @class */ (function (_super) {
    __extends(Fonts, _super);
    function Fonts() {
        return _super.call(this) || this;
    }
    Fonts.prototype.createFont = function () {
        this.editData.currFontInEdit = new font_1.default(this.editData.game);
        RF.getComponentById('fontDialog').open();
    };
    Fonts.prototype.editFont = function (fnt) {
        this.editData.currFontInEdit = fnt.clone();
        RF.getComponentById('fontDialog').open();
    };
    Fonts.prototype.deleteFont = function (model) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.utils.deleteModel(model)];
                    case 1:
                        _a.sent();
                        this.restFileSystem.removeFile(model.resourcePath);
                        return [2 /*return*/];
                }
            });
        });
    };
    Fonts = __decorate([
        RF.decorateComponent({
            name: 'app-fonts',
            template: __webpack_require__(129)
        })
    ], Fonts);
    return Fonts;
}(baseComponent_1.default));
exports.default = Fonts;


/***/ }),
/* 129 */
/***/ (function(module, exports) {

module.exports = "<app-collapsible data-state=\"{ crud: {create:createFont}, title:i18n.get('fonts') }\"><div data-transclusion=\"content\"><div class=\"withPaddingLeft\"><div class=\"table width100\"><div class=\"row\" data-for=\"font in editData.game.repository.getArray('Font')\"><div class=\"cell\"><span class=\"inlineBlock withPaddingTop withPaddingBottom\">{{font.name}}</span></div><div class=\"cell width1\"><div class=\"edit\" data-click=\"editFont(font)\"></div></div><div class=\"cell width1\"><div class=\"delete\" data-click=\"deleteFont(font)\"></div></div></div></div></div></div></app-collapsible>";

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var baseComponent_1 = __webpack_require__(0);
__webpack_require__(131);
var spriteSheet_1 = __webpack_require__(15);
var userDefinedFns_1 = __webpack_require__(3);
var SpriteSheets = /** @class */ (function (_super) {
    __extends(SpriteSheets, _super);
    function SpriteSheets() {
        return _super.call(this) || this;
    }
    SpriteSheets.prototype.createSpriteSheet = function () {
        this.editData.currSpriteSheetInEdit = new spriteSheet_1.default(this.editData.game);
        RF.getComponentById('spriteSheetDialog').open();
    };
    SpriteSheets.prototype.editSpriteSheet = function (sprSh) {
        this.editData.currSpriteSheetInEdit = sprSh.clone();
        RF.getComponentById('spriteSheetDialog').open();
    };
    SpriteSheets.prototype.deleteSpriteSheet = function (model) {
        var _this = this;
        var hasDepends = this.editData.game.repository.getArray('GameObject').filter(function (it) { return it.spriteSheet.id == model.id; }).length > 0;
        if (hasDepends) {
            userDefinedFns_1.alertEx(this.i18n.canNotDelete(model));
            return;
        }
        this.utils.deleteModel(model, function () {
            _this.restFileSystem.removeFile(model.resourcePath);
        });
    };
    SpriteSheets = __decorate([
        RF.decorateComponent({
            name: 'app-sprite-sheets',
            template: __webpack_require__(132)
        })
    ], SpriteSheets);
    return SpriteSheets;
}(baseComponent_1.default));
exports.default = SpriteSheets;


/***/ }),
/* 131 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 132 */
/***/ (function(module, exports) {

module.exports = "<app-collapsible data-state=\"{ title: i18n.get('spriteSheets'), crud: { create:createSpriteSheet } }\"><div data-transclusion=\"content\"><div class=\"withPaddingLeft\"><div class=\"table width100\"><div class=\"row\" data-for=\"spriteSheet in editData.game.repository.getArray('SpriteSheet')\"><div class=\"cell\"><img class=\"spriteSheetThumb\" data-attributes=\"{ src: editData.projectName+'/'+spriteSheet.resourcePath, width: spriteSheet.width, height: spriteSheet.height }\"></div><div class=\"cell\"><span class=\"inlineBlock withPaddingTop withPaddingBottom\">{{spriteSheet.name}}</span></div><div class=\"cell width1\"><div class=\"edit\" data-click=\"editSpriteSheet(spriteSheet)\"></div></div><div class=\"cell width1\"><div class=\"delete\" data-click=\"deleteSpriteSheet(spriteSheet)\"></div></div></div></div></div></div></app-collapsible>";

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var baseComponent_1 = __webpack_require__(0);
var all_1 = __webpack_require__(34);
var userDefinedFns_1 = __webpack_require__(3);
var GameObject = /** @class */ (function (_super) {
    __extends(GameObject, _super);
    function GameObject() {
        return _super.call(this) || this;
    }
    GameObject.prototype.createGameObject = function () {
        this.editData.currGameObjectInEdit = new all_1.GameObjectProto(this.editData.game);
        RF.getComponentById('gameObjectModal').open();
    };
    GameObject.prototype.editGameObjectScript = function (model) {
        this.utils.openEditor("scripts/" + model.name + ".js");
    };
    GameObject.prototype.editGameObject = function (go) {
        this.editData.currGameObjectInEdit = go.clone();
        RF.getComponentById('gameObjectModal').open();
    };
    GameObject.prototype.deleteGameObject = function (model) {
        var _this = this;
        var scenesUsed = [];
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
            return userDefinedFns_1.alertEx(this.i18n.get('canNotDelete')(model, scenesUsed));
        this.utils.deleteModel(model, function () {
            _this.restFileSystem.removeFile("scripts/" + model.name + ".js");
        });
    };
    GameObject = __decorate([
        RF.decorateComponent({
            name: 'app-game-objects',
            template: __webpack_require__(134)
        })
    ], GameObject);
    return GameObject;
}(baseComponent_1.default));
exports.default = GameObject;


/***/ }),
/* 134 */
/***/ (function(module, exports) {

module.exports = "<app-collapsible data-state=\"{ title: i18n.get('gameObjects'), crud: { create:createGameObject } }\"><div data-transclusion=\"content\"><div class=\"withPaddingLeft\"><div class=\"table width100\"><div class=\"row\" data-for=\"gameObject in editData.game.repository.getArray('GameObjectProto')\"><app-game-object-row data-state=\"{ crud: { edit: editGameObject, editScript: editGameObjectScript, delete: deleteGameObject }, gameObject: gameObject || {}, draggable: true }\"></app-game-object-row></div></div></div></div></app-collapsible>";

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var baseComponent_1 = __webpack_require__(0);
/*global alertEx:true*/
__webpack_require__(136);
var userDefinedFns_1 = __webpack_require__(3);
var layer_1 = __webpack_require__(24);
var scene_1 = __webpack_require__(22);
var Scenes = /** @class */ (function (_super) {
    __extends(Scenes, _super);
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
        this.editData.currSceneInEdit = new scene_1.default(this.editData.game);
        RF.getComponentById('sceneModal').open();
    };
    Scenes.prototype.editScene = function (scene) {
        this.editData.currSceneInEdit = scene.clone();
        RF.getComponentById('sceneModal').open();
    };
    Scenes.prototype.deleteScene = function (scene) {
        var _this = this;
        if (scene.layers && scene.layers.length > 0) {
            userDefinedFns_1.alertEx(this.i18n.get('canNotDelete')(scene, scene.layers.rs));
            return;
        }
        this.utils.deleteModel(scene, function () {
            _this.restFileSystem.removeFile("scripts/" + scene.name + ".js");
        });
    };
    Scenes.prototype.createLayer = function (scene) {
        this.editData.currLayerInEdit = new layer_1.default(this.editData.game);
        this.editData.currLayerInEdit._scene = scene;
        RF.getComponentById('layerModal').open();
    };
    Scenes.prototype.editLayer = function (layer, scene) {
        this.editData.currLayerInEdit = new layer_1.default(this.editData.game);
        this.editData.currLayerInEdit._scene = scene;
        RF.getComponentById('layerModal').open();
    };
    Scenes.prototype.editScript = function (scene) {
        this.utils.openEditor("scripts/" + scene.name + ".js");
    };
    Scenes.prototype.deleteLayer = function (layer, scene) {
        var _this = this;
        if (layer.gameObjects.length)
            return userDefinedFns_1.alertEx(this.i18n.get('canNotDelete')(layer, layer.gameObjects));
        this.utils.deleteModel(layer, function () {
            scene.layers.remove(function (it) { return it.id == layer.id; });
            scene.updateCloner();
            _this.editData.game.repository.updateObject(scene);
            _this.restResource.save(scene);
        });
    };
    Scenes.prototype.createGameObject = function () {
        console.log('create go invoked');
    };
    Scenes.prototype.editGameObject = function (scene) {
        console.log('edit go invoked', scene);
    };
    Scenes.prototype.deleteGameObject = function (model) {
        var _this = this;
        var l = this.editData.currLayerInEdit;
        this.utils.deleteModel(model, function () {
            l.gameObjects.remove(function (it) { return it.id == model.id; });
            l.updateCloner();
            _this.editData.game.repository.updateObject(l);
            _this.restResource.save(l);
        });
    };
    Scenes = __decorate([
        RF.decorateComponent({
            name: 'app-scenes',
            template: __webpack_require__(137)
        })
    ], Scenes);
    return Scenes;
}(baseComponent_1.default));
exports.default = Scenes;


/***/ }),
/* 136 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 137 */
/***/ (function(module, exports) {

module.exports = "<app-collapsible data-transclusion-id=\"scenes\" data-state=\"{ crud: { create:createScene }, title: i18n.get('scenes') }\"><div data-transclusion=\"content:#scenes\"><div class=\"withPaddingLeft\" data-class=\"{ currScene:editData.currSceneInEdit==scene }\" data-for=\"scene in editData.game.repository.getArray('Scene')\" data-click=\"setCurrentScene(scene)\"><app-collapsible data-transclusion-id=\"currScene\" data-state=\"{ crud: { edit:editScene, delete:deleteScene, editScript: editScript }, object: scene, title: scene.name }\"><div data-transclusion=\"content:#currScene\"><div class=\"withPaddingLeft\"><app-collapsible data-transclusion-id=\"layers\" data-state=\"{ title: i18n.get('layers'), meta: scene, crud: { create: createLayer } }\"><div data-transclusion=\"content:#layers\"><div data-click=\"setCurrLayer(layer)\" data-for=\"layer in scene.layers\" class=\"withPaddingLeft\"><app-collapsible data-transclusion-id=\"currLayer\" data-state=\"{ object: layer, meta: scene, crud: { edit:editLayer, delete:deleteLayer }, title: layer.name }\"><div data-transclusion=\"content:#currLayer\"><div class=\"withPaddingLeft\"><div class=\"table width100\"><div data-class=\"{ currSceneGameObject: editData.currSceneGameObjectInEdit==gameObject }\" data-click=\"setCurrSceneGameObjectInEdit(gameObject)\" data-for=\"gameObject in layer.gameObjects\"><app-game-object-row data-state=\"{ gameObject: gameObject, crud: { delete: deleteGameObject }, }\"></app-game-object-row></div></div></div></div></app-collapsible></div></div></app-collapsible></div></div></app-collapsible></div></div></app-collapsible>";

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var baseComponent_1 = __webpack_require__(0);
var UserInterface = /** @class */ (function (_super) {
    __extends(UserInterface, _super);
    function UserInterface() {
        return _super.call(this) || this;
    }
    UserInterface = __decorate([
        RF.decorateComponent({
            name: 'app-user-interface',
            template: __webpack_require__(139)
        })
    ], UserInterface);
    return UserInterface;
}(baseComponent_1.default));
exports.default = UserInterface;


/***/ }),
/* 139 */
/***/ (function(module, exports) {

module.exports = "<app-collapsible data-state=\"{ title: i18n.get('userInterface') }\"><div data-transclusion=\"content\"><div class=\"withPaddingLeft\"><div class=\"table width100\"><div data-draggable=\"{obj:uiObject,src: 'leftPanel'}\" class=\"row\" data-for=\"uiObject in editData.ui\"><div class=\"cell\"><span class=\"inlineBlock withPaddingTop withPaddingBottom\">{{uiObject.type}}</span></div></div></div></div></div></app-collapsible>";

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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
};
Object.defineProperty(exports, "__esModule", { value: true });
var baseComponent_1 = __webpack_require__(0);
//opts: minify minify engineOnly embedResources embedScript
var w;
var TopPanel = /** @class */ (function (_super) {
    __extends(TopPanel, _super);
    function TopPanel() {
        return _super.call(this) || this;
    }
    TopPanel.prototype.openWindow = function () {
        var buildOpts = this.editData.buildOpts;
        if (buildOpts.windowed) {
            w = window.open("/" + this.editData.projectName + "/out", this.editData.projectName, "\n                left=" + (window.screen.width - this.editData.game.width) / 2 + ",\n                top=" + (window.screen.height - this.editData.game.height) / 2 + ",\n                width=" + this.editData.game.width + ",\n                height=" + this.editData.game.height + ",\n                toolbar=0,resizable=0");
        }
        else {
            w = window.open('/' + this.editData.projectName + '/out');
        }
    };
    TopPanel.prototype.run = function () {
        return __awaiter(this, void 0, void 0, function () {
            var buildOpts;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        buildOpts = this.editData.buildOpts;
                        if (w && w.document && w.document.body) {
                            w.document.title = w.document.body.innerHTML = 'loading...';
                        }
                        return [4 /*yield*/, this.http.get('/resource/generate', {
                                debug: buildOpts.debug ? '1' : '',
                                r: Math.random(),
                                projectName: this.editData.projectName,
                                minify: buildOpts.minify ? '1' : ''
                            })];
                    case 1:
                        _a.sent();
                        if (!w || w.closed) {
                            this.openWindow();
                            if (!w) {
                                RF.getComponentById('popupBlockedModal').open();
                            }
                        }
                        else {
                            w.location.reload();
                        }
                        w && w.focus();
                        return [2 /*return*/];
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
    TopPanel = __decorate([
        RF.decorateComponent({
            name: 'app-top-panel',
            template: __webpack_require__(141)
        })
    ], TopPanel);
    return TopPanel;
}(baseComponent_1.default));
exports.default = TopPanel;


/***/ }),
/* 141 */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel withPadding pointer\"><div class=\"inlineBlock withPadding\" data-click=\"showBuildDialog()\">{{i18n.get('build')}}</div><div class=\"inlineBlock withPadding\" data-click=\"run()\">{{i18n.get('run')}}</div><div class=\"inlineBlock withPadding\" data-click=\"toExplorer()\">{{i18n.get('explorer')}}</div></div><app-popup-blocked></app-popup-blocked>";

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var baseComponent_1 = __webpack_require__(0);
var w;
var PopupBlocked = /** @class */ (function (_super) {
    __extends(PopupBlocked, _super);
    function PopupBlocked() {
        return _super.call(this) || this;
    }
    PopupBlocked.prototype.openWindow = function () {
        RF.getComponentById('topPanel').openWindow();
        RF.getComponentById('popupBlockedModal').close();
    };
    PopupBlocked = __decorate([
        RF.decorateComponent({
            name: 'app-popup-blocked',
            template: "\n        <app-modal id=\"popupBlockedModal\">\n            <div data-transclusion=\"content\">\n                <div>\n                {{i18n.get('popupBlocked')}}\n                </div>\n                <button data-click=\"openWindow()\">{{i18n.get('tryAgain')}}</button>\n            </div>\n        </app-modal>\n    "
        })
    ], PopupBlocked);
    return PopupBlocked;
}(baseComponent_1.default));
exports.default = PopupBlocked;


/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var baseComponent_1 = __webpack_require__(0);
__webpack_require__(144);
var ScriptEditor = /** @class */ (function (_super) {
    __extends(ScriptEditor, _super);
    function ScriptEditor() {
        return _super.call(this) || this;
    }
    ScriptEditor.prototype.close = function () {
        this.editData.scriptEditorUrl = '';
    };
    ScriptEditor = __decorate([
        RF.decorateComponent({
            name: 'app-script-editor',
            template: __webpack_require__(145)
        })
    ], ScriptEditor);
    return ScriptEditor;
}(baseComponent_1.default));
exports.default = ScriptEditor;


/***/ }),
/* 144 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 145 */
/***/ (function(module, exports) {

module.exports = "<div class=\"height100 relative\" data-if=\"editData.scriptEditorUrl\"><div class=\"scriptEditorClose\" data-click=\"close()\">X</div><div style=\"height:10px;font-size: 10px;\">{{editData.scriptEditorUrl}}</div><div id=\"scriptEditor\" style=\"height:calc(100% - 10px)\"><iframe id=\"scriptEditorFrame\" frameborder=\"0\" class=\"block width100 height100 noOverFlow\" src=\"/editor\"></div></div>";

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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
};
Object.defineProperty(exports, "__esModule", { value: true });
var userDefinedFns_1 = __webpack_require__(3);
__webpack_require__(147);
var baseComponent_1 = __webpack_require__(0);
var gameObjectProto_1 = __webpack_require__(12);
var gameObject_1 = __webpack_require__(17);
var SceneCentralPanel = /** @class */ (function (_super) {
    __extends(SceneCentralPanel, _super);
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
        return __awaiter(this, void 0, void 0, function () {
            var json;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        go.pos = { x: x, y: y };
                        json = go.toJSON();
                        json.type === 'GameObject' && Object.keys(json).forEach(function (key) {
                            if (!['id', 'name', 'pos', 'font', 'scale', 'angle', 'alpha', 'type', 'layerId', 'gameObjectProto'].includes(key))
                                delete json[key];
                        });
                        return [4 /*yield*/, this.restResource.save(json, null)];
                    case 1:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SceneCentralPanel.prototype.onDropFromLeftPanel = function (droppedObj, e, coords) {
        return __awaiter(this, void 0, void 0, function () {
            var x, y, editData, Clazz, objInScene, firstFont, allTextFields, size, resp, l;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!droppedObj)
                            return [2 /*return*/, null];
                        if (droppedObj.src !== 'leftPanel')
                            return [2 /*return*/, null];
                        x = e.offsetX - coords.mouseX;
                        y = e.offsetY - coords.mouseY;
                        editData = this.editData;
                        Clazz = droppedObj.obj instanceof gameObjectProto_1.default ? gameObject_1.default : droppedObj.obj.constructor;
                        objInScene = new Clazz(editData.game);
                        if ('font' in objInScene && !objInScene.font) {
                            firstFont = editData.game.repository.getFirst('Font');
                            if (!firstFont) {
                                userDefinedFns_1.alertEx(this.i18n.get('noFont'));
                            }
                            objInScene.setFont(firstFont);
                            allTextFields = editData.game.repository.getArray('TextField');
                            size = (allTextFields && allTextFields.length) || 1;
                            objInScene.name = "textField" + size;
                            objInScene.setText(objInScene.name);
                        }
                        objInScene.pos = { x: x, y: y };
                        objInScene.layerId = editData.currLayerInEdit.id;
                        if (objInScene instanceof gameObject_1.default)
                            objInScene.gameObjectProto = droppedObj.obj;
                        return [4 /*yield*/, this.restResource.save(objInScene)];
                    case 1:
                        resp = _a.sent();
                        objInScene.id = resp.id;
                        editData.game.repository.addObject(objInScene);
                        editData.currLayerInEdit.addGameObject(objInScene);
                        l = editData.currLayerInEdit;
                        l.updateCloner();
                        editData.game.repository.updateObject(l);
                        this.restResource.save(l);
                        objInScene.revalidate();
                        return [2 /*return*/];
                }
            });
        });
    };
    SceneCentralPanel.prototype.onCentralSceneClick = function (e) {
        return __awaiter(this, void 0, void 0, function () {
            var tileMap, coords, x, y, index, tile;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.editData.editTileMapModeOn)
                            return [2 /*return*/];
                        if (this.editData.currTileIndexInEdit === null)
                            return [2 /*return*/];
                        tileMap = this.editData.currSceneInEdit.tileMap;
                        if (!tileMap)
                            return [2 /*return*/, null];
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
                        return [4 /*yield*/, this.restResource.saveTile(tile)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SceneCentralPanel = __decorate([
        RF.decorateComponent({
            name: 'app-scene-central-panel',
            template: __webpack_require__(148)
        })
    ], SceneCentralPanel);
    return SceneCentralPanel;
}(baseComponent_1.default));
exports.default = SceneCentralPanel;


/***/ }),
/* 147 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 148 */
/***/ (function(module, exports) {

module.exports = "<div class=\"height100 relative noOverFlow\" data-droppable=\"onDropFromLeftPanel\" data-click=\"onCentralSceneClick($event)\" data-style=\"{ backgroundColor: editData.currSceneInEdit.useBG?utils.rgbToCss(editData.currSceneInEdit.colorBG):'white' }\" data-draggable-container id=\"sceneDiv\"><div data-for=\"item in editData.currLayerInEdit.gameObjects\"><div data-if=\"item.type=='GameObject'\" app-draggable=\"{ target: item, onDragEnd: onDropFromCentralPanel }\" data-click=\"utils.assign(editData,'currSceneGameObjectInEdit',item)\" data-style=\"utils.merge( utils.getGameObjectCss(item), { position:'absolute', left: item.fixedToCamera?(item.pos.x+'px'): item.pos.x - utils.tileFrameWidth() * editData.tileMapPosX + 'px', top: item.fixedToCamera?(item.pos.y+'px'): item.pos.y - utils.tileFrameHeight() * editData.tileMapPosY + 'px', } )\" data-class=\"{active:item==editData.currSceneGameObjectInEdit}\"></div><div data-if=\"item.type=='TextField'\" app-draggable=\"{ target: item, onDragEnd: onDropFromCentralPanel }\" data-click=\"utils.assign(editData,'currSceneGameObjectInEdit',item)\" data-style=\"utils.merge( utils.getGameObjectCss(item), { position:'absolute', left: item.pos.x - item.width * editData.tileMapPosX + 'px', top: item.pos.y - item.height * editData.tileMapPosY + 'px', backgroundColor:'rgb(0,222,0.1)', height:item.height+'px', width:item.width?item.width+'px':'10px', backgroundColor:item.width?'':'#ddd', backgroundImage:'none' } )\" data-class=\"{active:item==editData.currSceneGameObjectInEdit}\"><div style=\"position: relative;left:0;top:0;z-index:10\"><span data-style=\"getCharCss(item,ch)\" data-for=\"ch in item._chars\"></span></div></div></div></div>";

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var baseComponent_1 = __webpack_require__(0);
var SceneCursor = /** @class */ (function (_super) {
    __extends(SceneCursor, _super);
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
    SceneCursor = __decorate([
        RF.decorateComponent({
            name: 'app-scene-cursor',
            template: __webpack_require__(150)
        })
    ], SceneCursor);
    return SceneCursor;
}(baseComponent_1.default));
exports.default = SceneCursor;


/***/ }),
/* 150 */
/***/ (function(module, exports) {

module.exports = "<table><tr><td></td><td><button data-click=\"onKeyUp()\">&uarr;</button></td><td></td></tr><tr><td><button data-click=\"onKeyLeft()\">&larr;</button></td><td></td><td><button data-click=\"onKeyRight()\">&rarr;</button></td></tr><tr><td></td><td><button data-click=\"onKeyDown()\">&darr;</button></td><td></td></tr></table>";

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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
};
Object.defineProperty(exports, "__esModule", { value: true });
var baseComponent_1 = __webpack_require__(0);
__webpack_require__(152);
var tileMap_1 = __webpack_require__(23);
var SceneRightPanel = /** @class */ (function (_super) {
    __extends(SceneRightPanel, _super);
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
        return __awaiter(this, void 0, void 0, function () {
            var currScene, t, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        currScene = this.editData.currSceneInEdit;
                        t = new tileMap_1.default(this.editData.game);
                        return [4 /*yield*/, this.restResource.save(t)];
                    case 1:
                        res = _a.sent();
                        t.id = res.id;
                        this.editData.game.repository.addObject(t);
                        currScene.tileMap = t;
                        return [4 /*yield*/, this.restResource.save(currScene)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SceneRightPanel.prototype.setCurrSelectedTile = function (i) {
        this.editData.currTileIndexInEdit = i;
    };
    SceneRightPanel.prototype.editScene = function () {
        this.restResource.save(this.editData.currSceneInEdit);
    };
    SceneRightPanel.prototype.toggleEditMode = function () {
        this.editData.editTileMapModeOn = !this.editData.editTileMapModeOn;
    };
    SceneRightPanel.prototype.editTileMap = function () {
        return __awaiter(this, void 0, void 0, function () {
            var currScene, tileMap;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        currScene = this.editData.currSceneInEdit;
                        tileMap = currScene.tileMap;
                        return [4 /*yield*/, this.restResource.save(tileMap)];
                    case 1:
                        _a.sent();
                        this.editData.game.repository.updateObject(tileMap);
                        return [2 /*return*/];
                }
            });
        });
    };
    SceneRightPanel = __decorate([
        RF.decorateComponent({
            name: 'app-scene-right-panel',
            template: __webpack_require__(153)
        })
    ], SceneRightPanel);
    return SceneRightPanel;
}(baseComponent_1.default));
exports.default = SceneRightPanel;


/***/ }),
/* 152 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 153 */
/***/ (function(module, exports) {

module.exports = "<app-collapsible data-state=\"{title:i18n.get('currScene')}\"><div data-transclusion=\"content\"><div data-if=\"!editData.currSceneInEdit.id\">{{i18n.get('notSelected')}}</div><div class=\"withPadding\" data-if=\"editData.currSceneInEdit.id\"><b class=\"centerText\">{{i18n.get('scene')}} : {{editData.currSceneInEdit.name}}</b><div class=\"table width100\"><div class=\"row\"><div class=\"cell\"><label for=\"editData.currSceneInEdit.useBG\">{{i18n.get('useBG')}}</label></div><div class=\"cell\"><input type=\"checkbox\" id=\"editData.currSceneInEdit.useBG\" data-model=\"editData.currSceneInEdit.useBG\" data-change=\"editScene()\"></div></div><div class=\"row\"><div class=\"cell\">{{i18n.get('width')}}</div><div class=\"cell\"><input type=\"number\" data-model=\"editData.currSceneInEdit.width\" data-change=\"editScene()\"></div></div><div class=\"row\"><div class=\"cell\">{{i18n.get('height')}}</div><div class=\"cell\"><input type=\"number\" data-model=\"editData.currSceneInEdit.height\" data-change=\"editScene()\"></div></div><div class=\"row\" data-if=\"editData.currSceneInEdit.useBG\"><div class=\"cell\">{{i18n.get('colorBG')}}</div><div class=\"cell\"><app-color-picker data-state=\"{ model:editData.currSceneInEdit, field: 'colorBG', onChange: editScene }\"></app-color-picker></div></div><div class=\"row\"><div class=\"cell\"><hr></div><div class=\"cell\"><hr></div></div><div class=\"row\"><div class=\"cell valign bold\">{{i18n.get('tileMap')}}</div><div class=\"cell\"><div data-click=\"createTileMap()\" data-if=\"!editData.currSceneInEdit.tileMap.id\" class=\"add\"></div><div data-if=\"editData.currSceneInEdit.tileMap.id\" class=\"delete\"></div></div></div></div><div data-if=\"editData.currSceneInEdit.tileMap.id\" class=\"table width100\"><div class=\"row\"><div class=\"cell valign\">tileMap.width</div><div class=\"cell\"><input type=\"number\" min=\"0\" maxlength=\"3\" data-change=\"editTileMap()\" data-model=\"editData.currSceneInEdit.tileMap.width\"></div></div><div class=\"row\"><div class=\"cell valign\">tileMap.height</div><div class=\"cell\"><input type=\"number\" min=\"0\" maxlength=\"3\" data-change=\"editTileMap()\" data-model=\"editData.currSceneInEdit.tileMap.height\"></div></div><div class=\"row\"><div class=\"cell\">{{i18n.get('selected')}}</div><div class=\"cell\"><div data-class=\"{ inlineBlock:1, hoverOutline:1 }\" data-style=\"{ width:utils.tileFrameWidth()+'px', verticalAlign:'middle', height:utils.tileFrameHeight()+'px', backgroundImage: utils.tileResourcePath({strict:true}), backgroundPositionX: -utils.tileFramePosX(editData.currTileIndexInEdit)+'px', backgroundPositionY: -utils.tileFramePosY(editData.currTileIndexInEdit)+'px', backgroundRepeat: 'no-repeat' }\"></div><button data-if=\"editData.currTileIndexInEdit!=null\" data-click=\"utils.assign(editData,'currTileIndexInEdit',null)\">{{i18n.get('unset')}}</button></div></div><div class=\"row\"><div class=\"cell\">{{i18n.get('spriteSheets')}}</div><div class=\"cell\"><select data-change=\"editTileMap()\" data-model=\"editData.currSceneInEdit.tileMap.spriteSheet\"><option value>--</option><option data-for=\"item in editData.game.repository.getArray('SpriteSheet') track by id\" data-value=\"item\">{{item.name}}</option></select></div></div></div><div class=\"row\"><div data-click=\"toggleEditMode()\" data-class=\"{ editModeOn:editData.editTileMapModeOn, edit:1 }\"></div><span class=\"small\">(shift)</span></div><div data-style=\"{ width: utils.tileFrameWidth()*utils.tileNumOfFramesH()+'px', overflowX: 'auto', padding: '2px' }\"><div data-class=\"{ inlineBlock:true, selected:i==editData.currTileIndexInEdit, hoverOutline:1 }\" data-style=\"{ width:utils.tileFrameWidth()+'px', verticalAlign:'middle', height:utils.tileFrameHeight()+'px', backgroundImage: utils.tileResourcePath(), backgroundPositionX: -utils.tileFramePosX(i)+'px', backgroundPositionY: -utils.tileFramePosY(i)+'px', backgroundRepeat: 'no-repeat' }\" data-title=\"i\" data-click=\"setCurrSelectedTile(i)\" data-for=\"v,i in utils.getArray(numOfFramesForSceneSpriteSheet())\"></div></div></div></div></app-collapsible>";

/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var baseComponent_1 = __webpack_require__(0);
var GameObjectRightPanel = /** @class */ (function (_super) {
    __extends(GameObjectRightPanel, _super);
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
    GameObjectRightPanel = __decorate([
        RF.decorateComponent({
            name: 'app-game-object-right-panel',
            template: __webpack_require__(155)
        })
    ], GameObjectRightPanel);
    return GameObjectRightPanel;
}(baseComponent_1.default));
exports.default = GameObjectRightPanel;


/***/ }),
/* 155 */
/***/ (function(module, exports) {

module.exports = "<app-collapsible data-state=\"{ title: i18n.get('currGameObject') }\"><div data-transclusion=\"content\"><div data-if=\"!editData.currSceneGameObjectInEdit.id\">{{i18n.get('notSelected')}}</div><div class=\"withPadding\" data-if=\"editData.currSceneGameObjectInEdit.id\"><h3 class=\"centerText\">{{editData.currSceneGameObjectInEdit.type}}</h3><div class=\"table width100\"><div class=\"row\"><div class=\"cell\">id</div><div class=\"cell\">{{editData.currSceneGameObjectInEdit.id}}</div></div><div class=\"row\"><div class=\"cell\">name</div><div class=\"cell\"><input required data-change=\"editGameObject()\" class=\"width100\" data-model=\"editData.currSceneGameObjectInEdit.name\"></div></div><div class=\"row\"><div class=\"cell\">pos.x</div><div class=\"cell\"><input data-change=\"editGameObject()\" type=\"number\" class=\"width100\" required data-model=\"editData.currSceneGameObjectInEdit.pos.x\"></div></div><div class=\"row\"><div class=\"cell\">pos.y</div><div class=\"cell\"><input data-change=\"editGameObject()\" type=\"number\" class=\"width100\" required data-model=\"editData.currSceneGameObjectInEdit.pos.y\"></div></div><div class=\"row\"><div class=\"cell\">scale.x</div><div class=\"cell\"><input data-change=\"editGameObject()\" type=\"number\" step=\"0.1\" class=\"width100\" required data-model=\"editData.currSceneGameObjectInEdit.scale.x\"></div></div><div class=\"row\"><div class=\"cell\">scale.y</div><div class=\"cell\"><input data-change=\"editGameObject()\" type=\"number\" step=\"0.1\" class=\"width100\" required data-model=\"editData.currSceneGameObjectInEdit.scale.y\"></div></div><div class=\"row\"><div class=\"cell\">{{i18n.get('width')}}</div><div class=\"cell\"><input data-change=\"editGameObject()\" type=\"number\" class=\"width100\" step=\"1\" required data-model=\"editData.currSceneGameObjectInEdit.width\"></div></div><div class=\"row\"><div class=\"cell\">{{i18n.get('height')}}</div><div class=\"cell\"><input data-change=\"editGameObject()\" type=\"number\" class=\"width100\" step=\"1\" required data-model=\"editData.currSceneGameObjectInEdit.height\"></div></div><div class=\"row\"><div class=\"cell\">{{i18n.get('angle')}}</div><div class=\"cell\"><input data-change=\"editGameObject()\" type=\"number\" class=\"width100\" step=\"0.1\" required data-model=\"editData.currSceneGameObjectInEdit.angle\"></div></div><div class=\"row\"><div class=\"cell\">alpha</div><div class=\"cell\"><input data-change=\"editGameObject()\" type=\"number\" class=\"width100\" step=\"0.1\" required min=\"0\" max=\"1\" data-model=\"editData.currSceneGameObjectInEdit.alpha\"></div></div><div class=\"row\"><div class=\"cell\">{{i18n.get('fixedToCamera')}}</div><div class=\"cell\"><input data-change=\"editGameObject()\" type=\"checkbox\" data-model=\"editData.currSceneGameObjectInEdit.fixedToCamera\" /></div></div><div class=\"row\"><div class=\"cell\">{{i18n.get('rigid')}}</div><div class=\"cell\"><input data-change=\"editGameObject()\" type=\"checkbox\" data-model=\"editData.currSceneGameObjectInEdit.rigid\" /></div></div><div class=\"row\" data-if=\"editData.currSceneGameObjectInEdit.type=='TextField'\"><div class=\"cell\">{{i18n.get('text')}}</div><div class=\"cell\"><textarea data-model=\"editData.currSceneGameObjectInEdit.text\" data-change=\"setTextFieldText($event) || editGameObject()\"></textarea></div></div></div></div></div></app-collapsible>";

/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var baseComponent_1 = __webpack_require__(0);
var GameObjectRow = /** @class */ (function (_super) {
    __extends(GameObjectRow, _super);
    function GameObjectRow() {
        var _this = _super.call(this) || this;
        _this.crud = null;
        _this.gameObject = {};
        _this.draggable = false;
        return _this;
    }
    GameObjectRow = __decorate([
        RF.decorateComponent({
            name: 'app-game-object-row',
            template: __webpack_require__(157)
        })
    ], GameObjectRow);
    return GameObjectRow;
}(baseComponent_1.default));
exports.default = GameObjectRow;


/***/ }),
/* 157 */
/***/ (function(module, exports) {

module.exports = "<div><div class=\"cell width100\"><div data-style=\"utils.merge( utils.getGameObjectCss(gameObject), { zoom:utils.calcZoom(gameObject), transform: 'scale(1, 1) rotateZ(0deg)', opacity:1 } )\" data-draggable=\"draggable && {obj:gameObject,src: 'leftPanel'}\"></div></div><div class=\"cell\"><span class=\"inlineBlock withPaddingRight\"><span class=\"inlineBlock withPaddingTop withPaddingBottom\">{{gameObject.name}}</span></span></div><div class=\"cell width1\"><div data-if=\"crud && crud.editScript\" class=\"script\" data-click=\"crud.editScript(gameObject)\"></div></div><div class=\"cell width1\"><div data-if=\"crud && crud.edit\" class=\"edit\" data-click=\"crud.edit(gameObject)\"></div></div><div class=\"cell width1\"><div data-if=\"crud && crud.delete\" data-click=\"crud.delete(gameObject)\" class=\"delete\"></div></div></div>";

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var baseComponent_1 = __webpack_require__(0);
var Dialogs = /** @class */ (function (_super) {
    __extends(Dialogs, _super);
    function Dialogs() {
        return _super.call(this) || this;
    }
    Dialogs = __decorate([
        RF.decorateComponent({
            name: 'app-dialogs',
            template: __webpack_require__(159)
        })
    ], Dialogs);
    return Dialogs;
}(baseComponent_1.default));
exports.default = Dialogs;


/***/ }),
/* 159 */
/***/ (function(module, exports) {

module.exports = "<div><app-sound-dialog id=\"soundDialog\"></app-sound-dialog><app-particle-system-dialog></app-particle-system-dialog><app-font-dialog id=\"fontDialog\"></app-font-dialog><app-sprite-sheet-dialog id=\"spriteSheetDialog\"></app-sprite-sheet-dialog><app-game-object-dialog id=\"gameObjectDialog\"></app-game-object-dialog><app-scene-dialog></app-scene-dialog><app-layer-dialog></app-layer-dialog><app-build-dialog></app-build-dialog></div><app-color-picker-dialog id=\"colorPickerDialog\"></app-color-picker-dialog>";

/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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
};
Object.defineProperty(exports, "__esModule", { value: true });
var baseComponent_1 = __webpack_require__(0);
var ParticleSystemDialog = /** @class */ (function (_super) {
    __extends(ParticleSystemDialog, _super);
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
        return __awaiter(this, void 0, void 0, function () {
            var resp;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.restResource.save(model)];
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
                        return [2 /*return*/];
                }
            });
        });
    };
    ParticleSystemDialog = __decorate([
        RF.decorateComponent({
            name: 'app-particle-system-dialog',
            template: __webpack_require__(161)
        })
    ], ParticleSystemDialog);
    return ParticleSystemDialog;
}(baseComponent_1.default));
exports.default = ParticleSystemDialog;


/***/ }),
/* 161 */
/***/ (function(module, exports) {

module.exports = "<app-modal id=\"particleSystemModal\"><div data-transclusion=\"content\"><table class=\"width100\"><tr><td>{{i18n.get('name')}}</td><td></td><td><input required data-model=\"editData.currParticleSystemInEdit.name\"></td></tr><tr><td rowspan=\"2\">numOfParticlesToEmit</td><td>from</td><td><input required type=\"number\" data-model=\"editData.currParticleSystemInEdit.numOfParticlesToEmit.from\"></td></tr><tr><td>to</td><td><input required type=\"number\" data-model=\"editData.currParticleSystemInEdit.numOfParticlesToEmit.to\"></td></tr><tr><td rowspan=\"2\">particleVelocity</td><td>from</td><td><input required type=\"number\" data-model=\"editData.currParticleSystemInEdit.particleVelocity.from\"></td></tr><tr><td>to</td><td><input required type=\"number\" data-model=\"editData.currParticleSystemInEdit.particleVelocity.to\"></td></tr><tr><td rowspan=\"2\">particleLiveTime</td><td>from</td><td><input required type=\"number\" data-model=\"editData.currParticleSystemInEdit.particleLiveTime.from\"></td></tr><tr><td>to</td><td><input required type=\"number\" data-model=\"editData.currParticleSystemInEdit.particleLiveTime.to\"></td></tr><tr><td>emissionRadius</td><td></td><td><input required type=\"number\" data-model=\"editData.currParticleSystemInEdit.emissionRadius\"></td></tr><tr><td>particleAngle</td><td>from / to</td><td><app-angle-picker data-state=\"{ object:editData.currParticleSystemInEdit.particleAngle, value:'from' }\"></app-angle-picker><app-angle-picker data-state=\"{ object:editData.currParticleSystemInEdit.particleAngle, value:'to' }\"></app-angle-picker></td></tr><tr><td></td><td>{{i18n.get('gameObject')}}</td><td><table><tr><td><select required data-change=\"onGameObjectSelected(editData.currParticleSystemInEdit.gameObjectProto)\" data-model=\"editData.currParticleSystemInEdit.gameObjectProto\"><option>--</option><option data-value=\"item\" data-for=\"item in editData.game.repository.getArray('GameObjectProto') track by id\">{{item.name}}</option></select></td><td><div data-style=\"utils.merge( utils.getGameObjectCss(editData.currParticleSystemInEdit.gameObjectProto), { zoom:utils.calcZoom(editData.currParticleSystemInEdit.gameObjectProto) } )\"></div></td></tr></table></td></tr></table><button data-disabled=\"!form.valid()\" data-click=\"createOrEditPs(editData.currParticleSystemInEdit)\">{{editData.currParticleSystemInEdit.id?i18n.get('edit'):i18n.get('create')}}</button><button data-disabled=\"!form.valid()\" data-click=\"showPreview()\">{{i18n.get('preview')}}</button></div></app-modal><app-particle-system-preview-dialog id=\"particleSystemPreviewDialog\"></app-particle-system-preview-dialog>";

/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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
};
Object.defineProperty(exports, "__esModule", { value: true });
var baseComponent_1 = __webpack_require__(0);
var SoundDialog = /** @class */ (function (_super) {
    __extends(SoundDialog, _super);
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
        return __awaiter(this, void 0, void 0, function () {
            var resp;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this._file) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.restFileSystem.uploadFile(this._file, { path: this.editData.currSoundInEdit.resourcePath })];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        if (!this.editData.currSoundInEdit._lastPath) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.restFileSystem.removeFile(this.editData.currSoundInEdit._lastPath)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [4 /*yield*/, this.restResource.save(model)];
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
                        return [2 /*return*/];
                }
            });
        });
    };
    SoundDialog = __decorate([
        RF.decorateComponent({
            name: 'app-sound-dialog',
            template: __webpack_require__(163)
        })
    ], SoundDialog);
    return SoundDialog;
}(baseComponent_1.default));
exports.default = SoundDialog;


/***/ }),
/* 163 */
/***/ (function(module, exports) {

module.exports = "<app-modal id=\"soundModal\"><div data-transclusion=\"content\"><table class=\"width100\"><tr><td>{{i18n.get('name')}}</td></tr><tr><td><input required data-model=\"editData.currSoundInEdit.name\"></td></tr><tr><td><app-input-file data-state=\"{ onFilePicked: onFilePicked, title: i18n.get('loadSound'), accept: 'audio/*' }\"></app-input-file></td></tr><tr><td><audio data-if=\"soundUrl\" controls=\"controls\" data-attributes=\"{src:soundUrl}\"></audio></td></tr></table><button data-disabled=\"!(form.valid() && soundUrl)\" data-click=\"createOrEditSound(editData.currSoundInEdit)\">{{editData.currSoundInEdit.id?i18n.get('edit'):i18n.get('create')}}</button></div></app-modal>";

/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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
};
Object.defineProperty(exports, "__esModule", { value: true });
var baseComponent_1 = __webpack_require__(0);
var chrome_1 = __webpack_require__(165);
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
var FontDialog = /** @class */ (function (_super) {
    __extends(FontDialog, _super);
    function FontDialog() {
        var _this = _super.call(this) || this;
        _this.systemFontList = [];
        _this.fontSample = fontSample;
        return _this;
    }
    FontDialog.prototype.open = function () {
        var _this = this;
        if (!this.systemFontList.length) {
            chrome_1.default.requestToApi({ method: 'getFontList' }, function (list) {
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
        return __awaiter(this, void 0, void 0, function () {
            var strFont, file, resp;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        strFont = model.fontSize + 'px' + ' ' + model.fontFamily;
                        model.fontContext = getFontContext([{ from: 32, to: 150 }, { from: 1040, to: 1116 }], strFont, 320);
                        file = this.utils.dataURItoBlob(getFontImage(model.fontContext, strFont, this.utils.rgbToHex(model.fontColor)));
                        model.resourcePath = "resources/" + model.name + ".png";
                        return [4 /*yield*/, this.restFileSystem.uploadFile(file, {
                                path: model.resourcePath
                            })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.restResource.save(model)];
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
                        return [2 /*return*/];
                }
            });
        });
    };
    FontDialog = __decorate([
        RF.decorateComponent({
            name: 'app-font-dialog',
            template: __webpack_require__(166)
        })
    ], FontDialog);
    return FontDialog;
}(baseComponent_1.default));
exports.default = FontDialog;


/***/ }),
/* 165 */
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
var requestToApi = function (params, callBack) {
    var eventUUID = (~~Math.random() * 100) + new Date().getTime();
    events[eventUUID] = callBack;
    params.eventUUID = eventUUID;
    window.top.postMessage(params, '*');
};
exports.default = { requestToApi: requestToApi };


/***/ }),
/* 166 */
/***/ (function(module, exports) {

module.exports = "<app-modal id=\"fontModal\"><div data-transclusion=\"content\"><table class=\"width100\"><tr><td>{{i18n.get('selectFont')}}</td><td><select data-model=\"editData.currFontInEdit.fontFamily\" class=\"width100\"><option data-value=\"fnt.displayName\" data-for=\"fnt in systemFontList\">{{fnt.displayName}}</option></select></td></tr><tr><td>{{i18n.get('name')}}</td><td><input data-model=\"editData.currFontInEdit.name\" class=\"width100\"></td></tr><tr><td>{{i18n.get('fontSize')}}</td><td><input type=\"number\" min=\"1\" max=\"1000\" data-model=\"editData.currFontInEdit.fontSize\" class=\"width100\"></td></tr><tr><td>{{i18n.get('fontColor')}}</td><td><app-color-picker data-state=\"{ model:editData.currFontInEdit, field:'fontColor' }\"></app-color-picker></td></tr><tr><td colspan=\"2\"><input data-model=\"fontSample\" class=\"width100\"></td></tr><tr><td colspan=\"2\"><div data-style=\"{ fontFamily:editData.currFontInEdit.fontFamily, fontSize:editData.currFontInEdit.fontSize+'px', color:utils.rgbToHex(editData.currFontInEdit.fontColor) }\">{{fontSample}}</div></td></tr></table><button data-disabled=\"!form.valid()\" data-click=\"createOrEditFont(editData.currFontInEdit)\">{{editData.currFontInEdit.id?i18n.get('edit'):i18n.get('create')}}</button></div></app-modal>";

/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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
};
Object.defineProperty(exports, "__esModule", { value: true });
var baseComponent_1 = __webpack_require__(0);
var SpriteSheetDialog = /** @class */ (function (_super) {
    __extends(SpriteSheetDialog, _super);
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
                editData.projectName + "/" + editData.currSpriteSheetInEdit.resourcePath + "?" + Math.random();
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
        editData.currSpriteSheetInEdit._lastPath = this.editData.currSpriteSheetInEdit.resourcePath;
        editData.currSpriteSheetInEdit.resourcePath =
            "resources/" + editData.currSpriteSheetInEdit.name + "." + ext;
        if (editData.currSpriteSheetInEdit._lastPath == editData.currSpriteSheetInEdit.resourcePath)
            editData.currSpriteSheetInEdit._lastPath = null;
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
        return __awaiter(this, void 0, void 0, function () {
            var resp;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this._file) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.restFileSystem.uploadFile(this._file, { path: this.editData.currSpriteSheetInEdit.resourcePath })];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        if (!this.editData.currSpriteSheetInEdit._lastPath) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.restFileSystem.removeFile(this.editData.currSpriteSheetInEdit._lastPath)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [4 /*yield*/, this.restResource.save(model)];
                    case 5:
                        resp = _a.sent();
                        if (resp.created) {
                            model.id = resp.id;
                            this.editData.game.repository.addObject(model);
                        }
                        else if (resp.updated) {
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
                        return [2 /*return*/];
                }
            });
        });
    };
    SpriteSheetDialog = __decorate([
        RF.decorateComponent({
            name: 'app-sprite-sheet-dialog',
            template: __webpack_require__(168)
        })
    ], SpriteSheetDialog);
    return SpriteSheetDialog;
}(baseComponent_1.default));
exports.default = SpriteSheetDialog;


/***/ }),
/* 168 */
/***/ (function(module, exports) {

module.exports = "<app-modal id=\"spriteSheetModal\"><div data-transclusion=\"content\"><table class=\"width100\"><tr><td>{{i18n.get('name')}}</td><td><input data-model=\"editData.currSpriteSheetInEdit.name\"></td><td rowspan=\"6\"><div style=\"max-width:60vw;overflow: auto;padding:5px;\"><div class=\"relative\" data-style=\"{ 'background-image': 'url('+spriteSheetUrl+')', 'background-size': editData.currSpriteSheetInEdit.width+'px '+editData.currSpriteSheetInEdit.height+'px', 'width': editData.currSpriteSheetInEdit.width+'px', 'height': editData.currSpriteSheetInEdit.height+'px', }\"><div data-attributes=\"{title:i}\" data-for=\"i in utils.range(0,numOfSpriteSheetCells-1)\" data-style=\"{ 'display': 'inline-block', 'left': editData.currSpriteSheetInEdit.getFramePosX(i)+'px', 'top': editData.currSpriteSheetInEdit.getFramePosY(i)+'px', 'position': 'absolute', 'text-align': 'left', 'outline': '1px solid red', 'width': editData.currSpriteSheetInEdit._frameWidth+'px', 'height': editData.currSpriteSheetInEdit._frameHeight+'px' }\">{{i}}</div></div></div></td></tr><tr><td>{{i18n.get('image')}}</td><td><app-input-file data-state=\"{ onFilePicked: onFilePicked, title: i18n.get('loadImage'), accept: 'image/*' }\"></app-input-file></td></tr><tr><td>{{i18n.get('width')}}</td><td><input type=\"number\" min=\"1\" data-change=\"revalidate()\" data-model=\"editData.currSpriteSheetInEdit.width\"></td></tr><tr><td>{{i18n.get('height')}}</td><td><input type=\"number\" min=\"1\" data-change=\"revalidate()\" data-model=\"editData.currSpriteSheetInEdit.height\"></td></tr><tr><td>{{i18n.get('numOfFramesH')}}</td><td><input required min=\"1\" max=\"100\" type=\"number\" data-change=\"refreshNumOfCells()\" data-model=\"editData.currSpriteSheetInEdit.numOfFramesH\"></td></tr><tr><td>{{i18n.get('numOfFramesV')}}</td><td><input required min=\"1\" max=\"100\" type=\"number\" data-change=\"refreshNumOfCells()\" data-input=\"refreshNumOfCells()\" data-keyup=\"refreshNumOfCells()\" data-model=\"editData.currSpriteSheetInEdit.numOfFramesV\"></td></tr></table><button data-click=\"createOrEditSpriteSheet(editData.currSpriteSheetInEdit)\" data-disabled=\"!(form.valid() && editData.currSpriteSheetInEdit.resourcePath)\">{{editData.currSpriteSheetInEdit.id?i18n.get('edit'):i18n.get('create')}}</button></div></app-modal>";

/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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
};
Object.defineProperty(exports, "__esModule", { value: true });
var baseComponent_1 = __webpack_require__(0);
var frameAnimation_1 = __webpack_require__(21);
var userDefinedFns_1 = __webpack_require__(3);
/*global alertEx:true*/
var GameObjectDialog = /** @class */ (function (_super) {
    __extends(GameObjectDialog, _super);
    function GameObjectDialog() {
        var _this = _super.call(this) || this;
        _this.selectedBehaviourId = '';
        return _this;
    }
    GameObjectDialog.prototype.createOrEditGameObject = function (g) {
        return __awaiter(this, void 0, void 0, function () {
            var resp, name_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.restResource.save(g)];
                    case 1:
                        resp = _a.sent();
                        if (!resp.created) return [3 /*break*/, 3];
                        g.id = resp.id;
                        this.editData.game.repository.addObject(g);
                        name_1 = this.utils.capitalise(this.editData.currGameObjectInEdit.name);
                        return [4 /*yield*/, this.restFileSystem.createFile("scripts/" + g.name + ".js", document.getElementById('defaultCodeScript').textContent.replace('${name}', name_1))];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
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
                        return [2 /*return*/];
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
        this.editData.currFrameAnimationInEdit = new frameAnimation_1.default(this.editData.game);
        RF.getComponentById('frameAnimationDialog').open();
    };
    GameObjectDialog.prototype.editFrameAnimation = function (fa) {
        this.editData.currFrameAnimationInEdit = fa.clone();
        RF.getComponentById('frameAnimationDialog').open();
    };
    GameObjectDialog.prototype.deleteFrameAnimation = function (fa) {
        var _this = this;
        this.utils.deleteModel(fa, function () {
            var go = _this.editData.currGameObjectInEdit;
            go.frameAnimations.remove(function (it) { return it.id == fa.id; });
            go.updateCloner();
            _this.editData.game.repository.updateObject(go);
            _this.restResource.save(go);
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
        var _this = this;
        this.utils.deleteModel(cb, function () {
            var model = _this.editData.currGameObjectInEdit;
            model.commonBehaviour.remove(function (it) { return it.id == cb.id; });
            model.updateCloner();
            _this.editData.game.repository.updateObject(model);
            _this.restResource.save(model);
        });
    };
    GameObjectDialog.prototype.isCbItemDisabled = function (cb) {
        return !!this.editData.currGameObjectInEdit.commonBehaviour.find(function (it) { return it.name == cb.name; });
    };
    GameObjectDialog = __decorate([
        RF.decorateComponent({
            name: 'app-game-object-dialog',
            template: __webpack_require__(170)
        })
    ], GameObjectDialog);
    return GameObjectDialog;
}(baseComponent_1.default));
exports.default = GameObjectDialog;


/***/ }),
/* 170 */
/***/ (function(module, exports) {

module.exports = "<app-modal id=\"gameObjectModal\"><div data-transclusion=\"content\"><table class=\"width100\"><tr><td>{{i18n.get('name')}}</td><td><input required data-model=\"editData.currGameObjectInEdit.name\"></td><td></td><td rowspan=\"5\"><div class=\"relative\" style=\"display: inline-block; overflow: auto; max-width:60vw; max-height:60vh;\"><div data-style=\"utils.merge( utils.getGameObjectCss(editData.currGameObjectInEdit), { 'border':'1px solid blue', 'opacity':editData.currGameObjectInEdit.alpha } )\"></div></div></td></tr><tr><td>{{i18n.get('spriteSheet')}}</td><td><select data-change=\"onSpriteSheetSelected(editData.currGameObjectInEdit.spriteSheet)\" required data-model=\"editData.currGameObjectInEdit.spriteSheet\"><option>--</option><option data-value=\"item\" data-for=\"item in editData.game.repository.getArray('SpriteSheet') track by id\">{{item.name}}</option></select></td><td></td></tr><tr><td>{{i18n.get('groupName')}}</td><td><input data-model=\"editData.currGameObjectInEdit.groupName\"></td><td></td></tr><tr><td>{{i18n.get('rigid')}}</td><td><input type=\"checkbox\" data-model=\"editData.currGameObjectInEdit.rigid\"></td><td></td></tr><tr><td>{{i18n.get('width')}}</td><td><input type=\"number\" required data-model=\"editData.currGameObjectInEdit.width\"></td><td></td></tr><tr><td>{{i18n.get('height')}}</td><td><input type=\"number\" required data-model=\"editData.currGameObjectInEdit.height\"></td><td></td></tr><tr><td>{{i18n.get('angle')}}</td><td><input step=\"0.1\" type=\"number\" required data-model=\"editData.currGameObjectInEdit.angle\"></td><td align=\"left\"><div class=\"inlineBlock\"><app-angle-picker data-state=\"{ object: editData.currGameObjectInEdit, value: 'angle' }\"></app-angle-picker></div></td></tr><tr><td>alpha</td><td><input type=\"number\" min=\"0\" max=\"1\" step=\"0.1\" required data-model=\"editData.currGameObjectInEdit.alpha\"></td><td><input type=\"range\" min=\"0\" max=\"1\" step=\"0.1\" data-model=\"editData.currGameObjectInEdit.alpha\"></td></tr><tr><td>{{i18n.get('currFrameIndex')}}</td><td><input type=\"number\" min=\"0\" data-change=\"refreshGameObjectFramePreview(editData.currGameObjectInEdit,editData.currGameObjectInEdit.currFrameIndex)\" required data-model=\"editData.currGameObjectInEdit.currFrameIndex\"></td><td></td></tr></table><table class=\"width100 stripped\"><tr><th colspan=\"4\">{{i18n.get('frAnimations')}}<button class=\"inlineBlock\" data-disabled=\"!editData.currGameObjectInEdit.id\" data-click=\"createFrameAnimation()\">+</button></th></tr><tr><th colspan=\"2\">{{i18n.get('actions')}}</th><th>{{i18n.get('name')}}</th><th>{{i18n.get('isDefault')}}<span class=\"small withPadding\">{{i18n.get('unselect')}}<button data-click=\"onStartFrameAnimNameChanged(null)\">*</button></span></th></tr><tr data-for=\"animItm in editData.currGameObjectInEdit.frameAnimations\"><td class=\"pointer\" data-click=\"editFrameAnimation(animItm)\"><span class=\"edit\"></span></td><td class=\"pointer\" data-click=\"deleteFrameAnimation(animItm)\"><span class=\"delete\"></span></td><td>{{animItm.name}}</td><td><input data-attribute=\"value: animItm.name\" data-change=\"onStartFrameAnimNameChanged(animItm.name)\" data-model=\"editData.currGameObjectInEdit.startFrameAnimationName\" type=\"radio\"></td></tr><tr><th colspan=\"4\">{{i18n.get('commonBehaviour')}}</th></tr><tr><td colspan=\"2\"><select class=\"width50\" data-model=\"selectedCb\"><option>-</option><option data-disabled=\"isCbItemDisabled(cb)\" data-value=\"cb\" data-for=\"cb in editData.commonBehaviourProtos\">{{cb.name}}</option></select></td><td colspan=\"2\"><button class=\"inlineBlock\" data-disabled=\"!editData.currGameObjectInEdit.id || !selectedCb\" data-click=\"createCommonBehaviour(selectedCb)\">+</button></td></tr><tr><th colspan=\"2\">{{i18n.get('actions')}}</th><th colspan=\"2\">{{i18n.get('name')}}</th></tr><tr data-for=\"itm in editData.currGameObjectInEdit.commonBehaviour\"><td class=\"pointer\" data-click=\"editCommonBehaviour(itm)\"><span class=\"edit\"></span></td><td class=\"pointer\" data-click=\"deleteCommonBehaviour(itm)\"><span class=\"delete\"></span></td><td colspan=\"2\">{{itm.name}}</td></tr></table><button data-disabled=\"!form.valid()\" data-click=\"createOrEditGameObject(editData.currGameObjectInEdit)\">{{editData.currGameObjectInEdit.id?i18n.get('edit'):i18n.get('create')}}</button></div></app-modal><app-frame-animation-dialog id=\"frameAnimationDialog\"></app-frame-animation-dialog><app-common-behaviour-dialog id=\"commonBehaviourDialog\"></app-common-behaviour-dialog>";

/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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
};
Object.defineProperty(exports, "__esModule", { value: true });
var baseComponent_1 = __webpack_require__(0);
var SceneDialog = /** @class */ (function (_super) {
    __extends(SceneDialog, _super);
    function SceneDialog() {
        return _super.call(this) || this;
    }
    SceneDialog.prototype.createOrEditScene = function (s) {
        return __awaiter(this, void 0, void 0, function () {
            var resp, name_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.restResource.save(s)];
                    case 1:
                        resp = _a.sent();
                        if (!resp.created) return [3 /*break*/, 3];
                        s.id = resp.id;
                        this.editData.game.repository.addObject(s);
                        name_1 = this.utils.capitalise(this.editData.currSceneInEdit.name);
                        return [4 /*yield*/, this.restFileSystem.createFile("scripts/" + s.name + ".js", document.getElementById('defaultCodeScript').textContent.replace('${name}', name_1))];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        s.updateCloner();
                        _a.label = 4;
                    case 4:
                        RF.getComponentById('sceneModal').close();
                        return [2 /*return*/];
                }
            });
        });
    };
    SceneDialog = __decorate([
        RF.decorateComponent({
            name: 'app-scene-dialog',
            template: __webpack_require__(172)
        })
    ], SceneDialog);
    return SceneDialog;
}(baseComponent_1.default));
exports.default = SceneDialog;


/***/ }),
/* 172 */
/***/ (function(module, exports) {

module.exports = "<app-modal id=\"sceneModal\"><div data-transclusion=\"content\"><form data-submit=\"createOrEditScene(editData.currSceneInEdit)\"><div class=\"withPadding\"><div class=\"table\"><div class=\"row\"><div class=\"cell\">{{i18n.get('name')}}</div><div class=\"cell\"><input required data-model=\"editData.currSceneInEdit.name\"></div></div></div><button data-disabled=\"!form.valid()\">{{editData.currSceneInEdit.id?i18n.get('edit'):i18n.get('create')}}</button></div></form></div></app-modal>";

/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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
};
Object.defineProperty(exports, "__esModule", { value: true });
var baseComponent_1 = __webpack_require__(0);
var LayerDialog = /** @class */ (function (_super) {
    __extends(LayerDialog, _super);
    function LayerDialog() {
        return _super.call(this) || this;
    }
    LayerDialog.prototype.createOrEditLayer = function (layer, scene) {
        return __awaiter(this, void 0, void 0, function () {
            var resp;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.restResource.save(layer)];
                    case 1:
                        resp = _a.sent();
                        if (!resp.created) return [3 /*break*/, 3];
                        layer.id = resp.id;
                        scene.layers.push(layer);
                        this.editData.game.repository.addObject(layer);
                        scene.updateCloner();
                        this.editData.game.repository.updateObject(scene);
                        return [4 /*yield*/, this.restResource.save(scene)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        layer.updateCloner();
                        _a.label = 4;
                    case 4:
                        RF.getComponentById('layerModal').close();
                        return [2 /*return*/];
                }
            });
        });
    };
    LayerDialog.prototype.deleteLayer = function (l) {
    };
    LayerDialog = __decorate([
        RF.decorateComponent({
            name: 'app-layer-dialog',
            template: __webpack_require__(174)
        })
    ], LayerDialog);
    return LayerDialog;
}(baseComponent_1.default));
exports.default = LayerDialog;


/***/ }),
/* 174 */
/***/ (function(module, exports) {

module.exports = "<app-modal id=\"layerModal\"><div data-transclusion=\"content\"><form data-submit=\"createOrEditLayer(editData.currLayerInEdit,editData.currLayerInEdit._scene)\"><div class=\"withPadding\"><div>{{i18n.get('scene')}}: {{editData.currLayerInEdit._scene && editData.currLayerInEdit._scene.name}}</div><b class=\"block centerText\">{{i18n.get('layer')}}</b><div class=\"table width100\"><div class=\"row\"><div class=\"cell\">{{i18n.get('name')}}</div><div class=\"cell\"><input data-model=\"editData.currLayerInEdit.name\" required></div></div></div><div><button data-disabled=\"!form.valid()\">{{editData.currLayerInEdit.id?i18n.get('edit'):i18n.get('create')}}</button></div></div></form></div></app-modal>";

/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var baseComponent_1 = __webpack_require__(0);
var tid;
var ParticleSystemPreviewDialog = /** @class */ (function (_super) {
    __extends(ParticleSystemPreviewDialog, _super);
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
                var deltaX = p.vel.x * delta / 1000;
                var deltaY = p.vel.y * delta / 1000;
                p.pos.x = p.pos.x + deltaX;
                p.pos.y = p.pos.y + deltaY;
                if (!p._timeCreated)
                    p._timeCreated = currTime;
                if (currTime - p._timeCreated > p.liveTime) {
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
    ParticleSystemPreviewDialog = __decorate([
        RF.decorateComponent({
            name: 'app-particle-system-preview-dialog',
            template: __webpack_require__(176)
        })
    ], ParticleSystemPreviewDialog);
    return ParticleSystemPreviewDialog;
}(baseComponent_1.default));
exports.default = ParticleSystemPreviewDialog;


/***/ }),
/* 176 */
/***/ (function(module, exports) {

module.exports = "<app-modal id=\"particleSystemPreviewModal\"><div data-transclusion=\"content\"><div>{{i18n.get('preview')}} {{i18n.get('particleSystem')}}<span class=\"underLine\">{{editData.currParticleSystemInEdit.name}}</span></div><div data-click=\"emit($event)\" data-mousemove=\"$event.buttons==1 && emit($event)\" class=\"subFullScreen relative noOverFlow\"><div data-for=\"item in editData.currParticleSystemInEdit._particles\" data-style=\"utils.merge( utils.getGameObjectCss(item), { position:'absolute', left:item.pos.x+'px', top: item.pos.y+'px', pointerEvents:'none' } )\"></div></div><div><button data-click=\"close()\">{{i18n.get('close')}}</button></div></div></app-modal>";

/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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
};
Object.defineProperty(exports, "__esModule", { value: true });
var baseComponent_1 = __webpack_require__(0);
var gameObject_1 = __webpack_require__(17);
var spriteSheet_1 = __webpack_require__(15);
var FrameAnimationDialog = /** @class */ (function (_super) {
    __extends(FrameAnimationDialog, _super);
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
            editData.currFrameAnimationInEdit._gameObject = new gameObject_1.default(editData.game);
        if (!editData.currFrameAnimationInEdit._gameObject.spriteSheet) {
            editData.currFrameAnimationInEdit._gameObject.spriteSheet = new spriteSheet_1.default(editData.game);
        }
        var lastIndex = editData.currFrameAnimationInEdit.
            _gameObject.spriteSheet.numOfFramesH
            *
                editData.currFrameAnimationInEdit._gameObject.spriteSheet.numOfFramesV;
        return this.utils.getArray(lastIndex);
    };
    FrameAnimationDialog.prototype.createOrEditFrameAnimation = function () {
        return __awaiter(this, void 0, void 0, function () {
            var fa, resp, editedFa;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        fa = this.editData.currFrameAnimationInEdit;
                        fa.frames = JSON.parse('[' + this.frames + ']');
                        return [4 /*yield*/, this.restResource.save(fa)];
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
                        return [4 /*yield*/, this.restResource.save(this.editData.currGameObjectInEdit)];
                    case 2:
                        _a.sent();
                        this.editData.currGameObjectInEdit.updateCloner();
                        RF.getComponentById('frameAnimationModal').close();
                        return [2 /*return*/];
                }
            });
        });
    };
    FrameAnimationDialog = __decorate([
        RF.decorateComponent({
            name: 'app-frame-animation-dialog',
            template: __webpack_require__(178)
        })
    ], FrameAnimationDialog);
    return FrameAnimationDialog;
}(baseComponent_1.default));
exports.default = FrameAnimationDialog;


/***/ }),
/* 178 */
/***/ (function(module, exports) {

module.exports = "<app-modal id=\"frameAnimationModal\"><div data-transclusion=\"content\"><table class=\"width100\"><tr><td>{{i18n.get('name')}}</td><td><input required data-model=\"editData.currFrameAnimationInEdit.name\"></td><td rowspan=\"3\"><div style=\"max-height: 80vh;max-width:80vw;overflow: auto;padding: 5px;\">{{ editData.currFrameAnimationInEdit._gameObject && editData.currFrameAnimationInEdit._gameObject.currFrameIndex||0 }}<div data-style=\"utils.merge( utils.getGameObjectCss(editData.currFrameAnimationInEdit._gameObject), {outline:'1px solid blue'} )\"></div><div><button data-click=\"playAnimation()\" data-disabled=\"!form.valid()\" class=\"inlineBlock withMargin\">{{i18n.get('playAnim')}}</button><button data-click=\"stopAnimation()\" data-disabled=\"!form.valid()\" class=\"inlineBlock withMargin\">{{i18n.get('stopAnim')}}</button></div><div><button data-click=\"previousFrame()\" data-disabled=\"!form.valid()\" class=\"inlineBlock withMargin\"><< </button><button data-click=\"nextFrame()\" data-disabled=\"!form.valid()\" class=\"inlineBlock withMargin\">>></button></<><div class=\"relative\" data-style=\"{ 'background-image': 'url('+editData.projectName+'/'+editData.currFrameAnimationInEdit._gameObject.spriteSheet.resourcePath+')', 'width': editData.currFrameAnimationInEdit._gameObject.spriteSheet.width+'px', 'height': editData.currFrameAnimationInEdit._gameObject.spriteSheet.height+'px' }\"><div data-for=\"v,i in getLoopArr()\" data-style=\"{ 'display': 'inline-block', 'left': editData.currFrameAnimationInEdit._gameObject.spriteSheet.getFramePosX(i)+'px', 'top': editData.currFrameAnimationInEdit._gameObject.spriteSheet.getFramePosY(i)+'px', 'position': 'absolute', 'text-align': 'left', 'outline': '1px solid red', 'width': editData.currFrameAnimationInEdit._gameObject.spriteSheet._frameWidth+'px', 'height': editData.currFrameAnimationInEdit._gameObject.spriteSheet._frameHeight+'px' }\">{{i}}</div></div></button></div></div><tr><td>{{i18n.get('duration')}}</td><td><input type=\"number\" min=\"1\" required data-model=\"editData.currFrameAnimationInEdit.duration\"></td></tr><tr><td><table><tr><td>{{i18n.get('frames')}}</td><td><button data-click=\"setAllIndexes()\">{{i18n.get('all')}}</button></td></tr><tr><td>{{i18n.get('from')}}</td><td><input type=\"number\" data-model=\"from\" min=\"0\" data-keyup=\"setRangeIndexes()\"></td></tr><tr><td>{{i18n.get('to')}}</td><td><input type=\"number\" min=\"0\" data-model=\"to\" data-change=\"setRangeIndexes()\"></td></tr><tr><td>{{i18n.get('step')}}</td><td><input type=\"number\" min=\"0\" data-model=\"step\" data-change=\"setRangeIndexes()\"></td></tr></table></td><td><textarea required data-model=\"frames\"></textarea></td></tr></td><button data-click=\"createOrEditFrameAnimation()\" data-disabled=\"!form.valid()\">{{editData.currFrameAnimationInEdit.id?i18n.get('edit'):i18n.get('create')}}</button></tr></table></div></app-modal>";

/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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
};
Object.defineProperty(exports, "__esModule", { value: true });
var baseComponent_1 = __webpack_require__(0);
var CommonBehaviourDialog = /** @class */ (function (_super) {
    __extends(CommonBehaviourDialog, _super);
    function CommonBehaviourDialog() {
        return _super.call(this) || this;
    }
    CommonBehaviourDialog.prototype.createOrEditCommonBehaviour = function () {
        return __awaiter(this, void 0, void 0, function () {
            var editData, cb, resp, editedCb;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        editData = this.editData;
                        cb = editData.currCommonBehaviourInEdit;
                        delete cb.description;
                        return [4 /*yield*/, this.restResource.save(cb)];
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
                        return [4 /*yield*/, this.restResource.save(editData.currGameObjectInEdit)];
                    case 2:
                        _a.sent();
                        editData.currGameObjectInEdit.updateCloner();
                        RF.getComponentById('commonBehaviourModal').close();
                        return [2 /*return*/];
                }
            });
        });
    };
    CommonBehaviourDialog = __decorate([
        RF.decorateComponent({
            name: 'app-common-behaviour-dialog',
            template: __webpack_require__(180)
        })
    ], CommonBehaviourDialog);
    return CommonBehaviourDialog;
}(baseComponent_1.default));
exports.default = CommonBehaviourDialog;


/***/ }),
/* 180 */
/***/ (function(module, exports) {

module.exports = "<app-modal id=\"commonBehaviourModal\"><div data-transclusion=\"content\"><table class=\"width100\"><tr><td class=\"borderBottom\">{{i18n.get('name')}}</td><td class=\"borderBottom\">{{editData.currCommonBehaviourInEdit.name}}</td></tr><tr><td class=\"borderBottom\">{{i18n.get('description')}}</td><td class=\"borderBottom\">{{editData.currCommonBehaviourInEdit.description}}</td></tr><tr data-for=\"value,key in editData.currCommonBehaviourInEdit.parameters\"><td class=\"borderBottom\">{{key}}</td><td class=\"borderBottom\"><input type=\"text\" data-model=\"editData.currCommonBehaviourInEdit.parameters[key]\"></td></tr><tr data-if=\"utils.size(editData.currCommonBehaviourInEdit.parameters)==0\"><td colspan=\"2\" class=\"borderBottom\">{{i18n.get('noDataToEdit')}}</td></tr></table><button data-click=\"createOrEditCommonBehaviour(editData.currCommonBehaviourInEdit)\" data-disabled=\"!form.valid()\">{{editData.currCommonBehaviourInEdit.id?i18n.get('edit'):i18n.get('create')}}</button></div></app-modal>";

/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var baseComponent_1 = __webpack_require__(0);
var BuildDialog = /** @class */ (function (_super) {
    __extends(BuildDialog, _super);
    function BuildDialog() {
        return _super.call(this) || this;
    }
    BuildDialog.prototype.close = function () {
        RF.getComponentById('buildModal').close();
    };
    BuildDialog.prototype.onChanged = function () {
        localStorage.buildOpts = JSON.stringify(this.editData.buildOpts);
    };
    BuildDialog = __decorate([
        RF.decorateComponent({
            name: 'app-build-dialog',
            template: __webpack_require__(182)
        })
    ], BuildDialog);
    return BuildDialog;
}(baseComponent_1.default));
exports.default = BuildDialog;


/***/ }),
/* 182 */
/***/ (function(module, exports) {

module.exports = "<app-modal id=\"buildModal\"><div data-transclusion=\"content\"><table class=\"width100\"><tr><td>{{i18n.get('minify')}}</td><td><input data-change=\"onChanged()\" data-model=\"editData.buildOpts.minify\" type=\"checkbox\"></td></tr><tr><td>{{i18n.get('debug')}}</td><td><input data-change=\"onChanged()\" data-model=\"editData.buildOpts.debug\" type=\"checkbox\"></td></tr><tr><td>{{i18n.get('windowed')}}</td><td><input data-change=\"onChanged()\" data-model=\"editData.buildOpts.windowed\" type=\"checkbox\"></td></tr><tr><td>{{i18n.get('embedResources')}}</td><td><input data-change=\"onChanged()\" data-model=\"editData.buildOpts.embedResources\" type=\"checkbox\"></td></tr></table><button data-click=\"close()\">ok</button></div></app-modal>";

/***/ }),
/* 183 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);