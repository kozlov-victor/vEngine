var express = require('express');
var app = express();
var url = require('url');
var fs = require.main.require('./application/base/fs');
var path = require('path');
var appDir = path.dirname(require.main.filename);
var exphbs  = require('express-handlebars');


var session = require('express-session');
var bodyParser = require('body-parser');
var multipart = require('connect-multiparty')();

app.set('views', './application/mvc/views');

//app.engine('ejs', require('ejs').renderFile);
//app.set('view engine', 'ejs');

app.engine('html', exphbs({
    // defaultLayout: 'main'
}));
app.set('view engine', 'html');

app.use(session({
    key: 'session_cookie_name',
    secret: 'session_cookie_secret' ,
    resave: true,
    saveUninitialized: true
}));
app.use(express.static('resources/public'));
app.use(express.static('workspace'));
app.use(express.static('resources/generatorResources/shared'));
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

var processCommonRequest = function(methodObj,controllerName,methodName){
    console.log('mapped: ' + methodObj.type + ': ' +controllerName + '/'+methodName);
    app[methodObj.type](controllerName + '/'+methodName,function(req,res){

        var params;
        switch (methodObj.type) {
            case 'post':
                params = req.body;
                break;
            default:
                params = url.parse(req.url, true).query;
                break;
        }
        var codeResult = methodObj.code(params);
        if (methodObj.render=='view') {
            if (codeResult) codeResult.params = params;
            res.render(methodName,codeResult);
        } else {
            res.send(codeResult);
        }
    })
};

var processMultiPartRequest = function(methodObj,controllerName,methodName){
    console.log('mapped: post(multipart): '+ controllerName + '/'+methodName);
    app.post(controllerName + '/'+methodName,multipart,function(req,res){
        var pathToUploadedFile = req.files && req.files.file && req.files.file.path;
        var params = req.body;
        var file = fs.readFileSync(pathToUploadedFile,true);
        fs.deleteFileSync(pathToUploadedFile);
        params.file = file;
        var result = methodObj.code(params);
        res.send(result);
    });
};

var setUpControllers = function(){
    fs.readDirSync(appDir+'/application/mvc/controllers').forEach(function(itm){
        var fileNameWithoutExt = itm.name.split('.')[0];
        var Ctrl = require(appDir+'/application/mvc/controllers/'+fileNameWithoutExt).controller;
        if (!Ctrl) return;
        var ctrl = new Ctrl();
        Object.keys(ctrl).forEach(function(key){
            var controllerName = fileNameWithoutExt.replace('Controller','');
            var methodObj = ctrl[key];
            if (key=='index') key = '';
            if (controllerName=='main') controllerName = '';
            else controllerName = '/' + controllerName;
            if (methodObj.type=='multipart') {
                processMultiPartRequest(methodObj,controllerName,key);
            } else {
                processCommonRequest(methodObj,controllerName,key);
            }
        })
    });
};

var handleErrors = function(app){
    app.use(function(err, req, res, next) {
        if (err) console.error(err);
        res.status(500).send(
            'error 500: ' + err.message
        );
    });
};

require.main.require('./application/base/hbsSettings').init();

setUpControllers(app);

handleErrors(app);

module.exports.app = app;
