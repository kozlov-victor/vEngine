
/*global DEBUG:true*/

declare const DEBUG:boolean;

export default class BaseAbstractBehaviour {

    constructor(){

    }

    manage(gameObject,parameters,dirs){
        console.error(this);
        if (DEBUG) throw `BaseAbstractBehaviour: method 'manage' not implemented`;
    }

    onUpdate(){}

}