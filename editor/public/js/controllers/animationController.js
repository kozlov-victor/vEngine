window.app.
    controller('animationCtrl', function ($scope, $http, $sce, editData, Models, uiHelper, i18n) {
        var s = $scope;
        s.editData = editData;
        s.uiHelper = uiHelper;
        s.i18n = i18n.getAll();


    });