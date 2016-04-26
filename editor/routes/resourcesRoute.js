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

    app.post('/imageResource/create',multipart,function(req,res){
        var name = req.files.file.name;
        var path = req.files.file.path;
        var result = resourcesController.addResourceImageFile(name,path);
        res.send(result);
    });

    app.get('/imageResource/getAll',multipart,function(req,res){
        var result = resourcesController.getAll('images');
        res.send(result);
    });

};
