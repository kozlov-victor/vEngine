

var abstractDialog = require('providers/abstractDialog');

var editData = require('providers/editData');
var resource = require('providers/resource');

module.exports.component = Vue.component('app-project-dialog', {
    mixins:[abstractDialog],
    props: [],
    template: require('./projectDialog.html'),
    data: function () {
        return {
            form:require('providers/validator').new(),
            editData: editData,
            i18n: require('providers/i18n').getAll()
        }
    },
    created: function(){
        module.exports.instance = this;
    },
    components: {

    },
    methods: {

    }
});



//s.openProject = function(project){
//    resourceDao.loadProject(project.name);
//};
//
//s.createOrEditProject = function(proj){
//    if (proj.name && proj.oldName) {
//        resourceDao.renameFolder(
//            'workspace/'+proj.oldName,
//            'workspace/'+proj.name,
//            function(){
//                resourceDao.getProjects(function(list){
//                        editData.projects = list;
//                        uiHelper.closeDialog();
//                    }
//                );
//            });
//    } else if (proj.name) {
//        resourceDao.createProject(proj.name,function(){
//            resourceDao.getProjects(function(list){
//                editData.projects = list;
//                uiHelper.closeDialog();
//            });
//        });
//    }
//};
//
//s.deleteProject = function(proj){
//    resourceDao.deleteFolder('workspace/'+proj.name,function(){
//        resourceDao.getProjects(function(list){
//            editData.projects = list;
//            uiHelper.closeDialog();
//        })
//    });
//};