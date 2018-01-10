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
/******/ 	return __webpack_require__(__webpack_require__.s = 88);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__commonObject__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_tween__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_misc_eventEmitter__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_misc_decorators__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_physics_arcadeRigidBody__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_geometry_rect__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_geometry_point2d__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__declarations__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__declarations___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__declarations__);
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








var BaseModel = /** @class */ (function (_super) {
    __extends(BaseModel, _super);
    function BaseModel(game) {
        var _this = _super.call(this) || this;
        _this.id = null;
        _this.name = null;
        _this.width = 0;
        _this.height = 0;
        _this.pos = new __WEBPACK_IMPORTED_MODULE_6__core_geometry_point2d__["a" /* default */](0, 0);
        _this.scale = new __WEBPACK_IMPORTED_MODULE_6__core_geometry_point2d__["a" /* default */](1, 1);
        _this.angle = 0;
        _this.alpha = 1;
        _this.layerId = null;
        _this.fixedToCamera = false;
        _this.rigid = false;
        _this._tweens = [];
        _this._rect = new __WEBPACK_IMPORTED_MODULE_5__core_geometry_rect__["a" /* default */](0, 0);
        if (__WEBPACK_IMPORTED_MODULE_7__declarations__["DEBUG"] && !game)
            throw ("can not create model '" + _this.type + "': game instance not passed to model constructor");
        _this.game = game;
        _this._emitter = new __WEBPACK_IMPORTED_MODULE_2__core_misc_eventEmitter__["a" /* default */]();
        return _this;
    }
    BaseModel.prototype.revalidate = function () {
        this.rigidBody = this.rigid ? new __WEBPACK_IMPORTED_MODULE_4__core_physics_arcadeRigidBody__["a" /* default */](this) : null;
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
        var t = new __WEBPACK_IMPORTED_MODULE_1__core_tween__["a" /* default */](desc);
        this._tweens.push(t);
    };
    BaseModel.prototype.update = function (time, delta) {
        var _this = this;
        this._tweens.forEach(function (t, index) {
            t.update(time);
            if (t.completed)
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
        if (!__WEBPACK_IMPORTED_MODULE_7__declarations__["DEBUG"])
            return;
        var cloner = this._cloner;
        if (!cloner)
            return;
        cloner.fromJSON(this.toJSON(opts));
        cloner.updateCloner(opts);
        delete this._cloner;
    };
    BaseModel = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__core_misc_decorators__["a" /* Transient */])({
            game: true,
            rigidBody: true
        })
    ], BaseModel);
    return BaseModel;
}(__WEBPACK_IMPORTED_MODULE_0__commonObject__["a" /* default */]));
/* harmony default export */ __webpack_exports__["a"] = (BaseModel);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shaderProgramUtils__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__declarations__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__declarations___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__declarations__);
/*global DEBUG:true*/


var ShaderProgram = /** @class */ (function () {
    function ShaderProgram(gl, vertexSource, fragmentSource) {
        this._attrLocationCache = {};
        var vShader = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__shaderProgramUtils__["b" /* compileShader */])(gl, vertexSource, gl.VERTEX_SHADER);
        var fShader = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__shaderProgramUtils__["b" /* compileShader */])(gl, fragmentSource, gl.FRAGMENT_SHADER);
        this.program = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__shaderProgramUtils__["c" /* createProgram */])(gl, vShader, fShader);
        this.uniforms = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__shaderProgramUtils__["d" /* extractUniforms */])(gl, this.program);
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
        if (__WEBPACK_IMPORTED_MODULE_1__declarations__["DEBUG"] && !uniform)
            throw "no uniform with name " + name + " found!";
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
    ShaderProgram.prototype.bindBuffer = function (buffer, attrLocationName) {
        if (__WEBPACK_IMPORTED_MODULE_1__declarations__["DEBUG"]) {
            if (!attrLocationName)
                throw "can not found attribute location: attrLocationName not defined";
        }
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, buffer.getGlBuffer());
        var attrLocation = this._attrLocationCache[attrLocationName] ||
            this.gl.getAttribLocation(this.program, attrLocationName);
        if (__WEBPACK_IMPORTED_MODULE_1__declarations__["DEBUG"]) {
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
    ShaderProgram.currentProgram = null;
    return ShaderProgram;
}());
/* harmony default export */ __webpack_exports__["a"] = (ShaderProgram);


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return compileShader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createProgram; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GL_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return extractUniforms; });
/* unused harmony export getUniformSetter */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__declarations__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__declarations___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__declarations__);

