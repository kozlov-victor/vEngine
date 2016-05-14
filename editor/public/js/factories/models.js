'use strict';

window.app

    .factory('editData', function (Collections) {
        return {
            spriteSheetList: new Collections.Collection(),
            gameObjectList: new Collections.Collection(),
            frameAnimationList: new Collections.Collection(),
            sceneList: new Collections.Collection(),
            currGameObjectInEdit: null,
            currSpriteSheetInEdit: null,
            currFrAnimationInEdit: null,
            currSceneInEdit:null,
            currSceneGameObjectInEdit:null,
            gameProps: {}
        }
    })

    .factory('Collections',function(){

        this.Collection = function () {
            var self = this;
            this.rs = [];
            this.add = function (r) {
                self.rs.push(r);
            };
            this.get = function(index){
                return self.rs[index];
            };
            this.isEmpty = function(){
                return self.size()==0;
            };
            this.size = function () {
                return self.rs.length;
            };
            this.getAll = function () {
                return self.rs;
            };
            this.clear = function(){
                self.rs = [];
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


    .factory('Models', function (editData,Collections) {

        var resourceHolder = editData;
        var Models = this;

        var isPropNotFit = function(el,key){
            if (!key) return true;
            if (!el[key]) return true;
            if (el[key].call) return true;
            if (key.indexOf('_')==0 || key.indexOf('$$')==0) return true;
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
            _numOfFrames:0,
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
                this._numOfFrames = this.numOfFramesH * this.numOfFramesV;
            },
            construct: function(){
                this.calcFrameSize();
            }
        });

        this.GameObject = BaseModel.extend({
            type:'gameObject',
            spriteSheetId:null,
            _spriteSheet:null,
            posX:0,
            posY:0,
            width:0,
            height:0,
            currFrameIndex:0,
            _sprPosX:0,
            _sprPosY:0,
            _frameAnimations: null,
            frameAnimationIds:[],
            _currFrameAnimation:null,
            construct: function(){
                this._frameAnimations = new Collections.Collection();
                this.spriteSheetId && (this._spriteSheet = resourceHolder.spriteSheetList.getIf({id:this.spriteSheetId}));
                var self = this;
                self._frameAnimations.clear();
                this.frameAnimationIds.forEach(function(id){
                    var a = resourceHolder.frameAnimationList.getIf({id:id});
                    a._gameObject = self;
                    self._frameAnimations.add(a);
                });
            },
            getFrAnimation: function(animationName){
                return this._frameAnimations.getIf({name:animationName});
            },
            setFrameIndex: function(index){
                this.currFrameIndex = index;
                this._sprPosX = this._spriteSheet.getFramePosX(this.currFrameIndex);
                this._sprPosY = this._spriteSheet.getFramePosY(this.currFrameIndex);
            },
            update: function(time) {
                this._currFrameAnimation && this._currFrameAnimation.update(time);
            }
        });

        this.FrameAnimation = BaseModel.extend({
            type:'frameAnimation',
            name:'',
            frames:[],
            duration:1000,
            _gameObject:null,
            _startTime:null,
            _timeForOneFrame:0,
            construct: function(){
                this._timeForOneFrame = ~~(this.duration / this.frames.length);
            },
            play: function(){
                this._gameObject._currFrameAnimation = this;
            },
            stop:function(){
                this._gameObject._currFrameAnimation = null;
                this._startTime = null;
            },
            update: function(time){
                if (!this._startTime) this._startTime = time;
                var delta = (time - this._startTime)%this.duration;
                var ind = ~~((delta/this._timeForOneFrame)%this.duration);
                this._gameObject.currFrameIndex = this.frames[ind];
            }
        });

        this.Scene = BaseModel.extend({
            type:'scene',
            gameObjectProps:[],
            _gameObjects:null,
            construct: function(){
                var self = this;
                self._gameObjects = new Collections.Collection();
                this.gameObjectProps.forEach(function(prop){
                    var obj = resourceHolder.gameObjectList.getIf({id:prop.id});
                    obj.fromJsonObject(prop);
                    self._gameObjects.add(new Models.GameObject(obj.clone(Models.GameObject)));
                });
            }
        });

        return this;
    })


;