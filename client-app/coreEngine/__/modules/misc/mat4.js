
exports.makeIdentity = function () {
    return [
        1, 0, 0, 0,
        0, 1, 0, 0,
        0, 0, 1, 0,
        0, 0, 0, 1
    ];
};

exports.makeZToWMatrix = function(fudgeFactor) {
    return [
        1, 0, 0, 0,
        0, 1, 0, 0,
        0, 0, 1, fudgeFactor,
        0, 0, 0, 1
    ];
};

exports.make2DProjection = function(width, height, depth) {
    // Note: This matrix flips the Y axis so 0 is at the top.
    return [
        2 / width, 0, 0, 0,
        0, -2 / height, 0, 0,
        0, 0, 2 / depth, 0,
        -1, 1, 0, 1
    ];
};


exports.ortho = function (left, right, bottom, top, near, far) {
    let lr = 1 / (left - right),
        bt = 1 / (bottom - top),
        nf = 1 / (near - far);
    let out = [];
    out[0] = -2 * lr;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = -2 * bt;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = 2 * nf;
    out[11] = 0;
    out[12] = (left + right) * lr;
    out[13] = (top + bottom) * bt;
    out[14] = (far + near) * nf;
    out[15] = 1;
    return out;
};

exports.perspective = function (fovy, aspect, near, far) {
    let f = 1.0 / Math.tan(fovy / 2),
        nf = 1 / (near - far);
    let out = [];

    out[0] = f / aspect;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;

    out[4] = 0;
    out[5] = f;
    out[6] = 0;
    out[7] = 0;

    out[8] = 0;
    out[9] = 0;
    out[10] = (far + near) * nf;
    out[11] = -1;

    out[12] = 0;
    out[13] = 0;
    out[14] = (2 * far * near) * nf;
    out[15] = 0;
    return out;
};


exports.makeTranslation = function(tx, ty, tz) {
    return [
        1,  0,  0,  0,
        0,  1,  0,  0,
        0,  0,  1,  0,
        tx, ty, tz,  1
    ];
};

exports.makeXRotation = function(angleInRadians) {
    let c = Math.cos(angleInRadians);
    let s = Math.sin(angleInRadians);

    return [
        1, 0, 0, 0,
        0, c, s, 0,
        0, -s, c, 0,
        0, 0, 0, 1
    ];
};

exports.makeYRotation = function(angleInRadians) {
    let c = Math.cos(angleInRadians);
    let s = Math.sin(angleInRadians);

    return [
        c, 0, -s, 0,
        0, 1, 0, 0,
        s, 0, c, 0,
        0, 0, 0, 1
    ];
};

exports.makeZRotation = function(angleInRadians) {
    let c = Math.cos(angleInRadians);
    let s = Math.sin(angleInRadians);
    return [
        c, s, 0, 0,
        -s, c, 0, 0,
        0, 0, 1, 0,
        0, 0, 0, 1
    ];
};

exports.makeScale = function(sx, sy, sz) {
    return [
        sx, 0,  0,  0,
        0, sy,  0,  0,
        0,  0, sz,  0,
        0,  0,  0,  1
    ];
};

exports.matrixMultiply = function(a, b) {
    let a00 = a[0*4+0];
    let a01 = a[0*4+1];
    let a02 = a[0*4+2];
    let a03 = a[0*4+3];
    let a10 = a[1*4+0];
    let a11 = a[1*4+1];
    let a12 = a[1*4+2];
    let a13 = a[1*4+3];
    let a20 = a[2*4+0];
    let a21 = a[2*4+1];
    let a22 = a[2*4+2];
    let a23 = a[2*4+3];
    let a30 = a[3*4+0];
    let a31 = a[3*4+1];
    let a32 = a[3*4+2];
    let a33 = a[3*4+3];
    let b00 = b[0*4+0];
    let b01 = b[0*4+1];
    let b02 = b[0*4+2];
    let b03 = b[0*4+3];
    let b10 = b[1*4+0];
    let b11 = b[1*4+1];
    let b12 = b[1*4+2];
    let b13 = b[1*4+3];
    let b20 = b[2*4+0];
    let b21 = b[2*4+1];
    let b22 = b[2*4+2];
    let b23 = b[2*4+3];
    let b30 = b[3*4+0];
    let b31 = b[3*4+1];
    let b32 = b[3*4+2];
    let b33 = b[3*4+3];
    return [a00 * b00 + a01 * b10 + a02 * b20 + a03 * b30,
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
        a30 * b03 + a31 * b13 + a32 * b23 + a33 * b33];
};