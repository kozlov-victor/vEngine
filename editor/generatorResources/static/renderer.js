
var CanvasRenderer = function(){

    var ctx;
    var scene;
    var self = this;
    var reqAnimFrame = window.requestAnimationFrame||window.webkitRequestAnimationFrame||function(f){setTimeout(f,17)};

    this.init = function(){
        var canvas = document.querySelector('canvas');
        if (!canvas) {
            canvas = document.createElement('canvas');
            canvas.width = DataSource.gameProps.width;
            canvas.height = DataSource.gameProps.height;
            document.body.appendChild(canvas);
        }
        ctx = canvas.getContext('2d');
    };

    var drawObject = function(gameObj){

    };
    var drawScene = function(){
        reqAnimFrame(drawScene);
        if (!scene) return;
        scene._gameObjects.rs.forEach(function(obj){
            drawObject(obj);
        });
    };
    this.setScene = function(_scene){
        scene = _scene;
    };

    drawScene();

};

var renderer = new CanvasRenderer();