
var bundle = require('bundle').instance();
var collider = require('collider',{ignoreFail:true}).instance();
var renderer = require('renderer',{ignoreFail:true}).instance();
var collections = require('collections');
var mathEx = require('mathEx');
var EventEmitter = require('eventEmitter').EventEmitter;
var tweenModule = require('tween',{ignoreFail:true});
var tweenMovieModule = require('tweenMovie',{ignoreFail:true});

var isPropNotFit = function(el,key){
    if (!key) return true;
    if (key.indexOf('$$')==0) return true;
    if (el[key] && key.indexOf('_')==0) return true;
    if (el[key] && el[key].call) return true;
    if (typeof el[key] == 'string') return false;
    if (typeof el[key] == 'number') return false;
    if (!el[key]) return true;
};

function deepCopy(obj) {
    if (Object.prototype.toString.call(obj) === '[object Array]') {
        var out = [], i = 0, len = obj.length;
        for ( ; i < len; i++ ) {
            out[i] = deepCopy(obj[i]);
        }
        return out;
    }
    if (typeof obj === 'object') {
        var out = {}, i;
        for ( i in obj ) {
            out[i] = deepCopy(obj[i]);
        }
        return out;
    }
    return obj;
}

exports.BaseModel = Class.extend({
    id:null,
    protoId:null,
    name:'',
    _emitter:null,
    toJSON: function(){
        var res = {};
        for (var key in this) {
            if (isPropNotFit(this,key)) {
                continue;
            }
            res[key]=this[key];
        }
        return deepCopy(res);
    },
    toJSON_Array: function(){
        var res = [];
        for (var key in this) {
            if (isPropNotFit(this,key)) continue;
            res.push({key:key,value:this[key]});
        }
        return res;
    },
    fromJSON:function(jsonObj){
        var self = this;
        Object.keys(jsonObj).forEach(function(key){
            if (key in self) {
                self[key] = jsonObj[key];
                self[key] = +self[key]||self[key];
            }
        });
    },
    clone: function(){
        var newObj = new this.constructor(this.toJSON());
        newObj._init();
        return newObj;
    },
    on: function(eventName,callBack){
        this._emitter.on(eventName,callBack);
    },
    trigger: function(eventName,data){
        this._emitter.trigger(eventName,data);
    },
    _init:function(){
        this._emitter = new EventEmitter();
        arguments && arguments[0] && this.fromJSON(arguments[0]);
    }
});

var Resource = exports.BaseModel.extend({
    resourcePath:''
});

exports.Sound = Resource.extend({
    type:'sound',
    _buffer:null
});

exports.SpriteSheet = Resource.extend({
    type:'spriteSheet',
    width:0,
    height:0,
    numOfFramesH:1,
    numOfFramesV:1,
    _frameWidth:0,
    _frameHeight:0,
    _numOfFrames:0,
    _textureInfo: null,
    getFramePosX: function(frameIndex){
        return (frameIndex%this.numOfFramesH)*this._frameWidth;
    },
    getFramePosY: function(frameIndex){
        return ~~(frameIndex/this.numOfFramesH)*this._frameHeight;
    },
    calcFrameSize: function(){
        if (!(this.numOfFramesH && this.numOfFramesV)) return;
        this._frameWidth = this.width/this.numOfFramesH;
        this._frameHeight = this.height/this.numOfFramesV;
        this._numOfFrames = this.numOfFramesH * this.numOfFramesV;
    },
    construct: function(){
        this.calcFrameSize();
    }
});

exports.BaseGameObject = exports.BaseModel.extend({
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
        ctx.rotateZ(this.angle);
        ctx.scale(this.scale.x,this.scale.y);
        ctx.translate(-this.width /2, -this.height/2);
    },
    construct:function(){
        if (!this.pos) this.pos = {x:0,y:0};
        if (!this.scale) this.scale = {x:1,y:1};
    }
});

