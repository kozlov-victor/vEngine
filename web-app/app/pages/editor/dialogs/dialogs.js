import editData from 'providers/editData';
import i18n from 'providers/i18n';

import 'pages/editor/dialogs/soundDialog/soundDialog';
import 'pages/editor/dialogs/fontDialog/fontDialog';
import 'pages/editor/dialogs/spriteSheetDialog/spriteSheetDialog';
import 'pages/editor/dialogs/gameObjectDialog/gameObjectDialog';
import 'pages/editor/dialogs/particleSystemDialog/particleSystemDialog';
import 'pages/editor/dialogs/particleSystemPreviewDialog/particleSystemPreviewDialog';
import 'pages/editor/dialogs/commonBehaviourDialog/commonBehaviourDialog';
import 'pages/editor/dialogs/frameAnimationDialog/frameAnimationDialog';

export default RF.registerComponent('app-dialogs', {
    template: {
        type: 'string',
        value: require('./dialogs.html')
    },
    editData,
    i18n: i18n.getAll()
});