
const isPropNotFit = (key,val,opts)=>{
    if (!key) return true;
    if (key.indexOf('_')===0) return true;
    if (val && val.call) return true;
    if (typeof val === 'string') return false;
    if (typeof val === 'number') return false;
    if (typeof val === 'boolean') return false;
    return (val==null && !opts.preserveNull);
};


const isPrimitive = val=>{
    return typeof val === 'string' || typeof val === 'number'
};


const deepCopy = (obj, _clonedObjects = [])=> {
    if (obj===undefined) return undefined;
    else if (obj===null) return null;
    else if (typeof window !== 'undefined' && obj===window) return undefined;
    else if (_clonedObjects.indexOf(obj)>-1) return obj;
    else if (obj.fromJSON) return obj.fromJSON(obj.toJSON());

    if (Object.prototype.toString.call(obj) === '[object Array]') {
        let out = [], i = 0, len = obj.length;
        for (; i < len; i++) {
            let clonedObject;
            if (_clonedObjects.indexOf(obj[i])>-1) {
                clonedObject = obj[i];
            } else {
                _clonedObjects.push(obj);
                clonedObject = deepCopy(obj[i],_clonedObjects);
                _clonedObjects.push(obj[i]);
            }
            out[i] = clonedObject;
        }
        return out;
    }
    else if (typeof obj === 'object') {
        let out = {};
        for (let i in obj) {
            if (!obj.hasOwnProperty(i)) continue;
            let clonedObject;
            if (_clonedObjects.indexOf(obj[i])>-1) {
                clonedObject = obj[i];
            } else {
                _clonedObjects.push(obj);
                clonedObject = deepCopy(obj[i],_clonedObjects);
                _clonedObjects.push(obj[i]);
            }
            out[i] = clonedObject;
        }
        return out;
    }
    else return obj;
};

export default class CommonObject {

    fromJSON(params = {},forceNew){
        Object.keys(params).forEach(key=>{
            if (key==='type') return;

            if (!(key in this)) {
                console.error(this);
                throw `::fromJSON(): class ${this.constructor.name} has no property ${key}`;
            }

            if (params[key].id && params[key].type)
                this[key] = this.game.repository.getObject(params[key].id,params[key].type,forceNew);
            else if (params[key].forEach) {
                this[key] = [];
                params[key].forEach(item=>{
                    if (item && item.type && item.id) {
                        this[key].push(this.game.repository.getObject(item.id,item.type,forceNew));
                    } else {
                        this[key].push(item);
                    }
                });
            } else if (this[key] && this[key].fromJSON) {
                this[key].fromJSON(params[key]);
            } else this[key] = params[key];
        });
        this.revalidate();
        return this;
    }
    toJSON(opts = {preserveNull: false}) {
        let res = {};

        for (let key in this) {
            if (isPropNotFit(key,this[key],opts)) {
                continue;
            }
            if (this.constructor.transient && this.constructor.transient[key]) {
                continue;
            }
            if (this[key]!=null && this[key].type && this[key].id) { // is model
                res[key] = {
                    id:this[key].id,
                    type: this[key].type
                }
            } else if (this[key]!=null && this[key].splice) { // is arr
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
            } else if (this[key].toJSON) {
                res[key] = this[key].toJSON();
            }
            else {
                let possiblePrimitive = deepCopy(this[key]);
                if (possiblePrimitive && possiblePrimitive.splice && !possiblePrimitive.length) continue;
                else if (possiblePrimitive!=null && typeof possiblePrimitive === 'object' && !Object.keys(possiblePrimitive).length) continue;
                res[key] = possiblePrimitive;
            }
        }
        return res;
    }

    revalidate(){}

}