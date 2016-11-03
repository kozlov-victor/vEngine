
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
        var bundle = require('bundle').instance();
        var CommonBehaviour = require('commonBehaviour').CommonBehaviour;

        s.createOrEditCommonBehaviour = function(obj){
            console.log('createOrEditCommonBehaviour>>>>>',obj);
            resourceDao.createOrEditObjectInResource(
                s.editData.currGameObjectInEdit.type,s.editData.currGameObjectInEdit.id,
                obj.type,obj,
                function(resp){
                    if (resp.type=='create') {
                        obj.id = resp.r.id;
                        s.editData.currGameObjectInEdit._commonBehaviour.add(obj);
                        s.editData.currGameObjectInEdit.commonBehaviour.push(obj.toJSON());
                        var dialogStateObj = uiHelper.findDialogStateObjectById(s.editData.currGameObjectInEdit.id);
                        dialogStateObj.commonBehaviour.push(obj.toJSON());
                    } else {
                        dialogStateObj = uiHelper.findDialogStateObjectById(s.editData.currGameObjectInEdit.id);
                        var currItem = dialogStateObj._commonBehaviour.find({id:resp.r.id});
                        currItem.fromJSON(resp.r);
                        console.log('currItem',currItem);
                    }
                    uiHelper.closeDialog();
                }
            );
        };


        (function(){
            var dialogState = uiHelper.getDialogState();
            if (dialogState.opName=='create') {
                s.editData.currCommonBehaviourInEdit = new CommonBehaviour();
                s.editData.currCommonBehaviourInEdit.name = dialogState.opObject;
                var obj =
                    editData.commonBehaviourList.find({
                        name: dialogState.opObject
                    });
                if (obj) {
                    var cloned = obj.clone();
                    s.editData.currCommonBehaviourInEdit.parameters = cloned.parameters;
                    s.editData.currCommonBehaviourInEdit.description = cloned.description;
                }
            } else if (dialogState.opName=='edit'){
                s.editData.currCommonBehaviourInEdit = dialogState.opObject.clone();
            }
        })();



    });