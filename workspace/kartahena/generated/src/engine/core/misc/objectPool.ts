

declare const IN_EDITOR:boolean,DEBUG:boolean;

export class ObjectPool<T> {

    private _pool:Array<T> = [];
    private _cnt = 0;

    /**
     * 16 - nice magic value for default pool size
     * @param Class
     * @param {number} numberOfInstances
     */
    constructor(Class:any, numberOfInstances = 16){
        if (DEBUG && !Class) throw `can not instantiate ObjectPool: class not provided in constructor`;
        for (let i=0;i<numberOfInstances;i++){
            this._pool.push(new Class());
        }
    }

    getNextObject():T{
        return this._pool[this._cnt++ % this._pool.length];
    }

}