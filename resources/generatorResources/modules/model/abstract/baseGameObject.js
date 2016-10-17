
var BaseModel = require('baseModel').BaseModel;
var tweenModule = require('tween',{ignoreFail:true});
var tweenMovieModule = require('tweenMovie',{ignoreFail:true});
var renderer = require('renderer',{ignoreFail:true}).instance();

exports.BaseGameObject = BaseModel.extend({
    type:'baseGameObject',
    groupName:'',
    _spriteSheet:null,
    pos:null,
    scale:null,
    angle:0,
    width:0,
    height:0,
    _layer:null,
    getRect: function(){
        return {x:this.pos.x,y:this.pos.y,width:this.width,height:this.height};
    },
    kill: function(){
        this._layer._gameObjects.remove({id:this.id});
        this._layer._scene._allGameObjects.remove({id:this.id});
    },
    getScene: function(){
        return require('sceneManager').instance().getCurrScene();
    },
    moveTo:function(x,y,time,easeFnName){
        var scene = this.getScene();
        easeFnName = easeFnName || 'linear';
        var movie = new tweenMovieModule.TweenMovie();
        var tweenX = new tweenModule.Tween(this.pos,'x',this.pos.x,x,time,easeFnName);
        var tweenY = new tweenModule.Tween(this.pos,'y',this.pos.y,y,time,easeFnName);
        movie.add(0,tweenX).add(0,tweenY);
        scene._tweenMovies.push(movie);
    },
    update: function(){},
    _render: function(){
        var ctx = renderer.getContext();
        ctx.translate(this.pos.x + this.width /2,this.pos.y + this.height/2);
        ctx.scale(this.scale.x,this.scale.y);
        ctx.rotateZ(this.angle);
        ctx.translate(-this.width /2, -this.height/2);
    },
    construct:function(){
        if (!this.pos) this.pos = {x:0,y:0};
        if (!this.scale) this.scale = {x:1,y:1};
    }
});