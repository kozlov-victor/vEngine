
var CanvasRenderer = function(){

    var ctx;

    this.init = function(){
        var canvas = document.querySelector('canvas');
        if (!canvas) throw 'no canvas specified';
        ctx = canvas.getContext('2d');
    };

    this.drawImage = function(gameObj){

    };

};