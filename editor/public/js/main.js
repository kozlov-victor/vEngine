$(function () {
    $("#leftMenu").accordion();
    $(document).on('click','button[data-action="upload"]',function(){
        var input = $(this).next('input[type="file"]');
        console.log(input);
        input.click();
    });
});

window.app.
    controller('mainCtrl', function ($scope, $http, editData) {
        var s = $scope;
        s.editData = editData;

        s.onResourceUpload = function(formData){
            $http({
                url: '/uploadImageResource',
                method: "POST",
                data: formData,
                headers: {'Content-Type': undefined}
            }).success(function (response) {

            });
        }

    });