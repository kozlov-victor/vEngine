
function onCreate(){
    console.trace('scene created',self);
    var textField = self.findGameObject('textField1');
    var bird = self.findGameObject('bird');
    bird.getFrAnimation('fly').play();
    textField.setText('Привет (нажми на меня)');
    bird.on('click',function(e){
        textField.setText('Ура!!!!!');
        bird.velX = 200;
        ve.sound.play('boom');
    });
}

function onUpdate(time) {
   
}

function onDestroy(){

}