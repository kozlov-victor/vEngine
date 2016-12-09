
var BaseModel = require('baseModel');
var Tween = require('tween');
var TweenMovie = require('tweenMovie');

var Tweenable = BaseModel.extend({
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

module.exports = Tweenable;