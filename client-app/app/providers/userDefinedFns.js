/*global RF:true*/
window.alertEx = function(message){
    RF.getComponentById('alertDialog').open(message);
};

window.confirmEx = function(message,callback){
    RF.getComponentById('confirmDialog').open(message,callback);
};