

declare const DEBUG:boolean;

import Game from "../../core/game";

export default class BaseAbstractBehaviour {

    protected game:Game;
    public static instances:Array<BaseAbstractBehaviour> = [];

    constructor(game:Game){
        this.game = game;
        BaseAbstractBehaviour.instances.push(this);
    }

    manage(gameObject,parameters,dirs){
        console.error(this);
        if (DEBUG) throw `BaseAbstractBehaviour: method 'manage' not implemented`;
    }

    onUpdate(){}

    destroy(){}

    static destroyAll(){
        BaseAbstractBehaviour.instances.forEach((it:BaseAbstractBehaviour)=>{
            it.destroy();
        });
    }

}