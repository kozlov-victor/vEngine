var express = require('express');
var app = express();
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



var setUpRotes = function(app){
    fs.readDirSync(appDir+'/application/mvc/routes').forEach(function(itm){
        var fileNameWithoutExt = itm.name.split('.')[0];
        require(appDir+'/application/mvc/routes/'+fileNameWithoutExt).init(app);
    });
};

var handleErrors = function(app){
    app.use(function(err, req, res, next) {
        res.status(500).send(
            'error 500: ' + err.message
        );
    });
};

require.main.require('./application/base/hbsSettings').init();

setUpRotes(app);

handleErrors(app);

module.exports.app = app;
