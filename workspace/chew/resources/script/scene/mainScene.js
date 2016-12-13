
var GameObject = require('gameObject');
var bg = GameObject.find('bg');
bg.tileRepeat = true;

var TweenMovie = require('tweenMovie');
var Tween = require('tween');

var tf = GameObject.find('tf');
var chewBacca = GameObject.find('chewBacca');
chewBacca.pos.y = -1000;

exports.onShow = function(){
    setTimeout(function() {
        tf.setText('holy shit!');
    }, 5000);
    setTimeout(function() {
        tf.setText('святая чубакка!!!');
    }, 10000);
    setTimeout(function() {
        new TweenMovie()
        .tween(0,chewBacca.pos,{to:{y:40}},2000)
        .tween(200,chewBacca.scale,{to:{x:2,y:2}},2000)
        .play();
    }, 12000);
};

exports.onUpdate = function(time) {
    bg.tileOffset.x++;
};