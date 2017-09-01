
import mathEx from './mathEx'

export default class Tween{

    constructor(obj,fromToVal,tweenTime,easeFnName = 'linear'){
        this.obj = obj;
        this.propsToChange = [];
        this.startedTime = null;
        this.progressFn = null;
        this.easeFnName = easeFnName;
        this.completed = false;
        this.tweenTime = tweenTime;
        this.fromToVal = this.normalizeFromTo(fromToVal);
    }

    normalizeFromTo(fromToVal){
        fromToVal.from = fromToVal.from || {};
        fromToVal.to = fromToVal.to || {};
        let allPropsMap = {};
        Object.keys(fromToVal.from).forEach(keyFrom=>{
            allPropsMap[keyFrom] = true;
        });
        Object.keys(fromToVal.to).forEach(keyTo=>{
            allPropsMap[keyTo] = true;
        });
        this.propsToChange = Object.keys(allPropsMap);
        this.propsToChange.forEach(prp=>{
            if (fromToVal.from[prp]===undefined) fromToVal.from[prp] = this.obj[prp];
            if (fromToVal.to[prp]===undefined) fromToVal.to[prp] = this.obj[prp];
        });
        return fromToVal;
    };


    update(time){
        if (!this.startedTime) this.startedTime = time;
        if (this.completed) return;
        let delta = time - this.startedTime;
        if (delta>this.tweenTime) {
            this._complete();
            return;
        }
        let l = this.propsToChange.length;
        while(l--){
            let prp = this.propsToChange[l];
            this.obj[prp] = mathEx.ease[this.easeFnName](
                delta,
                this.fromToVal.from[prp],
                this.fromToVal.to[prp] - this.fromToVal.from[prp],
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
            this.obj[prp] = this.fromToVal.to[prp];
        }
        this.progressFn && this.progressFn(this.obj);
        this.completed = true;
    };

}