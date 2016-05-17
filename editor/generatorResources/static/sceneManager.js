var Queue = function(){
    var self = this;
    this.size = function(){
        return tasksTotal;
    };
    this.onResolved = null;
    var tasksTotal = 0;
    var tasksResolved = 0;
    this.addTask = function() {
        tasksTotal++;
    };
    this.resolveTask = function(){
        tasksResolved++;
        if (tasksTotal==tasksResolved) {
            if (self.onResolved) self.onResolved();
        }
    };
};

var SceneManager = function(){

    var preloadAndSet = function(scene){
        var q = new Queue();
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

var sceneManager = new SceneManager();

window.addEventListener('load',function(){
    renderer.init();
    if (DataSource.sceneList.size()==0) throw 'create scene first!';
    sceneManager.setScene(DataSource.sceneList.get(0));
});