
export class Timer {

    private lastTime:number = 0;
    private callback:Function;
    private interval:number;

    constructor(callback:Function,interval:number){
        this.interval = interval;
        this.callback = callback;
    }

    onUpdate(time){
        if (!this.lastTime) this.lastTime = time;
        let delta:number = time - this.lastTime;
        if (delta !==0 && delta>this.interval) {
            this.lastTime = time;
            this.callback();
        }
    }

}