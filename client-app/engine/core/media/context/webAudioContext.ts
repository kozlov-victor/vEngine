import {DebugError} from "../../../debugError";
import {IAudioContext} from "./iAudioContext";
import {LoaderUtil} from "../../loaderUtil";
import {AudioPlayer} from "../audioPlayer";
import {Game} from "../../game";

declare const EMBED_RESOURCES:boolean;
declare const DEBUG:boolean;

interface Clazz<T> {
    new() : T;
}

class CtxHolder {
    private static ctx:Clazz<AudioContext> = (window as any).AudioContext;
    private static res:AudioContext = null;

    static getCtx():AudioContext{
        if (CtxHolder.ctx && !CtxHolder.res) CtxHolder.res = new CtxHolder.ctx();
        return CtxHolder.res;
    }
}

const decode =(buffer:ArrayBuffer,callback:Function)=>{
    CtxHolder.getCtx().decodeAudioData(
        buffer,
        function(decoded) {
            callback(decoded);
        },
        function(err){
            if (DEBUG) throw new DebugError(err.message);
        }
    );
};

const base64ToArrayBuffer = (base64:string):ArrayBuffer=> {
    var binary_string =  window.atob(base64);
    var len = binary_string.length;
    var bytes = new Uint8Array(len);
    for (var i = 0; i < len; i++) {
        bytes[i] = binary_string.charCodeAt(i);
    }
    return bytes.buffer;
};

export class WebAudioContext implements IAudioContext {

    static isAcceptable() {
        return false;//!!(window && CtxHolder.getCtx());
    }

    load(url:string, progress:Function, callBack:Function) {
        if (EMBED_RESOURCES) {
            let base64Url = this.game.repository.embeddedResources[url];
            if (DEBUG && !base64Url) throw new DebugError(`no embedded resource provided by url ${url}`);
            base64Url = base64Url.split(',')[1];
            // data:[<MIME-type>][;charset=<encoding>][;base64]
            let buffer:ArrayBuffer = base64ToArrayBuffer(base64Url);
            decode(buffer, (decoded)=>{
                AudioPlayer.cache[url] = decoded;
                callBack();
            });
        } else {
            LoaderUtil.loadBinary(url, progress,  (buffer:ArrayBuffer)=> {
                decode(buffer, (decoded)=>{
                    AudioPlayer.cache[url] = decoded;
                    callBack();
                });
            });
        }

    }

    constructor(private game:Game) {
        this._ctx = CtxHolder.getCtx();
        this._gainNode = this._ctx.createGain();
        this._gainNode.connect(this._ctx.destination);
    }

    readonly type: string = 'webAudioContext';
    _ctx: AudioContext = null;
    _currSource: AudioBufferSourceNode = null;
    _gainNode: GainNode = null;
    _free: boolean = true;

    isFree(): boolean {
        return this._free;
    }

    play(resourcePath:string, loop:boolean) {
        this._free = false;
        let currSource:AudioBufferSourceNode = this._ctx.createBufferSource();
        currSource.buffer = AudioPlayer.cache[resourcePath];
        currSource.loop = loop;
        currSource.connect(this._gainNode);
        currSource.start(0);
        currSource.onended = ()=> {
            this.stop();
        };
        this._currSource = currSource;
    }

    stop() {
        let currSource = this._currSource;
        if (currSource) {
            currSource.stop();
            currSource.disconnect(this._gainNode);
        }
        this._currSource = null;
        this._free = true;
    }

    setGain(val) {
        this._gainNode.gain.value = val;

    }

    pause() {
        this._ctx.suspend();
    }

    resume() {
        this._ctx.resume();
    }
}
