
var Renderable = require('baseModel').Renderable;

var renderer = require('renderer').instance();
var camera = require('camera').instance();

var Renderable = require('renderable').Renderable;

exports.BaseGameObject = Renderable.extend({
    type:'baseGameObject',
    groupName:'',
    _spriteSheet:null,
    pos:null,
    scale:null,
    angle:0,
    fixedToCamera:false,
    _layer:null,
    getRect: function(){
        return {x:this.pos.x,y:this.pos.y,width:this.width,height:this.height};
    },
    getScreenRect: function(){
        var rect = {x:this.pos.x,y:this.pos.y,width:this.width,height:this.height};
        if (this.fixedToCamera) return rect;
        rect.x -= camera.pos.x;
        rect.y -= camera.pos.y;
        return rect;
    },
    kill: function(){
        this._layer._gameObjects.remove({id:this.id});
        this._layer._scene._allGameObjects.remove({id:this.id});
    },
    getScene: function(){
        return require('sceneManager').instance().getCurrScene();
    },
    moveTo:function(x,y,time,easeFnName){
        return this.tween(this.pos,{to:{x:x,y:y}},time,easeFnName);
    },
    update: function(){},
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
    construct:function(){
        if (!this.pos) this.pos = {x:0,y:0};
        if (!this.scale) this.scale = {x:1,y:1};
    }
});