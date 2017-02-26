'use strict';



const utils = require.main.require('./application/utils/utils');
const resourcesService = require.main.require('./application/mvc/services/resourceServiceNew');
const generatorService = require.main.require('./application/mvc/services/generatorService');

module.exports.controller = function(){

    this.mainNew = {
        type:'get',
        render: 'view',
        code: function(){
            return {
                defaultCodeScript:resourcesService.DEFAULT_CODE_SCRIPT
            }
        }
    };

};

//module.exports.init = function(app) {
//
//    app.get('/generateEngine',function(req,res){
//        var queryData = url.parse(req.url, true).query || {};
//        if (!queryData.engineOnly) queryData.engineOnly = 1;
//        res.send(
//            generatorService.generateEngine(queryData)
//        )
//    });
//
//    app.get('/',function(req,res){
//        res.render('main',{
//            defaultCodeScript:resourcesService.DEFAULT_CODE_SCRIPT
//        });
//    });
//
//    app.get('/mainNew',function(req,res){
//        res.render('mainNew',{
//            defaultCodeScript:resourcesService.DEFAULT_CODE_SCRIPT
//        });
//    });
//
//    app.get('/editor',function(req,res){
//        res.render('editor',utils.parametrize({}));
//    });
//
//    app.get('/editorNew',function(req,res){
//        res.render('editorNew',utils.parametrize({}));
//    });
//
//    var getModelFromBody = function(req) {
//        return JSON.parse((req.body && req.body.model)||'{}');
//    };
//
//    app.post('/resource/create',multipart,function(req,res){
//        var pathToUploadedFile = req.files && req.files.file && req.files.file.path;
//        var projectName = req.body.projectName;
//        var result = resourcesService.create(
//            getModelFromBody(req),
//            pathToUploadedFile,
//            projectName
//        );
//        res.send(result);
//    });
//
//    app.post('/resource/edit',multipart,function(req,res){
//        var pathToUploadedFile = req.files && req.files.file && req.files.file.path;
//        var projectName = req.body.projectName;
//        var result = resourcesService.edit(getModelFromBody(req),pathToUploadedFile,projectName);
//        res.send(result);
//    });
//
//    app.post('/resource/getAll',function(req,res){
//        var result = {};
//        var projectName = req.body.projectName;
//        resourcesService.RESOURCE_NAMES.forEach(function(key){
//            result[key] = resourcesService.getAll(key,projectName);
//        });
//        result.gameProps = resourcesService.getGameProps(projectName);
//        result.commonBehaviour = resourcesService.getCommonBehaviourAttrs(projectName);
//        res.send(result);
//    });
//
//    app.post('/resource/delete',function(req,res){
//        var id = req.body.id;
//        var type = req.body.type;
//        var projectName = req.body.projectName;
//        resourcesService.delete(id,type,projectName);
//        res.send({});
//    });
//
//
//    app.post('/deleteObjectFromResource',function(req,res){
//        var resourceType = req.body.resourceType;
//        var resourceId = req.body.resourceId;
//        var objectType = req.body.objectType;
//        var objectId = req.body.objectId;
//        var projectName = req.body.projectName;
//        resourcesService.deleteObjectFromResource(
//            resourceType,resourceId,
//            objectType,objectId,projectName
//        );
//        res.send({});
//    });
//
//    app.post('/gameProps/save',function(req,res){
//        resourcesService.saveGameProps(req.body.model,req.body.projectName);
//        res.send({});
//    });
//
//
//    app.post('/createOrEditObjectInResource',function(req,res){
//        var model = getModelFromBody(req);
//        var resourceId = req.body.resourceId;
//        var resourceType = req.body.resourceType;
//        var objectType = req.body.objectType;
//        var projectName = req.body.projectName;
//        res.send(
//            resourcesService.createOrEditObjectInResource(
//                resourceType,resourceId,
//                objectType,model,
//                projectName
//            )
//        );
//    });
//
//    app.post('/createFile',function(req,res){
//        var path = req.body.path;
//        var content = req.body.content;
//        var projectName = req.body.projectName;
//        res.send(
//            resourcesService.createFile(path,content,projectName)
//        );
//    });
//
//    app.post('/readFile',function(req,res){
//        var path = req.body.path;
//        var projectName = req.body.projectName;
//        res.send(
//            resourcesService.readFile(path,projectName)
//        );
//    });
//
//
//    app.get('/generate',function(req,res){
//        var queryData = url.parse(req.url, true).query;
//        generatorService.generate(queryData,function(result){
//            res.send({})
//        });
//    });
//
//    app.get('/getProjects',function(req,res){
//        res.send(resourcesService.getProjects());
//    });
//
//

//
//    app.post('/setTile',function(req,res){
//        var
//            sceneId = req.body.sceneId,
//            x = req.body.x,
//            y = req.body.y,
//            tileIndex = req.body.tileIndex,
//            projectName = req.body.projectName;
//        res.send(
//            resourcesService.setTile(sceneId,x,y,tileIndex,projectName)
//        );
//    })
//
//};
