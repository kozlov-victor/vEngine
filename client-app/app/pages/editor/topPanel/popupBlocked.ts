
import {BaseComponent} from "../../../baseComponent";

declare const RF;

@RF.decorateComponent({
    name: 'app-popup-blocked',
    template: `
        <app-modal id="popupBlockedModal">
            <div data-transclusion="content">
                <div>
                {{i18n.get('popupBlocked')}}
                </div>
                <button data-click="openWindow()">{{i18n.get('tryAgain')}}</button>
            </div>
        </app-modal>
    `
})
export class PopupBlocked extends BaseComponent {

    constructor(){
        super();
    }

    openWindow(){
        RF.getComponentById('topPanel').openWindow();
        RF.getComponentById('popupBlockedModal').close();
    }
}