
/*global DEBUG:true*/

export default class BaseAbstractBehaviour {

    constructor(){

    }

    manage(){
        console.error(this);
        if (DEBUG) throw `BaseAbstractBehaviour: method 'manage' not implemented`;
    }

    onUpdate(){
        console.error(this);
        if (DEBUG) throw `BaseAbstractBehaviour: method 'onUpdate' not implemented`;
    }

}