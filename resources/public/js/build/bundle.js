(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = "<div>\n    <div\n        class=\"collapsible_header noSelect\"\n        @click=\"opened=!opened\"\n    >\n        {{title}}\n    </div>\n    <div\n            class=\"collapsible_content\"\n            :class=\"{opened:opened}\">\n        <slot></slot>\n    </div>\n</div>";

},{}],2:[function(require,module,exports){
module.exports = Vue.component('app-collapsible', {
    props: ['title'],
    template: require('./collapsible.html'),
    data: function(){
        return {
            opened: false
        }
    },
    methods: {

    }
});
},{"./collapsible.html":1}],3:[function(require,module,exports){
module.exports = "\n<div>\n    <app-collapsible :title=\"i18n.game\">\n        <form class=\"table width100\">\n            <div class=\"row\">\n                <div class=\"cell\">\n                    {{i18n.width}}\n                </div>\n                <div class=\"cell\">\n                    <input\n                            class=\"narrow\"\n                            v-model=\"editData.gameProps.width\"\n                            v-control=\"{form:form,model:editData.gameProps,prop:'width'}\"\n                            type=\"number\"\n                            min=\"1\"\n                            max=\"20000\"\n                            v-on:change=\"form.valid() && saveGameProps()\"/>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"cell\">\n                    {{i18n.height}}\n                </div>\n                <div class=\"cell\">\n                    <input\n                            class=\"narrow\"\n                            v-model=\"editData.gameProps.height\"\n                            type=\"number\"\n                            v-control=\"{form:form,model:editData.gameProps,prop:'height'}\"\n                            min=\"1\"\n                            max=\"20000\"\n                            v-on:change=\"form.valid() && saveGameProps()\"/>\n                </div>\n            </div>\n\n\n            <!--<div class=\"row\">-->\n                <!--<div class=\"cell\">-->\n                    <!--{{i18n.scaleStrategy}}-->\n                <!--</div>-->\n                <!--<div class=\"cell\">-->\n                    <!--<select class=\"narrow\" ng-model=\"editData.gameProps.scaleStrategy\" ng-change=\"saveGameProps()\">-->\n                        <!--<option value=\"{{value}}\" ng-repeat=\"(key,value) in scales\">{{key}}</option>-->\n                    <!--</select>-->\n                <!--</div>-->\n            <!--</div>-->\n\n            <!--<div class=\"row\">-->\n                <!--<div class=\"cell\">-->\n                    <!--{{i18n.preloadingScene}}-->\n                <!--</div>-->\n                <!--<div class=\"cell\">-->\n                    <!--<select class=\"narrow\" ng-model=\"editData.gameProps.preloadingSceneId\" ng-change=\"saveGameProps()\">-->\n                        <!--<option value=\"\">&#45;&#45;</option>-->\n                        <!--<option-->\n                                <!--ng-disabled=\"item.id==editData.gameProps.startSceneId\"-->\n                                <!--value=\"{{item.id}}\"-->\n                                <!--ng-repeat=\"item in editData.sceneList.rs\">{{item.name}}-->\n                        <!--</option>-->\n                    <!--</select>-->\n                <!--</div>-->\n            <!--</div>-->\n\n            <!--<div class=\"row\">-->\n                <!--<div class=\"cell\">-->\n                    <!--{{i18n.startScene}}-->\n                <!--</div>-->\n                <!--<div class=\"cell\">-->\n                    <!--<select class=\"narrow\" ng-model=\"editData.gameProps.startSceneId\" ng-change=\"saveGameProps()\">-->\n                        <!--<option-->\n                                <!--ng-disabled=\"item.id==editData.gameProps.preloadingSceneId\"-->\n                                <!--value=\"{{item.id}}\"-->\n                                <!--ng-repeat=\"item in editData.sceneList.rs\">{{item.name}}-->\n                        <!--</option>-->\n                    <!--</select>-->\n                <!--</div>-->\n            <!--</div>-->\n\n\n        </form>\n\n    </app-collapsible>\n</div>";

},{}],4:[function(require,module,exports){
Vue.component('app-game-props', {
    props: [],
    template: require('./gameProps.html'),
    data: function(){
        return {
            form:require('providers/validator').new(),
            editData: require('providers/editData'),
            i18n: require('providers/i18n').getAll()
        }
    },
    components: {
        appCollapsible: require('components/collapsible/collapsible')
    },
    methods: {
        saveGameProps: function(){
            console.log('save',JSON.stringify(this.editData.gameProps));
        }
    }
});
},{"./gameProps.html":3,"components/collapsible/collapsible":2,"providers/editData":7,"providers/i18n":9,"providers/validator":11}],5:[function(require,module,exports){
module.exports = "<div class=\"template\">\n    <div id=\"c\" class=\"split\">\n        <div id=\"a\" class=\"split split-horizontal content\">\n            <app-game-props/>\n        </div>\n        <div id=\"b\" class=\"split split-horizontal content\">\n            b\n        </div>\n        <div id=\"e\" class=\"split split-horizontal content\">e</div>\n    </div>\n    <div id=\"d\" class=\"split content\">d</div>\n</div>";

},{}],6:[function(require,module,exports){
require('./components/leftPanel/gameProps/gameProps');

var onMounted = function _onMounted(){
    Split(['#a', '#b', '#e'], {
        sizes: [15,70,15],
        gutterSize: 5,
        cursor: 'row-resize',
        minSize:10
    });
    var vertical = Split(['#c', '#d'], {
        direction: 'vertical',
        sizes: [94,5],
        gutterSize: 5,
        cursor: 'col-resize',
        minSize:10
    });
    window.addEventListener('resize',function(){
        vertical.setSizes([94,5]);
    });
};

module.exports = {
    template: require('./editor.html'),
    data: function () {
        return {}
    },
    mounted: function(){
        onMounted();
    },
    methods: {

    }
};
},{"./components/leftPanel/gameProps/gameProps":4,"./editor.html":5}],7:[function(require,module,exports){

var collections = _require('collections');

var res = {};

res.reset = function(){

    res.testEditData = 'edit data ok';
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
    res.currProjectInEdit = null;
    res.currTileIndexInEdit = null;
    res.gameProps = {};

    res.userInterfaceList = new collections.List();

    res.debugFrameUrl = '/about:blank';
    res.scriptEditorUrl = '';

    res.tileMapPosY = res.tileMapPosX = 0;

    res.projectName = undefined;
    res.projects = null;
    res.buildOpts = {
        debug: false,
        embedResources: false,
        embedScript: false,
        minify:false
    };
};

res.reset();

module.exports = res;

},{}],8:[function(require,module,exports){

module.exports.get = function(url,data,callBack){
    Vue.http.
        get(url, data).
        then(callBack, function(e){
            throw e;
        }
    );
};

module.exports.post = function(url,data,callBack){
    Vue.http.
        post(url, data).
        then(function(resp){
            callBack(resp.body);
        },
        function(e){
            throw e;
        }
    );
};
},{}],9:[function(require,module,exports){

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
        scaleStrategy:'scale strategy',
        spriteSheets:'sprite sheets',
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
        explorer:'explorer',
        description: 'description',
        colorBG:'scene background color',
        useBG:'use background color',
        angle:'angle',
        tileMap: 'tile map',
        noScene: 'create at least one scene',
        sceneNotSelected: 'select scene to drop object',
        noLayer: 'create at least one layer of current scene',
        selected: 'selected',
        fixedToCamera:'fixed to camera',
        preloadingScene: 'preloading scene',
        startScene: 'start scene'
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

module.exports = _i18n;
},{}],10:[function(require,module,exports){

var Resource = function(){

    var self = this;
    var editData = require('providers/editData');
    var http = require('providers/http');

    var bundle = _require('bundle');
    var collections = _require('collections');
    var CommonBehaviour = _require('commonBehaviour');
    var TextField = _require('textField');
    var Layer = _require('layer');

    var _loadResources = function(projectName){
        http.post('/resource/getAll',{projectName:projectName},function(response){
            bundle.prepare(response);
            Object.keys(bundle).forEach(function(key){
                if (bundle[key] && bundle[key].call) return;
                editData[key] = bundle[key];
            });
            editData.gameProps = bundle.gameProps;
            editData.commonBehaviourList = new collections.List();
            response.commonBehaviour.forEach(function(cb){
                editData.commonBehaviourList.add(new CommonBehaviour(cb));
            });
            editData.userInterfaceList.clear().add(new TextField({protoId:'0_0_1'}));
        });
    };
    this.loadProject = function(projectName){
        editData.reset();
        editData.projectName = projectName;
        document.title = projectName;
        sessionStorage.projectName = projectName;
        Promise.
            resolve().
            then(function(){
                return _loadResources(projectName);
            }).
            then(function(){
                if (!bundle.sceneList.isEmpty()) editData.currSceneInEdit = bundle.sceneList.get(0);
                if (editData.currSceneInEdit) {
                    if (editData.currSceneInEdit._layers.size()) {
                        editData.currLayerInEdit = editData.currSceneInEdit._layers.get(0);
                    }
                }
                location.href = '#/editor';
            });
    };
    //this.createOrEditResource = function(currResourceInEdit,ResourceClass,resourceList,callBack, preserveDialog){
    //    var formData = new FormData();
    //    formData.append('file',currResourceInEdit._file);
    //    var model = {};
    //    currResourceInEdit.toJSON_Array().forEach(function(item){
    //        model[item.key] = item.value;
    //    });
    //    formData.append('model',JSON.stringify(model));
    //    formData.append('projectName',editData.projectName);
    //    var op = currResourceInEdit.id?'edit':'create';
    //    $http({
    //        url: '/resource/'+op,
    //        method: "POST",
    //        data: formData,
    //        headers: {'Content-Type': undefined}
    //    }).
    //        success(function (item) {
    //            if (!(ResourceClass && resourceList)) {
    //                uiHelper.closeDialog();
    //                return;
    //            }
    //            if (op=='create') {
    //                var r = new ResourceClass(item);
    //                resourceList.add(r);
    //                callBack && callBack({type:'create',r:r});
    //            } else {
    //                var index = resourceList.indexOf({id:item.id});
    //                resourceList.rs[index] = new ResourceClass(item);
    //                callBack && callBack({type:'edit',r:resourceList.rs[index]});
    //            }
    //            !preserveDialog && uiHelper.closeDialog();
    //        });
    //};
    //this.createOrEditResourceSimple = function(objResource){
    //    this.createOrEditResource(objResource,objResource.constructor,bundle[objResource.type+'List']);
    //};
    //this.deleteObjectFromResource = function(resourceType,resourceId,objectType,objectId,callback){
    //    $http({
    //        url: '/deleteObjectFromResource',
    //        method: "POST",
    //        headers: {'Content-Type': 'application/json'},
    //        data: {
    //            resourceType:resourceType,
    //            resourceId:resourceId,
    //            objectType:objectType,
    //            objectId:objectId,
    //            projectName:editData.projectName
    //        }
    //    }).
    //        success(function (res) {
    //            callback && callback();
    //        });
    //};
    //this.deleteResource = function(id,type,callBack){
    //    $http({
    //        url: '/resource/delete',
    //        method: "POST",
    //        data: {
    //            id:id,
    //            type:type,
    //            projectName:editData.projectName
    //        }
    //    }).
    //        success(function (res) {
    //            editData[type+'List'].remove({id: id});
    //            callBack && callBack();
    //        });
    //};
    //this.saveGameProps = function(gameProps){
    //    var formData = new FormData();
    //    formData.append('model',JSON.stringify(gameProps));
    //    formData.append('projectName',editData.projectName);
    //    $http({
    //        url: '/gameProps/save',
    //        method: "POST",
    //        data: formData,
    //        headers: {'Content-Type': undefined}
    //    })
    //};
    //this.post = function(url,data,callBack){
    //    data.projectName = editData.projectName;
    //    $http({
    //        url: '/gameProps/save',
    //        method: "POST",
    //        data: data,
    //        headers: {'Content-Type': undefined}
    //    }).
    //        success(function (resp) {
    //            callBack && callBack(resp);
    //        });
    //};
    //this.postMultiPart = function(url,formData,callBack){
    //    $http({
    //        url: url,
    //        method: "POST",
    //        data: formData,
    //        headers: {'Content-Type': undefined}
    //    }).
    //        success(function (resp) {
    //            callBack && callBack(resp);
    //        });
    //};
    //this.createOrEditObjectInResource = function(resourceType,resourceId,objectType,object,callback){
    //    var op = object.id?'edit':'create';
    //    $http({
    //        url: '/createOrEditObjectInResource',
    //        method: "POST",
    //        data: {
    //            model:JSON.stringify(object),
    //            resourceId:resourceId,
    //            resourceType:resourceType,
    //            objectType:objectType,
    //            projectName:editData.projectName
    //        },
    //        headers: {'Content-Type': 'application/json'}
    //    }).
    //        success(function (resp) {
    //            callback && callback({type:op,r:resp});
    //        });
    //};
    //this.createOrEditLayer = function(l){
    //    self.createOrEditResource(l,Layer,bundle.layerList,
    //        function(item){
    //            if (item.type=='create') {
    //                self.createOrEditObjectInResource(
    //                    editData.currSceneInEdit.type,
    //                    editData.currSceneInEdit.id,
    //                    'layerProps',
    //                    {
    //                        type:'layer',
    //                        protoId:item.r.id
    //                    },
    //                    function(resp){
    //                        var l = editData.currLayerInEdit.clone(Layer);
    //                        l.id = resp.r.id;
    //                        l.protoId = item.r.id;
    //                        l._scene = editData.currSceneInEdit;
    //                        editData.currSceneInEdit._layers.add(l);
    //                    }
    //                );
    //            }
    //        });
    //};
    //this.createFile = function(name,path,content,callback){
    //    $http({
    //        url: '/createFile',
    //        method: "POST",
    //        data: {
    //            name:name,
    //            path:path,
    //            content:content,
    //            projectName: editData.projectName
    //        },
    //        headers: {'Content-Type': 'application/json'}
    //    }).
    //        success(function (resp) {
    //            callback && callback(resp);
    //        });
    //};
    //this.readFile = function(name,path,callback){
    //    $http({
    //        url: '/readFile',
    //        method: "POST",
    //        data: {
    //            name:name,
    //            path:path,
    //            projectName: editData.projectName
    //        },
    //        headers: {'Content-Type': 'application/json'}
    //    }).
    //        success(function (resp) {
    //            callback && callback(resp);
    //        });
    //};
    //this.getProjects = function(callback){
    //    $http({
    //        url: '/getProjects',
    //        method: "GET",
    //        headers: {'Content-Type': 'application/json'}
    //    }).
    //        success(function (resp) {
    //            callback && callback(resp);
    //        });
    //};
    //this.createProject = function(projectName,callback){
    //    $http({
    //        url: '/createProject',
    //        method: "POST",
    //        data: {projectName:projectName},
    //        headers: {'Content-Type': 'application/json'}
    //    }).
    //        success(function (resp) {
    //            callback && callback(resp);
    //        });
    //};
    //this.renameFolder = function(oldName,newName,callback){
    //    $http({
    //        url: '/renameFolder',
    //        method: "POST",
    //        data: {oldName:oldName,newName:newName},
    //        headers: {'Content-Type': 'application/json'}
    //    }).
    //        success(function (resp) {
    //            callback && callback(resp);
    //        });
    //};
    //this.deleteFolder = function(name,callback){
    //    $http({
    //        url: '/deleteFolder',
    //        method: "POST",
    //        data: {name:name},
    //        headers: {'Content-Type': 'application/json'}
    //    }).
    //        success(function (resp) {
    //            callback && callback(resp);
    //        });
    //};
    //
    //
    //this.setTile = function(scene,x,y,tileIndex){
    //    $http({
    //        url: '/setTile/',
    //        method: "POST",
    //        data: {
    //            sceneId:scene.id,
    //            x:x,
    //            y:y,
    //            tileIndex:tileIndex,
    //            projectName:editData.projectName
    //        },
    //        headers: {'Content-Type': 'application/json'}
    //    });
    //};
    //
    //
    (function(){
        sessionStorage.projectName = 'test';
        if (sessionStorage.projectName) {
            self.loadProject(sessionStorage.projectName);
        } else {
            location.href = '#/explorer';
        }
    })();
};

module.exports = new Resource();
},{"providers/editData":7,"providers/http":8}],11:[function(require,module,exports){

module.exports.new = function(){
    return {
        valid: function(){
            return true;
        }
    }
};
},{}],12:[function(require,module,exports){

require('providers/resource');

const router = new VueRouter({
    //mode: 'abstract',
    routes: [
        {
            path: '/editor',
            component: require('pages/editor/editor')
        }
    ]
});

const app = new Vue(
    {
        router:router
    }
).$mount('#app');

router.init(app);

},{"pages/editor/editor":6,"providers/resource":10}]},{},[12]);
