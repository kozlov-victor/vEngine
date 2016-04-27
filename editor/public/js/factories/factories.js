window.app

    .factory('editData', function (Models) {
        return {
            resourceList: new Models.ResourceList()
        }
    })

    .factory('uiHelper', function () {
        return {
            toggle: function (currentVal, defaultVal) {
                return currentVal == defaultVal ? 0 : defaultVal;
            }
        }
    })


    .factory('Models', function () {

        var extent = function (Child, Parent) {
            var F = function () {};
            F.prototype = Parent.prototype;
            Child.prototype = new F();
            Child.prototype.constructor = Child;
            Child.super = Parent.prototype;
        };

        var BaseModel = function () {};
        BaseModel.prototype.fromJsonObj = function(jsonObj){
            var self = this;
            Object.keys(jsonObj).forEach(function(key){
                if (key in self) self[key] = jsonObj[key];
            });
        };

        this.ResourceList = function () {
            var self = this;
            this.rs = [];
            this.addResource = function (r) {
                self.rs.push(r);
            };
            this.size = function () {
                return self.rs.length;
            };
            this.getAll = function () {
                return self.rs;
            }
        };

        this.Resource = function (jSonObj) {
            var self = this;
            this.type = '';
            this.name = '';
            (function(){
                self.fromJsonObj(jSonObj);
            })();
        };
        extent(this.Resource,BaseModel);

        return this;
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
                    scope.$apply(function () {
                        fn(scope, {$formData: formData});
                    });
                });
            }
        };
    })


;