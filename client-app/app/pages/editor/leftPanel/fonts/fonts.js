
import restFileSystem from 'app/providers/rest/fileSystem';
import i18n from 'app/providers/i18n';
import editData from 'app/providers/editData';
import utils from 'app/providers/utils';

import Font from 'coreEngine/src/model/generic/font';

export default RF.registerComponent('app-fonts', {
    template: {
        type: 'string',
        value: require('./fonts.html')
    },
    editData,
    i18n: i18n.getAll(),

    createFont: function(){
        this.editData.currFontInEdit = new Font(new Font().toJSON());
        RF.getComponentById('fontDialog').open();
    },
    editFont: function(fnt){
        this.editData.currFontInEdit = fnt.clone();
        RF.getComponentById('fontDialog').open();
    },
    deleteFont: function(model){
        utils.deleteModel(model,()=>{
            restFileSystem.removeFile(`font/${model.name}.png`);
        });
    }
});