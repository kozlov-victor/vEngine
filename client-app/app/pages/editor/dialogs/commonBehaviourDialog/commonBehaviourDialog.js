
import editData from 'app/providers/editData';
import restResource from 'app/providers/rest/resource';
import i18n from 'app/providers/i18n';
import utils from 'app/providers/utils';

import repository from 'coreEngine/src/engine/repository';

export default RF.registerComponent('app-common-behaviour-dialog', {
    template: {
        type: 'string',
        value: require('./commonBehaviourDialog.html')
    },
    i18n: i18n.getAll(),
    utils,
    editData,
    form:{valid: ()=>{return true;}},

    async createOrEditCommonBehaviour(){
        let cb = editData.currCommonBehaviourInEdit;
        let resp = await restResource.save(cb);
        if (resp.created) {
            cb.id = resp.id;
            repository.addObject(cb);
            editData.currGameObjectInEdit.commonBehaviour.push(cb);
        } else {
            let editedCb = editData.currGameObjectInEdit.commonBehaviour.find(it=>it.id==cb.id);
            editedCb.fromJSON(cb.toJSON());
            cb.updateCloner();
        }
        await restResource.save(editData.currGameObjectInEdit);
        editData.currGameObjectInEdit.updateCloner();
        RF.getComponentById('commonBehaviourModal').close();
    }
});