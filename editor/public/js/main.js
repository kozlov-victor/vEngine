'use strict';

$(function () {
    $(document).on('click','button[data-action="upload"]',function(){
        var input = $(this).next('input[type="file"]');
        input.click();
    });
});

window.app.
    controller('mainCtrl', function ($scope, $http, $sce, editData, Models, uiHelper, i18n) {
        var s = $scope;
        s.editData = editData;
        s.uiHelper = uiHelper;
        s.i18n = i18n.getAll();
        s.currGameObjectInEdit = null;
        s.currSpriteSheetInEdit = null;

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
            s.currSpriteSheetInEdit = new Models.SpriteSheet({});
            uiHelper.showDialog('frmCreateSpriteSheet');
        };

        s.showEditSpriteSheetDialog = function(currObj){
            s.currSpriteSheetInEdit = currObj.clone(Models.SpriteSheet);
            s.currSpriteSheetInEdit.calcFrameSize();
            uiHelper.showDialog('frmCreateSpriteSheet');
        };

        s.onSpriteSheetUpload = function(file,src) {
            s.currSpriteSheetInEdit._file = file;
            s.currSpriteSheetInEdit.resourcePath = src;
            var fr = new FileReader();
            fr.onload = function() { // file is loaded
                var img = new Image;
                img.onload = function() {
                    s.currSpriteSheetInEdit.width = img.width;
                    s.currSpriteSheetInEdit.height = img.height;
                    s.$apply(s.currSpriteSheetInEdit);
                };
                img.src = fr.result;
            };
            fr.readAsDataURL(file);
        };

        var createOrEditResource = function(currResourceInEdit,ResourceClass,resourceList){
            return new Promise(function(resolve){
                var formData = new FormData();
                formData.append('file',currResourceInEdit._file);
                currResourceInEdit.toJsonArr().forEach(function(item){
                    formData.append(item.key,item.value);
                });
                var op = currResourceInEdit.id?'edit':'create';
                $http({
                    url: '/resource/'+op,
                    method: "POST",
                    data: formData,
                    headers: {'Content-Type': undefined}
                }).
                    success(function (item) {
                        if (op=='create') {
                            var r = new ResourceClass(item);
                            resourceList.add(r);
                            resolve(r);
                        } else {
                            var index = resourceList.indexOf({id:item.id});
                            resourceList.rs[index] = new ResourceClass(item);
                            resolve(resourceList.rs[index]);
                        }
                        uiHelper.closeDialog();
                    });
            });
        };

        s.createOrEditSpriteSheet = function(){
            createOrEditResource(s.currSpriteSheetInEdit,Models.SpriteSheet,editData.spriteSheetList);
            //then(function(spriteSheet){
            //    if (s.currGameObjectInEdit) {
            //        if (!s.currGameObjectInEdit._spriteSheet) s.currGameObjectInEdit._spriteSheet = spriteSheet;
            //    }
            //});
        };

        s.recalcGameObjectSize = function(gameObject){
            var spriteSheet = s.editData.spriteSheetList.getIf({name:gameObject.spriteSheetName});
            if (!spriteSheet) return;
            spriteSheet.calcFrameSize();
            gameObject.width = ~~(spriteSheet.width / spriteSheet.numOfFramesH);
            gameObject.height = ~~(spriteSheet.height / spriteSheet.numOfFramesV);
            gameObject._spriteSheet = spriteSheet;
            gameObject._sprPosX = spriteSheet.getFramePosX(gameObject.currFrameIndex);
            gameObject._sprPosY = spriteSheet.getFramePosY(gameObject.currFrameIndex);
        };

        s.refreshGameObjectFramePreview = function(gameObject){
            var spriteSheet = gameObject._spriteSheet;
            if (!spriteSheet) return;
            var frWidth = spriteSheet.width / spriteSheet.numOfFramesH;
            var frHeight = spriteSheet.height / spriteSheet.numOfFramesV;
            gameObject._spPosY = ~~(gameObject.currFrameIndex/spriteSheet.numOfFramesH)*frHeight;
            gameObject._spPosX = (gameObject.currFrameIndex%spriteSheet.numOfFramesH)*frWidth;
            var maxNumOfFrame = spriteSheet.numOfFramesH*spriteSheet.numOfFramesV-1;
            if (s.currGameObjectInEdit.currFrameIndex>=maxNumOfFrame) {
                s.currGameObjectInEdit.currFrameIndex = 0;
            }
        };

        s.showCreateGameObjectDialog = function() {
            s.currGameObjectInEdit = new Models.GameObject();
            s.editData.spriteSheetList.rs[0] && (s.currGameObjectInEdit.spriteSheetName = s.editData.spriteSheetList.rs[0].name);
            s.currGameObjectInEdit && s.recalcGameObjectSize(s.currGameObjectInEdit);
            uiHelper.showDialog('frmCreateGameObject');
        };

        s.showEditGameObjectDialog = function(currObj) {
            s.currGameObjectInEdit = currObj.clone(Models.GameObject);
            s.currGameObjectInEdit._spriteSheet = editData.spriteSheetList.getIf({name: s.currGameObjectInEdit.spriteSheetName});
            uiHelper.showDialog('frmCreateGameObject');
        };

        s.createOrEditGameObject = function(item){
            createOrEditResource(s.currGameObjectInEdit,Models.GameObject,editData.gameObjectList);
        };

        s.getArray = function(num) {
            if (!num) return [];
            var res = [];
            for (var i=0;i<num;i++) {
                res.push(i);
            }
            return res;
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