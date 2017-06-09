

import editData from 'providers/editData';
import restResource from 'providers/rest/resource';
import i18n from 'providers/i18n';
import restFileSystem from 'providers/rest/fileSystem';
import utils from 'providers/utils';

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
        let self = this;
        self._file = file;
        self.spriteSheetUrl = src;
        self.editData.currSpriteSheetInEdit.resourcePath = 'resources/spriteSheet/'+file.name;
        if (!self.editData.currSpriteSheetInEdit.name) {
            self.editData.currSpriteSheetInEdit.name = name;
        }
        let img = new Image();
        img.onload = function() {
            self.editData.currSpriteSheetInEdit.width = img.width;
            self.editData.currSpriteSheetInEdit.height = img.height;
            self.editData.currSpriteSheetInEdit.calcFrameSize();
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
    createOrEditSpriteSheet(model){
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
                editData[`${model.type}List`].add(model);
            } else if (resp.updated) {
                model.updateCloner();
            }
            RF.getComponentById('spriteSheetModal').close();
            RF.digest();
        });
    }
});