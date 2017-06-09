
import 'components/modal/modal';
import 'components/collapsible/collapsible';
import 'components/alertDialog/alertDialog';
import 'components/confirmDialog/confirmDialog';
import 'components/inputFile/inputFile';
import 'components/colorPicker/colorPicker';
import 'providers/userDefinedFns';

import explorer from 'pages/explorer/explorer';
import editor from 'pages/editor/editor';

RF.Router.setup({
    explorer,
    editor
});

RF.applyBindings('body');
RF.Router.navigateTo('explorer');