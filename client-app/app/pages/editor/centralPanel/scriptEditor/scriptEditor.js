
import i18n from 'app/providers/i18n';
import editData from 'app/providers/editData';
import repository from 'coreEngine/src/engine/repository';

export default RF.registerComponent('app-script-editor', {
    template: {
        type: 'string',
        value: require('./scriptEditor.html')
    },
    editData,
    i18n: i18n.getAll(),
    close(){
        editData.scriptEditorUrl = '';
    }
});
