import {BaseComponent} from "../../../../baseComponent";
import {getLibCodeScript} from "../../../../providers/codeTemplates";
import {editData} from "../../../../providers/editData";
import {Utils} from "../../../../providers/utils";

declare const RF;

let getRawName = (str)=>{
    let splited = str.split('.');
    if (splited.length==1) return str;
    splited.pop();
    return splited.join('.');
};

@RF.decorateComponent({
    name: 'app-script-dialog',
    template: require('./scriptDialog.html')
})
export class ScriptDialog extends BaseComponent {
    constructor(){
        super();
    }
    async createOrEditScript(){

        let name = Utils.decapitalise(getRawName(editData.currScriptInEdit.name));

        if (!editData.currScriptInEdit.id) {
            this.editData.customScripts.push({name:`${name}.ts`});
                await this.restFileSystem.createFile(
                    `scripts/custom/${name}.ts`,
                   getLibCodeScript(Utils.capitalise(name)))
        } else {
            this.editData.customScripts[editData.currScriptInEdit.index].name = `${name}.ts`;
            await this.restFileSystem.renameFolder(
                `workspace/${editData.projectName}/scripts/custom/${getRawName(editData.currScriptInEdit.oldName)}.ts`,
                `workspace/${editData.projectName}/scripts/custom/${name}.ts`,
            )
        }
        RF.getComponentById('scriptModal').close();
    }
}
