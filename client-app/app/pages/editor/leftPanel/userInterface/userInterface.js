
import i18n from 'app/providers/i18n';
import editData from 'app/providers/editData';
import repository from 'coreEngine/src/engine/repository';

export default RF.registerComponent('app-user-interface', {
    template: {
        value: require('./userInterface.html'),
        type: 'string'
    },
    i18n: i18n.getAll(),
    editData
});