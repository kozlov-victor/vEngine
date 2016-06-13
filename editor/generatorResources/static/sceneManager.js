
var SceneManager = function(){

    var self = this;

    this.currScene = null;

    var preloadAndSet = function(scene){
        var q = new ve.utils.Queue();
        q.onResolved = function(){
            ve_local.renderer.setScene(scene);
        };
        var allSprSheets = scene.getAllSpriteSheets();
        allSprSheets.asArray().forEach(function(spSheet){
            spSheet._img = new Image();
            spSheet._img.src = './'+spSheet.resourcePath;
            if (!spSheet._img.src.complete) q.addTask();
            spSheet._img.onload = q.resolveTask;
        });
        if (q.size()==0) q.onResolved();
    };

    this.setScene = function(scene){
        this.currScene = scene;
        preloadAndSet(scene);
    };

    this.getScene = function(){
        return this.currScene;
    }

};
