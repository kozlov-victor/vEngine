
export interface IAudioContext {
    type:string,
    play(resourcePath:string,loop:boolean),
    stop(),
    isFree():boolean,
    setGain(val:number),
    pause(),
    resume(),
    load(url:string,progress:Function,callBack:Function)
}