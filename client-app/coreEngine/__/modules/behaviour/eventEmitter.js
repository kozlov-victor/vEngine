

const EventEmitter = function(){

    let events = {};

    let _on = function(name,callBack){
        events[name] = events[name] || [];
        events[name].push(callBack);
    };

    this.on = function(eventNameOrList,callBack){
        if (typeof  eventNameOrList == 'string') {
            _on(eventNameOrList,callBack);
        } else if (eventNameOrList.splice) {
            eventNameOrList.forEach(function(eventName){
                _on(eventName,callBack);
            });
        }

    };

    this.trigger = function(eventName,data){
        let es = events[eventName];
        if (!es) return;
        let l = es.length;
        while(l--){
           es[l](data);
        }
    };
};

module.exports = EventEmitter;