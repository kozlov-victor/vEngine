
var Resource = require('resource');

var Font = Resource.extend({
    type:'font',
    fontColor:'black',
    fontSize:12,
    fontFamily:'Monospace',
    fontContext:null
});

module.exports = Font;