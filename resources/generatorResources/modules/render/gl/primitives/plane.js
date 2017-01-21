
var AbstractPrimitive = require('abstractPrimitive');

var Plane = AbstractPrimitive.extend({
    construct: function(){
        this.vertexArr = [
            0, 0,
            0, 1,
            1, 0,
            1, 1
        ];
        this.indexArr = [0,1,2,3];
        this.texCoordArr = [
            0, 0,
            0, 1,
            1, 0,
            1, 1
        ];
    }
});

module.exports = Plane;