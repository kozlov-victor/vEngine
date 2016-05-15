
window.app.
    controller('leftMenuCtrl', function (
        $scope,
        $http,
        $sce,
        editData,
        Models,
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

        s.showCreateSpriteSheetDialog = function(){
            editData.currSpriteSheetInEdit = new Models.SpriteSheet({});
            uiHelper.showDialog('frmCreateSpriteSheet');
        };

        s.showEditSpriteSheetDialog = function(currObj){
            editData.currSpriteSheetInEdit = currObj.clone(Models.SpriteSheet);
            editData.currSpriteSheetInEdit.calcFrameSize();
            uiHelper.showDialog('frmCreateSpriteSheet');
        };

        s.showCreateGameObjectDialog = function() {
            editData.currGameObjectInEdit = new Models.GameObject({spriteSheetId:s.editData.spriteSheetList.rs[0] && s.editData.spriteSheetList.rs[0].id});
            utils.recalcGameObjectSize(s.editData.currGameObjectInEdit);
            uiHelper.showDialog('frmCreateGameObject');
        };

        s.showEditGameObjectDialog = function(currObj) {
            editData.currGameObjectInEdit = currObj.clone(Models.GameObject);
            editData.currGameObjectInEdit.spriteSheet = editData.spriteSheetList.getIf({id: s.editData.currGameObjectInEdit.id});
            uiHelper.showDialog('frmCreateGameObject');
        };

        s.saveGameProps = function(){
            delete editData.gameProps.$objectId;
            delete editData.gameProps.objectId;
            resourceDao.saveGameProps(editData.gameProps);
        };

        s.showCreateSceneDialog = function(){
            editData.currSceneInEdit = new Models.Scene({});
            uiHelper.showDialog('frmCreateScene');
        };

        s.showEditSceneDialog = function(currObj){
            editData.currSceneInEdit = currObj.clone(Models.Scene);
            uiHelper.showDialog('frmCreateScene');
        };

        s.deleteScene = function(item){
            console.log('del');
            item._gameObjects.clear();
            resourceDao.deleteResource(item.id,'scene');
        };

        (function(){


            Promise.
                resolve().
                then(function(){
                    return resourceDao.loadResource('spriteSheet',Models.SpriteSheet,editData.spriteSheetList);
                }).
                then(function(){
                    return resourceDao.loadResource('frameAnimation',Models.FrameAnimation,editData.frameAnimationList);
                }).
                then(function(){
                    return resourceDao.loadResource('gameObject',Models.GameObject,editData.gameObjectList);
                }).
                then(function(){
                    return resourceDao.loadResource('scene',Models.Scene,editData.sceneList);
                }).
                then(function(){
                    return resourceDao.loadGameProps();
                }).
                then(function(){
                    if (!editData.sceneList.isEmpty()) s.editData.currSceneInEdit = editData.sceneList.get(0);
                    s.$apply();
                });

        })();

    });