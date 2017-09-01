


import editData from 'app/providers/editData';
import restResource from 'app/providers/rest/resource';
import i18n from 'app/providers/i18n';
import restFileSystem from 'app/providers/rest/fileSystem';


export default RF.registerComponent('app-sound-dialog', {
    template: {
        type:'string',
        value: require('./soundDialog.html')
    },
    form:{valid: ()=>{return true;}},
    editData,
    i18n: i18n.getAll(),
    soundUrl:'',
    _file: null,

    open(){
        if (editData.currSoundInEdit.id)
            this.soundUrl =
                `${editData.projectName}/${editData.currSoundInEdit.resourcePath}?${Math.random()}`;
        else this.soundUrl = '';
        this._file = null;
        RF.getComponentById('soundModal').open();
    },
    onFilePicked(src,file,name,ext){
        this._file = file;
        this.soundUrl = src;
        this.editData.currSoundInEdit._lastPath = this.editData.currSoundInEdit.resourcePath;
        this.editData.currSoundInEdit.resourcePath = `resources/${editData.currSoundInEdit.name}.${ext}`;
        if (this.editData.currSoundInEdit._lastPath == this.editData.currSoundInEdit.resourcePath)
            this.editData.currSoundInEdit._lastPath = null;
        if (!this.editData.currSoundInEdit.name) {
            this.editData.currSoundInEdit.name = name;
        }
    },
    async createOrEditSound(model){
        if (this._file) {
            await restFileSystem.uploadFile(
                this._file,
                {path:editData.currSoundInEdit.resourcePath}
            );
        }
        if (this.editData.currSoundInEdit._lastPath) {
            await restFileSystem.removeFile(this.editData.currSoundInEdit._lastPath);
        }
        let resp = await restResource.save(model);
        if (resp.created) {
            model.id = resp.id;
            editData.game._repository.addObject(model);
        } else if (resp.updated) {
            model.updateCloner();
        }
        RF.getComponentById('soundModal').close();
    }
});