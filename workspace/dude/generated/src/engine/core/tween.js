
import * as mathEx from './mathEx'

let accessByPath = (obj,path)=>{
    let pathArr = path.split('.');
    if (pathArr.length===1) return {targetObj:obj,targetKey:path};
    let lastPath = pathArr.pop();
    pathArr.forEach(p=>{
        obj = obj[p];
    });
    return {targetObj:obj,targetKey:lastPath};
};

let setValByPath = (obj,path,val)=>{
    let {targetObj,targetKey} = accessByPath(obj,path);
    targetObj[targetKey] = val;
};

let getValByPath = (obj,path,val)=>{
    let {targetObj,targetKey} = accessByPath(obj,path);
    return targetObj[targetKey];
};

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
    }

    reuse(newTweenDesc){
        this.startedTime = this.currTime;
        this.completed = false;

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
            if (tweenDesc.from[prp]===undefined) tweenDesc.from[prp] = getValByPath(this.obj,prp);
            if (tweenDesc.to[prp]===undefined) tweenDesc.to[prp] = getValByPath(this.obj,prp);
        });
        return tweenDesc;
    };


    update(time){
        if (this.completed) return;
        this.currTime = time;
        if (!this.startedTime) this.startedTime = time;
        let curTweenTime = time - this.startedTime;
        if (curTweenTime>this.tweenTime) {
            this._complete();
            return;
        }
        let l = this.propsToChange.length;
        while(l--){
            let prp = this.propsToChange[l];
            let valFrom = this.desc.from[prp];
            let valTo = this.desc.to[prp];
            let valCurr = mathEx[this.easeFnName](
                curTweenTime,
                valFrom,
                valTo - valFrom,
                this.tweenTime);
            setValByPath(this.obj,prp,valCurr);
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
            let valCurr = this.desc.to[prp];
            setValByPath(this.obj,prp,valCurr);
        }
        this.progressFn && this.progressFn(this.obj);
        this.completeFn && this.completeFn(this.obj);
        this.completed = true;
    };

}