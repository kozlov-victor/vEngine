
(function(){

    ve_local.Collider = function(){

        var gos;

        this.setUp = function(){
            var scene = ve.sceneManager.getCurrScene();
            gos = scene.getAllGameObjects();
        };

        this.check = function(obj,newX,newY){
            if (!obj.rigid) {
                obj.posX = newX;
                obj.posY = newY;
                return;
            }
            var res = gos.some(function(go){
                if (!go.rigid) return;
                if (obj==go) return;
                var objRect = obj.getRect();
                objRect.x = newX;
                objRect.y = newY;
                if (ve.Math.isRectIntersectRect(objRect,go.getRect())) {
                    res = true;
                    obj.trigger('collide',go);
                    return true;
                }
            });
            if (!res) {
                obj.posX = newX;
                obj.posY = newY;
            }
            return res;
        };

    };

})();