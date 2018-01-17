declare const RF;
import './collapsible.less'

@RF.decorateComponent({
    name: 'app-collapsible',
    template: require('./collapsible.html')
})
export default class Collapsible {

    title = 'default_title';
    crud = '';
    object = {};
    meta = {};
    id = null;
    opened = false;

    constructor(){

    }

    toggle(){
        this.opened = !this.opened;
    }
}