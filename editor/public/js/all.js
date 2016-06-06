(function() {

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
            var self =this;
            return new this.constructor(self.toJsonObj());
        },
        _init:function(){
            arguments && arguments[0] && this.fromJsonObject(arguments[0]);
        }
    });

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
        behaviourId:null,
        _behaviour: null,
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
            this._frameAnimations = new ve.collections.List();
            this.spriteSheetId && (this._spriteSheet = ve_local.bundle.spriteSheetList.getIf({id:this.spriteSheetId}));
            self._frameAnimations.clear();
            this.frameAnimationIds.forEach(function(id){
                var a = ve_local.bundle.frameAnimationList.getIf({id:id});
                a = a.clone(ve.models.FrameAnimation);
                a._gameObject = self;
                self._frameAnimations.add(a);
            });
            if (this.behaviourId) this._behaviour = ve_local.Bundle.behaviourList.getIf({id:this.behaviourId});
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

        update: function(time){
            if (!this._startTime) this._startTime = time;
            var delta = (time - this._startTime)%this.duration;
            var ind = ~~((this.frames.length)*delta/this.duration);
            var lastFrIndex = this._gameObject.currFrameIndex;
            if (lastFrIndex!=ind) {
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

    models.Behaviour = BaseModel.extend({
        type:'behaviour',
        code:''
    });

    ve.models = models;

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

    ve_local.Bundle = function(data){

        this.spriteSheetList = new ve.collections.List();
        this.gameObjectList = new ve.collections.List();
        this.frameAnimationList = new ve.collections.List();
        this.layerList = new ve.collections.List();
        this.sceneList = new ve.collections.List();
        this.layerList = new ve.collections.List();
        this.behaviourList = new ve.collections.List();
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
            ['audio','spriteSheet','frameAnimation','gameObject','layer','scene'].forEach(function(itm){
                toDataSource(ve.models[capitalize(itm)],data[itm],self[itm+'List']);
            });
            self.gameProps = data.gameProps;
            data = null;
        }

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
                        s.editData.currGameObjectInEdit.constructor();
                        resourceDao.createOrEditResource(
                            s.editData.currGameObjectInEdit,
                            ve.models.GameObject,
                            ve_local.bundle.gameObjectList,
                            null,true
                        );
                    } else {
                        s.editData.currGameObjectInEdit.constructor();
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
        }

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
            resourceDao.createOrEditResource(s.editData.currGameObjectInEdit,ve.models.GameObject,ve_local.bundle.gameObjectList);
        };

        s.showCreateAnimationDialog = function() {
            s.editData.currFrAnimationInEdit = new ve.models.FrameAnimation();
            s.editData.currFrAnimationInEdit._gameObject = s.editData.currGameObjectInEdit;
            uiHelper.showDialog('frmCreateAnimation');
        };

        s.deleteFrameAnimation = function(item) {
            resourceDao.deleteResource(item.id,item.type,function(){
                s.editData.currGameObjectInEdit.frameAnimationIds.splice(
                    s.editData.currGameObjectInEdit.frameAnimationIds.indexOf(item.id),
                    1
                );
                resourceDao.createOrEditResource(
                    s.editData.currGameObjectInEdit,
                    ve.models.GameObject,
                    ve_local.bundle.gameObjectList,
                    null,true
                );
            });
        };

        s.showEditAnimationDialog = function(item) {
            s.editData.currFrAnimationInEdit = item.clone(ve.models.FrameAnimation);
            s.editData.currFrAnimationInEdit._gameObject = s.editData.currGameObjectInEdit;
            uiHelper.showDialog('frmCreateAnimation');
        };

        s.deleteGameObjectFromCtxMenu = function(object){
            var layer = editData.currLayerInEdit;
            resourceDao.deleteObjectFromResource(layer.type,layer.protoId,'gameObjectProps',object.id);
            layer._gameObjects.removeIf({id:object.id});
            uiHelper.closeContextMenu();
        }

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

        s.showCreateSpriteSheetDialog = function(){
            editData.currSpriteSheetInEdit = new ve.models.SpriteSheet({});
            uiHelper.showDialog('frmCreateSpriteSheet');
        };

        s.showEditSpriteSheetDialog = function(currObj){
            editData.currSpriteSheetInEdit = currObj.clone(ve.models.SpriteSheet);
            editData.currSpriteSheetInEdit.calcFrameSize();
            uiHelper.showDialog('frmCreateSpriteSheet');
        };

        s.showCreateGameObjectDialog = function() {
            editData.currGameObjectInEdit = new ve.models.GameObject({spriteSheetId:ve_local.bundle.spriteSheetList.get(0) && ve_local.bundle.spriteSheetList.get(0).id});
            utils.recalcGameObjectSize(s.editData.currGameObjectInEdit);
            uiHelper.showDialog('frmCreateGameObject');
        };

        s.showEditGameObjectDialog = function(currObj) {
            editData.currGameObjectInEdit = currObj.clone(ve.models.GameObject);
            editData.currGameObjectInEdit.spriteSheet = ve_local.bundle.spriteSheetList.getIf({id: s.editData.currGameObjectInEdit.id});
            uiHelper.showDialog('frmCreateGameObject');
        };

        s.saveGameProps = function(){
            delete editData.gameProps.$objectId;
            delete editData.gameProps.objectId;
            resourceDao.saveGameProps(editData.gameProps);
        };

        s.showCreateSceneDialog = function(){
            editData.currSceneInEdit = new ve.models.Scene({});
            uiHelper.showDialog('frmCreateScene');
        };

        s.showEditSceneDialog = function(currObj){
            editData.currSceneInEdit = currObj.clone(ve.models.Scene);
            uiHelper.showDialog('frmCreateScene');
        };

        s.deleteScene = function(item){
            item._layers.clear();
            resourceDao.deleteResource(item.id,'scene');
        };

        s.deleteGameObjectFromLayer = function(layer,object){
            resourceDao.deleteObjectFromResource(layer.type,layer.protoId,'gameObjectProps',object.id);
            layer._gameObjects.removeIf({id:object.id});
        };

        s.showCreateLayerDialog = function(scene){
            editData.currLayerInEdit = new ve.models.Layer({sceneId:scene.id});
            editData.currLayerInEdit._scene = editData.currSceneInEdit;
            uiHelper.showDialog('frmCreateLayer');
        };

        s.showEditLayerDialog = function(e,layer){
            e.stopPropagation();
            editData.currLayerInEdit = layer.clone(ve.models.Layer);
            uiHelper.showDialog('frmCreateLayer');
        };

        s.deleteLayer = function(scene,l){
            l._gameObjects.clear();
            scene._layers.removeIf({id: l.id});
            resourceDao.deleteObjectFromResource(scene.type,scene.id,'layerProps', l.id);
        };

        (function(){

            Promise.
                resolve().
                then(function(){
                    return resourceDao.loadResources();
                }).
                then(function(){
                    if (!ve_local.bundle.sceneList.isEmpty()) s.editData.currSceneInEdit = ve_local.bundle.sceneList.get(0);
                    if (s.editData.currSceneInEdit) {
                        if (s.editData.currSceneInEdit._layers.size()) {
                            s.editData.currLayerInEdit = s.editData.currSceneInEdit._layers.get(0);
                        }
                    }
                    s.$apply();
                });

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
        resourceDao
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

        var _addNewGameObject = function(obj,x,y){
            resourceDao.createOrEditObjectInResource(
                editData.currLayerInEdit.type,
                editData.currLayerInEdit.protoId,
                'gameObjectProps',
                {
                    type:'gameObject',
                    posX:x,
                    posY:y,
                    protoId:obj.id
                },
                function(resp){
                    var newGameObj = obj.clone(ve.models.GameObject);
                    newGameObj.fromJsonObject({posX:x,posY:y,protoId:newGameObj.id,id:resp.id});
                    editData.currLayerInEdit._gameObjects.add(newGameObj);
                    editData.currSceneGameObjectInEdit = newGameObj;
                });
        };

        s.onGameObjectDropped = function(obj,draggable,e) {

            switch (draggable) {
                case 'gameObjFromLeftPanel':
                    _addNewGameObject(obj, e.x, e.y);
                    break;
                case 'gameObjFromSelf':
                    resourceDao.createOrEditObjectInResource(
                        editData.currLayerInEdit.type,
                        editData.currLayerInEdit.protoId,
                        'gameObjectProps',{
                            posX:e.x,
                            posY:e.y,
                            id:obj.id
                        }
                    );
                    obj.fromJsonObject({posX:e.x,posY:e.y});
                    editData.currSceneGameObjectInEdit = obj;
                    break;
            }
        };


        s.addGameObjectFromCtxMenu = function(gameObject,x,y){
            _addNewGameObject(gameObject, x, y);
            uiHelper.closeContextMenu();
        }

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
                    s.$apply(s.editData.currSpriteSheetInEdit);
                };
                img.src = fr.result;
            };
            fr.readAsDataURL(file);
        };

        s.createOrEditSpriteSheet = function(){
            resourceDao.createOrEditResource(s.editData.currSpriteSheetInEdit,ve.models.SpriteSheet,ve_local.bundle.spriteSheetList);
        };


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



    });

