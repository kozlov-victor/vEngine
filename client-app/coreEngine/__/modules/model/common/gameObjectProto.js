
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