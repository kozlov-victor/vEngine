
const TweenMovie = require('tweenMovie');
const Tween = require('tween');

const TweenChain = function(){
    let timeOffset = 0;
    let tweenMovie = new TweenMovie();


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
        tweenMovie._loop(val);
        return this;
    };

    this.finish = function(fn){
        tweenMovie._onComplete = fn;
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

module.exports = TweenChain;
