window.app.
    controller('gameObjectCtrl', function ($scope, $http, $sce, editData, Models, uiHelper, i18n) {
        var s = $scope;
        s.editData = editData;
        s.uiHelper = uiHelper;
        s.i18n = i18n.getAll();

        var createOrEditResource = function(currResourceInEdit,ResourceClass,resourceList){
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
                } else {
                    var index = resourceList.indexOf({id:item.id});
                    resourceList.rs[index] = new ResourceClass(item);
                }
                uiHelper.closeDialog();
            });
        };


        s.refreshGameObjectFramePreview = function(gameObject){
            var spriteSheet = gameObject._spriteSheet;
            if (!spriteSheet) return;
            var frWidth = spriteSheet.width / spriteSheet.numOfFramesH;
            var frHeight = spriteSheet.height / spriteSheet.numOfFramesV;
            gameObject._spPosY = ~~(gameObject.currFrameIndex/spriteSheet.numOfFramesH)*frHeight;
            gameObject._spPosX = (gameObject.currFrameIndex%spriteSheet.numOfFramesH)*frWidth;
            var maxNumOfFrame = spriteSheet.numOfFramesH*spriteSheet.numOfFramesV-1;
            if (s.editData.currGameObjectInEdit.currFrameIndex>=maxNumOfFrame) {
                s.editData.currGameObjectInEdit.currFrameIndex = 0;
            }
        };

        s.createOrEditGameObject = function(item){
            createOrEditResource(s.editData.currGameObjectInEdit,Models.GameObject,editData.gameObjectList);
        };

        s.getArray = function(num) {
            if (!num) return [];
            var res = [];
            for (var i=0;i<num;i++) {
                res.push(i);
            }
            return res;
        };


    });