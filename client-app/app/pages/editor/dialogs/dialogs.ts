import BaseComponent from "../../../baseComponent";

declare const RF;


@RF.decorateComponent({
    name: 'app-dialogs',
    template: require('./dialogs.html')
})
export default class Dialogs extends BaseComponent {
    constructor(){
        super();
    }
}