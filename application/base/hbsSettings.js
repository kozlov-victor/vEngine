var Handlebars = require('handlebars');

module.exports.init = function(){
    Handlebars.registerHelper('json', function(obj) {
        return JSON.stringify(obj);
    });
    Handlebars.registerHelper('isEmptyObject', function(obj) {
        return Object.keys(obj).length>0;
    });
    Handlebars.registerHelper('var',function(name, value, context){
        this[name] = value;
    });
};