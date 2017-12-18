
import mathEx from './mathEx'

export default class Tween {

    propsToChange = [];
    startedTime = null;
    currTime = null;
    completed = false;

    /**
     * @param tweenDesc
     * target: obj,
     * from: object with props,
     * to: object with props,
     * progress: fn,
     * complete: fn,
     * ease: str ease fn name,
     * time: tween time
     */
    constructor(tweenDesc){
        this.obj = tweenDesc.target;
        this.progressFn = tweenDesc.progress;
        this.completeFn = tweenDesc.complete;
        this.easeFnName = tweenDesc.ease || 'linear';
        this.tweenTime = tweenDesc.time || 1000;
        this.desc = this.normalizeDesc(tweenDesc);
        this.justReused = false;
    }

    reuse(newTweenDesc){
        //if ((this.currTime - this.startedTime)>this.tweenTime) {
            this.startedTime = this.currTime;
            this.completed = false;
        //}
        Object.keys(newTweenDesc).forEach(key=>{
            this.desc[key] = newTweenDesc[key];
        });
        this.desc = this.normalizeDesc(newTweenDesc);
    }

    normalizeDesc(tweenDesc){
        tweenDesc.from = tweenDesc.from || {};
        tweenDesc.to = tweenDesc.to || {};
        let allPropsMap = {};
        Object.keys(tweenDesc.from).forEach(keyFrom=>{
            allPropsMap[keyFrom] = true;
        });
        Object.keys(tweenDesc.to).forEach(keyTo=>{
            allPropsMap[keyTo] = true;
        });
        this.propsToChange = Object.keys(allPropsMap);
        this.propsToChange.forEach(prp=>{
            if (tweenDesc.from[prp]===undefined) tweenDesc.from[prp] = this.obj[prp];
            if (tweenDesc.to[prp]===undefined) tweenDesc.to[prp] = this.obj[prp];
        });
        return tweenDesc;
    };


    update(time){
        if (this.completed) return;
        this.currTime = time;
        if (!this.startedTime) this.startedTime = time;
        let curTweenTime = time - this.startedTime;
        window.game.renderer.log(`updated ${curTweenTime}`);
        window.game.renderer.log(`test log1`);
        if (curTweenTime>this.tweenTime) {
            this._complete();
            return;
        }
        let l = this.propsToChange.length;
        while(l--){
            let prp = this.propsToChange[l];
            this.obj[prp] = mathEx.ease[this.easeFnName](
                curTweenTime,
                this.desc.from[prp],
                this.desc.to[prp] - this.desc.from[prp],
                this.tweenTime);
        }
        this.progressFn && this.progressFn(this.obj);

    };

    progress(_progressFn){
        this.progressFn = _progressFn;
    };

    reset() {
        this.startedTime = null;
        this.completed = false;
    };

    _complete(){
        if (this.completed) return;
        let l = this.propsToChange.length;
        while(l--){
            let prp = this.propsToChange[l];
            this.obj[prp] = this.desc.to[prp];
        }
        this.progressFn && this.progressFn(this.obj);
        this.completeFn && this.completeFn(this.obj);
        this.completed = true;
    };

}