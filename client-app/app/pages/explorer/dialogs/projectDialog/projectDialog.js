

import editData from 'app/providers/editData';
import restProject from 'app/providers/rest/project';
import fileSystem from 'app/providers/rest/fileSystem';
import i18n from 'app/providers/i18n';

export default RF.registerComponent('app-project-dialog', {
    template: {
        type:'string',
        value:require('./projectDialog.html')
    },
    editData: editData,
    i18n: i18n.getAll(),
    created: function(){
        module.exports.instance = this;
    },
    createOrEditProject: function(proj){
        if (proj.oldName) {
            fileSystem.renameFolder(
                'workspace/'+proj.oldName,
                'workspace/'+proj.name,
                function(){
                    restProject.getAll(function(list){
                            editData.projects = list;
                        }
                    );
                });
        } else  {
            restProject.create(proj.name,function(){
                restProject.getAll(function(list){
                    editData.projects = list;
                });
            });
        }
        RF.getComponentById('projectDialog').close();
    }
});
