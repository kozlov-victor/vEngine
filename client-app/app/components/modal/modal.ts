declare const RF;
import './modal.less'

@RF.decorateComponent({
    name: 'app-modal',
    template: require('./modal.html')
})
export default class AppModal {

    opened:boolean = false;

    constructor(){

    }

    close(){
        this.opened = false;
        //setTimeout(RF.digest,1); //todo
    }
    open(){
        this.opened = true;
    }
}