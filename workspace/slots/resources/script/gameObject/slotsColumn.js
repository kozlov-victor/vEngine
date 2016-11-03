
var lastN = 0;

self.spin = function(callBack){
    var n = ~~((Math.random())*10)+5;
    n+=lastN;
    var time = 1000+~~(Math.random()*5000);
    console.log('tween',lastN,n);
    self.tween(self,'_sprPosY',lastN*51.2,n*51.2,time,'easeOutBounce',function(){
        lastN = n;
        lastN%=10;
        callBack();
    });
};

self.blink = function(){
    self.tween(self.scale,'x',1,2,500,'easeOutBounce',function(){
        self.tween(self.scale,'x',2,1,500,'easeOutBounce');
    });
    self.tween(self.scale,'y',1,2,500,'easeOutBounce',function(){
        self.tween(self.scale,'y',2,1,500,'easeOutBounce');
    });
}

self.val = function(){
    return lastN;
};
