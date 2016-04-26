
window.app

.factory('editData',function(ResourceList){
    return {
        resourceList: new ResourceList()
    }
})

.factory('ResourceList',function(){
    return function() {
        var rs = [];
        this.addResource = function(r){
            rs.push(r);
        };
        this.size = function() {
            return rs.length;
        }
    };
})

.factory('Resource',function(){
    return function(){
        this.type = 'hui';
    }
})

.directive('appOnFileUpload', function ($parse) {
    return {
        restrict: 'A',
        scope: true,
        link: function (scope, element, attrs) {
            element.bind('change', function () {
                var formData = new FormData();
                var fn = $parse(attrs.appOnFileUpload);
                formData.append('file', element[0].files[0]);
                scope.$apply(function() {
                    fn(scope, {$formData:formData});
                });
            });
        }
    };
})



;