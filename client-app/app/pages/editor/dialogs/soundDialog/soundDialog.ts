import BaseComponent from "../../../../baseComponent";

declare const RF;



@RF.decorateComponent({
    name: 'app-sound-dialog',
    template: require('./soundDialog.html')
})
export default class SoundDialog extends BaseComponent {

    soundUrl = '';
    _file = null;

    constructor(){
        super();
    }



    open(){
        if (this.editData.currSoundInEdit.id)
            this.soundUrl =
                `${this.editData.projectName}/${this.editData.currSoundInEdit.resourcePath}?${Math.random()}`;
        else this.soundUrl = '';
        this._file = null;
        RF.getComponentById('soundModal').open();
    }
    onFilePicked(src,file,name,ext){
        this._file = file;
        this.soundUrl = src;
        this.editData.currSoundInEdit._lastPath = this.editData.currSoundInEdit.resourcePath;
        this.editData.currSoundInEdit.resourcePath = `resources/${this.editData.currSoundInEdit.name}.${ext}`;
        if (this.editData.currSoundInEdit._lastPath == this.editData.currSoundInEdit.resourcePath)
            this.editData.currSoundInEdit._lastPath = null;
        if (!this.editData.currSoundInEdit.name) {
            this.editData.currSoundInEdit.name = name;
        }
    }
    async createOrEditSound(model){
        if (this._file) {
            await this.restFileSystem.uploadFile(
                this._file,
                {path:this.editData.currSoundInEdit.resourcePath}
            );
        }
        if (this.editData.currSoundInEdit._lastPath) {
            await this.restFileSystem.removeFile(this.editData.currSoundInEdit._lastPath);
        }
        let resp = await this.restResource.save(model);
        if (resp.created) {
            model.id = resp.id;
            this.editData.game.repository.addObject(model);
        } else if (resp.updated) {
            model.updateCloner();
            this.editData.game.repository.updateObject(model);
        }
        RF.getComponentById('soundModal').close();
    }
}