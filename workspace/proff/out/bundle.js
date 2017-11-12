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
    return r(r.s = 53);
})([ function(t, e, r) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var i, n;
    var o = r(12);
    var a = l(o);
    var s = r(37);
    var u = l(s);
    var f = r(22);
    var h = l(f);
    var c = r(8);
    function l(t) {
        return t && t.__esModule ? t : {
            default: t
        };
    }
    function d(t, e) {
        if (!(t instanceof e)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    function p(t, e) {
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
    var m = (i = (0, c.Transient)({
        game: true
    }), i(n = function(t) {
        y(e, t);
        function e(r) {
            d(this, e);
            var i = p(this, t.call(this));
            i.id = null;
            i.name = null;
            i.width = 0;
            i.height = 0;
            i.vel = {
                x: 0,
                y: 0
            };
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
            i.rigid = false;
            i._tweens = [];
            if (1 && !r) throw "can not create model '" + i.type + "': game instance not passed to model constructor";
            i.game = r;
            i._emitter = new h.default();
            return i;
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
    e.default = m;
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
        var i = Math.random() * (e - t) + t;
        if (i > e) i = e; else if (i < t) i = t;
        return i;
    };
    var i = {};
    i.linear = function(t, e, r, i) {
        return r * t / i + e;
    };
    i.easeInQuad = function(t, e, r, i) {
        t /= i;
        return r * t * t + e;
    };
    i.easeOutQuad = function(t, e, r, i) {
        t /= i;
        return -r * t * (t - 2) + e;
    };
    i.easeInOutQuad = function(t, e, r, i) {
        t /= i / 2;
        if (t < 1) return r / 2 * t * t + e;
        t--;
        return -r / 2 * (t * (t - 2) - 1) + e;
    };
    e.ease = i;
}, function(t, e, r) {
    "use strict";
    e.__esModule = true;
    function i(t, e) {
        if (!(t instanceof e)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    var n = function t(e, r, i) {
        if (!r) throw "can not compile shader: shader source not specified for type " + i;
        var n = e.createShader(i);
        e.shaderSource(n, r);
        e.compileShader(n);
        var o = e.getShaderParameter(n, e.COMPILE_STATUS);
        if (!o) {
            var a = e.getShaderInfoLog(n);
            e.deleteShader(n);
            throw "Error compiling shader " + n + ":" + a;
        }
        return n;
    };
    var o = function t(e, r) {
        var i = e.createProgram();
        r.forEach(function(t) {
            e.attachShader(i, t);
        });
        e.linkProgram(i);
        var n = e.getProgramParameter(i, e.LINK_STATUS);
        if (!n) {
            var o = e.getProgramInfoLog(i);
            e.deleteProgram(i);
            throw "Error in program linking:" + o;
        }
        return i;
    };
    var a = function t(e, r) {
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
    var s = function t(e, r) {
        var i = {};
        var n = e.getProgramParameter(r, e.ACTIVE_UNIFORMS);
        for (var o = 0; o < n; o++) {
            var s = e.getActiveUniform(r, o);
            var f = s.name.replace(/\[.*?]/, "");
            var h = a(e, s.type);
            i[f] = {
                type: h,
                size: s.size,
                name: f,
                location: e.getUniformLocation(r, f),
                setter: u(s.size, h)
            };
        }
        return i;
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
            i(this, t);
            var a = n(e, r[0], e.VERTEX_SHADER);
            var u = n(e, r[1], e.FRAGMENT_SHADER);
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
            var i = this.uniforms[e];
            if (!i) throw "no uniform with name " + e + " found!";
            i.setter(this.gl, i.location, r);
        };
        t.prototype.bindBuffer = function t(e, r) {
            this.gl.bindBuffer(this.gl.ARRAY_BUFFER, e.getGlBuffer());
            var i = this.gl.getAttribLocation(this.program, r);
            if (!r) throw "can not found uniform location: uniformLocationName not defined";
            if (i < 0) throw "can not found uniform location for " + r;
            this.gl.enableVertexAttribArray(i);
            this.gl.vertexAttribPointer(i, e.getItemSize(), e.getItemType(), false, 0, 0);
            this.gl.bindBuffer(this.gl.ARRAY_BUFFER, null);
        };
        return t;
    }();
    e.default = f;
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
}, function(t, e) {
    t.exports = "attribute vec4 a_position;\nattribute vec4 a_color;\nattribute vec2 a_texcoord;\n\nuniform mat4 u_matrix;\nuniform mat4 u_textureMatrix;\n\nvarying vec2 v_texcoord;\nvarying vec4 v_color;\n\nvoid main() {\n   gl_Position = u_matrix * a_position;\n   v_texcoord = (u_textureMatrix * vec4(a_texcoord, 0, 1)).xy;\n   v_color = a_color;\n   //gl_PointSize = 10.0;\n}";
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
            if (true) throw "method manage not implemented";
        };
        t.prototype.onUpdate = function t() {};
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
    var a = 1;
    var s = 2;
    var u = 0;
    var f = -1;
    var h = (n = i = function() {
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
            return this.buffer[e] == s;
        };
        t.prototype.isReleased = function t(e) {
            return this.buffer[e] <= u || !this.buffer[e];
        };
        t.prototype.isJustReleased = function t(e) {
            return this.buffer[e] == f;
        };
        t.prototype.update = function e() {
            var r = this;
            if (1 && window.canceled) return;
            [ t.KEY_UP, t.KEY_DOWN, t.KEY_LEFT, t.KEY_RIGHT ].forEach(function(t) {
                if (r.buffer[t] == s) r.buffer[t] = a; else if (r.buffer[t] == f) r.buffer[t] = u;
            });
        };
        t.prototype.listenTo = function e() {
            var r = this;
            window.addEventListener("keydown", function(e) {
                var i = e.keyCode;
                switch (i) {
                  case t.KEY_UP:
                  case t.KEY_DOWN:
                  case t.KEY_LEFT:
                  case t.KEY_RIGHT:
                    r.buffer[i] = a;
                    break;
                }
            });
            window.addEventListener("keyup", function(e) {
                var i = e.keyCode;
                switch (i) {
                  case t.KEY_UP:
                  case t.KEY_DOWN:
                  case t.KEY_LEFT:
                  case t.KEY_RIGHT:
                    r.buffer[i] = f;
                    break;
                }
            });
        };
        return t;
    }(), i.KEY_UP = 38, i.KEY_DOWN = 40, i.KEY_LEFT = 37, i.KEY_RIGHT = 39, n);
    e.default = h;
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
        var r = t[0 * 4 + 0];
        var i = t[0 * 4 + 1];
        var n = t[0 * 4 + 2];
        var o = t[0 * 4 + 3];
        var a = t[1 * 4 + 0];
        var s = t[1 * 4 + 1];
        var u = t[1 * 4 + 2];
        var f = t[1 * 4 + 3];
        var h = t[2 * 4 + 0];
        var c = t[2 * 4 + 1];
        var l = t[2 * 4 + 2];
        var d = t[2 * 4 + 3];
        var p = t[3 * 4 + 0];
        var y = t[3 * 4 + 1];
        var m = t[3 * 4 + 2];
        var g = t[3 * 4 + 3];
        var v = e[0 * 4 + 0];
        var w = e[0 * 4 + 1];
        var _ = e[0 * 4 + 2];
        var b = e[0 * 4 + 3];
        var x = e[1 * 4 + 0];
        var O = e[1 * 4 + 1];
        var E = e[1 * 4 + 2];
        var T = e[1 * 4 + 3];
        var j = e[2 * 4 + 0];
        var R = e[2 * 4 + 1];
        var F = e[2 * 4 + 2];
        var A = e[2 * 4 + 3];
        var P = e[3 * 4 + 0];
        var M = e[3 * 4 + 1];
        var S = e[3 * 4 + 2];
        var B = e[3 * 4 + 3];
        return [ r * v + i * x + n * j + o * P, r * w + i * O + n * R + o * M, r * _ + i * E + n * F + o * S, r * b + i * T + n * A + o * B, a * v + s * x + u * j + f * P, a * w + s * O + u * R + f * M, a * _ + s * E + u * F + f * S, a * b + s * T + u * A + f * B, h * v + c * x + l * j + d * P, h * w + c * O + l * R + d * M, h * _ + c * E + l * F + d * S, h * b + c * T + l * A + d * B, p * v + y * x + m * j + g * P, p * w + y * O + m * R + g * M, p * _ + y * E + m * F + g * S, p * b + y * T + m * A + g * B ];
    };
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
    var i = r(30);
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
        if (e.indexOf("_") == 0) return true;
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
            var n = this.vel.x * i / 1e3;
            var o = this.vel.y * i / 1e3;
            this.game._collider.manage(this, this.pos.x + n, this.pos.y + o);
            this.game._renderer.draw(this);
            if (this._individualBehaviour) this._individualBehaviour.onUpdate();
            for (var a = 0, s = this.commonBehaviour.length; a < s; a++) {
                this.commonBehaviour[a].onUpdate();
            }
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
    }(n.default);
    e.default = f;
}, function(t, e) {
    t.exports = "precision mediump float;\n\nvarying vec2 v_texcoord;\n\nuniform sampler2D texture;\nuniform float u_alpha;\nuniform vec4 u_rgba;\n\nvoid main() {\n    gl_FragColor = u_rgba;\n}";
}, function(t, e, r) {
    "use strict";
    var i = r(23);
    var n = o(i);
    function o(t) {
        return t && t.__esModule ? t : {
            default: t
        };
    }
    var a = {
        width: 300,
        height: 200,
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
    var s = new n.default({
        width: 300,
        height: 200,
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
            } ],
            useBG: true
        } ],
        Layer: [ {
            id: 2,
            name: "layer1",
            type: "Layer",
            gameObjects: [ {
                type: "GameObject",
                id: 28
            }, {
                type: "GameObject",
                id: 30
            }, {
                type: "GameObject",
                id: 40
            }, {
                type: "GameObject",
                id: 41
            }, {
                type: "GameObject",
                id: 42
            }, {
                type: "GameObject",
                id: 43
            }, {
                type: "GameObject",
                id: 44
            }, {
                type: "GameObject",
                id: 45
            }, {
                type: "GameObject",
                id: 46
            }, {
                type: "GameObject",
                id: 47
            }, {
                type: "GameObject",
                id: 48
            }, {
                type: "GameObject",
                id: 49
            }, {
                type: "GameObject",
                id: 50
            }, {
                type: "GameObject",
                id: 51
            } ]
        } ],
        SpriteSheet: [ {
            name: "cat",
            width: 236,
            height: 511,
            type: "SpriteSheet",
            numOfFramesH: 3,
            numOfFramesV: 13,
            resourcePath: "resources/cat.jpg",
            id: 13
        }, {
            name: "professor_walk_cycle_no_hat",
            width: 576,
            height: 256,
            type: "SpriteSheet",
            numOfFramesH: 9,
            numOfFramesV: 4,
            resourcePath: "resources/professor_walk_cycle_no_hat.png",
            id: 21
        }, {
            name: "MulticolorTanks",
            width: 256,
            height: 256,
            type: "SpriteSheet",
            numOfFramesH: 8,
            numOfFramesV: 8,
            resourcePath: "resources/MulticolorTanks.png",
            id: 37
        } ],
        Font: [ {
            name: "ff",
            type: "Font",
            resourcePath: "resources/ff.png",
            fontFamily: "Algerian",
            fontContext: {
                symbols: {
                    "0": {
                        x: 214,
                        y: 4,
                        width: 7,
                        height: 13
                    },
                    "1": {
                        x: 229,
                        y: 4,
                        width: 7,
                        height: 13
                    },
                    "2": {
                        x: 244,
                        y: 4,
                        width: 7,
                        height: 13
                    },
                    "3": {
                        x: 259,
                        y: 4,
                        width: 7,
                        height: 13
                    },
                    "4": {
                        x: 274,
                        y: 4,
                        width: 7,
                        height: 13
                    },
                    "5": {
                        x: 290,
                        y: 4,
                        width: 7,
                        height: 13
                    },
                    "6": {
                        x: 305,
                        y: 4,
                        width: 7,
                        height: 13
                    },
                    "7": {
                        x: 4,
                        y: 25,
                        width: 7,
                        height: 13
                    },
                    "8": {
                        x: 19,
                        y: 25,
                        width: 7,
                        height: 13
                    },
                    "9": {
                        x: 34,
                        y: 25,
                        width: 7,
                        height: 13
                    },
                    " ": {
                        x: 4,
                        y: 4,
                        width: 3,
                        height: 13
                    },
                    "!": {
                        x: 15,
                        y: 4,
                        width: 3,
                        height: 13
                    },
                    '"': {
                        x: 26,
                        y: 4,
                        width: 4,
                        height: 13
                    },
                    "#": {
                        x: 38,
                        y: 4,
                        width: 7,
                        height: 13
                    },
                    $: {
                        x: 53,
                        y: 4,
                        width: 7,
                        height: 13
                    },
                    "%": {
                        x: 69,
                        y: 4,
                        width: 7,
                        height: 13
                    },
                    "&": {
                        x: 84,
                        y: 4,
                        width: 9,
                        height: 13
                    },
                    "'": {
                        x: 102,
                        y: 4,
                        width: 2,
                        height: 13
                    },
                    "(": {
                        x: 112,
                        y: 4,
                        width: 5,
                        height: 13
                    },
                    ")": {
                        x: 125,
                        y: 4,
                        width: 5,
                        height: 13
                    },
                    "*": {
                        x: 139,
                        y: 4,
                        width: 4,
                        height: 13
                    },
                    "+": {
                        x: 151,
                        y: 4,
                        width: 7,
                        height: 13
                    },
                    ",": {
                        x: 166,
                        y: 4,
                        width: 3,
                        height: 13
                    },
                    "-": {
                        x: 177,
                        y: 4,
                        width: 3,
                        height: 13
                    },
                    ".": {
                        x: 189,
                        y: 4,
                        width: 3,
                        height: 13
                    },
                    "/": {
                        x: 200,
                        y: 4,
                        width: 5,
                        height: 13
                    },
                    ":": {
                        x: 49,
                        y: 25,
                        width: 3,
                        height: 13
                    },
                    ";": {
                        x: 60,
                        y: 25,
                        width: 3,
                        height: 13
                    },
                    "<": {
                        x: 71,
                        y: 25,
                        width: 6,
                        height: 13
                    },
                    "=": {
                        x: 85,
                        y: 25,
                        width: 7,
                        height: 13
                    },
                    ">": {
                        x: 100,
                        y: 25,
                        width: 6,
                        height: 13
                    },
                    "?": {
                        x: 114,
                        y: 25,
                        width: 5,
                        height: 13
                    },
                    "@": {
                        x: 128,
                        y: 25,
                        width: 8,
                        height: 13
                    },
                    A: {
                        x: 144,
                        y: 25,
                        width: 9,
                        height: 13
                    },
                    B: {
                        x: 161,
                        y: 25,
                        width: 7,
                        height: 13
                    },
                    C: {
                        x: 177,
                        y: 25,
                        width: 6,
                        height: 13
                    },
                    D: {
                        x: 192,
                        y: 25,
                        width: 7,
                        height: 13
                    },
                    E: {
                        x: 207,
                        y: 25,
                        width: 7,
                        height: 13
                    },
                    F: {
                        x: 223,
                        y: 25,
                        width: 6,
                        height: 13
                    },
                    G: {
                        x: 237,
                        y: 25,
                        width: 8,
                        height: 13
                    },
                    H: {
                        x: 254,
                        y: 25,
                        width: 7,
                        height: 13
                    },
                    I: {
                        x: 269,
                        y: 25,
                        width: 3,
                        height: 13
                    },
                    J: {
                        x: 281,
                        y: 25,
                        width: 6,
                        height: 13
                    },
                    K: {
                        x: 295,
                        y: 25,
                        width: 8,
                        height: 13
                    },
                    L: {
                        x: 4,
                        y: 46,
                        width: 6,
                        height: 13
                    },
                    M: {
                        x: 18,
                        y: 46,
                        width: 8,
                        height: 13
                    },
                    N: {
                        x: 35,
                        y: 46,
                        width: 7,
                        height: 13
                    },
                    O: {
                        x: 50,
                        y: 46,
                        width: 7,
                        height: 13
                    },
                    P: {
                        x: 66,
                        y: 46,
                        width: 7,
                        height: 13
                    },
                    Q: {
                        x: 81,
                        y: 46,
                        width: 7,
                        height: 13
                    },
                    R: {
                        x: 96,
                        y: 46,
                        width: 7,
                        height: 13
                    },
                    S: {
                        x: 112,
                        y: 46,
                        width: 6,
                        height: 13
                    },
                    T: {
                        x: 127,
                        y: 46,
                        width: 6,
                        height: 13
                    },
                    U: {
                        x: 142,
                        y: 46,
                        width: 7,
                        height: 13
                    },
                    V: {
                        x: 157,
                        y: 46,
                        width: 7,
                        height: 13
                    },
                    W: {
                        x: 172,
                        y: 46,
                        width: 9,
                        height: 13
                    },
                    X: {
                        x: 190,
                        y: 46,
                        width: 8,
                        height: 13
                    },
                    Y: {
                        x: 206,
                        y: 46,
                        width: 7,
                        height: 13
                    },
                    Z: {
                        x: 222,
                        y: 46,
                        width: 7,
                        height: 13
                    },
                    "[": {
                        x: 238,
                        y: 46,
                        width: 5,
                        height: 13
                    },
                    "\\": {
                        x: 251,
                        y: 46,
                        width: 6,
                        height: 13
                    },
                    "]": {
                        x: 265,
                        y: 46,
                        width: 5,
                        height: 13
                    },
                    "^": {
                        x: 278,
                        y: 46,
                        width: 6,
                        height: 13
                    },
                    _: {
                        x: 292,
                        y: 46,
                        width: 6,
                        height: 13
                    },
                    "`": {
                        x: 306,
                        y: 46,
                        width: 6,
                        height: 13
                    },
                    a: {
                        x: 4,
                        y: 67,
                        width: 9,
                        height: 13
                    },
                    b: {
                        x: 21,
                        y: 67,
                        width: 7,
                        height: 13
                    },
                    c: {
                        x: 36,
                        y: 67,
                        width: 6,
                        height: 13
                    },
                    d: {
                        x: 51,
                        y: 67,
                        width: 7,
                        height: 13
                    },
                    e: {
                        x: 67,
                        y: 67,
                        width: 7,
                        height: 13
                    },
                    f: {
                        x: 82,
                        y: 67,
                        width: 6,
                        height: 13
                    },
                    g: {
                        x: 97,
                        y: 67,
                        width: 8,
                        height: 13
                    },
                    h: {
                        x: 113,
                        y: 67,
                        width: 7,
                        height: 13
                    },
                    i: {
                        x: 128,
                        y: 67,
                        width: 3,
                        height: 13
                    },
                    j: {
                        x: 140,
                        y: 67,
                        width: 6,
                        height: 13
                    },
                    k: {
                        x: 154,
                        y: 67,
                        width: 8,
                        height: 13
                    },
                    l: {
                        x: 170,
                        y: 67,
                        width: 6,
                        height: 13
                    },
                    m: {
                        x: 185,
                        y: 67,
                        width: 8,
                        height: 13
                    },
                    n: {
                        x: 202,
                        y: 67,
                        width: 7,
                        height: 13
                    },
                    o: {
                        x: 217,
                        y: 67,
                        width: 7,
                        height: 13
                    },
                    p: {
                        x: 232,
                        y: 67,
                        width: 7,
                        height: 13
                    },
                    q: {
                        x: 247,
                        y: 67,
                        width: 7,
                        height: 13
                    },
                    r: {
                        x: 263,
                        y: 67,
                        width: 7,
                        height: 13
                    },
                    s: {
                        x: 279,
                        y: 67,
                        width: 6,
                        height: 13
                    },
                    t: {
                        x: 293,
                        y: 67,
                        width: 6,
                        height: 13
                    },
                    u: {
                        x: 4,
                        y: 88,
                        width: 7,
                        height: 13
                    },
                    v: {
                        x: 19,
                        y: 88,
                        width: 7,
                        height: 13
                    },
                    w: {
                        x: 34,
                        y: 88,
                        width: 9,
                        height: 13
                    },
                    x: {
                        x: 52,
                        y: 88,
                        width: 8,
                        height: 13
                    },
                    y: {
                        x: 68,
                        y: 88,
                        width: 7,
                        height: 13
                    },
                    z: {
                        x: 84,
                        y: 88,
                        width: 7,
                        height: 13
                    },
                    "{": {
                        x: 99,
                        y: 88,
                        width: 5,
                        height: 13
                    },
                    "|": {
                        x: 113,
                        y: 88,
                        width: 6,
                        height: 13
                    },
                    "}": {
                        x: 127,
                        y: 88,
                        width: 5,
                        height: 13
                    },
                    "~": {
                        x: 140,
                        y: 88,
                        width: 7,
                        height: 13
                    },
                    "": {
                        x: 156,
                        y: 88,
                        width: 6,
                        height: 13
                    },
                    "": {
                        x: 170,
                        y: 88,
                        width: 0,
                        height: 13
                    },
                    "": {
                        x: 178,
                        y: 88,
                        width: 0,
                        height: 13
                    },
                    "": {
                        x: 186,
                        y: 88,
                        width: 6,
                        height: 13
                    },
                    "": {
                        x: 200,
                        y: 88,
                        width: 6,
                        height: 13
                    },
                    "": {
                        x: 214,
                        y: 88,
                        width: 6,
                        height: 13
                    },
                    "": {
                        x: 228,
                        y: 88,
                        width: 9,
                        height: 13
                    },
                    "": {
                        x: 246,
                        y: 88,
                        width: 6,
                        height: 13
                    },
                    "": {
                        x: 260,
                        y: 88,
                        width: 6,
                        height: 13
                    },
                    "": {
                        x: 274,
                        y: 88,
                        width: 4,
                        height: 13
                    },
                    "": {
                        x: 286,
                        y: 88,
                        width: 9,
                        height: 13
                    },
                    "": {
                        x: 303,
                        y: 88,
                        width: 5,
                        height: 13
                    },
                    "": {
                        x: 4,
                        y: 109,
                        width: 6,
                        height: 13
                    },
                    "": {
                        x: 18,
                        y: 109,
                        width: 11,
                        height: 13
                    },
                    "": {
                        x: 37,
                        y: 109,
                        width: 0,
                        height: 13
                    },
                    "": {
                        x: 45,
                        y: 109,
                        width: 0,
                        height: 13
                    },
                    "": {
                        x: 53,
                        y: 109,
                        width: 0,
                        height: 13
                    },
                    "": {
                        x: 61,
                        y: 109,
                        width: 0,
                        height: 13
                    },
                    "": {
                        x: 69,
                        y: 109,
                        width: 2,
                        height: 13
                    },
                    "": {
                        x: 80,
                        y: 109,
                        width: 2,
                        height: 13
                    },
                    "": {
                        x: 90,
                        y: 109,
                        width: 5,
                        height: 13
                    },
                    "": {
                        x: 103,
                        y: 109,
                        width: 5,
                        height: 13
                    },
                    "": {
                        x: 116,
                        y: 109,
                        width: 0,
                        height: 13
                    },
                    "А": {
                        x: 124,
                        y: 109,
                        width: 8,
                        height: 13
                    },
                    "Б": {
                        x: 141,
                        y: 109,
                        width: 6,
                        height: 13
                    },
                    "В": {
                        x: 156,
                        y: 109,
                        width: 8,
                        height: 13
                    },
                    "Г": {
                        x: 172,
                        y: 109,
                        width: 6,
                        height: 13
                    },
                    "Д": {
                        x: 187,
                        y: 109,
                        width: 8,
                        height: 13
                    },
                    "Е": {
                        x: 203,
                        y: 109,
                        width: 7,
                        height: 13
                    },
                    "Ж": {
                        x: 218,
                        y: 109,
                        width: 10,
                        height: 13
                    },
                    "З": {
                        x: 237,
                        y: 109,
                        width: 6,
                        height: 13
                    },
                    "И": {
                        x: 251,
                        y: 109,
                        width: 8,
                        height: 13
                    },
                    "Й": {
                        x: 268,
                        y: 109,
                        width: 8,
                        height: 13
                    },
                    "К": {
                        x: 284,
                        y: 109,
                        width: 8,
                        height: 13
                    },
                    "Л": {
                        x: 300,
                        y: 109,
                        width: 8,
                        height: 13
                    },
                    "М": {
                        x: 4,
                        y: 130,
                        width: 10,
                        height: 13
                    },
                    "Н": {
                        x: 22,
                        y: 130,
                        width: 8,
                        height: 13
                    },
                    "О": {
                        x: 39,
                        y: 130,
                        width: 8,
                        height: 13
                    },
                    "П": {
                        x: 56,
                        y: 130,
                        width: 8,
                        height: 13
                    },
                    "Р": {
                        x: 72,
                        y: 130,
                        width: 6,
                        height: 13
                    },
                    "С": {
                        x: 87,
                        y: 130,
                        width: 8,
                        height: 13
                    },
                    "Т": {
                        x: 103,
                        y: 130,
                        width: 7,
                        height: 13
                    },
                    "У": {
                        x: 118,
                        y: 130,
                        width: 8,
                        height: 13
                    },
                    "Ф": {
                        x: 135,
                        y: 130,
                        width: 9,
                        height: 13
                    },
                    "Х": {
                        x: 152,
                        y: 130,
                        width: 8,
                        height: 13
                    },
                    "Ц": {
                        x: 169,
                        y: 130,
                        width: 8,
                        height: 13
                    },
                    "Ч": {
                        x: 185,
                        y: 130,
                        width: 7,
                        height: 13
                    },
                    "Ш": {
                        x: 201,
                        y: 130,
                        width: 12,
                        height: 13
                    },
                    "Щ": {
                        x: 221,
                        y: 130,
                        width: 12,
                        height: 13
                    },
                    "Ъ": {
                        x: 241,
                        y: 130,
                        width: 8,
                        height: 13
                    },
                    "Ы": {
                        x: 258,
                        y: 130,
                        width: 10,
                        height: 13
                    },
                    "Ь": {
                        x: 276,
                        y: 130,
                        width: 6,
                        height: 13
                    },
                    "Э": {
                        x: 291,
                        y: 130,
                        width: 7,
                        height: 13
                    },
                    "Ю": {
                        x: 4,
                        y: 151,
                        width: 12,
                        height: 13
                    },
                    "Я": {
                        x: 24,
                        y: 151,
                        width: 8,
                        height: 13
                    },
                    "а": {
                        x: 40,
                        y: 151,
                        width: 5,
                        height: 13
                    },
                    "б": {
                        x: 53,
                        y: 151,
                        width: 6,
                        height: 13
                    },
                    "в": {
                        x: 67,
                        y: 151,
                        width: 5,
                        height: 13
                    },
                    "г": {
                        x: 81,
                        y: 151,
                        width: 4,
                        height: 13
                    },
                    "д": {
                        x: 94,
                        y: 151,
                        width: 6,
                        height: 13
                    },
                    "е": {
                        x: 108,
                        y: 151,
                        width: 5,
                        height: 13
                    },
                    "ж": {
                        x: 121,
                        y: 151,
                        width: 8,
                        height: 13
                    },
                    "з": {
                        x: 138,
                        y: 151,
                        width: 4,
                        height: 13
                    },
                    "и": {
                        x: 150,
                        y: 151,
                        width: 6,
                        height: 13
                    },
                    "й": {
                        x: 165,
                        y: 151,
                        width: 6,
                        height: 13
                    },
                    "к": {
                        x: 179,
                        y: 151,
                        width: 5,
                        height: 13
                    },
                    "л": {
                        x: 193,
                        y: 151,
                        width: 5,
                        height: 13
                    },
                    "м": {
                        x: 207,
                        y: 151,
                        width: 7,
                        height: 13
                    },
                    "н": {
                        x: 223,
                        y: 151,
                        width: 6,
                        height: 13
                    },
                    "о": {
                        x: 237,
                        y: 151,
                        width: 6,
                        height: 13
                    },
                    "п": {
                        x: 251,
                        y: 151,
                        width: 6,
                        height: 13
                    },
                    "р": {
                        x: 265,
                        y: 151,
                        width: 6,
                        height: 13
                    },
                    "с": {
                        x: 279,
                        y: 151,
                        width: 5,
                        height: 13
                    },
                    "т": {
                        x: 293,
                        y: 151,
                        width: 5,
                        height: 13
                    },
                    "у": {
                        x: 306,
                        y: 151,
                        width: 6,
                        height: 13
                    },
                    "ф": {
                        x: 4,
                        y: 172,
                        width: 7,
                        height: 13
                    },
                    "х": {
                        x: 19,
                        y: 172,
                        width: 6,
                        height: 13
                    },
                    "ц": {
                        x: 33,
                        y: 172,
                        width: 6,
                        height: 13
                    },
                    "ч": {
                        x: 48,
                        y: 172,
                        width: 6,
                        height: 13
                    },
                    "ш": {
                        x: 62,
                        y: 172,
                        width: 9,
                        height: 13
                    },
                    "щ": {
                        x: 79,
                        y: 172,
                        width: 9,
                        height: 13
                    },
                    "ъ": {
                        x: 96,
                        y: 172,
                        width: 6,
                        height: 13
                    },
                    "ы": {
                        x: 110,
                        y: 172,
                        width: 8,
                        height: 13
                    },
                    "ь": {
                        x: 126,
                        y: 172,
                        width: 5,
                        height: 13
                    },
                    "э": {
                        x: 140,
                        y: 172,
                        width: 5,
                        height: 13
                    },
                    "ю": {
                        x: 153,
                        y: 172,
                        width: 8,
                        height: 13
                    },
                    "я": {
                        x: 170,
                        y: 172,
                        width: 5,
                        height: 13
                    },
                    "ѐ": {
                        x: 184,
                        y: 172,
                        width: 5,
                        height: 13
                    },
                    "ё": {
                        x: 197,
                        y: 172,
                        width: 5,
                        height: 13
                    },
                    "ђ": {
                        x: 210,
                        y: 172,
                        width: 5,
                        height: 13
                    },
                    "ѓ": {
                        x: 224,
                        y: 172,
                        width: 4,
                        height: 13
                    },
                    "є": {
                        x: 237,
                        y: 172,
                        width: 5,
                        height: 13
                    },
                    "ѕ": {
                        x: 250,
                        y: 172,
                        width: 4,
                        height: 13
                    },
                    "і": {
                        x: 263,
                        y: 172,
                        width: 3,
                        height: 13
                    },
                    "ї": {
                        x: 274,
                        y: 172,
                        width: 3,
                        height: 13
                    },
                    "ј": {
                        x: 285,
                        y: 172,
                        width: 3,
                        height: 13
                    },
                    "љ": {
                        x: 297,
                        y: 172,
                        width: 8,
                        height: 13
                    },
                    "њ": {
                        x: 4,
                        y: 193,
                        width: 8,
                        height: 13
                    },
                    "ћ": {
                        x: 20,
                        y: 193,
                        width: 6,
                        height: 13
                    }
                },
                width: 320,
                height: 210
            },
            id: 7
        } ],
        FrameAnimation: [ {
            name: "walk",
            type: "FrameAnimation",
            frames: [ 8, 9, 10, 11 ],
            id: 12
        }, {
            name: "run",
            type: "FrameAnimation",
            frames: [ 2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35, 38 ],
            id: 15
        }, {
            id: 23,
            name: "up",
            type: "FrameAnimation",
            frames: [ 1, 2, 3, 4, 5, 6, 7, 8 ]
        }, {
            id: 24,
            name: "left",
            type: "FrameAnimation",
            frames: [ 10, 11, 12, 13, 14, 15, 16, 17 ]
        }, {
            id: 25,
            name: "right",
            type: "FrameAnimation",
            frames: [ 28, 29, 30, 31, 32, 33, 34, 35 ]
        }, {
            id: 26,
            name: "down",
            type: "FrameAnimation",
            frames: [ 19, 20, 21, 22, 23, 24, 25, 26 ]
        }, {
            name: "idleUp",
            type: "FrameAnimation",
            frames: [ 0 ],
            id: 33
        }, {
            name: "idleDown",
            type: "FrameAnimation",
            frames: [ 18 ],
            id: 34
        }, {
            id: 35,
            name: "idleLeft",
            type: "FrameAnimation",
            frames: [ 9 ]
        }, {
            name: "idleRight",
            type: "FrameAnimation",
            frames: [ 27 ],
            id: 36
        }, {
            name: "run",
            type: "FrameAnimation",
            frames: [ 0, 1, 2, 3, 4, 5, 6, 7 ],
            id: 39
        } ],
        GameObjectProto: [ {
            id: 14,
            name: "cat",
            width: 78,
            height: 39,
            rigid: true,
            type: "GameObjectProto",
            spriteSheet: {
                id: 13,
                type: "SpriteSheet"
            },
            frameAnimations: [ {
                type: "FrameAnimation",
                id: 15
            } ],
            startFrameAnimationName: "run"
        }, {
            id: 22,
            name: "professor",
            width: 64,
            height: 64,
            rigid: true,
            type: "GameObjectProto",
            spriteSheet: {
                id: 21,
                type: "SpriteSheet"
            },
            commonBehaviour: [ {
                type: "CommonBehaviour",
                id: 29
            } ],
            currFrameIndex: "",
            frameAnimations: [ {
                type: "FrameAnimation",
                id: 23
            }, {
                type: "FrameAnimation",
                id: 24
            }, {
                type: "FrameAnimation",
                id: 25
            }, {
                type: "FrameAnimation",
                id: 26
            }, {
                type: "FrameAnimation",
                id: 33
            }, {
                type: "FrameAnimation",
                id: 34
            }, {
                type: "FrameAnimation",
                id: 35
            }, {
                type: "FrameAnimation",
                id: 36
            } ],
            startFrameAnimationName: "idleDown"
        }, {
            id: 38,
            name: "MulticolorTanks",
            width: 32,
            height: 32,
            rigid: true,
            type: "GameObjectProto",
            spriteSheet: {
                id: 37,
                type: "SpriteSheet"
            },
            frameAnimations: [ {
                type: "FrameAnimation",
                id: 39
            } ],
            startFrameAnimationName: "run"
        } ],
        GameObject: [ {
            id: 28,
            name: "professor",
            pos: {
                x: 6,
                y: 13
            },
            layerId: 2,
            type: "GameObject",
            gameObjectProto: {
                id: 22,
                type: "GameObjectProto"
            }
        }, {
            id: 30,
            name: "cat",
            pos: {
                x: 117,
                y: 18
            },
            layerId: 2,
            type: "GameObject",
            gameObjectProto: {
                id: 14,
                type: "GameObjectProto"
            }
        }, {
            id: 40,
            name: "MulticolorTanks",
            pos: {
                x: 53,
                y: 148
            },
            layerId: 2,
            type: "GameObject",
            gameObjectProto: {
                id: 38,
                type: "GameObjectProto"
            }
        }, {
            pos: {
                x: 43,
                y: 200
            },
            layerId: 2,
            type: "GameObject",
            gameObjectProto: {
                id: 38,
                type: "GameObjectProto"
            },
            id: 41
        }, {
            id: 42,
            name: "MulticolorTanks",
            pos: {
                x: 2,
                y: 117
            },
            layerId: 2,
            type: "GameObject",
            gameObjectProto: {
                id: 38,
                type: "GameObjectProto"
            }
        }, {
            id: 43,
            name: "MulticolorTanks",
            pos: {
                x: 208,
                y: 23
            },
            layerId: 2,
            type: "GameObject",
            gameObjectProto: {
                id: 38,
                type: "GameObjectProto"
            }
        }, {
            id: 44,
            name: "MulticolorTanks",
            pos: {
                x: 63,
                y: 92
            },
            layerId: 2,
            type: "GameObject",
            gameObjectProto: {
                id: 38,
                type: "GameObjectProto"
            }
        }, {
            id: 45,
            name: "MulticolorTanks",
            pos: {
                x: 268,
                y: 106
            },
            layerId: 2,
            type: "GameObject",
            gameObjectProto: {
                id: 38,
                type: "GameObjectProto"
            }
        }, {
            id: 46,
            name: "MulticolorTanks",
            pos: {
                x: 78,
                y: 52
            },
            layerId: 2,
            type: "GameObject",
            gameObjectProto: {
                id: 38,
                type: "GameObjectProto"
            }
        }, {
            id: 47,
            name: "MulticolorTanks",
            pos: {
                x: 114,
                y: 129
            },
            layerId: 2,
            type: "GameObject",
            gameObjectProto: {
                id: 38,
                type: "GameObjectProto"
            }
        }, {
            pos: {
                x: 160,
                y: 160
            },
            layerId: 2,
            type: "GameObject",
            gameObjectProto: {
                id: 38,
                type: "GameObjectProto"
            },
            id: 48
        }, {
            id: 49,
            name: "MulticolorTanks",
            pos: {
                x: 154,
                y: 164
            },
            layerId: 2,
            type: "GameObject",
            gameObjectProto: {
                id: 38,
                type: "GameObjectProto"
            }
        }, {
            id: 50,
            name: "MulticolorTanks",
            pos: {
                x: 225,
                y: 133
            },
            layerId: 2,
            type: "GameObject",
            gameObjectProto: {
                id: 38,
                type: "GameObjectProto"
            }
        }, {
            id: 51,
            name: "MulticolorTanks",
            pos: {
                x: 82,
                y: 14
            },
            layerId: 2,
            type: "GameObject",
            gameObjectProto: {
                id: 38,
                type: "GameObjectProto"
            }
        } ],
        CommonBehaviour: [ {
            id: 29,
            name: "Control4Dir",
            type: "CommonBehaviour",
            parameters: {
                velocity: 100,
                walkLeftAnimation: "left",
                walkRightAnimation: "right",
                walkUpAnimation: "up",
                walkDownAnimation: "down",
                idleLeftAnimation: "idleLeft",
                idleRightAnimation: "idleRight",
                idleUpAnimation: "idleUp",
                idleDownAnimation: "idleDown"
            }
        } ],
        undefined: [ {
            id: 52
        } ]
    });
    var u = s.repository.getObject(a.startSceneId, "Scene");
    s.runScene(u);
    if (true) window.repository = s.repository;
}, function(t, e, r) {
    "use strict";
    e.__esModule = true;
    e.Control4Dir = e.Draggable = undefined;
    var i = r(18);
    var n = s(i);
    var o = r(17);
    var a = s(o);
    function s(t) {
        return t && t.__esModule ? t : {
            default: t
        };
    }
    e.Draggable = n.default;
    e.Control4Dir = a.default;
}, function(t, e, r) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var i = r(19);
    var n = s(i);
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
    var c = function(t) {
        h(e, t);
        function e(r) {
            u(this, e);
            return f(this, t.call(this, r));
        }
        e.prototype.manage = function e(r, i) {
            t.prototype.manage.call(this, r, i);
        };
        e.prototype.onUpdate = function t() {
            var e = this.game._keyboard;
            var r = this.parameters;
            var i = this.gameObject;
            if (e.isPressed(a.default.KEY_UP)) {
                i.vel.y = -r.velocity;
                this.go("Up");
            }
            if (e.isPressed(a.default.KEY_DOWN)) {
                i.vel.y = r.velocity;
                this.go("Down");
            }
            if (e.isPressed(a.default.KEY_LEFT)) {
                i.vel.x = -r.velocity;
                this.go("Left");
            }
            if (e.isPressed(a.default.KEY_RIGHT)) {
                i.vel.x = r.velocity;
                this.go("Right");
            }
            if (e.isJustReleased(a.default.KEY_LEFT)) {
                this.stop();
            } else if (e.isJustReleased(a.default.KEY_RIGHT)) {
                this.stop("Right");
            } else if (e.isJustReleased(a.default.KEY_UP)) {
                this.stop("Up");
            } else if (e.isJustReleased(a.default.KEY_DOWN)) {
                this.stop("Down");
            }
        };
        return e;
    }(n.default);
    e.default = c;
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
            i.lastDirection = null;
            i.game = r;
            return i;
        }
        e.prototype.manage = function t(e, r) {
            var i = this;
            this.gameObject = e;
            this.parameters = r;
            this.animations = {};
            var n = [ "Left", "Right", "Up", "Down" ];
            n.forEach(function(t) {
                var e = "walk" + t + "Animation", n = "idle" + t + "Animation";
                i.animations[e] = i.gameObject.frameAnimations.find(function(t) {
                    return t.name == r[e];
                });
                if (!i.animations[e]) throw "can not find animation " + r[e] + " at gameObject " + i.gameObject.name;
                r[n] && (i.animations[n] = i.gameObject.frameAnimations.find(function(t) {
                    return t.name == r[n];
                }));
            });
        };
        e.prototype.stop = function t() {
            this.gameObject.stopFrAnimations();
            this.gameObject.vel.x = 0;
            this.gameObject.vel.y = 0;
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
    }(n.default);
    e.default = f;
}, function(t, e, r) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var i = r(1);
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
        t.prototype.manage = function t(e, r, n) {
            if (e.pos.x == r && e.pos.y == n) return;
            if (!e.rigid) {
                e.pos.x = r;
                e.pos.y = n;
                return;
            } else {}
            var o = false;
            var a = this.game.getCurrScene().getAllGameObjects();
            for (var s = 0, u = a.length; s < u; s++) {
                var f = a[s];
                if (e == f) continue;
                var h = e.getRect();
                h.x = r;
                h.y = n;
                if ((0, i.isRectIntersectRect)(h, f.getRect())) {
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
                e.pos.y = n;
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
    var i = r(1);
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
    var s = "ontouchstart" in window;
    var u = function() {
        function t(e) {
            a(this, t);
            this.objectsCaptured = {};
            this.game = e;
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
            var i = this.game;
            var o = i.getCurrScene();
            if (!o) return;
            var a = this.resolveScreenPoint(e);
            t: for (var s = 0; s < o.layers.length; s++) {
                var u = o.layers[o.layers.length - 1 - s];
                for (var f = 0; f < u.gameObjects.length; f++) {
                    var h = u.gameObjects[f];
                    if (n.default.isPointInRect(a, h.getRect())) {
                        h.trigger(r, {
                            screenX: a.x,
                            screenY: a.y,
                            objectX: a.x - h.pos.x,
                            objectY: a.y - h.pos.y,
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
            var i = this.objectsCaptured[r.id];
            if (i && i != r.object) {
                i.trigger("mouseLeave");
                delete this.objectsCaptured[r.id];
            }
            if (r.object && i != r.object) {
                r.object.trigger("mouseEnter");
                this.objectsCaptured[r.id] = r.object;
            }
        };
        t.prototype.resolveMouseUp = function t(e) {
            if (1 && window.canceled) return;
            var r = this.triggerEvent(e, "mouseUp");
            if (!r) return;
            var i = this.objectsCaptured[r.id];
            if (!i) return;
            i.trigger("mouseUp");
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
            if (typeof e == "string") {
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
    e.default = undefined;
    var i, n;
    r(25);
    var o = r(27);
    var a = v(o);
    var s = r(36);
    var u = v(s);
    var f = r(21);
    var h = v(f);
    var c = r(7);
    var l = v(c);
    var d = r(20);
    var p = v(d);
    var y = r(8);
    var m = r(12);
    var g = v(m);
    function v(t) {
        return t && t.__esModule ? t : {
            default: t
        };
    }
    function w(t, e) {
        if (!(t instanceof e)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    function _(t, e) {
        if (!t) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return e && (typeof e === "object" || typeof e === "function") ? e : t;
    }
    function b(t, e) {
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
    var x = (i = (0, y.Transient)({
        repository: true
    }), i(n = function(t) {
        b(e, t);
        function e(r) {
            w(this, e);
            var i = _(this, t.call(this));
            i._lastTime = null;
            i._currTime = null;
            i._currentScene = null;
            i._running = false;
            i.scale = {
                x: 1,
                y: 1
            };
            i.pos = {
                x: 0,
                y: 0
            };
            Object.keys(r).forEach(function(t) {
                i[t] = r[t];
            });
            var n = Date.now();
            i._lastTime = i._currTime = n;
            i._deltaTime = 0;
            i.repository = new u.default(i);
            i._mouse = new h.default(i);
            i._keyboard = new l.default(i);
            i._keyboard.listenTo();
            i._collider = new p.default(i);
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
            if (!this._renderer) {
                this._renderer = a.default.getRenderer(this);
                this._mouse.listenTo(this._renderer.container);
            }
            this._currentScene = i;
            if (true) {
                var o = r(49);
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
    }(g.default)) || n);
    e.default = x;
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
    e.default = n;
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
            this.renderableCache = {};
            this.container = null;
            this.game = e;
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
    e.default = n;
}, function(t, e, r) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var i = r(35);
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
    var i = r(10);
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
    var i = r(9);
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
}, function(t, e, r) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var i = r(11);
    var n = y(i);
    var o = r(2);
    var a = y(o);
    var s = r(3);
    var u = y(s);
    var f = r(4);
    var h = y(f);
    var c = r(5);
    var l = y(c);
    var d = r(14);
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
    var g = function() {
        function t(e, r) {
            m(this, t);
            this.gl = e;
            this.plane = new n.default();
            this.program = new a.default(e, [ l.default, p.default ]);
            this.posVertexBuffer = new u.default(e);
            this.posIndexBuffer = new h.default(e);
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
    e.default = g;
}, function(t, e, r) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var i = r(2);
    var n = d(i);
    var o = r(3);
    var a = d(o);
    var s = r(4);
    var u = d(s);
    var f = r(50);
    var h = d(f);
    var c = r(52);
    var l = d(c);
    function d(t) {
        return t && t.__esModule ? t : {
            default: t
        };
    }
    function p(t, e) {
        if (!(t instanceof e)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    var y = function() {
        function t(e, r) {
            p(this, t);
            this.gl = e;
            this.program = new n.default(e, [ h.default, l.default ]);
            this.posVertexBuffer = new a.default(e);
            this.texVertexBuffer = new a.default(e);
            this.normalBuffer = new a.default(e);
            this.posIndexBuffer = new u.default(e);
            this.program.bind();
        }
        t.prototype.bind = function t(e) {
            this.program.bind();
            var r = this.gl;
            var i = this.program;
            this.posVertexBuffer.setData(e.vertexArr, r.FLOAT, 3);
            i.bindBuffer(this.posVertexBuffer, "a_position");
            this.texVertexBuffer.setData(e.texCoordArr, r.FLOAT, 2);
            i.bindBuffer(this.texVertexBuffer, "a_texcoord");
            this.normalBuffer.setData(e.normalArr, r.FLOAT, 3);
            i.bindBuffer(this.normalBuffer, "a_normal");
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
    e.default = y;
}, function(t, e, r) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var i = r(2);
    var n = c(i);
    var o = r(3);
    var a = c(o);
    var s = r(5);
    var u = c(s);
    var f = r(14);
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
            this.gl = e;
            this.program = new n.default(e, [ u.default, h.default ]);
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
    e.default = d;
}, function(t, e, r) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var i = r(11);
    var n = y(i);
    var o = r(2);
    var a = y(o);
    var s = r(3);
    var u = y(s);
    var f = r(4);
    var h = y(f);
    var c = r(5);
    var l = y(c);
    var d = r(51);
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
    var g = function() {
        function t(e) {
            m(this, t);
            this.gl = e;
            this.plane = new n.default();
            this.program = new a.default(e, [ l.default, p.default ]);
            this.posVertexBuffer = new u.default(e);
            this.posIndexBuffer = new h.default(e);
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
    e.default = g;
}, function(t, e, r) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var i = r(26);
    var n = b(i);
    var o = r(34);
    var a = b(o);
    var s = r(31);
    var u = b(s);
    var f = r(33);
    var h = b(f);
    var c = r(32);
    var l = b(c);
    var d = r(28);
    var p = b(d);
    var y = r(29);
    var m = b(y);
    var g = r(9);
    var v = b(g);
    var w = r(10);
    var _ = b(w);
    function b(t) {
        return t && t.__esModule ? t : {
            default: t
        };
    }
    function x(t, e) {
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
    var T = function t(e) {
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
    var j = 1e3;
    var R = new m.default();
    var F = function t(e, r, i, n, o, a, s, u) {
        var f = v.default.makeZToWMatrix(1);
        var h = v.default.ortho(0, o, 0, a, -j, j);
        var c = v.default.makeScale(i * s, n * u, 1);
        var l = v.default.makeTranslation(e * s, r * u, 0);
        var d = v.default.matrixMultiply(c, l);
        d = v.default.matrixMultiply(d, R.getCurrentMatrix());
        d = v.default.matrixMultiply(d, h);
        d = v.default.matrixMultiply(d, f);
        return d;
    };
    var A = function t(e, r, i, n, o, a) {
        var s = v.default.makeScale(i / o, n / a, 1);
        var u = v.default.makeTranslation(e / o, r / a, 0);
        return v.default.matrixMultiply(s, u);
    };
    var P = function(t) {
        E(e, t);
        function e(r) {
            x(this, e);
            var i = O(this, t.call(this, r));
            var n = document.createElement("canvas");
            document.body.appendChild(n);
            n.setAttribute("width", r.width);
            n.setAttribute("height", r.height);
            i.container = n;
            i.matrixStack = R;
            i.registerResize();
            i.currTex = null;
            i._init();
            return i;
        }
        e.prototype._init = function t() {
            var e = T(this.container);
            this.gl = e;
            this.spriteRectDrawer = new a.default(e);
            this.colorRectDrawer = new u.default(e);
            this.polyLineDrawer = new h.default(e);
            this.modelDrawer = new l.default(e);
            this.frameBuffer = new p.default(e, this.game.width, this.game.height);
            e.blendFunc(e.SRC_ALPHA, e.ONE_MINUS_SRC_ALPHA);
            e.enable(e.BLEND);
            e.enable(e.BLEND);
        };
        e.prototype.draw = function t(e) {
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
            this.gl.blendFunc(this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA);
            var u = this.renderableCache[e];
            var f = u.getSize().width;
            var h = u.getSize().height;
            if (a === undefined) {
                a = r;
            }
            if (s === undefined) {
                s = i;
            }
            if (n === undefined) {
                n = f;
            }
            if (o === undefined) {
                o = h;
            }
            if (this.currTex != u) {
                u.bind();
                this.currTex = u;
            }
            this.spriteRectDrawer.bind();
            this.spriteRectDrawer.setUniform("u_textureMatrix", A(r, i, n, o, f, h));
            this.spriteRectDrawer.setUniform("u_matrix", F(a, s, n, o, this.game.width, this.game.height, 1, 1));
            this.spriteRectDrawer.setUniform("u_alpha", 1);
            this.spriteRectDrawer.draw();
            this.spriteRectDrawer.unbind();
        };
        e.prototype.fillRect = function t(e, r, i, n, o) {};
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
            var r = e.r, i = e.g, n = e.b;
            this.gl.clearColor(r / 255, i / 255, n / 255, 1);
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
            this.spriteRectDrawer.setUniform("u_textureMatrix", A(0, 0, this.game.width, this.game.height, this.game.width, this.game.height));
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
            var i = this;
            var n = new Image();
            n.src = e;
            n.onload = function() {
                var t = new _.default(i.gl);
                t.setImage(n);
                i.renderableCache[e] = t;
                r();
            };
        };
        return e;
    }(n.default);
    e.default = P;
}, function(t, e, r) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var i = r(38);
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
    e.default = undefined;
    var i = r(1);
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
            var i = {};
            Object.keys(e.from).forEach(function(t) {
                i[t] = true;
            });
            Object.keys(e.to).forEach(function(t) {
                i[t] = true;
            });
            this.propsToChange = Object.keys(i);
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
            var i = this.propsToChange.length;
            while (i--) {
                var o = this.propsToChange[i];
                this.obj[o] = n.default.ease[this.easeFnName](r, this.desc.from[o], this.desc.to[o] - this.desc.from[o], this.tweenTime);
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
    var i = r(41);
    var n = T(i);
    var o = r(47);
    var a = T(o);
    var s = r(13);
    var u = T(s);
    var f = r(42);
    var h = T(f);
    var c = r(39);
    var l = T(c);
    var d = r(44);
    var p = T(d);
    var y = r(45);
    var m = T(y);
    var g = r(46);
    var v = T(g);
    var w = r(40);
    var _ = T(w);
    var b = r(43);
    var x = T(b);
    var O = r(48);
    var E = T(O);
    function T(t) {
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
    e.TextField = E.default;
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
            i.fontColor = null;
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
    var i = r(13);
    var n = u(i);
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
                if (r.gameObjectProto[t] == undefined) return;
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
            r.object = this;
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
    var n = s(i);
    var o = r(24);
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
    var c = function(t) {
        h(e, t);
        function e(r) {
            u(this, e);
            var i = f(this, t.call(this, r));
            i.type = "Scene";
            i.alpha = 1;
            i.layers = [];
            i.useBG = false;
            i.colorBG = {
                r: 255,
                g: 255,
                b: 255
            };
            i._tweenMovies = [];
            i._individualBehaviour = null;
            i.tileMap = {
                spriteSheet: null,
                width: 0,
                height: 0,
                data: []
            };
            return i;
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
            var i = this.getAllSpriteSheets().concat(this.game.repository.getArray("Font"));
            var n = new a.default();
            n.onResolved = function() {
                e && e();
            };
            i.forEach(function(t) {
                n.addTask(function() {
                    r.game._renderer.loadTextureInfo(t.resourcePath, function() {
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
            this.game._renderer.beginFrameBuffer();
            if (this.useBG) this.game._renderer.clearColor(this.colorBG); else this.game._renderer.clear();
            var i = this.layers;
            var n = this.layers.length;
            var o = n - 1;
            if (this._individualBehaviour) this._individualBehaviour.onUpdate();
            while (n--) {
                i[n - o].update(e, r);
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
        e.prototype.tween = function t(e, r, i, n) {};
        e.prototype._render = function t() {};
        e.prototype.getTileAt = function t(e, r) {
            if (!this.tileMap._spriteSheet) return null;
            var i = ~~(e / this.tileMap._spriteSheet._frameWidth);
            var n = ~~(r / this.tileMap._spriteSheet._frameHeight);
            return this.tileMap.data[n] && this.tileMap.data[n][i];
        };
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
    e.default = c;
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
            i.rigid = false;
            return i;
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
            var i = 0;
            this.height = this.font.fontContext.symbols[" "].height;
            for (var n = 0, o = e.length; n < o; n++) {
                this._chars.push(e[n]);
                var a = this.font.fontContext.symbols[e[n]] || this.font.fontContext.symbols[" "];
                if (e[n] == "\n") {
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
            var i = 0;
            this._chars.forEach(function(t) {
                var n = e.font.fontContext.symbols[t] || e.font.fontContext.symbols["?"];
                if (t == "\n") {
                    r = 0;
                    i += n.height;
                    return;
                }
                e.game._renderer.drawImage(e.font.resourcePath, n.x, n.y, n.width, n.height, e.pos.x + r, e.pos.y + i);
                r += n.width;
            });
        };
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
    var n = e.CatBehaviour = function() {
        function t() {
            i(this, t);
        }
        t.prototype.onCreate = function t() {
            this.object.vel.x = -100;
        };
        t.prototype.onUpdate = function t() {
            if (this.object.pos.x < -100) this.object.pos.x = 700;
        };
        t.prototype.onDestroy = function t() {};
        return t;
    }();
    var o = e.MainSceneBehaviour = function() {
        function t() {
            i(this, t);
        }
        t.prototype.onCreate = function t() {};
        t.prototype.onUpdate = function t() {};
        t.prototype.onDestroy = function t() {};
        return t;
    }();
    var a = e.MulticolorTanksBehaviour = function() {
        function t() {
            i(this, t);
        }
        t.prototype.onCreate = function t() {
            this.object.vel.x = 10;
        };
        t.prototype.onUpdate = function t() {};
        t.prototype.onDestroy = function t() {};
        return t;
    }();
    var s = e.ProfessorBehaviour = function() {
        function t() {
            i(this, t);
        }
        t.prototype.onCreate = function t() {};
        t.prototype.onUpdate = function t() {};
        t.prototype.onDestroy = function t() {};
        return t;
    }();
}, function(t, e) {
    t.exports = "attribute vec4 a_position;\r\nattribute vec2 a_texcoord;\r\nattribute vec3 a_normal;\r\n\r\nuniform mat4 u_modelMatrix;\r\nuniform mat4 u_projectionMatrix;\r\n\r\nvarying vec2 v_texcoord;\r\nvarying vec3 v_normal;\r\n\r\nvoid main() {\r\n\r\n  gl_Position = u_projectionMatrix * u_modelMatrix * a_position;\r\n  v_texcoord = a_texcoord;\r\n  v_normal = a_normal;\r\n}";
}, function(t, e) {
    t.exports = "precision mediump float;\n\nvarying vec2 v_texcoord;\n\nuniform sampler2D texture;\nuniform float u_alpha;\n\n\nvoid main() {\n    gl_FragColor = texture2D(texture, v_texcoord);\n    gl_FragColor.a *= u_alpha;\n}";
}, function(t, e) {
    t.exports = "precision highp float;\r\n\r\nvarying vec2 v_texcoord;\r\nvarying vec3 v_normal;\r\n\r\nuniform sampler2D texture;\r\nuniform float u_alpha;\r\nuniform mat4 u_modelMatrix;\r\n\r\n\r\nvoid main() {\r\n\r\n    vec3 lightDirection = normalize(vec3(-1,-1,1));\r\n    vec3 normalized = normalize((u_modelMatrix * vec4(v_normal,0)).xyz);\r\n    float lightFactor = max(0.5,dot(lightDirection,normalized));\r\n    gl_FragColor = texture2D(texture, v_texcoord);\r\n    gl_FragColor.rgb *= lightFactor;\r\n    gl_FragColor.a *= u_alpha;\r\n}";
}, function(t, e, r) {
    t.exports = r(15);
} ]);