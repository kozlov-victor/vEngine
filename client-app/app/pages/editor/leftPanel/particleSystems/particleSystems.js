
import editData from 'app/providers/editData';
import utils from 'app/providers/utils';
import i18n from 'app/providers/i18n';
import  'app/pages/editor/dialogs/particleSystemDialog/particleSystemDialog';


import ParticleSystem from 'coreEngine/src/model/generic/particleSystem';
import repository from 'coreEngine/src/engine/repository';

export default RF.registerComponent('app-particle-systems', {
    template: {
        type:'string',
        value: require('./particleSystems.html')
    },
    editData,
    repository,
    i18n:i18n.getAll(),
    createParticleSystem: function(){
        this.editData.currParticleSystemInEdit =
            new ParticleSystem();
        let go = this.repository.getArray('GameObjectProto')[0];

        if (!go) {
            alertEx(this.i18n.noGameObject);
            return;
        }

        RF.getComponentById('particleSystemModal').open();
    },
    editParticleSystem: function(ps){
        this.editData.currParticleSystemInEdit = ps.clone();
        RF.getComponentById('particleSystemModal').open();
    },
    deleteParticleSystem: function(model){
        utils.deleteModel(model);
    }
});