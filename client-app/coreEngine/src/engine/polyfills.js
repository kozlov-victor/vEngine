
Array.prototype.remove = function(callback) {
    let i = this.length;
    while (i--) {
        if (callback(this[i], i)) {
            this.splice(i, 1);
        }
    }
};

window.requestAnimationFrame =
    window.requestAnimationFrame||
    window.webkitRequestAnimationFrame||
    function(f){setTimeout(f,17)};