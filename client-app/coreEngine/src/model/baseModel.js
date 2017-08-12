



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
        this.name = null;
    }

    fromJSON(params = {},forceNew){
        Object.keys(params).forEach(key=>{
            if (key in this) this[key] = params[key];
            else {
                console.error(this);
                throw `::fromJSON(): class ${this.constructor.name} has no property ${key}`;
            }
            if (!this[key]) return;
            let repository = require('../engine/repository').default;
            if (params[key].id && params[key].type)
                this[key] = repository.getObject(params[key].id,params[key].type);
            else if (params[key].splice) {
                let arr = this[key];
                this[key] = [];
                arr.forEach((item,i)=>{
                    if (item.id) this[key].push(repository.getObject(item.id,item.type,forceNew));
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
            if (this[key].type && this[key].id) { // is model
                res[key] = {
                    id:this[key].id,
                    type: this[key].type
                }
            } else if (this[key] && this[key].splice) { // is arr
                let col = this[key];
                let arr = [];
                col.forEach(function(el){
                    if (el.id) arr.push({type:el.type,id:el.id});
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
        if (!cloner) return;
        cloner.fromJSON(this.toJSON());
        cloner.updateCloner();
        let repository = require('../engine/repository').default;
        repository.updateObject(this);
    }
}
