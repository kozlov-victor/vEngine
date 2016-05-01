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
                    switch (type) {
                        case 'spriteSheet':
                            editData.spriteSheetList.removeIf({id:id});
                            break;
                    }

            });
        };

        s.showCreateSpriteSheetDialog = function(){
            s.currSpriteSheetInEdit = new Models.SpriteSheet({});
            uiHelper.showDialog('frmCreateSpriteSheet');
        };

        s.showEditSpriteSheetDialog = function(currObj){
            s.currSpriteSheetInEdit = currObj.clone(Models.SpriteSheet);
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

        s.createOrEditSpriteSheet = function(){
            var formData = new FormData();
            formData.append('file',s.currSpriteSheetInEdit._file);
            s.currSpriteSheetInEdit.toJsonArr().forEach(function(item){
                formData.append(item.key,item.value);
            });
            var op = s.currSpriteSheetInEdit.id?'edit':'create';
            $http({
                url: '/resource/'+op,
                method: "POST",
                data: formData,
                headers: {'Content-Type': undefined}
            }).
            success(function (item) {
                if (op=='create') {
                    editData.spriteSheetList.add(new Models.SpriteSheet(item));
                } else {
                    var index = editData.spriteSheetList.indexOf({id:item.id});
                    editData.spriteSheetList.rs[index] = new Models.SpriteSheet(item);
                }
                uiHelper.closeDialog();
            });
        };

        s.recalcGameObjectSize = function(gameObject){
            var spriteSheet = s.editData.spriteSheetList.getIf({name:gameObject.spriteSheetName});
            if (!spriteSheet) return;
            gameObject.width = ~~(spriteSheet.width / spriteSheet.numOfFramesH);
            gameObject.height = ~~(spriteSheet.height / spriteSheet.numOfFramesV);
            gameObject._spriteSheet = spriteSheet;
        };

        s.refreshGameObjectFramePreview = function(gameObject){
            var spriteSheet = gameObject._spriteSheet;
            var frWidth = spriteSheet.width / spriteSheet.numOfFramesH;
            var frHeight = spriteSheet.height / spriteSheet.numOfFramesV;
            gameObject._spPosY = ~~(gameObject.currFrameIndex/spriteSheet.numOfFramesH)*frHeight;
            gameObject._spPosX = (gameObject.currFrameIndex%spriteSheet.numOfFramesH)*frWidth;
        };

        s.showCreateGameObjectDialog = function() {
            s.currGameObjectInEdit = new Models.GameObject();
            s.currGameObjectInEdit.spriteSheetName = s.editData.spriteSheetList.rs[0].name;
            s.recalcGameObjectSize(s.currGameObjectInEdit);
            uiHelper.showDialog('frmCreateGameObject');
        };

        s.showEditGameObjectDialog = function(currObj) {
            s.currGameObjectInEdit = currObj.clone(Models.GameObject);
            uiHelper.showDialog('frmCreateGameObject');
        };

        s.createGameObject = function(item){
            //editData.gameObjectList.add(new Models.Resource(item)); todo
            console.log(item)
            s.uiHelper.closeDialog();
        };

        (function(){
            $http({
                url: '/resource/getAll',
                method: "POST",
                data: {type:'spriteSheet'}
            }).
            success(function (response) {
                response && response.forEach && response.forEach(function(item){
                    editData.spriteSheetList.add(new Models.SpriteSheet(item));
                });
            });
        })();

    });