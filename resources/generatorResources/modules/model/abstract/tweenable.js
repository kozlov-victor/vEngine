
const BaseModel = require('baseModel');
const Tween = require('tween');
const TweenMovie = require('tweenMovie');

const Tweenable = BaseModel.extend({
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