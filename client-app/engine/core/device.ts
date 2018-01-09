import Game from "./game";

declare let navigator:any;

const isCocoonJS = !!navigator.isCocoonJS;


export default class Device {

    constructor(game:Game){
    }

    static isCocoonJS:boolean = isCocoonJS;
    static scale:number = isCocoonJS?(window.devicePixelRatio||1):1;
    static isTouch:boolean = (typeof window !== 'undefined' && 'ontouchstart' in window);

}