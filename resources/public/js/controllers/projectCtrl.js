


window.app.
    controller('projectCtrl', function (
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

        s.openProject = function(projectName){
            resourceDao.loadProject(projectName);
        };

        (function(){

            resourceDao.getProjectNames(function(list){
                s.projectNames = list;
            });

        })();

    });