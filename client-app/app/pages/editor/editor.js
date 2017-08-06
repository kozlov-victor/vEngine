

import 'pages/editor/leftPanel/gameProps/gameProps';
import 'pages/editor/leftPanel/particleSystems/particleSystems';
import 'pages/editor/leftPanel/sounds/sounds';
import 'pages/editor/leftPanel/fonts/fonts';
import 'pages/editor/leftPanel/spriteSheets/spriteSheets';
import 'pages/editor/leftPanel/gameObjects/gameObjects';
import 'pages/editor/leftPanel/scenes/scenes';
import 'pages/editor/leftPanel/userInterface/userInterface';
import 'pages/editor/topPanel/topPanel';
import 'pages/editor/centralPanel/scriptEditor/scriptEditor';
import 'pages/editor/centralPanel/scene/scene';
import 'pages/editor/rightPanel/scene/scene';

import 'pages/editor/dialogs/dialogs';

import i18n from 'providers/i18n';
import editData from 'providers/editData';

let onMount = function(){
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