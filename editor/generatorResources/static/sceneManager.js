
var SceneManager = function(){

    var preloadAndSet = function(scene){
        var q = new ve.utils.Queue();
        q.onResolved = function(){
            renderer.setScene(scene);
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
        preloadAndSet(scene);
    }
};

(function(){

    var resourceSet = new ResourceSet({
        audio: '%audio%',
        frameAnimation: '%frameAnimation%',
        gameObject: '%gameObject%',
        scene: '%scene%',
        spriteSheet: '%spriteSheet%',
        gameProps: '%gameProps%'
    });
    var renderer = new CanvasRenderer();
    var sceneManager = new SceneManager();

    window.addEventListener('load',function(){
        renderer.init();
        if (DataSource.sceneList.size()==0) throw 'create scene first!';
        // for test only
        var go = DataSource.gameObjectList.get(0);
        go._frameAnimations.get(0).play();
        sceneManager.setScene(DataSource.sceneList.get(0));
    });

})();