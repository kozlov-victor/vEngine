

import restFileSystem from 'app/providers/rest/fileSystem';
import restResource from 'app/providers/rest/resource';
import i18n from 'app/providers/i18n';
import editData from 'app/providers/editData';
import utils from 'app/providers/utils';

import Layer from 'coreEngine/src/model/generic/layer';
import Scene from 'coreEngine/src/model/generic/scene';

export default RF.registerComponent('app-scenes', {
    template: {
        value: require('./scenes.html'),
        type: 'string'
    },
    i18n: i18n.getAll(),
    editData,

    setCurrentScene(scene){
        editData.currSceneInEdit=scene
    },
    setCurrSceneGameObjectInEdit(gameObject){
        editData.currSceneGameObjectInEdit=gameObject;
    },
    setCurrLayer(layer){
        editData.currLayerInEdit=layer
    },

    createScene: function(){
        this.editData.currSceneInEdit = new Scene(editData.game);
        RF.getComponentById('sceneModal').open();
    },
    editScene: function(scene){
        this.editData.currSceneInEdit = scene.clone();
        RF.getComponentById('sceneModal').open();
    },
    deleteScene: function(scene){
        if (scene.layers && scene.layers.length>0) {
            alertEx(this.i18n.canNotDelete(scene,scene.layers.rs));
            return;
        }
        utils.deleteModel(scene,()=>{
            restFileSystem.removeFile(`scripts/${scene.name}.js`);
        });
    },
    createLayer: function(scene){
        this.editData.currLayerInEdit = new Layer(editData.game);
        this.editData.currLayerInEdit._scene = scene;
        RF.getComponentById('layerModal').open();
    },
    editLayer: function(layer,scene){
        this.editData.currLayerInEdit = new Layer(editData.game);
        this.editData.currLayerInEdit._scene = scene;
        RF.getComponentById('layerModal').open();
    },
    editScript: function(scene){
        utils.openEditor(`scripts/${scene.name}.js`);
    },
    deleteLayer: function(layer,scene){
        if (layer.gameObjects.length)
            return alertEx(this.i18n.canNotDelete(layer,layer.gameObjects));
        utils.deleteModel(layer,()=>{
            scene.layers.remove(it=>it.id==layer.id);
            scene.updateCloner();
            editData.game._repository.updateObject(scene);
            restResource.save(scene);
        });
    },
    createGameObject: function(){
        console.log('create go invoked');
    },
    editGameObject: function(scene){
        console.log('edit go invoked',scene);
    },
    deleteGameObject: function(model){
        let l = editData.currLayerInEdit;
        utils.deleteModel(model,()=>{
            l.gameObjects.remove(it=>it.id==model.id);
            l.updateCloner();
            editData.game._repository.updateObject(l);
            restResource.save(l);
        });
    }
});
