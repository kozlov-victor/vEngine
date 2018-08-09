import {BaseModel} from '../baseModel'
import {Game} from "../../core/game";
import {ArrayEx} from "../../declarations";

export class Layer extends BaseModel {

    type:string = 'Layer';
    children:ArrayEx<any> = [] as ArrayEx<any>;

    constructor(game:Game) {
        super(game);
    }
    appendChild(go){
        go.parent = this;
        this.children.push(go);
        go.onShow();
    }
    getAllSpriteSheets() {
        let dataSet:any[] = [];
        this.children.forEach(function(obj){
            obj.spriteSheet && !dataSet.find(it=>obj.id===it.id) && dataSet.push(obj.spriteSheet);
        });
        return dataSet;
    }

    onShow(){
        this.children.forEach(g=>{
            g.onShow();
        })
    }


    update(currTime,deltaTime){
        let all = this.children;
        let i = all.length;
        let l = i-1;
        while(i--){
            let obj = all[l-i];
            obj && obj.update(currTime,deltaTime);
        }
    }

    render(){
        let all = this.children;
        let i = all.length;
        let l = i-1;
        while(i--){
            let obj = all[l-i];
            obj && obj.render();
        }
    }
}