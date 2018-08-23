
export class DebugError extends Error {

    constructor(message:string){
        super(message);
        this.name = 'DebugError';
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, DebugError);
        } else {
            this.stack = (new Error()).stack;
        }
    }

}