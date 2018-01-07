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
/******/ 	return __webpack_require__(__webpack_require__.s = 89);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _dec, _class; /*global DEBUG:true*/

//import Vec2 from '../core/vec2'

var _commonObject = __webpack_require__(26);

var _commonObject2 = _interopRequireDefault(_commonObject);

var _tween = __webpack_require__(25);

var _tween2 = _interopRequireDefault(_tween);

var _eventEmitter = __webpack_require__(57);

var _eventEmitter2 = _interopRequireDefault(_eventEmitter);

var _decorators = __webpack_require__(20);

var _arcadeRigidBody = __webpack_require__(61);

var _arcadeRigidBody2 = _interopRequireDefault(_arcadeRigidBody);

var _rect = __webpack_require__(9);

var _rect2 = _interopRequireDefault(_rect);

var _point2d = __webpack_require__(3);

var _point2d2 = _interopRequireDefault(_point2d);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BaseModel = (_dec = (0, _decorators.Transient)({
    game: true,
    rigidBody: true
}), _dec(_class = function (_CommonObject) {
    _inherits(BaseModel, _CommonObject);

    function BaseModel(game) {
        _classCallCheck(this, BaseModel);

        var _this = _possibleConstructorReturn(this, _CommonObject.call(this));

        _this.id = null;
        _this.name = null;
        _this.width = 0;
        _this.height = 0;
        _this.pos = new _point2d2.default(0, 0);
        _this.scale = new _point2d2.default(1, 1);
        _this.angle = 0;
        _this.alpha = 1;
        _this.layerId = null;
        _this.fixedToCamera = false;
        _this.rigid = false;
        _this._tweens = [];
        _this._rect = new _rect2.default(0, 0);

        if (1 && !game) throw 'can not create model \'' + _this.type + '\': game instance not passed to model constructor';
        _this.game = game;
        _this._emitter = new _eventEmitter2.default();
        return _this;
    }

    BaseModel.prototype.revalidate = function revalidate() {
        this.rigidBody = this.rigid ? new _arcadeRigidBody2.default(this) : null;
    };

    BaseModel.prototype.setIndividualBehaviour = function setIndividualBehaviour(Clazz) {};

    BaseModel.prototype.setCommonBehaviour = function setCommonBehaviour() {};

    BaseModel.prototype.onShow = function onShow() {};

    BaseModel.prototype.getRect = function getRect() {
        this._rect.set(this.pos.x, this.pos.y, this.width, this.height);
        return this._rect;
    };

    /**
     * {target:obj,from:a,to:b,progress:fn,complete:fn,ease:str,time:t}}
     * @param desc
     */


    BaseModel.prototype.tween = function tween(desc) {
        var t = new _tween2.default(desc, this);
        this._tweens.push(t);
    };

    BaseModel.prototype.update = function update(time) {
        var _this2 = this;

        this._tweens.forEach(function (t, index) {
            t.update(time);
            if (t.completed) _this2._tweens.splice(index, 1);
        });
    };

    BaseModel.prototype.clone = function clone(opts) {
        var Clazz = this.constructor;
        var obj = new Clazz(this.game);
        obj._cloner = this;
        return obj.fromJSON(this.toJSON(opts), true);
    };

    BaseModel.prototype.on = function on(eventName, callBack) {
        this._emitter.on(eventName, callBack);
        return this;
    };

    BaseModel.prototype.trigger = function trigger(eventName, data) {
        this._emitter.trigger(eventName, data);
    };

    BaseModel.prototype.updateCloner = function updateCloner(opts) {
        if (false) return;
        var cloner = this._cloner;
        if (!cloner) return;
        cloner.fromJSON(this.toJSON(opts));
        cloner.updateCloner(opts);
        delete this._cloner;
    };

    return BaseModel;
}(_commonObject2.default)) || _class);
exports.default = BaseModel;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _class, _temp; /*global DEBUG:true*/

var _shaderProgramUtils = __webpack_require__(7);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ShaderProgram = (_temp = _class = function () {
    function ShaderProgram(gl, vertexSource, fragmentSource) {
        _classCallCheck(this, ShaderProgram);

        this._attrLocationCache = {};

        var vShader = (0, _shaderProgramUtils.compileShader)(gl, vertexSource, gl.VERTEX_SHADER);
        var fShader = (0, _shaderProgramUtils.compileShader)(gl, fragmentSource, gl.FRAGMENT_SHADER);
        this.program = (0, _shaderProgramUtils.createProgram)(gl, vShader, fShader);
        this.uniforms = (0, _shaderProgramUtils.extractUniforms)(gl, this.program);
        this.gl = gl;
    }

    ShaderProgram.prototype.getProgram = function getProgram() {
        return this.program;
    };

    ShaderProgram.prototype.bind = function bind() {
        this.gl.useProgram(this.program);
        ShaderProgram.currentProgram = this;
    };

    ShaderProgram.prototype.setUniform = function setUniform(name, value) {
        var uniform = this.uniforms[name];
        if (1 && !uniform) throw "no uniform with name " + name + " found!";
        uniform.setter(this.gl, uniform.location, value);
        // if setter does not fit (ie uniform structure), invoke native gl setter,
        // ie shader:
        // struct SomeStruct {
        //      bool active;
        //      vec2 someVec2;
        // }
        // uniform SomeStruct u_someThing;
        // js:
        // gl.getUniformLocation(program,'u_someThing.active')
        // gl.getUniformLocation(program,'u_someThing.someVec2')
    };

    ShaderProgram.prototype.bindBuffer = function bindBuffer(buffer, attrLocationName) {
        if (true) {
            if (!attrLocationName) throw "can not found attribute location: attrLocationName not defined";
        }

        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, buffer.getGlBuffer());
        var attrLocation = this._attrLocationCache[attrLocationName] || this.gl.getAttribLocation(this.program, attrLocationName);

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

    return ShaderProgram;
}(), _class.currentProgram = null, _temp);
exports.default = ShaderProgram;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _class, _temp;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AbstractDrawer = (_temp = _class = function () {
    function AbstractDrawer(gl) {
        _classCallCheck(this, AbstractDrawer);

        this.program = null;
        this.uniformCache = {};
        this.posVertexBuffer = null;
        this.posIndexBuffer = null;
        this.texVertexBuffer = null;

        this.gl = gl;
    } // todo remove


    AbstractDrawer.prototype.bind = function bind() {
        if (AbstractDrawer.currentInstance !== null && AbstractDrawer.currentInstance !== this) {
            AbstractDrawer.currentInstance.unbind();
        }
        AbstractDrawer.currentInstance = this;
        this.bufferInfo.bind(this.program);
    };

    AbstractDrawer.prototype.unbind = function unbind() {
        this.bufferInfo.unbind();
    };

    AbstractDrawer.prototype.setUniform = function setUniform(name, value) {
        if (this.uniformCache[name] === value) return;
        this.program.setUniform(name, value);
        this.uniformCache[name] = value;
    };

    AbstractDrawer.prototype.drawElements = function drawElements() {
        this.bufferInfo.draw();
    };

    AbstractDrawer.prototype.draw = function draw(uniforms) {
        var _this = this;

        this.bind();
        Object.keys(uniforms).forEach(function (name) {
            return _this.setUniform(name, uniforms[name]);
        });
        this.drawElements();
    };

    return AbstractDrawer;
}(), _class.currentInstance = null, _temp);
exports.default = AbstractDrawer;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Point2d = function () {
    function Point2d() {
        var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

        _classCallCheck(this, Point2d);

        this.x = 0;
        this.y = 0;

        this.setXY(x, y);
    }

    Point2d.prototype.setXY = function setXY(x, y) {
        this.x = x;
        this.y = y;
    };

    Point2d.prototype.setX = function setX(x) {
        this.x = x;
    };

    Point2d.prototype.setY = function setY(y) {
        this.y = y;
    };

    Point2d.prototype.set = function set(another) {
        this.setXY(another.x, another.y);
    };

    Point2d.prototype.add = function add(another) {
        this.addXY(another.x, another.y);
    };

    Point2d.prototype.addXY = function addXY(x, y) {
        this.x += x;
        this.y += y;
    };

    Point2d.prototype.addX = function addX(x) {
        this.x += x;
    };

    Point2d.prototype.addY = function addY(y) {
        this.y += y;
    };

    Point2d.prototype.equal = function equal(val) {
        return this.x === val && this.y === val;
    };

    Point2d.prototype.fromJSON = function fromJSON(json) {
        this.set(json);
    };

    Point2d.prototype.toJSON = function toJSON() {
        return { x: this.x, y: this.y };
    };

    return Point2d;
}();

exports.default = Point2d;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.easeInOutBounce = exports.easeOutBounce = exports.easeInBounce = exports.easeInOutBack = exports.easeOutBack = exports.easeInBack = exports.easeInOutElastic = exports.easeOutElastic = exports.easeInElastic = exports.easeInOutCirc = exports.easeOutCirc = exports.easeInCirc = exports.easeInOutExpo = exports.easeOutExpo = exports.easeInExpo = exports.easeInOutSine = exports.easeOutSine = exports.easeInSine = exports.easeInOutQuint = exports.easeOutQuint = exports.easeInQuint = exports.easeInOutQuart = exports.easeOutQuart = exports.easeInQuart = exports.easeInOutCubic = exports.easeOutCubic = exports.easeInCubic = exports.easeInOutQuad = exports.easeOutQuad = exports.easeInQuad = exports.linear = exports.unProject = exports.random = exports.degToRad = exports.radToDeg = exports.overlapTest = exports.isPointInRect = undefined;

var _mat = __webpack_require__(6);

var _mat2 = _interopRequireDefault(_mat);

var _point2d = __webpack_require__(3);

var _point2d2 = _interopRequireDefault(_point2d);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*global DEBUG:true*/

var isPointInRect = exports.isPointInRect = function isPointInRect(point, rect, angle) {
    // if (angle) {
    //     let vec2 = new Vec2(point.x - rect.x - rect.width/2,point.y - rect.y - rect.height/2);
    //     vec2.setAngle(vec2.getAngle() - angle);
    //     point = {x:vec2.getX() + point.x,y:vec2.getY() + point.y};
    //
    // }
    return point.x > rect.x && point.x < rect.x + rect.width && point.y > rect.y && point.y < rect.y + rect.height;
};

var overlapTest = exports.overlapTest = function overlapTest(a, b) {
    return a.x < b.x + b.width && a.x + a.width > b.x && a.y < b.y + b.height && a.y + a.height > b.y;
};

var radToDeg = exports.radToDeg = function radToDeg(rad) {
    return rad * 180 / Math.PI;
};

var degToRad = exports.degToRad = function degToRad(deg) {
    return deg * Math.PI / 180;
};

var random = exports.random = function random(min, max) {
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
var unProject = exports.unProject = function unProject(winX, winY, width, height, viewProjectionMatrix) {
    var x = 2.0 * winX / width - 1;
    var y = 2.0 * winY / height - 1;
    var viewProjectionInverse = _mat2.default.inverse(viewProjectionMatrix);

    var point3D = [x, y, 0, 1];
    var res = _mat2.default.multMatrixVec(viewProjectionInverse, point3D);
    res[0] = (res[0] / 2 + 0.5) * width;
    res[1] = (res[1] / 2 + 0.5) * height;
    return new _point2d2.default(res[0], res[1]);
};

// simple linear tweening - no easing, no acceleration
var linear = exports.linear = function linear(t, b, c, d) {
    return c * t / d + b;
};

// quadratic easing in - accelerating from zero velocity
var easeInQuad = exports.easeInQuad = function easeInQuad(t, b, c, d) {
    t /= d;
    return c * t * t + b;
};

// quadratic easing out - decelerating to zero velocity
var easeOutQuad = exports.easeOutQuad = function easeOutQuad(t, b, c, d) {
    t /= d;
    return -c * t * (t - 2) + b;
};

// quadratic easing in/out - acceleration until halfway, then deceleration
var easeInOutQuad = exports.easeInOutQuad = function easeInOutQuad(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
};

// cubic easing in - accelerating from zero velocity
var easeInCubic = exports.easeInCubic = function easeInCubic(t, b, c, d) {
    t /= d;
    return c * t * t * t + b;
};

// cubic easing out - decelerating to zero velocity
var easeOutCubic = exports.easeOutCubic = function easeOutCubic(t, b, c, d) {
    t /= d;
    t--;
    return c * (t * t * t + 1) + b;
};

// cubic easing in/out - acceleration until halfway, then deceleration
var easeInOutCubic = exports.easeInOutCubic = function easeInOutCubic(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t * t + b;
    t -= 2;
    return c / 2 * (t * t * t + 2) + b;
};

// quartic easing in - accelerating from zero velocity
var easeInQuart = exports.easeInQuart = function easeInQuart(t, b, c, d) {
    t /= d;
    return c * t * t * t * t + b;
};

// quartic easing out - decelerating to zero velocity
var easeOutQuart = exports.easeOutQuart = function easeOutQuart(t, b, c, d) {
    t /= d;
    t--;
    return -c * (t * t * t * t - 1) + b;
};

// quartic easing in/out - acceleration until halfway, then deceleration
var easeInOutQuart = exports.easeInOutQuart = function easeInOutQuart(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t * t * t + b;
    t -= 2;
    return -c / 2 * (t * t * t * t - 2) + b;
};

// quintic easing in - accelerating from zero velocity
var easeInQuint = exports.easeInQuint = function easeInQuint(t, b, c, d) {
    t /= d;
    return c * t * t * t * t * t + b;
};

// quintic easing out - decelerating to zero velocity
var easeOutQuint = exports.easeOutQuint = function easeOutQuint(t, b, c, d) {
    t /= d;
    t--;
    return c * (t * t * t * t * t + 1) + b;
};

// quintic easing in/out - acceleration until halfway, then deceleration
var easeInOutQuint = exports.easeInOutQuint = function easeInOutQuint(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t * t * t * t + b;
    t -= 2;
    return c / 2 * (t * t * t * t * t + 2) + b;
};

// sinusoidal easing in - accelerating from zero velocity
var easeInSine = exports.easeInSine = function easeInSine(t, b, c, d) {
    return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
};

// sinusoidal easing out - decelerating to zero velocity
var easeOutSine = exports.easeOutSine = function easeOutSine(t, b, c, d) {
    return c * Math.sin(t / d * (Math.PI / 2)) + b;
};

// sinusoidal easing in/out - accelerating until halfway, then decelerating
var easeInOutSine = exports.easeInOutSine = function easeInOutSine(t, b, c, d) {
    return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
};

// exponential easing in - accelerating from zero velocity
var easeInExpo = exports.easeInExpo = function easeInExpo(t, b, c, d) {
    return c * Math.pow(2, 10 * (t / d - 1)) + b;
};

// exponential easing out - decelerating to zero velocity
var easeOutExpo = exports.easeOutExpo = function easeOutExpo(t, b, c, d) {
    return c * (-Math.pow(2, -10 * t / d) + 1) + b;
};

// exponential easing in/out - accelerating until halfway, then decelerating
var easeInOutExpo = exports.easeInOutExpo = function easeInOutExpo(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
    t--;
    return c / 2 * (-Math.pow(2, -10 * t) + 2) + b;
};

// circular easing in - accelerating from zero velocity
var easeInCirc = exports.easeInCirc = function easeInCirc(t, b, c, d) {
    t /= d;
    return -c * (Math.sqrt(1 - t * t) - 1) + b;
};

// circular easing out - decelerating to zero velocity
var easeOutCirc = exports.easeOutCirc = function easeOutCirc(t, b, c, d) {
    t /= d;
    t--;
    return c * Math.sqrt(1 - t * t) + b;
};

// circular easing in/out - acceleration until halfway, then deceleration
var easeInOutCirc = exports.easeInOutCirc = function easeInOutCirc(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
    t -= 2;
    return c / 2 * (Math.sqrt(1 - t * t) + 1) + b;
};

var easeInElastic = exports.easeInElastic = function easeInElastic(t, b, c, d) {
    var s = 1.70158;var p = 0;var a = c;
    if (t === 0) return b;if ((t /= d) === 1) return b + c;if (!p) p = d * .3;
    if (a < Math.abs(c)) {
        a = c;s = p / 4;
    } else s = p / (2 * Math.PI) * Math.asin(c / a);
    return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
};

var easeOutElastic = exports.easeOutElastic = function easeOutElastic(t, b, c, d) {
    var s = 1.70158;var p = 0;var a = c;
    if (t === 0) return b;if ((t /= d) === 1) return b + c;if (!p) p = d * .3;
    if (a < Math.abs(c)) {
        a = c;s = p / 4;
    } else s = p / (2 * Math.PI) * Math.asin(c / a);
    return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
};

var easeInOutElastic = exports.easeInOutElastic = function easeInOutElastic(t, b, c, d) {
    var s = 1.70158;var p = 0;var a = c;
    if (t === 0) return b;if ((t /= d / 2) === 2) return b + c;if (!p) p = d * (.3 * 1.5);
    if (a < Math.abs(c)) {
        a = c;s = p / 4;
    } else s = p / (2 * Math.PI) * Math.asin(c / a);
    if (t < 1) return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
    return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;
};

var easeInBack = exports.easeInBack = function easeInBack(t, b, c, d) {
    var s = 1.70158;
    return c * (t /= d) * t * ((s + 1) * t - s) + b;
};

var easeOutBack = exports.easeOutBack = function easeOutBack(t, b, c, d) {
    var s = 1.70158;
    return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
};

var easeInOutBack = exports.easeInOutBack = function easeInOutBack(t, b, c, d) {
    var s = 1.70158;
    if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= 1.525) + 1) * t - s)) + b;
    return c / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b;
};

var easeInBounce = exports.easeInBounce = function easeInBounce(t, b, c, d) {
    return c - easeOutBounce(d - t, 0, c, d) + b;
};

var easeOutBounce = exports.easeOutBounce = function easeOutBounce(t, b, c, d) {
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

var easeInOutBounce = exports.easeInOutBounce = function easeInOutBounce(t, b, c, d) {
    if (t < d / 2) return easeInBounce(t * 2, 0, c, d) * .5 + b;else return easeOutBounce(t * 2 - d, 0, c, d) * .5 + c * .5 + b;
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = exports.ArrayInfo = undefined;

var _vertexBuffer = __webpack_require__(23);

var _vertexBuffer2 = _interopRequireDefault(_vertexBuffer);

var _indexBuffer = __webpack_require__(21);

var _indexBuffer2 = _interopRequireDefault(_indexBuffer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /*global DEBUG:true*/

var ArrayInfo = exports.ArrayInfo = function ArrayInfo(_ref) {
    var array = _ref.array,
        type = _ref.type,
        size = _ref.size,
        attrName = _ref.attrName;

    _classCallCheck(this, ArrayInfo);

    this.array = null;
    this.type = null;
    this.size = 0;
    this.attrName = null;

    this.array = array;
    this.type = type;
    this.size = size;
    this.attrName = attrName;
};

var BufferInfo = function () {
    function BufferInfo(gl, _ref2) {
        var _ref2$posVertexInfo = _ref2.posVertexInfo,
            posVertexInfo = _ref2$posVertexInfo === undefined ? null : _ref2$posVertexInfo,
            _ref2$posIndexInfo = _ref2.posIndexInfo,
            posIndexInfo = _ref2$posIndexInfo === undefined ? null : _ref2$posIndexInfo,
            _ref2$texVertexInfo = _ref2.texVertexInfo,
            texVertexInfo = _ref2$texVertexInfo === undefined ? null : _ref2$texVertexInfo,
            drawMethod = _ref2.drawMethod;

        _classCallCheck(this, BufferInfo);

        this.posVertexBuffer = null;
        this.posIndexBuffer = null;
        this.texVertexBuffer = null;
        this.drawMethod = null;
        this.numOfElementsToDraw = 0;

        this.gl = gl;

        if (this.drawMethod === undefined) throw "can not create BufferInfo: drawMethod not defined";
        this.drawMethod = drawMethod;

        if (1 && !posVertexInfo) throw "can not create BufferInfo: posVertexInfo is mandatory";
        this.posVertexBuffer = new _vertexBuffer2.default(gl);
        this.posVertexBuffer.setData(posVertexInfo.array, posVertexInfo.type, posVertexInfo.size);
        this.posVertexBuffer.setAttrName(posVertexInfo.attrName);

        if (posIndexInfo) {
            this.posIndexBuffer = new _indexBuffer2.default(gl);
            this.posIndexBuffer.setData(posIndexInfo.array);
        } else this.numOfElementsToDraw = this._getNumOfElementsToDraw(this.drawMethod);

        if (texVertexInfo) {
            this.texVertexBuffer = new _vertexBuffer2.default(gl);
            this.texVertexBuffer.setData(texVertexInfo.array, texVertexInfo.type, texVertexInfo.size);
            this.texVertexBuffer.setAttrName(texVertexInfo.attrName);
        }
    }

    BufferInfo.prototype.bind = function bind(program) {
        program.bind();
        if (this.posIndexBuffer) this.posIndexBuffer.bind();
        if (this.posVertexBuffer) this.posVertexBuffer.bind(program);
        if (this.texVertexBuffer) this.texVertexBuffer.bind(program);
    };

    BufferInfo.prototype.unbind = function unbind() {
        if (this.posIndexBuffer) this.posIndexBuffer.unbind();
        if (this.posVertexBuffer) this.posVertexBuffer.unbind();
        if (this.texVertexBuffer) this.texVertexBuffer.unbind();
    };

    BufferInfo.prototype._getNumOfElementsToDraw = function _getNumOfElementsToDraw(drawMethod) {
        switch (drawMethod) {
            case this.gl.LINE_STRIP:
            case this.gl.TRIANGLE_FAN:
                return this.posVertexBuffer.getBufferLength() / 2;
                break;
            default:
                throw "unknown draw method: " + drawMethod;
        }
    };

    BufferInfo.prototype.draw = function draw() {
        if (this.posIndexBuffer !== null) {
            this.gl.drawElements(this.drawMethod, this.posIndexBuffer.getBufferLength(), this.gl.UNSIGNED_SHORT, 0);
        } else {
            this.gl.drawArrays(this.drawMethod, 0, this.numOfElementsToDraw);
        }
    };

    return BufferInfo;
}();

exports.default = BufferInfo;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*global DEBUG:true*/

// todo convert to plain good oop style
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
    var out = [];
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
    var out = [];

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
    if (1 && det === 0) {
        console.error(m);
        throw new Error("can not invert matrix");
    }
    for (var i = 0; i < 16; i++) {
        r[i] /= det;
    }return r;
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
/*global DEBUG:true*/

var compileShader = exports.compileShader = function compileShader(gl, shaderSource, shaderType) {
    if (true) {
        if (!shaderSource) throw 'can not compile shader: shader source not specified for type ' + shaderType;
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
            throw 'Error compiling shader: ' + lastError;
        } else {
            throw lastError;
        }
    }

    return shader;
};

var createProgram = exports.createProgram = function createProgram(gl, vertexShader, fragmentShader) {
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
            var status = gl.getProgramParameter(program, gl.VALIDATE_STATUS);
            console.error('VALIDATE_STATUS', status);
            throw 'Error in program linking ' + lastError;
        } else {
            throw lastError;
        }
    }
    return program;
};

var GL_TABLE = null;

