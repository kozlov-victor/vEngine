

import editData from 'app/providers/editData';
import restResource from 'app/providers/rest/resource';
import i18n from 'app/providers/i18n';
import restFileSystem from 'app/providers/rest/fileSystem';
import utils from 'app/providers/utils';

import Layer from  'coreEngine/src/model/generic/layer';


export default RF.registerComponent('app-layer-dialog', {
    template: {
        type: 'string',
        value: require('./layerDialog.html')
    },
    form:{valid: ()=>{return true;}},
    editData,
    i18n:i18n.getAll(),

    async createOrEditLayer(layer,scene){

        let resp = await restResource.save(layer);
        if (resp.created) {
            layer.id = resp.id;
            scene.layers.push(layer);
            editData.game._repository.addObject(layer);
            scene.updateCloner();
            editData.game._repository.updateObject(scene);
            await restResource.save(scene);
        } else {
            layer.updateCloner();
        }
        RF.getComponentById('layerModal').close();
    },
    deleteLayer: function(l){

    }
});