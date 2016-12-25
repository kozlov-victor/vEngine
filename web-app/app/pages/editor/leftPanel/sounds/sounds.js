
var Sound = _require('sound');
var soundDialog = require('../../dialogs/soundDialog/soundDialog');
var resource = require('providers/resource');

module.exports = Vue.component('app-sounds', {
    props: [],
    template: require('./sounds.html'),
    data: function () {
        return {
            editData: require('providers/editData'),
            i18n: require('providers/i18n').getAll()
        }
    },
    components: {

    },
    methods: {
        createSound: function(){
            this.editData.currSoundInEdit = new Sound(new Sound().toJSON());
            soundDialog.instance.open();
        },
        editSound: function(sound){
            this.editData.currSoundInEdit = sound.clone();
            soundDialog.instance.open();
        },
        deleteSound: function(sound){
            require('components/confirmDialog/confirmDialog').instance.open(
                this.i18n.confirmQuestion,
                function(){
                    resource.deleteResource(sound);
                }
            );
        }
    }
});