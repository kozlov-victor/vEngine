
var game = require('game').instance();
var Sound = require('sound').Sound;
var GameObject = require('gameObject').GameObject;

var txtMoney = GameObject.find('txtMoney');

var introSnd = Sound.find('intro');

introSnd.play();

self.on('click',function(){
    introSnd.setGain(0.05,3000);
    game.setSceneByName('mainScene');
});

exports.onShow = function(){
    introSnd.setGain(1,1000);    
    txtMoney.setText(localStorage.totalMoney||0);
};

exports.onUpdate = function(time) {

};