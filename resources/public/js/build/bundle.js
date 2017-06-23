(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/json/stringify"), __esModule: true };
},{"core-js/library/fn/json/stringify":11}],2:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/create"), __esModule: true };
},{"core-js/library/fn/object/create":12}],3:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/define-property"), __esModule: true };
},{"core-js/library/fn/object/define-property":13}],4:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/keys"), __esModule: true };
},{"core-js/library/fn/object/keys":14}],5:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/promise"), __esModule: true };
},{"core-js/library/fn/promise":15}],6:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/symbol"), __esModule: true };
},{"core-js/library/fn/symbol":16}],7:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/symbol/iterator"), __esModule: true };
},{"core-js/library/fn/symbol/iterator":17}],8:[function(require,module,exports){
"use strict";

exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};
},{}],9:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _defineProperty = require("../core-js/object/define-property");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
},{"../core-js/object/define-property":3}],10:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _iterator = require("../core-js/symbol/iterator");

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = require("../core-js/symbol");

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};
},{"../core-js/symbol":6,"../core-js/symbol/iterator":7}],11:[function(require,module,exports){
var core  = require('../../modules/_core')
  , $JSON = core.JSON || (core.JSON = {stringify: JSON.stringify});
module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};
},{"../../modules/_core":25}],12:[function(require,module,exports){
require('../../modules/es6.object.create');
var $Object = require('../../modules/_core').Object;
module.exports = function create(P, D){
  return $Object.create(P, D);
};
},{"../../modules/_core":25,"../../modules/es6.object.create":89}],13:[function(require,module,exports){
require('../../modules/es6.object.define-property');
var $Object = require('../../modules/_core').Object;
module.exports = function defineProperty(it, key, desc){
  return $Object.defineProperty(it, key, desc);
};
},{"../../modules/_core":25,"../../modules/es6.object.define-property":90}],14:[function(require,module,exports){
require('../../modules/es6.object.keys');
module.exports = require('../../modules/_core').Object.keys;
},{"../../modules/_core":25,"../../modules/es6.object.keys":91}],15:[function(require,module,exports){
require('../modules/es6.object.to-string');
require('../modules/es6.string.iterator');
require('../modules/web.dom.iterable');
require('../modules/es6.promise');
module.exports = require('../modules/_core').Promise;
},{"../modules/_core":25,"../modules/es6.object.to-string":92,"../modules/es6.promise":93,"../modules/es6.string.iterator":94,"../modules/web.dom.iterable":98}],16:[function(require,module,exports){
require('../../modules/es6.symbol');
require('../../modules/es6.object.to-string');
require('../../modules/es7.symbol.async-iterator');
require('../../modules/es7.symbol.observable');
module.exports = require('../../modules/_core').Symbol;
},{"../../modules/_core":25,"../../modules/es6.object.to-string":92,"../../modules/es6.symbol":95,"../../modules/es7.symbol.async-iterator":96,"../../modules/es7.symbol.observable":97}],17:[function(require,module,exports){
require('../../modules/es6.string.iterator');
require('../../modules/web.dom.iterable');
module.exports = require('../../modules/_wks-ext').f('iterator');
},{"../../modules/_wks-ext":85,"../../modules/es6.string.iterator":94,"../../modules/web.dom.iterable":98}],18:[function(require,module,exports){
module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};
},{}],19:[function(require,module,exports){
module.exports = function(){ /* empty */ };
},{}],20:[function(require,module,exports){
module.exports = function(it, Constructor, name, forbiddenField){
  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};
},{}],21:[function(require,module,exports){
var isObject = require('./_is-object');
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};
},{"./_is-object":44}],22:[function(require,module,exports){
// false -> Array#indexOf
// true  -> Array#includes
var toIObject = require('./_to-iobject')
  , toLength  = require('./_to-length')
  , toIndex   = require('./_to-index');
module.exports = function(IS_INCLUDES){
  return function($this, el, fromIndex){
    var O      = toIObject($this)
      , length = toLength(O.length)
      , index  = toIndex(fromIndex, length)
      , value;
    // Array#includes uses SameValueZero equality algorithm
    if(IS_INCLUDES && el != el)while(length > index){
      value = O[index++];
      if(value != value)return true;
    // Array#toIndex ignores holes, Array#includes - not
    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
      if(O[index] === el)return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};
},{"./_to-index":77,"./_to-iobject":79,"./_to-length":80}],23:[function(require,module,exports){
// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = require('./_cof')
  , TAG = require('./_wks')('toStringTag')
  // ES3 wrong here
  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function(it, key){
  try {
    return it[key];
  } catch(e){ /* empty */ }
};

module.exports = function(it){
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};
},{"./_cof":24,"./_wks":86}],24:[function(require,module,exports){
var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};
},{}],25:[function(require,module,exports){
var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef
},{}],26:[function(require,module,exports){
// optional / simple context binding
var aFunction = require('./_a-function');
module.exports = function(fn, that, length){
  aFunction(fn);
  if(that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};
},{"./_a-function":18}],27:[function(require,module,exports){
// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};
},{}],28:[function(require,module,exports){
// Thank's IE8 for his funny defineProperty
module.exports = !require('./_fails')(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});
},{"./_fails":33}],29:[function(require,module,exports){
var isObject = require('./_is-object')
  , document = require('./_global').document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};
},{"./_global":35,"./_is-object":44}],30:[function(require,module,exports){
// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');
},{}],31:[function(require,module,exports){
// all enumerable object keys, includes symbols
var getKeys = require('./_object-keys')
  , gOPS    = require('./_object-gops')
  , pIE     = require('./_object-pie');
module.exports = function(it){
  var result     = getKeys(it)
    , getSymbols = gOPS.f;
  if(getSymbols){
    var symbols = getSymbols(it)
      , isEnum  = pIE.f
      , i       = 0
      , key;
    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
  } return result;
};
},{"./_object-gops":61,"./_object-keys":64,"./_object-pie":65}],32:[function(require,module,exports){
var global    = require('./_global')
  , core      = require('./_core')
  , ctx       = require('./_ctx')
  , hide      = require('./_hide')
  , PROTOTYPE = 'prototype';

var $export = function(type, name, source){
  var IS_FORCED = type & $export.F
    , IS_GLOBAL = type & $export.G
    , IS_STATIC = type & $export.S
    , IS_PROTO  = type & $export.P
    , IS_BIND   = type & $export.B
    , IS_WRAP   = type & $export.W
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , expProto  = exports[PROTOTYPE]
    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
    , key, own, out;
  if(IS_GLOBAL)source = name;
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if(own && key in exports)continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function(C){
      var F = function(a, b, c){
        if(this instanceof C){
          switch(arguments.length){
            case 0: return new C;
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if(IS_PROTO){
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library` 
module.exports = $export;
},{"./_core":25,"./_ctx":26,"./_global":35,"./_hide":37}],33:[function(require,module,exports){
module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};
},{}],34:[function(require,module,exports){
var ctx         = require('./_ctx')
  , call        = require('./_iter-call')
  , isArrayIter = require('./_is-array-iter')
  , anObject    = require('./_an-object')
  , toLength    = require('./_to-length')
  , getIterFn   = require('./core.get-iterator-method')
  , BREAK       = {}
  , RETURN      = {};
var exports = module.exports = function(iterable, entries, fn, that, ITERATOR){
  var iterFn = ITERATOR ? function(){ return iterable; } : getIterFn(iterable)
    , f      = ctx(fn, that, entries ? 2 : 1)
    , index  = 0
    , length, step, iterator, result;
  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if(result === BREAK || result === RETURN)return result;
  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
    result = call(iterator, f, step.value, entries);
    if(result === BREAK || result === RETURN)return result;
  }
};
exports.BREAK  = BREAK;
exports.RETURN = RETURN;
},{"./_an-object":21,"./_ctx":26,"./_is-array-iter":42,"./_iter-call":45,"./_to-length":80,"./core.get-iterator-method":87}],35:[function(require,module,exports){
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef
},{}],36:[function(require,module,exports){
var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};
},{}],37:[function(require,module,exports){
var dP         = require('./_object-dp')
  , createDesc = require('./_property-desc');
module.exports = require('./_descriptors') ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};
},{"./_descriptors":28,"./_object-dp":56,"./_property-desc":67}],38:[function(require,module,exports){
module.exports = require('./_global').document && document.documentElement;
},{"./_global":35}],39:[function(require,module,exports){
module.exports = !require('./_descriptors') && !require('./_fails')(function(){
  return Object.defineProperty(require('./_dom-create')('div'), 'a', {get: function(){ return 7; }}).a != 7;
});
},{"./_descriptors":28,"./_dom-create":29,"./_fails":33}],40:[function(require,module,exports){
// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function(fn, args, that){
  var un = that === undefined;
  switch(args.length){
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return              fn.apply(that, args);
};
},{}],41:[function(require,module,exports){
// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = require('./_cof');
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};
},{"./_cof":24}],42:[function(require,module,exports){
// check on default Array iterator
var Iterators  = require('./_iterators')
  , ITERATOR   = require('./_wks')('iterator')
  , ArrayProto = Array.prototype;

module.exports = function(it){
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};
},{"./_iterators":50,"./_wks":86}],43:[function(require,module,exports){
// 7.2.2 IsArray(argument)
var cof = require('./_cof');
module.exports = Array.isArray || function isArray(arg){
  return cof(arg) == 'Array';
};
},{"./_cof":24}],44:[function(require,module,exports){
module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};
},{}],45:[function(require,module,exports){
// call something on iterator step with safe closing on error
var anObject = require('./_an-object');
module.exports = function(iterator, fn, value, entries){
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch(e){
    var ret = iterator['return'];
    if(ret !== undefined)anObject(ret.call(iterator));
    throw e;
  }
};
},{"./_an-object":21}],46:[function(require,module,exports){
'use strict';
var create         = require('./_object-create')
  , descriptor     = require('./_property-desc')
  , setToStringTag = require('./_set-to-string-tag')
  , IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
require('./_hide')(IteratorPrototype, require('./_wks')('iterator'), function(){ return this; });

module.exports = function(Constructor, NAME, next){
  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
  setToStringTag(Constructor, NAME + ' Iterator');
};
},{"./_hide":37,"./_object-create":55,"./_property-desc":67,"./_set-to-string-tag":71,"./_wks":86}],47:[function(require,module,exports){
'use strict';
var LIBRARY        = require('./_library')
  , $export        = require('./_export')
  , redefine       = require('./_redefine')
  , hide           = require('./_hide')
  , has            = require('./_has')
  , Iterators      = require('./_iterators')
  , $iterCreate    = require('./_iter-create')
  , setToStringTag = require('./_set-to-string-tag')
  , getPrototypeOf = require('./_object-gpo')
  , ITERATOR       = require('./_wks')('iterator')
  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
  , FF_ITERATOR    = '@@iterator'
  , KEYS           = 'keys'
  , VALUES         = 'values';

var returnThis = function(){ return this; };

module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
  $iterCreate(Constructor, NAME, next);
  var getMethod = function(kind){
    if(!BUGGY && kind in proto)return proto[kind];
    switch(kind){
      case KEYS: return function keys(){ return new Constructor(this, kind); };
      case VALUES: return function values(){ return new Constructor(this, kind); };
    } return function entries(){ return new Constructor(this, kind); };
  };
  var TAG        = NAME + ' Iterator'
    , DEF_VALUES = DEFAULT == VALUES
    , VALUES_BUG = false
    , proto      = Base.prototype
    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
    , $default   = $native || getMethod(DEFAULT)
    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
    , methods, key, IteratorPrototype;
  // Fix native
  if($anyNative){
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
    if(IteratorPrototype !== Object.prototype){
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if(DEF_VALUES && $native && $native.name !== VALUES){
    VALUES_BUG = true;
    $default = function values(){ return $native.call(this); };
  }
  // Define iterator
  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG]  = returnThis;
  if(DEFAULT){
    methods = {
      values:  DEF_VALUES ? $default : getMethod(VALUES),
      keys:    IS_SET     ? $default : getMethod(KEYS),
      entries: $entries
    };
    if(FORCED)for(key in methods){
      if(!(key in proto))redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};
},{"./_export":32,"./_has":36,"./_hide":37,"./_iter-create":46,"./_iterators":50,"./_library":52,"./_object-gpo":62,"./_redefine":69,"./_set-to-string-tag":71,"./_wks":86}],48:[function(require,module,exports){
var ITERATOR     = require('./_wks')('iterator')
  , SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function(){ SAFE_CLOSING = true; };
  Array.from(riter, function(){ throw 2; });
} catch(e){ /* empty */ }

module.exports = function(exec, skipClosing){
  if(!skipClosing && !SAFE_CLOSING)return false;
  var safe = false;
  try {
    var arr  = [7]
      , iter = arr[ITERATOR]();
    iter.next = function(){ return {done: safe = true}; };
    arr[ITERATOR] = function(){ return iter; };
    exec(arr);
  } catch(e){ /* empty */ }
  return safe;
};
},{"./_wks":86}],49:[function(require,module,exports){
module.exports = function(done, value){
  return {value: value, done: !!done};
};
},{}],50:[function(require,module,exports){
module.exports = {};
},{}],51:[function(require,module,exports){
var getKeys   = require('./_object-keys')
  , toIObject = require('./_to-iobject');
module.exports = function(object, el){
  var O      = toIObject(object)
    , keys   = getKeys(O)
    , length = keys.length
    , index  = 0
    , key;
  while(length > index)if(O[key = keys[index++]] === el)return key;
};
},{"./_object-keys":64,"./_to-iobject":79}],52:[function(require,module,exports){
module.exports = true;
},{}],53:[function(require,module,exports){
var META     = require('./_uid')('meta')
  , isObject = require('./_is-object')
  , has      = require('./_has')
  , setDesc  = require('./_object-dp').f
  , id       = 0;
var isExtensible = Object.isExtensible || function(){
  return true;
};
var FREEZE = !require('./_fails')(function(){
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function(it){
  setDesc(it, META, {value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  }});
};
var fastKey = function(it, create){
  // return primitive with prefix
  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return 'F';
    // not necessary to add metadata
    if(!create)return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function(it, create){
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return true;
    // not necessary to add metadata
    if(!create)return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function(it){
  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY:      META,
  NEED:     false,
  fastKey:  fastKey,
  getWeak:  getWeak,
  onFreeze: onFreeze
};
},{"./_fails":33,"./_has":36,"./_is-object":44,"./_object-dp":56,"./_uid":83}],54:[function(require,module,exports){
var global    = require('./_global')
  , macrotask = require('./_task').set
  , Observer  = global.MutationObserver || global.WebKitMutationObserver
  , process   = global.process
  , Promise   = global.Promise
  , isNode    = require('./_cof')(process) == 'process';

module.exports = function(){
  var head, last, notify;

  var flush = function(){
    var parent, fn;
    if(isNode && (parent = process.domain))parent.exit();
    while(head){
      fn   = head.fn;
      head = head.next;
      try {
        fn();
      } catch(e){
        if(head)notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if(parent)parent.enter();
  };

  // Node.js
  if(isNode){
    notify = function(){
      process.nextTick(flush);
    };
  // browsers with MutationObserver
  } else if(Observer){
    var toggle = true
      , node   = document.createTextNode('');
    new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
    notify = function(){
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if(Promise && Promise.resolve){
    var promise = Promise.resolve();
    notify = function(){
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function(){
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function(fn){
    var task = {fn: fn, next: undefined};
    if(last)last.next = task;
    if(!head){
      head = task;
      notify();
    } last = task;
  };
};
},{"./_cof":24,"./_global":35,"./_task":76}],55:[function(require,module,exports){
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject    = require('./_an-object')
  , dPs         = require('./_object-dps')
  , enumBugKeys = require('./_enum-bug-keys')
  , IE_PROTO    = require('./_shared-key')('IE_PROTO')
  , Empty       = function(){ /* empty */ }
  , PROTOTYPE   = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function(){
  // Thrash, waste and sodomy: IE GC bug
  var iframe = require('./_dom-create')('iframe')
    , i      = enumBugKeys.length
    , lt     = '<'
    , gt     = '>'
    , iframeDocument;
  iframe.style.display = 'none';
  require('./_html').appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties){
  var result;
  if(O !== null){
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty;
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};

},{"./_an-object":21,"./_dom-create":29,"./_enum-bug-keys":30,"./_html":38,"./_object-dps":57,"./_shared-key":72}],56:[function(require,module,exports){
var anObject       = require('./_an-object')
  , IE8_DOM_DEFINE = require('./_ie8-dom-define')
  , toPrimitive    = require('./_to-primitive')
  , dP             = Object.defineProperty;

exports.f = require('./_descriptors') ? Object.defineProperty : function defineProperty(O, P, Attributes){
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if(IE8_DOM_DEFINE)try {
    return dP(O, P, Attributes);
  } catch(e){ /* empty */ }
  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
  if('value' in Attributes)O[P] = Attributes.value;
  return O;
};
},{"./_an-object":21,"./_descriptors":28,"./_ie8-dom-define":39,"./_to-primitive":82}],57:[function(require,module,exports){
var dP       = require('./_object-dp')
  , anObject = require('./_an-object')
  , getKeys  = require('./_object-keys');

module.exports = require('./_descriptors') ? Object.defineProperties : function defineProperties(O, Properties){
  anObject(O);
  var keys   = getKeys(Properties)
    , length = keys.length
    , i = 0
    , P;
  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
  return O;
};
},{"./_an-object":21,"./_descriptors":28,"./_object-dp":56,"./_object-keys":64}],58:[function(require,module,exports){
var pIE            = require('./_object-pie')
  , createDesc     = require('./_property-desc')
  , toIObject      = require('./_to-iobject')
  , toPrimitive    = require('./_to-primitive')
  , has            = require('./_has')
  , IE8_DOM_DEFINE = require('./_ie8-dom-define')
  , gOPD           = Object.getOwnPropertyDescriptor;

exports.f = require('./_descriptors') ? gOPD : function getOwnPropertyDescriptor(O, P){
  O = toIObject(O);
  P = toPrimitive(P, true);
  if(IE8_DOM_DEFINE)try {
    return gOPD(O, P);
  } catch(e){ /* empty */ }
  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
};
},{"./_descriptors":28,"./_has":36,"./_ie8-dom-define":39,"./_object-pie":65,"./_property-desc":67,"./_to-iobject":79,"./_to-primitive":82}],59:[function(require,module,exports){
// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = require('./_to-iobject')
  , gOPN      = require('./_object-gopn').f
  , toString  = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function(it){
  try {
    return gOPN(it);
  } catch(e){
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it){
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};

},{"./_object-gopn":60,"./_to-iobject":79}],60:[function(require,module,exports){
// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys      = require('./_object-keys-internal')
  , hiddenKeys = require('./_enum-bug-keys').concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
  return $keys(O, hiddenKeys);
};
},{"./_enum-bug-keys":30,"./_object-keys-internal":63}],61:[function(require,module,exports){
exports.f = Object.getOwnPropertySymbols;
},{}],62:[function(require,module,exports){
// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has         = require('./_has')
  , toObject    = require('./_to-object')
  , IE_PROTO    = require('./_shared-key')('IE_PROTO')
  , ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function(O){
  O = toObject(O);
  if(has(O, IE_PROTO))return O[IE_PROTO];
  if(typeof O.constructor == 'function' && O instanceof O.constructor){
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};
},{"./_has":36,"./_shared-key":72,"./_to-object":81}],63:[function(require,module,exports){
var has          = require('./_has')
  , toIObject    = require('./_to-iobject')
  , arrayIndexOf = require('./_array-includes')(false)
  , IE_PROTO     = require('./_shared-key')('IE_PROTO');

module.exports = function(object, names){
  var O      = toIObject(object)
    , i      = 0
    , result = []
    , key;
  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while(names.length > i)if(has(O, key = names[i++])){
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};
},{"./_array-includes":22,"./_has":36,"./_shared-key":72,"./_to-iobject":79}],64:[function(require,module,exports){
// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys       = require('./_object-keys-internal')
  , enumBugKeys = require('./_enum-bug-keys');

module.exports = Object.keys || function keys(O){
  return $keys(O, enumBugKeys);
};
},{"./_enum-bug-keys":30,"./_object-keys-internal":63}],65:[function(require,module,exports){
exports.f = {}.propertyIsEnumerable;
},{}],66:[function(require,module,exports){
// most Object methods by ES6 should accept primitives
var $export = require('./_export')
  , core    = require('./_core')
  , fails   = require('./_fails');
module.exports = function(KEY, exec){
  var fn  = (core.Object || {})[KEY] || Object[KEY]
    , exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
};
},{"./_core":25,"./_export":32,"./_fails":33}],67:[function(require,module,exports){
module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};
},{}],68:[function(require,module,exports){
var hide = require('./_hide');
module.exports = function(target, src, safe){
  for(var key in src){
    if(safe && target[key])target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};
},{"./_hide":37}],69:[function(require,module,exports){
module.exports = require('./_hide');
},{"./_hide":37}],70:[function(require,module,exports){
'use strict';
var global      = require('./_global')
  , core        = require('./_core')
  , dP          = require('./_object-dp')
  , DESCRIPTORS = require('./_descriptors')
  , SPECIES     = require('./_wks')('species');

module.exports = function(KEY){
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if(DESCRIPTORS && C && !C[SPECIES])dP.f(C, SPECIES, {
    configurable: true,
    get: function(){ return this; }
  });
};
},{"./_core":25,"./_descriptors":28,"./_global":35,"./_object-dp":56,"./_wks":86}],71:[function(require,module,exports){
var def = require('./_object-dp').f
  , has = require('./_has')
  , TAG = require('./_wks')('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};
},{"./_has":36,"./_object-dp":56,"./_wks":86}],72:[function(require,module,exports){
var shared = require('./_shared')('keys')
  , uid    = require('./_uid');
module.exports = function(key){
  return shared[key] || (shared[key] = uid(key));
};
},{"./_shared":73,"./_uid":83}],73:[function(require,module,exports){
var global = require('./_global')
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};
},{"./_global":35}],74:[function(require,module,exports){
// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject  = require('./_an-object')
  , aFunction = require('./_a-function')
  , SPECIES   = require('./_wks')('species');
module.exports = function(O, D){
  var C = anObject(O).constructor, S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};
},{"./_a-function":18,"./_an-object":21,"./_wks":86}],75:[function(require,module,exports){
var toInteger = require('./_to-integer')
  , defined   = require('./_defined');
// true  -> String#at
// false -> String#codePointAt
module.exports = function(TO_STRING){
  return function(that, pos){
    var s = String(defined(that))
      , i = toInteger(pos)
      , l = s.length
      , a, b;
    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};
},{"./_defined":27,"./_to-integer":78}],76:[function(require,module,exports){
var ctx                = require('./_ctx')
  , invoke             = require('./_invoke')
  , html               = require('./_html')
  , cel                = require('./_dom-create')
  , global             = require('./_global')
  , process            = global.process
  , setTask            = global.setImmediate
  , clearTask          = global.clearImmediate
  , MessageChannel     = global.MessageChannel
  , counter            = 0
  , queue              = {}
  , ONREADYSTATECHANGE = 'onreadystatechange'
  , defer, channel, port;
var run = function(){
  var id = +this;
  if(queue.hasOwnProperty(id)){
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function(event){
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if(!setTask || !clearTask){
  setTask = function setImmediate(fn){
    var args = [], i = 1;
    while(arguments.length > i)args.push(arguments[i++]);
    queue[++counter] = function(){
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id){
    delete queue[id];
  };
  // Node.js 0.8-
  if(require('./_cof')(process) == 'process'){
    defer = function(id){
      process.nextTick(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if(MessageChannel){
    channel = new MessageChannel;
    port    = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
    defer = function(id){
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if(ONREADYSTATECHANGE in cel('script')){
    defer = function(id){
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function(id){
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set:   setTask,
  clear: clearTask
};
},{"./_cof":24,"./_ctx":26,"./_dom-create":29,"./_global":35,"./_html":38,"./_invoke":40}],77:[function(require,module,exports){
var toInteger = require('./_to-integer')
  , max       = Math.max
  , min       = Math.min;
module.exports = function(index, length){
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};
},{"./_to-integer":78}],78:[function(require,module,exports){
// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};
},{}],79:[function(require,module,exports){
// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = require('./_iobject')
  , defined = require('./_defined');
module.exports = function(it){
  return IObject(defined(it));
};
},{"./_defined":27,"./_iobject":41}],80:[function(require,module,exports){
// 7.1.15 ToLength
var toInteger = require('./_to-integer')
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};
},{"./_to-integer":78}],81:[function(require,module,exports){
// 7.1.13 ToObject(argument)
var defined = require('./_defined');
module.exports = function(it){
  return Object(defined(it));
};
},{"./_defined":27}],82:[function(require,module,exports){
// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = require('./_is-object');
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function(it, S){
  if(!isObject(it))return it;
  var fn, val;
  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  throw TypeError("Can't convert object to primitive value");
};
},{"./_is-object":44}],83:[function(require,module,exports){
var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};
},{}],84:[function(require,module,exports){
var global         = require('./_global')
  , core           = require('./_core')
  , LIBRARY        = require('./_library')
  , wksExt         = require('./_wks-ext')
  , defineProperty = require('./_object-dp').f;
module.exports = function(name){
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
};
},{"./_core":25,"./_global":35,"./_library":52,"./_object-dp":56,"./_wks-ext":85}],85:[function(require,module,exports){
exports.f = require('./_wks');
},{"./_wks":86}],86:[function(require,module,exports){
var store      = require('./_shared')('wks')
  , uid        = require('./_uid')
  , Symbol     = require('./_global').Symbol
  , USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function(name){
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;
},{"./_global":35,"./_shared":73,"./_uid":83}],87:[function(require,module,exports){
var classof   = require('./_classof')
  , ITERATOR  = require('./_wks')('iterator')
  , Iterators = require('./_iterators');
module.exports = require('./_core').getIteratorMethod = function(it){
  if(it != undefined)return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};
},{"./_classof":23,"./_core":25,"./_iterators":50,"./_wks":86}],88:[function(require,module,exports){
'use strict';
var addToUnscopables = require('./_add-to-unscopables')
  , step             = require('./_iter-step')
  , Iterators        = require('./_iterators')
  , toIObject        = require('./_to-iobject');

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = require('./_iter-define')(Array, 'Array', function(iterated, kind){
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , kind  = this._k
    , index = this._i++;
  if(!O || index >= O.length){
    this._t = undefined;
    return step(1);
  }
  if(kind == 'keys'  )return step(0, index);
  if(kind == 'values')return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');
},{"./_add-to-unscopables":19,"./_iter-define":47,"./_iter-step":49,"./_iterators":50,"./_to-iobject":79}],89:[function(require,module,exports){
var $export = require('./_export')
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', {create: require('./_object-create')});
},{"./_export":32,"./_object-create":55}],90:[function(require,module,exports){
var $export = require('./_export');
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !require('./_descriptors'), 'Object', {defineProperty: require('./_object-dp').f});
},{"./_descriptors":28,"./_export":32,"./_object-dp":56}],91:[function(require,module,exports){
// 19.1.2.14 Object.keys(O)
var toObject = require('./_to-object')
  , $keys    = require('./_object-keys');

require('./_object-sap')('keys', function(){
  return function keys(it){
    return $keys(toObject(it));
  };
});
},{"./_object-keys":64,"./_object-sap":66,"./_to-object":81}],92:[function(require,module,exports){

},{}],93:[function(require,module,exports){
'use strict';
var LIBRARY            = require('./_library')
  , global             = require('./_global')
  , ctx                = require('./_ctx')
  , classof            = require('./_classof')
  , $export            = require('./_export')
  , isObject           = require('./_is-object')
  , aFunction          = require('./_a-function')
  , anInstance         = require('./_an-instance')
  , forOf              = require('./_for-of')
  , speciesConstructor = require('./_species-constructor')
  , task               = require('./_task').set
  , microtask          = require('./_microtask')()
  , PROMISE            = 'Promise'
  , TypeError          = global.TypeError
  , process            = global.process
  , $Promise           = global[PROMISE]
  , process            = global.process
  , isNode             = classof(process) == 'process'
  , empty              = function(){ /* empty */ }
  , Internal, GenericPromiseCapability, Wrapper;

var USE_NATIVE = !!function(){
  try {
    // correct subclassing with @@species support
    var promise     = $Promise.resolve(1)
      , FakePromise = (promise.constructor = {})[require('./_wks')('species')] = function(exec){ exec(empty, empty); };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
  } catch(e){ /* empty */ }
}();

// helpers
var sameConstructor = function(a, b){
  // with library wrapper special case
  return a === b || a === $Promise && b === Wrapper;
};
var isThenable = function(it){
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var newPromiseCapability = function(C){
  return sameConstructor($Promise, C)
    ? new PromiseCapability(C)
    : new GenericPromiseCapability(C);
};
var PromiseCapability = GenericPromiseCapability = function(C){
  var resolve, reject;
  this.promise = new C(function($$resolve, $$reject){
    if(resolve !== undefined || reject !== undefined)throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject  = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject  = aFunction(reject);
};
var perform = function(exec){
  try {
    exec();
  } catch(e){
    return {error: e};
  }
};
var notify = function(promise, isReject){
  if(promise._n)return;
  promise._n = true;
  var chain = promise._c;
  microtask(function(){
    var value = promise._v
      , ok    = promise._s == 1
      , i     = 0;
    var run = function(reaction){
      var handler = ok ? reaction.ok : reaction.fail
        , resolve = reaction.resolve
        , reject  = reaction.reject
        , domain  = reaction.domain
        , result, then;
      try {
        if(handler){
          if(!ok){
            if(promise._h == 2)onHandleUnhandled(promise);
            promise._h = 1;
          }
          if(handler === true)result = value;
          else {
            if(domain)domain.enter();
            result = handler(value);
            if(domain)domain.exit();
          }
          if(result === reaction.promise){
            reject(TypeError('Promise-chain cycle'));
          } else if(then = isThenable(result)){
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch(e){
        reject(e);
      }
    };
    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if(isReject && !promise._h)onUnhandled(promise);
  });
};
var onUnhandled = function(promise){
  task.call(global, function(){
    var value = promise._v
      , abrupt, handler, console;
    if(isUnhandled(promise)){
      abrupt = perform(function(){
        if(isNode){
          process.emit('unhandledRejection', value, promise);
        } else if(handler = global.onunhandledrejection){
          handler({promise: promise, reason: value});
        } else if((console = global.console) && console.error){
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if(abrupt)throw abrupt.error;
  });
};
var isUnhandled = function(promise){
  if(promise._h == 1)return false;
  var chain = promise._a || promise._c
    , i     = 0
    , reaction;
  while(chain.length > i){
    reaction = chain[i++];
    if(reaction.fail || !isUnhandled(reaction.promise))return false;
  } return true;
};
var onHandleUnhandled = function(promise){
  task.call(global, function(){
    var handler;
    if(isNode){
      process.emit('rejectionHandled', promise);
    } else if(handler = global.onrejectionhandled){
      handler({promise: promise, reason: promise._v});
    }
  });
};
var $reject = function(value){
  var promise = this;
  if(promise._d)return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if(!promise._a)promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function(value){
  var promise = this
    , then;
  if(promise._d)return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if(promise === value)throw TypeError("Promise can't be resolved itself");
    if(then = isThenable(value)){
      microtask(function(){
        var wrapper = {_w: promise, _d: false}; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch(e){
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch(e){
    $reject.call({_w: promise, _d: false}, e); // wrap
  }
};

// constructor polyfill
if(!USE_NATIVE){
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor){
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch(err){
      $reject.call(this, err);
    }
  };
  Internal = function Promise(executor){
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = require('./_redefine-all')($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected){
      var reaction    = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok     = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail   = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if(this._a)this._a.push(reaction);
      if(this._s)notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function(onRejected){
      return this.then(undefined, onRejected);
    }
  });
  PromiseCapability = function(){
    var promise  = new Internal;
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject  = ctx($reject, promise, 1);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: $Promise});
require('./_set-to-string-tag')($Promise, PROMISE);
require('./_set-species')(PROMISE);
Wrapper = require('./_core')[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r){
    var capability = newPromiseCapability(this)
      , $$reject   = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x){
    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
    if(x instanceof $Promise && sameConstructor(x.constructor, this))return x;
    var capability = newPromiseCapability(this)
      , $$resolve  = capability.resolve;
    $$resolve(x);
    return capability.promise;
  }
});
$export($export.S + $export.F * !(USE_NATIVE && require('./_iter-detect')(function(iter){
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable){
    var C          = this
      , capability = newPromiseCapability(C)
      , resolve    = capability.resolve
      , reject     = capability.reject;
    var abrupt = perform(function(){
      var values    = []
        , index     = 0
        , remaining = 1;
      forOf(iterable, false, function(promise){
        var $index        = index++
          , alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function(value){
          if(alreadyCalled)return;
          alreadyCalled  = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if(abrupt)reject(abrupt.error);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable){
    var C          = this
      , capability = newPromiseCapability(C)
      , reject     = capability.reject;
    var abrupt = perform(function(){
      forOf(iterable, false, function(promise){
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if(abrupt)reject(abrupt.error);
    return capability.promise;
  }
});
},{"./_a-function":18,"./_an-instance":20,"./_classof":23,"./_core":25,"./_ctx":26,"./_export":32,"./_for-of":34,"./_global":35,"./_is-object":44,"./_iter-detect":48,"./_library":52,"./_microtask":54,"./_redefine-all":68,"./_set-species":70,"./_set-to-string-tag":71,"./_species-constructor":74,"./_task":76,"./_wks":86}],94:[function(require,module,exports){
'use strict';
var $at  = require('./_string-at')(true);

// 21.1.3.27 String.prototype[@@iterator]()
require('./_iter-define')(String, 'String', function(iterated){
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , index = this._i
    , point;
  if(index >= O.length)return {value: undefined, done: true};
  point = $at(O, index);
  this._i += point.length;
  return {value: point, done: false};
});
},{"./_iter-define":47,"./_string-at":75}],95:[function(require,module,exports){
'use strict';
// ECMAScript 6 symbols shim
var global         = require('./_global')
  , has            = require('./_has')
  , DESCRIPTORS    = require('./_descriptors')
  , $export        = require('./_export')
  , redefine       = require('./_redefine')
  , META           = require('./_meta').KEY
  , $fails         = require('./_fails')
  , shared         = require('./_shared')
  , setToStringTag = require('./_set-to-string-tag')
  , uid            = require('./_uid')
  , wks            = require('./_wks')
  , wksExt         = require('./_wks-ext')
  , wksDefine      = require('./_wks-define')
  , keyOf          = require('./_keyof')
  , enumKeys       = require('./_enum-keys')
  , isArray        = require('./_is-array')
  , anObject       = require('./_an-object')
  , toIObject      = require('./_to-iobject')
  , toPrimitive    = require('./_to-primitive')
  , createDesc     = require('./_property-desc')
  , _create        = require('./_object-create')
  , gOPNExt        = require('./_object-gopn-ext')
  , $GOPD          = require('./_object-gopd')
  , $DP            = require('./_object-dp')
  , $keys          = require('./_object-keys')
  , gOPD           = $GOPD.f
  , dP             = $DP.f
  , gOPN           = gOPNExt.f
  , $Symbol        = global.Symbol
  , $JSON          = global.JSON
  , _stringify     = $JSON && $JSON.stringify
  , PROTOTYPE      = 'prototype'
  , HIDDEN         = wks('_hidden')
  , TO_PRIMITIVE   = wks('toPrimitive')
  , isEnum         = {}.propertyIsEnumerable
  , SymbolRegistry = shared('symbol-registry')
  , AllSymbols     = shared('symbols')
  , OPSymbols      = shared('op-symbols')
  , ObjectProto    = Object[PROTOTYPE]
  , USE_NATIVE     = typeof $Symbol == 'function'
  , QObject        = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function(){
  return _create(dP({}, 'a', {
    get: function(){ return dP(this, 'a', {value: 7}).a; }
  })).a != 7;
}) ? function(it, key, D){
  var protoDesc = gOPD(ObjectProto, key);
  if(protoDesc)delete ObjectProto[key];
  dP(it, key, D);
  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function(tag){
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
  return typeof it == 'symbol';
} : function(it){
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D){
  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if(has(AllSymbols, key)){
    if(!D.enumerable){
      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
      D = _create(D, {enumerable: createDesc(0, false)});
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P){
  anObject(it);
  var keys = enumKeys(P = toIObject(P))
    , i    = 0
    , l = keys.length
    , key;
  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P){
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key){
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
  it  = toIObject(it);
  key = toPrimitive(key, true);
  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
  var D = gOPD(it, key);
  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it){
  var names  = gOPN(toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
  var IS_OP  = it === ObjectProto
    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if(!USE_NATIVE){
  $Symbol = function Symbol(){
    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function(value){
      if(this === ObjectProto)$set.call(OPSymbols, value);
      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f   = $defineProperty;
  require('./_object-gopn').f = gOPNExt.f = $getOwnPropertyNames;
  require('./_object-pie').f  = $propertyIsEnumerable;
  require('./_object-gops').f = $getOwnPropertySymbols;

  if(DESCRIPTORS && !require('./_library')){
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function(name){
    return wrap(wks(name));
  }
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});

for(var symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);

for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function(key){
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(key){
    if(isSymbol(key))return keyOf(SymbolRegistry, key);
    throw TypeError(key + ' is not a symbol!');
  },
  useSetter: function(){ setter = true; },
  useSimple: function(){ setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it){
    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
    var args = [it]
      , i    = 1
      , replacer, $replacer;
    while(arguments.length > i)args.push(arguments[i++]);
    replacer = args[1];
    if(typeof replacer == 'function')$replacer = replacer;
    if($replacer || !isArray(replacer))replacer = function(key, value){
      if($replacer)value = $replacer.call(this, key, value);
      if(!isSymbol(value))return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || require('./_hide')($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);
},{"./_an-object":21,"./_descriptors":28,"./_enum-keys":31,"./_export":32,"./_fails":33,"./_global":35,"./_has":36,"./_hide":37,"./_is-array":43,"./_keyof":51,"./_library":52,"./_meta":53,"./_object-create":55,"./_object-dp":56,"./_object-gopd":58,"./_object-gopn":60,"./_object-gopn-ext":59,"./_object-gops":61,"./_object-keys":64,"./_object-pie":65,"./_property-desc":67,"./_redefine":69,"./_set-to-string-tag":71,"./_shared":73,"./_to-iobject":79,"./_to-primitive":82,"./_uid":83,"./_wks":86,"./_wks-define":84,"./_wks-ext":85}],96:[function(require,module,exports){
require('./_wks-define')('asyncIterator');
},{"./_wks-define":84}],97:[function(require,module,exports){
require('./_wks-define')('observable');
},{"./_wks-define":84}],98:[function(require,module,exports){
require('./es6.array.iterator');
var global        = require('./_global')
  , hide          = require('./_hide')
  , Iterators     = require('./_iterators')
  , TO_STRING_TAG = require('./_wks')('toStringTag');

for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
  var NAME       = collections[i]
    , Collection = global[NAME]
    , proto      = Collection && Collection.prototype;
  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}
},{"./_global":35,"./_hide":37,"./_iterators":50,"./_wks":86,"./es6.array.iterator":88}],99:[function(require,module,exports){
module.exports = "\n<app-modal id=\"alertModal\">\n    <div data-transclusion=\"content\">\n        <div class=\"withMargin\">\n            <div class=\"alert_body\">\n                {{message}}\n            </div>\n            <div>\n                <button data-click=\"close()\">{{i18n.ok}}</button>\n            </div>\n        </div>\n    </div>\n</app-modal>\n";

},{}],100:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _i18n = require('providers/i18n');

var _i18n2 = _interopRequireDefault(_i18n);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = RF.registerComponent('app-alert-dialog', {
    template: {
        type: 'string',
        value: require('./alertDialog.html')
    },
    message: '',
    i18n: _i18n2.default.getAll(),
    open: function open(message) {
        RF.getComponentById('alertModal').open();
        this.message = message;
    },
    close: function close() {
        RF.getComponentById('alertModal').close();
        this.message = null;
    }
});

},{"./alertDialog.html":99,"providers/i18n":162}],101:[function(require,module,exports){
module.exports = "<div\n        class=\"inlineBlock\"\n        data-click=\"click($event)\"\n        data-mousemove=\"mouseMove($event)\"\n        >\n    <div data-container class=\"inlineBlock\">\n        <svg viewBox=\"0 0 200 200\" width=\"30\" height=\"30\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\n            <circle cx=\"100\" cy=\"100\" r=\"100\" stroke=\"black\" stroke-width=\"1\" fill=\"white\"></circle>\n            <line id=\"line\" x1=\"100\" y1=\"100\"\n                  x2=\"200\" y2=\"100\"\n                  stroke=\"black\"\n                  stroke-width=\"2\"\n                  data-attributes=\"{transform:'rotate('+angleInDeg()+',100,100)'}\"\n                    >\n            </line>\n        </svg>\n    </div>\n    <div class=\"smallXX\" data-attributes=\"{title: object && (object[value]+' rad')}\">\n        {{angleInDeg()}}&deg;\n    </div>\n</div>";

},{}],102:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = RF.registerComponent('app-angle-picker', {
    getInitialState: function getInitialState() {
        return {
            object: { val: 0 },
            value: 'val'
        };
    },

    template: {
        type: 'string',
        value: require('./anglePicker.html')
    },

    angleInDeg: function angleInDeg() {
        if (!this.object) return 0;
        var res = this.object[this.value] * 180 / Math.PI % 360;
        return +res.toFixed(2) || 0;
    },

    calcAngleFromEvent: function calcAngleFromEvent(e) {
        if (!this.object) return;
        var el = this.$el.querySelector('[data-container]');
        var rect = el.getBoundingClientRect();
        var x = e.clientX - rect.left,
            y = e.clientY - rect.top;
        var angle = Math.atan2(y - 15, x - 15);
        if (angle < 0) angle = 2 * Math.PI + angle;
        angle = +angle.toFixed(2) || 0;
        this.object[this.value] = angle;
    },
    click: function click(e) {
        this.calcAngleFromEvent(e);
    },
    mouseMove: function mouseMove(e) {
        if (e.buttons !== 1) return;
        this.calcAngleFromEvent(e);
    }
});

},{"./anglePicker.html":101}],103:[function(require,module,exports){
module.exports = "<div>\n    <div\n        class=\"collapsible_header bold noSelect\"\n    >\n        <div class=\"table width100\">\n            <div class=\"row\">\n                <div class=\"cell width1\">\n                    <span\n                            class=\"collapsible_point noBrake\"\n                            data-click=\"toggle()\"\n                            data-class=\"{rotated:opened}\">▷</span>\n                </div>\n                <div class=\"cell\">\n                    <span\n                            data-click=\"toggle()\"\n                            >&nbsp;{{title}}</span>\n                </div>\n                <div class=\"cell width1\">\n                    <div data-if=\"crud && crud.create\" class=\"add\" data-click=\"crud.create(meta)\"></div>\n                </div>\n                <div class=\"cell width1\">\n                    <div data-if=\"crud && crud.editScript\" class=\"script\" data-click=\"crud.editScript(object)\"></div>\n                </div>\n                <div class=\"cell width1\">\n                    <div data-if=\"crud && crud.edit\" class=\"edit\" data-click=\"crud.edit(object,meta)\"></div>\n                </div>\n                <div class=\"cell width1\">\n                    <div data-if=\"crud && crud.delete\" class=\"delete\" data-click=\"crud.delete(object,meta)\"></div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div\n            class=\"collapsible_content\"\n            data-class=\"{opened:opened}\">\n        <div data-transclusion=\"content\"></div>\n    </div>\n</div>";

},{}],104:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var id = 0;

exports.default = RF.registerComponent('app-collapsible', {
    template: {
        type: 'string',
        value: require('./collapsible.html')
    },
    getInitialState: function getInitialState() {
        return {
            title: 'default',
            crud: '',
            object: '',
            meta: '',
            id: null,
            opened: false
        };
    },

    onMounted: function onMounted() {
        this.id = id;
        this.opened = localStorage['clps_' + this.id] == 'true';
        id++;
    },
    toggle: function toggle() {
        this.opened = !this.opened;
        localStorage['clps_' + this.id] = this.opened;
    }
});

},{"./collapsible.html":103}],105:[function(require,module,exports){
module.exports = "<div class=\"inlineBlock\">\r\n\r\n    <div\r\n            data-style=\"{\r\n                cursor: 'pointer',\r\n                width: 24 + 'px',\r\n                height:24 + 'px',\r\n                backgroundColor: model && model[field] && ('rgb('+model[field].r+','+model[field].g+','+model[field].b+')')\r\n            }\"\r\n            data-click=\"click()\"\r\n            >\r\n    </div>\r\n\r\n</div>\r\n\r\n";

},{}],106:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

require('./colorPickerDialog');

exports.default = RF.registerComponent('app-color-picker', {
    template: {
        type: 'string',
        value: require('./colorPicker.html')
    },
    getInitialState: function getInitialState() {
        return {
            model: { field: '' },
            field: 'field'
        };
    },
    click: function click() {
        RF.getComponentById('colorPickerDialog').open(this.model, this.field);
    }
});

},{"./colorPicker.html":105,"./colorPickerDialog":108}],107:[function(require,module,exports){
module.exports = "<app-modal id=\"colorPickerModal\">\n\n    <div data-transclusion=\"content\">\n\n        <table>\n            <tr>\n                <td>\n                    <input type=\"color\" data-model=\"currentColor.hex\" data-change=\"hexChanged()\"/>\n                </td>\n                <td>\n                    <input type=\"text\"  data-model=\"currentColor.hex\" data-keyup=\"hexChanged()\"/>\n                </td>\n                <td></td>\n            </tr>\n\n            <table class=\"width100\">\n                <tr\n                        data-for=\"item in colorEnums\">\n                    <td\n                            data-style=\"{\n                                color: item.left\n                            }\"\n                    >\n                        {{item.left}}\n                    </td>\n                    <td class=\"centerText\">\n                        <input class=\"vAlign\" type=\"range\" min=\"0\" max=\"255\" data-model=\"currentColor.RGB[item.key]\" data-input=\"rgbChanged()\" data-change=\"rgbChanged()\">\n                        <br/>\n                        <input class=\"small vAlign\" data-model=\"currentColor.RGB[item.key]\" data-change=\"rgbChanged()\">\n                        <hr/>\n                    </td>\n                    <td\n                            data-style=\"{\n                                color: item.right\n                            }\"\n                    >\n                        {{item.right}}\n                    </td>\n                    <td>\n                        <div data-style=\"{\n                            width: '5px',\n                            height: '5px',\n                            backgroundColor: getRawColor(currentColor.RGB,item.key)\n                        }\"></div>\n                    </td>\n                </tr>\n\n\n            </table>\n        </table>\n\n        <button\n                data-click=\"applyColor()\">\n            {{i18n.edit}}\n        </button>\n    </div>\n\n</app-modal>";

},{}],108:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _create = require('babel-runtime/core-js/object/create');

var _create2 = _interopRequireDefault(_create);

var _utils = require('providers/utils');

var _utils2 = _interopRequireDefault(_utils);

var _i18n = require('providers/i18n');

var _i18n2 = _interopRequireDefault(_i18n);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultColor = { r: 0, g: 0, b: 0 };
var colorEnums = [{ left: 'red', right: 'cyan', key: 'r' }, { left: 'green', right: 'magenta', key: 'g' }, { left: 'blue', right: 'yellow', key: 'b' }];

var cmp = RF.registerComponent('app-color-picker-dialog', {
    template: {
        type: 'string',
        value: require('./colorPickerDialog.html')
    },
    colorEnums: colorEnums,
    i18n: _i18n2.default.getAll(),
    getInitialState: function getInitialState() {
        return {
            currentColor: {
                RGB: {},
                hex: ''
            },
            model: { field: {} },
            field: 'field'
        };
    },
    open: function open(model, field) {
        var color = model && model[field] || (0, _create2.default)(defaultColor);
        this.model = model;
        this.field = field;
        this.currentColor.RGB.r = color.r;
        this.currentColor.RGB.g = color.g;
        this.currentColor.RGB.b = color.b;
        this.currentColor.hex = _utils2.default.rgbToHex(this.currentColor.RGB);
        RF.getComponentById('colorPickerModal').open();
    },
    hexChanged: function hexChanged() {
        this.currentColor.RGB = _utils2.default.hexToRgb(this.currentColor.hex);
    },
    rgbChanged: function rgbChanged() {
        this.currentColor.hex = _utils2.default.rgbToHex(this.currentColor.RGB);
    },
    getRawColor: function getRawColor(rgb, key) {
        var col = {
            r: key == 'r' ? rgb.r : 0,
            g: key == 'g' ? rgb.g : 0,
            b: key == 'b' ? rgb.b : 0
        };
        return _utils2.default.rgbToHex(col);
    },
    applyColor: function applyColor() {
        this.model[this.field] = this.currentColor.RGB;
        RF.getComponentById('colorPickerModal').close();
    }
});

// let el = document.createElement('app-color-picker-dialog');
// el.id = 'colorPickerDialog';
// document.body.appendChild(el);

exports.default = cmp;

},{"./colorPickerDialog.html":107,"babel-runtime/core-js/object/create":2,"providers/i18n":162,"providers/utils":169}],109:[function(require,module,exports){
module.exports = "\n<app-modal id=\"confirmModal\">\n    <div data-transclusion=\"content\">\n        <div class=\"withMargin\">\n            <div class=\"alert_body\">\n                {{message}}\n            </div>\n            <div>\n                <button data-click=\"confirmAndClose()\">{{i18n.confirm}}</button>\n                <button data-click=\"close()\">{{i18n.cancel}}</button>\n            </div>\n        </div>\n    </div>\n</app-modal>";

},{}],110:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _i18n = require('providers/i18n');

var _i18n2 = _interopRequireDefault(_i18n);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = RF.registerComponent('app-confirm-dialog', {
    template: {
        type: 'string',
        value: require('./confirmDialog.html')
    },
    message: 'default message',
    confirm: function confirm() {},
    i18n: _i18n2.default.getAll(),
    close: function close() {
        RF.getComponentById('confirmModal').close();
    },
    confirmAndClose: function confirmAndClose() {
        this.confirm();
        this.close();
    },
    open: function open(message, callback) {
        RF.getComponentById('confirmModal').open();
        this.message = message;
        this.confirm = callback;
    }
});

},{"./confirmDialog.html":109,"providers/i18n":162}],111:[function(require,module,exports){
module.exports = "<div>\n    <button>{{title}}</button>\n    <input  required accept=\"{{accept}}\" type=\"file\"/>\n</div>";

},{}],112:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = RF.registerComponent('app-input-file', {
    getInitialState: function getInitialState() {
        return {
            title: '',
            accept: '',
            onFilePicked: null
        };
    },
    template: {
        type: 'string',
        value: require('./inputFile.html')
    },
    onMount: function onMount() {
        var _this = this;

        var btn = this.$el.querySelector('button');
        var input = this.$el.querySelector('input');
        btn.onclick = function () {
            input.click();
        };
        input.onchange = function () {
            var file = input.files[0];
            var name = file.name.split('.')[0];
            var url = window.URL || window.webkitURL;
            var src = url.createObjectURL(file);
            _this.onFilePicked(src, file, name);
            RF.digest();
        };
    }
});

},{"./inputFile.html":111}],113:[function(require,module,exports){
module.exports = "<div class=\"dialogWrapper\" data-if=\"opened\">\n    <div class=\"fullscreen shadow\"></div>\n    <div class=\"dialog\">\n        <div class=\"dialogContent\">\n            <div class=\"dialogClose\">\n                <span data-click=\"close()\" class=\"pointer\">X</span>\n            </div>\n            <div class=\"withPadding\">\n                <div data-transclusion=\"content\"></div>\n            </div>\n        </div>\n    </div>\n</div>\n";

},{}],114:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = RF.registerComponent('app-modal', {
    template: {
        type: 'string',
        value: require('./modal.html')
    },
    getInitialState: function getInitialState() {
        return {
            opened: false
        };
    },
    close: function close() {
        this.opened = false;
    },
    open: function open() {
        this.opened = true;
    }
});

},{"./modal.html":113}],115:[function(require,module,exports){
'use strict';

require('components/modal/modal');

require('components/collapsible/collapsible');

require('components/alertDialog/alertDialog');

require('components/confirmDialog/confirmDialog');

require('components/inputFile/inputFile');

require('components/colorPicker/colorPicker');

require('components/anglePicker/anglePicker');

require('providers/userDefinedFns');

var _explorer = require('pages/explorer/explorer');

var _explorer2 = _interopRequireDefault(_explorer);

var _editor = require('pages/editor/editor');

var _editor2 = _interopRequireDefault(_editor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

RF.Router.setup({
    explorer: _explorer2.default,
    editor: _editor2.default
});

RF.applyBindings('body');
RF.Router.navigateTo('explorer');

},{"components/alertDialog/alertDialog":100,"components/anglePicker/anglePicker":102,"components/collapsible/collapsible":104,"components/colorPicker/colorPicker":106,"components/confirmDialog/confirmDialog":110,"components/inputFile/inputFile":112,"components/modal/modal":114,"pages/editor/editor":137,"pages/explorer/explorer":159,"providers/userDefinedFns":168}],116:[function(require,module,exports){
module.exports = "<div\n        class=\"height100 relative\"\n        data-if=\"editData.scriptEditorUrl\"\n        >\n\n    <div class=\"scriptEditorClose\" data-click=\"close()\">X</div>\n\n    <div style=\"height:10px;font-size: 10px;\">\n        {{editData.scriptEditorUrl}}\n    </div>\n    <div\n            id=\"scriptEditor\"\n            style=\"height:calc(100% - 10px)\"\n            >\n        <iframe\n                id=\"scriptEditorFrame\"\n                frameborder=\"0\"\n                class=\"block width100 height100 noOverFlow\"\n                src=\"/editor\"\n                ></iframe>\n    </div>\n</div>";

},{}],117:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _i18n = require('providers/i18n');

var _i18n2 = _interopRequireDefault(_i18n);

var _editData = require('providers/editData');

var _editData2 = _interopRequireDefault(_editData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = RF.registerComponent('app-script-editor', {
    template: {
        type: 'string',
        value: require('./scriptEditor.html')
    },
    editData: _editData2.default,
    i18n: _i18n2.default.getAll(),
    close: function close() {
        _editData2.default.scriptEditorUrl = '';
    }
});

},{"./scriptEditor.html":116,"providers/editData":161,"providers/i18n":162}],118:[function(require,module,exports){
module.exports = "\r\n<app-modal id=\"commonBehaviourModal\">\r\n\r\n    <div data-transclusion=\"content\">\r\n\r\n\r\n        <table class=\"width100\">\r\n            <tr>\r\n                <td class=\"borderBottom\">\r\n                    {{i18n.name}}\r\n                </td>\r\n                <td class=\"borderBottom\">\r\n                    {{editData.currCommonBehaviourInEdit.name}}\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td class=\"borderBottom\">\r\n                    {{i18n.description}}\r\n                </td>\r\n                <td class=\"borderBottom\">\r\n                    {{editData.currCommonBehaviourInEdit.description}}\r\n                </td>\r\n            </tr>\r\n            <tr data-for=\"value, key in editData.currCommonBehaviourInEdit.parameters\">\r\n                <td class=\"borderBottom\">\r\n                    {{key}}\r\n                </td>\r\n                <td class=\"borderBottom\">\r\n                    <input\r\n                            type=\"text\"\r\n                            data-model=\"editData.currCommonBehaviourInEdit.parameters[key]\"/>\r\n                </td>\r\n            </tr>\r\n            <tr data-if=\"utils.size(editData.currCommonBehaviourInEdit.parameters)==0\">\r\n                <td colspan=\"2\" class=\"borderBottom\">\r\n                    {{i18n.noDataToEdit}}\r\n                </td>\r\n            </tr>\r\n        </table>\r\n        <button\r\n                data-click=\"createOrEditCommonBehaviour(editData.currCommonBehaviourInEdit)\"\r\n                data-disabled=\"!form.valid()\">\r\n            {{editData.currCommonBehaviourInEdit.id?i18n.edit:i18n.create}}\r\n        </button>\r\n\r\n\r\n    </div>\r\n\r\n</app-modal>";

},{}],119:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _editData = require('providers/editData');

var _editData2 = _interopRequireDefault(_editData);

var _resource = require('providers/rest/resource');

var _resource2 = _interopRequireDefault(_resource);

var _i18n = require('providers/i18n');

var _i18n2 = _interopRequireDefault(_i18n);

var _utils = require('providers/utils');

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = RF.registerComponent('app-common-behaviour-dialog', {
    template: {
        type: 'string',
        value: require('./commonBehaviourDialog.html')
    },
    i18n: _i18n2.default.getAll(),
    utils: _utils2.default,
    editData: _editData2.default,
    form: { valid: function valid() {
            return true;
        } },

    createOrEditCommonBehaviour: function createOrEditCommonBehaviour() {
        var cb = _editData2.default.currCommonBehaviourInEdit;
        _resource2.default.save(cb).then(function (resp) {
            if (resp.created) {
                cb.id = resp.id;
                _editData2.default.commonBehaviourList.add(cb);
                _editData2.default.currGameObjectInEdit.commonBehaviour.add(cb);
                return _resource2.default.save(_editData2.default.currGameObjectInEdit);
            }
        }).then(function () {
            _editData2.default.currGameObjectInEdit.updateCloner();
            RF.getComponentById('commonBehaviourModal').close();
            RF.digest();
        }).catch(window.catchPromise);
    }
});

},{"./commonBehaviourDialog.html":118,"providers/editData":161,"providers/i18n":162,"providers/rest/resource":167,"providers/utils":169}],120:[function(require,module,exports){
module.exports = "<div>\n    <app-sound-dialog id=\"soundDialog\"></app-sound-dialog>\n    <app-particle-system-dialog></app-particle-system-dialog>\n    <app-font-dialog id=\"fontDialog\"></app-font-dialog>\n    <app-sprite-sheet-dialog id=\"spriteSheetDialog\"></app-sprite-sheet-dialog>\n    <app-game-object-dialog id=\"gameObjectDialog\"></app-game-object-dialog>\n\n\n    <app-scene-dialog/>\n    <app-layer-dialog/>\n</div>";

},{}],121:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _editData = require('providers/editData');

var _editData2 = _interopRequireDefault(_editData);

var _i18n = require('providers/i18n');

var _i18n2 = _interopRequireDefault(_i18n);

require('pages/editor/dialogs/soundDialog/soundDialog');

require('pages/editor/dialogs/fontDialog/fontDialog');

require('pages/editor/dialogs/spriteSheetDialog/spriteSheetDialog');

require('pages/editor/dialogs/gameObjectDialog/gameObjectDialog');

require('pages/editor/dialogs/particleSystemDialog/particleSystemDialog');

require('pages/editor/dialogs/particleSystemPreviewDialog/particleSystemPreviewDialog');

require('pages/editor/dialogs/commonBehaviourDialog/commonBehaviourDialog');

require('pages/editor/dialogs/frameAnimationDialog/frameAnimationDialog');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = RF.registerComponent('app-dialogs', {
    template: {
        type: 'string',
        value: require('./dialogs.html')
    },
    editData: _editData2.default,
    i18n: _i18n2.default.getAll()
});

},{"./dialogs.html":120,"pages/editor/dialogs/commonBehaviourDialog/commonBehaviourDialog":119,"pages/editor/dialogs/fontDialog/fontDialog":123,"pages/editor/dialogs/frameAnimationDialog/frameAnimationDialog":125,"pages/editor/dialogs/gameObjectDialog/gameObjectDialog":127,"pages/editor/dialogs/particleSystemDialog/particleSystemDialog":129,"pages/editor/dialogs/particleSystemPreviewDialog/particleSystemPreviewDialog":131,"pages/editor/dialogs/soundDialog/soundDialog":133,"pages/editor/dialogs/spriteSheetDialog/spriteSheetDialog":135,"providers/editData":161,"providers/i18n":162}],122:[function(require,module,exports){
module.exports = "<app-modal id=\"fontModal\">\n    <div data-transclusion=\"content\">\n        <table class=\"width100\">\n            <tr>\n                <td>\n                    {{i18n.selectFont}}\n                </td>\n                <td>\n                    <select\n                            required\n                            data-model=\"editData.currFontInEdit.fontFamily\" class=\"width100\">\n                        <option\n                                data-value=\"fnt.displayName\"\n                                data-for=\"fnt in systemFontList\">\n                            {{fnt.displayName}}\n                        </option>\n                    </select>\n                </td>\n            </tr>\n            <tr>\n                <td>\n                    {{i18n.name}}\n                </td>\n                <td>\n                    <input required\n                           data-model=\"editData.currFontInEdit.name\" class=\"width100\">\n                </td>\n            </tr>\n            <tr>\n                <td>\n                    {{i18n.fontSize}}\n                </td>\n                <td>\n                    <input required type=\"number\"\n                           min=\"1\"\n                           max=\"1000\"\n                           data-model=\"editData.currFontInEdit.fontSize\" class=\"width100\">\n                </td>\n            </tr>\n            <tr>\n                <td>\n                    {{i18n.fontColor}}\n                </td>\n                <td>\n                    <app-color-picker\n                        data-state=\"{\n                            model:editData.currFontInEdit,\n                            field:'fontColor'\n                        }\"\n                    ></app-color-picker>\n                </td>\n            </tr>\n            <tr>\n                <td colspan=\"2\">\n                    <input data-model=\"fontSample\" class=\"width100\"/>\n                </td>\n            </tr>\n            <tr>\n                <td colspan=\"2\">\n                    <div data-style='{\n                fontFamily:editData.currFontInEdit.fontFamily,\n                fontSize:editData.currFontInEdit.fontSize+\"px\",\n                color:utils.rgbToHex(editData.currFontInEdit.fontColor)\n            }'>{{fontSample}}</div>\n                </td>\n            </tr>\n        </table>\n\n        <button\n                data-disabled=\"!form.valid()\"\n                data-click=\"createOrEditFont(editData.currFontInEdit)\">\n            {{editData.currFontInEdit.id?i18n.edit:i18n.create}}\n        </button>\n    </div>\n</app-modal>\n\n\n";

},{}],123:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _editData = require('providers/editData');

var _editData2 = _interopRequireDefault(_editData);

var _fileSystem = require('providers/rest/fileSystem');

var _fileSystem2 = _interopRequireDefault(_fileSystem);

var _resource = require('providers/rest/resource');

var _resource2 = _interopRequireDefault(_resource);

var _i18n = require('providers/i18n');

var _i18n2 = _interopRequireDefault(_i18n);

var _chrome = require('providers/chrome');

var _chrome2 = _interopRequireDefault(_chrome);

var _utils = require('providers/utils');

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SYMBOL_PADDING = 4;
var fontSample = 'Test me! Text here';

var getFontContext = function getFontContext(arrFromTo, strFont, w) {
    function getFontHeight(strFont) {
        var parent = document.createElement("span");
        parent.appendChild(document.createTextNode("height!ДдЙЇ"));
        document.body.appendChild(parent);
        parent.style.cssText = "font: " + strFont + "; white-space: nowrap; display: inline;";
        var height = parent.offsetHeight;
        document.body.removeChild(parent);
        return height;
    }
    var cnv = document.createElement('canvas');
    var ctx = cnv.getContext('2d');
    ctx.font = strFont;
    var textHeight = getFontHeight(strFont) + 2 * SYMBOL_PADDING;
    var symbols = {};
    var currX = 0,
        currY = 0,
        cnvHeight = textHeight;
    for (var k = 0; k < arrFromTo.length; k++) {
        var arrFromToCurr = arrFromTo[k];
        for (var i = arrFromToCurr.from; i < arrFromToCurr.to; i++) {
            var currentChar = String.fromCharCode(i);

            ctx = cnv.getContext('2d');
            var textWidth = ctx.measureText(currentChar).width;
            textWidth += 2 * SYMBOL_PADDING;
            if (textWidth == 0) continue;
            if (currX + textWidth > w) {
                currX = 0;
                currY += textHeight;
                cnvHeight = currY + textHeight;
            }
            var symbol = {};
            symbol.x = ~~currX + SYMBOL_PADDING;
            symbol.y = ~~currY + SYMBOL_PADDING;
            symbol.width = ~~textWidth - 2 * SYMBOL_PADDING;
            symbol.height = textHeight - 2 * SYMBOL_PADDING;
            symbols[currentChar] = symbol;
            currX += textWidth;
        }
    }
    return { symbols: symbols, width: w, height: cnvHeight };
};

var getFontImage = function getFontImage(symbolsContext, strFont, color) {
    var cnv = document.createElement('canvas');
    cnv.width = symbolsContext.width;
    cnv.height = symbolsContext.height;
    var ctx = cnv.getContext('2d');
    ctx.font = strFont;
    ctx.fillStyle = color;
    ctx.textBaseline = "top";
    var symbols = symbolsContext.symbols;
    for (var symbol in symbols) {
        if (!symbols.hasOwnProperty(symbol)) continue;
        ctx.fillText(symbol, symbols[symbol].x, symbols[symbol].y);
    }
    return cnv.toDataURL();
};

exports.default = RF.registerComponent('app-font-dialog', {
    template: {
        type: 'string',
        value: require('./fontDialog.html')
    },
    form: { valid: function valid() {
            return true;
        } },
    editData: _editData2.default,
    i18n: _i18n2.default.getAll(),
    utils: _utils2.default,
    fontSample: fontSample,
    systemFontList: [],

    open: function open() {
        if (!this.systemFontList.length) {
            var self = this;
            _chrome2.default.requestToApi({ method: 'getFontList' }, function (list) {
                self.systemFontList = list;
                RF.digest();
            });
        }
        RF.getComponentById('fontModal').open();
    },
    createOrEditFont: function createOrEditFont(model) {
        var self = this;
        var strFont = model.fontSize + 'px' + ' ' + model.fontFamily;
        model.fontContext = getFontContext([{ from: 32, to: 150 }, { from: 1040, to: 1116 }], strFont, 320);
        var file = _utils2.default.dataURItoBlob(getFontImage(model.fontContext, strFont, _utils2.default.rgbToHex(model.fontColor)));

        _promise2.default.resolve().then(function () {
            return _fileSystem2.default.uploadFile(file, {
                type: model.type,
                fileName: model.name + '.png'
            });
        }).then(function () {
            return _resource2.default.save(model);
        }).then(function (resp) {
            if (resp.created) {
                model.id = resp.id;
                _editData2.default[model.type + 'List'].add(model);
            } else if (resp.updated) {
                model.updateCloner();
            }
            RF.getComponentById('fontModal').close();
            RF.digest();
        });
    }
});

},{"./fontDialog.html":122,"babel-runtime/core-js/promise":5,"providers/chrome":160,"providers/editData":161,"providers/i18n":162,"providers/rest/fileSystem":164,"providers/rest/resource":167,"providers/utils":169}],124:[function(require,module,exports){
module.exports = "<app-modal id=\"frameAnimationModal\">\r\n\r\n    <div data-transclusion=\"content\">\r\n        <table class=\"width100\">\r\n            <tr>\r\n                <td>\r\n                    {{i18n.name}}\r\n                </td>\r\n                <td>\r\n                    <input\r\n                            required\r\n                            data-model=\"editData.currFrameAnimationInEdit.name\">\r\n                </td>\r\n                <td rowspan=\"3\">\r\n                    <div style=\"max-height: 80vh;max-width:80vw;overflow: scroll;\"\r\n                    >\r\n                        {{editData.currFrameAnimationInEdit._gameObject.currFrameIndex||0}}\r\n\r\n                        <div data-style=\"\r\n                        utils.merge(\r\n                            utils.getGameObjectCss(editData.currFrameAnimationInEdit._gameObject),\r\n                            {border:'1px solid blue'}\r\n                        )\">\r\n                        </div>\r\n\r\n                        <div>\r\n                            <button\r\n                                    data-click=\"playAnimation()\"\r\n                                    data-disabled=\"!form.valid()\" class=\"inlineBlock withMargin\">{{i18n.playAnim}}</button>\r\n                            <button\r\n                                    data-click=\"stopAnimation()\"\r\n                                    data-disabled=\"!form.valid()\" class=\"inlineBlock withMargin\">{{i18n.stopAnim}}</button>\r\n                        </div>\r\n\r\n                        <div>\r\n\r\n                            <button\r\n                                    data-click=\"previousFrame()\"\r\n                                    data-disabled=\"!form.valid()\" class=\"inlineBlock withMargin\"> << </button>\r\n\r\n                            <button\r\n                                    data-click=\"nextFrame()\"\r\n                                    data-disabled=\"!form.valid()\" class=\"inlineBlock withMargin\"> >> </button>\r\n                        </div>\r\n\r\n\r\n                        <div class=\"relative\"\r\n                             data-style=\"\r\n                              {\r\n                                'background-image':     'url('+editData.projectName+'/'+editData.currFrameAnimationInEdit._gameObject.spriteSheet.resourcePath+')',\r\n                                'width':                editData.currFrameAnimationInEdit._gameObject.spriteSheet.width+'px',\r\n                                'height':               editData.currFrameAnimationInEdit._gameObject.spriteSheet.height+'px'\r\n                              }\">\r\n                            <div\r\n                                    data-for=\"v,i in getLoopArr()\"\r\n                                    data-style=\"{\r\n                                            'display':        'inline-block',\r\n                                            'left':           editData.currFrameAnimationInEdit._gameObject.spriteSheet.getFramePosX(i)+'px',\r\n                                            'top':            editData.currFrameAnimationInEdit._gameObject.spriteSheet.getFramePosY(i)+'px',\r\n                                            'position':       'absolute',\r\n                                            'text-align':     'left',\r\n                                            'border':         '1px solid red',\r\n                                            'width':          editData.currFrameAnimationInEdit._gameObject.spriteSheet._frameWidth+'px',\r\n                                            'height':         editData.currFrameAnimationInEdit._gameObject.spriteSheet._frameHeight+'px'\r\n                                      }\">{{i}}</div>\r\n                        </div>\r\n                    </div>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td>\r\n                    {{i18n.duration}}\r\n                </td>\r\n                <td>\r\n                    <input\r\n                            type=\"number\"\r\n                            min=\"1\"\r\n                            required\r\n                            data-model=\"editData.currFrameAnimationInEdit.duration\">\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td>\r\n\r\n                    <table>\r\n                        <tr>\r\n                            <td>\r\n                                {{i18n.frames}}\r\n                            </td>\r\n                            <td>\r\n                                <button data-click=\"setAllIndexes()\">{{i18n.all}}</button>\r\n                            </td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>\r\n                                {{i18n.from}}\r\n                            </td>\r\n                            <td>\r\n                                <input\r\n                                        type=\"number\"\r\n                                        data-model=\"from\"\r\n                                        min=\"0\"\r\n                                        data-keyup=\"setRangeIndexes()\">\r\n                            </td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>\r\n                                {{i18n.to}}\r\n                            </td>\r\n                            <td>\r\n                                <input\r\n                                        type=\"number\"\r\n                                        min=\"0\"\r\n                                        data-model=\"to\"\r\n                                        data-change=\"setRangeIndexes()\">\r\n                            </td>\r\n                        </tr>\r\n                    </table>\r\n\r\n                </td>\r\n                <td>\r\n                   <textarea\r\n                           required\r\n                           data-model=\"frames\">\r\n                   </textarea>\r\n                </td>\r\n            </tr>\r\n        </table>\r\n        <button\r\n                data-click=\"createOrEditFrameAnimation()\"\r\n                data-disabled=\"!form.valid()\">\r\n            {{editData.currFrameAnimationInEdit.id?i18n.edit:i18n.create}}\r\n        </button>\r\n    </div>\r\n\r\n</app-modal>";

},{}],125:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _editData = require('providers/editData');

var _editData2 = _interopRequireDefault(_editData);

var _resource = require('providers/rest/resource');

var _resource2 = _interopRequireDefault(_resource);

var _i18n = require('providers/i18n');

var _i18n2 = _interopRequireDefault(_i18n);

var _fileSystem = require('providers/rest/fileSystem');

var _fileSystem2 = _interopRequireDefault(_fileSystem);

var _utils = require('providers/utils');

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = RF.registerComponent('app-frame-animation-dialog', {
    template: {
        type: 'string',
        value: require('./frameAnimationDialog.html')
    },
    form: { valid: function valid() {
            return true;
        } },
    editData: _editData2.default,
    utils: _utils2.default,
    i18n: _i18n2.default.getAll(),

    isStopped: true,
    from: 0, to: 1,
    frames: '',

    open: function open() {
        this.isStopped = true;
        this.frames = this.editData.currFrameAnimationInEdit.frames.join(',');
        this.editData.currFrameAnimationInEdit._gameObject = this.editData.currGameObjectInEdit.clone();
        RF.getComponentById('frameAnimationModal').open();
    },
    allIndexes: function allIndexes() {
        var res = this.utils.getArray(this.editData.currGameObjectInEdit.spriteSheet._numOfFrames);
        return res.join(',');
    },
    setAllIndexes: function setAllIndexes() {
        this.frames = this.allIndexes();
    },
    setRangeIndexes: function setRangeIndexes() {
        this.frames = _utils2.default.range(+this.from, +this.to).join(',');
        console.log(this.from, this.to);
        console.log(_utils2.default.range(+this.from, +this.to));
    },
    playAnimation: function playAnimation() {
        var self = this;
        self.isStopped = false;
        try {
            self.editData.currFrameAnimationInEdit.frames = JSON.parse('[' + self.frames + ']');
        } catch (e) {
            console.error(e);
            return;
        }
        self.editData.currFrameAnimationInEdit.play();
        setTimeout(function _anim() {
            self.editData.currFrameAnimationInEdit.update(new Date().getTime());

            var i = self.editData.currFrameAnimationInEdit._gameObject.currFrameIndex;
            self.editData.currFrameAnimationInEdit._gameObject.setFrameIndex(i);

            if (self.isStopped) {
                self.isStopped = false;
                return;
            }
            RF.digest();
            if (RF.getComponentById('frameAnimationModal').opened) setTimeout(_anim, 50);
        }, 0);
    },
    stopAnimation: function stopAnimation() {
        this.isStopped = true;
    },
    nextFrame: function nextFrame() {
        var self = this;
        self.stopAnimation();
        self.editData.currFrameAnimationInEdit.nextFrame();
    },
    previousFrame: function previousFrame() {
        var self = this;
        self.stopAnimation();
        self.editData.currFrameAnimationInEdit.previousFrame();
    },
    getLoopArr: function getLoopArr() {
        if (!_editData2.default.currFrameAnimationInEdit._gameObject) _editData2.default.currFrameAnimationInEdit._gameObject = { spriteSheet: {} }; // todo dirty
        var lastIndex = _editData2.default.currFrameAnimationInEdit._gameObject.spriteSheet.numOfFramesH * _editData2.default.currFrameAnimationInEdit._gameObject.spriteSheet.numOfFramesV;
        return _utils2.default.getArray(lastIndex);
    },

    createOrEditFrameAnimation: function createOrEditFrameAnimation() {
        var self = this;
        var fa = _editData2.default.currFrameAnimationInEdit;
        self.editData.currFrameAnimationInEdit.frames = JSON.parse('[' + self.frames + ']');

        _resource2.default.save(fa).then(function (resp) {
            if (resp.created) {
                fa.id = resp.id;
                _editData2.default.frameAnimationList.add(fa);
                _editData2.default.currGameObjectInEdit.frameAnimations.add(fa);
                return _resource2.default.save(_editData2.default.currGameObjectInEdit);
            } else {
                fa.updateCloner();
            }
        }).then(function () {
            _editData2.default.currGameObjectInEdit.updateCloner();
            RF.getComponentById('frameAnimationModal').close();
            RF.digest();
        }).catch(window.catchPromise);
    }
});

},{"./frameAnimationDialog.html":124,"providers/editData":161,"providers/i18n":162,"providers/rest/fileSystem":164,"providers/rest/resource":167,"providers/utils":169}],126:[function(require,module,exports){
module.exports = "\r\n\r\n<app-modal id=\"gameObjectModal\">\r\n    <div data-transclusion=\"content\">\r\n\r\n        <table class=\"width100\">\r\n            <tr>\r\n                <td>\r\n                    {{i18n.name}}\r\n                </td>\r\n                <td>\r\n                    <input\r\n                            required\r\n                            data-model=\"editData.currGameObjectInEdit.name\"/>\r\n                </td>\r\n                <td></td>\r\n                <td rowspan=\"5\">\r\n                    <div class=\"relative\"\r\n                         style=\"\r\n                        display: inline-block;\r\n                        overflow: scroll;\r\n                        max-width:60vw;\r\n                        max-height:60vh;\r\n                    \"\r\n                    >\r\n\r\n\r\n                        <div data-style=\"\r\n                    utils.merge(\r\n                        utils.getGameObjectCss(editData.currGameObjectInEdit),\r\n                        {\r\n                            'border':'1px solid blue',\r\n                            'opacity':editData.currGameObjectInEdit.alpha\r\n                        }\r\n                    )\r\n                \"></div>\r\n                    </div>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td>\r\n                    {{i18n.spriteSheet}}\r\n                </td>\r\n                <td>\r\n                    <select\r\n                            data-change=\"onSpriteSheetSelected(editData.currGameObjectInEdit.spriteSheet.id)\"\r\n                            required\r\n                            data-model=\"editData.currGameObjectInEdit.spriteSheet.id\">\r\n                        <option data-value=\"item.id\" data-for=\"item in editData.spriteSheetList.rs\">{{item.name}}</option>\r\n                    </select>\r\n                </td>\r\n                <td>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td>\r\n                    {{i18n.groupName}}\r\n                </td>\r\n                <td>\r\n                    <input\r\n                            data-model=\"editData.currGameObjectInEdit.groupName\"/>\r\n                </td>\r\n                <td></td>\r\n            </tr>\r\n            <tr>\r\n                <td>\r\n                    {{i18n.rigid}}\r\n                </td>\r\n                <td>\r\n                    <input\r\n                            type=\"checkbox\"\r\n                            data-model=\"editData.currGameObjectInEdit.rigid\"/>\r\n                </td>\r\n                <td></td>\r\n            </tr>\r\n            <tr>\r\n                <td>\r\n                    {{i18n.width}}\r\n                </td>\r\n                <td>\r\n                    <input\r\n                            type=\"number\"\r\n                            required\r\n                            data-model=\"editData.currGameObjectInEdit.width\"/>\r\n                </td>\r\n                <td></td>\r\n            </tr>\r\n            <tr>\r\n                <td>\r\n                    {{i18n.height}}\r\n                </td>\r\n                <td>\r\n                    <input\r\n                            type=\"number\"\r\n                            required\r\n                            data-model=\"editData.currGameObjectInEdit.height\"/>\r\n                </td>\r\n                <td></td>\r\n            </tr>\r\n            <tr>\r\n                <td>\r\n                    {{i18n.angle}}\r\n                </td>\r\n                <td>\r\n                    <input\r\n                            step=\"0.1\"\r\n                            type=\"number\"\r\n                            required\r\n                            data-model=\"editData.currGameObjectInEdit.angle\"/>\r\n                </td>\r\n                <td align=\"left\">\r\n                    <div class=\"inlineBlock\">\r\n                        <app-angle-picker\r\n                                data-state=\"{\r\n                        object: editData.currGameObjectInEdit,\r\n                        value: 'angle'\r\n                    }\"\r\n                        ></app-angle-picker>\r\n                    </div>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td>\r\n                    alpha\r\n                </td>\r\n                <td>\r\n                    <input\r\n                            type=\"number\"\r\n                            min=\"0\"\r\n                            max=\"1\"\r\n                            step=\"0.1\"\r\n                            required\r\n                            data-model=\"editData.currGameObjectInEdit.alpha\"/>\r\n                </td>\r\n                <td>\r\n                    <input\r\n                            type=\"range\"\r\n                            min=\"0\"\r\n                            max=\"1\"\r\n                            step=\"0.1\"\r\n                            data-model=\"editData.currGameObjectInEdit.alpha\"/>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td>\r\n                    {{i18n.currFrameIndex}}\r\n                </td>\r\n                <td>\r\n                    <input type=\"number\"\r\n                           min=\"0\"\r\n                           data-change=\"refreshGameObjectFramePreview(editData.currGameObjectInEdit,editData.currGameObjectInEdit.currFrameIndex)\"\r\n                           required\r\n                           data-model=\"editData.currGameObjectInEdit.currFrameIndex\"/>\r\n                </td>\r\n                <td></td>\r\n            </tr>\r\n            <tr>\r\n                <td>\r\n                    {{i18n.frAnimations}}\r\n                </td>\r\n                <td>\r\n                    <div class=\"table width100\">\r\n                        <div class=\"row\" data-for=\"animItm in editData.currGameObjectInEdit.frameAnimations.rs\">\r\n                            <div class=\"cell vAlign\">\r\n                                <span>{{animItm.name}}</span>\r\n                            </div>\r\n                            <div class=\"cell vAlign rightAlign pointer\" data-click=\"editFrameAnimation(animItm)\">\r\n                                {{i18n.edit}}\r\n                            </div>\r\n                            <div class=\"cell pointer vAlign rightAlign\" data-click=\"deleteFrameAnimation(animItm)\">\r\n                                X\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </td>\r\n                <td align=\"right\">\r\n                    <button\r\n                            class=\"inlineBlock\"\r\n                            data-disabled=\"!editData.currGameObjectInEdit.id\"\r\n                            data-click=\"createFrameAnimation()\">+</button>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td>\r\n                    {{i18n.commonBehaviour}}\r\n                </td>\r\n                <td>\r\n                    <div class=\"table width100\">\r\n                        <div class=\"row\" data-for=\"itm in editData.currGameObjectInEdit.commonBehaviour.rs\">\r\n                            <div class=\"cell vAlign\">\r\n                                <span>{{itm.name}}</span>\r\n                            </div>\r\n                            <div class=\"cell vAlign rightAlign pointer\" data-click=\"editCommonBehaviour(itm)\">\r\n                                {{i18n.edit}}\r\n                            </div>\r\n                            <div class=\"cell pointer vAlign rightAlign\" data-click=\"deleteCommonBehaviour(itm)\">\r\n                                X\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </td>\r\n                <td>\r\n                    <table class=\"width100\">\r\n                        <tr>\r\n                            <td>\r\n                                <select data-model=\"selectedBehaviourId\">\r\n                                    <option value=\"\">-</option>\r\n                                    <option\r\n                                            data-disabled=\"editData.currGameObjectInEdit.commonBehaviour.has && editData.currGameObjectInEdit.commonBehaviour.has({name:cb.name})\"\r\n                                            data-value=\"cb.name\"\r\n                                            data-for=\"cb in editData.commonBehaviourProto.rs\">\r\n                                        {{cb.name}}\r\n                                    </option>\r\n                                </select>\r\n                            </td>\r\n                            <td align=\"right\">\r\n                                <button\r\n                                        class=\"inlineBlock\"\r\n                                        data-disabled=\"!editData.currGameObjectInEdit.id || !selectedBehaviourId\"\r\n                                        data-click=\"createCommonBehaviour(selectedBehaviourId)\">\r\n                                    +\r\n                                </button>\r\n                            </td>\r\n                        </tr>\r\n                    </table>\r\n                </td>\r\n            </tr>\r\n        </table>\r\n        <button\r\n                data-disabled=\"!form.valid()\"\r\n                data-click=\"createOrEditGameObject(editData.currGameObjectInEdit)\">\r\n            {{editData.currGameObjectInEdit.id?i18n.edit:i18n.create}}\r\n        </button>\r\n\r\n    </div>\r\n</app-modal>\r\n\r\n\r\n";

},{}],127:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _editData = require('providers/editData');

var _editData2 = _interopRequireDefault(_editData);

var _resource = require('providers/rest/resource');

var _resource2 = _interopRequireDefault(_resource);

var _i18n = require('providers/i18n');

var _i18n2 = _interopRequireDefault(_i18n);

var _fileSystem = require('providers/rest/fileSystem');

var _fileSystem2 = _interopRequireDefault(_fileSystem);

var _utils = require('providers/utils');

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FrameAnimation = _require('frameAnimation');

exports.default = RF.registerComponent('app-game-object-dialog', {
    template: {
        type: 'string',
        value: require('./gameObjectDialog.html')
    },
    form: { valid: function valid() {
            return true;
        } },
    editData: _editData2.default,
    i18n: _i18n2.default.getAll(),
    utils: _utils2.default,
    selectedBehaviourId: '',

    // open: function(){ // not used at this dialog
    // },
    createOrEditGameObject: function createOrEditGameObject(g) {
        var self = this;
        _resource2.default.save(g).then(function (resp) {
            if (resp.created) {
                g.id = resp.id;
                _editData2.default.gameObjectList.add(g);
                console.log(_editData2.default.gameObjectList);
                return resp;
            } else if (resp.updated) {
                g.updateCloner();
            }
        }).then(function (resp) {
            if (resp && resp.created) return _fileSystem2.default.createFile('script/gameObject/' + g.name + '.js', document.getElementById('defaultCodeScript').textContent);
        }).then(function () {
            RF.getComponentById('gameObjectModal').close();
            RF.digest();
        }).catch(window.catchPromise);
    },
    refreshGameObjectFramePreview: function refreshGameObjectFramePreview(gameObject, ind) {
        var spriteSheet = gameObject.spriteSheet;
        if (!spriteSheet) return;
        var maxNumOfFrame = spriteSheet.numOfFramesH * spriteSheet.numOfFramesV - 1;
        if (this.editData.currGameObjectInEdit.currFrameIndex >= maxNumOfFrame) {
            this.editData.currGameObjectInEdit.currFrameIndex = 0;
            ind = 0;
        }
        gameObject.setFrameIndex(ind);
    },
    createFrameAnimation: function createFrameAnimation() {
        this.editData.currFrameAnimationInEdit = new FrameAnimation(new FrameAnimation().toJSON());
        RF.getComponentById('frameAnimationDialog').open();
    },
    editFrameAnimation: function editFrameAnimation(fa) {
        this.editData.currFrameAnimationInEdit = fa.clone();
        RF.getComponentById('frameAnimationDialog').open();
    },
    deleteFrameAnimation: function deleteFrameAnimation(fa) {
        var _this = this;

        _utils2.default.deleteModel(fa, function () {
            _this.editData.currGameObjectInEdit.frameAnimations.remove({ id: fa.id });
            _this.editData.currGameObjectInEdit.updateCloner();
            _resource2.default.save(_this.editData.currGameObjectInEdit);
        });
    },

    onSpriteSheetSelected: function onSpriteSheetSelected(sprId) {
        var gameObject = _editData2.default.currGameObjectInEdit;
        var spriteSheet = _editData2.default.spriteSheetList.find({ id: sprId });
        if (!spriteSheet) return;
        spriteSheet = spriteSheet.clone();
        //if (!gameObject.name) gameObject.name = spriteSheet.name;
        //spriteSheet.calcFrameSize();
        gameObject.width = ~~(spriteSheet.width / spriteSheet.numOfFramesH);
        gameObject.height = ~~(spriteSheet.height / spriteSheet.numOfFramesV);
        gameObject.spriteSheet = spriteSheet;
    },

    createCommonBehaviour: function createCommonBehaviour(selectedBehaviourName) {
        if (_editData2.default.currGameObjectInEdit.commonBehaviour.find({ name: selectedBehaviourName })) {
            alertEx(_i18n2.default.get('objectAlreadyAdded'));
            return;
        }
        this.editData.currCommonBehaviourInEdit = this.editData.commonBehaviourProto.find({ name: selectedBehaviourName }).clone();
        RF.getComponentById('commonBehaviourModal').open();
    },
    editCommonBehaviour: function editCommonBehaviour(cb) {
        this.editData.currCommonBehaviourInEdit = cb.clone();
        RF.getComponentById('commonBehaviourModal').open();
    },
    deleteCommonBehaviour: function deleteCommonBehaviour(cb) {
        var self = this;
        window.confirmEx(this.i18n.confirmQuestion(cb), function () {
            _promise2.default.resolve().then(function () {
                self.editData.commonBehaviourList.remove({ id: cb.id });
                return _resource2.default.remove(cb);
            }).then(function () {
                self.editData.currGameObjectInEdit.fixateState();
                self.editData.currGameObjectInEdit.commonBehaviour.remove({ id: cb.id });
                self.editData.currGameObjectInEdit.updateCloner();
                return _resource2.default.save(self.editData.currGameObjectInEdit.toJSON_Patched());
            }).catch(window.catchPromise);
        });
    }
});

},{"./gameObjectDialog.html":126,"babel-runtime/core-js/promise":5,"providers/editData":161,"providers/i18n":162,"providers/rest/fileSystem":164,"providers/rest/resource":167,"providers/utils":169}],128:[function(require,module,exports){
module.exports = "\n<app-modal id=\"particleSystemModal\">\n    <div data-transclusion=\"content\">\n\n        <table class=\"width100\">\n            <tr>\n                <td>\n                    {{i18n.name}}\n                </td>\n                <td>\n\n                </td>\n                <td>\n                    <input\n                            required\n                            data-model=\"editData.currParticleSystemInEdit.name\"/>\n                </td>\n            </tr>\n            <tr>\n                <td rowspan=\"2\">\n                    numOfParticlesToEmit\n                </td>\n                <td>\n                    from\n                </td>\n                <td>\n                    <input\n                            required\n                            type=\"number\"\n                            data-model=\"editData.currParticleSystemInEdit.numOfParticlesToEmit.from\"/>\n                </td>\n            </tr>\n            <tr>\n                <td>\n                    to\n                </td>\n                <td>\n                    <input\n                            required\n                            type=\"number\"\n                            data-model=\"editData.currParticleSystemInEdit.numOfParticlesToEmit.to\"/>\n                </td>\n            </tr>\n            <tr>\n                <td rowspan=\"2\">\n                    particleVelocity\n                </td>\n                <td>\n                    from\n                </td>\n                <td>\n                    <input\n                            required\n                            type=\"number\"\n                            data-model=\"editData.currParticleSystemInEdit.particleVelocity.from\"/>\n                </td>\n            </tr>\n            <tr>\n                <td>\n                    to\n                </td>\n                <td>\n                    <input\n                            required\n                            type=\"number\"\n                            data-model=\"editData.currParticleSystemInEdit.particleVelocity.to\"/>\n                </td>\n            </tr>\n\n            <tr>\n                <td rowspan=\"2\">\n                    particleLiveTime\n                </td>\n                <td>\n                    from\n                </td>\n                <td>\n                    <input\n                            required\n                            type=\"number\"\n                            data-model=\"editData.currParticleSystemInEdit.particleLiveTime.from\"/>\n                </td>\n            </tr>\n            <tr>\n                <td>\n                    to\n                </td>\n                <td>\n                    <input\n                            required\n                            type=\"number\"\n                            data-model=\"editData.currParticleSystemInEdit.particleLiveTime.to\"/>\n                </td>\n            </tr>\n\n            <tr>\n                <td>\n                    emissionRadius\n                </td>\n                <td></td>\n                <td>\n                    <input\n                            required\n                            type=\"number\"\n                            data-model=\"editData.currParticleSystemInEdit.emissionRadius\"/>\n                </td>\n            </tr>\n\n            <tr>\n                <td>\n                    particleAngle\n                </td>\n                <td>\n                    from / to\n                </td>\n                <td>\n                    <app-angle-picker\n                            data-state=\"{\n                        object:editData.currParticleSystemInEdit.particleAngle,\n                        value:'from'\n                    }\"\n                    ></app-angle-picker>\n                    <app-angle-picker\n                            data-state=\"{\n                        object:editData.currParticleSystemInEdit.particleAngle,\n                        value:'to'\n                    }\"\n                    ></app-angle-picker>\n                </td>\n            </tr>\n            <tr>\n                <td></td>\n                <td>\n                    {{i18n.gameObject}}\n                </td>\n                <td>\n\n                    <table>\n                        <tr>\n                            <td>\n                                <select\n                                        required\n                                        data-change=\"onGameObjectIdChanged(editData.currParticleSystemInEdit.gameObject.id)\"\n                                        data-model=\"editData.currParticleSystemInEdit.gameObject.id\"\n                                >\n                                    <option\n                                            data-value=\"item.id\"\n                                            data-for=\"item in editData.gameObjectList.rs\">{{item.name}}</option>\n                                </select>\n                            </td>\n                            <td>\n                                <div data-style=\"\n                                utils.merge(\n                                    utils.getGameObjectCss(editData.currParticleSystemInEdit.gameObject),\n                                    {\n                                        zoom:utils.calcZoom(editData.currParticleSystemInEdit.gameObject)\n                                    }\n                               )\">\n                                </div>\n                            </td>\n                        </tr>\n                    </table>\n\n\n                </td>\n            </tr>\n\n        </table>\n\n        <button\n                data-disabled=\"!form.valid()\"\n                data-click=\"createOrEditPs(editData.currParticleSystemInEdit)\">\n            {{editData.currParticleSystemInEdit.id?i18n.edit:i18n.create}}\n        </button>\n\n        <button\n                data-disabled=\"!form.valid()\"\n                data-click=\"showPreview()\">\n            {{i18n.preview}}\n        </button>\n\n    </div>\n</app-modal>";

},{}],129:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _editData = require('providers/editData');

var _editData2 = _interopRequireDefault(_editData);

var _resource = require('providers/rest/resource');

var _resource2 = _interopRequireDefault(_resource);

var _utils = require('providers/utils');

var _utils2 = _interopRequireDefault(_utils);

var _i18n = require('providers/i18n');

var _i18n2 = _interopRequireDefault(_i18n);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.editData = _editData2.default;

exports.default = RF.registerComponent('app-particle-system-dialog', {
    template: {
        type: 'string',
        value: require('./particleSystemDialog.html')
    },
    form: { valid: function valid() {
            return true;
        } },
    editData: _editData2.default,
    utils: _utils2.default,
    i18n: _i18n2.default.getAll(),
    onGameObjectIdChanged: function onGameObjectIdChanged(id) {
        _editData2.default.currParticleSystemInEdit.gameObject = _editData2.default.gameObjectList.find({ id: id }).clone();
    },
    showPreview: function showPreview() {
        RF.getComponentById('particleSystemPreviewDialog').open();
    },
    createOrEditPs: function createOrEditPs(model) {
        var self = this;
        _promise2.default.resolve().then(function () {
            return _resource2.default.save(model);
        }).then(function (resp) {
            if (resp.created) {
                model.id = resp.id;
                _editData2.default[model.type + 'List'].add(model);
            } else if (resp.updated) {
                model.updateCloner();
            }
            RF.getComponentById('particleSystemModal').close();
            RF.digest();
        });
    }
});

},{"./particleSystemDialog.html":128,"babel-runtime/core-js/promise":5,"providers/editData":161,"providers/i18n":162,"providers/rest/resource":167,"providers/utils":169}],130:[function(require,module,exports){
module.exports = "<app-modal id=\"particleSystemPreviewModal\">\n    <div data-transclusion=\"content\">\n        <div>\n            {{i18n.preview}} {{i18n.particleSystem}}\n            <span class=\"underLine\">{{editData.currParticleSystemInEdit.name}}</span>\n        </div>\n        <div\n                data-click=\"emit($event)\"\n                data-mousemove=\"$event.buttons==1 && emit($event)\"\n                class=\"subFullScreen relative noOverFlow\">\n            <div\n                    data-for=\"item in editData.currParticleSystemInEdit._particles\"\n                    data-style=\"utils.merge(\n                            utils.getGameObjectCss(item),\n                            {\n                                position:'absolute',\n                                left:item.pos.x+'px',\n                                top: item.pos.y+'px',\n                                pointerEvents:'none'\n                            }\n                    )\"\n            >\n            </div>\n        </div>\n        <div>\n            <button data-click=\"close()\">{{i18n.close}}</button>\n        </div>\n    </div>\n</app-modal>\n\n\n";

},{}],131:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _editData = require('providers/editData');

var _editData2 = _interopRequireDefault(_editData);

var _i18n = require('providers/i18n');

var _i18n2 = _interopRequireDefault(_i18n);

var _utils = require('providers/utils');

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var tid = void 0;

exports.default = RF.registerComponent('app-particle-system-preview-dialog', {
    template: {
        type: 'string',
        value: require('./particleSystemPreviewDialog.html')
    },
    editData: _editData2.default, utils: _utils2.default,
    i18n: _i18n2.default.getAll(),

    open: function open() {
        RF.getComponentById('particleSystemPreviewModal').open();
        this.run();
    },
    close: function close() {
        RF.getComponentById('particleSystemPreviewModal').close();
        clearInterval(tid);
    },
    run: function run() {
        var prevTime = null;

        if (!_editData2.default.currParticleSystemInEdit._particles) _editData2.default.currParticleSystemInEdit._particles = [];

        var update = function update() {

            var currTime = Date.now();
            if (!prevTime) prevTime = currTime;
            var delta = currTime - prevTime;
            prevTime = currTime;
            _editData2.default.currParticleSystemInEdit._particles.forEach(function (p) {

                p._currFrameAnimation && p._currFrameAnimation.update(currTime);
                var deltaX = p.vel.x * delta / 1000;
                var deltaY = p.vel.y * delta / 1000;
                p.pos.x = p.pos.x + deltaX;
                p.pos.y = p.pos.y + deltaY;

                if (!p._timeCreated) p._timeCreated = currTime;
                if (currTime - p._timeCreated > p.liveTime) {
                    _editData2.default.currParticleSystemInEdit._particles.splice(_editData2.default.currParticleSystemInEdit._particles.indexOf(p), 1);
                }
            });
        };
        tid = setInterval(function () {
            update();
            RF.digest();
        }, 5);
    },
    emit: function emit(e) {
        var rect = e.target.getBoundingClientRect();
        _editData2.default.currParticleSystemInEdit.emit(e.clientX - rect.left, e.clientY - rect.top);
    }
});

},{"./particleSystemPreviewDialog.html":130,"providers/editData":161,"providers/i18n":162,"providers/utils":169}],132:[function(require,module,exports){
module.exports = "\n<app-modal id=\"soundModal\">\n    <div data-transclusion=\"content\">\n        <table class=\"width100\">\n            <tr>\n                <td>\n                    {{i18n.name}}\n                </td>\n            </tr>\n            <tr>\n                <td>\n                    <input\n                            required\n                            data-model=\"editData.currSoundInEdit.name\"/>\n                </td>\n            </tr>\n            <tr>\n                <td>\n                    <app-input-file\n                            data-state=\"{\n                        onFilePicked: onFilePicked,\n                        title: i18n.loadSound,\n                        accept: 'audio/*'\n                    }\"\n                    ></app-input-file>\n                </td>\n            </tr>\n            <tr>\n                <td>\n                    <audio data-if=\"soundUrl\" controls=\"controls\" data-attributes=\"{src:soundUrl}\"></audio>\n                </td>\n            </tr>\n        </table>\n\n        <button\n                data-disabled=\"!(form.valid() && soundUrl)\"\n                data-click=\"createOrEditSound(editData.currSoundInEdit)\">\n            {{editData.currSoundInEdit.id?i18n.edit:i18n.create}}\n        </button>\n    </div>\n</app-modal>\n";

},{}],133:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _editData = require('providers/editData');

var _editData2 = _interopRequireDefault(_editData);

var _resource = require('providers/rest/resource');

var _resource2 = _interopRequireDefault(_resource);

var _i18n = require('providers/i18n');

var _i18n2 = _interopRequireDefault(_i18n);

var _fileSystem = require('providers/rest/fileSystem');

var _fileSystem2 = _interopRequireDefault(_fileSystem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = RF.registerComponent('app-sound-dialog', {
    template: {
        type: 'string',
        value: require('./soundDialog.html')
    },
    form: { valid: function valid() {
            return true;
        } },
    editData: _editData2.default,
    i18n: _i18n2.default.getAll(),
    soundUrl: '',
    _file: '',

    open: function open() {
        if (_editData2.default.currSoundInEdit.id) this.soundUrl = _editData2.default.projectName + '/' + _editData2.default.currSoundInEdit.resourcePath + '?' + Math.random();else this.soundUrl = '';
        RF.getComponentById('soundModal').open();
    },
    onFilePicked: function onFilePicked(src, file) {
        this.soundUrl = src;
        this._file = file;

        var self = this;
        self._file = file;
        self.soundUrl = src;
        self.editData.currSoundInEdit.resourcePath = 'resources/sound/' + file.name;
        if (!self.editData.currSoundInEdit.name) {
            self.editData.currSoundInEdit.name = name;
        }
    },
    createOrEditSound: function createOrEditSound(model) {
        var self = this;
        _promise2.default.resolve().then(function () {
            if (self._file) {
                return _fileSystem2.default.uploadFile(self._file, { type: model.type });
            } else return _promise2.default.resolve();
        }).then(function () {
            return _resource2.default.save(model);
        }).then(function (resp) {
            if (resp.created) {
                model.id = resp.id;
                _editData2.default.soundList.add(model);
            } else if (resp.updated) {
                model.updateCloner();
            }
            RF.getComponentById('soundModal').close();
            RF.digest();
        });
    }
});

},{"./soundDialog.html":132,"babel-runtime/core-js/promise":5,"providers/editData":161,"providers/i18n":162,"providers/rest/fileSystem":164,"providers/rest/resource":167}],134:[function(require,module,exports){
module.exports = "\r\n<app-modal id=\"spriteSheetModal\">\r\n    <div data-transclusion=\"content\">\r\n\r\n        <table class=\"width100\">\r\n            <tr>\r\n                <td>\r\n                    {{i18n.name}}\r\n                </td>\r\n                <td>\r\n                    <input data-model=\"editData.currSpriteSheetInEdit.name\"/>\r\n                </td>\r\n                <td rowspan=\"6\">\r\n                    <div style=\"max-width:60vw;overflow: auto;\"\r\n                    >\r\n                        <div class=\"relative\"\r\n                             data-style=\"{\r\n                                    'background-image':   'url('+spriteSheetUrl+')',\r\n                                    'width':              editData.currSpriteSheetInEdit.width+'px',\r\n                                    'height':             editData.currSpriteSheetInEdit.height+'px',\r\n                               }\">\r\n                            <div\r\n                                    data-attributes=\"{title:i}\"\r\n                                    data-for=\"i in utils.range(0,numOfSpriteSheetCells-1)\"\r\n                                    data-style=\"{\r\n                                    'display':        'inline-block',\r\n                                    'left':           editData.currSpriteSheetInEdit.getFramePosX(i)+'px',\r\n                                    'top':            editData.currSpriteSheetInEdit.getFramePosY(i)+'px',\r\n                                    'position':       'absolute',\r\n                                    'text-align':     'left',\r\n                                    'border':         '1px solid red',\r\n                                    'width':          editData.currSpriteSheetInEdit._frameWidth+'px',\r\n                                    'height':         editData.currSpriteSheetInEdit._frameHeight+'px'\r\n                                }\">{{i}}</div>\r\n                        </div>\r\n                    </div>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td>\r\n                    {{i18n.image}}\r\n                </td>\r\n                <td>\r\n                    <app-input-file\r\n                            data-state=\"{\r\n                        onFilePicked: onFilePicked,\r\n                        title: i18n.loadImage,\r\n                        accept: 'image/*'\r\n                    }\"\r\n                    />\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td>\r\n                    {{i18n.width}}\r\n                </td>\r\n                <td>\r\n                    {{editData.currSpriteSheetInEdit.width}}\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td>\r\n                    {{i18n.height}}\r\n                </td>\r\n                <td>\r\n                    {{editData.currSpriteSheetInEdit.height}}\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td>\r\n                    {{i18n.numOfFramesH}}\r\n                </td>\r\n                <td>\r\n                    <input\r\n                            required\r\n                            min=\"1\"\r\n                            max=\"100\"\r\n                            type=\"number\"\r\n                            data-change=\"refreshNumOfCells()\"\r\n                            data-input=\"refreshNumOfCells()\"\r\n                            data-keyup=\"refreshNumOfCells()\"\r\n                            data-model=\"editData.currSpriteSheetInEdit.numOfFramesH\"/>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td>\r\n                    {{i18n.numOfFramesV}}\r\n                </td>\r\n                <td>\r\n                    <input\r\n                            required\r\n                            min=\"1\"\r\n                            max=\"100\"\r\n                            type=\"number\"\r\n                            data-change=\"refreshNumOfCells()\"\r\n                            data-input=\"refreshNumOfCells()\"\r\n                            data-keyup=\"refreshNumOfCells()\"\r\n                            data-model=\"editData.currSpriteSheetInEdit.numOfFramesV\"/>\r\n                </td>\r\n            </tr>\r\n        </table>\r\n        <button\r\n                data-click=\"createOrEditSpriteSheet(editData.currSpriteSheetInEdit)\"\r\n                data-disabled=\"!(form.valid() && editData.currSpriteSheetInEdit.resourcePath)\">\r\n            {{editData.currSpriteSheetInEdit.id?i18n.edit:i18n.create}}\r\n        </button>\r\n\r\n    </div>\r\n</app-modal>\r\n\r\n";

},{}],135:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _editData = require('providers/editData');

var _editData2 = _interopRequireDefault(_editData);

var _resource = require('providers/rest/resource');

var _resource2 = _interopRequireDefault(_resource);

var _i18n = require('providers/i18n');

var _i18n2 = _interopRequireDefault(_i18n);

var _fileSystem = require('providers/rest/fileSystem');

var _fileSystem2 = _interopRequireDefault(_fileSystem);

var _utils = require('providers/utils');

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = RF.registerComponent('app-sprite-sheet-dialog', {
    template: {
        type: 'string',
        value: require('./spriteSheetDialog.html')
    },
    i18n: _i18n2.default.getAll(),
    utils: _utils2.default,
    editData: _editData2.default,
    form: { valid: function valid() {
            return true;
        } },
    spriteSheetUrl: '',
    _file: '',
    numOfSpriteSheetCells: 0,
    open: function open() {
        if (_editData2.default.currSpriteSheetInEdit.id) this.spriteSheetUrl = _editData2.default.projectName + '/' + _editData2.default.currSpriteSheetInEdit.resourcePath + '?' + Math.random();else this.spriteSheetUrl = '';
        this.refreshNumOfCells();
        RF.getComponentById('spriteSheetModal').open();
    },
    onFilePicked: function onFilePicked(src, file, name) {
        var self = this;
        self._file = file;
        self.spriteSheetUrl = src;
        self.editData.currSpriteSheetInEdit.resourcePath = 'resources/spriteSheet/' + file.name;
        if (!self.editData.currSpriteSheetInEdit.name) {
            self.editData.currSpriteSheetInEdit.name = name;
        }
        var img = new Image();
        img.onload = function () {
            self.editData.currSpriteSheetInEdit.width = img.width;
            self.editData.currSpriteSheetInEdit.height = img.height;
            self.editData.currSpriteSheetInEdit.calcFrameSize();
            RF.digest();
        };
        img.src = src;
    },
    refreshNumOfCells: function refreshNumOfCells() {
        this.numOfSpriteSheetCells = this.editData && this.editData.currSpriteSheetInEdit && this.editData.currSpriteSheetInEdit.numOfFramesH * this.editData.currSpriteSheetInEdit.numOfFramesV;
        this.editData.currSpriteSheetInEdit.calcFrameSize();
    },
    createOrEditSpriteSheet: function createOrEditSpriteSheet(model) {
        var self = this;
        _promise2.default.resolve().then(function () {
            if (self._file) {
                return _fileSystem2.default.uploadFile(self._file, { type: model.type });
            } else return _promise2.default.resolve();
        }).then(function () {
            return _resource2.default.save(model);
        }).then(function (resp) {
            if (resp.created) {
                model.id = resp.id;
                _editData2.default[model.type + 'List'].add(model);
            } else if (resp.updated) {
                model.updateCloner();
            }
            RF.getComponentById('spriteSheetModal').close();
            RF.digest();
        });
    }
});

},{"./spriteSheetDialog.html":134,"babel-runtime/core-js/promise":5,"providers/editData":161,"providers/i18n":162,"providers/rest/fileSystem":164,"providers/rest/resource":167,"providers/utils":169}],136:[function(require,module,exports){
module.exports = "<div class=\"template\">\n    <div class=\"absolute\">\n        <app-top-panel></app-top-panel>\n    </div>\n    <div id=\"c\" class=\"split\">\n        <div id=\"a\" class=\"split split-horizontal content\">\n            <app-game-props></app-game-props>\n            <app-scenes></app-scenes>\n            <app-game-objects></app-game-objects>\n            <app-sprite-sheets></app-sprite-sheets>\n            <app-user-interface></app-user-interface>\n            <app-fonts></app-fonts>\n            <app-sounds></app-sounds>\n            <app-particle-systems></app-particle-systems>\n        </div>\n        <div id=\"b\" class=\"split split-horizontal content relative\">\n            <app-script-editor></app-script-editor>\n            <div :style=\"{\n                width:  editData.gameProps.width + 'px',\n                height: editData.gameProps.height + 'px',\n                border: '1px solid green'\n            }\">\n                <app-curr-scene/>\n            </div>\n        </div>\n        <div id=\"e\" class=\"split split-horizontal content\">\n            <app-right-panel-scene-game-object/>\n            <app-right-panel-scene/>\n        </div>\n    </div>\n    <div id=\"d\" class=\"split content\">d</div>\n\n    <app-dialogs></app-dialogs>\n\n</div>";

},{}],137:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

require('pages/editor/leftPanel/gameProps/gameProps');

require('pages/editor/leftPanel/particleSystems/particleSystems');

require('pages/editor/leftPanel/sounds/sounds');

require('pages/editor/leftPanel/fonts/fonts');

require('pages/editor/leftPanel/spriteSheets/spriteSheets');

require('pages/editor/leftPanel/gameObjects/gameObjects');

require('pages/editor/leftPanel/userInterface/userInterface');

require('pages/editor/topPanel/topPanel');

require('pages/editor/centralPanel/scriptEditor/scriptEditor');

require('pages/editor/dialogs/dialogs');

var _i18n = require('providers/i18n');

var _i18n2 = _interopRequireDefault(_i18n);

var _editData = require('providers/editData');

var _editData2 = _interopRequireDefault(_editData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import 'pages/editor/leftPanel/scenes/scenes';


// appCollapsible: require('components/collapsible/collapsible'),
// appModal: require('components/modal/modal'),
// appInputFile: require('components/inputFile/inputFile'),
//
// appGameProps: require('./leftPanel/gameProps/gameProps'),
// appScenes: require('./leftPanel/scenes/scenes'),
// appGameObjects: require('./leftPanel/gameObjects/gameObjects'),
// appSpriteSheets: require('./leftPanel/spriteSheets/spriteSheets'),
// appUserInterface: require('./leftPanel/userInterface/userInterface'),
// appFonts: require('./leftPanel/fonts/fonts'),
// appSounds: require('./leftPanel/sounds/sounds'),
// appParticleSystems: require('./leftPanel/particleSystems/particleSystems'),
// appDialogs: require('./dialogs/dialogs'),
//
// appScriptEditor: require('./centralPanel/scriptEditor/scriptEditor'),
//
// appRightPanelSceneGameObject: require('./rightPanel/sceneGameObject/sceneGameObject'),
// appRightPanelScene: require('./rightPanel/scene/scene'),
// appCurrScene: require('./centralPanel/scene/scene'),
//
// appTopPanel: require('./topPanel/topPanel')

var _onMount = function _onMount() {
    var layoutSizes = {};

    layoutSizes.a = 15;
    layoutSizes.b = 70;
    layoutSizes.e = 100 - layoutSizes.a - layoutSizes.b;

    layoutSizes.c = 94;
    layoutSizes.d = 100 - layoutSizes.c;

    Split(['#a', '#b', '#e'], {
        sizes: [layoutSizes.a, layoutSizes.b, layoutSizes.e],
        gutterSize: 5,
        cursor: 'row-resize',
        minSize: 10
    });
    var vertical = Split(['#c', '#d'], {
        direction: 'vertical',
        sizes: [layoutSizes.c, layoutSizes.d],
        gutterSize: 5,
        cursor: 'col-resize',
        minSize: 10
    });
    window.addEventListener('resize', function () {
        vertical.setSizes([layoutSizes.c, layoutSizes.d]);
    });
};

exports.default = RF.registerComponent('editor', {
    template: {
        type: 'string',
        value: require('./editor.html')
    },
    editData: _editData2.default,
    i18n: _i18n2.default.getAll(),
    onMount: function onMount() {
        _onMount();
    }
});

},{"./editor.html":136,"pages/editor/centralPanel/scriptEditor/scriptEditor":117,"pages/editor/dialogs/dialogs":121,"pages/editor/leftPanel/fonts/fonts":141,"pages/editor/leftPanel/gameObjects/gameObjects":143,"pages/editor/leftPanel/gameProps/gameProps":145,"pages/editor/leftPanel/particleSystems/particleSystems":147,"pages/editor/leftPanel/sounds/sounds":149,"pages/editor/leftPanel/spriteSheets/spriteSheets":151,"pages/editor/leftPanel/userInterface/userInterface":153,"pages/editor/topPanel/topPanel":155,"providers/editData":161,"providers/i18n":162}],138:[function(require,module,exports){
module.exports = "<div>\n    <div class=\"cell\">\n        <span class=\"inlineBlock withPaddingRight\">\n            <span class=\"inlineBlock withPaddingTop withPaddingBottom\">\n                {{gameObject.name}}\n            </span>\n        </span>\n    </div>\n    <div    class=\"cell width100\"\n            data-if=\"!gameObject.subType\">\n        <div data-style=\"\n                utils.merge(\n                        utils.getGameObjectCss(gameObject),\n                        {\n                            zoom:utils.calcZoom(gameObject),\n                            transform: 'scale(1, 1) rotateZ(0deg)',\n                            opacity:1\n                        }\n                )\"></div>\n    </div>\n    <div\n            class=\"cell width100\"\n            data-if=\"gameObject.subType\"\n            data-attributes=\"{title:gameObject.name}\"\n            >\n        <span class=\"textOverflow\">\n            <span class=\"inlineBlock withPaddingTop withPaddingBottom\">\n                {{gameObject.subType}}\n            </span>\n        </span>\n    </div>\n    <div class=\"cell width1\">\n        <div data-if=\"crud && crud.editScript\" class=\"script\" data-click=\"crud.editScript(gameObject)\"></div>\n    </div>\n    <div class=\"cell width1\">\n        <div data-if=\"crud && crud.edit\" class=\"edit\" data-click=\"crud.edit(gameObject)\"></div>\n    </div>\n    <div class=\"cell width1\">\n        <div data-if=\"crud && crud.delete\" data-click=\"crud.delete(gameObject)\" class=\"delete\"></div>\n    </div>\n</div>";

},{}],139:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _utils = require('providers/utils');

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = RF.registerComponent('app-game-object-row', {
    template: {
        type: 'string',
        value: require('./gameObjectRow.html')
    },
    getInitialState: function getInitialState() {
        return {
            crud: null,
            gameObject: {}
        };
    },

    utils: _utils2.default
});

},{"./gameObjectRow.html":138,"providers/utils":169}],140:[function(require,module,exports){
module.exports = "<app-collapsible\n        data-state=\"{\n            crud: {create:createFont},\n            title:i18n.fonts\n        }\">\n    <div data-transclusion=\"content\">\n\n        <div class=\"withPaddingLeft\">\n            <div class=\"table width100\">\n                <div class=\"row\"\n                     data-for=\"font in editData.fontList.rs\">\n\n                    <div class=\"cell\">\n                    <span class=\"inlineBlock withPaddingTop withPaddingBottom\">\n                        {{font.name}}\n                    </span>\n                    </div>\n\n                    <div class=\"cell width1\">\n                        <div class=\"edit\" data-click=\"editFont(font)\"></div>\n                    </div>\n                    <div class=\"cell width1\">\n                        <div class=\"delete\" data-click=\"deleteFont(font)\"></div>\n                    </div>\n\n                </div>\n            </div>\n        </div>\n\n    </div>\n</app-collapsible>";

},{}],141:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _fileSystem = require('providers/rest/fileSystem');

var _fileSystem2 = _interopRequireDefault(_fileSystem);

var _i18n = require('providers/i18n');

var _i18n2 = _interopRequireDefault(_i18n);

var _editData = require('providers/editData');

var _editData2 = _interopRequireDefault(_editData);

var _utils = require('providers/utils');

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Font = _require('font');

exports.default = RF.registerComponent('app-fonts', {
    template: {
        type: 'string',
        value: require('./fonts.html')
    },
    editData: _editData2.default,
    i18n: _i18n2.default.getAll(),

    createFont: function createFont() {
        this.editData.currFontInEdit = new Font(new Font().toJSON());
        RF.getComponentById('fontDialog').open();
    },
    editFont: function editFont(fnt) {
        this.editData.currFontInEdit = fnt.clone();
        RF.getComponentById('fontDialog').open();
    },
    deleteFont: function deleteFont(model) {
        _utils2.default.deleteModel(model, function () {
            _fileSystem2.default.removeFile('font/' + model.name + '.png');
        });
    }
});

},{"./fonts.html":140,"providers/editData":161,"providers/i18n":162,"providers/rest/fileSystem":164,"providers/utils":169}],142:[function(require,module,exports){
module.exports = "<app-collapsible\n        data-state=\"{\n                title: i18n.gameObjects,\n                crud: {\n                    create:createGameObject\n                }\n            }\">\n\n    <div data-transclusion=\"content\">\n\n        <div class=\"withPaddingLeft\">\n\n            <div class=\"table width100\">\n                <div class=\"row\"\n                     data-for=\"gameObject in editData.gameObjectList.rs\"\n                >\n                    <app-game-object-row\n                            data-state=\"{\n                            crud: {\n                                 edit: editGameObject,\n                                 editScript: editGameObjectScript,\n                                 delete: deleteGameObject\n                            },\n                            gameObject: gameObject || {}\n                        }\">\n                    </app-game-object-row>\n                </div>\n\n            </div>\n        </div>\n\n\n    </div>\n\n</app-collapsible>";

},{}],143:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _i18n = require('providers/i18n');

var _i18n2 = _interopRequireDefault(_i18n);

var _editData = require('providers/editData');

var _editData2 = _interopRequireDefault(_editData);

var _utils = require('providers/utils');

var _utils2 = _interopRequireDefault(_utils);

require('pages/editor/leftPanel/_gameObjectRow/gameObjectRow');

var _fileSystem = require('providers/rest/fileSystem');

var _fileSystem2 = _interopRequireDefault(_fileSystem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GameObject = _require('gameObject');
var collections = _require('collections');

var fixGameObject = function fixGameObject(g) {
    if (!g.commonBehaviour || g.commonBehaviour.splice) g.commonBehaviour = new collections.List();
    if (!g.frameAnimations || g.frameAnimations.splice) g.frameAnimations = new collections.List();
};

exports.default = RF.registerComponent('app-game-objects', {
    template: {
        type: 'string',
        value: require('./gameObjects.html')
    },
    editData: _editData2.default,
    i18n: _i18n2.default.getAll(),

    createGameObject: function createGameObject() {
        this.editData.currGameObjectInEdit = new GameObject().clone();
        fixGameObject(this.editData.currGameObjectInEdit);
        RF.getComponentById('gameObjectModal').open();
    },
    editGameObjectScript: function editGameObjectScript(gameObject) {
        _utils2.default.openEditor(gameObject.type + '/' + gameObject.name + '.js');
    },
    editGameObject: function editGameObject(go) {
        this.editData.currGameObjectInEdit = go.clone();
        fixGameObject(this.editData.currGameObjectInEdit);
        RF.getComponentById('gameObjectModal').open();
    },
    deleteGameObject: function deleteGameObject(model) {
        _utils2.default.deleteModel(model, function () {
            _fileSystem2.default.removeFile('script/gameObject/' + model.name + '.js');
        });
    }
});

},{"./gameObjects.html":142,"pages/editor/leftPanel/_gameObjectRow/gameObjectRow":139,"providers/editData":161,"providers/i18n":162,"providers/rest/fileSystem":164,"providers/utils":169}],144:[function(require,module,exports){
module.exports = "\n<app-collapsible data-state=\"{title:i18n.game}\">\n    <div data-transclusion=\"content\">\n        <form class=\"table width100\">\n            <div class=\"row\">\n                <div class=\"cell\">\n                    {{i18n.width}}\n                </div>\n                <div class=\"cell\">\n                    <input\n                            class=\"narrow\"\n                            data-model=\"editData.gameProps.width\"\n                            type=\"number\"\n                            min=\"1\"\n                            max=\"20000\"\n                            data-change=\"form.valid() && saveGameProps()\"/>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"cell\">\n                    {{i18n.height}}\n                </div>\n                <div class=\"cell\">\n                    <input\n                            class=\"narrow\"\n                            data-model=\"editData.gameProps.height\"\n                            type=\"number\"\n                            min=\"1\"\n                            max=\"20000\"\n                            data-change=\"form.valid() && saveGameProps()\"/>\n                </div>\n            </div>\n\n\n            <div class=\"row\">\n                <div class=\"cell\">\n                    {{i18n.scaleStrategy}}\n                </div>\n                <div class=\"cell\">\n                    <select\n                            data-model=\"editData.gameProps.scaleStrategy\"\n                            data-change=\"form.valid() && saveGameProps()\">\n                        <option\n                                data-value=\"value\"\n                                data-for=\"(value,key) in scales\">{{key}}</option>\n                    </select>\n                </div>\n            </div>\n\n            <div class=\"row\">\n                <div class=\"cell\">\n                    {{i18n.preloadingScene}}\n                </div>\n                <div class=\"cell\">\n                    <select\n                            data-model=\"editData.gameProps.preloadingSceneId\"\n                            data-change=\"form.valid() && saveGameProps()\">\n                        <option value=\"\">--</option>\n                        <option\n                                :disabled=\"item.id==editData.gameProps.startSceneId\"\n                                data-value=\"item.id\"\n                                data-for=\"item in editData.sceneList.rs\">\n                            {{item.name}}\n                        </option>\n                    </select>\n                </div>\n            </div>\n\n            <div class=\"row\">\n                <div class=\"cell\">\n                    {{i18n.startScene}}\n                </div>\n                <div class=\"cell\">\n                    <select data-model=\"editData.gameProps.startSceneId\"\n                            data-change=\"form.valid() && saveGameProps()\">\n                        <option\n                                data-disabled=\"item.id==editData.gameProps.preloadingSceneId\"\n                                data-value=\"item.id\"\n                                data-for=\"item in editData.sceneList.rs\">\n                            {{item.name}}\n                        </option>\n                    </select>\n                </div>\n            </div>\n\n        </form>\n    </div>\n</app-collapsible>";

},{}],145:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _resource = require('providers/rest/resource');

var _resource2 = _interopRequireDefault(_resource);

var _i18n = require('providers/i18n');

var _i18n2 = _interopRequireDefault(_i18n);

var _editData = require('providers/editData');

var _editData2 = _interopRequireDefault(_editData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = RF.registerComponent('app-game-props', {
    template: {
        type: 'string',
        value: require('./gameProps.html')
    },
    form: { valid: function valid() {
            return true;
        } },
    editData: _editData2.default,
    i18n: _i18n2.default.getAll(),
    scales: _require('consts').SCALE_STRATEGY,
    saveGameProps: function saveGameProps() {
        _resource2.default.saveGameProps(this.editData.gameProps);
    }
});

},{"./gameProps.html":144,"providers/editData":161,"providers/i18n":162,"providers/rest/resource":167}],146:[function(require,module,exports){
module.exports = "<app-collapsible\n        data-state=\"{\n            crud:{\n                create:createParticleSystem\n            },\n            title:i18n.particleSystems\n        }\">\n\n    <div data-transclusion=\"content\">\n        <div class=\"withPaddingLeft\">\n            <div class=\"table width100\">\n                <div class=\"row\"\n                     data-for=\"ps in editData.particleSystemList.rs\">\n\n                    <div class=\"cell\">\n                    <span class=\"inlineBlock withPaddingTop withPaddingBottom\">\n                        {{ps.name}}\n                    </span>\n                    </div>\n\n                    <div class=\"cell width1\">\n                        <div class=\"edit\" data-click=\"editParticleSystem(ps)\"></div>\n                    </div>\n                    <div class=\"cell width1\">\n                        <div class=\"delete\" data-click=\"deleteParticleSystem(ps)\"></div>\n                    </div>\n\n                </div>\n            </div>\n        </div>\n    </div>\n\n\n</app-collapsible>";

},{}],147:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _editData = require('providers/editData');

var _editData2 = _interopRequireDefault(_editData);

var _utils = require('providers/utils');

var _utils2 = _interopRequireDefault(_utils);

var _i18n = require('providers/i18n');

var _i18n2 = _interopRequireDefault(_i18n);

var _particleSystemDialog = require('pages/editor/dialogs/particleSystemDialog/particleSystemDialog');

var _particleSystemDialog2 = _interopRequireDefault(_particleSystemDialog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ParticleSystem = _require('particleSystem');

exports.default = RF.registerComponent('app-particle-systems', {
    template: {
        type: 'string',
        value: require('./particleSystems.html')
    },
    editData: _editData2.default,
    i18n: _i18n2.default.getAll(),
    createParticleSystem: function createParticleSystem() {
        this.editData.currParticleSystemInEdit = new ParticleSystem(new ParticleSystem().toJSON());
        var go = this.editData.gameObjectList.get(0);

        if (!go) {
            alertEx(this.i18n.noGameObject);
            return;
        }

        this.editData.currParticleSystemInEdit.gameObject = go.clone();
        RF.getComponentById('particleSystemModal').open();
    },
    editParticleSystem: function editParticleSystem(ps) {
        this.editData.currParticleSystemInEdit = ps.clone();
        RF.getComponentById('particleSystemModal').open();
    },
    deleteParticleSystem: function deleteParticleSystem(model) {
        _utils2.default.deleteModel(model);
    }
});

},{"./particleSystems.html":146,"pages/editor/dialogs/particleSystemDialog/particleSystemDialog":129,"providers/editData":161,"providers/i18n":162,"providers/utils":169}],148:[function(require,module,exports){
module.exports = "<app-collapsible\n        data-state=\"{\n            crud:{\n                create:createSound\n            },\n            title:i18n.sounds\n        }\">\n    <div data-transclusion=\"content\">\n        <div class=\"withPaddingLeft\">\n            <div class=\"table width100\">\n                <div class=\"row\"\n                     data-for=\"sound in editData.soundList.rs\">\n\n                    <div class=\"cell\">\n                    <span class=\"inlineBlock withPaddingTop withPaddingBottom\">\n                        {{sound.name}}\n                    </span>\n                    </div>\n\n                    <div class=\"cell width1\">\n                        <div class=\"edit\" data-click=\"editSound(sound)\"></div>\n                    </div>\n                    <div class=\"cell width1\">\n                        <div class=\"delete\" data-click=\"deleteSound(sound)\"></div>\n                    </div>\n\n                </div>\n            </div>\n        </div>\n    </div>\n</app-collapsible>";

},{}],149:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _editData = require('providers/editData');

var _editData2 = _interopRequireDefault(_editData);

var _utils = require('providers/utils');

var _utils2 = _interopRequireDefault(_utils);

var _i18n = require('providers/i18n');

var _i18n2 = _interopRequireDefault(_i18n);

var _fileSystem = require('providers/rest/fileSystem');

var _fileSystem2 = _interopRequireDefault(_fileSystem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Sound = _require('sound');

exports.default = RF.registerComponent('app-sounds', {
    template: {
        type: 'string',
        value: require('./sounds.html')
    },
    editData: _editData2.default,
    i18n: _i18n2.default.getAll(),
    createSound: function createSound() {
        this.editData.currSoundInEdit = new Sound(new Sound().toJSON());
        RF.getComponentById('soundDialog').open();
    },
    editSound: function editSound(sound) {
        this.editData.currSoundInEdit = sound.clone();
        RF.getComponentById('soundDialog').open();
    },
    deleteSound: function deleteSound(model) {
        _utils2.default.deleteModel(model, function () {
            _fileSystem2.default.removeFile(model.resourcePath.replace('resources/', ''));
        });
    }
});

},{"./sounds.html":148,"providers/editData":161,"providers/i18n":162,"providers/rest/fileSystem":164,"providers/utils":169}],150:[function(require,module,exports){
module.exports = "<app-collapsible\n        data-state=\"{\n            title: i18n.spriteSheets,\n            crud: {\n                create:createSpriteSheet\n            }\n        }\">\n    <div data-transclusion=\"content\">\n        <div class=\"withPaddingLeft\">\n            <div class=\"table width100\">\n                <div class=\"row\"\n                     data-for=\"spriteSheet in editData.spriteSheetList.rs\">\n\n                    <div class=\"cell\">\n                        <img\n                                height=\"20\"\n                                class=\"spriteSheetThumb\"\n                                data-attributes=\"{src:editData.projectName+'/'+spriteSheet.resourcePath}\"/>\n                    </div>\n                    <div class=\"cell\">\n                    <span class=\"inlineBlock withPaddingTop withPaddingBottom\">\n                        {{spriteSheet.name}}\n                    </span>\n                    </div>\n                    <div class=\"cell width1\">\n                        <div class=\"edit\" data-click=\"editSpriteSheet(spriteSheet)\"></div>\n                    </div>\n                    <div class=\"cell width1\">\n                        <div class=\"delete\" data-click=\"deleteSpriteSheet(spriteSheet)\"></div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</app-collapsible>";

},{}],151:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _editData = require('providers/editData');

var _editData2 = _interopRequireDefault(_editData);

var _utils = require('providers/utils');

var _utils2 = _interopRequireDefault(_utils);

var _i18n = require('providers/i18n');

var _i18n2 = _interopRequireDefault(_i18n);

var _fileSystem = require('providers/rest/fileSystem');

var _fileSystem2 = _interopRequireDefault(_fileSystem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SpriteSheet = _require('spriteSheet');

exports.default = RF.registerComponent('app-sprite-sheets', {
    template: {
        type: 'string',
        value: require('./spriteSheets.html')
    },
    editData: _editData2.default,
    i18n: _i18n2.default.getAll(),
    createSpriteSheet: function createSpriteSheet() {
        this.editData.currSpriteSheetInEdit = new SpriteSheet(new SpriteSheet().toJSON());
        RF.getComponentById('spriteSheetDialog').open();
    },
    editSpriteSheet: function editSpriteSheet(sprSh) {
        this.editData.currSpriteSheetInEdit = sprSh.clone();
        RF.getComponentById('spriteSheetDialog').open();
    },
    deleteSpriteSheet: function deleteSpriteSheet(model) {
        var hasDepends = this.editData.gameObjectList.filter(function (it) {
            return it.spriteSheet.id == model.id;
        }).size() > 0;
        if (hasDepends) {
            window.alertEx(this.i18n.canNotDelete(model));
            return;
        }
        _utils2.default.deleteModel(model);
    }
});

},{"./spriteSheets.html":150,"providers/editData":161,"providers/i18n":162,"providers/rest/fileSystem":164,"providers/utils":169}],152:[function(require,module,exports){
module.exports = "<app-collapsible\n        data-state=\"{\n            title: i18n.userInterface\n        }\">\n\n    <div data-transclusion=\"content\">\n\n        <div class=\"withPaddingLeft\">\n            <div class=\"table width100\">\n                <div class=\"row\"\n                     data-for=\"ui in (editData.userInterfaceList && editData.userInterfaceList.rs)\">\n\n                    <div class=\"cell\">\n                        <span class=\"inlineBlock withPaddingTop withPaddingBottom\">{{ui.subType}}</span>\n                    </div>\n\n                </div>\n            </div>\n        </div>\n\n    </div>\n\n</app-collapsible>";

},{}],153:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _resource = require('providers/rest/resource');

var _resource2 = _interopRequireDefault(_resource);

var _i18n = require('providers/i18n');

var _i18n2 = _interopRequireDefault(_i18n);

var _editData = require('providers/editData');

var _editData2 = _interopRequireDefault(_editData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = RF.registerComponent('app-user-interface', {
    template: {
        value: require('./userInterface.html'),
        type: 'string'
    },
    i18n: _i18n2.default.getAll(),
    editData: _editData2.default
});

},{"./userInterface.html":152,"providers/editData":161,"providers/i18n":162,"providers/rest/resource":167}],154:[function(require,module,exports){
module.exports = "<div class=\"panel withPadding pointer\">\r\n\r\n    <div class=\"inlineBlock\" data-click=\"showBuildDialog()\">\r\n        {{i18n.build}}\r\n    </div>\r\n    <div class=\"inlineBlock\" data-click=\"run()\">\r\n        {{i18n.run}}\r\n    </div>\r\n    <div class=\"inlineBlock\" data-click=\"toExplorer()\">\r\n        {{i18n.explorer}}\r\n    </div>\r\n\r\n</div>";

},{}],155:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _httpClient = require('providers/rest/httpClient');

var _httpClient2 = _interopRequireDefault(_httpClient);

var _editData = require('providers/editData');

var _editData2 = _interopRequireDefault(_editData);

var _i18n = require('providers/i18n');

var _i18n2 = _interopRequireDefault(_i18n);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var w = void 0;


var generateBuildUrl = function generateBuildUrl(opts) {
    var url = '/generate?r=' + Math.random();
    (0, _keys2.default)(opts).forEach(function (key) {
        if (opts[key]) url += '&' + key + '=1';
    });
    url += '&projectName=' + _editData2.default.projectName;
    return url;
};

exports.default = RF.registerComponent('app-top-panel', {
    template: {
        value: require('./topPanel.html'),
        type: 'string'
    },
    editData: _editData2.default,
    i18n: _i18n2.default.getAll(),
    run: function run() {
        _httpClient2.default.get('/resource/generate', {
            debug: 1,
            r: Math.random(),
            projectName: _editData2.default.projectName
        }, function () {
            if (!w || w.closed) {
                //w = window.open(
                //    '/'+editData.projectName+'/out',
                //    editData.projectName,
                //    'width='+editData.gameProps.width+',height='+editData.gameProps.height+',toolbar=0'
                //);
                w = window.open('/' + _editData2.default.projectName + '/out');
            } else {
                w.location.reload();
            }
            w && w.focus();
        });
    },
    showBuildDialog: function showBuildDialog() {
        //uiHelper.showDialog('buildDialog');
    },
    toExplorer: function toExplorer() {
        RF.Router.navigateTo('explorer');
    }
});

},{"./topPanel.html":154,"babel-runtime/core-js/object/keys":4,"providers/editData":161,"providers/i18n":162,"providers/rest/httpClient":165}],156:[function(require,module,exports){
module.exports = "\r\n<app-modal id=\"projectDialog\">\r\n    <div data-transclusion=\"content\">\r\n        <table class=\"width100\">\r\n            <tr>\r\n                <td>\r\n                    {{i18n.name}}\r\n                </td>\r\n                <td>\r\n                    <input\r\n                            required\r\n                            data-model=\"editData.currProjectInEdit.name\"/>\r\n                </td>\r\n            </tr>\r\n        </table>\r\n        <button data-click=\"createOrEditProject(editData.currProjectInEdit)\">\r\n            {{editData.currProjectInEdit.oldName?i18n.edit:i18n.create}}\r\n        </button>\r\n    </div>\r\n</app-modal>\r\n\r\n";

},{}],157:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _editData = require('providers/editData');

var _editData2 = _interopRequireDefault(_editData);

var _project = require('providers/rest/project');

var _project2 = _interopRequireDefault(_project);

var _fileSystem = require('providers/rest/fileSystem');

var _fileSystem2 = _interopRequireDefault(_fileSystem);

var _i18n = require('providers/i18n');

var _i18n2 = _interopRequireDefault(_i18n);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = RF.registerComponent('app-project-dialog', {
    template: {
        type: 'string',
        value: require('./projectDialog.html')
    },
    editData: _editData2.default,
    i18n: _i18n2.default.getAll(),
    created: function created() {
        module.exports.instance = this;
    },
    createOrEditProject: function createOrEditProject(proj) {
        if (proj.oldName) {
            _fileSystem2.default.renameFolder('workspace/' + proj.oldName, 'workspace/' + proj.name, function () {
                _project2.default.getAll(function (list) {
                    _editData2.default.projects = list;
                });
            });
        } else {
            _project2.default.create(proj.name, function () {
                _project2.default.getAll(function (list) {
                    _editData2.default.projects = list;
                });
            });
        }
        RF.getComponentById('projectDialog').close();
    }
});

},{"./projectDialog.html":156,"providers/editData":161,"providers/i18n":162,"providers/rest/fileSystem":164,"providers/rest/project":166}],158:[function(require,module,exports){
module.exports = "\r\n<div>\r\n    <div class=\"width50 marginAuto\">\r\n        <h3 class=\"centerText\">{{i18n.projects}}</h3>\r\n        <div class=\"table width100\">\r\n            <div\r\n                    data-for=\"p in editData.projects\"\r\n                    class=\"row hoverOnProjectRow\">\r\n                <div class=\"cell\">\r\n                    <div\r\n                            data-click=\"openProject(p)\"\r\n                            class=\"withPadding pointer\">\r\n                        {{p.name}}\r\n                    </div>\r\n                </div>\r\n                <div class=\"cell rightAlign\">\r\n                    <div class=\"edit\"\r\n                            data-click=\"editProject(p)\"\r\n                            ></div>\r\n                </div>\r\n                <div class=\"cell rightAlign\">\r\n                    <div\r\n                            data-click=\"deleteProject(p)\"\r\n                            class=\"delete\"></div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"cell\">\r\n                    <div class=\"withPadding\">\r\n                        <div class=\"add\"\r\n                                data-click=\"createProject()\"\r\n                                ></div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <app-project-dialog></app-project-dialog>\r\n\r\n</div>";

},{}],159:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _editData = require('providers/editData');

var _editData2 = _interopRequireDefault(_editData);

var _project = require('providers/rest/project');

var _project2 = _interopRequireDefault(_project);

var _resourceHelper = require('providers/resourceHelper');

var _resourceHelper2 = _interopRequireDefault(_resourceHelper);

var _fileSystem = require('providers/rest/fileSystem');

var _fileSystem2 = _interopRequireDefault(_fileSystem);

require('./dialogs/projectDialog/projectDialog');

var _i18n = require('providers/i18n');

var _i18n2 = _interopRequireDefault(_i18n);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = RF.registerComponent('explorer', {
    template: {
        type: 'string',
        value: require('./explorer.html')
    },
    onMount: function onMount() {
        var _this = this;

        _project2.default.getAll(function (list) {
            _this.editData.projects = list;
        });
    },
    editData: _editData2.default,
    i18n: _i18n2.default.getAll(),
    editProject: function editProject(p) {
        p.oldName = p.name;
        this.editData.currProjectInEdit = {
            name: p.name,
            oldName: p.name
        };
        RF.getComponentById('projectDialog').open();
    },
    createProject: function createProject() {
        this.editData.currProjectInEdit = {
            name: ''
        };
        RF.getComponentById('projectDialog').open();
    },
    openProject: function openProject(project) {
        _resourceHelper2.default.loadProject(project.name);
    },
    deleteProject: function deleteProject(proj) {
        var self = this;
        proj.type = 'project';
        window.confirmEx(this.i18n.confirmQuestion(proj), function () {
            _fileSystem2.default.deleteFolder('workspace/' + proj.name, function () {
                _project2.default.getAll(function (list) {
                    _editData2.default.projects = list;
                });
            });
        });
    }
});

},{"./dialogs/projectDialog/projectDialog":157,"./explorer.html":158,"providers/editData":161,"providers/i18n":162,"providers/resourceHelper":163,"providers/rest/fileSystem":164,"providers/rest/project":166}],160:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var events = {};
window.addEventListener('message', function (resp) {
    var data = resp.data && resp.data.response;
    if (!data) return;
    var id = resp.data.eventUUID;
    if (events[id]) {
        var fn = events[id];
        delete events[id];
        fn && data && fn(data);
    }
});
var requestToApi = function requestToApi(params, callBack) {
    var eventUUID = ~~Math.random() * 100 + new Date().getTime();
    events[eventUUID] = callBack;
    params.eventUUID = eventUUID;
    window.top.postMessage(params, '*');
};

exports.default = { requestToApi: requestToApi };

},{}],161:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var collections = _require('collections');
var SpriteSheet = _require('spriteSheet');

var res = {};

res.reset = function () {

    res.commonBehaviourList = {};
    res.currGameObjectInEdit = {};
    res.currSpriteSheetInEdit = new SpriteSheet();
    res.currFrameAnimationInEdit = {};
    res.currSceneInEdit = {};
    res.currSceneGameObjectInEdit = {
        pos: {},
        scale: {}
    };
    res.currLayerInEdit = {};
    res.currFontInEdit = {};
    res.currCommonBehaviourInEdit = {};
    res.currSoundInEdit = {};
    res.currParticleSystemInEdit = {};
    res.currProjectInEdit = {};
    res.currTileIndexInEdit = {};
    res.gameProps = {};
    res.commonBehaviourProto = new collections.List();

    res.userInterfaceList = new collections.List();

    res.debugFrameUrl = '';
    res.scriptEditorUrl = '';

    res.tileMapPosY = res.tileMapPosX = 0;

    res.projectName = '';
    res.projects = [];

    //res.buildOpts = {
    //    debug: false,
    //    embedResources: false,
    //    embedScript: false,
    //    minify:false
    //};
};

res.reset();

exports.default = res;

},{}],162:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _i18n = {};

_i18n.locale = 'en';

_i18n.bundle = {
    'en': {
        ok: 'ok',
        confirm: 'confirm',
        confirmQuestion: function confirmQuestion(item) {
            return 'Delete ' + item.type + ' with name "' + item.name + '"?';
        },
        canNotDelete: function canNotDelete(item) {
            return 'Can not delete ' + item.type + ' with name "' + item.name + '", it\'s used by other objects';
        },
        noGameObject: 'create at least one game object firstly',
        cancel: 'cancel',
        assets: 'assets',
        addSpriteSheet: 'add sprite sheet',
        loadImage: 'load image',
        gameObjects: 'game objects',
        gameObject: 'gameObject',
        create: 'create',
        edit: 'edit',
        close: 'close',
        name: 'name',
        scaleStrategy: 'scale strategy',
        spriteSheets: 'sprite sheets',
        width: 'width',
        height: 'height',
        currFrameIndex: 'current frame index',
        currGameObject: 'current gameObject',
        currScene: 'current scene',
        spriteSheet: 'sprite sheet',
        numOfFramesH: 'num of frames horizontally',
        numOfFramesV: 'num of frames vertically',
        image: 'image',
        frAnimations: 'frame animations',
        duration: 'duration, msec',
        frames: 'frames (i.e 1,2,3)',
        playAnim: 'play animation',
        stopAnim: 'stop animation',
        saveObjectFirst: 'save object first',
        all: 'all',
        game: 'game',
        editThisGameObject: 'edit this game object',
        deleteThisGameObject: 'delete this game object',
        scenes: 'scenes',
        scene: 'scene',
        run: 'run',
        layers: 'layers',
        layer: 'layer',
        debug: 'debug',
        stop: 'stop',
        addGameObject: 'add game object',
        nothingToAdd: 'nothing to add',
        from: 'from',
        to: 'to',
        fonts: 'fonts',
        font: 'font',
        text: 'text',
        commonBehaviour: 'common behaviour',
        groupName: 'group name',
        selectFont: 'select font',
        fontSize: 'font size',
        fontColor: 'font color',
        userInterface: 'user interface',
        textField: 'text field',
        noDataToEdit: 'no data to edit provided',
        rigid: 'rigid',
        sounds: 'sounds',
        play: 'play',
        loadSound: 'load sound',
        build: 'build',
        particleSystems: 'particle systems',
        particleSystem: 'particle system',
        preview: 'preview',
        explorer: 'explorer',
        description: 'description',
        colorBG: 'scene background color',
        useBG: 'use background color',
        angle: 'angle',
        tileMap: 'tile map',
        noScene: 'create at least one scene',
        sceneNotSelected: 'select scene to drop object',
        noLayer: 'create at least one layer of current scene',
        selected: 'selected',
        notSelected: 'not selected',
        fixedToCamera: 'fixed to camera',
        preloadingScene: 'preloading scene',
        startScene: 'start scene',
        projects: 'projects',
        objectAlreadyAdded: 'object is already added'
    }
};

_i18n.setLocate = function (_locale) {
    _i18n.locale = _locale;
};

_i18n.get = function (key) {
    return _i18n.bundle[_i18n.locale][key];
};

_i18n.getAll = function () {
    return _i18n.bundle[_i18n.locale];
};

exports.default = _i18n;

},{}],163:[function(require,module,exports){
'use strict';

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _editData = require('providers/editData');

var _editData2 = _interopRequireDefault(_editData);

var _httpClient = require('providers/rest/httpClient');

var _httpClient2 = _interopRequireDefault(_httpClient);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ResourceHelper = function ResourceHelper() {

    var self = this;

    var bundle = _require('bundle');
    var collections = _require('collections');
    var CommonBehaviour = _require('commonBehaviour');
    var TextField = _require('textField');
    var Layer = _require('layer');

    var _loadResources = function _loadResources(projectName) {
        _httpClient2.default.post('/resource/getAll', { projectName: projectName }, function (response) {
            bundle.prepare(response);
            (0, _keys2.default)(bundle).forEach(function (key) {
                _editData2.default[key] = bundle[key];
            });
            _editData2.default.gameProps = bundle.gameProps;
            _editData2.default.commonBehaviourProto = new collections.List();
            response.commonBehaviourProto.forEach(function (cb) {
                _editData2.default.commonBehaviourProto.add(new CommonBehaviour(cb));
            });
            _editData2.default.userInterfaceList.clear().add(new TextField({ protoId: '0_0_1' }));
        });
    };

    this.loadProject = function (projectName) {
        _editData2.default.reset();
        _editData2.default.projectName = projectName;
        document.title = _editData2.default.projectName;
        sessionStorage.projectName = _editData2.default.projectName;
        _promise2.default.resolve().then(function () {
            return _loadResources(projectName);
        }).then(function () {
            if (!bundle.sceneList.isEmpty()) _editData2.default.currSceneInEdit = bundle.sceneList.get(0);
            if (_editData2.default.currSceneInEdit._layers) {
                if (_editData2.default.currSceneInEdit._layers.size()) {
                    _editData2.default.currLayerInEdit = _editData2.default.currSceneInEdit._layers.get(0);
                }
            }
            RF.Router.navigateTo('editor');
        });
    };
    this.createOrEditResource = function (currResourceInEdit, ResourceClass, resourceList, callBack) {
        var formData = new FormData();
        formData.append('file', currResourceInEdit._file);
        delete currResourceInEdit._file;
        var model = {};
        (0, _keys2.default)(currResourceInEdit).forEach(function (key) {
            model[key] = currResourceInEdit[key];
        });
        formData.append('model', (0, _stringify2.default)(model));
        formData.append('projectName', _editData2.default.projectName);
        var op = currResourceInEdit.id ? 'edit' : 'create';
        _httpClient2.default.post('/resource/' + op, formData, function (item) {
            if (op == 'create') {
                var r = new ResourceClass(item);
                resourceList.add(r);
                callBack && callBack({ type: 'create', r: r });
            } else {
                if (!(resourceList && resourceList)) return;
                var index = resourceList.indexOf({ id: item.id });
                resourceList.get(index).fromJSON(item);
                callBack && callBack({ type: 'edit', r: resourceList.rs[index] });
            }
        });
    };

    this.deleteResource = function (idOrObject, type, callBack) {
        var id = (typeof idOrObject === 'undefined' ? 'undefined' : (0, _typeof3.default)(idOrObject)) == 'object' ? idOrObject.id : idOrObject;
        type = type || idOrObject.type;
        _httpClient2.default.post('/resource/delete', {
            id: id,
            type: type,
            projectName: _editData2.default.projectName
        }, function () {
            _editData2.default[type + 'List'].remove({ id: id });
            callBack && callBack();
        });
    };

    // todo refactor
    this.createOrEditObjectInResource = function (resourceType, resourceId, objectType, object, callback) {
        var op = object.id ? 'edit' : 'create';
        _httpClient2.default.post('/createOrEditObjectInResource', {
            model: (0, _stringify2.default)(object),
            resourceId: resourceId,
            resourceType: resourceType,
            objectType: objectType,
            projectName: _editData2.default.projectName
        }, function (resp) {
            callback && callback({ type: op, r: resp });
        });
    };
    // todo refactor
    this.createOrEditLayer = function (l, s, dialog) {
        self.createOrEditResource(l, Layer, bundle.layerList, function (item) {
            if (item.type == 'create') {
                self.createOrEditObjectInResource(s.type, s.id, 'layerProps', {
                    type: 'layer',
                    protoId: item.r.id
                }, function (resp) {
                    l.id = resp.r.id;
                    l.protoId = item.r.id;
                    l._scene = _editData2.default.currSceneInEdit;
                    s._layers.add(l);
                    dialog.close();
                });
            }
        });
    };

    this.saveGameProps = function (gameProps) {
        _httpClient2.default.post('/gameProps/save', {
            model: gameProps,
            projectName: _editData2.default.projectName
        });
    };

    this.createOrEditObjectInResource = function (resourceType, resourceId, objectType, object, callback) {
        var op = object.id ? 'edit' : 'create';
        _httpClient2.default.post('/createOrEditObjectInResource', {
            model: (0, _stringify2.default)(object),
            resourceId: resourceId,
            resourceType: resourceType,
            objectType: objectType,
            projectName: _editData2.default.projectName
        }, function (resp) {
            callback && callback({ type: op, r: resp });
        });
    };

    // (function(){
    //     if (sessionStorage.projectName) {
    //         self.loadProject(sessionStorage.projectName);
    //     } else {
    //         location.href = '#/explorer';
    //     }
    // })();
};

module.exports = new ResourceHelper();

},{"babel-runtime/core-js/json/stringify":1,"babel-runtime/core-js/object/keys":4,"babel-runtime/core-js/promise":5,"babel-runtime/helpers/typeof":10,"providers/editData":161,"providers/rest/httpClient":165}],164:[function(require,module,exports){
'use strict';

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _httpClient = require('providers/rest/httpClient');

var _httpClient2 = _interopRequireDefault(_httpClient);

var _editData = require('providers/editData');

var _editData2 = _interopRequireDefault(_editData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FileSystem = function () {
    function FileSystem() {
        (0, _classCallCheck3.default)(this, FileSystem);
    }

    (0, _createClass3.default)(FileSystem, [{
        key: 'createFile',
        value: function createFile(path, content, callback) {
            return _httpClient2.default.post('/fileSystem/createFile', {
                path: path,
                content: content,
                projectName: _editData2.default.projectName
            }, callback);
        }
    }, {
        key: 'uploadFile',
        value: function uploadFile(file, params, callback) {
            params = params || {};
            params.projectName = _editData2.default.projectName;
            return _httpClient2.default.postMultiPart('/fileSystem/uploadFile', file, params, callback);
        }
    }, {
        key: 'removeFile',
        value: function removeFile(path, callback) {
            return _httpClient2.default.post('/fileSystem/removeFile', {
                path: path,
                projectName: _editData2.default.projectName
            }, callback);
        }
    }, {
        key: 'readFile',
        value: function readFile(path, callback) {
            return _httpClient2.default.post('/fileSystem/readFile', {
                path: path,
                projectName: _editData2.default.projectName
            }, callback);
        }
    }, {
        key: 'renameFolder',
        value: function renameFolder(oldName, newName, callback) {
            return _httpClient2.default.post('/fileSystem/renameFolder', { oldName: oldName, newName: newName }, callback);
        }
    }, {
        key: 'deleteFolder',
        value: function deleteFolder(name, callback) {
            return _httpClient2.default.post('/fileSystem/deleteFolder', { name: name }, callback);
        }
    }]);
    return FileSystem;
}();

module.exports = new FileSystem();

},{"babel-runtime/helpers/classCallCheck":8,"babel-runtime/helpers/createClass":9,"providers/editData":161,"providers/rest/httpClient":165}],165:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var noop = function noop() {};

var PromiseProvider = window.PromiseLight || window.Promise;

var objectToQuery = function objectToQuery(o) {
    if (!o) return '';
    if (o instanceof window.FormData) return o;
    var paramsArr = [];
    if (o == null || o == undefined || typeof o == 'string' || typeof o == 'number') return o;
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
    if (data.data && data.method == 'get') data.url += '?' + objectToQuery(data.data);
    var xhr = new XMLHttpRequest();
    var resolveFn = noop,
        rejectFn = noop;
    var promise = new PromiseProvider(function (resolve, reject) {
        resolveFn = resolve;
        rejectFn = reject;
    });
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200 || xhr.status == 0) {
                var resp = xhr.responseText;
                var contentType = xhr.getResponseHeader("Content-Type") || '';
                if (contentType.toLowerCase().indexOf('json') > -1) resp = JSON.parse(resp);
                if (data.success) {
                    data.success(resp);
                    RF.digest();
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
        if (data.requestType != 'multipart/form-data') // at this case header needs to be auto generated
            xhr.setRequestHeader("Content-Type", data.requestType);
    } else {
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    }
    if (data.requestType == 'application/json') data.data = data.data && (0, _stringify2.default)(data.data);
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
    (0, _keys2.default)(data).forEach(function (key) {
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

},{"babel-runtime/core-js/json/stringify":1,"babel-runtime/core-js/object/keys":4}],166:[function(require,module,exports){
'use strict';

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _httpClient = require('providers/rest/httpClient');

var _httpClient2 = _interopRequireDefault(_httpClient);

var _editData = require('providers/editData');

var _editData2 = _interopRequireDefault(_editData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var bundle = _require('bundle');
var collections = _require('collections');
var TextField = _require('textField');
var CommonBehaviour = _require('commonBehaviour');

var _loadResources = function _loadResources(projectName) {
    _httpClient2.default.post('/resource/getAll', { projectName: projectName }, function (response) {
        bundle.prepare(response);
        (0, _keys2.default)(bundle).forEach(function (key) {
            if (bundle[key] && bundle[key].call) return;
            if (_editData2.default[key] && _editData2.default[key].clear) {
                _editData2.default[key].clear();
                bundle[key].forEach(function (el) {
                    _editData2.default[key].add(el);
                });
            }
            Vue.set(_editData2.default, key, bundle[key]);
        });
        _editData2.default.gameProps = bundle.gameProps;
        response.commonBehaviourProto.forEach(function (el) {
            _editData2.default.commonBehaviourProto.add(new CommonBehaviour(el));
        });
        _editData2.default.userInterfaceList.clear().add(new TextField({ protoId: '0_0_1' }));
    });
};

var Project = function () {
    function Project() {
        (0, _classCallCheck3.default)(this, Project);
    }

    (0, _createClass3.default)(Project, [{
        key: 'getAll',
        value: function getAll(callback) {
            return _httpClient2.default.get('/project/getAll', {}, callback);
        }
    }, {
        key: 'create',
        value: function create(projectName, callback) {
            return _httpClient2.default.post('/project/create', { projectName: projectName }, callback);
        }
    }, {
        key: 'load',
        value: function load(projectName) {
            _editData2.default.reset();
            _editData2.default.projectName = projectName;
            document.title = _editData2.default.projectName;
            sessionStorage.projectName = _editData2.default.projectName;
            _promise2.default.resolve().then(function () {
                return _loadResources(projectName);
            }).then(function () {
                if (!bundle.sceneList.isEmpty()) _editData2.default.currSceneInEdit = bundle.sceneList.get(0);
                if (_editData2.default.currSceneInEdit._layers) {
                    if (_editData2.default.currSceneInEdit._layers.size()) {
                        _editData2.default.currLayerInEdit = _editData2.default.currSceneInEdit._layers.get(0);
                    }
                }
                location.href = '#/editor';
            });
        }
    }]);
    return Project;
}();

var p = new Project();

// if (sessionStorage.projectName) {
//     p.load(sessionStorage.projectName);
// } else {
//     location.href = '#/explorer';
// }

module.exports = new Project();

},{"babel-runtime/core-js/object/keys":4,"babel-runtime/core-js/promise":5,"babel-runtime/helpers/classCallCheck":8,"babel-runtime/helpers/createClass":9,"providers/editData":161,"providers/rest/httpClient":165}],167:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _httpClient = require('providers/rest/httpClient');

var _httpClient2 = _interopRequireDefault(_httpClient);

var _editData = require('providers/editData');

var _editData2 = _interopRequireDefault(_editData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Resource = function () {
    function Resource() {
        (0, _classCallCheck3.default)(this, Resource);
    }

    (0, _createClass3.default)(Resource, [{
        key: 'save',
        value: function save(model, callback) {
            if (model.toJSON) model = model.toJSON();
            return _httpClient2.default.post('/resource/save', { projectName: _editData2.default.projectName, model: model }, callback);
        }
    }, {
        key: 'saveGameProps',
        value: function saveGameProps(model, callback) {
            return _httpClient2.default.post('/resource/saveGameProps', { projectName: _editData2.default.projectName, model: model }, callback);
        }
    }, {
        key: 'remove',
        value: function remove(model, callback) {
            return _httpClient2.default.post('/resource/remove', { projectName: _editData2.default.projectName, model: {
                    id: model.id,
                    type: model.type
                } }, callback);
        }
    }]);
    return Resource;
}();

exports.default = new Resource();

},{"babel-runtime/helpers/classCallCheck":8,"babel-runtime/helpers/createClass":9,"providers/editData":161,"providers/rest/httpClient":165}],168:[function(require,module,exports){
'use strict';

window.alertEx = function (message) {
    RF.getComponentById('alertDialog').open(message);
};

window.confirmEx = function (message, callback) {
    RF.getComponentById('confirmDialog').open(message, callback);
};

},{}],169:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _editData = require('providers/editData');

var _editData2 = _interopRequireDefault(_editData);

var _resource = require('providers/rest/resource');

var _resource2 = _interopRequireDefault(_resource);

var _fileSystem = require('providers/rest/fileSystem');

var _fileSystem2 = _interopRequireDefault(_fileSystem);

var _i18n = require('providers/i18n');

var _i18n2 = _interopRequireDefault(_i18n);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mathEx = _require('mathEx');

var Utils = function () {
    function Utils() {
        (0, _classCallCheck3.default)(this, Utils);
    }

    (0, _createClass3.default)(Utils, [{
        key: 'getGameObjectCss',
        value: function getGameObjectCss() {
            var gameObj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            gameObj.scale = gameObj.scale || {};
            gameObj.spriteSheet = gameObj.spriteSheet || {};
            return {
                width: gameObj.width + 'px',
                height: gameObj.height + 'px',
                backgroundImage: gameObj.spriteSheet && gameObj.spriteSheet.resourcePath && 'url(' + _editData2.default.projectName + '/' + gameObj.spriteSheet.resourcePath + ')',
                backgroundPositionY: -gameObj._sprPosY + 'px',
                backgroundPositionX: -gameObj._sprPosX + 'px',
                backgroundRepeat: 'no-repeat',
                opacity: gameObj.alpha,
                transform: 'scale(' + gameObj.scale.x + ',' + gameObj.scale.y + ') rotateZ(' + mathEx.radToDeg(gameObj.angle) + 'deg)'
            };
        }
    }, {
        key: 'calcZoom',
        value: function calcZoom() {
            var gameObject = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            if (!gameObject.height) gameObject.height = 30;
            return gameObject.height > 30 ? 30 / gameObject.height : 1;
        }
    }, {
        key: 'merge',
        value: function merge(a, b) {
            a = a || {};
            b = b || {};
            var res = {};
            (0, _keys2.default)(a).forEach(function (key) {
                res[key] = a[key];
            });
            (0, _keys2.default)(b).forEach(function (key) {
                res[key] = b[key];
            });
            return res;
        }
    }, {
        key: 'hexToRgb',
        value: function hexToRgb(hex) {
            if (!hex) return { r: 0, g: 0, b: 0 };
            var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
            return result ? {
                r: parseInt(result[1], 16) || 0,
                g: parseInt(result[2], 16) || 0,
                b: parseInt(result[3], 16) || 0
            } : { r: 0, g: 0, b: 0 };
        }
    }, {
        key: 'rgbToHex',
        value: function rgbToHex(col) {
            if (!col) return '#000000';
            var r = +col.r,
                g = +col.g,
                b = +col.b;
            return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
        }
    }, {
        key: 'dataURItoBlob',
        value: function dataURItoBlob(dataURI) {
            // convert base64/URLEncoded data component to raw binary data held in a string
            var byteString = void 0;
            if (dataURI.split(',')[0].indexOf('base64') >= 0) byteString = atob(dataURI.split(',')[1]);else byteString = unescape(dataURI.split(',')[1]);

            // separate out the mime component
            var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

            // write the bytes of the string to a typed array
            var ia = new Uint8Array(byteString.length);
            for (var i = 0; i < byteString.length; i++) {
                ia[i] = byteString.charCodeAt(i);
            }

            return new Blob([ia], { type: mimeString });
        }
    }, {
        key: 'range',
        value: function range(rFr, rTo) {
            var arr = [],
                i = void 0;
            if (rTo == undefined) {
                rTo = rFr;
                rFr = 0;
            }
            if (rFr < rTo) {
                for (i = rFr; i <= rTo; i++) {
                    arr.push(i);
                }
            } else {
                for (i = rFr; i >= rTo; i--) {
                    arr.push(i);
                }
            }
            return arr;
        }
    }, {
        key: '_createAceCompleter',
        value: function _createAceCompleter() {
            var result = [];
            var res = {};
            var objs = ['gameObject'];
            objs.forEach(function (go) {
                var GObjClass = _require(go);
                var goObj = new GObjClass();
                for (var key in goObj) {
                    if (key.indexOf('_') == 0) continue;
                    res[key] = {
                        name: key,
                        value: key,
                        score: 1,
                        meta: 'gameObject property'
                    };
                }
            });
            (0, _keys2.default)(res).forEach(function (key) {
                result.push(res[key]);
            });
            return result;
        }
    }, {
        key: '_waitForFrameAndDo',
        value: function _waitForFrameAndDo(file, path) {
            var frame = document.getElementById('scriptEditorFrame');
            var contentWindow = frame && frame.contentWindow;
            var self = this;
            if (!contentWindow || !contentWindow.ready) {
                setTimeout(function () {
                    self._waitForFrameAndDo(file, path);
                }, 100);
                return;
            }
            contentWindow.setCode(file);
            contentWindow.calcEditorSize();
            contentWindow.setAutocomplete(this._createAceCompleter());
            window.removeEventListener('resize', contentWindow.calcEditorSize);
            window.addEventListener('resize', contentWindow.calcEditorSize);
            window.saveCode = function (code) {
                _fileSystem2.default.createFile(path, code);
            };
        }
    }, {
        key: 'getArray',
        value: function getArray(num) {
            if (!num) return [];
            var res = [];
            for (var i = 0; i < num; i++) {
                res.push(i);
            }
            return res;
        }
    }, {
        key: 'size',
        value: function size(obj) {
            if (!obj) return 0;
            return (0, _keys2.default)(obj).length;
        }
    }, {
        key: 'deleteModel',
        value: function deleteModel(model, callback) {
            window.confirmEx(_i18n2.default.getAll().confirmQuestion(model), function () {
                _editData2.default[model.type + 'List'].remove({ id: model.id });
                _resource2.default.remove(model, callback);
            });
        }
    }, {
        key: 'openEditor',
        value: function openEditor(resourceUrl) {
            var self = this;
            _editData2.default.scriptEditorUrl = resourceUrl;
            var path = 'script/' + resourceUrl;
            console.log(path);
            _fileSystem2.default.readFile(path, function (file) {
                self._waitForFrameAndDo(file, path);
            });
        }
    }]);
    return Utils;
}();

exports.default = new Utils();

},{"babel-runtime/core-js/object/keys":4,"babel-runtime/helpers/classCallCheck":8,"babel-runtime/helpers/createClass":9,"providers/editData":161,"providers/i18n":162,"providers/rest/fileSystem":164,"providers/rest/resource":167}]},{},[115]);
