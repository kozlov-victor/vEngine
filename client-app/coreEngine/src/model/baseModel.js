/*global DEBUG:true*/

import CommonObject from './commonObject'
import Tween from '../engine/tween'
import EventEmitter from '../engine/eventEmitter'
import {Transient} from '../engine/decorators'

@Transient({
    game: true
})
export default class BaseModel extends CommonObject {

    constructor(game){
        super();
        if (DEBUG && !game) throw (
            `can not create model '${this.type}': game instance not passed to model constructor`
        );
        this.game = game;

        this.id = null;
        this.name = null;
        this.width = 0;
        this.height = 0;
        this.vel = {x:0,y:0};
        this.pos = {x:0,y:0};
        this.scale = {x:1,y:1};
        this.angle = 0;
        this.alpha = 1;
        this.layerId =  null;

        this.rigid = false;
        this._tweens = [];
        this._emitter = new EventEmitter();
    }

    revalidate(){}

    setIndividualBehaviour(Clazz){}

    setCommonBehaviour(){}

    onShow(){}

    getRect(){
        return {
            x:      this.pos.x,
            y:      this.pos.y,
            width:  this.width,
            height: this.height
        };
    }

    /**
     * {target:obj,from:a,to:b,progress:fn,complete:fn,ease:str,time:t}}
     * @param desc
     */
    tween(desc){
        let t = new Tween(desc,this);
        this._tweens.push(t);
    }

    update(time){
        this._tweens.forEach((t, index)=>{
            t.update(time);
            if (t.completed) this._tweens.splice(index,1);
        });
    }

    clone(opts){
        let Clazz = this.constructor;
        let obj = new Clazz(this.game);
        obj._cloner = this;
        return obj.fromJSON(this.toJSON(opts),true);
    }

    on(eventName,callBack){
        this._emitter.on(eventName,callBack);
        return this;
    }
    trigger(eventName,data){
        this._emitter.trigger(eventName,data);
    }

    updateCloner(opts){
        if (!DEBUG) return;
        let cloner = this._cloner;
        if (!cloner) return;
        cloner.fromJSON(this.toJSON(opts));
        cloner.updateCloner(opts);
        delete this._cloner;
    }
}
