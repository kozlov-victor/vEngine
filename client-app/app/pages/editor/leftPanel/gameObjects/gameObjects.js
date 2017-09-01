

import i18n from 'app/providers/i18n';
import editData from 'app/providers/editData';
import utils from 'app/providers/utils';
import 'app/pages/editor/leftPanel/_gameObjectRow/gameObjectRow';
import restFileSystem from 'app/providers/rest/fileSystem';

import GameObjectProto from 'coreEngine/src/model/generic/gameObjectProto';


export default RF.registerComponent('app-game-objects', {
    template: {
        type: 'string',
        value: require('./gameObjects.html')
    },
    editData,
    i18n: i18n.getAll(),

    createGameObject: function(){
        this.editData.currGameObjectInEdit = new GameObjectProto(editData.game);
        RF.getComponentById('gameObjectModal').open();
    },
    editGameObjectScript: function(model){
        utils.openEditor(`scripts/${model.name}.js`);
    },
    editGameObject: function(go){
        this.editData.currGameObjectInEdit =  go.clone();
        RF.getComponentById('gameObjectModal').open();
    },
    deleteGameObject: function(model){
        let scenesUsed = [];
        editData.gameObject._repository.getArray('Scene').forEach(s=>{
            s.layers.forEach(l=>{
                l.gameObjects.forEach(go=>{
                    if (go.name==model.name) {
                        if (scenesUsed.indexOf(s)==-1) scenesUsed.push(s);
                    }
                });
            });

        });
        if (scenesUsed.length)
            return alertEx(this.i18n.canNotDelete(model,scenesUsed));
        utils.deleteModel(model,()=>{
            restFileSystem.removeFile(`scripts/${model.name}.js`);
        });
    }
});
