
import editData from 'providers/editData';
import restResource from 'providers/rest/resource';
import i18n from 'providers/i18n';
import utils from 'providers/utils';

export default RF.registerComponent('app-common-behaviour-dialog', {
    template: {
        type: 'string',
        value: require('./commonBehaviourDialog.html')
    },
    i18n: i18n.getAll(),
    utils,
    editData,
    form:{valid: ()=>{return true;}},

    createOrEditCommonBehaviour:function(){
        let cb = editData.currCommonBehaviourInEdit;
        restResource.
        save(cb).
        then((resp)=>{
            if (resp.created) {
                cb.id = resp.id;
                editData.commonBehaviourList.add(cb);
                editData.currGameObjectInEdit.commonBehaviour.add(cb);
                return restResource.save(editData.currGameObjectInEdit)
            }
        }).
        then(function(){
            editData.currGameObjectInEdit.updateCloner();
            RF.getComponentById('commonBehaviourModal').close();
            RF.digest();
        }).
        catch(window.catchPromise)
    }
});