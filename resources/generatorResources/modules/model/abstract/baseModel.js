var EventEmitter = require('eventEmitter').EventEmitter;

var isPropNotFit = function(key,val){
    if (!key) return true;
    if (key.indexOf('$$')==0) return true;
    if (key.indexOf('_')==0) return true;
    if (val && val.call) return true;
    if (typeof val == 'string') return false;
    if (typeof val == 'number') return false;
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

exports.BaseModel = Class.extend({
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
            res[key]=this[key];
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
                self[key] = jsonObj[key];
                if (self[key] && !self[key].splice) {
                    self[key] = +self[key]||self[key];
                }
            }
        });
    },
    clone: function(){
        var newObj = new this.constructor(this.toJSON());
        newObj._init();
        return newObj;
    },
    on: function(eventName,callBack){
        this._emitter.on(eventName,callBack);
    },
    trigger: function(eventName,data){
        this._emitter.trigger(eventName,data);
    },
    _init:function(){
        this._emitter = new EventEmitter();
        arguments && arguments[0] && this.fromJSON(arguments[0]);
    }
});