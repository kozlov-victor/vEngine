var modules = {}, require = function(name,opts){
    opts = opts || {};
    //console.trace('require: ',name);
    var moduleObj = modules[name];

    if (!moduleObj) {
        if (!opts.ignoreFail) {
            console.trace('can not found module with name ' + (name || '(name not specified)'));
            throw 'can not found module with name ' + (name || '(name not specified)');
        } else  {
            return {
                fake:true,
                instance: function(){
                    return {fake:true}
                }
            }
        }
    }

    if (!moduleObj.inited) initModuleObj(moduleObj);
    return moduleObj.inited.exports;
    function initModuleObj(moduleObj) {
        var module = {
            exports:{}
        };
        moduleObj.code(module,module.exports);
        moduleObj.inited = module;
    }
};

//modules['1'] = {code:function(){
//    var m2 = require('2');
//    console.log(1);
//}};
//
//
//modules['2'] = {code:function(){
//    var m1 = require('1');
//    console.log(2);
//}};
//
//require('1');

(function(){

    var getPopupContainer = function(){
        var container = document.getElementById('popupContainer');
        if (container) return container;
        container = document.createElement('div');
        container.id = 'popupContainer';
        container.style.cssText =
            'position:absolute;' +
            'bottom:10px;' +
            'right:10px;' +
            'z-index:10000;' +
            'width:300px;';
        document.body.appendChild(container);
        return container;
    };

    window.showError = function _err(e,lineNum){
        if (document.body) {
            var popup = document.createElement('div');
            popup.style.cssText =
                'background-color:rgba(255,255,255,0.95);' +
                'color:red;' +
                'margin-bottom:5px;'+
                'border:1px solid red;';
            var leftBox = document.createElement('div');
            leftBox.style.cssText = 'width:90%;display:inline-block;';
            var rightBox = document.createElement('div');
            rightBox.style.cssText = 'width:10%;display:inline-block;cursor:pointer;text-align:right;vertical-align:top;';
            rightBox.textContent = 'x';
            rightBox.onclick = function(){
                popup.remove();
            };
            leftBox.textContent = (e && e.message)?e.message:e;
            popup.appendChild(leftBox);
            popup.appendChild(rightBox);
            getPopupContainer().appendChild(popup);
        } else {
            setTimeout(function(){
                _err(e,lineNum);
            },100);
        }

    };

    window.canceled = false;

    window.addEventListener('error',function(e,url,lineNum){
        console.error(e);
        window.showError(e,lineNum);
        window.canceled = true;
    });

})();
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





modules['behaviour'] = {code: function(module,exports){
	
	var commonBehaviour = {};
	
	
	commonBehaviour['draggable'] = function(module,exports,self,parameters){
	
	var mouse = require('mouse').instance();
	var isMouseDown = false;
	var mX = 0;
	var mY = 0;
	var scene;
	
	function onCreate(){
	    scene = self.getScene();
	    self.on('click',function(e){
	        isMouseDown = true;
	        mX = e.objectX;
	        mY = e.objectY;
	    });
	    scene.on('mouseMove',function(e){
	        if (isMouseDown) {
	            self.posX = e.screenX - mX;
	            self.posY = e.screenY - mY;
	        }
	    });
	}
	
	function onUpdate(){
	    if (!mouse.isMouseDown) isMouseDown = false;
	}
	
	function onDefine(){
	    return {
	        parameters: {},
	        description:'draggable behaviour'
	    }
	}
	    exports.onCreate = onCreate;
	    exports.onUpdate = onUpdate;
	}
	
	
	exports.commonBehaviour = commonBehaviour;
	
	var scripts = {};
	scripts.gameObject = {};
	scripts.scene = {};
	
	
	scripts.gameObject['rocket.js'] = function(exports,self){
	    
	function onCreate() {
	    self.on('click',function(e){
	        console.log(e);
	    })
	}
	
	function onUpdate(time) {
	    self.angle+=0.01;
	}
	
	function onDestroy() {
	
	}
	    exports.onCreate = onCreate;
	    exports.onUpdate = onUpdate;
	    exports.onDestroy = onDestroy;
	};
	;
	
	
	scripts.scene['s.js'] = function(exports,self){
	    
	var tf;
	var fps = 0;
	
	function onCreate() {
	    tf = self.find('textField1');
	    console.log(tf);
	    setInterval(function(){
	        tf.setText('fps:'+fps);
	        fps = 0;
	    },1000);
	    
	}
	
	function onUpdate(time) {
	    fps++;
	}
	
	function onDestroy() {
	
	}
	    exports.onCreate = onCreate;
	    exports.onUpdate = onUpdate;
	    exports.onDestroy = onDestroy;
	};
	;
	
	exports.scripts = scripts;
	
	
}};

modules['collider'] = {code: function(module,exports){
	
	var math = require('math');
	var sceneManager = require('sceneManager').instance();
	
	var Collider = function(){
	
	    var gos;
	
	    this.setUp = function(){
	        var scene = sceneManager.getCurrScene();
	        gos = scene.getAllGameObjects();
	    };
	
	    this.check = function(obj,newX,newY){
	        if (!obj.rigid) {
	            obj.posX = newX;
	            obj.posY = newY;
	        }
	        var res = false;
	        gos.some(function(go){
	            if (!go.rigid) {
	                res = true;
	                return true;
	            }
	            if (obj==go) return true;
	            var objRect = obj.getRect();
	            objRect.x = newX;
	            objRect.y = newY;
	            if (math.isRectIntersectRect(objRect,go.getRect())) {
	                if (go.rigid) {
	                    res = true;
	                    obj.trigger('collide',go);
	                    return true;
	                } else {
	                    obj.trigger('overlap',go);
	                }
	            }
	        });
	        if (!res) {
	            obj.posX = newX;
	            obj.posY = newY;
	        }
	        return res;
	    };
	
	};
	
	var instance = null;
	
	module.exports.instance = function(){
	    if (instance==null) instance = new Collider();
	    return instance;
	};
}};

modules['eventEmitter'] = {code: function(module,exports){
	
	
	var EventEmitter = function(){
	
	    var events = {};
	
	    this.on = function(eventName,callBack){
	        events[eventName] = events[eventName] || [];
	        events[eventName].push(callBack);
	    };
	
	    this.trigger = function(eventName,data){
	        var es = events[eventName];
	        if (!es) return;
	        es.forEach(function(e){
	            e(data);
	        });
	    };
	};
	
	exports.EventEmitter = EventEmitter;
}};

