// https://github.com/taylorhakes/promise-polyfill/blob/master/promise.js
var Promise = require('promise').Promise;

exports.Tween = function(obj,fromToVal,tweenTime,easeFnName){
    var startedTime = null;
    var resolver;
    var promise = new Promise(function(resolve){
        resolver = resolve;
    });
    var propsToChange = [];
    easeFnName = easeFnName || 'linear';
    this.completed = false;
    var mathEx = require('mathEx');
    this.tweenTime = tweenTime;

    var normalizeFromTo = function(){
        fromToVal.from = fromToVal.from || {};
        Object.keys(fromToVal.to).forEach(function(keyTo){
            propsToChange.push(keyTo);
        });
    };

    (function(){
        normalizeFromTo();
    })();

    this.getPromise = function(){
       return promise;
    };

    this.update = function(time){
        if (!startedTime) startedTime = time;
        if (this.completed) return;
        var delta = time - startedTime;
        if (delta>tweenTime) {
            this.complete();
            return;
        }
        var l = propsToChange.length;
        while(l--){
            var prp = propsToChange[l];
            if (fromToVal.from[prp] === undefined) fromToVal.from[prp] = obj[prp];
            obj[prp] = mathEx.ease[easeFnName](delta,fromToVal.from[prp],fromToVal.to[prp] - fromToVal.from[prp],tweenTime);
        }

    };

    this.reset = function() {
        startedTime = null;
        this.completed = false;
    };

    this.complete = function(){
        if (this.completed) return;
        var l = propsToChange.length;
        while(l--){
            var prp = propsToChange[l];
            obj[prp] = fromToVal.to[prp];
        }
        this.completed = true;
        resolver();
    }


};