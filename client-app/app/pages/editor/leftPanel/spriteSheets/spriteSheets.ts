import BaseComponent from "../../../../baseComponent";

declare const RF;

import './spriteSheets.scss'
import SpriteSheet from "../../../../../engine/model/generic/spriteSheet";
import {alertEx} from "../../../../providers/userDefinedFns";

@RF.decorateComponent({
    name: 'app-sprite-sheets',
    template: require('./spriteSheets.html')
})
export default class SpriteSheets extends BaseComponent {
    constructor(){
        super();
    }
    createSpriteSheet(){
        this.editData.currSpriteSheetInEdit = new SpriteSheet(this.editData.game);
        RF.getComponentById('spriteSheetDialog').open();
    }
    editSpriteSheet(sprSh){
        this.editData.currSpriteSheetInEdit = sprSh.clone();
        RF.getComponentById('spriteSheetDialog').open();
    }
    deleteSpriteSheet(model){
        let hasDepends = this.editData.game.repository.getArray('GameObject').filter(it=>it.spriteSheet.id==model.id).length>0;
        if (hasDepends) {
            alertEx(this.i18n.canNotDelete(model));
            return;
        }
        this.utils.deleteModel(model,()=>{
            this.restFileSystem.removeFile(model.resourcePath);
        });
    }

}
