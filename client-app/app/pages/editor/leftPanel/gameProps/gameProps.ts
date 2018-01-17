import BaseComponent from "../../../../baseComponent";
import {SCALE_STRATEGY} from "../../../../../engine/core/misc/consts";

declare const RF;


@RF.decorateComponent({
    name: 'app-game-props',
    template: require('./gameProps.html')
})
export default class GameProps extends BaseComponent {

    scales = SCALE_STRATEGY;

    constructor(){
        super();
    }


    saveGameProps(){
        this.restResource.saveGameProps(this.editData.game.toJSON());
    }
}