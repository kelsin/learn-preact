import io from 'socket.io-client';

class SocketClient {
    constructor() {
        this.socket = io('http://localhost:4000');
    }

    onMessageReceived(msg, cb) {
        this.socket.on(msg, (data) => {
            console.log('SocketClient:onMessageReceived', msg, data);
            cb(data);
        });
    }

    sendMessage(msg, data) {
        console.log('SocketClient:sendMessage', msg, data);
        this.socket.emit(msg, data);
    }
}

export default new SocketClient();
