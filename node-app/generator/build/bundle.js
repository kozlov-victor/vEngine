(function(t) {
    var e = {};
    function r(n) {
        if (e[n]) {
            return e[n].exports;
        }
        var i = e[n] = {
            i: n,
            l: false,
            exports: {}
        };
        t[n].call(i.exports, i, i.exports, r);
        i.l = true;
        return i.exports;
    }
    r.m = t;
    r.c = e;
    r.i = function(t) {
        return t;
    };
    r.d = function(t, e, n) {
        if (!r.o(t, e)) {
            Object.defineProperty(t, e, {
                configurable: false,
                enumerable: true,
                get: n
            });
        }
    };
    r.n = function(t) {
        var e = t && t.__esModule ? function e() {
            return t["default"];
        } : function e() {
            return t;
        };
        r.d(e, "a", e);
        return e;
    };
    r.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
    };
    r.p = "";
    return r(r.s = 30);
})([ function(t, e, r) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var n, i;
    var o = r(3);
    var a = h(o);
    var s = r(17);
    var u = h(s);
    var c = r(9);
    var f = h(c);
    var l = r(2);
    function h(t) {
        return t && t.__esModule ? t : {
            default: t
        };
    }
    function p(t, e) {
        if (!(t instanceof e)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    function d(t, e) {
        if (!t) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return e && (typeof e === "object" || typeof e === "function") ? e : t;
    }
    function y(t, e) {
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
    var m = (n = (0, l.Transient)({
        game: true
    }), n(i = function(t) {
        y(e, t);
        function e(r) {
            p(this, e);
            var n = d(this, t.call(this));
            if (1 && !r) throw "can not create model '" + n.type + "': game instance not passed to model constructor";
            n.game = r;
            n.id = null;
            n.name = null;
            n.width = 0;
            n.height = 0;
            n.vel = {
                x: 0,
                y: 0
            };
            n.pos = {
                x: 0,
                y: 0
            };
            n.scale = {
                x: 1,
                y: 1
            };
            n.angle = 0;
            n.alpha = 1;
            n.layerId = null;
            n.rigid = false;
            n._tweens = [];
            n._emitter = new f.default();
            return n;
        }
        e.prototype.revalidate = function t() {};
        e.prototype.setIndividualBehaviour = function t(e) {};
        e.prototype.setCommonBehaviour = function t() {};
        e.prototype.onShow = function t() {};
        e.prototype.getRect = function t() {
            return {
                x: this.pos.x,
                y: this.pos.y,
                width: this.width,
                height: this.height
            };
        };
        e.prototype.tween = function t(e) {
            var r = new u.default(e, this);
            this._tweens.push(r);
        };
        e.prototype.update = function t(e) {
            var r = this;
            this._tweens.forEach(function(t, n) {
                t.update(e);
                if (t.completed) r._tweens.splice(n, 1);
            });
        };
        e.prototype.clone = function t() {
            var e = this.constructor;
            var r = new e(this.game);
            r._cloner = this;
            return r.fromJSON(this.toJSON(), true);
        };
        e.prototype.on = function t(e, r) {
            this._emitter.on(e, r);
            return this;
        };
        e.prototype.trigger = function t(e, r) {
            this._emitter.trigger(e, r);
        };
        e.prototype.updateCloner = function t() {
            if (false) return;
            var e = this._cloner;
            if (!e) return;
            e.fromJSON(this.toJSON());
            e.updateCloner();
            delete this._cloner;
        };
        return e;
    }(a.default)) || i);
    e.default = m;
}, function(t, e, r) {
    "use strict";
    e.isPointInRect = function(t, e, r) {
        return t.x > e.x && t.x < e.x + e.width && t.y > e.y && t.y < e.y + e.height;
    };
    e.radToDeg = function(t) {
        return t * 180 / Math.PI;
    };
    e.degToRad = function(t) {
        return t * Math.PI / 180;
    };
    e.random = function(t, e) {
        if (t > e) {
            var r = t;
            t = e;
            e = r;
        }
        var n = Math.random() * (e - t) + t;
        if (n > e) n = e; else if (n < t) n = t;
        return n;
    };
    var n = {};
    n.linear = function(t, e, r, n) {
        return r * t / n + e;
    };
    n.easeInQuad = function(t, e, r, n) {
        t /= n;
        return r * t * t + e;
    };
    n.easeOutQuad = function(t, e, r, n) {
        t /= n;
        return -r * t * (t - 2) + e;
    };
    n.easeInOutQuad = function(t, e, r, n) {
        t /= n / 2;
        if (t < 1) return r / 2 * t * t + e;
        t--;
        return -r / 2 * (t * (t - 2) - 1) + e;
    };
    e.ease = n;
}, function(t, e, r) {
    "use strict";
    e.__esModule = true;
    e.Transient = n;
    function n(t) {
        return function(e) {
            e.transient = t;
        };
    }
}, function(t, e, r) {
    "use strict";
    e.__esModule = true;
    var n = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(t) {
        return typeof t;
    } : function(t) {
        return t && typeof Symbol === "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
    };
    function i(t, e) {
        if (!(t instanceof e)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    var o = function t(e, r) {
        if (!e) return true;
        if (e.indexOf("_") == 0) return true;
        if (r && r.call) return true;
        if (typeof r === "string") return false;
        if (typeof r === "number") return false;
        if (typeof r === "boolean") return false;
        if (!r) return true;
    };
    var a = function t(e) {
        return typeof e === "string" || typeof e === "number";
    };
    var s = function t(e) {
        var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
        if (e === undefined) return undefined; else if (e === null) return null; else if (typeof window !== "undefined" && e === window) return undefined; else if (r.indexOf(e) > -1) return e;
        if (Object.prototype.toString.call(e) === "[object Array]") {
            var i = [], o = 0, a = e.length;
            for (;o < a; o++) {
                var s = void 0;
                if (r.indexOf(e[o]) > -1) {
                    s = e[o];
                } else {
                    r.push(e);
                    s = t(e[o], r);
                    r.push(e[o]);
                }
                i[o] = s;
            }
            return i;
        } else if ((typeof e === "undefined" ? "undefined" : n(e)) === "object") {
            var u = {};
            for (var c in e) {
                if (!e.hasOwnProperty(c)) continue;
                var f = void 0;
                if (r.indexOf(e[c]) > -1) {
                    f = e[c];
                } else {
                    r.push(e);
                    f = t(e[c], r);
                    r.push(e[c]);
                }
                u[c] = f;
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
            var r = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var n = arguments[1];
            Object.keys(r).forEach(function(t) {
                if (t === "type") return;
                if (t in e) e[t] = r[t]; else {
                    console.error(e);
                    throw "::fromJSON(): class " + e.constructor.name + " has no property " + t;
                }
                if (!e[t]) return;
                if (r[t].id && r[t].type) e[t] = e.game.repository.getObject(r[t].id, r[t].type, n); else if (r[t].splice) {
                    var i = e[t];
                    e[t] = [];
                    i.forEach(function(r, i) {
                        if (r && r.type && r.id) {
                            e[t].push(e.game.repository.getObject(r.id, r.type, n));
                        } else {
                            if (a(r)) e[t].push(r);
                        }
                    });
                }
            });
            this.revalidate();
            return this;
        };
        t.prototype.toJSON = function t() {
            var e = this;
            var r = {};
            for (var i in this) {
                if (o(i, this[i])) {
                    continue;
                }
                if (this.constructor.transient && this.constructor.transient[i]) {
                    continue;
                }
                if (this[i].type && this[i].id) {
                    r[i] = {
                        id: this[i].id,
                        type: this[i].type
                    };
                } else if (this[i] && this[i].splice) {
                    (function() {
                        var t = e[i];
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
                        r[i] = n;
                    })();
                } else {
                    var u = s(this[i]);
                    if (u.splice && !u.length) continue; else if ((typeof u === "undefined" ? "undefined" : n(u)) === "object" && !Object.keys(u).length) continue;
                    r[i] = u;
                }
            }
            return r;
        };
        return t;
    }();
    e.default = u;
}, function(t, e, r) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var n = r(0);
    var i = o(n);
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
    var c = function(t) {
        u(e, t);
        e.find = function t(e) {};
        e.findAll = function t(e) {};
        function e(r) {
            a(this, e);
            var n = s(this, t.call(this, r));
            n.type = "GameObjectProto";
            n.spriteSheet = null;
            n._behaviour = null;
            n.commonBehaviour = [];
            n.currFrameIndex = 0;
            n._sprPosX = 0;
            n._sprPosY = 0;
            n.frameAnimations = [];
            n._currFrameAnimation = null;
            n.startFrameAnimationName = null;
            n._timeCreated = null;
            n.tileOffset = {
                x: 0,
                y: 0
            };
            n.tileRepeat = false;
            n.groupName = "";
            n._individualBehaviour = null;
            return n;
        }
        e.prototype.revalidate = function t() {
            var e = this;
            this.setFrameIndex(this.currFrameIndex);
            if (this.spriteSheet) {
                this.width = this.spriteSheet._frameWidth;
                this.height = this.spriteSheet._frameHeight;
            }
            this.frameAnimations.forEach(function(t, r) {
                e.frameAnimations[r] = e.frameAnimations[r].clone();
                e.frameAnimations[r]._gameObject = e;
            });
        };
        e.prototype.playFrameAnimation = function t(e, r) {
            var n = this.frameAnimations.find(function(t) {
                return t.name === e;
            });
            n._gameObject = this;
            this._currFrameAnimation = n;
            n.play(r);
        };
        e.prototype.setFrameIndex = function t(e) {
            this.currFrameIndex = e;
            this._sprPosX = this.spriteSheet.getFramePosX(this.currFrameIndex);
            this._sprPosY = this.spriteSheet.getFramePosY(this.currFrameIndex);
        };
        e.prototype.update = function e(r, n) {
            t.prototype.update.call(this, r);
            this._currFrameAnimation && this._currFrameAnimation.update(r);
            var i = this.vel.x * n / 1e3;
            var o = this.vel.y * n / 1e3;
            var a = this.pos.x + i;
            var s = this.pos.y + o;
            this.pos.x = a;
            this.pos.y = s;
            this.game._renderer.draw(this);
            if (this._individualBehaviour) this._individualBehaviour.onUpdate();
        };
        e.prototype.onShow = function t() {
            if (this._individualBehaviour) this._individualBehaviour.onCreate();
            if (this.startFrameAnimationName != null) this.playFrameAnimation(this.startFrameAnimationName);
        };
        e.prototype.stopFrAnimations = function t() {
            this._currFrameAnimation && this._currFrameAnimation.stop();
        };
        e.prototype.kill = function t() {
            this._layer.kill(this);
        };
        return e;
    }(i.default);
    e.default = c;
}, function(t, e, r) {
    "use strict";
    var n = r(10);
    var i = o(n);
    function o(t) {
        return t && t.__esModule ? t : {
            default: t
        };
    }
    var a = {
        width: 800,
        height: 600,
        scaleStrategy: 0,
        startSceneId: 2
    };
    if (1 && a.startSceneId == null) throw "start scene not specified";
    var s = new i.default({
        width: 800,
        height: 600,
        scaleStrategy: 0,
        startSceneId: 2
    });
    s.repository.setDescriptions({
        Scene: [ {
            id: 2,
            name: "mainScene",
            type: "Scene",
            layers: [ {
                type: "Layer",
                id: 2
            } ]
        } ],
        Layer: [ {
            id: 2,
            name: "layer1",
            type: "Layer",
            gameObjects: [ {
                type: "GameObject",
                id: 11
            }, {
                type: "GameObject",
                id: 12
            }, {
                type: "GameObject",
                id: 13
            }, {
                type: "GameObject",
                id: 14
            } ]
        } ],
        SpriteSheet: [ {
            name: "horse",
            width: 733,
            height: 489,
            type: "SpriteSheet",
            numOfFramesH: 4,
            numOfFramesV: 4,
            resourcePath: "resources/horse.gif",
            id: 3
        } ],
        GameObjectProto: [ {
            id: 4,
            name: "horse",
            width: 183,
            height: 122,
            type: "GameObjectProto",
            spriteSheet: {
                id: 3,
                type: "SpriteSheet"
            },
            frameAnimations: [ {
                type: "FrameAnimation",
                id: 5
            } ],
            startFrameAnimationName: null
        } ],
        FrameAnimation: [ {
            name: "run",
            type: "FrameAnimation",
            frames: [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14 ],
            id: 5
        } ],
        GameObject: [ {
            id: 11,
            name: "horse",
            pos: {
                x: 329,
                y: 148
            },
            scale: {
                x: 1,
                y: 1
            },
            angle: 0,
            alpha: 1,
            layerId: 2,
            type: "GameObject",
            gameObjectProto: {
                id: 4,
                type: "GameObjectProto"
            }
        }, {
            id: 12,
            name: "horse",
            pos: {
                x: 184,
                y: 122
            },
            scale: {
                x: 1,
                y: 1
            },
            angle: 0,
            alpha: 1,
            layerId: 2,
            type: "GameObject",
            gameObjectProto: {
                id: 4,
                type: "GameObjectProto"
            }
        }, {
            id: 13,
            name: "horse",
            pos: {
                x: 468,
                y: 134
            },
            scale: {
                x: 1,
                y: 1
            },
            angle: 0,
            alpha: 1,
            layerId: 2,
            type: "GameObject",
            gameObjectProto: {
                id: 4,
                type: "GameObjectProto"
            }
        }, {
            pos: {
                x: 388,
                y: 83
            },
            layerId: 2,
            type: "GameObject",
            gameObjectProto: {
                id: 4,
                type: "GameObjectProto"
            },
            id: 14
        } ]
    });
    var u = s.repository.getObject(a.startSceneId, "Scene");
    s.runScene(u);
    if (true) window.repository = s.repository;
}, function(t, e, r) {
    "use strict";
    e.__esModule = true;
    e.Draggable = undefined;
    var n = r(7);
    var i = o(n);
    function o(t) {
        return t && t.__esModule ? t : {
            default: t
        };
    }
    e.Draggable = i.default;
}, function(t, e, r) {
    "use strict";
    e.__esModule = true;
    function n(t, e) {
        if (!(t instanceof e)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    var i = function() {
        t._getEventId = function t(e) {
            return e.id || 1;
        };
        function t(e) {
            n(this, t);
            this.game = e;
            this.points = {};
        }
        t.prototype.manage = function e(r, n) {
            var i = this;
            r.on("click", function(e) {
                i.points[t._getEventId(e)] = {
                    mX: e.objectX,
                    mY: e.objectY,
                    target: r,
                    preventDefault: function t() {
                        this.defaultPrevented = true;
                    }
                };
            });
            var o = this.game.getCurrScene();
            o.on("mouseDown", function(e) {
                var r = t._getEventId(e);
                var n = i.points[r];
                if (!n) return;
                n.dragStartX = n.target.pos.x;
                n.dragStartY = n.target.pos.y;
            });
            o.on("mouseMove", function(e) {
                var n = t._getEventId(e);
                var o = i.points[n];
                if (!o) return;
                if (!o.dragStart) {
                    o.dragStart = true;
                    o.target.trigger("dragStart", o);
                    if (o.defaultPrevented) {
                        delete i.points[n];
                        return;
                    }
                }
                r.pos.x = e.screenX - o.mX;
                r.pos.y = e.screenY - o.mY;
            });
            o.on("mouseUp", function(e) {
                var n = t._getEventId(e);
                var o = i.points[n];
                if (!o) return;
                if (o.dragStart) {
                    o.x = r.pos.x;
                    o.y = r.pos.y;
                    o.target.trigger("dragStop", o);
                }
                delete i.points[n];
            });
        };
        return t;
    }();
    e.default = i;
}, function(t, e, r) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var n = r(1);
    var i = o(n);
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
    var s = "ontouchstart" in window;
    var u = function() {
        function t(e) {
            a(this, t);
            this.game = e;
            this.objectsCaptured = {};
        }
        t.prototype.listenTo = function t(e) {
            var r = this;
            if (s) {
                e.ontouchstart = function(t) {
                    var e = t.touches.length;
                    while (e--) {
                        r.resolveClick(t.touches[e]);
                    }
                };
                e.ontouchend = e.ontouchcancel = function(t) {
                    var e = t.changedTouches.length;
                    while (e--) {
                        r.resolveMouseUp(t.changedTouches[e]);
                    }
                };
                e.ontouchmove = function(t) {
                    var e = t.touches.length;
                    while (e--) {
                        r.resolveMouseMove(t.touches[e]);
                    }
                };
            } else {
                e.onmousedown = function(t) {
                    t.button === 0 && r.resolveClick(t);
                };
                e.onmouseup = function(t) {
                    r.resolveMouseUp(t);
                };
                e.onmousemove = function(t) {
                    r.resolveMouseMove(t);
                };
                e.ondblclick = function(t) {
                    r.resolveDoubleClick(t);
                };
            }
        };
        t.prototype.resolveScreenPoint = function t(e) {
            return {
                x: ~~((e.clientX - this.game.pos.x) / this.game.scale.x),
                y: ~~((e.clientY - this.game.pos.y) / this.game.scale.y),
                id: e.identifier || 0
            };
        };
        t.prototype.triggerEvent = function t(e, r) {
            var n = this.game;
            var o = n.getCurrScene();
            if (!o) return;
            var a = this.resolveScreenPoint(e);
            t: for (var s = 0; s < o.layers.length; s++) {
                var u = o.layers[o.layers.length - 1 - s];
                for (var c = 0; c < u.gameObjects.length; c++) {
                    var f = u.gameObjects[c];
                    if (i.default.isPointInRect(a, f.getRect())) {
                        f.trigger(r, {
                            screenX: a.x,
                            screenY: a.y,
                            objectX: a.x - f.pos.x,
                            objectY: a.y - f.pos.y,
                            id: a.id
                        });
                        break t;
                    }
                }
            }
            o.trigger(r, {
                screenX: a.x,
                screenY: a.y,
                id: a.id,
                target: o
            });
            return a;
        };
        t.prototype.resolveClick = function t(e) {
            if (window.canceled) return;
            this.triggerEvent(e, "click");
            this.triggerEvent(e, "mouseDown");
        };
        t.prototype.resolveMouseMove = function t(e) {
            if (1 && window.canceled) return;
            var r = this.triggerEvent(e, "mouseMove");
            if (!r) return;
            var n = this.objectsCaptured[r.id];
            if (n && n != r.object) {
                n.trigger("mouseLeave");
                delete this.objectsCaptured[r.id];
            }
            if (r.object && n != r.object) {
                r.object.trigger("mouseEnter");
                this.objectsCaptured[r.id] = r.object;
            }
        };
        t.prototype.resolveMouseUp = function t(e) {
            if (1 && window.canceled) return;
            var r = this.triggerEvent(e, "mouseUp");
            if (!r) return;
            var n = this.objectsCaptured[r.id];
            if (!n) return;
            n.trigger("mouseUp");
            delete this.objectsCaptured[r.id];
        };
        t.prototype.resolveDoubleClick = function t(e) {
            if (1 && window.canceled) return;
            var r = this.triggerEvent(e, "doubleClick");
            if (!r) return;
            delete this.objectsCaptured[r.id];
        };
        return t;
    }();
    e.default = u;
}, function(t, e, r) {
    "use strict";
    e.__esModule = true;
    function n(t, e) {
        if (!(t instanceof e)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    var i = function() {
        function t() {
            n(this, t);
            this.events = {};
        }
        t.prototype._on = function t(e, r) {
            this.events[e] = this.events[e] || [];
            this.events[e].push(r);
        };
        t.prototype.on = function t(e, r) {
            if (typeof e == "string") {
                this._on(e, r);
            } else if (e.splice) {
                e.forEach(function(t) {
                    this._on(t, r);
                });
            }
        };
        t.prototype.trigger = function t(e, r) {
            var n = this.events[e];
            if (!n) return;
            var i = n.length;
            while (i--) {
                n[i](r);
            }
        };
        return t;
    }();
    e.default = i;
}, function(t, e, r) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var n, i;
    r(12);
    var o = r(15);
    var a = d(o);
    var s = r(16);
    var u = d(s);
    var c = r(8);
    var f = d(c);
    var l = r(2);
    var h = r(3);
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
    var g = (n = (0, l.Transient)({
        repository: true
    }), n(i = function(t) {
        v(e, t);
        function e(r) {
            y(this, e);
            var n = m(this, t.call(this));
            n.scale = {
                x: 1,
                y: 1
            };
            n.pos = {
                x: 0,
                y: 0
            };
            Object.keys(r).forEach(function(t) {
                n[t] = r[t];
            });
            n._currentScene = null;
            var i = Date.now();
            n._lastTime = n._currTime = i;
            n._deltaTime = 0;
            n._running = false;
            n.repository = new u.default(n);
            n._mouse = new f.default(n);
            return n;
        }
        e.prototype.getTime = function t() {
            return this._lastTime;
        };
        e.prototype.getDeltaTime = function t() {
            return this._deltaTime;
        };
        e.prototype.runScene = function t(n) {
            var i = this;
            if (!this._renderer) {
                this._renderer = a.default.getRenderer(this);
                this._mouse.listenTo(this._renderer.container);
            }
            this._currentScene = n;
            if (true) {
                var o = r(29);
                var s = "" + n.name[0].toUpperCase() + n.name.substr(1) + "Behaviour";
                if (s) n.setIndividualBehaviour(o[s]);
                n.layers.forEach(function(t) {
                    t.gameObjects.forEach(function(t) {
                        t.setCommonBehaviour();
                        var e = "" + t.name[0].toUpperCase() + t.name.substr(1) + "Behaviour";
                        var r = o[e];
                        if (r) t.setIndividualBehaviour(r);
                    });
                });
            }
            n.preload(function() {
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
        e.update = function t(r) {
            if (1 && window.canceled) return;
            requestAnimationFrame(function() {
                e.update(r);
            });
            r._lastTime = r._currTime;
            r._currTime = Date.now();
            r._deltaTime = r._currTime - r._lastTime;
            r._currentScene && r._currentScene.update(r._currTime, r._deltaTime);
        };
        return e;
    }(p.default)) || i);
    e.default = g;
}, function(t, e, r) {
    "use strict";
    e.__esModule = true;
    function n(t, e) {
        if (!(t instanceof e)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    var i = function() {
        function t() {
            n(this, t);
            this.tasksResolved = 0;
            this.tasks = [];
            this.tasksProgressById = {};
            this.tasts = [];
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
        t.prototype.addTask = function t(e, r) {
            this.tasks.push(e);
            this.tasksProgressById[r] = 0;
        };
        t.prototype.progressTask = function t(e, r) {
            this.tasksProgressById[e] = r;
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
}, function(t, e, r) {
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
}, function(t, e, r) {
    "use strict";
    e.__esModule = true;
    function n(t, e) {
        if (!(t instanceof e)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    var i = function() {
        function t(e) {
            n(this, t);
            this.game = e;
            this.renderableCache = {};
            this.container = null;
        }
        t.prototype.onResize = function t() {
            var e = this.container.height / this.container.width;
            var r = window.innerHeight / window.innerWidth;
            var n = void 0;
            var i = void 0;
            if (r < e) {
                i = window.innerHeight;
                n = i / e;
            } else {
                n = window.innerWidth;
                i = n * e;
            }
            this.game.scale.x = n / this.game.width;
            this.game.scale.y = i / this.game.height;
            this.game.pos.x = (window.innerWidth - n) / 2;
            this.game.pos.y = (window.innerHeight - i) / 2;
            this.container.style.width = n + "px";
            this.container.style.height = i + "px";
        };
        t.prototype.registerResize = function t() {
            var e = this;
            this.onResize();
            window.addEventListener("resize", function() {
                e.onResize();
            });
        };
        t.prototype.loadTextureInfo = function t(e, r) {};
        t.prototype.getTextureInfo = function t(e) {};
        return t;
    }();
    e.default = i;
}, function(t, e, r) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var n = r(13);
    var i = o(n);
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
    var c = function(t) {
        u(e, t);
        function e(r) {
            a(this, e);
            var n = s(this, t.call(this, r));
            var i = document.createElement("canvas");
            n.ctx = i.getContext("2d");
            document.body.appendChild(i);
            i.setAttribute("width", r.width);
            i.setAttribute("height", r.height);
            n.container = i;
            n.registerResize();
            return n;
        }
        e.prototype.draw = function t(e) {
            var r = this.ctx;
            r.save();
            r.translate(e.pos.x + e.width / 2, e.pos.y + e.height / 2);
            r.scale(e.scale.x, e.scale.y);
            r.rotate(e.angle);
            r.translate(-e.width / 2, -e.height / 2);
            r.globalAlpha = e.alpha;
            r.globalCompositeOperation = e.blendMode || "source-over";
            r.drawImage(this.renderableCache[e.spriteSheet.resourcePath], e._sprPosX, e._sprPosY, e.width, e.height, 0, 0, e.width, e.height);
            r.restore();
        };
        e.prototype.drawImage = function t(e, r, n, i, o, a, s) {
            this.ctx.drawImage(this.renderableCache[e], r, n, i, o, a, s, i, o);
        };
        e.prototype.fillRect = function t(e, r, n, i, o) {
            this.ctx.fillStyle = o;
            this.ctx.fillRect(e, r, n, i);
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
        e.prototype.loadTextureInfo = function t(e, r) {
            var n = this;
            var i = new Image();
            i.src = e;
            i.onload = function() {
                var t = document.createElement("canvas");
                t.setAttribute("width", i.width);
                t.setAttribute("height", i.height);
                var o = t.getContext("2d");
                o.drawImage(i, 0, 0);
                n.renderableCache[e] = t;
                r();
            };
        };
        return e;
    }(i.default);
    e.default = c;
}, function(t, e, r) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var n = r(14);
    var i = o(n);
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
}, function(t, e, r) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var n = r(18);
    var i = o(n);
    function o(t) {
        if (t && t.__esModule) {
            return t;
        } else {
            var e = {};
            if (t != null) {
                for (var r in t) {
                    if (Object.prototype.hasOwnProperty.call(t, r)) e[r] = t[r];
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
        t.prototype.addDescription = function t(e, r) {
            if (!this.descriptions[r]) this.descriptions[r] = [];
            this.descriptions[r].push(e);
        };
        t.prototype.setDescriptions = function t(e) {
            var r = this;
            Object.keys(e).forEach(function(t) {
                e[t].forEach(function(e) {
                    r.addDescription(e, t);
                });
            });
        };
        t.prototype.getObject = function t(e, r) {
            var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
            if (1 && !r) throw "repository.getObject: type not specified";
            if (1 && e == null) {
                console.trace("id is null");
                throw "::getObject() id not specified for type " + r;
            }
            var o = i[r];
            if (1 && !o) {
                throw "::getObject() undeclared object type " + r;
            }
            if (1 && !this.descriptions[r]) throw "not found description for type: " + r;
            var a = this.descriptions[r].find(function(t) {
                return t.id == e;
            });
            if (!a) {
                throw 'can not find object "' + r + '" with id ' + e;
            }
            if (n || !this.cache[a[e]]) this.cache[e] = new o(this._game).fromJSON(a);
            return this.cache[e];
        };
        t.prototype.getFirst = function t(e) {
            var r = this.getArray(e);
            if (!r.length) return null;
            return r[0];
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
        t.prototype.updateObject = function t(e) {
            var r = e.toJSON();
            var n = this.descriptions[e.type].findIndex(function(t) {
                return t.id == e.id;
            });
            this.descriptions[e.type][n] = r;
            var i = this.getObject(e.id, e.type, true);
            if (i) i.fromJSON(r);
        };
        t.prototype.removeObject = function t(e) {
            if (1 && !this.arrays[e.type]) this.arrays[e.type] = [];
            var r = this.arrays[e.type].findIndex(function(t) {
                return t.id === e.id;
            });
            this.arrays[e.type].splice(r, 1);
            if (!this.descriptions[e.type]) this.descriptions[e.type] = [];
            r = this.descriptions[e.type].findIndex(function(t) {
                return t.id === e.id;
            });
            this.descriptions[e.type].splice(r, 1);
            delete this.cache[e.id];
        };
        t.prototype.getArray = function t(e) {
            var r = this;
            if (1 && !i[e]) throw 'getArray: unregistered type "' + e + '"';
            if (this.arrays[e]) return this.arrays[e];
            var n = [];
            if (!this.descriptions[e]) this.descriptions[e] = [];
            this.descriptions[e].forEach(function(t) {
                if (1 && (t.id === null || t.id === undefined)) {
                    console.error(t);
                    throw "object id must me specified";
                }
                n.push(r.getObject(t.id, e));
            });
            return this.arrays[e] = n;
        };
        t.prototype.reset = function t() {
            this.descriptions = {};
            this.arrays = {};
            this.cache = {};
        };
        return t;
    }();
    e.default = s;
}, function(t, e, r) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var n = r(1);
    var i = o(n);
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
        function t(e, r) {
            a(this, t);
            this.obj = e.target || r;
            this.propsToChange = [];
            this.startedTime = null;
            this.progressFn = e.progress;
            this.completeFn = e.complete;
            this.easeFnName = e.ease || "linear";
            this.completed = false;
            this.tweenTime = e.time || 1e3;
            this.desc = this.normalizeDesc(e);
        }
        t.prototype.normalizeDesc = function t(e) {
            var r = this;
            e.from = e.from || {};
            e.to = e.to || {};
            var n = {};
            Object.keys(e.from).forEach(function(t) {
                n[t] = true;
            });
            Object.keys(e.to).forEach(function(t) {
                n[t] = true;
            });
            this.propsToChange = Object.keys(n);
            this.propsToChange.forEach(function(t) {
                if (e.from[t] === undefined) e.from[t] = r.obj[t];
                if (e.to[t] === undefined) e.to[t] = r.obj[t];
            });
            return e;
        };
        t.prototype.update = function t(e) {
            if (!this.startedTime) this.startedTime = e;
            if (this.completed) return;
            var r = e - this.startedTime;
            if (r > this.tweenTime) {
                this._complete();
                return;
            }
            var n = this.propsToChange.length;
            while (n--) {
                var o = this.propsToChange[n];
                this.obj[o] = i.default.ease[this.easeFnName](r, this.desc.from[o], this.desc.to[o] - this.desc.from[o], this.tweenTime);
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
                var r = this.propsToChange[e];
                this.obj[r] = this.desc.to[r];
            }
            this.progressFn && this.progressFn(this.obj);
            this.completeFn && this.completeFn(this.obj);
            this.completed = true;
        };
        return t;
    }();
    e.default = s;
}, function(t, e, r) {
    "use strict";
    e.__esModule = true;
    e.TextField = e.Layer = e.Font = e.Sound = e.Scene = e.ParticleSystem = e.CommonBehaviour = e.GameObject = e.GameObjectProto = e.SpriteSheet = e.FrameAnimation = undefined;
    var n = r(21);
    var i = S(n);
    var o = r(27);
    var a = S(o);
    var s = r(4);
    var u = S(s);
    var c = r(22);
    var f = S(c);
    var l = r(19);
    var h = S(l);
    var p = r(24);
    var d = S(p);
    var y = r(25);
    var m = S(y);
    var v = r(26);
    var g = S(v);
    var _ = r(20);
    var b = S(_);
    var w = r(23);
    var O = S(w);
    var j = r(28);
    var x = S(j);
    function S(t) {
        return t && t.__esModule ? t : {
            default: t
        };
    }
    e.FrameAnimation = i.default;
    e.SpriteSheet = a.default;
    e.GameObjectProto = u.default;
    e.GameObject = f.default;
    e.CommonBehaviour = h.default;
    e.ParticleSystem = d.default;
    e.Scene = m.default;
    e.Sound = g.default;
    e.Font = b.default;
    e.Layer = O.default;
    e.TextField = x.default;
}, function(t, e, r) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var n = r(0);
    var i = o(n);
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
    var c = function(t) {
        u(e, t);
        function e(r) {
            a(this, e);
            var n = s(this, t.call(this, r));
            n.type = "CommonBehaviour";
            n.parameters = [];
            n.description = null;
            return n;
        }
        return e;
    }(i.default);
    e.default = c;
}, function(t, e, r) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var n = r(0);
    var i = o(n);
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
    var c = function(t) {
        u(e, t);
        function e(r) {
            a(this, e);
            var n = s(this, t.call(this, r));
            n.type = "Font";
            n.resourcePath = null;
            n.fontSize = 12;
            n.fontColor = null;
            n.fontFamily = "Monospace";
            n.fontContext = null;
            n.fontColor = {
                r: 0,
                g: 0,
                b: 0
            };
            return n;
        }
        return e;
    }(i.default);
    e.default = c;
}, function(t, e, r) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var n = r(0);
    var i = o(n);
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
    var c = function(t) {
        u(e, t);
        function e(r) {
            a(this, e);
            var n = s(this, t.call(this, r));
            n.type = "FrameAnimation";
            n._currFrame = 0;
            n.frames = [];
            n.duration = 1e3;
            n._gameObject = null;
            n._startTime = null;
            n.stop();
            return n;
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
            var r = (e - this._startTime) % this.duration;
            this._currFrame = ~~(this.frames.length * r / this.duration);
            if (this._isRepeat == false && this._currFrame >= this.frames.length - 1) {
                this.stop();
            }
            var n = this._gameObject.currFrameIndex;
            if (n != this.frames[this._currFrame]) {
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
    e.default = c;
}, function(t, e, r) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var n = r(4);
    var i = u(n);
    var o = r(6);
    var a = s(o);
    function s(t) {
        if (t && t.__esModule) {
            return t;
        } else {
            var e = {};
            if (t != null) {
                for (var r in t) {
                    if (Object.prototype.hasOwnProperty.call(t, r)) e[r] = t[r];
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
    function c(t, e) {
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
        function e(r) {
            c(this, e);
            var n = f(this, t.call(this, r));
            n.type = "GameObject";
            n.gameObjectProto = null;
            return n;
        }
        e.prototype.revalidate = function e() {
            var r = this;
            var n = {};
            for (var i in this) {
                if (!this.hasOwnProperty(i)) continue;
                n[i] = this[i];
            }
            Object.keys(this.gameObjectProto).forEach(function(t) {
                if (r.gameObjectProto[t] == undefined) return;
                r[t] = r.gameObjectProto[t];
            });
            Object.keys(n).forEach(function(t) {
                if (n[t] == undefined) return;
                if (n[t].splice && n[t].length === 0) return;
                r[t] = n[t];
            });
            t.prototype.revalidate.call(this);
        };
        e.prototype.setIndividualBehaviour = function t(e) {
            var r = new e(this.game);
            r.game = this.game;
            r.object = this;
            if (!r.onCreate) r.onCreate = h;
            if (!r.onUpdate) r.onUpdate = h;
            if (!r.onDestroy) r.onDestroy = h;
            this._individualBehaviour = r;
        };
        e.prototype.setCommonBehaviour = function t() {
            var e = this;
            this.commonBehaviour.forEach(function(t) {
                var r = a[t.name];
                var n = new r(e.game);
                n.manage(e, t.parameters);
            });
        };
        return e;
    }(i.default);
    e.default = p;
}, function(t, e, r) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var n = r(0);
    var i = o(n);
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
    var c = function(t) {
        u(e, t);
        function e(r) {
            a(this, e);
            var n = s(this, t.call(this, r));
            n.type = "Layer";
            n.gameObjects = [];
            return n;
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
        e.prototype.update = function t(e, r) {
            var n = this.gameObjects;
            var i = n.length;
            var o = i - 1;
            while (i--) {
                var a = n[o - i];
                a && a.update(e, r);
            }
        };
        return e;
    }(i.default);
    e.default = c;
}, function(t, e, r) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var n = r(0);
    var i = u(n);
    var o = r(1);
    var a = s(o);
    function s(t) {
        if (t && t.__esModule) {
            return t;
        } else {
            var e = {};
            if (t != null) {
                for (var r in t) {
                    if (Object.prototype.hasOwnProperty.call(t, r)) e[r] = t[r];
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
    function c(t, e) {
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
        function e(r) {
            c(this, e);
            var n = f(this, t.call(this, r));
            n.type = "ParticleSystem";
            n.gameObjectProto = null;
            n._particles = [];
            n.numOfParticlesToEmit = {
                from: 1,
                to: 10
            };
            n.particleAngle = {
                from: 0,
                to: 0
            };
            n.particleVelocity = {
                from: 1,
                to: 100
            };
            n.particleLiveTime = {
                from: 100,
                to: 1e3
            };
            n.emissionRadius = 0;
            return n;
        }
        e.prototype.revalidate = function t() {
            if (this.particleAngle.to < this.particleAngle.from) this.particleAngle.to += 2 * Math.PI;
        };
        e.find = function t(e) {};
        e.findAll = function t(e) {};
        e.prototype.emit = function t(e, r) {
            for (var n = 0; n < h(this.numOfParticlesToEmit); n++) {
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
                    from: r - this.emissionRadius,
                    to: r + this.emissionRadius
                });
                i.liveTime = h(this.particleLiveTime);
                this._particles.push(i);
            }
        };
        e.prototype.update = function t(e, r) {
            var n = this._particles;
            var i = n.length;
            var o = i - 1;
            while (i--) {
                var a = n[o - i];
                if (!a) continue;
                if (!a._timeCreated) a._timeCreated = e;
                if (e - a._timeCreated > a.liveTime) {
                    this._particles.splice(this._particles.indexOf(a), 1);
                }
                a.update(e, r);
            }
        };
        return e;
    }(i.default);
    e.default = p;
}, function(t, e, r) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var n = r(0);
    var i = s(n);
    var o = r(11);
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
    function c(t, e) {
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
    var l = function(t) {
        f(e, t);
        function e(r) {
            u(this, e);
            var n = c(this, t.call(this, r));
            n.type = "Scene";
            n.alpha = 1;
            n.layers = [];
            n.useBG = false;
            n.colorBG = {
                r: 255,
                g: 255,
                b: 255
            };
            n._tweenMovies = [];
            n._individualBehaviour = null;
            n.tileMap = {
                _spriteSheet: null,
                spriteSheetId: null,
                width: 0,
                height: 0,
                data: []
            };
            return n;
        }
        e.prototype.addTweenMovie = function t(e) {
            this._tweenMovies.push(e);
        };
        e.prototype.getAllSpriteSheets = function t() {
            var e = {};
            this.layers.forEach(function(t) {
                t.getAllSpriteSheets().forEach(function(t) {
                    e[t.id] = t;
                });
            });
            return Object.keys(e).map(function(t) {
                return e[t];
            });
        };
        e.prototype.preload = function t(e) {
            var r = this;
            var n = this.getAllSpriteSheets().concat(this.game.repository.getArray("Font"));
            var i = new a.default();
            i.onResolved = function() {
                e && e();
            };
            n.forEach(function(t) {
                i.addTask(function() {
                    r.game._renderer.loadTextureInfo(t.resourcePath, function() {
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
            var r = new e(this.game);
            r.game = this.game;
            r.scene = this;
            this._individualBehaviour = r;
        };
        e.prototype.update = function t(e, r) {
            if (this.useBG) this.game._renderer.clearColor(this.colorBG); else this.game._renderer.clear();
            var n = this.layers;
            var i = this.layers.length;
            var o = i - 1;
            if (this._individualBehaviour) this._individualBehaviour.onUpdate();
            while (i--) {
                n[i - o].update(e, r);
            }
            this.game.repository.getArray("ParticleSystem").forEach(function(t) {
                t.update(e, r);
            });
        };
        e.prototype.fadeIn = function t(e, r) {
            return this.tween(this, {
                to: {
                    alpha: 1
                }
            }, e, r);
        };
        e.prototype.fadeOut = function t(e, r) {
            return this.tween(this, {
                to: {
                    alpha: 0
                }
            }, e, r);
        };
        e.prototype.tween = function t(e, r, n, i) {};
        e.prototype._render = function t() {};
        e.prototype.getTileAt = function t(e, r) {
            if (!this.tileMap._spriteSheet) return null;
            var n = ~~(e / this.tileMap._spriteSheet._frameWidth);
            var i = ~~(r / this.tileMap._spriteSheet._frameHeight);
            return this.tileMap.data[i] && this.tileMap.data[i][n];
        };
        e.prototype.printText = function t(e, r, n, i) {
            if (!n) return;
            if (!n.substring) n = JSON.stringify(n, null, 4);
            this.game.renderer.printText(e, r, n, i);
        };
        e.prototype.log = function t(e) {
            this.printText(0, 0, e);
        };
        return e;
    }(i.default);
    e.default = l;
}, function(t, e, r) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var n = r(0);
    var i = o(n);
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
    var c = function(t) {
        u(e, t);
        function e(r) {
            a(this, e);
            var n = s(this, t.call(this, r));
            n.type = "Sound";
            n.resourcePath = "";
            n._gain = 1;
            n._loop = false;
            return n;
        }
        e.find = function t(e) {};
        e.prototype.play = function t() {};
        e.prototype.stop = function t() {};
        e.prototype.pause = function t() {
            throw "not implemented";
        };
        e.prototype.setGain = function t(e, r, n) {};
        return e;
    }(i.default);
    e.default = c;
}, function(t, e, r) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var n = r(0);
    var i = o(n);
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
    var c = function(t) {
        u(e, t);
        function e(r) {
            a(this, e);
            var n = s(this, t.call(this, r));
            n.type = "SpriteSheet";
            n.width = 0;
            n.height = 0;
            n.numOfFramesH = 1;
            n.numOfFramesV = 1;
            n._frameWidth = 0;
            n._frameHeight = 0;
            n._numOfFrames = 0;
            n.resourcePath = "";
            return n;
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
    e.default = c;
}, function(t, e, r) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var n = r(0);
    var i = o(n);
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
    var c = function(t) {
        u(e, t);
        function e(r) {
            a(this, e);
            var n = s(this, t.call(this, r));
            n.type = "TextField";
            n._chars = null;
            n.text = "";
            n.font = null;
            n.rigid = false;
            return n;
        }
        e.prototype.revalidate = function t() {
            this.setFont(this.font);
        };
        e.prototype.setText = function t(e) {
            e += "";
            this._chars = [];
            this.text = e;
            var r = [ {
                width: 0
            } ];
            var n = 0;
            this.height = this.font.fontContext.symbols[" "].height;
            for (var i = 0, o = e.length; i < o; i++) {
                this._chars.push(e[i]);
                var a = this.font.fontContext.symbols[e[i]] || this.font.fontContext.symbols[" "];
                if (e[i] == "\n") {
                    n++;
                    this.height += a.height;
                    r[n] = {
                        width: 0
                    };
                } else {
                    r[n].width += a.width;
                }
            }
            this.width = Math.max.apply(Math, r.map(function(t) {
                return t.width;
            }));
        };
        e.prototype.setFont = function t(e) {
            this.font = e;
            this.setText(this.text);
        };
        e.prototype.update = function e(r) {
            t.prototype.update.call(this, r);
            this._render();
        };
        e.prototype._render = function t() {
            var e = this;
            var r = 0;
            var n = 0;
            this._chars.forEach(function(t) {
                var i = e.font.fontContext.symbols[t] || e.font.fontContext.symbols["?"];
                if (t == "\n") {
                    r = 0;
                    n += i.height;
                    return;
                }
                e.game._renderer.drawImage(e.font.resourcePath, i.x, i.y, i.width, i.height, e.pos.x + r, e.pos.y + n);
                r += i.width;
            });
        };
        return e;
    }(i.default);
    e.default = c;
}, function(t, e, r) {
    "use strict";
    e.__esModule = true;
    function n(t, e) {
        if (!(t instanceof e)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    var i = e.HorseBehaviour = function() {
        function t() {
            n(this, t);
        }
        t.prototype.onCreate = function t() {};
        t.prototype.onUpdate = function t() {};
        t.prototype.onDestroy = function t() {};
        return t;
    }();
    var o = e.MainSceneBehaviour = function() {
        function t() {
            n(this, t);
        }
        t.prototype.onCreate = function t() {};
        t.prototype.onUpdate = function t() {};
        t.prototype.onDestroy = function t() {};
        return t;
    }();
}, function(t, e, r) {
    t.exports = r(5);
} ]);