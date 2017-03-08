
let data;
//<code>data = {{{json commonResources}}}

const bundle = require('bundle');
bundle.prepare(data);
//<code>{{#if opts.debug}}
if (!bundle.sceneList.size()) throw 'at least one scene must be created';
//<code>{{/if}}
const renderer = require('renderer');
const game = require('game');
const keyboard = require('keyboard');
const audioPlayer = require('audioPlayer');

window.addEventListener('load',function(){
    document.body.ontouchstart = function(e){
        e.preventDefault();
        return false;
    };

    renderer.init();
    require('mouse');
    let startScene = bundle.sceneList.find({id:bundle.gameProps.startSceneId}) || bundle.sceneList.get(0);
    game.setScene(startScene);


    window.addEventListener('blur',function(){
        audioPlayer.pauseAll();
        renderer.stop();
    });

    window.addEventListener('focus',function(){
        audioPlayer.resumeAll();
        renderer.start();
    });

});