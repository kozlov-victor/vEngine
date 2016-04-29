'use strict';

$(function () {
    $(document).on('click','button[data-action="upload"]',function(){
        var input = $(this).next('input[type="file"]');
        input.click();
    });
});

window.app.
    controller('mainCtrl', function ($scope, $http, editData, Models, uiHelper, i18n) {
        var s = $scope;
        s.editData = editData;
        s.uiHelper = uiHelper;
        s.i18n = i18n.getAll();
        s.currGameObjectInEdit = null;

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

        s.deleteResource = function(name,type){
            $http({
                url: '/resource/delete',
                method: "POST",
                data: {name:name,type:type}
            }).
            success(function (res) {
                    switch (type) {
                        case 'image':
                            editData.resourceList.removeIf({name:name});
                            break;
                    }

            });
        };

        s.showCreateGameObjectDialog = function() {
            s.currGameObjectInEdit = new Models.GameObject({});
            uiHelper.showDialog('createGO');
        };

        s.showEditGameObjectDialog = function(currObj) {
            s.currGameObjectInEdit = currObj.clone(Models.GameObject);
            uiHelper.showDialog('createGO');
        };

        s.createGameObject = function(item){
            editData.gameObjectList.addResource(new Models.Resource(item));
            s.uiHelper.closeDialog();
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