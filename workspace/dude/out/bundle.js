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
    var a = p(o);
    var s = n(52);
    var u = p(s);
    var h = n(36);
    var f = p(h);
    var c = n(8);
    var l = n(38);
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
    }), r(i = function(t) {
        m(e, t);
        function e(n) {
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
            if (1 && !n) throw "can not create model '" + r.type + "': game instance not passed to model constructor";
            r.game = n;
            r._emitter = new f.default();
            r.rigidBody = new d.default(r);
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
    var h = function t(e, n) {
        var r = {};
        var i = e.getProgramParameter(n, e.ACTIVE_UNIFORMS);
        for (var o = 0; o < i; o++) {
            var a = e.getActiveUniform(n, o);
            var s = a.name.replace(/\[.*?]/, "");
            var h = u(e, a.type);
            r[s] = {
                type: h,
                size: a.size,
                name: s,
                location: e.getUniformLocation(n, s),
                setter: f(a.size, h)
            };
        }
        return r;
    };
    var f = function t(e, n) {
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
            this.uniforms = h(e, this.program);
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
        t.prototype.onUpdate = function t() {};
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
    var h = function(t) {
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
    e.default = h;
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
        var h = [];
        h[0] = -2 * a;
        h[1] = 0;
        h[2] = 0;
        h[3] = 0;
        h[4] = 0;
        h[5] = -2 * s;
        h[6] = 0;
        h[7] = 0;
        h[8] = 0;
        h[9] = 0;
        h[10] = 2 * u;
        h[11] = 0;
        h[12] = (t + e) * a;
        h[13] = (r + n) * s;
        h[14] = (o + i) * u;
        h[15] = 1;
        return h;
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
        var h = t[1 * 4 + 3];
        var f = t[2 * 4 + 0];
        var c = t[2 * 4 + 1];
        var l = t[2 * 4 + 2];
        var d = t[2 * 4 + 3];
        var p = t[3 * 4 + 0];
        var y = t[3 * 4 + 1];
        var g = t[3 * 4 + 2];
        var m = t[3 * 4 + 3];
        var v = e[0 * 4 + 0];
        var w = e[0 * 4 + 1];
        var _ = e[0 * 4 + 2];
        var b = e[0 * 4 + 3];
        var x = e[1 * 4 + 0];
        var E = e[1 * 4 + 1];
        var T = e[1 * 4 + 2];
        var O = e[1 * 4 + 3];
        var A = e[2 * 4 + 0];
        var S = e[2 * 4 + 1];
        var M = e[2 * 4 + 2];
        var R = e[2 * 4 + 3];
        var P = e[3 * 4 + 0];
        var j = e[3 * 4 + 1];
        var B = e[3 * 4 + 2];
        var F = e[3 * 4 + 3];
        return [ n * v + r * x + i * A + o * P, n * w + r * E + i * S + o * j, n * _ + r * T + i * M + o * B, n * b + r * O + i * R + o * F, a * v + s * x + u * A + h * P, a * w + s * E + u * S + h * j, a * _ + s * T + u * M + h * B, a * b + s * O + u * R + h * F, f * v + c * x + l * A + d * P, f * w + c * E + l * S + d * j, f * _ + c * T + l * M + d * B, f * b + c * O + l * R + d * F, p * v + y * x + g * A + m * P, p * w + y * E + g * S + m * j, p * _ + y * T + g * M + m * B, p * b + y * O + g * R + m * F ];
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
    e.default = h;
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
                    var h = s(this[u]);
                    if (h && h.splice && !h.length) continue; else if (h != null && (typeof h === "undefined" ? "undefined" : r(h)) === "object" && !Object.keys(h).length) continue;
                    i[u] = h;
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
    var h = function(t) {
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
    e.default = h;
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
    var h = function(t) {
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
            if (!this.spriteSheet) return n;
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
    e.default = h;
}, function(t, e) {
    t.exports = "precision mediump float;\n\nvarying vec2 v_texcoord;\n\nuniform sampler2D texture;\nuniform float u_alpha;\nuniform vec4 u_rgba;\n\nvoid main() {\n    gl_FragColor = u_rgba;\n}";
}, , , function(t, e, n) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var r, i;
    n(40);
    var o = n(42);
    var a = x(o);
    var s = n(51);
    var u = x(s);
    var h = n(35);
    var f = x(h);
    var c = n(34);
    var l = x(c);
    var d = n(33);
    var p = x(d);
    var y = n(39);
    var g = x(y);
    var m = n(8);
    var v = n(12);
    var w = x(v);
    var _ = n(32);
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
    var A = (r = (0, m.Transient)({
        repository: true,
        camera: true,
        keyboard: true,
        gamePad: true
    }), r(i = function(t) {
        O(e, t);
        function e(n) {
            E(this, e);
            var r = T(this, t.call(this));
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
            r.gamePad = null;
            Object.keys(n).forEach(function(t) {
                r[t] = n[t];
            });
            var i = Date.now();
            r._lastTime = r._currTime = i;
            r._deltaTime = 0;
            r.repository = new u.default(r);
            r._mouse = new f.default(r);
            r.keyboard = new l.default(r);
            r.keyboard.listenTo();
            r.gamePad = new p.default(r);
            r._collider = new g.default(r);
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
                var o = n(21);
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
            n.gamePad.update();
        };
        return e;
    }(w.default)) || i);
    e.default = A;
}, function(t, e) {
    t.exports = '{\n    "width": 900,\n    "height": 500,\n    "scaleStrategy": 0,\n    "startSceneId": 2,\n    "scale": {\n        "x": 1,\n        "y": 1\n    },\n    "pos": {\n        "x": 0,\n        "y": 0\n    },\n    "gravityConstant": 800\n}';
}, function(t, e) {
    t.exports = '{\n    "Scene": [\n        {\n            "id": 2,\n            "name": "mainScene",\n            "width": 5000,\n            "height": 800,\n            "type": "Scene",\n            "layers": [\n                {\n                    "type": "Layer",\n                    "id": 2\n                }\n            ],\n            "useBG": true,\n            "colorBG": {\n                "r": 230,\n                "g": 254,\n                "b": 255\n            },\n            "tileMap": {\n                "id": 52,\n                "type": "TileMap"\n            }\n        }\n    ],\n    "Layer": [\n        {\n            "id": 2,\n            "name": "layer1",\n            "type": "Layer",\n            "gameObjects": [\n                {\n                    "type": "GameObject",\n                    "id": 7\n                },\n                {\n                    "type": "GameObject",\n                    "id": 63\n                },\n                {\n                    "type": "GameObject",\n                    "id": 64\n                },\n                {\n                    "type": "GameObject",\n                    "id": 65\n                }\n            ]\n        }\n    ],\n    "SpriteSheet": [\n        {\n            "name": "dude",\n            "width": 288,\n            "height": 48,\n            "type": "SpriteSheet",\n            "numOfFramesH": 9,\n            "resourcePath": "resources/dude.png",\n            "id": 3\n        },\n        {\n            "name": "platform",\n            "width": 500,\n            "height": 64,\n            "type": "SpriteSheet",\n            "resourcePath": "resources/platform.png",\n            "id": 5\n        },\n        {\n            "name": "ground",\n            "width": 800,\n            "height": 32,\n            "type": "SpriteSheet",\n            "numOfFramesH": 25,\n            "resourcePath": "resources/ground.png",\n            "id": 57\n        }\n    ],\n    "GameObjectProto": [\n        {\n            "id": 4,\n            "name": "dude",\n            "width": 32,\n            "height": 48,\n            "type": "GameObjectProto",\n            "spriteSheet": {\n                "id": 3,\n                "type": "SpriteSheet"\n            },\n            "commonBehaviour": [\n                {\n                    "type": "CommonBehaviour",\n                    "id": 15\n                },\n                {\n                    "type": "CommonBehaviour",\n                    "id": 60\n                }\n            ],\n            "frameAnimations": [\n                {\n                    "type": "FrameAnimation",\n                    "id": 11\n                },\n                {\n                    "type": "FrameAnimation",\n                    "id": 12\n                },\n                {\n                    "type": "FrameAnimation",\n                    "id": 13\n                },\n                {\n                    "type": "FrameAnimation",\n                    "id": 14\n                }\n            ]\n        },\n        {\n            "id": 6,\n            "name": "platform",\n            "width": 500,\n            "height": 64,\n            "type": "GameObjectProto",\n            "spriteSheet": {\n                "id": 5,\n                "type": "SpriteSheet"\n            },\n            "commonBehaviour": [\n                {\n                    "type": "CommonBehaviour",\n                    "id": 61\n                }\n            ]\n        },\n        {\n            "id": 58,\n            "name": "ground1",\n            "width": 32,\n            "height": 32,\n            "type": "GameObjectProto",\n            "spriteSheet": {\n                "id": 57,\n                "type": "SpriteSheet"\n            },\n            "commonBehaviour": [\n                {\n                    "type": "CommonBehaviour",\n                    "id": 62\n                }\n            ],\n            "currFrameIndex": 9\n        }\n    ],\n    "GameObject": [\n        {\n            "id": 7,\n            "name": "dude",\n            "pos": {\n                "x": 537,\n                "y": 127\n            },\n            "layerId": 2,\n            "type": "GameObject",\n            "gameObjectProto": {\n                "id": 4,\n                "type": "GameObjectProto"\n            }\n        },\n        {\n            "id": 63,\n            "name": "ground1",\n            "pos": {\n                "x": 436,\n                "y": 52\n            },\n            "layerId": 2,\n            "type": "GameObject",\n            "gameObjectProto": {\n                "id": 58,\n                "type": "GameObjectProto"\n            }\n        },\n        {\n            "id": 64,\n            "name": "platform",\n            "pos": {\n                "x": 12,\n                "y": 411\n            },\n            "layerId": 2,\n            "type": "GameObject",\n            "gameObjectProto": {\n                "id": 6,\n                "type": "GameObjectProto"\n            }\n        },\n        {\n            "id": 65,\n            "name": "platform",\n            "pos": {\n                "x": 383,\n                "y": 196\n            },\n            "layerId": 2,\n            "type": "GameObject",\n            "gameObjectProto": {\n                "id": 6,\n                "type": "GameObjectProto"\n            }\n        }\n    ],\n    "FrameAnimation": [\n        {\n            "name": "left",\n            "type": "FrameAnimation",\n            "frames": [\n                0,\n                1,\n                2,\n                3\n            ],\n            "id": 11\n        },\n        {\n            "name": "right",\n            "type": "FrameAnimation",\n            "frames": [\n                5,\n                6,\n                7,\n                8\n            ],\n            "id": 12\n        },\n        {\n            "name": "idleLeft",\n            "type": "FrameAnimation",\n            "frames": [\n                4\n            ],\n            "id": 13\n        },\n        {\n            "name": "idleRight",\n            "type": "FrameAnimation",\n            "frames": [\n                4\n            ],\n            "id": 14\n        }\n    ],\n    "CommonBehaviour": [\n        {\n            "id": 15,\n            "name": "Control2Dir",\n            "type": "CommonBehaviour",\n            "parameters": {\n                "velocity": "130",\n                "walkLeftAnimation": "left",\n                "walkRightAnimation": "right",\n                "idleLeftAnimation": "idleLeft",\n                "idleRightAnimation": "idleRight"\n            }\n        },\n        {\n            "name": "Draggable",\n            "type": "CommonBehaviour",\n            "id": 60\n        },\n        {\n            "name": "Draggable",\n            "type": "CommonBehaviour",\n            "id": 61\n        },\n        {\n            "name": "Draggable",\n            "type": "CommonBehaviour",\n            "id": 62\n        }\n    ],\n    "Font": [\n        {\n            "name": "font1",\n            "type": "Font",\n            "resourcePath": "resources/font1.png",\n            "fontSize": 21,\n            "fontFamily": "Berlin Sans FB",\n            "fontContext": {\n                "symbols": {\n                    "0": {\n                        "x": 258,\n                        "y": 4,\n                        "width": 12,\n                        "height": 23\n                    },\n                    "1": {\n                        "x": 279,\n                        "y": 4,\n                        "width": 5,\n                        "height": 23\n                    },\n                    "2": {\n                        "x": 293,\n                        "y": 4,\n                        "width": 10,\n                        "height": 23\n                    },\n                    "3": {\n                        "x": 4,\n                        "y": 35,\n                        "width": 9,\n                        "height": 23\n                    },\n                    "4": {\n                        "x": 21,\n                        "y": 35,\n                        "width": 10,\n                        "height": 23\n                    },\n                    "5": {\n                        "x": 40,\n                        "y": 35,\n                        "width": 9,\n                        "height": 23\n                    },\n                    "6": {\n                        "x": 58,\n                        "y": 35,\n                        "width": 10,\n                        "height": 23\n                    },\n                    "7": {\n                        "x": 77,\n                        "y": 35,\n                        "width": 9,\n                        "height": 23\n                    },\n                    "8": {\n                        "x": 94,\n                        "y": 35,\n                        "width": 9,\n                        "height": 23\n                    },\n                    "9": {\n                        "x": 112,\n                        "y": 35,\n                        "width": 10,\n                        "height": 23\n                    },\n                    " ": {\n                        "x": 4,\n                        "y": 4,\n                        "width": 5,\n                        "height": 23\n                    },\n                    "!": {\n                        "x": 17,\n                        "y": 4,\n                        "width": 4,\n                        "height": 23\n                    },\n                    "\\"": {\n                        "x": 30,\n                        "y": 4,\n                        "width": 6,\n                        "height": 23\n                    },\n                    "#": {\n                        "x": 44,\n                        "y": 4,\n                        "width": 13,\n                        "height": 23\n                    },\n                    "$": {\n                        "x": 66,\n                        "y": 4,\n                        "width": 9,\n                        "height": 23\n                    },\n                    "%": {\n                        "x": 83,\n                        "y": 4,\n                        "width": 15,\n                        "height": 23\n                    },\n                    "&": {\n                        "x": 106,\n                        "y": 4,\n                        "width": 14,\n                        "height": 23\n                    },\n                    "\'": {\n                        "x": 129,\n                        "y": 4,\n                        "width": 3,\n                        "height": 23\n                    },\n                    "(": {\n                        "x": 140,\n                        "y": 4,\n                        "width": 7,\n                        "height": 23\n                    },\n                    ")": {\n                        "x": 156,\n                        "y": 4,\n                        "width": 7,\n                        "height": 23\n                    },\n                    "*": {\n                        "x": 171,\n                        "y": 4,\n                        "width": 7,\n                        "height": 23\n                    },\n                    "+": {\n                        "x": 187,\n                        "y": 4,\n                        "width": 8,\n                        "height": 23\n                    },\n                    ",": {\n                        "x": 203,\n                        "y": 4,\n                        "width": 4,\n                        "height": 23\n                    },\n                    "-": {\n                        "x": 216,\n                        "y": 4,\n                        "width": 8,\n                        "height": 23\n                    },\n                    ".": {\n                        "x": 232,\n                        "y": 4,\n                        "width": 4,\n                        "height": 23\n                    },\n                    "/": {\n                        "x": 244,\n                        "y": 4,\n                        "width": 6,\n                        "height": 23\n                    },\n                    ":": {\n                        "x": 130,\n                        "y": 35,\n                        "width": 4,\n                        "height": 23\n                    },\n                    ";": {\n                        "x": 143,\n                        "y": 35,\n                        "width": 4,\n                        "height": 23\n                    },\n                    "<": {\n                        "x": 155,\n                        "y": 35,\n                        "width": 7,\n                        "height": 23\n                    },\n                    "=": {\n                        "x": 170,\n                        "y": 35,\n                        "width": 9,\n                        "height": 23\n                    },\n                    ">": {\n                        "x": 187,\n                        "y": 35,\n                        "width": 7,\n                        "height": 23\n                    },\n                    "?": {\n                        "x": 203,\n                        "y": 35,\n                        "width": 8,\n                        "height": 23\n                    },\n                    "@": {\n                        "x": 219,\n                        "y": 35,\n                        "width": 13,\n                        "height": 23\n                    },\n                    "A": {\n                        "x": 240,\n                        "y": 35,\n                        "width": 13,\n                        "height": 23\n                    },\n                    "B": {\n                        "x": 262,\n                        "y": 35,\n                        "width": 12,\n                        "height": 23\n                    },\n                    "C": {\n                        "x": 283,\n                        "y": 35,\n                        "width": 12,\n                        "height": 23\n                    },\n                    "D": {\n                        "x": 4,\n                        "y": 66,\n                        "width": 14,\n                        "height": 23\n                    },\n                    "E": {\n                        "x": 26,\n                        "y": 66,\n                        "width": 11,\n                        "height": 23\n                    },\n                    "F": {\n                        "x": 45,\n                        "y": 66,\n                        "width": 11,\n                        "height": 23\n                    },\n                    "G": {\n                        "x": 64,\n                        "y": 66,\n                        "width": 14,\n                        "height": 23\n                    },\n                    "H": {\n                        "x": 86,\n                        "y": 66,\n                        "width": 15,\n                        "height": 23\n                    },\n                    "I": {\n                        "x": 109,\n                        "y": 66,\n                        "width": 4,\n                        "height": 23\n                    },\n                    "J": {\n                        "x": 122,\n                        "y": 66,\n                        "width": 5,\n                        "height": 23\n                    },\n                    "K": {\n                        "x": 136,\n                        "y": 66,\n                        "width": 12,\n                        "height": 23\n                    },\n                    "L": {\n                        "x": 157,\n                        "y": 66,\n                        "width": 10,\n                        "height": 23\n                    },\n                    "M": {\n                        "x": 175,\n                        "y": 66,\n                        "width": 16,\n                        "height": 23\n                    },\n                    "N": {\n                        "x": 200,\n                        "y": 66,\n                        "width": 15,\n                        "height": 23\n                    },\n                    "O": {\n                        "x": 223,\n                        "y": 66,\n                        "width": 15,\n                        "height": 23\n                    },\n                    "P": {\n                        "x": 246,\n                        "y": 66,\n                        "width": 13,\n                        "height": 23\n                    },\n                    "Q": {\n                        "x": 267,\n                        "y": 66,\n                        "width": 15,\n                        "height": 23\n                    },\n                    "R": {\n                        "x": 291,\n                        "y": 66,\n                        "width": 12,\n                        "height": 23\n                    },\n                    "S": {\n                        "x": 4,\n                        "y": 97,\n                        "width": 9,\n                        "height": 23\n                    },\n                    "T": {\n                        "x": 21,\n                        "y": 97,\n                        "width": 10,\n                        "height": 23\n                    },\n                    "U": {\n                        "x": 40,\n                        "y": 97,\n                        "width": 13,\n                        "height": 23\n                    },\n                    "V": {\n                        "x": 62,\n                        "y": 97,\n                        "width": 13,\n                        "height": 23\n                    },\n                    "W": {\n                        "x": 83,\n                        "y": 97,\n                        "width": 18,\n                        "height": 23\n                    },\n                    "X": {\n                        "x": 110,\n                        "y": 97,\n                        "width": 12,\n                        "height": 23\n                    },\n                    "Y": {\n                        "x": 130,\n                        "y": 97,\n                        "width": 12,\n                        "height": 23\n                    },\n                    "Z": {\n                        "x": 150,\n                        "y": 97,\n                        "width": 10,\n                        "height": 23\n                    },\n                    "[": {\n                        "x": 169,\n                        "y": 97,\n                        "width": 7,\n                        "height": 23\n                    },\n                    "\\\\": {\n                        "x": 184,\n                        "y": 97,\n                        "width": 6,\n                        "height": 23\n                    },\n                    "]": {\n                        "x": 198,\n                        "y": 97,\n                        "width": 7,\n                        "height": 23\n                    },\n                    "^": {\n                        "x": 214,\n                        "y": 97,\n                        "width": 9,\n                        "height": 23\n                    },\n                    "_": {\n                        "x": 232,\n                        "y": 97,\n                        "width": 9,\n                        "height": 23\n                    },\n                    "`": {\n                        "x": 249,\n                        "y": 97,\n                        "width": 7,\n                        "height": 23\n                    },\n                    "a": {\n                        "x": 264,\n                        "y": 97,\n                        "width": 11,\n                        "height": 23\n                    },\n                    "b": {\n                        "x": 284,\n                        "y": 97,\n                        "width": 11,\n                        "height": 23\n                    },\n                    "c": {\n                        "x": 303,\n                        "y": 97,\n                        "width": 8,\n                        "height": 23\n                    },\n                    "d": {\n                        "x": 4,\n                        "y": 128,\n                        "width": 11,\n                        "height": 23\n                    },\n                    "e": {\n                        "x": 23,\n                        "y": 128,\n                        "width": 10,\n                        "height": 23\n                    },\n                    "f": {\n                        "x": 41,\n                        "y": 128,\n                        "width": 6,\n                        "height": 23\n                    },\n                    "g": {\n                        "x": 55,\n                        "y": 128,\n                        "width": 10,\n                        "height": 23\n                    },\n                    "h": {\n                        "x": 74,\n                        "y": 128,\n                        "width": 10,\n                        "height": 23\n                    },\n                    "i": {\n                        "x": 93,\n                        "y": 128,\n                        "width": 4,\n                        "height": 23\n                    },\n                    "j": {\n                        "x": 106,\n                        "y": 128,\n                        "width": 4,\n                        "height": 23\n                    },\n                    "k": {\n                        "x": 119,\n                        "y": 128,\n                        "width": 11,\n                        "height": 23\n                    },\n                    "l": {\n                        "x": 138,\n                        "y": 128,\n                        "width": 4,\n                        "height": 23\n                    },\n                    "m": {\n                        "x": 151,\n                        "y": 128,\n                        "width": 17,\n                        "height": 23\n                    },\n                    "n": {\n                        "x": 176,\n                        "y": 128,\n                        "width": 10,\n                        "height": 23\n                    },\n                    "o": {\n                        "x": 195,\n                        "y": 128,\n                        "width": 10,\n                        "height": 23\n                    },\n                    "p": {\n                        "x": 214,\n                        "y": 128,\n                        "width": 11,\n                        "height": 23\n                    },\n                    "q": {\n                        "x": 234,\n                        "y": 128,\n                        "width": 11,\n                        "height": 23\n                    },\n                    "r": {\n                        "x": 254,\n                        "y": 128,\n                        "width": 6,\n                        "height": 23\n                    },\n                    "s": {\n                        "x": 269,\n                        "y": 128,\n                        "width": 6,\n                        "height": 23\n                    },\n                    "t": {\n                        "x": 283,\n                        "y": 128,\n                        "width": 7,\n                        "height": 23\n                    },\n                    "u": {\n                        "x": 298,\n                        "y": 128,\n                        "width": 11,\n                        "height": 23\n                    },\n                    "v": {\n                        "x": 4,\n                        "y": 159,\n                        "width": 10,\n                        "height": 23\n                    },\n                    "w": {\n                        "x": 22,\n                        "y": 159,\n                        "width": 15,\n                        "height": 23\n                    },\n                    "x": {\n                        "x": 45,\n                        "y": 159,\n                        "width": 9,\n                        "height": 23\n                    },\n                    "y": {\n                        "x": 63,\n                        "y": 159,\n                        "width": 9,\n                        "height": 23\n                    },\n                    "z": {\n                        "x": 81,\n                        "y": 159,\n                        "width": 8,\n                        "height": 23\n                    },\n                    "{": {\n                        "x": 97,\n                        "y": 159,\n                        "width": 7,\n                        "height": 23\n                    },\n                    "|": {\n                        "x": 113,\n                        "y": 159,\n                        "width": 5,\n                        "height": 23\n                    },\n                    "}": {\n                        "x": 126,\n                        "y": 159,\n                        "width": 7,\n                        "height": 23\n                    },\n                    "~": {\n                        "x": 141,\n                        "y": 159,\n                        "width": 10,\n                        "height": 23\n                    },\n                    "": {\n                        "x": 159,\n                        "y": 159,\n                        "width": 10,\n                        "height": 23\n                    },\n                    "": {\n                        "x": 178,\n                        "y": 159,\n                        "width": 15,\n                        "height": 23\n                    },\n                    "": {\n                        "x": 201,\n                        "y": 159,\n                        "width": 15,\n                        "height": 23\n                    },\n                    "": {\n                        "x": 225,\n                        "y": 159,\n                        "width": 15,\n                        "height": 23\n                    },\n                    "": {\n                        "x": 249,\n                        "y": 159,\n                        "width": 15,\n                        "height": 23\n                    },\n                    "": {\n                        "x": 273,\n                        "y": 159,\n                        "width": 15,\n                        "height": 23\n                    },\n                    "": {\n                        "x": 296,\n                        "y": 159,\n                        "width": 15,\n                        "height": 23\n                    },\n                    "": {\n                        "x": 4,\n                        "y": 190,\n                        "width": 15,\n                        "height": 23\n                    },\n                    "": {\n                        "x": 27,\n                        "y": 190,\n                        "width": 15,\n                        "height": 23\n                    },\n                    "": {\n                        "x": 51,\n                        "y": 190,\n                        "width": 15,\n                        "height": 23\n                    },\n                    "": {\n                        "x": 75,\n                        "y": 190,\n                        "width": 15,\n                        "height": 23\n                    },\n                    "": {\n                        "x": 99,\n                        "y": 190,\n                        "width": 15,\n                        "height": 23\n                    },\n                    "": {\n                        "x": 122,\n                        "y": 190,\n                        "width": 15,\n                        "height": 23\n                    },\n                    "": {\n                        "x": 146,\n                        "y": 190,\n                        "width": 15,\n                        "height": 23\n                    },\n                    "": {\n                        "x": 170,\n                        "y": 190,\n                        "width": 15,\n                        "height": 23\n                    },\n                    "": {\n                        "x": 194,\n                        "y": 190,\n                        "width": 15,\n                        "height": 23\n                    },\n                    "": {\n                        "x": 217,\n                        "y": 190,\n                        "width": 15,\n                        "height": 23\n                    },\n                    "": {\n                        "x": 241,\n                        "y": 190,\n                        "width": 15,\n                        "height": 23\n                    },\n                    "": {\n                        "x": 265,\n                        "y": 190,\n                        "width": 15,\n                        "height": 23\n                    },\n                    "": {\n                        "x": 289,\n                        "y": 190,\n                        "width": 15,\n                        "height": 23\n                    },\n                    "": {\n                        "x": 4,\n                        "y": 221,\n                        "width": 15,\n                        "height": 23\n                    },\n                    "": {\n                        "x": 27,\n                        "y": 221,\n                        "width": 15,\n                        "height": 23\n                    },\n                    "": {\n                        "x": 51,\n                        "y": 221,\n                        "width": 15,\n                        "height": 23\n                    },\n                    "А": {\n                        "x": 75,\n                        "y": 221,\n                        "width": 15,\n                        "height": 23\n                    },\n                    "Б": {\n                        "x": 98,\n                        "y": 221,\n                        "width": 12,\n                        "height": 23\n                    },\n                    "В": {\n                        "x": 118,\n                        "y": 221,\n                        "width": 14,\n                        "height": 23\n                    },\n                    "Г": {\n                        "x": 140,\n                        "y": 221,\n                        "width": 12,\n                        "height": 23\n                    },\n                    "Д": {\n                        "x": 160,\n                        "y": 221,\n                        "width": 14,\n                        "height": 23\n                    },\n                    "Е": {\n                        "x": 182,\n                        "y": 221,\n                        "width": 12,\n                        "height": 23\n                    },\n                    "Ж": {\n                        "x": 203,\n                        "y": 221,\n                        "width": 18,\n                        "height": 23\n                    },\n                    "З": {\n                        "x": 230,\n                        "y": 221,\n                        "width": 10,\n                        "height": 23\n                    },\n                    "И": {\n                        "x": 249,\n                        "y": 221,\n                        "width": 15,\n                        "height": 23\n                    },\n                    "Й": {\n                        "x": 272,\n                        "y": 221,\n                        "width": 15,\n                        "height": 23\n                    },\n                    "К": {\n                        "x": 295,\n                        "y": 221,\n                        "width": 14,\n                        "height": 23\n                    },\n                    "Л": {\n                        "x": 4,\n                        "y": 252,\n                        "width": 14,\n                        "height": 23\n                    },\n                    "М": {\n                        "x": 26,\n                        "y": 252,\n                        "width": 18,\n                        "height": 23\n                    },\n                    "Н": {\n                        "x": 52,\n                        "y": 252,\n                        "width": 15,\n                        "height": 23\n                    },\n                    "О": {\n                        "x": 76,\n                        "y": 252,\n                        "width": 15,\n                        "height": 23\n                    },\n                    "П": {\n                        "x": 99,\n                        "y": 252,\n                        "width": 15,\n                        "height": 23\n                    },\n                    "Р": {\n                        "x": 122,\n                        "y": 252,\n                        "width": 11,\n                        "height": 23\n                    },\n                    "С": {\n                        "x": 142,\n                        "y": 252,\n                        "width": 14,\n                        "height": 23\n                    },\n                    "Т": {\n                        "x": 164,\n                        "y": 252,\n                        "width": 12,\n                        "height": 23\n                    },\n                    "У": {\n                        "x": 184,\n                        "y": 252,\n                        "width": 14,\n                        "height": 23\n                    },\n                    "Ф": {\n                        "x": 207,\n                        "y": 252,\n                        "width": 16,\n                        "height": 23\n                    },\n                    "Х": {\n                        "x": 232,\n                        "y": 252,\n                        "width": 15,\n                        "height": 23\n                    },\n                    "Ц": {\n                        "x": 255,\n                        "y": 252,\n                        "width": 15,\n                        "height": 23\n                    },\n                    "Ч": {\n                        "x": 278,\n                        "y": 252,\n                        "width": 13,\n                        "height": 23\n                    },\n                    "Ш": {\n                        "x": 4,\n                        "y": 283,\n                        "width": 21,\n                        "height": 23\n                    },\n                    "Щ": {\n                        "x": 33,\n                        "y": 283,\n                        "width": 21,\n                        "height": 23\n                    },\n                    "Ъ": {\n                        "x": 62,\n                        "y": 283,\n                        "width": 14,\n                        "height": 23\n                    },\n                    "Ы": {\n                        "x": 85,\n                        "y": 283,\n                        "width": 18,\n                        "height": 23\n                    },\n                    "Ь": {\n                        "x": 111,\n                        "y": 283,\n                        "width": 12,\n                        "height": 23\n                    },\n                    "Э": {\n                        "x": 131,\n                        "y": 283,\n                        "width": 13,\n                        "height": 23\n                    },\n                    "Ю": {\n                        "x": 153,\n                        "y": 283,\n                        "width": 21,\n                        "height": 23\n                    },\n                    "Я": {\n                        "x": 183,\n                        "y": 283,\n                        "width": 14,\n                        "height": 23\n                    },\n                    "а": {\n                        "x": 205,\n                        "y": 283,\n                        "width": 9,\n                        "height": 23\n                    },\n                    "б": {\n                        "x": 222,\n                        "y": 283,\n                        "width": 10,\n                        "height": 23\n                    },\n                    "в": {\n                        "x": 241,\n                        "y": 283,\n                        "width": 9,\n                        "height": 23\n                    },\n                    "г": {\n                        "x": 258,\n                        "y": 283,\n                        "width": 8,\n                        "height": 23\n                    },\n                    "д": {\n                        "x": 275,\n                        "y": 283,\n                        "width": 10,\n                        "height": 23\n                    },\n                    "е": {\n                        "x": 294,\n                        "y": 283,\n                        "width": 9,\n                        "height": 23\n                    },\n                    "ж": {\n                        "x": 4,\n                        "y": 314,\n                        "width": 14,\n                        "height": 23\n                    },\n                    "з": {\n                        "x": 26,\n                        "y": 314,\n                        "width": 8,\n                        "height": 23\n                    },\n                    "и": {\n                        "x": 42,\n                        "y": 314,\n                        "width": 11,\n                        "height": 23\n                    },\n                    "й": {\n                        "x": 62,\n                        "y": 314,\n                        "width": 11,\n                        "height": 23\n                    },\n                    "к": {\n                        "x": 81,\n                        "y": 314,\n                        "width": 10,\n                        "height": 23\n                    },\n                    "л": {\n                        "x": 99,\n                        "y": 314,\n                        "width": 10,\n                        "height": 23\n                    },\n                    "м": {\n                        "x": 117,\n                        "y": 314,\n                        "width": 13,\n                        "height": 23\n                    },\n                    "н": {\n                        "x": 139,\n                        "y": 314,\n                        "width": 11,\n                        "height": 23\n                    },\n                    "о": {\n                        "x": 158,\n                        "y": 314,\n                        "width": 10,\n                        "height": 23\n                    },\n                    "п": {\n                        "x": 176,\n                        "y": 314,\n                        "width": 11,\n                        "height": 23\n                    },\n                    "р": {\n                        "x": 196,\n                        "y": 314,\n                        "width": 10,\n                        "height": 23\n                    },\n                    "с": {\n                        "x": 214,\n                        "y": 314,\n                        "width": 9,\n                        "height": 23\n                    },\n                    "т": {\n                        "x": 232,\n                        "y": 314,\n                        "width": 9,\n                        "height": 23\n                    },\n                    "у": {\n                        "x": 249,\n                        "y": 314,\n                        "width": 10,\n                        "height": 23\n                    },\n                    "ф": {\n                        "x": 267,\n                        "y": 314,\n                        "width": 13,\n                        "height": 23\n                    },\n                    "х": {\n                        "x": 289,\n                        "y": 314,\n                        "width": 10,\n                        "height": 23\n                    },\n                    "ц": {\n                        "x": 4,\n                        "y": 345,\n                        "width": 11,\n                        "height": 23\n                    },\n                    "ч": {\n                        "x": 23,\n                        "y": 345,\n                        "width": 10,\n                        "height": 23\n                    },\n                    "ш": {\n                        "x": 41,\n                        "y": 345,\n                        "width": 16,\n                        "height": 23\n                    },\n                    "щ": {\n                        "x": 65,\n                        "y": 345,\n                        "width": 16,\n                        "height": 23\n                    },\n                    "ъ": {\n                        "x": 90,\n                        "y": 345,\n                        "width": 10,\n                        "height": 23\n                    },\n                    "ы": {\n                        "x": 108,\n                        "y": 345,\n                        "width": 14,\n                        "height": 23\n                    },\n                    "ь": {\n                        "x": 131,\n                        "y": 345,\n                        "width": 9,\n                        "height": 23\n                    },\n                    "э": {\n                        "x": 148,\n                        "y": 345,\n                        "width": 9,\n                        "height": 23\n                    },\n                    "ю": {\n                        "x": 165,\n                        "y": 345,\n                        "width": 15,\n                        "height": 23\n                    },\n                    "я": {\n                        "x": 189,\n                        "y": 345,\n                        "width": 9,\n                        "height": 23\n                    },\n                    "ѐ": {\n                        "x": 207,\n                        "y": 345,\n                        "width": 9,\n                        "height": 23\n                    },\n                    "ё": {\n                        "x": 224,\n                        "y": 345,\n                        "width": 9,\n                        "height": 23\n                    },\n                    "ђ": {\n                        "x": 241,\n                        "y": 345,\n                        "width": 10,\n                        "height": 23\n                    },\n                    "ѓ": {\n                        "x": 259,\n                        "y": 345,\n                        "width": 8,\n                        "height": 23\n                    },\n                    "є": {\n                        "x": 276,\n                        "y": 345,\n                        "width": 9,\n                        "height": 23\n                    },\n                    "ѕ": {\n                        "x": 293,\n                        "y": 345,\n                        "width": 8,\n                        "height": 23\n                    },\n                    "і": {\n                        "x": 309,\n                        "y": 345,\n                        "width": 5,\n                        "height": 23\n                    },\n                    "ї": {\n                        "x": 4,\n                        "y": 376,\n                        "width": 5,\n                        "height": 23\n                    },\n                    "ј": {\n                        "x": 17,\n                        "y": 376,\n                        "width": 5,\n                        "height": 23\n                    },\n                    "љ": {\n                        "x": 31,\n                        "y": 376,\n                        "width": 15,\n                        "height": 23\n                    },\n                    "њ": {\n                        "x": 54,\n                        "y": 376,\n                        "width": 15,\n                        "height": 23\n                    },\n                    "ћ": {\n                        "x": 78,\n                        "y": 376,\n                        "width": 10,\n                        "height": 23\n                    }\n                },\n                "width": 320,\n                "height": 403\n            },\n            "id": 22\n        }\n    ],\n    "TileMap": [\n        {\n            "id": 52,\n            "width": 50,\n            "height": 50,\n            "type": "TileMap",\n            "spriteSheet": {\n                "id": 57,\n                "type": "SpriteSheet"\n            },\n            "data": [\n                [],\n                null,\n                null,\n                [\n                    null,\n                    null,\n                    null,\n                    null,\n                    2,\n                    null,\n                    null\n                ],\n                [\n                    null,\n                    null\n                ],\n                [\n                    1,\n                    null,\n                    3,\n                    null,\n                    null,\n                    1,\n                    1,\n                    1,\n                    1,\n                    1,\n                    1,\n                    1,\n                    1,\n                    1\n                ],\n                null,\n                [\n                    null,\n                    1,\n                    null,\n                    1\n                ]\n            ]\n        }\n    ]\n}';
}, function(t, e, n) {
    "use strict";
    e.__esModule = true;
    e.PlatformBehaviour = e.MainSceneBehaviour = e.Ground1Behaviour = e.DudeBehaviour = undefined;
    var r = n(22);
    var i = n(23);
    var o = n(24);
    var a = n(25);
    e.DudeBehaviour = r.DudeBehaviour;
    e.Ground1Behaviour = i.Ground1Behaviour;
    e.MainSceneBehaviour = o.MainSceneBehaviour;
    e.PlatformBehaviour = a.PlatformBehaviour;
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
}, function(t, e, n) {
    "use strict";
    e.__esModule = true;
    function r(t, e) {
        if (!(t instanceof e)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    var i = e.Ground1Behaviour = function() {
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
        t.prototype.onCreate = function t() {
            this.x = 0;
            this.y = 0;
            this.points = [];
            this.scene.on("mouseMove", function(t) {});
            this.scene.on("mouseMove", function(t) {});
        };
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
    var r = n(29);
    var i = h(r);
    var o = n(28);
    var a = h(o);
    var s = n(27);
    var u = h(s);
    function h(t) {
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
    var h = function(t) {
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
            if (e.isPressed(e.KEY.LEFT) || e.isPressed(e.KEY.GAME_PAD_AXIS_LEFT)) {
                r.rigidBody.vel.x = -n.velocity;
                this.go("Left");
            }
            if (e.isPressed(e.KEY.RIGHT) || e.isPressed(e.KEY.GAME_PAD_AXIS_RIGHT)) {
                r.rigidBody.vel.x = n.velocity;
                this.go("Right");
            }
            if (e.isJustReleased(e.KEY.LEFT) || e.isJustReleased(e.KEY.GAME_PAD_AXIS_LEFT)) {
                this.stop();
            } else if (e.isJustReleased(e.KEY.RIGHT) || e.isJustReleased(e.KEY.GAME_PAD_AXIS_RIGHT)) {
                this.stop();
            }
        };
        return e;
    }(i.default);
    e.default = h;
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
        e.prototype.manage = function e(n, r) {
            t.prototype.manage.call(this, n, r);
        };
        e.prototype.onUpdate = function t() {
            var e = this.game.keyboard;
            var n = this.parameters;
            var r = this.gameObject;
            if (e.isPressed(e.KEY.UP) || e.isPressed(e.KEY.GAME_PAD_AXIS_UP)) {
                r.rigidBody.vel.y = -n.velocity;
                this.go("Up");
            }
            if (e.isPressed(e.KEY.DOWN) || e.isPressed(e.KEY.GAME_PAD_AXIS_DOWN)) {
                r.rigidBody.vel.y = n.velocity;
                this.go("Down");
            }
            if (e.isPressed(e.KEY.LEFT) || e.isPressed(e.KEY.GAME_PAD_AXIS_LEFT)) {
                r.rigidBody.vel.x = -n.velocity;
                this.go("Left");
            }
            if (e.isPressed(e.KEY.RIGHT) || e.isPressed(e.KEY.GAME_PAD_AXIS_RIGHT)) {
                r.rigidBody.vel.x = n.velocity;
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
    }(i.default);
    e.default = h;
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
    var h = function(t) {
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
    e.default = h;
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
    var c = (i = r = function(t) {
        f(e, t);
        function e(n) {
            u(this, e);
            return h(this, t.call(this, n));
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
    var c = (i = r = function(t) {
        f(e, t);
        function e(n) {
            u(this, e);
            return h(this, t.call(this, n));
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
            this.scale = {
                x: 1,
                y: 1
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
    var r, i;
    function o(t, e) {
        if (!(t instanceof e)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    var a = {};
    var s = function t(e, n) {
        var r = e.gamepad;
        if (n) {
            a[r.index] = r;
        } else {
            delete a[r.index];
        }
    };
    window.addEventListener("gamepadconnected", function(t) {
        if (true) console.log("Gamepad connected at index %d: %s. %d buttons, %d axes.", t.gamepad.index, t.gamepad.id, t.gamepad.buttons.length, t.gamepad.axes.length);
    });
    window.addEventListener("gamepaddisconnected", function(t) {
        if (true) console.log("Gamepad disconnected from index %d: %s", t.gamepad.index, t.gamepad.id);
    });
    var u = (i = r = function() {
        function t(e) {
            o(this, t);
            this.game = e;
        }
        t.prototype.update = function e() {
            this.gamepads = navigator.webkitGetGamepads && navigator.webkitGetGamepads() || navigator.webkitGamepads || navigator.mozGamepads || navigator.msGamepads || navigator.gamepads || navigator.getGamepads && navigator.getGamepads();
            for (var n = 0, r = this.gamepads.length; n < r; n++) {
                var i = this.gamepads[n];
                if (!i) continue;
                var o = i.buttons.length;
                if (o > 7) o = 7;
                for (var a = 0; a < o; a++) {
                    var s = i.buttons[a];
                    if (s.pressed) {
                        this.game.keyboard.press(a);
                    } else {
                        this.game.keyboard.release(a);
                    }
                }
                if (i.axes[0] > t.AXIS_TOLERANCE) this.game.keyboard.press(this.game.keyboard.KEY.GAME_PAD_AXIS_RIGHT); else this.game.keyboard.release(this.game.keyboard.KEY.GAME_PAD_AXIS_RIGHT);
                if (i.axes[0] < -t.AXIS_TOLERANCE) this.game.keyboard.press(this.game.keyboard.KEY.GAME_PAD_AXIS_LEFT); else this.game.keyboard.release(this.game.keyboard.KEY.GAME_PAD_AXIS_LEFT);
                if (i.axes[1] > t.AXIS_TOLERANCE) this.game.keyboard.press(this.game.keyboard.KEY.GAME_PAD_AXIS_DOWN); else this.game.keyboard.release(this.game.keyboard.KEY.GAME_PAD_AXIS_DOWN);
                if (i.axes[1] < -t.AXIS_TOLERANCE) this.game.keyboard.press(this.game.keyboard.KEY.GAME_PAD_AXIS_UP); else this.game.keyboard.release(this.game.keyboard.KEY.GAME_PAD_AXIS_UP);
            }
        };
        return t;
    }(), r.AXIS_TOLERANCE = .9, i);
    e.default = u;
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
            this.buffer[e] = i;
        };
        t.prototype.release = function t(e) {
            if (this.isReleased(e)) return;
            this.buffer[e] = a;
        };
        t.prototype.isPressed = function t(e) {
            return this.buffer[e] >= o;
        };
        t.prototype.isJustPressed = function t(e) {
            return this.buffer[e] === i;
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
                if (e.buffer[t] === i) {
                    e.buffer[t] = o;
                }
            });
        };
        t.prototype.listenTo = function t() {
            var e = this;
            window.addEventListener("keydown", function(t) {
                var n = t.keyCode;
                e.press(n);
            });
            window.addEventListener("keyup", function(t) {
                var n = t.keyCode;
                e.release(n);
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
                x: ~~((e.clientX - this.game.pos.x) / this.game.scale.x / this.game.camera.scale.x) + this.game.camera.pos.x,
                y: ~~((e.clientY - this.game.pos.y) / this.game.scale.y / this.game.camera.scale.y) + this.game.camera.pos.y,
                id: e.identifier || 0
            };
        };
        t.prototype.triggerEvent = function t(e, n, r) {
            var o = this.game;
            var a = o.getCurrScene();
            if (!a) return;
            var s = this.resolveScreenPoint(e);
            t: for (var u = 0; u < a.layers.length; u++) {
                var h = a.layers[a.layers.length - 1 - u];
                for (var f = 0; f < h.gameObjects.length; f++) {
                    var c = h.gameObjects[f];
                    if (i.default.isPointInRect(s, c.getRect())) {
                        c.trigger(n, {
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
    var r = n(53);
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
    var h = function() {
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
    e.default = h;
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
            for (var h = 0, f = o.length; h < f; h++) {
                var c = o[h];
                var l = c.getRect();
                if (n !== o[h] && t.overlapTest(a, l)) {
                    var d = a.bottom - l.y;
                    var p = l.bottom - a.y;
                    var y = a.x + a.width - l.x;
                    var g = l.right - a.x;
                    var m = Math.min(d, p, y, g);
                    if (d === m) {
                        n.pos.y = l.y - a.height;
                        u = true;
                    } else if (p === m) {
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
    var r = n(50);
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
    var h = n(4);
    var f = y(h);
    var c = n(5);
    var l = y(c);
    var d = n(15);
    var p = y(d);
    function y(t) {
        return t && t.__esModule ? t : {
            default: t
        };
    }
    function g(t, e) {
        if (!(t instanceof e)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    var m = function() {
        function t(e, n) {
            g(this, t);
            this.gl = e;
            this.plane = new i.default();
            this.program = new a.default(e, [ l.default, p.default ]);
            this.posVertexBuffer = new u.default(e);
            this.posIndexBuffer = new f.default(e);
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
    e.default = m;
}, function(t, e, n) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var r = n(2);
    var i = d(r);
    var o = n(3);
    var a = d(o);
    var s = n(4);
    var u = d(s);
    var h = n(66);
    var f = d(h);
    var c = n(68);
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
        function t(e, n) {
            p(this, t);
            this.gl = e;
            this.program = new i.default(e, [ f.default, l.default ]);
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
    var h = n(15);
    var f = c(h);
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
            this.program = new i.default(e, [ u.default, f.default ]);
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
    e.default = d;
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
    var h = n(4);
    var f = y(h);
    var c = n(5);
    var l = y(c);
    var d = n(67);
    var p = y(d);
    function y(t) {
        return t && t.__esModule ? t : {
            default: t
        };
    }
    function g(t, e) {
        if (!(t instanceof e)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    var m = function() {
        function t(e) {
            g(this, t);
            this.gl = e;
            this.plane = new i.default();
            this.program = new a.default(e, [ l.default, p.default ]);
            this.posVertexBuffer = new u.default(e);
            this.posIndexBuffer = new f.default(e);
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
    e.default = m;
}, function(t, e, n) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var r = n(41);
    var i = b(r);
    var o = n(49);
    var a = b(o);
    var s = n(46);
    var u = b(s);
    var h = n(48);
    var f = b(h);
    var c = n(47);
    var l = b(c);
    var d = n(43);
    var p = b(d);
    var y = n(44);
    var g = b(y);
    var m = n(9);
    var v = b(m);
    var w = n(10);
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
    var A = 1e3;
    var S = new g.default();
    var M = function t(e, n, r, i, o, a, s, u) {
        var h = v.default.makeZToWMatrix(1);
        var f = v.default.ortho(0, o, 0, a, -A, A);
        var c = v.default.makeScale(r * s, i * u, 1);
        var l = v.default.makeTranslation(e * s, n * u, 0);
        var d = v.default.matrixMultiply(c, l);
        d = v.default.matrixMultiply(d, S.getCurrentMatrix());
        d = v.default.matrixMultiply(d, f);
        d = v.default.matrixMultiply(d, h);
        return d;
    };
    var R = function t(e, n, r, i, o, a) {
        var s = v.default.makeScale(r / o, i / a, 1);
        var u = v.default.makeTranslation(e / o, n / a, 0);
        return v.default.matrixMultiply(s, u);
    };
    var P = function(t) {
        T(e, t);
        function e(n) {
            x(this, e);
            var r = E(this, t.call(this, n));
            var i = document.createElement("canvas");
            document.body.appendChild(i);
            i.setAttribute("width", n.width);
            i.setAttribute("height", n.height);
            r.container = i;
            r.matrixStack = S;
            r.registerResize();
            r.currTex = null;
            r._init();
            return r;
        }
        e.prototype._init = function t() {
            var e = O(this.container);
            this.gl = e;
            this.spriteRectDrawer = new a.default(e);
            this.colorRectDrawer = new u.default(e);
            this.polyLineDrawer = new f.default(e);
            this.modelDrawer = new l.default(e);
            this.frameBuffer = new p.default(e, this.game.width, this.game.height);
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
            var h = u.getSize().width;
            var f = u.getSize().height;
            if (a === undefined) {
                a = n;
            }
            if (s === undefined) {
                s = r;
            }
            if (i === undefined) {
                i = h;
            }
            if (o === undefined) {
                o = f;
            }
            if (this.currTex !== u) {
                u.bind();
                this.currTex = u;
            }
            this.spriteRectDrawer.bind();
            this.spriteRectDrawer.setUniform("u_textureMatrix", R(n, r, i, o, h, f));
            this.spriteRectDrawer.setUniform("u_matrix", M(a, s, i, o, this.game.width, this.game.height, 1, 1));
            this.spriteRectDrawer.setUniform("u_alpha", 1);
            this.spriteRectDrawer.draw();
            this.spriteRectDrawer.unbind();
        };
        e.prototype.fillRect = function t(e, n, r, i, o) {
            var a = this.colorRectDrawer;
            var s = this.gl;
            a.bind();
            a.setUniform("u_matrix", M(e, n, r, i, this.game.width, this.game.height, 1, 1));
            a.setUniform("u_rgba", o);
            s.blendFunc(s.SRC_ALPHA, s.ONE_MINUS_SRC_ALPHA);
            a.draw();
            a.unbind();
        };
        e.prototype.drawRect = function t(e, n, r, i, o) {
            this.fillRect(e, n, r, 1, o);
            this.fillRect(e, n + i, r, 1, o);
            this.fillRect(e, n, 1, i, o);
            this.fillRect(e + r, n, 1, i, o);
        };
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
            this.spriteRectDrawer.setUniform("u_matrix", M(0, 0, this.game.width, this.game.height, this.game.width, this.game.height, 1, 1));
            this.spriteRectDrawer.setUniform("u_textureMatrix", R(0, 0, this.game.width, this.game.height, this.game.width, this.game.height));
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
                var t = new _.default(r.gl);
                t.setImage(i);
                r.renderableCache[e] = t;
                n();
            };
        };
        return e;
    }(i.default);
    e.default = P;
}, function(t, e, n) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var r = n(54);
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
    var r = n(57);
    var i = S(r);
    var o = n(63);
    var a = S(o);
    var s = n(13);
    var u = S(s);
    var h = n(58);
    var f = S(h);
    var c = n(55);
    var l = S(c);
    var d = n(60);
    var p = S(d);
    var y = n(61);
    var g = S(y);
    var m = n(62);
    var v = S(m);
    var w = n(56);
    var _ = S(w);
    var b = n(59);
    var x = S(b);
    var E = n(64);
    var T = S(E);
    var O = n(14);
    var A = S(O);
    function S(t) {
        return t && t.__esModule ? t : {
            default: t
        };
    }
    e.FrameAnimation = i.default;
    e.SpriteSheet = a.default;
    e.GameObjectProto = u.default;
    e.GameObject = f.default;
    e.CommonBehaviour = l.default;
    e.ParticleSystem = p.default;
    e.Scene = g.default;
    e.Sound = v.default;
    e.Font = _.default;
    e.Layer = x.default;
    e.TextField = T.default;
    e.TileMap = A.default;
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
    var h = function(t) {
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
    e.default = h;
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
    var h = function(t) {
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
    e.default = h;
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
    var h = function(t) {
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
    e.default = h;
}, function(t, e, n) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var r = n(13);
    var i = u(r);
    var o = n(26);
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
    var d = function(t) {
        c(e, t);
        function e(n) {
            h(this, e);
            var r = f(this, t.call(this, n));
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
    e.default = d;
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
    var h = function(t) {
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
    e.default = h;
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
    var d = function(t) {
        c(e, t);
        function e(n) {
            h(this, e);
            var r = f(this, t.call(this, n));
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
    e.default = d;
}, function(t, e, n) {
    "use strict";
    e.__esModule = true;
    e.default = undefined;
    var r = n(0);
    var i = h(r);
    var o = n(37);
    var a = h(o);
    var s = n(14);
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
    var d = function(t) {
        l(e, t);
        function e(n) {
            f(this, e);
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
            r.tileMap = new u.default(n);
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
            var r = this.game._renderer;
            r.beginFrameBuffer();
            if (this.useBG) r.clearColor(this.colorBG); else r.clear();
            var i = this.layers;
            var o = this.layers.length;
            var a = o - 1;
            r.scale(this.game.camera.scale.x, this.game.camera.scale.y);
            this.game.camera.update(e);
            r.translate(-this.game.camera.pos.x, -this.game.camera.pos.y);
            if (this._individualBehaviour) this._individualBehaviour.onUpdate();
            while (o--) {
                i[o - a].update(e, n);
            }
            this.game.repository.getArray("ParticleSystem").forEach(function(t) {
                t.update(e, n);
            });
            this._updateTileMap();
            r.flipFrameBuffer();
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
                    var h = this.tileMap.data[s] && this.tileMap.data[s][u];
                    if (h == null) continue;
                    n.drawImage(e.resourcePath, e.getFramePosX(h), e.getFramePosY(h), e._frameWidth, e._frameHeight, u * e._frameWidth, s * e._frameHeight);
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
    e.default = d;
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
    var h = function(t) {
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
    e.default = h;
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
    var h = function(t) {
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
    e.default = h;
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
    var h = function(t) {
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
    e.default = h;
}, function(t, e, n) {
    "use strict";
    var r = n(18);
    var i = h(r);
    var o = n(19);
    var a = h(o);
    var s = n(20);
    var u = h(s);
    function h(t) {
        return t && t.__esModule ? t : {
            default: t
        };
    }
    var f = JSON.parse(a.default);
    var c = JSON.parse(u.default);
    if (1 && f.startSceneId === undefined) throw "start scene not specified";
    var l = new i.default(f);
    l.repository.setDescriptions(c);
    var d = l.repository.getObject(f.startSceneId, "Scene");
    l.runScene(d);
    if (true) window.game = l;
}, function(t, e) {
    t.exports = "attribute vec4 a_position;\nattribute vec2 a_texcoord;\nattribute vec3 a_normal;\n\nuniform mat4 u_modelMatrix;\nuniform mat4 u_projectionMatrix;\n\nvarying vec2 v_texcoord;\nvarying vec3 v_normal;\n\nvoid main() {\n\n  gl_Position = u_projectionMatrix * u_modelMatrix * a_position;\n  v_texcoord = a_texcoord;\n  v_normal = a_normal;\n}";
}, function(t, e) {
    t.exports = "precision mediump float;\n\nvarying vec2 v_texcoord;\n\nuniform sampler2D texture;\nuniform float u_alpha;\n\n\nvoid main() {\n    gl_FragColor = texture2D(texture, v_texcoord);\n    gl_FragColor.a *= u_alpha;\n}";
}, function(t, e) {
    t.exports = "precision highp float;\n\nvarying vec2 v_texcoord;\nvarying vec3 v_normal;\n\nuniform sampler2D texture;\nuniform float u_alpha;\nuniform mat4 u_modelMatrix;\n\n\nvoid main() {\n\n    vec3 lightDirection = normalize(vec3(-1,-1,1));\n    vec3 normalized = normalize((u_modelMatrix * vec4(v_normal,0)).xyz);\n    float lightFactor = max(0.5,dot(lightDirection,normalized));\n    gl_FragColor = texture2D(texture, v_texcoord);\n    gl_FragColor.rgb *= lightFactor;\n    gl_FragColor.a *= u_alpha;\n}";
} ]);