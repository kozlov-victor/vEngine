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
/******/ 	return __webpack_require__(__webpack_require__.s = 184);
/******/ })
/************************************************************************/
/******/ ({

/***/ 184:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getPopupContainer = function () {
    if (!(document && document.getElementById))
        return null;
    var container = document.getElementById('popupContainer');
    if (container)
        return container;
    container = document.createElement('div');
    container.id = 'popupContainer';
    container.style.cssText =
        'position:absolute;' +
            'bottom:10px;' +
            'right:10px;' +
            'z-index:10000;' +
            'width:300px;' +
            'max-height:' + window.innerHeight + 'px;' +
            'overflow-y:auto';
    document.body.appendChild(container);
    return container;
};
var _prepareMessage = function (e, lineNum) {
    var msg;
    if (typeof e === 'string') {
        msg = e;
    }
    else
        msg = e.message || e.reason;
    if (!msg) {
        if (e.target) {
            ['img', 'audio', 'link'].some(function (it) {
                if (e.target.tagName && e.target.tagName.toLowerCase() === it) {
                    msg = 'can not load ' + it + ' with location ' + (e.target.src || e.target.href);
                    return true;
                }
            });
        }
    }
    if (!msg)
        msg = '';
    if (msg.indexOf('Uncaught') === 0)
        msg = msg.replace('Uncaught', '').trim();
    if (!msg) {
        console.error(e);
        msg = 'Unknown error: ' + e.toString();
    }
    if (lineNum)
        msg += ' in line ' + lineNum;
    return msg;
};
var _showErrToConsole = function (e, lineNum) {
    console.log(_prepareMessage(e, lineNum));
};
var _showErrorToDom = function (el, e, lineNum) {
    el.textContent = _prepareMessage(e, lineNum);
};
var lastErr = '';
window['showError'] = function _err(e, lineNum) {
    window['game'] && window['game'].destroy();
    if (navigator.isCocoonJS) {
        _showErrToConsole(e, lineNum);
        return;
    }
    if (document.body) {
        if (lastErr.toString() === (e && e.toString())) {
            return;
        }
        lastErr = e;
        var popup_1 = document.createElement('div');
        popup_1.style.cssText =
            'background-color:rgba(255,255,255,0.95);' +
                'color:red;' +
                'margin-bottom:5px;' +
                'border:1px solid red;';
        var leftBox = document.createElement('div');
        leftBox.style.cssText = 'width:90%;display:inline-block;';
        leftBox.style.cssText = 'width:90%;display:inline-block;';
        var rightBox = document.createElement('div');
        rightBox.style.cssText = 'width:10%;display:inline-block;cursor:pointer;text-align:right;vertical-align:top;';
        rightBox.textContent = 'x';
        rightBox.ontouchstart = rightBox.onclick = function () {
            popup_1.remove();
        };
        _showErrorToDom(leftBox, e, lineNum);
        popup_1.appendChild(leftBox);
        popup_1.appendChild(rightBox);
        var popupContainer = getPopupContainer();
        if (popupContainer) {
            popupContainer.appendChild(popup_1);
        }
        else {
            _showErrToConsole(e, lineNum);
        }
    }
    else {
        setTimeout(function () {
            _err(e, lineNum);
        }, 100);
    }
};
window.addEventListener('error', function (e) {
    console.error(e);
    window['showError'](e, e['linenum']);
}, true);
window.addEventListener('unhandledrejection', function (e) {
    console.error(e);
    window['showError'](e, e['linenum']);
});


/***/ })

/******/ });