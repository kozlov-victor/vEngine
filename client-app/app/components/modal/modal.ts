declare const RF;
import './modal.scss'

@RF.decorateComponent({
    name: 'app-modal',
    template: require('./modal.html')
})
export class AppModal {

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