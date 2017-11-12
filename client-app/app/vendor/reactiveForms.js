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
/******/ 	return __webpack_require__(__webpack_require__.s = 18);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _miscUtils = __webpack_require__(1);

var _miscUtils2 = _interopRequireDefault(_miscUtils);

var _domUtils = __webpack_require__(2);

var _domUtils2 = _interopRequireDefault(_domUtils);

var _expressionEngine = __webpack_require__(6);

var _expressionEngine2 = _interopRequireDefault(_expressionEngine);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _miscUtils = __webpack_require__(1);

var _miscUtils2 = _interopRequireDefault(_miscUtils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _miscUtils = __webpack_require__(1);

var _miscUtils2 = _interopRequireDefault(_miscUtils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _component = __webpack_require__(0);

var _component2 = _interopRequireDefault(_component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _lexer = __webpack_require__(9);

var _lexer2 = _interopRequireDefault(_lexer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
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

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Directive = function Directive() {
    _classCallCheck(this, Directive);

    this.name = null;
    this.onMount = null;
};

exports['default'] = Directive;


Directive.all = [];

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _token = __webpack_require__(10);

var _token2 = _interopRequireDefault(_token);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _domUtils = __webpack_require__(2);

var _domUtils2 = _interopRequireDefault(_domUtils);

var _component = __webpack_require__(0);

var _component2 = _interopRequireDefault(_component);

var _componentProto = __webpack_require__(3);

var _componentProto2 = _interopRequireDefault(_componentProto);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

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

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

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

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(7);


/***/ })
/******/ ]);