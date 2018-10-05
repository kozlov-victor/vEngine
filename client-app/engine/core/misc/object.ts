
export const isObjectMatch =(obj:any,query:{[key:string]:any}):boolean=>{
    if (!(obj && query)) return false;
    let match:boolean = true;
    let keys:string[] = Object.keys(query);
    if (!keys.length) return false;
    keys.some((key:string)=>{
        if (obj[key]!=query[key]) {
            match = false;
            return true;
        }
    });
    return match;
};

export const isObject = (obj:any):boolean=>{
    return obj === Object(obj);
};