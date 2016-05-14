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
            console.log('dropped',obj,draggable,e);
            s.testLeft = e.offsetX;
            s.testTop = e.offsetY;
            switch (draggable) {
                case 'gameObjFromLeftPanel':
                    var newGameObj = obj.clone(Models.GameObject);
                    newGameObj.fromJsonObject({posX:e.offsetX,posY:e.offsetY});
                    editData.sceneList.rs[0]._gameObjects.add(newGameObj);
                    break;
                case 'gameObjFromSelf':
                    obj.fromJsonObject({posX:e.offsetX,posY:e.offsetY});
            }
        }

    });