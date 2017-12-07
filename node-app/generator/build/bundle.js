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
    return n(n.s = 65);
})([ function(t, e, n) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var r, i;
    var o = n(12);
    var a = d(o);
    var s = n(47);
    var u = d(s);
    var f = n(30);
    var h = d(f);
    var c = n(8);
    var l = n(33);
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
    var v = (r = (0, c.Transient)({
        game: true,
        rigidBody: true
    }), r(i = function(t) {
        g(e, t);
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
            r._emitter = new h.default();
            r.rigidBody = new p.default(r);
            return r;
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
    e.default = v;
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
    var r, i;
    function o(t, e) {
        if (!(t instanceof e)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    var a = function t(e, n, r) {
        if (true) {
            if (!n) throw "can not compile shader: shader source not specified for type " + r;
        }
        var i = e.createShader(r);
        e.shaderSource(i, n);
        e.compileShader(i);
        var o = e.getShaderParameter(i, e.COMPILE_STATUS);
        if (!o) {
            var a = e.getShaderInfoLog(i);
            e.deleteShader(i);
            if (true) {
                throw "Error compiling shader " + i + ":" + a;
            } else {
                throw a;
            }
        }
        return i;
    };
    var s = function t(e, n) {
        var r = e.createProgram();
        n.forEach(function(t) {
            e.attachShader(r, t);
        });
        e.linkProgram(r);
        var i = e.getProgramParameter(r, e.LINK_STATUS);
        if (!i) {
            var o = e.getProgramInfoLog(r);
            e.deleteProgram(r);
            if (true) {
                throw "Error in program linking:" + o;
            } else {
                throw o;
            }
        }
        return r;
    };
    var u = function t(e, n) {
        var r = null;
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
        if (!r) {
            var o = Object.keys(i);
            r = {};
            for (var a = 0; a < o.length; ++a) {
                var s = o[a];
                r[e[s]] = i[s];
            }
        }
        return r[n];
    };
    var f = function t(e, n) {
        var r = {};
        var i = e.getProgramParameter(n, e.ACTIVE_UNIFORMS);
        for (var o = 0; o < i; o++) {
            var a = e.getActiveUniform(n, o);
            var s = a.name.replace(/\[.*?]/, "");
            var f = u(e, a.type);
            r[s] = {
                type: f,
                size: a.size,
                name: s,
                location: e.getUniformLocation(n, s),
                setter: h(a.size, f)
            };
        }
        return r;
    };
    var h = function t(e, n) {
        if (e === 1) {
            switch (n) {
              case "float":
                return function(t, e, n) {
                    t.uniform1f(e, n);
                };

              case "vec2":
                return function(t, e, n) {
                    t.uniform2f(e, n[0], n[1]);
                };

              case "vec3":
                return function(t, e, n) {
                    t.uniform3f(e, n[0], n[1], n[2]);
                };

              case "vec4":
                return function(t, e, n) {
                    t.uniform4f(e, n[0], n[1], n[2], n[3]);
                };

              case "int":
                return function(t, e, n) {
                    t.uniform1i(e, n);
                };

              case "ivec2":
                return function(t, e, n) {
                    t.uniform2i(e, n[0], n[1]);
                };

              case "ivec3":
                return function(t, e, n) {
                    t.uniform3i(e, n[0], n[1], n[2]);
                };

              case "ivec4":
                return function(t, e, n) {
                    t.uniform4i(e, n[0], n[1], n[2], n[3]);
                };

              case "bool":
                return function(t, e, n) {
                    t.uniform1i(e, n);
                };

              case "bvec2":
                return function(t, e, n) {
                    t.uniform2i(e, n[0], n[1]);
                };

              case "bvec3":
                return function(t, e, n) {
                    t.uniform3i(e, n[0], n[1], n[2]);
                };

              case "bvec4":
                return function(t, e, n) {
                    t.uniform4i(e, n[0], n[1], n[2], n[3]);
                };

              case "mat2":
                return function(t, e, n) {
                    t.uniformMatrix2fv(e, false, n);
                };

              case "mat3":
                return function(t, e, n) {
                    t.uniformMatrix3fv(e, false, n);
                };

              case "mat4":
                return function(t, e, n) {
                    t.uniformMatrix4fv(e, false, n);
                };

              case "sampler2D":
                return function(t, e, n) {
                    t.uniform1i(e, n);
                };
            }
        } else {
            switch (n) {
              case "float":
                return function(t, e, n) {
                    t.uniform1fv(e, n);
                };

              case "vec2":
                return function(t, e, n) {
                    t.uniform2fv(e, n);
                };

              case "vec3":
                return function(t, e, n) {
                    t.uniform3fv(e, n);
                };

              case "vec4":
                return function(t, e, n) {
                    t.uniform4fv(e, n);
                };

              case "int":
                return function(t, e, n) {
                    t.uniform1iv(e, n);
                };

              case "ivec2":
                return function(t, e, n) {
                    t.uniform2iv(e, n);
                };

              case "ivec3":
                return function(t, e, n) {
                    t.uniform3iv(e, n);
                };

              case "ivec4":
                return function(t, e, n) {
                    t.uniform4iv(e, n);
                };

              case "bool":
                return function(t, e, n) {
                    t.uniform1iv(e, n);
                };

              case "bvec2":
                return function(t, e, n) {
                    t.uniform2iv(e, n);
                };

              case "bvec3":
                return function(t, e, n) {
                    t.uniform3iv(e, n);
                };

              case "bvec4":
                return function(t, e, n) {
                    t.uniform4iv(e, n);
                };

              case "sampler2D":
                return function(t, e, n) {
                    t.uniform1iv(e, n);
                };
            }
        }
    };
    var c = (i = r = function() {
        function t(e, n) {
            o(this, t);
            var r = a(e, n[0], e.VERTEX_SHADER);
            var i = a(e, n[1], e.FRAGMENT_SHADER);
            this.program = s(e, [ r, i ]);
            this.uniforms = f(e, this.program);
            this.gl = e;
        }
        t.prototype.getProgram = function t() {
            return this.program;
        };
        t.prototype.bind = function e() {
            this.gl.useProgram(this.program);
            t.currentProgram = this;
        };
        t.prototype.setUniform = function t(e, n) {
            var r = this.uniforms[e];
            if (1 && !r) throw "no uniform with name " + e + " found!";
            r.setter(this.gl, r.location, n);
        };
        t.prototype.bindBuffer = function t(e, n) {
            this.gl.bindBuffer(this.gl.ARRAY_BUFFER, e.getGlBuffer());
            var r = this.gl.getAttribLocation(this.program, n);
            if (!n) throw "can not found uniform location: uniformLocationName not defined";
            if (r < 0) throw "can not found uniform location for " + n;
            this.gl.enableVertexAttribArray(r);
            this.gl.vertexAttribPointer(r, e.getItemSize(), e.getItemType(), false, 0, 0);
            this.gl.bindBuffer(this.gl.ARRAY_BUFFER, null);
        };
        return t;
    }(), r.currentProgram = null, i);
    e.default = c;
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
            if (1 && !e) throw "can not create VertexBuffer, gl context not passed to constructor, expected: VertexBuffer(gl)";
            this.gl = e;
            this.buffer = e.createBuffer();
            this.bufferItemSize = null;
            this.bufferItemType = null;
            this.dataLength = null;
        }
        t.prototype.setData = function t(e, n, r) {
            if (true) {
                if (!e) throw "can not set data to buffer: bufferData not specified";
                if (!n) throw "can not set data to buffer: itemType not specified";
                if (!r) throw "can not set data to buffer: itemSize not specified";
            }
            var i = this.gl;
            i.bindBuffer(i.ARRAY_BUFFER, this.buffer);
            i.bufferData(i.ARRAY_BUFFER, new Float32Array(e), i.STATIC_DRAW);
            i.bindBuffer(i.ARRAY_BUFFER, null);
            this.bufferItemSize = r;
            this.bufferItemType = n;
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
            if (1 && !e) throw "can not create IndexBuffer, gl context not passed to constructor, expected: IndexBuffer(gl)";
            this.gl = e;
            this.buffer = e.createBuffer();
            this.dataLength = null;
        }
        t.prototype.setData = function t(e) {
            if (true) {
                if (!e) throw "can not set data to buffer: bufferData not specified";
            }
            var n = this.gl;
            this.dataLength = e.length;
            n.bindBuffer(n.ELEMENT_ARRAY_BUFFER, this.buffer);
            n.bufferData(n.ELEMENT_ARRAY_BUFFER, new Uint16Array(e), n.STATIC_DRAW);
            n.bindBuffer(n.ELEMENT_ARRAY_BUFFER, null);
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
        t.prototype.onUpdate = function t() {
            console.error(this);
            if (true) throw "BaseAbstractBehaviour: method 'onUpdate' not implemented";
        };
        return t;
    }();
    e.default = i;
}, function(t, e, n) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var r = n(6);
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
    e.makeIdentity = function() {
        return [ 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1 ];
    };
    e.makeZToWMatrix = function(t) {
        return [ 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, t, 0, 0, 0, 1 ];
    };
    e.make2DProjection = function(t, e, n) {
        return [ 2 / t, 0, 0, 0, 0, -2 / e, 0, 0, 0, 0, 2 / n, 0, -1, 1, 0, 1 ];
    };
    e.ortho = function(t, e, n, r, i, o) {
        var a = 1 / (t - e), s = 1 / (n - r), u = 1 / (i - o);
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
        f[13] = (r + n) * s;
        f[14] = (o + i) * u;
        f[15] = 1;
        return f;
    };
    e.perspective = function(t, e, n, r) {
        var i = 1 / Math.tan(t / 2), o = 1 / (n - r);
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
        a[10] = (r + n) * o;
        a[11] = -1;
        a[12] = 0;
        a[13] = 0;
        a[14] = 2 * r * n * o;
        a[15] = 0;
        return a;
    };
    e.makeTranslation = function(t, e, n) {
        return [ 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, t, e, n, 1 ];
    };
    e.makeXRotation = function(t) {
        var e = Math.cos(t);
        var n = Math.sin(t);
        return [ 1, 0, 0, 0, 0, e, n, 0, 0, -n, e, 0, 0, 0, 0, 1 ];
    };
    e.makeYRotation = function(t) {
        var e = Math.cos(t);
        var n = Math.sin(t);
        return [ e, 0, -n, 0, 0, 1, 0, 0, n, 0, e, 0, 0, 0, 0, 1 ];
    };
    e.makeZRotation = function(t) {
        var e = Math.cos(t);
        var n = Math.sin(t);
        return [ e, n, 0, 0, -n, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1 ];
    };
    e.makeScale = function(t, e, n) {
        return [ t, 0, 0, 0, 0, e, 0, 0, 0, 0, n, 0, 0, 0, 0, 1 ];
    };
    e.matrixMultiply = function(t, e) {
        var n = t[0 * 4 + 0];
        var r = t[0 * 4 + 1];
        var i = t[0 * 4 + 2];
        var o = t[0 * 4 + 3];
        var a = t[1 * 4 + 0];
        var s = t[1 * 4 + 1];
        var u = t[1 * 4 + 2];
        var f = t[1 * 4 + 3];
        var h = t[2 * 4 + 0];
        var c = t[2 * 4 + 1];
        var l = t[2 * 4 + 2];
        var p = t[2 * 4 + 3];
        var d = t[3 * 4 + 0];
        var y = t[3 * 4 + 1];
        var m = t[3 * 4 + 2];
        var g = t[3 * 4 + 3];
        var v = e[0 * 4 + 0];
        var w = e[0 * 4 + 1];
        var b = e[0 * 4 + 2];
        var _ = e[0 * 4 + 3];
        var x = e[1 * 4 + 0];
        var O = e[1 * 4 + 1];
        var E = e[1 * 4 + 2];
        var T = e[1 * 4 + 3];
        var j = e[2 * 4 + 0];
        var R = e[2 * 4 + 1];
        var P = e[2 * 4 + 2];
        var M = e[2 * 4 + 3];
        var F = e[3 * 4 + 0];
        var S = e[3 * 4 + 1];
        var B = e[3 * 4 + 2];
        var A = e[3 * 4 + 3];
        return [ n * v + r * x + i * j + o * F, n * w + r * O + i * R + o * S, n * b + r * E + i * P + o * B, n * _ + r * T + i * M + o * A, a * v + s * x + u * j + f * F, a * w + s * O + u * R + f * S, a * b + s * E + u * P + f * B, a * _ + s * T + u * M + f * A, h * v + c * x + l * j + p * F, h * w + c * O + l * R + p * S, h * b + c * E + l * P + p * B, h * _ + c * T + l * M + p * A, d * v + y * x + m * j + g * F, d * w + y * O + m * R + g * S, d * b + y * E + m * P + g * B, d * _ + y * T + m * M + g * A ];
    };
}, function(t, e, n) {
    "use strict";
    e.__esModule = true;
    function r(t, e) {
        if (!(t instanceof e)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    var i = function t(e) {
        return (e & e - 1) == 0;
    };
    var o = function() {
        function t(e) {
            r(this, t);
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
        t.prototype.setImage = function t(e, n, r) {
            if (true) {
                if (!(e || n || r)) throw "texture.setImage: if image is null, width and height must be specified: tex.setImage(null,w,h)";
            }
            var o = this.gl;
            if (e) this.size = {
                width: e.width,
                height: e.height
            }; else this.size = {
                width: n,
                height: r
            };
            this.bind();
            o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL, true);
            if (e) {
                o.texImage2D(o.TEXTURE_2D, 0, o.RGBA, o.RGBA, o.UNSIGNED_BYTE, e);
            } else {
                o.texImage2D(o.TEXTURE_2D, 0, o.RGBA, n, r, 0, o.RGBA, o.UNSIGNED_BYTE, null);
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
}, function(t, e, n) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var r = n(40);
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
        function e() {
            a(this, e);
            var n = s(this, t.call(this));
            n.vertexArr = [ 0, 0, 0, 1, 1, 0, 1, 1 ];
            n.indexArr = [ 0, 1, 2, 3 ];
            n.texCoordArr = [ 0, 0, 0, 1, 1, 0, 1, 1 ];
            return n;
        }
        return e;
    }(i.default);
    e.default = f;
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
                var h = void 0;
                if (n.indexOf(e[f]) > -1) {
                    h = e[f];
                } else {
                    n.push(e);
                    h = t(e[f], n);
                    n.push(e[f]);
                }
                u[f] = h;
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
                            if (a(n)) e[t].push(n);
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
            this.rigidBody.update(n, r);
            this.game._renderer.draw(this);
            if (this._individualBehaviour) this._individualBehaviour.onUpdate(n, r);
            for (var i = 0, o = this.commonBehaviour.length; i < o; i++) {
                this.commonBehaviour[i].onUpdate(n, r);
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
        return e;
    }(i.default);
    e.default = f;
}, function(t, e) {
    t.exports = "precision mediump float;\n\nvarying vec2 v_texcoord;\n\nuniform sampler2D texture;\nuniform float u_alpha;\nuniform vec4 u_rgba;\n\nvoid main() {\n    gl_FragColor = u_rgba;\n}";
}, function(t, e, n) {
    "use strict";
    var r = n(31);
    var i = f(r);
    var o = n(60);
    var a = f(o);
    var s = n(61);
    var u = f(s);
    function f(t) {
        return t && t.__esModule ? t : {
            default: t
        };
    }
    var h = JSON.parse(a.default);
    var c = JSON.parse(u.default);
    if (1 && h.startSceneId === undefined) throw "start scene not specified";
    var l = new i.default(h);
    l.repository.setDescriptions(c);
    var p = l.repository.getObject(h.startSceneId, "Scene");
    l.runScene(p);
    if (true) window.repository = l.repository;
}, function(t, e, n) {
    "use strict";
    e.__esModule = true;
    e.PlatformBehaviour = e.MainSceneBehaviour = e.DudeBehaviour = undefined;
    var r = n(18);
    var i = n(19);
    var o = n(20);
    e.DudeBehaviour = r.DudeBehaviour;
    e.MainSceneBehaviour = i.MainSceneBehaviour;
    e.PlatformBehaviour = o.PlatformBehaviour;
}, function(t, e, n) {
    "use strict";
    e.__esModule = true;
    function r(t, e) {
        if (!(t instanceof e)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    var i = e.DudeBehaviour = function() {
        function t() {
            r(this, t);
        }
        t.prototype.onCreate = function t() {
            this.game.camera.followTo(this.gameObject);
        };
        t.prototype.onUpdate = function t() {
            if (this.game.keyboard.isJustPressed(this.game.keyboard.KEY.UP)) {
                if (this.gameObject.rigidBody.onFloor) this.gameObject.rigidBody.vel.add(0, -340);
            }
            if (this.game.keyboard.isJustPressed(this.game.keyboard.KEY.A)) {
                console.log("pr");
                this.gameObject.rigidBody.vel.add(0, -50);
            }
        };
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
    function r(t, e) {
        if (!(t instanceof e)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    var i = e.PlatformBehaviour = function() {
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
}, function(t, e, n) {
    "use strict";
    e.__esModule = true;
    e.Control2Dir = e.Control4Dir = e.Draggable = undefined;
    var r = n(24);
    var i = f(r);
    var o = n(23);
    var a = f(o);
    var s = n(22);
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
    var r = n(25);
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
    var r = n(26);
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
    var r = n(6);
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
    var o = n(7);
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
    var c = (i = r = function(t) {
        h(e, t);
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
    e.default = c;
}, function(t, e, n) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var r, i;
    var o = n(7);
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
    var c = (i = r = function(t) {
        h(e, t);
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
    e.default = c;
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
            return this.buffer[e] > s;
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
                var e = t.touches.length;
                while (e--) {
                    n.resolveMouseMove(t.touches[e]);
                }
            };
            e.onmousemove = function(t) {
                n.resolveMouseMove(t);
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
        t.prototype.triggerEvent = function t(e, n) {
            var r = this.game;
            var o = r.getCurrScene();
            if (!o) return;
            var a = this.resolveScreenPoint(e);
            t: for (var s = 0; s < o.layers.length; s++) {
                var u = o.layers[o.layers.length - 1 - s];
                for (var f = 0; f < u.gameObjects.length; f++) {
                    var h = u.gameObjects[f];
                    if (i.default.isPointInRect(a, h.getRect())) {
                        h.trigger(n, {
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
            o.trigger(n, {
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
            var n = this.triggerEvent(e, "mouseMove");
            if (!n) return;
            var r = this.objectsCaptured[n.id];
            if (r && r !== n.object) {
                r.trigger("mouseLeave");
                delete this.objectsCaptured[n.id];
            }
            if (n.object && r !== n.object) {
                n.object.trigger("mouseEnter");
                this.objectsCaptured[n.id] = n.object;
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
    e.default = undefined;
    var r, i;
    n(35);
    var o = n(37);
    var a = b(o);
    var s = n(46);
    var u = b(s);
    var f = n(29);
    var h = b(f);
    var c = n(28);
    var l = b(c);
    var p = n(34);
    var d = b(p);
    var y = n(8);
    var m = n(12);
    var g = b(m);
    var v = n(27);
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
    var E = (r = (0, y.Transient)({
        repository: true,
        camera: true,
        keyboard: true
    }), r(i = function(t) {
        O(e, t);
        function e(n) {
            _(this, e);
            var r = x(this, t.call(this));
            r._lastTime = null;
            r._currTime = null;
            r._currentScene = null;
            r._running = false;
            r.scale = {
                x: 1,
                y: 1
            };
            r.pos = {
                x: 0,
                y: 0
            };
            r.gravityConstant = null;
            Object.keys(n).forEach(function(t) {
                r[t] = n[t];
            });
            var i = Date.now();
            r._lastTime = r._currTime = i;
            r._deltaTime = 0;
            r.repository = new u.default(r);
            r._mouse = new h.default(r);
            r.keyboard = new l.default(r);
            r.keyboard.listenTo();
            r._collider = new d.default(r);
            r.camera = new w.default(r);
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
                var o = n(17);
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
            n._currentScene && n._currentScene.update(n._currTime, n._deltaTime);
            n.keyboard.update();
        };
        return e;
    }(g.default)) || i);
    e.default = E;
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
    var r = n(48);
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
                this.game._collider.move(this.gameObject, r, i);
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
        t.prototype.manage = function t(e, n, i) {
            if (e.pos.x === n && e.pos.y === i) return;
            if (!e.rigid) {
                e.pos.x = n;
                e.pos.y = i;
                return;
            } else {}
            var o = false;
            var a = this.game.getCurrScene().getAllGameObjects();
            for (var s = 0, u = a.length; s < u; s++) {
                var f = a[s];
                if (e === f) continue;
                var h = e.getRect();
                h.x = n;
                h.y = i;
                if ((0, r.isRectIntersectRect)(h, f.getRect())) {
                    if (e.rigid && f.rigid) {
                        o = true;
                        e.trigger("collide", f);
                    } else {
                        e.trigger("overlap", f);
                    }
                }
            }
            if (!o) {
                e.pos.x = n;
                e.pos.y = i;
            }
            return o;
        };
        t.prototype.overlapTest = function t(e, n) {
            return e.x < n.x + n.width && e.x + e.width > n.x && e.y < n.y + n.height && e.y + e.height > n.y;
        };
        t.prototype.move = function t(e, n, r) {
            var i = this.game.getCurrScene().getAllGameObjects();
            for (var o = 0, a = i.length; o < a; o++) {
                var s = {
                    x: e.pos.x + n,
                    y: e.pos.y,
                    width: e.width,
                    height: e.height
                };
                var u = {
                    x: e.pos.x,
                    y: e.pos.y + r,
                    width: e.width,
                    height: e.height
                };
                var f = i[o].getRect();
                if (e !== i[o] && this.overlapTest(s, f)) {
                    if (n < 0) n = f.x + f.width - e.pos.x; else if (n > 0) n = f.x - e.pos.x - e.width;
                }
                if (e !== i[o] && this.overlapTest(u, f)) {
                    if (r < 0) r = f.y + f.height - e.pos.y; else if (r > 0) r = f.y - e.pos.y - e.height;
                }
            }
            e.pos.x += n;
            e.pos.y += r;
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
    var r = n(45);
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
    var r = n(10);
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
        function t(e, n, r) {
            a(this, t);
            if (1 && !e) throw "can not create FrameBuffer, gl context not passed to constructor, expected: FrameBuffer(gl)";
            this.gl = e;
            this.width = n;
            this.height = r;
            this.texture = new i.default(e);
            this.texture.setImage(null, n, r);
            this.glRenderBuffer = e.createRenderbuffer();
            e.bindRenderbuffer(e.RENDERBUFFER, this.glRenderBuffer);
            e.renderbufferStorage(e.RENDERBUFFER, e.DEPTH_COMPONENT16, n, r);
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
}, function(t, e, n) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var r = n(9);
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
        t.prototype.translate = function t(e, n, r) {
            if (r === undefined) {
                r = 0;
            }
            var o = i.default.makeTranslation(e, n, r);
            var a = this.getCurrentMatrix();
            this.setCurrentMatrix(i.default.matrixMultiply(o, a));
        };
        t.prototype.rotateZ = function t(e) {
            var n = i.default.makeZRotation(e);
            var r = this.getCurrentMatrix();
            this.setCurrentMatrix(i.default.matrixMultiply(n, r));
        };
        t.prototype.rotateY = function t(e) {
            var n = i.default.makeYRotation(e);
            var r = this.getCurrentMatrix();
            this.setCurrentMatrix(i.default.matrixMultiply(n, r));
        };
        t.prototype.scale = function t(e, n, r) {
            if (r === undefined) {
                r = 1;
            }
            var o = i.default.makeScale(e, n, r);
            var a = this.getCurrentMatrix();
            this.setCurrentMatrix(i.default.matrixMultiply(o, a));
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
    var i = function t() {
        r(this, t);
        this.vertexArr = null;
        this.normalArr = null;
        this.texCoordArr = null;
        this.indexArr = null;
    };
    e.default = i;
}, function(t, e, n) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var r = n(11);
    var i = y(r);
    var o = n(2);
    var a = y(o);
    var s = n(3);
    var u = y(s);
    var f = n(4);
    var h = y(f);
    var c = n(5);
    var l = y(c);
    var p = n(15);
    var d = y(p);
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
        function t(e, n) {
            m(this, t);
            this.gl = e;
            this.plane = new i.default();
            this.program = new a.default(e, [ l.default, d.default ]);
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
        t.prototype.setUniform = function t(e, n) {
            this.program.setUniform(e, n);
        };
        t.prototype.draw = function t() {
            this.gl.drawElements(this.gl.TRIANGLE_STRIP, this.posIndexBuffer.getBufferLength(), this.gl.UNSIGNED_SHORT, 0);
        };
        return t;
    }();
    e.default = g;
}, function(t, e, n) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var r = n(2);
    var i = p(r);
    var o = n(3);
    var a = p(o);
    var s = n(4);
    var u = p(s);
    var f = n(62);
    var h = p(f);
    var c = n(64);
    var l = p(c);
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
    var y = function() {
        function t(e, n) {
            d(this, t);
            this.gl = e;
            this.program = new i.default(e, [ h.default, l.default ]);
            this.posVertexBuffer = new a.default(e);
            this.texVertexBuffer = new a.default(e);
            this.normalBuffer = new a.default(e);
            this.posIndexBuffer = new u.default(e);
            this.program.bind();
        }
        t.prototype.bind = function t(e) {
            this.program.bind();
            var n = this.gl;
            var r = this.program;
            this.posVertexBuffer.setData(e.vertexArr, n.FLOAT, 3);
            r.bindBuffer(this.posVertexBuffer, "a_position");
            this.texVertexBuffer.setData(e.texCoordArr, n.FLOAT, 2);
            r.bindBuffer(this.texVertexBuffer, "a_texcoord");
            this.normalBuffer.setData(e.normalArr, n.FLOAT, 3);
            r.bindBuffer(this.normalBuffer, "a_normal");
            this.posIndexBuffer.setData(e.indexArr);
            this.posIndexBuffer.bind();
        };
        t.prototype.unbind = function t() {
            this.posIndexBuffer.unbind();
        };
        t.prototype.setUniform = function t(e, n) {
            this.program.setUniform(e, n);
        };
        t.prototype.draw = function t() {
            this.gl.drawElements(this.gl.TRIANGLES, this.posIndexBuffer.getBufferLength(), this.gl.UNSIGNED_SHORT, 0);
        };
        return t;
    }();
    e.default = y;
}, function(t, e, n) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var r = n(2);
    var i = c(r);
    var o = n(3);
    var a = c(o);
    var s = n(5);
    var u = c(s);
    var f = n(15);
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
    var p = function() {
        function t(e) {
            l(this, t);
            this.gl = e;
            this.program = new i.default(e, [ u.default, h.default ]);
            this.posVertexBuffer = new a.default(e);
        }
        t.prototype.bind = function t(e) {
            this.program.bind();
            this.posVertexBuffer.setData(e, this.gl.FLOAT, 2);
            this.program.bindBuffer(this.posVertexBuffer, "a_position");
        };
        t.prototype.unbind = function t() {};
        t.prototype.setUniform = function t(e, n) {
            this.program.setUniform(e, n);
        };
        t.prototype.draw = function t() {
            this.gl.drawArrays(this.gl.LINE_STRIP, 0, this.posVertexBuffer.getBufferLength() / 2);
        };
        return t;
    }();
    e.default = p;
}, function(t, e, n) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var r = n(11);
    var i = y(r);
    var o = n(2);
    var a = y(o);
    var s = n(3);
    var u = y(s);
    var f = n(4);
    var h = y(f);
    var c = n(5);
    var l = y(c);
    var p = n(63);
    var d = y(p);
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
            this.plane = new i.default();
            this.program = new a.default(e, [ l.default, d.default ]);
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
        t.prototype.setUniform = function t(e, n) {
            this.program.setUniform(e, n);
        };
        t.prototype.draw = function t() {
            this.gl.drawElements(this.gl.TRIANGLE_STRIP, this.posIndexBuffer.getBufferLength(), this.gl.UNSIGNED_SHORT, 0);
        };
        return t;
    }();
    e.default = g;
}, function(t, e, n) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var r = n(36);
    var i = _(r);
    var o = n(44);
    var a = _(o);
    var s = n(41);
    var u = _(s);
    var f = n(43);
    var h = _(f);
    var c = n(42);
    var l = _(c);
    var p = n(38);
    var d = _(p);
    var y = n(39);
    var m = _(y);
    var g = n(9);
    var v = _(g);
    var w = n(10);
    var b = _(w);
    function _(t) {
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
    var P = function t(e, n, r, i, o, a, s, u) {
        var f = v.default.makeZToWMatrix(1);
        var h = v.default.ortho(0, o, 0, a, -j, j);
        var c = v.default.makeScale(r * s, i * u, 1);
        var l = v.default.makeTranslation(e * s, n * u, 0);
        var p = v.default.matrixMultiply(c, l);
        p = v.default.matrixMultiply(p, R.getCurrentMatrix());
        p = v.default.matrixMultiply(p, h);
        p = v.default.matrixMultiply(p, f);
        return p;
    };
    var M = function t(e, n, r, i, o, a) {
        var s = v.default.makeScale(r / o, i / a, 1);
        var u = v.default.makeTranslation(e / o, n / a, 0);
        return v.default.matrixMultiply(s, u);
    };
    var F = function(t) {
        E(e, t);
        function e(n) {
            x(this, e);
            var r = O(this, t.call(this, n));
            var i = document.createElement("canvas");
            document.body.appendChild(i);
            i.setAttribute("width", n.width);
            i.setAttribute("height", n.height);
            r.container = i;
            r.matrixStack = R;
            r.registerResize();
            r.currTex = null;
            r._init();
            return r;
        }
        e.prototype._init = function t() {
            var e = T(this.container);
            this.gl = e;
            this.spriteRectDrawer = new a.default(e);
            this.colorRectDrawer = new u.default(e);
            this.polyLineDrawer = new h.default(e);
            this.modelDrawer = new l.default(e);
            this.frameBuffer = new d.default(e, this.game.width, this.game.height);
            e.blendFunc(e.SRC_ALPHA, e.ONE_MINUS_SRC_ALPHA);
            e.enable(e.BLEND);
            e.enable(e.BLEND);
        };
        e.prototype.draw = function t(e) {
            this.save();
            var n = e.width / 2;
            var r = e.height / 2;
            this.translate(e.pos.x + n, e.pos.y + r);
            this.scale(e.scale.x, e.scale.y);
            this.rotateZ(e.angle);
            this.translate(-n, -r);
            this.drawImage(e.spriteSheet.resourcePath, e._sprPosX, e._sprPosY, e.width, e.height, 0, 0, e.width, e.height);
            this.restore();
        };
        e.prototype.drawImage = function t(e, n, r, i, o, a, s) {
            this.gl.blendFunc(this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA);
            var u = this.renderableCache[e];
            var f = u.getSize().width;
            var h = u.getSize().height;
            if (a === undefined) {
                a = n;
            }
            if (s === undefined) {
                s = r;
            }
            if (i === undefined) {
                i = f;
            }
            if (o === undefined) {
                o = h;
            }
            if (this.currTex != u) {
                u.bind();
                this.currTex = u;
            }
            this.spriteRectDrawer.bind();
            this.spriteRectDrawer.setUniform("u_textureMatrix", M(n, r, i, o, f, h));
            this.spriteRectDrawer.setUniform("u_matrix", P(a, s, i, o, this.game.width, this.game.height, 1, 1));
            this.spriteRectDrawer.setUniform("u_alpha", 1);
            this.spriteRectDrawer.draw();
            this.spriteRectDrawer.unbind();
        };
        e.prototype.fillRect = function t(e, n, r, i, o) {};
        e.prototype.setAlpha = function t(e) {};
        e.prototype.save = function t() {
            this.matrixStack.save();
        };
        e.prototype.scale = function t(e, n) {
            this.matrixStack.scale(e, n);
        };
        e.prototype.rotateZ = function t(e) {
            this.matrixStack.rotateZ(e);
        };
        e.prototype.rotateY = function t(e) {
            this.matrixStack.rotateY(e);
        };
        e.prototype.translate = function t(e, n) {
            this.matrixStack.translate(e, n);
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
            var n = e.r, r = e.g, i = e.b;
            this.gl.clearColor(n / 255, r / 255, i / 255, 1);
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
            this.spriteRectDrawer.setUniform("u_matrix", P(0, 0, this.game.width, this.game.height, this.game.width, this.game.height, 1, 1));
            this.spriteRectDrawer.setUniform("u_textureMatrix", M(0, 0, this.game.width, this.game.height, this.game.width, this.game.height));
            this.spriteRectDrawer.setUniform("u_alpha", 1);
            this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA);
            this.spriteRectDrawer.draw();
            this.restore();
        };
        e.prototype.getError = function t() {
            var e = this.gl.getError();
            return e === this.gl.NO_ERROR ? 0 : e;
        };
        e.prototype.loadTextureInfo = function t(e, n) {
            var r = this;
            var i = new Image();
            i.src = e;
            i.onload = function() {
                var t = new b.default(r.gl);
                t.setImage(i);
                r.renderableCache[e] = t;
                n();
            };
        };
        return e;
    }(i.default);
    e.default = F;
}, function(t, e, n) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var r = n(49);
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
    var r = function t(e, n) {
        var r = e || 0;
        var i = n || 0;
        var o = 0;
        var a = 0;
        this.x = 0;
        this.y = 0;
        var s = function t() {
            o = r === 0 ? 0 : Math.atan(i / r);
            a = Math.sqrt(r * r + i * i);
        };
        var u = function t() {
            i = Math.sin(o) * a;
            r = Math.cos(o) * a;
        };
        var f = function t() {
            i = Math.sin(o) * a;
            r = Math.cos(o) * a;
        };
        this.setXY = function(t, e) {
            r = t;
            i = e;
            s();
        };
        this.setX = function(t) {
            r = t;
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
                x: r,
                y: i
            };
        };
        this.getX = function() {
            return r;
        };
        this.getY = function() {
            return i;
        };
        this.getAngle = function() {
            return o;
        };
        this.reset = function() {
            r = 0;
            i = 0;
        };
        this.addVec2 = function(e) {
            return new t(r + e.getX(), i + e.getY);
        };
        this.add = function(t, e) {
            this.x += t;
            this.y += e;
        };
        this.set = function(t, e) {
            this.x = t;
            this.y = e;
        };
        this.multiplyByScalar = function(e) {
            return new t(r * e, i * e);
        };
        this.dotProduct = function(t) {
            return r * t.getX() + i * t.getY();
        };
        this.getNorm = function() {
            return a;
        };
        (function() {
            s();
        })();
    };
    t.exports = r;
}, function(t, e, n) {
    "use strict";
    e.__esModule = true;
    e.TileMap = e.TextField = e.Layer = e.Font = e.Sound = e.Scene = e.ParticleSystem = e.CommonBehaviour = e.GameObject = e.GameObjectProto = e.SpriteSheet = e.FrameAnimation = undefined;
    var r = n(52);
    var i = R(r);
    var o = n(58);
    var a = R(o);
    var s = n(13);
    var u = R(s);
    var f = n(53);
    var h = R(f);
    var c = n(50);
    var l = R(c);
    var p = n(55);
    var d = R(p);
    var y = n(56);
    var m = R(y);
    var g = n(57);
    var v = R(g);
    var w = n(51);
    var b = R(w);
    var _ = n(54);
    var x = R(_);
    var O = n(59);
    var E = R(O);
    var T = n(14);
    var j = R(T);
    function R(t) {
        return t && t.__esModule ? t : {
            default: t
        };
    }
    e.FrameAnimation = i.default;
    e.SpriteSheet = a.default;
    e.GameObjectProto = u.default;
    e.GameObject = h.default;
    e.CommonBehaviour = l.default;
    e.ParticleSystem = d.default;
    e.Scene = m.default;
    e.Sound = v.default;
    e.Font = b.default;
    e.Layer = x.default;
    e.TextField = E.default;
    e.TileMap = j.default;
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
    var r = n(13);
    var i = u(r);
    var o = n(21);
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
    var p = function(t) {
        c(e, t);
        function e(n) {
            f(this, e);
            var r = h(this, t.call(this, n));
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
            if (!n.onCreate) n.onCreate = l;
            if (!n.onUpdate) n.onUpdate = l;
            if (!n.onDestroy) n.onDestroy = l;
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
    var p = function(t) {
        c(e, t);
        function e(n) {
            f(this, e);
            var r = h(this, t.call(this, n));
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
            for (var r = 0; r < l(this.numOfParticlesToEmit); r++) {
                var i = this.gameObjectProto.clone();
                var o = l(this.particleAngle);
                var a = l(this.particleVelocity);
                i.vel.x = a * Math.cos(o);
                i.vel.y = a * Math.sin(o);
                i.pos.x = l({
                    from: e - this.emissionRadius,
                    to: e + this.emissionRadius
                });
                i.pos.y = l({
                    from: n - this.emissionRadius,
                    to: n + this.emissionRadius
                });
                i.liveTime = l(this.particleLiveTime);
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
    var o = n(32);
    var a = f(o);
    var s = n(14);
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
    var p = function(t) {
        l(e, t);
        function e(n) {
            h(this, e);
            var r = c(this, t.call(this, n));
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
        e.prototype._render = function t() {};
        e.prototype.getTileAt = function t(e, n) {
            if (!this.tileMap._spriteSheet) return null;
            var r = ~~(e / this.tileMap._spriteSheet._frameWidth);
            var i = ~~(n / this.tileMap._spriteSheet._frameHeight);
            return this.tileMap.data[i] && this.tileMap.data[i][r];
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
}, function(t, e) {
    t.exports = '{\n    "width": 800,\n    "height": 400,\n    "scaleStrategy": 0,\n    "startSceneId": 2,\n    "scale": {\n        "x": 1,\n        "y": 1\n    },\n    "pos": {\n        "x": 0,\n        "y": 0\n    },\n    "gravityConstant": 800\n}';
}, function(t, e) {
    t.exports = '{\n    "Scene": [\n        {\n            "id": 2,\n            "name": "mainScene",\n            "width": 5000,\n            "height": 800,\n            "type": "Scene",\n            "layers": [\n                {\n                    "type": "Layer",\n                    "id": 2\n                }\n            ],\n            "tileMap": {\n                "id": 52,\n                "type": "TileMap"\n            }\n        }\n    ],\n    "Layer": [\n        {\n            "id": 2,\n            "name": "layer1",\n            "type": "Layer",\n            "gameObjects": [\n                {\n                    "type": "GameObject",\n                    "id": 7\n                },\n                {\n                    "type": "GameObject",\n                    "id": 8\n                },\n                {\n                    "type": "GameObject",\n                    "id": 18\n                },\n                {\n                    "type": "GameObject",\n                    "id": 19\n                },\n                {\n                    "type": "GameObject",\n                    "id": 20\n                },\n                {\n                    "type": "GameObject",\n                    "id": 21\n                },\n                {\n                    "type": "GameObject",\n                    "id": 39\n                },\n                {\n                    "type": "GameObject",\n                    "id": 40\n                },\n                {\n                    "type": "GameObject",\n                    "id": 41\n                },\n                {\n                    "type": "GameObject",\n                    "id": 42\n                },\n                {\n                    "type": "GameObject",\n                    "id": 43\n                },\n                {\n                    "type": "GameObject",\n                    "id": 44\n                },\n                {\n                    "type": "GameObject",\n                    "id": 45\n                },\n                {\n                    "type": "GameObject",\n                    "id": 46\n                },\n                {\n                    "type": "GameObject",\n                    "id": 47\n                },\n                {\n                    "type": "GameObject",\n                    "id": 48\n                },\n                {\n                    "type": "GameObject",\n                    "id": 49\n                },\n                {\n                    "type": "GameObject",\n                    "id": 50\n                },\n                {\n                    "type": "GameObject",\n                    "id": 51\n                },\n                {\n                    "type": "TextField",\n                    "id": 56\n                }\n            ]\n        }\n    ],\n    "SpriteSheet": [\n        {\n            "name": "dude",\n            "width": 288,\n            "height": 48,\n            "type": "SpriteSheet",\n            "numOfFramesH": 9,\n            "resourcePath": "resources/dude.png",\n            "id": 3\n        },\n        {\n            "name": "platform",\n            "width": 500,\n            "height": 64,\n            "type": "SpriteSheet",\n            "resourcePath": "resources/platform.png",\n            "id": 5\n        }\n    ],\n    "GameObjectProto": [\n        {\n            "id": 4,\n            "name": "dude",\n            "width": 32,\n            "height": 48,\n            "type": "GameObjectProto",\n            "spriteSheet": {\n                "id": 3,\n                "type": "SpriteSheet"\n            },\n            "commonBehaviour": [\n                {\n                    "type": "CommonBehaviour",\n                    "id": 15\n                }\n            ],\n            "frameAnimations": [\n                {\n                    "type": "FrameAnimation",\n                    "id": 11\n                },\n                {\n                    "type": "FrameAnimation",\n                    "id": 12\n                },\n                {\n                    "type": "FrameAnimation",\n                    "id": 13\n                },\n                {\n                    "type": "FrameAnimation",\n                    "id": 14\n                }\n            ]\n        },\n        {\n            "name": "platform",\n            "width": 500,\n            "height": 64,\n            "type": "GameObjectProto",\n            "spriteSheet": {\n                "id": 5,\n                "type": "SpriteSheet"\n            },\n            "id": 6\n        }\n    ],\n    "GameObject": [\n        {\n            "id": 7,\n            "name": "dude",\n            "pos": {\n                "x": 260,\n                "y": 40\n            },\n            "layerId": 2,\n            "type": "GameObject",\n            "gameObjectProto": {\n                "id": 4,\n                "type": "GameObjectProto"\n            }\n        },\n        {\n            "id": 8,\n            "name": "platform",\n            "pos": {\n                "x": -261,\n                "y": 130\n            },\n            "layerId": 2,\n            "type": "GameObject",\n            "gameObjectProto": {\n                "id": 6,\n                "type": "GameObjectProto"\n            }\n        },\n        {\n            "id": 18,\n            "name": "platform",\n            "pos": {\n                "x": 112,\n                "y": 323\n            },\n            "layerId": 2,\n            "type": "GameObject",\n            "gameObjectProto": {\n                "id": 6,\n                "type": "GameObjectProto"\n            }\n        },\n        {\n            "id": 19,\n            "name": "platform",\n            "pos": {\n                "x": 395,\n                "y": 47\n            },\n            "layerId": 2,\n            "type": "GameObject",\n            "gameObjectProto": {\n                "id": 6,\n                "type": "GameObjectProto"\n            }\n        },\n        {\n            "id": 20,\n            "name": "platform",\n            "pos": {\n                "x": 677,\n                "y": 303\n            },\n            "layerId": 2,\n            "type": "GameObject",\n            "gameObjectProto": {\n                "id": 6,\n                "type": "GameObjectProto"\n            }\n        },\n        {\n            "id": 21,\n            "name": "platform",\n            "pos": {\n                "x": 228,\n                "y": 162\n            },\n            "layerId": 2,\n            "type": "GameObject",\n            "gameObjectProto": {\n                "id": 6,\n                "type": "GameObjectProto"\n            }\n        },\n        {\n            "id": 39,\n            "name": "platform",\n            "pos": {\n                "x": 1040,\n                "y": 176\n            },\n            "layerId": 2,\n            "type": "GameObject",\n            "gameObjectProto": {\n                "id": 6,\n                "type": "GameObjectProto"\n            }\n        },\n        {\n            "id": 40,\n            "name": "platform",\n            "pos": {\n                "x": 1578,\n                "y": 221\n            },\n            "layerId": 2,\n            "type": "GameObject",\n            "gameObjectProto": {\n                "id": 6,\n                "type": "GameObjectProto"\n            }\n        },\n        {\n            "pos": {\n                "x": 0,\n                "y": 538\n            },\n            "layerId": 2,\n            "type": "GameObject",\n            "gameObjectProto": {\n                "id": 6,\n                "type": "GameObjectProto"\n            },\n            "id": 41\n        },\n        {\n            "id": 42,\n            "name": "platform",\n            "pos": {\n                "x": 588,\n                "y": 536\n            },\n            "layerId": 2,\n            "type": "GameObject",\n            "gameObjectProto": {\n                "id": 6,\n                "type": "GameObjectProto"\n            }\n        },\n        {\n            "id": 43,\n            "name": "platform",\n            "pos": {\n                "x": 1165,\n                "y": 535\n            },\n            "layerId": 2,\n            "type": "GameObject",\n            "gameObjectProto": {\n                "id": 6,\n                "type": "GameObjectProto"\n            }\n        },\n        {\n            "id": 44,\n            "name": "platform",\n            "pos": {\n                "x": 1676,\n                "y": 481\n            },\n            "layerId": 2,\n            "type": "GameObject",\n            "gameObjectProto": {\n                "id": 6,\n                "type": "GameObjectProto"\n            }\n        },\n        {\n            "id": 45,\n            "name": "platform",\n            "pos": {\n                "x": 2129,\n                "y": 428\n            },\n            "layerId": 2,\n            "type": "GameObject",\n            "gameObjectProto": {\n                "id": 6,\n                "type": "GameObjectProto"\n            }\n        },\n        {\n            "id": 46,\n            "name": "platform",\n            "pos": {\n                "x": 2571,\n                "y": 535\n            },\n            "layerId": 2,\n            "type": "GameObject",\n            "gameObjectProto": {\n                "id": 6,\n                "type": "GameObjectProto"\n            }\n        },\n        {\n            "id": 47,\n            "name": "platform",\n            "pos": {\n                "x": 3118,\n                "y": 507\n            },\n            "layerId": 2,\n            "type": "GameObject",\n            "gameObjectProto": {\n                "id": 6,\n                "type": "GameObjectProto"\n            }\n        },\n        {\n            "id": 48,\n            "name": "platform",\n            "pos": {\n                "x": 3015,\n                "y": 353\n            },\n            "layerId": 2,\n            "type": "GameObject",\n            "gameObjectProto": {\n                "id": 6,\n                "type": "GameObjectProto"\n            }\n        },\n        {\n            "id": 49,\n            "name": "platform",\n            "pos": {\n                "x": 3648,\n                "y": 544\n            },\n            "layerId": 2,\n            "type": "GameObject",\n            "gameObjectProto": {\n                "id": 6,\n                "type": "GameObjectProto"\n            }\n        },\n        {\n            "id": 50,\n            "name": "platform",\n            "pos": {\n                "x": 4168,\n                "y": 508\n            },\n            "layerId": 2,\n            "type": "GameObject",\n            "gameObjectProto": {\n                "id": 6,\n                "type": "GameObjectProto"\n            }\n        },\n        {\n            "pos": {\n                "x": 4748,\n                "y": 612\n            },\n            "layerId": 2,\n            "type": "GameObject",\n            "gameObjectProto": {\n                "id": 6,\n                "type": "GameObjectProto"\n            },\n            "id": 51\n        }\n    ],\n    "FrameAnimation": [\n        {\n            "name": "left",\n            "type": "FrameAnimation",\n            "frames": [\n                0,\n                1,\n                2,\n                3\n            ],\n            "id": 11\n        },\n        {\n            "name": "right",\n            "type": "FrameAnimation",\n            "frames": [\n                5,\n                6,\n                7,\n                8\n            ],\n            "id": 12\n        },\n        {\n            "name": "idleLeft",\n            "type": "FrameAnimation",\n            "frames": [\n                4\n            ],\n            "id": 13\n        },\n        {\n            "name": "idleRight",\n            "type": "FrameAnimation",\n            "frames": [\n                4\n            ],\n            "id": 14\n        }\n    ],\n    "CommonBehaviour": [\n        {\n            "id": 15,\n            "name": "Control2Dir",\n            "type": "CommonBehaviour",\n            "parameters": {\n                "velocity": "130",\n                "walkLeftAnimation": "left",\n                "walkRightAnimation": "right",\n                "idleLeftAnimation": "idleLeft",\n                "idleRightAnimation": "idleRight"\n            }\n        }\n    ],\n    "Font": [\n        {\n            "name": "font1",\n            "type": "Font",\n            "resourcePath": "resources/font1.png",\n            "fontSize": 21,\n            "fontFamily": "Berlin Sans FB",\n            "fontContext": {\n                "symbols": {\n                    "0": {\n                        "x": 258,\n                        "y": 4,\n                        "width": 12,\n                        "height": 23\n                    },\n                    "1": {\n                        "x": 279,\n                        "y": 4,\n                        "width": 5,\n                        "height": 23\n                    },\n                    "2": {\n                        "x": 293,\n                        "y": 4,\n                        "width": 10,\n                        "height": 23\n                    },\n                    "3": {\n                        "x": 4,\n                        "y": 35,\n                        "width": 9,\n                        "height": 23\n                    },\n                    "4": {\n                        "x": 21,\n                        "y": 35,\n                        "width": 10,\n                        "height": 23\n                    },\n                    "5": {\n                        "x": 40,\n                        "y": 35,\n                        "width": 9,\n                        "height": 23\n                    },\n                    "6": {\n                        "x": 58,\n                        "y": 35,\n                        "width": 10,\n                        "height": 23\n                    },\n                    "7": {\n                        "x": 77,\n                        "y": 35,\n                        "width": 9,\n                        "height": 23\n                    },\n                    "8": {\n                        "x": 94,\n                        "y": 35,\n                        "width": 9,\n                        "height": 23\n                    },\n                    "9": {\n                        "x": 112,\n                        "y": 35,\n                        "width": 10,\n                        "height": 23\n                    },\n                    " ": {\n                        "x": 4,\n                        "y": 4,\n                        "width": 5,\n                        "height": 23\n                    },\n                    "!": {\n                        "x": 17,\n                        "y": 4,\n                        "width": 4,\n                        "height": 23\n                    },\n                    "\\"": {\n                        "x": 30,\n                        "y": 4,\n                        "width": 6,\n                        "height": 23\n                    },\n                    "#": {\n                        "x": 44,\n                        "y": 4,\n                        "width": 13,\n                        "height": 23\n                    },\n                    "$": {\n                        "x": 66,\n                        "y": 4,\n                        "width": 9,\n                        "height": 23\n                    },\n                    "%": {\n                        "x": 83,\n                        "y": 4,\n                        "width": 15,\n                        "height": 23\n                    },\n                    "&": {\n                        "x": 106,\n                        "y": 4,\n                        "width": 14,\n                        "height": 23\n                    },\n                    "\'": {\n                        "x": 129,\n                        "y": 4,\n                        "width": 3,\n                        "height": 23\n                    },\n                    "(": {\n                        "x": 140,\n                        "y": 4,\n                        "width": 7,\n                        "height": 23\n                    },\n                    ")": {\n                        "x": 156,\n                        "y": 4,\n                        "width": 7,\n                        "height": 23\n                    },\n                    "*": {\n                        "x": 171,\n                        "y": 4,\n                        "width": 7,\n                        "height": 23\n                    },\n                    "+": {\n                        "x": 187,\n                        "y": 4,\n                        "width": 8,\n                        "height": 23\n                    },\n                    ",": {\n                        "x": 203,\n                        "y": 4,\n                        "width": 4,\n                        "height": 23\n                    },\n                    "-": {\n                        "x": 216,\n                        "y": 4,\n                        "width": 8,\n                        "height": 23\n                    },\n                    ".": {\n                        "x": 232,\n                        "y": 4,\n                        "width": 4,\n                        "height": 23\n                    },\n                    "/": {\n                        "x": 244,\n                        "y": 4,\n                        "width": 6,\n                        "height": 23\n                    },\n                    ":": {\n                        "x": 130,\n                        "y": 35,\n                        "width": 4,\n                        "height": 23\n                    },\n                    ";": {\n                        "x": 143,\n                        "y": 35,\n                        "width": 4,\n                        "height": 23\n                    },\n                    "<": {\n                        "x": 155,\n                        "y": 35,\n                        "width": 7,\n                        "height": 23\n                    },\n                    "=": {\n                        "x": 170,\n                        "y": 35,\n                        "width": 9,\n                        "height": 23\n                    },\n                    ">": {\n                        "x": 187,\n                        "y": 35,\n                        "width": 7,\n                        "height": 23\n                    },\n                    "?": {\n                        "x": 203,\n                        "y": 35,\n                        "width": 8,\n                        "height": 23\n                    },\n                    "@": {\n                        "x": 219,\n                        "y": 35,\n                        "width": 13,\n                        "height": 23\n                    },\n                    "A": {\n                        "x": 240,\n                        "y": 35,\n                        "width": 13,\n                        "height": 23\n                    },\n                    "B": {\n                        "x": 262,\n                        "y": 35,\n                        "width": 12,\n                        "height": 23\n                    },\n                    "C": {\n                        "x": 283,\n                        "y": 35,\n                        "width": 12,\n                        "height": 23\n                    },\n                    "D": {\n                        "x": 4,\n                        "y": 66,\n                        "width": 14,\n                        "height": 23\n                    },\n                    "E": {\n                        "x": 26,\n                        "y": 66,\n                        "width": 11,\n                        "height": 23\n                    },\n                    "F": {\n                        "x": 45,\n                        "y": 66,\n                        "width": 11,\n                        "height": 23\n                    },\n                    "G": {\n                        "x": 64,\n                        "y": 66,\n                        "width": 14,\n                        "height": 23\n                    },\n                    "H": {\n                        "x": 86,\n                        "y": 66,\n                        "width": 15,\n                        "height": 23\n                    },\n                    "I": {\n                        "x": 109,\n                        "y": 66,\n                        "width": 4,\n                        "height": 23\n                    },\n                    "J": {\n                        "x": 122,\n                        "y": 66,\n                        "width": 5,\n                        "height": 23\n                    },\n                    "K": {\n                        "x": 136,\n                        "y": 66,\n                        "width": 12,\n                        "height": 23\n                    },\n                    "L": {\n                        "x": 157,\n                        "y": 66,\n                        "width": 10,\n                        "height": 23\n                    },\n                    "M": {\n                        "x": 175,\n                        "y": 66,\n                        "width": 16,\n                        "height": 23\n                    },\n                    "N": {\n                        "x": 200,\n                        "y": 66,\n                        "width": 15,\n                        "height": 23\n                    },\n                    "O": {\n                        "x": 223,\n                        "y": 66,\n                        "width": 15,\n                        "height": 23\n                    },\n                    "P": {\n                        "x": 246,\n                        "y": 66,\n                        "width": 13,\n                        "height": 23\n                    },\n                    "Q": {\n                        "x": 267,\n                        "y": 66,\n                        "width": 15,\n                        "height": 23\n                    },\n                    "R": {\n                        "x": 291,\n                        "y": 66,\n                        "width": 12,\n                        "height": 23\n                    },\n                    "S": {\n                        "x": 4,\n                        "y": 97,\n                        "width": 9,\n                        "height": 23\n                    },\n                    "T": {\n                        "x": 21,\n                        "y": 97,\n                        "width": 10,\n                        "height": 23\n                    },\n                    "U": {\n                        "x": 40,\n                        "y": 97,\n                        "width": 13,\n                        "height": 23\n                    },\n                    "V": {\n                        "x": 62,\n                        "y": 97,\n                        "width": 13,\n                        "height": 23\n                    },\n                    "W": {\n                        "x": 83,\n                        "y": 97,\n                        "width": 18,\n                        "height": 23\n                    },\n                    "X": {\n                        "x": 110,\n                        "y": 97,\n                        "width": 12,\n                        "height": 23\n                    },\n                    "Y": {\n                        "x": 130,\n                        "y": 97,\n                        "width": 12,\n                        "height": 23\n                    },\n                    "Z": {\n                        "x": 150,\n                        "y": 97,\n                        "width": 10,\n                        "height": 23\n                    },\n                    "[": {\n                        "x": 169,\n                        "y": 97,\n                        "width": 7,\n                        "height": 23\n                    },\n                    "\\\\": {\n                        "x": 184,\n                        "y": 97,\n                        "width": 6,\n                        "height": 23\n                    },\n                    "]": {\n                        "x": 198,\n                        "y": 97,\n                        "width": 7,\n                        "height": 23\n                    },\n                    "^": {\n                        "x": 214,\n                        "y": 97,\n                        "width": 9,\n                        "height": 23\n                    },\n                    "_": {\n                        "x": 232,\n                        "y": 97,\n                        "width": 9,\n                        "height": 23\n                    },\n                    "`": {\n                        "x": 249,\n                        "y": 97,\n                        "width": 7,\n                        "height": 23\n                    },\n                    "a": {\n                        "x": 264,\n                        "y": 97,\n                        "width": 11,\n                        "height": 23\n                    },\n                    "b": {\n                        "x": 284,\n                        "y": 97,\n                        "width": 11,\n                        "height": 23\n                    },\n                    "c": {\n                        "x": 303,\n                        "y": 97,\n                        "width": 8,\n                        "height": 23\n                    },\n                    "d": {\n                        "x": 4,\n                        "y": 128,\n                        "width": 11,\n                        "height": 23\n                    },\n                    "e": {\n                        "x": 23,\n                        "y": 128,\n                        "width": 10,\n                        "height": 23\n                    },\n                    "f": {\n                        "x": 41,\n                        "y": 128,\n                        "width": 6,\n                        "height": 23\n                    },\n                    "g": {\n                        "x": 55,\n                        "y": 128,\n                        "width": 10,\n                        "height": 23\n                    },\n                    "h": {\n                        "x": 74,\n                        "y": 128,\n                        "width": 10,\n                        "height": 23\n                    },\n                    "i": {\n                        "x": 93,\n                        "y": 128,\n                        "width": 4,\n                        "height": 23\n                    },\n                    "j": {\n                        "x": 106,\n                        "y": 128,\n                        "width": 4,\n                        "height": 23\n                    },\n                    "k": {\n                        "x": 119,\n                        "y": 128,\n                        "width": 11,\n                        "height": 23\n                    },\n                    "l": {\n                        "x": 138,\n                        "y": 128,\n                        "width": 4,\n                        "height": 23\n                    },\n                    "m": {\n                        "x": 151,\n                        "y": 128,\n                        "width": 17,\n                        "height": 23\n                    },\n                    "n": {\n                        "x": 176,\n                        "y": 128,\n                        "width": 10,\n                        "height": 23\n                    },\n                    "o": {\n                        "x": 195,\n                        "y": 128,\n                        "width": 10,\n                        "height": 23\n                    },\n                    "p": {\n                        "x": 214,\n                        "y": 128,\n                        "width": 11,\n                        "height": 23\n                    },\n                    "q": {\n                        "x": 234,\n                        "y": 128,\n                        "width": 11,\n                        "height": 23\n                    },\n                    "r": {\n                        "x": 254,\n                        "y": 128,\n                        "width": 6,\n                        "height": 23\n                    },\n                    "s": {\n                        "x": 269,\n                        "y": 128,\n                        "width": 6,\n                        "height": 23\n                    },\n                    "t": {\n                        "x": 283,\n                        "y": 128,\n                        "width": 7,\n                        "height": 23\n                    },\n                    "u": {\n                        "x": 298,\n                        "y": 128,\n                        "width": 11,\n                        "height": 23\n                    },\n                    "v": {\n                        "x": 4,\n                        "y": 159,\n                        "width": 10,\n                        "height": 23\n                    },\n                    "w": {\n                        "x": 22,\n                        "y": 159,\n                        "width": 15,\n                        "height": 23\n                    },\n                    "x": {\n                        "x": 45,\n                        "y": 159,\n                        "width": 9,\n                        "height": 23\n                    },\n                    "y": {\n                        "x": 63,\n                        "y": 159,\n                        "width": 9,\n                        "height": 23\n                    },\n                    "z": {\n                        "x": 81,\n                        "y": 159,\n                        "width": 8,\n                        "height": 23\n                    },\n                    "{": {\n                        "x": 97,\n                        "y": 159,\n                        "width": 7,\n                        "height": 23\n                    },\n                    "|": {\n                        "x": 113,\n                        "y": 159,\n                        "width": 5,\n                        "height": 23\n                    },\n                    "}": {\n                        "x": 126,\n                        "y": 159,\n                        "width": 7,\n                        "height": 23\n                    },\n                    "~": {\n                        "x": 141,\n                        "y": 159,\n                        "width": 10,\n                        "height": 23\n                    },\n                    "": {\n                        "x": 159,\n                        "y": 159,\n                        "width": 10,\n                        "height": 23\n                    },\n                    "": {\n                        "x": 178,\n                        "y": 159,\n                        "width": 15,\n                        "height": 23\n                    },\n                    "": {\n                        "x": 201,\n                        "y": 159,\n                        "width": 15,\n                        "height": 23\n                    },\n                    "": {\n                        "x": 225,\n                        "y": 159,\n                        "width": 15,\n                        "height": 23\n                    },\n                    "": {\n                        "x": 249,\n                        "y": 159,\n                        "width": 15,\n                        "height": 23\n                    },\n                    "": {\n                        "x": 273,\n                        "y": 159,\n                        "width": 15,\n                        "height": 23\n                    },\n                    "": {\n                        "x": 296,\n                        "y": 159,\n                        "width": 15,\n                        "height": 23\n                    },\n                    "": {\n                        "x": 4,\n                        "y": 190,\n                        "width": 15,\n                        "height": 23\n                    },\n                    "": {\n                        "x": 27,\n                        "y": 190,\n                        "width": 15,\n                        "height": 23\n                    },\n                    "": {\n                        "x": 51,\n                        "y": 190,\n                        "width": 15,\n                        "height": 23\n                    },\n                    "": {\n                        "x": 75,\n                        "y": 190,\n                        "width": 15,\n                        "height": 23\n                    },\n                    "": {\n                        "x": 99,\n                        "y": 190,\n                        "width": 15,\n                        "height": 23\n                    },\n                    "": {\n                        "x": 122,\n                        "y": 190,\n                        "width": 15,\n                        "height": 23\n                    },\n                    "": {\n                        "x": 146,\n                        "y": 190,\n                        "width": 15,\n                        "height": 23\n                    },\n                    "": {\n                        "x": 170,\n                        "y": 190,\n                        "width": 15,\n                        "height": 23\n                    },\n                    "": {\n                        "x": 194,\n                        "y": 190,\n                        "width": 15,\n                        "height": 23\n                    },\n                    "": {\n                        "x": 217,\n                        "y": 190,\n                        "width": 15,\n                        "height": 23\n                    },\n                    "": {\n                        "x": 241,\n                        "y": 190,\n                        "width": 15,\n                        "height": 23\n                    },\n                    "": {\n                        "x": 265,\n                        "y": 190,\n                        "width": 15,\n                        "height": 23\n                    },\n                    "": {\n                        "x": 289,\n                        "y": 190,\n                        "width": 15,\n                        "height": 23\n                    },\n                    "": {\n                        "x": 4,\n                        "y": 221,\n                        "width": 15,\n                        "height": 23\n                    },\n                    "": {\n                        "x": 27,\n                        "y": 221,\n                        "width": 15,\n                        "height": 23\n                    },\n                    "": {\n                        "x": 51,\n                        "y": 221,\n                        "width": 15,\n                        "height": 23\n                    },\n                    "А": {\n                        "x": 75,\n                        "y": 221,\n                        "width": 15,\n                        "height": 23\n                    },\n                    "Б": {\n                        "x": 98,\n                        "y": 221,\n                        "width": 12,\n                        "height": 23\n                    },\n                    "В": {\n                        "x": 118,\n                        "y": 221,\n                        "width": 14,\n                        "height": 23\n                    },\n                    "Г": {\n                        "x": 140,\n                        "y": 221,\n                        "width": 12,\n                        "height": 23\n                    },\n                    "Д": {\n                        "x": 160,\n                        "y": 221,\n                        "width": 14,\n                        "height": 23\n                    },\n                    "Е": {\n                        "x": 182,\n                        "y": 221,\n                        "width": 12,\n                        "height": 23\n                    },\n                    "Ж": {\n                        "x": 203,\n                        "y": 221,\n                        "width": 18,\n                        "height": 23\n                    },\n                    "З": {\n                        "x": 230,\n                        "y": 221,\n                        "width": 10,\n                        "height": 23\n                    },\n                    "И": {\n                        "x": 249,\n                        "y": 221,\n                        "width": 15,\n                        "height": 23\n                    },\n                    "Й": {\n                        "x": 272,\n                        "y": 221,\n                        "width": 15,\n                        "height": 23\n                    },\n                    "К": {\n                        "x": 295,\n                        "y": 221,\n                        "width": 14,\n                        "height": 23\n                    },\n                    "Л": {\n                        "x": 4,\n                        "y": 252,\n                        "width": 14,\n                        "height": 23\n                    },\n                    "М": {\n                        "x": 26,\n                        "y": 252,\n                        "width": 18,\n                        "height": 23\n                    },\n                    "Н": {\n                        "x": 52,\n                        "y": 252,\n                        "width": 15,\n                        "height": 23\n                    },\n                    "О": {\n                        "x": 76,\n                        "y": 252,\n                        "width": 15,\n                        "height": 23\n                    },\n                    "П": {\n                        "x": 99,\n                        "y": 252,\n                        "width": 15,\n                        "height": 23\n                    },\n                    "Р": {\n                        "x": 122,\n                        "y": 252,\n                        "width": 11,\n                        "height": 23\n                    },\n                    "С": {\n                        "x": 142,\n                        "y": 252,\n                        "width": 14,\n                        "height": 23\n                    },\n                    "Т": {\n                        "x": 164,\n                        "y": 252,\n                        "width": 12,\n                        "height": 23\n                    },\n                    "У": {\n                        "x": 184,\n                        "y": 252,\n                        "width": 14,\n                        "height": 23\n                    },\n                    "Ф": {\n                        "x": 207,\n                        "y": 252,\n                        "width": 16,\n                        "height": 23\n                    },\n                    "Х": {\n                        "x": 232,\n                        "y": 252,\n                        "width": 15,\n                        "height": 23\n                    },\n                    "Ц": {\n                        "x": 255,\n                        "y": 252,\n                        "width": 15,\n                        "height": 23\n                    },\n                    "Ч": {\n                        "x": 278,\n                        "y": 252,\n                        "width": 13,\n                        "height": 23\n                    },\n                    "Ш": {\n                        "x": 4,\n                        "y": 283,\n                        "width": 21,\n                        "height": 23\n                    },\n                    "Щ": {\n                        "x": 33,\n                        "y": 283,\n                        "width": 21,\n                        "height": 23\n                    },\n                    "Ъ": {\n                        "x": 62,\n                        "y": 283,\n                        "width": 14,\n                        "height": 23\n                    },\n                    "Ы": {\n                        "x": 85,\n                        "y": 283,\n                        "width": 18,\n                        "height": 23\n                    },\n                    "Ь": {\n                        "x": 111,\n                        "y": 283,\n                        "width": 12,\n                        "height": 23\n                    },\n                    "Э": {\n                        "x": 131,\n                        "y": 283,\n                        "width": 13,\n                        "height": 23\n                    },\n                    "Ю": {\n                        "x": 153,\n                        "y": 283,\n                        "width": 21,\n                        "height": 23\n                    },\n                    "Я": {\n                        "x": 183,\n                        "y": 283,\n                        "width": 14,\n                        "height": 23\n                    },\n                    "а": {\n                        "x": 205,\n                        "y": 283,\n                        "width": 9,\n                        "height": 23\n                    },\n                    "б": {\n                        "x": 222,\n                        "y": 283,\n                        "width": 10,\n                        "height": 23\n                    },\n                    "в": {\n                        "x": 241,\n                        "y": 283,\n                        "width": 9,\n                        "height": 23\n                    },\n                    "г": {\n                        "x": 258,\n                        "y": 283,\n                        "width": 8,\n                        "height": 23\n                    },\n                    "д": {\n                        "x": 275,\n                        "y": 283,\n                        "width": 10,\n                        "height": 23\n                    },\n                    "е": {\n                        "x": 294,\n                        "y": 283,\n                        "width": 9,\n                        "height": 23\n                    },\n                    "ж": {\n                        "x": 4,\n                        "y": 314,\n                        "width": 14,\n                        "height": 23\n                    },\n                    "з": {\n                        "x": 26,\n                        "y": 314,\n                        "width": 8,\n                        "height": 23\n                    },\n                    "и": {\n                        "x": 42,\n                        "y": 314,\n                        "width": 11,\n                        "height": 23\n                    },\n                    "й": {\n                        "x": 62,\n                        "y": 314,\n                        "width": 11,\n                        "height": 23\n                    },\n                    "к": {\n                        "x": 81,\n                        "y": 314,\n                        "width": 10,\n                        "height": 23\n                    },\n                    "л": {\n                        "x": 99,\n                        "y": 314,\n                        "width": 10,\n                        "height": 23\n                    },\n                    "м": {\n                        "x": 117,\n                        "y": 314,\n                        "width": 13,\n                        "height": 23\n                    },\n                    "н": {\n                        "x": 139,\n                        "y": 314,\n                        "width": 11,\n                        "height": 23\n                    },\n                    "о": {\n                        "x": 158,\n                        "y": 314,\n                        "width": 10,\n                        "height": 23\n                    },\n                    "п": {\n                        "x": 176,\n                        "y": 314,\n                        "width": 11,\n                        "height": 23\n                    },\n                    "р": {\n                        "x": 196,\n                        "y": 314,\n                        "width": 10,\n                        "height": 23\n                    },\n                    "с": {\n                        "x": 214,\n                        "y": 314,\n                        "width": 9,\n                        "height": 23\n                    },\n                    "т": {\n                        "x": 232,\n                        "y": 314,\n                        "width": 9,\n                        "height": 23\n                    },\n                    "у": {\n                        "x": 249,\n                        "y": 314,\n                        "width": 10,\n                        "height": 23\n                    },\n                    "ф": {\n                        "x": 267,\n                        "y": 314,\n                        "width": 13,\n                        "height": 23\n                    },\n                    "х": {\n                        "x": 289,\n                        "y": 314,\n                        "width": 10,\n                        "height": 23\n                    },\n                    "ц": {\n                        "x": 4,\n                        "y": 345,\n                        "width": 11,\n                        "height": 23\n                    },\n                    "ч": {\n                        "x": 23,\n                        "y": 345,\n                        "width": 10,\n                        "height": 23\n                    },\n                    "ш": {\n                        "x": 41,\n                        "y": 345,\n                        "width": 16,\n                        "height": 23\n                    },\n                    "щ": {\n                        "x": 65,\n                        "y": 345,\n                        "width": 16,\n                        "height": 23\n                    },\n                    "ъ": {\n                        "x": 90,\n                        "y": 345,\n                        "width": 10,\n                        "height": 23\n                    },\n                    "ы": {\n                        "x": 108,\n                        "y": 345,\n                        "width": 14,\n                        "height": 23\n                    },\n                    "ь": {\n                        "x": 131,\n                        "y": 345,\n                        "width": 9,\n                        "height": 23\n                    },\n                    "э": {\n                        "x": 148,\n                        "y": 345,\n                        "width": 9,\n                        "height": 23\n                    },\n                    "ю": {\n                        "x": 165,\n                        "y": 345,\n                        "width": 15,\n                        "height": 23\n                    },\n                    "я": {\n                        "x": 189,\n                        "y": 345,\n                        "width": 9,\n                        "height": 23\n                    },\n                    "ѐ": {\n                        "x": 207,\n                        "y": 345,\n                        "width": 9,\n                        "height": 23\n                    },\n                    "ё": {\n                        "x": 224,\n                        "y": 345,\n                        "width": 9,\n                        "height": 23\n                    },\n                    "ђ": {\n                        "x": 241,\n                        "y": 345,\n                        "width": 10,\n                        "height": 23\n                    },\n                    "ѓ": {\n                        "x": 259,\n                        "y": 345,\n                        "width": 8,\n                        "height": 23\n                    },\n                    "є": {\n                        "x": 276,\n                        "y": 345,\n                        "width": 9,\n                        "height": 23\n                    },\n                    "ѕ": {\n                        "x": 293,\n                        "y": 345,\n                        "width": 8,\n                        "height": 23\n                    },\n                    "і": {\n                        "x": 309,\n                        "y": 345,\n                        "width": 5,\n                        "height": 23\n                    },\n                    "ї": {\n                        "x": 4,\n                        "y": 376,\n                        "width": 5,\n                        "height": 23\n                    },\n                    "ј": {\n                        "x": 17,\n                        "y": 376,\n                        "width": 5,\n                        "height": 23\n                    },\n                    "љ": {\n                        "x": 31,\n                        "y": 376,\n                        "width": 15,\n                        "height": 23\n                    },\n                    "њ": {\n                        "x": 54,\n                        "y": 376,\n                        "width": 15,\n                        "height": 23\n                    },\n                    "ћ": {\n                        "x": 78,\n                        "y": 376,\n                        "width": 10,\n                        "height": 23\n                    }\n                },\n                "width": 320,\n                "height": 403\n            },\n            "id": 22\n        }\n    ],\n    "TileMap": [\n        {\n            "type": "TileMap",\n            "id": 52\n        }\n    ],\n    "TextField": [\n        {\n            "id": 56,\n            "name": "textField1",\n            "width": 78,\n            "height": 23,\n            "pos": {\n                "x": 450,\n                "y": 291\n            },\n            "layerId": 2,\n            "type": "TextField",\n            "text": "test string",\n            "font": {\n                "id": 22,\n                "type": "Font"\n            }\n        }\n    ]\n}';
}, function(t, e) {
    t.exports = "attribute vec4 a_position;\nattribute vec2 a_texcoord;\nattribute vec3 a_normal;\n\nuniform mat4 u_modelMatrix;\nuniform mat4 u_projectionMatrix;\n\nvarying vec2 v_texcoord;\nvarying vec3 v_normal;\n\nvoid main() {\n\n  gl_Position = u_projectionMatrix * u_modelMatrix * a_position;\n  v_texcoord = a_texcoord;\n  v_normal = a_normal;\n}";
}, function(t, e) {
    t.exports = "precision mediump float;\n\nvarying vec2 v_texcoord;\n\nuniform sampler2D texture;\nuniform float u_alpha;\n\n\nvoid main() {\n    gl_FragColor = texture2D(texture, v_texcoord);\n    gl_FragColor.a *= u_alpha;\n}";
}, function(t, e) {
    t.exports = "precision highp float;\n\nvarying vec2 v_texcoord;\nvarying vec3 v_normal;\n\nuniform sampler2D texture;\nuniform float u_alpha;\nuniform mat4 u_modelMatrix;\n\n\nvoid main() {\n\n    vec3 lightDirection = normalize(vec3(-1,-1,1));\n    vec3 normalized = normalize((u_modelMatrix * vec4(v_normal,0)).xyz);\n    float lightFactor = max(0.5,dot(lightDirection,normalized));\n    gl_FragColor = texture2D(texture, v_texcoord);\n    gl_FragColor.rgb *= lightFactor;\n    gl_FragColor.a *= u_alpha;\n}";
}, function(t, e, n) {
    t.exports = n(16);
} ]);