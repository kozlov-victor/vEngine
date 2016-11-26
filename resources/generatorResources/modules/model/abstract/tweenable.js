
var BaseModel = require('baseModel').BaseModel;
var Tween = require('tween').Tween;
var TweenMovie = require('tweenMovie').TweenMovie;

exports.Tweenable = BaseModel.extend({
    tween: function(objOrTween,fromToVal,tweenTime,easeFnName){
        var movie = new TweenMovie();
        var tween;
        console.log();
        if (objOrTween instanceof Tween) tween = objOrTween;
        else tween = new Tween(objOrTween,fromToVal,tweenTime,easeFnName);
        movie.tween(0,tween);
        movie.play();
    }
});