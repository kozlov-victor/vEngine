


window.app.
    controller('projectCtrl', function (
        $scope,
        $http,
        $sce,
        editData,
        resourceDao,
        uiHelper,
        i18n,
        utils) {

        var s = $scope;
        s.editData = editData;
        s.uiHelper = uiHelper;
        s.i18n = i18n.getAll();
        s.utils = utils;
        s.resourceDao = resourceDao;


        s.openProject = function(project){
            resourceDao.loadProject(project.name);
        };

        s.createOrEditProject = function(proj){
            if (proj.name && proj.oldName) {
                resourceDao.renameFolder(
                    'workspace/'+proj.oldName,
                    'workspace/'+proj.name,
                    function(){
                        resourceDao.getProjects(function(list){
                                editData.projects = list;
                            uiHelper.closeDialog();
                        }
                    );
                });
            } else if (proj.name) {
                resourceDao.createProject(proj.name,function(){
                    resourceDao.getProjects(function(list){
                        editData.projects = list;
                        uiHelper.closeDialog();
                    });
                });
            }
        };

        s.deleteProject = function(proj){
            resourceDao.deleteFolder('workspace/'+proj.name,function(){
                resourceDao.getProjects(function(list){
                    editData.projects = list;
                    uiHelper.closeDialog();
                })
            });
        };

        (function(){

            var dialogState = uiHelper.getDialogState();
            if (dialogState.opName=='create') {
                editData.currProjectInEdit = {};
            } else if (dialogState.opName=='edit'){
                editData.currProjectInEdit = {};
                editData.currProjectInEdit.oldName =
                    editData.currProjectInEdit.name =
                        dialogState.opObject.name;
            } else {
                resourceDao.getProjects(function(list){
                    editData.projects = list;
                });
            }
            uiHelper.opName = null;

        })();

    });