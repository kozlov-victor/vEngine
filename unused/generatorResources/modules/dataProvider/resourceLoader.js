
const ResourceLoader = function(){

    let self = this;

    let Queue = require('queue');
    let renderer = require('renderer');
    let bundle = require('bundle');
    let cache = require('resourceCache');
    let audioPlayer = require('audioPlayer');

    let q = new Queue();
    q.onResolved = function(){
        self.onComplete && self.onComplete();
    };
    q.onProgress = function(progress){
        self.onProgress && self.onProgress(progress);
    };

    this.loadImage = function(resourcePath) {
        if (cache.has(resourcePath)) return;
        q.addTask(function(){
            let path = bundle.embeddedResources.isEmbedded?
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
            let path = bundle.embeddedResources.isEmbedded?
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