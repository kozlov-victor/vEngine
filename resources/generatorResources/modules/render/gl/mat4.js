
exports.makeIdentity = function () {
    return new Float32Array([
        1, 0, 0, 0,
        0, 1, 0, 0,
        0, 0, 1, 0,
        0, 0, 0, 1
    ]);
};

exports.make2DProjection = function (width, height, depth) {
    // Note: This matrix flips the Y axis so 0 is at the top.
    return new Float32Array([
        2 / width, 0, 0, 0,
        0, - 2 / height, 0, 0,
        0, 0, 2 / depth, 0,
        -1, 1, 0, 1
    ]);
};

exports.makePerspective = function (fieldOfViewInRadians, aspect, near, far) {
    var f = Math.tan(Math.PI * 0.5 - 0.5 * fieldOfViewInRadians);
    var rangeInv = 1.0 / (near - far);

    return new Float32Array([
        f / aspect, 0, 0, 0,
        0, f, 0, 0,
        0, 0, (near + far) * rangeInv, -1,
        0, 0, near * far * rangeInv * 2, 0
    ]);
};

exports.makeTranslation = function (tx, ty, tz) {
    return new Float32Array([
        1, 0, 0, 0,
        0, 1, 0, 0,
        0, 0, 1, 0,
        tx, ty, tz, 1
    ]);
};

exports.makeXRotation = function (angleInRadians) {
    var c = Math.cos(angleInRadians);
    var s = Math.sin(angleInRadians);

    return new Float32Array([
        1, 0, 0, 0,
        0, c, s, 0,
        0, -s, c, 0,
        0, 0, 0, 1
    ]);
};

exports.makeYRotation = function (angleInRadians) {
    var c = Math.cos(angleInRadians);
    var s = Math.sin(angleInRadians);

    return new Float32Array([
        c, 0, -s, 0,
        0, 1, 0, 0,
        s, 0, c, 0,
        0, 0, 0, 1
    ]);
};

exports.makeZRotation = function (angleInRadians) {
    var c = Math.cos(angleInRadians);
    var s = Math.sin(angleInRadians);
    return new Float32Array([
        c, s, 0, 0,
        -s, c, 0, 0,
        0, 0, 1, 0,
        0, 0, 0, 1
    ]);
};

exports.makeScale = function (sx, sy, sz) {
    return new Float32Array([
        sx, 0, 0, 0,
        0, sy, 0, 0,
        0, 0, sz, 0,
        0, 0, 0, 1
    ]);
};

exports.makeZToWMatrix = function(fudgeFactor) {
    return [
        1, 0, 0, 0,
        0, 1, 0, 0,
        0, 0, 1, fudgeFactor,
        0, 0, 0, 1
    ];
};

exports.matrixMultiply = function (a, b) {
    var a00 = a[0 * 4 + 0];
    var a01 = a[0 * 4 + 1];
    var a02 = a[0 * 4 + 2];
    var a03 = a[0 * 4 + 3];
    var a10 = a[1 * 4 + 0];
    var a11 = a[1 * 4 + 1];
    var a12 = a[1 * 4 + 2];
    var a13 = a[1 * 4 + 3];
    var a20 = a[2 * 4 + 0];
    var a21 = a[2 * 4 + 1];
    var a22 = a[2 * 4 + 2];
    var a23 = a[2 * 4 + 3];
    var a30 = a[3 * 4 + 0];
    var a31 = a[3 * 4 + 1];
    var a32 = a[3 * 4 + 2];
    var a33 = a[3 * 4 + 3];
    var b00 = b[0 * 4 + 0];
    var b01 = b[0 * 4 + 1];
    var b02 = b[0 * 4 + 2];
    var b03 = b[0 * 4 + 3];
    var b10 = b[1 * 4 + 0];
    var b11 = b[1 * 4 + 1];
    var b12 = b[1 * 4 + 2];
    var b13 = b[1 * 4 + 3];
    var b20 = b[2 * 4 + 0];
    var b21 = b[2 * 4 + 1];
    var b22 = b[2 * 4 + 2];
    var b23 = b[2 * 4 + 3];
    var b30 = b[3 * 4 + 0];
    var b31 = b[3 * 4 + 1];
    var b32 = b[3 * 4 + 2];
    var b33 = b[3 * 4 + 3];
    return new Float32Array([a00 * b00 + a01 * b10 + a02 * b20 + a03 * b30,
        a00 * b01 + a01 * b11 + a02 * b21 + a03 * b31,
        a00 * b02 + a01 * b12 + a02 * b22 + a03 * b32,
        a00 * b03 + a01 * b13 + a02 * b23 + a03 * b33,
        a10 * b00 + a11 * b10 + a12 * b20 + a13 * b30,
        a10 * b01 + a11 * b11 + a12 * b21 + a13 * b31,
        a10 * b02 + a11 * b12 + a12 * b22 + a13 * b32,
        a10 * b03 + a11 * b13 + a12 * b23 + a13 * b33,
        a20 * b00 + a21 * b10 + a22 * b20 + a23 * b30,
        a20 * b01 + a21 * b11 + a22 * b21 + a23 * b31,
        a20 * b02 + a21 * b12 + a22 * b22 + a23 * b32,
        a20 * b03 + a21 * b13 + a22 * b23 + a23 * b33,
        a30 * b00 + a31 * b10 + a32 * b20 + a33 * b30,
        a30 * b01 + a31 * b11 + a32 * b21 + a33 * b31,
        a30 * b02 + a31 * b12 + a32 * b22 + a33 * b32,
        a30 * b03 + a31 * b13 + a32 * b23 + a33 * b33]);
};

exports.MatrixStack = function () {
    this.stack = [];
    var self = this;

    this.restore = function () {
        this.stack.pop();
        // Never let the stack be totally empty
        if (this.stack.length < 1) {
            this.stack[0] = exports.makeIdentity();
        }
    };

    this.save = function () {
        this.stack.push(this.getCurrentMatrix());
    };

    this.getCurrentMatrix = function () {
        return this.stack[this.stack.length - 1].slice();
    };

    this.setCurrentMatrix = function (m) {
        return this.stack[this.stack.length - 1] = m;
    };

    this.translate = function (x, y, z) {
        if (z === undefined) {
            z = 0;
        }
        var t = GlUtils.makeTranslation(x, y, z);
        var m = this.getCurrentMatrix();
        this.setCurrentMatrix(exports.matrixMultiply(t, m));
    };

    this.rotateZ = function (angleInRadians) {
        var t = GlUtils.makeZRotation(angleInRadians);
        var m = this.getCurrentMatrix();
        this.setCurrentMatrix(exports.matrixMultiply(t, m));
    };

    this.rotateY = function (angleInRadians) {
        var t = GlUtils.makeYRotation(angleInRadians);
        var m = this.getCurrentMatrix();
        this.setCurrentMatrix(exports.matrixMultiply(t, m));
    };

    this.scale = function (x, y, z) {
        if (z === undefined) {
            z = 1;
        }
        var t = exports.makeScale(x, y, z);
        var m = this.getCurrentMatrix();
        this.setCurrentMatrix(exports.matrixMultiply(t, m));
    };

    (function () {
        self.restore();
    })();

};