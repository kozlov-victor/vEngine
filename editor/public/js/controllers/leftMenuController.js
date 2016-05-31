
window.app.
    controller('leftMenuCtrl', function (

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

        s.showCreateSpriteSheetDialog = function(){
            editData.currSpriteSheetInEdit = new ve.models.SpriteSheet({});
            uiHelper.showDialog('frmCreateSpriteSheet');
        };

        s.showEditSpriteSheetDialog = function(currObj){
            editData.currSpriteSheetInEdit = currObj.clone(ve.models.SpriteSheet);
            editData.currSpriteSheetInEdit.calcFrameSize();
            uiHelper.showDialog('frmCreateSpriteSheet');
        };

        s.showCreateGameObjectDialog = function() {
            editData.currGameObjectInEdit = new ve.models.GameObject({spriteSheetId:ve_local.bundle.spriteSheetList.get(0) && ve_local.bundle.spriteSheetList.get(0).id});
            utils.recalcGameObjectSize(s.editData.currGameObjectInEdit);
            uiHelper.showDialog('frmCreateGameObject');
        };

        s.showEditGameObjectDialog = function(currObj) {
            editData.currGameObjectInEdit = currObj.clone(ve.models.GameObject);
            editData.currGameObjectInEdit.spriteSheet = ve_local.bundle.spriteSheetList.getIf({id: s.editData.currGameObjectInEdit.id});
            uiHelper.showDialog('frmCreateGameObject');
        };

        s.saveGameProps = function(){
            delete editData.gameProps.$objectId;
            delete editData.gameProps.objectId;
            resourceDao.saveGameProps(editData.gameProps);
        };

        s.showCreateSceneDialog = function(){
            editData.currSceneInEdit = new ve.models.Scene({});
            uiHelper.showDialog('frmCreateScene');
        };

        s.showEditSceneDialog = function(currObj){
            editData.currSceneInEdit = currObj.clone(ve.models.Scene);
            uiHelper.showDialog('frmCreateScene');
        };

        s.deleteScene = function(item){
            item._layers.clear();
            resourceDao.deleteResource(item.id,'scene');
        };

        s.deleteGameObjectFromLayer = function(layer,object){
            resourceDao.deleteObjectFromResource(layer.type,layer.protoId,'gameObjectProps',object.id);
            layer._gameObjects.removeIf({id:object.protoId});
        };

        s.showCreateLayerDialog = function(scene){
            editData.currLayerInEdit = new ve.models.Layer({sceneId:scene.id});
            editData.currLayerInEdit._scene = editData.currSceneInEdit;
            uiHelper.showDialog('frmCreateLayer');
        };

        s.showEditLayerDialog = function(e,layer){
            e.stopPropagation();
            editData.currLayerInEdit = layer.clone(ve.models.Layer);
            uiHelper.showDialog('frmCreateLayer');
        };

        s.deleteLayer = function(scene,l){
            l._gameObjects.clear();
            scene._layers.removeIf({id: l.id});
            resourceDao.deleteObjectFromResource(scene.type,scene.id,'layerProps', l.id);
        };

        (function(){

            Promise.
                resolve().
                then(function(){
                    return resourceDao.loadResources();
                }).
                then(function(){
                    if (!ve_local.bundle.sceneList.isEmpty()) s.editData.currSceneInEdit = ve_local.bundle.sceneList.get(0);
                    if (s.editData.currSceneInEdit) {
                        if (s.editData.currSceneInEdit._layers.size()) {
                            s.editData.currLayerInEdit = s.editData.currSceneInEdit._layers.get(0);
                        }
                    }
                    s.$apply();
                });

        })();

    });