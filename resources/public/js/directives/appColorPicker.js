
app.directive('appColorPicker', function($parse) {
    return {
        restrict: 'E',
        replace: true,
        templateUrl:'partials/misc/appColorPicker.html',
        link: function (scope, element, attrs) {
            var model = scope.$eval(attrs.appModel);
            var field = attrs.appField;
            var convert = function(){
                element[0].value = rgbToHex(model[field]);
            };
            convert();

            element.bind('change',function(e){
                model[field] = hexToRgb(e.target.value);
                var fn = $parse(attrs.appChange);
                scope.$apply(function () {
                    fn(scope, {});
                });
            });

            function hexToRgb(hex) {
                var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
                return result ? [
                    parseInt(result[1], 16),
                    parseInt(result[2], 16),
                    parseInt(result[3], 16)
                ] : [];
            }

            function rgbToHex(col) {
                var r = col[0],g=col[1],b=col[2];
                return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
            }
        }
    };
});