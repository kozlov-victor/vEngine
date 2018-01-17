
declare const RF:any;

export let alertEx = function(message){
    RF.getComponentById('alertDialog').open(message);
};

export let confirmEx = function(message,callback){
    RF.getComponentById('confirmDialog').open(message,callback);
};