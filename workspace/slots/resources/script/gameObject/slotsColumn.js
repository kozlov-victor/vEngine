
var Sound = require('sound');
var TweenChain = require('tweenChain');

var spinSnd = Sound.find('spinSnd');

var lastN = 0;

var tChain = new TweenChain().
    tween(self.scale,{to:{x:3,y:3}},500,'easeOutBounce').
    wait(300).
    tween(self.scale,{to:{x:1,y:1}},500,'easeOutBounce');

self.tileRepeat = true;

self.spin = function(callBack,hackedVal){
    var n = ~~((Math.random())*10)+5;
    n+=lastN;
    if (hackedVal!==undefined) n = hackedVal;
    var time = 1000+~~(Math.random()*5000);
    new TweenChain().
            tween(
                0,
                self.tileOffset,
                {
                    from:    {y:lastN*51.2},
                    to:      {y:n*51.2}
                },
                time, 'easeOutBounce'
            ).
            finish(function(){
                    lastN = n;
                    lastN%=10;
                    callBack();
                    spinSnd.play();
            }).
            play();
};

self.blink = function(){
    tChain.reset().play();
};

self.val = function(){
    return lastN;
};


self.onUpdate = function(){
   
}


