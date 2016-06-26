ve.models.Behaviour.extend({

    onCreate: function(){
        this.onClick = function(){
            console.log('click');
        }
    },

    onUpdate: function(time) {

    },

    onDestroy: function(){

    }

});
