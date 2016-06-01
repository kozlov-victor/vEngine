
app.directive('appKeyUp', function($parse) {
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
});