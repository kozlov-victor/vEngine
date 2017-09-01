
import 'app/providers/rest/promise'

import 'coreEngine/src/engine/polyfills'

import 'app/vendor/split'
import 'app/vendor/reactiveForms'

import 'app/components/modal/modal';
import 'app/components/collapsible/collapsible';
import 'app/components/alertDialog/alertDialog';
import 'app/components/confirmDialog/confirmDialog';
import 'app/components/inputFile/inputFile';
import 'app/components/colorPicker/colorPicker';
import 'app/components/anglePicker/anglePicker';
import 'app/providers/userDefinedFns';

import explorer from 'app/pages/explorer/explorer';
import editor from 'app/pages/editor/editor';
import resourceHelper from 'app/providers/resourceHelper';

import './index.less'

RF.Router.setup({
    explorer,
    editor
});

RF.applyBindings('body');
if (sessionStorage.projectName) {
    resourceHelper.loadProject(sessionStorage.projectName);
}
else RF.Router.navigateTo('explorer');

console.log(`built at: ${new Date(+BUILD_AT)}`);