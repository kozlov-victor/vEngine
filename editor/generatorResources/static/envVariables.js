
var ve = {};
var ve_local = {};

window.debug = {};
window.debug.error = function(err){
   window.top.postMessage({err:err},'*');
   throw err;
};