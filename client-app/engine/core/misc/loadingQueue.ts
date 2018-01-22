export default class Queue{

    private tasksResolved = 0;
    private tasks:Array<Function> = [];
    private tasksProgressById:{[taskId:number]:number} = {};

    public onResolved:()=>void;
    public onProgress:(n:number)=>void;

    constructor(){

    }

    private size(){
        return this.tasks.length;
    }

    private calcProgress(){
        let sum = 0;
        Object.keys(this.tasksProgressById).forEach((taskId:string)=>{
            sum+=this.tasksProgressById[+taskId]||0;
        });
        return sum/this.tasks.length;
    }

    private progressTask(taskId:number,progress:number){
        this.tasksProgressById[taskId] = progress;
        this.onProgress && this.onProgress(this.calcProgress());
    };

    public resolveTask(taskId:number){
        this.tasksResolved++;
        this.tasksProgressById[taskId] = 1;
        if (this.tasks.length===this.tasksResolved) {
            this.onProgress && this.onProgress(1);
            if (this.onResolved) this.onResolved();
        } else {
            this.onProgress && this.onProgress(this.calcProgress());
        }
    };

    addTask(taskFn:Function,taskId:number) {
        this.tasks.push(taskFn);
        this.tasksProgressById[taskId] = 0;
    };

    start() {
        if (this.size()===0) this.onResolved();
        this.tasks.forEach(t=>{
            t && t();
        });
    }
};