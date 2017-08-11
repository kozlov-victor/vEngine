
const ResourceLoader = require('resourceLoader');
const collider = require('collider');
const keyboard = require('keyboard');
const camera = require('camera');

let ctx = null;

const renderer = require('renderer');
const bundle = require('bundle');
let progressScene;
const tweenMovies = [];

exports.currScene = null;
const booted = false;

const bootEssentialResources = function(callBack){

    if (booted) {
        callBack();
        return;
    }

    let loader = new ResourceLoader();
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

const preloadSceneAndSetIt = function(scene){
    if (progressScene) {
        exports.currScene = progressScene;
        bundle.applyBehaviourForScene(progressScene);
        renderer.setScene(progressScene);
        progressScene.onShow();
        progressScene._allGameObjects.forEach(function(g){
            g.onShow && g.onShow();
        });
        if (!renderer.isRunning()) renderer.start();
    }

    let loader = new ResourceLoader();
    loader.onComplete = function(){
        exports.currScene = scene;
        bundle.applyBehaviourForScene(scene);
        collider.setUp();
        renderer.setScene(scene);
        if (!renderer.isRunning()) {
            renderer.isReady = true;
            renderer.start();
        }
        scene.onShow();
        scene._allGameObjects.forEach(function(g){
            g.onShow && g.onShow();
        });
    };
    loader.onProgress = function(e){
        progressScene &&
        progressScene.onProgress &&
        progressScene.onProgress(e);
    };

    let allSprSheets = scene.getAllSpriteSheets();

    bundle.particleSystemList.forEach(function(ps){
        allSprSheets.add(ps.gameObjectProto.spriteSheet);
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
    let Scene = require('scene');
    if (!(scene instanceof Scene)) throw 'object '+scene+' is not a scene';
    if (exports.currScene==scene) return;
    bootEssentialResources(function(){
        preloadSceneAndSetIt(scene);
    });
};

exports.setSceneByName = function(sceneName){
    if (!(sceneName && sceneName.substr)) throw 'object '+ sceneName + 'is not a string';
    let bundle = require('bundle');
    let scene = bundle.sceneList.find({name: sceneName});
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
    camera.update(ctx);
    exports.currScene.update(currTime,deltaTime);
    keyboard.update();
    bundle.particleSystemList.forEach(function(p){
        p.update(currTime,deltaTime);
    });
};