var app = require.main.require('./application/base/expressApp').app;

process.on('uncaughtException',function(e){
    console.log(e);
});

var server = app.listen(9000, function () {

    var host = server.address().address;
    var port = server.address().port;
    console.log("app listening at http://" + host + ':' + port);

});