
const AbstractPrimitive = require('abstractPrimitive');

const prepareBuffers = function(radius,bands){
    let latitudeBands = bands;
    let longitudeBands = bands;

    let vertexArr = [];
    let normalArr = [];
    let texCoordArr = [];
    for (let latNumber=0; latNumber <= latitudeBands; latNumber++) {
        let theta = latNumber * Math.PI / latitudeBands;
        let sinTheta = Math.sin(theta);
        let cosTheta = Math.cos(theta);

        for (let longNumber=0; longNumber <= longitudeBands; longNumber++) {
            let phi = longNumber * 2 * Math.PI / longitudeBands;
            let sinPhi = Math.sin(phi);
            let cosPhi = Math.cos(phi);

            let x = cosPhi * sinTheta;
            let y = cosTheta;
            let z = sinPhi * sinTheta;
            let u = 1 - (longNumber / longitudeBands);
            let v = 1 - (latNumber / latitudeBands);

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

    let indexArr = [];
    for (latNumber=0; latNumber < latitudeBands; latNumber++) {
        for (longNumber=0; longNumber < longitudeBands; longNumber++) {
            let first = (latNumber * (longitudeBands + 1)) + longNumber;
            let second = first + longitudeBands + 1;
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

const Sphere = AbstractPrimitive.extend({
    radius:10,
    bands:30,
    construct: function(){
        let bufferArrs = prepareBuffers(this.radius,this.bands);
        this.vertexArr = bufferArrs.vertexArr;
        this.normalArr = bufferArrs.normalArr;
        this.texCoordArr = bufferArrs.texCoordArr;
        this.indexArr = bufferArrs.indexArr;
    }
});

module.exports = Sphere;






