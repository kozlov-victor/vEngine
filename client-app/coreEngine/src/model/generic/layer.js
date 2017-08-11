import BaseModel from '../baseModel'

export default class Layer extends BaseModel {

    constructor() {
        super();
        this.gameObjects = [];
        this._scene = null;
    }
    addGameObject(go){
        let goCloned = go.clone();
        goCloned._layer = this;
        this.gameObjects.add(goCloned);
    }
    getAllSpriteSheets() {
        let dataSet = [];
        this.gameObjects.forEach(function(obj){
            obj.spriteSheet && !dataSet.find(it=>obj.id===it.id) && dataSet.add(obj.spriteSheet);
        });
        return dataSet;
    }
    update(currTime,deltaTime){
        let all = this.gameObjects.rs;
        let i = all.length;
        let l = i-1;
        while(i--){
            let obj = all[l-i];
            obj && obj.update(currTime,deltaTime);
        }
    }
}