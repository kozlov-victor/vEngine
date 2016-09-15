
var mat4 = require('mat4');

exports.MatrixStack = function () {
    var self = this;
    this.stack = [];

    this.restore = function () {
        this.stack.pop();
        // Never let the stack be totally empty
        if (this.stack.length < 1) {
            this.stack[0] = mat4.makeIdentity();
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
        var t = mat4.makeTranslation(x, y, z);
        var m = this.getCurrentMatrix();
        this.setCurrentMatrix(mat4.matrixMultiply(t, m));
    };

    this.rotateZ = function (angleInRadians) {
        var t = mat4.makeZRotation(angleInRadians);
        var m = this.getCurrentMatrix();
        this.setCurrentMatrix(mat4.matrixMultiply(t, m));
    };

    this.rotateY = function (angleInRadians) {
        var t = mat4.makeYRotation(angleInRadians);
        var m = this.getCurrentMatrix();
        this.setCurrentMatrix(mat4.matrixMultiply(t, m));
    };

    this.scale = function (x, y, z) {
        if (z === undefined) {
            z = 1;
        }
        var t = mat4.makeScale(x, y, z);
        var m = this.getCurrentMatrix();
        this.setCurrentMatrix(mat4.matrixMultiply(t, m));
    };

    (function () {
        self.restore();
    })();

};