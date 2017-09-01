
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
    showPreview(){
        editData.currParticleSystemInEdit.revalidate();
        RF.getComponentById('particleSystemPreviewDialog').open();
    },
    onGameObjectSelected(go){
        if (!editData.currParticleSystemInEdit.name) editData.currParticleSystemInEdit.name =
            `${go.name}ParticleSystem`;
    },
    async createOrEditPs(model){
        let resp = await restResource.save(model);
        if (resp.created) {
            model.id = resp.id;
            editData.game._repository.addObject(model);
        } else if (resp.updated) {
            model.updateCloner();
        }
        RF.getComponentById('particleSystemModal').close();
    }
});