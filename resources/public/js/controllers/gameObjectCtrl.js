window.app.
    controller('gameObjectCtrl', function (
        $scope,
        $http,
        $sce,
        editData,
        uiHelper,
        i18n,
        utils,
        resourceDao
    ) {
        var s = $scope;
        s.editData = editData;
        s.uiHelper = uiHelper;
        s.i18n = i18n.getAll();
        s.utils = utils;
        s.resourceDao = resourceDao;

        s.refreshGameObjectFramePreview = function(gameObject,ind){
            var spriteSheet = gameObject._spriteSheet;
            if (!spriteSheet) return;
            var maxNumOfFrame = spriteSheet.numOfFramesH*spriteSheet.numOfFramesV-1;
            if (s.editData.currGameObjectInEdit.currFrameIndex>=maxNumOfFrame) {
                s.editData.currGameObjectInEdit.currFrameIndex = 0;
            }
            gameObject.setFrameIndex(ind);
        };

        s.createOrEditGameObject = function(){
            resourceDao.createOrEditResource(s.editData.currGameObjectInEdit,ve.models.GameObject,ve_local.bundle.gameObjectList,function(op){
                if (op.type=='create') {
                    resourceDao.createFile(s.editData.currGameObjectInEdit.name+'.js','script/gameObject',ve_local.DEFAULT_CODE_SCRIPT);
                }
            });
        };

        s.deleteFrameAnimation = function(item) {
            resourceDao.deleteResource(item.id,item.type,function(){
                s.editData.currGameObjectInEdit.frameAnimationIds.splice(
                    s.editData.currGameObjectInEdit.frameAnimationIds.indexOf(item.id),
                    1
                );
                s.editData.currGameObjectInEdit._frameAnimations.remove({id:item.id});
                resourceDao.createOrEditResource(
                    s.editData.currGameObjectInEdit,
                    ve.models.GameObject,
                    ve_local.bundle.gameObjectList,
                    null,true
                );
            });
        };

        s.deleteCommonBehaviour = function(item){
            resourceDao.deleteObjectFromResource(
                editData.currGameObjectInEdit.type,
                editData.currGameObjectInEdit.id,
                item.type,
                item.id,
                function(){
                    s.editData.currGameObjectInEdit._commonBehaviour.remove({id:item.id});
                    utils.removeFromArray(s.editData.currGameObjectInEdit.commonBehaviour,{id:item.id});
                }
            );
        };

        s.showCreateAnimationDialog = function() {
            s.editData.currFrAnimationInEdit = new ve.models.FrameAnimation();
            s.editData.currFrAnimationInEdit._gameObject = s.editData.currGameObjectInEdit;
            uiHelper.showDialog('frmCreateAnimation');
        };

        s.showEditAnimationDialog = function(item) {
            s.editData.currFrAnimationInEdit = item.clone();
            s.editData.currFrAnimationInEdit._gameObject = s.editData.currGameObjectInEdit;
            uiHelper.showDialog('frmCreateAnimation');
        };

        s.showCreateCommonBehaviourDialog = function(name){
            s.editData.currCommonBehaviourInEdit = new ve.models.CommonBehaviour();
            s.editData.currCommonBehaviourInEdit.name = name;
            var obj =
                editData.commonBehaviourList.find({
                    name: name
                });
            if (!obj) return;
            s.editData.currCommonBehaviourInEdit.parameters = obj.clone().parameters;
            uiHelper.showDialog('frmCreateCommonBehaviour');
        };


        s.showEditCommonBehaviourDialog = function(item) {
            s.editData.currCommonBehaviourInEdit = item.clone();
            uiHelper.showDialog('frmCreateCommonBehaviour');
        };


        s.deleteGameObjectFromCtxMenu = function(object){
            var layer = editData.currLayerInEdit;
            resourceDao.deleteObjectFromResource(layer.type,layer.protoId,'gameObjectProps',object.id);
            layer._gameObjects.remove({id: object.id});
            uiHelper.closeContextMenu();
        };

        (function(){

            if (uiHelper.opName=='create') {
                editData.currGameObjectInEdit = new ve.models.GameObject({spriteSheetId:ve_local.bundle.spriteSheetList.get(0) && ve_local.bundle.spriteSheetList.get(0).id});
                utils.recalcGameObjectSize(s.editData.currGameObjectInEdit);
            } else if (uiHelper.opName=='edit'){
                editData.currGameObjectInEdit = uiHelper.opObject.clone(ve.models.GameObject);
                editData.currGameObjectInEdit.spriteSheet = ve_local.bundle.spriteSheetList.find({id: s.editData.currGameObjectInEdit.id});
            }
            uiHelper.opName = null;

            s.availableCommonBehaviour = [];
            if (!s.editData.currGameObjectInEdit) return;
            var appliedBehaviours = s.editData.currGameObjectInEdit._commonBehaviour;
            s.editData.commonBehaviourList.forEach(function(cb){
                if (appliedBehaviours.find({name: cb.name})) return;
                s.availableCommonBehaviour.push(cb);
            });
            s.selectedBehaviourName = s.availableCommonBehaviour[0] && s.availableCommonBehaviour[0].name;

        })();




    });