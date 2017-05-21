import editData from 'providers/editData';
import i18n from 'providers/i18n';

import 'pages/editor/dialogs/soundDialog/soundDialog';

export default RF.registerComponent('app-dialogs', {
    template: {
        type: 'string',
        value: require('./dialogs.html')
    },
    editData,
    i18n: i18n.getAll()
});