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
/******/ 	return __webpack_require__(__webpack_require__.s = 77);
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

var _commonObject = __webpack_require__(18);

var _commonObject2 = _interopRequireDefault(_commonObject);

var _tween = __webpack_require__(17);

var _tween2 = _interopRequireDefault(_tween);

var _eventEmitter = __webpack_require__(48);

var _eventEmitter2 = _interopRequireDefault(_eventEmitter);

var _decorators = __webpack_require__(15);

var _arcadeRigidBody = __webpack_require__(51);

var _arcadeRigidBody2 = _interopRequireDefault(_arcadeRigidBody);

var _rect = __webpack_require__(14);

var _rect2 = _interopRequireDefault(_rect);

var _point2d = __webpack_require__(6);

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
        _this.rigidBody = new _arcadeRigidBody2.default(_this);
        return _this;
    }

    BaseModel.prototype.revalidate = function revalidate() {};

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

var _class, _temp;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AbstractDrawer = (_temp = _class = function () {
    function AbstractDrawer(gl, game) {
        _classCallCheck(this, AbstractDrawer);

        this.program = null;
        this.uniformCache = {};
        this.posVertexBuffer = null;
        this.posIndexBuffer = null;
        this.texVertexBuffer = null;

        this.gl = gl;
        this.game = game;
    }

    AbstractDrawer.prototype.bind = function bind() {
        if (AbstractDrawer.currentDrawer !== null && AbstractDrawer.currentDrawer !== this) {
            AbstractDrawer.currentDrawer.unbind();
        }
        AbstractDrawer.currentDrawer = this;
    };

    AbstractDrawer.prototype.unbind = function unbind() {
        this.posVertexBuffer.unbind();
        if (this.posIndexBuffer) this.posIndexBuffer.unbind();
        if (this.texVertexBuffer) this.texVertexBuffer.unbind();
    };

    AbstractDrawer.prototype.setUniform = function setUniform(name, value) {
        if (this.uniformCache[name] === value) return;
        this.program.setUniform(name, value);
        this.uniformCache[name] = value;
    };

    return AbstractDrawer;
}(), _class.currentDrawer = null, _temp);
exports.default = AbstractDrawer;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _mat = __webpack_require__(7);

var _mat2 = _interopRequireDefault(_mat);

var _point2d = __webpack_require__(6);

var _point2d2 = _interopRequireDefault(_point2d);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*global DEBUG:true*/

exports.isPointInRect = function (point, rect, angle) {
    // if (angle) {
    //     let vec2 = new Vec2(point.x - rect.x - rect.width/2,point.y - rect.y - rect.height/2);
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
exports.unProject = function (winX, winY, width, height, viewProjectionMatrix) {
    var x = 2.0 * winX / width - 1;
    var y = 2.0 * winY / height - 1;
    var viewProjectionInverse = _mat2.default.inverse(viewProjectionMatrix);

    var point3D = [x, y, 0, 1];
    var res = _mat2.default.multMatrixVec(viewProjectionInverse, point3D);
    res[0] = (res[0] / 2 + 0.5) * width;
    res[1] = (res[1] / 2 + 0.5) * height;
    return new _point2d2.default(res[0], res[1]);
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
/* 3 */
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
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _class, _temp;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*global DEBUG:true*/

var compileShader = function compileShader(gl, shaderSource, shaderType) {
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
            throw 'Error compiling shader ' + shader + ':' + lastError;
        } else {
            throw lastError;
        }
    }

    return shader;
};

var createProgram = function createProgram(gl, shaders) {
    var program = gl.createProgram();
    shaders.forEach(function (shader) {
        gl.attachShader(program, shader);
    });
    gl.linkProgram(program);

    // Check the link status
    var linked = gl.getProgramParameter(program, gl.LINK_STATUS);
    if (!linked) {
        // something went wrong with the link
        var lastError = gl.getProgramInfoLog(program);
        gl.deleteProgram(program);
        if (true) {
            throw "Error in program linking:" + lastError;
        } else {
            throw lastError;
        }
    }
    return program;
};

var mapType = function mapType(gl, type) {

    var GL_TABLE = null;

    var GL_TO_GLSL_TYPES = {
        'FLOAT': 'float',
        'FLOAT_VEC2': 'vec2',
        'FLOAT_VEC3': 'vec3',
        'FLOAT_VEC4': 'vec4',

        'INT': 'int',
        'INT_VEC2': 'ivec2',
        'INT_VEC3': 'ivec3',
        'INT_VEC4': 'ivec4',

        'BOOL': 'bool',
        'BOOL_VEC2': 'bvec2',
        'BOOL_VEC3': 'bvec3',
        'BOOL_VEC4': 'bvec4',

        'FLOAT_MAT2': 'mat2',
        'FLOAT_MAT3': 'mat3',
        'FLOAT_MAT4': 'mat4',

        'SAMPLER_2D': 'sampler2D'
    };

    if (!GL_TABLE) {
        var typeNames = Object.keys(GL_TO_GLSL_TYPES);

        GL_TABLE = {};

        for (var i = 0; i < typeNames.length; ++i) {
            var tn = typeNames[i];
            GL_TABLE[gl[tn]] = GL_TO_GLSL_TYPES[tn];
        }
    }

    return GL_TABLE[type];
};

var extractUniforms = function extractUniforms(gl, program) {
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

var getUniformSetter = function getUniformSetter(size, type) {
    if (size === 1) {
        switch (type) {
            case 'float':
                return function (gl, location, value) {
                    gl.uniform1f(location, value);
                };
            case 'vec2':
                return function (gl, location, value) {
                    gl.uniform2f(location, value[0], value[1]);
                };
            case 'vec3':
                return function (gl, location, value) {
                    gl.uniform3f(location, value[0], value[1], value[2]);
                };
            case 'vec4':
                return function (gl, location, value) {
                    gl.uniform4f(location, value[0], value[1], value[2], value[3]);
                };
            case 'int':
                return function (gl, location, value) {
                    gl.uniform1i(location, value);
                };
            case 'ivec2':
                return function (gl, location, value) {
                    gl.uniform2i(location, value[0], value[1]);
                };
            case 'ivec3':
                return function (gl, location, value) {
                    gl.uniform3i(location, value[0], value[1], value[2]);
                };
            case 'ivec4':
                return function (gl, location, value) {
                    gl.uniform4i(location, value[0], value[1], value[2], value[3]);
                };
            case 'bool':
                return function (gl, location, value) {
                    gl.uniform1i(location, value);
                };
            case 'bvec2':
                return function (gl, location, value) {
                    gl.uniform2i(location, value[0], value[1]);
                };
            case 'bvec3':
                return function (gl, location, value) {
                    gl.uniform3i(location, value[0], value[1], value[2]);
                };
            case 'bvec4':
                return function (gl, location, value) {
                    gl.uniform4i(location, value[0], value[1], value[2], value[3]);
                };
            case 'mat2':
                return function (gl, location, value) {
                    gl.uniformMatrix2fv(location, false, value);
                };
            case 'mat3':
                return function (gl, location, value) {
                    gl.uniformMatrix3fv(location, false, value);
                };
            case 'mat4':
                return function (gl, location, value) {
                    gl.uniformMatrix4fv(location, false, value);
                };
            case 'sampler2D':
                return function (gl, location, value) {
                    gl.uniform1i(location, value);
                };
        }
    } else {
        switch (type) {
            case 'float':
                return function (gl, location, value) {
                    gl.uniform1fv(location, value);
                };
            case 'vec2':
                return function (gl, location, value) {
                    gl.uniform2fv(location, value);
                };
            case 'vec3':
                return function (gl, location, value) {
                    gl.uniform3fv(location, value);
                };
            case 'vec4':
                return function (gl, location, value) {
                    gl.uniform4fv(location, value);
                };
            case 'int':
                return function (gl, location, value) {
                    gl.uniform1iv(location, value);
                };
            case 'ivec2':
                return function (gl, location, value) {
                    gl.uniform2iv(location, value);
                };
            case 'ivec3':
                return function (gl, location, value) {
                    gl.uniform3iv(location, value);
                };
            case 'ivec4':
                return function (gl, location, value) {
                    gl.uniform4iv(location, value);
                };
            case 'bool':
                return function (gl, location, value) {
                    gl.uniform1iv(location, value);
                };
            case 'bvec2':
                return function (gl, location, value) {
                    gl.uniform2iv(location, value);
                };
            case 'bvec3':
                return function (gl, location, value) {
                    gl.uniform3iv(location, value);
                };
            case 'bvec4':
                return function (gl, location, value) {
                    gl.uniform4iv(location, value);
                };
            case 'sampler2D':
                return function (gl, location, value) {
                    gl.uniform1iv(location, value);
                };
        }
    }
};

var ShaderProgram = (_temp = _class = function () {
    function ShaderProgram(gl, sources) {
        _classCallCheck(this, ShaderProgram);

        this._attrLocationCache = {};

        var vShader = compileShader(gl, sources[0], gl.VERTEX_SHADER);
        var fShader = compileShader(gl, sources[1], gl.FRAGMENT_SHADER);
        this.program = createProgram(gl, [vShader, fShader]);
        this.uniforms = extractUniforms(gl, this.program);
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
        if (1 && !uniform) throw 'no uniform with name ' + name + ' found!';
        //if (uniformValuesCache[name]===value) return;
        //this.gl.enableVertexAttribArray(uniform.location);
        uniform.setter(this.gl, uniform.location, value);
        //uniformValuesCache[name] = value;
    };

    ShaderProgram.prototype.bindBuffer = function bindBuffer(buffer, attrLocationName) {
        // todo rename param to attrLocationName
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, buffer.getGlBuffer());
        var attrLocation = this._attrLocationCache[attrLocationName] || this.gl.getAttribLocation(this.program, attrLocationName);

        if (true) {
            if (!attrLocationName) throw "can not found uniform location: uniformLocationName not defined";
            if (attrLocation < 0) throw "can not found uniform location for " + attrLocationName;
        }

        this.gl.enableVertexAttribArray(attrLocation);
        this.gl.vertexAttribPointer(attrLocation, buffer.getItemSize(), buffer.getItemType(), // type of data
        false, // if the content is normalized vectors
        0, // number of bytes to skip in between elements
        0 // offsets to the first element
        );
        this._attrLocationCache[attrLocationName] = attrLocation;
    };

    return ShaderProgram;
}(), _class.currentProgram = null, _temp);
exports.default = ShaderProgram;

