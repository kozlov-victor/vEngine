'use strict';

var express = require('express');
var session = require('express-session');

var multipart = require('connect-multiparty')();

var i18n = require('../base/i18n');
var utils = require('../utils/utils');
var mainController = require('../controllers/mainController');
var resourcesController = require('../controllers/resourcesController');


module.exports.init = function(app) {

    mainController.initFolderStructure();

    app.get('/',function(req,res){
        res.render('main/main',utils.parametrize());
    });

    app.post('/resource/create',multipart,function(req,res){
        var name = req.files.file.name;
        var path = req.files.file.path;
        var type = req.body.type;
        var result = resourcesController.create(name,type,path);
        res.send(result);
    });

    app.post('/resource/getAll',function(req,res){
        var type = req.body.type;
        var result = resourcesController.getAll(type);
        res.send(result);
    });

    app.post('/resource/delete',function(req,res){
        var nameOfItem = req.body.name;
        var type = req.body.type;
        resourcesController.delete(nameOfItem,type);
        res.send({});
    });

};
