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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var fns_1 = __webpack_require__(2);
var fs = fns_1.nodeRequire('fs');
var path = fns_1.nodeRequire('path');
var FS = (function () {
    function FS() {
    }
    FS.prototype.copyFile = function (source, target) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                return [2, new Promise(function (resolve, reject) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                        function done(err) {
                            if (err) {
                                console.error('copyFile error', err);
                                reject(err);
                            }
                            else
                                resolve();
                        }
                        var pathArr, targetPath, exists, ws, rs;
                        return tslib_1.__generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    pathArr = target.split('/');
                                    pathArr.pop();
                                    targetPath = pathArr.join('/');
                                    return [4, this.exists(targetPath)];
                                case 1:
                                    exists = _a.sent();
                                    if (!(!exists && targetPath)) return [3, 3];
                                    return [4, this.createFolder(targetPath)];
                                case 2:
                                    _a.sent();
                                    _a.label = 3;
                                case 3:
                                    ws = fs.createWriteStream(target);
                                    rs = fs.createReadStream(source);
                                    ws.on("error", function (err) {
                                        done(err);
                                    });
                                    ws.on("error", function (err) {
                                        done(err);
                                    });
                                    ws.on("close", function () {
                                        done();
                                    });
                                    ws.on("error", function (err) {
                                        done(err);
                                    });
                                    rs.pipe(ws);
                                    return [2];
                            }
                        });
                    }); })];
            });
        });
    };
    FS.prototype.exists = function (target) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2, new Promise(function (resolve, reject) {
                        fs.exists(target, function (exists) {
                            resolve(exists);
                        });
                    })];
            });
        });
    };
    FS.prototype.deleteFile = function (source) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var exists;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.exists(source)];
                    case 1:
                        exists = _a.sent();
                        if (exists)
                            return [2, new Promise(function (resolve, reject) {
                                    fs.unlink(source, function (error) {
                                        if (error) {
                                            console.error('deleteFile error', error);
                                            reject(error);
                                        }
                                        else
                                            resolve();
                                    });
                                })];
                        return [2];
                }
            });
        });
    };
    FS.prototype.readFile = function (path, asBin) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2, new Promise(function (resolve, reject) {
                        fs.readFile(path, asBin ? undefined : "utf8", function (err, content) {
                            if (err) {
                                console.error('readFile error', err);
                                reject(err);
                            }
                            else
                                resolve(content);
                        });
                    })];
            });
        });
    };
    FS.prototype.createFile = function (path, content) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.deleteFile(path)];
                    case 1:
                        _a.sent();
                        return [4, this.writeFile(path, content || '')];
                    case 2:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    FS.prototype.writeFile = function (path, content, asBin) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var opts;
            return tslib_1.__generator(this, function (_a) {
                opts = asBin ? undefined : { encoding: "utf-8" };
                return [2, new Promise(function (resolve, reject) {
                        fs.writeFile(path, content, opts, function (err) {
                            if (err) {
                                console.error('writeFile error', err);
                                reject(err);
                            }
                            else
                                resolve();
                        });
                    })];
            });
        });
    };
    FS.prototype._copyFilesToFolder = function (source, target) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var exists;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.exists(target)];
                    case 1:
                        exists = _a.sent();
                        return [2, new Promise(function (resolve, reject) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                                var targetFile, isDir;
                                return tslib_1.__generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            targetFile = target;
                                            if (!exists) return [3, 2];
                                            return [4, this._isDirectory(target)];
                                        case 1:
                                            isDir = _a.sent();
                                            if (isDir)
                                                targetFile = path.join(target, path.basename(source));
                                            fs.readFile(source, function (err, file) {
                                                if (err)
                                                    reject(err);
                                                else
                                                    fs.writeFile(targetFile, file, function (error) {
                                                        if (error)
                                                            reject(error);
                                                        else
                                                            resolve();
                                                    });
                                            });
                                            return [3, 3];
                                        case 2:
                                            reject(target + " not exists");
                                            _a.label = 3;
                                        case 3: return [2];
                                    }
                                });
                            }); })];
                }
            });
        });
    };
    FS.prototype._isDirectory = function (path) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var exists;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.exists(path)];
                    case 1:
                        exists = _a.sent();
                        if (!exists)
                            return [2, false];
                        return [2, new Promise(function (resolve, reject) {
                                fs.lstat(path, function (err, stat) {
                                    if (err)
                                        reject(err);
                                    else
                                        resolve(stat.isDirectory());
                                });
                            })];
                }
            });
        });
    };
    FS.prototype.copyFolder = function (source, target) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                return [2, new Promise(function (resolve, reject) {
                        var targetFolder = path.join(target, path.basename(source));
                        Promise.resolve().then(function () {
                            return _this.exists(targetFolder);
                        }).then(function (exists) {
                            if (!exists)
                                return new Promise(function (resolve, reject) {
                                    fs.mkdir(targetFolder, function (error) {
                                        if (error) {
                                            console.error('copyFolder targetFolder error', targetFolder);
                                            console.error('copyFolder mkdir error', error);
                                            reject(error);
                                        }
                                        else
                                            resolve();
                                    });
                                });
                        }).then(function () {
                            return new Promise(function (resolve, reject) {
                                fs.readdir(source, function (err, files) {
                                    if (err) {
                                        console.error('readdir source error', source);
                                        console.error('copyFolder readdir error', err);
                                        reject(err);
                                    }
                                    else
                                        resolve(files);
                                });
                            });
                        }).then(function (files) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                            var _this = this;
                            return tslib_1.__generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4, fns_1.forEach(files, function (file) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                                            var curSource, isDirectory;
                                            return tslib_1.__generator(this, function (_a) {
                                                switch (_a.label) {
                                                    case 0:
                                                        curSource = path.join(source, file);
                                                        return [4, this._isDirectory(curSource)];
                                                    case 1:
                                                        isDirectory = _a.sent();
                                                        if (!isDirectory) return [3, 3];
                                                        return [4, this.copyFolder(curSource, targetFolder)];
                                                    case 2:
                                                        _a.sent();
                                                        return [3, 5];
                                                    case 3: return [4, this._copyFilesToFolder(curSource, targetFolder)];
                                                    case 4:
                                                        _a.sent();
                                                        _a.label = 5;
                                                    case 5: return [2];
                                                }
                                            });
                                        }); })];
                                    case 1:
                                        _a.sent();
                                        resolve();
                                        return [2];
                                }
                            });
                        }); }).catch(function (err) {
                            console.error('copyFolder catch error', err);
                            reject(err);
                        });
                    })];
            });
        });
    };
    FS.prototype._read = function (path, res, contentType, deep) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                return [2, new Promise(function (resolve, reject) {
                        try {
                            fs.readdir(path, function (error, files) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                                var _this = this;
                                return tslib_1.__generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            if (error) {
                                                console.error(error);
                                                return [2, reject(error)];
                                            }
                                            return [4, fns_1.forEach(files, function (file) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                                                    var isDir, fullPath, content, splitted, ext, nameNoExt;
                                                    return tslib_1.__generator(this, function (_a) {
                                                        switch (_a.label) {
                                                            case 0: return [4, this._isDirectory(path + '/' + file)];
                                                            case 1:
                                                                isDir = _a.sent();
                                                                if (!isDir) return [3, 4];
                                                                if (!deep) return [3, 3];
                                                                return [4, this._read(path + '/' + file, res)];
                                                            case 2:
                                                                _a.sent();
                                                                _a.label = 3;
                                                            case 3: return [3, 6];
                                                            case 4:
                                                                fullPath = (path + '/' + file).split('/').filter(function (s) { return !!s.length; }).join('/');
                                                                if (path.indexOf('/') == 0)
                                                                    fullPath = '/' + fullPath;
                                                                return [4, this.readFile(fullPath, contentType)];
                                                            case 5:
                                                                content = _a.sent();
                                                                splitted = file.split('.');
                                                                ext = '', nameNoExt = file;
                                                                if (splitted.length >= 1) {
                                                                    ext = splitted.pop();
                                                                    nameNoExt = splitted.join('.');
                                                                }
                                                                res.push({ name: file, fullName: fullPath, content: content, ext: ext, nameNoExt: nameNoExt });
                                                                _a.label = 6;
                                                            case 6: return [2];
                                                        }
                                                    });
                                                }); })];
                                        case 1:
                                            _a.sent();
                                            resolve(res);
                                            return [2];
                                    }
                                });
                            }); });
                        }
                        catch (e) {
                            reject(e);
                        }
                    })];
            });
        });
    };
    FS.prototype.readDir = function (path, contentType, deep) {
        if (deep === void 0) { deep = true; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var res;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        res = [];
                        return [4, this._read(path, res, contentType, deep)];
                    case 1:
                        _a.sent();
                        return [2, res];
                }
            });
        });
    };
    FS.prototype.getDirList = function (srcpath) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                return [2, new Promise(function (resolve, reject) {
                        fs.readdir(srcpath, function (error, files) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                            var e_1;
                            var _this = this;
                            return tslib_1.__generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        _a.trys.push([0, 2, , 3]);
                                        if (error) {
                                            console.error('getDirList error', error);
                                            reject(error);
                                            return [2];
                                        }
                                        return [4, fns_1.filter(files, function (file) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                                                var isDir;
                                                return tslib_1.__generator(this, function (_a) {
                                                    switch (_a.label) {
                                                        case 0: return [4, this._isDirectory(path.join(srcpath, file))];
                                                        case 1:
                                                            isDir = _a.sent();
                                                            return [2, isDir];
                                                    }
                                                });
                                            }); })];
                                    case 1:
                                        files = _a.sent();
                                        resolve(files);
                                        return [3, 3];
                                    case 2:
                                        e_1 = _a.sent();
                                        reject(e_1);
                                        return [3, 3];
                                    case 3: return [2];
                                }
                            });
                        }); });
                    })];
            });
        });
    };
    FS.prototype.deleteFolder = function (path) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var rmdir, unlink, exists;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        rmdir = function (path) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                            return tslib_1.__generator(this, function (_a) {
                                return [2, new Promise(function (resolve, reject) {
                                        fs.rmdir(path, function (error) {
                                            if (error)
                                                reject(error);
                                            else
                                                resolve();
                                        });
                                    })];
                            });
                        }); };
                        unlink = function (path) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                            return tslib_1.__generator(this, function (_a) {
                                return [2, new Promise(function (resolve, reject) {
                                        fs.unlink(path, function (error) {
                                            if (error)
                                                reject(error);
                                            else
                                                resolve();
                                        });
                                    })];
                            });
                        }); };
                        return [4, this.exists(path)];
                    case 1:
                        exists = _a.sent();
                        if (!exists)
                            return [2];
                        return [2, new Promise(function (resolve, reject) {
                                fs.readdir(path, function (error, files) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                                    var e_2;
                                    var _this = this;
                                    return tslib_1.__generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0:
                                                if (error) {
                                                    console.error('deleteFolder error', error);
                                                    reject(error);
                                                    return [2];
                                                }
                                                _a.label = 1;
                                            case 1:
                                                _a.trys.push([1, 4, , 5]);
                                                return [4, fns_1.forEach(files, function (file) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                                                        var curPath, isDir;
                                                        return tslib_1.__generator(this, function (_a) {
                                                            switch (_a.label) {
                                                                case 0:
                                                                    curPath = path + "/" + file;
                                                                    return [4, this._isDirectory(curPath)];
                                                                case 1:
                                                                    isDir = _a.sent();
                                                                    if (!isDir) return [3, 3];
                                                                    return [4, this.deleteFolder(curPath)];
                                                                case 2:
                                                                    _a.sent();
                                                                    return [3, 5];
                                                                case 3: return [4, unlink(curPath)];
                                                                case 4:
                                                                    _a.sent();
                                                                    _a.label = 5;
                                                                case 5: return [2];
                                                            }
                                                        });
                                                    }); })];
                                            case 2:
                                                _a.sent();
                                                return [4, rmdir(path)];
                                            case 3:
                                                _a.sent();
                                                resolve();
                                                return [3, 5];
                                            case 4:
                                                e_2 = _a.sent();
                                                reject(e_2);
                                                return [3, 5];
                                            case 5: return [2];
                                        }
                                    });
                                }); });
                            })];
                }
            });
        });
    };
    ;
    FS.prototype.createFolder = function (path) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var mkdir, pathSeq;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.deleteFolder(path)];
                    case 1:
                        _a.sent();
                        mkdir = function (path) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                            return tslib_1.__generator(this, function (_a) {
                                return [2, new Promise(function (resolve, reject) {
                                        fs.mkdir(path, function (error) {
                                            if (error && error.code !== 'EEXIST')
                                                reject(error);
                                            else
                                                resolve();
                                        });
                                    })];
                            });
                        }); };
                        pathSeq = '';
                        return [4, fns_1.forEach(path.split('/'), function (fldr) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                                var exists;
                                return tslib_1.__generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            if (!fldr)
                                                return [2];
                                            pathSeq += fldr;
                                            return [4, this.exists(pathSeq)];
                                        case 1:
                                            exists = _a.sent();
                                            if (!!exists) return [3, 3];
                                            return [4, mkdir(pathSeq)];
                                        case 2:
                                            _a.sent();
                                            _a.label = 3;
                                        case 3:
                                            pathSeq += '/';
                                            return [2];
                                    }
                                });
                            }); })];
                    case 2:
                        _a.sent();
                        if (!path) return [3, 4];
                        return [4, mkdir(path)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2];
                }
            });
        });
    };
    FS.prototype.rename = function (oldName, newName) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2, new Promise(function (resolve, reject) {
                        fs.rename(oldName, newName, function (error) {
                            if (error) {
                                console.error('rename error', error);
                                reject(error);
                            }
                            else
                                resolve();
                        });
                    })];
            });
        });
    };
    return FS;
}());
exports.default = new FS();


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
exports.nodeRequire =  true ? require : undefined;
function filter(arr, callback) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var fail;
        var _this = this;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    fail = Symbol();
                    return [4, Promise.all(arr.map(function (item) { return tslib_1.__awaiter(_this, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4, callback(item)];
                                case 1: return [2, (_a.sent()) ? item : fail];
                            }
                        }); }); }))];
                case 1: return [2, (_a.sent()).filter(function (i) { return i !== fail; })];
            }
        });
    });
}
exports.filter = filter;
function forEach(array, callback) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var index;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    index = 0;
                    _a.label = 1;
                case 1:
                    if (!(index < array.length)) return [3, 4];
                    return [4, callback(array[index], index, array)];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    index++;
                    return [3, 1];
                case 4: return [2];
            }
        });
    });
}
exports.forEach = forEach;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var decorateTarget = function (target, methodName, requestType, responseType) {
    if (requestType === void 0) { requestType = 'get'; }
    target.meta = target.meta || {};
    target.meta[methodName] = target.meta[methodName] || {};
    target.meta[methodName].requestType = requestType;
    if (responseType)
        target.meta[methodName].responseType = responseType;
};
exports.Post = function () {
    return function (target, methodName, descriptor) {
        decorateTarget(target, methodName, 'post', undefined);
    };
};
exports.Get = function () {
    return function (target, methodName, descriptor) {
        decorateTarget(target, methodName, 'get', undefined);
    };
};
exports.Multipart = function () {
    return function (target, methodName, descriptor) {
        decorateTarget(target, methodName, 'multipart', undefined);
    };
};
exports.View = function () {
    return function (target, methodName, descriptor) {
        decorateTarget(target, methodName, undefined, 'view');
    };
};


