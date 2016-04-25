var express = require('express');
var session = require('express-session');

var i18n = require('../base/i18n');
var utils = require('../utils/utils');
var mainController = require('../controllers/mainController');


module.exports.init = function(app) {

    app.get('/',function(req,res){
        res.render('main/main',utils.parametrize());
    });

};
