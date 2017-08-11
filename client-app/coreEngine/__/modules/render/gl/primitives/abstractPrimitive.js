
const BaseModel = require('baseModel');

const AbstractPrimitive = BaseModel.extend({
    vertexArr:null,
    indexArr:null,
    texCoordArr:null,
    normalArr:null
});

module.exports = AbstractPrimitive;