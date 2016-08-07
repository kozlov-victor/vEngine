ve.models.Behaviour.extend({


    onCreate: function(){
        //this.velX = Math.random()*50+20;
        this.on('click',function(e){
            console.log(e);
        });
    },

    onUpdate: function(time) {
        if (this.posX>800) this.posX = -300;
    },

    onDestroy: function(){

    }

});