var GL_TYPE = exports.GL_TYPE = {
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

var mapType = function mapType(gl, type) {

    if (!GL_TABLE) {
        var typeNames = Object.keys(GL_TYPE);

        GL_TABLE = {};

        for (var i = 0; i < typeNames.length; ++i) {
            var tn = typeNames[i];
            GL_TABLE[gl[tn]] = GL_TYPE[tn];
        }
    }

    return GL_TABLE[type];
};

var extractUniforms = exports.extractUniforms = function extractUniforms(gl, program) {
    var uniforms = {};

    var totalUniforms = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);

    for (var i = 0; i < totalUniforms; i++) {
        var uniformData = gl.getActiveUniform(program, i);
        var name = uniformData.name.replace(/\[.*?]/, "");
        var type = mapType(gl, uniformData.type);

        uniforms[name] = {
            type: type,
            size: uniformData.size,
            name: name,
            location: gl.getUniformLocation(program, name),
            setter: getUniformSetter(uniformData.size, type)
        };
    }

    return uniforms;
};

var TypeNumber = {
    check: function check(val) {
        if (isNaN(val)) throw 'can not set uniform with value ' + val + ': expected argument of type number';
    }
};

var TypeInt = {
    check: function check(val) {
        TypeNumber.check(val);
        if (val !== ~~val) throw 'can not set uniform with value ' + val + ': expected argument of integer type, but ' + val + ' found';
    }
};

var TypeArray = function TypeArray(ElType, size) {
    return {
        check: function check(val) {
            if (!val.splice) throw 'can not set uniform with value ' + val + ': expected argument of type Array';
            if (size !== undefined && val.length !== size) throw 'can not set uniform with value ' + val + ': expected array with size ' + size + ', but ' + val.length + ' found';
            for (var i = 0; i < val.length; i++) {
                try {
                    ElType.check(val[i]);
                } catch (e) {
                    throw 'can not set uniform with value ' + val + ': unexpected array element type: ' + val[i];
                }
            }
        }
    };
};

var expect = function expect(value, typeChecker) {
    typeChecker.check(value);
};

var getUniformSetter = exports.getUniformSetter = function getUniformSetter(size, type) {
    if (size === 1) {
        switch (type) {
            case 'float':
                return function (gl, location, value) {
                    1 && expect(value, TypeNumber);
                    gl.uniform1f(location, value);
                };
            case 'vec2':
                return function (gl, location, value) {
                    1 && expect(value, TypeArray(TypeNumber, 2));
                    gl.uniform2f(location, value[0], value[1]);
                };
            case 'vec3':
                return function (gl, location, value) {
                    1 && expect(value, TypeArray(TypeNumber, 3));
                    gl.uniform3f(location, value[0], value[1], value[2]);
                };
            case 'vec4':
                return function (gl, location, value) {
                    1 && expect(value, TypeArray(TypeNumber, 4));
                    gl.uniform4f(location, value[0], value[1], value[2], value[3]);
                };
            case 'int':
                return function (gl, location, value) {
                    1 && expect(value, TypeInt);
                    gl.uniform1i(location, value);
                };
            case 'ivec2':
                return function (gl, location, value) {
                    1 && expect(value, TypeArray(TypeInt, 2));
                    gl.uniform2i(location, value[0], value[1]);
                };
            case 'ivec3':
                return function (gl, location, value) {
                    1 && expect(value, TypeArray(TypeInt, 3));
                    gl.uniform3i(location, value[0], value[1], value[2]);
                };
            case 'ivec4':
                return function (gl, location, value) {
                    1 && expect(value, TypeArray(TypeInt, 4));
                    gl.uniform4i(location, value[0], value[1], value[2], value[3]);
                };
            case 'bool':
                return function (gl, location, value) {
                    1 && expect(value, TypeInt);
                    gl.uniform1i(location, value);
                };
            case 'bvec2':
                return function (gl, location, value) {
                    1 && expect(value, TypeArray(TypeInt, 2));
                    gl.uniform2i(location, value[0], value[1]);
                };
            case 'bvec3':
                return function (gl, location, value) {
                    1 && expect(value, TypeArray(TypeInt, 3));
                    gl.uniform3i(location, value[0], value[1], value[2]);
                };
            case 'bvec4':
                return function (gl, location, value) {
                    1 && expect(value, TypeArray(TypeInt, 4));
                    gl.uniform4i(location, value[0], value[1], value[2], value[3]);
                };
            case 'mat2':
                return function (gl, location, value) {
                    1 && expect(value, TypeArray(TypeNumber, 2 * 2));
                    gl.uniformMatrix2fv(location, false, value); // location, transpose (Must be false), value
                };
            case 'mat3':
                return function (gl, location, value) {
                    1 && expect(value, TypeArray(TypeNumber, 3 * 3));
                    gl.uniformMatrix3fv(location, false, value);
                };
            case 'mat4':
                return function (gl, location, value) {
                    1 && expect(value, TypeArray(TypeNumber, 4 * 4));
                    gl.uniformMatrix4fv(location, false, value);
                };
            case 'sampler2D':
                return function (gl, location, value) {
                    1 && expect(value, TypeInt);
                    gl.uniform1i(location, value);
                };
        }
    } else {
        switch (type) {// ie uniform vec2 u_someVec2[3]
            case 'float':
                return function (gl, location, value) {
                    1 && expect(value, TypeArray(TypeNumber));
                    gl.uniform1fv(location, value);
                };
            case 'vec2':
                return function (gl, location, value) {
                    1 && expect(value, TypeArray(TypeNumber));
                    gl.uniform2fv(location, value);
                };
            case 'vec3':
                return function (gl, location, value) {
                    1 && expect(value, TypeArray(TypeNumber));
                    gl.uniform3fv(location, value);
                };
            case 'vec4':
                return function (gl, location, value) {
                    1 && expect(value, TypeArray(TypeNumber));
                    gl.uniform4fv(location, value);
                };
            case 'int':
                return function (gl, location, value) {
                    1 && expect(value, TypeArray(TypeInt));
                    gl.uniform1iv(location, value);
                };
            case 'ivec2':
                return function (gl, location, value) {
                    1 && expect(value, TypeArray(TypeInt));
                    gl.uniform2iv(location, value);
                };
            case 'ivec3':
                return function (gl, location, value) {
                    1 && expect(value, TypeArray(TypeInt));
                    gl.uniform3iv(location, value);
                };
            case 'ivec4':
                return function (gl, location, value) {
                    1 && expect(value, TypeArray(TypeInt));
                    gl.uniform4iv(location, value);
                };
            case 'bool':
                return function (gl, location, value) {
                    1 && expect(value, TypeArray(TypeInt));
                    gl.uniform1iv(location, value);
                };
            case 'bvec2':
                return function (gl, location, value) {
                    1 && expect(value, TypeArray(TypeInt));
                    gl.uniform2iv(location, value);
                };
            case 'bvec3':
                return function (gl, location, value) {
                    1 && expect(value, TypeArray(TypeInt));
                    gl.uniform3iv(location, value);
                };
            case 'bvec4':
                return function (gl, location, value) {
                    1 && expect(value, TypeArray(TypeInt));
                    gl.uniform4iv(location, value);
                };
            case 'sampler2D':
                return function (gl, location, value) {
                    1 && expect(value, TypeArray(TypeInt));
                    gl.uniform1iv(location, value);
                };
        }
    }
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _shaderProgramUtils = __webpack_require__(7);

var _shaderGenerator = __webpack_require__(16);

var _shaderGenerator2 = _interopRequireDefault(_shaderGenerator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//position and texture
var TexShaderGenerator = function (_ShaderGenerator) {
    _inherits(TexShaderGenerator, _ShaderGenerator);

    function TexShaderGenerator() {
        _classCallCheck(this, TexShaderGenerator);

        var _this = _possibleConstructorReturn(this, _ShaderGenerator.call(this));

        _this.addAttribute(_shaderProgramUtils.GL_TYPE.FLOAT_VEC4, 'a_position');
        _this.addAttribute(_shaderProgramUtils.GL_TYPE.FLOAT_VEC2, 'a_texCoord');
        _this.addVertexUniform(_shaderProgramUtils.GL_TYPE.FLOAT_MAT4, 'u_vertexMatrix');
        _this.addVertexUniform(_shaderProgramUtils.GL_TYPE.FLOAT_MAT4, 'u_textureMatrix');
        _this.addVarying(_shaderProgramUtils.GL_TYPE.FLOAT_VEC2, 'v_texCoord');
        _this.setVertexMainFn('\n            gl_Position = u_vertexMatrix * a_position;\n            v_texCoord = (u_textureMatrix * vec4(a_texCoord, 0, 1)).xy; \n        ');
        _this.addFragmentUniform(_shaderProgramUtils.GL_TYPE.SAMPLER_2D, 'texture');
        _this.addFragmentUniform(_shaderProgramUtils.GL_TYPE.FLOAT, 'u_alpha');
        _this.setFragmentMainFn('\n            gl_FragColor = texture2D(texture, v_texCoord);\n            gl_FragColor.a *= u_alpha;\n        ');
        return _this;
    }

    return TexShaderGenerator;
}(_shaderGenerator2.default);

exports.default = TexShaderGenerator;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Rect = function () {
    function Rect() {
        var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var width = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
        var height = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

        _classCallCheck(this, Rect);

        this.set(x, y, width, height);
    }

    Rect.prototype.set = function set(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.right = this.x + this.width;
        this.bottom = this.y + this.height;
    };

    return Rect;
}();

exports.default = Rect;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _class, _temp; /*global DEBUG:true*/

var _texture = __webpack_require__(22);

var _texture2 = _interopRequireDefault(_texture);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FrameBuffer = (_temp = _class = function () {
    function FrameBuffer(gl, width, height) {
        _classCallCheck(this, FrameBuffer);

        if (1 && !gl) throw "can not create FrameBuffer, gl context not passed to constructor, expected: FrameBuffer(gl)";

        this.gl = gl;
        this.width = width;
        this.height = height;

        this.texture = new _texture2.default(gl);
        this.texture.setImage(null, width, height);
        this._init(gl, width, height);
    }

    FrameBuffer.prototype._init = function _init(gl, width, height) {
        // Init Render Buffer
        this.glRenderBuffer = gl.createRenderbuffer();
        if (1 && !this.glRenderBuffer) throw "can not allocate memory for glRenderBuffer";
        gl.bindRenderbuffer(gl.RENDERBUFFER, this.glRenderBuffer);
        gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_COMPONENT16, width, height);
        // Init Frame Buffer
        this.glFrameBuffer = gl.createFramebuffer();
        if (1 && !this.glRenderBuffer) throw "can not allocate memory for glFrameBuffer";
        gl.bindFramebuffer(gl.FRAMEBUFFER, this.glFrameBuffer);
        gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, this.texture.getGlTexture(), 0);
        gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.RENDERBUFFER, this.glRenderBuffer);
        // Clean up
        this.texture.unbind();
        gl.bindRenderbuffer(gl.RENDERBUFFER, null);
        gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    };

    FrameBuffer.prototype.bind = function bind() {
        if (FrameBuffer.currInstance === this) return;
        this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.glFrameBuffer);
        this.gl.viewport(0, 0, this.width, this.height);
        FrameBuffer.currInstance = this;
    };

    FrameBuffer.prototype.unbind = function unbind() {
        this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null);
        FrameBuffer.currInstance = null;
    };

    FrameBuffer.prototype.getTexture = function getTexture() {
        return this.texture;
    };

    return FrameBuffer;
}(), _class.currInstance = null, _temp);
exports.default = FrameBuffer;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _shaderProgram = __webpack_require__(1);

var _shaderProgram2 = _interopRequireDefault(_shaderProgram);

var _spriteRectDrawer = __webpack_require__(14);

var _spriteRectDrawer2 = _interopRequireDefault(_spriteRectDrawer);

var _mat = __webpack_require__(6);

var mat4 = _interopRequireWildcard(_mat);

var _texShaderGenerator = __webpack_require__(8);

var _texShaderGenerator2 = _interopRequireDefault(_texShaderGenerator);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /*global DEBUG:true*/

var makePositionMatrix = function makePositionMatrix(dstX, dstY, dstWidth, dstHeight) {
    var projectionMatrix = mat4.ortho(0, dstWidth, 0, dstHeight, -1, 1);
    var scaleMatrix = mat4.makeScale(dstWidth, dstHeight, 1);
    return mat4.matrixMultiply(scaleMatrix, projectionMatrix);
};

var identity = mat4.makeIdentity();

var AbstractFilter = function () {
    function AbstractFilter(gl) {
        _classCallCheck(this, AbstractFilter);

        this.spriteRectDrawer = null;
        this.uniformsToSet = {};

        if (1 && !gl) throw "can not create Filter, gl context not passed to constructor, expected: Filter(gl)";
        this.gl = gl;
        var gen = new _texShaderGenerator2.default();
        this.prepare(gen);
        this._afterPrepare(gen);
    }

    AbstractFilter.prototype.prepare = function prepare(gen) {};

    AbstractFilter.prototype._afterPrepare = function _afterPrepare(gen) {
        var program = new _shaderProgram2.default(this.gl, gen.getVertexSource(), gen.getFragmentSource());
        this.spriteRectDrawer = new _spriteRectDrawer2.default(this.gl, program);
    };

    AbstractFilter.prototype.doFilter = function doFilter(srcTexture, destFrameBuffer) {
        destFrameBuffer.bind();
        var w = srcTexture.size.width;
        var h = srcTexture.size.height;
        this.uniformsToSet.u_textureMatrix = identity;
        this.uniformsToSet.u_vertexMatrix = makePositionMatrix(0, 0, w, h);
        this.spriteRectDrawer.draw(srcTexture, this.uniformsToSet);
    };

    AbstractFilter.prototype.setParam = function setParam(name, value) {
        this.uniformsToSet[name] = value;
    };

    return AbstractFilter;
}();

exports.default = AbstractFilter;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AbstractPrimitive = function AbstractPrimitive() {
    _classCallCheck(this, AbstractPrimitive);

    this.vertexArr = null;
    this.normalArr = null;
    this.texCoordArr = null;
    this.indexArr = null;
};

exports.default = AbstractPrimitive;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _abstractPrimitive = __webpack_require__(12);

var _abstractPrimitive2 = _interopRequireDefault(_abstractPrimitive);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Plane = function (_AbstractPrimitive) {
    _inherits(Plane, _AbstractPrimitive);

    function Plane() {
        _classCallCheck(this, Plane);

        var _this = _possibleConstructorReturn(this, _AbstractPrimitive.call(this));

        _this.vertexArr = [0, 0, 0, 1, 1, 0, 1, 1];
        _this.indexArr = [0, 1, 2, 3];
        _this.texCoordArr = [0, 0, 0, 1, 1, 0, 1, 1];
        return _this;
    }

    return Plane;
}(_abstractPrimitive2.default);

exports.default = Plane;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _plane = __webpack_require__(13);

var _plane2 = _interopRequireDefault(_plane);

var _shaderProgram = __webpack_require__(1);

var _shaderProgram2 = _interopRequireDefault(_shaderProgram);

var _abstractDrawer = __webpack_require__(2);

var _abstractDrawer2 = _interopRequireDefault(_abstractDrawer);

var _bufferInfo = __webpack_require__(5);

var _bufferInfo2 = _interopRequireDefault(_bufferInfo);

var _texShaderGenerator = __webpack_require__(8);

var _texShaderGenerator2 = _interopRequireDefault(_texShaderGenerator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SpriteRectDrawer = function (_AbstractDrawer) {
    _inherits(SpriteRectDrawer, _AbstractDrawer);

    function SpriteRectDrawer(gl, program) {
        _classCallCheck(this, SpriteRectDrawer);

        var _this = _possibleConstructorReturn(this, _AbstractDrawer.call(this, gl));

        var gen = new _texShaderGenerator2.default();
        _this.plane = new _plane2.default();
        _this.program = program || new _shaderProgram2.default(gl, gen.getVertexSource(), gen.getFragmentSource());
        _this.bufferInfo = new _bufferInfo2.default(gl, {
            posVertexInfo: { array: _this.plane.vertexArr, type: gl.FLOAT, size: 2, attrName: 'a_position' },
            posIndexInfo: { array: _this.plane.indexArr },
            texVertexInfo: { array: _this.plane.texCoordArr, type: gl.FLOAT, size: 2, attrName: 'a_texCoord' },
            drawMethod: _this.gl.TRIANGLE_STRIP
        });
        return _this;
    }

    SpriteRectDrawer.prototype.draw = function draw(texture, uniforms) {
        texture.bind();
        _AbstractDrawer.prototype.draw.call(this, uniforms);
    };

    return SpriteRectDrawer;
}(_abstractDrawer2.default);

exports.default = SpriteRectDrawer;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _shaderProgramUtils = __webpack_require__(7);

var _shaderGenerator = __webpack_require__(16);

var _shaderGenerator2 = _interopRequireDefault(_shaderGenerator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//position and color
var ColorShaderGenerator = function (_ShaderGenerator) {
    _inherits(ColorShaderGenerator, _ShaderGenerator);

    function ColorShaderGenerator() {
        _classCallCheck(this, ColorShaderGenerator);

        var _this = _possibleConstructorReturn(this, _ShaderGenerator.call(this));

        _this.addAttribute(_shaderProgramUtils.GL_TYPE.FLOAT_VEC4, 'a_position');
        _this.addVertexUniform(_shaderProgramUtils.GL_TYPE.FLOAT_MAT4, 'u_vertexMatrix');
        _this.setVertexMainFn('\n            gl_Position = u_vertexMatrix * a_position;\n        ');
        _this.addFragmentUniform(_shaderProgramUtils.GL_TYPE.FLOAT, 'u_alpha');
        _this.addFragmentUniform(_shaderProgramUtils.GL_TYPE.FLOAT_VEC4, 'u_rgba');
        _this.setFragmentMainFn('\n            gl_FragColor = u_rgba;\n        ');
        return _this;
    }

    return ColorShaderGenerator;
}(_shaderGenerator2.default);

exports.default = ColorShaderGenerator;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ShaderGenerator = function () {
    function ShaderGenerator() {
        _classCallCheck(this, ShaderGenerator);

        this.vertexUniforms = [];
        this.fragmentUniforms = [];
        this.attributes = [];
        this.varyings = [];
        this.fragCodeBlocks = [];
        this.vertexCodeBlocks = [];
        this.vertexMainFn = '';
        this.fragmentMainFn = '';
    }

    ShaderGenerator.prototype.addVertexUniform = function addVertexUniform(type, name) {
        this.vertexUniforms.push({ type: type, name: name });
        return this;
    };

    ShaderGenerator.prototype.addFragmentUniform = function addFragmentUniform(type, name) {
        this.fragmentUniforms.push({ type: type, name: name });
        return this;
    };

    ShaderGenerator.prototype.addAttribute = function addAttribute(type, name) {
        this.attributes.push({ type: type, name: name });
        return this;
    };

    ShaderGenerator.prototype.addVarying = function addVarying(type, name) {
        this.varyings.push({ type: type, name: name });
        return this;
    };

    ShaderGenerator.prototype.addVertexCodeBlock = function addVertexCodeBlock(code) {
        this.vertexCodeBlocks.push(code);
    };

    ShaderGenerator.prototype.addFragmentCodeBlock = function addFragmentCodeBlock(code) {
        this.fragCodeBlocks.push(code);
    };

    ShaderGenerator.prototype.setVertexMainFn = function setVertexMainFn(fnCode) {
        this.vertexMainFn = fnCode;
        return this;
    };

    ShaderGenerator.prototype.setFragmentMainFn = function setFragmentMainFn(fnCode) {
        this.fragmentMainFn = fnCode;
        return this;
    };

    ShaderGenerator.prototype.getVertexSource = function getVertexSource() {
        return ('\n            ' + this.vertexUniforms.map(function (u) {
            return 'uniform   ' + u.type + ' ' + u.name + ';';
        }).join('\n') + '\n            ' + this.attributes.map(function (u) {
            return 'attribute ' + u.type + ' ' + u.name + ';';
        }).join('\n') + '\n            ' + this.varyings.map(function (u) {
            return 'varying   ' + u.type + ' ' + u.name + ';';
        }).join('\n') + '\n            ' + this.vertexCodeBlocks.map(function (v) {
            return '' + v;
        }).join('\n') + '\n            void main() {\n               ' + this.vertexMainFn + '\n            }\n            ').replace(/\s{2,}/, ' ').replace(/\t/, '');
    };

    ShaderGenerator.prototype.getFragmentSource = function getFragmentSource() {
        return (
            // lowp, mediump, highp
            ('\n            precision mediump float;\n            ' + this.fragmentUniforms.map(function (u) {
                return 'uniform ' + u.type + ' ' + u.name + ';';
            }).join('\n') + '\n            ' + this.varyings.map(function (u) {
                return 'varying ' + u.type + ' ' + u.name + ';';
            }).join('\n') + '\n            ' + this.fragCodeBlocks.map(function (v) {
                return '' + v;
            }).join('\n') + '\n            void main() {\n               ' + this.fragmentMainFn + '\n            }\n            ').replace(/\s{2,}/, ' ').replace(/\t/, '')
        );
    };

    ShaderGenerator.prototype.debug = function debug() {
        console.log(this.getVertexSource());
        console.log(this.getFragmentSource());
    };

    return ShaderGenerator;
}();

exports.default = ShaderGenerator;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*global DEBUG:true*/

var BaseAbstractBehaviour = function () {
    function BaseAbstractBehaviour() {
        _classCallCheck(this, BaseAbstractBehaviour);
    }

    BaseAbstractBehaviour.prototype.manage = function manage() {
        console.error(this);
        if (true) throw "BaseAbstractBehaviour: method 'manage' not implemented";
    };

    BaseAbstractBehaviour.prototype.onUpdate = function onUpdate() {};

    return BaseAbstractBehaviour;
}();

exports.default = BaseAbstractBehaviour;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _baseAbstractBehaviour = __webpack_require__(17);

var _baseAbstractBehaviour2 = _interopRequireDefault(_baseAbstractBehaviour);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Moveable = function (_BaseAbstractBehaviou) {
    _inherits(Moveable, _BaseAbstractBehaviou);

    function Moveable(game) {
        _classCallCheck(this, Moveable);

        var _this = _possibleConstructorReturn(this, _BaseAbstractBehaviou.call(this));

        _this.gameObject = null;

        _this.game = game;
        return _this;
    }

    Moveable.prototype.manage = function manage(gameObject, parameters, dirs) {
        var _this2 = this;

        this.gameObject = gameObject;
        this.parameters = parameters;
        this.animations = {};
        dirs.forEach(function (dir) {
            var keyWalk = 'walk' + dir + 'Animation',
                keyIdle = 'idle' + dir + 'Animation';
            _this2.animations[keyWalk] = _this2.gameObject.frameAnimations.find(function (it) {
                return it.name === parameters[keyWalk];
            });
            //if (!this.animations[keyWalk]) throw `can not find animation ${parameters[keyWalk]} at gameObject ${this.gameObject.name}`;
            parameters[keyIdle] && (_this2.animations[keyIdle] = _this2.gameObject.frameAnimations.find(function (it) {
                return it.name === parameters[keyIdle];
            }));
        });
    };

    Moveable.prototype.stop = function stop() {
        this.gameObject.stopFrAnimations();
        var keyIdle = 'idle' + this.gameObject._lastDirection + 'Animation';
        if (this.animations[keyIdle]) {
            this.animations[keyIdle].play();
        }
    };

    Moveable.prototype.go = function go(direction) {
        this.gameObject._lastDirection = direction;
        this.animations['walk' + direction + 'Animation'].play();
    };

    return Moveable;
}(_baseAbstractBehaviour2.default);

exports.default = Moveable;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var SCALE_STRATEGY = exports.SCALE_STRATEGY = {
    NO_SCALE: 0,
    FIT: 1
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.Transient = Transient;
function Transient(params) {
    return function (target) {
        target.transient = params;
    };
}

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*global DEBUG:true*/

var IndexBuffer = function () {
    function IndexBuffer(gl) {
        _classCallCheck(this, IndexBuffer);

        if (1 && !gl) throw "can not create IndexBuffer, gl context not passed to constructor, expected: IndexBuffer(gl)";

        this.gl = gl;
        this.buffer = gl.createBuffer();
        if (1 && !this.buffer) throw "can not allocate memory for index buffer";
        this.dataLength = null;
    }

    IndexBuffer.prototype.setData = function setData(bufferData) {
        if (true) {
            if (!bufferData) throw 'can not set data to buffer: bufferData not specified';
        }

        var gl = this.gl;

        this.dataLength = bufferData.length;
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.buffer);
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(bufferData), gl.STATIC_DRAW);
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
    };

    IndexBuffer.prototype.getGlBuffer = function getGlBuffer() {
        return this.buffer;
    };

    IndexBuffer.prototype.bind = function bind() {
        this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.buffer);
    };

    IndexBuffer.prototype.unbind = function unbind() {
        this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, null);
    };

    IndexBuffer.prototype.getBufferLength = function getBufferLength() {
        return this.dataLength;
    };

    return IndexBuffer;
}();

