declare const RF;
import './collapsible.scss'

@RF.decorateComponent({
    name: 'app-collapsible',
    template: require('./collapsible.html')
})
export class Collapsible {

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