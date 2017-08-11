
const AudioNode = require('audioNode');

const AudioNodeSet = function(Context,numOfNodes){
    let nodes = [];
    for (let i = 0;i<numOfNodes;i++) {
        nodes.push(new AudioNode(new Context()));
    }

    this.getFreeNode = function(){
        for (let i = 0;i<numOfNodes;i++) {
            if (nodes[i].isFree()) return nodes[i];
        }
        return null;
    };

    this.stopAll = function(){
        for (let i = 0;i<numOfNodes;i++) {
            nodes[i].stop();
        }
    };

    this.pauseAll = function(){
        for (let i = 0;i<numOfNodes;i++) {
            nodes[i].pause();
        }
    };

    this.resumeAll = function(){
        for (let i = 0;i<numOfNodes;i++) {
            nodes[i].resume();
        }
    };



    this.getNodeBySound = function(sound){
        for (let i = 0;i<numOfNodes;i++) {
            if (nodes[i].getCurrSound()==sound) return nodes[i];
        }
        return null;
    }

};

module.exports = AudioNodeSet;