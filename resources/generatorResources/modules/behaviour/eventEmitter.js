

var EventEmitter = function(){

    var events = {};

    this.on = function(eventName,callBack){
        events[eventName] = events[eventName] || [];
        events[eventName].push(callBack);
    };

    this.trigger = function(eventName,data){
        var es = events[eventName];
        if (!es) return;
        es.forEach(function(e){
            e(data);
        });
    };
};

exports.EventEmitter = EventEmitter;