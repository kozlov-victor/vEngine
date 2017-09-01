

import editData from 'app/providers/editData';
import utils from 'app/providers/utils';
import i18n from 'app/providers/i18n';
import restFileSystem from 'app/providers/rest/fileSystem';

import Sound from 'coreEngine/src/model/generic/sound';


export default RF.registerComponent('app-sounds', {
    template: {
        type:'string',
        value: require('./sounds.html')
    },
    editData,
    i18n: i18n.getAll(),
    createSound: function(){
        this.editData.currSoundInEdit = new Sound(editData.game);
        RF.getComponentById('soundDialog').open();
    },
    editSound: function(sound){
        this.editData.currSoundInEdit = sound.clone();
        RF.getComponentById('soundDialog').open();
    },
    deleteSound: function(model){
        utils.deleteModel(model,()=>{
            restFileSystem.removeFile(model.resourcePath);
        });
    }
});