/*global RF:true*/
import BaseComponent from 'app/baseComponent'

import {SCALE_STRATEGY} from 'engine/core/consts'

@RF.decorateComponent({
    name: 'app-game-props',
    template: require('./gameProps.html')
})
export default class GameProps extends BaseComponent {

    constructor(){
        super();
        this.scales = SCALE_STRATEGY;
    }

    saveGameProps(){
        this.restResource.saveGameProps(this.editData.game);
    }
}