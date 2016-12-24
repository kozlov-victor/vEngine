
var onMounted = function _onMounted(){
    Split(['#a', '#b', '#e'], {
        sizes: [15,70,15],
        gutterSize: 5,
        cursor: 'row-resize',
        minSize:10
    });
    var vertical = Split(['#c', '#d'], {
        direction: 'vertical',
        sizes: [94,5],
        gutterSize: 5,
        cursor: 'col-resize',
        minSize:10
    });
    window.addEventListener('resize',function(){
        vertical.setSizes([94,5]);
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
        appGameProps: require('./components/gameProps/gameProps'),
        appScenes: require('./components/scenes/scenes'),
        appGameObjects: require('./components/gameObjects/gameObjects'),
        appSpriteSheets: require('./components/spriteSheets/spriteSheets'),
        appUserInterface: require('./components/userInterface/userInterface'),
        appFonts: require('./components/fonts/fonts'),
        appSounds: require('./components/sounds/sounds'),
        appParticleSystems: require('./components/particleSystems/particleSystems'),
    }
};