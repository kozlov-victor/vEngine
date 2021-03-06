

import {Easing} from "../core/easing";

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

    private _propsToChange:Array<any> = [];
    private _startedTime:number = 0;
    private _currTime:number = 0;
    private _completed:boolean = false;
    private _target: any;
    private _progressFn:Function|undefined;
    private _completeFn: Function|undefined;
    private _easeFnName:string;
    private _tweenTime: number;
    private _desc:TweenDescriptionNormalized;

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
        this._target = tweenDesc.target;
        this._progressFn = tweenDesc.progress;
        this._completeFn = tweenDesc.complete;
        this._easeFnName = tweenDesc.ease || 'linear';
        this._tweenTime = tweenDesc.time || 1000;
        this._desc = this.normalizeDesc(tweenDesc);
    }

    reuse(newTweenDesc:TweenDescription):void{
        this._startedTime = this._currTime;
        this._completed = false;

        Object.keys(newTweenDesc).forEach(key=>{
            (this._desc as any)[key] = (newTweenDesc as any)[key];
        });
        this._desc = this.normalizeDesc(newTweenDesc);
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
        this._propsToChange = Object.keys(allPropsMap);
        this._propsToChange.forEach((prp:string)=>{
            if (tweenDesc.from[prp]===undefined) tweenDesc.from[prp] = getValByPath(this._target,prp);
            if (tweenDesc.to[prp]===undefined) tweenDesc.to[prp] = getValByPath(this._target,prp);
        });
        return tweenDesc as TweenDescriptionNormalized;
    }


    update(currTime:number){
        if (this._completed) return;
        this._currTime = currTime;
        if (!this._startedTime) this._startedTime = currTime;
        let curTweenTime:number = currTime - this._startedTime;
        if (curTweenTime>this._tweenTime) {
            this.complete();
            return;
        }
        let l:number = this._propsToChange.length;
        while(l--){
            let prp:string = this._propsToChange[l];
            let valFrom:number = this._desc.from[prp] as number;
            let valTo:number = this._desc.to[prp] as number;
            let fn:Function = Easing[this._easeFnName] as Function;
            let valCurr:number = <number>fn(
                curTweenTime,
                valFrom,
                valTo - valFrom,
                this._tweenTime);
            setValByPath(this._target,prp,valCurr);
        }
        this._progressFn && this._progressFn(this._target);

    }

    private progress(_progressFn:(val:number)=>void){
        this._progressFn = _progressFn;
    }

    reset() {
        this._startedTime = null;
        this._completed = false;
    }

    complete(){
        if (this._completed) return;
        let l = this._propsToChange.length;
        while(l--){
            let prp = this._propsToChange[l];
            let valCurr = this._desc.to[prp];
            setValByPath(this._target,prp,valCurr);
        }
        this._progressFn && this._progressFn(this._target);
        this._completeFn && this._completeFn(this._target);
        this._completed = true;
    }

    public isCompleted():boolean{
        return this._completed;
    }

    public getTarget():any{
        return this._target;
    }

    public getTweenTime():number{
        return this._tweenTime;
    }

}
