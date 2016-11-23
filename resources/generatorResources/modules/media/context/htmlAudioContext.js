
exports.WebAudioContext = require('class').Class.extend(
    {
        loadXhr: function(url,progress,callBack){
            utils.loadBinary(url,progress,callBack);
        },
        loadBase64: function(url,callBack){

        },
        play: function(buffer,loop){

        },
        stop: function(){

        }
    },
    {
        isAcceptable: function(){
            return !!(window && window.Audio);
        }
    }
);
