
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
            var scene = ve.sceneManager.getScene();
            if (!scene) return;
            var point = {x: e.clientX,y: e.clientY};
            scene._layers.someReversed(function(l){
                var found = false;
                l._gameObjects.someReversed(function(g){
                    if (
                        ve.Math.isPointInRect(point,g.getRect()) &&
                        g.onClick
                    ) {
                        g.onClick();
                        return found = true;
                    }
                });
                return found;
            })

        }

    };

})();