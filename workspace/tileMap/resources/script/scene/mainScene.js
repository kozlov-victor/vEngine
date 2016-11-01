
var btnUp = self.find('btnUp');
var btnDown =  self.find('btnDown');
var btnLeft = self.find('btnLeft');
var btnRight =  self.find('btnRight');
 
var keyboard = require('keyboard').instance(); 

btnUp.
on(['mouseDown','mouseEnter'],function(){
    keyboard.emulatePress(keyboard.KEY_UP);
}).
on(['mouseUp','mouseLeave'],function(){
    keyboard.emulateRelease(keyboard.KEY_UP);  
});

btnDown.on(['mouseDown','mouseEnter'],function(){
    keyboard.emulatePress(keyboard.KEY_DOWN); 
})
.on(['mouseUp','mouseLeave'],function(){
    keyboard.emulateRelease(keyboard.KEY_DOWN);  
});

btnLeft.on(['mouseDown','mouseEnter'],function(){
    keyboard.emulatePress(keyboard.KEY_LEFT); 
}).
on(['mouseUp','mouseLeave'],function(){
    keyboard.emulateRelease(keyboard.KEY_LEFT);  
});

btnRight.on(['mouseDown','mouseEnter'],function(){
    keyboard.emulatePress(keyboard.KEY_RIGHT); 
}).
on(['mouseUp','mouseLeave'],function(){
    keyboard.emulateRelease(keyboard.KEY_RIGHT);  
});
