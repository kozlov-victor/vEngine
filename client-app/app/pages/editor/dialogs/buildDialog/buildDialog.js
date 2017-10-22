
/*global RF:true*/
/*global localStorage:true*/

import BaseComponent from 'app/baseComponent'

@RF.decorateComponent({
    name: 'app-build-dialog',
    template: require('./buildDialog.html')
})
export default class BuildDialog extends BaseComponent {
    constructor(){
        super();
    }
    close(){
        RF.getComponentById('buildModal').close();
    }
    onChanged(){
        localStorage.buildOpts = JSON.stringify(this.editData.buildOpts);
    }
}