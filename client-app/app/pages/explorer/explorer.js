
import './explorer.less'

import editData from 'app/providers/editData';
import restProject from 'app/providers/rest/project';
import resourceHelper from 'app/providers/resourceHelper';
import fileSystem from 'app/providers/rest/fileSystem';

import './dialogs/projectDialog/projectDialog';
import i18n from 'app/providers/i18n';

export default RF.registerComponent('explorer', {
    template: {
        type:'string',
        value: require('./explorer.html')
    },
    editData,
    onMount: function(){
        restProject.
            getAll(list=>{
                this.editData.projects = list;
            });
    },
    i18n: i18n.getAll(),
    editProject: function(p){
        p.oldName = p.name;
        this.editData.currProjectInEdit = {
            name: p.name,
            oldName: p.name
        };
        RF.getComponentById('projectDialog').open();
    },
    createProject: function(){
        this.editData.currProjectInEdit = {
            name: ''
        };
        RF.getComponentById('projectDialog').open();
    },
    openProject: function(project){
        resourceHelper.loadProject(project.name);
    },
    deleteProject: function(proj){
        window.confirmEx(
            this.i18n.confirmQuestion(proj),
            ()=>{
                fileSystem.deleteFolder('workspace/'+proj.name,function(){
                    restProject.getAll(function(list){
                        editData.projects = list;
                    })
                });
            }
        );
    }
});