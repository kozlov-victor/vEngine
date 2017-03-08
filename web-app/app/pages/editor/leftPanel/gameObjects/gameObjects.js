
const utils = require('providers/utils');

const gameObjectDialog = require('../../dialogs/gameObjectDialog/gameObjectDialog');
const GameObject = _require('gameObject');
const restResource = require('providers/rest/resource');

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
            utils.openEditor(`${gameObject.type}/${gameObject.name}.js`);
        },
        editGameObject: function(go){
            this.editData.currGameObjectInEdit =  go.clone();
            gameObjectDialog.instance.open();
        },
        deleteGameObject: function(model){
            utils.deleteModel(model);
        }
    }
});
