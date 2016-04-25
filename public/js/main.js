$(function () {
    $("#leftMenu").accordion();
});

window.app.
    controller('mainCtrl', function ($scope, editData) {
        var s = $scope;
        s.editData = editData;
    });