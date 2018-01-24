!function (t) {
    function e(i) {
        if (r[i])return r[i].exports;
        var n = r[i] = {i: i, l: !1, exports: {}};
        return t[i].call(n.exports, n, n.exports, e), n.l = !0, n.exports
    }

    var r = {};
    e.m = t, e.c = r, e.d = function (t, r, i) {
        e.o(t, r) || Object.defineProperty(t, r, {configurable: !1, enumerable: !0, get: i})
    }, e.n = function (t) {
        var r = t && t.__esModule ? function () {
                return t.default
            } : function () {
                return t
            };
        return e.d(r, "a", r), r
    }, e.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, e.p = "", e(e.s = 31)
}([function (t, e, r) {
    "use strict";
    var i, n, o, s, a, u, h, c = this && this.__extends || function () {
            var t = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var r in e)e.hasOwnProperty(r) && (t[r] = e[r])
                };
            return function (e, r) {
                function i() {
                    this.constructor = e
                }

                t(e, r), e.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
            }
        }(), f = this && this.__decorate || function (t, e, r, i) {
            var n, o, s = arguments.length, a = s < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, r) : i;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, r, i); else for (o = t.length - 1; o >= 0; o--)(n = t[o]) && (a = (s < 3 ? n(a) : s > 3 ? n(e, r, a) : n(e, r)) || a);
            return s > 3 && a && Object.defineProperty(e, r, a), a
        };
    Object.defineProperty(e, "__esModule", {value: !0}), i = r(24), n = r(25), o = r(54), s = r(26), a = r(6), u = r(1), h = function (t) {
        function e(e) {
            var r = t.call(this) || this;
            return r.id = null, r.name = null, r.width = 0, r.height = 0, r.pos = new u.default(0, 0), r.scale = new u.default(1, 1), r.angle = 0, r.alpha = 1, r.layerId = null, r.fixedToCamera = !1, r.rigid = !1, r._tweens = [], r._rect = new a.default(0, 0), r.game = e, r._emitter = new o.default, r
        }

        return c(e, t), e.prototype.setIndividualBehaviour = function (t) {
        }, e.prototype.setCommonBehaviour = function () {
        }, e.prototype.onShow = function () {
        }, e.prototype.getRect = function () {
            return this._rect.set(this.pos.x, this.pos.y, this.width, this.height), this._rect
        }, e.prototype.tween = function (t) {
            var e = new n.default(t);
            this._tweens.push(e)
        }, e.prototype.update = function (t, e) {
            var r = this;
            this._tweens.forEach(function (e, i) {
                e.update(t), e.isCompleted() && r._tweens.splice(i, 1)
            })
        }, e.prototype.clone = function (t) {
            var e = this.constructor, r = new e(this.game);
            return r._cloner = this, r.fromJSON(this.toJSON(t), !0)
        }, e.prototype.on = function (t, e) {
            return this._emitter.on(t, e), this
        }, e.prototype.trigger = function (t, e) {
            this._emitter.trigger(t, e)
        }, e.prototype.updateCloner = function (t) {
            return
        }, e = f([s.Transient({game: !0, rigidBody: !0})], e)
    }(i.default), e.default = h
}, function (t, e, r) {
    "use strict";
    var i, n;
    Object.defineProperty(e, "__esModule", {value: !0}), i = r(11), n = function () {
        function t(t, e) {
            void 0 === t && (t = 0), void 0 === e && (e = 0), this.x = 0, this.y = 0, this.x = t, this.y = e
        }

        return t.fromPool = function () {
            return t.pool.getNextObject()
        }, t.prototype.setXY = function (t, e) {
            return this.x = t, this.y = e, this
        }, t.prototype.setX = function (t) {
            return this.x = t, this
        }, t.prototype.setY = function (t) {
            return this.y = t, this
        }, t.prototype.set = function (t) {
            return this.setXY(t.x, t.y), this
        }, t.prototype.add = function (t) {
            return this.addXY(t.x, t.y), this
        }, t.prototype.substract = function (t) {
            return this.addXY(-t.x, -t.y), this
        }, t.prototype.multiply = function (t) {
            return this.x *= t, this.y *= t, this
        }, t.prototype.addXY = function (t, e) {
            return this.x += t, this.y += e, this
        }, t.prototype.addX = function (t) {
            return this.x += t, this
        }, t.prototype.addY = function (t) {
            return this.y += t, this
        }, t.prototype.negative = function () {
            return this.x = -this.x, this.y = -this.y, this
        }, t.prototype.equal = function (t) {
            return this.x === t && this.y === t
        }, t.prototype.equalXY = function (t, e) {
            return this.x === t && this.y === e
        }, t.prototype.equalPoint = function (t) {
            return this.x === t.x && this.y === t.y
        }, t.prototype.clone = function () {
            return new t(this.x, this.y)
        }, t.prototype.fromJSON = function (t) {
            this.setXY(t.x, t.y)
        }, t.prototype.toJSON = function () {
            return {x: this.x, y: this.y}
        }, t.prototype.toArray = function () {
            return this._arr || (this._arr = new Array(2)), this._arr[0] = this.x, this._arr[1] = this.y, this._arr
        }, t.pool = new i.default(t, 4), t
    }(), e.default = n
}, function (t, e, r) {
    "use strict";
    var i, n;
    Object.defineProperty(e, "__esModule", {value: !0}), i = r(3), n = function () {
        function t(t, e, r) {
            var n = i.compileShader(t, e, t.VERTEX_SHADER), o = i.compileShader(t, r, t.FRAGMENT_SHADER);
            this.program = i.createProgram(t, n, o), t.deleteShader(n), t.deleteShader(o), this.uniforms = i.extractUniforms(t, this.program), this.attributes = i.extractAttributes(t, this.program), this.gl = t
        }

        return t.prototype.getProgram = function () {
            return this.program
        }, t.prototype.bind = function () {
            this.gl.useProgram(this.program), t.currentProgram = this
        }, t.prototype.setUniform = function (t, e) {
            var r = this.uniforms[t];
            r.setter(this.gl, r.location, e)
        }, t.prototype.bindBuffer = function (t, e) {
            this.gl.bindBuffer(this.gl.ARRAY_BUFFER, t.getGlBuffer());
            var r = this.attributes[e];
            this.gl.enableVertexAttribArray(r), this.gl.vertexAttribPointer(r, t.getItemSize(), t.getItemType(), !1, 0, 0)
        }, t.prototype.destroy = function () {
            this.gl.deleteProgram(this.program)
        }, t.currentProgram = null, t
    }(), e.default = n
}, function (t, e, r) {
    "use strict";
    var i, n, o;
    Object.defineProperty(e, "__esModule", {value: !0}), e.compileShader = function (t, e, r) {
        var i, n;
        if (i = t.createShader(r), t.shaderSource(i, e), t.compileShader(i), !t.getShaderParameter(i, t.COMPILE_STATUS))throw n = t.getShaderInfoLog(i), t.deleteShader(i), n;
        return i
    }, e.createProgram = function (t, e, r) {
        var i = t.createProgram();
        if (t.attachShader(i, e), t.attachShader(i, r), t.linkProgram(i), !t.getProgramParameter(i, t.LINK_STATUS))throw t.deleteProgram(i), t.getProgramInfoLog(i);
        return i
    }, i = null, e.GL_TYPE = {
        FLOAT: "float",
        FLOAT_VEC2: "vec2",
        FLOAT_VEC3: "vec3",
        FLOAT_VEC4: "vec4",
        INT: "int",
        INT_VEC2: "ivec2",
        INT_VEC3: "ivec3",
        INT_VEC4: "ivec4",
        BOOL: "bool",
        BOOL_VEC2: "bvec2",
        BOOL_VEC3: "bvec3",
        BOOL_VEC4: "bvec4",
        FLOAT_MAT2: "mat2",
        FLOAT_MAT3: "mat3",
        FLOAT_MAT4: "mat4",
        SAMPLER_2D: "sampler2D"
    }, n = function (t, r) {
        var n, o, s;
        if (!i)for (n = Object.keys(e.GL_TYPE), i = {}, o = 0; o < n.length; ++o)s = n[o], i[t[s]] = e.GL_TYPE[s];
        return i[r]
    }, e.extractUniforms = function (t, r) {
        var i, o, s, a, u = t.getProgramParameter(r, t.ACTIVE_UNIFORMS), h = {};
        for (i = 0; i < u; i++)o = t.getActiveUniform(r, i), s = n(t, o.type), a = t.getUniformLocation(r, o.name), h[o.name] = {
            type: s,
            size: o.size,
            location: a,
            setter: e.getUniformSetter(o.size, s)
        };
        return h
    }, e.extractAttributes = function (t, e) {
        var r, i, n, o = t.getProgramParameter(e, t.ACTIVE_ATTRIBUTES), s = {};
        for (r = 0; r < o; r++)i = t.getActiveAttrib(e, r), n = t.getAttribLocation(e, i.name), s[i.name] = n;
        return console.log(s), s
    }, o = {
        check: function (t) {
            if (isNaN(t))throw"can not set uniform with value " + t + ": expected argument of type number"
        }
    }, e.getUniformSetter = function (t, e) {
        if (1 === t)switch (e) {
            case"float":
                return function (t, e, r) {
                    t.uniform1f(e, r)
                };
            case"vec2":
                return function (t, e, r) {
                    t.uniform2f(e, r[0], r[1])
                };
            case"vec3":
                return function (t, e, r) {
                    t.uniform3f(e, r[0], r[1], r[2])
                };
            case"vec4":
                return function (t, e, r) {
                    t.uniform4f(e, r[0], r[1], r[2], r[3])
                };
            case"int":
                return function (t, e, r) {
                    t.uniform1i(e, r)
                };
            case"ivec2":
                return function (t, e, r) {
                    t.uniform2i(e, r[0], r[1])
                };
            case"ivec3":
                return function (t, e, r) {
                    t.uniform3i(e, r[0], r[1], r[2])
                };
            case"ivec4":
                return function (t, e, r) {
                    t.uniform4i(e, r[0], r[1], r[2], r[3])
                };
            case"bool":
                return function (t, e, r) {
                    t.uniform1i(e, r)
                };
            case"bvec2":
                return function (t, e, r) {
                    t.uniform2i(e, r[0], r[1])
                };
            case"bvec3":
                return function (t, e, r) {
                    t.uniform3i(e, r[0], r[1], r[2])
                };
            case"bvec4":
                return function (t, e, r) {
                    t.uniform4i(e, r[0], r[1], r[2], r[3])
                };
            case"mat2":
                return function (t, e, r) {
                    t.uniformMatrix2fv(e, !1, r)
                };
            case"mat3":
                return function (t, e, r) {
                    t.uniformMatrix3fv(e, !1, r)
                };
            case"mat4":
                return function (t, e, r) {
                    t.uniformMatrix4fv(e, !1, r)
                };
            case"sampler2D":
                return function (t, e, r) {
                    t.uniform1i(e, r)
                }
        } else switch (e) {
            case"float":
                return function (t, e, r) {
                    t.uniform1fv(e, r)
                };
            case"vec2":
                return function (t, e, r) {
                    t.uniform2fv(e, r)
                };
            case"vec3":
                return function (t, e, r) {
                    t.uniform3fv(e, r)
                };
            case"vec4":
                return function (t, e, r) {
                    t.uniform4fv(e, r)
                };
            case"int":
                return function (t, e, r) {
                    t.uniform1iv(e, r)
                };
            case"ivec2":
                return function (t, e, r) {
                    t.uniform2iv(e, r)
                };
            case"ivec3":
                return function (t, e, r) {
                    t.uniform3iv(e, r)
                };
            case"ivec4":
                return function (t, e, r) {
                    t.uniform4iv(e, r)
                };
            case"bool":
                return function (t, e, r) {
                    t.uniform1iv(e, r)
                };
            case"bvec2":
                return function (t, e, r) {
                    t.uniform2iv(e, r)
                };
            case"bvec3":
                return function (t, e, r) {
                    t.uniform3iv(e, r)
                };
            case"bvec4":
                return function (t, e, r) {
                    t.uniform4iv(e, r)
                };
            case"sampler2D":
                return function (t, e, r) {
                    t.uniform1iv(e, r)
                }
        }
    }
}, function (t, e, r) {
    "use strict";
    var i, n;
    Object.defineProperty(e, "__esModule", {value: !0}), i = r(9), n = r(1), e.isPointInRect = function (t, e, r) {
        return t.x > e.x && t.x < e.x + e.width && t.y > e.y && t.y < e.y + e.height
    }, e.overlapTest = function (t, e) {
        return t.x < e.x + e.width && t.x + t.width > e.x && t.y < e.y + e.height && t.y + t.height > e.y
    }, e.radToDeg = function (t) {
        return 180 * t / Math.PI
    }, e.degToRad = function (t) {
        return t * Math.PI / 180
    }, e.random = function (t, e) {
        var r, i;
        return t > e && (r = t, t = e, e = r), i = Math.random() * (e - t) + t, i > e ? i = e : i < t && (i = t), i
    }, e.unProject = function (t, e, r, o) {
        var s = 2 * t.x / e - 1, a = 2 * t.y / r - 1, u = i.inverse(o), h = [s, a, 0, 1], c = i.multMatrixVec(u, h);
        return c[0] = (c[0] / 2 + .5) * e, c[1] = (c[1] / 2 + .5) * r, new n.default(c[0], c[1])
    }, e.linear = function (t, e, r, i) {
        return r * t / i + e
    }, e.easeInQuad = function (t, e, r, i) {
        return t /= i, r * t * t + e
    }, e.easeOutQuad = function (t, e, r, i) {
        return t /= i, -r * t * (t - 2) + e
    }, e.easeInOutQuad = function (t, e, r, i) {
        return (t /= i / 2) < 1 ? r / 2 * t * t + e : (t--, -r / 2 * (t * (t - 2) - 1) + e)
    }, e.easeInCubic = function (t, e, r, i) {
        return t /= i, r * t * t * t + e
    }, e.easeOutCubic = function (t, e, r, i) {
        return t /= i, t--, r * (t * t * t + 1) + e
    }, e.easeInOutCubic = function (t, e, r, i) {
        return (t /= i / 2) < 1 ? r / 2 * t * t * t + e : (t -= 2, r / 2 * (t * t * t + 2) + e)
    }, e.easeInQuart = function (t, e, r, i) {
        return t /= i, r * t * t * t * t + e
    }, e.easeOutQuart = function (t, e, r, i) {
        return t /= i, t--, -r * (t * t * t * t - 1) + e
    }, e.easeInOutQuart = function (t, e, r, i) {
        return (t /= i / 2) < 1 ? r / 2 * t * t * t * t + e : (t -= 2, -r / 2 * (t * t * t * t - 2) + e)
    }, e.easeInQuint = function (t, e, r, i) {
        return t /= i, r * t * t * t * t * t + e
    }, e.easeOutQuint = function (t, e, r, i) {
        return t /= i, t--, r * (t * t * t * t * t + 1) + e
    }, e.easeInOutQuint = function (t, e, r, i) {
        return (t /= i / 2) < 1 ? r / 2 * t * t * t * t * t + e : (t -= 2, r / 2 * (t * t * t * t * t + 2) + e)
    }, e.easeInSine = function (t, e, r, i) {
        return -r * Math.cos(t / i * (Math.PI / 2)) + r + e
    }, e.easeOutSine = function (t, e, r, i) {
        return r * Math.sin(t / i * (Math.PI / 2)) + e
    }, e.easeInOutSine = function (t, e, r, i) {
        return -r / 2 * (Math.cos(Math.PI * t / i) - 1) + e
    }, e.easeInExpo = function (t, e, r, i) {
        return r * Math.pow(2, 10 * (t / i - 1)) + e
    }, e.easeOutExpo = function (t, e, r, i) {
        return r * (1 - Math.pow(2, -10 * t / i)) + e
    }, e.easeInOutExpo = function (t, e, r, i) {
        return (t /= i / 2) < 1 ? r / 2 * Math.pow(2, 10 * (t - 1)) + e : (t--, r / 2 * (2 - Math.pow(2, -10 * t)) + e)
    }, e.easeInCirc = function (t, e, r, i) {
        return t /= i, -r * (Math.sqrt(1 - t * t) - 1) + e
    }, e.easeOutCirc = function (t, e, r, i) {
        return t /= i, t--, r * Math.sqrt(1 - t * t) + e
    }, e.easeInOutCirc = function (t, e, r, i) {
        return (t /= i / 2) < 1 ? -r / 2 * (Math.sqrt(1 - t * t) - 1) + e : (t -= 2, r / 2 * (Math.sqrt(1 - t * t) + 1) + e)
    }, e.easeInElastic = function (t, e, r, i) {
        var n = 1.70158, o = 0, s = r;
        return 0 === t ? e : 1 == (t /= i) ? e + r : (o || (o = .3 * i), s < Math.abs(r) ? (s = r, n = o / 4): n= o / (2 * Math.PI) * Math.asin(r / s), -s * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * i - n) * (2 * Math.PI) / o) + e)
    }, e.easeOutElastic = function (t, e, r, i) {
        var n = 1.70158, o = 0, s = r;
        return 0 === t ? e : 1 == (t /= i) ? e + r : (o || (o = .3 * i), s < Math.abs(r) ? (s = r, n = o / 4): n= o / (2 * Math.PI) * Math.asin(r / s), s * Math.pow(2, -10 * t) * Math.sin((t * i - n) * (2 * Math.PI) / o) + r + e)
    }, e.easeInOutElastic = function (t, e, r, i) {
        var n = 1.70158, o = 0, s = r;
        return 0 === t ? e : 2 == (t /= i / 2) ? e + r : (o || (o = i * (.3 * 1.5)), s < Math.abs(r) ? (s = r, n = o / 4): n= o / (2 * Math.PI) * Math.asin(r / s), t < 1 ? s * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * i - n) * (2 * Math.PI) / o) * -.5 + e : s * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * i - n) * (2 * Math.PI) / o) * .5 + r + e)
    }, e.easeInBack = function (t, e, r, i) {
        var n = 1.70158;
        return r * (t /= i) * t * ((n + 1) * t - n) + e
    }, e.easeOutBack = function (t, e, r, i) {
        var n = 1.70158;
        return r * ((t = t / i - 1) * t * ((n + 1) * t + n) + 1) + e
    }, e.easeInOutBack = function (t, e, r, i) {
        var n = 1.70158;
        return (t /= i / 2) < 1 ? r / 2 * (t * t * ((1 + (n *= 1.525)) * t - n)) + e : r / 2 * ((t -= 2) * t * ((1 + (n *= 1.525)) * t + n) + 2) + e
    }, e.easeInBounce = function (t, r, i, n) {
        return i - e.easeOutBounce(n - t, 0, i, n) + r
    }, e.easeOutBounce = function (t, e, r, i) {
        return (t /= i) < 1 / 2.75 ? r * (7.5625 * t * t) + e : t < 2 / 2.75 ? r * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + e : t < 2.5 / 2.75 ? r * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + e : r * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + e
    }, e.easeInOutBounce = function (t, r, i, n) {
        return t < n / 2 ? .5 * e.easeInBounce(2 * t, 0, i, n) + r : .5 * e.easeOutBounce(2 * t - n, 0, i, n) + .5 * i + r
    }
}, function (t, e, r) {
    "use strict";
    var i, n;
    Object.defineProperty(e, "__esModule", {value: !0}), i = function (t, e) {
        return void 0 !== t && (!t.splice && t === e)
    }, n = function () {
        function t(e) {
            this.program = null, this.uniformCache = {}, this.gl = e, t.instances.push(this)
        }

        return t.prototype.bind = function () {
            null !== t.currentInstance && t.currentInstance !== this && t.currentInstance.unbind(), t.currentInstance = this, this.bufferInfo.bind(this.program)
        }, t.prototype.unbind = function () {
            this.bufferInfo.unbind()
        }, t.prototype.destroy = function () {
            this.bufferInfo.destroy(), this.program.destroy()
        }, t.destroyAll = function () {
            t.instances.forEach(function (t) {
                t.destroy()
            })
        }, t.prototype.setUniform = function (t, e) {
            i(this.uniformCache[t], e) || (this.program.setUniform(t, e), this.uniformCache[t] = e)
        }, t.prototype.drawElements = function () {
            this.bufferInfo.draw()
        }, t.prototype.draw = function (t, e) {
            var r = this;
            this.bind(), Object.keys(e).forEach(function (t) {
                return r.setUniform(t, e[t])
            }), t && t.forEach(function (t, e) {
                t.texture.bind(t.name, e, r.program)
            }), this.drawElements()
        }, t.currentInstance = null, t.instances = [], t
    }(), e.default = n
}, function (t, e, r) {
    "use strict";
    var i, n, o;
    Object.defineProperty(e, "__esModule", {value: !0}), i = r(1), n = r(11), o = function () {
        function t(t, e, r, i) {
            void 0 === t && (t = 0), void 0 === e && (e = 0), void 0 === r && (r = 0), void 0 === i && (i = 0), this.set(t, e, r, i)
        }

        return t.prototype.onSet = function () {
            this.right = this.x + this.width, this.bottom = this.y + this.height
        }, t.prototype.set = function (t, e, r, i) {
            return this.x = t, this.y = e, this.width = r, this.height = i, this.onSet(), this
        }, t.prototype.addXY = function (t, e) {
            return this.x += t, this.y += e, this.onSet(), this
        }, t.prototype.addPoint = function (t) {
            return this.addXY(t.x, t.y), this
        }, t.prototype.getPoint = function () {
            return void 0 === this.p && (this.p = new i.default), this.p.setXY(this.x, this.y), this.p
        }, t.prototype.clone = function () {
            return new t(this.x, this.y, this.width, this.height)
        }, t.prototype.toJSON = function () {
            return {x: this.x, y: this.y, width: this.width, height: this.height}
        }, t.prototype.fromJSON = function (t, e, r, i) {
            this.set(t, e, r, i)
        }, t.fromPool = function () {
            return t.rectPool.getNextObject()
        }, t.rectPool = new n.default(t), t
    }(), e.default = o
}, function (t, e, r) {
    "use strict";
    var i, n, o;
    Object.defineProperty(e, "__esModule", {value: !0}), i = r(37), n = r(38), o = function () {
        function t(t, e) {
            if (this.posVertexBuffer = null, this.posIndexBuffer = null, this.texVertexBuffer = null, this.drawMethod = null, this.numOfElementsToDraw = 0, this.gl = t, void 0 === this.drawMethod)throw"can not create BufferInfo: drawMethod not defined";
            this.drawMethod = e.drawMethod, this.posVertexBuffer = new i.default(t), this.posVertexBuffer.setData(e.posVertexInfo.array, e.posVertexInfo.type, e.posVertexInfo.size), this.posVertexBuffer.setAttrName(e.posVertexInfo.attrName), e.posIndexInfo ? (this.posIndexBuffer = new n.default(t), this.posIndexBuffer.setData(e.posIndexInfo.array)) : this.numOfElementsToDraw = this._getNumOfElementsToDraw(this.drawMethod), e.texVertexInfo && (this.texVertexBuffer = new i.default(t), this.texVertexBuffer.setData(e.texVertexInfo.array, e.texVertexInfo.type, e.texVertexInfo.size), this.texVertexBuffer.setAttrName(e.texVertexInfo.attrName))
        }

        return t.prototype.bind = function (t) {
            t.bind(), this.posIndexBuffer && this.posIndexBuffer.bind(), this.posVertexBuffer && this.posVertexBuffer.bind(t), this.texVertexBuffer && this.texVertexBuffer.bind(t)
        }, t.prototype.unbind = function () {
            this.posIndexBuffer && this.posIndexBuffer.unbind(), this.posVertexBuffer && this.posVertexBuffer.unbind(), this.texVertexBuffer && this.texVertexBuffer.unbind()
        }, t.prototype.destroy = function () {
            this.posVertexBuffer && this.posVertexBuffer.destroy(), this.posIndexBuffer && this.posIndexBuffer.destroy(), this.texVertexBuffer && this.texVertexBuffer.destroy()
        }, t.prototype._getNumOfElementsToDraw = function (t) {
            switch (t) {
                case this.gl.LINE_STRIP:
                case this.gl.TRIANGLE_FAN:
                    return this.posVertexBuffer.getBufferLength() / 2;
                default:
                    throw"unknown draw method: " + t
            }
        }, t.prototype.draw = function () {
            null !== this.posIndexBuffer ? this.gl.drawElements(this.drawMethod, this.posIndexBuffer.getBufferLength(), this.gl.UNSIGNED_SHORT, 0) : this.gl.drawArrays(this.drawMethod, 0, this.numOfElementsToDraw)
        }, t
    }(), e.default = o
}, function (t, e, r) {
    "use strict";
    var i, n, o, s = this && this.__extends || function () {
            var t = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var r in e)e.hasOwnProperty(r) && (t[r] = e[r])
                };
            return function (e, r) {
                function i() {
                    this.constructor = e
                }

                t(e, r), e.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
            }
        }();
    Object.defineProperty(e, "__esModule", {value: !0}), i = r(3), n = r(16), o = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e.addAttribute(i.GL_TYPE.FLOAT_VEC4, "a_position"), e.addAttribute(i.GL_TYPE.FLOAT_VEC2, "a_texCoord"), e.addVertexUniform(i.GL_TYPE.FLOAT_MAT4, "u_vertexMatrix"), e.addVertexUniform(i.GL_TYPE.FLOAT_MAT4, "u_textureMatrix"), e.addVarying(i.GL_TYPE.FLOAT_VEC2, "v_texCoord"), e.prependFragmentCodeBlock("\n            vec4 tint(vec4 srcColor,vec4 tintColor){\n                vec3 r = vec3(srcColor) * (1.0 - tintColor.a) +\n                    vec3(tintColor) * tintColor.a;\n                vec4 result = vec4(r,srcColor.a);\n                return result;    \n            }\n        "), e.setVertexMainFn("\n            void main(){\n                gl_Position = u_vertexMatrix * a_position;\n                v_texCoord = (u_textureMatrix * vec4(a_texCoord, 0, 1)).xy;\n            } \n        "), e.addFragmentUniform(i.GL_TYPE.SAMPLER_2D, "texture"), e.addFragmentUniform(i.GL_TYPE.FLOAT, "u_alpha"), e.setFragmentMainFn("\n            void main(){\n                gl_FragColor = texture2D(texture, v_texCoord);\n                gl_FragColor.a *= u_alpha;\n            }\n        "), e
        }

        return s(e, t), e
    }(n.default), e.default = o
}, function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0}), e.makeIdentity = function () {
        return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
    }, e.makeZToWMatrix = function (t) {
        return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, t, 0, 0, 0, 1]
    }, e.make2DProjection = function (t, e, r) {
        return [2 / t, 0, 0, 0, 0, -2 / e, 0, 0, 0, 0, 2 / r, 0, -1, 1, 0, 1]
    }, e.ortho = function (t, e, r, i, n, o) {
        var s = 1 / (t - e), a = 1 / (r - i), u = 1 / (n - o), h = new Array(16);
        return h[0] = -2 * s, h[1] = 0, h[2] = 0, h[3] = 0, h[4] = 0, h[5] = -2 * a, h[6] = 0, h[7] = 0, h[8] = 0, h[9] = 0, h[10] = 2 * u, h[11] = 0, h[12] = (t + e) * s, h[13] = (i + r) * a, h[14] = (o + n) * u, h[15] = 1, h
    }, e.perspective = function (t, e, r, i) {
        var n = 1 / Math.tan(t / 2), o = 1 / (r - i), s = new Array(16);
        return s[0] = n / e, s[1] = 0, s[2] = 0, s[3] = 0, s[4] = 0, s[5] = n, s[6] = 0, s[7] = 0, s[8] = 0, s[9] = 0, s[10] = (i + r) * o, s[11] = -1, s[12] = 0, s[13] = 0, s[14] = 2 * i * r * o, s[15] = 0, s
    }, e.makeTranslation = function (t, e, r) {
        return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, t, e, r, 1]
    }, e.makeXRotation = function (t) {
        var e = Math.cos(t), r = Math.sin(t);
        return [1, 0, 0, 0, 0, e, r, 0, 0, -r, e, 0, 0, 0, 0, 1]
    }, e.makeYRotation = function (t) {
        var e = Math.cos(t), r = Math.sin(t);
        return [e, 0, -r, 0, 0, 1, 0, 0, r, 0, e, 0, 0, 0, 0, 1]
    }, e.makeZRotation = function (t) {
        var e = Math.cos(t), r = Math.sin(t);
        return [e, r, 0, 0, -r, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
    }, e.makeScale = function (t, e, r) {
        return [t, 0, 0, 0, 0, e, 0, 0, 0, 0, r, 0, 0, 0, 0, 1]
    }, e.matrixMultiply = function (t, e) {
        var r = new Array(16);
        return r[0] = t[0] * e[0] + t[1] * e[4] + t[2] * e[8] + t[3] * e[12], r[1] = t[0] * e[1] + t[1] * e[5] + t[2] * e[9] + t[3] * e[13], r[2] = t[0] * e[2] + t[1] * e[6] + t[2] * e[10] + t[3] * e[14], r[3] = t[0] * e[3] + t[1] * e[7] + t[2] * e[11] + t[3] * e[15], r[4] = t[4] * e[0] + t[5] * e[4] + t[6] * e[8] + t[7] * e[12], r[5] = t[4] * e[1] + t[5] * e[5] + t[6] * e[9] + t[7] * e[13], r[6] = t[4] * e[2] + t[5] * e[6] + t[6] * e[10] + t[7] * e[14], r[7] = t[4] * e[3] + t[5] * e[7] + t[6] * e[11] + t[7] * e[15], r[8] = t[8] * e[0] + t[9] * e[4] + t[10] * e[8] + t[11] * e[12], r[9] = t[8] * e[1] + t[9] * e[5] + t[10] * e[9] + t[11] * e[13], r[10] = t[8] * e[2] + t[9] * e[6] + t[10] * e[10] + t[11] * e[14], r[11] = t[8] * e[3] + t[9] * e[7] + t[10] * e[11] + t[11] * e[15], r[12] = t[12] * e[0] + t[13] * e[4] + t[14] * e[8] + t[15] * e[12], r[13] = t[12] * e[1] + t[13] * e[5] + t[14] * e[9] + t[15] * e[13], r[14] = t[12] * e[2] + t[13] * e[6] + t[14] * e[10] + t[15] * e[14], r[15] = t[12] * e[3] + t[13] * e[7] + t[14] * e[11] + t[15] * e[15], r
    }, e.multMatrixVec = function (t, e) {
        var r, i = new Array(16);
        for (r = 0; r < 4; r++)i[r] = e[0] * t[0 + r] + e[1] * t[4 + r] + e[2] * t[8 + r] + e[3] * t[12 + r];
        return i
    }, e.inverse = function (t) {
        var e, r, i = new Array(16);
        for (i[0] = t[5] * t[10] * t[15] - t[5] * t[14] * t[11] - t[6] * t[9] * t[15] + t[6] * t[13] * t[11] + t[7] * t[9] * t[14] - t[7] * t[13] * t[10], i[1] = -t[1] * t[10] * t[15] + t[1] * t[14] * t[11] + t[2] * t[9] * t[15] - t[2] * t[13] * t[11] - t[3] * t[9] * t[14] + t[3] * t[13] * t[10], i[2] = t[1] * t[6] * t[15] - t[1] * t[14] * t[7] - t[2] * t[5] * t[15] + t[2] * t[13] * t[7] + t[3] * t[5] * t[14] - t[3] * t[13] * t[6], i[3] = -t[1] * t[6] * t[11] + t[1] * t[10] * t[7] + t[2] * t[5] * t[11] - t[2] * t[9] * t[7] - t[3] * t[5] * t[10] + t[3] * t[9] * t[6], i[4] = -t[4] * t[10] * t[15] + t[4] * t[14] * t[11] + t[6] * t[8] * t[15] - t[6] * t[12] * t[11] - t[7] * t[8] * t[14] + t[7] * t[12] * t[10], i[5] = t[0] * t[10] * t[15] - t[0] * t[14] * t[11] - t[2] * t[8] * t[15] + t[2] * t[12] * t[11] + t[3] * t[8] * t[14] - t[3] * t[12] * t[10], i[6] = -t[0] * t[6] * t[15] + t[0] * t[14] * t[7] + t[2] * t[4] * t[15] - t[2] * t[12] * t[7] - t[3] * t[4] * t[14] + t[3] * t[12] * t[6], i[7] = t[0] * t[6] * t[11] - t[0] * t[10] * t[7] - t[2] * t[4] * t[11] + t[2] * t[8] * t[7] + t[3] * t[4] * t[10] - t[3] * t[8] * t[6], i[8] = t[4] * t[9] * t[15] - t[4] * t[13] * t[11] - t[5] * t[8] * t[15] + t[5] * t[12] * t[11] + t[7] * t[8] * t[13] - t[7] * t[12] * t[9], i[9] = -t[0] * t[9] * t[15] + t[0] * t[13] * t[11] + t[1] * t[8] * t[15] - t[1] * t[12] * t[11] - t[3] * t[8] * t[13] + t[3] * t[12] * t[9], i[10] = t[0] * t[5] * t[15] - t[0] * t[13] * t[7] - t[1] * t[4] * t[15] + t[1] * t[12] * t[7] + t[3] * t[4] * t[13] - t[3] * t[12] * t[5], i[11] = -t[0] * t[5] * t[11] + t[0] * t[9] * t[7] + t[1] * t[4] * t[11] - t[1] * t[8] * t[7] - t[3] * t[4] * t[9] + t[3] * t[8] * t[5], i[12] = -t[4] * t[9] * t[14] + t[4] * t[13] * t[10] + t[5] * t[8] * t[14] - t[5] * t[12] * t[10] - t[6] * t[8] * t[13] + t[6] * t[12] * t[9], i[13] = t[0] * t[9] * t[14] - t[0] * t[13] * t[10] - t[1] * t[8] * t[14] + t[1] * t[12] * t[10] + t[2] * t[8] * t[13] - t[2] * t[12] * t[9], i[14] = -t[0] * t[5] * t[14] + t[0] * t[13] * t[6] + t[1] * t[4] * t[14] - t[1] * t[12] * t[6] - t[2] * t[4] * t[13] + t[2] * t[12] * t[5], i[15] = t[0] * t[5] * t[10] - t[0] * t[9] * t[6] - t[1] * t[4] * t[10] + t[1] * t[8] * t[6] + t[2] * t[4] * t[9] - t[2] * t[8] * t[5], e = t[0] * i[0] + t[1] * i[4] + t[2] * i[8] + t[3] * i[12], r = 0; r < 16; r++)i[r] /= e;
        return i
    }
}, function (t, e, r) {
    "use strict";
    var i, n, o, s, a, u, h = this && this.__extends || function () {
            var t = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var r in e)e.hasOwnProperty(r) && (t[r] = e[r])
                };
            return function (e, r) {
                function i() {
                    this.constructor = e
                }

                t(e, r), e.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
            }
        }();
    Object.defineProperty(e, "__esModule", {value: !0}), i = r(13), n = r(2), o = r(5), s = r(7), a = r(8), u = function (t) {
        function e(e, r) {
            var o = t.call(this, e) || this, u = new a.default;
            return o.primitive = new i.default, o.program = r || new n.default(e, u.getVertexSource(), u.getFragmentSource()), o.bufferInfo = new s.default(e, {
                posVertexInfo: {
                    array: o.primitive.vertexArr,
                    type: e.FLOAT,
                    size: 2,
                    attrName: "a_position"
                },
                posIndexInfo: {array: o.primitive.indexArr},
                texVertexInfo: {array: o.primitive.texCoordArr, type: e.FLOAT, size: 2, attrName: "a_texCoord"},
                drawMethod: o.gl.TRIANGLE_STRIP
            }), o
        }

        return h(e, t), e
    }(o.default), e.default = u
}, function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0});
    var i = function () {
        function t(t, e) {
            void 0 === e && (e = 16), this._pool = [], this._cnt = 0;
            for (var r = 0; r < e; r++)this._pool.push(new t)
        }

        return t.prototype.getNextObject = function () {
            return this._pool[this._cnt++ % this._pool.length]
        }, t
    }();
    e.default = i
}, function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0});
    var i = function () {
        function t(e) {
            this.game = e, t.instances.push(this)
        }

        return t.prototype.manage = function (t, e, r) {
            console.error(this)
        }, t.prototype.onUpdate = function () {
        }, t.prototype.destroy = function () {
        }, t.destroyAll = function () {
            t.instances.forEach(function (t) {
                t.destroy()
            })
        }, t.instances = [], t
    }();
    e.default = i
}, function (t, e, r) {
    "use strict";
    var i, n, o = this && this.__extends || function () {
            var t = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var r in e)e.hasOwnProperty(r) && (t[r] = e[r])
                };
            return function (e, r) {
                function i() {
                    this.constructor = e
                }

                t(e, r), e.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
            }
        }();
    Object.defineProperty(e, "__esModule", {value: !0}), i = r(14), n = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e.vertexArr = [0, 0, 0, 1, 1, 0, 1, 1], e.indexArr = [0, 1, 2, 3], e.texCoordArr = [0, 0, 0, 1, 1, 0, 1, 1], e
        }

        return o(e, t), e
    }(i.default), e.default = n
}, function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0});
    var i = function () {
        function t() {
            this.vertexArr = null, this.normalArr = null, this.texCoordArr = null, this.indexArr = null
        }

        return t
    }();
    e.default = i
}, function (t, e, r) {
    "use strict";
    var i, n, o, s = this && this.__extends || function () {
            var t = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var r in e)e.hasOwnProperty(r) && (t[r] = e[r])
                };
            return function (e, r) {
                function i() {
                    this.constructor = e
                }

                t(e, r), e.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
            }
        }();
    Object.defineProperty(e, "__esModule", {value: !0}), i = r(3), n = r(16), o = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e.addAttribute(i.GL_TYPE.FLOAT_VEC4, "a_position"), e.addVertexUniform(i.GL_TYPE.FLOAT_MAT4, "u_vertexMatrix"), e.setVertexMainFn("\n            void main(){\n                gl_Position = u_vertexMatrix * a_position;   \n            }\n        "), e.addFragmentUniform(i.GL_TYPE.FLOAT, "u_alpha"), e.addFragmentUniform(i.GL_TYPE.FLOAT_VEC4, "u_rgba"), e.setFragmentMainFn("\n            void main(){\n                gl_FragColor = u_rgba;\n            }\n        "), e
        }

        return s(e, t), e
    }(n.default), e.default = o
}, function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0});
    var i = function () {
        function t() {
            this.vertexUniforms = [], this.fragmentUniforms = [], this.attributes = [], this.varyings = [], this.appendedFragCodeBlocks = [], this.appendedVertexCodeBlocks = [], this.prependedVertexCodeBlocks = [], this.prependedFragCodeBlocks = [], this.vertexMainFn = "", this.fragmentMainFn = ""
        }

        return t.prototype.addVertexUniform = function (t, e) {
            return this.vertexUniforms.push({type: t, name: e}), this
        }, t.prototype.addFragmentUniform = function (t, e) {
            return this.fragmentUniforms.push({type: t, name: e}), this
        }, t.prototype.addAttribute = function (t, e) {
            return this.attributes.push({type: t, name: e}), this
        }, t.prototype.addVarying = function (t, e) {
            return this.varyings.push({type: t, name: e}), this
        }, t.prototype.appendVertexCodeBlock = function (t) {
            this.appendedVertexCodeBlocks.push(t)
        }, t.prototype.appendFragmentCodeBlock = function (t) {
            this.appendedFragCodeBlocks.push(t)
        }, t.prototype.prependVertexCodeBlock = function (t) {
            this.prependedVertexCodeBlocks.push(t)
        }, t.prototype.prependFragmentCodeBlock = function (t) {
            this.prependedFragCodeBlocks.push(t)
        }, t.prototype.setVertexMainFn = function (t) {
            return this.vertexMainFn = t, this
        }, t.prototype.setFragmentMainFn = function (t) {
            return this.fragmentMainFn = t, this
        }, t.prototype.getVertexSource = function () {
            return ("\n            " + this.prependedVertexCodeBlocks.map(function (t) {
                return "" + t
            }).join("\n") + "\n            \n            " + this.vertexUniforms.map(function (t) {
                return "uniform   " + t.type + " " + t.name + ";"
            }).join("\n") + "\n            " + this.attributes.map(function (t) {
                return "attribute " + t.type + " " + t.name + ";"
            }).join("\n") + "\n            " + this.varyings.map(function (t) {
                return "varying   " + t.type + " " + t.name + ";"
            }).join("\n") + "\n            " + this.appendedVertexCodeBlocks.map(function (t) {
                return "" + t
            }).join("\n") + "\n           \n            " + this.vertexMainFn + "\n            \n            ").replace(/\t/g, "")
        }, t.prototype.getFragmentSource = function () {
            return ("\n            precision mediump float;\n            \n            " + this.prependedFragCodeBlocks.map(function (t) {
                return "" + t
            }).join("\n") + "\n            \n            " + this.fragmentUniforms.map(function (t) {
                return "uniform " + t.type + " " + t.name + ";"
            }).join("\n") + "\n            " + this.varyings.map(function (t) {
                return "varying " + t.type + " " + t.name + ";"
            }).join("\n") + "\n            " + this.appendedFragCodeBlocks.map(function (t) {
                return "" + t
            }).join("\n") + "\n            \n            " + this.fragmentMainFn + "\n            \n            ").replace(/\t/g, "")
        }, t.prototype.debug = function () {
            console.log(this.getVertexSource()), console.log(this.getFragmentSource())
        }, t
    }();
    e.default = i
}, function (t, e, r) {
    "use strict";
    var i, n;
    Object.defineProperty(e, "__esModule", {value: !0}), i = r(39), n = function () {
        function t(e) {
            this.lights = new Array(t.NUM_OF_LIGHT_IN_VIEW);
            for (var r = 0; r < this.lights.length; r++)this.lights[r] = new i.default(e)
        }

        return t.prototype.getLightAt = function (t) {
            return this.lights[t]
        }, t.prototype.setUniforms = function (t) {
            var e, r;
            for (e = 0; e < this.lights.length; e++)r = this.lights[e], t["u_pointLights[" + e + "].pos"] = r.getPosScaled().toArray(), t["u_pointLights[" + e + "].nearRadius"] = r.nearRadius, t["u_pointLights[" + e + "].farRadius"] = r.farRadius, t["u_pointLights[" + e + "].isOn"] = r.isOn, t["u_pointLights[" + e + "].color"] = r.color.asGL()
        }, t.NUM_OF_LIGHT_IN_VIEW = 4, t
    }(), e.default = n
}, function (t, e, r) {
    "use strict";
    var i, n;
    Object.defineProperty(e, "__esModule", {value: !0}), i = r(19), n = function () {
        function t(t) {
            this.color = i.default.WHITE, this.intensity = 1, this.game = t
        }

        return t
    }(), e.default = n
}, function (t, e, r) {
    "use strict";
    var i, n, o;
    Object.defineProperty(e, "__esModule", {value: !0}), i = r(11), n = r(20), o = function () {
        function t(t, e, r, i) {
            void 0 === i && (i = 1), this._arr = null, this.setRGBA(t, e, r, i)
        }

        return t.prototype.normalizeToZeroOne = function () {
            this.rNorm = this.r / 255, this.gNorm = this.g / 255, this.bNorm = this.b / 255, this.aNorm = this.a / 255
        }, t.prototype.setRGBA = function (t, e, r, i) {
            void 0 === i && (i = 1), this.r = t, this.g = e, this.b = r, this.a = i, this.normalizeToZeroOne()
        }, t.getFromPool = function () {
            return void 0 === t.objectPool && (t.objectPool = new i.default(t)), t.objectPool.getNextObject()
        }, t.RGB = function (e, r, i, n) {
            void 0 === n && (n = 255);
            var o = t.getFromPool();
            return o.setRGBA(e, r, i, n), o
        }, t.prototype.asGL = function () {
            return null === this._arr && (this._arr = new Array(3)), this._arr[0] = this.rNorm, this._arr[1] = this.gNorm, this._arr[2] = this.bNorm, this._arr[3] = this.aNorm, this._arr
        }, t.prototype.asCSS = function () {
            return "rgba(" + this.r + "," + this.g + "," + this.b + "," + this.a + ")"
        }, t.prototype.toJSON = function () {
            return {r: this.r, g: this.g, b: this.b, a: this.a}
        }, t.prototype.fromJSON = function (t) {
            this.setRGBA(t.r, t.g, t.b, t.a)
        }, t.WHITE = t.RGB(1, 1, 1), t.BLACK = t.RGB(0, 0, 0), t
    }(), e.default = o, n._global.Color = o
}, function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0}), e._global = {}
}, function (t, e, r) {
    "use strict";
    var i, n;
    Object.defineProperty(e, "__esModule", {value: !0}), i = r(22), n = function () {
        function t(t, e, r) {
            this.gl = t, this.width = e, this.height = r, this.texture = new i.default(t), this.texture.setImage(null, e, r), this._init(t, e, r)
        }

        return t.prototype._init = function (t, e, r) {
            this.glRenderBuffer = t.createRenderbuffer(), t.bindRenderbuffer(t.RENDERBUFFER, this.glRenderBuffer), t.renderbufferStorage(t.RENDERBUFFER, t.DEPTH_COMPONENT16, e, r), this.glFrameBuffer = t.createFramebuffer(), t.bindFramebuffer(t.FRAMEBUFFER, this.glFrameBuffer), t.framebufferTexture2D(t.FRAMEBUFFER, t.COLOR_ATTACHMENT0, t.TEXTURE_2D, this.texture.getGlTexture(), 0), t.framebufferRenderbuffer(t.FRAMEBUFFER, t.DEPTH_ATTACHMENT, t.RENDERBUFFER, this.glRenderBuffer), this.texture.unbind(), t.bindRenderbuffer(t.RENDERBUFFER, null), t.bindFramebuffer(t.FRAMEBUFFER, null)
        }, t.prototype.bind = function () {
            t.currInstance !== this && (this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.glFrameBuffer), this.gl.viewport(0, 0, this.width, this.height), t.currInstance = this)
        }, t.prototype.unbind = function () {
            this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null), t.currInstance = null
        }, t.prototype.destroy = function () {
            this.gl.deleteRenderbuffer(this.glRenderBuffer), this.gl.deleteFramebuffer(this.glFrameBuffer)
        }, t.prototype.getTexture = function () {
            return this.texture
        }, t.currInstance = null, t
    }(), e.default = n
}, function (t, e, r) {
    "use strict";
    var i, n, o, s, a;
    Object.defineProperty(e, "__esModule", {value: !0}), i = r(21), n = r(46), o = function (t) {
        return 0 == (t & t - 1)
    }, s = function () {
        function t(t) {
            this.gl = null, this.buffers = null, this.parent = t
        }

        return t.prototype.instantiate = function (t) {
            var e, r;
            for (this.gl = t, this.buffers = [], e = 2, r = 0; r < e; r++)this.buffers.push(new i.default(t, this.parent.size.width, this.parent.size.height))
        }, t.prototype.flip = function () {
            var t = this.buffers[0];
            this.buffers[0] = this.buffers[1], this.buffers[1] = t
        }, t.prototype.getSourceBuffer = function () {
            return this.buffers[0]
        }, t.prototype.getDestBuffer = function () {
            return this.buffers[1]
        }, t.prototype.destroy = function () {
            this.buffers && this.buffers.forEach(function (t) {
                return t.destroy()
            })
        }, t
    }(), a = function () {
        function t(t) {
            this.tex = null, this.size = new n.default(0, 0), this.isPowerOfTwo = !1, this._texFilterBuff = null, this.gl = t, this.tex = t.createTexture(), t.bindTexture(t.TEXTURE_2D, this.tex), t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, 1, 1, 0, t.RGBA, t.UNSIGNED_BYTE, new Uint8Array([0, 0, 255, 255])), t.bindTexture(t.TEXTURE_2D, this.tex), this._texFilterBuff = new s(this)
        }

        return t.prototype.setImage = function (t, e, r) {
            var i = this.gl;
            t ? this.size.setWH(t.width, t.height) : this.size.setWH(e, r), i.bindTexture(i.TEXTURE_2D, this.tex), i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !0), t ? i.texImage2D(i.TEXTURE_2D, 0, i.RGBA, i.RGBA, i.UNSIGNED_BYTE, t) : i.texImage2D(i.TEXTURE_2D, 0, i.RGBA, e, r, 0, i.RGBA, i.UNSIGNED_BYTE, null), this.isPowerOfTwo = t && o(t.width) && o(t.height), this.isPowerOfTwo ? (i.generateMipmap(i.TEXTURE_2D), i.texParameteri(i.TEXTURE_2D, i.TEXTURE_WRAP_S, i.REPEAT), i.texParameteri(i.TEXTURE_2D, i.TEXTURE_WRAP_T, i.REPEAT)) : (i.texParameteri(i.TEXTURE_2D, i.TEXTURE_WRAP_S, i.CLAMP_TO_EDGE), i.texParameteri(i.TEXTURE_2D, i.TEXTURE_WRAP_T, i.CLAMP_TO_EDGE), i.texParameteri(i.TEXTURE_2D, i.TEXTURE_MIN_FILTER, i.LINEAR), i.texParameteri(i.TEXTURE_2D, i.TEXTURE_MAG_FILTER, i.LINEAR)), i.bindTexture(i.TEXTURE_2D, null)
        }, t.prototype.applyFilters = function (t, e) {
            var r, i, n, o, s;
            if (0 === (r = t.length))return this;
            for (null === this._texFilterBuff.buffers && this._texFilterBuff.instantiate(this.gl), i = t[0], n = [{
                texture: this,
                name: "texture"
            }], i.doFilter(n, this._texFilterBuff.getDestBuffer()), o = 1; o < r; o++)this._texFilterBuff.flip(), s = [{
                texture: this._texFilterBuff.getSourceBuffer().texture,
                name: "texture"
            }], t[o].doFilter(s, this._texFilterBuff.getDestBuffer());
            return this._texFilterBuff.flip(), null !== e && e.bind(), this._texFilterBuff.getSourceBuffer().texture
        }, t.prototype.bind = function (e, r, i) {
            if (i.setUniform(e, r), t.currInstances[r] !== this) {
                var n = this.gl;
                n.activeTexture(n.TEXTURE0 + r), n.bindTexture(n.TEXTURE_2D, this.tex), t.currInstances[r] = this
            }
        }, t.prototype.unbind = function (e) {
            void 0 === e && (e = 0);
            var r = this.gl;
            r.activeTexture(r.TEXTURE0 + e), r.bindTexture(r.TEXTURE_2D, null), t.currInstances[e] = null
        }, t.prototype.getColorArray = function () {
            var t, e = this.gl, r = this.size.width * this.size.height;
            return t = new Uint8Array(4 * r), e.readPixels(0, 0, this.size.width, this.size.height, e.RGBA, e.UNSIGNED_BYTE, t), t
        }, t.prototype.destroy = function () {
            this._texFilterBuff && this._texFilterBuff.destroy(), this.gl.deleteTexture(this.tex)
        }, t.prototype.getSize = function () {
            return this.size
        }, t.prototype.getGlTexture = function () {
            return this.tex
        }, t.MAX_TEXTURE_IMAGE_UNITS = 0, t.currInstances = {}, t
    }(), e.default = a
}, function (t, e, r) {
    "use strict";
    var i, n, o = this && this.__extends || function () {
            var t = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var r in e)e.hasOwnProperty(r) && (t[r] = e[r])
                };
            return function (e, r) {
                function i() {
                    this.constructor = e
                }

                t(e, r), e.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
            }
        }();
    Object.defineProperty(e, "__esModule", {value: !0}), i = r(0), n = function (t) {
        function e(e) {
            var r = t.call(this, e) || this;
            return r.type = "TextField", r._chars = null, r.text = "", r.font = null, r
        }

        return o(e, t), e.prototype.revalidate = function () {
            null === this.font && (this.font = this.game.repository.getArray("Font")[0]), this.setFont(this.font)
        }, e.prototype.setText = function (t) {
            var e, r, i, n, o;
            for (t += "", this._chars = [], this.text = t, e = [{width: 0}], r = 0, this.height = this.font.fontContext.symbols[" "].height, i = 0, n = t.length; i < n; i++)this._chars.push(t[i]), o = this.font.fontContext.symbols[t[i]] || this.font.fontContext.symbols[" "], "\n" === t[i] ? (r++, this.height += o.height, e[r] = {width: 0}) : e[r].width += o.width;
            this.width = Math.max.apply(Math, e.map(function (t) {
                return t.width
            }))
        }, e.prototype.getText = function () {
            return this.text
        }, e.prototype.setFont = function (t) {
            this.font = t, this.setText(this.text)
        }, e.prototype.update = function (e, r) {
            t.prototype.update.call(this, e, r), this.render()
        }, e.prototype.render = function () {
            var t = this, e = 0, r = 0;
            this._chars.forEach(function (i) {
                var n = t.font.fontContext.symbols[i] || t.font.fontContext.symbols["?"];
                if ("\n" === i)return e = 0, void(r += n.height);
                t.game.renderer.drawImage(t.font.resourcePath, n, t.pos.clone().addXY(e, r)), e += n.width
            })
        }, e
    }(i.default), e.default = n
}, function (t, e, r) {
    "use strict";
    var i, n, o, s;
    Object.defineProperty(e, "__esModule", {value: !0}), i = function (t, e, r) {
        return !t || (0 === t.indexOf("_") || (!(!e || !e.call) || "string" != typeof e && ("number" != typeof e && ("boolean" != typeof e && (null == e && !r.preserveNull)))))
    }, n = function (t) {
        return "string" == typeof t || "number" == typeof t
    }, o = function (t, e) {
        var r, i, n, s;
        if (void 0 === e && (e = []), void 0 !== t) {
            if (null === t)return null;
            if ("undefined" == typeof window || t !== window) {
                if (e.indexOf(t) > -1)return t;
                if (t.fromJSON)return t.fromJSON(t.toJSON());
                if ("[object Array]" === Object.prototype.toString.call(t)) {
                    for (r = [], i = 0, n = t.length; i < n; i++)s = void 0, e.indexOf(t[i]) > -1 ? s = t[i] : (e.push(t), s = o(t[i], e), e.push(t[i])), r[i] = s;
                    return r
                }
                if ("object" == typeof t) {
                    r = {};
                    for (i in t)t.hasOwnProperty(i) && (s = void 0, e.indexOf(t[i]) > -1 ? s = t[i] : (e.push(t), s = o(t[i], e), e.push(t[i])), r[i] = s);
                    return r
                }
                return t
            }
        }
    }, s = function () {
        function t() {
        }

        return t.prototype.fromJSON = function (t, e) {
            var r = this;
            return void 0 === t && (t = {}), Object.keys(t).forEach(function (i) {
                if ("type" !== i) {
                    if (!(i in r))throw console.error(r), "::fromJSON(): class " + r.constructor.name + " has no property " + i;
                    t[i].id && t[i].type ? r[i] = r.game.repository.getObject(t[i].id, t[i].type, e) : t[i].forEach ? (r[i] = [], t[i].forEach(function (t) {
                                t && t.type && t.id ? r[i].push(r.game.repository.getObject(t.id, t.type, e)) : r[i].push(t)
                            })) : r[i] && r[i].fromJSON ? r[i].fromJSON(t[i]) : r[i] = t[i]
                }
            }), this.revalidate(), this
        }, t.prototype.toJSON = function (t) {
            var e, r, s, a;
            void 0 === t && (t = {preserveNull: !1}), e = {}, r = function (r) {
                var a, u, h;
                if (i(r, s[r], t))return "continue";
                if (s.constructor.transient && s.constructor.transient[r])return "continue";
                if (null != s[r] && s[r].type && s[r].id) e[r] = {
                    id: s[r].id,
                    type: s[r].type
                }; else if (null != s[r] && s[r].splice) a = s[r], u = [], a.forEach(function (t) {
                    t && t.type && t.id ? u.push({type: t.type, id: t.id}) : n(t) && u.push(o(t))
                }), e[r] = u; else if (s[r].toJSON) e[r] = s[r].toJSON(); else {
                    if ((h = o(s[r])) && h.splice && !h.length)return "continue";
                    if (null != h && "object" == typeof h && !Object.keys(h).length)return "continue";
                    e[r] = h
                }
            }, s = this;
            for (a in this)r(a);
            return e
        }, t.prototype.revalidate = function () {
        }, t
    }(), e.default = s
}, function (t, e, r) {
    "use strict";
    var i, n, o, s, a;
    Object.defineProperty(e, "__esModule", {value: !0}), i = r(4), n = function (t, e) {
        var r, i = e.split(".");
        return 1 === i.length ? {targetObj: t, targetKey: e} : (r = i.pop(), i.forEach(function (e) {
                t = t[e]
            }), {targetObj: t, targetKey: r})
    }, o = function (t, e, r) {
        var i = n(t, e);
        i.targetObj[i.targetKey] = r
    }, s = function (t, e) {
        var r = n(t, e);
        return r.targetObj[r.targetKey]
    }, a = function () {
        function t(t) {
            this.propsToChange = [], this.startedTime = null, this.currTime = null, this.completed = !1, this.target = t.target, this.progressFn = t.progress, this.completeFn = t.complete, this.easeFnName = t.ease || "linear", this.tweenTime = t.time || 1e3, this.desc = this.normalizeDesc(t)
        }

        return t.prototype.reuse = function (t) {
            var e = this;
            this.startedTime = this.currTime, this.completed = !1, Object.keys(t).forEach(function (r) {
                e.desc[r] = t[r]
            }), this.desc = this.normalizeDesc(t)
        }, t.prototype.normalizeDesc = function (t) {
            var e, r = this;
            return t.from = t.from || {}, t.to = t.to || {}, e = {}, Object.keys(t.from).forEach(function (t) {
                e[t] = !0
            }), Object.keys(t.to).forEach(function (t) {
                e[t] = !0
            }), this.propsToChange = Object.keys(e), this.propsToChange.forEach(function (e) {
                void 0 === t.from[e] && (t.from[e] = s(r.target, e)), void 0 === t.to[e] && (t.to[e] = s(r.target, e))
            }), t
        }, t.prototype.update = function (t) {
            var e, r, n, s, a, u;
            if (!this.completed) {
                if (this.currTime = t, this.startedTime || (this.startedTime = t), (e = t - this.startedTime) > this.tweenTime)return void this._complete();
                for (r = this.propsToChange.length; r--;)n = this.propsToChange[r], s = this.desc.from[n], a = this.desc.to[n], u = i[this.easeFnName](e, s, a - s, this.tweenTime), o(this.target, n, u);
                this.progressFn && this.progressFn(this.target)
            }
        }, t.prototype.progress = function (t) {
            this.progressFn = t
        }, t.prototype.reset = function () {
            this.startedTime = null, this.completed = !1
        }, t.prototype._complete = function () {
            var t, e, r;
            if (!this.completed) {
                for (t = this.propsToChange.length; t--;)e = this.propsToChange[t], r = this.desc.to[e], o(this.target, e, r);
                this.progressFn && this.progressFn(this.target), this.completeFn && this.completeFn(this.target), this.completed = !0
            }
        }, t.prototype.isCompleted = function () {
            return this.completed
        }, t.prototype.getTarget = function () {
            return this.target
        }, t
    }(), e.default = a
}, function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0}), e.Transient = function (t) {
        return function (e) {
            e.transient = t
        }
    }
}, function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0});
    !function (t) {
        t[t.NO_SCALE = 0] = "NO_SCALE", t[t.FIT = 1] = "FIT"
    }(e.SCALE_STRATEGY || (e.SCALE_STRATEGY = {}))
}, function (t, e, r) {
    "use strict";
    var i, n, o, s, a = this && this.__extends || function () {
            var t = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var r in e)e.hasOwnProperty(r) && (t[r] = e[r])
                };
            return function (e, r) {
                function i() {
                    this.constructor = e
                }

                t(e, r), e.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
            }
        }();
    Object.defineProperty(e, "__esModule", {value: !0}), i = r(0), n = r(6), o = r(60), s = function (t) {
        function e(e) {
            var r = t.call(this, e) || this;
            return r.type = "GameObjectProto", r.spriteSheet = null, r._behaviour = null, r.commonBehaviour = [], r.currFrameIndex = 0, r._sprPosX = 0, r._sprPosY = 0, r.frameAnimations = [], r.startFrameAnimationName = null, r._timeCreated = null, r.tileOffset = {
                x: 0,
                y: 0
            }, r.tileRepeat = !1, r.groupName = "", r._individualBehaviour = null, r.filters = [], r._frameRect = new n.default, r
        }

        return a(e, t), e.find = function (t) {
        }, e.findAll = function (t) {
        }, e.prototype.revalidate = function () {
            var e = this;
            t.prototype.revalidate.call(this), this.setFrameIndex(this.currFrameIndex), this.spriteSheet && (this.width = this.spriteSheet._frameWidth, this.height = this.spriteSheet._frameHeight), this.frameAnimations.forEach(function (t, r) {
                e.frameAnimations[r] = e.frameAnimations[r].clone(), e.frameAnimations[r]._gameObject = e
            }), this.rigidBody = this.rigid ? new o.default(this.game, this) : null
        }, e.prototype.playFrameAnimation = function (t, e) {
            var r = this.frameAnimations.find(function (e) {
                return e.name === t
            });
            r._gameObject = this, this._currFrameAnimation = r, r.play(e)
        }, e.prototype.setFrameIndex = function (t) {
            this.currFrameIndex = t, this._sprPosX = this.spriteSheet.getFramePosX(this.currFrameIndex), this._sprPosY = this.spriteSheet.getFramePosY(this.currFrameIndex)
        }, e.prototype.getFrameRect = function () {
            return this._frameRect.set(this._sprPosX, this._sprPosY, this.width, this.height), this._frameRect
        }, e.prototype.update = function (e, r) {
            t.prototype.update.call(this, e, r), this._currFrameAnimation && this._currFrameAnimation.update(e), this._individualBehaviour && this._individualBehaviour.onUpdate(e, r);
            for (var i = 0, n = this.commonBehaviour.length; i < n; i++)this.commonBehaviour[i].onUpdate(e, r);
            null !== this.rigidBody && this.rigidBody.update(e, r), this.game.renderer.draw(this)
        }, e.prototype.onShow = function () {
            this._individualBehaviour && this._individualBehaviour.onCreate(), null !== this.startFrameAnimationName && this.playFrameAnimation(this.startFrameAnimationName)
        }, e.prototype.stopFrAnimations = function () {
            this._currFrameAnimation && this._currFrameAnimation.stop()
        }, e.prototype.kill = function () {
            this._layer.kill(this)
        }, e
    }(i.default), e.default = s
}, function (t, e, r) {
    "use strict";
    var i, n, o = this && this.__extends || function () {
            var t = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var r in e)e.hasOwnProperty(r) && (t[r] = e[r])
                };
            return function (e, r) {
                function i() {
                    this.constructor = e
                }

                t(e, r), e.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
            }
        }();
    Object.defineProperty(e, "__esModule", {value: !0}), i = r(12), n = function (t) {
        function e(e) {
            return t.call(this, e) || this
        }

        return o(e, t), e.prototype.manage = function (t, e, r) {
            var i = this;
            this.gameObject = t, this.parameters = e, this.animations = {}, r.forEach(function (t) {
                var r = "walk" + t + "Animation", n = "idle" + t + "Animation";
                i.animations[r] = i.gameObject.frameAnimations.find(function (t) {
                    return t.name === e[r]
                }), e[n] && (i.animations[n] = i.gameObject.frameAnimations.find(function (t) {
                    return t.name === e[n]
                }))
            })
        }, e.prototype.stop = function () {
            this.gameObject.stopFrAnimations();
            var t = "idle" + this.gameObject._lastDirection + "Animation";
            this.animations[t] && this.animations[t].play()
        }, e.prototype.go = function (t) {
            this.gameObject._lastDirection = t, this.animations["walk" + t + "Animation"].play()
        }, e
    }(i.default), e.default = n
}, function (t, e, r) {
    "use strict";
    var i, n, o, s = this && this.__extends || function () {
            var t = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var r in e)e.hasOwnProperty(r) && (t[r] = e[r])
                };
            return function (e, r) {
                function i() {
                    this.constructor = e
                }

                t(e, r), e.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
            }
        }();
    Object.defineProperty(e, "__esModule", {value: !0}), i = r(0), n = r(1), o = function (t) {
        function e(e) {
            var r = t.call(this, e) || this;
            return r.type = "TileMap", r.spriteSheet = null, r.data = [], r
        }

        return s(e, t), e.prototype.getTileAt = function (t, e) {
            var r, i, n, o = this;
            if (this.spriteSheet && (r = ~~(t / this.spriteSheet._frameWidth), i = ~~(e / this.spriteSheet._frameHeight), this.data[i] && null != (n = this.data[i][r])))return {
                getRect: function () {
                    var t = r * o.spriteSheet._frameWidth + 1, e = i * o.spriteSheet._frameHeight + 1, n = o.spriteSheet._frameWidth - 2, s = o.spriteSheet._frameHeight - 2;
                    return {x: t, y: e, width: n, height: s, right: t + n, bottom: e + s}
                }, tileIndex: this.spriteSheet.numOfFramesH * i + r + 1, value: n
            }
        }, e.prototype.getTilesAtRect = function (t) {
            var e, r, i, n, o, s, a = [];
            if (!this.spriteSheet)return a;
            for (e = {}, r = t.x, n = t.x + t.width, o = t.y + t.height; ;) {
                for (i = t.y; ;) {
                    if (s = this.getTileAt(r, i), s && (e[s.tileIndex] || (a.push(s), e[s.tileIndex] = !0)), i === o)break;
                    i += this.spriteSheet._frameHeight, i > o && (i = o)
                }
                if (r === n)break;
                r += this.spriteSheet._frameWidth, r > n && (r = n)
            }
            return a
        }, e.prototype.update = function () {
            var t, e, r, i, o, s, a, u, h, c, f = this.spriteSheet;
            if (f)for (t = this.game.camera, e = this.game.renderer, r = t.getRectScaled(), i = ~~(r.x / this.spriteSheet._frameWidth), o = ~~(r.y / this.spriteSheet._frameHeight), i < 0 && (i = 0), o < 0 && (o = 0), s = i + this._tilesInScreenX + 1, a = o + this._tilesInScreenY + 1, u = o; u < a; u++)for (h = i; h < s; h++)null !== (c = this.data[u] && this.data[u][h]) && void 0 !== c && e.drawImage(f.resourcePath, f.getFrameRect(c), new n.default(h * f._frameWidth, u * f._frameHeight))
        }, e
    }(i.default), e.default = o
}, function (t, e, r) {
    "use strict";
    var i, n, o, s, a;
    Object.defineProperty(e, "__esModule", {value: !0}), i = r(32), n = r(89), o = r(90), s = new i.default, s.fromJSON(n.gameProps), s.repository.setDescriptions(o.repository), a = s.repository.getObject(n.gameProps.startSceneId, "Scene"), s.runScene(a)
}, function (t, e, r) {
    "use strict";
    var i, n, o, s, a, u, h, c, f, p, l, d, y, m, g = this && this.__extends || function () {
            var t = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var r in e)e.hasOwnProperty(r) && (t[r] = e[r])
                };
            return function (e, r) {
                function i() {
                    this.constructor = e
                }

                t(e, r), e.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
            }
        }(), _ = this && this.__decorate || function (t, e, r, i) {
            var n, o, s = arguments.length, a = s < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, r) : i;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, r, i); else for (o = t.length - 1; o >= 0; o--)(n = t[o]) && (a = (s < 3 ? n(a) : s > 3 ? n(e, r, a) : n(e, r)) || a);
            return s > 3 && a && Object.defineProperty(e, r, a), a
        };
    Object.defineProperty(e, "__esModule", {value: !0}), i = r(12), r(33), n = r(34), o = r(56), s = r(77), a = r(78), u = r(79), h = r(80), c = r(26), f = r(24), p = r(81), l = r(27), d = r(1), y = r(17), m = function (t) {
        function e() {
            var e, r = t.call(this) || this;
            return r._lastTime = 0, r._currTime = 0, r._deltaTime = 0, r._currentScene = null, r._running = !1, r.destroyed = !1, r.renderer = null, r.scale = new d.default(1, 1), r.pos = new d.default(0, 0), r.width = 0, r.height = 0, r.gravityConstant = 0, r.fps = 0, r.gamePad = null, r.scaleStrategy = l.SCALE_STRATEGY.FIT, r.startSceneId = 0, r._revalidated = !1, e = Date.now(), r._lastTime = r._currTime = e, r._deltaTime = 0, r.repository = new o.default(r), r.mouse = new s.default(r), r.keyboard = new a.default(r), r.keyboard.listenTo(), r.gamePad = new u.default(r), r.collider = new h.default(r), r.camera = new p.default(r), r.lightArray = new y.default(r), r
        }

        return g(e, t), e.prototype.revalidate = function () {
            this.renderer = n.default.getRenderer(this), this.mouse.listenTo(this.renderer.container), this._revalidated = !0
        }, e.prototype.getTime = function () {
            return this._lastTime
        }, e.prototype.getDeltaTime = function () {
            return this._deltaTime
        }, e.prototype.runScene = function (t) {
            var e, i, n = this;
            this._currentScene = t, e = r(82), i = "" + t.name[0].toUpperCase() + t.name.substr(1) + "Behaviour", i && t.setIndividualBehaviour(e[i]), t.layers.forEach(function (t) {
                t.gameObjects.forEach(function (t) {
                    var r, i;
                    t.setCommonBehaviour(), r = "" + t.name[0].toUpperCase() + t.name.substr(1) + "Behaviour", (i = e[r]) && t.setIndividualBehaviour(i)
                })
            }), t.preload(function () {
                n._currentScene.onShow(), n._running || (n.update(), n._running = !0)
            })
        }, e.prototype.getCurrScene = function () {
            return this._currentScene
        }, e.prototype.setCurrScene = function (t) {
            this._currentScene = t
        }, e.prototype.update = function () {
            if (!this.destroyed) {
                this._lastTime = this._currTime, this._currTime = Date.now(), this._deltaTime = this._currTime - this._lastTime;
                this._deltaTime > 20 && (this._deltaTime = 20), this._currentScene && this._currentScene.update(this._currTime, this._deltaTime), this.keyboard.update(), this.gamePad.update(), requestAnimationFrame(this.update.bind(this))
            }
        }, e.prototype.destroy = function () {
            var t = this;
            this.destroyed = !0, this.keyboard.destroy(), this.mouse.destroy(), this.renderer.cancelFullScreen(), i.default.destroyAll(), setTimeout(function () {
                t.renderer.destroy()
            }, 1e3)
        }, e = _([c.Transient({
            repository: !0,
            renderer: !0,
            mouse: !0,
            keyboard: !0,
            gamePad: !0,
            collider: !0,
            camera: !0,
            scaleStrategy: !0,
            fps: !0,
            destroyed: !0,
            lightArray: !0
        })], e)
    }(f.default), e.default = m
}, function (t, e) {
    Array.prototype.remove = function (t) {
        for (var e = this.length; e--;)t(this[e], e) && this.splice(e, 1)
    }, window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || function (t) {
            setTimeout(t, 17)
        }, window.cancelAnimationFrame || (window.cancelAnimationFrame = function (t) {
        return clearTimeout(t)
    }), Array.prototype.find || (Array.prototype.find = function (t) {
        var e, r, i, n, o;
        if (null == this)throw new TypeError("Array.prototype.find called on null or undefined");
        if ("function" != typeof t)throw new TypeError("predicate must be a function");
        for (e = Object(this), r = e.length >>> 0, i = arguments[1], o = 0; o < r; o++)if (n = e[o], t.call(i, n, o, e))return n
    })
}, function (t, e, r) {
    "use strict";
    var i, n;
    Object.defineProperty(e, "__esModule", {value: !0}), i = r(35), n = function () {
        function t() {
        }

        return t.getRenderer = function (t) {
            if (!t)throw"RendererFactory::getRenderer: game param not specified";
            return new i.default(t)
        }, t
    }(), e.default = n
}, function (t, e, r) {
    "use strict";
    var i, n, o, s, a, u, h, c, f, p, l, d, y, m, g, _, v, x, w, b, O, P, E = this && this.__extends || function () {
            var t = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var r in e)e.hasOwnProperty(r) && (t[r] = e[r])
                };
            return function (e, r) {
                function i() {
                    this.constructor = e
                }

                t(e, r), e.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
            }
        }();
    Object.defineProperty(e, "__esModule", {value: !0}), i = r(36), n = r(10), o = r(40), s = r(41), a = r(5), u = r(42), h = r(44), c = r(21), f = r(47), p = r(9), l = r(4), d = r(22), y = r(48), m = r(6), g = r(1), _ = r(52), v = function (t) {
        return t.getContext("webgl", {alpha: !1}) || t.getContext("experimental-webgl", {alpha: !1}) || t.getContext("webkit-3d", {alpha: !1}) || t.getContext("moz-webgl", {alpha: !1})
    }, x = 1e3, w = new f.default, b = function (t, e, r, i, n, o) {
        var s = p.makeZToWMatrix(1), a = p.ortho(0, n, 0, o, -x, x), u = p.makeScale(r, i, 1), h = p.makeTranslation(t, e, 0), c = p.matrixMultiply(u, h);
        return c = p.matrixMultiply(c, w.getCurrentMatrix()), c = p.matrixMultiply(c, a), c = p.matrixMultiply(c, s)
    }, O = function (t, e, r) {
        var i = p.makeScale(t.width / e, t.height / r, 1), n = p.makeTranslation(t.x / e, t.y / r, 0);
        return p.matrixMultiply(i, n)
    }, P = function (t) {
        function e(e) {
            var r = t.call(this, e) || this, i = document.createElement("canvas");
            return document.body.appendChild(i), i.setAttribute("width", e.width.toString()), i.setAttribute("height", e.height.toString()), r.container = i, r.matrixStack = w, r.registerResize(), r._init(), r
        }

        return E(e, t), e.prototype._init = function () {
            var t = v(this.container);
            this.gl = t, this.circleDrawer = new h.default(t), this.spriteRectDrawer = new n.default(t), this.spriteRectLightDrawer = new i.default(t), this.tiledSpriteRectDrawer = new o.default(t), this.colorRectDrawer = new s.default(t), this.lineDrawer = new u.default(t), this.multBlendDrawer = new y.default(t), this.frameBuffer = new c.default(t, this.game.width, this.game.height), t.blendFunc(t.SRC_ALPHA, t.ONE_MINUS_SRC_ALPHA), t.enable(t.BLEND)
        }, e.prototype.draw = function (t) {
            var e, r, i, n;
            l.overlapTest(this.game.camera.getRectScaled(), t.getRect()) && (e = this.renderableCache[t.spriteSheet.resourcePath], e = e.applyFilters(t.filters, this.frameBuffer), this.save(), this.translate(t.pos.x, t.pos.y), 0 === t.angle && t.scale.equal(1) || (r = t.width / 2, i = t.height / 2, this.translate(r, i), this.scale(t.scale.x, t.scale.y), this.rotateZ(t.angle), this.translate(-r, -i)), n = [{
                texture: e,
                name: "texture"
            }], t.spriteSheet.normalMapPath && n.push({
                texture: this.renderableCache[t.spriteSheet.normalMapPath],
                name: "normalTexture"
            }), this.drawTextureInfo(n, t.getFrameRect(), new g.default(0, 0)), this.restore())
        }, e.prototype.drawImage = function (t, e, r) {
            var i;
            i = [{texture: this.renderableCache[t], name: "texture"}], this.drawTextureInfo(i, e, r)
        }, e.prototype.drawTextureInfo = function (t, e, r) {
            var i, n, o, s, a = this.game.camera.getRectScaled();
            l.overlapTest(a, m.default.fromPool().set(a.x + e.x, a.y + e.y, e.width, e.height)) && (i = t[0].texture.getSize().width, n = t[0].texture.getSize().height, o = this.game.getCurrScene(), 120 === e.width || 174 === e.width ? (s = {
                    u_textureMatrix: O(e, i, n),
                    u_vertexMatrix: b(r.x, r.y, e.width, e.height, this.game.width, this.game.height),
                    u_alpha: 1
                }, this.multBlendDrawer.draw(t, this.frameBuffer, s)) : (s = {
                    u_textureMatrix: O(e, i, n),
                    u_vertexMatrix: b(r.x, r.y, e.width, e.height, this.game.width, this.game.height),
                    u_alpha: 1,
                    u_useNormalMap: t.length > 1,
                    "u_ambientLight.color": o.ambientLight.color.asGL()
                }, this.game.lightArray.setUniforms(s), this.spriteRectLightDrawer.draw(t, s)))
        }, e.prototype.drawTiledImage = function (t, e, r, i) {
            var n, o, s, a, u = this.renderableCache[t];
            n = u.getSize().width, o = u.getSize().height, s = {
                u_textureMatrix: O(m.default.fromPool().set(0, 0, r.width, r.height), n, o),
                u_vertexMatrix: b(r.x, r.y, r.width, r.height, this.game.width, this.game.height),
                u_frameCoords: [e.x / n, e.y / o, e.width / n, e.height / o],
                u_offsetCoords: [i.x / e.width, i.y / e.height],
                u_alpha: 1
            }, a = [{texture: u, name: "texture"}], this.tiledSpriteRectDrawer.draw(a, s)
        }, e.prototype.fillRect = function (t, e) {
            if (l.overlapTest(this.game.camera.getRectScaled(), t)) {
                var r = {
                    u_vertexMatrix: b(t.x, t.y, t.width, t.height, this.game.width, this.game.height),
                    u_rgba: e.asGL()
                };
                this.colorRectDrawer.draw(null, r)
            }
        }, e.prototype.drawRect = function (t, e) {
            var r = m.default.fromPool(), i = [r.x, r.y, r.width, r.height], n = i[0], o = i[1], s = i[2], a = i[3];
            this.fillRect(r.set(n, o, s, 1), e), this.fillRect(r.set(n, o + a, s, 1), e), this.fillRect(r.set(n, o, 1, a), e), this.fillRect(r.set(n + s, o, 1, a), e)
        }, e.prototype.drawLine = function (t, e, r, i, n) {
            var o = r - t, s = i - e, a = {};
            a.u_vertexMatrix = b(t, e, o, s, this.game.width, this.game.height), a.u_rgba = n.asGL(), this.lineDrawer.draw(null, a)
        }, e.prototype.fillCircle = function (t, e, r, i) {
            var n, o = 2 * r;
            l.overlapTest(this.game.camera.getRectScaled(), m.default.fromPool().set(t - r, e - r, o, o)) && (n = {}, n.u_vertexMatrix = b(t - r, e - r, o, o, this.game.width, this.game.height), n.u_rgba = i.asGL(), this.circleDrawer.draw(null, n))
        }, e.prototype.setAlpha = function (t) {
            throw"not implemented"
        }, e.prototype.save = function () {
            this.matrixStack.save()
        }, e.prototype.scale = function (t, e) {
            this.matrixStack.scale(t, e)
        }, e.prototype.rotateZ = function (t) {
            this.matrixStack.rotateZ(t)
        }, e.prototype.rotateY = function (t) {
            this.matrixStack.rotateY(t)
        }, e.prototype.translate = function (t, e) {
            this.matrixStack.translate(t, e)
        }, e.prototype.restore = function () {
            this.matrixStack.restore()
        }, e.prototype.lockRect = function (t) {
        }, e.prototype.unlockRect = function () {
        }, e.prototype.clear = function () {
            this.gl.clearColor(1, 1, 1, 1), this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT)
        }, e.prototype.clearColor = function (t) {
            var e = t.asGL();
            this.gl.clearColor(e[0], e[1], e[2], e[3]), this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT)
        }, e.prototype.beginFrameBuffer = function () {
            this.save(), this.frameBuffer.bind()
        }, e.prototype.flipFrameBuffer = function (t) {
            var e, r, i, n = this.fullScreenSize;
            this.restore(), this.save(), this.translate(0, n.h), this.scale(1, -1), e = this.frameBuffer.getTexture().applyFilters(t, null), this.frameBuffer.unbind(), this.gl.viewport(0, 0, n.w, n.h), r = {
                u_vertexMatrix: b(0, 0, this.game.width * n.scaleFactor, this.game.height * n.scaleFactor, n.w, n.h),
                u_textureMatrix: O(m.default.fromPool().set(0, 0, n.w, n.h), n.w, n.h),
                u_alpha: 1
            }, i = [{texture: e, name: "texture"}], this.spriteRectDrawer.draw(i, r), this.restore()
        }, e.prototype.getError = function () {
            return 0
        }, e.prototype.loadTextureInfo = function (t, e) {
            var r = this, i = new Image;
            i.src = t, i.onload = function () {
                var n = new d.default(r.gl);
                n.setImage(i), r.renderableCache[t] = n, e()
            }
        }, e.prototype.destroy = function () {
            var e = this;
            t.prototype.destroy.call(this), this.frameBuffer.destroy(), a.default.destroyAll(), Object.keys(this.renderableCache).forEach(function (t) {
                e.renderableCache[t].destroy()
            })
        }, e
    }(_.default), e.default = P
}, function (t, e, r) {
    "use strict";
    var i, n, o, s, a, u, h = this && this.__extends || function () {
            var t = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var r in e)e.hasOwnProperty(r) && (t[r] = e[r])
                };
            return function (e, r) {
                function i() {
                    this.constructor = e
                }

                t(e, r), e.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
            }
        }();
    Object.defineProperty(e, "__esModule", {value: !0}), i = r(10), n = r(8), o = r(2), s = r(3), a = r(17), u = function (t) {
        function e(e) {
            var r, i = new n.default;
            return i.prependFragmentCodeBlock("\n            #define NUM_OF_LIGHT_IN_VIEW " + a.default.NUM_OF_LIGHT_IN_VIEW + "\n            struct PointLight {\n                vec2 pos;\n                vec4 color;\n                float nearRadius;\n                float farRadius;\n                bool isOn;\n            };\n            struct AmbientLight {\n                vec4 color;\n            };\n            vec4 lightEffect(PointLight lgt, vec4 normal){\n                vec4 result = vec4(0);\n                float atten = 0.0;\n                vec3 l = vec3(lgt.pos.xy,0) - gl_FragCoord.xyz;\n                float dist = length(l);\n                if (dist<=lgt.farRadius) {\n                    if (dist<=lgt.nearRadius) atten = 1.0;\n                    else {\n                        float n = dist - lgt.nearRadius;\n                        float d = lgt.farRadius - lgt.nearRadius;\n                        atten = smoothstep(0.0,1.0,1.0 - (n*n)/(d*d));\n                    }\n                    if (normal.a>0.0) {\n                        vec4 normalMap = (2.*normal) - 1.;\n                        vec3 N = normalize(normalMap.xyz);\n                        l = l / dist;\n                        float nDotL = max(0.,dot(N,l));\n                        atten*=nDotL;\n                    }\n                }\n                result = atten * lgt.color; // * lgt.intensity\n                return result;\n            }\n        "), i.addFragmentUniform("PointLight", "u_pointLights[NUM_OF_LIGHT_IN_VIEW]"), i.addFragmentUniform("AmbientLight", "u_ambientLight"), i.addFragmentUniform(s.GL_TYPE.SAMPLER_2D, "normalTexture"), i.addFragmentUniform(s.GL_TYPE.BOOL, "u_useNormalMap"), i.setFragmentMainFn("\n            void main(){\n                vec4 texColor = texture2D(texture, v_texCoord); // todo u_texture\n                vec4 normal = u_useNormalMap?\n                    texture2D(normalTexture,v_texCoord):\n                    vec4(0);\n                \n                vec4 lightResult = u_ambientLight.color; // * u_ambientLight.intensity\n                \n                if (lightResult.a>0.) {\n                    for (int i=0;i<NUM_OF_LIGHT_IN_VIEW;i++) {\n                        if (u_pointLights[i].isOn) lightResult+=lightEffect(u_pointLights[i], normal);\n                    } \n                }\n                \n                lightResult*=texColor;\n                gl_FragColor = lightResult;\n                gl_FragColor.a *= u_alpha;\n            }\n        "), r = new o.default(e, i.getVertexSource(), i.getFragmentSource()), t.call(this, e, r) || this
        }

        return h(e, t), e
    }(i.default), e.default = u
}, function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0});
    var i = function () {
        function t(t) {
            this.bufferItemSize = null, this.bufferItemType = null, this.dataLength = null, this.attrName = null, this.gl = t, this.buffer = t.createBuffer(), this.bufferItemSize = 0, this.bufferItemType = 0, this.dataLength = 0, this.attrName = null
        }

        return t.prototype.setData = function (t, e, r) {
            var i = this.gl;
            i.bindBuffer(i.ARRAY_BUFFER, this.buffer), i.bufferData(i.ARRAY_BUFFER, new Float32Array(t), i.STATIC_DRAW), i.bindBuffer(i.ARRAY_BUFFER, null), this.bufferItemSize = r, this.bufferItemType = e, this.dataLength = t.length
        }, t.prototype.setAttrName = function (t) {
            this.attrName = t
        }, t.prototype.bind = function (t) {
            t.bindBuffer(this, this.attrName)
        }, t.prototype.unbind = function () {
            this.gl.bindBuffer(this.gl.ARRAY_BUFFER, null)
        }, t.prototype.destroy = function () {
            this.gl.deleteBuffer(this.buffer)
        }, t.prototype.getGlBuffer = function () {
            return this.buffer
        }, t.prototype.getItemSize = function () {
            return this.bufferItemSize
        }, t.prototype.getItemType = function () {
            return this.bufferItemType
        }, t.prototype.getBufferLength = function () {
            return this.dataLength
        }, t
    }();
    e.default = i
}, function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0});
    var i = function () {
        function t(t) {
            this.gl = t, this.buffer = t.createBuffer(), this.dataLength = null
        }

        return t.prototype.setData = function (t) {
            var e = this.gl;
            this.dataLength = t.length, e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, this.buffer), e.bufferData(e.ELEMENT_ARRAY_BUFFER, new Uint16Array(t), e.STATIC_DRAW), e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, null)
        }, t.prototype.getGlBuffer = function () {
            return this.buffer
        }, t.prototype.bind = function () {
            this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.buffer)
        }, t.prototype.unbind = function () {
            this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, null)
        }, t.prototype.destroy = function () {
            this.gl.deleteBuffer(this.buffer)
        }, t.prototype.getBufferLength = function () {
            return this.dataLength
        }, t
    }();
    e.default = i
}, function (t, e, r) {
    "use strict";
    var i, n, o, s = this && this.__extends || function () {
            var t = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var r in e)e.hasOwnProperty(r) && (t[r] = e[r])
                };
            return function (e, r) {
                function i() {
                    this.constructor = e
                }

                t(e, r), e.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
            }
        }();
    Object.defineProperty(e, "__esModule", {value: !0}), i = r(1), n = r(18), o = function (t) {
        function e(e) {
            var r = t.call(this, e) || this;
            return r.pos = new i.default, r.nearRadius = 0, r.farRadius = 0, r.isOn = !1, r._screenPoint = new i.default, r
        }

        return s(e, t), e.prototype.getPosScaled = function () {
            var t = this.game.camera, e = t.getRectScaled(), r = t.scale;
            return this._screenPoint.setXY((this.pos.x - e.x) * r.x, (this.pos.y - e.y) * r.y), this._screenPoint
        }, e
    }(n.default), e.default = o
}, function (t, e, r) {
    "use strict";
    var i, n, o, s, a, u, h, c = this && this.__extends || function () {
            var t = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var r in e)e.hasOwnProperty(r) && (t[r] = e[r])
                };
            return function (e, r) {
                function i() {
                    this.constructor = e
                }

                t(e, r), e.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
            }
        }();
    Object.defineProperty(e, "__esModule", {value: !0}), i = r(13), n = r(2), o = r(7), s = r(5), a = r(3), u = r(8), h = function (t) {
        function e(e) {
            var r, s = t.call(this, e) || this;
            return s.primitive = new i.default, r = new u.default, r.addFragmentUniform(a.GL_TYPE.FLOAT_VEC2, "u_offsetCoords"), r.addFragmentUniform(a.GL_TYPE.FLOAT_VEC4, "u_frameCoords"), r.setFragmentMainFn("\n            void main(){\n                vec2 localTextCoord = mod(\n                    v_texCoord + fract(u_offsetCoords),\n                    u_frameCoords.zw\n                ) + u_frameCoords.xy;\n                gl_FragColor = texture2D(texture, localTextCoord);\n                gl_FragColor.a *= u_alpha;\n            }\n        "), s.program = new n.default(e, r.getVertexSource(), r.getFragmentSource()), s.bufferInfo = new o.default(e, {
                posVertexInfo: {
                    array: s.primitive.vertexArr,
                    type: e.FLOAT,
                    size: 2,
                    attrName: "a_position"
                },
                posIndexInfo: {array: s.primitive.indexArr},
                texVertexInfo: {array: s.primitive.texCoordArr, type: e.FLOAT, size: 2, attrName: "a_texCoord"},
                drawMethod: s.gl.TRIANGLE_STRIP
            }), s
        }

        return c(e, t), e
    }(s.default), e.default = h
}, function (t, e, r) {
    "use strict";
    var i, n, o, s, a, u, h = this && this.__extends || function () {
            var t = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var r in e)e.hasOwnProperty(r) && (t[r] = e[r])
                };
            return function (e, r) {
                function i() {
                    this.constructor = e
                }

                t(e, r), e.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
            }
        }();
    Object.defineProperty(e, "__esModule", {value: !0}), i = r(13), n = r(2), o = r(7), s = r(5), a = r(15), u = function (t) {
        function e(e) {
            var r, s = t.call(this, e) || this;
            return s.primitive = new i.default, r = new a.default, s.program = new n.default(e, r.getVertexSource(), r.getFragmentSource()), s.bufferInfo = new o.default(e, {
                posVertexInfo: {
                    array: s.primitive.vertexArr,
                    type: e.FLOAT,
                    size: 2,
                    attrName: "a_position"
                }, posIndexInfo: {array: s.primitive.indexArr}, drawMethod: s.gl.TRIANGLE_STRIP
            }), s
        }

        return h(e, t), e
    }(s.default), e.default = u
}, function (t, e, r) {
    "use strict";
    var i, n, o, s, a, u, h = this && this.__extends || function () {
            var t = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var r in e)e.hasOwnProperty(r) && (t[r] = e[r])
                };
            return function (e, r) {
                function i() {
                    this.constructor = e
                }

                t(e, r), e.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
            }
        }();
    Object.defineProperty(e, "__esModule", {value: !0}), i = r(43), n = r(2), o = r(7), s = r(5), a = r(15), u = function (t) {
        function e(e) {
            var r = t.call(this, e) || this, s = new a.default;
            return r.program = new n.default(e, s.getVertexSource(), s.getFragmentSource()), r.primitive = new i.default, r.bufferInfo = new o.default(e, {
                posVertexInfo: {
                    array: r.primitive.vertexArr,
                    type: e.FLOAT,
                    size: 2,
                    attrName: "a_position"
                }, drawMethod: r.gl.LINE_STRIP
            }), r
        }

        return h(e, t), e
    }(s.default), e.default = u
}, function (t, e, r) {
    "use strict";
    var i, n, o = this && this.__extends || function () {
            var t = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var r in e)e.hasOwnProperty(r) && (t[r] = e[r])
                };
            return function (e, r) {
                function i() {
                    this.constructor = e
                }

                t(e, r), e.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
            }
        }();
    Object.defineProperty(e, "__esModule", {value: !0}), i = r(14), n = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e.vertexArr = [0, 0, 1, 1], e.indexArr = [0, 1], e
        }

        return o(e, t), e
    }(i.default), e.default = n
}, function (t, e, r) {
    "use strict";
    var i, n, o, s, a, u, h = this && this.__extends || function () {
            var t = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var r in e)e.hasOwnProperty(r) && (t[r] = e[r])
                };
            return function (e, r) {
                function i() {
                    this.constructor = e
                }

                t(e, r), e.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
            }
        }();
    Object.defineProperty(e, "__esModule", {value: !0}), i = r(45), n = r(2), o = r(5), s = r(7), a = r(15), u = function (t) {
        function e(e) {
            var r = t.call(this, e) || this, o = new a.default;
            return r.program = new n.default(e, o.getVertexSource(), o.getFragmentSource()), r.primitive = new i.default, r.bufferInfo = new s.default(e, {
                posVertexInfo: {
                    array: r.primitive.vertexArr,
                    type: e.FLOAT,
                    size: 2,
                    attrName: "a_position"
                }, drawMethod: r.gl.TRIANGLE_FAN
            }), r
        }

        return h(e, t), e
    }(o.default), e.default = u
}, function (t, e, r) {
    "use strict";
    var i, n, o = this && this.__extends || function () {
            var t = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var r in e)e.hasOwnProperty(r) && (t[r] = e[r])
                };
            return function (e, r) {
                function i() {
                    this.constructor = e
                }

                t(e, r), e.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
            }
        }();
    Object.defineProperty(e, "__esModule", {value: !0}), i = r(14), n = function (t) {
        function e() {
            var e, r, i, n = t.call(this) || this;
            for (n.vertexArr = [], e = 2 * Math.PI, n.vertexArr.push(.5), n.vertexArr.push(.5), r = 0, i = e; r < i; r += .1)n.vertexArr.push(Math.cos(r) / 2 + .5), n.vertexArr.push(Math.sin(r) / 2 + .5);
            return n.vertexArr.push(Math.cos(e) / 2 + .5), n.vertexArr.push(Math.sin(e) / 2 + .5), n
        }

        return o(e, t), e
    }(i.default), e.default = n
}, function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0});
    var i = function () {
        function t(t, e) {
            void 0 === t && (t = 0), void 0 === e && (e = 0), this.width = t, this.height = e
        }

        return t.prototype.setW = function (t) {
            this.width = t
        }, t.prototype.setH = function (t) {
            this.height = t
        }, t.prototype.setWH = function (t, e) {
            this.width = t, this.height = e
        }, t
    }();
    e.default = i
}, function (t, e, r) {
    "use strict";
    var i, n;
    Object.defineProperty(e, "__esModule", {value: !0}), i = r(9), n = function () {
        function t() {
            this.stack = [], this.restore()
        }

        return t.prototype.restore = function () {
            this.stack.pop(), this.stack.length < 1 && (this.stack[0] = i.makeIdentity())
        }, t.prototype.save = function () {
            this.stack.push(this.getCurrentMatrix())
        }, t.prototype.getCurrentMatrix = function () {
            return this.stack[this.stack.length - 1].slice()
        }, t.prototype.setCurrentMatrix = function (t) {
            return this.stack[this.stack.length - 1] = t
        }, t.prototype.translate = function (t, e, r) {
            var n, o;
            void 0 === r && (r = 0), n = i.makeTranslation(t, e, r), o = this.getCurrentMatrix(), this.setCurrentMatrix(i.matrixMultiply(n, o))
        }, t.prototype.rotateZ = function (t) {
            var e = i.makeZRotation(t), r = this.getCurrentMatrix();
            this.setCurrentMatrix(i.matrixMultiply(e, r))
        }, t.prototype.rotateY = function (t) {
            var e = i.makeYRotation(t), r = this.getCurrentMatrix();
            this.setCurrentMatrix(i.matrixMultiply(e, r))
        }, t.prototype.scale = function (t, e, r) {
            var n, o;
            void 0 === r && (r = 1), n = i.makeScale(t, e, r), o = this.getCurrentMatrix(), this.setCurrentMatrix(i.matrixMultiply(n, o))
        }, t
    }(), e.default = n
}, function (t, e, r) {
    "use strict";
    var i, n, o = this && this.__extends || function () {
            var t = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var r in e)e.hasOwnProperty(r) && (t[r] = e[r])
                };
            return function (e, r) {
                function i() {
                    this.constructor = e
                }

                t(e, r), e.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
            }
        }();
    Object.defineProperty(e, "__esModule", {value: !0}), i = r(49), n = function (t) {
        function e(e) {
            return t.call(this, e) || this
        }

        return o(e, t), e.prototype.prepare = function (t) {
            t.setFragmentMainFn("\n            void main(){\n                vec4 srcColor =  texture2D(texture, v_texCoord)*2.0;\n                srcColor.a *= u_alpha;\n                vec4 destColor = texture2D(destTexture, v_destTexCoord.xy);\n                vec4 res = min(srcColor + destColor,vec4(1.0));\n                gl_FragColor = res;\n            }\n        ")
        }, e
    }(i.default), e.default = n
}, function (t, e, r) {
    "use strict";
    var i, n, o, s, a, u;
    Object.defineProperty(e, "__esModule", {value: !0}), i = r(10), n = r(3), o = r(8), s = r(2), a = r(50), u = function () {
        function t(t) {
            this.gl = t;
            var e = new o.default;
            e.addVarying(n.GL_TYPE.FLOAT_VEC4, "v_destTexCoord"), e.addFragmentUniform(n.GL_TYPE.SAMPLER_2D, "destTexture"), e.setVertexMainFn("\n            void main(){\n                gl_Position = u_vertexMatrix * a_position;\n                v_texCoord = (u_textureMatrix * vec4(a_texCoord, 0, 1)).xy;\n                v_destTexCoord = gl_Position*0.5+0.5; \n            }\n        "), this.prepare(e), this._afterPrepare(e), this.simpleCopyFilter = new a.default(t)
        }

        return t.prototype._afterPrepare = function (t) {
            this.program = new s.default(this.gl, t.getVertexSource(), t.getFragmentSource()), this.spriteRectDrawer = new i.default(this.gl, this.program)
        }, t.prototype.prepare = function (t) {
        }, t.prototype.draw = function (t, e, r) {
            var i = e.texture.applyFilters([this.simpleCopyFilter], e);
            t.push({texture: i, name: "destTexture"}), this.spriteRectDrawer.draw(t, r)
        }, t
    }(), e.default = u
}, function (t, e, r) {
    "use strict";
    var i, n, o, s = this && this.__extends || function () {
            var t = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var r in e)e.hasOwnProperty(r) && (t[r] = e[r])
                };
            return function (e, r) {
                function i() {
                    this.constructor = e
                }

                t(e, r), e.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
            }
        }();
    Object.defineProperty(e, "__esModule", {value: !0}), i = r(51), n = r(3), o = function (t) {
        function e(e) {
            return t.call(this, e) || this
        }

        return s(e, t), e.prototype.prepare = function (t) {
            t.addFragmentUniform(n.GL_TYPE.FLOAT, "u_mixFactor"), t.setFragmentMainFn("\n            void main(){\n                gl_FragColor = texture2D(texture, v_texCoord);\n            }\n        ")
        }, e
    }(i.default), e.default = o
}, function (t, e, r) {
    "use strict";
    var i, n, o, s, a, u, h;
    Object.defineProperty(e, "__esModule", {value: !0}), i = r(2), n = r(10), o = r(9), s = r(8), a = function (t, e, r, i) {
        var n = o.ortho(0, r, 0, i, -1, 1), s = o.makeScale(r, i, 1);
        return o.matrixMultiply(s, n)
    }, u = o.makeIdentity(), h = function () {
        function t(t) {
            this.spriteRectDrawer = null, this.uniformsToSet = {}, this.gl = t;
            var e = new s.default;
            this.prepare(e), this._afterPrepare(e)
        }

        return t.prototype.prepare = function (t) {
        }, t.prototype._afterPrepare = function (t) {
            var e = new i.default(this.gl, t.getVertexSource(), t.getFragmentSource());
            this.spriteRectDrawer = new n.default(this.gl, e)
        }, t.prototype.doFilter = function (t, e) {
            var r, i;
            e.bind(), r = t[0].texture.size.width, i = t[0].texture.size.height, this.uniformsToSet.u_textureMatrix = u, this.uniformsToSet.u_vertexMatrix = a(0, 0, r, i), this.spriteRectDrawer.draw(t, this.uniformsToSet)
        }, t.prototype.setParam = function (t, e) {
            this.uniformsToSet[t] = e
        }, t
    }(), e.default = h
}, function (t, e, r) {
    "use strict";
    var i, n, o, s = this && this.__extends || function () {
            var t = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var r in e)e.hasOwnProperty(r) && (t[r] = e[r])
                };
            return function (e, r) {
                function i() {
                    this.constructor = e
                }

                t(e, r), e.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
            }
        }();
    Object.defineProperty(e, "__esModule", {value: !0}), i = r(53), n = r(27), o = function (t) {
        function e(e) {
            return t.call(this, e) || this
        }

        return s(e, t), e.prototype.onResize = function () {
            var t, e, r, i, o = this.container;
            this.game.scaleStrategy !== n.SCALE_STRATEGY.NO_SCALE && (t = o.height / o.width, e = window.innerHeight / window.innerWidth, e < t ? (i = window.innerHeight, r = i / t) : (r = window.innerWidth, i = r * t), this.game.scale.setXY(r / this.game.width, i / this.game.height), this.game.pos.setXY((window.innerWidth - r) / 2, (window.innerHeight - i) / 2), this.container.style.width = r + "px", this.container.style.height = i + "px", this.container.style.marginTop = this.game.pos.y + "px")
        }, e
    }(i.default), e.default = o
}, function (t, e, r) {
    "use strict";
    var i, n;
    Object.defineProperty(e, "__esModule", {value: !0}), r(23), i = r(55), n = function () {
        function t(t) {
            this.renderableCache = {}, this.fullScreenSize = {
                w: 0,
                h: 0,
                scaleFactor: 1
            }, this.game = t, i.default.isCocoonJS ? (this.fullScreenSize.w = window.innerWidth * i.default.scale, this.fullScreenSize.h = window.innerHeight * i.default.scale, this.fullScreenSize.scaleFactor = Math.min(this.fullScreenSize.w / this.game.width, this.fullScreenSize.h / this.game.height)) : (this.fullScreenSize.w = t.width, this.fullScreenSize.h = t.height)
        }

        return t.prototype.onResize = function () {
        }, t.prototype.requestFullScreen = function () {
            var t = this.container;
            t.requestFullScreen ? t.requestFullScreen() : t.mozRequestFullScreen ? t.mozRequestFullScreen() : t.webkitRequestFullScreen && t.webkitRequestFullScreen()
        }, t.prototype.cancelFullScreen = function () {
            document.cancelFullScreen ? document.cancelFullScreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitCancelFullScreen && document.webkitCancelFullScreen()
        }, t.prototype.beginFrameBuffer = function () {
        }, t.prototype.flipFrameBuffer = function (t) {
        }, t.prototype.registerResize = function () {
            var t = this;
            this.onResize(), window.addEventListener("resize", function () {
                return t.onResize()
            })
        }, t.prototype.destroy = function () {
            window.removeEventListener("resize", this.onResize)
        }, t.prototype.getError = function () {
            return 0
        }, t.prototype.drawImage = function (t, e, r) {
        }, t.prototype.drawTiledImage = function (t, e, r, i) {
        }, t.prototype.fillRect = function (t, e) {
        }, t.prototype.drawRect = function (t, e) {
        }, t.prototype.drawLine = function (t, e, r, i, n) {
        }, t.prototype.fillCircle = function (t, e, r, i) {
        }, t.prototype.clear = function () {
        }, t.prototype.clearColor = function (t) {
        }, t.prototype.restore = function () {
        }, t.prototype.translate = function (t, e, r) {
        }, t.prototype.scale = function (t, e, r) {
        }, t.prototype.draw = function (t) {
        }, t.prototype.log = function (t) {
        }, t.prototype.loadTextureInfo = function (t, e) {
        }, t.prototype.getTextureInfo = function (t) {
        }, t
    }(), e.default = n
}, function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0});
    var i = function () {
        function t() {
            this.events = {}
        }

        return t.prototype._on = function (t, e) {
            this.events[t] = this.events[t] || [], this.events[t].push(e)
        }, t.prototype.on = function (t, e) {
            var r = this;
            "string" == typeof t ? this._on(t, e) : t.splice && t.forEach(function (t) {
                    r._on(t, e)
                })
        }, t.prototype.trigger = function (t, e) {
            var r, i = this.events[t];
            if (i)for (r = i.length; r--;)i[r](e)
        }, t
    }();
    e.default = i
}, function (t, e, r) {
    "use strict";
    var i, n;
    Object.defineProperty(e, "__esModule", {value: !0}), i = !!navigator.isCocoonJS, n = function () {
        function t(t) {
        }

        return t.isCocoonJS = i, t.scale = i ? window.devicePixelRatio || 1 : 1, t.isTouch = "undefined" != typeof window && "ontouchstart" in window, t
    }(), e.default = n
}, function (t, e, r) {
    "use strict";
    var i, n;
    Object.defineProperty(e, "__esModule", {value: !0}), i = r(57), n = function () {
        function t(t) {
            this._game = t, this.reset()
        }

        return t.prototype.addDescription = function (t, e) {
            this.descriptions[e] || (this.descriptions[e] = []), this.descriptions[e].push(t)
        }, t.prototype.setDescriptions = function (t) {
            var e = this;
            Object.keys(t).forEach(function (r) {
                t[r].forEach(function (t) {
                    e.addDescription(t, r)
                })
            })
        }, t.prototype.getObject = function (t, e, r) {
            var n, o;
            if (void 0 === r && (r = !1), n = i[e], !(o = this.descriptions[e].find(function (e) {
                    return e.id == t
                })))throw'can not find object "' + e + '" with id ' + t;
            return !r && this.cache[o[t]] || (this.cache[t] = new n(this._game).fromJSON(o)), this.cache[t]
        }, t.prototype.getFirst = function (t) {
            var e = this.getArray(t);
            return e.length ? e[0] : null
        }, t.prototype.addObject = function (t) {
            this.arrays[t.type] || (this.arrays[t.type] = []), this.arrays[t.type].push(t), this.descriptions[t.type] || (this.descriptions[t.type] = []), this.descriptions[t.type].push(t.toJSON())
        }, t.prototype.updateObject = function (t, e) {
            var r, i = t.toJSON(e), n = this.descriptions[t.type].findIndex(function (e) {
                return e.id == t.id
            });
            this.descriptions[t.type][n] = i, (r = this.getObject(t.id, t.type, !0)) && r.fromJSON(i)
        }, t.prototype.removeObject = function (t) {
            var e = this.arrays[t.type].findIndex(function (e) {
                return e.id === t.id
            });
            this.arrays[t.type].splice(e, 1), this.descriptions[t.type] || (this.descriptions[t.type] = []), e = this.descriptions[t.type].findIndex(function (e) {
                return e.id === t.id
            }), this.descriptions[t.type].splice(e, 1), delete this.cache[t.id]
        }, t.prototype.getArray = function (t) {
            var e, r = this;
            return this.arrays[t] ? this.arrays[t] : (e = [], this.descriptions[t] || (this.descriptions[t] = []), this.descriptions[t].forEach(function (i) {
                    e.push(r.getObject(i.id, t))
                }), this.arrays[t] = e)
        }, t.prototype.reset = function () {
            this.descriptions = {}, this.arrays = {}, this.cache = {}
        }, t
    }(), e.default = n
}, function (t, e, r) {
    "use strict";
    var i, n, o, s, a, u, h, c, f, p, l, d;
    Object.defineProperty(e, "__esModule", {value: !0}), i = r(58), e.FrameAnimation = i.default, n = r(59), e.SpriteSheet = n.default, o = r(28), e.GameObjectProto = o.default, s = r(62), e.GameObject = s.default, a = r(69), e.CommonBehaviour = a.default, u = r(70), e.ParticleSystem = u.default, h = r(71), e.Scene = h.default, c = r(74), e.Sound = c.default, f = r(75), e.Font = f.default, p = r(76), e.Layer = p.default, l = r(23), e.TextField = l.default, d = r(30), e.TileMap = d.default
}, function (t, e, r) {
    "use strict";
    var i, n, o = this && this.__extends || function () {
            var t = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var r in e)e.hasOwnProperty(r) && (t[r] = e[r])
                };
            return function (e, r) {
                function i() {
                    this.constructor = e
                }

                t(e, r), e.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
            }
        }();
    Object.defineProperty(e, "__esModule", {value: !0}), i = r(0), n = function (t) {
        function e(e) {
            var r = t.call(this, e) || this;
            return r.type = "FrameAnimation", r._currFrame = 0, r.frames = [], r.duration = 1e3, r._gameObject = null, r._startTime = null, r.stop(), r
        }

        return o(e, t), e.prototype.revalidate = function () {
            this._timeForOneFrame = ~~(this.duration / this.frames.length)
        }, e.prototype.play = function (t) {
            void 0 === t && (t = {repeat: !0}), this._isRepeat = t.repeat, this._gameObject._currFrameAnimation = this
        }, e.prototype.stop = function () {
            this._gameObject && (this._gameObject._currFrameAnimation = null), this._startTime = null, this._isRepeat = !0
        }, e.prototype.update = function (t) {
            var e, r;
            this._startTime || (this._startTime = t), e = (t - this._startTime) % this.duration, this._currFrame = ~~(this.frames.length * e / this.duration), 0 == this._isRepeat && this._currFrame >= this.frames.length - 1 && this.stop(), (r = this._gameObject.currFrameIndex) != this.frames[this._currFrame] && this._gameObject.setFrameIndex(this.frames[this._currFrame])
        }, e.prototype.nextFrame = function () {
            var t = this._currFrame;
            t++, t == this.frames.length && (t = 0), this._gameObject.setFrameIndex(this.frames[t]), this._currFrame = t
        }, e.prototype.previousFrame = function () {
            var t = this._currFrame;
            t--, t < 0 && (t = this.frames.length - 1), this._gameObject.setFrameIndex(this.frames[t]), this._currFrame = t
        }, e
    }(i.default), e.default = n
}, function (t, e, r) {
    "use strict";
    var i, n, o, s = this && this.__extends || function () {
            var t = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var r in e)e.hasOwnProperty(r) && (t[r] = e[r])
                };
            return function (e, r) {
                function i() {
                    this.constructor = e
                }

                t(e, r), e.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
            }
        }();
    Object.defineProperty(e, "__esModule", {value: !0}), i = r(0), n = r(6), o = function (t) {
        function e(e) {
            var r = t.call(this, e) || this;
            return r.type = "SpriteSheet", r.width = 0, r.height = 0, r.numOfFramesH = 1, r.numOfFramesV = 1, r._frameWidth = 0, r._frameHeight = 0, r._numOfFrames = 0, r.resourcePath = "", r.normalMapPath = "", r.frameRect = new n.default, r
        }

        return s(e, t), e.prototype.revalidate = function () {
            this.numOfFramesH && this.numOfFramesV && (this._frameWidth = ~~(this.width / this.numOfFramesH), this._frameHeight = ~~(this.height / this.numOfFramesV), this._numOfFrames = this.numOfFramesH * this.numOfFramesV)
        }, e.prototype.getFramePosX = function (t) {
            return t % this.numOfFramesH * this._frameWidth
        }, e.prototype.getFramePosY = function (t) {
            return ~~(t / this.numOfFramesH) * this._frameHeight
        }, e.prototype.getFrameRect = function (t) {
            var e = this.frameRect;
            return e.set(this.getFramePosX(t), this.getFramePosY(t), this._frameWidth, this._frameHeight), e
        }, e
    }(i.default), e.default = o
}, function (t, e, r) {
    "use strict";
    var i, n;
    Object.defineProperty(e, "__esModule", {value: !0}), i = r(61), n = function () {
        function t(t, e) {
            this.vel = new i.default, this.onFloor = !1, this._onFloorInCurrFrame = !1, this._onFloorInPrevFrame = !1, this.isStatic = !1, this.game = t, this.gameObject = e
        }

        return t.prototype.update = function (t, e) {
            if (!this.gameObject.rigidBody.isStatic) {
                var r = this.vel.multByScalar(e / 1e3);
                this.game.collider.moveBy(this.gameObject, r), this.vel.addY(this.game.gravityConstant * e / 1e3)
            }
        }, t
    }(), e.default = n
}, function (t, e, r) {
    "use strict";
    var i, n, o = this && this.__extends || function () {
            var t = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var r in e)e.hasOwnProperty(r) && (t[r] = e[r])
                };
            return function (e, r) {
                function i() {
                    this.constructor = e
                }

                t(e, r), e.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
            }
        }();
    Object.defineProperty(e, "__esModule", {value: !0}), i = r(1), n = function (t) {
        function e(e, r) {
            return t.call(this, e, r) || this
        }

        return o(e, t), e.prototype.dotProduct = function (t) {
            return this.x * t.x + this.y * t.y
        }, e.prototype.crossProduct = function (t) {
            return this.x * t.y - this.y * t.x
        }, e.prototype.setXY = function (t, e) {
            return this.x = t, this.y = e, this
        }, e.prototype.addXY = function (t, e) {
            return this.x += t, this.y += e, this
        }, e.prototype.multByScalar = function (t, r) {
            return void 0 === r && (r = !0), r ? new e(this.x * t, this.y * t) : (this.x *= t, this.y *= t, this)
        }, e.prototype.divByScalar = function (t, e) {
            return void 0 === e && (e = !0), this.multByScalar(1 / t, e)
        }, e.prototype.plus = function (t, r) {
            return void 0 === r && (r = !1), r ? (this.x += t.x, this.y += t.y, this) : new e(this.x + t.x, this.y + t.y)
        }, e.prototype.minus = function (t, r) {
            return void 0 === r && (r = !1), r ? (this.x -= t.x, this.y -= t.y, this) : new e(this.x - t.x, this.y - t.y)
        }, e.prototype.getLength = function () {
            return Math.sqrt(this.lengthSquared())
        }, e.prototype.lengthSquared = function () {
            return this.x * this.x + this.y * this.y
        }, e.prototype.normalize = function () {
            var t = this.getLength();
            return this.x = this.x / t, this.y = this.y / t, this
        }, e.prototype.setLength = function (t) {
            var e = this.getAngle();
            this.x = Math.cos(e) * t, this.y = Math.sin(e) * t
        }, e.prototype.getAngle = function () {
            return Math.atan2(this.y, this.x)
        }, e.prototype.getAngleBetween = function (t) {
            return Math.acos((this.x * t.x + this.y * t.y) / this.getLength() * t.getLength())
        }, e.prototype.setAngle = function (t) {
            var e = this.getLength();
            this.x = Math.cos(t) * e, this.y = Math.sin(t) * e
        }, e.prototype.clone = function () {
            return new e(this.x, this.y)
        }, e.angleBetween = function (t, e) {
            return t = t.clone().normalize(), e = e.clone().normalize(), Math.acos(t.dotProduct(e))
        }, e.normalBetween = function (t, e) {
            return t.minus(e).normalize()
        }, e.distance = function (t, r) {
            return Math.sqrt(e.distanceSquared(t, r))
        }, e.distanceSquared = function (t, e) {
            return (t.x - e.x) * (t.x - e.x) + (t.y - e.y) * (t.y - e.y)
        }, e
    }(i.default), e.default = n
}, function (t, e, r) {
    "use strict";
    var i, n, o, s, a = this && this.__extends || function () {
            var t = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var r in e)e.hasOwnProperty(r) && (t[r] = e[r])
                };
            return function (e, r) {
                function i() {
                    this.constructor = e
                }

                t(e, r), e.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
            }
        }();
    Object.defineProperty(e, "__esModule", {value: !0}), i = r(28), n = r(63), o = function () {
    }, s = function (t) {
        function e(e) {
            var r = t.call(this, e) || this;
            return r.type = "GameObject", r.gameObjectProto = null, r
        }

        return a(e, t), e.prototype.revalidate = function () {
            var e, r = this, i = {};
            for (e in this)this.hasOwnProperty(e) && (i[e] = this[e]);
            Object.keys(this.gameObjectProto).forEach(function (t) {
                void 0 !== r.gameObjectProto[t] && (r[t] = r.gameObjectProto[t])
            }), Object.keys(i).forEach(function (t) {
                i[t] && (i[t].splice && 0 === i[t].length || (r[t] = i[t]))
            }), t.prototype.revalidate.call(this)
        }, e.prototype.setIndividualBehaviour = function (t) {
            var e = new t(this.game);
            e.game = this.game, e.gameObject = this, e.onCreate || (e.onCreate = o), e.onUpdate || (e.onUpdate = o), e.onDestroy || (e.onDestroy = o), this._individualBehaviour = e
        }, e.prototype.setCommonBehaviour = function () {
            var t = this, e = [];
            this.commonBehaviour.forEach(function (r) {
                var i, o = n[r.name];
                i = new o(t.game), i.manage(t, r.parameters), e.push(i)
            }), this.commonBehaviour = e
        }, e
    }(i.default), e.default = s
}, function (t, e, r) {
    "use strict";
    var i, n, o;
    Object.defineProperty(e, "__esModule", {value: !0}), i = r(64), e.Draggable = i.default, n = r(65), e.Control4Dir = n.default, o = r(67), e.Control2Dir = o.default
}, function (t, e, r) {
    "use strict";
    var i, n, o = this && this.__extends || function () {
            var t = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var r in e)e.hasOwnProperty(r) && (t[r] = e[r])
                };
            return function (e, r) {
                function i() {
                    this.constructor = e
                }

                t(e, r), e.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
            }
        }();
    Object.defineProperty(e, "__esModule", {value: !0}), i = r(12), n = function (t) {
        function e(e) {
            var r = t.call(this, e) || this;
            return r.points = {}, r
        }

        return o(e, t), e._getEventId = function (t) {
            return t.id || 1
        }, e.prototype.manage = function (t, r) {
            var i, n = this;
            t.on("click", function (r) {
                n.points[e._getEventId(r)] = {
                    mX: r.objectX, mY: r.objectY, target: t, preventDefault: function () {
                        this.defaultPrevented = !0
                    }, dragStartX: 0, dragStartY: 0
                }
            }), i = this.game.getCurrScene(), i.on("mouseDown", function (t) {
                var r = e._getEventId(t), i = n.points[r];
                i && (i.dragStartX = i.target.pos.x, i.dragStartY = i.target.pos.y)
            }), i.on("mouseMove", function (r) {
                var i = e._getEventId(r), o = n.points[i];
                if (o) {
                    if (!o.dragStart && (o.dragStart = !0, o.target.trigger("dragStart", o), o.defaultPrevented))return void delete n.points[i];
                    t.pos.x = r.screenX - o.mX, t.pos.y = r.screenY - o.mY
                }
            }), i.on("mouseUp", function (r) {
                var i = e._getEventId(r), o = n.points[i];
                o && (o.dragStart && (o.x = t.pos.x, o.y = t.pos.y, o.target.trigger("dragStop", o)), delete n.points[i])
            }), this.blurListener = function (t) {
                i.trigger("mouseUp", t)
            }, this.game.renderer.container.addEventListener("mouseleave", this.blurListener)
        }, e.prototype.destroy = function () {
            this.game.renderer.container.removeEventListener("mouseleave", this.blurListener)
        }, e
    }(i.default), e.default = n
}, function (t, e, r) {
    "use strict";
    var i, n, o = this && this.__extends || function () {
            var t = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var r in e)e.hasOwnProperty(r) && (t[r] = e[r])
                };
            return function (e, r) {
                function i() {
                    this.constructor = e
                }

                t(e, r), e.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
            }
        }();
    Object.defineProperty(e, "__esModule", {value: !0}), i = r(66), n = function (t) {
        function e(e) {
            return t.call(this, e) || this
        }

        return o(e, t), e.prototype.manage = function (e, r) {
            t.prototype.manage.call(this, e, r)
        }, e.prototype.onUpdate = function () {
            var t = this.game.keyboard, e = this.parameters, r = this.gameObject;
            (t.isPressed(t.KEY.UP) || t.isPressed(t.KEY.GAME_PAD_AXIS_UP)) && (r.rigidBody.vel.y = -e.velocity, this.go("Up")), (t.isPressed(t.KEY.DOWN) || t.isPressed(t.KEY.GAME_PAD_AXIS_DOWN)) && (r.rigidBody.vel.y = e.velocity, this.go("Down")), (t.isPressed(t.KEY.LEFT) || t.isPressed(t.KEY.GAME_PAD_AXIS_LEFT)) && (r.rigidBody.vel.x = -e.velocity, this.go("Left")), (t.isPressed(t.KEY.RIGHT) || t.isPressed(t.KEY.GAME_PAD_AXIS_RIGHT)) && (r.rigidBody.vel.x = e.velocity, this.go("Right")), t.isJustReleased(t.KEY.LEFT) || t.isPressed(t.KEY.GAME_PAD_AXIS_LEFT) ? this.stop() : t.isJustReleased(t.KEY.RIGHT) || t.isPressed(t.KEY.GAME_PAD_AXIS_RIGHT) ? this.stop() : t.isJustReleased(t.KEY.UP) || t.isPressed(t.KEY.GAME_PAD_AXIS_UP) ? this.stop() : (t.isJustReleased(t.KEY.DOWN) || t.isPressed(t.KEY.GAME_PAD_AXIS_DOWN)) && this.stop()
        }, e
    }(i.default), e.default = n
}, function (t, e, r) {
    "use strict";
    var i, n, o = this && this.__extends || function () {
            var t = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var r in e)e.hasOwnProperty(r) && (t[r] = e[r])
                };
            return function (e, r) {
                function i() {
                    this.constructor = e
                }

                t(e, r), e.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
            }
        }();
    Object.defineProperty(e, "__esModule", {value: !0}), i = r(29), n = function (t) {
        function e(e) {
            return t.call(this, e) || this
        }

        return o(e, t), e.prototype.manage = function (r, i) {
            t.prototype.manage.call(this, r, i, e.DIRS)
        }, e.prototype.stop = function () {
            t.prototype.stop.call(this), this.gameObject.rigidBody.vel.x = 0, this.gameObject.rigidBody.vel.y = 0
        }, e.DIRS = ["Left", "Right", "Up", "Down"], e
    }(i.default), e.default = n
}, function (t, e, r) {
    "use strict";
    var i, n, o = this && this.__extends || function () {
            var t = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var r in e)e.hasOwnProperty(r) && (t[r] = e[r])
                };
            return function (e, r) {
                function i() {
                    this.constructor = e
                }

                t(e, r), e.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
            }
        }();
    Object.defineProperty(e, "__esModule", {value: !0}), i = r(68), n = function (t) {
        function e(e) {
            return t.call(this, e) || this
        }

        return o(e, t), e.prototype.manage = function (e, r) {
            t.prototype.manage.call(this, e, r)
        }, e.prototype.onUpdate = function () {
            var t = this.game.keyboard, e = this.parameters, r = this.gameObject;
            (t.isPressed(t.KEY.LEFT) || t.isPressed(t.KEY.GAME_PAD_AXIS_LEFT)) && (r.rigidBody.vel.x = -e.velocity, this.go("Left")), (t.isPressed(t.KEY.RIGHT) || t.isPressed(t.KEY.GAME_PAD_AXIS_RIGHT)) && (r.rigidBody.vel.x = e.velocity, this.go("Right")), t.isJustReleased(t.KEY.LEFT) || t.isJustReleased(t.KEY.GAME_PAD_AXIS_LEFT) ? this.stop() : (t.isJustReleased(t.KEY.RIGHT) || t.isJustReleased(t.KEY.GAME_PAD_AXIS_RIGHT)) && this.stop()
        }, e
    }(i.default), e.default = n
}, function (t, e, r) {
    "use strict";
    var i, n, o = this && this.__extends || function () {
            var t = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var r in e)e.hasOwnProperty(r) && (t[r] = e[r])
                };
            return function (e, r) {
                function i() {
                    this.constructor = e
                }

                t(e, r), e.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
            }
        }();
    Object.defineProperty(e, "__esModule", {value: !0}), i = r(29), n = function (t) {
        function e(e) {
            return t.call(this, e) || this
        }

        return o(e, t), e.prototype.manage = function (r, i) {
            t.prototype.manage.call(this, r, i, e.DIRS)
        }, e.prototype.stop = function () {
            t.prototype.stop.call(this), this.gameObject.rigidBody.vel.x = 0
        }, e.DIRS = ["Left", "Right"], e
    }(i.default), e.default = n
}, function (t, e, r) {
    "use strict";
    var i, n, o = this && this.__extends || function () {
            var t = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var r in e)e.hasOwnProperty(r) && (t[r] = e[r])
                };
            return function (e, r) {
                function i() {
                    this.constructor = e
                }

                t(e, r), e.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
            }
        }();
    Object.defineProperty(e, "__esModule", {value: !0}), i = r(0), n = function (t) {
        function e(e) {
            var r = t.call(this, e) || this;
            return r.type = "CommonBehaviour", r.parameters = [], r.description = null, r
        }

        return o(e, t), e
    }(i.default), e.default = n
}, function (t, e, r) {
    "use strict";
    var i, n, o, s, a = this && this.__extends || function () {
            var t = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var r in e)e.hasOwnProperty(r) && (t[r] = e[r])
                };
            return function (e, r) {
                function i() {
                    this.constructor = e
                }

                t(e, r), e.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
            }
        }();
    Object.defineProperty(e, "__esModule", {value: !0}), i = r(0), n = r(4), o = function (t) {
        return n.random(t.from, t.to)
    }, s = function (t) {
        function e(e) {
            var r = t.call(this, e) || this;
            return r.type = "ParticleSystem", r.gameObjectProto = null, r._particles = [], r.numOfParticlesToEmit = {
                from: 1,
                to: 10
            }, r.particleAngle = {from: 0, to: 0}, r.particleVelocity = {
                from: 1,
                to: 100
            }, r.particleLiveTime = {from: 100, to: 1e3}, r.emissionRadius = 0, r
        }

        return a(e, t), e.prototype.revalidate = function () {
            this.particleAngle.to < this.particleAngle.from && (this.particleAngle.to += 2 * Math.PI)
        }, e.find = function (t) {
        }, e.findAll = function (t) {
        }, e.prototype.emit = function (t, e) {
            var r, i, n, s;
            for (r = 0; r < o(this.numOfParticlesToEmit); r++)i = this.gameObjectProto.clone(), n = o(this.particleAngle), s = o(this.particleVelocity), i.vel.x = s * Math.cos(n), i.vel.y = s * Math.sin(n), i.pos.x = o({
                from: t - this.emissionRadius,
                to: t + this.emissionRadius
            }), i.pos.y = o({
                from: e - this.emissionRadius,
                to: e + this.emissionRadius
            }), i.liveTime = o(this.particleLiveTime), this._particles.push(i)
        }, e.prototype.update = function (t, e) {
            for (var r, i = this._particles, n = i.length, o = n - 1; n--;)(r = i[o - n]) && (r._timeCreated || (r._timeCreated = t), t - r._timeCreated > r.liveTime && this._particles.splice(this._particles.indexOf(r), 1), r.update(t, e))
        }, e
    }(i.default), e.default = s
}, function (t, e, r) {
    "use strict";
    var i, n, o, s, a, u, h = this && this.__extends || function () {
            var t = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var r in e)e.hasOwnProperty(r) && (t[r] = e[r])
                };
            return function (e, r) {
                function i() {
                    this.constructor = e
                }

                t(e, r), e.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
            }
        }();
    Object.defineProperty(e, "__esModule", {value: !0}), i = r(0), n = r(72), o = r(30), s = r(73), a = r(19), u = function (t) {
        function e(e) {
            var r = t.call(this, e) || this;
            return r.type = "Scene", r.layers = [], r.useBG = !1, r.colorBG = a.default.WHITE, r.filters = [], r._tweenMovies = [], r._individualBehaviour = null, r.tileMap = new o.default(e), r.ambientLight = new s.default(e), r
        }

        return h(e, t), e.prototype.revalidate = function () {
            t.prototype.revalidate.call(this), this.tileMap && this.tileMap.spriteSheet && (this.tileMap._tilesInScreenX = ~~(this.game.width / this.tileMap.spriteSheet._frameWidth), this.tileMap._tilesInScreenY = ~~(this.game.height / this.tileMap.spriteSheet._frameHeight))
        }, e.prototype.addTweenMovie = function (t) {
            this._tweenMovies.push(t)
        }, e.prototype.getAllGameObjects = function () {
            var t = [];
            return this.layers.forEach(function (e) {
                t = t.concat(t, e.gameObjects)
            }), t
        }, e.prototype.getAllSpriteSheets = function () {
            var t = {};
            return this.layers.forEach(function (e) {
                e.getAllSpriteSheets().forEach(function (e) {
                    t[e.id] = e
                })
            }), this.tileMap && this.tileMap.spriteSheet && (t[this.tileMap.spriteSheet.id] = this.tileMap.spriteSheet), Object.keys(t).map(function (e) {
                return t[e]
            })
        }, e.prototype.preload = function (t) {
            var e = this, r = this.getAllSpriteSheets().concat(this.game.repository.getArray("Font")), i = new n.default;
            i.onResolved = function () {
                t && t()
            }, r.forEach(function (t) {
                var r, n = t.id;
                i.addTask(function () {
                    e.game.renderer.loadTextureInfo(t.resourcePath, function () {
                        return i.resolveTask(n)
                    })
                }, t.id), t.normalMapPath && (r = t.id.toString() + t.normalMapPath, i.addTask(function () {
                    e.game.renderer.loadTextureInfo(t.normalMapPath, function () {
                        return i.resolveTask(r)
                    })
                }, r))
            }), i.start()
        }, e.prototype.onShow = function () {
            this._individualBehaviour && this._individualBehaviour.onCreate(), this.layers.forEach(function (t) {
                t.onShow()
            })
        }, e.prototype.setIndividualBehaviour = function (t) {
            var e = new t(this.game);
            e.game = this.game, e.scene = this, this._individualBehaviour = e
        }, e.prototype.update = function (t, e) {
            var r, i, n, o, s = this;
            for (r = this.game.renderer, r.beginFrameBuffer(), this.useBG ? r.clearColor(this.colorBG) : r.clear(), i = this.layers, n = this.layers.length, o = n - 1, this.game.camera.update(t, e), this._individualBehaviour && this._individualBehaviour.onUpdate(); n--;)i[n - o].update(t, e);
            this.game.repository.getArray("ParticleSystem").forEach(function (r) {
                r.update(t, e)
            }), this._tweens.forEach(function (e, r) {
                e.update(t), e.isCompleted() && s._tweens.splice(r, 1)
            }), this.tileMap.update(), r.flipFrameBuffer(this.filters)
        }, e
    }(i.default), e.default = u
}, function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0});
    var i = function () {
        function t() {
            this.tasksResolved = 0, this.tasks = [], this.tasksProgressById = {}
        }

        return t.prototype.size = function () {
            return this.tasks.length
        }, t.prototype.calcProgress = function () {
            var t = this, e = 0;
            return Object.keys(this.tasksProgressById).forEach(function (r) {
                e += t.tasksProgressById[+r] || 0
            }), e / this.tasks.length
        }, t.prototype.progressTask = function (t, e) {
            this.tasksProgressById[t] = e, this.onProgress && this.onProgress(this.calcProgress())
        }, t.prototype.resolveTask = function (t) {
            this.tasksResolved++, this.tasksProgressById[t] = 1, this.tasks.length === this.tasksResolved ? (this.onProgress && this.onProgress(1), this.onResolved && this.onResolved()) : this.onProgress && this.onProgress(this.calcProgress())
        }, t.prototype.addTask = function (t, e) {
            this.tasks.push(t), this.tasksProgressById[e] = 0
        }, t.prototype.start = function () {
            0 === this.size() && this.onResolved(), this.tasks.forEach(function (t) {
                t && t()
            })
        }, t
    }();
    e.default = i
}, function (t, e, r) {
    "use strict";
    var i, n, o = this && this.__extends || function () {
            var t = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var r in e)e.hasOwnProperty(r) && (t[r] = e[r])
                };
            return function (e, r) {
                function i() {
                    this.constructor = e
                }

                t(e, r), e.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
            }
        }();
    Object.defineProperty(e, "__esModule", {value: !0}), i = r(18), n = function (t) {
        function e(e) {
            return t.call(this, e) || this
        }

        return o(e, t), e
    }(i.default), e.default = n
}, function (t, e, r) {
    "use strict";
    var i, n, o = this && this.__extends || function () {
            var t = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var r in e)e.hasOwnProperty(r) && (t[r] = e[r])
                };
            return function (e, r) {
                function i() {
                    this.constructor = e
                }

                t(e, r), e.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
            }
        }();
    Object.defineProperty(e, "__esModule", {value: !0}), i = r(0), n = function (t) {
        function e(e) {
            var r = t.call(this, e) || this;
            return r.type = "Sound", r.resourcePath = "", r._gain = 1, r._loop = !1, r
        }

        return o(e, t), e.find = function (t) {
        }, e.prototype.play = function () {
        }, e.prototype.stop = function () {
        }, e.prototype.pause = function () {
            throw"not implemented"
        }, e.prototype.setGain = function (t, e, r) {
        }, e
    }(i.default), e.default = n
}, function (t, e, r) {
    "use strict";
    var i, n, o, s = this && this.__extends || function () {
            var t = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var r in e)e.hasOwnProperty(r) && (t[r] = e[r])
                };
            return function (e, r) {
                function i() {
                    this.constructor = e
                }

                t(e, r), e.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
            }
        }();
    Object.defineProperty(e, "__esModule", {value: !0}), i = r(0), n = r(6), function () {
        function t() {
            this.width = 0, this.height = 0, this.symbols = []
        }
    }(), o = function (t) {
        function e(e) {
            var r = t.call(this, e) || this;
            return r.type = "Font", r.resourcePath = null, r.fontSize = 12, r.fontFamily = "Monospace", r.fontContext = null, r.fontColor = {
                r: 0,
                g: 0,
                b: 0
            }, r
        }

        return s(e, t), e.prototype.revalidate = function () {
            var e, r = this;
            t.prototype.revalidate.call(this), e = this.fontContext.symbols, this.fontContext.symbols = {}, Object.keys(e).forEach(function (t) {
                r.fontContext.symbols[t] = new n.default(e[t].x, e[t].y, e[t].width, e[t].height)
            })
        }, e
    }(i.default), e.default = o
}, function (t, e, r) {
    "use strict";
    var i, n, o = this && this.__extends || function () {
            var t = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var r in e)e.hasOwnProperty(r) && (t[r] = e[r])
                };
            return function (e, r) {
                function i() {
                    this.constructor = e
                }

                t(e, r), e.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
            }
        }();
    Object.defineProperty(e, "__esModule", {value: !0}), i = r(0), n = function (t) {
        function e(e) {
            var r = t.call(this, e) || this;
            return r.type = "Layer", r.gameObjects = [], r
        }

        return o(e, t), e.prototype.addGameObject = function (t) {
            t._layer = this, this.gameObjects.push(t)
        }, e.prototype.getAllSpriteSheets = function () {
            var t = [];
            return this.gameObjects.forEach(function (e) {
                e.spriteSheet && !t.find(function (t) {
                    return e.id === t.id
                }) && t.push(e.spriteSheet)
            }), t
        }, e.prototype.onShow = function () {
            this.gameObjects.forEach(function (t) {
                t.onShow()
            })
        }, e.prototype.kill = function (t) {
            this.gameObjects.remove(function (e) {
                return e.id === t.id
            })
        }, e.prototype.update = function (t, e) {
            for (var r, i = this.gameObjects, n = i.length, o = n - 1; n--;)(r = i[o - n]) && r.update(t, e)
        }, e
    }(i.default), e.default = n
}, function (t, e, r) {
    "use strict";
    var i, n, o, s, a, u = this && this.__extends || function () {
            var t = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var r in e)e.hasOwnProperty(r) && (t[r] = e[r])
                };
            return function (e, r) {
                function i() {
                    this.constructor = e
                }

                t(e, r), e.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
            }
        }();
    Object.defineProperty(e, "__esModule", {value: !0}), i = r(4), n = r(1), o = r(11), s = function (t) {
        function e() {
            return t.call(this) || this
        }

        return u(e, t), e.fromPool = function () {
            return e.mousePointsPool.getNextObject()
        }, e.mousePointsPool = new o.default(e), e
    }(n.default), a = function () {
        function t(t) {
            this.objectsCaptured = {}, this.game = t
        }

        return t.prototype.resolvePoint = function (t) {
            var e = this.game, r = t.clientX, i = t.clientY, o = (r - e.pos.x) / e.scale.x, a = (i - e.pos.y) / e.scale.y, u = e.camera.screenToWorld(n.default.fromPool().setXY(o, a)), h = s.fromPool();
            return h.set(u), h.screenX = o, h.screenY = a, h.id = t.identifier || 0, h
        }, t.prototype.triggerEvent = function (t, e, r) {
            var n, o, s, a, u, h, c;
            void 0 === r && (r = !1), n = this.game, o = n.getCurrScene(), s = this.resolvePoint(t);
            t:for (a = 0; a < o.layers.length; a++)for (u = o.layers[o.layers.length - 1 - a], h = 0; h < u.gameObjects.length; h++)if (c = u.gameObjects[h], i.isPointInRect(s, c.getRect())) {
                c.trigger(e, {
                    screenX: s.x,
                    screenY: s.y,
                    objectX: s.x - c.pos.x,
                    objectY: s.y - c.pos.y,
                    id: s.id,
                    target: c,
                    isMouseDown: r
                });
                break t
            }
            return o.trigger(e, {screenX: s.x, screenY: s.y, id: s.id, target: o, isMouseDown: r}), s
        }, t.prototype.resolveClick = function (t) {
            this.triggerEvent(t, "click"), this.triggerEvent(t, "mouseDown")
        }, t.prototype.resolveMouseMove = function (t, e) {
            var r, i = this.triggerEvent(t, "mouseMove", e);
            i && (r = this.objectsCaptured[i.id], r && r !== i.target && (r.trigger("mouseLeave"), delete this.objectsCaptured[i.id]), i.target && r !== i.target && (i.target.trigger("mouseEnter"), this.objectsCaptured[i.id] = i.target))
        }, t.prototype.resolveMouseUp = function (t) {
            var e, r = this.triggerEvent(t, "mouseUp");
            r && (e = this.objectsCaptured[r.id]) && (e.trigger("mouseUp"), delete this.objectsCaptured[r.id])
        }, t.prototype.resolveDoubleClick = function (t) {
            var e = this.triggerEvent(t, "doubleClick");
            e && delete this.objectsCaptured[e.id]
        }, t.prototype.listenTo = function (t) {
            var e = this;
            this.container = t, t.ontouchstart = function (t) {
                for (var r = t.touches.length; r--;)e.resolveClick(t.touches[r])
            }, t.onmousedown = function (t) {
                0 === t.button && e.resolveClick(t)
            }, t.ontouchend = t.ontouchcancel = function (t) {
                for (var r = t.changedTouches.length; r--;)e.resolveMouseUp(t.changedTouches[r])
            }, t.onmouseup = function (t) {
                e.resolveMouseUp(t)
            }, t.ontouchmove = function (t) {
                for (var r = t.touches.length; r--;)e.resolveMouseMove(t.touches[r], !0)
            }, t.onmousemove = function (t) {
                var r = 1 === t.buttons;
                e.resolveMouseMove(t, r)
            }, t.ondblclick = function (t) {
                e.resolveDoubleClick(t)
            }
        }, t.prototype.destroy = function () {
            var t = this;
            ["mouseMove", "ontouchstart", "onmousedown", "ontouchend", "onmouseup", "ontouchmove", "onmousemove", "ondblclick"].forEach(function (e) {
                t.container[e] = null
            })
        }, t
    }(), e.default = a
}, function (t, e, r) {
    "use strict";
    var i, n;
    Object.defineProperty(e, "__esModule", {value: !0}), function (t) {
        t[t.KEY_JUST_PRESSED = 2] = "KEY_JUST_PRESSED", t[t.KEY_PRESSED = 1] = "KEY_PRESSED", t[t.KEY_JUST_RELEASED = 0] = "KEY_JUST_RELEASED", t[t.KEY_RELEASED = -1] = "KEY_RELEASED"
    }(i || (i = {})), n = function () {
        function t(t) {
            this.buffer = {}, this.KEY = {
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
            }, this.game = t
        }

        return t.prototype.press = function (t) {
            this.isPressed(t) || (this.buffer[t] = i.KEY_JUST_PRESSED)
        }, t.prototype.release = function (t) {
            this.isReleased(t) || (this.buffer[t] = i.KEY_JUST_RELEASED)
        }, t.prototype.isPressed = function (t) {
            return this.buffer[t] >= i.KEY_PRESSED
        }, t.prototype.isJustPressed = function (t) {
            return this.buffer[t] === i.KEY_JUST_PRESSED
        }, t.prototype.isReleased = function (t) {
            return void 0 === this.buffer[t] || this.buffer[t] <= i.KEY_JUST_RELEASED
        }, t.prototype.isJustReleased = function (t) {
            return this.buffer[t] === i.KEY_JUST_RELEASED
        }, t.prototype.update = function () {
            var t = this;
            Object.keys(this.buffer).forEach(function (e) {
                var r = +e;
                t.buffer[r] === i.KEY_RELEASED ? delete t.buffer[r] : t.buffer[r] === i.KEY_JUST_RELEASED && (t.buffer[r] = i.KEY_RELEASED), t.buffer[r] === i.KEY_JUST_PRESSED && (t.buffer[r] = i.KEY_PRESSED)
            })
        }, t.prototype.listenTo = function () {
            var t = this;
            this.keyDownListener = function (e) {
                var r = e.keyCode;
                t.press(r)
            }, this.keyUpListener = function (e) {
                var r = e.keyCode;
                t.release(r)
            }, window.addEventListener("keydown", this.keyDownListener), window.addEventListener("keyup", this.keyUpListener)
        }, t.prototype.destroy = function () {
            window.removeEventListener("keydown", this.keyDownListener), window.removeEventListener("keyup", this.keyUpListener)
        }, t
    }(), e.default = n
}, function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0});
    var i = function () {
        function t(t) {
            this.game = t
        }

        return t.prototype.update = function () {
            var t, e, r, i, n, o, s, a;
            for (this.gamepads = navigator.getGamepads && navigator.getGamepads() || navigator.webkitGetGamepads && navigator.webkitGetGamepads() || navigator.webkitGamepads || navigator.mozGamepads || navigator.msGamepads || navigator.gamepads || [], t = 0, e = this.gamepads.length; t < e; t++)if (r = this.gamepads[t]) {
                for (i = r.buttons.length, i > 7 && (i = 7), n = 0; n < i; n++)o = r.buttons[n], o.pressed ? this.game.keyboard.press(n) : this.game.keyboard.release(n);
                0 !== r.axes[0] && 0 !== r.axes[1] && (s = ~~r.axes[0], a = ~~r.axes[1], 1 === s ? this.game.keyboard.press(this.game.keyboard.KEY.GAME_PAD_AXIS_RIGHT) : this.game.keyboard.release(this.game.keyboard.KEY.GAME_PAD_AXIS_RIGHT), -1 === s ? this.game.keyboard.press(this.game.keyboard.KEY.GAME_PAD_AXIS_LEFT) : this.game.keyboard.release(this.game.keyboard.KEY.GAME_PAD_AXIS_LEFT), 1 === a ? this.game.keyboard.press(this.game.keyboard.KEY.GAME_PAD_AXIS_DOWN) : this.game.keyboard.release(this.game.keyboard.KEY.GAME_PAD_AXIS_DOWN), -1 === a ? this.game.keyboard.press(this.game.keyboard.KEY.GAME_PAD_AXIS_UP) : this.game.keyboard.release(this.game.keyboard.KEY.GAME_PAD_AXIS_UP))
            }
        }, t
    }();
    e.default = i
}, function (t, e, r) {
    "use strict";
    var i, n;
    Object.defineProperty(e, "__esModule", {value: !0}), i = r(4), n = function () {
        function t(t) {
            this.game = t
        }

        return t.prototype.moveBy = function (t, e) {
            var r, n, o, s, a, u, h, c, f, p, l, d, y = this.game.getCurrScene().getAllGameObjects().concat(this.game.getCurrScene().tileMap.getTilesAtRect(t.getRect())), m = t.getRect(), g = t.rigidBody;
            for (m.x += e.x, m.y += e.y, r = !1, n = !1, o = t.pos.y + e.y, g._onFloorInPrevFrame = g._onFloorInCurrFrame, s = 0, a = y.length; s < a; s++)u = y[s], null !== u.rigidBody && (h = u.getRect(), t !== y[s] && i.overlapTest(m, h) && (c = m.bottom - h.y, f = h.bottom - m.y, p = m.x + m.width - h.x, l = h.right - m.x, d = Math.min(c, f, p, l), c === d ? (t.pos.setY(h.y - m.height), n = !0) : f === d ? (t.pos.setY(h.bottom), n = !0, g.vel.setY(0)) : p === d ? (t.pos.setX(h.x - m.width), r = !0, g.vel.setX(0)) : l === d && (t.pos.setX(h.x + h.width), r = !0, g.vel.setX(0))));
            r || t.pos.addX(e.x), n || t.pos.addY(e.y), g._onFloorInCurrFrame = o > t.pos.y, g.onFloor = g.vel.y >= 0 && (g._onFloorInPrevFrame || g._onFloorInCurrFrame), t.rigidBody.onFloor && t.rigidBody.vel.setY(0)
        }, t.prototype.moveTo = function (t, e) {
            var r = t.getRect(), n = !1;
            t.rigidBody && this.game.getCurrScene().getAllGameObjects().concat(this.game.getCurrScene().tileMap.getTilesAtRect(r)).some(function (t) {
                if (i.overlapTest(r, t.getRect()))return n = !0, !0
            }), n || (t.pos.setX(e.x), t.pos.setY(e.y))
        }, t
    }(), e.default = n
}, function (t, e, r) {
    "use strict";
    var i, n, o, s, a, u, h;
    Object.defineProperty(e, "__esModule", {value: !0}), i = r(25), n = r(9), o = r(4), s = r(6), a = r(1), u = r(4), h = function () {
        function t(t) {
            this.objFollowTo = null, this.scene = null, this.sceneWidth = 0, this.sceneHeight = 0, this.pos = new a.default(0, 0), this.scale = new a.default(1, 1), this._rect = new s.default, this._rectScaled = new s.default, this.cameraShakeTween = null, this.cameraPosCorrection = {
                current: new a.default,
                max: new a.default
            }, this.game = t
        }

        return t.prototype.followTo = function (t) {
            null !== t && (this.objFollowTo = t, this.scene = this.game.getCurrScene(), this.scene.tileMap.spriteSheet ? (this.sceneWidth = this.scene.tileMap.spriteSheet._frameWidth * this.scene.tileMap.width, this.sceneHeight = this.scene.tileMap.spriteSheet._frameHeight * this.scene.tileMap.height) : (this.sceneWidth = this.game.getCurrScene().width || this.game.width, this.sceneHeight = this.game.getCurrScene().height || this.game.height))
        }, t.prototype.update = function (t, e) {
            var r, i, n, o, s, u, h, c, f, p, l = this.objFollowTo;
            l && (r = this.scene.tileMap.spriteSheet ? this.scene.tileMap.spriteSheet._frameWidth : 0, i = this.scene.tileMap.spriteSheet ? this.scene.tileMap.spriteSheet._frameHeight : 0, n = this.game.width, o = this.game.height, s = n / 2, u = o / 2, h = this.getRectScaled().width, "Right" === l._lastDirection && (this.cameraPosCorrection.max.x = h / 3), "Left" === l._lastDirection && (this.cameraPosCorrection.max.x = -h / 3), c = this.cameraPosCorrection.max.substract(this.cameraPosCorrection.current).multiply(.05), this.cameraPosCorrection.current.add(c), f = a.default.fromPool(), p = a.default.fromPool(), p.set(this.objFollowTo.pos), p.addXY(-s, -u), f.x = this.pos.x + .1 * (p.x + this.cameraPosCorrection.current.x - this.pos.x), f.y = this.pos.y + .1 * (p.y - this.pos.y), f.x < 0 && (f.x = 0), f.y < 0 && (f.y = 0), f.x > this.sceneWidth - n + r && (f.x = this.sceneWidth - n + r), f.y > this.sceneHeight - o + i && (f.y = this.sceneHeight - o + i), this.pos.setXY(f.x, f.y), this.cameraShakeTween && this.cameraShakeTween.update(t), this._updateRect(), this.render())
        }, t.prototype.shake = function (t, e) {
            var r = this, n = {time: 0, point: new a.default(0, 0)};
            this.cameraShakeTween = new i.default({
                target: n, time: e, to: {time: e}, progress: function () {
                    var e = u.random(-t / 2, t / 2), r = u.random(-t / 2, t / 2);
                    n.point.setXY(e, r)
                }, complete: function () {
                    return r.cameraShakeTween = null
                }
            })
        }, t.prototype._updateRect = function () {
            var t = this.screenToWorld(a.default.fromPool().setXY(0, 0)), e = this.screenToWorld(a.default.fromPool().setXY(this.game.width, this.game.height));
            this._rectScaled.set(t.x, t.y, e.x - t.x, e.y - t.y)
        }, t.prototype.render = function () {
            this.game.renderer.translate(this.game.width / 2, this.game.height / 2), this.game.renderer.scale(this.scale.x, this.scale.y), this.game.renderer.translate(-this.game.width / 2, -this.game.height / 2), this.game.renderer.translate(-this.pos.x, -this.pos.y), null !== this.cameraShakeTween && this.game.renderer.translate(this.cameraShakeTween.getTarget().point.x, this.cameraShakeTween.getTarget().point.y)
        }, t.prototype.screenToWorld = function (t) {
            var e = n.makeScale(this.scale.x, this.scale.y, 1), r = o.unProject(t, this.game.width, this.game.height, e);
            return r.add(this.pos), r
        }, t.prototype.getRect = function () {
            return this._rect.set(this.pos.x, this.pos.y, this.game.width, this.game.height), this._rect
        }, t.prototype.getRectScaled = function () {
            return this._rectScaled
        }, t
    }(), e.default = h
}, function (t, e, r) {
    "use strict";
    var i, n, o, s, a, u;
    e.__esModule = !0, i = r(83), Object.defineProperty(e, "ClampBehaviour", {
        enumerable: !0, get: function () {
            return i.ClampBehaviour
        }
    }), n = r(84), Object.defineProperty(e, "DudeBehaviour", {
        enumerable: !0, get: function () {
            return n.DudeBehaviour
        }
    }), o = r(85), Object.defineProperty(e, "Ground1Behaviour", {
        enumerable: !0, get: function () {
            return o.Ground1Behaviour
        }
    }), s = r(86), Object.defineProperty(e, "MainSceneBehaviour", {
        enumerable: !0, get: function () {
            return s.MainSceneBehaviour
        }
    }), a = r(87), Object.defineProperty(e, "PlatformBehaviour", {
        enumerable: !0, get: function () {
            return a.PlatformBehaviour
        }
    }), u = r(88), Object.defineProperty(e, "TileBehaviour", {
        enumerable: !0, get: function () {
            return u.TileBehaviour
        }
    })
}, function (t, e, r) {
    "use strict";
    function i(t, e) {
        if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
    }

    e.__esModule = !0;
    e.ClampBehaviour = function () {
        function t() {
            i(this, t)
        }

        return t.prototype.onCreate = function () {
        }, t.prototype.onUpdate = function () {
        }, t.prototype.onDestroy = function () {
        }, t
    }()
}, function (t, e, r) {
    "use strict";
    function i(t, e) {
        if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
    }

    e.__esModule = !0;
    e.DudeBehaviour = function () {
        function t() {
            i(this, t)
        }

        return t.prototype.onCreate = function () {
            this.game.camera.followTo(this.gameObject)
        }, t.prototype.onUpdate = function () {
            this.game.lightArray.getLightAt(0).pos.setXY(this.gameObject.pos.x + 16, this.gameObject.pos.y + 16), (this.game.keyboard.isJustPressed(this.game.keyboard.KEY.UP) || this.game.keyboard.isJustPressed(this.game.keyboard.KEY.GAME_PAD_1)) && this.gameObject.rigidBody.onFloor && this.gameObject.rigidBody.vel.addXY(0, -340), (this.game.keyboard.isPressed(this.game.keyboard.KEY.A) || this.game.keyboard.isPressed(this.game.keyboard.KEY.GAME_PAD_5)) && this.gameObject.rigidBody.vel.addXY(0, -50)
        }, t.prototype.onDestroy = function () {
        }, t
    }()
}, function (t, e, r) {
    "use strict";
    function i(t, e) {
        if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
    }

    e.__esModule = !0;
    e.Ground1Behaviour = function () {
        function t() {
            i(this, t)
        }

        return t.prototype.onCreate = function () {
        }, t.prototype.onUpdate = function () {
        }, t.prototype.onDestroy = function () {
        }, t
    }()
}, function (t, e, r) {
    "use strict";
    function i(t, e) {
        if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
    }

    var n;
    e.__esModule = !0, e.MainSceneBehaviour = void 0, n = r(20), e.MainSceneBehaviour = function () {
        function t() {
            i(this, t)
        }

        return t.prototype.onCreate = function () {
            var t, e, r = this;
            this.x = 0, this.y = 0, this.color = n._global.Color.RGB(255, 0, 0), this.points = [], this.scene.on("mouseMove", function (t) {
            }), this.scene.on("mouseMove", function (t) {
                r.x = t.screenX, r.y = t.screenY
            }), this.offsetX = 0, this.cnt = 0, t = this.game.lightArray.getLightAt(0), t.color = n._global.Color.RGB(244, 251, 51), t.nearRadius = 40, t.farRadius = 100, t.isOn = !0, t.pos.setXY(100, 100), e = this.game.lightArray.getLightAt(1), e.color = n._global.Color.RGB(255, 255, 122), e.nearRadius = 50, e.farRadius = 120, e.isOn = !0, e.pos.setXY(100, 100), this.scene.ambientLight.color = n._global.Color.RGB(25, 25, 51)
        }, t.prototype.onUpdate = function () {
            var t;
            this.cnt++, 5 === this.cnt && (this.points.shift(), this.cnt = 0), this.game.renderer.fillRect({
                x: this.x,
                y: this.y,
                width: 10,
                height: 10
            }, this.color), this.points.forEach(function (t) {
            }), this.game.camera, t = this.game.camera.getRectScaled(), this.game.renderer.drawTiledImage("resources/tile.jpg", {
                x: 130,
                y: 0,
                width: 130,
                height: 61
            }, {x: t.x, y: t.y, width: 100, height: 100}, {
                x: this.offsetX,
                y: this.offsetX
            }), this.game.renderer.log(t), this.offsetX += .1
        }, t.prototype.onDestroy = function () {
        }, t
    }()
}, function (t, e, r) {
    "use strict";
    function i(t, e) {
        if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
    }

    e.__esModule = !0;
    e.PlatformBehaviour = function () {
        function t() {
            i(this, t)
        }

        return t.prototype.onCreate = function () {
            this.gameObject.rigidBody.isStatic = !0
        }, t.prototype.onUpdate = function () {
        }, t.prototype.onDestroy = function () {
        }, t
    }()
}, function (t, e, r) {
    "use strict";
    function i(t, e) {
        if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
    }

    e.__esModule = !0;
    e.TileBehaviour = function () {
        function t() {
            i(this, t)
        }

        return t.prototype.onCreate = function () {
        }, t.prototype.onUpdate = function () {
        }, t.prototype.onDestroy = function () {
        }, t
    }()
}, function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0}), e.gameProps = {
        width: 800,
        height: 500,
        scaleStrategy: 1,
        startSceneId: 2,
        scale: {x: 1, y: 1},
        pos: {x: 0, y: 0},
        gravityConstant: 800
    }
}, function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0}), e.repository = {
        Scene: [{
            id: 2,
            name: "mainScene",
            width: 5e3,
            height: 800,
            type: "Scene",
            layers: [{type: "Layer", id: 2}],
            useBG: !0,
            colorBG: {r: 22, g: 30, b: 67, a: 255},
            tileMap: {id: 52, type: "TileMap"}
        }],
        Layer: [{
            id: 2,
            name: "layer1",
            type: "Layer",
            gameObjects: [{type: "GameObject", id: 7}, {type: "GameObject", id: 63}, {
                type: "GameObject",
                id: 64
            }, {type: "GameObject", id: 65}, {type: "GameObject", id: 67}, {
                type: "GameObject",
                id: 68
            }, {type: "GameObject", id: 71}, {type: "GameObject", id: 74}, {
                type: "TextField",
                id: 76
            }, {type: "GameObject", id: 77}, {type: "GameObject", id: 78}, {
                type: "GameObject",
                id: 81
            }, {type: "GameObject", id: 82}, {type: "GameObject", id: 86}, {type: "GameObject", id: 87}]
        }],
        SpriteSheet: [{
            id: 3,
            name: "dude",
            width: 288,
            height: 48,
            type: "SpriteSheet",
            numOfFramesH: 9,
            resourcePath: "resources/dude.png",
            frameRect: {x: {x: 0, y: 0, width: 0, height: 0}}
        }, {
            id: 5,
            name: "platform",
            width: 500,
            height: 64,
            type: "SpriteSheet",
            resourcePath: "resources/platform.png",
            frameRect: {x: {x: 0, y: 0, width: 0, height: 0}}
        }, {
            name: "ground",
            width: 800,
            height: 32,
            type: "SpriteSheet",
            numOfFramesH: 25,
            resourcePath: "resources/ground.png",
            id: 57
        }, {
            name: "clamp",
            width: 300,
            height: 300,
            type: "SpriteSheet",
            resourcePath: "resources/clamp.png",
            normalMapPath: "resources/clamp_normal.png",
            id: 69
        }, {
            name: "tile",
            width: 262,
            height: 192,
            type: "SpriteSheet",
            resourcePath: "resources/tile.jpg",
            id: 72
        }, {
            name: "flare",
            width: 174,
            height: 173,
            type: "SpriteSheet",
            resourcePath: "resources/flare.png",
            id: 79
        }, {
            name: "eso1611a",
            width: 120,
            height: 120,
            type: "SpriteSheet",
            resourcePath: "resources/eso1611a.png",
            id: 84
        }],
        GameObjectProto: [{
            id: 4,
            name: "dude",
            width: 32,
            height: 48,
            rigid: !0,
            type: "GameObjectProto",
            spriteSheet: {id: 3, type: "SpriteSheet"},
            commonBehaviour: [{type: "CommonBehaviour", id: 15}, {type: "CommonBehaviour", id: 60}],
            frameAnimations: [{type: "FrameAnimation", id: 11}, {
                type: "FrameAnimation",
                id: 12
            }, {type: "FrameAnimation", id: 13}, {type: "FrameAnimation", id: 14}]
        }, {
            id: 6,
            name: "platform",
            width: 500,
            height: 64,
            rigid: !0,
            type: "GameObjectProto",
            spriteSheet: {id: 5, type: "SpriteSheet"},
            commonBehaviour: [{type: "CommonBehaviour", id: 61}]
        }, {
            id: 58,
            name: "ground1",
            width: 32,
            height: 32,
            rigid: !0,
            type: "GameObjectProto",
            spriteSheet: {id: 57, type: "SpriteSheet"},
            commonBehaviour: [{type: "CommonBehaviour", id: 62}],
            currFrameIndex: 9
        }, {
            id: 70,
            name: "clamp",
            width: 64,
            height: 64,
            rigid: !0,
            type: "GameObjectProto",
            spriteSheet: {id: 69, type: "SpriteSheet"},
            commonBehaviour: [{type: "CommonBehaviour", id: 75}]
        }, {
            id: 73,
            name: "tile",
            width: 262,
            height: 192,
            rigid: !0,
            type: "GameObjectProto",
            spriteSheet: {id: 72, type: "SpriteSheet"}
        }, {
            id: 80,
            name: "flare",
            width: 174,
            height: 173,
            type: "GameObjectProto",
            spriteSheet: {id: 79, type: "SpriteSheet"},
            commonBehaviour: [{type: "CommonBehaviour", id: 83}]
        }, {
            id: 85,
            name: "eso1611a",
            width: 120,
            height: 120,
            type: "GameObjectProto",
            spriteSheet: {id: 84, type: "SpriteSheet"},
            commonBehaviour: [{type: "CommonBehaviour", id: 88}]
        }],
        GameObject: [{
            id: 7,
            name: "dude",
            pos: {x: 252, y: 57},
            layerId: 2,
            type: "GameObject",
            gameObjectProto: {id: 4, type: "GameObjectProto"}
        }, {
            id: 63,
            name: "ground1",
            pos: {x: 400, y: 95},
            layerId: 2,
            type: "GameObject",
            gameObjectProto: {id: 58, type: "GameObjectProto"}
        }, {
            id: 64,
            name: "platform",
            pos: {x: 471, y: 478},
            layerId: 2,
            type: "GameObject",
            gameObjectProto: {id: 6, type: "GameObjectProto"}
        }, {
            id: 65,
            name: "platform",
            pos: {x: 74, y: 143},
            layerId: 2,
            type: "GameObject",
            gameObjectProto: {id: 6, type: "GameObjectProto"}
        }, {
            id: 67,
            name: "ground1",
            pos: {x: 483, y: 45},
            layerId: 2,
            type: "GameObject",
            gameObjectProto: {id: 58, type: "GameObjectProto"}
        }, {
            id: 68,
            name: "ground1",
            pos: {x: 348, y: 47},
            layerId: 2,
            type: "GameObject",
            gameObjectProto: {id: 58, type: "GameObjectProto"}
        }, {
            id: 71,
            name: "clamp",
            pos: {x: 747, y: 124},
            layerId: 2,
            type: "GameObject",
            gameObjectProto: {id: 70, type: "GameObjectProto"}
        }, {
            id: 74,
            name: "tile",
            pos: {x: 360, y: 228},
            layerId: 2,
            type: "GameObject",
            gameObjectProto: {id: 73, type: "GameObjectProto"}
        }, {
            id: 77,
            name: "platform",
            pos: {x: 62, y: 304},
            layerId: 2,
            type: "GameObject",
            gameObjectProto: {id: 6, type: "GameObjectProto"}
        }, {
            id: 78,
            name: "platform",
            pos: {x: 43, y: 393},
            layerId: 2,
            type: "GameObject",
            gameObjectProto: {id: 6, type: "GameObjectProto"}
        }, {
            id: 81,
            name: "flare",
            pos: {x: 651, y: 67},
            layerId: 2,
            type: "GameObject",
            gameObjectProto: {id: 80, type: "GameObjectProto"}
        }, {
            id: 82,
            name: "flare",
            pos: {x: 617, y: 36},
            layerId: 2,
            type: "GameObject",
            gameObjectProto: {id: 80, type: "GameObjectProto"}
        }, {
            id: 86,
            name: "eso1611a",
            pos: {x: 616, y: 53},
            layerId: 2,
            type: "GameObject",
            gameObjectProto: {id: 85, type: "GameObjectProto"}
        }, {
            id: 87,
            name: "eso1611a",
            pos: {x: 625, y: 56},
            layerId: 2,
            type: "GameObject",
            gameObjectProto: {id: 85, type: "GameObjectProto"}
        }],
        FrameAnimation: [{name: "left", type: "FrameAnimation", frames: [0, 1, 2, 3], id: 11}, {
            name: "right",
            type: "FrameAnimation",
            frames: [5, 6, 7, 8],
            id: 12
        }, {name: "idleLeft", type: "FrameAnimation", frames: [4], id: 13}, {
            name: "idleRight",
            type: "FrameAnimation",
            frames: [4],
            id: 14
        }],
        CommonBehaviour: [{
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
        }, {name: "Draggable", type: "CommonBehaviour", id: 60}, {
            name: "Draggable",
            type: "CommonBehaviour",
            id: 61
        }, {name: "Draggable", type: "CommonBehaviour", id: 62}, {
            name: "Draggable",
            type: "CommonBehaviour",
            id: 75
        }, {name: "Draggable", type: "CommonBehaviour", id: 83}, {name: "Draggable", type: "CommonBehaviour", id: 88}],
        Font: [{
            id: 22,
            name: "font1",
            type: "Font",
            resourcePath: "resources/font1.png",
            fontSize: 21,
            fontFamily: "monospace",
            fontContext: {
                symbols: {
                    0: {x: 24, y: 36, width: 12, height: 24},
                    1: {x: 45, y: 36, width: 12, height: 24},
                    2: {x: 65, y: 36, width: 12, height: 24},
                    3: {x: 86, y: 36, width: 12, height: 24},
                    4: {x: 107, y: 36, width: 12, height: 24},
                    5: {x: 127, y: 36, width: 12, height: 24},
                    6: {x: 148, y: 36, width: 12, height: 24},
                    7: {x: 168, y: 36, width: 12, height: 24},
                    8: {x: 189, y: 36, width: 12, height: 24},
                    9: {x: 210, y: 36, width: 12, height: 24},
                    " ": {x: 4, y: 4, width: 12, height: 24},
                    "!": {x: 24, y: 4, width: 12, height: 24},
                    '"': {x: 45, y: 4, width: 12, height: 24},
                    "#": {x: 65, y: 4, width: 12, height: 24},
                    $: {x: 86, y: 4, width: 12, height: 24},
                    "%": {x: 107, y: 4, width: 12, height: 24},
                    "&": {x: 127, y: 4, width: 12, height: 24},
                    "'": {x: 148, y: 4, width: 12, height: 24},
                    "(": {x: 168, y: 4, width: 12, height: 24},
                    ")": {x: 189, y: 4, width: 12, height: 24},
                    "*": {x: 210, y: 4, width: 12, height: 24},
                    "+": {x: 230, y: 4, width: 12, height: 24},
                    ",": {x: 251, y: 4, width: 12, height: 24},
                    "-": {x: 271, y: 4, width: 12, height: 24},
                    ".": {x: 292, y: 4, width: 12, height: 24},
                    "/": {x: 4, y: 36, width: 12, height: 24},
                    ":": {x: 230, y: 36, width: 12, height: 24},
                    ";": {x: 251, y: 36, width: 12, height: 24},
                    "<": {x: 271, y: 36, width: 12, height: 24},
                    "=": {x: 292, y: 36, width: 12, height: 24},
                    ">": {x: 4, y: 68, width: 12, height: 24},
                    "?": {x: 24, y: 68, width: 12, height: 24},
                    "@": {x: 45, y: 68, width: 12, height: 24},
                    A: {x: 65, y: 68, width: 12, height: 24},
                    B: {x: 86, y: 68, width: 12, height: 24},
                    C: {x: 107, y: 68, width: 12, height: 24},
                    D: {x: 127, y: 68, width: 12, height: 24},
                    E: {x: 148, y: 68, width: 12, height: 24},
                    F: {x: 168, y: 68, width: 12, height: 24},
                    G: {x: 189, y: 68, width: 12, height: 24},
                    H: {x: 210, y: 68, width: 12, height: 24},
                    I: {x: 230, y: 68, width: 12, height: 24},
                    J: {x: 251, y: 68, width: 12, height: 24},
                    K: {x: 271, y: 68, width: 12, height: 24},
                    L: {x: 292, y: 68, width: 12, height: 24},
                    M: {x: 4, y: 100, width: 12, height: 24},
                    N: {x: 24, y: 100, width: 12, height: 24},
                    O: {x: 45, y: 100, width: 12, height: 24},
                    P: {x: 65, y: 100, width: 12, height: 24},
                    Q: {x: 86, y: 100, width: 12, height: 24},
                    R: {x: 107, y: 100, width: 12, height: 24},
                    S: {x: 127, y: 100, width: 12, height: 24},
                    T: {x: 148, y: 100, width: 12, height: 24},
                    U: {x: 168, y: 100, width: 12, height: 24},
                    V: {x: 189, y: 100, width: 12, height: 24},
                    W: {x: 210, y: 100, width: 12, height: 24},
                    X: {x: 230, y: 100, width: 12, height: 24},
                    Y: {x: 251, y: 100, width: 12, height: 24},
                    Z: {x: 271, y: 100, width: 12, height: 24},
                    "[": {x: 292, y: 100, width: 12, height: 24},
                    "\\": {x: 4, y: 132, width: 12, height: 24},
                    "]": {x: 24, y: 132, width: 12, height: 24},
                    "^": {x: 45, y: 132, width: 12, height: 24},
                    _: {x: 65, y: 132, width: 12, height: 24},
                    "`": {x: 86, y: 132, width: 12, height: 24},
                    a: {x: 107, y: 132, width: 12, height: 24},
                    b: {x: 127, y: 132, width: 12, height: 24},
                    c: {x: 148, y: 132, width: 12, height: 24},
                    d: {x: 168, y: 132, width: 12, height: 24},
                    e: {x: 189, y: 132, width: 12, height: 24},
                    f: {x: 210, y: 132, width: 12, height: 24},
                    g: {x: 230, y: 132, width: 12, height: 24},
                    h: {x: 251, y: 132, width: 12, height: 24},
                    i: {x: 271, y: 132, width: 12, height: 24},
                    j: {x: 292, y: 132, width: 12, height: 24},
                    k: {x: 4, y: 164, width: 12, height: 24},
                    l: {x: 24, y: 164, width: 12, height: 24},
                    m: {x: 45, y: 164, width: 12, height: 24},
                    n: {x: 65, y: 164, width: 12, height: 24},
                    o: {x: 86, y: 164, width: 12, height: 24},
                    p: {x: 107, y: 164, width: 12, height: 24},
                    q: {x: 127, y: 164, width: 12, height: 24},
                    r: {x: 148, y: 164, width: 12, height: 24},
                    s: {x: 168, y: 164, width: 12, height: 24},
                    t: {x: 189, y: 164, width: 12, height: 24},
                    u: {x: 210, y: 164, width: 12, height: 24},
                    v: {x: 230, y: 164, width: 12, height: 24},
                    w: {x: 251, y: 164, width: 12, height: 24},
                    x: {x: 271, y: 164, width: 12, height: 24},
                    y: {x: 292, y: 164, width: 12, height: 24},
                    z: {x: 4, y: 196, width: 12, height: 24},
                    "{": {x: 24, y: 196, width: 12, height: 24},
                    "|": {x: 45, y: 196, width: 12, height: 24},
                    "}": {x: 65, y: 196, width: 12, height: 24},
                    "~": {x: 86, y: 196, width: 12, height: 24},
                    "": {x: 107, y: 196, width: 12, height: 24},
                    "": {x: 127, y: 196, width: 12, height: 24},
                    "": {x: 148, y: 196, width: 12, height: 24},
                    "": {x: 168, y: 196, width: 12, height: 24},
                    "": {x: 189, y: 196, width: 12, height: 24},
                    "": {x: 210, y: 196, width: 12, height: 24},
                    "": {x: 230, y: 196, width: 12, height: 24},
                    "": {x: 251, y: 196, width: 12, height: 24},
                    "": {x: 271, y: 196, width: 12, height: 24},
                    "": {x: 292, y: 196, width: 12, height: 24},
                    "": {x: 4, y: 228, width: 12, height: 24},
                    "": {x: 24, y: 228, width: 12, height: 24},
                    "": {x: 45, y: 228, width: 12, height: 24},
                    "": {x: 65, y: 228, width: 12, height: 24},
                    "": {x: 86, y: 228, width: 12, height: 24},
                    "": {x: 107, y: 228, width: 12, height: 24},
                    "": {x: 127, y: 228, width: 12, height: 24},
                    "": {x: 148, y: 228, width: 12, height: 24},
                    "": {x: 168, y: 228, width: 12, height: 24},
                    "": {x: 189, y: 228, width: 12, height: 24},
                    "": {x: 210, y: 228, width: 12, height: 24},
                    "": {x: 230, y: 228, width: 12, height: 24},
                    "": {x: 251, y: 228, width: 12, height: 24},
                    "А": {x: 271, y: 228, width: 12, height: 24},
                    "Б": {x: 292, y: 228, width: 12, height: 24},
                    "В": {x: 4, y: 260, width: 12, height: 24},
                    "Г": {x: 24, y: 260, width: 12, height: 24},
                    "Д": {x: 45, y: 260, width: 12, height: 24},
                    "Е": {x: 65, y: 260, width: 12, height: 24},
                    "Ж": {x: 86, y: 260, width: 12, height: 24},
                    "З": {x: 107, y: 260, width: 12, height: 24},
                    "И": {x: 127, y: 260, width: 12, height: 24},
                    "Й": {x: 148, y: 260, width: 12, height: 24},
                    "К": {x: 168, y: 260, width: 12, height: 24},
                    "Л": {x: 189, y: 260, width: 12, height: 24},
                    "М": {x: 210, y: 260, width: 12, height: 24},
                    "Н": {x: 230, y: 260, width: 12, height: 24},
                    "О": {x: 251, y: 260, width: 12, height: 24},
                    "П": {x: 271, y: 260, width: 12, height: 24},
                    "Р": {x: 292, y: 260, width: 12, height: 24},
                    "С": {x: 4, y: 292, width: 12, height: 24},
                    "Т": {x: 24, y: 292, width: 12, height: 24},
                    "У": {x: 45, y: 292, width: 12, height: 24},
                    "Ф": {x: 65, y: 292, width: 12, height: 24},
                    "Х": {x: 86, y: 292, width: 12, height: 24},
                    "Ц": {x: 107, y: 292, width: 12, height: 24},
                    "Ч": {x: 127, y: 292, width: 12, height: 24},
                    "Ш": {x: 148, y: 292, width: 12, height: 24},
                    "Щ": {x: 168, y: 292, width: 12, height: 24},
                    "Ъ": {x: 189, y: 292, width: 12, height: 24},
                    "Ы": {x: 210, y: 292, width: 12, height: 24},
                    "Ь": {x: 230, y: 292, width: 12, height: 24},
                    "Э": {x: 251, y: 292, width: 12, height: 24},
                    "Ю": {x: 271, y: 292, width: 12, height: 24},
                    "Я": {x: 292, y: 292, width: 12, height: 24},
                    "а": {x: 4, y: 324, width: 12, height: 24},
                    "б": {x: 24, y: 324, width: 12, height: 24},
                    "в": {x: 45, y: 324, width: 12, height: 24},
                    "г": {x: 65, y: 324, width: 12, height: 24},
                    "д": {x: 86, y: 324, width: 12, height: 24},
                    "е": {x: 107, y: 324, width: 12, height: 24},
                    "ж": {x: 127, y: 324, width: 12, height: 24},
                    "з": {x: 148, y: 324, width: 12, height: 24},
                    "и": {x: 168, y: 324, width: 12, height: 24},
                    "й": {x: 189, y: 324, width: 12, height: 24},
                    "к": {x: 210, y: 324, width: 12, height: 24},
                    "л": {x: 230, y: 324, width: 12, height: 24},
                    "м": {x: 251, y: 324, width: 12, height: 24},
                    "н": {x: 271, y: 324, width: 12, height: 24},
                    "о": {x: 292, y: 324, width: 12, height: 24},
                    "п": {x: 4, y: 356, width: 12, height: 24},
                    "р": {x: 24, y: 356, width: 12, height: 24},
                    "с": {x: 45, y: 356, width: 12, height: 24},
                    "т": {x: 65, y: 356, width: 12, height: 24},
                    "у": {x: 86, y: 356, width: 12, height: 24},
                    "ф": {x: 107, y: 356, width: 12, height: 24},
                    "х": {x: 127, y: 356, width: 12, height: 24},
                    "ц": {x: 148, y: 356, width: 12, height: 24},
                    "ч": {x: 168, y: 356, width: 12, height: 24},
                    "ш": {x: 189, y: 356, width: 12, height: 24},
                    "щ": {x: 210, y: 356, width: 12, height: 24},
                    "ъ": {x: 230, y: 356, width: 12, height: 24},
                    "ы": {x: 251, y: 356, width: 12, height: 24},
                    "ь": {x: 271, y: 356, width: 12, height: 24},
                    "э": {x: 292, y: 356, width: 12, height: 24},
                    "ю": {x: 4, y: 388, width: 12, height: 24},
                    "я": {x: 24, y: 388, width: 12, height: 24},
                    "ѐ": {x: 45, y: 388, width: 12, height: 24},
                    "ё": {x: 65, y: 388, width: 12, height: 24},
                    "ђ": {x: 86, y: 388, width: 12, height: 24},
                    "ѓ": {x: 107, y: 388, width: 12, height: 24},
                    "є": {x: 127, y: 388, width: 12, height: 24},
                    "ѕ": {x: 148, y: 388, width: 12, height: 24},
                    "і": {x: 168, y: 388, width: 12, height: 24},
                    "ї": {x: 189, y: 388, width: 12, height: 24},
                    "ј": {x: 210, y: 388, width: 12, height: 24},
                    "љ": {x: 230, y: 388, width: 12, height: 24},
                    "њ": {x: 251, y: 388, width: 12, height: 24},
                    "ћ": {x: 271, y: 388, width: 12, height: 24}
                }, width: 320, height: 416
            }
        }],
        TileMap: [{
            id: 52,
            width: 50,
            height: 50,
            type: "TileMap",
            spriteSheet: {id: 57, type: "SpriteSheet"},
            data: [[], null, null, [null, null, null, null, 2, null, null], [null, null], [1, null, 3, null, null, 1, 1, 1, 1, 1, 1, 1, 1, 1], null, [null, 1, null, 1]]
        }],
        TextField: [{
            id: 76,
            name: "textField1",
            width: 120,
            height: 24,
            pos: {x: 22, y: 25},
            layerId: 2,
            type: "TextField",
            text: "textField1",
            font: {id: 22, type: "Font"}
        }]
    }
}]);