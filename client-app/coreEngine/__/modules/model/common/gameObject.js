
const BaseModel = require('baseModel');

const GameObject = BaseModel.extend({
    protoId: null,
    type: 'gameObject',
    layerId: null,
    pos: null
});

module.exports = GameObject;