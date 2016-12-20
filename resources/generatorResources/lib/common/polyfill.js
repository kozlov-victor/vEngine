Array.prototype.remove = function(el){
    this.splice(this.indexOf(el),1);
};

window.URL = window.URL || window.webkitURL;

window.AudioContext = window.AudioContext || window.webkitAudioContext;

window.requestAnimationFrame =
    window.requestAnimationFrame||
    window.webkitRequestAnimationFrame||
    function(f){setTimeout(f,17)};