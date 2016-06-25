(function(){

    window.onerror = function(e){
        window.top.postMessage(e,'*');
    };

    window.debug = {};
    window.debug.error = function(err){
        window.top.postMessage({err:err},'*');
        throw err;
    };

})();