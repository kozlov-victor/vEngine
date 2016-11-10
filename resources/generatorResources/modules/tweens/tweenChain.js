
var TweenMovie = require('tweenMovie').TweenMovie;
var Tween = require('tween').Tween;
var sceneManager = require('sceneManager').instance();

exports.TweenChain = function(){
    var timeOffset = 0;
    var tweenMovie = new TweenMovie();


    this.tween = function(obj,fromToVal,tweenTime,easeFnName){
        tweenMovie.tween(timeOffset,obj,fromToVal,tweenTime,easeFnName);
        timeOffset+= tweenTime;
        return this;
    };

    this.wait = function(time){
        timeOffset+=time;
        return this;
    };

    this.loop = function(val){
        tweenMovie.loop(val);
        return this;
    };

    this.finish = function(fn){
        tweenMovie.onComplete = fn;
        return this;
    };

    this.reset = function(){
        tweenMovie.reset();
        timeOffset = 0;
        return this;
    };

    this.play = function(){
        tweenMovie.play();
    };
};
