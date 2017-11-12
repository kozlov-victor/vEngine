
/*global DEBUG:true*/

export default class BaseAbstractBehaviour {

    constructor(){

    }

    manage(){
        console.error(this);
        if (DEBUG) throw `method manage not implemented`;
    }

    onUpdate(){

    }

}