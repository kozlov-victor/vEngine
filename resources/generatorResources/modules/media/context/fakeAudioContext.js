
exports.FakeAudioContext = require('class').Class.extend(
    {
        type:'fakeAudioContext',
        free:true,
        play: function(buffer,loop){

        },
        stop: function(){

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