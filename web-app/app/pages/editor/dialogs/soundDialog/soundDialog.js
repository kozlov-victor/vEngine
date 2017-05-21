


import editData from 'providers/editData';
import restResource from 'providers/rest/resource';
import i18n from 'providers/i18n';
import restFileSystem from 'providers/rest/fileSystem';

export default RF.registerComponent('app-sound-dialog', {
    template: {
        type:'string',
        value: require('./soundDialog.html')
    },
    form:{valid: ()=>{return true;}},
    editData,
    i18n: i18n.getAll(),
    soundUrl:'',
    _file: '',

    open: function(){
        if (editData.currSoundInEdit.id)
            this.soundUrl =
                editData.projectName + '/' +
                editData.currSoundInEdit.resourcePath + '?' + Math.random();
        else this.soundUrl = '';
        RF.getComponentById('soundModal').open();
    },
    onFilePicked: function(src,file){
        this.soundUrl = src;
        this._file = file;

        let self = this;
        self._file = file;
        self.soundUrl = src;
        self.editData.currSoundInEdit.resourcePath = 'resources/sound/'+file.name;
        if (!self.editData.currSoundInEdit.name) {
            self.editData.currSoundInEdit.name = name;
        }
    },
    createOrEditSound: function(model){
        let self = this;
        Promise.resolve().
        then(()=>{
            if (self._file) {
                return restFileSystem.
                uploadFile(
                    self._file,
                    {type:model.type}
                );
            } else return Promise.resolve();
        }).
        then(()=>{
            return restResource.save(model);
        }).
        then((resp)=>{
            if (resp.created) {
                model.id = resp.id;
                editData.soundList.add(model);
            } else if (resp.updated) {
                model.updateCloner();
            }
            RF.getComponentById('soundModal').close();
            RF.digest();
        });
    }
});