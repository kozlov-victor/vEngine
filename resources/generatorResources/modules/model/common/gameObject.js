
var renderer = require('renderer');
var BaseGameObject = require('baseGameObject').BaseGameObject;
var CommonBehaviour = require('commonBehaviour').CommonBehaviour;
var bundle = require('bundle');
var collections = require('collections');
var resourceCache = require('resourceCache');
var utils = require('utils');
var game = require('game');

exports.GameObject = BaseGameObject.extend({
    type:'gameObject',
    spriteSheetId:null,
    _spriteSheet: null,
    _behaviour:null,
    commonBehaviour:[],
    _commonBehaviour:null,
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
        //<code><%if (opts.debug){%>if (!self._spriteSheet) throw 'not found spriteSheet with id '+ self.spriteSheetId+' for gameObject with name '+ self.name<%}%>
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
        self._super(time,delta);
        self._currFrameAnimation && this._currFrameAnimation.update(time);
        if (!self.__updateIndividualBehaviour__) console.log('fail',self);
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
        ctx.save();
        self._super();
        ctx.drawImage(
            resourceCache.get(self._spriteSheet.resourcePath),
            self._sprPosX,
            self._sprPosY,
            self.width,
            self.height,
            0,
            0
        );
        ctx.restore();
    }
}, {
    find: function(name){
        return game.getCurrScene()._allGameObjects.find({name:name});
    },
    findAll: function(name) {
        return game.getCurrScene()._allGameObjects.findAll({name: name});
    }
});