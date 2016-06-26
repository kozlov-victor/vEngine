ve.models.Behaviour.extend({


    onCreate: function () {
        var self = this;
        self.on('click',function(){
            console.log('click robot');
        });
    },

    onUpdate: function (time) {
        

        
    },

    onDestroy: function () {

    }
});



