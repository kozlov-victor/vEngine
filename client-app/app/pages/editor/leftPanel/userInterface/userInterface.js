
import restResource from 'providers/rest/resource';
import i18n from 'providers/i18n';
import editData from 'providers/editData';

export default RF.registerComponent('app-user-interface', {
    template: {
        value: require('./userInterface.html'),
        type: 'string'
    },
    i18n: i18n.getAll(),
    editData
});