exports.default = IndexBuffer;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _class2, _temp;

var _frameBuffer = __webpack_require__(10);

var _frameBuffer2 = _interopRequireDefault(_frameBuffer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /*global DEBUG:true*/

var isPowerOf2 = function isPowerOf2(value) {
    return (value & value - 1) === 0;
};

// array of two frameBuffer for filters to apply

var TextureFilterBuffer = function () {
    // lazy initialized

    function TextureFilterBuffer(parent) {
        _classCallCheck(this, TextureFilterBuffer);

        this.gl = null;
        this.parent = null;
        this.buffers = null;

        this.parent = parent;
    }

    TextureFilterBuffer.prototype.instantiate = function instantiate(gl) {
        this.gl = gl;
        this.buffers = [];
        var buffSize = 2;
        for (var i = 0; i < buffSize; i++) {
            this.buffers.push(new _frameBuffer2.default(gl, this.parent.size.width, this.parent.size.height));
        }
    };

    TextureFilterBuffer.prototype.flip = function flip() {
        var tmp = this.buffers[0];
        this.buffers[0] = this.buffers[1];
        this.buffers[1] = tmp;
    };

    TextureFilterBuffer.prototype.getSourceBuffer = function getSourceBuffer() {
        return this.buffers[0];
    };

    TextureFilterBuffer.prototype.getDestBuffer = function getDestBuffer() {
        return this.buffers[1];
    };

    return TextureFilterBuffer;
}();

var Texture = (_temp = _class2 = function () {
    function Texture(gl) {
        _classCallCheck(this, Texture);

        this.tex = null;
        this.size = null;
        this.isPowerOfTwo = false;
        this._texFilterBuff = null;

        if (1 && !gl) throw "can not create Texture, gl context not passed to constructor, expected: Texture(gl)";
        this.gl = gl;

        this.tex = gl.createTexture();
        if (1 && !this.tex) throw "can not allocate memory for texture";
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


    Texture.prototype.setImage = function setImage(img, width, height) {
        if (true) {
            if (!(img || width || height)) throw "texture.setImage: if image is null, width and height must be specified: tex.setImage(null,w,h)";
        }

        var gl = this.gl;
        if (img) this.size = { width: img.width, height: img.height };else this.size = { width: width, height: height };
        this.bind();
        gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, true);
        if (img) {
            gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img);
        } else {
            gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, width, height, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
        }
        this.isPowerOfTwo = img && isPowerOf2(img.width) && isPowerOf2(img.height);
        // Check if the image is a power of 2 in both dimensions.
        if (this.isPowerOfTwo) {
            gl.generateMipmap(gl.TEXTURE_2D);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT);
            // gl.generateMipmap( gl.TEXTURE_2D );
        } else {
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR); // NEAREST,LINEAR
        }
        gl.bindTexture(gl.TEXTURE_2D, null);
    };

    Texture.prototype.applyFilters = function applyFilters(filters, frameBuffer) {
        if (1 && frameBuffer === undefined) throw "can not apply filters. frameBuffer must be explicitly passed. Pass null if no frame buffer needs to bind after filtering";
        var len = filters.length;
        if (len === 0) return this;
        if (this._texFilterBuff.buffers === null) this._texFilterBuff.instantiate(this.gl);
        var filter = filters[0];
        filter.doFilter(this, this._texFilterBuff.getDestBuffer());
        for (var i = 1; i < len; i++) {
            this._texFilterBuff.flip();
            filters[i].doFilter(this._texFilterBuff.getSourceBuffer().texture, this._texFilterBuff.getDestBuffer());
        }
        this._texFilterBuff.flip();
        if (frameBuffer !== null) frameBuffer.bind();
        return this._texFilterBuff.getSourceBuffer().texture;
    };

    Texture.prototype.bind = function bind() {
        var i = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        // uniform eq to 0 by default
        // to define max texture units supported gl.getParameter(gl.MAX_TEXTURE_IMAGE_UNITS);
        if (Texture.currInstances[i] === this) return;
        var gl = this.gl;
        gl.activeTexture(gl.TEXTURE0 + i);
        gl.bindTexture(gl.TEXTURE_2D, this.tex);
        Texture.currInstances[i] = this;
    };

    Texture.prototype.unbind = function unbind() {
        var i = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

        this.gl.bindTexture(this.gl.TEXTURE_2D, null);
        Texture.currInstances[i] = null;
    };

    Texture.prototype.getSize = function getSize() {
        return this.size;
    };

    Texture.prototype.getGlTexture = function getGlTexture() {
        return this.tex;
    };

    return Texture;
}(), _class2.currInstances = {}, _temp);
exports.default = Texture;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*global DEBUG:true*/

var VertexBuffer = function () {
    function VertexBuffer(gl) {
        _classCallCheck(this, VertexBuffer);

        if (1 && !gl) throw "can not create VertexBuffer, gl context not passed to constructor, expected: VertexBuffer(gl)";
        this.gl = gl;
        this.buffer = gl.createBuffer();
        if (1 && !this.buffer) throw 'can not allocate memory for vertex buffer';
        this.bufferItemSize = null;
        this.bufferItemType = null;
        this.dataLength = null;
        this.attrName = null;
    }

    VertexBuffer.prototype.setData = function setData(bufferData, itemType, itemSize) {
        if (true) {
            if (!bufferData) throw 'can not set data to buffer: bufferData not specified';
            if (!itemType) throw 'can not set data to buffer: itemType not specified';
            if (!itemSize) throw 'can not set data to buffer: itemSize not specified';
        }
        var gl = this.gl;

        gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(bufferData), gl.STATIC_DRAW); // DYNAMIC_DRAW, STREAM_DRAW
        gl.bindBuffer(gl.ARRAY_BUFFER, null);
        this.bufferItemSize = itemSize;
        this.bufferItemType = itemType; // BYTE, FLOAT, INT, UNSIGNED_SHORT ...
        this.dataLength = bufferData.length;
    };

    VertexBuffer.prototype.setAttrName = function setAttrName(attrName) {
        this.attrName = attrName;
    };

    VertexBuffer.prototype.bind = function bind(program) {
        if (1 && !program) throw "can not bind VertexBuffer, program not specified";
        if (1 && !this.attrName) throw "can not bind VertexBuffer, attribute name not specified";
        program.bindBuffer(this, this.attrName);
    };

    VertexBuffer.prototype.unbind = function unbind() {
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, null);
    };

    VertexBuffer.prototype.getGlBuffer = function getGlBuffer() {
        return this.buffer;
    };

    VertexBuffer.prototype.getItemSize = function getItemSize() {
        return this.bufferItemSize;
    };

    VertexBuffer.prototype.getItemType = function getItemType() {
        return this.bufferItemType;
    };

    VertexBuffer.prototype.getBufferLength = function getBufferLength() {
        return this.dataLength;
    };

    return VertexBuffer;
}();

exports.default = VertexBuffer;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _abstractFilter = __webpack_require__(11);

var _abstractFilter2 = _interopRequireDefault(_abstractFilter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BlackWhiteFilter = function (_AbstractFilter) {
    _inherits(BlackWhiteFilter, _AbstractFilter);

    function BlackWhiteFilter(gl) {
        _classCallCheck(this, BlackWhiteFilter);

        return _possibleConstructorReturn(this, _AbstractFilter.call(this, gl));
    }

    BlackWhiteFilter.prototype.prepare = function prepare(programGen) {
        programGen.addFragmentUniform('float', 'u_mixFactor');
        programGen.setFragmentMainFn('\n            vec4 col = texture2D(texture, v_texCoord);\n            float avg = (col.r+col.g+col.b)/3.0;\n            vec4 bw = vec4(avg);\n            vec4 result = mix(col,bw,vec4(u_mixFactor));\n            result.a = 1.0;\n            gl_FragColor = result; \n        ');
        this.setParam('u_mixFactor', 0.8);
    };

    return BlackWhiteFilter;
}(_abstractFilter2.default);

exports.default = BlackWhiteFilter;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _mathEx = __webpack_require__(4);

var mathEx = _interopRequireWildcard(_mathEx);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var accessByPath = function accessByPath(obj, path) {
    var pathArr = path.split('.');
    if (pathArr.length === 1) return { targetObj: obj, targetKey: path };
    var lastPath = pathArr.pop();
    pathArr.forEach(function (p) {
        obj = obj[p];
    });
    return { targetObj: obj, targetKey: lastPath };
};

var setValByPath = function setValByPath(obj, path, val) {
    var _accessByPath = accessByPath(obj, path),
        targetObj = _accessByPath.targetObj,
        targetKey = _accessByPath.targetKey;

    targetObj[targetKey] = val;
};

var getValByPath = function getValByPath(obj, path, val) {
    var _accessByPath2 = accessByPath(obj, path),
        targetObj = _accessByPath2.targetObj,
        targetKey = _accessByPath2.targetKey;

    return targetObj[targetKey];
};

var Tween = function () {

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
        _classCallCheck(this, Tween);

        this.propsToChange = [];
        this.startedTime = null;
        this.currTime = null;
        this.completed = false;

        this.obj = tweenDesc.target;
        this.progressFn = tweenDesc.progress;
        this.completeFn = tweenDesc.complete;
        this.easeFnName = tweenDesc.ease || 'linear';
        this.tweenTime = tweenDesc.time || 1000;
        this.desc = this.normalizeDesc(tweenDesc);
    }

    Tween.prototype.reuse = function reuse(newTweenDesc) {
        var _this = this;

        this.startedTime = this.currTime;
        this.completed = false;

        Object.keys(newTweenDesc).forEach(function (key) {
            _this.desc[key] = newTweenDesc[key];
        });
        this.desc = this.normalizeDesc(newTweenDesc);
    };

    Tween.prototype.normalizeDesc = function normalizeDesc(tweenDesc) {
        var _this2 = this;

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
            if (tweenDesc.from[prp] === undefined) tweenDesc.from[prp] = getValByPath(_this2.obj, prp);
            if (tweenDesc.to[prp] === undefined) tweenDesc.to[prp] = getValByPath(_this2.obj, prp);
        });
        return tweenDesc;
    };

    Tween.prototype.update = function update(time) {
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
            setValByPath(this.obj, prp, valCurr);
        }
        this.progressFn && this.progressFn(this.obj);
    };

    Tween.prototype.progress = function progress(_progressFn) {
        this.progressFn = _progressFn;
    };

    Tween.prototype.reset = function reset() {
        this.startedTime = null;
        this.completed = false;
    };

    Tween.prototype._complete = function _complete() {
        if (this.completed) return;
        var l = this.propsToChange.length;
        while (l--) {
            var prp = this.propsToChange[l];
            var valCurr = this.desc.to[prp];
            setValByPath(this.obj, prp, valCurr);
        }
        this.progressFn && this.progressFn(this.obj);
        this.completeFn && this.completeFn(this.obj);
        this.completed = true;
    };

    return Tween;
}();

exports.default = Tween;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var isPropNotFit = function isPropNotFit(key, val, opts) {
    if (!key) return true;
    if (key.indexOf('_') === 0) return true;
    if (val && val.call) return true;
    if (typeof val === 'string') return false;
    if (typeof val === 'number') return false;
    if (typeof val === 'boolean') return false;
    return val == null && !opts.preserveNull;
};

var isPrimitive = function isPrimitive(val) {
    return typeof val === 'string' || typeof val === 'number';
};

var deepCopy = function deepCopy(obj) {
    var _clonedObjects = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

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
    } else if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object') {
        var _out = {};
        for (var _i in obj) {
            if (!obj.hasOwnProperty(_i)) continue;
            var _clonedObject = void 0;
            if (_clonedObjects.indexOf(obj[_i]) > -1) {
                _clonedObject = obj[_i];
            } else {
                _clonedObjects.push(obj);
                _clonedObject = deepCopy(obj[_i], _clonedObjects);
                _clonedObjects.push(obj[_i]);
            }
            _out[_i] = _clonedObject;
        }
        return _out;
    } else return obj;
};

var CommonObject = function () {
    function CommonObject() {
        _classCallCheck(this, CommonObject);
    }

    CommonObject.prototype.fromJSON = function fromJSON() {
        var _this = this;

        var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var forceNew = arguments[1];

        Object.keys(params).forEach(function (key) {
            if (key === 'type') return;

            if (!(key in _this)) {
                console.error(_this);
                throw '::fromJSON(): class ' + _this.constructor.name + ' has no property ' + key;
            }

            if (params[key].id && params[key].type) _this[key] = _this.game.repository.getObject(params[key].id, params[key].type, forceNew);else if (params[key].forEach) {
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
            } else _this[key] = params[key];
        });
        this.revalidate();
        return this;
    };

    CommonObject.prototype.toJSON = function toJSON() {
        var _this2 = this;

        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { preserveNull: false };

        var res = {};

        for (var key in this) {
            if (isPropNotFit(key, this[key], opts)) {
                continue;
            }
            if (this.constructor.transient && this.constructor.transient[key]) {
                continue;
            }
            if (this[key] != null && this[key].type && this[key].id) {
                // is model
                res[key] = {
                    id: this[key].id,
                    type: this[key].type
                };
            } else if (this[key] != null && this[key].splice) {
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
            } else if (this[key].toJSON) {
                res[key] = this[key].toJSON();
            } else {
                var possiblePrimitive = deepCopy(this[key]);
                if (possiblePrimitive && possiblePrimitive.splice && !possiblePrimitive.length) continue;else if (possiblePrimitive != null && (typeof possiblePrimitive === 'undefined' ? 'undefined' : _typeof(possiblePrimitive)) === 'object' && !Object.keys(possiblePrimitive).length) continue;
                res[key] = possiblePrimitive;
            }
        }
        return res;
    };

    CommonObject.prototype.revalidate = function revalidate() {};

    return CommonObject;
}();

exports.default = CommonObject;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _baseModel = __webpack_require__(0);

var _baseModel2 = _interopRequireDefault(_baseModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*global IN_EDITOR:true*/
/*global DEBUG:true*/
/*global window:true*/


var GameObjectProto = function (_BaseModel) {
    _inherits(GameObjectProto, _BaseModel);

    GameObjectProto.find = function find(name) {
        //return game.getCurrScene()._allGameObjects.find({name:name});
    };

    GameObjectProto.findAll = function findAll(name) {
        //return game.getCurrScene()._allGameObjects.findAll({name: name});
    };

    function GameObjectProto(game) {
        _classCallCheck(this, GameObjectProto);

        var _this = _possibleConstructorReturn(this, _BaseModel.call(this, game));

        _this.type = 'GameObjectProto';
        _this.spriteSheet = null;
        _this._behaviour = null;
        _this.commonBehaviour = [];
        _this.currFrameIndex = 0;
        _this._sprPosX = 0;
        _this._sprPosY = 0;
        _this.frameAnimations = [];
        _this._currFrameAnimation = 0;
        _this.startFrameAnimationName = null;
        _this._timeCreated = null;
        _this.tileOffset = { x: 0, y: 0 };
        _this.tileRepeat = false;
        _this.groupName = '';
        _this._individualBehaviour = null;
        _this.filters = [];
        return _this;
    }

    GameObjectProto.prototype.revalidate = function revalidate() {
        var _this2 = this;

        _BaseModel.prototype.revalidate.call(this);
        this.setFrameIndex(this.currFrameIndex);
        if (this.spriteSheet) {
            this.width = this.spriteSheet._frameWidth;
            this.height = this.spriteSheet._frameHeight;
        }
        this.frameAnimations.forEach(function (f, i) {
            _this2.frameAnimations[i] = _this2.frameAnimations[i].clone(); // todo need clone?
            _this2.frameAnimations[i]._gameObject = _this2;
        });
    };

    GameObjectProto.prototype.playFrameAnimation = function playFrameAnimation(animationName, opts) {
        var fr = this.frameAnimations.find(function (it) {
            return it.name === animationName;
        });
        fr._gameObject = this;
        this._currFrameAnimation = fr;
        fr.play(opts);
    };

    GameObjectProto.prototype.setFrameIndex = function setFrameIndex(index) {
        this.currFrameIndex = index;
        this._sprPosX = this.spriteSheet.getFramePosX(this.currFrameIndex);
        this._sprPosY = this.spriteSheet.getFramePosY(this.currFrameIndex);
    };

    GameObjectProto.prototype.update = function update(time, delta) {
        _BaseModel.prototype.update.call(this, time);
        this._currFrameAnimation && this._currFrameAnimation.update(time);
        //if (_gameObject.angleVel) _gameObject.angle += _gameObject.angleVel * delta / 1000;

        if (this._individualBehaviour) this._individualBehaviour.onUpdate(time, delta);
        for (var i = 0, max = this.commonBehaviour.length; i < max; i++) {
            this.commonBehaviour[i].onUpdate(time, delta);
        }
        if (this.rigidBody !== null) this.rigidBody.update(time, delta);
        this.game.renderer.draw(this);
    };

    GameObjectProto.prototype.onShow = function onShow() {
        if (this._individualBehaviour) this._individualBehaviour.onCreate();
        if (this.startFrameAnimationName !== null) this.playFrameAnimation(this.startFrameAnimationName);
    };

    GameObjectProto.prototype.stopFrAnimations = function stopFrAnimations() {
        this._currFrameAnimation && this._currFrameAnimation.stop();
    };

    GameObjectProto.prototype.kill = function kill() {
        this._layer.kill(this);
    };

    return GameObjectProto;
}(_baseModel2.default);

exports.default = GameObjectProto;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _baseModel = __webpack_require__(0);

var _baseModel2 = _interopRequireDefault(_baseModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TileMap = function (_BaseModel) {
    _inherits(TileMap, _BaseModel);

    function TileMap(game) {
        _classCallCheck(this, TileMap);

        var _this = _possibleConstructorReturn(this, _BaseModel.call(this, game));

        _this.type = "TileMap";
        _this.spriteSheet = null;
        _this.data = [];
        return _this;
    }

    TileMap.prototype.getTileAt = function getTileAt(x, y) {
        var _this2 = this;

        if (!this.spriteSheet) return;
        var tilePosX = ~~(x / this.spriteSheet._frameWidth);
        var tilePosY = ~~(y / this.spriteSheet._frameHeight);
        if (!this.data[tilePosY]) return;
        var value = this.data[tilePosY][tilePosX];
        if (value == null) return;
        return {
            getRect: function getRect() {
                var x = tilePosX * _this2.spriteSheet._frameWidth + 1,
                    y = tilePosY * _this2.spriteSheet._frameHeight + 1,
                    width = _this2.spriteSheet._frameWidth - 2,
                    height = _this2.spriteSheet._frameHeight - 2;
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

    TileMap.prototype.getTilesAtRect = function getTilesAtRect(rect) {
        var result = [];
        if (!this.spriteSheet) return result;
        var alreadyCheckedTiles = {};

        var x = rect.x,
            y = void 0;
        var maxX = rect.x + rect.width,
            maxY = rect.y + rect.height;
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
                if (y === maxY) break;
                y += this.spriteSheet._frameHeight;
                if (y > maxY) y = maxY;
            }
            if (x === maxX) break;
            x += this.spriteSheet._frameWidth;
            if (x > maxX) x = maxX;
        }
        //if (result.length) result = [result[0]];
        //if (result.length) console.log('collided with',result.length);
        return result;
    };

    TileMap.prototype.update = function update() {
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
        for (var y = tilePosY; y < h; y++) {
            for (var x = tilePosX; x < w; x++) {
                var index = this.data[y] && this.data[y][x];
                if (index === null || index === undefined) continue;
                renderer.drawImage(spriteSheet.resourcePath, spriteSheet.getFramePosX(index), spriteSheet.getFramePosY(index), spriteSheet._frameWidth, spriteSheet._frameHeight, x * spriteSheet._frameWidth, y * spriteSheet._frameHeight);
            }
        }
    };

    return TileMap;
}(_baseModel2.default);

exports.default = TileMap;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _baseModel = __webpack_require__(0);

var _baseModel2 = _interopRequireDefault(_baseModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*global DEBUG:true*/


var TextField = function (_BaseModel) {
    _inherits(TextField, _BaseModel);

    function TextField(game) {
        _classCallCheck(this, TextField);

        var _this = _possibleConstructorReturn(this, _BaseModel.call(this, game));

        _this.type = 'TextField';
        _this._chars = null;
        _this.text = '';
        _this.font = null;
        return _this;
    }

    TextField.prototype.revalidate = function revalidate() {
        if (1 && !this.name) {
            console.error(this);
            throw 'property \'name\' not set at object of type ' + this.type;
        }
        if (this.font === null) this.font = this.game.repository.getArray('Font')[0];
        if (1 && !this.font) throw 'at least one Font must be created';
        this.setFont(this.font);
    };

    TextField.prototype.setText = function setText(text) {
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
            } else {
                rows[currRowIndex].width += currSymbolInFont.width;
            }
        }
        this.width = Math.max.apply(Math, rows.map(function (o) {
            return o.width;
        }));
    };

    TextField.prototype.getText = function getText() {
        return this.text;
    };

    TextField.prototype.setFont = function setFont(font) {
        this.font = font;
        this.setText(this.text);
    };

    TextField.prototype.update = function update(time) {
        _BaseModel.prototype.update.call(this, time);
        this.render();
    };

    TextField.prototype.render = function render() {
        var _this2 = this;

        var posX = 0;
        var posY = 0;
        this._chars.forEach(function (ch) {
            var charInCtx = _this2.font.fontContext.symbols[ch] || _this2.font.fontContext.symbols['?'];
            if (ch === '\n') {
                posX = 0;
                posY += charInCtx.height;
                return;
            }
            _this2.game.renderer.drawImage(_this2.font.resourcePath, charInCtx.x, charInCtx.y, charInCtx.width, charInCtx.height, _this2.pos.x + posX, _this2.pos.y + posY);
            posX += charInCtx.width;
        });
    };

    return TextField;
}(_baseModel2.default);

exports.default = TextField;

/***/ }),
/* 30 */,
/* 31 */,
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _dec, _class; /*global requestAnimationFrame:true*/
/*global window:true*/
/*global DEBUG:true*/
/*global IN_EDITOR:true*/
/*global PROJECT_NAME:true*/


__webpack_require__(60);

var _rendererFactory = __webpack_require__(64);

var _rendererFactory2 = _interopRequireDefault(_rendererFactory);

var _repository = __webpack_require__(78);

var _repository2 = _interopRequireDefault(_repository);

var _mouse = __webpack_require__(54);

var _mouse2 = _interopRequireDefault(_mouse);

var _keyboard = __webpack_require__(53);

var _keyboard2 = _interopRequireDefault(_keyboard);

var _gamePad = __webpack_require__(52);

var _gamePad2 = _interopRequireDefault(_gamePad);

