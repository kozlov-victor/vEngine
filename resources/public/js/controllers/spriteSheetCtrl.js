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
        var models = require('models'), bundle = require('bundle').instance();

        s.onSpriteSheetUpload = function(file,src) {
            s.editData.currSpriteSheetInEdit._file = file;
            s.editData.currSpriteSheetInEdit.resourcePath = src;
            if (!s.editData.currSpriteSheetInEdit.name) {
                s.editData.currSpriteSheetInEdit.name = file.name.split('.')[0];
            }
            //if (!s.editData.currSpriteSheetInEdit.name) {
            //    s.editData.currSpriteSheetInEdit.name =  src.split('.')[0];
            //}
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

        var updateObjectSpriteSheets = function(){
            var _setSpriteSheet = function(go){
                if (go.spriteSheetId) {
                    var sprSheet = bundle.spriteSheetList.find({id: go.spriteSheetId});
                    go.setSpriteSheet(sprSheet);
                }
            };
            utils.eachObjectOnScene(function(go){
                _setSpriteSheet(go);
            });
            bundle.gameObjectList.forEach(function(go){
                _setSpriteSheet(go);
            });
        };

        s.createOrEditSpriteSheet = function(){
            resourceDao.createOrEditResource(
                s.editData.currSpriteSheetInEdit,
                models.SpriteSheet,
                bundle.spriteSheetList,
                function(res){
                    if (res.type=='edit') {
                        updateObjectSpriteSheets();
                    }
                }
            );
        };

        (function() {
            var dialogState = uiHelper.getDialogState();
            if (dialogState.opName=='create') {
                editData.currSpriteSheetInEdit = new models.SpriteSheet({});
            } else if (dialogState.opName=='edit'){
                editData.currSpriteSheetInEdit = dialogState.opObject.clone();
                editData.currSpriteSheetInEdit.calcFrameSize();
                s.spriteSheetUrl = editData.projectName+'/'+editData.currSpriteSheetInEdit.resourcePath;
            }
        })();


    });