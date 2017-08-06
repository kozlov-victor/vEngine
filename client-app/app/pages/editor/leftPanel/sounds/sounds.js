

import editData from 'providers/editData';
import utils from 'providers/utils';
import i18n from 'providers/i18n';
import restFileSystem from 'providers/rest/fileSystem';

const Sound = _require('sound');

export default RF.registerComponent('app-sounds', {
    template: {
        type:'string',
        value: require('./sounds.html')
    },
    editData,
    i18n: i18n.getAll(),
    createSound: function(){
        this.editData.currSoundInEdit = new Sound(new Sound().toJSON());
        RF.getComponentById('soundDialog').open();
    },
    editSound: function(sound){
        this.editData.currSoundInEdit = sound.clone();
        RF.getComponentById('soundDialog').open();
    },
    deleteSound: function(model){
        utils.deleteModel(model,()=>{
            restFileSystem.removeFile(model.resourcePath.replace('resources/',''));
        });
    }
});