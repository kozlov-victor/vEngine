'use strict';



const utils = require.main.require('./node-app/utils/utils');
const resourcesService = require.main.require('./node-app/mvc/services/resourceService');
const generatorService = require.main.require('./node-app/mvc/services/generatorService');

class IndexController{

    /**
     * @Method("index");
     * @Request({"type":"get"});
     * @Response({"type":"view"})
     */
    index(){
        return {
            defaultCodeScript:resourcesService.DEFAULT_CODE_SCRIPT
        }
    }

    /**
     * @Method("editor");
     * @Request({"type":"get"});
     * @Response({"type":"view"})
     */
    editor(){

    }
}

module.exports.controller = IndexController;

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
//            defaultCodeScript:resourceService.DEFAULT_CODE_SCRIPT
//        });
//    });
//
//    app.get('/mainNew',function(req,res){
//        res.render('mainNew',{
//            defaultCodeScript:resourceService.DEFAULT_CODE_SCRIPT
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
//        var result = resourceService.create(
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
//        var result = resourceService.edit(getModelFromBody(req),pathToUploadedFile,projectName);
//        res.send(result);
//    });
//
//    app.post('/resource/getAll',function(req,res){
//        var result = {};
//        var projectName = req.body.projectName;
//        resourceService.RESOURCE_NAMES.forEach(function(key){
//            result[key] = resourceService.getAll(key,projectName);
//        });
//        result.gameProps = resourceService.getGameProps(projectName);
//        result.commonBehaviour = resourceService.getCommonBehaviourAttrs(projectName);
//        res.send(result);
//    });
//
//    app.post('/resource/delete',function(req,res){
//        var id = req.body.id;
//        var type = req.body.type;
//        var projectName = req.body.projectName;
//        resourceService.delete(id,type,projectName);
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
//        resourceService.deleteObjectFromResource(
//            resourceType,resourceId,
//            objectType,objectId,projectName
//        );
//        res.send({});
//    });
//
//    app.post('/gameProps/save',function(req,res){
//        resourceService.saveGameProps(req.body.model,req.body.projectName);
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
//            resourceService.createOrEditObjectInResource(
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
//            resourceService.createFile(path,content,projectName)
//        );
//    });
//
//    app.post('/readFile',function(req,res){
//        var path = req.body.path;
//        var projectName = req.body.projectName;
//        res.send(
//            resourceService.readFile(path,projectName)
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
//        res.send(resourceService.getProjects());
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
//            resourceService.setTile(sceneId,x,y,tileIndex,projectName)
//        );
//    })
//
//};
