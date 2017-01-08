
var BaseModel = require('baseModel');

var CommonBehaviour = BaseModel.extend({
    type:'commonBehaviour',
    name:'',
    description:'',
    parameters:null,
    construct: function(){
        this.parameters = [];
    }
});

module.exports = CommonBehaviour;