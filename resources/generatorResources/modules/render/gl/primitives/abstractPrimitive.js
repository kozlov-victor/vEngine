
var BaseModel = require('baseModel');

var AbstractPrimitive = BaseModel.extend({
    vertexArr:null,
    indexArr:null,
    texCoordArr:null,
    normalArr:null
});

module.exports = AbstractPrimitive;