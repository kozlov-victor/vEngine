
var ve = {};
var ve_local = {};
ve_local.RESOURCE_NAMES = ["audio","spriteSheet","frameAnimation","gameObject","layer","scene","script"];

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
               callback(self.rs[i]);
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

    models.Behaviour = Class.extend({});

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

    models.Script = BaseModel.extend({
        type:'script',
        gameObjectId:null,
        code:''
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

        this.compileGameObjectScripts = function(){

            try {
                self.sceneList.forEach(function(scene){
                    scene._layers.forEach(function(layer){
                        layer._gameObjects.forEach(function(obj){
                            var script = self.scriptList.getIf({gameObjectId:obj.protoId});
                            obj._behaviour = new Function('var clazz = '+script.code+';return new clazz();')();
                            obj._behaviour.onCreate.apply(obj);
                        });
                    });
                });
            } catch(e){
                console.log(e);
                throw 'can not compile game object script: ' + e
            }

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

var CanvasRenderer = function(){

    var ctx;
    var scene;
    var self = this;
    var currTime = 0;
    var lastTime = 0;
    var reqAnimFrame = window.requestAnimationFrame||window.webkitRequestAnimationFrame||function(f){setTimeout(f,17)};

    this.init = function(){
        var canvas = document.querySelector('canvas');
        if (!canvas) {
            canvas = document.createElement('canvas');
            canvas.width = ve_local.bundle.gameProps.width;
            canvas.height = ve_local.bundle.gameProps.height;
            document.body.appendChild(canvas);
        }
        ctx = canvas.getContext('2d');
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

var SceneManager = function(){

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
        this.currScene = scene;
        preloadAndSet(scene);
    }
};

(function(){

    var keyboard = {};

    var buffer = {};
    var KEY_PRESSED = 1;
    var KEY_JUST_PRESSED = 2;
    var KEY_RELEASED = 0;
    var KEY_JUST_RELEASED = -1;

    keyboard.KEY_UP = 38;
    keyboard.KEY_DOWN = 40;
    keyboard.KEY_LEFT = 37;
    keyboard.KEY_RIGHT = 39;

    keyboard.isPressed = function(key){
        return buffer[key]>0;
    };

    keyboard.isJustPressed = function(key){
        return buffer[key]==KEY_JUST_PRESSED;
    };

    keyboard.isReleased = function(key) {
        return  buffer[key]<=0 || !buffer[key];
    };

    keyboard.isJustReleased = function(key) {
        return buffer[key] == KEY_JUST_RELEASED;
    };

    keyboard._onNextTick = function(){
        [
            keyboard.KEY_UP,
            keyboard.KEY_DOWN,keyboard.KEY_LEFT,
            keyboard.KEY_RIGHT
        ].forEach(function(key){
            if (buffer[key]==KEY_JUST_PRESSED) buffer[key] = KEY_PRESSED;
            else if (buffer[key]==KEY_JUST_RELEASED) buffer[key] = KEY_RELEASED;
        });
    };

    window.addEventListener('keydown',function(e){
        var code = e.keyCode;
        switch (code) {
            case keyboard.KEY_UP:
            case keyboard.KEY_DOWN:
            case keyboard.KEY_LEFT:
            case keyboard.KEY_RIGHT:
                buffer[code] = KEY_PRESSED;
                break;
        }
    });

    window.addEventListener('keyup',function(e){
        var code = e.keyCode;
        switch (code) {
            case keyboard.KEY_UP:
            case keyboard.KEY_DOWN:
            case keyboard.KEY_LEFT:
            case keyboard.KEY_RIGHT:
                buffer[code] = KEY_JUST_RELEASED;
                break;
        }
    });

    ve.keyboard = keyboard;

})();

(function(){

    ve_local.bundle = new ve_local.Bundle({
        audio: [],
        frameAnimation: [{"frames":[0,1,2,3,4,5,6,7],"name":"walkFwd","type":"frameAnimation","duration":1000,"id":"3652_6957_3"},{"name":"walkBack","frames":[7,6,5,4,3,2,1,0],"type":"frameAnimation","duration":1000,"id":"5239_1335_0"},{"frames":[18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0],"name":"rotate","type":"frameAnimation","duration":1000,"id":"7238_1883_3"},{"frames":[96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111],"name":"left","type":"frameAnimation","duration":1000,"id":"5103_5846_11"},{"name":"right","frames":[32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47],"type":"frameAnimation","duration":1000,"id":"5283_6546_12"},{"name":"up","frames":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],"type":"frameAnimation","duration":1000,"id":"4276_2328_13"},{"name":"down","frames":[64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79],"type":"frameAnimation","duration":1000,"id":"8014_4428_14"},{"name":"rotate","frames":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18],"type":"frameAnimation","duration":1000,"id":"5442_6561_21"}],
        gameObject: [{"spriteSheetId":"5186_2116_8","width":64,"height":64,"name":"robot","type":"gameObject","frameAnimationIds":["5103_5846_11","5283_6546_12","4276_2328_13","8014_4428_14"],"id":"2701_0003_9","currFrameIndex":34},{"spriteSheetId":"3881_6862_16","width":64,"height":64,"name":"globus","type":"gameObject","frameAnimationIds":["5442_6561_21"],"id":"5791_8960_17"}],
        scene: [{"name":"main","type":"scene","layerProps":[{"type":"layer","protoId":"7353_5206_5","id":"1183_5244_6"}],"id":"4403_9462_4"}],
        layer:[{"name":"main","type":"layer","gameObjectProps":[{"type":"gameObject","posX":164,"posY":114,"protoId":"2701_0003_9","id":"6864_8407_15"}],"id":"7353_5206_5"}],
        spriteSheet: [{"resourcePath":"resources/spriteSheet/robotSheet.png","width":1024,"height":512,"name":"robotSheet","numOfFramesH":16,"numOfFramesV":8,"type":"spriteSheet","id":"5186_2116_8"},{"name":"globus","resourcePath":"resources/spriteSheet/globus.png","width":320,"height":256,"numOfFramesH":5,"numOfFramesV":4,"type":"spriteSheet","id":"3881_6862_16"}],
        script:[{"gameObjectId":"1163_2963_1","code":"ve.models.Behaviour.extend({\n\n    walkAnimation:null,\n\n    onCreate: function(){\n        var self = this;\n        self.walkFwdAnimation = self.getFrAnimation('walkFwd');\n        self.walkBackAnimation = self.getFrAnimation('walkBack');\n        ve.keyboard.onKeyDown(function(key){\n            switch (key) {\n                case ve.keyboard.KEY_LEFT:\n                    self.posX-=1;\n                    self.walkBackAnimation.play();\n                    break;\n                case ve.keyboard.KEY_RIGHT:\n                    self.posX+=1;\n                    self.walkFwdAnimation.play();\n                    break;\n                default:\n                    break;\n            }\n        });\n        ve.keyboard.onKeyUp(function(){\n            self.stopFrAnimations();\n            self.setFrameIndex(0);\n        });\n    },\n\n    onUpdate: function(time) {\n       \n    },\n\n    onDestroy: function(){\n\n    }\n\n});","type":"script","id":"2988_2970_2"},{"gameObjectId":"1918_5880_1","code":"ve.models.Behaviour.extend({\n\n    onCreate: function(){\n        this.getFrAnimation('rotate').play();\n    },\n\n    onUpdate: function(time) {\n       // console.log(this.currFrameIndex);\n    },\n\n    onDestroy: function(){\n\n    }\n\n});\n","type":"script","id":"7263_5894_2"},{"gameObjectId":"2701_0003_9","code":"ve.models.Behaviour.extend({\n\n    onCreate: function(){\n        var self = this;\n        this.leftAnim = this.getFrAnimation('left');\n        this.rightAnim = this.getFrAnimation('right');\n        this.upAnim = this.getFrAnimation('up');\n        this.downAnim = this.getFrAnimation('down');\n        this.vel=100;\n    },\n\n    onUpdate: function(time) {\n        var self = this;\n        if (ve.keyboard.isPressed(ve.keyboard.KEY_UP)) {\n            self.velY = self.vel;\n            self.upAnim.play();\n        }\n        if (ve.keyboard.isPressed(ve.keyboard.KEY_DOWN)) {\n            self.velY = -self.vel;\n            self.downAnim.play();\n        }\n        if (ve.keyboard.isPressed(ve.keyboard.KEY_LEFT)) {\n            self.velX = self.vel;\n            self.leftAnim.play();\n        }\n        if (ve.keyboard.isPressed(ve.keyboard.KEY_RIGHT)) {\n            self.velX = -self.vel;\n            self.rightAnim.play();\n        }\n        \n        if (\n            ve.keyboard.isJustReleased(ve.keyboard.KEY_LEFT) ||\n            ve.keyboard.isJustReleased(ve.keyboard.KEY_RIGHT) ||\n            ve.keyboard.isJustReleased(ve.keyboard.KEY_UP) ||\n            ve.keyboard.isJustReleased(ve.keyboard.KEY_DOWN) \n        ) {\n            console.log('justreleased');\n            self.stopFrAnimations();\n            self.velX = 0;\n            self.velY = 0;\n        }\n    },\n\n    onDestroy: function(){\n\n    }\n\n});\n","type":"script","id":"1768_0050_10"},{"gameObjectId":"5791_8960_17","code":"ve.models.Behaviour.extend({\n\n    onCreate: function(){\n        this.getFrAnimation('rotate').play();\n    },\n\n    onUpdate: function(time) {\n\n    },\n\n    onDestroy: function(){\n\n    }\n\n});\n","type":"script","id":"7838_8971_18"}],
        gameProps: {"width":400,"height":300}
    });

    ve_local.bundle.prepare();
    ve_local.bundle.compileGameObjectScripts();

    ve_local.renderer = new CanvasRenderer();
    ve_local.sceneManager = new SceneManager();

    window.addEventListener('load',function(){
        ve_local.renderer.init();

        if (!ve_local.bundle.sceneList.size()) throw 'at least one scene must be created';

        // for test only
        //ve_local.bundle.sceneList.get(0)._layers.forEach(function(layer){
        //    layer._gameObjects.forEach(function(go){
        //        go._frameAnimations.get(0) && go._frameAnimations.get(0).play();
        //    });
        //});
        ve_local.sceneManager.setScene(ve_local.bundle.sceneList.get(0));
    });

})();