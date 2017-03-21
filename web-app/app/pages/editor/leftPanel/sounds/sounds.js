
const utils = require('providers/utils');
const Sound = _require('sound');
const soundDialog = require('../../dialogs/soundDialog/soundDialog');
const restResource = require('providers/rest/resource');
const restFileSystem = require('providers/rest/fileSystem');

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
        deleteSound: function(model){
            utils.deleteModel(model,()=>{
                restFileSystem.removeFile(model.resourcePath.replace('resources/',''));
            });
        }
    }
});