
exports.AudioPlayer = function(context){

    var currLoop = false;

    this.setGain = function(){

    };

    this.play = function(buffer,loop){
        currLoop = loop;
        context.play(buffer,loop);
    };

    this.stop = function() {
        context.stop();
        currLoop = false;
    };

    this.isFree = function() {
        return context.free;
    }

};


