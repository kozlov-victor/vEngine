

window.app.
    controller('colorPickerCtrl', function (
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
        var models = require('models'), bundle = require('bundle').instance();
        var model;

        s.rgbChanged = function(){
            s.col.hex = utils.rgbToHex(s.col.rgb);
        };

        s.hexChanged = function(){
            s.col.rgb = utils.hexToRgb(s.col.hex);
        };
        
        s.saveModel = function(){
            model.colorBG = s.col.rgb;
            resourceDao.createOrEditResourceSimple(model);
            uiHelper.closeDialog();
        };

        (function(){
            var dialogState = uiHelper.getDialogState();
            model = dialogState.opObject;
            s.col = {};
            s.col.hex = utils.rgbToHex(model.colorBG);
            s.col.rgb = model.colorBG;
        })();

    });