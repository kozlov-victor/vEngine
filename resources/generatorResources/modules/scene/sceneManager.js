

var SceneManager = function(){

    var self = this;

    var renderer;
    var soundManager;
    var bundle;

    this.currScene = null;

    var preloadAndSet = function(scene){

        if (!renderer) renderer = require('renderer').instance();
        if (!bundle) bundle = require('bundle').instance();
        var ResourceLoader = require('resourceLoader').ResourceLoader;

        var loader = new ResourceLoader();
        loader.onComplete = function(){
            bundle.applyBehaviourAll();
            renderer.setScene(scene);
        };

        var allSprSheets = scene.getAllSpriteSheets();

        bundle.particleSystemList.forEach(function(ps){
            allSprSheets.add(ps._gameObject._spriteSheet);
        });
        bundle.fontList.forEach(function(font){
            loader.loadImage(font.resourcePath);
        });
        allSprSheets.asArray().forEach(function(spSheet){
            loader.loadImage(spSheet.resourcePath);
        });
        bundle.soundList.forEach(function(snd){
            loader.loadSound(snd.resourcePath);
        });
        loader.start();
    };

    this.setScene = function(scene){
        var Scene = require('scene').Scene;
        if (!(scene instanceof Scene)) throw 'object '+scene+' is not a scene';
        if (this.currScene==scene) return;
        this.currScene = scene;
        preloadAndSet(scene);
    };

    this.setSceneByName = function(sceneName){
        if (!(sceneName && sceneName.substr)) throw 'object '+ sceneName + 'is not a string';
        var bundle = require('bundle').instance();
        var scene = bundle.sceneList.find({name: sceneName});
        if (!scene) throw 'no scene with name ' + sceneName + ' found';
        self.setScene(scene);
    };

    this.getCurrScene = function(){
        return this.currScene;
    }

};


var instance = null;

module.exports.instance = function(){
    if (instance==null) instance = new SceneManager();
    return instance;
};
