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

        s.showCreateAnimationDialog = function() {
            s.editData.currFrAnimationInEdit = new ve.models.FrameAnimation();
            s.editData.currFrAnimationInEdit._gameObject = s.editData.currGameObjectInEdit;
            uiHelper.showDialog('frmCreateAnimation');
        };

        s.deleteFrameAnimation = function(item) {
            resourceDao.deleteResource(item.id,item.type,function(){
                s.editData.currGameObjectInEdit.frameAnimationIds.splice(
                    s.editData.currGameObjectInEdit.frameAnimationIds.indexOf(item.id),
                    1
                );
                resourceDao.createOrEditResource(
                    s.editData.currGameObjectInEdit,
                    ve.models.GameObject,
                    ve_local.bundle.gameObjectList,
                    null,true
                );
            });
        };

        s.showEditAnimationDialog = function(item) {
            s.editData.currFrAnimationInEdit = item.clone();
            s.editData.currFrAnimationInEdit._gameObject = s.editData.currGameObjectInEdit;
            uiHelper.showDialog('frmCreateAnimation');
        };

        s.showEditCommonBehaviourDialog = function(item) {
            s.editData.currCommonBehaviourInEdit = item.clone();
            uiHelper.showDialog('frmCreateCommonBehaviour');
        };

        s.deleteGameObjectFromCtxMenu = function(object){
            var layer = editData.currLayerInEdit;
            resourceDao.deleteObjectFromResource(layer.type,layer.protoId,'gameObjectProps',object.id);
            layer._gameObjects.removeIf({id:object.id});
            uiHelper.closeContextMenu();
        };

        s.editGameObjectFromCtxMenu = function(object){
            editData.currGameObjectInEdit = object.clone(ve.models.GameObject);
            editData.currGameObjectInEdit.spriteSheet = ve_local.bundle.spriteSheetList.getIf({id: s.editData.currGameObjectInEdit.id});
            uiHelper.showDialog('frmCreateGameObject');
        }

    });