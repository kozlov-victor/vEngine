import {IAudioContext} from "./context/iAudioContext";
import {AudioNode} from "./audioNode";
import {Sound} from "../../model/impl/sound";

interface Clazz<T> { // todo extract to separate file
    new() : T;
}

export class AudioNodeSet {

    nodes:AudioNode[] = [] as AudioNode[];

    constructor(private ContextClass:Clazz<IAudioContext>,private numOfNodes:number){
        for (let i = 0;i<numOfNodes;i++) {
            this.nodes.push(new AudioNode(new ContextClass()));
        }
    }

    getFreeNode():AudioNode|null{
        for (let i = 0;i<this.numOfNodes;i++) {
            if (this.nodes[i].isFree()) return this.nodes[i];
        }
        return null;
    }

    stopAll(){
        for (let i = 0;i<this.numOfNodes;i++) {
            this.nodes[i].stop();
        }
    }

    pauseAll(){
        for (let i = 0;i<this.numOfNodes;i++) {
            this.nodes[i].pause();
        }
    }

    resumeAll(){
        for (let i = 0;i<this.numOfNodes;i++) {
            this.nodes[i].resume();
        }
    }



    getNodeBySound(sound:Sound):AudioNode|null{
        for (let i = 0;i<this.numOfNodes;i++) {
            if (this.nodes[i].getCurrSound()==sound) return this.nodes[i];
        }
        return null;
    }

}