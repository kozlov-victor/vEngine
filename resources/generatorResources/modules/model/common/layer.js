
const BaseModel = require('baseModel');
const collections = require('collections');
const TextField = require('textField');
const bundle = require('bundle');

const Layer = BaseModel.extend({
    type:'layer',
    gameObjects:null,
    _scene:null,
    construct: function() {
        let self = this;
        self.gameObjects = new collections.List(); // todo
        bundle.gameObjectList.forEach(go=>{
            self.addGameObject(go);
        });
    },
    addGameObject(go){
        let objCloned = bundle.gameObjectProtoList.find({id:go.protoId});
        objCloned = objCloned.clone();
        if (go.toJSON) go = go.toJSON();
        Object.keys(go).forEach(key=>{
            if (go[key]!==null && go[key]!==undefined && go[key]!=='') {
                objCloned[key] = go[key];
            }
        });
        objCloned._layer = this;
        this.gameObjects.add(objCloned);
    },
    getAllSpriteSheets:function() {
        let dataSet = new collections.Set();
        this.gameObjects.forEach(function(obj){
            obj.spriteSheet && dataSet.add(obj.spriteSheet);
        });
        return dataSet;
    },
    update: function(currTime,deltaTime){
        let all = this.gameObjects.rs;
        let i = all.length;
        let l = i-1;
        while(i--){
            let obj = all[l-i];
            obj && obj.update(currTime,deltaTime);
        }
    }
});

module.exports = Layer;