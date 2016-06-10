
var ve = {};
var ve_local = {};
ve_local.RESOURCE_NAMES = '%RESOURCE_NAMES%';

window.debug = {};
window.debug.error = function(err){
   window.top.postMessage({err:err},'*');
   throw err;
};