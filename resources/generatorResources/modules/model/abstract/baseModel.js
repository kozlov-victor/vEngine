var EventEmitter = require('eventEmitter');
var Class = require('class');
var bundle = require('bundle');
var collections = require('collections');

var isPropNotFit = function(key,val){
    if (!key) return true;
    if (key.indexOf('_')==0) return true;
    if (val && val.call) return true;
    if (typeof val == 'string') return false;
    if (typeof val == 'number') return false;
    if (typeof val == 'boolean') return false;
    if (!val) return true;
};

function deepCopy(obj) {
    if (Object.prototype.toString.call(obj) === '[object Array]') {
        var out = [], i = 0, len = obj.length;
        for ( ; i < len; i++ ) {
            out[i] = deepCopy(obj[i]);
        }
        return out;
    }
    if (typeof obj === 'object') {
        var out = {}, i;
        for ( i in obj ) {
            out[i] = deepCopy(obj[i]);
        }
        return out;
    }
    return obj;
}

var BaseModel = Class.extend({
    id:null,
    protoId:null,
    name:'',
    _emitter:null,
    toJSON: function(){
        var res = {};
        for (var key in this) {
            if (isPropNotFit(key,this[key])) {
                continue;
            }
            if (this[key].type) {
                res[key] = {
                   id:this[key].id,
                   type: this[key].type
                }
            } else res[key]=this[key];
        }
        return deepCopy(res);
    },
    toJSON_Array: function(){
        var res = [];
        for (var key in this) {
            if (isPropNotFit(key,this[key])) {
                continue;
            }
            res.push({key:key,value:this[key]});
        }
        return res;
    },
    fromJSON:function(jsonObj){
        var self = this;
        Object.keys(jsonObj).forEach(function(key){
            if (key in self) {
                if (jsonObj[key].type) {
                    if (jsonObj[key].id) {
                        self[key] = bundle[key+'List'].find({id:jsonObj[key].id});
                    } else {
                        var clazz = _require(key);
                        self[key] = new clazz();
                    }
                    return;
                } else if (jsonObj[key].splice) {
                    var arr = [];
                    jsonObj[key].forEach(function(el){
                        arr.push(el);
                    });
                    jsonObj[key] = new collections.List();
                    arr.forEach(function(el){
                        jsonObj[key].add(bundle[el.type+'List'].find({id:el.id}));
                    });
                    return;
                }
                self[key] = jsonObj[key];
                if (typeof self[key]==='boolean') return;
                if (self[key] && !self[key].splice) {
                    self[key] = +self[key]||self[key];
                }
            }
        });
    },
    clone: function(){
        var newObj = new this.constructor(this.toJSON());
        newObj.__cloner__ = this;
        newObj._init();
        return newObj;
    },
    updateCloner: function(){
        var cloner = this.__cloner__;
        cloner.fromJSON(this.toJSON());
    },
    on: function(eventName,callBack){
        this._emitter.on(eventName,callBack);
        return this;
    },
    trigger: function(eventName,data){
        this._emitter.trigger(eventName,data);
    },
    _init:function(){
        arguments && arguments[0] && this.fromJSON(arguments[0]);
    },
    construct: function(){
        this._emitter = new EventEmitter();
    }
});

module.exports = BaseModel;