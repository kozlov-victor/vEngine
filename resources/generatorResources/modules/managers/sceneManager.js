

var SceneManager = function(){

    var self = this;

    var renderer;
    var soundManager;
    var utils;
    var bundle;

    this.currScene = null;

    // todo extract to resource loader
    var preloadAndSet = function(scene){

        if (!renderer) renderer = require('renderer').instance();
        if (!soundManager) soundManager = require('soundManager').instance();
        if (!utils) utils = require('utils');
        if (!bundle) bundle = require('bundle').instance();

        var q = new utils.Queue();
        q.onResolved = function(){
            bundle.applyBehaviourAll();
            renderer.setScene(scene);
        };
        var allSprSheets = scene.getAllSpriteSheets();
        bundle.particleSystemList.forEach(function(ps){
            allSprSheets.add(ps._gameObject._spriteSheet);
        });
        allSprSheets.asArray().forEach(function(spSheet){
            var resourcePath = bundle.embeddedResources.isEmbedded?
                bundle.embeddedResources.data[spSheet.resourcePath]:
                './'+spSheet.resourcePath;
            renderer.
                getContext().
                loadTextureInfo(
                resourcePath,
                {type:bundle.embeddedResources.isEmbedded?'base64':'',fileName:spSheet.resourcePath},
                function(textureInfo){
                    spSheet._textureInfo = textureInfo;
                    q.resolveTask();
                });
            q.addTask();
        });
        // todo remove slash??
        bundle.soundList.forEach(function(snd){
            q.addTask();
            var resourcePath = bundle.embeddedResources.isEmbedded?
            bundle.embeddedResources.data[snd.resourcePath]:
            './'+snd.resourcePath;
            soundManager.loadSound(
                resourcePath,
                {type:bundle.embeddedResources.isEmbedded?'base64':''},
                function(buffer){
                    snd._buffer = buffer;
                    q.resolveTask();
                }
            );
        });
        q.start();
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
