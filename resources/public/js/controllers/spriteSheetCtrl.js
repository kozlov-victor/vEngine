window.app.
    controller('spriteSheetCtrl', function (
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

        s.onSpriteSheetUpload = function(file,src) {
            s.editData.currSpriteSheetInEdit._file = file;
            s.editData.currSpriteSheetInEdit.resourcePath = src;
            var fr = new FileReader();
            fr.onload = function() { // file is loaded
                var img = new Image;
                img.onload = function() {
                    s.editData.currSpriteSheetInEdit.width = img.width;
                    s.editData.currSpriteSheetInEdit.height = img.height;
                    s.spriteSheetUrl = fr.result;
                    s.$apply();
                };
                img.src = fr.result;
            };
            fr.readAsDataURL(file);
        };

        s.createOrEditSpriteSheet = function(){
            resourceDao.createOrEditResource(s.editData.currSpriteSheetInEdit,ve.models.SpriteSheet,ve_local.bundle.spriteSheetList);
        };

        (function(){
            var dialogState = uiHelper.getDialogState();
            if (dialogState.opName=='create') {
                editData.currSpriteSheetInEdit = new ve.models.SpriteSheet({});
            } else if (dialogState.opName=='edit'){
                editData.currSpriteSheetInEdit = dialogState.opObject.clone();
                editData.currSpriteSheetInEdit.calcFrameSize();
                // todo project path
                s.spriteSheetUrl = 'project/'+editData.currSpriteSheetInEdit.resourcePath;
            }
        })();


    });