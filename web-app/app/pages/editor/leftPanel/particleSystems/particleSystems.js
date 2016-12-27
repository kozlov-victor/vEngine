
var particleSystemDialog = require('../../dialogs/particleSystemDialog/particleSystemDialog');
var ParticleSystem = _require('particleSystem');
var resource = require('providers/resource');

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
            var ps = this.editData.currParticleSystemInEdit;
            var firstInList = this.editData.gameObjectList.get(0);
            if (!firstInList) return;

            Vue.set(ps,'gameObjectId',firstInList.id);
            Vue.set(ps,'_gameObject',firstInList);

            particleSystemDialog.instance.open();
        },
        editParticleSystem: function(ps){
            this.editData.currParticleSystemInEdit = ps.clone();
            particleSystemDialog.instance.open();
        },
        deleteParticleSystem: function(ps){
            window.confirmEx(
                this.i18n.confirmQuestion,
                function(){
                    resource.deleteResource(ps);
                }
            )
        }
    }
});