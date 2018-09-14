import {BaseComponent} from "../../../../baseComponent";

declare const RF;


import './scenes.scss'
import {alertEx} from "../../../../providers/userDefinedFns";
import {Layer} from "../../../../../engine/model/impl/layer";
import {Scene} from "../../../../../engine/model/impl/scene";

@RF.decorateComponent({
    name: 'app-scenes',
    template: require('./scenes.html')
})
export class Scenes extends BaseComponent {
    constructor(){
        super();
    }
    setCurrentScene(scene){
        this.editData.currSceneInEdit=scene
    }
    setCurrSceneGameObjectInEdit(gameObject){
        this.editData.currSceneGameObjectInEdit=gameObject;
    }
    setCurrLayer(layer){
        this.editData.currLayerInEdit=layer
    }

    createScene(){
        this.editData.currSceneInEdit = new Scene(this.editData.game);
        RF.getComponentById('sceneModal').open();
    }
    editScene(scene){
        this.editData.currSceneInEdit = scene.clone();
        RF.getComponentById('sceneModal').open();
    }
    async deleteScene(scene){
        if (scene.layers && scene.layers.length>0) {
            alertEx(this.i18n.get('canNotDelete')(scene,scene.layers.rs));
            return;
        }
        let res = await this.utils.deleteModel(scene);
        if (!res) return;
        await this.restFileSystem.removeFile(`scripts/${scene.name}.ts`);
    }
    createLayer(scene){
        this.editData.currLayerInEdit = new Layer(this.editData.game);
        this.editData.currLayerInEdit._scene = scene;
        RF.getComponentById('layerModal').open();
    }
    editLayer(layer,scene){
        this.editData.currLayerInEdit = new Layer(this.editData.game);
        this.editData.currLayerInEdit._scene = scene;
        RF.getComponentById('layerModal').open();
    }
    editScript(scene){
        this.utils.openEditor(`scripts/${scene.name}.ts`);
    }
    async deleteLayer(layer,scene){
        if (layer.children.length)
            return alertEx(this.i18n.get('canNotDelete')(layer,layer.children));
        let res = await this.utils.deleteModel(layer);
        if (!res) return;
        scene.layers.remove(it=>it.id==layer.id);
        scene.updateCloner();
        this.editData.game.repository.updateObject(scene);
        this.restResource.save(scene);
    }
    createGameObject(){
        console.log('create go invoked');
    }
    editGameObject(scene){
        console.log('edit go invoked',scene);
    }
    async deleteGameObject(model){
        let l = this.editData.currLayerInEdit;
        let res = await this.utils.deleteModel(model);
        if (!res) return;
        l.children.remove(it=>it.id==model.id);
        l.updateCloner();
        this.editData.game.repository.updateObject(l);
        this.restResource.save(l);
    }
}