var compileShader = function (gl, shaderSource, shaderType) {
    if (__WEBPACK_IMPORTED_MODULE_0__declarations__["DEBUG"]) {
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
        if (__WEBPACK_IMPORTED_MODULE_0__declarations__["DEBUG"]) {
            console.log(shaderSource);
            throw "Error compiling shader: " + lastError;
        }
        else {
            throw lastError;
        }
    }
    return shader;
};
var createProgram = function (gl, vertexShader, fragmentShader) {
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
        if (__WEBPACK_IMPORTED_MODULE_0__declarations__["DEBUG"]) {
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
var GL_TYPE = {
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
        var typeNames = Object.keys(GL_TYPE);
        GL_TABLE = {};
        for (var i = 0; i < typeNames.length; ++i) {
            var tn = typeNames[i];
            GL_TABLE[gl[tn]] = GL_TYPE[tn];
        }
    }
    return GL_TABLE[type];
};
var extractUniforms = function (gl, program) {
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
            setter: getUniformSetter(uniformData.size, type)
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
var TypeArray = function (ElType, size) {
    return {
        check: function (val) {
            if (!val.splice)
                throw "can not set uniform with value " + val + ": expected argument of type Array";
            if (size !== undefined && val.length !== size)
                throw "can not set uniform with value " + val + ": expected array with size " + size + ", but " + val.length + " found";
            for (var i = 0; i < val.length; i++) {
                try {
                    ElType.check(val[i]);
                }
                catch (e) {
                    throw "can not set uniform with value " + val + ": unexpected array element type: " + val[i];
                }
            }
        }
    };
};
var expect = function (value, typeChecker) {
    typeChecker.check(value);
};
var getUniformSetter = function (size, type) {
    if (size === 1) {
        switch (type) {
            case 'float': return function (gl, location, value) {
                __WEBPACK_IMPORTED_MODULE_0__declarations__["DEBUG"] && expect(value, TypeNumber);
                gl.uniform1f(location, value);
            };
            case 'vec2': return function (gl, location, value) {
                __WEBPACK_IMPORTED_MODULE_0__declarations__["DEBUG"] && expect(value, TypeArray(TypeNumber, 2));
                gl.uniform2f(location, value[0], value[1]);
            };
            case 'vec3': return function (gl, location, value) {
                __WEBPACK_IMPORTED_MODULE_0__declarations__["DEBUG"] && expect(value, TypeArray(TypeNumber, 3));
                gl.uniform3f(location, value[0], value[1], value[2]);
            };
            case 'vec4': return function (gl, location, value) {
                __WEBPACK_IMPORTED_MODULE_0__declarations__["DEBUG"] && expect(value, TypeArray(TypeNumber, 4));
                gl.uniform4f(location, value[0], value[1], value[2], value[3]);
            };
            case 'int': return function (gl, location, value) {
                __WEBPACK_IMPORTED_MODULE_0__declarations__["DEBUG"] && expect(value, TypeInt);
                gl.uniform1i(location, value);
            };
            case 'ivec2': return function (gl, location, value) {
                __WEBPACK_IMPORTED_MODULE_0__declarations__["DEBUG"] && expect(value, TypeArray(TypeInt, 2));
                gl.uniform2i(location, value[0], value[1]);
            };
            case 'ivec3': return function (gl, location, value) {
                __WEBPACK_IMPORTED_MODULE_0__declarations__["DEBUG"] && expect(value, TypeArray(TypeInt, 3));
                gl.uniform3i(location, value[0], value[1], value[2]);
            };
            case 'ivec4': return function (gl, location, value) {
                __WEBPACK_IMPORTED_MODULE_0__declarations__["DEBUG"] && expect(value, TypeArray(TypeInt, 4));
                gl.uniform4i(location, value[0], value[1], value[2], value[3]);
            };
            case 'bool': return function (gl, location, value) {
                __WEBPACK_IMPORTED_MODULE_0__declarations__["DEBUG"] && expect(value, TypeInt);
                gl.uniform1i(location, value);
            };
            case 'bvec2': return function (gl, location, value) {
                __WEBPACK_IMPORTED_MODULE_0__declarations__["DEBUG"] && expect(value, TypeArray(TypeInt, 2));
                gl.uniform2i(location, value[0], value[1]);
            };
            case 'bvec3': return function (gl, location, value) {
                __WEBPACK_IMPORTED_MODULE_0__declarations__["DEBUG"] && expect(value, TypeArray(TypeInt, 3));
                gl.uniform3i(location, value[0], value[1], value[2]);
            };
            case 'bvec4': return function (gl, location, value) {
                __WEBPACK_IMPORTED_MODULE_0__declarations__["DEBUG"] && expect(value, TypeArray(TypeInt, 4));
                gl.uniform4i(location, value[0], value[1], value[2], value[3]);
            };
            case 'mat2': return function (gl, location, value) {
                __WEBPACK_IMPORTED_MODULE_0__declarations__["DEBUG"] && expect(value, TypeArray(TypeNumber, 2 * 2));
                gl.uniformMatrix2fv(location, false, value); // location, transpose (Must be false), value
            };
            case 'mat3': return function (gl, location, value) {
                __WEBPACK_IMPORTED_MODULE_0__declarations__["DEBUG"] && expect(value, TypeArray(TypeNumber, 3 * 3));
                gl.uniformMatrix3fv(location, false, value);
            };
            case 'mat4': return function (gl, location, value) {
                __WEBPACK_IMPORTED_MODULE_0__declarations__["DEBUG"] && expect(value, TypeArray(TypeNumber, 4 * 4));
                gl.uniformMatrix4fv(location, false, value);
            };
            case 'sampler2D': return function (gl, location, value) {
                __WEBPACK_IMPORTED_MODULE_0__declarations__["DEBUG"] && expect(value, TypeInt);
                gl.uniform1i(location, value);
            };
        }
    }
    else {
        switch (type) {
            case 'float': return function (gl, location, value) {
                __WEBPACK_IMPORTED_MODULE_0__declarations__["DEBUG"] && expect(value, TypeArray(TypeNumber));
                gl.uniform1fv(location, value);
            };
            case 'vec2': return function (gl, location, value) {
                __WEBPACK_IMPORTED_MODULE_0__declarations__["DEBUG"] && expect(value, TypeArray(TypeNumber));
                gl.uniform2fv(location, value);
            };
            case 'vec3': return function (gl, location, value) {
                __WEBPACK_IMPORTED_MODULE_0__declarations__["DEBUG"] && expect(value, TypeArray(TypeNumber));
                gl.uniform3fv(location, value);
            };
            case 'vec4': return function (gl, location, value) {
                __WEBPACK_IMPORTED_MODULE_0__declarations__["DEBUG"] && expect(value, TypeArray(TypeNumber));
                gl.uniform4fv(location, value);
            };
            case 'int': return function (gl, location, value) {
                __WEBPACK_IMPORTED_MODULE_0__declarations__["DEBUG"] && expect(value, TypeArray(TypeInt));
                gl.uniform1iv(location, value);
            };
            case 'ivec2': return function (gl, location, value) {
                __WEBPACK_IMPORTED_MODULE_0__declarations__["DEBUG"] && expect(value, TypeArray(TypeInt));
                gl.uniform2iv(location, value);
            };
            case 'ivec3': return function (gl, location, value) {
                __WEBPACK_IMPORTED_MODULE_0__declarations__["DEBUG"] && expect(value, TypeArray(TypeInt));
                gl.uniform3iv(location, value);
            };
            case 'ivec4': return function (gl, location, value) {
                __WEBPACK_IMPORTED_MODULE_0__declarations__["DEBUG"] && expect(value, TypeArray(TypeInt));
                gl.uniform4iv(location, value);
            };
            case 'bool': return function (gl, location, value) {
                __WEBPACK_IMPORTED_MODULE_0__declarations__["DEBUG"] && expect(value, TypeArray(TypeInt));
                gl.uniform1iv(location, value);
            };
            case 'bvec2': return function (gl, location, value) {
                __WEBPACK_IMPORTED_MODULE_0__declarations__["DEBUG"] && expect(value, TypeArray(TypeInt));
                gl.uniform2iv(location, value);
            };
            case 'bvec3': return function (gl, location, value) {
                __WEBPACK_IMPORTED_MODULE_0__declarations__["DEBUG"] && expect(value, TypeArray(TypeInt));
                gl.uniform3iv(location, value);
            };
            case 'bvec4': return function (gl, location, value) {
                __WEBPACK_IMPORTED_MODULE_0__declarations__["DEBUG"] && expect(value, TypeArray(TypeInt));
                gl.uniform4iv(location, value);
            };
            case 'sampler2D': return function (gl, location, value) {
                __WEBPACK_IMPORTED_MODULE_0__declarations__["DEBUG"] && expect(value, TypeArray(TypeInt));
                gl.uniform1iv(location, value);
            };
        }
    }
};


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var Point2d = /** @class */ (function () {
    function Point2d(x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        this.x = 0;
        this.y = 0;
        this.x = x;
        this.y = y;
    }
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
    Point2d.prototype.equal = function (val) {
        return this.x === val && this.y === val;
    };
    Point2d.prototype.fromJSON = function (json) {
        this.set(json);
    };
    Point2d.prototype.toJSON = function () {
        return { x: this.x, y: this.y };
    };
    return Point2d;
}());
/* harmony default export */ __webpack_exports__["a"] = (Point2d);


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPointInRect", function() { return isPointInRect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "overlapTest", function() { return overlapTest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "radToDeg", function() { return radToDeg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "degToRad", function() { return degToRad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "random", function() { return random; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unProject", function() { return unProject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "linear", function() { return linear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeInQuad", function() { return easeInQuad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeOutQuad", function() { return easeOutQuad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeInOutQuad", function() { return easeInOutQuad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeInCubic", function() { return easeInCubic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeOutCubic", function() { return easeOutCubic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeInOutCubic", function() { return easeInOutCubic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeInQuart", function() { return easeInQuart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeOutQuart", function() { return easeOutQuart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeInOutQuart", function() { return easeInOutQuart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeInQuint", function() { return easeInQuint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeOutQuint", function() { return easeOutQuint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeInOutQuint", function() { return easeInOutQuint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeInSine", function() { return easeInSine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeOutSine", function() { return easeOutSine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeInOutSine", function() { return easeInOutSine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeInExpo", function() { return easeInExpo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeOutExpo", function() { return easeOutExpo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeInOutExpo", function() { return easeInOutExpo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeInCirc", function() { return easeInCirc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeOutCirc", function() { return easeOutCirc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeInOutCirc", function() { return easeInOutCirc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeInElastic", function() { return easeInElastic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeOutElastic", function() { return easeOutElastic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeInOutElastic", function() { return easeInOutElastic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeInBack", function() { return easeInBack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeOutBack", function() { return easeOutBack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeInOutBack", function() { return easeInOutBack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeInBounce", function() { return easeInBounce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeOutBounce", function() { return easeOutBounce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeInOutBounce", function() { return easeInOutBounce; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__geometry_mat4__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__geometry_point2d__ = __webpack_require__(4);


var isPointInRect = function (point, rect, angle) {
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
var overlapTest = function (a, b) {
    return (a.x < b.x + b.width) &&
        (a.x + a.width > b.x) &&
        (a.y < b.y + b.height) &&
        (a.y + a.height > b.y);
};
var radToDeg = function (rad) {
    return rad * 180 / Math.PI;
};
var degToRad = function (deg) {
    return deg * Math.PI / 180;
};
var random = function (min, max) {
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
var unProject = function (winX, winY, width, height, viewProjectionMatrix) {
    var x = 2.0 * winX / width - 1;
    var y = 2.0 * winY / height - 1;
    var viewProjectionInverse = __WEBPACK_IMPORTED_MODULE_0__geometry_mat4__["f" /* inverse */](viewProjectionMatrix);
    var point3D = [x, y, 0, 1];
    var res = __WEBPACK_IMPORTED_MODULE_0__geometry_mat4__["g" /* multMatrixVec */](viewProjectionInverse, point3D);
    res[0] = (res[0] / 2 + 0.5) * width;
    res[1] = (res[1] / 2 + 0.5) * height;
    return new __WEBPACK_IMPORTED_MODULE_1__geometry_point2d__["a" /* default */](res[0], res[1]);
};
// simple linear tweening - no easing, no acceleration
var linear = function (t, b, c, d) { return c * t / d + b; };
// quadratic easing in - accelerating from zero velocity
var easeInQuad = function (t, b, c, d) {
    t /= d;
    return c * t * t + b;
};
// quadratic easing out - decelerating to zero velocity
var easeOutQuad = function (t, b, c, d) {
    t /= d;
    return -c * t * (t - 2) + b;
};
// quadratic easing in/out - acceleration until halfway, then deceleration
var easeInOutQuad = function (t, b, c, d) {
    t /= d / 2;
    if (t < 1)
        return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
};
// cubic easing in - accelerating from zero velocity
var easeInCubic = function (t, b, c, d) {
    t /= d;
    return c * t * t * t + b;
};
// cubic easing out - decelerating to zero velocity
var easeOutCubic = function (t, b, c, d) {
    t /= d;
    t--;
    return c * (t * t * t + 1) + b;
};
// cubic easing in/out - acceleration until halfway, then deceleration
var easeInOutCubic = function (t, b, c, d) {
    t /= d / 2;
    if (t < 1)
        return c / 2 * t * t * t + b;
    t -= 2;
    return c / 2 * (t * t * t + 2) + b;
};
// quartic easing in - accelerating from zero velocity
var easeInQuart = function (t, b, c, d) {
    t /= d;
    return c * t * t * t * t + b;
};
// quartic easing out - decelerating to zero velocity
var easeOutQuart = function (t, b, c, d) {
    t /= d;
    t--;
    return -c * (t * t * t * t - 1) + b;
};
// quartic easing in/out - acceleration until halfway, then deceleration
var easeInOutQuart = function (t, b, c, d) {
    t /= d / 2;
    if (t < 1)
        return c / 2 * t * t * t * t + b;
    t -= 2;
    return -c / 2 * (t * t * t * t - 2) + b;
};
// quintic easing in - accelerating from zero velocity
var easeInQuint = function (t, b, c, d) {
    t /= d;
    return c * t * t * t * t * t + b;
};
// quintic easing out - decelerating to zero velocity
var easeOutQuint = function (t, b, c, d) {
    t /= d;
    t--;
    return c * (t * t * t * t * t + 1) + b;
};
// quintic easing in/out - acceleration until halfway, then deceleration
var easeInOutQuint = function (t, b, c, d) {
    t /= d / 2;
    if (t < 1)
        return c / 2 * t * t * t * t * t + b;
    t -= 2;
    return c / 2 * (t * t * t * t * t + 2) + b;
};
// sinusoidal easing in - accelerating from zero velocity
var easeInSine = function (t, b, c, d) {
    return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
};
// sinusoidal easing out - decelerating to zero velocity
var easeOutSine = function (t, b, c, d) {
    return c * Math.sin(t / d * (Math.PI / 2)) + b;
};
// sinusoidal easing in/out - accelerating until halfway, then decelerating
var easeInOutSine = function (t, b, c, d) {
    return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
};
// exponential easing in - accelerating from zero velocity
var easeInExpo = function (t, b, c, d) {
    return c * Math.pow(2, 10 * (t / d - 1)) + b;
};
// exponential easing out - decelerating to zero velocity
var easeOutExpo = function (t, b, c, d) {
    return c * (-Math.pow(2, -10 * t / d) + 1) + b;
};
// exponential easing in/out - accelerating until halfway, then decelerating
var easeInOutExpo = function (t, b, c, d) {
    t /= d / 2;
    if (t < 1)
        return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
    t--;
    return c / 2 * (-Math.pow(2, -10 * t) + 2) + b;
};
// circular easing in - accelerating from zero velocity
var easeInCirc = function (t, b, c, d) {
    t /= d;
    return -c * (Math.sqrt(1 - t * t) - 1) + b;
};
// circular easing out - decelerating to zero velocity
var easeOutCirc = function (t, b, c, d) {
    t /= d;
    t--;
    return c * Math.sqrt(1 - t * t) + b;
};
// circular easing in/out - acceleration until halfway, then deceleration
var easeInOutCirc = function (t, b, c, d) {
    t /= d / 2;
    if (t < 1)
        return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
    t -= 2;
    return c / 2 * (Math.sqrt(1 - t * t) + 1) + b;
};
var easeInElastic = function (t, b, c, d) {
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
var easeOutElastic = function (t, b, c, d) {
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
var easeInOutElastic = function (t, b, c, d) {
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
var easeInBack = function (t, b, c, d) {
    var s = 1.70158;
    return c * (t /= d) * t * ((s + 1) * t - s) + b;
};
var easeOutBack = function (t, b, c, d) {
    var s = 1.70158;
    return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
};
var easeInOutBack = function (t, b, c, d) {
    var s = 1.70158;
    if ((t /= d / 2) < 1)
        return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
    return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b;
};
var easeInBounce = function (t, b, c, d) {
    return c - easeOutBounce(d - t, 0, c, d) + b;
};
var easeOutBounce = function (t, b, c, d) {
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
var easeInOutBounce = function (t, b, c, d) {
    if (t < d / 2)
        return easeInBounce(t * 2, 0, c, d) * .5 + b;
    else
        return easeOutBounce(t * 2 - d, 0, c, d) * .5 + c * .5 + b;
};


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var AbstractDrawer = /** @class */ (function () {
    function AbstractDrawer(gl) {
        this.program = null;
        this.uniformCache = {};
        this.gl = gl;
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
    AbstractDrawer.prototype.setUniform = function (name, value) {
        if (this.uniformCache[name] === value)
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
    return AbstractDrawer;
}());
/* harmony default export */ __webpack_exports__["a"] = (AbstractDrawer);


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return makeIdentity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return makeZToWMatrix; });
/* unused harmony export make2DProjection */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ortho; });
/* unused harmony export perspective */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return makeTranslation; });
/* unused harmony export makeXRotation */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return makeYRotation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return makeZRotation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return makeScale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return matrixMultiply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return multMatrixVec; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return inverse; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__declarations__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__declarations___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__declarations__);
/*global DEBUG:true*/
// todo convert to plain good oop style???
// https://evanw.github.io/lightgl.js/docs/matrix.html

var makeIdentity = function () {
    return [
        1, 0, 0, 0,
        0, 1, 0, 0,
        0, 0, 1, 0,
        0, 0, 0, 1
    ];
};
var makeZToWMatrix = function (fudgeFactor) {
    return [
        1, 0, 0, 0,
        0, 1, 0, 0,
        0, 0, 1, fudgeFactor,
        0, 0, 0, 1
    ];
};
var make2DProjection = function (width, height, depth) {
    // Note: This matrix flips the Y axis so 0 is at the top.
    return [
        2 / width, 0, 0, 0,
        0, -2 / height, 0, 0,
        0, 0, 2 / depth, 0,
        -1, 1, 0, 1
    ];
};
var ortho = function (left, right, bottom, top, near, far) {
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
var perspective = function (fovy, aspect, near, far) {
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
var makeTranslation = function (tx, ty, tz) {
    return [
        1, 0, 0, 0,
        0, 1, 0, 0,
        0, 0, 1, 0,
        tx, ty, tz, 1
    ];
};
var makeXRotation = function (angleInRadians) {
    var c = Math.cos(angleInRadians);
    var s = Math.sin(angleInRadians);
    return [
        1, 0, 0, 0,
        0, c, s, 0,
        0, -s, c, 0,
        0, 0, 0, 1
    ];
};
var makeYRotation = function (angleInRadians) {
    var c = Math.cos(angleInRadians);
    var s = Math.sin(angleInRadians);
    return [
        c, 0, -s, 0,
        0, 1, 0, 0,
        s, 0, c, 0,
        0, 0, 0, 1
    ];
};
var makeZRotation = function (angleInRadians) {
    var c = Math.cos(angleInRadians);
    var s = Math.sin(angleInRadians);
    return [
        c, s, 0, 0,
        -s, c, 0, 0,
        0, 0, 1, 0,
        0, 0, 0, 1
    ];
};
var makeScale = function (sx, sy, sz) {
    return [
        sx, 0, 0, 0,
        0, sy, 0, 0,
        0, 0, sz, 0,
        0, 0, 0, 1
    ];
};
var matrixMultiply = function (a, b) {
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
var multMatrixVec = function (matrix, inp) {
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
var inverse = function (m) {
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
    if (__WEBPACK_IMPORTED_MODULE_0__declarations__["DEBUG"] && det === 0) {
        console.error(m);
        throw new Error("can not invert matrix");
    }
    for (var i = 0; i < 16; i++)
        r[i] /= det;
    return r;
};


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vertexBuffer__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__indexBuffer__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__declarations__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__declarations___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__declarations__);



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
        if (__WEBPACK_IMPORTED_MODULE_2__declarations__["DEBUG"] && !description.posVertexInfo)
            throw "can not create BufferInfo: posVertexInfo is mandatory";
        this.posVertexBuffer = new __WEBPACK_IMPORTED_MODULE_0__vertexBuffer__["a" /* default */](gl);
        this.posVertexBuffer.setData(description.posVertexInfo.array, description.posVertexInfo.type, description.posVertexInfo.size);
        this.posVertexBuffer.setAttrName(description.posVertexInfo.attrName);
        if (description.posIndexInfo) {
            this.posIndexBuffer = new __WEBPACK_IMPORTED_MODULE_1__indexBuffer__["a" /* default */](gl);
            this.posIndexBuffer.setData(description.posIndexInfo.array);
        }
        else
            this.numOfElementsToDraw = this._getNumOfElementsToDraw(this.drawMethod);
        if (description.texVertexInfo) {
            this.texVertexBuffer = new __WEBPACK_IMPORTED_MODULE_0__vertexBuffer__["a" /* default */](gl);
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
/* harmony default export */ __webpack_exports__["a"] = (BufferInfo);


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
    Rect.prototype.clone = function () {
        return new Rect(this.x, this.y, this.width, this.height);
    };
    Rect.prototype.toJSON = function () {
        return { x: this.x, y: this.y, width: this.width, height: this.height };
    };
    Rect.prototype.fromJSON = function (x, y, width, height) {
        this.set(x, y, width, height);
    };
    return Rect;
}());
/* harmony default export */ __webpack_exports__["a"] = (Rect);


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base_shaderProgramUtils__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shaderGenerator__ = __webpack_require__(22);
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


//position and texture
var TexShaderGenerator = /** @class */ (function (_super) {
    __extends(TexShaderGenerator, _super);
    function TexShaderGenerator() {
        var _this = _super.call(this) || this;
        _this.addAttribute(__WEBPACK_IMPORTED_MODULE_0__base_shaderProgramUtils__["a" /* GL_TYPE */].FLOAT_VEC4, 'a_position');
        _this.addAttribute(__WEBPACK_IMPORTED_MODULE_0__base_shaderProgramUtils__["a" /* GL_TYPE */].FLOAT_VEC2, 'a_texCoord');
        _this.addVertexUniform(__WEBPACK_IMPORTED_MODULE_0__base_shaderProgramUtils__["a" /* GL_TYPE */].FLOAT_MAT4, 'u_vertexMatrix');
        _this.addVertexUniform(__WEBPACK_IMPORTED_MODULE_0__base_shaderProgramUtils__["a" /* GL_TYPE */].FLOAT_MAT4, 'u_textureMatrix');
        _this.addVarying(__WEBPACK_IMPORTED_MODULE_0__base_shaderProgramUtils__["a" /* GL_TYPE */].FLOAT_VEC2, 'v_texCoord');
        _this.setVertexMainFn("\n            gl_Position = u_vertexMatrix * a_position;\n            v_texCoord = (u_textureMatrix * vec4(a_texCoord, 0, 1)).xy; \n        ");
        _this.addFragmentUniform(__WEBPACK_IMPORTED_MODULE_0__base_shaderProgramUtils__["a" /* GL_TYPE */].SAMPLER_2D, 'texture');
        _this.addFragmentUniform(__WEBPACK_IMPORTED_MODULE_0__base_shaderProgramUtils__["a" /* GL_TYPE */].FLOAT, 'u_alpha');
        _this.setFragmentMainFn("\n            gl_FragColor = texture2D(texture, v_texCoord);\n            gl_FragColor.a *= u_alpha;\n        ");
        return _this;
    }
    return TexShaderGenerator;
}(__WEBPACK_IMPORTED_MODULE_1__shaderGenerator__["a" /* default */]));
/* harmony default export */ __webpack_exports__["a"] = (TexShaderGenerator);


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base_shaderProgram__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__renderPrograms_generic_base_spriteRectDrawer__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__geometry_mat4__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shaders_generators_generic_texShaderGenerator__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__declarations__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__declarations___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__declarations__);





var makePositionMatrix = function (dstX, dstY, dstWidth, dstHeight) {
    var projectionMatrix = __WEBPACK_IMPORTED_MODULE_2__geometry_mat4__["b" /* ortho */](0, dstWidth, 0, dstHeight, -1, 1);
    var scaleMatrix = __WEBPACK_IMPORTED_MODULE_2__geometry_mat4__["c" /* makeScale */](dstWidth, dstHeight, 1);
    return __WEBPACK_IMPORTED_MODULE_2__geometry_mat4__["e" /* matrixMultiply */](scaleMatrix, projectionMatrix);
};
var identity = __WEBPACK_IMPORTED_MODULE_2__geometry_mat4__["h" /* makeIdentity */]();
var AbstractFilter = /** @class */ (function () {
    function AbstractFilter(gl) {
        this.spriteRectDrawer = null;
        this.uniformsToSet = {};
        if (__WEBPACK_IMPORTED_MODULE_4__declarations__["DEBUG"] && !gl)
            throw "can not create Filter, gl context not passed to constructor, expected: Filter(gl)";
        this.gl = gl;
        var gen = new __WEBPACK_IMPORTED_MODULE_3__shaders_generators_generic_texShaderGenerator__["a" /* default */]();
        this.prepare(gen);
        this._afterPrepare(gen);
    }
    AbstractFilter.prototype.prepare = function (gen) { };
    AbstractFilter.prototype._afterPrepare = function (gen) {
        var program = new __WEBPACK_IMPORTED_MODULE_0__base_shaderProgram__["a" /* default */](this.gl, gen.getVertexSource(), gen.getFragmentSource());
        this.spriteRectDrawer = new __WEBPACK_IMPORTED_MODULE_1__renderPrograms_generic_base_spriteRectDrawer__["a" /* default */](this.gl, program);
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
/* harmony default export */ __webpack_exports__["a"] = (AbstractFilter);


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var AbstractPrimitive = /** @class */ (function () {
    function AbstractPrimitive() {
        this.vertexArr = null;
        this.normalArr = null;
        this.texCoordArr = null;
        this.indexArr = null;
    }
    return AbstractPrimitive;
}());
/* harmony default export */ __webpack_exports__["a"] = (AbstractPrimitive);


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__abstractPrimitive__ = __webpack_require__(12);
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
}(__WEBPACK_IMPORTED_MODULE_0__abstractPrimitive__["a" /* default */]));
/* harmony default export */ __webpack_exports__["a"] = (Plane);


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__primitives_plane__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_shaderProgram__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__abstract_abstractDrawer__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_bufferInfo__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shaders_generators_generic_texShaderGenerator__ = __webpack_require__(10);
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





var SpriteRectDrawer = /** @class */ (function (_super) {
    __extends(SpriteRectDrawer, _super);
    function SpriteRectDrawer(gl, program) {
        var _this = _super.call(this, gl) || this;
        var gen = new __WEBPACK_IMPORTED_MODULE_4__shaders_generators_generic_texShaderGenerator__["a" /* default */]();
        _this.plane = new __WEBPACK_IMPORTED_MODULE_0__primitives_plane__["a" /* default */]();
        _this.program = program || new __WEBPACK_IMPORTED_MODULE_1__base_shaderProgram__["a" /* default */](gl, gen.getVertexSource(), gen.getFragmentSource());
        _this.bufferInfo = new __WEBPACK_IMPORTED_MODULE_3__base_bufferInfo__["a" /* default */](gl, {
            posVertexInfo: { array: _this.plane.vertexArr, type: gl.FLOAT, size: 2, attrName: 'a_position' },
            posIndexInfo: { array: _this.plane.indexArr },
            texVertexInfo: { array: _this.plane.texCoordArr, type: gl.FLOAT, size: 2, attrName: 'a_texCoord' },
            drawMethod: _this.gl.TRIANGLE_STRIP
        });
        return _this;
    }
    return SpriteRectDrawer;
}(__WEBPACK_IMPORTED_MODULE_2__abstract_abstractDrawer__["a" /* default */]));
/* harmony default export */ __webpack_exports__["a"] = (SpriteRectDrawer);


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base_shaderProgramUtils__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shaderGenerator__ = __webpack_require__(22);
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


//position and color
var ColorShaderGenerator = /** @class */ (function (_super) {
    __extends(ColorShaderGenerator, _super);
    function ColorShaderGenerator() {
        var _this = _super.call(this) || this;
        _this.addAttribute(__WEBPACK_IMPORTED_MODULE_0__base_shaderProgramUtils__["a" /* GL_TYPE */].FLOAT_VEC4, 'a_position');
        _this.addVertexUniform(__WEBPACK_IMPORTED_MODULE_0__base_shaderProgramUtils__["a" /* GL_TYPE */].FLOAT_MAT4, 'u_vertexMatrix');
        _this.setVertexMainFn("\n            gl_Position = u_vertexMatrix * a_position;\n        ");
        _this.addFragmentUniform(__WEBPACK_IMPORTED_MODULE_0__base_shaderProgramUtils__["a" /* GL_TYPE */].FLOAT, 'u_alpha');
        _this.addFragmentUniform(__WEBPACK_IMPORTED_MODULE_0__base_shaderProgramUtils__["a" /* GL_TYPE */].FLOAT_VEC4, 'u_rgba');
        _this.setFragmentMainFn("\n            gl_FragColor = u_rgba;\n        ");
        return _this;
    }
    return ColorShaderGenerator;
}(__WEBPACK_IMPORTED_MODULE_1__shaderGenerator__["a" /* default */]));
/* harmony default export */ __webpack_exports__["a"] = (ColorShaderGenerator);


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__declarations__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__declarations___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__declarations__);

var BaseAbstractBehaviour = /** @class */ (function () {
    function BaseAbstractBehaviour(game) {
        this.game = game;
    }
    BaseAbstractBehaviour.prototype.manage = function (gameObject, parameters, dirs) {
        console.error(this);
        if (__WEBPACK_IMPORTED_MODULE_0__declarations__["DEBUG"])
            throw "BaseAbstractBehaviour: method 'manage' not implemented";
    };
    BaseAbstractBehaviour.prototype.onUpdate = function () { };
    return BaseAbstractBehaviour;
}());
/* harmony default export */ __webpack_exports__["a"] = (BaseAbstractBehaviour);


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseAbstractBehaviour__ = __webpack_require__(16);
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
}(__WEBPACK_IMPORTED_MODULE_0__baseAbstractBehaviour__["a" /* default */]));
/* harmony default export */ __webpack_exports__["a"] = (Moveable);


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SCALE_STRATEGY; });
var SCALE_STRATEGY;
(function (SCALE_STRATEGY) {
    SCALE_STRATEGY[SCALE_STRATEGY["NO_SCALE"] = 0] = "NO_SCALE";
    SCALE_STRATEGY[SCALE_STRATEGY["FIT"] = 1] = "FIT";
})(SCALE_STRATEGY || (SCALE_STRATEGY = {}));


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Transient; });
var Transient = function (params) {
    return function (target) {
        target.transient = params;
    };
};


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__texture__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__declarations__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__declarations___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__declarations__);


var FrameBuffer = /** @class */ (function () {
    function FrameBuffer(gl, width, height) {
        if (__WEBPACK_IMPORTED_MODULE_1__declarations__["DEBUG"] && !gl)
            throw "can not create FrameBuffer, gl context not passed to constructor, expected: FrameBuffer(gl)";
        this.gl = gl;
        this.width = width;
        this.height = height;
        this.texture = new __WEBPACK_IMPORTED_MODULE_0__texture__["a" /* default */](gl);
        this.texture.setImage(null, width, height);
        this._init(gl, width, height);
    }
    FrameBuffer.prototype._init = function (gl, width, height) {
        // Init Render Buffer
        this.glRenderBuffer = gl.createRenderbuffer();
        if (__WEBPACK_IMPORTED_MODULE_1__declarations__["DEBUG"] && !this.glRenderBuffer)
            throw "can not allocate memory for glRenderBuffer";
        gl.bindRenderbuffer(gl.RENDERBUFFER, this.glRenderBuffer);
        gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_COMPONENT16, width, height);
        // Init Frame Buffer
        this.glFrameBuffer = gl.createFramebuffer();
        if (__WEBPACK_IMPORTED_MODULE_1__declarations__["DEBUG"] && !this.glRenderBuffer)
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
    FrameBuffer.prototype.getTexture = function () {
        return this.texture;
    };
    FrameBuffer.currInstance = null;
    return FrameBuffer;
}());
/* harmony default export */ __webpack_exports__["a"] = (FrameBuffer);


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__frameBuffer__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__declarations__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__declarations___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__declarations__);


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
            this.buffers.push(new __WEBPACK_IMPORTED_MODULE_0__frameBuffer__["a" /* default */](gl, this.parent.size.width, this.parent.size.height));
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
    return TextureFilterBuffer;
}());
var Texture = /** @class */ (function () {
    function Texture(gl) {
        this.tex = null;
        this.size = null; // todo simple width height or structure
        this.isPowerOfTwo = false;
        this._texFilterBuff = null;
        if (__WEBPACK_IMPORTED_MODULE_1__declarations__["DEBUG"] && !gl)
            throw "can not create Texture, gl context not passed to constructor, expected: Texture(gl)";
        this.gl = gl;
        this.tex = gl.createTexture();
        if (__WEBPACK_IMPORTED_MODULE_1__declarations__["DEBUG"] && !this.tex)
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
        if (__WEBPACK_IMPORTED_MODULE_1__declarations__["DEBUG"]) {
            if (!(img || width || height))
                throw "texture.setImage: if image is null, width and height must be specified: tex.setImage(null,w,h)";
        }
        var gl = this.gl;
        if (img)
            this.size = { width: img.width, height: img.height };
        else
            this.size = { width: width, height: height };
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
            // gl.generateMipmap( gl.TEXTURE_2D );
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
        if (__WEBPACK_IMPORTED_MODULE_1__declarations__["DEBUG"] && frameBuffer === undefined)
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
        this.gl.bindTexture(this.gl.TEXTURE_2D, null);
        Texture.currInstances[i] = null;
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
/* harmony default export */ __webpack_exports__["a"] = (Texture);


/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var ShaderGenerator = /** @class */ (function () {
    function ShaderGenerator() {
        this.vertexUniforms = [];
        this.fragmentUniforms = [];
        this.attributes = [];
        this.varyings = [];
        this.fragCodeBlocks = [];
        this.vertexCodeBlocks = [];
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
    ShaderGenerator.prototype.addVertexCodeBlock = function (code) {
        this.vertexCodeBlocks.push(code);
    };
    ShaderGenerator.prototype.addFragmentCodeBlock = function (code) {
        this.fragCodeBlocks.push(code);
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
        return (("\n            " + this.vertexUniforms.map(function (u) { return "uniform   " + u.type + " " + u.name + ";"; }).join('\n') + "\n            " + this.attributes.map(function (u) { return "attribute " + u.type + " " + u.name + ";"; }).join('\n') + "\n            " + this.varyings.map(function (u) { return "varying   " + u.type + " " + u.name + ";"; }).join('\n') + "\n            " + this.vertexCodeBlocks.map(function (v) { return "" + v; }).join('\n') + "\n            void main() {\n               " + this.vertexMainFn + "\n            }\n            ").replace(/\s{2,}/, ' ').replace(/\t/, ''));
    };
    ShaderGenerator.prototype.getFragmentSource = function () {
        return (
        // lowp, mediump, highp
        ("\n            precision mediump float;\n            " + this.fragmentUniforms.map(function (u) { return "uniform " + u.type + " " + u.name + ";"; }).join('\n') + "\n            " + this.varyings.map(function (u) { return "varying " + u.type + " " + u.name + ";"; }).join('\n') + "\n            " + this.fragCodeBlocks.map(function (v) { return "" + v; }).join('\n') + "\n            void main() {\n               " + this.fragmentMainFn + "\n            }\n            ").replace(/\s{2,}/, ' ').replace(/\t/, ''));
    };
    ShaderGenerator.prototype.debug = function () {
        console.log(this.getVertexSource());
        console.log(this.getFragmentSource());
    };
    return ShaderGenerator;
}());
/* harmony default export */ __webpack_exports__["a"] = (ShaderGenerator);


/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mathEx__ = __webpack_require__(5);

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
        this.obj = tweenDesc.target;
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
                tweenDesc.from[prp] = getValByPath(_this.obj, prp);
            if (tweenDesc.to[prp] === undefined)
                tweenDesc.to[prp] = getValByPath(_this.obj, prp);
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
            var valCurr = __WEBPACK_IMPORTED_MODULE_0__mathEx__[this.easeFnName](curTweenTime, valFrom, valTo - valFrom, this.tweenTime);
            setValByPath(this.obj, prp, valCurr);
        }
        this.progressFn && this.progressFn(this.obj);
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
            setValByPath(this.obj, prp, valCurr);
        }
        this.progressFn && this.progressFn(this.obj);
        this.completeFn && this.completeFn(this.obj);
        this.completed = true;
    };
    ;
    return Tween;
}());
/* harmony default export */ __webpack_exports__["a"] = (Tween);


/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
/* harmony default export */ __webpack_exports__["a"] = (CommonObject);


/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseModel__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_geometry_rect__ = __webpack_require__(9);
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
        _this._frameRect = new __WEBPACK_IMPORTED_MODULE_1__core_geometry_rect__["a" /* default */]();
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
}(__WEBPACK_IMPORTED_MODULE_0__baseModel__["a" /* default */]));
/* harmony default export */ __webpack_exports__["a"] = (GameObjectProto);


/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseModel__ = __webpack_require__(1);
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
                renderer.drawImage(spriteSheet.resourcePath, spriteSheet.getFramePosX(index), spriteSheet.getFramePosY(index), spriteSheet._frameWidth, spriteSheet._frameHeight, x * spriteSheet._frameWidth, y * spriteSheet._frameHeight);
            }
        }
    };
    return TileMap;
}(__WEBPACK_IMPORTED_MODULE_0__baseModel__["a" /* default */]));
/* harmony default export */ __webpack_exports__["a"] = (TileMap);


/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseModel__ = __webpack_require__(1);
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
/*global DEBUG:true*/

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
        if (1 && !this.name) {
            console.error(this);
            throw "property 'name' not set at object of type " + this.type;
        }
        if (this.font === null)
            this.font = this.game.repository.getArray('Font')[0];
        if (1 && !this.font)
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
            _this.game.renderer.drawImage(_this.font.resourcePath, charInCtx.x, charInCtx.y, charInCtx.width, charInCtx.height, _this.pos.x + posX, _this.pos.y + posY);
            posX += charInCtx.width;
        });
    };
    return TextField;
}(__WEBPACK_IMPORTED_MODULE_0__baseModel__["a" /* default */]));
/* harmony default export */ __webpack_exports__["a"] = (TextField);


