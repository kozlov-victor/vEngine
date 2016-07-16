ve.models.Behaviour.extend({

    onCreate: function(){
        this.getFrAnimation('fly').play();
    },

    onUpdate: function(time) {
        if (this.posX>400) this.posX = -300;
    },

    onDestroy: function(){

    }

});
