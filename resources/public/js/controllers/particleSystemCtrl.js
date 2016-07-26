

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


        (function(){
            var dialogState = uiHelper.getDialogState();
            if (dialogState.opName=='create') {
                editData.currParticleSystemInEdit = new ve.models.ParticleSystem();
            } else if (dialogState.opName=='edit'){

            }
        })();





    });