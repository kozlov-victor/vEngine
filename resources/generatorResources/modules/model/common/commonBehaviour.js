
var BaseModel = require('baseModel');

var CommonBehaviour = BaseModel.extend({
    type:'commonBehaviour',
    name:'',
    description:'',
    parameters:null,
    construct: function(){
        if (!this.parameters) this.parameters = [];
    }
});

module.exports = CommonBehaviour;