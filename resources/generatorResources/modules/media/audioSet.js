
var AudioPlayer = require('audioPlayer').AudioPlayer;

exports.AudioSet = function(Context,numOfPlayers){
    var players = [];
    for (var i = 0;i<numOfPlayers;i++) {
        players.push(new AudioPlayer(new Context()));
    }

    this.getFreePlayer = function(){
        for (var i = 0;i<numOfPlayers;i++) {
            if (players[i].isFree()) return players[i];
        }
        return null;
    }

};