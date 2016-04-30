'use strict';

var express = require('express');
var session = require('express-session');

var multipart = require('connect-multiparty')();

var utils = require('../utils/utils');
var mainController = require('../controllers/mainController');
var resourcesController = require('../controllers/resourcesController');


module.exports.init = function(app) {

    mainController.initFolderStructure();

    app.get('/',function(req,res){
        res.render('main/main',utils.parametrize({}));
    });

    app.post('/resource/create',multipart,function(req,res){
        var pathToUploadedFile = req.files.file.path;
        var item = {};
        req.body && Object.keys(req.body).forEach(function(key){
            item[key] = req.body[key];
        });
        var result = resourcesController.create(item,pathToUploadedFile);
        res.send(result);
    });

    app.post('/resource/edit',multipart,function(req,res){
        var pathToUploadedFile = req.files && req.files.file && req.files.file.path;
        var item = {};
        req.body && Object.keys(req.body).forEach(function(key){
            item[key] = req.body[key];
        });
        var result = resourcesController.edit(item,pathToUploadedFile);
        res.send(result);
    });

    app.post('/resource/getAll',function(req,res){
        var type = req.body.type;
        var result = resourcesController.getAll(type);
        res.send(result);
    });

    app.post('/resource/delete',function(req,res){
        var id = req.body.id;
        var type = req.body.type;
        resourcesController.delete(id,type);
        res.send({});
    });

};
