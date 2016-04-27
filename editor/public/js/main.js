$(function () {
    //$("#leftMenu").accordion();
    $(document).on('click','button[data-action="upload"]',function(){
        var input = $(this).next('input[type="file"]');
        input.click();
    });
});

window.app.
    controller('mainCtrl', function ($scope, $http, editData, Models, uiHelper) {
        var s = $scope;
        s.editData = editData;
        s.uiHelper = uiHelper;

        s.onResourceUpload = function(formData){
            $http({
                url: '/imageResource/create',
                method: "POST",
                data: formData,
                headers: {'Content-Type': undefined}
            }).
            success(function (item) {
                editData.resourceList.addResource(new Models.Resource(item));
            });
        };

        (function(){
            $http({
                url: '/imageResource/getAll',
                method: "GET"
            }).
            success(function (response) {
                response && response.forEach && response.forEach(function(item){
                    editData.resourceList.addResource(new Models.Resource(item));
                });
            });
        })();

    });