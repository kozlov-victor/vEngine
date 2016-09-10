
var psBurn = require('bundle').instance().particleSystemList.find({name:'rain'});

function onCreate() {

}

function onUpdate(time) {
    var rnd = Math.random()*100;
    //if (rnd<50) psBurn.emit(200,200);
}

function onDestroy() {

}