const EventEmitter = require('eventEmitter');
const Class = require('class');
const bundle = require('bundle');
const collections = require('collections');
const _req = require;

const isPropNotFit = (key,val)=>{
    if (!key) return true;
    if (key.indexOf('_')==0) return true;
    if (val instanceof collections.List) return false;
    if (val && val.call) return true;
    if (typeof val == 'string') return false;
    if (typeof val == 'number') return false;
    if (typeof val == 'boolean') return false;
    if (!val) return true;
};

/**
 * @param obj
 * @param _clonedObjects - internal store of cloned object to avoid self-cycled object recursion
 * @returns {*}
 */
const deepCopy = function(obj, _clonedObjects = []) {
    if (obj===undefined) return undefined;
    else if (obj===null) return null;
    if (Object.prototype.toString.call(obj) === '[object Array]') {
        let out = [], i = 0, len = obj.length;
        for (; i < len; i++) {
            let clonedObject;
            if (_clonedObjects.indexOf(obj[i])>-1) {
                clonedObject = obj[i];
            } else {
                _clonedObjects.push(obj[i]);
                clonedObject = deepCopy(obj[i],_clonedObjects);
            }
            out[i] = clonedObject;
        }
        return out;
    }
    if (typeof obj === 'object') {
        let out = {};
        for (let i in obj) {
            let clonedObject;
            if (_clonedObjects.indexOf(obj[i])>-1) {
                clonedObject = obj[i];
            } else {
                _clonedObjects.push(obj[i]);
                clonedObject = deepCopy(obj[i],_clonedObjects);
            }
            out[i] = clonedObject;
        }
        return out;
    }
    return obj;
};


/**
 * @param x
 * @param y
 * @returns {*}
 */
const deepEqual = function(x, y) {
    //if (isNaN(x) && isNaN(y)) return true;
    if (x && y && typeof x === 'object' && typeof y === 'object') {
        if (x===y) return true;
        return (Object.keys(x).length === Object.keys(y).length) &&
            Object.keys(x).reduce((isEqual, key)=> {
                return isEqual && deepEqual(x[key], y[key]);
            },true);
    } else {
        return x===y;
    }

};

const BaseModel = Class.extend({
    id:null,
    protoId:null,
    name:'',
    _emitter:null,
    toJSON(){
        let res = {};
        for (let key in this) {

            if (isPropNotFit(key,this[key])) {
                continue;
            }
            if (this[key].type) {
                res[key] = {
                   id:this[key].id,
                   type: this[key].type
                }
            } else if (this[key] && this[key].rs) { // is collections.List
                let col = this[key];
                let arr = [];
                col.forEach(function(el){
                    arr.push({type:el.type,id:el.id});
                });
                res[key] = arr;
            }
            else res[key]=this[key];
        }
        return deepCopy(res);
    },
    fromJSON(jsonObj){
        let self = this;
        Object.keys(jsonObj).forEach(function(key){
            if (key in self) {
                if (jsonObj[key] && jsonObj[key].type) {
                    if (jsonObj[key].id) {
                        self[key] = bundle[key+'List'].find({id:jsonObj[key].id}).clone();
                    } else {
                        let clazz = _req(self.type);
                        self[key] = new clazz();
                    }
                } else if (
                    jsonObj[key] &&
                    jsonObj[key].splice &&
                    jsonObj[key].length &&
                    jsonObj[key][0].type
                ) {
                    self[key] = new collections.List();
                    let arr = [];
                    jsonObj[key].forEach(function(el){
                        if (el.id) arr.push(el);
                    });
                    arr.forEach(function(el){
                        let elFromList = bundle[el.type+'List'].find({id:el.id});
                        //<code>{{#if opts.debug}}
                        if (!elFromList) throw `can not found ${el.type} with ${el.id}`;
                        // {{/if}}
                        self[key].add(elFromList.clone());
                    });

                } else {
                    self[key] = jsonObj[key];
                    if (typeof self[key]==='boolean') return;
                    if (self[key] && !self[key].splice) {
                        self[key] = +self[key]||self[key];
                    }
                }

            }
        });
    },
    clone: function(){
        let newObj = new this.constructor(this.toJSON());
        //<code>{{#if opts.debug}}
        newObj.__cloner__ = this;
        // {{/if}}
        return newObj;
    },
    //<code>{{#if opts.debug}}
    updateCloner: function(){
        if (!this.__cloner__) return;
        this.__cloner__.fromJSON(this.toJSON());
        this.__cloner__.updateCloner();
    },
    fixateState: function(){
        this.__jsonObj = this.toJSON();
    },
    toJSON_Patched: function(){
        let old = this.__jsonObj;
        let now = this.toJSON();
        let result = {};
        for (let key in now) {
            if (!deepEqual(old[key],now[key])) {
                result[key] = now[key];
            }
        }
        result.id = old.id;
        result.type = old.type;
        result.name = now.name;
        return result;
    },
    // {{/if}}
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