var resource = require('providers/resource');
var utils = require('providers/utils');
var sceneDialog = require('../../dialogs/sceneDialog/sceneDialog');
var layerDialog = require('../../dialogs/layerDialog/layerDialog');
var Layer = _require('layer');
var Scene = _require('scene');

module.exports = Vue.component('app-scenes', {
    props: [],
    template: require('./scenes.html'),
    data: function(){
        return {
            editData: require('providers/editData'),
            i18n: require('providers/i18n').getAll()
        }
    },
    components: {
        appGameObjectRow: require('../_gameObjectRow/gameObjectRow')
    },
    methods: {
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
    }
});
