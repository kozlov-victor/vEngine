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
/******/ 	return __webpack_require__(__webpack_require__.s = 24);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _commonObject = __webpack_require__(2);

var _commonObject2 = _interopRequireDefault(_commonObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BaseModel = function (_CommonObject) {
    _inherits(BaseModel, _CommonObject);

    function BaseModel(game) {
        _classCallCheck(this, BaseModel);

        var _this = _possibleConstructorReturn(this, (BaseModel.__proto__ || Object.getPrototypeOf(BaseModel)).call(this));

        if (!game) throw 'can not create model \'' + _this.constructor.name + '\': game instance not passed to model constructor';
        _this._game = game;
        _this.id = null;
        _this.type = _this.constructor.name;
        _this.name = null;
        return _this;
    }

    _createClass(BaseModel, [{
        key: 'revalidate',
        value: function revalidate() {}
    }, {
        key: 'clone',
        value: function clone() {
            var Clazz = this.constructor;
            var obj = new Clazz(this._game);
            obj._cloner = this;
            return obj.fromJSON(this.toJSON(), true);
        }
    }, {
        key: 'updateCloner',
        value: function updateCloner() {
            var cloner = this._cloner;
            if (!cloner) return;
            cloner.fromJSON(this.toJSON());
            cloner.updateCloner();
            delete this._cloner;
        }
    }]);

    return BaseModel;
}(_commonObject2.default);

exports.default = BaseModel;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Vec2 = __webpack_require__(12);

exports.isPointInRect = function (point, rect, angle) {
    if (angle) {
        var vec2 = new Vec2(point.x - rect.x - rect.width / 2, point.y - rect.y - rect.height / 2);
        vec2.setAngle(vec2.getAngle() - angle);
        point = { x: vec2.getX() + point.x, y: vec2.getY() + point.y };
    }
    var res = point.x > rect.x && point.x < rect.x + rect.width && point.y > rect.y && point.y < rect.y + rect.height;
    return res;
};

exports.isRectIntersectRect = function (r1, r2) {
    return !(r2.x > r1.x + r1.width || r2.x + r2.width < r1.x || r2.y > r1.y + r1.height || r2.y + r2.height < r1.y);
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

exports.getNormalizedVectorFromPoints = function (pointA, pointB) {
    var angle = Math.atan2(pointB.y - pointA.y, pointB.x - pointA.x);
    return {
        x: Math.cos(angle),
        y: Math.sin(angle)
    };
};

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

// cubic easing in - accelerating from zero velocity
ease.easeInCubic = function (t, b, c, d) {
    t /= d;
    return c * t * t * t + b;
};

// cubic easing out - decelerating to zero velocity
ease.easeOutCubic = function (t, b, c, d) {
    t /= d;
    t--;
    return c * (t * t * t + 1) + b;
};

// cubic easing in/out - acceleration until halfway, then deceleration
ease.easeInOutCubic = function (t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t * t + b;
    t -= 2;
    return c / 2 * (t * t * t + 2) + b;
};

// quartic easing in - accelerating from zero velocity
ease.easeInQuart = function (t, b, c, d) {
    t /= d;
    return c * t * t * t * t + b;
};

// quartic easing out - decelerating to zero velocity
ease.easeOutQuart = function (t, b, c, d) {
    t /= d;
    t--;
    return -c * (t * t * t * t - 1) + b;
};

// quartic easing in/out - acceleration until halfway, then deceleration
ease.easeInOutQuart = function (t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t * t * t + b;
    t -= 2;
    return -c / 2 * (t * t * t * t - 2) + b;
};

// quintic easing in - accelerating from zero velocity
ease.easeInQuint = function (t, b, c, d) {
    t /= d;
    return c * t * t * t * t * t + b;
};

// quintic easing out - decelerating to zero velocity
ease.easeOutQuint = function (t, b, c, d) {
    t /= d;
    t--;
    return c * (t * t * t * t * t + 1) + b;
};

// quintic easing in/out - acceleration until halfway, then deceleration
ease.easeInOutQuint = function (t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t * t * t * t + b;
    t -= 2;
    return c / 2 * (t * t * t * t * t + 2) + b;
};

// sinusoidal easing in - accelerating from zero velocity
ease.easeInSine = function (t, b, c, d) {
    return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
};

// sinusoidal easing out - decelerating to zero velocity
ease.easeOutSine = function (t, b, c, d) {
    return c * Math.sin(t / d * (Math.PI / 2)) + b;
};

// sinusoidal easing in/out - accelerating until halfway, then decelerating
ease.easeInOutSine = function (t, b, c, d) {
    return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
};

// exponential easing in - accelerating from zero velocity
ease.easeInExpo = function (t, b, c, d) {
    return c * Math.pow(2, 10 * (t / d - 1)) + b;
};

// exponential easing out - decelerating to zero velocity
ease.easeOutExpo = function (t, b, c, d) {
    return c * (-Math.pow(2, -10 * t / d) + 1) + b;
};

// exponential easing in/out - accelerating until halfway, then decelerating
ease.easeInOutExpo = function (t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
    t--;
    return c / 2 * (-Math.pow(2, -10 * t) + 2) + b;
};

// circular easing in - accelerating from zero velocity
ease.easeInCirc = function (t, b, c, d) {
    t /= d;
    return -c * (Math.sqrt(1 - t * t) - 1) + b;
};

// circular easing out - decelerating to zero velocity
ease.easeOutCirc = function (t, b, c, d) {
    t /= d;
    t--;
    return c * Math.sqrt(1 - t * t) + b;
};

// circular easing in/out - acceleration until halfway, then deceleration
ease.easeInOutCirc = function (t, b, c, d) {
    t /= d / 2;
    if (t < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
    t -= 2;
    return c / 2 * (Math.sqrt(1 - t * t) + 1) + b;
};

ease.easeInElastic = function (t, b, c, d) {
    var s = 1.70158;var p = 0;var a = c;
    if (t == 0) return b;if ((t /= d) == 1) return b + c;if (!p) p = d * .3;
    if (a < Math.abs(c)) {
        a = c;s = p / 4;
    } else s = p / (2 * Math.PI) * Math.asin(c / a);
    return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
};

ease.easeOutElastic = function (t, b, c, d) {
    var s = 1.70158;var p = 0;var a = c;
    if (t == 0) return b;if ((t /= d) == 1) return b + c;if (!p) p = d * .3;
    if (a < Math.abs(c)) {
        a = c;s = p / 4;
    } else s = p / (2 * Math.PI) * Math.asin(c / a);
    return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
};

ease.easeInOutElastic = function (t, b, c, d) {
    var s = 1.70158;var p = 0;var a = c;
    if (t == 0) return b;if ((t /= d / 2) == 2) return b + c;if (!p) p = d * (.3 * 1.5);
    if (a < Math.abs(c)) {
        a = c;s = p / 4;
    } else s = p / (2 * Math.PI) * Math.asin(c / a);
    if (t < 1) return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
    return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;
};

ease.easeInBack = function (t, b, c, d) {
    var s = 1.70158;
    return c * (t /= d) * t * ((s + 1) * t - s) + b;
};

ease.easeOutBack = function (t, b, c, d) {
    var s = 1.70158;
    return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
};

ease.easeInOutBack = function (t, b, c, d) {
    var s = 1.70158;
    if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= 1.525) + 1) * t - s)) + b;
    return c / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b;
};

