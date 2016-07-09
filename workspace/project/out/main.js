
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
        _text:'',
        _font:null,
        setText: function(text) {
            this._chars = [];
            this._text = text;
            this.width = 0;
            for (var i= 0,max=text.length;i<max;i++) {
                this._chars.push(text[i]);
                var currSymbolInFont = this._font.fontContext.symbols[text[i]] || this._font.fontContext.symbols[' '];
                this.width+=currSymbolInFont.width;
            }
        },
        construct: function(){
            this._font = ve_local.bundle.fontList.find({name:'default'});
            this.setText(this._text||this.subType);
            this.height = this._font.fontContext.symbols[' '].height;
        }
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
    },
    {
        "name": "left",
        "frames": [
            12,
            13,
            14
        ],
        "type": "frameAnimation",
        "duration": 1000,
        "id": "3975_9138_141"
    },
    {
        "name": "right",
        "frames": [
            24,
            25,
            26
        ],
        "type": "frameAnimation",
        "duration": 1000,
        "id": "1018_3675_142"
    },
    {
        "name": "up",
        "frames": [
            36,
            37,
            38
        ],
        "type": "frameAnimation",
        "duration": 1000,
        "id": "9216_1203_143"
    },
    {
        "name": "down",
        "frames": [
            0,
            1,
            2
        ],
        "type": "frameAnimation",
        "duration": 1000,
        "id": "8747_6072_144"
    }
],
        
        font:[
    {
        "name": "default",
        "fontContext": {
            "symbols": {
                "0": {
                    "x": 148,
                    "y": 0,
                    "width": 13,
                    "height": 30
                },
                "1": {
                    "x": 161,
                    "y": 0,
                    "width": 9,
                    "height": 30
                },
                "2": {
                    "x": 171,
                    "y": 0,
                    "width": 12,
                    "height": 30
                },
                "3": {
                    "x": 183,
                    "y": 0,
                    "width": 13,
                    "height": 30
                },
                "4": {
                    "x": 196,
                    "y": 0,
                    "width": 12,
                    "height": 30
                },
                "5": {
                    "x": 209,
                    "y": 0,
                    "width": 13,
                    "height": 30
                },
                "6": {
                    "x": 222,
                    "y": 0,
                    "width": 13,
                    "height": 30
                },
                "7": {
                    "x": 236,
                    "y": 0,
                    "width": 9,
                    "height": 30
                },
                "8": {
                    "x": 246,
                    "y": 0,
                    "width": 13,
                    "height": 30
                },
                "9": {
                    "x": 259,
                    "y": 0,
                    "width": 13,
                    "height": 30
                },
                " ": {
                    "x": 0,
                    "y": 0,
                    "width": 4,
                    "height": 30
                },
                "!": {
                    "x": 4,
                    "y": 0,
                    "width": 6,
                    "height": 30
                },
                "\"": {
                    "x": 11,
                    "y": 0,
                    "width": 9,
                    "height": 30
                },
                "#": {
                    "x": 20,
                    "y": 0,
                    "width": 15,
                    "height": 30
                },
                "$": {
                    "x": 36,
                    "y": 0,
                    "width": 13,
                    "height": 30
                },
                "%": {
                    "x": 49,
                    "y": 0,
                    "width": 17,
                    "height": 30
                },
                "&": {
                    "x": 67,
                    "y": 0,
                    "width": 14,
                    "height": 30
                },
                "'": {
                    "x": 81,
                    "y": 0,
                    "width": 4,
                    "height": 30
                },
                "(": {
                    "x": 86,
                    "y": 0,
                    "width": 7,
                    "height": 30
                },
                ")": {
                    "x": 93,
                    "y": 0,
                    "width": 7,
                    "height": 30
                },
                "*": {
                    "x": 101,
                    "y": 0,
                    "width": 7,
                    "height": 30
                },
                "+": {
                    "x": 108,
                    "y": 0,
                    "width": 13,
                    "height": 30
                },
                ",": {
                    "x": 122,
                    "y": 0,
                    "width": 4,
                    "height": 30
                },
                "-": {
                    "x": 126,
                    "y": 0,
                    "width": 7,
                    "height": 30
                },
                ".": {
                    "x": 133,
                    "y": 0,
                    "width": 4,
                    "height": 30
                },
                "/": {
                    "x": 138,
                    "y": 0,
                    "width": 9,
                    "height": 30
                },
                ":": {
                    "x": 273,
                    "y": 0,
                    "width": 5,
                    "height": 30
                },
                ";": {
                    "x": 278,
                    "y": 0,
                    "width": 5,
                    "height": 30
                },
                "<": {
                    "x": 283,
                    "y": 0,
                    "width": 13,
                    "height": 30
                },
                "=": {
                    "x": 296,
                    "y": 0,
                    "width": 13,
                    "height": 30
                },
                ">": {
                    "x": 0,
                    "y": 30,
                    "width": 13,
                    "height": 30
                },
                "?": {
                    "x": 13,
                    "y": 30,
                    "width": 13,
                    "height": 30
                },
                "@": {
                    "x": 26,
                    "y": 30,
                    "width": 19,
                    "height": 30
                },
                "A": {
                    "x": 45,
                    "y": 30,
                    "width": 12,
                    "height": 30
                },
                "B": {
                    "x": 58,
                    "y": 30,
                    "width": 13,
                    "height": 30
                },
                "C": {
                    "x": 72,
                    "y": 30,
                    "width": 13,
                    "height": 30
                },
                "D": {
                    "x": 86,
                    "y": 30,
                    "width": 13,
                    "height": 30
                },
                "E": {
                    "x": 99,
                    "y": 30,
                    "width": 10,
                    "height": 30
                },
                "F": {
                    "x": 110,
                    "y": 30,
                    "width": 9,
                    "height": 30
                },
                "G": {
                    "x": 120,
                    "y": 30,
                    "width": 13,
                    "height": 30
                },
                "H": {
                    "x": 134,
                    "y": 30,
                    "width": 13,
                    "height": 30
                },
                "I": {
                    "x": 147,
                    "y": 30,
                    "width": 7,
                    "height": 30
                },
                "J": {
                    "x": 155,
                    "y": 30,
                    "width": 8,
                    "height": 30
                },
                "K": {
                    "x": 163,
                    "y": 30,
                    "width": 13,
                    "height": 30
                },
                "L": {
                    "x": 176,
                    "y": 30,
                    "width": 9,
                    "height": 30
                },
                "M": {
                    "x": 186,
                    "y": 30,
                    "width": 17,
                    "height": 30
                },
                "N": {
                    "x": 204,
                    "y": 30,
                    "width": 13,
                    "height": 30
                },
                "O": {
                    "x": 217,
                    "y": 30,
                    "width": 13,
                    "height": 30
                },
                "P": {
                    "x": 231,
                    "y": 30,
                    "width": 12,
                    "height": 30
                },
                "Q": {
                    "x": 244,
                    "y": 30,
                    "width": 13,
                    "height": 30
                },
                "R": {
                    "x": 257,
                    "y": 30,
                    "width": 13,
                    "height": 30
                },
                "S": {
                    "x": 271,
                    "y": 30,
                    "width": 12,
                    "height": 30
                },
                "T": {
                    "x": 284,
                    "y": 30,
                    "width": 11,
                    "height": 30
                },
                "U": {
                    "x": 295,
                    "y": 30,
                    "width": 13,
                    "height": 30
                },
                "V": {
                    "x": 0,
                    "y": 60,
                    "width": 13,
                    "height": 30
                },
                "W": {
                    "x": 13,
                    "y": 60,
                    "width": 20,
                    "height": 30
                },
                "X": {
                    "x": 33,
                    "y": 60,
                    "width": 12,
                    "height": 30
                },
                "Y": {
                    "x": 45,
                    "y": 60,
                    "width": 11,
                    "height": 30
                },
                "Z": {
                    "x": 57,
                    "y": 60,
                    "width": 9,
                    "height": 30
                },
                "[": {
                    "x": 67,
                    "y": 60,
                    "width": 7,
                    "height": 30
                },
                "\\": {
                    "x": 74,
                    "y": 60,
                    "width": 9,
                    "height": 30
                },
                "]": {
                    "x": 84,
                    "y": 60,
                    "width": 7,
                    "height": 30
                },
                "^": {
                    "x": 91,
                    "y": 60,
                    "width": 12,
                    "height": 30
                },
                "_": {
                    "x": 103,
                    "y": 60,
                    "width": 13,
                    "height": 30
                },
                "`": {
                    "x": 117,
                    "y": 60,
                    "width": 8,
                    "height": 30
                },
                "a": {
                    "x": 125,
                    "y": 60,
                    "width": 12,
                    "height": 30
                },
                "b": {
                    "x": 138,
                    "y": 60,
                    "width": 12,
                    "height": 30
                },
                "c": {
                    "x": 151,
                    "y": 60,
                    "width": 12,
                    "height": 30
                },
                "d": {
                    "x": 163,
                    "y": 60,
                    "width": 12,
                    "height": 30
                },
                "e": {
                    "x": 176,
                    "y": 60,
                    "width": 12,
                    "height": 30
                },
                "f": {
                    "x": 189,
                    "y": 60,
                    "width": 7,
                    "height": 30
                },
                "g": {
                    "x": 196,
                    "y": 60,
                    "width": 12,
                    "height": 30
                },
                "h": {
                    "x": 209,
                    "y": 60,
                    "width": 13,
                    "height": 30
                },
                "i": {
                    "x": 222,
                    "y": 60,
                    "width": 6,
                    "height": 30
                },
                "j": {
                    "x": 229,
                    "y": 60,
                    "width": 6,
                    "height": 30
                },
                "k": {
                    "x": 236,
                    "y": 60,
                    "width": 11,
                    "height": 30
                },
                "l": {
                    "x": 248,
                    "y": 60,
                    "width": 6,
                    "height": 30
                },
                "m": {
                    "x": 255,
                    "y": 60,
                    "width": 19,
                    "height": 30
                },
                "n": {
                    "x": 274,
                    "y": 60,
                    "width": 13,
                    "height": 30
                },
                "o": {
                    "x": 287,
                    "y": 60,
                    "width": 12,
                    "height": 30
                },
                "p": {
                    "x": 300,
                    "y": 60,
                    "width": 12,
                    "height": 30
                },
                "q": {
                    "x": 0,
                    "y": 90,
                    "width": 12,
                    "height": 30
                },
                "r": {
                    "x": 12,
                    "y": 90,
                    "width": 8,
                    "height": 30
                },
                "s": {
                    "x": 21,
                    "y": 90,
                    "width": 11,
                    "height": 30
                },
                "t": {
                    "x": 33,
                    "y": 90,
                    "width": 7,
                    "height": 30
                },
                "u": {
                    "x": 41,
                    "y": 90,
                    "width": 13,
                    "height": 30
                },
                "v": {
                    "x": 54,
                    "y": 90,
                    "width": 10,
                    "height": 30
                },
                "w": {
                    "x": 65,
                    "y": 90,
                    "width": 16,
                    "height": 30
                },
                "x": {
                    "x": 82,
                    "y": 90,
                    "width": 10,
                    "height": 30
                },
                "y": {
                    "x": 92,
                    "y": 90,
                    "width": 11,
                    "height": 30
                },
                "z": {
                    "x": 104,
                    "y": 90,
                    "width": 8,
                    "height": 30
                },
                "{": {
                    "x": 112,
                    "y": 90,
                    "width": 9,
                    "height": 30
                },
                "|": {
                    "x": 122,
                    "y": 90,
                    "width": 6,
                    "height": 30
                },
                "}": {
                    "x": 128,
                    "y": 90,
                    "width": 9,
                    "height": 30
                },
                "~": {
                    "x": 138,
                    "y": 90,
                    "width": 13,
                    "height": 30
                },
                "А": {
                    "x": 151,
                    "y": 90,
                    "width": 12,
                    "height": 30
                },
                "Б": {
                    "x": 163,
                    "y": 90,
                    "width": 13,
                    "height": 30
                },
                "В": {
                    "x": 177,
                    "y": 90,
                    "width": 13,
                    "height": 30
                },
                "Г": {
                    "x": 191,
                    "y": 90,
                    "width": 10,
                    "height": 30
                },
                "Д": {
                    "x": 201,
                    "y": 90,
                    "width": 16,
                    "height": 30
                },
                "Е": {
                    "x": 218,
                    "y": 90,
                    "width": 10,
                    "height": 30
                },
                "Ж": {
                    "x": 228,
                    "y": 90,
                    "width": 18,
                    "height": 30
                },
                "З": {
                    "x": 246,
                    "y": 90,
                    "width": 13,
                    "height": 30
                },
                "И": {
                    "x": 260,
                    "y": 90,
                    "width": 13,
                    "height": 30
                },
                "Й": {
                    "x": 273,
                    "y": 90,
                    "width": 13,
                    "height": 30
                },
                "К": {
                    "x": 287,
                    "y": 90,
                    "width": 13,
                    "height": 30
                },
                "Л": {
                    "x": 300,
                    "y": 90,
                    "width": 14,
                    "height": 30
                },
                "М": {
                    "x": 0,
                    "y": 120,
                    "width": 17,
                    "height": 30
                },
                "Н": {
                    "x": 17,
                    "y": 120,
                    "width": 13,
                    "height": 30
                },
                "О": {
                    "x": 31,
                    "y": 120,
                    "width": 13,
                    "height": 30
                },
                "П": {
                    "x": 45,
                    "y": 120,
                    "width": 13,
                    "height": 30
                },
                "Р": {
                    "x": 59,
                    "y": 120,
                    "width": 12,
                    "height": 30
                },
                "С": {
                    "x": 71,
                    "y": 120,
                    "width": 13,
                    "height": 30
                },
                "Т": {
                    "x": 85,
                    "y": 120,
                    "width": 11,
                    "height": 30
                },
                "У": {
                    "x": 97,
                    "y": 120,
                    "width": 11,
                    "height": 30
                },
                "Ф": {
                    "x": 108,
                    "y": 120,
                    "width": 19,
                    "height": 30
                },
                "Х": {
                    "x": 128,
                    "y": 120,
                    "width": 12,
                    "height": 30
                },
                "Ц": {
                    "x": 140,
                    "y": 120,
                    "width": 14,
                    "height": 30
                },
                "Ч": {
                    "x": 154,
                    "y": 120,
                    "width": 14,
                    "height": 30
                },
                "Ш": {
                    "x": 168,
                    "y": 120,
                    "width": 20,
                    "height": 30
                },
                "Щ": {
                    "x": 189,
                    "y": 120,
                    "width": 20,
                    "height": 30
                },
                "Ъ": {
                    "x": 210,
                    "y": 120,
                    "width": 15,
                    "height": 30
                },
                "Ы": {
                    "x": 226,
                    "y": 120,
                    "width": 20,
                    "height": 30
                },
                "Ь": {
                    "x": 246,
                    "y": 120,
                    "width": 13,
                    "height": 30
                },
                "Э": {
                    "x": 260,
                    "y": 120,
                    "width": 13,
                    "height": 30
                },
                "Ю": {
                    "x": 273,
                    "y": 120,
                    "width": 20,
                    "height": 30
                },
                "Я": {
                    "x": 294,
                    "y": 120,
                    "width": 13,
                    "height": 30
                },
                "а": {
                    "x": 0,
                    "y": 150,
                    "width": 12,
                    "height": 30
                },
                "б": {
                    "x": 12,
                    "y": 150,
                    "width": 13,
                    "height": 30
                },
                "в": {
                    "x": 25,
                    "y": 150,
                    "width": 12,
                    "height": 30
                },
                "г": {
                    "x": 38,
                    "y": 150,
                    "width": 8,
                    "height": 30
                },
                "д": {
                    "x": 47,
                    "y": 150,
                    "width": 15,
                    "height": 30
                },
                "е": {
                    "x": 62,
                    "y": 150,
                    "width": 12,
                    "height": 30
                },
                "ж": {
                    "x": 75,
                    "y": 150,
                    "width": 18,
                    "height": 30
                },
                "з": {
                    "x": 94,
                    "y": 150,
                    "width": 12,
                    "height": 30
                },
                "и": {
                    "x": 106,
                    "y": 150,
                    "width": 13,
                    "height": 30
                },
                "й": {
                    "x": 120,
                    "y": 150,
                    "width": 13,
                    "height": 30
                },
                "к": {
                    "x": 134,
                    "y": 150,
                    "width": 12,
                    "height": 30
                },
                "л": {
                    "x": 147,
                    "y": 150,
                    "width": 14,
                    "height": 30
                },
                "м": {
                    "x": 161,
                    "y": 150,
                    "width": 17,
                    "height": 30
                },
                "н": {
                    "x": 178,
                    "y": 150,
                    "width": 13,
                    "height": 30
                },
                "о": {
                    "x": 191,
                    "y": 150,
                    "width": 12,
                    "height": 30
                },
                "п": {
                    "x": 204,
                    "y": 150,
                    "width": 13,
                    "height": 30
                },
                "р": {
                    "x": 218,
                    "y": 150,
                    "width": 12,
                    "height": 30
                },
                "с": {
                    "x": 231,
                    "y": 150,
                    "width": 12,
                    "height": 30
                },
                "т": {
                    "x": 243,
                    "y": 150,
                    "width": 10,
                    "height": 30
                },
                "у": {
                    "x": 254,
                    "y": 150,
                    "width": 11,
                    "height": 30
                },
                "ф": {
                    "x": 265,
                    "y": 150,
                    "width": 19,
                    "height": 30
                },
                "х": {
                    "x": 284,
                    "y": 150,
                    "width": 10,
                    "height": 30
                },
                "ц": {
                    "x": 295,
                    "y": 150,
                    "width": 13,
                    "height": 30
                },
                "ч": {
                    "x": 0,
                    "y": 180,
                    "width": 12,
                    "height": 30
                },
                "ш": {
                    "x": 12,
                    "y": 180,
                    "width": 20,
                    "height": 30
                },
                "щ": {
                    "x": 32,
                    "y": 180,
                    "width": 20,
                    "height": 30
                },
                "ъ": {
                    "x": 53,
                    "y": 180,
                    "width": 14,
                    "height": 30
                },
                "ы": {
                    "x": 68,
                    "y": 180,
                    "width": 19,
                    "height": 30
                },
                "ь": {
                    "x": 87,
                    "y": 180,
                    "width": 13,
                    "height": 30
                },
                "э": {
                    "x": 100,
                    "y": 180,
                    "width": 12,
                    "height": 30
                },
                "ю": {
                    "x": 113,
                    "y": 180,
                    "width": 19,
                    "height": 30
                },
                "я": {
                    "x": 132,
                    "y": 180,
                    "width": 12,
                    "height": 30
                },
                "ѐ": {
                    "x": 145,
                    "y": 180,
                    "width": 11,
                    "height": 30
                },
                "ё": {
                    "x": 156,
                    "y": 180,
                    "width": 12,
                    "height": 30
                },
                "ђ": {
                    "x": 169,
                    "y": 180,
                    "width": 13,
                    "height": 30
                },
                "ѓ": {
                    "x": 182,
                    "y": 180,
                    "width": 8,
                    "height": 30
                },
                "є": {
                    "x": 191,
                    "y": 180,
                    "width": 12,
                    "height": 30
                },
                "ѕ": {
                    "x": 203,
                    "y": 180,
                    "width": 11,
                    "height": 30
                },
                "і": {
                    "x": 215,
                    "y": 180,
                    "width": 6,
                    "height": 30
                },
                "ї": {
                    "x": 222,
                    "y": 180,
                    "width": 6,
                    "height": 30
                },
                "ј": {
                    "x": 229,
                    "y": 180,
                    "width": 6,
                    "height": 30
                },
                "љ": {
                    "x": 236,
                    "y": 180,
                    "width": 20,
                    "height": 30
                },
                "њ": {
                    "x": 256,
                    "y": 180,
                    "width": 19,
                    "height": 30
                },
                "ћ": {
                    "x": 276,
                    "y": 180,
                    "width": 13,
                    "height": 30
                }
            },
            "width": 320,
            "height": 210
        },
        "type": "font",
        "fontColor": "#000000",
        "fontSize": 25,
        "fontFamily": "Impact",
        "resourcePath": "resources/font/default.png",
        "id": "6991_3497_4"
    }
],
        
        gameObject:[
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
        ],
        "groupName": "robot"
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
        "currFrameIndex": 5,
        "groupName": "man"
    },
    {
        "spriteSheetId": "2116_8350_0",
        "width": 33,
        "height": 35,
        "name": "man",
        "type": "gameObject",
        "commonBehaviour": [
            {
                "name": "move4dir",
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
                "id": "5226_4551_145",
                "type": "commonBehaviour"
            }
        ],
        "frameAnimationIds": [
            "3975_9138_141",
            "1018_3675_142",
            "9216_1203_143",
            "8747_6072_144"
        ],
        "id": "1414_8788_140",
        "groupName": "man"
    },
    {
        "spriteSheetId": "3881_6862_16",
        "width": 64,
        "height": 64,
        "name": "globus",
        "type": "gameObject",
        "commonBehaviour": [],
        "frameAnimationIds": [],
        "id": "4402_7102_4"
    }
],
        
        layer:[
    {
        "name": "main",
        "type": "layer",
        "gameObjectProps": [
            {
                "type": "gameObject",
                "posX": 283,
                "posY": 58,
                "protoId": "2701_0003_9",
                "id": "1583_8496_6",
                "spriteSheetId": "5186_2116_8",
                "width": 64,
                "height": 64,
                "name": "robot",
                "frameAnimationIds": [
                    "5103_5846_11",
                    "5283_6546_12",
                    "4276_2328_13",
                    "8014_4428_14"
                ],
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
                ],
                "groupName": "robot"
            },
            {
                "type": "gameObject",
                "posX": 166,
                "posY": 180,
                "protoId": "1414_8788_140",
                "id": "7283_1022_12",
                "spriteSheetId": "2116_8350_0",
                "width": 33,
                "height": 35,
                "name": "man",
                "commonBehaviour": [
                    {
                        "name": "move4dir",
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
                        "id": "5226_4551_145",
                        "type": "commonBehaviour"
                    }
                ],
                "frameAnimationIds": [
                    "3975_9138_141",
                    "1018_3675_142",
                    "9216_1203_143",
                    "8747_6072_144"
                ],
                "groupName": "man"
            },
            {
                "type": "gameObject",
                "posX": 197,
                "posY": 86,
                "protoId": "9252_7967_1",
                "id": "3079_2466_13",
                "spriteSheetId": "2116_8350_0",
                "width": 33,
                "height": 35,
                "name": "hero",
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
                "currFrameIndex": 5,
                "groupName": "man"
            },
            {
                "protoId": null,
                "type": "userInterface",
                "subType": "textField",
                "posX": 5,
                "posY": 6,
                "id": "3617_5578_67",
                "font": {
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
                },
                "height": 30,
                "width": 60
            }
        ],
        "id": "7353_5206_5"
    },
    {
        "name": "main2",
        "type": "layer",
        "gameObjectProps": [
            {
                "type": "gameObject",
                "posX": 167,
                "posY": 142,
                "protoId": "2701_0003_9",
                "id": "9642_8499_34"
            },
            {
                "type": "gameObject",
                "posX": 53,
                "posY": 217,
                "protoId": "9252_7967_1",
                "id": "0667_0499_35"
            },
            {
                "type": "gameObject",
                "posX": 241,
                "posY": 67,
                "protoId": "1414_8788_140",
                "id": "2552_3676_36"
            }
        ],
        "id": "8333_4477_2"
    },
    {
        "name": "sd",
        "type": "layer",
        "gameObjectProps": [],
        "id": "7728_3928_7"
    }
],
        
        scene:[
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
    }
],
        
        gameProps:{
    "width": 400,
    "height": 300
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
        this.velY = 0;
        this.gravity = 2;
    },

    onUpdate: function(time) {
        this.velY +=this.gravity;
        this.posY =this.posY + this.velY;
        if (this.posY>250) {
            this.posY = 250;
            this.velY=-this.velY*0.99;
        }    
    },

    onDestroy: function(){

    }

});
;
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
    
    ve_local.scripts.gameObject['man.js'] = function(){
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
        self.on('collide',function(obj){
            obj.kill();
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