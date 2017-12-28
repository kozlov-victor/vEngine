(function(t) {
    var e = {};
    function r(i) {
        if (e[i]) {
            return e[i].exports;
        }
        var n = e[i] = {
            i: i,
            l: false,
            exports: {}
        };
        t[i].call(n.exports, n, n.exports, r);
        n.l = true;
        return n.exports;
    }
    r.m = t;
    r.c = e;
    r.i = function(t) {
        return t;
    };
    r.d = function(t, e, i) {
        if (!r.o(t, e)) {
            Object.defineProperty(t, e, {
                configurable: false,
                enumerable: true,
                get: i
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
    return r(r.s = 77);
})([ function(t, e, r) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var i, n;
    var o = r(16);
    var a = p(o);
    var s = r(15);
    var u = p(s);
    var f = r(48);
    var h = p(f);
    var c = r(13);
    var l = r(51);
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
    function m(t, e) {
        if (!t) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return e && (typeof e === "object" || typeof e === "function") ? e : t;
    }
    function g(t, e) {
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
    }), i(n = function(t) {
        g(e, t);
        function e(r) {
            y(this, e);
            var i = m(this, t.call(this));
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
            if (1 && !r) throw "can not create model '" + i.type + "': game instance not passed to model constructor";
            i.game = r;
            i._emitter = new h.default();
            i.rigidBody = new d.default(i);
            return i;
        }
        e.prototype.revalidate = function t() {};
        e.prototype.setIndividualBehaviour = function t(e) {};
        e.prototype.setCommonBehaviour = function t() {};
        e.prototype.onShow = function t() {};
        e.prototype.getRect = function t() {
            var e = this.pos.x, r = this.pos.y, i = this.width, n = this.height;
            return {
                x: e,
                y: r,
                width: i,
                height: n,
                right: e + i,
                bottom: r + n
            };
        };
        e.prototype.tween = function t(e) {
            var r = new u.default(e, this);
            this._tweens.push(r);
        };
        e.prototype.update = function t(e) {
            var r = this;
            this._tweens.forEach(function(t, i) {
                t.update(e);
                if (t.completed) r._tweens.splice(i, 1);
            });
        };
        e.prototype.clone = function t(e) {
            var r = this.constructor;
            var i = new r(this.game);
            i._cloner = this;
            return i.fromJSON(this.toJSON(e), true);
        };
        e.prototype.on = function t(e, r) {
            this._emitter.on(e, r);
            return this;
        };
        e.prototype.trigger = function t(e, r) {
            this._emitter.trigger(e, r);
        };
        e.prototype.updateCloner = function t(e) {
            if (false) return;
            var r = this._cloner;
            if (!r) return;
            r.fromJSON(this.toJSON(e));
            r.updateCloner(e);
            delete this._cloner;
        };
        return e;
    }(a.default)) || n);
    e.default = v;
}, function(t, e, r) {
    "use strict";
    e.__esModule = true;
    var i, n;
    function o(t, e) {
        if (!(t instanceof e)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    var a = (n = i = function() {
        function t(e, r) {
            o(this, t);
            this.program = null;
            this.uniformCache = {};
            this.posVertexBuffer = null;
            this.posIndexBuffer = null;
            this.texVertexBuffer = null;
            this.gl = e;
            this.game = r;
        }
        t.prototype.bind = function e() {
            if (t.currentDrawer !== null && t.currentDrawer !== this) {
                t.currentDrawer.unbind();
            }
            t.currentDrawer = this;
        };
        t.prototype.unbind = function t() {
            this.posVertexBuffer.unbind();
            if (this.posIndexBuffer) this.posIndexBuffer.unbind();
            if (this.texVertexBuffer) this.texVertexBuffer.unbind();
        };
        t.prototype.setUniform = function t(e, r) {
            if (this.uniformCache[e] === r) return;
            this.program.setUniform(e, r);
            this.uniformCache[e] = r;
        };
        return t;
    }(), i.currentDrawer = null, n);
    e.default = a;
}, function(t, e, r) {
    "use strict";
    var i = r(6);
    var n = s(i);
    var o = r(45);
    var a = s(o);
    function s(t) {
        return t && t.__esModule ? t : {
            default: t
        };
    }
    e.isPointInRect = function(t, e, r) {
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
            var r = t;
            t = e;
            e = r;
        }
        var i = Math.random() * (e - t) + t;
        if (i > e) i = e; else if (i < t) i = t;
        return i;
    };
    e.unProject = function(t, e, r, i, o) {
        var s = 2 * t / r - 1;
        var u = 2 * e / i - 1;
        var f = n.default.inverse(o);
        var h = [ s, u, 0, 1 ];
        var c = n.default.multMatrixVec(f, h);
        c[0] = (c[0] / 2 + .5) * r;
        c[1] = (c[1] / 2 + .5) * i;
        return new a.default(c[0], c[1]);
    };
    var u = {};
    u.linear = function(t, e, r, i) {
        return r * t / i + e;
    };
    u.easeInQuad = function(t, e, r, i) {
        t /= i;
        return r * t * t + e;
    };
    u.easeOutQuad = function(t, e, r, i) {
        t /= i;
        return -r * t * (t - 2) + e;
    };
    u.easeInOutQuad = function(t, e, r, i) {
        t /= i / 2;
        if (t < 1) return r / 2 * t * t + e;
        t--;
        return -r / 2 * (t * (t - 2) - 1) + e;
    };
    e.ease = u;
}, function(t, e, r) {
    "use strict";
    e.__esModule = true;
    function i(t, e) {
        if (!(t instanceof e)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    var n = function() {
        function t(e) {
            i(this, t);
            if (1 && !e) throw "can not create IndexBuffer, gl context not passed to constructor, expected: IndexBuffer(gl)";
            this.gl = e;
            this.buffer = e.createBuffer();
            this.dataLength = null;
        }
        t.prototype.setData = function t(e) {
            if (true) {
                if (!e) throw "can not set data to buffer: bufferData not specified";
            }
            var r = this.gl;
            this.dataLength = e.length;
            r.bindBuffer(r.ELEMENT_ARRAY_BUFFER, this.buffer);
            r.bufferData(r.ELEMENT_ARRAY_BUFFER, new Uint16Array(e), r.STATIC_DRAW);
            r.bindBuffer(r.ELEMENT_ARRAY_BUFFER, null);
        };
        t.prototype.getGlBuffer = function t() {
            return this.buffer;
        };
        t.prototype.bind = function t() {
            this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.buffer);
        };
        t.prototype.unbind = function t() {
            this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, null);
        };
        t.prototype.getBufferLength = function t() {
            return this.dataLength;
        };
        return t;
    }();
    e.default = n;
}, function(t, e, r) {
    "use strict";
    e.__esModule = true;
    var i, n;
    function o(t, e) {
        if (!(t instanceof e)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    var a = function t(e, r, i) {
        if (true) {
            if (!r) throw "can not compile shader: shader source not specified for type " + i;
        }
        var n = e.createShader(i);
        e.shaderSource(n, r);
        e.compileShader(n);
        var o = e.getShaderParameter(n, e.COMPILE_STATUS);
        if (!o) {
            var a = e.getShaderInfoLog(n);
            e.deleteShader(n);
            if (true) {
                throw "Error compiling shader " + n + ":" + a;
            } else {
                throw a;
            }
        }
        return n;
    };
    var s = function t(e, r) {
        var i = e.createProgram();
        r.forEach(function(t) {
            e.attachShader(i, t);
        });
        e.linkProgram(i);
        var n = e.getProgramParameter(i, e.LINK_STATUS);
        if (!n) {
            var o = e.getProgramInfoLog(i);
            e.deleteProgram(i);
            if (true) {
                throw "Error in program linking:" + o;
            } else {
                throw o;
            }
        }
        return i;
    };
    var u = function t(e, r) {
        var i = null;
        var n = {
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
        };
        if (!i) {
            var o = Object.keys(n);
            i = {};
            for (var a = 0; a < o.length; ++a) {
                var s = o[a];
                i[e[s]] = n[s];
            }
        }
        return i[r];
    };
    var f = function t(e, r) {
        var i = {};
        var n = e.getProgramParameter(r, e.ACTIVE_UNIFORMS);
        for (var o = 0; o < n; o++) {
            var a = e.getActiveUniform(r, o);
            var s = a.name.replace(/\[.*?]/, "");
            var f = u(e, a.type);
            i[s] = {
                type: f,
                size: a.size,
                name: s,
                location: e.getUniformLocation(r, s),
                setter: h(a.size, f)
            };
        }
        return i;
    };
    var h = function t(e, r) {
        if (e === 1) {
            switch (r) {
              case "float":
                return function(t, e, r) {
                    t.uniform1f(e, r);
                };

              case "vec2":
                return function(t, e, r) {
                    t.uniform2f(e, r[0], r[1]);
                };

              case "vec3":
                return function(t, e, r) {
                    t.uniform3f(e, r[0], r[1], r[2]);
                };

              case "vec4":
                return function(t, e, r) {
                    t.uniform4f(e, r[0], r[1], r[2], r[3]);
                };

              case "int":
                return function(t, e, r) {
                    t.uniform1i(e, r);
                };

              case "ivec2":
                return function(t, e, r) {
                    t.uniform2i(e, r[0], r[1]);
                };

              case "ivec3":
                return function(t, e, r) {
                    t.uniform3i(e, r[0], r[1], r[2]);
                };

              case "ivec4":
                return function(t, e, r) {
                    t.uniform4i(e, r[0], r[1], r[2], r[3]);
                };

              case "bool":
                return function(t, e, r) {
                    t.uniform1i(e, r);
                };

              case "bvec2":
                return function(t, e, r) {
                    t.uniform2i(e, r[0], r[1]);
                };

              case "bvec3":
                return function(t, e, r) {
                    t.uniform3i(e, r[0], r[1], r[2]);
                };

              case "bvec4":
                return function(t, e, r) {
                    t.uniform4i(e, r[0], r[1], r[2], r[3]);
                };

              case "mat2":
                return function(t, e, r) {
                    t.uniformMatrix2fv(e, false, r);
                };

              case "mat3":
                return function(t, e, r) {
                    t.uniformMatrix3fv(e, false, r);
                };

              case "mat4":
                return function(t, e, r) {
                    t.uniformMatrix4fv(e, false, r);
                };

              case "sampler2D":
                return function(t, e, r) {
                    t.uniform1i(e, r);
                };
            }
        } else {
            switch (r) {
              case "float":
                return function(t, e, r) {
                    t.uniform1fv(e, r);
                };

              case "vec2":
                return function(t, e, r) {
                    t.uniform2fv(e, r);
                };

              case "vec3":
                return function(t, e, r) {
                    t.uniform3fv(e, r);
                };

              case "vec4":
                return function(t, e, r) {
                    t.uniform4fv(e, r);
                };

              case "int":
                return function(t, e, r) {
                    t.uniform1iv(e, r);
                };

              case "ivec2":
                return function(t, e, r) {
                    t.uniform2iv(e, r);
                };

              case "ivec3":
                return function(t, e, r) {
                    t.uniform3iv(e, r);
                };

              case "ivec4":
                return function(t, e, r) {
                    t.uniform4iv(e, r);
                };

              case "bool":
                return function(t, e, r) {
                    t.uniform1iv(e, r);
                };

              case "bvec2":
                return function(t, e, r) {
                    t.uniform2iv(e, r);
                };

              case "bvec3":
                return function(t, e, r) {
                    t.uniform3iv(e, r);
                };

              case "bvec4":
                return function(t, e, r) {
                    t.uniform4iv(e, r);
                };

              case "sampler2D":
                return function(t, e, r) {
                    t.uniform1iv(e, r);
                };
            }
        }
    };
    var c = (n = i = function() {
        function t(e, r) {
            o(this, t);
            var i = a(e, r[0], e.VERTEX_SHADER);
            var n = a(e, r[1], e.FRAGMENT_SHADER);
            this.program = s(e, [ i, n ]);
            this.uniforms = f(e, this.program);
            this.gl = e;
            this.name = "";
        }
        t.prototype.getProgram = function t() {
            return this.program;
        };
        t.prototype.bind = function e() {
            this.gl.useProgram(this.program);
            t.currentProgram = this;
        };
        t.prototype.setUniform = function t(e, r) {
            var i = this.uniforms[e];
            if (1 && !i) throw "no uniform with name " + e + " found!";
            i.setter(this.gl, i.location, r);
        };
        t.prototype.bindBuffer = function t(e, r) {
            this.gl.bindBuffer(this.gl.ARRAY_BUFFER, e.getGlBuffer());
            var i = this.gl.getAttribLocation(this.program, r);
            if (true) {
                if (!r) throw "can not found uniform location: uniformLocationName not defined";
                if (i < 0) throw "can not found uniform location for " + r;
            }
            this.gl.enableVertexAttribArray(i);
            this.gl.vertexAttribPointer(i, e.getItemSize(), e.getItemType(), false, 0, 0);
        };
        return t;
    }(), i.currentProgram = null, n);
    e.default = c;
}, function(t, e, r) {
    "use strict";
    e.__esModule = true;
    function i(t, e) {
        if (!(t instanceof e)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    var n = function() {
        function t(e) {
            i(this, t);
            if (1 && !e) throw "can not create VertexBuffer, gl context not passed to constructor, expected: VertexBuffer(gl)";
            this.gl = e;
            this.buffer = e.createBuffer();
            this.bufferItemSize = null;
            this.bufferItemType = null;
            this.dataLength = null;
        }
        t.prototype.setData = function t(e, r, i) {
            if (true) {
                if (!e) throw "can not set data to buffer: bufferData not specified";
                if (!r) throw "can not set data to buffer: itemType not specified";
                if (!i) throw "can not set data to buffer: itemSize not specified";
            }
            var n = this.gl;
            n.bindBuffer(n.ARRAY_BUFFER, this.buffer);
            n.bufferData(n.ARRAY_BUFFER, new Float32Array(e), n.STATIC_DRAW);
            n.bindBuffer(n.ARRAY_BUFFER, null);
            this.bufferItemSize = i;
            this.bufferItemType = r;
            this.dataLength = e.length;
        };
        t.prototype.bind = function t(e, r) {
            if (1 && !e) throw "can not bind VertexBuffer, program not specified";
            if (1 && !r) throw "can not bind VertexBuffer, attribute name not specified";
            e.bindBuffer(this, r);
        };
        t.prototype.unbind = function t() {
            this.gl.bindBuffer(this.gl.ARRAY_BUFFER, null);
        };
        t.prototype.getGlBuffer = function t() {
            return this.buffer;
        };
        t.prototype.getItemSize = function t() {
            return this.bufferItemSize;
        };
        t.prototype.getItemType = function t() {
            return this.bufferItemType;
        };
        t.prototype.getBufferLength = function t() {
            return this.dataLength;
        };
        return t;
    }();
    e.default = n;
}, function(t, e, r) {
    "use strict";
    e.makeIdentity = function() {
        return [ 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1 ];
    };
    e.makeZToWMatrix = function(t) {
        return [ 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, t, 0, 0, 0, 1 ];
    };
    e.make2DProjection = function(t, e, r) {
        return [ 2 / t, 0, 0, 0, 0, -2 / e, 0, 0, 0, 0, 2 / r, 0, -1, 1, 0, 1 ];
    };
    e.ortho = function(t, e, r, i, n, o) {
        var a = 1 / (t - e), s = 1 / (r - i), u = 1 / (n - o);
        var f = [];
        f[0] = -2 * a;
        f[1] = 0;
        f[2] = 0;
        f[3] = 0;
        f[4] = 0;
        f[5] = -2 * s;
        f[6] = 0;
        f[7] = 0;
        f[8] = 0;
        f[9] = 0;
        f[10] = 2 * u;
        f[11] = 0;
        f[12] = (t + e) * a;
        f[13] = (i + r) * s;
        f[14] = (o + n) * u;
        f[15] = 1;
        return f;
    };
    e.perspective = function(t, e, r, i) {
        var n = 1 / Math.tan(t / 2), o = 1 / (r - i);
        var a = [];
        a[0] = n / e;
        a[1] = 0;
        a[2] = 0;
        a[3] = 0;
        a[4] = 0;
        a[5] = n;
        a[6] = 0;
        a[7] = 0;
        a[8] = 0;
        a[9] = 0;
        a[10] = (i + r) * o;
        a[11] = -1;
        a[12] = 0;
        a[13] = 0;
        a[14] = 2 * i * r * o;
        a[15] = 0;
        return a;
    };
    e.makeTranslation = function(t, e, r) {
        return [ 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, t, e, r, 1 ];
    };
    e.makeXRotation = function(t) {
        var e = Math.cos(t);
        var r = Math.sin(t);
        return [ 1, 0, 0, 0, 0, e, r, 0, 0, -r, e, 0, 0, 0, 0, 1 ];
    };
    e.makeYRotation = function(t) {
        var e = Math.cos(t);
        var r = Math.sin(t);
        return [ e, 0, -r, 0, 0, 1, 0, 0, r, 0, e, 0, 0, 0, 0, 1 ];
    };
    e.makeZRotation = function(t) {
        var e = Math.cos(t);
        var r = Math.sin(t);
        return [ e, r, 0, 0, -r, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1 ];
    };
    e.makeScale = function(t, e, r) {
        return [ t, 0, 0, 0, 0, e, 0, 0, 0, 0, r, 0, 0, 0, 0, 1 ];
    };
    e.matrixMultiply = function(t, e) {
        var r = new Array(16);
        r[0] = t[0] * e[0] + t[1] * e[4] + t[2] * e[8] + t[3] * e[12];
        r[1] = t[0] * e[1] + t[1] * e[5] + t[2] * e[9] + t[3] * e[13];
        r[2] = t[0] * e[2] + t[1] * e[6] + t[2] * e[10] + t[3] * e[14];
        r[3] = t[0] * e[3] + t[1] * e[7] + t[2] * e[11] + t[3] * e[15];
        r[4] = t[4] * e[0] + t[5] * e[4] + t[6] * e[8] + t[7] * e[12];
        r[5] = t[4] * e[1] + t[5] * e[5] + t[6] * e[9] + t[7] * e[13];
        r[6] = t[4] * e[2] + t[5] * e[6] + t[6] * e[10] + t[7] * e[14];
        r[7] = t[4] * e[3] + t[5] * e[7] + t[6] * e[11] + t[7] * e[15];
        r[8] = t[8] * e[0] + t[9] * e[4] + t[10] * e[8] + t[11] * e[12];
        r[9] = t[8] * e[1] + t[9] * e[5] + t[10] * e[9] + t[11] * e[13];
        r[10] = t[8] * e[2] + t[9] * e[6] + t[10] * e[10] + t[11] * e[14];
        r[11] = t[8] * e[3] + t[9] * e[7] + t[10] * e[11] + t[11] * e[15];
        r[12] = t[12] * e[0] + t[13] * e[4] + t[14] * e[8] + t[15] * e[12];
        r[13] = t[12] * e[1] + t[13] * e[5] + t[14] * e[9] + t[15] * e[13];
        r[14] = t[12] * e[2] + t[13] * e[6] + t[14] * e[10] + t[15] * e[14];
        r[15] = t[12] * e[3] + t[13] * e[7] + t[14] * e[11] + t[15] * e[15];
        return r;
    };
    e.multMatrixVec = function(t, e) {
        var r = new Array(16);
        for (var i = 0; i < 4; i++) {
            r[i] = e[0] * t[0 * 4 + i] + e[1] * t[1 * 4 + i] + e[2] * t[2 * 4 + i] + e[3] * t[3 * 4 + i];
        }
        return r;
    };
    e.inverse = function(t) {
        var e = new Array(16);
        e[0] = t[5] * t[10] * t[15] - t[5] * t[14] * t[11] - t[6] * t[9] * t[15] + t[6] * t[13] * t[11] + t[7] * t[9] * t[14] - t[7] * t[13] * t[10];
        e[1] = -t[1] * t[10] * t[15] + t[1] * t[14] * t[11] + t[2] * t[9] * t[15] - t[2] * t[13] * t[11] - t[3] * t[9] * t[14] + t[3] * t[13] * t[10];
        e[2] = t[1] * t[6] * t[15] - t[1] * t[14] * t[7] - t[2] * t[5] * t[15] + t[2] * t[13] * t[7] + t[3] * t[5] * t[14] - t[3] * t[13] * t[6];
        e[3] = -t[1] * t[6] * t[11] + t[1] * t[10] * t[7] + t[2] * t[5] * t[11] - t[2] * t[9] * t[7] - t[3] * t[5] * t[10] + t[3] * t[9] * t[6];
        e[4] = -t[4] * t[10] * t[15] + t[4] * t[14] * t[11] + t[6] * t[8] * t[15] - t[6] * t[12] * t[11] - t[7] * t[8] * t[14] + t[7] * t[12] * t[10];
        e[5] = t[0] * t[10] * t[15] - t[0] * t[14] * t[11] - t[2] * t[8] * t[15] + t[2] * t[12] * t[11] + t[3] * t[8] * t[14] - t[3] * t[12] * t[10];
        e[6] = -t[0] * t[6] * t[15] + t[0] * t[14] * t[7] + t[2] * t[4] * t[15] - t[2] * t[12] * t[7] - t[3] * t[4] * t[14] + t[3] * t[12] * t[6];
        e[7] = t[0] * t[6] * t[11] - t[0] * t[10] * t[7] - t[2] * t[4] * t[11] + t[2] * t[8] * t[7] + t[3] * t[4] * t[10] - t[3] * t[8] * t[6];
        e[8] = t[4] * t[9] * t[15] - t[4] * t[13] * t[11] - t[5] * t[8] * t[15] + t[5] * t[12] * t[11] + t[7] * t[8] * t[13] - t[7] * t[12] * t[9];
        e[9] = -t[0] * t[9] * t[15] + t[0] * t[13] * t[11] + t[1] * t[8] * t[15] - t[1] * t[12] * t[11] - t[3] * t[8] * t[13] + t[3] * t[12] * t[9];
        e[10] = t[0] * t[5] * t[15] - t[0] * t[13] * t[7] - t[1] * t[4] * t[15] + t[1] * t[12] * t[7] + t[3] * t[4] * t[13] - t[3] * t[12] * t[5];
        e[11] = -t[0] * t[5] * t[11] + t[0] * t[9] * t[7] + t[1] * t[4] * t[11] - t[1] * t[8] * t[7] - t[3] * t[4] * t[9] + t[3] * t[8] * t[5];
        e[12] = -t[4] * t[9] * t[14] + t[4] * t[13] * t[10] + t[5] * t[8] * t[14] - t[5] * t[12] * t[10] - t[6] * t[8] * t[13] + t[6] * t[12] * t[9];
        e[13] = t[0] * t[9] * t[14] - t[0] * t[13] * t[10] - t[1] * t[8] * t[14] + t[1] * t[12] * t[10] + t[2] * t[8] * t[13] - t[2] * t[12] * t[9];
        e[14] = -t[0] * t[5] * t[14] + t[0] * t[13] * t[6] + t[1] * t[4] * t[14] - t[1] * t[12] * t[6] - t[2] * t[4] * t[13] + t[2] * t[12] * t[5];
        e[15] = t[0] * t[5] * t[10] - t[0] * t[9] * t[6] - t[1] * t[4] * t[10] + t[1] * t[8] * t[6] + t[2] * t[4] * t[9] - t[2] * t[8] * t[5];
        var r = t[0] * e[0] + t[1] * e[4] + t[2] * e[8] + t[3] * e[12];
        if (1 && r === 0) {
            console.error(t);
            throw new Error("can not invert matrix");
        }
        for (var i = 0; i < 16; i++) {
            e[i] /= r;
        }
        return e;
    };
}, function(t, e, r) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var i = r(8);
    var n = o(i);
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
        function e() {
            a(this, e);
            var r = s(this, t.call(this));
            r.vertexArr = [ 0, 0, 0, 1, 1, 0, 1, 1 ];
            r.indexArr = [ 0, 1, 2, 3 ];
            r.texCoordArr = [ 0, 0, 0, 1, 1, 0, 1, 1 ];
            return r;
        }
        return e;
    }(n.default);
    e.default = f;
}, function(t, e, r) {
    "use strict";
    e.__esModule = true;
    function i(t, e) {
        if (!(t instanceof e)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    var n = function t() {
        i(this, t);
        this.vertexArr = null;
        this.normalArr = null;
        this.texCoordArr = null;
        this.indexArr = null;
    };
    e.default = n;
}, function(t, e) {
    t.exports = "//position and color\r\n\r\nattribute vec4 a_position;\r\nattribute vec4 a_color;\r\n\r\nuniform mat4 u_PositionMatrix;\r\n\r\nvarying vec4 v_color;\r\n\r\nvoid main() {\r\n   gl_Position = u_PositionMatrix * a_position;\r\n   v_color = a_color;\r\n}";
}, function(t, e) {
    t.exports = "precision mediump float; // lowp, mediump, highp\n\nuniform float u_alpha;\nuniform vec4 u_rgba;\n\nvoid main() {\n    gl_FragColor = u_rgba;\n}";
}, function(t, e, r) {
    "use strict";
    e.__esModule = true;
    function i(t, e) {
        if (!(t instanceof e)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    var n = function() {
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
    e.default = n;
}, function(t, e, r) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var i = r(11);
    var n = o(i);
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
        function e(r) {
            a(this, e);
            var i = s(this, t.call(this));
            i.gameObject = null;
            i.game = r;
            return i;
        }
        e.prototype.manage = function t(e, r, i) {
            var n = this;
            this.gameObject = e;
            this.parameters = r;
            this.animations = {};
            i.forEach(function(t) {
                var e = "walk" + t + "Animation", i = "idle" + t + "Animation";
                n.animations[e] = n.gameObject.frameAnimations.find(function(t) {
                    return t.name === r[e];
                });
                r[i] && (n.animations[i] = n.gameObject.frameAnimations.find(function(t) {
                    return t.name === r[i];
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
    e.default = f;
}, function(t, e, r) {
    "use strict";
    e.__esModule = true;
    e.Transient = i;
    function i(t) {
        return function(e) {
            e.transient = t;
        };
    }
}, function(t, e, r) {
    "use strict";
    e.__esModule = true;
    function i(t, e) {
        if (!(t instanceof e)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    var n = function t(e) {
        return (e & e - 1) == 0;
    };
    var o = function() {
        function t(e) {
            i(this, t);
            if (1 && !e) throw "can not create Texture, gl context not passed to constructor, expected: Texture(gl)";
            this.gl = e;
            this.tex = null;
            this.size = null;
            this.isPowerOfTwo = false;
            this.tex = e.createTexture();
            e.bindTexture(e.TEXTURE_2D, this.tex);
            e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, 1, 1, 0, e.RGBA, e.UNSIGNED_BYTE, new Uint8Array([ 0, 0, 255, 255 ]));
            e.bindTexture(e.TEXTURE_2D, this.tex);
        }
        t.prototype.setImage = function t(e, r, i) {
            if (true) {
                if (!(e || r || i)) throw "texture.setImage: if image is null, width and height must be specified: tex.setImage(null,w,h)";
            }
            var o = this.gl;
            if (e) this.size = {
                width: e.width,
                height: e.height
            }; else this.size = {
                width: r,
                height: i
            };
            this.bind();
            o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL, true);
            if (e) {
                o.texImage2D(o.TEXTURE_2D, 0, o.RGBA, o.RGBA, o.UNSIGNED_BYTE, e);
            } else {
                o.texImage2D(o.TEXTURE_2D, 0, o.RGBA, r, i, 0, o.RGBA, o.UNSIGNED_BYTE, null);
            }
            this.isPowerOfTwo = e && n(e.width) && n(e.height);
            if (this.isPowerOfTwo) {
                o.generateMipmap(o.TEXTURE_2D);
                o.texParameteri(o.TEXTURE_2D, o.TEXTURE_WRAP_S, o.REPEAT);
                o.texParameteri(o.TEXTURE_2D, o.TEXTURE_WRAP_T, o.REPEAT);
            } else {
                o.texParameteri(o.TEXTURE_2D, o.TEXTURE_WRAP_S, o.CLAMP_TO_EDGE);
                o.texParameteri(o.TEXTURE_2D, o.TEXTURE_WRAP_T, o.CLAMP_TO_EDGE);
                o.texParameteri(o.TEXTURE_2D, o.TEXTURE_MIN_FILTER, o.LINEAR);
                o.texParameteri(o.TEXTURE_2D, o.TEXTURE_MAG_FILTER, o.LINEAR);
            }
            o.bindTexture(o.TEXTURE_2D, null);
        };
        t.prototype.bind = function t(e) {
            this.gl.bindTexture(this.gl.TEXTURE_2D, this.tex);
        };
        t.prototype.unbind = function t(e) {
            this.gl.bindTexture(this.gl.TEXTURE_2D, null);
        };
        t.prototype.getSize = function t() {
            return this.size;
        };
        t.prototype.getGlTexture = function t() {
            return this.tex;
        };
        return t;
    }();
    e.default = o;
}, function(t, e, r) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var i = r(2);
    var n = o(i);
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
    var s = function t(e, r) {
        var i = r.split(".");
        if (i.length === 1) return {
            targetObj: e,
            targetKey: r
        };
        var n = i.pop();
        i.forEach(function(t) {
            e = e[t];
        });
        return {
            targetObj: e,
            targetKey: n
        };
    };
    var u = function t(e, r, i) {
        var n = s(e, r), o = n.targetObj, a = n.targetKey;
        o[a] = i;
    };
    var f = function t(e, r, i) {
        var n = s(e, r), o = n.targetObj, a = n.targetKey;
        return o[a];
    };
    var h = function() {
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
        }
        t.prototype.reuse = function t(e) {
            var r = this;
            this.startedTime = this.currTime;
            this.completed = false;
            Object.keys(e).forEach(function(t) {
                r.desc[t] = e[t];
            });
            this.desc = this.normalizeDesc(e);
        };
        t.prototype.normalizeDesc = function t(e) {
            var r = this;
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
                if (e.from[t] === undefined) e.from[t] = f(r.obj, t);
                if (e.to[t] === undefined) e.to[t] = f(r.obj, t);
            });
            return e;
        };
        t.prototype.update = function t(e) {
            if (this.completed) return;
            this.currTime = e;
            if (!this.startedTime) this.startedTime = e;
            var r = e - this.startedTime;
            if (r > this.tweenTime) {
                this._complete();
                return;
            }
            var i = this.propsToChange.length;
            while (i--) {
                var o = this.propsToChange[i];
                var a = this.desc.from[o];
                var s = this.desc.to[o];
                var f = n.default.ease[this.easeFnName](r, a, s - a, this.tweenTime);
                u(this.obj, o, f);
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
                var i = this.desc.to[r];
                u(this.obj, r, i);
            }
            this.progressFn && this.progressFn(this.obj);
            this.completeFn && this.completeFn(this.obj);
            this.completed = true;
        };
        return t;
    }();
    e.default = h;
}, function(t, e, r) {
    "use strict";
    e.__esModule = true;
    var i = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(t) {
        return typeof t;
    } : function(t) {
        return t && typeof Symbol === "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
    };
    function n(t, e) {
        if (!(t instanceof e)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    var o = function t(e, r, i) {
        if (!e) return true;
        if (e.indexOf("_") === 0) return true;
        if (r && r.call) return true;
        if (typeof r === "string") return false;
        if (typeof r === "number") return false;
        if (typeof r === "boolean") return false;
        return r == null && !i.preserveNull;
    };
    var a = function t(e) {
        return typeof e === "string" || typeof e === "number";
    };
    var s = function t(e) {
        var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
        if (e === undefined) return undefined; else if (e === null) return null; else if (typeof window !== "undefined" && e === window) return undefined; else if (r.indexOf(e) > -1) return e;
        if (Object.prototype.toString.call(e) === "[object Array]") {
            var n = [], o = 0, a = e.length;
            for (;o < a; o++) {
                var s = void 0;
                if (r.indexOf(e[o]) > -1) {
                    s = e[o];
                } else {
                    r.push(e);
                    s = t(e[o], r);
                    r.push(e[o]);
                }
                n[o] = s;
            }
            return n;
        } else if ((typeof e === "undefined" ? "undefined" : i(e)) === "object") {
            var u = {};
            for (var f in e) {
                if (!e.hasOwnProperty(f)) continue;
                var h = void 0;
                if (r.indexOf(e[f]) > -1) {
                    h = e[f];
                } else {
                    r.push(e);
                    h = t(e[f], r);
                    r.push(e[f]);
                }
                u[f] = h;
            }
            return u;
        } else return e;
    };
    var u = function() {
        function t() {
            n(this, t);
        }
        t.prototype.fromJSON = function t() {
            var e = this;
            var r = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var i = arguments[1];
            Object.keys(r).forEach(function(t) {
                if (t === "type") return;
                if (t in e) e[t] = r[t]; else {
                    console.error(e);
                    throw "::fromJSON(): class " + e.constructor.name + " has no property " + t;
                }
                if (!e[t]) return;
                if (r[t].id && r[t].type) e[t] = e.game.repository.getObject(r[t].id, r[t].type, i); else if (r[t].splice) {
                    var n = e[t];
                    e[t] = [];
                    n.forEach(function(r, n) {
                        if (r && r.type && r.id) {
                            e[t].push(e.game.repository.getObject(r.id, r.type, i));
                        } else {
                            e[t].push(r);
                        }
                    });
                }
            });
            this.revalidate();
            return this;
        };
        t.prototype.toJSON = function t() {
            var e = this;
            var r = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
                preserveNull: false
            };
            var n = {};
            for (var u in this) {
                if (o(u, this[u], r)) {
                    continue;
                }
                if (this.constructor.transient && this.constructor.transient[u]) {
                    continue;
                }
                if (this[u] != null && this[u].type && this[u].id) {
                    n[u] = {
                        id: this[u].id,
                        type: this[u].type
                    };
                } else if (this[u] != null && this[u].splice) {
                    (function() {
                        var t = e[u];
                        var r = [];
                        t.forEach(function(t) {
                            if (t && t.type && t.id) {
                                r.push({
                                    type: t.type,
                                    id: t.id
                                });
                            } else {
                                if (a(t)) r.push(s(t));
                            }
                        });
                        n[u] = r;
                    })();
                } else {
                    var f = s(this[u]);
                    if (f && f.splice && !f.length) continue; else if (f != null && (typeof f === "undefined" ? "undefined" : i(f)) === "object" && !Object.keys(f).length) continue;
                    n[u] = f;
                }
            }
            return n;
        };
        return t;
    }();
    e.default = u;
}, function(t, e, r) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var i = r(0);
    var n = o(i);
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
        function e(r) {
            a(this, e);
            var i = s(this, t.call(this, r));
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
            this.frameAnimations.forEach(function(t, r) {
                e.frameAnimations[r] = e.frameAnimations[r].clone();
                e.frameAnimations[r]._gameObject = e;
            });
        };
        e.prototype.playFrameAnimation = function t(e, r) {
            var i = this.frameAnimations.find(function(t) {
                return t.name === e;
            });
            i._gameObject = this;
            this._currFrameAnimation = i;
            i.play(r);
        };
        e.prototype.setFrameIndex = function t(e) {
            this.currFrameIndex = e;
            this._sprPosX = this.spriteSheet.getFramePosX(this.currFrameIndex);
            this._sprPosY = this.spriteSheet.getFramePosY(this.currFrameIndex);
        };
        e.prototype.update = function e(r, i) {
            t.prototype.update.call(this, r);
            this._currFrameAnimation && this._currFrameAnimation.update(r);
            if (this._individualBehaviour) this._individualBehaviour.onUpdate(r, i);
            for (var n = 0, o = this.commonBehaviour.length; n < o; n++) {
                this.commonBehaviour[n].onUpdate(r, i);
            }
            this.rigidBody.update(r, i);
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
    e.default = f;
}, function(t, e, r) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var i = r(0);
    var n = o(i);
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
        function e(r) {
            a(this, e);
            var i = s(this, t.call(this, r));
            i.type = "TileMap";
            i.spriteSheet = null;
            i.data = [];
            return i;
        }
        e.prototype.getTileAt = function t(e, r) {
            var i = this;
            if (!this.spriteSheet) return;
            var n = ~~(e / this.spriteSheet._frameWidth);
            var o = ~~(r / this.spriteSheet._frameHeight);
            if (!this.data[o]) return;
            var a = this.data[o][n];
            if (a == null) return;
            return {
                getRect: function t() {
                    var e = n * i.spriteSheet._frameWidth + 1, r = o * i.spriteSheet._frameHeight + 1, a = i.spriteSheet._frameWidth - 2, s = i.spriteSheet._frameHeight - 2;
                    return {
                        x: e,
                        y: r,
                        width: a,
                        height: s,
                        right: e + a,
                        bottom: r + s
                    };
                },
                tileIndex: this.spriteSheet.numOfFramesH * o + n + 1,
                value: a
            };
        };
        e.prototype.getTilesAtRect = function t(e) {
            var r = [];
            if (!this.spriteSheet) return r;
            var i = {};
            var n = e.x, o = void 0;
            var a = e.x + e.width, s = e.y + e.height;
            while (true) {
                o = e.y;
                while (true) {
                    var u = this.getTileAt(n, o);
                    if (u) {
                        if (!i[u.tileIndex]) {
                            r.push(u);
                            i[u.tileIndex] = true;
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
            return r;
        };
        e.prototype.update = function t() {
            var e = this.spriteSheet;
            if (!e) return;
            var r = this.game.camera;
            var i = this.game.renderer;
            var n = r.getRectScaled();
            var o = ~~(n.x / this.spriteSheet._frameWidth);
            var a = ~~(n.y / this.spriteSheet._frameHeight);
            if (o < 0) o = 0;
            if (a < 0) a = 0;
            var s = o + this._tilesInScreenX + 1;
            var u = a + this._tilesInScreenY + 1;
            for (var f = a; f < u; f++) {
                for (var h = o; h < s; h++) {
                    var c = this.data[f] && this.data[f][h];
                    if (c === null || c === undefined) continue;
                    i.drawImage(e.resourcePath, e.getFramePosX(c), e.getFramePosY(c), e._frameWidth, e._frameHeight, h * e._frameWidth, f * e._frameHeight);
                }
            }
        };
        return e;
    }(n.default);
    e.default = f;
}, function(t, e, r) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var i = r(0);
    var n = o(i);
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
        function e(r) {
            a(this, e);
            var i = s(this, t.call(this, r));
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
            if (this.font === null) this.font = this.game.repository.getArray("Font")[0];
            if (1 && !this.font) throw "at least one Font must be created";
            this.setFont(this.font);
        };
        e.prototype.setText = function t(e) {
            e += "";
            this._chars = [];
            this.text = e;
            var r = [ {
                width: 0
            } ];
            var i = 0;
            this.height = this.font.fontContext.symbols[" "].height;
            for (var n = 0, o = e.length; n < o; n++) {
                this._chars.push(e[n]);
                var a = this.font.fontContext.symbols[e[n]] || this.font.fontContext.symbols[" "];
                if (e[n] === "\n") {
                    i++;
                    this.height += a.height;
                    r[i] = {
                        width: 0
                    };
                } else {
                    r[i].width += a.width;
                }
            }
            this.width = Math.max.apply(Math, r.map(function(t) {
                return t.width;
            }));
        };
        e.prototype.getText = function t() {
            return this.text;
        };
        e.prototype.setFont = function t(e) {
            this.font = e;
            this.setText(this.text);
        };
        e.prototype.update = function e(r) {
            t.prototype.update.call(this, r);
            this.render();
        };
        e.prototype.render = function t() {
            var e = this;
            var r = 0;
            var i = 0;
            this._chars.forEach(function(t) {
                var n = e.font.fontContext.symbols[t] || e.font.fontContext.symbols["?"];
                if (t === "\n") {
                    r = 0;
                    i += n.height;
                    return;
                }
                e.game.renderer.drawImage(e.font.resourcePath, n.x, n.y, n.width, n.height, e.pos.x + r, e.pos.y + i);
                r += n.width;
            });
        };
        return e;
    }(n.default);
    e.default = f;
}, function(t, e) {
    t.exports = "//position, color and texture\n\nattribute vec4 a_position;\nattribute vec4 a_color;\nattribute vec2 a_texcoord;\n\nuniform mat4 u_PositionMatrix;\nuniform mat4 u_textureMatrix;\n\nvarying vec2 v_texcoord;\nvarying vec4 v_color;\n\nvoid main() {\n   gl_Position = u_PositionMatrix * a_position;\n   v_texcoord = (u_textureMatrix * vec4(a_texcoord, 0, 1)).xy;\n   v_color = a_color;\n}";
}, , , function(t, e, r) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var i, n;
    r(50);
    var o = r(54);
    var a = x(o);
    var s = r(66);
    var u = x(s);
    var f = r(43);
    var h = x(f);
    var c = r(42);
    var l = x(c);
    var d = r(41);
    var p = x(d);
    var y = r(52);
    var m = x(y);
    var g = r(13);
    var v = r(16);
    var w = x(v);
    var _ = r(40);
    var b = x(_);
    function x(t) {
        return t && t.__esModule ? t : {
            default: t
        };
    }
    function E(t, e) {
        if (!(t instanceof e)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    function T(t, e) {
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
    var S = (i = (0, g.Transient)({
        repository: true,
        camera: true,
        keyboard: true,
        gamePad: true,
        mouse: true
    }), i(n = function(t) {
        O(e, t);
        function e(r) {
            E(this, e);
            var i = T(this, t.call(this));
            i._lastTime = null;
            i._currTime = null;
            i._currentScene = null;
            i._running = false;
            i.destroyed = false;
            i.renderer = null;
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
            i.gamePad = null;
            Object.keys(r).forEach(function(t) {
                i[t] = r[t];
            });
            var n = Date.now();
            i._lastTime = i._currTime = n;
            i._deltaTime = 0;
            i.repository = new u.default(i);
            i.mouse = new h.default(i);
            i.keyboard = new l.default(i);
            i.keyboard.listenTo();
            i.gamePad = new p.default(i);
            i.collider = new m.default(i);
            i.camera = new b.default(i);
            return i;
        }
        e.prototype.getTime = function t() {
            return this._lastTime;
        };
        e.prototype.getDeltaTime = function t() {
            return this._deltaTime;
        };
        e.prototype.runScene = function t(i) {
            var n = this;
            if (!this.renderer) {
                this.renderer = a.default.getRenderer(this);
                this.mouse.listenTo(this.renderer.container);
            }
            this._currentScene = i;
            if (true) {
                var o = r(27);
                var s = "" + i.name[0].toUpperCase() + i.name.substr(1) + "Behaviour";
                if (s) i.setIndividualBehaviour(o[s]);
                i.layers.forEach(function(t) {
                    t.gameObjects.forEach(function(t) {
                        t.setCommonBehaviour();
                        var e = "" + t.name[0].toUpperCase() + t.name.substr(1) + "Behaviour";
                        var r = o[e];
                        if (r) t.setIndividualBehaviour(r);
                    });
                });
            }
            i.preload(function() {
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
        e.update = function t(r) {
            if (1 && r.destroyed) return;
            requestAnimationFrame(function() {
                e.update(r);
            });
            r._lastTime = r._currTime;
            r._currTime = Date.now();
            r._deltaTime = r._currTime - r._lastTime;
            if (true) {
                r.fps = ~~(1e3 / r._deltaTime);
                window.fps = r.fps;
                var i = r.renderer.getError();
                if (i) throw "render error with code " + i;
            }
            if (r._deltaTime > 20) r._deltaTime = 20;
            r._currentScene && r._currentScene.update(r._currTime, r._deltaTime);
            r.keyboard.update();
            r.gamePad.update();
        };
        e.prototype.destroy = function t() {
            this.destroyed = true;
            this.keyboard.destroy();
            this.mouse.destroy();
            this.renderer.destroy();
            this.renderer.cancelFullScreen();
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
            }, {
                type: "GameObject",
                id: 71
            }, {
                type: "GameObject",
                id: 74
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
        }, {
            name: "clamp",
            width: 64,
            height: 64,
            type: "SpriteSheet",
            resourcePath: "resources/clamp.png",
            id: 69
        }, {
            name: "tile",
            width: 262,
            height: 192,
            type: "SpriteSheet",
            resourcePath: "resources/tile.jpg",
            id: 72
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
        }, {
            id: 70,
            name: "clamp",
            width: 64,
            height: 64,
            type: "GameObjectProto",
            spriteSheet: {
                id: 69,
                type: "SpriteSheet"
            },
            commonBehaviour: [ {
                type: "CommonBehaviour",
                id: 75
            } ]
        }, {
            name: "tile",
            width: 262,
            height: 192,
            type: "GameObjectProto",
            spriteSheet: {
                id: 72,
                type: "SpriteSheet"
            },
            id: 73
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
                x: 471,
                y: 478
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
                x: 350,
                y: 195
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
        }, {
            id: 71,
            name: "clamp",
            pos: {
                x: 739,
                y: 325
            },
            layerId: 2,
            type: "GameObject",
            gameObjectProto: {
                id: 70,
                type: "GameObjectProto"
            }
        }, {
            id: 74,
            name: "tile",
            pos: {
                x: 369,
                y: 271
            },
            layerId: 2,
            type: "GameObject",
            gameObjectProto: {
                id: 73,
                type: "GameObjectProto"
            }
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
        }, {
            name: "Draggable",
            type: "CommonBehaviour",
            id: 75
        } ],
        Font: [ {
            id: 22,
            name: "font1",
            type: "Font",
            resourcePath: "resources/font1.png",
            fontSize: 21,
            fontFamily: "monospace",
            fontContext: {
                symbols: {
                    "0": {
                        x: 24,
                        y: 36,
                        width: 12,
                        height: 24
                    },
                    "1": {
                        x: 45,
                        y: 36,
                        width: 12,
                        height: 24
                    },
                    "2": {
                        x: 65,
                        y: 36,
                        width: 12,
                        height: 24
                    },
                    "3": {
                        x: 86,
                        y: 36,
                        width: 12,
                        height: 24
                    },
                    "4": {
                        x: 107,
                        y: 36,
                        width: 12,
                        height: 24
                    },
                    "5": {
                        x: 127,
                        y: 36,
                        width: 12,
                        height: 24
                    },
                    "6": {
                        x: 148,
                        y: 36,
                        width: 12,
                        height: 24
                    },
                    "7": {
                        x: 168,
                        y: 36,
                        width: 12,
                        height: 24
                    },
                    "8": {
                        x: 189,
                        y: 36,
                        width: 12,
                        height: 24
                    },
                    "9": {
                        x: 210,
                        y: 36,
                        width: 12,
                        height: 24
                    },
                    " ": {
                        x: 4,
                        y: 4,
                        width: 12,
                        height: 24
                    },
                    "!": {
                        x: 24,
                        y: 4,
                        width: 12,
                        height: 24
                    },
                    '"': {
                        x: 45,
                        y: 4,
                        width: 12,
                        height: 24
                    },
                    "#": {
                        x: 65,
                        y: 4,
                        width: 12,
                        height: 24
                    },
                    $: {
                        x: 86,
                        y: 4,
                        width: 12,
                        height: 24
                    },
                    "%": {
                        x: 107,
                        y: 4,
                        width: 12,
                        height: 24
                    },
                    "&": {
                        x: 127,
                        y: 4,
                        width: 12,
                        height: 24
                    },
                    "'": {
                        x: 148,
                        y: 4,
                        width: 12,
                        height: 24
                    },
                    "(": {
                        x: 168,
                        y: 4,
                        width: 12,
                        height: 24
                    },
                    ")": {
                        x: 189,
                        y: 4,
                        width: 12,
                        height: 24
                    },
                    "*": {
                        x: 210,
                        y: 4,
                        width: 12,
                        height: 24
                    },
                    "+": {
                        x: 230,
                        y: 4,
                        width: 12,
                        height: 24
                    },
                    ",": {
                        x: 251,
                        y: 4,
                        width: 12,
                        height: 24
                    },
                    "-": {
                        x: 271,
                        y: 4,
                        width: 12,
                        height: 24
                    },
                    ".": {
                        x: 292,
                        y: 4,
                        width: 12,
                        height: 24
                    },
                    "/": {
                        x: 4,
                        y: 36,
                        width: 12,
                        height: 24
                    },
                    ":": {
                        x: 230,
                        y: 36,
                        width: 12,
                        height: 24
                    },
                    ";": {
                        x: 251,
                        y: 36,
                        width: 12,
                        height: 24
                    },
                    "<": {
                        x: 271,
                        y: 36,
                        width: 12,
                        height: 24
                    },
                    "=": {
                        x: 292,
                        y: 36,
                        width: 12,
                        height: 24
                    },
                    ">": {
                        x: 4,
                        y: 68,
                        width: 12,
                        height: 24
                    },
                    "?": {
                        x: 24,
                        y: 68,
                        width: 12,
                        height: 24
                    },
                    "@": {
                        x: 45,
                        y: 68,
                        width: 12,
                        height: 24
                    },
                    A: {
                        x: 65,
                        y: 68,
                        width: 12,
                        height: 24
                    },
                    B: {
                        x: 86,
                        y: 68,
                        width: 12,
                        height: 24
                    },
                    C: {
                        x: 107,
                        y: 68,
                        width: 12,
                        height: 24
                    },
                    D: {
                        x: 127,
                        y: 68,
                        width: 12,
                        height: 24
                    },
                    E: {
                        x: 148,
                        y: 68,
                        width: 12,
                        height: 24
                    },
                    F: {
                        x: 168,
                        y: 68,
                        width: 12,
                        height: 24
                    },
                    G: {
                        x: 189,
                        y: 68,
                        width: 12,
                        height: 24
                    },
                    H: {
                        x: 210,
                        y: 68,
                        width: 12,
                        height: 24
                    },
                    I: {
                        x: 230,
                        y: 68,
                        width: 12,
                        height: 24
                    },
                    J: {
                        x: 251,
                        y: 68,
                        width: 12,
                        height: 24
                    },
                    K: {
                        x: 271,
                        y: 68,
                        width: 12,
                        height: 24
                    },
                    L: {
                        x: 292,
                        y: 68,
                        width: 12,
                        height: 24
                    },
                    M: {
                        x: 4,
                        y: 100,
                        width: 12,
                        height: 24
                    },
                    N: {
                        x: 24,
                        y: 100,
                        width: 12,
                        height: 24
                    },
                    O: {
                        x: 45,
                        y: 100,
                        width: 12,
                        height: 24
                    },
                    P: {
                        x: 65,
                        y: 100,
                        width: 12,
                        height: 24
                    },
                    Q: {
                        x: 86,
                        y: 100,
                        width: 12,
                        height: 24
                    },
                    R: {
                        x: 107,
                        y: 100,
                        width: 12,
                        height: 24
                    },
                    S: {
                        x: 127,
                        y: 100,
                        width: 12,
                        height: 24
                    },
                    T: {
                        x: 148,
                        y: 100,
                        width: 12,
                        height: 24
                    },
                    U: {
                        x: 168,
                        y: 100,
                        width: 12,
                        height: 24
                    },
                    V: {
                        x: 189,
                        y: 100,
                        width: 12,
                        height: 24
                    },
                    W: {
                        x: 210,
                        y: 100,
                        width: 12,
                        height: 24
                    },
                    X: {
                        x: 230,
                        y: 100,
                        width: 12,
                        height: 24
                    },
                    Y: {
                        x: 251,
                        y: 100,
                        width: 12,
                        height: 24
                    },
                    Z: {
                        x: 271,
                        y: 100,
                        width: 12,
                        height: 24
                    },
                    "[": {
                        x: 292,
                        y: 100,
                        width: 12,
                        height: 24
                    },
                    "\\": {
                        x: 4,
                        y: 132,
                        width: 12,
                        height: 24
                    },
                    "]": {
                        x: 24,
                        y: 132,
                        width: 12,
                        height: 24
                    },
                    "^": {
                        x: 45,
                        y: 132,
                        width: 12,
                        height: 24
                    },
                    _: {
                        x: 65,
                        y: 132,
                        width: 12,
                        height: 24
                    },
                    "`": {
                        x: 86,
                        y: 132,
                        width: 12,
                        height: 24
                    },
                    a: {
                        x: 107,
                        y: 132,
                        width: 12,
                        height: 24
                    },
                    b: {
                        x: 127,
                        y: 132,
                        width: 12,
                        height: 24
                    },
                    c: {
                        x: 148,
                        y: 132,
                        width: 12,
                        height: 24
                    },
                    d: {
                        x: 168,
                        y: 132,
                        width: 12,
                        height: 24
                    },
                    e: {
                        x: 189,
                        y: 132,
                        width: 12,
                        height: 24
                    },
                    f: {
                        x: 210,
                        y: 132,
                        width: 12,
                        height: 24
                    },
                    g: {
                        x: 230,
                        y: 132,
                        width: 12,
                        height: 24
                    },
                    h: {
                        x: 251,
                        y: 132,
                        width: 12,
                        height: 24
                    },
                    i: {
                        x: 271,
                        y: 132,
                        width: 12,
                        height: 24
                    },
                    j: {
                        x: 292,
                        y: 132,
                        width: 12,
                        height: 24
                    },
                    k: {
                        x: 4,
                        y: 164,
                        width: 12,
                        height: 24
                    },
                    l: {
                        x: 24,
                        y: 164,
                        width: 12,
                        height: 24
                    },
                    m: {
                        x: 45,
                        y: 164,
                        width: 12,
                        height: 24
                    },
                    n: {
                        x: 65,
                        y: 164,
                        width: 12,
                        height: 24
                    },
                    o: {
                        x: 86,
                        y: 164,
                        width: 12,
                        height: 24
                    },
                    p: {
                        x: 107,
                        y: 164,
                        width: 12,
                        height: 24
                    },
                    q: {
                        x: 127,
                        y: 164,
                        width: 12,
                        height: 24
                    },
                    r: {
                        x: 148,
                        y: 164,
                        width: 12,
                        height: 24
                    },
                    s: {
                        x: 168,
                        y: 164,
                        width: 12,
                        height: 24
                    },
                    t: {
                        x: 189,
                        y: 164,
                        width: 12,
                        height: 24
                    },
                    u: {
                        x: 210,
                        y: 164,
                        width: 12,
                        height: 24
                    },
                    v: {
                        x: 230,
                        y: 164,
                        width: 12,
                        height: 24
                    },
                    w: {
                        x: 251,
                        y: 164,
                        width: 12,
                        height: 24
                    },
                    x: {
                        x: 271,
                        y: 164,
                        width: 12,
                        height: 24
                    },
                    y: {
                        x: 292,
                        y: 164,
                        width: 12,
                        height: 24
                    },
                    z: {
                        x: 4,
                        y: 196,
                        width: 12,
                        height: 24
                    },
                    "{": {
                        x: 24,
                        y: 196,
                        width: 12,
                        height: 24
                    },
                    "|": {
                        x: 45,
                        y: 196,
                        width: 12,
                        height: 24
                    },
                    "}": {
                        x: 65,
                        y: 196,
                        width: 12,
                        height: 24
                    },
                    "~": {
                        x: 86,
                        y: 196,
                        width: 12,
                        height: 24
                    },
                    "": {
                        x: 107,
                        y: 196,
                        width: 12,
                        height: 24
                    },
                    "": {
                        x: 127,
                        y: 196,
                        width: 12,
                        height: 24
                    },
                    "": {
                        x: 148,
                        y: 196,
                        width: 12,
                        height: 24
                    },
                    "": {
                        x: 168,
                        y: 196,
                        width: 12,
                        height: 24
                    },
                    "": {
                        x: 189,
                        y: 196,
                        width: 12,
                        height: 24
                    },
                    "": {
                        x: 210,
                        y: 196,
                        width: 12,
                        height: 24
                    },
                    "": {
                        x: 230,
                        y: 196,
                        width: 12,
                        height: 24
                    },
                    "": {
                        x: 251,
                        y: 196,
                        width: 12,
                        height: 24
                    },
                    "": {
                        x: 271,
                        y: 196,
                        width: 12,
                        height: 24
                    },
                    "": {
                        x: 292,
                        y: 196,
                        width: 12,
                        height: 24
                    },
                    "": {
                        x: 4,
                        y: 228,
                        width: 12,
                        height: 24
                    },
                    "": {
                        x: 24,
                        y: 228,
                        width: 12,
                        height: 24
                    },
                    "": {
                        x: 45,
                        y: 228,
                        width: 12,
                        height: 24
                    },
                    "": {
                        x: 65,
                        y: 228,
                        width: 12,
                        height: 24
                    },
                    "": {
                        x: 86,
                        y: 228,
                        width: 12,
                        height: 24
                    },
                    "": {
                        x: 107,
                        y: 228,
                        width: 12,
                        height: 24
                    },
                    "": {
                        x: 127,
                        y: 228,
                        width: 12,
                        height: 24
                    },
                    "": {
                        x: 148,
                        y: 228,
                        width: 12,
                        height: 24
                    },
                    "": {
                        x: 168,
                        y: 228,
                        width: 12,
                        height: 24
                    },
                    "": {
                        x: 189,
                        y: 228,
                        width: 12,
                        height: 24
                    },
                    "": {
                        x: 210,
                        y: 228,
                        width: 12,
                        height: 24
                    },
                    "": {
                        x: 230,
                        y: 228,
                        width: 12,
                        height: 24
                    },
                    "": {
                        x: 251,
                        y: 228,
                        width: 12,
                        height: 24
                    },
                    "А": {
                        x: 271,
                        y: 228,
                        width: 12,
                        height: 24
                    },
                    "Б": {
                        x: 292,
                        y: 228,
                        width: 12,
                        height: 24
                    },
                    "В": {
                        x: 4,
                        y: 260,
                        width: 12,
                        height: 24
                    },
                    "Г": {
                        x: 24,
                        y: 260,
                        width: 12,
                        height: 24
                    },
                    "Д": {
                        x: 45,
                        y: 260,
                        width: 12,
                        height: 24
                    },
                    "Е": {
                        x: 65,
                        y: 260,
                        width: 12,
                        height: 24
                    },
                    "Ж": {
                        x: 86,
                        y: 260,
                        width: 12,
                        height: 24
                    },
                    "З": {
                        x: 107,
                        y: 260,
                        width: 12,
                        height: 24
                    },
                    "И": {
                        x: 127,
                        y: 260,
                        width: 12,
                        height: 24
                    },
                    "Й": {
                        x: 148,
                        y: 260,
                        width: 12,
                        height: 24
                    },
                    "К": {
                        x: 168,
                        y: 260,
                        width: 12,
                        height: 24
                    },
                    "Л": {
                        x: 189,
                        y: 260,
                        width: 12,
                        height: 24
                    },
                    "М": {
                        x: 210,
                        y: 260,
                        width: 12,
                        height: 24
                    },
                    "Н": {
                        x: 230,
                        y: 260,
                        width: 12,
                        height: 24
                    },
                    "О": {
                        x: 251,
                        y: 260,
                        width: 12,
                        height: 24
                    },
                    "П": {
                        x: 271,
                        y: 260,
                        width: 12,
                        height: 24
                    },
                    "Р": {
                        x: 292,
                        y: 260,
                        width: 12,
                        height: 24
                    },
                    "С": {
                        x: 4,
                        y: 292,
                        width: 12,
                        height: 24
                    },
                    "Т": {
                        x: 24,
                        y: 292,
                        width: 12,
                        height: 24
                    },
                    "У": {
                        x: 45,
                        y: 292,
                        width: 12,
                        height: 24
                    },
                    "Ф": {
                        x: 65,
                        y: 292,
                        width: 12,
                        height: 24
                    },
                    "Х": {
                        x: 86,
                        y: 292,
                        width: 12,
                        height: 24
                    },
                    "Ц": {
                        x: 107,
                        y: 292,
                        width: 12,
                        height: 24
                    },
                    "Ч": {
                        x: 127,
                        y: 292,
                        width: 12,
                        height: 24
                    },
                    "Ш": {
                        x: 148,
                        y: 292,
                        width: 12,
                        height: 24
                    },
                    "Щ": {
                        x: 168,
                        y: 292,
                        width: 12,
                        height: 24
                    },
                    "Ъ": {
                        x: 189,
                        y: 292,
                        width: 12,
                        height: 24
                    },
                    "Ы": {
                        x: 210,
                        y: 292,
                        width: 12,
                        height: 24
                    },
                    "Ь": {
                        x: 230,
                        y: 292,
                        width: 12,
                        height: 24
                    },
                    "Э": {
                        x: 251,
                        y: 292,
                        width: 12,
                        height: 24
                    },
                    "Ю": {
                        x: 271,
                        y: 292,
                        width: 12,
                        height: 24
                    },
                    "Я": {
                        x: 292,
                        y: 292,
                        width: 12,
                        height: 24
                    },
                    "а": {
                        x: 4,
                        y: 324,
                        width: 12,
                        height: 24
                    },
                    "б": {
                        x: 24,
                        y: 324,
                        width: 12,
                        height: 24
                    },
                    "в": {
                        x: 45,
                        y: 324,
                        width: 12,
                        height: 24
                    },
                    "г": {
                        x: 65,
                        y: 324,
                        width: 12,
                        height: 24
                    },
                    "д": {
                        x: 86,
                        y: 324,
                        width: 12,
                        height: 24
                    },
                    "е": {
                        x: 107,
                        y: 324,
                        width: 12,
                        height: 24
                    },
                    "ж": {
                        x: 127,
                        y: 324,
                        width: 12,
                        height: 24
                    },
                    "з": {
                        x: 148,
                        y: 324,
                        width: 12,
                        height: 24
                    },
                    "и": {
                        x: 168,
                        y: 324,
                        width: 12,
                        height: 24
                    },
                    "й": {
                        x: 189,
                        y: 324,
                        width: 12,
                        height: 24
                    },
                    "к": {
                        x: 210,
                        y: 324,
                        width: 12,
                        height: 24
                    },
                    "л": {
                        x: 230,
                        y: 324,
                        width: 12,
                        height: 24
                    },
                    "м": {
                        x: 251,
                        y: 324,
                        width: 12,
                        height: 24
                    },
                    "н": {
                        x: 271,
                        y: 324,
                        width: 12,
                        height: 24
                    },
                    "о": {
                        x: 292,
                        y: 324,
                        width: 12,
                        height: 24
                    },
                    "п": {
                        x: 4,
                        y: 356,
                        width: 12,
                        height: 24
                    },
                    "р": {
                        x: 24,
                        y: 356,
                        width: 12,
                        height: 24
                    },
                    "с": {
                        x: 45,
                        y: 356,
                        width: 12,
                        height: 24
                    },
                    "т": {
                        x: 65,
                        y: 356,
                        width: 12,
                        height: 24
                    },
                    "у": {
                        x: 86,
                        y: 356,
                        width: 12,
                        height: 24
                    },
                    "ф": {
                        x: 107,
                        y: 356,
                        width: 12,
                        height: 24
                    },
                    "х": {
                        x: 127,
                        y: 356,
                        width: 12,
                        height: 24
                    },
                    "ц": {
                        x: 148,
                        y: 356,
                        width: 12,
                        height: 24
                    },
                    "ч": {
                        x: 168,
                        y: 356,
                        width: 12,
                        height: 24
                    },
                    "ш": {
                        x: 189,
                        y: 356,
                        width: 12,
                        height: 24
                    },
                    "щ": {
                        x: 210,
                        y: 356,
                        width: 12,
                        height: 24
                    },
                    "ъ": {
                        x: 230,
                        y: 356,
                        width: 12,
                        height: 24
                    },
                    "ы": {
                        x: 251,
                        y: 356,
                        width: 12,
                        height: 24
                    },
                    "ь": {
                        x: 271,
                        y: 356,
                        width: 12,
                        height: 24
                    },
                    "э": {
                        x: 292,
                        y: 356,
                        width: 12,
                        height: 24
                    },
                    "ю": {
                        x: 4,
                        y: 388,
                        width: 12,
                        height: 24
                    },
                    "я": {
                        x: 24,
                        y: 388,
                        width: 12,
                        height: 24
                    },
                    "ѐ": {
                        x: 45,
                        y: 388,
                        width: 12,
                        height: 24
                    },
                    "ё": {
                        x: 65,
                        y: 388,
                        width: 12,
                        height: 24
                    },
                    "ђ": {
                        x: 86,
                        y: 388,
                        width: 12,
                        height: 24
                    },
                    "ѓ": {
                        x: 107,
                        y: 388,
                        width: 12,
                        height: 24
                    },
                    "є": {
                        x: 127,
                        y: 388,
                        width: 12,
                        height: 24
                    },
                    "ѕ": {
                        x: 148,
                        y: 388,
                        width: 12,
                        height: 24
                    },
                    "і": {
                        x: 168,
                        y: 388,
                        width: 12,
                        height: 24
                    },
                    "ї": {
                        x: 189,
                        y: 388,
                        width: 12,
                        height: 24
                    },
                    "ј": {
                        x: 210,
                        y: 388,
                        width: 12,
                        height: 24
                    },
                    "љ": {
                        x: 230,
                        y: 388,
                        width: 12,
                        height: 24
                    },
                    "њ": {
                        x: 251,
                        y: 388,
                        width: 12,
                        height: 24
                    },
                    "ћ": {
                        x: 271,
                        y: 388,
                        width: 12,
                        height: 24
                    }
                },
                width: 320,
                height: 416
            }
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
}, , function(t, e, r) {
    "use strict";
    e.__esModule = true;
    e.TileBehaviour = e.PlatformBehaviour = e.MainSceneBehaviour = e.Ground1Behaviour = e.DudeBehaviour = e.ClampBehaviour = undefined;
    var i = r(28);
    var n = r(29);
    var o = r(30);
    var a = r(31);
    var s = r(32);
    var u = r(33);
    e.ClampBehaviour = i.ClampBehaviour;
    e.DudeBehaviour = n.DudeBehaviour;
    e.Ground1Behaviour = o.Ground1Behaviour;
    e.MainSceneBehaviour = a.MainSceneBehaviour;
    e.PlatformBehaviour = s.PlatformBehaviour;
    e.TileBehaviour = u.TileBehaviour;
}, function(t, e, r) {
    "use strict";
    e.__esModule = true;
    function i(t, e) {
        if (!(t instanceof e)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    var n = e.ClampBehaviour = function() {
        function t() {
            i(this, t);
        }
        t.prototype.onCreate = function t() {};
        t.prototype.onUpdate = function t() {};
        t.prototype.onDestroy = function t() {};
        return t;
    }();
}, function(t, e, r) {
    "use strict";
    e.__esModule = true;
    function i(t, e) {
        if (!(t instanceof e)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    var n = e.DudeBehaviour = function() {
        function t() {
            i(this, t);
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
}, function(t, e, r) {
    "use strict";
    e.__esModule = true;
    function i(t, e) {
        if (!(t instanceof e)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    var n = e.Ground1Behaviour = function() {
        function t() {
            i(this, t);
        }
        t.prototype.onCreate = function t() {};
        t.prototype.onUpdate = function t() {};
        t.prototype.onDestroy = function t() {};
        return t;
    }();
}, function(t, e, r) {
    "use strict";
    e.__esModule = true;
    function i(t, e) {
        if (!(t instanceof e)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    var n = e.MainSceneBehaviour = function() {
        function t() {
            i(this, t);
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
            this.offsetX = 0;
        };
        t.prototype.onUpdate = function t() {
            var e = this;
            this.game.renderer.fillRect(this.x, this.y, 10, 10, this.color);
            this.points.forEach(function(t) {
                e.game.renderer.fillRect(t.x, t.y, 50, 50, e.color);
            });
            var r = this.game.camera;
            var i = this.game.camera.getRectScaled();
            this.game.renderer.drawRect(i.x + 50, i.y + 50, i.width - 100, i.height - 100, [ 0, 1, 0, 1 ]);
            this.game.renderer.drawTiledImage("resources/tile.jpg", 130, 0, 130, 61, i.x, i.y, 100, 100, this.offsetX, this.offsetX);
            this.offsetX += .1;
        };
        t.prototype.onDestroy = function t() {};
        return t;
    }();
}, function(t, e, r) {
    "use strict";
    e.__esModule = true;
    function i(t, e) {
        if (!(t instanceof e)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    var n = e.PlatformBehaviour = function() {
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
}, function(t, e, r) {
    "use strict";
    e.__esModule = true;
    function i(t, e) {
        if (!(t instanceof e)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    var n = e.TileBehaviour = function() {
        function t() {
            i(this, t);
        }
        t.prototype.onCreate = function t() {};
        t.prototype.onUpdate = function t() {};
        t.prototype.onDestroy = function t() {};
        return t;
    }();
}, function(t, e, r) {
    "use strict";
    e.__esModule = true;
    e.Control2Dir = e.Control4Dir = e.Draggable = undefined;
    var i = r(37);
    var n = f(i);
    var o = r(36);
    var a = f(o);
    var s = r(35);
    var u = f(s);
    function f(t) {
        return t && t.__esModule ? t : {
            default: t
        };
    }
    e.Draggable = n.default;
    e.Control4Dir = a.default;
    e.Control2Dir = u.default;
}, function(t, e, r) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var i = r(38);
    var n = o(i);
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
        function e(r) {
            a(this, e);
            return s(this, t.call(this, r));
        }
        e.prototype.manage = function e(r, i) {
            t.prototype.manage.call(this, r, i);
        };
        e.prototype.onUpdate = function t() {
            var e = this.game.keyboard;
            var r = this.parameters;
            var i = this.gameObject;
            if (e.isPressed(e.KEY.LEFT) || e.isPressed(e.KEY.GAME_PAD_AXIS_LEFT)) {
                i.rigidBody.vel.x = -r.velocity;
                this.go("Left");
            }
            if (e.isPressed(e.KEY.RIGHT) || e.isPressed(e.KEY.GAME_PAD_AXIS_RIGHT)) {
                i.rigidBody.vel.x = r.velocity;
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
    e.default = f;
}, function(t, e, r) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var i = r(39);
    var n = o(i);
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
        function e(r) {
            a(this, e);
            return s(this, t.call(this, r));
        }
        e.prototype.manage = function e(r, i) {
            t.prototype.manage.call(this, r, i);
        };
        e.prototype.onUpdate = function t() {
            var e = this.game.keyboard;
            var r = this.parameters;
            var i = this.gameObject;
            if (e.isPressed(e.KEY.UP) || e.isPressed(e.KEY.GAME_PAD_AXIS_UP)) {
                i.rigidBody.vel.y = -r.velocity;
                this.go("Up");
            }
            if (e.isPressed(e.KEY.DOWN) || e.isPressed(e.KEY.GAME_PAD_AXIS_DOWN)) {
                i.rigidBody.vel.y = r.velocity;
                this.go("Down");
            }
            if (e.isPressed(e.KEY.LEFT) || e.isPressed(e.KEY.GAME_PAD_AXIS_LEFT)) {
                i.rigidBody.vel.x = -r.velocity;
                this.go("Left");
            }
            if (e.isPressed(e.KEY.RIGHT) || e.isPressed(e.KEY.GAME_PAD_AXIS_RIGHT)) {
                i.rigidBody.vel.x = r.velocity;
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
    e.default = f;
}, function(t, e, r) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var i = r(11);
    var n = o(i);
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
        function e(r) {
            a(this, e);
            var i = s(this, t.call(this));
            i.game = r;
            i.points = {};
            return i;
        }
        e.prototype.manage = function t(r, i) {
            var n = this;
            r.on("click", function(t) {
                n.points[e._getEventId(t)] = {
                    mX: t.objectX,
                    mY: t.objectY,
                    target: r,
                    preventDefault: function t() {
                        this.defaultPrevented = true;
                    }
                };
            });
            var o = this.game.getCurrScene();
            o.on("mouseDown", function(t) {
                var r = e._getEventId(t);
                var i = n.points[r];
                if (!i) return;
                i.dragStartX = i.target.pos.x;
                i.dragStartY = i.target.pos.y;
            });
            o.on("mouseMove", function(t) {
                var i = e._getEventId(t);
                var o = n.points[i];
                if (!o) return;
                if (!o.dragStart) {
                    o.dragStart = true;
                    o.target.trigger("dragStart", o);
                    if (o.defaultPrevented) {
                        delete n.points[i];
                        return;
                    }
                }
                r.pos.x = t.screenX - o.mX;
                r.pos.y = t.screenY - o.mY;
            });
            o.on("mouseUp", function(t) {
                var i = e._getEventId(t);
                var o = n.points[i];
                if (!o) return;
                if (o.dragStart) {
                    o.x = r.pos.x;
                    o.y = r.pos.y;
                    o.target.trigger("dragStop", o);
                }
                delete n.points[i];
            });
        };
        return e;
    }(n.default);
    e.default = f;
}, function(t, e, r) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var i, n;
    var o = r(12);
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
    var c = (n = i = function(t) {
        h(e, t);
        function e(r) {
            u(this, e);
            return f(this, t.call(this, r));
        }
        e.prototype.manage = function r(i, n) {
            t.prototype.manage.call(this, i, n, e.DIRS);
        };
        e.prototype.stop = function e() {
            t.prototype.stop.call(this);
            this.gameObject.rigidBody.vel.x = 0;
        };
        return e;
    }(a.default), i.DIRS = [ "Left", "Right" ], n);
    e.default = c;
}, function(t, e, r) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var i, n;
    var o = r(12);
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
    var c = (n = i = function(t) {
        h(e, t);
        function e(r) {
            u(this, e);
            return f(this, t.call(this, r));
        }
        e.prototype.manage = function r(i, n) {
            t.prototype.manage.call(this, i, n, e.DIRS);
        };
        e.prototype.stop = function e() {
            t.prototype.stop.call(this);
            this.gameObject.rigidBody.vel.x = 0;
            this.gameObject.rigidBody.vel.y = 0;
        };
        return e;
    }(a.default), i.DIRS = [ "Left", "Right", "Up", "Down" ], n);
    e.default = c;
}, function(t, e, r) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var i = r(15);
    var n = c(i);
    var o = r(6);
    var a = c(o);
    var s = r(2);
    var u = c(s);
    var f = r(46);
    var h = c(f);
    function c(t) {
        return t && t.__esModule ? t : {
            default: t
        };
    }
    function l(t, e) {
        if (!(t instanceof e)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    var d = function() {
        function t(e) {
            l(this, t);
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
            this._rect = new h.default();
            this._rectScaled = new h.default();
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
                target: this,
                ease: "easeInQuad",
                to: {
                    x: this.pos.x,
                    y: this.pos.y
                },
                time: this.TOLERANCE_TIME
            });
        };
        t.prototype.update = function t(e, r) {
            var i = this.getRectScaled();
            var n = this.objFollowTo;
            if (!n) return;
            var o = this.scene.tileMap.spriteSheet ? this.scene.tileMap.spriteSheet._frameWidth : 0;
            var a = this.scene.tileMap.spriteSheet ? this.scene.tileMap.spriteSheet._frameHeight : 0;
            var s = this.game.width;
            var u = this.game.height;
            var f = s / 2;
            var h = u / 2;
            var c = n.pos.x - f;
            var l = n.pos.y - h;
            if (n._lastDirection === "Right") c += i.width / 2;
            if (n._lastDirection === "Left") c -= i.height / 2;
            if (c < 0) c = 0;
            if (l < 0) l = 0;
            if (c > this.sceneWidth - s + o) c = this.sceneWidth - s + o;
            if (l > this.sceneHeight - u + a) l = this.sceneHeight - u + a;
            var d = Math.abs(n.rigidBody.vel.x) > 0 ? .95 : 1;
            if (this.TOLERANCE_TIME === 0) {
                this.pos.x = c;
                this.pos.y = l;
            } else if (e - this.lastToleranceTime > this.TOLERANCE_TIME) {
                this.lastToleranceTime = e;
                this.cameraTween.reuse({
                    to: {
                        "pos.x": c,
                        "pos.y": l,
                        "scale.x": d,
                        "scale.y": d
                    }
                });
            }
            this.cameraTween.update(e);
            this._updateRect();
            this.render();
        };
        t.prototype._updateRect = function t() {
            var e = this.screenToWorld(0, 0);
            var r = this.screenToWorld(this.game.width, this.game.height);
            this._rectScaled.set(e.x, e.y, r.x - e.x, r.y - e.y);
        };
        t.prototype.render = function t() {
            this.game.renderer.translate(this.game.width / 2, this.game.height / 2);
            this.game.renderer.scale(this.scale.x, this.scale.y);
            this.game.renderer.translate(-this.game.width / 2, -this.game.height / 2);
            this.game.renderer.translate(-this.pos.x, -this.pos.y);
        };
        t.prototype.screenToWorld = function t(e, r) {
            var i = a.default.makeScale(this.scale.x, this.scale.y, 1);
            var n = u.default.unProject(e, r, this.game.width, this.game.height, i);
            n.add(this.pos);
            return n;
        };
        t.prototype.getRect = function t() {
            this._rect.set(this.pos.x, this.pos.y, this.game.width, this.game.height);
            return this._rect;
        };
        t.prototype.getRectScaled = function t() {
            return this._rectScaled;
        };
        return t;
    }();
    e.default = d;
}, function(t, e, r) {
    "use strict";
    e.__esModule = true;
    function i(t, e) {
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
            i(this, t);
            this.game = e;
        }
        t.prototype.update = function t() {
            this.gamepads = navigator.getGamepads && navigator.getGamepads() || navigator.webkitGetGamepads && navigator.webkitGetGamepads() || navigator.webkitGamepads || navigator.mozGamepads || navigator.msGamepads || navigator.gamepads || [];
            for (var e = 0, r = this.gamepads.length; e < r; e++) {
                var i = this.gamepads[e];
                if (!i) continue;
                var n = i.buttons.length;
                if (n > 7) n = 7;
                for (var o = 0; o < n; o++) {
                    var a = i.buttons[o];
                    if (a.pressed) {
                        this.game.keyboard.press(o);
                    } else {
                        this.game.keyboard.release(o);
                    }
                }
                if (i.axes[0] === 0) continue;
                if (i.axes[1] === 0) continue;
                var s = ~~i.axes[0];
                var u = ~~i.axes[1];
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
                if (u === 1) {
                    this.game.keyboard.press(this.game.keyboard.KEY.GAME_PAD_AXIS_DOWN);
                } else {
                    this.game.keyboard.release(this.game.keyboard.KEY.GAME_PAD_AXIS_DOWN);
                }
                if (u === -1) {
                    this.game.keyboard.press(this.game.keyboard.KEY.GAME_PAD_AXIS_UP);
                } else {
                    this.game.keyboard.release(this.game.keyboard.KEY.GAME_PAD_AXIS_UP);
                }
            }
        };
        return t;
    }();
    e.default = n;
}, function(t, e, r) {
    "use strict";
    e.__esModule = true;
    function i(t, e) {
        if (!(t instanceof e)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    var n = 2;
    var o = 1;
    var a = 0;
    var s = -1;
    var u = function() {
        function t(e) {
            i(this, t);
            this.keyDownListener = null;
            this.keyUpListener = null;
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
            this.keyDownListener = function(t) {
                var r = t.keyCode;
                e.press(r);
            };
            this.keyUpListener = function(t) {
                var r = t.keyCode;
                e.release(r);
            };
            window.addEventListener("keydown", this.keyDownListener);
            window.addEventListener("keyup", this.keyUpListener);
        };
        t.prototype.destroy = function t() {
            window.removeEventListener("keydown", this.keyDownListener);
            window.removeEventListener("keyup", this.keyUpListener);
        };
        return t;
    }();
    e.default = u;
}, function(t, e, r) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var i = r(2);
    var n = o(i);
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
            this.container = null;
            this.game = e;
            this.currPoint = null;
        }
        t.prototype.resolveScreenPoint = function t(e) {
            var r = this.game;
            var i = this.game.camera;
            var n = i.getRectScaled();
            var o = (e.clientX - r.pos.x) / r.scale.x;
            var a = (e.clientY - r.pos.y) / r.scale.y;
            var s = r.camera.screenToWorld(o, a);
            return {
                x: s.x,
                y: s.y,
                id: e.identifier || 0
            };
        };
        t.prototype.triggerEvent = function t(e, r, i) {
            var o = this.game;
            var a = o.getCurrScene();
            if (!a) return;
            var s = this.resolveScreenPoint(e);
            t: for (var u = 0; u < a.layers.length; u++) {
                var f = a.layers[a.layers.length - 1 - u];
                for (var h = 0; h < f.gameObjects.length; h++) {
                    var c = f.gameObjects[h];
                    if (n.default.isPointInRect(s, c.getRect())) {
                        c.trigger(r, {
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
            a.trigger(r, {
                screenX: s.x,
                screenY: s.y,
                id: s.id,
                target: a,
                isMouseDown: i
            });
            return s;
        };
        t.prototype.resolveClick = function t(e) {
            this.triggerEvent(e, "click");
            this.triggerEvent(e, "mouseDown");
        };
        t.prototype.resolveMouseMove = function t(e, r) {
            var i = this.triggerEvent(e, "mouseMove", r);
            if (!i) return;
            var n = this.objectsCaptured[i.id];
            if (n && n !== i.object) {
                n.trigger("mouseLeave");
                delete this.objectsCaptured[i.id];
            }
            if (i.object && n !== i.object) {
                i.object.trigger("mouseEnter");
                this.objectsCaptured[i.id] = i.object;
            }
        };
        t.prototype.resolveMouseUp = function t(e) {
            var r = this.triggerEvent(e, "mouseUp");
            if (!r) return;
            var i = this.objectsCaptured[r.id];
            if (!i) return;
            i.trigger("mouseUp");
            delete this.objectsCaptured[r.id];
        };
        t.prototype.resolveDoubleClick = function t(e) {
            var r = this.triggerEvent(e, "doubleClick");
            if (!r) return;
            delete this.objectsCaptured[r.id];
        };
        t.prototype.listenTo = function t(e) {
            var r = this;
            this.container = e;
            e.ontouchstart = function(t) {
                var e = t.touches.length;
                while (e--) {
                    r.resolveClick(t.touches[e]);
                }
            };
            e.onmousedown = function(t) {
                t.button === 0 && r.resolveClick(t);
            };
            e.ontouchend = e.ontouchcancel = function(t) {
                var e = t.changedTouches.length;
                while (e--) {
                    r.resolveMouseUp(t.changedTouches[e]);
                }
            };
            e.onmouseup = function(t) {
                r.resolveMouseUp(t);
            };
            e.ontouchmove = function(t) {
                var e = t.touches.length;
                while (e--) {
                    r.resolveMouseMove(t.touches[e], true);
                }
            };
            e.onmousemove = function(t) {
                var e = t.buttons === 1;
                r.resolveMouseMove(t, e);
            };
            e.ondblclick = function(t) {
                r.resolveDoubleClick(t);
            };
        };
        t.prototype.destroy = function t() {
            var e = this;
            [ "mouseMove", "ontouchstart", "onmousedown", "ontouchend", "onmouseup", "ontouchmove", "onmousemove", "ondblclick" ].forEach(function(t) {
                e.container[t] = null;
            });
        };
        return t;
    }();
    e.default = s;
}, function(t, e, r) {
    "use strict";
    e.__esModule = true;
    var i, n;
    function o(t, e) {
        if (!(t instanceof e)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    var a = !!navigator.isCocoonJS;
    var s = (n = i = function t(e) {
        o(this, t);
    }, i.isCocoonJS = a, i.scale = a ? window.devicePixelRatio || 1 : 1, i.isTouch = typeof window !== "undefined" && "ontouchstart" in window, 
    n);
    e.default = s;
}, function(t, e, r) {
    "use strict";
    e.__esModule = true;
    function i(t, e) {
        if (!(t instanceof e)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    var n = function() {
        function t() {
            var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
            var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            i(this, t);
            this.set(e, r);
        }
        t.prototype.set = function t(e, r) {
            this.x = e;
            this.y = r;
        };
        t.prototype.add = function t(e) {
            this.x += e.x;
            this.y += e.y;
        };
        return t;
    }();
    e.default = n;
}, function(t, e, r) {
    "use strict";
    e.__esModule = true;
    function i(t, e) {
        if (!(t instanceof e)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    var n = function() {
        function t() {
            var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
            var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
            var o = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
            i(this, t);
            this.set(e, r, n, o);
        }
        t.prototype.set = function t(e, r, i, n) {
            this.x = e;
            this.y = r;
            this.width = i;
            this.height = n;
        };
        return t;
    }();
    e.default = n;
}, function(t, e, r) {
    "use strict";
    e.__esModule = true;
    function i(t, e) {
        if (!(t instanceof e)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    var n = function() {
        function t() {
            var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
            var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            i(this, t);
            this.x = e;
            this.y = r;
        }
        t.prototype.dotProduct = function t(e) {
            return this.x * e.x + this.y * e.y;
        };
        t.prototype.crossProduct = function t(e) {
            return this.x * e.y - this.y * e.x;
        };
        t.prototype.setXY = function t(e, r) {
            this.x = e;
            this.y = r;
        };
        t.prototype.addXY = function t(e, r) {
            this.x += e;
            this.y += r;
        };
        t.prototype.multToScalar = function e(r) {
            var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
            if (i) return new t(this.x * r, this.y * r);
            this.x *= r;
            this.y *= r;
            return this;
        };
        t.prototype.divByScalar = function t(e) {
            var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
            return this.multToScalar(1 / e, r);
        };
        t.prototype.plus = function e(r) {
            var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            if (!i) return new t(this.x + r.x, this.y + r.y);
            this.x += r.x;
            this.y += r.y;
            return this;
        };
        t.prototype.minus = function e(r) {
            var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            if (!i) return new t(this.x - r.x, this.y - r.y);
            this.x -= r.x;
            this.y -= r.y;
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
            var r = this.getAngle();
            this.x = Math.cos(r) * e;
            this.y = Math.sin(r) * e;
        };
        t.prototype.getAngle = function t() {
            return Math.atan2(this.y, this.x);
        };
        t.prototype.getAngleBetween = function t(e) {
            return Math.acos((this.x * e.x + this.y * e.y) / this.getLength() * e.getLength());
        };
        t.prototype.setAngle = function t(e) {
            var r = this.getLength();
            this.x = Math.cos(e) * r;
            this.y = Math.sin(e) * r;
        };
        t.prototype.clone = function e() {
            return new t(this.x, this.y);
        };
        t.angleBetween = function t(e, r) {
            e = e.clone().normalize();
            r = r.clone().normalize();
            return Math.acos(e.dotProduct(r));
        };
        t.normalBetween = function t(e, r) {
            var i = e.minus(r);
            return i.normalize();
        };
        t.distance = function e(r, i) {
            return Math.sqrt(t.distanceSquared(r, i));
        };
        t.distanceSquared = function t(e, r) {
            return (e.x - r.x) * (e.x - r.x) + (e.y - r.y) * (e.y - r.y);
        };
        return t;
    }();
    e.default = n;
}, function(t, e, r) {
    "use strict";
    e.__esModule = true;
    function i(t, e) {
        if (!(t instanceof e)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    var n = function() {
        function t() {
            i(this, t);
            this.events = {};
        }
        t.prototype._on = function t(e, r) {
            this.events[e] = this.events[e] || [];
            this.events[e].push(r);
        };
        t.prototype.on = function t(e, r) {
            if (typeof e === "string") {
                this._on(e, r);
            } else if (e.splice) {
                e.forEach(function(t) {
                    this._on(t, r);
                });
            }
        };
        t.prototype.trigger = function t(e, r) {
            var i = this.events[e];
            if (!i) return;
            var n = i.length;
            while (n--) {
                i[n](r);
            }
        };
        return t;
    }();
    e.default = n;
}, function(t, e, r) {
    "use strict";
    e.__esModule = true;
    function i(t, e) {
        if (!(t instanceof e)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    var n = function() {
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
}, function(t, e, r) {
    "use strict";
    (function(t) {
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
        if (!window.cancelAnimationFrame) {
            t.cancelAnimationFrame = function(t) {
                return clearTimeout(t);
            };
        }
        if (!Array.prototype.find) {
            Array.prototype.find = function(t) {
                if (this == null) {
                    throw new TypeError("Array.prototype.find called on null or undefined");
                }
                if (typeof t !== "function") {
                    throw new TypeError("predicate must be a function");
                }
                var e = Object(this);
                var r = e.length >>> 0;
                var i = arguments[1];
                var n = void 0;
                for (var o = 0; o < r; o++) {
                    n = e[o];
                    if (t.call(i, n, o, e)) {
                        return n;
                    }
                }
                return undefined;
            };
        }
    }).call(e, r(78));
}, function(t, e, r) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var i = r(47);
    var n = o(i);
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
            this.vel = new n.default();
            this.game = e.game;
            this.gameObject = e;
        }
        t.prototype.update = function t(e, r) {
            if (!this.gameObject.rigidBody.static) {
                var i = this.vel.x * r / 1e3;
                var n = this.vel.y * r / 1e3;
                var o = this.gameObject.pos.y + n;
                this.game.collider.moveBy(this.gameObject, i, n);
                this.gameObject.rigidBody.onFloor = o > this.gameObject.pos.y;
                if (o !== this.gameObject.pos.y) this.vel.y = 0;
                this.vel.y += this.game.gravityConstant * r / 1e3;
            }
        };
        return t;
    }();
    e.default = s;
}, function(t, e, r) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var i = r(2);
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
        t.prototype.moveBy = function t(e, r, n) {
            var o = this.game.getCurrScene().getAllGameObjects().concat(this.game._currentScene.tileMap.getTilesAtRect(e.getRect()));
            var a = e.getRect();
            a.x += r;
            a.y += n;
            var s = false, u = false;
            for (var f = 0, h = o.length; f < h; f++) {
                var c = o[f];
                var l = c.getRect();
                if (e !== o[f] && (0, i.overlapTest)(a, l)) {
                    var d = a.bottom - l.y;
                    var p = l.bottom - a.y;
                    var y = a.x + a.width - l.x;
                    var m = l.right - a.x;
                    var g = Math.min(d, p, y, m);
                    if (d === g) {
                        e.pos.y = l.y - a.height;
                        u = true;
                    } else if (p === g) {
                        e.pos.y = l.bottom;
                        u = true;
                    } else if (y === g) {
                        e.pos.x = l.x - a.width;
                        s = true;
                    } else if (m === g) {
                        e.pos.x = l.x + l.width;
                        s = true;
                    }
                }
            }
            if (!s) e.pos.x += r;
            if (!u) e.pos.y += n;
        };
        t.prototype.moveTo = function t(e, r, n) {
            var o = e.getRect();
            var a = false;
            if (e.rigidBody) {
                this.game.getCurrScene().getAllGameObjects().concat(this.game._currentScene.tileMap.getTilesAtRect(o)).some(function(t) {
                    if ((0, i.overlapTest)(o, t.getRect())) {
                        a = true;
                        return true;
                    }
                });
            }
            if (a) return;
            e.pos.x = r;
            e.pos.y = n;
        };
        return t;
    }();
    e.default = o;
}, function(t, e, r) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var i = r(19);
    var n = s(i);
    var o = r(44);
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
            this.renderableCache = {};
            this.container = null;
            this.debugTextField = null;
            this.fullScreenSize = {
                w: 0,
                h: 0,
                scaleFactor: 1
            };
            this.game = e;
            if (a.default.isCocoonJS) {
                this.fullScreenSize.w = window.innerWidth * a.default.scale;
                this.fullScreenSize.h = window.innerHeight * a.default.scale;
                this.fullScreenSize.scaleFactor = Math.min(this.fullScreenSize.w / this.game.width, this.fullScreenSize.h / this.game.height);
            } else {
                this.fullScreenSize.w = e.width;
                this.fullScreenSize.h = e.height;
            }
        }
        t.prototype.onResize = function t() {
            var e = this.container.height / this.container.width;
            var r = window.innerHeight / window.innerWidth;
            var i = void 0;
            var n = void 0;
            if (r < e) {
                n = window.innerHeight;
                i = n / e;
            } else {
                i = window.innerWidth;
                n = i * e;
            }
            this.game.scale.x = i / this.game.width;
            this.game.scale.y = n / this.game.height;
            this.game.pos.x = (window.innerWidth - i) / 2;
            this.game.pos.y = (window.innerHeight - n) / 2;
            this.container.style.width = i + "px";
            this.container.style.height = n + "px";
            this.container.style.marginTop = this.game.pos.y + "px";
        };
        t.prototype.requestFullScreen = function t() {
            var e = this.container;
            if (e.requestFullScreen) {
                e.requestFullScreen();
            } else if (e.mozRequestFullScreen) {
                e.mozRequestFullScreen();
            } else if (e.webkitRequestFullScreen) {
                e.webkitRequestFullScreen();
            }
        };
        t.prototype.cancelFullScreen = function t() {
            if (document.cancelFullScreen) {
                document.cancelFullScreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitCancelFullScreen) {
                document.webkitCancelFullScreen();
            }
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
                return e.onResize();
            });
        };
        t.prototype.destroy = function t() {
            window.removeEventListener("resize", this.onResize);
        };
        t.prototype.getError = function t() {
            return 0;
        };
        t.prototype.log = function t() {
            if (false) return;
            var e = this.debugTextField;
            var r = "";
            Array.prototype.slice.call(arguments).forEach(function(t) {
                if (t === undefined) t = "undefined";
                if (t === null) t = "null";
                if (t.toJSON) {
                    t = JSON.stringify(t.toJSON(), null, 4);
                } else {
                    try {
                        t = JSON.stringify(t);
                    } catch (t) {}
                }
                if (typeof t !== "string") t = t.toString();
                r += t + "\n";
            });
            if (!e) {
                e = new n.default(this.game);
                e.name = "defaultName";
                e.revalidate();
                this.debugTextField = e;
            }
            e.pos.x = 10;
            e.pos.y = 10;
            e.setText(e.getText() + r);
        };
        t.prototype.loadTextureInfo = function t(e, r) {};
        t.prototype.getTextureInfo = function t(e) {};
        return t;
    }();
    e.default = f;
}, function(t, e, r) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var i = r(65);
    var n = o(i);
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
}, function(t, e, r) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var i = r(14);
    var n = o(i);
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
        function t(e, r, i) {
            a(this, t);
            if (1 && !e) throw "can not create FrameBuffer, gl context not passed to constructor, expected: FrameBuffer(gl)";
            this.gl = e;
            this.width = r;
            this.height = i;
            this.texture = new n.default(e);
            this.texture.setImage(null, r, i);
            this._init(e, r, i);
        }
        t.prototype._init = function t(e, r, i) {
            this.glRenderBuffer = e.createRenderbuffer();
            e.bindRenderbuffer(e.RENDERBUFFER, this.glRenderBuffer);
            e.renderbufferStorage(e.RENDERBUFFER, e.DEPTH_COMPONENT16, r, i);
            this.glFrameBuffer = e.createFramebuffer();
            e.bindFramebuffer(e.FRAMEBUFFER, this.glFrameBuffer);
            e.framebufferTexture2D(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, this.texture.getGlTexture(), 0);
            e.framebufferRenderbuffer(e.FRAMEBUFFER, e.DEPTH_ATTACHMENT, e.RENDERBUFFER, this.glRenderBuffer);
            this.texture.unbind();
            e.bindRenderbuffer(e.RENDERBUFFER, null);
            e.bindFramebuffer(e.FRAMEBUFFER, null);
        };
        t.prototype.bind = function t() {
            this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.glFrameBuffer);
            this.gl.viewport(0, 0, this.width, this.height);
        };
        t.prototype.unbind = function t() {
            this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null);
        };
        t.prototype.getTexture = function t() {
            return this.texture;
        };
        return t;
    }();
    e.default = s;
}, function(t, e, r) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var i = r(6);
    var n = o(i);
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
            this.stack = [];
            this.restore();
        }
        t.prototype.restore = function t() {
            this.stack.pop();
            if (this.stack.length < 1) {
                this.stack[0] = n.default.makeIdentity();
            }
        };
        t.prototype.save = function t() {
            this.stack.push(this.getCurrentMatrix());
        };
        t.prototype.getCurrentMatrix = function t() {
            return this.stack[this.stack.length - 1].slice();
        };
        t.prototype.setCurrentMatrix = function t(e) {
            return this.stack[this.stack.length - 1] = e;
        };
        t.prototype.translate = function t(e, r, i) {
            if (i === undefined) {
                i = 0;
            }
            var o = n.default.makeTranslation(e, r, i);
            var a = this.getCurrentMatrix();
            this.setCurrentMatrix(n.default.matrixMultiply(o, a));
        };
        t.prototype.rotateZ = function t(e) {
            var r = n.default.makeZRotation(e);
            var i = this.getCurrentMatrix();
            this.setCurrentMatrix(n.default.matrixMultiply(r, i));
        };
        t.prototype.rotateY = function t(e) {
            var r = n.default.makeYRotation(e);
            var i = this.getCurrentMatrix();
            this.setCurrentMatrix(n.default.matrixMultiply(r, i));
        };
        t.prototype.scale = function t(e, r, i) {
            if (i === undefined) {
                i = 1;
            }
            var o = n.default.makeScale(e, r, i);
            var a = this.getCurrentMatrix();
            this.setCurrentMatrix(n.default.matrixMultiply(o, a));
        };
        return t;
    }();
    e.default = s;
}, function(t, e, r) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var i = r(8);
    var n = o(i);
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
        function e() {
            a(this, e);
            var r = s(this, t.call(this));
            r.vertexArr = [];
            var i = Math.PI * 2;
            r.vertexArr.push(.5);
            r.vertexArr.push(.5);
            for (var n = 0, o = i; n < o; n += .1) {
                r.vertexArr.push(Math.cos(n) / 2 + .5);
                r.vertexArr.push(Math.sin(n) / 2 + .5);
            }
            r.vertexArr.push(Math.cos(i) / 2 + .5);
            r.vertexArr.push(Math.sin(i) / 2 + .5);
            return r;
        }
        return e;
    }(n.default);
    e.default = f;
}, function(t, e, r) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var i = r(8);
    var n = o(i);
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
        function e() {
            a(this, e);
            var r = s(this, t.call(this));
            r.vertexArr = [ 0, 0, 1, 1 ];
            r.indexArr = [ 0, 1 ];
            return r;
        }
        return e;
    }(n.default);
    e.default = f;
}, function(t, e, r) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var i = r(57);
    var n = w(i);
    var o = r(7);
    var a = w(o);
    var s = r(4);
    var u = w(s);
    var f = r(5);
    var h = w(f);
    var c = r(3);
    var l = w(c);
    var d = r(9);
    var p = w(d);
    var y = r(10);
    var m = w(y);
    var g = r(1);
    var v = w(g);
    function w(t) {
        return t && t.__esModule ? t : {
            default: t
        };
    }
    function _(t, e) {
        if (!(t instanceof e)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    function b(t, e) {
        if (!t) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return e && (typeof e === "object" || typeof e === "function") ? e : t;
    }
    function x(t, e) {
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
    var E = function(t) {
        x(e, t);
        function e(r, i) {
            _(this, e);
            var o = b(this, t.call(this, r, i));
            o.program = new u.default(r, [ p.default, m.default ]);
            o.circle = new n.default();
            o.posVertexBuffer = new h.default(r);
            o.posVertexBuffer.setData(o.circle.vertexArr, o.gl.FLOAT, 2);
            return o;
        }
        e.prototype.bind = function e() {
            t.prototype.bind.call(this);
            this.program.bind();
            this.posVertexBuffer.bind(this.program, "a_position");
        };
        e.prototype.draw = function t() {
            this.gl.drawArrays(this.gl.TRIANGLE_FAN, 0, this.posVertexBuffer.getBufferLength() / 2);
        };
        return e;
    }(v.default);
    e.default = E;
}, function(t, e, r) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var i = r(7);
    var n = g(i);
    var o = r(4);
    var a = g(o);
    var s = r(5);
    var u = g(s);
    var f = r(3);
    var h = g(f);
    var c = r(9);
    var l = g(c);
    var d = r(10);
    var p = g(d);
    var y = r(1);
    var m = g(y);
    function g(t) {
        return t && t.__esModule ? t : {
            default: t
        };
    }
    function v(t, e) {
        if (!(t instanceof e)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    function w(t, e) {
        if (!t) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return e && (typeof e === "object" || typeof e === "function") ? e : t;
    }
    function _(t, e) {
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
    var b = function(t) {
        _(e, t);
        function e(r, i) {
            v(this, e);
            var o = w(this, t.call(this, r, i));
            o.plane = new n.default();
            o.program = new a.default(r, [ l.default, p.default ]);
            o.posVertexBuffer = new u.default(r);
            o.posIndexBuffer = new h.default(r);
            o.posVertexBuffer.setData(o.plane.vertexArr, o.gl.FLOAT, 2);
            o.posIndexBuffer.setData(o.plane.indexArr);
            return o;
        }
        e.prototype.bind = function e() {
            t.prototype.bind.call(this);
            this.program.bind();
            this.posVertexBuffer.bind(this.program, "a_position");
            this.posIndexBuffer.bind();
        };
        e.prototype.draw = function t() {
            this.gl.drawElements(this.gl.TRIANGLE_STRIP, this.posIndexBuffer.getBufferLength(), this.gl.UNSIGNED_SHORT, 0);
        };
        return e;
    }(m.default);
    e.default = b;
}, function(t, e, r) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var i = r(58);
    var n = g(i);
    var o = r(4);
    var a = g(o);
    var s = r(5);
    var u = g(s);
    var f = r(3);
    var h = g(f);
    var c = r(9);
    var l = g(c);
    var d = r(10);
    var p = g(d);
    var y = r(1);
    var m = g(y);
    function g(t) {
        return t && t.__esModule ? t : {
            default: t
        };
    }
    function v(t, e) {
        if (!(t instanceof e)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    function w(t, e) {
        if (!t) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return e && (typeof e === "object" || typeof e === "function") ? e : t;
    }
    function _(t, e) {
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
    var b = function(t) {
        _(e, t);
        function e(r, i) {
            v(this, e);
            var o = w(this, t.call(this, r, i));
            o.program = new a.default(r, [ l.default, p.default ]);
            o.line = new n.default();
            o.posVertexBuffer = new u.default(r);
            o.posIndexBuffer = new h.default(r);
            o.posVertexBuffer.setData(o.line.vertexArr, o.gl.FLOAT, 2);
            return o;
        }
        e.prototype.bind = function e() {
            t.prototype.bind.call(this);
            this.program.bind();
            this.posVertexBuffer.bind(this.program, "a_position");
        };
        e.prototype.draw = function t() {
            this.gl.drawArrays(this.gl.LINE_STRIP, 0, this.posVertexBuffer.getBufferLength() / 2);
        };
        return e;
    }(m.default);
    e.default = b;
}, function(t, e, r) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var i = r(4);
    var n = y(i);
    var o = r(5);
    var a = y(o);
    var s = r(3);
    var u = y(s);
    var f = r(79);
    var h = y(f);
    var c = r(81);
    var l = y(c);
    var d = r(1);
    var p = y(d);
    function y(t) {
        return t && t.__esModule ? t : {
            default: t
        };
    }
    function m(t, e) {
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
    var w = function(t) {
        v(e, t);
        function e(r, i) {
            m(this, e);
            var o = g(this, t.call(this, r, i));
            o.program = new n.default(r, [ h.default, l.default ]);
            o.posVertexBuffer = new a.default(r);
            o.texVertexBuffer = new a.default(r);
            o.normalBuffer = new a.default(r);
            o.posIndexBuffer = new u.default(r);
            o.program.bind();
            return o;
        }
        e.prototype.bind = function e(r) {
            t.prototype.bind.call(this);
            this.program.bind();
            var i = this.gl;
            var n = this.program;
            this.posVertexBuffer.setData(r.vertexArr, i.FLOAT, 3);
            n.bindBuffer(this.posVertexBuffer, "a_position");
            this.texVertexBuffer.setData(r.texCoordArr, i.FLOAT, 2);
            n.bindBuffer(this.texVertexBuffer, "a_texcoord");
            this.normalBuffer.setData(r.normalArr, i.FLOAT, 3);
            n.bindBuffer(this.normalBuffer, "a_normal");
            this.posIndexBuffer.setData(r.indexArr);
            this.posIndexBuffer.bind();
        };
        e.prototype.draw = function t() {
            this.gl.drawElements(this.gl.TRIANGLES, this.posIndexBuffer.getBufferLength(), this.gl.UNSIGNED_SHORT, 0);
        };
        return e;
    }(p.default);
    e.default = w;
}, function(t, e, r) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var i = r(7);
    var n = g(i);
    var o = r(4);
    var a = g(o);
    var s = r(5);
    var u = g(s);
    var f = r(3);
    var h = g(f);
    var c = r(20);
    var l = g(c);
    var d = r(80);
    var p = g(d);
    var y = r(1);
    var m = g(y);
    function g(t) {
        return t && t.__esModule ? t : {
            default: t
        };
    }
    function v(t, e) {
        if (!(t instanceof e)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    function w(t, e) {
        if (!t) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return e && (typeof e === "object" || typeof e === "function") ? e : t;
    }
    function _(t, e) {
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
    var b = function(t) {
        _(e, t);
        function e(r, i) {
            v(this, e);
            var o = w(this, t.call(this, r, i));
            o.plane = new n.default();
            o.program = new a.default(r, [ l.default, p.default ]);
            o.posVertexBuffer = new u.default(r);
            o.posIndexBuffer = new h.default(r);
            o.texVertexBuffer = new u.default(r);
            o.posIndexBuffer.setData(o.plane.indexArr);
            o.posVertexBuffer.setData(o.plane.vertexArr, r.FLOAT, 2);
            o.texVertexBuffer.setData(o.plane.texCoordArr, r.FLOAT, 2);
            return o;
        }
        e.prototype.bind = function e() {
            t.prototype.bind.call(this);
            this.program.bind();
            this.posIndexBuffer.bind();
            this.posVertexBuffer.bind(this.program, "a_position");
            this.texVertexBuffer.bind(this.program, "a_texcoord");
        };
        e.prototype.draw = function t() {
            this.gl.drawElements(this.gl.TRIANGLE_STRIP, this.posIndexBuffer.getBufferLength(), this.gl.UNSIGNED_SHORT, 0);
        };
        return e;
    }(m.default);
    e.default = b;
}, function(t, e, r) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var i = r(7);
    var n = g(i);
    var o = r(4);
    var a = g(o);
    var s = r(5);
    var u = g(s);
    var f = r(3);
    var h = g(f);
    var c = r(20);
    var l = g(c);
    var d = r(82);
    var p = g(d);
    var y = r(1);
    var m = g(y);
    function g(t) {
        return t && t.__esModule ? t : {
            default: t
        };
    }
    function v(t, e) {
        if (!(t instanceof e)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    function w(t, e) {
        if (!t) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return e && (typeof e === "object" || typeof e === "function") ? e : t;
    }
    function _(t, e) {
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
    var b = function(t) {
        _(e, t);
        function e(r, i) {
            v(this, e);
            var o = w(this, t.call(this, r, i));
            o.plane = new n.default();
            o.program = new a.default(r, [ l.default, p.default ]);
            o.posVertexBuffer = new u.default(r);
            o.posIndexBuffer = new h.default(r);
            o.texVertexBuffer = new u.default(r);
            o.posIndexBuffer.setData(o.plane.indexArr);
            o.posVertexBuffer.setData(o.plane.vertexArr, r.FLOAT, 2);
            o.texVertexBuffer.setData(o.plane.texCoordArr, r.FLOAT, 2);
            return o;
        }
        e.prototype.bind = function e() {
            t.prototype.bind.call(this);
            this.program.bind();
            this.posIndexBuffer.bind();
            this.posVertexBuffer.bind(this.program, "a_position");
            this.texVertexBuffer.bind(this.program, "a_texcoord");
        };
        e.prototype.draw = function t() {
            this.gl.drawElements(this.gl.TRIANGLE_STRIP, this.posIndexBuffer.getBufferLength(), this.gl.UNSIGNED_SHORT, 0);
        };
        return e;
    }(m.default);
    e.default = b;
}, function(t, e, r) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var i = r(53);
    var n = R(i);
    var o = r(63);
    var a = R(o);
    var s = r(64);
    var u = R(s);
    var f = r(60);
    var h = R(f);
    var c = r(1);
    var l = R(c);
    var d = r(61);
    var p = R(d);
    var y = r(59);
    var m = R(y);
    var g = r(62);
    var v = R(g);
    var w = r(55);
    var _ = R(w);
    var b = r(56);
    var x = R(b);
    var E = r(6);
    var T = R(E);
    var O = r(2);
    var S = R(O);
    var A = r(14);
    var M = R(A);
    function R(t) {
        return t && t.__esModule ? t : {
            default: t
        };
    }
    function P(t, e) {
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
    function F(t, e) {
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
    var B = 0;
    var C = function t(e) {
        return e.getContext("webgl", {
            alpha: false
        }) || e.getContext("experimental-webgl", {
            alpha: false
        }) || e.getContext("webkit-3d", {
            alpha: false
        }) || e.getContext("moz-webgl", {
            alpha: false
        });
    };
    var D = 1e3;
    var I = new x.default();
    var k = function t(e, r, i, n, o, a) {
        var s = T.default.makeZToWMatrix(1);
        var u = T.default.ortho(0, o, 0, a, -D, D);
        var f = T.default.makeScale(i, n, 1);
        var h = T.default.makeTranslation(e, r, 0);
        var c = T.default.matrixMultiply(f, h);
        c = T.default.matrixMultiply(c, I.getCurrentMatrix());
        c = T.default.matrixMultiply(c, u);
        c = T.default.matrixMultiply(c, s);
        return c;
    };
    var G = function t(e, r, i, n, o, a) {
        var s = T.default.makeScale(i / o, n / a, 1);
        var u = T.default.makeTranslation(e / o, r / a, 0);
        return T.default.matrixMultiply(s, u);
    };
    var L = function(t) {
        F(e, t);
        function e(r) {
            P(this, e);
            var i = j(this, t.call(this, r));
            var n = document.createElement("canvas");
            document.body.appendChild(n);
            n.setAttribute("width", r.width);
            n.setAttribute("height", r.height);
            i.container = n;
            i.matrixStack = I;
            i.registerResize();
            i.currTex = null;
            i._init();
            return i;
        }
        e.prototype._init = function t() {
            var e = C(this.container);
            this.gl = e;
            this.circleDrawer = new m.default(e);
            this.spriteRectDrawer = new a.default(e);
            this.tiledSpriteRectDrawer = new u.default(e);
            this.colorRectDrawer = new h.default(e);
            this.lineDrawer = new p.default(e);
            this.modelDrawer = new v.default(e);
            this.frameBuffer = new _.default(e, this.game.width, this.game.height);
            e.blendFunc(e.SRC_ALPHA, e.ONE_MINUS_SRC_ALPHA);
            e.enable(e.BLEND);
        };
        e.prototype.draw = function t(e) {
            if (B) return;
            if (!S.default.overlapTest(this.game.camera.getRectScaled(), e.getRect())) return;
            this.save();
            var r = e.width / 2;
            var i = e.height / 2;
            this.translate(e.pos.x + r, e.pos.y + i);
            this.scale(e.scale.x, e.scale.y);
            this.rotateZ(e.angle);
            this.translate(-r, -i);
            this.drawImage(e.spriteSheet.resourcePath, e._sprPosX, e._sprPosY, e.width, e.height, 0, 0, e.width, e.height);
            this.restore();
        };
        e.prototype.drawImage = function t(e, r, i, n, o, a, s) {
            if (B) return;
            this.gl.blendFunc(this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA);
            var u = this.renderableCache[e];
            if (1 && !u) {
                if (!e) throw "no texture path provided"; else throw "can not find texture with path " + e;
            }
            var f = u.getSize().width;
            var h = u.getSize().height;
            if (this.currTex !== u) {
                u.bind();
                this.currTex = u;
            }
            this.spriteRectDrawer.bind();
            this.spriteRectDrawer.setUniform("u_textureMatrix", G(r, i, n, o, f, h));
            this.spriteRectDrawer.setUniform("u_PositionMatrix", k(a, s, n, o, this.game.width, this.game.height));
            this.spriteRectDrawer.setUniform("u_alpha", 1);
            this.spriteRectDrawer.draw();
        };
        e.prototype.drawTiledImage = function t(e, r, i, n, o, a, s, u, f, h, c) {
            this.gl.blendFunc(this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA);
            var l = this.renderableCache[e];
            if (1 && !l) {
                if (!e) throw "no texture path provided"; else throw "can not find texture with path " + e;
            }
            var d = l.getSize().width;
            var p = l.getSize().height;
            if (this.currTex !== l) {
                l.bind();
                this.currTex = l;
            }
            this.tiledSpriteRectDrawer.bind();
            this.tiledSpriteRectDrawer.setUniform("u_textureMatrix", G(0, 0, u, f, d, p));
            this.tiledSpriteRectDrawer.setUniform("u_PositionMatrix", k(a, s, u, f, this.game.width, this.game.height));
            this.tiledSpriteRectDrawer.setUniform("u_frameCoords", [ r / d, i / p, n / d, o / p ]);
            this.tiledSpriteRectDrawer.setUniform("u_offsetCoords", [ h / n, c / o ]);
            this.tiledSpriteRectDrawer.setUniform("u_alpha", 1);
            this.tiledSpriteRectDrawer.draw();
        };
        e.prototype.fillRect = function t(e, r, i, n, o) {
            if (B) return;
            if (!S.default.overlapTest(this.game.camera.getRectScaled(), {
                x: e,
                y: r,
                width: i,
                height: n
            })) return;
            var a = this.colorRectDrawer;
            var s = this.gl;
            a.bind();
            a.setUniform("u_PositionMatrix", k(e, r, i, n, this.game.width, this.game.height));
            a.setUniform("u_rgba", o);
            s.blendFunc(s.SRC_ALPHA, s.ONE_MINUS_SRC_ALPHA);
            a.draw();
        };
        e.prototype.drawRect = function t(e, r, i, n, o) {
            this.fillRect(e, r, i, 1, o);
            this.fillRect(e, r + n, i, 1, o);
            this.fillRect(e, r, 1, n, o);
            this.fillRect(e + i, r, 1, n, o);
        };
        e.prototype.drawLine = function t(e, r, i, n, o) {
            if (B) return;
            var a = i - e, s = n - r;
            if (!S.default.overlapTest(this.game.camera.getRectScaled(), {
                x: e,
                y: r,
                width: a,
                height: s
            })) return;
            var u = this.gl;
            var f = this.lineDrawer;
            f.bind();
            f.setUniform("u_PositionMatrix", k(e, r, a, s, this.game.width, this.game.height));
            f.setUniform("u_rgba", o);
            u.blendFunc(u.SRC_ALPHA, u.ONE_MINUS_SRC_ALPHA);
            f.draw();
        };
        e.prototype.fillCircle = function t(e, r, i, n) {
            var o = i * 2;
            if (!S.default.overlapTest(this.game.camera.getRectScaled(), {
                x: e - i,
                y: r - i,
                width: o,
                height: o
            })) return;
            var a = this.circleDrawer;
            var s = this.gl;
            a.bind();
            a.setUniform("u_PositionMatrix", k(e - i, r - i, o, o, this.game.width, this.game.height));
            a.setUniform("u_rgba", n);
            s.blendFunc(s.SRC_ALPHA, s.ONE_MINUS_SRC_ALPHA);
            a.draw();
        };
        e.prototype.setAlpha = function t(e) {
            throw "not implemented";
        };
        e.prototype.save = function t() {
            this.matrixStack.save();
        };
        e.prototype.scale = function t(e, r) {
            this.matrixStack.scale(e, r);
        };
        e.prototype.rotateZ = function t(e) {
            this.matrixStack.rotateZ(e);
        };
        e.prototype.rotateY = function t(e) {
            this.matrixStack.rotateY(e);
        };
        e.prototype.translate = function t(e, r) {
            this.matrixStack.translate(e, r);
        };
        e.prototype.restore = function t() {
            this.matrixStack.restore();
        };
        e.prototype.lockRect = function t(e) {};
        e.prototype.unlockRect = function t() {};
        e.prototype.clear = function t() {
            this.gl.clearColor(1, 1, 1, 1);
            this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
        };
        e.prototype.clearColor = function t(e) {
            var r = e.r, i = e.g, n = e.b;
            this.gl.clearColor(r / 255, i / 255, n / 255, 1);
            this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
        };
        e.prototype.beginFrameBuffer = function t() {
            this.save();
            this.frameBuffer.bind();
        };
        e.prototype.flipFrameBuffer = function t() {
            var e = this.fullScreenSize;
            this.currTex = null;
            this.restore();
            this.save();
            this.translate(0, e.h);
            this.scale(1, -1);
            this.frameBuffer.unbind();
            this.gl.viewport(0, 0, e.w, e.h);
            this.spriteRectDrawer.bind();
            this.frameBuffer.getTexture().bind();
            this.spriteRectDrawer.setUniform("u_PositionMatrix", k(0, 0, this.game.width * e.scaleFactor, this.game.height * e.scaleFactor, e.w, e.h));
            this.spriteRectDrawer.setUniform("u_textureMatrix", G(0, 0, e.w, e.h, e.w, e.h));
            this.spriteRectDrawer.setUniform("u_alpha", 1);
            this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA);
            this.spriteRectDrawer.draw();
            this.restore();
        };
        e.prototype.getError = function t() {
            if (false) return 0;
            var e = this.gl.getError();
            e = e === this.gl.NO_ERROR ? 0 : e;
            if (e) {
                console.log(l.default.currentDrawer);
            }
            return e;
        };
        e.prototype.loadTextureInfo = function t(e, r) {
            var i = this;
            var n = new Image();
            n.src = e;
            n.onload = function() {
                var t = new M.default(i.gl);
                t.setImage(n);
                i.renderableCache[e] = t;
                r();
            };
        };
        return e;
    }(n.default);
    e.default = L;
}, function(t, e, r) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var i = r(67);
    var n = o(i);
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
            var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
            if (1 && !r) throw "repository.getObject: type not specified";
            if (1 && e == null) {
                console.trace("id is null");
                throw "::getObject() id not specified for type " + r;
            }
            var o = n[r];
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
            if (i || !this.cache[a[e]]) this.cache[e] = new o(this._game).fromJSON(a);
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
        t.prototype.updateObject = function t(e, r) {
            var i = e.toJSON(r);
            var n = this.descriptions[e.type].findIndex(function(t) {
                return t.id == e.id;
            });
            this.descriptions[e.type][n] = i;
            var o = this.getObject(e.id, e.type, true);
            if (o) o.fromJSON(i);
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
            if (1 && !n[e]) throw 'getArray: unregistered type "' + e + '"';
            if (this.arrays[e]) return this.arrays[e];
            var i = [];
            if (!this.descriptions[e]) this.descriptions[e] = [];
            this.descriptions[e].forEach(function(t) {
                if (1 && (t.id === null || t.id === undefined)) {
                    console.error(t);
                    throw "object id must me specified";
                }
                i.push(r.getObject(t.id, e));
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
}, function(t, e, r) {
    "use strict";
    e.__esModule = true;
    e.TileMap = e.TextField = e.Layer = e.Font = e.Sound = e.Scene = e.ParticleSystem = e.CommonBehaviour = e.GameObject = e.GameObjectProto = e.SpriteSheet = e.FrameAnimation = undefined;
    var i = r(70);
    var n = A(i);
    var o = r(76);
    var a = A(o);
    var s = r(17);
    var u = A(s);
    var f = r(71);
    var h = A(f);
    var c = r(68);
    var l = A(c);
    var d = r(73);
    var p = A(d);
    var y = r(74);
    var m = A(y);
    var g = r(75);
    var v = A(g);
    var w = r(69);
    var _ = A(w);
    var b = r(72);
    var x = A(b);
    var E = r(19);
    var T = A(E);
    var O = r(18);
    var S = A(O);
    function A(t) {
        return t && t.__esModule ? t : {
            default: t
        };
    }
    e.FrameAnimation = n.default;
    e.SpriteSheet = a.default;
    e.GameObjectProto = u.default;
    e.GameObject = h.default;
    e.CommonBehaviour = l.default;
    e.ParticleSystem = p.default;
    e.Scene = m.default;
    e.Sound = v.default;
    e.Font = _.default;
    e.Layer = x.default;
    e.TextField = T.default;
    e.TileMap = S.default;
}, function(t, e, r) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var i = r(0);
    var n = o(i);
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
        function e(r) {
            a(this, e);
            var i = s(this, t.call(this, r));
            i.type = "CommonBehaviour";
            i.parameters = [];
            i.description = null;
            return i;
        }
        return e;
    }(n.default);
    e.default = f;
}, function(t, e, r) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var i = r(0);
    var n = o(i);
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
        function e(r) {
            a(this, e);
            var i = s(this, t.call(this, r));
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
    }(n.default);
    e.default = f;
}, function(t, e, r) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var i = r(0);
    var n = o(i);
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
        function e(r) {
            a(this, e);
            var i = s(this, t.call(this, r));
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
            var r = (e - this._startTime) % this.duration;
            this._currFrame = ~~(this.frames.length * r / this.duration);
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
    }(n.default);
    e.default = f;
}, function(t, e, r) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var i = r(17);
    var n = u(i);
    var o = r(34);
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
    function f(t, e) {
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
        function e(r) {
            f(this, e);
            var i = h(this, t.call(this, r));
            i.type = "GameObject";
            i.gameObjectProto = null;
            return i;
        }
        e.prototype.revalidate = function e() {
            var r = this;
            var i = {};
            for (var n in this) {
                if (!this.hasOwnProperty(n)) continue;
                i[n] = this[n];
            }
            Object.keys(this.gameObjectProto).forEach(function(t) {
                if (r.gameObjectProto[t] === undefined) return;
                r[t] = r.gameObjectProto[t];
            });
            Object.keys(i).forEach(function(t) {
                if (!i[t]) return;
                if (i[t].splice && i[t].length === 0) return;
                r[t] = i[t];
            });
            t.prototype.revalidate.call(this);
        };
        e.prototype.setIndividualBehaviour = function t(e) {
            var r = new e(this.game);
            r.game = this.game;
            r.gameObject = this;
            if (!r.onCreate) r.onCreate = l;
            if (!r.onUpdate) r.onUpdate = l;
            if (!r.onDestroy) r.onDestroy = l;
            this._individualBehaviour = r;
        };
        e.prototype.setCommonBehaviour = function t() {
            var e = this;
            var r = [];
            this.commonBehaviour.forEach(function(t) {
                var i = a[t.name];
                if (true) {
                    if (!i) {
                        console.error(t);
                        console.error(a);
                        throw "can not find common behaviour with name " + t.name;
                    }
                }
                var n = new i(e.game);
                n.manage(e, t.parameters);
                r.push(n);
            });
            this.commonBehaviour = r;
        };
        return e;
    }(n.default);
    e.default = d;
}, function(t, e, r) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var i = r(0);
    var n = o(i);
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
        function e(r) {
            a(this, e);
            var i = s(this, t.call(this, r));
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
        e.prototype.update = function t(e, r) {
            var i = this.gameObjects;
            var n = i.length;
            var o = n - 1;
            while (n--) {
                var a = i[o - n];
                a && a.update(e, r);
            }
        };
        return e;
    }(n.default);
    e.default = f;
}, function(t, e, r) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var i = r(0);
    var n = u(i);
    var o = r(2);
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
    function f(t, e) {
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
        function e(r) {
            f(this, e);
            var i = h(this, t.call(this, r));
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
        e.prototype.emit = function t(e, r) {
            for (var i = 0; i < l(this.numOfParticlesToEmit); i++) {
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
                    from: r - this.emissionRadius,
                    to: r + this.emissionRadius
                });
                n.liveTime = l(this.particleLiveTime);
                this._particles.push(n);
            }
        };
        e.prototype.update = function t(e, r) {
            var i = this._particles;
            var n = i.length;
            var o = n - 1;
            while (n--) {
                var a = i[o - n];
                if (!a) continue;
                if (!a._timeCreated) a._timeCreated = e;
                if (e - a._timeCreated > a.liveTime) {
                    this._particles.splice(this._particles.indexOf(a), 1);
                }
                a.update(e, r);
            }
        };
        return e;
    }(n.default);
    e.default = d;
}, function(t, e, r) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var i = r(0);
    var n = f(i);
    var o = r(49);
    var a = f(o);
    var s = r(18);
    var u = f(s);
    function f(t) {
        return t && t.__esModule ? t : {
            default: t
        };
    }
    function h(t, e) {
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
        function e(r) {
            h(this, e);
            var i = c(this, t.call(this, r));
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
            i.tileMap = new u.default(r);
            return i;
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
            var r = this;
            var i = this.getAllSpriteSheets().concat(this.game.repository.getArray("Font"));
            var n = new a.default();
            n.onResolved = function() {
                e && e();
            };
            i.forEach(function(t) {
                n.addTask(function() {
                    r.game.renderer.loadTextureInfo(t.resourcePath, function() {
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
            var r = new e(this.game);
            r.game = this.game;
            r.scene = this;
            this._individualBehaviour = r;
        };
        e.prototype.update = function t(e, r) {
            if (true) {
                if (this.game.renderer.debugTextField) this.game.renderer.debugTextField.setText("");
            }
            var i = this.game.renderer;
            i.beginFrameBuffer();
            if (this.useBG) i.clearColor(this.colorBG); else i.clear();
            var n = this.layers;
            var o = this.layers.length;
            var a = o - 1;
            this.game.camera.update(e, r);
            if (this._individualBehaviour) this._individualBehaviour.onUpdate();
            while (o--) {
                n[o - a].update(e, r);
            }
            this.game.repository.getArray("ParticleSystem").forEach(function(t) {
                t.update(e, r);
            });
            this.tileMap.update();
            if (true) {
                this.game.renderer.restore();
                if (this.game.renderer.debugTextField) this.game.renderer.debugTextField.update();
                this.game.renderer.restore();
            }
            i.flipFrameBuffer();
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
        e.prototype.tween = function t(e, r, i, n) {};
        e.prototype.printText = function t(e, r, i, n) {
            if (!i) return;
            if (!i.substring) i = JSON.stringify(i, null, 4);
            this.game.renderer.printText(e, r, i, n);
        };
        e.prototype.log = function t(e) {
            this.printText(0, 0, e);
        };
        return e;
    }(n.default);
    e.default = d;
}, function(t, e, r) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var i = r(0);
    var n = o(i);
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
        function e(r) {
            a(this, e);
            var i = s(this, t.call(this, r));
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
        e.prototype.setGain = function t(e, r, i) {};
        return e;
    }(n.default);
    e.default = f;
}, function(t, e, r) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var i = r(0);
    var n = o(i);
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
        function e(r) {
            a(this, e);
            var i = s(this, t.call(this, r));
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
    }(n.default);
    e.default = f;
}, function(t, e, r) {
    "use strict";
    var i = r(23);
    var n = f(i);
    var o = r(24);
    var a = f(o);
    var s = r(25);
    var u = f(s);
    function f(t) {
        return t && t.__esModule ? t : {
            default: t
        };
    }
    if (1 && a.default.startSceneId === undefined) throw "start scene not specified";
    var h = new n.default(a.default);
    h.repository.setDescriptions(u.default);
    var c = h.repository.getObject(a.default.startSceneId, "Scene");
    h.runScene(c);
    if (true) window.game = h;
}, function(t, e, r) {
    "use strict";
    var i = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(t) {
        return typeof t;
    } : function(t) {
        return t && typeof Symbol === "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
    };
    var n;
    n = function() {
        return this;
    }();
    try {
        n = n || Function("return this")() || (1, eval)("this");
    } catch (t) {
        if ((typeof window === "undefined" ? "undefined" : i(window)) === "object") n = window;
    }
    t.exports = n;
}, function(t, e) {
    t.exports = "//position, texture and normal\n\nattribute vec4 a_position;\nattribute vec2 a_texcoord;\nattribute vec3 a_normal;\n\nuniform mat4 u_modelMatrix;\nuniform mat4 u_projectionMatrix;\n\nvarying vec2 v_texcoord;\nvarying vec3 v_normal;\n\nvoid main() {\n\n  gl_Position = u_projectionMatrix * u_modelMatrix * a_position;\n  v_texcoord = a_texcoord;\n  v_normal = a_normal;\n}";
}, function(t, e) {
    t.exports = "// texture and color\n\nprecision mediump float;\n\nvarying vec2 v_texcoord;\n\nuniform sampler2D texture;\nuniform float u_alpha;\n\n\nvoid main() {\n    gl_FragColor = texture2D(texture, v_texcoord);\n    gl_FragColor.a *= u_alpha;\n}";
}, function(t, e) {
    t.exports = "// texture color and normal\n\nprecision highp float;\n\nvarying vec2 v_texcoord;\nvarying vec3 v_normal;\n\nuniform sampler2D texture;\nuniform float u_alpha;\nuniform mat4 u_modelMatrix;\n\n\nvoid main() {\n\n    vec3 lightDirection = normalize(vec3(-1,-1,1));\n    vec3 normalized = normalize((u_modelMatrix * vec4(v_normal,0)).xyz);\n    float lightFactor = max(0.5,dot(lightDirection,normalized));\n    gl_FragColor = texture2D(texture, v_texcoord);\n    gl_FragColor.rgb *= lightFactor;\n    gl_FragColor.a *= u_alpha;\n}";
}, function(t, e) {
    t.exports = "// texture and color\r\n\r\nprecision mediump float;\r\n\r\nvarying vec2 v_texcoord;\r\n\r\nuniform sampler2D texture;\r\nuniform float u_alpha;\r\nuniform vec2 u_offsetCoords;\r\nuniform vec4 u_frameCoords;\r\n\r\nvoid main() {\r\n    vec2 localTextCoord = mod(\r\n        v_texcoord + fract(u_offsetCoords),\r\n        u_frameCoords.zw\r\n    ) + u_frameCoords.xy;\r\n    gl_FragColor = texture2D(texture, localTextCoord);\r\n    gl_FragColor.a *= u_alpha;\r\n\r\n}";
} ]);