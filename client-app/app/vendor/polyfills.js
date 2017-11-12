
if (!Array.prototype.findIndex) {
    Array.prototype.findIndex = function(obj){
        return this.indexOf(obj);
    };
}

if (!Array.prototype.includes) {
    Array.prototype.includes = function(obj){
        return this.indexOf(obj)>-1;
    };
}