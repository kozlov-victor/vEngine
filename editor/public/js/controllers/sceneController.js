window.app.
    controller('sceneCtrl', function (
        $scope,
        $http,
        $sce,
        editData,
        uiHelper,
        i18n,
        utils,
        resourceDao
    ) {
        var s = $scope;
        s.editData = editData;
        s.uiHelper = uiHelper;
        s.i18n = i18n.getAll();
        s.utils = utils;
        s.resourceDao = resourceDao;

        s.createOrEditScene = function(){
            resourceDao.createOrEditResource(s.editData.currSceneInEdit,ve.models.Scene,ve_local.bundle.sceneList);
        };

        var tid = 0;
        s.onKeyPress = function(e){
           //console.log(e.which);
           if (!editData.currSceneGameObjectInEdit) return;
            var edited = false;
            switch (e.which) {
               case 38: // up
                   edited = true;
                   editData.currSceneGameObjectInEdit.posY-=1;
                   break;
               case 40: // down
                   edited = true;
                   editData.currSceneGameObjectInEdit.posY+=1;
                   break;
               case 37: // left
                   edited = true;
                   editData.currSceneGameObjectInEdit.posX-=1;
                   break;
               case 39: // right
                   edited = true;
                   editData.currSceneGameObjectInEdit.posX+=1;
                   break;
           }
           if (edited) {
               clearTimeout(tid);
               tid = setTimeout(function(){
                   resourceDao.createOrEditObjectInResource(editData.currSceneInEdit,'gameObjectProps',{
                       posX:editData.currSceneGameObjectInEdit.posX,
                       posY:editData.currSceneGameObjectInEdit.posY,
                       id:editData.currSceneGameObjectInEdit.id
                   });
               },200);
           }
        };

        s.onGameObjectDropped = function(obj,draggable,e) {

            switch (draggable) {
                case 'gameObjFromLeftPanel':
                    resourceDao.createOrEditObjectInResource(editData.currSceneInEdit,'gameObjectProps',{
                        type:'gameObject',
                        posX:e.x,
                        posY:e.y,
                        protoId:obj.id
                    },function(resp){
                        var newGameObj = obj.clone(ve.models.GameObject);
                        newGameObj.fromJsonObject({posX:e.x,posY:e.y,protoId:newGameObj.id,id:resp.id});
                        editData.currSceneInEdit._gameObjects.add(newGameObj);
                        editData.currSceneGameObjectInEdit = newGameObj;
                    });
                    break;
                case 'gameObjFromSelf':
                    resourceDao.createOrEditObjectInResource(editData.currSceneInEdit,'gameObjectProps',{
                        posX:e.x,
                        posY:e.y,
                        id:obj.id
                    });
                    obj.fromJsonObject({posX:e.x,posY:e.y});
                    editData.currSceneGameObjectInEdit = obj;
                    break;
            }
        }

    });