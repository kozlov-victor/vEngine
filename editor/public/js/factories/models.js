'use strict';

window.app

    .factory('editData', function (Collections) {
        return {
            spriteSheetList: new Collections.Collection(),
            gameObjectList: new Collections.Collection()
        }
    })

    .factory('uiHelper', function () {
        var _;
        return _ = {
            toggle: function (currentVal, defaultVal) {
                return currentVal == defaultVal ? 0 : defaultVal;
            },
            _dialogsStack: [],
            showDialog: function(name){
                _.dialogName = name;
                _._dialogsStack.push(name);
            },
            closeDialog: function(){
                _._dialogsStack.pop();
                _.dialogName = _._dialogsStack[_._dialogsStack.length-1];
            }
        }
    })

    .factory('Collections',function(){

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
                if (index>-1) self.rs.splice(index,1);
            };
            this.getIf = function(obj){
                return self.rs[self.indexOf(obj)];
            }
        };

        return this;

    })


    .factory('Models', function (editData) {

        var resourceHolder = editData;

        var isPropNotFit = function(el,key){
            if (!key) return true;
            if (!el[key]) return true;
            if (el[key].call) return true;
            if (key.indexOf('_')==0) return true;
        };

        var BaseModel = Class.extend({
            id:null,
            name:'',
            toJsonObj: function(){
                var res = {};
                for (var key in this) {
                    if (isPropNotFit(this,key)) continue;
                    res[key]=this[key];
                }
                return res;
            },
            toJsonArr: function(){
                var res = [];
                for (var key in this) {
                    if (isPropNotFit(this,key)) continue;
                    res.push({key:key,value:this[key]});
                }
                return res;
            },
            fromJsonObject:function(jsonObj){
                var self = this;
                Object.keys(jsonObj).forEach(function(key){
                    if (key in self) {
                        self[key] = jsonObj[key];
                        self[key] = +self[key]||self[key];
                    }
                });
            },
            clone: function(Class){
                var self =this;
                return new Class(self.toJsonObj());
            },
            _init:function(){
                arguments && arguments[0] && this.fromJsonObject(arguments[0]);
            }
        });

        var Resource = BaseModel.extend({
            resourcePath:''
        });

        this.SpriteSheet = Resource.extend({
            type:'spriteSheet',
            width:0,
            height:0,
            numOfFramesH:1,
            numOfFramesV:1,
            _frameWidth:0,
            _frameHeight:0,
            getFramePosX: function(frameIndex){
                return (frameIndex%this.numOfFramesH)*this._frameWidth;
            },
            getFramePosY: function(frameIndex){
                return ~~(frameIndex/this.numOfFramesH)*this._frameHeight;
            },
            calcFrameSize: function(){
                if (!(this.numOfFramesH && this.numOfFramesV)) return;
                this._frameWidth = this.width/this.numOfFramesH;
                this._frameHeight = this.height/this.numOfFramesV;
            },
            constructor: function(){
                this.calcFrameSize();
            }
        });

        this.GameObject = BaseModel.extend({
            type:'gameObject',
            spriteSheetName:'',
            width:0,
            height:0,
            currFrameIndex:0,
            constructor: function(){
                this._spriteSheet = resourceHolder.spriteSheetList.getIf({name:this.spriteSheetName});
            }
        });

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