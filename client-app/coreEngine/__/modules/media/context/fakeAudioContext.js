
const Class = require('class');

const FakeAudioContext = Class.extend(
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
        pause: function(){

        },
        resume: function(){

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


module.exports = FakeAudioContext;