var _collider = __webpack_require__(62);

var _collider2 = _interopRequireDefault(_collider);

var _decorators = __webpack_require__(20);

var _commonObject = __webpack_require__(26);

var _commonObject2 = _interopRequireDefault(_commonObject);

var _camera = __webpack_require__(51);

var _camera2 = _interopRequireDefault(_camera);

var _consts = __webpack_require__(19);

var _point2d = __webpack_require__(3);

var _point2d2 = _interopRequireDefault(_point2d);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Game = (_dec = (0, _decorators.Transient)({
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
}), _dec(_class = function (_CommonObject) {
    _inherits(Game, _CommonObject);

    // = SCALE_STRATEGY.FIT;
    function Game() {
        _classCallCheck(this, Game);

        var _this = _possibleConstructorReturn(this, _CommonObject.call(this));

        _this._lastTime = null;
        _this._currTime = null;
        _this._currentScene = null;
        _this._running = false;
        _this.destroyed = false;
        _this.renderer = null;
        _this.scale = new _point2d2.default(1, 1);
        _this.pos = new _point2d2.default(0, 0);
        _this.width = null;
        _this.height = null;
        _this.gravityConstant = null;
        _this.fps = null;
        _this.gamePad = null;
        _this.scaleStrategy = null;
        _this.startSceneId = null;
        _this._revalidated = false;

        var time = Date.now();
        _this._lastTime = _this._currTime = time;
        _this._deltaTime = 0;
        _this.repository = new _repository2.default(_this);
        _this.mouse = new _mouse2.default(_this);
        _this.keyboard = new _keyboard2.default(_this);
        _this.keyboard.listenTo();
        _this.gamePad = new _gamePad2.default(_this);
        _this.collider = new _collider2.default(_this);
        _this.camera = new _camera2.default(_this);
        return _this;
    }

    Game.prototype.revalidate = function revalidate() {
        this.renderer = _rendererFactory2.default.getRenderer(this);
        this.mouse.listenTo(this.renderer.container);
        this._revalidated = true;
    };

    Game.prototype.getTime = function getTime() {
        return this._lastTime;
    };

    Game.prototype.getDeltaTime = function getDeltaTime() {
        return this._deltaTime;
    };

    Game.prototype.runScene = function runScene(scene) {
        var _this2 = this;

        if (1 && !this._revalidated) throw 'game.revalidate() method not invoked. Invoke game.fromJSON(gameParams) or call game.revalidate() method directly';
        this._currentScene = scene;
        if (true) {
            var allScripts = __webpack_require__(36);
            var sceneBhScriptName = '' + scene.name[0].toUpperCase() + scene.name.substr(1) + 'Behaviour';
            if (sceneBhScriptName) scene.setIndividualBehaviour(allScripts[sceneBhScriptName]);
            scene.layers.forEach(function (l) {
                l.gameObjects.forEach(function (go) {
                    go.setCommonBehaviour();
                    var scriptName = '' + go.name[0].toUpperCase() + go.name.substr(1) + 'Behaviour';
                    var bhClass = allScripts[scriptName];
                    if (bhClass) go.setIndividualBehaviour(bhClass);
                });
            });
        }
        scene.preload(function () {
            _this2._currentScene.onShow();
            if (!_this2._running) {
                _this2.update();
                _this2._running = true;
            }
        });
    };

    Game.prototype.getCurrScene = function getCurrScene() {
        return this._currentScene;
    };

    Game.prototype.setCurrScene = function setCurrScene(scene) {
        this._currentScene = scene;
    };

    Game.prototype.update = function update() {
        if (1 && this.destroyed) return;
        this._lastTime = this._currTime;
        this._currTime = Date.now();
        this._deltaTime = this._currTime - this._lastTime;
        if (true) {
            this.fps = ~~(1000 / this._deltaTime);
            window.fps = this.fps;
            var renderError = this.renderer.getError();
            if (renderError) throw 'render error with code ' + renderError;
        }
        if (this._deltaTime > 20) this._deltaTime = 20;
        this._currentScene && this._currentScene.update(this._currTime, this._deltaTime);
        this.keyboard.update();
        this.gamePad.update();
        requestAnimationFrame(this.update.bind(this));
    };

    Game.prototype.destroy = function destroy() {
        this.destroyed = true;
        this.keyboard.destroy();
        this.mouse.destroy();
        this.renderer.destroy();
        this.renderer.cancelFullScreen();
    };

    return Game;
}(_commonObject2.default)) || _class);
exports.default = Game;

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = {width:800,height:500,scaleStrategy:1,startSceneId:2,scale:{x:1,y:1},pos:{x:0,y:0},gravityConstant:800};

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = {Scene:[{"id":2,"name":"mainScene","width":5000,"height":800,"type":"Scene","layers":[{"type":"Layer","id":2}],"useBG":true,"colorBG":{"r":50,"g":68,"b":154},"tileMap":{"id":52,"type":"TileMap"}}],Layer:[{"id":2,"name":"layer1","type":"Layer","gameObjects":[{"type":"GameObject","id":7},{"type":"GameObject","id":63},{"type":"GameObject","id":64},{"type":"GameObject","id":65},{"type":"GameObject","id":67},{"type":"GameObject","id":68},{"type":"GameObject","id":71},{"type":"GameObject","id":74},{"type":"TextField","id":76},{"type":"GameObject","id":77},{"type":"GameObject","id":78},{"type":"GameObject","id":81},{"type":"GameObject","id":82},{"type":"GameObject","id":86},{"type":"GameObject","id":87}]}],SpriteSheet:[{"name":"dude","width":288,"height":48,"type":"SpriteSheet","numOfFramesH":9,"resourcePath":"resources/dude.png","id":3},{"name":"platform","width":500,"height":64,"type":"SpriteSheet","resourcePath":"resources/platform.png","id":5},{"name":"ground","width":800,"height":32,"type":"SpriteSheet","numOfFramesH":25,"resourcePath":"resources/ground.png","id":57},{"name":"clamp","width":64,"height":64,"type":"SpriteSheet","resourcePath":"resources/clamp.png","id":69},{"name":"tile","width":262,"height":192,"type":"SpriteSheet","resourcePath":"resources/tile.jpg","id":72},{"name":"flare","width":174,"height":173,"type":"SpriteSheet","resourcePath":"resources/flare.png","id":79},{"name":"eso1611a","width":120,"height":120,"type":"SpriteSheet","resourcePath":"resources/eso1611a.png","id":84}],GameObjectProto:[{"id":4,"name":"dude","width":32,"height":48,"rigid":true,"type":"GameObjectProto","spriteSheet":{"id":3,"type":"SpriteSheet"},"commonBehaviour":[{"type":"CommonBehaviour","id":15},{"type":"CommonBehaviour","id":60}],"frameAnimations":[{"type":"FrameAnimation","id":11},{"type":"FrameAnimation","id":12},{"type":"FrameAnimation","id":13},{"type":"FrameAnimation","id":14}]},{"id":6,"name":"platform","width":500,"height":64,"rigid":true,"type":"GameObjectProto","spriteSheet":{"id":5,"type":"SpriteSheet"},"commonBehaviour":[{"type":"CommonBehaviour","id":61}]},{"id":58,"name":"ground1","width":32,"height":32,"rigid":true,"type":"GameObjectProto","spriteSheet":{"id":57,"type":"SpriteSheet"},"commonBehaviour":[{"type":"CommonBehaviour","id":62}],"currFrameIndex":9},{"id":70,"name":"clamp","width":64,"height":64,"rigid":true,"type":"GameObjectProto","spriteSheet":{"id":69,"type":"SpriteSheet"},"commonBehaviour":[{"type":"CommonBehaviour","id":75}]},{"id":73,"name":"tile","width":262,"height":192,"rigid":true,"type":"GameObjectProto","spriteSheet":{"id":72,"type":"SpriteSheet"}},{"id":80,"name":"flare","width":174,"height":173,"type":"GameObjectProto","spriteSheet":{"id":79,"type":"SpriteSheet"},"commonBehaviour":[{"type":"CommonBehaviour","id":83}]},{"id":85,"name":"eso1611a","width":120,"height":120,"type":"GameObjectProto","spriteSheet":{"id":84,"type":"SpriteSheet"},"commonBehaviour":[{"type":"CommonBehaviour","id":88}]}],GameObject:[{"id":7,"name":"dude","pos":{"x":108,"y":227},"layerId":2,"type":"GameObject","gameObjectProto":{"id":4,"type":"GameObjectProto"}},{"id":63,"name":"ground1","pos":{"x":437,"y":115},"layerId":2,"type":"GameObject","gameObjectProto":{"id":58,"type":"GameObjectProto"}},{"id":64,"name":"platform","pos":{"x":471,"y":478},"layerId":2,"type":"GameObject","gameObjectProto":{"id":6,"type":"GameObjectProto"}},{"id":65,"name":"platform","pos":{"x":171,"y":192},"layerId":2,"type":"GameObject","gameObjectProto":{"id":6,"type":"GameObjectProto"}},{"id":67,"name":"ground1","pos":{"x":559,"y":116},"layerId":2,"type":"GameObject","gameObjectProto":{"id":58,"type":"GameObjectProto"}},{"pos":{"x":388,"y":140},"layerId":2,"type":"GameObject","gameObjectProto":{"id":58,"type":"GameObjectProto"},"id":68},{"id":71,"name":"clamp","pos":{"x":666,"y":328},"layerId":2,"type":"GameObject","gameObjectProto":{"id":70,"type":"GameObjectProto"}},{"id":74,"name":"tile","pos":{"x":369,"y":271},"layerId":2,"type":"GameObject","gameObjectProto":{"id":73,"type":"GameObjectProto"}},{"id":77,"name":"platform","pos":{"x":54,"y":302},"layerId":2,"type":"GameObject","gameObjectProto":{"id":6,"type":"GameObjectProto"}},{"id":78,"name":"platform","pos":{"x":43,"y":393},"layerId":2,"type":"GameObject","gameObjectProto":{"id":6,"type":"GameObjectProto"}},{"id":81,"name":"flare","pos":{"x":194,"y":46},"layerId":2,"type":"GameObject","gameObjectProto":{"id":80,"type":"GameObjectProto"}},{"id":82,"name":"flare","pos":{"x":255,"y":7},"layerId":2,"type":"GameObject","gameObjectProto":{"id":80,"type":"GameObjectProto"}},{"id":86,"name":"eso1611a","pos":{"x":134,"y":14},"layerId":2,"type":"GameObject","gameObjectProto":{"id":85,"type":"GameObjectProto"}},{"id":87,"name":"eso1611a","pos":{"x":93,"y":53},"layerId":2,"type":"GameObject","gameObjectProto":{"id":85,"type":"GameObjectProto"}}],FrameAnimation:[{"name":"left","type":"FrameAnimation","frames":[0,1,2,3],"id":11},{"name":"right","type":"FrameAnimation","frames":[5,6,7,8],"id":12},{"name":"idleLeft","type":"FrameAnimation","frames":[4],"id":13},{"name":"idleRight","type":"FrameAnimation","frames":[4],"id":14}],CommonBehaviour:[{"id":15,"name":"Control2Dir","type":"CommonBehaviour","parameters":{"velocity":"130","walkLeftAnimation":"left","walkRightAnimation":"right","idleLeftAnimation":"idleLeft","idleRightAnimation":"idleRight"}},{"name":"Draggable","type":"CommonBehaviour","id":60},{"name":"Draggable","type":"CommonBehaviour","id":61},{"name":"Draggable","type":"CommonBehaviour","id":62},{"name":"Draggable","type":"CommonBehaviour","id":75},{"name":"Draggable","type":"CommonBehaviour","id":83},{"name":"Draggable","type":"CommonBehaviour","id":88}],Font:[{"id":22,"name":"font1","type":"Font","resourcePath":"resources/font1.png","fontSize":21,"fontFamily":"monospace","fontContext":{"symbols":{"0":{"x":24,"y":36,"width":12,"height":24},"1":{"x":45,"y":36,"width":12,"height":24},"2":{"x":65,"y":36,"width":12,"height":24},"3":{"x":86,"y":36,"width":12,"height":24},"4":{"x":107,"y":36,"width":12,"height":24},"5":{"x":127,"y":36,"width":12,"height":24},"6":{"x":148,"y":36,"width":12,"height":24},"7":{"x":168,"y":36,"width":12,"height":24},"8":{"x":189,"y":36,"width":12,"height":24},"9":{"x":210,"y":36,"width":12,"height":24}," ":{"x":4,"y":4,"width":12,"height":24},"!":{"x":24,"y":4,"width":12,"height":24},"\"":{"x":45,"y":4,"width":12,"height":24},"#":{"x":65,"y":4,"width":12,"height":24},"$":{"x":86,"y":4,"width":12,"height":24},"%":{"x":107,"y":4,"width":12,"height":24},"&":{"x":127,"y":4,"width":12,"height":24},"'":{"x":148,"y":4,"width":12,"height":24},"(":{"x":168,"y":4,"width":12,"height":24},")":{"x":189,"y":4,"width":12,"height":24},"*":{"x":210,"y":4,"width":12,"height":24},"+":{"x":230,"y":4,"width":12,"height":24},",":{"x":251,"y":4,"width":12,"height":24},"-":{"x":271,"y":4,"width":12,"height":24},".":{"x":292,"y":4,"width":12,"height":24},"/":{"x":4,"y":36,"width":12,"height":24},":":{"x":230,"y":36,"width":12,"height":24},";":{"x":251,"y":36,"width":12,"height":24},"<":{"x":271,"y":36,"width":12,"height":24},"=":{"x":292,"y":36,"width":12,"height":24},">":{"x":4,"y":68,"width":12,"height":24},"?":{"x":24,"y":68,"width":12,"height":24},"@":{"x":45,"y":68,"width":12,"height":24},"A":{"x":65,"y":68,"width":12,"height":24},"B":{"x":86,"y":68,"width":12,"height":24},"C":{"x":107,"y":68,"width":12,"height":24},"D":{"x":127,"y":68,"width":12,"height":24},"E":{"x":148,"y":68,"width":12,"height":24},"F":{"x":168,"y":68,"width":12,"height":24},"G":{"x":189,"y":68,"width":12,"height":24},"H":{"x":210,"y":68,"width":12,"height":24},"I":{"x":230,"y":68,"width":12,"height":24},"J":{"x":251,"y":68,"width":12,"height":24},"K":{"x":271,"y":68,"width":12,"height":24},"L":{"x":292,"y":68,"width":12,"height":24},"M":{"x":4,"y":100,"width":12,"height":24},"N":{"x":24,"y":100,"width":12,"height":24},"O":{"x":45,"y":100,"width":12,"height":24},"P":{"x":65,"y":100,"width":12,"height":24},"Q":{"x":86,"y":100,"width":12,"height":24},"R":{"x":107,"y":100,"width":12,"height":24},"S":{"x":127,"y":100,"width":12,"height":24},"T":{"x":148,"y":100,"width":12,"height":24},"U":{"x":168,"y":100,"width":12,"height":24},"V":{"x":189,"y":100,"width":12,"height":24},"W":{"x":210,"y":100,"width":12,"height":24},"X":{"x":230,"y":100,"width":12,"height":24},"Y":{"x":251,"y":100,"width":12,"height":24},"Z":{"x":271,"y":100,"width":12,"height":24},"[":{"x":292,"y":100,"width":12,"height":24},"\\":{"x":4,"y":132,"width":12,"height":24},"]":{"x":24,"y":132,"width":12,"height":24},"^":{"x":45,"y":132,"width":12,"height":24},"_":{"x":65,"y":132,"width":12,"height":24},"`":{"x":86,"y":132,"width":12,"height":24},"a":{"x":107,"y":132,"width":12,"height":24},"b":{"x":127,"y":132,"width":12,"height":24},"c":{"x":148,"y":132,"width":12,"height":24},"d":{"x":168,"y":132,"width":12,"height":24},"e":{"x":189,"y":132,"width":12,"height":24},"f":{"x":210,"y":132,"width":12,"height":24},"g":{"x":230,"y":132,"width":12,"height":24},"h":{"x":251,"y":132,"width":12,"height":24},"i":{"x":271,"y":132,"width":12,"height":24},"j":{"x":292,"y":132,"width":12,"height":24},"k":{"x":4,"y":164,"width":12,"height":24},"l":{"x":24,"y":164,"width":12,"height":24},"m":{"x":45,"y":164,"width":12,"height":24},"n":{"x":65,"y":164,"width":12,"height":24},"o":{"x":86,"y":164,"width":12,"height":24},"p":{"x":107,"y":164,"width":12,"height":24},"q":{"x":127,"y":164,"width":12,"height":24},"r":{"x":148,"y":164,"width":12,"height":24},"s":{"x":168,"y":164,"width":12,"height":24},"t":{"x":189,"y":164,"width":12,"height":24},"u":{"x":210,"y":164,"width":12,"height":24},"v":{"x":230,"y":164,"width":12,"height":24},"w":{"x":251,"y":164,"width":12,"height":24},"x":{"x":271,"y":164,"width":12,"height":24},"y":{"x":292,"y":164,"width":12,"height":24},"z":{"x":4,"y":196,"width":12,"height":24},"{":{"x":24,"y":196,"width":12,"height":24},"|":{"x":45,"y":196,"width":12,"height":24},"}":{"x":65,"y":196,"width":12,"height":24},"~":{"x":86,"y":196,"width":12,"height":24},"":{"x":107,"y":196,"width":12,"height":24},"":{"x":127,"y":196,"width":12,"height":24},"":{"x":148,"y":196,"width":12,"height":24},"":{"x":168,"y":196,"width":12,"height":24},"":{"x":189,"y":196,"width":12,"height":24},"":{"x":210,"y":196,"width":12,"height":24},"":{"x":230,"y":196,"width":12,"height":24},"":{"x":251,"y":196,"width":12,"height":24},"":{"x":271,"y":196,"width":12,"height":24},"":{"x":292,"y":196,"width":12,"height":24},"":{"x":4,"y":228,"width":12,"height":24},"":{"x":24,"y":228,"width":12,"height":24},"":{"x":45,"y":228,"width":12,"height":24},"":{"x":65,"y":228,"width":12,"height":24},"":{"x":86,"y":228,"width":12,"height":24},"":{"x":107,"y":228,"width":12,"height":24},"":{"x":127,"y":228,"width":12,"height":24},"":{"x":148,"y":228,"width":12,"height":24},"":{"x":168,"y":228,"width":12,"height":24},"":{"x":189,"y":228,"width":12,"height":24},"":{"x":210,"y":228,"width":12,"height":24},"":{"x":230,"y":228,"width":12,"height":24},"":{"x":251,"y":228,"width":12,"height":24},"А":{"x":271,"y":228,"width":12,"height":24},"Б":{"x":292,"y":228,"width":12,"height":24},"В":{"x":4,"y":260,"width":12,"height":24},"Г":{"x":24,"y":260,"width":12,"height":24},"Д":{"x":45,"y":260,"width":12,"height":24},"Е":{"x":65,"y":260,"width":12,"height":24},"Ж":{"x":86,"y":260,"width":12,"height":24},"З":{"x":107,"y":260,"width":12,"height":24},"И":{"x":127,"y":260,"width":12,"height":24},"Й":{"x":148,"y":260,"width":12,"height":24},"К":{"x":168,"y":260,"width":12,"height":24},"Л":{"x":189,"y":260,"width":12,"height":24},"М":{"x":210,"y":260,"width":12,"height":24},"Н":{"x":230,"y":260,"width":12,"height":24},"О":{"x":251,"y":260,"width":12,"height":24},"П":{"x":271,"y":260,"width":12,"height":24},"Р":{"x":292,"y":260,"width":12,"height":24},"С":{"x":4,"y":292,"width":12,"height":24},"Т":{"x":24,"y":292,"width":12,"height":24},"У":{"x":45,"y":292,"width":12,"height":24},"Ф":{"x":65,"y":292,"width":12,"height":24},"Х":{"x":86,"y":292,"width":12,"height":24},"Ц":{"x":107,"y":292,"width":12,"height":24},"Ч":{"x":127,"y":292,"width":12,"height":24},"Ш":{"x":148,"y":292,"width":12,"height":24},"Щ":{"x":168,"y":292,"width":12,"height":24},"Ъ":{"x":189,"y":292,"width":12,"height":24},"Ы":{"x":210,"y":292,"width":12,"height":24},"Ь":{"x":230,"y":292,"width":12,"height":24},"Э":{"x":251,"y":292,"width":12,"height":24},"Ю":{"x":271,"y":292,"width":12,"height":24},"Я":{"x":292,"y":292,"width":12,"height":24},"а":{"x":4,"y":324,"width":12,"height":24},"б":{"x":24,"y":324,"width":12,"height":24},"в":{"x":45,"y":324,"width":12,"height":24},"г":{"x":65,"y":324,"width":12,"height":24},"д":{"x":86,"y":324,"width":12,"height":24},"е":{"x":107,"y":324,"width":12,"height":24},"ж":{"x":127,"y":324,"width":12,"height":24},"з":{"x":148,"y":324,"width":12,"height":24},"и":{"x":168,"y":324,"width":12,"height":24},"й":{"x":189,"y":324,"width":12,"height":24},"к":{"x":210,"y":324,"width":12,"height":24},"л":{"x":230,"y":324,"width":12,"height":24},"м":{"x":251,"y":324,"width":12,"height":24},"н":{"x":271,"y":324,"width":12,"height":24},"о":{"x":292,"y":324,"width":12,"height":24},"п":{"x":4,"y":356,"width":12,"height":24},"р":{"x":24,"y":356,"width":12,"height":24},"с":{"x":45,"y":356,"width":12,"height":24},"т":{"x":65,"y":356,"width":12,"height":24},"у":{"x":86,"y":356,"width":12,"height":24},"ф":{"x":107,"y":356,"width":12,"height":24},"х":{"x":127,"y":356,"width":12,"height":24},"ц":{"x":148,"y":356,"width":12,"height":24},"ч":{"x":168,"y":356,"width":12,"height":24},"ш":{"x":189,"y":356,"width":12,"height":24},"щ":{"x":210,"y":356,"width":12,"height":24},"ъ":{"x":230,"y":356,"width":12,"height":24},"ы":{"x":251,"y":356,"width":12,"height":24},"ь":{"x":271,"y":356,"width":12,"height":24},"э":{"x":292,"y":356,"width":12,"height":24},"ю":{"x":4,"y":388,"width":12,"height":24},"я":{"x":24,"y":388,"width":12,"height":24},"ѐ":{"x":45,"y":388,"width":12,"height":24},"ё":{"x":65,"y":388,"width":12,"height":24},"ђ":{"x":86,"y":388,"width":12,"height":24},"ѓ":{"x":107,"y":388,"width":12,"height":24},"є":{"x":127,"y":388,"width":12,"height":24},"ѕ":{"x":148,"y":388,"width":12,"height":24},"і":{"x":168,"y":388,"width":12,"height":24},"ї":{"x":189,"y":388,"width":12,"height":24},"ј":{"x":210,"y":388,"width":12,"height":24},"љ":{"x":230,"y":388,"width":12,"height":24},"њ":{"x":251,"y":388,"width":12,"height":24},"ћ":{"x":271,"y":388,"width":12,"height":24}},"width":320,"height":416}}],TileMap:[{"id":52,"width":50,"height":50,"type":"TileMap","spriteSheet":{"id":57,"type":"SpriteSheet"},"data":[[],null,null,[null,null,null,null,2,null,null],[null,null],[1,null,3,null,null,1,1,1,1,1,1,1,1,1],null,[null,1,null,1]]}],TextField:[{"name":"textField1","width":120,"height":24,"pos":{"x":16,"y":20},"layerId":2,"type":"TextField","text":"textField1","font":{"id":22,"type":"Font"},"id":76}]};

