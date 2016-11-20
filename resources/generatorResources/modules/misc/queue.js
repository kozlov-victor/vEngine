exports.Queue = function(){
    var self = this;
    this.size = function(){
        return tasksTotal;
    };
    this.onResolved = null;
    this.onProgress = null;
    var tasksTotal = 0;
    var tasksResolved = 0;
    var tasks = [];
    var tasksProgressById = {};

    var calcProgress = function(){
        var sum = 0;
        Object.keys(tasksProgressById).forEach(function(taskId){
            sum+=tasksProgressById[taskId]||0;
        });
        return sum/tasksTotal;
    };

    this.addTask = function(taskFn,taskId) {
        tasks.push(taskFn);
        tasksTotal++;
        tasksProgressById[taskId] = 0;
    };
    this.progressTask = function(taskId,progress){
        tasksProgressById[taskId] = progress;
        this.onProgress && this.onProgress(calcProgress());
    };
    this.resolveTask = function(taskId){
        tasksResolved++;
        tasksProgressById[taskId] = 1;
        if (tasksTotal==tasksResolved) {
            this.onProgress && this.onProgress(1);
            if (self.onResolved) self.onResolved();
        } else {
            this.onProgress && this.onProgress(calcProgress());
        }
    };
    this.start = function() {
        if (this.size()==0) this.onResolved();
        tasks.forEach(function(t){
            t && t();
        });
    }
};