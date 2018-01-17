import BaseComponent from "../../../../baseComponent";

declare const RF;


@RF.decorateComponent({
    name: 'app-user-interface',
    template: require('./userInterface.html')
})
export default class UserInterface extends BaseComponent {
    constructor(){
        super();
    }
}