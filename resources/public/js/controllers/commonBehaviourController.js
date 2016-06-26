
window.app.
    controller('commonBehaviourCtrl', function (
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

        s.createOrEditCommonBehaviour = function(obj){
            resourceDao.createOrEditObjectInResource(
                s.editData.currGameObjectInEdit.type,s.editData.currGameObjectInEdit.id,
                obj.type,obj,
                function(resp){
                    if (resp.type=='create') {
                        obj.id = resp.r.id;
                        s.editData.currGameObjectInEdit._commonBehaviour.add(obj);
                        s.editData.currGameObjectInEdit.commonBehaviour.push(obj.toJsonObj());
                    }
                    uiHelper.closeDialog();
                }
            );
        }

    });