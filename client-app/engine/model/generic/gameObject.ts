
import GameObjectProto from './gameObjectProto'
import * as commonBehaviours from '../../commonBehaviour/all'
import BlackWhiteFilter from "../../core/renderer/webGl/filters/textureFilters/blackWhite";
import ColorizeFilter from "../../core/renderer/webGl/filters/textureFilters/colorizeFilter";
import PixelFilter from "../../core/renderer/webGl/filters/textureFilters/pixelFilter";
import ArcadeRigidBody from "../../core/physics/arcadeRigidBody";

const noop = ()=>{};
declare const DEBUG:boolean;

export default class GameObject extends GameObjectProto {

    type:string = 'GameObject';
    _lastDirection:string;
    gameObjectProto:GameObjectProto = null;


    constructor(game){
        super(game);
    }

    revalidate(){
        let ownProps:any = {};
        for (let key in this) {
            if (!this.hasOwnProperty(key)) continue;
            ownProps[key] = this[key];
        }
        Object.keys(this.gameObjectProto).forEach(key=>{
            if (this.gameObjectProto[key]===undefined) return;
            this[key] = this.gameObjectProto[key];
        });
        Object.keys(ownProps).forEach(key=>{
            if (!ownProps[key]) return; // to avoid corrupt frameIndex val
            if (ownProps[key].splice && ownProps[key].length===0) return;
            this[key] = ownProps[key];
        });
        super.revalidate();
        // if (this.id===71) {
        //     let filter1 = new BlackWhiteFilter(this.game.renderer['gl']); // todo
        //     let filter2 = new ColorizeFilter(this.game.renderer['gl']);
        //     this.filters.push(filter1);
        //     this.filters.push(filter2);
        // }
    }

    setIndividualBehaviour(Clazz){
        let instance = new Clazz(this.game);
        instance.game = this.game;
        instance.gameObject = this;
        if (!instance.onCreate) instance.onCreate = noop;
        if (!instance.onUpdate) instance.onUpdate = noop;
        if (!instance.onDestroy) instance.onDestroy = noop;
        this._individualBehaviour = instance;
    }

    setCommonBehaviour(){
        let instances = [];
        this.commonBehaviour.forEach(cb=>{
            let CbClazz = commonBehaviours[cb.name];
            if (DEBUG) {
                if (!CbClazz) {
                    console.error(cb);
                    console.error(commonBehaviours);
                    throw `can not find common behaviour with name ${cb.name}`
                }
            }
            let instance = new CbClazz(this.game);
            instance.manage(this,cb.parameters);
            instances.push(instance);
        });
        this.commonBehaviour = instances;
    }

};