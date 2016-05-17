!function() {

    window.Class = function() {};

    Class.extend = function(props, staticProps) {

        var mixins = [];

        // если первый аргумент -- массив, то переназначить аргументы
        if ({}.toString.apply(arguments[0]) == "[object Array]") {
            mixins = arguments[0];
            props = arguments[1];
            staticProps = arguments[2];
        }

        // эта функция будет возвращена как результат работы extend
        function Instance() {
            this._init && this._init.apply(this, arguments);
            this.construct && this.construct();
        }

        // this -- это класс "перед точкой", для которого вызван extend (Animal.extend)
        // наследуем от него:
        Instance.prototype = Class.inherit(this.prototype);

        // constructor был затёрт вызовом inherit
        Instance.prototype.constructor = Instance;

        // добавим возможность наследовать дальше
        Instance.extend = Class.extend;

        // скопировать в Constructor статические свойства
        copyWrappedProps(staticProps, Instance, this);

        // скопировать в Constructor.prototype свойства из примесей и props
        for (var i = 0; i < mixins.length; i++) {
            copyWrappedProps(mixins[i], Instance.prototype, this.prototype);
        }
        copyWrappedProps(props, Instance.prototype, this.prototype);

        return Instance;
    };


    //---------- вспомогательные методы ----------

    // fnTest -- регулярное выражение,
    // которое проверяет функцию на то, есть ли в её коде вызов _super
    //
    // для его объявления мы проверяем, поддерживает ли функция преобразование
    // в код вызовом toString: /xyz/.test(function() {xyz})
    // в редких мобильных браузерах -- не поддерживает, поэтому регэксп будет /./
    var fnTest = /xyz/.test(function() {xyz}) ? /\b_super\b/ : /./;


    // копирует свойства из props в targetPropsObj
    // третий аргумент -- это свойства родителя
    //
    // при копировании, если выясняется что свойство есть и в родителе тоже,
    // и является функцией -- его вызов оборачивается в обёртку,
    // которая ставит this._super на метод родителя,
    // затем вызывает его, затем возвращает this._super
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

    // возвращает обёртку вокруг method, которая ставит this._super на родителя
    // и возвращает его потом
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

    // эмуляция Object.create для старых IE
    Class.inherit = Object.create || function(proto) {
            function F() {}
            F.prototype = proto;
            return new F;
        };
}();





var Collections = {};
Collections.Collection = function () {
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

Collections.Set = function(){
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
            self.add(key,another[key]);
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

var resourceSet = {
    audio: [],
    frameAnimation: [],
    gameObject: [{"spriteSheetId":"0851_1463476870431_0","width":320,"height":320,"name":"roo","type":"gameObject","frameAnimationIds":[],"id":"9334_1463476881447_1"}],
    scene: [{"name":"s1","type":"scene","gameObjectProps":[{"type":"gameObject","posX":248,"posY":7,"protoId":"9334_1463476881447_1","id":"3233_1463477794007_3"}],"id":"3769_1463477790645_2"}],
    spriteSheet: [{"resourcePath":"resources/spriteSheet/roo.png","width":1920,"height":1600,"numOfFramesH":6,"numOfFramesV":5,"name":"roo","type":"spriteSheet","id":"0851_1463476870431_0"}],
    gameProps: {"width":800,"height":600}
};

var Models = {};
Models.DataSource = null;
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
},{
    dataSource:null
});

var Resource = BaseModel.extend({
    resourcePath:''
});

Models.SpriteSheet = Resource.extend({
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

Models.GameObject = BaseModel.extend({
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
        var self = this;
        this._frameAnimations = new Collections.Collection();
        this.spriteSheetId && (this._spriteSheet = Models.DataSource.spriteSheetList.getIf({id:this.spriteSheetId}));
        self._frameAnimations.clear();
        this.frameAnimationIds.forEach(function(id){
            var a = Models.DataSource.frameAnimationList.getIf({id:id});
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

Models.FrameAnimation = BaseModel.extend({
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

Models.Scene = BaseModel.extend({
    type:'scene',
    gameObjectProps:[],
    _gameObjects:null,
    construct: function(){
        var self = this;
        self._gameObjects = new Collections.Collection();
        this.gameObjectProps.forEach(function(prop){
            var obj = Models.DataSource.gameObjectList.getIf({id:prop.protoId});
            obj.fromJsonObject(prop);
            self._gameObjects.add(new Models.GameObject(obj.clone(Models.GameObject)));
        });
    },
    getAllSpriteSheets:function() {
        var set = new Collections.Set();
        this._gameObjects.rs.forEach(function(obj){
            set.add(obj._spriteSheet);
        });
        return set;
    }

});

var DataSource = {
    spriteSheetList: new Collections.Collection(),
    gameObjectList: new Collections.Collection(),
    frameAnimationList: new Collections.Collection(),
    sceneList: new Collections.Collection(),
    gameProps: {}
};

var capitalize = function(s){
    return s.substr(0,1).toUpperCase() +
        s.substr(1);
};

var toDataSource = function(ResourceClass,dataList,resourceList){
    dataList.forEach(function(item){
        resourceList.add(new ResourceClass(item));
    });
};


DataSource.gameProps = resourceSet.gameProps;
Models.DataSource = DataSource;

['audio','spriteSheet','frameAnimation','gameObject','scene'].forEach(function(itm){
    toDataSource(Models[capitalize(itm)],resourceSet[itm],DataSource[itm+'List']);
});

resourceSet = null;



var CanvasRenderer = function(){

    var ctx;
    var scene;
    var self = this;
    var reqAnimFrame = window.requestAnimationFrame||window.webkitRequestAnimationFrame||function(f){setTimeout(f,17)};

    this.init = function(){
        var canvas = document.querySelector('canvas');
        if (!canvas) {
            canvas = document.createElement('canvas');
            canvas.width = DataSource.gameProps.width;
            canvas.height = DataSource.gameProps.height;
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
        console.log(
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
        scene._gameObjects.rs.forEach(function(obj){
            obj.update(Date.now());
            drawObject(obj);
        });
    };
    this.setScene = function(_scene){
        scene = _scene;
    };

    drawScene();

};

var renderer = new CanvasRenderer();
var Queue = function(){
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

var SceneManager = function(){

    var preloadAndSet = function(scene){
        var q = new Queue();
        q.onResolved = function(){
            renderer.setScene(scene);
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
        preloadAndSet(scene);
    }
};

var sceneManager = new SceneManager();

window.addEventListener('load',function(){
    renderer.init();
    if (DataSource.sceneList.size()==0) throw 'create scene first!';
    sceneManager.setScene(DataSource.sceneList.get(0));
});