
import GameObjectProto from './gameObjectProto'
import * as commonBehaviours from '../../commonBehaviour/all'

const noop = ()=>{};

export default class GameObject extends GameObjectProto {

    constructor(game){
        super(game);
        this.type = 'GameObject';
        this.gameObjectProto = null;
    }

    revalidate(){
        let ownProps = {};
        for (let key in this) {
            if (!this.hasOwnProperty(key)) continue;
            ownProps[key] = this[key];
        }
        Object.keys(this.gameObjectProto).forEach(key=>{
            if (this.gameObjectProto[key]==undefined) return;
            this[key] = this.gameObjectProto[key];
        });
        Object.keys(ownProps).forEach(key=>{
            if (ownProps[key]==undefined) return;
            if (ownProps[key].splice && ownProps[key].length===0) return;
            this[key] = ownProps[key];
        });
        super.revalidate();
    }

    setIndividualBehaviour(Clazz){
        let instance = new Clazz(this.game);
        instance.game = this.game;
        instance.object = this;
        if (!instance.onCreate) instance.onCreate = noop;
        if (!instance.onUpdate) instance.onUpdate = noop;
        if (!instance.onDestroy) instance.onDestroy = noop;
        this._individualBehaviour = instance;
    }

    setCommonBehaviour(){
        this.commonBehaviour.forEach(cb=>{
            let CbClazz = commonBehaviours[cb.name];
            let instance = new CbClazz(this.game);
            instance.manage(this,cb.parameters);
        });
    }

};