/***/ }),
/* 5 */
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
        this.bufferItemSize = null;
        this.bufferItemType = null;
        this.dataLength = null;
    }

    VertexBuffer.prototype.setData = function setData(bufferData, itemType, itemSize) {
        if (true) {
            if (!bufferData) throw 'can not set data to buffer: bufferData not specified';
            if (!itemType) throw 'can not set data to buffer: itemType not specified';
            if (!itemSize) throw 'can not set data to buffer: itemSize not specified';
        }
        var gl = this.gl;

        gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(bufferData), gl.STATIC_DRAW); // DYNAMIC
        gl.bindBuffer(gl.ARRAY_BUFFER, null);
        this.bufferItemSize = itemSize;
        this.bufferItemType = itemType; // BYTE, FLOAT, INT, UNSIGNED_SHORT ...
        this.dataLength = bufferData.length;
    };

    VertexBuffer.prototype.bind = function bind(program, attrName) {
        if (1 && !program) throw "can not bind VertexBuffer, program not specified";
        if (1 && !attrName) throw "can not bind VertexBuffer, attribute name not specified";
        program.bindBuffer(this, attrName);
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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Point2d = function () {
    function Point2d() {
        var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

        _classCallCheck(this, Point2d);

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
/* 7 */
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
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _abstractPrimitive = __webpack_require__(9);

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
/* 9 */
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
/* 10 */
/***/ (function(module, exports) {

module.exports = "//position and color\r\n\r\nattribute vec4 a_position;\r\nattribute vec4 a_color;\r\n\r\nuniform mat4 u_PositionMatrix;\r\n\r\nvarying vec4 v_color;\r\n\r\nvoid main() {\r\n   gl_Position = u_PositionMatrix * a_position;\r\n   v_color = a_color;\r\n}"

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = "precision mediump float; // lowp, mediump, highp\n\nuniform float u_alpha;\nuniform vec4 u_rgba;\n\nvoid main() {\n    gl_FragColor = u_rgba;\n}"

/***/ }),
/* 12 */
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
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _baseAbstractBehaviour = __webpack_require__(12);

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
/* 14 */
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
/* 15 */
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
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*global DEBUG:true*/

var isPowerOf2 = function isPowerOf2(value) {
    return (value & value - 1) == 0;
};

var Texture = function () {
    function Texture(gl) {
        _classCallCheck(this, Texture);

        if (1 && !gl) throw "can not create Texture, gl context not passed to constructor, expected: Texture(gl)";
        this.gl = gl;
        this.tex = null;
        this.size = null;
        this.isPowerOfTwo = false;

        this.tex = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D, this.tex);
        // Fill the texture with a 1x1 blue pixel.
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, new Uint8Array([0, 0, 255, 255]));
        gl.bindTexture(gl.TEXTURE_2D, this.tex);
    }

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
        } else {
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR); // NEAREST,LINEAR
        }
        gl.bindTexture(gl.TEXTURE_2D, null);
    };

    Texture.prototype.bind = function bind(i) {
        //gl.activeTexture(gl.TEXTURE0+i);
        this.gl.bindTexture(this.gl.TEXTURE_2D, this.tex);
        // gl.uniform1i(uName, i);
    };

    Texture.prototype.unbind = function unbind(i) {
        this.gl.bindTexture(this.gl.TEXTURE_2D, null);
    };

    Texture.prototype.getSize = function getSize() {
        return this.size;
    };

    Texture.prototype.getGlTexture = function getGlTexture() {
        return this.tex;
    };

    return Texture;
}();

exports.default = Texture;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _mathEx = __webpack_require__(2);

var _mathEx2 = _interopRequireDefault(_mathEx);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
            var valCurr = _mathEx2.default.ease[this.easeFnName](curTweenTime, valFrom, valTo - valFrom, this.tweenTime);
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
/* 18 */
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

    return CommonObject;
}();

exports.default = CommonObject;

/***/ }),
/* 19 */
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
        return _this;
    }

    GameObjectProto.prototype.revalidate = function revalidate() {
        var _this2 = this;

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
            this.commonBehaviour[i].onUpdate(time, delta); // todo "update"?
        }
        this.rigidBody.update(time, delta);
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
/* 20 */
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
/* 21 */
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
/* 22 */
/***/ (function(module, exports) {

module.exports = "//position, color and texture\n\nattribute vec4 a_position;\nattribute vec4 a_color;\nattribute vec2 a_texcoord;\n\nuniform mat4 u_PositionMatrix;\nuniform mat4 u_textureMatrix;\n\nvarying vec2 v_texcoord;\nvarying vec4 v_color;\n\nvoid main() {\n   gl_Position = u_PositionMatrix * a_position;\n   v_texcoord = (u_textureMatrix * vec4(a_texcoord, 0, 1)).xy;\n   v_color = a_color;\n}"

/***/ }),
/* 23 */,
/* 24 */,
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _dec, _class; /*global requestAnimationFrame:true*/
/*global window:true*/
/*global DEBUG:true*/
/*global IN_EDITOR:true*/
/*global PROJECT_NAME:true*/


__webpack_require__(50);

var _rendererFactory = __webpack_require__(54);

var _rendererFactory2 = _interopRequireDefault(_rendererFactory);

var _repository = __webpack_require__(66);

var _repository2 = _interopRequireDefault(_repository);

var _mouse = __webpack_require__(45);

var _mouse2 = _interopRequireDefault(_mouse);

var _keyboard = __webpack_require__(44);

var _keyboard2 = _interopRequireDefault(_keyboard);

var _gamePad = __webpack_require__(43);

var _gamePad2 = _interopRequireDefault(_gamePad);

var _collider = __webpack_require__(52);

var _collider2 = _interopRequireDefault(_collider);

var _decorators = __webpack_require__(15);

var _commonObject = __webpack_require__(18);

var _commonObject2 = _interopRequireDefault(_commonObject);

var _camera = __webpack_require__(42);

