
var ps;
var bundle = require('bundle').instance(); 

function onCreate(){
    ps = bundle.particleSystemList.get(0);
}

function onUpdate(time) {
    if (self.posX>800) {
        console.log('before',self.posX);
        self.posX = -300;
        console.log('after',self.posX);
    }
    ps.emit(self.posX+20,self.posY+50);
    if (self.posX>800) self.posX = -300;
}

function onDestroy(){

}


