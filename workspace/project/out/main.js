
var ve = {};
var ve_local = {};
ve.commonBehaviour = {};
function noop() {};
ve_local.RESOURCE_NAMES = ["sound","spriteSheet","frameAnimation","font","gameObject","layer","scene","particleSystem"];
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
                out[i] = arguments.callee(obj[i]);
            }
            return out;
        }
        if (typeof obj === 'object') {
            var out = {}, i;
            for ( i in obj ) {
                out[i] = arguments.callee(obj[i]);
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
        render: function(){

        }
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
            this.spriteSheetId && (this._spriteSheet = ve_local.bundle.spriteSheetList.find({id: this.spriteSheetId}));
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
        },
        stopFrAnimations: function(){
            this._currFrameAnimation && this._currFrameAnimation.stop();
        },
        render: function(){
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
        render: function(){
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
                if (time - p._timeCreated> p.liveTime) {
                    self._particles.splice(self._particles.indexOf(p),1);
                }
                p.update(time,delta);
                p.__updateIndividualBehaviour__(delta); // todo move to "update" fn?
            });
        },
        render: function(){
            this._particles.forEach(function(p){
                p.render();
            });
        }
    });


    ve.models = models;

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
            var script = ve_local.scripts[model.type] && ve_local.scripts[model.type][model.name+'.js'];
            if (script) {
                var BehaviourClass = script();
                model._behaviour = new BehaviourClass();
                model._behaviour.toJSON_Array().forEach(function(itm){
                    model[itm.key]=itm.value;
                });
                model._behaviour.onCreate.apply(model);
                model.__updateIndividualBehaviour__ = function(deltaTime){
                    model._behaviour.onUpdate.apply(model,[deltaTime]);
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

ve_local.Renderer = function(){

    var canvas;
    var ctx;
    var scene;
    var self = this;
    var currTime = 0;
    var lastTime = 0;
    var reqAnimFrame = window.requestAnimationFrame||window.webkitRequestAnimationFrame||function(f){setTimeout(f,17)};
    var gameProps;

    var setFullScreen = function(){
        var w = window.innerWidth;
        var h = window.innerHeight;
        canvas.width = w;
        canvas.height = h;
        canvas.style.width = w + 'px';
        canvas.style.height = h + 'px';
        gameProps.globalScale.x = w / gameProps.width;
        gameProps.globalScale.y = h / gameProps.height;
    };

    var setNormalScreen = function(){
        var w = gameProps.width;
        var h = gameProps.height;
        canvas.width = w;
        canvas.height = h;
        gameProps.globalScale.x = 1;
        gameProps.globalScale.y = 1;
    };

    var listenResize = function(){
        window.addEventListener('resize',function(){
            setFullScreen();
            rescale(gameProps.globalScale.x,gameProps.globalScale.y);
        });
    };

    var rescale = function(scaleX,scaleY){
        ctx.scale(scaleX,scaleY);
    };

    this.getContext = function(){
        return ctx;
    };

    this.getCanvas = function(){
        return canvas;
    };

    this.init = function(){
        canvas = document.querySelector('canvas');
        gameProps = ve_local.bundle.gameProps;
        gameProps.globalScale = {};
        if (!canvas) {
            canvas = document.createElement('canvas');
            if (gameProps.scaleToFullScreen) {
                setFullScreen();
                listenResize()
            } else {
                setNormalScreen();
            }
            document.body.appendChild(canvas);
        }
        //ctx = new ve_local.CanvasContext();
        ctx = new ve_local.GlContext();
        ctx.init(canvas);
        ve_local.rendererContext = ctx;
        rescale(gameProps.globalScale.x,gameProps.globalScale.y);

        drawScene();

    };

    this.getCanvas = function(){
        return canvas;
    };

    // todo remove
    this.drawImage = function(img,fromX,fromY,fromW,fromH,toX,toY,toW,toH){
        ctx.drawImage(
            img,
            fromX,
            fromY,
            fromW,
            fromH,
            toX,
            toY,
            toW,
            toH
        );
    };

    this.cancel = function(){
        cancelAnimationFrame(drawScene);
    };

    var drawScene = function(){
        reqAnimFrame(drawScene);

        if (!scene) return;

        lastTime = currTime;
        currTime = Date.now();
        var deltaTime = lastTime ? currTime - lastTime : 0;

        ctx.clear(gameProps.width,gameProps.height);
        scene._layers.forEach(function(layer){
            layer._gameObjects.forEach(function(obj){
                if (!obj) return;
                obj.__updateCommonBehaviour__();
                obj.__updateIndividualBehaviour__(deltaTime);
                obj.update(currTime,deltaTime);
                obj.render(self);
            });
        });
        scene.__updateIndividualBehaviour__(deltaTime);
        ve_local.bundle.particleSystemList.forEach(function(p){
            p.update(currTime,deltaTime);
            p.render();
        });

        ve.keyboard._onNextTick();
    };
    this.setScene = function(_scene){
        scene = _scene;
        ve_local.collider.setUp();
    };

};

(function(){

    ve_local.CanvasContext = function(){

        var ctx;

        this.init = function(canvas) {
            ctx = canvas.getContext('2d');
        };

        this.scale = function(scaleX,scaleY){
            ctx.scale(scaleX,scaleY);
        };

        this.drawImage = function(
            textureInfo,
            fromX,
            fromY,
            fromW,
            fromH,
            toX,
            toY,
            toW,
            toH
        ) {

            ctx.drawImage(
                textureInfo.image,
                fromX,
                fromY,
                fromW,
                fromH,
                toX,
                toY,
                toW,
                toH
            );

        };

        this.loadTextureInfo = function(url,callBack){

            var img = new Image(url);
            img.onload = function(){
                var textureInfo = {
                    image:img
                };
                callBack(textureInfo);
            };
            img.src = url;

        };

        this.clear = function(w,h){

            ctx.fillStyle="#FFFFFF";
            ctx.fillRect(
                0,
                0,
                w,
                h);

        }

    }

})();

(function(){

    var GlUtils = {};


    (function(){

        var defaultShaderType = [
            "VERTEX_SHADER",
            "FRAGMENT_SHADER"
        ];

        function error(msg) {
            console.error(msg);
        }

        function loadShader(gl, shaderSource, shaderType) {
            // Create the shader object
            var shader = gl.createShader(shaderType);

            // Load the shader source
            gl.shaderSource(shader, shaderSource);

            // Compile the shader
            gl.compileShader(shader);

            // Check the compile status
            var compiled = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
            if (!compiled) {
                // Something went wrong during compilation; get the error
                var lastError = gl.getShaderInfoLog(shader);
                error("*** Error compiling shader '" + shader + "':" + lastError);
                gl.deleteShader(shader);
                return null;
            }

            return shader;
        }


        function createProgram(gl, shaders) {
            var program = gl.createProgram();
            shaders.forEach(function(shader) {
                gl.attachShader(program, shader);
            });
            gl.linkProgram(program);

            // Check the link status
            var linked = gl.getProgramParameter(program, gl.LINK_STATUS);
            if (!linked) {
                // something went wrong with the link
                var lastError = gl.getProgramInfoLog(program);
                error("Error in program linking:" + lastError);
                gl.deleteProgram(program);
                return null;
            }
            return program;
        }

        GlUtils.createProgramFromSources = function(gl, shaderSources) {
            var shaders = [];
            for (var ii = 0; ii < shaderSources.length; ++ii) {
                shaders.push(loadShader(
                    gl, shaderSources[ii], gl[defaultShaderType[ii]]));
            }
            return createProgram(gl, shaders);
        };

        GlUtils.make2DProjection = function(width, height, depth) {
            // Note: This matrix flips the Y axis so 0 is at the top.
            return [
                2 / width, 0, 0, 0,
                0, -2 / height, 0, 0,
                0, 0, 2 / depth, 0,
                -1, 1, 0, 1
            ];
        };

        GlUtils.makeTranslation = function(tx, ty, tz) {
            return [
                1,  0,  0,  0,
                0,  1,  0,  0,
                0,  0,  1,  0,
                tx, ty, tz,  1
            ];
        };

        GlUtils.makeXRotation = function(angleInRadians) {
            var c = Math.cos(angleInRadians);
            var s = Math.sin(angleInRadians);

            return [
                1, 0, 0, 0,
                0, c, s, 0,
                0, -s, c, 0,
                0, 0, 0, 1
            ];
        };

        GlUtils.makeYRotation = function(angleInRadians) {
            var c = Math.cos(angleInRadians);
            var s = Math.sin(angleInRadians);

            return [
                c, 0, -s, 0,
                0, 1, 0, 0,
                s, 0, c, 0,
                0, 0, 0, 1
            ];
        };

        GlUtils.makeZRotation = function(angleInRadians) {
            var c = Math.cos(angleInRadians);
            var s = Math.sin(angleInRadians);
            return [
                c, s, 0, 0,
                -s, c, 0, 0,
                0, 0, 1, 0,
                0, 0, 0, 1
            ];
        };

        GlUtils.makeScale = function(sx, sy, sz) {
            return [
                sx, 0,  0,  0,
                0, sy,  0,  0,
                0,  0, sz,  0,
                0,  0,  0,  1
            ];
        };

        GlUtils.matrixMultiply = function(a, b) {
            var a00 = a[0*4+0];
            var a01 = a[0*4+1];
            var a02 = a[0*4+2];
            var a03 = a[0*4+3];
            var a10 = a[1*4+0];
            var a11 = a[1*4+1];
            var a12 = a[1*4+2];
            var a13 = a[1*4+3];
            var a20 = a[2*4+0];
            var a21 = a[2*4+1];
            var a22 = a[2*4+2];
            var a23 = a[2*4+3];
            var a30 = a[3*4+0];
            var a31 = a[3*4+1];
            var a32 = a[3*4+2];
            var a33 = a[3*4+3];
            var b00 = b[0*4+0];
            var b01 = b[0*4+1];
            var b02 = b[0*4+2];
            var b03 = b[0*4+3];
            var b10 = b[1*4+0];
            var b11 = b[1*4+1];
            var b12 = b[1*4+2];
            var b13 = b[1*4+3];
            var b20 = b[2*4+0];
            var b21 = b[2*4+1];
            var b22 = b[2*4+2];
            var b23 = b[2*4+3];
            var b30 = b[3*4+0];
            var b31 = b[3*4+1];
            var b32 = b[3*4+2];
            var b33 = b[3*4+3];
            return [a00 * b00 + a01 * b10 + a02 * b20 + a03 * b30,
                a00 * b01 + a01 * b11 + a02 * b21 + a03 * b31,
                a00 * b02 + a01 * b12 + a02 * b22 + a03 * b32,
                a00 * b03 + a01 * b13 + a02 * b23 + a03 * b33,
                a10 * b00 + a11 * b10 + a12 * b20 + a13 * b30,
                a10 * b01 + a11 * b11 + a12 * b21 + a13 * b31,
                a10 * b02 + a11 * b12 + a12 * b22 + a13 * b32,
                a10 * b03 + a11 * b13 + a12 * b23 + a13 * b33,
                a20 * b00 + a21 * b10 + a22 * b20 + a23 * b30,
                a20 * b01 + a21 * b11 + a22 * b21 + a23 * b31,
                a20 * b02 + a21 * b12 + a22 * b22 + a23 * b32,
                a20 * b03 + a21 * b13 + a22 * b23 + a23 * b33,
                a30 * b00 + a31 * b10 + a32 * b20 + a33 * b30,
                a30 * b01 + a31 * b11 + a32 * b21 + a33 * b31,
                a30 * b02 + a31 * b12 + a32 * b22 + a33 * b32,
                a30 * b03 + a31 * b13 + a32 * b23 + a33 * b33];
        }

    })();


    ve_local.GlContext = function(){

        var gl;
        var mCanvas;
        var mScaleX = 1, mScaleY = 1;
        var matrixLocation;
        var textureMatrixLocation;

        var vShader = '\
            attribute vec4 a_position;\
            attribute vec2 a_texcoord;\
            \
            uniform mat4 u_matrix;\
            uniform mat4 u_textureMatrix;\
            \
            varying vec2 v_texcoord;\
            \
            void main() {\
                gl_Position = u_matrix * a_position;\
                v_texcoord = (u_textureMatrix * vec4(a_texcoord, 0, 1)).xy;\
            }\
            ';

        var fShader = '\
            precision mediump float;\
            \
            varying vec2 v_texcoord;\
            \
            uniform sampler2D texture;\
            \
            void main() {\
                gl_FragColor = texture2D(texture, v_texcoord);\
            }\
            ';

        this.init = function(canvas){

            mCanvas = canvas;
            gl = canvas.getContext("webgl",{ alpha: false });
            var program = GlUtils.createProgramFromSources(gl, [vShader, fShader]);
            gl.useProgram(program);

            // look up where the vertex data needs to go.
            var positionLocation = gl.getAttribLocation(program, "a_position");
            var texcoordLocation = gl.getAttribLocation(program, "a_texcoord");

            // lookup uniforms
            matrixLocation = gl.getUniformLocation(program, "u_matrix");
            textureMatrixLocation = gl.getUniformLocation(program, "u_textureMatrix");

            // Create a buffer.
            var buffer = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
            gl.enableVertexAttribArray(positionLocation);
            gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

            gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
            gl.enable(gl.BLEND);

            // Put a unit quad in the buffer
            var positions = [
                0, 0,
                0, 1,
                1, 0,
                1, 0,
                0, 1,
                1, 1
            ];
            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

            // Create a buffer for texture coords
            buffer = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
            gl.enableVertexAttribArray(texcoordLocation);
            gl.vertexAttribPointer(texcoordLocation, 2, gl.FLOAT, false, 0, 0);

            // Put texcoords in the buffer
            var texcoords = [
                0, 0,
                0, 1,
                1, 0,
                1, 0,
                0, 1,
                1, 1
            ];
            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(texcoords), gl.STATIC_DRAW);

        };

        this.loadTextureInfo = function(url,callBack) {
            var tex = gl.createTexture();
            gl.bindTexture(gl.TEXTURE_2D, tex);
            // Fill the texture with a 1x1 blue pixel.
            gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE,
                new Uint8Array([0, 0, 255, 255]));

            // let's assume all images are not a power of 2
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);

            var textureInfo = {
                width: 1,   // we don't know the size until it loads
                height: 1,
                texture: tex
            };
            var img = new Image();
            img.addEventListener('load', function() {
                textureInfo.width = img.width;
                textureInfo.height = img.height;

                gl.bindTexture(gl.TEXTURE_2D, textureInfo.texture);
                gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img);
                callBack(textureInfo);
            });
            img.src = url;
        };

        this.drawImage = function(
            textureInfo,
            srcX, srcY, srcWidth, srcHeight,
            dstX, dstY, dstWidth, dstHeight) {

            var tex = textureInfo.texture;
            var texWidth = textureInfo.width;
            var texHeight = textureInfo.height;


            if (dstX === undefined) {
                dstX = srcX;
            }
            if (dstY === undefined) {
                dstY = srcY;
            }
            if (srcWidth === undefined) {
                srcWidth = texWidth;
            }
            if (srcHeight === undefined) {
                srcHeight = texHeight;
            }
            if (dstWidth === undefined) {
                dstWidth = srcWidth;
            }
            if (dstHeight === undefined) {
                dstHeight = srcHeight;
            }

            gl.bindTexture(gl.TEXTURE_2D, tex);

            // this matirx will convert from pixels to clip space
            var projectionMatrix = GlUtils.make2DProjection(mCanvas.width, mCanvas.height, 1);

            // this matrix will scale our 1 unit quad
            // from 1 unit to dstWidth, dstHeight units
            var scaleMatrix = GlUtils.makeScale(dstWidth*mScaleX, dstHeight*mScaleY, 1);

            // this matrix will translate our quad to dstX, dstY
            var translationMatrix = GlUtils.makeTranslation(dstX*mScaleX, dstY*mScaleY, 0);

            // multiply them all togehter
            var matrix = GlUtils.matrixMultiply(scaleMatrix, translationMatrix);
            matrix = GlUtils.matrixMultiply(matrix, projectionMatrix);

            // Set the matrix.
            gl.uniformMatrix4fv(matrixLocation, false, matrix);

            // Because texture coordinates go from 0 to 1
            // and because our texture coordinates are already a unit quad
            // we can select an area of the texture by scaling the unit quad
            // down
            var texScaleMatrix = GlUtils.makeScale(srcWidth / texWidth, srcHeight / texHeight, 1);
            var texTranslationMatrix = GlUtils.makeTranslation(srcX / texWidth, srcY / texHeight, 0);

            // multiply them together
            var texMatrix = GlUtils.matrixMultiply(texScaleMatrix, texTranslationMatrix);

            // Set the texture matrix.
            gl.uniformMatrix4fv(textureMatrixLocation, false, texMatrix);

            // draw the quad (2 triangles, 6 vertices)
            gl.drawArrays(gl.TRIANGLES, 0, 6);
        };

        this.clear = function() {
            //gl.colorMask(false, false, false, true);
            gl.clearColor(1, 1, 1, 1);
            gl.clear(gl.COLOR_BUFFER_BIT);
        };

        this.scale = function(scaleX,scaleY){
            mScaleX = scaleX;
            mScaleY = scaleY;
            gl.viewport(0, 0, mCanvas.width, mCanvas.height);
        };

    }


})();

