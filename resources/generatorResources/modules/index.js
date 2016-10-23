
var bundle = require('bundle').instance();
bundle.prepare();
if (!bundle.sceneList.size()) throw 'at least one scene must be created';

var renderer = require('renderer').instance();
var sceneManager = require('sceneManager').instance();
var keyboard = require('keyboard').instance();

window.addEventListener('load',function(){
    document.body.ontouchstart = function(e){
        e.preventDefault();
        return false;
    };

    renderer.init();
    require('mouse').instance();
    sceneManager.setScene(bundle.sceneList.get(0));
});