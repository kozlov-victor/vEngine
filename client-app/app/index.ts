

import 'engine/core/misc/polyfills'
import 'app/vendor/polyfills';

import 'app/vendor/split'
import 'app/vendor/reactiveForms'

import {AppModal} from './components/modal/modal'
import {Collapsible} from './components/collapsible/collapsible'
import {AlertDialog} from './components/alertDialog/alertDialog'
import {ConfirmDialog} from './components/confirmDialog/confirmDialog'
import {InputFile} from './components/inputFile/inputFile'
import {ColorPicker} from './components/colorPicker/colorPicker'
import {ColorPickerDialog} from './components/colorPicker/colorPickerDialog'
import {AnglePicker} from './components/anglePicker/anglePicker'

import {DraggableDirective} from './directives/draggableDirective'

import {ResourceHelper as resourceHelper} from './providers/resourceHelper'

import {Explorer} from './pages/explorer/explorer'
import {Editor} from './pages/editor/editor'
import {ProjectDialog} from './pages/explorer/dialogs/projectDialog/projectDialog'
import {GameProps} from './pages/editor/leftPanel/gameProps/gameProps'
import {ParticleSystems} from './pages/editor/leftPanel/particleSystems/particleSystems'
import {Sounds} from './pages/editor/leftPanel/sounds/sounds'
import {Fonts} from './pages/editor/leftPanel/fonts/fonts'
import {SpriteSheets} from './pages/editor/leftPanel/spriteSheets/spriteSheets'
import {Scripts} from "./pages/editor/leftPanel/scripts/scripts"
import {GameObjects} from './pages/editor/leftPanel/gameObjects/gameObjects'
import {Scenes} from './pages/editor/leftPanel/scenes/scenes'
import {UserInterface} from './pages/editor/leftPanel/userInterface/userInterface'
import {TopPanel} from './pages/editor/topPanel/topPanel'
import {PopupBlocked} from './pages/editor/topPanel/popupBlocked'
import {ScriptEditor} from './pages/editor/centralPanel/scriptEditor/scriptEditor'
import {SceneCentralPanel} from './pages/editor/centralPanel/scene/sceneCentralPanel'
import {SceneCursor} from './pages/editor/centralPanel/sceneCursor/sceneCursor'
import {SceneRightPanel} from './pages/editor/rightPanel/scene/sceneRightPanel'
import {GameObjectRightPanel} from './pages/editor/rightPanel/gameObject/gameObjectRightPanel'
import {GameObjectRow} from './pages/editor/leftPanel/_gameObjectRow/gameObjectRow'
import {Dialogs} from './pages/editor/dialogs/dialogs'
import {ParticleSystemDialog} from './pages/editor/dialogs/particleSystemDialog/particleSystemDialog'
import {SoundDialog} from './pages/editor/dialogs/soundDialog/soundDialog'
import {FontDialog} from './pages/editor/dialogs/fontDialog/fontDialog'
import {SpriteSheetDialog} from './pages/editor/dialogs/spriteSheetDialog/spriteSheetDialog'
import {GameObjectDialog} from './pages/editor/dialogs/gameObjectDialog/gameObjectDialog'
import {SceneDialog} from './pages/editor/dialogs/sceneDialog/sceneDialog'
import {LayerDialog} from './pages/editor/dialogs/layerDialog/layerDialog'
import {ParticleSystemPreviewDialog} from './pages/editor/dialogs/particleSystemPreviewDialog/particleSystemPreviewDialog'
import {FrameAnimationDialog} from './pages/editor/dialogs/frameAnimationDialog/frameAnimationDialog'
import {CommonBehaviourDialog} from './pages/editor/dialogs/commonBehaviourDialog/commonBehaviourDialog'
import {BuildDialog} from './pages/editor/dialogs/buildDialog/buildDialog'

import './index.scss'
import {ScriptDialog} from "./pages/editor/dialogs/scriptDialog/scriptDialog";
import {EditableArray} from "./pages/editor/dialogs/_editableArray/editableArray";

declare const RF:any,BUILD_AT:Date,regeneratorRuntime:any;

RF.registerDirectives([
    DraggableDirective
]);
RF.registerComponents([
    AppModal, Collapsible, AlertDialog,
    ConfirmDialog, InputFile, ColorPicker,
    AnglePicker, ColorPickerDialog, Explorer,
    ProjectDialog, Editor, GameProps,
    ScriptDialog, EditableArray,
    ParticleSystems, Sounds, Fonts, Scripts,
    SpriteSheets, GameObjects, Scenes,
    UserInterface, TopPanel, PopupBlocked, ScriptEditor,
    SceneCentralPanel, SceneRightPanel, GameObjectRightPanel,
    Dialogs, ParticleSystemDialog, GameObjectRow,
    SoundDialog, FontDialog, SpriteSheetDialog,
    GameObjectDialog, SceneDialog, LayerDialog,
    BuildDialog, SceneCursor,
    ParticleSystemPreviewDialog, FrameAnimationDialog, CommonBehaviourDialog
]);

RF.Router.setup({
    explorer: Explorer,
    editor: Editor
});

RF.applyBindings('body');
if (sessionStorage['projectName']) {
    resourceHelper.loadProject(sessionStorage['projectName']);
}
else RF.Router.navigateTo('explorer');

console.log(`built at: ${new Date(+BUILD_AT)}`);