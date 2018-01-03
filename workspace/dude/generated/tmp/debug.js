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
/******/ 	return __webpack_require__(__webpack_require__.s = 85);
/******/ })
/************************************************************************/
/******/ ({

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getPopupContainer = function getPopupContainer() {
    if (!(document && document.getElementById)) return null;
    var container = document.getElementById('popupContainer');
    if (container) return container;
    container = document.createElement('div');
    container.id = 'popupContainer';
    container.style.cssText = 'position:absolute;' + 'bottom:10px;' + 'right:10px;' + 'z-index:10000;' + 'width:300px;' + 'max-height:' + window.innerHeight + 'px;' + 'overflow-y:auto';
    document.body.appendChild(container);
    return container;
};
var _prepareMessage = function _prepareMessage(e, lineNum) {
    var msg = void 0;
    if (typeof e === 'string') {
        msg = e;
    } else msg = e.message;
    if (!msg) {
        if (e.target) {
            ['img', 'audio', 'link'].some(function (it) {
                if (e.target.tagName.toLowerCase() === it) {
                    msg = 'can not load ' + it + ' with location ' + (e.target.src || e.target.href);
                    return true;
                }
            });
        }
    }
    if (!msg) msg = '';
    if (msg.indexOf('Uncaught') === 0) msg = msg.replace('Uncaught', '').trim();
    if (!msg) {
        console.error(e);
        msg = 'Unknown error: ' + e.toString();
    }
    if (lineNum) msg += ' in line ' + lineNum;
    return msg;
};

var _showErrToConsole = function _showErrToConsole(e, lineNum) {
    console.log(_prepareMessage(e, lineNum));
};

var _showErrorToDom = function _showErrorToDom(el, e, lineNum) {
    el.textContent = _prepareMessage(e, lineNum);
};

var lastErr = '';
window.showError = function _err(e, lineNum) {
    window.game && window.game.destroy();
    if (navigator.isCocoonJS) {
        _showErrToConsole(e, lineNum);
        return;
    }
    if (document.body) {
        if (lastErr.toString() === (e && e.toString())) {
            return;
        }
        lastErr = e;
        var popup = document.createElement('div');
        popup.style.cssText = 'background-color:rgba(255,255,255,0.95);' + 'color:red;' + 'margin-bottom:5px;' + 'border:1px solid red;';
        var leftBox = document.createElement('div');
        leftBox.style.cssText = 'width:90%;display:inline-block;';
        leftBox.style.cssText = 'width:90%;display:inline-block;';
        var rightBox = document.createElement('div');
        rightBox.style.cssText = 'width:10%;display:inline-block;cursor:pointer;text-align:right;vertical-align:top;';
        rightBox.textContent = 'x';
        rightBox.ontouchstart = rightBox.onclick = function () {
            popup.remove();
        };
        _showErrorToDom(leftBox, e, lineNum);
        popup.appendChild(leftBox);
        popup.appendChild(rightBox);
        var popupContainer = getPopupContainer();
        if (popupContainer) {
            popupContainer.appendChild(popup);
        } else {
            _showErrToConsole(e, lineNum);
        }
    } else {
        setTimeout(function () {
            _err(e, lineNum);
        }, 100);
    }
};

window.addEventListener('error', function (e, url, lineNum) {
    console.error(e);
    if (!lineNum) lineNum = e.lineno;
    window.showError(e, lineNum);
}, true);

/***/ }),

/***/ 28:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _httpClient = __webpack_require__(32);

var _httpClient2 = _interopRequireDefault(_httpClient);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var devConsole = document.createElement('div');
var css = {
    position: 'absolute',
    right: 0,
    top: 0,
    'background-color': 'black',
    'min-width': '20px',
    'min-height': '20px',
    opacity: 0.5
};
Object.keys(css).forEach(function (key) {
    return devConsole.style.setProperty(key, css[key]);
});

var label = document.createElement('span');
label.style.color = 'white';
devConsole.appendChild(label);

window.addEventListener('load', function () {
    document.body.appendChild(devConsole);

    setInterval(function () {
        label.textContent = 'fps:' + window.fps;
    }, 1000);
});

