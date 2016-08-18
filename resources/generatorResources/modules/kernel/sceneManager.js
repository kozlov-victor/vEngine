
var renderer = require('render/renderer');
var models = require('models');
var bundle = require('bundle');
var sound = require('common/sound');

var preloadAndSet = function(scene){
    var q = new ve.utils.Queue();
    q.onResolved = function(){
        renderer.setScene(scene);
    };
    var allSprSheets = scene.getAllSpriteSheets();
    bundle.particleSystemList.forEach(function(ps){
        allSprSheets.add(ps._gameObject._spriteSheet);
    });
    allSprSheets.asArray().forEach(function(spSheet){
        var resourcePath = ve.resources?
            ve.resources[spSheet.resourcePath]:
        './'+spSheet.resourcePath;
        renderer.
            getContext().
            loadTextureInfo(
            resourcePath,
            {type:ve.resources?'base64':'',fileName:spSheet.resourcePath},
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
        var resourcePath = ve.resources?
            ve.resources[snd.resourcePath]:
        './'+snd.resourcePath;
        sound.loadSound(
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
    if (!(scene instanceof ve.models.Scene)) throw 'object '+scene+' is not a scene';
    this.currScene = scene;
    preloadAndSet(scene);
};

this.setSceneByName = function(sceneName){
    if (!(sceneName && sceneName.substr)) throw 'object '+ sceneName + 'is not a string';
    var scene = bundle.sceneList.find({name: sceneName});
    if (!scene) throw 'no scene with name ' + sceneName + ' found';
    self.setScene(scene);
};

this.getCurrScene = function(){
    return this.currScene;
};