window.app.
    controller('topPanelCtrl', function ($scope, $http, $sce, editData, uiHelper, i18n, utils) {
        var s = $scope;
        s.editData = editData;
        s.uiHelper = uiHelper;
        s.i18n = i18n.getAll();
        s.utils = utils;

        var w;

        s.run = function(){
            $http({
                url: '/generate?r='+Math.random(),
                method: "GET"
            }).
            success(function (resp) {
                if (!w || w.closed) {
                    w = window.open('/out','','');
                }
                else {
                    w.location.reload();
                }
                w && w.focus();
            });
        };

        s.debug = function(){
            $http({
                url: '/generate?debug=1&r='+Math.random(),
                method: "GET"
            }).
            success(function (resp) {
                editData.isInDebugRunning = true;
                editData.debugFrameUrl = '/out';
            });
        };

        s.stop = function(){
            editData.isInDebugRunning = false;
            editData.debugFrameUrl = $sce.trustAsUrl('/about:blank');
        }


    });

app.directive('appContextMenu', function(uiHelper) {
    return {
        restrict: 'A',
        replace: false,
        link: function (scope, element, attrs) {
            var tmplId = attrs.appContextMenu;
            var model = scope.$eval(attrs.ngModel);
            element.bind('contextmenu', function (e) {
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
'use strict';

window.app

    .factory('editData', function ($sce) {

        var res = {};
        res.currGameObjectInEdit = null;
        res.currSpriteSheetInEdit = null;
        res.currFrAnimationInEdit = null;
        res.currSceneInEdit = null;
        res.currSceneGameObjectInEdit = null;
        res.currLayerInEdit = null;
        res.isInDebugRunning = false;
        res.debugFrameUrl = $sce.trustAsUrl('/about:blank');

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
                create:'create',
                edit:'edit',
                name:'name',
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
                scenes:'scenes',
                scene:'scene',
                run:'run',
                layers: 'layers',
                layer:'layer',
                debug: 'debug',
                stop: 'stop',
                addGameObject:'add game object',
                nothingToAdd:'nothing to add'
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



app


    .factory('resourceDao',function(
        $http,
        editData,
        uiHelper
    ){
        var self = this;
        this.loadResources = function(){
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
                    resolve();
                });
            });
        };
        this.createOrEditResource = function(currResourceInEdit,ResourceClass,resourceList,callBack, preserveDialog){
            var formData = new FormData();
            formData.append('file',currResourceInEdit._file);
            var model = {};
            currResourceInEdit.toJsonArr().forEach(function(item){
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
        this.deleteObjectFromResource = function(resourceType,resourceId,objectType,objectId){
            $http({
                url: '/deleteObjectFromResource',
                method: "POST",
                headers: {'Content-Type': 'application/json'},
                data: {resourceType:resourceType,resourceId:resourceId,objectType:objectType,objectId:objectId}
            }).
            success(function (res) {

            });
        };
        this.deleteResource = function(id,type,callBack){
            $http({
                url: '/resource/delete',
                method: "POST",
                data: {id:id,type:type}
            }).
            success(function (res) {
                editData[type+'List'].removeIf({id:id});
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
        this.createOrEditObjectInResource = function(resourceType,resourceId,objectType,object,callback){
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
                callback && callback(resp);
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
                                l.id = resp.id;
                                l.protoId = item.r.id;
                                l._scene = editData.currSceneInEdit;
                                editData.currSceneInEdit._layers.add(l);
                            }
                        );
                    }
                });
        };
        return this;
    });

window.app

    .factory('uiHelper', function () {
        var _;
        return _ = {
            toggle: function (currentVal, defaultVal) {
                return currentVal == defaultVal ? 0 : defaultVal;
            },
            _dialogsStack: [],
            ctxMenu:{
                name:null,
                x:null,
                y:null
            },
            showDialog: function(name){
                _.dialogName = name;
                _._dialogsStack.push(name);
            },
            closeDialog: function(){
                _._dialogsStack.pop();
                _.dialogName = _._dialogsStack[_._dialogsStack.length-1];
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
            var spriteSheet = editData.spriteSheetList.getIf({id:gameObject.spriteSheetId});
            if (!spriteSheet) return;
            spriteSheet.calcFrameSize();
            gameObject.width = ~~(spriteSheet.width / spriteSheet.numOfFramesH);
            gameObject.height = ~~(spriteSheet.height / spriteSheet.numOfFramesV);
            gameObject._spriteSheet = spriteSheet;
        };
        this.getGameObjectCss = function(gameObj){
            if (!gameObj) return {};
            return {
                'width':                 gameObj.width+'px',
                'height':                gameObj.height+'px',
                'background-image':      gameObj._spriteSheet && 'url('+gameObj._spriteSheet.resourcePath+')',
                'background-position-y': -gameObj._sprPosY+'px',
                'background-position-x': -gameObj._sprPosX+'px',
                'background-repeat':     'no-repeat'
            }
        };
        this.merge = function(a,b){
            var res = Object.create(a);
            Object.keys(b).forEach(function(key){
                res[key] = b[key];
            });
            return res;
        };

        this.getArray = function(num) {
            if (!num) return [];
            var res = [];
            for (var i=0;i<num;i++) {
                res.push(i);
            }
            return res;
        };

        window.addEventListener('message',function(e){
            console.log('accepted message',e);
        });

        return this;
    })








;

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
        i18n) {

        var s = $scope;
        s.editData = editData;
        s.uiHelper = uiHelper;
        s.i18n = i18n.getAll();


    });