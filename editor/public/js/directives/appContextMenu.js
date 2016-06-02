
app.directive('appContextMenu', function(uiHelper) {
    return {
        restrict: 'A',
        replace: false,
        link: function (scope, element, attrs) {
            var tmplId = attrs.appContextMenu;
            var model = scope.$eval(attrs.ngModel);
            element.bind('contextmenu', function (e) {
                e.preventDefault();
                e.stopPropagation();
                var x = e.clientX;
                var y = e.clientY;
                uiHelper.showContextMenu(tmplId,x,y,e.offsetX,e.offsetY,model);
                scope.$apply(function () {});
            });
        }
    };
});
