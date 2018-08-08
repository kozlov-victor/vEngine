import {BaseComponent} from "../../../../baseComponent";

declare const RF;
import './scriptEditor.scss'

@RF.decorateComponent({
    name: 'app-script-editor',
    template: require('./scriptEditor.html')
})
export class ScriptEditor extends BaseComponent {
    constructor(){
        super();
    }
    close(){
        this.editData.scriptEditorUrl = '';
    }
}
