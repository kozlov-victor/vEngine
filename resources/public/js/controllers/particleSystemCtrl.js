

window.app.
    controller('particleSystemCtrl', function (
        $scope,
        $http,
        $sce,
        editData,
        resourceDao,
        uiHelper,
        i18n,
        utils) {

        var s = $scope;
        s.editData = editData;
        s.uiHelper = uiHelper;
        s.i18n = i18n.getAll();
        s.utils = utils;
        s.resourceDao = resourceDao;
        var ParticleSystem = require('particleSystem').ParticleSystem;


        (function(){
            var dialogState = uiHelper.getDialogState();
            if (dialogState.opName=='create') {
                editData.currParticleSystemInEdit = new ParticleSystem({
                    gameObjectId:(editData.gameObjectList.getLast() && editData.gameObjectList.getLast().id)
                });
            } else if (dialogState.opName=='edit'){
                editData.currParticleSystemInEdit = dialogState.opObject.clone();
            }
            s.currGameObject = editData.currParticleSystemInEdit._gameObject;
            dialogState.opName = '';

        })();





    });