
window.app.
    controller('leftMenuCtrl', function (

        $scope,
        $http,
        $sce,
        editData,
        uiHelper,
        i18n,
        utils,
        resourceDao,
        messageDigest
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
            editData.currGameObjectInEdit.spriteSheet = ve_local.bundle.spriteSheetList.find({id: s.editData.currGameObjectInEdit.id});
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
            layer._gameObjects.remove({id: object.id});
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

        s.showCreateFontDialog = function(){
            editData.currFontInEdit = new ve.models.Font();
            uiHelper.showDialog('frmCreateFont');
        };

        s.showEditFontDialog = function(font){
            editData.currFontInEdit = font.clone();
            uiHelper.showDialog('frmCreateFont');
        };

        s.deleteLayer = function(scene,l){
            l._gameObjects.clear();
            scene._layers.remove({id: l.id});
            resourceDao.deleteObjectFromResource(scene.type,scene.id,'layerProps', l.id);
        };

        s.showScript = function(model){
            s.uiHelper.window = 'scriptWindow';
            s.editData.scriptEditorUrl =
                '/editor?name='+
                model.name+
                '&path='+encodeURIComponent('script/'+model.type
            );
        };

    });