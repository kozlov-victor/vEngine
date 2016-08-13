(function() {

    window.Class = function() {};

    Class.extend = function(props, staticProps) {

        var mixins = [];

        if (arguments[0].slice) {
            mixins = arguments[0];
            props = arguments[1];
            staticProps = arguments[2];
        }

        function Instance() {
            this._init && this._init.apply(this, arguments);
            this.construct && this.construct();
        }

        Instance.prototype = Class.inherit(this.prototype);

        Instance.prototype.constructor = Instance;

        Instance.extend = Class.extend;

        copyWrappedProps(staticProps, Instance, this);

        for (var i = 0; i < mixins.length; i++) {
            copyWrappedProps(mixins[i], Instance.prototype, this.prototype);
        }
        copyWrappedProps(props, Instance.prototype, this.prototype);

        return Instance;
    };

    var fnTest = /xyz/.test(function() {xyz}) ? /\b_super\b/ : /./;

    function copyWrappedProps(props, targetPropsObj, parentPropsObj) {
        if (!props) return;

        for (var name in props) {
            if (typeof props[name] == "function"
                && typeof parentPropsObj[name] == "function"
                && fnTest.test(props[name])) {
                // скопировать, завернув в обёртку
                targetPropsObj[name] = wrap(props[name], parentPropsObj[name]);
            } else {
                targetPropsObj[name] = props[name];
            }
        }

    }

    function wrap(method, parentMethod) {
        return function() {
            var backup = this._super;

            this._super = parentMethod;

            try {
                return method.apply(this, arguments);
            } finally {
                this._super = backup;
            }
        }
    }
    
    Class.inherit = Object.create || function(proto) {
            function F() {}
            F.prototype = proto;
            return new F;
        };
})();





(function(){

    ve_local.Bundle = function(data){

        this.spriteSheetList = new ve.collections.List();
        this.gameObjectList = new ve.collections.List();
        this.frameAnimationList = new ve.collections.List();
        this.layerList = new ve.collections.List();
        this.sceneList = new ve.collections.List();
        this.layerList = new ve.collections.List();
        this.fontList = new ve.collections.List();
        this.soundList = new ve.collections.List();
        this.particleSystemList = new ve.collections.List();
        this.gameProps = {};

        var self = this;

        var toDataSource = function(ResourceClass,dataList,resourceList){
            dataList.forEach(function(item){
                resourceList.add(new ResourceClass(item));
            });
        };


        this.prepare = function(){
            ve_local.RESOURCE_NAMES.forEach(function(itm){
                toDataSource(ve.models[ve.utils.capitalize(itm)],data[itm],self[itm+'List']);
            });
            self.gameProps = data.gameProps;
            data = null;
        };

        var applyIndividualBehaviour = function(model){
            var behaviourFn = ve_local.scripts[model.type] && ve_local.scripts[model.type][model.name+'.js'];
            if (behaviourFn) {
                var exports = {};
                behaviourFn(exports,model);
                exports.onCreate();
                model.__updateIndividualBehaviour__ = function(deltaTime){
                    exports.onUpdate(deltaTime);
                }
            } else {
                model.__updateIndividualBehaviour__ = noop;
            }

        };

        var applyCommonBehaviour = function(model){
            var cbList = [];
            if (!model._commonBehaviour) {
                model.__updateCommonBehaviour__ = noop;
                return;
            }
            model._commonBehaviour.forEach(function(cb){
                var instance = new ve.commonBehaviour[cb.name]();
                instance.initialize(model,cb.parameters);
                instance.onCreate();
                cbList.push(instance);
            });
            model.__updateCommonBehaviour__ = function(){
                cbList.forEach(function(cb){
                    cb.onUpdate();
                });
            }
        };
        
        this.prepareGameObjectScripts = function(){
            self.sceneList.forEach(function(scene){
                scene.__onResourcesReady();
                self.applyBehaviour(scene);
                scene._layers.forEach(function(layer){
                    layer._gameObjects.forEach(function(gameObject){
                        self.applyBehaviour(gameObject);
                    });
                });
            });
        };

        this.applyBehaviour = function(model){
            applyCommonBehaviour(model);
            applyIndividualBehaviour(model);
        }

    };

})();

