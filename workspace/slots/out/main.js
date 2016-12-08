var modules = {}, require = function(name){
    //console.trace('require: ',name);
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

Array.prototype.remove = function(el){
    this.splice(this.indexOf(el),1);
};
modules['class'] =
    {code: function(module){
    var exports = module.exports;
    	var Class = function() {};
	
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
	
	
	
	scripts.gameObject['coin.js'] = function(exports){
	    var module = exports, self = exports;
	    
	self._frameAnimations.get(0).play();
	self.setFrameIndex(~~(Math.random()*10));
	
	exports.onUpdate = function(time) {
	    self.angle+=0.5;
	};
	};
	
	scripts.gameObject['slotsColumn.js'] = function(exports){
	    var module = exports, self = exports;
	    
	var Sound = require('sound').Sound;
	var TweenChain = require('tweenChain').TweenChain;
	
	var spinSnd = Sound.find('spinSnd');
	
	var lastN = 0;
	
	var tChain = new TweenChain().
	    tween(self.scale,{to:{x:3,y:3}},500,'easeOutBounce').
	    wait(300).
	    tween(self.scale,{to:{x:1,y:1}},500,'easeOutBounce');
	
	self.spin = function(callBack,hackedVal){
	    var n = ~~((Math.random())*10)+5;
	    n+=lastN;
	    if (hackedVal!==undefined) n = hackedVal;
	    var time = 1000+~~(Math.random()*5000);
	    new TweenChain().
	            tween(
	                self,
	                {
	                    from:    {_sprPosY:lastN*51.2},
	                    to:      {_sprPosY:n*51.2}
	                },
	                time, 'easeOutBounce'
	            ).
	            finish(function(){
	                    lastN = n;
	                    lastN%=10;
	                    callBack();
	                    spinSnd.play();
	            }).
	            play();
	};
	
	self.blink = function(){
	    tChain.reset().play();
	};
	
	self.val = function(){
	    return lastN;
	};
	
	};
	;
	
	
	
	scripts.scene['introScene.js'] = function(exports){
	    var module = exports, self = exports;
	    
	var game = require('game');
	var Sound = require('sound').Sound;
	var GameObject = require('gameObject').GameObject;
	
	var txtMoney = GameObject.find('txtMoney');
	
	var introSnd = Sound.find('intro');
	
	introSnd.play();
	
	self.on('click',function(){
	    introSnd.setGain(0.05,3000);
	    game.setSceneByName('mainScene');
	});
	
	exports.onShow = function(){
	    introSnd.setGain(1,1000);    
	    txtMoney.setText(localStorage.totalMoney||0);
	};
	
	exports.onUpdate = function(time) {
	
	};
	};
	
	scripts.scene['mainScene.js'] = function(exports){
	    var module = exports, self = exports;
	    var GameObject = require('gameObject').GameObject;
	
	var scoreLabel = GameObject.find('scoreLabel');
	var winLabel = GameObject.find('winLabel');
	var slots = GameObject.findAll('slotsColumn');
	var betPlusLabel = GameObject.find('betPlusLabel');
	var betMinusLabel = GameObject.find('betMinusLabel');
	var betLabel = GameObject.find('betLabel');
	var jackPotLabel = GameObject.find('jackPotLabel');
	var particles = require('particleSystem').ParticleSystem.find('coins');
	
	
	var Queue = require('queue').Queue;
	var Sound = require('sound').Sound;
	var TweenMovie = require('tweenMovie').TweenMovie;
	var Tween = require('tween').Tween;
	
	var spinPullSnd = Sound.find('spinPull');
	var powerUpSnd = Sound.find('powerUp');
	
	var canSpin = true;
	var totalMoney = +(localStorage.totalMoney) || 100;
	var bet = 10;
	var jackPot = +(localStorage.jackPot) || 1500;
	var god = location && location.search.indexOf('god')>-1;
	
	var introSnd = Sound.find('intro');
	
	
	var spin = function(){
	    if (!canSpin) return;
	    if (!totalMoney) return;
	    canSpin = false;
	
	    var hackedVal;
	    if (god && ~~(Math.random()*10)>3) hackedVal =  hackedVal = ~~(Math.random()*10) + 12;
	
	    localStorage.totalMoney = (totalMoney - bet);
	    spinPullSnd.play();
	    var q = new Queue();
	    q.onResolved = function(){
	        canSpin = true;
	        var val = [
	            slots[0].val(),slots[1].val(),slots[2].val()
	        ];
	        resolveSpinResult(val);
	    };
	    slots.forEach(function(s){
	        s.spin(function(){
	            q.resolveTask();
	        },hackedVal);
	        q.addTask();
	    });
	};
	
	
	var blinkWin = function(win){
	    particles.emit(100,100);
	    powerUpSnd.play();
	    winLabel.pos = {x:140,y:100};
	    winLabel.setText(win.txt);
	    winLabel.alpha = 0;
	    new TweenMovie().
	        tween(0,winLabel,{to:{alpha:1}},800).
	        tween(0,winLabel.scale,{to:{x:2,y:2}},1500,'easeOutBounce').
	        tween(1500,winLabel.scale,{to:{x:1,y:1}},500,'easeOutBounce').
	        tween(1700,winLabel.pos,{to:{x:20,y:20}},100).
	        tween(1700,winLabel,{to:{alpha:0}},100).
	        finish(function(){
	            winLabel.setText('');
	            var totalMoneyOld = totalMoney;
	            totalMoney+=win.val;
	            localStorage.totalMoney = totalMoney;
	            progressLabelVal(scoreLabel,totalMoneyOld,totalMoney);
	        }).
	        play();
	};
	
	var progressLabelVal = function(label,vfrom,vto){
	    var obj = {i:vfrom};
	    var t = new Tween(obj,{to:{i:vto}},2000);
	    t.progress(function(obj){
	        label.setText(~~obj.i);
	    });
	    new TweenMovie().
	        tween(0,t).
	        play();
	};
	
	var calcResult = function(numOfWinSlot,val) {
	    var coef;
	    if (val==5) coef = 3;
	    else if (val===0) coef = 2;
	    else coef = 1;
	    return {
	        txt:bet+'*'+coef*numOfWinSlot,
	        val:coef * numOfWinSlot * bet
	    };
	};
	
	var resolveSpinResult = function(val){
	    if (val[0]==val[1] && val[1]==val[2] && val[0]===0) {
	        var win = {txt:'JackPot!!!!111',val:jackPot};
	        jackPot = 1500;
	        jackPotLabel.setText(jackPot);
	        blinkWin(win);
	        slots[0].blink();
	        slots[1].blink();
	        slots[2].blink();
	    }
	    else if (val[0]==val[1] && val[1]==val[2]) {
	        win = calcResult(3,val[0]);
	        blinkWin(win);
	        slots[0].blink();
	        slots[1].blink();
	        slots[2].blink();
	    }
	    else if (val[0]==val[1]) {
	        win = calcResult(2,val[0]);
	        blinkWin(win);
	        slots[0].blink();
	        slots[1].blink();
	    }
	    else if (val[1]==val[2]) {
	        win = calcResult(2,val[1]);
	        blinkWin(win);
	        slots[1].blink();
	        slots[2].blink();
	    }
	    else {
	        var oldTotal = totalMoney;
	        var oldJackPot = jackPot;
	        totalMoney-=bet;
	        if (totalMoney<0) totalMoney = 0;
	        scoreLabel.setText(totalMoney);
	        progressLabelVal(scoreLabel,oldTotal,totalMoney);
	        localStorage.totalMoney = totalMoney;
	        jackPot+=bet;
	        progressLabelVal(jackPotLabel,oldJackPot,jackPot);
	        localStorage.jackPot = jackPot;
	        
	    }
	};
	
	self.on('click',function(e){
	    if (e.target) return;
	    if (bet===0 || totalMoney===0) return;
	    if (bet>totalMoney) {
	        bet = totalMoney;
	        betLabel.setText(bet);
	        return;
	    }
	    spin();
	});
	
	betPlusLabel.on('click',function(e){
	    bet+=1;
	    if (bet>totalMoney) bet = totalMoney;
	    betLabel.setText(bet);
	});
	
	betMinusLabel.on('click',function(e){
	    bet-=1;
	    if (bet<1) bet = 1;
	    betLabel.setText(bet);
	});
	
	betLabel.on('click',function(){
	    bet+=50;
	    if (bet>totalMoney) bet = totalMoney;
	    betLabel.setText(bet);
	});
	
	GameObject.find('textBack').on('click',function(){
	    require('game').setSceneByName('introScene');
	});
	
	
	scoreLabel.setText(totalMoney);
	betLabel.setText(bet);
	jackPotLabel.setText(jackPot);
	
	
	exports.onShow = function(){
	    introSnd.setGain(0,1000);
	};
	
	
	
	
	
	
	
	};
	
	scripts.scene['progressScene.js'] = function(exports){
	    var module = exports, self = exports;
	    
	var GameObject = require('gameObject').GameObject;
	
	var progressLabel = GameObject.find('progress');
	
	exports.onProgress = function(pr){
	    var txt = ~~(pr*100)+' %';
	    progressLabel.setText(txt);
	};
	
	exports.onShow = function(){
	
	};
	
	exports.onUpdate = function(time) {
	
	};
	};
	;
	
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
	
	exports.EventEmitter = EventEmitter;
    
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
	    if (window.canceled) return
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
	    if (window.canceled) return
	    var point = triggerEvent(e,'click');
	    triggerEvent(e,'mouseDown');
	};
	
	var resolveMouseMove = function(e){
	    if (window.canceled) return
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
	    if (window.canceled) return
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
	    exports.gameProps = data.gameProps;
	    consts.RESOURCE_NAMES.forEach(function(itm){
	        toDataSource(
	            require(itm)[utils.capitalize(itm)],
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
	
	
	exports.shaders = {"basic":{"fragment.frag":"precision mediump float;\n\nvarying vec2 v_texcoord;\n\nuniform sampler2D texture;\nuniform float u_alpha;\n\nvoid main() {\n    gl_FragColor = texture2D(texture, v_texcoord);\n    gl_FragColor.a *= u_alpha;\n}","vertex.vert":"attribute vec4 a_position;\nattribute vec2 a_texcoord;\n\nuniform mat4 u_matrix;\nuniform mat4 u_textureMatrix;\n\nvarying vec2 v_texcoord;\n\nvoid main() {\n   gl_Position = u_matrix * a_position;\n   v_texcoord = (u_textureMatrix * vec4(a_texcoord, 0, 1)).xy;\n}"}};
	
	exports.embeddedResources.isEmbedded = false;
    
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
    	
	exports.ResourceLoader = function(){
	
	    var self = this;
	
	    var Queue = require('queue').Queue;
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
    	
	var ResourceLoader = require('resourceLoader').ResourceLoader;
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
	        if (!renderer.isRunning()) renderer.start();
	    }
	
	    var loader = new ResourceLoader();
	    loader.onComplete = function(){
	        exports.currScene = scene;
	        bundle.applyBehaviourForScene(scene);
	        collider.setUp();
	        renderer.setScene(scene);
	        if (!renderer.isRunning()) renderer.start();
	        scene.onShow();
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
	    var Scene = require('scene').Scene;
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
	
	exports.AudioNode = function(context){
	
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
	
	    this.isFree = function() {
	        return context.isFree();
	    };
	
	    this.getCurrSound = function(){
	        return currSound;
	    }
	
	};
	
	
	
    
}};
modules['audioNodeSet'] =
    {code: function(module){
    var exports = module.exports;
    	
	var AudioNode = require('audioNode').AudioNode;
	
	exports.AudioNodeSet = function(Context,numOfNodes){
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
	
	    this.getNodeBySound = function(sound){
	        for (var i = 0;i<numOfNodes;i++) {
	            if (nodes[i].getCurrSound()==sound) return nodes[i];
	        }
	        return null;
	    }
	
	};
    
}};
modules['audioPlayer'] =
    {code: function(module){
    var exports = module.exports;
    	
	var bundle = require('bundle');
	var AudioNodeSet = require('audioNodeSet').AudioNodeSet;
	var cache = require('resourceCache');
	var HtmlAudioContext = require('htmlAudioContext').HtmlAudioContext;
	var WebAudioContext = require('webAudioContext').WebAudioContext;
	var FakeAudioContext = require('fakeAudioContext').FakeAudioContext;
	var Tweenable = require('tweenable').Tweenable;
	var Tween = require('tween').Tween;
	
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
	
	exports.FakeAudioContext = Class.extend(
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
	
	exports.HtmlAudioContext = Class.extend(
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
	                utils.loadBinary(url,progress,function(){
	                    callBack(url);
	                });
	            }
	
	        }
	    }
	);
	
    
}};
modules['webAudioContext'] =
    {code: function(module){
    var exports = module.exports;
    	
	var utils = require('utils');
	var cache = require('resourceCache');
	var Class = require('class');
	
	var getCtx = (function(){
	    var ctx = window.AudioContext || window.webkitAudioContext;
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
	            window.showError(err)
	        }
	    );
	};
	
	exports.WebAudioContext = Class.extend(
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
	
	function placeHoldersCount (b64) {
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
	
	function byteLength (b64) {
	    // base64 is 4/3 + up to two characters of the original data
	    return b64.length * 3 / 4 - placeHoldersCount(b64);
	}
	
	function toByteArray (b64) {
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
	
	function tripletToBase64 (num) {
	    return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F];
	}
	
	function encodeChunk (uint8, start, end) {
	    var tmp;
	    var output = [];
	    for (var i = start; i < end; i += 3) {
	        tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2]);
	        output.push(tripletToBase64(tmp));
	    }
	    return output.join('');
	}
	
	function fromByteArray (uint8) {
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
modules['mathEx'] =
    {code: function(module){
    var exports = module.exports;
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
modules['queue'] =
    {code: function(module){
    var exports = module.exports;
    	exports.Queue = function(){
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
modules['baseGameObject'] =
    {code: function(module){
    var exports = module.exports;
    	
	
	var renderer = require('renderer');
	var camera = require('camera');
	
	var Renderable = require('renderable').Renderable;
	var Moveable = require('moveable').Moveable;
	
	exports.BaseGameObject = Renderable.extend({
	    type:'baseGameObject',
	    groupName:'',
	    _spriteSheet:null,
	    pos:null,
	    scale:null,
	    angle:0,
	    fixedToCamera:false,
	    _layer:null,
	    _moveable:null,
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
	        if (!this.pos) this.pos = {x:0,y:0};
	        if (!this.scale) this.scale = {x:1,y:1};
	        this._moveable = new Moveable();
	        this._moveable._gameObject = this;
	    }
	});
    
}};
modules['baseModel'] =
    {code: function(module){
    var exports = module.exports;
    	var EventEmitter = require('eventEmitter').EventEmitter;
	var Class = require('class');
	
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
	
	exports.BaseModel = Class.extend({
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
modules['moveable'] =
    {code: function(module){
    var exports = module.exports;
    	
	var collider = require('collider');
	var BaseModel = require('baseModel').BaseModel;
	
	exports.Moveable = BaseModel.extend({
	    _gameObject: null,
	    update: function(time,delta){
	        var _gameObject = this._gameObject;
	        var deltaX = _gameObject.vel.x * delta / 1000;
	        var deltaY = _gameObject.vel.y * delta / 1000;
	        var posX = _gameObject.pos.x+deltaX;
	        var posY = _gameObject.pos.y+deltaY;
	        collider.manage(_gameObject,posX,posY);
	    }
	});
    
}};
modules['renderable'] =
    {code: function(module){
    var exports = module.exports;
    	
	var camera = require('camera');
	var renderer = require('renderer');
	var collider = require('collider');
	
	var BaseModel = require('baseModel').BaseModel;
	var Tweenable = require('tweenable').Tweenable;
	
	
	exports.Renderable = BaseModel.extend(function(self){
	
	    self.type = 'renderable';
	    self.alpha = 1;
	    self.width = 0;
	    self.height = 0;
	    var _tweenable = new Tweenable();
	    self.onUpdate = function(){};
	    self.fadeIn = function(time,easeFnName){
	        return this.tween(this,{to:{alpha:1}},time,easeFnName);
	    };
	    self.fadeOut = function(time,easeFnName){
	        return this.tween(this,{to:{alpha:0}},time,easeFnName);
	    };
	    self.tween =  function(obj,fromToVal,tweenTime,easeFnName){
	        _tweenable.tween(obj,fromToVal,tweenTime,easeFnName);
	    };
	    self._render = function(){
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
	        ctx.setAlpha(this.alpha);
	    };
	    self.update = function(time,delta){
	        var self = this;
	        var deltaX = self.vel.x * delta / 1000;
	        var deltaY = self.vel.y * delta / 1000;
	        var posX = self.pos.x+deltaX;
	        var posY = self.pos.y+deltaY;
	        collider.manage(self,posX,posY);
	    };
	
	});
    
}};
modules['resource'] =
    {code: function(module){
    var exports = module.exports;
    	
	var BaseModel = require('baseModel').BaseModel;
	
	exports.Resource = BaseModel.extend({
	    resourcePath:''
	});
    
}};
modules['tweenable'] =
    {code: function(module){
    var exports = module.exports;
    	
	var BaseModel = require('baseModel').BaseModel;
	var Tween = require('tween').Tween;
	var TweenMovie = require('tweenMovie').TweenMovie;
	
	exports.Tweenable = BaseModel.extend({
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
    
}};
modules['commonBehaviour'] =
    {code: function(module){
    var exports = module.exports;
    	
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
modules['frameAnimation'] =
    {code: function(module){
    var exports = module.exports;
    	
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
modules['gameObject'] =
    {code: function(module){
    var exports = module.exports;
    	
	var renderer = require('renderer');
	var BaseGameObject = require('baseGameObject').BaseGameObject;
	var CommonBehaviour = require('commonBehaviour').CommonBehaviour;
	var bundle = require('bundle');
	var collections = require('collections');
	var resourceCache = require('resourceCache');
	var utils = require('utils');
	var game = require('game');
	
	exports.GameObject = BaseGameObject.extend({
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
	        if (!self._spriteSheet) throw 'not found spriteSheet with id '+ self.spriteSheetId+' for gameObject with name '+ self.name
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
	        ctx.drawImage(
	            resourceCache.get(self._spriteSheet.resourcePath),
	            self._sprPosX,
	            self._sprPosY,
	            self.width,
	            self.height,
	            0,
	            0
	        );
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
    
}};
modules['layer'] =
    {code: function(module){
    var exports = module.exports;
    	
	var BaseModel = require('baseModel').BaseModel;
	var collections = require('collections');
	var TextField = require('textField').TextField;
	var bundle = require('bundle');
	
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
modules['particleSystem'] =
    {code: function(module){
    var exports = module.exports;
    	
	var mathEx = require('mathEx');
	var bundle = require('bundle');
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
	},{
	    find: function(name){
	        return bundle.particleSystemList.find({name:name});
	    },
	    findAll: function(name){
	        return bundle.particleSystemList.findAll({name:name});
	    }
	});
    
}};
modules['scene'] =
    {code: function(module){
    var exports = module.exports;
    	
	var Renderable = require('renderable').Renderable;
	var collections = require('collections');
	var bundle = require('bundle');
	var renderer = require('renderer');
	var resourceCache = require('resourceCache');
	var camera = require('camera');
	
	var tweenModule = require('tween');
	var tweenMovieModule = require('tweenMovie');
	
	exports.Scene = Renderable.extend({
	    type:'scene',
	    layerProps:[],
	    alpha:1,
	    _layers:null,
	    tileMap:null,
	    _allGameObjects:null,
	    useBG:false,
	    colorBG:[255,255,255],
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
	    addTweenMovie: function(tm){
	        this._tweenMovies.push(tm);
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
    
}};
modules['sound'] =
    {code: function(module){
    var exports = module.exports;
    	var Resource = require('resource').Resource;
	var audioPlayer = require('audioPlayer');
	var bundle = require('bundle');
	
	exports.Sound = Resource.extend({
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
	        return bundle.soundList.find({name:name});
	    }
	});
    
}};
modules['spriteSheet'] =
    {code: function(module){
    var exports = module.exports;
    	
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
modules['font'] =
    {code: function(module){
    var exports = module.exports;
    	
	var Resource = require('resource').Resource;
	
	exports.Font = Resource.extend({
	    type:'font',
	    fontColor:'black',
	    fontSize:12,
	    fontFamily:'Monospace',
	    fontContext:null
	});
    
}};
modules['textField'] =
    {code: function(module){
    var exports = module.exports;
    	
	var renderer = require('renderer');
	var BaseGameObject = require('baseGameObject').BaseGameObject;
	var SpriteSheet = require('spriteSheet').SpriteSheet;
	var bundle = require('bundle');
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
modules['canvasContext'] =
    {code: function(module){
    var exports = module.exports;
    	
	var mat4 = require('mat4');
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
	
	
	exports.CanvasContext = Class.extend(function(it){
	
	    var ctx;
	    var mScaleX = 1, mScaleY = 1;
	    var gameProps;
	
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
	
	        ctx.fillStyle='#ffffff';
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
	        //it.scale(scaleX,scaleY);
	    };
	
	    it.getError = function(){
	
	    };
	
	    it.setAlpha = function(a){
	        ctx.globalAlpha = a;
	    };
	
	    it.beginFrameBuffer = function(){
	        ctx.save();
	        ctx.beginPath();
	        //ctx.rect(gameProps.left,gameProps.top,gameProps.scaledWidth,gameProps.scaledHeight);
	        //ctx.clip();
	        if (gameProps.scaleStrategy==SCALE_STRATEGY.HARDWARE_PRESERVE_ASPECT_RATIO) {
	            ctx.scale(mScaleX/device.scale,mScaleY/device.scale);
	            ctx.translate(gameProps.globalScale.left,gameProps.globalScale.top);
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
	
	
    
}};
modules['renderer'] =
    {code: function(module){
    var exports = module.exports;
    	
	
	var GlContext = require('glContext').GlContext;
	var CanvasContext = require('canvasContext').CanvasContext;
	var resourceCache = require('resourceCache');
	var bundle = require('bundle');
	var game = require('game');
	
	var canvas;
	var ctx;
	var ctxClass;
	var self = exports;
	var currTime = 0;
	var lastTime = 0;
	var reqAnimFrame = window.requestAnimationFrame||window.webkitRequestAnimationFrame||function(f){setTimeout(f,17)};
	var gameProps;
	var isRunning = false;
	
	
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
	    //else if (CanvasContext.isAcceptable()) ctxClass = CanvasContext;
	    else throw "can not create rendering context";
	    ctx = new ctxClass();
	    game.setCtx(ctx);
	    require('scaleManager').instance(canvas,ctx).manage();
	    ctx.init(canvas);
	};
	
	exports.start = function(){
	    drawSceneLoop();
	    isRunning = true;
	};
	
	exports.getCanvas = function(){
	    return canvas;
	};
	
	exports.cancel = function(){
	    window.canceled = true;
	    isRunning = false;
	};
	
	exports.isRunning = function() {
	    return isRunning;
	};
	
	exports.setScene = function(scene){
	    ctx.setScene(scene);
	};
	
	var drawSceneLoop = function(){
	    if (window.canceled) {
	        return;
	    }
	
	    if (window.canceled) return
	    var lastErr = ctx.getError(); if (lastErr) throw "GL error: " + lastErr;
	
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
	                gameProps.scaledWidth = scaledWidth; // one in global scale - other in gameProps
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
	        instance = new ScaleManager(canvas,ctx);
	    }
	    return instance;
	};
	
	
    
}};
modules['frameBuffer'] =
    {code: function(module){
    var exports = module.exports;
    	
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
modules['glContext'] =
    {code: function(module){
    var exports = module.exports;
    	
	var mat4 = require('mat4');
	var utils = require('utils');
	var ShaderProgram = require('shaderProgram').ShaderProgram;
	var VertexBuffer = require('vertexBuffer').VertexBuffer;
	var Texture = require('texture').Texture;
	var MatrixStack = require('matrixStack').MatrixStack;
	var FrameBuffer = require('frameBuffer').FrameBuffer;
	var bundle = require('bundle');
	var cache = require('resourceCache');
	var SCALE_STRATEGY = require('consts').SCALE_STRATEGY;
	var Class = require('class');
	
	var getCtx = function(el){
	    if (!el) el = document.createElement('canvas');
	    if (!el) return null;
	    return el.getContext("webgl",{ alpha: false });
	};
	
	exports.GlContext = Class.extend(function(it){
	
	    var gl;
	    var mScaleX = 1, mScaleY = 1;
	    var commonShaderPrg;
	    var posVertexBuffer;
	    var texVertexBuffer;
	    var matrixStack = new MatrixStack();
	    var frameBuffer;
	    var gameProps;
	    var colorBGDefault = [255,255,255];
	    var scene = null;
	
	    it.init = function(canvas){
	
	        gameProps = bundle.gameProps;
	        gl = getCtx(canvas);
	        window.gl = gl;
	        commonShaderPrg = new ShaderProgram(gl, [
	            bundle.shaders.basic['vertex.vert'],
	            bundle.shaders.basic['fragment.frag']
	        ]);
	        commonShaderPrg.bind();
	        commonShaderPrg.setUniform('u_alpha',1);
	
	        posVertexBuffer = new VertexBuffer(gl,commonShaderPrg.getProgram());
	        posVertexBuffer.bind([
	            0, 0,
	            0, 1,
	            1, 0,
	            1, 0,
	            0, 1,
	            1, 1
	        ],2,'a_position');
	
	        texVertexBuffer = new VertexBuffer(gl,commonShaderPrg.getProgram());
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
	
	    it.setScene = function(_scene){
	        scene = _scene;
	    };
	
	    it.setAlpha = function(alpha) {
	        commonShaderPrg.setUniform('u_alpha',alpha);
	    };
	
	    it.getError = function(){
	        return 0;
	        var err = gl.getError();
	        return err==gl.NO_ERROR?0:err;
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
	
	    it.drawImage = function(
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
	
	        // Set the texture matrix.
	        commonShaderPrg.setUniform("u_textureMatrix",makeTextureMatrix(srcX,srcY,srcWidth,srcHeight,texWidth,texHeight));
	
	        // Set the matrix.
	        commonShaderPrg.setUniform("u_matrix",makePositionMatrix(
	                dstX,dstY,srcWidth,srcHeight,
	                gameProps.width,gameProps.height,1,1
	            )
	        );
	
	        gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
	        //gl.blendFunc(gl.ONE, gl.ONE);
	
	        // draw the quad (2 triangles, 6 vertices)
	        gl.drawArrays(gl.TRIANGLES, 0, 6);
	    };
	
	    it.clear = function() {
	        //gl.colorMask(false, false, false, true);
	        var col = scene.useBG?scene.colorBG:colorBGDefault;
	        gl.clearColor(col[0]/255,col[1]/255,col[2]/255,1);
	        gl.clear(gl.COLOR_BUFFER_BIT);
	    };
	
	    it.fillRect = function (x, y, w, h, color) {
	
	        // Set the matrix.
	        commonShaderPrg.setUniform("u_matrix",makePositionMatrix(
	                x,y,w,h,
	                gameProps.width,gameProps.height,1,1
	            )
	        );
	
	        gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
	        //gl.blendFunc(gl.ONE, gl.ONE);
	
	        // draw the quad (2 triangles, 6 vertices)
	        gl.drawArrays(gl.TRIANGLES, 0, 6);
	
	        gl.drawArrays(gl.TRIANGLES, 0, 6);
	    };
	
	    //it.strokeRect = function (x, y, w, h, color) {
	    //    this.fillRect(x, y, w, 1, color);
	    //    this.fillRect(x, y + h, w, 1, color);
	    //    this.fillRect(x, y, 1, h, color);
	    //    this.fillRect(x + w, y, 1, h, color);
	    //};
	    //
	    //it.point = function (x, y, color) {
	    //    this.fillRect(x, y, 1, 1, color);
	    //};
	
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
	
	    it.flipFrameBuffer = function(){
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
	            commonShaderPrg.setUniform('u_matrix',
	                makePositionMatrix(
	                    gameProps.globalScale.left,gameProps.globalScale.top,
	                    gameProps.width, gameProps.height,
	                    gameProps.canvasWidth,gameProps.canvasHeight,
	                    mScaleX,mScaleY
	                )
	            );
	        } else {
	            commonShaderPrg.setUniform('u_matrix',
	                makePositionMatrix(
	                    0,0,
	                    gameProps.width, gameProps.height,
	                    gameProps.canvasWidth,gameProps.canvasHeight,
	                    mScaleX,mScaleY
	                )
	            );
	        }
	
	        commonShaderPrg.setUniform('u_textureMatrix',
	            makeTextureMatrix(
	                0,0,gameProps.canvasWidth,gameProps.canvasHeight,
	                gameProps.canvasWidth,gameProps.canvasHeight
	            )
	        );
	
	        gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
	        gl.drawArrays(gl.TRIANGLES, 0, 6);
	        this.restore();
	    };
	
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
	        var texture = new Texture(gl, img);
	
	        if (opts.type == 'base64') {
	            url = utils.getBase64prefix('image', opts.fileName) + url;
	            img.src = url;
	            texture.apply(img);
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
	                texture.apply(img);
	                callBack(texture);
	            };
	
	        });
	    }
	});
	
	
	
	
	
    
}};
modules['matrixStack'] =
    {code: function(module){
    var exports = module.exports;
    	
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
modules['shaderProgram'] =
    {code: function(module){
    var exports = module.exports;
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
	
	
	exports.ShaderProgram = function(gl,sources){
	
	    var program;
	    var uniforms;
	
	    var uniformValuesCache = {};
	
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
	        uniformValuesCache[name] = value;
	    };
	
	};
    
}};
modules['texture'] =
    {code: function(module){
    var exports = module.exports;
    	
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
modules['vertexBuffer'] =
    {code: function(module){
    var exports = module.exports;
    	
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
modules['tween'] =
    {code: function(module){
    var exports = module.exports;
    	
	
	exports.Tween = function(obj,fromToVal,tweenTime,easeFnName){
	    var startedTime = null;
	    var progressFn;
	
	    var propsToChange = [];
	    easeFnName = easeFnName || 'linear';
	    this.completed = false;
	    var mathEx = require('mathEx');
	    this.tweenTime = tweenTime;
	
	    var normalizeFromTo = function(fromToVal){
	        fromToVal.from = fromToVal.from || {};
	        Object.keys(fromToVal.to).forEach(function(keyTo){
	            propsToChange.push(keyTo);
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
	            if (fromToVal.from[prp] === undefined) fromToVal.from[prp] = obj[prp];
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
    
}};
modules['tweenChain'] =
    {code: function(module){
    var exports = module.exports;
    	
	var TweenMovie = require('tweenMovie').TweenMovie;
	var Tween = require('tween').Tween;
	
	exports.TweenChain = function(){
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
	
    
}};
modules['tweenMovie'] =
    {code: function(module){
    var exports = module.exports;
    	
	var game = require('game');
	var Tween = require('tween').Tween;
	
	exports.TweenMovie = function(){
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
    
}};
modules['index'] =
    {code: function(module){
    var exports = module.exports;
    	
	var data;
	
	data = {
	
	
	    sound:[
	    {
	        "name": "powerUp",
	        "type": "sound",
	        "resourcePath": "resources/sound/powerUp.mp3",
	        "id": "5708_0669_12"
	    },
	    {
	        "name": "spinSnd",
	        "type": "sound",
	        "resourcePath": "resources/sound/spinSnd.mp3",
	        "id": "0701_9462_13"
	    },
	    {
	        "name": "spinPull",
	        "type": "sound",
	        "resourcePath": "resources/sound/spinPull.mp3",
	        "id": "9529_9176_14"
	    },
	    {
	        "name": "intro",
	        "type": "sound",
	        "resourcePath": "resources/sound/intro.mp3",
	        "id": "7639_8475_4"
	    }
	],
	
	    spriteSheet:[
	    {
	        "resourcePath": "resources/spriteSheet/slotsColumn.png",
	        "name": "slotsColumn",
	        "width": 64,
	        "height": 512,
	        "type": "spriteSheet",
	        "numOfFramesH": 1,
	        "numOfFramesV": 1,
	        "id": "4021_7193_32"
	    },
	    {
	        "resourcePath": "resources/spriteSheet/coin.png",
	        "name": "coin",
	        "width": 120,
	        "height": 120,
	        "numOfFramesH": 4,
	        "numOfFramesV": 4,
	        "type": "spriteSheet",
	        "id": "9537_4496_35"
	    }
	],
	
	    frameAnimation:[
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
	            15
	        ],
	        "type": "frameAnimation",
	        "duration": 1000,
	        "id": "7563_6764_37"
	    }
	],
	
	    font:[
	    {
	        "name": "default",
	        "fontContext": {
	            "symbols": {
	                "0": {
	                    "x": 24,
	                    "y": 38,
	                    "width": 15,
	                    "height": 29
	                },
	                "1": {
	                    "x": 45,
	                    "y": 38,
	                    "width": 15,
	                    "height": 29
	                },
	                "2": {
	                    "x": 66,
	                    "y": 38,
	                    "width": 15,
	                    "height": 29
	                },
	                "3": {
	                    "x": 87,
	                    "y": 38,
	                    "width": 15,
	                    "height": 29
	                },
	                "4": {
	                    "x": 108,
	                    "y": 38,
	                    "width": 15,
	                    "height": 29
	                },
	                "5": {
	                    "x": 129,
	                    "y": 38,
	                    "width": 15,
	                    "height": 29
	                },
	                "6": {
	                    "x": 150,
	                    "y": 38,
	                    "width": 15,
	                    "height": 29
	                },
	                "7": {
	                    "x": 171,
	                    "y": 38,
	                    "width": 15,
	                    "height": 29
	                },
	                "8": {
	                    "x": 192,
	                    "y": 38,
	                    "width": 15,
	                    "height": 29
	                },
	                "9": {
	                    "x": 213,
	                    "y": 38,
	                    "width": 15,
	                    "height": 29
	                },
	                " ": {
	                    "x": 3,
	                    "y": 3,
	                    "width": 15,
	                    "height": 29
	                },
	                "!": {
	                    "x": 24,
	                    "y": 3,
	                    "width": 15,
	                    "height": 29
	                },
	                "\"": {
	                    "x": 45,
	                    "y": 3,
	                    "width": 15,
	                    "height": 29
	                },
	                "#": {
	                    "x": 66,
	                    "y": 3,
	                    "width": 15,
	                    "height": 29
	                },
	                "$": {
	                    "x": 87,
	                    "y": 3,
	                    "width": 15,
	                    "height": 29
	                },
	                "%": {
	                    "x": 108,
	                    "y": 3,
	                    "width": 15,
	                    "height": 29
	                },
	                "&": {
	                    "x": 129,
	                    "y": 3,
	                    "width": 15,
	                    "height": 29
	                },
	                "'": {
	                    "x": 150,
	                    "y": 3,
	                    "width": 15,
	                    "height": 29
	                },
	                "(": {
	                    "x": 171,
	                    "y": 3,
	                    "width": 15,
	                    "height": 29
	                },
	                ")": {
	                    "x": 192,
	                    "y": 3,
	                    "width": 15,
	                    "height": 29
	                },
	                "*": {
	                    "x": 213,
	                    "y": 3,
	                    "width": 15,
	                    "height": 29
	                },
	                "+": {
	                    "x": 234,
	                    "y": 3,
	                    "width": 15,
	                    "height": 29
	                },
	                ",": {
	                    "x": 255,
	                    "y": 3,
	                    "width": 15,
	                    "height": 29
	                },
	                "-": {
	                    "x": 276,
	                    "y": 3,
	                    "width": 15,
	                    "height": 29
	                },
	                ".": {
	                    "x": 297,
	                    "y": 3,
	                    "width": 15,
	                    "height": 29
	                },
	                "/": {
	                    "x": 3,
	                    "y": 38,
	                    "width": 15,
	                    "height": 29
	                },
	                ":": {
	                    "x": 234,
	                    "y": 38,
	                    "width": 15,
	                    "height": 29
	                },
	                ";": {
	                    "x": 255,
	                    "y": 38,
	                    "width": 15,
	                    "height": 29
	                },
	                "<": {
	                    "x": 276,
	                    "y": 38,
	                    "width": 15,
	                    "height": 29
	                },
	                "=": {
	                    "x": 297,
	                    "y": 38,
	                    "width": 15,
	                    "height": 29
	                },
	                ">": {
	                    "x": 3,
	                    "y": 73,
	                    "width": 15,
	                    "height": 29
	                },
	                "?": {
	                    "x": 24,
	                    "y": 73,
	                    "width": 15,
	                    "height": 29
	                },
	                "@": {
	                    "x": 45,
	                    "y": 73,
	                    "width": 15,
	                    "height": 29
	                },
	                "A": {
	                    "x": 66,
	                    "y": 73,
	                    "width": 15,
	                    "height": 29
	                },
	                "B": {
	                    "x": 87,
	                    "y": 73,
	                    "width": 15,
	                    "height": 29
	                },
	                "C": {
	                    "x": 108,
	                    "y": 73,
	                    "width": 15,
	                    "height": 29
	                },
	                "D": {
	                    "x": 129,
	                    "y": 73,
	                    "width": 15,
	                    "height": 29
	                },
	                "E": {
	                    "x": 150,
	                    "y": 73,
	                    "width": 15,
	                    "height": 29
	                },
	                "F": {
	                    "x": 171,
	                    "y": 73,
	                    "width": 15,
	                    "height": 29
	                },
	                "G": {
	                    "x": 192,
	                    "y": 73,
	                    "width": 15,
	                    "height": 29
	                },
	                "H": {
	                    "x": 213,
	                    "y": 73,
	                    "width": 15,
	                    "height": 29
	                },
	                "I": {
	                    "x": 234,
	                    "y": 73,
	                    "width": 15,
	                    "height": 29
	                },
	                "J": {
	                    "x": 255,
	                    "y": 73,
	                    "width": 15,
	                    "height": 29
	                },
	                "K": {
	                    "x": 276,
	                    "y": 73,
	                    "width": 15,
	                    "height": 29
	                },
	                "L": {
	                    "x": 297,
	                    "y": 73,
	                    "width": 15,
	                    "height": 29
	                },
	                "M": {
	                    "x": 3,
	                    "y": 108,
	                    "width": 15,
	                    "height": 29
	                },
	                "N": {
	                    "x": 24,
	                    "y": 108,
	                    "width": 15,
	                    "height": 29
	                },
	                "O": {
	                    "x": 45,
	                    "y": 108,
	                    "width": 15,
	                    "height": 29
	                },
	                "P": {
	                    "x": 66,
	                    "y": 108,
	                    "width": 15,
	                    "height": 29
	                },
	                "Q": {
	                    "x": 87,
	                    "y": 108,
	                    "width": 15,
	                    "height": 29
	                },
	                "R": {
	                    "x": 108,
	                    "y": 108,
	                    "width": 15,
	                    "height": 29
	                },
	                "S": {
	                    "x": 129,
	                    "y": 108,
	                    "width": 15,
	                    "height": 29
	                },
	                "T": {
	                    "x": 150,
	                    "y": 108,
	                    "width": 15,
	                    "height": 29
	                },
	                "U": {
	                    "x": 171,
	                    "y": 108,
	                    "width": 15,
	                    "height": 29
	                },
	                "V": {
	                    "x": 192,
	                    "y": 108,
	                    "width": 15,
	                    "height": 29
	                },
	                "W": {
	                    "x": 213,
	                    "y": 108,
	                    "width": 15,
	                    "height": 29
	                },
	                "X": {
	                    "x": 234,
	                    "y": 108,
	                    "width": 15,
	                    "height": 29
	                },
	                "Y": {
	                    "x": 255,
	                    "y": 108,
	                    "width": 15,
	                    "height": 29
	                },
	                "Z": {
	                    "x": 276,
	                    "y": 108,
	                    "width": 15,
	                    "height": 29
	                },
	                "[": {
	                    "x": 297,
	                    "y": 108,
	                    "width": 15,
	                    "height": 29
	                },
	                "\\": {
	                    "x": 3,
	                    "y": 143,
	                    "width": 15,
	                    "height": 29
	                },
	                "]": {
	                    "x": 24,
	                    "y": 143,
	                    "width": 15,
	                    "height": 29
	                },
	                "^": {
	                    "x": 45,
	                    "y": 143,
	                    "width": 15,
	                    "height": 29
	                },
	                "_": {
	                    "x": 66,
	                    "y": 143,
	                    "width": 15,
	                    "height": 29
	                },
	                "`": {
	                    "x": 87,
	                    "y": 143,
	                    "width": 15,
	                    "height": 29
	                },
	                "a": {
	                    "x": 108,
	                    "y": 143,
	                    "width": 15,
	                    "height": 29
	                },
	                "b": {
	                    "x": 129,
	                    "y": 143,
	                    "width": 15,
	                    "height": 29
	                },
	                "c": {
	                    "x": 150,
	                    "y": 143,
	                    "width": 15,
	                    "height": 29
	                },
	                "d": {
	                    "x": 171,
	                    "y": 143,
	                    "width": 15,
	                    "height": 29
	                },
	                "e": {
	                    "x": 192,
	                    "y": 143,
	                    "width": 15,
	                    "height": 29
	                },
	                "f": {
	                    "x": 213,
	                    "y": 143,
	                    "width": 15,
	                    "height": 29
	                },
	                "g": {
	                    "x": 234,
	                    "y": 143,
	                    "width": 15,
	                    "height": 29
	                },
	                "h": {
	                    "x": 255,
	                    "y": 143,
	                    "width": 15,
	                    "height": 29
	                },
	                "i": {
	                    "x": 276,
	                    "y": 143,
	                    "width": 15,
	                    "height": 29
	                },
	                "j": {
	                    "x": 297,
	                    "y": 143,
	                    "width": 15,
	                    "height": 29
	                },
	                "k": {
	                    "x": 3,
	                    "y": 178,
	                    "width": 15,
	                    "height": 29
	                },
	                "l": {
	                    "x": 24,
	                    "y": 178,
	                    "width": 15,
	                    "height": 29
	                },
	                "m": {
	                    "x": 45,
	                    "y": 178,
	                    "width": 15,
	                    "height": 29
	                },
	                "n": {
	                    "x": 66,
	                    "y": 178,
	                    "width": 15,
	                    "height": 29
	                },
	                "o": {
	                    "x": 87,
	                    "y": 178,
	                    "width": 15,
	                    "height": 29
	                },
	                "p": {
	                    "x": 108,
	                    "y": 178,
	                    "width": 15,
	                    "height": 29
	                },
	                "q": {
	                    "x": 129,
	                    "y": 178,
	                    "width": 15,
	                    "height": 29
	                },
	                "r": {
	                    "x": 150,
	                    "y": 178,
	                    "width": 15,
	                    "height": 29
	                },
	                "s": {
	                    "x": 171,
	                    "y": 178,
	                    "width": 15,
	                    "height": 29
	                },
	                "t": {
	                    "x": 192,
	                    "y": 178,
	                    "width": 15,
	                    "height": 29
	                },
	                "u": {
	                    "x": 213,
	                    "y": 178,
	                    "width": 15,
	                    "height": 29
	                },
	                "v": {
	                    "x": 234,
	                    "y": 178,
	                    "width": 15,
	                    "height": 29
	                },
	                "w": {
	                    "x": 255,
	                    "y": 178,
	                    "width": 15,
	                    "height": 29
	                },
	                "x": {
	                    "x": 276,
	                    "y": 178,
	                    "width": 15,
	                    "height": 29
	                },
	                "y": {
	                    "x": 297,
	                    "y": 178,
	                    "width": 15,
	                    "height": 29
	                },
	                "z": {
	                    "x": 3,
	                    "y": 213,
	                    "width": 15,
	                    "height": 29
	                },
	                "{": {
	                    "x": 24,
	                    "y": 213,
	                    "width": 15,
	                    "height": 29
	                },
	                "|": {
	                    "x": 45,
	                    "y": 213,
	                    "width": 15,
	                    "height": 29
	                },
	                "}": {
	                    "x": 66,
	                    "y": 213,
	                    "width": 15,
	                    "height": 29
	                },
	                "~": {
	                    "x": 87,
	                    "y": 213,
	                    "width": 15,
	                    "height": 29
	                },
	                "": {
	                    "x": 108,
	                    "y": 213,
	                    "width": 0,
	                    "height": 29
	                },
	                "": {
	                    "x": 114,
	                    "y": 213,
	                    "width": 0,
	                    "height": 29
	                },
	                "": {
	                    "x": 120,
	                    "y": 213,
	                    "width": 0,
	                    "height": 29
	                },
	                "": {
	                    "x": 126,
	                    "y": 213,
	                    "width": 0,
	                    "height": 29
	                },
	                "": {
	                    "x": 132,
	                    "y": 213,
	                    "width": 0,
	                    "height": 29
	                },
	                "": {
	                    "x": 138,
	                    "y": 213,
	                    "width": 0,
	                    "height": 29
	                },
	                "": {
	                    "x": 144,
	                    "y": 213,
	                    "width": 0,
	                    "height": 29
	                },
	                "": {
	                    "x": 150,
	                    "y": 213,
	                    "width": 0,
	                    "height": 29
	                },
	                "": {
	                    "x": 156,
	                    "y": 213,
	                    "width": 0,
	                    "height": 29
	                },
	                "": {
	                    "x": 162,
	                    "y": 213,
	                    "width": 0,
	                    "height": 29
	                },
	                "": {
	                    "x": 168,
	                    "y": 213,
	                    "width": 0,
	                    "height": 29
	                },
	                "": {
	                    "x": 174,
	                    "y": 213,
	                    "width": 0,
	                    "height": 29
	                },
	                "": {
	                    "x": 180,
	                    "y": 213,
	                    "width": 0,
	                    "height": 29
	                },
	                "": {
	                    "x": 186,
	                    "y": 213,
	                    "width": 0,
	                    "height": 29
	                },
	                "": {
	                    "x": 192,
	                    "y": 213,
	                    "width": 0,
	                    "height": 29
	                },
	                "": {
	                    "x": 198,
	                    "y": 213,
	                    "width": 0,
	                    "height": 29
	                },
	                "": {
	                    "x": 204,
	                    "y": 213,
	                    "width": 0,
	                    "height": 29
	                },
	                "": {
	                    "x": 210,
	                    "y": 213,
	                    "width": 0,
	                    "height": 29
	                },
	                "": {
	                    "x": 216,
	                    "y": 213,
	                    "width": 0,
	                    "height": 29
	                },
	                "": {
	                    "x": 222,
	                    "y": 213,
	                    "width": 0,
	                    "height": 29
	                },
	                "": {
	                    "x": 228,
	                    "y": 213,
	                    "width": 0,
	                    "height": 29
	                },
	                "": {
	                    "x": 234,
	                    "y": 213,
	                    "width": 0,
	                    "height": 29
	                },
	                "": {
	                    "x": 240,
	                    "y": 213,
	                    "width": 0,
	                    "height": 29
	                },
	                "А": {
	                    "x": 246,
	                    "y": 213,
	                    "width": 15,
	                    "height": 29
	                },
	                "Б": {
	                    "x": 267,
	                    "y": 213,
	                    "width": 15,
	                    "height": 29
	                },
	                "В": {
	                    "x": 288,
	                    "y": 213,
	                    "width": 15,
	                    "height": 29
	                },
	                "Г": {
	                    "x": 3,
	                    "y": 248,
	                    "width": 15,
	                    "height": 29
	                },
	                "Д": {
	                    "x": 24,
	                    "y": 248,
	                    "width": 15,
	                    "height": 29
	                },
	                "Е": {
	                    "x": 45,
	                    "y": 248,
	                    "width": 15,
	                    "height": 29
	                },
	                "Ж": {
	                    "x": 66,
	                    "y": 248,
	                    "width": 15,
	                    "height": 29
	                },
	                "З": {
	                    "x": 87,
	                    "y": 248,
	                    "width": 15,
	                    "height": 29
	                },
	                "И": {
	                    "x": 108,
	                    "y": 248,
	                    "width": 15,
	                    "height": 29
	                },
	                "Й": {
	                    "x": 129,
	                    "y": 248,
	                    "width": 15,
	                    "height": 29
	                },
	                "К": {
	                    "x": 150,
	                    "y": 248,
	                    "width": 15,
	                    "height": 29
	                },
	                "Л": {
	                    "x": 171,
	                    "y": 248,
	                    "width": 15,
	                    "height": 29
	                },
	                "М": {
	                    "x": 192,
	                    "y": 248,
	                    "width": 15,
	                    "height": 29
	                },
	                "Н": {
	                    "x": 213,
	                    "y": 248,
	                    "width": 15,
	                    "height": 29
	                },
	                "О": {
	                    "x": 234,
	                    "y": 248,
	                    "width": 15,
	                    "height": 29
	                },
	                "П": {
	                    "x": 255,
	                    "y": 248,
	                    "width": 15,
	                    "height": 29
	                },
	                "Р": {
	                    "x": 276,
	                    "y": 248,
	                    "width": 15,
	                    "height": 29
	                },
	                "С": {
	                    "x": 297,
	                    "y": 248,
	                    "width": 15,
	                    "height": 29
	                },
	                "Т": {
	                    "x": 3,
	                    "y": 283,
	                    "width": 15,
	                    "height": 29
	                },
	                "У": {
	                    "x": 24,
	                    "y": 283,
	                    "width": 15,
	                    "height": 29
	                },
	                "Ф": {
	                    "x": 45,
	                    "y": 283,
	                    "width": 15,
	                    "height": 29
	                },
	                "Х": {
	                    "x": 66,
	                    "y": 283,
	                    "width": 15,
	                    "height": 29
	                },
	                "Ц": {
	                    "x": 87,
	                    "y": 283,
	                    "width": 15,
	                    "height": 29
	                },
	                "Ч": {
	                    "x": 108,
	                    "y": 283,
	                    "width": 15,
	                    "height": 29
	                },
	                "Ш": {
	                    "x": 129,
	                    "y": 283,
	                    "width": 15,
	                    "height": 29
	                },
	                "Щ": {
	                    "x": 150,
	                    "y": 283,
	                    "width": 15,
	                    "height": 29
	                },
	                "Ъ": {
	                    "x": 171,
	                    "y": 283,
	                    "width": 15,
	                    "height": 29
	                },
	                "Ы": {
	                    "x": 192,
	                    "y": 283,
	                    "width": 15,
	                    "height": 29
	                },
	                "Ь": {
	                    "x": 213,
	                    "y": 283,
	                    "width": 15,
	                    "height": 29
	                },
	                "Э": {
	                    "x": 234,
	                    "y": 283,
	                    "width": 15,
	                    "height": 29
	                },
	                "Ю": {
	                    "x": 255,
	                    "y": 283,
	                    "width": 15,
	                    "height": 29
	                },
	                "Я": {
	                    "x": 276,
	                    "y": 283,
	                    "width": 15,
	                    "height": 29
	                },
	                "а": {
	                    "x": 297,
	                    "y": 283,
	                    "width": 15,
	                    "height": 29
	                },
	                "б": {
	                    "x": 3,
	                    "y": 318,
	                    "width": 15,
	                    "height": 29
	                },
	                "в": {
	                    "x": 24,
	                    "y": 318,
	                    "width": 15,
	                    "height": 29
	                },
	                "г": {
	                    "x": 45,
	                    "y": 318,
	                    "width": 15,
	                    "height": 29
	                },
	                "д": {
	                    "x": 66,
	                    "y": 318,
	                    "width": 15,
	                    "height": 29
	                },
	                "е": {
	                    "x": 87,
	                    "y": 318,
	                    "width": 15,
	                    "height": 29
	                },
	                "ж": {
	                    "x": 108,
	                    "y": 318,
	                    "width": 15,
	                    "height": 29
	                },
	                "з": {
	                    "x": 129,
	                    "y": 318,
	                    "width": 15,
	                    "height": 29
	                },
	                "и": {
	                    "x": 150,
	                    "y": 318,
	                    "width": 15,
	                    "height": 29
	                },
	                "й": {
	                    "x": 171,
	                    "y": 318,
	                    "width": 15,
	                    "height": 29
	                },
	                "к": {
	                    "x": 192,
	                    "y": 318,
	                    "width": 15,
	                    "height": 29
	                },
	                "л": {
	                    "x": 213,
	                    "y": 318,
	                    "width": 15,
	                    "height": 29
	                },
	                "м": {
	                    "x": 234,
	                    "y": 318,
	                    "width": 15,
	                    "height": 29
	                },
	                "н": {
	                    "x": 255,
	                    "y": 318,
	                    "width": 15,
	                    "height": 29
	                },
	                "о": {
	                    "x": 276,
	                    "y": 318,
	                    "width": 15,
	                    "height": 29
	                },
	                "п": {
	                    "x": 297,
	                    "y": 318,
	                    "width": 15,
	                    "height": 29
	                },
	                "р": {
	                    "x": 3,
	                    "y": 353,
	                    "width": 15,
	                    "height": 29
	                },
	                "с": {
	                    "x": 24,
	                    "y": 353,
	                    "width": 15,
	                    "height": 29
	                },
	                "т": {
	                    "x": 45,
	                    "y": 353,
	                    "width": 15,
	                    "height": 29
	                },
	                "у": {
	                    "x": 66,
	                    "y": 353,
	                    "width": 15,
	                    "height": 29
	                },
	                "ф": {
	                    "x": 87,
	                    "y": 353,
	                    "width": 15,
	                    "height": 29
	                },
	                "х": {
	                    "x": 108,
	                    "y": 353,
	                    "width": 15,
	                    "height": 29
	                },
	                "ц": {
	                    "x": 129,
	                    "y": 353,
	                    "width": 15,
	                    "height": 29
	                },
	                "ч": {
	                    "x": 150,
	                    "y": 353,
	                    "width": 15,
	                    "height": 29
	                },
	                "ш": {
	                    "x": 171,
	                    "y": 353,
	                    "width": 15,
	                    "height": 29
	                },
	                "щ": {
	                    "x": 192,
	                    "y": 353,
	                    "width": 15,
	                    "height": 29
	                },
	                "ъ": {
	                    "x": 213,
	                    "y": 353,
	                    "width": 15,
	                    "height": 29
	                },
	                "ы": {
	                    "x": 234,
	                    "y": 353,
	                    "width": 15,
	                    "height": 29
	                },
	                "ь": {
	                    "x": 255,
	                    "y": 353,
	                    "width": 15,
	                    "height": 29
	                },
	                "э": {
	                    "x": 276,
	                    "y": 353,
	                    "width": 15,
	                    "height": 29
	                },
	                "ю": {
	                    "x": 297,
	                    "y": 353,
	                    "width": 15,
	                    "height": 29
	                },
	                "я": {
	                    "x": 3,
	                    "y": 388,
	                    "width": 15,
	                    "height": 29
	                },
	                "ѐ": {
	                    "x": 24,
	                    "y": 388,
	                    "width": 15,
	                    "height": 29
	                },
	                "ё": {
	                    "x": 45,
	                    "y": 388,
	                    "width": 15,
	                    "height": 29
	                },
	                "ђ": {
	                    "x": 66,
	                    "y": 388,
	                    "width": 15,
	                    "height": 29
	                },
	                "ѓ": {
	                    "x": 87,
	                    "y": 388,
	                    "width": 15,
	                    "height": 29
	                },
	                "є": {
	                    "x": 108,
	                    "y": 388,
	                    "width": 15,
	                    "height": 29
	                },
	                "ѕ": {
	                    "x": 129,
	                    "y": 388,
	                    "width": 15,
	                    "height": 29
	                },
	                "і": {
	                    "x": 150,
	                    "y": 388,
	                    "width": 15,
	                    "height": 29
	                },
	                "ї": {
	                    "x": 171,
	                    "y": 388,
	                    "width": 15,
	                    "height": 29
	                },
	                "ј": {
	                    "x": 192,
	                    "y": 388,
	                    "width": 15,
	                    "height": 29
	                },
	                "љ": {
	                    "x": 213,
	                    "y": 388,
	                    "width": 15,
	                    "height": 29
	                },
	                "њ": {
	                    "x": 234,
	                    "y": 388,
	                    "width": 15,
	                    "height": 29
	                },
	                "ћ": {
	                    "x": 255,
	                    "y": 388,
	                    "width": 15,
	                    "height": 29
	                }
	            },
	            "width": 320,
	            "height": 420
	        },
	        "type": "font",
	        "fontColor": "black",
	        "fontSize": 25,
	        "fontFamily": "Monospace",
	        "resourcePath": "resources/font/default.png",
	        "id": "6991_3497_4"
	    },
	    {
	        "fontColor": [
	            0,
	            0,
	            0
	        ],
	        "fontFamily": "Impact",
	        "fontSize": 30,
	        "name": "impact",
	        "fontContext": {
	            "symbols": {
	                "0": {
	                    "x": 276,
	                    "y": 3,
	                    "width": 16,
	                    "height": 36
	                },
	                "1": {
	                    "x": 298,
	                    "y": 3,
	                    "width": 11,
	                    "height": 36
	                },
	                "2": {
	                    "x": 3,
	                    "y": 45,
	                    "width": 15,
	                    "height": 36
	                },
	                "3": {
	                    "x": 24,
	                    "y": 45,
	                    "width": 15,
	                    "height": 36
	                },
	                "4": {
	                    "x": 45,
	                    "y": 45,
	                    "width": 14,
	                    "height": 36
	                },
	                "5": {
	                    "x": 66,
	                    "y": 45,
	                    "width": 16,
	                    "height": 36
	                },
	                "6": {
	                    "x": 89,
	                    "y": 45,
	                    "width": 16,
	                    "height": 36
	                },
	                "7": {
	                    "x": 111,
	                    "y": 45,
	                    "width": 11,
	                    "height": 36
	                },
	                "8": {
	                    "x": 129,
	                    "y": 45,
	                    "width": 16,
	                    "height": 36
	                },
	                "9": {
	                    "x": 151,
	                    "y": 45,
	                    "width": 16,
	                    "height": 36
	                },
	                " ": {
	                    "x": 3,
	                    "y": 3,
	                    "width": 5,
	                    "height": 36
	                },
	                "!": {
	                    "x": 14,
	                    "y": 3,
	                    "width": 8,
	                    "height": 36
	                },
	                "\"": {
	                    "x": 28,
	                    "y": 3,
	                    "width": 11,
	                    "height": 36
	                },
	                "#": {
	                    "x": 45,
	                    "y": 3,
	                    "width": 18,
	                    "height": 36
	                },
	                "$": {
	                    "x": 70,
	                    "y": 3,
	                    "width": 16,
	                    "height": 36
	                },
	                "%": {
	                    "x": 92,
	                    "y": 3,
	                    "width": 20,
	                    "height": 36
	                },
	                "&": {
	                    "x": 119,
	                    "y": 3,
	                    "width": 17,
	                    "height": 36
	                },
	                "'": {
	                    "x": 142,
	                    "y": 3,
	                    "width": 5,
	                    "height": 36
	                },
	                "(": {
	                    "x": 154,
	                    "y": 3,
	                    "width": 9,
	                    "height": 36
	                },
	                ")": {
	                    "x": 169,
	                    "y": 3,
	                    "width": 9,
	                    "height": 36
	                },
	                "*": {
	                    "x": 185,
	                    "y": 3,
	                    "width": 8,
	                    "height": 36
	                },
	                "+": {
	                    "x": 199,
	                    "y": 3,
	                    "width": 15,
	                    "height": 36
	                },
	                ",": {
	                    "x": 221,
	                    "y": 3,
	                    "width": 5,
	                    "height": 36
	                },
	                "-": {
	                    "x": 232,
	                    "y": 3,
	                    "width": 8,
	                    "height": 36
	                },
	                ".": {
	                    "x": 247,
	                    "y": 3,
	                    "width": 5,
	                    "height": 36
	                },
	                "/": {
	                    "x": 258,
	                    "y": 3,
	                    "width": 11,
	                    "height": 36
	                },
	                ":": {
	                    "x": 173,
	                    "y": 45,
	                    "width": 6,
	                    "height": 36
	                },
	                ";": {
	                    "x": 185,
	                    "y": 45,
	                    "width": 6,
	                    "height": 36
	                },
	                "<": {
	                    "x": 197,
	                    "y": 45,
	                    "width": 15,
	                    "height": 36
	                },
	                "=": {
	                    "x": 219,
	                    "y": 45,
	                    "width": 15,
	                    "height": 36
	                },
	                ">": {
	                    "x": 241,
	                    "y": 45,
	                    "width": 15,
	                    "height": 36
	                },
	                "?": {
	                    "x": 263,
	                    "y": 45,
	                    "width": 15,
	                    "height": 36
	                },
	                "@": {
	                    "x": 285,
	                    "y": 45,
	                    "width": 23,
	                    "height": 36
	                },
	                "A": {
	                    "x": 3,
	                    "y": 87,
	                    "width": 15,
	                    "height": 36
	                },
	                "B": {
	                    "x": 24,
	                    "y": 87,
	                    "width": 16,
	                    "height": 36
	                },
	                "C": {
	                    "x": 46,
	                    "y": 87,
	                    "width": 16,
	                    "height": 36
	                },
	                "D": {
	                    "x": 69,
	                    "y": 87,
	                    "width": 16,
	                    "height": 36
	                },
	                "E": {
	                    "x": 91,
	                    "y": 87,
	                    "width": 12,
	                    "height": 36
	                },
	                "F": {
	                    "x": 110,
	                    "y": 87,
	                    "width": 11,
	                    "height": 36
	                },
	                "G": {
	                    "x": 128,
	                    "y": 87,
	                    "width": 16,
	                    "height": 36
	                },
	                "H": {
	                    "x": 150,
	                    "y": 87,
	                    "width": 16,
	                    "height": 36
	                },
	                "I": {
	                    "x": 173,
	                    "y": 87,
	                    "width": 8,
	                    "height": 36
	                },
	                "J": {
	                    "x": 188,
	                    "y": 87,
	                    "width": 9,
	                    "height": 36
	                },
	                "K": {
	                    "x": 204,
	                    "y": 87,
	                    "width": 16,
	                    "height": 36
	                },
	                "L": {
	                    "x": 226,
	                    "y": 87,
	                    "width": 11,
	                    "height": 36
	                },
	                "M": {
	                    "x": 243,
	                    "y": 87,
	                    "width": 21,
	                    "height": 36
	                },
	                "N": {
	                    "x": 271,
	                    "y": 87,
	                    "width": 16,
	                    "height": 36
	                },
	                "O": {
	                    "x": 293,
	                    "y": 87,
	                    "width": 16,
	                    "height": 36
	                },
	                "P": {
	                    "x": 3,
	                    "y": 129,
	                    "width": 15,
	                    "height": 36
	                },
	                "Q": {
	                    "x": 24,
	                    "y": 129,
	                    "width": 16,
	                    "height": 36
	                },
	                "R": {
	                    "x": 46,
	                    "y": 129,
	                    "width": 16,
	                    "height": 36
	                },
	                "S": {
	                    "x": 68,
	                    "y": 129,
	                    "width": 15,
	                    "height": 36
	                },
	                "T": {
	                    "x": 90,
	                    "y": 129,
	                    "width": 13,
	                    "height": 36
	                },
	                "U": {
	                    "x": 109,
	                    "y": 129,
	                    "width": 16,
	                    "height": 36
	                },
	                "V": {
	                    "x": 132,
	                    "y": 129,
	                    "width": 15,
	                    "height": 36
	                },
	                "W": {
	                    "x": 154,
	                    "y": 129,
	                    "width": 24,
	                    "height": 36
	                },
	                "X": {
	                    "x": 184,
	                    "y": 129,
	                    "width": 14,
	                    "height": 36
	                },
	                "Y": {
	                    "x": 204,
	                    "y": 129,
	                    "width": 14,
	                    "height": 36
	                },
	                "Z": {
	                    "x": 225,
	                    "y": 129,
	                    "width": 11,
	                    "height": 36
	                },
	                "[": {
	                    "x": 243,
	                    "y": 129,
	                    "width": 8,
	                    "height": 36
	                },
	                "\\": {
	                    "x": 257,
	                    "y": 129,
	                    "width": 11,
	                    "height": 36
	                },
	                "]": {
	                    "x": 275,
	                    "y": 129,
	                    "width": 8,
	                    "height": 36
	                },
	                "^": {
	                    "x": 289,
	                    "y": 129,
	                    "width": 14,
	                    "height": 36
	                },
	                "_": {
	                    "x": 3,
	                    "y": 171,
	                    "width": 16,
	                    "height": 36
	                },
	                "`": {
	                    "x": 25,
	                    "y": 171,
	                    "width": 10,
	                    "height": 36
	                },
	                "a": {
	                    "x": 41,
	                    "y": 171,
	                    "width": 15,
	                    "height": 36
	                },
	                "b": {
	                    "x": 62,
	                    "y": 171,
	                    "width": 15,
	                    "height": 36
	                },
	                "c": {
	                    "x": 84,
	                    "y": 171,
	                    "width": 14,
	                    "height": 36
	                },
	                "d": {
	                    "x": 105,
	                    "y": 171,
	                    "width": 15,
	                    "height": 36
	                },
	                "e": {
	                    "x": 126,
	                    "y": 171,
	                    "width": 15,
	                    "height": 36
	                },
	                "f": {
	                    "x": 148,
	                    "y": 171,
	                    "width": 8,
	                    "height": 36
	                },
	                "g": {
	                    "x": 162,
	                    "y": 171,
	                    "width": 15,
	                    "height": 36
	                },
	                "h": {
	                    "x": 184,
	                    "y": 171,
	                    "width": 15,
	                    "height": 36
	                },
	                "i": {
	                    "x": 205,
	                    "y": 171,
	                    "width": 8,
	                    "height": 36
	                },
	                "j": {
	                    "x": 220,
	                    "y": 171,
	                    "width": 8,
	                    "height": 36
	                },
	                "k": {
	                    "x": 234,
	                    "y": 171,
	                    "width": 14,
	                    "height": 36
	                },
	                "l": {
	                    "x": 254,
	                    "y": 171,
	                    "width": 8,
	                    "height": 36
	                },
	                "m": {
	                    "x": 269,
	                    "y": 171,
	                    "width": 23,
	                    "height": 36
	                },
	                "n": {
	                    "x": 298,
	                    "y": 171,
	                    "width": 15,
	                    "height": 36
	                },
	                "o": {
	                    "x": 3,
	                    "y": 213,
	                    "width": 15,
	                    "height": 36
	                },
	                "p": {
	                    "x": 24,
	                    "y": 213,
	                    "width": 15,
	                    "height": 36
	                },
	                "q": {
	                    "x": 45,
	                    "y": 213,
	                    "width": 15,
	                    "height": 36
	                },
	                "r": {
	                    "x": 67,
	                    "y": 213,
	                    "width": 10,
	                    "height": 36
	                },
	                "s": {
	                    "x": 84,
	                    "y": 213,
	                    "width": 14,
	                    "height": 36
	                },
	                "t": {
	                    "x": 104,
	                    "y": 213,
	                    "width": 9,
	                    "height": 36
	                },
	                "u": {
	                    "x": 119,
	                    "y": 213,
	                    "width": 15,
	                    "height": 36
	                },
	                "v": {
	                    "x": 141,
	                    "y": 213,
	                    "width": 13,
	                    "height": 36
	                },
	                "w": {
	                    "x": 160,
	                    "y": 213,
	                    "width": 20,
	                    "height": 36
	                },
	                "x": {
	                    "x": 186,
	                    "y": 213,
	                    "width": 13,
	                    "height": 36
	                },
	                "y": {
	                    "x": 205,
	                    "y": 213,
	                    "width": 13,
	                    "height": 36
	                },
	                "z": {
	                    "x": 224,
	                    "y": 213,
	                    "width": 10,
	                    "height": 36
	                },
	                "{": {
	                    "x": 241,
	                    "y": 213,
	                    "width": 11,
	                    "height": 36
	                },
	                "|": {
	                    "x": 258,
	                    "y": 213,
	                    "width": 8,
	                    "height": 36
	                },
	                "}": {
	                    "x": 272,
	                    "y": 213,
	                    "width": 11,
	                    "height": 36
	                },
	                "~": {
	                    "x": 289,
	                    "y": 213,
	                    "width": 15,
	                    "height": 36
	                },
	                "": {
	                    "x": 311,
	                    "y": 213,
	                    "width": 0,
	                    "height": 36
	                },
	                "": {
	                    "x": 3,
	                    "y": 255,
	                    "width": 0,
	                    "height": 36
	                },
	                "": {
	                    "x": 9,
	                    "y": 255,
	                    "width": 0,
	                    "height": 36
	                },
	                "": {
	                    "x": 15,
	                    "y": 255,
	                    "width": 0,
	                    "height": 36
	                },
	                "": {
	                    "x": 21,
	                    "y": 255,
	                    "width": 0,
	                    "height": 36
	                },
	                "": {
	                    "x": 27,
	                    "y": 255,
	                    "width": 0,
	                    "height": 36
	                },
	                "": {
	                    "x": 33,
	                    "y": 255,
	                    "width": 0,
	                    "height": 36
	                },
	                "": {
	                    "x": 39,
	                    "y": 255,
	                    "width": 0,
	                    "height": 36
	                },
	                "": {
	                    "x": 45,
	                    "y": 255,
	                    "width": 0,
	                    "height": 36
	                },
	                "": {
	                    "x": 51,
	                    "y": 255,
	                    "width": 0,
	                    "height": 36
	                },
	                "": {
	                    "x": 57,
	                    "y": 255,
	                    "width": 0,
	                    "height": 36
	                },
	                "": {
	                    "x": 63,
	                    "y": 255,
	                    "width": 0,
	                    "height": 36
	                },
	                "": {
	                    "x": 69,
	                    "y": 255,
	                    "width": 0,
	                    "height": 36
	                },
	                "": {
	                    "x": 75,
	                    "y": 255,
	                    "width": 0,
	                    "height": 36
	                },
	                "": {
	                    "x": 81,
	                    "y": 255,
	                    "width": 0,
	                    "height": 36
	                },
	                "": {
	                    "x": 87,
	                    "y": 255,
	                    "width": 0,
	                    "height": 36
	                },
	                "": {
	                    "x": 93,
	                    "y": 255,
	                    "width": 0,
	                    "height": 36
	                },
	                "": {
	                    "x": 99,
	                    "y": 255,
	                    "width": 0,
	                    "height": 36
	                },
	                "": {
	                    "x": 105,
	                    "y": 255,
	                    "width": 0,
	                    "height": 36
	                },
	                "": {
	                    "x": 111,
	                    "y": 255,
	                    "width": 0,
	                    "height": 36
	                },
	                "": {
	                    "x": 117,
	                    "y": 255,
	                    "width": 0,
	                    "height": 36
	                },
	                "": {
	                    "x": 123,
	                    "y": 255,
	                    "width": 0,
	                    "height": 36
	                },
	                "": {
	                    "x": 129,
	                    "y": 255,
	                    "width": 0,
	                    "height": 36
	                },
	                "А": {
	                    "x": 135,
	                    "y": 255,
	                    "width": 15,
	                    "height": 36
	                },
	                "Б": {
	                    "x": 156,
	                    "y": 255,
	                    "width": 16,
	                    "height": 36
	                },
	                "В": {
	                    "x": 178,
	                    "y": 255,
	                    "width": 16,
	                    "height": 36
	                },
	                "Г": {
	                    "x": 201,
	                    "y": 255,
	                    "width": 12,
	                    "height": 36
	                },
	                "Д": {
	                    "x": 219,
	                    "y": 255,
	                    "width": 19,
	                    "height": 36
	                },
	                "Е": {
	                    "x": 245,
	                    "y": 255,
	                    "width": 12,
	                    "height": 36
	                },
	                "Ж": {
	                    "x": 263,
	                    "y": 255,
	                    "width": 22,
	                    "height": 36
	                },
	                "З": {
	                    "x": 291,
	                    "y": 255,
	                    "width": 15,
	                    "height": 36
	                },
	                "И": {
	                    "x": 3,
	                    "y": 297,
	                    "width": 16,
	                    "height": 36
	                },
	                "Й": {
	                    "x": 25,
	                    "y": 297,
	                    "width": 16,
	                    "height": 36
	                },
	                "К": {
	                    "x": 47,
	                    "y": 297,
	                    "width": 16,
	                    "height": 36
	                },
	                "Л": {
	                    "x": 69,
	                    "y": 297,
	                    "width": 17,
	                    "height": 36
	                },
	                "М": {
	                    "x": 93,
	                    "y": 297,
	                    "width": 21,
	                    "height": 36
	                },
	                "Н": {
	                    "x": 120,
	                    "y": 297,
	                    "width": 16,
	                    "height": 36
	                },
	                "О": {
	                    "x": 143,
	                    "y": 297,
	                    "width": 16,
	                    "height": 36
	                },
	                "П": {
	                    "x": 165,
	                    "y": 297,
	                    "width": 16,
	                    "height": 36
	                },
	                "Р": {
	                    "x": 188,
	                    "y": 297,
	                    "width": 15,
	                    "height": 36
	                },
	                "С": {
	                    "x": 209,
	                    "y": 297,
	                    "width": 16,
	                    "height": 36
	                },
	                "Т": {
	                    "x": 231,
	                    "y": 297,
	                    "width": 13,
	                    "height": 36
	                },
	                "У": {
	                    "x": 251,
	                    "y": 297,
	                    "width": 13,
	                    "height": 36
	                },
	                "Ф": {
	                    "x": 271,
	                    "y": 297,
	                    "width": 23,
	                    "height": 36
	                },
	                "Х": {
	                    "x": 301,
	                    "y": 297,
	                    "width": 14,
	                    "height": 36
	                },
	                "Ц": {
	                    "x": 3,
	                    "y": 339,
	                    "width": 17,
	                    "height": 36
	                },
	                "Ч": {
	                    "x": 26,
	                    "y": 339,
	                    "width": 17,
	                    "height": 36
	                },
	                "Ш": {
	                    "x": 49,
	                    "y": 339,
	                    "width": 24,
	                    "height": 36
	                },
	                "Щ": {
	                    "x": 79,
	                    "y": 339,
	                    "width": 25,
	                    "height": 36
	                },
	                "Ъ": {
	                    "x": 111,
	                    "y": 339,
	                    "width": 18,
	                    "height": 36
	                },
	                "Ы": {
	                    "x": 135,
	                    "y": 339,
	                    "width": 24,
	                    "height": 36
	                },
	                "Ь": {
	                    "x": 166,
	                    "y": 339,
	                    "width": 16,
	                    "height": 36
	                },
	                "Э": {
	                    "x": 189,
	                    "y": 339,
	                    "width": 15,
	                    "height": 36
	                },
	                "Ю": {
	                    "x": 211,
	                    "y": 339,
	                    "width": 24,
	                    "height": 36
	                },
	                "Я": {
	                    "x": 241,
	                    "y": 339,
	                    "width": 16,
	                    "height": 36
	                },
	                "а": {
	                    "x": 263,
	                    "y": 339,
	                    "width": 15,
	                    "height": 36
	                },
	                "б": {
	                    "x": 284,
	                    "y": 339,
	                    "width": 15,
	                    "height": 36
	                },
	                "в": {
	                    "x": 3,
	                    "y": 381,
	                    "width": 15,
	                    "height": 36
	                },
	                "г": {
	                    "x": 24,
	                    "y": 381,
	                    "width": 10,
	                    "height": 36
	                },
	                "д": {
	                    "x": 40,
	                    "y": 381,
	                    "width": 18,
	                    "height": 36
	                },
	                "е": {
	                    "x": 65,
	                    "y": 381,
	                    "width": 15,
	                    "height": 36
	                },
	                "ж": {
	                    "x": 86,
	                    "y": 381,
	                    "width": 22,
	                    "height": 36
	                },
	                "з": {
	                    "x": 115,
	                    "y": 381,
	                    "width": 15,
	                    "height": 36
	                },
	                "и": {
	                    "x": 136,
	                    "y": 381,
	                    "width": 16,
	                    "height": 36
	                },
	                "й": {
	                    "x": 159,
	                    "y": 381,
	                    "width": 16,
	                    "height": 36
	                },
	                "к": {
	                    "x": 181,
	                    "y": 381,
	                    "width": 15,
	                    "height": 36
	                },
	                "л": {
	                    "x": 203,
	                    "y": 381,
	                    "width": 16,
	                    "height": 36
	                },
	                "м": {
	                    "x": 226,
	                    "y": 381,
	                    "width": 20,
	                    "height": 36
	                },
	                "н": {
	                    "x": 252,
	                    "y": 381,
	                    "width": 15,
	                    "height": 36
	                },
	                "о": {
	                    "x": 274,
	                    "y": 381,
	                    "width": 15,
	                    "height": 36
	                },
	                "п": {
	                    "x": 295,
	                    "y": 381,
	                    "width": 15,
	                    "height": 36
	                },
	                "р": {
	                    "x": 3,
	                    "y": 423,
	                    "width": 15,
	                    "height": 36
	                },
	                "с": {
	                    "x": 24,
	                    "y": 423,
	                    "width": 14,
	                    "height": 36
	                },
	                "т": {
	                    "x": 45,
	                    "y": 423,
	                    "width": 12,
	                    "height": 36
	                },
	                "у": {
	                    "x": 64,
	                    "y": 423,
	                    "width": 13,
	                    "height": 36
	                },
	                "ф": {
	                    "x": 83,
	                    "y": 423,
	                    "width": 23,
	                    "height": 36
	                },
	                "х": {
	                    "x": 112,
	                    "y": 423,
	                    "width": 13,
	                    "height": 36
	                },
	                "ц": {
	                    "x": 131,
	                    "y": 423,
	                    "width": 16,
	                    "height": 36
	                },
	                "ч": {
	                    "x": 154,
	                    "y": 423,
	                    "width": 15,
	                    "height": 36
	                },
	                "ш": {
	                    "x": 175,
	                    "y": 423,
	                    "width": 24,
	                    "height": 36
	                },
	                "щ": {
	                    "x": 205,
	                    "y": 423,
	                    "width": 24,
	                    "height": 36
	                },
	                "ъ": {
	                    "x": 236,
	                    "y": 423,
	                    "width": 17,
	                    "height": 36
	                },
	                "ы": {
	                    "x": 260,
	                    "y": 423,
	                    "width": 23,
	                    "height": 36
	                },
	                "ь": {
	                    "x": 289,
	                    "y": 423,
	                    "width": 15,
	                    "height": 36
	                },
	                "э": {
	                    "x": 3,
	                    "y": 465,
	                    "width": 15,
	                    "height": 36
	                },
	                "ю": {
	                    "x": 24,
	                    "y": 465,
	                    "width": 23,
	                    "height": 36
	                },
	                "я": {
	                    "x": 53,
	                    "y": 465,
	                    "width": 15,
	                    "height": 36
	                },
	                "ѐ": {
	                    "x": 74,
	                    "y": 465,
	                    "width": 13,
	                    "height": 36
	                },
	                "ё": {
	                    "x": 93,
	                    "y": 465,
	                    "width": 15,
	                    "height": 36
	                },
	                "ђ": {
	                    "x": 115,
	                    "y": 465,
	                    "width": 16,
	                    "height": 36
	                },
	                "ѓ": {
	                    "x": 137,
	                    "y": 465,
	                    "width": 10,
	                    "height": 36
	                },
	                "є": {
	                    "x": 153,
	                    "y": 465,
	                    "width": 15,
	                    "height": 36
	                },
	                "ѕ": {
	                    "x": 174,
	                    "y": 465,
	                    "width": 14,
	                    "height": 36
	                },
	                "і": {
	                    "x": 194,
	                    "y": 465,
	                    "width": 8,
	                    "height": 36
	                },
	                "ї": {
	                    "x": 208,
	                    "y": 465,
	                    "width": 8,
	                    "height": 36
	                },
	                "ј": {
	                    "x": 223,
	                    "y": 465,
	                    "width": 8,
	                    "height": 36
	                },
	                "љ": {
	                    "x": 237,
	                    "y": 465,
	                    "width": 24,
	                    "height": 36
	                },
	                "њ": {
	                    "x": 268,
	                    "y": 465,
	                    "width": 23,
	                    "height": 36
	                },
	                "ћ": {
	                    "x": 297,
	                    "y": 465,
	                    "width": 16,
	                    "height": 36
	                }
	            },
	            "width": 320,
	            "height": 504
	        },
	        "type": "font",
	        "resourcePath": "resources/font/impact.png",
	        "id": "0265_1797_64"
	    }
	],
	
	    gameObject:[
	    {
	        "spriteSheetId": "4021_7193_32",
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
	        "name": "slotsColumn",
	        "width": 60,
	        "height": 50,
	        "type": "gameObject",
	        "commonBehaviour": [],
	        "frameAnimationIds": [],
	        "rigid": 1,
	        "groupName": "",
	        "angle": 0,
	        "id": "2146_8639_33"
	    },
	    {
	        "spriteSheetId": "9537_4496_35",
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
	        "name": "coin",
	        "width": 30,
	        "height": 30,
	        "type": "gameObject",
	        "commonBehaviour": [],
	        "frameAnimationIds": [
	            "7563_6764_37"
	        ],
	        "rigid": 0,
	        "groupName": "",
	        "angle": 0,
	        "id": "6542_0984_36"
	    }
	],
	
	    layer:[
	    {
	        "name": "mainLayer",
	        "type": "layer",
	        "gameObjectProps": [
	            {
	                "spriteSheetId": "4021_7193_32",
	                "pos": {
	                    "x": 37,
	                    "y": 66
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
	                "name": "slotsColumn",
	                "width": 64,
	                "height": 52,
	                "type": "gameObject",
	                "commonBehaviour": [],
	                "frameAnimationIds": [],
	                "rigid": 1,
	                "groupName": "",
	                "angle": 0,
	                "protoId": "2146_8639_33",
	                "id": "3605_4962_40",
	                "alpha": 1
	            },
	            {
	                "spriteSheetId": "4021_7193_32",
	                "pos": {
	                    "x": 116,
	                    "y": 66
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
	                "name": "slotsColumn",
	                "width": 64,
	                "height": 52,
	                "type": "gameObject",
	                "commonBehaviour": [],
	                "frameAnimationIds": [],
	                "rigid": 1,
	                "groupName": "",
	                "angle": 0,
	                "protoId": "2146_8639_33",
	                "id": "2522_8532_41"
	            },
	            {
	                "spriteSheetId": "4021_7193_32",
	                "pos": {
	                    "x": 197,
	                    "y": 66
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
	                "name": "slotsColumn",
	                "width": 64,
	                "height": 52,
	                "type": "gameObject",
	                "commonBehaviour": [],
	                "frameAnimationIds": [],
	                "rigid": 1,
	                "groupName": "",
	                "angle": 0,
	                "protoId": "2146_8639_33",
	                "id": "1745_2194_42"
	            },
	            {
	                "pos": {
	                    "x": 18,
	                    "y": 18
	                },
	                "scale": {
	                    "x": 1,
	                    "y": 1
	                },
	                "height": 29,
	                "text": "",
	                "width": 0,
	                "type": "userInterface",
	                "subType": "textField",
	                "groupName": "",
	                "angle": 0,
	                "name": "scoreLabel",
	                "protoId": {},
	                "id": "0790_6321_63",
	                "fontId": "6991_3497_4"
	            },
	            {
	                "pos": {
	                    "x": 140,
	                    "y": 100
	                },
	                "scale": {
	                    "x": 1,
	                    "y": 1
	                },
	                "height": 29,
	                "text": "",
	                "width": 0,
	                "type": "userInterface",
	                "subType": "textField",
	                "groupName": "",
	                "angle": 0,
	                "name": "winLabel",
	                "protoId": null,
	                "id": "6368_9704_65"
	            },
	            {
	                "pos": {
	                    "x": 18,
	                    "y": 152
	                },
	                "scale": {
	                    "x": 1,
	                    "y": 1
	                },
	                "height": 36,
	                "text": "bet",
	                "width": 39,
	                "type": "userInterface",
	                "subType": "textField",
	                "groupName": "",
	                "angle": 0,
	                "name": "textField3",
	                "protoId": null,
	                "id": "8688_5721_0",
	                "fontId": "0265_1797_64"
	            },
	            {
	                "pos": {
	                    "x": 72,
	                    "y": 154
	                },
	                "scale": {
	                    "x": 1,
	                    "y": 1
	                },
	                "height": 29,
	                "text": "+",
	                "width": 15,
	                "type": "userInterface",
	                "subType": "textField",
	                "groupName": "",
	                "angle": 0,
	                "name": "betPlusLabel",
	                "protoId": null,
	                "id": "0068_5684_1",
	                "fontId": "6991_3497_4"
	            },
	            {
	                "pos": {
	                    "x": 103,
	                    "y": 153
	                },
	                "scale": {
	                    "x": 1,
	                    "y": 1
	                },
	                "height": 29,
	                "text": "-",
	                "width": 15,
	                "type": "userInterface",
	                "subType": "textField",
	                "groupName": "",
	                "angle": 0,
	                "name": "betMinusLabel",
	                "protoId": null,
	                "id": "6621_2286_2",
	                "fontId": "6991_3497_4"
	            },
	            {
	                "pos": {
	                    "x": 142,
	                    "y": 157
	                },
	                "scale": {
	                    "x": 1,
	                    "y": 1
	                },
	                "height": 29,
	                "text": "0",
	                "width": 15,
	                "type": "userInterface",
	                "subType": "textField",
	                "groupName": "",
	                "angle": 0,
	                "name": "betLabel",
	                "protoId": {},
	                "id": "7190_5206_3",
	                "fontId": "6991_3497_4"
	            },
	            {
	                "pos": {
	                    "x": 139,
	                    "y": 13
	                },
	                "scale": {
	                    "x": 1,
	                    "y": 1
	                },
	                "height": 36,
	                "text": "JackPot",
	                "width": 91,
	                "type": "userInterface",
	                "subType": "textField",
	                "groupName": "",
	                "angle": 0,
	                "name": "textField7",
	                "protoId": {},
	                "id": "2570_1987_4",
	                "fontId": "0265_1797_64",
	                "alpha": 1
	            },
	            {
	                "pos": {
	                    "x": 240,
	                    "y": 18
	                },
	                "scale": {
	                    "x": 1,
	                    "y": 1
	                },
	                "height": 29,
	                "text": "0",
	                "width": 15,
	                "type": "userInterface",
	                "subType": "textField",
	                "groupName": "",
	                "angle": 0,
	                "name": "jackPotLabel",
	                "protoId": null,
	                "id": "5858_5431_5",
	                "fontId": "6991_3497_4"
	            },
	            {
	                "pos": {
	                    "x": 259,
	                    "y": 136
	                },
	                "scale": {
	                    "x": 1,
	                    "y": 1
	                },
	                "height": 36,
	                "text": "<<<",
	                "width": 45,
	                "type": "userInterface",
	                "subType": "textField",
	                "groupName": "",
	                "angle": 0,
	                "alpha": 1,
	                "name": "textBack",
	                "protoId": null,
	                "id": "3678_7561_6",
	                "fontId": "0265_1797_64"
	            }
	        ],
	        "id": "0679_1823_35"
	    },
	    {
	        "name": "mainLayer",
	        "type": "layer",
	        "gameObjectProps": [],
	        "id": "7338_5966_29"
	    },
	    {
	        "name": "mainLayer",
	        "type": "layer",
	        "gameObjectProps": [
	            {
	                "pos": {
	                    "x": 108,
	                    "y": 79
	                },
	                "scale": {
	                    "x": 1,
	                    "y": 1
	                },
	                "height": 36,
	                "text": "...",
	                "width": 15,
	                "type": "userInterface",
	                "subType": "textField",
	                "groupName": "",
	                "angle": 0,
	                "alpha": 1,
	                "name": "progress",
	                "protoId": null,
	                "id": "7466_0967_45",
	                "fontId": "0265_1797_64"
	            },
	            {
	                "spriteSheetId": "9537_4496_35",
	                "pos": {
	                    "x": 141,
	                    "y": 128
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
	                "name": "coin",
	                "width": 30,
	                "height": 30,
	                "type": "gameObject",
	                "commonBehaviour": [],
	                "frameAnimationIds": [
	                    "7563_6764_37"
	                ],
	                "rigid": 0,
	                "groupName": "",
	                "angle": 0,
	                "alpha": 1,
	                "protoId": "6542_0984_36",
	                "id": "1546_4644_150"
	            }
	        ],
	        "id": "4889_0216_35"
	    },
	    {
	        "name": "mainLayer",
	        "type": "layer",
	        "gameObjectProps": [
	            {
	                "pos": {
	                    "x": 53,
	                    "y": 58
	                },
	                "scale": {
	                    "x": 1,
	                    "y": 1
	                },
	                "height": 29,
	                "text": "Start!!!!!",
	                "width": 150,
	                "type": "userInterface",
	                "subType": "textField",
	                "groupName": "",
	                "angle": 0,
	                "alpha": 1,
	                "name": "textField1",
	                "protoId": {},
	                "id": "2764_5156_154",
	                "fontId": "6991_3497_4"
	            },
	            {
	                "spriteSheetId": "4021_7193_32",
	                "pos": {
	                    "x": 116,
	                    "y": 96
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
	                "name": "slotsColumn",
	                "width": 64,
	                "height": 52,
	                "type": "gameObject",
	                "commonBehaviour": [],
	                "frameAnimationIds": [],
	                "rigid": 1,
	                "groupName": "",
	                "angle": 0,
	                "alpha": 1,
	                "protoId": "2146_8639_33",
	                "id": "6961_5750_155"
	            },
	            {
	                "spriteSheetId": "9537_4496_35",
	                "pos": {
	                    "x": 134,
	                    "y": 22
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
	                "name": "coin",
	                "width": 30,
	                "height": 30,
	                "type": "gameObject",
	                "commonBehaviour": [],
	                "frameAnimationIds": [
	                    "7563_6764_37"
	                ],
	                "rigid": 0,
	                "groupName": "",
	                "angle": 0,
	                "alpha": 1,
	                "protoId": "6542_0984_36",
	                "id": "5056_3944_156"
	            },
	            {
	                "pos": {
	                    "x": 15,
	                    "y": 162
	                },
	                "scale": {
	                    "x": 1,
	                    "y": 1
	                },
	                "height": 29,
	                "text": "money:",
	                "width": 90,
	                "type": "userInterface",
	                "subType": "textField",
	                "groupName": "",
	                "angle": 0,
	                "alpha": 1,
	                "name": "textField2",
	                "protoId": null,
	                "id": "3127_9759_4",
	                "fontId": "6991_3497_4"
	            },
	            {
	                "pos": {
	                    "x": 124,
	                    "y": 157
	                },
	                "scale": {
	                    "x": 1,
	                    "y": 1
	                },
	                "height": 36,
	                "text": "",
	                "width": 0,
	                "type": "userInterface",
	                "subType": "textField",
	                "groupName": "",
	                "angle": 0,
	                "alpha": 1,
	                "name": "txtMoney",
	                "protoId": null,
	                "id": "5198_2468_5",
	                "fontId": "0265_1797_64"
	            }
	        ],
	        "id": "0843_0759_152"
	    }
	],
	
	    scene:[
	    {
	        "tileMap": {
	            "_spriteSheet": {
	                "resourcePath": "resources/spriteSheet/slotsColumn.png",
	                "name": "slotsColumn",
	                "width": 64,
	                "height": 512,
	                "type": "spriteSheet",
	                "numOfFramesH": 1,
	                "numOfFramesV": 1,
	                "id": "4021_7193_32"
	            },
	            "spriteSheetId": "",
	            "width": 0,
	            "height": 0,
	            "data": [],
	            "_tilesInScreenX": 5,
	            "_tilesInScreenY": 0
	        },
	        "name": "mainScene",
	        "type": "scene",
	        "layerProps": [
	            {
	                "type": "layer",
	                "protoId": "0679_1823_35",
	                "id": "0583_1855_36"
	            }
	        ],
	        "colorBG": [
	            243,
	            255,
	            243
	        ],
	        "id": "2590_5247_34",
	        "useBG": 1,
	        "alpha": 1,
	        "width": 0,
	        "height": 0
	    },
	    {
	        "tileMap": {
	            "_spriteSheet": null,
	            "spriteSheetId": null,
	            "width": 0,
	            "height": 0,
	            "data": []
	        },
	        "name": "progressScene",
	        "type": "scene",
	        "layerProps": [
	            {
	                "type": "layer",
	                "protoId": "4889_0216_35",
	                "id": "2188_0242_36"
	            }
	        ],
	        "colorBG": [
	            225,
	            182,
	            255
	        ],
	        "id": "6337_8986_28",
	        "useBG": 0
	    },
	    {
	        "tileMap": {
	            "_spriteSheet": null,
	            "spriteSheetId": null,
	            "width": 0,
	            "height": 0,
	            "data": []
	        },
	        "name": "introScene",
	        "type": "scene",
	        "layerProps": [
	            {
	                "type": "layer",
	                "protoId": "0843_0759_152",
	                "id": "0309_0792_153"
	            }
	        ],
	        "alpha": 1,
	        "colorBG": [
	            255,
	            255,
	            255
	        ],
	        "width": 0,
	        "height": 0,
	        "id": "5220_1729_151"
	    }
	],
	
	    particleSystem:[
	    {
	        "gameObjectId": "6542_0984_36",
	        "numOfParticlesToEmit": {
	            "from": 10,
	            "to": 20
	        },
	        "particleAngle": {
	            "from": 6.808159427320758,
	            "to": 2.5365589761437217
	        },
	        "particleVelocity": {
	            "from": 100,
	            "to": 200
	        },
	        "particleLiveTime": {
	            "from": 1000,
	            "to": 3000
	        },
	        "emissionRadius": 50,
	        "name": "coins",
	        "type": "particleSystem",
	        "id": "1467_5345_38"
	    }
	],
	
	    gameProps:{
	    "width": 320,
	    "height": 200,
	    "scaleStrategy": "2",
	    "preloadingSceneId": "6337_8986_28",
	    "startSceneId": "5220_1729_151"
	}
	
	};
	
	var bundle = require('bundle');
	bundle.prepare(data);
	
	if (!bundle.sceneList.size()) throw 'at least one scene must be created';
	
	var renderer = require('renderer');
	var game = require('game');
	var keyboard = require('keyboard');
	
	
	window.addEventListener('load',function(){
	    document.body.ontouchstart = function(e){
	        e.preventDefault();
	        return false;
	    };
	
	    renderer.init();
	    require('mouse');
	    var startScene = bundle.sceneList.find({id:bundle.gameProps.startSceneId}) || bundle.sceneList.get(0);
	    game.setScene(startScene);
	});
    
}};
require('index');