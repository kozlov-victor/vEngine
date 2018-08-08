

declare const RF;

import {BaseComponent} from "../../../../baseComponent";
import './spriteSheets.scss'
import {SpriteSheet} from "../../../../../engine/model/impl/spriteSheet";
import {alertEx} from "../../../../providers/userDefinedFns";

@RF.decorateComponent({
    name: 'app-sprite-sheets',
    template: require('./spriteSheets.html')
})
export class SpriteSheets extends BaseComponent {
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
    async deleteSpriteSheet(model){
        let hasDepends = this.editData.game.repository.getArray('GameObject').filter(it=>it.spriteSheet.id==model.id).length>0;
        if (hasDepends) {
            alertEx(this.i18n.canNotDelete(model));
            return;
        }
        let res = await this.utils.deleteModel(model);
        if (!res) return;
        this.restFileSystem.removeFile(model.resourcePath);
    }

}