/***/ }),
/* 4 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var fs_1 = __webpack_require__(1);
var DataSourceHelper = (function () {
    function DataSourceHelper() {
    }
    DataSourceHelper.prototype.loadModel = function (path) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = JSON).parse;
                        return [4, fs_1.default.readFile(path)];
                    case 1: return [4, _b.apply(_a, [_c.sent()])];
                    case 2: return [2, _c.sent()];
                }
            });
        });
    };
    DataSourceHelper.prototype.saveModel = function (path, model) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, fs_1.default.writeFile(path, JSON.stringify(model, null, 4))];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    DataSourceHelper.prototype.uuid = function (projectName) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var meta, _a, _b;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = JSON).parse;
                        return [4, fs_1.default.readFile("workspace/" + projectName + "/meta.json")];
                    case 1:
                        meta = _b.apply(_a, [_c.sent()]);
                        meta.idSeq++;
                        return [4, fs_1.default.writeFile("workspace/" + projectName + "/meta.json", JSON.stringify(meta))];
                    case 2:
                        _c.sent();
                        return [2, meta.idSeq];
                }
            });
        });
    };
    return DataSourceHelper;
}());
exports.dataSourceHelper = new DataSourceHelper();


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var fns_1 = __webpack_require__(2);
var WsService = (function () {
    function WsService() {
        this.connections = [];
    }
    WsService.prototype.send = function (clientId, data) {
        var connectionItem = this.connections.find(function (c) { return c.clientId == clientId; });
        if (!connectionItem)
            return false;
        connectionItem.connection.sendUTF(JSON.stringify(data));
        return true;
    };
    WsService.prototype.execute = function (connection, payload) {
        if (payload.clientId) {
            this.connections.push({
                connection: connection,
                clientId: payload.clientId
            });
        }
    };
    WsService.prototype.start = function (httpServer) {
        var _this = this;
        var WebSocketServer = fns_1.nodeRequire('websocket').server;
        var wsServer = new WebSocketServer({
            httpServer: httpServer,
            autoAcceptConnections: false
        });
        wsServer.on('request', function (request) {
            var connection = request.accept(null, request.origin);
            connection.on('message', function (message) {
                if (message.type === 'utf8') {
                    var payload = JSON.parse(message.utf8Data);
                    console.log('ws user message', payload);
                    _this.execute(connection, payload);
                }
            });
            connection.on('close', function (connection) {
                var index = _this.connections.findIndex(function (it) { return it.connection === connection; });
                _this.connections.splice(index, 1);
            });
        });
    };
    return WsService;
}());
exports.WsService = WsService;
exports.wsService = new WsService();


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(8);


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
Object.defineProperty(exports, "__esModule", { value: true });
var expressApp_1 = __webpack_require__(9);
var wsService_1 = __webpack_require__(6);
global.process.on('uncaughtException', function (e) {
    console.log(e);
});
var Server = (function () {
    function Server() {
    }
    Server.prototype.start = function () {
        var PORT = 9000;
        console.log('app started at', new Date());
        var expressApp = new expressApp_1.ExpressApp();
        var server = expressApp.getApp().listen(PORT, function () {
            var address = server.address();
            var host = address.address;
            var port = address.port;
            console.log("app listening at http://" + host + ":" + port);
        });
        return server;
    };
    return Server;
}());
var server = new Server();
var httpServer = server.start();
wsService_1.wsService.start(httpServer);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(4)))

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var fs_1 = __webpack_require__(1);
var fns_1 = __webpack_require__(2);
var hbsSettings_1 = __webpack_require__(10);
var all_1 = __webpack_require__(11);
var express = fns_1.nodeRequire('express');
var url = fns_1.nodeRequire('url');
var path = fns_1.nodeRequire('path');
var exphbs = fns_1.nodeRequire('express-handlebars');
var session = fns_1.nodeRequire('express-session');
var bodyParser = fns_1.nodeRequire('body-parser');
var multipart = fns_1.nodeRequire('connect-multiparty')();
var ExpressApp = (function () {
    function ExpressApp() {
        new hbsSettings_1.HbsSettings();
        this.initApp();
        this.setUpControllers();
        this.handleErrors();
    }
    ExpressApp.prototype.initApp = function () {
        var app = express();
        app.set('views', './node-app/mvc/views');
        app.engine('html', exphbs({}));
        app.set('view engine', 'html');
        app.use(session({
            key: 'session_cookie_name',
            secret: 'session_cookie_secret',
            resave: true,
            saveUninitialized: true
        }));
        app.use(express.static('assets'));
        app.use(express.static('workspace'));
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({
            extended: true
        }));
        this.app = app;
    };
    ExpressApp.prototype.getApp = function () {
        return this.app;
    };
    ExpressApp.prototype.setHeader = function (res, responseObj) {
        if (typeof responseObj == 'object')
            res.setHeader('Content-Type', 'application/json');
    };
    ExpressApp.prototype.createResponse = function (opts, response, params) {
        var _this = this;
        var callback = function (result) {
            if (opts.responseType == 'view') {
                result = result || {};
                result.params = params;
                response.render(opts.controllerPath, result);
            }
            else {
                _this.setHeader(response, result);
                response.send(result);
            }
        };
        var codeResult = opts.ctrl[opts.methodName](params, response);
        if (codeResult && codeResult.then) {
            codeResult.then(function (data) {
                callback(data);
            }).catch(function (error) {
                console.error('catch method promise error', error);
                response.statusCode = 500;
                response.end(error);
            });
        }
        else if (typeof codeResult === 'function') {
        }
        else {
            callback(codeResult);
        }
    };
    ExpressApp.prototype.processCommonRequest = function (opts) {
        var _this = this;
        this.app[opts.requestType](opts.pathName + "/" + opts.methodName, function (req, res) {
            opts.methodName = opts.methodName || 'index';
            var params;
            switch (opts.requestType) {
                case 'post':
                    params = req.body;
                    break;
                default:
                    params = url.parse(req.url, true).query;
                    break;
            }
            _this.createResponse(opts, res, params);
        });
        console.log("mapped: " + opts.requestType + ": " + opts.pathName + "/" + opts.methodName);
    };
    ExpressApp.prototype.processMultiPartRequest = function (opts) {
        var _this = this;
        this.app.post(opts.pathName + "/" + opts.methodName, multipart, function (req, res) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var pathToUploadedFile, params, file;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        pathToUploadedFile = req.files && req.files.file && req.files.file.path;
                        params = req.body;
                        return [4, fs_1.default.readFile(pathToUploadedFile, true)];
                    case 1:
                        file = _a.sent();
                        return [4, fs_1.default.deleteFile(pathToUploadedFile)];
                    case 2:
                        _a.sent();
                        params.file = file;
                        if (params.fileName && params.fileName.splice && params.fileName[0]) {
                            params.fileName = params.fileName[0];
                        }
                        this.createResponse(opts, res, params);
                        return [2];
                }
            });
        }); });
        console.log("mapped: " + opts.requestType + ": " + opts.pathName + "/" + opts.methodName);
    };
    ExpressApp.prototype.setUpControllers = function () {
        var _this = this;
        all_1.all.forEach(function (Ctrl) {
            var ctrl = new Ctrl();
            var controllerName = Ctrl.name;
            controllerName = controllerName.replace('Controller', '');
            controllerName = controllerName.substr(0, 1).toLowerCase() + controllerName.substr(1);
            Object.keys(ctrl.meta).forEach(function (methodName) {
                var requestType = ctrl.meta[methodName].requestType;
                var responseType = ctrl.meta[methodName].responseType;
                var pathName = '';
                if (controllerName == 'index') {
                    pathName = '';
                    if (methodName == 'index')
                        methodName = '';
                }
                else
                    pathName = '/' + controllerName;
                var controllerPath = controllerName + "/" + methodName;
                var opts = { ctrl: ctrl, requestType: requestType, responseType: responseType, pathName: pathName, controllerPath: controllerPath, methodName: methodName };
                if (requestType == 'multipart') {
                    _this.processMultiPartRequest(opts);
                }
                else {
                    _this.processCommonRequest(opts);
                }
            });
        });
    };
    ExpressApp.prototype.handleErrors = function () {
        this.app.use(function (err, req, res, next) {
            if (err)
                console.error(err);
            res.status(500).send('error 500: ' + (err.message || err));
        });
    };
    return ExpressApp;
}());
exports.ExpressApp = ExpressApp;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var fns_1 = __webpack_require__(2);
var fs = fns_1.nodeRequire('fs');
var handlebars = fns_1.nodeRequire('handlebars');
var HbsSettings = (function () {
    function HbsSettings() {
        handlebars.registerHelper('json', function (obj) {
            return JSON.stringify(obj);
        });
        handlebars.registerHelper('isEmptyObject', function (obj) {
            return Object.keys(obj).length > 0;
        });
        handlebars.registerHelper('var', function (name, value, context) {
            this[name] = value;
        });
        handlebars.registerHelper('include', function (name, value, context) {
            return fs.readFileSync("./node-app/mvc/views/" + name);
        });
        handlebars.registerHelper('script', function (name, value, context) {
            return "<script onerror=\"onLoadingError()\" type=\"text/javascript\" src=\"" + name + "\"></script>";
        });
    }
    return HbsSettings;
}());
exports.HbsSettings = HbsSettings;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var fileSystemController_1 = __webpack_require__(12);
var indexController_1 = __webpack_require__(13);
var projectController_1 = __webpack_require__(14);
var resourceController_1 = __webpack_require__(18);
exports.all = [
    indexController_1.IndexController,
    fileSystemController_1.FileSystemController,
    projectController_1.ProjectController,
    resourceController_1.ResourceController
];


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var decorators_1 = __webpack_require__(3);
var fs_1 = __webpack_require__(1);
var FileSystemController = (function () {
    function FileSystemController() {
    }
    FileSystemController.prototype.renameFolder = function (params) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, fs_1.default.rename(params.oldName, params.newName)];
                    case 1:
                        _a.sent();
                        return [2, { success: true }];
                }
            });
        });
    };
    FileSystemController.prototype.deleteFolder = function (params) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, fs_1.default.deleteFolder(params.name)];
                    case 1:
                        _a.sent();
                        return [2, { success: true }];
                }
            });
        });
    };
    FileSystemController.prototype.createFile = function (params) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!params.projectName)
                            throw 'project name not specified';
                        return [4, fs_1.default.writeFile("workspace/" + params.projectName + "/" + params.path, params.content)];
                    case 1:
                        _a.sent();
                        return [2, {}];
                }
            });
        });
    };
    FileSystemController.prototype.removeFile = function (params) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!params.projectName)
                            throw 'project name not specified';
                        return [4, fs_1.default.deleteFile("workspace/" + params.projectName + "/" + params.path)];
                    case 1:
                        _a.sent();
                        return [2, { success: true }];
                }
            });
        });
    };
    FileSystemController.prototype.uploadFile = function (params) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, fs_1.default.writeFile("workspace/" + params.projectName + "/" + params.path, params.file, true)];
                    case 1:
                        _a.sent();
                        return [2, { success: true }];
                }
            });
        });
    };
    FileSystemController.prototype.readFile = function (params) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!params.projectName)
                            throw 'project name not specified';
                        return [4, fs_1.default.readFile("workspace/" + params.projectName + "/" + params.path)];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    tslib_1.__decorate([
        decorators_1.Post()
    ], FileSystemController.prototype, "renameFolder", null);
    tslib_1.__decorate([
        decorators_1.Post()
    ], FileSystemController.prototype, "deleteFolder", null);
    tslib_1.__decorate([
        decorators_1.Post()
    ], FileSystemController.prototype, "createFile", null);
    tslib_1.__decorate([
        decorators_1.Post()
    ], FileSystemController.prototype, "removeFile", null);
    tslib_1.__decorate([
        decorators_1.Multipart()
    ], FileSystemController.prototype, "uploadFile", null);
    tslib_1.__decorate([
        decorators_1.Post()
    ], FileSystemController.prototype, "readFile", null);
    return FileSystemController;
}());
exports.FileSystemController = FileSystemController;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var decorators_1 = __webpack_require__(3);
var IndexController = (function () {
    function IndexController() {
    }
    IndexController.prototype.index = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2];
            });
        });
    };
    IndexController.prototype.editor = function () {
    };
    tslib_1.__decorate([
        decorators_1.Get(),
        decorators_1.View()
    ], IndexController.prototype, "index", null);
    tslib_1.__decorate([
        decorators_1.Get(),
        decorators_1.View()
    ], IndexController.prototype, "editor", null);
    return IndexController;
}());
exports.IndexController = IndexController;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var decorators_1 = __webpack_require__(3);
var fs_1 = __webpack_require__(1);
var projectService_1 = __webpack_require__(15);
var ProjectController = (function () {
    function ProjectController() {
    }
    ProjectController.prototype.getAll = function (params) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var list;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, fs_1.default.getDirList('./workspace')];
                    case 1:
                        list = _a.sent();
                        return [2, list.map(function (it) { return ({ name: it }); })];
                }
            });
        });
    };
    ProjectController.prototype.create = function (params) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, projectService_1.projectService.createProject(params.projectName)];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    ProjectController.prototype.exist = function (params) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, projectService_1.projectService.exist(params.projectName)];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    tslib_1.__decorate([
        decorators_1.Get()
    ], ProjectController.prototype, "getAll", null);
    tslib_1.__decorate([
        decorators_1.Post()
    ], ProjectController.prototype, "create", null);
    tslib_1.__decorate([
        decorators_1.Post()
    ], ProjectController.prototype, "exist", null);
    return ProjectController;
}());
exports.ProjectController = ProjectController;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var fs_1 = __webpack_require__(1);
var dataSourceHelper_1 = __webpack_require__(5);
var codeTemplates_1 = __webpack_require__(16);
var consts_1 = __webpack_require__(17);
var ProjectService = (function () {
    function ProjectService() {
    }
    ProjectService.prototype.createProject = function (projectName) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var mainSceneName, mainSceneId, mainLayerId, initialRepoStructure, mainSceneScript;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        mainSceneName = 'mainScene';
                        mainSceneId = 1;
                        mainLayerId = ++mainSceneId;
                        initialRepoStructure = {
                            Scene: [
                                {
                                    id: mainSceneId,
                                    name: mainSceneName,
                                    type: 'Scene',
                                    layers: [
                                        {
                                            type: 'Layer',
                                            id: mainLayerId
                                        }
                                    ],
                                }
                            ],
                            Layer: [
                                {
                                    id: mainLayerId,
                                    name: 'layer1',
                                    type: 'Layer'
                                }
                            ]
                        };
                        return [4, fs_1.default.createFolder("workspace/" + projectName + "/resources")];
                    case 1:
                        _a.sent();
                        return [4, fs_1.default.createFolder("workspace/" + projectName + "/scripts/custom")];
                    case 2:
                        _a.sent();
                        return [4, fs_1.default.createFile("workspace/" + projectName + "/scripts/custom/appLib.js", codeTemplates_1.getLibCodeScript('AppLib'))];
                    case 3:
                        _a.sent();
                        mainSceneScript = codeTemplates_1.getDefaultCodeScript(mainSceneName[0].toUpperCase() + mainSceneName.substr(1));
                        return [4, fs_1.default.createFile("workspace/" + projectName + "/scripts/" + mainSceneName + ".js", mainSceneScript)];
                    case 4:
                        _a.sent();
                        dataSourceHelper_1.dataSourceHelper.saveModel("workspace/" + projectName + "/repository.json", initialRepoStructure);
                        dataSourceHelper_1.dataSourceHelper.saveModel("workspace/" + projectName + "/gameProps.json", {
                            width: 800,
                            height: 600,
                            scaleStrategy: consts_1.SCALE_STRATEGY.FIT,
                            startSceneId: mainSceneId,
                            gravityConstant: 0
                        });
                        dataSourceHelper_1.dataSourceHelper.saveModel("workspace/" + projectName + "/meta.json", { idSeq: mainLayerId });
                        return [2, {}];
                }
            });
        });
    };
    ProjectService.prototype.exist = function (projectName) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, fs_1.default.exists("workspace/" + projectName)];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    return ProjectService;
}());
exports.projectService = new ProjectService();


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getDefaultCodeScript = function (name) {
    return "\n\nexport class " + name + "Behaviour {\n\n    onCreate(){\n\n    }\n\n    onUpdate(){\n\n    }\n\n    onDestroy(){\n\n    }\n\n}\n";
};
exports.getLibCodeScript = function (name) {
    return "\n\nexport class " + name + " {\n\n}";
};


/***/ }),
/* 17 */
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
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var decorators_1 = __webpack_require__(3);
var fs_1 = __webpack_require__(1);
var resourceService_1 = __webpack_require__(19);
var generatorService_1 = __webpack_require__(20);
var dataSourceHelper_1 = __webpack_require__(5);
var ResourceController = (function () {
    function ResourceController() {
    }
    ResourceController.prototype.getAll = function (params) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result, repository, gameProps, _a, _b;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        result = {};
                        return [4, fs_1.default.readFile("workspace/" + params.projectName + "/repository.json")];
                    case 1:
                        repository = _c.sent();
                        return [4, fs_1.default.readFile("workspace/" + params.projectName + "/gameProps.json")];
                    case 2:
                        gameProps = _c.sent();
                        result.repository = JSON.parse(repository);
                        result.gameProps = JSON.parse(gameProps);
                        _a = result;
                        return [4, resourceService_1.resourceService.getCommonBehaviourAttrs(params.projectName)];
                    case 3:
                        _a.commonBehaviourProtos = _c.sent();
                        _b = result;
                        return [4, fs_1.default.readDir("workspace/" + params.projectName + "/scripts/custom/")];
                    case 4:
                        _b.customScripts = (_c.sent()).map(function (it) { return it.name; });
                        return [2, result];
                }
            });
        });
    };
    ResourceController.prototype.save = function (params) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var repository, model, createdId, objectToUpdateIndex;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, dataSourceHelper_1.dataSourceHelper.loadModel("workspace/" + params.projectName + "/repository.json")];
                    case 1:
                        repository = _a.sent();
                        model = params.model;
                        if (!repository[model.type])
                            repository[model.type] = [];
                        if (!!model.id) return [3, 3];
                        return [4, dataSourceHelper_1.dataSourceHelper.uuid(params.projectName)];
                    case 2:
                        createdId = _a.sent();
                        model.id = createdId;
                        repository[model.type].push(model);
                        return [3, 4];
                    case 3:
                        objectToUpdateIndex = repository[model.type].findIndex(function (it) { return it.id == model.id; });
                        if (objectToUpdateIndex == -1)
                            throw "can not find object with type " + model.type + " and id " + model.id;
                        repository[model.type][objectToUpdateIndex] = model;
                        _a.label = 4;
                    case 4:
                        Object.keys(repository).forEach(function (key) {
                            if (repository[key].splice && !repository[key].length)
                                delete repository[key];
                        });
                        return [4, dataSourceHelper_1.dataSourceHelper.saveModel("workspace/" + params.projectName + "/repository.json", repository)];
                    case 5:
                        _a.sent();
                        if (createdId)
                            return [2, { created: true, id: createdId }];
                        return [2, { updated: true }];
                }
            });
        });
    };
    ResourceController.prototype.saveGameProps = function (params) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var path, model;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        path = "workspace/" + params.projectName + "/gameProps.json";
                        return [4, dataSourceHelper_1.dataSourceHelper.loadModel(path)];
                    case 1:
                        model = _a.sent();
                        Object.keys(params.model).forEach(function (key) {
                            model[key] = params.model[key];
                        });
                        return [4, dataSourceHelper_1.dataSourceHelper.saveModel(path, model)];
                    case 2:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    ResourceController.prototype.remove = function (params) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var repository, model, objectToRemoveIndex;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, dataSourceHelper_1.dataSourceHelper.loadModel("workspace/" + params.projectName + "/repository.json")];
                    case 1:
                        repository = _a.sent();
                        model = params.model;
                        objectToRemoveIndex = repository[model.type].findIndex(function (it) { return it.id == model.id; });
                        if (objectToRemoveIndex == -1)
                            throw "can not find object with type " + model.type + " and id " + model.id;
                        repository[model.type].splice(objectToRemoveIndex, 1);
                        return [4, dataSourceHelper_1.dataSourceHelper.saveModel("workspace/" + params.projectName + "/repository.json", repository)];
                    case 2:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    ResourceController.prototype.generate = function (params, response) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, generatorService_1.generatorService.generate(params, response)];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    ResourceController.prototype.saveTile = function (params, callback) {
        return resourceService_1.resourceService.saveTile(params.projectName, params.model);
    };
    tslib_1.__decorate([
        decorators_1.Post()
    ], ResourceController.prototype, "getAll", null);
    tslib_1.__decorate([
        decorators_1.Post()
    ], ResourceController.prototype, "save", null);
    tslib_1.__decorate([
        decorators_1.Post()
    ], ResourceController.prototype, "saveGameProps", null);
    tslib_1.__decorate([
        decorators_1.Post()
    ], ResourceController.prototype, "remove", null);
    tslib_1.__decorate([
        decorators_1.Get()
    ], ResourceController.prototype, "generate", null);
    tslib_1.__decorate([
        decorators_1.Post()
    ], ResourceController.prototype, "saveTile", null);
    return ResourceController;
}());
exports.ResourceController = ResourceController;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var dataSourceHelper_1 = __webpack_require__(5);
var ResourceService = (function () {
    function ResourceService() {
    }
    ResourceService.prototype.getCommonBehaviourAttrs = function (projectName) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!projectName)
                            throw 'project name is not specified';
                        return [4, dataSourceHelper_1.dataSourceHelper.loadModel('client-app/engine/commonBehaviour/impl/desc/desc.json')];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    ResourceService.prototype.saveTile = function (projectName, model) {
    };
    return ResourceService;
}());
exports.resourceService = new ResourceService();


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer, global) {
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var fns_1 = __webpack_require__(2);
var webpack = fns_1.nodeRequire('webpack');
var ProgressPlugin = fns_1.nodeRequire('webpack/lib/ProgressPlugin');
var fs_1 = __webpack_require__(1);
var webpack_config_1 = __webpack_require__(25);
var termToHtml_1 = __webpack_require__(26);
var wsService_1 = __webpack_require__(6);
var GeneratorService = (function () {
    function GeneratorService() {
        this.cnt = 0;
        this.compilerCache = {};
        this.processCache = {};
    }
    GeneratorService._createError = function (params, error) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var content;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!error)
                            error = '';
                        console.log('compiling error', error);
                        return [4, fs_1.default.readFile('./node-app/generator/error.html')];
                    case 1:
                        content = (_a.sent());
                        content = content.replace('${error}', termToHtml_1.termToHtml(error));
                        return [4, fs_1.default.createFile("workspace/" + params.projectName + "/out/index.html", content)];
                    case 2:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    GeneratorService.createCompiler = function (params) {
        var config = webpack_config_1.configFn(params);
        var compiler = webpack(config);
        var lastMsg = '';
        var cb = null;
        compiler.apply(new ProgressPlugin(function (percentage, msg) {
            var m = (~~(percentage * 100)) + '% ' + msg;
            if (lastMsg !== m) {
                lastMsg = m;
                if (cb)
                    cb(m);
            }
        }));
        return {
            nativeCompiler: compiler,
            onProgress: function (fn) {
                cb = fn;
            }
        };
    };
    GeneratorService.prototype.getCompiler = function (params) {
        return GeneratorService.createCompiler(params);
    };
    GeneratorService.prototype.clearFolders = function (params) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('clear folders');
                        return [4, fs_1.default.deleteFolder("workspace/" + params.projectName + "/generated/")];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    GeneratorService.prototype.createFolders = function (params) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('creating folders');
                        return [4, fs_1.default.createFolder("workspace/" + params.projectName + "/out/")];
                    case 1:
                        _a.sent();
                        return [4, fs_1.default.createFolder("workspace/" + params.projectName + "/generated/src/engine")];
                    case 2:
                        _a.sent();
                        return [4, fs_1.default.createFolder("workspace/" + params.projectName + "/generated/src/app")];
                    case 3:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    GeneratorService.prototype.generateData = function (params) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var allScripts, allScriptCode, repository, _a, _b, gameProps, _c, _d, embeddedResources;
            return tslib_1.__generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        console.log('generating data', params);
                        return [4, fs_1.default.copyFolder("client-app/engine", "workspace/" + params.projectName + "/generated/src/")];
                    case 1:
                        _e.sent();
                        return [4, fs_1.default.copyFolder("workspace/" + params.projectName + "/scripts", "workspace/" + params.projectName + "/generated/src/app/")];
                    case 2:
                        _e.sent();
                        return [4, fs_1.default.readDir("workspace/" + params.projectName + "/scripts", undefined, false)];
                    case 3:
                        allScripts = (_e.sent()).map(function (it) { return it.name.split('.')[0]; });
                        allScriptCode = '';
                        allScripts.forEach(function (scriptName) {
                            allScriptCode += "export {" + scriptName[0].toUpperCase() + scriptName.substr(1) + "Behaviour} from './" + scriptName + "'\n";
                        });
                        allScriptCode = allScriptCode.split('  ').join('');
                        return [4, fs_1.default.createFile("workspace/" + params.projectName + "/generated/src/app/scripts/allScripts.js", allScriptCode)];
                    case 4:
                        _e.sent();
                        _b = (_a = JSON).parse;
                        return [4, fs_1.default.readFile("./workspace/" + params.projectName + "/repository.json")];
                    case 5:
                        repository = _b.apply(_a, [_e.sent()]);
                        _d = (_c = JSON).parse;
                        return [4, fs_1.default.readFile("./workspace/" + params.projectName + "/gameProps.json")];
                    case 6:
                        gameProps = _d.apply(_c, [_e.sent()]);
                        return [4, fs_1.default.createFile("./workspace/" + params.projectName + "/generated/src/app/repository.ts", "export let repository:any = \n\t" + JSON.stringify(repository, null, 4) + ";")];
                    case 7:
                        _e.sent();
                        return [4, fs_1.default.createFile("./workspace/" + params.projectName + "/generated/src/app/gameProps.ts", "export let gameProps:any = \n\t" + JSON.stringify(gameProps, null, 4) + ";")];
                    case 8:
                        _e.sent();
                        return [4, fs_1.default.copyFile('node-app/generator/index.tpl', "workspace/" + params.projectName + "/generated/src/index.ts")];
                    case 9:
                        _e.sent();
                        embeddedResources = {};
                        if (!!params.embedResources) return [3, 11];
                        return [4, fs_1.default.copyFolder("workspace/" + params.projectName + "/resources/", "workspace/" + params.projectName + "/out/")];
                    case 10:
                        _e.sent();
                        return [3, 13];
                    case 11: return [4, fs_1.default.readDir("workspace/" + params.projectName + "/resources", 'binary')];
                    case 12:
                        (_e.sent()).forEach(function (file) {
                            embeddedResources["resources/" + file.name] = "data:image/" + file.ext + ";base64," + new Buffer(file.content).toString('base64');
                        });
                        _e.label = 13;
                    case 13: return [4, fs_1.default.createFile("./workspace/" + params.projectName + "/generated/src/app/embeddedResources.ts", "export let embeddedResources:any = \n\t" + JSON.stringify(embeddedResources, null, 4) + ";")];
                    case 14:
                        _e.sent();
                        return [2];
                }
            });
        });
    };
    GeneratorService.prototype.compile = function (params, response) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                return [2, new Promise(function (resolve, reject) {
                        console.log('compiling');
                        var compiler = _this.getCompiler(params);
                        response.setHeader('Content-Type', 'text/html');
                        compiler.onProgress(function (msg) {
                            global.process.stdout.write("\r                                                             ");
                            global.process.stdout.write("\r" + msg);
                            wsService_1.wsService.send(params.clientId, { message: msg, success: true });
                        });
                        compiler.nativeCompiler.run(function (err, data) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                            var errorMsg, indexHtml, debugJs, appBundleJs;
                            return tslib_1.__generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (!err) return [3, 2];
                                        console.error('compiler run error: ', err);
                                        return [4, GeneratorService._createError(params, err)];
                                    case 1:
                                        _a.sent();
                                        response.end();
                                        reject(err);
                                        return [3, 10];
                                    case 2:
                                        if (!(data.compilation && data.compilation.errors && data.compilation.errors[0])) return [3, 3];
                                        console.error("compiled with " + data.compilation.errors.length + " error(s)");
                                        errorMsg = data.compilation.errors.map(function (err) {
                                            var msg = (err.details || err.message || err.toString());
                                            if (err.file)
                                                msg += "\n\t at file " + err.file;
                                            else if (err.module && err.module && err.module.resource)
                                                msg += "\n\t at file " + err.module.resource;
                                            return msg;
                                        }).join('\n\t---------\t\n');
                                        response.end();
                                        reject(errorMsg);
                                        return [3, 10];
                                    case 3:
                                        console.log('creating index.html');
                                        return [4, fs_1.default.readFile('./node-app/generator/index.html')];
                                    case 4:
                                        indexHtml = _a.sent();
                                        debugJs = '';
                                        if (!params.debug) return [3, 6];
                                        return [4, fs_1.default.readFile("./workspace/" + params.projectName + "/generated/tmp/debug.js")];
                                    case 5:
                                        debugJs = (_a.sent());
                                        _a.label = 6;
                                    case 6:
                                        indexHtml = indexHtml.replace('${debug}', params.debug ? "<script>" + debugJs + "</script>" : '');
                                        indexHtml = indexHtml.replace('${hash}', (this.cnt++).toString());
                                        indexHtml = indexHtml.replace('${projectName}', params.projectName);
                                        return [4, fs_1.default.createFile("workspace/" + params.projectName + "/out/index.html", indexHtml)];
                                    case 7:
                                        _a.sent();
                                        console.log('creating bundle');
                                        return [4, fs_1.default.readFile("./workspace/" + params.projectName + "/generated/tmp/bundle.js")];
                                    case 8:
                                        appBundleJs = _a.sent();
                                        return [4, fs_1.default.createFile("workspace/" + params.projectName + "/out/bundle.js", appBundleJs)];
                                    case 9:
                                        _a.sent();
                                        response.end();
                                        resolve();
                                        _a.label = 10;
                                    case 10: return [2];
                                }
                            });
                        }); });
                    })];
            });
        });
    };
    GeneratorService.prototype.generate = function (params, response) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var message, e_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('cache', this.processCache);
                        if (this.processCache[params.projectName]) {
                            message = "generation of " + params.projectName + " already started";
                            console.error('generator error', message);
                            return [2];
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 6, , 8]);
                        this.processCache[params.projectName] = true;
                        return [4, this.clearFolders(params)];
                    case 2:
                        _a.sent();
                        return [4, this.createFolders(params)];
                    case 3:
                        _a.sent();
                        return [4, this.generateData(params)];
                    case 4:
                        _a.sent();
                        return [4, this.compile(params, response)];
                    case 5:
                        _a.sent();
                        delete this.processCache[params.projectName];
                        return [3, 8];
                    case 6:
                        e_1 = _a.sent();
                        delete this.processCache[params.projectName];
                        console.error('generator error', e_1);
                        return [4, GeneratorService._createError(params, e_1.toString())];
                    case 7:
                        _a.sent();
                        response.write("error<br>");
                        response.end();
                        return [3, 8];
                    case 8: return [2];
                }
            });
        });
    };
    return GeneratorService;
}());
exports.generatorService = new GeneratorService();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(21).Buffer, __webpack_require__(4)))

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(22)
var ieee754 = __webpack_require__(23)
var isArray = __webpack_require__(24)

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(4)))

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  for (var i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(
      uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)
    ))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),
