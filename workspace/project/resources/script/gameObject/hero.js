ve.models.Behaviour.extend({

    onCreate: function(){
        var self = this;
        setInterval(function(){
            var dirNumber = ~~(Math.random()*4);
            var dir = 'Left';
            switch (dirNumber) {
                case 0:
                    dir = 'Right';
                    break;
                case 1:
                    dir = 'Up';
                    break;
                case 2:
                    dir = 'Down';
                    break;

                default:
                    break;
            }
            self.go(dir);
        },1000);

    },

    onUpdate: function(time) {
        var self = this;

    },

    onDestroy: function(){

    }

});
