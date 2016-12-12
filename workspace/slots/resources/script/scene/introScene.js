
var game = require('game');
var Sound = require('sound');
var GameObject = require('gameObject');

var txtMoney = GameObject.find('txtMoney');
var coin = GameObject.find('coin');

var introSnd = Sound.find('intro');


introSnd.play();

self.on('click',function(){
    introSnd.setGain(0.05,3000);
    game.setSceneByName('mainScene');
});

exports.onShow = function(){
    introSnd.setGain(1,1000);    
    txtMoney.setText(localStorage.totalMoney||0);
    coin.blockRotation();
};

exports.onUpdate = function(time) {

};