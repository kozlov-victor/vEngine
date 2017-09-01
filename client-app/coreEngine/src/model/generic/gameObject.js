
import GameObjectProto from './gameObjectProto'


export default class GameObject extends GameObjectProto{

    constructor(game){
        super(game);
        this.type = 'GameObject';
        this.layerId =  null;
    }

    setIndividualBehaviour(clazz){
        let instance = new clazz();
        instance.game = this._game;
        instance.object = this;
        this._individualBehaviour = instance;
    }

};