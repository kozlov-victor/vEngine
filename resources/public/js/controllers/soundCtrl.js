

window.app.
    controller('soundCtrl', function (
        $scope,
        $http,
        $sce,
        editData,
        resourceDao,
        uiHelper,
        i18n,
        utils
    ) {

        var s = $scope;
        s.editData = editData;
        s.uiHelper = uiHelper;
        s.i18n = i18n.getAll();
        s.utils = utils;
        s.resourceDao = resourceDao;
        var models = require('models'), bundle = require('bundle').instance();

        s.onSoundUpload = function(file,src){
            s.soundUrl = $sce.trustAsResourceUrl(src);
            s.editData.currSoundInEdit._file = file;
        };

        s.createOrEditSound = function(snd){
            resourceDao.createOrEditResource(
                s.editData.currSoundInEdit,
                models.Sound,
                bundle.soundList
            );
        };

        (function(){
            var dialogState = uiHelper.getDialogState();
            if (dialogState.opName=='create') {
                editData.currSoundInEdit = new models.Sound({});
            } else if (dialogState.opName=='edit'){
                editData.currSoundInEdit = dialogState.opObject.clone();
            }


            if (s.editData.currSoundInEdit) {
                s.soundUrl = editData.projectName+'/' + s.editData.currSoundInEdit.resourcePath;
            }

        })();

    });