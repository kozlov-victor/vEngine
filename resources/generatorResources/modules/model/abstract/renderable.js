
var camera = require('camera');
var renderer = require('renderer');
var collider = require('collider');

var BaseModel = require('baseModel').BaseModel;
var Tweenable = require('tweenable').Tweenable;


exports.Renderable = BaseModel.extend(function(self){

    self.type = 'renderable';
    self.alpha = 1;
    self.width = 0;
    self.height = 0;
    var _tweenable = new Tweenable();
    self.onUpdate = function(){};
    self.fadeIn = function(time,easeFnName){
        return this.tween(this,{to:{alpha:1}},time,easeFnName);
    };
    self.fadeOut = function(time,easeFnName){
        return this.tween(this,{to:{alpha:0}},time,easeFnName);
    };
    self.tween =  function(obj,fromToVal,tweenTime,easeFnName){
        _tweenable.tween(obj,fromToVal,tweenTime,easeFnName);
    };
    self._render = function(){
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
    };
    self.update = function(time,delta){
        var self = this;
        var deltaX = self.vel.x * delta / 1000;
        var deltaY = self.vel.y * delta / 1000;
        var posX = self.pos.x+deltaX;
        var posY = self.pos.y+deltaY;
        collider.manage(self,posX,posY);
    };

});