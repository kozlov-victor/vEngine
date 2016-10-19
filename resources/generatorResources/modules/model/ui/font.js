
var Resource = require('resource').Resource;

exports.Font = Resource.extend({
    type:'font',
    fontColor:'black',
    fontSize:12,
    fontFamily:'Monospace',
    fontContext:null
});