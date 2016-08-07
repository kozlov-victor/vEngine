ve.models.Behaviour.extend({

    ps:null,

    onCreate: function(){
        this.on('click',function(e){
            console.log(e);
        });
        this.ps = ve_local.bundle.particleSystemList.get(0);
    },

    onUpdate: function(time) {
        console.log('cloud updated');
        this.ps.emit(this.posX,this.posY);
        if (this.posX>800) this.posX = -300;
    },

    onDestroy: function(){

    }

});
