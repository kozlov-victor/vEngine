/*global RF:true*/
import BaseComponent from 'app/baseComponent'

@RF.decorateComponent({
    name: 'app-common-behaviour-dialog',
    template: require('./commonBehaviourDialog.html')
})
export default class CommonBehaviourDialog extends BaseComponent {
    constructor(){
        super();
    }
    async createOrEditCommonBehaviour(){
        let editData = this.editData;
        let cb = editData.currCommonBehaviourInEdit;
        delete cb.description;
        let resp = await this.restResource.save(cb);
        if (resp.created) {
            cb.id = resp.id;
            editData.game.repository.addObject(cb);
            editData.currGameObjectInEdit.commonBehaviour.push(cb);
        } else {
            let editedCb = editData.currGameObjectInEdit.commonBehaviour.find(it=>it.id==cb.id);
            editedCb.fromJSON(cb.toJSON());
            cb.updateCloner();
            editData.game.repository.updateObject(cb);
        }
        await this.restResource.save(editData.currGameObjectInEdit);
        editData.currGameObjectInEdit.updateCloner();
        RF.getComponentById('commonBehaviourModal').close();
    }
}