exports.GameObject = exports.BaseGameObject.extend({
    type:'gameObject',
    spriteSheetId:null,
    _spriteSheet: null,
    _behaviour:null,
    commonBehaviour:[],
    _commonBehaviour:null,
    vel:null,
    currFrameIndex:0,
    _sprPosX:0,
    _sprPosY:0,
    _frameAnimations: null,
    frameAnimationIds:[],
    _currFrameAnimation:null,
    rigid:true,
    _timeCreated:null,
    construct: function(){
        var self = this;
        self._super();
        self.vel = {x:0,y:0};
        self._frameAnimations = new collections.List();
        if (!self.spriteSheetId) {
            return;
        }
        self._spriteSheet = bundle.spriteSheetList.find({id: self.spriteSheetId});
        self.setFrameIndex(self.currFrameIndex);
        self._frameAnimations.clear();
        self.frameAnimationIds.forEach(function(id){
            var a = bundle.frameAnimationList.find({id: id});
            a = a.clone(exports.FrameAnimation);
            a._gameObject = self;
            self._frameAnimations.add(a);
        });
        self._commonBehaviour = new collections.List();
        self.commonBehaviour.forEach(function(cb){
            self._commonBehaviour.add(new exports.CommonBehaviour(cb));
        });
    },
    getFrAnimation: function(animationName){
        return this._frameAnimations.find({name: animationName});
    },
    setFrameIndex: function(index){
        this.currFrameIndex = index;
        this._sprPosX = this._spriteSheet.getFramePosX(this.currFrameIndex);
        this._sprPosY = this._spriteSheet.getFramePosY(this.currFrameIndex);
    },
    setSpriteSheet: function(spriteSheet){
        this._spriteSheet = spriteSheet;
        this.width = spriteSheet._frameWidth;
        this.height = spriteSheet._frameHeight;
    },
    update: function(time,delta) {
        this._currFrameAnimation && this._currFrameAnimation.update(time);
        var deltaX = this.vel.x * delta / 1000;
        var deltaY = this.vel.y * delta / 1000;
        var posX = this.pos.x+deltaX;
        var posY = this.pos.y+deltaY;
        collider.manage(this,posX,posY);
        this.__updateIndividualBehaviour__(delta);
        this.__updateCommonBehaviour__();
        this._render();
    },
    stopFrAnimations: function(){
        this._currFrameAnimation && this._currFrameAnimation.stop();
    },
    _render: function(){
        var ctx = renderer.getContext();
        ctx.save();
        this._super();
        ctx.drawImage(
            this._spriteSheet._textureInfo,
            this._sprPosX,
            this._sprPosY,
            this._spriteSheet._frameWidth,
            this._spriteSheet._frameHeight,
            0,
            0
        );
        ctx.restore();
    }
});

exports.FrameAnimation = exports.BaseModel.extend({
    type:'frameAnimation',
    name:'',
    frames:[],
    duration:1000,
    _gameObject:null,
    _startTime:null,
    _timeForOneFrame:0,
    construct: function(){
        this._timeForOneFrame = ~~(this.duration / this.frames.length);
    },
    play: function(){
        this._gameObject._currFrameAnimation = this;
    },
    stop:function(){
        this._gameObject._currFrameAnimation = null;
        this._startTime = null;
    },
    update: function(time){
        if (!this._startTime) this._startTime = time;
        var delta = (time - this._startTime)%this.duration;
        var ind = ~~((this.frames.length)*delta/this.duration);
        var lastFrIndex = this._gameObject.currFrameIndex;
        if (lastFrIndex!=this.frames[ind]) {
            this._gameObject.setFrameIndex(this.frames[ind]);
        }
    }
});

exports.Layer = exports.BaseModel.extend({
    type:'layer',
    gameObjectProps:[],
    _gameObjects:null,
    _scene:null,
    construct: function() {
        var self = this;
        self._gameObjects = new collections.List();
        this.gameObjectProps.forEach(function(prop){
            var objCloned;
            switch (prop.subType) {
                case 'textField':
                    objCloned = new exports.TextField(prop);
                    break;
                default:
                    var obj = bundle.gameObjectList.find({id: prop.protoId});
                    objCloned = obj.clone();
                    objCloned.fromJSON(prop);
                    break;
            }
            objCloned._layer = self;
            self._gameObjects.add(objCloned);
        });
    },
    getAllSpriteSheets:function() {
        var dataSet = new collections.Set();
        this._gameObjects.forEach(function(obj){
            obj._spriteSheet && dataSet.add(obj._spriteSheet);
        });
        return dataSet;
    },
    update: function(currTime,deltaTime){
        this._gameObjects.forEach(function(obj){
            if (!obj) return;
            obj.update(currTime,deltaTime);
        });
    }
});

exports.Scene = exports.BaseModel.extend({
    type:'scene',
    layerProps:[],
    _layers:null,
    _allGameObjects:null,
    useBG:false,
    colorBG:[255,255,255],
    _tweenMovies:null,
    __onResourcesReady: function(){
        var self = this;
        self._allGameObjects = new collections.List();
        self._layers.forEach(function(l){
            self._allGameObjects.addAll(l._gameObjects);
        });
    },
    construct: function(){
        var self = this;
        self._layers = new collections.List();
        this.layerProps.forEach(function(prop){
            var l = bundle.layerList.find({id: prop.protoId});
            var lCloned = l.clone(exports.Layer);
            lCloned.fromJSON(prop);
            lCloned._scene = self;
            self._layers.add(lCloned);
        });
        self._tweenMovies = [];
    },
    getAllSpriteSheets:function() {
        var dataSet = new collections.Set();
        this._layers.forEach(function(l){
            dataSet.combine(l.getAllSpriteSheets());
        });
        return dataSet;
    },
    find: function(name){
        return this._allGameObjects.find({name:name});
    },
    getAllGameObjects:function(){
        return this._allGameObjects;
    },
    update: function(currTime,deltaTime){
        var self = this;
        self._layers.forEach(function(layer){
            layer.update(currTime,deltaTime);
        });
        self._tweenMovies.forEach(function(tweenMovie){
            if (tweenMovie.completed) {
                self._tweenMovies.splice(self._tweenMovies.indexOf(tweenMovie),1);
            }
            tweenMovie.update(currTime);
        });
        self.__updateIndividualBehaviour__(deltaTime);
    }
});

