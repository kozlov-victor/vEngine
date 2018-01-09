

import {DEBUG} from "../../declarations";
import Game from "../../core/game";

export default class BaseAbstractBehaviour {

    protected game:Game;

    constructor(game:Game){
        this.game = game;
    }

    manage(gameObject,parameters,dirs){
        console.error(this);
        if (DEBUG) throw `BaseAbstractBehaviour: method 'manage' not implemented`;
    }

    onUpdate(){}

}