ve_local.SceneManager = function(){

    var self = this;

    this.currScene = null;

    var preloadAndSet = function(scene){
        var q = new ve.utils.Queue();
        q.onResolved = function(){
            ve_local.renderer.setScene(scene);
        };
        var allSprSheets = scene.getAllSpriteSheets();
        ve_local.bundle.particleSystemList.forEach(function(ps){
            allSprSheets.add(ps._gameObject._spriteSheet);
        });
        allSprSheets.asArray().forEach(function(spSheet){
            ve_local.renderer.
                getContext().
                loadTextureInfo('./'+spSheet.resourcePath,function(textureInfo){
                    console.log('loaded texture info',spSheet.resourcePath,textureInfo);
                    spSheet._textureInfo = textureInfo;
                    q.resolveTask();
                });
            q.addTask();
        });
        ve_local.bundle.soundList.forEach(function(snd){
            q.addTask();
            ve_local.sound.loadSound('./'+snd.resourcePath,function(buffer){
                snd._buffer = buffer;
                q.resolveTask();
            });
        });
        q.start();
    };

    this.setScene = function(scene){
        if (!(scene instanceof ve.models.Scene)) throw 'object '+scene+' is not a scene';
        this.currScene = scene;
        preloadAndSet(scene);
    };

    this.setSceneByName = function(sceneName){
        if (!(sceneName && sceneName.substr)) throw 'object '+ sceneName + 'is not a string';
        var scene = ve_local.bundle.sceneList.find({name: sceneName});
        if (!scene) throw 'no scene with name ' + sceneName + ' found';
        self.setScene(scene);
    };

    this.getCurrScene = function(){
        return this.currScene;
    }

};

