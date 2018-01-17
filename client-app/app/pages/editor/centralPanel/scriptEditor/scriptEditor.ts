import BaseComponent from "../../../../baseComponent";

declare const RF;
import './scriptEditor.less'

@RF.decorateComponent({
    name: 'app-script-editor',
    template: require('./scriptEditor.html')
})
export default class ScriptEditor extends BaseComponent {
    constructor(){
        super();
    }
    close(){
        this.editData.scriptEditorUrl = '';
    }
}
