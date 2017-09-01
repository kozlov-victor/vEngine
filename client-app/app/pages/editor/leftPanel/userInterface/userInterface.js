
import i18n from 'app/providers/i18n';
import editData from 'app/providers/editData';

export default RF.registerComponent('app-user-interface', {
    template: {
        value: require('./userInterface.html'),
        type: 'string'
    },
    i18n: i18n.getAll(),
    editData
});