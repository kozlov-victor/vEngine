
import BaseModel from '../baseModel'
import Game from "../../core/game";

export default class Sound extends BaseModel {

    type:string = 'Sound';
    resourcePath:string = '';
    _gain:number = 1;
    _loop:boolean =false;

    constructor(game:Game){
        super(game);
    }

    static find(name:string){
        // let res = bundle.soundList.find({name:name});
        // //<code>{{#if opts.minify}}
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
    setGain(val:number,time:number,easeFnName:string){
        //audioPlayer.setGain(this,val,time,easeFnName);
    }
}