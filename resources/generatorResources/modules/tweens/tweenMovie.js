
var game = require('game');
var Tween = require('tween').Tween;

exports.TweenMovie = function(){
    var tweens = [];
    var startedTime = null;
    this.completed = false;
    this.onComplete = null;
    var loop = false;

    this.tween = function(startTime,obj,fromToVal,tweenTime,easeFnName){
        var tween;
        if (obj instanceof Tween) tween = obj;
        else tween = new Tween(obj,fromToVal,tweenTime,easeFnName);
        tweens.push({
            startTime: startTime,
            tween: tween
        });
        return this;
    };

    this.loop = function(val) {
        loop = val;
        return this;
    };

    this.finish = function(fn){
        this.onComplete = fn;
        return this;
    };

    this.play = function(isGlobal){
        if (isGlobal) {
            game.addTweenMovie(this);
        } else {
            var scene = game.getCurrScene();
            scene.addTweenMovie(this);
        }
    };

    this._update = function(time){
        if (this.completed) return;
        if (!startedTime) startedTime = time;
        var deltaTime = time - startedTime;
        var allCompleted = true;
        tweens.forEach(function(item){
            if (deltaTime>item.startTime) {
                if (deltaTime<item.startTime+item.tween.tweenTime) {
                    item.tween._update(time);
                } else {
                    item.tween._complete();
                }
            }
            if (!item.tween.completed) allCompleted = false;
        });

        if (allCompleted) {
            if (loop) {
                this.reset();
            } else {
                this.completed = true;
                this.onComplete && this.onComplete();
            }
        }
    };

    this.reset = function() {
        startedTime = null;
        this.completed = false;
        tweens.forEach(function(item){
            item.tween.reset();
        });
        return this;
    }
};