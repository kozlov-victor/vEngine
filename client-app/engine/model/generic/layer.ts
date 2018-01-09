import BaseModel from '../baseModel'
import {ArrayEx} from "../../core/misc/polyfills";

export default class Layer extends BaseModel {

    type = 'Layer';
    gameObjects:ArrayEx = [] as ArrayEx;

    constructor(game) {
        super(game);
    }
    addGameObject(go){
        go._layer = this;
        this.gameObjects.push(go);
    }
    getAllSpriteSheets() {
        let dataSet:ArrayEx = [] as ArrayEx;
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
        this.gameObjects.remove(it=>it.id===gObj.id); //todo
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