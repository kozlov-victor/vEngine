
var ResourceLoader = require('resourceLoader').ResourceLoader;
var collider = require('collider');
var keyboard = require('keyboard');
var camera = require('camera');

var ctx = null;

var renderer;
var bundle;
var progressScene;
var tweenMovies = [];

exports.currScene = null;
var booted = false;

var bootEssentialResources = function(callBack){

    if (booted) {
        callBack();
        return;
    }
    if (!bundle) bundle = require('bundle');
    if (!renderer) renderer = require('renderer');

    var loader = new ResourceLoader();
    loader.onComplete = function(){
        callBack();
    };
    if (bundle.gameProps.preloadingSceneId){
        progressScene = bundle.sceneList.find({id:bundle.gameProps.preloadingSceneId});
    }
    if (progressScene) {
        exports.currScene = progressScene;
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

    if (!bundle) bundle = require('bundle');

    if (progressScene) {
        exports.currScene = progressScene;
        bundle.applyBehaviourForScene(progressScene);
        renderer.setScene(progressScene);
        if (!renderer.isRunning()) renderer.start();
    }

    var loader = new ResourceLoader();
    loader.onComplete = function(){
        exports.currScene = scene;
        bundle.applyBehaviourForScene(scene);
        collider.setUp();
        renderer.setScene(scene);
        if (!renderer.isRunning()) renderer.start();
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

exports.setCtx = function(_ctx){
    ctx = _ctx;
};

exports.setScene = function(scene){
    var Scene = require('scene').Scene;
    if (!(scene instanceof Scene)) throw 'object '+scene+' is not a scene';
    if (exports.currScene==scene) return;
    bootEssentialResources(function(){
        preloadSceneAndSetIt(scene);
    });
};

exports.setSceneByName = function(sceneName){
    if (!(sceneName && sceneName.substr)) throw 'object '+ sceneName + 'is not a string';
    var bundle = require('bundle');
    var scene = bundle.sceneList.find({name: sceneName});
    if (!scene) throw 'no scene with name ' + sceneName + ' found';
    exports.setScene(scene);
};

exports.getCurrScene = function(){
    return exports.currScene;
};

exports.addTweenMovie = function(tm) {
    tweenMovies.push(tm);
};

exports.update = function(currTime,deltaTime){
    tweenMovies.forEach(function(tweenMovie){
        if (tweenMovie.completed) {
            tweenMovies.remove(tweenMovie);
        }
        tweenMovie._update(currTime);
    });
    exports.currScene.update(currTime,deltaTime);
    camera.update(ctx);
    keyboard.update();
    bundle.particleSystemList.forEach(function(p){
        p.update(currTime,deltaTime);
    });
};