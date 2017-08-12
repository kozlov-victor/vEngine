

import restFileSystem from 'app/providers/rest/fileSystem';
import restResource from 'app/providers/rest/resource';
import i18n from 'app/providers/i18n';
import editData from 'app/providers/editData';
import utils from 'app/providers/utils';

import Layer from 'coreEngine/src/model/generic/layer';
import Scene from 'coreEngine/src/model/generic/scene';
import repository from 'coreEngine/src/engine/repository';

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
        this.editData.currSceneInEdit = new Scene(new Scene().toJSON());
        RF.getComponentById('sceneModal').open();
    },
    editScene: function(scene){
        this.editData.currSceneInEdit = scene.clone();
        RF.getComponentById('sceneModal').open();
    },
    deleteScene: function(scene){
        if (scene.layers && scene.layers.size()>0) {
            alertEx(this.i18n.canNotDelete(scene,scene.layers.rs));
            return;
        }
        utils.deleteModel(scene,()=>{
            restFileSystem.removeFile(`script/scene/${scene.name}.js`);
        });
    },
    createLayer: function(scene){
        this.editData.currLayerInEdit = new Layer(new Layer().clone());
        this.editData.currLayerInEdit._scene = scene;
        RF.getComponentById('layerModal').open();
    },
    editLayer: function(layer,scene){
        this.editData.currLayerInEdit = new Layer(layer.clone());
        this.editData.currLayerInEdit._scene = scene;
        RF.getComponentById('layerModal').open();
    },
    editScript: function(scene){
        utils.openEditor(scene.type + '/' +scene.name + '.js');
    },
    deleteLayer: function(layer,scene){
        if (layer.gameObjects.size())
            return alertEx(this.i18n.canNotDelete(layer,layer.gameObjects.rs));
        utils.deleteModel(layer,()=>{
            scene.layers.remove({id:layer.id});
            scene.updateCloner();
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
        utils.deleteModel(model,()=>{
            editData.currLayerInEdit.gameObjects.remove({id:model.id});
        });
    },
    onGameObjectClick: function(go){
        console.log(go);
    }
});
