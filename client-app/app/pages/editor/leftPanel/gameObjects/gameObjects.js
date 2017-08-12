

import i18n from 'app/providers/i18n';
import editData from 'app/providers/editData';
import utils from 'app/providers/utils';
import 'app/pages/editor/leftPanel/_gameObjectRow/gameObjectRow';
import restFileSystem from 'app/providers/rest/fileSystem';

import GameObjectProto from 'coreEngine/src/model/generic/gameObjectProto';
import repository from 'coreEngine/src/engine/repository';


export default RF.registerComponent('app-game-objects', {
    template: {
        type: 'string',
        value: require('./gameObjects.html')
    },
    editData,
    repository,
    i18n: i18n.getAll(),

    createGameObject: function(){
        this.editData.currGameObjectInEdit = new GameObjectProto();
        RF.getComponentById('gameObjectModal').open();
    },
    editGameObjectScript: function(gameObject){
        utils.openEditor(`script/${gameObject.name}.js`);
    },
    editGameObject: function(go){
        this.editData.currGameObjectInEdit =  go.clone();
        RF.getComponentById('gameObjectModal').open();
    },
    deleteGameObject: function(model){
        utils.deleteModel(model,()=>{
            restFileSystem.removeFile(`script/${model.name}.js`);
        });
    }
});
