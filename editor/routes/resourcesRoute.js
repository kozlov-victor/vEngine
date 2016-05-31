'use strict';

var express = require('express');
var session = require('express-session');
var url = require('url');

var multipart = require('connect-multiparty')();

var utils = require('../utils/utils');
var mainController = require('../controllers/mainController');
var resourcesController = require('../controllers/resourcesController');
var generatorController = require('../controllers/generatorController');

module.exports.init = function(app) {

    mainController.initFolderStructure();

    app.get('/',function(req,res){
        res.render('main/main',utils.parametrize({}));
    });

    var getModelFromBody = function(req) {
        return JSON.parse((req.body && req.body.model)||'{}');
    };

    app.post('/resource/create',multipart,function(req,res){
        var pathToUploadedFile = req.files && req.files.file && req.files.file.path;
        var result = resourcesController.create(getModelFromBody(req),pathToUploadedFile);
        res.send(result);
    });

    app.post('/resource/edit',multipart,function(req,res){
        var pathToUploadedFile = req.files && req.files.file && req.files.file.path;
        var result = resourcesController.edit(getModelFromBody(req),pathToUploadedFile);
        res.send(result);
    });

    app.post('/resource/getAll',function(req,res){
        var result = {};
        resourcesController.RESOURCE_NAMES.forEach(function(key){
            result[key] = resourcesController.getAll(key);
        });
        result.gameProps = resourcesController.getGameProps();
        res.send(result);
    });

    app.post('/resource/delete',function(req,res){
        var id = req.body.id;
        var type = req.body.type;
        resourcesController.delete(id,type);
        res.send({});
    });


    app.post('/deleteObjectFromResource',function(req,res){
        var resourceType = req.body.resourceType;
        var resourceId = req.body.resourceId;
        var objectType = req.body.objectType;
        var objectId = req.body.objectId;
        resourcesController.deleteObjectFromResource(resourceType,resourceId,objectType,objectId);
        res.send({});
    });

    app.post('/gameProps/save',multipart,function(req,res){
        resourcesController.saveGameProps(getModelFromBody(req));
        res.send({});
    });


    app.post('/createOrEditObjectInResource',function(req,res){
        var model = getModelFromBody(req);
        var resourceId = req.body.resourceId;
        var resourceType = req.body.resourceType;
        var objectType = req.body.objectType;
        res.send(
            resourcesController.createOrEditObjectInResource(resourceType,resourceId,objectType,model)
        );
    });

    app.get('/generate',function(req,res){
        var opts = {};
        var queryData = url.parse(req.url, true).query;
        opts.debug = !!queryData.debug;
        generatorController.generate(opts,function(result){
            res.send(result)
        });
    });

};