/***/ }),
/* 28 */,
/* 29 */,
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return gameProps; });
var gameProps = {
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
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return repository; });
var repository = {
    "Scene": [
        {
            "id": 2,
            "name": "mainScene",
            "width": 5000,
            "height": 800,
            "type": "Scene",
            "layers": [
                {
                    "type": "Layer",
                    "id": 2
                }
            ],
            "useBG": true,
            "colorBG": {
                "r": 50,
                "g": 68,
                "b": 154
            },
            "tileMap": {
                "id": 52,
                "type": "TileMap"
            }
        }
    ],
    "Layer": [
        {
            "id": 2,
            "name": "layer1",
            "type": "Layer",
            "gameObjects": [
                {
                    "type": "GameObject",
                    "id": 7
                },
                {
                    "type": "GameObject",
                    "id": 63
                },
                {
                    "type": "GameObject",
                    "id": 64
                },
                {
                    "type": "GameObject",
                    "id": 65
                },
                {
                    "type": "GameObject",
                    "id": 67
                },
                {
                    "type": "GameObject",
                    "id": 68
                },
                {
                    "type": "GameObject",
                    "id": 71
                },
                {
                    "type": "GameObject",
                    "id": 74
                },
                {
                    "type": "TextField",
                    "id": 76
                },
                {
                    "type": "GameObject",
                    "id": 77
                },
                {
                    "type": "GameObject",
                    "id": 78
                },
                {
                    "type": "GameObject",
                    "id": 81
                },
                {
                    "type": "GameObject",
                    "id": 82
                },
                {
                    "type": "GameObject",
                    "id": 86
                },
                {
                    "type": "GameObject",
                    "id": 87
                }
            ]
        }
    ],
    "SpriteSheet": [
        {
            "name": "dude",
            "width": 288,
            "height": 48,
            "type": "SpriteSheet",
            "numOfFramesH": 9,
            "resourcePath": "resources/dude.png",
            "id": 3
        },
        {
            "name": "platform",
            "width": 500,
            "height": 64,
            "type": "SpriteSheet",
            "resourcePath": "resources/platform.png",
            "id": 5
        },
        {
            "name": "ground",
            "width": 800,
            "height": 32,
            "type": "SpriteSheet",
            "numOfFramesH": 25,
            "resourcePath": "resources/ground.png",
            "id": 57
        },
        {
            "name": "clamp",
            "width": 64,
            "height": 64,
            "type": "SpriteSheet",
            "resourcePath": "resources/clamp.png",
            "id": 69
        },
        {
            "name": "tile",
            "width": 262,
            "height": 192,
            "type": "SpriteSheet",
            "resourcePath": "resources/tile.jpg",
            "id": 72
        },
        {
            "name": "flare",
            "width": 174,
            "height": 173,
            "type": "SpriteSheet",
            "resourcePath": "resources/flare.png",
            "id": 79
        },
        {
            "name": "eso1611a",
            "width": 120,
            "height": 120,
            "type": "SpriteSheet",
            "resourcePath": "resources/eso1611a.png",
            "id": 84
        }
    ],
    "GameObjectProto": [
        {
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
            "commonBehaviour": [
                {
                    "type": "CommonBehaviour",
                    "id": 15
                },
                {
                    "type": "CommonBehaviour",
                    "id": 60
                }
            ],
            "frameAnimations": [
                {
                    "type": "FrameAnimation",
                    "id": 11
                },
                {
                    "type": "FrameAnimation",
                    "id": 12
                },
                {
                    "type": "FrameAnimation",
                    "id": 13
                },
                {
                    "type": "FrameAnimation",
                    "id": 14
                }
            ]
        },
        {
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
            "commonBehaviour": [
                {
                    "type": "CommonBehaviour",
                    "id": 61
                }
            ]
        },
        {
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
            "commonBehaviour": [
                {
                    "type": "CommonBehaviour",
                    "id": 62
                }
            ],
            "currFrameIndex": 9
        },
        {
            "id": 70,
            "name": "clamp",
            "width": 64,
            "height": 64,
            "rigid": true,
            "type": "GameObjectProto",
            "spriteSheet": {
                "id": 69,
                "type": "SpriteSheet"
            },
            "commonBehaviour": [
                {
                    "type": "CommonBehaviour",
                    "id": 75
                }
            ]
        },
        {
            "id": 73,
            "name": "tile",
            "width": 262,
            "height": 192,
            "rigid": true,
            "type": "GameObjectProto",
            "spriteSheet": {
                "id": 72,
                "type": "SpriteSheet"
            }
        },
        {
            "id": 80,
            "name": "flare",
            "width": 174,
            "height": 173,
            "type": "GameObjectProto",
            "spriteSheet": {
                "id": 79,
                "type": "SpriteSheet"
            },
            "commonBehaviour": [
                {
                    "type": "CommonBehaviour",
                    "id": 83
                }
            ]
        },
        {
            "id": 85,
            "name": "eso1611a",
            "width": 120,
            "height": 120,
            "type": "GameObjectProto",
            "spriteSheet": {
                "id": 84,
                "type": "SpriteSheet"
            },
            "commonBehaviour": [
                {
                    "type": "CommonBehaviour",
                    "id": 88
                }
            ]
        }
    ],
    "GameObject": [
        {
            "id": 7,
            "name": "dude",
            "pos": {
                "x": 108,
                "y": 227
            },
            "layerId": 2,
            "type": "GameObject",
            "gameObjectProto": {
                "id": 4,
                "type": "GameObjectProto"
            }
        },
        {
            "id": 63,
            "name": "ground1",
            "pos": {
                "x": 437,
                "y": 115
            },
            "layerId": 2,
            "type": "GameObject",
            "gameObjectProto": {
                "id": 58,
                "type": "GameObjectProto"
            }
        },
        {
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
        },
        {
            "id": 65,
            "name": "platform",
            "pos": {
                "x": 171,
                "y": 192
            },
            "layerId": 2,
            "type": "GameObject",
            "gameObjectProto": {
                "id": 6,
                "type": "GameObjectProto"
            }
        },
        {
            "id": 67,
            "name": "ground1",
            "pos": {
                "x": 559,
                "y": 116
            },
            "layerId": 2,
            "type": "GameObject",
            "gameObjectProto": {
                "id": 58,
                "type": "GameObjectProto"
            }
        },
        {
            "pos": {
                "x": 388,
                "y": 140
            },
            "layerId": 2,
            "type": "GameObject",
            "gameObjectProto": {
                "id": 58,
                "type": "GameObjectProto"
            },
            "id": 68
        },
        {
            "id": 71,
            "name": "clamp",
            "pos": {
                "x": 666,
                "y": 328
            },
            "layerId": 2,
            "type": "GameObject",
            "gameObjectProto": {
                "id": 70,
                "type": "GameObjectProto"
            }
        },
        {
            "id": 74,
            "name": "tile",
            "pos": {
                "x": 369,
                "y": 271
            },
            "layerId": 2,
            "type": "GameObject",
            "gameObjectProto": {
                "id": 73,
                "type": "GameObjectProto"
            }
        },
        {
            "id": 77,
            "name": "platform",
            "pos": {
                "x": 54,
                "y": 302
            },
            "layerId": 2,
            "type": "GameObject",
            "gameObjectProto": {
                "id": 6,
                "type": "GameObjectProto"
            }
        },
        {
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
        },
        {
            "id": 81,
            "name": "flare",
            "pos": {
                "x": 194,
                "y": 46
            },
            "layerId": 2,
            "type": "GameObject",
            "gameObjectProto": {
                "id": 80,
                "type": "GameObjectProto"
            }
        },
        {
            "id": 82,
            "name": "flare",
            "pos": {
                "x": 255,
                "y": 7
            },
            "layerId": 2,
            "type": "GameObject",
            "gameObjectProto": {
                "id": 80,
                "type": "GameObjectProto"
            }
        },
        {
            "id": 86,
            "name": "eso1611a",
            "pos": {
                "x": 134,
                "y": 14
            },
            "layerId": 2,
            "type": "GameObject",
            "gameObjectProto": {
                "id": 85,
                "type": "GameObjectProto"
            }
        },
        {
            "id": 87,
            "name": "eso1611a",
            "pos": {
                "x": 93,
                "y": 53
            },
            "layerId": 2,
            "type": "GameObject",
            "gameObjectProto": {
                "id": 85,
                "type": "GameObjectProto"
            }
        }
    ],
    "FrameAnimation": [
        {
            "name": "left",
            "type": "FrameAnimation",
            "frames": [
                0,
                1,
                2,
                3
            ],
            "id": 11
        },
        {
            "name": "right",
            "type": "FrameAnimation",
            "frames": [
                5,
                6,
                7,
                8
            ],
            "id": 12
        },
        {
            "name": "idleLeft",
            "type": "FrameAnimation",
            "frames": [
                4
            ],
            "id": 13
        },
        {
            "name": "idleRight",
            "type": "FrameAnimation",
            "frames": [
                4
            ],
            "id": 14
        }
    ],
    "CommonBehaviour": [
        {
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
        },
        {
            "name": "Draggable",
            "type": "CommonBehaviour",
            "id": 60
        },
        {
            "name": "Draggable",
            "type": "CommonBehaviour",
            "id": 61
        },
        {
            "name": "Draggable",
            "type": "CommonBehaviour",
            "id": 62
        },
        {
            "name": "Draggable",
            "type": "CommonBehaviour",
            "id": 75
        },
        {
            "name": "Draggable",
            "type": "CommonBehaviour",
            "id": 83
        },
        {
            "name": "Draggable",
            "type": "CommonBehaviour",
            "id": 88
        }
    ],
    "Font": [
        {
            "id": 22,
            "name": "font1",
            "type": "Font",
            "resourcePath": "resources/font1.png",
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
        }
    ],
    "TileMap": [
        {
            "id": 52,
            "width": 50,
            "height": 50,
            "type": "TileMap",
            "spriteSheet": {
                "id": 57,
                "type": "SpriteSheet"
            },
            "data": [
                [],
                null,
                null,
                [
                    null,
                    null,
                    null,
                    null,
                    2,
                    null,
                    null
                ],
                [
                    null,
                    null
                ],
                [
                    1,
                    null,
                    3,
                    null,
                    null,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1
                ],
                null,
                [
                    null,
                    1,
                    null,
                    1
                ]
            ]
        }
    ],
    "TextField": [
        {
            "name": "textField1",
            "width": 120,
            "height": 24,
            "pos": {
                "x": 16,
                "y": 20
            },
            "layerId": 2,
            "type": "TextField",
            "text": "textField1",
            "font": {
                "id": 22,
                "type": "Font"
            },
            "id": 76
        }
    ]
};


