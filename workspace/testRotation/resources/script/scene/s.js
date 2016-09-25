
var tf;
var fps = 0;

function onCreate() {
    tf = self.find('textField1');
    console.log(tf);
    setInterval(function(){
        tf.setText('fps:'+fps);
        fps = 0;
    },1000);
    
}

function onUpdate(time) {
    fps++;
}

function onDestroy() {

}