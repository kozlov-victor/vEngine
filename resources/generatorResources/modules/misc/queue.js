exports.Queue = function(){
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
    this.start = function() {
        if (this.size()==0) this.onResolved();
    }
};