

var abstractDialog = require('providers/abstractDialog');

var editData = require('providers/editData');
var resource = require('providers/resource');
var restProject = require('providers/rest/project');
var fileSystem = require('providers/rest/fileSystem');

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
            this.close();
        }
    }
});
