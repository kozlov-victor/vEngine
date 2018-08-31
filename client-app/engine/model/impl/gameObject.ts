

import {GameObjectProto} from './gameObjectProto'
import * as commonBehaviours from '../../commonBehaviour/all'
import {_global} from "../../core/global";
import {noop} from "../../core/misc/noop";
import {BaseAbstractBehaviour} from "../../commonBehaviour/abstract/baseAbstractBehaviour";
import {Game} from "../../core/game";
import {DebugError} from "../../debugError";

declare const DEBUG:boolean;

interface Clazz<T> {
    new(game:Game) : T;
}

export class GameObject extends GameObjectProto {

    type:string = 'GameObject';
    _lastDirection:string;
    gameObjectProto:GameObjectProto = null;

    constructor(game){
        super(game);
        console.log('created go');
    }

    revalidate(){
        let ownProps:any = {};
        for (let key in this) {
            if (!this.hasOwnProperty(key)) continue;
            ownProps[key] = this[key];
        }
        Object.keys(this.gameObjectProto).forEach((key:string)=>{
            if (this.gameObjectProto[key]===undefined) return;
            this[key] = this.gameObjectProto[key];
        });
        Object.keys(ownProps).forEach((key:string)=>{
            if (!ownProps[key]) return; // to avoid corrupt frameIndex val
            if (ownProps[key].splice && ownProps[key].length===0) return;
            this[key] = ownProps[key];
        });
        if (this.startFrameAnimationName!==null) this.playFrameAnimation(this.startFrameAnimationName);
        super.revalidate();
        //     let filter1 = new BlackWhiteFilter(this.game.renderer['gl']); // todo
        //     let filter2 = new ColorizeFilter(this.game.renderer['gl']);
        //     this.filters.push(filter1);
        //     this.filters.push(filter2);
    }

    kill(){
        this.parent.children.remove(it=>it.id===this.id);
    }

    setIndividualBehaviour(instance){
        instance.game = this.game;
        instance.gameObject = this;
        if (!instance.onCreate) instance.onCreate = noop;
        if (!instance.onUpdate) instance.onUpdate = noop;
        if (!instance.onDestroy) instance.onDestroy = noop;
        this._individualBehaviour = instance;
    }

    getIndividualBehaviour(){
        return this._individualBehaviour;
    }

    setCommonBehaviour(){
        let instances = [];
        this.commonBehaviour.forEach((cb:any)=>{
            let CbClazz:Clazz<BaseAbstractBehaviour> =
                commonBehaviours[cb.name] as Clazz<BaseAbstractBehaviour>;
            if (DEBUG) {
                if (!CbClazz) {
                    console.error(cb);
                    console.error(commonBehaviours);
                    throw `can not find common behaviour with name ${cb.name}`
                }
            }
            let instance:BaseAbstractBehaviour = new CbClazz(this.game);
            instance.manage(this,cb.parameters);
            instances.push(instance);
        });
        this.commonBehaviour = instances;
    }


    moveToFront(){
        let index = this.parent.children.indexOf(this);
        if (DEBUG && index==-1) throw new DebugError(`can not move to front: gameObject is detached`);
        this.parent.children.splice(index,1);
        this.parent.children.push(this);

    }

    moveToBack(){
        let index = this.parent.children.indexOf(this);
        if (DEBUG && index==-1) throw new DebugError(`can not move to back: gameObject is detached`);
        this.parent.children.splice(index,1);
        this.parent.children.unshift(this);
    }

}

_global['GameObject'] = GameObject;