/***/ }),
/* 35 */,
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.TileBehaviour = exports.PlatformBehaviour = exports.MainSceneBehaviour = exports.Ground1Behaviour = exports.FlareBehaviour = exports.Eso1611aBehaviour = exports.DudeBehaviour = exports.ClampBehaviour = undefined;

var _clamp = __webpack_require__(37);

var _dude = __webpack_require__(38);

var _eso1611a = __webpack_require__(39);

var _flare = __webpack_require__(40);

var _ground = __webpack_require__(41);

var _mainScene = __webpack_require__(42);

var _platform = __webpack_require__(43);

var _tile = __webpack_require__(44);

exports.ClampBehaviour = _clamp.ClampBehaviour;
exports.DudeBehaviour = _dude.DudeBehaviour;
exports.Eso1611aBehaviour = _eso1611a.Eso1611aBehaviour;
exports.FlareBehaviour = _flare.FlareBehaviour;
exports.Ground1Behaviour = _ground.Ground1Behaviour;
exports.MainSceneBehaviour = _mainScene.MainSceneBehaviour;
exports.PlatformBehaviour = _platform.PlatformBehaviour;
exports.TileBehaviour = _tile.TileBehaviour;

/***/ }),
/* 37 */
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
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DudeBehaviour = exports.DudeBehaviour = function () {
    function DudeBehaviour() {
        _classCallCheck(this, DudeBehaviour);
    }

    DudeBehaviour.prototype.onCreate = function onCreate() {
        this.game.camera.followTo(this.gameObject);
    };

    DudeBehaviour.prototype.onUpdate = function onUpdate() {

        if (this.game.keyboard.isJustPressed(this.game.keyboard.KEY.UP) || this.game.keyboard.isJustPressed(this.game.keyboard.KEY.GAME_PAD_1)) {
            if (this.gameObject.rigidBody.onFloor) this.gameObject.rigidBody.vel.addXY(0, -340);
        }

        if (this.game.keyboard.isPressed(this.game.keyboard.KEY.A) || this.game.keyboard.isPressed(this.game.keyboard.KEY.GAME_PAD_5)) {
            this.gameObject.rigidBody.vel.addXY(0, -50);
        }
    };

    DudeBehaviour.prototype.onDestroy = function onDestroy() {};

    return DudeBehaviour;
}();

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Eso1611aBehaviour = exports.Eso1611aBehaviour = function () {
    function Eso1611aBehaviour() {
        _classCallCheck(this, Eso1611aBehaviour);
    }

    Eso1611aBehaviour.prototype.onCreate = function onCreate() {};

    Eso1611aBehaviour.prototype.onUpdate = function onUpdate() {};

    Eso1611aBehaviour.prototype.onDestroy = function onDestroy() {};

    return Eso1611aBehaviour;
}();

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FlareBehaviour = exports.FlareBehaviour = function () {
    function FlareBehaviour() {
        _classCallCheck(this, FlareBehaviour);
    }

    FlareBehaviour.prototype.onCreate = function onCreate() {};

    FlareBehaviour.prototype.onUpdate = function onUpdate() {};

    FlareBehaviour.prototype.onDestroy = function onDestroy() {};

    return FlareBehaviour;
}();

/***/ }),
/* 41 */
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
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MainSceneBehaviour = exports.MainSceneBehaviour = function () {
    function MainSceneBehaviour() {
        _classCallCheck(this, MainSceneBehaviour);
    }

    MainSceneBehaviour.prototype.onCreate = function onCreate() {
        var _this = this;

        this.x = 0;
        this.y = 0;
        this.color = [1, 0, 0, 1]; //[1,0,0,1] 'rgba(255,0,0,255)'
        this.points = [];

        this.scene.on('mouseMove', function (e) {
            //console.log(e.isMouseDown);
        });
        this.scene.on('mouseMove', function (e) {
            _this.x = e.screenX;
            _this.y = e.screenY;
            _this.points.push({ x: e.screenX, y: e.screenY });
        });
        this.offsetX = 0;
        this.cnt = 0;
    };

    MainSceneBehaviour.prototype.onUpdate = function onUpdate() {
        this.cnt++;
        if (this.cnt === 5) {
            this.points.shift();
            this.cnt = 0;
        }
        this.game.renderer.fillRect(this.x, this.y, 10, 10, this.color);

        this.points.forEach(function (p) {
            //this.game.renderer.fillRect(p.x,p.y,50,50,this.color);
            //this.game.renderer.fillCircle(p.x,p.y,25,[0,1,0,1]);
            //this.game.renderer.log(p.x);
            //this.game.renderer.drawLine(p.x,p.y,p.x+50,p.y+30,[0,1,1,1]);
        });
        //this.game.renderer.log(this.points.length);
        //this.game.renderer.log({a:2});
        var camera = this.game.camera;
        var camRect = this.game.camera.getRectScaled();
        // this.game.renderer.log(camRect);
        // this.game.renderer.log(this.game.mouse.currPoint);
        //this.game.renderer.log(this.game.mouse.lastPoint);
        this.game.renderer.drawTiledImage('resources/tile.jpg', 130, 0, 130, 61, camRect.x, camRect.y, 100, 100, this.offsetX, this.offsetX);
        this.offsetX += 0.1;
    };

    MainSceneBehaviour.prototype.onDestroy = function onDestroy() {};

    return MainSceneBehaviour;
}();

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PlatformBehaviour = exports.PlatformBehaviour = function () {
    function PlatformBehaviour() {
        _classCallCheck(this, PlatformBehaviour);
    }

    PlatformBehaviour.prototype.onCreate = function onCreate() {
        this.gameObject.rigidBody.static = true;
    };

    PlatformBehaviour.prototype.onUpdate = function onUpdate() {};

    PlatformBehaviour.prototype.onDestroy = function onDestroy() {};

    return PlatformBehaviour;
}();

/***/ }),
/* 44 */
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
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.Control2Dir = exports.Control4Dir = exports.Draggable = undefined;

var _draggable = __webpack_require__(48);

var _draggable2 = _interopRequireDefault(_draggable);

var _control4Dir = __webpack_require__(47);

var _control4Dir2 = _interopRequireDefault(_control4Dir);

var _control2Dir = __webpack_require__(46);

var _control2Dir2 = _interopRequireDefault(_control2Dir);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Draggable = _draggable2.default;
exports.Control4Dir = _control4Dir2.default;
exports.Control2Dir = _control2Dir2.default;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _move2Dir = __webpack_require__(49);

var _move2Dir2 = _interopRequireDefault(_move2Dir);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Control2Dir = function (_Move2Dir) {
    _inherits(Control2Dir, _Move2Dir);

    function Control2Dir(game) {
        _classCallCheck(this, Control2Dir);

        return _possibleConstructorReturn(this, _Move2Dir.call(this, game));
    }

    Control2Dir.prototype.manage = function manage(gameObject, parameters) {
        _Move2Dir.prototype.manage.call(this, gameObject, parameters);
    };

    Control2Dir.prototype.onUpdate = function onUpdate() {
        var keyboard = this.game.keyboard;
        var parameters = this.parameters;
        var go = this.gameObject;
        if (keyboard.isPressed(keyboard.KEY.LEFT) || keyboard.isPressed(keyboard.KEY.GAME_PAD_AXIS_LEFT)) {
            go.rigidBody.vel.x = -parameters.velocity;
            this.go('Left');
        }
        if (keyboard.isPressed(keyboard.KEY.RIGHT) || keyboard.isPressed(keyboard.KEY.GAME_PAD_AXIS_RIGHT)) {
            go.rigidBody.vel.x = parameters.velocity;
            this.go('Right');
        }

        if (keyboard.isJustReleased(keyboard.KEY.LEFT) || keyboard.isJustReleased(keyboard.KEY.GAME_PAD_AXIS_LEFT)) {
            this.stop();
        } else if (keyboard.isJustReleased(keyboard.KEY.RIGHT) || keyboard.isJustReleased(keyboard.KEY.GAME_PAD_AXIS_RIGHT)) {
            this.stop();
        }
    };

    return Control2Dir;
}(_move2Dir2.default);

exports.default = Control2Dir;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _move4Dir = __webpack_require__(50);

var _move4Dir2 = _interopRequireDefault(_move4Dir);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Control4Dir = function (_Move4Dir) {
    _inherits(Control4Dir, _Move4Dir);

    function Control4Dir(game) {
        _classCallCheck(this, Control4Dir);

        return _possibleConstructorReturn(this, _Move4Dir.call(this, game));
    }

    Control4Dir.prototype.manage = function manage(gameObject, parameters) {
        _Move4Dir.prototype.manage.call(this, gameObject, parameters);
    };

    Control4Dir.prototype.onUpdate = function onUpdate() {
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
        } else if (keyboard.isJustReleased(keyboard.KEY.RIGHT) || keyboard.isPressed(keyboard.KEY.GAME_PAD_AXIS_RIGHT)) {
            this.stop();
        } else if (keyboard.isJustReleased(keyboard.KEY.UP) || keyboard.isPressed(keyboard.KEY.GAME_PAD_AXIS_UP)) {
            this.stop();
        } else if (keyboard.isJustReleased(keyboard.KEY.DOWN) || keyboard.isPressed(keyboard.KEY.GAME_PAD_AXIS_DOWN)) {
            this.stop();
        }
    };

    return Control4Dir;
}(_move4Dir2.default);

exports.default = Control4Dir;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _baseAbstractBehaviour = __webpack_require__(17);

