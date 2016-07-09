ve.models.Behaviour.extend({

    onCreate: function(){
        this.velY = 0;
        this.gravity = 2;
    },

    onUpdate: function(time) {
        this.velY +=this.gravity;
        this.posY =this.posY + this.velY;
        if (this.posY>250) {
            this.posY = 250;
            this.velY=-this.velY*0.99;
        }    
    },

    onDestroy: function(){

    }

});
