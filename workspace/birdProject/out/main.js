!function () {
    function t() {
    }

    var e = {}, i = {};
    e.commonBehaviour = {}, i.RESOURCE_NAMES = ["sound", "spriteSheet", "frameAnimation", "font", "gameObject", "layer", "scene", "particleSystem"], function () {
        function t(t, n, r) {
            if (t)for (var o in t)"function" == typeof t[o] && "function" == typeof r[o] && i.test(t[o]) ? n[o] = e(t[o], r[o]) : n[o] = t[o]
        }

        function e(t, e) {
            return function () {
                var i = this._super;
                this._super = e;
                try {
                    return t.apply(this, arguments)
                } finally {
                    this._super = i
                }
            }
        }

        window.Class = function () {
        }, Class.extend = function (e, i) {
            function n() {
                this._init && this._init.apply(this, arguments), this.construct && this.construct()
            }

            var r = [];
            arguments[0].slice && (r = arguments[0], e = arguments[1], i = arguments[2]), n.prototype = Class.inherit(this.prototype), n.prototype.constructor = n, n.extend = Class.extend, t(i, n, this);
            for (var o = 0; o < r.length; o++)t(r[o], n.prototype, this.prototype);
            return t(e, n.prototype, this.prototype), n
        };
        var i = /xyz/.test(function () {
            xyz
        }) ? /\b_super\b/ : /./;
        Class.inherit = Object.create || function (t) {
                function e() {
                }

                return e.prototype = t, new e
            }
    }(), function () {
        var t = {};
        t.List = function () {
            var t = this;
            this.rs = [], this.add = function (e) {
                t.rs.push(e)
            }, this.addAll = function (e) {
                e.forEach(function (e) {
                    t.rs.push(e)
                })
            }, this.get = function (e) {
                return t.rs[e]
            }, this.getFirst = function () {
                return this.get(0)
            }, this.getLast = function () {
                return this.get(this.size() - 1)
            }, this.isEmpty = function () {
                return 0 == t.size()
            }, this.size = function () {
                return t.rs.length
            }, this.getAll = function () {
                return t.rs
            }, this.clear = function () {
                t.rs = []
            }, this.forEach = function (e) {
                for (var i = 0, n = this.rs.length; i < n; i++)e(t.rs[i], i)
            }, this.forEachReversed = function (e) {
                for (var i = this.rs.length - 1; i >= 0; i--)e(t.rs[i], i)
            }, this.some = function (e) {
                for (var i = 0, n = this.rs.length; i < n; i++) {
                    var r = e(t.rs[i], i);
                    if (r)return !0
                }
                return !1
            }, this.someReversed = function (e) {
                for (var i = this.rs.length - 1; i >= 0; i--) {
                    var n = e(t.rs[i], i);
                    if (n)break
                }
            }, this.indexOf = function (e) {
                var i = 0, n = !1;
                return t.rs.some(function (t) {
                    var r = !0;
                    return Object.keys(e).some(function (i) {
                        if (e[i] != t[i])return r = !1, !0
                    }), r ? (n = !0, !0) : void i++
                }), n ? i : -1
            }, this.remove = function (e) {
                if (e) {
                    var i = t.indexOf(e);
                    i > -1 && t.rs.splice(i, 1)
                }
            }, this.find = function (e) {
                return t.rs[t.indexOf(e)]
            }
        }, t.Set = function () {
            var t = this;
            this.rs = {}, this.add = function (e) {
                t.rs[e.id] = e
            }, this.get = function (e) {
                return t.rs[e.id]
            }, this.has = function (e) {
                return e in t.rs
            }, this.combine = function (e) {
                Object.keys(e.rs).forEach(function (i) {
                    t.add(e.rs[i])
                })
            }, this.asArray = function () {
                var e = [];
                return Object.keys(t.rs).forEach(function (i) {
                    e.push(t.rs[i])
                }), e
            }
        }, e.collections = t
    }(), function () {
        function t(e) {
            if ("[object Array]" === Object.prototype.toString.call(e)) {
                for (var i = [], n = 0, r = e.length; n < r; n++)i[n] = t(e[n]);
                return i
            }
            if ("object" == typeof e) {
                var n, i = {};
                for (n in e)i[n] = t(e[n]);
                return i
            }
            return e
        }

        var n = {}, r = function (t, e) {
            return !e || (0 == e.indexOf("$$") || (!(!t[e] || 0 != e.indexOf("_")) || (!(!t[e] || !t[e].call) || "string" != typeof t[e] && ("number" != typeof t[e] && (!t[e] || void 0)))))
        };
        n.BaseModel = Class.extend({
            id: null, protoId: null, name: "", toJSON: function () {
                var e = {};
                for (var i in this)r(this, i) || (e[i] = this[i]);
                return t(e)
            }, toJSON_Array: function () {
                var t = [];
                for (var e in this)r(this, e) || t.push({key: e, value: this[e]});
                return t
            }, fromJSON: function (t) {
                var e = this;
                Object.keys(t).forEach(function (i) {
                    i in e && (e[i] = t[i], e[i] = +e[i] || e[i])
                })
            }, clone: function () {
                return new this.constructor(this.toJSON())
            }, on: function (t, e) {
                var i = this;
                i.__events__[t] = i.__events__[t] || [], i.__events__[t].push(e)
            }, trigger: function (t, e) {
                var i = this, n = i.__events__[t];
                n && n.forEach(function (t) {
                    t(e)
                })
            }, _init: function () {
                this.__events__ = {}, arguments && arguments[0] && this.fromJSON(arguments[0])
            }
        }), n.Behaviour = n.BaseModel.extend({});
        var o = n.BaseModel.extend({resourcePath: ""});
        n.Sound = o.extend({type: "sound", _buffer: null}), n.SpriteSheet = o.extend({
            type: "spriteSheet",
            width: 0,
            height: 0,
            numOfFramesH: 1,
            numOfFramesV: 1,
            _frameWidth: 0,
            _frameHeight: 0,
            _numOfFrames: 0,
            _textureInfo: null,
            getFramePosX: function (t) {
                return t % this.numOfFramesH * this._frameWidth
            },
            getFramePosY: function (t) {
                return ~~(t / this.numOfFramesH) * this._frameHeight
            },
            calcFrameSize: function () {
                this.numOfFramesH && this.numOfFramesV && (this._frameWidth = this.width / this.numOfFramesH, this._frameHeight = this.height / this.numOfFramesV, this._numOfFrames = this.numOfFramesH * this.numOfFramesV)
            },
            construct: function () {
                this.calcFrameSize()
            }
        }), n.BaseGameObject = n.BaseModel.extend({
            type: "baseGameObject",
            groupName: "",
            _spriteSheet: null,
            posX: 0,
            posY: 0,
            width: 0,
            height: 0,
            _layer: null,
            getRect: function () {
                return {x: this.posX, y: this.posY, width: this.width, height: this.height}
            },
            kill: function () {
                this._layer._gameObjects.remove({id: this.id}), this._layer._scene._allGameObjects.remove({id: this.id})
            },
            getScene: function () {
                return this._layer._scene
            },
            update: function () {
            },
            _render: function () {
            }
        }), n.GameObject = n.BaseGameObject.extend({
            type: "gameObject",
            spriteSheetId: null,
            _spriteSheet: null,
            _behaviour: null,
            commonBehaviour: [],
            _commonBehaviour: null,
            velX: 0,
            velY: 0,
            currFrameIndex: 0,
            _sprPosX: 0,
            _sprPosY: 0,
            _frameAnimations: null,
            frameAnimationIds: [],
            _currFrameAnimation: null,
            rigid: !0,
            _timeCreated: null,
            construct: function () {
                var t = this;
                this._frameAnimations = new e.collections.List, this.spriteSheetId && (this._spriteSheet = i.bundle.spriteSheetList.find({id: this.spriteSheetId}), t.setFrameIndex(t.currFrameIndex), t._frameAnimations.clear(), this.frameAnimationIds.forEach(function (n) {
                    var r = i.bundle.frameAnimationList.find({id: n});
                    r = r.clone(e.models.FrameAnimation), r._gameObject = t, t._frameAnimations.add(r)
                }), t._commonBehaviour = new e.collections.List, this.commonBehaviour.forEach(function (i) {
                    t._commonBehaviour.add(new e.models.CommonBehaviour(i))
                }))
            },
            getFrAnimation: function (t) {
                return this._frameAnimations.find({name: t})
            },
            setFrameIndex: function (t) {
                this.currFrameIndex = t, this._sprPosX = this._spriteSheet.getFramePosX(this.currFrameIndex), this._sprPosY = this._spriteSheet.getFramePosY(this.currFrameIndex)
            },
            setSpriteSheet: function (t) {
                this._spriteSheet = t, this.width = t._frameWidth, this.height = t._frameHeight
            },
            update: function (t, e) {
                this._currFrameAnimation && this._currFrameAnimation.update(t);
                var n = this.velX * e / 1e3, r = this.velY * e / 1e3, o = this.posX + n, h = this.posY + r;
                i.collider.check(this, o, h), this.__updateIndividualBehaviour__(e), this.__updateCommonBehaviour__(), this._render()
            },
            stopFrAnimations: function () {
                this._currFrameAnimation && this._currFrameAnimation.stop()
            },
            _render: function () {
                i.rendererContext.drawImage(this._spriteSheet._textureInfo, this._sprPosX, this._sprPosY, this._spriteSheet._frameWidth, this._spriteSheet._frameHeight, this.posX, this.posY, this.width, this.height)
            }
        }), n.FrameAnimation = n.BaseModel.extend({
            type: "frameAnimation",
            name: "",
            frames: [],
            duration: 1e3,
            _gameObject: null,
            _startTime: null,
            _timeForOneFrame: 0,
            construct: function () {
                this._timeForOneFrame = ~~(this.duration / this.frames.length)
            },
            play: function () {
                this._gameObject._currFrameAnimation = this
            },
            stop: function () {
                this._gameObject._currFrameAnimation = null, this._startTime = null
            },
            update: function (t) {
                this._startTime || (this._startTime = t);
                var e = (t - this._startTime) % this.duration, i = ~~(this.frames.length * e / this.duration), n = this._gameObject.currFrameIndex;
                n != this.frames[i] && this._gameObject.setFrameIndex(this.frames[i])
            }
        }), n.Layer = n.BaseModel.extend({
            type: "layer",
            gameObjectProps: [],
            _gameObjects: null,
            _scene: null,
            construct: function () {
                var t = this;
                t._gameObjects = new e.collections.List, this.gameObjectProps.forEach(function (n) {
                    var r;
                    switch (n.subType) {
                        case"textField":
                            r = new e.models.TextField(n);
                            break;
                        default:
                            var o = i.bundle.gameObjectList.find({id: n.protoId});
                            r = o.clone(), r.fromJSON(n)
                    }
                    r._layer = t, t._gameObjects.add(r)
                })
            },
            getAllSpriteSheets: function () {
                var t = new e.collections.Set;
                return this._gameObjects.forEach(function (e) {
                    e._spriteSheet && t.add(e._spriteSheet)
                }), t
            },
            update: function (t, e) {
                this._gameObjects.forEach(function (i) {
                    i && i.update(t, e)
                })
            }
        }), n.Scene = n.BaseModel.extend({
            type: "scene",
            layerProps: [],
            _layers: null,
            _allGameObjects: null,
            _twins: null,
            __onResourcesReady: function () {
                var t = this;
                t._allGameObjects = new e.collections.List, t._layers.forEach(function (e) {
                    t._allGameObjects.addAll(e._gameObjects)
                })
            },
            construct: function () {
                var t = this;
                t._layers = new e.collections.List, this.layerProps.forEach(function (n) {
                    var r = i.bundle.layerList.find({id: n.protoId}), o = r.clone(e.models.Layer);
                    o.fromJSON(n), o._scene = t, t._layers.add(o)
                })
            },
            getAllSpriteSheets: function () {
                var t = new e.collections.Set;
                return this._layers.forEach(function (e) {
                    t.combine(e.getAllSpriteSheets())
                }), t
            },
            findGameObject: function (t) {
                return this._allGameObjects.find({name: t})
            },
            getAllGameObjects: function () {
                return this._allGameObjects
            },
            update: function (t, e) {
                this._layers.forEach(function (i) {
                    i.update(t, e)
                }), this.__updateIndividualBehaviour__(e)
            }
        }), n.Font = n.BaseModel.extend({
            type: "font",
            fontColor: "black",
            fontSize: 12,
            fontFamily: "Monospace",
            resourcePath: "",
            fontContext: null
        }), n.TextField = n.BaseGameObject.extend({
            type: "userInterface",
            subType: "textField",
            _chars: null,
            text: "",
            _font: null,
            fontId: null,
            rigid: !1,
            setText: function (t) {
                t += "", this._chars = [], this.text = t, this.width = 0;
                for (var e = 0, i = t.length; e < i; e++) {
                    this._chars.push(t[e]);
                    var n = this._font.fontContext.symbols[t[e]] || this._font.fontContext.symbols[" "];
                    this.width += n.width
                }
            },
            setFont: function (t) {
                this._font = t, this.height = this._font.fontContext.symbols[" "].height, this._spriteSheet = new e.models.SpriteSheet({resourcePath: this._font.resourcePath}), this.setText(this.text)
            },
            clone: function () {
                return this._super()
            },
            construct: function () {
                this.rigid = !1;
                var t = i.bundle.fontList.find({id: this.fontId}) || i.bundle.fontList.find({name: "default"});
                this.setFont(t)
            },
            update: function () {
                this._render()
            },
            _render: function () {
                var t = this.posX, e = this.posY, n = this;
                this._chars.forEach(function (r) {
                    var o = n._font.fontContext.symbols[r] || n._font.fontContext.symbols["?"];
                    i.rendererContext.drawImage(n._spriteSheet._textureInfo, o.x, o.y, o.width, o.height, t, e, o.width, o.height), t += o.width
                })
            }
        }, {_cnt: 0}), n.CommonBehaviour = n.BaseModel.extend({
            type: "commonBehaviour",
            name: "",
            description: "",
            parameters: [],
            construct: function () {
            }
        }), n.ParticleSystem = n.BaseModel.extend({
            type: "particleSystem",
            gameObjectId: null,
            _gameObject: null,
            _particles: null,
            numOfParticlesToEmit: null,
            particleAngle: null,
            particleVelocity: null,
            particleLiveTime: null,
            construct: function () {
                this._particles = [], this.numOfParticlesToEmit || (this.numOfParticlesToEmit = {
                    from: 1,
                    to: 10
                }), this.particleAngle || (this.particleAngle = {
                    from: 0,
                    to: Math.PI
                }), this.particleVelocity || (this.particleVelocity = {
                    from: 1,
                    to: 100
                }), this.particleLiveTime || (this.particleLiveTime = {
                    from: 100,
                    to: 1e3
                }), this._gameObject = i.bundle.gameObjectList.find({id: this.gameObjectId})
            },
            emit: function (t, n) {
                for (var r = function (t) {
                    return e.Math.getRandomInRange(t.from, t.to)
                }, o = 0; o < r(this.numOfParticlesToEmit); o++) {
                    var h = this._gameObject.clone(), s = r(this.particleAngle), a = r(this.particleVelocity);
                    h.fromJSON({
                        velX: a * Math.cos(s),
                        velY: a * Math.sin(s),
                        posX: t,
                        posY: n
                    }), h.liveTime = r(this.particleLiveTime), i.bundle.applyBehaviour(h), this._particles.push(h)
                }
            },
            update: function (t, e) {
                var i = this;
                this._particles.forEach(function (n) {
                    n._timeCreated || (n._timeCreated = t), t - n._timeCreated > n.liveTime && i._particles.splice(i._particles.indexOf(n), 1), n.update(t, e)
                })
            }
        }), e.models = n
    }(), function () {
        i.Bundle = function (n) {
            this.spriteSheetList = new e.collections.List, this.gameObjectList = new e.collections.List, this.frameAnimationList = new e.collections.List, this.layerList = new e.collections.List, this.sceneList = new e.collections.List, this.layerList = new e.collections.List, this.fontList = new e.collections.List, this.soundList = new e.collections.List, this.particleSystemList = new e.collections.List, this.gameProps = {};
            var r = this, o = function (t, e, i) {
                i.clear(), e.forEach(function (e) {
                    i.add(new t(e))
                })
            };
            this.prepare = function () {
                i.RESOURCE_NAMES.forEach(function (t) {
                    o(e.models[e.utils.capitalize(t)], n[t], r[t + "List"])
                }), r.gameProps = n.gameProps, n = null
            };
            var h = function (e) {
                var n = i.scripts[e.type] && i.scripts[e.type][e.name + ".js"];
                if (n) {
                    var r = {};
                    n(r, e), r.onCreate(), e.__updateIndividualBehaviour__ = function (t) {
                        r.onUpdate(t)
                    }
                } else e.__updateIndividualBehaviour__ = t
            }, s = function (i) {
                var n = [];
                return i._commonBehaviour ? (i._commonBehaviour.forEach(function (t) {
                    var r = new e.commonBehaviour[t.name];
                    r.initialize(i, t.parameters), r.onCreate(), n.push(r)
                }), void(i.__updateCommonBehaviour__ = function () {
                    n.forEach(function (t) {
                        t.onUpdate()
                    })
                })) : void(i.__updateCommonBehaviour__ = t)
            };
            this.prepareGameObjectScripts = function () {
                r.sceneList.forEach(function (t) {
                    t.__onResourcesReady(), r.applyBehaviour(t), t._layers.forEach(function (t) {
                        t._gameObjects.forEach(function (t) {
                            r.applyBehaviour(t)
                        })
                    })
                })
            }, this.applyBehaviour = function (t) {
                s(t), h(t)
            }
        }
    }(), function () {
        e.utils = {};
        var t = e.utils;
        t.Queue = function () {
            var t = this;
            this.size = function () {
                return e
            }, this.onResolved = null;
            var e = 0, i = 0;
            this.addTask = function () {
                e++
            }, this.resolveTask = function () {
                i++, e == i && t.onResolved && t.onResolved()
            }, this.start = function () {
                0 == this.size() && this.onResolved()
            }
        }, t.merge = function (t, e) {
            Object.keys(e).forEach(function (i) {
                t[i] = e[i]
            })
        }, t.clone = function (t) {
            return Object.create(t)
        }, t.capitalize = function (t) {
            return t.substr(0, 1).toUpperCase() + t.substr(1)
        }, t.getBase64prefix = function (t, e) {
            var i = e.split(".").pop();
            return "data:" + t + "/" + i + ";base64,"
        }
    }(), function () {
        var t = {};
        e.Math = t, t.isPointInRect = function (t, e) {
            return t.x > e.x && t.x < e.x + e.width && t.y > e.y && t.y < e.y + e.height
        }, t.isRectIntersectRect = function (t, e) {
            var i = !(e.x > t.x + t.width || e.x + e.width < t.x || e.y > t.y + t.height || e.y + e.height < t.y);
            return i
        }, t.radToDeg = function (t) {
            return 180 * t / Math.PI
        }, t.degToRad = function (t) {
            return t * Math.PI / 180
        }, t.getRandomInRange = function (t, e) {
            if (t > e) {
                var i = t;
                t = e, e = i
            }
            var n = Math.random() * (e - t + 1) + t;
            return n > e ? n = e : n < t && (n = t), n
        }
    }(), i.Renderer = function () {
        var t, n, r, o, h = 0, s = 0, a = window.requestAnimationFrame || window.webkitRequestAnimationFrame || function (t) {
                setTimeout(t, 17)
            }, c = !1, u = function () {
            var e = window.innerWidth, i = window.innerHeight;
            t.width = e, t.height = i, t.style.width = e + "px", t.style.height = i + "px", o.globalScale.x = e / o.width, o.globalScale.y = i / o.height
        }, d = function () {
            var e = o.width, i = o.height;
            t.width = e, t.height = i, o.globalScale.x = 1, o.globalScale.y = 1
        }, f = function () {
            window.addEventListener("resize", function () {
                u(), l(o.globalScale.x, o.globalScale.y)
            })
        }, l = function (t, e) {
            n.scale(t, e)
        };
        this.getContext = function () {
            return n
        }, this.getCanvas = function () {
            return t
        }, this.init = function () {
            t = document.querySelector("canvas"), o = i.bundle.gameProps, o.globalScale = {}, t || (t = document.createElement("canvas"), o.scaleToFullScreen ? (u(), f()) : d(), document.body.appendChild(t)), n = new i.GlContext, n.init(t), i.rendererContext = n, l(o.globalScale.x, o.globalScale.y), m()
        }, this.getCanvas = function () {
            return t
        }, this.drawImage = function (t, e, i, r, o, h, s, a, c) {
            n.drawImage(t, e, i, r, o, h, s, a, c)
        }, this.cancel = function () {
            cancelAnimationFrame(m), c = !0
        };
        var m = function () {
            if (!c && (a(m), r)) {
                s = h, h = Date.now();
                var t = s ? h - s : 0;
                n.clear(o.width, o.height), r.update(h, t), i.bundle.particleSystemList.forEach(function (e) {
                    e.update(h, t)
                }), e.keyboard.update()
            }
        };
        this.setScene = function (t) {
            r = t, i.collider.setUp()
        }
    }, function () {
        i.CanvasContext = function () {
            var t;
            this.init = function (e) {
                t = e.getContext("2d")
            }, this.scale = function (e, i) {
                t.scale(e, i)
            }, this.drawImage = function (e, i, n, r, o, h, s, a, c) {
                t.drawImage(e.image, i, n, r, o, h, s, a, c)
            }, this.loadTextureInfo = function (t, e) {
                var i = new Image(t);
                i.onload = function () {
                    var t = {image: i};
                    e(t)
                }, i.src = t
            }, this.clear = function (e, i) {
                t.fillStyle = "#FFFFFF", t.fillRect(0, 0, e, i)
            }
        }
    }(), function () {
        var t = {};
        !function () {
            function e(t) {
                console.error(t)
            }

            function i(t, i, n) {
                var r = t.createShader(n);
                t.shaderSource(r, i), t.compileShader(r);
                var o = t.getShaderParameter(r, t.COMPILE_STATUS);
                if (!o) {
                    var h = t.getShaderInfoLog(r);
                    return e("*** Error compiling shader '" + r + "':" + h), t.deleteShader(r), null
                }
                return r
            }

            function n(t, i) {
                var n = t.createProgram();
                i.forEach(function (e) {
                    t.attachShader(n, e)
                }), t.linkProgram(n);
                var r = t.getProgramParameter(n, t.LINK_STATUS);
                if (!r) {
                    var o = t.getProgramInfoLog(n);
                    return e("Error in program linking:" + o), t.deleteProgram(n), null
                }
                return n
            }

            var r = ["VERTEX_SHADER", "FRAGMENT_SHADER"];
            t.createProgramFromSources = function (t, e) {
                for (var o = [], h = 0; h < e.length; ++h)o.push(i(t, e[h], t[r[h]]));
                return n(t, o)
            }, t.make2DProjection = function (t, e, i) {
                return [2 / t, 0, 0, 0, 0, -2 / e, 0, 0, 0, 0, 2 / i, 0, -1, 1, 0, 1]
            }, t.makeTranslation = function (t, e, i) {
                return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, t, e, i, 1]
            }, t.makeXRotation = function (t) {
                var e = Math.cos(t), i = Math.sin(t);
                return [1, 0, 0, 0, 0, e, i, 0, 0, -i, e, 0, 0, 0, 0, 1]
            }, t.makeYRotation = function (t) {
                var e = Math.cos(t), i = Math.sin(t);
                return [e, 0, -i, 0, 0, 1, 0, 0, i, 0, e, 0, 0, 0, 0, 1]
            }, t.makeZRotation = function (t) {
                var e = Math.cos(t), i = Math.sin(t);
                return [e, i, 0, 0, -i, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
            }, t.makeScale = function (t, e, i) {
                return [t, 0, 0, 0, 0, e, 0, 0, 0, 0, i, 0, 0, 0, 0, 1]
            }, t.matrixMultiply = function (t, e) {
                var i = t[0], n = t[1], r = t[2], o = t[3], h = t[4], s = t[5], a = t[6], c = t[7], u = t[8], d = t[9], f = t[10], l = t[11], m = t[12], g = t[13], p = t[14], y = t[15], _ = e[0], x = e[1], w = e[2], v = e[3], b = e[4], S = e[5], O = e[6], E = e[7], F = e[8], A = e[9], T = e[10], j = e[11], I = e[12], P = e[13], R = e[14], C = e[15];
                return [i * _ + n * b + r * F + o * I, i * x + n * S + r * A + o * P, i * w + n * O + r * T + o * R, i * v + n * E + r * j + o * C, h * _ + s * b + a * F + c * I, h * x + s * S + a * A + c * P, h * w + s * O + a * T + c * R, h * v + s * E + a * j + c * C, u * _ + d * b + f * F + l * I, u * x + d * S + f * A + l * P, u * w + d * O + f * T + l * R, u * v + d * E + f * j + l * C, m * _ + g * b + p * F + y * I, m * x + g * S + p * A + y * P, m * w + g * O + p * T + y * R, m * v + g * E + p * j + y * C]
            }
        }(), i.GlContext = function () {
            var i, n, r, o, h = 1, s = 1, a = "            attribute vec4 a_position;            attribute vec2 a_texcoord;                        uniform mat4 u_matrix;            uniform mat4 u_textureMatrix;                        varying vec2 v_texcoord;                        void main() {                gl_Position = u_matrix * a_position;                v_texcoord = (u_textureMatrix * vec4(a_texcoord, 0, 1)).xy;            }            ", c = "            precision mediump float;                        varying vec2 v_texcoord;                        uniform sampler2D texture;                        void main() {                gl_FragColor = texture2D(texture, v_texcoord);            }            ";
            this.init = function (e) {
                n = e, i = e.getContext("webgl", {alpha: !1});
                var h = t.createProgramFromSources(i, [a, c]);
                i.useProgram(h);
                var s = i.getAttribLocation(h, "a_position"), u = i.getAttribLocation(h, "a_texcoord");
                r = i.getUniformLocation(h, "u_matrix"), o = i.getUniformLocation(h, "u_textureMatrix");
                var d = i.createBuffer();
                i.bindBuffer(i.ARRAY_BUFFER, d), i.enableVertexAttribArray(s), i.vertexAttribPointer(s, 2, i.FLOAT, !1, 0, 0), i.blendFunc(i.SRC_ALPHA, i.ONE_MINUS_SRC_ALPHA), i.enable(i.BLEND);
                var f = [0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1];
                i.bufferData(i.ARRAY_BUFFER, new Float32Array(f), i.STATIC_DRAW), d = i.createBuffer(), i.bindBuffer(i.ARRAY_BUFFER, d), i.enableVertexAttribArray(u), i.vertexAttribPointer(u, 2, i.FLOAT, !1, 0, 0);
                var l = [0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1];
                i.bufferData(i.ARRAY_BUFFER, new Float32Array(l), i.STATIC_DRAW)
            }, this.loadTextureInfo = function (t, n, r) {
                "base64" == n.type && (t = e.utils.getBase64prefix("image", n.fileName) + t);
                var o = i.createTexture();
                i.bindTexture(i.TEXTURE_2D, o), i.texImage2D(i.TEXTURE_2D, 0, i.RGBA, 1, 1, 0, i.RGBA, i.UNSIGNED_BYTE, new Uint8Array([0, 0, 255, 255])), i.texParameteri(i.TEXTURE_2D, i.TEXTURE_WRAP_S, i.CLAMP_TO_EDGE), i.texParameteri(i.TEXTURE_2D, i.TEXTURE_WRAP_T, i.CLAMP_TO_EDGE), i.texParameteri(i.TEXTURE_2D, i.TEXTURE_MIN_FILTER, i.LINEAR);
                var h = {width: 1, height: 1, texture: o}, s = new Image;
                s.onload = function () {
                    h.width = s.width, h.height = s.height, i.bindTexture(i.TEXTURE_2D, h.texture), i.texImage2D(i.TEXTURE_2D, 0, i.RGBA, i.RGBA, i.UNSIGNED_BYTE, s), r(h)
                }, s.src = t, document.body.appendChild(s)
            }, this.drawImage = function (e, a, c, u, d, f, l, m, g) {
                var p = e.texture, y = e.width, _ = e.height;
                void 0 === f && (f = a), void 0 === l && (l = c), void 0 === u && (u = y), void 0 === d && (d = _), void 0 === m && (m = u), void 0 === g && (g = d), i.bindTexture(i.TEXTURE_2D, p);
                var x = t.make2DProjection(n.width, n.height, 1), w = t.makeScale(m * h, g * s, 1), v = t.makeTranslation(f * h, l * s, 0), b = t.matrixMultiply(w, v);
                b = t.matrixMultiply(b, x), i.uniformMatrix4fv(r, !1, b);
                var S = t.makeScale(u / y, d / _, 1), O = t.makeTranslation(a / y, c / _, 0), E = t.matrixMultiply(S, O);
                i.uniformMatrix4fv(o, !1, E), i.drawArrays(i.TRIANGLES, 0, 6)
            }, this.clear = function () {
                i.clearColor(1, 1, 1, 1), i.clear(i.COLOR_BUFFER_BIT)
            }, this.scale = function (t, e) {
                h = t, s = e, i.viewport(0, 0, n.width, n.height)
            }
        }
    }(), i.SceneManager = function () {
        var t = this;
        this.currScene = null;
        var n = function (t) {
            var n = new e.utils.Queue;
            n.onResolved = function () {
                i.renderer.setScene(t)
            };
            var r = t.getAllSpriteSheets();
            i.bundle.particleSystemList.forEach(function (t) {
                r.add(t._gameObject._spriteSheet)
            }), r.asArray().forEach(function (t) {
                var e = i.resources ? i.resources[t.resourcePath] : "./" + t.resourcePath;
                i.renderer.getContext().loadTextureInfo(e, {
                    type: i.resources ? "base64" : "",
                    fileName: t.resourcePath
                }, function (e) {
                    console.log("loaded texture info", t.resourcePath, e), t._textureInfo = e, n.resolveTask()
                }), n.addTask()
            }), i.bundle.soundList.forEach(function (t) {
                n.addTask();
                var e = i.resources ? i.resources[t.resourcePath] : "./" + t.resourcePath;
                i.sound.loadSound(e, {type: i.resources ? "base64" : ""}, function (e) {
                    t._buffer = e, n.resolveTask()
                })
            }), n.start()
        };
        this.setScene = function (t) {
            if (!(t instanceof e.models.Scene))throw"object " + t + " is not a scene";
            this.currScene = t, n(t)
        }, this.setSceneByName = function (e) {
            if (!e || !e.substr)throw"object " + e + "is not a string";
            var n = i.bundle.sceneList.find({name: e});
            if (!n)throw"no scene with name " + e + " found";
            t.setScene(n)
        }, this.getCurrScene = function () {
            return this.currScene
        }
    }, function () {
        i.Keyboard = function () {
            var t = {}, e = 1, i = 2, n = 0, r = -1, o = this;
            this.KEY_UP = 38, this.KEY_DOWN = 40, this.KEY_LEFT = 37, this.KEY_RIGHT = 39, this.isPressed = function (e) {
                return t[e] > n
            }, this.isJustPressed = function (e) {
                return t[e] == i
            }, this.isReleased = function (e) {
                return t[e] <= n || !t[e]
            }, this.isJustReleased = function (e) {
                return t[e] == r
            }, this.update = function () {
                [this.KEY_UP, this.KEY_DOWN, this.KEY_LEFT, this.KEY_RIGHT].forEach(function (o) {
                    t[o] == i ? t[o] = e : t[o] == r && (t[o] = n)
                })
            }, window.addEventListener("keydown", function (i) {
                var n = i.keyCode;
                switch (n) {
                    case o.KEY_UP:
                    case o.KEY_DOWN:
                    case o.KEY_LEFT:
                    case o.KEY_RIGHT:
                        t[n] = e
                }
            }), window.addEventListener("keyup", function (e) {
                var i = e.keyCode;
                switch (i) {
                    case o.KEY_UP:
                    case o.KEY_DOWN:
                    case o.KEY_LEFT:
                    case o.KEY_RIGHT:
                        t[i] = r
                }
            })
        }
    }(), function () {
        i.Mouse = function (t) {
            var n = this;
            n.isMouseDown = !1;
            var r = i.bundle.gameProps.globalScale;
            "ontouchstart"in window ? (t.ontouchstart = function (t) {
                o(t.touches[0])
            }, t.ontouchend = t.ontouchcancel = function () {
                s()
            }, t.ontouchmove = function (t) {
                h(t.touches[0])
            }) : (t.onmousedown = function (t) {
                o(t)
            }, t.onmouseup = function () {
                s()
            }, t.onmousemove = function (t) {
                h(t)
            });
            var o = function (t) {
                n.isMouseDown = !0;
                var i = e.sceneManager.getCurrScene();
                if (i) {
                    var o = {x: t.clientX / r.x, y: t.clientY / r.y};
                    i._layers.someReversed(function (t) {
                        var i = !1;
                        return t._gameObjects.someReversed(function (t) {
                            if (e.Math.isPointInRect(o, t.getRect()))return t.trigger("click", {
                                screenX: o.x,
                                screenY: o.y,
                                objectX: o.x - t.posX,
                                objectY: o.y - t.posY
                            }), i = !0
                        }), i
                    })
                }
            }, h = function (t) {
                var i = e.sceneManager.getCurrScene();
                i.trigger("mouseMove", {screenX: t.clientX / r.x, screenY: t.clientY / r.y})
            }, s = function () {
                n.isMouseDown = !1
            }
        }
    }(), function () {
        var t = e.Math;
        t.Vector2d = function () {
            return function (e, i) {
                var n = e || 0, r = i || 0, o = 0, h = 0, s = function () {
                    o = 0 == n ? 0 : Math.atan(r / n), h = Math.sqrt(n * n + r * r)
                }, a = function () {
                    r = Math.sin(o) * h, n = Math.cos(o) * h
                }, c = function () {
                    r = Math.sin(o) * h, n = Math.cos(o) * h
                };
                this.setXY = function (t, e) {
                    n = t, r = e, s()
                }, this.setX = function (t) {
                    n = t, s()
                }, this.setY = function (t) {
                    r = t, s()
                }, this.setAngle = function (t) {
                    o = t, a()
                }, this.setNorm = function (t) {
                    h = t, c()
                }, this.getXY = function () {
                    return {x: n, y: r}
                }, this.getX = function () {
                    return n
                }, this.getY = function () {
                    return r
                }, this.getAngle = function () {
                    return o
                }, this.addVector2d = function (e) {
                    return new t.Vector2d(n + e.getX(), r + e.getY)
                }, this.multiplyByScalar = function (e) {
                    return new t.Vector2d(n * e, r * e)
                }, this.dotProduct = function (t) {
                    return n * t.getX() + r * t.getY()
                }, this.getNorm = function () {
                    return h
                }, function () {
                    s()
                }()
            }
        }()
    }(), function () {
        var t = e.Math;
        t.Matrix2d = function (t) {
            var e = t || [[0, 0], [0, 0]];
            this.identity = function () {
                e = [[1, 0], [0, 1]]
            }, this.addMatrix = function (t) {
                var i = [[], []], n = t.getValue();
                return i[0][0] = e[0][0] + n[0][0], i[0][1] = e[0][1] + n[0][1], i[1][0] = e[1][0] + n[1][0], i[1][1] = e[1][1] + n[1][1], i
            }, this.getValue = function () {
                return e
            }, this.multiplyToScalar = function (t) {
                var i = [[0, 0], [0, 0]];
                return i[0][0] = e[0][0] * t, i[0][1] = e[0][1] * t, i[1][0] = e[1][0] * t, i[1][1] = e[1][1] * t, i
            }, this.multiplyToMatrix2d = function (t) {
                var i = [[0, 0], [0, 0]], n = t.getValue();
                return i[0][0] = e[0][0] * n[0][0] + e[1][0] * n[0][1], i[0][1] = e[1][0] * n[0][0] + e[1][1] * n[0][1], i[1][0] = e[0][0] * n[1][0] + e[1][0] * n[1][1], i[1][1] = e[0][1] * n[1][0] + e[1][1] * n[1][1], i
            }
        }
    }(), function () {
        i.sound = {};
        var t = i.sound, n = window.AudioContext || window.webkitAudioContext, r = new n, o = function (t) {
            for (var e = window.atob(t), i = e.length, n = new Uint8Array(i), r = 0; r < i; r++)n[r] = e.charCodeAt(r);
            return n.buffer
        }, h = function (t, e) {
            var i = new XMLHttpRequest;
            i.open("GET", t, !0), i.responseType = "arraybuffer", i.setRequestHeader("Accept-Ranges", "bytes"), i.setRequestHeader("Content-Range", "bytes"), i.onload = function () {
                r.decodeAudioData(i.response).then(function (t) {
                    e(t)
                })
            }, i.send()
        }, s = function (t, e) {
            console.log("loading sound", t), window.s = t;
            var i = o(t);
            r.decodeAudioData(i).then(function (t) {
                e(t)
            })
        };
        t.loadSound = function (t, e, i) {
            "base64" == e.type ? s(t, i) : h(t, i)
        };
        var a = function () {
            var t = !0, e = !1, i = this, n = null;
            this.play = function (o, h) {
                t = !1, n = r.createBufferSource(), n.buffer = o, e = h, n.loop = h, n.connect(r.destination), n.start(0), n.onended = function () {
                    i.stop()
                }
            }, this.stop = function () {
                n && (n.stop(), n.disconnect(r.destination)), n = null, t = !0, e = !1
            }, this.isFree = function () {
                return console.log("isfree", t), t
            }
        }, c = function (t) {
            for (var e = [], i = 0; i < t; i++)e.push(new a);
            this.getFreePlayer = function () {
                for (var i = 0; i < t; i++)if (e[i].isFree())return e[i];
                return null
            }
        }, u = new c(5);
        e.sound = {}, e.sound.play = function (t, e) {
            var n = u.getFreePlayer();
            n && n.play(i.bundle.soundList.find({name: t})._buffer, e)
        }
    }(), function () {
        i.Collider = function () {
            var t;
            this.setUp = function () {
                var i = e.sceneManager.getCurrScene();
                t = i.getAllGameObjects()
            }, this.check = function (i, n, r) {
                if (!i.rigid)return i.posX = n, void(i.posY = r);
                var o = t.some(function (t) {
                    if (t.rigid && i != t) {
                        var h = i.getRect();
                        return h.x = n, h.y = r, e.Math.isRectIntersectRect(h, t.getRect()) ? (o = !0, i.trigger("collide", t), !0) : void 0
                    }
                });
                return o || (i.posX = n, i.posY = r), o
            }
        }
    }(), e.commonBehaviour.draggable = Class.extend({
        _parameters: {}, _gameObject: null, initialize: function (t, e) {
            this._gameObject = t, this._parameters = e
        }, onCreate: function () {
            var t = this, e = this._gameObject;
            t._mouseDown = !1;
            var i = 0, n = 0, r = e.getScene();
            e.on("click", function (e) {
                t._mouseDown = !0, i = e.objectX, n = e.objectY
            }), r.on("mouseMove", function (r) {
                t._mouseDown && (e.posX = r.screenX - i, e.posY = r.screenY - n)
            })
        }, onUpdate: function () {
            e.mouse.isMouseDown || (this._mouseDown = !1)
        }
    }, {parameters: {}, description: "draggable behaviour"}), function () {
        if (i.bundle = new i.Bundle({
                sound: [],
                spriteSheet: [{
                    resourcePath: "resources/spriteSheet/bird.png",
                    width: 551,
                    height: 304,
                    name: "bird",
                    numOfFramesH: 5,
                    numOfFramesV: 3,
                    type: "spriteSheet",
                    id: "1879_7247_15"
                }, {
                    name: "cloud",
                    resourcePath: "resources/spriteSheet/cloud.png",
                    width: 300,
                    height: 190,
                    type: "spriteSheet",
                    numOfFramesH: 1,
                    numOfFramesV: 1,
                    id: "1501_7424_265"
                }, {
                    _frameWidth: 0,
                    _frameHeight: 0,
                    name: "ss",
                    resourcePath: "resources/spriteSheet/ss.jpg",
                    width: 192,
                    height: 263,
                    type: "spriteSheet",
                    numOfFramesH: 1,
                    numOfFramesV: 1,
                    id: "6873_5321_13"
                }, {
                    _frameWidth: 0,
                    _frameHeight: 0,
                    resourcePath: "resources/spriteSheet/particle.png",
                    width: 16,
                    height: 16,
                    name: "particle",
                    type: "spriteSheet",
                    numOfFramesH: 1,
                    numOfFramesV: 1,
                    id: "3319_5653_33"
                }],
                frameAnimation: [{
                    name: "fly",
                    frames: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
                    type: "frameAnimation",
                    duration: 1e3,
                    id: "2195_5056_19"
                }, {
                    _timeForOneFrame: 0,
                    frames: [1, 2],
                    name: "w",
                    type: "frameAnimation",
                    duration: 1e3,
                    id: "4411_8126_129"
                }],
                font: [{
                    name: "default",
                    fontContext: {
                        symbols: {
                            0: {x: 240, y: 0, width: 15, height: 29},
                            1: {x: 255, y: 0, width: 15, height: 29},
                            2: {x: 270, y: 0, width: 15, height: 29},
                            3: {x: 285, y: 0, width: 15, height: 29},
                            4: {x: 301, y: 0, width: 15, height: 29},
                            5: {x: 0, y: 29, width: 15, height: 29},
                            6: {x: 15, y: 29, width: 15, height: 29},
                            7: {x: 30, y: 29, width: 15, height: 29},
                            8: {x: 45, y: 29, width: 15, height: 29},
                            9: {x: 60, y: 29, width: 15, height: 29},
                            " ": {x: 0, y: 0, width: 15, height: 29},
                            "!": {x: 15, y: 0, width: 15, height: 29},
                            '"': {x: 30, y: 0, width: 15, height: 29},
                            "#": {x: 45, y: 0, width: 15, height: 29},
                            $: {x: 60, y: 0, width: 15, height: 29},
                            "%": {x: 75, y: 0, width: 15, height: 29},
                            "&": {x: 90, y: 0, width: 15, height: 29},
                            "'": {x: 105, y: 0, width: 15, height: 29},
                            "(": {x: 120, y: 0, width: 15, height: 29},
                            ")": {x: 135, y: 0, width: 15, height: 29},
                            "*": {x: 150, y: 0, width: 15, height: 29},
                            "+": {x: 165, y: 0, width: 15, height: 29},
                            ",": {x: 180, y: 0, width: 15, height: 29},
                            "-": {x: 195, y: 0, width: 15, height: 29},
                            ".": {x: 210, y: 0, width: 15, height: 29},
                            "/": {x: 225, y: 0, width: 15, height: 29},
                            ":": {x: 75, y: 29, width: 15, height: 29},
                            ";": {x: 90, y: 29, width: 15, height: 29},
                            "<": {x: 105, y: 29, width: 15, height: 29},
                            "=": {x: 120, y: 29, width: 15, height: 29},
                            ">": {x: 135, y: 29, width: 15, height: 29},
                            "?": {x: 150, y: 29, width: 15, height: 29},
                            "@": {x: 165, y: 29, width: 15, height: 29},
                            A: {x: 180, y: 29, width: 15, height: 29},
                            B: {x: 195, y: 29, width: 15, height: 29},
                            C: {x: 210, y: 29, width: 15, height: 29},
                            D: {x: 225, y: 29, width: 15, height: 29},
                            E: {x: 240, y: 29, width: 15, height: 29},
                            F: {x: 255, y: 29, width: 15, height: 29},
                            G: {x: 270, y: 29, width: 15, height: 29},
                            H: {x: 285, y: 29, width: 15, height: 29},
                            I: {x: 301, y: 29, width: 15, height: 29},
                            J: {x: 0, y: 58, width: 15, height: 29},
                            K: {x: 15, y: 58, width: 15, height: 29},
                            L: {x: 30, y: 58, width: 15, height: 29},
                            M: {x: 45, y: 58, width: 15, height: 29},
                            N: {x: 60, y: 58, width: 15, height: 29},
                            O: {x: 75, y: 58, width: 15, height: 29},
                            P: {x: 90, y: 58, width: 15, height: 29},
                            Q: {x: 105, y: 58, width: 15, height: 29},
                            R: {x: 120, y: 58, width: 15, height: 29},
                            S: {x: 135, y: 58, width: 15, height: 29},
                            T: {x: 150, y: 58, width: 15, height: 29},
                            U: {x: 165, y: 58, width: 15, height: 29},
                            V: {x: 180, y: 58, width: 15, height: 29},
                            W: {x: 195, y: 58, width: 15, height: 29},
                            X: {x: 210, y: 58, width: 15, height: 29},
                            Y: {x: 225, y: 58, width: 15, height: 29},
                            Z: {x: 240, y: 58, width: 15, height: 29},
                            "[": {x: 255, y: 58, width: 15, height: 29},
                            "\\": {x: 270, y: 58, width: 15, height: 29},
                            "]": {x: 285, y: 58, width: 15, height: 29},
                            "^": {x: 301, y: 58, width: 15, height: 29},
                            _: {x: 0, y: 87, width: 15, height: 29},
                            "`": {x: 15, y: 87, width: 15, height: 29},
                            a: {x: 30, y: 87, width: 15, height: 29},
                            b: {x: 45, y: 87, width: 15, height: 29},
                            c: {x: 60, y: 87, width: 15, height: 29},
                            d: {x: 75, y: 87, width: 15, height: 29},
                            e: {x: 90, y: 87, width: 15, height: 29},
                            f: {x: 105, y: 87, width: 15, height: 29},
                            g: {x: 120, y: 87, width: 15, height: 29},
                            h: {x: 135, y: 87, width: 15, height: 29},
                            i: {x: 150, y: 87, width: 15, height: 29},
                            j: {x: 165, y: 87, width: 15, height: 29},
                            k: {x: 180, y: 87, width: 15, height: 29},
                            l: {x: 195, y: 87, width: 15, height: 29},
                            m: {x: 210, y: 87, width: 15, height: 29},
                            n: {x: 225, y: 87, width: 15, height: 29},
                            o: {x: 240, y: 87, width: 15, height: 29},
                            p: {x: 255, y: 87, width: 15, height: 29},
                            q: {x: 270, y: 87, width: 15, height: 29},
                            r: {x: 285, y: 87, width: 15, height: 29},
                            s: {x: 301, y: 87, width: 15, height: 29},
                            t: {x: 0, y: 116, width: 15, height: 29},
                            u: {x: 15, y: 116, width: 15, height: 29},
                            v: {x: 30, y: 116, width: 15, height: 29},
                            w: {x: 45, y: 116, width: 15, height: 29},
                            x: {x: 60, y: 116, width: 15, height: 29},
                            y: {x: 75, y: 116, width: 15, height: 29},
                            z: {x: 90, y: 116, width: 15, height: 29},
                            "{": {x: 105, y: 116, width: 15, height: 29},
                            "|": {x: 120, y: 116, width: 15, height: 29},
                            "}": {x: 135, y: 116, width: 15, height: 29},
                            "~": {x: 150, y: 116, width: 15, height: 29},
                            "А": {x: 165, y: 116, width: 15, height: 29},
                            "Б": {x: 180, y: 116, width: 15, height: 29},
                            "В": {x: 195, y: 116, width: 15, height: 29},
                            "Г": {x: 210, y: 116, width: 15, height: 29},
                            "Д": {x: 225, y: 116, width: 15, height: 29},
                            "Е": {x: 240, y: 116, width: 15, height: 29},
                            "Ж": {x: 255, y: 116, width: 15, height: 29},
                            "З": {x: 270, y: 116, width: 15, height: 29},
                            "И": {x: 285, y: 116, width: 15, height: 29},
                            "Й": {x: 301, y: 116, width: 15, height: 29},
                            "К": {x: 0, y: 145, width: 15, height: 29},
                            "Л": {x: 15, y: 145, width: 15, height: 29},
                            "М": {x: 30, y: 145, width: 15, height: 29},
                            "Н": {x: 45, y: 145, width: 15, height: 29},
                            "О": {x: 60, y: 145, width: 15, height: 29},
                            "П": {x: 75, y: 145, width: 15, height: 29},
                            "Р": {x: 90, y: 145, width: 15, height: 29},
                            "С": {x: 105, y: 145, width: 15, height: 29},
                            "Т": {x: 120, y: 145, width: 15, height: 29},
                            "У": {x: 135, y: 145, width: 15, height: 29},
                            "Ф": {x: 150, y: 145, width: 15, height: 29},
                            "Х": {x: 165, y: 145, width: 15, height: 29},
                            "Ц": {x: 180, y: 145, width: 15, height: 29},
                            "Ч": {x: 195, y: 145, width: 15, height: 29},
                            "Ш": {x: 210, y: 145, width: 15, height: 29},
                            "Щ": {x: 225, y: 145, width: 15, height: 29},
                            "Ъ": {x: 240, y: 145, width: 15, height: 29},
                            "Ы": {x: 255, y: 145, width: 15, height: 29},
                            "Ь": {x: 270, y: 145, width: 15, height: 29},
                            "Э": {x: 285, y: 145, width: 15, height: 29},
                            "Ю": {x: 301, y: 145, width: 15, height: 29},
                            "Я": {x: 0, y: 174, width: 15, height: 29},
                            "а": {x: 15, y: 174, width: 15, height: 29},
                            "б": {x: 30, y: 174, width: 15, height: 29},
                            "в": {x: 45, y: 174, width: 15, height: 29},
                            "г": {x: 60, y: 174, width: 15, height: 29},
                            "д": {x: 75, y: 174, width: 15, height: 29},
                            "е": {x: 90, y: 174, width: 15, height: 29},
                            "ж": {x: 105, y: 174, width: 15, height: 29},
                            "з": {x: 120, y: 174, width: 15, height: 29},
                            "и": {x: 135, y: 174, width: 15, height: 29},
                            "й": {x: 150, y: 174, width: 15, height: 29},
                            "к": {x: 165, y: 174, width: 15, height: 29},
                            "л": {x: 180, y: 174, width: 15, height: 29},
                            "м": {x: 195, y: 174, width: 15, height: 29},
                            "н": {x: 210, y: 174, width: 15, height: 29},
                            "о": {
                                x: 225,
                                y: 174, width: 15, height: 29
                            },
                            "п": {x: 240, y: 174, width: 15, height: 29},
                            "р": {x: 255, y: 174, width: 15, height: 29},
                            "с": {x: 270, y: 174, width: 15, height: 29},
                            "т": {x: 285, y: 174, width: 15, height: 29},
                            "у": {x: 301, y: 174, width: 15, height: 29},
                            "ф": {x: 0, y: 203, width: 15, height: 29},
                            "х": {x: 15, y: 203, width: 15, height: 29},
                            "ц": {x: 30, y: 203, width: 15, height: 29},
                            "ч": {x: 45, y: 203, width: 15, height: 29},
                            "ш": {x: 60, y: 203, width: 15, height: 29},
                            "щ": {x: 75, y: 203, width: 15, height: 29},
                            "ъ": {x: 90, y: 203, width: 15, height: 29},
                            "ы": {x: 105, y: 203, width: 15, height: 29},
                            "ь": {x: 120, y: 203, width: 15, height: 29},
                            "э": {x: 135, y: 203, width: 15, height: 29},
                            "ю": {x: 150, y: 203, width: 15, height: 29},
                            "я": {x: 165, y: 203, width: 15, height: 29},
                            "ѐ": {x: 180, y: 203, width: 15, height: 29},
                            "ё": {x: 195, y: 203, width: 15, height: 29},
                            "ђ": {x: 210, y: 203, width: 15, height: 29},
                            "ѓ": {x: 225, y: 203, width: 15, height: 29},
                            "є": {x: 240, y: 203, width: 15, height: 29},
                            "ѕ": {x: 255, y: 203, width: 15, height: 29},
                            "і": {x: 270, y: 203, width: 15, height: 29},
                            "ї": {x: 285, y: 203, width: 15, height: 29},
                            "ј": {x: 301, y: 203, width: 15, height: 29},
                            "љ": {x: 0, y: 232, width: 15, height: 29},
                            "њ": {x: 15, y: 232, width: 15, height: 29},
                            "ћ": {x: 30, y: 232, width: 15, height: 29}
                        }, width: 320, height: 261
                    },
                    type: "font",
                    fontColor: "black",
                    fontSize: 25,
                    fontFamily: "Monospace",
                    resourcePath: "resources/font/default.png",
                    id: "6991_3497_4"
                }],
                gameObject: [{
                    spriteSheetId: "1879_7247_15",
                    width: 110,
                    height: 101,
                    name: "bird",
                    type: "gameObject",
                    commonBehaviour: [{
                        name: "draggable",
                        parameters: {},
                        id: "6616_0188_20",
                        type: "commonBehaviour",
                        description: ""
                    }],
                    frameAnimationIds: ["2195_5056_19"],
                    id: "5139_0458_16",
                    rigid: 0,
                    groupName: "",
                    currFrameIndex: 0,
                    _sprPosX: 0,
                    _sprPosY: 0,
                    velX: 0,
                    velY: 0,
                    posX: 0,
                    posY: 0
                }, {
                    spriteSheetId: "3319_5653_33",
                    currFrameIndex: 0,
                    _sprPosX: 0,
                    _sprPosY: 0,
                    name: "particle",
                    width: 16,
                    height: 16,
                    type: "gameObject",
                    commonBehaviour: [],
                    velX: 0,
                    velY: 0,
                    frameAnimationIds: [],
                    rigid: !0,
                    groupName: "",
                    posX: 0,
                    posY: 0,
                    id: "1492_9912_46"
                }, {
                    spriteSheetId: "1501_7424_265",
                    currFrameIndex: 0,
                    _sprPosX: 0,
                    _sprPosY: 0,
                    name: "cloud",
                    width: 300,
                    height: 190,
                    type: "gameObject",
                    commonBehaviour: [],
                    velX: 0,
                    velY: 0,
                    frameAnimationIds: [],
                    rigid: 0,
                    groupName: "",
                    posX: 0,
                    posY: 0,
                    id: "3811_8241_75"
                }],
                layer: [{
                    name: "ll",
                    type: "layer",
                    gameObjectProps: [{
                        text: "hello",
                        width: 75,
                        height: 29,
                        type: "userInterface",
                        subType: "textField",
                        groupName: "",
                        posX: 15,
                        posY: 20,
                        name: "textField1",
                        protoId: {},
                        id: "4343_5960_457",
                        fontId: "6991_3497_4"
                    }, {
                        spriteSheetId: "1879_7247_15",
                        width: 110,
                        height: 101,
                        name: "bird",
                        type: "gameObject",
                        commonBehaviour: [{
                            name: "draggable",
                            parameters: {},
                            id: "6616_0188_20",
                            type: "commonBehaviour",
                            description: ""
                        }],
                        frameAnimationIds: ["2195_5056_19"],
                        rigid: 0,
                        groupName: "",
                        currFrameIndex: 0,
                        _sprPosX: 0,
                        _sprPosY: 0,
                        velX: 0,
                        velY: 0,
                        posX: 67,
                        posY: 105,
                        protoId: "5139_0458_16",
                        id: "4438_6727_4"
                    }, {
                        spriteSheetId: "1501_7424_265",
                        currFrameIndex: 0,
                        _sprPosX: 0,
                        _sprPosY: 0,
                        name: "cloud",
                        width: 300,
                        height: 190,
                        type: "gameObject",
                        commonBehaviour: [],
                        velX: 0,
                        velY: 0,
                        frameAnimationIds: [],
                        rigid: 1,
                        groupName: "",
                        posX: 182,
                        posY: 94,
                        protoId: "3811_8241_75",
                        id: "5334_0273_76"
                    }, {
                        spriteSheetId: "1501_7424_265",
                        currFrameIndex: 0,
                        _sprPosX: 0,
                        _sprPosY: 0,
                        name: "cloud",
                        width: 300,
                        height: 190,
                        type: "gameObject",
                        commonBehaviour: [],
                        velX: 0,
                        velY: 0,
                        frameAnimationIds: [],
                        rigid: 0,
                        groupName: "",
                        posX: 238,
                        posY: -9,
                        protoId: "3811_8241_75",
                        id: "4184_0987_4"
                    }],
                    id: "3534_2050_13"
                }, {name: "tiles", type: "layer", gameObjectProps: [], id: "6172_4586_12"}],
                scene: [{
                    name: "m",
                    type: "scene",
                    layerProps: [{type: "layer", protoId: "3534_2050_13", id: "0914_2087_14"}],
                    id: "7174_5436_12"
                }],
                particleSystem: [{
                    gameObjectId: "1492_9912_46",
                    numOfParticlesToEmit: {from: 50, to: 60},
                    particleAngle: {from: -2.6660626056852346, to: -2.728463821311392},
                    particleVelocity: {from: 90, to: 100},
                    name: "ps",
                    type: "particleSystem",
                    id: "0252_1160_4",
                    particleLiveTime: {from: 101, to: 300}
                }],
                gameProps: {width: 540, height: 300, scaleToFullScreen: !0}
            }), i.scripts = {}, i.scripts.gameObject = {}, i.scripts.scene = {}, i.scripts.gameObject["a.js"] = function (t, i) {
                e.models.Behaviour.extend({
                    onCreate: function () {
                    }, onUpdate: function (t) {
                    }, onDestroy: function () {
                    }
                }), t.onCreate = onCreate, t.onUpdate = onUpdate, t.onDestroy = onDestroy
            }, i.scripts.gameObject["b.js"] = function (t, i) {
                e.models.Behaviour.extend({
                    onCreate: function () {
                        this.getFrAnimation("fly").play()
                    }, onUpdate: function (t) {
                        this.posX > 400 && (this.posX = -300)
                    }, onDestroy: function () {
                    }
                }), t.onCreate = onCreate, t.onUpdate = onUpdate, t.onDestroy = onDestroy
            }, i.scripts.gameObject["b2.js"] = function (t, i) {
                e.models.Behaviour.extend({
                    onCreate: function () {
                    }, onUpdate: function (t) {
                    }, onDestroy: function () {
                    }
                }), t.onCreate = onCreate, t.onUpdate = onUpdate, t.onDestroy = onDestroy
            }, i.scripts.gameObject["bird.js"] = function (t, e) {
                function n() {
                    h = i.bundle.particleSystemList.get(0)
                }

                function r(t) {
                    e.posX > 800 && (console.log("before", e.posX), e.posX = -300, console.log("after", e.posX)), h.emit(e.posX + 20, e.posY + 50), e.posX > 800 && (e.posX = -300)
                }

                function o() {
                }

                var h;
                t.onCreate = n, t.onUpdate = r, t.onDestroy = o
            }, i.scripts.gameObject["cloud.js"] = function (t, e) {
                function i() {
                    e.velX = 100
                }

                function n(t) {
                    e.posX > 800 && (e.posX = -300)
                }

                function r() {
                }

                t.onCreate = i, t.onUpdate = n, t.onDestroy = r
            }, i.scripts.gameObject["particle.js"] = function (t, e) {
                function i() {
                }

                function n(t) {
                }

                function r() {
                }

                t.onCreate = i, t.onUpdate = n, t.onDestroy = r
            }, i.scripts.gameObject["q.js"] = function (t, i) {
                e.models.Behaviour.extend({
                    onCreate: function () {
                    }, onUpdate: function (t) {
                    }, onDestroy: function () {
                    }
                }), t.onCreate = onCreate, t.onUpdate = onUpdate, t.onDestroy = onDestroy
            }, i.scripts.gameObject["sprite.js"] = function (t, i) {
                e.models.Behaviour.extend({
                    onCreate: function () {
                    }, onUpdate: function (t) {
                    }, onDestroy: function () {
                    }
                }), t.onCreate = onCreate, t.onUpdate = onUpdate, t.onDestroy = onDestroy
            }, i.scripts.scene["m.js"] = function (t, e) {
                function i() {
                    console.trace("scene created", e);
                    var t = e.findGameObject("textField1"), i = e.findGameObject("bird");
                    i.getFrAnimation("fly").play(), t.setText("Привет (нажми на меня)"), i.on("click", function (e) {
                        t.setText("Ура!!!!!"), i.velX = 200
                    })
                }

                function n(t) {
                }

                function r() {
                }

                t.onCreate = i, t.onUpdate = n, t.onDestroy = r
            }, i.scripts.scene["q.js"] = function (t, i) {
                e.models.Behaviour.extend({
                    onCreate: function () {
                    }, onUpdate: function (t) {
                    }, onDestroy: function () {
                    }
                }), t.onCreate = onCreate, t.onUpdate = onUpdate, t.onDestroy = onDestroy
            }, i.bundle.prepare(), !i.bundle.sceneList.size())throw"at least one scene must be created";
        i.renderer = new i.Renderer, e.sceneManager = new i.SceneManager, i.collider = new i.Collider, e.keyboard = new i.Keyboard, i.bundle.prepareGameObjectScripts(), window.addEventListener("load", function () {
            document.body.ontouchstart = function (t) {
                return t.preventDefault(), !1
            }, i.renderer.init(), e.mouse = new i.Mouse(i.renderer.getCanvas()), e.sceneManager.setScene(i.bundle.sceneList.get(0))
        })
    }()
}();