(function(t) {
    var e = {};
    function n(i) {
        if (e[i]) {
            return e[i].exports;
        }
        var r = e[i] = {
            i: i,
            l: false,
            exports: {}
        };
        t[i].call(r.exports, r, r.exports, n);
        r.l = true;
        return r.exports;
    }
    n.m = t;
    n.c = e;
    n.i = function(t) {
        return t;
    };
    n.d = function(t, e, i) {
        if (!n.o(t, e)) {
            Object.defineProperty(t, e, {
                configurable: false,
                enumerable: true,
                get: i
            });
        }
    };
    n.n = function(t) {
        var e = t && t.__esModule ? function e() {
            return t["default"];
        } : function e() {
            return t;
        };
        n.d(e, "a", e);
        return e;
    };
    n.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
    };
    n.p = "";
    return n(n.s = 49);
})([ function(t, e, n) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var i, r;
    var o = n(5);
    var a = d(o);
    var s = n(36);
    var u = d(s);
    var h = n(27);
    var f = d(h);
    var c = n(4);
    var l = n(29);
    var p = d(l);
    function d(t) {
        return t && t.__esModule ? t : {
            default: t
        };
    }
    function y(t, e) {
        if (!(t instanceof e)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    function g(t, e) {
        if (!t) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return e && (typeof e === "object" || typeof e === "function") ? e : t;
    }
    function m(t, e) {
        if (typeof e !== "function" && e !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        }
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (e) Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e;
    }
    var v = (i = (0, c.Transient)({
        game: true,
        rigidBody: true
    }), i(r = function(t) {
        m(e, t);
        function e(n) {
            y(this, e);
            var i = g(this, t.call(this));
            i.id = null;
            i.name = null;
            i.width = 0;
            i.height = 0;
            i.pos = {
                x: 0,
                y: 0
            };
            i.scale = {
                x: 1,
                y: 1
            };
            i.angle = 0;
            i.alpha = 1;
            i.layerId = null;
            i.fixedToCamera = false;
            i.rigid = false;
            i._tweens = [];
            if (1 && !n) throw "can not create model '" + i.type + "': game instance not passed to model constructor";
            i.game = n;
            i._emitter = new f.default();
            i.rigidBody = new p.default(i);
            return i;
        }
        e.prototype.revalidate = function t() {};
        e.prototype.setIndividualBehaviour = function t(e) {};
        e.prototype.setCommonBehaviour = function t() {};
        e.prototype.onShow = function t() {};
        e.prototype.getRect = function t() {
            var e = this.pos.x, n = this.pos.y, i = this.width, r = this.height;
            return {
                x: e,
                y: n,
                width: i,
                height: r,
                right: e + i,
                bottom: n + r
            };
        };
        e.prototype.tween = function t(e) {
            var n = new u.default(e, this);
            this._tweens.push(n);
        };
        e.prototype.update = function t(e) {
            var n = this;
            this._tweens.forEach(function(t, i) {
                t.update(e);
                if (t.completed) n._tweens.splice(i, 1);
            });
        };
        e.prototype.clone = function t(e) {
            var n = this.constructor;
            var i = new n(this.game);
            i._cloner = this;
            return i.fromJSON(this.toJSON(e), true);
        };
        e.prototype.on = function t(e, n) {
            this._emitter.on(e, n);
            return this;
        };
        e.prototype.trigger = function t(e, n) {
            this._emitter.trigger(e, n);
        };
        e.prototype.updateCloner = function t(e) {
            if (false) return;
            var n = this._cloner;
            if (!n) return;
            n.fromJSON(this.toJSON(e));
            n.updateCloner(e);
            delete this._cloner;
        };
        return e;
    }(a.default)) || r);
    e.default = v;
}, function(t, e, n) {
    "use strict";
    e.isPointInRect = function(t, e, n) {
        return t.x > e.x && t.x < e.x + e.width && t.y > e.y && t.y < e.y + e.height;
    };
    var i = function t(e, n, i) {
        return e >= n && e <= i;
    };
    e.isRectIntersectRect = function(t, e) {
        var n = i(t.x, e.x, e.x + e.width), r = i(e.x, t.x, t.x + t.width), o = i(t.y, e.y, e.y + e.height), a = i(e.y, t.y, t.y + t.height);
        var s = n || r;
        var u = o || a;
        return s && u;
    };
    e.radToDeg = function(t) {
        return t * 180 / Math.PI;
    };
    e.degToRad = function(t) {
        return t * Math.PI / 180;
    };
    e.random = function(t, e) {
        if (t > e) {
            var n = t;
            t = e;
            e = n;
        }
        var i = Math.random() * (e - t) + t;
        if (i > e) i = e; else if (i < t) i = t;
        return i;
    };
    var r = {};
    r.linear = function(t, e, n, i) {
        return n * t / i + e;
    };
    r.easeInQuad = function(t, e, n, i) {
        t /= i;
        return n * t * t + e;
    };
    r.easeOutQuad = function(t, e, n, i) {
        t /= i;
        return -n * t * (t - 2) + e;
    };
    r.easeInOutQuad = function(t, e, n, i) {
        t /= i / 2;
        if (t < 1) return n / 2 * t * t + e;
        t--;
        return -n / 2 * (t * (t - 2) - 1) + e;
    };
    e.ease = r;
}, function(t, e, n) {
    "use strict";
    e.__esModule = true;
    function i(t, e) {
        if (!(t instanceof e)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    var r = function() {
        function t() {
            i(this, t);
        }
        t.prototype.manage = function t() {
            console.error(this);
            if (true) throw "BaseAbstractBehaviour: method 'manage' not implemented";
        };
        t.prototype.onUpdate = function t() {};
        return t;
    }();
    e.default = r;
}, function(t, e, n) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var i = n(2);
    var r = o(i);
    function o(t) {
        return t && t.__esModule ? t : {
            default: t
        };
    }
    function a(t, e) {
        if (!(t instanceof e)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    function s(t, e) {
        if (!t) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return e && (typeof e === "object" || typeof e === "function") ? e : t;
    }
    function u(t, e) {
        if (typeof e !== "function" && e !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        }
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (e) Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e;
    }
    var h = function(t) {
        u(e, t);
        function e(n) {
            a(this, e);
            var i = s(this, t.call(this));
            i.gameObject = null;
            i.lastDirection = null;
            i.game = n;
            return i;
        }
        e.prototype.manage = function t(e, n, i) {
            var r = this;
            this.gameObject = e;
            this.parameters = n;
            this.animations = {};
            i.forEach(function(t) {
                var e = "walk" + t + "Animation", i = "idle" + t + "Animation";
                r.animations[e] = r.gameObject.frameAnimations.find(function(t) {
                    return t.name === n[e];
                });
                n[i] && (r.animations[i] = r.gameObject.frameAnimations.find(function(t) {
                    return t.name === n[i];
                }));
            });
        };
        e.prototype.stop = function t() {
            this.gameObject.stopFrAnimations();
            var e = "idle" + this.lastDirection + "Animation";
            if (this.animations[e]) {
                this.animations[e].play();
            }
        };
        e.prototype.go = function t(e) {
            this.lastDirection = e;
            this.animations["walk" + e + "Animation"].play();
        };
        return e;
    }(r.default);
    e.default = h;
}, function(t, e, n) {
    "use strict";
    e.__esModule = true;
    e.Transient = i;
    function i(t) {
        return function(e) {
            e.transient = t;
        };
    }
}, function(t, e, n) {
    "use strict";
    e.__esModule = true;
    var i = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(t) {
        return typeof t;
    } : function(t) {
        return t && typeof Symbol === "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
    };
    function r(t, e) {
        if (!(t instanceof e)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    var o = function t(e, n, i) {
        if (!e) return true;
        if (e.indexOf("_") === 0) return true;
        if (n && n.call) return true;
        if (typeof n === "string") return false;
        if (typeof n === "number") return false;
        if (typeof n === "boolean") return false;
        return n == null && !i.preserveNull;
    };
    var a = function t(e) {
        return typeof e === "string" || typeof e === "number";
    };
    var s = function t(e) {
        var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
        if (e === undefined) return undefined; else if (e === null) return null; else if (typeof window !== "undefined" && e === window) return undefined; else if (n.indexOf(e) > -1) return e;
        if (Object.prototype.toString.call(e) === "[object Array]") {
            var r = [], o = 0, a = e.length;
            for (;o < a; o++) {
                var s = void 0;
                if (n.indexOf(e[o]) > -1) {
                    s = e[o];
                } else {
                    n.push(e);
                    s = t(e[o], n);
                    n.push(e[o]);
                }
                r[o] = s;
            }
            return r;
        } else if ((typeof e === "undefined" ? "undefined" : i(e)) === "object") {
            var u = {};
            for (var h in e) {
                if (!e.hasOwnProperty(h)) continue;
                var f = void 0;
                if (n.indexOf(e[h]) > -1) {
                    f = e[h];
                } else {
                    n.push(e);
                    f = t(e[h], n);
                    n.push(e[h]);
                }
                u[h] = f;
            }
            return u;
        } else return e;
    };
    var u = function() {
        function t() {
            r(this, t);
        }
        t.prototype.fromJSON = function t() {
            var e = this;
            var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var i = arguments[1];
            Object.keys(n).forEach(function(t) {
                if (t === "type") return;
                if (t in e) e[t] = n[t]; else {
                    console.error(e);
                    throw "::fromJSON(): class " + e.constructor.name + " has no property " + t;
                }
                if (!e[t]) return;
                if (n[t].id && n[t].type) e[t] = e.game.repository.getObject(n[t].id, n[t].type, i); else if (n[t].splice) {
                    var r = e[t];
                    e[t] = [];
                    r.forEach(function(n, r) {
                        if (n && n.type && n.id) {
                            e[t].push(e.game.repository.getObject(n.id, n.type, i));
                        } else {
                            e[t].push(n);
                        }
                    });
                }
            });
            this.revalidate();
            return this;
        };
        t.prototype.toJSON = function t() {
            var e = this;
            var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
                preserveNull: false
            };
            var r = {};
            for (var u in this) {
                if (o(u, this[u], n)) {
                    continue;
                }
                if (this.constructor.transient && this.constructor.transient[u]) {
                    continue;
                }
                if (this[u] != null && this[u].type && this[u].id) {
                    r[u] = {
                        id: this[u].id,
                        type: this[u].type
                    };
                } else if (this[u] != null && this[u].splice) {
                    (function() {
                        var t = e[u];
                        var n = [];
                        t.forEach(function(t) {
                            if (t && t.type && t.id) {
                                n.push({
                                    type: t.type,
                                    id: t.id
                                });
                            } else {
                                if (a(t)) n.push(s(t));
                            }
                        });
                        r[u] = n;
                    })();
                } else {
                    var h = s(this[u]);
                    if (h && h.splice && !h.length) continue; else if (h != null && (typeof h === "undefined" ? "undefined" : i(h)) === "object" && !Object.keys(h).length) continue;
                    r[u] = h;
                }
            }
            return r;
        };
        return t;
    }();
    e.default = u;
}, function(t, e, n) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var i = n(0);
    var r = o(i);
    function o(t) {
        return t && t.__esModule ? t : {
            default: t
        };
    }
    function a(t, e) {
        if (!(t instanceof e)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    function s(t, e) {
        if (!t) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return e && (typeof e === "object" || typeof e === "function") ? e : t;
    }
    function u(t, e) {
        if (typeof e !== "function" && e !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        }
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (e) Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e;
    }
    var h = function(t) {
        u(e, t);
        e.find = function t(e) {};
        e.findAll = function t(e) {};
        function e(n) {
            a(this, e);
            var i = s(this, t.call(this, n));
            i.type = "GameObjectProto";
            i.spriteSheet = null;
            i._behaviour = null;
            i.commonBehaviour = [];
            i.currFrameIndex = 0;
            i._sprPosX = 0;
            i._sprPosY = 0;
            i.frameAnimations = [];
            i._currFrameAnimation = 0;
            i.startFrameAnimationName = null;
            i._timeCreated = null;
            i.tileOffset = {
                x: 0,
                y: 0
            };
            i.tileRepeat = false;
            i.groupName = "";
            i._individualBehaviour = null;
            return i;
        }
        e.prototype.revalidate = function t() {
            var e = this;
            this.setFrameIndex(this.currFrameIndex);
            if (this.spriteSheet) {
                this.width = this.spriteSheet._frameWidth;
                this.height = this.spriteSheet._frameHeight;
            }
            this.frameAnimations.forEach(function(t, n) {
                e.frameAnimations[n] = e.frameAnimations[n].clone();
                e.frameAnimations[n]._gameObject = e;
            });
        };
        e.prototype.playFrameAnimation = function t(e, n) {
            var i = this.frameAnimations.find(function(t) {
                return t.name === e;
            });
            i._gameObject = this;
            this._currFrameAnimation = i;
            i.play(n);
        };
        e.prototype.setFrameIndex = function t(e) {
            this.currFrameIndex = e;
            this._sprPosX = this.spriteSheet.getFramePosX(this.currFrameIndex);
            this._sprPosY = this.spriteSheet.getFramePosY(this.currFrameIndex);
        };
        e.prototype.update = function e(n, i) {
            t.prototype.update.call(this, n);
            this._currFrameAnimation && this._currFrameAnimation.update(n);
            if (this._individualBehaviour) this._individualBehaviour.onUpdate(n, i);
            for (var r = 0, o = this.commonBehaviour.length; r < o; r++) {
                this.commonBehaviour[r].onUpdate(n, i);
            }
            this.rigidBody.update(n, i);
            this.game._renderer.draw(this);
        };
        e.prototype.onShow = function t() {
            if (this._individualBehaviour) this._individualBehaviour.onCreate();
            if (this.startFrameAnimationName !== null) this.playFrameAnimation(this.startFrameAnimationName);
        };
        e.prototype.stopFrAnimations = function t() {
            this._currFrameAnimation && this._currFrameAnimation.stop();
        };
        e.prototype.kill = function t() {
            this._layer.kill(this);
        };
        return e;
    }(r.default);
    e.default = h;
}, function(t, e, n) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var i = n(0);
    var r = o(i);
    function o(t) {
        return t && t.__esModule ? t : {
            default: t
        };
    }
    function a(t, e) {
        if (!(t instanceof e)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    function s(t, e) {
        if (!t) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return e && (typeof e === "object" || typeof e === "function") ? e : t;
    }
    function u(t, e) {
        if (typeof e !== "function" && e !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        }
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (e) Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e;
    }
    var h = function(t) {
        u(e, t);
        function e(n) {
            a(this, e);
            var i = s(this, t.call(this, n));
            i.type = "TileMap";
            i.spriteSheet = null;
            i.data = [];
            return i;
        }
        e.prototype.getTileAt = function t(e, n) {
            var i = this;
            if (!this.spriteSheet) return;
            var r = ~~(e / this.spriteSheet._frameWidth);
            var o = ~~(n / this.spriteSheet._frameHeight);
            if (!this.data[o]) return;
            var a = this.data[o][r];
            if (a == null) return;
            return {
                getRect: function t() {
                    var e = r * i.spriteSheet._frameWidth + 1, n = o * i.spriteSheet._frameHeight + 1, a = i.spriteSheet._frameWidth - 2, s = i.spriteSheet._frameHeight - 2;
                    return {
                        x: e,
                        y: n,
                        width: a,
                        height: s,
                        right: e + a,
                        bottom: n + s
                    };
                },
                tileIndex: this.spriteSheet.numOfFramesH * o + r + 1,
                value: a
            };
        };
        e.prototype.getTilesAtRect = function t(e) {
            var n = [];
            var i = {};
            var r = e.x, o = void 0;
            var a = e.x + e.width, s = e.y + e.height;
            while (true) {
                o = e.y;
                while (true) {
                    var u = this.getTileAt(r, o);
                    if (u) {
                        if (!i[u.tileIndex]) {
                            n.push(u);
                            i[u.tileIndex] = true;
                        }
                    }
                    if (o === s) break;
                    o += this.spriteSheet._frameHeight;
                    if (o > s) o = s;
                }
                if (r === a) break;
                r += this.spriteSheet._frameWidth;
                if (r > a) r = a;
            }
            return n;
        };
        return e;
    }(r.default);
    e.default = h;
}, , , function(t, e, n) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var i, r;
    n(31);
    var o = n(34);
    var a = b(o);
    var s = n(35);
    var u = b(s);
    var h = n(26);
    var f = b(h);
    var c = n(25);
    var l = b(c);
    var p = n(30);
    var d = b(p);
    var y = n(4);
    var g = n(5);
    var m = b(g);
    var v = n(24);
    var w = b(v);
    function b(t) {
        return t && t.__esModule ? t : {
            default: t
        };
    }
    function _(t, e) {
        if (!(t instanceof e)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    function x(t, e) {
        if (!t) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return e && (typeof e === "object" || typeof e === "function") ? e : t;
    }
    function O(t, e) {
        if (typeof e !== "function" && e !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        }
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (e) Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e;
    }
    var j = (i = (0, y.Transient)({
        repository: true,
        camera: true,
        keyboard: true
    }), i(r = function(t) {
        O(e, t);
        function e(n) {
            _(this, e);
            var i = x(this, t.call(this));
            i._lastTime = null;
            i._currTime = null;
            i._currentScene = null;
            i._running = false;
            i._renderer = null;
            i.scale = {
                x: 1,
                y: 1
            };
            i.pos = {
                x: 0,
                y: 0
            };
            i.gravityConstant = null;
            i.fps = null;
            Object.keys(n).forEach(function(t) {
                i[t] = n[t];
            });
            var r = Date.now();
            i._lastTime = i._currTime = r;
            i._deltaTime = 0;
            i.repository = new u.default(i);
            i._mouse = new f.default(i);
            i.keyboard = new l.default(i);
            i.keyboard.listenTo();
            i._collider = new d.default(i);
            i.camera = new w.default(i);
            return i;
        }
        e.prototype.getTime = function t() {
            return this._lastTime;
        };
        e.prototype.getDeltaTime = function t() {
            return this._deltaTime;
        };
        e.prototype.runScene = function t(i) {
            var r = this;
            if (!this._renderer) {
                this._renderer = a.default.getRenderer(this);
                this._mouse.listenTo(this._renderer.container);
            }
            this._currentScene = i;
            if (true) {
                var o = n(13);
                var s = "" + i.name[0].toUpperCase() + i.name.substr(1) + "Behaviour";
                if (s) i.setIndividualBehaviour(o[s]);
                i.layers.forEach(function(t) {
                    t.gameObjects.forEach(function(t) {
                        t.setCommonBehaviour();
                        var e = "" + t.name[0].toUpperCase() + t.name.substr(1) + "Behaviour";
                        var n = o[e];
                        if (n) t.setIndividualBehaviour(n);
                    });
                });
            }
            i.preload(function() {
                r._currentScene.onShow();
                if (!r._running) {
                    e.update(r);
                    r._running = true;
                }
            });
        };
        e.prototype.getCurrScene = function t() {
            return this._currentScene;
        };
        e.prototype.setCurrScene = function t(e) {
            this._currentScene = e;
        };
        e.update = function t(n) {
            if (1 && window.canceled) return;
            requestAnimationFrame(function() {
                e.update(n);
            });
            n._lastTime = n._currTime;
            n._currTime = Date.now();
            n._deltaTime = n._currTime - n._lastTime;
            if (true) {
                n.fps = ~~(1e3 / n._deltaTime);
                window.fps = n.fps;
            }
            n._currentScene && n._currentScene.update(n._currTime, n._deltaTime);
            n.keyboard.update();
        };
        return e;
    }(m.default)) || r);
    e.default = j;
}, function(t, e) {
    t.exports = '{\n    "width": 900,\n    "height": 500,\n    "scaleStrategy": 0,\n    "startSceneId": 2,\n    "scale": {\n        "x": 1,\n        "y": 1\n    },\n    "pos": {\n        "x": 0,\n        "y": 0\n    },\n    "gravityConstant": 800\n}';
}, function(t, e) {
    t.exports = '{\n    "Scene": [\n        {\n            "id": 2,\n            "name": "mainScene",\n            "width": 5000,\n            "height": 800,\n            "type": "Scene",\n            "layers": [\n                {\n                    "type": "Layer",\n                    "id": 2\n                }\n            ],\n            "useBG": true,\n            "colorBG": {\n                "r": 230,\n                "g": 254,\n                "b": 255\n            },\n            "tileMap": {\n                "id": 52,\n                "type": "TileMap"\n            }\n        }\n    ],\n    "Layer": [\n        {\n            "id": 2,\n            "name": "layer1",\n            "type": "Layer",\n            "gameObjects": [\n                {\n                    "type": "GameObject",\n                    "id": 7\n                },\n                {\n                    "type": "GameObject",\n                    "id": 63\n                },\n                {\n                    "type": "GameObject",\n                    "id": 64\n                },\n                {\n                    "type": "GameObject",\n                    "id": 65\n                }\n            ]\n        }\n    ],\n    "SpriteSheet": [\n        {\n            "name": "dude",\n            "width": 288,\n            "height": 48,\n            "type": "SpriteSheet",\n            "numOfFramesH": 9,\n            "resourcePath": "resources/dude.png",\n            "id": 3\n        },\n        {\n            "name": "platform",\n            "width": 500,\n            "height": 64,\n            "type": "SpriteSheet",\n            "resourcePath": "resources/platform.png",\n            "id": 5\n        },\n        {\n            "name": "ground",\n            "width": 800,\n            "height": 32,\n            "type": "SpriteSheet",\n            "numOfFramesH": 25,\n            "resourcePath": "resources/ground.png",\n            "id": 57\n        }\n    ],\n    "GameObjectProto": [\n        {\n            "id": 4,\n            "name": "dude",\n            "width": 32,\n            "height": 48,\n            "type": "GameObjectProto",\n            "spriteSheet": {\n                "id": 3,\n                "type": "SpriteSheet"\n            },\n            "commonBehaviour": [\n                {\n                    "type": "CommonBehaviour",\n                    "id": 15\n                },\n                {\n                    "type": "CommonBehaviour",\n                    "id": 60\n                }\n            ],\n            "frameAnimations": [\n                {\n                    "type": "FrameAnimation",\n                    "id": 11\n                },\n                {\n                    "type": "FrameAnimation",\n                    "id": 12\n                },\n                {\n                    "type": "FrameAnimation",\n                    "id": 13\n                },\n                {\n                    "type": "FrameAnimation",\n                    "id": 14\n                }\n            ]\n        },\n        {\n            "id": 6,\n            "name": "platform",\n            "width": 500,\n            "height": 64,\n            "type": "GameObjectProto",\n            "spriteSheet": {\n                "id": 5,\n                "type": "SpriteSheet"\n            },\n            "commonBehaviour": [\n                {\n                    "type": "CommonBehaviour",\n                    "id": 61\n                }\n            ]\n        },\n        {\n            "id": 58,\n            "name": "ground1",\n            "width": 32,\n            "height": 32,\n            "type": "GameObjectProto",\n            "spriteSheet": {\n                "id": 57,\n                "type": "SpriteSheet"\n            },\n            "commonBehaviour": [\n                {\n                    "type": "CommonBehaviour",\n                    "id": 62\n                }\n            ],\n            "currFrameIndex": 9\n        }\n    ],\n    "GameObject": [\n        {\n            "id": 7,\n            "name": "dude",\n            "pos": {\n                "x": 294,\n                "y": 189\n            },\n            "layerId": 2,\n            "type": "GameObject",\n            "gameObjectProto": {\n                "id": 4,\n                "type": "GameObjectProto"\n            }\n        },\n        {\n            "id": 63,\n            "name": "ground1",\n            "pos": {\n                "x": 402,\n                "y": 44\n            },\n            "layerId": 2,\n            "type": "GameObject",\n            "gameObjectProto": {\n                "id": 58,\n                "type": "GameObjectProto"\n            }\n        },\n        {\n            "id": 64,\n            "name": "platform",\n            "pos": {\n                "x": 12,\n                "y": 411\n            },\n            "layerId": 2,\n            "type": "GameObject",\n            "gameObjectProto": {\n                "id": 6,\n                "type": "GameObjectProto"\n            }\n        },\n        {\n            "id": 65,\n            "name": "platform",\n            "pos": {\n                "x": 421,\n                "y": 193\n            },\n            "layerId": 2,\n            "type": "GameObject",\n            "gameObjectProto": {\n                "id": 6,\n                "type": "GameObjectProto"\n            }\n        }\n    ],\n    "FrameAnimation": [\n        {\n            "name": "left",\n            "type": "FrameAnimation",\n            "frames": [\n                0,\n                1,\n                2,\n                3\n            ],\n            "id": 11\n        },\n        {\n            "name": "right",\n            "type": "FrameAnimation",\n            "frames": [\n                5,\n                6,\n                7,\n                8\n            ],\n            "id": 12\n        },\n        {\n            "name": "idleLeft",\n            "type": "FrameAnimation",\n            "frames": [\n                4\n            ],\n            "id": 13\n        },\n        {\n            "name": "idleRight",\n            "type": "FrameAnimation",\n            "frames": [\n                4\n            ],\n            "id": 14\n        }\n    ],\n    "CommonBehaviour": [\n        {\n            "id": 15,\n            "name": "Control2Dir",\n            "type": "CommonBehaviour",\n            "parameters": {\n                "velocity": "130",\n                "walkLeftAnimation": "left",\n                "walkRightAnimation": "right",\n                "idleLeftAnimation": "idleLeft",\n                "idleRightAnimation": "idleRight"\n            }\n        },\n        {\n            "name": "Draggable",\n            "type": "CommonBehaviour",\n            "id": 60\n        },\n        {\n            "name": "Draggable",\n            "type": "CommonBehaviour",\n            "id": 61\n        },\n        {\n            "name": "Draggable",\n            "type": "CommonBehaviour",\n            "id": 62\n        }\n    ],\n    "Font": [\n        {\n            "name": "font1",\n            "type": "Font",\n            "resourcePath": "resources/font1.png",\n            "fontSize": 21,\n            "fontFamily": "Berlin Sans FB",\n            "fontContext": {\n                "symbols": {\n                    "0": {\n                        "x": 258,\n                        "y": 4,\n                        "width": 12,\n                        "height": 23\n                    },\n                    "1": {\n                        "x": 279,\n                        "y": 4,\n                        "width": 5,\n                        "height": 23\n                    },\n                    "2": {\n                        "x": 293,\n                        "y": 4,\n                        "width": 10,\n                        "height": 23\n                    },\n                    "3": {\n                        "x": 4,\n                        "y": 35,\n                        "width": 9,\n                        "height": 23\n                    },\n                    "4": {\n                        "x": 21,\n                        "y": 35,\n                        "width": 10,\n                        "height": 23\n                    },\n                    "5": {\n                        "x": 40,\n                        "y": 35,\n                        "width": 9,\n                        "height": 23\n                    },\n                    "6": {\n                        "x": 58,\n                        "y": 35,\n                        "width": 10,\n                        "height": 23\n                    },\n                    "7": {\n                        "x": 77,\n                        "y": 35,\n                        "width": 9,\n                        "height": 23\n                    },\n                    "8": {\n                        "x": 94,\n                        "y": 35,\n                        "width": 9,\n                        "height": 23\n                    },\n                    "9": {\n                        "x": 112,\n                        "y": 35,\n                        "width": 10,\n                        "height": 23\n                    },\n                    " ": {\n                        "x": 4,\n                        "y": 4,\n                        "width": 5,\n                        "height": 23\n                    },\n                    "!": {\n                        "x": 17,\n                        "y": 4,\n                        "width": 4,\n                        "height": 23\n                    },\n                    "\\"": {\n                        "x": 30,\n                        "y": 4,\n                        "width": 6,\n                        "height": 23\n                    },\n                    "#": {\n                        "x": 44,\n                        "y": 4,\n                        "width": 13,\n                        "height": 23\n                    },\n                    "$": {\n                        "x": 66,\n                        "y": 4,\n                        "width": 9,\n                        "height": 23\n                    },\n                    "%": {\n                        "x": 83,\n                        "y": 4,\n                        "width": 15,\n                        "height": 23\n                    },\n                    "&": {\n                        "x": 106,\n                        "y": 4,\n                        "width": 14,\n                        "height": 23\n                    },\n                    "\'": {\n                        "x": 129,\n                        "y": 4,\n                        "width": 3,\n                        "height": 23\n                    },\n                    "(": {\n                        "x": 140,\n                        "y": 4,\n                        "width": 7,\n                        "height": 23\n                    },\n                    ")": {\n                        "x": 156,\n                        "y": 4,\n                        "width": 7,\n                        "height": 23\n                    },\n                    "*": {\n                        "x": 171,\n                        "y": 4,\n                        "width": 7,\n                        "height": 23\n                    },\n                    "+": {\n                        "x": 187,\n                        "y": 4,\n                        "width": 8,\n                        "height": 23\n                    },\n                    ",": {\n                        "x": 203,\n                        "y": 4,\n                        "width": 4,\n                        "height": 23\n                    },\n                    "-": {\n                        "x": 216,\n                        "y": 4,\n                        "width": 8,\n                        "height": 23\n                    },\n                    ".": {\n                        "x": 232,\n                        "y": 4,\n                        "width": 4,\n                        "height": 23\n                    },\n                    "/": {\n                        "x": 244,\n                        "y": 4,\n                        "width": 6,\n                        "height": 23\n                    },\n                    ":": {\n                        "x": 130,\n                        "y": 35,\n                        "width": 4,\n                        "height": 23\n                    },\n                    ";": {\n                        "x": 143,\n                        "y": 35,\n                        "width": 4,\n                        "height": 23\n                    },\n                    "<": {\n                        "x": 155,\n                        "y": 35,\n                        "width": 7,\n                        "height": 23\n                    },\n                    "=": {\n                        "x": 170,\n                        "y": 35,\n                        "width": 9,\n                        "height": 23\n                    },\n                    ">": {\n                        "x": 187,\n                        "y": 35,\n                        "width": 7,\n                        "height": 23\n                    },\n                    "?": {\n                        "x": 203,\n                        "y": 35,\n                        "width": 8,\n                        "height": 23\n                    },\n                    "@": {\n                        "x": 219,\n                        "y": 35,\n                        "width": 13,\n                        "height": 23\n                    },\n                    "A": {\n                        "x": 240,\n                        "y": 35,\n                        "width": 13,\n                        "height": 23\n                    },\n                    "B": {\n                        "x": 262,\n                        "y": 35,\n                        "width": 12,\n                        "height": 23\n                    },\n                    "C": {\n                        "x": 283,\n                        "y": 35,\n                        "width": 12,\n                        "height": 23\n                    },\n                    "D": {\n                        "x": 4,\n                        "y": 66,\n                        "width": 14,\n                        "height": 23\n                    },\n                    "E": {\n                        "x": 26,\n                        "y": 66,\n                        "width": 11,\n                        "height": 23\n                    },\n                    "F": {\n                        "x": 45,\n                        "y": 66,\n                        "width": 11,\n                        "height": 23\n                    },\n                    "G": {\n                        "x": 64,\n                        "y": 66,\n                        "width": 14,\n                        "height": 23\n                    },\n                    "H": {\n                        "x": 86,\n                        "y": 66,\n                        "width": 15,\n                        "height": 23\n                    },\n                    "I": {\n                        "x": 109,\n                        "y": 66,\n                        "width": 4,\n                        "height": 23\n                    },\n                    "J": {\n                        "x": 122,\n                        "y": 66,\n                        "width": 5,\n                        "height": 23\n                    },\n                    "K": {\n                        "x": 136,\n                        "y": 66,\n                        "width": 12,\n                        "height": 23\n                    },\n                    "L": {\n                        "x": 157,\n                        "y": 66,\n                        "width": 10,\n                        "height": 23\n                    },\n                    "M": {\n                        "x": 175,\n                        "y": 66,\n                        "width": 16,\n                        "height": 23\n                    },\n                    "N": {\n                        "x": 200,\n                        "y": 66,\n                        "width": 15,\n                        "height": 23\n                    },\n                    "O": {\n                        "x": 223,\n                        "y": 66,\n                        "width": 15,\n                        "height": 23\n                    },\n                    "P": {\n                        "x": 246,\n                        "y": 66,\n                        "width": 13,\n                        "height": 23\n                    },\n                    "Q": {\n                        "x": 267,\n                        "y": 66,\n                        "width": 15,\n                        "height": 23\n                    },\n                    "R": {\n                        "x": 291,\n                        "y": 66,\n                        "width": 12,\n                        "height": 23\n                    },\n                    "S": {\n                        "x": 4,\n                        "y": 97,\n                        "width": 9,\n                        "height": 23\n                    },\n                    "T": {\n                        "x": 21,\n                        "y": 97,\n                        "width": 10,\n                        "height": 23\n                    },\n                    "U": {\n                        "x": 40,\n                        "y": 97,\n                        "width": 13,\n                        "height": 23\n                    },\n                    "V": {\n                        "x": 62,\n                        "y": 97,\n                        "width": 13,\n                        "height": 23\n                    },\n                    "W": {\n                        "x": 83,\n                        "y": 97,\n                        "width": 18,\n                        "height": 23\n                    },\n                    "X": {\n                        "x": 110,\n                        "y": 97,\n                        "width": 12,\n                        "height": 23\n                    },\n                    "Y": {\n                        "x": 130,\n                        "y": 97,\n                        "width": 12,\n                        "height": 23\n                    },\n                    "Z": {\n                        "x": 150,\n                        "y": 97,\n                        "width": 10,\n                        "height": 23\n                    },\n                    "[": {\n                        "x": 169,\n                        "y": 97,\n                        "width": 7,\n                        "height": 23\n                    },\n                    "\\\\": {\n                        "x": 184,\n                        "y": 97,\n                        "width": 6,\n                        "height": 23\n                    },\n                    "]": {\n                        "x": 198,\n                        "y": 97,\n                        "width": 7,\n                        "height": 23\n                    },\n                    "^": {\n                        "x": 214,\n                        "y": 97,\n                        "width": 9,\n                        "height": 23\n                    },\n                    "_": {\n                        "x": 232,\n                        "y": 97,\n                        "width": 9,\n                        "height": 23\n                    },\n                    "`": {\n                        "x": 249,\n                        "y": 97,\n                        "width": 7,\n                        "height": 23\n                    },\n                    "a": {\n                        "x": 264,\n                        "y": 97,\n                        "width": 11,\n                        "height": 23\n                    },\n                    "b": {\n                        "x": 284,\n                        "y": 97,\n                        "width": 11,\n                        "height": 23\n                    },\n                    "c": {\n                        "x": 303,\n                        "y": 97,\n                        "width": 8,\n                        "height": 23\n                    },\n                    "d": {\n                        "x": 4,\n                        "y": 128,\n                        "width": 11,\n                        "height": 23\n                    },\n                    "e": {\n                        "x": 23,\n                        "y": 128,\n                        "width": 10,\n                        "height": 23\n                    },\n                    "f": {\n                        "x": 41,\n                        "y": 128,\n                        "width": 6,\n                        "height": 23\n                    },\n                    "g": {\n                        "x": 55,\n                        "y": 128,\n                        "width": 10,\n                        "height": 23\n                    },\n                    "h": {\n                        "x": 74,\n                        "y": 128,\n                        "width": 10,\n                        "height": 23\n                    },\n                    "i": {\n                        "x": 93,\n                        "y": 128,\n                        "width": 4,\n                        "height": 23\n                    },\n                    "j": {\n                        "x": 106,\n                        "y": 128,\n                        "width": 4,\n                        "height": 23\n                    },\n                    "k": {\n                        "x": 119,\n                        "y": 128,\n                        "width": 11,\n                        "height": 23\n                    },\n                    "l": {\n                        "x": 138,\n                        "y": 128,\n                        "width": 4,\n                        "height": 23\n                    },\n                    "m": {\n                        "x": 151,\n                        "y": 128,\n                        "width": 17,\n                        "height": 23\n                    },\n                    "n": {\n                        "x": 176,\n                        "y": 128,\n                        "width": 10,\n                        "height": 23\n                    },\n                    "o": {\n                        "x": 195,\n                        "y": 128,\n                        "width": 10,\n                        "height": 23\n                    },\n                    "p": {\n                        "x": 214,\n                        "y": 128,\n                        "width": 11,\n                        "height": 23\n                    },\n                    "q": {\n                        "x": 234,\n                        "y": 128,\n                        "width": 11,\n                        "height": 23\n                    },\n                    "r": {\n                        "x": 254,\n                        "y": 128,\n                        "width": 6,\n                        "height": 23\n                    },\n                    "s": {\n                        "x": 269,\n                        "y": 128,\n                        "width": 6,\n                        "height": 23\n                    },\n                    "t": {\n                        "x": 283,\n                        "y": 128,\n                        "width": 7,\n                        "height": 23\n                    },\n                    "u": {\n                        "x": 298,\n                        "y": 128,\n                        "width": 11,\n                        "height": 23\n                    },\n                    "v": {\n                        "x": 4,\n                        "y": 159,\n                        "width": 10,\n                        "height": 23\n                    },\n                    "w": {\n                        "x": 22,\n                        "y": 159,\n                        "width": 15,\n                        "height": 23\n                    },\n                    "x": {\n                        "x": 45,\n                        "y": 159,\n                        "width": 9,\n                        "height": 23\n                    },\n                    "y": {\n                        "x": 63,\n                        "y": 159,\n                        "width": 9,\n                        "height": 23\n                    },\n                    "z": {\n                        "x": 81,\n                        "y": 159,\n                        "width": 8,\n                        "height": 23\n                    },\n                    "{": {\n                        "x": 97,\n                        "y": 159,\n                        "width": 7,\n                        "height": 23\n                    },\n                    "|": {\n                        "x": 113,\n                        "y": 159,\n                        "width": 5,\n                        "height": 23\n                    },\n                    "}": {\n                        "x": 126,\n                        "y": 159,\n                        "width": 7,\n                        "height": 23\n                    },\n                    "~": {\n                        "x": 141,\n                        "y": 159,\n                        "width": 10,\n                        "height": 23\n                    },\n                    "": {\n                        "x": 159,\n                        "y": 159,\n                        "width": 10,\n                        "height": 23\n                    },\n                    "": {\n                        "x": 178,\n                        "y": 159,\n                        "width": 15,\n                        "height": 23\n                    },\n                    "": {\n                        "x": 201,\n                        "y": 159,\n                        "width": 15,\n                        "height": 23\n                    },\n                    "": {\n                        "x": 225,\n                        "y": 159,\n                        "width": 15,\n                        "height": 23\n                    },\n                    "": {\n                        "x": 249,\n                        "y": 159,\n                        "width": 15,\n                        "height": 23\n                    },\n                    "": {\n                        "x": 273,\n                        "y": 159,\n                        "width": 15,\n                        "height": 23\n                    },\n                    "": {\n                        "x": 296,\n                        "y": 159,\n                        "width": 15,\n                        "height": 23\n                    },\n                    "": {\n                        "x": 4,\n                        "y": 190,\n                        "width": 15,\n                        "height": 23\n                    },\n                    "": {\n                        "x": 27,\n                        "y": 190,\n                        "width": 15,\n                        "height": 23\n                    },\n                    "": {\n                        "x": 51,\n                        "y": 190,\n                        "width": 15,\n                        "height": 23\n                    },\n                    "": {\n                        "x": 75,\n                        "y": 190,\n                        "width": 15,\n                        "height": 23\n                    },\n                    "": {\n                        "x": 99,\n                        "y": 190,\n                        "width": 15,\n                        "height": 23\n                    },\n                    "": {\n                        "x": 122,\n                        "y": 190,\n                        "width": 15,\n                        "height": 23\n                    },\n                    "": {\n                        "x": 146,\n                        "y": 190,\n                        "width": 15,\n                        "height": 23\n                    },\n                    "": {\n                        "x": 170,\n                        "y": 190,\n                        "width": 15,\n                        "height": 23\n                    },\n                    "": {\n                        "x": 194,\n                        "y": 190,\n                        "width": 15,\n                        "height": 23\n                    },\n                    "": {\n                        "x": 217,\n                        "y": 190,\n                        "width": 15,\n                        "height": 23\n                    },\n                    "": {\n                        "x": 241,\n                        "y": 190,\n                        "width": 15,\n                        "height": 23\n                    },\n                    "": {\n                        "x": 265,\n                        "y": 190,\n                        "width": 15,\n                        "height": 23\n                    },\n                    "": {\n                        "x": 289,\n                        "y": 190,\n                        "width": 15,\n                        "height": 23\n                    },\n                    "": {\n                        "x": 4,\n                        "y": 221,\n                        "width": 15,\n                        "height": 23\n                    },\n                    "": {\n                        "x": 27,\n                        "y": 221,\n                        "width": 15,\n                        "height": 23\n                    },\n                    "": {\n                        "x": 51,\n                        "y": 221,\n                        "width": 15,\n                        "height": 23\n                    },\n                    "А": {\n                        "x": 75,\n                        "y": 221,\n                        "width": 15,\n                        "height": 23\n                    },\n                    "Б": {\n                        "x": 98,\n                        "y": 221,\n                        "width": 12,\n                        "height": 23\n                    },\n                    "В": {\n                        "x": 118,\n                        "y": 221,\n                        "width": 14,\n                        "height": 23\n                    },\n                    "Г": {\n                        "x": 140,\n                        "y": 221,\n                        "width": 12,\n                        "height": 23\n                    },\n                    "Д": {\n                        "x": 160,\n                        "y": 221,\n                        "width": 14,\n                        "height": 23\n                    },\n                    "Е": {\n                        "x": 182,\n                        "y": 221,\n                        "width": 12,\n                        "height": 23\n                    },\n                    "Ж": {\n                        "x": 203,\n                        "y": 221,\n                        "width": 18,\n                        "height": 23\n                    },\n                    "З": {\n                        "x": 230,\n                        "y": 221,\n                        "width": 10,\n                        "height": 23\n                    },\n                    "И": {\n                        "x": 249,\n                        "y": 221,\n                        "width": 15,\n                        "height": 23\n                    },\n                    "Й": {\n                        "x": 272,\n                        "y": 221,\n                        "width": 15,\n                        "height": 23\n                    },\n                    "К": {\n                        "x": 295,\n                        "y": 221,\n                        "width": 14,\n                        "height": 23\n                    },\n                    "Л": {\n                        "x": 4,\n                        "y": 252,\n                        "width": 14,\n                        "height": 23\n                    },\n                    "М": {\n                        "x": 26,\n                        "y": 252,\n                        "width": 18,\n                        "height": 23\n                    },\n                    "Н": {\n                        "x": 52,\n                        "y": 252,\n                        "width": 15,\n                        "height": 23\n                    },\n                    "О": {\n                        "x": 76,\n                        "y": 252,\n                        "width": 15,\n                        "height": 23\n                    },\n                    "П": {\n                        "x": 99,\n                        "y": 252,\n                        "width": 15,\n                        "height": 23\n                    },\n                    "Р": {\n                        "x": 122,\n                        "y": 252,\n                        "width": 11,\n                        "height": 23\n                    },\n                    "С": {\n                        "x": 142,\n                        "y": 252,\n                        "width": 14,\n                        "height": 23\n                    },\n                    "Т": {\n                        "x": 164,\n                        "y": 252,\n                        "width": 12,\n                        "height": 23\n                    },\n                    "У": {\n                        "x": 184,\n                        "y": 252,\n                        "width": 14,\n                        "height": 23\n                    },\n                    "Ф": {\n                        "x": 207,\n                        "y": 252,\n                        "width": 16,\n                        "height": 23\n                    },\n                    "Х": {\n                        "x": 232,\n                        "y": 252,\n                        "width": 15,\n                        "height": 23\n                    },\n                    "Ц": {\n                        "x": 255,\n                        "y": 252,\n                        "width": 15,\n                        "height": 23\n                    },\n                    "Ч": {\n                        "x": 278,\n                        "y": 252,\n                        "width": 13,\n                        "height": 23\n                    },\n                    "Ш": {\n                        "x": 4,\n                        "y": 283,\n                        "width": 21,\n                        "height": 23\n                    },\n                    "Щ": {\n                        "x": 33,\n                        "y": 283,\n                        "width": 21,\n                        "height": 23\n                    },\n                    "Ъ": {\n                        "x": 62,\n                        "y": 283,\n                        "width": 14,\n                        "height": 23\n                    },\n                    "Ы": {\n                        "x": 85,\n                        "y": 283,\n                        "width": 18,\n                        "height": 23\n                    },\n                    "Ь": {\n                        "x": 111,\n                        "y": 283,\n                        "width": 12,\n                        "height": 23\n                    },\n                    "Э": {\n                        "x": 131,\n                        "y": 283,\n                        "width": 13,\n                        "height": 23\n                    },\n                    "Ю": {\n                        "x": 153,\n                        "y": 283,\n                        "width": 21,\n                        "height": 23\n                    },\n                    "Я": {\n                        "x": 183,\n                        "y": 283,\n                        "width": 14,\n                        "height": 23\n                    },\n                    "а": {\n                        "x": 205,\n                        "y": 283,\n                        "width": 9,\n                        "height": 23\n                    },\n                    "б": {\n                        "x": 222,\n                        "y": 283,\n                        "width": 10,\n                        "height": 23\n                    },\n                    "в": {\n                        "x": 241,\n                        "y": 283,\n                        "width": 9,\n                        "height": 23\n                    },\n                    "г": {\n                        "x": 258,\n                        "y": 283,\n                        "width": 8,\n                        "height": 23\n                    },\n                    "д": {\n                        "x": 275,\n                        "y": 283,\n                        "width": 10,\n                        "height": 23\n                    },\n                    "е": {\n                        "x": 294,\n                        "y": 283,\n                        "width": 9,\n                        "height": 23\n                    },\n                    "ж": {\n                        "x": 4,\n                        "y": 314,\n                        "width": 14,\n                        "height": 23\n                    },\n                    "з": {\n                        "x": 26,\n                        "y": 314,\n                        "width": 8,\n                        "height": 23\n                    },\n                    "и": {\n                        "x": 42,\n                        "y": 314,\n                        "width": 11,\n                        "height": 23\n                    },\n                    "й": {\n                        "x": 62,\n                        "y": 314,\n                        "width": 11,\n                        "height": 23\n                    },\n                    "к": {\n                        "x": 81,\n                        "y": 314,\n                        "width": 10,\n                        "height": 23\n                    },\n                    "л": {\n                        "x": 99,\n                        "y": 314,\n                        "width": 10,\n                        "height": 23\n                    },\n                    "м": {\n                        "x": 117,\n                        "y": 314,\n                        "width": 13,\n                        "height": 23\n                    },\n                    "н": {\n                        "x": 139,\n                        "y": 314,\n                        "width": 11,\n                        "height": 23\n                    },\n                    "о": {\n                        "x": 158,\n                        "y": 314,\n                        "width": 10,\n                        "height": 23\n                    },\n                    "п": {\n                        "x": 176,\n                        "y": 314,\n                        "width": 11,\n                        "height": 23\n                    },\n                    "р": {\n                        "x": 196,\n                        "y": 314,\n                        "width": 10,\n                        "height": 23\n                    },\n                    "с": {\n                        "x": 214,\n                        "y": 314,\n                        "width": 9,\n                        "height": 23\n                    },\n                    "т": {\n                        "x": 232,\n                        "y": 314,\n                        "width": 9,\n                        "height": 23\n                    },\n                    "у": {\n                        "x": 249,\n                        "y": 314,\n                        "width": 10,\n                        "height": 23\n                    },\n                    "ф": {\n                        "x": 267,\n                        "y": 314,\n                        "width": 13,\n                        "height": 23\n                    },\n                    "х": {\n                        "x": 289,\n                        "y": 314,\n                        "width": 10,\n                        "height": 23\n                    },\n                    "ц": {\n                        "x": 4,\n                        "y": 345,\n                        "width": 11,\n                        "height": 23\n                    },\n                    "ч": {\n                        "x": 23,\n                        "y": 345,\n                        "width": 10,\n                        "height": 23\n                    },\n                    "ш": {\n                        "x": 41,\n                        "y": 345,\n                        "width": 16,\n                        "height": 23\n                    },\n                    "щ": {\n                        "x": 65,\n                        "y": 345,\n                        "width": 16,\n                        "height": 23\n                    },\n                    "ъ": {\n                        "x": 90,\n                        "y": 345,\n                        "width": 10,\n                        "height": 23\n                    },\n                    "ы": {\n                        "x": 108,\n                        "y": 345,\n                        "width": 14,\n                        "height": 23\n                    },\n                    "ь": {\n                        "x": 131,\n                        "y": 345,\n                        "width": 9,\n                        "height": 23\n                    },\n                    "э": {\n                        "x": 148,\n                        "y": 345,\n                        "width": 9,\n                        "height": 23\n                    },\n                    "ю": {\n                        "x": 165,\n                        "y": 345,\n                        "width": 15,\n                        "height": 23\n                    },\n                    "я": {\n                        "x": 189,\n                        "y": 345,\n                        "width": 9,\n                        "height": 23\n                    },\n                    "ѐ": {\n                        "x": 207,\n                        "y": 345,\n                        "width": 9,\n                        "height": 23\n                    },\n                    "ё": {\n                        "x": 224,\n                        "y": 345,\n                        "width": 9,\n                        "height": 23\n                    },\n                    "ђ": {\n                        "x": 241,\n                        "y": 345,\n                        "width": 10,\n                        "height": 23\n                    },\n                    "ѓ": {\n                        "x": 259,\n                        "y": 345,\n                        "width": 8,\n                        "height": 23\n                    },\n                    "є": {\n                        "x": 276,\n                        "y": 345,\n                        "width": 9,\n                        "height": 23\n                    },\n                    "ѕ": {\n                        "x": 293,\n                        "y": 345,\n                        "width": 8,\n                        "height": 23\n                    },\n                    "і": {\n                        "x": 309,\n                        "y": 345,\n                        "width": 5,\n                        "height": 23\n                    },\n                    "ї": {\n                        "x": 4,\n                        "y": 376,\n                        "width": 5,\n                        "height": 23\n                    },\n                    "ј": {\n                        "x": 17,\n                        "y": 376,\n                        "width": 5,\n                        "height": 23\n                    },\n                    "љ": {\n                        "x": 31,\n                        "y": 376,\n                        "width": 15,\n                        "height": 23\n                    },\n                    "њ": {\n                        "x": 54,\n                        "y": 376,\n                        "width": 15,\n                        "height": 23\n                    },\n                    "ћ": {\n                        "x": 78,\n                        "y": 376,\n                        "width": 10,\n                        "height": 23\n                    }\n                },\n                "width": 320,\n                "height": 403\n            },\n            "id": 22\n        }\n    ],\n    "TileMap": [\n        {\n            "id": 52,\n            "width": 50,\n            "height": 50,\n            "type": "TileMap",\n            "spriteSheet": {\n                "id": 57,\n                "type": "SpriteSheet"\n            },\n            "data": [\n                [],\n                null,\n                null,\n                [\n                    null,\n                    null,\n                    null,\n                    null,\n                    2,\n                    null,\n                    null\n                ],\n                [\n                    null,\n                    null\n                ],\n                [\n                    1,\n                    null,\n                    3,\n                    null,\n                    null,\n                    1,\n                    1,\n                    1,\n                    1,\n                    1,\n                    1,\n                    1,\n                    1,\n                    1\n                ],\n                null,\n                [\n                    null,\n                    1,\n                    null,\n                    1\n                ]\n            ]\n        }\n    ]\n}';
}, function(t, e, n) {
    "use strict";
    e.__esModule = true;
    e.PlatformBehaviour = e.MainSceneBehaviour = e.Ground1Behaviour = e.DudeBehaviour = undefined;
    var i = n(14);
    var r = n(15);
    var o = n(16);
    var a = n(17);
    e.DudeBehaviour = i.DudeBehaviour;
    e.Ground1Behaviour = r.Ground1Behaviour;
    e.MainSceneBehaviour = o.MainSceneBehaviour;
    e.PlatformBehaviour = a.PlatformBehaviour;
}, function(t, e, n) {
    "use strict";
    e.__esModule = true;
    function i(t, e) {
        if (!(t instanceof e)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    var r = e.DudeBehaviour = function() {
        function t() {
            i(this, t);
        }
        t.prototype.onCreate = function t() {
            this.game.camera.followTo(this.gameObject);
        };
        t.prototype.onUpdate = function t() {
            if (this.game.keyboard.isJustPressed(this.game.keyboard.KEY.UP)) {
                if (this.gameObject.rigidBody.onFloor) this.gameObject.rigidBody.vel.addXY(0, -340);
            }
            if (this.game.keyboard.isPressed(this.game.keyboard.KEY.A)) {
                this.gameObject.rigidBody.vel.addXY(0, -50);
            }
        };
        t.prototype.onDestroy = function t() {};
        return t;
    }();
}, function(t, e, n) {
    "use strict";
    e.__esModule = true;
    function i(t, e) {
        if (!(t instanceof e)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    var r = e.Ground1Behaviour = function() {
        function t() {
            i(this, t);
        }
        t.prototype.onCreate = function t() {};
        t.prototype.onUpdate = function t() {};
        t.prototype.onDestroy = function t() {};
        return t;
    }();
}, function(t, e, n) {
    "use strict";
    e.__esModule = true;
    function i(t, e) {
        if (!(t instanceof e)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    var r = e.MainSceneBehaviour = function() {
        function t() {
            i(this, t);
        }
        t.prototype.onCreate = function t() {
            this.scene.on("mouseMove", function(t) {});
        };
        t.prototype.onUpdate = function t() {};
        t.prototype.onDestroy = function t() {};
        return t;
    }();
}, function(t, e, n) {
    "use strict";
    e.__esModule = true;
    function i(t, e) {
        if (!(t instanceof e)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    var r = e.PlatformBehaviour = function() {
        function t() {
            i(this, t);
        }
        t.prototype.onCreate = function t() {
            this.gameObject.rigidBody.static = true;
        };
        t.prototype.onUpdate = function t() {};
        t.prototype.onDestroy = function t() {};
        return t;
    }();
}, function(t, e, n) {
    "use strict";
    e.__esModule = true;
    e.Control2Dir = e.Control4Dir = e.Draggable = undefined;
    var i = n(21);
    var r = h(i);
    var o = n(20);
    var a = h(o);
    var s = n(19);
    var u = h(s);
    function h(t) {
        return t && t.__esModule ? t : {
            default: t
        };
    }
    e.Draggable = r.default;
    e.Control4Dir = a.default;
    e.Control2Dir = u.default;
}, function(t, e, n) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var i = n(22);
    var r = o(i);
    function o(t) {
        return t && t.__esModule ? t : {
            default: t
        };
    }
    function a(t, e) {
        if (!(t instanceof e)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    function s(t, e) {
        if (!t) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return e && (typeof e === "object" || typeof e === "function") ? e : t;
    }
    function u(t, e) {
        if (typeof e !== "function" && e !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        }
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (e) Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e;
    }
    var h = function(t) {
        u(e, t);
        function e(n) {
            a(this, e);
            return s(this, t.call(this, n));
        }
        e.prototype.manage = function e(n, i) {
            t.prototype.manage.call(this, n, i);
        };
        e.prototype.onUpdate = function t() {
            var e = this.game.keyboard;
            var n = this.parameters;
            var i = this.gameObject;
            if (e.isPressed(e.KEY.LEFT)) {
                i.rigidBody.vel.x = -n.velocity;
                this.go("Left");
            }
            if (e.isPressed(e.KEY.RIGHT)) {
                i.rigidBody.vel.x = n.velocity;
                this.go("Right");
            }
            if (e.isJustReleased(e.KEY.LEFT)) {
                this.stop();
            } else if (e.isJustReleased(e.KEY.RIGHT)) {
                this.stop();
            }
        };
        return e;
    }(r.default);
    e.default = h;
}, function(t, e, n) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var i = n(23);
    var r = o(i);
    function o(t) {
        return t && t.__esModule ? t : {
            default: t
        };
    }
    function a(t, e) {
        if (!(t instanceof e)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    function s(t, e) {
        if (!t) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return e && (typeof e === "object" || typeof e === "function") ? e : t;
    }
    function u(t, e) {
        if (typeof e !== "function" && e !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        }
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (e) Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e;
    }
    var h = function(t) {
        u(e, t);
        function e(n) {
            a(this, e);
            return s(this, t.call(this, n));
        }
        e.prototype.manage = function e(n, i) {
            t.prototype.manage.call(this, n, i);
        };
        e.prototype.onUpdate = function t() {
            var e = this.game.keyboard;
            var n = this.parameters;
            var i = this.gameObject;
            if (e.isPressed(e.KEY.UP)) {
                i.rigidBody.vel.y = -n.velocity;
                this.go("Up");
            }
            if (e.isPressed(e.KEY.DOWN)) {
                i.rigidBody.vel.y = n.velocity;
                this.go("Down");
            }
            if (e.isPressed(e.KEY.LEFT)) {
                i.rigidBody.vel.x = -n.velocity;
                this.go("Left");
            }
            if (e.isPressed(e.KEY.RIGHT)) {
                i.rigidBody.vel.x = n.velocity;
                this.go("Right");
            }
            if (e.isJustReleased(e.KEY.LEFT)) {
                this.stop();
            } else if (e.isJustReleased(e.KEY.RIGHT)) {
                this.stop();
            } else if (e.isJustReleased(e.KEY.UP)) {
                this.stop();
            } else if (e.isJustReleased(e.KEY.DOWN)) {
                this.stop();
            }
        };
        return e;
    }(r.default);
    e.default = h;
}, function(t, e, n) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var i = n(2);
    var r = o(i);
    function o(t) {
        return t && t.__esModule ? t : {
            default: t
        };
    }
    function a(t, e) {
        if (!(t instanceof e)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    function s(t, e) {
        if (!t) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return e && (typeof e === "object" || typeof e === "function") ? e : t;
    }
    function u(t, e) {
        if (typeof e !== "function" && e !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        }
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (e) Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e;
    }
    var h = function(t) {
        u(e, t);
        e._getEventId = function t(e) {
            return e.id || 1;
        };
        function e(n) {
            a(this, e);
            var i = s(this, t.call(this));
            i.game = n;
            i.points = {};
            return i;
        }
        e.prototype.manage = function t(n, i) {
            var r = this;
            n.on("click", function(t) {
                r.points[e._getEventId(t)] = {
                    mX: t.objectX,
                    mY: t.objectY,
                    target: n,
                    preventDefault: function t() {
                        this.defaultPrevented = true;
                    }
                };
            });
            var o = this.game.getCurrScene();
            o.on("mouseDown", function(t) {
                var n = e._getEventId(t);
                var i = r.points[n];
                if (!i) return;
                i.dragStartX = i.target.pos.x;
                i.dragStartY = i.target.pos.y;
            });
            o.on("mouseMove", function(t) {
                var i = e._getEventId(t);
                var o = r.points[i];
                if (!o) return;
                if (!o.dragStart) {
                    o.dragStart = true;
                    o.target.trigger("dragStart", o);
                    if (o.defaultPrevented) {
                        delete r.points[i];
                        return;
                    }
                }
                n.pos.x = t.screenX - o.mX;
                n.pos.y = t.screenY - o.mY;
            });
            o.on("mouseUp", function(t) {
                var i = e._getEventId(t);
                var o = r.points[i];
                if (!o) return;
                if (o.dragStart) {
                    o.x = n.pos.x;
                    o.y = n.pos.y;
                    o.target.trigger("dragStop", o);
                }
                delete r.points[i];
            });
        };
        return e;
    }(r.default);
    e.default = h;
}, function(t, e, n) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var i, r;
    var o = n(3);
    var a = s(o);
    function s(t) {
        return t && t.__esModule ? t : {
            default: t
        };
    }
    function u(t, e) {
        if (!(t instanceof e)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    function h(t, e) {
        if (!t) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return e && (typeof e === "object" || typeof e === "function") ? e : t;
    }
    function f(t, e) {
        if (typeof e !== "function" && e !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        }
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (e) Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e;
    }
    var c = (r = i = function(t) {
        f(e, t);
        function e(n) {
            u(this, e);
            return h(this, t.call(this, n));
        }
        e.prototype.manage = function n(i, r) {
            t.prototype.manage.call(this, i, r, e.DIRS);
        };
        e.prototype.stop = function e() {
            t.prototype.stop.call(this);
            this.gameObject.rigidBody.vel.x = 0;
        };
        return e;
    }(a.default), i.DIRS = [ "Left", "Right" ], r);
    e.default = c;
}, function(t, e, n) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var i, r;
    var o = n(3);
    var a = s(o);
    function s(t) {
        return t && t.__esModule ? t : {
            default: t
        };
    }
    function u(t, e) {
        if (!(t instanceof e)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    function h(t, e) {
        if (!t) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return e && (typeof e === "object" || typeof e === "function") ? e : t;
    }
    function f(t, e) {
        if (typeof e !== "function" && e !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        }
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (e) Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e;
    }
    var c = (r = i = function(t) {
        f(e, t);
        function e(n) {
            u(this, e);
            return h(this, t.call(this, n));
        }
        e.prototype.manage = function n(i, r) {
            t.prototype.manage.call(this, i, r, e.DIRS);
        };
        e.prototype.stop = function e() {
            t.prototype.stop.call(this);
            this.gameObject.rigidBody.vel.x = 0;
            this.gameObject.rigidBody.vel.y = 0;
        };
        return e;
    }(a.default), i.DIRS = [ "Left", "Right", "Up", "Down" ], r);
    e.default = c;
}, function(t, e, n) {
    "use strict";
    e.__esModule = true;
    function i(t, e) {
        if (!(t instanceof e)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    var r = function() {
        function t(e) {
            i(this, t);
            this.objFollowTo = null;
            this.scene = null;
            this.pos = {
                x: 0,
                y: 0
            };
            this.game = e;
        }
        t.prototype.followTo = function t(e) {
            if (1 && !e) throw "Camera:followTo() - gameObject not provided";
            this.objFollowTo = e;
            this.scene = this.game._currentScene;
            if (this.scene.tileMap.spriteSheet) {
                this.sceneWidth = this.scene.tileMap.spriteSheet._frameWidth * this.scene.tileMap.width;
                this.sceneHeight = this.scene.tileMap.spriteSheet._frameHeight * this.scene.tileMap.height;
            } else {
                this.sceneWidth = this.game.getCurrScene().width || this.game.width;
                this.sceneHeight = this.game.getCurrScene().height || this.game.height;
            }
        };
        t.prototype.update = function t() {
            if (!this.objFollowTo) return;
            var e = this.pos;
            var n = this.scene.tileMap.spriteSheet ? this.scene.tileMap.spriteSheet._frameWidth : 0;
            var i = this.scene.tileMap.spriteSheet ? this.scene.tileMap.spriteSheet._frameHeight : 0;
            var r = this.game.width;
            var o = this.game.height;
            var a = r / 2;
            var s = o / 2;
            e.x = this.objFollowTo.pos.x - a;
            e.y = this.objFollowTo.pos.y - s;
            if (e.x < 0) e.x = 0;
            if (e.y < 0) e.y = 0;
            if (e.x > this.sceneWidth - r + n) e.x = this.sceneWidth - r + n;
            if (e.y > this.sceneHeight - o + i) e.y = this.sceneHeight - o + i;
        };
        return t;
    }();
    e.default = r;
}, function(t, e, n) {
    "use strict";
    e.__esModule = true;
    function i(t, e) {
        if (!(t instanceof e)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    var r = 2;
    var o = 1;
    var a = 0;
    var s = -1;
    var u = function() {
        function t(e) {
            i(this, t);
            this.KEY = {
                SPACE: 32,
                A: 65,
                B: 66,
                C: 67,
                D: 68,
                E: 69,
                F: 70,
                G: 71,
                H: 72,
                I: 73,
                J: 74,
                K: 75,
                L: 76,
                M: 77,
                N: 78,
                O: 79,
                P: 80,
                Q: 81,
                R: 82,
                S: 83,
                T: 84,
                U: 85,
                V: 86,
                W: 87,
                X: 88,
                Y: 89,
                Z: 80,
                LEFT: 37,
                UP: 38,
                RIGHT: 39,
                DOWN: 40
            };
            this.buffer = {};
            this.game = e;
        }
        t.prototype.emulatePress = function t(e) {
            this.buffer[e] = r;
        };
        t.prototype.emulateRelease = function t(e) {
            this.buffer[e] = a;
        };
        t.prototype.isPressed = function t(e) {
            return this.buffer[e] >= o;
        };
        t.prototype.isJustPressed = function t(e) {
            return this.buffer[e] === r;
        };
        t.prototype.isReleased = function t(e) {
            return this.buffer[e] <= a;
        };
        t.prototype.isJustReleased = function t(e) {
            return this.buffer[e] === a;
        };
        t.prototype.update = function t() {
            var e = this;
            if (1 && window.canceled) return;
            Object.keys(this.buffer).forEach(function(t) {
                if (e.buffer[t] === s) delete e.buffer[t]; else if (e.buffer[t] === a) e.buffer[t] = s;
                if (e.buffer[t] === r) {
                    e.buffer[t] = o;
                }
            });
        };
        t.prototype.listenTo = function t() {
            var e = this;
            window.addEventListener("keydown", function(t) {
                var n = t.keyCode;
                if (e.buffer[n] >= o) return;
                e.buffer[n] = r;
            });
            window.addEventListener("keyup", function(t) {
                var n = t.keyCode;
                e.buffer[n] = a;
            });
        };
        return t;
    }();
    e.default = u;
}, function(t, e, n) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var i = n(1);
    var r = o(i);
    function o(t) {
        return t && t.__esModule ? t : {
            default: t
        };
    }
    function a(t, e) {
        if (!(t instanceof e)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    var s = function() {
        function t(e) {
            a(this, t);
            this.objectsCaptured = {};
            this.game = e;
        }
        t.prototype.listenTo = function t(e) {
            var n = this;
            e.ontouchstart = function(t) {
                var e = t.touches.length;
                while (e--) {
                    n.resolveClick(t.touches[e]);
                }
            };
            e.onmousedown = function(t) {
                t.button === 0 && n.resolveClick(t);
            };
            e.ontouchend = e.ontouchcancel = function(t) {
                var e = t.changedTouches.length;
                while (e--) {
                    n.resolveMouseUp(t.changedTouches[e]);
                }
            };
            e.onmouseup = function(t) {
                n.resolveMouseUp(t);
            };
            e.ontouchmove = function(t) {
                console.log(11);
                var e = t.touches.length;
                while (e--) {
                    n.resolveMouseMove(t.touches[e], true);
                }
            };
            e.onmousemove = function(t) {
                var e = t.buttons === 1;
                n.resolveMouseMove(t, e);
            };
            e.ondblclick = function(t) {
                n.resolveDoubleClick(t);
            };
        };
        t.prototype.resolveScreenPoint = function t(e) {
            return {
                x: ~~((e.clientX - this.game.pos.x) / this.game.scale.x) + this.game.camera.pos.x,
                y: ~~((e.clientY - this.game.pos.y) / this.game.scale.y) + this.game.camera.pos.y,
                id: e.identifier || 0
            };
        };
        t.prototype.triggerEvent = function t(e, n, i) {
            var o = this.game;
            var a = o.getCurrScene();
            if (!a) return;
            var s = this.resolveScreenPoint(e);
            t: for (var u = 0; u < a.layers.length; u++) {
                var h = a.layers[a.layers.length - 1 - u];
                for (var f = 0; f < h.gameObjects.length; f++) {
                    var c = h.gameObjects[f];
                    if (r.default.isPointInRect(s, c.getRect())) {
                        c.trigger(n, {
                            screenX: s.x,
                            screenY: s.y,
                            objectX: s.x - c.pos.x,
                            objectY: s.y - c.pos.y,
                            id: s.id,
                            isMouseDown: i
                        });
                        break t;
                    }
                }
            }
            a.trigger(n, {
                screenX: s.x,
                screenY: s.y,
                id: s.id,
                target: a,
                isMouseDown: i
            });
            return s;
        };
        t.prototype.resolveClick = function t(e) {
            if (window.canceled) return;
            this.triggerEvent(e, "click");
            this.triggerEvent(e, "mouseDown");
        };
        t.prototype.resolveMouseMove = function t(e, n) {
            if (1 && window.canceled) return;
            var i = this.triggerEvent(e, "mouseMove", n);
            if (!i) return;
            var r = this.objectsCaptured[i.id];
            if (r && r !== i.object) {
                r.trigger("mouseLeave");
                delete this.objectsCaptured[i.id];
            }
            if (i.object && r !== i.object) {
                i.object.trigger("mouseEnter");
                this.objectsCaptured[i.id] = i.object;
            }
        };
        t.prototype.resolveMouseUp = function t(e) {
            if (1 && window.canceled) return;
            var n = this.triggerEvent(e, "mouseUp");
            if (!n) return;
            var i = this.objectsCaptured[n.id];
            if (!i) return;
            i.trigger("mouseUp");
            delete this.objectsCaptured[n.id];
        };
        t.prototype.resolveDoubleClick = function t(e) {
            if (1 && window.canceled) return;
            var n = this.triggerEvent(e, "doubleClick");
            if (!n) return;
            delete this.objectsCaptured[n.id];
        };
        return t;
    }();
    e.default = s;
}, function(t, e, n) {
    "use strict";
    e.__esModule = true;
    function i(t, e) {
        if (!(t instanceof e)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    var r = function() {
        function t() {
            i(this, t);
            this.events = {};
        }
        t.prototype._on = function t(e, n) {
            this.events[e] = this.events[e] || [];
            this.events[e].push(n);
        };
        t.prototype.on = function t(e, n) {
            if (typeof e === "string") {
                this._on(e, n);
            } else if (e.splice) {
                e.forEach(function(t) {
                    this._on(t, n);
                });
            }
        };
        t.prototype.trigger = function t(e, n) {
            var i = this.events[e];
            if (!i) return;
            var r = i.length;
            while (r--) {
                i[r](n);
            }
        };
        return t;
    }();
    e.default = r;
}, function(t, e, n) {
    "use strict";
    e.__esModule = true;
    function i(t, e) {
        if (!(t instanceof e)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    var r = function() {
        function t() {
            i(this, t);
            this.tasksResolved = 0;
            this.tasks = [];
            this.tasksProgressById = {};
            this.onResolved = null;
            this.onProgress = null;
        }
        t.prototype.size = function t() {
            return this.tasks.length;
        };
        t.prototype.calcProgress = function t() {
            var e = 0;
            Object.keys(this.tasksProgressById).forEach(function(t) {
                e += this.tasksProgressById[t] || 0;
            });
            return e / this.tasks.length;
        };
        t.prototype.addTask = function t(e, n) {
            this.tasks.push(e);
            this.tasksProgressById[n] = 0;
        };
        t.prototype.progressTask = function t(e, n) {
            this.tasksProgressById[e] = n;
            this.onProgress && this.onProgress(this.calcProgress());
        };
        t.prototype.resolveTask = function t(e) {
            this.tasksResolved++;
            this.tasksProgressById[e] = 1;
            if (this.tasks.length == this.tasksResolved) {
                this.onProgress && this.onProgress(1);
                if (this.onResolved) this.onResolved();
            } else {
                this.onProgress && this.onProgress(this.calcProgress());
            }
        };
        t.prototype.start = function t() {
            if (this.size() == 0) this.onResolved();
            this.tasks.forEach(function(t) {
                t && t();
            });
        };
        return t;
    }();
    e.default = r;
}, function(t, e, n) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var i = n(37);
    var r = s(i);
    var o = n(1);
    var a = s(o);
    function s(t) {
        return t && t.__esModule ? t : {
            default: t
        };
    }
    function u(t, e) {
        if (!(t instanceof e)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    var h = function() {
        function t(e) {
            u(this, t);
            this.vel = new r.default();
            this.game = e.game;
            this.gameObject = e;
        }
        t.prototype.update = function t(e, n) {
            if (n > 20) n = 20;
            if (!this.gameObject.rigidBody.static) {
                var i = this.vel.x * n / 1e3;
                var r = this.vel.y * n / 1e3;
                var o = this.gameObject.pos.y + r;
                this.game._collider.moveBy(this.gameObject, i, r);
                this.gameObject.rigidBody.onFloor = o > this.gameObject.pos.y;
                if (o !== this.gameObject.pos.y) this.vel.y = 0;
                this.vel.y += this.game.gravityConstant * n / 1e3;
            }
        };
        return t;
    }();
    e.default = h;
}, function(t, e, n) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var i = n(1);
    function r(t, e) {
        if (!(t instanceof e)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    var o = function() {
        function t(e) {
            r(this, t);
            this.game = e;
        }
        t.overlapTest = function t(e, n) {
            return e.x < n.x + n.width && e.x + e.width > n.x && e.y < n.y + n.height && e.y + e.height > n.y;
        };
        t.prototype.moveBy = function e(n, i, r) {
            var o = this.game.getCurrScene().getAllGameObjects().concat(this.game._currentScene.tileMap.getTilesAtRect(n.getRect()));
            var a = n.getRect();
            a.x += i;
            a.y += r;
            var s = false, u = false;
            for (var h = 0, f = o.length; h < f; h++) {
                var c = o[h];
                var l = c.getRect();
                if (n !== o[h] && t.overlapTest(a, l)) {
                    var p = a.bottom - l.y;
                    var d = l.bottom - a.y;
                    var y = a.x + a.width - l.x;
                    var g = l.right - a.x;
                    var m = Math.min(p, d, y, g);
                    if (p === m) {
                        n.pos.y = l.y - a.height;
                        u = true;
                    } else if (d === m) {
                        n.pos.y = l.bottom;
                        u = true;
                    } else if (y === m) {
                        n.pos.x = l.x - a.width;
                        s = true;
                    } else if (g === m) {
                        n.pos.x = l.x + l.width;
                        s = true;
                    }
                }
            }
            if (!s) n.pos.x += i;
            if (!u) n.pos.y += r;
        };
        t.prototype.moveTo = function e(n, i, r) {
            var o = n.getRect();
            var a = false;
            if (n.rigidBody) {
                this.game.getCurrScene().getAllGameObjects().concat(this.game._currentScene.tileMap.getTilesAtRect(o)).some(function(e) {
                    if (t.overlapTest(o, e.getRect())) {
                        a = true;
                        return true;
                    }
                });
            }
            if (a) return;
            n.pos.x = i;
            n.pos.y = r;
        };
        return t;
    }();
    e.default = o;
}, function(t, e, n) {
    "use strict";
    Array.prototype.remove = function(t) {
        var e = this.length;
        while (e--) {
            if (t(this[e], e)) {
                this.splice(e, 1);
            }
        }
    };
    window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || function(t) {
        setTimeout(t, 17);
    };
    if (!Array.prototype.find) {
        Array.prototype.find = function(t) {
            if (this == null) {
                throw new TypeError("Array.prototype.find called on null or undefined");
            }
            if (typeof t !== "function") {
                throw new TypeError("predicate must be a function");
            }
            var e = Object(this);
            var n = e.length >>> 0;
            var i = arguments[1];
            var r = void 0;
            for (var o = 0; o < n; o++) {
                r = e[o];
                if (t.call(i, r, o, e)) {
                    return r;
                }
            }
            return undefined;
        };
    }
}, function(t, e, n) {
    "use strict";
    e.__esModule = true;
    function i(t, e) {
        if (!(t instanceof e)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    var r = function() {
        function t(e) {
            i(this, t);
            this.renderableCache = {};
            this.container = null;
            this.game = e;
        }
        t.prototype.onResize = function t() {
            var e = this.container.height / this.container.width;
            var n = window.innerHeight / window.innerWidth;
            var i = void 0;
            var r = void 0;
            if (n < e) {
                r = window.innerHeight;
                i = r / e;
            } else {
                i = window.innerWidth;
                r = i * e;
            }
            this.game.scale.x = i / this.game.width;
            this.game.scale.y = r / this.game.height;
            this.game.pos.x = (window.innerWidth - i) / 2;
            this.game.pos.y = (window.innerHeight - r) / 2;
            this.container.style.width = i + "px";
            this.container.style.height = r + "px";
        };
        t.prototype.beginFrameBuffer = function t() {};
        t.prototype.flipFrameBuffer = function t() {};
        t.prototype.registerResize = function t() {
            var e = this;
            this.onResize();
            window.addEventListener("resize", function() {
                e.onResize();
            });
        };
        t.prototype.loadTextureInfo = function t(e, n) {};
        t.prototype.getTextureInfo = function t(e) {};
        return t;
    }();
    e.default = r;
}, function(t, e, n) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var i = n(32);
    var r = o(i);
    function o(t) {
        return t && t.__esModule ? t : {
            default: t
        };
    }
    function a(t, e) {
        if (!(t instanceof e)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    function s(t, e) {
        if (!t) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return e && (typeof e === "object" || typeof e === "function") ? e : t;
    }
    function u(t, e) {
        if (typeof e !== "function" && e !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        }
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (e) Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e;
    }
    var h = function(t) {
        u(e, t);
        function e(n) {
            a(this, e);
            var i = s(this, t.call(this, n));
            var r = document.createElement("canvas");
            i.ctx = r.getContext("2d");
            document.body.appendChild(r);
            r.setAttribute("width", n.width);
            r.setAttribute("height", n.height);
            i.container = r;
            i.registerResize();
            return i;
        }
        e.prototype.draw = function t(e) {
            var n = this.ctx;
            n.save();
            n.translate(e.pos.x + e.width / 2, e.pos.y + e.height / 2);
            n.scale(e.scale.x, e.scale.y);
            n.rotate(e.angle);
            n.translate(-e.width / 2, -e.height / 2);
            n.globalAlpha = e.alpha;
            n.globalCompositeOperation = e.blendMode || "source-over";
            n.drawImage(this.renderableCache[e.spriteSheet.resourcePath], e._sprPosX, e._sprPosY, e.width, e.height, 0, 0, e.width, e.height);
            n.restore();
        };
        e.prototype.drawImage = function t(e, n, i, r, o, a, s) {
            this.ctx.drawImage(this.renderableCache[e], n, i, r, o, a, s, r, o);
        };
        e.prototype.fillRect = function t(e, n, i, r, o) {
            this.ctx.fillStyle = o;
            this.ctx.fillRect(e, n, i, r);
        };
        e.prototype.drawRect = function t(e, n, i, r, o) {
            throw "not yet implemented";
        };
        e.prototype.setAlpha = function t(e) {
            this.ctx.globalAlpha = e;
        };
        e.prototype.lockRect = function t(e) {
            this.ctx.save();
            this.ctx.beginPath();
            this.ctx.rect(e.x, e.y, e.width, e.height);
            this.ctx.clip();
        };
        e.prototype.unlockRect = function t() {
            this.ctx.restore();
        };
        e.prototype.clear = function t() {
            this.ctx.clearRect(0, 0, this.game.width, this.game.height);
        };
        e.prototype.clearColor = function t(e) {
            this.fillRect(0, 0, this.game.width, this.game.height, "rgb(" + e.r + "," + e.g + "," + e.b + ")");
        };
        e.prototype.save = function t() {
            this.ctx.save();
        };
        e.prototype.scale = function t(e, n) {
            this.ctx.scale(e, n);
        };
        e.prototype.rotateZ = function t(e) {
            this.ctx.rotateZ(e);
        };
        e.prototype.rotateY = function t(e) {
            throw "rotateY not supported by canvasRenderer";
        };
        e.prototype.translate = function t(e, n) {
            this.ctx.translate(e, n);
        };
        e.prototype.restore = function t() {
            this.ctx.restore();
        };
        e.prototype.beginFrameBuffer = function t() {
            this.save();
        };
        e.prototype.flipFrameBuffer = function t() {
            this.restore();
        };
        e.prototype.loadTextureInfo = function t(e, n) {
            var i = this;
            var r = new Image();
            r.src = e;
            r.onload = function() {
                var t = document.createElement("canvas");
                t.setAttribute("width", r.width);
                t.setAttribute("height", r.height);
                var o = t.getContext("2d");
                o.drawImage(r, 0, 0);
                i.renderableCache[e] = t;
                n();
            };
        };
        return e;
    }(r.default);
    e.default = h;
}, function(t, e, n) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var i = n(33);
    var r = o(i);
    function o(t) {
        return t && t.__esModule ? t : {
            default: t
        };
    }
    function a(t, e) {
        if (!(t instanceof e)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    var s = function() {
        function t() {
            a(this, t);
        }
        t.getRenderer = function t(e) {
            if (!e) throw "RendererFactory::getRenderer: game param not specified";
            return new r.default(e);
        };
        return t;
    }();
    e.default = s;
}, function(t, e, n) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var i = n(38);
    var r = o(i);
    function o(t) {
        if (t && t.__esModule) {
            return t;
        } else {
            var e = {};
            if (t != null) {
                for (var n in t) {
                    if (Object.prototype.hasOwnProperty.call(t, n)) e[n] = t[n];
                }
            }
            e.default = t;
            return e;
        }
    }
    function a(t, e) {
        if (!(t instanceof e)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    var s = function() {
        function t(e) {
            a(this, t);
            this._game = e;
            this.reset();
        }
        t.prototype.addDescription = function t(e, n) {
            if (!this.descriptions[n]) this.descriptions[n] = [];
            this.descriptions[n].push(e);
        };
        t.prototype.setDescriptions = function t(e) {
            var n = this;
            Object.keys(e).forEach(function(t) {
                e[t].forEach(function(e) {
                    n.addDescription(e, t);
                });
            });
        };
        t.prototype.getObject = function t(e, n) {
            var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
            if (1 && !n) throw "repository.getObject: type not specified";
            if (1 && e == null) {
                console.trace("id is null");
                throw "::getObject() id not specified for type " + n;
            }
            var o = r[n];
            if (1 && !o) {
                throw "::getObject() undeclared object type " + n;
            }
            if (1 && !this.descriptions[n]) throw "not found description for type: " + n;
            var a = this.descriptions[n].find(function(t) {
                return t.id == e;
            });
            if (!a) {
                throw 'can not find object "' + n + '" with id ' + e;
            }
            if (i || !this.cache[a[e]]) this.cache[e] = new o(this._game).fromJSON(a);
            return this.cache[e];
        };
        t.prototype.getFirst = function t(e) {
            var n = this.getArray(e);
            if (!n.length) return null;
            return n[0];
        };
        t.prototype.addObject = function t(e) {
            if (1 && !e.id) {
                console.error(e);
                throw "addObject: id is not provided";
            }
            if (!this.arrays[e.type]) this.arrays[e.type] = [];
            this.arrays[e.type].push(e);
            if (!this.descriptions[e.type]) this.descriptions[e.type] = [];
            this.descriptions[e.type].push(e.toJSON());
        };
        t.prototype.updateObject = function t(e, n) {
            var i = e.toJSON(n);
            var r = this.descriptions[e.type].findIndex(function(t) {
                return t.id == e.id;
            });
            this.descriptions[e.type][r] = i;
            var o = this.getObject(e.id, e.type, true);
            if (o) o.fromJSON(i);
        };
        t.prototype.removeObject = function t(e) {
            if (1 && !this.arrays[e.type]) this.arrays[e.type] = [];
            var n = this.arrays[e.type].findIndex(function(t) {
                return t.id === e.id;
            });
            this.arrays[e.type].splice(n, 1);
            if (!this.descriptions[e.type]) this.descriptions[e.type] = [];
            n = this.descriptions[e.type].findIndex(function(t) {
                return t.id === e.id;
            });
            this.descriptions[e.type].splice(n, 1);
            delete this.cache[e.id];
        };
        t.prototype.getArray = function t(e) {
            var n = this;
            if (1 && !r[e]) throw 'getArray: unregistered type "' + e + '"';
            if (this.arrays[e]) return this.arrays[e];
            var i = [];
            if (!this.descriptions[e]) this.descriptions[e] = [];
            this.descriptions[e].forEach(function(t) {
                if (1 && (t.id === null || t.id === undefined)) {
                    console.error(t);
                    throw "object id must me specified";
                }
                i.push(n.getObject(t.id, e));
            });
            return this.arrays[e] = i;
        };
        t.prototype.reset = function t() {
            this.descriptions = {};
            this.arrays = {};
            this.cache = {};
        };
        return t;
    }();
    e.default = s;
}, function(t, e, n) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var i = n(1);
    var r = o(i);
    function o(t) {
        return t && t.__esModule ? t : {
            default: t
        };
    }
    function a(t, e) {
        if (!(t instanceof e)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    var s = function() {
        function t(e, n) {
            a(this, t);
            this.propsToChange = [];
            this.startedTime = null;
            this.completed = false;
            this.obj = e.target || n;
            this.progressFn = e.progress;
            this.completeFn = e.complete;
            this.easeFnName = e.ease || "linear";
            this.tweenTime = e.time || 1e3;
            this.desc = this.normalizeDesc(e);
        }
        t.prototype.normalizeDesc = function t(e) {
            var n = this;
            e.from = e.from || {};
            e.to = e.to || {};
            var i = {};
            Object.keys(e.from).forEach(function(t) {
                i[t] = true;
            });
            Object.keys(e.to).forEach(function(t) {
                i[t] = true;
            });
            this.propsToChange = Object.keys(i);
            this.propsToChange.forEach(function(t) {
                if (e.from[t] === undefined) e.from[t] = n.obj[t];
                if (e.to[t] === undefined) e.to[t] = n.obj[t];
            });
            return e;
        };
        t.prototype.update = function t(e) {
            if (!this.startedTime) this.startedTime = e;
            if (this.completed) return;
            var n = e - this.startedTime;
            if (n > this.tweenTime) {
                this._complete();
                return;
            }
            var i = this.propsToChange.length;
            while (i--) {
                var o = this.propsToChange[i];
                this.obj[o] = r.default.ease[this.easeFnName](n, this.desc.from[o], this.desc.to[o] - this.desc.from[o], this.tweenTime);
            }
            this.progressFn && this.progressFn(this.obj);
        };
        t.prototype.progress = function t(e) {
            this.progressFn = e;
        };
        t.prototype.reset = function t() {
            this.startedTime = null;
            this.completed = false;
        };
        t.prototype._complete = function t() {
            if (this.completed) return;
            var e = this.propsToChange.length;
            while (e--) {
                var n = this.propsToChange[e];
                this.obj[n] = this.desc.to[n];
            }
            this.progressFn && this.progressFn(this.obj);
            this.completeFn && this.completeFn(this.obj);
            this.completed = true;
        };
        return t;
    }();
    e.default = s;
}, function(t, e, n) {
    "use strict";
    e.__esModule = true;
    function i(t, e) {
        if (!(t instanceof e)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    var r = function() {
        function t() {
            var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
            var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            i(this, t);
            this.x = e;
            this.y = n;
        }
        t.prototype.dotProduct = function t(e) {
            return this.x * e.x + this.y * e.y;
        };
        t.prototype.crossProduct = function t(e) {
            return this.x * e.y - this.y * e.x;
        };
        t.prototype.setXY = function t(e, n) {
            this.x = e;
            this.y = n;
        };
        t.prototype.addXY = function t(e, n) {
            this.x += e;
            this.y += n;
        };
        t.prototype.multToScalar = function e(n) {
            var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
            if (i) return new t(this.x * n, this.y * n);
            this.x *= n;
            this.y *= n;
            return this;
        };
        t.prototype.divByScalar = function t(e) {
            var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
            return this.multToScalar(1 / e, n);
        };
        t.prototype.plus = function e(n) {
            var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            if (!i) return new t(this.x + n.x, this.y + n.y);
            this.x += n.x;
            this.y += n.y;
            return this;
        };
        t.prototype.minus = function e(n) {
            var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            if (!i) return new t(this.x - n.x, this.y - n.y);
            this.x -= n.x;
            this.y -= n.y;
            return this;
        };
        t.prototype.getLength = function t() {
            return Math.sqrt(this.lengthSquared());
        };
        t.prototype.lengthSquared = function t() {
            return this.x * this.x + this.y * this.y;
        };
        t.prototype.normalize = function t() {
            var e = this.getLength();
            this.x = this.x / e;
            this.y = this.y / e;
            return this;
        };
        t.prototype.setLength = function t(e) {
            var n = this.getAngle();
            this.x = Math.cos(n) * e;
            this.y = Math.sin(n) * e;
        };
        t.prototype.getAngle = function t() {
            return Math.atan2(this.y, this.x);
        };
        t.prototype.getAngleBetween = function t(e) {
            return Math.acos((this.x * e.x + this.y * e.y) / this.getLength() * e.getLength());
        };
        t.prototype.setAngle = function t(e) {
            var n = this.getLength();
            this.x = Math.cos(e) * n;
            this.y = Math.sin(e) * n;
        };
        t.prototype.clone = function e() {
            return new t(this.x, this.y);
        };
        t.angleBetween = function t(e, n) {
            e = e.clone().normalize();
            n = n.clone().normalize();
            return Math.acos(e.dotProduct(n));
        };
        t.normalBetween = function t(e, n) {
            var i = e.minus(n);
            return i.normalize();
        };
        t.distance = function e(n, i) {
            return Math.sqrt(t.distanceSquared(n, i));
        };
        t.distanceSquared = function t(e, n) {
            return (e.x - n.x) * (e.x - n.x) + (e.y - n.y) * (e.y - n.y);
        };
        return t;
    }();
    e.default = r;
}, function(t, e, n) {
    "use strict";
    e.__esModule = true;
    e.TileMap = e.TextField = e.Layer = e.Font = e.Sound = e.Scene = e.ParticleSystem = e.CommonBehaviour = e.GameObject = e.GameObjectProto = e.SpriteSheet = e.FrameAnimation = undefined;
    var i = n(41);
    var r = E(i);
    var o = n(47);
    var a = E(o);
    var s = n(6);
    var u = E(s);
    var h = n(42);
    var f = E(h);
    var c = n(39);
    var l = E(c);
    var p = n(44);
    var d = E(p);
    var y = n(45);
    var g = E(y);
    var m = n(46);
    var v = E(m);
    var w = n(40);
    var b = E(w);
    var _ = n(43);
    var x = E(_);
    var O = n(48);
    var j = E(O);
    var S = n(7);
    var T = E(S);
    function E(t) {
        return t && t.__esModule ? t : {
            default: t
        };
    }
    e.FrameAnimation = r.default;
    e.SpriteSheet = a.default;
    e.GameObjectProto = u.default;
    e.GameObject = f.default;
    e.CommonBehaviour = l.default;
    e.ParticleSystem = d.default;
    e.Scene = g.default;
    e.Sound = v.default;
    e.Font = b.default;
    e.Layer = x.default;
    e.TextField = j.default;
    e.TileMap = T.default;
}, function(t, e, n) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var i = n(0);
    var r = o(i);
    function o(t) {
        return t && t.__esModule ? t : {
            default: t
        };
    }
    function a(t, e) {
        if (!(t instanceof e)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    function s(t, e) {
        if (!t) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return e && (typeof e === "object" || typeof e === "function") ? e : t;
    }
    function u(t, e) {
        if (typeof e !== "function" && e !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        }
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (e) Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e;
    }
    var h = function(t) {
        u(e, t);
        function e(n) {
            a(this, e);
            var i = s(this, t.call(this, n));
            i.type = "CommonBehaviour";
            i.parameters = [];
            i.description = null;
            return i;
        }
        return e;
    }(r.default);
    e.default = h;
}, function(t, e, n) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var i = n(0);
    var r = o(i);
    function o(t) {
        return t && t.__esModule ? t : {
            default: t
        };
    }
    function a(t, e) {
        if (!(t instanceof e)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    function s(t, e) {
        if (!t) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return e && (typeof e === "object" || typeof e === "function") ? e : t;
    }
    function u(t, e) {
        if (typeof e !== "function" && e !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        }
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (e) Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e;
    }
    var h = function(t) {
        u(e, t);
        function e(n) {
            a(this, e);
            var i = s(this, t.call(this, n));
            i.type = "Font";
            i.resourcePath = null;
            i.fontSize = 12;
            i.fontFamily = "Monospace";
            i.fontContext = null;
            i.fontColor = {
                r: 0,
                g: 0,
                b: 0
            };
            return i;
        }
        return e;
    }(r.default);
    e.default = h;
}, function(t, e, n) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var i = n(0);
    var r = o(i);
    function o(t) {
        return t && t.__esModule ? t : {
            default: t
        };
    }
    function a(t, e) {
        if (!(t instanceof e)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    function s(t, e) {
        if (!t) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return e && (typeof e === "object" || typeof e === "function") ? e : t;
    }
    function u(t, e) {
        if (typeof e !== "function" && e !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        }
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (e) Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e;
    }
    var h = function(t) {
        u(e, t);
        function e(n) {
            a(this, e);
            var i = s(this, t.call(this, n));
            i.type = "FrameAnimation";
            i._currFrame = 0;
            i.frames = [];
            i.duration = 1e3;
            i._gameObject = null;
            i._startTime = null;
            i.stop();
            return i;
        }
        e.prototype.revalidate = function t() {
            this._timeForOneFrame = ~~(this.duration / this.frames.length);
        };
        e.prototype.play = function t() {
            var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
                repeat: true
            };
            this._isRepeat = e.repeat;
            this._gameObject._currFrameAnimation = this;
        };
        e.prototype.stop = function t() {
            if (this._gameObject) this._gameObject._currFrameAnimation = null;
            this._startTime = null;
            this._isRepeat = true;
        };
        e.prototype.update = function t(e) {
            if (!this._startTime) this._startTime = e;
            var n = (e - this._startTime) % this.duration;
            this._currFrame = ~~(this.frames.length * n / this.duration);
            if (this._isRepeat == false && this._currFrame >= this.frames.length - 1) {
                this.stop();
            }
            var i = this._gameObject.currFrameIndex;
            if (i != this.frames[this._currFrame]) {
                this._gameObject.setFrameIndex(this.frames[this._currFrame]);
            }
        };
        e.prototype.nextFrame = function t() {
            var e = this._currFrame;
            e++;
            if (e == this.frames.length) e = 0;
            this._gameObject.setFrameIndex(this.frames[e]);
            this._currFrame = e;
        };
        e.prototype.previousFrame = function t() {
            var e = this._currFrame;
            e--;
            if (e < 0) e = this.frames.length - 1;
            this._gameObject.setFrameIndex(this.frames[e]);
            this._currFrame = e;
        };
        return e;
    }(r.default);
    e.default = h;
}, function(t, e, n) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var i = n(6);
    var r = u(i);
    var o = n(18);
    var a = s(o);
    function s(t) {
        if (t && t.__esModule) {
            return t;
        } else {
            var e = {};
            if (t != null) {
                for (var n in t) {
                    if (Object.prototype.hasOwnProperty.call(t, n)) e[n] = t[n];
                }
            }
            e.default = t;
            return e;
        }
    }
    function u(t) {
        return t && t.__esModule ? t : {
            default: t
        };
    }
    function h(t, e) {
        if (!(t instanceof e)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    function f(t, e) {
        if (!t) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return e && (typeof e === "object" || typeof e === "function") ? e : t;
    }
    function c(t, e) {
        if (typeof e !== "function" && e !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        }
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (e) Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e;
    }
    var l = function t() {};
    var p = function(t) {
        c(e, t);
        function e(n) {
            h(this, e);
            var i = f(this, t.call(this, n));
            i.type = "GameObject";
            i.gameObjectProto = null;
            return i;
        }
        e.prototype.revalidate = function e() {
            var n = this;
            var i = {};
            for (var r in this) {
                if (!this.hasOwnProperty(r)) continue;
                i[r] = this[r];
            }
            Object.keys(this.gameObjectProto).forEach(function(t) {
                if (n.gameObjectProto[t] === undefined) return;
                n[t] = n.gameObjectProto[t];
            });
            Object.keys(i).forEach(function(t) {
                if (!i[t]) return;
                if (i[t].splice && i[t].length === 0) return;
                n[t] = i[t];
            });
            t.prototype.revalidate.call(this);
        };
        e.prototype.setIndividualBehaviour = function t(e) {
            var n = new e(this.game);
            n.game = this.game;
            n.gameObject = this;
            if (!n.onCreate) n.onCreate = l;
            if (!n.onUpdate) n.onUpdate = l;
            if (!n.onDestroy) n.onDestroy = l;
            this._individualBehaviour = n;
        };
        e.prototype.setCommonBehaviour = function t() {
            var e = this;
            var n = [];
            this.commonBehaviour.forEach(function(t) {
                var i = a[t.name];
                if (true) {
                    if (!i) {
                        console.error(t);
                        console.error(a);
                        throw "can not find common behaviour with name " + t.name;
                    }
                }
                var r = new i(e.game);
                r.manage(e, t.parameters);
                n.push(r);
            });
            this.commonBehaviour = n;
        };
        return e;
    }(r.default);
    e.default = p;
}, function(t, e, n) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var i = n(0);
    var r = o(i);
    function o(t) {
        return t && t.__esModule ? t : {
            default: t
        };
    }
    function a(t, e) {
        if (!(t instanceof e)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    function s(t, e) {
        if (!t) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return e && (typeof e === "object" || typeof e === "function") ? e : t;
    }
    function u(t, e) {
        if (typeof e !== "function" && e !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        }
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (e) Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e;
    }
    var h = function(t) {
        u(e, t);
        function e(n) {
            a(this, e);
            var i = s(this, t.call(this, n));
            i.type = "Layer";
            i.gameObjects = [];
            return i;
        }
        e.prototype.addGameObject = function t(e) {
            e._layer = this;
            this.gameObjects.push(e);
        };
        e.prototype.getAllSpriteSheets = function t() {
            var e = [];
            this.gameObjects.forEach(function(t) {
                t.spriteSheet && !e.find(function(e) {
                    return t.id === e.id;
                }) && e.push(t.spriteSheet);
            });
            return e;
        };
        e.prototype.onShow = function t() {
            this.gameObjects.forEach(function(t) {
                t.onShow();
            });
        };
        e.prototype.kill = function t(e) {
            this.gameObjects.remove(function(t) {
                return t.id === e.id;
            });
        };
        e.prototype.update = function t(e, n) {
            var i = this.gameObjects;
            var r = i.length;
            var o = r - 1;
            while (r--) {
                var a = i[o - r];
                a && a.update(e, n);
            }
        };
        return e;
    }(r.default);
    e.default = h;
}, function(t, e, n) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var i = n(0);
    var r = u(i);
    var o = n(1);
    var a = s(o);
    function s(t) {
        if (t && t.__esModule) {
            return t;
        } else {
            var e = {};
            if (t != null) {
                for (var n in t) {
                    if (Object.prototype.hasOwnProperty.call(t, n)) e[n] = t[n];
                }
            }
            e.default = t;
            return e;
        }
    }
    function u(t) {
        return t && t.__esModule ? t : {
            default: t
        };
    }
    function h(t, e) {
        if (!(t instanceof e)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    function f(t, e) {
        if (!t) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return e && (typeof e === "object" || typeof e === "function") ? e : t;
    }
    function c(t, e) {
        if (typeof e !== "function" && e !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        }
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (e) Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e;
    }
    var l = function t(e) {
        return a.random(e.from, e.to);
    };
    var p = function(t) {
        c(e, t);
        function e(n) {
            h(this, e);
            var i = f(this, t.call(this, n));
            i.type = "ParticleSystem";
            i.gameObjectProto = null;
            i._particles = [];
            i.numOfParticlesToEmit = {
                from: 1,
                to: 10
            };
            i.particleAngle = {
                from: 0,
                to: 0
            };
            i.particleVelocity = {
                from: 1,
                to: 100
            };
            i.particleLiveTime = {
                from: 100,
                to: 1e3
            };
            i.emissionRadius = 0;
            return i;
        }
        e.prototype.revalidate = function t() {
            if (this.particleAngle.to < this.particleAngle.from) this.particleAngle.to += 2 * Math.PI;
        };
        e.find = function t(e) {};
        e.findAll = function t(e) {};
        e.prototype.emit = function t(e, n) {
            for (var i = 0; i < l(this.numOfParticlesToEmit); i++) {
                var r = this.gameObjectProto.clone();
                var o = l(this.particleAngle);
                var a = l(this.particleVelocity);
                r.vel.x = a * Math.cos(o);
                r.vel.y = a * Math.sin(o);
                r.pos.x = l({
                    from: e - this.emissionRadius,
                    to: e + this.emissionRadius
                });
                r.pos.y = l({
                    from: n - this.emissionRadius,
                    to: n + this.emissionRadius
                });
                r.liveTime = l(this.particleLiveTime);
                this._particles.push(r);
            }
        };
        e.prototype.update = function t(e, n) {
            var i = this._particles;
            var r = i.length;
            var o = r - 1;
            while (r--) {
                var a = i[o - r];
                if (!a) continue;
                if (!a._timeCreated) a._timeCreated = e;
                if (e - a._timeCreated > a.liveTime) {
                    this._particles.splice(this._particles.indexOf(a), 1);
                }
                a.update(e, n);
            }
        };
        return e;
    }(r.default);
    e.default = p;
}, function(t, e, n) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var i = n(0);
    var r = h(i);
    var o = n(28);
    var a = h(o);
    var s = n(7);
    var u = h(s);
    function h(t) {
        return t && t.__esModule ? t : {
            default: t
        };
    }
    function f(t, e) {
        if (!(t instanceof e)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    function c(t, e) {
        if (!t) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return e && (typeof e === "object" || typeof e === "function") ? e : t;
    }
    function l(t, e) {
        if (typeof e !== "function" && e !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        }
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (e) Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e;
    }
    var p = function(t) {
        l(e, t);
        function e(n) {
            f(this, e);
            var i = c(this, t.call(this, n));
            i.type = "Scene";
            i.layers = [];
            i.useBG = false;
            i.colorBG = {
                r: 255,
                g: 255,
                b: 255
            };
            i._tweenMovies = [];
            i._individualBehaviour = null;
            i.tileMap = null;
            if (false) i.tileMap = new u.default(n);
            return i;
        }
        e.prototype.revalidate = function e() {
            t.prototype.revalidate.call(this);
            if (!false && this.tileMap) {
                this.tileMap._tilesInScreenX = ~~(this.game.width / this.tileMap.spriteSheet._frameWidth);
                this.tileMap._tilesInScreenY = ~~(this.game.height / this.tileMap.spriteSheet._frameHeight);
            }
        };
        e.prototype.addTweenMovie = function t(e) {
            this._tweenMovies.push(e);
        };
        e.prototype.getAllGameObjects = function t() {
            var e = [];
            this.layers.forEach(function(t) {
                e = e.concat(e, t.gameObjects);
            });
            return e;
        };
        e.prototype.getAllSpriteSheets = function t() {
            var e = {};
            this.layers.forEach(function(t) {
                t.getAllSpriteSheets().forEach(function(t) {
                    e[t.id] = t;
                });
            });
            if (this.tileMap && this.tileMap.spriteSheet) {
                e[this.tileMap.spriteSheet.id] = this.tileMap.spriteSheet;
            }
            return Object.keys(e).map(function(t) {
                return e[t];
            });
        };
        e.prototype.preload = function t(e) {
            var n = this;
            var i = this.getAllSpriteSheets().concat(this.game.repository.getArray("Font"));
            var r = new a.default();
            r.onResolved = function() {
                e && e();
            };
            i.forEach(function(t) {
                r.addTask(function() {
                    n.game._renderer.loadTextureInfo(t.resourcePath, function() {
                        return r.resolveTask(t.id);
                    });
                }, t.id);
            });
            r.start();
        };
        e.prototype.onShow = function t() {
            if (this._individualBehaviour) this._individualBehaviour.onCreate();
            this.layers.forEach(function(t) {
                t.onShow();
            });
        };
        e.prototype.setIndividualBehaviour = function t(e) {
            var n = new e(this.game);
            n.game = this.game;
            n.scene = this;
            this._individualBehaviour = n;
        };
        e.prototype.update = function t(e, n) {
            this.game._renderer.beginFrameBuffer();
            if (this.useBG) this.game._renderer.clearColor(this.colorBG); else this.game._renderer.clear();
            var i = this.layers;
            var r = this.layers.length;
            var o = r - 1;
            this.game.camera.update(e);
            this.game._renderer.translate(-this.game.camera.pos.x, -this.game.camera.pos.y);
            if (this._individualBehaviour) this._individualBehaviour.onUpdate();
            while (r--) {
                i[r - o].update(e, n);
            }
            this.game.repository.getArray("ParticleSystem").forEach(function(t) {
                t.update(e, n);
            });
            this._updateTileMap();
            this.game._renderer.flipFrameBuffer();
        };
        e.prototype.fadeIn = function t(e, n) {
            return this.tween(this, {
                to: {
                    alpha: 1
                }
            }, e, n);
        };
        e.prototype.fadeOut = function t(e, n) {
            return this.tween(this, {
                to: {
                    alpha: 0
                }
            }, e, n);
        };
        e.prototype.tween = function t(e, n, i, r) {};
        e.prototype._updateTileMap = function t() {
            var e = this.tileMap.spriteSheet;
            if (!e) return;
            var n = this.game._renderer;
            var i = ~~(this.game.camera.pos.x / this.tileMap.spriteSheet._frameWidth);
            var r = ~~(this.game.camera.pos.y / this.tileMap.spriteSheet._frameHeight);
            var o = i + this.tileMap._tilesInScreenX + 2;
            var a = r + this.tileMap._tilesInScreenY + 2;
            for (var s = r; s < a; s++) {
                for (var u = i; u < o; u++) {
                    var h = this.tileMap.data[s] && this.tileMap.data[s][u];
                    if (h == null) continue;
                    n.drawImage(e.resourcePath, e.getFramePosX(h), e.getFramePosY(h), e._frameWidth, e._frameHeight, u * e._frameWidth, s * e._frameHeight);
                }
            }
        };
        e.prototype.printText = function t(e, n, i, r) {
            if (!i) return;
            if (!i.substring) i = JSON.stringify(i, null, 4);
            this.game.renderer.printText(e, n, i, r);
        };
        e.prototype.log = function t(e) {
            this.printText(0, 0, e);
        };
        return e;
    }(r.default);
    e.default = p;
}, function(t, e, n) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var i = n(0);
    var r = o(i);
    function o(t) {
        return t && t.__esModule ? t : {
            default: t
        };
    }
    function a(t, e) {
        if (!(t instanceof e)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    function s(t, e) {
        if (!t) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return e && (typeof e === "object" || typeof e === "function") ? e : t;
    }
    function u(t, e) {
        if (typeof e !== "function" && e !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        }
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (e) Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e;
    }
    var h = function(t) {
        u(e, t);
        function e(n) {
            a(this, e);
            var i = s(this, t.call(this, n));
            i.type = "Sound";
            i.resourcePath = "";
            i._gain = 1;
            i._loop = false;
            return i;
        }
        e.find = function t(e) {};
        e.prototype.play = function t() {};
        e.prototype.stop = function t() {};
        e.prototype.pause = function t() {
            throw "not implemented";
        };
        e.prototype.setGain = function t(e, n, i) {};
        return e;
    }(r.default);
    e.default = h;
}, function(t, e, n) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var i = n(0);
    var r = o(i);
    function o(t) {
        return t && t.__esModule ? t : {
            default: t
        };
    }
    function a(t, e) {
        if (!(t instanceof e)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    function s(t, e) {
        if (!t) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return e && (typeof e === "object" || typeof e === "function") ? e : t;
    }
    function u(t, e) {
        if (typeof e !== "function" && e !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        }
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (e) Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e;
    }
    var h = function(t) {
        u(e, t);
        function e(n) {
            a(this, e);
            var i = s(this, t.call(this, n));
            i.type = "SpriteSheet";
            i.width = 0;
            i.height = 0;
            i.numOfFramesH = 1;
            i.numOfFramesV = 1;
            i._frameWidth = 0;
            i._frameHeight = 0;
            i._numOfFrames = 0;
            i.resourcePath = "";
            return i;
        }
        e.prototype.revalidate = function t() {
            if (!(this.numOfFramesH && this.numOfFramesV)) return;
            this._frameWidth = ~~(this.width / this.numOfFramesH);
            this._frameHeight = ~~(this.height / this.numOfFramesV);
            this._numOfFrames = this.numOfFramesH * this.numOfFramesV;
        };
        e.prototype.getFramePosX = function t(e) {
            return e % this.numOfFramesH * this._frameWidth;
        };
        e.prototype.getFramePosY = function t(e) {
            return ~~(e / this.numOfFramesH) * this._frameHeight;
        };
        return e;
    }(r.default);
    e.default = h;
}, function(t, e, n) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var i = n(0);
    var r = o(i);
    function o(t) {
        return t && t.__esModule ? t : {
            default: t
        };
    }
    function a(t, e) {
        if (!(t instanceof e)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    function s(t, e) {
        if (!t) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return e && (typeof e === "object" || typeof e === "function") ? e : t;
    }
    function u(t, e) {
        if (typeof e !== "function" && e !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        }
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (e) Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e;
    }
    var h = function(t) {
        u(e, t);
        function e(n) {
            a(this, e);
            var i = s(this, t.call(this, n));
            i.type = "TextField";
            i._chars = null;
            i.text = "";
            i.font = null;
            return i;
        }
        e.prototype.revalidate = function t() {
            if (1 && !this.name) {
                console.error(this);
                throw "property 'name' not set at object of type " + this.type;
            }
            this.setFont(this.font);
        };
        e.prototype.setText = function t(e) {
            e += "";
            this._chars = [];
            this.text = e;
            var n = [ {
                width: 0
            } ];
            var i = 0;
            this.height = this.font.fontContext.symbols[" "].height;
            for (var r = 0, o = e.length; r < o; r++) {
                this._chars.push(e[r]);
                var a = this.font.fontContext.symbols[e[r]] || this.font.fontContext.symbols[" "];
                if (e[r] === "\n") {
                    i++;
                    this.height += a.height;
                    n[i] = {
                        width: 0
                    };
                } else {
                    n[i].width += a.width;
                }
            }
            this.width = Math.max.apply(Math, n.map(function(t) {
                return t.width;
            }));
        };
        e.prototype.setFont = function t(e) {
            this.font = e;
            this.setText(this.text);
        };
        e.prototype.update = function e(n) {
            t.prototype.update.call(this, n);
            this._render();
        };
        e.prototype._render = function t() {
            var e = this;
            var n = 0;
            var i = 0;
            this._chars.forEach(function(t) {
                var r = e.font.fontContext.symbols[t] || e.font.fontContext.symbols["?"];
                if (t === "\n") {
                    n = 0;
                    i += r.height;
                    return;
                }
                e.game._renderer.drawImage(e.font.resourcePath, r.x, r.y, r.width, r.height, e.pos.x + n, e.pos.y + i);
                n += r.width;
            });
        };
        return e;
    }(r.default);
    e.default = h;
}, function(t, e, n) {
    "use strict";
    var i = n(10);
    var r = h(i);
    var o = n(11);
    var a = h(o);
    var s = n(12);
    var u = h(s);
    function h(t) {
        return t && t.__esModule ? t : {
            default: t
        };
    }
    var f = JSON.parse(a.default);
    var c = JSON.parse(u.default);
    if (1 && f.startSceneId === undefined) throw "start scene not specified";
    var l = new r.default(f);
    l.repository.setDescriptions(c);
    var p = l.repository.getObject(f.startSceneId, "Scene");
    l.runScene(p);
    if (true) window.repository = l.repository;
} ]);