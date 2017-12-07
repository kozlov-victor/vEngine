/*global RF:true*/
import BaseComponent from 'app/baseComponent'

import Font from 'engine/model/generic/font';

@RF.decorateComponent({
    name: 'app-fonts',
    template: require('./fonts.html')
})
export default class Fonts extends BaseComponent {
    constructor(){
        super();
    }
    createFont(){
        this.editData.currFontInEdit = new Font(this.editData.game);
        RF.getComponentById('fontDialog').open();
    }
    editFont(fnt){
        this.editData.currFontInEdit = fnt.clone();
        RF.getComponentById('fontDialog').open();
    }
    async deleteFont(model){
        await this.utils.deleteModel(model);
        this.restFileSystem.removeFile(model.resourcePath);
    }
}