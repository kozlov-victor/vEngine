
var Sound = require('sound').Sound;

var lastN = 0;

self.spin = function(callBack){
    var n = ~~((Math.random())*10)+5;
    n+=lastN;
    var time = 1000+~~(Math.random()*5000);
    self.
        chain().
        then(function(){
           return self.tween(self,'_sprPosY',lastN*51.2,n*51.2,time,'easeOutBounce'); 
        }).
        then(function(){
            lastN = n;
            lastN%=10;
            callBack();
            Sound.play('spinSnd');
        });
};

self.blink = function(){
    self.
        chain().
        then(function(){
            return self.tween(self.scale,'x',1,2,500,'easeOutBounce');
        }).
        then(function(){
            return self.tween(self.scale,'x',2,1,500,'easeOutBounce');
        });
        
    self.
        chain().
        then(function(){
           return self.tween(self.scale,'y',1,2,500,'easeOutBounce'); 
        }).
        then(function(){
            self.tween(self.scale,'y',2,1,500,'easeOutBounce');
        });
}

self.val = function(){
    return lastN;
};
