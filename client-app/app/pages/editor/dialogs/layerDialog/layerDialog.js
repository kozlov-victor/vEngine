/*global RF:true*/

import BaseComponent from 'app/baseComponent'

@RF.decorateComponent({
    name: 'app-layer-dialog',
    template: require('./layerDialog.html')
})
export default class LayerDialog extends BaseComponent {
    constructor(){
        super();
    }
    async createOrEditLayer(layer,scene){

        let resp = await this.restResource.save(layer);
        if (resp.created) {
            layer.id = resp.id;
            scene.layers.push(layer);
            this.editData.game.repository.addObject(layer);
            scene.updateCloner();
            this.editData.game.repository.updateObject(scene);
            await this.restResource.save(scene);
        } else {
            layer.updateCloner();
        }
        RF.getComponentById('layerModal').close();
    }

    deleteLayer(l){

    }
}