// https://github.com/taylorhakes/promise-polyfill/blob/master/promise.js
var Promise = require('promise').Promise;

exports.Tween = function(obj,prop,fromVal,toVal,tweenTime,easeFnName){
    var startedTime = null;
    var resolver;
    var promise = new Promise(function(resolve){
        resolver = resolve;
    });
    var propIsArray = !!prop.splice;
    easeFnName = easeFnName || 'linear';
    this.completed = false;
    var mathEx = require('mathEx');
    this.tweenTime = tweenTime;

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
        if (propIsArray) {
            var l = prop.length;
            while(l--){
                var prp = prop[l];
                obj[prp] = mathEx.ease[easeFnName](delta,fromVal[prp],toVal[prp] - fromVal[prp],tweenTime);
                console.log(prp,fromVal);
            }
        } else {
            obj[prop] = mathEx.ease[easeFnName](delta,fromVal,toVal - fromVal,tweenTime);
        }

    };

    this.reset = function() {
        startedTime = null;
        this.completed = false;
    };

    this.complete = function(){
        if (this.completed) return;
        if (propIsArray) {
            var l = prop.length;
            while(l--){
                var prp = prop[l];
                obj[prp] = toVal[prp];
            }
        } else {
            obj[prop] = toVal;
        }
        this.completed = true;
        resolver();
    }


};