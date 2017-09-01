

import editData from 'app/providers/editData';
import restResource from 'app/providers/rest/resource';
import i18n from 'app/providers/i18n';
import restFileSystem from 'app/providers/rest/fileSystem';
import utils from 'app/providers/utils';


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
        this._file = null;
        if (editData.currSpriteSheetInEdit.id)
            this.spriteSheetUrl =
                `${editData.projectName}/${editData.currSpriteSheetInEdit.resourcePath}?${Math.random()}`;
        else this.spriteSheetUrl = '';
        this.refreshNumOfCells();
        RF.getComponentById('spriteSheetModal').open();
    },
    onFilePicked(src,file,name,ext){
        if (!editData.currSpriteSheetInEdit.name) {
            editData.currSpriteSheetInEdit.name = name;
        }

        this._file = file;
        this.spriteSheetUrl = src;
        editData.currSpriteSheetInEdit._lastPath = this.editData.currSpriteSheetInEdit.resourcePath;
        editData.currSpriteSheetInEdit.resourcePath =
            `resources/${editData.currSpriteSheetInEdit.name}.${ext}`;
        if (editData.currSpriteSheetInEdit._lastPath == editData.currSpriteSheetInEdit.resourcePath)
            editData.currSpriteSheetInEdit._lastPath = null;

        let img = new Image();
        img.onload =()=> {
            editData.currSpriteSheetInEdit.width = img.width;
            editData.currSpriteSheetInEdit.height = img.height;
            editData.currSpriteSheetInEdit.revalidate();
            RF.digest();
        };
        img.src = src;
    },
    refreshNumOfCells() {
        this.numOfSpriteSheetCells =
            editData && editData.currSpriteSheetInEdit &&
            editData.currSpriteSheetInEdit.numOfFramesH*
            editData.currSpriteSheetInEdit.numOfFramesV;
        editData.currSpriteSheetInEdit.revalidate();
    },
    revalidate(){
        editData.currSpriteSheetInEdit.revalidate();
    },
    async createOrEditSpriteSheet(model){

        if (this._file) await restFileSystem.uploadFile(
            this._file,
            {path:editData.currSpriteSheetInEdit.resourcePath}
        );
        if (this.editData.currSpriteSheetInEdit._lastPath) {
            await restFileSystem.removeFile(editData.currSpriteSheetInEdit._lastPath);
        }
        let resp = await restResource.save(model);
        if (resp.created) {
            model.id = resp.id;
            editData.game._repository.addObject(model);
        } else if (resp.updated) {
            model.updateCloner();
        }
        RF.getComponentById('spriteSheetModal').close();
    }
});