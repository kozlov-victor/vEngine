import {WebAudioContext} from "./context/webAudioContext";
import {HtmlAudioContext} from "./context/htmlAudioContext";
import {FakeAudioContext} from "./context/fakeAudioContext";
import {AudioNodeSet} from "./audioNodeSet";
import {IAudioContext} from "./context/iAudioContext";
import {Sound} from "../../model/impl/sound";
import {AudioNode} from "./audioNode";
import {Tween} from "../tween";
import {ArrayEx} from "../../declarations";
import {Game} from "../game";
import {DebugError} from "../../debugError";

declare const DEBUG:boolean;

interface Clazz<T> { // todo extract to separate file
    new(game: Game) : T;
}


export  class AudioPlayer {

    private readonly contextClass:Clazz<IAudioContext>;
    private audioNodeSet:AudioNodeSet;
    private tweens:ArrayEx<Tween> = [] as ArrayEx<Tween>;

    static cache:{[key:string]:any} = {};

    constructor(private game:Game){
        if (WebAudioContext.isAcceptable()) {
            this.contextClass = WebAudioContext;
        } else if (HtmlAudioContext.isAcceptable()) {
            this.contextClass = HtmlAudioContext;
        } else {
            this.contextClass = FakeAudioContext;
        }
        this.audioNodeSet = new AudioNodeSet(game,this.contextClass,6);
        throw new DebugError('test error')
    }

    loadSound(url:string, progress:Function, callback:Function) {
        new this.contextClass(this.game).load(url,progress,callback); //todo
    }

    play(soundName:string,loop:boolean = false){
        let node:AudioNode = this.audioNodeSet.getFreeNode();
        if (DEBUG && !node) {
            console.log('no free node to play sound');
        }
        if (!node) return;
        let sound:Sound = this.game.repository.getArray('Sound').find(it=>it.name==soundName);
        if (DEBUG && !sound) throw new DebugError(`can not find sound with name ${soundName}`);
        node.play(sound.resourcePath,loop);
    }

    stop(sound){
        let node:AudioNode = this.audioNodeSet.getNodeBySound(sound);
        if (!node) return;
        node.stop();
    }

    stopAll(){
        this.audioNodeSet.stopAll();
    }

    pauseAll(){
        this.audioNodeSet.pauseAll();
    }

    resumeAll(){
        this.audioNodeSet.resumeAll();
    }

    setGain(sound:Sound,val:number,time:number = 0){
        let node:AudioNode = this.audioNodeSet.getNodeBySound(sound);
        if (!node) return;
        if (time) {
            let tween:Tween = new Tween({
                target: sound,
                to: {_gain:val},
                time,
                progress:(progressObj)=>{
                    node.setGain(progressObj._gain);
                },
                complete: ()=>{
                    this.tweens.remove(tween);
                }
            });
            this.tweens.push(tween);

        } else {
            sound._gain = val;
            node.setGain(sound._gain);
        }
    }

    update(time:number,delta:number){
        this.tweens.forEach((t:Tween)=>{
            t.update(time);
        })
    }

}