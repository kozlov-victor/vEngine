
import BaseComponent from "../../baseComponent";

declare const RF;

import './explorer.less'
import {confirmEx} from "../../providers/userDefinedFns";

@RF.decorateComponent({
    name: 'explorer',
    template: require('./explorer.html')
})
export default class Explorer extends BaseComponent {


    constructor(){
        super();

    }

    onShow(){

    }

    async onMount(){
        this.editData.projects = await this.restProject.getAll();
    }

    editProject(p){
        p.oldName = p.name;
        this.editData.currProjectInEdit = {
            name: p.name,
            oldName: p.name
        };
        RF.getComponentById('projectDialog').open();
    }

    createProject(){
        this.editData.currProjectInEdit = {
            name: ''
        };
        RF.getComponentById('projectDialog').open();
    }

    openProject(project){
        this.resourceHelper.loadProject(project.name);
    }

    deleteProject(proj){
        confirmEx(
            this.i18n.get('confirmQuestion')(proj),
            async()=>{
                await this.restFileSystem.deleteFolder('workspace/'+proj.name);
                this.editData.projects = await this.restProject.getAll();
            }
        );
    }

}