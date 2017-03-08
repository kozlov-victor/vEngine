
const BaseModel = require('baseModel');
const collections = require('collections');
const TextField = require('textField');
const bundle = require('bundle');

const Layer = BaseModel.extend({
    type:'layer',
    gameObjectProps:[],
    _gameObjects:null,
    _scene:null,
    construct: function() {
        let self = this;
        self._gameObjects = new collections.List();
        this.gameObjectProps.forEach(function(prop){
            let objCloned;
            switch (prop.subType) {
                case 'textField':
                    objCloned = new TextField(prop);
                    break;
                default:
                    let obj = bundle.gameObjectList.find({id: prop.protoId});
                    objCloned = obj.clone();
                    objCloned.fromJSON(prop);
                    break;
            }
            objCloned._layer = self;
            self._gameObjects.add(objCloned);
        });
    },
    getAllSpriteSheets:function() {
        let dataSet = new collections.Set();
        this._gameObjects.forEach(function(obj){
            obj._spriteSheet && dataSet.add(obj._spriteSheet);
        });
        return dataSet;
    },
    update: function(currTime,deltaTime){
        let all = this._gameObjects.rs;
        let i = all.length;
        let l = i-1;
        while(i--){
            let obj = all[l-i];
            obj && obj.update(currTime,deltaTime);
        }
    }
});

module.exports = Layer;