(function(){

    ve_local.Keyboard = function(){

        var buffer = {};
        var KEY_PRESSED = 1;
        var KEY_JUST_PRESSED = 2;
        var KEY_RELEASED = 0;
        var KEY_JUST_RELEASED = -1;
        var self = this;

        this.KEY_UP = 38;
        this.KEY_DOWN = 40;
        this.KEY_LEFT = 37;
        this.KEY_RIGHT = 39;

        this.isPressed = function(key){
            return buffer[key]>0;
        };

        this.isJustPressed = function(key){
            return buffer[key]==KEY_JUST_PRESSED;
        };

        this.isReleased = function(key) {
            return  buffer[key]<=0 || !buffer[key];
        };

        this.isJustReleased = function(key) {
            return buffer[key] == KEY_JUST_RELEASED;
        };

        this._onNextTick = function(){
            [
                this.KEY_UP,
                this.KEY_DOWN,
                this.KEY_LEFT,
                this.KEY_RIGHT
            ].forEach(function(key){
                    if (buffer[key]==KEY_JUST_PRESSED) buffer[key] = KEY_PRESSED;
                    else if (buffer[key]==KEY_JUST_RELEASED) buffer[key] = KEY_RELEASED;
                });
        };

        window.addEventListener('keydown',function(e){
            var code = e.keyCode;
            switch (code) {
                case self.KEY_UP:
                case self.KEY_DOWN:
                case self.KEY_LEFT:
                case self.KEY_RIGHT:
                    buffer[code] = KEY_PRESSED;
                    break;
            }
        });

        window.addEventListener('keyup',function(e){
            var code = e.keyCode;
            switch (code) {
                case self.KEY_UP:
                case self.KEY_DOWN:
                case self.KEY_LEFT:
                case self.KEY_RIGHT:
                    buffer[code] = KEY_JUST_RELEASED;
                    break;
            }
        });
    };

})();

(function(){

    ve_local.Mouse = function(canvas){

        var self = this;
        self.isMouseDown = false;
        var globalScale = ve_local.bundle.gameProps.globalScale;

        if ('ontouchstart' in window) {
            canvas.ontouchstart = function(e){
                resolveClick(e.touches[0]);
            };
            canvas.ontouchend = canvas.ontouchcancel = function(){
                resolveMouseUp();
            };
            canvas.ontouchmove = function(e){
                resolveMouseMove(e.touches[0]);
            }
        } else {
            canvas.onmousedown = function(e){
                resolveClick(e);
            };
            canvas.onmouseup = function(){
                resolveMouseUp();
            };
            canvas.onmousemove = function(e){
                resolveMouseMove(e);
            }
        }

        var resolveClick = function(e){
            self.isMouseDown = true;
            var scene = ve.sceneManager.getCurrScene();
            if (!scene) return;
            var point = {
                x: e.clientX / globalScale.x,
                y: e.clientY / globalScale.y
            };
            scene._layers.someReversed(function(l){
                var found = false;
                l._gameObjects.someReversed(function(g){
                    if (
                        ve.Math.isPointInRect(point,g.getRect())
                    ) {
                        g.trigger('click',{
                            screenX:point.x,
                            screenY:point.y,
                            objectX:point.x - g.posX,
                            objectY:point.y - g.posY
                        });
                        return found = true;
                    }
                });
                return found;
            })

        };

        var resolveMouseMove = function(e){
            var scene = ve.sceneManager.getCurrScene();
            scene.trigger('mouseMove',{
                screenX: e.clientX / globalScale.x,
                screenY: e.clientY / globalScale.y
            });
        };

        var resolveMouseUp = function(){
            self.isMouseDown = false;
        };

    };

})();

