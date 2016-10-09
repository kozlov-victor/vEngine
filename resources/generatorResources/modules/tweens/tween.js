
exports.Tween = function(obj,prop,fromVal,toVal,tweenTime,easeFnName){
    var startedTime = null;
    easeFnName = easeFnName || 'linear';
    this.completed = false;
    var math = require('math');
    this.tweenTime = tweenTime;

    this.update = function(time){
        if (!startedTime) startedTime = time;
        if (this.completed) return;
        var delta = time - startedTime;
        if (delta>tweenTime) {
            this.complete();
            return;
        }
        obj[prop] = math.ease[easeFnName](delta,fromVal,toVal - fromVal,tweenTime);
    };

    this.reset = function() {
        startedTime = null;
        this.completed = false;
    };

    this.complete = function(){
        if (this.completed) return;
        obj[prop] = toVal;
        this.completed = true;
    }


};