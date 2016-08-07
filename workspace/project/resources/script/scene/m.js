ve.models.Behaviour.extend({

    ps:null,

    onCreate: function(){
        console.trace('scene created',this);
        var self = this;
        var textField = this.findGameObject('textField1');
        var bird = this.findGameObject('b');
        textField.setText('Привет (нажми на меня)');
        bird.on('click',function(e){
            textField.setText('Ура!!!!!');
            bird.velX = 200;
            ve.sound.play('boom');
            self.ps.emit(e.screenX,e.screenY);
        });
    },

    onUpdate: function(time) {
       
    },

    onDestroy: function(){

    }

});
