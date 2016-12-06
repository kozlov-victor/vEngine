
var ResourceLoader = require('resourceLoader').ResourceLoader;
var collider = require('collider').instance();
// var bundle = require('bundle').instance();
var keyboard = require('keyboard').instance();
var camera = require('camera').instance();

var Game = function(){

    var self = this;
    var ctx = null;

    var renderer;
    var bundle;
    var progressScene;
    var tweenMovies = [];

    this.currScene = null;
    var booted = false;

    var bootEssentialResources = function(callBack){

        if (booted) {
            callBack();
            return;
        }
        if (!bundle) bundle = require('bundle').instance();
        if (!renderer) renderer = require('renderer').instance();

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

        if (!bundle) bundle = require('bundle').instance();

        if (progressScene) {
            self.currScene = progressScene;
            bundle.applyBehaviourForScene(progressScene);
            if (!renderer.isRunning()) renderer.start();
        }

        var loader = new ResourceLoader();
        loader.onComplete = function(){
            self.currScene = scene;
            bundle.applyBehaviourForScene(scene);
            collider.setUp();
            if (scene.useBG) ctx.colorBG = scene.colorBG;
            else {
                ctx.colorBG = ctx.DEFAULT_COLOR_BG;
            }
            scene.onShow();
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

    this.setCtx = function(_ctx){
        ctx = _ctx;
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
    };

    this.addTweenMovie = function(tm) {
        tweenMovies.push(tm);
    };

    this.update = function(currTime,deltaTime){
        if (!this.currScene) return;
        tweenMovies.forEach(function(tweenMovie){
            if (tweenMovie.completed) {
                tweenMovies.remove(tweenMovie);
            }
            tweenMovie._update(currTime);
        });
        this.currScene.update(currTime,deltaTime);
        camera.update(ctx);
        keyboard.update();
        bundle.particleSystemList.forEach(function(p){
            p.update(currTime,deltaTime);
        });
    };

};


var instance = null;

module.exports.instance = function(){
    if (instance==null) instance = new Game();
    return instance;
};
