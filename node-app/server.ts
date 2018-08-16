import {ExpressApp} from './base/expressApp';
import {wsService} from './services/ws/wsService'

global.process.on('uncaughtException',function(e){
    console.log(e);
});

class Server{
    constructor(){

    }

    start(){
        const PORT = 9000;
        console.log('app started at',new Date());

        const expressApp = new ExpressApp();
        const server = expressApp.getApp().listen(PORT,()=>{
            let address = server.address();
            let host = address.address;
            let port = address.port;
            console.log(`app listening at http://${host}:${port}`);
        });
        return server;
    }
}

const server = new Server();
let httpServer = server.start();
wsService.start(httpServer);

