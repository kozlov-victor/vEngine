import {BaseComponent} from "../../../../baseComponent";
import {SCALE_STRATEGY} from "../../../../../engine/core/misc/consts";

declare const RF;


@RF.decorateComponent({
    name: 'app-game-props',
    template: require('./gameProps.html')
})
export class GameProps extends BaseComponent {

    scales;

    constructor(){
        super();
        let scales = Object.assign({},SCALE_STRATEGY as any);
        Object.keys(scales).forEach(key=>{
            if (parseInt(key)>=0) delete scales[key];
        });
        this.scales = scales;
    }

    saveGameProps(){
        this.restResource.saveGameProps(this.editData.game.toJSON());
    }
}