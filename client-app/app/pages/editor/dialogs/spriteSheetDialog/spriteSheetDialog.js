/*global RF:true*/
/*global Image:true*/

import BaseComponent from 'app/baseComponent'

@RF.decorateComponent({
    name: 'app-sprite-sheet-dialog',
    template: require('./spriteSheetDialog.html')
})
export default class SpriteSheetDialog extends BaseComponent {

    constructor(){
        super();
        this.spriteSheetUrl='';
        this._file='';
        this.numOfSpriteSheetCells=0;
    }


    open(){
        let editData = this.editData;
        this._file = null;
        if (editData.currSpriteSheetInEdit.id)
            this.spriteSheetUrl =
                `${editData.projectName}/${editData.currSpriteSheetInEdit.resourcePath}?${Math.random()}`;
        else this.spriteSheetUrl = '';
        this.refreshNumOfCells();
        RF.getComponentById('spriteSheetModal').open();
    }
    onFilePicked(src,file,name,ext){
        let editData = this.editData;
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
    }
    refreshNumOfCells() {
        let editData = this.editData;
        this.numOfSpriteSheetCells =
            editData && editData.currSpriteSheetInEdit &&
            editData.currSpriteSheetInEdit.numOfFramesH*
            editData.currSpriteSheetInEdit.numOfFramesV;
        editData.currSpriteSheetInEdit.revalidate();
    }
    revalidate(){
        this.editData.currSpriteSheetInEdit.revalidate();
    }
    async createOrEditSpriteSheet(model){

        if (this._file) await this.restFileSystem.uploadFile(
            this._file,
            {path:this.editData.currSpriteSheetInEdit.resourcePath}
        );
        if (this.editData.currSpriteSheetInEdit._lastPath) {
            await this.restFileSystem.removeFile(this.editData.currSpriteSheetInEdit._lastPath);
        }
        let resp = await this.restResource.save(model);
        if (resp.created) {
            model.id = resp.id;
            this.editData.game.repository.addObject(model);
        } else if (resp.updated) {
            model.updateCloner();
            this.editData.game.repository.updateObject(model);
            this.utils.eachGameObject(g=>{
                if (g.spriteSheet.id==model.id) {
                    g.spriteSheet = model;
                    g.revalidate();
                }
            })

        }
        RF.getComponentById('spriteSheetModal').close();
    }
}