import {BaseComponent} from "../../../../baseComponent";
import {confirmEx} from "../../../../providers/userDefinedFns";
import {editData} from "../../../../providers/editData";

declare const RF;

@RF.decorateComponent({
    name: 'app-scripts',
    template: require('./scripts.html')
})
export class Scripts extends BaseComponent {
    constructor(){
        super();
    }

    createScript(){
        editData.currScriptInEdit = {id:0,name:'userScript'};
        RF.getComponentById('scriptModal').open();
    }

    editScript(script){
        editData.currScriptInEdit = script;
        this.utils.openEditor(`scripts/custom/${script.name}`);
    }

    async deleteScript(script){
        if (await confirmEx(`delete script ${script.name}?`))
        await this.restFileSystem.removeFile(`scripts/custom/${script.name}`);
        editData.customScripts.splice(script.index,1);
    }

    editScriptName(script,index) {
        script.id = index+1;
        script.oldName = script.name;
        script.index = index;
        editData.currScriptInEdit = script;
        RF.getComponentById('scriptModal').open();
    }
}