exports.Font = exports.BaseModel.extend({
    type:'font',
    fontColor:'black',
    fontSize:12,
    fontFamily:'Monospace',
    resourcePath:'',
    fontContext:null
});

exports.TextField = exports.BaseGameObject.extend({
        type:'userInterface',
        subType:'textField',
        _chars:null,
        text:'',
        _font:null,
        fontId:null,
        rigid:false,
        setText: function(text) {
            text+='';
            this._chars = [];
            this.text = text;
            var rows = [{width:0}];
            var currRowIndex = 0;
            this.height = this._font.fontContext.symbols[' '].height;
            for (var i=0,max=text.length;i<max;i++) {
                this._chars.push(text[i]);
                var currSymbolInFont = this._font.fontContext.symbols[text[i]] || this._font.fontContext.symbols[' '];
                if (text[i]=='\n') {
                    currRowIndex++;
                    this.height+=currSymbolInFont.height;
                    rows[currRowIndex] = {width:0};
                } else {
                    rows[currRowIndex].width+=currSymbolInFont.width;
                }
            }
            this.width = Math.max.apply(Math,rows.map(function(o){return o.width;}));
        },
        setFont: function(font){
            this._font = font;
            this.height = this._font.fontContext.symbols[' '].height;
            this._spriteSheet = new exports.SpriteSheet({resourcePath:this._font.resourcePath});
            this.setText(this.text);
        },
        clone:function(){
            return this._super();
        },
        construct: function(){
            this._super();
            this.rigid = false;
            var font =
                bundle.fontList.find({id:this.fontId}) ||
                bundle.fontList.find({name:'default'});
            this.setFont(font);
        },
        update: function(){
            this._render();
        },
        _render: function(){
            var posX = this.pos.x;
            var oldPosX = this.pos.x;
            var posY = this.pos.y;
            var self = this;
            var ctx = renderer.getContext();
            this._super();
            ctx.translate(-this.pos.x, -this.pos.y);
            this._chars.forEach(function(ch){
                var charInCtx = self._font.fontContext.symbols[ch]||self._font.fontContext.symbols['?'];
                if (ch=='\n') {
                    posX = oldPosX;
                    posY+= charInCtx.height;
                    return;
                }
                renderer.getContext().drawImage(
                    self._spriteSheet._textureInfo,
                    charInCtx.x,
                    charInCtx.y,
                    charInCtx.width,
                    charInCtx.height,
                    posX,
                    posY,
                    charInCtx.width,
                    charInCtx.height
                );
                posX+=charInCtx.width;
            });
            ctx.restore();
        }
    });

exports.CommonBehaviour = exports.BaseModel.extend({
    type:'commonBehaviour',
    name:'',
    description:'',
    parameters:[],
    construct: function(){

    }
});

exports.ParticleSystem = exports.BaseModel.extend({
    type:'particleSystem',
    gameObjectId:null,
    _gameObject:null,
    _particles:null,
    numOfParticlesToEmit:null,
    particleAngle:null,
    particleVelocity:null,
    particleLiveTime:null,
    emissionRadius:null,
    construct: function(){
        this._particles = [];
        if (!this.numOfParticlesToEmit) this.numOfParticlesToEmit = {from:1,to:10};
        if (!this.particleAngle) this.particleAngle = {from:0,to:0};
        if (this.particleAngle.to>this.particleAngle.from) this.particleAngle.from += 2*Math.PI;
        if (!this.particleVelocity) this.particleVelocity = {from:1,to:100};
        if (!this.particleLiveTime) this.particleLiveTime = {from:100,to:1000};
        if (!this.emissionRadius) this.emissionRadius = 0;
        this._gameObject = bundle.gameObjectList.find({id:this.gameObjectId});
    },
    emit: function(x,y){
        var r = function(obj){
            return mathEx.getRandomInRange(obj.from,obj.to);
        };
        for (var i = 0;i<r(this.numOfParticlesToEmit);i++) {
            var particle = this._gameObject.clone();
            var angle = r(this.particleAngle);
            var vel = r(this.particleVelocity);
            particle.vel.x = vel*Math.cos(angle);
            particle.vel.y = vel*Math.sin(angle);
            particle.pos.x = r({from:x-this.emissionRadius,to:x+this.emissionRadius});
            particle.pos.y = r({from:y-this.emissionRadius,to:y+this.emissionRadius});
            particle.liveTime = r(this.particleLiveTime);
            bundle.applyBehaviour(particle);
            this._particles.push(particle);
        }
    },
    update:function(time,delta){
        var self = this;
        this._particles.forEach(function(p){
            if (!p._timeCreated) p._timeCreated = time;
            if (time - p._timeCreated > p.liveTime) {
                self._particles.splice(self._particles.indexOf(p),1);
            }
            p.update(time,delta);
        });
    }
});
