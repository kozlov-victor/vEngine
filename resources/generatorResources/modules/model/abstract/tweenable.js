
var BaseModel = require('baseModel').BaseModel;
var tweenModule = require('tween');
var tweenMovieModule = require('tweenMovie');

exports.Tweenable = BaseModel.extend({
    tween: function(obj,fromToVal,tweenTime,easeFnName){
        var movie = new tweenMovieModule.TweenMovie();
        var tween = new tweenModule.Tween(obj,fromToVal,tweenTime,easeFnName);
        movie.tween(0,tween);
        movie.play();
    }
});