
var AudioNode = require('audioNode').AudioNode;

exports.AudioNodeSet = function(Context,numOfNodes){
    var nodes = [];
    for (var i = 0;i<numOfNodes;i++) {
        nodes.push(new AudioNode(new Context()));
    }

    this.getFreeNode = function(){
        for (var i = 0;i<numOfNodes;i++) {
            if (nodes[i].isFree()) return nodes[i];
        }
        return null;
    };

    this.stopAll = function(){
        for (var i = 0;i<numOfNodes;i++) {
            nodes[i].stop();
        }
    };

    this.getNodeBySound = function(sound){
        for (var i = 0;i<numOfNodes;i++) {
            if (nodes[i].getCurrSound()==sound) return nodes[i];
        }
        return null;
    }

};