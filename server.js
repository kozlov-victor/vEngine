const app = require.main.require('./application/base/expressApp').app;

process.on('uncaughtException',function(e){
    console.log(e);
});

const PORT = 9000;

const server = app.listen(PORT, function () {

    let host = server.address().address;
    let port = server.address().port;
    console.log("app listening at http://" + host + ':' + port);

});