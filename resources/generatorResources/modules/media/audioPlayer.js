
exports.AudioPlayer = function(context){

    var free = true;
    var currLoop = false;
    var self = this;
    var currSource = null;
    var isUsedHtmlAudio = false;

    (function(){

        if (!context) {
            context = (window.Audio && new window.Audio());
            isUsedHtmlAudio = true;
        }

    })();

    this.play = function(buffer,loop){
        free = false;
        if (!context) return;

        currLoop = loop;

        if (isUsedHtmlAudio) {
            console.log('used html audio',buffer);
            context.src = buffer;
            context.play();
        } else {
            currSource = context.createBufferSource();
            currSource.buffer = buffer;
            currSource.loop = loop;
            currSource.connect(context.destination);
            currSource.start(0);
            currSource.onended = function(){
                self.stop();
            }
        }

    };

    this.stop = function() {
        if (!context) return;
        if (currSource)  {
            currSource.stop();
            currSource.disconnect(context.destination);
        }
        currSource = null;
        free = true;
        currLoop = false;
    };

    this.isFree = function() {
        return free;
    }

};