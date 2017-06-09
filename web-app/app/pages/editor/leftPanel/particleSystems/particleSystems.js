
import editData from 'providers/editData';
import utils from 'providers/utils';
import i18n from 'providers/i18n';
import particleSystemDialog from 'pages/editor/dialogs/particleSystemDialog/particleSystemDialog';

const ParticleSystem = _require('particleSystem');


export default RF.registerComponent('app-particle-systems', {
    template: {
        type:'string',
        value: require('./particleSystems.html')
    },
    editData,
    i18n:i18n.getAll(),
    createParticleSystem: function(){
        this.editData.currParticleSystemInEdit =
            new ParticleSystem(new ParticleSystem().toJSON());
        let go = this.editData.gameObjectList.get(0);

        if (!go) {
            alertEx(this.i18n.noGameObject);
            return;
        }

        this.editData.currParticleSystemInEdit.gameObject = go.clone();
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