
var Resource = require('resource');

var Font = Resource.extend({
    type:'font',
    fontSize:12,
    fontColor: null,
    fontFamily:'Monospace',
    fontContext:null,
    construct: function(){
        this.fontColor = [0,0,0]
    }
});

module.exports = Font;