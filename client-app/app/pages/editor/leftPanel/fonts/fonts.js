
import restFileSystem from 'app/providers/rest/fileSystem';
import i18n from 'app/providers/i18n';
import editData from 'app/providers/editData';
import utils from 'app/providers/utils';

import Font from 'coreEngine/src/model/generic/font';
import repository from 'coreEngine/src/engine/repository';

export default RF.registerComponent('app-fonts', {
    template: {
        type: 'string',
        value: require('./fonts.html')
    },
    editData,
    repository,
    i18n: i18n.getAll(),

    createFont(){
        editData.currFontInEdit = new Font();
        RF.getComponentById('fontDialog').open();
    },
    editFont(fnt){
        editData.currFontInEdit = fnt.clone();
        RF.getComponentById('fontDialog').open();
    },
    async deleteFont(model){
        await utils.deleteModel(model);
        restFileSystem.removeFile(`font/${model.name}.png`);
    }
});