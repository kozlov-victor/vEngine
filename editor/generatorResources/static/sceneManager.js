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
        console.log('allSprSheets',allSprSheets.asArray());

    };

    this.setScene = function(scene){
        preloadAndSet(scene);
    }
};

var sceneManager = new SceneManager();

window.addEventListener('load',function(){
    renderer.init();
    sceneManager.setScene(DataSource.sceneList.get(0));
});