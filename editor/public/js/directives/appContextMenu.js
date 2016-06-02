
app.directive('appContextMenu', function(uiHelper) {
    return {
        restrict: 'A',
        replace: false,
        //scope: {
        //    model: "="
        //},
        link: function (scope, element, attrs) {
            var tmplId = attrs.appContextMenu;
            var model = scope.ngModel;
            element.bind('contextmenu', function (e) {
                e.preventDefault();
                var x = e.clientX;
                var y = e.clientY;
                uiHelper.showContextMenu(tmplId,x,y,e.offsetX,e.offsetY,model);
                scope.$apply(function () {});
            });
        }
    };
});
