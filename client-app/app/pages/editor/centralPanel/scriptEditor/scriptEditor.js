
import i18n from 'providers/i18n';
import editData from 'providers/editData';

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