ease.easeInBounce = function (t, b, c, d) {
    return c - ease.easeOutBounce(d - t, 0, c, d) + b;
};

ease.easeOutBounce = function (t, b, c, d) {
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

ease.easeInOutBounce = function (t, b, c, d) {
    if (t < d / 2) return ease.easeInBounce(t * 2, 0, c, d) * .5 + b;else return ease.easeOutBounce(t * 2 - d, 0, c, d) * .5 + c * .5 + b;
};

exports.ease = ease;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var isPropNotFit = function isPropNotFit(key, val) {
    if (!key) return true;
    if (key.indexOf('_') == 0) return true;
    if (val && val.call) return true;
    if (typeof val == 'string') return false;
    if (typeof val == 'number') return false;
    if (typeof val == 'boolean') return false;
    if (!val) return true;
};

var isPrimitive = function isPrimitive(val) {
    return typeof val === 'string' || typeof val === 'number';
};

var deepCopy = function deepCopy(obj) {
    var _clonedObjects = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

    if (obj === undefined) return undefined;
    if (typeof obj === 'function') return undefined;else if (obj === null) return null;else if (typeof window !== 'undefined' && obj === window) return undefined;else if (_clonedObjects.indexOf(obj) > -1) return obj;
    if (Object.prototype.toString.call(obj) === '[object Array]') {
        var out = [],
            i = 0,
            len = obj.length;
        for (; i < len; i++) {
            var clonedObject = void 0;
            if (_clonedObjects.indexOf(obj[i]) > -1) {
                clonedObject = obj[i];
            } else {
                _clonedObjects.push(obj[i]);
                clonedObject = deepCopy(obj[i], _clonedObjects);
            }
            out[i] = clonedObject;
        }
        return out;
    }
    if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object') {
        var _out = {};
        for (var _i in obj) {
            if (_i.indexOf('_') == 0) return;
            var _clonedObject = void 0;
            if (_clonedObjects.indexOf(obj[_i]) > -1) {
                _clonedObject = obj[_i];
            } else {
                _clonedObjects.push(obj[_i]);
                _clonedObject = deepCopy(obj[_i], _clonedObjects);
            }
            _out[_i] = _clonedObject;
        }
        return _out;
    }
    return obj;
};

var CommonObject = function () {
    function CommonObject() {
        _classCallCheck(this, CommonObject);
    }

    _createClass(CommonObject, [{
        key: 'fromJSON',
        value: function fromJSON() {
            var _this = this;

            var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var forceNew = arguments[1];

            Object.keys(params).forEach(function (key) {
                if (key === 'type') return;
                if (key in _this) _this[key] = params[key];else {
                    console.error(_this);
                    throw '::fromJSON(): class ' + _this.constructor.name + ' has no property ' + key;
                }
                if (!_this[key]) return;
                if (params[key].id && params[key].type) _this[key] = _this._game._repository.getObject(params[key].id, params[key].type, forceNew);else if (params[key].splice) {
                    var arr = _this[key];
                    _this[key] = [];
                    arr.forEach(function (item, i) {
                        if (item && item.type && item.id) {
                            _this[key].push(_this._game._repository.getObject(item.id, item.type, forceNew));
                        } else {
                            if (isPrimitive(item)) _this[key].push(item);
                        }
                    });
                }
            });
            this.revalidate();
            return this;
        }
    }, {
        key: 'toJSON',
        value: function toJSON() {
            var _this2 = this;

            var res = {};
            for (var key in this) {

                if (isPropNotFit(key, this[key])) {
                    continue;
                }
                if (this[key].type && this[key].id) {
                    // is model
                    res[key] = {
                        id: this[key].id,
                        type: this[key].type
                    };
                } else if (this[key] && this[key].splice) {
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
                } else res[key] = deepCopy(this[key]);
            }
            return res;
        }
    }]);

    return CommonObject;
}();

exports.default = CommonObject;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _baseModel = __webpack_require__(0);

