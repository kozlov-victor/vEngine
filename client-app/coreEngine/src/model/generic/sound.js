
import BaseModel from '../baseModel'

export default class Sound extends BaseModel {

    constructor(){
        super();
        this._gain = 1;
        this._loop =false;
    }

    static find(name){
        // let res = bundle.soundList.find({name:name});
        // //<code>{{#if opts.debug}}
        // if (!res) throw `can not found sound with name ${name}`;
        // // {{/if}}
        // return res;
    }

    play(){
        //audioPlayer.play(this);
    }
    stop(){
        //audioPlayer.stop(this);
    }
    pause(){
        throw 'not implemented'
    }
    setGain(val,time,easeFnName){
        //audioPlayer.setGain(this,val,time,easeFnName);
    }
}