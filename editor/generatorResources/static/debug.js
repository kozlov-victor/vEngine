(function(){

    window.onerror = function(e){
        window.top.postMessage(e,'*');
    }

})();