var _baseModel2 = _interopRequireDefault(_baseModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GameObjectProto = function (_BaseModel) {
    _inherits(GameObjectProto, _BaseModel);

    _createClass(GameObjectProto, null, [{
        key: 'find',
        value: function find(name) {
            //return game.getCurrScene()._allGameObjects.find({name:name});
        }
    }, {
        key: 'findAll',
        value: function findAll(name) {
            //return game.getCurrScene()._allGameObjects.findAll({name: name});
        }
    }]);

    function GameObjectProto(game) {
        _classCallCheck(this, GameObjectProto);

        var _this = _possibleConstructorReturn(this, (GameObjectProto.__proto__ || Object.getPrototypeOf(GameObjectProto)).call(this, game));

        _this.width = 0;
        _this.height = 0;
        _this.spriteSheet = null;
        _this.scale = { x: 1, y: 1 };
        _this.vel = { x: 0, y: 0 };
        _this.pos = { x: 0, y: 0 };
        _this.angle = 0;
        _this.alpha = 1;
        _this.rigid = false;
        _this._behaviour = null;
        _this.commonBehaviour = [];
        _this.currFrameIndex = 0;
        _this._sprPosX = 0;
        _this._sprPosY = 0;
        _this.frameAnimations = [];
        _this._currFrameAnimation = null;
        _this._timeCreated = null;
        _this.tileOffset = { x: 0, y: 0 };
        _this.tileRepeat = false;
        _this.groupName = '';
        return _this;
    }

    _createClass(GameObjectProto, [{
        key: 'revalidate',
        value: function revalidate() {
            var _this2 = this;

            this.setFrameIndex(this.currFrameIndex);
            if (this.spriteSheet) {
                this.width = this.spriteSheet._frameWidth;
                this.height = this.spriteSheet._frameHeight;
            }
            this.frameAnimations.forEach(function (f, i) {
                _this2.frameAnimations[i] = _this2.frameAnimations[i].clone();
                _this2.frameAnimations[i]._gameObject = _this2;
            });
        }
    }, {
        key: 'playFrameAnimation',
        value: function playFrameAnimation(animationName) {
            var fr = this.frameAnimations.find(function (it) {
                return it.name === animationName;
            });
            fr._gameObject = this;
            this._currFrameAnimation = fr;
            fr.play();
        }
    }, {
        key: 'setFrameIndex',
        value: function setFrameIndex(index) {
            this.currFrameIndex = index;
            this._sprPosX = this.spriteSheet.getFramePosX(this.currFrameIndex);
            this._sprPosY = this.spriteSheet.getFramePosY(this.currFrameIndex);
        }
    }, {
        key: 'update',
        value: function update(time, delta) {
            // this._super(time,delta);
            this._currFrameAnimation && this._currFrameAnimation.update(time);
            if (this._individualBehaviour) this._individualBehaviour.onUpdate();
            this.render();
        }
    }, {
        key: 'onShow',
        value: function onShow() {
            if (this._individualBehaviour) this._individualBehaviour.onCreate();
        }
    }, {
        key: 'stopFrAnimations',
        value: function stopFrAnimations() {
            this._currFrameAnimation && this._currFrameAnimation.stop();
        }
    }, {
        key: 'render',
        value: function render() {
            this._game._renderer.draw(this);
        }
    }]);

    return GameObjectProto;
}(_baseModel2.default);

exports.default = GameObjectProto;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _game = __webpack_require__(5);

var _game2 = _interopRequireDefault(_game);

var _allScripts = __webpack_require__(23);

var allScripts = _interopRequireWildcard(_allScripts);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var gameProps = {"width":"320","height":"240","scaleStrategy":0,"preloadingSceneId":"","startSceneId":"5174_6841_3"};
if (!gameProps.startSceneId) throw 'start scene not specified';

var game = new _game2.default({"width":"320","height":"240","scaleStrategy":0,"preloadingSceneId":"","startSceneId":"5174_6841_3"});
game._repository.setDescriptions({"SpriteSheet":[{"type":"SpriteSheet","name":"anim","width":300,"height":50,"numOfFramesH":"8","numOfFramesV":1,"resourcePath":"resources/anim.svg","id":"3370_0164_0"},{"type":"SpriteSheet","name":"daemon","width":"360","height":1080,"numOfFramesH":"5","numOfFramesV":"14","resourcePath":"resources/daemon.png","id":"3655_0289_1"}],"GameObjectProto":[{"id":"8041_7184_2","type":"GameObjectProto","name":"anim","width":37,"height":50,"spriteSheet":{"id":"3370_0164_0","type":"SpriteSheet"},"scale":{"x":1,"y":1},"vel":{"x":0,"y":0},"pos":{"x":0,"y":0},"angle":0,"alpha":1,"rigid":false,"commonBehaviour":[],"currFrameIndex":0,"frameAnimations":[{"type":"FrameAnimation","id":"6290_4723_4"}],"tileOffset":{"x":0,"y":0},"tileRepeat":false,"groupName":""}],"Scene":[{"id":"5174_6841_3","type":"Scene","name":"scene1","alpha":1,"layers":[{"type":"Layer","id":"8662_4418_6"}],"useBG":false,"colorBG":{"r":255,"g":255,"b":255}}],"FrameAnimation":[{"id":"6290_4723_4","type":"FrameAnimation","name":"walk","frames":[0,1,2,3,4,5,6,7],"duration":1000}],"Layer":[{"type":"Layer","name":"l1","gameObjects":[],"id":"3996_6520_5"},{"id":"8662_4418_6","type":"Layer","name":"l1","gameObjects":[{"type":"GameObject","id":"8032_1783_7"},{"type":"GameObject","id":"7375_6197_0"},{"type":"GameObject","id":"7323_9296_1"}]}],"GameObject":[{"id":"8032_1783_7","type":"GameObject","name":"anim","width":37,"height":50,"spriteSheet":{"id":"3370_0164_0","type":"SpriteSheet"},"scale":{"x":1,"y":1},"vel":{"x":0,"y":0},"pos":{"x":6,"y":85},"angle":0,"alpha":1,"rigid":false,"commonBehaviour":[],"currFrameIndex":0,"frameAnimations":[{"type":"FrameAnimation","id":"6290_4723_4"}],"tileOffset":{"x":0,"y":0},"tileRepeat":false,"groupName":"","layerId":"8662_4418_6"},{"id":"7375_6197_0","type":"GameObject","name":"anim","width":37,"height":50,"spriteSheet":{"id":"3370_0164_0","type":"SpriteSheet"},"scale":{"x":1,"y":1},"vel":{"x":0,"y":0},"pos":{"x":4,"y":8},"angle":0,"alpha":1,"rigid":false,"commonBehaviour":[],"currFrameIndex":0,"frameAnimations":[{"type":"FrameAnimation","id":"6290_4723_4"}],"tileOffset":{"x":0,"y":0},"tileRepeat":false,"groupName":"","layerId":"8662_4418_6"},{"id":"7323_9296_1","type":"GameObject","name":"anim","width":37,"height":50,"spriteSheet":{"id":"3370_0164_0","type":"SpriteSheet"},"scale":{"x":1,"y":1},"vel":{"x":0,"y":0},"pos":{"x":4,"y":162},"angle":0,"alpha":1,"rigid":false,"commonBehaviour":[],"currFrameIndex":0,"frameAnimations":[{"type":"FrameAnimation","id":"6290_4723_4"}],"tileOffset":{"x":0,"y":0},"tileRepeat":false,"groupName":"","layerId":"8662_4418_6"}],"ParticleSystem":[{"id":"7752_2138_2","type":"ParticleSystem","name":"ps1","gameObjectProto":{"id":"8041_7184_2","type":"GameObjectProto"},"numOfParticlesToEmit":{"from":1,"to":10},"particleAngle":{"from":1.15,"to":5.51},"particleVelocity":{"from":1,"to":100},"particleLiveTime":{"from":100,"to":1000},"emissionRadius":0}]});

game._repository.getArray('Scene').forEach(function (s) {
   // s.layers.forEach(l=>{
   //    l.gameObjects.forEach(g=>{
   //       g.setIndividualBehaviour(
   //           allScripts[`${g.name[0].toUpperCase()}${g.name.substr(1)}Behaviour`]
   //       );
   //    });
   // });
});
var startScene = game._repository.getObject(gameProps.startSceneId, 'Scene');
startScene.layers.forEach(function (l) {
   l.gameObjects.forEach(function (g) {
      var scriptName = '' + g.name[0].toUpperCase() + g.name.substr(1) + 'Behaviour';
      var bh = allScripts[scriptName];
      if (!bh) throw 'can not found behaviour class with name ' + scriptName;
      g.setIndividualBehaviour(bh);
   });
});
game.runScene(startScene);

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rendererFactory = __webpack_require__(10);

var _rendererFactory2 = _interopRequireDefault(_rendererFactory);

var _repository = __webpack_require__(11);

var _repository2 = _interopRequireDefault(_repository);

var _commonObject = __webpack_require__(2);

var _commonObject2 = _interopRequireDefault(_commonObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Game = function (_CommonObject) {
    _inherits(Game, _CommonObject);

    function Game(gameProps) {
        _classCallCheck(this, Game);

        var _this = _possibleConstructorReturn(this, (Game.__proto__ || Object.getPrototypeOf(Game)).call(this));

        Object.keys(gameProps).forEach(function (key) {
            _this[key] = gameProps[key];
        });
        _this._currentScene = null;
        var time = Date.now();
        _this._lastTime = time;
        _this._currTime = time;
        _this._running = false;
        _this._repository = new _repository2.default(_this);
        _this._renderer = _rendererFactory2.default.getRenderer(_this);
        return _this;
    }

    _createClass(Game, [{
        key: 'runScene',
        value: function runScene(scene) {
            var _this2 = this;

            scene.preload(function () {
                _this2._currentScene = scene;
                _this2._currentScene.onShow();
                if (!_this2._running) {
                    Game.update(_this2);
                    _this2._running = true;
                }
            });
        }
    }], [{
        key: 'update',
        value: function update(self) {
            if (window.canceled) return;
            requestAnimationFrame(function () {
                Game.update(self);
            });
            self._lastTime = self._currTime;
            self._currTime = Date.now();
            var deltaTime = self._currTime - self._lastTime;

            self._currentScene && self._currentScene.update(self._currTime, deltaTime);
        }
    }]);

    return Game;
}(_commonObject2.default);

exports.default = Game;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Queue = function () {
    function Queue() {
        _classCallCheck(this, Queue);

        this.tasksResolved = 0;
        this.tasks = [];
        this.tasksProgressById = {};
        this.tasts = [];
        this.onResolved = null;
        this.onProgress = null;
    }

    _createClass(Queue, [{
        key: "size",
        value: function size() {
            return this.tasks.length;
        }
    }, {
        key: "calcProgress",
        value: function calcProgress() {
            var sum = 0;
            Object.keys(this.tasksProgressById).forEach(function (taskId) {
                sum += this.tasksProgressById[taskId] || 0;
            });
            return sum / this.tasks.length;
        }
    }, {
        key: "addTask",
        value: function addTask(taskFn, taskId) {
            this.tasks.push(taskFn);
            this.tasksProgressById[taskId] = 0;
        }
    }, {
        key: "progressTask",
        value: function progressTask(taskId, progress) {
            this.tasksProgressById[taskId] = progress;
            this.onProgress && this.onProgress(this.calcProgress());
        }
    }, {
        key: "resolveTask",
        value: function resolveTask(taskId) {
            this.tasksResolved++;
            this.tasksProgressById[taskId] = 1;
            if (this.tasks.length == this.tasksResolved) {
                this.onProgress && this.onProgress(1);
                if (this.onResolved) this.onResolved();
            } else {
                this.onProgress && this.onProgress(this.calcProgress());
            }
        }
    }, {
        key: "start",
        value: function start() {
            if (this.size() == 0) this.onResolved();
            this.tasks.forEach(function (t) {
                t && t();
            });
        }
    }]);

    return Queue;
}();

exports.default = Queue;
;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AbstractRenderer = function () {
    function AbstractRenderer(game) {
        _classCallCheck(this, AbstractRenderer);

        this.game = game;
        this.renderableCache = {};
    }

    _createClass(AbstractRenderer, [{
        key: "loadTextureInfo",
        value: function loadTextureInfo(textureId, info) {}
    }, {
        key: "getTextureInfo",
        value: function getTextureInfo(textureId) {}
    }]);

    return AbstractRenderer;
}();

exports.default = AbstractRenderer;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _abstractRenderer = __webpack_require__(7);

var _abstractRenderer2 = _interopRequireDefault(_abstractRenderer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractDomRenderer = function (_AbstractRenderer) {
    _inherits(AbstractDomRenderer, _AbstractRenderer);

    function AbstractDomRenderer(game) {
        _classCallCheck(this, AbstractDomRenderer);

        var _this = _possibleConstructorReturn(this, (AbstractDomRenderer.__proto__ || Object.getPrototypeOf(AbstractDomRenderer)).call(this, game));

        var container = document.createElement('div');
        document.body.appendChild(container);
        container.style.position = 'relative';
        container.style.width = game.width + 'px';
        container.style.height = game.height + 'px';
        container.style.margin = '0 auto';
        _this.container = container;
        return _this;
    }

    _createClass(AbstractDomRenderer, [{
        key: 'setPropertyIfChanged',
        value: function setPropertyIfChanged(el) {
            var p1 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            var p2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
            var field = arguments[3];
            var fn = arguments[4];

            if (field && p1[field] == p2[field]) return;
            if (field) {
                p1[field] = p2[field];
            }
            var newProps = fn(field && p2[field], p2);
            var _k = void 0;
            Object.keys(newProps).forEach(function (k) {
                _k = k;
            });
            if (!field) {
                field = _k;
                if (p1[field] && p1[field] == p2[field]) return;
                p1[field] = p2[field] = newProps[_k];
            }
            this.setNodeAttribute(el, _k, newProps[_k]);
            console.log(newProps);
        }
    }, {
        key: 'setPropertiesIfChanged',
        value: function setPropertiesIfChanged(el, arr) {
            var _this2 = this;

            arr.forEach(function (p) {
                _this2.setPropertyIfChanged(el, p[0], p[1], p[2], p[3]);
            });
        }
    }]);

    return AbstractDomRenderer;
}(_abstractRenderer2.default);

exports.default = AbstractDomRenderer;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _abstractDomRender = __webpack_require__(8);

var _abstractDomRender2 = _interopRequireDefault(_abstractDomRender);

var _mathEx = __webpack_require__(1);

var _mathEx2 = _interopRequireDefault(_mathEx);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SvgRenderer = function (_AbstractDomRenderer) {
    _inherits(SvgRenderer, _AbstractDomRenderer);

    function SvgRenderer(game) {
        _classCallCheck(this, SvgRenderer);

        return _possibleConstructorReturn(this, (SvgRenderer.__proto__ || Object.getPrototypeOf(SvgRenderer)).call(this, game));
    }

    _createClass(SvgRenderer, [{
        key: 'setNodeAttribute',
        value: function setNodeAttribute(el, name, value) {
            el.setAttribute(name, value);
        }
    }, {
        key: 'draw',
        value: function draw(renderable) {
            var item = void 0;
            if (!this.renderableCache[renderable.id]) {
                item = {};
                this.renderableCache[renderable.id] = item;
                var domEl = this.renderableCache[renderable.spriteSheet.resourcePath].cloneNode(true);
                domEl.style.position = 'absolute';
                this.container.appendChild(domEl);
                item.state = { pos: {}, spriteSheet: {} };
                item.domEl = domEl;
            } else item = this.renderableCache[renderable.id];

            var state = item.state;
            this.setPropertiesIfChanged(item.domEl, [
            //[state.pos,renderable.pos,'x',v=>{return {left:`${v}`}}],
            //[state.pos,renderable.pos,'y',v=>{return {top:`${v}`}}],
            [state, renderable, 'width', function (v, obj) {
                return { width: v + 'px' };
            }], [state, renderable, 'height', function (v, obj) {
                return { height: v + 'px' };
            }], [state, renderable, undefined, function (v, obj) {
                return {
                    viewBox: '\n                        ' + obj._sprPosX / obj.spriteSheet._frameWidth + ' \n                        ' + obj._sprPosY / obj.spriteSheet._frameHeight + ' \n                        ' + obj.spriteSheet._frameWidth + '\n                        ' + obj.spriteSheet._frameHeight + '\n                    '
                };
            }]]
            // [state.spriteSheet,renderable.spriteSheet,'resourcePath',v=>{return {backgroundImage:`url(${v})`}}],
            // [state,renderable,'_sprPosX',v=>{return {backgroundPositionX:`-${v}px`}}],
            // [state,renderable,'_sprPosY',v=>{return {backgroundPositionY:`-${v}px`}}],
            // [state,renderable,'alpha',v=>{return {opacity:`${v}`}}],
            // [state,renderable,undefined,(v,obj)=>{return {backgroundSize:`${obj.spriteSheet.numOfFramesH*obj.width}px ${obj.spriteSheet.numOfFramesV*obj.height}px`}}],
            // [state,renderable,undefined,(v,obj)=>{return {transform:`scale(${obj.scale.x},${obj.scale.y}) rotateZ(${mathEx.radToDeg(obj.angle)}deg)`}}]
            );
        }
    }, {
        key: 'loadTextureInfo',
        value: function loadTextureInfo(resourcePath, onLoad) {
            var _this2 = this;

            setTimeout(function () {
                var resDomId = resourcePath.split(/[/.]/).join('_');
                var svgEmbeddedInDom = document.getElementById(resDomId);
                if (!svgEmbeddedInDom) throw 'not found embedded svg with id ' + resDomId + '_svg';
                _this2.renderableCache[resourcePath] = svgEmbeddedInDom.querySelector('svg').cloneNode(true);
                svgEmbeddedInDom.parentNode.removeChild(svgEmbeddedInDom);
                onLoad();
            }, 0);
        }
    }]);

    return SvgRenderer;
}(_abstractDomRender2.default);

exports.default = SvgRenderer;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
//import HtmlRenderer from '../renderer/dom/htmlRenderer'


var _svgRenderer = __webpack_require__(9);

var _svgRenderer2 = _interopRequireDefault(_svgRenderer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RendererFactory = function () {
    function RendererFactory() {
        _classCallCheck(this, RendererFactory);
    }

    _createClass(RendererFactory, null, [{
        key: 'getRenderer',
        value: function getRenderer(game) {
            if (!game) throw 'RendererFactory::getRenderer: game param not specified';
            return new _svgRenderer2.default(game);
        }
    }]);

    return RendererFactory;
}();

exports.default = RendererFactory;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _all = __webpack_require__(13);

var models = _interopRequireWildcard(_all);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Repository = function () {
    function Repository(game) {
        _classCallCheck(this, Repository);

        this._game = game;
        this.reset();
    }

    _createClass(Repository, [{
        key: "addDescription",
        value: function addDescription(desc) {
            if (!this.descriptions[desc.type]) this.descriptions[desc.type] = [];
            this.descriptions[desc.type].push(desc);
        }
    }, {
        key: "setDescriptions",
        value: function setDescriptions(descs) {
            var _this = this;

            Object.keys(descs).forEach(function (key) {
                if (!_this.descriptions[key]) _this.descriptions[key] = [];
                _this.descriptions[key] = _this.descriptions[key].concat(descs[key]);
            });
        }
    }, {
        key: "getObject",
        value: function getObject(id, type) {
            var forceNew = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

            if (id == null) {
                console.trace("id is null");
                throw "::getObject() id not specified for type " + type;
            }
            var clazz = models[type];
            if (!clazz) {
                throw "::getObject() unknown object type " + type;
            }
            if (!this.descriptions[type]) throw "no repository description for type " + type;
            var desc = this.descriptions[type].find(function (it) {
                return it.id == id;
            });
            if (!desc) {
                throw "can not find object \"" + type + "\" with id " + id;
            }
            if (forceNew || !this.cache[desc[id]]) this.cache[id] = new clazz(this._game).fromJSON(desc);
            return this.cache[id];
        }
    }, {
        key: "addObject",
        value: function addObject(obj) {
            if (!this.arrays[obj.type]) this.arrays[obj.type] = [];
            this.arrays[obj.type].push(obj);
            if (!this.descriptions[obj.type]) this.descriptions[obj.type] = [];
            this.descriptions[obj.type].push(obj.toJSON());
        }
    }, {
        key: "updateObject",
        value: function updateObject(obj) {
            var json = obj.toJSON();
            var index = this.descriptions[obj.type].findIndex(function (it) {
                return it.id == obj.id;
            });
            this.descriptions[obj.type][index] = json;

            var objInRepo = this.getObject(obj.id, obj.type, true);
            if (objInRepo) objInRepo.fromJSON(json);
        }
    }, {
        key: "removeObject",
        value: function removeObject(obj) {
            if (!this.arrays[obj.type]) this.arrays[obj.type] = [];
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
        }
    }, {
        key: "getArray",
        value: function getArray(type) {
            var _this2 = this;

            if (this.arrays[type]) return this.arrays[type];
            var res = [];
            if (!this.descriptions[type]) this.descriptions[type] = [];
            this.descriptions[type].forEach(function (desc) {
                if (desc.id === null || desc.id === undefined) {
                    console.error(desc);
                    throw "object id must me specified";
                }
                res.push(_this2.getObject(desc.id, desc.type));
            });
            return this.arrays[type] = res;
        }
    }, {
        key: "reset",
        value: function reset() {
            this.descriptions = {};
            this.arrays = {};
            this.cache = {};
        }
    }]);

    return Repository;
}();

exports.default = Repository;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Vec2 = function Vec2(_x, _y) {

    var x = _x || 0;
    var y = _y || 0;
    var angle = 0;
    var norm = 0;

    var onXY_Changed = function onXY_Changed() {
        angle = x == 0 ? 0 : Math.atan(y / x);
        norm = Math.sqrt(x * x + y * y);
    };

    var onAngleChanged = function onAngleChanged() {
        y = Math.sin(angle) * norm;
        x = Math.cos(angle) * norm;
    };

    var onNormChanged = function onNormChanged() {
        y = Math.sin(angle) * norm;
        x = Math.cos(angle) * norm;
    };

    this.setXY = function (_x, _y) {
        x = _x;
        y = _y;
        onXY_Changed();
    };

    this.setX = function (_x) {
        x = _x;
        onXY_Changed();
    };

    this.setY = function (_y) {
        y = _y;
        onXY_Changed();
    };

    this.setAngle = function (a) {
        angle = a;
        onAngleChanged();
    };

    this.setNorm = function (l) {
        // length
        norm = l;
        onNormChanged();
    };

    this.getXY = function () {
        return { x: x, y: y };
    };

    this.getX = function () {
        return x;
    };

    this.getY = function () {
        return y;
    };

    this.getAngle = function () {
        return angle;
    };

    this.addVec2 = function (v) {
        return new Vec2(x + v.getX(), y + v.getY);
    };

    this.multiplyByScalar = function (sc) {
        return new Vec2(x * sc, y * sc);
    };

    this.dotProduct = function (v) {
        // inner product, скалярное произведение
        return x * v.getX() + y * v.getY();
    };

    this.getNorm = function () {
        return norm;
    };

    (function () {
        onXY_Changed();
    })();
};

module.exports = Vec2;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Layer = exports.Font = exports.Sound = exports.Scene = exports.ParticleSystem = exports.CommonBehaviour = exports.GameObject = exports.GameObjectProto = exports.SpriteSheet = exports.FrameAnimation = undefined;

var _frameAnimation = __webpack_require__(16);

var _frameAnimation2 = _interopRequireDefault(_frameAnimation);

var _spriteSheet = __webpack_require__(22);

var _spriteSheet2 = _interopRequireDefault(_spriteSheet);

var _gameObjectProto = __webpack_require__(3);

var _gameObjectProto2 = _interopRequireDefault(_gameObjectProto);

var _gameObject = __webpack_require__(17);

var _gameObject2 = _interopRequireDefault(_gameObject);

var _commonBehaviour = __webpack_require__(14);

var _commonBehaviour2 = _interopRequireDefault(_commonBehaviour);

var _particleSystem = __webpack_require__(19);

var _particleSystem2 = _interopRequireDefault(_particleSystem);

var _scene = __webpack_require__(20);

var _scene2 = _interopRequireDefault(_scene);

var _sound = __webpack_require__(21);

var _sound2 = _interopRequireDefault(_sound);

var _font = __webpack_require__(15);

var _font2 = _interopRequireDefault(_font);

var _layer = __webpack_require__(18);

var _layer2 = _interopRequireDefault(_layer);

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

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

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

        var _this = _possibleConstructorReturn(this, (CommonBehaviour.__proto__ || Object.getPrototypeOf(CommonBehaviour)).call(this, game));

        _this.parameters = [];
        _this.description = null;
        return _this;
    }

    return CommonBehaviour;
}(_baseModel2.default);

exports.default = CommonBehaviour;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

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

        var _this = _possibleConstructorReturn(this, (Font.__proto__ || Object.getPrototypeOf(Font)).call(this, game));

        _this.fontSize = 12;
        _this.fontColor = null;
        _this.fontFamily = 'Monospace';
        _this.fontContext = null;
        _this.fontColor = { r: 0, g: 0, b: 0 };
        return _this;
    }

    return Font;
}(_baseModel2.default);

