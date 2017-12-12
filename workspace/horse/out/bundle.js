(function(t) {
    var e = {};
    function n(r) {
        if (e[r]) {
            return e[r].exports;
        }
        var i = e[r] = {
            i: r,
            l: false,
            exports: {}
        };
        t[r].call(i.exports, i, i.exports, n);
        i.l = true;
        return i.exports;
    }
    n.m = t;
    n.c = e;
    n.i = function(t) {
        return t;
    };
    n.d = function(t, e, r) {
        if (!n.o(t, e)) {
            Object.defineProperty(t, e, {
                configurable: false,
                enumerable: true,
                get: r
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
    return n(n.s = 47);
})([ function(t, e, n) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var r, i;
    var o = n(5);
    var a = d(o);
    var s = n(34);
    var u = d(s);
    var f = n(25);
    var c = d(f);
    var l = n(4);
    var h = n(27);
    var p = d(h);
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
    function m(t, e) {
        if (!t) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return e && (typeof e === "object" || typeof e === "function") ? e : t;
    }
    function v(t, e) {
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
    var g = (r = (0, l.Transient)({
        game: true,
        rigidBody: true
    }), r(i = function(t) {
        v(e, t);
        function e(n) {
            y(this, e);
            var r = m(this, t.call(this));
            r.id = null;
            r.name = null;
            r.width = 0;
            r.height = 0;
            r.pos = {
                x: 0,
                y: 0
            };
            r.scale = {
                x: 1,
                y: 1
            };
            r.angle = 0;
            r.alpha = 1;
            r.layerId = null;
            r.fixedToCamera = false;
            r.rigid = false;
            r._tweens = [];
            if (1 && !n) throw "can not create model '" + r.type + "': game instance not passed to model constructor";
            r.game = n;
            r._emitter = new c.default();
            r.rigidBody = new p.default(r);
            return r;
        }
        e.prototype.revalidate = function t() {};
        e.prototype.setIndividualBehaviour = function t(e) {};
        e.prototype.setCommonBehaviour = function t() {};
        e.prototype.onShow = function t() {};
        e.prototype.getRect = function t() {
            var e = this.pos.x, n = this.pos.y, r = this.width, i = this.height;
            return {
                x: e,
                y: n,
                width: r,
                height: i,
                right: e + r,
                bottom: n + i
            };
        };
        e.prototype.tween = function t(e) {
            var n = new u.default(e, this);
            this._tweens.push(n);
        };
        e.prototype.update = function t(e) {
            var n = this;
            this._tweens.forEach(function(t, r) {
                t.update(e);
                if (t.completed) n._tweens.splice(r, 1);
            });
        };
        e.prototype.clone = function t(e) {
            var n = this.constructor;
            var r = new n(this.game);
            r._cloner = this;
            return r.fromJSON(this.toJSON(e), true);
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
    }(a.default)) || i);
    e.default = g;
}, function(t, e, n) {
    "use strict";
    e.isPointInRect = function(t, e, n) {
        return t.x > e.x && t.x < e.x + e.width && t.y > e.y && t.y < e.y + e.height;
    };
    var r = function t(e, n, r) {
        return e >= n && e <= r;
    };
    e.isRectIntersectRect = function(t, e) {
        var n = r(t.x, e.x, e.x + e.width), i = r(e.x, t.x, t.x + t.width), o = r(t.y, e.y, e.y + e.height), a = r(e.y, t.y, t.y + t.height);
        var s = n || i;
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
        var r = Math.random() * (e - t) + t;
        if (r > e) r = e; else if (r < t) r = t;
        return r;
    };
    var i = {};
    i.linear = function(t, e, n, r) {
        return n * t / r + e;
    };
    i.easeInQuad = function(t, e, n, r) {
        t /= r;
        return n * t * t + e;
    };
    i.easeOutQuad = function(t, e, n, r) {
        t /= r;
        return -n * t * (t - 2) + e;
    };
    i.easeInOutQuad = function(t, e, n, r) {
        t /= r / 2;
        if (t < 1) return n / 2 * t * t + e;
        t--;
        return -n / 2 * (t * (t - 2) - 1) + e;
    };
    e.ease = i;
}, function(t, e, n) {
    "use strict";
    e.__esModule = true;
    function r(t, e) {
        if (!(t instanceof e)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    var i = function() {
        function t() {
            r(this, t);
        }
        t.prototype.manage = function t() {
            console.error(this);
            if (true) throw "BaseAbstractBehaviour: method 'manage' not implemented";
        };
        t.prototype.onUpdate = function t() {};
        return t;
    }();
    e.default = i;
}, function(t, e, n) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var r = n(2);
    var i = o(r);
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
    var f = function(t) {
        u(e, t);
        function e(n) {
            a(this, e);
            var r = s(this, t.call(this));
            r.gameObject = null;
            r.lastDirection = null;
            r.game = n;
            return r;
        }
        e.prototype.manage = function t(e, n, r) {
            var i = this;
            this.gameObject = e;
            this.parameters = n;
            this.animations = {};
            r.forEach(function(t) {
                var e = "walk" + t + "Animation", r = "idle" + t + "Animation";
                i.animations[e] = i.gameObject.frameAnimations.find(function(t) {
                    return t.name === n[e];
                });
                n[r] && (i.animations[r] = i.gameObject.frameAnimations.find(function(t) {
                    return t.name === n[r];
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
    }(i.default);
    e.default = f;
}, function(t, e, n) {
    "use strict";
    e.__esModule = true;
    e.Transient = r;
    function r(t) {
        return function(e) {
            e.transient = t;
        };
    }
}, function(t, e, n) {
    "use strict";
    e.__esModule = true;
    var r = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(t) {
        return typeof t;
    } : function(t) {
        return t && typeof Symbol === "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
    };
    function i(t, e) {
        if (!(t instanceof e)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    var o = function t(e, n, r) {
        if (!e) return true;
        if (e.indexOf("_") === 0) return true;
        if (n && n.call) return true;
        if (typeof n === "string") return false;
        if (typeof n === "number") return false;
        if (typeof n === "boolean") return false;
        return n == null && !r.preserveNull;
    };
    var a = function t(e) {
        return typeof e === "string" || typeof e === "number";
    };
    var s = function t(e) {
        var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
        if (e === undefined) return undefined; else if (e === null) return null; else if (typeof window !== "undefined" && e === window) return undefined; else if (n.indexOf(e) > -1) return e;
        if (Object.prototype.toString.call(e) === "[object Array]") {
            var i = [], o = 0, a = e.length;
            for (;o < a; o++) {
                var s = void 0;
                if (n.indexOf(e[o]) > -1) {
                    s = e[o];
                } else {
                    n.push(e);
                    s = t(e[o], n);
                    n.push(e[o]);
                }
                i[o] = s;
            }
            return i;
        } else if ((typeof e === "undefined" ? "undefined" : r(e)) === "object") {
            var u = {};
            for (var f in e) {
                if (!e.hasOwnProperty(f)) continue;
                var c = void 0;
                if (n.indexOf(e[f]) > -1) {
                    c = e[f];
                } else {
                    n.push(e);
                    c = t(e[f], n);
                    n.push(e[f]);
                }
                u[f] = c;
            }
            return u;
        } else return e;
    };
    var u = function() {
        function t() {
            i(this, t);
        }
        t.prototype.fromJSON = function t() {
            var e = this;
            var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var r = arguments[1];
            Object.keys(n).forEach(function(t) {
                if (t === "type") return;
                if (t in e) e[t] = n[t]; else {
                    console.error(e);
                    throw "::fromJSON(): class " + e.constructor.name + " has no property " + t;
                }
                if (!e[t]) return;
                if (n[t].id && n[t].type) e[t] = e.game.repository.getObject(n[t].id, n[t].type, r); else if (n[t].splice) {
                    var i = e[t];
                    e[t] = [];
                    i.forEach(function(n, i) {
                        if (n && n.type && n.id) {
                            e[t].push(e.game.repository.getObject(n.id, n.type, r));
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
            var i = {};
            for (var u in this) {
                if (o(u, this[u], n)) {
                    continue;
                }
                if (this.constructor.transient && this.constructor.transient[u]) {
                    continue;
                }
                if (this[u] != null && this[u].type && this[u].id) {
                    i[u] = {
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
                        i[u] = n;
                    })();
                } else {
                    var f = s(this[u]);
                    if (f && f.splice && !f.length) continue; else if (f != null && (typeof f === "undefined" ? "undefined" : r(f)) === "object" && !Object.keys(f).length) continue;
                    i[u] = f;
                }
            }
            return i;
        };
        return t;
    }();
    e.default = u;
}, function(t, e, n) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var r = n(0);
    var i = o(r);
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
    var f = function(t) {
        u(e, t);
        e.find = function t(e) {};
        e.findAll = function t(e) {};
        function e(n) {
            a(this, e);
            var r = s(this, t.call(this, n));
            r.type = "GameObjectProto";
            r.spriteSheet = null;
            r._behaviour = null;
            r.commonBehaviour = [];
            r.currFrameIndex = 0;
            r._sprPosX = 0;
            r._sprPosY = 0;
            r.frameAnimations = [];
            r._currFrameAnimation = 0;
            r.startFrameAnimationName = null;
            r._timeCreated = null;
            r.tileOffset = {
                x: 0,
                y: 0
            };
            r.tileRepeat = false;
            r.groupName = "";
            r._individualBehaviour = null;
            return r;
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
            var r = this.frameAnimations.find(function(t) {
                return t.name === e;
            });
            r._gameObject = this;
            this._currFrameAnimation = r;
            r.play(n);
        };
        e.prototype.setFrameIndex = function t(e) {
            this.currFrameIndex = e;
            this._sprPosX = this.spriteSheet.getFramePosX(this.currFrameIndex);
            this._sprPosY = this.spriteSheet.getFramePosY(this.currFrameIndex);
        };
        e.prototype.update = function e(n, r) {
            t.prototype.update.call(this, n);
            this._currFrameAnimation && this._currFrameAnimation.update(n);
            if (this._individualBehaviour) this._individualBehaviour.onUpdate(n, r);
            for (var i = 0, o = this.commonBehaviour.length; i < o; i++) {
                this.commonBehaviour[i].onUpdate(n, r);
            }
            this.rigidBody.update(n, r);
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
    }(i.default);
    e.default = f;
}, function(t, e, n) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var r = n(0);
    var i = o(r);
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
    var f = function(t) {
        u(e, t);
        function e(n) {
            a(this, e);
            var r = s(this, t.call(this, n));
            r.type = "TileMap";
            r.spriteSheet = null;
            r.data = [];
            return r;
        }
        e.prototype.getTileAt = function t(e, n) {
            var r = this;
            if (!this.spriteSheet) return;
            var i = ~~(e / this.spriteSheet._frameWidth);
            var o = ~~(n / this.spriteSheet._frameHeight);
            if (!this.data[o]) return;
            var a = this.data[o][i];
            if (a == null) return;
            return {
                getRect: function t() {
                    var e = i * r.spriteSheet._frameWidth + 1, n = o * r.spriteSheet._frameHeight + 1, a = r.spriteSheet._frameWidth - 2, s = r.spriteSheet._frameHeight - 2;
                    return {
                        x: e,
                        y: n,
                        width: a,
                        height: s,
                        right: e + a,
                        bottom: n + s
                    };
                },
                tileIndex: this.spriteSheet.numOfFramesH * o + i + 1,
                value: a
            };
        };
        e.prototype.getTilesAtRect = function t(e) {
            var n = [];
            var r = {};
            var i = e.x, o = void 0;
            var a = e.x + e.width, s = e.y + e.height;
            while (true) {
                o = e.y;
                while (true) {
                    var u = this.getTileAt(i, o);
                    if (u) {
                        if (!r[u.tileIndex]) {
                            n.push(u);
                            r[u.tileIndex] = true;
                        }
                    }
                    if (o === s) break;
                    o += this.spriteSheet._frameHeight;
                    if (o > s) o = s;
                }
                if (i === a) break;
                i += this.spriteSheet._frameWidth;
                if (i > a) i = a;
            }
            return n;
        };
        return e;
    }(i.default);
    e.default = f;
}, , , function(t, e, n) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var r, i;
    n(29);
    var o = n(32);
    var a = _(o);
    var s = n(33);
    var u = _(s);
    var f = n(24);
    var c = _(f);
    var l = n(23);
    var h = _(l);
    var p = n(28);
    var d = _(p);
    var y = n(4);
    var m = n(5);
    var v = _(m);
    var g = n(22);
    var b = _(g);
    function _(t) {
        return t && t.__esModule ? t : {
            default: t
        };
    }
    function w(t, e) {
        if (!(t instanceof e)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    function O(t, e) {
        if (!t) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return e && (typeof e === "object" || typeof e === "function") ? e : t;
    }
    function j(t, e) {
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
    var x = (r = (0, y.Transient)({
        repository: true,
        camera: true,
        keyboard: true
    }), r(i = function(t) {
        j(e, t);
        function e(n) {
            w(this, e);
            var r = O(this, t.call(this));
            r._lastTime = null;
            r._currTime = null;
            r._currentScene = null;
            r._running = false;
            r._renderer = null;
            r.scale = {
                x: 1,
                y: 1
            };
            r.pos = {
                x: 0,
                y: 0
            };
            r.gravityConstant = null;
            r.fps = null;
            Object.keys(n).forEach(function(t) {
                r[t] = n[t];
            });
            var i = Date.now();
            r._lastTime = r._currTime = i;
            r._deltaTime = 0;
            r.repository = new u.default(r);
            r._mouse = new c.default(r);
            r.keyboard = new h.default(r);
            r.keyboard.listenTo();
            r._collider = new d.default(r);
            r.camera = new b.default(r);
            return r;
        }
        e.prototype.getTime = function t() {
            return this._lastTime;
        };
        e.prototype.getDeltaTime = function t() {
            return this._deltaTime;
        };
        e.prototype.runScene = function t(r) {
            var i = this;
            if (!this._renderer) {
                this._renderer = a.default.getRenderer(this);
                this._mouse.listenTo(this._renderer.container);
            }
            this._currentScene = r;
            if (true) {
                var o = n(13);
                var s = "" + r.name[0].toUpperCase() + r.name.substr(1) + "Behaviour";
                if (s) r.setIndividualBehaviour(o[s]);
                r.layers.forEach(function(t) {
                    t.gameObjects.forEach(function(t) {
                        t.setCommonBehaviour();
                        var e = "" + t.name[0].toUpperCase() + t.name.substr(1) + "Behaviour";
                        var n = o[e];
                        if (n) t.setIndividualBehaviour(n);
                    });
                });
            }
            r.preload(function() {
                i._currentScene.onShow();
                if (!i._running) {
                    e.update(i);
                    i._running = true;
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
    }(v.default)) || i);
    e.default = x;
}, function(t, e) {
    t.exports = '{\n    "width": 800,\n    "height": 600,\n    "scaleStrategy": 0,\n    "startSceneId": 2\n}';
}, function(t, e) {
    t.exports = '{\n    "Scene": [\n        {\n            "id": 2,\n            "name": "mainScene",\n            "type": "Scene",\n            "layers": [\n                {\n                    "type": "Layer",\n                    "id": 2\n                }\n            ]\n        }\n    ],\n    "Layer": [\n        {\n            "id": 2,\n            "name": "layer1",\n            "type": "Layer",\n            "gameObjects": [\n                {\n                    "type": "GameObject",\n                    "id": 9\n                }\n            ]\n        }\n    ],\n    "SpriteSheet": [\n        {\n            "id": 3,\n            "name": "horse",\n            "width": 733,\n            "height": 489,\n            "type": "SpriteSheet",\n            "numOfFramesH": 4,\n            "numOfFramesV": 4,\n            "resourcePath": "resources/horse.gif"\n        }\n    ],\n    "GameObjectProto": [\n        {\n            "id": 4,\n            "name": "horse",\n            "width": 183,\n            "height": 122,\n            "type": "GameObjectProto",\n            "spriteSheet": {\n                "id": 3,\n                "type": "SpriteSheet"\n            },\n            "frameAnimations": [\n                {\n                    "type": "FrameAnimation",\n                    "id": 5\n                },\n                {\n                    "type": "FrameAnimation",\n                    "id": 6\n                },\n                {\n                    "type": "FrameAnimation",\n                    "id": 7\n                },\n                {\n                    "type": "FrameAnimation",\n                    "id": 8\n                }\n            ],\n            "startFrameAnimationName": "q2"\n        }\n    ],\n    "FrameAnimation": [\n        {\n            "id": 5,\n            "name": "a",\n            "type": "FrameAnimation",\n            "frames": [\n                1\n            ]\n        },\n        {\n            "name": "b",\n            "type": "FrameAnimation",\n            "frames": [\n                2\n            ],\n            "id": 6\n        },\n        {\n            "name": "q1",\n            "type": "FrameAnimation",\n            "frames": [\n                1\n            ],\n            "id": 7\n        },\n        {\n            "id": 8,\n            "name": "q2",\n            "type": "FrameAnimation",\n            "frames": [\n                0,\n                1,\n                2,\n                3,\n                4,\n                5,\n                6,\n                7,\n                8,\n                9,\n                10,\n                11,\n                12,\n                13,\n                14\n            ]\n        }\n    ],\n    "GameObject": [\n        {\n            "pos": {\n                "x": 306,\n                "y": 234\n            },\n            "layerId": 2,\n            "type": "GameObject",\n            "gameObjectProto": {\n                "id": 4,\n                "type": "GameObjectProto"\n            },\n            "id": 9\n        }\n    ]\n}';
}, function(t, e, n) {
    "use strict";
    e.__esModule = true;
    e.MainSceneBehaviour = e.HorseBehaviour = undefined;
    var r = n(14);
    var i = n(15);
    e.HorseBehaviour = r.HorseBehaviour;
    e.MainSceneBehaviour = i.MainSceneBehaviour;
}, function(t, e, n) {
    "use strict";
    e.__esModule = true;
    function r(t, e) {
        if (!(t instanceof e)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    var i = e.HorseBehaviour = function() {
        function t() {
            r(this, t);
        }
        t.prototype.onCreate = function t() {};
        t.prototype.onUpdate = function t() {};
        t.prototype.onDestroy = function t() {};
        return t;
    }();
}, function(t, e, n) {
    "use strict";
    e.__esModule = true;
    function r(t, e) {
        if (!(t instanceof e)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    var i = e.MainSceneBehaviour = function() {
        function t() {
            r(this, t);
        }
        t.prototype.onCreate = function t() {};
        t.prototype.onUpdate = function t() {};
        t.prototype.onDestroy = function t() {};
        return t;
    }();
}, function(t, e, n) {
    "use strict";
    e.__esModule = true;
    e.Control2Dir = e.Control4Dir = e.Draggable = undefined;
    var r = n(19);
    var i = f(r);
    var o = n(18);
    var a = f(o);
    var s = n(17);
    var u = f(s);
    function f(t) {
        return t && t.__esModule ? t : {
            default: t
        };
    }
    e.Draggable = i.default;
    e.Control4Dir = a.default;
    e.Control2Dir = u.default;
}, function(t, e, n) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var r = n(20);
    var i = o(r);
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
    var f = function(t) {
        u(e, t);
        function e(n) {
            a(this, e);
            return s(this, t.call(this, n));
        }
        e.prototype.manage = function e(n, r) {
            t.prototype.manage.call(this, n, r);
        };
        e.prototype.onUpdate = function t() {
            var e = this.game.keyboard;
            var n = this.parameters;
            var r = this.gameObject;
            if (e.isPressed(e.KEY.LEFT)) {
                r.rigidBody.vel.x = -n.velocity;
                this.go("Left");
            }
            if (e.isPressed(e.KEY.RIGHT)) {
                r.rigidBody.vel.x = n.velocity;
                this.go("Right");
            }
            if (e.isJustReleased(e.KEY.LEFT)) {
                this.stop();
            } else if (e.isJustReleased(e.KEY.RIGHT)) {
                this.stop();
            }
        };
        return e;
    }(i.default);
    e.default = f;
}, function(t, e, n) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var r = n(21);
    var i = o(r);
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
    var f = function(t) {
        u(e, t);
        function e(n) {
            a(this, e);
            return s(this, t.call(this, n));
        }
        e.prototype.manage = function e(n, r) {
            t.prototype.manage.call(this, n, r);
        };
        e.prototype.onUpdate = function t() {
            var e = this.game.keyboard;
            var n = this.parameters;
            var r = this.gameObject;
            if (e.isPressed(e.KEY.UP)) {
                r.rigidBody.vel.y = -n.velocity;
                this.go("Up");
            }
            if (e.isPressed(e.KEY.DOWN)) {
                r.rigidBody.vel.y = n.velocity;
                this.go("Down");
            }
            if (e.isPressed(e.KEY.LEFT)) {
                r.rigidBody.vel.x = -n.velocity;
                this.go("Left");
            }
            if (e.isPressed(e.KEY.RIGHT)) {
                r.rigidBody.vel.x = n.velocity;
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
    }(i.default);
    e.default = f;
}, function(t, e, n) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var r = n(2);
    var i = o(r);
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
    var f = function(t) {
        u(e, t);
        e._getEventId = function t(e) {
            return e.id || 1;
        };
        function e(n) {
            a(this, e);
            var r = s(this, t.call(this));
            r.game = n;
            r.points = {};
            return r;
        }
        e.prototype.manage = function t(n, r) {
            var i = this;
            n.on("click", function(t) {
                i.points[e._getEventId(t)] = {
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
                var r = i.points[n];
                if (!r) return;
                r.dragStartX = r.target.pos.x;
                r.dragStartY = r.target.pos.y;
            });
            o.on("mouseMove", function(t) {
                var r = e._getEventId(t);
                var o = i.points[r];
                if (!o) return;
                if (!o.dragStart) {
                    o.dragStart = true;
                    o.target.trigger("dragStart", o);
                    if (o.defaultPrevented) {
                        delete i.points[r];
                        return;
                    }
                }
                n.pos.x = t.screenX - o.mX;
                n.pos.y = t.screenY - o.mY;
            });
            o.on("mouseUp", function(t) {
                var r = e._getEventId(t);
                var o = i.points[r];
                if (!o) return;
                if (o.dragStart) {
                    o.x = n.pos.x;
                    o.y = n.pos.y;
                    o.target.trigger("dragStop", o);
                }
                delete i.points[r];
            });
        };
        return e;
    }(i.default);
    e.default = f;
}, function(t, e, n) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var r, i;
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
    var l = (i = r = function(t) {
        c(e, t);
        function e(n) {
            u(this, e);
            return f(this, t.call(this, n));
        }
        e.prototype.manage = function n(r, i) {
            t.prototype.manage.call(this, r, i, e.DIRS);
        };
        e.prototype.stop = function e() {
            t.prototype.stop.call(this);
            this.gameObject.rigidBody.vel.x = 0;
        };
        return e;
    }(a.default), r.DIRS = [ "Left", "Right" ], i);
    e.default = l;
}, function(t, e, n) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var r, i;
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
    var l = (i = r = function(t) {
        c(e, t);
        function e(n) {
            u(this, e);
            return f(this, t.call(this, n));
        }
        e.prototype.manage = function n(r, i) {
            t.prototype.manage.call(this, r, i, e.DIRS);
        };
        e.prototype.stop = function e() {
            t.prototype.stop.call(this);
            this.gameObject.rigidBody.vel.x = 0;
            this.gameObject.rigidBody.vel.y = 0;
        };
        return e;
    }(a.default), r.DIRS = [ "Left", "Right", "Up", "Down" ], i);
    e.default = l;
}, function(t, e, n) {
    "use strict";
    e.__esModule = true;
    function r(t, e) {
        if (!(t instanceof e)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    var i = function() {
        function t(e) {
            r(this, t);
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
            var r = this.scene.tileMap.spriteSheet ? this.scene.tileMap.spriteSheet._frameHeight : 0;
            var i = this.game.width;
            var o = this.game.height;
            var a = i / 2;
            var s = o / 2;
            e.x = this.objFollowTo.pos.x - a;
            e.y = this.objFollowTo.pos.y - s;
            if (e.x < 0) e.x = 0;
            if (e.y < 0) e.y = 0;
            if (e.x > this.sceneWidth - i + n) e.x = this.sceneWidth - i + n;
            if (e.y > this.sceneHeight - o + r) e.y = this.sceneHeight - o + r;
        };
        return t;
    }();
    e.default = i;
}, function(t, e, n) {
    "use strict";
    e.__esModule = true;
    function r(t, e) {
        if (!(t instanceof e)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    var i = 2;
    var o = 1;
    var a = 0;
    var s = -1;
    var u = function() {
        function t(e) {
            r(this, t);
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
            this.buffer[e] = i;
        };
        t.prototype.emulateRelease = function t(e) {
            this.buffer[e] = a;
        };
        t.prototype.isPressed = function t(e) {
            return this.buffer[e] >= o;
        };
        t.prototype.isJustPressed = function t(e) {
            return this.buffer[e] === i;
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
                if (e.buffer[t] === i) {
                    e.buffer[t] = o;
                }
            });
        };
        t.prototype.listenTo = function t() {
            var e = this;
            window.addEventListener("keydown", function(t) {
                var n = t.keyCode;
                if (e.buffer[n] >= o) return;
                e.buffer[n] = i;
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
    var r = n(1);
    var i = o(r);
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
        t.prototype.triggerEvent = function t(e, n, r) {
            var o = this.game;
            var a = o.getCurrScene();
            if (!a) return;
            var s = this.resolveScreenPoint(e);
            t: for (var u = 0; u < a.layers.length; u++) {
                var f = a.layers[a.layers.length - 1 - u];
                for (var c = 0; c < f.gameObjects.length; c++) {
                    var l = f.gameObjects[c];
                    if (i.default.isPointInRect(s, l.getRect())) {
                        l.trigger(n, {
                            screenX: s.x,
                            screenY: s.y,
                            objectX: s.x - l.pos.x,
                            objectY: s.y - l.pos.y,
                            id: s.id,
                            isMouseDown: r
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
                isMouseDown: r
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
            var r = this.triggerEvent(e, "mouseMove", n);
            if (!r) return;
            var i = this.objectsCaptured[r.id];
            if (i && i !== r.object) {
                i.trigger("mouseLeave");
                delete this.objectsCaptured[r.id];
            }
            if (r.object && i !== r.object) {
                r.object.trigger("mouseEnter");
                this.objectsCaptured[r.id] = r.object;
            }
        };
        t.prototype.resolveMouseUp = function t(e) {
            if (1 && window.canceled) return;
            var n = this.triggerEvent(e, "mouseUp");
            if (!n) return;
            var r = this.objectsCaptured[n.id];
            if (!r) return;
            r.trigger("mouseUp");
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
    function r(t, e) {
        if (!(t instanceof e)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    var i = function() {
        function t() {
            r(this, t);
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
            var r = this.events[e];
            if (!r) return;
            var i = r.length;
            while (i--) {
                r[i](n);
            }
        };
        return t;
    }();
    e.default = i;
}, function(t, e, n) {
    "use strict";
    e.__esModule = true;
    function r(t, e) {
        if (!(t instanceof e)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    var i = function() {
        function t() {
            r(this, t);
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
    e.default = i;
}, function(t, e, n) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var r = n(35);
    var i = s(r);
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
    var f = function() {
        function t(e) {
            u(this, t);
            this.vel = new i.default();
            this.game = e.game;
            this.gameObject = e;
        }
        t.prototype.update = function t(e, n) {
            if (n > 20) n = 20;
            if (!this.gameObject.rigidBody.static) {
                var r = this.vel.x * n / 1e3;
                var i = this.vel.y * n / 1e3;
                var o = this.gameObject.pos.y + i;
                this.game._collider.moveBy(this.gameObject, r, i);
                this.gameObject.rigidBody.onFloor = o > this.gameObject.pos.y;
                if (o !== this.gameObject.pos.y) this.vel.y = 0;
                this.vel.y += this.game.gravityConstant * n / 1e3;
            }
        };
        return t;
    }();
    e.default = f;
}, function(t, e, n) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var r = n(1);
    function i(t, e) {
        if (!(t instanceof e)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    var o = function() {
        function t(e) {
            i(this, t);
            this.game = e;
        }
        t.overlapTest = function t(e, n) {
            return e.x < n.x + n.width && e.x + e.width > n.x && e.y < n.y + n.height && e.y + e.height > n.y;
        };
        t.prototype.moveBy = function e(n, r, i) {
            var o = this.game.getCurrScene().getAllGameObjects().concat(this.game._currentScene.tileMap.getTilesAtRect(n.getRect()));
            var a = n.getRect();
            a.x += r;
            a.y += i;
            var s = false, u = false;
            for (var f = 0, c = o.length; f < c; f++) {
                var l = o[f];
                var h = l.getRect();
                if (n !== o[f] && t.overlapTest(a, h)) {
                    var p = a.bottom - h.y;
                    var d = h.bottom - a.y;
                    var y = a.x + a.width - h.x;
                    var m = h.right - a.x;
                    var v = Math.min(p, d, y, m);
                    if (p === v) {
                        n.pos.y = h.y - a.height;
                        u = true;
                    } else if (d === v) {
                        n.pos.y = h.bottom;
                        u = true;
                    } else if (y === v) {
                        n.pos.x = h.x - a.width;
                        s = true;
                    } else if (m === v) {
                        n.pos.x = h.x + h.width;
                        s = true;
                    }
                }
            }
            if (!s) n.pos.x += r;
            if (!u) n.pos.y += i;
        };
        t.prototype.moveTo = function e(n, r, i) {
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
            n.pos.x = r;
            n.pos.y = i;
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
            var r = arguments[1];
            var i = void 0;
            for (var o = 0; o < n; o++) {
                i = e[o];
                if (t.call(r, i, o, e)) {
                    return i;
                }
            }
            return undefined;
        };
    }
}, function(t, e, n) {
    "use strict";
    e.__esModule = true;
    function r(t, e) {
        if (!(t instanceof e)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    var i = function() {
        function t(e) {
            r(this, t);
            this.renderableCache = {};
            this.container = null;
            this.game = e;
        }
        t.prototype.onResize = function t() {
            var e = this.container.height / this.container.width;
            var n = window.innerHeight / window.innerWidth;
            var r = void 0;
            var i = void 0;
            if (n < e) {
                i = window.innerHeight;
                r = i / e;
            } else {
                r = window.innerWidth;
                i = r * e;
            }
            this.game.scale.x = r / this.game.width;
            this.game.scale.y = i / this.game.height;
            this.game.pos.x = (window.innerWidth - r) / 2;
            this.game.pos.y = (window.innerHeight - i) / 2;
            this.container.style.width = r + "px";
            this.container.style.height = i + "px";
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
    e.default = i;
}, function(t, e, n) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var r = n(30);
    var i = o(r);
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
    var f = function(t) {
        u(e, t);
        function e(n) {
            a(this, e);
            var r = s(this, t.call(this, n));
            var i = document.createElement("canvas");
            r.ctx = i.getContext("2d");
            document.body.appendChild(i);
            i.setAttribute("width", n.width);
            i.setAttribute("height", n.height);
            r.container = i;
            r.registerResize();
            return r;
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
        e.prototype.drawImage = function t(e, n, r, i, o, a, s) {
            this.ctx.drawImage(this.renderableCache[e], n, r, i, o, a, s, i, o);
        };
        e.prototype.fillRect = function t(e, n, r, i, o) {
            this.ctx.fillStyle = o;
            this.ctx.fillRect(e, n, r, i);
        };
        e.prototype.drawRect = function t(e, n, r, i, o) {
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
            var r = this;
            var i = new Image();
            i.src = e;
            i.onload = function() {
                var t = document.createElement("canvas");
                t.setAttribute("width", i.width);
                t.setAttribute("height", i.height);
                var o = t.getContext("2d");
                o.drawImage(i, 0, 0);
                r.renderableCache[e] = t;
                n();
            };
        };
        return e;
    }(i.default);
    e.default = f;
}, function(t, e, n) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var r = n(31);
    var i = o(r);
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
            return new i.default(e);
        };
        return t;
    }();
    e.default = s;
}, function(t, e, n) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var r = n(36);
    var i = o(r);
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
            var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
            if (1 && !n) throw "repository.getObject: type not specified";
            if (1 && e == null) {
                console.trace("id is null");
                throw "::getObject() id not specified for type " + n;
            }
            var o = i[n];
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
            if (r || !this.cache[a[e]]) this.cache[e] = new o(this._game).fromJSON(a);
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
            var r = e.toJSON(n);
            var i = this.descriptions[e.type].findIndex(function(t) {
                return t.id == e.id;
            });
            this.descriptions[e.type][i] = r;
            var o = this.getObject(e.id, e.type, true);
            if (o) o.fromJSON(r);
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
            if (1 && !i[e]) throw 'getArray: unregistered type "' + e + '"';
            if (this.arrays[e]) return this.arrays[e];
            var r = [];
            if (!this.descriptions[e]) this.descriptions[e] = [];
            this.descriptions[e].forEach(function(t) {
                if (1 && (t.id === null || t.id === undefined)) {
                    console.error(t);
                    throw "object id must me specified";
                }
                r.push(n.getObject(t.id, e));
            });
            return this.arrays[e] = r;
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
    var r = n(1);
    var i = o(r);
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
            var r = {};
            Object.keys(e.from).forEach(function(t) {
                r[t] = true;
            });
            Object.keys(e.to).forEach(function(t) {
                r[t] = true;
            });
            this.propsToChange = Object.keys(r);
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
            var r = this.propsToChange.length;
            while (r--) {
                var o = this.propsToChange[r];
                this.obj[o] = i.default.ease[this.easeFnName](n, this.desc.from[o], this.desc.to[o] - this.desc.from[o], this.tweenTime);
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
    function r(t, e) {
        if (!(t instanceof e)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    var i = function() {
        function t() {
            var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
            var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            r(this, t);
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
            var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
            if (r) return new t(this.x * n, this.y * n);
            this.x *= n;
            this.y *= n;
            return this;
        };
        t.prototype.divByScalar = function t(e) {
            var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
            return this.multToScalar(1 / e, n);
        };
        t.prototype.plus = function e(n) {
            var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            if (!r) return new t(this.x + n.x, this.y + n.y);
            this.x += n.x;
            this.y += n.y;
            return this;
        };
        t.prototype.minus = function e(n) {
            var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            if (!r) return new t(this.x - n.x, this.y - n.y);
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
            var r = e.minus(n);
            return r.normalize();
        };
        t.distance = function e(n, r) {
            return Math.sqrt(t.distanceSquared(n, r));
        };
        t.distanceSquared = function t(e, n) {
            return (e.x - n.x) * (e.x - n.x) + (e.y - n.y) * (e.y - n.y);
        };
        return t;
    }();
    e.default = i;
}, function(t, e, n) {
    "use strict";
    e.__esModule = true;
    e.TileMap = e.TextField = e.Layer = e.Font = e.Sound = e.Scene = e.ParticleSystem = e.CommonBehaviour = e.GameObject = e.GameObjectProto = e.SpriteSheet = e.FrameAnimation = undefined;
    var r = n(39);
    var i = E(r);
    var o = n(45);
    var a = E(o);
    var s = n(6);
    var u = E(s);
    var f = n(40);
    var c = E(f);
    var l = n(37);
    var h = E(l);
    var p = n(42);
    var d = E(p);
    var y = n(43);
    var m = E(y);
    var v = n(44);
    var g = E(v);
    var b = n(38);
    var _ = E(b);
    var w = n(41);
    var O = E(w);
    var j = n(46);
    var x = E(j);
    var S = n(7);
    var T = E(S);
    function E(t) {
        return t && t.__esModule ? t : {
            default: t
        };
    }
    e.FrameAnimation = i.default;
    e.SpriteSheet = a.default;
    e.GameObjectProto = u.default;
    e.GameObject = c.default;
    e.CommonBehaviour = h.default;
    e.ParticleSystem = d.default;
    e.Scene = m.default;
    e.Sound = g.default;
    e.Font = _.default;
    e.Layer = O.default;
    e.TextField = x.default;
    e.TileMap = T.default;
}, function(t, e, n) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var r = n(0);
    var i = o(r);
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
    var f = function(t) {
        u(e, t);
        function e(n) {
            a(this, e);
            var r = s(this, t.call(this, n));
            r.type = "CommonBehaviour";
            r.parameters = [];
            r.description = null;
            return r;
        }
        return e;
    }(i.default);
    e.default = f;
}, function(t, e, n) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var r = n(0);
    var i = o(r);
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
    var f = function(t) {
        u(e, t);
        function e(n) {
            a(this, e);
            var r = s(this, t.call(this, n));
            r.type = "Font";
            r.resourcePath = null;
            r.fontSize = 12;
            r.fontFamily = "Monospace";
            r.fontContext = null;
            r.fontColor = {
                r: 0,
                g: 0,
                b: 0
            };
            return r;
        }
        return e;
    }(i.default);
    e.default = f;
}, function(t, e, n) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var r = n(0);
    var i = o(r);
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
    var f = function(t) {
        u(e, t);
        function e(n) {
            a(this, e);
            var r = s(this, t.call(this, n));
            r.type = "FrameAnimation";
            r._currFrame = 0;
            r.frames = [];
            r.duration = 1e3;
            r._gameObject = null;
            r._startTime = null;
            r.stop();
            return r;
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
            var r = this._gameObject.currFrameIndex;
            if (r != this.frames[this._currFrame]) {
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
    }(i.default);
    e.default = f;
}, function(t, e, n) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var r = n(6);
    var i = u(r);
    var o = n(16);
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
    var h = function t() {};
    var p = function(t) {
        l(e, t);
        function e(n) {
            f(this, e);
            var r = c(this, t.call(this, n));
            r.type = "GameObject";
            r.gameObjectProto = null;
            return r;
        }
        e.prototype.revalidate = function e() {
            var n = this;
            var r = {};
            for (var i in this) {
                if (!this.hasOwnProperty(i)) continue;
                r[i] = this[i];
            }
            Object.keys(this.gameObjectProto).forEach(function(t) {
                if (n.gameObjectProto[t] === undefined) return;
                n[t] = n.gameObjectProto[t];
            });
            Object.keys(r).forEach(function(t) {
                if (!r[t]) return;
                if (r[t].splice && r[t].length === 0) return;
                n[t] = r[t];
            });
            t.prototype.revalidate.call(this);
        };
        e.prototype.setIndividualBehaviour = function t(e) {
            var n = new e(this.game);
            n.game = this.game;
            n.gameObject = this;
            if (!n.onCreate) n.onCreate = h;
            if (!n.onUpdate) n.onUpdate = h;
            if (!n.onDestroy) n.onDestroy = h;
            this._individualBehaviour = n;
        };
        e.prototype.setCommonBehaviour = function t() {
            var e = this;
            var n = [];
            this.commonBehaviour.forEach(function(t) {
                var r = a[t.name];
                if (true) {
                    if (!r) {
                        console.error(t);
                        console.error(a);
                        throw "can not find common behaviour with name " + t.name;
                    }
                }
                var i = new r(e.game);
                i.manage(e, t.parameters);
                n.push(i);
            });
            this.commonBehaviour = n;
        };
        return e;
    }(i.default);
    e.default = p;
}, function(t, e, n) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var r = n(0);
    var i = o(r);
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
    var f = function(t) {
        u(e, t);
        function e(n) {
            a(this, e);
            var r = s(this, t.call(this, n));
            r.type = "Layer";
            r.gameObjects = [];
            return r;
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
            var r = this.gameObjects;
            var i = r.length;
            var o = i - 1;
            while (i--) {
                var a = r[o - i];
                a && a.update(e, n);
            }
        };
        return e;
    }(i.default);
    e.default = f;
}, function(t, e, n) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var r = n(0);
    var i = u(r);
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
    var h = function t(e) {
        return a.random(e.from, e.to);
    };
    var p = function(t) {
        l(e, t);
        function e(n) {
            f(this, e);
            var r = c(this, t.call(this, n));
            r.type = "ParticleSystem";
            r.gameObjectProto = null;
            r._particles = [];
            r.numOfParticlesToEmit = {
                from: 1,
                to: 10
            };
            r.particleAngle = {
                from: 0,
                to: 0
            };
            r.particleVelocity = {
                from: 1,
                to: 100
            };
            r.particleLiveTime = {
                from: 100,
                to: 1e3
            };
            r.emissionRadius = 0;
            return r;
        }
        e.prototype.revalidate = function t() {
            if (this.particleAngle.to < this.particleAngle.from) this.particleAngle.to += 2 * Math.PI;
        };
        e.find = function t(e) {};
        e.findAll = function t(e) {};
        e.prototype.emit = function t(e, n) {
            for (var r = 0; r < h(this.numOfParticlesToEmit); r++) {
                var i = this.gameObjectProto.clone();
                var o = h(this.particleAngle);
                var a = h(this.particleVelocity);
                i.vel.x = a * Math.cos(o);
                i.vel.y = a * Math.sin(o);
                i.pos.x = h({
                    from: e - this.emissionRadius,
                    to: e + this.emissionRadius
                });
                i.pos.y = h({
                    from: n - this.emissionRadius,
                    to: n + this.emissionRadius
                });
                i.liveTime = h(this.particleLiveTime);
                this._particles.push(i);
            }
        };
        e.prototype.update = function t(e, n) {
            var r = this._particles;
            var i = r.length;
            var o = i - 1;
            while (i--) {
                var a = r[o - i];
                if (!a) continue;
                if (!a._timeCreated) a._timeCreated = e;
                if (e - a._timeCreated > a.liveTime) {
                    this._particles.splice(this._particles.indexOf(a), 1);
                }
                a.update(e, n);
            }
        };
        return e;
    }(i.default);
    e.default = p;
}, function(t, e, n) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var r = n(0);
    var i = f(r);
    var o = n(26);
    var a = f(o);
    var s = n(7);
    var u = f(s);
    function f(t) {
        return t && t.__esModule ? t : {
            default: t
        };
    }
    function c(t, e) {
        if (!(t instanceof e)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    function l(t, e) {
        if (!t) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return e && (typeof e === "object" || typeof e === "function") ? e : t;
    }
    function h(t, e) {
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
        h(e, t);
        function e(n) {
            c(this, e);
            var r = l(this, t.call(this, n));
            r.type = "Scene";
            r.layers = [];
            r.useBG = false;
            r.colorBG = {
                r: 255,
                g: 255,
                b: 255
            };
            r._tweenMovies = [];
            r._individualBehaviour = null;
            r.tileMap = null;
            if (false) r.tileMap = new u.default(n);
            return r;
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
            var r = this.getAllSpriteSheets().concat(this.game.repository.getArray("Font"));
            var i = new a.default();
            i.onResolved = function() {
                e && e();
            };
            r.forEach(function(t) {
                i.addTask(function() {
                    n.game._renderer.loadTextureInfo(t.resourcePath, function() {
                        return i.resolveTask(t.id);
                    });
                }, t.id);
            });
            i.start();
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
            var r = this.layers;
            var i = this.layers.length;
            var o = i - 1;
            this.game.camera.update(e);
            this.game._renderer.translate(-this.game.camera.pos.x, -this.game.camera.pos.y);
            if (this._individualBehaviour) this._individualBehaviour.onUpdate();
            while (i--) {
                r[i - o].update(e, n);
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
        e.prototype.tween = function t(e, n, r, i) {};
        e.prototype._updateTileMap = function t() {
            var e = this.tileMap.spriteSheet;
            if (!e) return;
            var n = this.game._renderer;
            var r = ~~(this.game.camera.pos.x / this.tileMap.spriteSheet._frameWidth);
            var i = ~~(this.game.camera.pos.y / this.tileMap.spriteSheet._frameHeight);
            var o = r + this.tileMap._tilesInScreenX + 2;
            var a = i + this.tileMap._tilesInScreenY + 2;
            for (var s = i; s < a; s++) {
                for (var u = r; u < o; u++) {
                    var f = this.tileMap.data[s] && this.tileMap.data[s][u];
                    if (f == null) continue;
                    n.drawImage(e.resourcePath, e.getFramePosX(f), e.getFramePosY(f), e._frameWidth, e._frameHeight, u * e._frameWidth, s * e._frameHeight);
                }
            }
        };
        e.prototype.printText = function t(e, n, r, i) {
            if (!r) return;
            if (!r.substring) r = JSON.stringify(r, null, 4);
            this.game.renderer.printText(e, n, r, i);
        };
        e.prototype.log = function t(e) {
            this.printText(0, 0, e);
        };
        return e;
    }(i.default);
    e.default = p;
}, function(t, e, n) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var r = n(0);
    var i = o(r);
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
    var f = function(t) {
        u(e, t);
        function e(n) {
            a(this, e);
            var r = s(this, t.call(this, n));
            r.type = "Sound";
            r.resourcePath = "";
            r._gain = 1;
            r._loop = false;
            return r;
        }
        e.find = function t(e) {};
        e.prototype.play = function t() {};
        e.prototype.stop = function t() {};
        e.prototype.pause = function t() {
            throw "not implemented";
        };
        e.prototype.setGain = function t(e, n, r) {};
        return e;
    }(i.default);
    e.default = f;
}, function(t, e, n) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var r = n(0);
    var i = o(r);
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
    var f = function(t) {
        u(e, t);
        function e(n) {
            a(this, e);
            var r = s(this, t.call(this, n));
            r.type = "SpriteSheet";
            r.width = 0;
            r.height = 0;
            r.numOfFramesH = 1;
            r.numOfFramesV = 1;
            r._frameWidth = 0;
            r._frameHeight = 0;
            r._numOfFrames = 0;
            r.resourcePath = "";
            return r;
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
    }(i.default);
    e.default = f;
}, function(t, e, n) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var r = n(0);
    var i = o(r);
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
    var f = function(t) {
        u(e, t);
        function e(n) {
            a(this, e);
            var r = s(this, t.call(this, n));
            r.type = "TextField";
            r._chars = null;
            r.text = "";
            r.font = null;
            return r;
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
            var r = 0;
            this.height = this.font.fontContext.symbols[" "].height;
            for (var i = 0, o = e.length; i < o; i++) {
                this._chars.push(e[i]);
                var a = this.font.fontContext.symbols[e[i]] || this.font.fontContext.symbols[" "];
                if (e[i] === "\n") {
                    r++;
                    this.height += a.height;
                    n[r] = {
                        width: 0
                    };
                } else {
                    n[r].width += a.width;
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
            var r = 0;
            this._chars.forEach(function(t) {
                var i = e.font.fontContext.symbols[t] || e.font.fontContext.symbols["?"];
                if (t === "\n") {
                    n = 0;
                    r += i.height;
                    return;
                }
                e.game._renderer.drawImage(e.font.resourcePath, i.x, i.y, i.width, i.height, e.pos.x + n, e.pos.y + r);
                n += i.width;
            });
        };
        return e;
    }(i.default);
    e.default = f;
}, function(t, e, n) {
    "use strict";
    var r = n(10);
    var i = f(r);
    var o = n(11);
    var a = f(o);
    var s = n(12);
    var u = f(s);
    function f(t) {
        return t && t.__esModule ? t : {
            default: t
        };
    }
    var c = JSON.parse(a.default);
    var l = JSON.parse(u.default);
    if (1 && c.startSceneId === undefined) throw "start scene not specified";
    var h = new i.default(c);
    h.repository.setDescriptions(l);
    var p = h.repository.getObject(c.startSceneId, "Scene");
    h.runScene(p);
    if (true) window.repository = h.repository;
} ]);