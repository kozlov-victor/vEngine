
var scoreLabel = self.find('scoreLabel');
var winLabel = self.find('winLabel');
var slots = self.findAll('slotsColumn');
var betPlusLabel = self.find('betPlusLabel');
var betMinusLabel = self.find('betMinusLabel');
var betLabel = self.find('betLabel');

var Queue = require('queue').Queue;

var canSpeen = true;
var totalMoney;//localStorage.totalMoney;
if (totalMoney===undefined) totalMoney = 100;
var bet = 10;


var spin = function(){
    if (!canSpeen) return;
    if (!totalMoney) return;
    canSpeen = false;
    var q = new Queue();
    q.onResolved = function(){
        canSpeen = true;
        var val = [
            slots[0].val(),slots[1].val(),slots[2].val()
        ];
        resolveSpinResult(val);
    };
    slots.forEach(function(s){
        s.spin(function(){
            q.resolveTask();
        });
        q.addTask();
    });
};


var blinkWin = function(win){
    winLabel.pos = {x:140,y:100};
    winLabel.setText(win.txt);
    winLabel.
        chain().
        then(function(){
            return winLabel.tween(winLabel.scale,'x',1,2,1500,'easeOutBounce');
        }).
        then(function(){
            return winLabel.tween(winLabel.scale,'x',2,1,500,'easeOutBounce');
        }).
        then(function(){
            return winLabel.moveTo(0,0,100,null);
        }).
        then(function(){
            winLabel.setText('');
            totalMoney+=win.val;
            localStorage.totalMoney = totalMoney;
            scoreLabel.setText(totalMoney);
        });

    winLabel.
        chain().
        then(function(){
           return winLabel.tween(winLabel.scale,'y',1,2,1500,'easeOutBounce');
        }).
        then(function(){
            winLabel.tween(winLabel.scale,'y',2,1,500,'easeOutBounce');
        });
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
    if (slots[1]==slots[2] && slots[2]==slots[3]) {
        var win = calcResult(3,val[0]);
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
        totalMoney-=bet;
        if (totalMoney<0) totalMoney = 0;
        scoreLabel.setText(totalMoney);
        localStorage.totalMoney = totalMoney;
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



