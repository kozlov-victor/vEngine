
var AbstractPrimitive = require('abstractPrimitive');

var prepareBuffers = function(radius){
    var latitudeBands = 30;
    var longitudeBands = 30;

    var vertexArr = [];
    var normalArr = [];
    var texCoordArr = [];
    for (var latNumber=0; latNumber <= latitudeBands; latNumber++) {
        var theta = latNumber * Math.PI / latitudeBands;
        var sinTheta = Math.sin(theta);
        var cosTheta = Math.cos(theta);

        for (var longNumber=0; longNumber <= longitudeBands; longNumber++) {
            var phi = longNumber * 2 * Math.PI / longitudeBands;
            var sinPhi = Math.sin(phi);
            var cosPhi = Math.cos(phi);

            var x = cosPhi * sinTheta;
            var y = cosTheta;
            var z = sinPhi * sinTheta;
            var u = 1 - (longNumber / longitudeBands);
            var v = 1 - (latNumber / latitudeBands);

            normalArr.push(x);
            normalArr.push(y);
            normalArr.push(z);
            texCoordArr.push(u);
            texCoordArr.push(v);
            vertexArr.push(radius * x);
            vertexArr.push(radius * y);
            vertexArr.push(radius * z);
        }
    }

    var indexArr = [];
    for (latNumber=0; latNumber < latitudeBands; latNumber++) {
        for (longNumber=0; longNumber < longitudeBands; longNumber++) {
            var first = (latNumber * (longitudeBands + 1)) + longNumber;
            var second = first + longitudeBands + 1;
            indexArr.push(first);
            indexArr.push(second);
            indexArr.push(first + 1);

            indexArr.push(second);
            indexArr.push(second + 1);
            indexArr.push(first + 1);
        }
    }

    return {
        vertexArr:vertexArr,
        normalArr: normalArr,
        texCoordArr: texCoordArr,
        indexArr: indexArr
    }

};

var Sphere = AbstractPrimitive.extend({
    radius:10,
    construct: function(){
        var bufferArrs = prepareBuffers(this.radius);
        this.vertexArr = bufferArrs.vertexArr;
        this.normalArr = bufferArrs.normalArr;
        this.texCoordArr = bufferArrs.texCoordArr;
        this.indexArr = bufferArrs.indexArr;
    }
});

module.exports = Sphere;






