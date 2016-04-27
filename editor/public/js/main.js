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
            formData.append('type', 'image');
            $http({
                url: '/resource/create',
                method: "POST",
                data: formData,
                headers: {'Content-Type': undefined}
            }).
            success(function (item) {
                editData.resourceList.addResource(new Models.Resource(item));
            });
        };

        s.deleteResource = function(name){
            $http({
                url: '/resource/delete',
                method: "POST",
                data: {name:name,type:'image'}
            }).
            success(function (res) {
                    editData.resourceList.removeIf({name:name});
            });
        };

        (function(){
            $http({
                url: '/resource/getAll',
                method: "POST",
                data: {type:'image'}
            }).
            success(function (response) {
                response && response.forEach && response.forEach(function(item){
                    editData.resourceList.addResource(new Models.Resource(item));
                });
            });
        })();



    });