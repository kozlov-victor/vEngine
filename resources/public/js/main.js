'use strict';

$(function () {
    //document.body.oncontextmenu = function(){return false};
    $(document).on('click','button[data-action="upload"]',function(){
        var input = $(this).next('input[type="file"]');
        input.click();
    });
});


window.app.
    controller('mainCtrl', function (
        $scope,
        $http,
        $sce,
        editData,
        uiHelper,
        utils,
        i18n) {

        var s = $scope;
        s.editData = editData;
        s.uiHelper = uiHelper;
        s.i18n = i18n.getAll();
        s.utils = utils;

        s.showDialog = function(objectName,opName,opObject){
            uiHelper.showDialog('frmCreate'+utils.capitalize(objectName),opName,opObject);
        };


    }).




    config(function($routeProvider,$httpProvider){
        $routeProvider.
            when('/editor',{
                templateUrl:'editor.html'
            }).
            when('/explorer',{
                templateUrl:'explorer.html'
            }).
            otherwise({redirectTo:'/explorer'});


        $httpProvider.interceptors.push('httpRequestInterceptor');


    }).


    factory('httpRequestInterceptor', function ($q, $location) {
        return {
            'responseError': function(rejection) {
                // do something on error
                if(rejection.status!==200){
                    ve.showError(rejection.data);
                }
                return $q.reject(rejection);
            }
        };
    })



;