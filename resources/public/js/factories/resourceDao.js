
app


    .factory('resourceDao',function(
        $http,
        editData,
        uiHelper
    ){
        var self = this;
        var _loadResources = function(projectName){
            return new Promise(function(resolve){
                $http({
                    url: '/resource/getAll',
                    method: "POST",
                    data: {projectName:projectName}
                }).
                success(function (response) {
                    ve_local.bundle = new ve_local.Bundle(response);
                    ve_local.bundle.prepare();
                    Object.keys(ve_local.bundle).forEach(function(key){
                        if (ve_local.bundle[key] && ve_local.bundle[key].call) return;
                        editData[key] = ve_local.bundle[key];
                    });
                    editData.gameProps = ve_local.bundle.gameProps;
                    editData.commonBehaviourList = new ve.collections.List();
                    response.commonBehaviour.forEach(function(cb){
                        editData.commonBehaviourList.add(new ve.models.CommonBehaviour(cb));
                    });
                    editData.userInterfaceList.add(new ve.models.TextField({protoId:'0_0_1'}));
                    resolve();
                });
            });
        };
        this.loadProject = function(projectName){
            editData.projectName = projectName;
            sessionStorage.projectName = projectName;
            Promise.
                resolve().
                then(function(){
                    return _loadResources(projectName);
                }).
                then(function(){
                    if (!ve_local.bundle.sceneList.isEmpty()) editData.currSceneInEdit = ve_local.bundle.sceneList.get(0);
                    if (editData.currSceneInEdit) {
                        if (editData.currSceneInEdit._layers.size()) {
                            editData.currLayerInEdit = editData.currSceneInEdit._layers.get(0);
                        }
                    }
                    location.href = '#/editor';
                });
        };
        this.createOrEditResource = function(currResourceInEdit,ResourceClass,resourceList,callBack, preserveDialog){
            var formData = new FormData();
            formData.append('file',currResourceInEdit._file);
            var model = {};
            currResourceInEdit.toJSON_Array().forEach(function(item){
                model[item.key] = item.value;
            });
            formData.append('model',JSON.stringify(model));
            formData.append('projectName',editData.projectName);
            var op = currResourceInEdit.id?'edit':'create';
            $http({
                url: '/resource/'+op,
                method: "POST",
                data: formData,
                headers: {'Content-Type': undefined}
            }).
            success(function (item) {
                if (!(ResourceClass && resourceList)) {
                    uiHelper.closeDialog();
                    return;
                }
                if (op=='create') {
                    var r = new ResourceClass(item);
                    resourceList.add(r);
                    callBack && callBack({type:'create',r:r});
                } else {
                    var index = resourceList.indexOf({id:item.id});
                    resourceList.rs[index] = new ResourceClass(item);
                    callBack && callBack({type:'edit',r:resourceList.rs[index]});
                }
                !preserveDialog && uiHelper.closeDialog();
            });
        };
        this.createOrEditResourceSimple = function(objResource){
            this.createOrEditResource(objResource,objResource.constructor,ve_local.bundle[objResource.type+'List']);
        };
        this.deleteObjectFromResource = function(resourceType,resourceId,objectType,objectId,callback){
            $http({
                url: '/deleteObjectFromResource',
                method: "POST",
                headers: {'Content-Type': 'application/json'},
                data: {
                    resourceType:resourceType,
                    resourceId:resourceId,
                    objectType:objectType,
                    objectId:objectId,
                    projectName:editData.projectName
                }
            }).
            success(function (res) {
                    callback && callback();
            });
        };
        this.deleteResource = function(id,type,callBack){
            $http({
                url: '/resource/delete',
                method: "POST",
                data: {
                    id:id,
                    type:type,
                    projectName:editData.projectName
                }
            }).
            success(function (res) {
                editData[type+'List'].remove({id: id});
                callBack && callBack();
            });
        };
        this.saveGameProps = function(gameProps){
            var formData = new FormData();
            formData.append('model',JSON.stringify(gameProps));
            formData.append('projectName',editData.projectName);
            $http({
                url: '/gameProps/save',
                method: "POST",
                data: formData,
                headers: {'Content-Type': undefined}
            })
        };
        this.post = function(url,data,callBack){
            data.projectName = editData.projectName;
            $http({
                url: '/gameProps/save',
                method: "POST",
                data: data,
                headers: {'Content-Type': undefined}
            }).
                success(function (resp) {
                    callBack && callBack(resp);
                });
        };
        this.postMultiPart = function(url,formData,callBack){
            $http({
                url: url,
                method: "POST",
                data: formData,
                headers: {'Content-Type': undefined}
            }).
            success(function (resp) {
                callBack && callBack(resp);
            });
        };
        this.createOrEditObjectInResource = function(resourceType,resourceId,objectType,object,callback){
            var op = object.id?'edit':'create';
            $http({
                url: '/createOrEditObjectInResource',
                method: "POST",
                data: {
                    model:JSON.stringify(object),
                    resourceId:resourceId,
                    resourceType:resourceType,
                    objectType:objectType,
                    projectName:editData.projectName
                },
                headers: {'Content-Type': 'application/json'}
            }).
            success(function (resp) {
                callback && callback({type:op,r:resp});
            });
        };
        this.createOrEditLayer = function(l){
            self.createOrEditResource(l,ve.models.Layer,ve_local.bundle.layerList,
                function(item){
                    if (item.type=='create') {
                        self.createOrEditObjectInResource(
                            editData.currSceneInEdit.type,
                            editData.currSceneInEdit.id,
                            'layerProps',
                            {
                                type:'layer',
                                protoId:item.r.id
                            },
                            function(resp){
                                var l = editData.currLayerInEdit.clone(ve.models.Layer);
                                l.id = resp.r.id;
                                l.protoId = item.r.id;
                                l._scene = editData.currSceneInEdit;
                                editData.currSceneInEdit._layers.add(l);
                            }
                        );
                    }
                });
        };
        this.createFile = function(name,path,content,callback){
            $http({
                url: '/createFile',
                method: "POST",
                data: {
                    name:name,
                    path:path,
                    content:content,
                    projectName: editData.projectName
                },
                headers: {'Content-Type': 'application/json'}
            }).
            success(function (resp) {
                callback && callback(resp);
            });
        };
        this.readFile = function(name,path,callback){
            $http({
                url: '/readFile',
                method: "POST",
                data: {
                    name:name,
                    path:path,
                    projectName: editData.projectName
                },
                headers: {'Content-Type': 'application/json'}
            }).
            success(function (resp) {
                callback && callback(resp);
            });
        };
        this.getProjectNames = function(callback){
            $http({
                url: '/getProjectNames',
                method: "GET",
                headers: {'Content-Type': 'application/json'}
            }).
            success(function (resp) {
                callback && callback(resp);
            });
        };
        this.createProject = function(projectName,callback){
            $http({
                url: '/createProject',
                method: "POST",
                data: {projectName:projectName},
                headers: {'Content-Type': 'application/json'}
            }).
            success(function (resp) {
                callback && callback(resp);
            });
        };


        (function(){
            if (sessionStorage.projectName) {
                self.loadProject(sessionStorage.projectName);
            } else {
                location.href = '#/explorer';
            }
        })();


        return this;
    });
