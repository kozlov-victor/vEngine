const express = require('express');
const app = express();
const url = require('url');
const fs = require.main.require('./application/base/fs');
const path = require('path');
const appDir = path.dirname(require.main.filename);
const exphbs  = require('express-handlebars');
const annotation = require('annotation');


const session = require('express-session');
const bodyParser = require('body-parser');
const multipart = require('connect-multiparty')();

app.set('views', './application/mvc/views');


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

const processCommonRequest = function(opts){
    console.log(`mapped: ${opts.requestType}: ${opts.controllerName}/${opts.methodName}`);

    app[opts.requestType](`${opts.controllerName}/${opts.methodName}`,function(req,res){

        opts.methodName = opts.methodName || 'index';

        let params;
        switch (opts.requestType) {
            case 'post':
                params = req.body;
                break;
            default:
                params = url.parse(req.url, true).query;
                break;
        }

        let codeResult = opts.ctrl[opts.methodName](params);
        if (opts.responseType=='view') {
            if (codeResult) codeResult.params = params;
            res.render(opts.methodName,codeResult);
        } else {
            res.send(codeResult);
        }
    })
};

const processMultiPartRequest = function(opts){
    app.post(`${opts.controllerName}/${opts.methodName}`,multipart,function(req,res){
        let pathToUploadedFile = req.files && req.files.file && req.files.file.path;
        let params = req.body;
        let file = fs.readFileSync(pathToUploadedFile,true);
        fs.deleteFileSync(pathToUploadedFile);
        params.file = file;
        if (params.fileName && params.fileName.splice && params.fileName[0]) {
            params.fileName = params.fileName[0];
        }
        let result = opts.ctrl[opts.methodName](params);
        res.send(result);
    });
    console.log(`mapped: ${opts.requestType}: ${opts.controllerName}/${opts.methodName}`);
};

const getAnnotations = (reader,methodName)=>{
    let annotations = reader.getMethodAnnotations(methodName);
    if (!annotations) return {};
    let res = {};
    annotations.forEach((it)=>{
        res[it.key] = it.value;
    });
    return res;
};

const setUpControllers = function(){
    fs.readDirSync(appDir+'/application/mvc/controllers').forEach(function(itm) {
        let fileNameWithoutExt = itm.name.split('.')[0];
        let Ctrl = require(appDir + '/application/mvc/controllers/' + fileNameWithoutExt).controller;
        if (!Ctrl) return;
        let ctrl = new Ctrl();

        annotation(itm.fullName, function(AnnotationReader) {
            //console.log(AnnotationReader.getClassAnnotations());
            //console.log(AnnotationReader.getMethodAnnotations('test'));
            //console.log(AnnotationReader.getPropertyAnnotations('test'));
            Object.getOwnPropertyNames(Ctrl.prototype).forEach((methodName) => {
                if (methodName == 'constructor') return;

                let annotations = getAnnotations(AnnotationReader, methodName);
                let requestType = annotations.Request.type;
                let responseType = annotations.Response && annotations.Response.type;

                let controllerName = fileNameWithoutExt.replace('Controller', '');
                if (controllerName == 'index') {
                    controllerName = '';
                    if (methodName=='index') methodName = '';
                }
                else controllerName = '/' + controllerName;

                let opts = {ctrl, requestType, responseType, controllerName, methodName};

                if (requestType == 'multipart') {
                    processMultiPartRequest(opts);
                } else {
                    processCommonRequest(opts);
                }
            });
        });
    });
};

let handleErrors = function(app){
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
