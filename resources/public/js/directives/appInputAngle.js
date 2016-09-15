
angular.forEach(['x', 'y', 'width', 'height','transform', 'd'], function(name) {
    var ngName = 'app' + name[0].toUpperCase() + name.slice(1);
    app.directive(ngName, function() {
        return function(scope, element, attrs) {
            attrs.$observe(ngName, function(value) {
                attrs.$set(name, value);
            })
        };
    });
});

app.directive('appInputAngle', function($parse) {
    return {
        restrict: 'E',
        replace: true,
        require: 'ngModel',
        transclude: true,
        scope: {
            ngModel : '='
        },
        templateUrl:'partials/misc/appInputAngle.html',
        link: function (scope, element, attrs) {
            var model = scope.ngModel;
            var field = attrs.appField;
            var angle = model[field];
            var calcAngleInDeg = function(){
                var deg = angle * 180 / Math.PI;
                model[field] = angle;
                scope.angleInDeg = deg;
            };
            calcAngleInDeg();

            var calcAngleFromEvent = function(e){
                var rect = element[0].getBoundingClientRect();
                var x = e.clientX - rect.left, y = e.clientY - rect.top;
                angle = Math.atan2((y -15),(x - 15));
                if (angle<0) angle = 2*Math.PI + angle;
            };

            var mouseDown = false;

            element.bind('click', function (e) {
                calcAngleFromEvent(e);
                calcAngleInDeg();
                scope.$apply();
            });
            element.bind('mousedown',function(){
                mouseDown = true;
            });
            element.bind('mouseup',function(){
                mouseDown = false;
            });
            element.bind('mouseleave',function(){
                mouseDown = false;
            });
            element.bind('mousemove', function (e) {
                if (!mouseDown) return;
                calcAngleFromEvent(e);
                calcAngleInDeg();
                scope.$apply();
            });
        }
    };
});
