window.app.
    controller('sceneCtrl', function (
        $scope,
        $http,
        $sce,
        editData,
        Models,
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
            resourceDao.createOrEditResource(s.editData.currSceneInEdit,Models.Scene,editData.sceneList);
        };

        s.onKeyPress = function(e){
           //console.log(e.which);
           if (!editData.currSceneGameObjectInEdit) return;
           switch (e.which) {
               case 38: // up
                   editData.currSceneGameObjectInEdit.posY-=1;
                   break;
               case 40: // down
                   editData.currSceneGameObjectInEdit.posY+=1;
                   break;
               case 37: // left
                   editData.currSceneGameObjectInEdit.posX-=1;
                   break;
               case 39: // right
                   editData.currSceneGameObjectInEdit.posX+=1;
                   break;
           }
        };

        s.onGameObjectDropped = function(obj,draggable,e) {

            switch (draggable) {
                case 'gameObjFromLeftPanel':
                    var newGameObj = obj.clone(Models.GameObject);
                    newGameObj.fromJsonObject({posX:e.x,posY:e.y});
                    editData.currSceneInEdit._gameObjects.add(newGameObj);
                    editData.currSceneGameObjectInEdit = newGameObj;
                    break;
                case 'gameObjFromSelf':
                    obj.fromJsonObject({posX:e.x,posY:e.y});
                    editData.currSceneGameObjectInEdit = obj;
                    break;
            }
        }

    });