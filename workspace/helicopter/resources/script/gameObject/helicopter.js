
var psBurn = require('bundle').instance().particleSystemList.find({name:'burn'});
var psFire = require('bundle').instance().particleSystemList.find({name:'fire'});
var sceneManager = require('sceneManager').instance();
var soundManager = require('soundManager').instance();
var injuredAnim = self.getFrAnimation('injured');
var math = require('math');
var health = 100;

function onCreate() {
    soundManager.play('engine',true);
    self.velX = 200;
    self.getFrAnimation('fly').play();
    self.on('click',function(e){
        psFire.emit(e.screenX,e.screenY);
        health-=10;
        if (health<5) injuredAnim.play();
        if (health && health<5) self.velY = 50;
        if (health<0) health = 0;
    });
    
}

function onUpdate(time) {
    var n = math.getRandomInRange(0,health);
    if (!health && n<=1) {
        psFire.emit(self.posX+20,self.posY+20);
        soundManager.play('cracked',true);
    }    
    if (n==0) psBurn.emit(self.posX+20,self.posY+20);
    if (self.posX>600) self.posX = -300;
    if (self.posY>300)  sceneManager.setSceneByName('win');
    
}

function onDestroy() {

}