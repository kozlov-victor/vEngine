
const BaseModel = require('baseModel');

const CommonBehaviour = BaseModel.extend({
    type:'commonBehaviour',
    name:'',
    description:'',
    parameters:null,
    construct: function(){
        if (!this.parameters) this.parameters = [];
    }
});

module.exports = CommonBehaviour;