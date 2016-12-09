
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
        var bundle = require('bundle');
        var Layer = require('layer');


        s.createOrEditLayer = function(){
            if (s.editData.currLayerInEdit.id) { // edit resource
                var dataToEdit = s.editData.currLayerInEdit.clone();
                dataToEdit.id = dataToEdit.protoId;
                resourceDao.createOrEditResource(dataToEdit);
            } else { // create object in resource
                resourceDao.createOrEditLayer(s.editData.currLayerInEdit);
            }
        };


        (function(){
            var dialogState = uiHelper.getDialogState();
            if (dialogState.opName=='create') {
                editData.currLayerInEdit = new Layer({sceneId:editData.currSceneInEdit.id});
                editData.currLayerInEdit._scene = editData.currSceneInEdit;
                if (editData.currSceneInEdit._layers.size()==0) {
                    editData.currLayerInEdit.name = 'mainLayer';
                }
            } else if (dialogState.opName=='edit'){
                editData.currLayerInEdit = dialogState.opObject.clone();
                editData.currLayerInEdit._scene = editData.currSceneInEdit;
            }


        })();


    });