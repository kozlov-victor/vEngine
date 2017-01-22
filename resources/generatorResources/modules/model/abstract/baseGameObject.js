

var renderer = require('renderer');
var camera = require('camera');

var Renderable = require('renderable');
var Moveable = require('moveable');

var BaseGameObject = Renderable.extend({
    type:'baseGameObject',
    groupName:'',
    _spriteSheet:null,
    fixedToCamera:false,
    _layer:null,
    _moveable:null,

    pos:null,
    scale:null,
    rigid:false,
    angle:0,
    angleVel:0,
    vel:null,

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
        return require('game').getCurrScene();
    },
    moveTo:function(x,y,time,easeFnName){
        return this.tween(this.pos,{to:{x:x,y:y}},time,easeFnName);
    },
    update: function(time,delta){
        this._moveable.update(time,delta);
    },
    _render: function(){
        this._super();
    },
    construct:function(){
        this._super();
        if (!this.pos) this.pos = {x:0,y:0};
        if (!this.vel) this.vel = {x:0,y:0};
        if (!this.scale) this.scale = {x:1,y:1};
        this._moveable = new Moveable();
        this._moveable._gameObject = this;
    }
});

module.exports = BaseGameObject;