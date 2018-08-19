import {IAudioContext} from "./iAudioContext";

declare const DEBUG:boolean;

export class FakeAudioContext implements IAudioContext{

    type:string = 'fakeAudioContext';

    static isAcceptable():boolean{return true}
    constructor(){DEBUG && console.log('audio not supported')}

    play(resourcePath:string,loop:boolean){}
    stop(){}
    isFree(){return false}
    setGain(val:number){}
    pause(){}
    resume(){}
    load(url:string,progress:Function,callBack:Function){
        callBack();
    }

}