(function(){

    var collections = {};
    collections.List = function () {
        var self = this;
        this.rs = [];
        this.add = function (r) {
            self.rs.push(r);
        };
        this.addAll = function (list) {
            list.forEach(function(itm){
                self.rs.push(itm);
            });
        };
        this.get = function(index){
            return self.rs[index];
        };
        this.getFirst = function(){
            return this.get(0);
        };
        this.getLast = function(){
            return this.get(this.size()-1);
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
        this.forEach = function(callback){
            for (var i = 0,l=this.rs.length;i<l;i++){
                callback(self.rs[i],i);
            }
        };
        this.forEachReversed = function(callback){
            for (var i = this.rs.length-1;i>=0;i--){
                callback(self.rs[i],i);
            }
        };
        this.some = function(callback){
            for (var i = 0,l=this.rs.length;i<l;i++){
                var res = callback(self.rs[i],i);
                if (res) return true;
            }
            return false;
        };
        this.someReversed = function(callback){
            for (var i = this.rs.length-1;i>=0;i--){
                var res = callback(self.rs[i],i);
                if (res) break;
            }
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
        this.remove = function (obj){
            if (!obj) return;
            var index = self.indexOf(obj);
            if (index>-1) self.rs.splice(index,1);
        };
        this.find = function (obj){
            return self.rs[self.indexOf(obj)];
        }
    };

    collections.Set = function(){
        var self = this;
        this.rs = {};
        this.add = function(itm){
            self.rs[itm.id]=itm;
        };
        this.get = function(itm){
            return self.rs[itm.id];
        };
        this.has = function(key){
            return key in self.rs;
        };
        this.combine = function(another){
            Object.keys(another.rs).forEach(function(key){
                self.add(another.rs[key]);
            });
        };
        this.asArray = function(){
            var res = [];
            Object.keys(self.rs).forEach(function(key){
                res.push(self.rs[key]);
            });
            return res;
        }
    };
    ve.collections = collections;
})();

(function(){

    var models = {};
    var isPropNotFit = function(el,key){
        if (!key) return true;
        if (key.indexOf('$$')==0) return true;
        if (el[key] && key.indexOf('_')==0) return true;
        if (el[key] && el[key].call) return true;
        if (typeof el[key] == 'string') return false;
        if (typeof el[key] == 'number') return false;
        if (!el[key]) return true;
    };

    function deepCopy(obj) {
        if (Object.prototype.toString.call(obj) === '[object Array]') {
            var out = [], i = 0, len = obj.length;
            for ( ; i < len; i++ ) {
                out[i] = deepCopy(obj[i]);
            }
            return out;
        }
        if (typeof obj === 'object') {
            var out = {}, i;
            for ( i in obj ) {
                out[i] = deepCopy(obj[i]);
            }
            return out;
        }
        return obj;
    }

    models.BaseModel = Class.extend({
        id:null,
        protoId:null,
        name:'',
        toJSON: function(){
            var res = {};
            for (var key in this) {
                if (isPropNotFit(this,key)) {
                    continue;
                }
                res[key]=this[key];
            }
            return deepCopy(res);
        },
        toJSON_Array: function(){
            var res = [];
            for (var key in this) {
                if (isPropNotFit(this,key)) continue;
                res.push({key:key,value:this[key]});
            }
            return res;
        },
        fromJSON:function(jsonObj){
            var self = this;
            Object.keys(jsonObj).forEach(function(key){
                if (key in self) {
                    self[key] = jsonObj[key];
                    self[key] = +self[key]||self[key];
                }
            });
        },
        clone: function(){
            return new this.constructor(this.toJSON());
        },
        on: function(eventName,callBack){
            var self = this;
            self.__events__[eventName] = self.__events__[eventName] || [];
            self.__events__[eventName].push(callBack);
        },
        trigger: function(eventName,data){
            var self = this;
            var es = self.__events__[eventName];
            if (!es) return;
            es.forEach(function(e){
                e(data);
            });
        },
        _init:function(){
            this.__events__ = {};
            arguments && arguments[0] && this.fromJSON(arguments[0]);
        }
    });

    models.Behaviour = models.BaseModel.extend({});

    var Resource = models.BaseModel.extend({
        resourcePath:''
    });

    models.Sound = Resource.extend({
        type:'sound',
        _buffer:null
    });

    models.SpriteSheet = Resource.extend({
        type:'spriteSheet',
        width:0,
        height:0,
        numOfFramesH:1,
        numOfFramesV:1,
        _frameWidth:0,
        _frameHeight:0,
        _numOfFrames:0,
        _textureInfo: null,
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

    models.BaseGameObject = models.BaseModel.extend({
        type:'baseGameObject',
        groupName:'',
        _spriteSheet:null,
        posX:0,
        posY:0,
        width:0,
        height:0,
        _layer:null,
        getRect: function(){
            return {x:this.posX,y:this.posY,width:this.width,height:this.height};
        },
        kill: function(){
            this._layer._gameObjects.remove({id:this.id});
            this._layer._scene._allGameObjects.remove({id:this.id});
        },
        getScene: function(){
            return this._layer._scene;
        },
        update: function(){},
        _render: function(){}
    });

    models.GameObject = models.BaseGameObject.extend({
        type:'gameObject',
        spriteSheetId:null,
        _spriteSheet: null,
        _behaviour:null,
        commonBehaviour:[],
        _commonBehaviour:null,
        velX:0,
        velY:0,
        currFrameIndex:0,
        _sprPosX:0,
        _sprPosY:0,
        _frameAnimations: null,
        frameAnimationIds:[],
        _currFrameAnimation:null,
        rigid:true,
        _timeCreated:null,
        construct: function(){
            var self = this;
            this._frameAnimations = new ve.collections.List();
            if (!this.spriteSheetId) {
                return;
            }
            this._spriteSheet = ve_local.bundle.spriteSheetList.find({id: this.spriteSheetId});
            self.setFrameIndex(self.currFrameIndex);
            self._frameAnimations.clear();
            this.frameAnimationIds.forEach(function(id){
                var a = ve_local.bundle.frameAnimationList.find({id: id});
                a = a.clone(ve.models.FrameAnimation);
                a._gameObject = self;
                self._frameAnimations.add(a);
            });
            self._commonBehaviour = new ve.collections.List();
            this.commonBehaviour.forEach(function(cb){
                self._commonBehaviour.add(new ve.models.CommonBehaviour(cb));
            });
        },
        getFrAnimation: function(animationName){
            return this._frameAnimations.find({name: animationName});
        },
        setFrameIndex: function(index){
            this.currFrameIndex = index;
            this._sprPosX = this._spriteSheet.getFramePosX(this.currFrameIndex);
            this._sprPosY = this._spriteSheet.getFramePosY(this.currFrameIndex);
        },
        setSpriteSheet: function(spriteSheet){
            this._spriteSheet = spriteSheet;
            this.width = spriteSheet._frameWidth;
            this.height = spriteSheet._frameHeight;
        },
        update: function(time,delta) {
            this._currFrameAnimation && this._currFrameAnimation.update(time);
            var deltaX = this.velX * delta / 1000;
            var deltaY = this.velY * delta / 1000;
            var posX = this.posX+deltaX;
            var posY = this.posY+deltaY;
            ve_local.collider.check(this,posX,posY);
            this.__updateIndividualBehaviour__(delta);
            this.__updateCommonBehaviour__();
            this._render();
        },
        stopFrAnimations: function(){
            this._currFrameAnimation && this._currFrameAnimation.stop();
        },
        _render: function(){
            ve_local.rendererContext.drawImage(
                this._spriteSheet._textureInfo,
                this._sprPosX,
                this._sprPosY,
                this._spriteSheet._frameWidth,
                this._spriteSheet._frameHeight,
                this.posX,
                this.posY,
                this.width,
                this.height
            );
        }
    });

    models.FrameAnimation = models.BaseModel.extend({
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
            var ind = ~~((this.frames.length)*delta/this.duration);
            var lastFrIndex = this._gameObject.currFrameIndex;
            if (lastFrIndex!=this.frames[ind]) {
                this._gameObject.setFrameIndex(this.frames[ind]);
            }
        }
    });

    models.Layer = models.BaseModel.extend({
        type:'layer',
        gameObjectProps:[],
        _gameObjects:null,
        _scene:null,
        construct: function() {
            var self = this;
            self._gameObjects = new ve.collections.List();
            this.gameObjectProps.forEach(function(prop){
                var objCloned;
                switch (prop.subType) {
                    case 'textField':
                        objCloned = new ve.models.TextField(prop);
                        break;
                    default:
                        var obj = ve_local.bundle.gameObjectList.find({id: prop.protoId});
                        objCloned = obj.clone();
                        objCloned.fromJSON(prop);
                        break;
                }
                objCloned._layer = self;
                self._gameObjects.add(objCloned);
            });
        },
        getAllSpriteSheets:function() {
            var dataSet = new ve.collections.Set();
            this._gameObjects.forEach(function(obj){
                obj._spriteSheet && dataSet.add(obj._spriteSheet);
            });
            return dataSet;
        },
        update: function(currTime,deltaTime){
            this._gameObjects.forEach(function(obj){
                if (!obj) return;
                obj.update(currTime,deltaTime);
            });
        }
    });

    models.Scene = models.BaseModel.extend({
        type:'scene',
        layerProps:[],
        _layers:null,
        _allGameObjects:null,
        _twins:null,
        __onResourcesReady: function(){
            var self = this;
            self._allGameObjects = new ve.collections.List();
            self._layers.forEach(function(l){
                self._allGameObjects.addAll(l._gameObjects);
            });
        },
        construct: function(){
            var self = this;
            self._layers = new ve.collections.List();
            this.layerProps.forEach(function(prop){
                var l = ve_local.bundle.layerList.find({id: prop.protoId});
                var lCloned = l.clone(ve.models.Layer);
                lCloned.fromJSON(prop);
                lCloned._scene = self;
                self._layers.add(lCloned);
            });
        },
        getAllSpriteSheets:function() {
            var dataSet = new ve.collections.Set();
            this._layers.forEach(function(l){
                dataSet.combine(l.getAllSpriteSheets());
            });
            return dataSet;
        },
        findGameObject: function(name){
            return this._allGameObjects.find({name:name});
        },
        getAllGameObjects:function(){
            return this._allGameObjects;
        },
        update: function(currTime,deltaTime){
            this._layers.forEach(function(layer){
                layer.update(currTime,deltaTime);
            });
            this.__updateIndividualBehaviour__(deltaTime);
        }
    });

    models.Font = models.BaseModel.extend({
        type:'font',
        fontColor:'black',
        fontSize:12,
        fontFamily:'Monospace',
        resourcePath:'',
        fontContext:null
    });

    models.TextField = models.BaseGameObject.extend({
        type:'userInterface',
        subType:'textField',
        _chars:null,
        text:'',
        _font:null,
        fontId:null,
        rigid:false,
        setText: function(text) {
            text+='';
            this._chars = [];
            this.text = text;
            this.width = 0;
            for (var i=0,max=text.length;i<max;i++) {
                this._chars.push(text[i]);
                var currSymbolInFont = this._font.fontContext.symbols[text[i]] || this._font.fontContext.symbols[' '];
                this.width+=currSymbolInFont.width;
            }
        },
        setFont: function(font){
            this._font = font;
            this.height = this._font.fontContext.symbols[' '].height;
            this._spriteSheet = new ve.models.SpriteSheet({resourcePath:this._font.resourcePath});
            this.setText(this.text);
        },
        clone:function(){
            return this._super();
        },
        construct: function(){
            this.rigid = false;
            var font =
                ve_local.bundle.fontList.find({id:this.fontId}) ||
                ve_local.bundle.fontList.find({name:'default'});
            this.setFont(font);
        },
        update: function(){
            this._render();
        },
        _render: function(){
            var posX = this.posX;
            var posY = this.posY;
            var self = this;
            this._chars.forEach(function(ch){
                var charInCtx = self._font.fontContext.symbols[ch]||self._font.fontContext.symbols['?'];
                ve_local.rendererContext.drawImage(
                    self._spriteSheet._textureInfo,
                    charInCtx.x,
                    charInCtx.y,
                    charInCtx.width,
                    charInCtx.height,
                    posX,
                    posY,
                    charInCtx.width,
                    charInCtx.height
                );
                posX+=charInCtx.width;
            });
        }
    },
    {
        _cnt:0
    });

    models.CommonBehaviour = models.BaseModel.extend({
        type:'commonBehaviour',
        name:'',
        description:'',
        parameters:[],
        construct: function(){

        }
    });

    models.ParticleSystem = models.BaseModel.extend({
        type:'particleSystem',
        gameObjectId:null,
        _gameObject:null,
        _particles:null,
        numOfParticlesToEmit:null,
        particleAngle:null,
        particleVelocity:null,
        particleLiveTime:null,
        construct: function(){
            this._particles = [];
            if (!this.numOfParticlesToEmit) this.numOfParticlesToEmit = {from:1,to:10};
            if (!this.particleAngle) this.particleAngle = {from:0,to:Math.PI};
            if (!this.particleVelocity) this.particleVelocity = {from:1,to:100};
            if (!this.particleLiveTime) this.particleLiveTime = {from:100,to:1000};
            this._gameObject = ve_local.bundle.gameObjectList.find({id:this.gameObjectId});
        },
        emit: function(x,y){
            var r = function(obj){
                return ve.Math.getRandomInRange(obj.from,obj.to);
            };
            for (var i = 0;i<r(this.numOfParticlesToEmit);i++) {
                var particle = this._gameObject.clone();
                var angle = r(this.particleAngle);
                var vel = r(this.particleVelocity);
                particle.fromJSON({
                    velX:vel*Math.cos(angle),
                    velY:vel*Math.sin(angle),
                    posX:x,
                    posY:y
                });
                particle.liveTime = r(this.particleLiveTime);
                ve_local.bundle.applyBehaviour(particle);
                this._particles.push(particle);
            }
        },
        update:function(time,delta){
            var self = this;
            this._particles.forEach(function(p){
                if (!p._timeCreated) p._timeCreated = time;
                if (time - p._timeCreated > p.liveTime) {
                    self._particles.splice(self._particles.indexOf(p),1);
                }
                p.update(time,delta);
            });
        }
    });


    ve.models = models;

})();
(function(){
    ve.utils = {};
    var ns = ve.utils;
    ns.Queue = function(){
        var self = this;
        this.size = function(){
            return tasksTotal;
        };
        this.onResolved = null;
        var tasksTotal = 0;
        var tasksResolved = 0;
        this.addTask = function() {
            tasksTotal++;
        };
        this.resolveTask = function(){
            tasksResolved++;
            if (tasksTotal==tasksResolved) {
                if (self.onResolved) self.onResolved();
            }
        };
        this.start = function() {
            if (this.size()==0) this.onResolved();
        }
    };
    ns.merge = function(obj1,obj2){
        Object.keys(obj2).forEach(function(key){
            obj1[key]=obj2[key];
        });
    };
    ns.clone = function(obj){
        return Object.create(obj);
    };
    ns.capitalize = function(s){
        return s.substr(0,1).toUpperCase() +
            s.substr(1);
    };
    ns.getBase64prefix = function(fileType,fileName) {
        var ext = fileName.split('.').pop();
        return 'data:'+fileType+'/'+ext+';base64,'
    };
})();



(function(){

    var ns = {};

    ve.Math = ns;

    ns.isPointInRect = function(point,rect) {
        return  point.x>rect.x &&
            point.x<(rect.x+rect.width) &&
            point.y>rect.y &&
            point.y<(rect.y+rect.height);
    };

    ns.isRectIntersectRect = function(r1,r2) {
        var res =  ! ( r2.x > (r1.x+r1.width)
            || (r2.x+r2.width) < r1.x
            || r2.y > (r1.y+r1.height)
            || (r2.y+r2.height) < r1.y
        );
        return res;
    };

    ns.radToDeg = function(rad){
        return rad *  180 / Math.PI;
    };

    ns.degToRad = function(deg) {
        return deg *  Math.PI / 180;
    };

    ns.getRandomInRange = function(min, max){
        if (min>max) {
            var tmp = min;
            min = max;
            max = tmp;
        }
        var res = Math.random() * (max - min + 1) + min;
        if (res>max) res = max;
        else if (res<min) res = min;
        return res;
    };

})();
window.app.
    controller('animationCtrl', function (
        $scope,
        $http,
        $sce,
        editData,
        uiHelper,
        i18n,
        utils,
        resourceDao
    ) {
        var s = $scope;
        s.editData = editData;
        s.uiHelper = uiHelper;
        s.i18n = i18n.getAll();
        s.utils = utils;
        s.resourceDao = resourceDao;

        var isStopped = false;

        s.toArray = function(expr) {
            try {
              return JSON.parse('['+expr+']');
            } catch(e){
                return [];
            }
        };

        s.createOrEditFrAnimation = function(){
            s.editData.currFrAnimationInEdit.frames = JSON.parse('['+s.editData.currFrAnimationInEdit.frames+']');
            resourceDao.createOrEditResource(
                s.editData.currFrAnimationInEdit,
                ve.models.FrameAnimation,
                ve_local.bundle.frameAnimationList,
                function(res){
                    if (res.type=='create') {
                        s.editData.currGameObjectInEdit.frameAnimationIds.push(res.r.id);
                        s.editData.currGameObjectInEdit.constructor(); // todo WHAT IS IT?????
                        resourceDao.createOrEditResource(
                            s.editData.currGameObjectInEdit,
                            ve.models.GameObject,
                            ve_local.bundle.gameObjectList,
                            null,true
                        );
                    } else {
                        s.editData.currGameObjectInEdit.constructor(); // todo WHAT IS IT?????
                    }
                }
            );
        };

        s.allIndexes = function(){
            var res = utils.getArray(s.editData.currGameObjectInEdit._spriteSheet._numOfFrames);
            return res.join(',')
        };

        s.playAnimation = function(){
            try {
                s.editData.currFrAnimationInEdit.frames = JSON.parse('['+s.editData.currFrAnimationInEdit.frames+']');
            } catch(e){}
            s.editData.currFrAnimationInEdit.constructor();
            setTimeout(function(){
                s.editData.currFrAnimationInEdit.play();
                s.editData.currFrAnimationInEdit.update(new Date().getTime());
                var i = s.editData.currGameObjectInEdit.currFrameIndex;
                s.editData.currGameObjectInEdit.setFrameIndex(i);
                s.$apply();
                if (isStopped) {
                    isStopped = false;
                    return;
                }
                if (uiHelper.dialogName=='frmCreateAnimation') setTimeout(s.playAnimation,50);
            },0);
        };

        s.stopAnimation = function(){
            s.editData.currFrAnimationInEdit.stop();
            isStopped = true;
        };

        s.setRange = function(from,to) {
            if (isNaN(from) || isNaN(to)) return;
            s.editData.currFrAnimationInEdit.frames = [];
            for (var i=from;i<=to;i++) {
                s.editData.currFrAnimationInEdit.frames.push(i);
            }
        };

        (function(){
            var dialogState = uiHelper.getDialogState();
            if (dialogState.opName=='create') {
                s.editData.currFrAnimationInEdit = new ve.models.FrameAnimation();
                s.editData.currFrAnimationInEdit._gameObject = s.editData.currGameObjectInEdit;
            } else if (dialogState.opName=='edit'){
                s.editData.currFrAnimationInEdit = dialogState.opObject.clone();
                s.editData.currFrAnimationInEdit._gameObject = s.editData.currGameObjectInEdit;
            }
        })();


    });


window.app.
    controller('buildCtrl', function (
        $scope,
        $http,
        $sce,
        editData,
        resourceDao,
        uiHelper,
        i18n,
        utils) {

        var s = $scope;
        s.editData = editData;
        s.uiHelper = uiHelper;
        s.i18n = i18n.getAll();
        s.utils = utils;
        s.resourceDao = resourceDao;

        s.opts = {
            debug: false,
            embedResources: false,
            embedScript: false
        };

        // todo project name
        s.build = function(){
            $http({
                url: utils.generateBuildUrl(s.opts),
                method: "GET"
            }).
                success(function (resp) {
                    s.link = '/project/out'
                });
        };

        (function(){

        })();

    });

window.app.
    controller('commonBehaviourCtrl', function (
        $scope,
        $http,
        $sce,
        editData,
        resourceDao,
        uiHelper,
        i18n,
        utils) {

        var s = $scope;
        s.editData = editData;
        s.uiHelper = uiHelper;
        s.i18n = i18n.getAll();
        s.utils = utils;
        s.resourceDao = resourceDao;

        s.createOrEditCommonBehaviour = function(obj){
            resourceDao.createOrEditObjectInResource(
                s.editData.currGameObjectInEdit.type,s.editData.currGameObjectInEdit.id,
                obj.type,obj,
                function(resp){
                    if (resp.type=='create') {
                        obj.id = resp.r.id;
                        s.editData.currGameObjectInEdit._commonBehaviour.add(obj);
                        s.editData.currGameObjectInEdit.commonBehaviour.push(obj.toJSON());
                    }
                    uiHelper.closeDialog();
                }
            );
        };


        (function(){
            var dialogState = uiHelper.getDialogState();
            if (dialogState.opName=='create') {
                s.editData.currCommonBehaviourInEdit = new ve.models.CommonBehaviour();
                s.editData.currCommonBehaviourInEdit.name = name;
                var obj =
                    editData.commonBehaviourList.find({
                        name: name
                    });
                if (obj) s.editData.currCommonBehaviourInEdit.parameters = obj.clone().parameters;
            } else if (dialogState.opName=='edit'){
                s.editData.currCommonBehaviourInEdit = dialogState.opObject.clone();
            }
        })();



    });

window.app.
    controller('fontCtrl', function (
        $scope,
        $http,
        $sce,
        editData,
        resourceDao,
        uiHelper,
        chrome,
        i18n,
        utils) {

        var s = $scope;
        s.editData = editData;
        s.uiHelper = uiHelper;
        s.i18n = i18n.getAll();
        s.utils = utils;
        s.resourceDao = resourceDao;
        s.fontSample = 'test this font!';

        var getFontContext = function(arrFromTo, strFont, w) {
            function getFontHeight(strFont) {
                var parent = document.createElement("span");
                parent.appendChild(document.createTextNode("height!ДдЙЇ"));
                document.body.appendChild(parent);
                parent.style.cssText = "font: " + strFont + "; white-space: nowrap; display: inline;";
                var height = parent.offsetHeight;
                document.body.removeChild(parent);
                return height;
            }
            var cnv = document.createElement('canvas');
            var ctx = cnv.getContext('2d');
            ctx.font = strFont;
            var textHeight = getFontHeight(strFont);
            var symbols = {};
            var currX = 0, currY = 0, cnvHeight = textHeight;
            for (var k = 0; k < arrFromTo.length; k++) {
                var arrFromToCurr = arrFromTo[k];
                for (var i = arrFromToCurr.from; i < arrFromToCurr.to; i++) {
                    var currentChar = String.fromCharCode(i);
                    //if (currentChar == '\\' || currentChar == '\'') {
                    //    currentChar = '\\' + currentChar
                    //}
                    ctx = cnv.getContext('2d');
                    var textWidth = ctx.measureText(currentChar).width;
                    if (textWidth == 0) continue;
                    if (currX + textWidth > w) {
                        currX = 0;
                        currY += textHeight;
                        cnvHeight = currY + textHeight;
                    }
                    var symbol = {};
                    symbol.x = ~~currX;
                    symbol.y = ~~currY;
                    symbol.width = ~~textWidth;
                    symbol.height = textHeight;
                    symbols[currentChar] = symbol;
                    currX += textWidth;
                }
            }
            return {symbols: symbols, width: w, height: cnvHeight};
        };


        var getFontImage = function(symbolsContext,strFont,color){
            var cnv = document.createElement('canvas');
            cnv.width = symbolsContext.width;
            cnv.height = symbolsContext.height;
            var ctx = cnv.getContext('2d');
            ctx.font = strFont;
            ctx.fillStyle = color;
            ctx.textBaseline = "top";
            var symbols = symbolsContext.symbols;
            for (var symbol in symbols) {
                if (!symbols.hasOwnProperty(symbol)) continue;
                ctx.fillText(symbol, symbols[symbol].x, symbols[symbol].y);
            }
            return cnv.toDataURL();
        };

        var updateObjectFonts = function(){
            utils.eachObjectOnScene(function(go){
                if (go.subType && go.subType=='textField') {
                    var font =
                        editData.fontList.find({id:go.fontId}) ||
                        editData.fontList.find({name:'default'});
                    font.resourcePath+='?'+Math.random();
                    go.setFont(font);
                }
            });
        };

        s.createOrEditFont = function(){
            var font = s.editData.currFontInEdit;
            var strFont = font.fontSize +'px'+' '+font.fontFamily;
            font.fontContext = getFontContext([{from: 32, to: 150}, {from: 1040, to: 1116}], strFont, 320);
            font._file = utils.dataURItoBlob(getFontImage(font.fontContext,strFont,font.fontColor));
            resourceDao.createOrEditResource(
                font,
                ve.models.Font,
                ve_local.bundle.fontList,
                function(res){
                    if (res.type=='edit') {
                        updateObjectFonts();
                    }
                }
            );
        };

        (function(){
            var dialogState = uiHelper.getDialogState();
            if (dialogState.opName=='create') {
                editData.currFontInEdit = new ve.models.Font();
            } else if (dialogState.opName=='edit'){
                editData.currFontInEdit = dialogState.opObject.clone();
            }


            if (s.editData.systemFontList) return;
            chrome.requestToApi({method:'getFontList'},function(list){
                s.editData.systemFontList = list;
                s.$apply();
            })
        })();

    });
window.app.
    controller('gameObjectCtrl', function (
        $scope,
        $http,
        $sce,
        editData,
        uiHelper,
        i18n,
        utils,
        resourceDao
    ) {
        var s = $scope;
        s.editData = editData;
        s.uiHelper = uiHelper;
        s.i18n = i18n.getAll();
        s.utils = utils;
        s.resourceDao = resourceDao;

        s.refreshGameObjectFramePreview = function(gameObject,ind){
            var spriteSheet = gameObject._spriteSheet;
            if (!spriteSheet) return;
            var maxNumOfFrame = spriteSheet.numOfFramesH*spriteSheet.numOfFramesV-1;
            if (s.editData.currGameObjectInEdit.currFrameIndex>=maxNumOfFrame) {
                s.editData.currGameObjectInEdit.currFrameIndex = 0;
            }
            gameObject.setFrameIndex(ind);
        };

        s.createOrEditGameObject = function(){
            resourceDao.createOrEditResource(s.editData.currGameObjectInEdit,ve.models.GameObject,ve_local.bundle.gameObjectList,function(op){
                if (op.type=='create') {
                    resourceDao.createFile(s.editData.currGameObjectInEdit.name+'.js','script/gameObject',ve_local.DEFAULT_CODE_SCRIPT);
                }
            });
        };

        s.deleteFrameAnimation = function(item) {
            resourceDao.deleteResource(item.id,item.type,function(){
                s.editData.currGameObjectInEdit.frameAnimationIds.splice(
                    s.editData.currGameObjectInEdit.frameAnimationIds.indexOf(item.id),
                    1
                );
                s.editData.currGameObjectInEdit._frameAnimations.remove({id:item.id});
                resourceDao.createOrEditResource(
                    s.editData.currGameObjectInEdit,
                    ve.models.GameObject,
                    ve_local.bundle.gameObjectList,
                    null,true
                );
            });
        };

        s.deleteCommonBehaviour = function(item){
            resourceDao.deleteObjectFromResource(
                editData.currGameObjectInEdit.type,
                editData.currGameObjectInEdit.id,
                item.type,
                item.id,
                function(){
                    s.editData.currGameObjectInEdit._commonBehaviour.remove({id:item.id});
                    utils.removeFromArray(s.editData.currGameObjectInEdit.commonBehaviour,{id:item.id});
                }
            );
        };

        s.deleteGameObjectFromCtxMenu = function(object){
            var layer = editData.currLayerInEdit;
            resourceDao.deleteObjectFromResource(layer.type,layer.protoId,'gameObjectProps',object.id);
            layer._gameObjects.remove({id: object.id});
            uiHelper.closeContextMenu();
        };

        (function(){
            var dialogState = uiHelper.getDialogState();
            if (dialogState.opName=='create') {
                var targetSpriteSheet = ve_local.bundle.spriteSheetList.getLast();
                editData.currGameObjectInEdit = new ve.models.GameObject({
                    spriteSheetId:
                    targetSpriteSheet &&
                    targetSpriteSheet.id
                });
                if (targetSpriteSheet) {
                    editData.currGameObjectInEdit.name = targetSpriteSheet.name;
                }
                utils.recalcGameObjectSize(s.editData.currGameObjectInEdit);
            } else if (dialogState.opName=='edit'){
                editData.currGameObjectInEdit = dialogState.opObject.clone(ve.models.GameObject);
                editData.currGameObjectInEdit.spriteSheet = ve_local.bundle.spriteSheetList.find({id: s.editData.currGameObjectInEdit.id});
            }

            s.availableCommonBehaviour = [];
            if (!s.editData.currGameObjectInEdit) return;
            var appliedBehaviours = s.editData.currGameObjectInEdit._commonBehaviour;
            s.editData.commonBehaviourList.forEach(function(cb){
                if (appliedBehaviours.find({name: cb.name})) return;
                s.availableCommonBehaviour.push(cb);
            });
            s.selectedBehaviourName = s.availableCommonBehaviour[0] && s.availableCommonBehaviour[0].name;

        })();




    });

window.app.
    controller('layerCtrl', function (
        $scope,
        $http,
        $sce,
        editData,
        resourceDao,
        uiHelper,
        i18n,
        utils) {

        var s = $scope;
        s.editData = editData;
        s.uiHelper = uiHelper;
        s.i18n = i18n.getAll();
        s.utils = utils;


        s.createOrEditLayer = function(){
            if (s.editData.currLayerInEdit.id) { // edit resource
                var dataToEdit = s.editData.currLayerInEdit.clone(ve.models.Layer);
                dataToEdit.id = dataToEdit.protoId;
                resourceDao.createOrEditResource(dataToEdit);
            } else { // create object in resource
                resourceDao.createOrEditLayer(s.editData.currLayerInEdit);
            }
        };


        (function(){
            var dialogState = uiHelper.getDialogState();
            if (dialogState.opName=='create') {
                editData.currLayerInEdit = new ve.models.Layer({sceneId:editData.currSceneInEdit.id});
                editData.currLayerInEdit._scene = editData.currSceneInEdit;
            } else if (dialogState.opName=='edit'){
                editData.currLayerInEdit = dialogState.opObject.clone();
                editData.currLayerInEdit._scene = editData.currSceneInEdit;
            }


        })();


    });

window.app.
    controller('leftMenuCtrl', function (

        $scope,
        $http,
        $sce,
        editData,
        uiHelper,
        i18n,
        utils,
        resourceDao
    ) {

        var s = $scope;
        s.editData = editData;
        s.uiHelper = uiHelper;
        s.i18n = i18n.getAll();
        s.utils = utils;
        s.resourceDao = resourceDao;

        s.saveGameProps = function(){
            delete editData.gameProps.$objectId;
            delete editData.gameProps.objectId;
            resourceDao.saveGameProps(editData.gameProps);
        };

        s.deleteScene = function(item){
            item._layers.clear();
            resourceDao.deleteResource(item.id,'scene');
        };

        s.deleteGameObjectFromLayer = function(layer,object){
            resourceDao.deleteObjectFromResource(layer.type,layer.protoId,'gameObjectProps',object.id);
            layer._gameObjects.remove({id: object.id});
        };

        s.deleteLayer = function(scene,l){
            l._gameObjects.clear();
            scene._layers.remove({id: l.id});
            resourceDao.deleteObjectFromResource(scene.type,scene.id,'layerProps', l.id);
        };

        s.showScript = function(model,e){
            e && e.stopPropagation();
            s.uiHelper.window = 'scriptWindow';
            s.editData.scriptEditorUrl =
                '/editor?name='+
                model.name+
                '&path='+encodeURIComponent('script/'+model.type);
        };

    });


window.app.
    controller('particleSystemCtrl', function (
        $scope,
        $http,
        $sce,
        editData,
        resourceDao,
        uiHelper,
        i18n,
        utils) {

        var s = $scope;
        s.editData = editData;
        s.uiHelper = uiHelper;
        s.i18n = i18n.getAll();
        s.utils = utils;
        s.resourceDao = resourceDao;


        (function(){
            var dialogState = uiHelper.getDialogState();
            if (dialogState.opName=='create') {
                editData.currParticleSystemInEdit = new ve.models.ParticleSystem({
                    gameObjectId:(editData.gameObjectList.getLast() && editData.gameObjectList.getLast().id)
                });
            } else if (dialogState.opName=='edit'){
                editData.currParticleSystemInEdit = dialogState.opObject.clone();
            }
            s.currGameObject = editData.currParticleSystemInEdit._gameObject;
            dialogState.opName = '';

        })();





    });

window.app.
    controller('particleSystemPreviewCtrl', function (
        $scope,
        $http,
        $sce,
        editData,
        resourceDao,
        uiHelper,
        i18n,
        utils) {

        var s = $scope;
        s.editData = editData;
        s.uiHelper = uiHelper;
        s.i18n = i18n.getAll();
        s.utils = utils;
        s.resourceDao = resourceDao;

        (function(){



        })();

    });
window.app.
    controller('sceneCtrl', function (
        $scope,
        $http,
        $sce,
        editData,
        uiHelper,
        i18n,
        utils,
        resourceDao,
        messageDigest
    ) {
        var s = $scope;
        s.editData = editData;
        s.uiHelper = uiHelper;
        s.i18n = i18n.getAll();
        s.utils = utils;
        s.resourceDao = resourceDao;

        s.createOrEditScene = function(){
            resourceDao.
                createOrEditResource(s.editData.currSceneInEdit,ve.models.Scene,ve_local.bundle.sceneList,
                function(resp){
                    if (ve_local.bundle.sceneList.size()==1) {
                        s.editData.currSceneInEdit = ve_local.bundle.sceneList.get(0);
                    }
                    if (resp.type=='create') {
                        // todo currLayerInEdit can not be null
                        //resourceDao.createOrEditLayer(new ve.models.Layer({name:'newLayer'}));
                        resourceDao.createFile(s.editData.currSceneInEdit.name+'.js','script/scene',ve_local.DEFAULT_CODE_SCRIPT);
                    }
                });
        };

        var tid = 0;
        s.onKeyPress = function(e){
           //console.log(e.which);
           if (!editData.currSceneGameObjectInEdit) return;
            var edited = false;
            switch (e.which) {
               case 38: // up
                   edited = true;
                   editData.currSceneGameObjectInEdit.posY-=1;
                   break;
               case 40: // down
                   edited = true;
                   editData.currSceneGameObjectInEdit.posY+=1;
                   break;
               case 37: // left
                   edited = true;
                   editData.currSceneGameObjectInEdit.posX-=1;
                   break;
               case 39: // right
                   edited = true;
                   editData.currSceneGameObjectInEdit.posX+=1;
                   break;
           }
           if (edited) {
               clearTimeout(tid);
               tid = setTimeout(function(){
                   resourceDao.createOrEditObjectInResource(
                       editData.currLayerInEdit.type,
                       editData.currLayerInEdit.protoId,
                       'gameObjectProps',
                       {
                            posX:editData.currSceneGameObjectInEdit.posX,
                            posY:editData.currSceneGameObjectInEdit.posY,
                            id:editData.currSceneGameObjectInEdit.id
                       }
                   );
               },200);
           }
        };

        var _addOrEditGameObject = function(obj,x,y,idKey,idVal){

            var editDataObj = obj.toJSON();
            delete editDataObj.id;
            delete editDataObj.protoId;
            editDataObj.posX = x;
            editDataObj.posY = y;
            editDataObj[idKey]=idVal;

            var needNewName = false;
            if (!editDataObj.name) {
                editDataObj.name = editDataObj.subType +
                    (++ve.models[ve.utils.capitalize(editDataObj.subType)]._cnt);
                needNewName = true;
            }

            resourceDao.createOrEditObjectInResource(
                editData.currLayerInEdit.type,
                editData.currLayerInEdit.protoId,
                'gameObjectProps',editDataObj,
                function(resp){
                    if (resp.type=='create') {
                        var newGameObj = obj.clone(ve.models.GameObject);
                        newGameObj.posX = x;
                        newGameObj.posY = y;
                        newGameObj.protoId = newGameObj.id;
                        newGameObj.id = resp.r.id;
                        editData.currLayerInEdit._gameObjects.add(newGameObj);
                        editData.currSceneGameObjectInEdit = newGameObj;
                        if (needNewName) {
                            newGameObj.name = editDataObj.name;
                        }
                    } else {
                        obj.fromJSON({posX:x,posY:y});
                        editData.currSceneGameObjectInEdit = obj;
                    }
                });
        };


        s.onGameObjectDropped = function(obj,draggable,e) {
            switch (draggable) {
                case 'gameObjectFromLeftPanel':
                    _addOrEditGameObject(obj, e.x, e.y,'protoId',obj.id);
                    break;
                case 'gameObjectFromSelf':
                    _addOrEditGameObject(obj, e.x, e.y,'id',obj.id);
                    break;
                default:
                    console.log('not supported',obj,draggable);
            }
        };

        s.onTextFieldChanged = function(tfObj){

            tfObj.setText(tfObj.text);tfObj._edit=false;

            resourceDao.createOrEditObjectInResource(
                editData.currLayerInEdit.type,
                editData.currLayerInEdit.protoId,
                'gameObjectProps',
                tfObj.toJSON());
        };

        s.addGameObjectFromCtxMenu = function(obj,x,y){
            _addOrEditGameObject(obj, x, y,'protoId',obj.id);
            uiHelper.closeContextMenu();
        };


        s.editGameObjectFromRightMenu = function(obj){
            var fnt = ve_local.bundle.fontList.find({id:obj.fontId});
            s.editData.currSceneGameObjectInEdit._font = fnt;
            s.editData.currSceneGameObjectInEdit.fontId = fnt.id;
            obj.setText(obj.text);
            resourceDao.createOrEditObjectInResource(
                editData.currLayerInEdit.type,
                editData.currLayerInEdit.protoId,
                'gameObjectProps',
                obj.toJSON()
            );
        };

        (function(){
            var dialogState = uiHelper.getDialogState();
            if (dialogState.opName=='create') {
                editData.currSceneInEdit = new ve.models.Scene({});
            } else if (dialogState.opName=='edit'){
                editData.currSceneInEdit = dialogState.opObject.clone(ve.models.Scene);
            }
            uiHelper.opName = null;

        })();

    });


window.app.
    controller('soundCtrl', function (
        $scope,
        $http,
        $sce,
        editData,
        resourceDao,
        uiHelper,
        i18n,
        utils
    ) {

        var s = $scope;
        s.editData = editData;
        s.uiHelper = uiHelper;
        s.i18n = i18n.getAll();
        s.utils = utils;
        s.resourceDao = resourceDao;

        s.onSoundUpload = function(file,src){
            s.soundUrl = $sce.trustAsResourceUrl(src);
            s.editData.currSoundInEdit._file = file;
        };

        s.createOrEditSound = function(snd){
            resourceDao.createOrEditResource(
                s.editData.currSoundInEdit,
                ve.models.Sound,
                ve_local.bundle.soundList
            );
        };

        // todo project path
        (function(){
            var dialogState = uiHelper.getDialogState();
            if (dialogState.opName=='create') {
                editData.currSoundInEdit = new ve.models.Sound({});
            } else if (dialogState.opName=='edit'){
                editData.currSoundInEdit = dialogState.opObject.clone();
            }


            if (s.editData.currSoundInEdit) {
                s.soundUrl =  'project/' + s.editData.currSoundInEdit.resourcePath;
            }

        })();

    });
window.app.
    controller('spriteSheetCtrl', function (
        $scope,
        $http,
        $sce,
        editData,
        uiHelper,
        i18n,
        utils,
        resourceDao
    ) {
        var s = $scope;
        s.editData = editData;
        s.uiHelper = uiHelper;
        s.i18n = i18n.getAll();
        s.utils = utils;
        s.resourceDao = resourceDao;

        s.onSpriteSheetUpload = function(file,src) {
            s.editData.currSpriteSheetInEdit._file = file;
            s.editData.currSpriteSheetInEdit.resourcePath = src;
            var fr = new FileReader();
            fr.onload = function() { // file is loaded
                var img = new Image;
                img.onload = function() {
                    s.editData.currSpriteSheetInEdit.width = img.width;
                    s.editData.currSpriteSheetInEdit.height = img.height;
                    s.spriteSheetUrl = fr.result;
                    s.$apply();
                };
                img.src = fr.result;
            };
            fr.readAsDataURL(file);
        };

        var updateObjectSpriteSheets = function(){
            var _setSpriteSheet = function(go){
                if (go.spriteSheetId) {
                    var sprSheet = ve_local.bundle.spriteSheetList.find({id: go.spriteSheetId});
                    go.setSpriteSheet(sprSheet);
                }
            };
            utils.eachObjectOnScene(function(go){
                _setSpriteSheet(go);
            });
            ve_local.bundle.gameObjectList.forEach(function(go){
                _setSpriteSheet(go);
            });
        };

        s.createOrEditSpriteSheet = function(){
            resourceDao.createOrEditResource(
                s.editData.currSpriteSheetInEdit,
                ve.models.SpriteSheet,
                ve_local.bundle.spriteSheetList,
                function(res){
                    if (res.type=='edit') {
                        updateObjectSpriteSheets();
                    }
                }
            );
        };

        (function() {
            var dialogState = uiHelper.getDialogState();
            if (dialogState.opName=='create') {
                editData.currSpriteSheetInEdit = new ve.models.SpriteSheet({});
            } else if (dialogState.opName=='edit'){
                editData.currSpriteSheetInEdit = dialogState.opObject.clone();
                editData.currSpriteSheetInEdit.calcFrameSize();
                // todo project path
                s.spriteSheetUrl = 'project/'+editData.currSpriteSheetInEdit.resourcePath;
            }
        })();


    });

window.app.
    controller('stubCtrl', function (
        $scope,
        $http,
        $sce,
        editData,
        resourceDao,
        uiHelper,
        i18n,
        utils) {

        var s = $scope;
        s.editData = editData;
        s.uiHelper = uiHelper;
        s.i18n = i18n.getAll();
        s.utils = utils;
        s.resourceDao = resourceDao;

        (function(){

            if (uiHelper.opName=='create') {
                editData.currSoundInEdit = new ve.models.Sound({});
            } else if (uiHelper.opName=='edit'){
                editData.currSoundInEdit = uiHelper.opObject.clone();
            }
            uiHelper.opName = null;

        })();

    });

window.app.
    controller('topPanelCtrl', function ($scope, $http, $sce, editData, uiHelper, i18n, utils) {
        var s = $scope;
        s.editData = editData;
        s.uiHelper = uiHelper;
        s.i18n = i18n.getAll();
        s.utils = utils;

        var w;


        // todo project name
        s.run = function(){
            $http({
                url: utils.generateBuildUrl({debug:1}),
                method: "GET"
            }).
            success(function (resp) {
                if (!w || w.closed) {
                    w = window.open('/project/out','','');
                }
                else {
                    w.location.reload();
                }
                w && w.focus();
            });
        };

        s.debug = function(){
            $http({
                url: utils.generateBuildUrl({debug:1}),
                method: "GET"
            }).
            success(function (resp) {
                    s.uiHelper.window = 'debugRunWindow';
                editData.debugFrameUrl = '/project/out';
            });
        };

        s.stop = function(){
            s.uiHelper.window = 'sceneWindow';
            editData.debugFrameUrl = $sce.trustAsUrl('/about:blank');
        };

        s.showBuildDialog = function() {
            uiHelper.showDialog('buildDialog');
        };


    });

app.directive('appContextMenu', function(uiHelper) {
    return {
        restrict: 'A',
        replace: false,
        link: function (scope, element, attrs) {
            var tmplId = attrs.appContextMenu;
            var model = scope.$eval(attrs.ngModel);
            element.bind('contextmenu1', function (e) {
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


app.factory('appDraggableUtil',function(){
    return {
        lastObject:null,
        lastDraggable:null,
        clientX:0,
        clientY:0,
        offsetX:0,
        offsetY:0
    }
})
.directive('appDraggable', function(appDraggableUtil) {
    return {
        require: 'ngModel',
        restrict: 'A',
        replace: false,
        scope: {
            ngModel : '='
        },
        link: function (scope, element, attrs) {
            element.attr('draggable','true');
            var model = scope.ngModel;
            var emit = attrs.appDraggable;
            element.bind('dragstart', function (e) {
                e.dataTransfer.setData('text/plain', emit); //cannot be empty string
                e.dataTransfer.effectAllowed='move';
                appDraggableUtil.lastObject = model;
                appDraggableUtil.lastDraggable = emit;
                appDraggableUtil.offsetX = e.offsetX;
                appDraggableUtil.offsetY = e.offsetY;
            });
        }
    };
})
.directive('appDroppable', function($parse,appDraggableUtil) {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {

            var canAccept = attrs.appDroppable;

            var isAcceptable = function(){
                var accepted = appDraggableUtil.lastDraggable;
                return canAccept.indexOf(accepted)>-1;
            };

            element.bind('dragover', function (e) {
                if (isAcceptable(e)) {
                    element.addClass('droppable');
                }
                e.preventDefault();
            });
            element.bind('dragenter', function (e) {
                e.preventDefault();
                element.removeClass('enter');
            });
            element.bind('dragleave', function (e) {
                e.preventDefault();
                element.removeClass('droppable');
            });
            element.bind('dragover',function(e){
                e.preventDefault();
            });
            element.bind('drop', function (e) {
                e.preventDefault();
                element.removeClass('droppable');
                if (!isAcceptable()) return;
                var model = appDraggableUtil.lastObject;
                var fn = $parse(attrs.appOnDropped);
                if (!fn) return;

                var elementRect = element[0].getBoundingClientRect();
                var realCoordX = e.x - elementRect.left;
                var realCoordY = e.y - elementRect.top;

                var evt = {
                    x: realCoordX - appDraggableUtil.offsetX,
                    y: realCoordY - appDraggableUtil.offsetY
                };

                scope.$apply(function () {
                    fn(scope, {$object:model,$draggable:appDraggableUtil.lastDraggable,$event:evt});
                    appDraggableUtil.lastObject = null;
                    appDraggableUtil.lastDraggable = null;
                });
            });
        }
    };
});

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


angular.forEach(['x', 'y', 'width', 'height','transform', 'd'], function(name) {
    var ngName = 'app' + name[0].toUpperCase() + name.slice(1);
    app.directive(ngName, function() {
        return function(scope, element, attrs) {
            attrs.$observe(ngName, function(value) {
                attrs.$set(name, value);
            })
        };
    });
});

app.directive('appInputAngle', function($parse) {
    return {
        restrict: 'E',
        replace: true,
        require: 'ngModel',
        transclude: true,
        scope: {
            ngModel : '='
        },
        templateUrl:'partials/misc/appInputAngle.html',
        link: function (scope, element, attrs) {
            var model = scope.ngModel;
            var field = attrs.appField;
            var angle = model[field];
            var calcAngleInDeg = function(){
                scope.angleInDeg = angle * 180 / Math.PI;
                model[field] = angle;
            };
            calcAngleInDeg();

            var calcAngleFromEvent = function(e){
                var rect = element[0].getBoundingClientRect();
                var x = e.clientX - rect.left, y = e.clientY - rect.top;
                angle = Math.atan2((y -15),(x - 15));
            };

            var mouseDown = false;

            element.bind('click', function (e) {
                calcAngleFromEvent(e);
                calcAngleInDeg();
                scope.$apply();
            });
            element.bind('mousedown',function(){
                mouseDown = true;
            });
            element.bind('mouseup',function(){
                mouseDown = false;
            });
            element.bind('mouseleave',function(){
                mouseDown = false;
            });
            element.bind('mousemove', function (e) {
                if (!mouseDown) return;
                calcAngleFromEvent(e);
                calcAngleInDeg();
                scope.$apply();
            });
        }
    };
});


app.directive('appKeyPress', function($parse) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            var fn = $parse(attrs.appKeyPress);
            if (!fn) return;
            window.addEventListener('keydown',function(e){
                scope.$apply(function () {
                    fn(scope, {$event:e});
                });
            });
        }
    };
});

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

app.directive('appValidator', function($parse) {
    return {
        require: 'ngModel',
        restrict: 'A',
        link: function(scope, element, attrs, ngModelController) {
            scope.$watch(attrs.ngModel, function(value) {
                var booleanResult = $parse(attrs.appValidator)(scope);
                ngModelController.$setValidity('expression', booleanResult);
            });
        }
    };
});

window.app.

    directive('dynamicCtrl', ['$compile', '$parse',function($compile, $parse) {
        return {
            restrict: 'A',
            terminal: true,
            priority: 100000,
            link: function(scope, elem) {
                var name = $parse(elem.attr('dynamic-ctrl'))(scope);
                elem.removeAttr('dynamic-ctrl');
                elem.attr('ng-controller', name);
                $compile(elem)(scope);
            }
        };
    }]);
window.app.

service('chrome',function(){
    var events = {};
    window.addEventListener('message',function(resp){
        var data = resp.data && resp.data.response;
        if (!data) return;
        var id = resp.data.eventUUID;
        if (events[id]) {
            var fn = events[id];
            delete events[id];
            fn && data && fn(data);
        }
    });
    this.requestToApi = function(params,callBack) {
        var eventUUID = (~~Math.random()*100)+new Date().getTime();
        events[eventUUID] = callBack;
        params.eventUUID = eventUUID;
        window.top.postMessage(params,'*');
    };
    return this;
});
'use strict';

window.app

    .factory('editData', function ($sce) {

        var res = {};
        res.commonBehaviourList = null;
        res.currGameObjectInEdit = null;
        res.currSpriteSheetInEdit = null;
        res.currFrAnimationInEdit = null;
        res.currSceneInEdit = null;
        res.currSceneGameObjectInEdit = null;
        res.currLayerInEdit = null;
        res.currFontInEdit = null;
        res.currCommonBehaviourInEdit = null;
        res.currSoundInEdit = null;
        res.currParticleSystemInEdit = null;

        res.userInterfaceList = new ve.collections.List();

        res.debugFrameUrl = $sce.trustAsUrl('/about:blank');
        res.scriptEditorUrl = '';

        return res;
    })


;
'use strict';

window.app

    .factory('i18n', function () {
        var _i18n = {};

        _i18n.locale = 'en';

        _i18n.bundle = {
            'en': {
                assets:'assets',
                addSpriteSheet:'add sprite sheet',
                loadImage:'load image',
                gameObjects:'game objects',
                gameObject:'gameObject',
                create:'create',
                edit:'edit',
                close:'close',
                name:'name',
                scaleToFullScreen:'scale to full screen',
                spriteSheers:'sprite sheets',
                width:'width',
                height:'height',
                currFrameIndex:'current frame index',
                spriteSheet: 'sprite sheet',
                numOfFramesH: 'num of frames horizontally',
                numOfFramesV: 'num of frames vertically',
                image: 'image',
                frAnimations:'frame animations',
                duration:'duration, msec',
                frames:'frames (i.e 1,2,3)',
                playAnim:'play animation',
                stopAnim:'stop animation',
                saveObjectFirst:'save object first',
                all: 'all',
                game:'game',
                editThisGameObject:'edit this game object',
                deleteThisGameObject:'delete this game object',
                scenes:'scenes',
                scene:'scene',
                run:'run',
                layers: 'layers',
                layer:'layer',
                debug: 'debug',
                stop: 'stop',
                addGameObject:'add game object',
                nothingToAdd:'nothing to add',
                from:'from',
                to:'to',
                fonts:'fonts',
                font:'font',
                text:'text',
                commonBehaviour:'common behaviour',
                groupName:'group name',
                selectFont:'select font',
                fontSize:'font size',
                fontColor:'font color',
                userInterface:'user interface',
                textField:'text field',
                noDataToEdit:'no data to edit provided',
                rigid:'rigid',
                sounds:'sounds',
                play:'play',
                loadSound:'load sound',
                build:'build',
                particleSystems:'particle systems',
                particleSystem:'particle system',
                preview:'preview',
                i18n:'build'
            }
        };

        _i18n.setLocate = function(_locale){
            _i18n.locale = _locale;
        };

        _i18n.get = function(key){
            return _i18n.bundle[_i18n.locale][key];
        };

        _i18n.getAll = function(){
            return _i18n.bundle[_i18n.locale];
        };
        return _i18n;
    });





window.app

    .factory('messageDigest',function(resourceDao,utils){

        //window.addEventListener('message',function(e){
        //    console.log('accepted message',e);
        //});

        var respondToTarget = function(target,data){
            target && target.postMessage(data,'*');
        };

        window.addEventListener('message',function(m){
            if (!(m.data && m.data.command)) return;
            switch (m.data.command) {
                case 'getCode':
                    resourceDao.readFile(m.data.name+'.js', m.data.path,function(resp){
                        respondToTarget(
                            document.getElementById('scriptEditor').contentWindow,
                            {
                                command:'setCode',
                                completer:utils.createAceCompleter(),
                                code:resp
                            }
                        );
                    });
                    break;
                case 'saveCode':
                    resourceDao.createFile(m.data.name+'.js', m.data.path, m.data.code);
            }
        });
        window.addEventListener('resize',function(){
            var fr = document.getElementById('scriptEditor');
            if (!fr) return;
            var wnd = fr.contentWindow;
            respondToTarget(wnd,{command:'resizeWindow',height:fr.getBoundingClientRect().height});
        });
        return this;
    })




;

app


    .factory('resourceDao',function(
        $http,
        editData,
        uiHelper
    ){
        var self = this;
        var loadResources = function(){
            return new Promise(function(resolve){
                $http({
                    url: '/resource/getAll',
                    method: "POST"
                }).
                success(function (response) {
                    ve_local.bundle = new ve_local.Bundle(response);
                    ve_local.bundle.prepare();
                    Object.keys(ve_local.bundle).forEach(function(key){
                        if (ve_local.bundle[key] && ve_local.bundle[key].call) return;
                        editData[key] = ve_local.bundle[key];
                    });
                    editData.gameProps = ve_local.bundle.gameProps;
                    editData.commonBehaviourList = new ve.collections.List();
                    response.commonBehaviour.forEach(function(cb){
                        editData.commonBehaviourList.add(new ve.models.CommonBehaviour(cb));
                    });
                    editData.userInterfaceList.add(new ve.models.TextField({protoId:'0_0_1'}));
                    resolve();
                });
            });
        };
        this.createOrEditResource = function(currResourceInEdit,ResourceClass,resourceList,callBack, preserveDialog){
            var formData = new FormData();
            formData.append('file',currResourceInEdit._file);
            var model = {};
            currResourceInEdit.toJSON_Array().forEach(function(item){
                model[item.key] = item.value;
            });
            formData.append('model',JSON.stringify(model));
            var op = currResourceInEdit.id?'edit':'create';
            $http({
                url: '/resource/'+op,
                method: "POST",
                data: formData,
                headers: {'Content-Type': undefined}
            }).
            success(function (item) {
                if (!(ResourceClass && resourceList)) {
                    uiHelper.closeDialog();
                    return;
                }
                if (op=='create') {
                    var r = new ResourceClass(item);
                    resourceList.add(r);
                    callBack && callBack({type:'create',r:r});
                } else {
                    var index = resourceList.indexOf({id:item.id});
                    resourceList.rs[index] = new ResourceClass(item);
                    callBack && callBack({type:'edit',r:resourceList.rs[index]});
                }
                !preserveDialog && uiHelper.closeDialog();
            });
        };
        this.createOrEditResourceSimple = function(objResource){
            this.createOrEditResource(objResource,objResource.constructor,ve_local.bundle[objResource.type+'List']);
        };
        this.deleteObjectFromResource = function(resourceType,resourceId,objectType,objectId,callback){
            $http({
                url: '/deleteObjectFromResource',
                method: "POST",
                headers: {'Content-Type': 'application/json'},
                data: {resourceType:resourceType,resourceId:resourceId,objectType:objectType,objectId:objectId}
            }).
            success(function (res) {
                    callback && callback();
            });
        };
        this.deleteResource = function(id,type,callBack){
            $http({
                url: '/resource/delete',
                method: "POST",
                data: {id:id,type:type}
            }).
            success(function (res) {
                editData[type+'List'].remove({id: id});
                callBack && callBack();
            });
        };
        this.saveGameProps = function(gameProps){
            var formData = new FormData();
            formData.append('model',JSON.stringify(gameProps));
            $http({
                url: '/gameProps/save',
                method: "POST",
                data: formData,
                headers: {'Content-Type': undefined}
            })
        };
        this.post = function(url,data,callBack){
            $http({
                url: '/gameProps/save',
                method: "POST",
                data: data,
                headers: {'Content-Type': undefined}
            }).
                success(function (resp) {
                    callBack && callBack(resp);
                });
        };
        this.postMultiPart = function(url,formData,callBack){
            $http({
                url: url,
                method: "POST",
                data: formData,
                headers: {'Content-Type': undefined}
            }).
            success(function (resp) {
                callBack && callBack(resp);
            });
        };
        this.createOrEditObjectInResource = function(resourceType,resourceId,objectType,object,callback){
            var op = object.id?'edit':'create';
            $http({
                url: '/createOrEditObjectInResource',
                method: "POST",
                data: {
                    model:JSON.stringify(object),
                    resourceId:resourceId,
                    resourceType:resourceType,
                    objectType:objectType
                },
                headers: {'Content-Type': 'application/json'}
            }).
            success(function (resp) {
                callback && callback({type:op,r:resp});
            });
        };
        this.createOrEditLayer = function(l){
            self.createOrEditResource(l,ve.models.Layer,ve_local.bundle.layerList,
                function(item){
                    if (item.type=='create') {
                        self.createOrEditObjectInResource(
                            editData.currSceneInEdit.type,
                            editData.currSceneInEdit.id,
                            'layerProps',
                            {
                                type:'layer',
                                protoId:item.r.id
                            },
                            function(resp){
                                var l = editData.currLayerInEdit.clone(ve.models.Layer);
                                l.id = resp.r.id;
                                l.protoId = item.r.id;
                                l._scene = editData.currSceneInEdit;
                                editData.currSceneInEdit._layers.add(l);
                            }
                        );
                    }
                });
        };
        this.createFile = function(name,path,content,callback){
            $http({
                url: '/createFile',
                method: "POST",
                data: {
                    name:name,
                    path:path,
                    content:content
                },
                headers: {'Content-Type': 'application/json'}
            }).
                success(function (resp) {
                    callback && callback(resp);
                });
        };
        this.readFile = function(name,path,callback){
            $http({
                url: '/readFile',
                method: "POST",
                data: {
                    name:name,
                    path:path
                },
                headers: {'Content-Type': 'application/json'}
            }).
                success(function (resp) {
                    callback && callback(resp);
                });
        };


        (function(){

            Promise.
                resolve().
                then(function(){
                    return loadResources();
                }).
                then(function(){
                    if (!ve_local.bundle.sceneList.isEmpty()) editData.currSceneInEdit = ve_local.bundle.sceneList.get(0);
                    if (editData.currSceneInEdit) {
                        if (editData.currSceneInEdit._layers.size()) {
                            editData.currLayerInEdit = editData.currSceneInEdit._layers.get(0);
                        }
                    }
                    angular.element(document.body).scope().$apply();
                });

        })();


        return this;
    });

window.app

    .factory('uiHelper', function () {
        var _;
        return _ = {
            _dialogsStack: [],

            window:'sceneWindow',
            _dialogName:null,
            ctxMenu:{
                name:null,
                x:null,
                y:null
            },
            toggle: function (currentVal, defaultVal) {
                return currentVal == defaultVal ? 0 : defaultVal;
            },
            showDialog: function(name,opName,opObject){
                _.dialogName = name;
                _._dialogsStack.push({
                    name:name,
                    opName:opName,
                    opObject:opObject
                });
                _.ctxMenu.name = null;
            },
            getDialogState: function(){
                return _._dialogsStack[_._dialogsStack.length-1]||{};
            },
            closeDialog: function(){
                _._dialogsStack.pop();
                _.dialogName =
                    _._dialogsStack[_._dialogsStack.length-1] &&
                    _._dialogsStack[_._dialogsStack.length-1].name;
            },
            showContextMenu: function(name,x,y,elX,elY,model){
                _.ctxMenu.name = name;
                _.ctxMenu.x = x;
                _.ctxMenu.y = y;
                _.ctxMenu.elX = elX;
                _.ctxMenu.elY = elY;
                _.ctxMenu.model = model
            },
            closeContextMenu: function(){
                _.ctxMenu.name = '';
            }
        }
    });


window.app

    .factory('utils',function(editData, $http, uiHelper){

        this.recalcGameObjectSize = function(gameObject){
            var spriteSheet = editData.spriteSheetList.find({id: gameObject.spriteSheetId});
            if (!spriteSheet) return;
            spriteSheet.calcFrameSize();
            gameObject.width = ~~(spriteSheet.width / spriteSheet.numOfFramesH);
            gameObject.height = ~~(spriteSheet.height / spriteSheet.numOfFramesV);
            gameObject._spriteSheet = spriteSheet;
        };
        this.getGameObjectCss = function(gameObj){
            if (!gameObj) return {};
            return {
                width:                 gameObj.width+'px',
                height:                gameObj.height+'px',
                // todo project name!
                backgroundImage:      gameObj._spriteSheet && 'url('+'project/'+gameObj._spriteSheet.resourcePath+')',
                backgroundPositionY: -gameObj._sprPosY+'px',
                backgroundPositionX: -gameObj._sprPosX+'px',
                backgroundRepeat:     'no-repeat'
            }
        };
        this.merge = function(a,b){
            var res = Object.create(a);
            Object.keys(b).forEach(function(key){
                res[key] = b[key];
            });
            return res;
        };

        this.size = function(obj) {
            return Object.keys(obj).length;
        };

        this.getArray = function(num) {
            if (!num) return [];
            var res = [];
            for (var i=0;i<num;i++) {
                res.push(i);
            }
            return res;
        };

        this.toArray = function(str){
            var res = [];
            for (var i= 0,max=str.length;i<max;i++) {
                res.push({char:str[i]});
            }
            return res;
        };

        this.removeFromArray = function(arr,filter) {
            var indexOf = function(arr,filter){
                var i = 0;
                var success = false;
                arr.some(function(item){
                    var isCandidate = true;
                    Object.keys(filter).some(function(conditionKey){
                        if (filter[conditionKey]!=item[conditionKey]) {
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
            var index = indexOf(arr,filter);
            if (index>-1) arr.splice(index,1);
        };


        this.dataURItoBlob =function (dataURI) {
            // convert base64/URLEncoded data component to raw binary data held in a string
            var byteString;
            if (dataURI.split(',')[0].indexOf('base64') >= 0)
                byteString = atob(dataURI.split(',')[1]);
            else
                byteString = unescape(dataURI.split(',')[1]);

            // separate out the mime component
            var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

            // write the bytes of the string to a typed array
            var ia = new Uint8Array(byteString.length);
            for (var i = 0; i < byteString.length; i++) {
                ia[i] = byteString.charCodeAt(i);
            }

            return new Blob([ia], {type:mimeString});
        };

        this.capitalize = function(s){
            return s.substr(0,1).toUpperCase() +
                s.substr(1);
        };

        this.deCapitalize = function(s){
            return s.substr(0,1).toLowerCase() +
                s.substr(1);
        };

        this.eachObjectOnScene = function(callBack){
            editData.sceneList.forEach(function(scene){
                scene._layers.forEach(function(layer){
                    layer._gameObjects.forEach(function(go){
                        callBack(go);
                    });
                });
            });
        };

        this.createAceCompleter = function(){
            var res = [];
            var go = new ve.models.GameObject();
            go.toJSON_Array().forEach(function(item){
                res.push({
                    name:item.key,
                    value:item.key,
                    score:1,
                    meta:'gameObject property'
                });
            });
            return res;
        };

        this.generateBuildUrl = function(opts) {
            var url = '/generate?r='+Math.random();
            ['debug','embedResources','embedScript'].forEach(function(key){
                if (opts[key]) url+='&'+key+'=1';
            });
            return url;
        };

        return this;
    })








;


app.filter('toFixed', function() {
    return function(val){
        return (+val).toFixed(3);
    }
});
'use strict';

$(function () {
    //document.body.oncontextmenu = function(){return false};
    $(document).on('click','button[data-action="upload"]',function(){
        var input = $(this).next('input[type="file"]');
        input.click();
    });
});


window.app.
    controller('mainCtrl', function (
        $scope,
        $http,
        $sce,
        editData,
        uiHelper,
        utils,
        i18n) {

        var s = $scope;
        s.editData = editData;
        s.uiHelper = uiHelper;
        s.i18n = i18n.getAll();
        s.utils = utils;

        s.showDialog = function(objectName,opName,opObject){
            uiHelper.showDialog('frmCreate'+utils.capitalize(objectName),opName,opObject);
        };

        s.globalPage = 'projectExplorer';

    });


app.

    config(function($routeProvider){
        $routeProvider.
            when('/editor',{
                templateUrl:'editor.html'
            }).
            when('/explorer',{
                templateUrl:'explorer.html'
            }).
            otherwise({redirectTo:'/explorer'});
    });