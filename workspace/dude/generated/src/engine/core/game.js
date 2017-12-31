/*global requestAnimationFrame:true*/
/*global window:true*/
/*global DEBUG:true*/
/*global IN_EDITOR:true*/
/*global PROJECT_NAME:true*/
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

    _lastTime = null;
    _currTime = null;
    _currentScene = null;
    _running = false;
    destroyed = false;
    renderer = null;
    scale = new Point2d(1,1);
    pos = new Point2d(0,0);
    width = null;
    height = null;
    gravityConstant = null;
    fps = null;
    gamePad = null;
    scaleStrategy = null;// = SCALE_STRATEGY.FIT;
    startSceneId = null;

    _revalidated = false;

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
        if (DEBUG && this.destroyed) return;
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
        this.renderer.destroy();
        this.renderer.cancelFullScreen();
    }

}

