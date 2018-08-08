
declare const RF;

import {BaseComponent} from '../../../../baseComponent'

@RF.decorateComponent({
    name: 'app-build-dialog',
    template: require('./buildDialog.html')
})
export class BuildDialog extends BaseComponent {
    constructor(){
        super();
    }
    close(){
        RF.getComponentById('buildModal').close();
    }
    onChanged(){
        localStorage['buildOpts'] = JSON.stringify(this.editData.buildOpts);
    }
}