exports.default = Font;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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

        var _this = _possibleConstructorReturn(this, (FrameAnimation.__proto__ || Object.getPrototypeOf(FrameAnimation)).call(this, game));

        _this._currFrame = 0;
        _this.frames = [];
        _this.duration = 1000;
        _this._gameObject = null;
        _this._startTime = null;
        return _this;
    }

    _createClass(FrameAnimation, [{
        key: 'revalidate',
        value: function revalidate() {
            this._timeForOneFrame = ~~(this.duration / this.frames.length);
        }
    }, {
        key: 'play',
        value: function play() {
            this._gameObject._currFrameAnimation = this;
        }
    }, {
        key: 'stop',
        value: function stop() {
            this._gameObject._currFrameAnimation = null;
            this._startTime = null;
        }
    }, {
        key: 'update',
        value: function update(time) {
            if (!this._startTime) this._startTime = time;
            var delta = (time - this._startTime) % this.duration;
            this._currFrame = ~~(this.frames.length * delta / this.duration);
            var lastFrIndex = this._gameObject.currFrameIndex;
            if (lastFrIndex != this.frames[this._currFrame]) {
                this._gameObject.setFrameIndex(this.frames[this._currFrame]);
            }
        }
    }, {
        key: 'nextFrame',
        value: function nextFrame() {
            var ind = this._currFrame;
            ind++;
            if (ind == this.frames.length) ind = 0;
            this._gameObject.setFrameIndex(this.frames[ind]);
            this._currFrame = ind;
        }
    }, {
        key: 'previousFrame',
        value: function previousFrame() {
            var ind = this._currFrame;
            ind--;
            if (ind < 0) ind = this.frames.length - 1;
            this._gameObject.setFrameIndex(this.frames[ind]);
            this._currFrame = ind;
        }
    }]);

    return FrameAnimation;
}(_baseModel2.default);

