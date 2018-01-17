import BaseComponent from "../../../../baseComponent";

declare const RF;

@RF.decorateComponent({
    name: 'app-particle-system-dialog',
    template: require('./particleSystemDialog.html')
})
export default class ParticleSystemDialog extends BaseComponent{
    constructor(){
        super();
    }
    showPreview(){
        this.editData.currParticleSystemInEdit.revalidate();
        RF.getComponentById('particleSystemPreviewDialog').open();
    }
    onGameObjectSelected(go){
        if (!this.editData.currParticleSystemInEdit.name) this.editData.currParticleSystemInEdit.name =
            `${go.name}ParticleSystem`;
    }

    async createOrEditPs(model){
        let resp = await this.restResource.save(model);
        if (resp.created) {
            model.id = resp.id;
            this.editData.game.repository.addObject(model);
        } else if (resp.updated) {
            model.updateCloner();
        }
        RF.getComponentById('particleSystemModal').close();
    }
}