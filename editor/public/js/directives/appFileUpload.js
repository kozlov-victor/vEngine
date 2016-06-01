
app.directive('appOnFileUpload', function ($parse) {
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
