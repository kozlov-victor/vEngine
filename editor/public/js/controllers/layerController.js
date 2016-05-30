
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
            if (s.editData.currLayerInEdit.id) { // edit resource
                resourceDao.createOrEditResource(s.editData.currLayerInEdit);
            } else { // create object in resource
                resourceDao.createOrEditLayer(s.editData.currLayerInEdit);
            }

        };

    });