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
            var spriteSheet = editData.spriteSheetList.getIf({name:gameObject.spriteSheetName});
            if (!spriteSheet) return;
            spriteSheet.calcFrameSize();
            gameObject.width = ~~(spriteSheet.width / spriteSheet.numOfFramesH);
            gameObject.height = ~~(spriteSheet.height / spriteSheet.numOfFramesV);
            gameObject._spriteSheet = spriteSheet;
            gameObject._sprPosX = spriteSheet.getFramePosX(gameObject.currFrameIndex);
            gameObject._sprPosY = spriteSheet.getFramePosY(gameObject.currFrameIndex);
        };
        this.createOrEditResource = function(currResourceInEdit,ResourceClass,resourceList){
            var formData = new FormData();
            formData.append('file',currResourceInEdit._file);
            currResourceInEdit.toJsonArr().forEach(function(item){
                formData.append(item.key,item.value);
            });
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
                } else {
                    var index = resourceList.indexOf({id:item.id});
                    resourceList.rs[index] = new ResourceClass(item);
                }
                uiHelper.closeDialog();
            });
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
    });