var k = {};
function p(h, g) {
    function e(a) {
        var b = {ga: {}};
        a.code(b, b.ga);
        a.nc = b
    }

    g = g || {};
    var c = k[h];
    if (!c) {
        if (g.wa)return {
            bc: !0, aa: function () {
                return {bc: !0}
            }
        };
        console.trace("can not found module with name " + (h || "(name not specified)"));
        throw"can not found module with name " + (h || "(name not specified)");
    }
    c.nc || e(c);
    return c.nc.ga
}
(function () {
    function h(c, a, b) {
        if (c)for (var d in c)"function" == typeof c[d] && "function" == typeof b[d] && e.test(c[d]) ? a[d] = g(c[d], b[d]) : a[d] = c[d]
    }

    function g(c, a) {
        return function () {
            var b = this.za;
            this.za = a;
            try {
                return c.apply(this, arguments)
            } finally {
                this.za = b
            }
        }
    }

    window.Xd = function () {
    };
    Class.extend = function (c, a, b) {
        function d() {
            this.vb && this.vb.apply(this, arguments);
            this.construct && this.construct()
        }

        var f = [];
        c.slice ? (f = c, c = a, a = b) : c.call && (b = {}, c(b), c = b);
        d.prototype = Class.Ad(this.prototype);
        d.prototype.constructor =
            d;
        d.extend = Class.extend;
        h(a, d, this);
        for (a = 0; a < f.length; a++)h(f[a], d.prototype, this.prototype);
        h(c, d.prototype, this.prototype);
        return d
    };
    var e = /xyz/.test(function () {
        xyz
    }) ? /\b_super\b/ : /./;
    Class.Ad = Object.create || function (c) {
            function a() {
            }

            a.prototype = c;
            return new a
        }
})();
k.behaviour = {
    code: function (h, g) {
        g.zb = {
            control4dir: function (c, a, b, d) {
                function f(a) {
                    n["walk" + a + "Animation"].play()
                }

                function e(a) {
                    b.Sd();
                    b.ka.x = 0;
                    b.ka.y = 0;
                    a = "idle" + a + "Animation";
                    n[a] && n[a].play()
                }

                var m = p("keyboard").aa(), n = {};
                ["Left", "Right", "Up", "Down"].forEach(function (a) {
                    var f = "walk" + a + "Animation";
                    a = "idle" + a + "Animation";
                    n[f] = b.hc(d[f]);
                    if (!n[f])throw"can not find animation " + d[f] + " an gameObject " + b.name;
                    d[a] && (n[a] = b.hc(d[a]))
                });
                a.Aa = function () {
                    m.hb(m.Ra) && (b.ka.y = -d.Ob, f("Up"));
                    m.hb(m.Oa) && (b.ka.y =
                        d.Ob, f("Down"));
                    m.hb(m.Pa) && (b.ka.x = -d.Ob, f("Left"));
                    m.hb(m.Qa) && (b.ka.x = d.Ob, f("Right"));
                    m.gb(m.Pa) ? e("Left") : m.gb(m.Qa) ? e("Right") : m.gb(m.Ra) ? e("Up") : m.gb(m.Oa) && e("Down")
                }
            }
        };
        var e = {Ab: {}, ob: {}};
        e.Ab["tiles.js"] = function (c) {
            c.Aa = function () {
            }
        };
        e.Ab["walker.js"] = function (c, a) {
            p("camera").aa().nd(a);
            c.Aa = function () {
                a.cb().lb(10, 10, window.bf)
            }
        };
        e.ob["22.js"] = function (c) {
            c.Aa = function () {
            }
        };
        e.ob["mainScene.js"] = function (c) {
            c.Aa = function () {
            }
        };
        e.ob["scene2.js"] = function (c) {
            c.Aa = function () {
            }
        };
        g.scripts =
            e
    }
};
k.collider = {
    code: function (h) {
        function g() {
            var a;
            this.Qd = function () {
                a = c.Va.Fa
            };
            this.Eb = function (b, f, c) {
                if (b.ba.x != f || b.ba.y != c) {
                    b.mb || (b.ba.x = f, b.ba.y = c);
                    var d = !1;
                    a.some(function (a) {
                        if (b != a) {
                            var m = b.mc();
                            m.x = f;
                            m.y = c;
                            if (e.Dd(m, a.mc())) {
                                if (a.mb)return d = !0, b.Ea("collide", a), !0;
                                b.Ea("overlap", a)
                            }
                        }
                    });
                    d || (b.ba.x = f, b.ba.y = c);
                    return d
                }
            }
        }

        var e = p("mathEx"), c = p("sceneManager").aa(), a = null;
        h.ga.aa = function () {
            null == a && (a = new g);
            return a
        }
    }
};
k.eventEmitter = {
    code: function (h, g) {
        g.Ic = function () {
            var e = {};
            this.sc = function (c, a) {
                e[c] = e[c] || [];
                e[c].push(a)
            };
            this.Ea = function (c, a) {
                var b = e[c];
                b && b.forEach(function (b) {
                    b(a)
                })
            }
        }
    }
};
k.consts = {
    code: function (h, g) {
        h.ga.rc = function () {
        };
        h.ga.Pc = "sound spriteSheet frameAnimation font gameObject layer scene particleSystem".split(" ");
        g.Sb = {Rb: 0, Fc: 1, Qb: 2, Gc: 3, Lc: 4}
    }
};
k.keyboard = {
    code: function (h) {
        function g() {
            var c = {}, a = this;
            this.Ra = 38;
            this.Oa = 40;
            this.Pa = 37;
            this.Qa = 39;
            this.hb = function (a) {
                return 0 < c[a]
            };
            this.gb = function (a) {
                return -1 == c[a]
            };
            this.update = function () {
                window.ab || [this.Ra, this.Oa, this.Pa, this.Qa].forEach(function (a) {
                    2 == c[a] ? c[a] = 1 : -1 == c[a] && (c[a] = 0)
                })
            };
            window.addEventListener("keydown", function (b) {
                b = b.keyCode;
                switch (b) {
                    case a.Ra:
                    case a.Oa:
                    case a.Pa:
                    case a.Qa:
                        c[b] = 1
                }
            });
            window.addEventListener("keyup", function (b) {
                b = b.keyCode;
                switch (b) {
                    case a.Ra:
                    case a.Oa:
                    case a.Pa:
                    case a.Qa:
                        c[b] = -1
                }
            })
        }

        var e = null;
        h.ga.aa = function () {
            null == e && (e = new g);
            return e
        }
    }
};
k.mouse = {
    code: function (h) {
        function g() {
            function m(a) {
                a = g(a, "mouseUp");
                var b = f[a.id];
                b && b !== a.object && b.Ea("mouseUp")
            }

            function l(a) {
                var b = g(a, "click");
                g(a, "mouseDown");
                b.object && (f[b.id] = b.object)
            }

            function g(f, c) {
                if (!window.ab) {
                    var m = b.Va;
                    if (m) {
                        var l = {x: (f.clientX - e.ha.left) / t.x * d, y: (f.clientY - e.ha.top) / t.y * d, id: f.id};
                        m.ya.yc(function (b) {
                            var f = !1;
                            b.ta.yc(function (b) {
                                if (a.Cd(l, b.wd(), b.angle))return b.Ea(c, {
                                    screenX: l.x,
                                    screenY: l.y,
                                    Ue: l.x - b.ba.x,
                                    Ve: l.y - b.ba.y
                                }), l.object = b, f = !0
                            });
                            return f
                        });
                        m.Ea(c, {
                            screenX: l.x,
                            screenY: l.y
                        });
                        return l
                    }
                }
            }

            var t = e.ha.ca, u = c.gc();
            "ontouchstart"in window ? (u.ontouchstart = function (a) {
                console.log("canvas.ontouchstart", a.touches.length);
                for (var b = a.touches.length; b--;)l(a.touches[b])
            }, u.ontouchend = u.ontouchcancel = function (a) {
                for (var b = a.changedTouches.length; b--;)m(a.changedTouches[b])
            }, u.ontouchmove = function (a) {
                for (var b = a.touches.length; b--;)g(a.touches[b], "mouseMove")
            }) : (u.onmousedown = function (a) {
                l(a)
            }, u.onmouseup = function (a) {
                m(a)
            }, u.onmousemove = function (a) {
                g(a, "mouseMove")
            })
        }

        var e = p("bundle").aa(), c = p("renderer").aa(), a = p("mathEx"), b = p("sceneManager").aa(), d = p("device").$b, f = {}, l = null;
        h.ga.aa = function () {
            null == l && (l = new g);
            return l
        }
    }
};
k.bundle = {
    code: function (h) {
        function g(f) {
            function d(a) {
                if (!b.bc) {
                    var f = [];
                    a.Sa && a.Sa.size() ? (a.Sa.forEach(function (d) {
                        var c = {ga: {}}, e = c.ga;
                        b.zb[d.name](c, e, a, d.Jd);
                        f.push(e)
                    }), a.Ub = function () {
                        f.forEach(function (a) {
                            a.Aa()
                        })
                    }) : a.Ub = c.rc
                }
            }

            function l(a) {
                var f = b && b.scripts && b.scripts[a.type] && b.scripts[a.type][a.name + ".js"];
                if (f) {
                    var d = {};
                    f(d, a);
                    a.sb = function (a) {
                        d.Aa(a)
                    }
                } else a.sb = c.rc
            }

            function g(a, b, f) {
                f.clear();
                b.forEach(function (b) {
                    f.add(new a(b))
                })
            }

            this.Ac = new e.ia;
            this.ec = new e.ia;
            this.qd = new e.ia;
            this.oc = new e.ia;
            this.Mb = new e.ia;
            this.oc = new e.ia;
            this.Wa = new e.ia;
            this.zc = new e.ia;
            this.tc = new e.ia;
            this.ha = {};
            var t = this;
            this.Kd = function () {
                f = f || void 0;
                t.ha = f.ha;
                c.Pc.forEach(function (b) {
                    g(p(b)[a.jd(b)], f[b], t[b + "List"])
                });
                f = null
            };
            this.fd = function () {
                t.Mb.forEach(function (a) {
                    a.$c();
                    t.yb(a);
                    a.ya.forEach(function (a) {
                        a.ta.forEach(function (a) {
                            t.yb(a)
                        })
                    })
                })
            };
            this.yb = function (a) {
                d(a);
                l(a)
            };
            this.ua = {};
            this.ua.data = {};
            this.ua.fb = !1
        }

        var e = p("collections"), c = p("consts"), a = p("utils"), b = p("behaviour", {wa: !0}),
            d;
        d = {
            Ze: [],
            $e: [{
                resourcePath: "resources/spriteSheet/walker.png",
                name: "walker",
                width: 288,
                height: 256,
                numOfFramesH: 9,
                numOfFramesV: 4,
                type: "spriteSheet",
                id: "9996_3491_187"
            }, {
                resourcePath: "resources/spriteSheet/tiles.jpg",
                name: "tiles",
                width: 230,
                height: 204,
                numOfFramesH: 9,
                numOfFramesV: 8,
                type: "spriteSheet",
                id: "4596_9248_37"
            }],
            Ie: [{
                _timeForOneFrame: 0,
                name: "left",
                frames: [17, 16, 15, 14, 13, 12, 11, 10],
                type: "frameAnimation",
                duration: 1E3,
                id: "6738_3211_190"
            }, {
                name: "right", frames: [19, 20, 21, 22, 23, 24, 25, 26], type: "frameAnimation",
                duration: 1E3, id: "2354_0498_191"
            }, {
                _timeForOneFrame: 0,
                name: "up",
                frames: [28, 29, 30, 31, 32, 33, 34, 35],
                type: "frameAnimation",
                duration: 1E3,
                id: "0234_8195_192"
            }, {
                _timeForOneFrame: 0,
                name: "down",
                frames: [28, 29, 30, 31, 32, 33, 34, 35],
                type: "frameAnimation",
                duration: 1E3,
                id: "7956_1514_193"
            }, {
                _timeForOneFrame: 0,
                name: "idleLeft",
                frames: [9],
                type: "frameAnimation",
                duration: 1E3,
                id: "2209_6472_198"
            }, {
                _timeForOneFrame: 0,
                name: "idleRight",
                frames: [18],
                type: "frameAnimation",
                duration: 1E3,
                id: "0429_4224_199"
            }, {
                _timeForOneFrame: 0, name: "idleUp",
                frames: [0], type: "frameAnimation", duration: 1E3, id: "1332_6863_304"
            }, {
                _timeForOneFrame: 0,
                name: "idleDown",
                frames: [27],
                type: "frameAnimation",
                duration: 1E3,
                id: "5583_9263_305"
            }, {
                _timeForOneFrame: 0,
                name: "qq",
                frames: [1, 2],
                type: "frameAnimation",
                duration: 1E3,
                id: "1849_7930_327"
            }, {
                _timeForOneFrame: 0,
                name: "ww",
                frames: [1, 2],
                type: "frameAnimation",
                duration: 1E3,
                id: "6145_9698_332"
            }, {
                _timeForOneFrame: 0,
                name: "ee",
                frames: [1, 2],
                type: "frameAnimation",
                duration: 1E3,
                id: "7690_6966_337"
            }, {
                name: "rr", frames: [1, 2], type: "frameAnimation",
                duration: 1E3, id: "8039_0518_342"
            }, {name: "idleDown", frames: [27], type: "frameAnimation", duration: 1E3, id: "0869_2844_367"}],
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
                        " ": {
                            x: 0, y: 0,
                            width: 15, height: 29
                        },
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
                        G: {
                            x: 270, y: 29,
                            width: 15, height: 29
                        },
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
                        V: {
                            x: 180, y: 58,
                            width: 15, height: 29
                        },
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
                        e: {
                            x: 90,
                            y: 87, width: 15, height: 29
                        },
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
                        "\u0410": {x: 165, y: 116, width: 15, height: 29},
                        "\u0411": {x: 180, y: 116, width: 15, height: 29},
                        "\u0412": {x: 195, y: 116, width: 15, height: 29},
                        "\u0413": {x: 210, y: 116, width: 15, height: 29},
                        "\u0414": {x: 225, y: 116, width: 15, height: 29},
                        "\u0415": {x: 240, y: 116, width: 15, height: 29},
                        "\u0416": {x: 255, y: 116, width: 15, height: 29},
                        "\u0417": {x: 270, y: 116, width: 15, height: 29},
                        "\u0418": {x: 285, y: 116, width: 15, height: 29},
                        "\u0419": {x: 301, y: 116, width: 15, height: 29},
                        "\u041a": {x: 0, y: 145, width: 15, height: 29},
                        "\u041b": {x: 15, y: 145, width: 15, height: 29},
                        "\u041c": {x: 30, y: 145, width: 15, height: 29},
                        "\u041d": {x: 45, y: 145, width: 15, height: 29},
                        "\u041e": {x: 60, y: 145, width: 15, height: 29},
                        "\u041f": {
                            x: 75,
                            y: 145, width: 15, height: 29
                        },
                        "\u0420": {x: 90, y: 145, width: 15, height: 29},
                        "\u0421": {x: 105, y: 145, width: 15, height: 29},
                        "\u0422": {x: 120, y: 145, width: 15, height: 29},
                        "\u0423": {x: 135, y: 145, width: 15, height: 29},
                        "\u0424": {x: 150, y: 145, width: 15, height: 29},
                        "\u0425": {x: 165, y: 145, width: 15, height: 29},
                        "\u0426": {x: 180, y: 145, width: 15, height: 29},
                        "\u0427": {x: 195, y: 145, width: 15, height: 29},
                        "\u0428": {x: 210, y: 145, width: 15, height: 29},
                        "\u0429": {x: 225, y: 145, width: 15, height: 29},
                        "\u042a": {x: 240, y: 145, width: 15, height: 29},
                        "\u042b": {
                            x: 255,
                            y: 145, width: 15, height: 29
                        },
                        "\u042c": {x: 270, y: 145, width: 15, height: 29},
                        "\u042d": {x: 285, y: 145, width: 15, height: 29},
                        "\u042e": {x: 301, y: 145, width: 15, height: 29},
                        "\u042f": {x: 0, y: 174, width: 15, height: 29},
                        "\u0430": {x: 15, y: 174, width: 15, height: 29},
                        "\u0431": {x: 30, y: 174, width: 15, height: 29},
                        "\u0432": {x: 45, y: 174, width: 15, height: 29},
                        "\u0433": {x: 60, y: 174, width: 15, height: 29},
                        "\u0434": {x: 75, y: 174, width: 15, height: 29},
                        "\u0435": {x: 90, y: 174, width: 15, height: 29},
                        "\u0436": {x: 105, y: 174, width: 15, height: 29},
                        "\u0437": {
                            x: 120, y: 174,
                            width: 15, height: 29
                        },
                        "\u0438": {x: 135, y: 174, width: 15, height: 29},
                        "\u0439": {x: 150, y: 174, width: 15, height: 29},
                        "\u043a": {x: 165, y: 174, width: 15, height: 29},
                        "\u043b": {x: 180, y: 174, width: 15, height: 29},
                        "\u043c": {x: 195, y: 174, width: 15, height: 29},
                        "\u043d": {x: 210, y: 174, width: 15, height: 29},
                        "\u043e": {x: 225, y: 174, width: 15, height: 29},
                        "\u043f": {x: 240, y: 174, width: 15, height: 29},
                        "\u0440": {x: 255, y: 174, width: 15, height: 29},
                        "\u0441": {x: 270, y: 174, width: 15, height: 29},
                        "\u0442": {x: 285, y: 174, width: 15, height: 29},
                        "\u0443": {
                            x: 301, y: 174,
                            width: 15, height: 29
                        },
                        "\u0444": {x: 0, y: 203, width: 15, height: 29},
                        "\u0445": {x: 15, y: 203, width: 15, height: 29},
                        "\u0446": {x: 30, y: 203, width: 15, height: 29},
                        "\u0447": {x: 45, y: 203, width: 15, height: 29},
                        "\u0448": {x: 60, y: 203, width: 15, height: 29},
                        "\u0449": {x: 75, y: 203, width: 15, height: 29},
                        "\u044a": {x: 90, y: 203, width: 15, height: 29},
                        "\u044b": {x: 105, y: 203, width: 15, height: 29},
                        "\u044c": {x: 120, y: 203, width: 15, height: 29},
                        "\u044d": {x: 135, y: 203, width: 15, height: 29},
                        "\u044e": {x: 150, y: 203, width: 15, height: 29},
                        "\u044f": {
                            x: 165, y: 203, width: 15,
                            height: 29
                        },
                        "\u0450": {x: 180, y: 203, width: 15, height: 29},
                        "\u0451": {x: 195, y: 203, width: 15, height: 29},
                        "\u0452": {x: 210, y: 203, width: 15, height: 29},
                        "\u0453": {x: 225, y: 203, width: 15, height: 29},
                        "\u0454": {x: 240, y: 203, width: 15, height: 29},
                        "\u0455": {x: 255, y: 203, width: 15, height: 29},
                        "\u0456": {x: 270, y: 203, width: 15, height: 29},
                        "\u0457": {x: 285, y: 203, width: 15, height: 29},
                        "\u0458": {x: 301, y: 203, width: 15, height: 29},
                        "\u0459": {x: 0, y: 232, width: 15, height: 29},
                        "\u045a": {x: 15, y: 232, width: 15, height: 29},
                        "\u045b": {x: 30, y: 232, width: 15, height: 29}
                    },
                    width: 320, height: 261
                },
                type: "font",
                fontColor: [52, 183, 11],
                fontSize: 25,
                fontFamily: "Monospace",
                resourcePath: "resources/font/default.png",
                id: "6991_3497_4"
            }],
            Ab: [{
                spriteSheetId: "9996_3491_187",
                pos: {x: 0, y: 0},
                scale: {x: 1, y: 1},
                vel: {x: 0, y: 0},
                currFrameIndex: 0,
                _sprPosX: 0,
                _sprPosY: 0,
                name: "walker",
                width: 32,
                height: 64,
                type: "gameObject",
                commonBehaviour: [{
                    name: "control4dir",
                    parameters: {
                        velocity: "202",
                        walkLeftAnimation: "left",
                        walkRightAnimation: "right",
                        walkUpAnimation: "up",
                        walkDownAnimation: "down",
                        idleLeftAnimation: "idleLeft",
                        idleRightAnimation: "idleRight",
                        idleUpAnimation: "idleUp",
                        idleDownAnimation: "idleDown"
                    },
                    description: "control character with cursor to walk up, down, left and right",
                    id: "1399_0090_189",
                    type: "commonBehaviour"
                }],
                frameAnimationIds: "6738_3211_190 2354_0498_191 0234_8195_192 7956_1514_193 2209_6472_198 0429_4224_199 1332_6863_304 0869_2844_367".split(" "),
                rigid: 1,
                groupName: "",
                angle: 0,
                id: "8971_6636_188"
            }],
            Pe: [{
                name: "mainLayer", type: "layer", gameObjectProps: [{
                    spriteSheetId: "9996_3491_187",
                    pos: {x: 103, y: 152},
                    scale: {x: 1, y: 1},
                    vel: {x: 0, y: 0},
                    currFrameIndex: 0,
                    _sprPosX: 0,
                    _sprPosY: 0,
                    name: "walker",
                    width: 32,
                    height: 64,
                    type: "gameObject",
                    commonBehaviour: [{
                        name: "control4dir",
                        parameters: {
                            velocity: 100,
                            walkLeftAnimation: "left",
                            walkRightAnimation: "right",
                            walkUpAnimation: "up",
                            walkDownAnimation: "down",
                            idleLeftAnimation: "",
                            idleRightAnimation: "",
                            idleUpAnimation: "",
                            idleDownAnimation: ""
                        },
                        description: "control character with cursor to walk up, down, left and right",
                        id: "1399_0090_189",
                        type: "commonBehaviour"
                    }],
                    frameAnimationIds: ["6738_3211_190",
                        "2354_0498_191", "0234_8195_192", "7956_1514_193"],
                    rigid: 1,
                    groupName: "",
                    angle: 0,
                    protoId: "8971_6636_188",
                    id: "4428_2087_197"
                }], id: "1186_9522_195"
            }],
            ob: [{
                name: "mainScene",
                type: "scene",
                layerProps: [{type: "layer", protoId: "1186_9522_195", id: "4353_9549_196"}],
                colorBG: [236, 243, 247],
                id: "2345_5808_194",
                useBG: 0,
                tileMap: {
                    _spriteSheet: {
                        resourcePath: "resources/spriteSheet/walker.png",
                        name: "walker",
                        width: 288,
                        height: 256,
                        numOfFramesH: 9,
                        numOfFramesV: 4,
                        type: "spriteSheet",
                        id: "9996_3491_187"
                    },
                    spriteSheetId: "4596_9248_37",
                    width: 36,
                    height: 37,
                    data: [{
                        0: 13,
                        1: 22,
                        2: 22,
                        3: 22,
                        4: 22,
                        5: 22,
                        6: 22,
                        7: 22,
                        8: 22,
                        9: 22,
                        10: 22,
                        11: 22,
                        12: 20,
                        13: 22,
                        14: 22,
                        15: 22,
                        16: 20,
                        17: 6,
                        18: 6,
                        19: 41,
                        20: 41,
                        21: 41,
                        22: 41,
                        23: 41,
                        24: 41,
                        25: 41,
                        26: 41,
                        27: 41,
                        28: 41,
                        29: 41,
                        30: 41,
                        31: 41,
                        32: 41,
                        33: 41,
                        34: 41,
                        35: 41
                    }, {
                        0: 13,
                        1: 13,
                        16: 22,
                        17: 6,
                        18: 6,
                        19: 41,
                        24: 41,
                        25: 41,
                        26: 41,
                        27: 41,
                        28: 41,
                        29: 41,
                        30: 41,
                        31: 41,
                        33: 41,
                        34: 41,
                        35: 41
                    }, {0: 22, 6: 4, 7: 4, 8: 4, 9: 4, 10: 4, 16: 22, 17: 6, 18: 6, 19: 41, 20: 41, 35: 41}, {
                        0: 20,
                        6: 4,
                        7: 4,
                        8: 4,
                        9: 4,
                        10: 4,
                        16: 22,
                        17: 6,
                        18: 6,
                        19: 6,
                        20: 41,
                        34: 41,
                        35: 41
                    }, {
                        0: 22, 6: 4, 7: 4, 8: 4, 9: 4, 10: 4, 15: 20, 16: 20, 17: 6,
                        18: 6, 19: 6, 20: 41, 21: 41, 34: 41, 35: 41
                    }, {
                        0: 22,
                        6: 11,
                        7: 4,
                        8: 4,
                        9: 4,
                        10: 4,
                        15: 22,
                        16: 22,
                        17: 6,
                        18: 6,
                        19: 6,
                        20: 41,
                        21: 41,
                        34: 41,
                        35: 41
                    }, {
                        0: 22,
                        6: 11,
                        7: 4,
                        8: 4,
                        9: 11,
                        10: 4,
                        15: 10,
                        16: 22,
                        17: 6,
                        18: 6,
                        19: 41,
                        20: 41,
                        21: 41,
                        22: 41,
                        23: 41,
                        28: 32,
                        34: 41,
                        35: 27
                    }, {
                        0: 22,
                        6: 11,
                        7: 11,
                        8: 11,
                        9: 11,
                        10: 5,
                        11: 18,
                        12: 18,
                        13: 18,
                        15: 18,
                        16: 22,
                        17: 6,
                        18: 6,
                        19: 41,
                        20: 41,
                        21: 41,
                        22: 41,
                        23: 41,
                        24: 41,
                        25: 41,
                        26: 41,
                        27: 41,
                        28: 41,
                        30: 32,
                        31: 32,
                        32: 11,
                        34: 41,
                        35: 41
                    }, {
                        0: 22,
                        10: 18,
                        15: 10,
                        16: 20,
                        17: 6,
                        18: 6,
                        19: 6,
                        20: 41,
                        21: 41,
                        22: 41,
                        23: 41,
                        24: 41,
                        25: 41,
                        26: 41,
                        27: 41,
                        28: 41,
                        29: 32,
                        31: 32,
                        32: 11,
                        33: 11,
                        34: 11,
                        35: 41
                    },
                        {
                            0: 22,
                            1: 41,
                            2: 0,
                            3: 0,
                            9: 13,
                            10: 18,
                            14: 19,
                            15: 20,
                            16: 20,
                            17: 6,
                            18: 6,
                            19: 6,
                            20: 32,
                            21: 32,
                            22: 32,
                            23: 41,
                            24: 41,
                            25: 41,
                            26: 32,
                            27: 41,
                            28: 41,
                            29: 11,
                            30: 32,
                            31: 11,
                            32: 11,
                            33: 11,
                            34: 11,
                            35: 41,
                            37: 11
                        }, {
                            0: 41,
                            1: 41,
                            2: 41,
                            3: 13,
                            4: 13,
                            5: 13,
                            6: 13,
                            7: 13,
                            8: 13,
                            9: 13,
                            10: 18,
                            11: 14,
                            12: 14,
                            15: 20,
                            16: 20,
                            17: 6,
                            18: 6,
                            19: 6,
                            20: 41,
                            21: 41,
                            22: 32,
                            23: 32,
                            24: 32,
                            25: 41,
                            26: 32,
                            27: 36,
                            28: 41,
                            29: 11,
                            30: 11,
                            31: 11,
                            32: 11,
                            33: 11,
                            34: 11,
                            35: 41,
                            36: 11,
                            37: 11
                        }, {
                            0: 22,
                            1: 41,
                            2: 22,
                            3: 22,
                            4: 22,
                            5: 22,
                            6: 22,
                            7: 22,
                            8: 22,
                            9: 22,
                            10: 22,
                            11: 14,
                            12: 14,
                            13: 22,
                            14: 15,
                            15: 15,
                            16: 20,
                            17: 6,
                            18: 6,
                            19: 13,
                            20: 41,
                            21: 41,
                            22: 41,
                            23: 32,
                            24: 32,
                            25: 32,
                            26: 32,
                            27: 36,
                            28: 32,
                            29: 11,
                            30: 11,
                            31: 32,
                            32: 11,
                            34: 11,
                            35: 11,
                            37: 11,
                            38: 11
                        }, [15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 14, 14, 15, 15, 15, 15, 15, 15, 13, 41, 41, 41, 41, 41, 41, 41, 36, 13, null, 41, 41, 41, 41, 41, 41, 11, 11, 11], [13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 32, 32, 41, 41, 41, 41, 41, 36, 41, 32, 41, 41, 41, 41, 41, 11, 11, 11], [11, 32, 11, 11, 11, 11, 32, null, null, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 41, 41, 41, 41, 41, 41, 41, 36, 41, 41, 41, 41, 41, 41, 41, 41, 11, 11], [11, 32, 11, 11, 11, 11, 32, null, null, 32, 32, 32, null, null, null, 32, 32, 32,
                            32, 32, 32, 32, 41, 41, 41, 32, null, 36, 36, 32, null, 11, null, 32], [11, 32, 11, 11, 11, 11, 32, null, null, null, null, null, 32, 32, 32, 32, null, null, null, null, null, null, null, 41, 41, 41, 41, 36, 36], {
                            0: 11,
                            1: 32,
                            2: 11,
                            3: 11,
                            4: 11,
                            5: 11,
                            7: 11,
                            20: 41,
                            21: 41,
                            22: 41,
                            23: 41,
                            24: 41,
                            27: 36,
                            28: 36
                        }, [11, 11, 11, 11, 11, 11, 32, 32, 32, 32, 32, 32, 32, 32, null, null, null, null, 41, null, 41, 41, 41, 41, 41, 41, null, 36, 36], [11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 32, 32, 41, 32, 41, null, null, null, 41, 12, 12, 12, 3, 3, 3, 3, null, 36, 36, 41], [11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 41, 41, 41, 41, 41, 41, null, 41,
                            12, 12, 12, 12, 12, 3, 41, 3, null, 36, 36, 41], [11, 11, 11, 11, 11, 11, 11, 11, 41, 41, null, null, 41, 41, 41, 41, null, 41, 41, 41, 12, 41, 41, 41, 41, 41, null, 36, 36, 41, null, null, 41], [11, 11, 11, 11, 11, 11, 11, 11, null, 41, null, 41, 41, null, 41, null, null, 41, 41, 41, 41, null, null, null, null, 41, null, 36, 36, null, null, null, 41], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 41, 41, 41, 41, 41, 41, 41, 41, 41, 36, 36, 36, 36, null, null, 41], [null, null, null, null, null, null, null, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 36, 36,
                            37, 37, 36, 37], [null, null, null, null, null, null, null, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 13, 13, 13, 13, 13, 13], [null, null, null, null, null, null, null, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 41, 41, 41, 13, 13, 13, 13, 13], [null, null, null, null, null, null, null, 42, 42, 42, 42, 42, null, null, 42, 42, 42, 42, null, null, 41, null, null, 41, 13, 41, 13, 13, 13, null, null, 42, 42, null, 42], [null, null, null, null, null, null, null, null, null, null, null, 42, 42, 42, 42, null, null, null, 41, null, 41, 41, null, 41, 41, 41, 41, 13, 13, null, null, 42, 42, 42, 42],
                        [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 41, null, null, null, null, null, null, 41, 41, 41, 41, 13, 13, 42, 42, 42, 42, 42, 42, 42], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, 41, null, 41, 41, null, null, null, null, 41, null, 41, null, null, 41, 13, 42, 42, 42, 42, 42, 42], [null, null, null, null, null, null, null, null, null, null, null, null, 41, 41, null, 41, 41, 41, 41, null, null, null, 41, 41, 41, null, null, 41, 42, 42, 42, 42, 42, 42, 42], [null, null, null, null, null, null, null, null, null, null, null,
                            null, null, null, 41, null, 41, null, null, 41, 41, 41, null, 41, 41, null, 41, 42, 42, 42, 42, 42, 42, 42, 42], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 41, null, 41, 41, 41, 41, 41, 41, null, null, 41, 41], [null, null, null, null, null, null, null, null, null, null, null, null, null, 13, 13, 13, null, 13, 13, 13, 41, null, 13, null, null, 41, null, 41], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 13, null, 13, 41, null, 13, 13, null, null, 13, 41], [null, null, null, null, null, null,
                            null, null, null, null, null, null, null, null, null, null, null, null, 13, null, null, null, 13, 41, 13, null, null, 41, 41]]
                }
            }],
            We: [],
            ha: {width: 509, height: 358, scaleStrategy: "2"}
        };
        var f = null;
        h.ga.aa = function () {
            null == f && (f = new g(d), d = null);
            return f
        }
    }
};
k.resourceCache = {
    code: function (h, g) {
        var e = {};
        g.get = function (c) {
            return e[c]
        };
        g.clear = function (c) {
            c ? delete e[c] : e = {}
        };
        g.set = function (c, a) {
            e[c] || (e[c] = a)
        };
        g.has = function (c) {
            return !!e[c]
        };
        g.getAll = function () {
            return e
        }
    }
};
k.resourceLoader = {
    code: function (h, g) {
        g.Qc = function () {
            var e = this, c = p("utils"), a = p("renderer").aa(), b = p("bundle").aa(), d = p("resourceCache"), f = p("soundManager").aa(), l = new c.Oc;
            l.kb = function () {
                e.Hb && e.Hb()
            };
            this.pc = function (f) {
                if (!d.has(f)) {
                    var c = b.ua.fb ? b.ua.data[f] : "./" + f;
                    a.getContext().qc(c, {type: b.ua.fb ? "base64" : "", fileName: f}, function (a) {
                        d.set(f, a);
                        l.vc()
                    });
                    l.Yb()
                }
            };
            this.Db = function (a) {
                d.has(a) || (f.Db(b.ua.fb ? b.ua.data[a] : "./" + a, {type: b.ua.fb ? "base64" : ""}, function (b) {
                    d.set(a, b);
                    l.vc()
                }), l.Yb())
            };
            this.Hb = null;
            this.start = function () {
                l.start()
            }
        }
    }
};
k.device = {
    code: function (h, g) {
        g.$b = navigator.Ne ? window.devicePixelRatio || 1 : 1
    }
};
k.index = {
    code: function () {
        var h = p("bundle").aa();
        h.Kd();
        if (!h.Mb.size())throw"at least one scene must be created";
        var g = p("renderer").aa(), e = p("sceneManager").aa();
        p("keyboard").aa();
        window.addEventListener("load", function () {
            document.body.ontouchstart = function (c) {
                c.preventDefault();
                return !1
            };
            g.eb();
            p("mouse").aa();
            e.Nb(h.Mb.get(0))
        })
    }
};
k.audioPlayer = {
    code: function (h, g) {
        g.Dc = function (e) {
            var c = !0, a = this, b = null, d = !1;
            e || (e = window.Audio && new window.Audio, d = !0);
            this.play = function (f, l) {
                c = !1;
                e && (d ? (console.log("used html audio", f), e.src = f, e.play()) : (b = e.createBufferSource(), b.buffer = f, b.loop = l, b.connect(e.destination), b.start(0), b.onended = function () {
                    a.stop()
                }))
            };
            this.stop = function () {
                e && (b && (b.stop(), b.disconnect(e.destination)), b = null, c = !0)
            };
            this.Bd = function () {
                return c
            }
        }
    }
};
k.audioSet = {
    code: function (h, g) {
        var e = p("audioPlayer").Dc;
        g.Ec = function (c, a) {
            for (var b = [], d = 0; d < a; d++)b.push(new e(c));
            this.ud = function () {
                for (var f = 0; f < a; f++)if (b[f].Bd())return b[f];
                return null
            }
        }
    }
};
k.soundManager = {
    code: function (h) {
        function g() {
            function b(b, f) {
                if (a) {
                    var d = l(b);
                    a.decodeAudioData(d).then(function (a) {
                        f(a)
                    })
                } else f(b)
            }

            function f(b, f) {
                var d = new XMLHttpRequest;
                d.open("GET", b, !0);
                d.responseType = "arraybuffer";
                d.setRequestHeader("Accept-Ranges", "bytes");
                d.setRequestHeader("Content-Range", "bytes");
                d.onload = function () {
                    a ? a.decodeAudioData(d.response, function (a) {
                        f(a)
                    }) : f(b)
                };
                d.onerror = function () {
                    throw"can not load sound with url " + b;
                };
                d.send()
            }

            function l(a) {
                a = window.atob(a);
                for (var b = a.length,
                         f = new Uint8Array(b), d = 0; d < b; d++)f[d] = a.charCodeAt(d);
                return f.buffer
            }

            var m = new c(a, 5);
            this.Db = function (a, d, c) {
                "base64" == d.type ? b(a, c) : f(a, c)
            };
            this.play = function (a, b) {
                var f = m.ud();
                f && f.play(e.zc.find({name: a}).ad, b)
            }
        }

        var e = p("bundle").aa(), c = p("audioSet").Ec, a = window.Cc && new window.Cc, b = null;
        h.ga.aa = function () {
            null == b && (b = new g);
            return b
        }
    }
};
k.collections = {
    code: function (h, g) {
        g.ia = function () {
            var e = this;
            this.da = [];
            this.add = function (c) {
                e.da.push(c);
                return e
            };
            this.addAll = function (c) {
                c.forEach(function (a) {
                    e.da.push(a)
                })
            };
            this.get = function (c) {
                return e.da[c]
            };
            this.size = function () {
                return e.da.length
            };
            this.getAll = function () {
                return e.da
            };
            this.clear = function () {
                e.da = [];
                return e
            };
            this.forEach = function (c) {
                for (var a = 0, b = this.da.length; a < b; a++)c(e.da[a], a)
            };
            this.some = function (c) {
                for (var a = 0, b = this.da.length; a < b; a++)if (c(e.da[a], a))return !0;
                return !1
            };
            this.yc = function (c) {
                for (var a = this.da.length - 1; 0 <= a && !c(e.da[a], a); a--);
            };
            this.indexOf = function (c) {
                var a = 0, b = !1;
                e.da.some(function (d) {
                    var f = !0;
                    Object.keys(c).some(function (a) {
                        if (c[a] != d[a])return f = !1, !0
                    });
                    if (f)return b = !0;
                    a++
                });
                return b ? a : -1
            };
            this.remove = function (c) {
                c && (c = e.indexOf(c), -1 < c && e.da.splice(c, 1))
            };
            this.find = function (c) {
                return e.da[e.indexOf(c)]
            };
            this.pop = function () {
                return e.da.pop()
            };
            this.bb = function (c, a) {
                var b = this;
                try {
                    c.forEach(function (d) {
                        b.add(new a(d))
                    })
                } catch (d) {
                    console.error(d)
                }
            };
            this.toJSON = function () {
                function c(a) {
                    a && a.Bc && delete a.Bc;
                    if (!a.split) {
                        for (var b in a)a[b] && a.hasOwnProperty(b) && c(a[b]);
                        return a
                    }
                }

                var a = [];
                this.da.forEach(function (b) {
                    a.push(c(b.toJSON()))
                });
                return a
            }
        };
        g.Set = function () {
            var e = this;
            this.da = {};
            this.add = function (c) {
                this.has(c.id) || (e.da[c.id] = c)
            };
            this.get = function (c) {
                return e.da[c.id]
            };
            this.has = function (c) {
                return c in e.da
            };
            this.kd = function (c) {
                Object.keys(c.da).forEach(function (a) {
                    e.add(c.da[a])
                })
            };
            this.gd = function () {
                var c = [];
                Object.keys(e.da).forEach(function (a) {
                    c.push(e.da[a])
                });
                return c
            }
        }
    }
};
k.mat4 = {
    code: function (h, g) {
        g.Re = function () {
            return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
        };
        g.Gd = function (e, c) {
            return [2 / e, 0, 0, 0, 0, -2 / c, 0, 0, 0, 0, 2, 0, -1, 1, 0, 1]
        };
        g.jb = function (e, c, a) {
            return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, e, c, a, 1]
        };
        g.Se = function (e) {
            var c = Math.cos(e);
            e = Math.sin(e);
            return [1, 0, 0, 0, 0, c, e, 0, 0, -e, c, 0, 0, 0, 0, 1]
        };
        g.Hd = function (e) {
            var c = Math.cos(e);
            e = Math.sin(e);
            return [c, 0, -e, 0, 0, 1, 0, 0, e, 0, c, 0, 0, 0, 0, 1]
        };
        g.Id = function (e) {
            var c = Math.cos(e);
            e = Math.sin(e);
            return [c, e, 0, 0, -e, c, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
        };
        g.ib = function (e,
                         c, a) {
            return [e, 0, 0, 0, 0, c, 0, 0, 0, 0, a, 0, 0, 0, 0, 1]
        };
        g.qa = function (e, c) {
            var a = e[0], b = e[1], d = e[2], f = e[3], l = e[4], m = e[5], n = e[6], g = e[7], h = e[8], u = e[9], w = e[10], r = e[11], A = e[12], v = e[13], z = e[14], x = e[15], y = c[0], q = c[1], C = c[2], B = c[3], D = c[4], E = c[5], F = c[6], G = c[7], H = c[8], I = c[9], J = c[10], K = c[11], L = c[12], M = c[13], N = c[14], O = c[15];
            return [a * y + b * D + d * H + f * L, a * q + b * E + d * I + f * M, a * C + b * F + d * J + f * N, a * B + b * G + d * K + f * O, l * y + m * D + n * H + g * L, l * q + m * E + n * I + g * M, l * C + m * F + n * J + g * N, l * B + m * G + n * K + g * O, h * y + u * D + w * H + r * L, h * q + u * E + w * I + r * M, h * C + u * F + w * J + r * N, h * B + u * G + w * K + r *
            O, A * y + v * D + z * H + x * L, A * q + v * E + z * I + x * M, A * C + v * F + z * J + x * N, A * B + v * G + z * K + x * O]
        }
    }
};
k.mathEx = {
    code: function (h, g) {
        var e = p("vec2").Yc;
        g.Cd = function (a, b, d) {
            if (d) {
                var f = new e(a.x - b.x - b.width / 2, a.y - b.y - b.height / 2);
                f.Nd(f.td() - d);
                a = {x: f.xd() + a.x, y: f.yd() + a.y}
            }
            return a.x > b.x && a.x < b.x + b.width && a.y > b.y && a.y < b.y + b.height
        };
        g.Dd = function (a, b) {
            return !(b.x > a.x + a.width || b.x + b.width < a.x || b.y > a.y + a.height || b.y + b.height < a.y)
        };
        g.Xe = function (a) {
            return 180 * a / Math.PI
        };
        g.de = function (a) {
            return a * Math.PI / 180
        };
        g.vd = function (a, b) {
            if (a > b) {
                var d = a;
                a = b;
                b = d
            }
            d = Math.random() * (b - a) + a;
            d > b ? d = b : d < a && (d = a);
            return ~~d
        };
        g.Ke = function (a, b) {
            var d = Math.atan2(b.y - a.y, b.x - a.x);
            return {x: Math.cos(d), y: Math.sin(d)}
        };
        var c = {
            Qe: function (a, b, d, f) {
                return d * a / f + b
            }, te: function (a, b, d, f) {
                a /= f;
                return d * a * a + b
            }, Ce: function (a, b, d, f) {
                a /= f;
                return -d * a * (a - 2) + b
            }, pe: function (a, b, d, f) {
                a /= f / 2;
                if (1 > a)return d / 2 * a * a + b;
                a--;
                return -d / 2 * (a * (a - 2) - 1) + b
            }, ge: function (a, b, d, f) {
                a /= f;
                return d * a * a * a + b
            }, ze: function (a, b, d, f) {
                a /= f;
                a--;
                return d * (a * a * a + 1) + b
            }, me: function (a, b, d, f) {
                a /= f / 2;
                if (1 > a)return d / 2 * a * a * a + b;
                a -= 2;
                return d / 2 * (a * a * a + 2) + b
            }, ue: function (a, b, d,
                             f) {
                a /= f;
                return d * a * a * a * a + b
            }, De: function (a, b, d, f) {
                a /= f;
                a--;
                return -d * (a * a * a * a - 1) + b
            }, qe: function (a, b, d, f) {
                a /= f / 2;
                if (1 > a)return d / 2 * a * a * a * a + b;
                a -= 2;
                return -d / 2 * (a * a * a * a - 2) + b
            }, ve: function (a, b, d, f) {
                a /= f;
                return d * a * a * a * a * a + b
            }, Ee: function (a, b, d, f) {
                a /= f;
                a--;
                return d * (a * a * a * a * a + 1) + b
            }, re: function (a, b, d, f) {
                a /= f / 2;
                if (1 > a)return d / 2 * a * a * a * a * a + b;
                a -= 2;
                return d / 2 * (a * a * a * a * a + 2) + b
            }, we: function (a, b, d, f) {
                return -d * Math.cos(a / f * (Math.PI / 2)) + d + b
            }, Fe: function (a, b, d, f) {
                return d * Math.sin(a / f * (Math.PI / 2)) + b
            }, se: function (a, b, d,
                             f) {
                return -d / 2 * (Math.cos(Math.PI * a / f) - 1) + b
            }, ie: function (a, b, d, f) {
                return d * Math.pow(2, 10 * (a / f - 1)) + b
            }, Be: function (a, b, d, f) {
                return d * (-Math.pow(2, -10 * a / f) + 1) + b
            }, oe: function (a, b, d, f) {
                a /= f / 2;
                if (1 > a)return d / 2 * Math.pow(2, 10 * (a - 1)) + b;
                a--;
                return d / 2 * (-Math.pow(2, -10 * a) + 2) + b
            }, fe: function (a, b, d, f) {
                a /= f;
                return -d * (Math.sqrt(1 - a * a) - 1) + b
            }, ye: function (a, b, d, f) {
                a /= f;
                a--;
                return d * Math.sqrt(1 - a * a) + b
            }, le: function (a, b, d, f) {
                a /= f / 2;
                if (1 > a)return -d / 2 * (Math.sqrt(1 - a * a) - 1) + b;
                a -= 2;
                return d / 2 * (Math.sqrt(1 - a * a) + 1) + b
            }, he: function (a,
                             b, d, f) {
                var c = 0, e = d;
                if (0 == a)return b;
                if (1 == (a /= f))return b + d;
                c || (c = .3 * f);
                e < Math.abs(d) ? (e = d, d = c / 4) : d = c / (2 * Math.PI) * Math.asin(d / e);
                return -(e * Math.pow(2, 10 * --a) * Math.sin(2 * (a * f - d) * Math.PI / c)) + b
            }, Ae: function (a, b, d, f) {
                var c, e = 0, n = d;
                if (0 == a)return b;
                if (1 == (a /= f))return b + d;
                e || (e = .3 * f);
                n < Math.abs(d) ? (n = d, c = e / 4) : c = e / (2 * Math.PI) * Math.asin(d / n);
                return n * Math.pow(2, -10 * a) * Math.sin(2 * (a * f - c) * Math.PI / e) + d + b
            }, ne: function (a, b, d, f) {
                var c, e = 0, n = d;
                if (0 == a)return b;
                if (2 == (a /= f / 2))return b + d;
                e || (e = .3 * f * 1.5);
                n < Math.abs(d) ?
                    (n = d, c = e / 4) : c = e / (2 * Math.PI) * Math.asin(d / n);
                return 1 > a ? -.5 * n * Math.pow(2, 10 * --a) * Math.sin(2 * (a * f - c) * Math.PI / e) + b : n * Math.pow(2, -10 * --a) * Math.sin(2 * (a * f - c) * Math.PI / e) * .5 + d + b
            }, ee: function (a, b, d, f) {
                return d * (a /= f) * a * (2.70158 * a - 1.70158) + b
            }, xe: function (a, b, d, f) {
                return d * ((a = a / f - 1) * a * (2.70158 * a + 1.70158) + 1) + b
            }, je: function (a, b, d, f) {
                var c = 1.70158;
                return 1 > (a /= f / 2) ? d / 2 * a * a * (((c *= 1.525) + 1) * a - c) + b : d / 2 * ((a -= 2) * a * (((c *= 1.525) + 1) * a + c) + 2) + b
            }, md: function (a, b, d, f) {
                return d - c.ac(f - a, 0, d, f) + b
            }, ac: function (a, b, d, f) {
                return (a /=
                    f) < 1 / 2.75 ? 7.5625 * d * a * a + b : a < 2 / 2.75 ? d * (7.5625 * (a -= 1.5 / 2.75) * a + .75) + b : a < 2.5 / 2.75 ? d * (7.5625 * (a -= 2.25 / 2.75) * a + .9375) + b : d * (7.5625 * (a -= 2.625 / 2.75) * a + .984375) + b
            }, ke: function (a, b, d, f) {
                return a < f / 2 ? .5 * c.md(2 * a, 0, d, f) + b : .5 * c.ac(2 * a - f, 0, d, f) + .5 * d + b
            }
        };
        g.ld = c
    }
};
k.utils = {
    code: function (h, g) {
        g.Oc = function () {
            var e = this;
            this.size = function () {
                return c
            };
            this.kb = null;
            var c = 0, a = 0;
            this.Yb = function () {
                c++
            };
            this.vc = function () {
                a++;
                c == a && e.kb && e.kb()
            };
            this.start = function () {
                0 == this.size() && this.kb()
            }
        };
        g.Te = function (e, c) {
            Object.keys(c).forEach(function (a) {
                e[a] = c[a]
            })
        };
        g.clone = function (e) {
            return Object.create(e)
        };
        g.jd = function (e) {
            return e.substr(0, 1).toUpperCase() + e.substr(1)
        };
        g.fc = function (e) {
            return "data:image/" + e.split(".").pop() + ";base64,"
        }
    }
};
k.vec2 = {
    code: function (h, g) {
        g.Yc = function (e, c) {
            var a = e || 0, b = c || 0, d = 0, f = 0;
            this.Nd = function (c) {
                d = c;
                b = Math.sin(d) * f;
                a = Math.cos(d) * f
            };
            this.xd = function () {
                return a
            };
            this.yd = function () {
                return b
            };
            this.td = function () {
                return d
            };
            d = 0 == a ? 0 : Math.atan(b / a);
            f = Math.sqrt(a * a + b * b)
        }
    }
};
k.baseGameObject = {
    code: function (h, g) {
        var e = p("baseModel").xa, c = p("tween", {wa: !0}), a = p("tweenMovie", {wa: !0}), b = p("renderer", {wa: !0}).aa(), d = p("camera").aa();
        g.Pb = e.extend({
            type: "baseGameObject",
            Me: "",
            ea: null,
            ba: null,
            scale: null,
            angle: 0,
            width: 0,
            height: 0,
            cc: !1,
            wb: null,
            mc: function () {
                return {x: this.ba.x, y: this.ba.y, width: this.width, height: this.height}
            },
            wd: function () {
                var a = {x: this.ba.x, y: this.ba.y, width: this.width, height: this.height};
                if (this.cc)return a;
                a.x -= d.ba.x;
                a.y -= d.ba.y;
                return a
            },
            Oe: function () {
                this.wb.ta.remove({id: this.id});
                this.wb.Vb.Fa.remove({id: this.id})
            },
            cb: function () {
                return p("sceneManager").aa().Va
            },
            moveTo: function (b, d, e, n) {
                var f = this.cb();
                n = n || "linear";
                var m = new a.Tb;
                b = new c.rb(this.ba, "x", this.ba.x, b, e, n);
                d = new c.rb(this.ba, "y", this.ba.y, d, e, n);
                m.add(0, b).add(0, d);
                f.Ia.push(m)
            },
            Na: function (b, d, e, n, g, h) {
                var f = this.cb(), m = new a.Tb;
                b = new c.rb(b, d, e, n, g, h || "linear");
                m.add(0, b);
                f.Ia.push(m)
            },
            update: function () {
            },
            Ha: function () {
                var a = b.getContext(), c = 0, e = 0;
                this.cc && (c = d.ba.x, e = d.ba.y);
                a.translate(this.ba.x + this.width /
                    2 + c, this.ba.y + this.height / 2 + e);
                a.scale(this.scale.x, this.scale.y);
                a.nb(this.angle);
                a.translate(-this.width / 2, -this.height / 2)
            },
            construct: function () {
                this.ba || (this.ba = {x: 0, y: 0});
                this.scale || (this.scale = {x: 1, y: 1})
            }
        })
    }
};
k.baseModel = {
    code: function (h, g) {
        function e(a, d) {
            if (!a || 0 == a.indexOf("$$") || 0 == a.indexOf("_") || d && d.call)return !0;
            if ("string" == typeof d || "number" == typeof d)return !1;
            if (!d)return !0
        }

        function c(a) {
            if ("[object Array]" === Object.prototype.toString.call(a)) {
                for (var b = [], f = 0, e = a.length; f < e; f++)b[f] = c(a[f]);
                return b
            }
            if ("object" === typeof a) {
                b = {};
                for (f in a)b[f] = c(a[f]);
                return b
            }
            return a
        }

        var a = p("eventEmitter").Ic;
        g.xa = Class.extend({
            id: null, uc: null, name: "", ub: null, toJSON: function () {
                var a = {}, d;
                for (d in this)e(d,
                    this[d]) || (a[d] = this[d]);
                return c(a)
            }, af: function () {
                var a = [], d;
                for (d in this)e(d, this[d]) || a.push({key: d, value: this[d]});
                return a
            }, bb: function (a) {
                var b = this;
                Object.keys(a).forEach(function (f) {
                    f in b && (b[f] = a[f], b[f] && !b[f].splice && (b[f] = +b[f] || b[f]))
                })
            }, clone: function () {
                var a = new this.constructor(this.toJSON());
                a.vb();
                return a
            }, sc: function (a, d) {
                this.ub.sc(a, d)
            }, Ea: function (a, d) {
                this.ub.Ea(a, d)
            }, vb: function () {
                this.ub = new a;
                arguments && arguments[0] && this.bb(arguments[0])
            }
        })
    }
};
k.resource = {
    code: function (h, g) {
        var e = p("baseModel").xa;
        g.qb = e.extend({ra: ""})
    }
};
k.commonBehaviour = {
    code: function (h, g) {
        var e = p("baseModel").xa;
        g.Hc = e.extend({
            type: "commonBehaviour", name: "", description: "", Jd: [], construct: function () {
            }
        })
    }
};
k.frameAnimation = {
    code: function (h, g) {
        var e = p("baseModel").xa;
        g.Jc = e.extend({
            type: "frameAnimation",
            name: "",
            frames: [],
            duration: 1E3,
            pa: null,
            $a: null,
            ed: 0,
            construct: function () {
                this.ed = ~~(this.duration / this.frames.length)
            },
            play: function () {
                this.pa.Ga = this
            },
            stop: function () {
                this.$a = this.pa.Ga = null
            },
            update: function (c) {
                this.$a || (this.$a = c);
                c = ~~((c - this.$a) % this.duration * this.frames.length / this.duration);
                this.pa.Ua != this.frames[c] && this.pa.xc(this.frames[c])
            }
        })
    }
};
k.gameObject = {
    code: function (h, g) {
        var e = p("collider", {wa: !0}).aa(), c = p("renderer", {wa: !0}).aa(), a = p("baseGameObject").Pb, b = p("commonBehaviour").Hc, d = p("bundle").aa(), f = p("collections"), l = p("resourceCache");
        g.Zd = a.extend({
            type: "gameObject",
            Ma: null,
            ea: null,
            be: null,
            zb: [],
            Sa: null,
            ka: null,
            Ua: 0,
            Wb: 0,
            Xb: 0,
            Za: null,
            pd: [],
            Ga: null,
            mb: !0,
            xb: null,
            construct: function () {
                var a = this;
                a.za();
                a.ka = {x: 0, y: 0};
                a.Za = new f.ia;
                a.Ma && (a.ea = d.Ac.find({id: a.Ma}), a.xc(a.Ua), a.Za.clear(), a.pd.forEach(function (b) {
                    b = d.qd.find({id: b});
                    b = b.clone(g.Jc);
                    b.pa = a;
                    a.Za.add(b)
                }), a.Sa = new f.ia, a.zb.forEach(function (f) {
                    a.Sa.add(new b(f))
                }))
            },
            hc: function (a) {
                return this.Za.find({name: a})
            },
            xc: function (a) {
                this.Ua = a;
                this.Wb = this.ea.ic(this.Ua);
                this.Xb = this.ea.jc(this.Ua)
            },
            Ye: function (a) {
                this.ea = a;
                this.width = a.oa;
                this.height = a.na
            },
            update: function (a, b) {
                this.Ga && this.Ga.update(a);
                e.Eb(this, this.ba.x + this.ka.x * b / 1E3, this.ba.y + this.ka.y * b / 1E3);
                this.sb(b);
                this.Ub();
                this.Ha()
            },
            Sd: function () {
                this.Ga && this.Ga.stop()
            },
            Ha: function () {
                var a = c.getContext();
                a.save();
                this.za();
                a.drawImage(l.get(this.ea.ra), this.Wb, this.Xb, this.ea.oa, this.ea.na, 0, 0);
                a.restore()
            }
        })
    }
};
k.layer = {
    code: function (h, g) {
        var e = p("baseModel").xa, c = p("collections"), a = p("textField").Wc, b = p("bundle").aa();
        g.Mc = e.extend({
            type: "layer", sd: [], ta: null, Vb: null, construct: function () {
                var d = this;
                d.ta = new c.ia;
                this.sd.forEach(function (f) {
                    var c;
                    switch (f.Td) {
                        case "textField":
                            c = new a(f);
                            break;
                        default:
                            c = b.ec.find({id: f.uc}).clone(), c.bb(f)
                    }
                    c.wb = d;
                    d.ta.add(c)
                })
            }, Bb: function () {
                var a = new c.Set;
                this.ta.forEach(function (b) {
                    b.ea && a.add(b.ea)
                });
                return a
            }, update: function (a, b) {
                this.ta.forEach(function (f) {
                    f && f.update(a,
                        b)
                })
            }
        })
    }
};
k.particleSystem = {
    code: function (h, g) {
        var e = p("mathEx"), c = p("bundle").aa(), a = p("baseModel").xa;
        g.$d = a.extend({
            type: "particleSystem",
            rd: null,
            pa: null,
            Ta: null,
            Gb: null,
            Ba: null,
            Jb: null,
            Ib: null,
            Ka: null,
            construct: function () {
                this.Ta = [];
                this.Gb || (this.Gb = {from: 1, Da: 10});
                this.Ba || (this.Ba = {from: 0, Da: 0});
                this.Ba.Da > this.Ba.from && (this.Ba.from += 2 * Math.PI);
                this.Jb || (this.Jb = {from: 1, Da: 100});
                this.Ib || (this.Ib = {from: 100, Da: 1E3});
                this.Ka || (this.Ka = 0);
                this.pa = c.ec.find({id: this.rd})
            },
            Ge: function (a, d) {
                function b(a) {
                    return e.vd(a.from, a.Da)
                }

                for (var l = 0; l < b(this.Gb); l++) {
                    var m = this.pa.clone(), n = b(this.Ba), g = b(this.Jb);
                    m.ka.x = g * Math.cos(n);
                    m.ka.y = g * Math.sin(n);
                    m.ba.x = b({from: a - this.Ka, Da: a + this.Ka});
                    m.ba.y = b({from: d - this.Ka, Da: d + this.Ka});
                    m.Fd = b(this.Ib);
                    c.yb(m);
                    this.Ta.push(m)
                }
            },
            update: function (a, d) {
                var b = this;
                this.Ta.forEach(function (f) {
                    f.xb || (f.xb = a);
                    a - f.xb > f.Fd && b.Ta.splice(b.Ta.indexOf(f), 1);
                    f.update(a, d)
                })
            }
        })
    }
};
k.scene = {
    code: function (h, g) {
        var e = p("baseModel").xa, c = p("collections"), a = p("bundle").aa(), b = p("renderer", {wa: !0}).aa(), d = p("resourceCache"), f = p("camera").aa();
        g.Sc = e.extend({
            type: "scene",
            Ed: [],
            ya: null,
            fa: null,
            Fa: null,
            Wd: !1,
            Ja: [255, 255, 255],
            Ia: null,
            $c: function () {
                var a = this;
                a.Fa = new c.ia;
                a.ya.forEach(function (b) {
                    a.Fa.addAll(b.ta)
                })
            },
            construct: function () {
                var b = this;
                b.ya = new c.ia;
                this.Ed.forEach(function (f) {
                    var d = a.oc.find({id: f.uc}).clone(g.Mc);
                    d.bb(f);
                    d.Vb = b;
                    b.ya.add(d)
                });
                b.Ia = [];
                b.fa || (b.fa = {
                    ea: null,
                    Ma: null, width: 0, height: 0, data: []
                });
                b.fa.Ma && (b.fa.ea = a.Ac.find({id: b.fa.Ma}), b.fa.cd = ~~(a.ha.width / b.fa.ea.oa), b.fa.dd = ~~(a.ha.height / b.fa.ea.na))
            },
            Bb: function () {
                var a = new c.Set;
                this.ya.forEach(function (b) {
                    a.kd(b.Bb())
                });
                this.fa.Ma && a.add(this.fa.ea);
                return a
            },
            find: function (a) {
                return this.Fa.find({name: a})
            },
            Je: function () {
                return this.Fa
            },
            update: function (a, b) {
                var f = this;
                f.Ha();
                f.ya.forEach(function (f) {
                    f.update(a, b)
                });
                f.Ia.forEach(function (b) {
                    b.ma && f.Ia.splice(f.Ia.indexOf(b), 1);
                    b.update(a)
                });
                f.sb(a)
            },
            Ha: function () {
                for (var a = b.getContext(), c = this.fa.ea, e = ~~(f.ba.x / this.fa.ea.oa), g = ~~(f.ba.y / this.fa.ea.na), h = e + this.fa.cd + 2, u = g + this.fa.dd + 2; g < u; g++)for (var w = e; w < h; w++) {
                    var r = this.fa.data[g] && this.fa.data[g][w];
                    void 0 != r && a.drawImage(d.get(c.ra), c.ic(r), c.jc(r), c.oa, c.na, w * c.oa, g * c.na)
                }
            },
            lb: function (a, f, c, d) {
                c && (c.substring || (c = JSON.stringify(c, null, 4)), b.lb(a, f, c, d))
            },
            log: function (a) {
                this.lb(0, 0, a)
            }
        })
    }
};
k.sound = {
    code: function (h, g) {
        var e = p("resource").qb;
        g.ae = e.extend({type: "sound", ad: null})
    }
};
k.spriteSheet = {
    code: function (h, g) {
        var e = p("resource").qb;
        g.Uc = e.extend({
            type: "spriteSheet",
            width: 0,
            height: 0,
            Xa: 1,
            Fb: 1,
            oa: 0,
            na: 0,
            bd: 0,
            ce: null,
            ic: function (c) {
                return c % this.Xa * this.oa
            },
            jc: function (c) {
                return ~~(c / this.Xa) * this.na
            },
            hd: function () {
                this.Xa && this.Fb && (this.oa = this.width / this.Xa, this.na = this.height / this.Fb, this.bd = this.Xa * this.Fb)
            },
            construct: function () {
                this.hd()
            }
        })
    }
};
k.font = {
    code: function (h, g) {
        var e = p("resource").qb;
        g.Yd = e.extend({type: "font", He: "black", fontSize: 12, fontFamily: "Monospace", va: null})
    }
};
k.textField = {
    code: function (h, g) {
        var e = p("renderer", {wa: !0}).aa(), c = p("baseGameObject").Pb, a = p("spriteSheet").Uc, b = p("bundle").aa(), d = p("resourceCache");
        g.Wc = c.extend({
            type: "userInterface", Td: "textField", tb: null, text: "", sa: null, od: null, mb: !1, Pd: function (a) {
                a += "";
                this.tb = [];
                this.text = a;
                var b = [{width: 0}], f = 0;
                this.height = this.sa.va.Ca[" "].height;
                for (var c = 0, d = a.length; c < d; c++) {
                    this.tb.push(a[c]);
                    var e = this.sa.va.Ca[a[c]] || this.sa.va.Ca[" "];
                    "\n" == a[c] ? (f++, this.height += e.height, b[f] = {width: 0}) : b[f].width +=
                        e.width
                }
                this.width = Math.max.apply(Math, b.map(function (a) {
                    return a.width
                }))
            }, Od: function (b) {
                this.sa = b;
                this.height = this.sa.va.Ca[" "].height;
                this.ea = new a({ra: this.sa.ra});
                this.Pd(this.text)
            }, clone: function () {
                return this.za()
            }, construct: function () {
                this.za();
                this.mb = !1;
                var a = b.Wa.find({id: this.od}) || b.Wa.find({name: "default"}) || b.Wa.get(0);
                a && this.Od(a)
            }, update: function () {
                this.Ha()
            }, Ha: function () {
                var a = this, b = e.getContext();
                this.za();
                var c = 0, g = 0, h = d.get(a.ea.ra);
                this.tb.forEach(function (b) {
                    var f = a.sa.va.Ca[b] ||
                        a.sa.va.Ca["?"];
                    "\n" == b ? (c = 0, g += f.height) : (e.getContext().drawImage(h, f.x, f.y, f.width, f.height, c, g), c += f.width)
                });
                b.restore()
            }
        })
    }
};
k.camera = {
    code: function (h) {
        function g() {
            var a = null, b = null, c, f;
            this.ba = {x: 0, y: 0};
            this.nd = function (d) {
                a = d;
                b = d.cb();
                c = b.fa.ea.oa * b.fa.width;
                f = b.fa.ea.na * b.fa.height
            };
            this.update = function (b) {
                if (a) {
                    var d = this.ba, g = e.ha.width, l = e.ha.height;
                    d.x = a.ba.x - g / 2;
                    d.y = a.ba.y - l / 2;
                    0 > d.x && (d.x = 0);
                    0 > d.y && (d.y = 0);
                    d.x > c - g && (d.x = c - g);
                    d.y > f - l && (d.y = f - l);
                    b.translate(-d.x, -d.y)
                }
            }
        }

        var e = p("bundle").aa(), c = null;
        h.ga.aa = function () {
            null == c && (c = new g);
            return c
        }
    }
};
k.canvasContext = {
    code: function (h) {
        function g() {
            var a;
            this.eb = function (b) {
                a = b.getContext("2d")
            };
            this.drawImage = function (b, c, e, g, n, h, t) {
                a.drawImage(b.zd, c, e, g, n, h, t, g, n)
            };
            var b = {};
            this.qc = function (a, c, e) {
                if (b.url)e(b[a]); else {
                    "base64" == c.type && (a = utils.fc(c.fileName) + a);
                    var f = new Image(a);
                    f.onload = function () {
                        e({
                            zd: f, Cb: function () {
                                return {width: f.width, height: f.height}
                            }
                        })
                    };
                    f.onerror = function () {
                        throw"can not load image with url " + a;
                    };
                    f.src = a
                }
            };
            this.clear = function () {
                a.fillStyle = "#FFFFFF";
                a.fillRect(0, 0,
                    e.ha.width, e.ha.height)
            };
            this.save = function () {
                a.save()
            };
            this.scale = function (b, c) {
                a.scale(b, c)
            };
            this.nb = function (b) {
                a.rotate(b)
            };
            this.Lb = function () {
            };
            this.translate = function (b, c) {
                a.translate(b, c)
            };
            this.restore = function () {
                a.restore()
            };
            this.Kb = function () {
            };
            this.Zb = function () {
            };
            this.dc = function () {
            }
        }

        var e = p("bundle").aa(), c = null;
        h.ga.aa = function () {
            null == c && (c = new g);
            return c
        }
    }
};
k.frameBuffer = {
    code: function (h, g) {
        g.Kc = function (e, c, a) {
            var b, d, f;
            this.bind = function () {
                e.bindFramebuffer(e.FRAMEBUFFER, f);
                e.viewport(0, 0, c, a)
            };
            this.Vd = function () {
                e.bindFramebuffer(e.FRAMEBUFFER, null)
            };
            this.kc = function () {
                return b
            };
            b = e.createTexture();
            e.bindTexture(e.TEXTURE_2D, b);
            e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE);
            e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE);
            e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.LINEAR);
            e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER,
                e.LINEAR);
            e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, c, a, 0, e.RGBA, e.UNSIGNED_BYTE, null);
            d = e.createRenderbuffer();
            e.bindRenderbuffer(e.RENDERBUFFER, d);
            e.renderbufferStorage(e.RENDERBUFFER, e.DEPTH_COMPONENT16, c, a);
            f = e.createFramebuffer();
            e.bindFramebuffer(e.FRAMEBUFFER, f);
            e.framebufferTexture2D(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, b, 0);
            e.framebufferRenderbuffer(e.FRAMEBUFFER, e.DEPTH_ATTACHMENT, e.RENDERBUFFER, d);
            e.bindTexture(e.TEXTURE_2D, null);
            e.bindRenderbuffer(e.RENDERBUFFER, null);
            e.bindFramebuffer(e.FRAMEBUFFER,
                null)
        }
    }
};
k.glContext = {
    code: function (h) {
        function g() {
            function g(a, b, c, f, d, g, m, n) {
                d = e.Gd(d, g);
                a = e.qa(e.ib(c * m, f * n, 1), e.jb(a * m, b * n, 0));
                a = e.qa(a, x.La());
                return a = e.qa(a, d)
            }

            var h, t = 1, A = 1, v, z, x = new l, y, q;
            this.Ja = [255, 255, 255];
            this.eb = function (c) {
                q = n.ha;
                h = c.getContext("webgl", {alpha: !1});
                v = new b(h, a.Rc.Vc);
                v.bind();
                z = new d(h, v.lc());
                z.bind([0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1], 2, "a_position");
                new d(h, v.lc());
                z.bind([0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1], 2, "a_texcoord");
                y = new m(h, q.la, q.ja);
                h.blendFunc(h.SRC_ALPHA, h.ONE_MINUS_SRC_ALPHA);
                h.enable(h.BLEND)
            };
            var C = {};
            this.qc = function (a, b, d) {
                if (C.url)d(C[a]); else {
                    "base64" == b.type && (a = c.fc(b.fileName) + a);
                    var e = new Image, g = new f(h, e);
                    e.onload = function () {
                        g.apply(e);
                        d(g)
                    };
                    e.onerror = function () {
                        throw"can not load image with url " + a;
                    };
                    e.src = a
                }
            };
            var B = null;
            this.drawImage = function (a, b, c, f, d, m, n) {
                var l = a.Cb().width, t = a.Cb().height;
                void 0 === m && (m = b);
                void 0 === n && (n = c);
                void 0 === f && (f = l);
                void 0 === d && (d = t);
                B != a && (a.bind(), B = a);
                v.Ya("u_matrix", g(m, n, f, d, q.width, q.height, 1, 1));
                v.Ya("u_textureMatrix", e.qa(e.ib(f / l, d / t,
                    1), e.jb(b / l, c / t, 0)));
                64 != l && h.blendFunc(h.SRC_ALPHA, h.ONE_MINUS_SRC_ALPHA);
                h.drawArrays(h.TRIANGLES, 0, 6)
            };
            this.clear = function () {
                h.clearColor(this.Ja[0] / 255, this.Ja[1] / 255, this.Ja[2] / 255, 1);
                h.clear(h.COLOR_BUFFER_BIT)
            };
            this.save = function () {
                x.save()
            };
            this.scale = function (a, b) {
                x.scale(a, b)
            };
            this.nb = function (a) {
                x.nb(a)
            };
            this.Lb = function (a) {
                x.Lb(a)
            };
            this.translate = function (a, b) {
                x.translate(a, b)
            };
            this.restore = function () {
                x.restore()
            };
            this.Kb = function (a, b) {
                t = a;
                A = b
            };
            this.Zb = function () {
                this.save();
                h.viewport(0,
                    0, q.width, q.height);
                y.bind()
            };
            this.dc = function () {
                B = null;
                this.restore();
                this.save();
                this.translate(0, q.ja);
                this.scale(1, -1);
                y.Vd();
                this.clear();
                h.viewport(0, 0, q.la, q.ja);
                h.bindTexture(h.TEXTURE_2D, y.kc());
                q.wc == P.Qb ? v.Ya("u_matrix", g(q.ca.left, q.ca.top, q.width, q.height, q.la, q.ja, t, A)) : v.Ya("u_matrix", g(0, 0, q.width, q.height, q.la, q.ja, t, A));
                var a = q.la, b = q.ja;
                v.Ya("u_textureMatrix", e.qa(e.ib(q.la / a, q.ja / b, 1), e.jb(0 / a, 0 / b, 0)));
                h.blendFunc(h.SRC_ALPHA, h.ONE_MINUS_SRC_ALPHA);
                h.drawArrays(h.TRIANGLES, 0, 6);
                this.restore()
            }
        }

        var e = p("mat4"), c = p("utils"), a = p("shaderSources"), b = p("shader").Tc, d = p("vertexBuffer").Zc, f = p("texture").Xc, l = p("matrixStack").Nc, m = p("frameBuffer").Kc, n = p("bundle").aa(), P = p("consts").Sb, t = null;
        h.ga.aa = function () {
            null == t && (t = new g);
            return t
        }
    }
};
k.matrixStack = {
    code: function (h, g) {
        var e = p("mat4");
        g.Nc = function () {
            this.stack = [];
            this.restore = function () {
                this.stack.pop();
                1 > this.stack.length && (this.stack[0] = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1])
            };
            this.save = function () {
                this.stack.push(this.La())
            };
            this.La = function () {
                return this.stack[this.stack.length - 1].slice()
            };
            this.pb = function (c) {
                this.stack[this.stack.length - 1] = c
            };
            this.translate = function (c, a, b) {
                void 0 === b && (b = 0);
                this.pb(e.qa(e.jb(c, a, b), this.La()))
            };
            this.nb = function (c) {
                this.pb(e.qa(e.Id(c), this.La()))
            };
            this.Lb = function (c) {
                this.pb(e.qa(e.Hd(c), this.La()))
            };
            this.scale = function (c, a, b) {
                void 0 === b && (b = 1);
                this.pb(e.qa(e.ib(c, a, b), this.La()))
            };
            this.restore()
        }
    }
};
k.shader = {
    code: function (h, g) {
        function e(a, c) {
            if (1 == a)switch (c) {
                case "float":
                    return function (a, b, c) {
                        a.uniform1f(b, c)
                    };
                case "vec2":
                    return function (a, b, c) {
                        a.uniform2f(b, c[0], c[1])
                    };
                case "vec3":
                    return function (a, b, c) {
                        a.uniform3f(b, c[0], c[1], c[2])
                    };
                case "vec4":
                    return function (a, b, c) {
                        a.uniform4f(b, c[0], c[1], c[2], c[3])
                    };
                case "int":
                    return function (a, b, c) {
                        a.uniform1i(b, c)
                    };
                case "ivec2":
                    return function (a, b, c) {
                        a.uniform2i(b, c[0], c[1])
                    };
                case "ivec3":
                    return function (a, b, c) {
                        a.uniform3i(b, c[0], c[1], c[2])
                    };
                case "ivec4":
                    return function (a,
                                     b, c) {
                        a.uniform4i(b, c[0], c[1], c[2], c[3])
                    };
                case "bool":
                    return function (a, b, c) {
                        a.uniform1i(b, c)
                    };
                case "bvec2":
                    return function (a, b, c) {
                        a.uniform2i(b, c[0], c[1])
                    };
                case "bvec3":
                    return function (a, b, c) {
                        a.uniform3i(b, c[0], c[1], c[2])
                    };
                case "bvec4":
                    return function (a, b, c) {
                        a.uniform4i(b, c[0], c[1], c[2], c[3])
                    };
                case "mat2":
                    return function (a, b, c) {
                        a.uniformMatrix2fv(b, !1, c)
                    };
                case "mat3":
                    return function (a, b, c) {
                        a.uniformMatrix3fv(b, !1, c)
                    };
                case "mat4":
                    return function (a, b, c) {
                        a.uniformMatrix4fv(b, !1, c)
                    };
                case "sampler2D":
                    return function (a,
                                     b, c) {
                        a.uniform1i(b, c)
                    }
            } else switch (c) {
                case "float":
                    return function (a, b, c) {
                        a.uniform1fv(b, c)
                    };
                case "vec2":
                    return function (a, b, c) {
                        a.uniform2fv(b, c)
                    };
                case "vec3":
                    return function (a, b, c) {
                        a.uniform3fv(b, c)
                    };
                case "vec4":
                    return function (a, b, c) {
                        a.uniform4fv(b, c)
                    };
                case "int":
                    return function (a, b, c) {
                        a.uniform1iv(b, c)
                    };
                case "ivec2":
                    return function (a, b, c) {
                        a.uniform2iv(b, c)
                    };
                case "ivec3":
                    return function (a, b, c) {
                        a.uniform3iv(b, c)
                    };
                case "ivec4":
                    return function (a, b, c) {
                        a.uniform4iv(b, c)
                    };
                case "bool":
                    return function (a,
                                     b, c) {
                        a.uniform1iv(b, c)
                    };
                case "bvec2":
                    return function (a, b, c) {
                        a.uniform2iv(b, c)
                    };
                case "bvec3":
                    return function (a, b, c) {
                        a.uniform3iv(b, c)
                    };
                case "bvec4":
                    return function (a, b, c) {
                        a.uniform4iv(b, c)
                    };
                case "sampler2D":
                    return function (a, b, c) {
                        a.uniform1iv(b, c)
                    }
            }
        }

        function c(a, c, e) {
            e = a.createShader(e);
            a.shaderSource(e, c);
            a.compileShader(e);
            if (!a.getShaderParameter(e, a.COMPILE_STATUS))throw c = a.getShaderInfoLog(e), a.deleteShader(e), console.error("*** Error compiling shader " + e + ":" + c), "Error compiling shader";
            return e
        }

        function a(a, c) {
            var b = a.createProgram();
            c.forEach(function (c) {
                a.attachShader(b, c)
            });
            a.linkProgram(b);
            if (!a.getProgramParameter(b, a.LINK_STATUS))throw console.error("Error in program linking:" + a.getProgramInfoLog(b)), a.deleteProgram(b), "Error in program linking";
            return b
        }

        g.Tc = function (b, d) {
            var f, g;
            (function () {
                for (var h = c(b, d[0], b.VERTEX_SHADER), n = c(b, d[1], b.FRAGMENT_SHADER), h = f = a(b, [h, n]), n = {}, l = b.getProgramParameter(h, b.ACTIVE_UNIFORMS), t = 0; t < l; t++) {
                    var u = b.getActiveUniform(h, t), w = u.name.replace(/\[.*?]/,
                        ""), r;
                    r = b;
                    var A = u.type, v = null, z = {
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
                    if (!v)for (var x = Object.keys(z), v = {}, y = 0; y < x.length; ++y) {
                        var q = x[y];
                        v[r[q]] = z[q]
                    }
                    r = v[A];
                    n[w] = {type: r, size: u.size, name: w, location: b.getUniformLocation(h, w), Rd: e(u.size, r)}
                }
                g = n
            })();
            this.lc = function () {
                return f
            };
            this.bind = function () {
                b.useProgram(f)
            };
            this.Ya = function (a, c) {
                var e = g[a];
                if (!e)throw"no uniform with name " + a + " found!";
                e.Rd(b, e.location, c)
            }
        }
    }
};
k.shaderSources = {
    code: function (h, g) {
        g.Rc = {Vc: ["attribute vec4 a_position; attribute vec2 a_texcoord; uniform mat4 u_matrix; uniform mat4 u_textureMatrix; varying vec2 v_texcoord; void main() { gl_Position = u_matrix * a_position;    v_texcoord = (u_textureMatrix * vec4(a_texcoord, 0, 1)).xy; }", "precision mediump float; varying vec2 v_texcoord;uniform sampler2D texture;void main() {     gl_FragColor = texture2D(texture, v_texcoord);} "]}
    }
};
k.texture = {
    code: function (h, g) {
        function e(c) {
            return 0 == (c & c - 1)
        }

        g.Xc = function (c, a) {
            var b, d;
            this.apply = function () {
                d = {width: a.width, height: a.height};
                this.bind();
                c.texImage2D(c.TEXTURE_2D, 0, c.RGBA, c.RGBA, c.UNSIGNED_BYTE, a);
                e(a.width) && e(a.height) ? c.generateMipmap(c.TEXTURE_2D) : (c.texParameteri(c.TEXTURE_2D, c.TEXTURE_WRAP_S, c.CLAMP_TO_EDGE), c.texParameteri(c.TEXTURE_2D, c.TEXTURE_WRAP_T, c.CLAMP_TO_EDGE), c.texParameteri(c.TEXTURE_2D, c.TEXTURE_MIN_FILTER, c.LINEAR), c.texParameteri(c.TEXTURE_2D, c.TEXTURE_MAG_FILTER,
                    c.LINEAR));
                c.bindTexture(c.TEXTURE_2D, null);
                window.Le = c
            };
            this.bind = function () {
                c.bindTexture(c.TEXTURE_2D, b)
            };
            this.Cb = function () {
                return d
            };
            this.kc = function () {
                return b
            };
            b = c.createTexture();
            c.bindTexture(c.TEXTURE_2D, b);
            c.texImage2D(c.TEXTURE_2D, 0, c.RGBA, 1, 1, 0, c.RGBA, c.UNSIGNED_BYTE, new Uint8Array([0, 0, 255, 255]))
        }
    }
};
k.vertexBuffer = {
    code: function (h) {
        h.ga.Zc = function (g, e) {
            var c = g.createBuffer();
            this.bind = function (a, b, d) {
                d = g.getAttribLocation(e, d);
                g.bindBuffer(g.ARRAY_BUFFER, c);
                g.enableVertexAttribArray(d);
                g.vertexAttribPointer(d, b, g.FLOAT, !1, 0, 0);
                g.bufferData(g.ARRAY_BUFFER, new Float32Array(a), g.STATIC_DRAW)
            }
        }
    }
};
k.renderer = {
    code: function (h) {
        function g() {
            function g() {
                if (!window.ab && !window.ab && (r(g), l)) {
                    w = u;
                    u = Date.now();
                    var b = w ? u - w : 0;
                    h.Zb();
                    h.clear();
                    f.update(h);
                    l.update(u, b);
                    e.tc.forEach(function (a) {
                        a.update(u, b)
                    });
                    h.dc();
                    a.update()
                }
            }

            var n, h, l, u = 0, w = 0, r = window.requestAnimationFrame || window.webkitRequestAnimationFrame || function (a) {
                    setTimeout(a, 17)
                };
            this.getContext = function () {
                return h
            };
            this.gc = function () {
                return n
            };
            this.eb = function () {
                n = document.querySelector("canvas");
                n || (n = document.createElement("canvas"),
                    document.body.appendChild(n));
                h = b;
                p("scaleManager").aa(n, h).Eb();
                h.eb(n);
                g()
            };
            this.gc = function () {
                return n
            };
            this.cancel = function () {
                window.ab = !0
            };
            this.Nb = function (a) {
                l = a;
                l.Wd && (h.Ja = l.Ja);
                c.Qd()
            };
            this.lb = function (a, b, c, g) {
                if (c) {
                    g = g || e.Wa.get(0);
                    if (!g)throw"at least one font must be specified. Create new one please";
                    var n = a, l = b;
                    c.split("").forEach(function (b) {
                        var c = g.va.Ca[b] || g.va.Ca["?"];
                        "\n" == b ? (n = a, l += c.height) : (h.drawImage(d.get(g.ra), c.x, c.y, c.width, c.height, n + f.ba.x, l + f.ba.y, c.width, c.height),
                            n += c.width)
                    })
                }
            }
        }

        var e = p("bundle").aa(), c = p("collider").aa(), a = p("keyboard").aa(), b = p("glContext").aa();
        p("canvasContext").aa();
        var d = p("resourceCache"), f = p("camera").aa(), l = null;
        h.ga.aa = function () {
            null == l && (l = new g);
            return l
        }
    }
};
k.scaleManager = {
    code: function (h) {
        function g(b, f) {
            function d() {
                window.addEventListener("resize", function () {
                    g()
                })
            }

            function g() {
                var d = a.ha;
                switch (+d.wc) {
                    case e.Rb:
                        var g, h;
                        d.ca.x = 1;
                        d.ca.y = 1;
                        d.ca.left = 0;
                        d.ca.top = 0;
                        d.left = 0;
                        d.top = 0;
                        d.la = d.width;
                        d.ja = d.height;
                        b.width = d.width;
                        b.height = d.height;
                        break;
                    case e.Fc:
                        g = window.innerWidth * c;
                        h = window.innerHeight * c;
                        var l = Math.min(g / d.width, h / d.height), m = d.width * l, r = d.height * l;
                        d.ca.x = m / d.width;
                        d.ca.y = r / d.height;
                        d.Md = m;
                        d.Ld = r;
                        d.ca.left = (g - m) / 2;
                        d.ca.top = (h - r) / 2;
                        d.left =
                            (g - m) / 2;
                        d.top = (h - r) / 2;
                        d.la = d.width;
                        d.ja = d.height;
                        b.width = d.width;
                        b.height = d.height;
                        b.style.width = m + "px";
                        b.style.height = r + "px";
                        b.style.top = d.top + "px";
                        b.style.left = d.left + "px";
                        break;
                    case e.Qb:
                        g = window.innerWidth * c;
                        h = window.innerHeight * c;
                        l = Math.min(g / d.width, h / d.height);
                        m = d.width * l;
                        r = d.height * l;
                        d.ca.x = m / d.width;
                        d.ca.y = r / d.height;
                        d.ca.Md = m;
                        d.ca.Ld = r;
                        d.ca.left = (g - m) / 2 / l;
                        d.ca.top = (h - r) / 2 / l;
                        d.left = (g - m) / 2;
                        d.top = (h - r) / 2;
                        d.la = g;
                        d.ja = h;
                        b.width = g;
                        b.height = h;
                        f.Kb(d.ca.x, d.ca.y);
                        break;
                    case e.Gc:
                        g = window.innerWidth *
                            c;
                        h = window.innerHeight * c;
                        d.ca.x = g / d.width;
                        d.ca.y = h / d.height;
                        d.ca.left = 0;
                        d.ca.top = 0;
                        d.left = 0;
                        d.top = 0;
                        d.la = d.width;
                        d.ja = d.height;
                        b.width = d.width;
                        b.height = d.height;
                        b.style.width = g + "px";
                        b.style.height = h + "px";
                        break;
                    case e.Lc:
                        g = window.innerWidth * c, h = window.innerHeight * c, d.ca.x = g / d.width, d.ca.y = h / d.height, d.ca.left = 0, d.ca.top = 0, d.left = 0, d.top = 0, d.la = g, d.ja = h, b.width = g, b.height = h, b.style.width = g + "px", b.style.height = h + "px", f.Kb(d.ca.x, d.ca.y)
                }
            }

            this.Eb = function () {
                var b = a.ha;
                b.ca = {};
                g();
                b.wc != e.Rb && d()
            }
        }

        var e =
            p("consts").Sb, c = p("device").$b, a = p("bundle").aa(), b = null;
        h.ga.aa = function (a, c) {
            if (null == b) {
                if (!a)throw"can not instantiate ScaleManager: canvas not specified";
                b = new g(a, c)
            }
            return b
        }
    }
};
k.sceneManager = {
    code: function (h) {
        function g() {
            function c(c) {
                a || (a = p("renderer").aa());
                b || (b = p("bundle").aa());
                var d = new (p("resourceLoader").Qc);
                d.Hb = function () {
                    b.fd();
                    a.Nb(c)
                };
                var e = c.Bb();
                b.tc.forEach(function (a) {
                    e.add(a.pa.ea)
                });
                b.Wa.forEach(function (a) {
                    d.pc(a.ra)
                });
                e.gd().forEach(function (a) {
                    d.pc(a.ra)
                });
                b.zc.forEach(function (a) {
                    d.Db(a.ra)
                });
                d.start()
            }

            var a, b;
            this.Va = null;
            this.Nb = function (a) {
                var b = p("scene").Sc;
                if (!(a instanceof b))throw"object " + a + " is not a scene";
                this.Va != a && (this.Va = a, c(a))
            }
        }

        var e = null;
        h.ga.aa = function () {
            null == e && (e = new g);
            return e
        }
    }
};
k.tween = {
    code: function (h, g) {
        g.rb = function (e, c, a, b, d, f) {
            var g = null;
            f = f || "linear";
            this.ma = !1;
            var h = p("mathEx");
            this.Ud = d;
            this.update = function (l) {
                g || (g = l);
                this.ma || (l -= g, l > d ? this.complete() : e[c] = h.ld[f](l, a, b - a, d))
            };
            this.reset = function () {
                g = null;
                this.ma = !1
            };
            this.complete = function () {
                this.ma || (e[c] = b, this.ma = !0)
            }
        }
    }
};
k.tweenMovie = {
    code: function (h, g) {
        g.Tb = function () {
            var e = [], c = null, a = this.ma = !1;
            this.add = function (a, c) {
                e.push({startTime: a, Na: c});
                return this
            };
            this.loop = function (b) {
                a = b
            };
            this.update = function (b) {
                if (!this.ma) {
                    c || (c = b);
                    var d = b - c, f = !0;
                    e.forEach(function (a) {
                        d > a.startTime && (d < a.startTime + a.Na.Ud ? a.Na.update(b) : a.Na.complete());
                        a.Na.ma || (f = !1)
                    });
                    f && (a ? this.reset() : this.ma = !0)
                }
            };
            this.reset = function () {
                c = null;
                this.ma = !1;
                e.forEach(function (a) {
                    a.Na.reset()
                })
            }
        }
    }
};
p("index");