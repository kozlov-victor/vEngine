
var GameObject = require('gameObject').GameObject;

var progressLabel = GameObject.find('progress');

exports.onProgress = function(pr){
    var txt = ~~(pr*100)+' %';
    progressLabel.setText(txt);
};

exports.onShow = function(){

};

exports.onUpdate = function(time) {

};