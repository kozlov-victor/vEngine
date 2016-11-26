
exports.FakeAudioContext = require('class').Class.extend(
    {
        type:'fakeAudioContext',
        play: function(buffer,loop){

        },
        stop: function(){

        },
        isFree: function(){
            return false;
        },
        setGain: function(val){

        },
        construct: function(){
            console.log('audio not supported');
        }
    },
    {
        isAcceptable: function(){
            return true;
        },
        loadXhr: function(url,progress,callBack){
            callBack(url);
        },
        loadBase64: function(url,callBack){
            callBack(url);
        }
    }
);