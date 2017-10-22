/*global RF:true*/
import './collapsible.less'

@RF.decorateComponent({
    name: 'app-collapsible',
    template: require('./collapsible.html')
})
export default class Collapsible {

    constructor(){
        this.title = 'default_title';
        this.crud = '';
        this.object = {};
        this.meta = {};
        this.id = null;
        this.opened = false;
    }

    toggle(){
        this.opened = !this.opened;
    }
}