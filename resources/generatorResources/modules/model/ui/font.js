
var BaseModel = require('baseModel').BaseModel;

exports.Font = BaseModel.extend({
    type:'font',
    fontColor:'black',
    fontSize:12,
    fontFamily:'Monospace',
    resourcePath:'',
    fontContext:null
});