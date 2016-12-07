
var BaseModel = require('baseModel').BaseModel;
var collections = require('collections');
var TextField = require('textField').TextField;
var bundle = require('bundle');

exports.Layer = BaseModel.extend({
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
                    objCloned = new TextField(prop);
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
        var all = this._gameObjects.rs;
        var i = all.length;
        var l = i-1;
        while(i--){
            var obj = all[l-i];
            obj && obj.update(currTime,deltaTime);
        }
    }
});