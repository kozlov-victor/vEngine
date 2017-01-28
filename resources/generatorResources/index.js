
var data;
//<code>data = {{{json commonResources}}}

var bundle = require('bundle');
bundle.prepare(data);
//<code>{{#if opts.debug}}
if (!bundle.sceneList.size()) throw 'at least one scene must be created';
//<code>{{/if}}
var renderer = require('renderer');
var game = require('game');
var keyboard = require('keyboard');
var audioPlayer = require('audioPlayer');

window.addEventListener('load',function(){
    document.body.ontouchstart = function(e){
        e.preventDefault();
        return false;
    };

    renderer.init();
    require('mouse');
    var startScene = bundle.sceneList.find({id:bundle.gameProps.startSceneId}) || bundle.sceneList.get(0);
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