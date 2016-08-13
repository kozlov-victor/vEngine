

window.app.
    controller('buildCtrl', function (
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

        s.opts = {
            debug: false,
            embedResources: false,
            embedScript: false
        };

        // todo project name
        s.build = function(){
            $http({
                url: utils.generateBuildUrl(s.opts),
                method: "GET"
            }).
                success(function (resp) {
                    s.link = '/project/out'
                });
        };

        (function(){

        })();

    });