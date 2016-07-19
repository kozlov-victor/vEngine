

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

        s.onSoundUpload = function(file,src){
            s.soundUrl = $sce.trustAsResourceUrl(src);
            s.editData.currSoundInEdit._file = file;
        };

        s.createOrEditSound = function(snd){
            resourceDao.createOrEditResource(
                s.editData.currSoundInEdit,
                ve.models.Sound,
                ve_local.bundle.soundList
            );
        };

        // todo project path
        (function(){
            if (s.editData.currSoundInEdit) {
                s.soundUrl =  'project/' + s.editData.currSoundInEdit.resourcePath;
            }
        })();

    });