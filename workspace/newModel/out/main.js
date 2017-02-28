var modules = {}, require = function(name){
    var moduleObj = modules[name];

    if (!moduleObj) {
        console.trace('can not found module with name ' + (name || '(name not specified)'));
        throw 'can not found module with name ' + (name || '(name not specified)');
    }
    if (!moduleObj.inited) initModuleObj(moduleObj);
    return moduleObj.inited.exports;
    function initModuleObj(moduleObj) {
        var module = {
            exports:{}
        };
        moduleObj.inited = module;
        moduleObj.code(module);
    }
};




window.require = require;

Array.prototype.remove = function(el){
    this.splice(this.indexOf(el),1);
};

window.URL = window.URL || window.webkitURL;

window.AudioContext = window.AudioContext || window.webkitAudioContext;

window.requestAnimationFrame =
    window.requestAnimationFrame||
    window.webkitRequestAnimationFrame||
    function(f){setTimeout(f,17)};
modules['class'] =
    {code: function(module){
    var exports = module.exports;
    	var Class = function() {};
	// проверка кирилицы
	Class.extend = function(props, staticProps) {
	
	    var mixins = [];
	    var firstArg = {};
	
	    if (arguments[0].slice) {
	        mixins = arguments[0];
	        props = arguments[1];
	        staticProps = arguments[2];
	    } else if (arguments[0].call) {
	        var obj = {};
	        firstArg.obj = obj;
	        firstArg.fn = props;
	        props(obj);
	        props = obj;
	    }
	
	    function Instance() {
	        firstArg.fn && firstArg.fn(firstArg.obj);
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
	
	exports.extend = Class.extend.bind(Class);
	
	
	
	
}};
modules['behaviour'] =
    {code: function(module){
    var exports = module.exports;
    	
	var commonBehaviour = {};
	
	
	exports.commonBehaviour = commonBehaviour;
	
	var scripts = {};
	scripts.gameObject = {};
	scripts.scene = {};
	
	
	
	exports.scripts = scripts;
	
	
}};
modules['collider'] =
    {code: function(module){
    var exports = module.exports;
    	
	var mathEx = require('mathEx');
	
	var gos;
	var scene;
	
	exports.setUp = function(){
	    scene = require('game').getCurrScene();
	    gos = scene.getAllGameObjects();
	};
	
	exports.manage = function(obj,newX,newY){
	    if (obj.pos.x==newX && obj.pos.y==newY) return;
	    if (!obj.rigid) {
	        obj.pos.x = newX;
	        obj.pos.y = newY;
	    } else {
	        var tileOn = scene.getTileAt(
	            newX + obj.getRect().width / 2,
	            newY + obj.getRect().height / 2
	        );
	        if (tileOn==16 || tileOn==17) return;
	    }
	    var hasCollision = false;
	    var all = gos.rs;
	    for (var i = 0,l = all.length;i<l;i++) {
	        var go = all[i];
	        if (obj==go) continue;
	
	        var objRect = obj.getRect();
	        objRect.x = newX;
	        objRect.y = newY;
	
	        if (mathEx.isRectIntersectRect(objRect,go.getRect())) {
	            if (obj.rigid && go.rigid) {
	                hasCollision = true;
	                obj.trigger('collide',go);
	                //console.log('collided',obj.name,go.name,go.rigid);
	            } else {
	                obj.trigger('overlap',go);
	            }
	        }
	    }
	    if (!hasCollision) {
	        obj.pos.x = newX;
	        obj.pos.y = newY;
	    }
	    return hasCollision;
	};
}};
modules['eventEmitter'] =
    {code: function(module){
    var exports = module.exports;
    	
	
	var EventEmitter = function(){
	
	    var events = {};
	
	    var _on = function(name,callBack){
	        events[name] = events[name] || [];
	        events[name].push(callBack);
	    };
	
	    this.on = function(eventNameOrList,callBack){
	        if (typeof  eventNameOrList == 'string') {
	            _on(eventNameOrList,callBack);
	        } else if (eventNameOrList.splice) {
	            eventNameOrList.forEach(function(eventName){
	                _on(eventName,callBack);
	            });
	        }
	
	    };
	
	    this.trigger = function(eventName,data){
	        var es = events[eventName];
	        if (!es) return;
	        var l = es.length;
	        while(l--){
	           es[l](data);
	        }
	    };
	};
	
	module.exports = EventEmitter;
}};
modules['consts'] =
    {code: function(module){
    var exports = module.exports;
    	
	module.exports.noop = function(){};
	module.exports.RESOURCE_NAMES = ["sound","spriteSheet","frameAnimation","font","gameObject","layer","scene","particleSystem"];
	
	exports.SCALE_STRATEGY = {
	    NO_SCALE:                       0,
	    CSS_PRESERVE_ASPECT_RATIO:      1,
	    HARDWARE_PRESERVE_ASPECT_RATIO: 2,
	    CSS_STRETCH:                    3,
	    HARDWARE_STRETCH:               4
	};
}};
modules['keyboard'] =
    {code: function(module){
    var exports = module.exports;
    	var buffer = {};
	var KEY_PRESSED = 1;
	var KEY_JUST_PRESSED = 2;
	var KEY_RELEASED = 0;
	var KEY_JUST_RELEASED = -1;
	
	exports.KEY_UP = 38;
	exports.KEY_DOWN = 40;
	exports.KEY_LEFT = 37;
	exports.KEY_RIGHT = 39;
	
	exports.emulatePress = function(code){
	    buffer[code] = KEY_PRESSED;
	};
	
	exports.emulateRelease = function(code){
	    buffer[code] = KEY_JUST_RELEASED;
	};
	
	exports.isPressed = function(key){
	    return buffer[key]>KEY_RELEASED;
	};
	
	exports.isJustPressed = function(key){
	    return buffer[key]==KEY_JUST_PRESSED;
	};
	
	exports.isReleased = function(key) {
	    return  buffer[key]<=KEY_RELEASED || !buffer[key];
	};
	
	exports.isJustReleased = function(key) {
	    return buffer[key] == KEY_JUST_RELEASED;
	};
	
	exports.update = function(){
	    if (window.canceled) return;
	    // 
	    [
	        exports.KEY_UP,
	        exports.KEY_DOWN,
	        exports.KEY_LEFT,
	        exports.KEY_RIGHT
	    ].forEach(function(key){
	            if (buffer[key]==KEY_JUST_PRESSED) buffer[key] = KEY_PRESSED;
	            else if (buffer[key]==KEY_JUST_RELEASED) buffer[key] = KEY_RELEASED;
	        });
	};
	
	window.addEventListener('keydown',function(e){
	    var code = e.keyCode;
	    switch (code) {
	        case exports.KEY_UP:
	        case exports.KEY_DOWN:
	        case exports.KEY_LEFT:
	        case exports.KEY_RIGHT:
	            buffer[code] = KEY_PRESSED;
	            break;
	    }
	});
	
	window.addEventListener('keyup',function(e){
	    var code = e.keyCode;
	    switch (code) {
	        case exports.KEY_UP:
	        case exports.KEY_DOWN:
	        case exports.KEY_LEFT:
	        case exports.KEY_RIGHT:
	            buffer[code] = KEY_JUST_RELEASED;
	            break;
	    }
	});
}};
modules['mouse'] =
    {code: function(module){
    var exports = module.exports;
    	
	var bundle = require('bundle');
	var renderer = require('renderer');
	var mathEx = require('mathEx');
	var game = require('game');
	var device = require('device');
	
	var objectsCaptured = {};
	
	var gameProps = bundle.gameProps;
	var globalScale = bundle.gameProps.globalScale;
	var canvas = renderer.getCanvas();
	
	if (device.isTouch) {
	    canvas.ontouchstart = function(e){
	        var l = e.touches.length;
	        while (l--){
	            resolveClick(e.touches[l]);
	        }
	    };
	    canvas.ontouchend = canvas.ontouchcancel = function(e){
	        var l = e.changedTouches.length;
	        while (l--){
	            resolveMouseUp(e.changedTouches[l]);
	        }
	    };
	    canvas.ontouchmove = function(e){
	        var l = e.touches.length;
	        while (l--){
	            resolveMouseMove(e.touches[l]);
	        }
	    }
	} else {
	    canvas.onmousedown = function(e){
	        (e.button === 0) && resolveClick(e);
	    };
	    canvas.onmouseup = function(e){
	        resolveMouseUp(e);
	    };
	    canvas.onmousemove = function(e){
	        resolveMouseMove(e);
	    }
	}
	
	var resolveScreenPoint = function(e){
	    return {
	        x: (e.clientX * device.scale - gameProps.left) / globalScale.x ,
	        y: (e.clientY * device.scale - gameProps.top) / globalScale.y ,
	        id: e.identifier || 0
	    };
	};
	
	var triggerEvent = function(e,name){
	    var scene = game.getCurrScene();
	    if (!scene) return;
	    var point = resolveScreenPoint(e);
	    scene._layers.someReversed(function(l){
	        var found = false;
	        l._gameObjects.someReversed(function(g){
	            if (
	                mathEx.isPointInRect(point,g.getScreenRect(),g.angle)
	            ) {
	                g.trigger(name,{
	                    screenX:point.x,
	                    screenY:point.y,
	                    objectX:point.x - g.pos.x,
	                    objectY:point.y - g.pos.y,
	                    id:point.id
	                });
	                point.object = g;
	                return found = true;
	            }
	        });
	        return found;
	    });
	    scene.trigger(name,{
	        screenX:point.x,
	        screenY:point.y,
	        id:point.id,
	        target:point.object
	    });
	    return point;
	};
	
	var resolveClick = function(e){
	    if (window.canceled) return;
	    // 
	    var point = triggerEvent(e,'click');
	    triggerEvent(e,'mouseDown');
	};
	
	var resolveMouseMove = function(e){
	    if (window.canceled) return;
	    // 
	    var point = triggerEvent(e,'mouseMove');
	    if (!point) return;
	    var lastMouseDownObject = objectsCaptured[point.id];
	    if (lastMouseDownObject && lastMouseDownObject!=point.object) {
	        lastMouseDownObject.trigger('mouseLeave');
	        delete objectsCaptured[point.id];
	    }
	    if (point.object && lastMouseDownObject!=point.object) {
	        point.object.trigger('mouseEnter');
	        objectsCaptured[point.id] = point.object;
	    }
	
	};
	
	var resolveMouseUp = function(e){
	     if (window.canceled) return;
	    var point = triggerEvent(e,'mouseUp');
	    if (!point) return;
	    var lastMouseDownObject = objectsCaptured[point.id];
	    if (!lastMouseDownObject) return;
	    lastMouseDownObject.trigger('mouseUp');
	    delete objectsCaptured[point.id];
	};
}};
modules['bundle'] =
    {code: function(module){
    var exports = module.exports;
    	
	var collections = require('collections');
	var consts = require('consts');
	var utils = require('utils');
	var behaviour = require('behaviour');
	
	exports.spriteSheetList = new collections.List();
	exports.gameObjectList = new collections.List();
	exports.frameAnimationList = new collections.List();
	exports.layerList = new collections.List();
	exports.sceneList = new collections.List();
	exports.layerList = new collections.List();
	exports.fontList = new collections.List();
	exports.soundList = new collections.List();
	exports.particleSystemList = new collections.List();
	
	exports.gameProps = {};
	
	
	var toDataSource = function(ResourceClass,dataList,resourceList){
	    resourceList.clear();
	    dataList.forEach(function(item){
	        resourceList.add(new ResourceClass(item));
	    });
	};
	
	
	exports.prepare = function(data){
	    if (!data) throw 'can not prepare bundle, no data provided';
	    console.log(data);
	    exports.gameProps = data.gameProps;
	    consts.RESOURCE_NAMES.forEach(function(itm){
	        toDataSource(
	            require(itm),
	            data[itm],
	            exports[itm+'List']);
	    });
	};
	
	var applyIndividualBehaviour = function(model){
	    var behaviourFn = behaviour && behaviour.scripts && behaviour.scripts[model.type] && behaviour.scripts[model.type][model.name+'.js'];
	    if (behaviourFn) {
	        var exports = model;
	        behaviourFn(exports);
	        model.__updateIndividualBehaviour__ = function(time){
	            exports.onUpdate(time);
	        }
	    } else {
	        model.__updateIndividualBehaviour__ = consts.noop;
	    }
	
	};
	
	var applyCommonBehaviour = function(model){
	
	    var exportsList = [];
	    if (!model._commonBehaviour || !model._commonBehaviour.size()) {
	        model.__updateCommonBehaviour__ = consts.noop;
	        return;
	    }
	    model._commonBehaviour.forEach(function(cb){
	        var exports = model;
	        behaviour.commonBehaviour[cb.name](exports,cb.parameters);
	        exportsList.push(exports);
	    });
	    model.__updateCommonBehaviour__ = function(){
	        exportsList.forEach(function(item){
	            item.onUpdate();
	        });
	    }
	};
	
	exports.applyBehaviourForScene = function(scene){
	    if (scene.__applied) return;
	    scene.__onResourcesReady();
	    exports.applyBehaviour(scene);
	    scene._layers.forEach(function(layer){
	        layer._gameObjects.forEach(function(gameObject){
	            exports.applyBehaviour(gameObject);
	        });
	    });
	    scene.__applied = true;
	};
	
	exports.applyBehaviour = function(model){
	    applyCommonBehaviour(model);
	    applyIndividualBehaviour(model);
	};
	
	exports.embeddedResources = {};
	exports.embeddedResources.data = {};
	exports.embeddedResources.isEmbedded = false;
	exports.shaders = {"basic":{"vertex.vert":"attribute vec4 a_position;\nattribute vec4 a_color;\nattribute vec2 a_texcoord;\n\nuniform mat4 u_matrix;\nuniform mat4 u_textureMatrix;\n\nvarying vec2 v_texcoord;\nvarying vec4 v_color;\n\nvoid main() {\n   gl_Position = u_matrix * a_position;\n   v_texcoord = (u_textureMatrix * vec4(a_texcoord, 0, 1)).xy;\n   v_color = a_color;\n   //gl_PointSize = 10.0;\n}","vertex2.vert":"attribute vec4 a_position;\r\nattribute vec2 a_texcoord;\r\nattribute vec3 a_normal;\r\n\r\nuniform mat4 u_modelMatrix;\r\nuniform mat4 u_projectionMatrix;\r\n\r\nvarying vec2 v_texcoord;\r\nvarying vec3 v_normal;\r\n\r\nvoid main() {\r\n\r\n  gl_Position = u_projectionMatrix * u_modelMatrix * a_position;\r\n  v_texcoord = a_texcoord;\r\n  v_normal = a_normal;\r\n}"},"color":{"fragment.frag":"precision mediump float;\n\nvarying vec2 v_texcoord;\n\nuniform sampler2D texture;\nuniform float u_alpha;\nuniform vec4 u_rgba;\n\nvoid main() {\n    gl_FragColor = u_rgba;\n}"},"multiColor":{"fragment.frag":"precision mediump float;\n\nvarying vec4 v_color;\n\nuniform sampler2D texture;\nuniform float u_alpha;\nuniform vec4 u_rgba;\n\nvoid main() {\n    gl_FragColor = v_color;\n}"},"texture":{"fragment.frag":"precision mediump float;\n\nvarying vec2 v_texcoord;\n\nuniform sampler2D texture;\nuniform float u_alpha;\n\n\nvoid main() {\n    gl_FragColor = texture2D(texture, v_texcoord);\n    gl_FragColor.a *= u_alpha;\n}","fragment2.frag":"precision highp float;\r\n\r\nvarying vec2 v_texcoord;\r\nvarying vec3 v_normal;\r\n\r\nuniform sampler2D texture;\r\nuniform float u_alpha;\r\nuniform mat4 u_modelMatrix;\r\n\r\n\r\nvoid main() {\r\n\r\n    vec3 lightDirection = normalize(vec3(-1,-1,1));\r\n    vec3 normalized = normalize((u_modelMatrix * vec4(v_normal,0)).xyz);\r\n    float lightFactor = max(0.5,dot(lightDirection,normalized));\r\n    gl_FragColor = texture2D(texture, v_texcoord);\r\n    gl_FragColor.rgb *= lightFactor;\r\n    gl_FragColor.a *= u_alpha;\r\n}"}};
}};
modules['resourceCache'] =
    {code: function(module){
    var exports = module.exports;
    	
	var cache = {};
	
	exports.get = function(name){
	    return cache[name];
	};
	
	exports.clear = function(name){
	    if (name) delete cache[name];
	    else cache = {};
	};
	
	exports.set = function(name,value){
	    if (!cache[name]) cache[name] = value;
	};
	
	exports.has = function(name){
	    return !!cache[name];
	};
	
	exports.getAll = function(){
	   return cache;
	};
	
	
	
	
}};
modules['resourceLoader'] =
    {code: function(module){
    var exports = module.exports;
    	
	var ResourceLoader = function(){
	
	    var self = this;
	
	    var Queue = require('queue');
	    var renderer = require('renderer');
	    var bundle = require('bundle');
	    var cache = require('resourceCache');
	    var audioPlayer = require('audioPlayer');
	
	    var q = new Queue();
	    q.onResolved = function(){
	        self.onComplete && self.onComplete();
	    };
	    q.onProgress = function(progress){
	        self.onProgress && self.onProgress(progress);
	    };
	
	    this.loadImage = function(resourcePath) {
	        if (cache.has(resourcePath)) return;
	        q.addTask(function(){
	            var path = bundle.embeddedResources.isEmbedded?
	                bundle.embeddedResources.data[resourcePath]:
	                resourcePath;
	            renderer.
	                getContextClass().
	                loadTextureInfo(
	                path,
	                {type:bundle.embeddedResources.isEmbedded?'base64':'',fileName:resourcePath},
	                function(resourcePath,progress){
	                    q.progressTask(resourcePath,progress);
	                },
	                function(textureInfo){
	                    cache.set(resourcePath,textureInfo);
	                    q.resolveTask(resourcePath);
	                });
	        },resourcePath);
	    };
	
	    this.loadSound = function(resourcePath,name){
	        if (cache.has(resourcePath)) return;
	        q.addTask(function(){
	            var path = bundle.embeddedResources.isEmbedded?
	                bundle.embeddedResources.data[resourcePath]:
	                resourcePath;
	            audioPlayer.loadSound(
	                path,
	                {type:bundle.embeddedResources.isEmbedded?'base64':''},
	                function(resourcePath,progress){
	                    q.progressTask(resourcePath,progress);
	                },
	                function(buffer){
	                    cache.set(resourcePath,buffer);
	                    q.resolveTask(resourcePath);
	                }
	            );
	        },resourcePath);
	    };
	
	    this.onComplete = null;
	    this.onProgress = null;
	
	    this.start = function(){
	        q.start();
	    };
	
	};
	
	
	module.exports = ResourceLoader;
}};
modules['device'] =
    {code: function(module){
    var exports = module.exports;
    	
	var isCocoonJS = !!navigator.isCocoonJS;
	exports.isCocoonJS = isCocoonJS;
	exports.scale = isCocoonJS?(window.devicePixelRatio||1):1;
	exports.isTouch = typeof window !== 'undefined' && 'ontouchstart' in window;
	
	exports.printDeviceInfo = function(){
	    for (var key in exports) {
	        if (!exports.hasOwnProperty(key)) continue;
	        if (exports[key].call) continue;
	        console.log(key + ':' + exports[key]);
	    }
	};
}};
modules['game'] =
    {code: function(module){
    var exports = module.exports;
    	
	var ResourceLoader = require('resourceLoader');
	var collider = require('collider');
	var keyboard = require('keyboard');
	var camera = require('camera');
	
	var ctx = null;
	
	var renderer = require('renderer');
	var bundle = require('bundle');
	var progressScene;
	var tweenMovies = [];
	
	exports.currScene = null;
	var booted = false;
	
	var bootEssentialResources = function(callBack){
	
	    if (booted) {
	        callBack();
	        return;
	    }
	
	    var loader = new ResourceLoader();
	    loader.onComplete = function(){
	        callBack();
	    };
	    if (bundle.gameProps.preloadingSceneId){
	        progressScene = bundle.sceneList.find({id:bundle.gameProps.preloadingSceneId});
	    }
	    if (progressScene) {
	        exports.currScene = progressScene;
	        progressScene.__onResourcesReady();
	        progressScene.
	            getAllSpriteSheets().
	            asArray().
	            forEach(function(spSheet){
	                loader.loadImage(spSheet.resourcePath);
	            });
	    }
	    bundle.fontList.forEach(function(font){
	        loader.loadImage(font.resourcePath);
	    });
	    loader.start();
	};
	
	var preloadSceneAndSetIt = function(scene){
	    if (progressScene) {
	        exports.currScene = progressScene;
	        bundle.applyBehaviourForScene(progressScene);
	        renderer.setScene(progressScene);
	        progressScene.onShow();
	        progressScene._allGameObjects.forEach(function(g){
	            g.onShow && g.onShow();
	        });
	        if (!renderer.isRunning()) renderer.start();
	    }
	
	    var loader = new ResourceLoader();
	    loader.onComplete = function(){
	        exports.currScene = scene;
	        bundle.applyBehaviourForScene(scene);
	        collider.setUp();
	        renderer.setScene(scene);
	        if (!renderer.isRunning()) {
	            renderer.isReady = true;
	            renderer.start();
	        }
	        scene.onShow();
	        scene._allGameObjects.forEach(function(g){
	            g.onShow && g.onShow();
	        });
	    };
	    loader.onProgress = function(e){
	        progressScene &&
	        progressScene.onProgress &&
	        progressScene.onProgress(e);
	    };
	
	    var allSprSheets = scene.getAllSpriteSheets();
	
	    bundle.particleSystemList.forEach(function(ps){
	        allSprSheets.add(ps._gameObject._spriteSheet);
	    });
	    allSprSheets.asArray().forEach(function(spSheet){
	        loader.loadImage(spSheet.resourcePath);
	    });
	    bundle.soundList.forEach(function(snd){
	        loader.loadSound(snd.resourcePath,snd.name);
	    });
	    loader.start();
	};
	
	exports.setCtx = function(_ctx){
	    ctx = _ctx;
	};
	
	exports.setScene = function(scene){
	    var Scene = require('scene');
	    if (!(scene instanceof Scene)) throw 'object '+scene+' is not a scene';
	    if (exports.currScene==scene) return;
	    bootEssentialResources(function(){
	        preloadSceneAndSetIt(scene);
	    });
	};
	
	exports.setSceneByName = function(sceneName){
	    if (!(sceneName && sceneName.substr)) throw 'object '+ sceneName + 'is not a string';
	    var bundle = require('bundle');
	    var scene = bundle.sceneList.find({name: sceneName});
	    if (!scene) throw 'no scene with name ' + sceneName + ' found';
	    exports.setScene(scene);
	};
	
	exports.getCurrScene = function(){
	    return exports.currScene;
	};
	
	exports.addTweenMovie = function(tm) {
	    tweenMovies.push(tm);
	};
	
	exports.update = function(currTime,deltaTime){
	    tweenMovies.forEach(function(tweenMovie){
	        if (tweenMovie.completed) {
	            tweenMovies.remove(tweenMovie);
	        }
	        tweenMovie._update(currTime);
	    });
	    camera.update(ctx);
	    exports.currScene.update(currTime,deltaTime);
	    keyboard.update();
	    bundle.particleSystemList.forEach(function(p){
	        p.update(currTime,deltaTime);
	    });
	};
}};
modules['audioNode'] =
    {code: function(module){
    var exports = module.exports;
    	
	var cache = require('resourceCache');
	
	var AudioNode = function(context){
	
	    var currSound = null;
	
	    this.setGain = function(){
	
	    };
	
	    this.play = function(sound){
	        currSound = sound;
	        context.play(cache.get(sound.resourcePath),sound._loop);
	    };
	
	    this.stop = function() {
	        context.stop();
	        currSound = null;
	    };
	
	    this.setGain = function(val){
	        context.setGain(val);
	    };
	
	    this.pause = function() {
	        context.pause();
	    };
	
	    this.resume = function(){
	        context.resume();
	    };
	
	    this.isFree = function() {
	        return context.isFree();
	    };
	
	    this.getCurrSound = function(){
	        return currSound;
	    }
	
	};
	
	module.exports = AudioNode;
	
}};
modules['audioNodeSet'] =
    {code: function(module){
    var exports = module.exports;
    	
	var AudioNode = require('audioNode');
	
	var AudioNodeSet = function(Context,numOfNodes){
	    var nodes = [];
	    for (var i = 0;i<numOfNodes;i++) {
	        nodes.push(new AudioNode(new Context()));
	    }
	
	    this.getFreeNode = function(){
	        for (var i = 0;i<numOfNodes;i++) {
	            if (nodes[i].isFree()) return nodes[i];
	        }
	        return null;
	    };
	
	    this.stopAll = function(){
	        for (var i = 0;i<numOfNodes;i++) {
	            nodes[i].stop();
	        }
	    };
	
	    this.pauseAll = function(){
	        for (var i = 0;i<numOfNodes;i++) {
	            nodes[i].pause();
	        }
	    };
	
	    this.resumeAll = function(){
	        for (var i = 0;i<numOfNodes;i++) {
	            nodes[i].resume();
	        }
	    };
	
	
	
	    this.getNodeBySound = function(sound){
	        for (var i = 0;i<numOfNodes;i++) {
	            if (nodes[i].getCurrSound()==sound) return nodes[i];
	        }
	        return null;
	    }
	
	};
	
	module.exports = AudioNodeSet;
}};
modules['audioPlayer'] =
    {code: function(module){
    var exports = module.exports;
    	
	var bundle = require('bundle');
	var AudioNodeSet = require('audioNodeSet');
	var cache = require('resourceCache');
	var HtmlAudioContext = require('htmlAudioContext');
	var WebAudioContext = require('webAudioContext');
	var FakeAudioContext = require('fakeAudioContext');
	var Tweenable = require('tweenable');
	var Tween = require('tween');
	
	var Context  = null;
	
	if (WebAudioContext.isAcceptable()) {
	    Context = WebAudioContext;
	} else if (HtmlAudioContext.isAcceptable()) {
	    Context = HtmlAudioContext;
	} else {
	    Context = FakeAudioContext;
	}
	
	var audioNodeSet = new AudioNodeSet(Context,5);
	var tweenable = new Tweenable({global:true});
	
	exports.loadSound = function( url, opts, progress, callback) {
	    Context.load(url,opts,progress,callback);
	};
	
	exports.play = function(sound){
	    var node = audioNodeSet.getFreeNode();
	    if (!node) return;
	    node.play(sound);
	};
	
	exports.stop = function(sound){
	    var node = audioNodeSet.getNodeBySound(sound);
	    if (!node) return;
	    node.stop();
	};
	
	exports.stopAll = function(){
	    audioNodeSet.stopAll();
	};
	
	exports.pauseAll = function(){
	    audioNodeSet.pauseAll();
	};
	
	exports.resumeAll = function(){
	    audioNodeSet.resumeAll();
	};
	
	exports.setGain = function(sound,toVal,time,easeFnName){
	    var node = audioNodeSet.getNodeBySound(sound);
	    if (!node) return;
	    if (time) {
	        var tween = new Tween(sound,{to:{_gain:toVal}},time,easeFnName);
	        tween.progress(function(s){
	            node.setGain(s._gain);
	        });
	        tweenable.tween(tween);
	    } else {
	        sound._gain = val;
	        node.setGain(sound._gain);
	    }
	};
}};
modules['fakeAudioContext'] =
    {code: function(module){
    var exports = module.exports;
    	
	var Class = require('class');
	
	var FakeAudioContext = Class.extend(
	    {
	        type:'fakeAudioContext',
	        play: function(buffer,loop){
	
	        },
	        stop: function(){
	
	        },
	        isFree: function(){
	            return false;
	        },
	        setGain: function(val){
	
	        },
	        pause: function(){
	
	        },
	        resume: function(){
	
	        },
	        construct: function(){
	            console.log('audio not supported');
	        }
	    },
	    {
	        isAcceptable: function(){
	            return true;
	        },
	        loadXhr: function(url,progress,callBack){
	            callBack(url);
	        },
	        loadBase64: function(url,callBack){
	            callBack(url);
	        }
	    }
	);
	
	
	module.exports = FakeAudioContext;
}};
modules['htmlAudioContext'] =
    {code: function(module){
    var exports = module.exports;
    	
	var utils = require('utils');
	var Class = require('class');
	
	var getCtx = function(){
	    var Ctx = window && window.Audio;
	    return new Ctx();
	} ;
	
	var HtmlAudioContext = Class.extend(
	    {
	        type:'htmlAudioContext',
	        free:true,
	        isFree: function(){
	           return this.free;
	        },
	        play: function(buffer,loop){
	            var self = this;
	            self.free = false;
	            self._ctx.src = buffer;
	            self._ctx.play();
	            self._ctx.onended = function(){
	                self.stop();
	            }
	
	        },
	        stop: function(){
	            this.free = true;
	        },
	        setGain: function(val){
	            this._ctx.volume = val;
	        },
	        pause: function(){
	            this._ctx.pause();
	        },
	        resume: function(){
	            throw "not implemented for now"
	        },
	        construct: function(){
	            this._ctx = getCtx();
	        }
	    },
	    {
	        isAcceptable: function(){
	            return !!(window && window.Audio);
	        },
	        load: function(url,opts,progress,callBack){
	            if (opts.type=='base64') {
	                callBack(url);
	            } else {
	                console.log('dfdffdf');
	                utils.loadBinary(url,progress,function(){
	                    callBack(url);
	                });
	            }
	
	        }
	    }
	);
	
	module.exports = HtmlAudioContext;
}};
modules['webAudioContext'] =
    {code: function(module){
    var exports = module.exports;
    	
	var utils = require('utils');
	var cache = require('resourceCache');
	var Class = require('class');
	
	var getCtx = (function(){
	    var ctx = window.AudioContext;
	    var res = null;
	    return function(){
	        if (ctx && !res) res = new ctx();
	        return res;
	    }
	})();
	
	var decode = function(buffer,callback){
	    getCtx().decodeAudioData(
	        buffer,
	        function(decoded) {
	            callback(decoded);
	        },
	        function(err){
	            window.showError(err);
	            // 
	        }
	    );
	};
	
	var WebAudioContext = Class.extend(
	    {
	        type:'webAudioContext',
	        _ctx:null,
	        _currSource: null,
	        _gainNode:null,
	        _free:true,
	        isFree: function(){
	            return this._free;
	        },
	        play: function(buffer,loop){
	            var self = this;
	            self._free = false;
	            var currSource = self._ctx.createBufferSource();
	            currSource.buffer = buffer;
	            currSource.loop = loop;
	            currSource.connect(self._gainNode);
	            currSource.start(0);
	            currSource.onended = function(){
	                self.stop();
	            };
	            self._currSource = currSource;
	        },
	        stop: function(){
	            var currSource = this._currSource;
	            if (currSource)  {
	                currSource.stop();
	                currSource.disconnect(this._gainNode);
	            }
	            this._currSource = null;
	            this._free = true;
	        },
	        setGain: function(val){
	            this._gainNode.gain.value = val;
	
	        },
	        pause: function(){
	            this._ctx.suspend();
	        },
	        resume: function(){
	            this._ctx.resume();
	        },
	        construct: function(){
	            this._ctx = getCtx();
	            this._gainNode = this._ctx.createGain();
	            this._gainNode.connect(this._ctx.destination);
	        }
	    },
	    {
	        isAcceptable: function(){
	            return !!(window && getCtx());
	        },
	        load: function(url,opts,progress,callBack){
	            if (opts.type=='base64') {
	                var buffer = require('base64').toByteArray(url).buffer;
	                decode(buffer,callBack);
	            } else {
	                utils.loadBinary(url,progress,function(buffer){
	                    decode(buffer,callBack);
	                });
	            }
	
	        }
	    }
	);
	
	module.exports = WebAudioContext;
}};
modules['base64'] =
    {code: function(module){
    var exports = module.exports;
    	// https://github.com/beatgammit/base64-js/blob/master/index.js
	
	'use strict';
	
	exports.byteLength = byteLength;
	exports.toByteArray = toByteArray;
	exports.fromByteArray = fromByteArray;
	
	var lookup = [];
	var revLookup = [];
	var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;
	
	var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
	for (var i = 0, len = code.length; i < len; ++i) {
	    lookup[i] = code[i];
	    revLookup[code.charCodeAt(i)] = i;
	}
	
	revLookup['-'.charCodeAt(0)] = 62;
	revLookup['_'.charCodeAt(0)] = 63;
	
	function placeHoldersCount(b64) {
	    var len = b64.length;
	    if (len % 4 > 0) {
	        throw new Error('Invalid string. Length must be a multiple of 4')
	    }
	
	    // the number of equal signs (place holders)
	    // if there are two placeholders, than the two characters before it
	    // represent one byte
	    // if there is only one, then the three characters before it represent 2 bytes
	    // this is just a cheap hack to not do indexOf twice
	    return b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0;
	}
	
	function byteLength(b64) {
	    // base64 is 4/3 + up to two characters of the original data
	    return b64.length * 3 / 4 - placeHoldersCount(b64);
	}
	
	function toByteArray(b64) {
	    var i, j, l, tmp, placeHolders, arr;
	    var len = b64.length;
	    placeHolders = placeHoldersCount(b64);
	
	    arr = new Arr(len * 3 / 4 - placeHolders);
	
	    // if there are placeholders, only get up to the last complete 4 chars
	    l = placeHolders > 0 ? len - 4 : len;
	
	    var L = 0;
	
	    for (i = 0, j = 0; i < l; i += 4, j += 3) {
	        tmp = (revLookup[b64.charCodeAt(i)] << 18) | (revLookup[b64.charCodeAt(i + 1)] << 12) | (revLookup[b64.charCodeAt(i + 2)] << 6) | revLookup[b64.charCodeAt(i + 3)];
	        arr[L++] = (tmp >> 16) & 0xFF;
	        arr[L++] = (tmp >> 8) & 0xFF;
	        arr[L++] = tmp & 0xFF
	    }
	
	    if (placeHolders === 2) {
	        tmp = (revLookup[b64.charCodeAt(i)] << 2) | (revLookup[b64.charCodeAt(i + 1)] >> 4);
	        arr[L++] = tmp & 0xFF;
	    } else if (placeHolders === 1) {
	        tmp = (revLookup[b64.charCodeAt(i)] << 10) | (revLookup[b64.charCodeAt(i + 1)] << 4) | (revLookup[b64.charCodeAt(i + 2)] >> 2);
	        arr[L++] = (tmp >> 8) & 0xFF;
	        arr[L++] = tmp & 0xFF;
	    }
	
	    return arr;
	}
	
	function tripletToBase64(num) {
	    return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F];
	}
	
	function encodeChunk(uint8, start, end) {
	    var tmp;
	    var output = [];
	    for (var i = start; i < end; i += 3) {
	        tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2]);
	        output.push(tripletToBase64(tmp));
	    }
	    return output.join('');
	}
	
	function fromByteArray(uint8) {
	    var tmp;
	    var len = uint8.length;
	    var extraBytes = len % 3 ;// if we have 1 byte left, pad 2 bytes
	    var output = '';
	    var parts = [];
	    var maxChunkLength = 16383; // must be multiple of 3
	
	    // go through the array every three bytes, we'll deal with trailing stuff later
	    for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
	        parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)));
	    }
	
	    // pad the end with zeros, but make sure to not forget the extra bytes
	    if (extraBytes === 1) {
	        tmp = uint8[len - 1];
	        output += lookup[tmp >> 2];
	        output += lookup[(tmp << 4) & 0x3F];
	        output += '==';
	    } else if (extraBytes === 2) {
	        tmp = (uint8[len - 2] << 8) + (uint8[len - 1]);
	        output += lookup[tmp >> 10];
	        output += lookup[(tmp >> 4) & 0x3F];
	        output += lookup[(tmp << 2) & 0x3F];
	        output += '=';
	    }
	
	    parts.push(output);
	
	    return parts.join('');
	}
}};
modules['collections'] =
    {code: function(module){
    var exports = module.exports;
    	
	var isObjectMatchTo = function(obj,matcher){
	    var isCandidate = true;
	    Object.keys(matcher).some(function(conditionKey){
	        if (obj[conditionKey]!=matcher[conditionKey]) {
	            isCandidate = false;
	            return true;
	        }
	    });
	    return isCandidate;
	};
	
	exports.List = function () {
	    var self = this;
	    this.rs = [];
	    this.add = function (r) {
	        self.rs.push(r);
	        return self;
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
	        return self;
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
	            var isMatch = isObjectMatchTo(item,obj);
	            if (isMatch) {
	                success = true;
	                return true;
	            }
	            i++;
	        });
	        return success?i:-1;
	    };
	    this.has = function(obj){
	        return this.indexOf(obj)>-1;
	    };
	    this.remove = function (obj){
	        if (!obj) return;
	        var index = self.indexOf(obj);
	        if (index>-1) self.rs.splice(index,1);
	    };
	    this.find = function (obj){
	        return self.rs[self.indexOf(obj)];
	    };
	    this.findAll = function (obj){
	        var res = [];
	        self.rs.forEach(function(item){
	            var isMatch = isObjectMatchTo(item,obj);
	            if (isMatch) res.push(item);
	        });
	        return res;
	    };
	    this.pop = function(){
	        return self.rs.pop();
	    };
	    this.fromJSON = function(json,ObjTypeClass){
	        var self = this;
	        try{
	            json.forEach(function(itm){
	                self.add(new ObjTypeClass(itm));
	            });
	        } catch(e){
	            console.error(e);
	        }
	    };
	    this.toJSON = function(){
	        var newArr = [];
	        var sanitize = function(obj){
	            if (obj && obj.$$hashKey) {
	                delete obj.$$hashKey;
	            }
	            //if (!(Object.keys(obj).length && obj.length)) return;
	            if (obj.split) return;
	            for (var i in obj) {
	                if (!obj[i]) continue;
	                if (!(obj.hasOwnProperty(i))) continue;
	                sanitize(obj[i]);
	            }
	            return obj;
	        };
	        this.rs.forEach(function(itm){
	            newArr.push(sanitize(itm.toJSON()));
	        });
	        return newArr;
	    };
	};
	
	exports.Set = function(){
	    var self = this;
	    this.rs = {};
	    this.add = function(itm){
	        if (!this.has(itm.id)) self.rs[itm.id]=itm;
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
}};
modules['mat4'] =
    {code: function(module){
    var exports = module.exports;
    	
	exports.makeIdentity = function () {
	    return [
	        1, 0, 0, 0,
	        0, 1, 0, 0,
	        0, 0, 1, 0,
	        0, 0, 0, 1
	    ];
	};
	
	exports.makeZToWMatrix = function(fudgeFactor) {
	    return [
	        1, 0, 0, 0,
	        0, 1, 0, 0,
	        0, 0, 1, fudgeFactor,
	        0, 0, 0, 1
	    ];
	};
	
	exports.make2DProjection = function(width, height, depth) {
	    // Note: This matrix flips the Y axis so 0 is at the top.
	    return [
	        2 / width, 0, 0, 0,
	        0, -2 / height, 0, 0,
	        0, 0, 2 / depth, 0,
	        -1, 1, 0, 1
	    ];
	};
	
	
	exports.ortho = function (left, right, bottom, top, near, far) {
	    var lr = 1 / (left - right),
	        bt = 1 / (bottom - top),
	        nf = 1 / (near - far);
	    var out = [];
	    out[0] = -2 * lr;
	    out[1] = 0;
	    out[2] = 0;
	    out[3] = 0;
	    out[4] = 0;
	    out[5] = -2 * bt;
	    out[6] = 0;
	    out[7] = 0;
	    out[8] = 0;
	    out[9] = 0;
	    out[10] = 2 * nf;
	    out[11] = 0;
	    out[12] = (left + right) * lr;
	    out[13] = (top + bottom) * bt;
	    out[14] = (far + near) * nf;
	    out[15] = 1;
	    return out;
	};
	
	exports.perspective = function (fovy, aspect, near, far) {
	    var f = 1.0 / Math.tan(fovy / 2),
	        nf = 1 / (near - far);
	    var out = [];
	
	    out[0] = f / aspect;
	    out[1] = 0;
	    out[2] = 0;
	    out[3] = 0;
	
	    out[4] = 0;
	    out[5] = f;
	    out[6] = 0;
	    out[7] = 0;
	
	    out[8] = 0;
	    out[9] = 0;
	    out[10] = (far + near) * nf;
	    out[11] = -1;
	
	    out[12] = 0;
	    out[13] = 0;
	    out[14] = (2 * far * near) * nf;
	    out[15] = 0;
	    return out;
	};
	
	
	exports.makeTranslation = function(tx, ty, tz) {
	    return [
	        1,  0,  0,  0,
	        0,  1,  0,  0,
	        0,  0,  1,  0,
	        tx, ty, tz,  1
	    ];
	};
	
	exports.makeXRotation = function(angleInRadians) {
	    var c = Math.cos(angleInRadians);
	    var s = Math.sin(angleInRadians);
	
	    return [
	        1, 0, 0, 0,
	        0, c, s, 0,
	        0, -s, c, 0,
	        0, 0, 0, 1
	    ];
	};
	
	exports.makeYRotation = function(angleInRadians) {
	    var c = Math.cos(angleInRadians);
	    var s = Math.sin(angleInRadians);
	
	    return [
	        c, 0, -s, 0,
	        0, 1, 0, 0,
	        s, 0, c, 0,
	        0, 0, 0, 1
	    ];
	};
	
	exports.makeZRotation = function(angleInRadians) {
	    var c = Math.cos(angleInRadians);
	    var s = Math.sin(angleInRadians);
	    return [
	        c, s, 0, 0,
	        -s, c, 0, 0,
	        0, 0, 1, 0,
	        0, 0, 0, 1
	    ];
	};
	
	exports.makeScale = function(sx, sy, sz) {
	    return [
	        sx, 0,  0,  0,
	        0, sy,  0,  0,
	        0,  0, sz,  0,
	        0,  0,  0,  1
	    ];
	};
	
	exports.matrixMultiply = function(a, b) {
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
	};
}};
modules['mathEx'] =
    {code: function(module){
    var exports = module.exports;
    	var Vec2 = require('vec2');
	
	exports.isPointInRect = function(point,rect,angle) {
	    if (angle) {
	        var vec2 = new Vec2(point.x - rect.x - rect.width/2,point.y - rect.y - rect.height/2);
	        vec2.setAngle(vec2.getAngle() - angle);
	        point = {x:vec2.getX() + point.x,y:vec2.getY() + point.y};
	
	    }
	    var res =  point.x>rect.x &&
	        point.x<(rect.x+rect.width) &&
	        point.y>rect.y &&
	        point.y<(rect.y+rect.height);
	    return res;
	};
	
	exports.isRectIntersectRect = function(r1,r2) {
	    return (
	        !( r2.x > (r1.x+r1.width)
	        || (r2.x+r2.width) < r1.x
	        || r2.y > (r1.y+r1.height)
	        || (r2.y+r2.height) < r1.y
	        )
	    );
	};
	
	exports.radToDeg = function(rad){
	    return rad *  180 / Math.PI;
	};
	
	exports.degToRad = function(deg) {
	    return deg *  Math.PI / 180;
	};
	
	exports.random = function(min, max){
	    if (min>max) {
	        var tmp = min;
	        min = max;
	        max = tmp;
	    }
	    var res = Math.random() * (max - min) + min;
	    if (res>max) res = max;
	    else if (res<min) res = min;
	    return res;
	};
	
	exports.getNormalizedVectorFromPoints = function(pointA,pointB) {
	    var angle = Math.atan2(pointB.y-pointA.y,pointB.x-pointA.x);
	    return {
	        x:Math.cos(angle),
	        y:Math.sin(angle)
	    }
	};
	
	var ease = {};
	
	// simple linear tweening - no easing, no acceleration
	ease.linear = function (t, b, c, d) {
	    return c*t/d + b;
	};
	
	// quadratic easing in - accelerating from zero velocity
	ease.easeInQuad = function (t, b, c, d) {
	    t /= d;
	    return c*t*t + b;
	};
	
	// quadratic easing out - decelerating to zero velocity
	ease.easeOutQuad = function (t, b, c, d) {
	    t /= d;
	    return -c * t*(t-2) + b;
	};
	
	// quadratic easing in/out - acceleration until halfway, then deceleration
	ease.easeInOutQuad = function (t, b, c, d) {
	    t /= d/2;
	    if (t < 1) return c/2*t*t + b;
	    t--;
	    return -c/2 * (t*(t-2) - 1) + b;
	};
	
	// cubic easing in - accelerating from zero velocity
	ease.easeInCubic = function (t, b, c, d) {
	    t /= d;
	    return c*t*t*t + b;
	};
	
	// cubic easing out - decelerating to zero velocity
	ease.easeOutCubic = function (t, b, c, d) {
	    t /= d;
	    t--;
	    return c*(t*t*t + 1) + b;
	};
	
	// cubic easing in/out - acceleration until halfway, then deceleration
	ease.easeInOutCubic = function (t, b, c, d) {
	    t /= d/2;
	    if (t < 1) return c/2*t*t*t + b;
	    t -= 2;
	    return c/2*(t*t*t + 2) + b;
	};
	
	// quartic easing in - accelerating from zero velocity
	ease.easeInQuart = function (t, b, c, d) {
	    t /= d;
	    return c*t*t*t*t + b;
	};
	
	// quartic easing out - decelerating to zero velocity
	ease.easeOutQuart = function (t, b, c, d) {
	    t /= d;
	    t--;
	    return -c * (t*t*t*t - 1) + b;
	};
	
	// quartic easing in/out - acceleration until halfway, then deceleration
	ease.easeInOutQuart = function (t, b, c, d) {
	    t /= d/2;
	    if (t < 1) return c/2*t*t*t*t + b;
	    t -= 2;
	    return -c/2 * (t*t*t*t - 2) + b;
	};
	
	// quintic easing in - accelerating from zero velocity
	ease.easeInQuint = function (t, b, c, d) {
	    t /= d;
	    return c*t*t*t*t*t + b;
	};
	
	// quintic easing out - decelerating to zero velocity
	ease.easeOutQuint = function (t, b, c, d) {
	    t /= d;
	    t--;
	    return c*(t*t*t*t*t + 1) + b;
	};
	
	// quintic easing in/out - acceleration until halfway, then deceleration
	ease.easeInOutQuint = function (t, b, c, d) {
	    t /= d/2;
	    if (t < 1) return c/2*t*t*t*t*t + b;
	    t -= 2;
	    return c/2*(t*t*t*t*t + 2) + b;
	};
	
	
	// sinusoidal easing in - accelerating from zero velocity
	ease.easeInSine = function (t, b, c, d) {
	    return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	};
	
	
	
	// sinusoidal easing out - decelerating to zero velocity
	ease.easeOutSine = function (t, b, c, d) {
	    return c * Math.sin(t/d * (Math.PI/2)) + b;
	};
	
	
	
	// sinusoidal easing in/out - accelerating until halfway, then decelerating
	ease.easeInOutSine = function (t, b, c, d) {
	    return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	};
	
	// exponential easing in - accelerating from zero velocity
	ease.easeInExpo = function (t, b, c, d) {
	    return c * Math.pow( 2, 10 * (t/d - 1) ) + b;
	};
	
	// exponential easing out - decelerating to zero velocity
	ease.easeOutExpo = function (t, b, c, d) {
	    return c * ( -Math.pow( 2, -10 * t/d ) + 1 ) + b;
	};
	
	// exponential easing in/out - accelerating until halfway, then decelerating
	ease.easeInOutExpo = function (t, b, c, d) {
	    t /= d/2;
	    if (t < 1) return c/2 * Math.pow( 2, 10 * (t - 1) ) + b;
	    t--;
	    return c/2 * ( -Math.pow( 2, -10 * t) + 2 ) + b;
	};
	
	// circular easing in - accelerating from zero velocity
	ease.easeInCirc = function (t, b, c, d) {
	    t /= d;
	    return -c * (Math.sqrt(1 - t*t) - 1) + b;
	};
	
	
	
	// circular easing out - decelerating to zero velocity
	ease.easeOutCirc = function (t, b, c, d) {
	    t /= d;
	    t--;
	    return c * Math.sqrt(1 - t*t) + b;
	};
	
	// circular easing in/out - acceleration until halfway, then deceleration
	ease.easeInOutCirc = function (t, b, c, d) {
	    t /= d/2;
	    if (t < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
	    t -= 2;
	    return c/2 * (Math.sqrt(1 - t*t) + 1) + b;
	};
	
	ease.easeInElastic = function (t, b, c, d) {
	    var s=1.70158;var p=0;var a=c;
	    if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
	    if (a < Math.abs(c)) { a=c; s=p/4; }
	    else s = p/(2*Math.PI) * Math.asin (c/a);
	    return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	};
	
	ease.easeOutElastic = function (t, b, c, d) {
	    var s=1.70158;var p=0;var a=c;
	    if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
	    if (a < Math.abs(c)) { a=c; s=p/4; }
	    else s = p/(2*Math.PI) * Math.asin (c/a);
	    return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	};
	
	ease.easeInOutElastic = function (t, b, c, d) {
	    var s=1.70158;var p=0;var a=c;
	    if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
	    if (a < Math.abs(c)) { a=c; s=p/4; }
	    else s = p/(2*Math.PI) * Math.asin (c/a);
	    if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	    return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	};
	
	ease.easeInBack = function (t, b, c, d) {
	    var s = 1.70158;
	    return c*(t/=d)*t*((s+1)*t - s) + b;
	};
	
	ease.easeOutBack = function (t, b, c, d) {
	    var s = 1.70158;
	    return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	};
	
	ease.easeInOutBack = function (t, b, c, d) {
	    var s = 1.70158;
	    if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
	    return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	};
	
	ease.easeInBounce = function(t, b, c, d) {
	    return c - ease.easeOutBounce (d-t, 0, c, d) + b;
	};
	
	ease.easeOutBounce  = function(t, b, c, d){
	    if ((t/=d) < (1/2.75)) {
	        return c*(7.5625*t*t) + b;
	    } else if (t < (2/2.75)) {
	        return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
	    } else if (t < (2.5/2.75)) {
	        return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
	    } else {
	        return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
	    }
	};
	
	ease.easeInOutBounce = function(t, b, c, d) {
	    if (t < d/2) return ease.easeInBounce(t*2, 0, c, d) * .5 + b;
	    else return ease.easeOutBounce(t*2-d, 0, c, d) * .5 + c*.5 + b;
	};
	
	exports.ease = ease;
}};
modules['queue'] =
    {code: function(module){
    var exports = module.exports;
    	var Queue = function(){
	    var self = this;
	    this.size = function(){
	        return tasks.length;
	    };
	    this.onResolved = null;
	    this.onProgress = null;
	    var tasksResolved = 0;
	    var tasks = [];
	    var tasksProgressById = {};
	
	    var calcProgress = function(){
	        var sum = 0;
	        Object.keys(tasksProgressById).forEach(function(taskId){
	            sum+=tasksProgressById[taskId]||0;
	        });
	        return sum/tasks.length;
	    };
	
	    this.addTask = function(taskFn,taskId) {
	        tasks.push(taskFn);
	        tasksProgressById[taskId] = 0;
	    };
	    this.progressTask = function(taskId,progress){
	        tasksProgressById[taskId] = progress;
	        this.onProgress && this.onProgress(calcProgress());
	    };
	    this.resolveTask = function(taskId){
	        tasksResolved++;
	        tasksProgressById[taskId] = 1;
	        if (tasks.length==tasksResolved) {
	            this.onProgress && this.onProgress(1);
	            if (self.onResolved) self.onResolved();
	        } else {
	            this.onProgress && this.onProgress(calcProgress());
	        }
	    };
	    this.start = function() {
	        if (this.size()==0) this.onResolved();
	        tasks.forEach(function(t){
	            t && t();
	        });
	    }
	};
	
	module.exports = Queue;
}};
modules['utils'] =
    {code: function(module){
    var exports = module.exports;
    	
	exports.merge = function(obj1,obj2){
	    Object.keys(obj2).forEach(function(key){
	        obj1[key]=obj2[key];
	    });
	};
	exports.clone = function(obj){
	    return Object.create(obj);
	};
	exports.capitalize = function(s){
	    return s.substr(0,1).toUpperCase() +
	        s.substr(1);
	};
	exports.getBase64prefix = function(fileType,fileName) {
	    var ext = fileName.split('.').pop();
	    return 'data:'+fileType+'/'+ext+';base64,'
	};
	exports.arrayBufferToBase64 = function(buffer) {
	    var bytes = new Uint8Array(buffer);
	    var rawArr = [];
	    for (var i=0;i<bytes.length;i++){
	        var b = bytes[i];
	        rawArr.push(b);
	    }
	    return require('base64').fromByteArray(rawArr);
	};
	
	
	exports.loadBinary = function(url,progress,callBack) {
	    var request = new XMLHttpRequest();
	    request.open('GET', url, true);
	    request.responseType = 'arraybuffer';
	
	    request.setRequestHeader('Accept-Ranges', 'bytes');
	    request.setRequestHeader('Content-Range', 'bytes');
	
	    request.onload = function() {
	        callBack(request.response);
	    };
	    request.onprogress = function(e){
	        progress(url,e.loaded/ e.total);
	    };
	
	    request.onerror=function(e){throw 'can not load sound with url '+url};
	
	    request.send();
	};
}};
modules['vec2'] =
    {code: function(module){
    var exports = module.exports;
    	
	var Vec2 = function(_x,_y){
	
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
	
	    this.addVec2 = function(v){
	        return new Vec2(x + v.getX(),y + v.getY);
	    };
	
	    this.multiplyByScalar = function(sc){
	        return new Vec2(x * sc,y * sc);
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
	
	
	module.exports = Vec2;
}};
modules['baseGameObject'] =
    {code: function(module){
    var exports = module.exports;
    	
	
	var renderer = require('renderer');
	var camera = require('camera');
	
	var Renderable = require('renderable');
	var Moveable = require('moveable');
	
	var BaseGameObject = Renderable.extend({
	    type:'baseGameObject',
	    groupName:'',
	    _spriteSheet:null,
	    fixedToCamera:false,
	    _layer:null,
	    _moveable:null,
	
	    pos:null,
	    scale:null,
	    rigid:false,
	    angle:0,
	    angleVel:0,
	    vel:null,
	
	    getRect: function(){
	        return {x:this.pos.x,y:this.pos.y,width:this.width,height:this.height};
	    },
	    getScreenRect: function(){
	        var rect = {x:this.pos.x,y:this.pos.y,width:this.width,height:this.height};
	        if (this.fixedToCamera) return rect;
	        rect.x -= camera.pos.x;
	        rect.y -= camera.pos.y;
	        return rect;
	    },
	    kill: function(){
	        this._layer._gameObjects.remove({id:this.id});
	        this._layer._scene._allGameObjects.remove({id:this.id});
	    },
	    getScene: function(){
	        return require('game').getCurrScene();
	    },
	    moveTo:function(x,y,time,easeFnName){
	        return this.tween(this.pos,{to:{x:x,y:y}},time,easeFnName);
	    },
	    update: function(time,delta){
	        this._moveable.update(time,delta);
	    },
	    _render: function(){
	        this._super();
	    },
	    construct:function(){
	        this._super();
	        if (!this.pos) this.pos = {x:0,y:0};
	        if (!this.vel) this.vel = {x:0,y:0};
	        if (!this.scale) this.scale = {x:1,y:1};
	        this._moveable = new Moveable();
	        this._moveable._gameObject = this;
	    }
	});
	
	module.exports = BaseGameObject;
}};
modules['baseModel'] =
    {code: function(module){
    var exports = module.exports;
    	var EventEmitter = require('eventEmitter');
	var Class = require('class');
	
	var isPropNotFit = function(key,val){
	    if (!key) return true;
	    if (key.indexOf('_')==0) return true;
	    if (val && val.call) return true;
	    if (typeof val == 'string') return false;
	    if (typeof val == 'number') return false;
	    if (typeof val == 'boolean') return false;
	    if (!val) return true;
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
	
	var BaseModel = Class.extend({
	    id:null,
	    protoId:null,
	    name:'',
	    _emitter:null,
	    toJSON: function(){
	        var res = {};
	        for (var key in this) {
	            if (isPropNotFit(key,this[key])) {
	                continue;
	            }
	            res[key]=this[key];
	        }
	        return deepCopy(res);
	    },
	    toJSON_Array: function(){
	        var res = [];
	        for (var key in this) {
	            if (isPropNotFit(key,this[key])) {
	                continue;
	            }
	            res.push({key:key,value:this[key]});
	        }
	        return res;
	    },
	    fromJSON:function(jsonObj){
	        var self = this;
	        Object.keys(jsonObj).forEach(function(key){
	            if (key in self) {
	                self[key] = jsonObj[key];
	                if (typeof self[key]==='boolean') return;
	                if (self[key] && !self[key].splice) {
	                    self[key] = +self[key]||self[key];
	                }
	            }
	        });
	    },
	    clone: function(){
	        var newObj = new this.constructor(this.toJSON());
	        newObj._init();
	        return newObj;
	    },
	    on: function(eventName,callBack){
	        this._emitter.on(eventName,callBack);
	        return this;
	    },
	    trigger: function(eventName,data){
	        this._emitter.trigger(eventName,data);
	    },
	    _init:function(){
	        arguments && arguments[0] && this.fromJSON(arguments[0]);
	    },
	    construct: function(){
	        this._emitter = new EventEmitter();
	    }
	});
	
	module.exports = BaseModel;
}};
modules['moveable'] =
    {code: function(module){
    var exports = module.exports;
    	
	var collider = require('collider');
	var BaseModel = require('baseModel');
	
	var Moveable = BaseModel.extend({
	    _gameObject: null,
	    update: function(time,delta){
	        var _gameObject = this._gameObject;
	        var deltaX = _gameObject.vel.x * delta / 1000;
	        var deltaY = _gameObject.vel.y * delta / 1000;
	        var posX = _gameObject.pos.x+deltaX;
	        var posY = _gameObject.pos.y+deltaY;
	        if (_gameObject.angleVel) _gameObject.angle += _gameObject.angleVel * delta / 1000;
	        collider.manage(_gameObject,posX,posY);
	    }
	});
	
	module.exports = Moveable;
}};
modules['renderable'] =
    {code: function(module){
    var exports = module.exports;
    	
	var camera = require('camera');
	var renderer = require('renderer');
	var collider = require('collider');
	
	var BaseModel = require('baseModel');
	var Tweenable = require('tweenable');
	
	
	var Renderable = BaseModel.extend({
	    type: 'renderable',
	    alpha: 1.0,
	    width: 0,
	    height: 0,
	    _tweenable:null,
	    onUpdate: function(){},
	    fadeIn: function(time,easeFnName){
	        return this.tween(this,{to:{alpha:1}},time,easeFnName);
	    },
	    fadeOut:function(time,easeFnName){
	        return this.tween(this,{to:{alpha:0}},time,easeFnName);
	    },
	    tween: function(obj,fromToVal,tweenTime,easeFnName){
	        this._tweenable.tween(obj,fromToVal,tweenTime,easeFnName);
	    },
	    _render:function(){
	        var ctx = renderer.getContext();
	        var dx = 0, dy = 0;
	        if (this.fixedToCamera) {
	            dx = camera.pos.x;
	            dy = camera.pos.y;
	        }
	        ctx.translate(this.pos.x + this.width /2 + dx,this.pos.y + this.height/2 + dy);
	        ctx.scale(this.scale.x,this.scale.y);
	        ctx.rotateZ(this.angle);
	        //ctx.rotateY(a);
	        ctx.translate(-this.width /2, -this.height/2);
	        ctx.setAlpha(this.alpha);
	    },
	    update: function(time,delta) {
	        var self = this;
	        var deltaX = self.vel.x * delta / 1000;
	        var deltaY = self.vel.y * delta / 1000;
	        var posX = self.pos.x + deltaX;
	        var posY = self.pos.y + deltaY;
	        collider.manage(self, posX, posY);
	    },
	    construct: function(){
	        this._super();
	        this._tweenable = new Tweenable();
	    }
	});
	
	module.exports = Renderable;
}};
modules['resource'] =
    {code: function(module){
    var exports = module.exports;
    	
	var BaseModel = require('baseModel');
	
	var Resource = BaseModel.extend({
	    resourcePath:''
	});
	
	module.exports = Resource;
}};
modules['tweenable'] =
    {code: function(module){
    var exports = module.exports;
    	
	var BaseModel = require('baseModel');
	var Tween = require('tween');
	var TweenMovie = require('tweenMovie');
	
	var Tweenable = BaseModel.extend({
	    global: false,
	    tween: function(objOrTween,fromToVal,tweenTime,easeFnName){
	        var movie = new TweenMovie();
	        var tween;
	        if (objOrTween instanceof Tween) tween = objOrTween;
	        else tween = new Tween(objOrTween,fromToVal,tweenTime,easeFnName);
	        movie.tween(0,tween);
	        movie.play(this.global);
	    }
	});
	
	module.exports = Tweenable;
}};
modules['commonBehaviour'] =
    {code: function(module){
    var exports = module.exports;
    	
	var BaseModel = require('baseModel');
	
	var CommonBehaviour = BaseModel.extend({
	    type:'commonBehaviour',
	    name:'',
	    description:'',
	    parameters:null,
	    construct: function(){
	        if (!this.parameters) this.parameters = [];
	    }
	});
	
	module.exports = CommonBehaviour;
}};
modules['frameAnimation'] =
    {code: function(module){
    var exports = module.exports;
    	
	var BaseModel = require('baseModel');
	
	var FrameAnimation = BaseModel.extend({
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
	
	module.exports = FrameAnimation;
}};
modules['gameObject'] =
    {code: function(module){
    var exports = module.exports;
    	
	var renderer = require('renderer');
	var BaseGameObject = require('baseGameObject');
	var CommonBehaviour = require('commonBehaviour');
	var bundle = require('bundle');
	var collections = require('collections');
	var resourceCache = require('resourceCache');
	var utils = require('utils');
	var game = require('game');
	
	var Sphere = require('sphere');
	var Cube = require('cube');
	//var TeaPot = require('teaPot');
	//var model = new Airplane({radius:50,size:50,bands:6});
	
	var a = 0;
	
	var _draw = function(ctx,self,x,y){
	    ctx.drawImage(
	        resourceCache.get(self._spriteSheet.resourcePath),
	        self._sprPosX,
	        self._sprPosY,
	        self.width,
	        self.height,
	        x||0,
	        y||0
	    );
	
	    //ctx.scale(10,10,10);
	    //ctx.rotateY(a);
	    //ctx.rotateZ(a);
	    //a+=0.01;
	    //ctx.drawModel(model,resourceCache.get(self._spriteSheet.resourcePath));
	
	    //ctx.fillRect(0,0,self.width,self.height,[1,0.5,0,1]);
	    //ctx.polyLine([0,0,5,5,20,3],[1,0,1,1]);
	};
	
	var _drawPattern = function(ctx,self){
	
	    var offsetX = self.tileOffset.x % self._spriteSheet._frameWidth;
	    var offsetY = self.tileOffset.y % self._spriteSheet._frameHeight;
	    offsetX = offsetX<0?self._spriteSheet._frameWidth + offsetX : offsetX;
	    offsetY = offsetY<0?self._spriteSheet._frameHeight + offsetY : offsetY;
	
	    ctx.lockRect(self.getRect());
	
	    for (
	        var y = - offsetY;
	        y<self.height + self._spriteSheet._frameHeight;
	        y+=self._spriteSheet._frameHeight
	    ) {
	        for (
	            var x = -offsetX;
	            x<self.width + self._spriteSheet._frameWidth;
	            x+=self._spriteSheet._frameWidth
	        ) {
	            ctx.drawImage(
	                resourceCache.get(self._spriteSheet.resourcePath),
	                self._sprPosX,
	                self._sprPosY,
	                self._spriteSheet._frameWidth,
	                self._spriteSheet._frameHeight,
	                x,
	                y
	            );
	        }
	    }
	    ctx.unlockRect();
	};
	
	var GameObject = BaseGameObject.extend({
	    type:'gameObject',
	    spriteSheetId:null,
	    _spriteSheet: null,
	    _behaviour:null,
	    commonBehaviour:[],
	    _commonBehaviour:null,
	    currFrameIndex:0,
	    _sprPosX:0,
	    _sprPosY:0,
	    _frameAnimations: null,
	    frameAnimationIds:[],
	    _currFrameAnimation:null,
	    _timeCreated:null,
	    tileOffset: null,
	    tileRepeat:false,
	    construct: function(){
	        var self = this;
	        self._super();
	        if (!self.tileOffset) self.tileOffset = {x:0,y:0};
	        self._frameAnimations = new collections.List();
	        if (self.spriteSheetId) {
	            self._spriteSheet = bundle.spriteSheetList.find({id: self.spriteSheetId});
	            if (!self._spriteSheet)
	                throw 'not found spriteSheet with id '+ self.spriteSheetId+' for gameObject with name '+ self.name;
	            self.setFrameIndex(self.currFrameIndex);
	        }
	        self._frameAnimations.clear();
	        self.frameAnimationIds.forEach(function(id){
	            var a = bundle.frameAnimationList.find({id: id});
	            if (!a) throw 'can not found FrameAnimation with id ' + id + ' for gameObject with name '+ self.name;
	            a = a.clone();
	            a._gameObject = self;
	            self._frameAnimations.add(a);
	        });
	        self._commonBehaviour = new collections.List();
	        self.commonBehaviour.forEach(function(cb){
	            self._commonBehaviour.add(new CommonBehaviour(cb));
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
	        var self = this;
	        self._super(time,delta);
	        self._currFrameAnimation && this._currFrameAnimation.update(time);
	        if (!self.__updateIndividualBehaviour__) console.log('fail',self);
	        self.__updateIndividualBehaviour__(delta);
	        self.__updateCommonBehaviour__();
	        self._render();
	    },
	    stopFrAnimations: function(){
	        this._currFrameAnimation && this._currFrameAnimation.stop();
	    },
	    _render: function(){
	        var self = this;
	        var ctx = renderer.getContext();
	        ctx.save();
	        self._super();
	
	        self.tileRepeat ?
	            _drawPattern(ctx,self):
	            _draw(ctx,self);
	
	        ctx.restore();
	    }
	}, {
	    find: function(name){
	        return game.getCurrScene()._allGameObjects.find({name:name});
	    },
	    findAll: function(name) {
	        return game.getCurrScene()._allGameObjects.findAll({name: name});
	    }
	});
	
	module.exports = GameObject;
}};
modules['layer'] =
    {code: function(module){
    var exports = module.exports;
    	
	var BaseModel = require('baseModel');
	var collections = require('collections');
	var TextField = require('textField');
	var bundle = require('bundle');
	
	var Layer = BaseModel.extend({
	    type:'layer',
	    gameObjectProps:[],
	    _gameObjects:null,
	    _scene:null,
	    construct: function() {
	        var self = this;
	        self._gameObjects = new collections.List();
	        this.gameObjectProps.forEach(function(prop){
	            var objCloned;
	            switch (prop.subType) {
	                case 'textField':
	                    objCloned = new TextField(prop);
	                    break;
	                default:
	                    var obj = bundle.gameObjectList.find({id: prop.protoId});
	                    objCloned = obj.clone();
	                    objCloned.fromJSON(prop);
	                    break;
	            }
	            objCloned._layer = self;
	            self._gameObjects.add(objCloned);
	        });
	    },
	    getAllSpriteSheets:function() {
	        var dataSet = new collections.Set();
	        this._gameObjects.forEach(function(obj){
	            obj._spriteSheet && dataSet.add(obj._spriteSheet);
	        });
	        return dataSet;
	    },
	    update: function(currTime,deltaTime){
	        var all = this._gameObjects.rs;
	        var i = all.length;
	        var l = i-1;
	        while(i--){
	            var obj = all[l-i];
	            obj && obj.update(currTime,deltaTime);
	        }
	    }
	});
	
	module.exports = Layer;
}};
modules['particleSystem'] =
    {code: function(module){
    var exports = module.exports;
    	
	var mathEx = require('mathEx');
	var bundle = require('bundle');
	var BaseModel = require('baseModel');
	
	var ParticleSystem = BaseModel.extend({
	    type:'particleSystem',
	    gameObjectId:null,
	    _gameObject:null,
	    _particles:null,
	    numOfParticlesToEmit:null,
	    particleAngle:null,
	    particleVelocity:null,
	    particleLiveTime:null,
	    emissionRadius:null,
	    construct: function(){
	        this._particles = [];
	        if (!this.numOfParticlesToEmit) this.numOfParticlesToEmit = {from:1,to:10};
	        if (!this.particleAngle) this.particleAngle = {from:0,to:0};
	        if (this.particleAngle.to<this.particleAngle.from) this.particleAngle.to += 2*Math.PI;
	        if (!this.particleVelocity) this.particleVelocity = {from:1,to:100};
	        if (!this.particleLiveTime) this.particleLiveTime = {from:100,to:1000};
	        if (!this.emissionRadius) this.emissionRadius = 0;
	        this._gameObject = bundle.gameObjectList.find({id:this.gameObjectId});
	    },
	    emit: function(x,y){
	        var r = function(obj){
	            return mathEx.random(obj.from,obj.to);
	        };
	        for (var i = 0;i<r(this.numOfParticlesToEmit);i++) {
	            var particle = this._gameObject.clone();
	            var angle = r(this.particleAngle);
	            var vel = r(this.particleVelocity);
	            particle.vel.x = vel*Math.cos(angle);
	            particle.vel.y = vel*Math.sin(angle);
	            particle.pos.x = r({from:x-this.emissionRadius,to:x+this.emissionRadius});
	            particle.pos.y = r({from:y-this.emissionRadius,to:y+this.emissionRadius});
	            particle.liveTime = r(this.particleLiveTime);
	            bundle.applyBehaviour(particle);
	            this._particles.push(particle);
	        }
	    },
	    update:function(time,delta){
	        var self = this;
	        var all = this._particles;
	        var i = all.length;
	        var l = i - 1;
	        while(i--){
	            var p = all[l-i];
	            if (!p) continue;
	            if (!p._timeCreated) p._timeCreated = time;
	            if (time - p._timeCreated > p.liveTime) {
	                self._particles.splice(self._particles.indexOf(p),1);
	            }
	            p.update(time,delta);
	        }
	    }
	},{
	    find: function(name){
	        return bundle.particleSystemList.find({name:name});
	    },
	    findAll: function(name){
	        return bundle.particleSystemList.findAll({name:name});
	    }
	});
	
	module.exports = ParticleSystem;
}};
modules['scene'] =
    {code: function(module){
    var exports = module.exports;
    	
	var Renderable = require('renderable');
	var collections = require('collections');
	var bundle = require('bundle');
	var renderer = require('renderer');
	var resourceCache = require('resourceCache');
	var camera = require('camera');
	
	var tweenModule = require('tween');
	var tweenMovieModule = require('tweenMovie');
	
	var Scene = Renderable.extend({
	    type:'scene',
	    layerProps:[],
	    alpha:1,
	    _layers:null,
	    tileMap:null,
	    _allGameObjects:null,
	    useBG:false,
	    colorBG:{r:255,g:255,b:255},
	    onShow: function(){},
	    _tweenMovies:null,
	    __onResourcesReady: function(){
	        var self = this;
	        self._allGameObjects = new collections.List();
	        self._layers.forEach(function(l){
	            self._allGameObjects.addAll(l._gameObjects);
	        });
	    },
	    construct: function(){
	        var self = this;
	        self._super();
	        self._layers = new collections.List();
	        this.layerProps.forEach(function(prop){
	            var l = bundle.layerList.find({id: prop.protoId});
	            var lCloned = l.clone(exports.Layer);
	            lCloned.fromJSON(prop);
	            lCloned._scene = self;
	            self._layers.add(lCloned);
	        });
	        self._tweenMovies = [];
	        if (!self.tileMap) self.tileMap = {
	            _spriteSheet:null,
	            spriteSheetId:null,
	            width:0,
	            height:0,
	            data:[]
	        };
	        if (self.tileMap.spriteSheetId) {
	            self.tileMap._spriteSheet = bundle.spriteSheetList.find({id:self.tileMap.spriteSheetId});
	            if (!self.tileMap._spriteSheet) return;
	            self.tileMap._tilesInScreenX = ~~(bundle.gameProps.width/self.tileMap._spriteSheet._frameWidth);
	            self.tileMap._tilesInScreenY = ~~(bundle.gameProps.height/self.tileMap._spriteSheet._frameHeight);
	        }
	    },
	    addTweenMovie: function(tm){
	        this._tweenMovies.push(tm);
	    },
	    getAllSpriteSheets:function() {
	        var dataSet = new collections.Set();
	        this._layers.forEach(function(l){
	            dataSet.combine(l.getAllSpriteSheets());
	        });
	        if (this.tileMap && this.tileMap.spriteSheet) {
	            dataSet.add(this.tileMap._spriteSheet);
	        }
	        return dataSet;
	    },
	    getAllGameObjects:function(){
	        return this._allGameObjects;
	    },
	    update: function(currTime,deltaTime){
	        var self = this;
	        self._render();
	        var layers = self._layers.rs;
	        var i = self._layers.size();
	        var l = i -1;
	        while(i--){
	            layers[i-l].update(currTime,deltaTime);
	        }
	        self._tweenMovies.forEach(function(tweenMovie){
	            if (tweenMovie.completed) {
	                self._tweenMovies.remove(tweenMovie);
	            }
	            tweenMovie._update(currTime);
	        });
	        self.__updateIndividualBehaviour__(currTime);
	    },
	    fadeIn:function(time,easeFnName){
	        return this.tween(this,{to:{alpha:1}},time,easeFnName);
	    },
	    fadeOut:function(time,easeFnName){
	        return this.tween(this,{to:{alpha:0}},time,easeFnName);
	    },
	    tween: function(obj,fromToVal,tweenTime,easeFnName){
	        var movie = new tweenMovieModule.TweenMovie();
	        var tween = new tweenModule.Tween(obj,fromToVal,tweenTime,easeFnName);
	        movie.tween(0,tween);
	        movie.play();
	    },
	    _render: function(){
	        var self = this;
	        var spriteSheet = self.tileMap._spriteSheet;
	        if (!spriteSheet) return;
	        var ctx = renderer.getContext();
	        var tilePosX = ~~(camera.pos.x / self.tileMap._spriteSheet._frameWidth);
	        var tilePosY = ~~(camera.pos.y / self.tileMap._spriteSheet._frameHeight);
	        var w = tilePosX + self.tileMap._tilesInScreenX + 2;
	        var h = tilePosY + self.tileMap._tilesInScreenY + 2;
	        for (var y=tilePosY;y<h;y++) {
	            for (var x=tilePosX;x<w;x++) {
	                var index = self.tileMap.data[y] && self.tileMap.data[y][x];
	                if (index==undefined) continue;
	                ctx.drawImage(
	                    resourceCache.get(spriteSheet.resourcePath),
	                    spriteSheet.getFramePosX(index),
	                    spriteSheet.getFramePosY(index),
	                    spriteSheet._frameWidth,
	                    spriteSheet._frameHeight,
	                    x*spriteSheet._frameWidth,
	                    y*spriteSheet._frameHeight
	                );
	            }
	        }
	    },
	    getTileAt: function(x,y){
	        var self = this;
	        if (!self.tileMap._spriteSheet) return null;
	        var tilePosX = ~~(x / self.tileMap._spriteSheet._frameWidth);
	        var tilePosY = ~~(y / self.tileMap._spriteSheet._frameHeight);
	        return self.tileMap.data[tilePosY] && self.tileMap.data[tilePosY][tilePosX];
	    },
	    printText: function(x,y,text,font){
	        if (!text) return;
	        if (!text.substring) text = JSON.stringify(text,null,4);
	        renderer.printText(x,y,text,font);
	    },
	    log: function(text) {
	        this.printText(0,0,text);
	    }
	});
	
	module.exports = Scene;
}};
modules['sound'] =
    {code: function(module){
    var exports = module.exports;
    	var Resource = require('resource');
	var audioPlayer = require('audioPlayer');
	var bundle = require('bundle');
	
	var Sound = Resource.extend({
	    type:'sound',
	    _gain:1,
	    _loop:false,
	    play: function(){
	        audioPlayer.play(this);
	    },
	    stop: function(){
	        audioPlayer.stop(this);
	    },
	    pause:function(){
	        throw 'not implemented'
	    },
	    setGain:function(val,time,easeFnName){
	        audioPlayer.setGain(this,val,time,easeFnName);
	    }
	}, {
	    find: function(name){
	        var res = bundle.soundList.find({name:name});
	        if (!res) throw 'can not found sound with name ' + name;
	        // 
	        return res;
	    }
	});
	
	module.exports = Sound;
}};
modules['spriteSheet'] =
    {code: function(module){
    var exports = module.exports;
    	
	var Resource = require('resource');
	
	var SpriteSheet = Resource.extend({
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
	
	module.exports = SpriteSheet;
}};
modules['font'] =
    {code: function(module){
    var exports = module.exports;
    	
	var Resource = require('resource');
	
	var Font = Resource.extend({
	    type:'font',
	    fontSize:12,
	    fontColor: null,
	    fontFamily:'Monospace',
	    fontContext:null,
	    construct: function(){
	        if (!this.fontColor) this.fontColor = {r:0,g:0,b:0}
	    }
	});
	
	module.exports = Font;
}};
modules['textField'] =
    {code: function(module){
    var exports = module.exports;
    	
	var renderer = require('renderer');
	var BaseGameObject = require('baseGameObject');
	var SpriteSheet = require('spriteSheet');
	var bundle = require('bundle');
	var resourceCache = require('resourceCache');
	
	var TextField = BaseGameObject.extend({
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
	        var rows = [{width:0}];
	        var currRowIndex = 0;
	        this.height = this._font.fontContext.symbols[' '].height;
	        for (var i=0,max=text.length;i<max;i++) {
	            this._chars.push(text[i]);
	            var currSymbolInFont = this._font.fontContext.symbols[text[i]] || this._font.fontContext.symbols[' '];
	            if (text[i]=='\n') {
	                currRowIndex++;
	                this.height+=currSymbolInFont.height;
	                rows[currRowIndex] = {width:0};
	            } else {
	                rows[currRowIndex].width+=currSymbolInFont.width;
	            }
	        }
	        this.width = Math.max.apply(Math,rows.map(function(o){return o.width;}));
	    },
	    setFont: function(font){
	        this._font = font;
	        this.height = this._font.fontContext.symbols[' '].height;
	        this._spriteSheet = new SpriteSheet({resourcePath:this._font.resourcePath});
	        this.setText(this.text);
	    },
	    clone:function(){
	        return this._super();
	    },
	    construct: function(){
	        var self = this;
	        self._super();
	        self.rigid = false;
	        var font =
	            bundle.fontList.find({id:this.fontId}) ||
	            bundle.fontList.find({name:'default'}) ||
	            bundle.fontList.get(0);
	        font && self.setFont(font);
	    },
	    update: function(){
	        this._render();
	    },
	    _render: function(){
	        var self = this;
	        var ctx = renderer.getContext();
	        this._super();
	        var posX = 0;
	        var posY = 0;
	        var img = resourceCache.get(self._spriteSheet.resourcePath);
	        this._chars.forEach(function(ch){
	            var charInCtx = self._font.fontContext.symbols[ch]||self._font.fontContext.symbols['?'];
	            if (ch=='\n') {
	                posX = 0;
	                posY+= charInCtx.height;
	                return;
	            }
	            renderer.getContext().drawImage(
	                img,
	                charInCtx.x,
	                charInCtx.y,
	                charInCtx.width,
	                charInCtx.height,
	                posX,
	                posY
	            );
	            posX+=charInCtx.width;
	        });
	        ctx.restore();
	    }
	});
	
	module.exports = TextField;
}};
modules['canvasContext'] =
    {code: function(module){
    var exports = module.exports;
    	
	var utils = require('utils');
	var bundle = require('bundle');
	var SCALE_STRATEGY = require('consts').SCALE_STRATEGY;
	var device = require('device');
	var cache = require('resourceCache');
	var Class = require('class');
	
	var getCtx = function(el){
	    if (!el) el = document.createElement('canvas');
	    if (!el) return null;
	    return el.getContext("2d");
	};
	
	
	var CanvasContext = Class.extend(function(it){
	
	    var ctx;
	    var mScaleX = 1, mScaleY = 1;
	    var gameProps;
	    var scene;
	
	    it.init = function(canvas) {
	        ctx = getCtx(canvas);
	        gameProps = bundle.gameProps;
	    };
	
	    it.drawImage = function(
	        textureInfo,
	        fromX,
	        fromY,
	        fromW,
	        fromH,
	        toX,
	        toY
	    ) {
	
	        ctx.drawImage(
	            textureInfo.image,
	            fromX,
	            fromY,
	            fromW,
	            fromH,
	            toX,
	            toY,
	            fromW,
	            fromH
	        );
	
	    };
	
	    it.clear = function(){
	
	        ctx.globalAlpha = 1;
	        ctx.fillStyle='rgba('+scene.colorBG[0]+','+scene.colorBG[1]+','+scene.colorBG[2]+',255)';
	        ctx.fillRect(
	            0,
	            0,
	            screen.width*device.scale,
	            screen.height*device.scale);
	
	    };
	
	    it.save = function() {
	        ctx.save();
	    };
	
	    it.scale = function(scaleX,scaleY){
	        ctx.scale(scaleX,scaleY);
	    };
	
	    it.rotateZ = function(angleInRadians) {
	        ctx.rotate(angleInRadians);
	    };
	
	    it.rotateY = function(angleInRadians) {
	        //
	    };
	
	    it.translate = function(x,y){
	        ctx.translate(x,y);
	    };
	
	    it.restore = function(){
	        ctx.restore();
	    };
	
	    it.rescaleView = function(scaleX,scaleY){
	        ctx.scale(scaleX,scaleY);
	    };
	
	    it.getError = function(){
	
	    };
	
	    it.setAlpha = function(a){
	        ctx.globalAlpha = a;
	    };
	
	    it.lockRect = function(rect) {
	        ctx.save();
	        ctx.beginPath();
	        ctx.rect(rect.x,rect.y,rect.width,rect.height);
	        ctx.clip();
	    };
	
	    it.unlockRect = function(){
	        ctx.restore();
	    };
	
	    it.setScene = function(_scene){
	        scene = _scene;
	    };
	
	    it.beginFrameBuffer = function(){
	        ctx.save();
	        if (gameProps.scaleStrategy==SCALE_STRATEGY.HARDWARE_PRESERVE_ASPECT_RATIO) {
	            ctx.translate(gameProps.globalScale.left,gameProps.globalScale.top);
	            ctx.beginPath();
	            ctx.rect(0,0,gameProps.width,gameProps.height);
	            ctx.clip();
	        }
	    };
	
	    it.flipFrameBuffer = function(){
	        ctx.restore();
	    };
	
	},{
	    isAcceptable: function(){
	        return !!getCtx();
	    },
	    loadTextureInfo: function(url,opts,progress,callBack) {
	
	        if (cache.has(url)) {
	            callBack(cache.get(url));
	            return;
	        }
	
	        var img = new Image();
	        img.onerror=function(e){throw 'can not load image with url '+ url};
	        var texture = {};
	
	        if (opts.type == 'base64') {
	            url = utils.getBase64prefix('image', opts.fileName) + url;
	            img.src = url;
	            texture = {
	                image:img,
	                getSize: function(){
	                    return {
	                        width:img.width,
	                        height:img.height
	                    }
	                }
	            };
	            callBack(texture);
	            return;
	        }
	
	        utils.loadBinary(url, progress, function (buffer) {
	            var base64String = utils.arrayBufferToBase64(buffer);
	            base64String = utils.getBase64prefix('image', opts.fileName) + base64String;
	            img.onload = function () {
	                texture = {
	                    image:img,
	                    getSize: function(){
	                        return {
	                            width:img.width,
	                            height:img.height
	                        }
	                    }
	                };
	                callBack(texture);
	            };
	            img.src = base64String;
	        });
	    }
	});
	
	module.exports = CanvasContext;
}};
modules['camera'] =
    {code: function(module){
    var exports = module.exports;
    	
	var bundle = require('bundle');
	
	var objFollowTo = null;
	var scene = null;
	var sceneWidth;
	var sceneHeight;
	
	exports.pos = {
	    x:0,
	    y:0
	};
	
	exports.follow = function(gameObject) {
	    objFollowTo = gameObject;
	    scene = gameObject.getScene();
	    sceneWidth = scene.tileMap._spriteSheet._frameWidth*scene.tileMap.width;
	    sceneHeight = scene.tileMap._spriteSheet._frameHeight*scene.tileMap.height;
	};
	
	
	exports.update = function(ctx) {
	    if (!objFollowTo) return;
	    var pos = exports.pos;
	    var tileWidth = scene.tileMap._spriteSheet._frameWidth;
	    var tileHeight = scene.tileMap._spriteSheet._frameHeight;
	    var w = bundle.gameProps.width;
	    var h = bundle.gameProps.height;
	    var wDiv2 = w/2;
	    var hDiv2 = h/2;
	    pos.x = objFollowTo.pos.x - wDiv2;
	    pos.y = objFollowTo.pos.y - hDiv2;
	    if (pos.x<0) pos.x = 0;
	    if (pos.y<0) pos.y = 0;
	    if (pos.x>sceneWidth - w + tileWidth) pos.x = sceneWidth -w + tileWidth;
	    if (pos.y>sceneHeight -h + tileHeight) pos.y = sceneHeight -h + tileHeight;
	    ctx.translate(-pos.x,-pos.y);
	};
	
	
}};
modules['renderer'] =
    {code: function(module){
    var exports = module.exports;
    	
	
	var GlContext = require('glContext');
	var CanvasContext = require('canvasContext');
	var resourceCache = require('resourceCache');
	var bundle = require('bundle');
	var game = require('game');
	
	var canvas;
	var ctx;
	var ctxClass;
	var self = exports;
	var currTime = 0;
	var lastTime = 0;
	var reqAnimFrame = window.requestAnimationFrame;
	var gameProps;
	var isRunning = false;
	exports.isReady = false;
	
	
	exports.getContext = function(){
	    return ctx;
	};
	
	exports.getContextClass = function(){
	    return ctxClass;
	};
	
	exports.getCanvas = function(){
	    return canvas;
	};
	
	exports.init = function(){
	    canvas = document.querySelector('canvas');
	    gameProps = bundle.gameProps;
	    if (!canvas) {
	        canvas = document.createElement('canvas');
	        document.body.appendChild(canvas);
	    }
	    ctxClass = null;
	    if (GlContext.isAcceptable()) ctxClass = GlContext;
	    //if (CanvasContext.isAcceptable()) ctxClass = CanvasContext;
	    else throw "can not create rendering context";
	    ctx = new ctxClass();
	    game.setCtx(ctx);
	    ctx.init(canvas);
	    require('scaleManager').instance(canvas,ctx).manage();
	};
	
	
	exports.start = function(){
	    if (window.canceled) return;
	    if (!exports.isReady) return;
	    isRunning = true;
	    drawSceneLoop();
	};
	
	exports.getCanvas = function(){
	    return canvas;
	};
	
	exports.stop = function(){
	    if (!exports.isReady) return;
	    isRunning = false;
	};
	
	exports.isRunning = function() {
	    return isRunning;
	};
	
	exports.setScene = function(scene){
	    ctx.setScene(scene);
	};
	
	var drawSceneLoop = function(){
	
	    if (!isRunning) return;
	
	    var lastErr = ctx.getError();
	    if (lastErr) throw "GL error: " + lastErr;
	    if (window.canceled) return;
	    //
	
	    reqAnimFrame(drawSceneLoop);
	
	    lastTime = currTime;
	    currTime = Date.now();
	    var deltaTime = lastTime ? currTime - lastTime : 0;
	
	    ctx.beginFrameBuffer();
	    ctx.clear();
	
	    game.update(currTime,deltaTime);
	
	    ctx.flipFrameBuffer();
	
	};
	
	
	exports.printText = function(x,y,text,font){
	    if (!text) return;
	    font = font || bundle.fontList.get(0);
	    if (!font) throw 'at least one font must be specified. Create new one';
	    var posX = x;
	    var oldPosX = x;
	    var posY = y;
	    text.split('').forEach(function(ch){
	        var charInCtx = font.fontContext.symbols[ch]||font.fontContext.symbols['?'];
	        if (ch=='\n') {
	            posX = oldPosX;
	            posY+= charInCtx.height;
	            return;
	        }
	        ctx.drawImage(
	            resourceCache.get(font.resourcePath),
	            charInCtx.x,
	            charInCtx.y,
	            charInCtx.width,
	            charInCtx.height,
	            posX + camera.pos.x,
	            posY + camera.pos.y,
	            charInCtx.width,
	            charInCtx.height
	        );
	        posX+=charInCtx.width;
	    });
	};
}};
modules['scaleManager'] =
    {code: function(module){
    var exports = module.exports;
    	
	var SCALE_STRATEGY = require('consts').SCALE_STRATEGY;
	var scale = require('device').scale;
	var bundle = require('bundle');
	
	var ScaleManager = function(canvas,ctx){
	
	    var rescaleView = function(x,y){
	        ctx.rescaleView(x,y);
	    };
	
	    var processScreenSize = function(){
	        var gameProps = bundle.gameProps;
	        var w,h,scaleFactor,scaledWidth,scaledHeight;
	        switch (+gameProps.scaleStrategy) {
	            case SCALE_STRATEGY.NO_SCALE:
	                w = window.innerWidth*scale;
	                h = window.innerHeight*scale;
	                gameProps.globalScale.x = 1;
	                gameProps.globalScale.y = 1;
	                gameProps.globalScale.left = 0;
	                gameProps.globalScale.top =  0;
	                gameProps.left = 0;
	                gameProps.top =  0;
	                gameProps.canvasWidth = gameProps.width;
	                gameProps.canvasHeight = gameProps.height;
	                canvas.width = gameProps.width;
	                canvas.height = gameProps.height;
	                canvas.style.display = 'inline-block';
	                break;
	            case SCALE_STRATEGY.CSS_PRESERVE_ASPECT_RATIO:
	                w = window.innerWidth*scale;
	                h = window.innerHeight*scale;
	                scaleFactor = Math.min(w / gameProps.width, h / gameProps.height);
	                scaledWidth = gameProps.width * scaleFactor;
	                scaledHeight = gameProps.height * scaleFactor;
	                gameProps.globalScale.x = scaledWidth / gameProps.width;
	                gameProps.globalScale.y = scaledHeight / gameProps.height;
	                gameProps.scaledWidth = scaledWidth;
	                gameProps.scaledHeight = scaledHeight;
	                gameProps.globalScale.left = (w - scaledWidth) / 2;
	                gameProps.globalScale.top =  (h - scaledHeight) / 2;
	                gameProps.left = (w - scaledWidth)/2;
	                gameProps.top =  (h - scaledHeight)/2;
	                gameProps.canvasWidth = gameProps.width;
	                gameProps.canvasHeight = gameProps.height;
	                canvas.width = gameProps.width;
	                canvas.height = gameProps.height;
	                canvas.style.display = 'block';
	                canvas.style.width = scaledWidth + 'px';
	                canvas.style.height = scaledHeight + 'px';
	                canvas.style.marginTop = gameProps.top + 'px';
	                canvas.style.left = gameProps.left + 'px';
	                break;
	            case SCALE_STRATEGY.HARDWARE_PRESERVE_ASPECT_RATIO:
	                w = window.innerWidth*scale;
	                h = window.innerHeight*scale;
	                scaleFactor = Math.min(w / gameProps.width, h / gameProps.height);
	                scaledWidth = gameProps.width * scaleFactor;
	                scaledHeight = gameProps.height * scaleFactor;
	                gameProps.globalScale.x = scaledWidth / gameProps.width;
	                gameProps.globalScale.y = scaledHeight / gameProps.height;
	                gameProps.scaledWidth = scaledWidth;
	                gameProps.scaledHeight = scaledHeight;
	                gameProps.globalScale.left = (w-scaledWidth) / 2 / scaleFactor;
	                gameProps.globalScale.top = (h-scaledHeight) / 2 / scaleFactor;
	                gameProps.left = (w-scaledWidth) / 2;
	                gameProps.top = (h-scaledHeight) / 2;
	                gameProps.canvasWidth = w;
	                gameProps.canvasHeight = h;
	                canvas.width = w;
	                canvas.height = h;
	                rescaleView(gameProps.globalScale.x,gameProps.globalScale.y);
	                break;
	            case SCALE_STRATEGY.CSS_STRETCH:
	                w = window.innerWidth*scale;
	                h = window.innerHeight*scale;
	                gameProps.globalScale.x = w / gameProps.width;
	                gameProps.globalScale.y = h / gameProps.height;
	                gameProps.globalScale.left = 0;
	                gameProps.globalScale.top =  0;
	                gameProps.left = 0;
	                gameProps.top =  0;
	                gameProps.canvasWidth = gameProps.width;
	                gameProps.canvasHeight = gameProps.height;
	                canvas.width = gameProps.width;
	                canvas.height = gameProps.height;
	                canvas.style.width = w + 'px';
	                canvas.style.height = h + 'px';
	                break;
	            case SCALE_STRATEGY.HARDWARE_STRETCH:
	                w = window.innerWidth*scale;
	                h = window.innerHeight*scale;
	                gameProps.globalScale.x = w / gameProps.width;
	                gameProps.globalScale.y = h / gameProps.height;
	                gameProps.globalScale.left = 0;
	                gameProps.globalScale.top =  0;
	                gameProps.left = 0;
	                gameProps.top =  0;
	                gameProps.canvasWidth = w;
	                gameProps.canvasHeight = h;
	                canvas.width = w;
	                canvas.height = h;
	                canvas.style.width = w + 'px';
	                canvas.style.height = h + 'px';
	                rescaleView(gameProps.globalScale.x,gameProps.globalScale.y);
	                break;
	        }
	    };
	
	    var listenResize = function(){
	        window.addEventListener('resize',function(){
	            processScreenSize();
	        });
	    };
	
	    this.manage = function(){
	        var gameProps = bundle.gameProps;
	        gameProps.globalScale = {};
	        processScreenSize();
	        gameProps.scaleStrategy!=SCALE_STRATEGY.NO_SCALE && listenResize();
	    };
	
	};
	
	var instance = null;
	
	
	module.exports.instance = function(canvas,ctx){
	    if (instance==null) {
	        if (!canvas) throw 'can not instantiate ScaleManager: canvas not specified';
	        if (!canvas) throw 'can not instantiate ScaleManager: rendering context not specified';
	        instance = new ScaleManager(canvas,ctx);
	    }
	    return instance;
	};
	
	
}};
modules['frameBuffer'] =
    {code: function(module){
    var exports = module.exports;
    	
	var Texture = require('texture');
	
	var FrameBuffer = function(gl,width,height){
	
	    var texture;
	    var glRenderBuffer;
	    var glFrameBuffer;
	
	    this.bind = function(){
	        gl.bindFramebuffer(gl.FRAMEBUFFER, glFrameBuffer);
	        gl.viewport(0, 0, width,height);
	    };
	
	    this.unbind = function(){
	        gl.bindFramebuffer(gl.FRAMEBUFFER, null);
	    };
	
	    this.getTexture = function(){
	        return texture;
	    };
	
	
	    (function(){
	        if (!gl) throw "can not create frameBuffer, gl context not passed to constructor, expected: FrameBuffer(gl)";
	
	        //1. Init Color Texture
	        texture = new Texture(gl);
	        texture.setImage(null,width,height);
	        //2. Init Render Buffer
	        glRenderBuffer = gl.createRenderbuffer();
	        gl.bindRenderbuffer(gl.RENDERBUFFER, glRenderBuffer);
	        gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_COMPONENT16, width, height);
	        //3. Init Frame Buffer
	        glFrameBuffer = gl.createFramebuffer();
	        gl.bindFramebuffer(gl.FRAMEBUFFER, glFrameBuffer);
	        gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture.getGlTexture(), 0);
	        gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.RENDERBUFFER, glRenderBuffer);
	        //4. Clean up
	        texture.unbind();
	        gl.bindRenderbuffer(gl.RENDERBUFFER, null);
	        gl.bindFramebuffer(gl.FRAMEBUFFER, null);
	
	
	    })();
	
	};
	
	module.exports = FrameBuffer;
}};
modules['indexBuffer'] =
    {code: function(module){
    var exports = module.exports;
    	
	
	var IndexBuffer = function(gl){
	    var buffer = gl.createBuffer();
	    var dataLength;
	
	    this.setData = function(bufferData){
	        if (!bufferData) throw 'can not set data to buffer: bufferData not specified';
	        dataLength = bufferData.length;
	        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, buffer);
	        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(bufferData), gl.STATIC_DRAW);
	        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
	    };
	
	    this.getGlBuffer = function(){
	        return buffer;
	    };
	
	    this.bind = function(){
	        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, buffer);
	    };
	
	    this.unbind = function(){
	        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
	    };
	
	    this.getBufferLength = function(){
	       return dataLength;
	    };
	
	    this.getGlBuffer = function(){
	        return buffer;
	    };
	
	};
	
	module.exports = IndexBuffer;
}};
modules['matrixStack'] =
    {code: function(module){
    var exports = module.exports;
    	
	var mat4 = require('mat4');
	
	var MatrixStack = function () {
	    var self = this;
	    this.stack = [];
	
	    this.restore = function () {
	        this.stack.pop();
	        // Never let the stack be totally empty
	        if (this.stack.length < 1) {
	            this.stack[0] = mat4.makeIdentity();
	        }
	    };
	
	    this.save = function () {
	        this.stack.push(this.getCurrentMatrix());
	    };
	
	    this.getCurrentMatrix = function () {
	        return this.stack[this.stack.length - 1].slice();
	    };
	
	    this.setCurrentMatrix = function (m) {
	        return this.stack[this.stack.length - 1] = m;
	    };
	
	    this.translate = function (x, y, z) {
	        if (z === undefined) {
	            z = 0;
	        }
	        var t = mat4.makeTranslation(x, y, z);
	        var m = this.getCurrentMatrix();
	        this.setCurrentMatrix(mat4.matrixMultiply(t, m));
	    };
	
	    this.rotateZ = function (angleInRadians) {
	        var t = mat4.makeZRotation(angleInRadians);
	        var m = this.getCurrentMatrix();
	        this.setCurrentMatrix(mat4.matrixMultiply(t, m));
	    };
	
	    this.rotateY = function (angleInRadians) {
	        var t = mat4.makeYRotation(angleInRadians);
	        var m = this.getCurrentMatrix();
	        this.setCurrentMatrix(mat4.matrixMultiply(t, m));
	    };
	
	    this.scale = function (x, y, z) {
	        if (z === undefined) {
	            z = 1;
	        }
	        var t = mat4.makeScale(x, y, z);
	        var m = this.getCurrentMatrix();
	        this.setCurrentMatrix(mat4.matrixMultiply(t, m));
	    };
	
	    (function () {
	        self.restore();
	    })();
	
	};
	
	module.exports = MatrixStack;
}};
modules['shaderProgram'] =
    {code: function(module){
    var exports = module.exports;
    	function compileShader(gl, shaderSource, shaderType) {
	    if (!shaderSource) throw 'can not compile shader: shader source not specified for type ' + shaderType;
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
	        gl.deleteShader(shader);
	        throw 'Error compiling shader ' + shader + ':' + lastError;
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
	        gl.deleteProgram(program);
	        throw "Error in program linking:" + lastError;
	    }
	    return program;
	}
	
	var extractUniforms = function (gl, program) {
	    var uniforms = {};
	
	    var totalUniforms = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);
	
	    for (var i = 0; i < totalUniforms; i++) {
	        var uniformData = gl.getActiveUniform(program, i);
	        var name = uniformData.name.replace(/\[.*?]/, "");
	        var type = mapType(gl, uniformData.type);
	
	        uniforms[name] = {
	            type: type,
	            size: uniformData.size,
	            name: name,
	            location: gl.getUniformLocation(program, name),
	            setter: getUniformSetter(uniformData.size,type)
	        };
	    }
	
	    return uniforms;
	
	
	    function mapType(gl, type) {
	
	        var GL_TABLE = null;
	
	        var GL_TO_GLSL_TYPES = {
	            'FLOAT': 'float',
	            'FLOAT_VEC2': 'vec2',
	            'FLOAT_VEC3': 'vec3',
	            'FLOAT_VEC4': 'vec4',
	
	            'INT': 'int',
	            'INT_VEC2': 'ivec2',
	            'INT_VEC3': 'ivec3',
	            'INT_VEC4': 'ivec4',
	
	            'BOOL': 'bool',
	            'BOOL_VEC2': 'bvec2',
	            'BOOL_VEC3': 'bvec3',
	            'BOOL_VEC4': 'bvec4',
	
	            'FLOAT_MAT2': 'mat2',
	            'FLOAT_MAT3': 'mat3',
	            'FLOAT_MAT4': 'mat4',
	
	            'SAMPLER_2D': 'sampler2D'
	        };
	
	        if (!GL_TABLE) {
	            var typeNames = Object.keys(GL_TO_GLSL_TYPES);
	
	            GL_TABLE = {};
	
	            for (var i = 0; i < typeNames.length; ++i) {
	                var tn = typeNames[i];
	                GL_TABLE[gl[tn]] = GL_TO_GLSL_TYPES[tn];
	            }
	        }
	
	        return GL_TABLE[type];
	    }
	};
	
	
	var getUniformSetter = function(size,type){
	    if (size==1) {
	        switch (type) {
	            case 'float':       return  function(gl,location,value) {gl.uniform1f(location, value)};
	            case 'vec2':        return  function(gl,location,value) {gl.uniform2f(location, value[0], value[1])};
	            case 'vec3':        return  function(gl,location,value) {gl.uniform3f(location, value[0], value[1], value[2])};
	            case 'vec4':        return  function(gl,location,value) {gl.uniform4f(location, value[0], value[1], value[2], value[3])};
	            case 'int':         return  function(gl,location,value) {gl.uniform1i(location, value)};
	            case 'ivec2':       return  function(gl,location,value) {gl.uniform2i(location, value[0], value[1])};
	            case 'ivec3':       return  function(gl,location,value) {gl.uniform3i(location, value[0], value[1], value[2])};
	            case 'ivec4':       return  function(gl,location,value) {gl.uniform4i(location, value[0], value[1], value[2], value[3])};
	            case 'bool':        return  function(gl,location,value) {gl.uniform1i(location, value)};
	            case 'bvec2':       return  function(gl,location,value) {gl.uniform2i(location, value[0], value[1])};
	            case 'bvec3':       return  function(gl,location,value) {gl.uniform3i(location, value[0], value[1], value[2])};
	            case 'bvec4':       return  function(gl,location,value) {gl.uniform4i(location, value[0], value[1], value[2], value[3])};
	            case 'mat2':        return  function(gl,location,value) {gl.uniformMatrix2fv(location, false, value)};
	            case 'mat3':        return  function(gl,location,value) {gl.uniformMatrix3fv(location, false, value)};
	            case 'mat4':        return  function(gl,location,value) {gl.uniformMatrix4fv(location, false, value)};
	            case 'sampler2D':   return  function(gl,location,value) {gl.uniform1i(location, value)};
	        }
	    } else {
	        switch (type) {
	            case 'float':       return  function(gl,location,value) {gl.uniform1fv(location, value)};
	            case 'vec2':        return  function(gl,location,value) {gl.uniform2fv(location, value)};
	            case 'vec3':        return  function(gl,location,value) {gl.uniform3fv(location, value)};
	            case 'vec4':        return  function(gl,location,value) {gl.uniform4fv(location, value)};
	            case 'int':         return  function(gl,location,value) {gl.uniform1iv(location, value)};
	            case 'ivec2':       return  function(gl,location,value) {gl.uniform2iv(location, value)};
	            case 'ivec3':       return  function(gl,location,value) {gl.uniform3iv(location, value)};
	            case 'ivec4':       return  function(gl,location,value) {gl.uniform4iv(location, value)};
	            case 'bool':        return  function(gl,location,value) {gl.uniform1iv(location, value)};
	            case 'bvec2':       return  function(gl,location,value) {gl.uniform2iv(location, value)};
	            case 'bvec3':       return  function(gl,location,value) {gl.uniform3iv(location, value)};
	            case 'bvec4':       return  function(gl,location,value) {gl.uniform4iv(location, value)};
	            case 'sampler2D':   return  function(gl,location,value) {gl.uniform1iv(location, value)};
	        }
	    }
	};
	
	
	var ShaderProgram = function(gl,sources){
	
	    var program;
	    var uniforms;
	
	    //var uniformValuesCache = {};
	
	    (function(){
	
	        var vShader = compileShader(gl,sources[0],gl.VERTEX_SHADER);
	        var fShader = compileShader(gl,sources[1],gl.FRAGMENT_SHADER);
	        program = createProgram(gl,[vShader,fShader]);
	        uniforms = extractUniforms(gl,program);
	
	    })();
	
	    this.getProgram = function(){
	        return program;
	    };
	
	    this.bind = function(){
	        gl.useProgram(program);
	    };
	
	    this.setUniform = function(name,value){
	        var uniform = uniforms[name];
	        if (!uniform) throw 'no uniform with name '+ name + ' found!';
	        //if (uniformValuesCache[name]===value) return;
	        uniform.setter(gl,uniform.location,value);
	        //uniformValuesCache[name] = value;
	    };
	
	    this.bindBuffer = function(buffer,uniformLocationName){
	        gl.bindBuffer(gl.ARRAY_BUFFER, buffer.getGlBuffer());
	        var uniformLocation = gl.getAttribLocation(program, uniformLocationName);
	
	        if (!uniformLocationName) throw "can not found uniform location: uniformLocationName not defined";
	        if (uniformLocation<0) throw "can not found uniform location for " + uniformLocationName;
	
	        gl.enableVertexAttribArray(uniformLocation);
	        gl.vertexAttribPointer(
	            uniformLocation,
	            buffer.getItemSize(),
	            buffer.getItemType(),
	            false,  // if the content is normalized vectors
	            0,      // number of bytes to skip in between elements
	            0       // offsets to the first element
	        );
	        gl.bindBuffer(gl.ARRAY_BUFFER, null);
	    };
	
	};
	
	module.exports = ShaderProgram;
}};
modules['texture'] =
    {code: function(module){
    var exports = module.exports;
    	
	var isPowerOf2 = function(value) {
	    return (value & (value - 1)) == 0;
	};
	
	var Texture = function(gl){
	
	    var tex;
	    var size;
	
	    this.isPowerOfTwo = false;
	
	    /**
	     * @param img - if image is null, width and height must be specified
	     * @param width -unused if image specified
	     * @param height -unused if image specified
	     */
	    this.setImage = function(img,width,height){
	        if (!(img || width || height)) throw "texture.setImage: if image is null, width and height must be specified: tex.setImage(null,w,h)";
	
	        if (img) size = {width:img.width,height:img.height};
	        this.bind();
	        gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, true);
	        if (img) {
	            gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img);
	        } else {
	            gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, width, height, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
	        }
	        this.isPowerOfTwo = img && isPowerOf2(img.width) && isPowerOf2(img.height);
	        // Check if the image is a power of 2 in both dimensions.
	        if (this.isPowerOfTwo) {
	            gl.generateMipmap(gl.TEXTURE_2D);
	            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);
	            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT);
	        } else {
	            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
	            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
	            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
	            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
	        }
	        gl.bindTexture(gl.TEXTURE_2D, null);
	
	    };
	
	    this.bind = function(i) {
	        //gl.activeTexture(gl.TEXTURE0+i);
	        gl.bindTexture(gl.TEXTURE_2D, tex);
	        // gl.uniform1i(uName, i);
	    };
	
	    this.unbind = function(i) {
	        gl.bindTexture(gl.TEXTURE_2D, null);
	    };
	
	    this.getSize = function(){
	        return size;
	    };
	
	    this.getGlTexture = function(){
	        return tex;
	    };
	
	    (function(){
	        if (!gl) throw "can not create texture, gl context not passed to constructor, expected: Texture(gl)";
	        tex = gl.createTexture();
	        gl.bindTexture(gl.TEXTURE_2D, tex);
	        // Fill the texture with a 1x1 blue pixel.
	        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE,
	            new Uint8Array([0, 0, 255, 255]));
	        gl.bindTexture(gl.TEXTURE_2D, tex);
	    })();
	
	};
	
	
	module.exports = Texture;
	
}};
modules['vertexBuffer'] =
    {code: function(module){
    var exports = module.exports;
    	
	var VertexBuffer = function(gl){
	    var buffer = gl.createBuffer();
	    var bufferItemSize, bufferItemType;
	    var dataLength;
	
	    this.setData = function(bufferData, itemType, itemSize){
	        if (!bufferData) throw 'can not set data to buffer: bufferData not specified';
	        if (!itemType) throw 'can not set data to buffer: itemType not specified';
	        if (!itemSize) throw 'can not set data to buffer: itemSize not specified';
	        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
	        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(bufferData), gl.STATIC_DRAW);
	        gl.bindBuffer(gl.ARRAY_BUFFER, null);
	        bufferItemSize = itemSize;
	        bufferItemType = itemType;
	        dataLength = bufferData.length;
	    };
	
	    this.getGlBuffer = function(){
	        return buffer;
	    };
	
	    this.getGlBuffer = function(){
	        return buffer;
	    };
	
	    this.getItemSize = function(){
	        return bufferItemSize;
	    };
	
	    this.getItemType = function(){
	        return bufferItemType;
	    };
	
	    this.getBufferLength = function(){
	        return dataLength;
	    };
	
	};
	
	module.exports = VertexBuffer;
}};
modules['glContext'] =
    {code: function(module){
    var exports = module.exports;
    	
	var mat4 = require('mat4');
	var utils = require('utils');
	var ColorRectDrawer = require('colorRectDrawer');
	var SpriteRectDrawer = require('spriteRectDrawer');
	var PolyLineDrawer = require('polyLineDrawer');
	var ModelDrawer = require('modelDrawer');
	var Texture = require('texture');
	var MatrixStack = require('matrixStack');
	var FrameBuffer = require('frameBuffer');
	var bundle = require('bundle');
	var cache = require('resourceCache');
	var SCALE_STRATEGY = require('consts').SCALE_STRATEGY;
	var Class = require('class');
	
	
	var getCtx = function(el){
	    if (!el) el = document.createElement('canvas');
	    if (!el) return null;
	    return (
	        el.getContext("webgl",{alpha: false}) ||
	        el.getContext('experimental-webgl',{alpha: false}) ||
	        el.getContext('webkit-3d',{alpha: false}) ||
	        el.getContext('moz-webgl',{alpha: false})
	    );
	};
	
	var GlContext = Class.extend(function(it){
	
	    var gl;
	    var mScaleX = 1, mScaleY = 1;
	    var alpha = 1;
	    var spriteRectDrawer, colorRectDrawer, polyLineDrawer, modelDrawer;
	    var matrixStack = new MatrixStack();
	    var frameBuffer;
	    var gameProps;
	    var colorBGDefault = [255,255,255];
	    var scene = null;
	    var SCENE_DEPTH = 1000;
	
	    it.init = function(canvas){
	
	        gameProps = bundle.gameProps;
	        gl = getCtx(canvas);
	
	        spriteRectDrawer = new SpriteRectDrawer(gl);
	        colorRectDrawer = new ColorRectDrawer(gl);
	        polyLineDrawer = new PolyLineDrawer(gl);
	        modelDrawer = new ModelDrawer(gl);
	
	        frameBuffer = new FrameBuffer(gl,gameProps.width,gameProps.height);
	
	        gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
	        gl.enable(gl.BLEND);
	
	    };
	
	    it.setScene = function(_scene){
	        scene = _scene;
	    };
	
	    it.setAlpha = function(_alpha) {
	        alpha = _alpha;
	    };
	
	    it.getError = function(){
	        var err = gl.getError();
	        //return 0;
	        return err==gl.NO_ERROR?0:err;
	    };
	
	    var makePositionMatrix = function(dstX,dstY,dstWidth,dstHeight,viewWidth,viewHeight,scaleX,scaleY){
	
	        var zToWMatrix = mat4.makeZToWMatrix(1);
	        var projectionMatrix = mat4.ortho(0,viewWidth,0,viewHeight,-SCENE_DEPTH,SCENE_DEPTH);
	
	        var scaleMatrix = mat4.makeScale(dstWidth*scaleX, dstHeight*scaleY, 1);
	        var translationMatrix = mat4.makeTranslation(dstX*scaleX, dstY*scaleY, 0);
	
	        var matrix = mat4.matrixMultiply(scaleMatrix, translationMatrix);
	        matrix = mat4.matrixMultiply(matrix, matrixStack.getCurrentMatrix());
	        matrix = mat4.matrixMultiply(matrix, projectionMatrix);
	        matrix = mat4.matrixMultiply(matrix, zToWMatrix);
	        return matrix;
	    };
	
	    var makeTextureMatrix = function(srcX,srcY,srcWidth,srcHeight,texWidth,texHeight){
	
	        var texScaleMatrix = mat4.makeScale(srcWidth / texWidth, srcHeight / texHeight, 1);
	        var texTranslationMatrix = mat4.makeTranslation(srcX / texWidth, srcY / texHeight, 0);
	
	        return mat4.matrixMultiply(texScaleMatrix, texTranslationMatrix);
	    };
	
	    var currTex = null;
	
	    it.drawImage = function(
	        texture,
	        srcX, srcY, srcWidth, srcHeight,
	        dstX, dstY
	    ) {
	
	        gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
	        //gl.blendColor(0, 0.5, 1, 1);
	
	        var texWidth = texture.getSize().width;
	        var texHeight = texture.getSize().height;
	
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
	
	        if (currTex!=texture){
	            texture.bind();
	            currTex = texture;
	        }
	
	
	
	        spriteRectDrawer.bind();
	        spriteRectDrawer.setUniform("u_textureMatrix",makeTextureMatrix(srcX,srcY,srcWidth,srcHeight,texWidth,texHeight));
	        spriteRectDrawer.setUniform("u_matrix",makePositionMatrix(
	                dstX,dstY,srcWidth,srcHeight,
	                gameProps.width,gameProps.height,1,1
	            )
	        );
	        spriteRectDrawer.setUniform('u_alpha',alpha);
	        spriteRectDrawer.draw();
	        spriteRectDrawer.unbind();
	    };
	
	    it.drawModel = function(model,texture){
	        modelDrawer.bind(model);
	        texture.bind();
	
	
	        var matrix1 = matrixStack.getCurrentMatrix();
	
	        var zToWMatrix = mat4.makeZToWMatrix(1);
	        var projectionMatrix = mat4.ortho(0,gameProps.width,0,gameProps.height,-SCENE_DEPTH,SCENE_DEPTH);
	        var matrix2 = mat4.matrixMultiply(projectionMatrix, zToWMatrix);
	
	        modelDrawer.setUniform("u_modelMatrix",matrix1);
	        modelDrawer.setUniform("u_projectionMatrix",matrix2);
	
	        modelDrawer.setUniform('u_alpha',1);
	        gl.enable(gl.DEPTH_TEST);
	        modelDrawer.draw();
	        modelDrawer.unbind();
	    };
	
	    it.lockRect = function(rect) {
	        gl.enable(gl.SCISSOR_TEST);
	        gl.scissor(
	            rect.x,
	            gameProps.height - rect.y - rect.height,
	            rect.width,
	            rect.height
	        );
	    };
	
	    it.unlockRect = function(){
	        gl.disable(gl.SCISSOR_TEST);
	    };
	
	    it.clear = function() {
	        var col = scene.useBG?scene.colorBG:colorBGDefault;
	        gl.clearColor(col[0]/255,col[1]/255,col[2]/255,1);
	        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT); // todo  | gl.DEPTH_BUFFER_BIT
	    };
	
	    var fillRect = function (x, y, w, h, color) {
	
	        colorRectDrawer.bind();
	        colorRectDrawer.setUniform("u_matrix",makePositionMatrix(
	                x,y,w,h,
	                gameProps.width,gameProps.height,1,1
	            )
	        );
	        colorRectDrawer.setUniform("u_rgba",color);
	        gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
	        colorRectDrawer.draw();
	        colorRectDrawer.unbind();
	    };
	
	    it.fillRect = fillRect;
	
	    it.strokeRect = function (x, y, w, h, color) {
	        fillRect(x, y, w, 1, color);
	        fillRect(x, y + h, w, 1, color);
	        fillRect(x, y, 1, h, color);
	        fillRect(x + w, y, 1, h, color);
	    };
	
	    it.point = function (x, y, color) {
	        this.fillRect(x, y, 1, 1, color);
	    };
	
	    it.polyLine = function(vertexArr,color) {
	        polyLineDrawer.bind(vertexArr);
	        polyLineDrawer.setUniform("u_matrix",makePositionMatrix(
	                0,0,1,1,
	                gameProps.width,gameProps.height,1,1
	            )
	        );
	        polyLineDrawer.setUniform("u_rgba",color);
	        gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
	        polyLineDrawer.draw();
	        polyLineDrawer.unbind();
	    };
	
	    it.save = function() {
	        matrixStack.save();
	    };
	
	    it.scale = function(x,y) {
	        matrixStack.scale(x,y);
	    };
	
	    it.rotateZ = function(angleInRadians) {
	        matrixStack.rotateZ(angleInRadians);
	    };
	
	    it.rotateY = function(angleInRadians) {
	        matrixStack.rotateY(angleInRadians);
	    };
	
	    it.translate = function(x,y){
	        matrixStack.translate(x,y);
	    };
	
	    it.restore = function(){
	        matrixStack.restore();
	    };
	
	    it.rescaleView = function(scaleX,scaleY){
	        mScaleX = scaleX;
	        mScaleY = scaleY;
	    };
	
	    it.beginFrameBuffer = function(){
	        this.save();
	        gl.viewport(0, 0, gameProps.width, gameProps.height);
	        frameBuffer.bind();
	    };
	
	    it.getNativeContext = function(){
	        return gl;
	    };
	
	    it.flipFrameBuffer = function(){
	        currTex = null;
	        this.restore();
	        this.save();
	        this.translate(0,gameProps.canvasHeight);
	        this.scale(1,-1);
	        frameBuffer.unbind();
	        gl.viewport(0, 0, gameProps.canvasWidth,gameProps.canvasHeight);
	        frameBuffer.getTexture().bind();
	
	        spriteRectDrawer.bind();
	
	        if (gameProps.scaleStrategy==SCALE_STRATEGY.HARDWARE_PRESERVE_ASPECT_RATIO) {
	            spriteRectDrawer.setUniform('u_matrix',
	                makePositionMatrix(
	                    gameProps.globalScale.left,gameProps.globalScale.top,
	                    gameProps.width, gameProps.height,
	                    gameProps.canvasWidth,gameProps.canvasHeight,
	                    mScaleX,mScaleY
	                )
	            );
	        } else {
	            spriteRectDrawer.setUniform('u_matrix',
	                makePositionMatrix(
	                    0,0,
	                    gameProps.width, gameProps.height,
	                    gameProps.canvasWidth,gameProps.canvasHeight,
	                    mScaleX,mScaleY
	                )
	            );
	        }
	
	        spriteRectDrawer.setUniform('u_textureMatrix',
	            makeTextureMatrix(
	                0,0,gameProps.canvasWidth,gameProps.canvasHeight,
	                gameProps.canvasWidth,gameProps.canvasHeight
	            )
	        );
	        spriteRectDrawer.setUniform('u_alpha',1);
	
	        gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
	        spriteRectDrawer.draw();
	        this.restore();
	    };
	
	    var self = it;
	
	},{
	    isAcceptable: function(){
	        return !!getCtx();
	    },
	    loadTextureInfo:function(url,opts,progress,callBack) {
	        if (cache.has(url)) {
	            callBack(cache.get(url));
	            return;
	        }
	
	        var img = new Image();
	        img.onerror=function(e){throw 'can not load image with url '+ url};
	        var gl = require('renderer').getContext().getNativeContext();
	        var texture = new Texture(gl);
	
	        if (opts.type == 'base64') {
	            url = utils.getBase64prefix('image', opts.fileName) + url;
	            img.src = url;
	            texture.setImage(img);
	            callBack(texture);
	            return;
	        }
	
	        utils.loadBinary(url, progress, function (buffer) {
	            if (window.Blob && window.URL) {
	                var blob = new Blob([buffer], {type: 'application/octet-binary'});
	                img.src = URL.createObjectURL(blob);
	            } else {
	                var base64String = utils.arrayBufferToBase64(buffer);
	                base64String = utils.getBase64prefix('image', opts.fileName) + base64String;
	                img.src = base64String;
	            }
	            img.onload = function () {
	                texture.setImage(img);
	                callBack(texture);
	            };
	
	        });
	    }
	});
	
	module.exports = GlContext;
	
	
	
	
	//canvas.addEventListener('webglcontextlost', function(e) {
	//    // the default is to do nothing. Preventing the default
	//    // means allowing context to be restored
	//    e.preventDefault();
	//    var div = document.createElement("div");
	//    div.className = "contextlost";
	//    div.innerHTML = '<div>Context Lost: Click To Reload</div>';
	//    div.addEventListener('click', function() {
	//        window.location.reload();
	//    });
	//    document.body.appendChild(div);
	//});
	//canvas.addEventListener('webglcontextrestored', function() {
	//    // just reload the page. Easiest.
	//    window.location.reload();
	//});
}};
modules['abstractPrimitive'] =
    {code: function(module){
    var exports = module.exports;
    	
	var BaseModel = require('baseModel');
	
	var AbstractPrimitive = BaseModel.extend({
	    vertexArr:null,
	    indexArr:null,
	    texCoordArr:null,
	    normalArr:null
	});
	
	module.exports = AbstractPrimitive;
}};
modules['cube'] =
    {code: function(module){
    var exports = module.exports;
    	
	var AbstractPrimitive = require('abstractPrimitive');
	
	var prepareBuffers = function(size){
	    
	    var vertices = [
	        // Front face
	        -size, -size,  size,
	        size, -size,  size,
	        size,  size,  size,
	        -size,  size,  size,
	
	        // Back face
	        -size, -size, -size,
	        -size,  size, -size,
	        size,  size, -size,
	        size, -size, -size,
	
	        // Top face
	        -size,  size, -size,
	        -size,  size,  size,
	        size,  size,  size,
	        size,  size, -size,
	
	        // Bottom face
	        -size, -size, -size,
	        size, -size, -size,
	        size, -size,  size,
	        -size, -size,  size,
	
	        // Right face
	        size, -size, -size,
	        size,  size, -size,
	        size,  size,  size,
	        size, -size,  size,
	
	        // Left face
	        -size, -size, -size,
	        -size, -size,  size,
	        -size,  size,  size,
	        -size,  size, -size
	    ];
	
	    var textureCoords = [
	        // Front face
	        0.0, 0.0,
	        1, 0.0,
	        1, 1,
	        0.0, 1,
	
	        // Back face
	        1, 0.0,
	        1, 1,
	        0.0, 1,
	        0.0, 0.0,
	
	        // Top face
	        0.0, 1,
	        0.0, 0.0,
	        1, 0.0,
	        1, 1,
	
	        // Bottom face
	        1, 1,
	        0.0, 1,
	        0.0, 0.0,
	        1, 0.0,
	
	        // Right face
	        1, 0.0,
	        1, 1,
	        0.0, 1,
	        0.0, 0.0,
	
	        // Left face
	        0.0, 0.0,
	        1, 0.0,
	        1, 1,
	        0.0, 1
	    ];
	
	    var cubeVertexIndices = [
	        0, 1, 2,      0, 2, 3,    // Front face
	        4, 5, 6,      4, 6, 7,    // Back face
	        8, 9, 10,     8, 10, 11,  // Top face
	        12, 13, 14,   12, 14, 15, // Bottom face
	        16, 17, 18,   16, 18, 19, // Right face
	        20, 21, 22,   20, 22, 23  // Left face
	    ];
	
	    var vertexNormals = [
	        // Front face
	        0.0,  0.0,  1,
	        0.0,  0.0,  1,
	        0.0,  0.0,  1,
	        0.0,  0.0,  1,
	
	        // Back face
	        0.0,  0.0, -1,
	        0.0,  0.0, -1,
	        0.0,  0.0, -1,
	        0.0,  0.0, -1,
	
	        // Top face
	        0.0,  1,  0.0,
	        0.0,  1,  0.0,
	        0.0,  1,  0.0,
	        0.0,  1,  0.0,
	
	        // Bottom face
	        0.0, -1,  0.0,
	        0.0, -1,  0.0,
	        0.0, -1,  0.0,
	        0.0, -1,  0.0,
	
	        // Right face
	        1,  0.0,  0.0,
	        1,  0.0,  0.0,
	        1,  0.0,  0.0,
	        1,  0.0,  0.0,
	
	        // Left face
	        -1,  0.0,  0.0,
	        -1,  0.0,  0.0,
	        -1,  0.0,  0.0,
	        -1,  0.0,  0.0
	    ];
	
	    return {
	        vertexArr:vertices,
	        normalArr: vertexNormals,
	        texCoordArr: textureCoords,
	        indexArr: cubeVertexIndices
	    }
	
	};
	
	var Cube = AbstractPrimitive.extend({
	    size: 10,
	    construct: function(){
	        var bufferArrs = prepareBuffers(this.size);
	        this.vertexArr = bufferArrs.vertexArr;
	        this.normalArr = bufferArrs.normalArr;
	        this.texCoordArr = bufferArrs.texCoordArr;
	        this.indexArr = bufferArrs.indexArr;
	    }
	});
	
	module.exports = Cube;
}};
modules['plane'] =
    {code: function(module){
    var exports = module.exports;
    	
	var AbstractPrimitive = require('abstractPrimitive');
	
	var Plane = AbstractPrimitive.extend({
	    construct: function(){
	        this.vertexArr = [
	            0, 0,
	            0, 1,
	            1, 0,
	            1, 1
	        ];
	        this.indexArr = [0,1,2,3];
	        this.texCoordArr = [
	            0, 0,
	            0, 1,
	            1, 0,
	            1, 1
	        ];
	    }
	});
	
	module.exports = Plane;
}};
modules['sphere'] =
    {code: function(module){
    var exports = module.exports;
    	
	var AbstractPrimitive = require('abstractPrimitive');
	
	var prepareBuffers = function(radius,bands){
	    var latitudeBands = bands;
	    var longitudeBands = bands;
	
	    var vertexArr = [];
	    var normalArr = [];
	    var texCoordArr = [];
	    for (var latNumber=0; latNumber <= latitudeBands; latNumber++) {
	        var theta = latNumber * Math.PI / latitudeBands;
	        var sinTheta = Math.sin(theta);
	        var cosTheta = Math.cos(theta);
	
	        for (var longNumber=0; longNumber <= longitudeBands; longNumber++) {
	            var phi = longNumber * 2 * Math.PI / longitudeBands;
	            var sinPhi = Math.sin(phi);
	            var cosPhi = Math.cos(phi);
	
	            var x = cosPhi * sinTheta;
	            var y = cosTheta;
	            var z = sinPhi * sinTheta;
	            var u = 1 - (longNumber / longitudeBands);
	            var v = 1 - (latNumber / latitudeBands);
	
	            normalArr.push(x);
	            normalArr.push(y);
	            normalArr.push(z);
	            texCoordArr.push(u);
	            texCoordArr.push(v);
	            vertexArr.push(radius * x);
	            vertexArr.push(radius * y);
	            vertexArr.push(radius * z);
	        }
	    }
	
	    var indexArr = [];
	    for (latNumber=0; latNumber < latitudeBands; latNumber++) {
	        for (longNumber=0; longNumber < longitudeBands; longNumber++) {
	            var first = (latNumber * (longitudeBands + 1)) + longNumber;
	            var second = first + longitudeBands + 1;
	            indexArr.push(first);
	            indexArr.push(second);
	            indexArr.push(first + 1);
	
	            indexArr.push(second);
	            indexArr.push(second + 1);
	            indexArr.push(first + 1);
	        }
	    }
	
	    return {
	        vertexArr:vertexArr,
	        normalArr: normalArr,
	        texCoordArr: texCoordArr,
	        indexArr: indexArr
	    }
	
	};
	
	var Sphere = AbstractPrimitive.extend({
	    radius:10,
	    bands:30,
	    construct: function(){
	        var bufferArrs = prepareBuffers(this.radius,this.bands);
	        this.vertexArr = bufferArrs.vertexArr;
	        this.normalArr = bufferArrs.normalArr;
	        this.texCoordArr = bufferArrs.texCoordArr;
	        this.indexArr = bufferArrs.indexArr;
	    }
	});
	
	module.exports = Sphere;
	
	
	
	
	
	
	
}};
modules['colorRectDrawer'] =
    {code: function(module){
    var exports = module.exports;
    	
	var Plane = require('plane');
	
	var bundle = require('bundle');
	var ShaderProgram = require('shaderProgram');
	
	var VertexBuffer = require('vertexBuffer');
	var IndexBuffer = require('indexBuffer');
	
	var ColorRectDrawer = function(gl){
	
	    var program, posVertexBuffer, posIndexBuffer, texVertexBuffer;
	    var plane = new Plane();
	
	    this.bind = function(){
	        program.bind();
	
	        posVertexBuffer.setData(plane.vertexArr,gl.FLOAT,2);
	        program.bindBuffer(posVertexBuffer,'a_position');
	
	        posIndexBuffer.setData(plane.indexArr);
	        posIndexBuffer.bind();
	    };
	
	    this.unbind = function(){
	        posIndexBuffer.unbind();
	    };
	
	    this.setUniform = function(name,value){
	        program.setUniform(name,value);
	    };
	
	    this.draw = function(){
	        gl.drawElements(gl.TRIANGLE_STRIP, posIndexBuffer.getBufferLength(), gl.UNSIGNED_SHORT,0);
	    };
	
	    (function(){
	        program = new ShaderProgram(gl, [
	            bundle.shaders.basic['vertex.vert'],
	            bundle.shaders.color['fragment.frag']
	        ]);
	
	        posVertexBuffer = new VertexBuffer(gl);
	        posIndexBuffer = new IndexBuffer(gl);
	
	    })();
	
	};
	
	module.exports = ColorRectDrawer;
}};
modules['modelDrawer'] =
    {code: function(module){
    var exports = module.exports;
    	
	
	var bundle = require('bundle');
	var ShaderProgram = require('shaderProgram');
	
	var VertexBuffer = require('vertexBuffer');
	var IndexBuffer = require('indexBuffer');
	
	var ModelDrawer = function(gl){
	
	    var self = this;
	
	    var program, posVertexBuffer, posIndexBuffer, texVertexBuffer, normalBuffer;
	
	    this.bind = function(model){
	        program.bind();
	
	        posVertexBuffer.setData(model.vertexArr,gl.FLOAT,3);
	        program.bindBuffer(posVertexBuffer,'a_position');
	
	        texVertexBuffer.setData(model.texCoordArr,gl.FLOAT,2);
	        program.bindBuffer(texVertexBuffer,'a_texcoord');
	
	        normalBuffer.setData(model.normalArr,gl.FLOAT,3);
	        program.bindBuffer(normalBuffer,'a_normal');
	
	        posIndexBuffer.setData(model.indexArr);
	        posIndexBuffer.bind();
	    };
	
	    this.unbind  = function(){
	        posIndexBuffer.unbind();
	    };
	
	    this.setUniform = function(name,value){
	        program.setUniform(name,value);
	    };
	
	    this.draw = function(){
	        gl.drawElements(gl.TRIANGLES, posIndexBuffer.getBufferLength(), gl.UNSIGNED_SHORT,0);
	    };
	
	    (function(){
	        program = new ShaderProgram(gl, [
	            bundle.shaders.basic['vertex2.vert'],
	            bundle.shaders.texture['fragment2.frag']
	        ]);
	
	        posVertexBuffer = new VertexBuffer(gl);
	        texVertexBuffer = new VertexBuffer(gl);
	        normalBuffer = new VertexBuffer(gl);
	        posIndexBuffer = new IndexBuffer(gl);
	
	        program.bind();
	        //self.setUniform('u_alpha',1);
	
	    })();
	
	};
	
	module.exports = ModelDrawer;
}};
modules['multiColorRectDrawer'] =
    {code: function(module){
    var exports = module.exports;
    	
	var Plane = require('plane');
	
	var bundle = require('bundle');
	var ShaderProgram = require('shaderProgram');
	
	var VertexBuffer = require('vertexBuffer');
	var IndexBuffer = require('indexBuffer');
	
	var MultiColorRectDrawer = function(gl){
	
	    var program, posVertexBuffer, posIndexBuffer, vertexColorBuffer;
	    var plane = new Plane();
	
	    this.bind = function(colors){
	        program.bind();
	
	        vertexColorBuffer.setData(colors,gl.FLOAT,4);
	        program.bindBuffer(vertexColorBuffer,'a_color');
	
	        posVertexBuffer.setData(plane.vertexArr,gl.FLOAT,2);
	        program.bindBuffer(posVertexBuffer,'a_position');
	
	        posIndexBuffer.setData(plane.indexArr);
	        posIndexBuffer.bind();
	    };
	
	    this.unbind = function(){
	        posIndexBuffer.unbind();
	    };
	
	    this.setUniform = function(name,value){
	        program.setUniform(name,value);
	    };
	
	    this.draw = function(){
	        gl.drawElements(gl.TRIANGLE_STRIP, posIndexBuffer.getBufferLength(), gl.UNSIGNED_SHORT,0);
	    };
	
	    (function(){
	        program = new ShaderProgram(gl, [
	            bundle.shaders.basic['vertex.vert'],
	            bundle.shaders.multiColor['fragment.frag']
	        ]);
	
	        posVertexBuffer = new VertexBuffer(gl);
	        vertexColorBuffer = new VertexBuffer(gl);
	        posIndexBuffer = new IndexBuffer(gl);
	
	    })();
	
	};
	
	module.exports = MultiColorRectDrawer;
}};
modules['polyLineDrawer'] =
    {code: function(module){
    var exports = module.exports;
    	
	var bundle = require('bundle');
	var ShaderProgram = require('shaderProgram');
	
	var VertexBuffer = require('vertexBuffer');
	
	var PolyLineDrawer = function(gl){
	
	    var program, posVertexBuffer;
	
	    this.bind = function(vertexData){
	        program.bind();
	        posVertexBuffer.setData(vertexData,gl.FLOAT,2);
	        program.bindBuffer(posVertexBuffer,'a_position');
	    };
	
	    this.unbind = function(){
	
	    };
	
	    this.setUniform = function(name,value){
	        program.setUniform(name,value);
	    };
	
	    this.draw = function(){
	        gl.drawArrays(gl.LINE_STRIP, 0,posVertexBuffer.getBufferLength()/2);
	    };
	
	    (function(){
	        program = new ShaderProgram(gl, [
	            bundle.shaders.basic['vertex.vert'],
	            bundle.shaders.color['fragment.frag']
	        ]);
	
	        posVertexBuffer = new VertexBuffer(gl);
	
	    })();
	
	};
	
	module.exports = PolyLineDrawer;
}};
modules['spriteRectDrawer'] =
    {code: function(module){
    var exports = module.exports;
    	
	var Plane = require('plane');
	
	var bundle = require('bundle');
	var ShaderProgram = require('shaderProgram');
	
	var VertexBuffer = require('vertexBuffer');
	var IndexBuffer = require('indexBuffer');
	
	var SpriteRectDrawer = function(gl){
	
	    var self = this;
	
	    var program, posVertexBuffer, posIndexBuffer, texVertexBuffer;
	    var plane = new Plane();
	
	    this.bind = function(){
	        program.bind();
	
	        posIndexBuffer.setData(plane.indexArr);
	        posIndexBuffer.bind();
	
	        posVertexBuffer.setData(plane.vertexArr,gl.FLOAT,2);
	        program.bindBuffer(posVertexBuffer,'a_position');
	
	        texVertexBuffer.setData(plane.texCoordArr,gl.FLOAT,2);
	        program.bindBuffer(texVertexBuffer,'a_texcoord');
	    };
	
	    this.unbind  = function(){
	        posIndexBuffer.unbind();
	    };
	
	    this.setUniform = function(name,value){
	        program.setUniform(name,value);
	    };
	
	    this.draw = function(){
	        gl.drawElements(gl.TRIANGLE_STRIP, posIndexBuffer.getBufferLength(), gl.UNSIGNED_SHORT,0);
	    };
	
	    (function(){
	        program = new ShaderProgram(gl, [
	            bundle.shaders.basic['vertex.vert'],
	            bundle.shaders.texture['fragment.frag']
	        ]);
	
	        posVertexBuffer = new VertexBuffer(gl);
	        posIndexBuffer = new IndexBuffer(gl);
	        texVertexBuffer = new VertexBuffer(gl);
	
	        self.bind();
	        self.setUniform('u_alpha',1);
	
	    })();
	
	};
	
	module.exports = SpriteRectDrawer;
}};
modules['tween'] =
    {code: function(module){
    var exports = module.exports;
    	
	
	var Tween = function(obj,fromToVal,tweenTime,easeFnName){
	    var startedTime = null;
	    var progressFn;
	
	    var propsToChange = [];
	    easeFnName = easeFnName || 'linear';
	    this.completed = false;
	    var mathEx = require('mathEx');
	    this.tweenTime = tweenTime;
	
	    var normalizeFromTo = function(fromToVal){
	        fromToVal.from = fromToVal.from || {};
	        fromToVal.to = fromToVal.to || {};
	        var allPropsMap = {};
	        Object.keys(fromToVal.from).forEach(function(keyFrom){
	            allPropsMap[keyFrom] = true;
	        });
	        Object.keys(fromToVal.to).forEach(function(keyTo){
	            allPropsMap[keyTo] = true;
	        });
	        propsToChange = Object.keys(allPropsMap);
	        propsToChange.forEach(function(prp){
	            if (fromToVal.from[prp]===undefined) fromToVal.from[prp] = obj[prp];
	            if (fromToVal.to[prp]===undefined) fromToVal.from[prp] = obj[prp];
	        });
	        return fromToVal;
	    };
	
	    (function(){
	        fromToVal = normalizeFromTo(fromToVal);
	    })();
	
	
	
	    this._update = function(time){
	        if (!startedTime) startedTime = time;
	        if (this.completed) return;
	        var delta = time - startedTime;
	        if (delta>tweenTime) {
	            this.complete();
	            return;
	        }
	        var l = propsToChange.length;
	        while(l--){
	            var prp = propsToChange[l];
	            obj[prp] = mathEx.ease[easeFnName](delta,fromToVal.from[prp],fromToVal.to[prp] - fromToVal.from[prp],tweenTime);
	        }
	        progressFn && progressFn(obj);
	
	    };
	
	    this.progress = function(_progressFn){
	        progressFn = _progressFn;
	    };
	
	    this.reset = function() {
	        startedTime = null;
	        this.completed = false;
	    };
	
	    this._complete = function(){
	        if (this.completed) return;
	        var l = propsToChange.length;
	        while(l--){
	            var prp = propsToChange[l];
	            obj[prp] = fromToVal.to[prp];
	        }
	        progressFn && progressFn(obj);
	        this.completed = true;
	    };
	
	
	};
	
	module.exports = Tween;
	
}};
modules['tweenChain'] =
    {code: function(module){
    var exports = module.exports;
    	
	var TweenMovie = require('tweenMovie');
	var Tween = require('tween');
	
	var TweenChain = function(){
	    var timeOffset = 0;
	    var tweenMovie = new TweenMovie();
	
	
	    this.tween = function(obj,fromToVal,tweenTime,easeFnName){
	        tweenMovie.tween(timeOffset,obj,fromToVal,tweenTime,easeFnName);
	        timeOffset+= tweenTime;
	        return this;
	    };
	
	    this.wait = function(time){
	        timeOffset+=time;
	        return this;
	    };
	
	    this.loop = function(val){
	        tweenMovie.loop(val);
	        return this;
	    };
	
	    this.finish = function(fn){
	        tweenMovie.onComplete = fn;
	        return this;
	    };
	
	    this.reset = function(){
	        tweenMovie.reset();
	        timeOffset = 0;
	        return this;
	    };
	
	    this.play = function(){
	        tweenMovie.play();
	    };
	};
	
	module.exports = TweenChain;
	
}};
modules['tweenMovie'] =
    {code: function(module){
    var exports = module.exports;
    	
	var game = require('game');
	var Tween = require('tween');
	
	var TweenMovie = function(){
	    var tweens = [];
	    var startedTime = null;
	    this.completed = false;
	    this.onComplete = null;
	    var loop = false;
	
	    this.tween = function(startTime,obj,fromToVal,tweenTime,easeFnName){
	        var tween;
	        if (obj instanceof Tween) tween = obj;
	        else tween = new Tween(obj,fromToVal,tweenTime,easeFnName);
	        tweens.push({
	            startTime: startTime,
	            tween: tween
	        });
	        return this;
	    };
	
	    this.loop = function(val) {
	        loop = val;
	        return this;
	    };
	
	    this.finish = function(fn){
	        this.onComplete = fn;
	        return this;
	    };
	
	    this.play = function(isGlobal){
	        if (isGlobal) {
	            game.addTweenMovie(this);
	        } else {
	            var scene = game.getCurrScene();
	            scene.addTweenMovie(this);
	        }
	    };
	
	    this._update = function(time){
	        if (this.completed) return;
	        if (!startedTime) startedTime = time;
	        var deltaTime = time - startedTime;
	        var allCompleted = true;
	        tweens.forEach(function(item){
	            if (deltaTime>item.startTime) {
	                if (deltaTime<item.startTime+item.tween.tweenTime) {
	                    item.tween._update(time);
	                } else {
	                    item.tween._complete();
	                }
	            }
	            if (!item.tween.completed) allCompleted = false;
	        });
	
	        if (allCompleted) {
	            if (loop) {
	                this.reset();
	            } else {
	                this.completed = true;
	                this.onComplete && this.onComplete();
	            }
	        }
	    };
	
	    this.reset = function() {
	        startedTime = null;
	        this.completed = false;
	        tweens.forEach(function(item){
	            item.tween.reset();
	        });
	        return this;
	    }
	};
	
	
	module.exports = TweenMovie;
}};
modules['index'] =
    {code: function(module){
    var exports = module.exports;
    	
	var data;
	data = {"sound":[],"spriteSheet":[],"frameAnimation":[],"font":[{"name":"default","fontContext":{"symbols":{"0":{"x":24,"y":38,"width":15,"height":29},"1":{"x":45,"y":38,"width":15,"height":29},"2":{"x":66,"y":38,"width":15,"height":29},"3":{"x":87,"y":38,"width":15,"height":29},"4":{"x":108,"y":38,"width":15,"height":29},"5":{"x":129,"y":38,"width":15,"height":29},"6":{"x":150,"y":38,"width":15,"height":29},"7":{"x":171,"y":38,"width":15,"height":29},"8":{"x":192,"y":38,"width":15,"height":29},"9":{"x":213,"y":38,"width":15,"height":29}," ":{"x":3,"y":3,"width":15,"height":29},"!":{"x":24,"y":3,"width":15,"height":29},"\"":{"x":45,"y":3,"width":15,"height":29},"#":{"x":66,"y":3,"width":15,"height":29},"$":{"x":87,"y":3,"width":15,"height":29},"%":{"x":108,"y":3,"width":15,"height":29},"&":{"x":129,"y":3,"width":15,"height":29},"'":{"x":150,"y":3,"width":15,"height":29},"(":{"x":171,"y":3,"width":15,"height":29},")":{"x":192,"y":3,"width":15,"height":29},"*":{"x":213,"y":3,"width":15,"height":29},"+":{"x":234,"y":3,"width":15,"height":29},",":{"x":255,"y":3,"width":15,"height":29},"-":{"x":276,"y":3,"width":15,"height":29},".":{"x":297,"y":3,"width":15,"height":29},"/":{"x":3,"y":38,"width":15,"height":29},":":{"x":234,"y":38,"width":15,"height":29},";":{"x":255,"y":38,"width":15,"height":29},"<":{"x":276,"y":38,"width":15,"height":29},"=":{"x":297,"y":38,"width":15,"height":29},">":{"x":3,"y":73,"width":15,"height":29},"?":{"x":24,"y":73,"width":15,"height":29},"@":{"x":45,"y":73,"width":15,"height":29},"A":{"x":66,"y":73,"width":15,"height":29},"B":{"x":87,"y":73,"width":15,"height":29},"C":{"x":108,"y":73,"width":15,"height":29},"D":{"x":129,"y":73,"width":15,"height":29},"E":{"x":150,"y":73,"width":15,"height":29},"F":{"x":171,"y":73,"width":15,"height":29},"G":{"x":192,"y":73,"width":15,"height":29},"H":{"x":213,"y":73,"width":15,"height":29},"I":{"x":234,"y":73,"width":15,"height":29},"J":{"x":255,"y":73,"width":15,"height":29},"K":{"x":276,"y":73,"width":15,"height":29},"L":{"x":297,"y":73,"width":15,"height":29},"M":{"x":3,"y":108,"width":15,"height":29},"N":{"x":24,"y":108,"width":15,"height":29},"O":{"x":45,"y":108,"width":15,"height":29},"P":{"x":66,"y":108,"width":15,"height":29},"Q":{"x":87,"y":108,"width":15,"height":29},"R":{"x":108,"y":108,"width":15,"height":29},"S":{"x":129,"y":108,"width":15,"height":29},"T":{"x":150,"y":108,"width":15,"height":29},"U":{"x":171,"y":108,"width":15,"height":29},"V":{"x":192,"y":108,"width":15,"height":29},"W":{"x":213,"y":108,"width":15,"height":29},"X":{"x":234,"y":108,"width":15,"height":29},"Y":{"x":255,"y":108,"width":15,"height":29},"Z":{"x":276,"y":108,"width":15,"height":29},"[":{"x":297,"y":108,"width":15,"height":29},"\\":{"x":3,"y":143,"width":15,"height":29},"]":{"x":24,"y":143,"width":15,"height":29},"^":{"x":45,"y":143,"width":15,"height":29},"_":{"x":66,"y":143,"width":15,"height":29},"`":{"x":87,"y":143,"width":15,"height":29},"a":{"x":108,"y":143,"width":15,"height":29},"b":{"x":129,"y":143,"width":15,"height":29},"c":{"x":150,"y":143,"width":15,"height":29},"d":{"x":171,"y":143,"width":15,"height":29},"e":{"x":192,"y":143,"width":15,"height":29},"f":{"x":213,"y":143,"width":15,"height":29},"g":{"x":234,"y":143,"width":15,"height":29},"h":{"x":255,"y":143,"width":15,"height":29},"i":{"x":276,"y":143,"width":15,"height":29},"j":{"x":297,"y":143,"width":15,"height":29},"k":{"x":3,"y":178,"width":15,"height":29},"l":{"x":24,"y":178,"width":15,"height":29},"m":{"x":45,"y":178,"width":15,"height":29},"n":{"x":66,"y":178,"width":15,"height":29},"o":{"x":87,"y":178,"width":15,"height":29},"p":{"x":108,"y":178,"width":15,"height":29},"q":{"x":129,"y":178,"width":15,"height":29},"r":{"x":150,"y":178,"width":15,"height":29},"s":{"x":171,"y":178,"width":15,"height":29},"t":{"x":192,"y":178,"width":15,"height":29},"u":{"x":213,"y":178,"width":15,"height":29},"v":{"x":234,"y":178,"width":15,"height":29},"w":{"x":255,"y":178,"width":15,"height":29},"x":{"x":276,"y":178,"width":15,"height":29},"y":{"x":297,"y":178,"width":15,"height":29},"z":{"x":3,"y":213,"width":15,"height":29},"{":{"x":24,"y":213,"width":15,"height":29},"|":{"x":45,"y":213,"width":15,"height":29},"}":{"x":66,"y":213,"width":15,"height":29},"~":{"x":87,"y":213,"width":15,"height":29},"":{"x":108,"y":213,"width":0,"height":29},"":{"x":114,"y":213,"width":0,"height":29},"":{"x":120,"y":213,"width":0,"height":29},"":{"x":126,"y":213,"width":0,"height":29},"":{"x":132,"y":213,"width":0,"height":29},"":{"x":138,"y":213,"width":0,"height":29},"":{"x":144,"y":213,"width":0,"height":29},"":{"x":150,"y":213,"width":0,"height":29},"":{"x":156,"y":213,"width":0,"height":29},"":{"x":162,"y":213,"width":0,"height":29},"":{"x":168,"y":213,"width":0,"height":29},"":{"x":174,"y":213,"width":0,"height":29},"":{"x":180,"y":213,"width":0,"height":29},"":{"x":186,"y":213,"width":0,"height":29},"":{"x":192,"y":213,"width":0,"height":29},"":{"x":198,"y":213,"width":0,"height":29},"":{"x":204,"y":213,"width":0,"height":29},"":{"x":210,"y":213,"width":0,"height":29},"":{"x":216,"y":213,"width":0,"height":29},"":{"x":222,"y":213,"width":0,"height":29},"":{"x":228,"y":213,"width":0,"height":29},"":{"x":234,"y":213,"width":0,"height":29},"":{"x":240,"y":213,"width":0,"height":29},"А":{"x":246,"y":213,"width":15,"height":29},"Б":{"x":267,"y":213,"width":15,"height":29},"В":{"x":288,"y":213,"width":15,"height":29},"Г":{"x":3,"y":248,"width":15,"height":29},"Д":{"x":24,"y":248,"width":15,"height":29},"Е":{"x":45,"y":248,"width":15,"height":29},"Ж":{"x":66,"y":248,"width":15,"height":29},"З":{"x":87,"y":248,"width":15,"height":29},"И":{"x":108,"y":248,"width":15,"height":29},"Й":{"x":129,"y":248,"width":15,"height":29},"К":{"x":150,"y":248,"width":15,"height":29},"Л":{"x":171,"y":248,"width":15,"height":29},"М":{"x":192,"y":248,"width":15,"height":29},"Н":{"x":213,"y":248,"width":15,"height":29},"О":{"x":234,"y":248,"width":15,"height":29},"П":{"x":255,"y":248,"width":15,"height":29},"Р":{"x":276,"y":248,"width":15,"height":29},"С":{"x":297,"y":248,"width":15,"height":29},"Т":{"x":3,"y":283,"width":15,"height":29},"У":{"x":24,"y":283,"width":15,"height":29},"Ф":{"x":45,"y":283,"width":15,"height":29},"Х":{"x":66,"y":283,"width":15,"height":29},"Ц":{"x":87,"y":283,"width":15,"height":29},"Ч":{"x":108,"y":283,"width":15,"height":29},"Ш":{"x":129,"y":283,"width":15,"height":29},"Щ":{"x":150,"y":283,"width":15,"height":29},"Ъ":{"x":171,"y":283,"width":15,"height":29},"Ы":{"x":192,"y":283,"width":15,"height":29},"Ь":{"x":213,"y":283,"width":15,"height":29},"Э":{"x":234,"y":283,"width":15,"height":29},"Ю":{"x":255,"y":283,"width":15,"height":29},"Я":{"x":276,"y":283,"width":15,"height":29},"а":{"x":297,"y":283,"width":15,"height":29},"б":{"x":3,"y":318,"width":15,"height":29},"в":{"x":24,"y":318,"width":15,"height":29},"г":{"x":45,"y":318,"width":15,"height":29},"д":{"x":66,"y":318,"width":15,"height":29},"е":{"x":87,"y":318,"width":15,"height":29},"ж":{"x":108,"y":318,"width":15,"height":29},"з":{"x":129,"y":318,"width":15,"height":29},"и":{"x":150,"y":318,"width":15,"height":29},"й":{"x":171,"y":318,"width":15,"height":29},"к":{"x":192,"y":318,"width":15,"height":29},"л":{"x":213,"y":318,"width":15,"height":29},"м":{"x":234,"y":318,"width":15,"height":29},"н":{"x":255,"y":318,"width":15,"height":29},"о":{"x":276,"y":318,"width":15,"height":29},"п":{"x":297,"y":318,"width":15,"height":29},"р":{"x":3,"y":353,"width":15,"height":29},"с":{"x":24,"y":353,"width":15,"height":29},"т":{"x":45,"y":353,"width":15,"height":29},"у":{"x":66,"y":353,"width":15,"height":29},"ф":{"x":87,"y":353,"width":15,"height":29},"х":{"x":108,"y":353,"width":15,"height":29},"ц":{"x":129,"y":353,"width":15,"height":29},"ч":{"x":150,"y":353,"width":15,"height":29},"ш":{"x":171,"y":353,"width":15,"height":29},"щ":{"x":192,"y":353,"width":15,"height":29},"ъ":{"x":213,"y":353,"width":15,"height":29},"ы":{"x":234,"y":353,"width":15,"height":29},"ь":{"x":255,"y":353,"width":15,"height":29},"э":{"x":276,"y":353,"width":15,"height":29},"ю":{"x":297,"y":353,"width":15,"height":29},"я":{"x":3,"y":388,"width":15,"height":29},"ѐ":{"x":24,"y":388,"width":15,"height":29},"ё":{"x":45,"y":388,"width":15,"height":29},"ђ":{"x":66,"y":388,"width":15,"height":29},"ѓ":{"x":87,"y":388,"width":15,"height":29},"є":{"x":108,"y":388,"width":15,"height":29},"ѕ":{"x":129,"y":388,"width":15,"height":29},"і":{"x":150,"y":388,"width":15,"height":29},"ї":{"x":171,"y":388,"width":15,"height":29},"ј":{"x":192,"y":388,"width":15,"height":29},"љ":{"x":213,"y":388,"width":15,"height":29},"њ":{"x":234,"y":388,"width":15,"height":29},"ћ":{"x":255,"y":388,"width":15,"height":29}},"width":320,"height":420},"type":"font","fontColor":{"r":0,"g":0,"b":0},"fontSize":25,"fontFamily":"Monospace","resourcePath":"resources/font/default.png","id":"6991_3497_4"}],"gameObject":[],"layer":[],"scene":[],"particleSystem":[],"gameProps":{"width":800,"height":600,"scaleStrategy":0}}
	
	var bundle = require('bundle');
	bundle.prepare(data);
	if (!bundle.sceneList.size()) throw 'at least one scene must be created';
	var renderer = require('renderer');
	var game = require('game');
	var keyboard = require('keyboard');
	var audioPlayer = require('audioPlayer');
	
	window.addEventListener('load',function(){
	    document.body.ontouchstart = function(e){
	        e.preventDefault();
	        return false;
	    };
	
	    renderer.init();
	    require('mouse');
	    var startScene = bundle.sceneList.find({id:bundle.gameProps.startSceneId}) || bundle.sceneList.get(0);
	    game.setScene(startScene);
	
	
	    window.addEventListener('blur',function(){
	        audioPlayer.pauseAll();
	        renderer.stop();
	    });
	
	    window.addEventListener('focus',function(){
	        audioPlayer.resumeAll();
	        renderer.start();
	    });
	
	});
}};
require('index');