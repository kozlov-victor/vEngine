


import editData from 'app/providers/editData';
import restResource from 'app/providers/rest/resource';
import i18n from 'app/providers/i18n';
import restFileSystem from 'app/providers/rest/fileSystem';
import utils from 'app/providers/utils';


export default RF.registerComponent('app-svg-editor-dialog', {
    template: {
        type: 'string',
        value: require('./svgEditorDialog.html')
    },
    i18n: i18n.getAll(),
    utils,
    editData,
    form:{valid: ()=>{return true;}},
});