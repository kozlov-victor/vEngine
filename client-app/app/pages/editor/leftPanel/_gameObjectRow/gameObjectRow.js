/*global RF:true*/
import BaseComponent from 'app/baseComponent'

@RF.decorateComponent({
    name: 'app-game-object-row',
    template: require('./gameObjectRow.html')
})
export default class GameObjectRow extends BaseComponent {

    constructor(){
        super();
        this.crud = null;
        this.gameObject = {};
        this.draggable = false;
    }

}