import {BaseModel} from '../baseModel'
import {Game} from "../../core/game";
import {ArrayEx} from "../../declarations";
import {GameObjectProto} from "./gameObjectProto";
import {IParentChild, RenderableModel} from "../renderableModel";

export class Layer extends BaseModel implements IParentChild{

    type:string = 'Layer';
    parent:IParentChild;
    children:ArrayEx<any> = [] as ArrayEx<any>; // todo why any?

    constructor(game:Game) {
        super(game);
    }

    revalidate(){
        this.children.forEach((r:IParentChild)=>{
            r.parent = this;
        });
    }

    findObject(query:{[key:string]:any}):RenderableModel{
        for (let c of this.children) {
            let possibleItem = c.findObject(query);
            if (possibleItem!==null) return possibleItem;
        }
        return null;
    }

    prependChild(go){
        go.parent = this;
        this.children.unshift(go);

        go.onShow();
    }
    appendChild(go){
        go.parent = this;
        this.children.push(go);
        go.onShow();
    }

    getAllSpriteSheets() {
        let dataSet:any[] = [];
        this.children.forEach((obj:GameObjectProto)=>{
            obj.spriteSheet && !dataSet.find(it=>obj.id===it.id) && dataSet.push(obj.spriteSheet);
        });
        return dataSet;
    }

    onShow(){
        this.children.forEach((g:GameObjectProto)=>{
            g.onShow();
        })
    }


    update(currTime,deltaTime){
        let all = this.children;
        for (let obj of all) {
            obj.update(currTime,deltaTime);
        }
    }

    render(){
        let all = this.children;
        for (let obj of all) {
            obj.render();
        }
    }
}