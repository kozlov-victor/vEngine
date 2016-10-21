
window.app.
    controller('topPanelCtrl', function ($scope, $http, $sce, editData, uiHelper, i18n, utils) {
        var s = $scope;
        s.editData = editData;
        s.uiHelper = uiHelper;
        s.i18n = i18n.getAll();
        s.utils = utils;

        var w;


        s.run = function(){
            $http({
                url: utils.generateBuildUrl({debug:1}),
                method: "GET"
            }).
            success(function (resp) {
                if (!w || w.closed) {
                    w = window.open('/'+editData.projectName+'/out','','');
                }
                else {
                    w.location.reload();
                }
                w && w.focus();
            });
        };

        s.debug = function(){
            $http({
                url: utils.generateBuildUrl({debug:1}),
                method: "GET"
            }).
            success(function (resp) {
                s.uiHelper.window = 'debugRunWindow';
                editData.debugFrameUrl = '/'+editData.projectName+'/out';
                var focus = function f(){
                    var el = document.getElementsByTagName('iframe')[0];
                    if (el) {
                        el.focus();
                    } else {
                        setTimeout(f,1000);
                    }
                };
                focus();
            });
        };

        s.stop = function(){
            s.uiHelper.window = 'sceneWindow';
            editData.debugFrameUrl = $sce.trustAsUrl('/about:blank');
        };

        s.showBuildDialog = function() {
            uiHelper.showDialog('buildDialog');
        };

        s.toExplorer = function(){
            location.hash = '#/explorer';
        }


    });