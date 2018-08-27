
import './bottomPanel.scss';
import {BaseComponent} from "../../../baseComponent";

declare const RF: any;

@RF.decorateComponent({
    name: 'app-bottom-panel',
    template: require('./bottomPanel.html')
})
export class BottomPanel extends BaseComponent{

    text:string = '';

}