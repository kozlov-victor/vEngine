
declare const DEBUG:boolean;

export class EventEmitter{

    private events:{[name:string]:Array<Function>} = {};

    constructor(){

    }

    private _on(name:string,callBack:Function){
        this.events[name] = this.events[name] || [];
        this.events[name].push(callBack);
    }

    on(eventNameOrList:string|Array<string>,callBack:Function){
        if (typeof  eventNameOrList === 'string') {
            this._on(eventNameOrList,callBack);
        } else if (eventNameOrList.splice) {
            eventNameOrList.forEach((eventName:string)=>{
                this._on(eventName,callBack);
            });
        }

    };

    off(eventName:string,callback){
        let es = this.events[eventName];
        if (!es) return;
        let index = es.indexOf(callback);
        if (DEBUG && index==-1) {
            console.error(callback);
            throw `can not remove event listener ${eventName}`;
        }
        es.splice(index,1);
    };

    trigger(eventName:string,data:any){
        let es = this.events[eventName];
        if (!es) return;
        let l = es.length;
        while(l--){
            es[l](data);
        }
    };
}