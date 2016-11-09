
var TweenMovie = require('tweenMovie').TweenMovie;
var Tween = require('tween').Tween;
var sceneManager = require('sceneManager').instance();

var _TweenChain = function(){
    var timeOffset = 0;
    var tweenMovie = new TweenMovie();


    this.tween = function(obj,prop,fromVal,toVal,tweenTime,easeFnName){
        var tween = new Tween(obj,prop,fromVal,toVal,tweenTime,easeFnName);
        tweenMovie.add(timeOffset,tween);
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
        var scene = sceneManager.getCurrScene();
        scene._tweenMovies.push(tweenMovie);
    };
};

var TweenChain = {
    create: function(){
        return new _TweenChain();
    }
};


exports.TweenChain = TweenChain;