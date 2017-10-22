/*global RF:true*/
import BaseComponent from 'app/baseComponent'

@RF.decorateComponent({
    name: 'app-user-interface',
    template: require('./userInterface.html')
})
export default class userInterface extends BaseComponent {
    constructor(){
        super();
    }
}