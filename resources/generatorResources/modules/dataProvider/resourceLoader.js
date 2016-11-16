
exports.ResourceLoader = function(){

    var self = this;

    var Queue = require('queue').Queue;
    var renderer = require('renderer').instance();
    var bundle = require('bundle').instance();
    var cache = require('resourceCache');
    var soundManager = require('soundManager').instance();

    var q = new Queue();
    q.onResolved = function(){
        self.onComplete && self.onComplete();
    };
    q.onProgress = function(progress){
        self.onProgress && self.onProgress(progress);
    };

    this.loadImage = function(resourcePath) {
        if (cache.has(resourcePath)) return;
        var path = bundle.embeddedResources.isEmbedded?
            bundle.embeddedResources.data[resourcePath]:
            resourcePath;
        renderer.
            getContext().
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
        q.addTask(resourcePath);
    };

    this.loadSound = function(resourcePath,name){
        if (cache.has(resourcePath)) return;
        var path = bundle.embeddedResources.isEmbedded?
            bundle.embeddedResources.data[resourcePath]:
            resourcePath;
        soundManager.loadSound(
            path,
            {type:bundle.embeddedResources.isEmbedded?'base64':''},
            function(resourcePath,progress){
                q.progressTask(resourcePath,progress);
            },
            function(buffer){
                cache.set(name,buffer);
                q.resolveTask(resourcePath);
            }
        );
        q.addTask(resourcePath);
    };

    this.onComplete = null;
    this.onProgress = null;

    this.start = function(){
        q.start();
    };

};