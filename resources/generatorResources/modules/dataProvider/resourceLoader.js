
var ResourceLoader = function(){

    var self = this;

    var Queue = require('queue');
    var renderer = require('renderer');
    var bundle = require('bundle');
    var cache = require('resourceCache');
    var audioPlayer = require('audioPlayer');

    var q = new Queue();
    q.onResolved = function(){
        self.onComplete && self.onComplete();
    };
    q.onProgress = function(progress){
        self.onProgress && self.onProgress(progress);
    };

    this.loadImage = function(resourcePath) {
        if (cache.has(resourcePath)) return;
        q.addTask(function(){
            var path = bundle.embeddedResources.isEmbedded?
                bundle.embeddedResources.data[resourcePath]:
                resourcePath;
            renderer.
                getContextClass().
                loadTextureInfo(
                path,
                {type:bundle.embeddedResources.isEmbedded?'base64':'',fileName:resourcePath},
                function(resourcePath,progress){
                    q.progressTask(resourcePath,progress);
                },
                function(textureInfo){
                    cache.set(resourcePath,textureInfo);
                    q.resolveTask(resourcePath);
                });
        },resourcePath);
    };

    this.loadSound = function(resourcePath,name){
        if (cache.has(resourcePath)) return;
        q.addTask(function(){
            var path = bundle.embeddedResources.isEmbedded?
                bundle.embeddedResources.data[resourcePath]:
                resourcePath;
            audioPlayer.loadSound(
                path,
                {type:bundle.embeddedResources.isEmbedded?'base64':''},
                function(resourcePath,progress){
                    q.progressTask(resourcePath,progress);
                },
                function(buffer){
                    cache.set(resourcePath,buffer);
                    q.resolveTask(resourcePath);
                }
            );
        },resourcePath);
    };

    this.onComplete = null;
    this.onProgress = null;

    this.start = function(){
        q.start();
    };

};


module.exports = ResourceLoader;