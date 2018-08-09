import {Layer} from "../model/impl/layer";


declare const DEBUG:boolean,IN_EDITOR:boolean;
declare const setTimeout: (f:Function,n:number)=>number;
declare const setInterval: (f:Function,n:number)=>number;


declare let window:any;
declare let require:Function;

import './misc/polyfills'
import {BaseAbstractBehaviour} from "../commonBehaviour/abstract/baseAbstractBehaviour";
import {RendererFactory} from './renderer/rendererFactory'
import {Repository} from './repository';
import {Mouse} from './control/mouse'
import {Keyboard} from './control/keyboard'
import {GamePad} from './control/gamePad'
import {Transient} from './misc/decorators'

import {CommonObject} from '../model/commonObject'
import {Camera} from './camera'
import {SCALE_STRATEGY} from "./misc/consts";
import {Point2d} from "./geometry/point2d";
import {AbstractRenderer} from "./renderer/abstract/abstractRenderer";
import {Scene} from '../model/impl/scene';
import {LightArray} from "./light/lightArray";
import {UIBuilder} from "../model/impl/ui/uiBuilder";
import {ColliderEngine} from "./physics/colliderEngine";
import * as MathEx from "../core/mathEx";
import {_global} from "./global";
import {GameObject} from "../model/impl/gameObject";


@Transient({
    repository: true,
    renderer: true,
    mouse: true,
    keyboard: true,
    gamePad: true,
    collider: true,
    camera: true,
    fps: true,
    destroyed: true,
    lightArray: true,
    uiBuilder: true,
    scale: true,
    pos: true
})
export class Game extends CommonObject {

    private _lastTime:number = 0;
    private _currTime:number = 0;
    private _deltaTime:number = 0;
    private _currentScene:Scene = null;
    private _running:boolean = false;
    private destroyed:boolean = false;

    renderer:AbstractRenderer = null;
    scale:Point2d = new Point2d(1,1);
    pos:Point2d = new Point2d(0,0);
    width:number = 0;
    height:number = 0;
    gravityConstant:number = 0;
    fps:number = 0;
    gamePad:GamePad = null;
    lightArray:LightArray;
    repository:Repository;
    mouse:Mouse;
    keyboard:Keyboard;
    collider:ColliderEngine;
    camera:Camera;
    uiBuilder:UIBuilder;
    scaleStrategy:number = SCALE_STRATEGY.FIT;
    startSceneId:number = 0;
    preloadingSceneId:number = 0;

    _revalidated:boolean = false;
    __global__ = _global;

    static UPDATE_TIME_RATE = 20;

    constructor(){
        super();
        this.repository = new Repository(this);
        this.mouse = new Mouse(this);
        this.keyboard = new Keyboard(this);
        this.keyboard.listenTo();
        this.gamePad = new GamePad(this);
        this.collider = new ColliderEngine(this);
        this.camera = new Camera(this);
        this.lightArray = new LightArray(this);
        this.uiBuilder = new UIBuilder(this);
        if (DEBUG) window['game'] = this;

        // todo
        this.__global__['MathEx'] = MathEx;
    }

    revalidate(){
        this.renderer = RendererFactory.getRenderer(this);
        this.mouse.listenTo(this.renderer.container);
        this.camera.revalidate();
        this._revalidated = true;
    }

    getTime():number{
        return this._lastTime;
    }

    getDeltaTime():number{
        return this._deltaTime;
    }

    log(args){
        this.renderer.log(args);
    }

    private _cnt=0;
    debug2(...val){
        this._cnt++;
        console.log(...val);
        if (this._cnt>10) throw 'too many logs';
    }

    runScene(scene){
        if (DEBUG && !this._revalidated)
            throw `game.revalidate() method not invoked. Invoke game.fromJSON(gameParams) or call game.revalidate() method directly`;
        this._currentScene = scene;
        if (!IN_EDITOR) {
            let allScripts = require(`../../app/scripts/allScripts`);
            let sceneBhScriptName = `${scene.name[0].toUpperCase()}${scene.name.substr(1)}Behaviour`;
            let BhClass = allScripts[sceneBhScriptName];
            if (sceneBhScriptName) scene.setIndividualBehaviour(new BhClass());
            scene.layers.forEach((l:Layer)=>{
                l.children.forEach((go:GameObject)=>{
                    go.setCommonBehaviour();
                    let scriptName = `${go.name[0].toUpperCase()}${go.name.substr(1)}Behaviour`;
                    let BhClass = allScripts[scriptName];
                    if (BhClass && !go.getIndividualBehaviour()) go.setIndividualBehaviour(new BhClass());
                });
            });
        }
        scene.preload(()=>{
            this._currentScene.onShow();
            if (!this._running) {
                this.update();
                this._running = true;
            }
        });
    }

    getCurrScene(){
        return this._currentScene;
    }

    setCurrScene(scene){
        this._currentScene = scene;
    }

    update(){
        if (this.destroyed) return;
        this._lastTime = this._currTime;
        this._currTime = Date.now();
        let currTimeCopy = this._currTime;
        if (!this._lastTime) this._lastTime = this._currTime;
        this._deltaTime = this._currTime - this._lastTime;

        if (DEBUG) {
            this.fps = ~~(1000 / this._deltaTime);
            window.fps = this.fps;
            let renderError = this.renderer.getError();
            if (renderError) throw `render error with code ${renderError}`;
        }

        let dTime = Math.min(this._deltaTime,Game.UPDATE_TIME_RATE);
        let numOfLoops = 1;//(~~(this._deltaTime / Game.UPDATE_TIME_RATE))||1;
        let currTime   = this._currTime - numOfLoops * Game.UPDATE_TIME_RATE;
        let loopCnt = 0;
        do {
            this._currentScene && this._currentScene.update(currTime,dTime);
            this.collider.collisionArcade();
            currTime += Game.UPDATE_TIME_RATE;
            this.keyboard.update();
            this.gamePad.update();
            loopCnt++;
            if (loopCnt>10) { // to avoid to much iterations
                this._lastTime = this._currTime = currTimeCopy;
                break;
            }
        } while (loopCnt<numOfLoops);


        this._currentScene && this._currentScene.render();

        requestAnimationFrame(this.update.bind(this));
    }

    destroy(){
        this.destroyed = true;
        this.keyboard.destroy();
        this.mouse.destroy();
        this.renderer.cancelFullScreen();
        BaseAbstractBehaviour.destroyAll();
        setTimeout(()=>{ // wait for rendering stopped
            this.renderer.destroy();
        },1000);
        let lastTimeout:number = setTimeout(()=>{},0);
        //noinspection TypeScriptValidateTypes
        let lastInterval:number = setInterval(()=>{},0);
        const delta:number = 16;
        let lastMaxVal = Math.max(lastTimeout,lastInterval) + delta;
        for (let i=0;i<lastMaxVal;i++) {
            clearInterval(i);
            clearTimeout(i);
        }
    }

}
