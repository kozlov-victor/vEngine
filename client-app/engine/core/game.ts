import BaseAbstractBehaviour from "../commonBehaviour/abstract/baseAbstractBehaviour";

declare const DEBUG:boolean,IN_EDITOR:boolean;

declare let window:any;
declare let require:Function;

import './misc/polyfills'
import RendererFactory from './renderer/rendererFactory'
import Repository from './repository';
import Mouse from './control/mouse'
import Keyboard from './control/keyboard'
import GamePad from './control/gamePad'
import Collider from './physics/collider'
import {Transient} from './misc/decorators'

import CommonObject from '../model/commonObject'
import Camera from './camera'
import {SCALE_STRATEGY} from "./misc/consts";
import Point2d from "./geometry/point2d";
import AbstractRenderer from "./renderer/abstract/abstractRenderer";
import Scene from '../model/generic/scene';


@Transient({
    repository: true,
    renderer: true,
    mouse: true,
    keyboard: true,
    gamePad: true,
    collider: true,
    camera: true,
    scaleStrategy: true,
    fps: true,
    destroyed: true
})
export default class Game extends CommonObject {

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
    repository:Repository;
    mouse:Mouse;
    keyboard:Keyboard;
    collider:Collider;
    camera:Camera;
    scaleStrategy:number = SCALE_STRATEGY.FIT;
    startSceneId:number = 0;

    _revalidated:boolean = false;

    constructor(){
        super();
        let time = Date.now();
        this._lastTime = this._currTime = time;
        this._deltaTime = 0;
        this.repository = new Repository(this);
        this.mouse = new Mouse(this);
        this.keyboard = new Keyboard(this);
        this.keyboard.listenTo();
        this.gamePad = new GamePad(this);
        this.collider = new Collider(this);
        this.camera = new Camera(this);
    }

    revalidate(){
        this.renderer = RendererFactory.getRenderer(this);
        this.mouse.listenTo(this.renderer.container);
        this._revalidated = true;
    }

    getTime(){
        return this._lastTime;
    }

    getDeltaTime(){
        return this._deltaTime;
    }

    runScene(scene){
        if (DEBUG && !this._revalidated)
            throw `game.revalidate() method not invoked. Invoke game.fromJSON(gameParams) or call game.revalidate() method directly`;
        this._currentScene = scene;
        if (!IN_EDITOR) {
            let allScripts = require(`../../app/scripts/allScripts`);
            let sceneBhScriptName = `${scene.name[0].toUpperCase()}${scene.name.substr(1)}Behaviour`;
            if (sceneBhScriptName) scene.setIndividualBehaviour(allScripts[sceneBhScriptName]);
            scene.layers.forEach(l=>{
                l.gameObjects.forEach(go=>{
                    go.setCommonBehaviour();
                    let scriptName = `${go.name[0].toUpperCase()}${go.name.substr(1)}Behaviour`;
                    let bhClass = allScripts[scriptName];
                    if (bhClass) go.setIndividualBehaviour(bhClass);
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
        this._deltaTime = this._currTime - this._lastTime;
        if (DEBUG) {
            this.fps = ~~(1000 / this._deltaTime);
            window.fps = this.fps;
            let renderError = this.renderer.getError();
            if (renderError) throw `render error with code ${renderError}`;
        }
        if (this._deltaTime>20) this._deltaTime = 20;
        this._currentScene && this._currentScene.update(this._currTime,this._deltaTime);
        this.keyboard.update();
        this.gamePad.update();
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
        },1000)
    }

}