/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__misc_polyfills__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__misc_polyfills___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__misc_polyfills__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__renderer_rendererFactory__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__repository__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__control_mouse__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__control_keyboard__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__control_gamePad__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__physics_collider__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__misc_decorators__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__model_commonObject__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__camera__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__misc_consts__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__geometry_point2d__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__declarations__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__declarations___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__declarations__);
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
        _this.scale = new __WEBPACK_IMPORTED_MODULE_11__geometry_point2d__["a" /* default */](1, 1);
        _this.pos = new __WEBPACK_IMPORTED_MODULE_11__geometry_point2d__["a" /* default */](0, 0);
        _this.width = 0;
        _this.height = 0;
        _this.gravityConstant = 0;
        _this.fps = 0;
        _this.gamePad = null;
        _this.scaleStrategy = __WEBPACK_IMPORTED_MODULE_10__misc_consts__["a" /* SCALE_STRATEGY */].FIT;
        _this.startSceneId = 0;
        _this._revalidated = false;
        var time = Date.now();
        _this._lastTime = _this._currTime = time;
        _this._deltaTime = 0;
        _this.repository = new __WEBPACK_IMPORTED_MODULE_2__repository__["a" /* default */](_this);
        _this.mouse = new __WEBPACK_IMPORTED_MODULE_3__control_mouse__["a" /* default */](_this);
        _this.keyboard = new __WEBPACK_IMPORTED_MODULE_4__control_keyboard__["a" /* default */](_this);
        _this.keyboard.listenTo();
        _this.gamePad = new __WEBPACK_IMPORTED_MODULE_5__control_gamePad__["a" /* default */](_this);
        _this.collider = new __WEBPACK_IMPORTED_MODULE_6__physics_collider__["a" /* default */](_this);
        _this.camera = new __WEBPACK_IMPORTED_MODULE_9__camera__["a" /* default */](_this);
        return _this;
    }
    Game.prototype.revalidate = function () {
        this.renderer = __WEBPACK_IMPORTED_MODULE_1__renderer_rendererFactory__["a" /* default */].getRenderer(this);
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
        if (__WEBPACK_IMPORTED_MODULE_12__declarations__["DEBUG"] && !this._revalidated)
            throw "game.revalidate() method not invoked. Invoke game.fromJSON(gameParams) or call game.revalidate() method directly";
        this._currentScene = scene;
        if (!__WEBPACK_IMPORTED_MODULE_12__declarations__["IN_EDITOR"]) {
            var allScripts_1 = __webpack_require__(33);
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
        if (__WEBPACK_IMPORTED_MODULE_12__declarations__["DEBUG"] && this.destroyed)
            return;
        this._lastTime = this._currTime;
        this._currTime = Date.now();
        this._deltaTime = this._currTime - this._lastTime;
        if (__WEBPACK_IMPORTED_MODULE_12__declarations__["DEBUG"]) {
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
        this.destroyed = true;
        this.keyboard.destroy();
        this.mouse.destroy();
        this.renderer.destroy();
        this.renderer.cancelFullScreen();
    };
    Game = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__misc_decorators__["a" /* Transient */])({
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
}(__WEBPACK_IMPORTED_MODULE_8__model_commonObject__["a" /* default */]));
/* harmony default export */ __webpack_exports__["a"] = (Game);


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.TileBehaviour = exports.PlatformBehaviour = exports.MainSceneBehaviour = exports.Ground1Behaviour = exports.FlareBehaviour = exports.Eso1611aBehaviour = exports.DudeBehaviour = exports.ClampBehaviour = undefined;

var _clamp = __webpack_require__(34);

var _dude = __webpack_require__(35);

var _eso1611a = __webpack_require__(36);

var _flare = __webpack_require__(37);

var _ground = __webpack_require__(38);

var _mainScene = __webpack_require__(39);

var _platform = __webpack_require__(40);

var _tile = __webpack_require__(41);

exports.ClampBehaviour = _clamp.ClampBehaviour;
exports.DudeBehaviour = _dude.DudeBehaviour;
exports.Eso1611aBehaviour = _eso1611a.Eso1611aBehaviour;
exports.FlareBehaviour = _flare.FlareBehaviour;
exports.Ground1Behaviour = _ground.Ground1Behaviour;
exports.MainSceneBehaviour = _mainScene.MainSceneBehaviour;
exports.PlatformBehaviour = _platform.PlatformBehaviour;
exports.TileBehaviour = _tile.TileBehaviour;

/***/ }),
/* 34 */
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
/* 35 */
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
/* 36 */
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
/* 37 */
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
/* 38 */
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
/* 39 */
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
        this.game.renderer.fillRect({ x: this.x, y: this.y, width: 10, height: 10 }, this.color);

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
        this.game.renderer.drawTiledImage('resources/tile.jpg', { x: 130, y: 0, width: 130, height: 61 }, { x: camRect.x, y: camRect.y, width: 100, height: 100 }, { x: this.offsetX, y: this.offsetX });
        this.offsetX += 0.1;
    };

    MainSceneBehaviour.prototype.onDestroy = function onDestroy() {};

    return MainSceneBehaviour;
}();

