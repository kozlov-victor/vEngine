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
    return r(r.s = 56);
})([ function(t, e, r) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var n, i;
    var o = r(12);
    var a = d(o);
    var s = r(39);
    var u = d(s);
    var f = r(23);
    var c = d(f);
    var l = r(8);
    var h = r(26);
    var p = d(h);
    function d(t) {
        return t && t.__esModule ? t : {
            default: t
        };
    }
    function m(t, e) {
        if (!(t instanceof e)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    function v(t, e) {
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
    var g = (n = (0, l.Transient)({
        game: true,
        rigidBody: true
    }), n(i = function(t) {
        y(e, t);
        function e(r) {
            m(this, e);
            var n = v(this, t.call(this));
            n.id = null;
            n.name = null;
            n.width = 0;
            n.height = 0;
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
            n.fixedToCamera = false;
            n.rigid = false;
            n._tweens = [];
            if (1 && !r) throw "can not create model '" + n.type + "': game instance not passed to model constructor";
            n.game = r;
            n._emitter = new c.default();
            n.rigidBody = new p.default(n);
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
        e.prototype.clone = function t(e) {
            var r = this.constructor;
            var n = new r(this.game);
            n._cloner = this;
            return n.fromJSON(this.toJSON(e), true);
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
    }(a.default)) || i);
    e.default = g;
}, function(t, e, r) {
    "use strict";
    e.isPointInRect = function(t, e, r) {
        return t.x > e.x && t.x < e.x + e.width && t.y > e.y && t.y < e.y + e.height;
    };
    e.isRectIntersectRect = function(t, e) {
        return !(e.x > t.x + t.width || e.x + e.width < t.x || e.y > t.y + t.height || e.y + e.height < t.y);
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
    function n(t, e) {
        if (!(t instanceof e)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    var i = function t(e, r, n) {
        if (!r) throw "can not compile shader: shader source not specified for type " + n;
        var i = e.createShader(n);
        e.shaderSource(i, r);
        e.compileShader(i);
        var o = e.getShaderParameter(i, e.COMPILE_STATUS);
        if (!o) {
            var a = e.getShaderInfoLog(i);
            e.deleteShader(i);
            throw "Error compiling shader " + i + ":" + a;
        }
        return i;
    };
    var o = function t(e, r) {
        var n = e.createProgram();
        r.forEach(function(t) {
            e.attachShader(n, t);
        });
        e.linkProgram(n);
        var i = e.getProgramParameter(n, e.LINK_STATUS);
        if (!i) {
            var o = e.getProgramInfoLog(n);
            e.deleteProgram(n);
            throw "Error in program linking:" + o;
        }
        return n;
    };
    var a = function t(e, r) {
        var n = null;
        var i = {
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
        if (!n) {
            var o = Object.keys(i);
            n = {};
            for (var a = 0; a < o.length; ++a) {
                var s = o[a];
                n[e[s]] = i[s];
            }
        }
        return n[r];
    };
    var s = function t(e, r) {
        var n = {};
        var i = e.getProgramParameter(r, e.ACTIVE_UNIFORMS);
        for (var o = 0; o < i; o++) {
            var s = e.getActiveUniform(r, o);
            var f = s.name.replace(/\[.*?]/, "");
            var c = a(e, s.type);
            n[f] = {
                type: c,
                size: s.size,
                name: f,
                location: e.getUniformLocation(r, f),
                setter: u(s.size, c)
            };
        }
        return n;
    };
    var u = function t(e, r) {
        if (e == 1) {
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
    var f = function() {
        function t(e, r) {
            n(this, t);
            var a = i(e, r[0], e.VERTEX_SHADER);
            var u = i(e, r[1], e.FRAGMENT_SHADER);
            this.program = o(e, [ a, u ]);
            this.uniforms = s(e, this.program);
            this.gl = e;
        }
        t.prototype.getProgram = function t() {
            return this.program;
        };
        t.prototype.bind = function e() {
            this.gl.useProgram(this.program);
            t.currentProgram = this;
        };
        t.prototype.setUniform = function t(e, r) {
            var n = this.uniforms[e];
            if (!n) throw "no uniform with name " + e + " found!";
            n.setter(this.gl, n.location, r);
        };
        t.prototype.bindBuffer = function t(e, r) {
            this.gl.bindBuffer(this.gl.ARRAY_BUFFER, e.getGlBuffer());
            var n = this.gl.getAttribLocation(this.program, r);
            if (!r) throw "can not found uniform location: uniformLocationName not defined";
            if (n < 0) throw "can not found uniform location for " + r;
            this.gl.enableVertexAttribArray(n);
            this.gl.vertexAttribPointer(n, e.getItemSize(), e.getItemType(), false, 0, 0);
            this.gl.bindBuffer(this.gl.ARRAY_BUFFER, null);
        };
        return t;
    }();
    e.default = f;
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
            if (1 && !e) throw "can not create VertexBuffer, gl context not passed to constructor, expected: VertexBuffer(gl)";
            this.gl = e;
            this.buffer = e.createBuffer();
            this.bufferItemSize = null;
            this.bufferItemType = null;
            this.dataLength = null;
        }
        t.prototype.setData = function t(e, r, n) {
            if (true) {
                if (!e) throw "can not set data to buffer: bufferData not specified";
                if (!r) throw "can not set data to buffer: itemType not specified";
                if (!n) throw "can not set data to buffer: itemSize not specified";
            }
            var i = this.gl;
            i.bindBuffer(i.ARRAY_BUFFER, this.buffer);
            i.bufferData(i.ARRAY_BUFFER, new Float32Array(e), i.STATIC_DRAW);
            i.bindBuffer(i.ARRAY_BUFFER, null);
            this.bufferItemSize = n;
            this.bufferItemType = r;
            this.dataLength = e.length;
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
    e.default = i;
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
    e.default = i;
}, function(t, e) {
    t.exports = "attribute vec4 a_position;\nattribute vec4 a_color;\nattribute vec2 a_texcoord;\n\nuniform mat4 u_matrix;\nuniform mat4 u_textureMatrix;\n\nvarying vec2 v_texcoord;\nvarying vec4 v_color;\n\nvoid main() {\n   gl_Position = u_matrix * a_position;\n   v_texcoord = (u_textureMatrix * vec4(a_texcoord, 0, 1)).xy;\n   v_color = a_color;\n   //gl_PointSize = 10.0;\n}";
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
        }
        t.prototype.manage = function t() {
            console.error(this);
            if (true) throw "method manage not implemented";
        };
        t.prototype.onUpdate = function t() {};
        return t;
    }();
    e.default = i;
}, function(t, e, r) {
    "use strict";
    e.__esModule = true;
    var n, i;
    function o(t, e) {
        if (!(t instanceof e)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    var a = 1;
    var s = 2;
    var u = 0;
    var f = -1;
    var c = (i = n = function() {
        function t(e) {
            o(this, t);
            this.buffer = {};
            this.game = e;
        }
        t.prototype.emulatePress = function t(e) {
            this.buffer[e] = a;
        };
        t.prototype.emulateRelease = function t(e) {
            this.buffer[e] = f;
        };
        t.prototype.isPressed = function t(e) {
            return this.buffer[e] > u;
        };
        t.prototype.isJustPressed = function t(e) {
            return this.buffer[e] === s;
        };
        t.prototype.isReleased = function t(e) {
            return this.buffer[e] <= u || !this.buffer[e];
        };
        t.prototype.isJustReleased = function t(e) {
            return this.buffer[e] === f;
        };
        t.prototype.update = function e() {
            var r = this;
            if (1 && window.canceled) return;
            [ t.KEY.UP, t.KEY.DOWN, t.KEY.LEFT, t.KEY.RIGHT ].forEach(function(t) {
                if (r.buffer[t] === s) r.buffer[t] = a; else if (r.buffer[t] === f) r.buffer[t] = u;
            });
        };
        t.prototype.listenTo = function t() {
            var e = this;
            window.addEventListener("keydown", function(t) {
                var r = t.keyCode;
                e.buffer[r] = a;
            });
            window.addEventListener("keyup", function(t) {
                var r = t.keyCode;
                e.buffer[r] = f;
            });
        };
        return t;
    }(), n.KEY = {
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
    }, i);
    e.default = c;
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
    e.makeIdentity = function() {
        return [ 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1 ];
    };
    e.makeZToWMatrix = function(t) {
        return [ 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, t, 0, 0, 0, 1 ];
    };
    e.make2DProjection = function(t, e, r) {
        return [ 2 / t, 0, 0, 0, 0, -2 / e, 0, 0, 0, 0, 2 / r, 0, -1, 1, 0, 1 ];
    };
    e.ortho = function(t, e, r, n, i, o) {
        var a = 1 / (t - e), s = 1 / (r - n), u = 1 / (i - o);
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
        f[13] = (n + r) * s;
        f[14] = (o + i) * u;
        f[15] = 1;
        return f;
    };
    e.perspective = function(t, e, r, n) {
        var i = 1 / Math.tan(t / 2), o = 1 / (r - n);
        var a = [];
        a[0] = i / e;
        a[1] = 0;
        a[2] = 0;
        a[3] = 0;
        a[4] = 0;
        a[5] = i;
        a[6] = 0;
        a[7] = 0;
        a[8] = 0;
        a[9] = 0;
        a[10] = (n + r) * o;
        a[11] = -1;
        a[12] = 0;
        a[13] = 0;
        a[14] = 2 * n * r * o;
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
        var r = t[0 * 4 + 0];
        var n = t[0 * 4 + 1];
        var i = t[0 * 4 + 2];
        var o = t[0 * 4 + 3];
        var a = t[1 * 4 + 0];
        var s = t[1 * 4 + 1];
        var u = t[1 * 4 + 2];
        var f = t[1 * 4 + 3];
        var c = t[2 * 4 + 0];
        var l = t[2 * 4 + 1];
        var h = t[2 * 4 + 2];
        var p = t[2 * 4 + 3];
        var d = t[3 * 4 + 0];
        var m = t[3 * 4 + 1];
        var v = t[3 * 4 + 2];
        var y = t[3 * 4 + 3];
        var g = e[0 * 4 + 0];
        var _ = e[0 * 4 + 1];
        var b = e[0 * 4 + 2];
        var w = e[0 * 4 + 3];
        var x = e[1 * 4 + 0];
        var E = e[1 * 4 + 1];
        var T = e[1 * 4 + 2];
        var O = e[1 * 4 + 3];
        var R = e[2 * 4 + 0];
        var j = e[2 * 4 + 1];
        var F = e[2 * 4 + 2];
        var M = e[2 * 4 + 3];
        var S = e[3 * 4 + 0];
        var A = e[3 * 4 + 1];
        var B = e[3 * 4 + 2];
        var P = e[3 * 4 + 3];
        return [ r * g + n * x + i * R + o * S, r * _ + n * E + i * j + o * A, r * b + n * T + i * F + o * B, r * w + n * O + i * M + o * P, a * g + s * x + u * R + f * S, a * _ + s * E + u * j + f * A, a * b + s * T + u * F + f * B, a * w + s * O + u * M + f * P, c * g + l * x + h * R + p * S, c * _ + l * E + h * j + p * A, c * b + l * T + h * F + p * B, c * w + l * O + h * M + p * P, d * g + m * x + v * R + y * S, d * _ + m * E + v * j + y * A, d * b + m * T + v * F + y * B, d * w + m * O + v * M + y * P ];
    };
}, function(t, e, r) {
    "use strict";
    e.__esModule = true;
    function n(t, e) {
        if (!(t instanceof e)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    var i = function t(e) {
        return (e & e - 1) == 0;
    };
    var o = function() {
        function t(e) {
            n(this, t);
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
        t.prototype.setImage = function t(e, r, n) {
            if (true) {
                if (!(e || r || n)) throw "texture.setImage: if image is null, width and height must be specified: tex.setImage(null,w,h)";
            }
            var o = this.gl;
            if (e) this.size = {
                width: e.width,
                height: e.height
            }; else this.size = {
                width: r,
                height: n
            };
            this.bind();
            o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL, true);
            if (e) {
                o.texImage2D(o.TEXTURE_2D, 0, o.RGBA, o.RGBA, o.UNSIGNED_BYTE, e);
            } else {
                o.texImage2D(o.TEXTURE_2D, 0, o.RGBA, r, n, 0, o.RGBA, o.UNSIGNED_BYTE, null);
            }
            this.isPowerOfTwo = e && i(e.width) && i(e.height);
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
    var n = r(32);
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
    }(i.default);
    e.default = f;
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
    var o = function t(e, r, n) {
        if (!e) return true;
        if (e.indexOf("_") == 0) return true;
        if (r && r.call) return true;
        if (typeof r === "string") return false;
        if (typeof r === "number") return false;
        if (typeof r === "boolean") return false;
        return r == null && !n.preserveNull;
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
            for (var f in e) {
                if (!e.hasOwnProperty(f)) continue;
                var c = void 0;
                if (r.indexOf(e[f]) > -1) {
                    c = e[f];
                } else {
                    r.push(e);
                    c = t(e[f], r);
                    r.push(e[f]);
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
            var r = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
                preserveNull: false
            };
            var i = {};
            for (var u in this) {
                if (o(u, this[u], r)) {
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
                        i[u] = r;
                    })();
                } else {
                    var f = s(this[u]);
                    if (f && f.splice && !f.length) continue; else if (f != null && (typeof f === "undefined" ? "undefined" : n(f)) === "object" && !Object.keys(f).length) continue;
                    i[u] = f;
                }
            }
            return i;
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
    var f = function(t) {
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
            n._currFrameAnimation = 0;
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
            this.rigidBody.update(r, n);
            this.game._renderer.draw(this);
            if (this._individualBehaviour) this._individualBehaviour.onUpdate(r, n);
            for (var i = 0, o = this.commonBehaviour.length; i < o; i++) {
                this.commonBehaviour[i].onUpdate(r, n);
            }
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
}, function(t, e) {
    t.exports = "precision mediump float;\n\nvarying vec2 v_texcoord;\n\nuniform sampler2D texture;\nuniform float u_alpha;\nuniform vec4 u_rgba;\n\nvoid main() {\n    gl_FragColor = u_rgba;\n}";
}, function(t, e, r) {
    "use strict";
    var n = r(24);
    var i = o(n);
    function o(t) {
        return t && t.__esModule ? t : {
            default: t
        };
    }
    var a = {
        width: 320,
        height: 240,
        scaleStrategy: 0,
        startSceneId: 2,
        scale: {
            x: 1,
            y: 1
        },
        pos: {
            x: 0,
            y: 0
        }
    };
    if (1 && a.startSceneId == null) throw "start scene not specified";
    var s = new i.default({
        width: 320,
        height: 240,
        scaleStrategy: 0,
        startSceneId: 2,
        scale: {
            x: 1,
            y: 1
        },
        pos: {
            x: 0,
            y: 0
        }
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
                id: 6
            } ]
        } ],
        SpriteSheet: [ {
            name: "mariosheet",
            width: 480,
            height: 32,
            type: "SpriteSheet",
            numOfFramesH: 15,
            resourcePath: "resources/mariosheet.png",
            id: 3
        } ],
        GameObjectProto: [ {
            id: 4,
            name: "mariosheet",
            width: 32,
            height: 32,
            type: "GameObjectProto",
            spriteSheet: {
                id: 3,
                type: "SpriteSheet"
            },
            frameAnimations: [ {
                type: "FrameAnimation",
                id: 5
            } ],
            startFrameAnimationName: "walk"
        } ],
        FrameAnimation: [ {
            id: 5,
            name: "walk",
            type: "FrameAnimation",
            frames: [ 10, 11, 12 ],
            duration: 500
        } ],
        GameObject: [ {
            pos: {
                x: 80,
                y: 89
            },
            layerId: 2,
            type: "GameObject",
            gameObjectProto: {
                id: 4,
                type: "GameObjectProto"
            },
            id: 6
        } ]
    });
    var u = s.repository.getObject(a.startSceneId, "Scene");
    s.runScene(u);
    if (true) window.repository = s.repository;
}, function(t, e, r) {
    "use strict";
    e.__esModule = true;
    e.Control4Dir = e.Draggable = undefined;
    var n = r(18);
    var i = s(n);
    var o = r(17);
    var a = s(o);
    function s(t) {
        return t && t.__esModule ? t : {
            default: t
        };
    }
    e.Draggable = i.default;
    e.Control4Dir = a.default;
}, function(t, e, r) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var n = r(19);
    var i = s(n);
    var o = r(7);
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
    var l = function(t) {
        c(e, t);
        function e(r) {
            u(this, e);
            return f(this, t.call(this, r));
        }
        e.prototype.manage = function e(r, n) {
            t.prototype.manage.call(this, r, n);
        };
        e.prototype.onUpdate = function t() {
            var e = this.game._keyboard;
            var r = this.parameters;
            var n = this.gameObject;
            if (e.isPressed(a.default.KEY.UP)) {
                n.rigidBody.vel.y = -r.velocity;
                this.go("Up");
            }
            if (e.isPressed(a.default.KEY.DOWN)) {
                n.rigidBody.vel.y = r.velocity;
                this.go("Down");
            }
            if (e.isPressed(a.default.KEY.LEFT)) {
                n.rigidBody.vel.x = -r.velocity;
                this.go("Left");
            }
            if (e.isPressed(a.default.KEY.RIGHT)) {
                n.rigidBody.vel.x = r.velocity;
                this.go("Right");
            }
            if (e.isJustReleased(a.default.KEY.LEFT)) {
                this.stop();
            } else if (e.isJustReleased(a.default.KEY.RIGHT)) {
                this.stop();
            } else if (e.isJustReleased(a.default.KEY.UP)) {
                this.stop();
            } else if (e.isJustReleased(a.default.KEY.DOWN)) {
                this.stop();
            }
        };
        return e;
    }(i.default);
    e.default = l;
}, function(t, e, r) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var n = r(6);
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
    var f = function(t) {
        u(e, t);
        e._getEventId = function t(e) {
            return e.id || 1;
        };
        function e(r) {
            a(this, e);
            var n = s(this, t.call(this));
            n.game = r;
            n.points = {};
            return n;
        }
        e.prototype.manage = function t(r, n) {
            var i = this;
            r.on("click", function(t) {
                i.points[e._getEventId(t)] = {
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
                var n = i.points[r];
                if (!n) return;
                n.dragStartX = n.target.pos.x;
                n.dragStartY = n.target.pos.y;
            });
            o.on("mouseMove", function(t) {
                var n = e._getEventId(t);
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
                r.pos.x = t.screenX - o.mX;
                r.pos.y = t.screenY - o.mY;
            });
            o.on("mouseUp", function(t) {
                var n = e._getEventId(t);
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
        return e;
    }(i.default);
    e.default = f;
}, function(t, e, r) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var n = r(6);
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
    var f = function(t) {
        u(e, t);
        function e(r) {
            a(this, e);
            var n = s(this, t.call(this));
            n.gameObject = null;
            n.lastDirection = null;
            n.game = r;
            return n;
        }
        e.prototype.manage = function t(e, r) {
            var n = this;
            this.gameObject = e;
            this.parameters = r;
            this.animations = {};
            var i = [ "Left", "Right", "Up", "Down" ];
            i.forEach(function(t) {
                var e = "walk" + t + "Animation", i = "idle" + t + "Animation";
                n.animations[e] = n.gameObject.frameAnimations.find(function(t) {
                    return t.name === r[e];
                });
                if (!n.animations[e]) throw "can not find animation " + r[e] + " at gameObject " + n.gameObject.name;
                r[i] && (n.animations[i] = n.gameObject.frameAnimations.find(function(t) {
                    return t.name === r[i];
                }));
            });
        };
        e.prototype.stop = function t() {
            this.gameObject.stopFrAnimations();
            this.gameObject.rigidBody.vel.x = 0;
            this.gameObject.rigidBody.vel.y = 0;
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
                this.sceneWidth = this.game.width;
                this.sceneHeight = this.game.height;
            }
        };
        t.prototype.update = function t() {
            if (!this.objFollowTo) return;
            var e = this.pos;
            var r = 55;
            var n = 55;
            var i = this.game.width;
            var o = this.game.height;
            var a = i / 2;
            var s = o / 2;
            e.x = this.objFollowTo.pos.x - a;
            e.y = this.objFollowTo.pos.y - s;
            if (e.x < 0) e.x = 0;
            if (e.y < 0) e.y = 0;
            if (e.x > this.sceneWidth - i + r) e.x = this.sceneWidth - i + r;
            if (e.y > this.sceneHeight - o + n) e.y = this.sceneHeight - o + n;
        };
        return t;
    }();
    e.default = i;
}, function(t, e, r) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var n = r(1);
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
        t.prototype.manage = function t(e, r, i) {
            if (e.pos.x === r && e.pos.y === i) return;
            if (!e.rigid) {
                e.pos.x = r;
                e.pos.y = i;
                return;
            } else {}
            var o = false;
            var a = this.game.getCurrScene().getAllGameObjects();
            for (var s = 0, u = a.length; s < u; s++) {
                var f = a[s];
                if (e === f) continue;
                var c = e.getRect();
                c.x = r;
                c.y = i;
                if ((0, n.isRectIntersectRect)(c, f.getRect())) {
                    if (e.rigid && f.rigid) {
                        o = true;
                        e.trigger("collide", f);
                    } else {
                        e.trigger("overlap", f);
                    }
                }
            }
            if (!o) {
                e.pos.x = r;
                e.pos.y = i;
            }
            return o;
        };
        return t;
    }();
    e.default = o;
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
        function t(e) {
            a(this, t);
            this.objectsCaptured = {};
            this.game = e;
        }
        t.prototype.listenTo = function t(e) {
            var r = this;
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
                    r.resolveMouseMove(t.touches[e]);
                }
            };
            e.onmousemove = function(t) {
                r.resolveMouseMove(t);
            };
            e.ondblclick = function(t) {
                r.resolveDoubleClick(t);
            };
        };
        t.prototype.resolveScreenPoint = function t(e) {
            return {
                x: ~~((e.clientX - this.game.pos.x) / this.game.scale.x) + this.game.camera.pos.x,
                y: ~~((e.clientY - this.game.pos.y) / this.game.scale.y) + this.game.camera.pos.y,
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
                for (var f = 0; f < u.gameObjects.length; f++) {
                    var c = u.gameObjects[f];
                    if (i.default.isPointInRect(a, c.getRect())) {
                        c.trigger(r, {
                            screenX: a.x,
                            screenY: a.y,
                            objectX: a.x - c.pos.x,
                            objectY: a.y - c.pos.y,
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
    e.default = s;
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
    r(27);
    var o = r(29);
    var a = b(o);
    var s = r(38);
    var u = b(s);
    var f = r(22);
    var c = b(f);
    var l = r(7);
    var h = b(l);
    var p = r(21);
    var d = b(p);
    var m = r(8);
    var v = r(12);
    var y = b(v);
    var g = r(20);
    var _ = b(g);
    function b(t) {
        return t && t.__esModule ? t : {
            default: t
        };
    }
    function w(t, e) {
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
    var T = (n = (0, m.Transient)({
        repository: true,
        camera: true
    }), n(i = function(t) {
        E(e, t);
        function e(r) {
            w(this, e);
            var n = x(this, t.call(this));
            n._lastTime = null;
            n._currTime = null;
            n._currentScene = null;
            n._running = false;
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
            var i = Date.now();
            n._lastTime = n._currTime = i;
            n._deltaTime = 0;
            n.repository = new u.default(n);
            n._mouse = new c.default(n);
            n._keyboard = new h.default(n);
            n._keyboard.listenTo();
            n._collider = new d.default(n);
            n.camera = new _.default(n);
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
                var o = r(52);
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
            r._keyboard.update();
        };
        return e;
    }(y.default)) || i);
    e.default = T;
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
    e.__esModule = true;
    e.default = undefined;
    var n = r(40);
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
        function t(e) {
            a(this, t);
            this.vel = new i.default();
            this.game = e.game;
            this.gameObject = e;
        }
        t.prototype.update = function t(e, r) {
            var n = this.vel.x * r / 1e3;
            var i = this.vel.y * r / 1e3;
            this.game._collider.manage(this, this.gameObject.pos.x + n, this.gameObject.pos.y + i);
        };
        return t;
    }();
    e.default = s;
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
            var n = arguments[1];
            var i = void 0;
            for (var o = 0; o < r; o++) {
                i = e[o];
                if (t.call(n, i, o, e)) {
                    return i;
                }
            }
            return undefined;
        };
    }
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
            this.renderableCache = {};
            this.container = null;
            this.game = e;
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
        t.prototype.beginFrameBuffer = function t() {};
        t.prototype.flipFrameBuffer = function t() {};
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
    var n = r(37);
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
    var n = r(10);
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
        function t(e, r, n) {
            a(this, t);
            if (1 && !e) throw "can not create FrameBuffer, gl context not passed to constructor, expected: FrameBuffer(gl)";
            this.gl = e;
            this.width = r;
            this.height = n;
            this.texture = new i.default(e);
            this.texture.setImage(null, r, n);
            this.glRenderBuffer = e.createRenderbuffer();
            e.bindRenderbuffer(e.RENDERBUFFER, this.glRenderBuffer);
            e.renderbufferStorage(e.RENDERBUFFER, e.DEPTH_COMPONENT16, r, n);
            this.glFrameBuffer = e.createFramebuffer();
            e.bindFramebuffer(e.FRAMEBUFFER, this.glFrameBuffer);
            e.framebufferTexture2D(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, this.texture.getGlTexture(), 0);
            e.framebufferRenderbuffer(e.FRAMEBUFFER, e.DEPTH_ATTACHMENT, e.RENDERBUFFER, this.glRenderBuffer);
            this.texture.unbind();
            e.bindRenderbuffer(e.RENDERBUFFER, null);
            e.bindFramebuffer(e.FRAMEBUFFER, null);
        }
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
    var n = r(9);
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
            this.stack = [];
            this.restore();
        }
        t.prototype.restore = function t() {
            this.stack.pop();
            if (this.stack.length < 1) {
                this.stack[0] = i.default.makeIdentity();
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
        t.prototype.translate = function t(e, r, n) {
            if (n === undefined) {
                n = 0;
            }
            var o = i.default.makeTranslation(e, r, n);
            var a = this.getCurrentMatrix();
            this.setCurrentMatrix(i.default.matrixMultiply(o, a));
        };
        t.prototype.rotateZ = function t(e) {
            var r = i.default.makeZRotation(e);
            var n = this.getCurrentMatrix();
            this.setCurrentMatrix(i.default.matrixMultiply(r, n));
        };
        t.prototype.rotateY = function t(e) {
            var r = i.default.makeYRotation(e);
            var n = this.getCurrentMatrix();
            this.setCurrentMatrix(i.default.matrixMultiply(r, n));
        };
        t.prototype.scale = function t(e, r, n) {
            if (n === undefined) {
                n = 1;
            }
            var o = i.default.makeScale(e, r, n);
            var a = this.getCurrentMatrix();
            this.setCurrentMatrix(i.default.matrixMultiply(o, a));
        };
        return t;
    }();
    e.default = s;
}, function(t, e, r) {
    "use strict";
    e.__esModule = true;
    function n(t, e) {
        if (!(t instanceof e)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    var i = function t() {
        n(this, t);
        this.vertexArr = null;
        this.normalArr = null;
        this.texCoordArr = null;
        this.indexArr = null;
    };
    e.default = i;
}, function(t, e, r) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var n = r(11);
    var i = m(n);
    var o = r(2);
    var a = m(o);
    var s = r(3);
    var u = m(s);
    var f = r(4);
    var c = m(f);
    var l = r(5);
    var h = m(l);
    var p = r(14);
    var d = m(p);
    function m(t) {
        return t && t.__esModule ? t : {
            default: t
        };
    }
    function v(t, e) {
        if (!(t instanceof e)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    var y = function() {
        function t(e, r) {
            v(this, t);
            this.gl = e;
            this.plane = new i.default();
            this.program = new a.default(e, [ h.default, d.default ]);
            this.posVertexBuffer = new u.default(e);
            this.posIndexBuffer = new c.default(e);
        }
        t.prototype.bind = function t() {
            this.program.bind();
            this.posVertexBuffer.setData(this.plane.vertexArr, this.gl.FLOAT, 2);
            this.program.bindBuffer(this.posVertexBuffer, "a_position");
            this.posIndexBuffer.setData(this.plane.indexArr);
            this.posIndexBuffer.bind();
        };
        t.prototype.unbind = function t() {
            this.posIndexBuffer.unbind();
        };
        t.prototype.setUniform = function t(e, r) {
            this.program.setUniform(e, r);
        };
        t.prototype.draw = function t() {
            this.gl.drawElements(this.gl.TRIANGLE_STRIP, this.posIndexBuffer.getBufferLength(), this.gl.UNSIGNED_SHORT, 0);
        };
        return t;
    }();
    e.default = y;
}, function(t, e, r) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var n = r(2);
    var i = p(n);
    var o = r(3);
    var a = p(o);
    var s = r(4);
    var u = p(s);
    var f = r(53);
    var c = p(f);
    var l = r(55);
    var h = p(l);
    function p(t) {
        return t && t.__esModule ? t : {
            default: t
        };
    }
    function d(t, e) {
        if (!(t instanceof e)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    var m = function() {
        function t(e, r) {
            d(this, t);
            this.gl = e;
            this.program = new i.default(e, [ c.default, h.default ]);
            this.posVertexBuffer = new a.default(e);
            this.texVertexBuffer = new a.default(e);
            this.normalBuffer = new a.default(e);
            this.posIndexBuffer = new u.default(e);
            this.program.bind();
        }
        t.prototype.bind = function t(e) {
            this.program.bind();
            var r = this.gl;
            var n = this.program;
            this.posVertexBuffer.setData(e.vertexArr, r.FLOAT, 3);
            n.bindBuffer(this.posVertexBuffer, "a_position");
            this.texVertexBuffer.setData(e.texCoordArr, r.FLOAT, 2);
            n.bindBuffer(this.texVertexBuffer, "a_texcoord");
            this.normalBuffer.setData(e.normalArr, r.FLOAT, 3);
            n.bindBuffer(this.normalBuffer, "a_normal");
            this.posIndexBuffer.setData(e.indexArr);
            this.posIndexBuffer.bind();
        };
        t.prototype.unbind = function t() {
            this.posIndexBuffer.unbind();
        };
        t.prototype.setUniform = function t(e, r) {
            this.program.setUniform(e, r);
        };
        t.prototype.draw = function t() {
            this.gl.drawElements(this.gl.TRIANGLES, this.posIndexBuffer.getBufferLength(), this.gl.UNSIGNED_SHORT, 0);
        };
        return t;
    }();
    e.default = m;
}, function(t, e, r) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var n = r(2);
    var i = l(n);
    var o = r(3);
    var a = l(o);
    var s = r(5);
    var u = l(s);
    var f = r(14);
    var c = l(f);
    function l(t) {
        return t && t.__esModule ? t : {
            default: t
        };
    }
    function h(t, e) {
        if (!(t instanceof e)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    var p = function() {
        function t(e) {
            h(this, t);
            this.gl = e;
            this.program = new i.default(e, [ u.default, c.default ]);
            this.posVertexBuffer = new a.default(e);
        }
        t.prototype.bind = function t(e) {
            this.program.bind();
            this.posVertexBuffer.setData(e, this.gl.FLOAT, 2);
            this.program.bindBuffer(this.posVertexBuffer, "a_position");
        };
        t.prototype.unbind = function t() {};
        t.prototype.setUniform = function t(e, r) {
            this.program.setUniform(e, r);
        };
        t.prototype.draw = function t() {
            this.gl.drawArrays(this.gl.LINE_STRIP, 0, this.posVertexBuffer.getBufferLength() / 2);
        };
        return t;
    }();
    e.default = p;
}, function(t, e, r) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var n = r(11);
    var i = m(n);
    var o = r(2);
    var a = m(o);
    var s = r(3);
    var u = m(s);
    var f = r(4);
    var c = m(f);
    var l = r(5);
    var h = m(l);
    var p = r(54);
    var d = m(p);
    function m(t) {
        return t && t.__esModule ? t : {
            default: t
        };
    }
    function v(t, e) {
        if (!(t instanceof e)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    var y = function() {
        function t(e) {
            v(this, t);
            this.gl = e;
            this.plane = new i.default();
            this.program = new a.default(e, [ h.default, d.default ]);
            this.posVertexBuffer = new u.default(e);
            this.posIndexBuffer = new c.default(e);
            this.texVertexBuffer = new u.default(e);
            this.bind();
            this.setUniform("u_alpha", 1);
        }
        t.prototype.bind = function t() {
            var e = this.gl;
            this.program.bind();
            this.posIndexBuffer.setData(this.plane.indexArr);
            this.posIndexBuffer.bind();
            this.posVertexBuffer.setData(this.plane.vertexArr, e.FLOAT, 2);
            this.program.bindBuffer(this.posVertexBuffer, "a_position");
            this.texVertexBuffer.setData(this.plane.texCoordArr, e.FLOAT, 2);
            this.program.bindBuffer(this.texVertexBuffer, "a_texcoord");
        };
        t.prototype.unbind = function t() {
            this.posIndexBuffer.unbind();
        };
        t.prototype.setUniform = function t(e, r) {
            this.program.setUniform(e, r);
        };
        t.prototype.draw = function t() {
            this.gl.drawElements(this.gl.TRIANGLE_STRIP, this.posIndexBuffer.getBufferLength(), this.gl.UNSIGNED_SHORT, 0);
        };
        return t;
    }();
    e.default = y;
}, function(t, e, r) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var n = r(28);
    var i = w(n);
    var o = r(36);
    var a = w(o);
    var s = r(33);
    var u = w(s);
    var f = r(35);
    var c = w(f);
    var l = r(34);
    var h = w(l);
    var p = r(30);
    var d = w(p);
    var m = r(31);
    var v = w(m);
    var y = r(9);
    var g = w(y);
    var _ = r(10);
    var b = w(_);
    function w(t) {
        return t && t.__esModule ? t : {
            default: t
        };
    }
    function x(t, e) {
        if (!(t instanceof e)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    function E(t, e) {
        if (!t) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return e && (typeof e === "object" || typeof e === "function") ? e : t;
    }
    function T(t, e) {
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
    var O = function t(e) {
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
    var R = 1e3;
    var j = new v.default();
    var F = function t(e, r, n, i, o, a, s, u) {
        var f = g.default.makeZToWMatrix(1);
        var c = g.default.ortho(0, o, 0, a, -R, R);
        var l = g.default.makeScale(n * s, i * u, 1);
        var h = g.default.makeTranslation(e * s, r * u, 0);
        var p = g.default.matrixMultiply(l, h);
        p = g.default.matrixMultiply(p, j.getCurrentMatrix());
        p = g.default.matrixMultiply(p, c);
        p = g.default.matrixMultiply(p, f);
        return p;
    };
    var M = function t(e, r, n, i, o, a) {
        var s = g.default.makeScale(n / o, i / a, 1);
        var u = g.default.makeTranslation(e / o, r / a, 0);
        return g.default.matrixMultiply(s, u);
    };
    var S = function(t) {
        T(e, t);
        function e(r) {
            x(this, e);
            var n = E(this, t.call(this, r));
            var i = document.createElement("canvas");
            document.body.appendChild(i);
            i.setAttribute("width", r.width);
            i.setAttribute("height", r.height);
            n.container = i;
            n.matrixStack = j;
            n.registerResize();
            n.currTex = null;
            n._init();
            return n;
        }
        e.prototype._init = function t() {
            var e = O(this.container);
            this.gl = e;
            this.spriteRectDrawer = new a.default(e);
            this.colorRectDrawer = new u.default(e);
            this.polyLineDrawer = new c.default(e);
            this.modelDrawer = new h.default(e);
            this.frameBuffer = new d.default(e, this.game.width, this.game.height);
            e.blendFunc(e.SRC_ALPHA, e.ONE_MINUS_SRC_ALPHA);
            e.enable(e.BLEND);
            e.enable(e.BLEND);
        };
        e.prototype.draw = function t(e) {
            this.save();
            var r = e.width / 2;
            var n = e.height / 2;
            this.translate(e.pos.x + r, e.pos.y + n);
            this.scale(e.scale.x, e.scale.y);
            this.rotateZ(e.angle);
            this.translate(-r, -n);
            this.drawImage(e.spriteSheet.resourcePath, e._sprPosX, e._sprPosY, e.width, e.height, 0, 0, e.width, e.height);
            this.restore();
        };
        e.prototype.drawImage = function t(e, r, n, i, o, a, s) {
            this.gl.blendFunc(this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA);
            var u = this.renderableCache[e];
            var f = u.getSize().width;
            var c = u.getSize().height;
            if (a === undefined) {
                a = r;
            }
            if (s === undefined) {
                s = n;
            }
            if (i === undefined) {
                i = f;
            }
            if (o === undefined) {
                o = c;
            }
            if (this.currTex != u) {
                u.bind();
                this.currTex = u;
            }
            this.spriteRectDrawer.bind();
            this.spriteRectDrawer.setUniform("u_textureMatrix", M(r, n, i, o, f, c));
            this.spriteRectDrawer.setUniform("u_matrix", F(a, s, i, o, this.game.width, this.game.height, 1, 1));
            this.spriteRectDrawer.setUniform("u_alpha", 1);
            this.spriteRectDrawer.draw();
            this.spriteRectDrawer.unbind();
        };
        e.prototype.fillRect = function t(e, r, n, i, o) {};
        e.prototype.setAlpha = function t(e) {};
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
            var r = e.r, n = e.g, i = e.b;
            this.gl.clearColor(r / 255, n / 255, i / 255, 1);
            this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
        };
        e.prototype.beginFrameBuffer = function t() {
            this.save();
            this.gl.viewport(0, 0, this.game.width, this.game.height);
            this.frameBuffer.bind();
        };
        e.prototype.flipFrameBuffer = function t() {
            this.currTex = null;
            this.restore();
            this.save();
            this.translate(0, this.game.height);
            this.scale(1, -1);
            this.frameBuffer.unbind();
            this.gl.viewport(0, 0, this.game.width, this.game.height);
            this.frameBuffer.getTexture().bind();
            this.spriteRectDrawer.bind();
            this.spriteRectDrawer.setUniform("u_matrix", F(0, 0, this.game.width, this.game.height, this.game.width, this.game.height, 1, 1));
            this.spriteRectDrawer.setUniform("u_textureMatrix", M(0, 0, this.game.width, this.game.height, this.game.width, this.game.height));
            this.spriteRectDrawer.setUniform("u_alpha", 1);
            this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA);
            this.spriteRectDrawer.draw();
            this.restore();
        };
        e.prototype.getError = function t() {
            var e = this.gl.getError();
            return e == this.gl.NO_ERROR ? 0 : e;
        };
        e.prototype.loadTextureInfo = function t(e, r) {
            var n = this;
            var i = new Image();
            i.src = e;
            i.onload = function() {
                var t = new b.default(n.gl);
                t.setImage(i);
                n.renderableCache[e] = t;
                r();
            };
        };
        return e;
    }(i.default);
    e.default = S;
}, function(t, e, r) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var n = r(41);
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
        t.prototype.updateObject = function t(e, r) {
            var n = e.toJSON(r);
            var i = this.descriptions[e.type].findIndex(function(t) {
                return t.id == e.id;
            });
            this.descriptions[e.type][i] = n;
            var o = this.getObject(e.id, e.type, true);
            if (o) o.fromJSON(n);
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
            this.propsToChange = [];
            this.startedTime = null;
            this.completed = false;
            this.obj = e.target || r;
            this.progressFn = e.progress;
            this.completeFn = e.complete;
            this.easeFnName = e.ease || "linear";
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
    var n = function t(e, r) {
        var n = e || 0;
        var i = r || 0;
        var o = 0;
        var a = 0;
        this.x = 0;
        this.y = 0;
        var s = function t() {
            o = n === 0 ? 0 : Math.atan(i / n);
            a = Math.sqrt(n * n + i * i);
        };
        var u = function t() {
            i = Math.sin(o) * a;
            n = Math.cos(o) * a;
        };
        var f = function t() {
            i = Math.sin(o) * a;
            n = Math.cos(o) * a;
        };
        this.setXY = function(t, e) {
            n = t;
            i = e;
            s();
        };
        this.setX = function(t) {
            n = t;
            s();
        };
        this.setY = function(t) {
            i = t;
            s();
        };
        this.setAngle = function(t) {
            o = t;
            u();
        };
        this.setNorm = function(t) {
            a = t;
            f();
        };
        this.getXY = function() {
            return {
                x: n,
                y: i
            };
        };
        this.getX = function() {
            return n;
        };
        this.getY = function() {
            return i;
        };
        this.getAngle = function() {
            return o;
        };
        this.addVec2 = function(e) {
            return new t(n + e.getX(), i + e.getY);
        };
        this.multiplyByScalar = function(e) {
            return new t(n * e, i * e);
        };
        this.dotProduct = function(t) {
            return n * t.getX() + i * t.getY();
        };
        this.getNorm = function() {
            return a;
        };
        (function() {
            s();
        })();
    };
    t.exports = n;
}, function(t, e, r) {
    "use strict";
    e.__esModule = true;
    e.TextField = e.Layer = e.Font = e.Sound = e.Scene = e.ParticleSystem = e.CommonBehaviour = e.GameObject = e.GameObjectProto = e.SpriteSheet = e.FrameAnimation = undefined;
    var n = r(44);
    var i = O(n);
    var o = r(50);
    var a = O(o);
    var s = r(13);
    var u = O(s);
    var f = r(45);
    var c = O(f);
    var l = r(42);
    var h = O(l);
    var p = r(47);
    var d = O(p);
    var m = r(48);
    var v = O(m);
    var y = r(49);
    var g = O(y);
    var _ = r(43);
    var b = O(_);
    var w = r(46);
    var x = O(w);
    var E = r(51);
    var T = O(E);
    function O(t) {
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
    e.Scene = v.default;
    e.Sound = g.default;
    e.Font = b.default;
    e.Layer = x.default;
    e.TextField = T.default;
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
    var f = function(t) {
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
    e.default = f;
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
    var f = function(t) {
        u(e, t);
        function e(r) {
            a(this, e);
            var n = s(this, t.call(this, r));
            n.type = "Font";
            n.resourcePath = null;
            n.fontSize = 12;
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
    e.default = f;
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
    var f = function(t) {
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
    e.default = f;
}, function(t, e, r) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var n = r(13);
    var i = u(n);
    var o = r(16);
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
        function e(r) {
            f(this, e);
            var n = c(this, t.call(this, r));
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
                if (!n[t]) return;
                if (n[t].splice && n[t].length === 0) return;
                r[t] = n[t];
            });
            t.prototype.revalidate.call(this);
        };
        e.prototype.setIndividualBehaviour = function t(e) {
            var r = new e(this.game);
            r.game = this.game;
            r.gameObject = this;
            if (!r.onCreate) r.onCreate = h;
            if (!r.onUpdate) r.onUpdate = h;
            if (!r.onDestroy) r.onDestroy = h;
            this._individualBehaviour = r;
        };
        e.prototype.setCommonBehaviour = function t() {
            var e = this;
            var r = [];
            this.commonBehaviour.forEach(function(t) {
                var n = a[t.name];
                var i = new n(e.game);
                i.manage(e, t.parameters);
                r.push(i);
            });
            this.commonBehaviour = r;
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
    var f = function(t) {
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
    e.default = f;
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
        function e(r) {
            f(this, e);
            var n = c(this, t.call(this, r));
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
    var o = r(25);
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
    var l = function(t) {
        c(e, t);
        function e(r) {
            u(this, e);
            var n = f(this, t.call(this, r));
            n.type = "Scene";
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
                spriteSheet: null,
                width: 0,
                height: 0,
                data: []
            };
            return n;
        }
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
            this.game._renderer.beginFrameBuffer();
            if (this.useBG) this.game._renderer.clearColor(this.colorBG); else this.game._renderer.clear();
            var n = this.layers;
            var i = this.layers.length;
            var o = i - 1;
            this.game.camera.update(e);
            this.game._renderer.translate(-this.game.camera.pos.x, -this.game.camera.pos.y);
            if (this._individualBehaviour) this._individualBehaviour.onUpdate();
            while (i--) {
                n[i - o].update(e, r);
            }
            this.game.repository.getArray("ParticleSystem").forEach(function(t) {
                t.update(e, r);
            });
            this.game._renderer.flipFrameBuffer();
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
    var f = function(t) {
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
    e.default = f;
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
    var f = function(t) {
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
    e.default = f;
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
    var f = function(t) {
        u(e, t);
        function e(r) {
            a(this, e);
            var n = s(this, t.call(this, r));
            n.type = "TextField";
            n._chars = null;
            n.text = "";
            n.font = null;
            return n;
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
            var r = [ {
                width: 0
            } ];
            var n = 0;
            this.height = this.font.fontContext.symbols[" "].height;
            for (var i = 0, o = e.length; i < o; i++) {
                this._chars.push(e[i]);
                var a = this.font.fontContext.symbols[e[i]] || this.font.fontContext.symbols[" "];
                if (e[i] === "\n") {
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
                if (t === "\n") {
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
    e.default = f;
}, function(t, e, r) {
    "use strict";
    e.__esModule = true;
    function n(t, e) {
        if (!(t instanceof e)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    var i = e.MainSceneBehaviour = function() {
        function t() {
            n(this, t);
        }
        t.prototype.onCreate = function t() {};
        t.prototype.onUpdate = function t() {};
        t.prototype.onDestroy = function t() {};
        return t;
    }();
    var o = e.MariosheetBehaviour = function() {
        function t() {
            n(this, t);
        }
        t.prototype.onCreate = function t() {};
        t.prototype.onUpdate = function t() {};
        t.prototype.onDestroy = function t() {};
        return t;
    }();
}, function(t, e) {
    t.exports = "attribute vec4 a_position;\nattribute vec2 a_texcoord;\nattribute vec3 a_normal;\n\nuniform mat4 u_modelMatrix;\nuniform mat4 u_projectionMatrix;\n\nvarying vec2 v_texcoord;\nvarying vec3 v_normal;\n\nvoid main() {\n\n  gl_Position = u_projectionMatrix * u_modelMatrix * a_position;\n  v_texcoord = a_texcoord;\n  v_normal = a_normal;\n}";
}, function(t, e) {
    t.exports = "precision mediump float;\n\nvarying vec2 v_texcoord;\n\nuniform sampler2D texture;\nuniform float u_alpha;\n\n\nvoid main() {\n    gl_FragColor = texture2D(texture, v_texcoord);\n    gl_FragColor.a *= u_alpha;\n}";
}, function(t, e) {
    t.exports = "precision highp float;\n\nvarying vec2 v_texcoord;\nvarying vec3 v_normal;\n\nuniform sampler2D texture;\nuniform float u_alpha;\nuniform mat4 u_modelMatrix;\n\n\nvoid main() {\n\n    vec3 lightDirection = normalize(vec3(-1,-1,1));\n    vec3 normalized = normalize((u_modelMatrix * vec4(v_normal,0)).xyz);\n    float lightFactor = max(0.5,dot(lightDirection,normalized));\n    gl_FragColor = texture2D(texture, v_texcoord);\n    gl_FragColor.rgb *= lightFactor;\n    gl_FragColor.a *= u_alpha;\n}";
}, function(t, e, r) {
    t.exports = r(15);
} ]);