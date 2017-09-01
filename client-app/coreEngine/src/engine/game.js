
import RendererFactory from '../engine/renderer/rendererFactory'
import Repository from './repository';
import Mouse from '../engine/control/mouse'

import CommonObject from '../model/commonObject'

export default class Game extends CommonObject {

    constructor(gameProps){
        super();
        this.pos = {x:0,y:0};
        this.scale = {x:1,y:1};
        Object.keys(gameProps).forEach(key=>{
            this[key] = gameProps[key];
        });
        this._currentScene = null;
        let time = Date.now();
        this._lastTime = time;
        this._currTime = time;
        this._deltaTime = 0;
        this._running = false;
        this._repository = new Repository(this);
        this.mouse = new Mouse(this);
    }

    getTime(){
        return this._lastTime;
    }

    getDeltaTime(){
        return this._deltaTime;
    }

    runScene(scene){
        if (!this._renderer) {
            this._renderer = RendererFactory.getRenderer(this);
            this.mouse.listenTo(this._renderer.container);
        }
        scene.preload(()=>{
            this._currentScene = scene;
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

    static update(self){
        if (DEBUG && window.canceled) return;
        requestAnimationFrame(()=>{Game.update(self)});
        self._lastTime = self._currTime;
        self._currTime = Date.now();
        self._deltaTime = self._currTime - self._lastTime;

        self._currentScene && self._currentScene.update(self._currTime,self._deltaTime);
    }

}

