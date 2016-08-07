
ve_local.SceneManager = function(){

    var self = this;

    this.currScene = null;

    var preloadAndSet = function(scene){
        var q = new ve.utils.Queue();
        q.onResolved = function(){
            ve_local.renderer.setScene(scene);
        };
        var allSprSheets = scene.getAllSpriteSheets();
        ve_local.bundle.particleSystemList.forEach(function(ps){
            allSprSheets.add(ps._gameObject._spriteSheet);
        });
        allSprSheets.asArray().forEach(function(spSheet){
            ve_local.renderer.
                getContext().
                loadTextureInfo('./'+spSheet.resourcePath,function(textureInfo){
                    console.log('loaded texture info',spSheet.resourcePath,textureInfo);
                    spSheet._textureInfo = textureInfo;
                    q.resolveTask();
                });
            q.addTask();
        });
        ve_local.bundle.soundList.forEach(function(snd){
            q.addTask();
            ve_local.sound.loadSound('./'+snd.resourcePath,function(buffer){
                snd._buffer = buffer;
                q.resolveTask();
            });
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
        var scene = ve_local.bundle.sceneList.find({name: sceneName});
        if (!scene) throw 'no scene with name ' + sceneName + ' found';
        self.setScene(scene);
    };

    this.getCurrScene = function(){
        return this.currScene;
    }

};
