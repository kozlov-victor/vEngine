
import {Game} from "../core/game";
import {DebugError} from "../debugError";

declare const DEBUG:boolean;

export interface CloneOpts {
    preserveNull: boolean
}

const isPropNotFit = (key:string, val:any, opts:CloneOpts):boolean=>{
    if (!key) return true;
    if (key.indexOf('_')===0) return true;
    if (val && val.call) return true;
    if (typeof val === 'string') return false;
    if (typeof val === 'number') return false;
    if (typeof val === 'boolean') return false;
    return (val==null && !opts.preserveNull);
};


const isPrimitive = (val:any):boolean=>{
    return typeof val === 'string' || typeof val === 'number'
};

const deepCopy = (obj:any, _clonedObjects:Array<any> = []):any=> {
    if (obj===undefined) return undefined;
    else if (obj===null) return null;
    else if (typeof window !== 'undefined' && obj===window) return undefined;
    else if (_clonedObjects.indexOf(obj)>-1) return obj;
    else if (obj.fromJSON) {
        obj.fromJSON(obj.toJSON());
        return obj;
    }


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
        let out:any = {};
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

export class CommonObject {

    protected game:Game;
    public type:string;
    _cloner:CommonObject;
    id:number = null;
    name:string = null;

    fromJSON(params:any = {},forceNew?:boolean){
        Object.keys(params).forEach((key:string)=>{
            if (key==='type') return;

            if (!(key in this)) {
                console.error(this);
                throw new DebugError(`::fromJSON(): class ${this.constructor[`name`]} has no property ${key}`);
            }
            let thisObj:any = this;

            if (params[key] && params[key].id && params[key].type)
                thisObj[key] = this.game.repository.getObject(params[key].id,params[key].type,forceNew);
            else if (params[key] && params[key].forEach) {
                thisObj[key] = [];
                params[key].forEach((item:any)=>{
                    if (item && item.type && item.id) {
                        thisObj[key].push(this.game.repository.getObject(item.id,item.type,forceNew));
                    } else {
                        thisObj[key].push(item);
                    }
                });
            } else if (thisObj[key] && thisObj[key].fromJSON) {
                thisObj[key].fromJSON(params[key]);
            } else if (thisObj[key] && thisObj[key].call) {
                thisObj[key].call(this,...params[key]);
            } else {
                thisObj[key] = params[key];
            }
        });
        this.revalidate();
        return this;
    }
    toJSON(opts:CloneOpts = {preserveNull: false}) {
        let res:any = {};

        for (let key in this) {
            let thisObj:any = this;
            if (isPropNotFit(key,thisObj[key],opts)) {
                continue;
            }
            if (thisObj.constructor['transient'] && thisObj.constructor['transient'][key]) {
                continue;
            }
            if (thisObj[key]!=null && thisObj[key]['type'] && thisObj[key]['id']) { // is model
                res[key] = {
                    id:thisObj[key]['id'],
                    type: thisObj[key]['type']
                }
            } else if (thisObj[key]!=null && thisObj[key]['splice']) { // is arr
                let col:any = thisObj[key];
                let arr:any[] = [];
                col.forEach((el:any)=>{
                    if (el && el.type && el.id) {
                        arr.push({type:el.type,id:el.id});
                    } else {
                        if (isPrimitive(el)) arr.push(deepCopy(el));
                    }
                });
                res[key] = arr;
            } else if (thisObj[key] && thisObj[key]['toJSON']) {
                res[key] = thisObj[key]['toJSON']();
            }
            else {
                let possiblePrimitive:any = deepCopy(thisObj[key]);
                if (possiblePrimitive && possiblePrimitive.splice && !possiblePrimitive.length) continue;
                else if (possiblePrimitive!=null && typeof possiblePrimitive === 'object' && !Object.keys(possiblePrimitive).length) continue;
                res[key] = possiblePrimitive;
            }
        }
        return res;
    }

    revalidate(){}

    clone(opts?:CloneOpts):CommonObject{
        let Clazz:any = this.constructor;
        let obj:any = new Clazz(this.game);
        obj._cloner = this;
        return obj.fromJSON(this.toJSON(opts),true);
    }

    updateCloner(opts?:CloneOpts){
        if (!DEBUG) return;
        let cloner = this._cloner;
        if (!cloner) return;
        cloner.fromJSON(this.toJSON(opts));
        cloner.updateCloner(opts);
        delete this._cloner;
    }

}