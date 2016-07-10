
var ve = {};
var ve_local = {};
ve.commonBehaviour = {};
ve_local.RESOURCE_NAMES = ["audio","spriteSheet","frameAnimation","font","gameObject","layer","scene"];
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
        if (!el[key]) return true;
        if (el[key].call) return true;
        if (key.indexOf('_')==0 || key.indexOf('$$')==0) return true;
    };

    models.BaseModel = Class.extend({
        id:null,
        protoId:null,
        name:'',
        toJSON: function(){
            var res = {};
            for (var key in this) {
                if (isPropNotFit(this,key)) continue;
                res[key]=this[key];
            }
            return res;
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

    models.BaseGameObject = models.BaseModel.extend({
        type:'baseGameObject',
        groupName:'',
        posX:0,
        posY:0,
        width:0,
        height:0
    });

    models.GameObject = models.BaseGameObject.extend({
        type:'gameObject',
        spriteSheetId:null,
        _spriteSheet:null,
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
        kill: function(){
            this._layer._gameObjects.remove({id:this.id});
            this._layer._scene._allGameObjects.remove({id:this.id});
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
            var posX = this.posX+deltaX;
            var posY = this.posY+deltaY;
            ve_local.collider.check(this,posX,posY);
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
                dataSet.add(obj._spriteSheet);
            });
            return dataSet;
        }
    });

    models.Scene = models.BaseModel.extend({
        type:'scene',
        layerProps:[],
        _layers:null,
        _allGameObjects:null,
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
        setText: function(text) {
            this._chars = [];
            this.text = text;
            this.width = 0;
            for (var i= 0,max=text.length;i<max;i++) {
                this._chars.push(text[i]);
                var currSymbolInFont = this._font.fontContext.symbols[text[i]] || this._font.fontContext.symbols[' '];
                this.width+=currSymbolInFont.width;
            }
        },
        clone:function(){
            return this._super();
        },
        construct: function(){
            this._font = ve_local.bundle.fontList.find({name:'default'});
            this.setText(this.text||this.subType);
            this.height = this._font.fontContext.symbols[' '].height;
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
            var script = ve_local.scripts[model.type][model.name+'.js'];
            if (!script) throw 'can not found script for '+ model.name + ' ' + model.type;
            var BehaviourClass = script();
            model._behaviour = new BehaviourClass();
            model._behaviour.toJSON_Array().forEach(function(itm){
                model[itm.key]=itm.value;
            });
            model._behaviour.onCreate.apply(model);
            model.__updateIndividualBehaviour__ = function(deltaTime){
                model._behaviour.onUpdate.apply(model,[deltaTime]);
            }
        };

        var applyCommonBehaviour = function(model){
            var cbList = [];
            if (!model._commonBehaviour) return;
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
                scene.__onResourcesReady();
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
    };
    ns.capitalize = function(s){
        return s.substr(0,1).toUpperCase() +
            s.substr(1);
    };
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
                if (!obj) return;
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
        ve_local.collider.setUp();
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
                        g.trigger('click',{
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
            scene.trigger('mouseMove',{
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
    };

    ns.isRectIntersectRect = function(r1,r2) {
        var res =  ! ( r2.x > (r1.x+r1.width)
            || (r2.x+r2.width) < r1.x
            || r2.y > (r1.y+r1.height)
            || (r2.y+r2.height) < r1.y
        );
        return res;
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

    ve_local.Collider = function(){

        var gos;

        this.setUp = function(){
            var scene = ve.sceneManager.getCurrScene();
            gos = scene.getAllGameObjects();
        };

        this.check = function(obj,newX,newY){
            var res = gos.some(function(go){
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

    window.onerror = function(e){
        window.top.postMessage(e,'*');
        ve_local.renderer && ve_local.renderer.cancel();
    };

    window.debug = {};
    window.debug.error = function(err){
        window.top.postMessage({err:err},'*');
        throw err;
    };

})();

(function(){

    ve_local.bundle = new ve_local.Bundle({
        
        
        audio:[],
        
        spriteSheet:[
    {
        "resourcePath": "resources/spriteSheet/globus.png",
        "width": 320,
        "height": 256,
        "numOfFramesH": 5,
        "numOfFramesV": 4,
        "name": "globus",
        "type": "spriteSheet",
        "id": "8899_1840_8"
    }
],
        
        frameAnimation:[
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
            18
        ],
        "name": "rotate",
        "type": "frameAnimation",
        "duration": 1000,
        "id": "9805_5997_24"
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
        "spriteSheetId": "8899_1840_8",
        "width": 64,
        "height": 64,
        "name": "globus",
        "type": "gameObject",
        "commonBehaviour": [
            {
                "name": "draggable",
                "parameters": {},
                "id": "4156_4459_22",
                "type": "commonBehaviour"
            }
        ],
        "frameAnimationIds": [
            "9805_5997_24"
        ],
        "id": "1423_4987_21"
    }
],
        
        layer:[
    {
        "name": "main",
        "type": "layer",
        "gameObjectProps": [
            {
                "spriteSheetId": "8899_1840_8",
                "width": 64,
                "height": 64,
                "name": "globus",
                "type": "gameObject",
                "commonBehaviour": [
                    {
                        "name": "draggable",
                        "parameters": {},
                        "id": "4156_4459_22",
                        "type": "commonBehaviour"
                    }
                ],
                "frameAnimationIds": [
                    "9805_5997_24"
                ],
                "posX": 122,
                "posY": 74,
                "protoId": "1423_4987_21",
                "id": "0523_5685_23"
            }
        ],
        "id": "0518_0522_5"
    }
],
        
        scene:[
    {
        "name": "main",
        "type": "scene",
        "layerProps": [
            {
                "type": "layer",
                "protoId": "0518_0522_5",
                "id": "2776_0567_6"
            }
        ],
        "id": "3383_3824_4"
    }
],
        
        gameProps:{
    "width": 320,
    "height": 240
},
        
    });

    ve_local.scripts = {};
    ve_local.scripts.gameObject = {};
    ve_local.scripts.scene = {};

    
    ve_local.scripts.gameObject['globus.js'] = function(){
        var clazz = ve.models.Behaviour.extend({

    onCreate: function(){
        this.getFrAnimation('rotate').play();
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
    
    ve_local.scripts.scene['main.js'] = function(){
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

    ve_local.renderer = new ve_local.CanvasRenderer();
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