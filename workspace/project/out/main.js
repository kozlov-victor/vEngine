
var ve = {};
var ve_local = {};
ve.commonBehaviour = {};
ve_local.RESOURCE_NAMES = ["audio","spriteSheet","frameAnimation","gameObject","layer","scene"];
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
                if (res) break;
            }
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
        if (!el[key]) return true;
        if (el[key].call) return true;
        if (key.indexOf('_')==0 || key.indexOf('$$')==0) return true;
    };

    models.BaseModel = Class.extend({
        id:null,
        protoId:null,
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
        clone: function(){
            return new this.constructor(this.toJsonObj());
        },
        on: function(eventName,callBackOrEvt){
            var self = this;
            if (callBackOrEvt.apply) {
                self.__events__[eventName] = self.__events__[eventName] || [];
                self.__events__[eventName].push(callBackOrEvt);
            } else {
                var es = self.__events__[eventName];
                if (!es) return;
                es.forEach(function(e){
                    e(callBackOrEvt);
                });
            }

        },
        _init:function(){
            this.__events__ = {};
            arguments && arguments[0] && this.fromJsonObject(arguments[0]);
        }
    });

    models.Behaviour = models.BaseModel.extend({});

    var Resource = models.BaseModel.extend({
        resourcePath:''
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
        _img: null,
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

    models.GameObject = models.BaseModel.extend({
        type:'gameObject',
        spriteSheetId:null,
        _spriteSheet:null,
        _behaviour:null,
        commonBehaviour:[],
        _commonBehaviour:null,
        posX:0,
        posY:0,
        velX:0,
        velY:0,
        width:0,
        height:0,
        currFrameIndex:0,
        _sprPosX:0,
        _sprPosY:0,
        _frameAnimations: null,
        frameAnimationIds:[],
        _currFrameAnimation:null,
        _layer:null,
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
        getScene: function(){
            return this._layer._scene;
        },
        getRect: function(){
            return {x:this.posX,y:this.posY,width:this.width,height:this.height};
        },
        getFrAnimation: function(animationName){
            return this._frameAnimations.find({name: animationName});
        },
        setFrameIndex: function(index){
            this.currFrameIndex = index;
            this._sprPosX = this._spriteSheet.getFramePosX(this.currFrameIndex);
            this._sprPosY = this._spriteSheet.getFramePosY(this.currFrameIndex);
        },
        update: function(time,delta) {
            this._currFrameAnimation && this._currFrameAnimation.update(time);
            var deltaX = this.velX * delta / 1000;
            var deltaY = this.velY * delta / 1000;
            this.posX+=deltaX;
            this.posY+=deltaY;
        },
        stopFrAnimations: function(){
            this._currFrameAnimation && this._currFrameAnimation.stop();
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

        //delta sec = x frame
        //duration sec = l - 1 frame

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
        construct: function(){
            var self = this;
            self._gameObjects = new ve.collections.List();
            this.gameObjectProps.forEach(function(prop){
                var obj = ve_local.bundle.gameObjectList.find({id: prop.protoId});
                var objCloned = obj.clone(ve.models.GameObject);
                objCloned.fromJsonObject(prop);
                objCloned._layer = self;
                self._gameObjects.add(objCloned);
            });
        },
        getAllSpriteSheets:function() {
            var dataSet = new ve.collections.Set();
            this._gameObjects.forEach(function(obj){
                dataSet.add(obj._spriteSheet);
            });
            return dataSet;
        }
    });

    models.Scene = models.BaseModel.extend({
        type:'scene',
        layerProps:[],
        _layers:null,
        construct: function(){
            var self = this;
            self._layers = new ve.collections.List();
            this.layerProps.forEach(function(prop){
                var l = ve_local.bundle.layerList.find({id: prop.protoId});
                var lCloned = l.clone(ve.models.Layer);
                lCloned.fromJsonObject(prop);
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
        }
    });


    models.Font = models.BaseModel.extend({
        type:'font'
    });

    models.CommonBehaviour = models.BaseModel.extend({
        type:'commonBehaviour',
        name:'',
        description:'',
        parameters:[],
        construct: function(){

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
        this.gameProps = {};

        var self = this;

        var toDataSource = function(ResourceClass,dataList,resourceList){
            dataList.forEach(function(item){
                resourceList.add(new ResourceClass(item));
            });
        };

        var capitalize = function(s){
            return s.substr(0,1).toUpperCase() +
                s.substr(1);
        };

        this.prepare = function(){
            ve_local.RESOURCE_NAMES.forEach(function(itm){
                toDataSource(ve.models[capitalize(itm)],data[itm],self[itm+'List']);
            });
            self.gameProps = data.gameProps;
            data = null;
        };

        var applyIndividualBehaviour = function(model){
            var script = ve_local.scripts[model.type][model.name+'.js'];
            if (!script) throw 'can not found script for '+ model.name + ' ' + model.type;
            var BehaviourClass = script();
            model._behaviour = new BehaviourClass();
            model._behaviour.toJsonArr().forEach(function(itm){
                model[itm.key]=itm.value;
            });
            model._behaviour.onCreate.apply(model);
            model.__updateIndividualBehaviour__ = function(deltaTime){
                model._behaviour.onUpdate.apply(model,[deltaTime]);
            }
        };

        var applyCommonBehaviour = function(model){
            var cbList = [];
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
                applyIndividualBehaviour(scene);
                scene._layers.forEach(function(layer){
                    layer._gameObjects.forEach(function(gameObject){
                        applyCommonBehaviour(gameObject);
                        applyIndividualBehaviour(gameObject);
                    });
                });
            });
        };

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
    };
    ns.merge = function(obj1,obj2){
        Object.keys(obj2).forEach(function(key){
            obj1[key]=obj2[key];
        });
    };
    ns.clone = function(obj){
        return Object.create(obj);
    }
})();

ve_local.CanvasRenderer = function(){

    var canvas;
    var ctx;
    var scene;
    var self = this;
    var currTime = 0;
    var lastTime = 0;
    var reqAnimFrame = window.requestAnimationFrame||window.webkitRequestAnimationFrame||function(f){setTimeout(f,17)};

    this.init = function(){
        canvas = document.querySelector('canvas');
        if (!canvas) {
            canvas = document.createElement('canvas');
            canvas.width = ve_local.bundle.gameProps.width;
            canvas.height = ve_local.bundle.gameProps.height;
            document.body.appendChild(canvas);
        }
        ctx = canvas.getContext('2d');
    };

    this.getCanvas = function(){
        return canvas;
    };

    this.cancel = function(){
        cancelAnimationFrame(drawScene);
    };

    var drawObject = function(gameObj){
        ctx.drawImage(
            gameObj._spriteSheet._img,
            gameObj._sprPosX,
            gameObj._sprPosY,
            gameObj._spriteSheet._frameWidth,
            gameObj._spriteSheet._frameHeight,
            gameObj.posX,
            gameObj.posY,
            gameObj.width,
            gameObj.height
        );

    };
    var drawScene = function(){
        reqAnimFrame(drawScene);

        if (!scene) return;

        lastTime = currTime;
        currTime = Date.now();
        var deltaTime = lastTime ? currTime - lastTime : 0;

        ctx.fillStyle="#FFFFFF";
        ctx.fillRect(0,0,ve_local.bundle.gameProps.width,ve_local.bundle.gameProps.height);
        scene._layers.forEach(function(layer){
            layer._gameObjects.forEach(function(obj){
                obj.__updateCommonBehaviour__();
                obj.__updateIndividualBehaviour__(deltaTime);
                obj.update(currTime,deltaTime);
                drawObject(obj);
            });
        });
        ve.keyboard._onNextTick();
    };
    this.setScene = function(_scene){
        scene = _scene;
    };

    drawScene();

};

ve_local.SceneManager = function(){

    var self = this;

    this.currScene = null;

    var preloadAndSet = function(scene){
        var q = new ve.utils.Queue();
        q.onResolved = function(){
            ve_local.renderer.setScene(scene);
        };
        var allSprSheets = scene.getAllSpriteSheets();
        allSprSheets.asArray().forEach(function(spSheet){
            spSheet._img = new Image();
            spSheet._img.src = './'+spSheet.resourcePath;
            if (!spSheet._img.src.complete) q.addTask();
            spSheet._img.onload = q.resolveTask;
        });
        if (q.size()==0) q.onResolved();
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
            console.log('not mobile');
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
            var point = {x: e.clientX,y: e.clientY};
            scene._layers.someReversed(function(l){
                var found = false;
                l._gameObjects.someReversed(function(g){
                    if (
                        ve.Math.isPointInRect(point,g.getRect())
                    ) {
                        g.on('click',{
                            screenX:point.x,
                            screenY:point.Y,
                            objectX:point.x- g.posX,
                            objectY:point.y- g.posY
                        });
                        return found = true;
                    }
                });
                return found;
            })

        };

        var resolveMouseMove = function(e){
            var scene = ve.sceneManager.getCurrScene();
            scene.on('mouseMove',{
                screenX: e.clientX,
                screenY: e.clientY
            });
        };

        var resolveMouseUp = function(){
            self.isMouseDown = false;
        };

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
    }

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

ve.commonBehaviour.control4dir = 
Class.extend(
    {
        _parameters: {},
        _gameObject: null,
        initialize: function(_gameObj,_params){
            this._gameObject = _gameObj;
            this._parameters = _params;
        },
        onCreate: function(){
            var dirs = ['Left','Right','Up','Down'];
            var self = this;
            dirs.forEach(function(dir){
                var keyWalk = 'walk'+dir+'Animation', keyIdle = 'idle'+dir+'Animation';
                self[keyWalk] = self._gameObject.getFrAnimation(self._parameters[keyWalk]);
                if (!self[keyWalk]) throw 'can not find animation ' + self._parameters[keyWalk] +' an gameObject ' + self._gameObject.name;
                self._parameters[keyIdle] && (self[keyIdle] = self._gameObject.getFrAnimation(self._parameters[keyIdle]));
            });
        },
        _stop: function(lastDirection){
            var self = this;
            var go = self._gameObject;
            go.stopFrAnimations();
            go.velX = 0;
            go.velY = 0;
            var idleKey = 'idle'+lastDirection+'Animation';
            self[idleKey] && (self[idleKey].play());
        },
        _go: function(direction){
            var self = this;
            self['walk'+direction+'Animation'].play();
        },
        onUpdate: function(){
            var self = this;
            var go = self._gameObject;
            if (ve.keyboard.isPressed(ve.keyboard.KEY_UP)) {
                go.velY = -self._parameters.velocity;
                self._go('Up');
            }
            if (ve.keyboard.isPressed(ve.keyboard.KEY_DOWN)) {
                go.velY = self._parameters.velocity;
                self._go('Down');
            }
            if (ve.keyboard.isPressed(ve.keyboard.KEY_LEFT)) {
                go.velX = -self._parameters.velocity;
                self._go('Left');
            }
            if (ve.keyboard.isPressed(ve.keyboard.KEY_RIGHT)) {
                go.velX = self._parameters.velocity;
                self._go('Right');
            }

            if (ve.keyboard.isJustReleased(ve.keyboard.KEY_LEFT)) {
                self._stop('Left');
            } else if (ve.keyboard.isJustReleased(ve.keyboard.KEY_RIGHT)) {
                self._stop('Right');
            } else if (ve.keyboard.isJustReleased(ve.keyboard.KEY_UP)) {
                self._stop('Up');
            } else if (ve.keyboard.isJustReleased(ve.keyboard.KEY_DOWN)) {
                self._stop('Down');
            }
        }
    },
    {
        parameters: {
            velocity: 100,
            walkLeftAnimation: 'left',
            walkRightAnimation: 'right',
            walkUpAnimation:'up',
            walkDownAnimation:'down',
            idleLeftAnimation: 'idleLeft',
            idleRightAnimation: 'idleRight',
            idleUpAnimation:'idleUp',
            idleDownAnimation:'idleDown'
        },
        description:'control character with cursor to walk up, down, left and right'
    }
);
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
                //console.log('scene mousemove'+ e.screenX+','+ e.screenY);
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
ve.commonBehaviour.move4dir = 
Class.extend(
    {
        _parameters: {},
        _gameObject: null,
        initialize: function(_gameObj,_params){
            this._gameObject = _gameObj;
            this._parameters = _params;
        },
        onCreate: function(){
            var dirs = ['Left','Right','Up','Down'];
            var self = this;
            dirs.forEach(function(dir){
                var keyWalk = 'walk'+dir+'Animation', keyIdle = 'idle'+dir+'Animation';
                self[keyWalk] = self._gameObject.getFrAnimation(self._parameters[keyWalk]);
                if (!self[keyWalk]) throw 'can not find animation ' + self._parameters[keyWalk] +' an gameObject ' + self._gameObject.name;
                self._parameters[keyIdle] && (self[keyIdle] = self._gameObject.getFrAnimation(self._parameters[keyIdle]));
            });
            var lastDir = '';
            self._gameObject.go = function(direction){
                self._go(direction);
                lastDir = direction;
            };
            self._gameObject.stop = function(){
                self._stop();
            }
        },
        _stop: function(lastDirection){
            var self = this;
            var go = self._gameObject;
            go.stopFrAnimations();
            go.velX = 0;
            go.velY = 0;
            var idleKey = 'idle'+lastDirection+'Animation';
            self[idleKey] && (self[idleKey].play());
        },
        _go: function(direction){
            var self = this;
            self['walk'+direction+'Animation'].play();
            switch (direction) {
                case 'Up':
                    self._gameObject.velX = 0;
                    self._gameObject.velY = -self._parameters.velocity;
                    break;
                case 'Down':
                    self._gameObject.velX = 0;
                    self._gameObject.velY = self._parameters.velocity;
                    break;
                case 'Left':
                    self._gameObject.velY = 0;
                    self._gameObject.velX = -self._parameters.velocity;
                    break;
                case 'Right':
                    self._gameObject.velY = 0;
                    self._gameObject.velX = self._parameters.velocity;
                    break;
            }
        },
        onUpdate: function(){

        }
    },
    {
        parameters: {
            velocity: 100,
            walkLeftAnimation: 'left',
            walkRightAnimation: 'right',
            walkUpAnimation:'up',
            walkDownAnimation:'down',
            idleLeftAnimation: 'idleLeft',
            idleRightAnimation: 'idleRight',
            idleUpAnimation:'idleUp',
            idleDownAnimation:'idleDown'
        },
        description:'allow character to walk up, down, left and right'
    }
);

(function(){

    ve_local.bundle = new ve_local.Bundle({
        audio: [],
        frameAnimation: [
    {
        "frames": [
            0,
            1,
            2,
            3,
            4,
            5,
            6,
            7
        ],
        "name": "walkFwd",
        "type": "frameAnimation",
        "duration": 1000,
        "id": "3652_6957_3"
    },
    {
        "name": "walkBack",
        "frames": [
            7,
            6,
            5,
            4,
            3,
            2,
            1,
            0
        ],
        "type": "frameAnimation",
        "duration": 1000,
        "id": "5239_1335_0"
    },
    {
        "frames": [
            18,
            17,
            16,
            15,
            14,
            13,
            12,
            11,
            10,
            9,
            8,
            7,
            6,
            5,
            4,
            3,
            2,
            1,
            0
        ],
        "name": "rotate",
        "type": "frameAnimation",
        "duration": 1000,
        "id": "7238_1883_3"
    },
    {
        "frames": [
            96,
            97,
            98,
            99,
            100,
            101,
            102,
            103,
            104,
            105,
            106,
            107,
            108,
            109,
            110,
            111
        ],
        "name": "left",
        "type": "frameAnimation",
        "duration": 1000,
        "id": "5103_5846_11"
    },
    {
        "name": "right",
        "frames": [
            32,
            33,
            34,
            35,
            36,
            37,
            38,
            39,
            40,
            41,
            42,
            43,
            44,
            45,
            46,
            47
        ],
        "type": "frameAnimation",
        "duration": 1000,
        "id": "5283_6546_12"
    },
    {
        "name": "up",
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
            13,
            14,
            15
        ],
        "type": "frameAnimation",
        "duration": 1000,
        "id": "4276_2328_13"
    },
    {
        "name": "down",
        "frames": [
            64,
            65,
            66,
            67,
            68,
            69,
            70,
            71,
            72,
            73,
            74,
            75,
            76,
            77,
            78,
            79
        ],
        "type": "frameAnimation",
        "duration": 1000,
        "id": "8014_4428_14"
    },
    {
        "name": "rotate",
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
            13,
            14,
            15,
            16,
            17,
            18
        ],
        "type": "frameAnimation",
        "duration": 1000,
        "id": "5442_6561_21"
    },
    {
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
            13,
            14,
            15,
            16,
            17,
            18,
            19,
            20,
            21,
            22,
            23,
            24,
            25,
            26,
            27,
            28,
            29
        ],
        "name": "sad",
        "type": "frameAnimation",
        "duration": 1000,
        "id": "3437_1809_4"
    },
    {
        "name": "left",
        "frames": [
            15,
            16,
            17
        ],
        "type": "frameAnimation",
        "duration": 600,
        "id": "7096_7787_3"
    },
    {
        "name": "right",
        "frames": [
            27,
            28,
            29
        ],
        "type": "frameAnimation",
        "duration": 600,
        "id": "5247_2393_4"
    },
    {
        "name": "up",
        "frames": [
            39,
            40,
            41
        ],
        "type": "frameAnimation",
        "duration": 600,
        "id": "5967_8313_5"
    },
    {
        "name": "down",
        "frames": [
            3,
            4,
            5
        ],
        "type": "frameAnimation",
        "duration": 600,
        "id": "5828_3587_6"
    }
],
        gameObject: [
    {
        "spriteSheetId": "5186_2116_8",
        "width": 64,
        "height": 64,
        "name": "robot",
        "type": "gameObject",
        "frameAnimationIds": [
            "5103_5846_11",
            "5283_6546_12",
            "4276_2328_13",
            "8014_4428_14"
        ],
        "id": "2701_0003_9",
        "currFrameIndex": 37,
        "commonBehaviour": [
            {
                "name": "control4dir",
                "parameters": {
                    "velocity": 100,
                    "walkLeftAnimation": "left",
                    "walkRightAnimation": "right",
                    "walkUpAnimation": "up",
                    "walkDownAnimation": "down",
                    "idleLeftAnimation": "",
                    "idleRightAnimation": "",
                    "idleUpAnimation": "",
                    "idleDownAnimation": ""
                },
                "id": "8745_4645_22"
            },
            {
                "__events__": {},
                "name": "draggable",
                "parameters": {},
                "id": "2635_8746_13"
            }
        ]
    },
    {
        "spriteSheetId": "2116_8350_0",
        "width": 33,
        "height": 35,
        "name": "hero",
        "type": "gameObject",
        "commonBehaviour": [
            {
                "name": "move4dir",
                "parameters": {
                    "velocity": "10",
                    "walkLeftAnimation": "left",
                    "walkRightAnimation": "right",
                    "walkUpAnimation": "up",
                    "walkDownAnimation": "down",
                    "idleLeftAnimation": "",
                    "idleRightAnimation": "",
                    "idleUpAnimation": "",
                    "idleDownAnimation": ""
                },
                "id": "7406_0843_9"
            },
            {
                "name": "draggable",
                "parameters": {},
                "id": "7359_2567_4",
                "type": "commonBehaviour"
            }
        ],
        "frameAnimationIds": [
            "7096_7787_3",
            "5247_2393_4",
            "5967_8313_5",
            "5828_3587_6"
        ],
        "id": "9252_7967_1",
        "currFrameIndex": 5
    }
],
        scene: [
    {
        "name": "main",
        "type": "scene",
        "layerProps": [
            {
                "type": "layer",
                "protoId": "7353_5206_5",
                "id": "1183_5244_6"
            }
        ],
        "id": "4403_9462_4"
    },
    {
        "name": "second",
        "type": "scene",
        "layerProps": [
            {
                "type": "layer",
                "protoId": "8333_4477_2",
                "id": "7432_4491_3"
            }
        ],
        "id": "7139_4700_1"
    },
    {
        "name": "ww",
        "type": "scene",
        "layerProps": [],
        "id": "1794_2583_0"
    }
],
        layer:[
    {
        "name": "main",
        "type": "layer",
        "gameObjectProps": [
            {
                "type": "gameObject",
                "posX": 173,
                "posY": 101,
                "protoId": "2701_0003_9",
                "id": "9314_9085_11"
            },
            {
                "type": "gameObject",
                "posX": 140,
                "posY": 212,
                "protoId": "9252_7967_1",
                "id": "1517_9636_12"
            }
        ],
        "id": "7353_5206_5"
    },
    {
        "name": "main2",
        "type": "layer",
        "gameObjectProps": [],
        "id": "8333_4477_2"
    },
    {
        "name": "sd",
        "type": "layer",
        "gameObjectProps": [],
        "id": "7728_3928_7"
    }
],
        spriteSheet: [
    {
        "resourcePath": "resources/spriteSheet/robotSheet.png",
        "width": 1024,
        "height": 512,
        "name": "robotSheet",
        "numOfFramesH": 16,
        "numOfFramesV": 8,
        "type": "spriteSheet",
        "id": "5186_2116_8"
    },
    {
        "name": "globus",
        "resourcePath": "resources/spriteSheet/globus.png",
        "width": 320,
        "height": 256,
        "numOfFramesH": 5,
        "numOfFramesV": 4,
        "type": "spriteSheet",
        "id": "3881_6862_16"
    },
    {
        "name": "ga",
        "resourcePath": "resources/spriteSheet/ga.jpg",
        "width": 660,
        "height": 558,
        "numOfFramesH": 6,
        "numOfFramesV": 5,
        "type": "spriteSheet",
        "id": "1408_4249_0"
    },
    {
        "resourcePath": "resources/spriteSheet/hero.png",
        "width": 396,
        "height": 280,
        "name": "hero",
        "type": "spriteSheet",
        "numOfFramesH": 12,
        "numOfFramesV": 8,
        "id": "2116_8350_0"
    }
],
        gameProps: {
    "width": 400,
    "height": 300
}
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
    
    ve_local.scripts.gameObject['gl.js'] = function(){
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
    
    ve_local.scripts.gameObject['globus.js'] = function(){
        var clazz = ve.models.Behaviour.extend({

    onCreate: function(){
        this.onClick = function(){
            console.log('clicked on globus');
        }
    },

    onUpdate: function(time) {

    },

    onDestroy: function(){

    }

});;
        return clazz;
    };
    
    ve_local.scripts.gameObject['hero.js'] = function(){
        var clazz = ve.models.Behaviour.extend({

    onCreate: function(){
        var self = this;
        setInterval(function(){
            var dirNumber = ~~(Math.random()*4);
            var dir = 'Left';
            switch (dirNumber) {
                case 0:
                    dir = 'Right';
                    break;
                case 1:
                    dir = 'Up';
                    break;
                case 2:
                    dir = 'Down';
                    break;

                default:
                    break;
            }
            self.go(dir);
        },1000);

    },

    onUpdate: function(time) {
        var self = this;

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
    
    ve_local.scripts.gameObject['robot.js'] = function(){
        var clazz = ve.models.Behaviour.extend({


    onCreate: function () {
        var self = this;
        self.on('click',function(){
            console.log('click robot');
        });
    },

    onUpdate: function (time) {
        

        
    },

    onDestroy: function () {

    }
});



;
        return clazz;
    };
    
    ve_local.scripts.gameObject['ss.js'] = function(){
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
    
    ve_local.scripts.gameObject['w.js'] = function(){
        var clazz = ve.models.Behaviour.extend({

    onCreate: function(){
        this.onClick = function(){
            console.log('click');
        }
    },

    onUpdate: function(time) {

    },

    onDestroy: function(){

    }

});
;
        return clazz;
    };
    
    ve_local.scripts.gameObject['wq.js'] = function(){
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
    
    ve_local.scripts.gameObject['ws.js'] = function(){
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
    
    ve_local.scripts.scene['asd.js'] = function(){
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
    
    ve_local.scripts.scene['main.js'] = function(){
    var clazz = ve.models.Behaviour.extend({

    onCreate: function(){
        console.log('scene ',this.name, 'created');
    },

    onUpdate: function(time) {

    },

    onDestroy: function(){

    }

});
;
    return clazz;
    };
    
    ve_local.scripts.scene['second.js'] = function(){
    var clazz = ve.models.Behaviour.extend({

    onCreate: function(){
        console.log('scene ',this.name, 'created');
    },

    onUpdate: function(time) {

    },

    onDestroy: function(){

    }

});
;
    return clazz;
    };
    
    ve_local.scripts.scene['ww.js'] = function(){
    var clazz = ve.models.Behaviour.extend({

    onCreate: function(){
        console.log('scene ',this.name, 'created');
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

    ve_local.renderer = new ve_local.CanvasRenderer();
    ve.sceneManager = new ve_local.SceneManager();
    ve.keyboard = new ve_local.Keyboard();
    ve_local.bundle.prepareGameObjectScripts();


    window.addEventListener('load',function(){
        ve_local.renderer.init();
        ve.mouse = new ve_local.Mouse(ve_local.renderer.getCanvas());
        ve.sceneManager.setScene(ve_local.bundle.sceneList.get(0));
    });

})();