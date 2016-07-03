(function(){

    window.onerror = function(e){
        window.top.postMessage(e,'*');
        ve_local.renderer && ve_local.renderer.cancel();
    };

    window.debug = {};
    window.debug.error = function(err){
        window.top.postMessage({err:err},'*');
        throw err;
    };

})();