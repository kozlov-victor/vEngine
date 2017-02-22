
var Resource = function(){

    var self = this;
    var editData = require('providers/editData');
    var http = require('providers/http');

    var bundle = _require('bundle');
    var collections = _require('collections');
    var CommonBehaviour = _require('commonBehaviour');
    var TextField = _require('textField');
    var Layer = _require('layer');

    var _loadResources = function(projectName){
        http.post('/resource/getAll',{projectName:projectName},function(response){
            bundle.prepare(response);
            Object.keys(bundle).forEach(function(key){
                if (bundle[key] && bundle[key].call) return;
                if (editData[key] && editData[key].clear) {
                    editData[key].clear();
                    bundle[key].forEach(function(el){
                        editData[key].add(el);
                    });
                }
                Vue.set(editData,key,bundle[key]);
            });
            editData.gameProps = bundle.gameProps;
            editData.commonBehaviourList = new collections.List();
            response.commonBehaviour.forEach(function(cb){
                editData.commonBehaviourList.add(new CommonBehaviour(cb));
            });
            editData.userInterfaceList.clear().add(new TextField({protoId:'0_0_1'}));
        });
    };

    this.loadProject = function(projectName){
        editData.reset();
        editData.projectName = projectName;
        document.title = editData.projectName;
        sessionStorage.projectName = editData.projectName;
        Promise.
            resolve().
            then(function(){
                return _loadResources(projectName);
            }).
            then(function(){
                if (!bundle.sceneList.isEmpty()) editData.currSceneInEdit = bundle.sceneList.get(0);
                if (editData.currSceneInEdit._layers) {
                    if (editData.currSceneInEdit._layers.size()) {
                        editData.currLayerInEdit = editData.currSceneInEdit._layers.get(0);
                    }
                }
                location.href = '#/editor';
            });
    };
    this.createOrEditResource = function(currResourceInEdit,ResourceClass,resourceList,callBack){
        var formData = new FormData();
        formData.append('file',currResourceInEdit._file);
        delete currResourceInEdit._file;
        var model = {};
        Object.keys(currResourceInEdit).forEach(function(key){
            model[key] = currResourceInEdit[key];
        });
        formData.append('model',JSON.stringify(model));
        formData.append('projectName',editData.projectName);
        var op = currResourceInEdit.id?'edit':'create';
        http.post('/resource/'+op,formData,function(item){
            if (op=='create') {
                var r = new ResourceClass(item);
                resourceList.add(r);
                callBack && callBack({type:'create',r:r});
            } else {
                if (!(resourceList && resourceList)) return;
                var index = resourceList.indexOf({id:item.id});
                resourceList.get(index).fromJSON(item);
                callBack && callBack({type:'edit',r:resourceList.rs[index]});
            }
        });
    };

    this.deleteResource = function(idOrObject,type,callBack) {
        var id = (typeof idOrObject == 'object')? idOrObject.id:idOrObject;
        type = type || idOrObject.type;
        http.post(
            '/resource/delete',
            {
                id: id,
                type: type,
                projectName: editData.projectName
            },
            function () {
                editData[type + 'List'].remove({id: id});
                callBack && callBack();
            }
        );
    };

    // todo refactor
    this.createOrEditObjectInResource = function(resourceType,resourceId,objectType,object,callback) {
        var op = object.id ? 'edit' : 'create';
        http.post(
            '/createOrEditObjectInResource',
            {
                model: JSON.stringify(object),
                resourceId: resourceId,
                resourceType: resourceType,
                objectType: objectType,
                projectName: editData.projectName
            },
            function (resp) {
                callback && callback({type: op, r: resp});
            }
        );
    };
    // todo refactor
    this.createOrEditLayer = function(l,s,dialog){
        self.createOrEditResource(l,Layer,bundle.layerList,
            function(item){
                if (item.type=='create') {
                    self.createOrEditObjectInResource(
                        s.type,
                        s.id,
                        'layerProps',
                        {
                            type:'layer',
                            protoId:item.r.id
                        },
                        function(resp){
                            l.id = resp.r.id;
                            l.protoId = item.r.id;
                            l._scene = editData.currSceneInEdit;
                            s._layers.add(l);
                            dialog.close();
                        }
                    );
                }
            });
    };

    this.saveGameProps = function(gameProps){
        http.post(
            '/gameProps/save',
            {
                model:gameProps,
                projectName: editData.projectName
            }
        )
    };


    this.createOrEditObjectInResource = function(resourceType,resourceId,objectType,object,callback){
        var op = object.id?'edit':'create';
        http.post('/createOrEditObjectInResource',{
            model:JSON.stringify(object),
            resourceId:resourceId,
            resourceType:resourceType,
            objectType:objectType,
            projectName:editData.projectName
        },function(resp){
            callback && callback({type:op,r:resp});
        });
    };

    (function(){
        if (sessionStorage.projectName) {
            self.loadProject(sessionStorage.projectName);
        } else {
            location.href = '#/explorer';
        }
    })();
};

module.exports = new Resource();