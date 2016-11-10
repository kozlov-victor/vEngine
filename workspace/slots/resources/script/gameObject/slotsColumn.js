
var Sound = require('sound').Sound;
var TweenChain = require('tweenChain').TweenChain;

var lastN = 0;

var tChain = new TweenChain().
    tween(self.scale,{to:{x:3,y:3}},500,'easeOutBounce').
    wait(300).
    tween(self.scale,{to:{x:1,y:1}},500,'easeOutBounce');

self.spin = function(callBack,hackedVal){
    var n = ~~((Math.random())*10)+5;
    n+=lastN;
    if (hackedVal!=undefined) n = hackedVal;
    var time = 1000+~~(Math.random()*5000);
    new TweenChain().
            tween(
                self,
                {
                    from:    {_sprPosY:lastN*51.2},
                    to:      {_sprPosY:n*51.2}
                },
                time, 'easeOutBounce'
            ).
            finish(function(){
                    lastN = n;
                    lastN%=10;
                    callBack();
                    Sound.play('spinSnd');
            }).
            play();
};

self.blink = function(){
    tChain.reset().play();
};

self.val = function(){
    return lastN;
};
