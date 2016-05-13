'use strict';

window.app

    .factory('uiHelper', function () {
        var _;
        return _ = {
            toggle: function (currentVal, defaultVal) {
                return currentVal == defaultVal ? 0 : defaultVal;
            },
            _dialogsStack: [],
            showDialog: function(name){
                _.dialogName = name;
                _._dialogsStack.push(name);
            },
            closeDialog: function(){
                _._dialogsStack.pop();
                _.dialogName = _._dialogsStack[_._dialogsStack.length-1];
            }
        }
    })

    .factory('utils',function(editData, $http, uiHelper){

        this.recalcGameObjectSize = function(gameObject){
            var spriteSheet = editData.spriteSheetList.getIf({id:gameObject.spriteSheetId});
            if (!spriteSheet) return;
            spriteSheet.calcFrameSize();
            gameObject.width = ~~(spriteSheet.width / spriteSheet.numOfFramesH);
            gameObject.height = ~~(spriteSheet.height / spriteSheet.numOfFramesV);
            gameObject._spriteSheet = spriteSheet;
        };
        this.createOrEditResource = function(currResourceInEdit,ResourceClass,resourceList,callBack, preserveDialog){
            var formData = new FormData();
            formData.append('file',currResourceInEdit._file);
            var model = {};
            currResourceInEdit.toJsonArr().forEach(function(item){
                model[item.key] = item.value;
            });
            formData.append('model',JSON.stringify(model));
            var op = currResourceInEdit.id?'edit':'create';
            $http({
                url: '/resource/'+op,
                method: "POST",
                data: formData,
                headers: {'Content-Type': undefined}
            }).
            success(function (item) {
                if (op=='create') {
                    var r = new ResourceClass(item);
                    resourceList.add(r);
                    callBack && callBack({type:'create',r:r});
                } else {
                    var index = resourceList.indexOf({id:item.id});
                    resourceList.rs[index] = new ResourceClass(item);
                    callBack && callBack({type:'edit',r:resourceList.rs[index]});
                }
                !preserveDialog && uiHelper.closeDialog();
            });
        };
        this.saveGameProps = function(gameProps){
            var formData = new FormData();
            formData.append('model',JSON.stringify(gameProps));
            $http({
                url: '/gameProps/save',
                method: "POST",
                data: formData,
                headers: {'Content-Type': undefined}
            })
        };
        this.deleteResource = function(id,type,callBack){
            $http({
                url: '/resource/delete',
                method: "POST",
                data: {id:id,type:type}
            }).
                success(function (res) {
                    editData[type+'List'].removeIf({id:id});
                    callBack && callBack();
                });
        };
        this.getArray = function(num) {
            if (!num) return [];
            var res = [];
            for (var i=0;i<num;i++) {
                res.push(i);
            }
            return res;
        };

        this.test = function(){
            console.log(1)
        };

        return this;
    })


    .directive('appOnFileUpload', function ($parse) {
        return {
            restrict: 'A',
            scope: true,
            link: function (scope, element, attrs) {
                element.bind('change', function () {
                    var fn = $parse(attrs.appOnFileUpload);
                    var file = element[0] && element[0].files[0];
                    var url = window.URL || window.webkitURL;
                    var src = url.createObjectURL(file);
                    scope.$apply(function () {
                        fn(scope, {$file: element[0].files[0],$src:src});
                    });
                });
            }
        };
    })


    .directive('appValidator', function($parse) {
        return {
            require: 'ngModel',
            restrict: 'A',
            link: function(scope, ele, attrs, ngModelController) {
                scope.$watch(attrs.ngModel, function(value) {
                    var booleanResult = $parse(attrs.appValidator)(scope);
                    ngModelController.$setValidity('expression', booleanResult);
                });
            }
        };
    })

    .factory('appDraggableUtil',function(){
        return {
           lastObject:null
        }
    })
    .directive('appDraggable', function(appDraggableUtil) {
        return {
            require: 'ngModel',
            restrict: 'A',
            replace: true,
            scope: {
                ngModel : '='
            },
            link: function (scope, element, attrs) {
                element.attr('draggable','true');
                var model = scope.ngModel;
                var emit = attrs.appDraggable;
                element.bind('dragstart', function (e) {
                    e.dataTransfer.setData('text/plain', emit); //cannot be empty string
                    e.dataTransfer.effectAllowed='move';
                    appDraggableUtil.lastObject = model;
                });
            }
        };
    })
    .directive('appDroppable', function($parse,appDraggableUtil) {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                element.bind('dragover', function (e) {
                    e.preventDefault();
                });
                element.bind('drop', function (e) {
                    e.preventDefault();
                    var canAccept = attrs.appDroppable;
                    var accepted = e.dataTransfer.getData('text/plain');
                    if (canAccept!=accepted) return;
                    var model = appDraggableUtil.lastObject;
                    var fn = $parse(attrs.appOnDropped);
                    if (!fn) return;
                    scope.$apply(function () {
                        fn(scope, {$object:model});
                    });
                });
            }
        };
    })





;