modules['consts'] = {code: function(module,exports){
	
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

modules['keyboard'] = {code: function(module,exports){
	var Keyboard = function(){
	
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
	        return buffer[key]>KEY_RELEASED;
	    };
	
	    this.isJustPressed = function(key){
	        return buffer[key]==KEY_JUST_PRESSED;
	    };
	
	    this.isReleased = function(key) {
	        return  buffer[key]<=KEY_RELEASED || !buffer[key];
	    };
	
	    this.isJustReleased = function(key) {
	        return buffer[key] == KEY_JUST_RELEASED;
	    };
	
	    this.update = function(){
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
	
	var instance = null;
	
	module.exports.instance = function(){
	    if (instance==null) instance = new Keyboard();
	    return instance;
	};
}};

modules['mouse'] = {code: function(module,exports){
	
	var bundle = require('bundle').instance();
	var renderer = require('renderer').instance();
	var math = require('math');
	var sceneManager = require('sceneManager').instance();
	var deviceScale = require('device').deviceScale;
	
	var Mouse = function(){
	
	    var self = this;
	    self.isMouseDown = false;
	    var globalScale = bundle.gameProps.globalScale;
	    var canvas = renderer.getCanvas();
	
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
	
	    var resolveScreenPoint = function(e){
	        return {
	            x: (e.clientX - bundle.gameProps.left) / globalScale.x * deviceScale,
	            y: (e.clientY - bundle.gameProps.top) / globalScale.y * deviceScale
	        };
	    };
	
	    var resolveClick = function(e){
	        self.isMouseDown = true;
	        var scene = sceneManager.getCurrScene();
	        if (!scene) return;
	        var point = resolveScreenPoint(e);
	        scene._layers.someReversed(function(l){
	            var found = false;
	            l._gameObjects.someReversed(function(g){
	                if (
	                    math.isPointInRect(point,g.getRect(),g.angle)
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
	        var scene = sceneManager.getCurrScene();
	        var point = resolveScreenPoint(e);
	        scene.trigger('mouseMove',{
	            screenX: point.x,
	            screenY: point.y
	        });
	    };
	
	    var resolveMouseUp = function(){
	        self.isMouseDown = false;
	    };
	
	};
	
	var instance = null;
	
	module.exports.instance = function(){
	    if (instance==null) instance = new Mouse();
	    return instance;
	};
}};

modules['bundle'] = {code: function(module,exports){
	
	var collections = require('collections');
	var consts = require('consts');
	var utils = require('utils');
	var behaviour = require('behaviour',{ignoreFail:true});
	
	var Bundle = function(data){
	
	    this.spriteSheetList = new collections.List();
	    this.gameObjectList = new collections.List();
	    this.frameAnimationList = new collections.List();
	    this.layerList = new collections.List();
	    this.sceneList = new collections.List();
	    this.layerList = new collections.List();
	    this.fontList = new collections.List();
	    this.soundList = new collections.List();
	    this.particleSystemList = new collections.List();
	    this.gameProps = {};
	
	    var self = this;
	
	    var toDataSource = function(ResourceClass,dataList,resourceList){
	        resourceList.clear();
	        dataList.forEach(function(item){
	            resourceList.add(new ResourceClass(item));
	        });
	    };
	
	
	    this.prepare = function(_data){
	        var models = require('models');
	        data = data || _data;
	        consts.RESOURCE_NAMES.forEach(function(itm){
	            toDataSource(models[utils.capitalize(itm)],data[itm],self[itm+'List']);
	        });
	        self.gameProps = data.gameProps;
	        data = null;
	    };
	
	    var applyIndividualBehaviour = function(model){
	        var behaviourFn = behaviour && behaviour.scripts && behaviour.scripts[model.type] && behaviour.scripts[model.type][model.name+'.js'];
	        if (behaviourFn) {
	            var exports = {};
	            behaviourFn(exports,model);
	            exports.onCreate();
	            model.__updateIndividualBehaviour__ = function(deltaTime){
	                exports.onUpdate(deltaTime);
	            }
	        } else {
	            model.__updateIndividualBehaviour__ = consts.noop;
	        }
	
	    };
	
	    var applyCommonBehaviour = function(model){
	
	        if (behaviour.fake) return; // this is editor mode
	        var exportsList = [];
	        if (!model._commonBehaviour || !model._commonBehaviour.size()) {
	            model.__updateCommonBehaviour__ = consts.noop;
	            return;
	        }
	        model._commonBehaviour.forEach(function(cb){
	            var module = {};
	            module.exports = {};
	            var exports = module.exports;
	            behaviour.commonBehaviour[cb.name](module,exports,model,cb.parameters);
	            exportsList.push(exports);
	            exports.onCreate();
	        });
	        model.__updateCommonBehaviour__ = function(){
	            exportsList.forEach(function(item){
	                item.onUpdate();
	            });
	        }
	    };
	
	    this.applyBehaviourAll = function(){
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
	    };
	
	    this.embeddedResources = {};
	    this.embeddedResources.data = {};
	    this.embeddedResources.isEmbedded = false;
	
	};
	
	var data;
	
	data = {
	
	
	    sound:[],
	
	    spriteSheet:[
	    {
	        "_frameWidth": 0,
	        "_frameHeight": 0,
	        "resourcePath": "resources/spriteSheet/rocket.png",
	        "name": "rocket",
	        "width": 39,
	        "height": 68,
	        "type": "spriteSheet",
	        "numOfFramesH": 1,
	        "numOfFramesV": 1,
	        "id": "3115_2954_94"
	    }
	],
	
	    frameAnimation:[],
	
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
	        "spriteSheetId": "3115_2954_94",
	        "currFrameIndex": 0,
	        "_sprPosX": 0,
	        "_sprPosY": 0,
	        "name": "rocket",
	        "width": 39,
	        "height": 68,
	        "type": "gameObject",
	        "commonBehaviour": [
	            {
	                "name": "draggable",
	                "parameters": [],
	                "description": "",
	                "id": "1364_4760_28",
	                "type": "commonBehaviour"
	            }
	        ],
	        "velX": 0,
	        "velY": 0,
	        "frameAnimationIds": [],
	        "rigid": 1,
	        "groupName": "",
	        "posX": 0,
	        "posY": 0,
	        "angle": 0,
	        "id": "8689_6539_95"
	    }
	],
	
	    layer:[
	    {
	        "name": "l",
	        "type": "layer",
	        "gameObjectProps": [
	            {
	                "spriteSheetId": "3115_2954_94",
	                "currFrameIndex": 0,
	                "_sprPosX": 0,
	                "_sprPosY": 0,
	                "name": "rocket",
	                "width": 39,
	                "height": 68,
	                "type": "gameObject",
	                "commonBehaviour": [],
	                "velX": 0,
	                "velY": 0,
	                "frameAnimationIds": [],
	                "rigid": 1,
	                "groupName": "",
	                "posX": 206,
	                "posY": 208,
	                "angle": 0,
	                "protoId": "8689_6539_95",
	                "id": "8067_9107_96"
	            },
	            {
	                "spriteSheetId": "3115_2954_94",
	                "currFrameIndex": 0,
	                "_sprPosX": 0,
	                "_sprPosY": 0,
	                "name": "rocket",
	                "width": 39,
	                "height": 68,
	                "type": "gameObject",
	                "commonBehaviour": [
	                    {
	                        "name": "draggable",
	                        "parameters": [],
	                        "description": "",
	                        "id": "1364_4760_28",
	                        "type": "commonBehaviour"
	                    }
	                ],
	                "velX": 0,
	                "velY": 0,
	                "frameAnimationIds": [],
	                "rigid": 1,
	                "groupName": "",
	                "posX": 118,
	                "posY": 235,
	                "angle": 0,
	                "protoId": "8689_6539_95",
	                "id": "9986_2543_84"
	            },
	            {
	                "spriteSheetId": "3115_2954_94",
	                "currFrameIndex": 0,
	                "_sprPosX": 0,
	                "_sprPosY": 0,
	                "name": "rocket",
	                "width": 39,
	                "height": 68,
	                "type": "gameObject",
	                "commonBehaviour": [
	                    {
	                        "name": "draggable",
	                        "parameters": [],
	                        "description": "",
	                        "id": "1364_4760_28",
	                        "type": "commonBehaviour"
	                    }
	                ],
	                "velX": 0,
	                "velY": 0,
	                "frameAnimationIds": [],
	                "rigid": 1,
	                "groupName": "",
	                "posX": 307,
	                "posY": 181,
	                "angle": 0,
	                "protoId": "8689_6539_95",
	                "id": "9519_5092_85"
	            },
	            {
	                "height": 29,
	                "text": "123\n23",
	                "width": 90,
	                "type": "userInterface",
	                "subType": "textField",
	                "groupName": "",
	                "posX": 38,
	                "posY": 25,
	                "angle": 0,
	                "name": "textField1",
	                "protoId": {},
	                "id": "4288_6989_114",
	                "fontId": "6991_3497_4"
	            }
	        ],
	        "id": "0544_3465_92"
	    }
	],
	
	    scene:[
	    {
	        "name": "s",
	        "type": "scene",
	        "layerProps": [
	            {
	                "type": "layer",
	                "protoId": "0544_3465_92",
	                "id": "2356_3479_93"
	            }
	        ],
	        "colorBG": [
	            220,
	            217,
	            230
	        ],
	        "id": "8195_8237_91",
	        "useBG": 1
	    }
	],
	
	    particleSystem:[],
	
	    gameProps:{
	    "width": 800,
	    "height": 600,
	    "scaleStrategy": "2"
	}
	
	};
	
	
	var instance = null;
	
	module.exports.instance = function(){
	    if (instance==null) {
	        instance = new Bundle(data);
	        data = null;
	    }
	    return instance;
	};
}};

modules['device'] = {code: function(module,exports){
	
	var isCocoonJS = navigator.isCocoonJS;
	exports.deviceScale = isCocoonJS?(window.devicePixelRatio||1):1;
}};

modules['index'] = {code: function(module,exports){
	
	var bundle = require('bundle').instance();
	bundle.prepare(); // todo remove
	if (!bundle.sceneList.size()) throw 'at least one scene must be created';
	
	var renderer = require('renderer').instance();
	var sceneManager = require('sceneManager').instance();
	var keyboard = require('keyboard').instance();
	
	window.addEventListener('load',function(){
	    document.body.ontouchstart = function(e){
	        e.preventDefault();
	        return false;
	    };
	
	    renderer.init();
	    require('mouse').instance();
	    sceneManager.setScene(bundle.sceneList.get(0));
	});
}};

modules['scaleManager'] = {code: function(module,exports){
	
	var SCALE_STRATEGY = require('consts').SCALE_STRATEGY;
	var deviceScale = require('device').deviceScale;
	var bundle = require('bundle').instance();
	
	var ScaleManager = function(canvas,ctx){
	
	    var rescaleView = function(x,y){
	        ctx.rescaleView(x,y);
	    };
	
	    var processScreenSize = function(){
	        var gameProps = bundle.gameProps;
	        switch (+gameProps.scaleStrategy) {
	            case SCALE_STRATEGY.NO_SCALE:
	                var w = window.innerWidth*deviceScale;
	                var h = window.innerHeight*deviceScale;
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
	                break;
	            case SCALE_STRATEGY.CSS_PRESERVE_ASPECT_RATIO:
	                w = window.innerWidth*deviceScale;
	                h = window.innerHeight*deviceScale;
	                var scaleFactor = Math.min(w / gameProps.width, h / gameProps.height);
	                var scaledWidth = gameProps.width * scaleFactor;
	                var scaledHeight = gameProps.height * scaleFactor;
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
	                canvas.style.width = scaledWidth + 'px';
	                canvas.style.height = scaledHeight + 'px';
	                canvas.style.top = gameProps.top + 'px';
	                canvas.style.left = gameProps.left + 'px';
	                break;
	            case SCALE_STRATEGY.HARDWARE_PRESERVE_ASPECT_RATIO:
	                w = window.innerWidth*deviceScale;
	                h = window.innerHeight*deviceScale;
	                scaleFactor = Math.min(w / gameProps.width, h / gameProps.height);
	                scaledWidth = gameProps.width * scaleFactor;
	                scaledHeight = gameProps.height * scaleFactor;
	                gameProps.globalScale.x = scaledWidth / gameProps.width;
	                gameProps.globalScale.y = scaledHeight / gameProps.height;
	                gameProps.globalScale.scaledWidth = scaledWidth;
	                gameProps.globalScale.scaledHeight = scaledHeight;
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
	                w = window.innerWidth*deviceScale;
	                h = window.innerHeight*deviceScale;
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
	                w = window.innerWidth*deviceScale;
	                h = window.innerHeight*deviceScale;
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
	        instance = new ScaleManager(canvas,ctx);
	    }
	    return instance;
	};
	
	
}};

modules['sceneManager'] = {code: function(module,exports){
	
	
	var SceneManager = function(){
	
	    var self = this;
	
	    var renderer;
	    var soundManager;
	    var utils;
	    var bundle;
	
	    this.currScene = null;
	
	    // todo extract to resource loader
	    var preloadAndSet = function(scene){
	
	        if (!renderer) renderer = require('renderer').instance();
	        if (!soundManager) soundManager = require('soundManager').instance();
	        if (!utils) utils = require('utils');
	        if (!bundle) bundle = require('bundle').instance();
	
	        var q = new utils.Queue();
	        q.onResolved = function(){
	            bundle.applyBehaviourAll();
	            renderer.setScene(scene);
	        };
	        var allSprSheets = scene.getAllSpriteSheets();
	        bundle.particleSystemList.forEach(function(ps){
	            allSprSheets.add(ps._gameObject._spriteSheet);
	        });
	        allSprSheets.asArray().forEach(function(spSheet){
	            var resourcePath = bundle.embeddedResources.isEmbedded?
	                bundle.embeddedResources.data[spSheet.resourcePath]:
	                './'+spSheet.resourcePath;
	            renderer.
	                getContext().
	                loadTextureInfo(
	                resourcePath,
	                {type:bundle.embeddedResources.isEmbedded?'base64':'',fileName:spSheet.resourcePath},
	                function(textureInfo){
	                    console.log('loaded texture info',spSheet.resourcePath,textureInfo);
	                    spSheet._textureInfo = textureInfo;
	                    q.resolveTask();
	                });
	            q.addTask();
	        });
	        // todo remove slash??
	        bundle.soundList.forEach(function(snd){
	            q.addTask();
	            var resourcePath = bundle.embeddedResources.isEmbedded?
	            bundle.embeddedResources.data[snd.resourcePath]:
	            './'+snd.resourcePath;
	            soundManager.loadSound(
	                resourcePath,
	                {type:bundle.embeddedResources.isEmbedded?'base64':''},
	                function(buffer){
	                    snd._buffer = buffer;
	                    q.resolveTask();
	                }
	            );
	        });
	        q.start();
	    };
	
	    this.setScene = function(scene){
	        var models = require('models');
	        if (!(scene instanceof models.Scene)) throw 'object '+scene+' is not a scene';
	        if (this.currScene==scene) return;
	        this.currScene = scene;
	        preloadAndSet(scene);
	    };
	
	    this.setSceneByName = function(sceneName){
	        if (!(sceneName && sceneName.substr)) throw 'object '+ sceneName + 'is not a string';
	        var bundle = require('bundle').instance();
	        var scene = bundle.sceneList.find({name: sceneName});
	        if (!scene) throw 'no scene with name ' + sceneName + ' found';
	        self.setScene(scene);
	    };
	
	    this.getCurrScene = function(){
	        return this.currScene;
	    }
	
	};
	
	
	var instance = null;
	
	module.exports.instance = function(){
	    if (instance==null) instance = new SceneManager();
	    return instance;
	};
	
}};

modules['audioPlayer'] = {code: function(module,exports){
	
	exports.AudioPlayer = function(context){
	
	    var free = true;
	    var currLoop = false;
	    var self = this;
	    var currSource = null;
	    var isUsedHtmlAudio = false;
	
	    (function(){
	
	        if (!context) {
	            context = (window.Audio && new window.Audio());
	            isUsedHtmlAudio = true;
	        }
	
	    })();
	
	    this.play = function(buffer,loop){
	        free = false;
	        if (!context) return;
	
	        currLoop = loop;
	
	        if (isUsedHtmlAudio) {
	            console.log('used html audio',buffer);
	            context.src = buffer;
	            context.play();
	        } else {
	            currSource = context.createBufferSource();
	            currSource.buffer = buffer;
	            currSource.loop = loop;
	            currSource.connect(context.destination);
	            currSource.start(0);
	            currSource.onended = function(){
	                self.stop();
	            }
	        }
	
	    };
	
	    this.stop = function() {
	        if (!context) return;
	        if (currSource)  {
	            currSource.stop();
	            currSource.disconnect(context.destination);
	        }
	        currSource = null;
	        free = true;
	        currLoop = false;
	    };
	
	    this.isFree = function() {
	        return free;
	    }
	
	};
	
	
	
}};

modules['audioSet'] = {code: function(module,exports){
	
	var AudioPlayer = require('audioPlayer').AudioPlayer;
	
	exports.AudioSet = function(context,numOfPlayers){
	    var players = [];
	    for (var i = 0;i<numOfPlayers;i++) {
	        players.push(new AudioPlayer(context));
	    }
	
	    this.getFreePlayer = function(){
	        for (var i = 0;i<numOfPlayers;i++) {
	            if (players[i].isFree()) return players[i];
	        }
	        return null;
	    }
	
	};
}};

modules['soundManager'] = {code: function(module,exports){
	
	var bundle = require('bundle').instance();
	var AudioSet = require('audioSet').AudioSet;
	
	var AudioContext = window.AudioContext || window.webkitAudioContext;
	var context = window.AudioContext1 && new window.AudioContext1();
	
	var SoundManager = function(){
	
	    var audioSet = new AudioSet(context,5);
	
	    var base64ToArrayBuffer = function(base64) {
	        var binaryString = window.atob(base64);
	        var len = binaryString.length;
	        var bytes = new Uint8Array(len);
	        for (var i = 0; i < len; i++) {
	            bytes[i] = binaryString.charCodeAt(i);
	        }
	        return bytes.buffer;
	    };
	
	    var _loadSoundXhr = function(url,callback){
	        var request = new XMLHttpRequest();
	        request.open('GET', url, true);
	        request.responseType = 'arraybuffer';
	
	        request.setRequestHeader('Accept-Ranges', 'bytes');
	        request.setRequestHeader('Content-Range', 'bytes');
	
	        request.onload = function() {
	            if (!context) {
	                callback(url);
	                return;
	            }
	            context.decodeAudioData(request.response,function(buffer) {
	                callback(buffer);
	            });
	        };
	        request.onerror=function(e){throw 'can not load sound with url '+url};
	        request.send();
	    };
	
	    var _loadSoundBase64 = function(url,callback){
	        if (context) {
	            var byteArray = base64ToArrayBuffer(url);
	            context.decodeAudioData(byteArray).then(function(buffer) {
	                callback(buffer);
	            });
	        } else {
	            callback(url);
	        }
	    };
	
	    this.loadSound = function( url, opts, callback) {
	        if (opts.type=='base64') {
	            _loadSoundBase64(url, callback);
	        } else {
	            _loadSoundXhr(url, callback);
	        }
	    };
	
	    this.play = function(sndName,loop){
	        var player = audioSet.getFreePlayer();
	        if (!player) return;
	        player.play(bundle.soundList.find({name:sndName})._buffer,loop);
	    }
	};
	
	var instance = null;
	
	module.exports.instance = function(){
	    if (instance==null) instance = new SoundManager();
	    return instance;
	};
}};

modules['mat4'] = {code: function(module,exports){
	
	exports.makeIdentity = function () {
	    return [
	        1, 0, 0, 0,
	        0, 1, 0, 0,
	        0, 0, 1, 0,
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

modules['math'] = {code: function(module,exports){
	var Vec2 = require('vec2').Vec2;
	
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
	    console.log(res);
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
	
	exports.getRandomInRange = function(min, max){
	    if (min>max) {
	        var tmp = min;
	        min = max;
	        max = tmp;
	    }
	    var res = Math.random() * (max - min) + min;
	    if (res>max) res = max;
	    else if (res<min) res = min;
	    return ~~res;
	};
	
	exports.getNormalizedVectorFromPoints = function(pointA,pointB) {
	    var angle = Math.atan2(pointB.y-pointA.y,pointB.x-pointA.x);
	    return {
	        x:Math.cos(angle),
	        y:Math.sin(angle)
	    }
	};
}};

modules['utils'] = {code: function(module,exports){
	exports.Queue = function(){
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
}};

modules['vec2'] = {code: function(module,exports){
	
	exports.Vec2 = function(_x,_y){
	
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
}};

modules['collections'] = {code: function(module,exports){
	
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
	    };
	    this.pop = function(){
	        return self.rs.pop();
	    }
	};
	
	exports.Set = function(){
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
}};

modules['models'] = {code: function(module,exports){
	
	var bundle = require('bundle').instance();
	var collider = require('collider',{ignoreFail:true}).instance();
	var renderer = require('renderer',{ignoreFail:true}).instance();
	var collections = require('collections');
	var math = require('math');
	var EventEmitter = require('eventEmitter').EventEmitter;
	
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
	
	exports.BaseModel = Class.extend({
	    id:null,
	    protoId:null,
	    name:'',
	    _emitter:null,
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
	        var newObj = new this.constructor(this.toJSON());
	        newObj._init();
	        return newObj;
	    },
	    on: function(eventName,callBack){
	        this._emitter.on(eventName,callBack);
	    },
	    trigger: function(eventName,data){
	        this._emitter.trigger(eventName,data);
	    },
	    _init:function(){
	        this._emitter = new EventEmitter();
	        arguments && arguments[0] && this.fromJSON(arguments[0]);
	    }
	});
	
	var Resource = exports.BaseModel.extend({
	    resourcePath:''
	});
	
	exports.Sound = Resource.extend({
	    type:'sound',
	    _buffer:null
	});
	
	exports.SpriteSheet = Resource.extend({
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
	
	exports.BaseGameObject = exports.BaseModel.extend({
	    type:'baseGameObject',
	    groupName:'',
	    _spriteSheet:null,
	    posX:0,
	    posY:0,
	    angle:0,
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
	        return require('sceneManager').instance().getCurrScene();
	    },
	    update: function(){},
	    _render: function(){}
	});
	
	exports.GameObject = exports.BaseGameObject.extend({
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
	        this._frameAnimations = new collections.List();
	        if (!this.spriteSheetId) {
	            return;
	        }
	        this._spriteSheet = bundle.spriteSheetList.find({id: this.spriteSheetId});
	        self.setFrameIndex(self.currFrameIndex);
	        self._frameAnimations.clear();
	        this.frameAnimationIds.forEach(function(id){
	            var a = bundle.frameAnimationList.find({id: id});
	            a = a.clone(exports.FrameAnimation);
	            a._gameObject = self;
	            self._frameAnimations.add(a);
	        });
	        self._commonBehaviour = new collections.List();
	        this.commonBehaviour.forEach(function(cb){
	            self._commonBehaviour.add(new exports.CommonBehaviour(cb));
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
	        collider.check(this,posX,posY);
	        this.__updateIndividualBehaviour__(delta);
	        this.__updateCommonBehaviour__();
	        this._render();
	    },
	    stopFrAnimations: function(){
	        this._currFrameAnimation && this._currFrameAnimation.stop();
	    },
	    _render: function(){
	        var ctx = renderer.getContext();
	        ctx.save();
	        ctx.translate(this.posX + this._spriteSheet._frameWidth /2,this.posY + this._spriteSheet._frameHeight/2);
	        if (this.angle) {
	            ctx.rotateZ(this.angle);
	        }
	        ctx.translate(-this._spriteSheet._frameWidth /2, -this._spriteSheet._frameHeight/2);
	        ctx.drawImage(
	            this._spriteSheet._textureInfo,
	            this._sprPosX,
	            this._sprPosY,
	            this._spriteSheet._frameWidth,
	            this._spriteSheet._frameHeight,
	            0,
	            0
	        );
	        ctx.restore();
	    }
	});
	
	exports.FrameAnimation = exports.BaseModel.extend({
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
	
	exports.Layer = exports.BaseModel.extend({
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
	                    objCloned = new exports.TextField(prop);
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
	        this._gameObjects.forEach(function(obj){
	            if (!obj) return;
	            obj.update(currTime,deltaTime);
	        });
	    }
	});
	
	exports.Scene = exports.BaseModel.extend({
	    type:'scene',
	    layerProps:[],
	    _layers:null,
	    _allGameObjects:null,
	    useBG:false,
	    colorBG:[255,255,255],
	    _twins:null,
	    __onResourcesReady: function(){
	        var self = this;
	        self._allGameObjects = new collections.List();
	        self._layers.forEach(function(l){
	            self._allGameObjects.addAll(l._gameObjects);
	        });
	    },
	    construct: function(){
	        var self = this;
	        self._layers = new collections.List();
	        this.layerProps.forEach(function(prop){
	            var l = bundle.layerList.find({id: prop.protoId});
	            var lCloned = l.clone(exports.Layer);
	            lCloned.fromJSON(prop);
	            lCloned._scene = self;
	            self._layers.add(lCloned);
	        });
	    },
	    getAllSpriteSheets:function() {
	        var dataSet = new collections.Set();
	        this._layers.forEach(function(l){
	            dataSet.combine(l.getAllSpriteSheets());
	        });
	        return dataSet;
	    },
	    find: function(name){
	        return this._allGameObjects.find({name:name});
	    },
	    getAllGameObjects:function(){
	        return this._allGameObjects;
	    },
	    update: function(currTime,deltaTime){
	        this._layers.forEach(function(layer){
	            layer.update(currTime,deltaTime);
	        });
	        this.__updateIndividualBehaviour__(deltaTime);
	    }
	});
	
	exports.Font = exports.BaseModel.extend({
	    type:'font',
	    fontColor:'black',
	    fontSize:12,
	    fontFamily:'Monospace',
	    resourcePath:'',
	    fontContext:null
	});
	
	exports.TextField = exports.BaseGameObject.extend({
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
	            this._spriteSheet = new exports.SpriteSheet({resourcePath:this._font.resourcePath});
	            this.setText(this.text);
	        },
	        clone:function(){
	            return this._super();
	        },
	        construct: function(){
	            this.rigid = false;
	            var font =
	                bundle.fontList.find({id:this.fontId}) ||
	                bundle.fontList.find({name:'default'});
	            this.setFont(font);
	        },
	        update: function(){
	            this._render();
	        },
	        _render: function(){
	            var posX = this.posX;
	            var oldPosX = posX;
	            var posY = this.posY;
	            var self = this;
	            this._chars.forEach(function(ch){
	                var charInCtx = self._font.fontContext.symbols[ch]||self._font.fontContext.symbols['?'];
	                if (ch=='\n') {
	                    posX = oldPosX;
	                    posY+= charInCtx.height;
	                    return;
	                }
	                renderer.getContext().drawImage(
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
	
	exports.CommonBehaviour = exports.BaseModel.extend({
	    type:'commonBehaviour',
	    name:'',
	    description:'',
	    parameters:[],
	    construct: function(){
	
	    }
	});
	
	exports.ParticleSystem = exports.BaseModel.extend({
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
	        if (this.particleAngle.to>this.particleAngle.from) this.particleAngle.from += 2*Math.PI;
	        if (!this.particleVelocity) this.particleVelocity = {from:1,to:100};
	        if (!this.particleLiveTime) this.particleLiveTime = {from:100,to:1000};
	        if (!this.emissionRadius) this.emissionRadius = 0;
	        this._gameObject = bundle.gameObjectList.find({id:this.gameObjectId});
	    },
	    emit: function(x,y){
	        var r = function(obj){
	            return math.getRandomInRange(obj.from,obj.to);
	        };
	        for (var i = 0;i<r(this.numOfParticlesToEmit);i++) {
	            var particle = this._gameObject.clone();
	            var angle = r(this.particleAngle);
	            var vel = r(this.particleVelocity);
	            particle.fromJSON({
	                velX:vel*Math.cos(angle),
	                velY:vel*Math.sin(angle),
	                posX:r({from:x-this.emissionRadius,to:x+this.emissionRadius}),
	                posY:r({from:y-this.emissionRadius,to:y+this.emissionRadius})
	            });
	            particle.liveTime = r(this.particleLiveTime);
	            bundle.applyBehaviour(particle);
	            this._particles.push(particle);
	        }
	    },
	    update:function(time,delta){
	        var self = this;
	        this._particles.forEach(function(p){
	            if (!p._timeCreated) p._timeCreated = time;
	            if (time - p._timeCreated > p.liveTime) {
	                self._particles.splice(self._particles.indexOf(p),1);
	            }
	            p.update(time,delta);
	        });
	    }
	});
	
}};

modules['canvasContext'] = {code: function(module,exports){
	
	var bundle = require('bundle').instance();
	
	var CanvasContext = function(){
	
	    var ctx;
	
	    this.init = function(canvas) {
	        ctx = canvas.getContext('2d');
	    };
	
	    this.drawImage = function(
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
	
	    var cache = {};
	
	    this.loadTextureInfo = function(url,opts,callBack) {
	        if (cache.url) {
	            callBack(cache[url]);
	            return;
	        }
	        if (opts.type=='base64') {
	            url = utils.getBase64prefix('image',opts.fileName) + url;
	        }
	
	        var img = new Image(url);
	        img.onload = function(){
	            var texture = {
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
	        img.onerror=function(e){throw 'can not load image with url '+ url};
	        img.src = url;
	    };
	
	    this.clear = function(){
	
	        ctx.fillStyle="#FFFFFF";
	        ctx.fillRect(
	            0,
	            0,
	            bundle.gameProps.width,
	            bundle.gameProps.height);
	
	    };
	
	    this.save = function() {
	        ctx.save();
	    };
	
	    this.scale = function(scaleX,scaleY){
	        ctx.scale(scaleX,scaleY);
	    };
	
	    this.rotateZ = function(angleInRadians) {
	        ctx.rotate(angleInRadians);
	    };
	
	    this.rotateY = function(angleInRadians) {
	        //
	    };
	
	    this.translate = function(x,y){
	        ctx.translate(x,y);
	    };
	
	    this.restore = function(){
	        ctx.restore();
	    };
	
	    this.rescaleView = function(scaleX,scaleY){
	        //
	    };
	
	    this.beginFrameBuffer = function(){
	        //
	    };
	
	    this.flipFrameBuffer = function(){
	        //
	    };
	
	};
	
	var instance = null;
	
	module.exports.instance = function(){
	    if (instance==null) instance = new CanvasContext();
	    return instance;
	};
}};

modules['frameBuffer'] = {code: function(module,exports){
	
	exports.FrameBuffer = function(gl,width,height){
	
	    var glTexture;
	    var glRenderBuffer;
	    var glFrameBuffer;
	
	    this.bind = function(){
	        gl.bindFramebuffer(gl.FRAMEBUFFER, glFrameBuffer);
	        gl.viewport(0, 0, width,height);
	    };
	
	    this.unbind = function(){
	        gl.bindFramebuffer(gl.FRAMEBUFFER, null);
	    };
	
	    this.getGlTexture = function(){
	        return glTexture;
	    };
	
	
	    (function(){
	
	        //1. Init Color Texture
	        glTexture = gl.createTexture();
	        gl.bindTexture(gl.TEXTURE_2D, glTexture);
	        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
	        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
	        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
	        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
	        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, width, height, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
	        //2. Init Render Buffer
	        glRenderBuffer = gl.createRenderbuffer();
	        gl.bindRenderbuffer(gl.RENDERBUFFER, glRenderBuffer);
	        gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_COMPONENT16, width, height);
	        //3. Init Frame Buffer
	        glFrameBuffer = gl.createFramebuffer();
	        gl.bindFramebuffer(gl.FRAMEBUFFER, glFrameBuffer);
	        gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, glTexture, 0);
	        gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.RENDERBUFFER, glRenderBuffer);
	        //4. Clean up
	        gl.bindTexture(gl.TEXTURE_2D, null);
	        gl.bindRenderbuffer(gl.RENDERBUFFER, null);
	        gl.bindFramebuffer(gl.FRAMEBUFFER, null);
	
	
	    })();
	
	};
}};

modules['glContext'] = {code: function(module,exports){
	
	var mat4 = require('mat4');
	var utils = require('utils');
	var shaderSources = require('shaderSources');
	var Shader = require('shader').Shader;
	var VertexBuffer = require('vertexBuffer').VertexBuffer;
	var Texture = require('texture').Texture;
	var MatrixStack = require('matrixStack').MatrixStack;
	var FrameBuffer = require('frameBuffer').FrameBuffer;
	var bundle = require('bundle').instance();
	var SCALE_STRATEGY = require('consts').SCALE_STRATEGY;
	
	var GlContext = function(){
	
	    var gl;
	    var mScaleX = 1, mScaleY = 1;
	    var shader;
	    var posVertexBuffer;
	    var texVertexBuffer;
	    var matrixStack = new MatrixStack();
	    var frameBuffer;
	    var gameProps;
	    this.colorBG = [0,0,0];
	
	    this.init = function(canvas){
	
	        gameProps = bundle.gameProps;
	        gl = canvas.getContext("webgl",{ alpha: false });
	        shader = new Shader(gl, shaderSources.SRC.TEXTURE_SHADER);
	        shader.bind();
	
	        posVertexBuffer = new VertexBuffer(gl,shader.getProgram());
	        posVertexBuffer.bind([
	            0, 0,
	            0, 1,
	            1, 0,
	            1, 0,
	            0, 1,
	            1, 1
	        ],2,'a_position');
	
	        texVertexBuffer = new VertexBuffer(gl,shader.getProgram());
	        posVertexBuffer.bind([
	            0, 0,
	            0, 1,
	            1, 0,
	            1, 0,
	            0, 1,
	            1, 1
	        ],2,'a_texcoord');
	
	        frameBuffer = new FrameBuffer(gl,gameProps.canvasWidth,gameProps.canvasHeight);
	
	        gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
	        gl.enable(gl.BLEND);
	
	    };
	
	
	    var cache = {};
	
	    this.loadTextureInfo = function(url,opts,callBack) {
	        if (cache.url) {
	            callBack(cache[url]);
	            return;
	        }
	        if (opts.type=='base64') {
	            url = utils.getBase64prefix('image',opts.fileName) + url;
	        }
	
	        var img = new Image();
	        var texture = new Texture(gl,img);
	
	        img.onload = function() {
	            texture.apply(img);
	            callBack(texture);
	        };
	        img.onerror=function(e){throw 'can not load image with url '+ url};
	        img.src = url;
	    };
	
	
	    var makePositionMatrix = function(dstX,dstY,dstWidth,dstHeight,viewWidth,viewHeight,scaleX,scaleY){
	        // this matirx will convert from pixels to clip space
	        var projectionMatrix = mat4.make2DProjection(viewWidth,viewHeight, 1);
	
	        // this matrix will scale our 1 unit quad
	        // from 1 unit to dstWidth, dstHeight units
	        var scaleMatrix = mat4.makeScale(dstWidth*scaleX, dstHeight*scaleY, 1);
	
	        // this matrix will translate our quad to dstX, dstY
	        var translationMatrix = mat4.makeTranslation(dstX*scaleX, dstY*scaleY, 0);
	
	        // multiply them all togehter
	        var matrix = mat4.matrixMultiply(scaleMatrix, translationMatrix);
	        matrix = mat4.matrixMultiply(matrix, matrixStack.getCurrentMatrix());
	        matrix = mat4.matrixMultiply(matrix, projectionMatrix);
	        return matrix;
	    };
	
	    var makeTextureMatrix = function(srcX,srcY,srcWidth,srcHeight,texWidth,texHeight){
	        // Because texture coordinates go from 0 to 1
	        // and because our texture coordinates are already a unit quad
	        // we can select an area of the texture by scaling the unit quad
	        // down
	        var texScaleMatrix = mat4.makeScale(srcWidth / texWidth, srcHeight / texHeight, 1);
	        var texTranslationMatrix = mat4.makeTranslation(srcX / texWidth, srcY / texHeight, 0);
	
	        // multiply them together
	        return mat4.matrixMultiply(texScaleMatrix, texTranslationMatrix);
	    };
	    
	    var currTex = null;
	
	    this.drawImage = function(
	        texture,
	        srcX, srcY, srcWidth, srcHeight,
	        dstX, dstY) {
	
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
	
	
	        // Set the matrix.
	        //console.log(gameProps);
	        shader.setUniform("u_matrix",makePositionMatrix(
	                dstX,dstY,srcWidth,srcHeight,
	                gameProps.width,gameProps.height,1,1
	            )
	        );
	
	        // Set the texture matrix.
	        shader.setUniform("u_textureMatrix",makeTextureMatrix(srcX,srcY,srcWidth,srcHeight,texWidth,texHeight));
	
	        if (texWidth==64) {
	            //gl.blendFunc(gl.ONE, gl.ONE);
	        } else {
	            gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
	        }
	
	        // draw the quad (2 triangles, 6 vertices)
	        gl.drawArrays(gl.TRIANGLES, 0, 6);
	    };
	
	    this.clear = function() {
	        //gl.colorMask(false, false, false, true);
	        gl.clearColor(this.colorBG[0]/255,this.colorBG[1]/255,this.colorBG[2]/255,1);
	        gl.clear(gl.COLOR_BUFFER_BIT);
	    };
	
	    this.save = function() {
	        matrixStack.save();
	    };
	
	    this.scale = function(x,y) {
	        matrixStack.scale(x,y);
	    };
	
	    this.rotateZ = function(angleInRadians) {
	        matrixStack.rotateZ(angleInRadians);
	    };
	
	    this.rotateY = function(angleInRadians) {
	        matrixStack.rotateY(angleInRadians);
	    };
	
	    this.translate = function(x,y){
	        matrixStack.translate(x,y);
	    };
	
	    this.restore = function(){
	        matrixStack.restore();
	    };
	
	    this.rescaleView = function(scaleX,scaleY){
	        mScaleX = scaleX;
	        mScaleY = scaleY;
	    };
	
	    this.beginFrameBuffer = function(){
	        this.save();
	        gl.viewport(0, 0, gameProps.width, gameProps.height);
	        frameBuffer.bind();
	    };
	
	    this.flipFrameBuffer = function(){
	        currTex = null;
	        this.restore();
	        this.save();
	        this.translate(0,gameProps.canvasHeight);
	        this.scale(1,-1);
	        frameBuffer.unbind();
	        this.clear();
	        gl.viewport(0, 0, gameProps.canvasWidth,gameProps.canvasHeight);
	        gl.bindTexture(gl.TEXTURE_2D, frameBuffer.getGlTexture());
	
	        if (gameProps.scaleStrategy==SCALE_STRATEGY.HARDWARE_PRESERVE_ASPECT_RATIO) {
	            shader.setUniform('u_matrix',
	                makePositionMatrix(
	                    gameProps.globalScale.left,gameProps.globalScale.top,
	                    gameProps.width, gameProps.height,
	                    gameProps.canvasWidth,gameProps.canvasHeight,
	                    mScaleX,mScaleY
	                )
	            );
	        } else {
	            shader.setUniform('u_matrix',
	                makePositionMatrix(
	                    0,0,
	                    gameProps.width, gameProps.height,
	                    gameProps.canvasWidth,gameProps.canvasHeight,
	                    mScaleX,mScaleY
	                )
	            );
	        }
	
	        shader.setUniform('u_textureMatrix',
	            makeTextureMatrix(
	                0,0,gameProps.canvasWidth,gameProps.canvasHeight,
	                gameProps.canvasWidth,gameProps.canvasHeight
	            )
	        );
	
	        gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
	        gl.drawArrays(gl.TRIANGLES, 0, 6);
	        this.restore();
	    };
	
	
	
	
	};
	
	var instance = null;
	
	module.exports.instance = function(){
	    if (instance==null) instance = new GlContext();
	    return instance;
	};
}};

modules['matrixStack'] = {code: function(module,exports){
	
	var mat4 = require('mat4');
	
	exports.MatrixStack = function () {
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
}};

modules['shader'] = {code: function(module,exports){
	function compileShader(gl, shaderSource, shaderType) {
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
	        console.error('*** Error compiling shader ' + shader + ':' + lastError);
	        throw 'Error compiling shader';
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
	        console.error("Error in program linking:" + lastError);
	        gl.deleteProgram(program);
	        throw 'Error in program linking';
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
	            case 'float':       return function(gl,location,value) {gl.uniform1f(location, value)};
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
	
	
	exports.Shader = function(gl,sources){
	
	    var program;
	    var uniforms;
	
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
	        uniform.setter(gl,uniform.location,value);
	    };
	
	};
}};

modules['shaderSources'] = {code: function(module,exports){
	
	exports.SRC = {
	    TEXTURE_SHADER: [
	        [
	            'attribute vec4 a_position; ',
	            'attribute vec2 a_texcoord; ',
	
	            'uniform mat4 u_matrix; ',
	            'uniform mat4 u_textureMatrix; ',
	
	            'varying vec2 v_texcoord; ',
	
	            'void main() { ',
	            'gl_Position = u_matrix * a_position; ',
	            '   v_texcoord = (u_textureMatrix * vec4(a_texcoord, 0, 1)).xy; ',
	            '}'
	        ].join(''),
	        [
	            'precision mediump float; ',
	
	            'varying vec2 v_texcoord;',
	
	            'uniform sampler2D texture;',
	
	            'void main() { ',
	            '    gl_FragColor = texture2D(texture, v_texcoord);',
	            '} '
	        ].join('')
	    ]
	
	};
}};

modules['texture'] = {code: function(module,exports){
	
	var isPowerOf2 = function(value) {
	    return (value & (value - 1)) == 0;
	};
	
	exports.Texture = function(gl,img){
	
	    var tex;
	    var size;
	
	    this.apply = function(){
	        size = {width:img.width,height:img.height};
	        this.bind();
	        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img);
	        // Check if the image is a power of 2 in both dimensions.
	        if (isPowerOf2(img.width) && isPowerOf2(img.height)) {
	            gl.generateMipmap(gl.TEXTURE_2D);
	        } else {
	            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
	            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
	            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
	            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
	        }
	        gl.bindTexture(gl.TEXTURE_2D, null);
	    };
	
	    this.bind = function(){
	        gl.bindTexture(gl.TEXTURE_2D, tex);
	    };
	
	
	    this.getSize = function(){
	        return size;
	    };
	
	    this.getGlTexture = function(){
	        return tex;
	    };
	
	    (function(){
	        tex = gl.createTexture();
	        gl.bindTexture(gl.TEXTURE_2D, tex);
	        // Fill the texture with a 1x1 blue pixel.
	        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE,
	            new Uint8Array([0, 0, 255, 255]));
	    })();
	
	};
}};

modules['vertexBuffer'] = {code: function(module,exports){
	
	module.exports.VertexBuffer = function(gl,program){
	    var buffer = gl.createBuffer();
	
	    this.bind = function(bufferData, itemSize, uniformLocationName){
	        var uniformLocation = gl.getAttribLocation(program, uniformLocationName); // todo cache locations
	        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
	        gl.enableVertexAttribArray(uniformLocation);
	        gl.vertexAttribPointer(
	            uniformLocation,
	            itemSize,
	            gl.FLOAT,
	            false,  // if the content is normalized vectors
	            0,  // number of bytes to skip in between elements
	            0
	        ); // offsets to the first element
	        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(bufferData), gl.STATIC_DRAW);
	    };
	};
}};

modules['renderer'] = {code: function(module,exports){
	
	var bundle = require('bundle').instance();
	var collider = require('collider').instance();
	var keyboard = require('keyboard').instance();
	var glContext = require('glContext').instance();
	var canvasContext = require('canvasContext').instance();
	
	var Renderer = function(){
	
	    var canvas;
	    var ctx;
	    var scene;
	    var self = this;
	    var currTime = 0;
	    var lastTime = 0;
	    var reqAnimFrame = window.requestAnimationFrame||window.webkitRequestAnimationFrame||function(f){setTimeout(f,17)};
	    var gameProps;
	
	
	
	    this.getContext = function(){
	        return ctx;
	    };
	
	    this.getCanvas = function(){
	        return canvas;
	    };
	
	    this.init = function(){
	        canvas = document.querySelector('canvas');
	        gameProps = bundle.gameProps;
	        if (!canvas) {
	            canvas = document.createElement('canvas');
	            document.body.appendChild(canvas);
	        }
	        ctx = glContext;
	        //ctx = canvasContext;
	        require('scaleManager').instance(canvas,ctx).manage();
	        ctx.init(canvas);
	
	        drawScene();
	
	    };
	
	    this.getCanvas = function(){
	        return canvas;
	    };
	
	    this.cancel = function(){
	        window.canceled = true;
	    };
	
	    var drawScene = function(){
	        if (window.canceled) {
	           return;
	        }
	        //if (window.canceled) return
	
	
	        reqAnimFrame(drawScene);
	
	        if (!scene) return;
	
	        lastTime = currTime;
	        currTime = Date.now();
	        var deltaTime = lastTime ? currTime - lastTime : 0;
	
	        ctx.beginFrameBuffer();
	
	        ctx.clear();
	        scene.update(currTime,deltaTime);
	        bundle.particleSystemList.forEach(function(p){
	            p.update(currTime,deltaTime);
	        });
	
	        ctx.flipFrameBuffer();
	
	
	        keyboard.update();
	    };
	    this.setScene = function(_scene){
	        scene = _scene;
	        ctx.colorBG = scene.colorBG;
	        collider.setUp();
	    };
	
	};
	
	var instance = null;
	
	module.exports.instance = function(){
	    if (instance==null) instance = new Renderer();
	    return instance;
	};
}};

require('index');