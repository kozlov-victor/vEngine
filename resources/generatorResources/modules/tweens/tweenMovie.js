
var sceneManager = require('sceneManager').instance();

exports.TweenMovie = function(){
    var tweens = [];
    var startedTime = null;
    this.completed = false;
    this.onComplete = null;
    var loop = false;

    this.add = function(startTime,tween){
        tweens.push({
            startTime: startTime,
            tween: tween
        });
        return this;
    };

    this.loop = function(val) {
        loop = val;
    };

    this.play = function(){
        var scene = sceneManager.getCurrScene();
        scene._tweenMovies.push(this);
    };

    this.update = function(time){
        if (this.completed) return;
        if (!startedTime) startedTime = time;
        var deltaTime = time - startedTime;
        var allCompleted = true;
        tweens.forEach(function(item){
            if (deltaTime>item.startTime) {
                if (deltaTime<item.startTime+item.tween.tweenTime) {
                    item.tween.update(time);
                } else {
                    item.tween.complete();
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
    }
};