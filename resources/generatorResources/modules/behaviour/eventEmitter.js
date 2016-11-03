

var EventEmitter = function(){

    var events = {};

    var _on = function(name,callBack){
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
        var es = events[eventName];
        if (!es) return;
        var l = es.length;
        while(l--){
           es[l](data);
        }
    };
};

exports.EventEmitter = EventEmitter;