/***/ }),
/* 40 */
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
/* 41 */
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
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__generic_draggable__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__generic_control4Dir__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__generic_control2Dir__ = __webpack_require__(43);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Draggable", function() { return __WEBPACK_IMPORTED_MODULE_0__generic_draggable__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Control4Dir", function() { return __WEBPACK_IMPORTED_MODULE_1__generic_control4Dir__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Control2Dir", function() { return __WEBPACK_IMPORTED_MODULE_2__generic_control2Dir__["a"]; });






/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__move2Dir__ = __webpack_require__(46);
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
}(__WEBPACK_IMPORTED_MODULE_0__move2Dir__["a" /* default */]));
/* harmony default export */ __webpack_exports__["a"] = (Control2Dir);


/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__move4Dir__ = __webpack_require__(47);
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
}(__WEBPACK_IMPORTED_MODULE_0__move4Dir__["a" /* default */]));
/* harmony default export */ __webpack_exports__["a"] = (Control4Dir);


/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__abstract_baseAbstractBehaviour__ = __webpack_require__(16);
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
    };
    return DraggableBehaviour;
}(__WEBPACK_IMPORTED_MODULE_0__abstract_baseAbstractBehaviour__["a" /* default */]));
/* harmony default export */ __webpack_exports__["a"] = (DraggableBehaviour);


/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__abstract_moveable__ = __webpack_require__(17);
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
}(__WEBPACK_IMPORTED_MODULE_0__abstract_moveable__["a" /* default */]));
/* harmony default export */ __webpack_exports__["a"] = (Move2Dir);


/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__abstract_moveable__ = __webpack_require__(17);
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
}(__WEBPACK_IMPORTED_MODULE_0__abstract_moveable__["a" /* default */]));
/* harmony default export */ __webpack_exports__["a"] = (Move4Dir);


/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tween__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__geometry_mat4__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mathEx__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__geometry_rect__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__geometry_point2d__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__declarations__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__declarations___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__declarations__);






