ve.models.Behaviour.extend({


    onCreate: function () {
        var self = this;
        self.on('click',function(){
            console.log('click robot');
        });
        self.on('collide',function(obj){
            obj.kill();
        });
    },

    onUpdate: function (time) {
        

        
    },

    onDestroy: function () {

    }
});



