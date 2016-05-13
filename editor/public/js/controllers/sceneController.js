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

        s.onGameObjectDropped = function(obj) {
            console.log('dropped',obj);
        }

    });