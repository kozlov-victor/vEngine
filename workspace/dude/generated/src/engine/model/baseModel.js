/*global DEBUG:true*/

import CommonObject from './commonObject'
import Tween from '../core/tween'
import EventEmitter from '../core/misc/eventEmitter'
import {Transient} from '../core/misc/decorators'
//import Vec2 from '../core/vec2'

import ArcadeRigidBody from '../core/physics/arcadeRigidBody'

@Transient({
    game: true,
    rigidBody: true
})
export default class BaseModel extends CommonObject {

    id = null;
    name = null;
    width = 0;
    height = 0;
    pos = {x:0,y:0}; // todo vec2?
    scale = {x:1,y:1};
    angle = 0;
    alpha = 1;
    layerId =  null;
    fixedToCamera = false;
    rigid = false;
    _tweens = [];

    constructor(game){
        super();
        if (DEBUG && !game) throw (
            `can not create model '${this.type}': game instance not passed to model constructor`
        );
        this.game = game;
        this._emitter = new EventEmitter();
        this.rigidBody = new ArcadeRigidBody(this);
    }

    revalidate(){}

    setIndividualBehaviour(Clazz){}

    setCommonBehaviour(){}

    onShow(){}

    getRect(){
        let x      = this.pos.x,
            y      = this.pos.y,
            width  = this.width,
            height = this.height;
        return {
            x,y,width,height,
            right: x + width,
            bottom: y + height
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
