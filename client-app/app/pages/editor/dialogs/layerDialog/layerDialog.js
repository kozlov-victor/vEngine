

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

    createOrEditLayer: function(layer,scene){

        if (!scene.layers) scene.layers = new collections.List(); // todo

        restResource.
        save(layer).
        then(resp=>{
            if (resp.created) {
                layer.id = resp.id;
                scene.layers.add(layer);
                return restResource.save(scene);
            }
        }).
        then(()=>{
            layer.updateCloner();
            scene.updateCloner();
            RF.getComponentById('layerModal').close();
            RF.digest();
        }).
        catch(window.catchPromise);
    },
    deleteLayer: function(l){

    }
});