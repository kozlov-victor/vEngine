
const Resource = require('resource');

const Font = Resource.extend({
    type:'font',
    fontSize:12,
    fontColor: null,
    fontFamily:'Monospace',
    fontContext:null,
    construct: function(){
        if (!this.fontColor) this.fontColor = {r:0,g:0,b:0}
    }
});

module.exports = Font;