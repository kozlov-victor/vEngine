
var utils = require('providers/utils');

var gameObjectDialog = require('../../dialogs/gameObjectDialog/gameObjectDialog');
var GameObject = _require('gameObject');
var resource = require('providers/resource');

module.exports = Vue.component('app-game-objects', {
    props: [],
    template: require('./gameObjects.html'),
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
        createGameObject: function(){
            this.editData.currGameObjectInEdit = new GameObject(new GameObject().clone());
            gameObjectDialog.instance.open();
        },
        editGameObjectScript: function(gameObject){
            utils.openEditor(gameObject.type + '/' +gameObject.name + '.js');
        },
        editGameObject: function(go){
            console.log(go.toJSON());
            this.editData.currGameObjectInEdit =  new GameObject(go.toJSON());
            gameObjectDialog.instance.open();
        },
        deleteGameObject: function(g){
            window.confirmEx(
                this.i18n.confirmQuestion,
                function(){
                    resource.deleteResource(g);
                }
            )
        }
    }
});
