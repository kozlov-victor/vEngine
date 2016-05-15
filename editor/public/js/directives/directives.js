
app


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
            link: function(scope, element, attrs, ngModelController) {
                scope.$watch(attrs.ngModel, function(value) {
                    var booleanResult = $parse(attrs.appValidator)(scope);
                    ngModelController.$setValidity('expression', booleanResult);
                });
            }
        };
    })


    .directive('appKeyPress', function($parse) {
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                var fn = $parse(attrs.appKeyPress);
                if (!fn) return;
                window.addEventListener('keydown',function(e){
                    scope.$apply(function () {
                        fn(scope, {$event:e});
                    });
                });
            }
        };
    })


    .directive('appKeyUp', function($parse) {
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                var fn = $parse(attrs.appKeyPress);
                if (!fn) return;
                window.addEventListener('keyup',function(e){
                    scope.$apply(function () {
                        fn(scope, {$event:e});
                    });
                });
            }
        };
    })

    .factory('appDraggableUtil',function(){
        return {
            lastObject:null,
            lastDraggable:null,
            clientX:0,
            clientY:0,
            offsetX:0,
            offsetY:0
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
                    appDraggableUtil.lastDraggable = emit;
                    var style = getComputedStyle(element[0]);
                    var posX = 0;//parseInt(style.left)||0;
                    var posY = 0;//parseInt(style.top)||0;
                    appDraggableUtil.offsetX = e.clientX;
                    appDraggableUtil.offsetY = e.clientY;
                });
            }
        };
    })
    .directive('appDroppable', function($parse,appDraggableUtil) {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {

                var canAccept = attrs.appDroppable;

                var isAcceptable = function(){
                    var accepted = appDraggableUtil.lastDraggable;
                    return canAccept.indexOf(accepted)>-1;
                };

                element.bind('dragover', function (e) {
                    if (isAcceptable(e)) {
                        element.addClass('droppable');
                    }
                    e.preventDefault();
                });
                element.bind('dragenter', function (e) {
                    e.preventDefault();
                    element.removeClass('enter');
                });
                element.bind('dragleave', function (e) {
                    e.preventDefault();
                    element.removeClass('droppable');
                });
                element.bind('dragover',function(e){
                    e.preventDefault();
                });
                element.bind('drop', function (e) {
                    console.log('drop');
                    e.preventDefault();
                    element.removeClass('droppable');
                    if (!isAcceptable()) return;
                    var model = appDraggableUtil.lastObject;
                    var fn = $parse(attrs.appOnDropped);
                    if (!fn) return;

                    var evt = {
                        x: e.clientX - appDraggableUtil.offsetX,
                        y: e.clientY - appDraggableUtil.offsetY
                    };

                    scope.$apply(function () {
                        fn(scope, {$object:model,$draggable:appDraggableUtil.lastDraggable,$event:evt});
                        appDraggableUtil.lastObject = null;
                        appDraggableUtil.lastDraggable = null;
                    });
                });
            }
        };
    })




;