window.addEventListener('error', function (e) {
    try {
        var lineNum = e.lineno;
        var colNum = e.colno;
        var filename = e.filename;
        var tmpl = '\n\n  <div class="errorBlock"> \n        <style>\n            .errorCol {color: #f30000;text-decoration: underline;}\n            .errorRow {\n                color: #bf1313;\n                font-weight: bold;\n            }\n            .errorBlock {\n                position: absolute;\n                left: 0;top:0;right:0;\n                border: 1px solid grey;\n                background-color: rgba(255,215,200,0.99);\n                font-family: monospace;\n                padding: 10px;\n            }\n            .errorClose {\n                position: absolute;\n                top: 5px;\n                right: 5px;\n                content: \'x\';\n                width: 20px;\n                height: 20px;\n                cursor: pointer;\n                color: black;\n            }    \n       </style>\n       <div class="errorClose" onclick="this.closest(\'.errorBlockHolder\').remove();">x</div>\n       <div>Runtime error!</div>\n       <div>' + filename + '</div>\n       <div>-------------------</div>\n       <pre>$_content</pre>\n  </div> \n  \n';
        _httpClient2.default.get(filename, { r: Math.random() }, function (file) {
            var res = '';
            var strings = file.split('\n');
            var linesAfter = 5;
            var errorString = strings[lineNum - 1];
            errorString = errorString.substr(0, colNum - 1) + '<span class="errorCol">' + errorString[colNum - 1] + '</span>' + errorString.substr(colNum);
            res += '<span class="errorRow">' + errorString + '</span>\n';
            for (var i = 0; i < linesAfter; i++) {
                var index = lineNum + i;
                var s = strings[index];
                if (s) res += s + '\n';
            }
            var errDiv = document.createElement('div');
            errDiv.className = 'errorBlockHolder';
            errDiv.innerHTML = tmpl.replace('$_content', res);
            document.body.appendChild(errDiv);
            document.title = 'runtime error!';
        });
    } catch (e) {
        console.error(e);
    }
}, true);

/***/ }),

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
/*global XMLHttpRequest:true*/
/*global FormData:true*/
/*global RF:true*/
var noop = function noop() {};

var objectToQuery = function objectToQuery(o) {
    if (!o) return '';
    if (o instanceof window.FormData) return o;
    var paramsArr = [];
    if (o === null || o === undefined || typeof o === 'string' || typeof o === 'number') return o;
    for (var key in o) {
        paramsArr.push([key, encodeURIComponent(o[key])]);
    }
    return paramsArr.map(function (item) {
        return [item[0] + '=' + item[1]];
    }).join('&');
};

var request = function request(data) {
    var abortTmr = null;
    var resolved = false;
    data.method = data.method || 'get';
    if (data.data && data.method === 'get') data.url += '?' + objectToQuery(data.data);
    var xhr = new XMLHttpRequest();
    var resolveFn = noop,
        rejectFn = noop;
    var promise = new Promise(function (resolve, reject) {
        resolveFn = resolve;
        rejectFn = reject;
    });
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200 || xhr.status === 0) {
                var resp = xhr.responseText;
                var contentType = xhr.getResponseHeader("Content-Type") || '';
                if (contentType.toLowerCase().indexOf('json') > -1) resp = JSON.parse(resp);
                if (data.success) {
                    data.success(resp);
                    if (window.RF) RF.digest(); // todo separate
                }
                resolveFn(resp);
            } else {
                if (data.error) data.error({ status: xhr.status, error: xhr.statusText });
                rejectFn(xhr.statusText);
            }
            clearTimeout(abortTmr);
            resolved = true;
        }
    };
    xhr.open(data.method, data.url, true);
    if (data.requestType) {
        if (data.requestType !== 'multipart/form-data') // at this case header needs to be auto generated
            xhr.setRequestHeader("Content-Type", data.requestType);
    } else {
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    }
    if (data.requestType === 'application/json') data.data = data.data && JSON.stringify(data.data);
    xhr.send(data.data);
    if (data.timeout) {
        abortTmr = setTimeout(function () {
            if (resolved) return;
            xhr.abort();
            if (data.ontimeout) data.ontimeout();
            rejectFn('timeout');
        }, data.timeout);
    }
    return promise;
};

var get = function get(url, data, success, error) {
    return request({
        method: 'get',
        url: url,
        data: data,
        success: success,
        error: error
    });
};

var post = function post(url, data, success, error) {
    return request({
        method: 'post',
        url: url,
        data: data,
        requestType: 'application/json',
        success: success,
        error: error
    });
};

var postMultiPart = function postMultiPart(url, file, data, success, error) {
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

/***/ 85:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(27);
module.exports = __webpack_require__(28);


/***/ })

/******/ });