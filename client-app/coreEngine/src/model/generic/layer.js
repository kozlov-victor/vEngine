import BaseModel from '../baseModel'

export default class Layer extends BaseModel {

    constructor(game) {
        super(game);
        this.type = 'Layer';
        this.gameObjects = [];
    }
    addGameObject(go){
        go._layer = this;
        this.gameObjects.push(go);
    }
    getAllSpriteSheets() {
        let dataSet = [];
        this.gameObjects.forEach(function(obj){
            obj.spriteSheet && !dataSet.find(it=>obj.id===it.id) && dataSet.push(obj.spriteSheet);
        });
        return dataSet;
    }

    onShow(){
        this.gameObjects.forEach(g=>{
            g.onShow();
        })
    }

    kill(gObj){
        this.gameObjects.remove(it=>it.id===gObj.id);
    }

    update(currTime,deltaTime){
        let all = this.gameObjects;
        let i = all.length;
        let l = i-1;
        while(i--){
            let obj = all[l-i];
            obj && obj.update(currTime,deltaTime);
        }
    }
}