exports.default = FrameAnimation;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _gameObjectProto = __webpack_require__(3);

var _gameObjectProto2 = _interopRequireDefault(_gameObjectProto);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GameObject = function (_GameObjectProto) {
    _inherits(GameObject, _GameObjectProto);

    function GameObject(game) {
        _classCallCheck(this, GameObject);

        var _this = _possibleConstructorReturn(this, (GameObject.__proto__ || Object.getPrototypeOf(GameObject)).call(this, game));

        _this.layerId = null;
        return _this;
    }

    _createClass(GameObject, [{
        key: 'setIndividualBehaviour',
        value: function setIndividualBehaviour(clazz) {
            var instance = new clazz();
            instance.game = this._game;
            instance.object = this;
            this._individualBehaviour = instance;
        }
    }]);

    return GameObject;
}(_gameObjectProto2.default);

exports.default = GameObject;
;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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

        var _this = _possibleConstructorReturn(this, (Layer.__proto__ || Object.getPrototypeOf(Layer)).call(this, game));

        _this.gameObjects = [];
        return _this;
    }

    _createClass(Layer, [{
        key: 'addGameObject',
        value: function addGameObject(go) {
            go._layer = this;
            this.gameObjects.push(go);
        }
    }, {
        key: 'getAllSpriteSheets',
        value: function getAllSpriteSheets() {
            var dataSet = [];
            this.gameObjects.forEach(function (obj) {
                obj.spriteSheet && !dataSet.find(function (it) {
                    return obj.id === it.id;
                }) && dataSet.push(obj.spriteSheet);
            });
            return dataSet;
        }
    }, {
        key: 'onShow',
        value: function onShow() {
            this.gameObjects.forEach(function (g) {
                g.onShow();
            });
        }
    }, {
        key: 'update',
        value: function update(currTime, deltaTime) {
            var all = this.gameObjects;
            var i = all.length;
            var l = i - 1;
            while (i--) {
                var obj = all[l - i];
                obj && obj.update(currTime, deltaTime);
            }
        }
    }]);

    return Layer;
}(_baseModel2.default);

