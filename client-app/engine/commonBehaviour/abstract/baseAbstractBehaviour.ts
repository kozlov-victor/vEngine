
import {DebugError} from "../../debugError";
declare const DEBUG:boolean;

import {GameObject} from "../../model/impl/gameObject";
import {Game} from "../../core/game";

export interface BehaviourParameters {
    [key:string]:any
}

export class BaseAbstractBehaviour {

    protected game:Game;
    public static instances:Array<BaseAbstractBehaviour> = [];

    constructor(game:Game){
        this.game = game;
        BaseAbstractBehaviour.instances.push(this);
    }

    manage(gameObject:GameObject,parameters:BehaviourParameters){
        console.error(this);
        if (DEBUG) throw new DebugError(`BaseAbstractBehaviour: method 'manage' not implemented`);
    }

    onUpdate(time:number,delta:number){}

    destroy(){}

    static destroyAll(){
        BaseAbstractBehaviour.instances.forEach((it:BaseAbstractBehaviour)=>{
            it.destroy();
        });
    }

}