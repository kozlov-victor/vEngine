
let devConsole = document.createElement('div');
let css = {
    position: 'absolute',
    right: 0,
    top: 0,
    'background-color': 'black',
    'min-width': '20px',
    'min-height': '20px',
    opacity: 0.5
};
Object.keys(css).forEach(key=>devConsole.style.setProperty(key,css[key]));

let label = document.createElement('span');
label.style.color = 'white';
devConsole.appendChild(label);

window.addEventListener('load',function(){
    document.body.appendChild(devConsole);

    setInterval(function(){
        label.textContent = 'fps:'+window.fps;
    },1000);

});