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
module.exports = "\n<app-modal\n        v-on:close=\"close()\"\n        v-if=\"opened\"\n        xmlns:v-on=\"http://www.w3.org/1999/xhtml\">\n    <div class=\"withMargin\">\n        <div class=\"alert_body\">\n            {{message}}\n        </div>\n        <div>\n            <button v-on:click=\"close()\">{{i18n.ok}}</button>\n        </div>\n    </div>\n</app-modal>";

},{}],100:[function(require,module,exports){
'use strict';

var abstractDialog = require('providers/abstractDialog');

module.exports.component = Vue.component('app-alert-dialog', {
    mixins: [abstractDialog],
    props: [],
    template: require('./alertDialog.html'),
    data: function data() {
        return {
            message: 'default message',
            i18n: require('providers/i18n').getAll()
        };
    },
    created: function created() {
        module.exports.instance = this;
    },
    components: {
        appModal: require('components/modal/modal')
    },
    methods: {
        open: function open(msg) {
            this.opened = true;
            this.message = msg;
        }
    }
});

},{"./alertDialog.html":99,"components/modal/modal":114,"providers/abstractDialog":171,"providers/i18n":175}],101:[function(require,module,exports){
module.exports = "<div\n        class=\"inlineBlock\"\n        v-on:click=\"click($event)\"\n        v-on:mousemove=\"mouseMove($event)\"\n        xmlns:v-on=\"http://www.w3.org/1999/xhtml\">\n    <div data-container class=\"inlineBlock\">\n        <svg viewBox=\"0 0 200 200\" width=\"30\" height=\"30\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\n            <circle cx=\"100\" cy=\"100\" r=\"100\" stroke=\"black\" stroke-width=\"1\" fill=\"white\"></circle>\n            <line id=\"line\" x1=\"100\" y1=\"100\"\n                  x2=\"200\" y2=\"100\"\n                  stroke=\"black\"\n                  stroke-width=\"2\"\n                  :transform=\"'rotate('+angleInDeg+',100,100)'\"\n                    >\n            </line>\n        </svg>\n    </div>\n    <div class=\"smallXX\" :title=\"object[value]+' rad'\">\n        {{angleInDeg}}&deg;\n    </div>\n</div>";

},{}],102:[function(require,module,exports){
'use strict';

module.exports = Vue.component('app-angle-picker', {
    props: ['object', 'value'],
    template: require('./anglePicker.html'),
    data: function data() {
        return {};
    },
    created: function created() {},
    computed: {
        angleInDeg: function angleInDeg() {
            var res = this.object[this.value] * 180 / Math.PI % 360;
            return +res.toFixed(2) || 0;
        }
    },
    methods: {
        calcAngleFromEvent: function calcAngleFromEvent(e) {
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
    }
});

},{"./anglePicker.html":101}],103:[function(require,module,exports){
module.exports = "<div xmlns:v-on=\"http://www.w3.org/1999/xhtml\">\n    <div\n        class=\"collapsible_header bold noSelect\"\n    >\n        <div class=\"table width100\">\n            <div class=\"row\">\n                <div class=\"cell width1\">\n                    <span\n                            class=\"collapsible_point noBrake\"\n                            @click=\"toggle()\"\n                            :class=\"{rotated:opened}\">▷</span>\n                </div>\n                <div class=\"cell\">\n                    <span\n                            @click=\"toggle()\"\n                            >&nbsp;{{title}}</span>\n                </div>\n                <div class=\"cell width1\">\n                    <div v-if=\"crud && crud.create\" class=\"add\" v-on:click.stop=\"crud.create(meta)\"></div>\n                </div>\n                <div class=\"cell width1\">\n                    <div v-if=\"crud && crud.editScript\" class=\"script\" v-on:click.stop=\"crud.editScript(object)\"></div>\n                </div>\n                <div class=\"cell width1\">\n                    <div v-if=\"crud && crud.edit\" class=\"edit\" v-on:click.stop=\"crud.edit(object,meta)\"></div>\n                </div>\n                <div class=\"cell width1\">\n                    <div v-if=\"crud && crud.delete\" class=\"delete\" v-on:click.stop=\"crud.delete(object,meta)\"></div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div\n            class=\"collapsible_content\"\n            :class=\"{opened:opened}\">\n        <slot></slot>\n    </div>\n</div>";

},{}],104:[function(require,module,exports){
'use strict';

var id = 0;

module.exports = Vue.component('app-collapsible', {
    props: ['title', 'crud', 'object', 'meta'],
    template: require('./collapsible.html'),
    data: function data() {
        return {
            opened: false,
            id: null
        };
    },
    created: function created() {
        this.id = id;
        this.opened = localStorage['clps_' + this.id] == 'true';
        id++;
    },
    methods: {
        toggle: function toggle() {
            this.opened = !this.opened;
            localStorage['clps_' + this.id] = this.opened;
        }
    }
});

},{"./collapsible.html":103}],105:[function(require,module,exports){
module.exports = "<div class=\"inlineBlock\" xmlns:v-on=\"http://www.w3.org/1999/xhtml\">\r\n\r\n    <div\r\n            :style=\"{\r\n                cursor: 'pointer',\r\n                width: 24 + 'px',\r\n                height:24 + 'px',\r\n                backgroundColor: 'rgb('+currentColorRGB.r+','+currentColorRGB.g+','+currentColorRGB.b+')'\r\n            }\"\r\n            v-on:click=\"click()\"\r\n            >\r\n    </div>\r\n\r\n    <app-color-picker-dialog/>\r\n\r\n</div>\r\n\r\n";

},{}],106:[function(require,module,exports){
'use strict';

var colorPickerDialog = require('./colorPickerDialog');

module.exports = Vue.component('app-color-picker', {
    props: ['object', 'value', 'onchange'],
    template: require('./colorPicker.html'),
    data: function data() {
        return {};
    },
    computed: {
        currentColorRGB: function currentColorRGB() {
            return this.object[this.value];
        }
    },
    created: function created() {},
    methods: {
        click: function click(e) {
            colorPickerDialog.instance.open(this, this.currentColorRGB);
        },
        applyColor: function applyColor(color) {
            this.object[this.value] = color;
        }
    },
    components: {
        appColorPickerDialog: require('components/colorPicker/colorPickerDialog').component
    }
});

},{"./colorPicker.html":105,"./colorPickerDialog":108,"components/colorPicker/colorPickerDialog":108}],107:[function(require,module,exports){
module.exports = "<app-modal\n        v-on:close=\"close()\"\n        v-if=\"opened\"\n        xmlns:v-on=\"http://www.w3.org/1999/xhtml\">\n\n    <table>\n        <tr>\n            <td>\n                <input type=\"color\" v-model=\"currentColorHex\" v-on:change=\"hexChanged()\"/>\n            </td>\n            <td>\n                <input type=\"text\"  v-model=\"currentColorHex\" v-on:change=\"hexChanged()\"/>\n            </td>\n            <td></td>\n        </tr>\n\n        <table class=\"width100\">\n            <tr\n                    v-for=\"item in colorEnums\">\n                <td\n                        :style=\"{\n                            color: item.left\n                        }\"\n                        >\n                    {{item.left}}\n                </td>\n                <td class=\"centerText\">\n                    <input class=\"vAlign\" type=\"range\" min=\"0\" max=\"255\" v-model=\"currentColorRGB[item.key]\" v-on:change=\"rgbChanged()\"/>\n                    <br/>\n                    <input class=\"small vAlign\" v-model=\"currentColorRGB[item.key]\" v-on:change=\"rgbChanged()\"/>\n                    <hr/>\n                </td>\n                <td\n                        :style=\"{\n                            color: item.right\n                        }\"\n                        >{{item.right}}</td>\n            </tr>\n\n\n        </table>\n    </table>\n\n    <button\n            v-on:click=\"applyColor()\">\n        {{i18n.edit}}\n    </button>\n\n</app-modal>";

},{}],108:[function(require,module,exports){
'use strict';

var abstractDialog = require('providers/abstractDialog');
var utils = require('providers/utils');
var colorPicker = null;

var colorEnums = [{ left: 'red', right: 'cyan', key: 'r' }, { left: 'green', right: 'magenta', key: 'g' }, { left: 'blue', right: 'yellow', key: 'b' }];

module.exports.component = Vue.component('app-color-picker-dialog', {
    mixins: [abstractDialog],
    props: [],
    template: require('./colorPickerDialog.html'),
    data: function data() {
        return {
            i18n: require('providers/i18n').getAll(),
            currentColorRGB: { r: 0, g: 0, b: 0 },
            currentColorHex: '#000000',
            colorEnums: colorEnums
        };
    },
    created: function created() {
        module.exports.instance = this;
    },
    components: {
        appModal: require('components/modal/modal')
    },
    methods: {
        open: function open(_colorPicker, color) {
            this.opened = true;
            colorPicker = _colorPicker;
            this.currentColorRGB.r = color.r;
            this.currentColorRGB.g = color.g;
            this.currentColorRGB.b = color.b;
            this.currentColorHex = utils.rgbToHex(this.currentColorRGB);
        },
        hexChanged: function hexChanged() {
            var color = utils.hexToRgb(this.currentColorHex);
            Vue.set(this.currentColorRGB, 'r', color.r);
            Vue.set(this.currentColorRGB, 'g', color.g);
            Vue.set(this.currentColorRGB, 'b', color.b);
        },
        rgbChanged: function rgbChanged() {
            this.currentColorHex = utils.rgbToHex(this.currentColorRGB);
        },
        applyColor: function applyColor() {
            colorPicker.applyColor(this.currentColorRGB);
            colorPicker.onchange && colorPicker.onchange();
            this.close();
        }
    }
});

},{"./colorPickerDialog.html":107,"components/modal/modal":114,"providers/abstractDialog":171,"providers/i18n":175,"providers/utils":181}],109:[function(require,module,exports){
module.exports = "<app-modal\n        v-on:close=\"close()\"\n        v-if=\"opened\"\n        xmlns:v-on=\"http://www.w3.org/1999/xhtml\">\n    <div class=\"withMargin\">\n        <div class=\"alert_body\">\n            {{message}}\n        </div>\n        <div>\n            <button v-on:click=\"confirmChoose()\">{{i18n.confirm}}</button>\n            <button v-on:click=\"close()\">{{i18n.cancel}}</button>\n        </div>\n    </div>\n</app-modal>";

},{}],110:[function(require,module,exports){
'use strict';

var abstractDialog = require('providers/abstractDialog');

module.exports.component = Vue.component('app-confirm-dialog', {
    mixins: [abstractDialog],
    props: [],
    template: require('./confirmDialog.html'),
    data: function data() {
        return {
            message: 'default message',
            confirm: function confirm() {},
            i18n: require('providers/i18n').getAll()
        };
    },
    created: function created() {
        module.exports.instance = this;
    },
    components: {
        appModal: require('components/modal/modal')
    },
    methods: {
        open: function open(message, confirmCallback) {
            this.opened = true;
            this.message = message;
            this.confirm = confirmCallback;
        },
        confirmChoose: function confirmChoose() {
            this.confirm();
            this.close();
        }
    }
});

},{"./confirmDialog.html":109,"components/modal/modal":114,"providers/abstractDialog":171,"providers/i18n":175}],111:[function(require,module,exports){
module.exports = "<div xmlns:v-on=\"http://www.w3.org/1999/xhtml\">\n    <button>{{title}}</button>\n    <input  required :accept=\"accept\" type=\"file\"/>\n</div>";

},{}],112:[function(require,module,exports){
'use strict';

module.exports = Vue.component('app-input-file', {
    props: ['title', 'accept'],
    template: require('./inputFile.html'),
    data: function data() {
        return {};
    },
    created: function created() {},
    mounted: function mounted() {
        var btn = this.$el.querySelector('button');
        var input = this.$el.querySelector('input');
        btn.onclick = function () {
            input.click();
        };
        var self = this;
        input.onchange = function () {
            var file = input.files[0];
            var name = file.name.split('.')[0];
            var url = window.URL || window.webkitURL;
            var src = url.createObjectURL(file);
            self.$emit('picked', src, file, name);
        };
    },
    methods: {
        toggle: function toggle() {}
    }
});

},{"./inputFile.html":111}],113:[function(require,module,exports){
module.exports = "<div class=\"dialogWrapper\" xmlns:v-on=\"http://www.w3.org/1999/xhtml\">\n    <div class=\"fullscreen shadow\"></div>\n    <div class=\"dialog\">\n        <div class=\"dialogContent\">\n            <div class=\"dialogClose\">\n                <span v-on:click=\"close()\" class=\"pointer\">X</span>\n            </div>\n            <div class=\"withPadding\">\n                <slot></slot>\n            </div>\n        </div>\n    </div>\n</div>\n";

},{}],114:[function(require,module,exports){
'use strict';

module.exports = Vue.component('app-modal', {
    props: [],
    template: require('./modal.html'),
    data: function data() {
        return {};
    },
    created: function created() {},
    methods: {
        close: function close() {
            this.$emit('close');
        }
    }
});

},{"./modal.html":113}],115:[function(require,module,exports){
module.exports = "<div\r\n        v-if=\"editData.currLayerInEdit._gameObjects\"\r\n        xmlns:v-on=\"http://www.w3.org/1999/xhtml\">\r\n    <div v-for=\"item in editData.currLayerInEdit._gameObjects.rs\">\r\n\r\n        <div\r\n                v-if=\"!item.subType\"\r\n                app-draggable=\"gameObjectFromSelf\"\r\n                app-context-menu=\"ctxGameObject\"\r\n                v-on:click.capture=\"editData.currSceneGameObjectInEdit=item\"\r\n                :style=\"utils.merge(\r\n                            utils.getGameObjectCss(item),\r\n                            {\r\n                                position:'absolute',\r\n                                left:\r\n                                     item.fixedToCamera?(item.pos.x+'px'):\r\n                                     item.pos.x -\r\n                                     frameWidth *\r\n                                     editData.tileMapPosX +\r\n                                     'px',\r\n                                top:\r\n                                     item.fixedToCamera?(item.pos.y+'px'):\r\n                                     item.pos.y -\r\n                                     frameHeight *\r\n                                     editData.tileMapPosY +\r\n                                     'px',\r\n                            }\r\n                    )\"\r\n                :class=\"{active:item==editData.currSceneGameObjectInEdit}\"\r\n                >\r\n\r\n        </div>\r\n\r\n        <div\r\n                v-if=\"item.subType=='textField'\"\r\n                app-draggable=\"gameObjectFromSelf\"\r\n                v-on:click.capture=\"editData.currSceneGameObjectInEdit=item\"\r\n                :style=\"utils.merge(\r\n                            utils.getGameObjectCss(item),\r\n                            {\r\n                                position:'absolute',\r\n                                left:\r\n                                     item.pos.x -\r\n                                     frameWidth *\r\n                                     editData.tileMapPosX +\r\n                                     'px',\r\n                                top:\r\n                                     item.pos.y -\r\n                                     frameHeight *\r\n                                     editData.tileMapPosY +\r\n                                     'px',\r\n                                backgroundColor:'rgb(0,222,0.1)',\r\n                                height:item.height+'px',\r\n                                width:item.width?item.width+'px':'10px',\r\n                                backgroundColor:item.width?'':'#ddd',\r\n                                backgroundImage:'none'\r\n                            }\r\n                    )\"\r\n                :class=\"{active:item==editData.currSceneGameObjectInEdit}\"\r\n                >\r\n\r\n            <div style=\"position: relative;left:0;top:0;z-index:10\">\r\n                            <span\r\n                                :style=\"{\r\n                                    left:item.pos.x+'px',\r\n                                    top: item.pos.y+'px',\r\n                                    display:ch=='\\n'?'block':'inline-block',\r\n                                    width:item._font.fontContext.symbols[ch].width+'px',\r\n                                    height:item._font.fontContext.symbols[ch].height+'px',\r\n                                    backgroundImage:'url('+editData.projectName+'/'+item._font.resourcePath+')',\r\n                                    backgroundRepeat:     'no-repeat',\r\n                                    backgroundPositionX: -item._font.fontContext.symbols[ch].x+'px',\r\n                                    backgroundPositionY: -item._font.fontContext.symbols[ch].y+'px'\r\n                                }\"\r\n                                    v-for=\"ch in item._chars\">\r\n                                </span>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</div>";

},{}],116:[function(require,module,exports){
'use strict';

var editData = require('providers/editData');

module.exports = Vue.component('app-curr-scene', {
    props: [],
    template: require('./scene.html'),
    data: function data() {
        return {
            editData: editData,
            i18n: require('providers/i18n').getAll(),
            utils: require('providers/utils')
        };
    },
    computed: {
        frameWidth: function frameWidth() {
            if (!editData.currSceneInEdit.tileMap) return 0;
            if (!editData.currSceneInEdit.tileMap._spriteSheet) return 0;
            return editData.currSceneInEdit.tileMap._spriteSheet._frameWidth || 0;
        },
        frameHeight: function frameHeight() {
            if (!editData.currSceneInEdit.tileMap) return 0;
            if (!editData.currSceneInEdit.tileMap._spriteSheet) return 0;
            return editData.currSceneInEdit.tileMap._spriteSheet._frameHeight || 0;
        }
    },
    components: {},
    methods: {}
});

},{"./scene.html":115,"providers/editData":173,"providers/i18n":175,"providers/utils":181}],117:[function(require,module,exports){
module.exports = "<div\n        class=\"height100\"\n        v-if=\"editData.scriptEditorUrl\"\n        >\n    <div style=\"height:10px;font-size: 10px;\">\n        {{editData.scriptEditorUrl}}\n    </div>\n    <div\n            id=\"scriptEditor\"\n            style=\"height:calc(100% - 10px)\"\n            >\n        <iframe\n                id=\"scriptEditorFrame\"\n                frameborder=\"0\"\n                class=\"block width100 height100 noOverFlow\"\n                src=\"/editor\"\n                ></iframe>\n    </div>\n</div>";

},{}],118:[function(require,module,exports){
'use strict';

var resource = require('providers/resource');

module.exports = Vue.component('app-script-editor', {
    props: [],
    template: require('./scriptEditor.html'),
    data: function data() {
        return {
            editData: require('providers/editData'),
            i18n: require('providers/i18n').getAll()
        };
    },
    created: function created() {},
    components: {},
    methods: {}
});

},{"./scriptEditor.html":117,"providers/editData":173,"providers/i18n":175,"providers/resource":176}],119:[function(require,module,exports){
module.exports = "\r\n<app-modal\r\n        v-on:close=\"close()\"\r\n        v-if=\"opened\" xmlns:v-on=\"http://www.w3.org/1999/xhtml\">\r\n\r\n    <table class=\"width100\">\r\n        <tr>\r\n            <td class=\"borderBottom\">\r\n                {{i18n.name}}\r\n            </td>\r\n            <td class=\"borderBottom\">\r\n                {{editData.currCommonBehaviourInEdit.name}}\r\n            </td>\r\n        </tr>\r\n        <tr>\r\n            <td class=\"borderBottom\">\r\n                {{i18n.description}}\r\n            </td>\r\n            <td class=\"borderBottom\">\r\n                {{editData.currCommonBehaviourInEdit.description}}\r\n            </td>\r\n        </tr>\r\n        <tr v-for=\"(value, key) in editData.currCommonBehaviourInEdit.parameters\">\r\n            <td class=\"borderBottom\">\r\n                {{key}}\r\n            </td>\r\n            <td class=\"borderBottom\">\r\n                <input\r\n                        type=\"text\"\r\n                        v-model=\"editData.currCommonBehaviourInEdit.parameters[key]\"/>\r\n            </td>\r\n        </tr>\r\n        <tr v-if=\"utils.size(editData.currCommonBehaviourInEdit.parameters)==0\">\r\n            <td colspan=\"2\" class=\"borderBottom\">\r\n                {{i18n.noDataToEdit}}\r\n            </td>\r\n        </tr>\r\n    </table>\r\n    <button\r\n            v-on:click=\"createOrEditCommonBehaviour(editData.currCommonBehaviourInEdit)\"\r\n            :disabled=\"!form.valid()\">\r\n        {{editData.currCommonBehaviourInEdit.id?i18n.edit:i18n.create}}\r\n    </button>\r\n\r\n</app-modal>";

},{}],120:[function(require,module,exports){
"use strict";

var abstractDialog = require('providers/abstractDialog');
var editData = require('providers/editData');
var restResource = require('providers/rest/resource');

module.exports.component = Vue.component('app-common-behaviour-dialog', {
    mixins: [abstractDialog],
    props: [],
    template: require('./commonBehaviourDialog.html'),
    data: function data() {
        return {
            form: require('providers/validator').new(),
            editData: editData,
            i18n: require('providers/i18n').getAll(),
            utils: require('providers/utils')

        };
    },
    created: function created() {
        module.exports.instance = this;
    },
    components: {},
    methods: {
        open: function open() {
            this.opened = true;
        },
        createOrEditCommonBehaviour: function createOrEditCommonBehaviour() {
            var cb = editData.currCommonBehaviourInEdit;
            var self = this;
            restResource.save(cb).then(function (resp) {
                if (resp.created) {
                    cb.id = resp.id;
                    editData.commonBehaviourList.add(cb);
                    editData.currGameObjectInEdit.commonBehaviour.add(cb);
                    return restResource.save(editData.currGameObjectInEdit);
                }
            }).then(function () {
                editData.currGameObjectInEdit.updateCloner();
                self.close();
            }).catch(window.catchPromise);
        }
    }
});

},{"./commonBehaviourDialog.html":119,"providers/abstractDialog":171,"providers/editData":173,"providers/i18n":175,"providers/rest/resource":179,"providers/utils":181,"providers/validator":182}],121:[function(require,module,exports){
module.exports = "<div>\n    <app-sound-dialog/>\n    <app-particle-system-dialog/>\n    <app-particle-system-preview-dialog/>\n    <app-font-dialog/>\n    <app-sprite-sheet-dialog/>\n    <app-game-object-dialog/>\n    <app-frame-animation-dialog/>\n    <app-common-behaviour-dialog/>\n    <app-scene-dialog/>\n    <app-layer-dialog/>\n</div>";

},{}],122:[function(require,module,exports){
'use strict';

module.exports = Vue.component('app-dialogs', {
    props: [],
    template: require('./dialogs.html'),
    data: function data() {
        return {
            editData: require('providers/editData'),
            i18n: require('providers/i18n').getAll()
        };
    },
    components: {
        appSoundDialog: require('./soundDialog/soundDialog').component,
        appParticleSystemDialog: require('./particleSystemDialog/particleSystemDialog').component,
        appParticleSystemPreviewDialog: require('./particleSystemPreviewDialog/particleSystemPreviewDialog').component,
        appFontDialog: require('./fontDialog/fontDialog').component,
        appSpriteSheetDialog: require('./spriteSheetDialog/spriteSheetDialog').component,
        appGameObjectDialog: require('./gameObjectDialog/gameObjectDialog').component,
        appFrameAnimationDialog: require('./frameAnimationDialog/frameAnimationDialog').component,
        appCommonBehaviourDialog: require('./commonBehaviourDialog/commonBehaviourDialog').component,
        appSceneDialog: require('./sceneDialog/sceneDialog').component,
        appLayerDialog: require('./layerDialog/layerDialog').component
    },
    methods: {}
});

},{"./commonBehaviourDialog/commonBehaviourDialog":120,"./dialogs.html":121,"./fontDialog/fontDialog":124,"./frameAnimationDialog/frameAnimationDialog":126,"./gameObjectDialog/gameObjectDialog":128,"./layerDialog/layerDialog":130,"./particleSystemDialog/particleSystemDialog":132,"./particleSystemPreviewDialog/particleSystemPreviewDialog":134,"./sceneDialog/sceneDialog":136,"./soundDialog/soundDialog":138,"./spriteSheetDialog/spriteSheetDialog":140,"providers/editData":173,"providers/i18n":175}],123:[function(require,module,exports){
module.exports = "\n<app-modal\n        v-on:close=\"close()\"\n        v-if=\"opened\" xmlns:v-on=\"http://www.w3.org/1999/xhtml\">\n\n    <table class=\"width100\">\n        <tr>\n            <td>\n                {{i18n.selectFont}}\n            </td>\n            <td>\n                <select\n                        required\n                        v-control=\"{form:form,model:editData.currFontInEdit,prop:'fontFamily'}\"\n                        v-model=\"editData.currFontInEdit.fontFamily\" class=\"width100\">\n                    <option\n                            :value=\"fnt.displayName\"\n                            v-for=\"fnt in systemFontList\">\n                        {{fnt.displayName}}\n                    </option>\n                </select>\n            </td>\n        </tr>\n        <tr>\n            <td>\n                {{i18n.name}}\n            </td>\n            <td>\n                <input required\n                       v-control=\"{form:form,model:editData.currFontInEdit,prop:'name'}\"\n                       v-model=\"editData.currFontInEdit.name\" class=\"width100\">\n            </td>\n        </tr>\n        <tr>\n            <td>\n                {{i18n.fontSize}}\n            </td>\n            <td>\n                <input required type=\"number\"\n                       min=\"1\"\n                       max=\"1000\"\n                       v-control=\"{form:form,model:editData.currFontInEdit,prop:'fontSize'}\"\n                       v-model=\"editData.currFontInEdit.fontSize\" class=\"width100\">\n            </td>\n        </tr>\n        <tr>\n            <td>\n                {{i18n.fontColor}}\n            </td>\n            <td>\n                <app-color-picker\n                        :object=\"editData.currFontInEdit\"\n                        :value=\"'fontColor'\"\n                        />\n            </td>\n        </tr>\n        <tr>\n            <td colspan=\"2\">\n                <input v-model=\"fontSample\" class=\"width100\"/>\n            </td>\n        </tr>\n        <tr>\n            <td colspan=\"2\">\n                <div :style='{\n                    fontFamily:editData.currFontInEdit.fontFamily,\n                    fontSize:editData.currFontInEdit.fontSize+\"px\",\n                    color:utils.rgbToHex(editData.currFontInEdit.fontColor)\n                }'>{{fontSample}}</div>\n            </td>\n        </tr>\n    </table>\n\n    <button\n            :disabled=\"!form.valid()\"\n            v-on:click=\"createOrEditFont(editData.currFontInEdit)\">\n        {{editData.currFontInEdit.id?i18n.edit:i18n.create}}\n    </button>\n\n</app-modal>";

},{}],124:[function(require,module,exports){
'use strict';

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var abstractDialog = require('providers/abstractDialog');

var editData = require('providers/editData');
var restFileSystem = require('providers/rest/fileSystem');
var restResource = require('providers/rest/resource');

var fontSample = 'Test me! Text here';
var chrome = require('providers/chrome');
var utils = require('providers/utils');

var SYMBOL_PADDING = 4;

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

module.exports.component = Vue.component('app-font-dialog', {
    mixins: [abstractDialog],
    props: [],
    template: require('./fontDialog.html'),
    data: function data() {
        return {
            form: require('providers/validator').new(),
            editData: editData,
            i18n: require('providers/i18n').getAll(),
            utils: utils,
            fontSample: fontSample,
            systemFontList: []
        };
    },
    created: function created() {
        module.exports.instance = this;
    },
    components: {
        appColorPicker: require('components/colorPicker/colorPicker')
    },
    methods: {
        open: function open() {
            this.opened = true;
            if (!this.systemFontList.length) {
                var self = this;
                chrome.requestToApi({ method: 'getFontList' }, function (list) {
                    self.systemFontList = list;
                });
            }
        },
        createOrEditFont: function createOrEditFont(model) {
            var self = this;
            var strFont = model.fontSize + 'px' + ' ' + model.fontFamily;
            model.fontContext = getFontContext([{ from: 32, to: 150 }, { from: 1040, to: 1116 }], strFont, 320);
            var file = utils.dataURItoBlob(getFontImage(model.fontContext, strFont, utils.rgbToHex(model.fontColor)));

            _promise2.default.resolve().then(function () {
                return restFileSystem.uploadFile(file, {
                    type: model.type,
                    fileName: model.name + '.png'
                });
            }).then(function () {
                return restResource.save(model);
            }).then(function (resp) {
                if (resp.created) {
                    model.id = resp.id;
                    editData[model.type + 'List'].add(model);
                } else if (resp.updated) {
                    model.updateCloner();
                }
                self.close();
            });
        }
    }
});

},{"./fontDialog.html":123,"babel-runtime/core-js/promise":5,"components/colorPicker/colorPicker":106,"providers/abstractDialog":171,"providers/chrome":172,"providers/editData":173,"providers/i18n":175,"providers/rest/fileSystem":177,"providers/rest/resource":179,"providers/utils":181,"providers/validator":182}],125:[function(require,module,exports){
module.exports = "<app-modal\r\n        v-on:close=\"close()\"\r\n        v-if=\"opened\" xmlns:v-on=\"http://www.w3.org/1999/xhtml\">\r\n\r\n    <table class=\"width100\">\r\n        <tr>\r\n            <td>\r\n                {{i18n.name}}\r\n            </td>\r\n            <td>\r\n                <input\r\n                    required\r\n                    v-control=\"{form:form,model:editData.currFrameAnimationInEdit,prop:'name'}\"\r\n                    v-model=\"editData.currFrameAnimationInEdit.name\"/>\r\n            </td>\r\n            <td rowspan=\"3\">\r\n                <div style=\"max-height: 80vh;max-width:80vw;overflow: scroll;\"\r\n                        >\r\n                    {{editData.currFrameAnimationInEdit._gameObject.currFrameIndex||0}}\r\n\r\n                    <div :style=\"utils.merge(\r\n                                    utils.getGameObjectCss(editData.currFrameAnimationInEdit._gameObject),\r\n                                    {border:'1px solid blue'}\r\n                                )\">\r\n                    </div>\r\n\r\n                    <div>\r\n                        <button\r\n                                v-on:click=\"playAnimation()\"\r\n                                :disabled=\"!form.valid()\" class=\"inlineBlock withMargin\">{{i18n.playAnim}}</button>\r\n                        <button\r\n                                v-on:click=\"stopAnimation()\"\r\n                                :disabled=\"!form.valid()\" class=\"inlineBlock withMargin\">{{i18n.stopAnim}}</button>\r\n                    </div>\r\n\r\n                    <div>\r\n\r\n                        <button\r\n                                v-on:click=\"previousFrame()\"\r\n                                :disabled=\"!form.valid()\" class=\"inlineBlock withMargin\"> << </button>\r\n\r\n                        <button\r\n                                v-on:click=\"nextFrame()\"\r\n                                :disabled=\"!form.valid()\" class=\"inlineBlock withMargin\"> >> </button>\r\n                    </div>\r\n\r\n\r\n                    <div class=\"relative\"\r\n                         :style=\"{\r\n                                        'background-image':     'url('+editData.projectName+'/'+editData.currFrameAnimationInEdit._gameObject.spriteSheet.resourcePath+')',\r\n                                        'width':                editData.currFrameAnimationInEdit._gameObject.spriteSheet.width+'px',\r\n                                        'height':               editData.currFrameAnimationInEdit._gameObject.spriteSheet.height+'px'\r\n                                      }\">\r\n                        <div\r\n                                v-for=\"(v,i)  in editData.currFrameAnimationInEdit._gameObject.spriteSheet.numOfFramesH*editData.currFrameAnimationInEdit._gameObject.spriteSheet.numOfFramesV\"\r\n                                :style=\"{\r\n                                            'display':        'inline-block',\r\n                                            'left':           editData.currFrameAnimationInEdit._gameObject.spriteSheet.getFramePosX(i)+'px',\r\n                                            'top':            editData.currFrameAnimationInEdit._gameObject.spriteSheet.getFramePosY(i)+'px',\r\n                                            'position':       'absolute',\r\n                                            'text-align':     'left',\r\n                                            'border':         '1px solid red',\r\n                                            'width':          editData.currFrameAnimationInEdit._gameObject.spriteSheet._frameWidth+'px',\r\n                                            'height':         editData.currFrameAnimationInEdit._gameObject.spriteSheet._frameHeight+'px'\r\n                                      }\">{{i}}</div>\r\n                    </div>\r\n                </div>\r\n            </td>\r\n        </tr>\r\n        <tr>\r\n            <td>\r\n                {{i18n.duration}}\r\n            </td>\r\n            <td>\r\n                <input\r\n                        type=\"number\"\r\n                        min=\"1\"\r\n                        required\r\n                        v-control=\"{form:form,model:editData.currFrameAnimationInEdit,prop:'duration'}\"\r\n                        v-model=\"editData.currFrameAnimationInEdit.duration\"/>\r\n            </td>\r\n        </tr>\r\n        <tr>\r\n            <td>\r\n\r\n                <table>\r\n                    <tr>\r\n                        <td>\r\n                            {{i18n.frames}}\r\n                        </td>\r\n                        <td>\r\n                            <button v-on:click=\"frames=allIndexes()\">{{i18n.all}}</button>\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>\r\n                            {{i18n.from}}\r\n                        </td>\r\n                        <td>\r\n                            <input\r\n                                    type=\"number\"\r\n                                    v-model=\"from\"\r\n                                    min=\"0\"\r\n                                    v-on:change=\"frames=utils.range(from,to).join(',')\">\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>\r\n                            {{i18n.to}}\r\n                        </td>\r\n                        <td>\r\n                            <input\r\n                                    type=\"number\"\r\n                                    min=\"0\"\r\n                                    v-model=\"to\"\r\n                                    v-on:change=\"frames=utils.range(from,to).join(',')\">\r\n                        </td>\r\n                    </tr>\r\n                </table>\r\n\r\n            </td>\r\n            <td>\r\n           <textarea\r\n                   required\r\n                   v-model=\"frames\"></textarea>\r\n            </td>\r\n        </tr>\r\n    </table>\r\n    <button\r\n            v-on:click=\"createOrEditFrameAnimation()\"\r\n            :disabled=\"!form.valid()\">\r\n        {{editData.currFrameAnimationInEdit.id?i18n.edit:i18n.create}}\r\n    </button>\r\n\r\n</app-modal>";

},{}],126:[function(require,module,exports){
'use strict';

var abstractDialog = require('providers/abstractDialog');
var editData = require('providers/editData');
var restResource = require('providers/rest/resource');

module.exports.component = Vue.component('app-frame-animation-dialog', {
    mixins: [abstractDialog],
    props: [],
    template: require('./frameAnimationDialog.html'),
    data: function data() {
        return {
            form: require('providers/validator').new(),
            editData: editData,
            i18n: require('providers/i18n').getAll(),
            utils: require('providers/utils'),

            isStopped: true,
            from: null,
            to: null,
            frames: ''
        };
    },
    created: function created() {
        module.exports.instance = this;
    },
    components: {},
    methods: {
        open: function open() {
            this.opened = true;
            this.isStopped = true;
            this.frames = this.editData.currFrameAnimationInEdit.frames.join(',');
            Vue.set(this.editData.currFrameAnimationInEdit, '_gameObject', this.editData.currGameObjectInEdit.clone());
        },
        allIndexes: function allIndexes() {
            var res = this.utils.getArray(this.editData.currGameObjectInEdit.spriteSheet._numOfFrames);
            return res.join(',');
        },
        playAnimation: function playAnimation() {
            var self = this;
            self.isStopped = false;
            try {
                self.editData.currFrameAnimationInEdit.frames = JSON.parse('[' + self.frames + ']');
            } catch (e) {}
            self.editData.currFrameAnimationInEdit.play();
            setTimeout(function _anim() {
                self.editData.currFrameAnimationInEdit.update(new Date().getTime());

                var i = self.editData.currFrameAnimationInEdit._gameObject.currFrameIndex;
                self.editData.currFrameAnimationInEdit._gameObject.setFrameIndex(i);

                if (self.isStopped) {
                    self.isStopped = false;
                    return;
                }
                if (self.opened) setTimeout(_anim, 50);
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
        createOrEditFrameAnimation: function createOrEditFrameAnimation() {
            var self = this;
            var fa = editData.currFrameAnimationInEdit;
            self.editData.currFrameAnimationInEdit.frames = JSON.parse('[' + self.frames + ']');

            restResource.save(fa).then(function (resp) {
                if (resp.created) {
                    fa.id = resp.id;
                    editData.frameAnimationList.add(fa);
                    editData.currGameObjectInEdit.frameAnimations.add(fa);
                    return restResource.save(editData.currGameObjectInEdit);
                } else {
                    fa.updateCloner();
                }
            }).then(function () {
                editData.currGameObjectInEdit.updateCloner();
                self.close();
            }).catch(window.catchPromise);
        }
    }
});

},{"./frameAnimationDialog.html":125,"providers/abstractDialog":171,"providers/editData":173,"providers/i18n":175,"providers/rest/resource":179,"providers/utils":181,"providers/validator":182}],127:[function(require,module,exports){
module.exports = "<app-modal\r\n        v-on:close=\"close()\"\r\n        v-if=\"opened\" xmlns:v-on=\"http://www.w3.org/1999/xhtml\">\r\n\r\n\r\n    <table class=\"width100\">\r\n        <tr>\r\n            <td>\r\n                {{i18n.name}}\r\n            </td>\r\n            <td>\r\n                <input\r\n                    required\r\n                    v-control=\"{form:form,model:editData.currGameObjectInEdit,prop:'name'}\"\r\n                    v-model=\"editData.currGameObjectInEdit.name\"/>\r\n            </td>\r\n            <td></td>\r\n            <td rowspan=\"5\">\r\n                <div class=\"relative\"\r\n                     style=\"\r\n                                        display: inline-block;\r\n                                        overflow: scroll;\r\n                                        max-width:60vw;\r\n                                        max-height:60vh;\r\n                                    \"\r\n                        >\r\n                    <div :style=\"utils.merge(\r\n                        utils.getGameObjectCss(editData.currGameObjectInEdit),\r\n                        {\r\n                            'border':'1px solid blue',\r\n                            'opacity':editData.currGameObjectInEdit.alpha\r\n                        }\r\n                    )\"></div>\r\n                </div>\r\n            </td>\r\n        </tr>\r\n        <tr>\r\n            <td>\r\n                {{i18n.spriteSheet}}\r\n            </td>\r\n            <td>\r\n                <select\r\n                        v-on:change=\"onSpriteSheetSelected(editData.currGameObjectInEdit.spriteSheet.id)\"\r\n                        required\r\n                        v-control=\"{form:form,model:editData.currGameObjectInEdit.spriteSheet,prop:'id'}\"\r\n                        v-model=\"editData.currGameObjectInEdit.spriteSheet.id\">\r\n                    <option :value=\"item.id\" v-for=\"item in editData.spriteSheetList.rs\">{{item.name}}</option>\r\n                </select>\r\n            </td>\r\n            <td>\r\n            </td>\r\n        </tr>\r\n        <tr>\r\n            <td>\r\n                {{i18n.groupName}}\r\n            </td>\r\n            <td>\r\n                <input\r\n                        v-model=\"editData.currGameObjectInEdit.groupName\"/>\r\n            </td>\r\n            <td></td>\r\n        </tr>\r\n        <tr>\r\n            <td>\r\n                {{i18n.rigid}}\r\n            </td>\r\n            <td>\r\n                <input\r\n                        type=\"checkbox\"\r\n                        v-model=\"editData.currGameObjectInEdit.rigid\"/>\r\n            </td>\r\n            <td></td>\r\n        </tr>\r\n        <tr>\r\n            <td>\r\n                {{i18n.width}}\r\n            </td>\r\n            <td>\r\n                <input\r\n                        type=\"number\"\r\n                        required\r\n                        v-control=\"{form:form,model:editData.currGameObjectInEdit,prop:'width'}\"\r\n                        v-model=\"editData.currGameObjectInEdit.width\"/>\r\n            </td>\r\n            <td></td>\r\n        </tr>\r\n        <tr>\r\n            <td>\r\n                {{i18n.height}}\r\n            </td>\r\n            <td>\r\n                <input\r\n                        type=\"number\"\r\n                        required\r\n                        v-control=\"{form:form,model:editData.currGameObjectInEdit,prop:'height'}\"\r\n                        v-model=\"editData.currGameObjectInEdit.height\"/>\r\n            </td>\r\n            <td></td>\r\n        </tr>\r\n        <tr>\r\n            <td>\r\n                {{i18n.angle}}\r\n            </td>\r\n            <td>\r\n                <input\r\n                        step=\"0.1\"\r\n                        type=\"number\"\r\n                        required\r\n                        v-control=\"{form:form,model:editData.currGameObjectInEdit,prop:'angle'}\"\r\n                        v-model=\"editData.currGameObjectInEdit.angle\"/>\r\n            </td>\r\n            <td align=\"left\">\r\n                <div class=\"inlineBlock\">\r\n                    <app-angle-picker\r\n                            :object=\"editData.currGameObjectInEdit\"\r\n                            :value=\"'angle'\"\r\n                            />\r\n                </div>\r\n            </td>\r\n        </tr>\r\n        <tr>\r\n            <td>\r\n                alpha\r\n            </td>\r\n            <td>\r\n                <input\r\n                        type=\"number\"\r\n                        min=\"0\"\r\n                        max=\"1\"\r\n                        step=\"0.1\"\r\n                        required\r\n                        v-control=\"{form:form,model:editData.currGameObjectInEdit,prop:'alpha'}\"\r\n                        v-model=\"editData.currGameObjectInEdit.alpha\"/>\r\n            </td>\r\n            <td>\r\n                <input\r\n                        type=\"range\"\r\n                        min=\"0\"\r\n                        max=\"1\"\r\n                        step=\"0.1\"\r\n                        v-model=\"editData.currGameObjectInEdit.alpha\"/>\r\n            </td>\r\n        </tr>\r\n        <tr>\r\n            <td>\r\n                {{i18n.currFrameIndex}}\r\n            </td>\r\n            <td>\r\n                <input type=\"number\"\r\n                       min=\"0\"\r\n                       v-on:change=\"refreshGameObjectFramePreview(editData.currGameObjectInEdit,editData.currGameObjectInEdit.currFrameIndex)\"\r\n                       required\r\n                       v-control=\"{form:form,model:editData.currGameObjectInEdit,prop:'currFrameIndex'}\"\r\n                       v-model=\"editData.currGameObjectInEdit.currFrameIndex\"/>\r\n            </td>\r\n            <td></td>\r\n        </tr>\r\n        <tr>\r\n            <td>\r\n                {{i18n.frAnimations}}\r\n            </td>\r\n            <td>\r\n                <div class=\"table width100\">\r\n                    <div class=\"row\" v-for=\"animItm in editData.currGameObjectInEdit.frameAnimations && editData.currGameObjectInEdit.frameAnimations.rs\">\r\n                        <div class=\"cell vAlign\">\r\n                            <span>{{animItm.name}}</span>\r\n                        </div>\r\n                        <div class=\"cell vAlign rightAlign pointer\" v-on:click=\"editFrameAnimation(animItm)\">\r\n                            edit\r\n                        </div>\r\n                        <div class=\"cell pointer vAlign rightAlign\" v-on:click=\"deleteFrameAnimation(animItm)\">\r\n                            X\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </td>\r\n            <td align=\"right\">\r\n                <button\r\n                        class=\"inlineBlock\"\r\n                        :disabled=\"!editData.currGameObjectInEdit.id\"\r\n                        v-on:click=\"createFrameAnimation()\">+</button>\r\n            </td>\r\n        </tr>\r\n        <tr>\r\n            <td>\r\n                {{i18n.commonBehaviour}}\r\n            </td>\r\n            <td>\r\n                <div class=\"table width100\">\r\n                    <div class=\"row\" v-for=\"itm in editData.currGameObjectInEdit.commonBehaviour.rs\">\r\n                        <div class=\"cell vAlign\">\r\n                            <span>{{itm.name}}</span>\r\n                        </div>\r\n                        <div class=\"cell vAlign rightAlign pointer\" v-on:click=\"editCommonBehaviour(itm)\">\r\n                            {{i18n.edit}}\r\n                        </div>\r\n                        <div class=\"cell pointer vAlign rightAlign\" v-on:click=\"deleteCommonBehaviour(itm)\">\r\n                            X\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </td>\r\n            <td>\r\n                <table class=\"width100\">\r\n                    <tr>\r\n                        <td>\r\n                            <select v-model=\"selectedBehaviourId\">\r\n                                <option\r\n                                        :disabled=\"editData.currGameObjectInEdit.commonBehaviour.has && editData.currGameObjectInEdit.commonBehaviour.has({name:cb.name})\"\r\n                                        :value=\"cb.name\"\r\n                                        v-for=\"cb in editData.commonBehaviourProto.rs\">\r\n                                    {{cb.name}}\r\n                                </option>\r\n                            </select>\r\n                        </td>\r\n                        <td align=\"right\">\r\n                            <button\r\n                                    class=\"inlineBlock\"\r\n                                    :disabled=\"!editData.currGameObjectInEdit.id || !selectedBehaviourId\"\r\n                                    v-on:click=\"createCommonBehaviour(selectedBehaviourId)\">\r\n                                +\r\n                            </button>\r\n                        </td>\r\n                    </tr>\r\n                </table>\r\n            </td>\r\n        </tr>\r\n    </table>\r\n    <button\r\n            :disabled=\"!form.valid()\"\r\n            v-on:click=\"createOrEditGameObject(editData.currGameObjectInEdit)\">\r\n        {{editData.currGameObjectInEdit.id?i18n.edit:i18n.create}}\r\n    </button>\r\n\r\n</app-modal>";

},{}],128:[function(require,module,exports){
'use strict';

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var abstractDialog = require('providers/abstractDialog');
var frameAnimationDialog = require('../../dialogs/frameAnimationDialog/frameAnimationDialog');
var commonBehaviourDialog = require('../../dialogs/commonBehaviourDialog/commonBehaviourDialog');

var editData = require('providers/editData');
var restResource = require('providers/rest/resource');
var restFileSystem = require('providers/rest/fileSystem');
var FrameAnimation = _require('frameAnimation');

module.exports.component = Vue.component('app-game-object-dialog', {
    mixins: [abstractDialog],
    props: [],
    template: require('./gameObjectDialog.html'),
    data: function data() {
        return {
            form: require('providers/validator').new(),
            editData: editData,
            i18n: require('providers/i18n').getAll(),
            utils: require('providers/utils'),
            selectedBehaviourId: ''
        };
    },
    created: function created() {
        module.exports.instance = this;
    },
    components: {},
    methods: {
        open: function open() {
            this.opened = true;
        },
        createOrEditGameObject: function createOrEditGameObject(g) {
            var self = this;
            restResource.save(g).then(function (resp) {
                if (resp.created) {
                    g.id = resp.id;
                    editData.gameObjectList.add(g);
                    return resp;
                } else if (resp.updated) {
                    g.updateCloner();
                }
            }).then(function (resp) {
                if (resp.created) return restFileSystem.createFile('script/gameObject/' + g.name + '.js', document.getElementById('defaultCodeScript').textContent);
            }).then(function () {
                self.close();
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
            frameAnimationDialog.instance.open();
        },
        editFrameAnimation: function editFrameAnimation(fa) {
            this.editData.currFrameAnimationInEdit = fa.clone();
            frameAnimationDialog.instance.open();
        },
        deleteFrameAnimation: function deleteFrameAnimation(fa) {
            var self = this;
            window.confirmEx(self.i18n.confirmQuestion(fa), function () {});
        },

        onSpriteSheetSelected: function onSpriteSheetSelected(sprId) {
            var gameObject = editData.currGameObjectInEdit;
            var spriteSheet = editData.spriteSheetList.find({ id: sprId });
            if (!spriteSheet) return;
            spriteSheet = spriteSheet.clone();
            //if (!gameObject.name) gameObject.name = spriteSheet.name;
            //spriteSheet.calcFrameSize();
            gameObject.width = ~~(spriteSheet.width / spriteSheet.numOfFramesH);
            gameObject.height = ~~(spriteSheet.height / spriteSheet.numOfFramesV);
            gameObject.spriteSheet = spriteSheet;
        },

        createCommonBehaviour: function createCommonBehaviour(selectedBehaviourName) {
            this.editData.currCommonBehaviourInEdit = this.editData.commonBehaviourProto.find({ name: selectedBehaviourName }).clone();
            commonBehaviourDialog.instance.open();
        },
        editCommonBehaviour: function editCommonBehaviour(cb) {
            this.editData.currCommonBehaviourInEdit = cb.clone();
            commonBehaviourDialog.instance.open();
        },
        deleteCommonBehaviour: function deleteCommonBehaviour(cb) {
            var self = this;
            window.confirmEx(this.i18n.confirmQuestion(cb), function () {
                _promise2.default.resolve().then(function () {
                    self.editData.commonBehaviourList.remove({ id: cb.id });
                    return restResource.remove(cb);
                }).then(function () {
                    self.editData.currGameObjectInEdit.fixateState();
                    self.editData.currGameObjectInEdit.commonBehaviour.remove({ id: cb.id });
                    self.editData.currGameObjectInEdit.updateCloner();
                    return restResource.save(self.editData.currGameObjectInEdit.toJSON_Patched());
                }).catch(window.catchPromise);
            });
        }

    }
});

},{"../../dialogs/commonBehaviourDialog/commonBehaviourDialog":120,"../../dialogs/frameAnimationDialog/frameAnimationDialog":126,"./gameObjectDialog.html":127,"babel-runtime/core-js/promise":5,"providers/abstractDialog":171,"providers/editData":173,"providers/i18n":175,"providers/rest/fileSystem":177,"providers/rest/resource":179,"providers/utils":181,"providers/validator":182}],129:[function(require,module,exports){
module.exports = "\r\n<app-modal\r\n        v-on:close=\"close()\"\r\n        v-if=\"opened\" xmlns:v-on=\"http://www.w3.org/1999/xhtml\">\r\n\r\n    <div class=\"withPadding\">\r\n        <div>\r\n            {{i18n.scene}}: {{editData.currLayerInEdit._scene.name}}\r\n        </div>\r\n        <b class=\"block centerText\">{{i18n.layer}}</b>\r\n        <div class=\"table width100\">\r\n            <div class=\"row\">\r\n                <div class=\"cell\">\r\n                    {{i18n.name}}\r\n                </div>\r\n                <div class=\"cell\">\r\n                    <input\r\n                        v-control=\"{form:form,model:editData.currLayerInEdit,prop:'name'}\"\r\n                        v-model=\"editData.currLayerInEdit.name\"\r\n                        required/>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div>\r\n            <button\r\n                    :disabled=\"!form.valid()\"\r\n                    v-on:click=\"createOrEditLayer(editData.currLayerInEdit,editData.currLayerInEdit._scene)\">\r\n                {{editData.currLayerInEdit.id?i18n.edit:i18n.create}}\r\n            </button>\r\n        </div>\r\n    </div>\r\n\r\n</app-modal>";

},{}],130:[function(require,module,exports){
'use strict';

var abstractDialog = require('providers/abstractDialog');

var editData = require('providers/editData');
var resource = require('providers/resource');
var Layer = _require('layer');

module.exports.component = Vue.component('app-layer-dialog', {
    mixins: [abstractDialog],
    props: [],
    template: require('./layerDialog.html'),
    data: function data() {
        return {
            form: require('providers/validator').new(),
            editData: editData,
            i18n: require('providers/i18n').getAll()
        };
    },
    created: function created() {
        module.exports.instance = this;
    },
    components: {},
    methods: {
        // todo refactor!!
        createOrEditLayer: function createOrEditLayer(l, s) {
            var self = this;
            if (l.id) {
                // edit resource
                var dataToEdit = l.clone();
                dataToEdit.id = dataToEdit.protoId;
                resource.createOrEditResource(dataToEdit.toJSON());
                self.close();
            } else {
                // create object in resource
                resource.createOrEditLayer(l, s, self);
            }
        },
        deleteLayer: function deleteLayer(l) {
            // todo
        }
    }
});

},{"./layerDialog.html":129,"providers/abstractDialog":171,"providers/editData":173,"providers/i18n":175,"providers/resource":176,"providers/validator":182}],131:[function(require,module,exports){
module.exports = "<app-modal\n        v-on:close=\"close()\"\n        v-if=\"opened\" xmlns:v-on=\"http://www.w3.org/1999/xhtml\">\n\n    <table class=\"width100\">\n        <tr>\n            <td>\n                {{i18n.name}}\n            </td>\n            <td>\n\n            </td>\n            <td>\n                <input\n                    required\n                    v-control=\"{form:form,model:editData.currParticleSystemInEdit,prop:'name'}\"\n                    v-model=\"editData.currParticleSystemInEdit.name\"/>\n            </td>\n        </tr>\n        <tr>\n            <td rowspan=\"2\">\n                numOfParticlesToEmit\n            </td>\n            <td>\n                from\n            </td>\n            <td>\n                <input\n                    required\n                    type=\"number\"\n                    v-control=\"{form:form,model:editData.currParticleSystemInEdit.numOfParticlesToEmit,prop:'from'}\"\n                    v-model=\"editData.currParticleSystemInEdit.numOfParticlesToEmit.from\"/>\n            </td>\n        </tr>\n        <tr>\n            <td>\n                to\n            </td>\n            <td>\n                <input\n                    required\n                    type=\"number\"\n                    v-control=\"{form:form,model:editData.currParticleSystemInEdit.numOfParticlesToEmit,prop:'to'}\"\n                    v-model=\"editData.currParticleSystemInEdit.numOfParticlesToEmit.to\"/>\n            </td>\n        </tr>\n        <tr>\n            <td rowspan=\"2\">\n                particleVelocity\n            </td>\n            <td>\n                from\n            </td>\n            <td>\n                <input\n                        required\n                        type=\"number\"\n                        v-control=\"{form:form,model:editData.currParticleSystemInEdit.particleVelocity,prop:'from'}\"\n                        v-model=\"editData.currParticleSystemInEdit.particleVelocity.from\"/>\n            </td>\n        </tr>\n        <tr>\n            <td>\n                to\n            </td>\n            <td>\n                <input\n                        required\n                        type=\"number\"\n                        v-control=\"{form:form,model:editData.currParticleSystemInEdit.particleVelocity,prop:'to'}\"\n                        v-model=\"editData.currParticleSystemInEdit.particleVelocity.to\"/>\n            </td>\n        </tr>\n\n        <tr>\n            <td rowspan=\"2\">\n                particleLiveTime\n            </td>\n            <td>\n                from\n            </td>\n            <td>\n                <input\n                    required\n                    type=\"number\"\n                    v-control=\"{form:form,model:editData.currParticleSystemInEdit.particleLiveTime,prop:'from'}\"\n                    v-model=\"editData.currParticleSystemInEdit.particleLiveTime.from\"/>\n            </td>\n        </tr>\n        <tr>\n            <td>\n                to\n            </td>\n            <td>\n                <input\n                    required\n                    type=\"number\"\n                    v-control=\"{form:form,model:editData.currParticleSystemInEdit.particleLiveTime,prop:'to'}\"\n                    v-model=\"editData.currParticleSystemInEdit.particleLiveTime.to\"/>\n            </td>\n        </tr>\n\n        <tr>\n            <td>\n                emissionRadius\n            </td>\n            <td></td>\n            <td>\n                <input\n                        required\n                        type=\"number\"\n                        v-control=\"{form:form,model:editData.currParticleSystemInEdit,prop:'emissionRadius'}\"\n                        v-model=\"editData.currParticleSystemInEdit.emissionRadius\"/>\n            </td>\n        </tr>\n\n        <tr>\n            <td>\n                particleAngle\n            </td>\n            <td>\n                from / to\n            </td>\n            <td>\n                <app-angle-picker\n                        :object=\"editData.currParticleSystemInEdit.particleAngle\"\n                        :value=\"'from'\"\n                        />\n                <app-angle-picker\n                        :object=\"editData.currParticleSystemInEdit.particleAngle\"\n                        :value=\"'to'\"\n                        />\n            </td>\n        </tr>\n        <tr>\n            <td></td>\n            <td>\n                {{i18n.gameObject}}\n            </td>\n            <td>\n\n                <table>\n                    <tr>\n                        <td>\n                            <select\n                                    required\n                                    v-control=\"{form:form,model:editData.currParticleSystemInEdit.gameObject,prop:'id'}\"\n                                    v-on:change=\"onGameObjectIdChanged(editData.currParticleSystemInEdit.gameObject.id)\"\n                                    v-model=\"editData.currParticleSystemInEdit.gameObject.id\"\n                                    >\n                                <option\n                                        :value=\"item.id\"\n                                        v-for=\"item in editData.gameObjectList.rs\">{{item.name}}</option>\n                            </select>\n                        </td>\n                        <td>\n                            <div :style=\"\n                                utils.merge(\n                                    utils.getGameObjectCss(editData.currParticleSystemInEdit.gameObject),\n                                    {\n                                        zoom:editData.currParticleSystemInEdit.gameObject.height>30?\n                                        30/editData.currParticleSystemInEdit.gameObject.height:\n                                        1\n                                    }\n                               )\">\n                            </div>\n                        </td>\n                    </tr>\n                </table>\n\n\n            </td>\n        </tr>\n\n    </table>\n\n    <button\n            :disabled=\"!form.valid()\"\n            v-on:click=\"createOrEditPs(editData.currParticleSystemInEdit)\">\n        {{editData.currParticleSystemInEdit.id?i18n.edit:i18n.create}}\n    </button>\n\n    <button\n            :disabled=\"!form.valid()\"\n            v-on:click=\"showPreview()\">\n        {{i18n.preview}}\n    </button>\n\n</app-modal>";

},{}],132:[function(require,module,exports){
'use strict';

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var abstractDialog = require('providers/abstractDialog');

var editData = require('providers/editData');
var restResource = require('providers/rest/resource');
var ParticleSystem = _require('particleSystem');

module.exports.component = Vue.component('app-particle-system-dialog', {
    mixins: [abstractDialog],
    props: [],
    template: require('./particleSystemDialog.html'),
    data: function data() {
        return {
            form: require('providers/validator').new(),
            editData: editData,
            i18n: require('providers/i18n').getAll(),
            utils: require('providers/utils')
        };
    },
    created: function created() {
        module.exports.instance = this;
    },
    components: {
        appAnglePicker: require('components/anglePicker/anglePicker')
    },
    methods: {
        open: function open() {
            this.opened = true;
        },
        onGameObjectIdChanged: function onGameObjectIdChanged(id) {
            editData.currParticleSystemInEdit.gameObject = editData.gameObjectList.find({ id: id }).clone();
        },
        showPreview: function showPreview() {
            require('../particleSystemPreviewDialog/particleSystemPreviewDialog').instance.open();
        },
        createOrEditPs: function createOrEditPs(model) {
            var self = this;
            _promise2.default.resolve().then(function () {
                return restResource.save(model);
            }).then(function (resp) {
                if (resp.created) {
                    model.id = resp.id;
                    editData[model.type + 'List'].add(model);
                } else if (resp.updated) {
                    model.updateCloner();
                }
                self.close();
            });
        }
    }
});

},{"../particleSystemPreviewDialog/particleSystemPreviewDialog":134,"./particleSystemDialog.html":131,"babel-runtime/core-js/promise":5,"components/anglePicker/anglePicker":102,"providers/abstractDialog":171,"providers/editData":173,"providers/i18n":175,"providers/rest/resource":179,"providers/utils":181,"providers/validator":182}],133:[function(require,module,exports){
module.exports = "<app-modal\n        v-on:close=\"close()\"\n        v-if=\"opened\" xmlns:v-on=\"http://www.w3.org/1999/xhtml\">\n\n\n    <div>\n        {{i18n.preview}} {{i18n.particleSystem}}\n        <span class=\"underLine\">{{editData.currParticleSystemInEdit.name}}</span>\n    </div>\n    <div\n            v-on:click=\"emit($event)\"\n            v-on:mousemove=\"$event.buttons==1 && emit($event)\"\n            class=\"subFullScreen relative noOverFlow\">\n        <div\n                v-for=\"item in editData.currParticleSystemInEdit._particles\"\n                :style=\"utils.merge(\n                            utils.getGameObjectCss(item),\n                            {\n                                position:'absolute',\n                                left:item.pos.x+'px',\n                                top: item.pos.y+'px',\n                                pointerEvents:'none'\n                            }\n                    )\"\n                >\n        </div>\n    </div>\n    <div>\n        <button v-on:click=\"close()\">{{i18n.close}}</button>\n    </div>\n\n\n</app-modal>";

},{}],134:[function(require,module,exports){
'use strict';

var editData = require('providers/editData');
var resource = require('providers/resource');

var abstractDialog = require('providers/abstractDialog');

var tid = void 0;

module.exports.component = Vue.component('app-particle-system-preview-dialog', {
    mixins: [abstractDialog],
    props: [],
    template: require('./particleSystemPreviewDialog.html'),
    data: function data() {
        return {
            editData: editData,
            i18n: require('providers/i18n').getAll(),
            utils: require('providers/utils')
        };
    },
    created: function created() {
        module.exports.instance = this;
    },
    components: {},
    methods: {
        open: function open() {
            this.opened = true;
            this.run();
        },
        close: function close() {
            this.opened = false;
            clearInterval(tid);
        },
        run: function run() {
            var prevTime = null;

            if (!editData.currParticleSystemInEdit._particles) Vue.set(editData.currParticleSystemInEdit, '_particles', []);

            var update = function update() {

                var currTime = Date.now();
                if (!prevTime) prevTime = currTime;
                var delta = currTime - prevTime;
                prevTime = currTime;
                editData.currParticleSystemInEdit._particles.forEach(function (p) {

                    p._currFrameAnimation && p._currFrameAnimation.update(currTime);
                    var deltaX = p.vel.x * delta / 1000;
                    var deltaY = p.vel.y * delta / 1000;
                    p.pos.x = p.pos.x + deltaX;
                    p.pos.y = p.pos.y + deltaY;

                    if (!p._timeCreated) p._timeCreated = currTime;
                    if (currTime - p._timeCreated > p.liveTime) {
                        editData.currParticleSystemInEdit._particles.splice(editData.currParticleSystemInEdit._particles.indexOf(p), 1);
                    }
                });
            };
            tid = setInterval(function () {
                update();
            }, 5);
        },
        emit: function emit(e) {
            var rect = e.target.getBoundingClientRect();
            editData.currParticleSystemInEdit.emit(e.clientX - rect.left, e.clientY - rect.top);
        }
    }
});

},{"./particleSystemPreviewDialog.html":133,"providers/abstractDialog":171,"providers/editData":173,"providers/i18n":175,"providers/resource":176,"providers/utils":181}],135:[function(require,module,exports){
module.exports = "<app-modal\r\n        v-on:close=\"close()\"\r\n        v-if=\"opened\" xmlns:v-on=\"http://www.w3.org/1999/xhtml\">\r\n\r\n    <div class=\"withPadding\">\r\n        <div class=\"table\">\r\n            <div class=\"row\">\r\n                <div class=\"cell\">\r\n                    {{i18n.name}}\r\n                </div>\r\n                <div class=\"cell\">\r\n                    <input\r\n                            required\r\n                            v-control=\"{form:form,model:editData.currSceneInEdit,prop:'name'}\"\r\n                            v-model=\"editData.currSceneInEdit.name\"/>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <button\r\n                :disabled=\"!form.valid()\"\r\n                v-on:click=\"createOrEditScene(editData.currSceneInEdit)\">\r\n            {{editData.currSceneInEdit.id?i18n.edit:i18n.create}}\r\n        </button>\r\n    </div>\r\n\r\n</app-modal>";

},{}],136:[function(require,module,exports){
'use strict';

var abstractDialog = require('providers/abstractDialog');

var editData = require('providers/editData');
var resource = require('providers/resource');
var Scene = _require('scene');

module.exports.component = Vue.component('app-scene-dialog', {
    mixins: [abstractDialog],
    props: [],
    template: require('./sceneDialog.html'),
    data: function data() {
        return {
            form: require('providers/validator').new(),
            editData: editData,
            i18n: require('providers/i18n').getAll()
        };
    },
    created: function created() {
        module.exports.instance = this;
    },
    components: {},
    methods: {
        createOrEditScene: function createOrEditScene(s) {
            var model = s.toJSON();
            var self = this;
            resource.createOrEditResource(model, Scene, editData.sceneList, function (op) {
                if (op.type == 'create') {
                    resource.createFile('script/scene/' + self.editData.currSceneInEdit.name + '.js', document.getElementById('defaultCodeScript').textContent, function () {
                        self.close();
                    });
                } else self.close();
            });
        }
    }
});

},{"./sceneDialog.html":135,"providers/abstractDialog":171,"providers/editData":173,"providers/i18n":175,"providers/resource":176,"providers/validator":182}],137:[function(require,module,exports){
module.exports = "<app-modal\n        v-on:close=\"close()\"\n        v-if=\"opened\" xmlns:v-on=\"http://www.w3.org/1999/xhtml\">\n\n    <table class=\"width100\">\n        <tr>\n            <td>\n                {{i18n.name}}\n            </td>\n        </tr>\n        <tr>\n            <td>\n                <input\n                        required\n                        v-control=\"{form:form,model:editData.currSoundInEdit,prop:'name'}\"\n                        v-model=\"editData.currSoundInEdit.name\"/>\n            </td>\n        </tr>\n        <tr>\n            <td>\n                <app-input-file\n                        v-on:picked=\"onFilePicked\"\n                        :title=\"i18n.loadSound\"\n                        :accept=\"'audio/*'\"\n                        />\n            </td>\n        </tr>\n        <tr>\n            <td>\n                <audio v-if=\"soundUrl\" controls=\"controls\" :src=\"soundUrl\"></audio>\n            </td>\n        </tr>\n    </table>\n\n    <button\n            :disabled=\"!(form.valid() && soundUrl)\"\n            v-on:click=\"createOrEditSound(editData.currSoundInEdit)\">\n        {{editData.currSoundInEdit.id?i18n.edit:i18n.create}}\n    </button>\n\n</app-modal>";

},{}],138:[function(require,module,exports){
'use strict';

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var abstractDialog = require('providers/abstractDialog');

var editData = require('providers/editData');
var restResource = require('providers/rest/resource');
var restFileSystem = require('providers/rest/fileSystem');
var Sound = _require('sound');

module.exports.component = Vue.component('app-sound-dialog', {
    mixins: [abstractDialog],
    props: [],
    template: require('./soundDialog.html'),
    data: function data() {
        return {
            form: require('providers/validator').new(),
            editData: editData,
            i18n: require('providers/i18n').getAll(),
            soundUrl: '',
            _file: ''
        };
    },
    created: function created() {
        module.exports.instance = this;
    },
    components: {},
    methods: {
        open: function open() {
            this.opened = true;
            if (editData.currSoundInEdit.id) this.soundUrl = editData.projectName + '/' + editData.currSoundInEdit.resourcePath + '?' + Math.random();else this.soundUrl = '';
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
                    return restFileSystem.uploadFile(self._file, { type: model.type });
                } else return _promise2.default.resolve();
            }).then(function () {
                return restResource.save(model);
            }).then(function (resp) {
                if (resp.created) {
                    model.id = resp.id;
                    editData.soundList.add(model);
                } else if (resp.updated) {
                    model.updateCloner();
                }
                self.close();
            });
        }
    }
});

},{"./soundDialog.html":137,"babel-runtime/core-js/promise":5,"providers/abstractDialog":171,"providers/editData":173,"providers/i18n":175,"providers/rest/fileSystem":177,"providers/rest/resource":179,"providers/validator":182}],139:[function(require,module,exports){
module.exports = "<app-modal\r\n        v-on:close=\"close()\"\r\n        v-if=\"opened\" xmlns:v-on=\"http://www.w3.org/1999/xhtml\">\r\n\r\n    <table class=\"width100\">\r\n        <tr>\r\n            <td>\r\n                {{i18n.name}}\r\n            </td>\r\n            <td>\r\n                <input\r\n                        required\r\n                        v-control=\"{form:form,model:editData.currSpriteSheetInEdit,prop:'name'}\"\r\n                        v-model=\"editData.currSpriteSheetInEdit.name\"/>\r\n            </td>\r\n            <td rowspan=\"6\">\r\n                <div style=\"max-height: 40vh;max-width:60vw;overflow: scroll;\"\r\n                        >\r\n                    <div class=\"relative\"\r\n                         :style=\"{\r\n                                    'background-image':   'url('+spriteSheetUrl+')',\r\n                                    'width':              editData.currSpriteSheetInEdit.width+'px',\r\n                                    'height':             editData.currSpriteSheetInEdit.height+'px',\r\n                               }\">\r\n                        <div\r\n                                :title=\"i\"\r\n                                v-for=\"(val,i) in numOfSpriteSheetCells\"\r\n                                :style=\"{\r\n                                    'display':        'inline-block',\r\n                                    'left':           editData.currSpriteSheetInEdit.getFramePosX(i)+'px',\r\n                                    'top':            editData.currSpriteSheetInEdit.getFramePosY(i)+'px',\r\n                                    'position':       'absolute',\r\n                                    'text-align':     'left',\r\n                                    'border':         '1px solid red',\r\n                                    'width':          editData.currSpriteSheetInEdit._frameWidth+'px',\r\n                                    'height':         editData.currSpriteSheetInEdit._frameHeight+'px'\r\n                                }\">{{i}}</div>\r\n                    </div>\r\n                </div>\r\n            </td>\r\n        </tr>\r\n        <tr>\r\n            <td>\r\n                {{i18n.image}}\r\n            </td>\r\n            <td>\r\n                <app-input-file\r\n                        v-on:picked=\"onFilePicked\"\r\n                        :title=\"i18n.loadImage\"\r\n                        :accept=\"'image/*'\"\r\n                        />\r\n            </td>\r\n        </tr>\r\n        <tr>\r\n            <td>\r\n                {{i18n.width}}\r\n            </td>\r\n            <td>\r\n                {{editData.currSpriteSheetInEdit.width}}\r\n            </td>\r\n        </tr>\r\n        <tr>\r\n            <td>\r\n                {{i18n.height}}\r\n            </td>\r\n            <td>\r\n                {{editData.currSpriteSheetInEdit.height}}\r\n            </td>\r\n        </tr>\r\n        <tr>\r\n            <td>\r\n                {{i18n.numOfFramesH}}\r\n            </td>\r\n            <td>\r\n                <input\r\n                        required\r\n                        min=\"1\"\r\n                        max=\"100\"\r\n                        type=\"number\"\r\n                        v-on:change=\"refreshNumOfCells()\"\r\n                        v-control=\"{form:form,model:editData.currSpriteSheetInEdit,prop:'numOfFramesH'}\"\r\n                        v-model=\"editData.currSpriteSheetInEdit.numOfFramesH\"/>\r\n            </td>\r\n        </tr>\r\n        <tr>\r\n            <td>\r\n                {{i18n.numOfFramesV}}\r\n            </td>\r\n            <td>\r\n                <input\r\n                        required\r\n                        min=\"1\"\r\n                        max=\"100\"\r\n                        type=\"number\"\r\n                        v-on:change=\"refreshNumOfCells()\"\r\n                        v-control=\"{form:form,model:editData.currSpriteSheetInEdit,prop:'numOfFramesV'}\"\r\n                        v-model=\"editData.currSpriteSheetInEdit.numOfFramesV\"/>\r\n            </td>\r\n        </tr>\r\n    </table>\r\n    <button\r\n            v-on:click=\"createOrEditSpriteSheet(editData.currSpriteSheetInEdit)\"\r\n            :disabled=\"!(form.valid() && editData.currSpriteSheetInEdit.resourcePath)\">\r\n        {{editData.currSpriteSheetInEdit.id?i18n.edit:i18n.create}}\r\n    </button>\r\n\r\n</app-modal>";

},{}],140:[function(require,module,exports){
'use strict';

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var abstractDialog = require('providers/abstractDialog');

var editData = require('providers/editData');
var restFileSystem = require('providers/rest/fileSystem');
var restResource = require('providers/rest/resource');

module.exports.component = Vue.component('app-sprite-sheet-dialog', {
    mixins: [abstractDialog],
    props: [],
    template: require('./spriteSheetDialog.html'),
    data: function data() {
        return {
            form: require('providers/validator').new(),
            editData: editData,
            i18n: require('providers/i18n').getAll(),
            utils: require('providers/utils'),
            spriteSheetUrl: '',
            _file: '',
            numOfSpriteSheetCells: 0
        };
    },
    created: function created() {
        module.exports.instance = this;
    },

    components: {},
    methods: {
        open: function open() {
            this.opened = true;
            if (editData.currSpriteSheetInEdit.id) this.spriteSheetUrl = editData.projectName + '/' + editData.currSpriteSheetInEdit.resourcePath + '?' + Math.random();else this.spriteSheetUrl = '';
            this.refreshNumOfCells();
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
                    return restFileSystem.uploadFile(self._file, { type: model.type });
                } else return _promise2.default.resolve();
            }).then(function () {
                return restResource.save(model);
            }).then(function (resp) {
                if (resp.created) {
                    model.id = resp.id;
                    editData[model.type + 'List'].add(model);
                } else if (resp.updated) {
                    model.updateCloner();
                }
                self.close();
            });
        }
    }
});

},{"./spriteSheetDialog.html":139,"babel-runtime/core-js/promise":5,"providers/abstractDialog":171,"providers/editData":173,"providers/i18n":175,"providers/rest/fileSystem":177,"providers/rest/resource":179,"providers/utils":181,"providers/validator":182}],141:[function(require,module,exports){
module.exports = "<div class=\"template\">\n    <div class=\"absolute\">\n        <app-top-panel/>\n    </div>\n    <div id=\"c\" class=\"split\">\n        <div id=\"a\" class=\"split split-horizontal content\">\n            <app-game-props/>\n            <app-scenes/>\n            <app-game-objects/>\n            <app-sprite-sheets/>\n            <app-user-interface/>\n            <app-fonts/>\n            <app-sounds/>\n            <app-particle-systems/>\n        </div>\n        <div id=\"b\" class=\"split split-horizontal content relative\">\n            <app-script-editor/>\n            <div :style=\"{\n                width:  editData.gameProps.width + 'px',\n                height: editData.gameProps.height + 'px',\n                border: '1px solid green'\n            }\">\n                <app-curr-scene/>\n            </div>\n        </div>\n        <div id=\"e\" class=\"split split-horizontal content\">\n            <app-right-panel-scene-game-object/>\n            <app-right-panel-scene/>\n        </div>\n    </div>\n    <div id=\"d\" class=\"split content\">d</div>\n\n    <app-dialogs/>\n\n</div>";

},{}],142:[function(require,module,exports){
'use strict';

var onMounted = function _onMounted() {
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

module.exports = {
    template: require('./editor.html'),
    data: function data() {
        return {
            editData: require('providers/editData')
        };
    },
    mounted: function mounted() {
        onMounted();
    },
    methods: {},
    components: {
        appCollapsible: require('components/collapsible/collapsible'),
        appModal: require('components/modal/modal'),
        appInputFile: require('components/inputFile/inputFile'),

        appGameProps: require('./leftPanel/gameProps/gameProps'),
        appScenes: require('./leftPanel/scenes/scenes'),
        appGameObjects: require('./leftPanel/gameObjects/gameObjects'),
        appSpriteSheets: require('./leftPanel/spriteSheets/spriteSheets'),
        appUserInterface: require('./leftPanel/userInterface/userInterface'),
        appFonts: require('./leftPanel/fonts/fonts'),
        appSounds: require('./leftPanel/sounds/sounds'),
        appParticleSystems: require('./leftPanel/particleSystems/particleSystems'),
        appDialogs: require('./dialogs/dialogs'),

        appScriptEditor: require('./centralPanel/scriptEditor/scriptEditor'),

        appRightPanelSceneGameObject: require('./rightPanel/sceneGameObject/sceneGameObject'),
        appRightPanelScene: require('./rightPanel/scene/scene'),
        appCurrScene: require('./centralPanel/scene/scene'),

        appTopPanel: require('./topPanel/topPanel')

    }
};

},{"./centralPanel/scene/scene":116,"./centralPanel/scriptEditor/scriptEditor":118,"./dialogs/dialogs":122,"./editor.html":141,"./leftPanel/fonts/fonts":146,"./leftPanel/gameObjects/gameObjects":148,"./leftPanel/gameProps/gameProps":150,"./leftPanel/particleSystems/particleSystems":152,"./leftPanel/scenes/scenes":154,"./leftPanel/sounds/sounds":156,"./leftPanel/spriteSheets/spriteSheets":158,"./leftPanel/userInterface/userInterface":160,"./rightPanel/scene/scene":164,"./rightPanel/sceneGameObject/sceneGameObject":162,"./topPanel/topPanel":166,"components/collapsible/collapsible":104,"components/inputFile/inputFile":112,"components/modal/modal":114,"providers/editData":173}],143:[function(require,module,exports){
module.exports = "<div class=\"row\" xmlns:v-on=\"http://www.w3.org/1999/xhtml\">\n    <div class=\"cell\">\n        <span class=\"inlineBlock withPaddingRight\">\n            <span class=\"inlineBlock withPaddingTop withPaddingBottom\">\n                {{gameObject.name}}\n            </span>\n        </span>\n    </div>\n    <div    class=\"cell width100\"\n            v-if=\"!gameObject.subType\">\n        <div :style=\"\n                utils.merge(\n                        utils.getGameObjectCss(gameObject),\n                        {zoom:gameObject.height>30?30/gameObject.height:1}\n                )\"></div>\n    </div>\n    <div\n            class=\"cell width100\"\n            v-if=\"gameObject.subType\"\n            :title=\"gameObject.name\"\n            >\n        <span class=\"textOverflow\">\n            <span class=\"inlineBlock withPaddingTop withPaddingBottom\">\n                {{gameObject.subType}}\n            </span>\n        </span>\n    </div>\n    <div class=\"cell width1\">\n        <div v-if=\"crud && crud.editScript\" class=\"script\" v-on:click=\"crud.editScript(gameObject)\"></div>\n    </div>\n    <div class=\"cell width1\">\n        <div v-if=\"crud && crud.edit\" class=\"edit\" v-on:click=\"crud.edit(gameObject)\"></div>\n    </div>\n    <div class=\"cell width1\">\n        <div v-if=\"crud && crud.delete\" v-on:click=\"crud.delete(gameObject)\" class=\"delete\"></div>\n    </div>\n</div>";

},{}],144:[function(require,module,exports){
'use strict';

module.exports = Vue.component('app-game-object-row', {
    props: ['gameObject', 'crud'],
    template: require('./gameObjectRow.html'),
    data: function data() {
        return {
            utils: require('providers/utils')
        };
    },
    components: {},
    methods: {}
});

},{"./gameObjectRow.html":143,"providers/utils":181}],145:[function(require,module,exports){
module.exports = "<app-collapsible\n        :crud=\"{\n            create:createFont\n        }\"\n        :title=\"i18n.fonts\"\n        xmlns:v-on=\"http://www.w3.org/1999/xhtml\">\n    <div class=\"withPaddingLeft\">\n        <div class=\"table width100\">\n            <div class=\"row\"\n                 v-for=\"font in (editData.fontList && editData.fontList.rs)\">\n\n                <div class=\"cell\">\n                    <span class=\"inlineBlock withPaddingTop withPaddingBottom\">\n                        {{font.name}}\n                    </span>\n                </div>\n\n                <div class=\"cell width1\">\n                    <div class=\"edit\" v-on:click=\"editFont(font)\"/>\n                </div>\n                <div class=\"cell width1\">\n                    <div class=\"delete\" v-on:click=\"deleteFont(font)\"/>\n                </div>\n\n            </div>\n        </div>\n    </div>\n</app-collapsible>";

},{}],146:[function(require,module,exports){
'use strict';

var fontDialog = require('../../dialogs/fontDialog/fontDialog');
var Font = _require('font');
var resource = require('providers/resource');
var utils = require('providers/utils');

module.exports = Vue.component('app-fonts', {
    props: [],
    template: require('./fonts.html'),
    data: function data() {
        return {
            editData: require('providers/editData'),
            i18n: require('providers/i18n').getAll()
        };
    },
    components: {},
    methods: {
        createFont: function createFont() {
            this.editData.currFontInEdit = new Font(new Font().toJSON());
            fontDialog.instance.open();
        },
        editFont: function editFont(fnt) {
            this.editData.currFontInEdit = fnt.clone();
            fontDialog.instance.open();
        },
        deleteFont: function deleteFont(model) {
            utils.deleteModel(model);
        }
    }
});

},{"../../dialogs/fontDialog/fontDialog":124,"./fonts.html":145,"providers/editData":173,"providers/i18n":175,"providers/resource":176,"providers/utils":181}],147:[function(require,module,exports){
module.exports = "<div>\n    <app-collapsible\n            :title=\"i18n.gameObjects\"\n            :crud=\"{\n                create:createGameObject\n            }\"\n            >\n        <div class=\"withPaddingLeft\">\n            <div class=\"table rightText\">\n                <div\n                        :crud=\"{\n                            edit: editGameObject,\n                            editScript: editGameObjectScript,\n                            delete: deleteGameObject\n                        }\"\n                        is=\"appGameObjectRow\"\n                        :game-object=\"gameObject\"\n                        v-for=\"gameObject in (editData.gameObjectList && editData.gameObjectList.rs)\"\n                        >\n                </div>\n            </div>\n        </div>\n    </app-collapsible>\n</div>";

},{}],148:[function(require,module,exports){
'use strict';

var utils = require('providers/utils');

var gameObjectDialog = require('../../dialogs/gameObjectDialog/gameObjectDialog');
var GameObject = _require('gameObject');
var restFileSystem = require('providers/rest/fileSystem');

module.exports = Vue.component('app-game-objects', {
    props: [],
    template: require('./gameObjects.html'),
    data: function data() {
        return {
            editData: require('providers/editData'),
            i18n: require('providers/i18n').getAll()
        };
    },
    components: {
        appGameObjectRow: require('../_gameObjectRow/gameObjectRow')
    },
    methods: {
        createGameObject: function createGameObject() {
            this.editData.currGameObjectInEdit = new GameObject(new GameObject().clone());
            gameObjectDialog.instance.open();
        },
        editGameObjectScript: function editGameObjectScript(gameObject) {
            utils.openEditor(gameObject.type + '/' + gameObject.name + '.js');
        },
        editGameObject: function editGameObject(go) {
            this.editData.currGameObjectInEdit = go.clone();
            gameObjectDialog.instance.open();
        },
        deleteGameObject: function deleteGameObject(model) {
            utils.deleteModel(model, function () {
                restFileSystem.removeFile('script/gameObject/' + model.name + '.js');
            });
        }
    }
});

},{"../../dialogs/gameObjectDialog/gameObjectDialog":128,"../_gameObjectRow/gameObjectRow":144,"./gameObjects.html":147,"providers/editData":173,"providers/i18n":175,"providers/rest/fileSystem":177,"providers/utils":181}],149:[function(require,module,exports){
module.exports = "<div xmlns:v-on=\"http://www.w3.org/1999/xhtml\">\n    <app-collapsible :title=\"i18n.game\" :id=\"'game'\">\n        <form class=\"table width100\">\n            <div class=\"row\">\n                <div class=\"cell\">\n                    {{i18n.width}}\n                </div>\n                <div class=\"cell\">\n                    <input\n                            class=\"narrow\"\n                            v-model=\"editData.gameProps.width\"\n                            v-control=\"{form:form,model:editData.gameProps,prop:'width'}\"\n                            type=\"number\"\n                            min=\"1\"\n                            max=\"20000\"\n                            v-on:change=\"form.valid() && saveGameProps()\"/>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"cell\">\n                    {{i18n.height}}\n                </div>\n                <div class=\"cell\">\n                    <input\n                            class=\"narrow\"\n                            v-model=\"editData.gameProps.height\"\n                            type=\"number\"\n                            v-control=\"{form:form,model:editData.gameProps,prop:'height'}\"\n                            min=\"1\"\n                            max=\"20000\"\n                            v-on:change=\"form.valid() && saveGameProps()\"/>\n                </div>\n            </div>\n\n\n            <div class=\"row\">\n                <div class=\"cell\">\n                    {{i18n.scaleStrategy}}\n                </div>\n                <div class=\"cell\">\n                    <select\n                            v-model=\"editData.gameProps.scaleStrategy\"\n                            v-on:change=\"form.valid() && saveGameProps()\">\n                        <option\n                                :title=\"value\"\n                                :value=\"value\"\n                                v-for=\"(value,key) in scales\">{{key}}</option>\n                    </select>\n                </div>\n            </div>\n\n            <div class=\"row\">\n                <div class=\"cell\">\n                    {{i18n.preloadingScene}}\n                </div>\n                <div class=\"cell\">\n                    <select\n                            v-model=\"editData.gameProps.preloadingSceneId\"\n                            v-on:change=\"form.valid() && saveGameProps()\">\n                        <option value=\"\">--</option>\n                        <option\n                                :disabled=\"item.id==editData.gameProps.startSceneId\"\n                                :value=\"item.id\"\n                                v-for=\"item in (editData.sceneList && editData.sceneList.rs)\">{{item.name}}\n                        </option>\n                    </select>\n                </div>\n            </div>\n\n            <div class=\"row\">\n                <div class=\"cell\">\n                    {{i18n.startScene}}\n                </div>\n                <div class=\"cell\">\n                    <select v-model=\"editData.gameProps.startSceneId\"\n                            v-on:change=\"form.valid() && saveGameProps()\">\n                        <option\n                                :disabled=\"item.id==editData.gameProps.preloadingSceneId\"\n                                :value=\"item.id\"\n                                v-for=\"item in (editData.sceneList && editData.sceneList.rs)\">{{item.name}}\n                        </option>\n                    </select>\n                </div>\n            </div>\n\n        </form>\n\n    </app-collapsible>\n</div>";

},{}],150:[function(require,module,exports){
'use strict';

var restResource = require('providers/rest/resource');

module.exports = Vue.component('app-game-props', {
    props: [],
    template: require('./gameProps.html'),
    data: function data() {
        return {
            form: require('providers/validator').new(),
            editData: require('providers/editData'),
            i18n: require('providers/i18n').getAll(),
            scales: _require('consts').SCALE_STRATEGY
        };
    },
    methods: {
        saveGameProps: function saveGameProps() {
            restResource.saveGameProps(this.editData.gameProps);
        }
    }
});

},{"./gameProps.html":149,"providers/editData":173,"providers/i18n":175,"providers/rest/resource":179,"providers/validator":182}],151:[function(require,module,exports){
module.exports = "<app-collapsible\n        :crud=\"{\n            create:createParticleSystem\n        }\"\n        :title=\"i18n.particleSystems\"\n        xmlns:v-on=\"http://www.w3.org/1999/xhtml\">\n    <div class=\"withPaddingLeft\">\n        <div class=\"table width100\">\n            <div class=\"row\"\n                 v-for=\"ps in (editData.particleSystemList && editData.particleSystemList.rs)\">\n\n                <div class=\"cell\">\n                    <span class=\"inlineBlock withPaddingTop withPaddingBottom\">\n                        {{ps.name}}\n                    </span>\n                </div>\n\n                <div class=\"cell width1\">\n                    <div class=\"edit\" v-on:click=\"editParticleSystem(ps)\"/>\n                </div>\n                <div class=\"cell width1\">\n                    <div class=\"delete\" v-on:click=\"deleteParticleSystem(ps)\"/>\n                </div>\n\n            </div>\n        </div>\n    </div>\n</app-collapsible>";

},{}],152:[function(require,module,exports){
'use strict';

var particleSystemDialog = require('../../dialogs/particleSystemDialog/particleSystemDialog');
var ParticleSystem = _require('particleSystem');
var utils = require('providers/utils');

module.exports = Vue.component('app-particle-systems', {
    props: [],
    template: require('./particleSystems.html'),
    data: function data() {
        return {
            editData: require('providers/editData'),
            i18n: require('providers/i18n').getAll()
        };
    },
    components: {},
    methods: {
        createParticleSystem: function createParticleSystem() {

            this.editData.currParticleSystemInEdit = new ParticleSystem(new ParticleSystem().toJSON());
            var go = this.editData.gameObjectList.get(0);

            if (!go) {
                alertEx(this.i18n.noGameObject);
                return;
            }

            this.editData.currParticleSystemInEdit.gameObject = go.clone();

            particleSystemDialog.instance.open();
        },
        editParticleSystem: function editParticleSystem(ps) {
            this.editData.currParticleSystemInEdit = ps.clone();
            particleSystemDialog.instance.open();
        },
        deleteParticleSystem: function deleteParticleSystem(model) {
            utils.deleteModel(model);
        }
    }
});

},{"../../dialogs/particleSystemDialog/particleSystemDialog":132,"./particleSystems.html":151,"providers/editData":173,"providers/i18n":175,"providers/utils":181}],153:[function(require,module,exports){
module.exports = "<app-collapsible\n        :crud=\"{\n            create:createScene\n        }\"\n        :title=\"i18n.scenes\" xmlns:v-on=\"http://www.w3.org/1999/xhtml\">\n    <div class=\"withPaddingLeft\" v-for=\"scene in (editData.sceneList && editData.sceneList.rs)\">\n        <app-collapsible\n                :class=\"{\n                    currScene:editData.currSceneInEdit==scene\n                }\"\n                v-on:click.native=\"editData.currSceneInEdit=scene\"\n                :object=\"scene\"\n                :crud=\"{\n                    edit:editScene,\n                    delete:deleteScene,\n                    editScript: editScript\n                }\"\n                :title=\"scene.name\"\n                >\n            <div class=\"withPaddingLeft\">\n                <app-collapsible\n                        :title=\"i18n.layers\"\n                        :meta=\"scene\"\n                        :crud=\"{\n                            create:createLayer\n                        }\"\n                        >\n                    <div\n                            v-on:click.capture=\"editData.currLayerInEdit=layer\"\n                            v-for=\"layer in scene._layers.rs\" class=\"withPaddingLeft\">\n                        <app-collapsible\n                                :object=\"layer\"\n                                :meta=\"scene\"\n                                :crud=\"{\n                                    edit:editLayer,\n                                    delete:deleteLayer\n                                }\"\n                                :title=\"layer.name\" :id=\"layer.id\">\n                            <div class=\"withPaddingLeft\">\n                                <div class=\"table width100\">\n                                    <div\n                                            :class=\"{\n                                                currSceneGameObject: editData.currSceneGameObjectInEdit==gameObject\n                                            }\"\n                                            v-on:click.native=\"editData.currSceneGameObjectInEdit=gameObject\"\n                                            is=\"appGameObjectRow\"\n                                            :game-object=\"gameObject\"\n                                            v-for=\"gameObject in layer._gameObjects.rs\"></div>\n                                </div>\n                            </div>\n                        </app-collapsible>\n                    </div>\n                </app-collapsible>\n            </div>\n        </app-collapsible>\n    </div>\n</app-collapsible>";

},{}],154:[function(require,module,exports){
'use strict';

var resource = require('providers/resource');
var utils = require('providers/utils');
var sceneDialog = require('../../dialogs/sceneDialog/sceneDialog');
var layerDialog = require('../../dialogs/layerDialog/layerDialog');
var Layer = _require('layer');
var Scene = _require('scene');

module.exports = Vue.component('app-scenes', {
    props: [],
    template: require('./scenes.html'),
    data: function data() {
        return {
            editData: require('providers/editData'),
            i18n: require('providers/i18n').getAll()
        };
    },
    components: {
        appGameObjectRow: require('../_gameObjectRow/gameObjectRow')
    },
    methods: {
        createScene: function createScene() {
            this.editData.currSceneInEdit = new Scene(new Scene().toJSON());
            sceneDialog.instance.open();
        },
        editScene: function editScene(scene) {
            this.editData.currSceneInEdit = scene.clone();
            sceneDialog.instance.open();
        },
        deleteScene: function deleteScene(scene) {
            window.confirmEx(this.i18n.confirmQuestion, function () {
                resource.deleteResource(scene);
            });
        },
        createLayer: function createLayer(scene) {
            this.editData.currLayerInEdit = new Layer(new Layer().clone());
            this.editData.currLayerInEdit._scene = scene;
            layerDialog.instance.open();
        },
        editLayer: function editLayer(layer, scene) {
            this.editData.currLayerInEdit = layer.clone();
            this.editData.currLayerInEdit._scene = scene;
            layerDialog.instance.open();
        },
        editScript: function editScript(scene) {
            utils.openEditor(scene.type + '/' + scene.name + '.js');
        },
        deleteLayer: function deleteLayer(scene) {
            console.log('delete l invoked', scene);
        },
        createGameObject: function createGameObject() {
            console.log('create go invoked');
        },
        editGameObject: function editGameObject(scene) {
            console.log('edit go invoked', scene);
        },
        deleteGameObject: function deleteGameObject(scene) {
            console.log('delete go invoked', scene);
        },
        onGameObjectClick: function onGameObjectClick(go) {
            console.log(go);
        }
    }
});

},{"../../dialogs/layerDialog/layerDialog":130,"../../dialogs/sceneDialog/sceneDialog":136,"../_gameObjectRow/gameObjectRow":144,"./scenes.html":153,"providers/editData":173,"providers/i18n":175,"providers/resource":176,"providers/utils":181}],155:[function(require,module,exports){
module.exports = "<app-collapsible\n        :crud=\"{\n            create:createSound\n        }\"\n        :title=\"i18n.sounds\"\n        xmlns:v-on=\"http://www.w3.org/1999/xhtml\">\n    <div class=\"withPaddingLeft\">\n        <div class=\"table width100\">\n            <div class=\"row\"\n                 v-for=\"sound in (editData.soundList && editData.soundList.rs)\">\n\n                <div class=\"cell\">\n                    <span class=\"inlineBlock withPaddingTop withPaddingBottom\">\n                        {{sound.name}}\n                    </span>\n                </div>\n\n                <div class=\"cell width1\">\n                    <div class=\"edit\" v-on:click=\"editSound(sound)\"/>\n                </div>\n                <div class=\"cell width1\">\n                    <div class=\"delete\" v-on:click=\"deleteSound(sound)\"/>\n                </div>\n\n            </div>\n        </div>\n    </div>\n</app-collapsible>";

},{}],156:[function(require,module,exports){
'use strict';

var utils = require('providers/utils');
var Sound = _require('sound');
var soundDialog = require('../../dialogs/soundDialog/soundDialog');
var restResource = require('providers/rest/resource');
var restFileSystem = require('providers/rest/fileSystem');

module.exports = Vue.component('app-sounds', {
    props: [],
    template: require('./sounds.html'),
    data: function data() {
        return {
            editData: require('providers/editData'),
            i18n: require('providers/i18n').getAll()
        };
    },
    components: {},
    methods: {
        createSound: function createSound() {
            this.editData.currSoundInEdit = new Sound(new Sound().toJSON());
            soundDialog.instance.open();
        },
        editSound: function editSound(sound) {
            this.editData.currSoundInEdit = sound.clone();
            soundDialog.instance.open();
        },
        deleteSound: function deleteSound(model) {
            utils.deleteModel(model, function () {
                restFileSystem.removeFile(model.resourcePath.replace('resources/', ''));
            });
        }
    }
});

},{"../../dialogs/soundDialog/soundDialog":138,"./sounds.html":155,"providers/editData":173,"providers/i18n":175,"providers/rest/fileSystem":177,"providers/rest/resource":179,"providers/utils":181}],157:[function(require,module,exports){
module.exports = "<app-collapsible\n        :title=\"i18n.spriteSheets\"\n        :crud=\"{\n            create:createSpriteSheet\n        }\"\n        xmlns:v-on=\"http://www.w3.org/1999/xhtml\">\n    <div class=\"withPaddingLeft\">\n        <div class=\"table width100\">\n            <div class=\"row\"\n                 v-for=\"spriteSheet in (editData.spriteSheetList && editData.spriteSheetList.rs)\">\n\n                <div class=\"cell\">\n                    <img\n                        height=\"20\"\n                        class=\"spriteSheetThumb\"\n                        :src=\"editData.projectName+'/'+spriteSheet.resourcePath\"/>\n                </div>\n                <div class=\"cell\">\n                    <span class=\"inlineBlock withPaddingTop withPaddingBottom\">\n                        {{spriteSheet.name}}\n                    </span>\n                </div>\n                <div class=\"cell width1\">\n                    <div class=\"edit\" v-on:click=\"editSpriteSheet(spriteSheet)\"/>\n                </div>\n                <div class=\"cell width1\">\n                    <div class=\"delete\" v-on:click=\"deleteSpriteSheet(spriteSheet)\"/>\n                </div>\n            </div>\n        </div>\n    </div>\n</app-collapsible>";

},{}],158:[function(require,module,exports){
'use strict';

var utils = require('providers/utils');
var SpriteSheet = _require('spriteSheet');
var spriteSheetDialog = require('../../dialogs/spriteSheetDialog/spriteSheetDialog');

module.exports = Vue.component('app-sprite-sheets', {
    props: [],
    template: require('./spriteSheets.html'),
    data: function data() {
        return {
            editData: require('providers/editData'),
            i18n: require('providers/i18n').getAll()
        };
    },
    components: {},
    methods: {
        createSpriteSheet: function createSpriteSheet() {
            this.editData.currSpriteSheetInEdit = new SpriteSheet(new SpriteSheet().toJSON());
            spriteSheetDialog.instance.open();
        },
        editSpriteSheet: function editSpriteSheet(sprSh) {
            this.editData.currSpriteSheetInEdit = sprSh.clone();
            spriteSheetDialog.instance.open();
        },
        deleteSpriteSheet: function deleteSpriteSheet(model) {
            var hasDepends = this.editData.gameObjectList.filter(function (it) {
                return it.spriteSheet.id == model.id;
            }).size() > 0;
            if (hasDepends) {
                window.alertEx(this.i18n.canNotDelete(model));
                return;
            }
            utils.deleteModel(model);
        }
    }
});

},{"../../dialogs/spriteSheetDialog/spriteSheetDialog":140,"./spriteSheets.html":157,"providers/editData":173,"providers/i18n":175,"providers/utils":181}],159:[function(require,module,exports){
module.exports = "<app-collapsible\n        :title=\"i18n.userInterface\"\n        >\n    <div class=\"withPaddingLeft\">\n        <div class=\"table width100\">\n            <div class=\"row\"\n                 v-for=\"ui in (editData.userInterfaceList && editData.userInterfaceList.rs)\">\n\n                <div class=\"cell\">\n                    <span class=\"inlineBlock withPaddingTop withPaddingBottom\">{{ui.subType}}</span>\n                </div>\n\n            </div>\n        </div>\n    </div>\n</app-collapsible>";

},{}],160:[function(require,module,exports){
'use strict';

module.exports = Vue.component('app-user-interface', {
    props: [],
    template: require('./userInterface.html'),
    data: function data() {
        return {
            editData: require('providers/editData'),
            i18n: require('providers/i18n').getAll()
        };
    },
    components: {},
    methods: {}
});

},{"./userInterface.html":159,"providers/editData":173,"providers/i18n":175}],161:[function(require,module,exports){
module.exports = "<app-collapsible\r\n        :title=\"i18n.currGameObject\"\r\n        xmlns:v-on=\"http://www.w3.org/1999/xhtml\">\r\n\r\n    <div\r\n            v-if=\"!editData.currSceneGameObjectInEdit.id\">\r\n        {{i18n.notSelected}}\r\n    </div>\r\n\r\n    <div\r\n            class=\"withPadding\"\r\n            v-if=\"editData.currSceneGameObjectInEdit.id\">\r\n        <h3 class=\"centerText\">\r\n            {{editData.currSceneGameObjectInEdit.type}}\r\n        </h3>\r\n\r\n        <div class=\"table width100\">\r\n\r\n            <div class=\"row\" v-if=\"editData.currSceneGameObjectInEdit.subType\">\r\n                <div class=\"cell\">\r\n                    subType\r\n                </div>\r\n                <div class=\"cell\">\r\n                    <i>{{editData.currSceneGameObjectInEdit.subType}}</i>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n                <div class=\"cell\">\r\n                    name\r\n                </div>\r\n                <div class=\"cell\">\r\n                    <input\r\n                            required\r\n                            v-control=\"{form:form,model:editData.currSceneGameObjectInEdit,prop:'name'}\"\r\n                            v-on:change=\"editGameObject()\"\r\n                            class=\"width100\"\r\n                            v-model=\"editData.currSceneGameObjectInEdit.name\"/>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n                <div class=\"cell\">\r\n                    pos.x\r\n                </div>\r\n                <div class=\"cell\">\r\n                    <input\r\n                            v-on:change=\"editGameObject()\"\r\n                            type=\"number\"\r\n                            class=\"width100\"\r\n                            required\r\n                            v-control=\"{form:form,model:editData.currSceneGameObjectInEdit.pos,prop:'x'}\"\r\n                            v-model=\"editData.currSceneGameObjectInEdit.pos.x\"/>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"cell\">\r\n                    pos.y\r\n                </div>\r\n                <div class=\"cell\">\r\n                    <input\r\n                            v-on:change=\"editGameObject()\"\r\n                            type=\"number\"\r\n                            class=\"width100\"\r\n                            required\r\n                            v-control=\"{form:form,model:editData.currSceneGameObjectInEdit.pos,prop:'y'}\"\r\n                            v-model=\"editData.currSceneGameObjectInEdit.pos.y\"/>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n                <div class=\"cell\">\r\n                    scale.x\r\n                </div>\r\n                <div class=\"cell\">\r\n                    <input\r\n                            v-on:change=\"editGameObject()\"\r\n                            type=\"number\"\r\n                            step=\"0.1\"\r\n                            class=\"width100\"\r\n                            required\r\n                            v-control=\"{form:form,model:editData.currSceneGameObjectInEdit.scale,prop:'x'}\"\r\n                            v-model=\"editData.currSceneGameObjectInEdit.scale.x\"/>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n                <div class=\"cell\">\r\n                    scale.y\r\n                </div>\r\n                <div class=\"cell\">\r\n                    <input\r\n                            v-on:change=\"editGameObject()\"\r\n                            type=\"number\"\r\n                            step=\"0.1\"\r\n                            class=\"width100\"\r\n                            required\r\n                            v-control=\"{form:form,model:editData.currSceneGameObjectInEdit.scale,prop:'y'}\"\r\n                            v-model=\"editData.currSceneGameObjectInEdit.scale.y\"/>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n                <div class=\"cell\">\r\n                    {{i18n.width}}\r\n                </div>\r\n                <div class=\"cell\">\r\n                    <input\r\n                            v-on:change=\"editGameObject()\"\r\n                            type=\"number\"\r\n                            class=\"width100\"\r\n                            step=\"1\"\r\n                            required\r\n                            v-control=\"{form:form,model:editData.currSceneGameObjectInEdit,prop:'width'}\"\r\n                            v-model=\"editData.currSceneGameObjectInEdit.width\"/>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n                <div class=\"cell\">\r\n                    {{i18n.height}}\r\n                </div>\r\n                <div class=\"cell\">\r\n                    <input\r\n                            v-on:change=\"editGameObject()\"\r\n                            type=\"number\"\r\n                            class=\"width100\"\r\n                            step=\"1\"\r\n                            required\r\n                            v-control=\"{form:form,model:editData.currSceneGameObjectInEdit,prop:'height'}\"\r\n                            v-model=\"editData.currSceneGameObjectInEdit.height\"/>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n                <div class=\"cell\">\r\n                    {{i18n.angle}}\r\n                </div>\r\n                <div class=\"cell\">\r\n                    <input\r\n                            v-on:change=\"editGameObject()\"\r\n                            type=\"number\"\r\n                            class=\"width100\"\r\n                            step=\"0.1\"\r\n                            required\r\n                            v-control=\"{form:form,model:editData.currSceneGameObjectInEdit,prop:'angle'}\"\r\n                            v-model=\"editData.currSceneGameObjectInEdit.angle\"/>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n                <div class=\"cell\">\r\n                    alpha\r\n                </div>\r\n                <div class=\"cell\">\r\n                    <input\r\n                            v-on:change=\"editGameObject()\"\r\n                            type=\"number\"\r\n                            class=\"width100\"\r\n                            step=\"0.1\"\r\n                            required\r\n                            min=\"0\"\r\n                            max=\"1\"\r\n                            v-control=\"{form:form,model:editData.currSceneGameObjectInEdit,prop:'alpha'}\"\r\n                            v-model=\"editData.currSceneGameObjectInEdit.alpha\"/>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n                <div class=\"cell\">\r\n                    {{i18n.fixedToCamera}}\r\n                </div>\r\n                <div class=\"cell\">\r\n                    <input\r\n                            v-on:change=\"editGameObject()\"\r\n                            type=\"checkbox\"\r\n                            v-model=\"editData.currSceneGameObjectInEdit.fixedToCamera\"\r\n                            />\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n                <div class=\"cell\">\r\n                    {{i18n.rigid}}\r\n                </div>\r\n                <div class=\"cell\">\r\n                    <input\r\n                            v-on:change=\"editGameObject()\"\r\n                            type=\"checkbox\"\r\n                            v-model=\"editData.currSceneGameObjectInEdit.rigid\"\r\n                            />\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row\"\r\n                 v-if=\"editData.currSceneGameObjectInEdit.subType=='textField'\"\r\n                    >\r\n                <div class=\"cell\">\r\n                    {{i18n.text}}\r\n                </div>\r\n                <div class=\"cell\">\r\n                <textarea\r\n                        class=\"width100\"\r\n                        v-on:keyup=\"updateEditText() || editGameObject()\"\r\n                        v-model=\"editData.currSceneGameObjectInEdit.text\"></textarea>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row\"\r\n                 v-if=\"editData.currSceneGameObjectInEdit.subType=='textField'\"\r\n                    >\r\n                <div class=\"cell\">\r\n                    {{i18n.font}}\r\n                </div>\r\n                <div class=\"cell\">\r\n                    <select\r\n                            class=\"width100\"\r\n                            v-model=\"editData.currSceneGameObjectInEdit.fontId\"\r\n                            ng-change=\"editGameObjectFromRightMenu(editData.currSceneGameObjectInEdit)\"\r\n                            required\r\n                            >\r\n                        <option :value=\"item.id\" v-for=\"item in editData.fontList.rs\">{{item.name}}</option>\r\n                    </select>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n\r\n</app-collapsible>\r\n\r\n";

},{}],162:[function(require,module,exports){
'use strict';

var resource = require('providers/resource');

module.exports = Vue.component('app-scene-game-object', {
    props: [],
    template: require('./sceneGameObject.html'),
    data: function data() {
        return {
            editData: require('providers/editData'),
            i18n: require('providers/i18n').getAll(),
            form: require('providers/validator').new()
        };
    },
    components: {},
    methods: {
        editGameObject: function editGameObject() {
            var obj = this.editData.currSceneGameObjectInEdit;
            var s = this;
            if (obj.fontId) {
                var fnt = s.editData.fontList.find({ id: obj.fontId });
                s.editData.currSceneGameObjectInEdit._font = fnt;
                s.editData.currSceneGameObjectInEdit.fontId = fnt.id;
                obj.setText(obj.text);
            }
            resource.createOrEditObjectInResource('layer', s.editData.currLayerInEdit.protoId, 'gameObjectProps', obj.toJSON());
        },
        updateEditText: function updateEditText() {
            this.editData.currSceneGameObjectInEdit.setText(this.editData.currSceneGameObjectInEdit.text);
        }
    }
});

},{"./sceneGameObject.html":161,"providers/editData":173,"providers/i18n":175,"providers/resource":176,"providers/validator":182}],163:[function(require,module,exports){
module.exports = "<app-collapsible\r\n        :title=\"i18n.currScene\"\r\n        xmlns:v-on=\"http://www.w3.org/1999/xhtml\">\r\n\r\n        <div\r\n                v-if=\"!editData.currSceneInEdit.id\">\r\n            {{i18n.notSelected}}\r\n        </div>\r\n\r\n        <div class=\"withPadding\" v-if=\"editData.currSceneInEdit.id\">\r\n\r\n            <b class=\"centerText\">\r\n                {{i18n.scene}} : {{editData.currSceneInEdit.name}}\r\n            </b>\r\n\r\n            <div class=\"table width100\">\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"cell\">\r\n                        <label for=\"editData.currSceneInEdit.useBG\">{{i18n.useBG}}</label>\r\n                    </div>\r\n                    <div class=\"cell\">\r\n                        <input type=\"checkbox\"\r\n                               id=\"editData.currSceneInEdit.useBG\"\r\n                               v-model=\"editData.currSceneInEdit.useBG\"\r\n                               v-on:change=\"editScene()\"/>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row\" v-if=\"editData.currSceneInEdit.useBG\">\r\n                    <div class=\"cell\">\r\n                        {{i18n.colorBG}}\r\n                    </div>\r\n                    <div class=\"cell\">\r\n                        <app-color-picker\r\n                                :object=\"editData.currSceneInEdit\"\r\n                                :value=\"'colorBG'\"\r\n                                :onchange=\"editScene()\"\r\n                                />\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"cell\">\r\n                        <hr/>\r\n                    </div>\r\n                    <div class=\"cell\">\r\n                        <hr/>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"cell valign bold\">\r\n                        {{i18n.tileMap}}\r\n                    </div>\r\n                    <div class=\"cell eye\"></div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"cell valign\">\r\n                        tileMap.width\r\n                    </div>\r\n                    <div class=\"cell\">\r\n                        <input type=\"number\"\r\n                               min=\"0\"\r\n                               maxlength=\"3\"\r\n                               v-control=\"{form:form,model:editData.currSceneInEdit.tileMap,prop:'width'}\"\r\n                               v-on:change=\"editScene()\"\r\n                               v-model=\"editData.currSceneInEdit.tileMap.width\"/>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"cell valign\">\r\n                        tileMap.height\r\n                    </div>\r\n                    <div class=\"cell\">\r\n                        <input type=\"number\"\r\n                               min=\"0\"\r\n                               maxlength=\"3\"\r\n                               v-control=\"{form:form,model:editData.currSceneInEdit.tileMap,prop:'height'}\"\r\n                               v-on:change=\"editScene()\"\r\n                               v-model=\"editData.currSceneInEdit.tileMap.height\"/>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"cell\">\r\n                        {{i18n.selected}}\r\n                    </div>\r\n                    <div class=\"cell\">\r\n                        <div\r\n                            :class=\"{\r\n                                inlineBlock:1,\r\n                                hoverOutline:1\r\n                            }\"\r\n                            :style=\"{\r\n                                width:frameWidth+'px',\r\n                                verticalAlign:'middle',\r\n                                height:frameHeight+'px',\r\n                                backgroundImage:      'url('+editData.projectName+'/'+resourcePath+')',\r\n                                backgroundPositionX:  -framePosX+'px',\r\n                                backgroundPositionY:  -framePosY+'px',\r\n                                backgroundRepeat:     'no-repeat',\r\n                            }\"\r\n                        ></div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"cell\">\r\n                        {{i18n.spriteSheets}}\r\n                    </div>\r\n                    <div class=\"cell\">\r\n                        <select\r\n                                v-model=\"editData.currSceneInEdit.tileMap.spriteSheetId\"\r\n                                v-on:change=\"setTileMapSpriteSheet()\"\r\n                                >\r\n                            <option value=\"\">--</option>\r\n                            <option\r\n                                    v-for=\"item in editData.spriteSheetList.rs\"\r\n                                    :value=\"item.id\"\r\n                                    >{{item.name}}</option>\r\n                        </select>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div\r\n                :style=\"{\r\n                    width: frameWidth*numOfFramesH+'px',\r\n                    overflowX: 'auto'\r\n                }\"\r\n                >\r\n                <div :class=\"{\r\n                        inlineBlock:true,\r\n                        selected:i==editData.currTileIndexInEdit,\r\n                        hoverOutline:1\r\n                     }\"\r\n                     :style=\"{\r\n                        width:frameWidth+'px',\r\n                        verticalAlign:'middle',\r\n                        height:frameHeight+'px',\r\n                        backgroundImage:'url('+resourcePath+')',\r\n                        backgroundPositionX:   -framePosX+'px',\r\n                        backgroundPositionY:   -framePosY+'px',\r\n                        backgroundRepeat:     'no-repeat',\r\n                     }\"\r\n                     :title=\"i\"\r\n                     v-on:click.capture=\"setCurrSelectedTile(i)\"\r\n                     v-for=\"(v,i) in numOfFramesForSceneSpriteSheet\"\r\n                     ></div>\r\n            </div>\r\n\r\n        </div>\r\n\r\n\r\n\r\n</app-collapsible>";

},{}],164:[function(require,module,exports){
'use strict';

var editData = require('providers/editData');
var resource = require('providers/resource');
var Scene = _require('scene');

module.exports = Vue.component('app-right-scene', {
    props: [],
    template: require('./scene.html'),
    data: function data() {
        return {
            editData: editData,
            i18n: require('providers/i18n').getAll(),
            utils: require('providers/utils'),
            form: require('providers/validator').new()
        };
    },
    computed: {
        numOfFramesForSceneSpriteSheet: function numOfFramesForSceneSpriteSheet() {
            if (!editData.currSceneInEdit) return 0;
            if (!editData.currSceneInEdit.tileMap) return 0;
            if (!editData.currSceneInEdit.tileMap._spriteSheet) return 0;
            return editData.currSceneInEdit.tileMap._spriteSheet.numOfFramesV * editData.currSceneInEdit.tileMap._spriteSheet.numOfFramesH || 0;
        },
        frameWidth: function frameWidth() {
            if (!editData.currSceneInEdit.tileMap) return null;
            if (!editData.currSceneInEdit.tileMap._spriteSheet) return null;
            return editData.currSceneInEdit.tileMap._spriteSheet._frameWidth;
        },
        frameHeight: function frameHeight() {
            if (!editData.currSceneInEdit.tileMap) return null;
            if (!editData.currSceneInEdit.tileMap._spriteSheet) return null;
            return editData.currSceneInEdit.tileMap._spriteSheet._frameHeight;
        },
        framePosX: function framePosX() {
            if (!editData.currSceneInEdit.tileMap) return null;
            if (!editData.currSceneInEdit.tileMap._spriteSheet) return null;
            if (!editData.currSceneInEdit.tileMap._spriteSheet.getFramePosX) return null;
            if (!editData.currTileIndexInEdit) return null;
            return editData.currSceneInEdit.tileMap._spriteSheet.getFramePosX(editData.currTileIndexInEdit);
        },
        framePosY: function framePosY() {
            if (!editData.currSceneInEdit.tileMap) return null;
            if (!editData.currSceneInEdit.tileMap._spriteSheet) return null;
            if (!editData.currSceneInEdit.tileMap._spriteSheet.getFramePosY) return null;
            if (!editData.currTileIndexInEdit) return null;
            return editData.currSceneInEdit.tileMap._spriteSheet.getFramePosY(editData.currTileIndexInEdit);
        },
        resourcePath: function resourcePath() {
            if (!editData.currSceneInEdit.tileMap) return null;
            if (!editData.currSceneInEdit.tileMap._spriteSheet) return null;
            return editData.currSceneInEdit.tileMap._spriteSheet.resourcePath;
        },
        numOfFramesH: function numOfFramesH() {
            if (!editData.currSceneInEdit.tileMap) return null;
            if (!editData.currSceneInEdit.tileMap._spriteSheet) return null;
            return editData.currSceneInEdit.tileMap._spriteSheet.numOfFramesH;
        }
    },
    components: {},
    methods: {
        setCurrSelectedTile: function setCurrSelectedTile(i) {
            editData.currTileIndexInEdit = i;
        },
        setTileMapSpriteSheet: function setTileMapSpriteSheet() {
            editData.currSceneInEdit = new Scene(editData.currSceneInEdit.toJSON());
        },
        editScene: function editScene() {
            var self = this;
            resource.createOrEditResource(self.editData.currSceneInEdit);
        }
    }
});

},{"./scene.html":163,"providers/editData":173,"providers/i18n":175,"providers/resource":176,"providers/utils":181,"providers/validator":182}],165:[function(require,module,exports){
module.exports = "<div class=\"panel withPadding pointer\" xmlns:v-on=\"http://www.w3.org/1999/xhtml\">\r\n\r\n    <div class=\"inlineBlock\" ng-click=\"showBuildDialog()\">\r\n        {{i18n.build}}\r\n    </div>\r\n    <div class=\"inlineBlock\" v-on:click=\"run()\">\r\n        {{i18n.run}}\r\n    </div>\r\n    <div class=\"inlineBlock\" v-on:click=\"toExplorer()\">\r\n        {{i18n.explorer}}\r\n    </div>\r\n\r\n</div>";

},{}],166:[function(require,module,exports){
'use strict';

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var w;
var http = require('providers/http');
var editData = require('providers/editData');

var generateBuildUrl = function generateBuildUrl(opts) {
    var url = '/generate?r=' + Math.random();
    (0, _keys2.default)(opts).forEach(function (key) {
        if (opts[key]) url += '&' + key + '=1';
    });
    url += '&projectName=' + editData.projectName;
    return url;
};

module.exports = Vue.component('app-top-panel', {
    props: [],
    template: require('./topPanel.html'),
    data: function data() {
        return {
            editData: require('providers/editData'),
            i18n: require('providers/i18n').getAll()
        };
    },
    components: {},
    methods: {
        run: function run() {
            http.get('/resource/generate', {
                debug: 1,
                r: Math.random(),
                projectName: editData.projectName
            }, function () {
                if (!w || w.closed) {
                    //w = window.open(
                    //    '/'+editData.projectName+'/out',
                    //    editData.projectName,
                    //    'width='+editData.gameProps.width+',height='+editData.gameProps.height+',toolbar=0'
                    //);
                    w = window.open('/' + editData.projectName + '/out');
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
            location.hash = '#/explorer';
        }
    }
});

},{"./topPanel.html":165,"babel-runtime/core-js/object/keys":4,"providers/editData":173,"providers/http":174,"providers/i18n":175}],167:[function(require,module,exports){
module.exports = "<app-modal\r\n        v-on:close=\"close()\"\r\n        v-if=\"opened\" xmlns:v-on=\"http://www.w3.org/1999/xhtml\">\r\n\r\n    <table class=\"width100\">\r\n        <tr>\r\n            <td>\r\n                {{i18n.name}}\r\n            </td>\r\n            <td>\r\n                <input\r\n                        required\r\n                        v-model=\"editData.currProjectInEdit.name\"/>\r\n            </td>\r\n        </tr>\r\n    </table>\r\n    <button v-on:click=\"createOrEditProject(editData.currProjectInEdit)\">\r\n        {{editData.currProjectInEdit.oldName?i18n.edit:i18n.create}}\r\n    </button>\r\n\r\n</app-modal>";

},{}],168:[function(require,module,exports){
'use strict';

var abstractDialog = require('providers/abstractDialog');

var editData = require('providers/editData');
var resource = require('providers/resource');
var restProject = require('providers/rest/project');
var fileSystem = require('providers/rest/fileSystem');

module.exports.component = Vue.component('app-project-dialog', {
    mixins: [abstractDialog],
    props: [],
    template: require('./projectDialog.html'),
    data: function data() {
        return {
            form: require('providers/validator').new(),
            editData: editData,
            i18n: require('providers/i18n').getAll()
        };
    },
    created: function created() {
        module.exports.instance = this;
    },
    components: {},
    methods: {
        createOrEditProject: function createOrEditProject(proj) {
            if (proj.oldName) {
                fileSystem.renameFolder('workspace/' + proj.oldName, 'workspace/' + proj.name, function () {
                    restProject.getAll(function (list) {
                        editData.projects = list;
                    });
                });
            } else {
                restProject.create(proj.name, function () {
                    restProject.getAll(function (list) {
                        editData.projects = list;
                    });
                });
            }
            this.close();
        }
    }
});

},{"./projectDialog.html":167,"providers/abstractDialog":171,"providers/editData":173,"providers/i18n":175,"providers/resource":176,"providers/rest/fileSystem":177,"providers/rest/project":178,"providers/validator":182}],169:[function(require,module,exports){
module.exports = "<div xmlns:v-on=\"http://www.w3.org/1999/xhtml\">\r\n    <div class=\"width50 marginAuto\">\r\n        <h3 class=\"centerText\">{{i18n.projects}}</h3>\r\n        <div class=\"table width100\">\r\n            <div\r\n                    v-for=\"p in editData.projects\"\r\n                    class=\"row hoverOnProjectRow\">\r\n                <div class=\"cell\">\r\n                    <div\r\n                            v-on:click.capture=\"openProject(p)\"\r\n                            class=\"withPadding pointer\">\r\n                        {{p.name}}\r\n                    </div>\r\n                </div>\r\n                <div class=\"cell rightAlign\">\r\n                    <div class=\"edit\"\r\n                            v-on:click.capture=\"editProject(p)\"\r\n                            ></div>\r\n                </div>\r\n                <div class=\"cell rightAlign\">\r\n                    <div\r\n                            v-on:click.capture=\"deleteProject(p)\"\r\n                            class=\"delete\"></div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"cell\">\r\n                    <div class=\"withPadding\">\r\n                        <div class=\"add\"\r\n                                v-on:click=\"createProject()\"\r\n                                ></div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <app-project-dialog/>\r\n\r\n</div>";

},{}],170:[function(require,module,exports){
'use strict';

var projectDialog = require('./dialogs/projectDialog/projectDialog');
var editData = require('providers/editData');
var restProject = require('providers/rest/project');
var resource = require('providers/resource');
var fileSystem = require('providers/rest/fileSystem');

module.exports = Vue.component('explorer', {
    props: [],
    template: require('./explorer.html'),
    created: function created() {
        restProject.getAll(function (list) {
            editData.projects = list;
        });
    },
    data: function data() {
        return {
            editData: editData,
            i18n: require('providers/i18n').getAll(),
            projects: []
        };
    },
    components: {
        appProjectDialog: require('./dialogs/projectDialog/projectDialog')
    },
    methods: {
        editProject: function editProject(p) {
            p.oldName = p.name;
            this.editData.currProjectInEdit = {
                name: p.name,
                oldName: p.name
            };
            projectDialog.instance.open();
        },
        createProject: function createProject() {
            this.editData.currProjectInEdit = {
                name: ''
            };
            projectDialog.instance.open();
        },
        openProject: function openProject(project) {
            resource.loadProject(project.name);
        },
        deleteProject: function deleteProject(proj) {
            var self = this;
            proj.type = 'project';
            window.confirmEx(this.i18n.confirmQuestion(proj), function () {
                fileSystem.deleteFolder('workspace/' + proj.name, function () {
                    restProject.getAll(function (list) {
                        editData.projects = list;
                    });
                });
            });
        }
    }
});

},{"./dialogs/projectDialog/projectDialog":168,"./explorer.html":169,"providers/editData":173,"providers/i18n":175,"providers/resource":176,"providers/rest/fileSystem":177,"providers/rest/project":178}],171:[function(require,module,exports){
"use strict";

module.exports = {
    data: function data() {
        return {
            opened: false
        };
    },
    methods: {
        open: function open() {
            this.opened = true;
        },
        close: function close() {
            this.opened = false;
        }
    }
};

},{}],172:[function(require,module,exports){
'use strict';

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
module.exports.requestToApi = function (params, callBack) {
    var eventUUID = ~~Math.random() * 100 + new Date().getTime();
    events[eventUUID] = callBack;
    params.eventUUID = eventUUID;
    window.top.postMessage(params, '*');
};

},{}],173:[function(require,module,exports){
'use strict';

var collections = _require('collections');

var res = {};

res.reset = function () {

    res.commonBehaviourList = {};
    res.currGameObjectInEdit = {};
    res.currSpriteSheetInEdit = {};
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
    res.projects = {};

    //res.buildOpts = {
    //    debug: false,
    //    embedResources: false,
    //    embedScript: false,
    //    minify:false
    //};
};

res.reset();

module.exports = res;

},{}],174:[function(require,module,exports){
'use strict';

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var execMethod = function execMethod(url, method, params, callBack) {
    if (method == 'get' && params) {
        var tail = (0, _keys2.default)(params).map(function (item) {
            return item + '=' + params[item];
        }).join('&');
        url = url + '?' + tail;
        params = undefined;
    }
    var resolveFn, rejectFn;
    var p = new _promise2.default(function (resolve, reject) {
        resolveFn = resolve;
        rejectFn = reject;
    });
    Vue.http[method](url, params).then(function (resp) {
        try {
            var r = resp.body;
            callBack && callBack(r);
            resolveFn(r);
        } catch (e) {
            rejectFn(e);
            setTimeout(function () {
                throw e;
            }, 0);
        }
    }).catch(function (err) {
        rejectFn(err);
        setTimeout(function () {
            if (err.status || err.status != 200) {
                console.log(err);
                throw err.body || '';
            }
        }, 0);
    });
    return p;
};

module.exports.get = function (url, params, callBack) {
    return execMethod(url, 'get', params, callBack);
};

module.exports.post = function (url, params, callBack) {
    return execMethod(url, 'post', params, callBack);
};

module.exports.postMultiPart = function (url, file, params, callBack) {
    var formData = new FormData();
    (0, _keys2.default)(params).forEach(function (key) {
        formData.append(key, params[key]);
    });
    formData.append('file', file);
    formData.append('fileName', file.name);
    return execMethod(url, 'post', formData, callBack);
};

},{"babel-runtime/core-js/object/keys":4,"babel-runtime/core-js/promise":5}],175:[function(require,module,exports){
'use strict';

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
        projects: 'projects'
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

module.exports = _i18n;

},{}],176:[function(require,module,exports){
'use strict';

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Resource = function Resource() {

    var self = this;
    var editData = require('providers/editData');
    var http = require('providers/http');

    var bundle = _require('bundle');
    var collections = _require('collections');
    var CommonBehaviour = _require('commonBehaviour');
    var TextField = _require('textField');
    var Layer = _require('layer');

    var _loadResources = function _loadResources(projectName) {
        http.post('/resource/getAll', { projectName: projectName }, function (response) {
            bundle.prepare(response);
            (0, _keys2.default)(bundle).forEach(function (key) {
                if (bundle[key] && bundle[key].call) return;
                if (editData[key] && editData[key].clear) {
                    editData[key].clear();
                    bundle[key].forEach(function (el) {
                        editData[key].add(el);
                    });
                }
                Vue.set(editData, key, bundle[key]);
            });
            editData.gameProps = bundle.gameProps;
            editData.commonBehaviourList = new collections.List();
            response.commonBehaviour.forEach(function (cb) {
                editData.commonBehaviourList.add(new CommonBehaviour(cb));
            });
            editData.userInterfaceList.clear().add(new TextField({ protoId: '0_0_1' }));
        });
    };

    this.loadProject = function (projectName) {
        editData.reset();
        editData.projectName = projectName;
        document.title = editData.projectName;
        sessionStorage.projectName = editData.projectName;
        _promise2.default.resolve().then(function () {
            return _loadResources(projectName);
        }).then(function () {
            if (!bundle.sceneList.isEmpty()) editData.currSceneInEdit = bundle.sceneList.get(0);
            if (editData.currSceneInEdit._layers) {
                if (editData.currSceneInEdit._layers.size()) {
                    editData.currLayerInEdit = editData.currSceneInEdit._layers.get(0);
                }
            }
            location.href = '#/editor';
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
        formData.append('projectName', editData.projectName);
        var op = currResourceInEdit.id ? 'edit' : 'create';
        http.post('/resource/' + op, formData, function (item) {
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
        http.post('/resource/delete', {
            id: id,
            type: type,
            projectName: editData.projectName
        }, function () {
            editData[type + 'List'].remove({ id: id });
            callBack && callBack();
        });
    };

    // todo refactor
    this.createOrEditObjectInResource = function (resourceType, resourceId, objectType, object, callback) {
        var op = object.id ? 'edit' : 'create';
        http.post('/createOrEditObjectInResource', {
            model: (0, _stringify2.default)(object),
            resourceId: resourceId,
            resourceType: resourceType,
            objectType: objectType,
            projectName: editData.projectName
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
                    l._scene = editData.currSceneInEdit;
                    s._layers.add(l);
                    dialog.close();
                });
            }
        });
    };

    this.saveGameProps = function (gameProps) {
        http.post('/gameProps/save', {
            model: gameProps,
            projectName: editData.projectName
        });
    };

    this.createOrEditObjectInResource = function (resourceType, resourceId, objectType, object, callback) {
        var op = object.id ? 'edit' : 'create';
        http.post('/createOrEditObjectInResource', {
            model: (0, _stringify2.default)(object),
            resourceId: resourceId,
            resourceType: resourceType,
            objectType: objectType,
            projectName: editData.projectName
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

module.exports = new Resource();

},{"babel-runtime/core-js/json/stringify":1,"babel-runtime/core-js/object/keys":4,"babel-runtime/core-js/promise":5,"babel-runtime/helpers/typeof":10,"providers/editData":173,"providers/http":174}],177:[function(require,module,exports){
'use strict';

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var http = require('providers/http');
var editData = require('providers/editData');

var FileSystem = function () {
    function FileSystem() {
        (0, _classCallCheck3.default)(this, FileSystem);
    }

    (0, _createClass3.default)(FileSystem, [{
        key: 'createFile',
        value: function createFile(path, content, callback) {
            return http.post('/fileSystem/createFile', {
                path: path,
                content: content,
                projectName: editData.projectName
            }, callback);
        }
    }, {
        key: 'uploadFile',
        value: function uploadFile(file, params, callback) {
            params = params || {};
            params.projectName = editData.projectName;
            console.log(params);
            return http.postMultiPart('/fileSystem/uploadFile', file, params, callback);
        }
    }, {
        key: 'removeFile',
        value: function removeFile(path, callback) {
            return http.post('/fileSystem/removeFile', {
                path: path,
                projectName: editData.projectName
            }, callback);
        }
    }, {
        key: 'readFile',
        value: function readFile(path, callback) {
            return http.post('/fileSystem/readFile', {
                path: path,
                projectName: editData.projectName
            }, callback);
        }
    }, {
        key: 'renameFolder',
        value: function renameFolder(oldName, newName, callback) {
            return http.post('/fileSystem/renameFolder', { oldName: oldName, newName: newName }, callback);
        }
    }, {
        key: 'deleteFolder',
        value: function deleteFolder(name, callback) {
            return http.post('/fileSystem/deleteFolder', { name: name }, callback);
        }
    }]);
    return FileSystem;
}();

module.exports = new FileSystem();

},{"babel-runtime/helpers/classCallCheck":8,"babel-runtime/helpers/createClass":9,"providers/editData":173,"providers/http":174}],178:[function(require,module,exports){
'use strict';

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var http = require('providers/http');
var editData = require('providers/editData');
var bundle = _require('bundle');
var collections = _require('collections');
var TextField = _require('textField');
var CommonBehaviour = _require('commonBehaviour');

var _loadResources = function _loadResources(projectName) {
    http.post('/resource/getAll', { projectName: projectName }, function (response) {
        bundle.prepare(response);
        (0, _keys2.default)(bundle).forEach(function (key) {
            if (bundle[key] && bundle[key].call) return;
            if (editData[key] && editData[key].clear) {
                editData[key].clear();
                bundle[key].forEach(function (el) {
                    editData[key].add(el);
                });
            }
            Vue.set(editData, key, bundle[key]);
        });
        editData.gameProps = bundle.gameProps;
        response.commonBehaviourProto.forEach(function (el) {
            editData.commonBehaviourProto.add(new CommonBehaviour(el));
        });
        editData.userInterfaceList.clear().add(new TextField({ protoId: '0_0_1' }));
    });
};

var Project = function () {
    function Project() {
        (0, _classCallCheck3.default)(this, Project);
    }

    (0, _createClass3.default)(Project, [{
        key: 'getAll',
        value: function getAll(callback) {
            return http.get('/project/getAll', {}, callback);
        }
    }, {
        key: 'create',
        value: function create(projectName, callback) {
            return http.post('/project/create', { projectName: projectName }, callback);
        }
    }, {
        key: 'load',
        value: function load(projectName) {
            editData.reset();
            editData.projectName = projectName;
            document.title = editData.projectName;
            sessionStorage.projectName = editData.projectName;
            _promise2.default.resolve().then(function () {
                return _loadResources(projectName);
            }).then(function () {
                if (!bundle.sceneList.isEmpty()) editData.currSceneInEdit = bundle.sceneList.get(0);
                if (editData.currSceneInEdit._layers) {
                    if (editData.currSceneInEdit._layers.size()) {
                        editData.currLayerInEdit = editData.currSceneInEdit._layers.get(0);
                    }
                }
                location.href = '#/editor';
            });
        }
    }]);
    return Project;
}();

var p = new Project();

if (sessionStorage.projectName) {
    p.load(sessionStorage.projectName);
} else {
    location.href = '#/explorer';
}

module.exports = new Project();

},{"babel-runtime/core-js/object/keys":4,"babel-runtime/core-js/promise":5,"babel-runtime/helpers/classCallCheck":8,"babel-runtime/helpers/createClass":9,"providers/editData":173,"providers/http":174}],179:[function(require,module,exports){
'use strict';

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var http = require('providers/http');
var editData = require('providers/editData');

var Resource = function () {
    function Resource() {
        (0, _classCallCheck3.default)(this, Resource);
    }

    (0, _createClass3.default)(Resource, [{
        key: 'save',
        value: function save(model, callback) {
            if (model.toJSON) model = model.toJSON();
            return http.post('/resource/save', { projectName: editData.projectName, model: model }, callback);
        }
    }, {
        key: 'saveGameProps',
        value: function saveGameProps(model, callback) {
            return http.post('/resource/saveGameProps', { projectName: editData.projectName, model: model }, callback);
        }
    }, {
        key: 'remove',
        value: function remove(model, callback) {
            return http.post('/resource/remove', { projectName: editData.projectName, model: {
                    id: model.id,
                    type: model.type
                } }, callback);
        }
    }]);
    return Resource;
}();

module.exports = new Resource();

},{"babel-runtime/helpers/classCallCheck":8,"babel-runtime/helpers/createClass":9,"providers/editData":173,"providers/http":174}],180:[function(require,module,exports){
'use strict';

//Vue.filter('nbsp', function (value) {
//    return value.split(' ').join('&nbsp;')
//});

window.alertEx = function (msg) {
    require('components/alertDialog/alertDialog').instance.open(msg);
};

window.confirmEx = function (msg, callback) {
    require('components/confirmDialog/confirmDialog').instance.open(msg, callback);
};

},{"components/alertDialog/alertDialog":100,"components/confirmDialog/confirmDialog":110}],181:[function(require,module,exports){
'use strict';

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _create = require('babel-runtime/core-js/object/create');

var _create2 = _interopRequireDefault(_create);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mathEx = _require('mathEx');
var editData = require('providers/editData');
var resource = require('providers/resource');
var restResource = require('providers/rest/resource');
var restFileSystem = require('providers/rest/fileSystem');
var i18n = require('providers/i18n').getAll();

var Utils = function () {
    function Utils() {
        (0, _classCallCheck3.default)(this, Utils);
    }

    (0, _createClass3.default)(Utils, [{
        key: 'getGameObjectCss',
        value: function getGameObjectCss(gameObj) {
            if (!gameObj) return {};
            return {
                width: gameObj.width + 'px',
                height: gameObj.height + 'px',
                backgroundImage: gameObj.spriteSheet && gameObj.spriteSheet.resourcePath && 'url(' + editData.projectName + '/' + gameObj.spriteSheet.resourcePath + ')',
                backgroundPositionY: -gameObj._sprPosY + 'px',
                backgroundPositionX: -gameObj._sprPosX + 'px',
                backgroundRepeat: 'no-repeat',
                opacity: gameObj.alpha,
                transform: 'scale(' + gameObj.scale.x + ',' + gameObj.scale.y + ') rotateZ(' + mathEx.radToDeg(gameObj.angle) + 'deg)'
            };
        }
    }, {
        key: 'merge',
        value: function merge(a, b) {
            a = a || {};
            b = b || {};
            var res = (0, _create2.default)(a);
            (0, _keys2.default)(b).forEach(function (key) {
                res[key] = b[key];
            });
            return res;
        }
    }, {
        key: 'hexToRgb',
        value: function hexToRgb(hex) {
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
            if (!contentWindow.ready) {
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
                restFileSystem.createFile(path, code);
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
            return (0, _keys2.default)(obj).length;
        }
    }, {
        key: 'deleteModel',
        value: function deleteModel(model, callback) {
            window.confirmEx(i18n.confirmQuestion(model), function () {
                editData[model.type + 'List'].remove({ id: model.id });
                restResource.remove(model, callback);
            });
        }
    }, {
        key: 'openEditor',
        value: function openEditor(resourceUrl) {
            var self = this;
            editData.scriptEditorUrl = resourceUrl;
            var path = 'script/' + resourceUrl;
            console.log(path);
            restFileSystem.readFile(path, function (file) {
                self._waitForFrameAndDo(file, path);
            });
        }
    }]);
    return Utils;
}();

module.exports = new Utils();

},{"babel-runtime/core-js/object/create":2,"babel-runtime/core-js/object/keys":4,"babel-runtime/helpers/classCallCheck":8,"babel-runtime/helpers/createClass":9,"providers/editData":173,"providers/i18n":175,"providers/resource":176,"providers/rest/fileSystem":177,"providers/rest/resource":179}],182:[function(require,module,exports){
"use strict";

module.exports.new = function () {
    return {
        valid: function valid() {
            return true;
        }
    };
};

},{}],183:[function(require,module,exports){
'use strict';

window.catchPromise = function (e) {
    setTimeout(function () {
        throw e;
    }, 0);
};

require('providers/resource');

var router = new VueRouter({
    //mode: 'abstract',
    routes: [{
        path: '/editor',
        component: require('pages/editor/editor')
    }, {
        path: '/explorer',
        component: require('pages/explorer/explorer')
    }]
});

require('providers/userDefinedFns');

var app = new Vue({
    router: router,
    components: {
        appConfirmDialog: require('components/confirmDialog/confirmDialog').component,
        appAlertDialog: require('components/alertDialog/alertDialog').component
    }
}).$mount('#app');

router.init(app);

},{"components/alertDialog/alertDialog":100,"components/confirmDialog/confirmDialog":110,"pages/editor/editor":142,"pages/explorer/explorer":170,"providers/resource":176,"providers/userDefinedFns":180}]},{},[183]);
