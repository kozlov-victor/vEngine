
exports.ResourceLoader = function(){

    var self = this;

    var utils = require('utils');
    var renderer = require('renderer').instance();
    var bundle = require('bundle').instance();
    var cache = require('resourceCache');
    var soundManager = require('soundManager').instance();

    var q = new utils.Queue();
    q.onResolved = function(){
        self.onComplete && self.onComplete();
    };

    this.loadImage = function(resourcePath) {
        if (cache.has(resourcePath)) return;
        var path = bundle.embeddedResources.isEmbedded?
            bundle.embeddedResources.data[resourcePath]:
            './'+resourcePath;
        renderer.
            getContext().
            loadTextureInfo(
            path,
            {type:bundle.embeddedResources.isEmbedded?'base64':'',fileName:resourcePath},
            function(textureInfo){
                cache.set(resourcePath,textureInfo);
                q.resolveTask();
            });
        q.addTask();
    };

    this.loadSound = function(resourcePath){
        if (cache.has(resourcePath)) return;
        var path = bundle.embeddedResources.isEmbedded?
            bundle.embeddedResources.data[resourcePath]:
            './'+resourcePath;
        soundManager.loadSound(
            path,
            {type:bundle.embeddedResources.isEmbedded?'base64':''},
            function(buffer){
                cache.set(resourcePath,buffer);
                q.resolveTask();
            }
        );
        q.addTask();
    };

    this.onComplete = null;

    this.start = function(){
        q.start();
    };

};