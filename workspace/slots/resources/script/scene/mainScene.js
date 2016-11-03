
var scoreLabel = self.find('scoreLabel');
var winLabel = self.find('winLabel');
var slots = self.findAll('slotsColumn');

var Queue = require('utils').Queue;

var canSpeen = true;
var totalMoney = 500;


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


var blinkWin = function(val){
    winLabel.pos = {x:140,y:100};
    winLabel.setText('+'+val);
    winLabel.tween(winLabel.scale,'x',1,2,1500,'easeOutBounce',function(){
        winLabel.tween(winLabel.scale,'x',2,1,500,'easeOutBounce',function(){
            winLabel.moveTo(0,0,100,null,function(){
                winLabel.setText('');
                scoreLabel.setText(totalMoney);
            })
        });
    });
    winLabel.tween(winLabel.scale,'y',1,2,1500,'easeOutBounce',function(){
        winLabel.tween(winLabel.scale,'y',2,1,500,'easeOutBounce');
    });
}


var resolveSpinResult = function(val){
    if (val[0]==val[1] && val[1]==val[2]) {
        totalMoney+=300;
        blinkWin(300);
        slots[0].blink();
        slots[1].blink();
        slots[2].blink();
    }    
    else if (val[0]==val[1]) {
        totalMoney+=50;
        blinkWin(50);
        slots[0].blink();
        slots[1].blink();
    }
    else if (val[1]==val[2]) {
        totalMoney+=50;
        blinkWin(50);
        slots[1].blink();
        slots[2].blink();
    }
    else {
        totalMoney-=50;
        if (totalMoney<0) totalMoney = 0;
        scoreLabel.setText(totalMoney);
    }    
}

self.on('click',function(){
    spin();
});


scoreLabel.setText(0);
blinkWin(totalMoney);


