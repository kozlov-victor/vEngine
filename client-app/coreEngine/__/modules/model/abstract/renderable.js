
const camera = require('camera');
const renderer = require('renderer');
const collider = require('collider');

const BaseModel = require('baseModel');
const Tweenable = require('tweenable');


const Renderable = BaseModel.extend({
    type: 'renderable',
    alpha: 1.0,
    width: 0,
    height: 0,
    _tweenable:null,
    onUpdate: function(){},
    fadeIn: function(time,easeFnName){
        return this.tween(this,{to:{alpha:1}},time,easeFnName);
    },
    fadeOut:function(time,easeFnName){
        return this.tween(this,{to:{alpha:0}},time,easeFnName);
    },
    tween: function(obj,fromToVal,tweenTime,easeFnName){
        this._tweenable.tween(obj,fromToVal,tweenTime,easeFnName);
    },
    _render:function(){
        let ctx = renderer.getContext();
        let dx = 0, dy = 0;
        if (this.fixedToCamera) {
            dx = camera.pos.x;
            dy = camera.pos.y;
        }
        ctx.translate(this.pos.x + this.width /2 + dx,this.pos.y + this.height/2 + dy);
        ctx.scale(this.scale.x,this.scale.y);
        ctx.rotateZ(this.angle);
        //ctx.rotateY(a);
        ctx.translate(-this.width /2, -this.height/2);
        ctx.setAlpha(this.alpha);
    },
    update: function(time,delta) {
        let self = this;
        let deltaX = self.vel.x * delta / 1000;
        let deltaY = self.vel.y * delta / 1000;
        let posX = self.pos.x + deltaX;
        let posY = self.pos.y + deltaY;
        collider.manage(self, posX, posY);
    },
    construct: function(){
        this._super();
        this._tweenable = new Tweenable();
    }
});

module.exports = Renderable;