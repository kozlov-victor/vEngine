export declare const DEBUG:boolean;
export declare const IN_EDITOR:boolean;

export interface Image {
    width:number,
    height:number,
    src:string,
    onload:Function
}

export interface ArrayEx<T> extends Array<T>{
    remove:Function
}


