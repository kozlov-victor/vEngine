
var GameObject = require('gameObject');
var ParticleSystem = require('particleSystem');

var bg = GameObject.find('bg');
bg.tileRepeat = true;
var ps = ParticleSystem.find('ps');

var emit = false;

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
        .tween(300,chewBacca,{from:{alpa:0},to:{alpha:1}},5000)
        .play();
    }, 12000);
    setTimeout(function() {
        emit = true;
    }, 14000);
    setTimeout(function() {
        emit = false;
    }, 20000);
};

exports.onUpdate = function(time) {
    bg.tileOffset.x++;
    if (emit && Math.random()<0.1) ps.emit(Math.random()*200,Math.random()*200);
};