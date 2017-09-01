
import restResource from 'app/providers/rest/resource';
import i18n from 'app/providers/i18n';
import editData from 'app/providers/editData';
import utils from 'app/providers/utils';

export default RF.registerComponent('app-info-curr-scene-game-object', {
    template: {
        value: require('./sceneGameObject.html'),
        type: 'string'
    },
    form:{valid: ()=>{return true;}},
    editData,
    i18n:i18n.getAll(),
    utils,
    editGameObject: function(){
        let model = editData.currSceneGameObjectInEdit;
        model.updateCloner();
        editData.game._repository.updateObject(model);
        restResource.save(model);
    },
});