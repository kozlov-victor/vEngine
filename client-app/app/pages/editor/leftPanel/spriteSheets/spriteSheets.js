
import editData from 'providers/editData';
import utils from 'providers/utils';
import i18n from 'providers/i18n';
import restFileSystem from 'providers/rest/fileSystem';


const SpriteSheet = _require('spriteSheet');

export default RF.registerComponent('app-sprite-sheets', {
    template: {
        type: 'string',
        value: require('./spriteSheets.html')
    },
    editData,
    i18n: i18n.getAll(),
    createSpriteSheet: function(){
        this.editData.currSpriteSheetInEdit = new SpriteSheet(new SpriteSheet().toJSON());
        RF.getComponentById('spriteSheetDialog').open();
    },
    editSpriteSheet: function(sprSh){
        this.editData.currSpriteSheetInEdit = sprSh.clone();
        RF.getComponentById('spriteSheetDialog').open();
    },
    deleteSpriteSheet: function(model){
        let hasDepends = this.editData.gameObjectList.filter((it)=>{return it.spriteSheet.id==model.id}).size()>0;
        if (hasDepends) {
            window.alertEx(this.i18n.canNotDelete(model));
            return;
        }
        utils.deleteModel(model);
    }
});
