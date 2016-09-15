
function onCreate() {
    self.on('click',function(e){
        console.log(e);
    })
}

function onUpdate(time) {
    self.angle+=0.01;
}

function onDestroy() {

}