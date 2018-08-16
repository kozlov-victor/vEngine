
import {nodeRequire} from "../../base/fns";
export class WsService {
    constructor(){}

    private connections = [];

    public send(clientId:string,data:any){
        let connectionItem = this.connections.find(c=>c.clientId==clientId);
        if (!connectionItem) return false;
        connectionItem.connection.sendUTF(JSON.stringify(data));
        return true;
    }

    private execute(connection,payload){
        if (payload.clientId) {
            this.connections.push({
                connection,
                clientId: payload.clientId
            })
        }
    }

    start(httpServer){
        let WebSocketServer = nodeRequire('websocket').server;
        let wsServer = new WebSocketServer({
            httpServer,
            // You should not use autoAcceptConnections for production
            // applications, as it defeats all standard cross-origin protection
            // facilities built into the protocol and the browser.  You should
            // *always* verify the connection's origin and decide whether or not
            // to accept it.
            autoAcceptConnections: false
        });
        wsServer.on('request', (request)=> {
            let connection = request.accept(null, request.origin);
            // This is the most important callback for us, we'll handle
            // all messages from users here.
            connection.on('message', (message)=> {
                if (message.type === 'utf8') {
                    let payload = JSON.parse(message.utf8Data);
                    this.execute(connection,payload);
                }
            });
            connection.on('close', (connection)=> {
                let index = this.connections.findIndex(it=>it.connection===connection);
                let conn:any = this.connections.splice(index,1);
                console.log('closed',conn.clientId);
            });
        });
    }

}

export const wsService:WsService = new WsService();