var _baseAbstractBehaviour2 = _interopRequireDefault(_baseAbstractBehaviour);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DraggableBehaviour = function (_BaseAbstractBehaviou) {
    _inherits(DraggableBehaviour, _BaseAbstractBehaviou);

    DraggableBehaviour._getEventId = function _getEventId(e) {
        return e.id || 1;
    };

    function DraggableBehaviour(game) {
        _classCallCheck(this, DraggableBehaviour);

        var _this = _possibleConstructorReturn(this, _BaseAbstractBehaviou.call(this));

        _this.game = game;
        _this.points = {};
        return _this;
    }

    DraggableBehaviour.prototype.manage = function manage(gameObject, params) {
        var _this2 = this;

        gameObject.on('click', function (e) {
            _this2.points[DraggableBehaviour._getEventId(e)] = {
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
            var point = _this2.points[pointId];
            if (!point) return;
            point.dragStartX = point.target.pos.x;
            point.dragStartY = point.target.pos.y;
        });
        scene.on('mouseMove', function (e) {
            var pointId = DraggableBehaviour._getEventId(e);
            var point = _this2.points[pointId];
            if (!point) return;
            if (!point.dragStart) {
                point.dragStart = true;
                point.target.trigger('dragStart', point);
                if (point.defaultPrevented) {
                    delete _this2.points[pointId];
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
            var point = _this2.points[pointId];
            if (!point) return;
            if (point.dragStart) {
                point.x = gameObject.pos.x;
                point.y = gameObject.pos.y;
                point.target.trigger('dragStop', point);
            }
            delete _this2.points[pointId];
        });
    };

    return DraggableBehaviour;
}(_baseAbstractBehaviour2.default);

exports.default = DraggableBehaviour;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _class, _temp;

var _moveable = __webpack_require__(18);

var _moveable2 = _interopRequireDefault(_moveable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Move2Dir = (_temp = _class = function (_Moveable) {
    _inherits(Move2Dir, _Moveable);

    function Move2Dir(game) {
        _classCallCheck(this, Move2Dir);

        return _possibleConstructorReturn(this, _Moveable.call(this, game));
    }

    Move2Dir.prototype.manage = function manage(gameObject, parameters) {
        _Moveable.prototype.manage.call(this, gameObject, parameters, Move2Dir.DIRS);
    };

    Move2Dir.prototype.stop = function stop() {
        _Moveable.prototype.stop.call(this);
        this.gameObject.rigidBody.vel.x = 0;
    };

    return Move2Dir;
}(_moveable2.default), _class.DIRS = ['Left', 'Right'], _temp);
exports.default = Move2Dir;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _class, _temp;

var _moveable = __webpack_require__(18);

var _moveable2 = _interopRequireDefault(_moveable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Move4Dir = (_temp = _class = function (_Moveable) {
    _inherits(Move4Dir, _Moveable);

    function Move4Dir(game) {
        _classCallCheck(this, Move4Dir);

        return _possibleConstructorReturn(this, _Moveable.call(this, game));
    }

    Move4Dir.prototype.manage = function manage(gameObject, parameters) {
        _Moveable.prototype.manage.call(this, gameObject, parameters, Move4Dir.DIRS);
    };

    Move4Dir.prototype.stop = function stop() {
        _Moveable.prototype.stop.call(this);
        this.gameObject.rigidBody.vel.x = 0;
        this.gameObject.rigidBody.vel.y = 0;
    };

    return Move4Dir;
}(_moveable2.default), _class.DIRS = ['Left', 'Right', 'Up', 'Down'], _temp);
exports.default = Move4Dir;

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _tween = __webpack_require__(25);

var _tween2 = _interopRequireDefault(_tween);

var _mat = __webpack_require__(6);

var _mat2 = _interopRequireDefault(_mat);

var _mathEx = __webpack_require__(4);

var mathEx = _interopRequireWildcard(_mathEx);

var _rect = __webpack_require__(9);

var _rect2 = _interopRequireDefault(_rect);

var _point2d = __webpack_require__(3);

var _point2d2 = _interopRequireDefault(_point2d);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /*global DEBUG:true*/


var Camera = function () {
    function Camera(game) {
        _classCallCheck(this, Camera);

        this.objFollowTo = null;
        this.scene = null;
        this.pos = new _point2d2.default(0, 0);
        this.scale = new _point2d2.default(1, 1);
        this.lastToleranceTime = 0;
        this._rect = new _rect2.default();
        this._rectScaled = new _rect2.default();
        this.FOLLOWING_TOLERANCE_TIME = 2000;

        this.game = game;
    }

    Camera.prototype.followTo = function followTo(gameObject) {
        if (gameObject === null) return;
        if (1 && gameObject === undefined) throw 'Camera:followTo(gameObject) - gameObject not provided';
        this.objFollowTo = gameObject;
        this.scene = this.game._currentScene;
        if (this.scene.tileMap.spriteSheet) {
            this.sceneWidth = this.scene.tileMap.spriteSheet._frameWidth * this.scene.tileMap.width;
            this.sceneHeight = this.scene.tileMap.spriteSheet._frameHeight * this.scene.tileMap.height;
        } else {
            this.sceneWidth = this.game.getCurrScene().width || this.game.width;
            this.sceneHeight = this.game.getCurrScene().height || this.game.height;
        }
        this.cameraTween = new _tween2.default({
            target: this,
            ease: 'easeInQuad',
            to: { x: this.pos.x, y: this.pos.y },
            time: this.FOLLOWING_TOLERANCE_TIME
        });
    };

    Camera.prototype.update = function update(currTime, delta) {
        var cameraRect = this.getRectScaled();
        var gameObject = this.objFollowTo;
        if (!gameObject) return;
        var tileWidth = this.scene.tileMap.spriteSheet ? this.scene.tileMap.spriteSheet._frameWidth : 0; // todo ?
        var tileHeight = this.scene.tileMap.spriteSheet ? this.scene.tileMap.spriteSheet._frameHeight : 0;
        var w = this.game.width;
        var h = this.game.height;
        var wDiv2 = w / 2;
        var hDiv2 = h / 2;
        var x = gameObject.pos.x - wDiv2;
        var y = gameObject.pos.y - hDiv2;
        if (gameObject._lastDirection === 'Right') x += cameraRect.width / 2; // todo set camera follow mode
        if (gameObject._lastDirection === 'Left') x -= cameraRect.height / 2;
        if (x < 0) x = 0;
        if (y < 0) y = 0;
        if (x > this.sceneWidth - w + tileWidth) x = this.sceneWidth - w + tileWidth;
        if (y > this.sceneHeight - h + tileHeight) y = this.sceneHeight - h + tileHeight;
        var scaleVal = Math.abs(gameObject.rigidBody.vel.x) > 0 ? 0.95 : 1;
        if (this.FOLLOWING_TOLERANCE_TIME === 0) {
            this.pos.x = x;
            this.pos.y = y;
        } else if (currTime - this.lastToleranceTime > this.FOLLOWING_TOLERANCE_TIME) {
            this.lastToleranceTime = currTime;
            this.cameraTween.reuse({
                to: {
                    'pos.x': x, 'pos.y': y,
                    'scale.x': scaleVal, 'scale.y': scaleVal
                }
            });
        }

        this.cameraTween.update(currTime);
        this._updateRect();
        this.render();
    };

    Camera.prototype._updateRect = function _updateRect() {
        var point00 = this.screenToWorld(0, 0);
        var pointWH = this.screenToWorld(this.game.width, this.game.height);
        this._rectScaled.set(point00.x, point00.y, pointWH.x - point00.x, pointWH.y - point00.y);
    };

    Camera.prototype.render = function render() {
        //TRS - (transform rotate scale) reverted
        this.game.renderer.translate(this.game.width / 2, this.game.height / 2);
        this.game.renderer.scale(this.scale.x, this.scale.y);
        // todo rotation does not work correctly yet
        //this.game.renderer.rotateZ(this.angle);
        this.game.renderer.translate(-this.game.width / 2, -this.game.height / 2);
        this.game.renderer.translate(-this.pos.x, -this.pos.y);
    };

    Camera.prototype.screenToWorld = function screenToWorld(screenX, screenY) {
        var mScale = _mat2.default.makeScale(this.scale.x, this.scale.y, 1);
        var point2d = mathEx.unProject(screenX, screenY, this.game.width, this.game.height, mScale);
        point2d.add(this.pos);
        return point2d;
    };

    Camera.prototype.getRect = function getRect() {
        this._rect.set(this.pos.x, this.pos.y, this.game.width, this.game.height);
        return this._rect;
    };

    Camera.prototype.getRectScaled = function getRectScaled() {
        return this._rectScaled;
    };

    return Camera;
}();

exports.default = Camera;

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*global DEBUG:true*/
if (true) {
    window.addEventListener("gamepadconnected", function (e) {
        console.log("Gamepad connected at index %d: %s. %d buttons, %d axes.", e.gamepad.index, e.gamepad.id, e.gamepad.buttons.length, e.gamepad.axes.length);
    });
    window.addEventListener("gamepaddisconnected", function (e) {
        console.log("Gamepad disconnected from index %d: %s", e.gamepad.index, e.gamepad.id);
    });
}

var GamePad = function () {
    function GamePad(game) {
        _classCallCheck(this, GamePad);

        this.game = game;
    }

    GamePad.prototype.update = function update() {

        this.gamepads = navigator.getGamepads && navigator.getGamepads() || navigator.webkitGetGamepads && navigator.webkitGetGamepads() || navigator.webkitGamepads || navigator.mozGamepads || navigator.msGamepads || navigator.gamepads || [];

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
            if (gp.axes[0] === 0) continue; // to avoid oscillations
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

exports.default = GamePad;

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*global DEBUG:true*/

var KEY_JUST_PRESSED = 2;
var KEY_PRESSED = 1;
var KEY_JUST_RELEASED = 0;
var KEY_RELEASED = -1;

var Keyboard = function () {
    function Keyboard(game) {
        _classCallCheck(this, Keyboard);

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

    Keyboard.prototype.press = function press(key) {
        if (this.isPressed(key)) return;
        //console.log('pressed',key);
        this.buffer[key] = KEY_JUST_PRESSED;
    };

    Keyboard.prototype.release = function release(key) {
        if (this.isReleased(key)) return;
        this.buffer[key] = KEY_JUST_RELEASED;
    };

    Keyboard.prototype.isPressed = function isPressed(key) {
        return this.buffer[key] >= KEY_PRESSED;
    };

    Keyboard.prototype.isJustPressed = function isJustPressed(key) {
        return this.buffer[key] === KEY_JUST_PRESSED;
    };

    Keyboard.prototype.isReleased = function isReleased(key) {
        if (this.buffer[key] === undefined) return true;
        return this.buffer[key] <= KEY_JUST_RELEASED;
    };

    Keyboard.prototype.isJustReleased = function isJustReleased(key) {
        return this.buffer[key] === KEY_JUST_RELEASED;
    };

    Keyboard.prototype.update = function update() {
        var _this = this;

        //if (Object.keys(this.buffer).length) console.log(this.buffer);
        if (1 && window.canceled) return;
        Object.keys(this.buffer).forEach(function (key) {
            if (_this.buffer[key] === KEY_RELEASED) delete _this.buffer[key];else if (_this.buffer[key] === KEY_JUST_RELEASED) _this.buffer[key] = KEY_RELEASED;
            if (_this.buffer[key] === KEY_JUST_PRESSED) {
                _this.buffer[key] = KEY_PRESSED;
            }
        });
    };

    Keyboard.prototype.listenTo = function listenTo() {
        var _this2 = this;

        this.keyDownListener = function (e) {
            var code = e.keyCode;
            _this2.press(code);
        };

        this.keyUpListener = function (e) {
            var code = e.keyCode;
            _this2.release(code);
        };

        window.addEventListener('keydown', this.keyDownListener);
        window.addEventListener('keyup', this.keyUpListener);
    };

    Keyboard.prototype.destroy = function destroy() {
        window.removeEventListener('keydown', this.keyDownListener);
        window.removeEventListener('keyup', this.keyUpListener);
    };

    return Keyboard;
}();

exports.default = Keyboard;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _mathEx = __webpack_require__(4);

var mathEx = _interopRequireWildcard(_mathEx);

var _point2d = __webpack_require__(3);

var _point2d2 = _interopRequireDefault(_point2d);

var _objectPool = __webpack_require__(59);

var _objectPool2 = _interopRequireDefault(_objectPool);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*global DEBUG:true*/


var MousePoint = function (_Point2d) {
    _inherits(MousePoint, _Point2d);

    function MousePoint() {
        _classCallCheck(this, MousePoint);

        return _possibleConstructorReturn(this, _Point2d.call(this));
    }

    return MousePoint;
}(_point2d2.default);

var Mouse = function () {
    function Mouse(game) {
        _classCallCheck(this, Mouse);

        this.objectsCaptured = {};
        this.container = null;
        this.mousePointsPool = new _objectPool2.default(MousePoint);

        this.game = game;
    }

    //MouseEvent|TouchEvent|PointerEvent


    Mouse.prototype.resolvePoint = function resolvePoint(e) {
        var game = this.game;
        var camera = this.game.camera;

        var screenX = (e.clientX - game.pos.x) / game.scale.x;
        var screenY = (e.clientY - game.pos.y) / game.scale.y;

        var p = game.camera.screenToWorld(screenX, screenY);

        var mousePoint = this.mousePointsPool.getNextObject();
        mousePoint.set(p);
        mousePoint.screenX = screenX;
        mousePoint.screenY = screenY;
        mousePoint.id = e.identifier || 0;
        return mousePoint;
    };

    Mouse.prototype.triggerEvent = function triggerEvent(e, eventName, isMouseDown) {
        var g = this.game;
        var scene = g.getCurrScene();
        if (!scene) return;
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

    Mouse.prototype.resolveClick = function resolveClick(e) {
        this.triggerEvent(e, 'click');
        this.triggerEvent(e, 'mouseDown');
    };

    Mouse.prototype.resolveMouseMove = function resolveMouseMove(e, isMouseDown) {
        var point = this.triggerEvent(e, 'mouseMove', isMouseDown);
        if (!point) return;
        var lastMouseDownObject = this.objectsCaptured[point.id];
        if (lastMouseDownObject && lastMouseDownObject !== point.object) {
            lastMouseDownObject.trigger('mouseLeave');
            delete this.objectsCaptured[point.id];
        }
        if (point.object && lastMouseDownObject !== point.object) {
            point.object.trigger('mouseEnter');
            this.objectsCaptured[point.id] = point.object;
        }
    };

    Mouse.prototype.resolveMouseUp = function resolveMouseUp(e) {
        var point = this.triggerEvent(e, 'mouseUp');
        if (!point) return;
        var lastMouseDownObject = this.objectsCaptured[point.id];
        if (!lastMouseDownObject) return;
        lastMouseDownObject.trigger('mouseUp');
        delete this.objectsCaptured[point.id];
    };

    Mouse.prototype.resolveDoubleClick = function resolveDoubleClick(e) {
        var point = this.triggerEvent(e, 'doubleClick');
        if (!point) return;
        delete this.objectsCaptured[point.id];
    };

    Mouse.prototype.listenTo = function listenTo(container) {
        var _this2 = this;

        this.container = container;
        // mouseDown
        container.ontouchstart = function (e) {
            var l = e.touches.length;
            while (l--) {
                _this2.resolveClick(e.touches[l]);
            }
        };
        container.onmousedown = function (e) {
            e.button === 0 && _this2.resolveClick(e);
        };
        // mouseUp
        container.ontouchend = container.ontouchcancel = function (e) {
            var l = e.changedTouches.length;
            while (l--) {
                _this2.resolveMouseUp(e.changedTouches[l]);
            }
        };
        container.onmouseup = function (e) {
            _this2.resolveMouseUp(e);
        };
        // mouseMove
        container.ontouchmove = function (e) {
            var l = e.touches.length;
            while (l--) {
                _this2.resolveMouseMove(e.touches[l], true);
            }
        };
        container.onmousemove = function (e) {
            var isMouseDown = e.buttons === 1;
            _this2.resolveMouseMove(e, isMouseDown);
        };
        // other
        container.ondblclick = function (e) {
            // todo now only on pc
            _this2.resolveDoubleClick(e);
        };
    };

    Mouse.prototype.destroy = function destroy() {
        var _this3 = this;

        ['mouseMove', 'ontouchstart', 'onmousedown', 'ontouchend', 'onmouseup', 'ontouchmove', 'onmousemove', 'ondblclick'].forEach(function (evtName) {
            _this3.container[evtName] = null;
        });
    };

    return Mouse;
}();

exports.default = Mouse;

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _class, _temp;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var isCocoonJS = !!navigator.isCocoonJS;

var Device = (_temp = _class = function Device(game) {
    _classCallCheck(this, Device);
}, _class.isCocoonJS = isCocoonJS, _class.scale = isCocoonJS ? window.devicePixelRatio || 1 : 1, _class.isTouch = typeof window !== 'undefined' && 'ontouchstart' in window, _temp);
exports.default = Device;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _point2d = __webpack_require__(3);

var _point2d2 = _interopRequireDefault(_point2d);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Vec2 = function (_Point2d) {
    _inherits(Vec2, _Point2d);

    function Vec2(x, y) {
        _classCallCheck(this, Vec2);

        // xyzw stpq rgba
        return _possibleConstructorReturn(this, _Point2d.call(this, x, y));
    }

    // скалярное произведение


    Vec2.prototype.dotProduct = function dotProduct(another) {
        return this.x * another.x + this.y * another.y;
    };

    Vec2.prototype.crossProduct = function crossProduct(another) {
        return this.x * another.y - this.y * another.x;
    };

    Vec2.prototype.setXY = function setXY(x, y) {
        this.x = x;
        this.y = y;
    };

    Vec2.prototype.addXY = function addXY(x, y) {
        this.x += x;
        this.y += y;
    };

    Vec2.prototype.multByScalar = function multByScalar(scalar) {
        var mutateOrigin = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

        if (mutateOrigin) return new Vec2(this.x * scalar, this.y * scalar);
        this.x *= scalar;
        this.y *= scalar;
        return this;
    };

    Vec2.prototype.divByScalar = function divByScalar(scalar) {
        var mutateOrigin = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

        return this.multByScalar(1 / scalar, mutateOrigin);
    };

    Vec2.prototype.plus = function plus(another) {
        var mutateOrigin = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

        if (!mutateOrigin) return new Vec2(this.x + another.x, this.y + another.y);
        this.x += another.x;
        this.y += another.y;
        return this;
    };

    Vec2.prototype.minus = function minus(another) {
        var mutateOrigin = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

        if (!mutateOrigin) return new Vec2(this.x - another.x, this.y - another.y);
        this.x -= another.x;
        this.y -= another.y;
        return this;
    };

    Vec2.prototype.getLength = function getLength() {
        return Math.sqrt(this.lengthSquared());
    };

    Vec2.prototype.lengthSquared = function lengthSquared() {
        return this.x * this.x + this.y * this.y;
    };

    Vec2.prototype.normalize = function normalize() {
        var length = this.getLength();
        this.x = this.x / length;
        this.y = this.y / length;
        return this;
    };

    Vec2.prototype.setLength = function setLength(value) {
        var _angle = this.getAngle();
        this.x = Math.cos(_angle) * value;
        this.y = Math.sin(_angle) * value;
    };

    Vec2.prototype.getAngle = function getAngle() {
        return Math.atan2(this.y, this.x);
    };

    Vec2.prototype.getAngleBetween = function getAngleBetween(that) {
        return Math.acos((this.x * that.x + this.y * that.y) / this.getLength() * that.getLength());
    };

    Vec2.prototype.setAngle = function setAngle(value) {
        var len = this.getLength();
        this.x = Math.cos(value) * len;
        this.y = Math.sin(value) * len;
    };

    Vec2.prototype.clone = function clone() {
        return new Vec2(this.x, this.y);
    };

    Vec2.angleBetween = function angleBetween(v1, v2) {
        v1 = v1.clone().normalize();
        v2 = v2.clone().normalize();
        return Math.acos(v1.dotProduct(v2));
    };

    Vec2.normalBetween = function normalBetween(v1, v2) {
        var v = v1.minus(v2);
        return v.normalize();
    };

    Vec2.distance = function distance(a, b) {
        return Math.sqrt(Vec2.distanceSquared(a, b));
    };

    Vec2.distanceSquared = function distanceSquared(a, b) {
        return (a.x - b.x) * (a.x - b.x) + (a.y - b.y) * (a.y - b.y);
    };

    return Vec2;
}(_point2d2.default);

exports.default = Vec2;

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EventEmitter = function () {
    function EventEmitter() {
        _classCallCheck(this, EventEmitter);

        this.events = {};
    }

    EventEmitter.prototype._on = function _on(name, callBack) {
        this.events[name] = this.events[name] || [];
        this.events[name].push(callBack);
    };

    EventEmitter.prototype.on = function on(eventNameOrList, callBack) {
        if (typeof eventNameOrList === 'string') {
            this._on(eventNameOrList, callBack);
        } else if (eventNameOrList.splice) {
            eventNameOrList.forEach(function (eventName) {
                this._on(eventName, callBack);
            });
        }
    };

    EventEmitter.prototype.trigger = function trigger(eventName, data) {
        var es = this.events[eventName];
        if (!es) return;
        var l = es.length;
        while (l--) {
            es[l](data);
        }
    };

    return EventEmitter;
}();

exports.default = EventEmitter;
;

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Queue = function () {
    function Queue() {
        _classCallCheck(this, Queue);

        this.tasksResolved = 0;
        this.tasks = [];
        this.tasksProgressById = {};
        this.onResolved = null;
        this.onProgress = null;
    }

    Queue.prototype.size = function size() {
        return this.tasks.length;
    };

    Queue.prototype.calcProgress = function calcProgress() {
        var sum = 0;
        Object.keys(this.tasksProgressById).forEach(function (taskId) {
            sum += this.tasksProgressById[taskId] || 0;
        });
        return sum / this.tasks.length;
    };

    Queue.prototype.addTask = function addTask(taskFn, taskId) {
        this.tasks.push(taskFn);
        this.tasksProgressById[taskId] = 0;
    };

    Queue.prototype.progressTask = function progressTask(taskId, progress) {
        this.tasksProgressById[taskId] = progress;
        this.onProgress && this.onProgress(this.calcProgress());
    };

    Queue.prototype.resolveTask = function resolveTask(taskId) {
        this.tasksResolved++;
        this.tasksProgressById[taskId] = 1;
        if (this.tasks.length === this.tasksResolved) {
            this.onProgress && this.onProgress(1);
            if (this.onResolved) this.onResolved();
        } else {
            this.onProgress && this.onProgress(this.calcProgress());
        }
    };

    Queue.prototype.start = function start() {
        if (this.size() === 0) this.onResolved();
        this.tasks.forEach(function (t) {
            t && t();
        });
    };

    return Queue;
}();

exports.default = Queue;
;

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*global DEBUG:true*/

var ObjectPool = function () {
    function ObjectPool(Class) {
        var numberOfInstances = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 16;

        _classCallCheck(this, ObjectPool);

        this._pool = [];
        this._cnt = 0;

        if (1 && !Class) throw "can not instantiate ObjectPool: class not provided in constructor";
        for (var i = 0; i < numberOfInstances; i++) {
            this._pool.push(new Class());
        }
    }

    ObjectPool.prototype.getNextObject = function getNextObject() {
        return this._pool[this._cnt++ % this._pool.length];
    };

    return ObjectPool;
}();

exports.default = ObjectPool;

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

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

if (!window.cancelAnimationFrame) {
    global.cancelAnimationFrame = function (id) {
        return clearTimeout(id);
    };
}

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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(90)))

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _vec = __webpack_require__(56);

var _vec2 = _interopRequireDefault(_vec);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
// http://madebyevan.com/gamedevclass/minimal-demo/

var ArcadeRigidBody = function () {
    function ArcadeRigidBody(gameObject) {
        _classCallCheck(this, ArcadeRigidBody);

        this.vel = new _vec2.default();
        this.onFloor = false;
        this._onFloorInCurrFrame = false;
        this._onFloorInPrevFrame = false;

        this.game = gameObject.game;
        this.gameObject = gameObject;
    } // to avoid onFloor oscillation


    ArcadeRigidBody.prototype.update = function update(time, delta) {
        if (!this.gameObject.rigidBody.static) {
            var deltaPoint = this.vel.multByScalar(delta / 1000);
            this.game.collider.moveBy(this.gameObject, deltaPoint);
            this.vel.addY(this.game.gravityConstant * delta / 1000);
        }
    };

    return ArcadeRigidBody;
}();

exports.default = ArcadeRigidBody;

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _mathEx = __webpack_require__(4);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /*global window:true*/

var Collider = function () {
    function Collider(game) {
        _classCallCheck(this, Collider);

        this.game = game;
    }

    Collider.prototype.moveBy = function moveBy(player, deltaPoint) {

        var rigidObjects = this.game.getCurrScene().getAllGameObjects().concat(this.game._currentScene.tileMap.getTilesAtRect(player.getRect()));

        var playerRect = player.getRect();
        var playerRigidBody = player.rigidBody;
        playerRect.x += deltaPoint.x;
        playerRect.y += deltaPoint.y;
        var collidedByX = false,
            collidedByY = false;

        var expectedY = player.pos.y + deltaPoint.y;
        playerRigidBody._onFloorInPrevFrame = playerRigidBody._onFloorInCurrFrame;

        for (var i = 0, len = rigidObjects.length; i < len; i++) {
            var obstacle = rigidObjects[i];
            if (obstacle.rigidBody === null) continue;
            var obstacleRect = obstacle.getRect();
            if (player !== rigidObjects[i] && (0, _mathEx.overlapTest)(playerRect, obstacleRect)) {

                var pathToTop = playerRect.bottom - obstacleRect.y;
                var pathToBottom = obstacleRect.bottom - playerRect.y;
                var pathToLeft = playerRect.x + playerRect.width - obstacleRect.x;
                var pathToRight = obstacleRect.right - playerRect.x;

                var minPath = Math.min(pathToTop, pathToBottom, pathToLeft, pathToRight);

                if (pathToTop === minPath) {
                    // closest path to move player to resolve collision is path to top
                    player.pos.setY(obstacleRect.y - playerRect.height);
                    collidedByY = true;
                } else if (pathToBottom === minPath) {
                    // closest path to move player to resolve collision is path to bottom
                    player.pos.setY(obstacleRect.bottom);
                    collidedByY = true;
                } else if (pathToLeft === minPath) {
                    // closest path to move player to resolve collision is path to left
                    player.pos.setX(obstacleRect.x - playerRect.width);
                    collidedByX = true;
                } else if (pathToRight === minPath) {
                    // closest path to move player to resolve collision is path to right
                    player.pos.setX(obstacleRect.x + obstacleRect.width);
                    collidedByX = true;
                }
            }
        }
        if (!collidedByX) player.pos.addX(deltaPoint.x);
        if (!collidedByY) player.pos.addY(deltaPoint.y);

        playerRigidBody._onFloorInCurrFrame = expectedY > player.pos.y;
        playerRigidBody.onFloor = playerRigidBody.vel.y >= 0 && (playerRigidBody._onFloorInPrevFrame || playerRigidBody._onFloorInCurrFrame);
        if (player.rigidBody.onFloor) player.rigidBody.vel.setY(0);
    };

    Collider.prototype.moveTo = function moveTo(player, point) {
        // todo not works!
        var pRect = player.getRect();
        var collided = false;
        if (player.rigidBody) {
            this.game.getCurrScene().getAllGameObjects().concat(this.game._currentScene.tileMap.getTilesAtRect(pRect)).some(function (g) {
                if ((0, _mathEx.overlapTest)(pRect, g.getRect())) {
                    collided = true;
                    return true;
                }
            });
        }
        if (collided) return;
        player.pos.setX(point.x);
        player.pos.setY(point.y);
    };

    return Collider;
}();

exports.default = Collider;

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _textField = __webpack_require__(29);

var _textField2 = _interopRequireDefault(_textField);

var _device = __webpack_require__(55);

var _device2 = _interopRequireDefault(_device);

var _consts = __webpack_require__(19);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /*global DEBUG:true*/

var AbstractRenderer = function () {
    function AbstractRenderer(game) {
        _classCallCheck(this, AbstractRenderer);

        this.renderableCache = {};
        this.container = null;
        this.debugTextField = null;
        this.fullScreenSize = { w: 0, h: 0, scaleFactor: 1 };

        this.game = game;
        if (_device2.default.isCocoonJS) {
            this.fullScreenSize.w = window.innerWidth * _device2.default.scale;
            this.fullScreenSize.h = window.innerHeight * _device2.default.scale;
            this.fullScreenSize.scaleFactor = Math.min(this.fullScreenSize.w / this.game.width, this.fullScreenSize.h / this.game.height);
        } else {
            this.fullScreenSize.w = game.width;
            this.fullScreenSize.h = game.height;
        }
        //document.body.addEventListener('click',()=>this.requestFullScreen());
    }

    AbstractRenderer.prototype.onResize = function onResize() {
        if (this.game.scaleStrategy === _consts.SCALE_STRATEGY.NO_SCALE) return;
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
        this.game.scale.setXY(width / this.game.width, height / this.game.height);
        this.game.pos.setXY((window.innerWidth - width) / 2, (window.innerHeight - height) / 2);

        this.container.style.width = width + 'px';
        this.container.style.height = height + 'px';
        this.container.style.marginTop = this.game.pos.y + 'px';
    };

    AbstractRenderer.prototype.requestFullScreen = function requestFullScreen() {
        var element = this.container;
        if (element.requestFullScreen) {
            element.requestFullScreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullScreen) {
            element.webkitRequestFullScreen();
        }
    };

    AbstractRenderer.prototype.cancelFullScreen = function cancelFullScreen() {
        if (document.cancelFullScreen) {
            document.cancelFullScreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
        }
    };

    AbstractRenderer.prototype.beginFrameBuffer = function beginFrameBuffer() {};

    AbstractRenderer.prototype.flipFrameBuffer = function flipFrameBuffer() {
        if (true) {
            if (this.debugTextField) this.debugTextField._render();
        }
    };

    AbstractRenderer.prototype.registerResize = function registerResize() {
        var _this = this;

        this.onResize();
        window.addEventListener('resize', function () {
            return _this.onResize();
        });
    };

    AbstractRenderer.prototype.destroy = function destroy() {
        window.removeEventListener('resize', this.onResize);
    };

    AbstractRenderer.prototype.getError = function getError() {
        return 0;
    };

    AbstractRenderer.prototype.log = function log() {
        if (false) return;
        var textField = this.debugTextField;
        var res = '';
        Array.prototype.slice.call(arguments).forEach(function (txt) {
            if (txt === undefined) txt = 'undefined';
            if (txt === null) txt = 'null';
            if (txt.toJSON) {
                txt = JSON.stringify(txt.toJSON(), null, 4);
            } else {
                try {
                    txt = JSON.stringify(txt);
                } catch (e) {}
            }
            if (typeof txt !== 'string') txt = txt.toString();
            res += txt + '\n';
        });
        if (!textField) {
            textField = new _textField2.default(this.game);
            textField.name = 'defaultName';
            textField.revalidate();
            this.debugTextField = textField;
        }
        textField.pos.x = 10;
        textField.pos.y = 10;
        textField.setText(textField.getText() + res);
    };

    AbstractRenderer.prototype.loadTextureInfo = function loadTextureInfo(textureId, info) {};

    AbstractRenderer.prototype.getTextureInfo = function getTextureInfo(textureId) {};

    return AbstractRenderer;
}();

exports.default = AbstractRenderer;

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _webGlRenderer = __webpack_require__(77);

var _webGlRenderer2 = _interopRequireDefault(_webGlRenderer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
//import HtmlRenderer from './dom/htmlRenderer'
//import Renderer from './canvas/canvasRenderer'


//import SvgRenderer from './dom/svgRenderer'

var RendererFactory = function () {
    function RendererFactory() {
        _classCallCheck(this, RendererFactory);
    }

    RendererFactory.getRenderer = function getRenderer(game) {
        if (!game) throw 'RendererFactory::getRenderer: game param not specified';
        return new _webGlRenderer2.default(game);
    };

    return RendererFactory;
}();

exports.default = RendererFactory;

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _mat = __webpack_require__(6);

var _mat2 = _interopRequireDefault(_mat);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MatrixStack = function () {
    function MatrixStack() {
        _classCallCheck(this, MatrixStack);

        this.stack = [];

        this.restore();
    }

    MatrixStack.prototype.restore = function restore() {
        this.stack.pop();
        // Never let the stack be totally empty
        if (this.stack.length < 1) {
            this.stack[0] = _mat2.default.makeIdentity();
        }
    };

    MatrixStack.prototype.save = function save() {
        this.stack.push(this.getCurrentMatrix());
    };

    MatrixStack.prototype.getCurrentMatrix = function getCurrentMatrix() {
        return this.stack[this.stack.length - 1].slice();
    };

    MatrixStack.prototype.setCurrentMatrix = function setCurrentMatrix(m) {
        return this.stack[this.stack.length - 1] = m;
    };

    MatrixStack.prototype.translate = function translate(x, y, z) {
        if (z === undefined) {
            z = 0;
        }
        var t = _mat2.default.makeTranslation(x, y, z);
        var m = this.getCurrentMatrix();
        this.setCurrentMatrix(_mat2.default.matrixMultiply(t, m));
    };

    MatrixStack.prototype.rotateZ = function rotateZ(angleInRadians) {
        var t = _mat2.default.makeZRotation(angleInRadians);
        var m = this.getCurrentMatrix();
        this.setCurrentMatrix(_mat2.default.matrixMultiply(t, m));
    };

    MatrixStack.prototype.rotateY = function rotateY(angleInRadians) {
        var t = _mat2.default.makeYRotation(angleInRadians);
        var m = this.getCurrentMatrix();
        this.setCurrentMatrix(_mat2.default.matrixMultiply(t, m));
    };

    MatrixStack.prototype.scale = function scale(x, y, z) {
        if (z === undefined) {
            z = 1;
        }
        var t = _mat2.default.makeScale(x, y, z);
        var m = this.getCurrentMatrix();
        this.setCurrentMatrix(_mat2.default.matrixMultiply(t, m));
    };

    return MatrixStack;
}();

exports.default = MatrixStack;

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _abstractFilter = __webpack_require__(11);

var _abstractFilter2 = _interopRequireDefault(_abstractFilter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ColorizeFilter = function (_AbstractFilter) {
    _inherits(ColorizeFilter, _AbstractFilter);

    function ColorizeFilter(gl) {
        _classCallCheck(this, ColorizeFilter);

        return _possibleConstructorReturn(this, _AbstractFilter.call(this, gl));
    }

    ColorizeFilter.prototype.prepare = function prepare(programGen) {
        programGen.setFragmentMainFn("\n            vec4 col = texture2D(texture, v_texCoord);\n            col.g = 0.9;\n            gl_FragColor = col;\n        ");
    };

    return ColorizeFilter;
}(_abstractFilter2.default);

exports.default = ColorizeFilter;

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _abstractFilter = __webpack_require__(11);

var _abstractFilter2 = _interopRequireDefault(_abstractFilter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// this filter needs to copy texture to framebuffer

var SimpleCopyFilter = function (_AbstractFilter) {
    _inherits(SimpleCopyFilter, _AbstractFilter);

    function SimpleCopyFilter(gl) {
        _classCallCheck(this, SimpleCopyFilter);

        return _possibleConstructorReturn(this, _AbstractFilter.call(this, gl));
    }

    SimpleCopyFilter.prototype.prepare = function prepare(programGen) {
        programGen.addFragmentUniform('float', 'u_mixFactor');
        programGen.setFragmentMainFn('\n            gl_FragColor = texture2D(texture, v_texCoord); \n        ');
    };

    return SimpleCopyFilter;
}(_abstractFilter2.default);

exports.default = SimpleCopyFilter;

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _abstractPrimitive = __webpack_require__(12);

var _abstractPrimitive2 = _interopRequireDefault(_abstractPrimitive);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Circle = function (_AbstractPrimitive) {
    _inherits(Circle, _AbstractPrimitive);

    function Circle() {
        _classCallCheck(this, Circle);

        var _this = _possibleConstructorReturn(this, _AbstractPrimitive.call(this));

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
}(_abstractPrimitive2.default);

exports.default = Circle;

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _abstractPrimitive = __webpack_require__(12);

var _abstractPrimitive2 = _interopRequireDefault(_abstractPrimitive);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Line = function (_AbstractPrimitive) {
    _inherits(Line, _AbstractPrimitive);

    function Line() {
        _classCallCheck(this, Line);

        var _this = _possibleConstructorReturn(this, _AbstractPrimitive.call(this));

        _this.vertexArr = [0, 0, 1, 1];
        _this.indexArr = [0, 1];
        return _this;
    }

    return Line;
}(_abstractPrimitive2.default);

exports.default = Line;

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _spriteRectDrawer = __webpack_require__(14);

var _spriteRectDrawer2 = _interopRequireDefault(_spriteRectDrawer);

var _shaderGenerator = __webpack_require__(16);

var _shaderProgramUtils = __webpack_require__(7);

var _texShaderGenerator = __webpack_require__(8);

var _texShaderGenerator2 = _interopRequireDefault(_texShaderGenerator);

var _shaderProgram = __webpack_require__(1);

var _shaderProgram2 = _interopRequireDefault(_shaderProgram);

var _simpleCopyFilter = __webpack_require__(67);

var _simpleCopyFilter2 = _interopRequireDefault(_simpleCopyFilter);

var _frameBuffer = __webpack_require__(10);

var _frameBuffer2 = _interopRequireDefault(_frameBuffer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AbstractBlendDrawer = function () {
    function AbstractBlendDrawer(gl) {
        _classCallCheck(this, AbstractBlendDrawer);

        this.gl = gl;
        var gen = new _texShaderGenerator2.default();
        gen.addVarying(_shaderProgramUtils.GL_TYPE.FLOAT_VEC4, 'v_destTexCoord');
        gen.addFragmentUniform(_shaderProgramUtils.GL_TYPE.SAMPLER_2D, 'destTexture');
        gen.setVertexMainFn("\n            gl_Position = u_vertexMatrix * a_position;\n            v_texCoord = (u_textureMatrix * vec4(a_texCoord, 0, 1)).xy;\n            v_destTexCoord = gl_Position*0.5+0.5;  \n        ");
        this.prepare(gen);
        this._afterPrepare(gen);
        this.simpleCopyFilter = new _simpleCopyFilter2.default(gl);
    }

    AbstractBlendDrawer.prototype._afterPrepare = function _afterPrepare(gen) {
        var program = new _shaderProgram2.default(this.gl, gen.getVertexSource(), gen.getFragmentSource());
        this.spriteRectDrawer = new _spriteRectDrawer2.default(this.gl, program);
    };

    AbstractBlendDrawer.prototype.prepare = function prepare(programGen) {};

    // destTex is copy or current destination texture
    // to avoid "Source and destination textures of the draw are the same" error


    AbstractBlendDrawer.prototype.draw = function draw(sourceTex, frameBuffer, uniforms) {
        var destTex = frameBuffer.texture;
        destTex = destTex.applyFilters([this.simpleCopyFilter], frameBuffer);
        destTex.bind(1);
        uniforms.texture = 0;
        uniforms.destTexture = 1;
        this.spriteRectDrawer.draw(sourceTex, uniforms);
    };

    return AbstractBlendDrawer;
}();

exports.default = AbstractBlendDrawer;

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _circle = __webpack_require__(68);

var _circle2 = _interopRequireDefault(_circle);

var _shaderProgram = __webpack_require__(1);

var _shaderProgram2 = _interopRequireDefault(_shaderProgram);

var _abstractDrawer = __webpack_require__(2);

var _abstractDrawer2 = _interopRequireDefault(_abstractDrawer);

var _bufferInfo = __webpack_require__(5);

var _bufferInfo2 = _interopRequireDefault(_bufferInfo);

var _colorShaderGenerator = __webpack_require__(15);

var _colorShaderGenerator2 = _interopRequireDefault(_colorShaderGenerator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CircleDrawer = function (_AbstractDrawer) {
    _inherits(CircleDrawer, _AbstractDrawer);

    function CircleDrawer(gl) {
        _classCallCheck(this, CircleDrawer);

        var _this = _possibleConstructorReturn(this, _AbstractDrawer.call(this, gl));

        var gen = new _colorShaderGenerator2.default();
        _this.program = new _shaderProgram2.default(gl, gen.getVertexSource(), gen.getFragmentSource());
        _this.circle = new _circle2.default();

        _this.bufferInfo = new _bufferInfo2.default(gl, {
            posVertexInfo: { array: _this.circle.vertexArr, type: gl.FLOAT, size: 2, attrName: 'a_position' },
            drawMethod: _this.gl.TRIANGLE_FAN
        });
        return _this;
    }

    return CircleDrawer;
}(_abstractDrawer2.default);

exports.default = CircleDrawer;

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _plane = __webpack_require__(13);

var _plane2 = _interopRequireDefault(_plane);

var _shaderProgram = __webpack_require__(1);

var _shaderProgram2 = _interopRequireDefault(_shaderProgram);

var _bufferInfo = __webpack_require__(5);

var _bufferInfo2 = _interopRequireDefault(_bufferInfo);

var _abstractDrawer = __webpack_require__(2);

var _abstractDrawer2 = _interopRequireDefault(_abstractDrawer);

var _colorShaderGenerator = __webpack_require__(15);

var _colorShaderGenerator2 = _interopRequireDefault(_colorShaderGenerator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ColorRectDrawer = function (_AbstractDrawer) {
    _inherits(ColorRectDrawer, _AbstractDrawer);

    function ColorRectDrawer(gl) {
        _classCallCheck(this, ColorRectDrawer);

        var _this = _possibleConstructorReturn(this, _AbstractDrawer.call(this, gl));

        _this.plane = new _plane2.default();
        var gen = new _colorShaderGenerator2.default();
        _this.program = new _shaderProgram2.default(gl, gen.getVertexSource(), gen.getFragmentSource());

        _this.bufferInfo = new _bufferInfo2.default(gl, {
            posVertexInfo: { array: _this.plane.vertexArr, type: gl.FLOAT, size: 2, attrName: 'a_position' },
            posIndexInfo: { array: _this.plane.indexArr },
            drawMethod: _this.gl.TRIANGLE_STRIP
        });
        return _this;
    }

    return ColorRectDrawer;
}(_abstractDrawer2.default);

exports.default = ColorRectDrawer;

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _line = __webpack_require__(69);

var _line2 = _interopRequireDefault(_line);

var _shaderProgram = __webpack_require__(1);

var _shaderProgram2 = _interopRequireDefault(_shaderProgram);

var _bufferInfo = __webpack_require__(5);

var _bufferInfo2 = _interopRequireDefault(_bufferInfo);

var _abstractDrawer = __webpack_require__(2);

var _abstractDrawer2 = _interopRequireDefault(_abstractDrawer);

var _colorShaderGenerator = __webpack_require__(15);

var _colorShaderGenerator2 = _interopRequireDefault(_colorShaderGenerator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LineDrawer = function (_AbstractDrawer) {
    _inherits(LineDrawer, _AbstractDrawer);

    function LineDrawer(gl) {
        _classCallCheck(this, LineDrawer);

        var _this = _possibleConstructorReturn(this, _AbstractDrawer.call(this, gl));

        var gen = new _colorShaderGenerator2.default();
        _this.program = new _shaderProgram2.default(gl, gen.getVertexSource(), gen.getFragmentSource());
        _this.line = new _line2.default();

        _this.bufferInfo = new _bufferInfo2.default(gl, {
            posVertexInfo: { array: _this.line.vertexArr, type: gl.FLOAT, size: 2, attrName: 'a_position' },
            drawMethod: _this.gl.LINE_STRIP
        });
        return _this;
    }

    return LineDrawer;
}(_abstractDrawer2.default);

exports.default = LineDrawer;

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _shaderProgram = __webpack_require__(1);

var _shaderProgram2 = _interopRequireDefault(_shaderProgram);

var _vertexBuffer = __webpack_require__(23);

var _vertexBuffer2 = _interopRequireDefault(_vertexBuffer);

var _indexBuffer = __webpack_require__(21);

var _indexBuffer2 = _interopRequireDefault(_indexBuffer);

var _abstractDrawer = __webpack_require__(2);

var _abstractDrawer2 = _interopRequireDefault(_abstractDrawer);

var _bufferInfo = __webpack_require__(5);

var _bufferInfo2 = _interopRequireDefault(_bufferInfo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import basicVertexShader from '../../../shaders/_unused/basic/vertex2.vert'
// import textureShader from '../../../shaders/_unused/texture/fragment2.frag'


var ModelDrawer = function (_AbstractDrawer) {
    _inherits(ModelDrawer, _AbstractDrawer);

    function ModelDrawer(gl) {
        _classCallCheck(this, ModelDrawer);

        var _this = _possibleConstructorReturn(this, _AbstractDrawer.call(this, gl));

        _this.program = new _shaderProgram2.default(gl);

        _this.posVertexBuffer = new _vertexBuffer2.default(gl);
        _this.texVertexBuffer = new _vertexBuffer2.default(gl);
        _this.normalBuffer = new _vertexBuffer2.default(gl);
        _this.posIndexBuffer = new _indexBuffer2.default(gl);

        _this.program.bind();
        return _this;
    }

    ModelDrawer.prototype.bind = function bind(model) {
        _AbstractDrawer.prototype.bind.call(this);
        this.program.bind();
        var gl = this.gl;
        var program = this.program;

        this.posVertexBuffer.setData(model.vertexArr, gl.FLOAT, 3);
        program.bindBuffer(this.posVertexBuffer, 'a_position');

        this.texVertexBuffer.setData(model.texCoordArr, gl.FLOAT, 2);
        program.bindBuffer(this.texVertexBuffer, 'a_texCoord');

        this.normalBuffer.setData(model.normalArr, gl.FLOAT, 3);
        program.bindBuffer(this.normalBuffer, 'a_normal');

        this.posIndexBuffer.setData(model.indexArr);
        this.posIndexBuffer.bind();
    };

    ModelDrawer.prototype.draw = function draw() {
        this.gl.drawElements(this.gl.TRIANGLES, this.posIndexBuffer.getBufferLength(), this.gl.UNSIGNED_SHORT, 0);
    };

    return ModelDrawer;
}(_abstractDrawer2.default);

exports.default = ModelDrawer;

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _plane = __webpack_require__(13);

var _plane2 = _interopRequireDefault(_plane);

var _shaderProgram = __webpack_require__(1);

var _shaderProgram2 = _interopRequireDefault(_shaderProgram);

var _bufferInfo = __webpack_require__(5);

var _bufferInfo2 = _interopRequireDefault(_bufferInfo);

var _abstractDrawer = __webpack_require__(2);

var _abstractDrawer2 = _interopRequireDefault(_abstractDrawer);

var _shaderProgramUtils = __webpack_require__(7);

var _texShaderGenerator = __webpack_require__(8);

var _texShaderGenerator2 = _interopRequireDefault(_texShaderGenerator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var gen = new _texShaderGenerator2.default();
gen.addFragmentUniform(_shaderProgramUtils.GL_TYPE.FLOAT_VEC2, 'u_offsetCoords');
gen.addFragmentUniform(_shaderProgramUtils.GL_TYPE.FLOAT_VEC4, 'u_frameCoords');
gen.setFragmentMainFn('\n    vec2 localTextCoord = mod(\n        v_texCoord + fract(u_offsetCoords),\n        u_frameCoords.zw\n    ) + u_frameCoords.xy;\n    gl_FragColor = texture2D(texture, localTextCoord);\n    gl_FragColor.a *= u_alpha;\n');

var TiledSpriteRectDrawer = function (_AbstractDrawer) {
    _inherits(TiledSpriteRectDrawer, _AbstractDrawer);

    function TiledSpriteRectDrawer(gl) {
        _classCallCheck(this, TiledSpriteRectDrawer);

        var _this = _possibleConstructorReturn(this, _AbstractDrawer.call(this, gl));

        _this.plane = new _plane2.default();
        _this.program = new _shaderProgram2.default(gl, gen.getVertexSource(), gen.getFragmentSource());

        _this.bufferInfo = new _bufferInfo2.default(gl, {
            posVertexInfo: { array: _this.plane.vertexArr, type: gl.FLOAT, size: 2, attrName: 'a_position' },
            posIndexInfo: { array: _this.plane.indexArr },
            texVertexInfo: { array: _this.plane.texCoordArr, type: gl.FLOAT, size: 2, attrName: 'a_texCoord' },
            drawMethod: _this.gl.TRIANGLE_STRIP
        });

        return _this;
    }

    TiledSpriteRectDrawer.prototype.draw = function draw(texture, uniforms) {
        texture.bind();
        _AbstractDrawer.prototype.draw.call(this, uniforms);
    };

    return TiledSpriteRectDrawer;
}(_abstractDrawer2.default);

exports.default = TiledSpriteRectDrawer;

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _abstractBlendDrawer = __webpack_require__(70);

var _abstractBlendDrawer2 = _interopRequireDefault(_abstractBlendDrawer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MultBlendDrawer = function (_AbstractBlendDrawer) {
    _inherits(MultBlendDrawer, _AbstractBlendDrawer);

    function MultBlendDrawer(gl) {
        _classCallCheck(this, MultBlendDrawer);

        return _possibleConstructorReturn(this, _AbstractBlendDrawer.call(this, gl));
    }

    MultBlendDrawer.prototype.prepare = function prepare(programGen) {
        programGen.setFragmentMainFn("\n            vec4 srcColor =  texture2D(texture, v_texCoord)*2.0;\n            srcColor.a *= u_alpha;\n            vec4 destColor = texture2D(destTexture, v_destTexCoord.xy);\n            vec4 res = min(srcColor + destColor,vec4(1.0));\n            gl_FragColor = res;\n        ");
    };

    return MultBlendDrawer;
}(_abstractBlendDrawer2.default);

exports.default = MultBlendDrawer;

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _abstractRenderer = __webpack_require__(63);

var _abstractRenderer2 = _interopRequireDefault(_abstractRenderer);

var _spriteRectDrawer = __webpack_require__(14);

var _spriteRectDrawer2 = _interopRequireDefault(_spriteRectDrawer);

var _tiledSpriteRectDrawer = __webpack_require__(75);

var _tiledSpriteRectDrawer2 = _interopRequireDefault(_tiledSpriteRectDrawer);

var _colorRectDrawer = __webpack_require__(72);

var _colorRectDrawer2 = _interopRequireDefault(_colorRectDrawer);

var _abstractDrawer = __webpack_require__(2);

var _abstractDrawer2 = _interopRequireDefault(_abstractDrawer);

var _lineDrawer = __webpack_require__(73);

var _lineDrawer2 = _interopRequireDefault(_lineDrawer);

var _circleDrawer = __webpack_require__(71);

var _circleDrawer2 = _interopRequireDefault(_circleDrawer);

var _modelDrawer = __webpack_require__(74);

var _modelDrawer2 = _interopRequireDefault(_modelDrawer);

var _frameBuffer = __webpack_require__(10);

var _frameBuffer2 = _interopRequireDefault(_frameBuffer);

var _matrixStack = __webpack_require__(65);

var _matrixStack2 = _interopRequireDefault(_matrixStack);

var _mat = __webpack_require__(6);

var _mat2 = _interopRequireDefault(_mat);

var _mathEx = __webpack_require__(4);

var matEx = _interopRequireWildcard(_mathEx);

var _texture = __webpack_require__(22);

var _texture2 = _interopRequireDefault(_texture);

var _multBlendDrawer = __webpack_require__(76);

var _multBlendDrawer2 = _interopRequireDefault(_multBlendDrawer);

var _rect = __webpack_require__(9);

var _rect2 = _interopRequireDefault(_rect);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
/*global Image:true*/
/*global DEBUG:true*/

var stop = 0;

var getCtx = function getCtx(el) {
    return el.getContext("webgl", { alpha: false }) || el.getContext('experimental-webgl', { alpha: false }) || el.getContext('webkit-3d', { alpha: false }) || el.getContext('moz-webgl', { alpha: false });
};
var SCENE_DEPTH = 1000;
var matrixStack = new _matrixStack2.default();

var makePositionMatrix = function makePositionMatrix(dstX, dstY, dstWidth, dstHeight, viewWidth, viewHeight) {
    // proj * modelView
    var zToWMatrix = _mat2.default.makeZToWMatrix(1);
    var projectionMatrix = _mat2.default.ortho(0, viewWidth, 0, viewHeight, -SCENE_DEPTH, SCENE_DEPTH);
    var scaleMatrix = _mat2.default.makeScale(dstWidth, dstHeight, 1);
    var translationMatrix = _mat2.default.makeTranslation(dstX, dstY, 0);

    var matrix = _mat2.default.matrixMultiply(scaleMatrix, translationMatrix);
    matrix = _mat2.default.matrixMultiply(matrix, matrixStack.getCurrentMatrix());
    matrix = _mat2.default.matrixMultiply(matrix, projectionMatrix);
    matrix = _mat2.default.matrixMultiply(matrix, zToWMatrix);
    return matrix;
};

var makeTextureMatrix = function makeTextureMatrix(srcX, srcY, srcWidth, srcHeight, texWidth, texHeight) {

    var texScaleMatrix = _mat2.default.makeScale(srcWidth / texWidth, srcHeight / texHeight, 1);
    var texTranslationMatrix = _mat2.default.makeTranslation(srcX / texWidth, srcY / texHeight, 0);
    return _mat2.default.matrixMultiply(texScaleMatrix, texTranslationMatrix);
};
//  gl.enable(gl.CULL_FACE);
//   gl.enable(gl.DEPTH_TEST);

var WebGlRenderer = function (_AbstractRenderer) {
    _inherits(WebGlRenderer, _AbstractRenderer);

    function WebGlRenderer(game) {
        _classCallCheck(this, WebGlRenderer);

        // todo DRY
        var _this = _possibleConstructorReturn(this, _AbstractRenderer.call(this, game));

        var container = document.createElement('canvas');
        document.body.appendChild(container);
        container.setAttribute('width', game.width);
        container.setAttribute('height', game.height);
        _this.container = container;
        _this.matrixStack = matrixStack;
        _this.registerResize();
        _this._init();
        return _this;
    }

    WebGlRenderer.prototype._init = function _init() {
        var gl = getCtx(this.container);
        this.gl = gl;

        this.circleDrawer = new _circleDrawer2.default(gl);
        this.spriteRectDrawer = new _spriteRectDrawer2.default(gl);
        this.tiledSpriteRectDrawer = new _tiledSpriteRectDrawer2.default(gl);
        this.colorRectDrawer = new _colorRectDrawer2.default(gl);
        this.lineDrawer = new _lineDrawer2.default(gl);
        //this.modelDrawer = new ModelDrawer(gl);
        this.multBlendDrawer = new _multBlendDrawer2.default(gl);

        this.frameBuffer = new _frameBuffer2.default(gl, this.game.width, this.game.height);

        gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
        gl.enable(gl.BLEND);
    };

    WebGlRenderer.prototype.draw = function draw(renderable) {

        if (stop) return;

        if (!matEx.overlapTest(this.game.camera.getRectScaled(), renderable.getRect())) return;

        var texToDraw = this.renderableCache[renderable.spriteSheet.resourcePath];
        texToDraw = texToDraw.applyFilters(renderable.filters, this.frameBuffer, this.frameBuffer);

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

        this.drawTexture(texToDraw, renderable._sprPosX, renderable._sprPosY, renderable.width, renderable.height, 0, 0, renderable.width, renderable.height);
        this.restore();
    };

    WebGlRenderer.prototype.drawImage = function drawImage(texturePath, srcX, srcY, srcWidth, srcHeight, dstX, dstY) {

        if (stop) return;
        //this.gl.blendFunc(this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA);
        //gl.blendColor(0, 0.5, 1, 1);

        var texture = this.renderableCache[texturePath];
        if (1 && !texture) {
            if (!texturePath) throw 'no texture path provided';else throw 'can not find texture with path ' + texturePath;
        }
        this.drawTexture(texture, srcX, srcY, srcWidth, srcHeight, dstX, dstY);
    };

    WebGlRenderer.prototype.drawTexture = function drawTexture(texture, srcX, srcY, srcWidth, srcHeight, dstX, dstY) {

        var camRectScaled = this.game.camera.getRectScaled();
        if (!matEx.overlapTest(camRectScaled, new _rect2.default(camRectScaled.x + srcX, camRectScaled.y + srcY, srcWidth, srcHeight))) return;

        var texWidth = texture.getSize().width;
        var texHeight = texture.getSize().height;

        var uniforms = {
            u_textureMatrix: makeTextureMatrix(srcX, srcY, srcWidth, srcHeight, texWidth, texHeight),
            u_vertexMatrix: makePositionMatrix(dstX, dstY, srcWidth, srcHeight, this.game.width, this.game.height),
            u_alpha: 1
        };

        if (srcWidth === 120 || srcWidth === 174) {
            this.multBlendDrawer.draw(texture, this.frameBuffer, uniforms);
        } else this.spriteRectDrawer.draw(texture, uniforms);
    };

    WebGlRenderer.prototype.drawTiledImage = function drawTiledImage(texturePath, srcX, srcY, srcWidth, srcHeight, dstX, dstY, dstWidth, dstHeight, offsetX, offsetY) {

        //this.gl.blendFunc(this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA);
        //gl.blendColor(0, 0.5, 1, 1);

        var texture = this.renderableCache[texturePath];
        if (1 && !texture) {
            if (!texturePath) throw 'no texture path provided';else throw 'can not find texture with path ' + texturePath;
        }
        var texWidth = texture.getSize().width;
        var texHeight = texture.getSize().height;

        var uniforms = {};
        uniforms.u_textureMatrix = makeTextureMatrix(0, 0, dstWidth, dstHeight, texWidth, texHeight);
        uniforms.u_vertexMatrix = makePositionMatrix(dstX, dstY, dstWidth, dstHeight, this.game.width, this.game.height);
        uniforms.u_frameCoords = [srcX / texWidth, srcY / texHeight, srcWidth / texWidth, srcHeight / texHeight];
        uniforms.u_offsetCoords = [offsetX / srcWidth, offsetY / srcHeight];
        uniforms.u_alpha = 1;
        this.tiledSpriteRectDrawer.draw(texture, uniforms);
    };

    WebGlRenderer.prototype.fillRect = function fillRect(x, y, width, height, color) {
        if (stop) return;
        if (!matEx.overlapTest(this.game.camera.getRectScaled(), { x: x, y: y, width: width, height: height })) return;
        var uniforms = {
            u_vertexMatrix: makePositionMatrix(x, y, width, height, this.game.width, this.game.height),
            u_rgba: color
        };
        //gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
        this.colorRectDrawer.draw(uniforms);
    };

    WebGlRenderer.prototype.drawRect = function drawRect(x, y, w, h, color) {
        this.fillRect(x, y, w, 1, color);
        this.fillRect(x, y + h, w, 1, color);
        this.fillRect(x, y, 1, h, color);
        this.fillRect(x + w, y, 1, h, color);
    };

    WebGlRenderer.prototype.drawLine = function drawLine(x1, y1, x2, y2, color) {
        if (stop) return;
        var dx = x2 - x1,
            dy = y2 - y1;
        if (!matEx.overlapTest(this.game.camera.getRectScaled(), { x: x1, y: y1, width: dx, height: dy })) return;
        var uniforms = {};
        uniforms.u_vertexMatrix = makePositionMatrix(x1, y1, dx, dy, this.game.width, this.game.height);
        uniforms.u_rgba = color;
        //gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
        this.lineDrawer.draw(uniforms);
    };

    WebGlRenderer.prototype.fillCircle = function fillCircle(x, y, r, color) {
        var r2 = r * 2;
        if (!matEx.overlapTest(this.game.camera.getRectScaled(), { x: x - r, y: y - r, width: r2, height: r2 })) return;
        var uniforms = {};
        uniforms.u_vertexMatrix = makePositionMatrix(x - r, y - r, r2, r2, this.game.width, this.game.height);
        uniforms.u_rgba = color;
        //gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
        this.circleDrawer.draw(uniforms);
    };

    WebGlRenderer.prototype.setAlpha = function setAlpha(a) {
        throw 'not implemented';
    };

    WebGlRenderer.prototype.save = function save() {
        this.matrixStack.save();
    };

    WebGlRenderer.prototype.scale = function scale(x, y) {
        this.matrixStack.scale(x, y);
    };

    WebGlRenderer.prototype.rotateZ = function rotateZ(angleInRadians) {
        this.matrixStack.rotateZ(angleInRadians);
    };

    WebGlRenderer.prototype.rotateY = function rotateY(angleInRadians) {
        this.matrixStack.rotateY(angleInRadians);
    };

    WebGlRenderer.prototype.translate = function translate(x, y) {
        this.matrixStack.translate(x, y);
    };

    WebGlRenderer.prototype.restore = function restore() {
        this.matrixStack.restore();
    };

    WebGlRenderer.prototype.lockRect = function lockRect(rect) {};

    WebGlRenderer.prototype.unlockRect = function unlockRect() {};

    WebGlRenderer.prototype.clear = function clear() {
        this.gl.clearColor(1, 1, 1, 1);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
    };

    WebGlRenderer.prototype.clearColor = function clearColor(_ref) {
        var r = _ref.r,
            g = _ref.g,
            b = _ref.b;

        this.gl.clearColor(r / 255.0, g / 255.0, b / 255.0, 1.0);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
    };

    WebGlRenderer.prototype.beginFrameBuffer = function beginFrameBuffer() {
        this.save();
        this.frameBuffer.bind();
    };

    // gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);


    WebGlRenderer.prototype.flipFrameBuffer = function flipFrameBuffer(filters) {

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
            u_textureMatrix: makeTextureMatrix(0, 0, fullScreen.w, fullScreen.h, fullScreen.w, fullScreen.h),
            u_alpha: 1
        };
        this.spriteRectDrawer.draw(texToDraw, uniforms);
        //this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA);
        this.restore();
    };

    WebGlRenderer.prototype.getError = function getError() {
        if (false) return 0;
        var err = this.gl.getError();
        err = err === this.gl.NO_ERROR ? 0 : err;
        if (err) {
            console.log(_abstractDrawer2.default.currentInstance);
        }
        return err;
    };

    WebGlRenderer.prototype.loadTextureInfo = function loadTextureInfo(resourcePath, onLoad) {
        var _this2 = this;

        var img = new Image();
        img.src = resourcePath;
        img.onload = function () {
            var texture = new _texture2.default(_this2.gl);
            texture.setImage(img);
            _this2.renderableCache[resourcePath] = texture;
            onLoad();
        };
    };

    return WebGlRenderer;
}(_abstractRenderer2.default);

exports.default = WebGlRenderer;

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _all = __webpack_require__(79);

var models = _interopRequireWildcard(_all);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /*global DEBUG:true*/

var Repository = function () {
    function Repository(game) {
        _classCallCheck(this, Repository);

        this._game = game;
        this.reset();
    }

    Repository.prototype.addDescription = function addDescription(desc, type) {
        if (!this.descriptions[type]) this.descriptions[type] = [];
        this.descriptions[type].push(desc);
    };

    Repository.prototype.setDescriptions = function setDescriptions(descs) {
        var _this = this;

        Object.keys(descs).forEach(function (type) {
            descs[type].forEach(function (desc) {
                _this.addDescription(desc, type);
            });
        });
    };

    Repository.prototype.getObject = function getObject(id, type) {
        var forceNew = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (1 && !type) throw 'repository.getObject: type not specified';
        if (1 && id == null) {
            console.trace("id is null");
            throw '::getObject() id not specified for type ' + type;
        }
        var Clazz = models[type];

        if (1 && !Clazz) {
            throw '::getObject() undeclared object type ' + type;
        }
        if (1 && !this.descriptions[type]) throw 'not found description for type: ' + type;
        var desc = this.descriptions[type].find(function (it) {
            return it.id == id;
        });
        if (!desc) {
            throw 'can not find object "' + type + '" with id ' + id;
        }
        if (forceNew || !this.cache[desc[id]]) this.cache[id] = new Clazz(this._game).fromJSON(desc);
        return this.cache[id];
    };

    Repository.prototype.getFirst = function getFirst(type) {
        var all = this.getArray(type);
        if (!all.length) return null;
        return all[0];
    };

    Repository.prototype.addObject = function addObject(obj) {
        if (1 && !obj.id) {
            console.error(obj);
            throw 'addObject: id is not provided';
        }
        if (!this.arrays[obj.type]) this.arrays[obj.type] = [];
        this.arrays[obj.type].push(obj);
        if (!this.descriptions[obj.type]) this.descriptions[obj.type] = [];
        this.descriptions[obj.type].push(obj.toJSON());
    };

    Repository.prototype.updateObject = function updateObject(obj, opts) {
        var json = obj.toJSON(opts);
        var index = this.descriptions[obj.type].findIndex(function (it) {
            return it.id == obj.id;
        });
        this.descriptions[obj.type][index] = json;
        var objInRepo = this.getObject(obj.id, obj.type, true);
        if (objInRepo) objInRepo.fromJSON(json);
    };

    Repository.prototype.removeObject = function removeObject(obj) {
        if (1 && !this.arrays[obj.type]) this.arrays[obj.type] = [];
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

    Repository.prototype.getArray = function getArray(type) {
        var _this2 = this;

        if (1 && !models[type]) throw 'getArray: unregistered type "' + type + '"';
        if (this.arrays[type]) return this.arrays[type];
        var res = [];
        if (!this.descriptions[type]) this.descriptions[type] = [];
        this.descriptions[type].forEach(function (desc) {
            if (1 && (desc.id === null || desc.id === undefined)) {
                console.error(desc);
                throw 'object id must me specified';
            }
            res.push(_this2.getObject(desc.id, type));
        });
        return this.arrays[type] = res;
    };

    Repository.prototype.reset = function reset() {
        this.descriptions = {};
        this.arrays = {};
        this.cache = {};
    };

    return Repository;
}();

exports.default = Repository;

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.TileMap = exports.TextField = exports.Layer = exports.Font = exports.Sound = exports.Scene = exports.ParticleSystem = exports.CommonBehaviour = exports.GameObject = exports.GameObjectProto = exports.SpriteSheet = exports.FrameAnimation = undefined;

var _frameAnimation = __webpack_require__(82);

var _frameAnimation2 = _interopRequireDefault(_frameAnimation);

var _spriteSheet = __webpack_require__(88);

var _spriteSheet2 = _interopRequireDefault(_spriteSheet);

var _gameObjectProto = __webpack_require__(27);

var _gameObjectProto2 = _interopRequireDefault(_gameObjectProto);

var _gameObject = __webpack_require__(83);

var _gameObject2 = _interopRequireDefault(_gameObject);

var _commonBehaviour = __webpack_require__(80);

var _commonBehaviour2 = _interopRequireDefault(_commonBehaviour);

var _particleSystem = __webpack_require__(85);

var _particleSystem2 = _interopRequireDefault(_particleSystem);

var _scene = __webpack_require__(86);

var _scene2 = _interopRequireDefault(_scene);

var _sound = __webpack_require__(87);

var _sound2 = _interopRequireDefault(_sound);

var _font = __webpack_require__(81);

var _font2 = _interopRequireDefault(_font);

var _layer = __webpack_require__(84);

var _layer2 = _interopRequireDefault(_layer);

var _textField = __webpack_require__(29);

var _textField2 = _interopRequireDefault(_textField);

var _tileMap = __webpack_require__(28);

var _tileMap2 = _interopRequireDefault(_tileMap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.FrameAnimation = _frameAnimation2.default;
exports.SpriteSheet = _spriteSheet2.default;
exports.GameObjectProto = _gameObjectProto2.default;
exports.GameObject = _gameObject2.default;
exports.CommonBehaviour = _commonBehaviour2.default;
exports.ParticleSystem = _particleSystem2.default;
exports.Scene = _scene2.default;
exports.Sound = _sound2.default;
exports.Font = _font2.default;
exports.Layer = _layer2.default;
exports.TextField = _textField2.default;
exports.TileMap = _tileMap2.default;

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _baseModel = __webpack_require__(0);

var _baseModel2 = _interopRequireDefault(_baseModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CommonBehaviour = function (_BaseModel) {
    _inherits(CommonBehaviour, _BaseModel);

    function CommonBehaviour(game) {
        _classCallCheck(this, CommonBehaviour);

        var _this = _possibleConstructorReturn(this, _BaseModel.call(this, game));

        _this.type = 'CommonBehaviour';
        _this.parameters = [];
        _this.description = null;
        return _this;
    }

    return CommonBehaviour;
}(_baseModel2.default);

exports.default = CommonBehaviour;

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _baseModel = __webpack_require__(0);

var _baseModel2 = _interopRequireDefault(_baseModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Font = function (_BaseModel) {
    _inherits(Font, _BaseModel);

    function Font(game) {
        _classCallCheck(this, Font);

        var _this = _possibleConstructorReturn(this, _BaseModel.call(this, game));

        _this.type = 'Font';
        _this.resourcePath = null;
        _this.fontSize = 12;
        _this.fontFamily = 'Monospace';
        _this.fontContext = null;
        _this.fontColor = { r: 0, g: 0, b: 0 };
        return _this;
    }

    return Font;
}(_baseModel2.default);

exports.default = Font;

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _baseModel = __webpack_require__(0);

var _baseModel2 = _interopRequireDefault(_baseModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FrameAnimation = function (_BaseModel) {
    _inherits(FrameAnimation, _BaseModel);

    function FrameAnimation(game) {
        _classCallCheck(this, FrameAnimation);

        var _this = _possibleConstructorReturn(this, _BaseModel.call(this, game));

        _this.type = 'FrameAnimation';
        _this._currFrame = 0;
        _this.frames = [];
        _this.duration = 1000;
        _this._gameObject = null;
        _this._startTime = null;

        _this.stop();
        return _this;
    }

    FrameAnimation.prototype.revalidate = function revalidate() {
        this._timeForOneFrame = ~~(this.duration / this.frames.length);
    };

    FrameAnimation.prototype.play = function play() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { repeat: true };

        this._isRepeat = opts.repeat;
        this._gameObject._currFrameAnimation = this;
    };

    FrameAnimation.prototype.stop = function stop() {
        if (this._gameObject) this._gameObject._currFrameAnimation = null;
        this._startTime = null;
        this._isRepeat = true;
    };

    FrameAnimation.prototype.update = function update(time) {
        if (!this._startTime) this._startTime = time;
        var delta = (time - this._startTime) % this.duration;
        this._currFrame = ~~(this.frames.length * delta / this.duration);
        if (this._isRepeat == false && this._currFrame >= this.frames.length - 1) {
            this.stop();
        }
        var lastFrIndex = this._gameObject.currFrameIndex;
        if (lastFrIndex != this.frames[this._currFrame]) {
            this._gameObject.setFrameIndex(this.frames[this._currFrame]);
        }
    };

    FrameAnimation.prototype.nextFrame = function nextFrame() {
        var ind = this._currFrame;
        ind++;
        if (ind == this.frames.length) ind = 0;
        this._gameObject.setFrameIndex(this.frames[ind]);
        this._currFrame = ind;
    };

    FrameAnimation.prototype.previousFrame = function previousFrame() {
        var ind = this._currFrame;
        ind--;
        if (ind < 0) ind = this.frames.length - 1;
        this._gameObject.setFrameIndex(this.frames[ind]);
        this._currFrame = ind;
    };

    return FrameAnimation;
}(_baseModel2.default);

exports.default = FrameAnimation;

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _gameObjectProto = __webpack_require__(27);

var _gameObjectProto2 = _interopRequireDefault(_gameObjectProto);

var _all = __webpack_require__(45);

var commonBehaviours = _interopRequireWildcard(_all);

var _blackWhite = __webpack_require__(24);

var _blackWhite2 = _interopRequireDefault(_blackWhite);

var _colorizeFilter = __webpack_require__(66);

var _colorizeFilter2 = _interopRequireDefault(_colorizeFilter);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*global DEBUG:true*/


var noop = function noop() {};

var GameObject = function (_GameObjectProto) {
    _inherits(GameObject, _GameObjectProto);

    function GameObject(game) {
        _classCallCheck(this, GameObject);

        var _this = _possibleConstructorReturn(this, _GameObjectProto.call(this, game));

        _this.type = 'GameObject';
        _this.gameObjectProto = null;
        return _this;
    }

    GameObject.prototype.revalidate = function revalidate() {
        var _this2 = this;

        var ownProps = {};
        for (var key in this) {
            if (!this.hasOwnProperty(key)) continue;
            ownProps[key] = this[key];
        }
        Object.keys(this.gameObjectProto).forEach(function (key) {
            if (_this2.gameObjectProto[key] === undefined) return;
            _this2[key] = _this2.gameObjectProto[key];
        });
        Object.keys(ownProps).forEach(function (key) {
            if (!ownProps[key]) return; // to avoid corrupt frameIndex val
            if (ownProps[key].splice && ownProps[key].length === 0) return;
            _this2[key] = ownProps[key];
        });
        _GameObjectProto.prototype.revalidate.call(this);
        if (this.id === 71) {
            var filter1 = new _blackWhite2.default(this.game.renderer.gl);
            var filter2 = new _colorizeFilter2.default(this.game.renderer.gl);
            this.filters.push(filter1);
            this.filters.push(filter2);
        }
    };

    GameObject.prototype.setIndividualBehaviour = function setIndividualBehaviour(Clazz) {
        var instance = new Clazz(this.game);
        instance.game = this.game;
        instance.gameObject = this;
        if (!instance.onCreate) instance.onCreate = noop;
        if (!instance.onUpdate) instance.onUpdate = noop;
        if (!instance.onDestroy) instance.onDestroy = noop;
        this._individualBehaviour = instance;
    };

    GameObject.prototype.setCommonBehaviour = function setCommonBehaviour() {
        var _this3 = this;

        var instances = [];
        this.commonBehaviour.forEach(function (cb) {
            var CbClazz = commonBehaviours[cb.name];
            if (true) {
                if (!CbClazz) {
                    console.error(cb);
                    console.error(commonBehaviours);
                    throw 'can not find common behaviour with name ' + cb.name;
                }
            }
            var instance = new CbClazz(_this3.game);
            instance.manage(_this3, cb.parameters);
            instances.push(instance);
        });
        this.commonBehaviour = instances;
    };

    return GameObject;
}(_gameObjectProto2.default);

exports.default = GameObject;
;

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _baseModel = __webpack_require__(0);

var _baseModel2 = _interopRequireDefault(_baseModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Layer = function (_BaseModel) {
    _inherits(Layer, _BaseModel);

    function Layer(game) {
        _classCallCheck(this, Layer);

        var _this = _possibleConstructorReturn(this, _BaseModel.call(this, game));

        _this.type = 'Layer';
        _this.gameObjects = [];
        return _this;
    }

    Layer.prototype.addGameObject = function addGameObject(go) {
        go._layer = this;
        this.gameObjects.push(go);
    };

    Layer.prototype.getAllSpriteSheets = function getAllSpriteSheets() {
        var dataSet = [];
        this.gameObjects.forEach(function (obj) {
            obj.spriteSheet && !dataSet.find(function (it) {
                return obj.id === it.id;
            }) && dataSet.push(obj.spriteSheet);
        });
        return dataSet;
    };

    Layer.prototype.onShow = function onShow() {
        this.gameObjects.forEach(function (g) {
            g.onShow();
        });
    };

    Layer.prototype.kill = function kill(gObj) {
        this.gameObjects.remove(function (it) {
            return it.id === gObj.id;
        });
    };

    Layer.prototype.update = function update(currTime, deltaTime) {
        var all = this.gameObjects;
        var i = all.length;
        var l = i - 1;
        while (i--) {
            var obj = all[l - i];
            obj && obj.update(currTime, deltaTime);
        }
    };

    return Layer;
}(_baseModel2.default);

exports.default = Layer;

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _baseModel = __webpack_require__(0);

var _baseModel2 = _interopRequireDefault(_baseModel);

var _mathEx = __webpack_require__(4);

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

        var _this = _possibleConstructorReturn(this, _BaseModel.call(this, game));

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

    ParticleSystem.prototype.revalidate = function revalidate() {
        if (this.particleAngle.to < this.particleAngle.from) this.particleAngle.to += 2 * Math.PI;
    };

    ParticleSystem.find = function find(name) {
        //return bundle.particleSystemList.find({name:name});
    };

    ParticleSystem.findAll = function findAll(name) {
        //return bundle.particleSystemList.findAll({name:name});
    };

    ParticleSystem.prototype.emit = function emit(x, y) {
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

    ParticleSystem.prototype.update = function update(time, delta) {
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

    return ParticleSystem;
}(_baseModel2.default);

exports.default = ParticleSystem;

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _baseModel = __webpack_require__(0);

var _baseModel2 = _interopRequireDefault(_baseModel);

var _loadingQueue = __webpack_require__(58);

var _loadingQueue2 = _interopRequireDefault(_loadingQueue);

var _tileMap = __webpack_require__(28);

var _tileMap2 = _interopRequireDefault(_tileMap);

var _blackWhite = __webpack_require__(24);

var _blackWhite2 = _interopRequireDefault(_blackWhite);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*global IN_EDITOR:true*/
/*global DEBUG:true*/


var Scene = function (_BaseModel) {
    _inherits(Scene, _BaseModel);

    function Scene(game) {
        _classCallCheck(this, Scene);

        var _this = _possibleConstructorReturn(this, _BaseModel.call(this, game));

        _this.type = 'Scene';
        _this.layers = [];
        _this.useBG = false;
        _this.colorBG = { r: 255, g: 255, b: 255 };
        _this._tweenMovies = [];
        _this.filters = [];
        _this._individualBehaviour = null;

        _this.tileMap = new _tileMap2.default(game);
        return _this;
    }

    Scene.prototype.revalidate = function revalidate() {
        _BaseModel.prototype.revalidate.call(this);
        if (!false && this.tileMap && this.tileMap.spriteSheet) {
            this.tileMap._tilesInScreenX = ~~(this.game.width / this.tileMap.spriteSheet._frameWidth);
            this.tileMap._tilesInScreenY = ~~(this.game.height / this.tileMap.spriteSheet._frameHeight);
        }
        //this.filters.push(new BlackWhiteFilter(this.game.renderer.gl));
    };

    Scene.prototype.addTweenMovie = function addTweenMovie(tm) {
        this._tweenMovies.push(tm);
    };

    Scene.prototype.getAllGameObjects = function getAllGameObjects() {
        var res = [];
        this.layers.forEach(function (l) {
            res = res.concat(res, l.gameObjects);
        });
        return res;
    };

    Scene.prototype.getAllSpriteSheets = function getAllSpriteSheets() {
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

    Scene.prototype.preload = function preload(cb) {
        var _this2 = this;

        var resources = this.getAllSpriteSheets().concat(this.game.repository.getArray('Font'));
        var q = new _loadingQueue2.default();
        q.onResolved = function () {
            cb && cb();
        };
        resources.forEach(function (res) {
            q.addTask(function () {
                _this2.game.renderer.loadTextureInfo(res.resourcePath, function () {
                    return q.resolveTask(res.id);
                });
            }, res.id);
        });
        q.start();
    };

    Scene.prototype.onShow = function onShow() {
        if (this._individualBehaviour) this._individualBehaviour.onCreate();
        this.layers.forEach(function (l) {
            l.onShow();
        });
    };

    Scene.prototype.setIndividualBehaviour = function setIndividualBehaviour(Clazz) {
        var instance = new Clazz(this.game);
        instance.game = this.game;
        instance.scene = this;
        this._individualBehaviour = instance;
    };

    Scene.prototype.update = function update(currTime, deltaTime) {

        if (true) {
            if (this.game.renderer.debugTextField) this.game.renderer.debugTextField.setText('');
        }

        var renderer = this.game.renderer;
        renderer.beginFrameBuffer();
        if (this.useBG) renderer.clearColor(this.colorBG);else renderer.clear();

        var layers = this.layers;
        var i = this.layers.length;
        var l = i - 1;

        this.game.camera.update(currTime, deltaTime);

        if (this._individualBehaviour) this._individualBehaviour.onUpdate();
        while (i--) {
            layers[i - l].update(currTime, deltaTime);
        }
        this.game.repository.getArray('ParticleSystem').forEach(function (ps) {
            ps.update(currTime, deltaTime);
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
            if (this.game.renderer.debugTextField) this.game.renderer.debugTextField.update();
            this.game.renderer.restore();
        }
        renderer.flipFrameBuffer(this.filters);
    };

    Scene.prototype.fadeIn = function fadeIn(time, easeFnName) {
        return this.tween(this, { to: { alpha: 1 } }, time, easeFnName);
    };

    Scene.prototype.fadeOut = function fadeOut(time, easeFnName) {
        return this.tween(this, { to: { alpha: 0 } }, time, easeFnName);
    };

    Scene.prototype.tween = function tween(obj, fromToVal, tweenTime, easeFnName) {
        // let movie = new tweenMovieModule.TweenMovie();
        // let tween = new tweenModule.Tween(obj,fromToVal,tweenTime,easeFnName);
        // movie.tween(0,tween);
        // movie.play();
    };

    Scene.prototype.printText = function printText(x, y, text, font) {
        if (!text) return;
        if (!text.substring) text = JSON.stringify(text, null, 4);
        this.game.renderer.printText(x, y, text, font);
    };

    Scene.prototype.log = function log(text) {
        this.printText(0, 0, text);
    };

    return Scene;
}(_baseModel2.default);

exports.default = Scene;

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _baseModel = __webpack_require__(0);

var _baseModel2 = _interopRequireDefault(_baseModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Sound = function (_BaseModel) {
    _inherits(Sound, _BaseModel);

    function Sound(game) {
        _classCallCheck(this, Sound);

        var _this = _possibleConstructorReturn(this, _BaseModel.call(this, game));

        _this.type = 'Sound';
        _this.resourcePath = '';
        _this._gain = 1;
        _this._loop = false;
        return _this;
    }

    Sound.find = function find(name) {
        // let res = bundle.soundList.find({name:name});
        // //<code>{{#if opts.minify}}
        // if (!res) throw `can not found sound with name ${name}`;
        // // {{/if}}
        // return res;
    };

    Sound.prototype.play = function play() {
        //audioPlayer.play(this);
    };

    Sound.prototype.stop = function stop() {
        //audioPlayer.stop(this);
    };

    Sound.prototype.pause = function pause() {
        throw 'not implemented';
    };

    Sound.prototype.setGain = function setGain(val, time, easeFnName) {
        //audioPlayer.setGain(this,val,time,easeFnName);
    };

    return Sound;
}(_baseModel2.default);

exports.default = Sound;

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _baseModel = __webpack_require__(0);

var _baseModel2 = _interopRequireDefault(_baseModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SpriteSheet = function (_BaseModel) {
    _inherits(SpriteSheet, _BaseModel);

    function SpriteSheet(game) {
        _classCallCheck(this, SpriteSheet);

        var _this = _possibleConstructorReturn(this, _BaseModel.call(this, game));

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

    SpriteSheet.prototype.revalidate = function revalidate() {
        if (!(this.numOfFramesH && this.numOfFramesV)) return;
        this._frameWidth = ~~(this.width / this.numOfFramesH);
        this._frameHeight = ~~(this.height / this.numOfFramesV);
        this._numOfFrames = this.numOfFramesH * this.numOfFramesV;
    };

    SpriteSheet.prototype.getFramePosX = function getFramePosX(frameIndex) {
        return frameIndex % this.numOfFramesH * this._frameWidth;
    };

    SpriteSheet.prototype.getFramePosY = function getFramePosY(frameIndex) {
        return ~~(frameIndex / this.numOfFramesH) * this._frameHeight;
    };

    return SpriteSheet;
}(_baseModel2.default);

exports.default = SpriteSheet;

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _game = __webpack_require__(32);

var _game2 = _interopRequireDefault(_game);

var _gameProps = __webpack_require__(33);

var _gameProps2 = _interopRequireDefault(_gameProps);

var _repository = __webpack_require__(34);

var _repository2 = _interopRequireDefault(_repository);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (1 && _gameProps2.default.startSceneId === undefined) throw 'start scene not specified'; /*global DEBUG:true*/

var game = new _game2.default();
game.fromJSON(_gameProps2.default);
game.repository.setDescriptions(_repository2.default);

var startScene = game.repository.getObject(_gameProps2.default.startSceneId, 'Scene');
game.runScene(startScene);
if (true) window.game = game;

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var g;

// This works in non-strict mode
g = function () {
	return this;
}();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;

/***/ })
/******/ ]);