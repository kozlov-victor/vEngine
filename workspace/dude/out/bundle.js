(function(t) {
    var e = {};
    function i(r) {
        if (e[r]) {
            return e[r].exports;
        }
        var n = e[r] = {
            i: r,
            l: false,
            exports: {}
        };
        t[r].call(n.exports, n, n.exports, i);
        n.l = true;
        return n.exports;
    }
    i.m = t;
    i.c = e;
    i.i = function(t) {
        return t;
    };
    i.d = function(t, e, r) {
        if (!i.o(t, e)) {
            Object.defineProperty(t, e, {
                configurable: false,
                enumerable: true,
                get: r
            });
        }
    };
    i.n = function(t) {
        var e = t && t.__esModule ? function e() {
            return t["default"];
        } : function e() {
            return t;
        };
        i.d(e, "a", e);
        return e;
    };
    i.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
    };
    i.p = "";
    return i(i.s = 50);
})([ function(t, e, i) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var r, n;
    var o = i(6);
    var a = p(o);
    var s = i(5);
    var h = p(s);
    var u = i(30);
    var f = p(u);
    var c = i(4);
    var l = i(32);
    var d = p(l);
    function p(t) {
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
    var v = (r = (0, c.Transient)({
        game: true,
        rigidBody: true
    }), r(n = function(t) {
        m(e, t);
        function e(i) {
            y(this, e);
            var r = g(this, t.call(this));
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
            if (1 && !i) throw "can not create model '" + r.type + "': game instance not passed to model constructor";
            r.game = i;
            r._emitter = new f.default();
            r.rigidBody = new d.default(r);
            return r;
        }
        e.prototype.revalidate = function t() {};
        e.prototype.setIndividualBehaviour = function t(e) {};
        e.prototype.setCommonBehaviour = function t() {};
        e.prototype.onShow = function t() {};
        e.prototype.getRect = function t() {
            var e = this.pos.x, i = this.pos.y, r = this.width, n = this.height;
            return {
                x: e,
                y: i,
                width: r,
                height: n,
                right: e + r,
                bottom: i + n
            };
        };
        e.prototype.tween = function t(e) {
            var i = new h.default(e, this);
            this._tweens.push(i);
        };
        e.prototype.update = function t(e) {
            var i = this;
            this._tweens.forEach(function(t, r) {
                t.update(e);
                if (t.completed) i._tweens.splice(r, 1);
            });
        };
        e.prototype.clone = function t(e) {
            var i = this.constructor;
            var r = new i(this.game);
            r._cloner = this;
            return r.fromJSON(this.toJSON(e), true);
        };
        e.prototype.on = function t(e, i) {
            this._emitter.on(e, i);
            return this;
        };
        e.prototype.trigger = function t(e, i) {
            this._emitter.trigger(e, i);
        };
        e.prototype.updateCloner = function t(e) {
            if (false) return;
            var i = this._cloner;
            if (!i) return;
            i.fromJSON(this.toJSON(e));
            i.updateCloner(e);
            delete this._cloner;
        };
        return e;
    }(a.default)) || n);
    e.default = v;
}, function(t, e, i) {
    "use strict";
    e.isPointInRect = function(t, e, i) {
        return t.x > e.x && t.x < e.x + e.width && t.y > e.y && t.y < e.y + e.height;
    };
    e.overlapTest = function(t, e) {
        return t.x < e.x + e.width && t.x + t.width > e.x && t.y < e.y + e.height && t.y + t.height > e.y;
    };
    e.radToDeg = function(t) {
        return t * 180 / Math.PI;
    };
    e.degToRad = function(t) {
        return t * Math.PI / 180;
    };
    e.random = function(t, e) {
        if (t > e) {
            var i = t;
            t = e;
            e = i;
        }
        var r = Math.random() * (e - t) + t;
        if (r > e) r = e; else if (r < t) r = t;
        return r;
    };
    var r = {};
    r.linear = function(t, e, i, r) {
        return i * t / r + e;
    };
    r.easeInQuad = function(t, e, i, r) {
        t /= r;
        return i * t * t + e;
    };
    r.easeOutQuad = function(t, e, i, r) {
        t /= r;
        return -i * t * (t - 2) + e;
    };
    r.easeInOutQuad = function(t, e, i, r) {
        t /= r / 2;
        if (t < 1) return i / 2 * t * t + e;
        t--;
        return -i / 2 * (t * (t - 2) - 1) + e;
    };
    e.ease = r;
}, function(t, e, i) {
    "use strict";
    e.__esModule = true;
    function r(t, e) {
        if (!(t instanceof e)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    var n = function() {
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
    e.default = n;
}, function(t, e, i) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var r = i(2);
    var n = o(r);
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
    var u = function(t) {
        h(e, t);
        function e(i) {
            a(this, e);
            var r = s(this, t.call(this));
            r.gameObject = null;
            r.game = i;
            return r;
        }
        e.prototype.manage = function t(e, i, r) {
            var n = this;
            this.gameObject = e;
            this.parameters = i;
            this.animations = {};
            r.forEach(function(t) {
                var e = "walk" + t + "Animation", r = "idle" + t + "Animation";
                n.animations[e] = n.gameObject.frameAnimations.find(function(t) {
                    return t.name === i[e];
                });
                i[r] && (n.animations[r] = n.gameObject.frameAnimations.find(function(t) {
                    return t.name === i[r];
                }));
            });
        };
        e.prototype.stop = function t() {
            this.gameObject.stopFrAnimations();
            var e = "idle" + this.gameObject._lastDirection + "Animation";
            if (this.animations[e]) {
                this.animations[e].play();
            }
        };
        e.prototype.go = function t(e) {
            this.gameObject._lastDirection = e;
            this.animations["walk" + e + "Animation"].play();
        };
        return e;
    }(n.default);
    e.default = u;
}, function(t, e, i) {
    "use strict";
    e.__esModule = true;
    e.Transient = r;
    function r(t) {
        return function(e) {
            e.transient = t;
        };
    }
}, function(t, e, i) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var r = i(1);
    var n = o(r);
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
            this.propsToChange = [];
            this.startedTime = null;
            this.currTime = null;
            this.completed = false;
            this.obj = e.target;
            this.progressFn = e.progress;
            this.completeFn = e.complete;
            this.easeFnName = e.ease || "linear";
            this.tweenTime = e.time || 1e3;
            this.desc = this.normalizeDesc(e);
            this.justReused = false;
        }
        t.prototype.reuse = function t(e) {
            var i = this;
            this.startedTime = this.currTime;
            this.completed = false;
            Object.keys(e).forEach(function(t) {
                i.desc[t] = e[t];
            });
            this.desc = this.normalizeDesc(e);
        };
        t.prototype.normalizeDesc = function t(e) {
            var i = this;
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
                if (e.from[t] === undefined) e.from[t] = i.obj[t];
                if (e.to[t] === undefined) e.to[t] = i.obj[t];
            });
            return e;
        };
        t.prototype.update = function t(e) {
            if (this.completed) return;
            this.currTime = e;
            if (!this.startedTime) this.startedTime = e;
            var i = e - this.startedTime;
            window.game.renderer.log("updated " + i);
            window.game.renderer.log("test log1");
            if (i > this.tweenTime) {
                this._complete();
                return;
            }
            var r = this.propsToChange.length;
            while (r--) {
                var o = this.propsToChange[r];
                this.obj[o] = n.default.ease[this.easeFnName](i, this.desc.from[o], this.desc.to[o] - this.desc.from[o], this.tweenTime);
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
                var i = this.propsToChange[e];
                this.obj[i] = this.desc.to[i];
            }
            this.progressFn && this.progressFn(this.obj);
            this.completeFn && this.completeFn(this.obj);
            this.completed = true;
        };
        return t;
    }();
    e.default = s;
}, function(t, e, i) {
    "use strict";
    e.__esModule = true;
    var r = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(t) {
        return typeof t;
    } : function(t) {
        return t && typeof Symbol === "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
    };
    function n(t, e) {
        if (!(t instanceof e)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    var o = function t(e, i, r) {
        if (!e) return true;
        if (e.indexOf("_") === 0) return true;
        if (i && i.call) return true;
        if (typeof i === "string") return false;
        if (typeof i === "number") return false;
        if (typeof i === "boolean") return false;
        return i == null && !r.preserveNull;
    };
    var a = function t(e) {
        return typeof e === "string" || typeof e === "number";
    };
    var s = function t(e) {
        var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
        if (e === undefined) return undefined; else if (e === null) return null; else if (typeof window !== "undefined" && e === window) return undefined; else if (i.indexOf(e) > -1) return e;
        if (Object.prototype.toString.call(e) === "[object Array]") {
            var n = [], o = 0, a = e.length;
            for (;o < a; o++) {
                var s = void 0;
                if (i.indexOf(e[o]) > -1) {
                    s = e[o];
                } else {
                    i.push(e);
                    s = t(e[o], i);
                    i.push(e[o]);
                }
                n[o] = s;
            }
            return n;
        } else if ((typeof e === "undefined" ? "undefined" : r(e)) === "object") {
            var h = {};
            for (var u in e) {
                if (!e.hasOwnProperty(u)) continue;
                var f = void 0;
                if (i.indexOf(e[u]) > -1) {
                    f = e[u];
                } else {
                    i.push(e);
                    f = t(e[u], i);
                    i.push(e[u]);
                }
                h[u] = f;
            }
            return h;
        } else return e;
    };
    var h = function() {
        function t() {
            n(this, t);
        }
        t.prototype.fromJSON = function t() {
            var e = this;
            var i = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var r = arguments[1];
            Object.keys(i).forEach(function(t) {
                if (t === "type") return;
                if (t in e) e[t] = i[t]; else {
                    console.error(e);
                    throw "::fromJSON(): class " + e.constructor.name + " has no property " + t;
                }
                if (!e[t]) return;
                if (i[t].id && i[t].type) e[t] = e.game.repository.getObject(i[t].id, i[t].type, r); else if (i[t].splice) {
                    var n = e[t];
                    e[t] = [];
                    n.forEach(function(i, n) {
                        if (i && i.type && i.id) {
                            e[t].push(e.game.repository.getObject(i.id, i.type, r));
                        } else {
                            e[t].push(i);
                        }
                    });
                }
            });
            this.revalidate();
            return this;
        };
        t.prototype.toJSON = function t() {
            var e = this;
            var i = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
                preserveNull: false
            };
            var n = {};
            for (var h in this) {
                if (o(h, this[h], i)) {
                    continue;
                }
                if (this.constructor.transient && this.constructor.transient[h]) {
                    continue;
                }
                if (this[h] != null && this[h].type && this[h].id) {
                    n[h] = {
                        id: this[h].id,
                        type: this[h].type
                    };
                } else if (this[h] != null && this[h].splice) {
                    (function() {
                        var t = e[h];
                        var i = [];
                        t.forEach(function(t) {
                            if (t && t.type && t.id) {
                                i.push({
                                    type: t.type,
                                    id: t.id
                                });
                            } else {
                                if (a(t)) i.push(s(t));
                            }
                        });
                        n[h] = i;
                    })();
                } else {
                    var u = s(this[h]);
                    if (u && u.splice && !u.length) continue; else if (u != null && (typeof u === "undefined" ? "undefined" : r(u)) === "object" && !Object.keys(u).length) continue;
                    n[h] = u;
                }
            }
            return n;
        };
        return t;
    }();
    e.default = h;
}, function(t, e, i) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var r = i(0);
    var n = o(r);
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
    var u = function(t) {
        h(e, t);
        e.find = function t(e) {};
        e.findAll = function t(e) {};
        function e(i) {
            a(this, e);
            var r = s(this, t.call(this, i));
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
            this.frameAnimations.forEach(function(t, i) {
                e.frameAnimations[i] = e.frameAnimations[i].clone();
                e.frameAnimations[i]._gameObject = e;
            });
        };
        e.prototype.playFrameAnimation = function t(e, i) {
            var r = this.frameAnimations.find(function(t) {
                return t.name === e;
            });
            r._gameObject = this;
            this._currFrameAnimation = r;
            r.play(i);
        };
        e.prototype.setFrameIndex = function t(e) {
            this.currFrameIndex = e;
            this._sprPosX = this.spriteSheet.getFramePosX(this.currFrameIndex);
            this._sprPosY = this.spriteSheet.getFramePosY(this.currFrameIndex);
        };
        e.prototype.update = function e(i, r) {
            t.prototype.update.call(this, i);
            this._currFrameAnimation && this._currFrameAnimation.update(i);
            if (this._individualBehaviour) this._individualBehaviour.onUpdate(i, r);
            for (var n = 0, o = this.commonBehaviour.length; n < o; n++) {
                this.commonBehaviour[n].onUpdate(i, r);
            }
            this.rigidBody.update(i, r);
            this.game.renderer.draw(this);
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
    }(n.default);
    e.default = u;
}, function(t, e, i) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var r = i(0);
    var n = o(r);
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
    var u = function(t) {
        h(e, t);
        function e(i) {
            a(this, e);
            var r = s(this, t.call(this, i));
            r.type = "TileMap";
            r.spriteSheet = null;
            r.data = [];
            return r;
        }
        e.prototype.getTileAt = function t(e, i) {
            var r = this;
            if (!this.spriteSheet) return;
            var n = ~~(e / this.spriteSheet._frameWidth);
            var o = ~~(i / this.spriteSheet._frameHeight);
            if (!this.data[o]) return;
            var a = this.data[o][n];
            if (a == null) return;
            return {
                getRect: function t() {
                    var e = n * r.spriteSheet._frameWidth + 1, i = o * r.spriteSheet._frameHeight + 1, a = r.spriteSheet._frameWidth - 2, s = r.spriteSheet._frameHeight - 2;
                    return {
                        x: e,
                        y: i,
                        width: a,
                        height: s,
                        right: e + a,
                        bottom: i + s
                    };
                },
                tileIndex: this.spriteSheet.numOfFramesH * o + n + 1,
                value: a
            };
        };
        e.prototype.getTilesAtRect = function t(e) {
            var i = [];
            if (!this.spriteSheet) return i;
            var r = {};
            var n = e.x, o = void 0;
            var a = e.x + e.width, s = e.y + e.height;
            while (true) {
                o = e.y;
                while (true) {
                    var h = this.getTileAt(n, o);
                    if (h) {
                        if (!r[h.tileIndex]) {
                            i.push(h);
                            r[h.tileIndex] = true;
                        }
                    }
                    if (o === s) break;
                    o += this.spriteSheet._frameHeight;
                    if (o > s) o = s;
                }
                if (n === a) break;
                n += this.spriteSheet._frameWidth;
                if (n > a) n = a;
            }
            return i;
        };
        return e;
    }(n.default);
    e.default = u;
}, function(t, e, i) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var r = i(0);
    var n = o(r);
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
    var u = function(t) {
        h(e, t);
        function e(i) {
            a(this, e);
            var r = s(this, t.call(this, i));
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
            if (this.font === null) this.font = this.game.repository.getArray("Font")[0];
            if (1 && !this.font) throw "at least one Font must be created";
            this.setFont(this.font);
        };
        e.prototype.setText = function t(e) {
            e += "";
            this._chars = [];
            this.text = e;
            var i = [ {
                width: 0
            } ];
            var r = 0;
            this.height = this.font.fontContext.symbols[" "].height;
            for (var n = 0, o = e.length; n < o; n++) {
                this._chars.push(e[n]);
                var a = this.font.fontContext.symbols[e[n]] || this.font.fontContext.symbols[" "];
                if (e[n] === "\n") {
                    r++;
                    this.height += a.height;
                    i[r] = {
                        width: 0
                    };
                } else {
                    i[r].width += a.width;
                }
            }
            this.width = Math.max.apply(Math, i.map(function(t) {
                return t.width;
            }));
        };
        e.prototype.setFont = function t(e) {
            this.font = e;
            this.setText(this.text);
        };
        e.prototype.update = function e(i) {
            t.prototype.update.call(this, i);
            this.render();
        };
        e.prototype.render = function t() {
            var e = this;
            var i = 0;
            var r = 0;
            this._chars.forEach(function(t) {
                var n = e.font.fontContext.symbols[t] || e.font.fontContext.symbols["?"];
                if (t === "\n") {
                    i = 0;
                    r += n.height;
                    return;
                }
                e.game.renderer.drawImage(e.font.resourcePath, n.x, n.y, n.width, n.height, e.pos.x + i, e.pos.y + r);
                i += n.width;
            });
        };
        return e;
    }(n.default);
    e.default = u;
}, , , function(t, e, i) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var r, n;
    i(34);
    var o = i(37);
    var a = x(o);
    var s = i(38);
    var h = x(s);
    var u = i(29);
    var f = x(u);
    var c = i(28);
    var l = x(c);
    var d = i(27);
    var p = x(d);
    var y = i(33);
    var g = x(y);
    var m = i(4);
    var v = i(6);
    var w = x(v);
    var _ = i(26);
    var b = x(_);
    function x(t) {
        return t && t.__esModule ? t : {
            default: t
        };
    }
    function O(t, e) {
        if (!(t instanceof e)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    function j(t, e) {
        if (!t) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return e && (typeof e === "object" || typeof e === "function") ? e : t;
    }
    function E(t, e) {
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
    var S = (r = (0, m.Transient)({
        repository: true,
        camera: true,
        keyboard: true,
        gamePad: true
    }), r(n = function(t) {
        E(e, t);
        function e(i) {
            O(this, e);
            var r = j(this, t.call(this));
            r._lastTime = null;
            r._currTime = null;
            r._currentScene = null;
            r._running = false;
            r.renderer = null;
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
            r.gamePad = null;
            Object.keys(i).forEach(function(t) {
                r[t] = i[t];
            });
            var n = Date.now();
            r._lastTime = r._currTime = n;
            r._deltaTime = 0;
            r.repository = new h.default(r);
            r.mouse = new f.default(r);
            r.keyboard = new l.default(r);
            r.keyboard.listenTo();
            r.gamePad = new p.default(r);
            r.collider = new g.default(r);
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
            var n = this;
            if (!this.renderer) {
                this.renderer = a.default.getRenderer(this);
                this.mouse.listenTo(this.renderer.container);
            }
            this._currentScene = r;
            if (true) {
                var o = i(15);
                var s = "" + r.name[0].toUpperCase() + r.name.substr(1) + "Behaviour";
                if (s) r.setIndividualBehaviour(o[s]);
                r.layers.forEach(function(t) {
                    t.gameObjects.forEach(function(t) {
                        t.setCommonBehaviour();
                        var e = "" + t.name[0].toUpperCase() + t.name.substr(1) + "Behaviour";
                        var i = o[e];
                        if (i) t.setIndividualBehaviour(i);
                    });
                });
            }
            r.preload(function() {
                n._currentScene.onShow();
                if (!n._running) {
                    e.update(n);
                    n._running = true;
                }
            });
        };
        e.prototype.getCurrScene = function t() {
            return this._currentScene;
        };
        e.prototype.setCurrScene = function t(e) {
            this._currentScene = e;
        };
        e.update = function t(i) {
            if (1 && window.canceled) return;
            requestAnimationFrame(function() {
                e.update(i);
            });
            i._lastTime = i._currTime;
            i._currTime = Date.now();
            i._deltaTime = i._currTime - i._lastTime;
            if (true) {
                i.fps = ~~(1e3 / i._deltaTime);
                window.fps = i.fps;
                var r = i.renderer.getError();
                if (r) throw "render error with code " + r;
            }
            if (i._deltaTime > 20) i._deltaTime = 20;
            i._currentScene && i._currentScene.update(i._currTime, i._deltaTime);
            i.keyboard.update();
            i.gamePad.update();
        };
        return e;
    }(w.default)) || n);
    e.default = S;
}, function(t, e) {
    t.exports = {
        width: 900,
        height: 500,
        scaleStrategy: 0,
        startSceneId: 2,
        scale: {
            x: 1,
            y: 1
        },
        pos: {
            x: 0,
            y: 0
        },
        gravityConstant: 800
    };
}, function(t, e) {
    t.exports = {
        Scene: [ {
            id: 2,
            name: "mainScene",
            width: 5e3,
            height: 800,
            type: "Scene",
            layers: [ {
                type: "Layer",
                id: 2
            } ],
            useBG: true,
            colorBG: {
                r: 230,
                g: 254,
                b: 255
            },
            tileMap: {
                id: 52,
                type: "TileMap"
            }
        } ],
        Layer: [ {
            id: 2,
            name: "layer1",
            type: "Layer",
            gameObjects: [ {
                type: "GameObject",
                id: 7
            }, {
                type: "GameObject",
                id: 63
            }, {
                type: "GameObject",
                id: 64
            }, {
                type: "GameObject",
                id: 65
            }, {
                type: "GameObject",
                id: 67
            }, {
                type: "GameObject",
                id: 68
            } ]
        } ],
        SpriteSheet: [ {
            name: "dude",
            width: 288,
            height: 48,
            type: "SpriteSheet",
            numOfFramesH: 9,
            resourcePath: "resources/dude.png",
            id: 3
        }, {
            name: "platform",
            width: 500,
            height: 64,
            type: "SpriteSheet",
            resourcePath: "resources/platform.png",
            id: 5
        }, {
            name: "ground",
            width: 800,
            height: 32,
            type: "SpriteSheet",
            numOfFramesH: 25,
            resourcePath: "resources/ground.png",
            id: 57
        } ],
        GameObjectProto: [ {
            id: 4,
            name: "dude",
            width: 32,
            height: 48,
            type: "GameObjectProto",
            spriteSheet: {
                id: 3,
                type: "SpriteSheet"
            },
            commonBehaviour: [ {
                type: "CommonBehaviour",
                id: 15
            }, {
                type: "CommonBehaviour",
                id: 60
            } ],
            frameAnimations: [ {
                type: "FrameAnimation",
                id: 11
            }, {
                type: "FrameAnimation",
                id: 12
            }, {
                type: "FrameAnimation",
                id: 13
            }, {
                type: "FrameAnimation",
                id: 14
            } ]
        }, {
            id: 6,
            name: "platform",
            width: 500,
            height: 64,
            type: "GameObjectProto",
            spriteSheet: {
                id: 5,
                type: "SpriteSheet"
            },
            commonBehaviour: [ {
                type: "CommonBehaviour",
                id: 61
            } ]
        }, {
            id: 58,
            name: "ground1",
            width: 32,
            height: 32,
            type: "GameObjectProto",
            spriteSheet: {
                id: 57,
                type: "SpriteSheet"
            },
            commonBehaviour: [ {
                type: "CommonBehaviour",
                id: 62
            } ],
            currFrameIndex: 9
        } ],
        GameObject: [ {
            id: 7,
            name: "dude",
            pos: {
                x: 537,
                y: 127
            },
            layerId: 2,
            type: "GameObject",
            gameObjectProto: {
                id: 4,
                type: "GameObjectProto"
            }
        }, {
            id: 63,
            name: "ground1",
            pos: {
                x: 432,
                y: 156
            },
            layerId: 2,
            type: "GameObject",
            gameObjectProto: {
                id: 58,
                type: "GameObjectProto"
            }
        }, {
            id: 64,
            name: "platform",
            pos: {
                x: 12,
                y: 411
            },
            layerId: 2,
            type: "GameObject",
            gameObjectProto: {
                id: 6,
                type: "GameObjectProto"
            }
        }, {
            id: 65,
            name: "platform",
            pos: {
                x: 383,
                y: 196
            },
            layerId: 2,
            type: "GameObject",
            gameObjectProto: {
                id: 6,
                type: "GameObjectProto"
            }
        }, {
            id: 67,
            name: "ground1",
            pos: {
                x: 482,
                y: 119
            },
            layerId: 2,
            type: "GameObject",
            gameObjectProto: {
                id: 58,
                type: "GameObjectProto"
            }
        }, {
            pos: {
                x: 388,
                y: 140
            },
            layerId: 2,
            type: "GameObject",
            gameObjectProto: {
                id: 58,
                type: "GameObjectProto"
            },
            id: 68
        } ],
        FrameAnimation: [ {
            name: "left",
            type: "FrameAnimation",
            frames: [ 0, 1, 2, 3 ],
            id: 11
        }, {
            name: "right",
            type: "FrameAnimation",
            frames: [ 5, 6, 7, 8 ],
            id: 12
        }, {
            name: "idleLeft",
            type: "FrameAnimation",
            frames: [ 4 ],
            id: 13
        }, {
            name: "idleRight",
            type: "FrameAnimation",
            frames: [ 4 ],
            id: 14
        } ],
        CommonBehaviour: [ {
            id: 15,
            name: "Control2Dir",
            type: "CommonBehaviour",
            parameters: {
                velocity: "130",
                walkLeftAnimation: "left",
                walkRightAnimation: "right",
                idleLeftAnimation: "idleLeft",
                idleRightAnimation: "idleRight"
            }
        }, {
            name: "Draggable",
            type: "CommonBehaviour",
            id: 60
        }, {
            name: "Draggable",
            type: "CommonBehaviour",
            id: 61
        }, {
            name: "Draggable",
            type: "CommonBehaviour",
            id: 62
        } ],
        Font: [ {
            name: "font1",
            type: "Font",
            resourcePath: "resources/font1.png",
            fontSize: 21,
            fontFamily: "Berlin Sans FB",
            fontContext: {
                symbols: {
                    "0": {
                        x: 258,
                        y: 4,
                        width: 12,
                        height: 23
                    },
                    "1": {
                        x: 279,
                        y: 4,
                        width: 5,
                        height: 23
                    },
                    "2": {
                        x: 293,
                        y: 4,
                        width: 10,
                        height: 23
                    },
                    "3": {
                        x: 4,
                        y: 35,
                        width: 9,
                        height: 23
                    },
                    "4": {
                        x: 21,
                        y: 35,
                        width: 10,
                        height: 23
                    },
                    "5": {
                        x: 40,
                        y: 35,
                        width: 9,
                        height: 23
                    },
                    "6": {
                        x: 58,
                        y: 35,
                        width: 10,
                        height: 23
                    },
                    "7": {
                        x: 77,
                        y: 35,
                        width: 9,
                        height: 23
                    },
                    "8": {
                        x: 94,
                        y: 35,
                        width: 9,
                        height: 23
                    },
                    "9": {
                        x: 112,
                        y: 35,
                        width: 10,
                        height: 23
                    },
                    " ": {
                        x: 4,
                        y: 4,
                        width: 5,
                        height: 23
                    },
                    "!": {
                        x: 17,
                        y: 4,
                        width: 4,
                        height: 23
                    },
                    '"': {
                        x: 30,
                        y: 4,
                        width: 6,
                        height: 23
                    },
                    "#": {
                        x: 44,
                        y: 4,
                        width: 13,
                        height: 23
                    },
                    $: {
                        x: 66,
                        y: 4,
                        width: 9,
                        height: 23
                    },
                    "%": {
                        x: 83,
                        y: 4,
                        width: 15,
                        height: 23
                    },
                    "&": {
                        x: 106,
                        y: 4,
                        width: 14,
                        height: 23
                    },
                    "'": {
                        x: 129,
                        y: 4,
                        width: 3,
                        height: 23
                    },
                    "(": {
                        x: 140,
                        y: 4,
                        width: 7,
                        height: 23
                    },
                    ")": {
                        x: 156,
                        y: 4,
                        width: 7,
                        height: 23
                    },
                    "*": {
                        x: 171,
                        y: 4,
                        width: 7,
                        height: 23
                    },
                    "+": {
                        x: 187,
                        y: 4,
                        width: 8,
                        height: 23
                    },
                    ",": {
                        x: 203,
                        y: 4,
                        width: 4,
                        height: 23
                    },
                    "-": {
                        x: 216,
                        y: 4,
                        width: 8,
                        height: 23
                    },
                    ".": {
                        x: 232,
                        y: 4,
                        width: 4,
                        height: 23
                    },
                    "/": {
                        x: 244,
                        y: 4,
                        width: 6,
                        height: 23
                    },
                    ":": {
                        x: 130,
                        y: 35,
                        width: 4,
                        height: 23
                    },
                    ";": {
                        x: 143,
                        y: 35,
                        width: 4,
                        height: 23
                    },
                    "<": {
                        x: 155,
                        y: 35,
                        width: 7,
                        height: 23
                    },
                    "=": {
                        x: 170,
                        y: 35,
                        width: 9,
                        height: 23
                    },
                    ">": {
                        x: 187,
                        y: 35,
                        width: 7,
                        height: 23
                    },
                    "?": {
                        x: 203,
                        y: 35,
                        width: 8,
                        height: 23
                    },
                    "@": {
                        x: 219,
                        y: 35,
                        width: 13,
                        height: 23
                    },
                    A: {
                        x: 240,
                        y: 35,
                        width: 13,
                        height: 23
                    },
                    B: {
                        x: 262,
                        y: 35,
                        width: 12,
                        height: 23
                    },
                    C: {
                        x: 283,
                        y: 35,
                        width: 12,
                        height: 23
                    },
                    D: {
                        x: 4,
                        y: 66,
                        width: 14,
                        height: 23
                    },
                    E: {
                        x: 26,
                        y: 66,
                        width: 11,
                        height: 23
                    },
                    F: {
                        x: 45,
                        y: 66,
                        width: 11,
                        height: 23
                    },
                    G: {
                        x: 64,
                        y: 66,
                        width: 14,
                        height: 23
                    },
                    H: {
                        x: 86,
                        y: 66,
                        width: 15,
                        height: 23
                    },
                    I: {
                        x: 109,
                        y: 66,
                        width: 4,
                        height: 23
                    },
                    J: {
                        x: 122,
                        y: 66,
                        width: 5,
                        height: 23
                    },
                    K: {
                        x: 136,
                        y: 66,
                        width: 12,
                        height: 23
                    },
                    L: {
                        x: 157,
                        y: 66,
                        width: 10,
                        height: 23
                    },
                    M: {
                        x: 175,
                        y: 66,
                        width: 16,
                        height: 23
                    },
                    N: {
                        x: 200,
                        y: 66,
                        width: 15,
                        height: 23
                    },
                    O: {
                        x: 223,
                        y: 66,
                        width: 15,
                        height: 23
                    },
                    P: {
                        x: 246,
                        y: 66,
                        width: 13,
                        height: 23
                    },
                    Q: {
                        x: 267,
                        y: 66,
                        width: 15,
                        height: 23
                    },
                    R: {
                        x: 291,
                        y: 66,
                        width: 12,
                        height: 23
                    },
                    S: {
                        x: 4,
                        y: 97,
                        width: 9,
                        height: 23
                    },
                    T: {
                        x: 21,
                        y: 97,
                        width: 10,
                        height: 23
                    },
                    U: {
                        x: 40,
                        y: 97,
                        width: 13,
                        height: 23
                    },
                    V: {
                        x: 62,
                        y: 97,
                        width: 13,
                        height: 23
                    },
                    W: {
                        x: 83,
                        y: 97,
                        width: 18,
                        height: 23
                    },
                    X: {
                        x: 110,
                        y: 97,
                        width: 12,
                        height: 23
                    },
                    Y: {
                        x: 130,
                        y: 97,
                        width: 12,
                        height: 23
                    },
                    Z: {
                        x: 150,
                        y: 97,
                        width: 10,
                        height: 23
                    },
                    "[": {
                        x: 169,
                        y: 97,
                        width: 7,
                        height: 23
                    },
                    "\\": {
                        x: 184,
                        y: 97,
                        width: 6,
                        height: 23
                    },
                    "]": {
                        x: 198,
                        y: 97,
                        width: 7,
                        height: 23
                    },
                    "^": {
                        x: 214,
                        y: 97,
                        width: 9,
                        height: 23
                    },
                    _: {
                        x: 232,
                        y: 97,
                        width: 9,
                        height: 23
                    },
                    "`": {
                        x: 249,
                        y: 97,
                        width: 7,
                        height: 23
                    },
                    a: {
                        x: 264,
                        y: 97,
                        width: 11,
                        height: 23
                    },
                    b: {
                        x: 284,
                        y: 97,
                        width: 11,
                        height: 23
                    },
                    c: {
                        x: 303,
                        y: 97,
                        width: 8,
                        height: 23
                    },
                    d: {
                        x: 4,
                        y: 128,
                        width: 11,
                        height: 23
                    },
                    e: {
                        x: 23,
                        y: 128,
                        width: 10,
                        height: 23
                    },
                    f: {
                        x: 41,
                        y: 128,
                        width: 6,
                        height: 23
                    },
                    g: {
                        x: 55,
                        y: 128,
                        width: 10,
                        height: 23
                    },
                    h: {
                        x: 74,
                        y: 128,
                        width: 10,
                        height: 23
                    },
                    i: {
                        x: 93,
                        y: 128,
                        width: 4,
                        height: 23
                    },
                    j: {
                        x: 106,
                        y: 128,
                        width: 4,
                        height: 23
                    },
                    k: {
                        x: 119,
                        y: 128,
                        width: 11,
                        height: 23
                    },
                    l: {
                        x: 138,
                        y: 128,
                        width: 4,
                        height: 23
                    },
                    m: {
                        x: 151,
                        y: 128,
                        width: 17,
                        height: 23
                    },
                    n: {
                        x: 176,
                        y: 128,
                        width: 10,
                        height: 23
                    },
                    o: {
                        x: 195,
                        y: 128,
                        width: 10,
                        height: 23
                    },
                    p: {
                        x: 214,
                        y: 128,
                        width: 11,
                        height: 23
                    },
                    q: {
                        x: 234,
                        y: 128,
                        width: 11,
                        height: 23
                    },
                    r: {
                        x: 254,
                        y: 128,
                        width: 6,
                        height: 23
                    },
                    s: {
                        x: 269,
                        y: 128,
                        width: 6,
                        height: 23
                    },
                    t: {
                        x: 283,
                        y: 128,
                        width: 7,
                        height: 23
                    },
                    u: {
                        x: 298,
                        y: 128,
                        width: 11,
                        height: 23
                    },
                    v: {
                        x: 4,
                        y: 159,
                        width: 10,
                        height: 23
                    },
                    w: {
                        x: 22,
                        y: 159,
                        width: 15,
                        height: 23
                    },
                    x: {
                        x: 45,
                        y: 159,
                        width: 9,
                        height: 23
                    },
                    y: {
                        x: 63,
                        y: 159,
                        width: 9,
                        height: 23
                    },
                    z: {
                        x: 81,
                        y: 159,
                        width: 8,
                        height: 23
                    },
                    "{": {
                        x: 97,
                        y: 159,
                        width: 7,
                        height: 23
                    },
                    "|": {
                        x: 113,
                        y: 159,
                        width: 5,
                        height: 23
                    },
                    "}": {
                        x: 126,
                        y: 159,
                        width: 7,
                        height: 23
                    },
                    "~": {
                        x: 141,
                        y: 159,
                        width: 10,
                        height: 23
                    },
                    "": {
                        x: 159,
                        y: 159,
                        width: 10,
                        height: 23
                    },
                    "": {
                        x: 178,
                        y: 159,
                        width: 15,
                        height: 23
                    },
                    "": {
                        x: 201,
                        y: 159,
                        width: 15,
                        height: 23
                    },
                    "": {
                        x: 225,
                        y: 159,
                        width: 15,
                        height: 23
                    },
                    "": {
                        x: 249,
                        y: 159,
                        width: 15,
                        height: 23
                    },
                    "": {
                        x: 273,
                        y: 159,
                        width: 15,
                        height: 23
                    },
                    "": {
                        x: 296,
                        y: 159,
                        width: 15,
                        height: 23
                    },
                    "": {
                        x: 4,
                        y: 190,
                        width: 15,
                        height: 23
                    },
                    "": {
                        x: 27,
                        y: 190,
                        width: 15,
                        height: 23
                    },
                    "": {
                        x: 51,
                        y: 190,
                        width: 15,
                        height: 23
                    },
                    "": {
                        x: 75,
                        y: 190,
                        width: 15,
                        height: 23
                    },
                    "": {
                        x: 99,
                        y: 190,
                        width: 15,
                        height: 23
                    },
                    "": {
                        x: 122,
                        y: 190,
                        width: 15,
                        height: 23
                    },
                    "": {
                        x: 146,
                        y: 190,
                        width: 15,
                        height: 23
                    },
                    "": {
                        x: 170,
                        y: 190,
                        width: 15,
                        height: 23
                    },
                    "": {
                        x: 194,
                        y: 190,
                        width: 15,
                        height: 23
                    },
                    "": {
                        x: 217,
                        y: 190,
                        width: 15,
                        height: 23
                    },
                    "": {
                        x: 241,
                        y: 190,
                        width: 15,
                        height: 23
                    },
                    "": {
                        x: 265,
                        y: 190,
                        width: 15,
                        height: 23
                    },
                    "": {
                        x: 289,
                        y: 190,
                        width: 15,
                        height: 23
                    },
                    "": {
                        x: 4,
                        y: 221,
                        width: 15,
                        height: 23
                    },
                    "": {
                        x: 27,
                        y: 221,
                        width: 15,
                        height: 23
                    },
                    "": {
                        x: 51,
                        y: 221,
                        width: 15,
                        height: 23
                    },
                    "А": {
                        x: 75,
                        y: 221,
                        width: 15,
                        height: 23
                    },
                    "Б": {
                        x: 98,
                        y: 221,
                        width: 12,
                        height: 23
                    },
                    "В": {
                        x: 118,
                        y: 221,
                        width: 14,
                        height: 23
                    },
                    "Г": {
                        x: 140,
                        y: 221,
                        width: 12,
                        height: 23
                    },
                    "Д": {
                        x: 160,
                        y: 221,
                        width: 14,
                        height: 23
                    },
                    "Е": {
                        x: 182,
                        y: 221,
                        width: 12,
                        height: 23
                    },
                    "Ж": {
                        x: 203,
                        y: 221,
                        width: 18,
                        height: 23
                    },
                    "З": {
                        x: 230,
                        y: 221,
                        width: 10,
                        height: 23
                    },
                    "И": {
                        x: 249,
                        y: 221,
                        width: 15,
                        height: 23
                    },
                    "Й": {
                        x: 272,
                        y: 221,
                        width: 15,
                        height: 23
                    },
                    "К": {
                        x: 295,
                        y: 221,
                        width: 14,
                        height: 23
                    },
                    "Л": {
                        x: 4,
                        y: 252,
                        width: 14,
                        height: 23
                    },
                    "М": {
                        x: 26,
                        y: 252,
                        width: 18,
                        height: 23
                    },
                    "Н": {
                        x: 52,
                        y: 252,
                        width: 15,
                        height: 23
                    },
                    "О": {
                        x: 76,
                        y: 252,
                        width: 15,
                        height: 23
                    },
                    "П": {
                        x: 99,
                        y: 252,
                        width: 15,
                        height: 23
                    },
                    "Р": {
                        x: 122,
                        y: 252,
                        width: 11,
                        height: 23
                    },
                    "С": {
                        x: 142,
                        y: 252,
                        width: 14,
                        height: 23
                    },
                    "Т": {
                        x: 164,
                        y: 252,
                        width: 12,
                        height: 23
                    },
                    "У": {
                        x: 184,
                        y: 252,
                        width: 14,
                        height: 23
                    },
                    "Ф": {
                        x: 207,
                        y: 252,
                        width: 16,
                        height: 23
                    },
                    "Х": {
                        x: 232,
                        y: 252,
                        width: 15,
                        height: 23
                    },
                    "Ц": {
                        x: 255,
                        y: 252,
                        width: 15,
                        height: 23
                    },
                    "Ч": {
                        x: 278,
                        y: 252,
                        width: 13,
                        height: 23
                    },
                    "Ш": {
                        x: 4,
                        y: 283,
                        width: 21,
                        height: 23
                    },
                    "Щ": {
                        x: 33,
                        y: 283,
                        width: 21,
                        height: 23
                    },
                    "Ъ": {
                        x: 62,
                        y: 283,
                        width: 14,
                        height: 23
                    },
                    "Ы": {
                        x: 85,
                        y: 283,
                        width: 18,
                        height: 23
                    },
                    "Ь": {
                        x: 111,
                        y: 283,
                        width: 12,
                        height: 23
                    },
                    "Э": {
                        x: 131,
                        y: 283,
                        width: 13,
                        height: 23
                    },
                    "Ю": {
                        x: 153,
                        y: 283,
                        width: 21,
                        height: 23
                    },
                    "Я": {
                        x: 183,
                        y: 283,
                        width: 14,
                        height: 23
                    },
                    "а": {
                        x: 205,
                        y: 283,
                        width: 9,
                        height: 23
                    },
                    "б": {
                        x: 222,
                        y: 283,
                        width: 10,
                        height: 23
                    },
                    "в": {
                        x: 241,
                        y: 283,
                        width: 9,
                        height: 23
                    },
                    "г": {
                        x: 258,
                        y: 283,
                        width: 8,
                        height: 23
                    },
                    "д": {
                        x: 275,
                        y: 283,
                        width: 10,
                        height: 23
                    },
                    "е": {
                        x: 294,
                        y: 283,
                        width: 9,
                        height: 23
                    },
                    "ж": {
                        x: 4,
                        y: 314,
                        width: 14,
                        height: 23
                    },
                    "з": {
                        x: 26,
                        y: 314,
                        width: 8,
                        height: 23
                    },
                    "и": {
                        x: 42,
                        y: 314,
                        width: 11,
                        height: 23
                    },
                    "й": {
                        x: 62,
                        y: 314,
                        width: 11,
                        height: 23
                    },
                    "к": {
                        x: 81,
                        y: 314,
                        width: 10,
                        height: 23
                    },
                    "л": {
                        x: 99,
                        y: 314,
                        width: 10,
                        height: 23
                    },
                    "м": {
                        x: 117,
                        y: 314,
                        width: 13,
                        height: 23
                    },
                    "н": {
                        x: 139,
                        y: 314,
                        width: 11,
                        height: 23
                    },
                    "о": {
                        x: 158,
                        y: 314,
                        width: 10,
                        height: 23
                    },
                    "п": {
                        x: 176,
                        y: 314,
                        width: 11,
                        height: 23
                    },
                    "р": {
                        x: 196,
                        y: 314,
                        width: 10,
                        height: 23
                    },
                    "с": {
                        x: 214,
                        y: 314,
                        width: 9,
                        height: 23
                    },
                    "т": {
                        x: 232,
                        y: 314,
                        width: 9,
                        height: 23
                    },
                    "у": {
                        x: 249,
                        y: 314,
                        width: 10,
                        height: 23
                    },
                    "ф": {
                        x: 267,
                        y: 314,
                        width: 13,
                        height: 23
                    },
                    "х": {
                        x: 289,
                        y: 314,
                        width: 10,
                        height: 23
                    },
                    "ц": {
                        x: 4,
                        y: 345,
                        width: 11,
                        height: 23
                    },
                    "ч": {
                        x: 23,
                        y: 345,
                        width: 10,
                        height: 23
                    },
                    "ш": {
                        x: 41,
                        y: 345,
                        width: 16,
                        height: 23
                    },
                    "щ": {
                        x: 65,
                        y: 345,
                        width: 16,
                        height: 23
                    },
                    "ъ": {
                        x: 90,
                        y: 345,
                        width: 10,
                        height: 23
                    },
                    "ы": {
                        x: 108,
                        y: 345,
                        width: 14,
                        height: 23
                    },
                    "ь": {
                        x: 131,
                        y: 345,
                        width: 9,
                        height: 23
                    },
                    "э": {
                        x: 148,
                        y: 345,
                        width: 9,
                        height: 23
                    },
                    "ю": {
                        x: 165,
                        y: 345,
                        width: 15,
                        height: 23
                    },
                    "я": {
                        x: 189,
                        y: 345,
                        width: 9,
                        height: 23
                    },
                    "ѐ": {
                        x: 207,
                        y: 345,
                        width: 9,
                        height: 23
                    },
                    "ё": {
                        x: 224,
                        y: 345,
                        width: 9,
                        height: 23
                    },
                    "ђ": {
                        x: 241,
                        y: 345,
                        width: 10,
                        height: 23
                    },
                    "ѓ": {
                        x: 259,
                        y: 345,
                        width: 8,
                        height: 23
                    },
                    "є": {
                        x: 276,
                        y: 345,
                        width: 9,
                        height: 23
                    },
                    "ѕ": {
                        x: 293,
                        y: 345,
                        width: 8,
                        height: 23
                    },
                    "і": {
                        x: 309,
                        y: 345,
                        width: 5,
                        height: 23
                    },
                    "ї": {
                        x: 4,
                        y: 376,
                        width: 5,
                        height: 23
                    },
                    "ј": {
                        x: 17,
                        y: 376,
                        width: 5,
                        height: 23
                    },
                    "љ": {
                        x: 31,
                        y: 376,
                        width: 15,
                        height: 23
                    },
                    "њ": {
                        x: 54,
                        y: 376,
                        width: 15,
                        height: 23
                    },
                    "ћ": {
                        x: 78,
                        y: 376,
                        width: 10,
                        height: 23
                    }
                },
                width: 320,
                height: 403
            },
            id: 22
        } ],
        TileMap: [ {
            id: 52,
            width: 50,
            height: 50,
            type: "TileMap",
            spriteSheet: {
                id: 57,
                type: "SpriteSheet"
            },
            data: [ [], null, null, [ null, null, null, null, 2, null, null ], [ null, null ], [ 1, null, 3, null, null, 1, 1, 1, 1, 1, 1, 1, 1, 1 ], null, [ null, 1, null, 1 ] ]
        } ]
    };
}, function(t, e, i) {
    "use strict";
    e.__esModule = true;
    e.PlatformBehaviour = e.MainSceneBehaviour = e.Ground1Behaviour = e.DudeBehaviour = undefined;
    var r = i(16);
    var n = i(17);
    var o = i(18);
    var a = i(19);
    e.DudeBehaviour = r.DudeBehaviour;
    e.Ground1Behaviour = n.Ground1Behaviour;
    e.MainSceneBehaviour = o.MainSceneBehaviour;
    e.PlatformBehaviour = a.PlatformBehaviour;
}, function(t, e, i) {
    "use strict";
    e.__esModule = true;
    function r(t, e) {
        if (!(t instanceof e)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    var n = e.DudeBehaviour = function() {
        function t() {
            r(this, t);
        }
        t.prototype.onCreate = function t() {
            this.game.camera.followTo(this.gameObject);
        };
        t.prototype.onUpdate = function t() {
            if (this.game.keyboard.isJustPressed(this.game.keyboard.KEY.UP) || this.game.keyboard.isJustPressed(this.game.keyboard.KEY.GAME_PAD_1)) {
                if (this.gameObject.rigidBody.onFloor) this.gameObject.rigidBody.vel.addXY(0, -340);
            }
            if (this.game.keyboard.isPressed(this.game.keyboard.KEY.A) || this.game.keyboard.isPressed(this.game.keyboard.KEY.GAME_PAD_5)) {
                this.gameObject.rigidBody.vel.addXY(0, -50);
            }
        };
        t.prototype.onDestroy = function t() {};
        return t;
    }();
}, function(t, e, i) {
    "use strict";
    e.__esModule = true;
    function r(t, e) {
        if (!(t instanceof e)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    var n = e.Ground1Behaviour = function() {
        function t() {
            r(this, t);
        }
        t.prototype.onCreate = function t() {};
        t.prototype.onUpdate = function t() {};
        t.prototype.onDestroy = function t() {};
        return t;
    }();
}, function(t, e, i) {
    "use strict";
    e.__esModule = true;
    function r(t, e) {
        if (!(t instanceof e)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    var n = e.MainSceneBehaviour = function() {
        function t() {
            r(this, t);
        }
        t.prototype.onCreate = function t() {
            var e = this;
            this.x = 0;
            this.y = 0;
            this.color = [ 1, 0, 0, 1 ];
            this.points = [];
            this.scene.on("mouseMove", function(t) {});
            this.scene.on("mouseMove", function(t) {
                e.x = t.screenX;
                e.y = t.screenY;
                e.points.push({
                    x: t.screenX,
                    y: t.screenY
                });
            });
        };
        t.prototype.onUpdate = function t() {
            this.points.forEach(function(t) {});
        };
        t.prototype.onDestroy = function t() {};
        return t;
    }();
}, function(t, e, i) {
    "use strict";
    e.__esModule = true;
    function r(t, e) {
        if (!(t instanceof e)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    var n = e.PlatformBehaviour = function() {
        function t() {
            r(this, t);
        }
        t.prototype.onCreate = function t() {
            this.gameObject.rigidBody.static = true;
        };
        t.prototype.onUpdate = function t() {};
        t.prototype.onDestroy = function t() {};
        return t;
    }();
}, function(t, e, i) {
    "use strict";
    e.__esModule = true;
    e.Control2Dir = e.Control4Dir = e.Draggable = undefined;
    var r = i(23);
    var n = u(r);
    var o = i(22);
    var a = u(o);
    var s = i(21);
    var h = u(s);
    function u(t) {
        return t && t.__esModule ? t : {
            default: t
        };
    }
    e.Draggable = n.default;
    e.Control4Dir = a.default;
    e.Control2Dir = h.default;
}, function(t, e, i) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var r = i(24);
    var n = o(r);
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
    var u = function(t) {
        h(e, t);
        function e(i) {
            a(this, e);
            return s(this, t.call(this, i));
        }
        e.prototype.manage = function e(i, r) {
            t.prototype.manage.call(this, i, r);
        };
        e.prototype.onUpdate = function t() {
            var e = this.game.keyboard;
            var i = this.parameters;
            var r = this.gameObject;
            if (e.isPressed(e.KEY.LEFT) || e.isPressed(e.KEY.GAME_PAD_AXIS_LEFT)) {
                r.rigidBody.vel.x = -i.velocity;
                this.go("Left");
            }
            if (e.isPressed(e.KEY.RIGHT) || e.isPressed(e.KEY.GAME_PAD_AXIS_RIGHT)) {
                r.rigidBody.vel.x = i.velocity;
                this.go("Right");
            }
            if (e.isJustReleased(e.KEY.LEFT) || e.isJustReleased(e.KEY.GAME_PAD_AXIS_LEFT)) {
                this.stop();
            } else if (e.isJustReleased(e.KEY.RIGHT) || e.isJustReleased(e.KEY.GAME_PAD_AXIS_RIGHT)) {
                this.stop();
            }
        };
        return e;
    }(n.default);
    e.default = u;
}, function(t, e, i) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var r = i(25);
    var n = o(r);
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
    var u = function(t) {
        h(e, t);
        function e(i) {
            a(this, e);
            return s(this, t.call(this, i));
        }
        e.prototype.manage = function e(i, r) {
            t.prototype.manage.call(this, i, r);
        };
        e.prototype.onUpdate = function t() {
            var e = this.game.keyboard;
            var i = this.parameters;
            var r = this.gameObject;
            if (e.isPressed(e.KEY.UP) || e.isPressed(e.KEY.GAME_PAD_AXIS_UP)) {
                r.rigidBody.vel.y = -i.velocity;
                this.go("Up");
            }
            if (e.isPressed(e.KEY.DOWN) || e.isPressed(e.KEY.GAME_PAD_AXIS_DOWN)) {
                r.rigidBody.vel.y = i.velocity;
                this.go("Down");
            }
            if (e.isPressed(e.KEY.LEFT) || e.isPressed(e.KEY.GAME_PAD_AXIS_LEFT)) {
                r.rigidBody.vel.x = -i.velocity;
                this.go("Left");
            }
            if (e.isPressed(e.KEY.RIGHT) || e.isPressed(e.KEY.GAME_PAD_AXIS_RIGHT)) {
                r.rigidBody.vel.x = i.velocity;
                this.go("Right");
            }
            if (e.isJustReleased(e.KEY.LEFT) || e.isPressed(e.KEY.GAME_PAD_AXIS_LEFT)) {
                this.stop();
            } else if (e.isJustReleased(e.KEY.RIGHT) || e.isPressed(e.KEY.GAME_PAD_AXIS_RIGHT)) {
                this.stop();
            } else if (e.isJustReleased(e.KEY.UP) || e.isPressed(e.KEY.GAME_PAD_AXIS_UP)) {
                this.stop();
            } else if (e.isJustReleased(e.KEY.DOWN) || e.isPressed(e.KEY.GAME_PAD_AXIS_DOWN)) {
                this.stop();
            }
        };
        return e;
    }(n.default);
    e.default = u;
}, function(t, e, i) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var r = i(2);
    var n = o(r);
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
    var u = function(t) {
        h(e, t);
        e._getEventId = function t(e) {
            return e.id || 1;
        };
        function e(i) {
            a(this, e);
            var r = s(this, t.call(this));
            r.game = i;
            r.points = {};
            return r;
        }
        e.prototype.manage = function t(i, r) {
            var n = this;
            i.on("click", function(t) {
                n.points[e._getEventId(t)] = {
                    mX: t.objectX,
                    mY: t.objectY,
                    target: i,
                    preventDefault: function t() {
                        this.defaultPrevented = true;
                    }
                };
            });
            var o = this.game.getCurrScene();
            o.on("mouseDown", function(t) {
                var i = e._getEventId(t);
                var r = n.points[i];
                if (!r) return;
                r.dragStartX = r.target.pos.x;
                r.dragStartY = r.target.pos.y;
            });
            o.on("mouseMove", function(t) {
                var r = e._getEventId(t);
                var o = n.points[r];
                if (!o) return;
                if (!o.dragStart) {
                    o.dragStart = true;
                    o.target.trigger("dragStart", o);
                    if (o.defaultPrevented) {
                        delete n.points[r];
                        return;
                    }
                }
                i.pos.x = t.screenX - o.mX;
                i.pos.y = t.screenY - o.mY;
            });
            o.on("mouseUp", function(t) {
                var r = e._getEventId(t);
                var o = n.points[r];
                if (!o) return;
                if (o.dragStart) {
                    o.x = i.pos.x;
                    o.y = i.pos.y;
                    o.target.trigger("dragStop", o);
                }
                delete n.points[r];
            });
        };
        return e;
    }(n.default);
    e.default = u;
}, function(t, e, i) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var r, n;
    var o = i(3);
    var a = s(o);
    function s(t) {
        return t && t.__esModule ? t : {
            default: t
        };
    }
    function h(t, e) {
        if (!(t instanceof e)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    function u(t, e) {
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
    var c = (n = r = function(t) {
        f(e, t);
        function e(i) {
            h(this, e);
            return u(this, t.call(this, i));
        }
        e.prototype.manage = function i(r, n) {
            t.prototype.manage.call(this, r, n, e.DIRS);
        };
        e.prototype.stop = function e() {
            t.prototype.stop.call(this);
            this.gameObject.rigidBody.vel.x = 0;
        };
        return e;
    }(a.default), r.DIRS = [ "Left", "Right" ], n);
    e.default = c;
}, function(t, e, i) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var r, n;
    var o = i(3);
    var a = s(o);
    function s(t) {
        return t && t.__esModule ? t : {
            default: t
        };
    }
    function h(t, e) {
        if (!(t instanceof e)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    function u(t, e) {
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
    var c = (n = r = function(t) {
        f(e, t);
        function e(i) {
            h(this, e);
            return u(this, t.call(this, i));
        }
        e.prototype.manage = function i(r, n) {
            t.prototype.manage.call(this, r, n, e.DIRS);
        };
        e.prototype.stop = function e() {
            t.prototype.stop.call(this);
            this.gameObject.rigidBody.vel.x = 0;
            this.gameObject.rigidBody.vel.y = 0;
        };
        return e;
    }(a.default), r.DIRS = [ "Left", "Right", "Up", "Down" ], n);
    e.default = c;
}, function(t, e, i) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var r = i(5);
    var n = o(r);
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
            this.objFollowTo = null;
            this.scene = null;
            this.pos = {
                x: 0,
                y: 0
            };
            this.scale = {
                x: 1,
                y: 1
            };
            this.lastToleranceTime = 0;
            this.TOLERANCE_TIME = 2e3;
            this.game = e;
        }
        t.prototype.followTo = function t(e) {
            if (1 && !e) throw "Camera:followTo(gameObject) - gameObject not provided";
            this.objFollowTo = e;
            this.scene = this.game._currentScene;
            if (this.scene.tileMap.spriteSheet) {
                this.sceneWidth = this.scene.tileMap.spriteSheet._frameWidth * this.scene.tileMap.width;
                this.sceneHeight = this.scene.tileMap.spriteSheet._frameHeight * this.scene.tileMap.height;
            } else {
                this.sceneWidth = this.game.getCurrScene().width || this.game.width;
                this.sceneHeight = this.game.getCurrScene().height || this.game.height;
            }
            this.cameraTween = new n.default({
                target: this.pos,
                ease: "easeInQuad",
                to: {
                    x: this.pos.x,
                    y: this.pos.y
                },
                time: this.TOLERANCE_TIME,
                progress: function t(e) {}
            });
        };
        t.prototype.update = function t(e, i) {
            var r = this.objFollowTo;
            if (!r) return;
            var n = this.scene.tileMap.spriteSheet ? this.scene.tileMap.spriteSheet._frameWidth : 0;
            var o = this.scene.tileMap.spriteSheet ? this.scene.tileMap.spriteSheet._frameHeight : 0;
            var a = this.game.width;
            var s = this.game.height;
            var h = a / 2;
            var u = s / 2;
            var f = r.pos.x - h;
            var c = r.pos.y - u;
            if (r._lastDirection === "Right") f += 400;
            if (r._lastDirection === "Left") f -= 400;
            if (f < 0) f = 0;
            if (c < 0) c = 0;
            if (f > this.sceneWidth - a + n) f = this.sceneWidth - a + n;
            if (c > this.sceneHeight - s + o) c = this.sceneHeight - s + o;
            if (this.TOLERANCE_TIME === 0) {
                this.pos.x = f;
                this.pos.y = c;
            } else if (e - this.lastToleranceTime > this.TOLERANCE_TIME) {
                this.lastToleranceTime = e;
                this.cameraTween.reuse({
                    to: {
                        x: f,
                        y: c
                    }
                });
            }
            this.cameraTween.update(e);
        };
        t.prototype.getRect = function t() {
            return {
                x: this.pos.x,
                y: this.pos.y,
                width: this.game.width,
                height: this.game.height
            };
        };
        return t;
    }();
    e.default = s;
}, function(t, e, i) {
    "use strict";
    e.__esModule = true;
    function r(t, e) {
        if (!(t instanceof e)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    if (true) {
        window.addEventListener("gamepadconnected", function(t) {
            console.log("Gamepad connected at index %d: %s. %d buttons, %d axes.", t.gamepad.index, t.gamepad.id, t.gamepad.buttons.length, t.gamepad.axes.length);
        });
        window.addEventListener("gamepaddisconnected", function(t) {
            console.log("Gamepad disconnected from index %d: %s", t.gamepad.index, t.gamepad.id);
        });
    }
    var n = function() {
        function t(e) {
            r(this, t);
            this.game = e;
        }
        t.prototype.update = function t() {
            this.gamepads = navigator.getGamepads && navigator.getGamepads() || navigator.webkitGetGamepads && navigator.webkitGetGamepads() || navigator.webkitGamepads || navigator.mozGamepads || navigator.msGamepads || navigator.gamepads || [];
            for (var e = 0, i = this.gamepads.length; e < i; e++) {
                var r = this.gamepads[e];
                if (!r) continue;
                var n = r.buttons.length;
                if (n > 7) n = 7;
                for (var o = 0; o < n; o++) {
                    var a = r.buttons[o];
                    if (a.pressed) {
                        this.game.keyboard.press(o);
                    } else {
                        this.game.keyboard.release(o);
                    }
                }
                if (r.axes[0] === 0) continue;
                if (r.axes[1] === 0) continue;
                var s = ~~r.axes[0];
                var h = ~~r.axes[1];
                if (s === 1) {
                    this.game.keyboard.press(this.game.keyboard.KEY.GAME_PAD_AXIS_RIGHT);
                } else {
                    this.game.keyboard.release(this.game.keyboard.KEY.GAME_PAD_AXIS_RIGHT);
                }
                if (s === -1) {
                    this.game.keyboard.press(this.game.keyboard.KEY.GAME_PAD_AXIS_LEFT);
                } else {
                    this.game.keyboard.release(this.game.keyboard.KEY.GAME_PAD_AXIS_LEFT);
                }
                if (h === 1) {
                    this.game.keyboard.press(this.game.keyboard.KEY.GAME_PAD_AXIS_DOWN);
                } else {
                    this.game.keyboard.release(this.game.keyboard.KEY.GAME_PAD_AXIS_DOWN);
                }
                if (h === -1) {
                    this.game.keyboard.press(this.game.keyboard.KEY.GAME_PAD_AXIS_UP);
                } else {
                    this.game.keyboard.release(this.game.keyboard.KEY.GAME_PAD_AXIS_UP);
                }
            }
        };
        return t;
    }();
    e.default = n;
}, function(t, e, i) {
    "use strict";
    e.__esModule = true;
    function r(t, e) {
        if (!(t instanceof e)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    var n = 2;
    var o = 1;
    var a = 0;
    var s = -1;
    var h = function() {
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
                DOWN: 40,
                GAME_PAD_1: 0,
                GAME_PAD_2: 1,
                GAME_PAD_3: 2,
                GAME_PAD_4: 3,
                GAME_PAD_5: 4,
                GAME_PAD_6: 5,
                GAME_PAD_7: 6,
                GAME_PAD_8: 7,
                GAME_PAD_AXIS_LEFT: 8,
                GAME_PAD_AXIS_RIGHT: 9,
                GAME_PAD_AXIS_UP: 10,
                GAME_PAD_AXIS_DOWN: 11
            };
            this.buffer = {};
            this.game = e;
        }
        t.prototype.press = function t(e) {
            if (this.isPressed(e)) return;
            console.log("pressed", e);
            this.buffer[e] = n;
        };
        t.prototype.release = function t(e) {
            if (this.isReleased(e)) return;
            this.buffer[e] = a;
        };
        t.prototype.isPressed = function t(e) {
            return this.buffer[e] >= o;
        };
        t.prototype.isJustPressed = function t(e) {
            return this.buffer[e] === n;
        };
        t.prototype.isReleased = function t(e) {
            if (this.buffer[e] === undefined) return true;
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
                if (e.buffer[t] === n) {
                    e.buffer[t] = o;
                }
            });
        };
        t.prototype.listenTo = function t() {
            var e = this;
            window.addEventListener("keydown", function(t) {
                var i = t.keyCode;
                e.press(i);
            });
            window.addEventListener("keyup", function(t) {
                var i = t.keyCode;
                e.release(i);
            });
        };
        return t;
    }();
    e.default = h;
}, function(t, e, i) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var r = i(1);
    var n = o(r);
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
            var i = this;
            e.ontouchstart = function(t) {
                var e = t.touches.length;
                while (e--) {
                    i.resolveClick(t.touches[e]);
                }
            };
            e.onmousedown = function(t) {
                t.button === 0 && i.resolveClick(t);
            };
            e.ontouchend = e.ontouchcancel = function(t) {
                var e = t.changedTouches.length;
                while (e--) {
                    i.resolveMouseUp(t.changedTouches[e]);
                }
            };
            e.onmouseup = function(t) {
                i.resolveMouseUp(t);
            };
            e.ontouchmove = function(t) {
                var e = t.touches.length;
                while (e--) {
                    i.resolveMouseMove(t.touches[e], true);
                }
            };
            e.onmousemove = function(t) {
                var e = t.buttons === 1;
                i.resolveMouseMove(t, e);
            };
            e.ondblclick = function(t) {
                i.resolveDoubleClick(t);
            };
        };
        t.prototype.resolveScreenPoint = function t(e) {
            return {
                x: ~~((e.clientX - this.game.pos.x) / this.game.scale.x / this.game.camera.scale.x) + this.game.camera.pos.x,
                y: ~~((e.clientY - this.game.pos.y) / this.game.scale.y / this.game.camera.scale.y) + this.game.camera.pos.y,
                id: e.identifier || 0
            };
        };
        t.prototype.triggerEvent = function t(e, i, r) {
            var o = this.game;
            var a = o.getCurrScene();
            if (!a) return;
            var s = this.resolveScreenPoint(e);
            t: for (var h = 0; h < a.layers.length; h++) {
                var u = a.layers[a.layers.length - 1 - h];
                for (var f = 0; f < u.gameObjects.length; f++) {
                    var c = u.gameObjects[f];
                    if (n.default.isPointInRect(s, c.getRect())) {
                        c.trigger(i, {
                            screenX: s.x,
                            screenY: s.y,
                            objectX: s.x - c.pos.x,
                            objectY: s.y - c.pos.y,
                            id: s.id,
                            isMouseDown: r
                        });
                        break t;
                    }
                }
            }
            a.trigger(i, {
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
        t.prototype.resolveMouseMove = function t(e, i) {
            if (1 && window.canceled) return;
            var r = this.triggerEvent(e, "mouseMove", i);
            if (!r) return;
            var n = this.objectsCaptured[r.id];
            if (n && n !== r.object) {
                n.trigger("mouseLeave");
                delete this.objectsCaptured[r.id];
            }
            if (r.object && n !== r.object) {
                r.object.trigger("mouseEnter");
                this.objectsCaptured[r.id] = r.object;
            }
        };
        t.prototype.resolveMouseUp = function t(e) {
            if (1 && window.canceled) return;
            var i = this.triggerEvent(e, "mouseUp");
            if (!i) return;
            var r = this.objectsCaptured[i.id];
            if (!r) return;
            r.trigger("mouseUp");
            delete this.objectsCaptured[i.id];
        };
        t.prototype.resolveDoubleClick = function t(e) {
            if (1 && window.canceled) return;
            var i = this.triggerEvent(e, "doubleClick");
            if (!i) return;
            delete this.objectsCaptured[i.id];
        };
        return t;
    }();
    e.default = s;
}, function(t, e, i) {
    "use strict";
    e.__esModule = true;
    function r(t, e) {
        if (!(t instanceof e)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    var n = function() {
        function t() {
            r(this, t);
            this.events = {};
        }
        t.prototype._on = function t(e, i) {
            this.events[e] = this.events[e] || [];
            this.events[e].push(i);
        };
        t.prototype.on = function t(e, i) {
            if (typeof e === "string") {
                this._on(e, i);
            } else if (e.splice) {
                e.forEach(function(t) {
                    this._on(t, i);
                });
            }
        };
        t.prototype.trigger = function t(e, i) {
            var r = this.events[e];
            if (!r) return;
            var n = r.length;
            while (n--) {
                r[n](i);
            }
        };
        return t;
    }();
    e.default = n;
}, function(t, e, i) {
    "use strict";
    e.__esModule = true;
    function r(t, e) {
        if (!(t instanceof e)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    var n = function() {
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
        t.prototype.addTask = function t(e, i) {
            this.tasks.push(e);
            this.tasksProgressById[i] = 0;
        };
        t.prototype.progressTask = function t(e, i) {
            this.tasksProgressById[e] = i;
            this.onProgress && this.onProgress(this.calcProgress());
        };
        t.prototype.resolveTask = function t(e) {
            this.tasksResolved++;
            this.tasksProgressById[e] = 1;
            if (this.tasks.length === this.tasksResolved) {
                this.onProgress && this.onProgress(1);
                if (this.onResolved) this.onResolved();
            } else {
                this.onProgress && this.onProgress(this.calcProgress());
            }
        };
        t.prototype.start = function t() {
            if (this.size() === 0) this.onResolved();
            this.tasks.forEach(function(t) {
                t && t();
            });
        };
        return t;
    }();
    e.default = n;
}, function(t, e, i) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var r = i(39);
    var n = s(r);
    var o = i(1);
    var a = s(o);
    function s(t) {
        return t && t.__esModule ? t : {
            default: t
        };
    }
    function h(t, e) {
        if (!(t instanceof e)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    var u = function() {
        function t(e) {
            h(this, t);
            this.vel = new n.default();
            this.game = e.game;
            this.gameObject = e;
        }
        t.prototype.update = function t(e, i) {
            if (!this.gameObject.rigidBody.static) {
                var r = this.vel.x * i / 1e3;
                var n = this.vel.y * i / 1e3;
                var o = this.gameObject.pos.y + n;
                this.game.collider.moveBy(this.gameObject, r, n);
                this.gameObject.rigidBody.onFloor = o > this.gameObject.pos.y;
                if (o !== this.gameObject.pos.y) this.vel.y = 0;
                this.vel.y += this.game.gravityConstant * i / 1e3;
            }
        };
        return t;
    }();
    e.default = u;
}, function(t, e, i) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var r = i(1);
    function n(t, e) {
        if (!(t instanceof e)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    var o = function() {
        function t(e) {
            n(this, t);
            this.game = e;
        }
        t.prototype.moveBy = function t(e, i, n) {
            var o = this.game.getCurrScene().getAllGameObjects().concat(this.game._currentScene.tileMap.getTilesAtRect(e.getRect()));
            var a = e.getRect();
            a.x += i;
            a.y += n;
            var s = false, h = false;
            for (var u = 0, f = o.length; u < f; u++) {
                var c = o[u];
                var l = c.getRect();
                if (e !== o[u] && (0, r.overlapTest)(a, l)) {
                    var d = a.bottom - l.y;
                    var p = l.bottom - a.y;
                    var y = a.x + a.width - l.x;
                    var g = l.right - a.x;
                    var m = Math.min(d, p, y, g);
                    if (d === m) {
                        e.pos.y = l.y - a.height;
                        h = true;
                    } else if (p === m) {
                        e.pos.y = l.bottom;
                        h = true;
                    } else if (y === m) {
                        e.pos.x = l.x - a.width;
                        s = true;
                    } else if (g === m) {
                        e.pos.x = l.x + l.width;
                        s = true;
                    }
                }
            }
            if (!s) e.pos.x += i;
            if (!h) e.pos.y += n;
        };
        t.prototype.moveTo = function t(e, i, n) {
            var o = e.getRect();
            var a = false;
            if (e.rigidBody) {
                this.game.getCurrScene().getAllGameObjects().concat(this.game._currentScene.tileMap.getTilesAtRect(o)).some(function(t) {
                    if ((0, r.overlapTest)(o, t.getRect())) {
                        a = true;
                        return true;
                    }
                });
            }
            if (a) return;
            e.pos.x = i;
            e.pos.y = n;
        };
        return t;
    }();
    e.default = o;
}, function(t, e, i) {
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
            var i = e.length >>> 0;
            var r = arguments[1];
            var n = void 0;
            for (var o = 0; o < i; o++) {
                n = e[o];
                if (t.call(r, n, o, e)) {
                    return n;
                }
            }
            return undefined;
        };
    }
}, function(t, e, i) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var r = i(9);
    var n = o(r);
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
            this.renderableCache = {};
            this.container = null;
            this.debugTextField = null;
            this.game = e;
        }
        t.prototype.onResize = function t() {
            var e = this.container.height / this.container.width;
            var i = window.innerHeight / window.innerWidth;
            var r = void 0;
            var n = void 0;
            if (i < e) {
                n = window.innerHeight;
                r = n / e;
            } else {
                r = window.innerWidth;
                n = r * e;
            }
            this.game.scale.x = r / this.game.width;
            this.game.scale.y = n / this.game.height;
            this.game.pos.x = (window.innerWidth - r) / 2;
            this.game.pos.y = (window.innerHeight - n) / 2;
            this.container.style.width = r + "px";
            this.container.style.height = n + "px";
        };
        t.prototype.beginFrameBuffer = function t() {};
        t.prototype.flipFrameBuffer = function t() {
            if (true) {
                if (this.debugTextField) this.debugTextField._render();
            }
        };
        t.prototype.registerResize = function t() {
            var e = this;
            this.onResize();
            window.addEventListener("resize", function() {
                e.onResize();
            });
        };
        t.prototype.getError = function t() {
            return 0;
        };
        t.prototype.log = function t(e) {
            if (false) return;
            var i = this.debugTextField;
            if (e === undefined) e = "undefined";
            if (e === null) e = "null";
            if (e.toJSON) {
                e = JSON.stringify(e.toJSON(), null, 4);
            } else {
                try {
                    e = JSON.stringify(e);
                } catch (t) {}
            }
            e = e.toString();
            if (!i) {
                i = new n.default(this.game);
                i.name = "defaultName";
                i.revalidate();
                this.debugTextField = i;
            }
            i.pos.x = 10 + this.game.camera.pos.x;
            i.pos.y = 10 + this.game.camera.pos.y;
            i.setText(e);
        };
        t.prototype.loadTextureInfo = function t(e, i) {};
        t.prototype.getTextureInfo = function t(e) {};
        return t;
    }();
    e.default = s;
}, function(t, e, i) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var r = i(35);
    var n = o(r);
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
    var u = function(t) {
        h(e, t);
        function e(i) {
            a(this, e);
            var r = s(this, t.call(this, i));
            var n = document.createElement("canvas");
            r.ctx = n.getContext("2d");
            document.body.appendChild(n);
            n.setAttribute("width", i.width);
            n.setAttribute("height", i.height);
            r.container = n;
            r.registerResize();
            return r;
        }
        e.prototype.draw = function t(e) {
            var i = this.ctx;
            i.save();
            i.translate(e.pos.x + e.width / 2, e.pos.y + e.height / 2);
            i.scale(e.scale.x, e.scale.y);
            i.rotate(e.angle);
            i.translate(-e.width / 2, -e.height / 2);
            i.globalAlpha = e.alpha;
            i.globalCompositeOperation = e.blendMode || "source-over";
            i.drawImage(this.renderableCache[e.spriteSheet.resourcePath], e._sprPosX, e._sprPosY, e.width, e.height, 0, 0, e.width, e.height);
            i.restore();
        };
        e.prototype.drawImage = function t(e, i, r, n, o, a, s) {
            this.ctx.drawImage(this.renderableCache[e], i, r, n, o, a, s, n, o);
        };
        e.prototype.fillRect = function t(e, i, r, n, o) {
            this.ctx.fillStyle = o;
            this.ctx.fillRect(e, i, r, n);
        };
        e.prototype.drawRect = function t(e, i, r, n, o) {
            this.ctx.fillStyle = o;
            this.ctx.strokeRect(e, i, r, n);
        };
        e.prototype.drawLine = function t(e, i, r, n, o) {
            this.ctx.fillStyle = o;
            this.ctx.beginPath();
            this.ctx.moveTo(e, i);
            this.ctx.lineTo(r, n);
            this.ctx.stroke();
        };
        e.prototype.fillCircle = function t(e, i, r, n) {
            var o = this.ctx;
            o.beginPath();
            o.arc(e, i, r, 0, 2 * Math.PI, false);
            o.fillStyle = n;
            o.strokeStyle = n;
            o.fill();
            o.stroke();
            o.closePath();
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
        e.prototype.scale = function t(e, i) {
            this.ctx.scale(e, i);
        };
        e.prototype.rotateZ = function t(e) {
            this.ctx.rotateZ(e);
        };
        e.prototype.rotateY = function t(e) {
            throw "rotateY not supported by canvasRenderer";
        };
        e.prototype.translate = function t(e, i) {
            this.ctx.translate(e, i);
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
        e.prototype.loadTextureInfo = function t(e, i) {
            var r = this;
            var n = new Image();
            n.src = e;
            n.onload = function() {
                var t = document.createElement("canvas");
                t.setAttribute("width", n.width);
                t.setAttribute("height", n.height);
                var o = t.getContext("2d");
                o.drawImage(n, 0, 0);
                r.renderableCache[e] = t;
                i();
            };
        };
        return e;
    }(n.default);
    e.default = u;
}, function(t, e, i) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var r = i(36);
    var n = o(r);
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
            return new n.default(e);
        };
        return t;
    }();
    e.default = s;
}, function(t, e, i) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var r = i(40);
    var n = o(r);
    function o(t) {
        if (t && t.__esModule) {
            return t;
        } else {
            var e = {};
            if (t != null) {
                for (var i in t) {
                    if (Object.prototype.hasOwnProperty.call(t, i)) e[i] = t[i];
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
        t.prototype.addDescription = function t(e, i) {
            if (!this.descriptions[i]) this.descriptions[i] = [];
            this.descriptions[i].push(e);
        };
        t.prototype.setDescriptions = function t(e) {
            var i = this;
            Object.keys(e).forEach(function(t) {
                e[t].forEach(function(e) {
                    i.addDescription(e, t);
                });
            });
        };
        t.prototype.getObject = function t(e, i) {
            var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
            if (1 && !i) throw "repository.getObject: type not specified";
            if (1 && e == null) {
                console.trace("id is null");
                throw "::getObject() id not specified for type " + i;
            }
            var o = n[i];
            if (1 && !o) {
                throw "::getObject() undeclared object type " + i;
            }
            if (1 && !this.descriptions[i]) throw "not found description for type: " + i;
            var a = this.descriptions[i].find(function(t) {
                return t.id == e;
            });
            if (!a) {
                throw 'can not find object "' + i + '" with id ' + e;
            }
            if (r || !this.cache[a[e]]) this.cache[e] = new o(this._game).fromJSON(a);
            return this.cache[e];
        };
        t.prototype.getFirst = function t(e) {
            var i = this.getArray(e);
            if (!i.length) return null;
            return i[0];
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
        t.prototype.updateObject = function t(e, i) {
            var r = e.toJSON(i);
            var n = this.descriptions[e.type].findIndex(function(t) {
                return t.id == e.id;
            });
            this.descriptions[e.type][n] = r;
            var o = this.getObject(e.id, e.type, true);
            if (o) o.fromJSON(r);
        };
        t.prototype.removeObject = function t(e) {
            if (1 && !this.arrays[e.type]) this.arrays[e.type] = [];
            var i = this.arrays[e.type].findIndex(function(t) {
                return t.id === e.id;
            });
            this.arrays[e.type].splice(i, 1);
            if (!this.descriptions[e.type]) this.descriptions[e.type] = [];
            i = this.descriptions[e.type].findIndex(function(t) {
                return t.id === e.id;
            });
            this.descriptions[e.type].splice(i, 1);
            delete this.cache[e.id];
        };
        t.prototype.getArray = function t(e) {
            var i = this;
            if (1 && !n[e]) throw 'getArray: unregistered type "' + e + '"';
            if (this.arrays[e]) return this.arrays[e];
            var r = [];
            if (!this.descriptions[e]) this.descriptions[e] = [];
            this.descriptions[e].forEach(function(t) {
                if (1 && (t.id === null || t.id === undefined)) {
                    console.error(t);
                    throw "object id must me specified";
                }
                r.push(i.getObject(t.id, e));
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
}, function(t, e, i) {
    "use strict";
    e.__esModule = true;
    function r(t, e) {
        if (!(t instanceof e)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    var n = function() {
        function t() {
            var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
            var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            r(this, t);
            this.x = e;
            this.y = i;
        }
        t.prototype.dotProduct = function t(e) {
            return this.x * e.x + this.y * e.y;
        };
        t.prototype.crossProduct = function t(e) {
            return this.x * e.y - this.y * e.x;
        };
        t.prototype.setXY = function t(e, i) {
            this.x = e;
            this.y = i;
        };
        t.prototype.addXY = function t(e, i) {
            this.x += e;
            this.y += i;
        };
        t.prototype.multToScalar = function e(i) {
            var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
            if (r) return new t(this.x * i, this.y * i);
            this.x *= i;
            this.y *= i;
            return this;
        };
        t.prototype.divByScalar = function t(e) {
            var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
            return this.multToScalar(1 / e, i);
        };
        t.prototype.plus = function e(i) {
            var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            if (!r) return new t(this.x + i.x, this.y + i.y);
            this.x += i.x;
            this.y += i.y;
            return this;
        };
        t.prototype.minus = function e(i) {
            var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            if (!r) return new t(this.x - i.x, this.y - i.y);
            this.x -= i.x;
            this.y -= i.y;
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
            var i = this.getAngle();
            this.x = Math.cos(i) * e;
            this.y = Math.sin(i) * e;
        };
        t.prototype.getAngle = function t() {
            return Math.atan2(this.y, this.x);
        };
        t.prototype.getAngleBetween = function t(e) {
            return Math.acos((this.x * e.x + this.y * e.y) / this.getLength() * e.getLength());
        };
        t.prototype.setAngle = function t(e) {
            var i = this.getLength();
            this.x = Math.cos(e) * i;
            this.y = Math.sin(e) * i;
        };
        t.prototype.clone = function e() {
            return new t(this.x, this.y);
        };
        t.angleBetween = function t(e, i) {
            e = e.clone().normalize();
            i = i.clone().normalize();
            return Math.acos(e.dotProduct(i));
        };
        t.normalBetween = function t(e, i) {
            var r = e.minus(i);
            return r.normalize();
        };
        t.distance = function e(i, r) {
            return Math.sqrt(t.distanceSquared(i, r));
        };
        t.distanceSquared = function t(e, i) {
            return (e.x - i.x) * (e.x - i.x) + (e.y - i.y) * (e.y - i.y);
        };
        return t;
    }();
    e.default = n;
}, function(t, e, i) {
    "use strict";
    e.__esModule = true;
    e.TileMap = e.TextField = e.Layer = e.Font = e.Sound = e.Scene = e.ParticleSystem = e.CommonBehaviour = e.GameObject = e.GameObjectProto = e.SpriteSheet = e.FrameAnimation = undefined;
    var r = i(43);
    var n = T(r);
    var o = i(49);
    var a = T(o);
    var s = i(7);
    var h = T(s);
    var u = i(44);
    var f = T(u);
    var c = i(41);
    var l = T(c);
    var d = i(46);
    var p = T(d);
    var y = i(47);
    var g = T(y);
    var m = i(48);
    var v = T(m);
    var w = i(42);
    var _ = T(w);
    var b = i(45);
    var x = T(b);
    var O = i(9);
    var j = T(O);
    var E = i(8);
    var S = T(E);
    function T(t) {
        return t && t.__esModule ? t : {
            default: t
        };
    }
    e.FrameAnimation = n.default;
    e.SpriteSheet = a.default;
    e.GameObjectProto = h.default;
    e.GameObject = f.default;
    e.CommonBehaviour = l.default;
    e.ParticleSystem = p.default;
    e.Scene = g.default;
    e.Sound = v.default;
    e.Font = _.default;
    e.Layer = x.default;
    e.TextField = j.default;
    e.TileMap = S.default;
}, function(t, e, i) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var r = i(0);
    var n = o(r);
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
    var u = function(t) {
        h(e, t);
        function e(i) {
            a(this, e);
            var r = s(this, t.call(this, i));
            r.type = "CommonBehaviour";
            r.parameters = [];
            r.description = null;
            return r;
        }
        return e;
    }(n.default);
    e.default = u;
}, function(t, e, i) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var r = i(0);
    var n = o(r);
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
    var u = function(t) {
        h(e, t);
        function e(i) {
            a(this, e);
            var r = s(this, t.call(this, i));
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
    }(n.default);
    e.default = u;
}, function(t, e, i) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var r = i(0);
    var n = o(r);
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
    var u = function(t) {
        h(e, t);
        function e(i) {
            a(this, e);
            var r = s(this, t.call(this, i));
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
            var i = (e - this._startTime) % this.duration;
            this._currFrame = ~~(this.frames.length * i / this.duration);
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
    }(n.default);
    e.default = u;
}, function(t, e, i) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var r = i(7);
    var n = h(r);
    var o = i(20);
    var a = s(o);
    function s(t) {
        if (t && t.__esModule) {
            return t;
        } else {
            var e = {};
            if (t != null) {
                for (var i in t) {
                    if (Object.prototype.hasOwnProperty.call(t, i)) e[i] = t[i];
                }
            }
            e.default = t;
            return e;
        }
    }
    function h(t) {
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
    var l = function t() {};
    var d = function(t) {
        c(e, t);
        function e(i) {
            u(this, e);
            var r = f(this, t.call(this, i));
            r.type = "GameObject";
            r.gameObjectProto = null;
            return r;
        }
        e.prototype.revalidate = function e() {
            var i = this;
            var r = {};
            for (var n in this) {
                if (!this.hasOwnProperty(n)) continue;
                r[n] = this[n];
            }
            Object.keys(this.gameObjectProto).forEach(function(t) {
                if (i.gameObjectProto[t] === undefined) return;
                i[t] = i.gameObjectProto[t];
            });
            Object.keys(r).forEach(function(t) {
                if (!r[t]) return;
                if (r[t].splice && r[t].length === 0) return;
                i[t] = r[t];
            });
            t.prototype.revalidate.call(this);
        };
        e.prototype.setIndividualBehaviour = function t(e) {
            var i = new e(this.game);
            i.game = this.game;
            i.gameObject = this;
            if (!i.onCreate) i.onCreate = l;
            if (!i.onUpdate) i.onUpdate = l;
            if (!i.onDestroy) i.onDestroy = l;
            this._individualBehaviour = i;
        };
        e.prototype.setCommonBehaviour = function t() {
            var e = this;
            var i = [];
            this.commonBehaviour.forEach(function(t) {
                var r = a[t.name];
                if (true) {
                    if (!r) {
                        console.error(t);
                        console.error(a);
                        throw "can not find common behaviour with name " + t.name;
                    }
                }
                var n = new r(e.game);
                n.manage(e, t.parameters);
                i.push(n);
            });
            this.commonBehaviour = i;
        };
        return e;
    }(n.default);
    e.default = d;
}, function(t, e, i) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var r = i(0);
    var n = o(r);
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
    var u = function(t) {
        h(e, t);
        function e(i) {
            a(this, e);
            var r = s(this, t.call(this, i));
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
        e.prototype.update = function t(e, i) {
            var r = this.gameObjects;
            var n = r.length;
            var o = n - 1;
            while (n--) {
                var a = r[o - n];
                a && a.update(e, i);
            }
        };
        return e;
    }(n.default);
    e.default = u;
}, function(t, e, i) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var r = i(0);
    var n = h(r);
    var o = i(1);
    var a = s(o);
    function s(t) {
        if (t && t.__esModule) {
            return t;
        } else {
            var e = {};
            if (t != null) {
                for (var i in t) {
                    if (Object.prototype.hasOwnProperty.call(t, i)) e[i] = t[i];
                }
            }
            e.default = t;
            return e;
        }
    }
    function h(t) {
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
    var l = function t(e) {
        return a.random(e.from, e.to);
    };
    var d = function(t) {
        c(e, t);
        function e(i) {
            u(this, e);
            var r = f(this, t.call(this, i));
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
        e.prototype.emit = function t(e, i) {
            for (var r = 0; r < l(this.numOfParticlesToEmit); r++) {
                var n = this.gameObjectProto.clone();
                var o = l(this.particleAngle);
                var a = l(this.particleVelocity);
                n.vel.x = a * Math.cos(o);
                n.vel.y = a * Math.sin(o);
                n.pos.x = l({
                    from: e - this.emissionRadius,
                    to: e + this.emissionRadius
                });
                n.pos.y = l({
                    from: i - this.emissionRadius,
                    to: i + this.emissionRadius
                });
                n.liveTime = l(this.particleLiveTime);
                this._particles.push(n);
            }
        };
        e.prototype.update = function t(e, i) {
            var r = this._particles;
            var n = r.length;
            var o = n - 1;
            while (n--) {
                var a = r[o - n];
                if (!a) continue;
                if (!a._timeCreated) a._timeCreated = e;
                if (e - a._timeCreated > a.liveTime) {
                    this._particles.splice(this._particles.indexOf(a), 1);
                }
                a.update(e, i);
            }
        };
        return e;
    }(n.default);
    e.default = d;
}, function(t, e, i) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var r = i(0);
    var n = u(r);
    var o = i(31);
    var a = u(o);
    var s = i(8);
    var h = u(s);
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
    var d = function(t) {
        l(e, t);
        function e(i) {
            f(this, e);
            var r = c(this, t.call(this, i));
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
            r.tileMap = new h.default(i);
            return r;
        }
        e.prototype.revalidate = function e() {
            t.prototype.revalidate.call(this);
            if (!false && this.tileMap && this.tileMap.spriteSheet) {
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
            var i = this;
            var r = this.getAllSpriteSheets().concat(this.game.repository.getArray("Font"));
            var n = new a.default();
            n.onResolved = function() {
                e && e();
            };
            r.forEach(function(t) {
                n.addTask(function() {
                    i.game.renderer.loadTextureInfo(t.resourcePath, function() {
                        return n.resolveTask(t.id);
                    });
                }, t.id);
            });
            n.start();
        };
        e.prototype.onShow = function t() {
            if (this._individualBehaviour) this._individualBehaviour.onCreate();
            this.layers.forEach(function(t) {
                t.onShow();
            });
        };
        e.prototype.setIndividualBehaviour = function t(e) {
            var i = new e(this.game);
            i.game = this.game;
            i.scene = this;
            this._individualBehaviour = i;
        };
        e.prototype.update = function t(e, i) {
            var r = this.game.renderer;
            r.beginFrameBuffer();
            if (this.useBG) r.clearColor(this.colorBG); else r.clear();
            var n = this.layers;
            var o = this.layers.length;
            var a = o - 1;
            r.scale(this.game.camera.scale.x, this.game.camera.scale.y);
            this.game.camera.update(e, i);
            r.translate(-this.game.camera.pos.x, -this.game.camera.pos.y);
            if (this._individualBehaviour) this._individualBehaviour.onUpdate();
            while (o--) {
                n[o - a].update(e, i);
            }
            this.game.repository.getArray("ParticleSystem").forEach(function(t) {
                t.update(e, i);
            });
            this._updateTileMap();
            if (true) {
                if (this.game.renderer.debugTextField) this.game.renderer.debugTextField.render();
            }
            r.flipFrameBuffer();
        };
        e.prototype.fadeIn = function t(e, i) {
            return this.tween(this, {
                to: {
                    alpha: 1
                }
            }, e, i);
        };
        e.prototype.fadeOut = function t(e, i) {
            return this.tween(this, {
                to: {
                    alpha: 0
                }
            }, e, i);
        };
        e.prototype.tween = function t(e, i, r, n) {};
        e.prototype._updateTileMap = function t() {
            var e = this.tileMap.spriteSheet;
            if (!e) return;
            var i = this.game.renderer;
            var r = ~~(this.game.camera.pos.x / this.tileMap.spriteSheet._frameWidth);
            var n = ~~(this.game.camera.pos.y / this.tileMap.spriteSheet._frameHeight);
            var o = r + this.tileMap._tilesInScreenX + 2;
            var a = n + this.tileMap._tilesInScreenY + 2;
            for (var s = n; s < a; s++) {
                for (var h = r; h < o; h++) {
                    var u = this.tileMap.data[s] && this.tileMap.data[s][h];
                    if (u == null) continue;
                    i.drawImage(e.resourcePath, e.getFramePosX(u), e.getFramePosY(u), e._frameWidth, e._frameHeight, h * e._frameWidth, s * e._frameHeight);
                }
            }
        };
        e.prototype.printText = function t(e, i, r, n) {
            if (!r) return;
            if (!r.substring) r = JSON.stringify(r, null, 4);
            this.game.renderer.printText(e, i, r, n);
        };
        e.prototype.log = function t(e) {
            this.printText(0, 0, e);
        };
        return e;
    }(n.default);
    e.default = d;
}, function(t, e, i) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var r = i(0);
    var n = o(r);
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
    var u = function(t) {
        h(e, t);
        function e(i) {
            a(this, e);
            var r = s(this, t.call(this, i));
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
        e.prototype.setGain = function t(e, i, r) {};
        return e;
    }(n.default);
    e.default = u;
}, function(t, e, i) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var r = i(0);
    var n = o(r);
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
    var u = function(t) {
        h(e, t);
        function e(i) {
            a(this, e);
            var r = s(this, t.call(this, i));
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
    }(n.default);
    e.default = u;
}, function(t, e, i) {
    "use strict";
    var r = i(12);
    var n = u(r);
    var o = i(13);
    var a = u(o);
    var s = i(14);
    var h = u(s);
    function u(t) {
        return t && t.__esModule ? t : {
            default: t
        };
    }
    if (1 && a.default.startSceneId === undefined) throw "start scene not specified";
    var f = new n.default(a.default);
    f.repository.setDescriptions(h.default);
    var c = f.repository.getObject(a.default.startSceneId, "Scene");
    f.runScene(c);
    if (true) window.game = f;
} ]);