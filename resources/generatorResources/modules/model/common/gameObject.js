
const renderer = require('renderer');
const BaseGameObject = require('baseGameObject');
const bundle = require('bundle');
const collections = require('collections');
const resourceCache = require('resourceCache');
const utils = require('utils');
const game = require('game');

const Sphere = require('sphere');
const Cube = require('cube');
//var TeaPot = require('teaPot');
//var model = new Airplane({radius:50,size:50,bands:6});

var a = 0;

const _draw = function(ctx,self,x,y){
    ctx.drawImage(
        resourceCache.get(self._spriteSheet.resourcePath),
        self._sprPosX,
        self._sprPosY,
        self.width,
        self.height,
        x||0,
        y||0
    );

    //ctx.scale(10,10,10);
    //ctx.rotateY(a);
    //ctx.rotateZ(a);
    //a+=0.01;
    //ctx.drawModel(model,resourceCache.get(self._spriteSheet.resourcePath));

    //ctx.fillRect(0,0,self.width,self.height,[1,0.5,0,1]);
    //ctx.polyLine([0,0,5,5,20,3],[1,0,1,1]);
};

const _drawPattern = function(ctx,self){

    let offsetX = self.tileOffset.x % self._spriteSheet._frameWidth;
    let offsetY = self.tileOffset.y % self._spriteSheet._frameHeight;
    offsetX = offsetX<0?self._spriteSheet._frameWidth + offsetX : offsetX;
    offsetY = offsetY<0?self._spriteSheet._frameHeight + offsetY : offsetY;

    ctx.lockRect(self.getRect());

    for (
        let y = - offsetY;
        y<self.height + self._spriteSheet._frameHeight;
        y+=self._spriteSheet._frameHeight
    ) {
        for (
            let x = -offsetX;
            x<self.width + self._spriteSheet._frameWidth;
            x+=self._spriteSheet._frameWidth
        ) {
            ctx.drawImage(
                resourceCache.get(self._spriteSheet.resourcePath),
                self._sprPosX,
                self._sprPosY,
                self._spriteSheet._frameWidth,
                self._spriteSheet._frameHeight,
                x,
                y
            );
        }
    }
    ctx.unlockRect();
};

const GameObject = BaseGameObject.extend({
    type:'gameObject',
    spriteSheet: {type:'spriteSheet'},
    _behaviour:null,
    commonBehaviour:[{type:'commonBehaviour'}],
    currFrameIndex:0,
    _sprPosX:0,
    _sprPosY:0,
    _frameAnimations: null,
    frameAnimationIds:[],
    _currFrameAnimation:null,
    _timeCreated:null,
    tileOffset: null,
    tileRepeat:false,
    construct: function(){
        var self = this;
        if (!this.commonBehaviour) this.commonBehaviour=[{type:'commonBehaviour'}];
        self._super();
        if (!self.tileOffset) self.tileOffset = {x:0,y:0};
        //self._frameAnimations = new collections.List();
        // if (self.spriteSheet.id) {
        //     self.spriteSheet = bundle.spriteSheetList.find({id: self.spriteSheet.id});
        //     if (!self._spriteSheet)
        //         throw 'not found spriteSheet with id '+ self.spriteSheetId+' for gameObject with name '+ self.name;
        //     self.setFrameIndex(self.currFrameIndex);
        // }
        // self._frameAnimations.clear();
        // self.frameAnimationIds.forEach(function(id){
        //     var a = bundle.frameAnimationList.find({id: id});
        //     //<code>{{#if opts.debug}}
        //     if (!a) throw 'can not found FrameAnimation with id ' + id + ' for gameObject with name '+ self.name;
        //     //<code>{{/if}}
        //     a = a.clone();
        //     a._gameObject = self;
        //     self._frameAnimations.add(a);
        // });
        // self._commonBehaviour = new collections.List();
        // self.commonBehaviour.forEach(function(cb){
        //     self._commonBehaviour.add(new CommonBehaviour(cb));
        // });
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

        self.tileRepeat ?
            _drawPattern(ctx,self):
            _draw(ctx,self);

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

module.exports = GameObject;