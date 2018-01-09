/*global DEBUG:true*/
declare const DEBUG:boolean;

export default class ObjectPool {

    _pool = [];
    _cnt = 0;

    /**
     * 16 - nice magic value for default pool size
     * @param Class
     * @param {number} numberOfInstances
     */
    constructor(Class, numberOfInstances = 16){
        if (DEBUG && !Class) throw `can not instantiate ObjectPool: class not provided in constructor`;
        for (let i=0;i<numberOfInstances;i++){
            this._pool.push(new Class());
        }
    }

    getNextObject(){
        return this._pool[this._cnt++ % this._pool.length];
    }

}