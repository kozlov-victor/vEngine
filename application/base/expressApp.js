var express = require('express');
var app = express();
var url = require('url');
var fs = require.main.require('./application/base/fs');
var path = require('path');
var appDir = path.dirname(require.main.filename);
var exphbs  = require('express-handlebars');


var session = require('express-session');
var bodyParser = require('body-parser');

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


var setUpControllers = function(app){
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
            console.log('mapped: ' + methodObj.type + ': ' +controllerName + '/'+key);
            app[methodObj.type](controllerName + '/'+key,function(req,res){
                var params;
                if (methodObj.type=='post') {
                    params = req.body;
                } else {
                    params = url.parse(req.url, true).query;
                }
                var codeResult = methodObj.code(params);
                if (codeResult) codeResult.params = params;
                if (methodObj.render=='view') {
                    res.render(key,codeResult);
                } else {
                    res.send(codeResult);
                }
            })
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
