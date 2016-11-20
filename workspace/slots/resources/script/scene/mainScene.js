var GameObject = require('gameObject').GameObject;

var scoreLabel = GameObject.find('scoreLabel');
var winLabel = GameObject.find('winLabel');
var slots = GameObject.findAll('slotsColumn');
var betPlusLabel = GameObject.find('betPlusLabel');
var betMinusLabel = GameObject.find('betMinusLabel');
var betLabel = GameObject.find('betLabel');
var jackPotLabel = GameObject.find('jackPotLabel');
var particles = require('particleSystem').ParticleSystem.find('coins');


var Queue = require('queue').Queue;
var Sound = require('sound').Sound;
var TweenMovie = require('tweenMovie').TweenMovie;
var Tween = require('tween').Tween;

var canSpin = true;
var totalMoney = +(localStorage.totalMoney) || 100;
var bet = 10;
var jackPot = +(localStorage.jackPot) || 1500;
var god = location && location.search.indexOf('god')>-1;

var spin = function(){
    if (!canSpin) return;
    if (!totalMoney) return;
    canSpin = false;

    var hackedVal;
    if (god && ~~(Math.random()*10)>3) hackedVal =  hackedVal = ~~(Math.random()*10) + 12;

    localStorage.totalMoney = (totalMoney - bet);
    Sound.play('spinPull');
    var q = new Queue();
    q.onResolved = function(){
        canSpin = true;
        var val = [
            slots[0].val(),slots[1].val(),slots[2].val()
        ];
        resolveSpinResult(val);
    };
    slots.forEach(function(s){
        s.spin(function(){
            q.resolveTask();
        },hackedVal);
        q.addTask();
    });
};


var blinkWin = function(win){
    particles.emit(100,100);
    Sound.play('powerUp');
    winLabel.pos = {x:140,y:100};
    winLabel.setText(win.txt);
    winLabel.alpha = 0;
    new TweenMovie().
        tween(0,winLabel,{to:{alpha:1}},800).
        tween(0,winLabel.scale,{to:{x:2,y:2}},1500,'easeOutBounce').
        tween(1500,winLabel.scale,{to:{x:1,y:1}},500,'easeOutBounce').
        tween(1700,winLabel.pos,{to:{x:20,y:20}},100).
        tween(1700,winLabel,{to:{alpha:0}},100).
        finish(function(){
            winLabel.setText('');
            var totalMoneyOld = totalMoney;
            totalMoney+=win.val;
            localStorage.totalMoney = totalMoney;
            progressLabelVal(scoreLabel,totalMoneyOld,totalMoney);
        }).
        play();
};

var progressLabelVal = function(label,vfrom,vto){
    var obj = {i:vfrom};
    var t = new Tween(obj,{to:{i:vto}},2000);
    t.progress(function(obj){
        label.setText(~~obj.i);
    });
    new TweenMovie().
        tween(0,t).
        play();
};

var calcResult = function(numOfWinSlot,val) {
    var coef;
    if (val==5) coef = 3;
    else if (val===0) coef = 2;
    else coef = 1;
    return {
        txt:bet+'*'+coef*numOfWinSlot,
        val:coef * numOfWinSlot * bet
    };
};

var resolveSpinResult = function(val){
    if (val[0]==val[1] && val[1]==val[2] && val[0]===0) {
        var win = {txt:'JackPot!!!!111',val:jackPot};
        jackPot = 1500;
        jackPotLabel.setText(jackPot);
        blinkWin(win);
        slots[0].blink();
        slots[1].blink();
        slots[2].blink();
    }
    else if (val[0]==val[1] && val[1]==val[2]) {
        win = calcResult(3,val[0]);
        blinkWin(win);
        slots[0].blink();
        slots[1].blink();
        slots[2].blink();
    }
    else if (val[0]==val[1]) {
        win = calcResult(2,val[0]);
        blinkWin(win);
        slots[0].blink();
        slots[1].blink();
    }
    else if (val[1]==val[2]) {
        win = calcResult(2,val[1]);
        blinkWin(win);
        slots[1].blink();
        slots[2].blink();
    }
    else {
        var oldTotal = totalMoney;
        var oldJackPot = jackPot;
        totalMoney-=bet;
        if (totalMoney<0) totalMoney = 0;
        scoreLabel.setText(totalMoney);
        progressLabelVal(scoreLabel,oldTotal,totalMoney);
        localStorage.totalMoney = totalMoney;
        jackPot+=bet;
        progressLabelVal(jackPotLabel,oldJackPot,jackPot);
        localStorage.jackPot = jackPot;
        
    }
};

self.on('click',function(e){
    if (e.target) return;
    if (bet===0 || totalMoney===0) return;
    if (bet>totalMoney) {
        bet = totalMoney;
        betLabel.setText(bet);
        return;
    }
    spin();
});

betPlusLabel.on('click',function(e){
    bet+=1;
    if (bet>totalMoney) bet = totalMoney;
    betLabel.setText(bet);
});

betMinusLabel.on('click',function(e){
    bet-=1;
    if (bet<1) bet = 1;
    betLabel.setText(bet);
});

betLabel.on('click',function(){
    bet+=50;
    if (bet>totalMoney) bet = totalMoney;
    betLabel.setText(bet);
});


scoreLabel.setText(totalMoney);
betLabel.setText(bet);
jackPotLabel.setText(jackPot);







