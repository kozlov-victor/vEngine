$(function () {
    $("#leftMenu").accordion();
    $(document).on('click','button[data-action="upload"]',function(){
        var input = $(this).next('input[type="file"]');
        input.click();
    });
});

window.app.
    controller('mainCtrl', function ($scope, $http, editData, Resource, ResourceList) {
        var s = $scope;
        s.editData = editData;
        s.rList = [];

        s.onResourceUpload = function(formData){
            $http({
                url: '/imageResource/create',
                method: "POST",
                data: formData,
                headers: {'Content-Type': undefined}
            }).
            success(function (response) {
                var r = new Resource();
                    r.type = response.type;
                    r.url = response.url;
                    r.name = response.name;
                    editData.resourceList.addResource(r);
                    s.rList = editData.resourceList.getAll();
            });
        }

    });