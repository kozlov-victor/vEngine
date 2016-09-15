
var AudioPlayer = require('audioPlayer').AudioPlayer;

exports.AudioSet = function(context,numOfPlayers){
    var players = [];
    for (var i = 0;i<numOfPlayers;i++) {
        players.push(new AudioPlayer(context));
    }

    this.getFreePlayer = function(){
        for (var i = 0;i<numOfPlayers;i++) {
            if (players[i].isFree()) return players[i];
        }
        return null;
    }

};