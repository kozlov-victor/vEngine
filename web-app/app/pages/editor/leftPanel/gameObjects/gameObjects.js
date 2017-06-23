

import i18n from 'providers/i18n';
import editData from 'providers/editData';
import utils from 'providers/utils';
import 'pages/editor/leftPanel/_gameObjectRow/gameObjectRow';
import restFileSystem from 'providers/rest/fileSystem';

const GameObject = _require('gameObject');
const collections = _require('collections');

const fixGameObject = g=>{
    if (!g.commonBehaviour || g.commonBehaviour.splice)
        g.commonBehaviour = new collections.List();
    if (!g.frameAnimations || g.frameAnimations.splice)
        g.frameAnimations = new collections.List();
};

export default RF.registerComponent('app-game-objects', {
    template: {
        type: 'string',
        value: require('./gameObjects.html')
    },
    editData,
    i18n: i18n.getAll(),

    createGameObject: function(){
        this.editData.currGameObjectInEdit = new GameObject().clone();
        fixGameObject(this.editData.currGameObjectInEdit);
        RF.getComponentById('gameObjectModal').open();
    },
    editGameObjectScript: function(gameObject){
        utils.openEditor(`${gameObject.type}/${gameObject.name}.js`);
    },
    editGameObject: function(go){
        this.editData.currGameObjectInEdit =  go.clone();
        fixGameObject(this.editData.currGameObjectInEdit);
        RF.getComponentById('gameObjectModal').open();
    },
    deleteGameObject: function(model){
        utils.deleteModel(model,()=>{
            restFileSystem.removeFile(`script/gameObject/${model.name}.js`);
        });
    }
});
