var resource = require('providers/resource');
var sceneDialog = require('../../dialogs/sceneDialog/sceneDialog');
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
            console.log('deleteScene invoked',scene);
        },
        createLayer: function(){
            console.log('createLayer invoked');
        },
        editLayer: function(scene){
            console.log('editLayer invoked',scene);
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
