/*global RF:true*/


import BaseComponent from 'app/baseComponent'

@RF.decorateComponent({
    name: 'app-svg-editor-dialog',
    template: require('./svgEditorDialog.html')
})
export default class SvgEditorDialog extends BaseComponent{
    constructor(){
        super();
    }
}