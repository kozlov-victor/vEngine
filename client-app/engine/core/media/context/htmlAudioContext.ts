import {IAudioContext} from "./iAudioContext";
import {AudioPlayer} from "../audioPlayer";

declare const EMBED_RESOURCES:boolean;
declare const DEBUG:boolean;

interface Clazz<T> { // todo extract to separate file
    new() : T;
}

class CtxHolder {
    static getCtx():HTMLAudioElement{
        let Ctx:Clazz<HTMLAudioElement> = window && (window as any).Audio;
        return new Ctx();
    };

}


export class HtmlAudioContext implements IAudioContext{
    readonly type: string = 'htmlAudioContext';
    private free: boolean = true;
    private _ctx: HTMLAudioElement;

    static isAcceptable():boolean{
        return false;//!!(window && (window as any).Audio);
    }
    load(url:string,progress:Function,callBack:Function){
        callBack();
    }

    constructor() {
        this._ctx = CtxHolder.getCtx();
    }

    isFree(): boolean {
        return this.free;
    }

    play(resourcePath:string, loop: boolean) {
        this.free = false;
        this._ctx.src = resourcePath;
        this._ctx.play();
        this._ctx.loop = loop;
        this._ctx.onended = () => {
            this.stop();
        }
    }

    stop() {
        this.free = true;
    }

    setGain(val: number) {
        this._ctx.volume = val;
    }

    pause() {
        this._ctx.pause();
    }

    resume() {
        if (DEBUG) throw "not implemented for now"
    }


}
