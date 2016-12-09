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
        var bundle = require('bundle');
        var GameObject = require('gameObject');

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
            resourceDao.createOrEditResource(s.editData.currGameObjectInEdit,GameObject,bundle.gameObjectList,function(op){
                if (op.type=='create') {
                    resourceDao.createFile(
                        s.editData.currGameObjectInEdit.name+'.js',
                        'script/gameObject',window.DEFAULT_CODE_SCRIPT);
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
                    GameObject,
                    bundle.gameObjectList,
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

        s.deleteGameObjectFromCtxMenu = function(object){
            var layer = editData.currLayerInEdit;
            resourceDao.deleteObjectFromResource(layer.type,layer.protoId,'gameObjectProps',object.id);
            layer._gameObjects.remove({id: object.id});
            uiHelper.closeContextMenu();
        };

        (function(){
            var dialogState = uiHelper.getDialogState();
            if (dialogState.opName=='create') {
                var targetSpriteSheet = bundle.spriteSheetList.getLast();
                editData.currGameObjectInEdit = new GameObject({
                    spriteSheetId:
                    targetSpriteSheet &&
                    targetSpriteSheet.id
                });
                if (targetSpriteSheet) {
                    editData.currGameObjectInEdit.name = targetSpriteSheet.name;
                }
                utils.recalcGameObjectSize(s.editData.currGameObjectInEdit);
            } else if (dialogState.opName=='edit'){
                editData.currGameObjectInEdit = dialogState.opObject.clone();
                editData.currGameObjectInEdit.spriteSheet = bundle.spriteSheetList.find({id: s.editData.currGameObjectInEdit.id});
            }

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