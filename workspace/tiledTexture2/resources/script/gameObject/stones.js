
var ctx = require('renderer').getContext();


self.tileRepeat = true;

exports.onShow = function(){

};

exports.onUpdate = function(time) {
    self.tileOffset.y+=1;
};