exports.default = Layer;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _baseModel = __webpack_require__(0);

var _baseModel2 = _interopRequireDefault(_baseModel);

var _mathEx = __webpack_require__(1);

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

        var _this = _possibleConstructorReturn(this, (ParticleSystem.__proto__ || Object.getPrototypeOf(ParticleSystem)).call(this, game));

        _this.gameObjectProto = null;
        _this._particles = [];
        _this.numOfParticlesToEmit = { from: 1, to: 10 };
        _this.particleAngle = { from: 0, to: 0 };
        _this.particleVelocity = { from: 1, to: 100 };
        _this.particleLiveTime = { from: 100, to: 1000 };
        _this.emissionRadius = 0;
        return _this;
    }

    _createClass(ParticleSystem, [{
        key: 'revalidate',
        value: function revalidate() {
            if (this.particleAngle.to < this.particleAngle.from) this.particleAngle.to += 2 * Math.PI;
        }
    }, {
        key: 'emit',
        value: function emit(x, y) {
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
        }
    }, {
        key: 'update',
        value: function update(time, delta) {
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
        }
    }], [{
        key: 'find',
        value: function find(name) {
            //return bundle.particleSystemList.find({name:name});
        }
    }, {
        key: 'findAll',
        value: function findAll(name) {
            //return bundle.particleSystemList.findAll({name:name});
        }
    }]);

    return ParticleSystem;
}(_baseModel2.default);