/* 23 */
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var fns_1 = __webpack_require__(2);
var path = fns_1.nodeRequire('path');
var webpack = fns_1.nodeRequire('webpack');
var HardSourceWebpackPlugin = fns_1.nodeRequire('hard-source-webpack-plugin');
exports.configFn = function (params) {
    var config = {
        entry: {
            bundle: "./workspace/" + params.projectName + "/generated/src/index.ts",
            debug: ['./client-app/debug/debug.ts', './client-app/debug/devConsole.ts']
        },
        output: {
            path: path.resolve("./workspace/" + params.projectName + "/generated/tmp"),
            filename: '[name].js'
        },
        mode: 'production',
        resolveLoader: {
            modules: ['node_modules', 'node_tools/loaders']
        },
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    loader: "awesome-typescript-loader",
                    options: {
                        configFileName: "./node-app/generator/tsconfig.json"
                    }
                },
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: "babel-loader",
                    query: {
                        presets: ['es2015'],
                        plugins: []
                    }
                },
                {
                    test: /\.(frag|vert)$/,
                    loader: 'text-loader',
                    options: {
                        minimize: true
                    }
                },
            ]
        },
        resolve: {
            extensions: ['.js', '.ts'],
            modules: [
                path.resolve('node_modules')
            ]
        },
        optimization: {
            minimize: !!params.minify
        },
        plugins: [
            new webpack.DefinePlugin({
                BUILD_AT: new Date().getTime(),
                IN_EDITOR: false,
                DEBUG: !!params.debug,
                PROJECT_NAME: params.projectName,
                EMBED_RESOURCES: !!params.embedResources
            }),
        ],
    };
    return config;
};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var defaultColors = ['#000', '#D00', '#00CF12', '#C2CB00', '#3100CA',
    '#E100C6', '#00CBCB', '#C7C7C7', '#686868', '#FF5959', '#00FF6B',
    '#FAFF5C', '#775AFF', '#FF47FE', '#0FF', '#FFF'];
