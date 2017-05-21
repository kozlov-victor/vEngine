

import editData from 'providers/editData';
import restProject from 'providers/rest/project';
import resourceHelper from 'providers/resourceHelper';
import fileSystem from 'providers/rest/fileSystem';

import './dialogs/projectDialog/projectDialog';
import i18n from 'providers/i18n';

export default RF.registerComponent('explorer', {
    template: {
        type:'string',
        value: require('./explorer.html')
    },
    onMount: function(){
        restProject.
            getAll(list=>{
                this.editData.projects = list;
            });
    },
    editData: editData,
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
        let self = this;
        proj.type = 'project';
        window.confirmEx(
            this.i18n.confirmQuestion(proj),
            function(){
                fileSystem.deleteFolder('workspace/'+proj.name,function(){
                    restProject.getAll(function(list){
                        editData.projects = list;
                    })
                });
            }
        );
    }
});