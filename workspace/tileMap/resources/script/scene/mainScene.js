
var GameObject = require('gameObject').GameObject;

var btnUp = GameObject.find('btnUp');
var btnDown =  GameObject.find('btnDown');
var btnLeft = GameObject.find('btnLeft');
var btnRight =  GameObject.find('btnRight');
 
var keyboard = require('keyboard').instance(); 

btnUp.
on(['mouseDown','mouseEnter'],function(){
    keyboard.emulatePress(keyboard.KEY_UP);
}).
on(['mouseUp','mouseLeave'],function(){
    keyboard.emulateRelease(keyboard.KEY_UP);  
});

btnDown.
on(['mouseDown','mouseEnter'],function(){
    keyboard.emulatePress(keyboard.KEY_DOWN); 
})
.on(['mouseUp','mouseLeave'],function(){
    keyboard.emulateRelease(keyboard.KEY_DOWN);  
});

btnLeft.
on(['mouseDown','mouseEnter'],function(){
    keyboard.emulatePress(keyboard.KEY_LEFT); 
}).
on(['mouseUp','mouseLeave'],function(){
    keyboard.emulateRelease(keyboard.KEY_LEFT);  
});

btnRight.
on(['mouseDown','mouseEnter'],function(){
    keyboard.emulatePress(keyboard.KEY_RIGHT); 
}).
on(['mouseUp','mouseLeave'],function(){
    keyboard.emulateRelease(keyboard.KEY_RIGHT);  
});
