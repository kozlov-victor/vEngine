

import restResource from 'providers/rest/resource';
import i18n from 'providers/i18n';
import editData from 'providers/editData';

const Layer = _require('layer');
const Scene = _require('scene');

export default RF.registerComponent('app-scenes', {
    template: {
        value: require('./scenes.html'),
        type: 'string'
    },
    i18n: i18n.getAll(),
    editData,

    createScene: function(){
        this.editData.currSceneInEdit = new Scene(new Scene().toJSON());
        sceneDialog.instance.open();
    },
    editScene: function(scene){
        this.editData.currSceneInEdit = scene.clone();
        sceneDialog.instance.open();
    },
    deleteScene: function(scene){
        window.confirmEx(
            this.i18n.confirmQuestion,
            function(){
                resource.deleteResource(scene);
            }
        );
    },
    createLayer: function(scene){
        this.editData.currLayerInEdit = new Layer(new Layer().clone());
        this.editData.currLayerInEdit._scene = scene;
        layerDialog.instance.open();
    },
    editLayer: function(layer,scene){
        this.editData.currLayerInEdit = layer.clone();
        this.editData.currLayerInEdit._scene = scene;
        layerDialog.instance.open();
    },
    editScript: function(scene){
        utils.openEditor(scene.type + '/' +scene.name + '.js');
    },
    deleteLayer: function(scene){
        console.log('delete l invoked',scene);
    },
    createGameObject: function(){
        console.log('create go invoked');
    },
    editGameObject: function(scene){
        console.log('edit go invoked',scene);
    },
    deleteGameObject: function(scene){
        console.log('delete go invoked',scene);
    },
    onGameObjectClick: function(go){
        console.log(go);
    }
});
