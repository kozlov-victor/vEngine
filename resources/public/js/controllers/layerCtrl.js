
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
                var dataToEdit = s.editData.currLayerInEdit.clone(ve.models.Layer);
                dataToEdit.id = dataToEdit.protoId;
                resourceDao.createOrEditResource(dataToEdit);
            } else { // create object in resource
                resourceDao.createOrEditLayer(s.editData.currLayerInEdit);
            }
        };


        (function(){

            if (uiHelper.opName=='create') {
                editData.currLayerInEdit = new ve.models.Layer({sceneId:editData.currSceneInEdit.id});
                editData.currLayerInEdit._scene = editData.currSceneInEdit;
            } else if (uiHelper.opName=='edit'){
                editData.currLayerInEdit = uiHelper.opObject.clone();
            }
            uiHelper.opName = null;


        })();


    });