'use strict';

var express = require('express');
var session = require('express-session');

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
        ['audio','spriteSheet','frameAnimation','gameObject','scene'].forEach(function(key){
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

    app.post('/resource/deleteGameObjectFromScene',function(req,res){
        var sceneId = req.body.sceneId;
        var objectId = req.body.objectId;
        resourcesController.deleteGameObjectFromScene(sceneId,objectId);
    });

    app.post('/gameProps/save',multipart,function(req,res){
        resourcesController.saveGameProps(getModelFromBody(req));
        res.send({});
    });

    app.post('/resource/scene/gameObjectProps',function(req,res){
        var model = getModelFromBody(req);
        var resourceId = req.body.resourceId;
        res.send(
            resourcesController.createOrEditObjectInResource('scene',resourceId,'gameObjectProps',model)
        );
    });

    app.get('/generate',function(req,res){
        var gen = generatorController.generate();
        res.send(gen);
    });

};