exports.default = ParticleSystem;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _baseModel = __webpack_require__(0);

var _baseModel2 = _interopRequireDefault(_baseModel);

var _loadingQueue = __webpack_require__(6);

var _loadingQueue2 = _interopRequireDefault(_loadingQueue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Scene = function (_BaseModel) {
    _inherits(Scene, _BaseModel);

    function Scene(game) {
        _classCallCheck(this, Scene);

        var _this = _possibleConstructorReturn(this, (Scene.__proto__ || Object.getPrototypeOf(Scene)).call(this, game));

        _this.alpha = 1;
        _this.layers = [];
        _this.useBG = false;
        _this.colorBG = { r: 255, g: 255, b: 255 };
        _this._tweenMovies = [];
        _this.tileMap = {
            _spriteSheet: null,
            spriteSheetId: null,
            width: 0,
            height: 0,
            data: []
        };

        // if (!this.tileMap) {
        //     if (this.tileMap.spriteSheetId) {
        //         this.tileMap._spriteSheet = bundle.spriteSheetList.find({id: this.tileMap.spriteSheetId});
        //         if (!this.tileMap._spriteSheet) return;
        //         this.tileMap._tilesInScreenX = ~~(bundle.gameProps.width / this.tileMap._spriteSheet._frameWidth);
        //         this.tileMap._tilesInScreenY = ~~(bundle.gameProps.height / this.tileMap._spriteSheet._frameHeight);
        //     }
        // }
        return _this;
    }

    _createClass(Scene, [{
        key: 'addTweenMovie',
        value: function addTweenMovie(tm) {
            this._tweenMovies.push(tm);
        }
    }, {
        key: 'getAllSpriteSheets',
        value: function getAllSpriteSheets() {
            var dataSet = {};
            this.layers.forEach(function (l) {
                l.getAllSpriteSheets().forEach(function (s) {
                    dataSet[s.id] = s;
                });
            });
            // if (this.tileMap && this.tileMap.spriteSheet) {
            //     dataSet.add(this.tileMap._spriteSheet);
            // }
            return Object.keys(dataSet).map(function (key) {
                return dataSet[key];
            });
        }
    }, {
        key: 'preload',
        value: function preload(cb) {
            var _this2 = this;

            var resources = this.getAllSpriteSheets();
            var q = new _loadingQueue2.default();
            q.onResolved = function () {
                cb && cb();
            };
            resources.forEach(function (res) {
                q.addTask(function () {
                    _this2._game._renderer.loadTextureInfo(res.resourcePath, function () {
                        return q.resolveTask(res.id);
                    });
                }, res.id);
            });
            q.start();
        }
    }, {
        key: 'onShow',
        value: function onShow() {
            this.layers.forEach(function (l) {
                l.onShow();
            });
        }
    }, {
        key: 'update',
        value: function update(currTime, deltaTime) {
            this._render();
            var layers = this.layers;
            var i = this.layers.length;
            var l = i - 1;
            while (i--) {
                layers[i - l].update(currTime, deltaTime);
            }
            // this._tweenMovies.forEach(function(tweenMovie){
            //     if (tweenMovie.completed) {
            //         this._tweenMovies.remove(tweenMovie);
            //     }
            //     tweenMovie._update(currTime);
            // });
            // this.__updateIndividualBehaviour__(currTime);
        }
    }, {
        key: 'fadeIn',
        value: function fadeIn(time, easeFnName) {
            return this.tween(this, { to: { alpha: 1 } }, time, easeFnName);
        }
    }, {
        key: 'fadeOut',
        value: function fadeOut(time, easeFnName) {
            return this.tween(this, { to: { alpha: 0 } }, time, easeFnName);
        }
    }, {
        key: 'tween',
        value: function tween(obj, fromToVal, tweenTime, easeFnName) {
            var movie = new tweenMovieModule.TweenMovie();
            var tween = new tweenModule.Tween(obj, fromToVal, tweenTime, easeFnName);
            movie.tween(0, tween);
            movie.play();
        }
    }, {
        key: '_render',
        value: function _render() {
            // let spriteSheet = this.tileMap._spriteSheet;
            // if (!spriteSheet) return;
            // let ctx = renderer.getContext();
            // let tilePosX = ~~(camera.pos.x / this.tileMap._spriteSheet._frameWidth);
            // let tilePosY = ~~(camera.pos.y / this.tileMap._spriteSheet._frameHeight);
            // let w = tilePosX + this.tileMap._tilesInScreenX + 2;
            // let h = tilePosY + this.tileMap._tilesInScreenY + 2;
            // for (let y=tilePosY;y<h;y++) {
            //     for (let x=tilePosX;x<w;x++) {
            //         let index = this.tileMap.data[y] && this.tileMap.data[y][x];
            //         if (index==undefined) continue;
            //         ctx.drawImage(
            //             resourceCache.get(spriteSheet.resourcePath),
            //             spriteSheet.getFramePosX(index),
            //             spriteSheet.getFramePosY(index),
            //             spriteSheet._frameWidth,
            //             spriteSheet._frameHeight,
            //             x*spriteSheet._frameWidth,
            //             y*spriteSheet._frameHeight
            //         );
            //     }
            // }
        }
    }, {
        key: 'getTileAt',
        value: function getTileAt(x, y) {
            if (!this.tileMap._spriteSheet) return null;
            var tilePosX = ~~(x / this.tileMap._spriteSheet._frameWidth);
            var tilePosY = ~~(y / this.tileMap._spriteSheet._frameHeight);
            return this.tileMap.data[tilePosY] && this.tileMap.data[tilePosY][tilePosX];
        }
    }, {
        key: 'printText',
        value: function printText(x, y, text, font) {
            if (!text) return;
            if (!text.substring) text = JSON.stringify(text, null, 4);
            this.game.renderer.printText(x, y, text, font);
        }
    }, {
        key: 'log',
        value: function log(text) {
            this.printText(0, 0, text);
        }
    }]);

    return Scene;
}(_baseModel2.default);

exports.default = Scene;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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

        var _this = _possibleConstructorReturn(this, (Sound.__proto__ || Object.getPrototypeOf(Sound)).call(this, game));

        _this.resourcePath = '';

        _this._gain = 1;
        _this._loop = false;
        return _this;
    }

    _createClass(Sound, [{
        key: 'play',
        value: function play() {
            //audioPlayer.play(this);
        }
    }, {
        key: 'stop',
        value: function stop() {
            //audioPlayer.stop(this);
        }
    }, {
        key: 'pause',
        value: function pause() {
            throw 'not implemented';
        }
    }, {
        key: 'setGain',
        value: function setGain(val, time, easeFnName) {
            //audioPlayer.setGain(this,val,time,easeFnName);
        }
    }], [{
        key: 'find',
        value: function find(name) {
            // let res = bundle.soundList.find({name:name});
            // //<code>{{#if opts.minify}}
            // if (!res) throw `can not found sound with name ${name}`;
            // // {{/if}}
            // return res;
        }
    }]);

    return Sound;
}(_baseModel2.default);

