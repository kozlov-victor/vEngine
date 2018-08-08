import {BaseModel} from '../baseModel'
import {Game} from "../../core/game";
import {ArrayEx} from "../../declarations";

export class Layer extends BaseModel {

    type:string = 'Layer';
    gameObjects:ArrayEx<any> = [] as ArrayEx<any>;

    constructor(game:Game) {
        super(game);
    }
    addGameObject(go){
        go._layer = this;
        this.gameObjects.push(go);
    }
    getAllSpriteSheets() {
        let dataSet:Array<any> = [];
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

    kill(gObjId:number){
        this.gameObjects.remove(it=>it.id===gObjId);
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

    render(){
        let all = this.gameObjects;
        let i = all.length;
        let l = i-1;
        while(i--){
            let obj = all[l-i];
            obj && obj.render();
        }
    }
}