
window.app.
    controller('topPanelCtrl', function ($scope, $http, $sce, editData, uiHelper, i18n, utils) {
        var s = $scope;
        s.editData = editData;
        s.uiHelper = uiHelper;
        s.i18n = i18n.getAll();
        s.utils = utils;

        var w;

        // todo project name
        s.run = function(){
            $http({
                url: '/generate?r='+Math.random(),
                method: "GET"
            }).
            success(function (resp) {
                if (!w || w.closed) {
                    w = window.open('/project/out','','');
                }
                else {
                    w.location.reload();
                }
                w && w.focus();
            });
        };

        s.debug = function(){
            $http({
                url: '/generate?debug=1&r='+Math.random(),
                method: "GET"
            }).
            success(function (resp) {
                editData.isInDebugRunning = true;
                editData.debugFrameUrl = '/project/out';
            });
        };

        s.stop = function(){
            editData.isInDebugRunning = false;
            editData.debugFrameUrl = $sce.trustAsUrl('/about:blank');
        }


    });