var _camera2 = _interopRequireDefault(_camera);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Game = (_dec = (0, _decorators.Transient)({
    repository: true,
    camera: true,
    keyboard: true,
    gamePad: true,
    mouse: true
}), _dec(_class = function (_CommonObject) {
    _inherits(Game, _CommonObject);

    function Game(gameProps) {
        _classCallCheck(this, Game);

        var _this = _possibleConstructorReturn(this, _CommonObject.call(this));

        _this._lastTime = null;
        _this._currTime = null;
        _this._currentScene = null;
        _this._running = false;
        _this.destroyed = false;
        _this.renderer = null;
        _this.scale = { x: 1, y: 1 };
        _this.pos = { x: 0, y: 0 };
        _this.gravityConstant = null;
        _this.fps = null;
        _this.gamePad = null;

        Object.keys(gameProps).forEach(function (key) {
            _this[key] = gameProps[key];
        });
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

    Game.prototype.getTime = function getTime() {
        return this._lastTime;
    };

    Game.prototype.getDeltaTime = function getDeltaTime() {
        return this._deltaTime;
    };

    Game.prototype.runScene = function runScene(scene) {
        var _this2 = this;

        if (!this.renderer) {
            // move to constructor?
            this.renderer = _rendererFactory2.default.getRenderer(this);
            this.mouse.listenTo(this.renderer.container);
        }
        this._currentScene = scene;
        if (true) {
            var allScripts = __webpack_require__(29);
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
                Game.update(_this2);
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

    Game.update = function update(game) {
        if (1 && game.destroyed) return;
        requestAnimationFrame(function () {
            Game.update(game);
        });
        game._lastTime = game._currTime;
        game._currTime = Date.now();
        game._deltaTime = game._currTime - game._lastTime;
        if (true) {
            game.fps = ~~(1000 / game._deltaTime);
            window.fps = game.fps;
            var renderError = game.renderer.getError();
            if (renderError) throw 'render error with code ' + renderError;
        }
        if (game._deltaTime > 20) game._deltaTime = 20;
        game._currentScene && game._currentScene.update(game._currTime, game._deltaTime);
        game.keyboard.update();
        game.gamePad.update();
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
/* 26 */
/***/ (function(module, exports) {

module.exports = {width:900,height:500,scaleStrategy:0,startSceneId:2,scale:{x:1,y:1},pos:{x:0,y:0},gravityConstant:800};

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = {Scene:[{"id":2,"name":"mainScene","width":5000,"height":800,"type":"Scene","layers":[{"type":"Layer","id":2}],"useBG":true,"colorBG":{"r":230,"g":254,"b":255},"tileMap":{"id":52,"type":"TileMap"}}],Layer:[{"id":2,"name":"layer1","type":"Layer","gameObjects":[{"type":"GameObject","id":7},{"type":"GameObject","id":63},{"type":"GameObject","id":64},{"type":"GameObject","id":65},{"type":"GameObject","id":67},{"type":"GameObject","id":68},{"type":"GameObject","id":71},{"type":"GameObject","id":74}]}],SpriteSheet:[{"name":"dude","width":288,"height":48,"type":"SpriteSheet","numOfFramesH":9,"resourcePath":"resources/dude.png","id":3},{"name":"platform","width":500,"height":64,"type":"SpriteSheet","resourcePath":"resources/platform.png","id":5},{"name":"ground","width":800,"height":32,"type":"SpriteSheet","numOfFramesH":25,"resourcePath":"resources/ground.png","id":57},{"name":"clamp","width":64,"height":64,"type":"SpriteSheet","resourcePath":"resources/clamp.png","id":69},{"name":"tile","width":262,"height":192,"type":"SpriteSheet","resourcePath":"resources/tile.jpg","id":72}],GameObjectProto:[{"id":4,"name":"dude","width":32,"height":48,"type":"GameObjectProto","spriteSheet":{"id":3,"type":"SpriteSheet"},"commonBehaviour":[{"type":"CommonBehaviour","id":15},{"type":"CommonBehaviour","id":60}],"frameAnimations":[{"type":"FrameAnimation","id":11},{"type":"FrameAnimation","id":12},{"type":"FrameAnimation","id":13},{"type":"FrameAnimation","id":14}]},{"id":6,"name":"platform","width":500,"height":64,"type":"GameObjectProto","spriteSheet":{"id":5,"type":"SpriteSheet"},"commonBehaviour":[{"type":"CommonBehaviour","id":61}]},{"id":58,"name":"ground1","width":32,"height":32,"type":"GameObjectProto","spriteSheet":{"id":57,"type":"SpriteSheet"},"commonBehaviour":[{"type":"CommonBehaviour","id":62}],"currFrameIndex":9},{"id":70,"name":"clamp","width":64,"height":64,"type":"GameObjectProto","spriteSheet":{"id":69,"type":"SpriteSheet"},"commonBehaviour":[{"type":"CommonBehaviour","id":75}]},{"name":"tile","width":262,"height":192,"type":"GameObjectProto","spriteSheet":{"id":72,"type":"SpriteSheet"},"id":73}],GameObject:[{"id":7,"name":"dude","pos":{"x":650,"y":52},"layerId":2,"type":"GameObject","gameObjectProto":{"id":4,"type":"GameObjectProto"}},{"id":63,"name":"ground1","pos":{"x":432,"y":156},"layerId":2,"type":"GameObject","gameObjectProto":{"id":58,"type":"GameObjectProto"}},{"id":64,"name":"platform","pos":{"x":471,"y":478},"layerId":2,"type":"GameObject","gameObjectProto":{"id":6,"type":"GameObjectProto"}},{"id":65,"name":"platform","pos":{"x":328,"y":199},"layerId":2,"type":"GameObject","gameObjectProto":{"id":6,"type":"GameObjectProto"}},{"id":67,"name":"ground1","pos":{"x":559,"y":116},"layerId":2,"type":"GameObject","gameObjectProto":{"id":58,"type":"GameObjectProto"}},{"pos":{"x":388,"y":140},"layerId":2,"type":"GameObject","gameObjectProto":{"id":58,"type":"GameObjectProto"},"id":68},{"id":71,"name":"clamp","pos":{"x":739,"y":325},"layerId":2,"type":"GameObject","gameObjectProto":{"id":70,"type":"GameObjectProto"}},{"id":74,"name":"tile","pos":{"x":369,"y":271},"layerId":2,"type":"GameObject","gameObjectProto":{"id":73,"type":"GameObjectProto"}}],FrameAnimation:[{"name":"left","type":"FrameAnimation","frames":[0,1,2,3],"id":11},{"name":"right","type":"FrameAnimation","frames":[5,6,7,8],"id":12},{"name":"idleLeft","type":"FrameAnimation","frames":[4],"id":13},{"name":"idleRight","type":"FrameAnimation","frames":[4],"id":14}],CommonBehaviour:[{"id":15,"name":"Control2Dir","type":"CommonBehaviour","parameters":{"velocity":"130","walkLeftAnimation":"left","walkRightAnimation":"right","idleLeftAnimation":"idleLeft","idleRightAnimation":"idleRight"}},{"name":"Draggable","type":"CommonBehaviour","id":60},{"name":"Draggable","type":"CommonBehaviour","id":61},{"name":"Draggable","type":"CommonBehaviour","id":62},{"name":"Draggable","type":"CommonBehaviour","id":75}],Font:[{"id":22,"name":"font1","type":"Font","resourcePath":"resources/font1.png","fontSize":21,"fontFamily":"monospace","fontContext":{"symbols":{"0":{"x":24,"y":36,"width":12,"height":24},"1":{"x":45,"y":36,"width":12,"height":24},"2":{"x":65,"y":36,"width":12,"height":24},"3":{"x":86,"y":36,"width":12,"height":24},"4":{"x":107,"y":36,"width":12,"height":24},"5":{"x":127,"y":36,"width":12,"height":24},"6":{"x":148,"y":36,"width":12,"height":24},"7":{"x":168,"y":36,"width":12,"height":24},"8":{"x":189,"y":36,"width":12,"height":24},"9":{"x":210,"y":36,"width":12,"height":24}," ":{"x":4,"y":4,"width":12,"height":24},"!":{"x":24,"y":4,"width":12,"height":24},"\"":{"x":45,"y":4,"width":12,"height":24},"#":{"x":65,"y":4,"width":12,"height":24},"$":{"x":86,"y":4,"width":12,"height":24},"%":{"x":107,"y":4,"width":12,"height":24},"&":{"x":127,"y":4,"width":12,"height":24},"'":{"x":148,"y":4,"width":12,"height":24},"(":{"x":168,"y":4,"width":12,"height":24},")":{"x":189,"y":4,"width":12,"height":24},"*":{"x":210,"y":4,"width":12,"height":24},"+":{"x":230,"y":4,"width":12,"height":24},",":{"x":251,"y":4,"width":12,"height":24},"-":{"x":271,"y":4,"width":12,"height":24},".":{"x":292,"y":4,"width":12,"height":24},"/":{"x":4,"y":36,"width":12,"height":24},":":{"x":230,"y":36,"width":12,"height":24},";":{"x":251,"y":36,"width":12,"height":24},"<":{"x":271,"y":36,"width":12,"height":24},"=":{"x":292,"y":36,"width":12,"height":24},">":{"x":4,"y":68,"width":12,"height":24},"?":{"x":24,"y":68,"width":12,"height":24},"@":{"x":45,"y":68,"width":12,"height":24},"A":{"x":65,"y":68,"width":12,"height":24},"B":{"x":86,"y":68,"width":12,"height":24},"C":{"x":107,"y":68,"width":12,"height":24},"D":{"x":127,"y":68,"width":12,"height":24},"E":{"x":148,"y":68,"width":12,"height":24},"F":{"x":168,"y":68,"width":12,"height":24},"G":{"x":189,"y":68,"width":12,"height":24},"H":{"x":210,"y":68,"width":12,"height":24},"I":{"x":230,"y":68,"width":12,"height":24},"J":{"x":251,"y":68,"width":12,"height":24},"K":{"x":271,"y":68,"width":12,"height":24},"L":{"x":292,"y":68,"width":12,"height":24},"M":{"x":4,"y":100,"width":12,"height":24},"N":{"x":24,"y":100,"width":12,"height":24},"O":{"x":45,"y":100,"width":12,"height":24},"P":{"x":65,"y":100,"width":12,"height":24},"Q":{"x":86,"y":100,"width":12,"height":24},"R":{"x":107,"y":100,"width":12,"height":24},"S":{"x":127,"y":100,"width":12,"height":24},"T":{"x":148,"y":100,"width":12,"height":24},"U":{"x":168,"y":100,"width":12,"height":24},"V":{"x":189,"y":100,"width":12,"height":24},"W":{"x":210,"y":100,"width":12,"height":24},"X":{"x":230,"y":100,"width":12,"height":24},"Y":{"x":251,"y":100,"width":12,"height":24},"Z":{"x":271,"y":100,"width":12,"height":24},"[":{"x":292,"y":100,"width":12,"height":24},"\\":{"x":4,"y":132,"width":12,"height":24},"]":{"x":24,"y":132,"width":12,"height":24},"^":{"x":45,"y":132,"width":12,"height":24},"_":{"x":65,"y":132,"width":12,"height":24},"`":{"x":86,"y":132,"width":12,"height":24},"a":{"x":107,"y":132,"width":12,"height":24},"b":{"x":127,"y":132,"width":12,"height":24},"c":{"x":148,"y":132,"width":12,"height":24},"d":{"x":168,"y":132,"width":12,"height":24},"e":{"x":189,"y":132,"width":12,"height":24},"f":{"x":210,"y":132,"width":12,"height":24},"g":{"x":230,"y":132,"width":12,"height":24},"h":{"x":251,"y":132,"width":12,"height":24},"i":{"x":271,"y":132,"width":12,"height":24},"j":{"x":292,"y":132,"width":12,"height":24},"k":{"x":4,"y":164,"width":12,"height":24},"l":{"x":24,"y":164,"width":12,"height":24},"m":{"x":45,"y":164,"width":12,"height":24},"n":{"x":65,"y":164,"width":12,"height":24},"o":{"x":86,"y":164,"width":12,"height":24},"p":{"x":107,"y":164,"width":12,"height":24},"q":{"x":127,"y":164,"width":12,"height":24},"r":{"x":148,"y":164,"width":12,"height":24},"s":{"x":168,"y":164,"width":12,"height":24},"t":{"x":189,"y":164,"width":12,"height":24},"u":{"x":210,"y":164,"width":12,"height":24},"v":{"x":230,"y":164,"width":12,"height":24},"w":{"x":251,"y":164,"width":12,"height":24},"x":{"x":271,"y":164,"width":12,"height":24},"y":{"x":292,"y":164,"width":12,"height":24},"z":{"x":4,"y":196,"width":12,"height":24},"{":{"x":24,"y":196,"width":12,"height":24},"|":{"x":45,"y":196,"width":12,"height":24},"}":{"x":65,"y":196,"width":12,"height":24},"~":{"x":86,"y":196,"width":12,"height":24},"":{"x":107,"y":196,"width":12,"height":24},"":{"x":127,"y":196,"width":12,"height":24},"":{"x":148,"y":196,"width":12,"height":24},"":{"x":168,"y":196,"width":12,"height":24},"":{"x":189,"y":196,"width":12,"height":24},"":{"x":210,"y":196,"width":12,"height":24},"":{"x":230,"y":196,"width":12,"height":24},"":{"x":251,"y":196,"width":12,"height":24},"":{"x":271,"y":196,"width":12,"height":24},"":{"x":292,"y":196,"width":12,"height":24},"":{"x":4,"y":228,"width":12,"height":24},"":{"x":24,"y":228,"width":12,"height":24},"":{"x":45,"y":228,"width":12,"height":24},"":{"x":65,"y":228,"width":12,"height":24},"":{"x":86,"y":228,"width":12,"height":24},"":{"x":107,"y":228,"width":12,"height":24},"":{"x":127,"y":228,"width":12,"height":24},"":{"x":148,"y":228,"width":12,"height":24},"":{"x":168,"y":228,"width":12,"height":24},"":{"x":189,"y":228,"width":12,"height":24},"":{"x":210,"y":228,"width":12,"height":24},"":{"x":230,"y":228,"width":12,"height":24},"":{"x":251,"y":228,"width":12,"height":24},"А":{"x":271,"y":228,"width":12,"height":24},"Б":{"x":292,"y":228,"width":12,"height":24},"В":{"x":4,"y":260,"width":12,"height":24},"Г":{"x":24,"y":260,"width":12,"height":24},"Д":{"x":45,"y":260,"width":12,"height":24},"Е":{"x":65,"y":260,"width":12,"height":24},"Ж":{"x":86,"y":260,"width":12,"height":24},"З":{"x":107,"y":260,"width":12,"height":24},"И":{"x":127,"y":260,"width":12,"height":24},"Й":{"x":148,"y":260,"width":12,"height":24},"К":{"x":168,"y":260,"width":12,"height":24},"Л":{"x":189,"y":260,"width":12,"height":24},"М":{"x":210,"y":260,"width":12,"height":24},"Н":{"x":230,"y":260,"width":12,"height":24},"О":{"x":251,"y":260,"width":12,"height":24},"П":{"x":271,"y":260,"width":12,"height":24},"Р":{"x":292,"y":260,"width":12,"height":24},"С":{"x":4,"y":292,"width":12,"height":24},"Т":{"x":24,"y":292,"width":12,"height":24},"У":{"x":45,"y":292,"width":12,"height":24},"Ф":{"x":65,"y":292,"width":12,"height":24},"Х":{"x":86,"y":292,"width":12,"height":24},"Ц":{"x":107,"y":292,"width":12,"height":24},"Ч":{"x":127,"y":292,"width":12,"height":24},"Ш":{"x":148,"y":292,"width":12,"height":24},"Щ":{"x":168,"y":292,"width":12,"height":24},"Ъ":{"x":189,"y":292,"width":12,"height":24},"Ы":{"x":210,"y":292,"width":12,"height":24},"Ь":{"x":230,"y":292,"width":12,"height":24},"Э":{"x":251,"y":292,"width":12,"height":24},"Ю":{"x":271,"y":292,"width":12,"height":24},"Я":{"x":292,"y":292,"width":12,"height":24},"а":{"x":4,"y":324,"width":12,"height":24},"б":{"x":24,"y":324,"width":12,"height":24},"в":{"x":45,"y":324,"width":12,"height":24},"г":{"x":65,"y":324,"width":12,"height":24},"д":{"x":86,"y":324,"width":12,"height":24},"е":{"x":107,"y":324,"width":12,"height":24},"ж":{"x":127,"y":324,"width":12,"height":24},"з":{"x":148,"y":324,"width":12,"height":24},"и":{"x":168,"y":324,"width":12,"height":24},"й":{"x":189,"y":324,"width":12,"height":24},"к":{"x":210,"y":324,"width":12,"height":24},"л":{"x":230,"y":324,"width":12,"height":24},"м":{"x":251,"y":324,"width":12,"height":24},"н":{"x":271,"y":324,"width":12,"height":24},"о":{"x":292,"y":324,"width":12,"height":24},"п":{"x":4,"y":356,"width":12,"height":24},"р":{"x":24,"y":356,"width":12,"height":24},"с":{"x":45,"y":356,"width":12,"height":24},"т":{"x":65,"y":356,"width":12,"height":24},"у":{"x":86,"y":356,"width":12,"height":24},"ф":{"x":107,"y":356,"width":12,"height":24},"х":{"x":127,"y":356,"width":12,"height":24},"ц":{"x":148,"y":356,"width":12,"height":24},"ч":{"x":168,"y":356,"width":12,"height":24},"ш":{"x":189,"y":356,"width":12,"height":24},"щ":{"x":210,"y":356,"width":12,"height":24},"ъ":{"x":230,"y":356,"width":12,"height":24},"ы":{"x":251,"y":356,"width":12,"height":24},"ь":{"x":271,"y":356,"width":12,"height":24},"э":{"x":292,"y":356,"width":12,"height":24},"ю":{"x":4,"y":388,"width":12,"height":24},"я":{"x":24,"y":388,"width":12,"height":24},"ѐ":{"x":45,"y":388,"width":12,"height":24},"ё":{"x":65,"y":388,"width":12,"height":24},"ђ":{"x":86,"y":388,"width":12,"height":24},"ѓ":{"x":107,"y":388,"width":12,"height":24},"є":{"x":127,"y":388,"width":12,"height":24},"ѕ":{"x":148,"y":388,"width":12,"height":24},"і":{"x":168,"y":388,"width":12,"height":24},"ї":{"x":189,"y":388,"width":12,"height":24},"ј":{"x":210,"y":388,"width":12,"height":24},"љ":{"x":230,"y":388,"width":12,"height":24},"њ":{"x":251,"y":388,"width":12,"height":24},"ћ":{"x":271,"y":388,"width":12,"height":24}},"width":320,"height":416}}],TileMap:[{"id":52,"width":50,"height":50,"type":"TileMap","spriteSheet":{"id":57,"type":"SpriteSheet"},"data":[[],null,null,[null,null,null,null,2,null,null],[null,null],[1,null,3,null,null,1,1,1,1,1,1,1,1,1],null,[null,1,null,1]]}]};

/***/ }),
/* 28 */,
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.TileBehaviour = exports.PlatformBehaviour = exports.MainSceneBehaviour = exports.Ground1Behaviour = exports.DudeBehaviour = exports.ClampBehaviour = undefined;

var _clamp = __webpack_require__(30);

var _dude = __webpack_require__(31);

var _ground = __webpack_require__(32);

var _mainScene = __webpack_require__(33);

var _platform = __webpack_require__(34);

var _tile = __webpack_require__(35);

exports.ClampBehaviour = _clamp.ClampBehaviour;
exports.DudeBehaviour = _dude.DudeBehaviour;
exports.Ground1Behaviour = _ground.Ground1Behaviour;
exports.MainSceneBehaviour = _mainScene.MainSceneBehaviour;
exports.PlatformBehaviour = _platform.PlatformBehaviour;
exports.TileBehaviour = _tile.TileBehaviour;

/***/ }),
/* 30 */
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
/* 31 */
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
/* 32 */
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
/* 33 */
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
    };

    MainSceneBehaviour.prototype.onUpdate = function onUpdate() {
        var _this2 = this;

        this.game.renderer.fillRect(this.x, this.y, 10, 10, this.color);

        this.points.forEach(function (p) {
            _this2.game.renderer.fillRect(p.x, p.y, 50, 50, _this2.color);
            //this.game.renderer.log(p.x);
            //this.game.renderer.drawLine(p.x,p.y,p.x+20,p.y+30,this.color);
        });
        //this.game.renderer.log(this.points.length);
        //this.game.renderer.log({a:2});
        var camera = this.game.camera;
        var camRect = this.game.camera.getRectScaled();
        // this.game.renderer.log(camRect);
        // this.game.renderer.log(this.game.mouse.currPoint);
        this.game.renderer.drawRect(camRect.x + 50, camRect.y + 50, camRect.width - 100, camRect.height - 100, [0, 1, 0, 1]);
        //this.game.renderer.log(this.game.mouse.lastPoint);
        this.game.renderer.drawTiledImage('resources/tile.jpg', 130, 0, 130, 61, camRect.x, camRect.y, 100, 100, this.offsetX, this.offsetX);
        this.offsetX += 0.1;
    };

    MainSceneBehaviour.prototype.onDestroy = function onDestroy() {};

    return MainSceneBehaviour;
}();

/***/ }),
/* 34 */
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
/* 35 */
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
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.Control2Dir = exports.Control4Dir = exports.Draggable = undefined;

var _draggable = __webpack_require__(39);

var _draggable2 = _interopRequireDefault(_draggable);

var _control4Dir = __webpack_require__(38);

var _control4Dir2 = _interopRequireDefault(_control4Dir);

var _control2Dir = __webpack_require__(37);

var _control2Dir2 = _interopRequireDefault(_control2Dir);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Draggable = _draggable2.default;
exports.Control4Dir = _control4Dir2.default;
exports.Control2Dir = _control2Dir2.default;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _move2Dir = __webpack_require__(40);

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
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _move4Dir = __webpack_require__(41);

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
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _baseAbstractBehaviour = __webpack_require__(12);

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
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _class, _temp;

var _moveable = __webpack_require__(13);

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
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _class, _temp;

var _moveable = __webpack_require__(13);

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
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _tween = __webpack_require__(17);

var _tween2 = _interopRequireDefault(_tween);

var _mat = __webpack_require__(7);

var _mat2 = _interopRequireDefault(_mat);

var _mathEx = __webpack_require__(2);

var _mathEx2 = _interopRequireDefault(_mathEx);

var _rect = __webpack_require__(14);

var _rect2 = _interopRequireDefault(_rect);

var _point2d = __webpack_require__(6);

var _point2d2 = _interopRequireDefault(_point2d);

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
        this.TOLERANCE_TIME = 2000;

        this.game = game;
    }

    Camera.prototype.followTo = function followTo(gameObject) {
        if (1 && !gameObject) throw 'Camera:followTo(gameObject) - gameObject not provided';
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
            time: this.TOLERANCE_TIME
        });
    };

    Camera.prototype.update = function update(currTime, delta) {
        var cameraRect = this.getRectScaled(); // todo cache this value
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
        if (this.TOLERANCE_TIME === 0) {
            this.pos.x = x;
            this.pos.y = y;
        } else if (currTime - this.lastToleranceTime > this.TOLERANCE_TIME) {
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
        this.game.renderer.translate(this.game.width / 2, this.game.height / 2);
        this.game.renderer.scale(this.scale.x, this.scale.y);
        // camera rotation will be here if needs
        this.game.renderer.translate(-this.game.width / 2, -this.game.height / 2);
        this.game.renderer.translate(-this.pos.x, -this.pos.y);
    };

    Camera.prototype.screenToWorld = function screenToWorld(screenX, screenY) {
        var mScale = _mat2.default.makeScale(this.scale.x, this.scale.y, 1);
        var point2d = _mathEx2.default.unProject(screenX, screenY, this.game.width, this.game.height, mScale);
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
/* 43 */
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
/* 44 */
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
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _mathEx = __webpack_require__(2);

var _mathEx2 = _interopRequireDefault(_mathEx);

var _point2d = __webpack_require__(6);

var _point2d2 = _interopRequireDefault(_point2d);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

        this.game = game;
    }

    //MouseEvent|TouchEvent|PointerEvent


    Mouse.prototype.resolvePoint = function resolvePoint(e) {
        var game = this.game;
        var camera = this.game.camera;

        var screenX = (e.clientX - game.pos.x) / game.scale.x;
        var screenY = (e.clientY - game.pos.y) / game.scale.y;

        var p = game.camera.screenToWorld(screenX, screenY);

        var mousePoint = new MousePoint();
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
                if (_mathEx2.default.isPointInRect(point, go.getRect())) {
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
/* 46 */
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
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _point2d = __webpack_require__(6);

var _point2d2 = _interopRequireDefault(_point2d);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Vec2 = function (_Point2d) {
    _inherits(Vec2, _Point2d);

    function Vec2(x, y) {
        _classCallCheck(this, Vec2);

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
/* 48 */
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
/* 49 */
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
/* 50 */
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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(78)))

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _vec = __webpack_require__(47);

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
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _mathEx = __webpack_require__(2);

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
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _textField = __webpack_require__(21);

var _textField2 = _interopRequireDefault(_textField);

var _device = __webpack_require__(46);

var _device2 = _interopRequireDefault(_device);

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
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _webGlRenderer = __webpack_require__(65);

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
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _texture = __webpack_require__(16);

var _texture2 = _interopRequireDefault(_texture);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /*global DEBUG:true*/

var FrameBuffer = function () {
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
        gl.bindRenderbuffer(gl.RENDERBUFFER, this.glRenderBuffer);
        gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_COMPONENT16, width, height);
        // Init Frame Buffer
        this.glFrameBuffer = gl.createFramebuffer();
        gl.bindFramebuffer(gl.FRAMEBUFFER, this.glFrameBuffer);
        gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, this.texture.getGlTexture(), 0);
        gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.RENDERBUFFER, this.glRenderBuffer);
        // Clean up
        this.texture.unbind();
        gl.bindRenderbuffer(gl.RENDERBUFFER, null);
        gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    };

    FrameBuffer.prototype.bind = function bind() {
        this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.glFrameBuffer);
        this.gl.viewport(0, 0, this.width, this.height);
    };

    FrameBuffer.prototype.unbind = function unbind() {
        this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null);
    };

    FrameBuffer.prototype.getTexture = function getTexture() {
        return this.texture;
    };

    return FrameBuffer;
}();

