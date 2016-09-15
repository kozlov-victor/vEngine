

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
        
        s.applyColor = function(){
            var dialogState = uiHelper.getDialogState();
            uiHelper.closeDialog();
            dialogState.opObject[dialogState.opName] = [
                +s.col.rgb[0]||0,
                +s.col.rgb[1]||0,
                +s.col.rgb[2]||0
            ];
            if (dialogState && dialogState.opCallBack) {
                dialogState.opCallBack({
                    hex:s.col.hex||'#000000',
                    rgb:[
                        +s.col.rgb[0]||0,
                        +s.col.rgb[1]||0,
                        +s.col.rgb[2]||0
                    ]
                });
                dialogState.opCallBack = null;
            }
        };

        (function(){
            var dialogState = uiHelper.getDialogState();
            model = dialogState.opObject[dialogState.opName];
            s.col = {};
            s.col.hex = utils.rgbToHex(model);
            s.col.rgb = model;
        })();

    });