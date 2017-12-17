/*global requestAnimationFrame:true*/
/*global window:true*/
/*global DEBUG:true*/
/*global IN_EDITOR:true*/
/*global PROJECT_NAME:true*/
import './polyfills'
import RendererFactory from './renderer/rendererFactory'
import Repository from './repository';
import Mouse from './control/mouse'
import Keyboard from './control/keyboard'
import Collider from './physics/collider'
import {Transient} from './decorators'

import CommonObject from '../model/commonObject'
import Camera from './camera'

@Transient({
    repository: true,
    camera: true,
    keyboard: true
})
export default class Game extends CommonObject {

    _lastTime = null;
    _currTime = null;
    _currentScene = null;
    _running = false;
    renderer = null;
    scale = {x:1,y:1};
    pos = {x:0,y:0};
    gravityConstant = null;
    fps = null;

    constructor(gameProps){
        super();
        Object.keys(gameProps).forEach(key=>{
            this[key] = gameProps[key];
        });
        let time = Date.now();
        this._lastTime = this._currTime = time;
        this._deltaTime = 0;
        this.repository = new Repository(this);
        this._mouse = new Mouse(this); //todo mouse not _mouse
        this.keyboard = new Keyboard(this);
        this.keyboard.listenTo();
        this._collider = new Collider(this);
        this.camera = new Camera(this);
    }

    getTime(){
        return this._lastTime;
    }

    getDeltaTime(){
        return this._deltaTime;
    }

    runScene(scene){
        if (!this._renderer) { // move to constructor?
            this._renderer = RendererFactory.getRenderer(this);
            this._mouse.listenTo(this._renderer.container);
        }
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
                Game.update(this);
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

    static update(game){
        if (DEBUG && window.canceled) return;
        requestAnimationFrame(()=>{Game.update(game)});
        game._lastTime = game._currTime;
        game._currTime = Date.now();
        game._deltaTime = game._currTime - game._lastTime;
        if (DEBUG) {
            game.fps = ~~(1000 / game._deltaTime);
            window.fps = game.fps;
        }

        game._currentScene && game._currentScene.update(game._currTime,game._deltaTime);
        game.keyboard.update();
    }

}

