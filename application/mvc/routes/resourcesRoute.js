'use strict';

var express = require('express');
var session = require('express-session');
var url = require('url');

var multipart = require('connect-multiparty')();

var utils = require.main.require('./application/utils/utils');
var resourcesController = require.main.require('./application/mvc/controllers/resourcesController');
var generatorController = require.main.require('./application/mvc/controllers/generatorController');



module.exports.init = function(app) {

    app.get('/generateEngine',function(req,res){
        res.send(
            generatorController.generateEngine(
                {
                    engineOnly:1
                }
            )
        )
    });

    app.get('/',function(req,res){
        res.render('main',{
            defaultCodeScript:resourcesController.DEFAULT_CODE_SCRIPT
        });
    });

    app.get('/editor',function(req,res){
        res.render('editor',utils.parametrize({}));
    });

    var getModelFromBody = function(req) {
        return JSON.parse((req.body && req.body.model)||'{}');
    };

    app.post('/resource/create',multipart,function(req,res){
        var pathToUploadedFile = req.files && req.files.file && req.files.file.path;
        var projectName = req.body.projectName;
        var result = resourcesController.create(
            getModelFromBody(req),
            pathToUploadedFile,
            projectName
        );
        res.send(result);
    });

    app.post('/resource/edit',multipart,function(req,res){
        var pathToUploadedFile = req.files && req.files.file && req.files.file.path;
        var projectName = req.body.projectName;
        var result = resourcesController.edit(getModelFromBody(req),pathToUploadedFile,projectName);
        res.send(result);
    });

    app.post('/resource/getAll',function(req,res){
        var result = {};
        var projectName = req.body.projectName;
        resourcesController.RESOURCE_NAMES.forEach(function(key){
            result[key] = resourcesController.getAll(key,projectName);
        });
        result.gameProps = resourcesController.getGameProps(projectName);
        result.commonBehaviour = resourcesController.getCommonBehaviourAttrs(projectName);
        res.send(result);
    });

    app.post('/resource/delete',function(req,res){
        var id = req.body.id;
        var type = req.body.type;
        var projectName = req.body.projectName;
        resourcesController.delete(id,type,projectName);
        res.send({});
    });


    app.post('/deleteObjectFromResource',function(req,res){
        var resourceType = req.body.resourceType;
        var resourceId = req.body.resourceId;
        var objectType = req.body.objectType;
        var objectId = req.body.objectId;
        var projectName = req.body.projectName;
        resourcesController.deleteObjectFromResource(
            resourceType,resourceId,
            objectType,objectId,projectName
        );
        res.send({});
    });

    app.post('/gameProps/save',multipart,function(req,res){
        var projectName = req.body.projectName;
        resourcesController.saveGameProps(getModelFromBody(req),projectName);
        res.send({});
    });


    app.post('/createOrEditObjectInResource',function(req,res){
        var model = getModelFromBody(req);
        var resourceId = req.body.resourceId;
        var resourceType = req.body.resourceType;
        var objectType = req.body.objectType;
        var projectName = req.body.projectName;
        res.send(
            resourcesController.createOrEditObjectInResource(
                resourceType,resourceId,
                objectType,model,
                projectName
            )
        );
    });

    app.post('/createFile',function(req,res){
        var name = req.body.name;
        var path = req.body.path;
        var content = req.body.content;
        var projectName = req.body.projectName;
        res.send(
            resourcesController.createFile(name,path,content,projectName)
        );
    });

    app.post('/readFile',function(req,res){
        var name = req.body.name;
        var path = req.body.path;
        var projectName = req.body.projectName;
        res.send(
            resourcesController.readFile(name,path,projectName)
        );
    });


    app.get('/generate',function(req,res){
        var queryData = url.parse(req.url, true).query;
        generatorController.generate(queryData,function(result){
            res.send(result)
        });
    });

    app.get('/getProjects',function(req,res){
        res.send(resourcesController.getProjects());
    });

    app.post('/createProject',function(req,res){
        var projectName = req.body.projectName;
        res.send(resourcesController.createProject(projectName));
    });

    app.post('/renameFolder',function(req,res){
        var oldName = req.body.oldName;
        var newName = req.body.newName;
        resourcesController.renameFolder(oldName,newName);
        res.send({});
    });

    app.post('/deleteFolder',function(req,res){
        var name = req.body.name;
        resourcesController.deleteFolder(name);
        res.send({});
    });

    app.post('/setTile',function(req,res){
        var
            sceneId = req.body.sceneId,
            x = req.body.x,
            y = req.body.y,
            tileIndex = req.body.tileIndex,
            projectName = req.body.projectName;
        res.send(
            resourcesController.setTile(sceneId,x,y,tileIndex,projectName)
        );
    })

};
