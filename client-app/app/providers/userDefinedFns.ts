
declare const RF:any;

export let alertEx = (message)=>{
    RF.getComponentById('alertDialog').open(message);
};

export let confirmEx = async (message)=>{
    let resolveFn = null;
    let p = new Promise((resolve)=>{
        resolveFn = resolve;
    });
    RF.getComponentById('confirmDialog').open(message,resolveFn); // todo move to promise body
    return p;
};