import {BaseComponent} from "../../../../baseComponent";

declare const RF;

@RF.decorateComponent({
    name: 'app-game-object-row',
    template: require('./gameObjectRow.html')
})
export class GameObjectRow extends BaseComponent {

    crud = null;
    gameObject = {};
    draggable = false;

    constructor(){
        super();

    }

}