exports.termToHtml = function (text, options) {
    options = options || {};
    var colors = options.colors || defaultColors;
    text = text.replace(/^.*\u001B\[[12]K/mg, '');
    text = text.replace(/^(.*)\u001B\[(\d+)G/mg, function (_, text, n) {
        return text.slice(0, n);
    });
    var state = {
        bg: -1,
        fg: -1,
        bold: false,
        underline: false,
        negative: false
    };
    text = text.replace(/\u001B\[([\d;]+)m([^\u001B]+)/g, function (_, n, text) {
        n.split(';').forEach(function (code) {
            code = code | 0;
            if (code === 0) {
                state.bg = -1;
                state.fg = -1;
                state.bold = false;
                state.underline = false;
                state.negative = false;
            }
            else if (code === 1) {
                state.bold = true;
            }
            else if (code === 4) {
                state.underline = true;
            }
            else if (code === 7) {
                state.negative = true;
            }
            else if (code === 21) {
                state.bold = false;
            }
            else if (code === 24) {
                state.underline = false;
            }
            else if (code === 27) {
                state.negative = false;
            }
            else if (code >= 30 && code <= 37) {
                state.fg = code - 30;
            }
            else if (code === 39) {
                state.fg = -1;
            }
            else if (code >= 40 && code <= 47) {
                state.bg = code - 40;
            }
            else if (code === 49) {
                state.bg = -1;
            }
            else if (code >= 90 && code <= 97) {
                state.fg = code - 90 + 8;
            }
            else if (code >= 100 && code <= 107) {
                state.bg = code - 100 + 8;
            }
        });
        var bold = +(state.bold) * 8;
        var fg, bg;
        if (state.negative) {
            fg = state.bg | bold;
            bg = state.fg;
        }
        else {
            fg = state.fg | bold;
            bg = state.bg;
        }
        fg = colors[fg] || '';
        bg = colors[bg] || '';
        var style = '';
        if (bg) {
            style += 'background-color:' + bg + ';';
        }
        if (fg) {
            style += 'color:' + fg + ';';
        }
        if (bold) {
            style += 'font-weight:bold;';
        }
        if (state.underline) {
            style += 'text-decoration:underline';
        }
        var html = text.
            replace(/&/g, '&amp;').
            replace(/</g, '&lt;').
            replace(/>/g, '&gt;');
        if (style) {
            return '<span style="' + style + '">' + html + '</span>';
        }
        else {
            return html;
        }
    });
    return text.replace(/\u001B\[.*?[A-Za-z]/g, '');
};


/***/ })
/******/ ]);