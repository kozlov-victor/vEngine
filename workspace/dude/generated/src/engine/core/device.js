const isCocoonJS = !!navigator.isCocoonJS;


export default class Device {

    constructor(game){
    }

    static isCocoonJS = isCocoonJS;
    static scale = isCocoonJS?(window.devicePixelRatio||1):1;
    static isTouch = (typeof window !== 'undefined' && 'ontouchstart' in window);

}