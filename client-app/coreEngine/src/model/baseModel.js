

import CommonObject from './commonObject'
import Tween from '../engine/tween'
import EventEmitter from '../engine/eventEmitter'

export default class BaseModel extends CommonObject {

    constructor(game){
        super();
        if (DEBUG && !game) throw (
            `can not create model '${this.type}': game instance not passed to model constructor`
        );
        this._game = game;
        this.id = null;
        this.name = null;
        this.tweens = [];
        this._emitter = new EventEmitter();
    }

    revalidate(){}

    tween(obj,fromToVal,tweenTime,easeFnName){
        let t = new Tween(obj,fromToVal,tweenTime,easeFnName);
        this.tweens.push(t);
    }

    update(time){
        this.tweens.forEach((t,index)=>{
            t.update(time);
            if (t.completed) this.tweens.splice(index,1);
        })
    }

    clone(){
        let Clazz = this.constructor;
        let obj = new Clazz(this._game);
        obj._cloner = this;
        return obj.fromJSON(this.toJSON(),true);
    }

    on(eventName,callBack){
        this._emitter.on(eventName,callBack);
        return this;
    }
    trigger(eventName,data){
        this._emitter.trigger(eventName,data);
    }

    updateCloner(){
        if (!DEBUG) return;
        let cloner = this._cloner;
        if (!cloner) return;
        cloner.fromJSON(this.toJSON());
        cloner.updateCloner();
        delete this._cloner;
    }
}
