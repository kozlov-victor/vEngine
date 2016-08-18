
var bundle = require('bundle');

if (!bundle.sceneList.size()) throw 'at least one scene must be created';

var renderer = new require('render/renderer');
var sceneManager = new require('kernel/sceneManager');
var collider = new require('common/collider');
var keyboard = new require('common/keyboard');

var mouse;

window.addEventListener('load',function(){
    document.body.ontouchstart = function(e){
        e.preventDefault();
        return false;
    };
    renderer.init();
    mouse = new require('common/mouse').Mouse();
    sceneManager.setScene(bundle.sceneList.get(0));
});


module.exports.scripts = scripts;