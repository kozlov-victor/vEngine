
window.app.
    controller('leftMenuCtrl', function ($scope, $http, $sce, editData, Models, uiHelper, i18n, utils) {
        var s = $scope;
        s.editData = editData;
        s.uiHelper = uiHelper;
        s.i18n = i18n.getAll();
        s.utils = utils;

        s.showCreateSpriteSheetDialog = function(){
            s.editData.currSpriteSheetInEdit = new Models.SpriteSheet({});
            uiHelper.showDialog('frmCreateSpriteSheet');
        };

        s.showEditSpriteSheetDialog = function(currObj){
            s.editData.currSpriteSheetInEdit = currObj.clone(Models.SpriteSheet);
            s.editData.currSpriteSheetInEdit.calcFrameSize();
            uiHelper.showDialog('frmCreateSpriteSheet');
        };

        s.showCreateGameObjectDialog = function() {
            s.editData.currGameObjectInEdit = new Models.GameObject({spriteSheetId:s.editData.spriteSheetList.rs[0] && s.editData.spriteSheetList.rs[0].id});
            utils.recalcGameObjectSize(s.editData.currGameObjectInEdit);
            uiHelper.showDialog('frmCreateGameObject');
        };

        s.showEditGameObjectDialog = function(currObj) {
            s.editData.currGameObjectInEdit = currObj.clone(Models.GameObject);
            s.editData.currGameObjectInEdit.spriteSheet = editData.spriteSheetList.getIf({id: s.editData.currGameObjectInEdit.id});
            uiHelper.showDialog('frmCreateGameObject');
        };

        s.saveGameProps = function(){
            delete editData.gameProps.$objectId;
            delete editData.gameProps.objectId;
            utils.saveGameProps(editData.gameProps);
        };

        s.showCreateSceneDialog = function(){
            s.editData.currSceneInEdit = new Models.Scene({});
            uiHelper.showDialog('frmCreateScene');
        };

        s.showEditSceneDialog = function(currObj){
            s.editData.currSceneInEdit = currObj.clone(Models.Scene);
            uiHelper.showDialog('frmCreateScene');
        };

        (function(){

            var loadGameProps = function(){
                return new Promise(function(resolve){

                    $http({
                        url: '/gameProps/get',
                        method: "POST"
                    }).
                    success(function (gameProps) {
                        editData.gameProps = gameProps;
                        resolve();
                    });

                });
            };

            var loadResource = function(type,ResourceClass,resourceList){
                return new Promise(function(resolve){

                    $http({
                        url: '/resource/getAll',
                        method: "POST",
                        data: {type:type}
                    }).
                    success(function (response) {
                        response && response.forEach && response.forEach(function(item){
                            var r = new ResourceClass(item);
                            resourceList.add(r);
                        });
                        resolve();
                    });

                });
            };

            Promise.
                resolve().
                then(function(){
                    return loadResource('spriteSheet',Models.SpriteSheet,editData.spriteSheetList);
                }).
                then(function(){
                    return loadResource('frameAnimation',Models.FrameAnimation,editData.frameAnimationList);
                }).
                then(function(){
                    return loadResource('gameObject',Models.GameObject,editData.gameObjectList);
                }).
                then(function(){
                    return loadResource('scene',Models.Scene,editData.sceneList);
                }).
                then(function(){
                    return loadGameProps();
                }).
                then(function(){
                    s.$apply();
                    console.log(s.editData.sceneList);
                });

        })();

    });