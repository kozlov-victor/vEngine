
import mathEx from './mathEx'

export default class Tween {

    propsToChange = [];
    startedTime = null;
    completed = false;

    constructor(tweenDesc,obj){
        this.obj = tweenDesc.target || obj;
        this.progressFn = tweenDesc.progress;
        this.completeFn = tweenDesc.complete;
        this.easeFnName = tweenDesc.ease || 'linear';
        this.tweenTime = tweenDesc.time || 1000;
        this.desc = this.normalizeDesc(tweenDesc);
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
        if (!this.startedTime) this.startedTime = time;
        if (this.completed) return;
        let curTweenTime = time - this.startedTime;
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