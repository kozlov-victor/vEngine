import {BaseComponent} from "../../../../baseComponent";
import {GameObjectProto} from "../../../../../engine/model/all";
import {alertEx} from "../../../../providers/userDefinedFns";

declare const RF;


@RF.decorateComponent({
    name: 'app-game-objects',
    template: require('./gameObjects.html')
})
export class GameObjects extends BaseComponent {
    constructor(){
        super();
    }
    createGameObject(){
        this.editData.currGameObjectInEdit = new GameObjectProto(this.editData.game);
        RF.getComponentById('gameObjectModal').open();
    }
    editGameObjectScript(model){
        this.utils.openEditor(`scripts/${model.name}.ts`);
    }
    editGameObject(go){
        this.editData.currGameObjectInEdit =  go.clone();
        RF.getComponentById('gameObjectModal').open();
    }
    async deleteGameObject(model){
        let scenesUsed = [];
        this.editData.game.repository.getArray('Scene').forEach(s=>{
            s.layers.forEach(l=>{
                l.children.forEach(go=>{
                    if (go.name==model.name) {
                        if (scenesUsed.indexOf(s)==-1) scenesUsed.push(s);
                    }
                });
            });

        });
        if (scenesUsed.length)
            return alertEx(this.i18n.get('canNotDelete')(model,scenesUsed));
        let res = await this.utils.deleteModel(model);
        if (!res) return;
        this.restFileSystem.removeFile(`scripts/${model.name}.ts`);
    }
}
