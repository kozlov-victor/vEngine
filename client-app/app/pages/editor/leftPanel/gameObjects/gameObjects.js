

import i18n from 'app/providers/i18n';
import editData from 'app/providers/editData';
import utils from 'app/providers/utils';
import 'app/pages/editor/leftPanel/_gameObjectRow/gameObjectRow';
import restFileSystem from 'app/providers/rest/fileSystem';

import GameObjectProto from 'coreEngine/src/model/generic/gameObjectProto';

const fixGameObject = g=>{ // todo remove
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
        this.editData.currGameObjectInEdit = new GameObjectProto().clone();
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
            restFileSystem.removeFile(`script/gameObjectProto/${model.name}.js`);
        });
    }
});
