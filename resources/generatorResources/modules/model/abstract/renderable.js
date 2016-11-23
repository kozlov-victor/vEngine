
var tweenModule = require('tween');
var tweenMovieModule = require('tweenMovie');
var camera = require('camera').instance();
var renderer = require('renderer').instance();
var collider = require('collider').instance();

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
    },
    _render: function(){
        var ctx = renderer.getContext();
        var dx = 0, dy = 0;
        if (this.fixedToCamera) {
            dx = camera.pos.x;
            dy = camera.pos.y;
        }
        ctx.translate(this.pos.x + this.width /2 + dx,this.pos.y + this.height/2 + dy);
        ctx.scale(this.scale.x,this.scale.y);
        ctx.rotateZ(this.angle);
        ctx.translate(-this.width /2, -this.height/2);
        ctx.setAlpha(this.alpha);
    },
    update: function(time,delta){
        var self = this;
        var deltaX = self.vel.x * delta / 1000;
        var deltaY = self.vel.y * delta / 1000;
        var posX = self.pos.x+deltaX;
        var posY = self.pos.y+deltaY;
        collider.manage(self,posX,posY);
    }
});