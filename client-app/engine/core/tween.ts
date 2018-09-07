
import * as mathEx from './mathEx'
import {_global} from "./global";

interface KeyVal {
    [key:string]:any
}

interface ValByPathObj {
    targetObj: any,
    targetKey:string
}

let accessByPath = (obj:KeyVal,path:string):ValByPathObj=>{
    let pathArr:string[] = path.split('.');
    if (pathArr.length===1) return {targetObj:obj,targetKey:path};
    let lastPath:string = pathArr.pop();
    pathArr.forEach(p=>{
        obj = obj[p];
    });
    return {targetObj:obj,targetKey:lastPath};
};

let setValByPath = (obj:KeyVal,path:string,val:number)=>{
    let {targetObj,targetKey}:ValByPathObj = accessByPath(obj,path);
    targetObj[targetKey] = val;
};

let getValByPath = (obj:KeyVal,path:string):number=>{
    let {targetObj,targetKey}:ValByPathObj = accessByPath(obj,path);
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
    from:KeyVal,
    to:KeyVal
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

    reuse(newTweenDesc:TweenDescription):void{
        this.startedTime = this.currTime;
        this.completed = false;

        Object.keys(newTweenDesc).forEach(key=>{
            (this.desc as any)[key] = (newTweenDesc as any)[key];
        });
        this.desc = this.normalizeDesc(newTweenDesc);
    }

    normalizeDesc(tweenDesc:TweenDescription):TweenDescriptionNormalized{
        tweenDesc.from = tweenDesc.from || {};
        tweenDesc.to = tweenDesc.to || {};
        let allPropsMap:KeyVal = {};
        Object.keys(tweenDesc.from).forEach(keyFrom=>{
            allPropsMap[keyFrom] = true;
        });
        Object.keys(tweenDesc.to).forEach(keyTo=>{
            allPropsMap[keyTo] = true;
        });
        this.propsToChange = Object.keys(allPropsMap);
        this.propsToChange.forEach((prp:string)=>{
            if (tweenDesc.from[prp]===undefined) tweenDesc.from[prp] = getValByPath(this.target,prp);
            if (tweenDesc.to[prp]===undefined) tweenDesc.to[prp] = getValByPath(this.target,prp);
        });
        return tweenDesc as TweenDescriptionNormalized;
    };


    update(time:number){
        if (this.completed) return;
        this.currTime = time;
        if (!this.startedTime) this.startedTime = time;
        let curTweenTime:number = time - this.startedTime;
        if (curTweenTime>this.tweenTime) {
            this._complete();
            return;
        }
        let l:number = this.propsToChange.length;
        while(l--){
            let prp:string = this.propsToChange[l];
            let valFrom:number = this.desc.from[prp] as number;
            let valTo:number = this.desc.to[prp] as number;
            let fn:Function = mathEx[this.easeFnName] as Function;
            let valCurr:number = <number>fn(
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