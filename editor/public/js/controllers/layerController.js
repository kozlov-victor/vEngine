
window.app.
    controller('layerCtrl', function (
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

        s.createOrEditLayer = function(){
            resourceDao.createOrEditResource(s.editData.currLayerInEdit,ve.models.Layer,ve_local.bundle.layerList);
        };

    });