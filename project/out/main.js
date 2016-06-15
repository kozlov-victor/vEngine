
var ve = {};
var ve_local = {};
ve_local.RESOURCE_NAMES = ["audio","spriteSheet","frameAnimation","gameObject","layer","scene"];

window.debug = {};
window.debug.error = function(err){
   window.top.postMessage({err:err},'*');
   throw err;
};
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
        this.removeIf = function(obj){
            if (!obj) return;
            var index = self.indexOf(obj);
            if (index>-1) self.rs.splice(index,1);
        };
        this.getIf = function(obj){
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

    var BaseModel = Class.extend({
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
        _init:function(){
            arguments && arguments[0] && this.fromJsonObject(arguments[0]);
        }
    });

    models.Behaviour = BaseModel.extend({});

    var Resource = BaseModel.extend({
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

    models.GameObject = BaseModel.extend({
        type:'gameObject',
        spriteSheetId:null,
        _spriteSheet:null,
        _behaviour:null,
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
        construct: function(){
            var self = this;
            this._frameAnimations = new ve.collections.List();
            this.spriteSheetId && (this._spriteSheet = ve_local.bundle.spriteSheetList.getIf({id:this.spriteSheetId}));
            self._frameAnimations.clear();
            this.frameAnimationIds.forEach(function(id){
                var a = ve_local.bundle.frameAnimationList.getIf({id:id});
                a = a.clone(ve.models.FrameAnimation);
                a._gameObject = self;
                self._frameAnimations.add(a);
            });
        },
        getRect: function(){
            return {x:this.posX,y:this.posY,width:this.width,height:this.height};
        },
        getFrAnimation: function(animationName){
            return this._frameAnimations.getIf({name:animationName});
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

    models.FrameAnimation = BaseModel.extend({
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

    models.Layer = BaseModel.extend({
        type:'layer',
        gameObjectProps:[],
        _gameObjects:null,
        _scene:null,
        construct: function(){
            var self = this;
            self._gameObjects = new ve.collections.List();
            this.gameObjectProps.forEach(function(prop){
                var obj = ve_local.bundle.gameObjectList.getIf({id:prop.protoId});
                var objCloned = obj.clone(ve.models.GameObject);
                objCloned.fromJsonObject(prop);
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

    models.Scene = BaseModel.extend({
        type:'scene',
        layerProps:[],
        _layers:null,
        construct: function(){
            var self = this;
            self._layers = new ve.collections.List();
            this.layerProps.forEach(function(prop){
                var l = ve_local.bundle.layerList.getIf({id:prop.protoId});
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
        this.scriptList = new ve.collections.List();
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

        this.prepareGameObjectScripts = function(){

            self.sceneList.forEach(function(scene){
                scene._layers.forEach(function(layer){
                    layer._gameObjects.forEach(function(obj){
                        var script = ve_local.scripts[obj.name+'.js'];
                        if (!script) throw 'can not found script for ' +obj.name +' game object';
                        var behaviourClass = new script();
                        obj._behaviour = new behaviourClass();
                        console.log(obj._behaviour.toJsonArr());
                        obj._behaviour.toJsonArr().forEach(function(itm){
                            obj[itm.key]=itm.value;
                        });
                        obj._behaviour.onCreate.apply(obj);
                    });
                });
            });

        };

    };

})();
(function(){
    ve.utils = {};
    ve.utils.Queue = function(){
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
        var deltaTime = lastTime ? lastTime - currTime : 0;

        ctx.fillStyle="#FFFFFF";
        ctx.fillRect(0,0,ve_local.bundle.gameProps.width,ve_local.bundle.gameProps.height);
        scene._layers.forEach(function(layer){
            layer._gameObjects.forEach(function(obj){
                obj._behaviour.onUpdate.apply(obj,[deltaTime]);
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
        var scene = ve_local.bundle.sceneList.getIf({name:sceneName});
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

        if ('touchstart' in canvas) {
            canvas.ontouchstart = function(e){
                resolveClick(e);
            }
        } else {
            canvas.onclick = function(e){
                resolveClick(e);
            }
        }

        var resolveClick = function(e){
            var scene = ve.sceneManager.getCurrScene();
            if (!scene) return;
            var point = {x: e.clientX,y: e.clientY};
            scene._layers.someReversed(function(l){
                var found = false;
                l._gameObjects.someReversed(function(g){
                    if (
                        ve.Math.isPointInRect(point,g.getRect()) &&
                        g.onClick
                    ) {
                        g.onClick();
                        return found = true;
                    }
                });
                return found;
            })

        }

    };

})();

(function(){

    var math = {};

    ve.Math = math;

    math.isPointInRect = function(point,rect) {
        return  point.x>rect.x &&
                point.x<(rect.x+rect.width) &&
                point.y>rect.y &&
                point.y<(rect.y+rect.height);
    }

})();

(function(){

    ve_local.bundle = new ve_local.Bundle({
        audio: [],
        frameAnimation: [],
        gameObject: [{"spriteSheetId":"5787_3268_0","width":128,"height":128,"name":"del","type":"gameObject","frameAnimationIds":[],"id":"6529_9001_1"}],
        scene: [{"name":"main","type":"scene","layerProps":[{"type":"layer","protoId":"8264_1776_3","id":"7772_1801_4"}],"id":"9376_6186_2"}],
        layer:[{"name":"l1","type":"layer","gameObjectProps":[{"type":"gameObject","posX":349,"posY":66,"protoId":"6529_9001_1","id":"4503_7941_5"}],"id":"8264_1776_3"}],
        spriteSheet: [{"resourcePath":"resources/spriteSheet/del.png","width":128,"height":128,"name":"del","type":"spriteSheet","numOfFramesH":1,"numOfFramesV":1,"id":"5787_3268_0"}],
        gameProps: {"width":800,"height":600}
    });

    ve_local.scripts = {};

    
    ve_local.scripts['del.js'] = function(){
        var clazz = ve.models.Behaviour.extend({

    test:1,

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

    ve_local.bundle.prepareGameObjectScripts();

    ve_local.renderer = new ve_local.CanvasRenderer();
    ve.sceneManager = new ve_local.SceneManager();
    ve.keyboard = new ve_local.Keyboard();

    window.addEventListener('load',function(){
        ve_local.renderer.init();
        ve_local.mouse = new ve_local.Mouse(ve_local.renderer.getCanvas());
        ve.sceneManager.setScene(ve_local.bundle.sceneList.get(0));
    });

})();