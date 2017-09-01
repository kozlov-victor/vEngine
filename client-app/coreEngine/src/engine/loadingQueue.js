export default class Queue{

    constructor(){
        this.tasksResolved = 0;
        this.tasks = [];
        this.tasksProgressById = {};
        this.tasts = [];
        this.onResolved = null;
        this.onProgress = null;
    }

    size(){
        return this.tasks.length;
    }

    calcProgress(){
        let sum = 0;
        Object.keys(this.tasksProgressById).forEach(function(taskId){
            sum+=this.tasksProgressById[taskId]||0;
        });
        return sum/this.tasks.length;
    }

    addTask(taskFn,taskId) {
        this.tasks.push(taskFn);
        this.tasksProgressById[taskId] = 0;
    };
    progressTask(taskId,progress){
        this.tasksProgressById[taskId] = progress;
        this.onProgress && this.onProgress(this.calcProgress());
    };
    resolveTask(taskId){
        this.tasksResolved++;
        this.tasksProgressById[taskId] = 1;
        if (this.tasks.length==this.tasksResolved) {
            this.onProgress && this.onProgress(1);
            if (this.onResolved) this.onResolved();
        } else {
            this.onProgress && this.onProgress(this.calcProgress());
        }
    };
    start() {
        if (this.size()==0) this.onResolved();
        this.tasks.forEach(t=>{
            t && t();
        });
    }
};