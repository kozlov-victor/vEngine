
const particleSystemDialog = require('../../dialogs/particleSystemDialog/particleSystemDialog');
const ParticleSystem = _require('particleSystem');
const utils = require('providers/utils');

module.exports = Vue.component('app-particle-systems', {
    props: [],
    template: require('./particleSystems.html'),
    data: function () {
        return {
            editData: require('providers/editData'),
            i18n: require('providers/i18n').getAll()
        }
    },
    components: {

    },
    methods: {
        createParticleSystem: function(){

            this.editData.currParticleSystemInEdit =
                new ParticleSystem(new ParticleSystem().toJSON());
            let go = this.editData.gameObjectList.get(0);

            if (!go) {
                alertEx(this.i18n.noGameObject);
                return;
            }

            this.editData.currParticleSystemInEdit.gameObject = go.clone();

            particleSystemDialog.instance.open();
        },
        editParticleSystem: function(ps){
            this.editData.currParticleSystemInEdit = ps.clone();
            particleSystemDialog.instance.open();
        },
        deleteParticleSystem: function(model){
            utils.deleteModel(model);
        }
    }
});