

import editData from 'app/providers/editData';
import restResource from 'app/providers/rest/resource';
import i18n from 'app/providers/i18n';
import restFileSystem from 'app/providers/rest/fileSystem';
import utils from 'app/providers/utils';

import repository from 'coreEngine/src/engine/repository';


export default RF.registerComponent('app-sprite-sheet-dialog', {
    template: {
        type: 'string',
        value: require('./spriteSheetDialog.html')
    },
    i18n: i18n.getAll(),
    utils,
    editData,
    form:{valid: ()=>{return true;}},
    spriteSheetUrl:'',
    _file: '',
    numOfSpriteSheetCells: 0,
    open(){
        if (editData.currSpriteSheetInEdit.id)
            this.spriteSheetUrl =
                editData.projectName + '/' +
                editData.currSpriteSheetInEdit.resourcePath + '?' + Math.random();
        else this.spriteSheetUrl = '';
        this.refreshNumOfCells();
        RF.getComponentById('spriteSheetModal').open();
    },
    onFilePicked(src,file,name){
        this._file = file;
        this.spriteSheetUrl = src;
        this.editData.currSpriteSheetInEdit.resourcePath = 'resources/'+file.name;
        if (!this.editData.currSpriteSheetInEdit.name) {
            this.editData.currSpriteSheetInEdit.name = name;
        }
        let img = new Image();
        img.onload =()=> {
            this.editData.currSpriteSheetInEdit.width = img.width;
            this.editData.currSpriteSheetInEdit.height = img.height;
            this.editData.currSpriteSheetInEdit.calcFrameSize();
            RF.digest();
        };
        img.src = src;
    },
    refreshNumOfCells() {
        this.numOfSpriteSheetCells =
            this.editData && this.editData.currSpriteSheetInEdit &&
            this.editData.currSpriteSheetInEdit.numOfFramesH*
            this.editData.currSpriteSheetInEdit.numOfFramesV;
        this.editData.currSpriteSheetInEdit.calcFrameSize();
    },
    async createOrEditSpriteSheet(model){
        let self = this;

        if (self._file) await restFileSystem.uploadFile(
            self._file,
            {type:model.type}
        );
        let resp = await restResource.save(model);
        if (resp.created) {
            model.id = resp.id;
            repository.addObject(model);
        } else if (resp.updated) {
            model.updateCloner();
        }
        RF.getComponentById('spriteSheetModal').close();
        RF.digest();
    }
});