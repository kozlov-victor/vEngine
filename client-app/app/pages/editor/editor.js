
import './editor.less'

import 'app/pages/editor/leftPanel/gameProps/gameProps';
import 'app/pages/editor/leftPanel/particleSystems/particleSystems';
import 'app/pages/editor/leftPanel/sounds/sounds';
import 'app/pages/editor/leftPanel/fonts/fonts';
import 'app/pages/editor/leftPanel/spriteSheets/spriteSheets';
import 'app/pages/editor/leftPanel/gameObjects/gameObjects';
import 'app/pages/editor/leftPanel/scenes/scenes';
import 'app/pages/editor/leftPanel/userInterface/userInterface';
import 'app/pages/editor/topPanel/topPanel';
import 'app/pages/editor/centralPanel/scriptEditor/scriptEditor';
import 'app/pages/editor/centralPanel/scene/scene';
import 'app/pages/editor/rightPanel/scene/scene';
import 'app/pages/editor/rightPanel/sceneGameObject/sceneGameObject';

import 'app/pages/editor/dialogs/dialogs';

import Split from 'app/vendor/split';
let splitMounted = false;

import i18n from 'app/providers/i18n';
import editData from 'app/providers/editData';

let onMount = function(){
    if (splitMounted) return;
    splitMounted = true;
    let layoutSizes = {};

    layoutSizes.a =   15;
    layoutSizes.b =   70;
    layoutSizes.e =  (100 - layoutSizes.a - layoutSizes.b);

    layoutSizes.c =   94;
    layoutSizes.d =   (100 - layoutSizes.c);

    Split(['#a', '#b', '#e'], {
        sizes: [layoutSizes.a,layoutSizes.b,layoutSizes.e],
        gutterSize: 5,
        cursor: 'row-resize',
        minSize:10
    });
    let vertical = Split(['#c', '#d'], {
        direction: 'vertical',
        sizes: [layoutSizes.c,layoutSizes.d],
        gutterSize: 5,
        cursor: 'col-resize',
        minSize:10
    });
    window.addEventListener('resize',function(){
        vertical.setSizes([layoutSizes.c,layoutSizes.d]);
    });
};

export default RF.registerComponent('editor',{
    template: {
        type:'string',
        value: require('./editor.html')
    },
    editData,
    i18n: i18n.getAll(),
    onMount: function(){
        onMount();
    }
});