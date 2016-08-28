

function onCreate(){
    self.velX = Math.random()*150;
}

function onUpdate(time) {
    if (self.posX>800) {
        self.posX = -300;
        self.posY = Math.random()*300;
        self.velX = Math.random()*150;
    }    
}

function onDestroy(){

}
