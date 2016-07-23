ve.models.Behaviour.extend({

    onCreate: function(){
        console.log('created');
        var textField = this.findGameObject('textField1');
        var bird = this.findGameObject('b');
        textField.setText('Привет (нажми на меня)');
        bird.on('click',function(){
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