(function(){

    var ns = ve.Math;
    
    ns.Vector2d = (function(){
        return function(_x,_y){

            var x = _x||0;
            var y = _y||0;
            var angle = 0;
            var norm = 0;

            var onXY_Changed = function(){
                angle = x==0?0:Math.atan(y/x);
                norm = Math.sqrt(x*x+y*y);
            };

            var onAngleChanged = function(){
                y = Math.sin(angle)*norm;
                x = Math.cos(angle)*norm;
            };

            var onNormChanged = function(){
                y = Math.sin(angle)*norm;
                x = Math.cos(angle)*norm;
            };

            this.setXY = function(_x,_y){
                x = _x;
                y = _y;
                onXY_Changed();
            };

            this.setX = function(_x){
                x = _x;
                onXY_Changed();
            };

            this.setY = function(_y){
                y = _y;
                onXY_Changed();
            };

            this.setAngle = function(a){
                angle = a;
                onAngleChanged();
            };

            this.setNorm = function(l){ // length
                norm = l;
                onNormChanged();
            };

            this.getXY = function(){
                return {x:x,y:y};
            };

            this.getX = function(){
                return x;
            };

            this.getY = function(){
                return y;
            };

            this.getAngle = function(){
                return angle;
            };

            this.addVector2d = function(v){
                return new ns.Vector2d(x + v.getX(),y + v.getY);
            };

            this.multiplyByScalar = function(sc){
                return new ns.Vector2d(x * sc,y * sc);
            };

            this.dotProduct = function(v){ // inner product, скалярное произведение
                return x* v.getX()+y* v.getY();
            };

            this.getNorm = function(){
                return norm;
            };

            (function(){
                onXY_Changed();
            })();

        };
    })();

})();


(function(){

    var ns = ve.Math; // nameSpace

    ns.Matrix2d = function(arr){

        var val = arr||[[0,0],[0,0]];

        this.identity = function(){
            val = [
                [1,0],
                [0,1]
            ];
        };

        this.addMatrix = function(m2d){
            var arr = [
                [],
                []
            ];
            var valM2d = m2d.getValue();
            arr[0][0] = val[0][0] + valM2d[0][0];
            arr[0][1] = val[0][1] + valM2d[0][1];
            arr[1][0] = val[1][0] + valM2d[1][0];
            arr[1][1] = val[1][1] + valM2d[1][1];
            return arr;
        };

        this.getValue = function(){
            return val;
        };


        this.multiplyToScalar = function(sc){
            var arr = [
                [0,0],
                [0,0]
            ];
            arr[0][0] = val[0][0] * sc;
            arr[0][1] = val[0][1] * sc;
            arr[1][0] = val[1][0] * sc;
            arr[1][1] = val[1][1] * sc;
            return arr;
        };

        this.multiplyToMatrix2d = function(m) {
            //   [ 1 2 ] [ 4 7 ]
            //   [ 3 7 ] [ 5 8 ]
            // =
            //   [ (1)(4)+(2)(5) (1)(7)+(2)(8) ]
            //   [ (3)(4)+(7)(5) (3)(7)+(7)(8) ]
            // =
            //   [ 14 23 ]
            //   [ 47 77 ]

            var arr = [
                [0,0],
                [0,0]
            ];
            var valM2d = m.getValue();
            arr[0][0] = val[0][0] * valM2d[0][0] + val[1][0] * valM2d[0][1];
            arr[0][1] = val[1][0] * valM2d[0][0] + val[1][1] * valM2d[0][1];
            arr[1][0] = val[0][0] * valM2d[1][0] + val[1][0] * valM2d[1][1];
            arr[1][1] = val[0][1] * valM2d[1][0] + val[1][1] * valM2d[1][1];
            return arr;
        };

    }

})();


(function(){

    ve_local.sound = {};

    var ns = ve_local.sound;

    var context = new AudioContext();

    ns.loadSound = function( url, callback) {
        var request = new XMLHttpRequest();
        request.open('GET', url, true);
        request.responseType = 'arraybuffer';

        request.setRequestHeader('Accept-Ranges', 'bytes');
        request.setRequestHeader('Content-Range', 'bytes');

        request.onload = function() {
            console.log('accepted',request.response);
            context.decodeAudioData(request.response).then(function(buffer) {
                callback(buffer);
            });
        };
        request.send();
    };


    var AudioPlayer = function(){

        var free = true;
        var currLoop = false;
        var self = this;
        var currSource = null;

        this.play = function(buffer,loop){
            free = false;
            currSource = context.createBufferSource();
            currSource.buffer = buffer;
            currLoop = loop;
            currSource.loop = loop;
            currSource.connect(context.destination);
            currSource.start(0);
            currSource.onended = function(){
                self.stop();
            }
        };

        this.stop = function() {
            if (currSource)  {
                currSource.stop();
                currSource.disconnect(context.destination);
            }
            currSource = null;
            free = true;
            currLoop = false;
        };

        this.isFree = function() {
            console.log('isfree',free);
            return free;
        }

    };


    var AudioSet = function(numOfPlayers){
        var players = [];
        for (var i = 0;i<numOfPlayers;i++) {
            players.push(new AudioPlayer());
        }

        this.getFreePlayer = function(){
            for (var i = 0;i<numOfPlayers;i++) {
                if (players[i].isFree()) return players[i];
            }
            return null;
        }

    };

    var audioSet = new AudioSet(5);

    ve.sound = {};

    ve.sound.play = function(sndName,loop){
        var player = audioSet.getFreePlayer();
        if (!player) return;
        player.play(ve_local.bundle.soundList.find({name:sndName})._buffer,loop);
    }


})();

(function(){

    ve_local.Collider = function(){

        var gos;

        this.setUp = function(){
            var scene = ve.sceneManager.getCurrScene();
            gos = scene.getAllGameObjects();
        };

        this.check = function(obj,newX,newY){
            var res = gos.some(function(go){
                if (!go.rigid) return;
                if (obj==go) return;
                var objRect = obj.getRect();
                objRect.x = newX;
                objRect.y = newY;
                if (ve.Math.isRectIntersectRect(objRect,go.getRect())) {
                    res = true;
                    obj.trigger('collide',go);
                    return true;
                }
            });
            if (!res) {
                obj.posX = newX;
                obj.posY = newY;
            }
            return res;
        };

    };

})();
ve.commonBehaviour.draggable = 