exports.default = FrameBuffer;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _mat = __webpack_require__(7);

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
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _abstractPrimitive = __webpack_require__(9);

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
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _abstractPrimitive = __webpack_require__(9);

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
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _circle = __webpack_require__(57);

var _circle2 = _interopRequireDefault(_circle);

var _plane = __webpack_require__(8);

var _plane2 = _interopRequireDefault(_plane);

var _shaderProgram = __webpack_require__(4);

var _shaderProgram2 = _interopRequireDefault(_shaderProgram);

var _vertexBuffer = __webpack_require__(5);

var _vertexBuffer2 = _interopRequireDefault(_vertexBuffer);

var _indexBuffer = __webpack_require__(3);

var _indexBuffer2 = _interopRequireDefault(_indexBuffer);

var _vertex = __webpack_require__(10);

var _vertex2 = _interopRequireDefault(_vertex);

var _fragment = __webpack_require__(11);

var _fragment2 = _interopRequireDefault(_fragment);

var _abstractDrawer = __webpack_require__(1);

var _abstractDrawer2 = _interopRequireDefault(_abstractDrawer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CircleDrawer = function (_AbstractDrawer) {
    _inherits(CircleDrawer, _AbstractDrawer);

    function CircleDrawer(gl, game) {
        _classCallCheck(this, CircleDrawer);

        var _this = _possibleConstructorReturn(this, _AbstractDrawer.call(this, gl, game));

        _this.program = new _shaderProgram2.default(gl, [_vertex2.default, _fragment2.default]);
        _this.circle = new _circle2.default();

        _this.posVertexBuffer = new _vertexBuffer2.default(gl);

        _this.posVertexBuffer.setData(_this.circle.vertexArr, _this.gl.FLOAT, 2);
        return _this;
    }

    CircleDrawer.prototype.bind = function bind() {
        _AbstractDrawer.prototype.bind.call(this);
        this.program.bind();
        this.posVertexBuffer.bind(this.program, 'a_position');
    };

    CircleDrawer.prototype.draw = function draw() {
        this.gl.drawArrays(this.gl.TRIANGLE_FAN, 0, // gl.STREAM_DRAW
        this.posVertexBuffer.getBufferLength() / 2);
    };

    return CircleDrawer;
}(_abstractDrawer2.default);

exports.default = CircleDrawer;

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _plane = __webpack_require__(8);

var _plane2 = _interopRequireDefault(_plane);

var _shaderProgram = __webpack_require__(4);

var _shaderProgram2 = _interopRequireDefault(_shaderProgram);

var _vertexBuffer = __webpack_require__(5);

var _vertexBuffer2 = _interopRequireDefault(_vertexBuffer);

var _indexBuffer = __webpack_require__(3);

var _indexBuffer2 = _interopRequireDefault(_indexBuffer);

var _vertex = __webpack_require__(10);

var _vertex2 = _interopRequireDefault(_vertex);

var _fragment = __webpack_require__(11);

var _fragment2 = _interopRequireDefault(_fragment);

var _abstractDrawer = __webpack_require__(1);

var _abstractDrawer2 = _interopRequireDefault(_abstractDrawer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ColorRectDrawer = function (_AbstractDrawer) {
    _inherits(ColorRectDrawer, _AbstractDrawer);

    function ColorRectDrawer(gl, game) {
        _classCallCheck(this, ColorRectDrawer);

        var _this = _possibleConstructorReturn(this, _AbstractDrawer.call(this, gl, game));

        _this.plane = new _plane2.default();
        _this.program = new _shaderProgram2.default(gl, [_vertex2.default, _fragment2.default]);

        _this.posVertexBuffer = new _vertexBuffer2.default(gl);
        _this.posIndexBuffer = new _indexBuffer2.default(gl);

        _this.posVertexBuffer.setData(_this.plane.vertexArr, _this.gl.FLOAT, 2);
        _this.posIndexBuffer.setData(_this.plane.indexArr);
        return _this;
    }

    ColorRectDrawer.prototype.bind = function bind() {
        _AbstractDrawer.prototype.bind.call(this);
        this.program.bind();

        this.posVertexBuffer.bind(this.program, 'a_position');

        this.posIndexBuffer.bind();
    };

    ColorRectDrawer.prototype.draw = function draw() {
        this.gl.drawElements(this.gl.TRIANGLE_STRIP, this.posIndexBuffer.getBufferLength(), this.gl.UNSIGNED_SHORT, 0);
    };

    return ColorRectDrawer;
}(_abstractDrawer2.default);

exports.default = ColorRectDrawer;

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _line = __webpack_require__(58);

var _line2 = _interopRequireDefault(_line);

var _shaderProgram = __webpack_require__(4);

var _shaderProgram2 = _interopRequireDefault(_shaderProgram);

var _vertexBuffer = __webpack_require__(5);

var _vertexBuffer2 = _interopRequireDefault(_vertexBuffer);

var _indexBuffer = __webpack_require__(3);

var _indexBuffer2 = _interopRequireDefault(_indexBuffer);

var _vertex = __webpack_require__(10);

var _vertex2 = _interopRequireDefault(_vertex);

var _fragment = __webpack_require__(11);

var _fragment2 = _interopRequireDefault(_fragment);

var _abstractDrawer = __webpack_require__(1);

var _abstractDrawer2 = _interopRequireDefault(_abstractDrawer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LineDrawer = function (_AbstractDrawer) {
    _inherits(LineDrawer, _AbstractDrawer);

    function LineDrawer(gl, game) {
        _classCallCheck(this, LineDrawer);

        var _this = _possibleConstructorReturn(this, _AbstractDrawer.call(this, gl, game));

        _this.program = new _shaderProgram2.default(gl, [_vertex2.default, _fragment2.default]);
        _this.line = new _line2.default();

        _this.posVertexBuffer = new _vertexBuffer2.default(gl);
        _this.posIndexBuffer = new _indexBuffer2.default(gl);

        _this.posVertexBuffer.setData(_this.line.vertexArr, _this.gl.FLOAT, 2);
        return _this;
    }

    LineDrawer.prototype.bind = function bind() {
        _AbstractDrawer.prototype.bind.call(this);
        this.program.bind();

        this.posVertexBuffer.bind(this.program, 'a_position');
    };

    LineDrawer.prototype.draw = function draw() {
        this.gl.drawArrays(this.gl.LINE_STRIP, 0, this.posVertexBuffer.getBufferLength() / 2);
    };

    return LineDrawer;
}(_abstractDrawer2.default);

exports.default = LineDrawer;

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _shaderProgram = __webpack_require__(4);

var _shaderProgram2 = _interopRequireDefault(_shaderProgram);

var _vertexBuffer = __webpack_require__(5);

var _vertexBuffer2 = _interopRequireDefault(_vertexBuffer);

var _indexBuffer = __webpack_require__(3);

var _indexBuffer2 = _interopRequireDefault(_indexBuffer);

var _vertex = __webpack_require__(79);

var _vertex2 = _interopRequireDefault(_vertex);

var _fragment = __webpack_require__(81);

var _fragment2 = _interopRequireDefault(_fragment);

var _abstractDrawer = __webpack_require__(1);

var _abstractDrawer2 = _interopRequireDefault(_abstractDrawer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ModelDrawer = function (_AbstractDrawer) {
    _inherits(ModelDrawer, _AbstractDrawer);

    function ModelDrawer(gl, game) {
        _classCallCheck(this, ModelDrawer);

        var _this = _possibleConstructorReturn(this, _AbstractDrawer.call(this, gl, game));

        _this.program = new _shaderProgram2.default(gl, [_vertex2.default, _fragment2.default]);

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
        program.bindBuffer(this.texVertexBuffer, 'a_texcoord');

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
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _plane = __webpack_require__(8);

var _plane2 = _interopRequireDefault(_plane);

var _shaderProgram = __webpack_require__(4);

var _shaderProgram2 = _interopRequireDefault(_shaderProgram);

var _vertexBuffer = __webpack_require__(5);

var _vertexBuffer2 = _interopRequireDefault(_vertexBuffer);

var _indexBuffer = __webpack_require__(3);

var _indexBuffer2 = _interopRequireDefault(_indexBuffer);

var _vertex = __webpack_require__(22);

var _vertex2 = _interopRequireDefault(_vertex);

var _fragment = __webpack_require__(80);

var _fragment2 = _interopRequireDefault(_fragment);

var _abstractDrawer = __webpack_require__(1);

var _abstractDrawer2 = _interopRequireDefault(_abstractDrawer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SpriteRectDrawer = function (_AbstractDrawer) {
    _inherits(SpriteRectDrawer, _AbstractDrawer);

    function SpriteRectDrawer(gl, game) {
        _classCallCheck(this, SpriteRectDrawer);

        var _this = _possibleConstructorReturn(this, _AbstractDrawer.call(this, gl, game));

        _this.plane = new _plane2.default();
        _this.program = new _shaderProgram2.default(gl, [_vertex2.default, _fragment2.default]);

        _this.posVertexBuffer = new _vertexBuffer2.default(gl);
        _this.posIndexBuffer = new _indexBuffer2.default(gl);
        _this.texVertexBuffer = new _vertexBuffer2.default(gl);

        _this.posIndexBuffer.setData(_this.plane.indexArr);
        _this.posVertexBuffer.setData(_this.plane.vertexArr, gl.FLOAT, 2);
        _this.texVertexBuffer.setData(_this.plane.texCoordArr, gl.FLOAT, 2);

        return _this;
    }

    SpriteRectDrawer.prototype.bind = function bind() {
        _AbstractDrawer.prototype.bind.call(this);
        this.program.bind();

        this.posIndexBuffer.bind();

        this.posVertexBuffer.bind(this.program, 'a_position');

        this.texVertexBuffer.bind(this.program, 'a_texcoord');
    };

    SpriteRectDrawer.prototype.draw = function draw() {
        this.gl.drawElements(this.gl.TRIANGLE_STRIP, this.posIndexBuffer.getBufferLength(), this.gl.UNSIGNED_SHORT, 0);
    };

    return SpriteRectDrawer;
}(_abstractDrawer2.default);

exports.default = SpriteRectDrawer;

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _plane = __webpack_require__(8);

var _plane2 = _interopRequireDefault(_plane);

var _shaderProgram = __webpack_require__(4);

var _shaderProgram2 = _interopRequireDefault(_shaderProgram);

var _vertexBuffer = __webpack_require__(5);

var _vertexBuffer2 = _interopRequireDefault(_vertexBuffer);

var _indexBuffer = __webpack_require__(3);

var _indexBuffer2 = _interopRequireDefault(_indexBuffer);

var _vertex = __webpack_require__(22);

var _vertex2 = _interopRequireDefault(_vertex);

var _fragment = __webpack_require__(82);

var _fragment2 = _interopRequireDefault(_fragment);

var _abstractDrawer = __webpack_require__(1);

var _abstractDrawer2 = _interopRequireDefault(_abstractDrawer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TiledSpriteRectDrawer = function (_AbstractDrawer) {
    _inherits(TiledSpriteRectDrawer, _AbstractDrawer);

    function TiledSpriteRectDrawer(gl, game) {
        _classCallCheck(this, TiledSpriteRectDrawer);

        var _this = _possibleConstructorReturn(this, _AbstractDrawer.call(this, gl, game));

        _this.plane = new _plane2.default();
        _this.program = new _shaderProgram2.default(gl, [_vertex2.default, _fragment2.default]);

        _this.posVertexBuffer = new _vertexBuffer2.default(gl);
        _this.posIndexBuffer = new _indexBuffer2.default(gl);
        _this.texVertexBuffer = new _vertexBuffer2.default(gl);

        _this.posIndexBuffer.setData(_this.plane.indexArr);
        _this.posVertexBuffer.setData(_this.plane.vertexArr, gl.FLOAT, 2);
        _this.texVertexBuffer.setData(_this.plane.texCoordArr, gl.FLOAT, 2);

        return _this;
    }

    TiledSpriteRectDrawer.prototype.bind = function bind() {
        _AbstractDrawer.prototype.bind.call(this);
        this.program.bind();
        this.posIndexBuffer.bind();
        this.posVertexBuffer.bind(this.program, 'a_position');
        this.texVertexBuffer.bind(this.program, 'a_texcoord');
    };

    TiledSpriteRectDrawer.prototype.draw = function draw() {
        this.gl.drawElements(this.gl.TRIANGLE_STRIP, this.posIndexBuffer.getBufferLength(), this.gl.UNSIGNED_SHORT, 0);
    };

    return TiledSpriteRectDrawer;
}(_abstractDrawer2.default);

exports.default = TiledSpriteRectDrawer;

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _abstractRenderer = __webpack_require__(53);

var _abstractRenderer2 = _interopRequireDefault(_abstractRenderer);

var _spriteRectDrawer = __webpack_require__(63);

var _spriteRectDrawer2 = _interopRequireDefault(_spriteRectDrawer);

var _tiledSpriteRectDrawer = __webpack_require__(64);

var _tiledSpriteRectDrawer2 = _interopRequireDefault(_tiledSpriteRectDrawer);

var _colorRectDrawer = __webpack_require__(60);

var _colorRectDrawer2 = _interopRequireDefault(_colorRectDrawer);

var _abstractDrawer = __webpack_require__(1);

var _abstractDrawer2 = _interopRequireDefault(_abstractDrawer);

var _lineDrawer = __webpack_require__(61);

var _lineDrawer2 = _interopRequireDefault(_lineDrawer);

var _circleDrawer = __webpack_require__(59);

var _circleDrawer2 = _interopRequireDefault(_circleDrawer);

var _modelDrawer = __webpack_require__(62);

var _modelDrawer2 = _interopRequireDefault(_modelDrawer);

var _frameBuffer = __webpack_require__(55);

var _frameBuffer2 = _interopRequireDefault(_frameBuffer);

var _matrixStack = __webpack_require__(56);

var _matrixStack2 = _interopRequireDefault(_matrixStack);

var _mat = __webpack_require__(7);

var _mat2 = _interopRequireDefault(_mat);

var _mathEx = __webpack_require__(2);

var _mathEx2 = _interopRequireDefault(_mathEx);

var _texture = __webpack_require__(16);

var _texture2 = _interopRequireDefault(_texture);

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
        _this.currTex = null;
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
        this.modelDrawer = new _modelDrawer2.default(gl);

        this.frameBuffer = new _frameBuffer2.default(gl, this.game.width, this.game.height);

        gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
        gl.enable(gl.BLEND);
    };

    WebGlRenderer.prototype.draw = function draw(renderable) {

        if (stop) return;

        if (!_mathEx2.default.overlapTest(this.game.camera.getRectScaled(), renderable.getRect())) return;
        this.save();
        // todo check if angle neq 0
        var halfV = renderable.width / 2;
        var halfH = renderable.height / 2;
        this.translate(renderable.pos.x + halfV, renderable.pos.y + halfH);
        this.scale(renderable.scale.x, renderable.scale.y);
        this.rotateZ(renderable.angle);
        //ctx.rotateY(a);
        this.translate(-halfV, -halfH);

        this.drawImage(renderable.spriteSheet.resourcePath, renderable._sprPosX, renderable._sprPosY, renderable.width, renderable.height, 0, 0, renderable.width, renderable.height);
        this.restore();
    };

    WebGlRenderer.prototype.drawImage = function drawImage(texturePath, srcX, srcY, srcWidth, srcHeight, dstX, dstY) {

        if (stop) return;
        //if (!matEx.overlapTest(this.game.camera.getRect(),{x,y,width,height})) return; todo

        this.gl.blendFunc(this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA);
        //gl.blendColor(0, 0.5, 1, 1);

        var texture = this.renderableCache[texturePath];
        if (1 && !texture) {
            if (!texturePath) throw 'no texture path provided';else throw 'can not find texture with path ' + texturePath;
        }
        var texWidth = texture.getSize().width;
        var texHeight = texture.getSize().height;

        // if (dstX === undefined) {
        //     dstX = srcX;
        // }
        // if (dstY === undefined) {
        //     dstY = srcY;
        // }
        // if (srcWidth === undefined) {
        //     srcWidth = texWidth;
        // }
        // if (srcHeight === undefined) {
        //     srcHeight = texHeight;
        // }

        if (this.currTex !== texture) {
            texture.bind();
            this.currTex = texture;
        }

        this.spriteRectDrawer.bind();
        this.spriteRectDrawer.setUniform("u_textureMatrix", makeTextureMatrix(srcX, srcY, srcWidth, srcHeight, texWidth, texHeight));
        this.spriteRectDrawer.setUniform("u_PositionMatrix", makePositionMatrix(dstX, dstY, srcWidth, srcHeight, this.game.width, this.game.height));
        this.spriteRectDrawer.setUniform('u_alpha', 1); // alpha
        this.spriteRectDrawer.draw();
    };

    WebGlRenderer.prototype.drawTiledImage = function drawTiledImage(texturePath, srcX, srcY, srcWidth, srcHeight, dstX, dstY, dstWidth, dstHeight, offsetX, offsetY) {

        this.gl.blendFunc(this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA);
        //gl.blendColor(0, 0.5, 1, 1);

        var texture = this.renderableCache[texturePath];
        if (1 && !texture) {
            if (!texturePath) throw 'no texture path provided';else throw 'can not find texture with path ' + texturePath;
        }
        var texWidth = texture.getSize().width;
        var texHeight = texture.getSize().height;

        if (this.currTex !== texture) {
            texture.bind();
            this.currTex = texture;
        }

        this.tiledSpriteRectDrawer.bind();
        this.tiledSpriteRectDrawer.setUniform("u_textureMatrix", makeTextureMatrix(0, 0, dstWidth, dstHeight, texWidth, texHeight));
        this.tiledSpriteRectDrawer.setUniform("u_PositionMatrix", makePositionMatrix(dstX, dstY, dstWidth, dstHeight, this.game.width, this.game.height));
        this.tiledSpriteRectDrawer.setUniform('u_frameCoords', [srcX / texWidth, srcY / texHeight, srcWidth / texWidth, srcHeight / texHeight]);
        this.tiledSpriteRectDrawer.setUniform('u_offsetCoords', [offsetX / srcWidth, offsetY / srcHeight]);
        this.tiledSpriteRectDrawer.setUniform('u_alpha', 1); // alpha
        this.tiledSpriteRectDrawer.draw();
    };

    WebGlRenderer.prototype.fillRect = function fillRect(x, y, width, height, color) {
        if (stop) return;
        if (!_mathEx2.default.overlapTest(this.game.camera.getRectScaled(), { x: x, y: y, width: width, height: height })) return;
        var colorRectDrawer = this.colorRectDrawer;
        var gl = this.gl;
        colorRectDrawer.bind();
        colorRectDrawer.setUniform("u_PositionMatrix", makePositionMatrix(x, y, width, height, this.game.width, this.game.height));
        colorRectDrawer.setUniform("u_rgba", color);
        gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
        colorRectDrawer.draw();
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
        if (!_mathEx2.default.overlapTest(this.game.camera.getRectScaled(), { x: x1, y: y1, width: dx, height: dy })) return;
        var gl = this.gl;
        var lineDrawer = this.lineDrawer;
        lineDrawer.bind();
        lineDrawer.setUniform("u_PositionMatrix", makePositionMatrix(x1, y1, dx, dy, this.game.width, this.game.height));
        lineDrawer.setUniform("u_rgba", color);
        gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
        lineDrawer.draw();
    };

    WebGlRenderer.prototype.fillCircle = function fillCircle(x, y, r, color) {
        var r2 = r * 2;
        if (!_mathEx2.default.overlapTest(this.game.camera.getRectScaled(), { x: x - r, y: y - r, width: r2, height: r2 })) return;
        var circleDrawer = this.circleDrawer;
        var gl = this.gl;
        circleDrawer.bind();
        circleDrawer.setUniform("u_PositionMatrix", makePositionMatrix(x - r, y - r, r2, r2, this.game.width, this.game.height));
        circleDrawer.setUniform("u_rgba", color);
        gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
        circleDrawer.draw();
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

    WebGlRenderer.prototype.flipFrameBuffer = function flipFrameBuffer() {

        var fullScreen = this.fullScreenSize;
        this.currTex = null;
        this.restore();
        this.save();
        this.translate(0, fullScreen.h);
        this.scale(1, -1);
        this.frameBuffer.unbind();

        this.gl.viewport(0, 0, fullScreen.w, fullScreen.h); // gameProps.canvasWidth,gameProps.canvasHeight

        this.spriteRectDrawer.bind();
        this.frameBuffer.getTexture().bind();

        this.spriteRectDrawer.setUniform('u_PositionMatrix', makePositionMatrix(0, 0, this.game.width * fullScreen.scaleFactor, this.game.height * fullScreen.scaleFactor, fullScreen.w, fullScreen.h));

        this.spriteRectDrawer.setUniform('u_textureMatrix', makeTextureMatrix(0, 0, fullScreen.w, fullScreen.h, // gameProps.canvasWidth,gameProps.canvasHeight,
        fullScreen.w, fullScreen.h // gameProps.canvasWidth,gameProps.canvasHeight
        ));
        this.spriteRectDrawer.setUniform('u_alpha', 1);

        this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA);
        this.spriteRectDrawer.draw();
        this.restore();
    };

    WebGlRenderer.prototype.getError = function getError() {
        if (false) return 0;
        var err = this.gl.getError();
        err = err === this.gl.NO_ERROR ? 0 : err;
        if (err) {
            console.log(_abstractDrawer2.default.currentDrawer);
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
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _all = __webpack_require__(67);

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
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.TileMap = exports.TextField = exports.Layer = exports.Font = exports.Sound = exports.Scene = exports.ParticleSystem = exports.CommonBehaviour = exports.GameObject = exports.GameObjectProto = exports.SpriteSheet = exports.FrameAnimation = undefined;

var _frameAnimation = __webpack_require__(70);

var _frameAnimation2 = _interopRequireDefault(_frameAnimation);

var _spriteSheet = __webpack_require__(76);

var _spriteSheet2 = _interopRequireDefault(_spriteSheet);

var _gameObjectProto = __webpack_require__(19);

var _gameObjectProto2 = _interopRequireDefault(_gameObjectProto);

var _gameObject = __webpack_require__(71);

var _gameObject2 = _interopRequireDefault(_gameObject);

var _commonBehaviour = __webpack_require__(68);

var _commonBehaviour2 = _interopRequireDefault(_commonBehaviour);

var _particleSystem = __webpack_require__(73);

var _particleSystem2 = _interopRequireDefault(_particleSystem);

var _scene = __webpack_require__(74);

var _scene2 = _interopRequireDefault(_scene);

var _sound = __webpack_require__(75);

var _sound2 = _interopRequireDefault(_sound);

var _font = __webpack_require__(69);

var _font2 = _interopRequireDefault(_font);

var _layer = __webpack_require__(72);

var _layer2 = _interopRequireDefault(_layer);

var _textField = __webpack_require__(21);

var _textField2 = _interopRequireDefault(_textField);

var _tileMap = __webpack_require__(20);

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
/* 68 */
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
/* 69 */
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
/* 70 */
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
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _gameObjectProto = __webpack_require__(19);

var _gameObjectProto2 = _interopRequireDefault(_gameObjectProto);

var _all = __webpack_require__(36);

var commonBehaviours = _interopRequireWildcard(_all);

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
/* 72 */
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
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _baseModel = __webpack_require__(0);

var _baseModel2 = _interopRequireDefault(_baseModel);

var _mathEx = __webpack_require__(2);

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
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _baseModel = __webpack_require__(0);

var _baseModel2 = _interopRequireDefault(_baseModel);

var _loadingQueue = __webpack_require__(49);

var _loadingQueue2 = _interopRequireDefault(_loadingQueue);

var _tileMap = __webpack_require__(20);

var _tileMap2 = _interopRequireDefault(_tileMap);

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
        renderer.flipFrameBuffer();
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
        // todo
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
/* 75 */
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
/* 76 */
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
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _game = __webpack_require__(25);

var _game2 = _interopRequireDefault(_game);

var _gameProps = __webpack_require__(26);

var _gameProps2 = _interopRequireDefault(_gameProps);

var _repository = __webpack_require__(27);

var _repository2 = _interopRequireDefault(_repository);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (1 && _gameProps2.default.startSceneId === undefined) throw 'start scene not specified'; /*global DEBUG:true*/

var game = new _game2.default(_gameProps2.default);
game.repository.setDescriptions(_repository2.default);

var startScene = game.repository.getObject(_gameProps2.default.startSceneId, 'Scene');
game.runScene(startScene);
if (true) window.game = game;

/***/ }),
/* 78 */
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

/***/ }),
/* 79 */
/***/ (function(module, exports) {

module.exports = "//position, texture and normal\n\nattribute vec4 a_position;\nattribute vec2 a_texcoord;\nattribute vec3 a_normal;\n\nuniform mat4 u_modelMatrix;\nuniform mat4 u_projectionMatrix;\n\nvarying vec2 v_texcoord;\nvarying vec3 v_normal;\n\nvoid main() {\n\n  gl_Position = u_projectionMatrix * u_modelMatrix * a_position;\n  v_texcoord = a_texcoord;\n  v_normal = a_normal;\n}"

/***/ }),
/* 80 */
/***/ (function(module, exports) {

module.exports = "// texture and color\n\nprecision mediump float;\n\nvarying vec2 v_texcoord;\n\nuniform sampler2D texture;\nuniform float u_alpha;\n\n\nvoid main() {\n    gl_FragColor = texture2D(texture, v_texcoord);\n    gl_FragColor.a *= u_alpha;\n}"

/***/ }),
/* 81 */
/***/ (function(module, exports) {

module.exports = "// texture color and normal\n\nprecision highp float;\n\nvarying vec2 v_texcoord;\nvarying vec3 v_normal;\n\nuniform sampler2D texture;\nuniform float u_alpha;\nuniform mat4 u_modelMatrix;\n\n\nvoid main() {\n\n    vec3 lightDirection = normalize(vec3(-1,-1,1));\n    vec3 normalized = normalize((u_modelMatrix * vec4(v_normal,0)).xyz);\n    float lightFactor = max(0.5,dot(lightDirection,normalized));\n    gl_FragColor = texture2D(texture, v_texcoord);\n    gl_FragColor.rgb *= lightFactor;\n    gl_FragColor.a *= u_alpha;\n}"

/***/ }),
/* 82 */
/***/ (function(module, exports) {

module.exports = "// texture and color\r\n\r\nprecision mediump float;\r\n\r\nvarying vec2 v_texcoord;\r\n\r\nuniform sampler2D texture;\r\nuniform float u_alpha;\r\nuniform vec2 u_offsetCoords;\r\nuniform vec4 u_frameCoords;\r\n\r\nvoid main() {\r\n    vec2 localTextCoord = mod(\r\n        v_texcoord + fract(u_offsetCoords),\r\n        u_frameCoords.zw\r\n    ) + u_frameCoords.xy;\r\n    gl_FragColor = texture2D(texture, localTextCoord);\r\n    gl_FragColor.a *= u_alpha;\r\n\r\n}"

/***/ })
/******/ ]);