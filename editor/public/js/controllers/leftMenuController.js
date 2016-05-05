
window.app.
    controller('leftMenuCtrl', function ($scope, $http, $sce, editData, Models, uiHelper, i18n, utils) {
        var s = $scope;
        s.editData = editData;
        s.uiHelper = uiHelper;
        s.i18n = i18n.getAll();

        s.deleteResource = function(id,type){
            $http({
                url: '/resource/delete',
                method: "POST",
                data: {id:id,type:type}
            }).
                success(function (res) {
                    editData[type+'List'].removeIf({id:id});
                });
        };

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
            s.editData.currGameObjectInEdit = new Models.GameObject();
            s.editData.spriteSheetList.rs[0] && (s.editData.currGameObjectInEdit.spriteSheetName = s.editData.spriteSheetList.rs[0].name);
            s.editData.currGameObjectInEdit && utils.recalcGameObjectSize(s.editData.currGameObjectInEdit);
            uiHelper.showDialog('frmCreateGameObject');
        };

        s.showEditGameObjectDialog = function(currObj) {
            s.editData.currGameObjectInEdit = currObj.clone(Models.GameObject);
            s.editData.currGameObjectInEdit._spriteSheet = editData.spriteSheetList.getIf({name: s.editData.currGameObjectInEdit.spriteSheetName});
            uiHelper.showDialog('frmCreateGameObject');
        };

        (function(){

            var loadResource = function(type,ResourceClass,resourceList){
                $http({
                    url: '/resource/getAll',
                    method: "POST",
                    data: {type:type}
                }).
                    success(function (response) {
                        response && response.forEach && response.forEach(function(item){
                            var sh = new ResourceClass(item);
                            resourceList.add(sh);
                        });
                    });
            };

            Promise.
                resolve().
                then(function(){
                    loadResource('spriteSheet',Models.SpriteSheet,editData.spriteSheetList);
                }).
                then(function(){
                    loadResource('gameObject',Models.GameObject,editData.gameObjectList);
                });

        })();

    });