Class.extend(
    {
        _parameters: {},
        _gameObject: null,
        initialize: function(_gameObj,_params){
            this._gameObject = _gameObj;
            this._parameters = _params;
        },
        onCreate: function(){
            var self = this;
            var g = this._gameObject;
            self._mouseDown = false;
            var mX = 0;
            var mY = 0;
            var scene = g.getScene();
            g.on('click',function(e){
                self._mouseDown = true;
                mX = e.objectX;
                mY = e.objectY;
            });
            scene.on('mouseMove',function(e){
                if (self._mouseDown) {
                    g.posX = e.screenX - mX;
                    g.posY = e.screenY - mY;
                }
            });
        },
        onUpdate: function(){
            if (!ve.mouse.isMouseDown) this._mouseDown = false;
        }
    },
    {
        parameters: {

        },
        description:'draggable behaviour'
    }
);

(function(){

    ve_local.bundle = new ve_local.Bundle({
        
        
        sound:[
    {
        "name": "boom",
        "type": "sound",
        "resourcePath": "resources/sound/111.mp3",
        "id": "4092_6856_20"
    }
],
        
        spriteSheet:[
    {
        "resourcePath": "resources/spriteSheet/bird.png",
        "width": 551,
        "height": 304,
        "name": "bird",
        "numOfFramesH": 5,
        "numOfFramesV": 3,
        "type": "spriteSheet",
        "id": "1879_7247_15"
    },
    {
        "name": "cloud",
        "resourcePath": "resources/spriteSheet/cloud.png",
        "width": 300,
        "height": 190,
        "type": "spriteSheet",
        "numOfFramesH": 1,
        "numOfFramesV": 1,
        "id": "1501_7424_265"
    },
    {
        "_frameWidth": 0,
        "_frameHeight": 0,
        "name": "ss",
        "resourcePath": "resources/spriteSheet/ss.jpg",
        "width": 192,
        "height": 263,
        "type": "spriteSheet",
        "numOfFramesH": 1,
        "numOfFramesV": 1,
        "id": "6873_5321_13"
    },
    {
        "_frameWidth": 0,
        "_frameHeight": 0,
        "resourcePath": "resources/spriteSheet/particle.png",
        "width": 16,
        "height": 16,
        "name": "particle",
        "type": "spriteSheet",
        "numOfFramesH": 1,
        "numOfFramesV": 1,
        "id": "3319_5653_33"
    }
],
        
        frameAnimation:[
    {
        "name": "fly",
        "frames": [
            0,
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10,
            11,
            12,
            13
        ],
        "type": "frameAnimation",
        "duration": 1000,
        "id": "2195_5056_19"
    },
    {
        "_timeForOneFrame": 0,
        "frames": [
            1,
            2
        ],
        "name": "w",
        "type": "frameAnimation",
        "duration": 1000,
        "id": "4411_8126_129"
    }
],
        
        font:[
    {
        "name": "default",
        "fontContext": {
            "symbols": {
                "0": {
                    "x": 240,
                    "y": 0,
                    "width": 15,
                    "height": 29
                },
                "1": {
                    "x": 255,
                    "y": 0,
                    "width": 15,
                    "height": 29
                },
                "2": {
                    "x": 270,
                    "y": 0,
                    "width": 15,
                    "height": 29
                },
                "3": {
                    "x": 285,
                    "y": 0,
                    "width": 15,
                    "height": 29
                },
                "4": {
                    "x": 301,
                    "y": 0,
                    "width": 15,
                    "height": 29
                },
                "5": {
                    "x": 0,
                    "y": 29,
                    "width": 15,
                    "height": 29
                },
                "6": {
                    "x": 15,
                    "y": 29,
                    "width": 15,
                    "height": 29
                },
                "7": {
                    "x": 30,
                    "y": 29,
                    "width": 15,
                    "height": 29
                },
                "8": {
                    "x": 45,
                    "y": 29,
                    "width": 15,
                    "height": 29
                },
                "9": {
                    "x": 60,
                    "y": 29,
                    "width": 15,
                    "height": 29
                },
                " ": {
                    "x": 0,
                    "y": 0,
                    "width": 15,
                    "height": 29
                },
                "!": {
                    "x": 15,
                    "y": 0,
                    "width": 15,
                    "height": 29
                },
                "\"": {
                    "x": 30,
                    "y": 0,
                    "width": 15,
                    "height": 29
                },
                "#": {
                    "x": 45,
                    "y": 0,
                    "width": 15,
                    "height": 29
                },
                "$": {
                    "x": 60,
                    "y": 0,
                    "width": 15,
                    "height": 29
                },
                "%": {
                    "x": 75,
                    "y": 0,
                    "width": 15,
                    "height": 29
                },
                "&": {
                    "x": 90,
                    "y": 0,
                    "width": 15,
                    "height": 29
                },
                "'": {
                    "x": 105,
                    "y": 0,
                    "width": 15,
                    "height": 29
                },
                "(": {
                    "x": 120,
                    "y": 0,
                    "width": 15,
                    "height": 29
                },
                ")": {
                    "x": 135,
                    "y": 0,
                    "width": 15,
                    "height": 29
                },
                "*": {
                    "x": 150,
                    "y": 0,
                    "width": 15,
                    "height": 29
                },
                "+": {
                    "x": 165,
                    "y": 0,
                    "width": 15,
                    "height": 29
                },
                ",": {
                    "x": 180,
                    "y": 0,
                    "width": 15,
                    "height": 29
                },
                "-": {
                    "x": 195,
                    "y": 0,
                    "width": 15,
                    "height": 29
                },
                ".": {
                    "x": 210,
                    "y": 0,
                    "width": 15,
                    "height": 29
                },
                "/": {
                    "x": 225,
                    "y": 0,
                    "width": 15,
                    "height": 29
                },
                ":": {
                    "x": 75,
                    "y": 29,
                    "width": 15,
                    "height": 29
                },
                ";": {
                    "x": 90,
                    "y": 29,
                    "width": 15,
                    "height": 29
                },
                "<": {
                    "x": 105,
                    "y": 29,
                    "width": 15,
                    "height": 29
                },
                "=": {
                    "x": 120,
                    "y": 29,
                    "width": 15,
                    "height": 29
                },
                ">": {
                    "x": 135,
                    "y": 29,
                    "width": 15,
                    "height": 29
                },
                "?": {
                    "x": 150,
                    "y": 29,
                    "width": 15,
                    "height": 29
                },
                "@": {
                    "x": 165,
                    "y": 29,
                    "width": 15,
                    "height": 29
                },
                "A": {
                    "x": 180,
                    "y": 29,
                    "width": 15,
                    "height": 29
                },
                "B": {
                    "x": 195,
                    "y": 29,
                    "width": 15,
                    "height": 29
                },
                "C": {
                    "x": 210,
                    "y": 29,
                    "width": 15,
                    "height": 29
                },
                "D": {
                    "x": 225,
                    "y": 29,
                    "width": 15,
                    "height": 29
                },
                "E": {
                    "x": 240,
                    "y": 29,
                    "width": 15,
                    "height": 29
                },
                "F": {
                    "x": 255,
                    "y": 29,
                    "width": 15,
                    "height": 29
                },
                "G": {
                    "x": 270,
                    "y": 29,
                    "width": 15,
                    "height": 29
                },
                "H": {
                    "x": 285,
                    "y": 29,
                    "width": 15,
                    "height": 29
                },
                "I": {
                    "x": 301,
                    "y": 29,
                    "width": 15,
                    "height": 29
                },
                "J": {
                    "x": 0,
                    "y": 58,
                    "width": 15,
                    "height": 29
                },
                "K": {
                    "x": 15,
                    "y": 58,
                    "width": 15,
                    "height": 29
                },
                "L": {
                    "x": 30,
                    "y": 58,
                    "width": 15,
                    "height": 29
                },
                "M": {
                    "x": 45,
                    "y": 58,
                    "width": 15,
                    "height": 29
                },
                "N": {
                    "x": 60,
                    "y": 58,
                    "width": 15,
                    "height": 29
                },
                "O": {
                    "x": 75,
                    "y": 58,
                    "width": 15,
                    "height": 29
                },
                "P": {
                    "x": 90,
                    "y": 58,
                    "width": 15,
                    "height": 29
                },
                "Q": {
                    "x": 105,
                    "y": 58,
                    "width": 15,
                    "height": 29
                },
                "R": {
                    "x": 120,
                    "y": 58,
                    "width": 15,
                    "height": 29
                },
                "S": {
                    "x": 135,
                    "y": 58,
                    "width": 15,
                    "height": 29
                },
                "T": {
                    "x": 150,
                    "y": 58,
                    "width": 15,
                    "height": 29
                },
                "U": {
                    "x": 165,
                    "y": 58,
                    "width": 15,
                    "height": 29
                },
                "V": {
                    "x": 180,
                    "y": 58,
                    "width": 15,
                    "height": 29
                },
                "W": {
                    "x": 195,
                    "y": 58,
                    "width": 15,
                    "height": 29
                },
                "X": {
                    "x": 210,
                    "y": 58,
                    "width": 15,
                    "height": 29
                },
                "Y": {
                    "x": 225,
                    "y": 58,
                    "width": 15,
                    "height": 29
                },
                "Z": {
                    "x": 240,
                    "y": 58,
                    "width": 15,
                    "height": 29
                },
                "[": {
                    "x": 255,
                    "y": 58,
                    "width": 15,
                    "height": 29
                },
                "\\": {
                    "x": 270,
                    "y": 58,
                    "width": 15,
                    "height": 29
                },
                "]": {
                    "x": 285,
                    "y": 58,
                    "width": 15,
                    "height": 29
                },
                "^": {
                    "x": 301,
                    "y": 58,
                    "width": 15,
                    "height": 29
                },
                "_": {
                    "x": 0,
                    "y": 87,
                    "width": 15,
                    "height": 29
                },
                "`": {
                    "x": 15,
                    "y": 87,
                    "width": 15,
                    "height": 29
                },
                "a": {
                    "x": 30,
                    "y": 87,
                    "width": 15,
                    "height": 29
                },
                "b": {
                    "x": 45,
                    "y": 87,
                    "width": 15,
                    "height": 29
                },
                "c": {
                    "x": 60,
                    "y": 87,
                    "width": 15,
                    "height": 29
                },
                "d": {
                    "x": 75,
                    "y": 87,
                    "width": 15,
                    "height": 29
                },
                "e": {
                    "x": 90,
                    "y": 87,
                    "width": 15,
                    "height": 29
                },
                "f": {
                    "x": 105,
                    "y": 87,
                    "width": 15,
                    "height": 29
                },
                "g": {
                    "x": 120,
                    "y": 87,
                    "width": 15,
                    "height": 29
                },
                "h": {
                    "x": 135,
                    "y": 87,
                    "width": 15,
                    "height": 29
                },
                "i": {
                    "x": 150,
                    "y": 87,
                    "width": 15,
                    "height": 29
                },
                "j": {
                    "x": 165,
                    "y": 87,
                    "width": 15,
                    "height": 29
                },
                "k": {
                    "x": 180,
                    "y": 87,
                    "width": 15,
                    "height": 29
                },
                "l": {
                    "x": 195,
                    "y": 87,
                    "width": 15,
                    "height": 29
                },
                "m": {
                    "x": 210,
                    "y": 87,
                    "width": 15,
                    "height": 29
                },
                "n": {
                    "x": 225,
                    "y": 87,
                    "width": 15,
                    "height": 29
                },
                "o": {
                    "x": 240,
                    "y": 87,
                    "width": 15,
                    "height": 29
                },
                "p": {
                    "x": 255,
                    "y": 87,
                    "width": 15,
                    "height": 29
                },
                "q": {
                    "x": 270,
                    "y": 87,
                    "width": 15,
                    "height": 29
                },
                "r": {
                    "x": 285,
                    "y": 87,
                    "width": 15,
                    "height": 29
                },
                "s": {
                    "x": 301,
                    "y": 87,
                    "width": 15,
                    "height": 29
                },
                "t": {
                    "x": 0,
                    "y": 116,
                    "width": 15,
                    "height": 29
                },
                "u": {
                    "x": 15,
                    "y": 116,
                    "width": 15,
                    "height": 29
                },
                "v": {
                    "x": 30,
                    "y": 116,
                    "width": 15,
                    "height": 29
                },
                "w": {
                    "x": 45,
                    "y": 116,
                    "width": 15,
                    "height": 29
                },
                "x": {
                    "x": 60,
                    "y": 116,
                    "width": 15,
                    "height": 29
                },
                "y": {
                    "x": 75,
                    "y": 116,
                    "width": 15,
                    "height": 29
                },
                "z": {
                    "x": 90,
                    "y": 116,
                    "width": 15,
                    "height": 29
                },
                "{": {
                    "x": 105,
                    "y": 116,
                    "width": 15,
                    "height": 29
                },
                "|": {
                    "x": 120,
                    "y": 116,
                    "width": 15,
                    "height": 29
                },
                "}": {
                    "x": 135,
                    "y": 116,
                    "width": 15,
                    "height": 29
                },
                "~": {
                    "x": 150,
                    "y": 116,
                    "width": 15,
                    "height": 29
                },
                "А": {
                    "x": 165,
                    "y": 116,
                    "width": 15,
                    "height": 29
                },
                "Б": {
                    "x": 180,
                    "y": 116,
                    "width": 15,
                    "height": 29
                },
                "В": {
                    "x": 195,
                    "y": 116,
                    "width": 15,
                    "height": 29
                },
                "Г": {
                    "x": 210,
                    "y": 116,
                    "width": 15,
                    "height": 29
                },
                "Д": {
                    "x": 225,
                    "y": 116,
                    "width": 15,
                    "height": 29
                },
                "Е": {
                    "x": 240,
                    "y": 116,
                    "width": 15,
                    "height": 29
                },
                "Ж": {
                    "x": 255,
                    "y": 116,
                    "width": 15,
                    "height": 29
                },
                "З": {
                    "x": 270,
                    "y": 116,
                    "width": 15,
                    "height": 29
                },
                "И": {
                    "x": 285,
                    "y": 116,
                    "width": 15,
                    "height": 29
                },
                "Й": {
                    "x": 301,
                    "y": 116,
                    "width": 15,
                    "height": 29
                },
                "К": {
                    "x": 0,
                    "y": 145,
                    "width": 15,
                    "height": 29
                },
                "Л": {
                    "x": 15,
                    "y": 145,
                    "width": 15,
                    "height": 29
                },
                "М": {
                    "x": 30,
                    "y": 145,
                    "width": 15,
                    "height": 29
                },
                "Н": {
                    "x": 45,
                    "y": 145,
                    "width": 15,
                    "height": 29
                },
                "О": {
                    "x": 60,
                    "y": 145,
                    "width": 15,
                    "height": 29
                },
                "П": {
                    "x": 75,
                    "y": 145,
                    "width": 15,
                    "height": 29
                },
                "Р": {
                    "x": 90,
                    "y": 145,
                    "width": 15,
                    "height": 29
                },
                "С": {
                    "x": 105,
                    "y": 145,
                    "width": 15,
                    "height": 29
                },
                "Т": {
                    "x": 120,
                    "y": 145,
                    "width": 15,
                    "height": 29
                },
                "У": {
                    "x": 135,
                    "y": 145,
                    "width": 15,
                    "height": 29
                },
                "Ф": {
                    "x": 150,
                    "y": 145,
                    "width": 15,
                    "height": 29
                },
                "Х": {
                    "x": 165,
                    "y": 145,
                    "width": 15,
                    "height": 29
                },
                "Ц": {
                    "x": 180,
                    "y": 145,
                    "width": 15,
                    "height": 29
                },
                "Ч": {
                    "x": 195,
                    "y": 145,
                    "width": 15,
                    "height": 29
                },
                "Ш": {
                    "x": 210,
                    "y": 145,
                    "width": 15,
                    "height": 29
                },
                "Щ": {
                    "x": 225,
                    "y": 145,
                    "width": 15,
                    "height": 29
                },
                "Ъ": {
                    "x": 240,
                    "y": 145,
                    "width": 15,
                    "height": 29
                },
                "Ы": {
                    "x": 255,
                    "y": 145,
                    "width": 15,
                    "height": 29
                },
                "Ь": {
                    "x": 270,
                    "y": 145,
                    "width": 15,
                    "height": 29
                },
                "Э": {
                    "x": 285,
                    "y": 145,
                    "width": 15,
                    "height": 29
                },
                "Ю": {
                    "x": 301,
                    "y": 145,
                    "width": 15,
                    "height": 29
                },
                "Я": {
                    "x": 0,
                    "y": 174,
                    "width": 15,
                    "height": 29
                },
                "а": {
                    "x": 15,
                    "y": 174,
                    "width": 15,
                    "height": 29
                },
                "б": {
                    "x": 30,
                    "y": 174,
                    "width": 15,
                    "height": 29
                },
                "в": {
                    "x": 45,
                    "y": 174,
                    "width": 15,
                    "height": 29
                },
                "г": {
                    "x": 60,
                    "y": 174,
                    "width": 15,
                    "height": 29
                },
                "д": {
                    "x": 75,
                    "y": 174,
                    "width": 15,
                    "height": 29
                },
                "е": {
                    "x": 90,
                    "y": 174,
                    "width": 15,
                    "height": 29
                },
                "ж": {
                    "x": 105,
                    "y": 174,
                    "width": 15,
                    "height": 29
                },
                "з": {
                    "x": 120,
                    "y": 174,
                    "width": 15,
                    "height": 29
                },
                "и": {
                    "x": 135,
                    "y": 174,
                    "width": 15,
                    "height": 29
                },
                "й": {
                    "x": 150,
                    "y": 174,
                    "width": 15,
                    "height": 29
                },
                "к": {
                    "x": 165,
                    "y": 174,
                    "width": 15,
                    "height": 29
                },
                "л": {
                    "x": 180,
                    "y": 174,
                    "width": 15,
                    "height": 29
                },
                "м": {
                    "x": 195,
                    "y": 174,
                    "width": 15,
                    "height": 29
                },
                "н": {
                    "x": 210,
                    "y": 174,
                    "width": 15,
                    "height": 29
                },
                "о": {
                    "x": 225,
                    "y": 174,
                    "width": 15,
                    "height": 29
                },
                "п": {
                    "x": 240,
                    "y": 174,
                    "width": 15,
                    "height": 29
                },
                "р": {
                    "x": 255,
                    "y": 174,
                    "width": 15,
                    "height": 29
                },
                "с": {
                    "x": 270,
                    "y": 174,
                    "width": 15,
                    "height": 29
                },
                "т": {
                    "x": 285,
                    "y": 174,
                    "width": 15,
                    "height": 29
                },
                "у": {
                    "x": 301,
                    "y": 174,
                    "width": 15,
                    "height": 29
                },
                "ф": {
                    "x": 0,
                    "y": 203,
                    "width": 15,
                    "height": 29
                },
                "х": {
                    "x": 15,
                    "y": 203,
                    "width": 15,
                    "height": 29
                },
                "ц": {
                    "x": 30,
                    "y": 203,
                    "width": 15,
                    "height": 29
                },
                "ч": {
                    "x": 45,
                    "y": 203,
                    "width": 15,
                    "height": 29
                },
                "ш": {
                    "x": 60,
                    "y": 203,
                    "width": 15,
                    "height": 29
                },
                "щ": {
                    "x": 75,
                    "y": 203,
                    "width": 15,
                    "height": 29
                },
                "ъ": {
                    "x": 90,
                    "y": 203,
                    "width": 15,
                    "height": 29
                },
                "ы": {
                    "x": 105,
                    "y": 203,
                    "width": 15,
                    "height": 29
                },
                "ь": {
                    "x": 120,
                    "y": 203,
                    "width": 15,
                    "height": 29
                },
                "э": {
                    "x": 135,
                    "y": 203,
                    "width": 15,
                    "height": 29
                },
                "ю": {
                    "x": 150,
                    "y": 203,
                    "width": 15,
                    "height": 29
                },
                "я": {
                    "x": 165,
                    "y": 203,
                    "width": 15,
                    "height": 29
                },
                "ѐ": {
                    "x": 180,
                    "y": 203,
                    "width": 15,
                    "height": 29
                },
                "ё": {
                    "x": 195,
                    "y": 203,
                    "width": 15,
                    "height": 29
                },
                "ђ": {
                    "x": 210,
                    "y": 203,
                    "width": 15,
                    "height": 29
                },
                "ѓ": {
                    "x": 225,
                    "y": 203,
                    "width": 15,
                    "height": 29
                },
                "є": {
                    "x": 240,
                    "y": 203,
                    "width": 15,
                    "height": 29
                },
                "ѕ": {
                    "x": 255,
                    "y": 203,
                    "width": 15,
                    "height": 29
                },
                "і": {
                    "x": 270,
                    "y": 203,
                    "width": 15,
                    "height": 29
                },
                "ї": {
                    "x": 285,
                    "y": 203,
                    "width": 15,
                    "height": 29
                },
                "ј": {
                    "x": 301,
                    "y": 203,
                    "width": 15,
                    "height": 29
                },
                "љ": {
                    "x": 0,
                    "y": 232,
                    "width": 15,
                    "height": 29
                },
                "њ": {
                    "x": 15,
                    "y": 232,
                    "width": 15,
                    "height": 29
                },
                "ћ": {
                    "x": 30,
                    "y": 232,
                    "width": 15,
                    "height": 29
                }
            },
            "width": 320,
            "height": 261
        },
        "type": "font",
        "fontColor": "black",
        "fontSize": 25,
        "fontFamily": "Monospace",
        "resourcePath": "resources/font/default.png",
        "id": "6991_3497_4"
    }
],
        
        gameObject:[
    {
        "spriteSheetId": "1879_7247_15",
        "width": 110,
        "height": 101,
        "name": "bird",
        "type": "gameObject",
        "commonBehaviour": [
            {
                "name": "draggable",
                "parameters": {},
                "id": "6616_0188_20",
                "type": "commonBehaviour",
                "description": ""
            }
        ],
        "frameAnimationIds": [
            "2195_5056_19"
        ],
        "id": "5139_0458_16",
        "rigid": 0,
        "groupName": "",
        "currFrameIndex": 0,
        "_sprPosX": 0,
        "_sprPosY": 0,
        "velX": 0,
        "velY": 0,
        "posX": 0,
        "posY": 0
    },
    {
        "spriteSheetId": "3319_5653_33",
        "currFrameIndex": 0,
        "_sprPosX": 0,
        "_sprPosY": 0,
        "name": "particle",
        "width": 16,
        "height": 16,
        "type": "gameObject",
        "commonBehaviour": [],
        "velX": 0,
        "velY": 0,
        "frameAnimationIds": [],
        "rigid": true,
        "groupName": "",
        "posX": 0,
        "posY": 0,
        "id": "1492_9912_46"
    }
],
        
        layer:[
    {
        "name": "ll",
        "type": "layer",
        "gameObjectProps": [
            {
                "text": "hello",
                "width": 75,
                "height": 29,
                "type": "userInterface",
                "subType": "textField",
                "groupName": "",
                "posX": 15,
                "posY": 20,
                "name": "textField1",
                "protoId": {},
                "id": "4343_5960_457",
                "fontId": "6991_3497_4"
            },
            {
                "spriteSheetId": "1879_7247_15",
                "width": 110,
                "height": 101,
                "name": "bird",
                "type": "gameObject",
                "commonBehaviour": [
                    {
                        "name": "draggable",
                        "parameters": {},
                        "id": "6616_0188_20",
                        "type": "commonBehaviour",
                        "description": ""
                    }
                ],
                "frameAnimationIds": [
                    "2195_5056_19"
                ],
                "rigid": 0,
                "groupName": "",
                "currFrameIndex": 0,
                "_sprPosX": 0,
                "_sprPosY": 0,
                "velX": 0,
                "velY": 0,
                "posX": 109,
                "posY": 90,
                "protoId": "5139_0458_16",
                "id": "4438_6727_4"
            }
        ],
        "id": "3534_2050_13"
    }
],
        
        scene:[
    {
        "name": "m",
        "type": "scene",
        "layerProps": [
            {
                "type": "layer",
                "protoId": "3534_2050_13",
                "id": "0914_2087_14"
            }
        ],
        "id": "7174_5436_12"
    }
],
        
        particleSystem:[
    {
        "gameObjectId": "1492_9912_46",
        "numOfParticlesToEmit": {
            "from": 50,
            "to": 80
        },
        "particleAngle": {
            "from": -2.6660626056852346,
            "to": -2.2593554849310378
        },
        "particleVelocity": {
            "from": 90,
            "to": 100
        },
        "name": "ps",
        "type": "particleSystem",
        "id": "0252_1160_4",
        "particleLiveTime": {
            "from": 101,
            "to": 400
        }
    }
],
        
        gameProps:{
    "width": 540,
    "height": 300,
    "scaleToFullScreen": true
},
        
    });

    ve_local.scripts = {};
    ve_local.scripts.gameObject = {};
    ve_local.scripts.scene = {};

    
    ve_local.scripts.gameObject['a.js'] = function(){
        var clazz = ve.models.Behaviour.extend({

    onCreate: function(){

    },

    onUpdate: function(time) {

    },

    onDestroy: function(){

    }

});
;
        return clazz;
    };
    
    ve_local.scripts.gameObject['b.js'] = function(){
        var clazz = ve.models.Behaviour.extend({

    onCreate: function(){
        this.getFrAnimation('fly').play();
    },

    onUpdate: function(time) {
        if (this.posX>400) this.posX = -300;
    },

    onDestroy: function(){

    }

});
;
        return clazz;
    };
    
    ve_local.scripts.gameObject['b2.js'] = function(){
        var clazz = ve.models.Behaviour.extend({

    onCreate: function(){

    },

    onUpdate: function(time) {

    },

    onDestroy: function(){

    }

});
;
        return clazz;
    };
    
    ve_local.scripts.gameObject['bird.js'] = function(){
        var clazz = ve.models.Behaviour.extend({

    ps:null,

    onCreate: function(){
        this.ps = ve_local.bundle.particleSystemList.get(0);
    },

    onUpdate: function(time) {
        this.ps.emit(this.posX+20,this.posY+50);
         if (this.posX>800) this.posX = -300;
    },

    onDestroy: function(){

    }

});;
        return clazz;
    };
    
    ve_local.scripts.gameObject['cloud.js'] = function(){
        var clazz = ve.models.Behaviour.extend({

     

    onCreate: function(){
        this.on('click',function(e){
            console.log(e);
        });
        
    },

    onUpdate: function(time) {
        if (this.posX>800) this.posX = -300;
    },

    onDestroy: function(){

    }

});
;
        return clazz;
    };
    
    ve_local.scripts.gameObject['particle.js'] = function(){
        var clazz = ve.models.Behaviour.extend({

    onCreate: function(){

    },

    onUpdate: function(time) {
        console.log('updated particle');
    },

    onDestroy: function(){

    }

});
;
        return clazz;
    };
    
    ve_local.scripts.gameObject['q.js'] = function(){
        var clazz = ve.models.Behaviour.extend({

    onCreate: function(){

    },

    onUpdate: function(time) {

    },

    onDestroy: function(){

    }

});
;
        return clazz;
    };
    
    ve_local.scripts.gameObject['sprite.js'] = function(){
        var clazz = ve.models.Behaviour.extend({

    onCreate: function(){

    },

    onUpdate: function(time) {

    },

    onDestroy: function(){

    }

});
;
        return clazz;
    };
    ;
    
    ve_local.scripts.scene['m.js'] = function(){
    var clazz = ve.models.Behaviour.extend({

   
    onCreate: function(){
        console.trace('scene created',this);
        var self = this;
        var textField = this.findGameObject('textField1');
        var bird = this.findGameObject('bird');
        bird.getFrAnimation('fly').play();
        textField.setText('Привет (нажми на меня)');
        bird.on('click',function(e){
            textField.setText('Ура!!!!!');
            bird.velX = 200;
            ve.sound.play('boom');
        });
    },

    onUpdate: function(time) {
       
    },

    onDestroy: function(){

    }

});
;
    return clazz;
    };
    
    ve_local.scripts.scene['q.js'] = function(){
    var clazz = ve.models.Behaviour.extend({

    onCreate: function(){

    },

    onUpdate: function(time) {

    },

    onDestroy: function(){

    }

});
;
    return clazz;
    };
    ;

    ve_local.bundle.prepare();
    if (!ve_local.bundle.sceneList.size()) throw 'at least one scene must be created';

    ve_local.renderer = new ve_local.Renderer();
    ve.sceneManager = new ve_local.SceneManager();
    ve_local.collider = new ve_local.Collider();
    ve.keyboard = new ve_local.Keyboard();
    ve_local.bundle.prepareGameObjectScripts();


    window.addEventListener('load',function(){
        document.body.ontouchstart = function(e){
            e.preventDefault();
            return false;
        };
        ve_local.renderer.init();
        ve.mouse = new ve_local.Mouse(ve_local.renderer.getCanvas());
        ve.sceneManager.setScene(ve_local.bundle.sceneList.get(0));
    });

})();