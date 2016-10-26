var collider = require('collider',{ignoreFail:true}).instance();
var renderer = require('renderer',{ignoreFail:true}).instance();
var BaseGameObject = require('baseGameObject').BaseGameObject;
var CommonBehaviour = require('commonBehaviour').CommonBehaviour;
var bundle = require('bundle').instance();
var collections = require('collections');
var resourceCache = require('resourceCache');


exports.GameObject = BaseGameObject.extend({
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
            self._commonBehaviour.add(new CommonBehaviour(cb));
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
        var self = this;
        self._currFrameAnimation && this._currFrameAnimation.update(time);
        var deltaX = this.vel.x * delta / 1000;
        var deltaY = this.vel.y * delta / 1000;
        var posX = this.pos.x+deltaX;
        var posY = this.pos.y+deltaY;
        collider.manage(this,posX,posY);
        self.__updateIndividualBehaviour__(delta);
        self.__updateCommonBehaviour__();
        self._render();
    },
    stopFrAnimations: function(){
        this._currFrameAnimation && this._currFrameAnimation.stop();
    },
    _render: function(){
        var self = this;
        var ctx = renderer.getContext();
        var posX = 0;
        var posY = 0;
        ctx.save();
        self._super();
        ctx.drawImage(
            resourceCache.get(self._spriteSheet.resourcePath),
            self._sprPosX,
            self._sprPosY,
            self._spriteSheet._frameWidth,
            self._spriteSheet._frameHeight,
            0,
            0
        );
        ctx.restore();
    }
});