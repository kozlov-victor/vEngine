
var BaseModel = require('baseModel').BaseModel;
var Tween = require('tween').Tween;
var TweenMovie = require('tweenMovie').TweenMovie;

exports.Tweenable = BaseModel.extend({
    global: false,
    tween: function(objOrTween,fromToVal,tweenTime,easeFnName){
        var movie = new TweenMovie();
        var tween;
        if (objOrTween instanceof Tween) tween = objOrTween;
        else tween = new Tween(objOrTween,fromToVal,tweenTime,easeFnName);
        movie.tween(0,tween);
        movie.play(this.global);
    }
});