window.app.
    controller('gameObjectCtrl', function ($scope, $http, $sce, editData, Models, uiHelper, i18n, utils) {
        var s = $scope;
        s.editData = editData;
        s.uiHelper = uiHelper;
        s.i18n = i18n.getAll();


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
            utils.createOrEditResource(s.editData.currGameObjectInEdit,Models.GameObject,editData.gameObjectList);
        };

        s.showCreateAnimationDialog = function() {
            s.editData.currFrAnimationInEdit = new Models.FrameAnimation();
            uiHelper.showDialog('frmCreateAnimation');
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