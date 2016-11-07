var express = require('express');
var app = express();
var fs = require.main.require('./application/base/fs');
var path = require('path');
var appDir = path.dirname(require.main.filename);


var session = require('express-session');
var bodyParser = require('body-parser');

app.set('views', './application/mvc/views');
app.engine('ejs', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.use(session({
    key: 'session_cookie_name',
    secret: 'session_cookie_secret' ,
    resave: true,
    saveUninitialized: true
}));
app.use(express.static('resources/public'));
app.use(express.static('workspace'));
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

var setUpRotes = function(app){
    fs.readDirSync(appDir+'/application/mvc/routes').forEach(function(itm){
        var fileNameWithoutExt = itm.name.split('.')[0];
        require(appDir+'/application/mvc/routes/'+fileNameWithoutExt).init(app);
    });
};

setUpRotes(app);

module.exports.app = app;