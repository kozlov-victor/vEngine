
const game = require('game');
const Tween = require('tween');

const TweenMovie = function(){
    let tweens = [];
    let startedTime = null;
    this.completed = false;
    this._onComplete = null;
    let loop = false;

    this.tween = function(startTime,obj,fromToVal,tweenTime,easeFnName){
        let tween;
        if (obj instanceof Tween) tween = obj;
        else tween = new Tween(obj,fromToVal,tweenTime,easeFnName);
        tweens.push({
            startTime: startTime,
            tween: tween
        });
        return this;
    };

    this._loop = function(val) {
        loop = val;
        return this;
    };

    this.finish = function(fn){
        this._onComplete = fn;
        return this;
    };

    this.play = function(isGlobal){
        if (isGlobal) {
            game.addTweenMovie(this);
        } else {
            let scene = game.getCurrScene();
            scene.addTweenMovie(this);
        }
    };

    this._update = function(time){
        if (this.completed) return;
        if (!startedTime) startedTime = time;
        let deltaTime = time - startedTime;
        let allCompleted = true;
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
                this._onComplete && this._onComplete();
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


module.exports = TweenMovie;