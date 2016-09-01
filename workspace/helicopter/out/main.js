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
	
	
	
	exports.commonBehaviour = commonBehaviour;
	
	var scripts = {};
	scripts.gameObject = {};
	scripts.scene = {};
	
	
	scripts.gameObject['cloudSmall.js'] = function(exports,self){
	    
	function onCreate() {
	
	}
	
	function onUpdate(time) {
	
	}
	
	function onDestroy() {
	
	}
	    exports.onCreate = onCreate;
	    exports.onUpdate = onUpdate;
	    exports.onDestroy = onDestroy;
	};
	
	scripts.gameObject['fire.js'] = function(exports,self){
	    
	function onCreate() {
	
	}
	
	function onUpdate(time) {
	
	}
	
	function onDestroy() {
	
	}
	    exports.onCreate = onCreate;
	    exports.onUpdate = onUpdate;
	    exports.onDestroy = onDestroy;
	};
	
	scripts.gameObject['helicopter.js'] = function(exports,self){
	    
	var psBurn = require('bundle').instance().particleSystemList.find({name:'burn'});
	var psFire = require('bundle').instance().particleSystemList.find({name:'fire'});
	var sceneManager = require('sceneManager').instance();
	var soundManager = require('soundManager').instance();
	var injuredAnim = self.getFrAnimation('injured');
	var math = require('math');
	var health = 100;
	
	function onCreate() {
	    soundManager.play('engine',true);
	    self.velX = 200;
	    self.getFrAnimation('fly').play();
	    self.on('click',function(e){
	        psFire.emit(e.screenX,e.screenY);
	        health-=10;
	        if (health<5) injuredAnim.play();
	        if (health && health<5) self.velY = 50;
	        if (health<0) health = 0;
	    });
	    
	}
	
	function onUpdate(time) {
	    var n = math.getRandomInRange(0,health);
	    if (!health && n<=1) {
	        psFire.emit(self.posX+20,self.posY+20);
	        soundManager.play('cracked',true);
	    }    
	    if (n==0) psBurn.emit(self.posX+20,self.posY+20);
	    if (self.posX>600) self.posX = -300;
	    if (self.posY>300)  sceneManager.setSceneByName('win');
	    
	}
	
	function onDestroy() {
	
	}
	    exports.onCreate = onCreate;
	    exports.onUpdate = onUpdate;
	    exports.onDestroy = onDestroy;
	};
	;
	
	scripts.scene['main.js'] = function(exports,self){
	    
	function onCreate() {
	
	}
	
	function onUpdate(time) {
	
	}
	
	function onDestroy() {
	
	}
	    exports.onCreate = onCreate;
	    exports.onUpdate = onUpdate;
	    exports.onDestroy = onDestroy;
	};
	
	scripts.scene['win.js'] = function(exports,self){
	    
	function onCreate() {
	
	}
	
	function onUpdate(time) {
	
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
	
	    var resolveClick = function(e){
	        self.isMouseDown = true;
	        var scene = sceneManager.getCurrScene();
	        if (!scene) return;
	        var point = {
	            x: e.clientX / globalScale.x * deviceScale,
	            y: e.clientY / globalScale.y * deviceScale
	        };
	        scene._layers.someReversed(function(l){
	            var found = false;
	            l._gameObjects.someReversed(function(g){
	                if (
	                    math.isPointInRect(point,g.getRect())
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
	        scene.trigger('mouseMove',{
	            screenX: e.clientX / globalScale.x,
	            screenY: e.clientY / globalScale.y
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
	var context = window.AudioContext && new window.AudioContext();
	
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

modules['math'] = {code: function(module,exports){
	exports.isPointInRect = function(point,rect) {
	    return  point.x>rect.x &&
	        point.x<(rect.x+rect.width) &&
	        point.y>rect.y &&
	        point.y<(rect.y+rect.height);
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

modules['collections'] = {code: function(module,exports){
	
	exports.List = function () {
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
	
	exports.Behaviour = exports.BaseModel.extend({});
	
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
	    /**
	     * @deprecated
	     */
	    getScene: function(){
	        // todo remove
	        console.warn('BaseGameObject:getScene is deprecated. Use sceneManager.getCurrScene instead');
	        return this._layer._scene;
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
	        renderer.getContext().drawImage(
	            this._spriteSheet._textureInfo,
	            this._sprPosX,
	            this._sprPosY,
	            this._spriteSheet._frameWidth,
	            this._spriteSheet._frameHeight,
	            this.posX,
	            this.posY,
	            this.width,
	            this.height
	        );
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
	    _twins:null,
	    useBG:false,
	    colorBG:null,
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
	    findGameObject: function(name){
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
	            this.width = 0;
	            for (var i=0,max=text.length;i<max;i++) {
	                this._chars.push(text[i]);
	                var currSymbolInFont = this._font.fontContext.symbols[text[i]] || this._font.fontContext.symbols[' '];
	                this.width+=currSymbolInFont.width;
	            }
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
	            var posY = this.posY;
	            var self = this;
	            this._chars.forEach(function(ch){
	                var charInCtx = self._font.fontContext.symbols[ch]||self._font.fontContext.symbols['?'];
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
	    construct: function(){
	        this._particles = [];
	        if (!this.numOfParticlesToEmit) this.numOfParticlesToEmit = {from:1,to:10};
	        if (!this.particleAngle) this.particleAngle = {from:0,to:0};
	        if (this.particleAngle.to>this.particleAngle.from) this.particleAngle.from += 2*Math.PI;
	        if (!this.particleVelocity) this.particleVelocity = {from:1,to:100};
	        if (!this.particleLiveTime) this.particleLiveTime = {from:100,to:1000};
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
	                posX:x,
	                posY:y
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
	
	var CanvasContext = function(){
	
	    var ctx;
	
	    this.init = function(canvas) {
	        ctx = canvas.getContext('2d');
	    };
	
	    this.scale = function(scaleX,scaleY){
	        ctx.scale(scaleX,scaleY);
	    };
	
	    this.drawImage = function(
	        textureInfo,
	        fromX,
	        fromY,
	        fromW,
	        fromH,
	        toX,
	        toY,
	        toW,
	        toH
	    ) {
	
	        ctx.drawImage(
	            textureInfo.image,
	            fromX,
	            fromY,
	            fromW,
	            fromH,
	            toX,
	            toY,
	            toW,
	            toH
	        );
	
	    };
	
	    this.loadTextureInfo = function(url,opts,callBack){
	
	        var img = new Image(url);
	        img.onload = function(){
	            var textureInfo = {
	                image:img
	            };
	            callBack(textureInfo);
	        };
	        img.onerror=function(e){throw 'can not load image with url '+ url};
	        img.src = url;
	
	    };
	
	    this.clear = function(w,h){
	
	        ctx.fillStyle="#FFFFFF";
	        ctx.fillRect(
	            0,
	            0,
	            w,
	            h);
	
	    }
	
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
	        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
	        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
	        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
	        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
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
	var glUtils = require('glUtils');
	var Shader = require('shader').Shader;
	var shaderSources = require('shaderSources');
	var VertexBuffer = require('vertexBuffer').VertexBuffer;
	var FrameBuffer = require('frameBuffer').FrameBuffer;
	var Texture = require('texture').Texture;
	var mat4 = require('mat4');
	var utils = require('utils');
	
	var GlContext = function () {
	
	    var gl;
	    var mCanvas;
	    var matrixStack = new mat4.MatrixStack();
	    var simpleTextureShader;
	    var vertexPositionBuffer;
	    var vertexTextureBuffer;
	    var frameBuffer;
	    var vertexPositionData = [
	        0, 0, 0,
	        0, 1, 0,
	        1, 0, 0,
	        1, 0, 0,
	        0, 1, 0,
	        1, 1, 0
	    ];
	    var vertexTextureData = [
	        0, 0,
	        0, 1,
	        1, 0,
	        1, 0,
	        0, 1,
	        1, 1
	    ];
	
	
	    this.init = function (canvas) {
	
	        mCanvas = canvas;
	        gl = canvas.getContext("webgl", {alpha: false}) ||  canvas.getContext("experimental-webgl", {alpha: false});
	
	        simpleTextureShader = new Shader(gl,shaderSources.SHADERS_SRC.DRAW_WITH_TEXTURE[0],shaderSources.SHADERS_SRC.DRAW_WITH_TEXTURE[1]);
	        simpleTextureShader.bind();
	
	        vertexPositionBuffer = new VertexBuffer(gl,simpleTextureShader);
	        vertexPositionBuffer.bindBufferData(vertexPositionData,3,'a_position');
	
	        vertexTextureBuffer = new VertexBuffer(gl,simpleTextureShader);
	        vertexTextureBuffer.bindBufferData(vertexTextureData,2,'a_texcoord');
	
	        frameBuffer = new FrameBuffer(gl,mCanvas.width,mCanvas.height);
	
	        gl.disable(gl.CULL_FACE);
	        gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
	        gl.enable(gl.BLEND);
	        this.resize(mCanvas.width,mCanvas.height)
	
	    };
	
	    function createPositionMatrix(dstX, dstY, dstWidth, dstHeight) {
	        // this matrix will convert from pixels to clip space
	        var projectionMatrix = mat4.make2DProjection(mCanvas.width, mCanvas.height, 500);
	        //var aspect = mCanvas.width / mCanvas.height;
	        //var projectionMatrix = Mat4.makePerspective(1.047, aspect, 1, 2000);
	
	
	        // this matrix will scale our 1 unit quad
	        // from 1 unit to dstWidth, dstHeight units
	        var scaleMatrix = mat4.makeScale(dstWidth, dstHeight, 1);
	
	        // this matrix will translate our quad to dstX, dstY
	        var translationMatrix = mat4.makeTranslation(dstX, dstY, 0);
	
	        // multiply them all togehter
	        var matrix = mat4.matrixMultiply(scaleMatrix, translationMatrix);
	        matrix = mat4.matrixMultiply(matrix, matrixStack.getCurrentMatrix());
	        matrix = mat4.matrixMultiply(matrix, projectionMatrix);
	        matrix = mat4.matrixMultiply(matrix, mat4.makeZToWMatrix(0.05));
	
	        return matrix;
	    }
	
	    function createTextureMatrix(srcX, srcY, srcWidth, srcHeight, texWidth, texHeight){
	        // Because texture coordinates go from 0 to 1
	        // and because our texture coordinates are already a unit quad
	        // we can select an area of the texture by scaling the unit quad
	        // down
	        var texScaleMatrix = mat4.makeScale(srcWidth / texWidth , srcHeight / texHeight, 1);
	        var texTranslationMatrix = mat4.makeTranslation(srcX / texWidth, srcY / texHeight, 0);
	
	        // multiply them together
	        return mat4.matrixMultiply(texScaleMatrix, texTranslationMatrix);
	    }
	
	
	    var cache = {};
	
	
	    this.loadTextureInfo = function (url, opts, callBack) {
	
	        if (cache.url) {
	            callBack(cache[url]);
	            return;
	        }
	        if (opts.type=='base64') {
	            url = utils.getBase64prefix('image',opts.fileName) + url;
	        }
	        var img = new Image();
	        var texture = new Texture(gl,img);
	
	        img.addEventListener('load', function () {
	            texture.setSize({
	                width:img.width,
	                height:img.height
	            });
	            cache[url] = texture;
	            callBack(texture);
	        });
	        img.onerror=function(e){throw 'can not load image with url '+ url};
	        img.src = url;
	    };
	
	
	    var currTex = null;
	
	    this.drawImage = function (texture,
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
	
	
	        simpleTextureShader.setUniform('u_matrix',createPositionMatrix(dstX, dstY, srcWidth, srcHeight));
	        simpleTextureShader.setUniform('u_textureMatrix',createTextureMatrix(srcX, srcY, srcWidth, srcHeight, texWidth, texHeight));
	
	        // draw the quad (2 triangles, 6 vertices)
	        gl.drawArrays(gl.TRIANGLES, 0, 6);
	    };
	
	    this.clear = function () {
	        //gl.colorMask(false, false, false, true);
	        gl.clearColor(1, 1, 1, 1);
	        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
	    };
	
	
	    this.fillRect = function (x, y, w, h, color) {
	        simpleTextureShader.setUniform('u_matrix',createPositionMatrix(x, y, w, h));
	        gl.drawArrays(gl.TRIANGLES, 0, 6);
	    };
	
	    this.strokeRect = function (x, y, w, h, color) {
	        this.fillRect(x, y, w, 1, color);
	        this.fillRect(x, y + h, w, 1, color);
	        this.fillRect(x, y, 1, h, color);
	        this.fillRect(x + w, y, 1, h, color);
	    };
	
	    this.point = function (x, y, color) {
	        this.fillRect(x, y, 1, 1, color);
	    };
	
	    this.line = function (x1, y1, x2, y2, color) {
	        simpleTextureShader.setUniform('u_matrix',createPositionMatrix(x1, y1, x2 - x1, y2 - y1));
	        gl.drawArrays(gl.LINES, 0, 6);
	    };
	
	    this.save = function() {
	        matrixStack.save();
	    };
	
	    this.resize = function (w,h) {
	        gl.viewport(0, 0, w,h);
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
	
	    this.beginFrameBuffer = function(){
	        this.save();
	        frameBuffer.bind();
	    };
	
	    this.flipFrameBuffer = function(){
	        this.restore();
	        this.save();
	        this.translate(0,mCanvas.height);
	        this.scale(1,-1);
	        frameBuffer.unbind();
	        gl.bindTexture(gl.TEXTURE_2D, frameBuffer.getGlTexture());
	        simpleTextureShader.setUniform('u_matrix',createPositionMatrix(0,0,mCanvas.width, mCanvas.height),1);
	        simpleTextureShader.setUniform('u_textureMatrix',createTextureMatrix(0,0,mCanvas.width, mCanvas.height,mCanvas.width, mCanvas.height));
	        gl.drawArrays(gl.TRIANGLES, 0, 6);
	        this.restore();
	    };
	
	    this.getGL = function(){
	        return gl;
	    }
	
	};
	
	var instance = null;
	
	module.exports.instance = function(){
	    if (instance==null) instance = new GlContext();
	    return instance;
	};
	
}};

modules['glContext_'] = {code: function(module,exports){
	
	var glUtils = require('glUtils');
	var utils = require('utils');
	
	var GlContext = function(){
	
	    var gl;
	    var mCanvas;
	    var mScaleX = 1, mScaleY = 1;
	    var matrixLocation;
	    var textureMatrixLocation;
	
	    var vShader = [
	            'attribute vec4 a_position; ',
	            'attribute vec2 a_texcoord; ',
	
	            'uniform mat4 u_matrix; ',
	            'uniform mat4 u_textureMatrix; ',
	
	            'varying vec2 v_texcoord; ',
	
	            'void main() { ',
	                'gl_Position = u_matrix * a_position; ',
	                'v_texcoord = (u_textureMatrix * vec4(a_texcoord, 0, 1)).xy; ',
	            '}'
	        ].join('');
	
	
	    var fShader =
	            [
	            'precision mediump float; ',
	
	            'varying vec2 v_texcoord;',
	
	            'uniform sampler2D texture;',
	
	            'void main() { ',
	            '    gl_FragColor = texture2D(texture, v_texcoord);',
	            '} '
	            ].join('');
	
	
	    this.init = function(canvas){
	
	        mCanvas = canvas;
	        gl = canvas.getContext("webgl",{ alpha: false });
	        var program = glUtils.createProgramFromSources(gl, [vShader, fShader]);
	        gl.useProgram(program);
	
	        // look up where the vertex data needs to go.
	        var positionLocation = gl.getAttribLocation(program, "a_position");
	        var texcoordLocation = gl.getAttribLocation(program, "a_texcoord");
	
	        // lookup uniforms
	        matrixLocation = gl.getUniformLocation(program, "u_matrix");
	        textureMatrixLocation = gl.getUniformLocation(program, "u_textureMatrix");
	
	        // Create a buffer.
	        var buffer = gl.createBuffer();
	        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
	        gl.enableVertexAttribArray(positionLocation);
	        gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);
	
	        gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
	        gl.enable(gl.BLEND);
	
	        // Put a unit quad in the buffer
	        var positions = [
	            0, 0,
	            0, 1,
	            1, 0,
	            1, 0,
	            0, 1,
	            1, 1
	        ];
	        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);
	
	        // Create a buffer for texture coords
	        buffer = gl.createBuffer();
	        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
	        gl.enableVertexAttribArray(texcoordLocation);
	        gl.vertexAttribPointer(texcoordLocation, 2, gl.FLOAT, false, 0, 0);
	
	        // Put texcoords in the buffer
	        var texcoords = [
	            0, 0,
	            0, 1,
	            1, 0,
	            1, 0,
	            0, 1,
	            1, 1
	        ];
	        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(texcoords), gl.STATIC_DRAW);
	
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
	        var tex = gl.createTexture();
	        gl.bindTexture(gl.TEXTURE_2D, tex);
	        // Fill the texture with a 1x1 blue pixel.
	        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE,
	            new Uint8Array([0, 0, 255, 255]));
	
	        // let's assume all images are not a power of 2
	        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
	        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
	        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
	
	        var textureInfo = {
	            width: 1,   // we don't know the size until it loads
	            height: 1,
	            texture: tex
	        };
	        var img = new Image();
	        img.onload = function() {
	            textureInfo.width = img.width;
	            textureInfo.height = img.height;
	
	            gl.bindTexture(gl.TEXTURE_2D, textureInfo.texture);
	            gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img);
	            cache[url] = textureInfo;
	            callBack(textureInfo);
	        };
	        img.onerror=function(e){throw 'can not load image with url '+ url};
	        img.src = url;
	    };
	
	    var currTex = null;
	
	    this.drawImage = function(
	        textureInfo,
	        srcX, srcY, srcWidth, srcHeight,
	        dstX, dstY, dstWidth, dstHeight) {
	
	        var tex = textureInfo.texture;
	        var texWidth = textureInfo.width;
	        var texHeight = textureInfo.height;
	
	
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
	        if (dstWidth === undefined) {
	            dstWidth = srcWidth;
	        }
	        if (dstHeight === undefined) {
	            dstHeight = srcHeight;
	        }
	
	        if (currTex!=tex){
	            gl.bindTexture(gl.TEXTURE_2D, tex);
	            currTex = tex;
	        }
	
	        // this matirx will convert from pixels to clip space
	        var projectionMatrix = glUtils.make2DProjection(mCanvas.width, mCanvas.height, 1);
	
	        // this matrix will scale our 1 unit quad
	        // from 1 unit to dstWidth, dstHeight units
	        var scaleMatrix = glUtils.makeScale(dstWidth*mScaleX, dstHeight*mScaleY, 1);
	
	        // this matrix will translate our quad to dstX, dstY
	        var translationMatrix = glUtils.makeTranslation(dstX*mScaleX, dstY*mScaleY, 0);
	
	        // multiply them all togehter
	        var matrix = glUtils.matrixMultiply(scaleMatrix, translationMatrix);
	        matrix = glUtils.matrixMultiply(matrix, projectionMatrix);
	
	        // Set the matrix.
	        gl.uniformMatrix4fv(matrixLocation, false, matrix);
	
	        // Because texture coordinates go from 0 to 1
	        // and because our texture coordinates are already a unit quad
	        // we can select an area of the texture by scaling the unit quad
	        // down
	        var texScaleMatrix = glUtils.makeScale(srcWidth / texWidth, srcHeight / texHeight, 1);
	        var texTranslationMatrix = glUtils.makeTranslation(srcX / texWidth, srcY / texHeight, 0);
	
	        if (texWidth==64) {
	            gl.blendFunc(gl.ONE, gl.ONE);
	        } else {
	            gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
	        }
	        // multiply them together
	        var texMatrix = glUtils.matrixMultiply(texScaleMatrix, texTranslationMatrix);
	
	        // Set the texture matrix.
	        gl.uniformMatrix4fv(textureMatrixLocation, false, texMatrix);
	
	        // draw the quad (2 triangles, 6 vertices)
	        gl.drawArrays(gl.TRIANGLES, 0, 6);
	    };
	
	    this.clear = function(color) {
	        //gl.colorMask(false, false, false, true);
	        gl.clearColor(color[0]/255,color[1]/255,color[2]/255,1);
	        gl.clear(gl.COLOR_BUFFER_BIT);
	    };
	
	    this.scale = function(scaleX,scaleY){
	        mScaleX = scaleX;
	        mScaleY = scaleY;
	        gl.viewport(0, 0, mCanvas.width, mCanvas.height);
	    };
	
	};
	
	var instance = null;
	
	module.exports.instance = function(){
	    if (instance==null) instance = new GlContext();
	    return instance;
	};
}};

modules['glUtils'] = {code: function(module,exports){
	var mat4 = require('mat4');
	
	function compileShader(gl, shaderSource, shaderType) {
	    // Create the shader object
	    var shader = gl.createShader(shaderType);
	    gl.shaderSource(shader, shaderSource);
	    gl.compileShader(shader);
	
	    // Check the compile status
	    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
	        console.error(gl.getShaderInfoLog(shader));
	        gl.deleteShader(shader);
	        return null;
	    }
	
	    return shader;
	}
	
	
	module.exports.createProgram = function (gl, vShaderSource, fShaderSource) {
	    var program = gl.createProgram();
	    var vShader = compileShader(gl, vShaderSource, gl.VERTEX_SHADER);
	    var fShader = compileShader(gl, fShaderSource, gl.FRAGMENT_SHADER);
	    if (!(vShader && fShader)) {
	        console.error('Could not compile shader');
	        return null;
	    }
	    gl.attachShader(program, vShader);
	    gl.attachShader(program, fShader);
	    gl.linkProgram(program);
	
	    // Check the linking status
	    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
	        console.error('Could not initialize shader');
	        console.error('gl.VALIDATE_STATUS', gl.getProgramParameter(program, gl.VALIDATE_STATUS));
	        console.error('gl.getError()', gl.getError());
	        // if there is a program info log, log it
	        if (gl.getProgramInfoLog(program) !== '') {
	            console.warn('Warning: gl.getProgramInfoLog()', gl.getProgramInfoLog(program));
	        }
	
	        gl.deleteProgram(program);
	        program = null;
	        return null;
	    }
	    return program;
	};
	
	
	module.exports.extractUniforms = function (gl, program) {
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
	            location: gl.getUniformLocation(program, name)
	            //value:defaultValue(type, uniformData.size)
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
	
	
	module.exports.getUniformSetter = function(uniform){
	    if (uniform.size==1) {
	        switch (uniform.type) {
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
	        switch (uniform.type) {
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
	
	
	
	module.exports.MatrixStack = function () {
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

modules['mat4'] = {code: function(module,exports){
	
	exports.makeIdentity = function () {
	    return new Float32Array([
	        1, 0, 0, 0,
	        0, 1, 0, 0,
	        0, 0, 1, 0,
	        0, 0, 0, 1
	    ]);
	};
	
	exports.make2DProjection = function (width, height, depth) {
	    // Note: This matrix flips the Y axis so 0 is at the top.
	    return new Float32Array([
	        2 / width, 0, 0, 0,
	        0, - 2 / height, 0, 0,
	        0, 0, 2 / depth, 0,
	        -1, 1, 0, 1
	    ]);
	};
	
	exports.makePerspective = function (fieldOfViewInRadians, aspect, near, far) {
	    var f = Math.tan(Math.PI * 0.5 - 0.5 * fieldOfViewInRadians);
	    var rangeInv = 1.0 / (near - far);
	
	    return new Float32Array([
	        f / aspect, 0, 0, 0,
	        0, f, 0, 0,
	        0, 0, (near + far) * rangeInv, -1,
	        0, 0, near * far * rangeInv * 2, 0
	    ]);
	};
	
	exports.makeTranslation = function (tx, ty, tz) {
	    return new Float32Array([
	        1, 0, 0, 0,
	        0, 1, 0, 0,
	        0, 0, 1, 0,
	        tx, ty, tz, 1
	    ]);
	};
	
	exports.makeXRotation = function (angleInRadians) {
	    var c = Math.cos(angleInRadians);
	    var s = Math.sin(angleInRadians);
	
	    return new Float32Array([
	        1, 0, 0, 0,
	        0, c, s, 0,
	        0, -s, c, 0,
	        0, 0, 0, 1
	    ]);
	};
	
	exports.makeYRotation = function (angleInRadians) {
	    var c = Math.cos(angleInRadians);
	    var s = Math.sin(angleInRadians);
	
	    return new Float32Array([
	        c, 0, -s, 0,
	        0, 1, 0, 0,
	        s, 0, c, 0,
	        0, 0, 0, 1
	    ]);
	};
	
	exports.makeZRotation = function (angleInRadians) {
	    var c = Math.cos(angleInRadians);
	    var s = Math.sin(angleInRadians);
	    return new Float32Array([
	        c, s, 0, 0,
	        -s, c, 0, 0,
	        0, 0, 1, 0,
	        0, 0, 0, 1
	    ]);
	};
	
	exports.makeScale = function (sx, sy, sz) {
	    return new Float32Array([
	        sx, 0, 0, 0,
	        0, sy, 0, 0,
	        0, 0, sz, 0,
	        0, 0, 0, 1
	    ]);
	};
	
	exports.makeZToWMatrix = function(fudgeFactor) {
	    return [
	        1, 0, 0, 0,
	        0, 1, 0, 0,
	        0, 0, 1, fudgeFactor,
	        0, 0, 0, 1
	    ];
	};
	
	exports.matrixMultiply = function (a, b) {
	    var a00 = a[0 * 4 + 0];
	    var a01 = a[0 * 4 + 1];
	    var a02 = a[0 * 4 + 2];
	    var a03 = a[0 * 4 + 3];
	    var a10 = a[1 * 4 + 0];
	    var a11 = a[1 * 4 + 1];
	    var a12 = a[1 * 4 + 2];
	    var a13 = a[1 * 4 + 3];
	    var a20 = a[2 * 4 + 0];
	    var a21 = a[2 * 4 + 1];
	    var a22 = a[2 * 4 + 2];
	    var a23 = a[2 * 4 + 3];
	    var a30 = a[3 * 4 + 0];
	    var a31 = a[3 * 4 + 1];
	    var a32 = a[3 * 4 + 2];
	    var a33 = a[3 * 4 + 3];
	    var b00 = b[0 * 4 + 0];
	    var b01 = b[0 * 4 + 1];
	    var b02 = b[0 * 4 + 2];
	    var b03 = b[0 * 4 + 3];
	    var b10 = b[1 * 4 + 0];
	    var b11 = b[1 * 4 + 1];
	    var b12 = b[1 * 4 + 2];
	    var b13 = b[1 * 4 + 3];
	    var b20 = b[2 * 4 + 0];
	    var b21 = b[2 * 4 + 1];
	    var b22 = b[2 * 4 + 2];
	    var b23 = b[2 * 4 + 3];
	    var b30 = b[3 * 4 + 0];
	    var b31 = b[3 * 4 + 1];
	    var b32 = b[3 * 4 + 2];
	    var b33 = b[3 * 4 + 3];
	    return new Float32Array([a00 * b00 + a01 * b10 + a02 * b20 + a03 * b30,
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
	        a30 * b03 + a31 * b13 + a32 * b23 + a33 * b33]);
	};
	
	exports.MatrixStack = function () {
	    this.stack = [];
	    var self = this;
	
	    this.restore = function () {
	        this.stack.pop();
	        // Never let the stack be totally empty
	        if (this.stack.length < 1) {
	            this.stack[0] = exports.makeIdentity();
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
	        var t = GlUtils.makeTranslation(x, y, z);
	        var m = this.getCurrentMatrix();
	        this.setCurrentMatrix(exports.matrixMultiply(t, m));
	    };
	
	    this.rotateZ = function (angleInRadians) {
	        var t = GlUtils.makeZRotation(angleInRadians);
	        var m = this.getCurrentMatrix();
	        this.setCurrentMatrix(exports.matrixMultiply(t, m));
	    };
	
	    this.rotateY = function (angleInRadians) {
	        var t = GlUtils.makeYRotation(angleInRadians);
	        var m = this.getCurrentMatrix();
	        this.setCurrentMatrix(exports.matrixMultiply(t, m));
	    };
	
	    this.scale = function (x, y, z) {
	        if (z === undefined) {
	            z = 1;
	        }
	        var t = exports.makeScale(x, y, z);
	        var m = this.getCurrentMatrix();
	        this.setCurrentMatrix(exports.matrixMultiply(t, m));
	    };
	
	    (function () {
	        self.restore();
	    })();
	
	};
}};

modules['shader'] = {code: function(module,exports){
	module.exports.Shader = function(gl,vShader, fShader){
	
	    var glUtils = require('glUtils');
	
	    var program;
	    var uniforms;
	
	    (function(){
	        if (!(vShader && fShader)) throw 'can not create GlShader: vertex and fragment shader source must be specified!';
	        program = glUtils.createProgram(gl, vShader, fShader);
	        if (!program) throw 'can not create webgl program';
	        uniforms = glUtils.extractUniforms(gl,program);
	    })();
	
	    this.bind = function(){
	        gl.useProgram(program);
	    };
	
	    this.setUniform = function(name,value){
	        var uniform = uniforms[name];
	        if (!uniform) throw 'no uniform with name '+ name + ' found!';
	        var setter = glUtils.getUniformSetter(uniform);
	        setter(gl,uniform.location,value);
	    };
	
	    this.getProgram = function(){
	        return program;
	    };
	
	
	};
}};

modules['shaderSources'] = {code: function(module,exports){
	module.exports.SHADERS_SRC = {
	    DRAW_WITH_TEXTURE:[
	        [
	            'attribute vec3 a_position;',
	            'attribute vec2 a_texcoord;',
	
	            'uniform mat4 u_matrix;',
	            'uniform mat4 u_textureMatrix;',
	
	            'varying vec2 v_texcoord;',
	
	            'void main() {',
	            'gl_Position = u_matrix * vec4(a_position,1);',
	            '   v_texcoord = (u_textureMatrix * vec4(a_texcoord, 0, 1)).xy;',
	            '}'
	        ].join('\n'),
	
	        [
	            'precision mediump float;',
	
	            'varying vec2 v_texcoord;',
	
	            'uniform sampler2D texture;',
	            'uniform vec4 u_color; ',
	            'uniform float u_colorImpact;',
	
	            'void main() {',
	            '   gl_FragColor = texture2D(texture, v_texcoord);',
	            '}'
	        ].join('\n')
	    ]
	
	};
}};

modules['test'] = {code: function(module,exports){
	modules.GlUtils =
	{module: function(module){
	
	        function compileShader(gl, shaderSource, shaderType) {
	            // Create the shader object
	            var shader = gl.createShader(shaderType);
	            gl.shaderSource(shader, shaderSource);
	            gl.compileShader(shader);
	
	            // Check the compile status
	            if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
	                console.error(gl.getShaderInfoLog(shader));
	                gl.deleteShader(shader);
	                return null;
	            }
	
	            return shader;
	        }
	
	
	        module.exports.createProgram = function (gl, vShaderSource, fShaderSource) {
	            var program = gl.createProgram();
	            var vShader = compileShader(gl, vShaderSource, gl.VERTEX_SHADER);
	            var fShader = compileShader(gl, fShaderSource, gl.FRAGMENT_SHADER);
	            if (!(vShader && fShader)) {
	                console.error('Could not compile shader');
	                return null;
	            }
	            gl.attachShader(program, vShader);
	            gl.attachShader(program, fShader);
	            gl.linkProgram(program);
	
	            // Check the linking status
	            if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
	                console.error('Could not initialize shader');
	                console.error('gl.VALIDATE_STATUS', gl.getProgramParameter(program, gl.VALIDATE_STATUS));
	                console.error('gl.getError()', gl.getError());
	                // if there is a program info log, log it
	                if (gl.getProgramInfoLog(program) !== '') {
	                    console.warn('Warning: gl.getProgramInfoLog()', gl.getProgramInfoLog(program));
	                }
	
	                gl.deleteProgram(program);
	                program = null;
	                return null;
	            }
	            return program;
	        };
	
	
	        module.exports.extractUniforms = function (gl, program) {
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
	                    location: gl.getUniformLocation(program, name)
	                    //value:defaultValue(type, uniformData.size)
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
	
	
	        module.exports.getUniformSetter = function(uniform){
	            if (uniform.size==1) {
	                switch (uniform.type) {
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
	                switch (uniform.type) {
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
	
	    }
	};
	
	
	modules.Mat4 = {
	
	    module: function(module){
	
	        var exports = module.exports;
	
	        exports.makeIdentity = function () {
	            return new Float32Array([
	                1, 0, 0, 0,
	                0, 1, 0, 0,
	                0, 0, 1, 0,
	                0, 0, 0, 1
	            ]);
	        };
	
	        exports.make2DProjection = function (width, height, depth) {
	            // Note: This matrix flips the Y axis so 0 is at the top.
	            return new Float32Array([
	                2 / width, 0, 0, 0,
	                0, - 2 / height, 0, 0,
	                0, 0, 2 / depth, 0,
	                -1, 1, 0, 1
	            ]);
	        };
	
	        exports.makePerspective = function (fieldOfViewInRadians, aspect, near, far) {
	            var f = Math.tan(Math.PI * 0.5 - 0.5 * fieldOfViewInRadians);
	            var rangeInv = 1.0 / (near - far);
	
	            return new Float32Array([
	                f / aspect, 0, 0, 0,
	                0, f, 0, 0,
	                0, 0, (near + far) * rangeInv, -1,
	                0, 0, near * far * rangeInv * 2, 0
	            ]);
	        };
	
	        exports.makeTranslation = function (tx, ty, tz) {
	            return new Float32Array([
	                1, 0, 0, 0,
	                0, 1, 0, 0,
	                0, 0, 1, 0,
	                tx, ty, tz, 1
	            ]);
	        };
	
	        exports.makeXRotation = function (angleInRadians) {
	            var c = Math.cos(angleInRadians);
	            var s = Math.sin(angleInRadians);
	
	            return new Float32Array([
	                1, 0, 0, 0,
	                0, c, s, 0,
	                0, -s, c, 0,
	                0, 0, 0, 1
	            ]);
	        };
	
	        exports.makeYRotation = function (angleInRadians) {
	            var c = Math.cos(angleInRadians);
	            var s = Math.sin(angleInRadians);
	
	            return new Float32Array([
	                c, 0, -s, 0,
	                0, 1, 0, 0,
	                s, 0, c, 0,
	                0, 0, 0, 1
	            ]);
	        };
	
	        exports.makeZRotation = function (angleInRadians) {
	            var c = Math.cos(angleInRadians);
	            var s = Math.sin(angleInRadians);
	            return new Float32Array([
	                c, s, 0, 0,
	                -s, c, 0, 0,
	                0, 0, 1, 0,
	                0, 0, 0, 1
	            ]);
	        };
	
	        exports.makeScale = function (sx, sy, sz) {
	            return new Float32Array([
	                sx, 0, 0, 0,
	                0, sy, 0, 0,
	                0, 0, sz, 0,
	                0, 0, 0, 1
	            ]);
	        };
	
	        exports.matrixMultiply = function (a, b) {
	            var a00 = a[0 * 4 + 0];
	            var a01 = a[0 * 4 + 1];
	            var a02 = a[0 * 4 + 2];
	            var a03 = a[0 * 4 + 3];
	            var a10 = a[1 * 4 + 0];
	            var a11 = a[1 * 4 + 1];
	            var a12 = a[1 * 4 + 2];
	            var a13 = a[1 * 4 + 3];
	            var a20 = a[2 * 4 + 0];
	            var a21 = a[2 * 4 + 1];
	            var a22 = a[2 * 4 + 2];
	            var a23 = a[2 * 4 + 3];
	            var a30 = a[3 * 4 + 0];
	            var a31 = a[3 * 4 + 1];
	            var a32 = a[3 * 4 + 2];
	            var a33 = a[3 * 4 + 3];
	            var b00 = b[0 * 4 + 0];
	            var b01 = b[0 * 4 + 1];
	            var b02 = b[0 * 4 + 2];
	            var b03 = b[0 * 4 + 3];
	            var b10 = b[1 * 4 + 0];
	            var b11 = b[1 * 4 + 1];
	            var b12 = b[1 * 4 + 2];
	            var b13 = b[1 * 4 + 3];
	            var b20 = b[2 * 4 + 0];
	            var b21 = b[2 * 4 + 1];
	            var b22 = b[2 * 4 + 2];
	            var b23 = b[2 * 4 + 3];
	            var b30 = b[3 * 4 + 0];
	            var b31 = b[3 * 4 + 1];
	            var b32 = b[3 * 4 + 2];
	            var b33 = b[3 * 4 + 3];
	            return new Float32Array([a00 * b00 + a01 * b10 + a02 * b20 + a03 * b30,
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
	                a30 * b03 + a31 * b13 + a32 * b23 + a33 * b33]);
	        };
	
	        exports.MatrixStack = function () {
	            this.stack = [];
	            var self = this;
	
	            this.restore = function () {
	                this.stack.pop();
	                // Never let the stack be totally empty
	                if (this.stack.length < 1) {
	                    this.stack[0] = GlUtils.makeIdentity();
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
	                var t = GlUtils.makeTranslation(x, y, z);
	                var m = this.getCurrentMatrix();
	                this.setCurrentMatrix(GlUtils.matrixMultiply(t, m));
	            };
	
	            this.rotateZ = function (angleInRadians) {
	                var t = GlUtils.makeZRotation(angleInRadians);
	                var m = this.getCurrentMatrix();
	                this.setCurrentMatrix(GlUtils.matrixMultiply(t, m));
	            };
	
	            this.rotateY = function (angleInRadians) {
	                var t = GlUtils.makeYRotation(angleInRadians);
	                var m = this.getCurrentMatrix();
	                this.setCurrentMatrix(GlUtils.matrixMultiply(t, m));
	            };
	
	            this.scale = function (x, y, z) {
	                if (z === undefined) {
	                    z = 1;
	                }
	                var t = GlUtils.makeScale(x, y, z);
	                var m = this.getCurrentMatrix();
	                this.setCurrentMatrix(GlUtils.matrixMultiply(t, m));
	            };
	
	            (function () {
	                self.restore();
	            })();
	
	        };
	
	    }
	
	};
	
	modules.ShaderSources = {
	    module: function(module){
	        module.exports.SHADERS_SRC = {
	            DRAW_WITH_TEXTURE:[
	                [
	                    'attribute vec3 a_position;',
	                    'attribute vec2 a_texcoord;',
	
	                    'uniform mat4 u_matrix;',
	                    'uniform mat4 u_textureMatrix;',
	
	                    'varying vec2 v_texcoord;',
	
	                    'void main() {',
	                    'gl_Position = u_matrix * vec4(a_position,1);',
	                    'v_texcoord = (u_textureMatrix * vec4(a_texcoord, 0, 1)).xy;',
	                    '}'
	                ].join('\n'),
	
	                [
	                    'precision mediump float;',
	
	                    'varying vec2 v_texcoord;',
	
	                    'uniform sampler2D texture;',
	                    'uniform vec4 u_color; ',
	                    'uniform float u_colorImpact;',
	
	                    'void main() {',
	                    'gl_FragColor = texture2D(texture, v_texcoord);',
	                    '}'
	                ].join('\n')
	            ]
	
	        };
	    }
	};
	
	
	modules.GlShader = {
	    module: function(module){
	        module.exports.GlShader = function(gl,vShader, fShader){
	
	            var GlUtils = require('GlUtils');
	
	            var program;
	            var uniforms;
	
	            (function(){
	                if (!(vShader && fShader)) throw 'can not create GlShader: vertex and fragment shader source must be specified!';
	                program = GlUtils.createProgram(gl, vShader, fShader);
	                if (!program) throw 'can not create webgl program';
	                uniforms = GlUtils.extractUniforms(gl,program);
	            })();
	
	            this.bind = function(){
	                gl.useProgram(program);
	            };
	
	            this.setUniform = function(name,value){
	                var uniform = uniforms[name];
	                if (!uniform) throw 'no uniform with name '+ name + ' found!';
	                var setter = GlUtils.getUniformSetter(uniform);
	                setter(gl,uniform.location,value);
	            };
	
	            this.getProgram = function(){
	                return program;
	            };
	
	
	        };
	    }
	};
	
	modules.VertexBuffer = {
	    module: function(module){
	
	        module.exports.VertexBuffer = function(gl,shader){
	            var buffer = gl.createBuffer();
	
	            this.bindBufferData = function(bufferData, itemSize, uniformLocationName){
	                var uniformLocation = gl.getAttribLocation(shader.getProgram(), uniformLocationName); // todo cache locations
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
	
	    }
	};
	
	
	modules.Texture = {
	    module: function(module){
	        module.exports.Texture = function(gl,img){
	
	            var tex;
	            var size;
	
	            this.bind = function(){
	                gl.bindTexture(gl.TEXTURE_2D, tex);
	                gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img);
	            };
	
	            this.setSize = function(_size){
	                size = _size;
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
	
	                // let's assume all images are not a power of 2
	                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
	                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
	                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
	            })();
	
	        };
	    }
	};
	
	
	modules.FrameBuffer = {
	    module: function(module){
	
	        module.exports.FrameBuffer = function(gl,width,height){
	
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
	                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
	                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
	                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
	                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
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
	
	    }
	};
	
	
	module.GlContext = {
	    module: function(module){
	
	        var GlUtils = require('GlUtils');
	        var GlShader = require('GlShader');
	        var ShaderSources = require('ShaderSources');
	        var VertexBuffer = require('VertexBuffer');
	        var FrameBuffer = require('FrameBuffer');
	
	
	        module.exports.GlContext = function () {
	
	            var gl;
	            var mCanvas;
	            var matrixStack = new GlUtils.MatrixStack();
	            var simpleTextureShader;
	            var vertexPositionBuffer;
	            var vertexTextureBuffer;
	            var frameBuffer;
	
	            this.init = function (canvas) {
	
	                mCanvas = canvas;
	                gl = canvas.getContext("webgl", {alpha: false}) ||  canvas.getContext("experimental-webgl", {alpha: false});
	
	                simpleTextureShader = new GlShader(gl,ShaderSources.SHADERS_SRC.DRAW_WITH_TEXTURE[0],ShaderSources.SHADERS_SRC.DRAW_WITH_TEXTURE[1]);
	                simpleTextureShader.bind();
	
	                vertexPositionBuffer = new VertexBuffer(gl,simpleTextureShader);
	                vertexPositionBuffer.bindBufferData([
	                    0, 0, 0,
	                    0, 1, 0,
	                    1, 0, 0,
	                    1, 0, 0,
	                    0, 1, 0,
	                    1, 1, 0
	                ],3,'a_position');
	
	                vertexTextureBuffer = new VertexBuffer(gl,simpleTextureShader);
	                vertexTextureBuffer.bindBufferData([
	                    0, 0,
	                    0, 1,
	                    1, 0,
	                    1, 0,
	                    0, 1,
	                    1, 1
	                ],2,'a_texcoord');
	
	                frameBuffer = new FrameBuffer(gl,mCanvas.width,mCanvas.height);
	
	                gl.disable(gl.CULL_FACE);
	                gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
	                gl.enable(gl.BLEND);
	                gl.disable(gl.DEPTH_TEST);
	                this.resize(mCanvas.width,mCanvas.height)
	
	            };
	
	            function createPositionMatrix(dstX, dstY, dstWidth, dstHeight) {
	                // this matirx will convert from pixels to clip space
	                //var projectionMatrix = GlUtils.make2DProjection(mCanvas.width, mCanvas.height, 40);
	                var aspect = mCanvas.width / mCanvas.height;
	                //var projectionMatrix = GlUtils.makePerspective(1.047, aspect, 1, 2000);
	
	
	                // this matrix will scale our 1 unit quad
	                // from 1 unit to dstWidth, dstHeight units
	                var scaleMatrix = GlUtils.makeScale(dstWidth, dstHeight, 1);
	
	                // this matrix will translate our quad to dstX, dstY
	                var translationMatrix = GlUtils.makeTranslation(dstX, dstY, 0);
	
	                // multiply them all togehter
	                var matrix = GlUtils.matrixMultiply(scaleMatrix, translationMatrix);
	                matrix = GlUtils.matrixMultiply(matrix, matrixStack.getCurrentMatrix());
	                matrix = GlUtils.matrixMultiply(matrix, projectionMatrix);
	
	                return matrix;
	            }
	
	            function createTextureMatrix(srcX, srcY, srcWidth, srcHeight, texWidth, texHeight){
	                // Because texture coordinates go from 0 to 1
	                // and because our texture coordinates are already a unit quad
	                // we can select an area of the texture by scaling the unit quad
	                // down
	                var texScaleMatrix = GlUtils.makeScale(srcWidth / texWidth , srcHeight / texHeight, 1);
	                var texTranslationMatrix = GlUtils.makeTranslation(srcX / texWidth, srcY / texHeight, 0);
	
	                // multiply them together
	                return GlUtils.matrixMultiply(texScaleMatrix, texTranslationMatrix);
	            }
	
	//            function setColor(color, impact) {
	//                color[0] = color[0] / 255;
	//                color[1] = color[1] / 255;
	//                color[2] = color[2] / 255;
	//                color[3] = color[3] / 255;
	//
	//                simpleTextureShader.setUniform('u_color',color);
	//                simpleTextureShader.setUniform('u_colorImpact',impact);
	//            }
	
	            this.loadTexture = function (url, callBack) {
	                var img = new Image();
	                var texture = new ve_local.Texture(gl,img);
	
	                img.addEventListener('load', function () {
	                    texture.setSize({
	                        width:img.width,
	                        height:img.height
	                    });
	                    callBack(texture);
	                });
	                img.src = url;
	            };
	
	            this.drawImage = function (texture,
	                                       srcX, srcY, srcWidth, srcHeight,
	                                       dstX, dstY, dstWidth, dstHeight) {
	
	                var tex = texture.getGlTexture();
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
	                if (dstWidth === undefined) {
	                    dstWidth = srcWidth;
	                }
	                if (dstHeight === undefined) {
	                    dstHeight = srcHeight;
	                }
	
	                texture.bind();
	                simpleTextureShader.setUniform('u_matrix',createPositionMatrix(dstX, dstY, dstWidth, dstHeight));
	                simpleTextureShader.setUniform('u_textureMatrix',createTextureMatrix(srcX, srcY, srcWidth, srcHeight, texWidth, texHeight));
	
	                // draw the quad (2 triangles, 6 vertices)
	                gl.drawArrays(gl.TRIANGLES, 0, 6);
	            };
	
	            this.clear = function () {
	                //gl.colorMask(false, false, false, true);
	                gl.clearColor(1, 1, 1, 1);
	                gl.clear(gl.COLOR_BUFFER_BIT);
	            };
	
	
	            this.fillRect = function (x, y, w, h, color) {
	                simpleTextureShader.setUniform('u_matrix',createPositionMatrix(x, y, w, h));
	                gl.drawArrays(gl.TRIANGLES, 0, 6);
	            };
	
	            this.strokeRect = function (x, y, w, h, color) {
	                this.fillRect(x, y, w, 1, color);
	                this.fillRect(x, y + h, w, 1, color);
	                this.fillRect(x, y, 1, h, color);
	                this.fillRect(x + w, y, 1, h, color);
	            };
	
	            this.point = function (x, y, color) {
	                this.fillRect(x, y, 1, 1, color);
	            };
	
	            this.line = function (x1, y1, x2, y2, color) {
	                simpleTextureShader.setUniform('u_matrix',createPositionMatrix(x1, y1, x2 - x1, y2 - y1));
	                gl.drawArrays(gl.LINES, 0, 6);
	            };
	
	            this.save = function() {
	                matrixStack.save();
	            };
	
	            this.resize = function (w,h) {
	                gl.viewport(0, 0, w,h);
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
	
	            this.beginFrameBuffer = function(){
	                this.save();
	                frameBuffer.bind();
	            };
	
	            this.flipFrameBuffer = function(){
	                this.restore();
	                this.save();
	                this.translate(0,mCanvas.height);
	                this.scale(1,-1);
	                frameBuffer.unbind();
	                gl.bindTexture(gl.TEXTURE_2D, frameBuffer.getGlTexture());
	                simpleTextureShader.setUniform('u_matrix',createPositionMatrix(0,0,mCanvas.width, mCanvas.height),1);
	                simpleTextureShader.setUniform('u_textureMatrix',createTextureMatrix(0,0,mCanvas.width, mCanvas.height,mCanvas.width, mCanvas.height));
	                gl.drawArrays(gl.TRIANGLES, 0, 6);
	                this.restore();
	            };
	
	        }
	
	    }
	};
}};

modules['texture'] = {code: function(module,exports){
	
	module.exports.Texture = function(gl,img){
	
	    var tex;
	    var size;
	
	    this.bind = function(){
	        gl.bindTexture(gl.TEXTURE_2D, tex);
	        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img);
	    };
	
	    this.setSize = function(_size){
	        size = _size;
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
	
	        // let's assume all images are not a power of 2
	        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
	        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
	        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
	    })();
	
	};
}};

modules['vertexBuffer'] = {code: function(module,exports){
	
	exports.VertexBuffer = function(gl,shader){
	    var buffer = gl.createBuffer();
	
	    this.bindBufferData = function(bufferData, itemSize, uniformLocationName){
	        var uniformLocation = gl.getAttribLocation(shader.getProgram(), uniformLocationName); // todo cache locations
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
	
	console.log(navigator.userAgent);
	
	var Renderer = function(){
	
	    var canvas;
	    var ctx;
	    var scene;
	    var clearColor = [];
	    var self = this;
	    var currTime = 0;
	    var lastTime = 0;
	    var reqAnimFrame = window.requestAnimationFrame||window.webkitRequestAnimationFrame||function(f){setTimeout(f,17)};
	    var gameProps;
	    var canceled = false;
	    var deviceScale = require('device').deviceScale;
	
	    var setFullScreen = function(){
	        var w = window.innerWidth*deviceScale;
	        var h = window.innerHeight*deviceScale;
	        console.log('w,h',w,h);
	        canvas.width = w;
	        canvas.height = h;
	        canvas.style.width = w + 'px';
	        canvas.style.height = h + 'px';
	        gameProps.globalScale.x = w / gameProps.width;
	        gameProps.globalScale.y = h / gameProps.height;
	    };
	
	    var setNormalScreen = function(){
	        var w = gameProps.width;
	        var h = gameProps.height;
	        canvas.width = w;
	        canvas.height = h;
	        gameProps.globalScale.x = 1;
	        gameProps.globalScale.y = 1;
	    };
	
	    var listenResize = function(){
	        window.addEventListener('resize',function(){
	            setFullScreen();
	            rescale(gameProps.globalScale.x,gameProps.globalScale.y);
	        });
	    };
	
	    var rescale = function(scaleX,scaleY){
	        ctx.scale(scaleX,scaleY);
	    };
	
	    this.getContext = function(){
	        return ctx;
	    };
	
	    this.getCanvas = function(){
	        return canvas;
	    };
	
	    this.init = function(){
	        canvas = document.querySelector('canvas');
	        gameProps = bundle.gameProps;
	        gameProps.globalScale = {};
	        if (!canvas) {
	            canvas = document.createElement('canvas');
	            if (gameProps.scaleToFullScreen) {
	                setFullScreen();
	                listenResize()
	            } else {
	                setNormalScreen();
	            }
	            document.body.appendChild(canvas);
	        }
	        //ctx = canvasContext;
	        ctx = glContext;
	        ctx.init(canvas);
	        rescale(gameProps.globalScale.x,gameProps.globalScale.y);
	
	        drawScene();
	
	    };
	
	    this.getCanvas = function(){
	        return canvas;
	    };
	
	    this.cancel = function(){
	        canceled = true;
	    };
	
	    var drawScene = function(){
	        if (canceled) {
	           return;
	        }
	        //if (window.canceled) return
	
	
	        reqAnimFrame(drawScene);
	
	        if (!scene) return;
	
	        lastTime = currTime;
	        currTime = Date.now();
	        var deltaTime = lastTime ? currTime - lastTime : 0;
	
	        if (scene.useBG) ctx.clear(scene.colorBG,gameProps.width,gameProps.height);
	
	        scene.update(currTime,deltaTime);
	
	        bundle.particleSystemList.forEach(function(p){
	            p.update(currTime,deltaTime);
	        });
	
	        keyboard.update();
	    };
	    this.setScene = function(_scene){
	        scene = _scene;
	        collider.setUp();
	    };
	
	};
	
	var instance = null;
	
	module.exports.instance = function(){
	    if (instance==null) instance = new Renderer();
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
	        var cbList = [];
	        if (!model._commonBehaviour) {
	            model.__updateCommonBehaviour__ = consts.noop;
	            return;
	        }
	        model._commonBehaviour.forEach(function(cb){
	            var instance = new behaviour.commonBehaviour[cb.name]();
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
	
	
	    sound:[
	    {
	        "name": "cracked",
	        "type": "sound",
	        "resourcePath": "resources/sound/cracked.mp3",
	        "id": "4460_4604_103"
	    },
	    {
	        "name": "engine",
	        "type": "sound",
	        "resourcePath": "resources/sound/engine.mp3",
	        "id": "9985_1972_104"
	    }
	],
	
	    spriteSheet:[
	    {
	        "_frameWidth": 0,
	        "_frameHeight": 0,
	        "resourcePath": "resources/spriteSheet/cloudSmall.png",
	        "width": 48,
	        "height": 48,
	        "name": "cloudSmall",
	        "type": "spriteSheet",
	        "numOfFramesH": 1,
	        "numOfFramesV": 1,
	        "id": "8639_0487_69"
	    },
	    {
	        "resourcePath": "resources/spriteSheet/helicopter.png",
	        "width": 1260,
	        "height": 570,
	        "numOfFramesH": 7,
	        "numOfFramesV": 6,
	        "name": "helicopter",
	        "type": "spriteSheet",
	        "id": "6100_9915_72"
	    },
	    {
	        "_frameWidth": 0,
	        "_frameHeight": 0,
	        "resourcePath": "resources/spriteSheet/fire.png",
	        "width": 64,
	        "height": 44,
	        "name": "fire",
	        "type": "spriteSheet",
	        "numOfFramesH": 1,
	        "numOfFramesV": 1,
	        "id": "3208_8395_84"
	    }
	],
	
	    frameAnimation:[
	    {
	        "name": "fly",
	        "frames": [
	            0,
	            1,
	            2,
	            3,
	            4,
	            5
	        ],
	        "type": "frameAnimation",
	        "duration": 1000,
	        "id": "2977_2535_74"
	    },
	    {
	        "_timeForOneFrame": 0,
	        "name": "injured",
	        "frames": [
	            16,
	            17,
	            18,
	            19
	        ],
	        "type": "frameAnimation",
	        "duration": 400,
	        "id": "8709_3441_81"
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
	        "spriteSheetId": "8639_0487_69",
	        "currFrameIndex": 0,
	        "_sprPosX": 0,
	        "_sprPosY": 0,
	        "name": "cloudSmall",
	        "width": 48,
	        "height": 48,
	        "type": "gameObject",
	        "commonBehaviour": [],
	        "velX": 0,
	        "velY": 0,
	        "frameAnimationIds": [],
	        "rigid": 0,
	        "groupName": "",
	        "posX": 0,
	        "posY": 0,
	        "id": "3276_5748_70"
	    },
	    {
	        "spriteSheetId": "6100_9915_72",
	        "currFrameIndex": 0,
	        "_sprPosX": 0,
	        "_sprPosY": 0,
	        "name": "helicopter",
	        "width": 180,
	        "height": 95,
	        "type": "gameObject",
	        "commonBehaviour": [],
	        "velX": 0,
	        "velY": 0,
	        "frameAnimationIds": [
	            "2977_2535_74",
	            "8709_3441_81"
	        ],
	        "rigid": 0,
	        "groupName": "",
	        "posX": 0,
	        "posY": 0,
	        "id": "6612_6223_73"
	    },
	    {
	        "spriteSheetId": "3208_8395_84",
	        "currFrameIndex": 0,
	        "_sprPosX": 0,
	        "_sprPosY": 0,
	        "name": "fire",
	        "width": 64,
	        "height": 44,
	        "type": "gameObject",
	        "commonBehaviour": [],
	        "velX": 0,
	        "velY": 0,
	        "frameAnimationIds": [],
	        "rigid": 0,
	        "groupName": "",
	        "posX": 0,
	        "posY": 0,
	        "id": "8044_2993_85"
	    }
	],
	
	    layer:[
	    {
	        "name": "mainLayer",
	        "type": "layer",
	        "gameObjectProps": [
	            {
	                "spriteSheetId": "6100_9915_72",
	                "currFrameIndex": 0,
	                "_sprPosX": 0,
	                "_sprPosY": 0,
	                "name": "helicopter",
	                "width": 180,
	                "height": 95,
	                "type": "gameObject",
	                "commonBehaviour": [],
	                "velX": 0,
	                "velY": 0,
	                "frameAnimationIds": [
	                    "2977_2535_74"
	                ],
	                "rigid": 1,
	                "groupName": "",
	                "posX": 16,
	                "posY": 1,
	                "protoId": "6612_6223_73",
	                "id": "2294_3548_79"
	            }
	        ],
	        "id": "7822_6900_77"
	    },
	    {
	        "name": "l",
	        "type": "layer",
	        "gameObjectProps": [
	            {
	                "height": 29,
	                "text": "ПОБЕДА!!!!!!",
	                "width": 180,
	                "type": "userInterface",
	                "subType": "textField",
	                "groupName": "",
	                "posX": 106,
	                "posY": 123,
	                "name": "textField3",
	                "protoId": null,
	                "id": "4530_8265_90",
	                "fontId": "6991_3497_4"
	            }
	        ],
	        "id": "3617_1449_88"
	    }
	],
	
	    scene:[
	    {
	        "name": "main",
	        "type": "scene",
	        "layerProps": [
	            {
	                "type": "layer",
	                "protoId": "7822_6900_77",
	                "id": "2707_6918_78"
	            }
	        ],
	        "id": "4016_7425_76",
	        "useBG": 1,
	        "colorBG": [
	            59,
	            15,
	            132
	        ]
	    },
	    {
	        "name": "win",
	        "type": "scene",
	        "layerProps": [
	            {
	                "type": "layer",
	                "protoId": "3617_1449_88",
	                "id": "3964_1485_89"
	            }
	        ],
	        "id": "8898_5339_87",
	        "useBG": true
	    }
	],
	
	    particleSystem:[
	    {
	        "gameObjectId": "3276_5748_70",
	        "numOfParticlesToEmit": {
	            "from": 1,
	            "to": 5
	        },
	        "particleAngle": {
	            "from": 5.166617715651452,
	            "to": 4.057869033816451
	        },
	        "particleVelocity": {
	            "from": 1,
	            "to": 100
	        },
	        "particleLiveTime": {
	            "from": 3000,
	            "to": 5000
	        },
	        "name": "burn",
	        "type": "particleSystem",
	        "id": "4673_1751_71"
	    },
	    {
	        "gameObjectId": "8044_2993_85",
	        "numOfParticlesToEmit": {
	            "from": 1,
	            "to": 10
	        },
	        "particleAngle": {
	            "from": 5.248200218345153,
	            "to": 3.9312703914312075
	        },
	        "particleVelocity": {
	            "from": 1,
	            "to": 100
	        },
	        "particleLiveTime": {
	            "from": 1000,
	            "to": 2000
	        },
	        "name": "fire",
	        "type": "particleSystem",
	        "id": "6469_6798_86"
	    }
	],
	
	    gameProps:{
	    "width": 600,
	    "height": 300,
	    "scaleToFullScreen": true
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
	            return;
	        }
	        var res = gos.some(function(go){
	            if (!go.rigid) return;
	            if (obj==go) return;
	            var objRect = obj.getRect();
	            objRect.x = newX;
	            objRect.y = newY;
	            if (math.isRectIntersectRect(objRect,go.getRect())) {
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
	
	var instance = null;
	
	module.exports.instance = function(){
	    if (instance==null) instance = new Collider();
	    return instance;
	};
}};

modules['consts'] = {code: function(module,exports){
	
	module.exports.noop = function(){};
	module.exports.RESOURCE_NAMES = ["sound","spriteSheet","frameAnimation","font","gameObject","layer","scene","particleSystem"];
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
	
	        console.log('preloading and set scene',scene.name);
	
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
	            console.log('processing curr sprite sheet',spSheet.name);
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

require('index');