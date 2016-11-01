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

//<code><%if (opts.debug){%>
//<code>window.require = require;
//<code><%}%>

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


modules['class'] = {code: function(module,exports){
	var Class = function() {};
	
	Class.extend = function(props, staticProps) {
	
	    var mixins = [];
	
	    if (arguments[0].slice) {
	        mixins = arguments[0];
	        props = arguments[1];
	        staticProps = arguments[2];
	    } else if (arguments[0].call) {
	        var obj = {};
	        props(obj);
	        props = obj;
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
	
	exports.Class = Class;
	
	
	
	
}};

modules['behaviour'] = {code: function(module,exports){
	
	var commonBehaviour = {};
	
	
	commonBehaviour['control4dir'] = function(module,exports,self,parameters){
	/**
	 exports.parameters = {
	    velocity: 100,
	    walkLeftAnimation: 'left',
	    walkRightAnimation: 'right',
	    walkUpAnimation:'up',
	    walkDownAnimation:'down',
	    idleLeftAnimation: 'idleLeft',
	    idleRightAnimation: 'idleRight',
	    idleUpAnimation:'idleUp',
	    idleDownAnimation:'idleDown'
	 };
	 exports.description = "control character with cursor to walk up, down, left and right";
	 */
	
	var keyboard = require('keyboard').instance();
	var animations = {};
	
	var _stop = function(lastDirection){
	    self.stopFrAnimations();
	    self.vel.x = 0;
	    self.vel.y = 0;
	    var keyIdle = 'idle'+lastDirection+'Animation';
	    if (animations[keyIdle]) {
	        animations[keyIdle].play();
	    }
	};
	var _go = function(direction){
	    animations['walk'+direction+'Animation'].play();
	};
	
	var dirs = ['Left','Right','Up','Down'];
	dirs.forEach(function(dir){
	    var keyWalk = 'walk'+dir+'Animation', keyIdle = 'idle'+dir+'Animation';
	    animations[keyWalk] = self.getFrAnimation(parameters[keyWalk]);
	    if (!animations[keyWalk]) throw 'can not find animation ' + parameters[keyWalk] +' an gameObject ' + self.name;
	    parameters[keyIdle] && (animations[keyIdle] = self.getFrAnimation(parameters[keyIdle]));
	});
	
	function onUpdate(){
	    if (keyboard.isPressed(keyboard.KEY_UP)) {
	        self.vel.y = -parameters.velocity;
	        _go('Up');
	    }
	    if (keyboard.isPressed(keyboard.KEY_DOWN)) {
	        self.vel.y = parameters.velocity;
	        _go('Down');
	    }
	    if (keyboard.isPressed(keyboard.KEY_LEFT)) {
	        self.vel.x = -parameters.velocity;
	        _go('Left');
	    }
	    if (keyboard.isPressed(keyboard.KEY_RIGHT)) {
	        self.vel.x = parameters.velocity;
	        _go('Right');
	    }
	
	    if (keyboard.isJustReleased(keyboard.KEY_LEFT)) {
	        _stop('Left');
	    } else if (keyboard.isJustReleased(keyboard.KEY_RIGHT)) {
	        _stop('Right');
	    } else if (keyboard.isJustReleased(keyboard.KEY_UP)) {
	        _stop('Up');
	    } else if (keyboard.isJustReleased(keyboard.KEY_DOWN)) {
	        _stop('Down');
	    }
	}
	
	    exports.onUpdate = onUpdate;
	}
	
	commonBehaviour['draggable'] = function(module,exports,self,parameters){
	/**
	 *
	 exports.parameters =  {};
	 exports.description = 'draggable behaviour with multitouch supporting';
	 */
	
	var mouse = require('mouse').instance();
	var points = {};
	var scene = self.getScene();
	var collider = require('collider').instance();
	var camera = require('camera').instance();
	
	var getEventId = function(e){
	    return e.id || 1;
	};
	
	self.on('click',function(e){
	    points[getEventId(e)] = {
	        isMouseDown:true,
	        mX: e.objectX,
	        mY: e.objectY
	    };
	});
	
	scene.on('mouseMove',function(e){
	    var point = points[getEventId(e)];
	    if (point && point.isMouseDown) {
	        collider.manage(
	            self,e.screenX - point.mX,
	            e.screenY - point.mY
	        );
	        //self.pos.x = e.screenX - point.mX;
	        //self.pos.y = e.screenY - point.mY;
	    }
	});
	
	scene.on('mouseUp',function(e){
	    delete points[getEventId(e)];
	});
	
	function onUpdate(){};
	
	    exports.onUpdate = onUpdate;
	}
	
	
	exports.commonBehaviour = commonBehaviour;
	
	var scripts = {};
	scripts.gameObject = {};
	scripts.scene = {};
	
	
	scripts.gameObject['btn.js'] = function(exports,self){
	    
	
	
	function onUpdate(time) {
	
	}
	    
	    exports.onUpdate = onUpdate;
	};
	
	scripts.gameObject['hero.js'] = function(exports,self){
	    
	require('camera').instance().follow(self);
	var ps = require('bundle').instance().particleSystemList.find({name:'test'});
	var scene = self.getScene();
	
	var onUpdate = function(){
	   scene.log(scene.getTileAt(self.pos.x,self.pos.y));
	};
	    
	    exports.onUpdate = onUpdate;
	};
	
	scripts.gameObject['imgWall.js'] = function(exports,self){
	    
	function onUpdate(time) {
	
	}
	    
	    exports.onUpdate = onUpdate;
	};
	
	scripts.gameObject['sprHeroes.js'] = function(exports,self){
	    
	function onUpdate(time) {
	
	}
	    
	    exports.onUpdate = onUpdate;
	};
	
	scripts.gameObject['wall.js'] = function(exports,self){
	    
	function onUpdate(time) {
	
	}
	    
	    exports.onUpdate = onUpdate;
	};
	;
	
	
	scripts.scene['mainScene.js'] = function(exports,self){
	    
	var btnUp = self.find('btnUp');
	var btnDown =  self.find('btnDown');
	var btnLeft = self.find('btnLeft');
	var btnRight =  self.find('btnRight');
	 
	var keyboard = require('keyboard').instance(); 
	
	btnUp.
	on(['mouseDown','mouseEnter'],function(){
	    keyboard.emulatePress(keyboard.KEY_UP);
	}).
	on(['mouseUp','mouseLeave'],function(){
	    keyboard.emulateRelease(keyboard.KEY_UP);  
	});
	
	btnDown.
	on(['mouseDown','mouseEnter'],function(){
	    keyboard.emulatePress(keyboard.KEY_DOWN); 
	})
	.on(['mouseUp','mouseLeave'],function(){
	    keyboard.emulateRelease(keyboard.KEY_DOWN);  
	});
	
	btnLeft.
	on(['mouseDown','mouseEnter'],function(){
	    keyboard.emulatePress(keyboard.KEY_LEFT); 
	}).
	on(['mouseUp','mouseLeave'],function(){
	    keyboard.emulateRelease(keyboard.KEY_LEFT);  
	});
	
	btnRight.
	on(['mouseDown','mouseEnter'],function(){
	    keyboard.emulatePress(keyboard.KEY_RIGHT); 
	}).
	on(['mouseUp','mouseLeave'],function(){
	    keyboard.emulateRelease(keyboard.KEY_RIGHT);  
	});
	
	    
	    function onUpdate(){};
	    
	    exports.onUpdate = onUpdate;
	};
	;
	
	exports.scripts = scripts;
	
	
}};

modules['collider'] = {code: function(module,exports){
	
	var mathEx = require('mathEx');
	var sceneManager = require('sceneManager').instance();
	
	var Collider = function(){
	
	    var gos;
	    var scene;
	
	    this.setUp = function(){
	        scene = sceneManager.getCurrScene();
	        gos = scene.getAllGameObjects();
	    };
	
	    this.manage = function(obj,newX,newY){
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
	
	    this.emulatePress = function(code){
	        buffer[code] = KEY_PRESSED;
	    };
	
	    this.emulateRelease = function(code){
	        buffer[code] = KEY_JUST_RELEASED;
	    };
	
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
	var mathEx = require('mathEx');
	var sceneManager = require('sceneManager').instance();
	var device = require('device');
	
	var objectsCaptured = {};
	
	var Mouse = function(){
	
	    var self = this;
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
	            resolveClick(e);
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
	        var scene = sceneManager.getCurrScene();
	        var point = resolveScreenPoint(e);
	        var isObjectCaptured = false;
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
	                        objectY:point.y - g.pos.y
	                    });
	                    isObjectCaptured = true;
	                    point.object = g;
	                    return found = true;
	                }
	            });
	            return found;
	        });
	        return point;
	    };
	
	    var resolveClick = function(e){
	        
	        var scene = sceneManager.getCurrScene();
	        var point = triggerEvent(e,'click');
	        scene.trigger('click',{
	            screenX:point.x,
	            screenY:point.y
	        });
	        triggerEvent(e,'mouseDown');
	    };
	
	    var resolveMouseMove = function(e){
	        
	        var scene = sceneManager.getCurrScene();
	        var point = triggerEvent(e,'mouseMove');
	        scene.trigger('mouseMove',{
	            screenX:point.x,
	            screenY:point.y
	        });
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
	        
	        var scene = sceneManager.getCurrScene();
	        var point = triggerEvent(e,'mouseUp');
	        scene.trigger('mouseUp',{
	            screenX:point.x,
	            screenY:point.y
	        });
	        var lastMouseDownObject = objectsCaptured[point.id];
	        if (!lastMouseDownObject) return;
	        lastMouseDownObject.trigger('mouseUp');
	        delete objectsCaptured[point.id];
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
	        data = data || _data;
	        self.gameProps = data.gameProps;
	        consts.RESOURCE_NAMES.forEach(function(itm){
	            toDataSource(
	                require(itm)[utils.capitalize(itm)],
	                data[itm],
	                self[itm+'List']);
	        });
	        data = null;
	    };
	
	    var applyIndividualBehaviour = function(model){
	        var behaviourFn = behaviour && behaviour.scripts && behaviour.scripts[model.type] && behaviour.scripts[model.type][model.name+'.js'];
	        if (behaviourFn) {
	            var exports = {};
	            behaviourFn(exports,model);
	            model.__updateIndividualBehaviour__ = function(time){
	                exports.onUpdate(time);
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
	    this.embeddedResources.data = {"resources/spriteSheet/btn.png":"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","resources/spriteSheet/imgWall.png":"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","resources/spriteSheet/sprHeroes.png":"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","resources/font/default.png":"iVBORw0KGgoAAAANSUhEUgAAAUAAAAEFCAYAAACSBT51AAAgAElEQVR4Xu3dCbi33VcX9G2jZZNZDk1WmhVlKqbZJJFlCaUVplJWSgSKUY4NppKmYjlhFGUhOAQqlokmZESUkpUpaZkWTWZZllKKzaPX5/nf3z/r3e++p9/9O+f8znP2uq73Os97zj3se+29v2vca32jNmlyYHJgcuCNcuAbvdHvnp89OTA5MDnQJgDORTA5MDnwZjkwAfDNTv388MmByYEJgB9cA1/dWvsVrbWf8YaWxg9vrf3s5Zt/zM53f1Zr7R9trf341tpPfkM8mp/6nnLgqQDwX2mtfWJr7d9rrX23g7z7Ha21b91a+/jW2r/ZWvuLW2v/fmvt61prf9LBZ/zrrbXv0Vr7S1tr/+5yD1D7y1tr36m19pt3nnMUAD3/+7XWvunyzC9srf3+g2PMZd+1tfZjW2vfsbX2LVtrv7e19ltba571Sw8+C1D/qNbaz2mtAbKz9Ce21v7z1tof3lr7s1trv2fnAX98a+2/Wq7/c1prv/vsC1trf2Fr7T9qrf2VrTX8nnScAz9oWR/4/me11v6Pwa3frrX2D7fW/prW2jdf5vTfaK39tNbab9t41V/SWvOf/eqn9YD+6dba37tx3x+77AX7/Tsva/n/XtbJr1nW5n+zcv93b6399cte//Nba9+itfb/tNZc/2tba/9Ua+23HGfPR6/8qtbaX7X832cuzxk+5n0CQJv497XW/r8FmDDyj26t/c+ttf91AVF/26IjAPgPtdY+u3vIf7ssuP/04GT9wNbaL2ztnQ/2/2+t/U/LmP+Q1tq/1Fr7vgefcxUAAefft2wOm+YI/bjW2j/WWvt5rbVPPXJDd80EwBuYtqyV/7i1BijMFUDrifLwq1pr32T5gz3why3//t9ba39zaw0ojcg6HNEeAP6B1tofs/FJ/v7JrbVfPbiGkgJs1+j/ba39A621n3WCZT+4tfYF5fo3A4B/WWvt326t/Wuttb9uYQAp+BWttS9trf1NK0z8G1trP2TRGml0mP4/tNb+60UK2ej/2XIvCfcbF62PNKYN0QT/2eX3R7RdIPe7FklJ0/thi5b7R7TWfMOftzzvyJxfAUDfahzfeJH2NPAjREq7jzD50xdebd1HM/3fWmufv9zTAyAh8He21v7U1tpPPTKAN3qN9fsvt9a+vrX2Zwwsjj9h0ea/2bI+8ZSmDTBZFYCGlfJtF2ujZyNt8mtaa//O8t8/2Vr7Vgc0QMBJYyPQWWD/RWvtj1s0sJ/UWmNlePa3X8ZX3/svtNb+l8Xis5f++2U9/kWtNYL2OywXf9yyF/emnqX4n7TW/sflu13/ZgCQVLSB/pGykfip/P+PaK19zoB7pNtnLBsTsFkczAuLjGkKHCoD87zvsgBeHvnPtdb+nsWE/507s2RR/XfLNTZ9/r03uaO/XwFAPCFZmRoW2Bn6Vxchw4TvteH+OT99Mc9tLrz+P4sJTGP/Zxbg/+cXQXRmHG/pWsBEwP7jrTVWSE8/obX2ExewIUQJ8BAXy9e21pir5su89UQA/1/ll3FJ7WmAn7KAH22zJ26Of2vRXgHq339iwgAnMAXsANx79ggI/x2tte+5KEKufzMASLX34X/Fogn6+C3/3ycsarlJ/6uXe6oJzIz4/os04dNEggU0GpoPszdE0gkM0G6YKVvEXCCJaYL8NdEu9yZ39PcrAMgfRDv4oSc0zoyBdvELFg04vqKt8ftOG+/7tNa+vLX2N7TWvmyZL/NmQ/N/7hFzyH82pYDMWyH+LH4twuPPXPG90vasP1bFDxgwhgb+dy+gQtDv0VEA3HsOjezPXfYiQDxDhLN7rBn7dYvs4a9srX3x8p1MfvTeAiBp93cVjtCm+Duo4/H1ASpAQyuLj8MCQj+3tfZprbVfsvgo/G7PB/i3tda+qLVGq7EREZPwNyzS1b85gCv9yYPgAqc0f83PbK396DMrorv2VgDEl2iqR0C7HyIH/H+5/NLipl0cISa+KDue0P7+lmVjH7nXNSLQgO8q346+71Gui8ZtzXLX9MSdwY+M/N11PWXt+v2ftrgxtr7vXgAYEBPYtOaPkoCbNUYTtM63MhRYav/hYrJbj3jx6gDwly0fALH/g0Vq8L/ZKDSGnkSI+M/OUgI/X9Ja+1sXE4xphvYAEMD+usUUEZ1iZpBQFiATmJRF3kEbFWAQleaz4ZcIiUp7Dn+jSBjz5hby/RzMvoWJcZQEYX7RYuob+15waPRc3wPICBHm6x7xx/4Ti9ZpwfILiUDT/kYO8tHz3iIAcsXYD9YK0xbPemIaZw0li+KPaq197HIvH6x//6blRnNBW9qiewDgH7loq8zYNdM9Y7C37Bt+PBkg5tqY+ePxYCvjQFCOz9Ba8h7r6yEAUJRHyshTEy2KVkYrxDiUzUJyjPL64s9jynK6ihbvAaDn8qP8lJIGw5T0///iEg2jlQJxkoj0+9zFeW0Boz90GSsfHKKxCq7spaDck4fA0hh//ZIidMuzBZv+2gPRYI5si9K1BAQNml9I2oRgFRDHdxo1TXqL3iIAslC4Ygg5P0fEtUCzRtwashGkkFlXBDVAkRIjeIX+9sVU3OL1PQAwfmam+8cUq6F/bwJj9ff88JQiriXBkTXyvdLbjFeghUvrxQEQGHzSEt05o/beshHdI/RPS4z087vkAvUBi7xDziG/CUDDYNqmiO7PP+DY78fJpyJXSgheOo5NDvio5T35G3MEgNC85EEZK42xOpI5rkk+Y7slF2qLl9F+f+Xil7uF73wttE++PGC2Rsw3Up2WDeD6KDCAFAhBTOQtemsA+G0WMCM0o82N+FPNWy4eVpP/QtxDtEBCHn16a03gbouuAqB5pgDxpdPOKAlrNAJA6TOixPzra9ofjZEwZYV9r9aatYZeHACBiajNVvrJDv8P/5mPT7I0lZ+qzbSielsAJI+0gGhf/UNtOEzm06okJE+iipLWYEe9JmYuTYqDljn8eQuQxh/Tvw8IcOAzV0RegS+zxKIVYPmR5YZIdaaqoMM9KcIB2APtWyguCJqGpO41An74ETN7lAcY06dqwXw/5rYSLZFGj899EISP1zp4n0h6FbCqqV2j7+sB0Fo0P1K1rG9+QXvjuQCQtsm6AOAwQP7hWp5hv6eANZOeNUdr9C2CQKM0LXmo3C+9IH9xAOSktplFCk3CU5ITHlIs+NT40xCJwPzkWxr5D+t4aGw0GBqY6BmfWIgU8jtaTkgUl5lL4+OTEdCg7ZkEfwMoVHGLjaYFIBApDlgFIKo0Z6bIXwTa1TShQdOkz6YPHOF1ouNMUr7LWygRceaHOThKRxOhnYwhvI4SIZek36P37F0X87O/7si62nv23t9ZANaLzSzCSWitUW8Ci7z2VNOvntIEBrTGynoBglwftM+zRHOkQVovI/MfyPpOhx168/rFAZDdTnW99YjWHrP4OAAGwgDOeAmV0QAAkc0DwKKNMT3lBG4RYAB2Jo7KTkN0ikQaR/L1ABq/A8kK+JL2QtoBQwGPEKnHD4IPf8GS6kHLMXmVBBJE7iwU72Ty0iyBHx8ZjeeeJKFWYu0vX1wVtzw7OVcSzQmPo0TA8GXRsLcc228dAJ30+AcXt8HWaQl8HwVB+vl4jiCIfWc9GI/ADZfU2SOio33BNcTCqy6ipPXw5cObSi8OgAIAtAIBgpEf7OhmWbsuZu6Z56ylENRn1CCIbHaJmEw4521zHIe5J+2j+lg8gy9CDiIz9xcvZjUTE/BxQkuRYcoIelSQzPtdS7Mk9V0v+fN7L/dvneE8w4Ncm8Tts6kJ9V05780XSKN4DnorPkApINKUrEGWAEG1RUfSYPhrzRV6ijQYioh8PVYYpYDZSohdoeTqegYFI6lX/t/aPZPAby9/KP/xqc4CX/noM/cyK2l4stip3nx+0B84Ackt/9/oPX0UOL6yPTMUSNLsak6h50fqMhe5A5iLtEI+x5qp71oSjm9QUIAGKDINVJ8iiMR8p70KsPwpZxherpWOYVHyy4nAPwddAUBuiVgNBMotZtlzfKN35Lw5E48APZKmlETofg1mzHxlfGZAxLzt0ZkgiD0nECm9xpiBn/SVq5R16jlcAvWZDw2AwAhThKTXAgJXmeN+EV6RRaanfDvkpzOJexFOTvZ+bBUACQfamGjx2uHzfIMghmt7kz9+F9qdLHygR/qS6Aoe9I5hC1NQhAYAwGnRI3/OVd4Bg2jmvm/v+F7/vgC+3zPP9tJXro43918BwGzorBtHH5+a+JcBQ4jbYVTBpY4DSBurDW/N1IP9W+PNUTj5byywWoGF9eHEkaAb0/pI4YujAGi83BmyGVhGwG8rbSXfwA3EbbUmiGi/5kjVoaOgnWe/uAl8SzmsWxYj7UOOWQ2zJ7/PkTWAtEZACECLtAE+/oUAoHPDkitJYtdwslKh10i0ko8QoDFfk2+VkxrJzq/ROr5GZzKT4iI44jo5jTRaUp+K/xQlo4A7acp3KshztPxWvl9gycbm3wGGo3Ogt8zn3j2vDQDrRvRtAMim3yJrQFqQNeSYYT2fu3UfMxjIsXr432QOOF4oUMedwi+3VQwB4Fh3IYFFa1JGRz17zK/O0kIA3j6yHqx/JmvWfj9W67kqHBQAbikBDq4hZrNnUxq4mfg/c2qL5mocR+nNACCfA8njZIXABfJT8jVTcsv/mFxF95BCAA7DJWAyR2mIIosCFEekMP8dTc8iY7rSrIzBQhLYyKLhTwTazHdk0gFIos8kNy2QtsDM9IynMNeYrcAWH5yIOUPMeRtMcOaW0zhn3lWvvRUAAT5/lDl1VJELYm2j3jq20X1nAdCaEOBjCZgb2RRniLuE8sEfh2o5LJqndJTkyvXPjdKy9z7FBgQAEZ/a0bPsfV1PACjReYsoFAqcUHDO0JsAQCkPyWsCHiZbFMrv+ACp2Fu5R1R3JxFMBDOOtAN8JBV/nrQaIHHGvHO21WTx2xgDcKHl9ZEwKQIqY1iwJJ7FSQKqBShAQaO0sGhofHWO1N2bLF4mCw2DudUHddbeZ3PRHvGan5Lv6dHJOKNp46/cuuegswBIGxdAs4YFyva0xdE3yFiw5vjjrB/Aw0UESLaCac8NgNJcpMhwWdH47AN7ltIh99b+oyEmjezMfL04AJ4Z7CNdKwgBhN5KSXx+UvUQz6TaRNO9EkF+7jlP2X9aOOBfS25/7nH172O6Eo6j1I6XHtt7+f7XHgW+96Qwn/k03goA8m1yEzAHOZv3/E1MNFqEawWgcrj+3vNw7+cF6Pei+fd+75nnceVw6QhicJ8859nwM+N8r66dAPjB6XQiQ5LwWwFAX8+PpybgkbqA/D8SoJ/ieN5TbSygzQxM35N7pGc8xVj55/h7Rf2lskx6Bg5MAPwgk5keGjnV1IVnmIYXfYWUG9ockGCCbRFfGj+NwM5Tpje9KEPmy98OByYAvp25nl86OTA50HFgAuBcEpMDkwNvlgMTAN/s1M8PnxyYHJgAONfA5MDkwJvlwATANzv188MnByYHJgDONTA5MDnwZjkwAfDNTv388MmByYEKgKlBtsUVh/yVu1kjz3OeUcKsUk4On2uf6IC36if6FNTTBqkqcnQmlHHqG2hLcFUtwnuVz1bVwhlKZ2tVmlDtZe2EgzODEoBVKFbl2flgpXyU09LC8ehB76Pjf6vXmSMNp/BZCwBnVJ14cI5YoQnVSo70jLiVfylXlvv3eiGPCu46I+5Mt/PTWct7uZDO5Tpm6MyrMmjWl6opEu4VlFA9OdQXB3Am1vNzLlYC+tbJm/QPOcIjxUKUmw+pGPPbj9y49LRRp68ne1/RVf+pg5kq7WpgSuz2vSkI4t76vfbeqOybM+opraXVhGIjlVJtaW/o+vCMxvyuD2foKgA6HK8uWOryjQblwHMtg34GAIEahihRHwJ2SunUkuEWqeTekAlwMLxvmOMaQKd8FbLA01LP/+9Vz9hj+vz7RziQwg5KO62RohEAcg0EPcOGcQ0AtQ7MjwIHihsoILAFoApPKHEW0hpBcYA1OlJxnGAHbGsVh7RCUHuvlpjq31f3w5HqKE7gqE40qin4kgAI7DQ/2mqB65x97fr3sABIMmgxNyIVV9YqVKQ1pWscr7IolXZSnwzCkwwa8NQzjiq6AM4tcj5SLTP1wGh6ldT7S6UUfQEscuNTsUTFD+WEgPyo+1lK0AM9z7C4lJ1SycViUt5eqSqliea5zNvh3BwrQUXrUedOEQUlx2jzAEIDK2R9jI6AKV6g/FKEnMKzzi4rumuuzK9S76yOtcrJqqGovMOCUWNxr5NdAFBNSL1tEBBm0RDwNAoClDXiO3pK9z+/905gq7invWEvKD8GyGiIUQgqINBQlWdT5cjxOAUoWDhorQ1pANCec2Jni6zr2imxaoDe5ez0GtHi0nTcNawoFZPwAd9YTubDONQ/NG/2re92hjx0DwD0bv+FCFLzY63VZmj9mD96w0gDdLPNf4ZUFME0UtiZRtLgHqSybVTjWvMvz1bJWBmrtS5dNo5+FTZc1QpVyLWJnBOlRmu1WMlCV4XWPRbvXjOle3zr+/oMwKFrmTPWPdkgTDyaPBPP5qsE/ACIsv3AUStMJmjIplLM1eZbK81vLp3/BcQqrTjGZ90zSdPoqh9XAFBrRjUIe0p1Gb+3RuuYlLFiThLC9oT9MAJm16lRmFqPe4DAlOZCQjotMikrBQBVHU8h0aNrqgIgcAYkR0nzMOW30uO6mvX1GY5b1tJWe9/r3j0TuB+jWodK3O256j56370AEACpBkvrU/X4XpT2mkDQYu+JZqYi8VqZb1Vl/Y0EUOsvZpK6fcpeIVrEqE6aOnz8Bmvvvsc38o3VopCk/F7J9L33+k6Li89EO8WrZG5VyAFA1f1w9bm5PyWgAFm0HH8DWKwRJi/3jCKyI9JHFuDQ5JmUtM1KKeDAXAaATDEWxVbxhz0A1EZV/TzUtwRINzdrjtm/BrL9txwBBADCZQPE8aXSSwAgkPd9FIWzBTKOfO+LAqCPoyZXx+VoAfJxUKn91B5xTQKc3TAcxrQDALcm3ZkDzHWLkRbaUzTAXqutzVYUZhxVXK7XMEXWCoaeLXpZx3jl3v5baUFcDDY88/BefXLTntIcM20017lXGSyaBzOSJp62AfmuaDwEBN/fFimcyaQc9SdJ5e/PXjSVtGz9NUs18dFz9wAw/TdoPYpDVP8y0xXwra3Jte84AghpAeEZgL+C60sAIO02HeuYnlwNR+nI974IANroJD0GIz4KfjgSWDS3Jz4KgQZEEvCxMClJWxom84B0p1FV38Eeo9LGj9+EuTIqY+TdKscypZgr6r2JnAEAYGDM3mlyatSrmhN8kCPNpjrOtxr/XAGxK/fiH/AWWfWttJqQ6KrIqm50iBnIFD1KNOVsar5U4CKyF6KBAEKAyL1wC3Fd6LrHx6oCD7dL7S1CK2deKl9fmzbxGWoWxMwjII2DFs8vByirRo2/rARz7PkEYTr10RgJV8De0wgAaes2pFalKoXTtPvq0vzdaQXJLAS6R+kIIFAwADcyjlq16CUA0PfRzq0XPD7TuuHI974IAK5NGCDhT+t9ObVBDl9Z/BSCERZJel/QGphkRzdMWlLyJ+qPsUY2CfCzILzP4k1HOlKYD6cv284nJWKNRqk1fs9hTytBTB7a5oiugNit99rEQI+7gf8MAX6AJLjTa2j3aDKOT8xqayCN3QkOwg0IVQGzt+lpSLQFhT9pgFKrqhYlCGDORPj5dEIEKyd7JZvvK5dIf+8bi6mKNym3Tijz/zKXCQ+pUj3tRYGlWPFZctHUYEK6FHre2rPXeHMEELiB4q4RaLFGQ0ejwKP+uEfTYOJGyDvNPaFDScLPM3Qk6l2fN0qD6d93yQfIdBKVIlW0xKMJktIGymygbQBB+X1VE4ym5m8Wly5mJkcOnQ3OsU37I0F1c7dx90i0KI5lYLUVldJPQB8OpjC/UYh5Is1FEINTtBLJz3wwJpFjKQuVBEk0JEqEemsxP4Ufb8QfWi7Aq9qYzWfSgR4ereU73gMAMyY8BizAxk/fjwAZjYjbIb1aRt9BS+LLotkBagDXpyjR8KyV6vuTQmFtAd3PXAJtnkX4xe/cb5I0gO975coo+JQNn/UeAAJUAGhf1KwI6VZxAfGJs5yO0hEAFDhJP+neL/oSABjAsVcpIpXiC62/wy81N9HDAeDWRDGvLD7anMRVCzREI0iXKOYG6d6nykgnAFIc1MBla4N4LilP2pMsQHit7aJFJpjBX2gBAFoLxEJh5voPSBhjL+ltMN/h2fqkWtBAn5PZc3wHjdKzz0bGji76M9cx9+KWoIGIAnI817zKM8+7x7Xyv/AWGHJHIAC1ldrEVCUgCRjCa7QWEvyqIALECKJe8yF0BVK8vwIgk5+mx4zSwQ6vQgmCyRn1DX3gZGQCe55rpdMw/ZjgAirfvaxPeYG0VvQUAGgvxB3Q96quaTDVXdHPs/3Q87xqgATDWkFge6X6wpnjzHIKkWfcCoDyB62Hnmjt1jp6cg1wb0MAEEBgUfHJhZinMYv5Rjhqe6qqO01trTWf+2gUNruPB4QiuSMSdCF5mFGjPD/3ZFHwH/I1VV8fjco4anJm3mOi08PXeGgpWdh7fHqqv0eLs2kBBMCONvBU7zzyXKDMetDGkUa2F3yJgNrq20zIWvAAMqkT8sqsO37m3o2SaH/dJDaVHi8sASBYcznNfcrkAy2WQqW9IIg8O3l91kaNJhsvfyZ6ChO4AtWaCfycaTDBBNZUhHP4SGDE7wzc7NM1DfDWkyD9+rxkAu8t9vhf+FxMfHwfnMsCEYh5S7PqiRaV9I69Jsd8CmnUbcJHgRfPlxeYpuFxcPfvFYhJmXdNZ+JAznW+g8QD7Mxu3+R6QG4hJcqmedDRo0J7fLz175+0bDZ+VFqPeZBUDPxpwVspKoTJ2SDIVu8MmrEIIPcGsy/Ptg5iBq99J0e5+9cSn90Xba8eWROs8N0j7TKpLhUAqwk2ymSwJtHomNQeALrPt1p31U9JQ3RCBD11EKR3Db1EECQ8JmS4yNZSuLjUXj0ARsr6WMCR5E4mbcywNQAktaM67wEgaZxs7q2E7Cx6i43JS0PoSfpKzmseafpT749my7dJY6jO7ltB7B730WTxkNlJs0FcDtI9mMX8nf2xsHv5AAkdoEe7SfDFs2mjAiGj85z9NwdctgAwvjvaOTMTJeldhL/vszzSAI2l90uN+G/dWD+VjgBgThL1/i8nVZjHzEiBuaN0xAdY02Bow7W5+0sAIKGcpGnR+Sgk/Te/FwAo34fU9zEc2JUy6WsmcE2V2TKBbW7BE5Kef44ptEZpIu3vdaPU60Uuc1ZzD3j796SVIvOez+ipyBijjYjwHU0lEIywwQgdfphoYeYHIAFDp1nQFQAEDoQN4MtRJgArSg/0rIu9dpqVd8xHY02gbcRXgSs+LhsseWaS7M1538PYWpGG5bnRAOsJIgnD0nZ6otXHv9RfcwQArQtC0vqK/9M77AHuAM/gR85h/r31cwQAkwjNSun9fC8BgLRx3+eniDSzfEQPD4BRX9e0HJKfZiEIIkCQ87f5WPlmfDprQRCRVnl1TBFay1pScVRqGo2w+tq5Y++tkWKJsElZqRMgDzA+SeawMP4RquC65/+jDVensU1x5jRHFodxSaPgWzpLzAsCgzkfXww/ZiK0Z59Xr89pG79jFtN8uDlGTuu99wArFgPix1sDexomM7ie8BGIk8fnnr0ocDQlfj5m6VqhBBqUY3aCdJKbQ3sAyNcpnYRlIwBIQISAHmCVAQG8Advo/d4rGJHc2D0ArIn5o4DASwCgb07AihCkBToX3NPDA6A8LAvbZPIrmVwTY5L4Gvj/+G2YkyRtVb19LHWcKeAaOVmkNN+d0yQ0B0ULbMYtKeHvzBEbpI80r20saQZ8e8xxAROJ0CSSZ0gXsahpSqOzgcbsepoFc8lmASSimsAU2POtWZhbdGsuX555DwDMs4xZ9DFaYT0ovgdOa38HejQOZimg7yOmZ57LfE0EEoglZ7R/hnVnjQESfsDQj1w2XL0euHCbCGYEGAQ/BEH2TpHEjO21uACgc65J2wDeXCoCHVJvUnBg5H+WVvWzlkHaD56TYghSzawp38/HPSqGQKOsxRBEsXMahh+bFdWD6tEosGHxF9dDCVfOAlOeaNi+i1BTPIJZbB8SxoKJ9qGg5b2DIPDFfyGxAz5y8w+3Qr516CPPWWAAyKTZIhPFFIxPpr+WeUxqp/yPlzLtYpoZFFNtzVlfJeBaUKN/J+e+vKta/YIkqiWImJUc9b0p0teI658NXJlge6dXrgAg/jNPndQALFwLvXA5AzD1Whr0UfNr6x33eo53HAVA1wouALX+eCV3R06CCFLJ6RMgEcgCeDII/N66c4oFcK9RTeHCe8II7eUBuoaGzdQl3EfEhAcGNTe1v+5sOSzC2reP1uTRPEBjoNAoAhK6AoCeQWA5dCBHeI0EEeFH/MR7Gq/n7J0EuVs9QAuT1iPHCTOYDcALotPkSH7a214BSH4Vi0IQw+CZvKS4idsqTOpjt3KKtjaocdJ4bAD+NM55G0JiLg2OeTxaMLRVUthJFtIrAROSWs7Y6ITAaBxXABBwxyzvj1VtffNr/dsZAExSMVOb++JoIQa+Xr5JxKccP+iIZywFQoIgorWlZuBaQVQuGSD5a5d11Rfn7d9hP/CL+RYWBysnBVH5aWtq1aggKlcRq0hwwfW1mkr/rpcEQGNhfdBUuY9osIQ6/LC+aWa07eorfigAfK0b6rWPO2WVCAqln2gvk76BAylyAHAIqtG53cmvyYGbOTB7gtzMurvcmEgzX6Qg0aQPcoCWThMHfjQhZ81FX2twTCBC8G4rYDb5Ojkw5MAEwJdbGEyGnEYQOdxKPH65Ub78m/GJL00AhLuBtswsxjvRWCkvzsWKRk6aHDjFgQmAp9g1L35BDvCh/cAl6s9doHDT93wAACAASURBVKAF3y4fNf9X3zDnBYc6X/1aODAB8LXM1Bzn5MDkwN05MAHw7iydD5wcmBx4LRyYAPhaZmqOc3JgcuDuHJgAeHeWzgdODkwOvBYOTAB8LTM1xzk5MDlwdw5MALw7S+cDJwcmB14LByYAvpaZmuOcHHgeDtRKSHljX5Ti3iPRUEvnxUpn63feNKYRADrLq6bZiEbVUY6c6fMeJZSUa3IeUOGEdFlT2FMLR6TnwdHjYDL/VaJAqm3oOdKTjnCftfyylmpPJzt/kksmx6w/51zP+Cp3lL4n9R0O5jvOpniDpFzJuYpFONnRN2LKfWtnNn2P0w7uU6V465zp2feuFbtQWspZWCWMFBVQuWSLlPoyh8p2+V5JyaqWOKtqPnV6SymwWr7pzOJMxRC9WXL2dVS23jOVyEpxDufYVTJyrjtVxPdqStbq4zagAhjOsG41Yq/fkvaq1pC16Ay5AgvWgXGsnZ23XlWMdp/z62oupqeuXMcv2mBY3W96YadBu/WiPehRWlN+AoD2aXir3qdKOz2plON0zqg+4dFxuO7zWmvOTSPVdpwAOguA5s05fkUtFG5RL3G3GMhzAWAa4aigodZbilz64HsAoJMBKdZZGW8jWIhoDQD9Dej3Jwn2ANAGVwlkVGpeqSIVN0anE44cWlcZxvNHlUxuee+Raj/4oIiAohip9h1eqq6joMVeYdgqKF4KAI1ZUV3J0sacjnGjDel7FU9wCkdlFvUGldHaKttWn5PmXSmnpTqRaicKa6w9wzoFVnhaq7KoZAPcVL52umVUU9I9qhsp8kDg6MoXOgOA1udai4QAYN/7Z8Q/RVO0jgBYo5YTZ0Aw16aS9xkAdFqI8CIoQ8Dbut8s1jsCQNVVfFAlpbJU5LhFA0zJGpuKdLMoK10FQBqIBdEXE00DbOBoM2wBoGsAZa2xtgWAtAXlvSwivAGgwNZ7FPG0GDzLBDjIX6kWrnQ9Mg+0X6WfSFXaFX6RhrXHb30vbedHlfcq/qp46+i9FQBpq2ncY8PStBQETUmxvuKy8dFoVc7BQxubtkgr8P0a2vhemiHNKZqyzVprtYUHSqYZJ2ldF2z+TiuiWd6qAXpOCvTqz6Eq0VpB1NRiZIEYv5/WYw8uaxs5fXHVv1ONCKlMRHCZP5WmVauulMY95tV8pggxLdDmt/fW+omkHqJNrU4ioA9p25Ae3KPxWt80dRVp1GE0nyM6A4Du9yxrxnqkhV+lWwAwgojGbR4JNuC8Vij5o2M86gO0WE3mWQBMO0wLkDkSU7cy6SoAKp9uwdC2AFEopcmZG9T0NQBULslZ3F6CbQGgDaIoJZMVANRSTe7T1Bu4AUcFGivtVe4FUEDT3PTd7vJe0lnZsloAwHtpAYRB/94KgDScvom5xUKzcLysLw6q2ICq0DaODQhcRuT9NJ89s4PJRnMBwkzYNboCgMqxpdPbWiXwWlE8pffV8LOejvq84ruqLhjzpmFSmnapkhxKDw2WkO/rK5QrHKrYqqo31k8aLLmfiUdQ43GtlH0EcAgqa8qYPEO5qrVq3GcBUF1NQKzuofmMcD0yrtE1ZwEwbgyCU9kxigllyB7glthshfGUAJjF5CP7Fn73BECS1wIkOVV0Bra+i2rOlKQlqSCyBoDKp5MgKrPUKrJrAKimnYUJEBzSj4+xflNKstMCmFZ1Ie8BoOfQDmiwikjGN1Lf25dwz7tr46r63j0AdD8txga1OWlv0Zps4GixtKmrRRueAwDNjUKzakOO3Bu+l4nF90SbonETJukX7N80qlBaefbtH4H9qO8wXxy/mHHEp0cbtrlp+kCWUO7JmjPnQMU6McZQ2koYAxP5TPUblYbcbz3qY8zUX6OzAOg5tH6+z1+x+PdvBT/3nQFA/lOmLr6ZO3s4xMpQxzTfPCrV/w4ojtBZDTAM92wAlPLgo3dd1QABIPON89zkpl2hnxpY+/AtAGR6MFNoOjTBNJ5eA0Bmatprrjnn05PW9wr4WBihIwCYBlQ2mGq7qL63r5KcZ6+99wgAphUl7SMd3zy3alNr/VuPrKFc8xwA6F0BdHNFu+8pPFZRHD8R4ErwCSgyqWjFtaew+TAvXEW0DntopPmksVMAC+BxEXCV0MBGrTqzXoyNwLauaea0VVopQAU0X3yC4SwCWj0A5o7id9yiWwAQEEWbJbCPdAdcG8NRAKQJC5L5Pu0vUgS3PpfwUUiWxcSCrYrIu+ueAgA/bpFeni8ySzvbonsAoEVigZDo/BEJulhoQG0LAJl/FiagrpJ5DQD5TvjEkGfzhfXEtxZNqY8oHgFA2gPTrWqAR95bW5TW9+4BIFPBwhMN7/un+BabmH8JkAsq7LUJ2Jrv5wLArCumns1SneG+hYZIqyasM59AzfVMxnSKo0nw23Fz4JNOfDSLakJ7ft/oi0UCTK0RNQ1F0AGY/ZE+2mt8AsrMufgiA9buI+SPkv0tumz+7RFWxRrw5pm3AKB7M6/xpx4dY3/dEQA0P796EWwyPbgN1ihZLawYwpyF81G6NwDSuGw8z+UXoKqvOaAziHsAIGlPygEAGh0tjvSmsaS/75oJDABpf8ZL0jNRbJY1AIxf0/i1AxyVavf9iaTymfGdhfYA0Abhv/AM0ktTKXTlvWsAaONypltAHNgWh2t7EylBEOPAI75gQMnfMxIAjwCAgJumZrPww9aeN4IP8YP2ZfP5hKVSMKkITv5lQpxw5cqJ2yOaMa0ine767w541rmvZu0an2hRNCp+NfPOurF+gfLRzoaeHTPfvLIOjnQcvBUA+a4BtL0D9G/tbXMEAG8F1w/dd28A7F9Q+yysDfpeAJiFKhhCm7OpSYcjAEgbSIe5mBhrAMic913IAl1rJZq+ElRzKvoIAGsUmPbFVBMF5vAmOJhW8V0cfS8Jz4dXe4zspcEAa+/BN07knmhM+Onvfac5TnVSH0ge8Us9lwboGxKk6H1uLBPAUjXsfHPWQdYusAeGhCktyt8FcUQbRcNFVmugo+ddTU+pjZf2NnGdb9fGutm7L3/nD/duQnrNZzx61q0A6Fl4IdDSC/2jY3bdqwdA0VcSUYMUIKBT1JZP4F4ASJLbjDYzqU+KWuBHAVBSKScq7Yc0e2oA3FoUQNUG1IM5dBQAmafGLvFcSgbaA0DuA3l7Uhm2iF9MoIT2Y6GnB7F7pJTQeLRH3aLnBMAAHV+RlKIQ7ZUpaa2mb3T+JrdT32tBA3Pguwgj4GUdM5sFPggEUVsgKNI4oppo7e9nGl/xw7JKaLKsGSb3XlOyOoZ01ePf9u1H25leAcAcMCAIAfCZ8WbsrxoAk/zJtCItLRSLz8mFD9jeZabuBYAe6V3SC2oqx1EABJpyCkXg+A5t5Pi6aoLvUVMUiNGw10zgfsMwpZ2C4asg7fv8sbPvrX1GKgAysWl7tDqmCue85HTzA9j6vMUtMKPBEnRAhP/MmPmZttweTwWAvrE/fUP46llLKAJvfjp+PL2J44/rv5eZy4fM/CVAWAfy/QBD+ghzs5gP7gnfPjo5ZQ8QwJQBPjwZBtaYvdCnIa3xODmDo77WW/Mi5YwAZI5KCbEfjtIVALTevYtbhXDAo7P00ABYEz7zYWtH4QI8rpMqwncyonsCIC2OFuJIlwWMjgKga/kv+TElUDriNgLAGoxYM2muBkFGfDryXv7MRLoAG9MPbQVBLFobTSQU6Fu8R7WFjBMI/oLlf/ZywY4CYBLZPfbIUThmKBOsJ0KFpppcP43jOdCBIH71Loz49gCnVC5R5OQ/xqfGJKYl4qv19aWD937BcnxMCo3oskR1ATpCgpBec53UR90CgL6VRs+vXdfAUSC6AoDeIfLqSCBfMS3wbMDsIQEQqgt1y/ehDVXaOgvs1AeG2lA2hkXV0z0BcDTJZwDQhpDcbLxM6kRyqwZYHdsidaPzs/WM6i1pMKPvqGkwa++tzn3pQQTWHgD6u2CVTUMrXEsp2NpAUiyYPcCUViR4s0ZHAbA268bz2kM3z06ysf8HKvXUTK5Ja83k1eWUyNoxOUGwBNGkjRAi3sM3Go3S7z55MYtHqUGCLlkXOa/Lr8uk9fOIb9z4bwHA8JeWT9s8ArR1rq4CIL+472RJERLVjXMEhB8SAKG5fCj+EZrRUQB0D1M4Jw1GYfhHAkDfRXqRYvKlYtpUAOQDwg8TnUBLP7HulVx9ayL0aKHU966F/gUpbFomqI2cSNxeGoz3OYAvxUVU17GpNZfFaGw1fWTvMP9RAGSyMj8RISsY0VMVRsxSwqun+HZzXjxBibV8OiAOzIE67Q+Y8cfxZ5vz37+AIVeCa11XNWbpL04CEaBMX5pnKFq8XEsAL71oi84CoHVK+Bzxva+99yoAem7OgdN+uUnOrKUXAUCgZoGNFhDNLz6E0bGSvWow1RHMkW+TVno0AEwycc4YG2tfDSaRQpoCDaAeKwIG+AVERucj99JgtjZE3mtheW81L/i0pEj4fQI5edYRAIx24x4mLUGA+MyAgNy3Ncr5V3/3nN5/We87CoDuARBOtKwFD3LcUfUVQnbkewRQ/i4wRCOiydGKXM8MHlHyMAGbuaRdhvgMadoi7aMiHDmXCuTMRU0HAaB4wyRW/MDe2KIzAMjfTounYe4dPth65z0AkBCwRvG4rqWdz3335xcBQKaSFAyb08TQ2jhQ5R1xCEvKlV5Bq6hZ8Qa8B4CuSSInjUi+WXU8VwCU+b51ltT9iSylHFY19UYMPmMC536muo0c6gEQSAIZGoAzp3xEMvxJfRtANMxmBBx9ZPUKANb3AkOCK+YGMIi20Z8UOQKAvtW38IFx3tukviEnIWxc6S7y6eTK+XY+UGWSSHwAvHe+1zvOAGDOxhoH3ywgBIo2u3VDExZY8DdpUGuUM9TWXU4LbSUUp8iB5/XpJwFdf+NLNNcha4bpCehqgnUdF39mzPm9CipnADB7zNp1Tr2v6NPzhiY78vXeAwC9KxF4Grd9vZcPnPG9CADWCV9bRGv2/BEArNKJiSXKSkKiCoB7EoJPzrPQUwIgTbcerRnVA7TA+ZNGuZQmW0AFGPZ0BQA9q39v0n7ynlH07SgAVpMyZieNgim6lzNKG7K5pY1s0RkABKoEcj2j3T+bICDktsoeJbKbe52ZHs1N/i5gJ/kY9T7NFDTwt2rR8J/KQgCCEo5piWsgJN2Kac7KEHQalb7y/KMAWINue3sof18LLN0LAEXBaYHOVNe6hXvjexEApLJy1jvmQ92XlGvB0/ZIdVpgCjb2H3AEAN2T6JB/19ypRwRAZhPThd8NrRVE5Rzn0PYzZ0cdzuYrXcupuwqAxiNP0XuZdBZ/arvV1Jc6T0cB0D3MaBKbJsECQBza5plGa8PmnUxIEt4ROWkXRyJ+ZwAw3yBNR+Kx8Yhufv1SbEBaCt/lnnbBP2gzhmi3rJw14h9MWS++uhRYdb29EVeR2omCLCgFMJjX8u5GAb+8j1+MucqMXiuo4dqjAEgp2KvC03/rUwOg96UUXu+S2WD9y5jAWwOaf3t8DqTCMI3j0xcwevxRzxE+IgfupQH6NoUjWHyAfi1NqefBi2iAjzgRc0znOFBPiqxprOeeOK9+ixw4UxL/CH9YBhKze39pvfceJfGPjOVD1+z5dW566LzpxTigOi9/Egf0ml/pxQY3X/wqOHDvpkgCZfyorBPJ4KNqNA/VFOlVzNIc5OTA5MDkwFUOTA3wKgfn/ZMDkwOvlgMTAF/t1M2BTw5MDlzlwATAqxyc908OTA68Wg5MAHy1UzcHPjkwOXCVAxMAr3Jw3j85MDnwajlwTwB0XjhHkpSl32u+8mqZNgc+OTA58H5w4J4AmK5hDoenMvRTcyn9SLfKkj/1GEbP17jaedO1loz3HJPjizpfEUDpZUv49L07rrwzlZAVPXV08Qrl6KOjaY7YnaW0u3Q8UxGGNfLsNGxSFflIQyDP0kMj59Trs9UarFVhzo57Xv+AHLgnAPo8Z2idgbXg1JZTdPIp6a0DIPBLNWLFABSLkHAKABU5vRe9JQB0Ll6BhZAKSFoHTAC812p6oOfcGwB9moPyCgL4CQivNEneY9VbB8A097lHv94tXt8TABXdUL5KsQmlt86SQhOq1ph7HfTurQH2z0tf2QmAZ2fqFVz/FADos3WwUnjydy9lgWrB0Huy5a0DoNqIyg7t1US8yvN7AuDVsRy9/1YTeALgUQ6/B9c9FQA+F2veOgCmBaYCmEonPRVNAJwm8FOtrRd97iMAIL8hX5ZNrFCqrlZ6MKQWocKka5u7AqAClspC6fqlZpzCnGrFqeC7F5GmsSr4yiTj81GIk5NehWT1+/R46EnVX12+VERW/l5bS9WSdRJTIn4vCKJGnUrSzDn/VtNOdecvWZqMe15PAaK9RbMWBBGoMmYFX30zZ786j8asjNbamCsA+jY9T1ScoWWpzafShwKw6UjXj89c6BBW6WgQJDXl+mdeDYIokqp4hPp96v/h+4jOmMAJ0KjUrUakgCCe6M7GVys4KFOCRSRToi/KepXPxm8NW8sKsipmq2ajKtX4tbaPuFAUnXWNAB4XhXUpqKZoq+CXPslb3QL5/AWltNDAUxag4rzqR6okvjXf5sG61JZD3Un1Lq1FdRWNQWc/AUU1F0c1J32zd/tmFcyta/UR1TL1TBXBh/QIANgXRLXxNVEBYiEM0lCmpwCgCUwhV5WigVOioCZC8cc1MxzjTa57kOtMdN7veYmu5v0A0juBLRKAADquY5aaLF3D1qLA/GDAmcM971QzLWPQh0Lnt779AJBRRj2krLs5BNC1CbXxKItfCfipruzdyDf6Vt/pPRz/+jeMxpyNqU+IHh3GZpF7Zii9M0ab5JeUSt6KdwrQHAVArSgVRA0pZmqRXwFAAMGXaKyqnygnv0a3AKD+w3rDKFTrp/UsOGijEhhZWxor1fYQV/mcZu2+hUA1Du9KwVzVWKyhngKAABxwm2Pr3jo3fvQVC6CPKm/bPyqVI+sCACkmbE/4JsL1KACqlq2laF1bGa9xcatVSiOwfLPq5b5dPxJ7Y3OdPQIAqhRNKtokv660ogQmyuhgLmYAFNdUCgD6nQgoSa4dYa5Xi8wEkrYWck98Z5H8mv4oI5UGUDaZzYHBSvpUojFpjWiySR5pODaTxfPFi0bn+hGYCAypkGtxWRyaR+ux4f9JPloCgLAQtkrBe76SV77viAlMK1HC3+IgXQkV0pTgwAPanPWwBYA2hV4SqjPTjm0uC1/fZ3SkDuFLp8GopK12oo1s/vF5i24BQFWytUYl0KTfqABtrlS01m/FuqUxWdvGEwoA3sJnayCajnVvjQIDWqCq0wQ90tM4PbPz3gCg/6c52UesGeM3p6peW5+srD7wRMtNwyzWlncZP6uIkE/q0BEAtC+kc9mDwFpzKmTP4BPtsAKgQCvt0NisZ+swioC1SYu1h3zPkB4BAI1hq6Q5Sc9cGQFCBUATwRQbARVNh+ZR87toXICHya1MOzN8NA5MrqYdZmvMAyBHXe5qr9oRmJhkpeyZBYCkJ53ElKX3HuaD0ulrdBQACQRl3EnQUY5m7WO8BYDG0Tdc8rvUc6Mh0iK36CUBMGBGM9Hbo18vo3HfAoBcMYQp0heXkKTp0fhQBG/P6+riOMtnz1d1mRLhPf1a1oiJJTSKZlcAHPVgjmYJXKyhqgXmvZ7v3kr2ll4xrLEjAOhePLGX+1aacIImW/scB3yNR/7mlok+XJOPAIA7++XdhuKD0JdBf4ZKAUBSC7P7Sa+9EmiZyZnzDKZk8r32gKa+swLcWm8JoPUxA22KVEx/CVre1658fNoy7jWWPgqAFeD4WaPl1tevjdk12ZijNpD+zmfEtOJuwJ9HBEBmu3HimbVgox2hWwAQ4BHciP+P1sR6YcUgAMUk1mmvdh+8lc+0Hb4++3mtLzPXR0z93pQMAK6BFP9tml3p6ph+N/W93BQjPyofHK3zKABu7Yt+vtKA3r5Xfr83j3fn91EAkJZFRSdBgET1W+QjgJyPHAEg1f8TV742vWUtRGZrSEtFKrN8NI1ujpJGOLQoG0kAZ6Q1ak7NdOglPJPeIndP9f307wbImiwxKTh+1+goAH7aYsbQfIx51K0sDeG3NEACI37POiZmMHOOL1JDpS16CQ2Q75PWhfpm5XvzfgsAKgHPj4Xio6oaP2c9rVmOLI0/FAA8y+cqlPsmTnl2bebUa5cBwC3eJOWqCmWWDIsG2beCeD1pV0ojPgKAIyVna37ghCCNvcK1QNtmunvOXqOsd899BAC0GAAYXwViqgG7RHs4M2lT/Bn+XSkaIMABLiOi7YhM9X5AIAbMLET9do9S/H+AldY5ovTn6MGE702U7SjtOfqPAuCVMRvrXhoMjcfio0UC7y16CQA0Hm4Q4I+Yv1uBjzr+WwBQZgCeofhe63FNfjEtNHuN+lY+azsZX2Yiv/0ccPkkG6L3pwcA1xrQexZrReYAxYFJjI68N8L3CABuKTJra4rvk69RPmyID9JhDBopQbTaI/mlAZCTNY29AZEUCw7kSiZLYOHrFr9b/dsZAJROIX0j9JIA6Iyq41VXaQLgOgdrIrS1w7oA1ACYNkNTpf3v0VMCIO1FgCT0GgAQ+AHBpwDApMHszUn/d2lzhJr2rwImVavm5wXUQ43wpQGQ0zamoPw7EZ2e5MrR3rYAcM1k8KyYwLSgqn3FBN7S5EYTEYm2ZQKvmZPRfmi3Jq139J6d+KMAWMf8TVYk4prZbky3bszR97yEBpgoucwCFgFwlP/IL7hnKr0GADxrAveBjmiAosP8dSOKCczdof80krUg6ILuYQLfCoD9eOXVAuoU7hhFvt/d89IAKBWA+joyb/NRQuyiPVsAyPnJP7gVBOm709e0ASZyr3mugVENKKwFTzTdJoV6E5iDN2ejOXD5K67QUQCsY6b5jBK7fb+gzpYPcK0azKObwLUajE3rDLWIIpdEn4zcz4f8Uxu+99eN5i2J0EdN4HtpgGeDIPZKbaQeAPydg4R131m1aUJDqhlidibt5B5BkHsBYOZGNoX1zvcvBvAhemkAFLiQggK4vsUg8dfCZctL49gCQB+2lQbDJyAiXE9X1DQYvgcAOfIV8KnUJGNmO03VeG9Jg0nKiJ8SmddC93IP+UO3tMSjAIh/xowHNnOSVrMg4pPy/+87APpGG4JFIH2C//drNqRQoqd8iIJ1oxM6uf2lAND7j6bByDD42O57j6bBSKwWQa4tV5PWNVo3gJafU8L/ER/gWQCUKraV+pIm69Vs/8CnvzQAklz8MMwyDHREy0YFMvLyHEMDVK7bA0CJ0DRKpo0NL4mZ41mi8FoG/Pdrrf3ShSN8BSJWSREBfFRnfsO+tJTf0Rz6RGhRMSXAqOBrYCLow2wweX7SQoAhIcBJ7xlSf4zfGID3Gh0FQPfHlQDkRfIktwJXUUMbgE/SmN4CAPpOx6SkoIgYAoS1k0K0HG4SuWySbUV1R6ch8PglAbBPhJaWZM8Yv2T7JEKPCmf0idD2kVQX+1BajeAInklyTtJ71mQtyVYToQVM+OgdZ0NPAYBOmNjDLBMnVaLVigo7hmedI2MQdPoQvTQAGlDSSjI42hYgsOAEC/j/LLwtAJTfJ8teqL8/Cgdk+DxGZwi9k/nmhEQ9CmeBA138GR2Fcy1/Ca0Tia75j1+POS8p1CJaOwonD83iAPwIkNmAjg/l2JLfS+7c0jjOACChIPJpwaKcNiClbXACgK/QeVGbqdIVH6D0j3qSJkfh8AvwV7K5mKdbdK+CqFwUkoJpJ1vRT2NJKod/0zhiERCeVZt+SQA0NgDltAYi6JzaqSllI4vFtQFAGhgXAevGoQGglyOl3DXWxehcPasiR1UJVWsrR+HMvz3+FADYY4fvpZQko8S3ycEMTz60rh4BAA0KY2lVTDFMZ/oJ68sfcn5SHtcWANL0ID7TxrNMulMeQOZIeX4O3L4YgjHQJqWi8CX0BFBMOn8PaQfAHA8jeU3MXjEEpoR3SsimfQF9yaz8hxabzbVXS/EMABp/xixPzZidSyU5jdVG5vC3iZMzl2++AoDxLe7g2rs/HynrdS8A9L749/ybqQsI1kiGgvmyVlglqPeJvjQAGhMfne9i2tP+mK0phrBWFKAWQ2DZSBh3aoRA56cUIKMkrGm+3uu4WS2GwHUFePiVzxZDOLJWXOM0FoHum1NIxT5ycotwlekRf+XwmY8CgEc/eF73dBxI5NpCZy4/KtGqJfKune9+1HE/8rgqAG61GbjlG65G/W955+F7JgAeZtV7fSGNxlEnWumeJvSSjOAeME4pUzUd4yXH9D68ewLg+zCL8xt2OSDwwbQWMUx0mcNYsEmlDW4DAZ+r+Ym7A7nhAn5XpnqqkfDh7bkIbnjNm7xlAuCbnPa399HxGfoJ7PhLRKxpVhz7gkVHu6c9B/ccZZIqhPh145BXJFfAZtJ9ODAB8D58nE95cA4wGwWVJHCL9AE+ya9O0jgqODqJ85KfJKiUxkm0UpFEZzulNdWySC85xvfh3W8aAGtS49nJZD5tpWmcfd68fnJgcmBy4Nk4MIMgz8bq+aLJgcmBJ+BAamx+3pIG50CEqlES1v1Xj0F+6PUTAJ9gRuYjJwcmB56VA/KAR9XVncpyIGGVJgA+6zzNl00OTA48EQcEy5TD4pZzaEKmQypXTwB8IqbPx04OTA68Yg5MDfAVT94ydOefnVXVZ0JKi9QW1bEdA9witRHl1WkPqWrxFjnz7Gii436OCDqv69ihCPKkyYFXy4E1AHR8RQ0wKuSuGvlqv/71D9wJDsnAig04/O4csXw+ycLO+N4LAJ0rBZjOljrbKX1GSoqk6b2m8/ficq1J55l7jayS83jk/Qoi1GyI0b0pLqA0vDO1CnTUMml5T9/neuv9HPaKQ4RqgdG9cfc1LCWzq45yhMyns7JpOKYSkeelA6G2ms6L1/JUGiOp3u6svsoyq15fDgAAIABJREFUgg6I6ek8u3P8ktOlV0lZIiiZofg0Oktf22kKWigiUokgVylKUQXUt1y9ev+7h64BINCjUazW0TrC5XnNk3Mg9RRtTiV/VDc5Smc0wPpMh84lSzuZoefqXl/do+PZuy6Nl3Jd3+Sqv//eANg/34F7BQP6DnuvCQDNIUAnQLWdSP/cEQACPE3qlZxyfQRf6luuzZ98TY29VKKptAdgSuNJeA+dBcC9+ycA7u24V/D3NFk60oyo/5xbAdBzVBeRXrAHQvdkoco8WjIyvwln9d1Sa270ngCgWnjKRG1Rf/RvdC+tV5klidkqBDmZotINzalSBUDaslJja0RwqcgTqhqgAr1f3d1I4MW1saYB0rz2OvMpdZVEcloj7dH/qw2pgGkPgM6IK02ntqbUkgpmxqP8FaXJNQDSiR1j0BuZwETmrHZC3ANARWpry9CzALh3/wTAe+7OF3qWcmH8f7Xp9tGhXAFAJqCyY0onAeGnJsDDXKSxfMelgjPrhf9zDWACYrdYMXv3ptOb7+772FYAXOtzs8avCoC1/26uV0dSHUq0BoBbdfdG7wVqSl7pcOiUDdO3B8B0OWSmckUcPfxg3jybGVvbghrHFgAy0fWYdu+3WQZ9BgCP3P8BAOwLC24taAfqXV/p1npxYfSoCGd9vnqADuunuTQpZ/H7HT/FHjnj6h18NmqIacZEo7CJ1BIb9ebg2/B71+iF635k06tduNcjQnFPjZcsSPX+Um7/qJ9HgdIUXF37voAYrUgKwBm6AoDaGNBGnqsklcWvJh1fEgBUa06fEyYZ7WVEeyC2xau9e+N68AwVvmnEodcGgMYdQFfsVZc6tTXjA0wxUz45Gh2he4ZSqr9vXLYFgCnNZp+pMo3OAOCR+989ND5ARQVrDTiLjIpv86YjfD6az6e3528FQOaE854Yzxk8ciqriszfwlEdnxMg1ITlqAaiMCMzqIJKusI5/0pNr+8msWw2UdW+nWZtbBRncr8g8JUpAfhqH1XXeZfEzTXyfN88AfAbOJRCowp10ngzn2sVt925B2JXABBA0CwJNX1C5J3dGwAJtL469lNogMYN3OxzwQjmPRM2AKhlAJ6rtiwQ4udRSmFimmC/j9YAkIJiT8IE2h/N/wwAHr3/AwDYf9DZIMitAFib9XBajoAhfYFVthVhUpVWZV7pG8bJVNijdJarPivvpuHRBpWK11c0FIDlZ9JysG+8osw+TW6kDXtG2n3aIBzGR9NFPNOYmHq9xBt9Y7S4o3yoz7iiAYafz6EB2oy/ZxEK+KMJjx4eAj7WggXPp9XTvQFQ9JOQpizQStZK6V/RAHUKTAVjvWFoupWeCgC9Q5MoqU34Zgy0XMoJXy8go/nRALfIuiX8zYmoMOFvroAYpUr3xtAaAKqoTtDZWzTTtLI4qgEevf8hANAgABlAk7ah0m9PqVQBHIEk0v9DJNLCp62tdn5frsd44NlLVT6a37w4t5VXEnWSQwfQPZsTlh+ip1wz6pLlWs8xVr1BmN9HyPh07OJwFnFLE5utexOZ23MhjJ5xBQCjka0JgCPfe/SamJs0dNoWZ71NJkUCr9baMQYA+avSWEqww3M46gkNkU9WTk97EWRBJyY5AdBXpbkCgFwtNH8EOKyHSkcAcI+vfSvOXB+/mf+XFoPH+el3It4AcY2kJfXtVgV4uK9o7LUNp2eMAFCgyfj4GVlKItRnAPDM/e++415pMLdqgMaQnrUWpwVd84H0JGD+ctTWfqQkDfDRVKjmg8l/47MwHv0tEDPWIvd8kqzv/pVF5fd6UtD+NNDWDUvP4hExGTjfPY+G6p4QzQDgGvva5uyfSRsldUXKdCvjf9zqv5D7XSsSqvfBZ+yt/O7vVwCQOSMaSAjRELYIgJHKNrQNQXtWzmqUsmP+ei1DwyL9OOL/zbty/nPtvOceiHmOzUXQcNBX2rsXiAJAG7vv2ncFANOC01hGBV+fEgBptdkzo/ncW2MjAKREiBJzP1Xtbw0ARb652Gj5tH3a/xkAPHP/wwCggSjOyVQEXrSKUBI1MU/Qo0rbpEU4BJ0FLCdLdIz/TdMfJFBCCm1tVn6PCiBrDcDrwrAgjLf3Q8Vk5xfSce0IkGXxMfUAxVZdPkKLKSYAYAPiCTcAYDlDVwAQ6FqkBBHQwgtz1GviiVL346JZKHZK+6dN8XvyqbEA0p3PPSQ6Tc/3Wguc2yEtSwXA+KT4rno3xcgE9jzX4hczi6ZBMDLXarLu0XuZqIRVTaO5AoCJwPpGFgHhX+kIAAoQ9n1/6zOsF823KllTfIBp5zpaR9am9bxXLdyzRJQpNub0YxYFhPVV4wkjDVCgRFK1fETa+VkAPHP/QwFgGlUDtRTANMBEGz+39PjM5Mjvoi2IAgIDm4SaDUwFH/wnLylR21FD8DwLo6nbTGIT7d6tfrzuixlu01s4NirKJBw5Yub6SH0Lk7m81cWqLhr3OvlBu+KTO0tXANC7jJUmlzwvv+v9NLR5+Vg0AABjAwlkie7xE/XUm/4xy/DY/JqbEC2dkOGbG5lnez5AeWqEovs/p7X2I8qzz9zbR6KvAGD8cASEcfXm9REAPJsG47P5uZNzyASntYekPDHNEXAi8I8SC02iNO2QwGMRhXoAZE05aWKO7UOKwxkAPHv/u3E8lwmc9oNrCbsWow1iwkkPTlPHrvy0EEYO4TSCtsGAUVIlaHx8VFmYggqkz5Y5asKBSPih2TKtcY/4aDh3LVyAwoQngZm0vqn3ifTPo6XahMxlkTZayRZJuXAN7YBklY0vlcgpibMVkq8AIE2KYGE+WqS/fdEAaXwVwEVLCSobuhLwci+wEFkE5PxppH6ljNHvRkfuuEYQDb7vZrYHYu5LMMvPlN73+zP39n7eKwCYfDsmtqomPT0VAFIw8M880I5palw5tD1pMcCL1n/EMurHzLfOqvOsPNM1PQAS5NwqlCHBSnQGAM/e/+4F9wJACZT647L3AVFP0da2Tiz4m02dc4ZMW34ek1Eba+fZgh8WCsYCEL4iUTSmMkcqQAWGfIU23FpSKsAVCKGR2Lw0UGaVAAgNcouM1VnH5ATyoTBn904peCY/Ih8e6cjvYXH3QLH1bkKBxgwEmE7m4AxdAUDChE8OKOG5pNWnIHxlHu8RodObb0dALL7rPqfzzL0shzrGKwDIpGfaAyKnSHp6CgAkrFkvhGoEFkHElUP7oxwkT9C+cN2Z8981sCOthYWGKgCaO3uQFsf6StbEUQC85f53g1gDQEBgYR8JfXtOOsOvRXKTVrIFgMxZQJlTDen/aqPSsEaUptvAwOJhfgIDoCSIQaoDwtEG8bwafPA+WqWos1QHya0csb1vqY4DCAuGkGzMNdFfgLaVoJv7k6zJX8kHdSa/Ks9IhLye49wDi/z9CgAmMEFrxqunoJpvScOn6fdEYOYAf3/NERBzqgKoJME6zz9zL79zdQNcAcD4sO0/Qb/nAEDvSeEMFsnoKBzXhT1E8wfQOY1yZN5pljRMxI2RvL4KgM4KsygoAlwkoaMAeMv9796xBoCRREdV3hxUp23RwOpRGR9Ni6OpbAEgVZsPgL8nx504xC2u/sB5GES1pmLTFAGfKC7zN6kTzEPpKH0EMfcnGZqvSvCEI58mGH9Vn7w5mvAAGS0IEItaMYW3AE3AhdnmWs7ite/bW2DMRgnsa4Jn6/4rABjgOOrn3PuO0d8taj5Gfj6BizXtmPZigxKeNJijIMbEZCnQOkR0pTbdcm9v9dwKgDa7KDmXz9q+ewoNMKexROUJYjQqhhBXUvXlSUviK+8zK8JHlhkXD2Cl+eVYm79XAIzfvvcxHgXAW+7fBED+KNqfCeEgpWltUZXE+s5yKAtIABXagr9jxt6h/Ryypw4DwTVTIGNJPh4tjXQCXkCYeck89jsLSp5hpFDulXLChHRNX9WEVOTbQcCUZrlGnlNLhu1pY3wpfE5KWfWRzbNA8T4fhSNQaNV8sXyyaxQzttfEosVZx+klTODzLZsDEUp+WsBqjdek46P3GlOSszO+WwBQsIDwTjYDiwqg98RCAdZIsj1BnSTwlMPaiwK7l4JC+Nob8bcLTBH4aASA8eUBO8DnGVxMlBCgaL/Y38ZDAcBj58RF2lF/0KEP6NE89feogu4oAHr+2fvfDWpNAyRRgZ7FQiMTWcpRMdrhyFlPEqacjmfzzdHgaHUmzYTuASDgrMfspHlk8Y42QLRGf0vuUK6LCe3/SbaadwYogSz/31oyb01NoYX2iZx1PPxASbsRHQ14jsbsezh5BS22Gns7BrWXDP2+AiA/E9cC4aRaCSG6RtZcKqTwFSfVYi+XL2uUf4s2XunovXy+tOBKtwDgmVp+9V2UjR+w/OLMMwJ2ASGgIxgFPNEIAB1nYyEBzaSpJMVsY3reAZrARp/f2QMgXrJoKp0BwLP3v3vPVkVoiZgAiB/Ngkx+1hpgMHGZIJhDAmDWly7HYTQmoYHtAWD1NRhffBJbDCbBSKQeLOO4Jan46pK/5Jv5rmh2zjnKmRqp8DQ0WoG/U/9phWsnTphqTDbmGIfs1smUAODWN/nbkbPABJHo13MXQzA2zu0jLoK97xz9vdZyq47z0bXWJuFkXglQKS1oragpDQVI4hnQEMHuae1e5p57+antg5Fl9JoAMEpLrzyMABCPkpbmp6RjmqsUJIFDGp99n9M6cllZOvgkKNhTBUDaKNdZXwvgKADecv8uAN6ycN/qPfwcnPA5rP9cfEjgqHfiH3n/FR+gDcPf2Rd6OPLeec2HORDtbc/iyZ0JLFQNcPL1Bg7MniA3MK27hYZMm6Dq01hHZ4evv2X8BL4xm4B2S1PdyzusT7kVABXN5D6g8ccUeqrveyvPnQD4QjM9AfAa4/kQ5UpxpscsuPbEc3crmwVwmR3Mbj5FQSAO/i0/pLecAUDanjQFrgQAKH1Ixj4fbK1ofG708+pwYALgC62FCYC3MV5ajcghnyVHPd+QQAuf4nOTfDl+QOMByHISRZefoisc3xg/pwgtc38riPPcfHjN7xP4k/jPP5xI7Nb3KA4hSCcgKf1r0o0cmAB4G+NSLxHwCZQIgDALXxOd0QBf03fNsU4OHObABMDDrHrvLpwA+N5N6fygsxyYAHiWY/P6yYHJgfeGAxMA35upnB8yOTA5cJYDEwDPcmxePzkwOfDecGAC4HszlfNDJgcmB85yYALgWY7N6ycHJgfeGw4EAOuh5lEzFh/sWmcE5SspV62UuyTgkBp8e4f3XVvLpksjcZ4QrdUeTMkq1yggkDPJR8acMvnuVbBV5ZCeJPk6N6yqhxJJyi9JbVGRo+/L6t4jB8DrO/r3rh1axwuH0b3T4fy9CjwqZ+C3s5jOUTqZoYCAY2rKKaXGW63Hdmbh5lhWzjnvtfjUmU4hCGdlFbVcK1+V6/rzp/3Yck7VfPjWUc/orBvVi5wHVX1I4Y7UcKwVTvrn5/ii8+rKTIWOrKtahCMl2NyfM7T1iNroXG3WgDw+76s1+bIn6+8UIHDaR2Vz59JRfpfn99+nCPBeWwe5qzmnu9f1LfMh11UyfCjfcrYUv33sPLmKTmpoKlhsDpW2cqgAntR+y/X7Km805TKXSMEGuZRqVCp4Yi06i+x8+HA9ngHANA4yESoC66Vb6SoA1kZG9bkYbgOgewMgcFDNQzJzTxhmA/UVKp4KAOv7bWBjW6uC4tC/NBYFG9YoBSmuAqDNrtqNtZKKwf07JWCr4ouPo2sIVcfm/LSJLVT1EpUj82yd3WpTIs93ukWitYpEax3JHD0kKPAhYGdjTQD8SBX0RwbAvhpMv6YIPGuGwOxpBIBORek/MqqkPWqZ8O6ZRwEwbRBpASotW7A9BQBpIf0gVEjJAh9pgI5zqfpR0dzz0wAbONqI9wRA/TWcaLBpSVXldICt9wAXxRmBoA2r+keoAqAKGMp99WTz5lTImgZIYnpX5oEE1BWNBKOJ4rXn9+0jU0zVfbRFpYZIQIIJwNBI1G4jNFTkAQ7qI/bkNAuNzb2kf0+kcUqf6wer4gfpbMy9NE0zavOj/lvtaufUggVIY1kj9+F/KrnkOvcSAnih2ESfbB5tEo/MZ9bHWwJAJ3/SGwW/HFlErwEAYQZLyzzaD6xBZ+uVzqNlsjStuzRsyroYASCLRfMt+wBGqeFp72VNWR/qjX6AjgBg+nlY9I7d9D1U88AAoKNSTLJKNkX6a4wA0CZmxtC2am/S1ORjHqeG3r1MYOa7ApPMTsBRq1grw6OwgM0OHLUHCB0xkbZM7z2TgSkOcM0Nk90khggS5ZsAmvLh3BCj0luuU+V6rVKv56W0kb4kqlJvUYouuKZvLu93xmTBpodEngWEaWjAjxCzOa0hi1EBU4uT5ob/voNJVpuB44GSSulapgho6JOW6t99W8u3pgHWeava/qMDoD3iHPlojSqeTDmhSLEQmMi1NcUIAJm7ahrCJ266UCpZqxqvzNoHaA8A06bPTTQPpsgaXQFAWguQI818RDrSx5+jW5Qy7PfSAB3q13PVxiQ1PmvwUSnJbmMyJ9Oj9akB0FBoNLRfwKKadiinN2hm/Gy07VvpDADiE62OZtuXj09je+Po+0UAOO0SFGhgrgLl3gdoLixyZe81durPttoEQNEY0qyeAGAe05prFzFjmAD4kRXx6AC4t27T1sJ1hF11ufUAqM8xATu6FnawYIc+yi0ATJ8PD/WQWql5NPgA4KgB0Z4GCABVVEkB1tqu0KF7qus9AZCpmf6ma87f9KT1rTQtDYjQcwCgyfZOhT4VXAhxFQC+e1SeOQOA3p9gCIlNevel2BWmpfnXxtnx33KZKIqLRkGQdBVkshM2PaVvNMBX/IE1wOz2fNW6a5eyCYDvBwCaR8DGt9fXPewB0B4RzEIskVqUhCsrLS34kwnjj9IaAOpzwVRDim7SzvYoQZIR0h4BQP0/VIxOc+w8zwK36e8JgOlT7JvSQL3/PtpOOljZbAAAPQcApt9w1QD5BWlQ6EgP4b35OguANRiS/g5cBUCaFse81QMiREvjhLfGaqHPEQBq7JRgkwrP0bbzLJYBU9pc6T8haksjtE4Jy0pXAVAEMZtJa9RRkYtHigLXb39NJvDe+vR3Pm4+Qe4zcx/qAZC1JNqLNLmqJdr0Fopbxb8/EGwbAWDKrPsbBz+Je6RfLfP4hwy6PxnUEQDUzY1fyAbgwxJVFAniH0o3rDUT+AgzazAifk33kTDV/5dn+f7413720n3tOQDQpua38P5qbgoQxYm71eT9CC9ccxYA3ZNgSFJY9KNIQIy/rwaEBLViltQ2oSMATFN771hrgSlgUyOCBLTn9nQVAKtJz5c08nnXXrcvnQazBoD5fdKr+JUpFbVobk2DcT3tnRYuOs9srNfupcH087D13lyrriStbI0IRaXd4I95zX6sANjf2+c26xOTXsR8+UkjenffCAD7B9Y+C1ubS09cmsEoneUoAKYbnQ9ndivsKQ/w3gDInPddCGMB64jSG8K3iayie2qANQrMfKSuiwJLEzHpNmNAr066DbjVqW5rnvK3WwCwBkMAnj4vgCm9nOt75eSl3WcFkhEA1ucKdPRRvzw3faD9f22AVN97FQBpmzR/PjR5aNai9wIHfkrfC/iTOvXoAFh54xt0SIwvvwfAeq0ILH9s6kqeBcCt9+ZvVTvbW7OsjLSaXQNAgZI+NUyKVrISpN7oZ/NRWgNA0VeaGPQFAkyBveKXaU84amV5FACjNUB6C0wAgBm4B4D8ddE26vcxY9M4u2qAjwCAWxMOkAF0beXJV5kqzy8FgDUYoh+yPC3zNGrvKeghuIEID0IEjQCQf/CLlr9L/Rk10akg6VLpMTrG9XQVAD2Pj3GrG2F956MCoERg/lqBIqAt2AdE7C1ReOlPFQCtKXl0fkdTNH8Ak2/eHtwDQBYbaxHBla333gKA1X9XAdC/4RPMugsAJunUC4EZh7cF6cREdXD3C48pRDLWBsu55igAut67TELt87oHgGunV9bSUY6awIDIZD6FCdzzjxlOUtGm+EF73xNgkLKCXsoE9u4EQzJ+TmVOaHmDlaQyRGLzDSY/bQSATrQIoqGRZmct2oSEsgCRPs6A15q0aSvdAwA9T04dlw4hTKsAJgJ83ABfWYJijwqAfRT445dxW89pvL52EkTknfnrWvPCZ74HgGsnQUbv/ZDUWvlFgl9bJjDXEGskAvSyCVzBpHailypCiqyRvDSt8kZHnM4AoGeQWBaZwAe6NwDWIMiaKfWSQZARj5lfCQ68RBAkY6rBEL9L0Go05uRmVW1tBIBJlyEEAGef25gosU1mcwJhoElI2MTVhXEvANzapK81CNIH17aOwrGcgD8XDI3xVgDEx1FQ7wgI8oHzD1tH9mmoD4IAe35LtBUE+VBQay8P0AOj2VEv+aS+ZmXk/DYSVkf9bM8A4Ojx9wbA6lDHTGDbU3WGP3cazNriEA3DS32NRSuv0C0+wLwvwRD/LwJXk5frmBIYM24mFaDqAZAmx9JgPo3WDsd15odwNG4+UgEXP3sf9QTAj8zAKA+wT6/aAkDuFm4XfKZhXQHAtbSuvfXLrcUt9staa1wgawDIZ8sER30aTN3r1ovUmo/SEQDkS7BAaSB+WvA17yoPS4PyUXTu0QCQL0RXM5slgZZ+MpxQYLa9RCL02sLIyRh+WWkBUlBupSsAmDxN5if/6xrJ4OfKsM5E+SXWM6ksSpaCxGa+Nr5E1Ce8CkgwxWwCm8jfQ9Hi5SNa9EkKnwD4EQ6NALBPsN8CQO6W+GP9vAKAea84AgvzCNXCD9XN4N7RSRDRay6SPhk/KVYA0iGLD9ARAHRDdUALIIjQVqr+qVHqwKMBoLGLooq6YoxJqUdynK20cUk+DZD4MUL3jALjyxkCekwT+XcAwVhGKUp8ciRd75er77oVAOvi++TWmjPFW8R1IpIfSoArP/N7ieYWb/0eAoggAnLmyDHLEKBjAjOJq4YwAfAjHOoBsB6x3PMBykiQdM/3mUICtwJgfW9N6+Kf5yMerVFjJyBlEtACmeJ7R+FiLvdH3lgPrIjRKaPDxRAwNGqshQsQOOs5p/kHSHVSmg8H8z6QbX0iD3BtI93bBPYemgsmEwJMOpJCBrnvsPGEzG1GzAOCjwCAxsDky6kckytJPcUQADZQpB3RikjFNToDgEwH2hiNgYZv8QIfOXujs8j9O2lufHbSHmrelw2A5xzYNlr15fHX8D8BNKeSHJrvqUbGCTOneyoAAl8+yhGZc0n2BKEotuRZqR9HaM8HyHedtCkBNJout0XOqMqxUwZqVA6LpYUkAPs7wm+84WLKiSS/I7RzIsd1NRE6UWD7EZ/471NkYysKDLD4ZAlbQU88YvntAWAfBe7fay95byL89pc59S5zwL8red53W9M5/0vg1mIkvnOkAUqfch2gFIzlapH5keCa/d4HzE4BIIbTPmwGPh2MYYKlnp8PFDmDwD09ogZojDaWBToqDOt7nABJ9DLf9JIaYMbAlLSgUxhitGlTDuseAJg2oHkWF4iNkjpsR0Aj1xypByhB1kYBgt5h46wBbYJvNBabxqat2sLRsVU/7949ewC4d3/+PgLAo/e6rj8itlf6DG+s+QiFrTxAPATiqaG5B4Bb4+7f69q9cliUKAEQgrqntXqA0QL769fKqZ0CQA8lyeR/IUBn0VBhIauctVEBUdc+KgAaG6lKq/KThHT6REFUdQKr5vdIAGgszAIFKiwG0laOXgqiWgjJGbwnAKYPMgDuy3Qd3bhHADCFKGg93CtrgTfvBEYEM3ONUJDiNAHwG2aDVSZ9JydBkpzuih4A8bueBKnXngXAvBcmANz6LO8mvBU8oH0zdeUN8m07tSEYBk/46Ue0BoCeKUOC5kcBoFXKQGAxbRZEPbp453WTA+8bB6LdntEAX5oH0fR6DfClx/Xq3j97gry6KZsDvjMHJgDemaGv6XETAF/TbM2xPgUHJgA+BVdfyTMnAL6SiZrDfDIOcLIL6MhF/MBB+Sd74/UHCzbKCRVE6QvIXn/6G3rCBMA3NNnzUycHJgc+yIEJgHNFTA5MDrxZDkwAfLNTPz98cmByYALgXAOTA5MDb5YDEwDf7NTPD58cmBx4RAB05E6Gusxwtb307HBmVNRr0uvkgB4vKZIhOz8kW19VZ2eBRw3mX+fXzlG/Gg48EgA62uVcroPb/bgckXGcLl3aXg2D50DfcUD5MR3tFCBQqAEIKk3kuKEiBoRdrfQy2TY58CwcGAGgnrnO0jmAThtTBaQnZy8dPL8XeacKGqpBOLPnLK5qI0rE+09JHGdPj1bruNe45nPux4G1Phu6EDq/OWly4Nk5UAFQBQ41sxxO3qN7AqDyUyoKqwGmqAJTSf+HSe8fByQc6+eRSjVfVkqZv39fO7/o4TlQAbA2p1Z94ycsVThqRQaFFHXwuicA0vzU+7MZ/LylksfDM3oOcHJgcuDxOFABUAtDfRvU+FNl9wO185ehpyTOvQBQ8UfvU4xSWSOlqCZNDkwOTA48CwcCgGrJxb8G5BQiHNEaAPLdadLzvZZCqZoR6+5Fe9RbQE9YdeB6SlHEL17qdmnarHKrarZAUVFMFV3Xzmj+6EF0WE0zwRLVktWG24oupunKFrPXyiTpb5A+qGv3p4nP6O8io7Ru/TH8m+/TWL9kqZSrnlolXa9U4q69MZSaV/VYMOGHLxengxqfqZaBqYOmejP3gj6v3qf2oRp6ghP6bigrT8MfaeDp+ZxS6v33pL3Ab1mqPte/X7m31pH0LX0BVvUQrQ9z7iwv3lVKo66t+a1jrn0o/HutvqXnEdhcNWrQOZv7+ctL9r43paxGvMo4v8fSwJwfPo18VMdWNXu0j9yX9+4Bx+i9qkxzTXj+T2ut8ctal9xSCs2ad5Wb96wzCpQ9bPwCW3BFwEvwSyVx66xS5ffWuFOWv16Tdgl7fUa8VXVPAAAehklEQVTSksE4VLn+QGHdAKAeGCKtYaQgyIjWAPAHtda+sNxg86oCK40llP6i9bl6iygPrgiiwSEDlPbiXh3DkI/VW7anAKCxmyhkQdo4vkm58I/b6FoWAFRIdKTxep4JTcu9+v4A4OheEW28XQNAoCr1IwEmpc2BUSo8Kx6p6GN1PwAurgm+WkCoikkPgECO0PBu/jYl/0MAUpR9i/hgvbcH361NTfB96fLQswC4d+8WAJoXwJ8S6ARDTwFA7UT74pqAhS9yDQAF4vQdXiO9UPRnRvcEQE26uJ8Q4aUyct0LWoKqVN5T5sj1o4j66HvzjACgxlUKA+OL4rcAzD5CX7FUcV4LRGp5ACSzhq1pcxMM8DyAWolQq7hBKAu81v3segqSHsGVKB/2IBqWu1/2gT0OW+wVvP0AVRMYCOm96ScTOIBYb1gDQJWi+e8sCh3Dkq7ig/U+wBgbt2+ik85reQcp8eNaa1+39I6A3kp4o77bk98FAPtm7DTIr1oi1TRBm3pEAcC6gFcu/dCvA4Cje/HOwhkBoEkHTBaXRUtLxXP/D7SU7za5Sr2TypXwR96cTas7n41SNcB0azMPeF2JNuG5pLDIOneDdwIZgS8ChsDp20x6xhoA+kb9IiK8zgDgkXvXADB9UWxGHcPwakQBwB+/dJ+r14w0sV4jwf/Rs/U2IYyyf+4FgCwovnBEo1R5m4YOvFS7BjJre+GK5hkA9GwuKdq0/QPMWIM/d1krIz66xxxE+9b7xB5OBWh7UY8Oyk7t7Tuar7X9vLYns96NTxP7ntInhFLl3Wmd+dHrKgACGkCFqNk2psVdGxytAaDnDEtOL8+jwjJX+k1dexj03dcySObvJyxpMBKkK20xLG0TSUMl40f0EgAI/GgWJF+a5NSx6X4GSICTVCP+1pDFxEyWVwcIdX8LANJYAJ8WBYBOGfQzRMITFCNte21zWejWSegMAB65dwSAmXN9STRb2iphdRUAf+vi0un7kcTkz3ffCwCVrbdpbWyWS7+n0qu3F/jGcS8AZPr27RSilRKatMOqBbJcCHBuL6XFaPUjLPjmrTWa+BadBUDKle+GUcbVK21cb5+6fI/v+hD1eYBytUiamJ5rgz0bBKFh8CPoAKZbWUgts/hORJc1Ye+pmkl9o58thkW75DeidY3ouQFQ1zY8QEBK4GlE0oJoGcw8vREqRfth0jGjmbb6Hkgo5ttb63O8tfAAH/PHqRsmEL9tpdHm4uOhBTPjzZv5OwqAR+/tAdA4+acsdBaHLnBbFAAEtjqNVdrSAG1gfkUakE2mx0pI17L4Bpl4BNU9AJCpyA1jT7KozG1PXCcx9fu9cA8A5CcbtWqVtP47lsHE/ZKxWXcEAuoF9s70fOjPZwFQ7IELCu9669K61N9ELIKrovcPv3v5KBGa/0qvga1E5xEAQngqOqS10avfIl9Kvaa1hAyafY/cMwpYkCxMNiRhmqYSGjGMqc0XplgkzQ9A8BWN6AoAAjJjBuICD5XWTOBILBusb/VX78d7/hDH/zQIqlTNJH4VoMVnl+58a4Ikz3B9Om1ZQEBTQ2kmHd9S5W/uGW0ua0S/aODA7wiojwLg0XsrAArSMLVQ3yR9ZXrbr1/8Q0xJzv1KWwAI/LgiXGPjE1bReqLB4yFtXR7rPQCQ4AHYiJIQQVnHbD1Hs+/3wj0AcIuvtD8tTXuhHD/0lqW1Nj/9788CoPvNE/OXMATGoWALdxrMGfouRwBoMwAGG0Xfzhp8sNE9uAdA/iW+C74KZJKAXZoeS3cBrPwZ6XvqOiYMzQMl2tUzhYrN3EE9yo+iwLmfWkwbilk/moQrAEhaAo8R4KwBIF72G3FrcYyiX3FDrN1nY/I9rhHzuQ/4iLiTkBzseNJTv7niKxNkSi/iowB45t4KgMbEsQ60s3ZGgY86dpFT2r918jO7j9oDQAKdQLYus+ljjdD8CClrfg0At+bV33phYc7ib7xlL9wDAFkSXCsjSppcH0wIAAmgCUZcoVsAkLLDyuOmsB8TAIqbomZIfGhsIwCMv87i5twGWqGRD5CZYKFYrJhAGvKdVKpozI8VujrpNQpcD9mLJNFAqcd8mwHZngFXADAScRTo2ANAfZUTODizYGx+ASbCSQoGDSSU/7c5ff+RnEobDYCRoLRTGqVG8GlenWfXzcWnwkQHAAGWrdSOK/dWACTJWRfeJevA94mMb50hBjKucY91XWkPAK3rXMN3JcWD9ue7tVnk1B+tn3wvoUIJ6IkAomS8VgDsXSwvDYD4G5dRNH3uAUoYa9D89+k3H52THgDlNgl88GuIMFYHt5tGAJhIi7/z7cRcrROfUyYWcQXAI2p/NYF7B+2WxEiKjXQc2ufIvL4VAPHNc/lK+3QT370GgEkXohnzTXjGGRJN429jHvGBmVgblUmtf65N7idAExk7Q9KR8IxpzgFfqYIYU5lU5f+zuADuUQA8e28FQKa/4JzMAhFGf5OexC+4FoBLZoOoZlwt+a4jAGgDASpZEfyiLB2+V2AoVWsLANdyJtd4dWQvVBO43wv30ACdypJtMaIIfAoFyzAUE5iyYa9eoVs0QO/jepNml5zAPIcgtx9WqQfA5DbRMqj2fT7YCACZgBy2vXlbXyo0Lum5B8Ajjt8aBGHLV6m6xzBaLG0JgzRn7ulWAOQLiYYFXPuzy2sAWHOXaFpSDc4QE4nGKfIrWJUoFw2XfyyR/BGI7b0nzmwbm5YyAkAmnwi2v9cNeAQAb7l3LQ2G0BGIIIC4FUSuewJe1q90G4De+1yPAKBnqk5Uo6JVuNwTAI/shRoE6ffCPQBQmoiAR091HggcqWWh6pPW4Ly3/vbWXf373n5ee5b1CIAFPpjh9gVN/YcuCdiHALAm0Y5MBg8ZAaDu7vxOpDDVvk845YORomFB9gDomUCAX2gt9J80GGqu3LejDMMMm5k2u7ZJbgVAzI1a3UfjjG8rD5CbgCbhp4jiWna9vCVqfLRE5qqolu+hgRh7nwjN9KWBAwYL+UwqTDLrR+Z5f8pA3pjNGDoCgLn2zL1bidASY5k8nNsWPe2ykii6NWNd2iBM0kpHAdA9NB7aLlOYO0eQBN0TAD3vaBrMaC/cAwCNYSsNZpRuUtNgCDkCuk8b8lzrd88tcysAev4vWqLnAl+ENCvL3oQBq1Q1wOSBOVHBtzTamCMAJLn4YUQhRWL4iGxCphntTfIuJrluBICOzTgqg6TEiES6zqKl6eSIFw2n9+WtMQxIUIk/bXnumrZ1KwB6LhNTcMZ3Z0OE0VsACPyAvTH6CZyBoY3Kx2fypA0xdy0afjnEOY2XHPuegUZH4ZIr1oM+LZ0JyY8FSAUUzBHzzpzRkq0HmiW+V6oA6NtovYAydBQAz967BYD4xyz9TotLgHD0TYjwkwUQs9nPns4A4NoGujcA9onQ2QssDu6oJEKP9sK9AJCFxaqTl2t9SMkRHMHv0drAG9kAIvuIwqK8WRKhrWFmtbS0vaOjVwCQlm/MIS4Pro9NCgAKqSenaiuNYi0RmlnAGRqC9DbzN142iggcQBoBoHtMtPwuRHqQNAAw+YhxOvcfMzoK55tEg5i+aCu0fwsAAiHZ8aldyPztfVA5CsekYKr1Jcb47/AyqSuAweat32zsSXHxb8+hMda0nhEAxs/YO9lzpCo8DEhXIUjAWDR9ykAFwNEmOAqAZ+/dOwtMUEsKBniJYIqyG08EE57RCnp6RAA0Rjxy4iJ7oT8WurYX7gGAhAb3AkuO+wjo2cOIpQagk5Ex4qejlvUonHVE8bHGRkfh1vbzKNF7MIUf+lUi1f4w0mQ/dIOB+U8YmQRVhNTPNafyVjUYzIHyTmtgHPOLz0oCKi1PHtcaABpYNjcNiNQw8TkAnuNBawyrvzd2kydVx3hpar2GlutvAUBa1DCrfGWGaFwWVU/Uc+kVfG8iwgBVeooglMVGouasI+c3MCUc/JsGh0YAKLjCh2vh0u48D9HyuBpoTBY4sGUm0NbxGa9GOYDuzeYyBjlqSW/KNx0BwFvu3QNA78+JH/9mln/f5ScXBTBZWzuPCoC+g5/NdzHtaX+E195euAcACqJxhVBG+D6tJRahXE/gtleQWEZBXwwBDghWeTahvEVXNEDPlcYlb5ZFSgkameIfeP8jlcQ/gvCPcE0AcC3inTEm324NAB/hW+YYJgdwoFaDIRheK1HkxDIOVxmfAHh+qicAnufZvOOxOfA+AGCOKLIABQlTHWqT8xMAzy/MCYDneTbveGwOvHYAlH/I1SFSv3cSaprAF9eiNAg5kpKB+RrXSP4ZnyjfVz1Mf/H18/bJgbtz4LUCoLxlCeRyIgVMBVrEIEbnqIdMmxrg3dfSfODkwKvjwGsFQGkv0l8An1xjARCB3MM0AfAwq+aFkwOTA+8bByYAvm8zOr9ncmBy4DAHJgAeZtW8cHJgcuB948AEwPdtRuf3VA44gSPJ3LGsvdqBk3NvkANbAGjhOJHhAPiHmom8QV7NT359HHAywTE4x7Gcgqld8l7b1zjBkyN9Toq85m95GN5vAWBKY611XHqYj5gDmRzY4IA0CcU2HMMEIn21onszr3aWu5eF5VSR87GOBio84Mzuo1LOoq/1FxmNW+T2Oyzf5SijY5w5bjnqUrj17c6zqzQ/qqb+ofsmAD7qMprjuicHbAgl/51JdY5794zo8vJspno439lpibdrG+wpADBpKlv9be7JryvPmgB4hXvz3smBJ+JAGsMrK5XG43uvegQATHfDtSowe9/w3H9XkMJZXAUJFEE5Qj94KdCh+AewVzvUdyPauzO+R8kBBUJOcY+fvHfT1AD3ODT//pY5oGyZ6jdq5Clxj/S3ViWFVjiqnnNPDdBpIhVSVLa2sbd6b7/lebr529cA0AQrx6RUE9NB68cU5rz5ZfPGyYE3wIF7AuAbYNfLfmIPgGqAqTGnJl8lkkdBTg2m++iTKgx8K54lOjXqc+Eav3fNJyyViT3f85gkayWjSGCNWkZ9Ktx/tAZa38YzBVirH2dUW48KrVm8OmPuUewxlbIV4VRUVNHSnAlWB1EJ+5TCSnNtYx21s1SlWcXdI8QUYFIolrml2ufbVEv+buXBe7zaGoOadLr9mQ/tAGgmsgNUsvZcVYB7qnzRFqGaMZ6lbpyqHXo5CLRpyrRWt1GtSY21NLghnHsK30ffoC6ce5lF/m0ta5BFsCt13/e9qc84c6+Cv6nYvMXLUY/ien1qVG49g5nJVFwjfO3r8glKWEMK+q51SbO+lMNScVzzMuua9mstCbys1VbUO7nvJXI0CHLlXt+fZl49L04HQbRF/MIFpCwSURhFOmvTbQtUlKZnfsCDg1g0p9b+BwYKIVpMBhvb/q0BIL9I+vU6vA1UXgsAWhec28h6UBjTvEaAyrFTJTsl6V23BoApWukaAiQVh2UdKDTRU7r7+b2CsQATWZv6pqA1AAQUeExYIePTniFVi+UHEtqjyPDZezWkcg++2AOI0tCTytV9h7p6TQDQd/b9m3MdcKN0jAgI64Wdb2S5Ecp7lZkrn+1/Tc781MfbPG8BmrnTjwb5qfT9UQC8cq/3aXz0/QsjFAEG3qcAUL6fHg+kK22MVqK0uAeTzhywBiqNQLVhC69WBea0pOFpkdmXoE86jRZ1UhJqr5G3pAHWxar3CbfCawFAmhKNjxZLYiMbXW8KFYT9u+/BMAJAmiBtwoZSYdimA3r4gPrG94QEIACSfHB6saQqsSrbeqqgEQB6l7Xsb7RUloY2mf7fvVo42Kiqln+fDkmu3HvVBL6lSnmGbz5otsj3aUWRungAkPUlGJSeMrlPE3jKS3rp6AkTJcZ9tGc82u2xsQhKAvMoAFbW3xJB7oXATWkwn9Ja+3mLRBbi9/F9HqDfS4hWdkaTE6ZpJRWS5fMAUwtVazpapcVHlQaefZHCCYCvwwSmTaz1MOYu0c2MEKw9kkcAGOCncSntHzBLmkfvCqm9aqyrqhHtAaBnGZvNaH33pJ8Iy8SmZ9Zzk4Su3PtSAFi7s9EA5c+NaDSXWtZqXWs+zNtap8KVR37g11dA7Mq9GcRNAEjLA1p1AY4SoZkMen/GJ9YzJD47pgZp5BkaWdMoI+XrPVcB8Ataa0LoWuL1jYe8J30fHsEHWL/7tWmAews/rUt9F/8eGgFgtBvCVo+SEPNZzUQuFvcxjZH8PQvaekoDqdyzBYBOgKQmHC1Ps5wRaS+pfSaT8nOXC67c6xEvBYDp60xQ0ejWzOcRH3RN1OuXycs9k54ze/M++vsVELty7yUATCvFX7y0xPOwEQCmwTk1u9rdlRFsb6kCIaZL/Ec9w64CINOcpFMLrA/ceNcEwG/g+JUgiKfwo601TeIAp9Fpik1Aoh4AWQeAjaZofdQugvo4JEiiqm+c9FwmX708jw+59jneAsBYHjZ03xC9rkGa3zdrrf30pZacv125dwSAzE6mPqDlt5TrJmBCCIzoVhM4fng85mYYEbeWiuY9MXNZZ3ihyyFhwKVFiJxNvbkCYlfuvQSAAETEsErwEQACSP1qv3zxJ4yYzF9D4jKJmTrOFK+l0FwFwOrzEFyhyaadHz+OaOnHL+aNxR56iShw5VU0wJ5/NB1uBoUemTG1sm2iwO6xKAUjLFrtTPnTIrX3osCjd/LX5J1r2lIFtJX99W6+aR89APbXC6TV41zfdonMuo4fOaAn2sznyLHO6c+UNVa0BYB6ItvsR6k6zK/c631VA6TlcgXxedLMEphw3Vo0+FYAJFC0p90i1hJBOCKRdlYav2sohUYpPKytIydoroDYlXsz5ptMYIesteDbA0C5gc4iCod/4goj/Z6mmAih67XEHNFVALSggLcy2CHBGSBcU3we1QS2wASVkPGKuHEZIP1X+VqTehAAFJ3TJhEopPexc67MGC6KPQAkIAQ08k4Rs6SW0B5EMkdawtbG+onL6Yo1AATU/Ev8bqhP46A1ppG2lKkEN1xLs+dvDrCOxtEHQQJiAnsE8Bm6cq/3VAD8+qUtrMivf0uqpvlRNswvc7NmTLj/KgASmt5zC1kH3A6+gQKR+fIsbg5ZDHsa4RUQu3JvvvcmAKRFcDjXVISRBqjhCIADhDTBngRKmDo2FZ+CvCI5fAIgFmNPVwHQ8wCG3DhAywyzsGhRVHgbgxR+VAAcRYHluvFp8kWJgNKkSd5RHqA58wz8lnJh4e4B4MglwTzzHA3dmZlM2r2FXueSgKPVbZnAX7NkDnDW8xMStqEKGlJIAob5uz7GQFF+m7w0YMIkZxajHgCzkQhDm3otgDMCiSv39gA4KiQCnJiZyB6ylyrdCoAxgX0rf+leD98jAIm/hFtcWKPgZ/+cKyB25d5LABj1ufrSRgBogcuz+alLgnD9eL4doKdGP0ClUovufe+lqTOTpY8u3QMAtybytfoAE5XzbXHiryVCp5m0hc9k1BdBzuHZRGhpDsnv1PRJysgRAjDMVKbTXhAkQTQmu+TkUM7pAnoCreYTukbaBiuF5osftOAtE9g1aSpPMx4l569925V7ewDk2wT8PRk/f5v1/1PuBIAJgngc1xBN6F4kWs43O9r37wUAiqDSDJhAa2kwtCv+F2kwVGHaYKVIIJPLpOGToplgHlW/T4J27wTAcRoM/spPQ8wQm3kNAHNYHnjQrvz/LQBIUH3p8k6aFk0kBBDX+qx6F60TVf/dKAosZ9D4PJuGGy1TcEVC8m8Y5KgRrHJIWRFJr/KuvTQYp1QAp5/M6rXUDjmttN6qJV65t2qz8iNZQD2ZT0AL/OyBSrdqgLRgQss+/W2LW6jm6m7NpXu3Ul8yXtqgfb5FV7S4K/dmTDeZwCYK80hxppQIr8PXSYQWTOCH4WuTMMlpzdQM0fo4qYEjTSKb198tbFFmxHwWQAlNAPwgAPID8g/JXbNB+OoID+khPQC6NlUvaBM0JFHTW0xgZqckZ4EiJqZNVB3exgOsCDGbC32r5aB+NLkjidD8ce6Ppir6WoFXBLZvISpFxVoESvyBAc09AAR+zGab20++Pc9wv2isZxH8zFA5hjVQd+XeI2kwFAnm5SgQcisAmpOkDfm39SBDglBB/MsSmVkM5rfSpy8uJEoQYWQNIOtK5RxzgLhnCKMtugJiV+7NmG4CQDcnbw+IkYYWBGDkpBUmJ4n5FZhnNR2ClsfvR3NcK55qoWM8J7nNFgYHAJk8Ix8hc8hCsRn5TQRXLJqjtGcC+7aMhZPdIhFQSEQ1vxudBbaRbSb8irM4ybT97ywaEbhQosA07mgIAI0AsmGRObA5Ey0NADIDzY2xAhLEJ0bQeM8eAIoe09KRd1rkybGjBfCl9kcd61E4WgXhZ22ECEe5nkeOwn3mcgbXvb4lz+FH9O5KAj2c+sZH+NaWh3sA6DnyUgF7vg+/jdE7zVGIttqfCb713j0AtI9yJG8Ulb0CgL7H0TAndxJxNl/2rT2MrJ0E2vL9osc1LcmaJHQJhhAliK+9J2sjRxL9LUfhrBECp5ITJvV44JV7B0N596ubAdDNtA+DFLzIRvR7DBQZJA2YtCEbCCjR7CzUjx34b1zLNONf9Hf+GJsVqAUA1z6m//2Zo2Pu3QPAo+8dAeDRe12XAEXuWUuDsUFp2HLXaD01GFDTYDzHJqK1+z2fWtoW7AFgP24bxDuN0Tv5eXuyEWgJtHs+YPNJmPEzWsS9O8T9W8UQADtBRsv17hy37Ish0Codj7OhnbWtdAQAXU9TpcHwkdFAaX+ShAkwa1EQIv7C/rtvuXcPAPnSsof6IhHefxUAPYN7oS+GwMxnpUn5qXvY9ZQYmrh9SUGhzOBTCl4AR/79ESUucGQ/9L7JK/euve8SAOahFjjNg7YHdEiqK8djjjBn6xpRSln7ZwHw6nuv3m9hAYoeAK8+d97/ejmQCkPVvfF6v+bxRp6MFuegWZ2b9FoKok4A3JvJ+ffXwAGmIjNe5Fyi9hl3zmv4vpceI7eGjASpYywGlsMEwD0mPOHfpwb4hMx9ZY9mWjLPBBAFQfz/KEL8yj7rYYbL5ynQlVqZyZ54LwBQIqzkWWdEk6rxMJzfGIhkXedALXjJzZPeJgdqrU2+ODmytfrM2+TK9a92RE+KExLkSW1Jxw+lTO3SazGBdz9kXjA58MAcEIxTj1DASO6fTINJ1zlQA4OyJigaziwLWq5VF//AW+/Vt/T6p8wnTA68vxygnUg/ObQp3182PN6XTQB8vDmZI5ocmBx4Jg5MAHwmRs/XTA5MDjweByYAPt6czBFNDkwOPBMHJgA+E6PnayYHJgcejwOPAIB7R4cej2tzRJMDkwPvBQcmAL4X0zg/YnJgcuAWDkwAvIVr857JgcmB94IDEwDfi2mcHzE5MDlwCwcmAN7CtXnP5MDkwHvBgQqADhOvlbz6XYMqshigSKUinKNOVOoHqlisnpv+Ij3pjfrDDnBxrX3ggVvnJZMDkwOTA+scWANA1ZfTY0J/iKcAQOVqtEdUnVdlDFSrxWbUWgoqjDlpcmByYHLgrhxYA0Als51dTAu/pwDAfMhMg7nrlM6HTQ5MDhzlwATAo5ya100OTA68dxxYA8A0iZka4Hs35fODJgcmB8KBCoD6gKTVpUKeGvS8BAB+wtI7Vhl8Y9IY6Cd17TTnDE4OTA5MDlzmQAVAXaDSGlBEWO2yAKAX/YGlOfYvb62J4OqslSjw1kA8RxXcr1n6yuoOV6n6AD+1taaaq3G5TwtBJCCjim76C1/+8PmAyYHJgcmBCoBaH6pUKxWG5oUCgMBID129aJFeupqhK/QoDcY9acsYrmopCFQ9U1Alz9QKU1XcUAVA/W1VztUmUbtGjb51gtOmTwtGbTsnTQ5MDkwO3IUDFQC/9dJRSRtHDcErACYK/O1ba9rOATe9OTQgOZIH6Nqf0Vr7jEWbk1qjpy2qADhqrJ5u8ZqQ66YlOj1pcmByYHLgMgcqAH7XRcvSf1cD8xEA+h1/nA7xTODveRAAJUIDr3TB0iTmFw4A8DsvpnL9MM2z07j6Y1prchQnTQ5MDkwOXOZABcDPXPpofv7SgW0PAIGZTvJHNEAAyFz+fcuINVr/+QMAlBTdtwr8pov57XI+x990+avnAyYHJgcmB5ZgA0Z8u9aaDksaCju+lmBDHwUWmf3y1tq3bK19WWvtsw4C4K9srX3OAqxMWc/92gEAjs4mA0XaJvourbXfOGducmByYHLgHhwAOIILzF/UBxpqEIRmJlCCfu/iu5Mus6cBAi9BEJFl9NmttR9bBr93EmQC4D1mej5jcmBy4EMcAICCERKfaX0/Zonw5sKaBiP44Npf1Vr7Oa01wZIjxRCksAii8C3SAr+qG8UEwLkwJwcmB16EA49QDutFPny+dHJgcmByYALgXAOTA5MDb5YDEwDf7NTPD58cmByYADjXwOTA5MCb5cAEwDc79fPDJwcmByYAzjUwOTA58GY58AcB+do9XowFSq8AAAAASUVORK5CYII="};
	    this.embeddedResources.isEmbedded = true;
	
	};
	
	var data;
	
	data = {
	
	
	    sound:[],
	
	    spriteSheet:[
	    {
	        "resourcePath": "resources/spriteSheet/imgWall.png",
	        "name": "imgWall",
	        "width": 512,
	        "height": 64,
	        "numOfFramesV": 2,
	        "numOfFramesH": 16,
	        "type": "spriteSheet",
	        "id": "0967_6478_69"
	    },
	    {
	        "resourcePath": "resources/spriteSheet/sprHeroes.png",
	        "name": "sprHeroes",
	        "width": 396,
	        "height": 280,
	        "type": "spriteSheet",
	        "numOfFramesH": 12,
	        "numOfFramesV": 8,
	        "id": "7855_3344_73"
	    },
	    {
	        "resourcePath": "resources/spriteSheet/btn.png",
	        "name": "btn",
	        "width": 64,
	        "height": 64,
	        "type": "spriteSheet",
	        "numOfFramesH": 1,
	        "numOfFramesV": 1,
	        "id": "8588_3274_122"
	    }
	],
	
	    frameAnimation:[
	    {
	        "name": "up",
	        "frames": [
	            39,
	            40,
	            41
	        ],
	        "type": "frameAnimation",
	        "duration": 800,
	        "id": "6211_4878_75"
	    },
	    {
	        "name": "down",
	        "frames": [
	            3,
	            4,
	            5
	        ],
	        "type": "frameAnimation",
	        "duration": 800,
	        "id": "9849_2404_76"
	    },
	    {
	        "name": "left",
	        "frames": [
	            15,
	            16,
	            17
	        ],
	        "type": "frameAnimation",
	        "duration": 800,
	        "id": "2726_6259_77"
	    },
	    {
	        "name": "right",
	        "frames": [
	            27,
	            28,
	            29
	        ],
	        "type": "frameAnimation",
	        "duration": 800,
	        "id": "8992_3054_78"
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
	        "spriteSheetId": "7855_3344_73",
	        "pos": {
	            "x": 0,
	            "y": 0
	        },
	        "scale": {
	            "x": 1,
	            "y": 1
	        },
	        "vel": {
	            "x": 0,
	            "y": 0
	        },
	        "currFrameIndex": 3,
	        "name": "hero",
	        "width": 33,
	        "height": 35,
	        "type": "gameObject",
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
	                "description": "control character with cursor to walk up, down, left and right",
	                "id": "9649_8595_79",
	                "type": "commonBehaviour"
	            },
	            {
	                "name": "draggable",
	                "parameters": {},
	                "description": "draggable behaviour with multitouch supporting",
	                "id": "2875_2182_268",
	                "type": "commonBehaviour"
	            }
	        ],
	        "frameAnimationIds": [
	            "6211_4878_75",
	            "9849_2404_76",
	            "2726_6259_77",
	            "8992_3054_78"
	        ],
	        "rigid": 1,
	        "groupName": "",
	        "angle": 0,
	        "id": "1790_3583_74"
	    },
	    {
	        "spriteSheetId": "0967_6478_69",
	        "pos": {
	            "x": 0,
	            "y": 0
	        },
	        "scale": {
	            "x": 1,
	            "y": 1
	        },
	        "vel": {
	            "x": 0,
	            "y": 0
	        },
	        "currFrameIndex": 2,
	        "name": "wall",
	        "width": 32,
	        "height": 32,
	        "type": "gameObject",
	        "commonBehaviour": [
	            {
	                "name": "draggable",
	                "parameters": {},
	                "description": "draggable behaviour with multitouch supporting",
	                "id": "7358_6227_270",
	                "type": "commonBehaviour"
	            }
	        ],
	        "frameAnimationIds": [],
	        "rigid": 1,
	        "groupName": "",
	        "angle": 0,
	        "id": "1957_7947_93"
	    },
	    {
	        "spriteSheetId": "8588_3274_122",
	        "pos": {
	            "x": 0,
	            "y": 0
	        },
	        "scale": {
	            "x": 1,
	            "y": 1
	        },
	        "vel": {
	            "x": 0,
	            "y": 0
	        },
	        "currFrameIndex": 0,
	        "name": "btn",
	        "width": 64,
	        "height": 64,
	        "type": "gameObject",
	        "commonBehaviour": [],
	        "frameAnimationIds": [],
	        "rigid": 0,
	        "groupName": "",
	        "angle": 0,
	        "id": "1707_9136_123",
	        "fixedToCamera": 0
	    }
	],
	
	    layer:[
	    {
	        "name": "mainLayer",
	        "type": "layer",
	        "gameObjectProps": [],
	        "id": "1083_7308_67"
	    },
	    {
	        "name": "mainLayer",
	        "type": "layer",
	        "gameObjectProps": [],
	        "id": "5752_9657_71"
	    },
	    {
	        "name": "mainLayer",
	        "type": "layer",
	        "gameObjectProps": [
	            {
	                "spriteSheetId": "7855_3344_73",
	                "pos": {
	                    "x": 158,
	                    "y": 61
	                },
	                "scale": {
	                    "x": 1,
	                    "y": 1
	                },
	                "vel": {
	                    "x": 0,
	                    "y": 0
	                },
	                "currFrameIndex": 3,
	                "name": "hero",
	                "width": 33,
	                "height": 35,
	                "type": "gameObject",
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
	                        "description": "control character with cursor to walk up, down, left and right",
	                        "id": "9649_8595_79",
	                        "type": "commonBehaviour"
	                    }
	                ],
	                "frameAnimationIds": [
	                    "6211_4878_75",
	                    "9849_2404_76",
	                    "2726_6259_77",
	                    "8992_3054_78"
	                ],
	                "rigid": 1,
	                "groupName": "",
	                "angle": 0,
	                "protoId": "1790_3583_74",
	                "id": "9250_5062_87"
	            },
	            {
	                "spriteSheetId": "8588_3274_122",
	                "pos": {
	                    "x": 63,
	                    "y": 199
	                },
	                "scale": {
	                    "x": 1,
	                    "y": 1
	                },
	                "vel": {
	                    "x": 0,
	                    "y": 0
	                },
	                "currFrameIndex": 0,
	                "name": "btnUp",
	                "width": 64,
	                "height": 64,
	                "type": "gameObject",
	                "commonBehaviour": [],
	                "frameAnimationIds": [],
	                "rigid": 0,
	                "groupName": "",
	                "angle": 0,
	                "protoId": "1707_9136_123",
	                "id": "7469_1515_124",
	                "fixedToCamera": 1
	            },
	            {
	                "spriteSheetId": "8588_3274_122",
	                "pos": {
	                    "x": 63,
	                    "y": 271
	                },
	                "scale": {
	                    "x": 1,
	                    "y": 1
	                },
	                "vel": {
	                    "x": 0,
	                    "y": 0
	                },
	                "currFrameIndex": 0,
	                "name": "btnDown",
	                "width": 64,
	                "height": 64,
	                "type": "gameObject",
	                "commonBehaviour": [],
	                "frameAnimationIds": [],
	                "rigid": 0,
	                "groupName": "",
	                "angle": 0,
	                "fixedToCamera": 1,
	                "protoId": "1707_9136_123",
	                "id": "8553_5489_265"
	            },
	            {
	                "spriteSheetId": "8588_3274_122",
	                "pos": {
	                    "x": 10,
	                    "y": 237
	                },
	                "scale": {
	                    "x": 1,
	                    "y": 1
	                },
	                "vel": {
	                    "x": 0,
	                    "y": 0
	                },
	                "currFrameIndex": 0,
	                "name": "btnLeft",
	                "width": 64,
	                "height": 64,
	                "type": "gameObject",
	                "commonBehaviour": [],
	                "frameAnimationIds": [],
	                "rigid": 0,
	                "groupName": "",
	                "angle": 0,
	                "fixedToCamera": 1,
	                "protoId": "1707_9136_123",
	                "id": "2896_0832_266"
	            },
	            {
	                "spriteSheetId": "8588_3274_122",
	                "pos": {
	                    "x": 116,
	                    "y": 238
	                },
	                "scale": {
	                    "x": 1,
	                    "y": 1
	                },
	                "vel": {
	                    "x": 0,
	                    "y": 0
	                },
	                "currFrameIndex": 0,
	                "name": "btnRight",
	                "width": 64,
	                "height": 64,
	                "type": "gameObject",
	                "commonBehaviour": [],
	                "frameAnimationIds": [],
	                "rigid": 0,
	                "groupName": "",
	                "angle": 0,
	                "fixedToCamera": 1,
	                "protoId": "1707_9136_123",
	                "id": "9901_8558_267"
	            },
	            {
	                "spriteSheetId": "0967_6478_69",
	                "pos": {
	                    "x": 352,
	                    "y": 64
	                },
	                "scale": {
	                    "x": 1,
	                    "y": 1
	                },
	                "vel": {
	                    "x": 0,
	                    "y": 0
	                },
	                "currFrameIndex": 0,
	                "name": "wall",
	                "width": 32,
	                "height": 32,
	                "type": "gameObject",
	                "commonBehaviour": [],
	                "frameAnimationIds": [],
	                "rigid": 1,
	                "groupName": "",
	                "angle": 0,
	                "protoId": "1957_7947_93",
	                "id": "0310_6343_269"
	            },
	            {
	                "spriteSheetId": "0967_6478_69",
	                "pos": {
	                    "x": 383,
	                    "y": 64
	                },
	                "scale": {
	                    "x": 1,
	                    "y": 1
	                },
	                "vel": {
	                    "x": 0,
	                    "y": 0
	                },
	                "currFrameIndex": 0,
	                "name": "wall",
	                "width": 32,
	                "height": 32,
	                "type": "gameObject",
	                "commonBehaviour": [
	                    {
	                        "name": "draggable",
	                        "parameters": {},
	                        "description": "draggable behaviour with multitouch supporting",
	                        "id": "7358_6227_270",
	                        "type": "commonBehaviour"
	                    }
	                ],
	                "frameAnimationIds": [],
	                "rigid": 1,
	                "groupName": "",
	                "angle": 0,
	                "protoId": "1957_7947_93",
	                "id": "8319_3167_4"
	            }
	        ],
	        "id": "0645_0474_80"
	    }
	],
	
	    scene:[
	    {
	        "tileMap": {
	            "_spriteSheet": {
	                "resourcePath": "resources/spriteSheet/imgWall.png",
	                "name": "imgWall",
	                "width": 512,
	                "height": 64,
	                "numOfFramesV": 2,
	                "numOfFramesH": 16,
	                "type": "spriteSheet",
	                "id": "0967_6478_69"
	            },
	            "spriteSheetId": "0967_6478_69",
	            "width": 23,
	            "height": 24,
	            "data": [
	                [
	                    16,
	                    16,
	                    16,
	                    16,
	                    3,
	                    7,
	                    7,
	                    7,
	                    3,
	                    7,
	                    7,
	                    3,
	                    3,
	                    3,
	                    6,
	                    3,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1
	                ],
	                [
	                    16,
	                    17,
	                    17,
	                    16,
	                    3,
	                    19,
	                    20,
	                    7,
	                    20,
	                    20,
	                    20,
	                    6,
	                    6,
	                    7,
	                    7,
	                    5,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1
	                ],
	                [
	                    16,
	                    22,
	                    3,
	                    16,
	                    3,
	                    7,
	                    4,
	                    20,
	                    20,
	                    16,
	                    16,
	                    20,
	                    20,
	                    16,
	                    23,
	                    5,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1
	                ],
	                [
	                    16,
	                    7,
	                    6,
	                    4,
	                    3,
	                    7,
	                    3,
	                    7,
	                    3,
	                    17,
	                    16,
	                    19,
	                    5,
	                    16,
	                    20,
	                    20,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1
	                ],
	                [
	                    16,
	                    7,
	                    7,
	                    16,
	                    16,
	                    16,
	                    16,
	                    16,
	                    16,
	                    16,
	                    16,
	                    3,
	                    19,
	                    16,
	                    16,
	                    16,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1
	                ],
	                [
	                    16,
	                    6,
	                    7,
	                    17,
	                    17,
	                    17,
	                    17,
	                    17,
	                    17,
	                    17,
	                    17,
	                    3,
	                    5,
	                    17,
	                    17,
	                    16,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1
	                ],
	                [
	                    16,
	                    1,
	                    1,
	                    3,
	                    19,
	                    19,
	                    5,
	                    1,
	                    1,
	                    3,
	                    3,
	                    5,
	                    7,
	                    1,
	                    1,
	                    16,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1
	                ],
	                [
	                    16,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    16,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1
	                ],
	                [
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    16,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1
	                ],
	                [
	                    16,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    16,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1
	                ],
	                [
	                    16,
	                    16,
	                    16,
	                    16,
	                    16,
	                    16,
	                    16,
	                    16,
	                    16,
	                    1,
	                    16,
	                    16,
	                    16,
	                    16,
	                    16,
	                    16,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1
	                ],
	                [
	                    16,
	                    17,
	                    17,
	                    17,
	                    17,
	                    17,
	                    17,
	                    17,
	                    17,
	                    1,
	                    17,
	                    17,
	                    17,
	                    17,
	                    17,
	                    16,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1
	                ],
	                [
	                    16,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    5,
	                    5,
	                    3,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    16,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1
	                ],
	                [
	                    16,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    5,
	                    5,
	                    5,
	                    5,
	                    5,
	                    5,
	                    5,
	                    5,
	                    5,
	                    16,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1
	                ],
	                [
	                    16,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    5,
	                    3,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    16,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1
	                ],
	                [
	                    16,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    16,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1
	                ],
	                [
	                    16,
	                    5,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    16,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1
	                ],
	                [
	                    16,
	                    16,
	                    16,
	                    16,
	                    16,
	                    16,
	                    16,
	                    16,
	                    16,
	                    16,
	                    16,
	                    16,
	                    16,
	                    16,
	                    16,
	                    16,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1
	                ],
	                [
	                    17,
	                    17,
	                    17,
	                    17,
	                    17,
	                    17,
	                    17,
	                    17,
	                    17,
	                    17,
	                    17,
	                    17,
	                    17,
	                    17,
	                    17,
	                    17,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1
	                ],
	                [
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1
	                ],
	                [
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1
	                ],
	                [
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1
	                ],
	                [
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1
	                ],
	                [
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1
	                ],
	                [
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1,
	                    1
	                ]
	            ],
	            "_tilesInScreenX": 14,
	            "_tilesInScreenY": 10
	        },
	        "name": "mainScene",
	        "type": "scene",
	        "layerProps": [
	            {
	                "type": "layer",
	                "protoId": "0645_0474_80",
	                "id": "5280_0503_81"
	            }
	        ],
	        "colorBG": [
	            0,
	            0,
	            0
	        ],
	        "id": "3217_3071_66",
	        "useBG": 1
	    }
	],
	
	    particleSystem:[
	    {
	        "gameObjectId": "1707_9136_123",
	        "numOfParticlesToEmit": {
	            "from": 1,
	            "to": 10
	        },
	        "particleAngle": {
	            "from": 5.348347806051011,
	            "to": 1.0416123087822753
	        },
	        "particleVelocity": {
	            "from": 1,
	            "to": 100
	        },
	        "particleLiveTime": {
	            "from": 100,
	            "to": 1000
	        },
	        "emissionRadius": 18,
	        "name": "test",
	        "type": "particleSystem",
	        "id": "1636_1556_6"
	    }
	],
	
	    gameProps:{
	    "width": 474,
	    "height": 344,
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

modules['resourceCache'] = {code: function(module,exports){
	
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

modules['resourceLoader'] = {code: function(module,exports){
	
	exports.ResourceLoader = function(){
	
	    var self = this;
	
	    var utils = require('utils');
	    var renderer = require('renderer').instance();
	    var bundle = require('bundle').instance();
	    var cache = require('resourceCache');
	    var soundManager = require('soundManager').instance();
	
	    var q = new utils.Queue();
	    q.onResolved = function(){
	        self.onComplete && self.onComplete();
	    };
	
	    this.loadImage = function(resourcePath) {
	        if (cache.has(resourcePath)) return;
	        var path = bundle.embeddedResources.isEmbedded?
	            bundle.embeddedResources.data[resourcePath]:
	            './'+resourcePath;
	        renderer.
	            getContext().
	            loadTextureInfo(
	            path,
	            {type:bundle.embeddedResources.isEmbedded?'base64':'',fileName:resourcePath},
	            function(textureInfo){
	                cache.set(resourcePath,textureInfo);
	                q.resolveTask();
	            });
	        q.addTask();
	    };
	
	    this.loadSound = function(resourcePath){
	        if (cache.has(resourcePath)) return;
	        var path = bundle.embeddedResources.isEmbedded?
	            bundle.embeddedResources.data[resourcePath]:
	            './'+resourcePath;
	        soundManager.loadSound(
	            path,
	            {type:bundle.embeddedResources.isEmbedded?'base64':''},
	            function(buffer){
	                cache.set(resourcePath,buffer);
	                q.resolveTask();
	            }
	        );
	        q.addTask();
	    };
	
	    this.onComplete = null;
	
	    this.start = function(){
	        q.start();
	    };
	
	};
}};

modules['device'] = {code: function(module,exports){
	
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

modules['index'] = {code: function(module,exports){
	
	var bundle = require('bundle').instance();
	bundle.prepare();
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

modules['mathEx'] = {code: function(module,exports){
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

modules['baseGameObject'] = {code: function(module,exports){
	
	var BaseModel = require('baseModel').BaseModel;
	var tweenModule = require('tween',{ignoreFail:true});
	var tweenMovieModule = require('tweenMovie',{ignoreFail:true});
	var renderer = require('renderer',{ignoreFail:true}).instance();
	var camera = require('camera').instance();
	
	exports.BaseGameObject = BaseModel.extend({
	    type:'baseGameObject',
	    groupName:'',
	    _spriteSheet:null,
	    pos:null,
	    scale:null,
	    angle:0,
	    width:0,
	    height:0,
	    fixedToCamera:false,
	    _layer:null,
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
	        return require('sceneManager').instance().getCurrScene();
	    },
	    moveTo:function(x,y,time,easeFnName){
	        var scene = this.getScene();
	        easeFnName = easeFnName || 'linear';
	        var movie = new tweenMovieModule.TweenMovie();
	        var tweenX = new tweenModule.Tween(this.pos,'x',this.pos.x,x,time,easeFnName);
	        var tweenY = new tweenModule.Tween(this.pos,'y',this.pos.y,y,time,easeFnName);
	        movie.add(0,tweenX).add(0,tweenY);
	        scene._tweenMovies.push(movie);
	    },
	    tween: function(obj,prop,valueFrom,valueTo,time,easeFnName){
	        var scene = this.getScene();
	        easeFnName = easeFnName || 'linear';
	        var movie = new tweenMovieModule.TweenMovie();
	        var tween = new tweenModule.Tween(obj,prop,valueFrom,valueTo,time,easeFnName);
	        movie.add(0,tween);
	        scene._tweenMovies.push(movie);
	    },
	    update: function(){},
	    _render: function(){
	        var ctx = renderer.getContext();
	        var dx = 0, dy = 0;
	        if (this.fixedToCamera) {
	            dx = camera.pos.x;
	            dy = camera.pos.y;
	        }
	        ctx.translate(this.pos.x + this.width /2 + dx,this.pos.y + this.height/2 + dy);
	        ctx.scale(this.scale.x,this.scale.y);
	        ctx.rotateZ(this.angle);
	        ctx.translate(-this.width /2, -this.height/2);
	    },
	    construct:function(){
	        if (!this.pos) this.pos = {x:0,y:0};
	        if (!this.scale) this.scale = {x:1,y:1};
	    }
	});
}};

modules['baseModel'] = {code: function(module,exports){
	var EventEmitter = require('eventEmitter').EventEmitter;
	
	var isPropNotFit = function(key,val){
	    if (!key) return true;
	    if (key.indexOf('$$')==0) return true;
	    if (key.indexOf('_')==0) return true;
	    if (val && val.call) return true;
	    if (typeof val == 'string') return false;
	    if (typeof val == 'number') return false;
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
	
	exports.BaseModel = require('class').Class.extend({
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
	        this._emitter = new EventEmitter();
	        arguments && arguments[0] && this.fromJSON(arguments[0]);
	    }
	});
}};

modules['resource'] = {code: function(module,exports){
	
	var BaseModel = require('baseModel').BaseModel;
	
	exports.Resource = BaseModel.extend({
	    resourcePath:''
	});
}};

modules['commonBehaviour'] = {code: function(module,exports){
	
	var BaseModel = require('baseModel').BaseModel;
	
	exports.CommonBehaviour = BaseModel.extend({
	    type:'commonBehaviour',
	    name:'',
	    description:'',
	    parameters:[],
	    construct: function(){
	
	    }
	});
}};

modules['frameAnimation'] = {code: function(module,exports){
	
	var BaseModel = require('baseModel').BaseModel;
	
	
	exports.FrameAnimation = BaseModel.extend({
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
}};

modules['gameObject'] = {code: function(module,exports){
	var collider = require('collider',{ignoreFail:true}).instance();
	var renderer = require('renderer',{ignoreFail:true}).instance();
	var BaseGameObject = require('baseGameObject').BaseGameObject;
	var CommonBehaviour = require('commonBehaviour').CommonBehaviour;
	var bundle = require('bundle').instance();
	var collections = require('collections');
	var resourceCache = require('resourceCache');
	
	
	exports.GameObject = BaseGameObject.extend({
	    type:'gameObject',
	    spriteSheetId:null,
	    _spriteSheet: null,
	    _behaviour:null,
	    commonBehaviour:[],
	    _commonBehaviour:null,
	    vel:null,
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
	        self._super();
	        self.vel = {x:0,y:0};
	        self._frameAnimations = new collections.List();
	        if (!self.spriteSheetId) {
	            return;
	        }
	        self._spriteSheet = bundle.spriteSheetList.find({id: self.spriteSheetId});
	        self.setFrameIndex(self.currFrameIndex);
	        self._frameAnimations.clear();
	        self.frameAnimationIds.forEach(function(id){
	            var a = bundle.frameAnimationList.find({id: id});
	            a = a.clone(exports.FrameAnimation);
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
	        self._currFrameAnimation && this._currFrameAnimation.update(time);
	        var deltaX = this.vel.x * delta / 1000;
	        var deltaY = this.vel.y * delta / 1000;
	        var posX = this.pos.x+deltaX;
	        var posY = this.pos.y+deltaY;
	        collider.manage(self,posX,posY);
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
	        ctx.drawImage(
	            resourceCache.get(self._spriteSheet.resourcePath),
	            self._sprPosX,
	            self._sprPosY,
	            self._spriteSheet._frameWidth,
	            self._spriteSheet._frameHeight,
	            0,
	            0
	        );
	        ctx.restore();
	    }
	});
}};

modules['layer'] = {code: function(module,exports){
	
	var BaseModel = require('baseModel').BaseModel;
	var collections = require('collections');
	var TextField = require('textField').TextField;
	var bundle = require('bundle').instance();
	
	exports.Layer = BaseModel.extend({
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
}};

modules['particleSystem'] = {code: function(module,exports){
	
	var mathEx = require('mathEx');
	var bundle = require('bundle').instance();
	var BaseModel = require('baseModel').BaseModel;
	
	exports.ParticleSystem = BaseModel.extend({
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
	            return mathEx.getRandomInRange(obj.from,obj.to);
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
	});
}};

modules['scene'] = {code: function(module,exports){
	
	var BaseModel = require('baseModel').BaseModel;
	var collections = require('collections');
	var bundle = require('bundle').instance();
	var renderer = require('renderer',{ignoreFail:true}).instance();
	var resourceCache = require('resourceCache');
	var camera = require('camera').instance();
	
	exports.Scene = BaseModel.extend({
	    type:'scene',
	    layerProps:[],
	    _layers:null,
	    tileMap:null,
	    _allGameObjects:null,
	    useBG:false,
	    colorBG:[255,255,255],
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
	            self.tileMap._tilesInScreenX = ~~(bundle.gameProps.width/self.tileMap._spriteSheet._frameWidth);
	            self.tileMap._tilesInScreenY = ~~(bundle.gameProps.height/self.tileMap._spriteSheet._frameHeight);
	        }
	    },
	    getAllSpriteSheets:function() {
	        var dataSet = new collections.Set();
	        this._layers.forEach(function(l){
	            dataSet.combine(l.getAllSpriteSheets());
	        });
	        if (this.tileMap.spriteSheetId) {
	            dataSet.add(this.tileMap._spriteSheet);
	        }
	        return dataSet;
	    },
	    find: function(name){
	        return this._allGameObjects.find({name:name});
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
	                self._tweenMovies.splice(self._tweenMovies.indexOf(tweenMovie),1);
	            }
	            tweenMovie.update(currTime);
	        });
	        self.__updateIndividualBehaviour__(currTime);
	    },
	    _render: function(){
	        var self = this;
	        var ctx = renderer.getContext();
	        var spriteSheet = self.tileMap._spriteSheet;
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
}};

modules['sound'] = {code: function(module,exports){
	var Resource = require('resource').Resource;
	
	exports.Sound = Resource.extend({
	    type:'sound',
	    _buffer:null
	});
}};

modules['spriteSheet'] = {code: function(module,exports){
	
	var Resource = require('resource').Resource;
	
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
}};

modules['font'] = {code: function(module,exports){
	
	var Resource = require('resource').Resource;
	
	exports.Font = Resource.extend({
	    type:'font',
	    fontColor:'black',
	    fontSize:12,
	    fontFamily:'Monospace',
	    fontContext:null
	});
}};

modules['textField'] = {code: function(module,exports){
	
	var renderer = require('renderer',{ignoreFail:true}).instance();
	var BaseGameObject = require('baseGameObject').BaseGameObject;
	var SpriteSheet = require('spriteSheet').SpriteSheet;
	var bundle = require('bundle').instance();
	var resourceCache = require('resourceCache');
	
	exports.TextField = BaseGameObject.extend({
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
}};

modules['camera'] = {code: function(module,exports){
	
	var bundle = require('bundle').instance();
	
	var Camera = function(){
	
	    var objFollowTo = null;
	    var scene = null;
	    var sceneWidth;
	    var sceneHeight;
	
	    this.pos = {
	        x:0,
	        y:0
	    };
	
	    this.follow = function(gameObject) {
	        objFollowTo = gameObject;
	        scene = gameObject.getScene();
	        sceneWidth = scene.tileMap._spriteSheet._frameWidth*scene.tileMap.width;
	        sceneHeight = scene.tileMap._spriteSheet._frameHeight*scene.tileMap.height;
	    };
	
	
	    this.update = function(ctx) {
	        if (!objFollowTo) return;
	        var pos = this.pos;
	        var w = bundle.gameProps.width;
	        var h = bundle.gameProps.height;
	        var wDiv2 = w/2;
	        var hDiv2 = h/2;
	        pos.x = objFollowTo.pos.x - wDiv2;
	        pos.y = objFollowTo.pos.y - hDiv2;
	        if (pos.x<0) pos.x = 0;
	        if (pos.y<0) pos.y = 0;
	        if (pos.x>sceneWidth - w) pos.x = sceneWidth -w;
	        if (pos.y>sceneHeight -h) pos.y = sceneHeight -h;
	        ctx.translate(-pos.x,-pos.y);
	    };
	
	};
	
	var instance = null;
	
	module.exports.instance = function(){
	    if (instance==null) instance = new Camera();
	    return instance;
	};
	
	
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
	    this.colorBG = [255,255,255];
	
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
	        window.gl = gl;
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
	var resourceCache = require('resourceCache');
	var camera = require('camera').instance();
	
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
	        
	
	        reqAnimFrame(drawScene);
	
	        if (!scene) return;
	
	        lastTime = currTime;
	        currTime = Date.now();
	        var deltaTime = lastTime ? currTime - lastTime : 0;
	
	        ctx.beginFrameBuffer();
	
	        ctx.clear();
	        camera.update(ctx);
	        scene.update(currTime,deltaTime);
	        bundle.particleSystemList.forEach(function(p){
	            p.update(currTime,deltaTime);
	        });
	
	        ctx.flipFrameBuffer();
	
	
	        keyboard.update();
	    };
	    this.setScene = function(_scene){
	        scene = _scene;
	        if (scene.useBG) ctx.colorBG = scene.colorBG;
	        collider.setUp();
	    };
	
	
	    this.printText = function(x,y,text,font){
	        if (!text) return;
	        font = font || bundle.fontList.get(0);
	        if (!font) throw 'at least one font must be specified. Create new one please';
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
	    }
	
	};
	
	var instance = null;
	
	module.exports.instance = function(){
	    if (instance==null) instance = new Renderer();
	    return instance;
	};
}};

modules['scaleManager'] = {code: function(module,exports){
	
	var SCALE_STRATEGY = require('consts').SCALE_STRATEGY;
	var scale = require('device').scale;
	var bundle = require('bundle').instance();
	
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
	                canvas.style.width = scaledWidth + 'px';
	                canvas.style.height = scaledHeight + 'px';
	                canvas.style.top = gameProps.top + 'px';
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
	        instance = new ScaleManager(canvas,ctx);
	    }
	    return instance;
	};
	
	
}};

modules['sceneManager'] = {code: function(module,exports){
	
	
	var SceneManager = function(){
	
	    var self = this;
	
	    var renderer;
	    var bundle;
	
	    this.currScene = null;
	
	    var preloadAndSet = function(scene){
	
	        if (!renderer) renderer = require('renderer').instance();
	        if (!bundle) bundle = require('bundle').instance();
	        var ResourceLoader = require('resourceLoader').ResourceLoader;
	
	        var loader = new ResourceLoader();
	        loader.onComplete = function(){
	            bundle.applyBehaviourAll();
	            renderer.setScene(scene);
	        };
	
	        var allSprSheets = scene.getAllSpriteSheets();
	
	        bundle.particleSystemList.forEach(function(ps){
	            allSprSheets.add(ps._gameObject._spriteSheet);
	        });
	        bundle.fontList.forEach(function(font){
	            loader.loadImage(font.resourcePath);
	        });
	        allSprSheets.asArray().forEach(function(spSheet){
	            loader.loadImage(spSheet.resourcePath);
	        });
	        bundle.soundList.forEach(function(snd){
	            loader.loadSound(snd.resourcePath);
	        });
	        loader.start();
	    };
	
	    this.setScene = function(scene){
	        var Scene = require('scene').Scene;
	        if (!(scene instanceof Scene)) throw 'object '+scene+' is not a scene';
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

modules['tween'] = {code: function(module,exports){
	
	exports.Tween = function(obj,prop,fromVal,toVal,tweenTime,easeFnName){
	    var startedTime = null;
	    easeFnName = easeFnName || 'linear';
	    this.completed = false;
	    var mathEx = require('mathEx');
	    this.tweenTime = tweenTime;
	
	    this.update = function(time){
	        if (!startedTime) startedTime = time;
	        if (this.completed) return;
	        var delta = time - startedTime;
	        if (delta>tweenTime) {
	            this.complete();
	            return;
	        }
	        obj[prop] = mathEx.ease[easeFnName](delta,fromVal,toVal - fromVal,tweenTime);
	    };
	
	    this.reset = function() {
	        startedTime = null;
	        this.completed = false;
	    };
	
	    this.complete = function(){
	        if (this.completed) return;
	        obj[prop] = toVal;
	        this.completed = true;
	    }
	
	
	};
}};

modules['tweenMovie'] = {code: function(module,exports){
	
	exports.TweenMovie = function(){
	    var tweens = [];
	    var startedTime = null;
	    this.completed = false;
	    var loop = false;
	
	    this.add = function(startTime,tween){
	        tweens.push({
	            startTime: startTime,
	            tween: tween
	        });
	        return this;
	    };
	
	    this.loop = function(val) {
	        loop = val;
	    };
	
	    this.update = function(time){
	        if (this.completed) return;
	        if (!startedTime) startedTime = time;
	        var deltaTime = time - startedTime;
	        var allCompleted = true;
	        tweens.forEach(function(item){
	            if (deltaTime>item.startTime) {
	                if (deltaTime<item.startTime+item.tween.tweenTime) {
	                    item.tween.update(time);
	                } else {
	                    item.tween.complete();
	                }
	            }
	            if (!item.tween.completed) allCompleted = false;
	        });
	
	        if (allCompleted) {
	            if (loop) {
	                this.reset();
	            } else {
	                this.completed = true;
	            }
	        }
	    };
	
	    this.reset = function() {
	        startedTime = null;
	        this.completed = false;
	        tweens.forEach(function(item){
	            item.tween.reset();
	        });
	    }
	};
}};

require('index');