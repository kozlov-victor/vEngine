/*global requestAnimationFrame:true*/
/*global DEBUG:true*/
/*global IN_EDITOR:true*/
import './polyfills'
import RendererFactory from '../engine/renderer/rendererFactory'
import Repository from './repository';
import Mouse from '../engine/control/mouse'
import {Transient} from './decorators'

import CommonObject from '../model/commonObject'

@Transient({
    repository: true
})
export default class Game extends CommonObject {

    constructor(gameProps){
        super();
        this.scale = {x:1,y:1};
        this.pos = {x:0,y:0};
        Object.keys(gameProps).forEach(key=>{
            this[key] = gameProps[key];
        });
        this._currentScene = null;
        let time = Date.now();
        this._lastTime = this._currTime = time;
        this._deltaTime = 0;
        this._running = false;
        this.repository = new Repository(this);
        this._mouse = new Mouse(this);
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
            this._mouse.listenTo(this._renderer.container);
        }
        this._currentScene = scene;
        if (!IN_EDITOR) {
            let allScripts = require('build/allScripts');
            let sceneBhScriptName = `${scene.name[0].toUpperCase()}${scene.name.substr(1)}Behaviour`;
            if (sceneBhScriptName) scene.setIndividualBehaviour(allScripts[sceneBhScriptName]);
            scene.layers.forEach(l=>{
                l.gameObjects.forEach(g=>{
                    g.setCommonBehaviour();
                    let scriptName = `${g.name[0].toUpperCase()}${g.name.substr(1)}Behaviour`;
                    let bhClass = allScripts[scriptName];
                    if (bhClass) g.setIndividualBehaviour(bhClass);
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

    static update(self){
        if (DEBUG && window.canceled) return;
        requestAnimationFrame(()=>{Game.update(self)});
        self._lastTime = self._currTime;
        self._currTime = Date.now();
        self._deltaTime = self._currTime - self._lastTime;

        self._currentScene && self._currentScene.update(self._currTime,self._deltaTime);
    }

}

