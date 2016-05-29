
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
            resourceDao.createOrEditResource(s.editData.currLayerInEdit,ve.models.Layer,ve_local.bundle.layerList,
                function(item){
                    if (item.type=='create') {
                        resourceDao.createOrEditObjectInResource(editData.currSceneInEdit,'layerProps',{
                            type:'layer',
                            protoId:item.r.id
                        },function(resp){
                            var l = editData.currLayerInEdit.clone(ve.models.Layer);
                            l.id = item.r.id;
                            l._scene = editData.currSceneInEdit;
                            editData.currSceneInEdit._layers.add(l);
                        });
                    }
                });
        };

    });