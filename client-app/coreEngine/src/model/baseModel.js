



const isPropNotFit = (key,val)=>{
    if (!key) return true;
    if (key.indexOf('_')==0) return true;
    if (val && val.call) return true;
    if (typeof val == 'string') return false;
    if (typeof val == 'number') return false;
    if (typeof val == 'boolean') return false;
    if (!val) return true;
};

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


export default class BaseModel {

    constructor(){
        this.id = null;
        this.type = this.constructor.name;
    }

    fromJSON(params = {},forceNew){
        Object.keys(params).forEach(key=>{
            if (key in this) this[key] = params[key];
            else {
                console.error(this);
                throw `::fromJSON(): class ${this.constructor.name} has no property ${key}`;
            }
            if (!this[key]) return;
            let Repository = require('../engine/repository');
            if (this[key].id && this[key].type)
                this[key] = Repository.getObject(this[key].id,this[key].type);
            else if (this[key].splice) {
                this[key].forEach((item,i)=>{
                    this[key][i] = Repository.getObject(item.id,item.type,forceNew);
                });
            }
        });
        return this;
    }
    toJSON(){
        let res = {};
        for (let key in this) {

            if (isPropNotFit(key,this[key])) {
                continue;
            }
            if (this[key].type) { // is model
                res[key] = {
                    id:this[key].id,
                    type: this[key].type
                }
            } else if (this[key] && this[key].splice) { // is arr
                let col = this[key];
                let arr = [];
                col.forEach(function(el){
                    arr.push({type:el.type,id:el.id});
                });
                res[key] = arr;
            }
            else res[key]=deepCopy(this[key]);
        }
        return res;
    }

    clone(){
        let Clazz = this.constructor;
        let obj = new Clazz();
        obj._cloner = this;
        return obj.fromJSON(this.toJSON(),true);
    }

    updateCloner(){
        let cloner = this._cloner;
        cloner.fromJSON(this.toJSON())
    }
}
