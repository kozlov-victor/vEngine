
const isPropNotFit = (key,val)=>{
    if (!key) return true;
    if (key.indexOf('_')==0) return true;
    if (val && val.call) return true;
    if (typeof val == 'string') return false;
    if (typeof val == 'number') return false;
    if (typeof val == 'boolean') return false;
    if (!val) return true;
};


const isPrimitive = val=>{
    return typeof val === 'string' || typeof val === 'number'
};


const deepCopy = function(obj, _clonedObjects = []) {
    if (obj===undefined) return undefined;
    if (typeof obj === 'function') return undefined;
    else if (obj===null) return null;
    else if (typeof window !== 'undefined' && obj===window) return undefined;
    else if (_clonedObjects.indexOf(obj)>-1) return obj;
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
            if (i.indexOf('_')==0) return;
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

export default class CommonObject {

    fromJSON(params = {},forceNew){
        Object.keys(params).forEach(key=>{
            if (key==='type') return;
            if (key in this) this[key] = params[key];
            else {
                console.error(this);
                throw `::fromJSON(): class ${this.constructor.name} has no property ${key}`;
            }
            if (!this[key]) return;
            if (params[key].id && params[key].type)
                this[key] = this._game._repository.getObject(params[key].id,params[key].type,forceNew);
            else if (params[key].splice) {
                let arr = this[key];
                this[key] = [];
                arr.forEach((item,i)=>{
                    if (item && item.type && item.id) {
                        this[key].push(this._game._repository.getObject(item.id,item.type,forceNew));
                    } else {
                        if (isPrimitive(item)) this[key].push(item);
                    }
                });
            }
        });
        this.revalidate();
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
                    if (el && el.type && el.id) {
                        arr.push({type:el.type,id:el.id});
                    } else {
                        if (isPrimitive(el)) arr.push(deepCopy(el));
                    }
                });
                res[key] = arr;
            }
            else res[key]=deepCopy(this[key]);
        }
        return res;
    }

}