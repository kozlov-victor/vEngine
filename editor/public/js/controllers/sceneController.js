window.app.
    controller('sceneCtrl', function ($scope, $http, $sce, editData, Models, uiHelper, i18n, utils) {
        var s = $scope;
        s.editData = editData;
        s.uiHelper = uiHelper;
        s.i18n = i18n.getAll();
        s.utils = utils;

        s.createOrEditScene = function(){
            utils.createOrEditResource(s.editData.currSceneInEdit,Models.Scene,editData.sceneList);
        };

        s.onGameObjectDropped = function(obj,draggable,e) {

            switch (draggable) {
                case 'gameObjFromLeftPanel':
                    var newGameObj = obj.clone(Models.GameObject);
                    newGameObj.fromJsonObject({posX:e.x,posY:e.y});
                    editData.currSceneInEdit._gameObjects.add(newGameObj);
                    //utils.addGameObjectToScene(editData.currSceneInEdit.id,);
                    break;
                case 'gameObjFromSelf':
                    obj.fromJsonObject({posX:e.x,posY:e.y});
            }
        }

    });