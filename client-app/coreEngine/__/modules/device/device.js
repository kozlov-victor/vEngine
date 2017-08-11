
const isCocoonJS = !!navigator.isCocoonJS;
exports.isCocoonJS = isCocoonJS;
exports.scale = isCocoonJS?(window.devicePixelRatio||1):1;
exports.isTouch = typeof window !== 'undefined' && 'ontouchstart' in window;

exports.printDeviceInfo = function(){
    for (let key in exports) {
        if (!exports.hasOwnProperty(key)) continue;
        if (exports[key].call) continue;
        console.log(key + ':' + exports[key]);
    }
};