exports.default = Sound;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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

        var _this = _possibleConstructorReturn(this, (SpriteSheet.__proto__ || Object.getPrototypeOf(SpriteSheet)).call(this, game));

        _this.width = 0;
        _this.height = 0;
        _this.numOfFramesH = 1;
        _this.numOfFramesV = 1;
        _this._frameWidth = 0;
        _this._frameHeight = 0;
        _this._numOfFrames = 0;
        _this._textureInfo = null;
        _this.resourcePath = '';
        return _this;
    }

    _createClass(SpriteSheet, [{
        key: 'revalidate',
        value: function revalidate() {
            if (!(this.numOfFramesH && this.numOfFramesV)) return;
            this._frameWidth = ~~(this.width / this.numOfFramesH);
            this._frameHeight = ~~(this.height / this.numOfFramesV);
            this._numOfFrames = this.numOfFramesH * this.numOfFramesV;
        }
    }, {
        key: 'getFramePosX',
        value: function getFramePosX(frameIndex) {
            return frameIndex % this.numOfFramesH * this._frameWidth;
        }
    }, {
        key: 'getFramePosY',
        value: function getFramePosY(frameIndex) {
            return ~~(frameIndex / this.numOfFramesH) * this._frameHeight;
        }
    }]);

    return SpriteSheet;
}(_baseModel2.default);

exports.default = SpriteSheet;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AnimBehaviour = exports.AnimBehaviour = function () {
    function AnimBehaviour() {
        _classCallCheck(this, AnimBehaviour);
    }

    _createClass(AnimBehaviour, [{
        key: 'onCreate',
        value: function onCreate() {
            this.object.playFrameAnimation('walk');
            this.vel = Math.random() * 4;
        }
    }, {
        key: 'onUpdate',
        value: function onUpdate() {
            //this.object.pos.x+=this.vel;
            //if (this.object.pos.x>this.game.width) this.object.pos.x = -10;
        }
    }, {
        key: 'onDestroy',
        value: function onDestroy() {}
    }]);

    return AnimBehaviour;
}();

var Scene1Behaviour = exports.Scene1Behaviour = function () {
    function Scene1Behaviour() {
        _classCallCheck(this, Scene1Behaviour);
    }

    _createClass(Scene1Behaviour, [{
        key: 'onCreate',
        value: function onCreate() {}
    }, {
        key: 'onUpdate',
        value: function onUpdate() {}
    }, {
        key: 'onDestroy',
        value: function onDestroy() {}
    }]);

    return Scene1Behaviour;
}();

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(4);


/***/ })
/******/ ]);