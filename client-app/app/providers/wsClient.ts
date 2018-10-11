
export class WsClient {

    private onDataCB:Function = null;
    private socket:WebSocket;

    constructor(clientId:string){
        let socket = new WebSocket(`ws://${location.host}`);
        socket.onopen = ()=> {
            console.log('ws opened');
            socket.send(JSON.stringify({clientId}))
        };

        socket.onclose = (event)=> {
            if (!event.wasClean) {
                throw event;
            } else {
                console.log('closed');
            }
        };

        socket.onmessage = (event)=> {
            let payload = JSON.parse(event.data);
            this.onDataCB && this.onDataCB(payload);
        };

        socket.onerror = (error)=> {
            console.error("ws connection error",error);
        };
        this.socket = socket;
    }

    onData(fn:Function){
        this.onDataCB = fn;
    }

    close(){
        this.socket && this.socket.close();
    }


}