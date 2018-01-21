
export default class EventEmitter{

    private events = {};

    constructor(){

    }

    private _on(name,callBack){
        this.events[name] = this.events[name] || [];
        this.events[name].push(callBack);
    }

    on(eventNameOrList,callBack){
        if (typeof  eventNameOrList === 'string') {
            this._on(eventNameOrList,callBack);
        } else if (eventNameOrList.splice) {
            eventNameOrList.forEach(function(eventName){
                this._on(eventName,callBack);
            });
        }

    };

    trigger(eventName,data){
        let es = this.events[eventName];
        if (!es) return;
        let l = es.length;
        while(l--){
            es[l](data);
        }
    };
};