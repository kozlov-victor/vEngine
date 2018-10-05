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
/******/ 	return __webpack_require__(__webpack_require__.s = 52);
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
var DebugError = function (_super) {
    __extends(DebugError, _super);
    function DebugError(message) {
        var _this = _super.call(this, message) || this;
        if (Error.captureStackTrace) {
            Error.captureStackTrace(_this, _this.constructor);
        } else {
            _this.stack = new Error().stack;
        }
        _this.name = 'DebugError';
        _this.errorMessage = message;
        return _this;
    }
    DebugError.prototype.toString = function () {
        return this.errorMessage;
    };
    return DebugError;
}(Error);
exports.DebugError = DebugError;

/***/ }),
/* 1 */
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
var objectPool_1 = __webpack_require__(10);
var observableEntity_1 = __webpack_require__(31);
var Rect = function (_super) {
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
    Rect.prototype.asArray = function () {
        return [this.x, this.y, this.width, this.height];
    };
    Rect.prototype.clone = function () {
        return new Rect(this.x, this.y, this.width, this.height);
    };
    Rect.prototype.toJSON = function () {
        return { x: this.x, y: this.y, width: this.width, height: this.height };
    };
    Rect.prototype.fromJSON = function (jsonObj) {
        this.setXYWH(jsonObj.x, jsonObj.y, jsonObj.width, jsonObj.height);
    };
    Rect.fromPool = function () {
        return Rect.rectPool.getNextObject();
    };
    Rect.rectPool = new objectPool_1.ObjectPool(Rect);
    return Rect;
}(observableEntity_1.ObservableEntity);
exports.Rect = Rect;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var objectPool_1 = __webpack_require__(10);
var Color = function () {
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
    Color.prototype.set = function (another) {
        this.setRGBA(another.r, another.g, another.b, another.a);
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
var objectPool_1 = __webpack_require__(10);
var observableEntity_1 = __webpack_require__(31);
var Point2d = function (_super) {
    __extends(Point2d, _super);
    function Point2d(x, y, onChangedFn) {
        if (x === void 0) {
            x = 0;
        }
        if (y === void 0) {
            y = 0;
        }
        var _this = _super.call(this) || this;
        _this._x = 0;
        _this._y = 0;
        _this._x = x;
        _this._y = y;
        if (onChangedFn) _this.addListener(onChangedFn);
        return _this;
    }
    Point2d.fromPool = function () {
        return Point2d.pool.getNextObject();
    };
    Object.defineProperty(Point2d.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (value) {
            this.setX(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Point2d.prototype, "y", {
        get: function () {
            return this._y;
        },
        set: function (value) {
            this.setY(value);
        },
        enumerable: true,
        configurable: true
    });
    Point2d.prototype.checkObservableChanged = function () {
        return this._state.setState(this._x, this._y);
    };
    Point2d.prototype.observe = function (onChangedFn) {
        this.addListener(onChangedFn);
    };
    Point2d.prototype.setXY = function (x, y) {
        if (y === undefined) {
            y = x;
        }
        this._x = x;
        this._y = y;
        this.triggerObservable();
        return this;
    };
    Point2d.prototype.setX = function (x) {
        this._x = x;
        this.triggerObservable();
        return this;
    };
    Point2d.prototype.setY = function (y) {
        this._y = y;
        this.triggerObservable();
        return this;
    };
    Point2d.prototype.set = function (another) {
        this.setXY(another._x, another._y);
        this.triggerObservable();
        return this;
    };
    Point2d.prototype.add = function (another) {
        this.addXY(another._x, another._y);
        this.triggerObservable();
        return this;
    };
    Point2d.prototype.substract = function (another) {
        this.addXY(-another._x, -another._y);
        this.triggerObservable();
        return this;
    };
    Point2d.prototype.multiply = function (n) {
        this._x *= n;
        this._y *= n;
        this.triggerObservable();
        return this;
    };
    Point2d.prototype.addXY = function (x, y) {
        this._x += x;
        this._y += y;
        this.triggerObservable();
        return this;
    };
    Point2d.prototype.addX = function (x) {
        this._x += x;
        this.triggerObservable();
        return this;
    };
    Point2d.prototype.addY = function (y) {
        this._y += y;
        this.triggerObservable();
        return this;
    };
    Point2d.prototype.negative = function () {
        this._x = -this._x;
        this._y = -this._y;
        this.triggerObservable();
        return this;
    };
    Point2d.prototype.equal = function (val) {
        return this._x === val && this._y === val;
    };
    Point2d.prototype.equalXY = function (x, y) {
        return this._x === x && this._y === y;
    };
    Point2d.prototype.equalPoint = function (point) {
        return this._x === point._x && this._y === point._y;
    };
    Point2d.prototype.clone = function () {
        return new Point2d(this._x, this._y);
    };
    Point2d.prototype.fromJSON = function (json) {
        this.setXY(json.x, json.y);
    };
    Point2d.prototype.toJSON = function () {
        return { x: this._x, y: this._y };
    };
    Point2d.prototype.toArray = function () {
        if (!this._arr) this._arr = new Array(2);
        this._arr[0] = this._x;
        this._arr[1] = this._y;
        return this._arr;
    };
    Point2d.pool = new objectPool_1.ObjectPool(Point2d, 4);
    return Point2d;
}(observableEntity_1.ObservableEntity);
exports.Point2d = Point2d;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var debugError_1 = __webpack_require__(0);
var shaderProgramUtils_1 = __webpack_require__(5);
var ShaderProgram = function () {
    function ShaderProgram(gl, vertexSource, fragmentSource) {
        var vShader = shaderProgramUtils_1.compileShader(gl, vertexSource, gl.VERTEX_SHADER);
        var fShader = shaderProgramUtils_1.compileShader(gl, fragmentSource, gl.FRAGMENT_SHADER);
        this.program = shaderProgramUtils_1.createProgram(gl, vShader, fShader);
        gl.deleteShader(vShader);
        gl.deleteShader(fShader);
        this.uniforms = shaderProgramUtils_1.extractUniforms(gl, this);
        this.attributes = shaderProgramUtils_1.extractAttributes(gl, this);
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
        if (true && !name) {
            throw new debugError_1.DebugError("no uniform name was provided!");
        }
        var uniform = this.uniforms[name];
        if (true && !uniform) {
            return;
            throw new debugError_1.DebugError("no uniform with name " + name + " found!");
        }
        if (true) {
            if (ShaderProgram.currentProgram !== this) {
                console.error(this);
                throw new debugError_1.DebugError("can not set uniform: target program is inactive");
            }
        }
        uniform.setter(this.gl, uniform.location, value);
    };
    ShaderProgram.prototype.bindBuffer = function (buffer, attrName) {
        if (true) {
            if (!attrName) throw new debugError_1.DebugError("can not found attribute location: attrLocationName not defined");
            if (this.attributes[attrName] === undefined) {
                console.log(this);
                throw new debugError_1.DebugError("can not found attribute location for  " + attrName);
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
}();
exports.ShaderProgram = ShaderProgram;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var debugError_1 = __webpack_require__(0);
exports.compileShader = function (gl, shaderSource, shaderType) {
    if (true) {
        if (!shaderSource) throw new debugError_1.DebugError("can not compile shader: shader source not specified for type " + shaderType);
    }
    var shader = gl.createShader(shaderType);
    if (true && !shader) throw new debugError_1.DebugError("can not allocate memory for shader: gl.createShader(shaderType)");
    gl.shaderSource(shader, shaderSource);
    gl.compileShader(shader);
    var compiled = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
    if (!compiled) {
        var lastError = gl.getShaderInfoLog(shader);
        gl.deleteShader(shader);
        if (true) {
            console.log(shaderSource);
            throw new debugError_1.DebugError("Error compiling shader: " + lastError);
        } else {}
    }
    return shader;
};
exports.createProgram = function (gl, vertexShader, fragmentShader) {
    var program = gl.createProgram();
    if (true && !program) throw new debugError_1.DebugError("can not allocate memory for gl.createProgram()");
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    var linked = gl.getProgramParameter(program, gl.LINK_STATUS);
    if (!linked) {
        gl.deleteProgram(program);
        var lastError = gl.getProgramInfoLog(program);
        if (true) {
            var status = gl.getProgramParameter(program, gl.VALIDATE_STATUS);
            console.error('VALIDATE_STATUS', status);
            throw new debugError_1.DebugError("Error in program linking " + lastError);
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
    var glProgram = program.getProgram();
    var activeUniforms = gl.getProgramParameter(glProgram, gl.ACTIVE_UNIFORMS);
    var uniforms = {};
    for (var i = 0; i < activeUniforms; i++) {
        var uniformData = gl.getActiveUniform(glProgram, i);
        if (true && !uniformData) throw new debugError_1.DebugError("can not receive active uniforms info: gl.getActiveUniform()");
        var type = mapType(gl, uniformData.type);
        var location = gl.getUniformLocation(glProgram, uniformData.name);
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
    var glProgram = program.getProgram();
    var activeAttributes = gl.getProgramParameter(glProgram, gl.ACTIVE_ATTRIBUTES);
    var attrMap = {};
    for (var i = 0; i < activeAttributes; i++) {
        var attrData = gl.getActiveAttrib(glProgram, i);
        if (true && !attrData) throw new debugError_1.DebugError("can not receive active attribute info: gl.getActiveAttrib()");
        var location = gl.getAttribLocation(glProgram, attrData.name);
        if (true && location < 0) {
            console.log(program);
            throw new debugError_1.DebugError("error finding attribute location: " + attrData.name);
        }
        attrMap[attrData.name] = location;
    }
    return attrMap;
};
var TypeNumber = {
    check: function (val) {
        if (isNaN(parseFloat(val)) || !isFinite(val)) throw new debugError_1.DebugError("can not set uniform with value " + val + ": expected argument of type number");
    }
};
var TypeInt = {
    check: function (val) {
        TypeNumber.check(val);
        if (val !== ~~val) throw new debugError_1.DebugError("can not set uniform with value " + val + ": expected argument of integer type, but " + val + " found");
    }
};
var TypeBool = {
    check: function (val) {
        if (!(val == true || val == false)) throw new debugError_1.DebugError("can not set uniform with value " + val + ": expected argument of boolean type, but " + val + " found");
    }
};
var TypeArray = function (checker, size) {
    return {
        check: function (val) {
            if (!val) throw new debugError_1.DebugError("can not set uniform  value: " + val);
            if (!val.splice) {
                console.error('Can not set uniform value', val);
                throw new debugError_1.DebugError("can not set uniform with value [" + val + "]: expected argument of type Array");
            }
            if (size !== undefined && val.length !== size) throw new debugError_1.DebugError("can not set uniform with value [" + val + "]: expected array with size " + size + ", but " + val.length + " found");
            for (var i = 0; i < val.length; i++) {
                try {
                    checker.check(val[i]);
                } catch (e) {
                    console.error('Can not set uniform array item', val);
                    throw new debugError_1.DebugError("can not set uniform array item with value [" + val + "]: unexpected array element type: " + val[i]);
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
            case exports.GL_TYPE.FLOAT:
                return function (gl, location, value) {
                    true && expect(value, TypeNumber);
                    gl.uniform1f(location, value);
                };
            case exports.GL_TYPE.FLOAT_VEC2:
                return function (gl, location, value) {
                    true && expect(value, TypeArray(TypeNumber, 2));
                    gl.uniform2f(location, value[0], value[1]);
                };
            case exports.GL_TYPE.FLOAT_VEC3:
                return function (gl, location, value) {
                    true && expect(value, TypeArray(TypeNumber, 3));
                    gl.uniform3f(location, value[0], value[1], value[2]);
                };
            case exports.GL_TYPE.FLOAT_VEC4:
                return function (gl, location, value) {
                    true && expect(value, TypeArray(TypeNumber, 4));
                    gl.uniform4f(location, value[0], value[1], value[2], value[3]);
                };
            case exports.GL_TYPE.INT:
                return function (gl, location, value) {
                    true && expect(value, TypeInt);
                    gl.uniform1i(location, value);
                };
            case exports.GL_TYPE.INT_VEC2:
                return function (gl, location, value) {
                    true && expect(value, TypeArray(TypeInt, 2));
                    gl.uniform2i(location, value[0], value[1]);
                };
            case exports.GL_TYPE.INT_VEC3:
                return function (gl, location, value) {
                    true && expect(value, TypeArray(TypeInt, 3));
                    gl.uniform3i(location, value[0], value[1], value[2]);
                };
            case exports.GL_TYPE.INT_VEC4:
                return function (gl, location, value) {
                    true && expect(value, TypeArray(TypeInt, 4));
                    gl.uniform4i(location, value[0], value[1], value[2], value[3]);
                };
            case exports.GL_TYPE.BOOL:
                return function (gl, location, value) {
                    true && expect(value, TypeBool);
                    gl.uniform1i(location, value);
                };
            case exports.GL_TYPE.BOOL_VEC2:
                return function (gl, location, value) {
                    true && expect(value, TypeArray(TypeBool, 2));
                    gl.uniform2i(location, value[0], value[1]);
                };
            case exports.GL_TYPE.BOOL_VEC3:
                return function (gl, location, value) {
                    true && expect(value, TypeArray(TypeBool, 3));
                    gl.uniform3i(location, value[0], value[1], value[2]);
                };
            case exports.GL_TYPE.BOOL_VEC4:
                return function (gl, location, value) {
                    true && expect(value, TypeArray(TypeBool, 4));
                    gl.uniform4i(location, value[0], value[1], value[2], value[3]);
                };
            case exports.GL_TYPE.FLOAT_MAT2:
                return function (gl, location, value) {
                    true && expect(value, TypeArray(TypeNumber, 2 * 2));
                    gl.uniformMatrix2fv(location, false, value);
                };
            case exports.GL_TYPE.FLOAT_MAT3:
                return function (gl, location, value) {
                    true && expect(value, TypeArray(TypeNumber, 3 * 3));
                    gl.uniformMatrix3fv(location, false, value);
                };
            case exports.GL_TYPE.FLOAT_MAT4:
                return function (gl, location, value) {
                    true && expect(value, TypeArray(TypeNumber, 4 * 4));
                    gl.uniformMatrix4fv(location, false, value);
                };
            case exports.GL_TYPE.SAMPLER_2D:
                return function (gl, location, value) {
                    true && expect(value, TypeInt);
                    gl.uniform1i(location, value);
                };
            default:
                if (true) throw new debugError_1.DebugError("can not set uniform for type " + type + " and size " + size);
                break;
        }
    } else {
        switch (type) {
            case exports.GL_TYPE.FLOAT:
                return function (gl, location, value) {
                    true && expect(value, TypeArray(TypeNumber));
                    gl.uniform1fv(location, value);
                };
            case exports.GL_TYPE.FLOAT_VEC2:
                return function (gl, location, value) {
                    true && expect(value, TypeArray(TypeNumber));
                    gl.uniform2fv(location, value);
                };
            case exports.GL_TYPE.FLOAT_VEC3:
                return function (gl, location, value) {
                    true && expect(value, TypeArray(TypeNumber));
                    gl.uniform3fv(location, value);
                };
            case exports.GL_TYPE.FLOAT_VEC4:
                return function (gl, location, value) {
                    true && expect(value, TypeArray(TypeNumber));
                    gl.uniform4fv(location, value);
                };
            case exports.GL_TYPE.INT:
                return function (gl, location, value) {
                    true && expect(value, TypeArray(TypeInt));
                    gl.uniform1iv(location, value);
                };
            case exports.GL_TYPE.INT_VEC2:
                return function (gl, location, value) {
                    true && expect(value, TypeArray(TypeInt));
                    gl.uniform2iv(location, value);
                };
            case exports.GL_TYPE.INT_VEC3:
                return function (gl, location, value) {
                    true && expect(value, TypeArray(TypeInt));
                    gl.uniform3iv(location, value);
                };
            case exports.GL_TYPE.INT_VEC4:
                return function (gl, location, value) {
                    true && expect(value, TypeArray(TypeInt));
                    gl.uniform4iv(location, value);
                };
            case exports.GL_TYPE.BOOL:
                return function (gl, location, value) {
                    true && expect(value, TypeArray(TypeBool));
                    gl.uniform1iv(location, value);
                };
            case exports.GL_TYPE.BOOL_VEC2:
                return function (gl, location, value) {
                    true && expect(value, TypeArray(TypeBool));
                    gl.uniform2iv(location, value);
                };
            case exports.GL_TYPE.BOOL_VEC3:
                return function (gl, location, value) {
                    true && expect(value, TypeArray(TypeBool));
                    gl.uniform3iv(location, value);
                };
            case exports.GL_TYPE.BOOL_VEC4:
                return function (gl, location, value) {
                    true && expect(value, TypeArray(TypeBool));
                    gl.uniform4iv(location, value);
                };
            case exports.GL_TYPE.SAMPLER_2D:
                return function (gl, location, value) {
                    true && expect(value, TypeArray(TypeBool));
                    gl.uniform1iv(location, value);
                };
            default:
                if (true) throw new debugError_1.DebugError("can not set uniform for type " + type + " and size " + size);
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
Object.defineProperty(exports, "__esModule", { value: true });
var rect_1 = __webpack_require__(1);
var mouse_1 = __webpack_require__(27);
var renderableModel_1 = __webpack_require__(22);
var debugError_1 = __webpack_require__(0);
var OVERFLOW;
(function (OVERFLOW) {
    OVERFLOW[OVERFLOW["HIDDEN"] = 0] = "HIDDEN";
    OVERFLOW[OVERFLOW["VISIBLE"] = 1] = "VISIBLE";
})(OVERFLOW = exports.OVERFLOW || (exports.OVERFLOW = {}));
var LAYOUT_SIZE;
(function (LAYOUT_SIZE) {
    LAYOUT_SIZE["FIXED"] = "FIXED";
    LAYOUT_SIZE["WRAP_CONTENT"] = "WRAP_CONTENT";
    LAYOUT_SIZE["MATCH_PARENT"] = "MATCH_PARENT";
})(LAYOUT_SIZE = exports.LAYOUT_SIZE || (exports.LAYOUT_SIZE = {}));
var STATE;
(function (STATE) {
    STATE["NORMAL"] = "NORMAL";
    STATE["ACTIVE"] = "ACTIVE";
    STATE["DISABLED"] = "DISABLED";
})(STATE = exports.STATE || (exports.STATE = {}));
var Container = function (_super) {
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
        _this.overflow = OVERFLOW.HIDDEN;
        _this.background = undefined;
        _this.drawingRect = new rect_1.Rect();
        _this.maxWidth = 0;
        _this.maxHeight = 0;
        _this.bgByState = {};
        _this.state = STATE.NORMAL;
        _this._screenRect = new rect_1.Rect();
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
            if (this.layoutWidth === LAYOUT_SIZE.FIXED && this.width === 0) throw new debugError_1.DebugError("layoutWidth is LAYOUT_SIZE.FIXED so width must be specified");
            if (this.layoutHeight === LAYOUT_SIZE.FIXED && this.height === 0) throw new debugError_1.DebugError("layoutHeight is LAYOUT_SIZE.FIXED so height must be specified");
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
        this._setDirty();
    };
    Container.prototype.setPaddingsLeftRight = function (left, right) {
        if (right === undefined) right = left;
        this.paddingLeft = left;
        this.paddingRight = right;
        this._setDirty();
    };
    Container.prototype.describeStates = function (description) {
        var _this = this;
        var allUIRenderable = __webpack_require__(43);
        Object.keys(description).forEach(function (stateName) {
            var state = STATE[stateName];
            var clazz = allUIRenderable[description[stateName].type];
            var instance = new clazz(_this.game);
            instance.fromJSON(description[stateName]);
            _this.bgByState[state] = instance;
        });
    };
    Container.prototype.getDrawableInfo = function () {
        return { blendMode: this.blendMode, acceptLight: false, alpha: this.alpha };
    };
    Container.prototype.revalidate = function () {
        this.calcLayoutRect();
        _super.prototype.revalidate.call(this);
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
    Container.prototype.getScreenRect = function () {
        return this._screenRect;
    };
    Container.prototype.calcLayoutRect = function () {
        this._rect.setXYWH(this.pos.x, this.pos.y, this.width + this.marginLeft + this.marginRight, this.height + this.marginTop + this.marginBottom);
        this._screenRect.set(this._rect);
        var parent = this.parent;
        while (parent) {
            this._screenRect.addXY(parent.getRect().x, parent.getRect().y);
            parent = parent.parent;
        }
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
            this.width = this.background.width;
            this.height = this.background.height;
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
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
exports.Transient = function (params) {
    return function (target) {
        target.transient = params;
    };
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var mat4 = __webpack_require__(13);
var point2d_1 = __webpack_require__(3);
var MathEx = function () {
    function MathEx() {}
    MathEx.isPointInRect = function (point, rect, angle) {
        return point.x > rect.x && point.x < rect.x + rect.width && point.y > rect.y && point.y < rect.y + rect.height;
    };
    MathEx.overlapTest = function (a, b) {
        return a.x < b.x + b.width && a.x + a.width > b.x && a.y < b.y + b.height && a.y + a.height > b.y;
    };
    MathEx.radToDeg = function (rad) {
        return rad * 180 / Math.PI;
    };
    MathEx.degToRad = function (deg) {
        return deg * Math.PI / 180;
    };
    MathEx.rectToPolar = function (point, center) {
        var radius = Math.sqrt(point.x * point.x + center.y * center.y);
        var angle = Math.atan2(center.y - point.y, center.x - point.x);
        return { radius: radius, angle: angle };
    };
    MathEx.polarToRect = function (radius, angle, center) {
        var x = radius * Math.cos(angle);
        var y = radius * Math.sin(angle);
        return new point2d_1.Point2d(center.x - x, center.y - y);
    };
    MathEx.getDistanceSquared = function (p1, p2) {
        return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
    };
    MathEx.closeTo = function (a, b, epsilon) {
        if (epsilon === void 0) {
            epsilon = 0.01;
        }
        return Math.abs(a - b) <= epsilon;
    };
    MathEx.getDistance = function (p1, p2) {
        return Math.sqrt(MathEx.getDistanceSquared(p1, p2));
    };
    MathEx.getAngle = function (p1, p2) {
        var dx = p1.x - p2.x;
        var dy = p1.y - p2.y;
        return Math.atan2(dy, dx);
    };
    MathEx.unProject = function (winPoint, width, height, viewProjectionMatrix) {
        var x = 2.0 * winPoint.x / width - 1;
        var y = 2.0 * winPoint.y / height - 1;
        var viewProjectionInverse = mat4.inverse(viewProjectionMatrix);
        var point3D = [x, y, 0, 1];
        var res = mat4.multMatrixVec(viewProjectionInverse, point3D);
        res[0] = (res[0] / 2 + 0.5) * width;
        res[1] = (res[1] / 2 + 0.5) * height;
        return new point2d_1.Point2d(res[0], res[1]);
    };
    MathEx.random = function (min, max) {
        if (min > max) {
            var tmp = min;
            min = max;
            max = tmp;
        }
        var res = ~~(Math.random() * (max - min)) + min;
        if (res > max) res = max;else if (res < min) res = min;
        return res;
    };
    return MathEx;
}();
exports.MathEx = MathEx;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var isArray = function (a) {
    return a.splice;
};
var isEqualArray = function (a, b) {
    for (var i = 0, max = a.length; i < max; i++) {
        if (a[i] !== b[i]) return false;
    }
    return true;
};
var isEqual = function (a, b) {
    if (a === undefined) return false;
    if (isArray(a) && isArray(b)) return isEqualArray(a, b);
    return a === b;
};
var AbstractDrawer = function () {
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
        if (this.bufferInfo) this.bufferInfo.destroy();
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
        if (unused === void 0) {
            unused = null;
        }
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
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var debugError_1 = __webpack_require__(0);
var ObjectPool = function () {
    function ObjectPool(Class, numberOfInstances, lazy) {
        if (numberOfInstances === void 0) {
            numberOfInstances = 16;
        }
        if (lazy === void 0) {
            lazy = true;
        }
        this.Class = Class;
        this._pool = [];
        this._cnt = 0;
        this._numberOfInstances = numberOfInstances;
        if (true && !Class) throw new debugError_1.DebugError("can not instantiate ObjectPool: class not provided in constructor");
        if (!lazy) {
            for (var i = 0; i < numberOfInstances; i++) {
                this._pool.push(new Class());
            }
        }
    }
    ObjectPool.prototype.getNextObject = function () {
        var index = this._cnt++ % this._numberOfInstances;
        if (this._pool[index] === undefined) this._pool[index] = new this.Class();
        return this._pool[index];
    };
    return ObjectPool;
}();
exports.ObjectPool = ObjectPool;

/***/ }),
/* 11 */
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
var timer_1 = __webpack_require__(56);
var commonObject_1 = __webpack_require__(12);
var tween_1 = __webpack_require__(18);
var eventEmitter_1 = __webpack_require__(32);
var decorators_1 = __webpack_require__(7);
var rect_1 = __webpack_require__(1);
var point2d_1 = __webpack_require__(3);
var debugError_1 = __webpack_require__(0);
var tweenMovie_1 = __webpack_require__(58);
var BaseModel = function (_super) {
    __extends(BaseModel, _super);
    function BaseModel(game) {
        var _this = _super.call(this) || this;
        _this.width = 0;
        _this.height = 0;
        _this.pos = new point2d_1.Point2d(0, 0, function () {
            return _this._dirty = true;
        });
        _this.scale = new point2d_1.Point2d(1, 1);
        _this.anchor = new point2d_1.Point2d(0, 0);
        _this.angle = 0;
        _this.alpha = 1;
        _this.filters = [];
        _this.blendMode = null;
        _this.acceptLight = false;
        _this.layerId = null;
        _this.fixedToCamera = false;
        _this.rigid = false;
        _this._tweens = [];
        _this._tweenMovies = [];
        _this._dirty = true;
        _this._timers = [];
        _this._rect = new rect_1.Rect(0, 0);
        if (true && !game) throw new debugError_1.DebugError("can not create model '" + _this.type + "': game instance not passed to model constructor");
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
        var t = new timer_1.Timer(callback, interval);
        this._timers.push(t);
        return t;
    };
    BaseModel.prototype.tween = function (desc) {
        var t = new tween_1.Tween(desc);
        this._tweens.push(t);
        return t;
    };
    BaseModel.prototype.tweenMovie = function () {
        var tm = new tweenMovie_1.TweenMovie(this.game);
        this._tweenMovies.push(tm);
        return tm;
    };
    BaseModel.prototype.update = function (currTime, delta) {
        var _this = this;
        this._tweens.forEach(function (t, index) {
            t.update(currTime);
            if (t.isCompleted()) _this._tweens.splice(index, 1);
        });
        this._tweenMovies.forEach(function (t, index) {
            t.update(currTime);
            if (t.isCompleted()) _this._tweenMovies.splice(index, 1);
        });
        this._timers.forEach(function (t) {
            t.onUpdate(currTime);
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
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var debugError_1 = __webpack_require__(0);
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
    if (obj === undefined) return undefined;else if (obj === null) return null;else if (typeof window !== 'undefined' && obj === window) return undefined;else if (_clonedObjects.indexOf(obj) > -1) return obj;else if (obj.fromJSON) {
        obj.fromJSON(obj.toJSON());
        return obj;
    }
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
var CommonObject = function () {
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
                throw new debugError_1.DebugError("::fromJSON(): class " + _this.constructor["name"] + " has no property " + key);
            }
            var thisObj = _this;
            if (params[key] && params[key].id && params[key].type) thisObj[key] = _this.game.repository.getObject(params[key].id, params[key].type, forceNew);else if (params[key] && params[key].forEach) {
                thisObj[key] = [];
                params[key].forEach(function (item) {
                    if (item && item.type && item.id) {
                        thisObj[key].push(_this.game.repository.getObject(item.id, item.type, forceNew));
                    } else {
                        thisObj[key].push(item);
                    }
                });
            } else if (thisObj[key] && thisObj[key].fromJSON) {
                thisObj[key].fromJSON(params[key]);
            } else if (thisObj[key] && thisObj[key].call) {
                (_a = thisObj[key]).call.apply(_a, [_this].concat(params[key]));
            } else {
                thisObj[key] = params[key];
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
            var thisObj = this_1;
            if (isPropNotFit(key, thisObj[key], opts)) {
                return "continue";
            }
            if (thisObj.constructor['transient'] && thisObj.constructor['transient'][key]) {
                return "continue";
            }
            if (thisObj[key] != null && thisObj[key]['type'] && thisObj[key]['id']) {
                res[key] = {
                    id: thisObj[key]['id'],
                    type: thisObj[key]['type']
                };
            } else if (thisObj[key] != null && thisObj[key]['splice']) {
                var col = thisObj[key];
                var arr_1 = [];
                col.forEach(function (el) {
                    if (el && el.type && el.id) {
                        arr_1.push({ type: el.type, id: el.id });
                    } else {
                        if (isPrimitive(el)) arr_1.push(deepCopy(el));
                    }
                });
                res[key] = arr_1;
            } else if (thisObj[key] && thisObj[key]['toJSON']) {
                res[key] = thisObj[key]['toJSON']();
            } else {
                var possiblePrimitive = deepCopy(thisObj[key]);
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
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var debugError_1 = __webpack_require__(0);
exports.makeIdentity = function () {
    return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
};
exports.makeZToWMatrix = function (fudgeFactor) {
    return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, fudgeFactor, 0, 0, 0, 1];
};
exports.make2DProjection = function (width, height, depth) {
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
        throw new debugError_1.DebugError("can not invert matrix");
    }
    for (var i = 0; i < 16; i++) r[i] /= det;
    return r;
};
exports.IDENTITY = exports.makeIdentity();

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var debugError_1 = __webpack_require__(0);
var vertexBuffer_1 = __webpack_require__(69);
var indexBuffer_1 = __webpack_require__(70);
var BufferInfo = function () {
    function BufferInfo(gl, description) {
        this.posVertexBuffer = null;
        this.posIndexBuffer = null;
        this.texVertexBuffer = null;
        this.normalBuffer = null;
        this.drawMethod = null;
        this.numOfElementsToDraw = 0;
        this.gl = gl;
        if (true && description.drawMethod === undefined) throw new debugError_1.DebugError("can not create BufferInfo: drawMethod not defined");
        this.drawMethod = description.drawMethod;
        if (true && !description.posVertexInfo) throw new debugError_1.DebugError("can not create BufferInfo: posVertexInfo is mandatory");
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
        if (description.normalInfo) {
            this.normalBuffer = new vertexBuffer_1.VertexBuffer(gl);
            this.normalBuffer.setData(description.normalInfo.array, description.normalInfo.type, description.normalInfo.size);
            this.normalBuffer.setAttrName(description.normalInfo.attrName);
        }
    }
    BufferInfo.prototype.bind = function (program) {
        program.bind();
        if (this.posIndexBuffer) this.posIndexBuffer.bind();
        if (this.posVertexBuffer) this.posVertexBuffer.bind(program);
        if (this.texVertexBuffer) this.texVertexBuffer.bind(program);
        if (this.normalBuffer) this.normalBuffer.bind(program);
    };
    BufferInfo.prototype.unbind = function () {
        if (this.posIndexBuffer) this.posIndexBuffer.unbind();
        if (this.posVertexBuffer) this.posVertexBuffer.unbind();
        if (this.texVertexBuffer) this.texVertexBuffer.unbind();
        if (this.normalBuffer) this.normalBuffer.unbind();
    };
    BufferInfo.prototype.destroy = function () {
        if (this.posVertexBuffer) this.posVertexBuffer.destroy();
        if (this.posIndexBuffer) this.posIndexBuffer.destroy();
        if (this.texVertexBuffer) this.texVertexBuffer.destroy();
        if (this.normalBuffer) this.normalBuffer.destroy();
    };
    BufferInfo.prototype._getNumOfElementsToDraw = function (drawMethod) {
        switch (drawMethod) {
            case this.gl.LINE_STRIP:
            case this.gl.TRIANGLE_FAN:
                return this.posVertexBuffer.getBufferLength() / 2;
            default:
                throw new debugError_1.DebugError("unknown draw method: " + drawMethod);
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
var shaderProgramUtils_1 = __webpack_require__(5);
var shaderGenerator_1 = __webpack_require__(36);
var TexShaderGenerator = function (_super) {
    __extends(TexShaderGenerator, _super);
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
}(shaderGenerator_1.ShaderGenerator);
exports.TexShaderGenerator = TexShaderGenerator;

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
var shape_1 = __webpack_require__(28);
var Rectangle = function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(game) {
        var _this = _super.call(this, game) || this;
        _this.borderRadius = 0;
        _this.width = 16;
        _this.height = 16;
        _this.lineWidth = 1;
        return _this;
    }
    Rectangle.prototype.draw = function () {
        this.game.renderer.drawRectangle(this);
        return true;
    };
    return Rectangle;
}(shape_1.Shape);
exports.Rectangle = Rectangle;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var objectPool_1 = __webpack_require__(10);
var Size = function () {
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
    Size.prototype.set = function (another) {
        this.width = another.width;
        this.height = another.height;
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
var easing_1 = __webpack_require__(57);
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
var Tween = function () {
    function Tween(tweenDesc) {
        this._propsToChange = [];
        this._startedTime = 0;
        this._currTime = 0;
        this._completed = false;
        this._target = tweenDesc.target;
        this._progressFn = tweenDesc.progress;
        this._completeFn = tweenDesc.complete;
        this._easeFnName = tweenDesc.ease || 'linear';
        this._tweenTime = tweenDesc.time || 1000;
        this._desc = this.normalizeDesc(tweenDesc);
    }
    Tween.prototype.reuse = function (newTweenDesc) {
        var _this = this;
        this._startedTime = this._currTime;
        this._completed = false;
        Object.keys(newTweenDesc).forEach(function (key) {
            _this._desc[key] = newTweenDesc[key];
        });
        this._desc = this.normalizeDesc(newTweenDesc);
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
        this._propsToChange = Object.keys(allPropsMap);
        this._propsToChange.forEach(function (prp) {
            if (tweenDesc.from[prp] === undefined) tweenDesc.from[prp] = getValByPath(_this._target, prp);
            if (tweenDesc.to[prp] === undefined) tweenDesc.to[prp] = getValByPath(_this._target, prp);
        });
        return tweenDesc;
    };
    Tween.prototype.update = function (currTime) {
        if (this._completed) return;
        this._currTime = currTime;
        if (!this._startedTime) this._startedTime = currTime;
        var curTweenTime = currTime - this._startedTime;
        if (curTweenTime > this._tweenTime) {
            this.complete();
            return;
        }
        var l = this._propsToChange.length;
        while (l--) {
            var prp = this._propsToChange[l];
            var valFrom = this._desc.from[prp];
            var valTo = this._desc.to[prp];
            var fn = easing_1.Easing[this._easeFnName];
            var valCurr = fn(curTweenTime, valFrom, valTo - valFrom, this._tweenTime);
            setValByPath(this._target, prp, valCurr);
        }
        this._progressFn && this._progressFn(this._target);
    };
    Tween.prototype.progress = function (_progressFn) {
        this._progressFn = _progressFn;
    };
    Tween.prototype.reset = function () {
        this._startedTime = null;
        this._completed = false;
    };
    Tween.prototype.complete = function () {
        if (this._completed) return;
        var l = this._propsToChange.length;
        while (l--) {
            var prp = this._propsToChange[l];
            var valCurr = this._desc.to[prp];
            setValByPath(this._target, prp, valCurr);
        }
        this._progressFn && this._progressFn(this._target);
        this._completeFn && this._completeFn(this._target);
        this._completed = true;
    };
    Tween.prototype.isCompleted = function () {
        return this._completed;
    };
    Tween.prototype.getTarget = function () {
        return this._target;
    };
    Tween.prototype.getTweenTime = function () {
        return this._tweenTime;
    };
    return Tween;
}();
exports.Tween = Tween;

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
var plane_1 = __webpack_require__(26);
var shaderProgram_1 = __webpack_require__(4);
var abstractDrawer_1 = __webpack_require__(9);
var bufferInfo_1 = __webpack_require__(14);
var texShaderGenerator_1 = __webpack_require__(15);
var SpriteRectDrawer = function (_super) {
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
var rect_1 = __webpack_require__(1);
var debugError_1 = __webpack_require__(0);
var scrollableContainer_1 = __webpack_require__(83);
var image_1 = __webpack_require__(29);
var TEXT_ALIGN;
(function (TEXT_ALIGN) {
    TEXT_ALIGN["LEFT"] = "LEFT";
    TEXT_ALIGN["RIGHT"] = "RIGHT";
    TEXT_ALIGN["CENTER"] = "CENTER";
    TEXT_ALIGN["JUSTIFY"] = "JUSTIFY";
})(TEXT_ALIGN = exports.TEXT_ALIGN || (exports.TEXT_ALIGN = {}));
var TextInfo = function () {
    function TextInfo(textField) {
        this.textField = textField;
        this.allCharsCached = [];
        this.width = 0;
        this.height = 0;
        this.posX = 0;
        this.posY = 0;
        this.strings = [];
    }
    TextInfo.prototype.reset = function () {
        this.allCharsCached = [];
        this.strings = [];
        this.posX = 0;
        this.posY = 0;
    };
    TextInfo.prototype.newString = function () {
        this.posX = 0;
        if (this.strings.length) {
            this.posY += this.textField.font.getDefaultSymbolHeight();
        }
        this.strings.push(new StringInfo());
    };
    TextInfo.prototype.addChar = function (c) {
        this.strings[this.strings.length - 1].chars.push(c);
        this.allCharsCached.push(c);
        c.destRect.setXY(this.posX, this.posY);
        this.posX += c.sourceRect.width;
    };
    TextInfo.prototype.addWord = function (w) {
        var _this = this;
        w.chars.forEach(function (c) {
            _this.addChar(c);
        });
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
        var _this = this;
        if (true && TEXT_ALIGN[textAlign] === undefined) {
            var keys = Object.keys(TEXT_ALIGN).join(', ');
            throw new debugError_1.DebugError("can not align text: unknown enum type of TEXT_ALIGN: " + textAlign + ", expected: " + keys);
        }
        this.strings.forEach(function (s) {
            s.align(textAlign, _this.textField);
        });
    };
    return TextInfo;
}();
var CharInfo = function () {
    function CharInfo() {
        this.destRect = new rect_1.Rect();
        this.sourceRect = new rect_1.Rect();
    }
    return CharInfo;
}();
var CharsHolder = function () {
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
var WordInfo = function (_super) {
    __extends(WordInfo, _super);
    function WordInfo() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.width = 0;
        return _this;
    }
    WordInfo.prototype.revalidate = function () {
        this.width = 0;
        for (var _i = 0, _a = this.chars; _i < _a.length; _i++) {
            var ch = _a[_i];
            this.width += ch.destRect.width;
        }
    };
    WordInfo.prototype.addChar = function (c) {
        this.chars.push(c);
        this.width += c.sourceRect.width;
    };
    return WordInfo;
}(CharsHolder);
var StringInfo = function (_super) {
    __extends(StringInfo, _super);
    function StringInfo() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
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
    StringInfo.prototype.align = function (textAlign, textField) {
        switch (textAlign) {
            case TEXT_ALIGN.LEFT:
                break;
            case TEXT_ALIGN.CENTER:
                var offset = textField.width - this.width;
                if (offset < 0) return;
                offset /= 2;
                this.moveBy(offset, 0);
                break;
            case TEXT_ALIGN.RIGHT:
                offset = textField.width - this.width;
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
                var totalSpaceWidth = textField.width - totalWordsWidth_1;
                var oneSpaceWidth = totalSpaceWidth / (words.length - 1);
                var initialPosY = this.chars[0].destRect.getPoint().y;
                var currXPointer = this.chars[0].destRect.getPoint().x;
                for (var i = 0; i < words.length; i++) {
                    var w = words[i];
                    w.moveTo(currXPointer, initialPosY);
                    currXPointer += w.width + oneSpaceWidth;
                }
                break;
            default:
                if (true) throw new debugError_1.DebugError("unknown TEXT_ALIGN value: " + textAlign);
        }
    };
    return StringInfo;
}(CharsHolder);
var TextField = function (_super) {
    __extends(TextField, _super);
    function TextField(game) {
        var _this = _super.call(this, game) || this;
        _this.type = 'TextField';
        _this.text = '';
        _this.font = null;
        _this.textAlign = TEXT_ALIGN.LEFT;
        _this.border = null;
        _this._textInfo = new TextInfo(_this);
        _this._symbolImage = new image_1.Image(_this.game);
        _this._initScrolling({ vertical: true });
        return _this;
    }
    TextField.prototype.revalidate = function () {
        _super.prototype.revalidate.call(this);
        if (this.font === null) this.font = this.game.repository.getArray('Font')[0];
        if (true && !this.font) throw new debugError_1.DebugError("at least one Font must be created");
        this.setFont(this.font);
    };
    TextField.prototype._getCharInfo = function (c) {
        var charRect = this.font.fontContext.symbols[c] || this.font.fontContext.symbols[' '];
        var charInfo = new CharInfo();
        charInfo.symbol = c;
        charInfo.sourceRect = charRect;
        charInfo.destRect.setWH(charRect.width, charRect.height);
        return charInfo;
    };
    TextField.prototype.onGeometryChanged = function () {
        var _this = this;
        _super.prototype.onGeometryChanged.call(this);
        var textInfo = this._textInfo;
        textInfo.reset();
        textInfo.newString();
        var text = this.text;
        var strings = text.split('\n');
        strings.forEach(function (str, i) {
            var words = str.split(' ');
            words.forEach(function (w, i) {
                var wordInfo = new WordInfo();
                for (var k = 0; k < w.length; k++) {
                    var charInfo = _this._getCharInfo(w[k]);
                    wordInfo.addChar(charInfo);
                }
                if (_this.maxWidth && textInfo.posX + wordInfo.width > _this.maxWidth && i < words.length - 1) {
                    textInfo.newString();
                }
                textInfo.addWord(wordInfo);
                if (i < str.length - 1) {
                    var spaceChar = _this._getCharInfo(' ');
                    textInfo.addChar(spaceChar);
                }
            });
            if (i < strings.length - 1) {
                textInfo.newString();
            }
        });
        textInfo.revalidate(this.font.getDefaultSymbolHeight());
        textInfo.align(this.textAlign);
        this.width = textInfo.width;
        if (this.maxHeight !== 0 && textInfo.height > this.maxHeight) {
            this.height = this.maxHeight;
        } else {
            this.height = textInfo.height;
        }
        if (this.border) {
            this.border.width = this.width;
            this.border.height = this.height;
        }
        this.updateScrollSize(textInfo.height, this.height);
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
        if (!font) throw new debugError_1.DebugError("can not find font with name " + name);
        this.setFont(font);
    };
    TextField.prototype.draw = function () {
        this.game.renderer.lockRect(this.getScreenRect());
        this.game.renderer.save();
        if (this.vScrollInfo.offset) this.game.renderer.translate(0, -this.vScrollInfo.offset, 0);
        this._symbolImage.setDefaultResourcePath(this.font.getDefaultResourcePath());
        for (var _i = 0, _a = this._textInfo.allCharsCached; _i < _a.length; _i++) {
            var charInfo = _a[_i];
            if (charInfo.destRect.y - this.vScrollInfo.offset > this.height) continue;
            if (charInfo.destRect.y + charInfo.destRect.height - this.vScrollInfo.offset < 0) continue;
            this._symbolImage.srcRect.set(charInfo.sourceRect);
            this._symbolImage.setXYWH(charInfo.destRect.x, charInfo.destRect.y, charInfo.destRect.width, charInfo.destRect.height);
            this._symbolImage.render(true);
        }
        this.game.renderer.restore();
        this.game.renderer.unlockRect();
        if (this.border) this.border.render();
        return true;
    };
    return TextField;
}(scrollableContainer_1.ScrollableContainer);
exports.TextField = TextField;

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
var gameObjectProto_1 = __webpack_require__(30);
var commonBehaviours = __webpack_require__(59);
var noop_1 = __webpack_require__(34);
var GameObject = function (_super) {
    __extends(GameObject, _super);
    function GameObject(game) {
        var _this = _super.call(this, game) || this;
        _this.type = 'GameObject';
        _this.gameObjectProto = null;
        console.log('created go');
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
            if (!ownProps[key]) return;
            if (ownProps[key].splice && ownProps[key].length === 0) return;
            _this[key] = ownProps[key];
        });
        if (this.startFrameAnimationName !== null) this.playFrameAnimation(this.startFrameAnimationName);
        _super.prototype.revalidate.call(this);
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
var resource_1 = __webpack_require__(23);
var debugError_1 = __webpack_require__(0);
var mathEx_1 = __webpack_require__(8);
var object_1 = __webpack_require__(24);
var RenderableModel = function (_super) {
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
    RenderableModel.prototype.prependChild = function (c) {
        c.parent = this;
        this.children.unshift(c);
        c.onShow();
    };
    RenderableModel.prototype.findObject = function (query) {
        if (object_1.isObjectMatch(this, query)) return this;
        for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
            var c = _a[_i];
            var possibleObject = c.findObject(query);
            if (possibleObject) return possibleObject;
        }
        return null;
    };
    RenderableModel.prototype._setDirty = function () {
        this._dirty = true;
    };
    RenderableModel.prototype.beforeRender = function () {
        this.game.renderer.translate(this.pos.x, this.pos.y);
    };
    RenderableModel.prototype.isNeedAdditionalTransform = function () {
        return !(this.angle === 0 && this.scale.equal(1));
    };
    RenderableModel.prototype.doAdditionalTransform = function () {
        this.game.renderer.rotateZ(this.angle);
        if (this['angleY']) this.game.renderer['rotateY'](this['angleY']);
    };
    RenderableModel.prototype.isInViewPort = function () {
        return mathEx_1.MathEx.overlapTest(this.game.camera.getRectScaled(), this.getRect());
    };
    RenderableModel.prototype.moveToFront = function () {
        var index = this.parent.children.indexOf(this);
        if (true && index == -1) throw new debugError_1.DebugError("can not move to front: gameObject is detached");
        this.parent.children.splice(index, 1);
        this.parent.children.push(this);
    };
    RenderableModel.prototype.moveToBack = function () {
        var index = this.parent.children.indexOf(this);
        if (true && index == -1) throw new debugError_1.DebugError("can not move to back: gameObject is detached");
        this.parent.children.splice(index, 1);
        this.parent.children.unshift(this);
    };
    RenderableModel.prototype.render = function (force) {
        if (force === void 0) {
            force = false;
        }
        if (!force && !this.isInViewPort()) return;
        var renderer = this.game.renderer;
        renderer.save();
        this.beforeRender();
        renderer.translate(-this.anchor.x, -this.anchor.y);
        if (this.isNeedAdditionalTransform()) {
            var dx = this.width / 2,
                dy = this.height / 2;
            renderer.translate(dx, dy);
            renderer.scale(this.scale.x, this.scale.y);
            this.doAdditionalTransform();
            renderer.translate(-dx, -dy);
        }
        var drawResult = this.draw();
        if (drawResult && this.children.length > 0) {
            renderer.save();
            renderer.translate(this.anchor.x, this.anchor.y);
            for (var i = 0, max = this.children.length; i < max; i++) {
                this.children[i].render();
            }
            renderer.restore();
        }
        renderer.restore();
    };
    RenderableModel.prototype.update = function (time, delta) {
        _super.prototype.update.call(this, time, delta);
        for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
            var c = _a[_i];
            if (this._dirty) c._setDirty();
            c.update(time, delta);
        }
    };
    return RenderableModel;
}(resource_1.Resource);
exports.RenderableModel = RenderableModel;

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
var baseModel_1 = __webpack_require__(11);
var Resource = function (_super) {
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
exports.isObjectMatch = function (obj, query) {
    if (!(obj && query)) return false;
    var match = true;
    var keys = Object.keys(query);
    if (!keys.length) return false;
    keys.some(function (key) {
        if (obj[key] != query[key]) {
            match = false;
            return true;
        }
    });
    return match;
};
exports.isObject = function (obj) {
    return obj === Object(obj);
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var debugError_1 = __webpack_require__(0);
var BaseAbstractBehaviour = function () {
    function BaseAbstractBehaviour(game) {
        this.game = game;
        BaseAbstractBehaviour.instances.push(this);
    }
    BaseAbstractBehaviour.prototype.manage = function (gameObject, parameters) {
        console.error(this);
        if (true) throw new debugError_1.DebugError("BaseAbstractBehaviour: method 'manage' not implemented");
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
var abstractPrimitive_1 = __webpack_require__(35);
var Plane = function (_super) {
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
var mathEx_1 = __webpack_require__(8);
var point2d_1 = __webpack_require__(3);
var objectPool_1 = __webpack_require__(10);
var rect_1 = __webpack_require__(1);
var MousePoint = function (_super) {
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
    doubleClick: 'doubleClick',
    scroll: 'scroll'
};
var Mouse = function () {
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
    Mouse.triggerGameObjectEvent = function (e, eventName, point, go, offsetX, offsetY) {
        if (offsetX === void 0) {
            offsetX = 0;
        }
        if (offsetY === void 0) {
            offsetY = 0;
        }
        var rectWithOffset = rect_1.Rect.fromPool().clone().set(go.getRect()).addXY(offsetX, offsetY);
        if (mathEx_1.MathEx.isPointInRect(point, rectWithOffset)) {
            point.target = go;
            go.trigger(eventName, {
                screenX: point.x,
                screenY: point.y,
                objectX: point.x - go.pos.x,
                objectY: point.y - go.pos.y,
                id: point.id,
                target: go,
                nativeEvent: e,
                eventName: eventName,
                isMouseDown: point.isMouseDown
            });
            return true;
        }
        return false;
    };
    Mouse.prototype.triggerChildren = function (e, c, eventName, point, offsetX, offsetY) {
        for (var i = 0; i < c.length; i++) {
            var go = c[c.length - 1 - i];
            var isCaptured = Mouse.triggerGameObjectEvent(e, eventName, point, go, offsetX, offsetY);
            if (isCaptured) {
                this.triggerChildren(e, go.children, eventName, point, offsetX + go.pos.x, offsetY + go.pos.y);
                break;
            }
        }
    };
    Mouse.prototype.triggerEvent = function (e, eventName, isMouseDown) {
        if (isMouseDown === undefined) isMouseDown = false;
        var g = this.game;
        var scene = g.getCurrScene();
        if (!scene) return;
        var point = this.resolvePoint(e);
        point.isMouseDown = isMouseDown;
        point.target = undefined;
        for (var _i = 0, _a = scene.getAllGameObjects(); _i < _a.length; _i++) {
            var go = _a[_i];
            var isCaptured = Mouse.triggerGameObjectEvent(e, eventName, point, go);
            if (isCaptured) {
                if (go.children) this.triggerChildren(e, go.children, eventName, point, go.pos.x, go.pos.y);
                break;
            }
        }
        var untransformedPoint = MousePoint.unTransform(point);
        for (var j = 0; j < scene.uiLayer.children.length; j++) {
            var go = scene.uiLayer.children[scene.uiLayer.children.length - 1 - j];
            var isCaptured = Mouse.triggerGameObjectEvent(e, eventName, untransformedPoint, go);
            if (isCaptured) {
                if (go.children) this.triggerChildren(e, go.children, eventName, untransformedPoint, go.pos.x, go.pos.y);
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
            eventName: eventName,
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
        if (point.target !== lastMouseDownObject) lastMouseDownObject.trigger(exports.MOUSE_EVENTS.mouseUp, point);
        delete this.objectsCaptured[point.id];
    };
    Mouse.prototype.resolveDoubleClick = function (e) {
        var point = this.triggerEvent(e, exports.MOUSE_EVENTS.doubleClick);
        if (!point) return;
        delete this.objectsCaptured[point.id];
    };
    Mouse.prototype.resolveScroll = function (e) {
        var point = this.triggerEvent(e, exports.MOUSE_EVENTS.scroll);
        if (!point) return;
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
            e.button === 0 && _this.resolveClick(e);
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
        container.onmousewheel = function (e) {
            _this.resolveScroll(e);
        };
    };
    Mouse.prototype.destroy = function () {
        var _this = this;
        if (!this.container) return;
        ['mouseMove', 'ontouchstart', 'onmousedown', 'ontouchend', 'onmouseup', 'ontouchmove', 'onmousemove', 'ondblclick'].forEach(function (evtName) {
            _this.container[evtName] = null;
        });
    };
    return Mouse;
}();
exports.Mouse = Mouse;

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
Object.defineProperty(exports, "__esModule", { value: true });
var renderableModel_1 = __webpack_require__(22);
var color_1 = __webpack_require__(2);
var Shape = function (_super) {
    __extends(Shape, _super);
    function Shape(game) {
        var _this = _super.call(this, game) || this;
        _this.color = color_1.Color.BLACK.clone();
        _this.lineWidth = 0;
        _this.fillColor = color_1.Color.RGB(100, 100, 100);
        return _this;
    }
    Shape.prototype.setWH = function (w, h) {
        this.setXYWH(this.pos.x, this.pos.y, w, h);
    };
    Shape.prototype.setXYWH = function (x, y, w, h) {
        this.pos.x = x;
        this.pos.y = y;
        this.width = w;
        this.height = h;
        this.getRect().setXYWH(x, y, w, h);
    };
    Shape.prototype.getDrawableInfo = function () {
        return { blendMode: this.blendMode, acceptLight: false, alpha: this.alpha };
    };
    return Shape;
}(renderableModel_1.RenderableModel);
exports.Shape = Shape;

/***/ }),
/* 29 */
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
var rect_1 = __webpack_require__(1);
var debugError_1 = __webpack_require__(0);
var shape_1 = __webpack_require__(28);
var color_1 = __webpack_require__(2);
var Image = function (_super) {
    __extends(Image, _super);
    function Image(game) {
        var _this = _super.call(this, game) || this;
        _this.srcRect = new rect_1.Rect();
        _this.borderRadius = 0;
        _this.fillColor.set(color_1.Color.NONE);
        return _this;
    }
    Image.prototype.setSrc = function (uri) {
        this.setDefaultResourcePath(uri);
    };
    Image.prototype.getSrc = function () {
        return this.getDefaultResourcePath();
    };
    Image.prototype.revalidate = function () {
        if (true && !this.getDefaultResourcePath()) {
            console.error(this);
            throw new debugError_1.DebugError("can not render Image: default resource path not specified in resourceMap property");
        }
        var tex = this.game.renderer.getTextureInfo(this.getDefaultResourcePath());
        if (this.width === 0) this.width = tex.size.width;
        if (this.height === 0) this.height = tex.size.height;
        if (this.srcRect.width === 0) this.srcRect.width = tex.size.width;
        if (this.srcRect.height === 0) this.srcRect.height = tex.size.height;
    };
    Image.prototype.draw = function () {
        this.game.renderer.drawImage(this);
        return true;
    };
    return Image;
}(shape_1.Shape);
exports.Image = Image;

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
var point2d_1 = __webpack_require__(3);
var rect_1 = __webpack_require__(1);
var shaderMaterial_1 = __webpack_require__(55);
var renderableModel_1 = __webpack_require__(22);
var cloneId = 0;
var GameObjectProto = function (_super) {
    __extends(GameObjectProto, _super);
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
        _this._frameRect = new rect_1.Rect();
        _this._sprPosX = 0;
        _this._sprPosY = 0;
        _this._timeCreated = null;
        _this._individualBehaviour = null;
        return _this;
    }
    GameObjectProto.prototype.createGameObject = function () {
        var go = new gameObject_1.GameObject(this.game);
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
        if (this.rigid) {}
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
            if (this.commonBehaviour[i].onUpdate) this.commonBehaviour[i].onUpdate(time, delta);
        }
        if (this.rigidBody !== null) {
            this.rigidBody.update(time, delta);
            this.pos.x = ~~(this.rigidBody.mCenter.x - this.rigidBody['mWidth'] / 2);
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
        return true;
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
var gameObject_1 = __webpack_require__(21);

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var State = function () {
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
var ObservableEntity = function () {
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
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var debugError_1 = __webpack_require__(0);
var EventEmitter = function () {
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
            throw new debugError_1.DebugError("can not remove event listener " + eventName);
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
/* 33 */
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
var baseAbstractBehaviour_1 = __webpack_require__(25);
var Moveable = function (_super) {
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
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
exports.noop = function () {};

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var AbstractPrimitive = function () {
    function AbstractPrimitive() {}
    return AbstractPrimitive;
}();
exports.AbstractPrimitive = AbstractPrimitive;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var ShaderGenerator = function () {
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
        return name;
    };
    ShaderGenerator.prototype.addFragmentUniform = function (type, name) {
        this.fragmentUniforms.push({ type: type, name: name });
        return name;
    };
    ShaderGenerator.prototype.addAttribute = function (type, name) {
        this.attributes.push({ type: type, name: name });
        return name;
    };
    ShaderGenerator.prototype.addVarying = function (type, name) {
        this.varyings.push({ type: type, name: name });
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
        return "\n" + this.prependedVertexCodeBlocks.map(function (v) {
            return "" + v;
        }).join('\n') + "\n\n" + this.vertexUniforms.map(function (u) {
            return "uniform   " + u.type + " " + u.name + ";";
        }).join('\n') + "\n" + this.attributes.map(function (u) {
            return "attribute " + u.type + " " + u.name + ";";
        }).join('\n') + "\n" + this.varyings.map(function (u) {
            return "varying   " + u.type + " " + u.name + ";";
        }).join('\n') + "\n" + this.appendedVertexCodeBlocks.map(function (v) {
            return "" + v;
        }).join('\n') + "\n\n" + this.vertexMainFn;
    };
    ShaderGenerator.prototype.getFragmentSource = function () {
        return "\nprecision mediump float;\n\n" + this.prependedFragCodeBlocks.map(function (v) {
            return "" + v;
        }).join('\n') + "\n\n" + this.fragmentUniforms.map(function (u) {
            return "uniform " + u.type + " " + u.name + ";";
        }).join('\n') + "\n" + this.varyings.map(function (u) {
            return "varying " + u.type + " " + u.name + ";";
        }).join('\n') + "\n" + this.appendedFragCodeBlocks.map(function (v) {
            return "" + v;
        }).join('\n') + "\n\n" + this.fragmentMainFn + "\n";
    };
    ShaderGenerator.prototype.debug = function () {
        if (false) {}
        console.log('// *** vertex shader source ***');
        console.log(this.getVertexSource());
        console.log('// *** fragment shader source ***');
        console.log(this.getFragmentSource());
    };
    return ShaderGenerator;
}();
exports.ShaderGenerator = ShaderGenerator;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var debugError_1 = __webpack_require__(0);
var pointLight_1 = __webpack_require__(71);
var LightArray = function () {
    function LightArray(game) {
        if (true && !game) throw new debugError_1.DebugError("game instance is not passed to LightArray constructor");
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
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var debugError_1 = __webpack_require__(0);
var color_1 = __webpack_require__(2);
var decorators_1 = __webpack_require__(7);
var AbstractLight = function () {
    function AbstractLight(game) {
        this.color = color_1.Color.WHITE;
        this.intensity = 1.0;
        if (true && !game) throw new debugError_1.DebugError("game instanse is not passed to AbstractLight constructor");
        this.game = game;
    }
    AbstractLight = __decorate([decorators_1.Transient({
        game: true
    })], AbstractLight);
    return AbstractLight;
}();
exports.AbstractLight = AbstractLight;

/***/ }),
/* 39 */
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
var shaderGenerator_1 = __webpack_require__(36);
var ColorShaderGenerator = function (_super) {
    __extends(ColorShaderGenerator, _super);
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
}(shaderGenerator_1.ShaderGenerator);
exports.ColorShaderGenerator = ColorShaderGenerator;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var SHAPE_TYPE;
(function (SHAPE_TYPE) {
    SHAPE_TYPE[SHAPE_TYPE["ELLIPSE"] = 0] = "ELLIPSE";
    SHAPE_TYPE[SHAPE_TYPE["RECT"] = 1] = "RECT";
})(SHAPE_TYPE = exports.SHAPE_TYPE || (exports.SHAPE_TYPE = {}));
var FILL_TYPE;
(function (FILL_TYPE) {
    FILL_TYPE[FILL_TYPE["COLOR"] = 0] = "COLOR";
    FILL_TYPE[FILL_TYPE["TEXTURE"] = 1] = "TEXTURE";
})(FILL_TYPE = exports.FILL_TYPE || (exports.FILL_TYPE = {}));
exports.fragmentSource = "\n\n#define HALF .5\n#define ZERO  0.\n#define ONE   1.\n#define ERROR_COLOR vec4(ONE,ZERO,ZERO,ONE)\n\nvec4 getFillColor(){\n    if (u_fillType==" + FILL_TYPE.COLOR + ") return u_fillColor;\n    else if (u_fillType==" + FILL_TYPE.TEXTURE + ") {\n        float tx = u_texRect[0]+(v_position.x-u_rectOffsetLeft)/u_width*u_texRect[2]; \n        float ty = u_texRect[1]+(v_position.y-u_rectOffsetTop)/u_height*u_texRect[3];\n        return texture2D(texture, vec2(tx,ty));\n    }    \n    else return ERROR_COLOR;\n}\nfloat calcRadiusAtAngle(float x,float y) {\n     float a = atan(y-HALF,x-HALF);\n     float cosA = cos(a);\n     float sinA = sin(a);\n     return u_rx*u_ry/sqrt(u_rx*u_rx*sinA*sinA+u_ry*u_ry*cosA*cosA);\n}\nvoid drawEllipse(){\n     float dist = distance(vec2(HALF,HALF),v_position.xy);\n     float rAtCurrAngle = calcRadiusAtAngle(v_position.x,v_position.y);\n     if (dist < rAtCurrAngle) {\n        if (dist > rAtCurrAngle - u_lineWidth) gl_FragColor = u_color;\n        else gl_FragColor = getFillColor();\n     }\n     else discard;\n}\nvoid drawRect(){\n    float x = v_position.x - HALF;\n    float y = v_position.y - HALF;\n    float distX = abs(x);\n    float distY = abs(y);\n    float halfW = u_width  * HALF;\n    float halfH = u_height * HALF;\n    if (distX < halfW && distY < halfH) {\n        \n        if (distX>halfW - u_borderRadius && distY>halfH - u_borderRadius) {\n            vec2 borderCenter = vec2(0.,0.);\n            float posX = v_position.x, posY = v_position.y;\n            if (posX<HALF && posY<HALF) { // top left\n                borderCenter = vec2(HALF - halfW + u_borderRadius,HALF - halfH + u_borderRadius);\n            }\n            else if (posX>HALF && posY<HALF) { // top right\n                borderCenter = vec2(HALF + halfW - u_borderRadius,HALF - halfH + u_borderRadius); \n            }    \n            else if (posX<HALF && posY>HALF) { // bottom left\n                borderCenter = vec2(HALF - halfW + u_borderRadius,HALF + halfH - u_borderRadius); \n            }\n            else {  // bottom right\n                borderCenter = vec2(HALF + halfW - u_borderRadius,HALF + halfH - u_borderRadius);\n            }\n            float distToBorderCenter = distance(v_position.xy,borderCenter);\n            if (distToBorderCenter>u_borderRadius) discard;\n            else if (distToBorderCenter>u_borderRadius-u_lineWidth) gl_FragColor = u_color;\n            else gl_FragColor = getFillColor();\n        }\n        \n        else if (distX > halfW - u_lineWidth || distY > halfH - u_lineWidth)\n            gl_FragColor = u_color;\n        else \n            gl_FragColor = getFillColor();\n    }\n    else discard;\n}\n\nvoid main(){\n    if (u_shapeType==" + SHAPE_TYPE.ELLIPSE + ") drawEllipse();\n    else if (u_shapeType==" + SHAPE_TYPE.RECT + ") drawRect();\n    else gl_FragColor = ERROR_COLOR;\n}\n\n\n\n";

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var debugError_1 = __webpack_require__(0);
var texture_1 = __webpack_require__(42);
var FrameBuffer = function () {
    function FrameBuffer(gl, width, height) {
        if (true && !gl) throw new debugError_1.DebugError("can not create FrameBuffer, gl context not passed to constructor, expected: FrameBuffer(gl)");
        this.gl = gl;
        this.width = width;
        this.height = height;
        this.texture = new texture_1.Texture(gl);
        this.texture.setImage(null, width, height);
        this._init(gl, width, height);
    }
    FrameBuffer.prototype._init = function (gl, width, height) {
        this.glRenderBuffer = gl.createRenderbuffer();
        if (true && !this.glRenderBuffer) throw new debugError_1.DebugError("can not allocate memory for glRenderBuffer");
        gl.bindRenderbuffer(gl.RENDERBUFFER, this.glRenderBuffer);
        gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_COMPONENT16, width, height);
        this.glFrameBuffer = gl.createFramebuffer();
        if (true && !this.glFrameBuffer) throw new debugError_1.DebugError("can not allocate memory for glFrameBuffer");
        gl.bindFramebuffer(gl.FRAMEBUFFER, this.glFrameBuffer);
        gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, this.texture.getGlTexture(), 0);
        gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.RENDERBUFFER, this.glRenderBuffer);
        var fbStatus = gl.checkFramebufferStatus(gl.FRAMEBUFFER);
        if (true && fbStatus !== gl.FRAMEBUFFER_COMPLETE) {
            throw new debugError_1.DebugError("frame buffer status error: " + fbStatus + " (expected gl.FRAMEBUFFER_COMPLETE(" + gl.FRAMEBUFFER_COMPLETE + "))");
        }
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
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var debugError_1 = __webpack_require__(0);
var frameBuffer_1 = __webpack_require__(41);
var size_1 = __webpack_require__(17);
var isPowerOf2 = function (value) {
    return (value & value - 1) === 0;
};
var TextureFilterBuffer = function () {
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
var Texture = function () {
    function Texture(gl) {
        this.tex = null;
        this.size = new size_1.Size(0, 0);
        this.isPowerOfTwo = false;
        this._texFilterBuff = null;
        if (true && !gl) throw new debugError_1.DebugError("can not create Texture, gl context not passed to constructor, expected: Texture(gl)");
        this.gl = gl;
        if (true) {
            if (!Texture.MAX_TEXTURE_IMAGE_UNITS) Texture.MAX_TEXTURE_IMAGE_UNITS = gl.getParameter(gl.MAX_TEXTURE_IMAGE_UNITS);
        }
        this.tex = gl.createTexture();
        if (true && !this.tex) throw new debugError_1.DebugError("can not allocate memory for texture");
        gl.bindTexture(gl.TEXTURE_2D, this.tex);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, new Uint8Array([0, 255, 0, 255]));
        gl.bindTexture(gl.TEXTURE_2D, this.tex);
        this._texFilterBuff = new TextureFilterBuffer(this);
    }
    Texture.prototype.setImage = function (img, width, height) {
        if (width === void 0) {
            width = 0;
        }
        if (height === void 0) {
            height = 0;
        }
        if (true) {
            if (!(img || width || height)) throw new debugError_1.DebugError("texture.setImage: if image is null, width and height must be specified: tex.setImage(null,w,h)");
        }
        var gl = this.gl;
        if (img) this.size.setWH(img.width, img.height);else this.size.setWH(width, height);
        gl.bindTexture(gl.TEXTURE_2D, this.tex);
        gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 1);
        if (img) {
            gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img);
        } else {
            gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, width, height, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
        }
        this.isPowerOfTwo = img ? isPowerOf2(img.width) && isPowerOf2(img.height) : false;
        if (this.isPowerOfTwo) {
            gl.generateMipmap(gl.TEXTURE_2D);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT);
        } else {
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
        }
        gl.bindTexture(gl.TEXTURE_2D, null);
    };
    Texture.prototype.applyFilters = function (filters, frameBuffer) {
        if (true && frameBuffer === undefined) throw new debugError_1.DebugError("can not apply filters. frameBuffer must be explicitly passed. Pass null if no frame buffer needs to bind after filtering");
        var len = filters.length;
        if (len === 0) return this;
        if (!this._texFilterBuff.buffers.length) this._texFilterBuff.instantiate(this.gl);
        var filter = filters[0];
        var texInfo = [{ texture: this, name: 'texture' }];
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
            if (!name) {
                console.error(this);
                throw new debugError_1.DebugError("can not bind texture: uniform name was not provided");
            }
            if (i > Texture.MAX_TEXTURE_IMAGE_UNITS - 1) {
                throw new debugError_1.DebugError("can not bind texture with index " + i + ". Max supported value by device is " + Texture.MAX_TEXTURE_IMAGE_UNITS);
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
        if (true && gl.checkFramebufferStatus(gl.FRAMEBUFFER) !== gl.FRAMEBUFFER_COMPLETE) throw new debugError_1.DebugError("Texture.GetColorArray() failed!");
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
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var button_1 = __webpack_require__(44);
exports.Button = button_1.Button;
var textField_1 = __webpack_require__(20);
exports.TextField = textField_1.TextField;
var vscroll_1 = __webpack_require__(84);
exports.VScroll = vscroll_1.VScroll;
var checkBox_1 = __webpack_require__(85);
exports.CheckBox = checkBox_1.CheckBox;
var container_1 = __webpack_require__(6);
exports.Container = container_1.Container;
var image_1 = __webpack_require__(29);
exports.Image = image_1.Image;
var rectangle_1 = __webpack_require__(16);
exports.Rectangle = rectangle_1.Rectangle;
var circle_1 = __webpack_require__(86);
exports.Circle = circle_1.Circle;
var ellipse_1 = __webpack_require__(45);
exports.Ellipse = ellipse_1.Ellipse;
var border_1 = __webpack_require__(87);
exports.Border = border_1.Border;
var ninePatchImage_1 = __webpack_require__(88);
exports.NinePatchImage = ninePatchImage_1.NinePatchImage;
var absoluteLayout_1 = __webpack_require__(89);
exports.AbsoluteLayout = absoluteLayout_1.AbsoluteLayout;

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
var container_1 = __webpack_require__(6);
var textField_1 = __webpack_require__(20);
var debugError_1 = __webpack_require__(0);
var Button = function (_super) {
    __extends(Button, _super);
    function Button(game) {
        var _this = _super.call(this, game) || this;
        _this.text = '';
        _this.font = null;
        _this._textField = new textField_1.TextField(game);
        _this.appendChild(_this._textField);
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
        if (this.background) {
            var dx = (this.background.width - this._textField.width) / 2;
            var dy = (this.background.height - this._textField.height) / 2;
            this._textField.pos.setXY(dx, dy);
        }
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
        if (true && !font) throw new debugError_1.DebugError("can not find font with name " + name);
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
        return true;
    };
    return Button;
}(container_1.Container);
exports.Button = Button;

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
var shape_1 = __webpack_require__(28);
var Ellipse = function (_super) {
    __extends(Ellipse, _super);
    function Ellipse() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.radiusX = 10;
        _this.radiusY = 20;
        return _this;
    }
    Ellipse.prototype.draw = function () {
        this.game.renderer.drawEllipse(this);
        return true;
    };
    return Ellipse;
}(shape_1.Shape);
exports.Ellipse = Ellipse;

/***/ }),
/* 46 */
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
/* 47 */
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
var rect_1 = __webpack_require__(1);
var rigidShapes_1 = __webpack_require__(48);
var commonObject_1 = __webpack_require__(12);
var decorators_1 = __webpack_require__(7);
var debugError_1 = __webpack_require__(0);
var TileMap = function (_super) {
    __extends(TileMap, _super);
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
                throw new debugError_1.DebugError("incorrect mapWidth/mapHeight provided. Expected " + expected + " tiles, but " + found + " found (" + mapWidth + "*" + mapHeight + ")");
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
Object.defineProperty(exports, "__esModule", { value: true });
var debugError_1 = __webpack_require__(0);
var Vec2 = function () {
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
var CollisionInfo = function () {
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
var RigidShape = function () {
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
        this.mVelocity = this.mVelocity.add(this.mAcceleration.scale(dt));
        this.move(this.mVelocity.scale(dt));
        this.mAngularVelocity += this.mAngularAcceleration * dt;
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
var RigidCircle = function (_super) {
    __extends(RigidCircle, _super);
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
        } else {
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
                throw new debugError_1.DebugError("collision test error");
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
        } else {
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
var SupportStruct = function () {
    function SupportStruct() {
        this.mSupportPointDist = 0;
    }
    return SupportStruct;
}();
var tmpSupport = new SupportStruct();
var collisionInfoR1 = new CollisionInfo();
var collisionInfoR2 = new CollisionInfo();
var RigidRectangle = function (_super) {
    __extends(RigidRectangle, _super);
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
        } else {
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
                throw new debugError_1.DebugError("collision test error");
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
            if (projection > 0 && projection > tmpSupport.mSupportPointDist) {
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
        while (hasSupport && i < this.mFaceNormal.length) {
            n = this.mFaceNormal[i];
            var dir = n.scale(-1);
            var ptOnEdge = this.mVertex[i];
            otherRect.findSupportPoint(dir, ptOnEdge);
            hasSupport = tmpSupport.mSupportPoint !== null;
            if (hasSupport && tmpSupport.mSupportPointDist < bestDistance) {
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
            } else {
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
                } else {
                    if (bestDistance < otherCir.mRadius) {
                        radiusVec = this.mFaceNormal[nearestEdge].scale(otherCir.mRadius);
                        collisionInfo.setInfo(otherCir.mRadius - bestDistance, this.mFaceNormal[nearestEdge], circ2Pos.subtract(radiusVec));
                    } else {
                        return false;
                    }
                }
            }
        } else {
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
/* 49 */
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
var baseModel_1 = __webpack_require__(11);
var Layer = function (_super) {
    __extends(Layer, _super);
    function Layer(game) {
        var _this = _super.call(this, game) || this;
        _this.type = 'Layer';
        _this.children = [];
        return _this;
    }
    Layer.prototype.revalidate = function () {
        var _this = this;
        this.children.forEach(function (r) {
            r.parent = _this;
        });
    };
    Layer.prototype.findObject = function (query) {
        for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
            var c = _a[_i];
            var possibleItem = c.findObject(query);
            if (possibleItem !== null) return possibleItem;
        }
        return null;
    };
    Layer.prototype.prependChild = function (go) {
        go.parent = this;
        this.children.unshift(go);
        go.onShow();
    };
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
        for (var _i = 0, all_1 = all; _i < all_1.length; _i++) {
            var obj = all_1[_i];
            obj.update(currTime, deltaTime);
        }
    };
    Layer.prototype.render = function () {
        var all = this.children;
        for (var _i = 0, all_2 = all; _i < all_2.length; _i++) {
            var obj = all_2[_i];
            obj.render();
        }
    };
    return Layer;
}(baseModel_1.BaseModel);
exports.Layer = Layer;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var debugError_1 = __webpack_require__(0);
var tween_1 = __webpack_require__(18);
var mat4 = __webpack_require__(13);
var mathEx_1 = __webpack_require__(8);
var rect_1 = __webpack_require__(1);
var point2d_1 = __webpack_require__(3);
var CAMERA_MATRIX_MODE;
(function (CAMERA_MATRIX_MODE) {
    CAMERA_MATRIX_MODE[CAMERA_MATRIX_MODE["MODE_TRANSFORM"] = 0] = "MODE_TRANSFORM";
    CAMERA_MATRIX_MODE[CAMERA_MATRIX_MODE["MODE_IDENTITY"] = 1] = "MODE_IDENTITY";
})(CAMERA_MATRIX_MODE = exports.CAMERA_MATRIX_MODE || (exports.CAMERA_MATRIX_MODE = {}));
var Camera = function () {
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
        if (true && gameObject === undefined) throw new debugError_1.DebugError("Camera:followTo(gameObject) - gameObject not provided");
        this.objFollowTo = gameObject;
        this.revalidate();
    };
    Camera.prototype.update = function (currTime, delta) {
        this.scene = this.game.getCurrScene();
        if (!this.scene) return;
        var tileWidth = this.scene.tileMap.spriteSheet ? this.scene.tileMap.spriteSheet._frameWidth : 0;
        var tileHeight = this.scene.tileMap.spriteSheet ? this.scene.tileMap.spriteSheet._frameHeight : 0;
        var w = this.game.width;
        var h = this.game.height;
        var wDiv2 = w / 2;
        var hDiv2 = h / 2;
        var wScaled = this.getRectScaled().width;
        var gameObject = this.objFollowTo;
        if (gameObject) {
            if (gameObject['_lastDirection'] === 'Right') this.cameraPosCorrection.max.x = wScaled / 3;
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
                var r1 = mathEx_1.MathEx.random(-amplitude / 2, amplitude / 2);
                var r2 = mathEx_1.MathEx.random(-amplitude / 2, amplitude / 2);
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
        this.game.renderer.translate(-this.game.width / 2, -this.game.height / 2);
        this.game.renderer.translate(-this.pos.x, -this.pos.y);
        if (this.cameraShakeTween !== null) this.game.renderer.translate(this.cameraShakeTween.getTarget().point.x, this.cameraShakeTween.getTarget().point.y);
    };
    Camera.prototype.screenToWorld = function (p) {
        var mScale = mat4.makeScale(this.scale.x, this.scale.y, 1);
        var point2d = mathEx_1.MathEx.unProject(p, this.game.width, this.game.height, mScale);
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
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var webAudioContext_1 = __webpack_require__(108);
var htmlAudioContext_1 = __webpack_require__(110);
var fakeAudioContext_1 = __webpack_require__(111);
var audioNodeSet_1 = __webpack_require__(112);
var tween_1 = __webpack_require__(18);
var AudioPlayer = function () {
    function AudioPlayer(game) {
        this.game = game;
        this.tweens = [];
        if (webAudioContext_1.WebAudioContext.isAcceptable()) {
            this.contextClass = webAudioContext_1.WebAudioContext;
        } else if (htmlAudioContext_1.HtmlAudioContext.isAcceptable()) {
            this.contextClass = htmlAudioContext_1.HtmlAudioContext;
        } else {
            this.contextClass = fakeAudioContext_1.FakeAudioContext;
        }
        this.audioNodeSet = new audioNodeSet_1.AudioNodeSet(game, this.contextClass, AudioPlayer.DEFAULT_AUDIO_NODES_COUNT);
    }
    AudioPlayer.prototype.loadSound = function (url, progress, callback) {
        new this.contextClass(this.game).load(url, progress, callback);
    };
    AudioPlayer.prototype.play = function (sound) {
        var node = this.audioNodeSet.getFreeNode();
        if (true && !node) {
            console.log('no free node to play sound');
        }
        if (!node) return;
        node.play(sound.resourcePath, sound.loop);
    };
    AudioPlayer.prototype.stop = function (sound) {
        var node = this.audioNodeSet.getNodeBySound(sound);
        if (!node) return;
        node.stop();
    };
    AudioPlayer.prototype.stopAll = function () {
        this.audioNodeSet.stopAll();
    };
    AudioPlayer.prototype.pauseAll = function () {
        this.audioNodeSet.pauseAll();
    };
    AudioPlayer.prototype.resumeAll = function () {
        this.audioNodeSet.resumeAll();
    };
    AudioPlayer.prototype.setGain = function (sound, val, time) {
        var _this = this;
        if (time === void 0) {
            time = 0;
        }
        var node = this.audioNodeSet.getNodeBySound(sound);
        if (!node) return;
        if (time) {
            var tween_2 = new tween_1.Tween({
                target: sound,
                to: { _gain: val },
                time: time,
                progress: function (progressObj) {
                    node.setGain(progressObj._gain);
                },
                complete: function () {
                    _this.tweens.remove(tween_2);
                }
            });
            this.tweens.push(tween_2);
        } else {
            sound._gain = val;
            node.setGain(sound._gain);
        }
    };
    AudioPlayer.prototype.update = function (time, delta) {
        this.tweens.forEach(function (t) {
            t.update(time);
        });
    };
    AudioPlayer.cache = {};
    AudioPlayer.DEFAULT_AUDIO_NODES_COUNT = 6;
    return AudioPlayer;
}();
exports.AudioPlayer = AudioPlayer;

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var game_1 = __webpack_require__(53);
var gameProps_1 = __webpack_require__(115);
var repository_1 = __webpack_require__(116);
var allBehaviours = __webpack_require__(117);
if (true && gameProps_1.gameProps.startSceneId === undefined) throw 'start scene not specified';
var game = new game_1.Game();
game.fromJSON(gameProps_1.gameProps);
game.repository.setDescriptions(repository_1.repository);
game.repository.allBehaviours = allBehaviours;
if (true) {
    game.repository.embeddedResources = __webpack_require__(121).embeddedResources;
}
var startScene = game.repository.getObject(gameProps_1.gameProps.startSceneId, 'Scene');
game.runScene(startScene);

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
var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var gameObject3d_1 = __webpack_require__(54);
__webpack_require__(65);
var baseAbstractBehaviour_1 = __webpack_require__(25);
var rendererFactory_1 = __webpack_require__(66);
var repository_1 = __webpack_require__(93);
var mouse_1 = __webpack_require__(27);
var keyboard_1 = __webpack_require__(104);
var gamePad_1 = __webpack_require__(105);
var decorators_1 = __webpack_require__(7);
var commonObject_1 = __webpack_require__(12);
var camera_1 = __webpack_require__(50);
var consts_1 = __webpack_require__(46);
var point2d_1 = __webpack_require__(3);
var lightArray_1 = __webpack_require__(37);
var uiBuilder_1 = __webpack_require__(106);
var colliderEngine_1 = __webpack_require__(107);
var debugError_1 = __webpack_require__(0);
var audioPlayer_1 = __webpack_require__(51);
var earClippingTriangulator_1 = __webpack_require__(114);
var Game = function (_super) {
    __extends(Game, _super);
    function Game() {
        var _this = _super.call(this) || this;
        _this._lastTime = 0;
        _this._currTime = 0;
        _this._deltaTime = 0;
        _this._currentScene = null;
        _this._running = false;
        _this._destroyed = false;
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
        _this._cnt = 0;
        _this['GameObject3d'] = gameObject3d_1.GameObject3d;
        _this.repository = new repository_1.Repository(_this);
        _this.mouse = new mouse_1.Mouse(_this);
        _this.keyboard = new keyboard_1.Keyboard(_this);
        _this.keyboard.listenTo();
        _this.gamePad = new gamePad_1.GamePad(_this);
        _this.collider = new colliderEngine_1.ColliderEngine(_this);
        _this.camera = new camera_1.Camera(_this);
        _this.lightArray = new lightArray_1.LightArray(_this);
        _this.uiBuilder = new uiBuilder_1.UIBuilder(_this);
        _this.audioPlayer = new audioPlayer_1.AudioPlayer(_this);
        if (true) window['game'] = _this;
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
        if (this._cnt > 10) throw new debugError_1.DebugError('too many logs');
    };
    Game.prototype.runScene = function (scene) {
        var _this = this;
        this._currentScene = scene;
        if (true && !this._revalidated) throw new debugError_1.DebugError("game.revalidate() method not invoked. Invoke game.fromJSON(gameParams) or call game.revalidate() method directly");
        if (scene.prepared) {
            return;
        }
        if (true) {
            var allBehaviours_1 = this.repository.allBehaviours;
            var sceneBhScriptName = "" + scene.name[0].toUpperCase() + scene.name.substr(1) + "Behaviour";
            var BhClass = allBehaviours_1[sceneBhScriptName];
            if (sceneBhScriptName) scene.setIndividualBehaviour(new BhClass());
            scene.layers.forEach(function (l) {
                l.children.forEach(function (go) {
                    go.setCommonBehaviour();
                    var scriptName = go.name && "" + go.name[0].toUpperCase() + go.name.substr(1) + "Behaviour";
                    var BhClass = allBehaviours_1[scriptName];
                    if (BhClass && !go.getIndividualBehaviour()) go.setIndividualBehaviour(new BhClass());
                });
            });
        }
        scene.preload(function () {
            scene.onShow();
            scene.prepared = true;
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
        if (this._destroyed) return;
        this._lastTime = this._currTime;
        this._currTime = Date.now();
        var currTimeCopy = this._currTime;
        if (!this._lastTime) this._lastTime = this._currTime;
        this._deltaTime = this._currTime - this._lastTime;
        if (true) {
            this.fps = ~~(1000 / this._deltaTime);
            var renderError = this.renderer.getError();
            if (renderError) throw new debugError_1.DebugError("render error with code " + renderError);
        }
        var dTime = Math.min(this._deltaTime, Game_1.UPDATE_TIME_RATE);
        var numOfLoops = ~~(this._deltaTime / Game_1.UPDATE_TIME_RATE) || 1;
        var currTime = this._currTime - numOfLoops * Game_1.UPDATE_TIME_RATE;
        var loopCnt = 0;
        do {
            this._currentScene && this._currentScene.update(currTime, dTime);
            this.collider.collisionArcade();
            this.keyboard.update();
            this.gamePad.update();
            this.audioPlayer.update(currTime, dTime);
            currTime += Game_1.UPDATE_TIME_RATE;
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
        this._destroyed = true;
        var delta = 16;
        var lastTimeout = setTimeout(function () {}, 0);
        var lastInterval = setInterval(function () {}, 0);
        var lastMaxVal = Math.max(lastTimeout, lastInterval) + delta;
        for (var i = 0; i < lastMaxVal; i++) {
            clearInterval(i);
            clearTimeout(i);
        }
        this.keyboard.destroy();
        this.mouse.destroy();
        if (this.renderer) this.renderer.cancelFullScreen();
        baseAbstractBehaviour_1.BaseAbstractBehaviour.destroyAll();
        var tid = setTimeout(function () {
            if (_this.renderer) _this.renderer.destroy();
        }, 200);
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
        pos: true,
        audioPlayer: true
    })], Game);
    return Game;
}(commonObject_1.CommonObject);
exports.Game = Game;
window.E = earClippingTriangulator_1.EarClippingTriangulator;

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
var gameObject_1 = __webpack_require__(21);
var GameObject3d = function (_super) {
    __extends(GameObject3d, _super);
    function GameObject3d() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.angleY = 0;
        return _this;
    }
    GameObject3d.prototype.isNeedAdditionalTransform = function () {
        return !(this.angle === 0 && this.angleY === 0 && this.scale.equal(1));
    };
    GameObject3d.prototype.doAdditionalTransform = function () {
        this.game.renderer.rotateY(this.angleY);
    };
    GameObject3d.prototype.draw = function () {
        this.game.renderer.drawModel(this);
        return true;
    };
    return GameObject3d;
}(gameObject_1.GameObject);
exports.GameObject3d = GameObject3d;

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var color_1 = __webpack_require__(2);
var ShaderMaterial = function () {
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
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var Timer = function () {
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
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var Easing = function () {
    function Easing() {}
    Easing.linear = function (t, b, c, d) {
        return c * t / d + b;
    };
    Easing.easeInQuad = function (t, b, c, d) {
        t /= d;
        return c * t * t + b;
    };
    Easing.easeOutQuad = function (t, b, c, d) {
        t /= d;
        return -c * t * (t - 2) + b;
    };
    Easing.easeInOutQuad = function (t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    };
    Easing.easeInCubic = function (t, b, c, d) {
        t /= d;
        return c * t * t * t + b;
    };
    Easing.easeOutCubic = function (t, b, c, d) {
        t /= d;
        t--;
        return c * (t * t * t + 1) + b;
    };
    Easing.easeInOutCubic = function (t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t * t + b;
        t -= 2;
        return c / 2 * (t * t * t + 2) + b;
    };
    Easing.easeInQuart = function (t, b, c, d) {
        t /= d;
        return c * t * t * t * t + b;
    };
    Easing.easeOutQuart = function (t, b, c, d) {
        t /= d;
        t--;
        return -c * (t * t * t * t - 1) + b;
    };
    Easing.easeInOutQuart = function (t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t * t * t + b;
        t -= 2;
        return -c / 2 * (t * t * t * t - 2) + b;
    };
    Easing.easeInQuint = function (t, b, c, d) {
        t /= d;
        return c * t * t * t * t * t + b;
    };
    Easing.easeOutQuint = function (t, b, c, d) {
        t /= d;
        t--;
        return c * (t * t * t * t * t + 1) + b;
    };
    Easing.easeInOutQuint = function (t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t * t * t * t + b;
        t -= 2;
        return c / 2 * (t * t * t * t * t + 2) + b;
    };
    Easing.easeInSine = function (t, b, c, d) {
        return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
    };
    Easing.easeOutSine = function (t, b, c, d) {
        return c * Math.sin(t / d * (Math.PI / 2)) + b;
    };
    Easing.easeInOutSine = function (t, b, c, d) {
        return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
    };
    Easing.easeInExpo = function (t, b, c, d) {
        return c * Math.pow(2, 10 * (t / d - 1)) + b;
    };
    Easing.easeOutExpo = function (t, b, c, d) {
        return c * (-Math.pow(2, -10 * t / d) + 1) + b;
    };
    Easing.easeInOutExpo = function (t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
        t--;
        return c / 2 * (-Math.pow(2, -10 * t) + 2) + b;
    };
    Easing.easeInCirc = function (t, b, c, d) {
        t /= d;
        return -c * (Math.sqrt(1 - t * t) - 1) + b;
    };
    Easing.easeOutCirc = function (t, b, c, d) {
        t /= d;
        t--;
        return c * Math.sqrt(1 - t * t) + b;
    };
    Easing.easeInOutCirc = function (t, b, c, d) {
        t /= d / 2;
        if (t < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
        t -= 2;
        return c / 2 * (Math.sqrt(1 - t * t) + 1) + b;
    };
    Easing.easeInElastic = function (t, b, c, d) {
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
    Easing.easeOutElastic = function (t, b, c, d) {
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
    Easing.easeInOutElastic = function (t, b, c, d) {
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
    Easing.easeInBack = function (t, b, c, d) {
        var s = 1.70158;
        return c * (t /= d) * t * ((s + 1) * t - s) + b;
    };
    Easing.easeOutBack = function (t, b, c, d) {
        var s = 1.70158;
        return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
    };
    Easing.easeInOutBack = function (t, b, c, d) {
        var s = 1.70158;
        if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= 1.525) + 1) * t - s)) + b;
        return c / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b;
    };
    Easing.easeInBounce = function (t, b, c, d) {
        return c - Easing.easeOutBounce(d - t, 0, c, d) + b;
    };
    Easing.easeOutBounce = function (t, b, c, d) {
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
    Easing.easeInOutBounce = function (t, b, c, d) {
        if (t < d / 2) return Easing.easeInBounce(t * 2, 0, c, d) * .5 + b;else return Easing.easeOutBounce(t * 2 - d, 0, c, d) * .5 + c * .5 + b;
    };
    return Easing;
}();
exports.Easing = Easing;

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var tween_1 = __webpack_require__(18);
var TweenMovie = function () {
    function TweenMovie(game) {
        this.game = game;
        this._tweensInMovie = [];
        this._startedTime = null;
        this._completed = false;
        this._loop = false;
        this._onComplete = null;
    }
    TweenMovie.prototype.tween = function (startTime, desc) {
        var tween = new tween_1.Tween(desc);
        this._tweensInMovie.push({
            startTime: startTime,
            tween: tween
        });
        return this;
    };
    TweenMovie.prototype.loop = function (val) {
        this._loop = val;
        return this;
    };
    TweenMovie.prototype.finish = function (fn) {
        this._onComplete = fn;
        return this;
    };
    TweenMovie.prototype.play = function () {
        this.game.getCurrScene().addTweenMovie(this);
    };
    TweenMovie.prototype.update = function (currTime) {
        if (this._completed) return;
        if (!this._startedTime) this._startedTime = currTime;
        var deltaTime = currTime - this._startedTime;
        var allCompleted = true;
        this._tweensInMovie.forEach(function (item) {
            if (deltaTime > item.startTime) {
                if (deltaTime < item.startTime + item.tween.getTweenTime()) {
                    item.tween.update(currTime);
                } else {
                    item.tween.complete();
                }
            }
            if (!item.tween.isCompleted()) allCompleted = false;
        });
        if (allCompleted) {
            if (this._loop) {
                this.reset();
            } else {
                this._completed = true;
                this._onComplete && this._onComplete();
            }
        }
    };
    ;
    TweenMovie.prototype.isCompleted = function () {
        return this._completed;
    };
    TweenMovie.prototype.reset = function () {
        this._startedTime = null;
        this._completed = false;
        this._tweensInMovie.forEach(function (item) {
            item.tween.reset();
        });
        return this;
    };
    return TweenMovie;
}();
exports.TweenMovie = TweenMovie;

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var draggable_1 = __webpack_require__(60);
exports.Draggable = draggable_1.DraggableBehaviour;
var control4Dir_1 = __webpack_require__(61);
exports.Control4Dir = control4Dir_1.Control4Dir;
var control2Dir_1 = __webpack_require__(63);
exports.Control2Dir = control2Dir_1.Control2Dir;

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
var baseAbstractBehaviour_1 = __webpack_require__(25);
var DraggableBehaviour = function (_super) {
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
            gameObject.pos.y = e.screenY - point.mY;
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
var move4Dir_1 = __webpack_require__(62);
var Parameters = function () {
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
var Control4Dir = function (_super) {
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
var moveable_1 = __webpack_require__(33);
var Move4Dir = function (_super) {
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
        this.gameObject.rigidBody.mVelocity.x = 0;
        this.gameObject.rigidBody.mVelocity.y = 0;
    };
    Move4Dir.DIRS = ['Left', 'Right', 'Up', 'Down'];
    return Move4Dir;
}(moveable_1.Moveable);
exports.Move4Dir = Move4Dir;

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
var move2Dir_1 = __webpack_require__(64);
var Parameters = function () {
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
var Control2Dir = function (_super) {
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
/* 64 */
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
var moveable_1 = __webpack_require__(33);
var Move2Dir = function (_super) {
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
/* 65 */
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
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var webGlRenderer_1 = __webpack_require__(67);
var debugError_1 = __webpack_require__(0);
var RendererFactory = function () {
    function RendererFactory() {}
    RendererFactory.getRenderer = function (game) {
        if (!game) throw new debugError_1.DebugError("RendererFactory::getRenderer: game param not specified");
        return new webGlRenderer_1.WebGlRenderer(game);
    };
    return RendererFactory;
}();
exports.RendererFactory = RendererFactory;

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
var debugError_1 = __webpack_require__(0);
var spriteRectLightDrawer_1 = __webpack_require__(68);
var spriteRectDrawer_1 = __webpack_require__(19);
var tiledSpriteRectDrawer_1 = __webpack_require__(72);
var abstractDrawer_1 = __webpack_require__(9);
var lineDrawer_1 = __webpack_require__(73);
var shapeDrawer_1 = __webpack_require__(75);
var frameBuffer_1 = __webpack_require__(41);
var matrixStack_1 = __webpack_require__(76);
var mat4 = __webpack_require__(13);
var texture_1 = __webpack_require__(42);
var addBlendDrawer_1 = __webpack_require__(77);
var rect_1 = __webpack_require__(1);
var abstractCanvasRenderer_1 = __webpack_require__(81);
var size_1 = __webpack_require__(17);
var modelDrawer_1 = __webpack_require__(92);
var shapeDrawer_frag_1 = __webpack_require__(40);
var getCtx = function (el) {
    return el.getContext("webgl", { alpha: false }) || el.getContext('experimental-webgl', { alpha: false }) || el.getContext('webkit-3d', { alpha: false }) || el.getContext('moz-webgl', { alpha: false });
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
var FRAME_TO_SCREEN_MATRIX = new matrixStack_1.MatrixStack().scale(1, -1, 1).translate(-1, -1, 0).scale(2, 2, 1).getCurrentMatrix();
var WebGlRenderer = function (_super) {
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
        this.nullTexture = new texture_1.Texture(gl);
        this.shapeDrawer = new shapeDrawer_1.ShapeDrawer(gl);
        this.spriteRectDrawer = new spriteRectDrawer_1.SpriteRectDrawer(gl);
        this.spriteRectLightDrawer = new spriteRectLightDrawer_1.SpriteRectLightDrawer(gl);
        this.tiledSpriteRectDrawer = new tiledSpriteRectDrawer_1.TiledSpriteRectDrawer(gl);
        this.lineDrawer = new lineDrawer_1.LineDrawer(gl);
        this.modelDrawer = new modelDrawer_1.ModelDrawer(gl);
        this.addBlendDrawer = new addBlendDrawer_1.AddBlendDrawer(gl);
        this.frameBuffer = new frameBuffer_1.FrameBuffer(gl, this.game.width, this.game.height);
        gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
        gl.enable(gl.BLEND);
    };
    WebGlRenderer.prototype.draw = function (renderable) {
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
            acceptLight: renderable.acceptLight,
            alpha: renderable.alpha
        };
        this.drawTextureInfo(texInfo, drawableInfo, renderable.shaderMaterial, renderable.getFrameRect(), rect_1.Rect.fromPool().setXYWH(0, 0, renderable.getFrameRect().width, renderable.getFrameRect().height));
    };
    WebGlRenderer.prototype.drawImage = function (img) {
        var texturePath = img.getDefaultResourcePath();
        if (true && !this.renderableCache[texturePath]) {
            throw new debugError_1.DebugError("can not find texture with path " + texturePath);
        }
        var texture = this.renderableCache[texturePath].texture;
        texture = texture.applyFilters(img.filters, this.frameBuffer);
        var texInfo = [{ texture: texture, name: 'texture' }];
        var rw = img.getRect().width;
        var rh = img.getRect().height;
        var maxSize = Math.max(rw, rh);
        var offsetX = 0,
            offsetY = 0;
        var uniforms = {};
        if (maxSize == rw) {
            uniforms['u_width'] = 1;
            uniforms['u_height'] = rh / rw;
            offsetY = (maxSize - rh) / 2;
            uniforms['u_rectOffsetLeft'] = 0;
            uniforms['u_rectOffsetTop'] = offsetY / maxSize;
        } else {
            uniforms['u_height'] = 1;
            uniforms['u_width'] = rw / rh;
            offsetX = (maxSize - rw) / 2;
            uniforms['u_rectOffsetLeft'] = offsetX / maxSize;
            uniforms['u_rectOffsetTop'] = 0;
        }
        uniforms['u_vertexMatrix'] = makePositionMatrix(rect_1.Rect.fromPool().setXYWH(-offsetX, -offsetY, maxSize, maxSize), size_1.Size.fromPool().setWH(this.game.width, this.game.height));
        uniforms['u_lineWidth'] = Math.min(img.lineWidth / maxSize, 1);
        uniforms['u_borderRadius'] = Math.min(img.borderRadius / maxSize, 1);
        uniforms['u_color'] = img.color.asGL();
        uniforms['u_fillColor'] = img.fillColor.asGL();
        uniforms['u_shapeType'] = shapeDrawer_frag_1.SHAPE_TYPE.RECT;
        uniforms['u_fillType'] = shapeDrawer_frag_1.FILL_TYPE.TEXTURE;
        uniforms['u_texRect'] = [img.srcRect.x / texture.getSize().width, img.srcRect.y / texture.getSize().height, img.srcRect.width / texture.getSize().width, img.srcRect.height / texture.getSize().height];
        this.shapeDrawer.draw(texInfo, uniforms, null);
    };
    WebGlRenderer.prototype.drawModel = function (g3d) {
        this.modelDrawer.bindModel(g3d);
        this.modelDrawer.bind();
        matrixStack.scale(1, -1, 1);
        var matrix1 = matrixStack.getCurrentMatrix();
        var zToWMatrix = mat4.makeZToWMatrix(1);
        var projectionMatrix = mat4.ortho(0, this.game.width, 0, this.game.height, -SCENE_DEPTH, SCENE_DEPTH);
        var matrix2 = mat4.matrixMultiply(projectionMatrix, zToWMatrix);
        var uniforms = {
            u_modelMatrix: matrix1,
            u_projectionMatrix: matrix2,
            u_alpha: 1
        };
        var texInfo = [{ texture: g3d.texture, name: 'u_texture' }];
        this.gl.enable(this.gl.DEPTH_TEST);
        this.modelDrawer.draw(texInfo, uniforms);
        this.modelDrawer.unbind();
        this.gl.disable(this.gl.DEPTH_TEST);
    };
    ;
    WebGlRenderer.prototype.drawTextureInfo = function (texInfo, drawableInfo, shaderMaterial, srcRect, dstRect) {
        var scene = this.game.getCurrScene();
        var drawer;
        var uniforms = {
            u_textureMatrix: makeTextureMatrix(srcRect, texInfo[0].texture.getSize()),
            u_vertexMatrix: makePositionMatrix(dstRect, size_1.Size.fromPool().setWH(this.game.width, this.game.height)),
            u_alpha: drawableInfo.alpha
        };
        if (drawableInfo.blendMode === 'add') drawer = this.addBlendDrawer;else if (drawableInfo.acceptLight || texInfo.length > 1) {
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
        var texture = this.renderableCache[texturePath].texture;
        if (true && !texture) {
            if (!texturePath) throw new debugError_1.DebugError("no texture path provided");else throw new debugError_1.DebugError("can not find texture with path " + texturePath);
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
    WebGlRenderer.prototype.drawRectangle = function (rectangle) {
        var rw = rectangle.width;
        var rh = rectangle.height;
        var maxSize = Math.max(rw, rh);
        var offsetX = 0,
            offsetY = 0;
        var uniforms = {};
        if (maxSize == rw) {
            uniforms['u_width'] = 1;
            uniforms['u_height'] = rh / rw;
            offsetY = (maxSize - rh) / 2;
        } else {
            uniforms['u_height'] = 1;
            uniforms['u_width'] = rw / rh;
            offsetX = (maxSize - rw) / 2;
        }
        uniforms['u_vertexMatrix'] = makePositionMatrix(rect_1.Rect.fromPool().setXYWH(-offsetX, -offsetY, maxSize, maxSize), size_1.Size.fromPool().setWH(this.game.width, this.game.height));
        uniforms['u_lineWidth'] = Math.min(rectangle.lineWidth / maxSize, 1);
        uniforms['u_borderRadius'] = Math.min(rectangle.borderRadius / maxSize, 1);
        uniforms['u_color'] = rectangle.color.asGL();
        uniforms['u_fillColor'] = rectangle.fillColor.asGL();
        uniforms['u_shapeType'] = shapeDrawer_frag_1.SHAPE_TYPE.RECT;
        uniforms['u_fillType'] = shapeDrawer_frag_1.FILL_TYPE.COLOR;
        var texInfo = [{ texture: this.nullTexture, name: 'texture' }];
        this.shapeDrawer.draw(texInfo, uniforms, null);
    };
    WebGlRenderer.prototype.drawLine = function (x1, y1, x2, y2, color) {
        var dx = x2 - x1,
            dy = y2 - y1;
        var uniforms = {};
        uniforms.u_vertexMatrix = makePositionMatrix(rect_1.Rect.fromPool().setXYWH(x1, y1, dx, dy), size_1.Size.fromPool().setWH(this.game.width, this.game.height));
        uniforms.u_rgba = color.asGL();
        this.lineDrawer.draw(null, uniforms, null);
    };
    WebGlRenderer.prototype.drawEllipse = function (ellipse) {
        var maxR = Math.max(ellipse.radiusX, ellipse.radiusY);
        var maxR2 = maxR * 2;
        var uniforms = {};
        uniforms['u_vertexMatrix'] = makePositionMatrix(rect_1.Rect.fromPool().setXYWH(ellipse.pos.x, ellipse.pos.y, maxR2, maxR2), size_1.Size.fromPool().setWH(this.game.width, this.game.height));
        uniforms['u_lineWidth'] = Math.min(ellipse.lineWidth / maxR, 1);
        if (maxR == ellipse.radiusX) {
            uniforms['u_rx'] = 0.5;
            uniforms['u_ry'] = ellipse.radiusY / ellipse.radiusX * 0.5;
        } else {
            uniforms['u_ry'] = 0.5;
            uniforms['u_rx'] = ellipse.radiusX / ellipse.radiusY * 0.5;
        }
        uniforms['u_color'] = ellipse.color.asGL();
        uniforms['u_fillColor'] = ellipse.fillColor.asGL();
        uniforms['u_shapeType'] = shapeDrawer_frag_1.SHAPE_TYPE.ELLIPSE;
        uniforms['u_fillType'] = shapeDrawer_frag_1.FILL_TYPE.COLOR;
        var texInfo = [{ texture: this.nullTexture, name: 'texture' }];
        this.shapeDrawer.draw(texInfo, uniforms, null);
    };
    WebGlRenderer.prototype.setAlpha = function (a) {
        if (true) throw new debugError_1.DebugError('not implemented');
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
        if (this.renderableCache[resourcePath]) {
            onLoad();
            return;
        }
        var img = new window.Image();
        var resource = this.getResource(resourcePath);
        if (true && !resource) throw new debugError_1.DebugError("can not find resource with path " + resourcePath);
        img.src = resource;
        img.onload = function () {
            var texture = new texture_1.Texture(_this.gl);
            texture.setImage(img);
            _this.renderableCache[resourcePath] = { texture: texture, size: texture.size, name: undefined };
            onLoad();
        };
        if (true) {
            img.onerror = function () {
                throw new debugError_1.DebugError("Resource loading error: can not load resource \"" + resourcePath + "\"");
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
var spriteRectDrawer_1 = __webpack_require__(19);
var texShaderGenerator_1 = __webpack_require__(15);
var shaderProgram_1 = __webpack_require__(4);
var shaderProgramUtils_1 = __webpack_require__(5);
var lightArray_1 = __webpack_require__(37);
var SpriteRectLightDrawer = function (_super) {
    __extends(SpriteRectLightDrawer, _super);
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
}(spriteRectDrawer_1.SpriteRectDrawer);
exports.SpriteRectLightDrawer = SpriteRectLightDrawer;

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var debugError_1 = __webpack_require__(0);
var VertexBuffer = function () {
    function VertexBuffer(gl) {
        this.bufferItemSize = 0;
        this.bufferItemType = 0;
        this.dataLength = 0;
        if (true && !gl) throw new debugError_1.DebugError("can not create VertexBuffer, gl context not passed to constructor, expected: VertexBuffer(gl)");
        this.gl = gl;
        this.buffer = gl.createBuffer();
        if (true && !this.buffer) throw new debugError_1.DebugError("can not allocate memory for vertex buffer");
    }
    VertexBuffer.prototype.setData = function (bufferData, itemType, itemSize) {
        if (true) {
            if (!bufferData) throw new debugError_1.DebugError('can not set data to buffer: bufferData not specified');
            if (!itemType) throw new debugError_1.DebugError('can not set data to buffer: itemType not specified');
            if (!itemSize) throw new debugError_1.DebugError('can not set data to buffer: itemSize not specified');
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
        if (true && !attrName) throw new debugError_1.DebugError("attrName not provided");
        this.attrName = attrName;
    };
    VertexBuffer.prototype.bind = function (program) {
        if (true && !program) throw new debugError_1.DebugError("can not bind VertexBuffer, program not specified");
        if (true && !this.attrName) throw new debugError_1.DebugError("can not bind VertexBuffer, attribute name not specified");
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
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var debugError_1 = __webpack_require__(0);
var IndexBuffer = function () {
    function IndexBuffer(gl) {
        if (true && !gl) throw new debugError_1.DebugError("can not create IndexBuffer, gl context not passed to constructor, expected: IndexBuffer(gl)");
        this.gl = gl;
        this.buffer = gl.createBuffer();
        if (true && !this.buffer) throw new debugError_1.DebugError("can not allocate memory for index buffer");
        this.dataLength = null;
    }
    IndexBuffer.prototype.setData = function (bufferData) {
        if (true) {
            if (!bufferData) throw new debugError_1.DebugError('can not set data to buffer: bufferData not specified');
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
var point2d_1 = __webpack_require__(3);
var abstractLight_1 = __webpack_require__(38);
var PointLight = function (_super) {
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
var plane_1 = __webpack_require__(26);
var shaderProgram_1 = __webpack_require__(4);
var bufferInfo_1 = __webpack_require__(14);
var abstractDrawer_1 = __webpack_require__(9);
var shaderProgramUtils_1 = __webpack_require__(5);
var texShaderGenerator_1 = __webpack_require__(15);
var TiledSpriteRectDrawer = function (_super) {
    __extends(TiledSpriteRectDrawer, _super);
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
}(abstractDrawer_1.AbstractDrawer);
exports.TiledSpriteRectDrawer = TiledSpriteRectDrawer;

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
var line_1 = __webpack_require__(74);
var shaderProgram_1 = __webpack_require__(4);
var bufferInfo_1 = __webpack_require__(14);
var abstractDrawer_1 = __webpack_require__(9);
var colorShaderGenerator_1 = __webpack_require__(39);
var LineDrawer = function (_super) {
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
var abstractPrimitive_1 = __webpack_require__(35);
var Line = function (_super) {
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
var shaderProgram_1 = __webpack_require__(4);
var abstractDrawer_1 = __webpack_require__(9);
var bufferInfo_1 = __webpack_require__(14);
var colorShaderGenerator_1 = __webpack_require__(39);
var plane_1 = __webpack_require__(26);
var shaderProgramUtils_1 = __webpack_require__(5);
var shapeDrawer_frag_1 = __webpack_require__(40);
var ShapeDrawer = function (_super) {
    __extends(ShapeDrawer, _super);
    function ShapeDrawer(gl) {
        var _this = _super.call(this, gl) || this;
        var gen = new colorShaderGenerator_1.ColorShaderGenerator();
        gen.addVarying(shaderProgramUtils_1.GL_TYPE.FLOAT_VEC4, 'v_position');
        gen.setVertexMainFn("\n            void main(){\n                v_position = a_position;\n                gl_Position = u_vertexMatrix * a_position;   \n            }\n        ");
        _this.u_lineWidth = gen.addFragmentUniform(shaderProgramUtils_1.GL_TYPE.FLOAT, 'u_lineWidth');
        _this.u_rx = gen.addFragmentUniform(shaderProgramUtils_1.GL_TYPE.FLOAT, 'u_rx');
        _this.u_ry = gen.addFragmentUniform(shaderProgramUtils_1.GL_TYPE.FLOAT, 'u_ry');
        _this.u_width = gen.addFragmentUniform(shaderProgramUtils_1.GL_TYPE.FLOAT, 'u_width');
        _this.u_height = gen.addFragmentUniform(shaderProgramUtils_1.GL_TYPE.FLOAT, 'u_height');
        _this.u_rectOffsetTop = gen.addFragmentUniform(shaderProgramUtils_1.GL_TYPE.FLOAT, 'u_rectOffsetTop');
        _this.u_rectOffsetLeft = gen.addFragmentUniform(shaderProgramUtils_1.GL_TYPE.FLOAT, 'u_rectOffsetLeft');
        _this.u_borderRadius = gen.addFragmentUniform(shaderProgramUtils_1.GL_TYPE.FLOAT, 'u_borderRadius');
        _this.u_color = gen.addFragmentUniform(shaderProgramUtils_1.GL_TYPE.FLOAT_VEC4, 'u_color');
        _this.u_fillColor = gen.addFragmentUniform(shaderProgramUtils_1.GL_TYPE.FLOAT_VEC4, 'u_fillColor');
        _this.u_texRect = gen.addFragmentUniform(shaderProgramUtils_1.GL_TYPE.FLOAT_VEC4, 'u_texRect');
        gen.addFragmentUniform(shaderProgramUtils_1.GL_TYPE.SAMPLER_2D, 'texture');
        _this.u_shapeType = gen.addFragmentUniform(shaderProgramUtils_1.GL_TYPE.INT, 'u_shapeType');
        _this.u_fillType = gen.addFragmentUniform(shaderProgramUtils_1.GL_TYPE.INT, 'u_fillType');
        gen.setFragmentMainFn(shapeDrawer_frag_1.fragmentSource);
        _this.program = new shaderProgram_1.ShaderProgram(gl, gen.getVertexSource(), gen.getFragmentSource());
        _this.primitive = new plane_1.Plane();
        _this.bufferInfo = new bufferInfo_1.BufferInfo(gl, {
            posVertexInfo: { array: _this.primitive.vertexArr, type: gl.FLOAT, size: 2, attrName: 'a_position' },
            posIndexInfo: { array: _this.primitive.indexArr },
            drawMethod: _this.gl.TRIANGLE_STRIP
        });
        return _this;
    }
    return ShapeDrawer;
}(abstractDrawer_1.AbstractDrawer);
exports.ShapeDrawer = ShapeDrawer;

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var mat4 = __webpack_require__(13);
var MatrixStack = function () {
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
}();
exports.MatrixStack = MatrixStack;

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
var abstractBlendDrawer_1 = __webpack_require__(78);
var AddBlendDrawer = function (_super) {
    __extends(AddBlendDrawer, _super);
    function AddBlendDrawer(gl) {
        return _super.call(this, gl) || this;
    }
    AddBlendDrawer.prototype.prepare = function (programGen) {
        programGen.setFragmentMainFn("\n            void main(){\n                vec4 srcColor =  texture2D(texture, v_texCoord)*2.0;\n                srcColor.a *= u_alpha;\n                vec4 destColor = texture2D(destTexture, v_destTexCoord.xy);\n                vec4 res = min(srcColor + destColor,vec4(1.0));\n                gl_FragColor = res;\n            }\n        ");
    };
    return AddBlendDrawer;
}(abstractBlendDrawer_1.AbstractBlendDrawer);
exports.AddBlendDrawer = AddBlendDrawer;

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var spriteRectDrawer_1 = __webpack_require__(19);
var shaderProgramUtils_1 = __webpack_require__(5);
var texShaderGenerator_1 = __webpack_require__(15);
var shaderProgram_1 = __webpack_require__(4);
var simpleCopyFilter_1 = __webpack_require__(79);
var AbstractBlendDrawer = function () {
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
    AbstractBlendDrawer.prototype.prepare = function (programGen) {};
    AbstractBlendDrawer.prototype.draw = function (textureInfos, uniforms, frameBuffer) {
        var destTex = frameBuffer.texture.applyFilters([this.simpleCopyFilter], frameBuffer);
        textureInfos.push({ texture: destTex, name: 'destTexture' });
        this.spriteRectDrawer.draw(textureInfos, uniforms, frameBuffer);
    };
    return AbstractBlendDrawer;
}();
exports.AbstractBlendDrawer = AbstractBlendDrawer;

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
var abstractFilter_1 = __webpack_require__(80);
var shaderProgramUtils_1 = __webpack_require__(5);
var SimpleCopyFilter = function (_super) {
    __extends(SimpleCopyFilter, _super);
    function SimpleCopyFilter(gl) {
        return _super.call(this, gl) || this;
    }
    SimpleCopyFilter.prototype.prepare = function (programGen) {
        programGen.addFragmentUniform(shaderProgramUtils_1.GL_TYPE.FLOAT, 'u_mixFactor');
        programGen.setFragmentMainFn("\n            void main(){\n                gl_FragColor = texture2D(texture, v_texCoord);\n            }\n        ");
    };
    return SimpleCopyFilter;
}(abstractFilter_1.AbstractFilter);
exports.SimpleCopyFilter = SimpleCopyFilter;

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var shaderProgram_1 = __webpack_require__(4);
var spriteRectDrawer_1 = __webpack_require__(19);
var mat4 = __webpack_require__(13);
var texShaderGenerator_1 = __webpack_require__(15);
var debugError_1 = __webpack_require__(0);
var makePositionMatrix = function (dstX, dstY, dstWidth, dstHeight) {
    var projectionMatrix = mat4.ortho(0, dstWidth, 0, dstHeight, -1, 1);
    var scaleMatrix = mat4.makeScale(dstWidth, dstHeight, 1);
    return mat4.matrixMultiply(scaleMatrix, projectionMatrix);
};
var identity = mat4.makeIdentity();
var AbstractFilter = function () {
    function AbstractFilter(gl) {
        this.spriteRectDrawer = null;
        this.uniformsToSet = {};
        if (true && !gl) {
            console.error(this);
            throw new debugError_1.DebugError("can not create Filter, gl context not passed to constructor, expected: Filter(gl)");
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
        if (destFrameBuffer) destFrameBuffer.bind();
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
var abstractRenderer_1 = __webpack_require__(82);
var consts_1 = __webpack_require__(46);
var AbstractCanvasRenderer = function (_super) {
    __extends(AbstractCanvasRenderer, _super);
    function AbstractCanvasRenderer(game) {
        var _this = _super.call(this, game) || this;
        var container = document.createElement('canvas');
        document.body.appendChild(container);
        container.setAttribute('width', game.width.toString());
        container.setAttribute('height', game.height.toString());
        container.ondragstart = function (e) {
            e.preventDefault();
        };
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
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var textField_1 = __webpack_require__(20);
var device_1 = __webpack_require__(91);
var size_1 = __webpack_require__(17);
var debugError_1 = __webpack_require__(0);
var AbstractRenderer = function () {
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
    AbstractRenderer.prototype.drawImage = function (img) {};
    AbstractRenderer.prototype.drawNinePatch = function (img) {};
    AbstractRenderer.prototype.drawTiledImage = function (texturePath, srcRect, dstRect, offset) {};
    AbstractRenderer.prototype.drawRectangle = function (rectangle) {};
    AbstractRenderer.prototype.lockRect = function (rect) {};
    AbstractRenderer.prototype.unlockRect = function () {};
    AbstractRenderer.prototype.drawLine = function (x1, y1, x2, y2, color) {};
    AbstractRenderer.prototype.drawEllipse = function (ellispe) {};
    AbstractRenderer.prototype.resetTransform = function () {};
    AbstractRenderer.prototype.clear = function () {};
    AbstractRenderer.prototype.clearColor = function (c) {};
    AbstractRenderer.prototype.save = function () {};
    AbstractRenderer.prototype.restore = function () {};
    AbstractRenderer.prototype.translate = function (x, y, z) {};
    AbstractRenderer.prototype.scale = function (x, y, z) {};
    AbstractRenderer.prototype.rotateZ = function (a) {};
    AbstractRenderer.prototype.rotateY = function (a) {};
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
var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var mouse_1 = __webpack_require__(27);
var container_1 = __webpack_require__(6);
var decorators_1 = __webpack_require__(7);
var vScroll_1 = __webpack_require__(90);
var mathEx_1 = __webpack_require__(8);
var ScrollInfo = function () {
    function ScrollInfo(game) {
        this.game = game;
        this._scrollVelocity = 0;
        this._deceleration = 0;
        this._enabled = false;
        this.offset = 0;
        this.scrollHeight = 0;
    }
    ScrollInfo.prototype._initScrollBar = function () {
        this.vScroll = new vScroll_1.VScroll(this.game);
        this.vScroll.width = 5;
        this._container.appendChild(this.vScroll);
    };
    ScrollInfo.prototype.setEnabled = function (val) {
        this._enabled = val;
        this.vScroll.enabled = val;
    };
    ScrollInfo.prototype.onScroll = function () {
        this.vScroll.maxValue = this.scrollHeight;
        this.vScroll.value = this.offset;
        this.vScroll.onGeometryChanged();
    };
    ScrollInfo.prototype.listenScroll = function (container) {
        var _this = this;
        this._container = container;
        container.on(mouse_1.MOUSE_EVENTS.mouseDown, function (p) {
            _this._lastPoint = {
                point: p,
                time: Date.now()
            };
            _this._prevPoint = {
                point: _this._lastPoint.point,
                time: _this._lastPoint.time
            };
            _this._scrollVelocity = 0;
            _this._deceleration = 0;
        });
        container.on(mouse_1.MOUSE_EVENTS.mouseMove, function (p) {
            if (!p.isMouseDown) return;
            var lastPoint = _this._lastPoint;
            _this._lastPoint = {
                point: p,
                time: Date.now()
            };
            if (!lastPoint) lastPoint = _this._lastPoint;
            _this._prevPoint = {
                point: lastPoint.point,
                time: lastPoint.time
            };
            _this.offset -= _this._lastPoint.point.screenY - _this._prevPoint.point.screenY;
            if (_this.offset > _this.scrollHeight - _this._container.height) _this.offset = _this.scrollHeight - _this._container.height;
            if (_this.offset < 0) _this.offset = 0;
            _this.onScroll();
        });
        container.on(mouse_1.MOUSE_EVENTS.scroll, function (p) {
            _this._scrollVelocity = -p.nativeEvent.wheelDelta;
            _this._deceleration = 0;
        });
        container.on(mouse_1.MOUSE_EVENTS.mouseUp, function (p) {
            if (!_this._lastPoint) return;
            if (!_this._prevPoint) return;
            if (_this._lastPoint.time === _this._prevPoint.time) {
                _this._scrollVelocity = 0;
            } else if (Date.now() - _this._lastPoint.time > 100) {
                _this._scrollVelocity = 0;
            } else {
                _this._scrollVelocity = 1000 * (_this._prevPoint.point.screenY - _this._lastPoint.point.screenY) / (_this._lastPoint.time - _this._prevPoint.time);
            }
            _this._deceleration = 0;
        });
        this._initScrollBar();
    };
    ScrollInfo.prototype._scrollBy = function (val) {
        this.offset += val;
        if (this.offset > this.scrollHeight - this._container.height) {
            this.offset = this.scrollHeight - this._container.height;
            this._scrollVelocity = 0;
            this._deceleration = 0;
        }
        if (this.offset < 0) {
            this.offset = 0;
            this._scrollVelocity = 0;
            this._deceleration = 0;
        }
        this.onScroll();
    };
    ScrollInfo.prototype.update = function (time, delta) {
        if (!this._enabled) return;
        if (this._scrollVelocity) this.onScroll();
        if (this._scrollVelocity) {
            this._scrollBy(this._scrollVelocity * delta / 1000);
        }
        this._deceleration = this._deceleration + 0.5 / delta;
        if (delta > 1000) {
            this._scrollVelocity = 0;
            this._deceleration = 0;
        }
        if (this._scrollVelocity > 0) this._scrollVelocity -= this._deceleration;else if (this._scrollVelocity < 0) this._scrollVelocity += this._deceleration;
        if (mathEx_1.MathEx.closeTo(this._scrollVelocity, 0, 3)) {
            this._scrollVelocity = 0;
            this._deceleration = 0;
        }
    };
    return ScrollInfo;
}();
exports.ScrollInfo = ScrollInfo;
var ScrollableContainer = function (_super) {
    __extends(ScrollableContainer, _super);
    function ScrollableContainer(game) {
        return _super.call(this, game) || this;
    }
    ScrollableContainer.prototype._initScrolling = function (desc) {
        if (desc.vertical) {
            this.vScrollInfo = new ScrollInfo(this.game);
            this.vScrollInfo.listenScroll(this);
        }
    };
    ScrollableContainer.prototype.updateScrollSize = function (desireableHeight, allowedHeight) {
        if (allowedHeight !== 0 && desireableHeight > allowedHeight) {
            this.vScrollInfo.scrollHeight = desireableHeight;
            this.vScrollInfo.setEnabled(true);
        } else {
            this.vScrollInfo.setEnabled(false);
        }
        this.vScrollInfo.vScroll.height = allowedHeight;
        this.vScrollInfo.vScroll.pos.x = this.width - this.vScrollInfo.vScroll.width - 2;
        this.vScrollInfo.onScroll();
    };
    ScrollableContainer.prototype.update = function (time, delta) {
        if (this.vScrollInfo) this.vScrollInfo.update(time, delta);
        _super.prototype.update.call(this, time, delta);
    };
    ScrollableContainer = __decorate([decorators_1.Transient({
        vScrollInfo: true
    })], ScrollableContainer);
    return ScrollableContainer;
}(container_1.Container);
exports.ScrollableContainer = ScrollableContainer;

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
var container_1 = __webpack_require__(6);
var rectangle_1 = __webpack_require__(16);
var color_1 = __webpack_require__(2);
var VScroll = function (_super) {
    __extends(VScroll, _super);
    function VScroll(game) {
        var _this = _super.call(this, game) || this;
        _this.maxValue = 0;
        _this.value = 0;
        _this.enabled = false;
        var bg = new rectangle_1.Rectangle(game);
        bg.width = 5;
        bg.fillColor = new color_1.Color(50, 50, 50, 10);
        bg.color = color_1.Color.NONE.clone();
        var hnd = new rectangle_1.Rectangle(game);
        hnd.height = 10;
        hnd.color = color_1.Color.NONE.clone();
        hnd.fillColor = new color_1.Color(10, 10, 10, 100);
        _this.background = bg;
        _this.handler = hnd;
        _this.appendChild(bg);
        _this.appendChild(hnd);
        return _this;
    }
    VScroll.prototype.onGeometryChanged = function () {
        this.handler.width = this.background.width;
        if (this.value > this.maxValue) this.value = this.maxValue;
        if (this.maxValue) this.handler.height = this.height * this.height / this.maxValue;
        if (this.maxValue) this.handler.pos.y = this.height * this.value / this.maxValue;
        this.background.revalidate();
        this.handler.revalidate();
        this.calcDrawableRect(this.width, this.height);
    };
    VScroll.prototype.draw = function () {
        return this.enabled;
    };
    return VScroll;
}(container_1.Container);
exports.VScroll = VScroll;

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
var container_1 = __webpack_require__(6);
var rectangle_1 = __webpack_require__(16);
var color_1 = __webpack_require__(2);
var CheckBox = function (_super) {
    __extends(CheckBox, _super);
    function CheckBox(game) {
        var _this = _super.call(this, game) || this;
        _this.checked = false;
        var rNormal = new rectangle_1.Rectangle(game);
        rNormal.width = 10;
        rNormal.height = 10;
        rNormal.fillColor = new color_1.Color(10, 10, 10, 100);
        var rChecked = new rectangle_1.Rectangle(game);
        rChecked.width = 10;
        rChecked.height = 10;
        rChecked.fillColor = new color_1.Color(10, 50, 10, 100);
        _this.rNormal = rNormal;
        _this.rChecked = rChecked;
        _this.on('click', function () {
            return _this.toggle();
        });
        return _this;
    }
    CheckBox.prototype.toggle = function () {
        this.checked = !this.checked;
    };
    CheckBox.prototype.onGeometryChanged = function () {
        this.rNormal.setWH(this.width, this.height);
        this.rChecked.setWH(this.width, this.height);
    };
    CheckBox.prototype.getBgByState = function () {
        if (this.checked) return this.rChecked;
        return this.rNormal;
    };
    CheckBox.prototype.draw = function () {
        var bg = this.getBgByState();
        if (bg) bg.draw();
        return true;
    };
    return CheckBox;
}(container_1.Container);
exports.CheckBox = CheckBox;

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
var ellipse_1 = __webpack_require__(45);
var Circle = function (_super) {
    __extends(Circle, _super);
    function Circle() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.radius = 10;
        return _this;
    }
    Circle.prototype.draw = function () {
        this.radiusX = this.radiusY = this.radius;
        this.game.renderer.drawEllipse(this);
        return true;
    };
    return Circle;
}(ellipse_1.Ellipse);
exports.Circle = Circle;

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
var rectangle_1 = __webpack_require__(16);
var color_1 = __webpack_require__(2);
var Border = function (_super) {
    __extends(Border, _super);
    function Border(game) {
        var _this = _super.call(this, game) || this;
        _this.fillColor = color_1.Color.NONE;
        return _this;
    }
    return Border;
}(rectangle_1.Rectangle);
exports.Border = Border;

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
var image_1 = __webpack_require__(29);
var debugError_1 = __webpack_require__(0);
var NinePatchImage = function (_super) {
    __extends(NinePatchImage, _super);
    function NinePatchImage(game) {
        var _this = _super.call(this, game) || this;
        _this.a = 0;
        _this.b = 0;
        _this.c = 0;
        _this.d = 0;
        _this._patches = [];
        for (var i = 0; i < 9; i++) {
            _this._patches[i] = new image_1.Image(_this.game);
            _this.appendChild(_this._patches[i]);
        }
        _this.getRect().observe(function () {
            _this.revalidate();
        });
        return _this;
    }
    NinePatchImage.prototype._revalidatePatches = function () {
        var texSize = this.game.renderer.renderableCache[this.getDefaultResourcePath()].texture.getSize();
        var destRect = this.getRect();
        var patch;
        var a = this.a,
            b = this.b,
            c = this.c,
            d = this.d;
        patch = this._patches[0];
        var patchCnt = 1;
        patch.srcRect.setXYWH(0, 0, a, c);
        patch.setXYWH(destRect.getPoint().x, destRect.getPoint().y, a, c);
        patch = this._patches[patchCnt++];
        patch.srcRect.setXYWH(a, 0, texSize.width - a - b, c);
        patch.setXYWH(destRect.x + a, destRect.y, destRect.width - a - c, c);
        patch = this._patches[patchCnt++];
        patch.srcRect.setXYWH(texSize.width - b, 0, b, c);
        patch.setXYWH(destRect.getPoint().x + destRect.width - b, destRect.getPoint().y, b, c);
        patch = this._patches[patchCnt++];
        patch.srcRect.setXYWH(0, c, a, texSize.height - c - d);
        patch.setXYWH(destRect.x, destRect.y + c, a, destRect.height - c - d);
        patch = this._patches[patchCnt++];
        patch.srcRect.setXYWH(a, c, texSize.width - a - b, texSize.height - c - d);
        patch.setXYWH(destRect.x + a, destRect.y + c, destRect.width - a - b, destRect.height - c - d);
        patch = this._patches[patchCnt++];
        patch.srcRect.setXYWH(texSize.width - b, c, b, texSize.height - c - d);
        patch.setXYWH(destRect.x + destRect.width - b, destRect.y + c, b, destRect.height - c - d);
        patch = this._patches[patchCnt++];
        patch.srcRect.setXYWH(0, texSize.height - d, a, d);
        patch.setXYWH(destRect.getPoint().x, destRect.getPoint().y + destRect.height - d, a, d);
        patch = this._patches[patchCnt++];
        patch.srcRect.setXYWH(a, texSize.height - d, texSize.width - a - b, d);
        patch.setXYWH(destRect.x + a, destRect.y + destRect.height - d, destRect.width - a - b, d);
        patch = this._patches[patchCnt++];
        patch.srcRect.setXYWH(texSize.width - b, texSize.height - d, b, d);
        patch.setXYWH(destRect.getPoint().x + destRect.width - b, destRect.getPoint().y + destRect.height - d, b, d);
        for (var i = 0; i < 9; i++) {
            this._patches[i].setDefaultResourcePath(this.getDefaultResourcePath());
        }
    };
    NinePatchImage.prototype.revalidate = function () {
        if (true && !this.getDefaultResourcePath()) {
            throw new debugError_1.DebugError("can not render Image: default resource path not specified in resourceMap property");
        }
        var width = this.width;
        var height = this.height;
        if (width < this.a + this.b) width = this.a + this.b;
        if (height < this.c + this.d) height = this.c + this.d;
        this.setWH(width, height);
        this._revalidatePatches();
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
        return true;
    };
    return NinePatchImage;
}(image_1.Image);
exports.NinePatchImage = NinePatchImage;

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
var rect_1 = __webpack_require__(1);
var container_1 = __webpack_require__(6);
var AbsoluteLayout = function (_super) {
    __extends(AbsoluteLayout, _super);
    function AbsoluteLayout(game) {
        return _super.call(this, game) || this;
    }
    AbsoluteLayout.prototype.appendChild = function (c) {
        if (c instanceof container_1.Container) c.testLayout();
        _super.prototype.appendChild.call(this, c);
    };
    AbsoluteLayout.prototype.onGeometryChanged = function () {
        _super.prototype.onGeometryChanged.call(this);
        var maxX = 0,
            maxY = 0;
        for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
            var v = _a[_i];
            if (v instanceof container_1.Container) v.onGeometryChanged();
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
    AbsoluteLayout.prototype.draw = function () {
        var renderer = this.game.renderer;
        if (this.overflow === container_1.OVERFLOW.HIDDEN) {
            var r = rect_1.Rect.fromPool().set(this.getScreenRect());
            r.addXY(-1, -1);
            r.setWH(r.width + 1, r.height + 1);
            renderer.lockRect(r);
        }
        if (this.background) this.background.draw();
        renderer.translate(this.paddingLeft, this.paddingTop);
        if (this.overflow === container_1.OVERFLOW.HIDDEN) this.game.renderer.unlockRect();
        return true;
    };
    return AbsoluteLayout;
}(container_1.Container);
exports.AbsoluteLayout = AbsoluteLayout;

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
var container_1 = __webpack_require__(6);
var rectangle_1 = __webpack_require__(16);
var color_1 = __webpack_require__(2);
var VScroll = function (_super) {
    __extends(VScroll, _super);
    function VScroll(game) {
        var _this = _super.call(this, game) || this;
        _this.maxValue = 0;
        _this.value = 0;
        _this.enabled = false;
        var bg = new rectangle_1.Rectangle(game);
        bg.width = 5;
        bg.fillColor = new color_1.Color(50, 50, 50, 10);
        bg.color = color_1.Color.NONE.clone();
        var hnd = new rectangle_1.Rectangle(game);
        hnd.height = 10;
        hnd.color = color_1.Color.NONE.clone();
        hnd.fillColor = new color_1.Color(10, 10, 10, 100);
        _this.background = bg;
        _this.handler = hnd;
        _this.appendChild(bg);
        _this.appendChild(hnd);
        return _this;
    }
    VScroll.prototype.onGeometryChanged = function () {
        this.handler.width = this.background.width;
        if (this.value > this.maxValue) this.value = this.maxValue;
        if (this.maxValue) this.handler.height = this.height * this.height / this.maxValue;
        if (this.maxValue) this.handler.pos.y = this.height * this.value / this.maxValue;
        this.background.revalidate();
        this.handler.revalidate();
        this.calcDrawableRect(this.width, this.height);
    };
    VScroll.prototype.draw = function () {
        return this.enabled;
    };
    return VScroll;
}(container_1.Container);
exports.VScroll = VScroll;

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var isCocoonJS = !!navigator.isCocoonJS;
var Device = function () {
    function Device(game) {}
    Device.isCocoonJS = isCocoonJS;
    Device.scale = isCocoonJS ? window.devicePixelRatio || 1 : 1;
    Device.isTouch = typeof window !== 'undefined' && 'ontouchstart' in window;
    return Device;
}();
exports.Device = Device;

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
var shaderProgram_1 = __webpack_require__(4);
var abstractDrawer_1 = __webpack_require__(9);
var bufferInfo_1 = __webpack_require__(14);
var debugError_1 = __webpack_require__(0);
var vertexShader = "\n\nattribute vec4 a_position;\nattribute vec2 a_texcoord;\nattribute vec3 a_normal;\n\nuniform mat4 u_modelMatrix;\nuniform mat4 u_projectionMatrix;\n\nvarying vec2 v_texcoord;\nvarying vec3 v_normal;\n\nvoid main() {\n\n  gl_Position = u_projectionMatrix * u_modelMatrix * a_position;\n  v_texcoord = a_texcoord;\n  v_normal = a_normal;\n}\n";
var textureShader = "\n\nprecision highp float;\n\nvarying vec2 v_texcoord;\nvarying vec3 v_normal;\n\nuniform sampler2D u_texture;\nuniform float u_alpha;\nuniform mat4 u_modelMatrix;\n\n\nvoid main() {\n\n    vec3 lightDirection = normalize(vec3(-1,-1,1));\n    vec3 normalized = normalize((u_modelMatrix * vec4(v_normal,0)).xyz);\n    float lightFactor = max(0.5,dot(lightDirection,normalized));\n    gl_FragColor = texture2D(u_texture, v_texcoord);\n    gl_FragColor.rgb *= lightFactor;\n    gl_FragColor.a *= u_alpha;\n}\n\n";
var ModelDrawer = function (_super) {
    __extends(ModelDrawer, _super);
    function ModelDrawer(gl) {
        var _this = _super.call(this, gl) || this;
        _this.program = new shaderProgram_1.ShaderProgram(gl, vertexShader, textureShader);
        return _this;
    }
    ModelDrawer.prototype._initBufferInfo = function () {
        this.g3d.bufferInfo = new bufferInfo_1.BufferInfo(this.gl, {
            posVertexInfo: {
                array: this.g3d.model.vertexArr, type: this.gl.FLOAT,
                size: 3, attrName: 'a_position'
            },
            posIndexInfo: {
                array: this.g3d.model.indexArr
            },
            texVertexInfo: {
                array: this.g3d.model.texCoordArr, type: this.gl.FLOAT,
                size: 2, attrName: 'a_texcoord'
            },
            normalInfo: {
                array: this.g3d.model.normalArr, type: this.gl.FLOAT,
                size: 3, attrName: 'a_normal'
            },
            drawMethod: this.gl.TRIANGLES
        });
    };
    ModelDrawer.prototype.bindModel = function (g3d) {
        this.g3d = g3d;
        if (!this.g3d.bufferInfo) this._initBufferInfo();
        this.bufferInfo = this.g3d.bufferInfo;
    };
    ModelDrawer.prototype.bind = function () {
        if (true && !this.g3d.model) throw new debugError_1.DebugError("can not bind modelDrawer;bindModel must be invoked firstly");
        _super.prototype.bind.call(this);
    };
    ModelDrawer.prototype.unbind = function () {
        this.g3d = null;
        _super.prototype.unbind.call(this);
    };
    return ModelDrawer;
}(abstractDrawer_1.AbstractDrawer);
exports.ModelDrawer = ModelDrawer;

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var debugError_1 = __webpack_require__(0);
var models = __webpack_require__(94);
var Repository = function () {
    function Repository(game) {
        this.embeddedResources = {};
        this.allBehaviours = {};
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
        if (true && !type) throw new debugError_1.DebugError('repository.getObject: type not specified');
        if (true && id == null) {
            console.trace("id is null");
            throw new debugError_1.DebugError("::getObject() id not specified for type " + type);
        }
        var Clazz = models[type];
        if (true && !Clazz) {
            throw new debugError_1.DebugError("::getObject() undeclared object type " + type);
        }
        if (true && !this.descriptions[type]) throw "not found description for type: " + type;
        var desc = this.descriptions[type].find(function (it) {
            return it.id == id;
        });
        if (true && !desc) {
            throw new debugError_1.DebugError("can not find object \"" + type + "\" with id " + id);
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
            throw new debugError_1.DebugError("addObject: id is not provided");
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
        if (true && !models[type]) throw new debugError_1.DebugError("getArray: unregistered type \"" + type + "\"");
        if (this.arrays[type]) return this.arrays[type];
        var res = [];
        if (!this.descriptions[type]) this.descriptions[type] = [];
        this.descriptions[type].forEach(function (desc) {
            if (true && (desc.id === null || desc.id === undefined)) {
                console.error(desc);
                throw new debugError_1.DebugError("object id must me specified");
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
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var frameAnimation_1 = __webpack_require__(95);
exports.FrameAnimation = frameAnimation_1.FrameAnimation;
var spriteSheet_1 = __webpack_require__(96);
exports.SpriteSheet = spriteSheet_1.SpriteSheet;
var gameObjectProto_1 = __webpack_require__(30);
exports.GameObjectProto = gameObjectProto_1.GameObjectProto;
var gameObject_1 = __webpack_require__(21);
exports.GameObject = gameObject_1.GameObject;
var commonBehaviour_1 = __webpack_require__(97);
exports.CommonBehaviour = commonBehaviour_1.CommonBehaviour;
var particleSystem_1 = __webpack_require__(98);
exports.ParticleSystem = particleSystem_1.ParticleSystem;
var scene_1 = __webpack_require__(99);
exports.Scene = scene_1.Scene;
var sound_1 = __webpack_require__(102);
exports.Sound = sound_1.Sound;
var font_1 = __webpack_require__(103);
exports.Font = font_1.Font;
var layer_1 = __webpack_require__(49);
exports.Layer = layer_1.Layer;
var textField_1 = __webpack_require__(20);
exports.TextField = textField_1.TextField;
var button_1 = __webpack_require__(44);
exports.Button = button_1.Button;
var tileMap_1 = __webpack_require__(47);
exports.TileMap = tileMap_1.TileMap;

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
var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var commonObject_1 = __webpack_require__(12);
var decorators_1 = __webpack_require__(7);
var eventEmitter_1 = __webpack_require__(32);
var FrameAnimation = function (_super) {
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
var rect_1 = __webpack_require__(1);
var resource_1 = __webpack_require__(23);
var SpriteSheet = function (_super) {
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
        _this._frameRect = new rect_1.Rect();
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
        var fr = this._frameRect;
        fr.setXYWH(this.getFramePosX(index), this.getFramePosY(index), this._frameWidth, this._frameHeight);
        return fr;
    };
    return SpriteSheet;
}(resource_1.Resource);
exports.SpriteSheet = SpriteSheet;

/***/ }),
/* 97 */
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
var baseModel_1 = __webpack_require__(11);
var CommonBehaviour = function (_super) {
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
/* 98 */
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
var baseModel_1 = __webpack_require__(11);
var mathEx_1 = __webpack_require__(8);
var r = function (obj) {
    return mathEx_1.MathEx.random(obj.from, obj.to);
};
var ParticleSystem = function (_super) {
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
    ParticleSystem.find = function (name) {};
    ParticleSystem.findAll = function (name) {};
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
var noop_1 = __webpack_require__(34);
var baseModel_1 = __webpack_require__(11);
var loadingQueue_1 = __webpack_require__(100);
var tileMap_1 = __webpack_require__(47);
var layer_1 = __webpack_require__(49);
var ambientLight_1 = __webpack_require__(101);
var color_1 = __webpack_require__(2);
var camera_1 = __webpack_require__(50);
var object_1 = __webpack_require__(24);
var Scene = function (_super) {
    __extends(Scene, _super);
    function Scene(game) {
        var _this = _super.call(this, game) || this;
        _this.type = 'Scene';
        _this.layers = [];
        _this.useBG = false;
        _this.colorBG = color_1.Color.WHITE;
        _this.prepared = false;
        _this.filters = [];
        _this.blendMode = '';
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
    Scene.prototype.findObject = function (query) {
        for (var _i = 0, _a = this.layers; _i < _a.length; _i++) {
            var l = _a[_i];
            var possibleResult = l.findObject(query);
            if (possibleResult !== null) return possibleResult;
        }
        return null;
    };
    Scene.prototype.addGameObject = function (go) {
        console.trace('scene:addGameObject is deprecated');
        this.getDefaultLayer().appendChild(go);
    };
    Scene.prototype.appendChild = function (go) {
        this.getDefaultLayer().appendChild(go);
    };
    Scene.prototype.prependChild = function (go) {
        this.getDefaultLayer().prependChild(go);
    };
    Scene.prototype.findLayer = function (query) {
        for (var _i = 0, _a = this.layers; _i < _a.length; _i++) {
            var l = _a[_i];
            if (object_1.isObjectMatch(l, query)) return l;
        }
        return null;
    };
    Scene.prototype.preload = function (cb) {
        var _this = this;
        var resources = this.getAllSpriteSheets().concat(this.game.repository.getArray('Font'));
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
        this.game.repository.getArray('Sound').map(function (it) {
            return it.resourcePath;
        }).forEach(function (url) {
            var id = 1000;
            (function (id) {
                q.addTask(function () {
                    _this.game.audioPlayer.loadSound(url, null, function () {
                        return q.resolveTask(id);
                    });
                }, id);
            })(id);
            id++;
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
        _super.prototype.update.call(this, currTime, deltaTime);
        if (this._individualBehaviour) this._individualBehaviour.onUpdate();
        var layers = this.layers;
        for (var _i = 0, layers_1 = layers; _i < layers_1.length; _i++) {
            var l = layers_1[_i];
            l.update(currTime, deltaTime);
        }
        this.uiLayer.update(currTime, deltaTime);
    };
    Scene.prototype.render = function () {
        if (!this.prepared) return;
        var renderer = this.game.renderer;
        if (this.useBG) renderer.clearColor(this.colorBG);else renderer.clear();
        renderer.beginFrameBuffer();
        if (this.useBG) renderer.clearColor(this.colorBG);else renderer.clear();
        this.game.camera.matrixMode = camera_1.CAMERA_MATRIX_MODE.MODE_TRANSFORM;
        this.game.camera.update(this.game.getTime(), this.game.getDeltaTime());
        var layers = this.layers;
        for (var _i = 0, layers_2 = layers; _i < layers_2.length; _i++) {
            var l = layers_2[_i];
            l.render();
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
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var Queue = function () {
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
/* 101 */
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
var abstractLight_1 = __webpack_require__(38);
var AmbientLight = function (_super) {
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
/* 102 */
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
var debugError_1 = __webpack_require__(0);
var commonObject_1 = __webpack_require__(12);
var Sound = function (_super) {
    __extends(Sound, _super);
    function Sound(game) {
        var _this = _super.call(this) || this;
        _this.game = game;
        _this.type = 'Sound';
        _this.resourcePath = '';
        _this._gain = 1;
        _this.loop = false;
        return _this;
    }
    Sound.prototype.play = function () {
        this.game.audioPlayer.play(this);
    };
    Sound.prototype.stop = function () {
        this.game.audioPlayer.stop(this);
    };
    Sound.prototype.pause = function () {
        throw new debugError_1.DebugError('not implemented');
    };
    Sound.prototype.setGain = function (val, time, easeFnName) {};
    return Sound;
}(commonObject_1.CommonObject);
exports.Sound = Sound;

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
Object.defineProperty(exports, "__esModule", { value: true });
var debugError_1 = __webpack_require__(0);
var rect_1 = __webpack_require__(1);
var resource_1 = __webpack_require__(23);
var FontContext = function () {
    function FontContext() {
        this.width = 0;
        this.height = 0;
        this.symbols = [];
    }
    return FontContext;
}();
var Font = function (_super) {
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
                if (s[key] == undefined) {
                    console.error(s);
                    throw new debugError_1.DebugError("font revalidation error: can not find proper object for key " + key);
                }
            }
            _this.fontContext.symbols[key] = new rect_1.Rect(s[key].x, s[key].y, s[key].width, s[key].height);
        });
    };
    Font.prototype.getDefaultSymbolHeight = function () {
        return this.fontContext.symbols[' '].height;
    };
    return Font;
}(resource_1.Resource);
exports.Font = Font;

/***/ }),
/* 104 */
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
var Keyboard = function () {
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
/* 105 */
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
var GamePad = function () {
    function GamePad(game) {
        this.game = game;
    }
    GamePad.prototype.update = function () {
        this.gamepads = navigator.getGamepads && navigator.getGamepads() || navigator.webkitGetGamepads && navigator.webkitGetGamepads() || navigator.webkitGamepads || navigator.mozGamepads || navigator.msGamepads || navigator.gamepads || [];
        for (var i = 0, max = this.gamepads.length; i < max; i++) {
            var gp = this.gamepads[i];
            if (!gp) continue;
            var maxButtons = gp.buttons.length;
            if (maxButtons > 7) maxButtons = 7;
            for (var j = 0; j < maxButtons; j++) {
                var btn = gp.buttons[j];
                if (btn.pressed) {
                    this.game.keyboard.press(j);
                } else {
                    this.game.keyboard.release(j);
                }
            }
            if (gp.axes[0] === 0) continue;
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
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var allUIClasses = __webpack_require__(43);
var debugError_1 = __webpack_require__(0);
var object_1 = __webpack_require__(24);
var UIBuilder = function () {
    function UIBuilder(game) {
        var _this = this;
        this._components = {};
        this.game = game;
        Object.keys(allUIClasses).forEach(function (key) {
            _this.registerComponent(key, allUIClasses[key]);
        });
    }
    UIBuilder.prototype.registerComponent = function (key, component) {
        this._components[key] = component;
    };
    UIBuilder._normalizeSetterName = function (name) {
        return "set" + name[0].toUpperCase() + name.substr(1);
    };
    UIBuilder._getFirstKey = function (desc) {
        if (!object_1.isObject(desc)) return undefined;
        return Object.keys(desc)[0];
    };
    UIBuilder._getAllKeys = function (desc) {
        return Object.keys(desc);
    };
    UIBuilder._getKeysLength = function (desc) {
        return UIBuilder._getAllKeys(desc).length;
    };
    UIBuilder.prototype._resolveProperties = function (instance, desc, appendChildren) {
        var _this = this;
        UIBuilder._getAllKeys(desc).forEach(function (propName) {
            if (propName === 'children') {
                if (!desc.children.splice) throw new debugError_1.DebugError("'children' property must be an array");
                desc.children.forEach(function (descChild) {
                    var key = UIBuilder._getFirstKey(descChild);
                    var Cl = _this._components[key];
                    var child = new Cl(_this.game);
                    _this._resolveProperties(child, descChild[key], true);
                    instance.appendChild(child);
                });
                return;
            } else if (_this._components[propName]) {
                var Cl = _this._components[propName];
                var child = void 0;
                if (appendChildren) child = new Cl(_this.game);else child = instance;
                _this._resolveProperties(child, desc[propName], appendChildren);
                if (appendChildren) instance.appendChild(child);
            } else {
                var setterName = UIBuilder._normalizeSetterName(propName);
                var hasProperty = propName in instance;
                var hasSetter = setterName in instance;
                if (true && !hasProperty && !hasSetter) {
                    var constructorName = instance.constructor && instance.constructor.name || instance.type || '';
                    throw new debugError_1.DebugError("uiBuilder error: object " + constructorName + " has not property " + propName + " not associated setter " + setterName);
                }
                if (_this._components[UIBuilder._getFirstKey(desc[propName])]) {
                    var PropClass = _this._components[UIBuilder._getFirstKey(desc[propName])];
                    var propInstance = new PropClass(_this.game);
                    _this._resolveProperties(propInstance, desc[propName], false);
                    desc[propName] = propInstance;
                }
                if (hasSetter) {
                    var args = desc[propName];
                    if (!args.splice) args = [desc[propName]];
                    instance[setterName].apply(instance, args);
                } else {
                    if (instance[propName] && instance[propName].fromJSON) {
                        instance[propName].fromJSON(desc[propName]);
                    } else if (instance[propName] && instance[propName].apply) {
                        var args = desc[propName];
                        if (!args.splice) args = [args];
                        instance[propName].apply(instance, args);
                    } else {
                        instance[propName] = desc[propName];
                    }
                }
            }
        });
        instance.revalidate();
    };
    UIBuilder.prototype.build = function (desc) {
        if (true && UIBuilder._getKeysLength(desc) > 1) throw new debugError_1.DebugError("only one root element is supported. Found: " + UIBuilder._getAllKeys(desc));
        var firstKey = UIBuilder._getFirstKey(desc);
        var Cl = this._components[firstKey];
        if (true && !Cl) throw new debugError_1.DebugError("no such ui class: " + firstKey);
        var instance = new Cl(this.game);
        this._resolveProperties(instance, desc[firstKey], true);
        instance.testLayout();
        window.l = instance;
        return instance;
    };
    return UIBuilder;
}();
exports.UIBuilder = UIBuilder;

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var rigidShapes_1 = __webpack_require__(48);
var rect_1 = __webpack_require__(1);
var mathEx_1 = __webpack_require__(8);
var ColliderEngine = function () {
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
        if (s1.mInvMass === 0 && s2.mInvMass === 0) {
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
        jN = jN / (s1.mInvMass + s2.mInvMass + R1crossN * R1crossN * s1.mInertia + R2crossN * R2crossN * s2.mInertia);
        var impulse = n.scale(jN);
        s1.mVelocity = s1.mVelocity.subtract(impulse.scale(s1.mInvMass));
        s2.mVelocity = s2.mVelocity.add(impulse.scale(s2.mInvMass));
        if (!s1.fixedAngle) s1.mAngularVelocity -= R1crossN * jN * s1.mInertia;
        if (!s2.fixedAngle) s2.mAngularVelocity += R2crossN * jN * s2.mInertia;
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
        if (!s1.fixedAngle) s1.mAngularVelocity -= R1crossT * jT * s1.mInertia;
        if (!s2.fixedAngle) s2.mAngularVelocity += R2crossT * jT * s2.mInertia;
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
        var rigidObjects = this.game.getCurrScene().getAllGameObjects().map(function (g) {
            return g.rigidBody;
        });
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
        if (arr1 === void 0) {
            arr1 = [];
        }
        if (arr2 === void 0) {
            arr2 = [];
        }
        return arr1.filter(function (value) {
            return arr2.indexOf(value) !== -1;
        }).length > 0;
    };
    ColliderEngine.prototype.boundAndCollideAcrade = function (a, b) {
        if (a.velocity.equal(0) && b.velocity.equal(0)) return;
        var numOfIterations = 0;
        var isOverlapped = mathEx_1.MathEx.overlapTest(a.getRect(), b.getRect());
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
            isOverlapped = mathEx_1.MathEx.overlapTest(a.getRect(), b.getRect());
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
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var debugError_1 = __webpack_require__(0);
var loaderUtil_1 = __webpack_require__(109);
var audioPlayer_1 = __webpack_require__(51);
var CtxHolder = function () {
    function CtxHolder() {}
    CtxHolder.fixAutoPlayPolicy = function () {
        var click = function () {
            CtxHolder.res.resume();
            document.removeEventListener('click', click);
        };
        document.addEventListener('click', click);
    };
    CtxHolder.getCtx = function () {
        if (CtxHolder.ctx && !CtxHolder.res) {
            CtxHolder.res = new CtxHolder.ctx();
            CtxHolder.fixAutoPlayPolicy();
        }
        return CtxHolder.res;
    };
    CtxHolder.ctx = window.AudioContext;
    CtxHolder.res = null;
    return CtxHolder;
}();
var decode = function (buffer, callback) {
    CtxHolder.getCtx().decodeAudioData(buffer, function (decoded) {
        callback(decoded);
    }, function (err) {
        if (true) throw new debugError_1.DebugError(err.message);
    });
};
var base64ToArrayBuffer = function (base64) {
    var binary_string = window.atob(base64);
    var len = binary_string.length;
    var bytes = new Uint8Array(len);
    for (var i = 0; i < len; i++) {
        bytes[i] = binary_string.charCodeAt(i);
    }
    return bytes.buffer;
};
var WebAudioContext = function () {
    function WebAudioContext(game) {
        this.game = game;
        this.type = 'webAudioContext';
        this._ctx = null;
        this._currSource = null;
        this._gainNode = null;
        this._free = true;
        this._ctx = CtxHolder.getCtx();
        this._gainNode = this._ctx.createGain();
        this._gainNode.connect(this._ctx.destination);
    }
    WebAudioContext.isAcceptable = function () {
        return !!(window && CtxHolder.getCtx());
    };
    WebAudioContext.prototype.load = function (url, progress, onLoad) {
        if (audioPlayer_1.AudioPlayer.cache[url]) {
            onLoad();
            return;
        }
        if (true) {
            var base64Url = this.game.repository.embeddedResources[url];
            if (true && !base64Url) throw new debugError_1.DebugError("no embedded resource provided by url " + url);
            base64Url = base64Url.split(',')[1];
            var buffer = base64ToArrayBuffer(base64Url);
            decode(buffer, function (decoded) {
                audioPlayer_1.AudioPlayer.cache[url] = decoded;
                onLoad();
            });
        } else {}
    };
    WebAudioContext.prototype.isFree = function () {
        return this._free;
    };
    WebAudioContext.prototype.play = function (resourcePath, loop) {
        var _this = this;
        this._free = false;
        var currSource = this._ctx.createBufferSource();
        currSource.buffer = audioPlayer_1.AudioPlayer.cache[resourcePath];
        currSource.loop = loop;
        currSource.connect(this._gainNode);
        currSource.start(0);
        currSource.onended = function () {
            _this.stop();
        };
        this._currSource = currSource;
    };
    WebAudioContext.prototype.stop = function () {
        var currSource = this._currSource;
        if (currSource) {
            currSource.stop();
            currSource.disconnect(this._gainNode);
        }
        this._currSource = null;
        this._free = true;
    };
    WebAudioContext.prototype.setGain = function (val) {
        this._gainNode.gain.value = val;
    };
    WebAudioContext.prototype.pause = function () {
        this._ctx.suspend();
    };
    WebAudioContext.prototype.resume = function () {
        this._ctx.resume();
    };
    return WebAudioContext;
}();
exports.WebAudioContext = WebAudioContext;

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var LoaderUtil = function () {
    function LoaderUtil() {}
    LoaderUtil.loadBinary = function (url, progress, callBack) {
        var request = new XMLHttpRequest();
        request.open('GET', url, true);
        request.responseType = 'arraybuffer';
        request.setRequestHeader('Accept-Ranges', 'bytes');
        request.setRequestHeader('Content-Range', 'bytes');
        request.onload = function () {
            callBack(request.response);
        };
        request.onprogress = function (e) {
            if (progress) progress(url, e.loaded / e.total);
        };
        if (true) {
            request.onerror = function (e) {
                throw 'can not load sound with url ' + url;
            };
        }
        request.send();
    };
    ;
    return LoaderUtil;
}();
exports.LoaderUtil = LoaderUtil;

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var debugError_1 = __webpack_require__(0);
var CtxHolder = function () {
    function CtxHolder() {}
    CtxHolder.getCtx = function () {
        var Ctx = window && window.Audio;
        return new Ctx();
    };
    ;
    return CtxHolder;
}();
var HtmlAudioContext = function () {
    function HtmlAudioContext(game) {
        this.game = game;
        this.type = 'htmlAudioContext';
        this.free = true;
        this._ctx = CtxHolder.getCtx();
    }
    HtmlAudioContext.isAcceptable = function () {
        return !!(window && window.Audio);
    };
    HtmlAudioContext.prototype.load = function (url, progress, callBack) {
        callBack();
    };
    HtmlAudioContext.prototype.isFree = function () {
        return this.free;
    };
    HtmlAudioContext.prototype.play = function (resourcePath, loop) {
        var _this = this;
        var url;
        if (true) {
            var base64Url = this.game.repository.embeddedResources[resourcePath];
            url = base64Url;
            if (true && !base64Url) throw new debugError_1.DebugError("no embedded resource provided by url " + resourcePath);
        } else {}
        this.free = false;
        this._ctx.src = url;
        this._ctx.play();
        this._ctx.loop = loop;
        this._ctx.onended = function () {
            _this.stop();
        };
    };
    HtmlAudioContext.prototype.stop = function () {
        this.free = true;
    };
    HtmlAudioContext.prototype.setGain = function (val) {
        this._ctx.volume = val;
    };
    HtmlAudioContext.prototype.pause = function () {
        this._ctx.pause();
    };
    HtmlAudioContext.prototype.resume = function () {
        if (true) throw "not implemented for now";
    };
    return HtmlAudioContext;
}();
exports.HtmlAudioContext = HtmlAudioContext;

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var FakeAudioContext = function () {
    function FakeAudioContext(game) {
        this.game = game;
        this.type = 'fakeAudioContext';
        true && console.log('audio not supported');
    }
    FakeAudioContext.isAcceptable = function () {
        return true;
    };
    FakeAudioContext.prototype.play = function (resourcePath, loop) {};
    FakeAudioContext.prototype.stop = function () {};
    FakeAudioContext.prototype.isFree = function () {
        return false;
    };
    FakeAudioContext.prototype.setGain = function (val) {};
    FakeAudioContext.prototype.pause = function () {};
    FakeAudioContext.prototype.resume = function () {};
    FakeAudioContext.prototype.load = function (url, progress, callBack) {
        callBack();
    };
    return FakeAudioContext;
}();
exports.FakeAudioContext = FakeAudioContext;

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var audioNode_1 = __webpack_require__(113);
var AudioNodeSet = function () {
    function AudioNodeSet(game, ContextClass, numOfNodes) {
        this.ContextClass = ContextClass;
        this.numOfNodes = numOfNodes;
        this.nodes = [];
        for (var i = 0; i < numOfNodes; i++) {
            this.nodes.push(new audioNode_1.AudioNode(new ContextClass(game)));
        }
    }
    AudioNodeSet.prototype.getFreeNode = function () {
        for (var i = 0; i < this.numOfNodes; i++) {
            if (this.nodes[i].isFree()) return this.nodes[i];
        }
        return null;
    };
    AudioNodeSet.prototype.stopAll = function () {
        for (var i = 0; i < this.numOfNodes; i++) {
            this.nodes[i].stop();
        }
    };
    AudioNodeSet.prototype.pauseAll = function () {
        for (var i = 0; i < this.numOfNodes; i++) {
            this.nodes[i].pause();
        }
    };
    AudioNodeSet.prototype.resumeAll = function () {
        for (var i = 0; i < this.numOfNodes; i++) {
            this.nodes[i].resume();
        }
    };
    AudioNodeSet.prototype.getNodeBySound = function (sound) {
        for (var i = 0; i < this.numOfNodes; i++) {
            if (this.nodes[i].getCurrSound() == sound) return this.nodes[i];
        }
        return null;
    };
    return AudioNodeSet;
}();
exports.AudioNodeSet = AudioNodeSet;

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var AudioNode = function () {
    function AudioNode(context) {
        this.context = context;
        this.currSound = null;
    }
    AudioNode.prototype.play = function (resourcePath, loop) {
        if (loop === void 0) {
            loop = false;
        }
        this.context.play(resourcePath, loop);
    };
    AudioNode.prototype.stop = function () {
        this.context.stop();
        this.currSound = null;
    };
    AudioNode.prototype.setGain = function (val) {
        this.context.setGain(val);
    };
    AudioNode.prototype.pause = function () {
        this.context.pause();
    };
    AudioNode.prototype.resume = function () {
        this.context.resume();
    };
    AudioNode.prototype.isFree = function () {
        return this.context.isFree();
    };
    AudioNode.prototype.getCurrSound = function () {
        return this.currSound;
    };
    return AudioNode;
}();
exports.AudioNode = AudioNode;

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var debugError_1 = __webpack_require__(0);
var EarClippingTriangulator = function () {
    function EarClippingTriangulator() {
        this.indices = [];
        this.vertexTypes = [];
        this.triangles = [];
    }
    EarClippingTriangulator.prototype.computeTriangles = function (vertices) {
        this.vertices = vertices;
        var offset = 0;
        var count = vertices.length;
        if (true && count % 2 !== 0) throw new debugError_1.DebugError("wrong vertices size");
        var vertexCount = this.vertexCount = ~~(count / 2);
        var vertexOffset = ~~(offset / 2);
        var indices = this.indices = [];
        if (EarClippingTriangulator.areVerticesClockwise(vertices, offset, count)) {
            for (var i = 0; i < vertexCount; i++) indices[i] = vertexOffset + i;
        } else {
            for (var i = 0, n = vertexCount - 1; i < vertexCount; i++) indices[i] = vertexOffset + n - i;
        }
        var vertexTypes = [];
        for (var i = 0, n = vertexCount; i < n; ++i) vertexTypes.push(this.classifyVertex(i));
        var triangles = this.triangles = [];
        this.vertexTypes = vertexTypes;
        this.triangulate();
        return triangles;
    };
    EarClippingTriangulator.prototype.triangulate = function () {
        var vertexTypes = this.vertexTypes;
        var triangles = this.triangles;
        while (this.vertexCount > 3) {
            var earTipIndex = this.findEarTip();
            this.cutEarTip(earTipIndex);
            var previousIndex = this.previousIndex(earTipIndex);
            var nextIndex = earTipIndex == this.vertexCount ? 0 : earTipIndex;
            vertexTypes[previousIndex] = this.classifyVertex(previousIndex);
            vertexTypes[nextIndex] = this.classifyVertex(nextIndex);
        }
        if (this.vertexCount == 3) {
            var indices = this.indices;
            triangles.push(indices[0]);
            triangles.push(indices[1]);
            triangles.push(indices[2]);
        }
        this.vertexTypes = vertexTypes;
        this.triangles = triangles;
    };
    EarClippingTriangulator.prototype.classifyVertex = function (index) {
        var indices = this.indices;
        var previous = indices[this.previousIndex(index)] * 2;
        var current = indices[index] * 2;
        var next = indices[this.nextIndex(index)] * 2;
        var vertices = this.vertices;
        return EarClippingTriangulator.computeSpannedAreaSign(vertices[previous], vertices[previous + 1], vertices[current], vertices[current + 1], vertices[next], vertices[next + 1]);
    };
    EarClippingTriangulator.prototype.findEarTip = function () {
        var vertexCount = this.vertexCount;
        for (var i = 0; i < vertexCount; i++) if (this.isEarTip(i)) return i;
        var vertexTypes = this.vertexTypes;
        for (var i = 0; i < vertexCount; i++) if (vertexTypes[i] != EarClippingTriangulator.CONCAVE) return i;
        return 0;
    };
    EarClippingTriangulator.prototype.isEarTip = function (earTipIndex) {
        var vertexTypes = this.vertexTypes;
        if (vertexTypes[earTipIndex] == EarClippingTriangulator.CONCAVE) return false;
        var previousIndex = this.previousIndex(earTipIndex);
        var nextIndex = this.nextIndex(earTipIndex);
        var indices = this.indices;
        var p1 = indices[previousIndex] * 2;
        var p2 = indices[earTipIndex] * 2;
        var p3 = indices[nextIndex] * 2;
        var vertices = this.vertices;
        var p1x = vertices[p1],
            p1y = vertices[p1 + 1];
        var p2x = vertices[p2],
            p2y = vertices[p2 + 1];
        var p3x = vertices[p3],
            p3y = vertices[p3 + 1];
        for (var i = this.nextIndex(nextIndex); i != previousIndex; i = this.nextIndex(i)) {
            if (vertexTypes[i] != EarClippingTriangulator.CONVEX) {
                var v = indices[i] * 2;
                var vx = vertices[v];
                var vy = vertices[v + 1];
                if (EarClippingTriangulator.computeSpannedAreaSign(p3x, p3y, p1x, p1y, vx, vy) >= 0) {
                    if (EarClippingTriangulator.computeSpannedAreaSign(p1x, p1y, p2x, p2y, vx, vy) >= 0) {
                        if (EarClippingTriangulator.computeSpannedAreaSign(p2x, p2y, p3x, p3y, vx, vy) >= 0) return false;
                    }
                }
            }
        }
        return true;
    };
    EarClippingTriangulator.prototype.cutEarTip = function (earTipIndex) {
        var indices = this.indices;
        var triangles = this.triangles;
        triangles.push(indices[this.previousIndex(earTipIndex)]);
        triangles.push(indices[earTipIndex]);
        triangles.push(indices[this.nextIndex(earTipIndex)]);
        this.triangles = triangles;
        this.indices.splice(earTipIndex, 1);
        this.vertexTypes.splice(earTipIndex, 1);
        this.vertexCount--;
    };
    EarClippingTriangulator.prototype.previousIndex = function (index) {
        return (index == 0 ? this.vertexCount : index) - 1;
    };
    EarClippingTriangulator.prototype.nextIndex = function (index) {
        return (index + 1) % this.vertexCount;
    };
    EarClippingTriangulator.areVerticesClockwise = function (vertices, offset, count) {
        if (count <= 2) return false;
        var area = 0,
            p1x,
            p1y,
            p2x,
            p2y;
        for (var i = offset, n = offset + count - 3; i < n; i += 2) {
            p1x = vertices[i];
            p1y = vertices[i + 1];
            p2x = vertices[i + 2];
            p2y = vertices[i + 3];
            area += p1x * p2y - p2x * p1y;
        }
        p1x = vertices[offset + count - 2];
        p1y = vertices[offset + count - 1];
        p2x = vertices[offset];
        p2y = vertices[offset + 1];
        return area + p1x * p2y - p2x * p1y < 0;
    };
    EarClippingTriangulator.computeSpannedAreaSign = function (p1x, p1y, p2x, p2y, p3x, p3y) {
        var area = p1x * (p3y - p2y);
        area += p2x * (p1y - p3y);
        area += p3x * (p2y - p1y);
        return Math.sign(area);
    };
    EarClippingTriangulator.CONCAVE = -1;
    EarClippingTriangulator.CONVEX = 1;
    return EarClippingTriangulator;
}();
exports.EarClippingTriangulator = EarClippingTriangulator;

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
exports.gameProps = {
    "width": 800,
    "height": 600,
    "scaleStrategy": 1,
    "startSceneId": 2,
    "gravityConstant": 0
};

/***/ }),
/* 116 */
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
            "r": 191,
            "g": 192,
            "b": 251
        },
        "tileMap": {
            "type": "TileMap",
            "data": [],
            "width": 0,
            "height": 0,
            "blendMode": ""
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
        "children": [{
            "type": "GameObject",
            "id": 6
        }]
    }],
    "SpriteSheet": [{
        "name": "dino",
        "width": 800,
        "height": 306,
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
            "main": "resources/dino.png"
        },
        "type": "SpriteSheet",
        "numOfFramesH": 2,
        "id": 3
    }],
    "GameObjectProto": [{
        "id": 4,
        "name": "dino",
        "width": 400,
        "height": 306,
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
            "id": 3,
            "type": "SpriteSheet"
        },
        "frameAnimations": [{
            "type": "FrameAnimation",
            "id": 5
        }],
        "startFrameAnimationName": "walk",
        "velocity": {
            "x": 0,
            "y": 0
        }
    }],
    "FrameAnimation": [{
        "name": "walk",
        "type": "FrameAnimation",
        "frames": [0, 1],
        "duration": 300,
        "id": 5
    }],
    "GameObject": [{
        "id": 6,
        "name": "dino",
        "pos": {
            "x": 207,
            "y": 299
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
        "id": 9,
        "name": "images",
        "pos": {
            "x": 355,
            "y": 282
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
        "fontSize": 21,
        "fontFamily": "monospace",
        "fontContext": {
            "symbols": {
                "0": {
                    "x": 4,
                    "y": 37,
                    "width": 11,
                    "height": 25
                },
                "1": {
                    "x": 23,
                    "y": 37,
                    "width": 11,
                    "height": 25
                },
                "2": {
                    "x": 43,
                    "y": 37,
                    "width": 11,
                    "height": 25
                },
                "3": {
                    "x": 62,
                    "y": 37,
                    "width": 11,
                    "height": 25
                },
                "4": {
                    "x": 82,
                    "y": 37,
                    "width": 11,
                    "height": 25
                },
                "5": {
                    "x": 101,
                    "y": 37,
                    "width": 11,
                    "height": 25
                },
                "6": {
                    "x": 121,
                    "y": 37,
                    "width": 11,
                    "height": 25
                },
                "7": {
                    "x": 140,
                    "y": 37,
                    "width": 11,
                    "height": 25
                },
                "8": {
                    "x": 160,
                    "y": 37,
                    "width": 11,
                    "height": 25
                },
                "9": {
                    "x": 179,
                    "y": 37,
                    "width": 11,
                    "height": 25
                },
                " ": {
                    "x": 4,
                    "y": 4,
                    "width": 11,
                    "height": 25
                },
                "!": {
                    "x": 23,
                    "y": 4,
                    "width": 11,
                    "height": 25
                },
                "\"": {
                    "x": 43,
                    "y": 4,
                    "width": 11,
                    "height": 25
                },
                "#": {
                    "x": 62,
                    "y": 4,
                    "width": 11,
                    "height": 25
                },
                "$": {
                    "x": 82,
                    "y": 4,
                    "width": 11,
                    "height": 25
                },
                "%": {
                    "x": 101,
                    "y": 4,
                    "width": 11,
                    "height": 25
                },
                "&": {
                    "x": 121,
                    "y": 4,
                    "width": 11,
                    "height": 25
                },
                "'": {
                    "x": 140,
                    "y": 4,
                    "width": 11,
                    "height": 25
                },
                "(": {
                    "x": 160,
                    "y": 4,
                    "width": 11,
                    "height": 25
                },
                ")": {
                    "x": 179,
                    "y": 4,
                    "width": 11,
                    "height": 25
                },
                "*": {
                    "x": 199,
                    "y": 4,
                    "width": 11,
                    "height": 25
                },
                "+": {
                    "x": 219,
                    "y": 4,
                    "width": 11,
                    "height": 25
                },
                ",": {
                    "x": 238,
                    "y": 4,
                    "width": 11,
                    "height": 25
                },
                "-": {
                    "x": 258,
                    "y": 4,
                    "width": 11,
                    "height": 25
                },
                ".": {
                    "x": 277,
                    "y": 4,
                    "width": 11,
                    "height": 25
                },
                "/": {
                    "x": 297,
                    "y": 4,
                    "width": 11,
                    "height": 25
                },
                ":": {
                    "x": 199,
                    "y": 37,
                    "width": 11,
                    "height": 25
                },
                ";": {
                    "x": 219,
                    "y": 37,
                    "width": 11,
                    "height": 25
                },
                "<": {
                    "x": 238,
                    "y": 37,
                    "width": 11,
                    "height": 25
                },
                "=": {
                    "x": 258,
                    "y": 37,
                    "width": 11,
                    "height": 25
                },
                ">": {
                    "x": 277,
                    "y": 37,
                    "width": 11,
                    "height": 25
                },
                "?": {
                    "x": 297,
                    "y": 37,
                    "width": 11,
                    "height": 25
                },
                "@": {
                    "x": 4,
                    "y": 70,
                    "width": 11,
                    "height": 25
                },
                "A": {
                    "x": 23,
                    "y": 70,
                    "width": 11,
                    "height": 25
                },
                "B": {
                    "x": 43,
                    "y": 70,
                    "width": 11,
                    "height": 25
                },
                "C": {
                    "x": 62,
                    "y": 70,
                    "width": 11,
                    "height": 25
                },
                "D": {
                    "x": 82,
                    "y": 70,
                    "width": 11,
                    "height": 25
                },
                "E": {
                    "x": 101,
                    "y": 70,
                    "width": 11,
                    "height": 25
                },
                "F": {
                    "x": 121,
                    "y": 70,
                    "width": 11,
                    "height": 25
                },
                "G": {
                    "x": 140,
                    "y": 70,
                    "width": 11,
                    "height": 25
                },
                "H": {
                    "x": 160,
                    "y": 70,
                    "width": 11,
                    "height": 25
                },
                "I": {
                    "x": 179,
                    "y": 70,
                    "width": 11,
                    "height": 25
                },
                "J": {
                    "x": 199,
                    "y": 70,
                    "width": 11,
                    "height": 25
                },
                "K": {
                    "x": 219,
                    "y": 70,
                    "width": 11,
                    "height": 25
                },
                "L": {
                    "x": 238,
                    "y": 70,
                    "width": 11,
                    "height": 25
                },
                "M": {
                    "x": 258,
                    "y": 70,
                    "width": 11,
                    "height": 25
                },
                "N": {
                    "x": 277,
                    "y": 70,
                    "width": 11,
                    "height": 25
                },
                "O": {
                    "x": 297,
                    "y": 70,
                    "width": 11,
                    "height": 25
                },
                "P": {
                    "x": 4,
                    "y": 103,
                    "width": 11,
                    "height": 25
                },
                "Q": {
                    "x": 23,
                    "y": 103,
                    "width": 11,
                    "height": 25
                },
                "R": {
                    "x": 43,
                    "y": 103,
                    "width": 11,
                    "height": 25
                },
                "S": {
                    "x": 62,
                    "y": 103,
                    "width": 11,
                    "height": 25
                },
                "T": {
                    "x": 82,
                    "y": 103,
                    "width": 11,
                    "height": 25
                },
                "U": {
                    "x": 101,
                    "y": 103,
                    "width": 11,
                    "height": 25
                },
                "V": {
                    "x": 121,
                    "y": 103,
                    "width": 11,
                    "height": 25
                },
                "W": {
                    "x": 140,
                    "y": 103,
                    "width": 11,
                    "height": 25
                },
                "X": {
                    "x": 160,
                    "y": 103,
                    "width": 11,
                    "height": 25
                },
                "Y": {
                    "x": 179,
                    "y": 103,
                    "width": 11,
                    "height": 25
                },
                "Z": {
                    "x": 199,
                    "y": 103,
                    "width": 11,
                    "height": 25
                },
                "[": {
                    "x": 219,
                    "y": 103,
                    "width": 11,
                    "height": 25
                },
                "\\": {
                    "x": 238,
                    "y": 103,
                    "width": 11,
                    "height": 25
                },
                "]": {
                    "x": 258,
                    "y": 103,
                    "width": 11,
                    "height": 25
                },
                "^": {
                    "x": 277,
                    "y": 103,
                    "width": 11,
                    "height": 25
                },
                "_": {
                    "x": 297,
                    "y": 103,
                    "width": 11,
                    "height": 25
                },
                "`": {
                    "x": 4,
                    "y": 136,
                    "width": 11,
                    "height": 25
                },
                "a": {
                    "x": 23,
                    "y": 136,
                    "width": 11,
                    "height": 25
                },
                "b": {
                    "x": 43,
                    "y": 136,
                    "width": 11,
                    "height": 25
                },
                "c": {
                    "x": 62,
                    "y": 136,
                    "width": 11,
                    "height": 25
                },
                "d": {
                    "x": 82,
                    "y": 136,
                    "width": 11,
                    "height": 25
                },
                "e": {
                    "x": 101,
                    "y": 136,
                    "width": 11,
                    "height": 25
                },
                "f": {
                    "x": 121,
                    "y": 136,
                    "width": 11,
                    "height": 25
                },
                "g": {
                    "x": 140,
                    "y": 136,
                    "width": 11,
                    "height": 25
                },
                "h": {
                    "x": 160,
                    "y": 136,
                    "width": 11,
                    "height": 25
                },
                "i": {
                    "x": 179,
                    "y": 136,
                    "width": 11,
                    "height": 25
                },
                "j": {
                    "x": 199,
                    "y": 136,
                    "width": 11,
                    "height": 25
                },
                "k": {
                    "x": 219,
                    "y": 136,
                    "width": 11,
                    "height": 25
                },
                "l": {
                    "x": 238,
                    "y": 136,
                    "width": 11,
                    "height": 25
                },
                "m": {
                    "x": 258,
                    "y": 136,
                    "width": 11,
                    "height": 25
                },
                "n": {
                    "x": 277,
                    "y": 136,
                    "width": 11,
                    "height": 25
                },
                "o": {
                    "x": 297,
                    "y": 136,
                    "width": 11,
                    "height": 25
                },
                "p": {
                    "x": 4,
                    "y": 169,
                    "width": 11,
                    "height": 25
                },
                "q": {
                    "x": 23,
                    "y": 169,
                    "width": 11,
                    "height": 25
                },
                "r": {
                    "x": 43,
                    "y": 169,
                    "width": 11,
                    "height": 25
                },
                "s": {
                    "x": 62,
                    "y": 169,
                    "width": 11,
                    "height": 25
                },
                "t": {
                    "x": 82,
                    "y": 169,
                    "width": 11,
                    "height": 25
                },
                "u": {
                    "x": 101,
                    "y": 169,
                    "width": 11,
                    "height": 25
                },
                "v": {
                    "x": 121,
                    "y": 169,
                    "width": 11,
                    "height": 25
                },
                "w": {
                    "x": 140,
                    "y": 169,
                    "width": 11,
                    "height": 25
                },
                "x": {
                    "x": 160,
                    "y": 169,
                    "width": 11,
                    "height": 25
                },
                "y": {
                    "x": 179,
                    "y": 169,
                    "width": 11,
                    "height": 25
                },
                "z": {
                    "x": 199,
                    "y": 169,
                    "width": 11,
                    "height": 25
                },
                "{": {
                    "x": 219,
                    "y": 169,
                    "width": 11,
                    "height": 25
                },
                "|": {
                    "x": 238,
                    "y": 169,
                    "width": 11,
                    "height": 25
                },
                "}": {
                    "x": 258,
                    "y": 169,
                    "width": 11,
                    "height": 25
                },
                "~": {
                    "x": 277,
                    "y": 169,
                    "width": 11,
                    "height": 25
                },
                "": {
                    "x": 297,
                    "y": 169,
                    "width": 10,
                    "height": 25
                },
                "": {
                    "x": 315,
                    "y": 169,
                    "width": 0,
                    "height": 25
                },
                "": {
                    "x": 4,
                    "y": 202,
                    "width": 0,
                    "height": 25
                },
                "": {
                    "x": 12,
                    "y": 202,
                    "width": 10,
                    "height": 25
                },
                "": {
                    "x": 30,
                    "y": 202,
                    "width": 10,
                    "height": 25
                },
                "": {
                    "x": 49,
                    "y": 202,
                    "width": 10,
                    "height": 25
                },
                "": {
                    "x": 67,
                    "y": 202,
                    "width": 16,
                    "height": 25
                },
                "": {
                    "x": 92,
                    "y": 202,
                    "width": 10,
                    "height": 25
                },
                "": {
                    "x": 110,
                    "y": 202,
                    "width": 10,
                    "height": 25
                },
                "": {
                    "x": 129,
                    "y": 202,
                    "width": 7,
                    "height": 25
                },
                "": {
                    "x": 144,
                    "y": 202,
                    "width": 16,
                    "height": 25
                },
                "": {
                    "x": 169,
                    "y": 202,
                    "width": 10,
                    "height": 25
                },
                "": {
                    "x": 187,
                    "y": 202,
                    "width": 10,
                    "height": 25
                },
                "": {
                    "x": 205,
                    "y": 202,
                    "width": 20,
                    "height": 25
                },
                "": {
                    "x": 234,
                    "y": 202,
                    "width": 0,
                    "height": 25
                },
                "": {
                    "x": 242,
                    "y": 202,
                    "width": 0,
                    "height": 25
                },
                "": {
                    "x": 250,
                    "y": 202,
                    "width": 0,
                    "height": 25
                },
                "": {
                    "x": 258,
                    "y": 202,
                    "width": 0,
                    "height": 25
                },
                "": {
                    "x": 266,
                    "y": 202,
                    "width": 4,
                    "height": 25
                },
                "": {
                    "x": 278,
                    "y": 202,
                    "width": 4,
                    "height": 25
                },
                "": {
                    "x": 291,
                    "y": 202,
                    "width": 8,
                    "height": 25
                },
                "": {
                    "x": 4,
                    "y": 235,
                    "width": 8,
                    "height": 25
                },
                "": {
                    "x": 20,
                    "y": 235,
                    "width": 0,
                    "height": 25
                },
                "А": {
                    "x": 28,
                    "y": 235,
                    "width": 11,
                    "height": 25
                },
                "Б": {
                    "x": 48,
                    "y": 235,
                    "width": 11,
                    "height": 25
                },
                "В": {
                    "x": 67,
                    "y": 235,
                    "width": 11,
                    "height": 25
                },
                "Г": {
                    "x": 87,
                    "y": 235,
                    "width": 11,
                    "height": 25
                },
                "Д": {
                    "x": 107,
                    "y": 235,
                    "width": 11,
                    "height": 25
                },
                "Е": {
                    "x": 126,
                    "y": 235,
                    "width": 11,
                    "height": 25
                },
                "Ж": {
                    "x": 146,
                    "y": 235,
                    "width": 11,
                    "height": 25
                },
                "З": {
                    "x": 165,
                    "y": 235,
                    "width": 11,
                    "height": 25
                },
                "И": {
                    "x": 185,
                    "y": 235,
                    "width": 11,
                    "height": 25
                },
                "Й": {
                    "x": 204,
                    "y": 235,
                    "width": 11,
                    "height": 25
                },
                "К": {
                    "x": 224,
                    "y": 235,
                    "width": 11,
                    "height": 25
                },
                "Л": {
                    "x": 243,
                    "y": 235,
                    "width": 11,
                    "height": 25
                },
                "М": {
                    "x": 263,
                    "y": 235,
                    "width": 11,
                    "height": 25
                },
                "Н": {
                    "x": 282,
                    "y": 235,
                    "width": 11,
                    "height": 25
                },
                "О": {
                    "x": 302,
                    "y": 235,
                    "width": 11,
                    "height": 25
                },
                "П": {
                    "x": 4,
                    "y": 268,
                    "width": 11,
                    "height": 25
                },
                "Р": {
                    "x": 23,
                    "y": 268,
                    "width": 11,
                    "height": 25
                },
                "С": {
                    "x": 43,
                    "y": 268,
                    "width": 11,
                    "height": 25
                },
                "Т": {
                    "x": 62,
                    "y": 268,
                    "width": 11,
                    "height": 25
                },
                "У": {
                    "x": 82,
                    "y": 268,
                    "width": 11,
                    "height": 25
                },
                "Ф": {
                    "x": 101,
                    "y": 268,
                    "width": 11,
                    "height": 25
                },
                "Х": {
                    "x": 121,
                    "y": 268,
                    "width": 11,
                    "height": 25
                },
                "Ц": {
                    "x": 140,
                    "y": 268,
                    "width": 11,
                    "height": 25
                },
                "Ч": {
                    "x": 160,
                    "y": 268,
                    "width": 11,
                    "height": 25
                },
                "Ш": {
                    "x": 179,
                    "y": 268,
                    "width": 11,
                    "height": 25
                },
                "Щ": {
                    "x": 199,
                    "y": 268,
                    "width": 11,
                    "height": 25
                },
                "Ъ": {
                    "x": 219,
                    "y": 268,
                    "width": 11,
                    "height": 25
                },
                "Ы": {
                    "x": 238,
                    "y": 268,
                    "width": 11,
                    "height": 25
                },
                "Ь": {
                    "x": 258,
                    "y": 268,
                    "width": 11,
                    "height": 25
                },
                "Э": {
                    "x": 277,
                    "y": 268,
                    "width": 11,
                    "height": 25
                },
                "Ю": {
                    "x": 297,
                    "y": 268,
                    "width": 11,
                    "height": 25
                },
                "Я": {
                    "x": 4,
                    "y": 301,
                    "width": 11,
                    "height": 25
                },
                "а": {
                    "x": 23,
                    "y": 301,
                    "width": 11,
                    "height": 25
                },
                "б": {
                    "x": 43,
                    "y": 301,
                    "width": 11,
                    "height": 25
                },
                "в": {
                    "x": 62,
                    "y": 301,
                    "width": 11,
                    "height": 25
                },
                "г": {
                    "x": 82,
                    "y": 301,
                    "width": 11,
                    "height": 25
                },
                "д": {
                    "x": 101,
                    "y": 301,
                    "width": 11,
                    "height": 25
                },
                "е": {
                    "x": 121,
                    "y": 301,
                    "width": 11,
                    "height": 25
                },
                "ж": {
                    "x": 140,
                    "y": 301,
                    "width": 11,
                    "height": 25
                },
                "з": {
                    "x": 160,
                    "y": 301,
                    "width": 11,
                    "height": 25
                },
                "и": {
                    "x": 179,
                    "y": 301,
                    "width": 11,
                    "height": 25
                },
                "й": {
                    "x": 199,
                    "y": 301,
                    "width": 11,
                    "height": 25
                },
                "к": {
                    "x": 219,
                    "y": 301,
                    "width": 11,
                    "height": 25
                },
                "л": {
                    "x": 238,
                    "y": 301,
                    "width": 11,
                    "height": 25
                },
                "м": {
                    "x": 258,
                    "y": 301,
                    "width": 11,
                    "height": 25
                },
                "н": {
                    "x": 277,
                    "y": 301,
                    "width": 11,
                    "height": 25
                },
                "о": {
                    "x": 297,
                    "y": 301,
                    "width": 11,
                    "height": 25
                },
                "п": {
                    "x": 4,
                    "y": 334,
                    "width": 11,
                    "height": 25
                },
                "р": {
                    "x": 23,
                    "y": 334,
                    "width": 11,
                    "height": 25
                },
                "с": {
                    "x": 43,
                    "y": 334,
                    "width": 11,
                    "height": 25
                },
                "т": {
                    "x": 62,
                    "y": 334,
                    "width": 11,
                    "height": 25
                },
                "у": {
                    "x": 82,
                    "y": 334,
                    "width": 11,
                    "height": 25
                },
                "ф": {
                    "x": 101,
                    "y": 334,
                    "width": 11,
                    "height": 25
                },
                "х": {
                    "x": 121,
                    "y": 334,
                    "width": 11,
                    "height": 25
                },
                "ц": {
                    "x": 140,
                    "y": 334,
                    "width": 11,
                    "height": 25
                },
                "ч": {
                    "x": 160,
                    "y": 334,
                    "width": 11,
                    "height": 25
                },
                "ш": {
                    "x": 179,
                    "y": 334,
                    "width": 11,
                    "height": 25
                },
                "щ": {
                    "x": 199,
                    "y": 334,
                    "width": 11,
                    "height": 25
                },
                "ъ": {
                    "x": 219,
                    "y": 334,
                    "width": 11,
                    "height": 25
                },
                "ы": {
                    "x": 238,
                    "y": 334,
                    "width": 11,
                    "height": 25
                },
                "ь": {
                    "x": 258,
                    "y": 334,
                    "width": 11,
                    "height": 25
                },
                "э": {
                    "x": 277,
                    "y": 334,
                    "width": 11,
                    "height": 25
                },
                "ю": {
                    "x": 297,
                    "y": 334,
                    "width": 11,
                    "height": 25
                },
                "я": {
                    "x": 4,
                    "y": 367,
                    "width": 11,
                    "height": 25
                },
                "ѐ": {
                    "x": 23,
                    "y": 367,
                    "width": 11,
                    "height": 25
                },
                "ё": {
                    "x": 43,
                    "y": 367,
                    "width": 11,
                    "height": 25
                },
                "ђ": {
                    "x": 62,
                    "y": 367,
                    "width": 11,
                    "height": 25
                },
                "ѓ": {
                    "x": 82,
                    "y": 367,
                    "width": 11,
                    "height": 25
                },
                "є": {
                    "x": 101,
                    "y": 367,
                    "width": 11,
                    "height": 25
                },
                "ѕ": {
                    "x": 121,
                    "y": 367,
                    "width": 11,
                    "height": 25
                },
                "і": {
                    "x": 140,
                    "y": 367,
                    "width": 11,
                    "height": 25
                },
                "ї": {
                    "x": 160,
                    "y": 367,
                    "width": 11,
                    "height": 25
                },
                "ј": {
                    "x": 179,
                    "y": 367,
                    "width": 11,
                    "height": 25
                },
                "љ": {
                    "x": 199,
                    "y": 367,
                    "width": 11,
                    "height": 25
                },
                "њ": {
                    "x": 219,
                    "y": 367,
                    "width": 11,
                    "height": 25
                },
                "ћ": {
                    "x": 238,
                    "y": 367,
                    "width": 11,
                    "height": 25
                }
            },
            "width": 320,
            "height": 396
        },
        "id": 10
    }]
};

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var dino_1 = __webpack_require__(118);
exports.DinoBehaviour = dino_1.DinoBehaviour;
var images_1 = __webpack_require__(119);
exports.ImagesBehaviour = images_1.ImagesBehaviour;
var mainScene_1 = __webpack_require__(120);
exports.MainSceneBehaviour = mainScene_1.MainSceneBehaviour;

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var DinoBehaviour = function () {
    function DinoBehaviour() {}
    DinoBehaviour.prototype.onCreate = function () {};
    DinoBehaviour.prototype.onUpdate = function () {
        this.gameObject.pos.x -= 1;
        if (this.gameObject.pos.x < -this.gameObject.width) this.gameObject.pos.x = this.game.width + this.gameObject.width;
    };
    DinoBehaviour.prototype.onDestroy = function () {};
    return DinoBehaviour;
}();
exports.DinoBehaviour = DinoBehaviour;

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var ImagesBehaviour = function () {
    function ImagesBehaviour() {}
    ImagesBehaviour.prototype.onCreate = function () {};
    ImagesBehaviour.prototype.onUpdate = function () {};
    ImagesBehaviour.prototype.onDestroy = function () {};
    return ImagesBehaviour;
}();
exports.ImagesBehaviour = ImagesBehaviour;

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var container_1 = __webpack_require__(6);
var MainSceneBehaviour = function () {
    function MainSceneBehaviour() {}
    MainSceneBehaviour.prototype.onCreate = function () {
        var bgView = this.game.uiBuilder.build({
            AbsoluteLayout: {
                id: 'mainFrame',
                pos: { x: 200, y: 0 },
                width: this.game.width,
                height: this.game.height,
                layoutWidth: container_1.LAYOUT_SIZE.WRAP_CONTENT,
                layoutHeight: container_1.LAYOUT_SIZE.WRAP_CONTENT,
                background: {
                    Rectangle: {
                        lineWidth: 1,
                        borderRadius: 5,
                        fillColor: { r: 12, g: 40, b: 12, a: 60 }
                    }
                },
                children: [{
                    TextField: {
                        pos: { x: 10, y: 10 },
                        fontName: 'scriptFont',
                        text: "Dont forget your time sheets",
                        textAlign: 'CENTER'
                    }
                }]
            }
        });
        this.scene.findObject({ name: 'dino' }).appendChild(bgView);
    };
    return MainSceneBehaviour;
}();
exports.MainSceneBehaviour = MainSceneBehaviour;

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
exports.embeddedResources = {
    "resources/dino.png": "data:image/png;base64,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",
    "resources/images.jpg": "data:image/jpg;base64,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",
    "resources/scriptFont.png": "data:image/png;base64,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"
};

/***/ })
/******/ ]);