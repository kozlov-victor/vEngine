
window.app.
    controller('frameAnimationCtrl', function (
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
        var bundle = require('bundle').instance();
        var FrameAnimation = require('frameAnimation').FrameAnimation;
        var GameObject = require('gameObject').GameObject;

        var isStopped = false;

        s.toArray = function(expr) {
            try {
              return JSON.parse('['+expr+']');
            } catch(e){
                return [];
            }
        };

        s.createOrEditFrAnimation = function(){
            s.editData.currFrAnimationInEdit.frames = JSON.parse('['+s.editData.currFrAnimationInEdit.frames+']');
            resourceDao.createOrEditResource(
                s.editData.currFrAnimationInEdit,
                FrameAnimation,
                bundle.frameAnimationList,
                function(res){
                    if (res.type=='create') {

                        s.editData.currFrAnimationInEdit.id = res.r.id;
                        var dialogStateObj = uiHelper.findDialogStateObjectById(s.editData.currGameObjectInEdit.id);
                        dialogStateObj.frameAnimationIds.push(s.editData.currFrAnimationInEdit.id);
                        s.editData.currGameObjectInEdit.frameAnimationIds.push(s.editData.currFrAnimationInEdit.id);
                        dialogStateObj._frameAnimations.add(s.editData.currFrAnimationInEdit);

                        resourceDao.createOrEditResource(
                            s.editData.currGameObjectInEdit,
                            GameObject,
                            bundle.gameObjectList,
                            function(){

                            },
                            true
                        );
                    }
                }
            );
        };

        s.allIndexes = function(){
            var res = utils.getArray(s.editData.currGameObjectInEdit._spriteSheet._numOfFrames);
            return res.join(',')
        };

        s.playAnimation = function(){
            try {
                s.editData.currFrAnimationInEdit.frames = JSON.parse('['+s.editData.currFrAnimationInEdit.frames+']');
            } catch(e){}
            s.editData.currFrAnimationInEdit.constructor();
            setTimeout(function(){
                s.editData.currFrAnimationInEdit.play();
                s.editData.currFrAnimationInEdit.update(new Date().getTime());
                var i = s.editData.currGameObjectInEdit.currFrameIndex;
                s.editData.currGameObjectInEdit.setFrameIndex(i);
                s.$apply();
                if (isStopped) {
                    isStopped = false;
                    return;
                }
                if (uiHelper.dialogName=='frmCreateFrameAnimation') setTimeout(s.playAnimation,50);
            },0);
        };

        s.stopAnimation = function(){
            s.editData.currFrAnimationInEdit.stop();
            isStopped = true;
        };

        s.setRange = function(from,to) {
            if (isNaN(from) || isNaN(to)) return;
            s.editData.currFrAnimationInEdit.frames = [];
            if (from<=to) {
                for (var i=from;i<=to;i++) {
                    s.editData.currFrAnimationInEdit.frames.push(i);
                }
            } else {
                for (i=from;i>=to;i--) {
                    s.editData.currFrAnimationInEdit.frames.push(i);
                }
            }

        };

        (function(){
            var dialogState = uiHelper.getDialogState();
            if (dialogState.opName=='create') {
                s.editData.currFrAnimationInEdit = new FrameAnimation();
                s.editData.currFrAnimationInEdit._gameObject = s.editData.currGameObjectInEdit;
            } else if (dialogState.opName=='edit'){
                s.editData.currFrAnimationInEdit = dialogState.opObject.clone();
                s.editData.currFrAnimationInEdit._gameObject = s.editData.currGameObjectInEdit;
            }
        })();


    });