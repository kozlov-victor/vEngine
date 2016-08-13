
(function(){

    ve_local.sound = {};

    var ns = ve_local.sound;

    var AudioContext = window.AudioContext || window.webkitAudioContext;

    var context = new AudioContext();

    var base64ToArrayBuffer = function(base64) {
        var binaryString = window.atob(base64);
        var len = binaryString.length;
        var bytes = new Uint8Array(len);
        for (var i = 0; i < len; i++) {
            bytes[i] = binaryString.charCodeAt(i);
        }
        return bytes.buffer;
    };

    var _loadSoundXhr = function(url,callback){
        var request = new XMLHttpRequest();
        request.open('GET', url, true);
        request.responseType = 'arraybuffer';

        request.setRequestHeader('Accept-Ranges', 'bytes');
        request.setRequestHeader('Content-Range', 'bytes');

        request.onload = function() {
            context.decodeAudioData(request.response).then(function(buffer) {
                callback(buffer);
            });
        };
        request.send();
    };

    var _loadSoundBase64 = function(url,callback){
        console.log('loading sound',url);
        window.s = url;
        var byteArray = base64ToArrayBuffer(url);
        context.decodeAudioData(byteArray).then(function(buffer) {
            callback(buffer);
        });
    };

    ns.loadSound = function( url, opts, callback) {
        if (opts.type=='base64') {
            _loadSoundBase64(url, callback);
        } else {
            _loadSoundXhr(url, callback);
        }
    };


    var AudioPlayer = function(){

        var free = true;
        var currLoop = false;
        var self = this;
        var currSource = null;

        this.play = function(buffer,loop){
            free = false;
            currSource = context.createBufferSource();
            currSource.buffer = buffer;
            currLoop = loop;
            currSource.loop = loop;
            currSource.connect(context.destination);
            currSource.start(0);
            currSource.onended = function(){
                self.stop();
            }
        };

        this.stop = function() {
            if (currSource)  {
                currSource.stop();
                currSource.disconnect(context.destination);
            }
            currSource = null;
            free = true;
            currLoop = false;
        };

        this.isFree = function() {
            console.log('isfree',free);
            return free;
        }

    };


    var AudioSet = function(numOfPlayers){
        var players = [];
        for (var i = 0;i<numOfPlayers;i++) {
            players.push(new AudioPlayer());
        }

        this.getFreePlayer = function(){
            for (var i = 0;i<numOfPlayers;i++) {
                if (players[i].isFree()) return players[i];
            }
            return null;
        }

    };

    var audioSet = new AudioSet(5);

    ve.sound = {};

    ve.sound.play = function(sndName,loop){
        var player = audioSet.getFreePlayer();
        if (!player) return;
        player.play(ve_local.bundle.soundList.find({name:sndName})._buffer,loop);
    }


})();