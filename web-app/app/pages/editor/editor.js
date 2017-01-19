
var onMounted = function _onMounted(){
    var layoutSizes = {};

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
    var vertical = Split(['#c', '#d'], {
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

module.exports = {
    template: require('./editor.html'),
    data: function () {
        return {}
    },
    mounted: function(){
        onMounted();
    },
    methods: {

    },
    components: {
        appCollapsible: require('components/collapsible/collapsible'),
        appModal: require('components/modal/modal'),
        appInputFile: require('components/inputFile/inputFile'),

        appGameProps: require('./leftPanel/gameProps/gameProps'),
        appScenes: require('./leftPanel/scenes/scenes'),
        appGameObjects: require('./leftPanel/gameObjects/gameObjects'),
        appSpriteSheets: require('./leftPanel/spriteSheets/spriteSheets'),
        appUserInterface: require('./leftPanel/userInterface/userInterface'),
        appFonts: require('./leftPanel/fonts/fonts'),
        appSounds: require('./leftPanel/sounds/sounds'),
        appParticleSystems: require('./leftPanel/particleSystems/particleSystems'),
        appDialogs: require('./dialogs/dialogs'),

        appScriptEditor: require('./centralPanel/scriptEditor/scriptEditor'),

        appRightPanelSceneGameObject: require('./rightPanel/sceneGameObject/sceneGameObject'),
        appRightPanelScene: require('./rightPanel/scene/scene'),
        appCurrScene: require('./centralPanel/scene/scene')

    }
};