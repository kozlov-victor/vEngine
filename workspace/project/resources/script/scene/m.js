ve.models.Behaviour.extend({

   
    onCreate: function(){
        console.trace('scene created',this);
        var self = this;
        var textField = this.findGameObject('textField1');
        var bird = this.findGameObject('bird');
        bird.getFrAnimation('fly').play();
        textField.setText('Привет (нажми на меня)');
        bird.on('click',function(e){
            textField.setText('Ура!!!!!');
            bird.velX = 200;
            ve.sound.play('boom');
        });
    },

    onUpdate: function(time) {
       
    },

    onDestroy: function(){

    }

});
