import editData from 'app/providers/editData';
import i18n from 'app/providers/i18n';

import 'app/pages/editor/dialogs/soundDialog/soundDialog';
import 'app/pages/editor/dialogs/fontDialog/fontDialog';
import 'app/pages/editor/dialogs/spriteSheetDialog/spriteSheetDialog';
import 'app/pages/editor/dialogs/gameObjectDialog/gameObjectDialog';
import 'app/pages/editor/dialogs/particleSystemDialog/particleSystemDialog';
import 'app/pages/editor/dialogs/sceneDialog/sceneDialog';
import 'app/pages/editor/dialogs/layerDialog/layerDialog';

export default RF.registerComponent('app-dialogs', {
    template: {
        type: 'string',
        value: require('./dialogs.html')
    },
    editData,
    i18n: i18n.getAll()
});