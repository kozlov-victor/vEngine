
app.directive('appContextMenu', function(uiHelper) {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            var tmplId = attrs.appContextMenu;
            element.bind('contextmenu', function (e) {
                e.preventDefault();
                var x = e.clientX;
                var y = e.clientY;
                uiHelper.showContextMenu(tmplId,x,y);
                scope.$apply(function () {});
            });
        }
    };
});
