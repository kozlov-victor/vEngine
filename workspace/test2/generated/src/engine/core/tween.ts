
import * as mathEx from './mathEx'
import {_global} from "./global";

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

let getValByPath = (obj,path)=>{
    let {targetObj,targetKey} = accessByPath(obj,path);
    return targetObj[targetKey];
};

export interface TweenDescription {
    target:any,
    progress?:Function,
    complete?:Function,
    ease?:string,
    time:number,
    from?:{[key:string]:number},
    to?:{[key:string]:number}
}

export interface TweenDescriptionNormalized extends TweenDescription{
    ease:string,
    from:{[key:string]:number},
    to:{[key:string]:number}
}

export class Tween {

    private propsToChange:Array<any> = [];
    private startedTime:number = 0;
    private currTime:number = 0;
    private completed:boolean = false;
    private target: any;
    private progressFn:Function|undefined;
    private completeFn: Function|undefined;
    private easeFnName:string;
    private tweenTime: number;
    private desc:TweenDescriptionNormalized;

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
    constructor(tweenDesc:TweenDescription){
        this.target = tweenDesc.target;
        this.progressFn = tweenDesc.progress;
        this.completeFn = tweenDesc.complete;
        this.easeFnName = tweenDesc.ease || 'linear';
        this.tweenTime = tweenDesc.time || 1000;
        this.desc = this.normalizeDesc(tweenDesc);
    }

    reuse(newTweenDesc):void{
        this.startedTime = this.currTime;
        this.completed = false;

        Object.keys(newTweenDesc).forEach(key=>{
            this.desc[key] = newTweenDesc[key];
        });
        this.desc = this.normalizeDesc(newTweenDesc);
    }

    normalizeDesc(tweenDesc):TweenDescriptionNormalized{
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
            if (tweenDesc.from[prp]===undefined) tweenDesc.from[prp] = getValByPath(this.target,prp);
            if (tweenDesc.to[prp]===undefined) tweenDesc.to[prp] = getValByPath(this.target,prp);
        });
        return tweenDesc;
    };


    update(time:number){
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
            setValByPath(this.target,prp,valCurr);
        }
        this.progressFn && this.progressFn(this.target);

    };

    private progress(_progressFn:(val:number)=>void){
        this.progressFn = _progressFn;
    };

    private reset() {
        this.startedTime = null;
        this.completed = false;
    };

    private _complete(){
        if (this.completed) return;
        let l = this.propsToChange.length;
        while(l--){
            let prp = this.propsToChange[l];
            let valCurr = this.desc.to[prp];
            setValByPath(this.target,prp,valCurr);
        }
        this.progressFn && this.progressFn(this.target);
        this.completeFn && this.completeFn(this.target);
        this.completed = true;
    };

    public isCompleted():boolean{
        return this.completed;
    }

    public getTarget():any{
        return this.target;
    }

}

_global['Tween'] = Tween;