
window.app.
    controller('rightMenuCtrl', function (
        $scope,
        $http,
        $sce,
        editData,
        resourceDao,
        uiHelper,
        i18n,
        utils) {

        var s = $scope;
        s.editData = editData;
        s.uiHelper = uiHelper;
        s.i18n = i18n.getAll();
        s.utils = utils;
        s.resourceDao = resourceDao;
        var bundle = require('bundle').instance();

        s.openColorPickerForScene = function(){
            s.showDialog(
                'colorPicker','colorBG',
                editData.currSceneInEdit,
                function(col){
                    editData.currSceneInEdit.colorBG = col.rgb;
                    resourceDao.createOrEditResourceSimple(editData.currSceneInEdit);
                }
            );
        };

        (function(){


        })();

    });