var Camera = /** @class */ (function () {
    function Camera(game) {
        this.objFollowTo = null;
        this.scene = null;
        this.sceneWidth = 0;
        this.sceneHeight = 0;
        this.pos = new __WEBPACK_IMPORTED_MODULE_4__geometry_point2d__["a" /* default */](0, 0);
        this.scale = new __WEBPACK_IMPORTED_MODULE_4__geometry_point2d__["a" /* default */](1, 1);
        this.lastToleranceTime = 0;
        this._rect = new __WEBPACK_IMPORTED_MODULE_3__geometry_rect__["a" /* default */]();
        this._rectScaled = new __WEBPACK_IMPORTED_MODULE_3__geometry_rect__["a" /* default */]();
        this.FOLLOWING_TOLERANCE_TIME = 2000;
        this.game = game;
    }
    Camera.prototype.followTo = function (gameObject) {
        if (gameObject === null)
            return;
        if (__WEBPACK_IMPORTED_MODULE_5__declarations__["DEBUG"] && gameObject === undefined)
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
        this.cameraTween = new __WEBPACK_IMPORTED_MODULE_0__tween__["a" /* default */]({
            target: this,
            ease: 'easeInQuad',
            to: { x: this.pos.x, y: this.pos.y },
            time: this.FOLLOWING_TOLERANCE_TIME
        });
    };
    Camera.prototype.update = function (currTime, delta) {
        var cameraRect = this.getRectScaled();
        var gameObject = this.objFollowTo;
        if (!gameObject)
            return;
        var tileWidth = this.scene.tileMap.spriteSheet ? this.scene.tileMap.spriteSheet._frameWidth : 0; // todo ?
        var tileHeight = this.scene.tileMap.spriteSheet ? this.scene.tileMap.spriteSheet._frameHeight : 0;
        var w = this.game.width;
        var h = this.game.height;
        var wDiv2 = w / 2;
        var hDiv2 = h / 2;
        var x = gameObject.pos.x - wDiv2;
        var y = gameObject.pos.y - hDiv2;
        if (gameObject['_lastDirection'] === 'Right')
            x += cameraRect.width / 2; // todo set camera follow mode // todo _lastDirection
        if (gameObject['_lastDirection'] === 'Left')
            x -= cameraRect.height / 2;
        if (x < 0)
            x = 0;
        if (y < 0)
            y = 0;
        if (x > this.sceneWidth - w + tileWidth)
            x = this.sceneWidth - w + tileWidth;
        if (y > this.sceneHeight - h + tileHeight)
            y = this.sceneHeight - h + tileHeight;
        var scaleVal = Math.abs(gameObject.rigidBody.vel.x) > 0 ? 0.95 : 1;
        if (this.FOLLOWING_TOLERANCE_TIME === 0) {
            this.pos.x = x;
            this.pos.y = y;
        }
        else if (currTime - this.lastToleranceTime > this.FOLLOWING_TOLERANCE_TIME) {
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
    Camera.prototype._updateRect = function () {
        var point00 = this.screenToWorld(0, 0);
        var pointWH = this.screenToWorld(this.game.width, this.game.height);
        this._rectScaled.set(point00.x, point00.y, pointWH.x - point00.x, pointWH.y - point00.y);
    };
    Camera.prototype.render = function () {
        this.game.renderer.translate(this.game.width / 2, this.game.height / 2);
        this.game.renderer.scale(this.scale.x, this.scale.y);
        // todo rotation does not work correctly yet
        //this.game.renderer.rotateZ(this.angle);
        this.game.renderer.translate(-this.game.width / 2, -this.game.height / 2);
        this.game.renderer.translate(-this.pos.x, -this.pos.y);
    };
    Camera.prototype.screenToWorld = function (screenX, screenY) {
        var mScale = __WEBPACK_IMPORTED_MODULE_1__geometry_mat4__["c" /* makeScale */](this.scale.x, this.scale.y, 1);
        var point2d = __WEBPACK_IMPORTED_MODULE_2__mathEx__["unProject"](screenX, screenY, this.game.width, this.game.height, mScale);
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
/* harmony default export */ __webpack_exports__["a"] = (Camera);


/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__declarations__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__declarations___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__declarations__);

if (__WEBPACK_IMPORTED_MODULE_0__declarations__["DEBUG"]) {
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
/* harmony default export */ __webpack_exports__["a"] = (GamePad);


/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
/* harmony default export */ __webpack_exports__["a"] = (Keyboard);


/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mathEx__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__geometry_point2d__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__misc_objectPool__ = __webpack_require__(56);
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



var MousePoint = /** @class */ (function (_super) {
    __extends(MousePoint, _super);
    function MousePoint() {
        return _super.call(this) || this;
    }
    return MousePoint;
}(__WEBPACK_IMPORTED_MODULE_1__geometry_point2d__["a" /* default */]));
var Mouse = /** @class */ (function () {
    function Mouse(game) {
        this.objectsCaptured = {};
        this.container = null;
        this.mousePointsPool = new __WEBPACK_IMPORTED_MODULE_2__misc_objectPool__["a" /* default */](MousePoint);
        this.game = game;
    }
    //MouseEvent|TouchEvent|PointerEvent
    Mouse.prototype.resolvePoint = function (e) {
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
                if (__WEBPACK_IMPORTED_MODULE_0__mathEx__["isPointInRect"](point, go.getRect())) {
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
    Mouse.prototype.resolveClick = function (e) {
        this.triggerEvent(e, 'click');
        this.triggerEvent(e, 'mouseDown');
    };
    Mouse.prototype.resolveMouseMove = function (e, isMouseDown) {
        var point = this.triggerEvent(e, 'mouseMove', isMouseDown);
        if (!point)
            return;
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
/* harmony default export */ __webpack_exports__["a"] = (Mouse);


/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var isCocoonJS = navigator.isCocoonJS;
var Device = /** @class */ (function () {
    function Device(game) {
    }
    Device.isCocoonJS = isCocoonJS;
    Device.scale = isCocoonJS ? (window.devicePixelRatio || 1) : 1;
    Device.isTouch = (typeof window !== 'undefined' && 'ontouchstart' in window);
    return Device;
}());
/* harmony default export */ __webpack_exports__["a"] = (Device);


/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__point2d__ = __webpack_require__(4);
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
}(__WEBPACK_IMPORTED_MODULE_0__point2d__["a" /* default */]));
/* harmony default export */ __webpack_exports__["a"] = (Vec2);


/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
/* harmony default export */ __webpack_exports__["a"] = (EventEmitter);
;


/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
/* harmony default export */ __webpack_exports__["a"] = (Queue);
;


/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
        if (1 && !Class)
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
/* harmony default export */ __webpack_exports__["a"] = (ObjectPool);


/***/ }),
/* 57 */
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
        function (f) { return setTimeout(f, 17); };
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
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__geometry_vec2__ = __webpack_require__(53);
// http://madebyevan.com/gamedevclass/minimal-demo/

var ArcadeRigidBody = /** @class */ (function () {
    function ArcadeRigidBody(gameObject) {
        this.vel = new __WEBPACK_IMPORTED_MODULE_0__geometry_vec2__["a" /* default */]();
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
/* harmony default export */ __webpack_exports__["a"] = (ArcadeRigidBody);


/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mathEx__ = __webpack_require__(5);

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
            if (player !== rigidObjects[i] && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__mathEx__["overlapTest"])(playerRect, obstacleRect)) {
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
                }
                else if (pathToLeft === minPath) {
                    player.pos.setX(obstacleRect.x - playerRect.width);
                    collidedByX = true;
                }
                else if (pathToRight === minPath) {
                    player.pos.setX(obstacleRect.x + obstacleRect.width);
                    collidedByX = true;
                }
            }
        }
        if (!collidedByX)
            player.pos.addX(deltaPoint.x);
        if (!collidedByY)
            player.pos.addY(deltaPoint.y);
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
                if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__mathEx__["overlapTest"])(pRect, g.getRect())) {
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
/* harmony default export */ __webpack_exports__["a"] = (Collider);


/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__model_generic_ui_textField__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__device__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__misc_consts__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__declarations__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__declarations___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__declarations__);




var AbstractRenderer = /** @class */ (function () {
    function AbstractRenderer(game) {
        this.renderableCache = {};
        this.container = null;
        this.debugTextField = null;
        this.fullScreenSize = { w: 0, h: 0, scaleFactor: 1 };
        this.game = game;
        if (__WEBPACK_IMPORTED_MODULE_1__device__["a" /* default */].isCocoonJS) {
            this.fullScreenSize.w = window.innerWidth * __WEBPACK_IMPORTED_MODULE_1__device__["a" /* default */].scale;
            this.fullScreenSize.h = window.innerHeight * __WEBPACK_IMPORTED_MODULE_1__device__["a" /* default */].scale;
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
        if (this.game.scaleStrategy === __WEBPACK_IMPORTED_MODULE_2__misc_consts__["a" /* SCALE_STRATEGY */].NO_SCALE)
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
    AbstractRenderer.prototype.flipFrameBuffer = function (filters) {
        if (__WEBPACK_IMPORTED_MODULE_3__declarations__["DEBUG"]) {
            if (this.debugTextField)
                this.debugTextField._render();
        }
    };
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
    AbstractRenderer.prototype.drawImage = function (texturePath, srcX, srcY, srcWidth, srcHeight, dstX, dstY) {
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
    AbstractRenderer.prototype.log = function () {
        if (!__WEBPACK_IMPORTED_MODULE_3__declarations__["DEBUG"])
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
            textField = new __WEBPACK_IMPORTED_MODULE_0__model_generic_ui_textField__["a" /* default */](this.game);
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
/* harmony default export */ __webpack_exports__["a"] = (AbstractRenderer);


/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__webGl_webGlRenderer__ = __webpack_require__(76);
//import HtmlRenderer from './dom/htmlRenderer'
//import Renderer from './canvas/canvasRenderer'

//import SvgRenderer from './dom/svgRenderer'
var RendererFactory = /** @class */ (function () {
    function RendererFactory() {
    }
    RendererFactory.getRenderer = function (game) {
        if (!game)
            throw "RendererFactory::getRenderer: game param not specified";
        return new __WEBPACK_IMPORTED_MODULE_0__webGl_webGlRenderer__["a" /* default */](game);
    };
    return RendererFactory;
}());
/* harmony default export */ __webpack_exports__["a"] = (RendererFactory);


/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__declarations__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__declarations___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__declarations__);

var IndexBuffer = /** @class */ (function () {
    function IndexBuffer(gl) {
        if (__WEBPACK_IMPORTED_MODULE_0__declarations__["DEBUG"] && !gl)
            throw "can not create IndexBuffer, gl context not passed to constructor, expected: IndexBuffer(gl)";
        this.gl = gl;
        this.buffer = gl.createBuffer();
        if (__WEBPACK_IMPORTED_MODULE_0__declarations__["DEBUG"] && !this.buffer)
            throw "can not allocate memory for index buffer";
        this.dataLength = null;
    }
    IndexBuffer.prototype.setData = function (bufferData) {
        if (__WEBPACK_IMPORTED_MODULE_0__declarations__["DEBUG"]) {
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
    IndexBuffer.prototype.getBufferLength = function () {
        return this.dataLength;
    };
    return IndexBuffer;
}());
/* harmony default export */ __webpack_exports__["a"] = (IndexBuffer);


/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__geometry_mat4__ = __webpack_require__(7);

var MatrixStack = /** @class */ (function () {
    function MatrixStack() {
        this.stack = [];
        this.restore();
    }
    MatrixStack.prototype.restore = function () {
        this.stack.pop();
        // Never let the stack be totally empty
        if (this.stack.length < 1) {
            this.stack[0] = __WEBPACK_IMPORTED_MODULE_0__geometry_mat4__["h" /* makeIdentity */]();
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
        var t = __WEBPACK_IMPORTED_MODULE_0__geometry_mat4__["d" /* makeTranslation */](x, y, z);
        var m = this.getCurrentMatrix();
        this.setCurrentMatrix(__WEBPACK_IMPORTED_MODULE_0__geometry_mat4__["e" /* matrixMultiply */](t, m));
    };
    MatrixStack.prototype.rotateZ = function (angleInRadians) {
        var t = __WEBPACK_IMPORTED_MODULE_0__geometry_mat4__["i" /* makeZRotation */](angleInRadians);
        var m = this.getCurrentMatrix();
        this.setCurrentMatrix(__WEBPACK_IMPORTED_MODULE_0__geometry_mat4__["e" /* matrixMultiply */](t, m));
    };
    MatrixStack.prototype.rotateY = function (angleInRadians) {
        var t = __WEBPACK_IMPORTED_MODULE_0__geometry_mat4__["j" /* makeYRotation */](angleInRadians);
        var m = this.getCurrentMatrix();
        this.setCurrentMatrix(__WEBPACK_IMPORTED_MODULE_0__geometry_mat4__["e" /* matrixMultiply */](t, m));
    };
    MatrixStack.prototype.scale = function (x, y, z) {
        if (z === undefined) {
            z = 1;
        }
        var t = __WEBPACK_IMPORTED_MODULE_0__geometry_mat4__["c" /* makeScale */](x, y, z);
        var m = this.getCurrentMatrix();
        this.setCurrentMatrix(__WEBPACK_IMPORTED_MODULE_0__geometry_mat4__["e" /* matrixMultiply */](t, m));
    };
    return MatrixStack;
}());
/* harmony default export */ __webpack_exports__["a"] = (MatrixStack);


/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__declarations__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__declarations___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__declarations__);

var VertexBuffer = /** @class */ (function () {
    function VertexBuffer(gl) {
        this.bufferItemSize = null;
        this.bufferItemType = null;
        this.dataLength = null;
        this.attrName = null;
        if (__WEBPACK_IMPORTED_MODULE_0__declarations__["DEBUG"] && !gl)
            throw "can not create VertexBuffer, gl context not passed to constructor, expected: VertexBuffer(gl)";
        this.gl = gl;
        this.buffer = gl.createBuffer();
        if (__WEBPACK_IMPORTED_MODULE_0__declarations__["DEBUG"] && !this.buffer)
            throw "can not allocate memory for vertex buffer";
        this.bufferItemSize = 0;
        this.bufferItemType = 0;
        this.dataLength = 0;
        this.attrName = null;
    }
    VertexBuffer.prototype.setData = function (bufferData, itemType, itemSize) {
        if (__WEBPACK_IMPORTED_MODULE_0__declarations__["DEBUG"]) {
            if (!bufferData)
                throw 'can not set data to buffer: bufferData not specified';
            if (!itemType)
                throw 'can not set data to buffer: itemType not specified';
            if (!itemSize)
                throw 'can not set data to buffer: itemSize not specified';
        }
        var gl = this.gl;
        gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
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
        if (__WEBPACK_IMPORTED_MODULE_0__declarations__["DEBUG"] && !program)
            throw "can not bind VertexBuffer, program not specified";
        if (__WEBPACK_IMPORTED_MODULE_0__declarations__["DEBUG"] && !this.attrName)
            throw "can not bind VertexBuffer, attribute name not specified";
        program.bindBuffer(this, this.attrName);
    };
    VertexBuffer.prototype.unbind = function () {
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, null);
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
/* harmony default export */ __webpack_exports__["a"] = (VertexBuffer);


/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__abstract_abstractFilter__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_shaderProgramUtils__ = __webpack_require__(3);
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


var BlackWhiteFilter = /** @class */ (function (_super) {
    __extends(BlackWhiteFilter, _super);
    function BlackWhiteFilter(gl) {
        return _super.call(this, gl) || this;
    }
    BlackWhiteFilter.prototype.prepare = function (programGen) {
        programGen.addFragmentUniform(__WEBPACK_IMPORTED_MODULE_1__base_shaderProgramUtils__["a" /* GL_TYPE */].FLOAT, 'u_mixFactor');
        programGen.setFragmentMainFn("\n            vec4 col = texture2D(texture, v_texCoord);\n            float avg = (col.r+col.g+col.b)/3.0;\n            vec4 bw = vec4(avg);\n            vec4 result = mix(col,bw,vec4(u_mixFactor));\n            result.a = 1.0;\n            gl_FragColor = result; \n        ");
        this.setParam('u_mixFactor', 0.8);
    };
    return BlackWhiteFilter;
}(__WEBPACK_IMPORTED_MODULE_0__abstract_abstractFilter__["a" /* default */]));
/* harmony default export */ __webpack_exports__["a"] = (BlackWhiteFilter);


/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__abstract_abstractFilter__ = __webpack_require__(11);
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

var ColorizeFilter = /** @class */ (function (_super) {
    __extends(ColorizeFilter, _super);
    function ColorizeFilter(gl) {
        return _super.call(this, gl) || this;
    }
    ColorizeFilter.prototype.prepare = function (programGen) {
        programGen.setFragmentMainFn("\n            vec4 col = texture2D(texture, v_texCoord);\n            col.g = 0.9;\n            gl_FragColor = col;\n        ");
    };
    return ColorizeFilter;
}(__WEBPACK_IMPORTED_MODULE_0__abstract_abstractFilter__["a" /* default */]));
/* harmony default export */ __webpack_exports__["a"] = (ColorizeFilter);


/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__abstract_abstractFilter__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_shaderProgramUtils__ = __webpack_require__(3);
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


var SimpleCopyFilter = /** @class */ (function (_super) {
    __extends(SimpleCopyFilter, _super);
    function SimpleCopyFilter(gl) {
        return _super.call(this, gl) || this;
    }
    SimpleCopyFilter.prototype.prepare = function (programGen) {
        programGen.addFragmentUniform(__WEBPACK_IMPORTED_MODULE_1__base_shaderProgramUtils__["a" /* GL_TYPE */].FLOAT, 'u_mixFactor');
        programGen.setFragmentMainFn("\n            gl_FragColor = texture2D(texture, v_texCoord); \n        ");
    };
    return SimpleCopyFilter;
}(__WEBPACK_IMPORTED_MODULE_0__abstract_abstractFilter__["a" /* default */]));
/* harmony default export */ __webpack_exports__["a"] = (SimpleCopyFilter);


/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__abstractPrimitive__ = __webpack_require__(12);
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
}(__WEBPACK_IMPORTED_MODULE_0__abstractPrimitive__["a" /* default */]));
/* harmony default export */ __webpack_exports__["a"] = (Circle);


/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__abstractPrimitive__ = __webpack_require__(12);
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
}(__WEBPACK_IMPORTED_MODULE_0__abstractPrimitive__["a" /* default */]));
/* harmony default export */ __webpack_exports__["a"] = (Line);


/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__generic_base_spriteRectDrawer__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_shaderProgramUtils__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shaders_generators_generic_texShaderGenerator__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_shaderProgram__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__filters_textureFilters_simpleCopyFilter__ = __webpack_require__(67);





var AbstractBlendDrawer = /** @class */ (function () {
    function AbstractBlendDrawer(gl) {
        this.gl = gl;
        var gen = new __WEBPACK_IMPORTED_MODULE_2__shaders_generators_generic_texShaderGenerator__["a" /* default */]();
        gen.addVarying(__WEBPACK_IMPORTED_MODULE_1__base_shaderProgramUtils__["a" /* GL_TYPE */].FLOAT_VEC4, 'v_destTexCoord');
        gen.addFragmentUniform(__WEBPACK_IMPORTED_MODULE_1__base_shaderProgramUtils__["a" /* GL_TYPE */].SAMPLER_2D, 'destTexture');
        gen.setVertexMainFn("\n            gl_Position = u_vertexMatrix * a_position;\n            v_texCoord = (u_textureMatrix * vec4(a_texCoord, 0, 1)).xy;\n            v_destTexCoord = gl_Position*0.5+0.5;  \n        ");
        this.prepare(gen);
        this._afterPrepare(gen);
        this.simpleCopyFilter = new __WEBPACK_IMPORTED_MODULE_4__filters_textureFilters_simpleCopyFilter__["a" /* default */](gl);
    }
    AbstractBlendDrawer.prototype._afterPrepare = function (gen) {
        var program = new __WEBPACK_IMPORTED_MODULE_3__base_shaderProgram__["a" /* default */](this.gl, gen.getVertexSource(), gen.getFragmentSource());
        this.spriteRectDrawer = new __WEBPACK_IMPORTED_MODULE_0__generic_base_spriteRectDrawer__["a" /* default */](this.gl, program);
    };
    AbstractBlendDrawer.prototype.prepare = function (programGen) { };
    // destTex is copy or current destination texture
    // to avoid "Source and destination textures of the draw are the same" error
    AbstractBlendDrawer.prototype.draw = function (sourceTex, frameBuffer, uniforms) {
        var destTex = frameBuffer.texture;
        destTex = destTex.applyFilters([this.simpleCopyFilter], frameBuffer);
        destTex.bind(1);
        uniforms.texture = 0;
        uniforms.destTexture = 1;
        this.spriteRectDrawer.draw(sourceTex, uniforms);
    };
    return AbstractBlendDrawer;
}());
/* harmony default export */ __webpack_exports__["a"] = (AbstractBlendDrawer);


/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__primitives_circle__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_shaderProgram__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__abstract_abstractDrawer__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_bufferInfo__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shaders_generators_generic_colorShaderGenerator__ = __webpack_require__(15);
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





var CircleDrawer = /** @class */ (function (_super) {
    __extends(CircleDrawer, _super);
    function CircleDrawer(gl) {
        var _this = _super.call(this, gl) || this;
        var gen = new __WEBPACK_IMPORTED_MODULE_4__shaders_generators_generic_colorShaderGenerator__["a" /* default */]();
        _this.program = new __WEBPACK_IMPORTED_MODULE_1__base_shaderProgram__["a" /* default */](gl, gen.getVertexSource(), gen.getFragmentSource());
        _this.circle = new __WEBPACK_IMPORTED_MODULE_0__primitives_circle__["a" /* default */]();
        _this.bufferInfo = new __WEBPACK_IMPORTED_MODULE_3__base_bufferInfo__["a" /* default */](gl, {
            posVertexInfo: { array: _this.circle.vertexArr, type: gl.FLOAT, size: 2, attrName: 'a_position' },
            drawMethod: _this.gl.TRIANGLE_FAN
        });
        return _this;
    }
    return CircleDrawer;
}(__WEBPACK_IMPORTED_MODULE_2__abstract_abstractDrawer__["a" /* default */]));
/* harmony default export */ __webpack_exports__["a"] = (CircleDrawer);


/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__primitives_plane__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_shaderProgram__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_bufferInfo__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__abstract_abstractDrawer__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shaders_generators_generic_colorShaderGenerator__ = __webpack_require__(15);
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





var ColorRectDrawer = /** @class */ (function (_super) {
    __extends(ColorRectDrawer, _super);
    function ColorRectDrawer(gl) {
        var _this = _super.call(this, gl) || this;
        _this.plane = new __WEBPACK_IMPORTED_MODULE_0__primitives_plane__["a" /* default */]();
        var gen = new __WEBPACK_IMPORTED_MODULE_4__shaders_generators_generic_colorShaderGenerator__["a" /* default */]();
        _this.program = new __WEBPACK_IMPORTED_MODULE_1__base_shaderProgram__["a" /* default */](gl, gen.getVertexSource(), gen.getFragmentSource());
        _this.bufferInfo = new __WEBPACK_IMPORTED_MODULE_2__base_bufferInfo__["a" /* default */](gl, {
            posVertexInfo: { array: _this.plane.vertexArr, type: gl.FLOAT, size: 2, attrName: 'a_position' },
            posIndexInfo: { array: _this.plane.indexArr },
            drawMethod: _this.gl.TRIANGLE_STRIP
        });
        return _this;
    }
    return ColorRectDrawer;
}(__WEBPACK_IMPORTED_MODULE_3__abstract_abstractDrawer__["a" /* default */]));
/* harmony default export */ __webpack_exports__["a"] = (ColorRectDrawer);


/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__primitives_line__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_shaderProgram__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_bufferInfo__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__abstract_abstractDrawer__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shaders_generators_generic_colorShaderGenerator__ = __webpack_require__(15);
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





var LineDrawer = /** @class */ (function (_super) {
    __extends(LineDrawer, _super);
    function LineDrawer(gl) {
        var _this = _super.call(this, gl) || this;
        var gen = new __WEBPACK_IMPORTED_MODULE_4__shaders_generators_generic_colorShaderGenerator__["a" /* default */]();
        _this.program = new __WEBPACK_IMPORTED_MODULE_1__base_shaderProgram__["a" /* default */](gl, gen.getVertexSource(), gen.getFragmentSource());
        _this.line = new __WEBPACK_IMPORTED_MODULE_0__primitives_line__["a" /* default */]();
        _this.bufferInfo = new __WEBPACK_IMPORTED_MODULE_2__base_bufferInfo__["a" /* default */](gl, {
            posVertexInfo: { array: _this.line.vertexArr, type: gl.FLOAT, size: 2, attrName: 'a_position' },
            drawMethod: _this.gl.LINE_STRIP
        });
        return _this;
    }
    return LineDrawer;
}(__WEBPACK_IMPORTED_MODULE_3__abstract_abstractDrawer__["a" /* default */]));
/* harmony default export */ __webpack_exports__["a"] = (LineDrawer);


/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__primitives_plane__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_shaderProgram__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_bufferInfo__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__abstract_abstractDrawer__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_shaderProgramUtils__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shaders_generators_generic_texShaderGenerator__ = __webpack_require__(10);
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






var gen = new __WEBPACK_IMPORTED_MODULE_5__shaders_generators_generic_texShaderGenerator__["a" /* default */]();
gen.addFragmentUniform(__WEBPACK_IMPORTED_MODULE_4__base_shaderProgramUtils__["a" /* GL_TYPE */].FLOAT_VEC2, 'u_offsetCoords');
gen.addFragmentUniform(__WEBPACK_IMPORTED_MODULE_4__base_shaderProgramUtils__["a" /* GL_TYPE */].FLOAT_VEC4, 'u_frameCoords');
gen.setFragmentMainFn("\n    vec2 localTextCoord = mod(\n        v_texCoord + fract(u_offsetCoords),\n        u_frameCoords.zw\n    ) + u_frameCoords.xy;\n    gl_FragColor = texture2D(texture, localTextCoord);\n    gl_FragColor.a *= u_alpha;\n");
var TiledSpriteRectDrawer = /** @class */ (function (_super) {
    __extends(TiledSpriteRectDrawer, _super);
    function TiledSpriteRectDrawer(gl) {
        var _this = _super.call(this, gl) || this;
        _this.plane = new __WEBPACK_IMPORTED_MODULE_0__primitives_plane__["a" /* default */]();
        _this.program = new __WEBPACK_IMPORTED_MODULE_1__base_shaderProgram__["a" /* default */](gl, gen.getVertexSource(), gen.getFragmentSource());
        _this.bufferInfo = new __WEBPACK_IMPORTED_MODULE_2__base_bufferInfo__["a" /* default */](gl, {
            posVertexInfo: { array: _this.plane.vertexArr, type: gl.FLOAT, size: 2, attrName: 'a_position' },
            posIndexInfo: { array: _this.plane.indexArr },
            texVertexInfo: { array: _this.plane.texCoordArr, type: gl.FLOAT, size: 2, attrName: 'a_texCoord' },
            drawMethod: _this.gl.TRIANGLE_STRIP
        });
        return _this;
    }
    return TiledSpriteRectDrawer;
}(__WEBPACK_IMPORTED_MODULE_3__abstract_abstractDrawer__["a" /* default */]));
/* harmony default export */ __webpack_exports__["a"] = (TiledSpriteRectDrawer);


/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__abstract_abstractBlendDrawer__ = __webpack_require__(70);
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

var MultBlendDrawer = /** @class */ (function (_super) {
    __extends(MultBlendDrawer, _super);
    function MultBlendDrawer(gl) {
        return _super.call(this, gl) || this;
    }
    MultBlendDrawer.prototype.prepare = function (programGen) {
        programGen.setFragmentMainFn("\n            vec4 srcColor =  texture2D(texture, v_texCoord)*2.0;\n            srcColor.a *= u_alpha;\n            vec4 destColor = texture2D(destTexture, v_destTexCoord.xy);\n            vec4 res = min(srcColor + destColor,vec4(1.0));\n            gl_FragColor = res;\n        ");
    };
    return MultBlendDrawer;
}(__WEBPACK_IMPORTED_MODULE_0__abstract_abstractBlendDrawer__["a" /* default */]));
/* harmony default export */ __webpack_exports__["a"] = (MultBlendDrawer);


/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__abstract_abstractRenderer__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__renderPrograms_generic_base_spriteRectDrawer__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__renderPrograms_generic_base_tiledSpriteRectDrawer__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__renderPrograms_generic_base_colorRectDrawer__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__renderPrograms_abstract_abstractDrawer__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__renderPrograms_generic_base_lineDrawer__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__renderPrograms_generic_base_circleDrawer__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__base_frameBuffer__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__base_matrixStack__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__geometry_mat4__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__mathEx__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__base_texture__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__renderPrograms_generic_blend_multBlendDrawer__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__geometry_rect__ = __webpack_require__(9);
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














var getCtx = function (el) {
    return (el.getContext("webgl", { alpha: false }) ||
        el.getContext('experimental-webgl', { alpha: false }) ||
        el.getContext('webkit-3d', { alpha: false }) ||
        el.getContext('moz-webgl', { alpha: false }));
};
var SCENE_DEPTH = 1000;
var matrixStack = new __WEBPACK_IMPORTED_MODULE_8__base_matrixStack__["a" /* default */]();
var makePositionMatrix = function (dstX, dstY, dstWidth, dstHeight, viewWidth, viewHeight) {
    // proj * modelView
    var zToWMatrix = __WEBPACK_IMPORTED_MODULE_9__geometry_mat4__["a" /* makeZToWMatrix */](1);
    var projectionMatrix = __WEBPACK_IMPORTED_MODULE_9__geometry_mat4__["b" /* ortho */](0, viewWidth, 0, viewHeight, -SCENE_DEPTH, SCENE_DEPTH);
    var scaleMatrix = __WEBPACK_IMPORTED_MODULE_9__geometry_mat4__["c" /* makeScale */](dstWidth, dstHeight, 1);
    var translationMatrix = __WEBPACK_IMPORTED_MODULE_9__geometry_mat4__["d" /* makeTranslation */](dstX, dstY, 0);
    var matrix = __WEBPACK_IMPORTED_MODULE_9__geometry_mat4__["e" /* matrixMultiply */](scaleMatrix, translationMatrix);
    matrix = __WEBPACK_IMPORTED_MODULE_9__geometry_mat4__["e" /* matrixMultiply */](matrix, matrixStack.getCurrentMatrix());
    matrix = __WEBPACK_IMPORTED_MODULE_9__geometry_mat4__["e" /* matrixMultiply */](matrix, projectionMatrix);
    matrix = __WEBPACK_IMPORTED_MODULE_9__geometry_mat4__["e" /* matrixMultiply */](matrix, zToWMatrix);
    return matrix;
};
var makeTextureMatrix = function (srcX, srcY, srcWidth, srcHeight, texWidth, texHeight) {
    var texScaleMatrix = __WEBPACK_IMPORTED_MODULE_9__geometry_mat4__["c" /* makeScale */](srcWidth / texWidth, srcHeight / texHeight, 1);
    var texTranslationMatrix = __WEBPACK_IMPORTED_MODULE_9__geometry_mat4__["d" /* makeTranslation */](srcX / texWidth, srcY / texHeight, 0);
    return __WEBPACK_IMPORTED_MODULE_9__geometry_mat4__["e" /* matrixMultiply */](texScaleMatrix, texTranslationMatrix);
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
        this.circleDrawer = new __WEBPACK_IMPORTED_MODULE_6__renderPrograms_generic_base_circleDrawer__["a" /* default */](gl);
        this.spriteRectDrawer = new __WEBPACK_IMPORTED_MODULE_1__renderPrograms_generic_base_spriteRectDrawer__["a" /* default */](gl);
        this.tiledSpriteRectDrawer = new __WEBPACK_IMPORTED_MODULE_2__renderPrograms_generic_base_tiledSpriteRectDrawer__["a" /* default */](gl);
        this.colorRectDrawer = new __WEBPACK_IMPORTED_MODULE_3__renderPrograms_generic_base_colorRectDrawer__["a" /* default */](gl);
        this.lineDrawer = new __WEBPACK_IMPORTED_MODULE_5__renderPrograms_generic_base_lineDrawer__["a" /* default */](gl);
        //this.modelDrawer = new ModelDrawer(gl);
        this.multBlendDrawer = new __WEBPACK_IMPORTED_MODULE_12__renderPrograms_generic_blend_multBlendDrawer__["a" /* default */](gl);
        this.frameBuffer = new __WEBPACK_IMPORTED_MODULE_7__base_frameBuffer__["a" /* default */](gl, this.game.width, this.game.height);
        gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
        gl.enable(gl.BLEND);
    };
    WebGlRenderer.prototype.draw = function (renderable) {
        if (!__WEBPACK_IMPORTED_MODULE_10__mathEx__["overlapTest"](this.game.camera.getRectScaled(), renderable.getRect()))
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
        this.drawTexture(texToDraw, renderable.getFrameRect(), 0, 0);
        this.restore();
    };
    WebGlRenderer.prototype.drawImage = function (texturePath, srcX, srcY, srcWidth, srcHeight, dstX, dstY) {
        //this.gl.blendFunc(this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA);
        //gl.blendColor(0, 0.5, 1, 1);
        var texture = this.renderableCache[texturePath];
        if (1 && !texture) {
            if (!texturePath)
                throw "no texture path provided";
            else
                throw "can not find texture with path " + texturePath;
        }
        this.drawTexture(texture, new __WEBPACK_IMPORTED_MODULE_13__geometry_rect__["a" /* default */](srcX, srcY, srcWidth, srcHeight), dstX, dstY);
    };
    WebGlRenderer.prototype.drawTexture = function (texture, srcRect, dstX, dstY) {
        var camRectScaled = this.game.camera.getRectScaled();
        if (!__WEBPACK_IMPORTED_MODULE_10__mathEx__["overlapTest"](camRectScaled, new __WEBPACK_IMPORTED_MODULE_13__geometry_rect__["a" /* default */](camRectScaled.x + srcRect.x, camRectScaled.y + srcRect.y, srcRect.width, srcRect.height)))
            return;
        var texWidth = texture.getSize().width;
        var texHeight = texture.getSize().height;
        var uniforms = {
            u_textureMatrix: makeTextureMatrix(srcRect.x, srcRect.y, srcRect.width, srcRect.height, texWidth, texHeight),
            u_vertexMatrix: makePositionMatrix(dstX, dstY, srcRect.width, srcRect.height, this.game.width, this.game.height),
            u_alpha: 1
        };
        if (srcRect.width === 120 || srcRect.width === 174) {
            this.multBlendDrawer.draw(texture, this.frameBuffer, uniforms);
        }
        else
            this.spriteRectDrawer.draw(texture, uniforms);
    };
    WebGlRenderer.prototype.drawTiledImage = function (texturePath, srcX, srcY, srcWidth, srcHeight, dstX, dstY, dstWidth, dstHeight, offsetX, offsetY) {
        //this.gl.blendFunc(this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA);
        //gl.blendColor(0, 0.5, 1, 1);
        var texture = this.renderableCache[texturePath];
        if (1 && !texture) {
            if (!texturePath)
                throw "no texture path provided";
            else
                throw "can not find texture with path " + texturePath;
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
    WebGlRenderer.prototype.fillRect = function (x, y, width, height, color) {
        if (!__WEBPACK_IMPORTED_MODULE_10__mathEx__["overlapTest"](this.game.camera.getRectScaled(), new __WEBPACK_IMPORTED_MODULE_13__geometry_rect__["a" /* default */](x, y, width, height)))
            return;
        var uniforms = {
            u_vertexMatrix: makePositionMatrix(x, y, width, height, this.game.width, this.game.height),
            u_rgba: color
        };
        //gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
        this.colorRectDrawer.draw(null, uniforms);
    };
    WebGlRenderer.prototype.drawRect = function (x, y, w, h, color) {
        this.fillRect(x, y, w, 1, color);
        this.fillRect(x, y + h, w, 1, color);
        this.fillRect(x, y, 1, h, color);
        this.fillRect(x + w, y, 1, h, color);
    };
    WebGlRenderer.prototype.drawLine = function (x1, y1, x2, y2, color) {
        var dx = x2 - x1, dy = y2 - y1;
        if (!__WEBPACK_IMPORTED_MODULE_10__mathEx__["overlapTest"](this.game.camera.getRectScaled(), new __WEBPACK_IMPORTED_MODULE_13__geometry_rect__["a" /* default */](x1, y1, dx, dy)))
            return;
        var uniforms = {};
        uniforms.u_vertexMatrix = makePositionMatrix(x1, y1, dx, dy, this.game.width, this.game.height);
        uniforms.u_rgba = color;
        //gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
        this.lineDrawer.draw(null, uniforms);
    };
    WebGlRenderer.prototype.fillCircle = function (x, y, r, color) {
        var r2 = r * 2;
        if (!__WEBPACK_IMPORTED_MODULE_10__mathEx__["overlapTest"](this.game.camera.getRectScaled(), new __WEBPACK_IMPORTED_MODULE_13__geometry_rect__["a" /* default */](x - r, y - r, r2, r2)))
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
    // gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
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
            u_textureMatrix: makeTextureMatrix(0, 0, fullScreen.w, fullScreen.h, fullScreen.w, fullScreen.h),
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
            console.log(__WEBPACK_IMPORTED_MODULE_4__renderPrograms_abstract_abstractDrawer__["a" /* default */].currentInstance);
        }
        return err;
    };
    WebGlRenderer.prototype.loadTextureInfo = function (resourcePath, onLoad) {
        var _this = this;
        var img = new Image();
        img.src = resourcePath;
        img.onload = function () {
            var texture = new __WEBPACK_IMPORTED_MODULE_11__base_texture__["a" /* default */](_this.gl);
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
    return WebGlRenderer;
}(__WEBPACK_IMPORTED_MODULE_0__abstract_abstractRenderer__["a" /* default */]));
/* harmony default export */ __webpack_exports__["a"] = (WebGlRenderer);


/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__model_all__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__declarations__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__declarations___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__declarations__);


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
        if (__WEBPACK_IMPORTED_MODULE_1__declarations__["DEBUG"] && !type)
            throw 'repository.getObject: type not specified';
        if (__WEBPACK_IMPORTED_MODULE_1__declarations__["DEBUG"] && id == null) {
            console.trace("id is null");
            throw "::getObject() id not specified for type " + type;
        }
        var Clazz = __WEBPACK_IMPORTED_MODULE_0__model_all__[type];
        if (__WEBPACK_IMPORTED_MODULE_1__declarations__["DEBUG"] && !Clazz) {
            throw "::getObject() undeclared object type " + type;
        }
        if (__WEBPACK_IMPORTED_MODULE_1__declarations__["DEBUG"] && !this.descriptions[type])
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
        if (__WEBPACK_IMPORTED_MODULE_1__declarations__["DEBUG"] && !obj.id) {
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
        if (__WEBPACK_IMPORTED_MODULE_1__declarations__["DEBUG"] && !this.arrays[obj.type])
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
        if (__WEBPACK_IMPORTED_MODULE_1__declarations__["DEBUG"] && !__WEBPACK_IMPORTED_MODULE_0__model_all__[type])
            throw "getArray: unregistered type \"" + type + "\"";
        if (this.arrays[type])
            return this.arrays[type];
        var res = [];
        if (!this.descriptions[type])
            this.descriptions[type] = [];
        this.descriptions[type].forEach(function (desc) {
            if (__WEBPACK_IMPORTED_MODULE_1__declarations__["DEBUG"] && (desc.id === null || desc.id === undefined)) {
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
/* harmony default export */ __webpack_exports__["a"] = (Repository);


/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__generic_frameAnimation__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__generic_spriteSheet__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__generic_gameObjectProto__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__generic_gameObject__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__generic_commonBehaviour__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__generic_particleSystem__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__generic_scene__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__generic_sound__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__generic_font__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__generic_layer__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__generic_ui_textField__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__generic_tileMap__ = __webpack_require__(26);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "FrameAnimation", function() { return __WEBPACK_IMPORTED_MODULE_0__generic_frameAnimation__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SpriteSheet", function() { return __WEBPACK_IMPORTED_MODULE_1__generic_spriteSheet__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "GameObjectProto", function() { return __WEBPACK_IMPORTED_MODULE_2__generic_gameObjectProto__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "GameObject", function() { return __WEBPACK_IMPORTED_MODULE_3__generic_gameObject__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "CommonBehaviour", function() { return __WEBPACK_IMPORTED_MODULE_4__generic_commonBehaviour__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ParticleSystem", function() { return __WEBPACK_IMPORTED_MODULE_5__generic_particleSystem__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Scene", function() { return __WEBPACK_IMPORTED_MODULE_6__generic_scene__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Sound", function() { return __WEBPACK_IMPORTED_MODULE_7__generic_sound__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Font", function() { return __WEBPACK_IMPORTED_MODULE_8__generic_font__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Layer", function() { return __WEBPACK_IMPORTED_MODULE_9__generic_layer__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "TextField", function() { return __WEBPACK_IMPORTED_MODULE_10__generic_ui_textField__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "TileMap", function() { return __WEBPACK_IMPORTED_MODULE_11__generic_tileMap__["a"]; });















/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseModel__ = __webpack_require__(1);
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
}(__WEBPACK_IMPORTED_MODULE_0__baseModel__["a" /* default */]));
/* harmony default export */ __webpack_exports__["a"] = (CommonBehaviour);


/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseModel__ = __webpack_require__(1);
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
    return Font;
}(__WEBPACK_IMPORTED_MODULE_0__baseModel__["a" /* default */]));
/* harmony default export */ __webpack_exports__["a"] = (Font);


/***/ }),
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseModel__ = __webpack_require__(1);
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
}(__WEBPACK_IMPORTED_MODULE_0__baseModel__["a" /* default */]));
/* harmony default export */ __webpack_exports__["a"] = (FrameAnimation);


/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__gameObjectProto__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__commonBehaviour_all__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_renderer_webGl_filters_textureFilters_blackWhite__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_renderer_webGl_filters_textureFilters_colorizeFilter__ = __webpack_require__(66);
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
        if (this.id === 71) {
            var filter1 = new __WEBPACK_IMPORTED_MODULE_2__core_renderer_webGl_filters_textureFilters_blackWhite__["a" /* default */](this.game.renderer['gl']); // todo
            var filter2 = new __WEBPACK_IMPORTED_MODULE_3__core_renderer_webGl_filters_textureFilters_colorizeFilter__["a" /* default */](this.game.renderer['gl']);
            this.filters.push(filter1);
            this.filters.push(filter2);
        }
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
            var CbClazz = __WEBPACK_IMPORTED_MODULE_1__commonBehaviour_all__[cb.name];
            if (true) {
                if (!CbClazz) {
                    console.error(cb);
                    console.error(__WEBPACK_IMPORTED_MODULE_1__commonBehaviour_all__);
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
}(__WEBPACK_IMPORTED_MODULE_0__gameObjectProto__["a" /* default */]));
/* harmony default export */ __webpack_exports__["a"] = (GameObject);
;


/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseModel__ = __webpack_require__(1);
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
}(__WEBPACK_IMPORTED_MODULE_0__baseModel__["a" /* default */]));
/* harmony default export */ __webpack_exports__["a"] = (Layer);


/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseModel__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_mathEx__ = __webpack_require__(5);
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


var r = function (obj) {
    return __WEBPACK_IMPORTED_MODULE_1__core_mathEx__["random"](obj.from, obj.to);
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
}(__WEBPACK_IMPORTED_MODULE_0__baseModel__["a" /* default */]));
/* harmony default export */ __webpack_exports__["a"] = (ParticleSystem);


/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseModel__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_misc_loadingQueue__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tileMap__ = __webpack_require__(26);
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



var Scene = /** @class */ (function (_super) {
    __extends(Scene, _super);
    function Scene(game) {
        var _this = _super.call(this, game) || this;
        _this.type = 'Scene';
        _this.layers = [];
        _this.useBG = false;
        _this.colorBG = { r: 255, g: 255, b: 255 };
        _this._tweenMovies = [];
        _this.filters = [];
        _this._individualBehaviour = null;
        _this.tileMap = new __WEBPACK_IMPORTED_MODULE_2__tileMap__["a" /* default */](game);
        return _this;
    }
    Scene.prototype.revalidate = function () {
        _super.prototype.revalidate.call(this);
        if (!false && this.tileMap && this.tileMap.spriteSheet) {
            this.tileMap._tilesInScreenX = ~~(this.game.width / this.tileMap.spriteSheet._frameWidth);
            this.tileMap._tilesInScreenY = ~~(this.game.height / this.tileMap.spriteSheet._frameHeight);
        }
        //this.filters.push(new BlackWhiteFilter(this.game.renderer.gl));
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
        var q = new __WEBPACK_IMPORTED_MODULE_1__core_misc_loadingQueue__["a" /* default */]();
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
}(__WEBPACK_IMPORTED_MODULE_0__baseModel__["a" /* default */]));
/* harmony default export */ __webpack_exports__["a"] = (Scene);


/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseModel__ = __webpack_require__(1);
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
}(__WEBPACK_IMPORTED_MODULE_0__baseModel__["a" /* default */]));
/* harmony default export */ __webpack_exports__["a"] = (Sound);


/***/ }),
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseModel__ = __webpack_require__(1);
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
    return SpriteSheet;
}(__WEBPACK_IMPORTED_MODULE_0__baseModel__["a" /* default */]));
/* harmony default export */ __webpack_exports__["a"] = (SpriteSheet);


/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__engine_core_game__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_gameProps__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_repository__ = __webpack_require__(31);



if (1 && __WEBPACK_IMPORTED_MODULE_1__app_gameProps__["a" /* gameProps */].startSceneId === undefined)
    throw 'start scene not specified';
var game = new __WEBPACK_IMPORTED_MODULE_0__engine_core_game__["a" /* default */]();
game.fromJSON(__WEBPACK_IMPORTED_MODULE_1__app_gameProps__["a" /* gameProps */]);
game.repository.setDescriptions(__WEBPACK_IMPORTED_MODULE_2__app_repository__["a" /* repository */]);
var startScene = game.repository.getObject(__WEBPACK_IMPORTED_MODULE_1__app_gameProps__["a" /* gameProps */].startSceneId, 'Scene');
game.runScene(startScene);
if (true)
    window['game'] = game;


/***/ })
/******/ ]);