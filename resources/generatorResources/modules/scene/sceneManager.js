
var ResourceLoader = require('resourceLoader').ResourceLoader;

var SceneManager = function(){

    var self = this;

    var renderer;
    var bundle;
    var progressScene;

    this.currScene = null;

    var bootEssentialResources = function(callBack){

        if (!bundle) bundle = require('bundle').instance();

        var loader = new ResourceLoader();
        loader.onComplete = function(){
            callBack();
        };
        if (bundle.gameProps.preloadingSceneId){
            progressScene = bundle.sceneList.find({id:bundle.gameProps.preloadingSceneId});
        }
        if (progressScene) {
            self.currScene = progressScene;
            progressScene.__onResourcesReady();
            progressScene.
                getAllSpriteSheets().
                asArray().
                forEach(function(spSheet){
                    loader.loadImage(spSheet.resourcePath);
                });
        }
        bundle.fontList.forEach(function(font){
            loader.loadImage(font.resourcePath);
        });
        loader.start();
    };

    var preloadSceneAndSetIt = function(scene){

        if (!renderer) renderer = require('renderer').instance();
        if (!bundle) bundle = require('bundle').instance();

        if (progressScene) {
            self.currScene = progressScene;
            renderer.setScene(progressScene);
            bundle.applyBehaviourForScene(progressScene);
            console.log('applied behaviour',progressScene.__updateIndividualBehaviour__);
        }

        var loader = new ResourceLoader();
        loader.onComplete = function(){
            self.currScene = scene;
            bundle.applyBehaviourForScene(scene);
            renderer.setScene(scene);
        };
        loader.onProgress = function(e){
            progressScene &&
            progressScene.onProgress &&
            progressScene.onProgress(e);
        };

        var allSprSheets = scene.getAllSpriteSheets();

        bundle.particleSystemList.forEach(function(ps){
            allSprSheets.add(ps._gameObject._spriteSheet);
        });
        allSprSheets.asArray().forEach(function(spSheet){
            loader.loadImage(spSheet.resourcePath);
        });
        bundle.soundList.forEach(function(snd){
            loader.loadSound(snd.resourcePath,snd.name);
        });
        loader.start();
    };

    this.setScene = function(scene){
        var Scene = require('scene').Scene;
        if (!(scene instanceof Scene)) throw 'object '+scene+' is not a scene';
        if (this.currScene==scene) return;
        bootEssentialResources(function(){
            preloadSceneAndSetIt(scene);
        });
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
