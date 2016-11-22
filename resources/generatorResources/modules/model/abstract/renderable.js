
var tweenModule = require('tween');
var tweenMovieModule = require('tweenMovie');

var BaseModel = require('baseModel').BaseModel;

exports.Renderable = BaseModel.extend({
    type:'renderable',
    alpha:1,
    width:0,
    height:0,
    fadeIn:function(time,easeFnName){
        return this.tween(this,{to:{alpha:1}},time,easeFnName);
    },
    fadeOut:function(time,easeFnName){
        return this.tween(this,{to:{alpha:0}},time,easeFnName);
    },
    tween: function(obj,fromToVal,tweenTime,easeFnName){
        var movie = new tweenMovieModule.TweenMovie();
        var tween = new tweenModule.Tween(obj,fromToVal,tweenTime,easeFnName);
        movie.tween(0,tween);
        movie.play();
    }
});