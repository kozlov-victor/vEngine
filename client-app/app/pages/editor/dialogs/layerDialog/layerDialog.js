

import editData from 'providers/editData';
import restResource from 'providers/rest/resource';
import i18n from 'providers/i18n';
import restFileSystem from 'providers/rest/fileSystem';
import utils from 'providers/utils';

let Layer = _require('layer');
let collections = _require('collections');

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