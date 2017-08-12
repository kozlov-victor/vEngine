


import editData from 'app/providers/editData';
import restResource from 'app/providers/rest/resource';
import i18n from 'app/providers/i18n';
import restFileSystem from 'app/providers/rest/fileSystem';


import repository from 'coreEngine/src/engine/repository';

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

    open(){
        if (editData.currSoundInEdit.id)
            this.soundUrl =
                editData.projectName + '/' +
                editData.currSoundInEdit.resourcePath + '?' + Math.random();
        else this.soundUrl = '';
        RF.getComponentById('soundModal').open();
    },
    onFilePicked(src,file,name){
        this.soundUrl = src;
        this._file = file;

        this._file = file;
        this.soundUrl = src;
        this.editData.currSoundInEdit.resourcePath = 'resources/'+file.name;
        if (!this.editData.currSoundInEdit.name) {
            this.editData.currSoundInEdit.name = name;
        }
    },
    async createOrEditSound(model){
        if (this._file) await restFileSystem.uploadFile(
            this._file,
            {type:model.type}
        );
        let resp = await restResource.save(model);
        if (resp.created) {
            model.id = resp.id;
            repository.addObject(model);
        } else if (resp.updated) {
            model.updateCloner();
        }
        RF.getComponentById('soundModal').close();
    }
});