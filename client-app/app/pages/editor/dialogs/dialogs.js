/*global RF:true*/
import BaseComponent from 'app/baseComponent'

@RF.decorateComponent({
    name: 'app-dialogs',
    template: require('./dialogs.html')
})
export default class Dialogs extends BaseComponent {
    constructor(){
        super();
    }
}