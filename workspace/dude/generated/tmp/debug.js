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
/******/ ({

/***/ 26:
/***/ (function(module, exports) {

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
        msg = e.message;
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


/***/ }),

/***/ 27:
/***/ (function(module, exports) {

//import http from 'app/providers/rest/httpClient';
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
Object.keys(css).forEach(function (key) { return devConsole.style.setProperty(key, css[key]); });
var label = document.createElement('span');
label.style.color = 'white';
devConsole.appendChild(label);
window.addEventListener('load', function (e) {
    document.body.appendChild(devConsole);
    setInterval(function () {
        label.textContent = 'fps:' + window['fps'];
    }, 1000);
});
window.addEventListener('error', function (e) {
    try {
        var lineNum = e.lineno;
        var colNum = e.colno;
        var filename = e.filename;
        var tmpl = "\n\n  <div class=\"errorBlock\"> \n        <style>\n            .errorCol {color: #f30000;text-decoration: underline;}\n            .errorRow {\n                color: #bf1313;\n                font-weight: bold;\n            }\n            .errorBlock {\n                position: absolute;\n                left: 0;top:0;right:0;\n                border: 1px solid grey;\n                background-color: rgba(255,215,200,0.99);\n                font-family: monospace;\n                padding: 10px;\n            }\n            .errorClose {\n                position: absolute;\n                top: 5px;\n                right: 5px;\n                content: 'x';\n                width: 20px;\n                height: 20px;\n                cursor: pointer;\n                color: black;\n            }    \n       </style>\n       <div class=\"errorClose\" onclick=\"this.closest('.errorBlockHolder').remove();\">x</div>\n       <div>Runtime error!</div>\n       <div>" + filename + "</div>\n       <div>-------------------</div>\n       <pre>$_content</pre>\n  </div> \n  \n";
        // http.get(filename,{r:Math.random()},file=>{
        //     let res='';
        //     let strings = file.split('\n');
        //     let linesAfter = 5;
        //     let errorString = strings[lineNum - 1];
        //     errorString = `${errorString.substr(0,colNum-1)}<span class="errorCol">${errorString[colNum-1]}</span>${errorString.substr(colNum)}`;
        //     res+=`<span class="errorRow">${errorString}</span>\n`;
        //     for (let i=0;i<linesAfter;i++) {
        //         let index = lineNum + i;
        //         let s = strings[index];
        //         if (s) res+=s+'\n';
        //     }
        //     let errDiv = document.createElement('div');
        //     errDiv.className = 'errorBlockHolder';
        //     errDiv.innerHTML = tmpl.replace('$_content',res);
        //     document.body.appendChild(errDiv);
        //     document.title = 'runtime error!';
        // });
    }
    catch (e) {
        console.error(e);
    }
}, true);


/***/ }),

/***/ 88:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(26);
module.exports = __webpack_require__(27);


/***/ })

/******/ });