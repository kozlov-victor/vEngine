

var SceneManager = function(){

    var self = this;

    this.currScene = null;

    var preloadAndSet = function(scene){
        var renderer = require('renderer').instance();
        var soundManager = require('soundManager').instance();
        var utils = require('utils');
        var bundle = require('bundle').instance();

        var q = new utils.Queue();
        q.onResolved = function(){
            renderer.setScene(scene);
        };
        var allSprSheets = scene.getAllSpriteSheets();
        bundle.particleSystemList.forEach(function(ps){
            allSprSheets.add(ps._gameObject._spriteSheet);
        });
        window.ve_local = window.ve_local || {};
        allSprSheets.asArray().forEach(function(spSheet){
            var resourcePath = ve_local.resources? // todo
                ve_local.resources[spSheet.resourcePath]:
                './'+spSheet.resourcePath;
            renderer.
                getContext().
                loadTextureInfo(
                resourcePath,
                {type:ve_local.resources?'base64':'',fileName:spSheet.resourcePath},
                function(textureInfo){
                    console.log('loaded texture info',spSheet.resourcePath,textureInfo);
                    spSheet._textureInfo = textureInfo;
                    q.resolveTask();
                });
            q.addTask();
        });
        // todo remove slash??
        bundle.soundList.forEach(function(snd){
            q.addTask();
            var resourcePath = ve_local.resources?
            ve_local.resources[snd.resourcePath]:
            './'+snd.resourcePath;
            soundManager.loadSound(
                resourcePath,
                {type:ve_local.resources?'base64':''},
                function(buffer){
                    snd._buffer = buffer;
                    q.resolveTask();
                }
            );
        });
        q.start();
    };

    this.setScene = function(scene){
        var models = require('models');
        if (!(scene instanceof models.Scene)) throw 'object '+scene+' is not a scene';
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
