

var Tween = function(obj,fromToVal,tweenTime,easeFnName){
    var startedTime = null;
    var progressFn;

    var propsToChange = [];
    easeFnName = easeFnName || 'linear';
    this.completed = false;
    var mathEx = require('mathEx');
    this.tweenTime = tweenTime;

    var normalizeFromTo = function(fromToVal){
        fromToVal.from = fromToVal.from || {};
        fromToVal.to = fromToVal.to || {};
        var allPropsMap = {};
        Object.keys(fromToVal.from).forEach(function(keyFrom){
            allPropsMap[keyFrom] = true;
        });
        Object.keys(fromToVal.to).forEach(function(keyTo){
            allPropsMap[keyTo] = true;
        });
        propsToChange = Object.keys(allPropsMap);
        propsToChange.forEach(function(prp){
            if (fromToVal.from[prp]===undefined) fromToVal.from[prp] = obj[prp];
            if (fromToVal.top[prp]===undefined) fromToVal.from[prp] = obj[prp];
        });
        return fromToVal;
    };

    (function(){
        fromToVal = normalizeFromTo(fromToVal);
    })();



    this._update = function(time){
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
            obj[prp] = mathEx.ease[easeFnName](delta,fromToVal.from[prp],fromToVal.to[prp] - fromToVal.from[prp],tweenTime);
        }
        progressFn && progressFn(obj);

    };

    this.progress = function(_progressFn){
        progressFn = _progressFn;
    };

    this.reset = function() {
        startedTime = null;
        this.completed = false;
    };

    this._complete = function(){
        if (this.completed) return;
        var l = propsToChange.length;
        while(l--){
            var prp = propsToChange[l];
            obj[prp] = fromToVal.to[prp];
        }
        progressFn && progressFn(obj);
        this.completed = true;
    };


};

module.exports = Tween;
