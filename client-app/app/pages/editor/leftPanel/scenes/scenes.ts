import BaseComponent from "../../../../baseComponent";

declare const RF;
/*global alertEx:true*/


import './scenes.less'
import {alertEx} from "../../../../providers/userDefinedFns";
import Layer from "../../../../../engine/model/impl/layer";
import Scene from "../../../../../engine/model/impl/scene";

@RF.decorateComponent({
    name: 'app-scenes',
    template: require('./scenes.html')
})
export default class Scenes extends BaseComponent {
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
    deleteScene(scene){
        if (scene.layers && scene.layers.length>0) {
            alertEx(this.i18n.get('canNotDelete')(scene,scene.layers.rs));
            return;
        }
        this.utils.deleteModel(scene,()=>{
            this.restFileSystem.removeFile(`scripts/${scene.name}.js`);
        });
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
        this.utils.openEditor(`scripts/${scene.name}.js`);
    }
    deleteLayer(layer,scene){
        if (layer.gameObjects.length)
            return alertEx(this.i18n.get('canNotDelete')(layer,layer.gameObjects));
        this.utils.deleteModel(layer,()=>{
            scene.layers.remove(it=>it.id==layer.id);
            scene.updateCloner();
            this.editData.game.repository.updateObject(scene);
            this.restResource.save(scene);
        });
    }
    createGameObject(){
        console.log('create go invoked');
    }
    editGameObject(scene){
        console.log('edit go invoked',scene);
    }
    deleteGameObject(model){
        let l = this.editData.currLayerInEdit;
        this.utils.deleteModel(model,()=>{
            l.gameObjects.remove(it=>it.id==model.id);
            l.updateCloner();
            this.editData.game.repository.updateObject(l);
            this.restResource.save(l);
        });
    }
}
