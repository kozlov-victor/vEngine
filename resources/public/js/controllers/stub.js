
window.app.
    controller('stubCtrl', function (
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
        var models = require('models'), bundle = require('bundle').instance();

        (function(){

            if (uiHelper.opName=='create') {
                editData.currSoundInEdit = new ve.models.Sound({});
            } else if (uiHelper.opName=='edit'){
                editData.currSoundInEdit = uiHelper.opObject.clone();
            }
            uiHelper.opName = null;

        })();

    });