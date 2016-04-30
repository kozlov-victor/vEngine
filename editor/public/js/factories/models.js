'use strict';

window.app

    .factory('editData', function (Models) {
        return {
            spriteSheetList: new Models.Collection(),
            gameObjectList: new Models.Collection()
        }
    })

    .factory('uiHelper', function () {
        var _;
        return _ = {
            toggle: function (currentVal, defaultVal) {
                return currentVal == defaultVal ? 0 : defaultVal;
            },
            showDialog: function(name){
                _.dialogName = name;
            },
            closeDialog: function(){
                _.dialogName = '';
            }
        }
    })


    .factory('Models', function () {

        var extend = function (Child, Parent) {
            var F = function () {};
            F.prototype = Parent.prototype;
            Child.prototype = new F();
            Child.prototype.constructor = Child;
            Child.super = Parent.prototype;
        };

        this.Collection = function () {
            var self = this;
            this.rs = [];
            this.add = function (r) {
                self.rs.push(r);
            };
            this.size = function () {
                return self.rs.length;
            };
            this.getAll = function () {
                return self.rs;
            };
            this.indexOf = function(obj){
                var i = 0;
                var success = false;
                self.rs.some(function(item){
                    var isCandidate = true;
                    Object.keys(obj).some(function(conditionKey){
                        if (obj[conditionKey]!=item[conditionKey]) {
                            isCandidate = false;
                            return true;
                        }
                    });
                    if (isCandidate) {
                        success = true;
                        return true;
                    }
                    i++;
                });
                return success?i:-1;
            };
            this.removeIf = function(obj){
                if (!obj) return;
                var index = self.indexOf(obj);
                console.log('found index',obj,index);
                console.log(self.rs);
                if (index>-1) self.rs.splice(index,1);
            }
        };

        var BaseModel = function () {};
        BaseModel.prototype.fromJsonObj = function(jsonObj){
            var self = this;
            Object.keys(jsonObj).forEach(function(key){
                if (key in self) {
                    self[key] = jsonObj[key];
                    self[key] = +self[key]||self[key];
                }
            });
        };
        BaseModel.prototype.clone = function(classFn){
            var self =this;
            return new classFn(self.toJsonObj());
        };
        BaseModel.prototype.toJsonObj = function(){
            var self = this;
            var res = {};
            Object.keys(this).forEach(function(key){
                res[key]=self[key];
            });
            return res;
        };
        BaseModel.prototype.toJsonArr = function(){
            var self = this;
            var res = [];
            Object.keys(this).forEach(function(key){
                res.push({key:key,value:self[key]});
            });
            return res;
        };

        this.Resource = function (jSonObj) {
            var self = this;
            this.name = '';
            this.resourcePath = '';
            (function(){
                self.fromJsonObj(jSonObj);
            })();
        };
        extend(this.Resource,BaseModel);

        this.SpriteSheet = function(jSonObj){
            var self = this;
            this.id = null;
            this.type = 'spriteSheet';
            this.name = '';
            this.resourcePath = '';
            this.width = 0;
            this.height = 0;
            this.numOfFramesH = 1;
            this.numOfFramesV = 1;
            (function(){
                self.fromJsonObj(jSonObj);
            })();
        };
        extend(this.SpriteSheet,BaseModel);

        this.GameObject = function(jSonObj){
            var self = this;
            this.numOfFramesH = 1;
            this.numOfFramesV = 1;
            (function(){
                self.fromJsonObj(jSonObj);
            })();
        };
        extend(this.GameObject,BaseModel);


        return this;
    })


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


;