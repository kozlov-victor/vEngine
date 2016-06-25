
window.app.
    controller('commonBehaviourCtrl', function (
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

        s.defaultParameters = [];
        var params = editData.commonBehaviourList.getIf({
            name:editData.currCommonBehaviourInEdit.name
        }).defaultParameters;
        Object.keys(params).forEach(function(key){
            s.defaultParameters.push({key:key,value:params[key]});
        });

    });