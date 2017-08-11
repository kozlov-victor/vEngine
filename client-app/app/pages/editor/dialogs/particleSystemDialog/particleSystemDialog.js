
import editData from 'app/providers/editData';
import restResource from 'app/providers/rest/resource';
import utils from 'app/providers/utils';
import i18n from 'app/providers/i18n';

import 'app/pages/editor/dialogs/particleSystemPreviewDialog/particleSystemPreviewDialog';

export default RF.registerComponent('app-particle-system-dialog', {
    template: {
        type:'string',
        value:require('./particleSystemDialog.html')
    },
    form: {valid: ()=>{return true}},
    editData,
    utils,
    i18n:i18n.getAll(),
    onGameObjectIdChanged: function(id){
        editData.currParticleSystemInEdit.gameObjectProto =
            editData.gameObjectProtoList.find({id:id}).clone();
    },
    showPreview: function(){
        RF.getComponentById('particleSystemPreviewDialog').open();
    },
    createOrEditPs: function(model){
        let self = this;
        Promise.resolve().
        then(()=>{
            return restResource.save(model);
        }).
        then((resp)=>{
            if (resp.created) {
                model.id = resp.id;
                editData[`${model.type}List`].add(model);
            } else if (resp.updated) {
                model.updateCloner();
            }
            RF.getComponentById('particleSystemModal').close();
            RF.digest();
        });
    }
});