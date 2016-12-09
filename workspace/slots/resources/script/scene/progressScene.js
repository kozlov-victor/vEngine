
var GameObject = require('gameObject');

var progressLabel = GameObject.find('progress');

exports.onProgress = function(pr){
    var txt = ~~(pr*100);
    if (txt==100) {
        progressLabel.setText('processing...');
    } else {
        progressLabel.setText(txt + '%');
    }
};

exports.onShow = function(){

};

exports.onUpdate = function(time) {

};