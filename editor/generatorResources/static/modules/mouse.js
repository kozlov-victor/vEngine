
(function(){

    ve_local.Mouse = function(canvas){

        if ('touchstart' in canvas) {
            canvas.ontouchstart = function(e){
                resolveClick(e);
            }
        } else {
            canvas.onclick = function(e){
                resolveClick(e);
            }
        }

        var resolveClick = function(e){

        }

    };

})();