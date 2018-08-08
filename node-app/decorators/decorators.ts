

const decorateTarget = (target,methodName,requestType='get',responseType)=>{
    target.meta = target.meta || {};
    target.meta[methodName] = target.meta[methodName] || {};
    target.meta[methodName].requestType = requestType;
    if (responseType) target.meta[methodName].responseType = responseType;
};

export const Post = ()=>{
    return (target, methodName, descriptor):any => {
        decorateTarget(target,methodName,'post',undefined);
    };
};

export const Get = ()=>{
    return (target, methodName, descriptor) => {
        decorateTarget(target,methodName,'get',undefined);
    };
};

export const Multipart = ()=>{
    return (target, methodName, descriptor) => {
        decorateTarget(target,methodName,'multipart',undefined);
    };
};

export const View = ()=>{
    return (target, methodName, descriptor) => {
        decorateTarget(target,methodName,undefined,'view');
    };
};