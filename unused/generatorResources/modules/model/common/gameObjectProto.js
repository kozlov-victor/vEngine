
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

const _draw = function(ctx,self,x,y){
    ctx.drawImage(
        resourceCache.get(self.spriteSheet.resourcePath),
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
    //ctx.drawModel(model,resourceCache.get(self.spriteSheet.resourcePath));

    //ctx.fillRect(0,0,self.width,self.height,[1,0.5,0,1]);
    //ctx.polyLine([0,0,5,5,20,3],[1,0,1,1]);
};

const _drawPattern = function(ctx,self){

    let offsetX = self.tileOffset.x % self.spriteSheet._frameWidth;
    let offsetY = self.tileOffset.y % self.spriteSheet._frameHeight;
    offsetX = offsetX<0?self.spriteSheet._frameWidth + offsetX : offsetX;
    offsetY = offsetY<0?self.spriteSheet._frameHeight + offsetY : offsetY;

    ctx.lockRect(self.getRect());

    for (
        let y = - offsetY;
        y<self.height + self.spriteSheet._frameHeight;
        y+=self.spriteSheet._frameHeight
    ) {
        for (
            let x = -offsetX;
            x<self.width + self.spriteSheet._frameWidth;
            x+=self.spriteSheet._frameWidth
        ) {
            ctx.drawImage(
                resourceCache.get(self.spriteSheet.resourcePath),
                self._sprPosX,
                self._sprPosY,
                self.spriteSheet._frameWidth,
                self.spriteSheet._frameHeight,
                x,
                y
            );
        }
    }
    ctx.unlockRect();
};

const GameObjectProto = BaseGameObject.extend({
    type:'gameObjectProto',
    spriteSheet: {type:'spriteSheet'},
    _behaviour:null,
    commonBehaviour:[{type:'commonBehaviour'}],
    currFrameIndex:0,
    _sprPosX:0,
    _sprPosY:0,
    frameAnimations: [{type:'frameAnimation'}],
    _currFrameAnimation:null,
    _timeCreated:null,
    tileOffset: null,
    tileRepeat:false,
    construct: function(){
        let self = this;
        self._super();
        if (!self.tileOffset) self.tileOffset = {x:0,y:0};
    },
    getFrAnimation: function(animationName){
        return this.frameAnimations.find({name: animationName});
    },
    setFrameIndex: function(index){
        this.currFrameIndex = index;
        this._sprPosX = this.spriteSheet.getFramePosX(this.currFrameIndex);
        this._sprPosY = this.spriteSheet.getFramePosY(this.currFrameIndex);
    },
    setSpriteSheet: function(spriteSheet){
        this.spriteSheet = spriteSheet;
        this.width = spriteSheet._frameWidth;
        this.height = spriteSheet._frameHeight;
    },
    update: function(time,delta) {
        let self = this;
        self._super(time,delta);
        self._currFrameAnimation && this._currFrameAnimation.update(time);
        self.__updateIndividualBehaviour__(delta);
        self.__updateCommonBehaviour__();
        self._render();
    },
    stopFrAnimations: function(){
        this._currFrameAnimation && this._currFrameAnimation.stop();
    },
    _render: function(){
        let self = this;
        let ctx = renderer.getContext();
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

module.exports = GameObjectProto;