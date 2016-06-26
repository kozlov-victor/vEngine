
(function(){

    ve_local.Mouse = function(canvas){

        var self = this;
        self.isMouseDown = false;

        if ('touchstart' in canvas) {
            canvas.ontouchstart = function(e){
                resolveClick(e);
            };
        } else {
            canvas.onmousedown = function(e){
                resolveClick(e);
            };
            canvas.onmouseup = function(){
                self.isMouseDown = false;
            };
            canvas.onmousemove = function(e){
                resolveMouseMove(e);
            }
        }

        var resolveClick = function(e){
            self.isMouseDown = true;
            var scene = ve.sceneManager.getCurrScene();
            if (!scene) return;
            var point = {x: e.clientX,y: e.clientY};
            scene._layers.someReversed(function(l){
                var found = false;
                l._gameObjects.someReversed(function(g){
                    if (
                        ve.Math.isPointInRect(point,g.getRect())
                    ) {
                        g.on('click',{
                            screenX:point.x,
                            screenY:point.Y,
                            objectX:point.x- g.posX,
                            objectY:point.y- g.posY
                        });
                        return found = true;
                    }
                });
                return found;
            })

        };

        var resolveMouseMove = function(e){
            var scene = ve.sceneManager.getCurrScene();
            scene.on('mouseMove',{
                screenX: e.clientX,
                screenY: e.clientY
            });
        }

    };

})();