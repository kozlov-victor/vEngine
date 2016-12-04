

var renderer = require('renderer').instance();
var camera = require('camera').instance();

var Renderable = require('renderable').Renderable;
var Moveable = require('moveable').Moveable;

exports.BaseGameObject = Renderable.extend({
    type:'baseGameObject',
    groupName:'',
    _spriteSheet:null,
    pos:null,
    scale:null,
    angle:0,
    fixedToCamera:false,
    _layer:null,
    _moveable:null,
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
        return require('game').instance().getCurrScene();
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
        if (!this.pos) this.pos = {x:0,y:0};
        if (!this.scale) this.scale = {x:1,y:1};
        this._moveable = new Moveable();
        this._moveable._gameObject = this;
    }
});