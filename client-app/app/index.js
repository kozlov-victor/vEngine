
/*global RF:true*/
/*global BUILD_AT:true*/
/*global sessionStorage:true*/
/*global regeneratorRuntime:true*/

import 'coreEngine/src/engine/polyfills'
import 'app/vendor/polyfills';

import 'app/vendor/split'
import 'app/vendor/reactiveForms'

import Modal from 'app/components/modal/modal'
import Collapsible from 'app/components/collapsible/collapsible'
import AlertDialog from 'app/components/alertDialog/alertDialog'
import ConfirmDialog from 'app/components/confirmDialog/confirmDialog'
import InputFile from 'app/components/inputFile/inputFile'
import ColorPicker from 'app/components/colorPicker/colorPicker'
import ColorPickerDialog from 'app/components/colorPicker/colorPickerDialog'
import AnglePicker from 'app/components/anglePicker/anglePicker'

import DraggableDirective from 'app/directives/draggableDirective'

import 'app/providers/userDefinedFns'

import resourceHelper from 'app/providers/resourceHelper'

import Explorer from 'app/pages/explorer/explorer'
import Editor from 'app/pages/editor/editor'
import ProjectDialog from 'app/pages/explorer/dialogs/projectDialog/projectDialog'
import GameProps from 'app/pages/editor/leftPanel/gameProps/gameProps'
import ParticleSystems from 'app/pages/editor/leftPanel/particleSystems/particleSystems'
import Sounds from 'app/pages/editor/leftPanel/sounds/sounds'
import Fonts from 'app/pages/editor/leftPanel/fonts/fonts'
import SpriteSheets from 'app/pages/editor/leftPanel/spriteSheets/spriteSheets'
import GameObjects from 'app/pages/editor/leftPanel/gameObjects/gameObjects'
import Scenes from 'app/pages/editor/leftPanel/scenes/scenes'
import UserInterface from 'app/pages/editor/leftPanel/userInterface/userInterface'
import TopPanel from 'app/pages/editor/topPanel/topPanel'
import PopupBlocked from 'app/pages/editor/topPanel/popupBlocked'
import ScriptEditor from 'app/pages/editor/centralPanel/scriptEditor/scriptEditor'
import SceneCentralPanel from 'app/pages/editor/centralPanel/scene/sceneCentralPanel'
import SceneRightPanel from 'app/pages/editor/rightPanel/scene/sceneRightPanel'
import GameObjectRightPanel from 'app/pages/editor/rightPanel/gameObject/gameObjectRightPanel'
import GameObjectRow from 'app/pages/editor/leftPanel/_gameObjectRow/gameObjectRow'
import Dialogs from 'app/pages/editor/dialogs/dialogs'
import ParticleSystemDialog from 'app/pages/editor/dialogs/particleSystemDialog/particleSystemDialog'
import SoundDialog from 'app/pages/editor/dialogs/soundDialog/soundDialog'
import FontDialog from 'app/pages/editor/dialogs/fontDialog/fontDialog'
import SpriteSheetDialog from 'app/pages/editor/dialogs/spriteSheetDialog/spriteSheetDialog'
import GameObjectDialog from 'app/pages/editor/dialogs/gameObjectDialog/gameObjectDialog'
import SceneDialog from 'app/pages/editor/dialogs/sceneDialog/sceneDialog'
import LayerDialog from 'app/pages/editor/dialogs/layerDialog/layerDialog'
import ParticleSystemPreviewDialog from 'app/pages/editor/dialogs/particleSystemPreviewDialog/particleSystemPreviewDialog'
import FrameAnimationDialog from 'app/pages/editor/dialogs/frameAnimationDialog/frameAnimationDialog'
import CommonBehaviourDialog from 'app/pages/editor/dialogs/commonBehaviourDialog/commonBehaviourDialog'
import BuildDialog from 'app/pages/editor/dialogs/buildDialog/buildDialog'


import './index.less'

RF.registerDirectives([
    DraggableDirective
]);

RF.registerComponents([
    Modal, Collapsible, AlertDialog,
    ConfirmDialog, InputFile, ColorPicker,
    AnglePicker, ColorPickerDialog, Explorer,
    ProjectDialog, Editor, GameProps,
    ParticleSystems, Sounds, Fonts,
    SpriteSheets, GameObjects, Scenes,
    UserInterface, TopPanel, PopupBlocked, ScriptEditor,
    SceneCentralPanel, SceneRightPanel, GameObjectRightPanel,
    Dialogs, ParticleSystemDialog, GameObjectRow,
    SoundDialog, FontDialog, SpriteSheetDialog,
    GameObjectDialog, SceneDialog, LayerDialog,
    BuildDialog,
    ParticleSystemPreviewDialog, FrameAnimationDialog, CommonBehaviourDialog
]);

RF.Router.setup({
    explorer: Explorer,
    editor: Editor
});

RF.applyBindings('body');
if (sessionStorage.projectName) {
    resourceHelper.loadProject(sessionStorage.projectName);
}
else RF.Router.navigateTo('explorer');

console.log(`built at: ${new Date(+BUILD_AT)}`);